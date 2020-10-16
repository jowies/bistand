import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Donations } from '../../api/donations/donations.js';
import { Auctions } from '../../api/auctions/auctions.js';
import { Stretch } from '../../api/stretch/stretch.js';
import Info from '../pages/info.jsx';

const total = (donations, auctions) => {
  let sum = 0;
  if (donations) {
    for (let i = 0; i < donations.length; i += 1) {
      sum += donations[i].amount;
    }
  }
  /*
  if (auctions) {
    for (let i = 0; i < auctions.length; i += 1) {
      sum += auctions[i].amount;
    }
  }
  */
  return sum;
};

const totalAll = (donations, auctions) => {
  let sum = 0;
  if (donations) {
    for (let i = 0; i < donations.length; i += 1) {
      sum += donations[i].amount;
    }
  }
  if (auctions) {
    for (let i = 0; i < auctions.length; i += 1) {
      sum += auctions[i].amount;
    }
  }
  return sum;
};

const InfoContainer = withTracker((props) => {
  const donationsHandle = Meteor.subscribe('donations.all');
  const auctionsHandle = Meteor.subscribe('auctions.all');
  const stretchHandle = Meteor.subscribe('stretch.all');
  const loading = !donationsHandle.ready && !auctionsHandle.ready && !stretchHandle.ready;
  return {
    loading,
    connected: Meteor.status().connected,
    products: Donations.find().fetch(),
    stretch: Stretch.find().fetch(),
    auctions: Auctions.find({}, { sort: { amount: -1 } }).fetch(),
    total: total(Donations.find().fetch(), Auctions.find().fetch()),
    totalAll: totalAll(Donations.find().fetch(), Auctions.find().fetch()),
  };
})(Info);

export default InfoContainer;
