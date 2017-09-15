import React from 'react';
import Section from 'grommet/components/Section';
import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

import {
  sectionStyle,
  colors,
  sectionHeadingStyle,
} from '../../constants/styles';

const HomeReasons = () => {
  const titleStyle = {
    color: colors.yellow,
    fontSize: '62px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  };

  const subtitleStyle = {
    color: 'white',
    fontSize: '28px',
  };

	return (
    <Section
      style={{ ...sectionStyle, backgroundColor: colors.darkBlue }}
      direction="column"
      align="center"
    >
      <Heading tag="h1" style={titleStyle}>
        Invista com PAG$
      </Heading>
      <Heading tag="h2" style={subtitleStyle}>
        A gente te ajuda a ganhar mais dinheiro
      </Heading>
    </Section>
	)
};

export default HomeReasons;
