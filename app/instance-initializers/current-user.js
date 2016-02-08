import Session from 'ember-simple-auth/services/session';
import Ember from 'ember';

const { getOwner } = Ember;

export default {
  name: 'current-user',
  before: 'ember-simple-auth',
  initialize() {
    Session.reopen({
      setCurrentUser: function() {
        if (this.get('isAuthenticated')) {
          getOwner(this).lookup("service:store").find('user', 'me').then((user) => {
            this.set('currentUser', user);
          });
        }
      }.observes('isAuthenticated')
    });
  }
};
