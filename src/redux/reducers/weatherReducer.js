import { combineReducers } from 'redux';
import { TypeCurrent } from '../actions/actionCurrentWeather';
import { TypeForecast } from '../actions/actionForecastWeather';

const cityWeather = (state = [], { type, payload }) => {
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
