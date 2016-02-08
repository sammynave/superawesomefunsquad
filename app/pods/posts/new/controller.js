import Ember from 'ember';

const { computed } = Ember;
const { alias } = computed;

export default Ember.Controller.extend({
  post: alias('model')
});
