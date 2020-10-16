import React from 'react';
import Product from './product.jsx';
import AddNew from './addNew.jsx';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderList() {
    return this.props.products.map((product) => {
      return (
        <Product
          add={this.props.add}
          key={product._id}
          id={product._id}
          label={product.label}
          amount={product.amount}
        />
      );
    });
  }

  render() {
    return (
      <div className="products">
        {this.props.loading ? <p>Loading</p> : this.renderList()}
        <AddNew />
      </div>
    );
  }
}

/* Products.propTypes = {
  products: React.PropTypes.array,
  loading: React.PropTypes.bool,
  add: React.PropTypes.func,
}; */
