import React from 'react';
import PropTypes from 'prop-types';

import Button from '../shared/Button';

const UserProfile = ({ userName, onLogOut }) => (
  <div>
    <p>
      Profile, <b>{userName}</b>
    </p>
    <Button label="Log Out" onClick={onLogOut} />
  </div>
);

UserProfile.propTypes = {
  userName: PropTypes.string.isRequired,
  onLogOut: PropTypes.func.isRequired,
};

export default UserProfile;
