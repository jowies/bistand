import React from 'react';
import { remove } from '../../api/donations/methods.js';


export default class DonationItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
    };
    this.removeDon = this.removeDon.bind(this);
  }

  removeDon(e) {
    e.preventDefault();
    remove.call({ donationId: this.props.id }, (res, err) => {
      if (err) {
        this.setState({
          err: true,
        });
      }
    });
  }

  render() {
    return (
      <div className="donation">
        <div className="donationcell"><p className="donationtext">{this.props.type}</p></div>
        <div className="donationcell money">
          <p className="donationtext">{this.props.amount},-</p>
        </div>
        <div className="donationcell money"><p className="donationtext">{this.props.date}</p></div>
        <div className="donationcell-remove money">
          <div onClick={this.removeDon} className="remove-button">
            <p className="donationtext white">x</p>
          </div>
        </div>
      </div>
    );
  }
}

/* DonationItem.propTypes = {
  type: React.PropTypes.string,
  amount: React.PropTypes.number,
  date: React.PropTypes.string,
  id: React.PropTypes.string,
}; */
