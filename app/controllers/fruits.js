import Ember from 'ember';

export default Ember.Controller.extend({
  veggies: "tomatoes, cucumber",
  // how does this need to be written so it comes out veggies=tomatoes&cucumbers in the url?

  actions: {
    findFruits: function(veggies) {
      this.set("veggies", veggies);


    }
  }
});
