import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { linkItem, listItem, titleItem, tempItem } from "./ListCities.module.css";

const ListCities = ({ listCitiesWeather }) =>
  listCitiesWeather.map(({ dt, name, month, date, dayOfWeek, temp, icon }) => (
    <NavLink to={`/details/${name}`} key={dt} className={linkItem}>
      <li className={listItem}>
        <h2 className={titleItem}>{name}</h2>
        <div>
          <span>{month}</span> <span>{date}</span>, <span>{dayOfWeek}</span>
        </div>
        <img src={icon} alt={icon} />
        <p className={tempItem}>{temp}&deg;</p>
      </li>
    </NavLink>
  ));
export default withRouter(ListCities);
