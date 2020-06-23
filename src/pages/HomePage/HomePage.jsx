import React from 'react';
import { listCities } from "./HomePage.module.css";

import ListCities from '../../components/ListCities/ListCitiesContainer';

const HomePage = () => (
  <ul className={listCities}>
    <ListCities />
  </ul>
);

export default HomePage;
