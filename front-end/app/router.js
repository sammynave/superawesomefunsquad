import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', {});
  this.route('signup', {});
  this.route('post', {path: 'posts/:post_id'}, function() {});
  this.route('posts', {}, function() {
    this.route('new', {});
  });
  this.route('users', {});
});

export default Router;
