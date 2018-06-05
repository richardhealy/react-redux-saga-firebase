import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginWithEmail } from '../../../actions';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: ''
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    this.props.loginWithEmail(email, password);

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

      </form>
    );
  }
}


const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  loginWithEmail
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);