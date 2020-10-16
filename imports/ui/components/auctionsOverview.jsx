import React from 'react';
import AuctionsContainer from '../containers/auctions_container.jsx';
import { insert, update } from '../../api/auctions/methods.js';


export default class AuctionsOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  renderBids(bids) {
    return bids.reverse().map((bid, index) => {
      return (
        <div key={index} className="donation">
        <div className="donationcell">
          <p className="donationtext">{bid.bidder}</p>
        </div>
        <div className="donationcell money"><p className="donationtext">{bid.amount},-</p></div>
      </div>
      )
    })
  }

  renderAuctions(auctions) {
    
    return auctions.map((auction) => {
      return (<div key={auction._id}>
      <div className="auctionheader">
      <h3 style={{color: 'white'}}>{auction.label}</h3>
      </div>
      
      <div className="donationslist">
        <div className="donation">
          <div className="donationcell"><p className="donationtext"><strong>Navn på byder</strong></p></div>
          <div className="donationcell">
            <div className="left"><p className="donationtext"><strong>Mengde i kr</strong></p></div>
          </div>
        </div>
        {this.renderBids(auction.bids)}
      </div>
    </div>)
    })
      
  }

  render() {
    return (
      <div>
        {this.props.loading ? <p>Loading</p> : this.renderAuctions(this.props.auctions)}
      </div>
    );
  }
}
