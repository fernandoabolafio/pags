import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Inventario from '../components/Inventario';
import {logout} from '../actions/actions';

const mapStateToProps = state => ({
  activeUser: state.app.activeUser
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout
}, dispatch);

const InventarioContainer = connect(mapStateToProps, mapDispatchToProps)(Inventario);

export default InventarioContainer;
