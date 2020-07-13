import React, { useEffect, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// containers
import AppBar from '../AppBar/AppBarContainer';

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

const LoginPage = lazy(() =>
  import(
    '../../pages/LoginPage/LoginPageContainer' /* webpackChunkName: "login-page" */
  ),
);

const SignupPage = lazy(() =>
  import(
    '../../pages/SignupPage/SignupPageContainer' /* webpackChunkName: "signup-page" */
  ),
);

const App = ({ fetchCurrentWeather, refreshUser }) => {
  useEffect(() => {
    refreshUser();
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
      <AppBar />
      <Suspense fallback={<h1>LOADING....</h1>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/details/:city" component={DetailsPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </main>
  );
};

App.propTypes = {
  fetchCurrentWeather: PropTypes.func.isRequired,
  refreshUser: PropTypes.func.isRequired,
};

export default App;
