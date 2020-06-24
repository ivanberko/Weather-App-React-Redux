import { connect } from 'react-redux';
import ListCities from './ListCities';

const mapStateToProps = (state) => ({
  listCitiesWeather: state.dataWeather.listCitiesWeather,
});

export default connect(mapStateToProps, null)(ListCities);
