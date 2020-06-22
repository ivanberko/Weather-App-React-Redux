import { combineReducers } from 'redux';
import { Type } from '../actions/action';

const cityWeather = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FEACH_WEATHER_SUCCESS:
      return [payload.data, ...state];

    default:
      return state;
  }
};

export default combineReducers({
  listCitiesWeather: cityWeather,
});
