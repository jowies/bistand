import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';

import { Donations } from './donations.js';

export const insert = new ValidatedMethod({
  name: 'donation.insert',
  validate: new SimpleSchema({
    'donation.amount': { type: Number },
    'donation.type': { type: String },
    'donation': {type: Object},
  }).validator(),
  run({ donation }) {
    console.log(donation);
    if (Meteor.userId()) {
      console.log(donation);
      const addeddonation = Donations.insert(donation);
      return addeddonation;
    }
    return false;
  },
});

export const remove = new ValidatedMethod({
  name: 'donations.remove',
  validate: new SimpleSchema({
    donationId: { type: String },
  }).validator(),
  run({ donationId }) {
    const donation = Donations.findOne(donationId);
    if (Meteor.userId()) {
      Donations.remove(donationId);
    }
  },
});

const DONATIONS_METHODS = _.pluck([
  insert,
  remove,
], 'name');

if (Meteor.isServer) {
  DDPRateLimiter.addRule({
    name(name) {
      return _.contains(DONATIONS_METHODS, name);
    },
    coonnectionId() { return true; },
  }, 5, 1000);
}
