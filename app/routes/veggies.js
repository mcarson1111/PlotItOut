import Ember from 'ember';

export default Ember.Route.extend({

store: Ember.inject.service(),

  model: function(params) {
    console.log(params)

    var query = {soil: params.soil, zone: params.zone}
    return this.store.query('veggy', query)//.then((record) => {
      // console.log(record)
      // record.forEach((veggy) => {
      //   let allTheVeggies = this.get('store').createRecord('veggy', veggy)
      //   // allTheVeggies.save()
      // })
    // })

  }

});
