import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var veggies =  this.controllerFor('veggies').get('veggyArray');
    console.log(veggies)
    this.set('veggyArray', veggies)

    for (var veggy of this.get('veggyArray')) {
  // query the store
  // this.store to find the veggie with the name like the veggy we're on

    }
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    controller.set('veggyArray', this.get('veggyArray'))
  }

});
