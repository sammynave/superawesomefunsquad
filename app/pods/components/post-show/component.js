import Ember from 'ember';

const { computed, inject } = Ember;
const { equal } = computed;
const { service } = inject;

export default Ember.Component.extend({
  session: service('session'),
  commentsVisible: false,
  isCurrentUsersPost: computed('session.currentUser.id', 'post.user.id', function(){
    return this.get('session.currentUser.id') == this.get('post.user.id');
  }),
  sortedComments: computed.sort('comments', 'sortOrder'),
  sortOrder: ['updatedAt:desc'],
  actions: {
    toggleComments() {
      this.toggleProperty('commentsVisible');
    },
    deletePost(){
      console.log('TODO: delete this post');
    }
  }
});
