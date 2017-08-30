import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainScreen from '../components/MainScreen';
import {seeMoreInvestimento, setActionComplete, seeMoreMeuInvestimento, logout, fetchInvestidorInfo, addObjetivo, removeObjetivo, editObjetivo, orderObjetivos} from '../actions/actions';

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
  orderObjetivos,
  seeMoreMeuInvestimento,
  seeMoreInvestimento,
  setActionComplete
}, dispatch);

const MainScreenContainer = connect(mapStateToProps, mapDispatchToProps)(MainScreen);

export default MainScreenContainer;
