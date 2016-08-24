import Ember from 'ember';

export default Ember.Controller.extend({
  // this is just hard coded stuffs....in real life, ill call the action makePlot which will reroute to veggies and send along the soil and zone
  //
  // length: "5",
  // width: "4",
  // soil: "loamy",
  // zone: "9",

  actions: {
    makePlot(length, width, soil, zone) {
      this.set("length", length);
      this.set("width", width);
      this.set("soil", soil);
      this.set("zone", zone);

       console.log('poop');

    }
  }
});
