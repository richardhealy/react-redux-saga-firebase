import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import withAuthorization from '../../Session/withAuthorization';

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

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PasswordChange);
