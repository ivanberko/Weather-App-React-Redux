import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { modifyResponse } from '../../utils/formatDataForecast';

const DetailsPage = ({ dayForecast, fetchForecastWeather }) => {
  const { city } = useParams();

  useEffect(() => {
    fetchForecastWeather(city);
  }, [city]);
  //FIXME:разобраться с React Hook useEffect has a missing dependency: 'fetchForecastWeather'.

  const forecast = modifyResponse(dayForecast);
  return (
    <ul>
      {forecast?.map(({ dayOfWeek, date, month, icon, tempMin, tempMax }) => (
        // TODO: добавить id
        <li>
          <p>{dayOfWeek}</p>
          <p>
            {date} {month}
          </p>
          <img src={icon} alt="icon" />
          <div>
            <div>
              <p>min</p>
              <span>{tempMin}</span>
            </div>

            <div>
              <p>max</p>
              <span>{tempMax}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DetailsPage;
