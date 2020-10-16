import React from 'react';
import Progress from '../components/progress.jsx';
import AuctionList from '../components/auctionList.jsx';
import StretchGoals from '../components/stretchGoals.jsx';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
      <div className="parent" style={{backgroundColor: 'rgb(33,33,33)', height: '100vh', width: '70vw', float: 'left'}}>
        <div className="abakus">
        <img style={{width: '80%'}} src="/abakus_logo_white-ny.png"></img>
        <h4>Bar og Bong:</h4>
        <h1>{this.props.total} ,-</h1>
        </div>
        <div>
          <div className={this.props.total >= 10000 ? 'container pyro' : 'container'}>
            {!this.props.loading ? <Progress total={this.props.total} /> : <p>Loading</p>}
            <div className={this.props.total >= 10000 ? 'before' : ''}></div>
            <div className={this.props.total >= 10000 ? 'after' : ''}></div>
          </div>
          <h4>Auksjon:</h4>
            {!this.props.loading ? <AuctionList auctions={this.props.auctions} /> : <p>Loading</p>}
        </div>
      </div>
      <div style={{width: '30vw', float: 'left'}}>
      {!this.props.loading ? <StretchGoals total={this.props.totalAll} stretch={this.props.stretch} /> : <p>Loading</p>}
      
      </div>
      
      </div>
    );
  }
}


/*Info.propTypes = {
  loading: React.PropTypes.bool,
  total: React.PropTypes.number,
  products: React.PropTypes.array,
  auctions: React.PropTypes.array,
};*/
