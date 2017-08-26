import React from 'react';
import GrommetApp from 'grommet/components/Grommet';

export default class AppLayout extends React.Component {
  render() {
    return (
      <GrommetApp centered={false}>
          {this.props.children}
      </GrommetApp>
    );
  }
}
