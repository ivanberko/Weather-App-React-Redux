import { connect } from 'react-redux';
import ListCities from './ListCities';
import { fetchUpdateWeather } from '../../redux/operations/weatherOperation';
import { deleteCity, DnDCities } from '../../redux/actions/actionItemCity';
import { getIsAuthenticated } from '../../redux/sessionSelectors/sessionSelectors';
import { getAllCitiesWeather } from '../../redux/weatherSelectors/weatherSelectors';

const mapStateToProps = (state) => ({
  listCitiesWeather: getAllCitiesWeather(state),
  authenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteCity: (dt) => dispatch(deleteCity(dt)),
  dragAndDrop: (cities) => dispatch(DnDCities(cities)),
  fetchUpdateWeather: (city) => dispatch(fetchUpdateWeather(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCities);
