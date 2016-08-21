import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    var query = { soil: this.controllerFor("newplot").get("width"), zone: this.controllerFor("newplot").get("length")}
    return this.store.query('newplot', query)
  },

  queryParams: {
    // veggies: {
    newplots: {
      refreshModel: true
    }
  }

});
