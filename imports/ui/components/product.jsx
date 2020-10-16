import React from 'react';
import { insert } from '../../api/donations/methods.js';


export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
    };
    // this.addDonation = this.addDonation.bind(this);
  }

  /* addDonation(e) {
    e.preventDefault();
    const donation = {
      amount: this.props.amount,
      type: this.props.label,
    };
    console.log('Trykk');
    insert.call({ donation }, (err, res) => {
      if (err) {
        this.setState({
          err: true,
        });
      } else {
        this.setState({
          err: false,
        });
      }
    });
  }*/


  render() {
    return (
      <div
        onClick={this.props.add.bind(null, { amount: this.props.amount, label: this.props.label, id: this.props.id })}
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
}

/* Product.propTypes = {
  label: React.PropTypes.string,
  amount: React.PropTypes.number,
  add: React.PropTypes.func,
  id: React.PropTypes.string,
}; */
