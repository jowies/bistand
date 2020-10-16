import React from 'react';
import Auction from './auctionAdminItem.jsx';
import AddAuction from '../components/addAuction.jsx';

export default class AuctionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderList() {
    return this.props.auctions.map((auction) => {
      return (
        <Auction
          key={auction._id}
          id={auction._id}
          label={auction.label}
          amount={auction.amount}
        />
      );
    });
  }

  render() {
    return (
      <div className="products">
        {this.props.loading ? <p>Loading</p> : this.renderList()}
        <AddAuction />
      </div>
    );
  }
}

/* AuctionList.propTypes = {
  auctions: React.PropTypes.array,
  loading: React.PropTypes.bool,
}; */
