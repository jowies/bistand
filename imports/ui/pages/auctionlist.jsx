import React from 'react';
import AuctionsContainer from '../containers/auctions_container.jsx';
import { insert, update } from '../../api/auctions/methods.js';
import AuctionsOverviewContainer from '../containers/auctions_overview_container';


export default class AuctionList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AuctionsOverviewContainer />
      </div>
    );
  }
}
