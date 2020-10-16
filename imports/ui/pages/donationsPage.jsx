import React from 'react';
import DonationsContainer from '../containers/donations_container.jsx';

export default class DonationsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <DonationsContainer />
      </div>
    );
  }
}
