import React from 'react';
import RadioButton from 'grommet/components/RadioButton';
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import FormPreviousLink from 'grommet/components/icons/base/FormPreviousLink';
import FormNextLink from 'grommet/components/icons/base/FormNextLink';
import Button from 'grommet/components/Button';
import NumberInput from 'grommet/components/NumberInput';
import DateTime from 'grommet/components/DateTime';
import {numberWithCommas} from '../../support/objectUtils';
import BadgeLayer from '../BadgeLayer';

export default class AplicarWizard extends React.Component {
  constructor(props) {
    super(props);

    const options = [
      {
        id: 'investir-hoje',
        label: 'Investir Hoje',
        value: 'H'
      },
      {
        id: 'investir-mensalmente',
        label: 'Investir Mensalmente',
        value: 'M'
      },
      {
        id: 'agendar-investimento',
        label: 'Agendar investimento',
        value: 'G'
      }
    ];

    this.state = {
      options,
      step: 0,
      inputs: {
        tipo_movimentacao: 'H',
        data: '',
        valor: this.props.investInfo.valor_minimo_aplicacao
      }
    }
  }

  setValue = (value, key, deepKey) => {
  		let {inputs} = this.state;

  		if(deepKey) {
  			inputs[key][deepKey] = value;
  		}else{
  			inputs[key] = value;
  		}

  		this.setState({inputs})
  }

  goToNextStep = () => {
    let {step} = this.state;
    this.setState({
      step: ++step
    });
  }

  goToPreviousStep = () => {
    let {step} = this.state;
    this.setState({
      step: --step
    });
  }

  handleCancel = () => {
    this.props.onCancel();
  }

  handleSubmit = () => {
    const {inputs} = this.state;
    this.props.onApply(inputs);
  }

  renderAppMensal = () => {
    return <Box margin="medium" align="center">
      {this.renderValorInput()}
      <Box align="center" margin={{vertical: "small"}}>
        <Label margin="none" align="center">Em qual dia do mês deseja aplicar?</Label>
        <Form compact={true}>
          <FormField>
            <DateTime id='id'
              name='name'
              format='D/M'
              value={this.state.inputs.data}
              onChange={(value) => this.setValue(value, 'data')} />
          </FormField>
        </Form>
      </Box>
    </Box>;
  }

  renderValorInput = () => {
    const {valor} = this.state.inputs;
    const {valor_minimo_aplicacao} = this.props.investInfo;
    return <Box margin={{vertical: "small"}}>
      <Label margin="none">Qual valor deseja investir?</Label>
      <Box direction="row" align="center" responsive={false}>
        <Label style={{marginRight: "10px"}}>R$</Label>
        <NumberInput value={valor} onChange={(e) => this.setValue(e.target.value, 'valor')} style={{width: '100px'}} min={valor_minimo_aplicacao} step={100} />
      </Box>
    </Box>
  }


  renderAppHoje = () => {
    return  <Box margin="medium">
      {this.renderValorInput()}
    </Box>;
  }

  renderAppAgendado = () => {
    return <Box margin="medium" align="center">
      {this.renderValorInput()}
      <Box align="center" margin={{vertical: "small"}}>
        <Label margin="none" align="center">Quando será efetuado a aplicação?</Label>
        <Form compact={true}>
          <FormField>
            <DateTime id='id'
              name='name'
              format='D/M/YYYY'
              value={this.state.inputs.data}
              onChange={(value) => this.setValue(value, 'data')} />
          </FormField>
        </Form>
      </Box>
    </Box>;
  }

  renderSecondStep = () => {
    const {tipo_movimentacao} = this.state.inputs;
    const mapTipoToContent = {
      H: this.renderAppHoje(),
      M: this.renderAppMensal(),
      G: this.renderAppAgendado()
    }
    const content = mapTipoToContent[tipo_movimentacao];
    return <Box align="center">
        <Box direction="row" style={{width: "100%"}} pad="small" responsive={false}>
          <Box flex="grow" align="start">{this.renderAnchor('', false,() => this.goToPreviousStep() )}</Box>
        </Box>
        {content}
        <Box pad="medium"><Button primary label="Aplicar" onClick={() => this.handleSubmit()}/></Box>
    </Box>
  }

  renderFirstStep = () => {
    const {options} = this.state;
    const {tipo_movimentacao} = this.state.inputs;

    return <Box align="center">
      <Box direction="row" style={{width: "100%"}} pad="small" responsive={false}>
        <Box flex="grow" align="start">{this.renderAnchor('', false, this.props.onCancel)}</Box>
        <Box flex="grow" align="end">{this.renderAnchor('', true,() => this.goToNextStep(), true)}</Box>
      </Box>
      <Label>Como deseja investir?</Label>
      <FormField>
        {
          options.map(option =>
            <RadioButton id={option.id}
              name={option.id}
              label={option.label}
              value={option.value}
              checked={tipo_movimentacao === option.value}
              onChange={() => this.setValue(option.value, 'tipo_movimentacao')} />
          )
        }
      </FormField>
    </Box>
  }

  formatValue = (value) => {
    return `R$${numberWithCommas(value)}`;
  }


  renderMainContent = () => {
    const {step} = this.state;
    const mapStepToContent = {
      [0]: this.renderFirstStep(),
      [1]: this.renderSecondStep()
    }
    const content = mapStepToContent[step];
    return content;
  }

  renderAnchor = (label, next, onClick, reverse = false) => {
    return (
      <Anchor
        reverse={reverse}
        primary={next ? true : false}
        onClick={onClick}
        icon={next ? <FormNextLink /> :  <FormPreviousLink />}
        label={<span style={{fontSize:"14px"}}>{next ? 'próximo' : 'anterior'}</span>} />
    )
  }

  renderFlowControl = () => {
    return (
      <Box direction="row">

      </Box>
    )
  }

  render() {
    return (
        <Box align="center">
          {this.renderMainContent()}
        </Box>
    )
  }
}
