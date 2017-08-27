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
import Anchor from 'grommet/components/Anchor';
import Label from 'grommet/components/Label';
import Value from 'grommet/components/Value';
import Paragraph from 'grommet/components/Paragraph';
import CheckBox from 'grommet/components/CheckBox';
import Button from 'grommet/components/Button';
import TrashIcon from 'grommet/components/icons/base/Trash';
import FormPreviousLink from 'grommet/components/icons/base/FormPreviousLink';

export default class ViewObjetivoLayerContent extends React.Component {
  state = {
    section: 'editar'
  };
  onExcluirClick = () => {
    this.setState({ section: 'excluir' })
  }
  onBackClick = () => {
    this.setState({ section: 'editar' })
  }
  onMotivoClick = () => {
    this.setState({ section: 'motivo' })
  }
  render() {
    const { section } = this.state;
    const { onClose } = this.props;
    const layerContent = {
      motivo: () => {
        return (
          <Section style={{minHeight: '480px', minWidth: '548px'}}>
            <Heading tag='h3' align='center'>
              Por que está excluindo esse objetivo?
            </Heading>
            <Box justify='center' direction='row' pad={{vertical: 'medium'}} responsive={false}>
              <Box align='start' direction='column' pad={{between: 'medium'}}>
                <CheckBox
                  id='motivo1'
                  name='motivo1'
                  label='Tive uma emergência'
                />
                <CheckBox
                  id='motivo2'
                  name='motivo2'
                  label='Estou redefinindo prioridades'
                />
                <CheckBox
                  id='motivo3'
                  name='motivo3'
                  label='Não vou conseguir alcançar'
                />
                <CheckBox
                  id='motivo4'
                  name='motivo4'
                  label='Outro'
                />
              </Box>
            </Box>
            <Box flex='grow' justify='end'>
              <Box direction='row' justify='center' pad={{between: 'medium'}} responsive={false}>
                <Button primary onClick={this.onBackClick} label='Mudei de ideia' />
                <Button secondary onClick={onClose} label='Enviar e excluir' />
              </Box>
            </Box>
          </Section>
        )
      },
      excluir: () => {
        return (
          <Section style={{minHeight: '480px', minWidth: '548px'}}>
            <Heading tag='h3' align='center'>
              Tem certeza que deseja excluir esse objetivo?
            </Heading>
            <Box align='center'>
              <Paragraph align='center'>
                Que pena que está desistindo desse objetivo :-(
              </Paragraph>
              <Paragraph align='center'>
                <Anchor label='Conte-nos' onClick={this.onMotivoClick}></Anchor> o porque está desistindo.
              </Paragraph>
              <Paragraph align='center'>
                Veja nossas <Anchor label='opções de investimento' path={{path: 'app/investimentos', index: true}}></Anchor> ou <Anchor label='videos educacionais'></Anchor> e melhore como investidor
                para alcançar seus objetivos mais facilmente.
              </Paragraph>
            </Box>
            <Box flex='grow' justify='end'>
              <Box direction='row' justify='center' pad={{between: 'medium'}} responsive={false}>
                <Button primary onClick={this.onBackClick} icon={<FormPreviousLink size='small' />} label='Não, Retornar' />
                <Button secondary onClick={onClose} label='Sim' />
              </Box>
            </Box>
          </Section>
        )
      },
      editar: () => {
        return (
          <Section style={{minHeight: '480px', minWidth: '548px'}}>
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
                <Label size='small'><span style={{color: '#865cd6'}}>R$ 100.000,00</span> de R$200.000,00</Label>
              </Box>
            </Box>
            <Form pad={{vertical: 'large'}} plain>
              <Box pad={{between: 'large'}} flex='grow'>
                <FormField
                  label='Descrição'
                >
                  <textarea
                    type="text"
                  />
                </FormField>
              </Box>
            </Form>
            <Box flex='grow' justify='end'>
              <Box direction='row' justify='center' pad={{between: 'medium'}} responsive={false}>
                <Button critical onClick={this.onExcluirClick} icon={<TrashIcon size='small' />} label='Excluir' />
                <Button primary onClick={onClose} label='Salvar' />
              </Box>
            </Box>
          </Section>
        )
      }
    }
    return (
      <Article pad={{vertical: 'small', between: 'small'}} >
      <Heading tag="h2" margin="none">Nome Objetivo</Heading>
      {layerContent[section]()}
     </Article>
    )
  }
}
