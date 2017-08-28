import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FundoDetalhes from '../components/FundoDetalhes';
import { fetchInvestimentos, goToInvestimentos, applyInvestimento, goToMain, clearApplyOk } from '../actions/actions';

const mapStateToProps = state => ({
  pathname: state.routing.locationBeforeTransitions.pathname,
  opcoesDeInvestimento: state.app.opcoesDeInvestimento,
  lastApplyOk: state.app.lastApplyOk
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchInvestimentos,
  goToInvestimentos,
  applyInvestimento,
  goToMain,
  clearApplyOk
}, dispatch);

const FundoDetalhesContainer = connect(mapStateToProps, mapDispatchToProps)(FundoDetalhes);

export default FundoDetalhesContainer;
