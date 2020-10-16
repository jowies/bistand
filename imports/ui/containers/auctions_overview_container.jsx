import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Auctions } from '../../api/auctions/auctions.js';
import AuctionsOverview from '../components/auctionsOverview.jsx';

const AuctionsOverviewContainer = withTracker((props) => {
  const auctionsHandle = Meteor.subscribe('auctions.all');
  const loading = !auctionsHandle.ready;
  return {
    loading,
    connected: Meteor.status().connected,
    auctions: Auctions.find().fetch(),
  };
})(AuctionsOverview);

export default AuctionsOverviewContainer;
