import Ember from 'ember';

const { Controller, computed } = Ember;
const { alias } = computed;

export default Controller.extend({
  user: alias('model')
});
