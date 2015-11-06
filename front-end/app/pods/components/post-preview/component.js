import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isClosed:closed:open'],
  isOpen: false,
  isClosed: Ember.computed.not('isOpen'),
  actions: {
    toggleOpen(){
      this.toggleProperty('isOpen')
    }
  }
});
