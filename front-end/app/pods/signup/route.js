import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  model() {
    return this.store.createRecord('signup');
  },
  actions: {
    createSignup(signup){
      const { identification, password } = signup.getProperties('identification', 'password');
      signup.save().then(() => {
        this.get('store').unloadAll('signup');
        this.get('session').authenticate('authenticator:front-end', identification, password).catch((reason) => {
          this.set('errorMessage', reason.error);
        });
      });
    }
  }
});
