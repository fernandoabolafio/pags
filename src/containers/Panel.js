import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PanelLayout from '../layouts/PanelLayout';
import {logout} from '../actions/actions';

const mapStateToProps = state => ({
  activeUser: state.app.activeUser
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout
}, dispatch);

const PanelContainer = connect(mapStateToProps, mapDispatchToProps)(PanelLayout);

export default PanelContainer;
