import DS from 'ember-data';

export default DS.Model.extend({
  // id: DS.attr('number'),
  name: DS.attr('string'),
  soil: DS.attr('string'),
  space: DS.attr('string'),
  hardinessZone: DS.attr('string'),
  sunShine: DS.attr('string'),
  start: DS.attr('string'),
  special: DS.attr('string'),
  deep: DS.attr('string'),
  time: DS.attr('string'),
  photo: DS.attr('string'),
  companions: DS.attr('string'),
  foes: DS.attr('string')
});
