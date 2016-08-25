import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.controllerFor('veggies').get('arrayVeggies');
    console.log('arrayVeggies')
  }

});
