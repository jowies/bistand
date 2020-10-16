import { Meteor } from 'meteor/meteor';
import { Auctions } from '../auctions.js';

Meteor.publish('auctions.all', function () {
  return Auctions.find({}, { sort: { amount: -1 } });
});
