import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Fundos from '../components/Fundos';
import {
  fetchFundosRecomendados,
  fetchCarteiraRecomendada,
  clearCarteiraRecomendada,
  fetchInvestimentos,
  seeMoreInvestimento,
  conquerAcessorio,
  eraseNovaRecompensa
  } from '../actions/actions';

const mapStateToProps = state => ({
  fundosRecomendados: state.app.fundosRecomendados,
  carteiraRecomendada: state.app.carteiraRecomendada,
  opcoesDeInvestimento: state.app.opcoesDeInvestimento,
  pagsAcessorios: state.app.activeUser.pagsAcessorios,
  novaRecompensa: state.app.activeUser.novaRecompensa
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchFundosRecomendados,
  fetchCarteiraRecomendada,
  fetchInvestimentos,
  clearCarteiraRecomendada,
  seeMoreInvestimento,
  conquerAcessorio,
  eraseNovaRecompensa
}, dispatch);

const FundosContainer = connect(mapStateToProps, mapDispatchToProps)(Fundos);

export default FundosContainer;
