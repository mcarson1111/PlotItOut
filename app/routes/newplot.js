import Ember from 'ember';

export default Ember.Route.extend({


  actions: {
    makePlot(soil, zone, width, length) {
      this.set("soil", soil);
      this.set("zone", zone);
      this.set("width", width);
      this.set("length", length);

      console.log('this is the newplot route');

      // this.transitionTo('veggies', {queryParams: {soil: 'soil', zone: 'zone'}});
      this.transitionTo('veggies', this.get('soil'), this.get('zone'));


    }
  }

});

// Im not makeing a call top the API with newplot....unless i want to save the plot. I can just access images to render a plot of the correct size from this app...right? idk

// if i do need to nake a call to the api, the crap below will help...

// model() {
//   var query = { soil: this.controllerFor("newplot").get("width"), zone: this.controllerFor("newplot").get("length")}
//   return this.store.query('newplot', query)
// },
//
// queryParams: {
//   // veggies: {
//   newplot: {
//     refreshModel: true
//   }
// }
