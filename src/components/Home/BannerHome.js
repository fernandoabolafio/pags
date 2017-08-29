import React from 'react';
import Button from 'grommet/components/Button';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

import { sectionStyle, colors } from '../../constants/styles';

const BannerHome = () => {
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
          textAlign: 'center'
        }}
      >
        CONHEÇA PAG$
      </Heading>
      <Heading tag="h3" style={{textAlign: 'center', fontSize: '28px'}}>
        Seu assitente pessoal de investimentos
      </Heading>
      <Label align="center">
        Aprenda a investir na prática de modo seguro, <br/>
        passo a passo e de forma divertida.
      </Label>
    </Box>
    <Box style={ boxStyles }>
      <Image size="medium" src="img/landing-img1.png"/>
    </Box>
    </Section>
  )
}

export default BannerHome;
