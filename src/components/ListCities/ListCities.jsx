import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {
  linkItem,
  listItem,
  titleItem,
  tempItem,
  itemBtnUpdate,
  itemBtnDelete,
  boxButton,
} from './ListCities.module.css';

const ListCities = ({ listCitiesWeather, onDeleteCity }) => {
  const handleDeleteCity = (dt, name) => {
    const getCitiesFronLS = JSON.parse(localStorage.getItem('cities'));
    const updateCitiesFronLS = getCitiesFronLS.filter(
      (el) => el !== name.toLowerCase(),
    );
    localStorage.setItem('cities', JSON.stringify(updateCitiesFronLS));
    onDeleteCity(dt);
  };
  return listCitiesWeather.map(
    ({ dt, name, month, date, dayOfWeek, temp, icon }) => (
      <li className={listItem} key={dt}>
        <NavLink to={`/details/${name}`} className={linkItem}>
          <h2 className={titleItem}>{name}</h2>
          <div>
            <span>{month}</span> <span>{date}</span>, <span>{dayOfWeek}</span>
          </div>
          <img src={icon} alt={icon} width="80" />
          <p className={tempItem}>{temp}&deg;</p>
        </NavLink>
        <div className={boxButton}>
          <button type="button" className={itemBtnUpdate}></button>
          <button
            type="button"
            className={itemBtnDelete}
            onClick={() => handleDeleteCity(dt, name)}
          ></button>
        </div>
      </li>
    ),
  );
};
export default withRouter(ListCities);
