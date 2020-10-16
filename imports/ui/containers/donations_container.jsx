import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Donations } from '../../api/donations/donations.js';
import DonationsList from '../components/donationsList.jsx';

const DonationsContainer = withTracker((props) => {
  const donationsHandle = Meteor.subscribe('donations.all');
  const loading = !donationsHandle.ready;
  return {
    loading,
    connected: Meteor.status().connected,
    donations: Donations.find().fetch(),
  };
})(DonationsList);

export default DonationsContainer;
