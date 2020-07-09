import { connect } from 'react-redux';
import SignupPage from './SignupPage';
import {
  getIsAuthenticated,
  getError,
} from '../../redux/sessionSelectors/sessionSelectors';
import { notifyError } from '../../redux/actions/actionItemCity';
import { invalidData } from '../../redux/actions/actionSession';

const mapStateToProps = (state) => ({
  authenticated: getIsAuthenticated(state),
  invalidData: getError(state),
});

const mapDispatchToProps = {
  notifyErrorWeather: notifyError,
  notifyErrorSession: invalidData,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
