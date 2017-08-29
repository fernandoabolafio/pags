import React from 'react';
import Video from 'grommet/components/Video'
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Heading from 'grommet/components/Heading';
import Meter from 'grommet/components/Meter'
import Value from 'grommet/components/Value';

export default class AulasList extends React.Component {
  renderVideo = (src, title , completeness) => {
    return <Box margin="medium">
      <Heading tag="h4" align="center">{title}</Heading>
      <iframe width="300" height="200" src={src} frameborder="0" allowfullscreen></iframe>
      <Box>
        <Value value={completeness}
          units='%'
          align='start' />
        <Meter value={completeness} />
      </Box>
    </Box>;
  }
  render() {
    return <Box align="center">
        {this.renderVideo('https://www.youtube.com/embed/n9IrCFUY4pw', 'Pra que serve o mercado financeiro?', 40)}
        {this.renderVideo('https://www.youtube.com/embed/kdXmwI1WdtU', 'Renda Fixa', 60)}
        {this.renderVideo('https://www.youtube.com/embed/UAdISpEyO_E', 'Renda Váriavel', 10)}
    </Box>
  }
}
