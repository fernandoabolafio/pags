import React from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Spinning from 'grommet/components/icons/Spinning';
import {mapIdToTipoDeInvestimento, mapTypeToIdKey} from '../../support/itauDataUtils';
import {numberWithCommas} from '../../support/objectUtils';
import DateTime from 'grommet/components/DateTime';
import Button from 'grommet/components/Button';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Anchor from 'grommet/components/Anchor';
import FormPreviousLink from 'grommet/components/icons/base/FormPreviousLink';


export default class MeuInvestimento extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      investimento: false,
      extrato: false,
      inputs: {}
    }
  }

  getInvestimentoInfo(id, investimentos) {
    const investimento = investimentos.filter(
      (inv) => inv.codigo === id
    )[0];
    this.setState({
      investimento
    })
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

  componentWillReceiveProps(nextProps) {
      const {id} = this.state;
      if(!this.state.investimento && nextProps.investidorInfo) {
        console.log('got here');
        this.getInvestimentoInfo(id, nextProps.investidorInfo.posicao_consolidada.investimentos);
      }

      if(!this.state.extrato && nextProps.extrato){
        this.setState({
          extrato: nextProps.extrato
        })
        this.props.clearExtrato();
      }
  }



  componentDidMount() {
    // get id do investimento
    const pathAsArray = this.props.pathname.split('/');
    const id = pathAsArray[3];
    const type = mapIdToTipoDeInvestimento(id);
    this.props.fetchExtrato(id);

    this.setState({
      type,
      id
    });

    if(this.props.investidorInfo){
      this.getInvestimentoInfo(id, this.props.investidorInfo.posicao_consolidada.investimentos);
    }else{
      this.props.fetchInvestidorInfo();
    }

  }

  handleVerExtrato = () => {
    this.setState({
      verExtrato: true
    })
  }

  renderInfo = (label, value, divider=false) => {
    return <Box separator={divider ? "bottom" : "none"} pad={{vertical:"small"}} direction="row" align="start" responsive={false}>
      <Box align="start" justify="start" size={{height: 'full'}}>
        <Label margin="none">{label}</Label>
      </Box>
      <Box flex="grow" align="end" justify="start">
        {value}
      </Box>
    </Box>;
  }

  renderLancamentosHistoricos = (lancamentos) => {
    const lancamentosComponents = lancamentos.map(
      lan =>(
      <Box separator={true} style={{width: '100%'}}>
        {this.renderInfo('Data', lan.data_processamento_movimento)}
        {this.renderInfo('Valor Liquido Resgatado', lan.valor_liquido_resgate)}
        {this.renderInfo('IOF', lan.valor_iof_resgate)}
        {this.renderInfo('Saldo', lan.valor_saldo_cota, true)}
      </Box>)
    )
    return <Box style={{width: '100%'}}>
      {lancamentosComponents}
    </Box>
  }

  renderLancamentosPendentes = (lancamentos) => {
    const lancamentosComponents = lancamentos.map(
      lan =>(
      <Box separator={true} style={{width: '100%'}}>
        {this.renderInfo('Data', lan.data_lancamento_operacao)}
        {this.renderInfo('Valor Solicitado', lan.valor_movimento_solicitado, true)}
      </Box>)
    )
    return <Box style={{width: '100%'}}>
      {lancamentosComponents}
    </Box>
  }

  renderLancamentosAgendados = (lancamentos) => {
    const lancamentosComponents = lancamentos.map(
      lan =>(
      <Box separator={true} style={{width: '100%'}}>
        {this.renderInfo('Data', lan.data_lancamento_operacao)}
        {this.renderInfo('Valor Solicitado', lan.valor_movimento_solicitado, true)}
      </Box>)
    )
    return <Box style={{width: '100%'}}>
      {lancamentosComponents}
    </Box>
  }

  renderLancamentosDia = (lancamentos) => {
    const lancamentosComponents = lancamentos.map(
      lan =>(
      <Box separator={true} style={{width: '100%'}}>
        {this.renderInfo('Data', lan.data_lancamento_operacao)}
        {this.renderInfo('Valor Solicitado', lan.valor_movimento_solicitado, true)}
      </Box>)
    )
    return <Box style={{width: '100%'}}>
      {lancamentosComponents}
    </Box>
  }

  renderExtrato = (extrato) => {

    const extratoC = (
      <Accordion style={{width: '100%'}}>
        <AccordionPanel heading="Hoje">
          <Box>
            {this.renderLancamentosAgendados(extrato.lancamentos_agendados)}
          </Box>
        </AccordionPanel>
        <AccordionPanel heading="Histórico">
          <Box>
            {this.renderLancamentosHistoricos(extrato.lancamentos_historicos)}
          </Box>
        </AccordionPanel>
        <AccordionPanel heading="Pendentes">
          <Box>
            {this.renderLancamentosPendentes(extrato.lancamentos_pendentes)}
          </Box>
        </AccordionPanel>
        <AccordionPanel heading="Agendados">
          <Box>
            {this.renderLancamentosAgendados(extrato.lancamentos_dia)}
          </Box>
        </AccordionPanel>
      </Accordion>
    )
    return <Box style={{width: '100%', marginTop: '10px'}}>
      <Heading tag="h3">Lançamentos</Heading>
      {extratoC}
    </Box>;
  }

  render() {
    return (
      <Section align="center" style={{backgroundColor: '#f5f5f5'}}>
        <Box size="medium" align="center">
          <Anchor primary onClick={() => this.props.goToMain()} icon={<FormPreviousLink />} label="Voltar" />
          {
            this.state.investimento ?
            <Box align="center" pad="medium" style={{backgroundColor: 'white', width: '100%'}}>
              <Heading uppercase={true} align="center" tag="h3">
                {this.state.investimento.nome}
              </Heading>
              <Label>Saldo Total:</Label>
              <Heading>{`R$${numberWithCommas(this.state.investimento.saldo)}`}</Heading>
              <Label>Data de ínicio do extrato:</Label>
              <DateTime id='id'
                        name='name'
                        format='D/M/YYYY'
                        value={this.state.inputs.data}
                        onChange={(value) => this.setValue(value, 'data')}
                />
              <Button style={{margin:"10px 0"}} label="Ver Extrato" onClick={this.handleVerExtrato} />
              {
                this.state.extrato && this.state.verExtrato ?
                this.renderExtrato(this.state.extrato)
                :
                null
              }
            </Box>
            :
            <Spinning />
          }
        </Box>
      </Section>
    )
  }

}
