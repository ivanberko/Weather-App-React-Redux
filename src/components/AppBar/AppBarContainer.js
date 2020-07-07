import { connect } from 'react-redux';
import { logOut } from '../../redux/actions/actionSession';
import AppBar from './AppBar';

import {
  getIsAuthenticated,
  getUserName,
} from '../../redux/sessionSelectors/sessionSelectors';

const mapStateToProps = (state) => ({
  authenticated: getIsAuthenticated(state),
  userName: getUserName(state),
});

const mapDispatchToProps = {
  onLogOut: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
