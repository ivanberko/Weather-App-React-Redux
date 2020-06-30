import React, { useEffect, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// page
const HomePage = lazy(() =>
  import(
    '../../pages/HomePage/homePageContainer' /* webpackChunkName: "home-page" */
  ),
);

const DetailsPage = lazy(() =>
  import(
    '../../pages/DetailsPage/feachForecastContainer' /* webpackChunkName: "details-page" */
  ),
);

const App = ({ fetchCurrentWeather }) => {
  useEffect(() => {
    const persistedCities = localStorage.getItem('cities');
    if (persistedCities) {
      const cities = JSON.parse(persistedCities);
      cities.reverse().forEach((el) => {
        fetchCurrentWeather(el);
      });
    }
  });
  return (
    <main>
      <Suspense fallback={<h1>LOADING....</h1>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/details/:city" component={DetailsPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </main>
  );
};

App.propTypes = {
  fetchCurrentWeather: PropTypes.func.isRequired,
};

export default App;

// TODO: Сделать деплой на Netlify
