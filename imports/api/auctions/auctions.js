import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema'

class AuctionsCollection extends Mongo.Collection {
  insert(auction, callback) {
    const newauction = auction;
    newauction.date = newauction.date || new Date();
    newauction.bids = [];
    return super.insert(newauction, callback);
  }
  remove(selector, callback) {
    return super.remove(selector, callback);
  }

}

export const Auctions = new AuctionsCollection('auctions');

Auctions.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

const bid = new SimpleSchema({
  amount: { type: Number},
  bidder: { type: String},
})

Auctions.schema = new SimpleSchema({
  amount: { type: Number },
  date: { type: Date },
  label: { type: String },
  change: { type: Date },
  bids: { type: Array},
  "bids.$": bid,
});

Auctions.attachSchema(Auctions.schema);

Auctions.publicFields = {
  amount: 1,
  date: 1,
  label: 1,
  bids: 1,
};
/*
auctions.helpers({
});
*/
