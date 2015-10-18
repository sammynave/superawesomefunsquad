import Ember from 'ember';
import Torii from 'ember-simple-auth/authenticators/torii';
import raw from 'ic-ajax';
import config from 'front-end/config/environment';

const { RSVP, run } = Ember;
const { service } = Ember.inject;

export default Torii.extend({
  torii: service('torii'),

  authenticate() {
    return new RSVP.Promise((resolve, reject) => {
      return this._super(...arguments).then((data) => {
        const grant_type = data.provider === 'facebook' ? 'facebook_auth_code' : 'google_auth_code';
        raw({
          url:      `${config.APP.API_HOST}/token`,
          type:     'POST',
          dataType: 'json',
          data:     { 'grant_type': grant_type, 'auth_code': data.authorizationCode }
        }).then((response) => {
          run( () => {
            resolve({
              // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
              access_token: response.access_token,
              // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
              provider: data.provider
            });
          });
        }, reject);
      }, reject);
    });
  }
});


