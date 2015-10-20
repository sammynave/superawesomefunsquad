import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  identification: '',
  password: '',
  session: service('session'),
  actions: {
    submit(){
      this.get('user').save().then((model) => {
        let { identification, password } = this.getProperties('identification', 'password');
        this.get('session').authenticate('authenticator:front-end', identification, password).then(() => {
          debugger;
        }).catch((reason) => {
          this.set('errorMessage', reason.error);
        });
      });
    }
  }
});
