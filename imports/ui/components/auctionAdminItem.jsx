import React from 'react';
import { update } from '../../api/auctions/methods.js';


export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
      amount: '',
      bidder: '',
    };
    // this.addDonation = this.addDonation.bind(this);
    this.changeState = this.changeState.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleBidder = this.handleBidder.bind(this);
    this.changeAuction = this.changeAuction.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        input: false,
      });
    }
  }

  changeState(e) {
    e.preventDefault();
    this.setState({
      input: !this.state.input,
    });
  }

  handleAmount(e) {
    e.preventDefault();
    this.setState({
      amount: e.target.value,
    });
  }

  handleBidder(e) {
    e.preventDefault();
    this.setState({
      bidder: e.target.value,
    });
  }


  changeAuction(e) {
    e.preventDefault();
    const auction = {
      amount: parseInt(this.state.amount, 10),
      bidder: this.state.bidder,
      auctionId: this.props.id,
    };
    console.log(auction);
    update.call({ auction }, (err, res) => {
      if (err) {
        console.log(err);
        this.setState({
          error: true,
        });
      } else {
        this.setState({
          error: false,
          amount: '',
          label: '',
          bidder: '',
          input: false,
        });
      }
    });
  }

  renderInput() {
    return (
      <div
        onClick={this.changeState}
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

  renderBasic() {
    return (
      <div
        className="product"
        id={this.props.id}
      >
        <div style={{ textAlign: 'center' }}>
          <h5 className="dark">{this.props.label}</h5>
          <form onSubmit={this.changeAuction} >
            <input
              className="input"
              type="text"
              value={this.state.amount}
              onChange={this.handleAmount}
              placeholder="Nytt bud"
            />
            <input
              className="input"
              type="text"
              value={this.state.bidder}
              onChange={this.handleBidder}
              placeholder="Navn på byder"
            />
            <button
              className="input"
              ref="button"
              onClick={this.changeAuction}
              style={{ fontSize: 18 }}
            >Oppdater</button>
          </form>
        </div>

      </div>
      );
  }


  render() {
    return (
      <div ref={this.setWrapperRef}>
        {this.state.input ? this.renderBasic() : this.renderInput()}
      </div>
    );
  }
}

/* Product.propTypes = {
  label: React.PropTypes.string,
  amount: React.PropTypes.number,
  id: React.PropTypes.string,
}; */
