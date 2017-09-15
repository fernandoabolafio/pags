import React from 'react';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

import { sectionStyle, colors } from '../../constants/styles';

const HomeBanner = () => {
  const boxStyles = {
    padding: '0 50px',
    justifyContent: 'center',
    alignItems: 'center',
    direction: 'column'
  };

  return (
    <Section
      colorIndex='brand'
      direction="row"
      style={{ ...sectionStyle, backgroundColor: colors.darkBlue }}
    >
    <Box pad="small" style={ boxStyles }>
      <Heading
        style={{
          textTransform: 'uppercase',
          fontSize: '65px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '0',
        }}
      >
        CONHEÇA PAG$
      </Heading>
      <Heading
        tag="h3"
        style={{
          textAlign: 'center',
          fontSize: '42px',
          fontWeight: 'bold',
        }}
      >
        é tão fácil quanto a poupança
      </Heading>
      <Label align="center" margin="small" style={{maxWidth: '350px'}}>
        Aprenda a investir na prática de modo seguro,
        passo a passo e de forma divertida.
      </Label>
    </Box>
    <Box style={ boxStyles }>
      <Image size="medium" src="img/landing-img.svg"/>
    </Box>
    </Section>
  )
}

export default HomeBanner;
