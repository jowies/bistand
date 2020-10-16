import React from 'react';
import ProductsContainer from '../containers/products_container.jsx';
import CartList from '../components/cartList.jsx';
import AddProduct from '../components/add_product.jsx';
import { insert } from '../../api/donations/methods.js';


export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.addAll = this.addAll.bind(this);
  }

  addToCart({ amount, label, id }, e) {
    e.preventDefault();
    const temp = this.state.products;
    temp.push({ amount, label, id });
    this.setState({
      products: temp,
    });
  }

  removeFromCart({ id }) {
    console.log(id);
    const temp = this.state.products;
    console.log(temp);
    for (let i = 0; i < temp.length; i += 1) {
      if (temp[i].id === id) {
        temp.splice(i, 1);
        break;
      }
    }
    this.setState({
      products: temp,
    });
  }

  addAll(e) {
    e.preventDefault();
    const temp = this.state.products;
    for (let i = 0; i < temp.length; i += 1) {
      const donation = {
        amount: temp[i].amount,
        type: temp[i].label,
      };
      const id = temp[i].id;
      insert.call({ donation }, (err, res) => {
        if (err) {
          this.setState({
            err: true,
          });
        } else {
          this.setState({
            err: false,
          });
          console.log(res);
          this.removeFromCart({ id });
        }
      });
    }
  }

  render() {
    return (
      <div className="bar-container">
        <div className="products-container">
          <ProductsContainer add={this.addToCart} />
          <AddProduct add={this.addToCart} />
        </div>
        <div className="accept">
          <div className="list-container" >
            <CartList remove={this.removeFromCart} products={this.state.products} />
          </div>
          <button
            className="input"
            ref="button"
            onClick={this.addAll}
            style={{ fontSize: 18, marginTop: '10px', width: '100%' }}
          >Legg til kjøp</button>
        </div>
      </div>
    );
  }
}
