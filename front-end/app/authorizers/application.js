import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';
import Ember from 'ember';

export default OAuth2Bearer.extend();
//export default OAuth2Bearer.extend({
//  authorize(data, block) {
//    const { authorizationCode } = data;
//    if (!Ember.isEmpty(authorizationCode)) {
//      block('Authorization',  authorizationCode);
//    }
//  }
//});
