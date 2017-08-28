import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';
import {goToLogin} from '../actions/actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  goToLogin
}, dispatch);

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
