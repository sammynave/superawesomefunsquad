import Ember from 'ember';

export default Ember.Component.extend({
  posts: null,
  sortedPosts: Ember.computed.sort('posts', 'sortOrder'),
  sortOrder: ['updatedAt:desc']
});
