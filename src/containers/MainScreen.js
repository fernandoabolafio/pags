import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainScreen from '../components/MainScreen';
import {logout, fetchInvestidorInfo, addObjetivo, removeObjetivo, editObjetivo, orderObjetivos} from '../actions/actions';

const mapStateToProps = state => ({
  activeUser: state.app.activeUser,
  investidorInfo: state.app.investidorInfo,
  pagsAcessorios: state.app.activeUser.pagsAcessorios,
  rawObjetivos: state.app.activeUser.objetivos
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
  fetchInvestidorInfo,
  addObjetivo,
  removeObjetivo,
  editObjetivo,
  orderObjetivos
}, dispatch);

const MainScreenContainer = connect(mapStateToProps, mapDispatchToProps)(MainScreen);

export default MainScreenContainer;
