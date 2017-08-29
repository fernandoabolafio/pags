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
    width: '33%',
    alignItems: 'center',
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
      <Box direction="row" justify="between">
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
          <Image src="img/landing-section3-img3.png" style={ imageStyles } />
          <Title style={ titleStyles }>Taxas</Title>
          <Label style={ labelStyles }>
            PAG$ só ganha se você ganhar!<br/>
            Quando um cliente utiliza o PAG$ para realizar um investimento, uma porcentagem da taxa de administração vai para melhorias do PAG$
          </Label>
        </Box>
      </Box>
    </Section>
  )
}

export default HomeAdvantages;
