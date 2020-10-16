import React from 'react';

  /*const borders = (number) => {
  if (number < 5) {
    if (number === 4) {
      return {
        borderStyle: 'none none solid none',
      };
    }
    return {
      borderStyle: 'none solid solid none',
    };
  }
  if (number === 9) {
    return {
      borderStyle: 'none none none none',
    };
  }
  return {
    borderStyle: 'none solid none none',
  };
};*/

export default class Auction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
    };
  }


  render() {
    return (
      <div onClick={this.addDonation} className="silent-auction">
        <div className="inner-auction" style={{display: 'flex', flexDirection: 'column', borderRadius: '4px'}}>
          <div style={{ height: '80%'}}>
          <h6 style={{marginTop: '10px'}} className="whiter">{this.props.label.toUpperCase()}</h6>
          </div>
          <div style={{height: '20%'}}>
          <h6 className="whiter" style={{margin: 0}} >{this.props.amount},-</h6>
          </div>
        </div>
      </div>
    );
  }
}

/*Auction.propTypes = {
  label: React.PropTypes.string,
  amount: React.PropTypes.number,
  index: React.PropTypes.number,
};*/
