import { connect } from 'react-redux';
import Filters from './layout';
import { submitFilters } from '../../../../redux/MyReducer/actions';

const mapDispatchToProps = dispatch => ({
  onSubmitFilters: (value, filter) => {
    dispatch(submitFilters(value, filter));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(Filters);
