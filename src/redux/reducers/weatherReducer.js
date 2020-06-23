import { combineReducers } from 'redux';
import { TypeCurrent } from '../actions/actionCurrentWeather';
import { TypeForecast } from '../actions/actionForecastWeather';

const initStore = [
  {
    dt: 1592939505,
    currentTime: '22:15:17',
    month: 'June',
    date: '23',
    dayOfWeek: 'Tue',
    temp: 20,
    temp_max: 21,
    temp_min: 20,
    icon: 'http://openweathermap.org/img/wn/10n@2x.png',
    name: 'Kyiv',
    sunrise: 1592876816,
    sunriseTime: {
      hours: '04',
      mins: '46',
    },
    sunset: 1592936000,
    sunsetTime: {
      hours: '21',
      mins: '13',
    },
    timezone: 10800,
  },
];

const cityWeather = (state = initStore, { type, payload }) => {
  switch (type) {
    case TypeCurrent.FEACH_WEATHER_SUCCESS:
      return [payload.data, ...state];

    default:
      return state;
  }
};

const cityWeatherForecast = (state = {}, { type, payload }) => {
  switch (type) {
    case TypeForecast.FEACH_FORECAST_SUCCESS:
      return { ...payload.data };

    default:
      return state;
  }
};

export default combineReducers({
  listCitiesWeather: cityWeather,
  cityForecast: cityWeatherForecast,
});
