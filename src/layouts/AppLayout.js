import React from 'react';
import GrommetApp from 'grommet/components/Grommet';

export default class AppLayout extends React.Component {
  render() {
    return (
      <GrommetApp>
          {this.props.children}
      </GrommetApp>
    );
  }
}
