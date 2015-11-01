import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),
  tagName: 'a',
  click() {
    this.get('session').invalidate();
  }
});
