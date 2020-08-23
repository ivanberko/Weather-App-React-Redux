import React, { useEffect, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Notification from '../Notification/Notification';
import notifyTransition from '../../components/Notification/notify.module.css';
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
  const [isNotify, setIsNotify] = useState(false);
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

  const handleMoreInfo = () => {
    if (authenticated) return;
    setIsNotify(true);
    setTimeout(() => {
      setIsNotify(false);
    }, 2000);
  };

  return (
    <>
      <CSSTransition
        in={isNotify}
        timeout={250}
        unmountOnExit
        classNames={notifyTransition}
      >
        <Notification text={'Please log In or Sign Up !'} />
      </CSSTransition>

      {listCitiesWeather.map(
        ({ dt, name, month, date, dayOfWeek, temp, icon }) => (
          <li className={listItem} key={dt} onClick={handleMoreInfo}>
            <NavLink
              to={authenticated ? `/details/${name}` : `/`}
              className={linkItem}
            >
              <h2 className={titleItem}>{name}</h2>
              <div>
                <span>{month}</span> <span>{date}</span>,{' '}
                <span>{dayOfWeek}</span>
              </div>
              <img src={icon} alt={icon} width="80" />
              <p className={tempItem}>{temp}&deg;</p>
            </NavLink>
            {authenticated && (
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
            )}
          </li>
        ),
      )}
    </>
  );
};
export default withRouter(ListCities);
