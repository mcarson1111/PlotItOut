import Ember from 'ember';

export default Ember.Route.extend({
allTheVeggies: [ ],


  model: function(params) {
    console.log(params)

    var query = {soil: params.soil, zone: params.zone}
    return this.store.query('veggy', query)

//     return this.store.query('veggy', query).then ( (veggies) => {
//       console.log(veggies)
//       for (let veggy of veggies.content) {
//         console.log(veggy)
//         try{
//         let newVeggy = this.store.createRecord('veggy', {
//           name: veggy._data.name,
//           soil: veggy._data.soil,
//           space: veggy._data.space,
//           hardinessZone: veggy._data.hardinessZone,
//           sunShine: veggy._data.sunShine,
//           start: veggy._data.start,
//           special: veggy._data.special,
//           deep: veggy._data.deep,
//           time: veggy._data.time,
//           photo: veggy._data.photo,
//           companions: veggy._data.companions,
//           foes: veggy._data.foes
//         })
//         console.log(newVeggy)
//         newVeggy.save().then ( (newVeggy) => {
//           this.allTheVeggies.pushObject(newVeggy)
//         })
//         } catch(e) {
//           console.log(e.toString());
//         }
//
//       }
//       console.log(this.allTheVeggies)
//     })
//
//   },
//
//   setUpController: function (controller, model) {
//     this._super(controller, model);
//     controller.set('allTheVeggies', this.get('allTheVeggies'));
  }
});
