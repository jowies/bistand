import React from 'react';
import CartItem from './cartItem.jsx';

export default class DonationsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderList() {
    return this.props.products.map((donation, index) => {
      return (
        <CartItem
          key={index}
          id={donation.id}
          label={donation.label}
          amount={donation.amount}
          remove={this.props.remove}
        />
      );
    });
  }

  render() {
    return (
      <div className="donationslist">
        <div className="donation">
          <div className="donationcell"><p className="donationtext"><strong>Type</strong></p></div>
          <div className="donationcell"><p className="donationtext"><strong>Kroner</strong></p></div>
          <div className="donationcell-remove"><p className="donationtext"><strong>Fjern</strong></p></div>
        </div>
        {this.renderList()}
      </div>
    );
  }
}

/* DonationsList.propTypes = {
  products: React.PropTypes.array,
  remove: React.PropTypes.func,
}; */
