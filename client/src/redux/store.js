import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import weatherReducer from './reducers/weatherReducer';
import sessionReduser from './reducers/sessionReduser';

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  dataWeather: weatherReducer,
  session: persistReducer(sessionPersistConfig, sessionReduser),
});

const enhancer = applyMiddleware(thunk);
export const store = createStore(rootReducer, composeWithDevTools(enhancer));
export const persistor = persistStore(store);
