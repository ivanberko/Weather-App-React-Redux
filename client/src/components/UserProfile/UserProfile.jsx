import React from 'react';
import PropTypes from 'prop-types';

import Button from '../shared/Button';

const UserProfile = ({ userName, onLogOut }) => (
  <div>
    <p>
      Profile, <b>{userName.name}</b>
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
