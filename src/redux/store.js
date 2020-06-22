import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import weatherReducer from './reducers/weatherReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  dataWeather: weatherReducer,
});

const enhancer = applyMiddleware(thunk);
const store = createStore(rootReducer, composeWithDevTools(enhancer));
export default store;
