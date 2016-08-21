import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    var query = { soil: this.controllerFor("veggies").get("soil"), zone: this.controllerFor("veggies").get("zone")}
    return this.store.query('newplot', query)
    // return this.store.query('veggy', query)

  },

  queryParams: {
    veggies: {
      refreshModel: true
    }
  }
});
