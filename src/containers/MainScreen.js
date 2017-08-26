import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainScreen from '../components/MainScreen';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

const MainScreenContainer = connect(mapStateToProps, mapDispatchToProps)(MainScreen);

export default MainScreenContainer;
