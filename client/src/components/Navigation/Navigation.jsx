import React from 'react';
import { NavLink } from 'react-router-dom';

import { navList, linkItem, activ } from './Navigation.module.css';

const Navigation = () => (
  <ul className={navList}>
    <li>
      <NavLink exact to="/" className={linkItem} activeClassName={activ}>
        Main
      </NavLink>
    </li>
    <li>
      <NavLink to="/signup" className={linkItem} activeClassName={activ}>
        Sign Up
      </NavLink>
    </li>
    <li>
      <NavLink to="/login" className={linkItem} activeClassName={activ}>
        Login
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
