require("dotenv").load();

module.exports = function(deployTarget) {
  var ENV = {}

  if (deployTarget === 'production') {
    ENV.build = {
      environment: 'production',
    };
    // configure other plugins for production deploy target here
    //
    ENV['ssh-tunnel'] = {
      username: process.env['SSH_USERNAME'],
      host: process.env['REDIS_HOST'],
      srcPort: process.env['REDIS_PORT']
    };

    ENV.redis = {
      allowOverwrite: true,
      host: 'localhost',
      port: process.env['REDIS_PORT']
    };
    ENV.s3 = {
      accessKeyId: process.env['AWS_ACCESS_KEY'],
      secretAccessKey: process.env['AWS_SECRET_KEY'],
      bucket: 'safs-production'
    }
  }

  // Note: if you need to build some configuration asynchronously,ou can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;

};
