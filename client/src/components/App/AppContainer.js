import { connect } from 'react-redux';
import { fetchCurrentWeather } from '../../redux/operations/weatherOperation';
import { refreshUser } from '../../redux/operations/sessionOperation';
import App from './App';

const mapDispatchToProps = {
  fetchCurrentWeather,
  refreshUser,
};

export default connect(null, mapDispatchToProps)(App);
