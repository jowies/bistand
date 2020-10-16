import React from 'react';
import Stretch from './stretchAdminItem.jsx';
import AddStretch from '../components/addStretch.jsx';

export default class StretchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderList() {
    return this.props.stretch.map((stretch) => {
      return (
        <Stretch
          key={stretch._id}
          id={stretch._id}
          label={stretch.label}
          amount={stretch.amount}
        />
      );
    });
  }

  render() {
    return (
      <div className="products">
        {this.props.loading ? <p>Loading</p> : this.renderList()}
        <AddStretch />
      </div>
    );
  }
}

/* AuctionList.propTypes = {
  auctions: React.PropTypes.array,
  loading: React.PropTypes.bool,
}; */
