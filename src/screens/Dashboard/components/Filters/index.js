import { connect } from 'react-redux';
import Filters from './layout';
import { setFilters } from '../../../../redux/MyReducer/actions';

const mapDispatchToProps = dispatch => ({
  onSubmitFilters: (value, filter) => {
    dispatch(setFilters(filter,value));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Filters);
