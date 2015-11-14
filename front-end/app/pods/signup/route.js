import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  model() {
    return this.store.createRecord('signup');
  },
  actions: {
    createSignup(signup){
      const flashMessages = Ember.get(this, 'flashMessages');
      const { identification, password } = signup.getProperties('identification', 'password');
      signup.save().then(() => {
        this.get('store').unloadAll('signup');
        this.get('session').authenticate('authenticator:front-end', identification, password).catch((reason) => {
          flashMessages.warning('something bad happened. user could not be authenticated.');
        });
      }).catch((reason) => {
        const errors = reason.errors;
        errors.forEach((error) => {
          let keys = Object.keys(error);
          keys.forEach((key) => {
            flashMessages.warning(`${key} ${error[key]}`);
          });
        });
      });
    }
  }
});
