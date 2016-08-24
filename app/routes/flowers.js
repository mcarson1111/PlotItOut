import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    var query = { fruits: this.controllerFor("flowers").get("fruits"), veggies: this.controllerFor("flowers").get("veggies"), herbs: this.controllerFor("flowers").get("herbs")}
    return this.store.query('flower', query)
    // return this.store.query('veggy', query)

  },

  queryParams: {
    flowers: {
      refreshModel: true
    }
  }
});
