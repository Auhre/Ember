import EmberRouter from '@ember/routing/router';
import config from 'todo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('todoForm');
  this.route('todoList');
  this.route('Apis');
  this.route('not-found', { path: '/*path' });
  this.route('handleSubmit');
  this.route('handleDelete');
});
