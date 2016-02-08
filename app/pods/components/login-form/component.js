import Ember from 'ember';

const { service } = Ember.inject

export default Ember.Component.extend({
  session: service('session'),
  actions: {
    authenticate() {
      const flashMessages = Ember.get(this, 'flashMessages');
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:front-end', identification, password).catch((reason) => {
        flashMessages.warning('invalid email address or password');
      });
    }
  }
});
