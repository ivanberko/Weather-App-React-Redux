import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Notification from '../../components/Notification/Notification';
import SignupForm from '../../components/SignupForm/SignupForm';

import notifyTransition from '../../components/Notification/notify.module.css';

const SignupPage = ({
  authenticated,
  invalidData,
  notifyErrorWeather,
  notifyErrorSession,
}) => {
  const [isNotify, setIsNotify] = useState(false);
  const history = useHistory();

  useEffect(() => {
    notifyErrorWeather();
    if (authenticated) {
      history.replace('/');
    } else if (invalidData) {
      setIsNotify(true);
      setTimeout(() => {
        setIsNotify(false);
        setTimeout(() => {
          notifyErrorSession(null);
        }, 500);
      }, 2000);
    }
  }, [
    authenticated,
    history,
    invalidData,
    notifyErrorWeather,
    notifyErrorSession,
  ]);

  return (
    <section>
      <CSSTransition
        in={isNotify}
        timeout={250}
        unmountOnExit
        classNames={notifyTransition}
      >
        <Notification text={invalidData} />
      </CSSTransition>

      <h2>SignUp Page</h2>
      <SignupForm />
      <div>
        <p>or</p>
        <Link to="/login">Login</Link>
      </div>
    </section>
  );
};

SignupPage.defaultProps = {
  invalidData: null,
};

SignupPage.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  invalidData: PropTypes.string,
  notifyErrorWeather: PropTypes.func.isRequired,
  notifyErrorSession: PropTypes.func.isRequired,
};

export default SignupPage;
