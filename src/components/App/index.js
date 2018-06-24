import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import LandingPage from '../Pages/Landing';
import DashboardPage from '../Pages/Dashboard';
import SignInPage from '../Pages/SignIn';
import RegisterPage from '../Pages/Register';
import PasswordChangePage from '../Pages/PasswordChange';
import PasswordForgetPage from '../Pages/PasswordForget';

import * as routes from '../../constants/routes';

import './index.css';

class App extends Component {

  render() {
    return <div className="app">

        <Route exact path={routes.LANDING} component={() => <LandingPage />} />
        <Route exact path={routes.HOME} component={() => <DashboardPage />} />
        <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
        <Route exact path={routes.REGISTER} component={() => <RegisterPage />} />
        <Route exact path={routes.PASSWORD_CHANGE} component={() => <PasswordChangePage />} />
        <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />

      </div>
  }
}

export default App;
