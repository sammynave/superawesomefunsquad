import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('post', {path: 'posts/:post_id'});
  this.route('posts', {});
  this.route('login', {});
  this.route('users', {}, function() {
    this.route('new', {});
  });

  this.route('books', {}, function() {
    this.route('new', {});
  });
});

export default Router;
