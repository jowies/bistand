import React from 'react';
import { remove } from '../../api/donations/methods.js';


export default class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
    };
  }

  render() {
    return (
      <div className="donation">
        <div className="donationcell"><p className="donationtext">{this.props.label}</p></div>
        <div className="donationcell money">
          <p className="donationtext">{this.props.amount},-</p>
        </div>
        <div className="donationcell-remove money">
          <div onClick={this.props.remove.bind(null, { id: this.props.id })} className="remove-button">
            <p className="donationtext white">x</p>
          </div>
        </div>
      </div>
    );
  }
}

/* CartItem.propTypes = {
  label: React.PropTypes.string,
  amount: React.PropTypes.number,
  id: React.PropTypes.string,
  remove: React.PropTypes.func,
}; */
