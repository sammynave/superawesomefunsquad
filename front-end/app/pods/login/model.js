import DS from 'ember-data';

export default DS.Model.extend({
  identification: DS.attr('string'),
  password: DS.attr('string'),
  user: DS.belongsTo('user')
});
