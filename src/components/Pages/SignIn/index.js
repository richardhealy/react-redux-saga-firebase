import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SignInGoogle from '../../UI/SignInGoogle';
import SignInForm from '../../UI/SignInForm';

import RegisterLink from '../../UI/Links/RegisterLink';

import { loginWithEmail } from '../../../actions';
import InlineMessage from '../../UI/InlineMessage';

class SignInPage extends Component {

  render() {

    let message = this.props.auth.error;

    return <div>
      <h1>Sign In</h1>
      <SignInForm  />
      <SignInGoogle />

      <InlineMessage message={message} />
      <hr />

      <RegisterLink />
    </div>  
  }
}  

const mapStateToProps = state => state;

const mapDispatchToProps = {
  loginWithEmail
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignInPage);
