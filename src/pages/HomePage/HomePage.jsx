import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';

import { listCities, titleHomePage } from './HomePage.module.css';
import notifyTransition from '../../components/Notification/notify.module.css';

import ListCities from '../../components/ListCities/ListCitiesContainer';
import SearchForm from '../../components/SearchForm/feachWeatherContainer';
import Notification from '../../components/Notification/Notification';

const HomePage = ({ notifyError }) => {
  const [isNotify, setIsNotify] = useState(false);

  useEffect(() => {
    if (notifyError) {
      setIsNotify(true);
      setTimeout(() => {
        setIsNotify(false);
      }, 2000);
    }
  }, [notifyError]);

  return (
    <>
      <CSSTransition
        in={isNotify}
        timeout={250}
        unmountOnExit
        classNames={notifyTransition}
      >
        <Notification text={notifyError} />
      </CSSTransition>
      <h1 className={titleHomePage}>Current Weather</h1>
      <SearchForm />
      <ul className={listCities}>
        <ListCities />
      </ul>
    </>
  );
};

HomePage.defaultProps = {
  notifyError: null,
};

HomePage.propTypes = {
  notifyError: PropTypes.string,
};

export default HomePage;
