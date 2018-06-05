import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../../../constants/routes';

const SignInLink = () =>
  <p>
    Already have an account?
    {' '}
    <Link to={routes.SIGN_IN}>Sign in now!</Link>
  </p>

export default SignInLink;