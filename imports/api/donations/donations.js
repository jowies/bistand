import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema'

class DonationsCollection extends Mongo.Collection {
  insert(donation, callback) {
    const newdonation = donation;
    newdonation.date = newdonation.date || new Date();
    return super.insert(newdonation, callback);
  }
  remove(selector, callback) {
    return super.remove(selector, callback);
  }

}

export const Donations = new DonationsCollection('donations');

Donations.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Donations.schema = new SimpleSchema({
  amount: { type: Number },
  date: { type: Date },
  type: { type: String },
});

Donations.attachSchema(Donations.schema);

Donations.publicFields = {
  amount: 1,
  date: 1,
  type: 1,
};
/*
donations.helpers({
});
*/
