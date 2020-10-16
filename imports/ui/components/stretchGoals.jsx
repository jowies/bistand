import React from 'react';

export default class StretchGoals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  calcHeight() {
    const height = 50*(this.props.total/50000);
    return height > 50000 ? 50 : height;
  }

  getRed(n) {
    return n*10000 > this.props.total ? 'rgb(66,66,66)' : '#BC1818'
  }

  getNextThree() {
    const lower = this.props.stretch.filter((s) => s.amount < this.props.total );
    return lower.sort((a,b) => a - b).slice(0,4);
  }

  getPreviousThree() {
    const lower = this.props.stretch.filter((s) => s.amount >= this.props.total );
    return lower.sort((a,b) => a - b).slice(0,4);
  }

  render() {
    return (
      <div className="stretch-container">
        <h4 style={{marginTop: '10px'}}>Stretch Goals:</h4>
        <h2>{this.props.total} ,-</h2>
        <div style={{width: '100%', marginTop: '0vh'}}>
          <div style={{position: 'relative'}}>
            <div style={{position: 'absolute',top: '20px', left: '50%',marginLeft: '-5px', width: '10px', height: '50vh', backgroundColor: 'rgb(66,66,66)'}}>
            </div>
            <div style={{position: 'absolute',top: `calc(20px + ${50 - this.calcHeight()}vh)`, left: '50%',marginLeft: '-5px', width: '10px', height: `${this.calcHeight()}vh`, backgroundColor: '#FFFFFF'}}>
            </div>
            <div style={{position: 'absolute',
              left: '50%',
              marginLeft: '-20px',
              backgroundColor: this.getRed(5),
              height: '40px',
              width: '40px',
              borderRadius:'50%'}}></div>
            <div style={{position: 'absolute',
              top: '10vh',
              left: '50%',
              marginLeft: '-20px',
              backgroundColor: this.getRed(4),
              height: '40px',
              width: '40px',
              borderRadius:'50%'}}></div>
            <div style={{position: 'absolute',
              top: '20vh',
              left: '50%',
              marginLeft: '-20px',
              backgroundColor: this.getRed(3),
              height: '40px',
              width: '40px',
              borderRadius:'50%'}}></div>
            <div style={{position: 'absolute',
              top: '30vh',
              left: '50%',
              marginLeft: '-20px',
              backgroundColor: this.getRed(2),
              height: '40px',
              width: '40px',
              borderRadius:'50%'}}></div>
            <div style={{position: 'absolute',
              top: '40vh',
              left: '50%',
              marginLeft: '-20px',
              backgroundColor: this.getRed(1),
              height: '40px',
              width: '40px',
              borderRadius:'50%'}}></div>

          </div>
          
        </div>
        <div style={{paddingRight: '1.5vw', paddingLeft: '1.5vw' ,marginTop: '55vh', position: 'relative', width: '100%', display: 'flex', flexDirection: 'column'}}>
        <p style={{fontSize: '3vh', marginBottom: '1vh'}}>Neste mål:</p>
          <div style={{ flex: '1'}} >
            {this.getPreviousThree().sort((a,b) => a - b).map((s) => (
              <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                <div style={{ flex: '1'}}>
                  <p className="prev-stretch">{s.label}</p>
                </div>
                <div style={{ flex: '1', textAlign: 'right'}}>
                  <p className="prev-stretch"> {s.amount} ,-</p>
                </div>
              </div>))}
            </div>
          
          <p style={{fontSize: '3vh', marginTop: '4vh', marginBottom: '1vh'}}>Nyligst oppnådde mål:</p>
          <div style={{ flex: '1'}}>
            {this.getNextThree().sort((a,b) => b - a).map((s) => (
                <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                  <div style={{ flex: '1'}}>
                    <p className="next-stretch">{s.label}</p>
                  </div>
                  <div style={{ flex: '1', textAlign: 'right'}}>
                    <p className="next-stretch"> {s.amount} ,-</p>
                  </div>
                </div>))}
          </div>
          </div>
          
      </div>
    );
  }
}

/*Product.propTypes = {
  total: React.PropTypes.number,
};*/
