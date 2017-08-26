import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BankSync from '../components/BankSync';
import {login} from '../actions/actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch);

const BankSyncContainer = connect(mapStateToProps, mapDispatchToProps)(BankSync);

export default BankSyncContainer;
