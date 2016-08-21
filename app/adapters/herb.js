import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({


  query: function(store, type, query) {
    var url = "http://localhost:3000/";
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.getJSON(url, query).then(function(data) {
        Ember.run(null, resolve, data);
      }, function(jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        Ember.run(null, reject, jqXHR);
      });
    });
  }


});
