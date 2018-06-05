import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../../../constants/routes';

const RegisterLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.REGISTER}>Register for an account</Link>
  </p>

export default RegisterLink;