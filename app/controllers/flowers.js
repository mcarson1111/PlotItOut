import Ember from 'ember';

export default Ember.Controller.extend({
  veggies: "tomatoes, cucumber",
  fruits: "watermelon",
  herbs: "basil, thyme",
  // how does this need to be written so it comes out veggies=tomatoes&cucumbers, fruits=watermelon, herbs=basil&thyme in the url?

  actions: {
    // I need to send through veggies, fruits and herbs here
    findFlowers: function(veggies, fruits, herbs) {
      this.set("veggies", veggies);
      this.set("fruits", fruits);
      this.set("herbs", herbs);


    }
  }
});
