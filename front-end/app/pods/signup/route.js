import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  model(){
    return Ember.RSVP.hash({
      user: this.store.createRecord('user'),
      login: this.store.createRecord('login')
    })
  },
  setupController(controller, models){
    const { user, login } = models;
    controller.setProperties({user, login});
  }
});
