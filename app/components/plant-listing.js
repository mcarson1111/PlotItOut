import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  plantAdded: false,
  actions: {
    toggleDetails() {
      this.toggleProperty('isExpanded');
      // toggleproperty is something components knows about automatically
    },
    toggleDeets() {
      this.toggleProperty('plantAdded');
    },
    addToPlot(plant) {
      // send the action addtoplot and pass it the plant, and what is addtoplot? youve defined it in the template. the template is it defined in, tells it which controller to go to...bc ember is weird
      this.sendAction('addToPlot', plant);
      this.toggleProperty('isExpanded');
      // alert("Plant was added to Plot!");
      this.toggleProperty('plantAdded');

    }

  }
});
