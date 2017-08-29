import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainScreen from '../components/MainScreen';
import {logout, fetchInvestidorInfo, addObjetivo, removeObjetivo, editObjetivo} from '../actions/actions';

const mapStateToProps = state => ({
  activeUser: state.app.activeUser,
  investidorInfo: state.app.investidorInfo
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
  fetchInvestidorInfo,
  addObjetivo,
  removeObjetivo,
  editObjetivo
}, dispatch);

const MainScreenContainer = connect(mapStateToProps, mapDispatchToProps)(MainScreen);

export default MainScreenContainer;
