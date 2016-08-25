import Ember from 'ember';

export default Ember.Controller.extend({

  checkVeggies: false,

  actions: {
    checkedVeggies: function( ) {
      console.log(this);
      // here is where i want to send the checked box value into the checkedVeggies array
      console.log(this.get("checkedVeggies"))
    },

    addVeggies: function() {
      // This will make the api call
      // this.get checkedveggies
      var arrayVeggies = [];
      var veggies = $('input:checked');
      console.log(veggies);

      for (var i=0; i < veggies.length; i++) {
        arrayVeggies.pushObject(veggies[i].value)
      }

      console.log(arrayVeggies)
      
      this.set('arrayVeggies');
      this.transitionToRoute('plots');
    }
  }

});
