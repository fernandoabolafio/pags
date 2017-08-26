import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Responsive from 'grommet/utils/Responsive';

export default class MainScreen extends React.Component {
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
        <Section>
          Oi
        </Section>
        <Footer small={small} />
      </Box>
    );
  }
}
