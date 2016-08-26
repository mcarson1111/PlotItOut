import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('login');
  this.route('newplot');
  this.route('about');
  this.route('contact');
  this.route('veggies', { path: 'veggies/:soil/:zone'});
  // this.route('veggies', { path: 'veggies/:veggy_id'});
  this.route('fruits'),
  this.route('herbs');
  this.route('flowers');
  this.route('plots');
});

export default Router;
