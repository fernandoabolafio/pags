import React from 'react';
import Layer from 'grommet/components/Layer';
import Section from 'grommet/components/Section';
import Close from 'grommet/components/icons/base/Close';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';

export default class Dica extends React.Component {
  renderInvestimento = (investimento) => {
    return (
      <Box align="center">
        <Anchor onClick={() => this.props.seeMoreInvestimento(investimento.id)} label={investimento.name} />
      </Box>
    )
  }

  render() {
    const {dica} = this.props;
    return (
      <Layer>
        <Section>
          <Box align="end" >
            <Anchor  onClick={this.props.onClose} icon={<Close />} />,
          </Box>
          <Box align="center">
            <Heading tag="h3">{dica.greeting ? dica.greeting : "Dica"}</Heading>
            <Paragraph>
              {dica.mensagem}
            </Paragraph>
            {
              dica.investimentos ?
              dica.investimentos.map(inv => this.renderInvestimento(inv))
              : null
            }
          </Box>
        </Section>
      </Layer>
    )
  }
}
