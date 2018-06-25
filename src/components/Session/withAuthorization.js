import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

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
    connect(
      mapStateToProps,
      mapDispatchToProps
    )
  )(WithAuthorization);
};

export default withAuthorization;
