import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Fundos from '../components/Fundos';
import {
  fetchFundosRecomendados,
  fetchCarteiraRecomendada,
  clearCarteiraRecomendada,
  fetchInvestimentos,
  seeMoreInvestimento
  } from '../actions/actions';

const mapStateToProps = state => ({
  fundosRecomendados: state.app.fundosRecomendados,
  carteiraRecomendada: state.app.carteiraRecomendada,
  opcoesDeInvestimento: state.app.opcoesDeInvestimento
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchFundosRecomendados,
  fetchCarteiraRecomendada,
  fetchInvestimentos,
  clearCarteiraRecomendada,
  seeMoreInvestimento
}, dispatch);

const FundosContainer = connect(mapStateToProps, mapDispatchToProps)(Fundos);

export default FundosContainer;
