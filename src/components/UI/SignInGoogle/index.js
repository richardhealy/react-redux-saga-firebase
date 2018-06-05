import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../../../actions';

class SignInGoogle extends Component {

  render() {
    return <div>
      <button onClick={this.props.login} disabled={this.props.loggedIn}>Login with Google</button>
    </div>  
  }
}  

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
});

const mapDispatchToProps = {
  login
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInGoogle);
