import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(){
      this.get('user').save();
    }
  }
});
