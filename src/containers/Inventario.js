import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Inventario from '../components/Inventario';
import {logout} from '../actions/actions';
import {changeAcessorio} from '../actions/actions';
import {conquerAcessorio} from '../actions/actions';

const mapStateToProps = state => ({
  activeUser: state.app.activeUser,
  pagsAcessorios: state.app.activeUser.pagsAcessorios
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
  changeAcessorio,
  conquerAcessorio
}, dispatch);

const InventarioContainer = connect(mapStateToProps, mapDispatchToProps)(Inventario);

export default InventarioContainer;
