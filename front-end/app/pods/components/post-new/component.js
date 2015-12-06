import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['container-fluid'],
  actions: {
    submit() {
      this.sendAction('action', this.get('post'));
    }
  }
});
