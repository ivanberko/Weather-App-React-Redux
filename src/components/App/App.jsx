import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//components
import SearchForm from '../SearchForm/SearchForm';

const App = () => (
  <main>
    <h1>Weather App</h1>
    <SearchForm />
    {/* <Switch>
      <Route path="/" exact component={} />
      <Route path="/details" component={} />
      <Redirect to="/" />
    </Switch> */}
  </main>
);

export default App;
