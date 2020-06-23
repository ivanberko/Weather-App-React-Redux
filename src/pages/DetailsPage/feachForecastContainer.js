import { connect } from 'react-redux';
import { fetchForecastWeather } from '../../redux/operations/weatherOperation';
import DetailsPage from '../DetailsPage/DetailsPage';

const mapStateToProps = (state) => ({
  dayForecast: state.dataWeather.cityForecast.list
});

const mapDispatchToProps = {
  fetchForecastWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
