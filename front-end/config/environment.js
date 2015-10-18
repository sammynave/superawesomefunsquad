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

    torii: {
      providers: {
        'google-oauth2': {
          apiKey: process.env.GOOGLE_API_KEY,
          redirectUri: 'http://localhost:4200/',
          scope: 'email profile'
        },
        'facebook-oauth2': {
          apiKey: process.env.FB_API_KEY,
          redirectUri: 'http://localhost:4200/',
          scope: 'email,public_profile'
        }
      }
    },

    'ember-simple-auth': {
      routeAfterAuthentication: 'application',
      routeIfAlreadyAuthenticated: 'application',
      authenticationRoute: 'login'
    }
  };


  ENV.APP.API_HOST = process.env.API_HOST;

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
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
  }

  ENV.contentSecurityPolicy = {
    "default-src": "'none'",
    "frame-src": "accounts.google.com",
    "script-src": "'self' apis.google.com",
    "font-src": "'self'",
    "connect-src": "'self' " + ENV.APP.API_HOST,
    "img-src": "'self' " + ENV.APP.API_HOST,
    "style-src": "'self' 'unsafe-inline'", // Allow inline styles
    "media-src": "'self'"
  };

  return ENV;
};
