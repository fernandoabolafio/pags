import React from 'react';
import GrommetApp from 'grommet/components/Grommet';

const style = {
  'font-family': 'Encode Sans Condensed',
}

export default class AppLayout extends React.Component {
  render() {
    return (
      <GrommetApp style={style}>
        {this.props.children}
      </GrommetApp>
    );
  }
}
