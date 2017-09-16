import React from 'react';
import Footer from 'grommet/components/Footer';
import Section from 'grommet/components/Section';
import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import SocialShare from 'grommet/components/SocialShare';
import Form from 'grommet/components/Form';
import Anchor from 'grommet/components/Anchor';
import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline';
import Image from 'grommet/components/Image';

import {
  colors,
  sectionTitleNegativeStyle
} from '../../constants/styles';

export const MyFooter = ({small}) =>
  <Footer >
    <Section
      align="start"
      pad="medium"
      full="horizontal"
      direction="row"
      style={{background: colors.darkBlue}}
    >
      <Box basis="1/3" pad={{horizontal: 'large', vertical: 'large'}} wrap direction='column' align='center'>
        <Label style={{ ...sectionTitleNegativeStyle, marginTop: '0' }}>
          Parceiros
        </Label>
        <Image style={{width: '120px', height: '120px'}} src='img/itau-logo-negative.svg'/>
        <Label style={{maxWidth: '150px', fontSize: '16px', color: 'white'}}>
          Seu banco não está aqui? Fala pra gente.
        </Label>
      </Box>
      <Box basis="2/3" pad={{horizontal: 'large', vertical: 'large'}} separator='left'>
        <Form plain>
          <Label style={sectionTitleNegativeStyle}>
            Contato
          </Label>
          <Box direction="column" responsive={false} pad={{between: 'medium', vertical: 'medium'}}>
            <FormField help='Seu email' style={{textAlign: 'left'}}>
              <input type="email"/>
            </FormField>
            <FormField help='Mensagem' style={{textAlign: 'left'}}>
              <textarea type="text"/>
            </FormField>
            <Button
              label="Enviar"
              onClick={() => console.log('recebemos um email, uhul!')}
              style={{
                background: colors.yellow,
                borderColor: colors.yellow,
                color: colors.darkGray,
                width: '100px'
              }}
              fill
            />
          </Box>
        </Form>
        <Box direction="row" margin={{top: 'medium', bottom: 'small'}} responsive={false}>
          <SocialShare type="twitter" />
          <SocialShare type="facebook" />
          <SocialShare type="linkedin" />
        </Box>
      </Box>
    </Section>
  </Footer>
