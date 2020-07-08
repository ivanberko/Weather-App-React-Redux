import { connect } from 'react-redux';
import SignupPage from './SignupPage';
import { getIsAuthenticated } from '../../redux/sessionSelectors/sessionSelectors';

const mapStateToProps = (state) => ({
  authenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
