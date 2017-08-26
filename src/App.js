import React, { Component } from 'react';
import logo from './logo.svg';
import Grommet from 'grommet/components/Grommet';
import App from 'grommet/components/App'
import Button from 'grommet/components/Button';

class MyApp extends Component {
  render() {
    return (
      <Grommet>
        <App>
          <div>
            <img src={logo} alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        <Button label='Label'
          href='#' />
        </App>
      </Grommet>
    );
  }
}

export default MyApp;
