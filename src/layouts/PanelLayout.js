import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chat from '../components/Chat';
import Box from 'grommet/components/Box';
import Responsive from 'grommet/utils/Responsive';
import Menu from '../containers/Menu';

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
    const {small} = this.state;
    const {activeUser, logout, pathname} = this.props;
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       small
     })
    );
    return (
      <Box>
        { !small && <Header activeUser={activeUser} logout={logout} pathname={pathname}/> }
        <Box style={{minHeight: '100vh', height: '100%', width: '100%', backgroundColor: '#f5f5f5', paddingBottom: small ? "68px" : ''}}>
          {childrenWithProps}
        </Box>
        { small ? <Menu /> : <Chat small={small} />}
      </Box>
    );
  }
}
