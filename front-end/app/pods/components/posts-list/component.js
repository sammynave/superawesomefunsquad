import Ember from 'ember';

export default Ember.Component.extend({
  posts: null,

  sortedPosts: Ember.computed.sort('posts', '_postSort'),
  _postSort: ['updatedAt:desc'],

  sortOrder: Ember.computed.alias('_postSort.firstObject'),
  isAsc: Ember.computed.equal('sortOrder', 'updatedAt'),
  isDesc: Ember.computed.equal('sortOrder', 'updatedAt:desc'),

  actions: {
    asc() {
      this.set('_postSort', ['updatedAt']);
    },
    desc() {
      this.set('_postSort', ['updatedAt:desc']);
    }
  }
});
