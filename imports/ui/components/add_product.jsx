import React from 'react';

import { insert } from '../../api/products/methods.js';

export default class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      err: false,
    };

    this.handleAmount = this.handleAmount.bind(this);
    this.handleLabel = this.handleLabel.bind(this);
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
  render() {
    return (
      <div>
        <h2>Annet beløp:</h2>
        <form onSubmit={this.addProduct} >
          <input
            type="text"
            value={this.state.amount}
            onChange={this.handleAmount}
            placeholder="kr"
            style={{ fontSize: 18, height: '20px' }}
          />
          <button
            ref="button"
            onClick={this.props.add.bind(null, { amount: parseInt(this.state.amount, 10), label: 'annen', id: (parseInt((Math.floor(Math.random() * 1000)), 10)).toString() })}
            style={{ fontSize: 18, marginLeft: '5px' }}
          >Legg til</button>
        </form>
      </div>

    );
  }
}

/*AddProduct.propTypes = {
  add: React.PropTypes.func,
};*/
