import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
