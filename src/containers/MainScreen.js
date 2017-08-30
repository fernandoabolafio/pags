import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainScreen from '../components/MainScreen';
import {seeMoreMeuInvestimento, logout, fetchInvestidorInfo, addObjetivo, removeObjetivo, editObjetivo, orderObjetivos, conquerAcessorio, eraseNovaRecompensa} from '../actions/actions';

const mapStateToProps = state => ({
  activeUser: state.app.activeUser,
  investidorInfo: state.app.investidorInfo,
  pagsAcessorios: state.app.activeUser.pagsAcessorios,
  novaRecompensa: state.app.activeUser.novaRecompensa,
  rawObjetivos: state.app.activeUser.objetivos
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
  fetchInvestidorInfo,
  addObjetivo,
  removeObjetivo,
  editObjetivo,
  orderObjetivos,
  seeMoreMeuInvestimento,
  conquerAcessorio,
  eraseNovaRecompensa
}, dispatch);

const MainScreenContainer = connect(mapStateToProps, mapDispatchToProps)(MainScreen);

export default MainScreenContainer;
