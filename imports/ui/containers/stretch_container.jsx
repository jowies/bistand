import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Stretch } from '../../api/stretch/stretch';
import StretchList from '../components/stretchAdminList';

const StretchContainer = withTracker((props) => {
  const stretchHandle = Meteor.subscribe('stretch.all');
  const loading = !stretchHandle.ready;
  return {
    loading,
    connected: Meteor.status().connected,
    stretch: Stretch.find().fetch(),
  };
})(StretchList);

export default StretchContainer;
