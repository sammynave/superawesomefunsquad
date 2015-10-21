import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),
  store: service('store'),
  actions: {
    submit(){
      const signup = this.get('signup');
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
