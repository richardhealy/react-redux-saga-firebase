import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import withAuthorization from '../../Session/withAuthorization';

import SignOut from '../../UI/SignOut';
import PasswordChangeLink from '../../UI/Links/PasswordChangeLink';

class DashboardPage extends Component {

  render() {

    return (
      <div>
        <h1>Dashboard</h1>
        <PasswordChangeLink />
        <SignOut {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
	return state;
}

const mapDispatchToProps = {};

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(
		mapStateToProps,
		mapDispatchToProps
	)
)(DashboardPage);
