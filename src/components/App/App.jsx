import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//components
import SearchForm from '../SearchForm/feachWeatherContainer';

//page
import HomePage from "../../pages/HomePage/HomePage";
// import DetailsPage from "../../pages/DetailsPage/DetailsPage";

const App = () => {
  return (
    <main>
      <h1>Weather App</h1>
      <SearchForm />
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/details" component={DetailsPage} /> */}
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

export default App;
