import React from 'react';
import PropTypes from 'prop-types';

import { profile, profileName } from './UserProfile.module.css';

import Button from '../shared/Button';

const UserProfile = ({ userName, onLogOut }) => (
  <div className={profile}>
    <p className={profileName}>
      Profile <b>&#448;</b> <b>{userName.name}</b>
    </p>
    <Button label="Log Out" onClick={onLogOut} />
  </div>
);

UserProfile.propTypes = {
  userName: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onLogOut: PropTypes.func.isRequired,
};

export default UserProfile;
