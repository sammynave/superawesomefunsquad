import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  store: service('store'),
  actions: {
    submit(){
      const post = this.get('post');
      const { title, body } = post.getProperties('title', 'body');
      post.save().then((response) => {
        console.log(response);
      }).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});
