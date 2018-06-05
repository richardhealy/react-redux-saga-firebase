import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../../../constants/routes';

const DashboardLink = () =>
  <p>
    <Link to={routes.DASHBOARD}>Dashboard</Link>
  </p>

export default DashboardLink;