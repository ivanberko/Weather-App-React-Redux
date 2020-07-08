import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { getIsAuthenticated } from '../../redux/sessionSelectors/sessionSelectors';

const mapStateToProps = (state) => ({
  authenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
