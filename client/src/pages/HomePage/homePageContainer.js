import { connect } from 'react-redux';
import HomePage from './HomePage';
import { invalidData } from '../../redux/actions/actionSession';
import { getNotifyError } from '../../redux/weatherSelectors/weatherSelectors';

const mapStateToProps = (state) => ({
  notifyError: getNotifyError(state),
});

const mapDispatchToProps = {
  errorSession: invalidData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
