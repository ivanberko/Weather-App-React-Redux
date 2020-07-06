import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import { navList, linkItem, activ } from './Navigation.module.css';

const Navigation = ({ authenticated }) =>
  !authenticated && (
    <ul className={navList}>
      <li>
        <NavLink to="/login" className={linkItem} activeClassName={activ}>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup" className={linkItem} activeClassName={activ}>
          Sign Up
        </NavLink>
      </li>
    </ul>
  );

Navigation.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

export default Navigation;
