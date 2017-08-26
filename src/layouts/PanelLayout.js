import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Box from 'grommet/components/Box';
import Responsive from 'grommet/utils/Responsive';

export default class PanelLayout extends React.Component {
  constructor() {
    super();
    this._onResponsive = this._onResponsive.bind(this);
    this.state = {};
  }

  componentDidMount () {
    this._responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount() {
    this._responsive.stop();
  }

  _onResponsive(small) {
    this.setState({ small });
  }
  render() {
    const {small} = this.state
    return (
      <Box>
        <Header activeUser={this.props.activeUser} logout={this.props.logout}/>
        {this.props.children}
        <Footer small={small} />
      </Box>
    );
  }
}
