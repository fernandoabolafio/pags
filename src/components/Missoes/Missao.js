import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Article from 'grommet/components/Article';
import Inflacao from './Inflacao';

const Tutorial = () =>
  <Article pad={{vertical: 'small', between: 'small'}} >
    <Heading tag="h2" margin="none">Em breve!</Heading>
  </Article>

export default class Missao extends React.Component {
  render() {
    const missoes = {
      [1]: <Tutorial />,
      [2]: <Inflacao small={this.props.small} onClose={this.props.onClose}/>
    }
    return(
      <Box>
        {missoes[this.props.missao]}
      </Box>
  )}
}
