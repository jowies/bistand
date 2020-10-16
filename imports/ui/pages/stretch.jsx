import React from 'react';
import StretchContainer from '../containers/stretch_container';
import { insert, update } from '../../api/stretch/methods.js';


export default class Stretch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <div className="bar-container">
        <div className="products-container">
          <StretchContainer />
        </div>
      </div>
    );
  }
}
