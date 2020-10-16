import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';

import { Products } from './products.js';

/*export const insert = new ValidatedMethod({
  name: 'product.insert',
  validate: new SimpleSchema({
    'product.amount': { type: Number },
    'product.label': { type: String },
    'product': {type: Object},
  }).validator(),
  run({ product }) {
    console.log(Meteor.userId());
    if (Meteor.userId()) {
      const exists = Products.findOne({ amount: product.amount, label: product.label });
      if (!exists) {
        console.log(product);
        const newproduct = product;
        const addedproduct = Products.insert(newproduct);
        return addedproduct;
      }
      return exists._id;
    }
    return false;
  },
});*/

Meteor.methods({
  'products.insert'({ label, amount }) {
    new SimpleSchema({
      amount: { type: Number },
      label: { type: String }
    }).validate({ label, amount });


    Products.insert({label, amount});
  }
});

/*export const remove = new ValidatedMethod({
  name: 'products.remove',
  validate: new SimpleSchema({
    productId: { type: String },
  }).validator(),
  run({ productId }) {
    const products = Products.findOne(productId);
    if (Meteor.userId()) {
      Products.remove(productId);
    }
  },
});*/

/*const PRODUCTS_METHODS = _.pluck([
  insert,
  remove,
], 'name');

if (Meteor.isServer) {
  DDPRateLimiter.addRule({
    name(name) {
      return _.contains(PRODUCTS_METHODS, name);
    },
    coonnectionId() { return true; },
  }, 5, 1000);
}*/
