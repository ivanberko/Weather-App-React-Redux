import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import SignupForm from '../../components/SignupForm/SignupForm';

const SignupPage = ({ authenticated }) => {
  const history = useHistory();
  useEffect(() => {
    if (authenticated) {
      history.replace('/');
    }
  }, [authenticated, history]);

  return (
    <section>
      <h2>SignUp Page</h2>
      <SignupForm />
      <div>
        <p>or</p>
        <Link to="/login">Login</Link>
      </div>
    </section>
  );
};

SignupPage.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

export default SignupPage;
