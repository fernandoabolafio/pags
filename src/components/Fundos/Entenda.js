import React from 'react';
import Layer from 'grommet/components/Layer';
import Section from 'grommet/components/Section';
import Close from 'grommet/components/icons/base/Close';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';

export default class Entenda extends React.Component {

  render() {
    return (
      <Layer>
        <Section>
          <Box align="end" >
            <Anchor  onClick={this.props.onClose} icon={<Close />} />
          </Box>
          <Box align="center">
            <Heading tag="h3">{this.props.title}</Heading>
            <Paragraph>
              {this.props.text}
            </Paragraph>
          </Box>
        </Section>
      </Layer>
    )
  }
}
