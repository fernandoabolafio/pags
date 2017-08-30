import React from 'react';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Section from 'grommet/components/Section';
import NumberInput from 'grommet/components/NumberInput';
import DateTime from 'grommet/components/DateTime';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

export default class AddObjetivoLayerContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      valor: 0,
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

  handleDataChange = (value) => {
    this.setState({
      conclusaoEstimada: value
    });
  }

  handleValueChange = (event) => {
    const {value} = event.target;
    this.setState({
      valor: value
    });
  }

  onSubmit = () => {
    console.log(this.state);
    this.props.addObjetivo(this.state);
    console.log(this.props);
    if (!this.props.pagsAcessorios[2].isConquered) {
      this.props.conquerAcessorio(2, 'criou seu primeiro objetivo');
    }
    this.props.onClose();
  }

  render() {
    const {nome, valor, conclusaoEstimada, descricao} = this.state;
    const {small} = this.props;
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
              <NumberInput name='valor' step={10} value={valor} onChange={(event) => this.handleValueChange(event)} />
            </FormField>
            <FormField
              label='Previsão de término'
            >
              <DateTime id='id'
                name='conclusaoEstimada'
                format='D/M/YYYY'
                value={conclusaoEstimada}
                onChange={(value) => this.handleDataChange(value)} />
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
