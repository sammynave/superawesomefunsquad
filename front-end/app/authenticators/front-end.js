import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import config from 'front-end/config/environment';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: `${config.APP.API_HOST}/token`
});
