/* jshint node: true */

require("dotenv").load();

module.exports = function(environment) {
  const ENV = {
    modulePrefix: 'front-end',
    podModulePrefix: 'front-end/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'ember-simple-auth': {
      routeAfterAuthentication: 'posts',
      routeIfAlreadyAuthenticated: 'posts',
      authenticationRoute: 'login'
    }
  };



  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.API_HOST = 'http://localhost:3000';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = process.env['API_HOST'];
  }

  ENV.contentSecurityPolicy = {
    "default-src": "'none'",
    "frame-src": "accounts.google.com",
    "script-src": "'self' 'unsafe-inline' apis.google.com",
    "font-src": "'self'",
    "connect-src": "'self' " + ENV.APP.API_HOST,
    "img-src": "'self' data: " + ENV.APP.API_HOST,
    "style-src": "'self' 'unsafe-inline'", // Allow inline styles
    "media-src": "'self'"
  };

  return ENV;
};
