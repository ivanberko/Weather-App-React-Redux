import { connect } from 'react-redux';
import ListCities from './ListCities';
import { fetchUpdateWeather } from '../../redux/operations/weatherOperation';
import { deleteCity } from '../../redux/actions/actionItemCity';

const mapStateToProps = (state) => ({
  listCitiesWeather: state.dataWeather.listCitiesWeather,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteCity: (dt) => dispatch(deleteCity(dt)),
  fetchUpdateWeather: (city) => dispatch(fetchUpdateWeather(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCities);
