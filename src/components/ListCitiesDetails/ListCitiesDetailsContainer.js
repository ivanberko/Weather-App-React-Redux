import { connect } from 'react-redux';
import ListCitiesDetails from './ListCitiesDetails';

const mapStateToProps = (state) => ({
  city: state.dataWeather.cityForecast.city?.name,
  dayForecast: state.dataWeather.cityForecast.list,
});

export default connect(mapStateToProps, null)(ListCitiesDetails);
