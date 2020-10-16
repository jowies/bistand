import React from 'react';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{overflowX: 'hidden', overflowY:'hidden', height: '100vh'}}>
        {this.props.content}
      </div>
      );
  }
}


/*Info.propTypes = {
  content: React.PropTypes.object,
};*/
