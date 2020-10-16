import React from 'react';
import AuctionsContainer from '../containers/auctions_container.jsx';
import { insert, update } from '../../api/auctions/methods.js';


export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <div className="bar-container">
        <div className="products-container">
          <AuctionsContainer />
        </div>
      </div>
    );
  }
}
