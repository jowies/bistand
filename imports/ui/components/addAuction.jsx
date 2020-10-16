import React from 'react';
import { insert } from '../../api/auctions/methods.js';


export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
      input: false,
      amount: '',
      label: '',
    };
    // this.addDonation = this.addDonation.bind(this);
    this.changeState = this.changeState.bind(this);
    this.handleLabel = this.handleLabel.bind(this);
    this.addAuction = this.addAuction.bind(this);
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

  handleAmount(e) {
    e.preventDefault();
    this.setState({
      amount: e.target.value,
    });
  }

  handleLabel(e) {
    e.preventDefault();
    this.setState({
      label: e.target.value,
    });
  }

  addAuction(e) {
    e.preventDefault();
    const auction = {
      label: this.state.label,
    };
    console.log('asd');
    insert.call({ auction }, (err, res) => {
      if (err) {
        this.setState({
          error: true,
        });
      } else {
        this.setState({
          error: false,
          amount: '',
          label: '',
          input: false,
        });
      }
    });
  }

  changeState(e) {
    e.preventDefault();
    this.setState({
      input: !this.state.input,
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
          <h5 className="light">Legg til</h5>
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
          <form onSubmit={this.addAuction} >
            <input
              className="input"
              type="text"
              value={this.state.label}
              onChange={this.handleLabel}
              placeholder="navn"
            />
            <button
              className="input"
              ref="button"
              onClick={this.addAuction}
              style={{ fontSize: 18 }}
            >Legg til</button>
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
