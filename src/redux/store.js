import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import weatherReducer from './reducers/weatherReducer';
import sessionReduser from './reducers/sessionReduser';

const rootReducer = combineReducers({
  dataWeather: weatherReducer,
  session: sessionReduser,
});

const enhancer = applyMiddleware(thunk);
const store = createStore(rootReducer, composeWithDevTools(enhancer));
export default store;
