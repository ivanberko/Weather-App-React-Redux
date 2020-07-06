import { connect } from 'react-redux';
import { fetchCurrentWeather } from '../../redux/operations/weatherOperation';
import App from './App';

import { getIsAuthenticated } from '../../redux/sessionSelectors/sessionSelectors';

const mapStateToProps = (state) => ({
  authenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = {
  fetchCurrentWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
