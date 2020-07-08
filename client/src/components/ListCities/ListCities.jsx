import React, { useEffect } from 'react';
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

const ListCities = ({
  listCitiesWeather,
  onDeleteCity,
  fetchUpdateWeather,
  authenticated,
}) => {
  useEffect(() => {
    const allСities = listCitiesWeather.map((el) => el.name);
    if (listCitiesWeather.length) {
      localStorage.setItem('cities', JSON.stringify(allСities));
    }
  }, [listCitiesWeather]);

  const handleDeleteCity = (name) => {
    const getCitiesFromLS = JSON.parse(localStorage.getItem('cities'));
    const updateCitiesFronLS = getCitiesFromLS.filter((el) => el !== name);
    localStorage.setItem('cities', JSON.stringify(updateCitiesFronLS));
    onDeleteCity(name);
  };

  const handleUpdate = (nameCity) => {
    fetchUpdateWeather(nameCity);
  };

  return listCitiesWeather.map(
    ({ dt, name, month, date, dayOfWeek, temp, icon }) => (
      <li className={listItem} key={dt}>
        <NavLink
          to={authenticated ? `/details/${name}` : `/`}
          className={linkItem}
        >
          <h2 className={titleItem}>{name}</h2>
          <div>
            <span>{month}</span> <span>{date}</span>, <span>{dayOfWeek}</span>
          </div>
          <img src={icon} alt={icon} width="80" />
          <p className={tempItem}>{temp}&deg;</p>
        </NavLink>
        <div className={boxButton}>
          <button
            type="button"
            className={itemBtnUpdate}
            onClick={() => handleUpdate(name)}
          ></button>
          <button
            type="button"
            className={itemBtnDelete}
            onClick={() => handleDeleteCity(name)}
          ></button>
        </div>
      </li>
    ),
  );
};
export default withRouter(ListCities);
