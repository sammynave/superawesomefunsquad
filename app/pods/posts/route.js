import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    this.getFromServer();
    return this.getFromLocalStore();
  },

  getFromLocalStore(){
    return this.store.peekAll('post');
  },

  getFromServer(){
    return this.store.query('post', { include: 'comments,user' } );
  }
});
