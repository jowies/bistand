import React from 'react';
import FlipMove from 'react-flip-move';
import Auction from './auction.jsx';


export default class AuctionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderList() {
    return (
      <FlipMove className="bottom-container" duration={750} easing="ease-out">
        {this.props.auctions.map((product, index) => {
          return (
            <Auction index={index} key={index} label={product.label} amount={product.amount} />
          );
        })}
      </FlipMove>
    );
  }

  render() {
    return (
      <div>
        {this.props.loading ? <p>Loading</p> : this.renderList()}
      </div>
    );
  }
}

/* AuctionList.propTypes = {
  auctions: React.PropTypes.array,
  loading: React.PropTypes.bool,
}; */
