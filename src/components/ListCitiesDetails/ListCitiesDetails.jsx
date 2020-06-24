import React from 'react';
import PropTypes from 'prop-types';

import {
  listItem,
  titleItem,
  tempItem,
  boxTemp,
  listCities,
} from './ListCitiesDetails.module.css';

import { modifyResponse } from '../../utils/formatDataForecast';
import { forecastSlice } from '../../utils/helpers';

const ListCitiesDetails = ({ dayForecast, city }) => {
  const forecast = modifyResponse(dayForecast);

  return (
    <>
      <h1 className={titleItem}> Forecast Weather</h1>
      <h2 className={titleItem}>{city}</h2>
      <ul className={listCities}>
        {forecastSlice(forecast).map(
          ({ id, dayOfWeek, date, month, icon, tempMin, tempMax }) => (
            <li key={id} className={listItem}>
              <h4>{dayOfWeek}</h4>
              <p>
                {date} {month}
              </p>
              <img src={icon} alt="icon" />
              <div className={boxTemp}>
                <div>
                  <p>min</p>
                  <span className={tempItem}>{tempMin}&deg;</span>
                </div>

                <div>
                  <p>max</p>
                  <span className={tempItem}>{tempMax}&deg;</span>
                </div>
              </div>
            </li>
          ),
        )}
      </ul>
    </>
  );
};

ListCitiesDetails.defaultProps = {
  dayForecast: [],
  city: '',
};

ListCitiesDetails.propTypes = {
  dayForecast: PropTypes.arrayOf(PropTypes.array),
  city: PropTypes.string,
};

export default ListCitiesDetails;
