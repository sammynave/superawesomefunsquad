import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.createRecord('post');
  },
  deactivate() {
    const post = this.controller.get('post');
    if (Ember.isNone(post.get('id'))) {
      post.deleteRecord();
    }
  },
  actions: {
    createPost(post) {
      post.save().then(() => {
        this.transitionTo('post', post);
      }.bind(this)).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});
