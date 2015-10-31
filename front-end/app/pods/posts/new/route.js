import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(){
    return this.store.createRecord('post');
  },
  deactivate(){
    const post = this.controller.get('post');
    if(Ember.isNone(post.get('id'))) {
      post.deleteRecord();
    }
  },
  actions: {
    createPost(post){
      const { title, body } = post.getProperties('title', 'body');
      post.save().then((response) => {
        this.transitionTo('post', post)
      }.bind(this)).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});
