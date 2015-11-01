import Ember from 'ember';

const { service } = Ember.inject

export default Ember.Component.extend({
  session: service('session'),
  classNames: ['container-fluid'],
  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:front-end', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});
