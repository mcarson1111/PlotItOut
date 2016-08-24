import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    var query = { fruits: this.controllerFor("herbs").get("fruits"), veggies: this.controllerFor("herbs").get("veggies")}
    return this.store.query('herb', query)
    // return this.store.query('veggy', query)

  },

  queryParams: {
    herbs: {
      refreshModel: true
    }
  }
});
