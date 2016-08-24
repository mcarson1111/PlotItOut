import DS from 'ember-data';

export default DS.Model.extend({

  // veggies: DS.hasMany('veggy'),

  length: DS.attr('string'),
  width: DS.attr('string'),
  soil: DS.attr('string'),
  zone: DS.attr('string')
});
