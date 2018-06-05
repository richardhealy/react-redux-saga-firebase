import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../../../constants/routes';

const PasswordChangeLink = () =>
  <p>
    <Link to={routes.PASSWORD_CHANGE}>Change your password</Link>
  </p>

export default PasswordChangeLink;