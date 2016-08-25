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
