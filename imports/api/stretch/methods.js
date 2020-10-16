import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';

import { Stretch } from './stretch.js';

export const insert = new ValidatedMethod({
  name: 'stretch.insert',
  validate: new SimpleSchema({
    'stretch.label': { type: String },
    'stretch.amount': { type: Number},
    'stretch': {type: Object },
  }).validator(),
  run({ stretch }) {
    console.log(stretch);
    const newstretch = stretch;
    
    if (Meteor.userId()) {
      const addedstretch = Stretch.insert(stretch);
      return addedstretch;
    }
    return false;
  },
});

export const remove = new ValidatedMethod({
  name: 'stretch.remove',
  validate: new SimpleSchema({
    stretchId: { type: String },
  }).validator(),
  run({ stretchId }) {
    const stretch = Stretch.findOne(stretchId);
    if (Meteor.userId() && stretch) {
      Stretch.remove(stretchId);
    }
  },
});

export const update = new ValidatedMethod({
  name: 'stretch.update',
  validate: new SimpleSchema({
    'stretch.amount': { type: Number },
    'stretch.stretchId': { type: String },
    'stretch': { type: Object},
  }).validator(),
  run({ stretch }) {
    const checkstretch = Stretch.findOne(stretch.stretchId);
    if ((Meteor.userId() && !!checkstretch)) {
      Stretch.update(stretch.stretchId, { $set: { amount: stretch.amount, change: new Date() }, $addToSet: { bids: { bidder: stretch.bidder, amount: stretch.amount}} });
    }
  },
});

const DONATIONS_METHODS = _.pluck([
  insert,
  remove,
  update,
], 'name');

if (Meteor.isServer) {
  DDPRateLimiter.addRule({
    name(name) {
      return _.contains(DONATIONS_METHODS, name);
    },
    coonnectionId() { return true; },
  }, 5, 1000);
}
