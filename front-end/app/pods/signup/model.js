import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  identification: DS.attr('string'),
  password: DS.attr('string')
});
