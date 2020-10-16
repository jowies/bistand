import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';

import { Auctions } from './auctions.js';

export const insert = new ValidatedMethod({
  name: 'auction.insert',
  validate: new SimpleSchema({
    'auction.label': { type: String },
    'auction': {type: Object },
  }).validator(),
  run({ auction }) {
    const newauction = auction;
    newauction.amount = 0;
    newauction.change = new Date();
    console.log(auction);
    if (Meteor.userId()) {
      const addedauction = Auctions.insert(auction);
      return addedauction;
    }
    return false;
  },
});

export const remove = new ValidatedMethod({
  name: 'auctions.remove',
  validate: new SimpleSchema({
    auctionId: { type: String },
  }).validator(),
  run({ auctionId }) {
    const auction = Auctions.findOne(auctionId);
    if (Meteor.userId() && auction) {
      Auctions.remove(auctionId);
    }
  },
});

export const update = new ValidatedMethod({
  name: 'auctions.update',
  validate: new SimpleSchema({
    'auction.amount': { type: Number },
    'auction.auctionId': { type: String },
    'auction.bidder': {type: String },
    'auction': { type: Object},
  }).validator(),
  run({ auction }) {
    const checkauction = Auctions.findOne(auction.auctionId);
    if ((Meteor.userId() && !!checkauction)) {
      Auctions.update(auction.auctionId, { $set: { amount: auction.amount, change: new Date() }, $addToSet: { bids: { bidder: auction.bidder, amount: auction.amount}} });
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
