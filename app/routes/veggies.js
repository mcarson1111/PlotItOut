import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    console.log(params)

    var query = {soil: params.soil, zone: params.zone}
    return this.store.query('veggy', query)

  }

});
