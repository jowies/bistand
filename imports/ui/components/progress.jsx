import React from 'react';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getHeightFoam() {
    let height = 10;
    if (this.props.total === 0) {
      height = 10;
    }
    height += this.calculatePercentFoam(this.props.total);
    if (this.props.total >= 10000) {
      height = 200;
    }
    return height + 'px';
  }

  getHeightLiquid() {
    let height = 0;
    if (this.props.total === 0) {
      height = 0;
    }
    height += this.calculatePercentLiquid(this.props.total);
    if (this.props.total >= 10000) {
      height = 200;
    }
    return height + 'px';
  }

  calculatePercentFoam(num) {
    return Math.floor(num * 190 / 10000);
  }

  calculatePercentLiquid(num) {
    return Math.floor(num * 200 / 10000);
  }


  render() {
    return (
      <div className="aligner-item">
        <div id="container">
          <div className="pour"></div>
          <div id="beaker">
            <div className="beer-foam" style={{ bottom: this.getHeightFoam() }}>
              <div className="foam-1"></div>
              <div className="foam-2"></div>
              <div className="foam-3"></div>
              <div className="foam-4"></div>
              <div className="foam-5"></div>
              <div className="foam-6"></div>
              <div className="foam-7"></div>
            </div>
            <div id="liquid" style={{ height: this.getHeightLiquid() }}>
              <div className="bubble bubble1"></div>
              <div className="bubble bubble2"></div>
              <div className="bubble bubble3"></div>
              <div className="bubble bubble4"></div>
              <div className="bubble bubble5"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*Product.propTypes = {
  total: React.PropTypes.number,
};*/
