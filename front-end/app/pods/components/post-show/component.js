import Ember from 'ember';

const { computed, inject } = Ember;
const { equal } = computed;
const { service } = inject;

export default Ember.Component.extend({
  session: service('session'),
  classNames: ['row'],
  commentsVisible: false,
  isCurrentUsersPost: computed('session', 'post', function(){
    console.log('this doesnt work because session doesnt resolve its promise in time');
    return this.get('session.currentUser.id') == this.get('post.user.id');
  }),
  actions: {
    toggleComments() {
      this.toggleProperty('commentsVisible');
    }
  }
});
