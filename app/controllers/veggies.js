import Ember from 'ember';

export default Ember.Controller.extend({
  soil: "loamy",
  zone:"9",

  actions: {
    findVeggies: function(soil, zone) {
      this.set("soil", soil);
      this.set("zone", zone);

    }
  }
});
