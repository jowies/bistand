import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema'

class ProductsCollection extends Mongo.Collection {
  insert(product, callback) {
    return super.insert(product, callback);
  }
  remove(selector, callback) {
    return super.remove(selector, callback);
  }

}

export const Products = new ProductsCollection('products');

Products.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Products.schema = new SimpleSchema({
  amount: { type: Number },
  label: { type: String },
});

Products.attachSchema(Products.schema);

Products.publicFields = {
  amount: 1,
  label: 1,
};
/*
Products.helpers({
});
*/