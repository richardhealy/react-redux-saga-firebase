import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RegisterForm from '../../UI/RegisterForm';

import SignInLink from '../../UI/Links/SignInLink';
import InlineMessage from '../../UI/InlineMessage';

class RegisterPage extends Component {
  render() {

    let message = this.props.auth.error;

  	return <div>
	    <h1>Register</h1>
	    <RegisterForm />
		  <InlineMessage message={message} />
	    <hr />
	    <SignInLink />
	  </div>
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = {};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(RegisterPage);