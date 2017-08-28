import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FundoDetalhes from '../components/FundoDetalhes';
import { fetchInvestimentos, goToInvestimentos } from '../actions/actions';

const mapStateToProps = state => ({
  pathname: state.routing.locationBeforeTransitions.pathname,
  opcoesDeInvestimento: state.app.opcoesDeInvestimento
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchInvestimentos,
  goToInvestimentos
}, dispatch);

const FundoDetalhesContainer = connect(mapStateToProps, mapDispatchToProps)(FundoDetalhes);

export default FundoDetalhesContainer;
