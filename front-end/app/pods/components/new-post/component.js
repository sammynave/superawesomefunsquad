import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(){
      this.sendAction('action', this.get('post'));
    }
  }
});
