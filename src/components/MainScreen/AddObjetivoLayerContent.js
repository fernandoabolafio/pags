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

export default class AddObjetivoLayerContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      valor: '',
      conclusaoEstimada: '',
      descricao: ''
    }
  }

  handleInputChange = (event) => {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = () => {
    console.log(this.state);
    this.props.addObjetivo(this.state);
    this.props.onClose();
  }

  render() {
    const {nome, valor, conclusaoEstimada, descricao} = this.state;
    const {onClose, small} = this.props;
    return (
      <Section style={ small ? {} : {minHeight: '480px', minWidth: '548px'}}>
      <Heading tag="h3" margin="none">Adicionar Objetivo</Heading>
      <Box direction='column'>
        <Form pad={{vertical: 'medium'}}>
          <Box pad={{between: 'medium'}}>
            <FormField
              label='Nome'
            >
              <TextInput name='nome' value={nome} onDOMChange={this.handleInputChange} />
            </FormField>
            <FormField
              label='Valor'
            >
              <TextInput name='valor' value={valor} onDOMChange={this.handleInputChange} />
            </FormField>
            <FormField
              label='Previsão de término'
            >
              <TextInput name='conclusaoEstimada' value={conclusaoEstimada} onDOMChange={this.handleInputChange}/>
            </FormField>
            <FormField
              label='Descrição'

            >
              <textarea
                onChange={this.handleInputChange}
                name='descricao'
                type='text'
                value={descricao}
              />
            </FormField>
            <Box direction='row' justify='end' responsive={false}>
              <Button type='button' primary onClick={this.onSubmit} label='Adicionar' />
            </Box>
          </Box>
        </Form>
      </Box>
    </Section>
    )
  }
}
