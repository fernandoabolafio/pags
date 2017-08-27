import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Fundos from '../components/Fundos';
import {fetchFundosRecomendados, fetchCarteiraRecomendada, clearCarteiraRecomendada} from '../actions/actions';

const mapStateToProps = state => ({
  fundosRecomendados: state.app.fundosRecomendados,
  carteiraRecomendada: state.app.carteiraRecomendada
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchFundosRecomendados,
  fetchCarteiraRecomendada,
  clearCarteiraRecomendada
}, dispatch);

const FundosContainer = connect(mapStateToProps, mapDispatchToProps)(Fundos);

export default FundosContainer;
