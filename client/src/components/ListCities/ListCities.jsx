import React, { useEffect, useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import update from 'immutability-helper';
import Notification from '../Notification/Notification';
import notifyTransition from '../../components/Notification/notify.module.css';

import CardCity from './CardCity';

const ListCities = ({
  listCitiesWeather,
  onDeleteCity,
  fetchUpdateWeather,
  authenticated,
  dragAndDrop,
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

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = listCitiesWeather[dragIndex];
      dragAndDrop(
        update(listCitiesWeather, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }),
      );
    },
    [listCitiesWeather],
  );

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

      {listCitiesWeather.map((item, index) => (
        <CardCity
          key={item.dt}
          index={index}
          id={item.dt}
          data={item}
          handleDeleteCity={handleDeleteCity}
          handleUpdate={handleUpdate}
          handleMoreInfo={handleMoreInfo}
          authenticated={authenticated}
          moveCard={moveCard}
        />
      ))}
    </>
  );
};
export default withRouter(ListCities);
