import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  store: service('store'),
  session: service('session'),
  classNames: ['container-fluid'],
  actions: {
    submit() {
      const attrs = {
        body: this.get('body'),
        post: this.get('post'),
        user: this.get('session.currentUser')
      };

      const comment = this.get('store').createRecord('comment', attrs);

      comment.save().then((res) => {
        console.log('comment saved');
        console.log(res);
      }).catch((res) => {
        comment.rollbackAttributes();
        console.log('comment rejected');
        res.errors.forEach((error) => {
          console.log(error.status);
          console.log(error.title);
        });
      })
    }
  }
});