import React from 'react';
import Timestamp from 'grommet/components/Timestamp';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

export default class ViewObjetivoLayerContent extends React.Component {
  render() {
    const {onClose} = this.props;
    return (
      <Article pad={{vertical: 'small', between: 'small'}} >
      <Heading tag="h2" margin="none">Adicionar Objetivo</Heading>
      <Section style={{minHeight: '480px', minWidth: '548px'}}>
        <Box direction='column'>
          <Form pad={{vertical: 'medium'}} >
            <Box pad={{between: 'medium'}}>
              <FormField
                label='Nome'
              >
                <TextInput />
              </FormField>
              <FormField
                label='Descrição'
              >
                <textarea
                  type='text'
                />
              </FormField>
              <FormField
                label='Valor'
              >
                <TextInput />
              </FormField>
              <FormField
                label='Previsão de término'
              >
                <TextInput />
              </FormField>
              <Box direction='row' justify='end' responsive={false}>
                <Button primary onClick={onClose} label='Adicionar' />
              </Box>
            </Box>
          </Form>
        </Box>
      </Section>
     </Article>
    )
  }
}
