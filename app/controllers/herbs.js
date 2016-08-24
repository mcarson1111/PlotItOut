import Ember from 'ember';

export default Ember.Controller.extend({
  fruits: "watermelon",
  // how does this need to be written so it comes out veggies=tomatoes&cucumbers&fruits=watermelon in the url?

  actions: {
    findHerbs: function(fruits) {
      this.set("fruits", fruits);


    }
  }
});
