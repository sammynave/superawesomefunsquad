require("dotenv").load();

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    redis: {}
  };

  if (deployTarget === 'development-postbuild') {
    ENV.redis = {
      revisionKey: '__development__',
      keyPrefix: 'front-end',
      allowOverwrite: true
    };
    ENV.build = {
      environment: 'development'
    };
    ENV.plugins = ['build', 'redis'];
  }

  if (deployTarget === 'production') {
    ENV.build = {
      environment: 'production',
    };
    // configure other plugins for production deploy target here

    ENV['ssh-tunnel'] = {
      username: process.env.SSH_USERNAME,
      privateKeyPath: process.env.SSH_KEY_PATH,
      host: process.env.SSH_HOST,
      srcPort: process.env.SSH_PORT,
      dstHost: 'localhost',
      dstPort: process.env.REDIS_PORT
    };

    ENV.redis = {
      host: 'localhost',
      port: process.env.REDIS_PORT
      keyPrefix: 'front-end',
      allowOverwrite: true
    };

    ENV.s3 = {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
      bucket: 'safs'
    }
  }

  // Note: if you need to build some configuration asynchronously,ou can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
