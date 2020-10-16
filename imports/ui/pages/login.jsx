import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      username: '',
      error: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('whatUp');
    Meteor.loginWithPassword(this.state.username, this.state.password, (error) => {
      if (error) {
        this.setState({
          error: true,
        });
      } else {
        FlowRouter.go('/admin/products');
      }
    });
  }

  handleChangePassword(e) {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  handleChangeUsername(e) {
    e.preventDefault();
    this.setState({ username: e.target.value });
  }
  render() {
    return (
      <div className="center center-text" style={{ float: 'left', clear: 'left', width: '100%' }}>
        <form className="style-5" onSubmit={this.handleSubmit} >
          <input style={{ margin: '20px 0 20px 0' }} onChange={this.handleChangeUsername} placeholder="Brukernavn..." value={this.state.username} type="text" />
          <input style={{ margin: '20px 0 20px 0' }} onChange={this.handleChangePassword} placeholder="Passord..." value={this.state.password} type="password" />
          {this.state.error ? <p className="mdl-color-text--red-300">Feil brukernavn/passord</p> : ''}
          <button ref="button" onClick={this.handleSubmit} style={{ fontSize: 18 }} className="submit">Logg inn</button>
        </form>
      </div>
    );
  }
}

