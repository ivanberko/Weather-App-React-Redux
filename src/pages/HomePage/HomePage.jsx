import React from 'react';
import { listCities } from './HomePage.module.css';

import ListCities from '../../components/ListCities/ListCitiesContainer';
import SearchForm from '../../components/SearchForm/feachWeatherContainer';

const HomePage = () => (
  <>
    <h1>Current Weather</h1>
    <SearchForm />
    <ul className={listCities}>
      <ListCities />
    </ul>
  </>
);

export default HomePage;
