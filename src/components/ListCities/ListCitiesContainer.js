import { connect } from 'react-redux';
import ListCities from './ListCities';
import { deleteCity } from '../../redux/actions/actionItemCity';

const mapStateToProps = (state) => ({
  listCitiesWeather: state.dataWeather.listCitiesWeather,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteCity: (dt) => dispatch(deleteCity(dt)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCities);
