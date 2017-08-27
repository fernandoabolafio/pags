import React from 'react';
import Timestamp from 'grommet/components/Timestamp';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Label from 'grommet/components/Label';
import Value from 'grommet/components/Value';
import Button from 'grommet/components/Button';
import TrashIcon from 'grommet/components/icons/base/Trash';

export default class ViewObjetivoLayerContent extends React.Component {
  render() {
    return (
      <Article pad={{vertical: 'small', between: 'small'}} >
      <Heading tag="h2" margin="none">Nome Objetivo</Heading>
      <Section>
        <Box direction='column'>
          <Label margin='small'>
            Adicionado em: <Timestamp value='2017-08-27T15:20:10.514Z' fields='date' />
          </Label>
          <Label margin='small'>
            Previsão de término: <Timestamp value='2017-10-27T15:20:10.514Z' fields='date' />
          </Label>
          <Box direction='row' pad={{between: 'medium'}} margin={{top: 'medium', bottom: 'none'}} responsive={false}>
            <Meter value='50'/>
            <Value value={'50'}
              units='%'
              align='end'
              size='small'
            />
          </Box>
          <Box direction='row'>
            <Label size='small'>R$ 100.000,00 de R$200.000,00</Label>
          </Box>
        </Box>
        <Form pad={{vertical: 'medium'}} >
          <Box pad={{between: 'medium'}}>
            <FormField
              label='Descrição'
            >
              <textarea
                type="text"
              />
            </FormField>
            <Box direction='row' justify='between' responsive={false}>
              <Box direction='row' responsive={false}>
                <Button critical onClick={() => console.log('iha')} icon={<TrashIcon size='small' />} label='Excluir' />
              </Box>
              <Box pad={{between: 'small'}} direction='row' justify='end' responsive={false}>
                <Button primary onClick={() => console.log('iha')} label='Salvar' />
                <Button secondary onClick={() => console.log('iha')} label='Sair' />
              </Box>
            </Box>
          </Box>
        </Form>
      </Section>
     </Article>
    )
  }
}
