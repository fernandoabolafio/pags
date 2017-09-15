import React from 'react';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Title from 'grommet/components/Title';

import {
  sectionStyle,
  colors,
  sectionTitleNegativeStyle
} from '../../constants/styles';

const HomeAdvantages = () => {
  const labelStyles = {
    maxWidth: '300px',
    color: '#FFF',
    textAlign: 'center',
  };

  const advantageBoxStyles = {
    alignItems: 'center'
  }

  const imageStyles = {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
  }

  const titleStyles = {
    margin: 0,
    color: colors.yellow,
    textTransform: 'uppercase',
    marginTop: '15px',
    fontSize: '28px'
  }

  return (
    <Section
      pad="large"
      style={{ ...sectionStyle, backgroundColor: colors.darkBlue }}
      direction="column"
    >
      <Box align="center">
        <Heading style={ sectionTitleNegativeStyle }>
          Vantagens
        </Heading>
      </Box>
      <Box direction="row" justify="center">
        <Box pad="medium" style={ advantageBoxStyles }>
          <Image src="img/landing-section3-img1.png" style={ imageStyles } />
          <Title style={ titleStyles }>Versátil</Title>
          <Label style={ labelStyles }>
            PAG$ é associável com qualquer banco!<br/>
            Nosso sistema inteligente é totalmente versátil e se adequa a qualquer banco. As informações ficam mais transparentes e acessíveis para qualquer um.
          </Label>
        </Box>
        <Box pad="medium" style={ advantageBoxStyles }>
          <Image src="img/landing-section3-img2.png" style={ imageStyles } />
          <Title style={ titleStyles }>Divertido</Title>
          <Label style={ labelStyles }>
            PAG$ é uma fofura!<br/>
            Investir ficou mais divertido e seguro, você cuida de um personagem enquanto investe em busca dos seus sonhos
          </Label>
        </Box>
        <Box pad="medium" style={ advantageBoxStyles }>
          <Image src="img/landing-section3-img3.svg" style={ imageStyles } />
          <Title style={ titleStyles }>Prático</Title>
          <Label style={ labelStyles }>
            Pag$ é o que você precisa!<br/>
É prático para investir e a informação vem sempre que você precisa, de forma simples, transparente e objetiva
          </Label>
        </Box>
      </Box>
    </Section>
  )
}

export default HomeAdvantages;
