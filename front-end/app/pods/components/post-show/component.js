import Ember from 'ember';

const { computed, inject } = Ember;
const { equal } = computed;
const { service } = inject;

export default Ember.Component.extend({
  session: service('session'),
  classNames: ['row'],
  commentsVisible: false,
  isCurrentUsersPost: computed('session.currentUser.id', 'post.user.id', function(){
    return this.get('session.currentUser.id') == this.get('post.user.id');
  }),
  actions: {
    toggleComments() {
      this.toggleProperty('commentsVisible');
    },
    deletePost(){
      console.log('TODO: delete this post');
    }
  }
});
