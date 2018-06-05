import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

const withAuthorization = (condition) => (Component) => {
  class WithAuthorization extends React.Component {

    render() {
      return this.props.auth.user ? <Component /> : null;
    }
  }

  function mapStateToProps(state) {
    return state;
  }

  const mapDispatchToProps = {};

  return compose(
    withRouter, 
    connect(
      mapStateToProps,
      mapDispatchToProps
    )
  )(WithAuthorization);
};

export default withAuthorization;
