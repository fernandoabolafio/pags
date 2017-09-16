import React from 'react';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

import GraphSubtitle from './GraphSubtitle';

import {
  sectionStyle,
  colors,
  sectionTitleStyle,
} from '../../constants/styles';

const HomeReasons = () => {
	return (
    <Section
      style={{ ...sectionStyle, backgroundColor: colors.lightGray }}
      direction="column"
    >
      <Box align="center">
        <Heading tag="h3" style={sectionTitleStyle}
        >
          Por que começar a investir?
        </Heading>
      </Box>
      
      <Box
        align="center"
        justify="center"
        direction="row"
      >
        <Box align="center" pad="large">
          <Image src='img/reasons-to-invest-bot.svg' size="large"/>
        </Box>
        <Box align="center" direction="column" pad="large">
          <Label style={{marginTop: '0'}}>
            O que aconteceria com meus R$2.000,00 se eu o deixasse guardado por 8 anos...
          </Label>
          <Box direction="row" style={{width: '100%'}}>
            <GraphSubtitle color={colors.darkBlue} text="no colchão" />
            <GraphSubtitle color={colors.lightGray} text="na poupança" />
            <GraphSubtitle color={colors.yellow} text="no tesouro selic" />
          </Box>
          <Image src='img/reasons-to-invest-graph.svg' size="large" />
        </Box>
      </Box>
    </Section>
	)
};

export default HomeReasons;
