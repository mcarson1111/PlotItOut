import DS from 'ember-data';

export default DS.Model.extend({

  // veggies: DS.hasMany('veggy'),

  // id: DS.attr('number'),
  length: DS.attr('string'),
  width: DS.attr('string')
});
