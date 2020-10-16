import React from 'react';
import Donation from './donationItem.jsx';

export default class DonationsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  addZero(number) {
    let i = number;
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  getDateAsString(date) {

    const hours = this.addZero(date.getHours());
    const minutes = this.addZero(date.getMinutes());
    const seconds = this.addZero(date.getSeconds());
    const split = ':';
    return hours + split + minutes + split + seconds;
  }

  renderList() {
    return this.props.donations.map((donation) => {
      return (
        <Donation
          key={donation._id}
          id={donation._id}
          date={this.getDateAsString(donation.date)}
          type={donation.type}
          amount={donation.amount}
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
          <div className="donationcell">
            <div className="left"><p className="donationtext"><strong>Tid</strong></p></div>
            <div className="right"><p className="donationtext">tt:mm:ss</p></div>
          </div>
          <div className="donationcell-remove"><p className="donationtext"><strong>Fjern</strong></p></div>
        </div>
        {this.props.loading ? <p>Loading</p> : this.renderList()}
      </div>
    );
  }
}

/* DonationsList.propTypes = {
  donations: React.PropTypes.array,
  loading: React.PropTypes.bool,
}; */
