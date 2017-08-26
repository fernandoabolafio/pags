import React from 'react';
import Grommet from 'grommet/components/Grommet';
import App from 'grommet/components/App'


export default class AppLayout extends React.Component {
  render() {
    return (
      <Grommet>
          {this.props.children}
      </Grommet>
    );
  }
}
