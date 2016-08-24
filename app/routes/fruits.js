import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    var query = { veggies: this.controllerFor("fruits").get("veggies")}
    return this.store.query('fruit', query)
    // return this.store.query('veggy', query)

  },

  queryParams: {
    fruits: {
      refreshModel: true
    }
  }
});
