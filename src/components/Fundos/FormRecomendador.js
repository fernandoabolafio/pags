import React from 'react';
import {
  NumberInput,
  TextInput,
  RadioButton,
  FormField,
  Form,
  Box,
  Footer,
  Button,
  Label
  } from 'grommet';

export default class FormRecomendador extends React.Component {
  setValue = (value, key, deepKey) => {
  		let {inputs} = this.props;

  		if(deepKey) {
  			inputs[key][deepKey] = value;
  		}else{
  			inputs[key] = value;
  		}
  		this.props.onChangeInputs(inputs);
  }

  render() {
    const {inputs, small} = this.props;
    return (
      <Box align="center" >
        <Form compact={true} style={{flexDirection:"row"}}>
          <FormField label="Quantia">
            <NumberInput value={inputs.quantia} onChange={(e) => this.setValue(e.target.value, 'quantia')} style={{width: '100px'}} min={0} step={100} />
          </FormField>
          <FormField label="Tempo que o dinheiro pode ficar investido">
            <NumberInput value={inputs.prazo} onChange={(e) => this.setValue(e.target.value, 'prazo')} style={{width: '100px'}} min={0} step={1} />
          </FormField>
          <FormField label="Possibilidade de resgate do dinheiro">
            <RadioButton
              id={'liquidez_diario'}
              name={'liquidez_diario'}
              label={'Todo dia'}
              value={'diario'}
              checked={inputs.liquidez === 'diario'}
              onChange={() => this.setValue('diario', 'liquidez')}
            />
            <RadioButton
              id={'liquidez_vencimento'}
              name={'liquidez_vencimento'}
              label={'No vencimento'}
              value={'vencimento'}
              checked={inputs.liquidez === 'vencimento'}
              onChange={() => this.setValue('vencimento', 'liquidez')}
            />
          </FormField>
          <FormField style={{overflow: "hidden"}} label="Rendimento">
            <RadioButton id={'pre_fixado'}
              name={'pre_fixado'}
              label={'Tenho conhecimento no momento da compra'}
              value={'pre_fixado'}
              checked={inputs.rendimento === 'pre_fixado'}
              onChange={() => this.setValue('pre_fixado', 'rendimento')}
            />
            <RadioButton id={'pos_fixado'}
              name={'pos_fixado'}
              label={'Tenho uma estimativa mas só saberei o valor exato no futuro'}
              value={'pos_fixado'}
              checked={inputs.rendimento === 'pos_fixado'}
              onChange={() => this.setValue('pos_fixado', 'rendimento')}
            />
          </FormField>
          <FormField label="Risco">
            <RadioButton id={'baixo'}
              name={'baixo'}
              label={'Baixo'}
              value={'baixo'}
              checked={inputs.risco === 'baixo'}
              onChange={() => this.setValue('baixo', 'risco')}
            />
            <RadioButton id={'medio'}
              name={'medio'}
              label={'Médio'}
              value={'medio'}
              checked={inputs.risco === 'medio'}
              onChange={() => this.setValue('medio', 'risco')}
            />
            <RadioButton id={'alto'}
              name={'alto'}
              label={'Alto'}
              value={'alto'}
              checked={inputs.risco === 'alto'}
              onChange={() => this.setValue('alto', 'risco')}
            />
          </FormField>
        </Form>
      </Box>
    );
  }
}
