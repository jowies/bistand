import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Products } from '../../api/products/products.js';
import ProductsDisplay from '../components/products.jsx';

const ProductsContainer = withTracker((props) => {
  const productHandle = Meteor.subscribe('products.all');
  const loading = !productHandle.ready;
  return {
    loading,
    connected: Meteor.status().connected,
    products: Products.find().fetch(),
    admin: true,
    add: props.add,
  };
})(ProductsDisplay);

export default ProductsContainer;
