import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MeuInvestimento from '../components/MeuInvestimento';
import { clearExtrato, fetchExtrato, fetchInvestimentos, fetchInvestidorInfo, goToInvestimentos, applyInvestimento, goToMain, clearApplyOk } from '../actions/actions';

const mapStateToProps = state => ({
  pathname: state.routing.locationBeforeTransitions.pathname,
  opcoesDeInvestimento: state.app.opcoesDeInvestimento,
  lastApplyOk: state.app.lastApplyOk,
  investidorInfo: state.app.investidorInfo,
  extrato: state.app.extrato
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchInvestimentos,
  goToInvestimentos,
  applyInvestimento,
  goToMain,
  clearApplyOk,
  fetchExtrato,
  fetchInvestidorInfo,
  clearExtrato
}, dispatch);

const MeuInvestimentoContainer = connect(mapStateToProps, mapDispatchToProps)(MeuInvestimento);

export default MeuInvestimentoContainer;
