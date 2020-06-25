import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, Redirect } from 'react-router-dom';

// page
import HomePage from '../../pages/HomePage/HomePage';
import DetailsPage from '../../pages/DetailsPage/feachForecastContainer';

const App = ({ fetchCurrentWeather }) => {
  useEffect(() => {
    const persistedCities = localStorage.getItem('cities');
    if (persistedCities) {
      const cities = JSON.parse(persistedCities);
      cities.forEach((el) => fetchCurrentWeather(el));
    }
  });

  return (
    <main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/details/:city" component={DetailsPage} />
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

App.propTypes = {
  fetchCurrentWeather: PropTypes.func.isRequired,
};

export default App;

// TODO: Добавить функционал одновления выбранного города

// FIXME: Название города при поиске отличается от того названия которое прилетает из bd, запись в LS нужно сделать из ответа сервера

// TODO: Сделать деплой на Netlify
