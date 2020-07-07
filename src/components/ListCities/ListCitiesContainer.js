import { connect } from 'react-redux';
import ListCities from './ListCities';
import { fetchUpdateWeather } from '../../redux/operations/weatherOperation';
import { deleteCity } from '../../redux/actions/actionItemCity';
import { getIsAuthenticated } from '../../redux/sessionSelectors/sessionSelectors';

const mapStateToProps = (state) => ({
  listCitiesWeather: state.dataWeather.listCitiesWeather,
  authenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteCity: (dt) => dispatch(deleteCity(dt)),
  fetchUpdateWeather: (city) => dispatch(fetchUpdateWeather(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCities);
