import { connect } from 'react-redux';
import MoreInfo from './MoreInfo';

const mapStateToProps = (state) => ({
  listForecast: state.dataWeather.cityForecast.list,
});

export default connect(mapStateToProps, null)(MoreInfo);
