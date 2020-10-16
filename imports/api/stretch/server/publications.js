import { Meteor } from 'meteor/meteor';
import { Stretch } from '../stretch';

Meteor.publish('stretch.all', function () {
  return Stretch.find({}, { sort: { amount: -1 } });
});
