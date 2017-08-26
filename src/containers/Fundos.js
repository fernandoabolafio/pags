import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Fundos from '../components/Fundos';
import {fetchFundosRecomendados} from '../actions/actions';

const mapStateToProps = state => ({
  fundosRecomendados: state.app.fundosRecomendados
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchFundosRecomendados
}, dispatch);

const FundosContainer = connect(mapStateToProps, mapDispatchToProps)(Fundos);

export default FundosContainer;
