import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import LoginForm from '../../components/LoginForm/LoginForm';
import Notification from '../../components/Notification/Notification';

import notifyTransition from '../../components/Notification/notify.module.css';

const LoginPage = ({
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
    } else {
      if (invalidData) {
        setIsNotify(true);
        setTimeout(() => {
          setIsNotify(false);
          notifyErrorSession(null);
        }, 2000);
      }
    }
  }, [authenticated, history, invalidData, notifyErrorWeather]);

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
