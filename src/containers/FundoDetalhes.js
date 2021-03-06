import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FundoDetalhes from '../components/FundoDetalhes';
import { fetchInvestimentos, goToInvestimentos, applyInvestimento, goToMain, clearApplyOk, conquerAcessorio, eraseNovaRecompensa } from '../actions/actions';

const mapStateToProps = state => ({
  pathname: state.routing.locationBeforeTransitions.pathname,
  opcoesDeInvestimento: state.app.opcoesDeInvestimento,
  lastApplyOk: state.app.lastApplyOk,
  pagsAcessorios: state.app.activeUser.pagsAcessorios,
  novaRecompensa: state.app.activeUser.novaRecompensa
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchInvestimentos,
  goToInvestimentos,
  applyInvestimento,
  goToMain,
  clearApplyOk,
  conquerAcessorio,
  eraseNovaRecompensa
}, dispatch);

const FundoDetalhesContainer = connect(mapStateToProps, mapDispatchToProps)(FundoDetalhes);

export default FundoDetalhesContainer;
