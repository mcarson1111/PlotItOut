import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  query: function(store, type, query) {
    console.log('trying to ping api')
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.getJSON('http://localhost:3001/veggies', query).then(function(data) {
        console.dir(data)
        console.log(data)
        Ember.run(null, resolve, data);
      }, function(jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        Ember.run(null, reject, jqXHR);
      });
    });
  },


});
