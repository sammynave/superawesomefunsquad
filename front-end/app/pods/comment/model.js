import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  updateAt: DS.attr('string'),
  post: DS.belongsTo('post'),
  user: DS.belongsTo('user')
});
