import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import withAuthorization from './withAuthorization';

const authCondition = (authUser) => !!authUser;

const WithAuthorization = withAuthorization(authCondition);

const WithAuthorizationRouter = compose(
  withRouter, 
)(WithAuthorization);

export default WithAuthorizationRouter;
