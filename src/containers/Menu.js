import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Menu from '../components/Menu';
import {goToMenuItem} from '../actions/actions';

const mapStateToProps = state => ({
  pathname: state.routing.locationBeforeTransitions.pathname
});

const mapDispatchToProps = dispatch => bindActionCreators({
  goToMenuItem
}, dispatch);

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default MenuContainer;
