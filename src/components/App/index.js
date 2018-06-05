import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import LandingPage from '../Pages/Landing';
import DashboardPage from '../Pages/Dashboard';
import SignInPage from '../Pages/SignIn';
import RegisterPage from '../Pages/Register';
import PasswordChangePage from '../Pages/PasswordChange';
import PasswordForgetPage from '../Pages/PasswordForget';

import * as routes from '../../constants/routes';

import { ConnectedRouter } from 'react-router-redux';
import { history } from './../../stores';

import './index.css';

class App extends Component {

  render() {
    return <ConnectedRouter history={history}>
      <div className="app">

        <Route exact path={routes.LANDING} component={() => <LandingPage />} />
        <Route exact path={routes.HOME} component={() => <DashboardPage />} />
        <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
        <Route exact path={routes.REGISTER} component={() => <RegisterPage />} />
        <Route exact path={routes.PASSWORD_CHANGE} component={() => <PasswordChangePage />} />
        <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />

      </div>
    </ConnectedRouter>
  }
}

function mapStateToProps(state) {
  return state;
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
