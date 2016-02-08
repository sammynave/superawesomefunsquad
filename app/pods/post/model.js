import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  updatedAt: DS.attr('date'),
  user: DS.belongsTo('user'),
  comments: DS.hasMany('comment')
});
