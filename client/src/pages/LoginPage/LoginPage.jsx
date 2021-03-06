import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import LoginForm from '../../components/LoginForm/LoginForm';
import Notification from '../../components/Notification/Notification';

import notifyTransition from '../../components/Notification/notify.module.css';
import { title, link, redirect } from './LoginPage.module.css';

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

      <h2 className={title}>Login Page</h2>
      <LoginForm />
      <div className={redirect}>
        <p>or</p>
        <NavLink to="/signup" className={link}>
          Signup &#8594;
        </NavLink>
      </div>
    </section>
  );
};

LoginPage.defaultProps = {
  invalidData: null,
};

LoginPage.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  invalidData: PropTypes.string,
  notifyErrorWeather: PropTypes.func.isRequired,
  notifyErrorSession: PropTypes.func.isRequired,
};

export default LoginPage;
