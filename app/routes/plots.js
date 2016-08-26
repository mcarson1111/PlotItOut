import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var veggies =  this.controllerFor('veggies').get('veggyArray');
    console.log(veggies)
    this.set('veggyArray', veggies)

    // var selectedVeggies = [ ]
    //
    // for (var veggy of this.get('veggyArray')) {
  // query the store
  // this.store to find the veggie with the name like the veggy we're on
  //   var foundVeggy = this.store.findRecord('veggy', veggy)
  //   console.log(foundVeggy)
  //
  //   selectedVeggies.pushObject(foundVeggy)
  //   }
  //   console.log(selectedVeggies)
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    controller.set('veggyArray', this.get('veggyArray'))
  }

});
