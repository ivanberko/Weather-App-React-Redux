import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = ({ authenticated }) => {
  const history = useHistory();
  useEffect(() => {
    if (authenticated) {
      history.replace('/');
    }
  }, [authenticated, history]);

  return (
    <section>
      <h2>Login Page</h2>
      <LoginForm />
      <div>
        <p>or</p>
        <Link to="/signup">Signup</Link>
      </div>
    </section>
  );
};

LoginPage.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

export default LoginPage;
