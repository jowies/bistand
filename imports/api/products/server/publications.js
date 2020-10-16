import { Meteor } from 'meteor/meteor';
import { Products } from '../products.js';

Meteor.publish('products.all', function () {
  if (!this.userId) {
    return this.ready();
  }
  return Products.find({});
});
