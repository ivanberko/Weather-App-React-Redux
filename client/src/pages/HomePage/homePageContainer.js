import { connect } from 'react-redux';
import HomePage from './HomePage';

const mapStateToProps = (state) => ({
  notifyError: state.dataWeather.notifyError,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
