import Session from 'ember-simple-auth/services/session';

export default {
  name: 'current-user',
  before: 'ember-simple-auth',
  initialize(container) {
    Session.reopen({
      setCurrentUser: function() {
        if (this.get('isAuthenticated')) {
          container.lookup("service:store").find('user', 'me').then((user) => {
            this.set('currentUser', user);
          });
        }
      }.observes('isAuthenticated')
    });
  }
};
