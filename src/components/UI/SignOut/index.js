import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { logout } from '../../../actions';

class SignOut extends Component {

  render() {
    return <div>
      <button onClick={this.props.logout} disabled={!this.props.loggedIn}>Logout</button>
    </div>  
  }
}  

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
});

const mapDispatchToProps = {
  logout
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignOut);
