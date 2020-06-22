import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const ListCities = ({ listCitiesWeather }) =>
  listCitiesWeather.map(({ dt, name, month, date, temp, icon }) => (
    <li key={dt}>
      <NavLink to="/details">
        <h2>{name}</h2>
        <p>
          {date}, {month}
        </p>
        <p>{temp}</p>
        <img src={icon} alt={icon} />
      </NavLink>
    </li>
  ));
export default ListCities;
