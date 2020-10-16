import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Auctions } from '../../api/auctions/auctions.js';
import AuctionList from '../components/auctionAdminList.jsx';

const AuctionsContainer = withTracker((props) => {
  const auctionsHandle = Meteor.subscribe('auctions.all');
  const loading = !auctionsHandle.ready;
  return {
    loading,
    connected: Meteor.status().connected,
    auctions: Auctions.find().fetch(),
  };
})(AuctionList);

export default AuctionsContainer;
  