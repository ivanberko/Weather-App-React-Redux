import React from 'react';
import PropTypes from 'prop-types';

// components
import Navigation from '../Navigation/Navigation';
import UserProfile from '../UserProfile/UserProfile';

const AppBar = ({ userName, authenticated, onLogOut }) => (
  <header>
    {!authenticated && <Navigation />}
    {authenticated && <UserProfile userName={userName} onLogOut={onLogOut} />}
  </header>
);

AppBar.defaultProps = {
  userName: null,
};

AppBar.propTypes = {
  userName: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  authenticated: PropTypes.bool.isRequired,
  onLogOut: PropTypes.func.isRequired,
};

export default AppBar;
