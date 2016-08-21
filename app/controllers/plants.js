import Ember from 'ember';

export default Ember.Controller.extend({
  plot: [],

  // actions: {
  //   addPlant(plant) {
  //     // this is the action that was defined in the template and sent from the component file. here we are pushing the plant into the array
  //     // we use pushObject bc this is not a native js array, its some kind of weird ember thing and ember doesnt know about .push,but it does know about pushObject
  //    var queueArray = this.get('plot');
  //    plotArray.pushObject(plant);
  //     },
  //     // how can users remove a plant?!?!
  //  removePlant(plant) {
  //    var plotArray = this.get('plot');
  //    plotArray.removeObject(plant);
  //    this.set('plot', plotArray);
  //  },
  //  clearPlot() {
  //    var plotArray = this.get('plot');
  //    plotArray.clear();
  //    this.plotEmpty;
  //  }
  // }
});
