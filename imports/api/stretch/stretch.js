import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema'

class StretchCollection extends Mongo.Collection {
  insert(stretch, callback) {
    const newstretch = stretch;
    return super.insert(newstretch, callback);
  }
  remove(selector, callback) {
    return super.remove(selector, callback);
  }

}

export const Stretch = new StretchCollection('stretch');

Stretch.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Stretch.schema = new SimpleSchema({
  amount: { type: Number },
  label: { type: String },
});

Stretch.attachSchema(Stretch.schema);

Stretch.publicFields = {
  amount: 1,
  label: 1,
};
/*
stretchs.helpers({
});
*/
