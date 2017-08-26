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

export const MyFooter = ({small}) =>
  <Footer>
    <Section
      align="center"
      pad="medium"
      colorIndex="neutral-1"
      full="horizontal"
      direction="row"
    >
      <Box basis="1/2" pad={{horizontal: 'large', vertical: 'large'}} wrap direction='row' justify='center'>
        <Box basis='1/2' align='center' justify='center' margin={{vertical: 'small'}}>
            <GrommetIcon colorIndex='light-1' size='large' />
        </Box>
        <Box basis='1/2' direction='row' justify='center' margin={{vertical: 'small'}} responsive={false}>
          <div style={{display: 'flex', flexDirection: 'column', marginRight: small ? '25px' : '10px'}}>
            <Label size={small ? 'medium' : 'small'} uppercase>Empresa</Label>
            <Anchor label={<Label size={small ? 'medium' : 'small'}>Sobre nós</Label>}></Anchor>
            <Anchor label={<Label size={small ? 'medium' : 'small'}>Blog</Label>}></Anchor>
            <Anchor label={<Label size={small ? 'medium' : 'small'}>Guias</Label>}></Anchor>
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Label size={small ? 'medium' : 'small'} uppercase>Produto</Label>
            <Anchor label={<Label size={small ? 'medium' : 'small'}>Por que ToRyca?</Label>}></Anchor>
            <Anchor label={<Label size={small ? 'medium' : 'small'}>Depoimentos</Label>}></Anchor>
            <Anchor label={<Label size={small ? 'medium' : 'small'}>Segurança</Label>}></Anchor>
            <Anchor label={<Label size={small ? 'medium' : 'small'}>Educacional</Label>}></Anchor>
          </div>
        </Box>
      </Box>
      <Box basis="1/2" pad={{horizontal: 'large', vertical: 'large'}} separator='left'>
        <Form plain>
          <Label uppercase>Fale conosco</Label>
          <Box direction="column" responsive={false} pad={{between: 'medium', vertical: 'medium'}}>
            <FormField help='Seu email'>
              <input
                type="email"
              />
            </FormField>
            <FormField help='Mensagem'>
              <textarea
                type="text"
              />
            </FormField>
            <Button label="Enviar" fill onClick={() => console.log('recebemos um email, uhul!')} />
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
