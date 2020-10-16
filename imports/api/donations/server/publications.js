import { Meteor } from 'meteor/meteor';
import { Donations } from '../donations.js';

Meteor.publish('donations.all', function () {
  return Donations.find({}, { sort: { date: -1 } });
});
