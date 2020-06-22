import axios from 'axios';
import { createCurrentWeatherObject } from '../../utils/formatDataWeather';

import {
  feachWeatherStart,
  feachWeatherSuccsess,
  feachWeatherError,
} from '../actions/action';

const BASE_URL = 'https://api.openweathermap.org';
const API_KEY = '87cf27700817ed4e92adafa080b190b6';

export const fetchCurrentWeather = (queryWeather) => (dispatch) => {
  dispatch(feachWeatherStart());

  const queryString = `${BASE_URL}/data/2.5/weather?q=${queryWeather}&appid=${API_KEY}&units=metric`;
  axios
    .get(queryString)
    .then(({ data }) =>
      dispatch(feachWeatherSuccsess(createCurrentWeatherObject(data))),
    )
    .catch((error) => dispatch(feachWeatherError(error)));
};
