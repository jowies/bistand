import React from 'react';

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <ul>
          <li><a className="active" href="/admin/products">Bar</a></li>
          <li><a href="/admin/auctions">Auction</a></li>
          <li><a href="/admin/donationspage">Donations</a></li>
          <li><a href="/admin/auctionlist">Auction list</a></li>
          <li><a href="/admin/stretch">Stretch goals</a></li>
        </ul>
        {this.props.content}
      </div>
    );
  }
}


/*Admin.propTypes = {
  content: React.PropTypes.object,
};*/
