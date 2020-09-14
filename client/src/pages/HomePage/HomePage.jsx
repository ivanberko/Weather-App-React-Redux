import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Styles
import { listCities, titleHomePage } from './HomePage.module.css';
import notifyTransition from '../../components/Notification/notify.module.css';

// Components
import ListCities from '../../components/ListCities/ListCitiesContainer';
import SearchForm from '../../components/SearchForm/feachWeatherContainer';
import Notification from '../../components/Notification/Notification';

const HomePage = ({ notifyError, errorSession }) => {
  const [isNotify, setIsNotify] = useState(false);

  useEffect(() => {
    errorSession(null);
    if (notifyError) {
      setIsNotify(true);
      setTimeout(() => {
        setIsNotify(false);
      }, 2000);
    }
  }, [notifyError, errorSession]);

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
        <DndProvider backend={HTML5Backend}>
          <ListCities />
        </DndProvider>
      </ul>
    </>
  );
};

HomePage.defaultProps = {
  notifyError: null,
};

HomePage.propTypes = {
  notifyError: PropTypes.string,
  errorSession: PropTypes.func.isRequired,
};

export default HomePage;
