import Ember from 'ember';

export default Ember.Route.extend({

store: Ember.inject.service(),

  model: function(params) {
    console.log(params)

    var query = {soil: params.soil, zone: params.zone}
    return this.store.query('veggy', query).then((record) => {
      for (var veggy of record) {
        let allTheVeggies = this.get('store').createRecord('veggy', {
          name: veggy.name,
          soil: veggy.soil,
          space: veggy.space,
          sunShine: veggy.sunShine,
          start: veggy.start,
          special: veggy.special,
          deep: veggy.deep,
          time: veggy.time,
          hardinessZone: veggy.hardinessZone,
          companions: veggy.companions,
          foes: veggy.foes,
          photo: veggy.photo
        })
        allTheVeggies.save()
      }
    })

  }

});
