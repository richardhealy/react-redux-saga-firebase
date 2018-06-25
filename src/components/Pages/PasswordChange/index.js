import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import withAuthorizationRouter from '../../Session/withAuthorizationRouter';

import PasswordChangeForm from '../../UI/PasswordChangeForm';
import InlineMessage from '../../UI/InlineMessage';

class PasswordChange extends Component {

  render() {
    
    let message = this.props.auth.message;

    return (
      <div>
        <h1>Change Password</h1>
        <PasswordChangeForm />
        <InlineMessage message={message} />
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {};

export default compose(
  withAuthorizationRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PasswordChange);
