import React from 'react';
import { update } from '../../api/stretch/methods.js';


export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
      amount: '',
    };
    // this.addDonation = this.addDonation.bind(this);
  }

  /**
   * Set the wrapper ref
   */

  /**
   * Alert if clicked on outside of element
   */
  renderInput() {
    return (
      <div
        className="product"
        id={this.props.id}
      >
        <div style={{ textAlign: 'center' }}>
          <h5 className="dark">{this.props.label}</h5>
          <h6 className="dark">{this.props.amount},-</h6>
        </div>
      </div>
      );
  }




  render() {
    return (
      <div>
        {this.renderInput()}
      </div>
    );
  }
}

/* Product.propTypes = {
  label: React.PropTypes.string,
  amount: React.PropTypes.number,
  id: React.PropTypes.string,
}; */
