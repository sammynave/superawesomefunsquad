import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', {});
  this.route('signup', {});
  this.route('post', { path: 'posts/:post_id' });
  this.route('posts', { path: '/'}, function() {
    this.route('new', {});
  });
  this.route('users', {});
  this.route('logout');
});

export default Router;
