import React from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Spinning from 'grommet/components/icons/Spinning';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import FormPreviousLink from 'grommet/components/icons/base/FormPreviousLink';
import AplicarWizard from './AplicarWizard';

import {numberWithCommas} from '../../support/objectUtils';

/*renderSuccessStep = () => {
  const {tipo_movimentacao, valor, data} = this.state.inputs;
  const {investInfo} = this.props;
  const {formatValue} = this;
  const mapTipoToMessage = {
    H:(<Box align="center">
        <Heading align="center" tag="h3">{`Parabens!`}</Heading>
        <Heading align="center" tag="h4">{`Você investiu ${formatValue(valor)} em ${investInfo.nome_comercial}`}</Heading>
      </Box>),
    M: <Heading align="center" tag="h4">{`Parabens! Seu investimento mensal de ${formatValue(valor)} foi cadastrado.`}</Heading>,
    G: <Heading align="center" tag="h4">{`Parabens! Seu investimento de ${formatValue(valor)} será efetuado em ${data}`}</Heading>
  };
  const message = mapTipoToMessage[tipo_movimentacao];
  return <Box align="center">{message}</Box>
}*/

export default class FundoDetalhes extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      investInfo: false,
      wizar: false
    }
  }

  getInfo(id, type) {
    const mapTypeToIdKey = {
      cdbs: 'id_cdb',
      coes: 'id_coe',
      fundos: 'id_fundo',
      previdencias: 'id_previdencia',
      poupancas: 'id_poupanca'
    };
    const produtos = this.props.opcoesDeInvestimento[type];
    const key = mapTypeToIdKey[type];
    const investimento = produtos.filter( produto => parseInt(produto[key]) === parseInt(id))[0];
    this.setState({
      investInfo: investimento
    })
  }

  mapIdToTipoDeInvestimento(id) {
    let tipo = '';
    const intId = parseInt(id);
    if(intId === 1019) return 'cdbs';
    if(intId === 1003) return 'coes';
    if(intId === 1001 || intId === 1002 || (intId >= 1004 && intId <= 1014)) return 'fundos';
    if(intId >= 1015 && intId <= 1018) return 'previdencias';
    if(intId === 1020) return 'poupancas';
    return false;
  }

  componentWillReceiveProps(nextProps) {
      const {type, id} = this.state;
      if(type && id && !this.state.investInfo && nextProps.opcoesDeInvestimento[type]) {
        this.getInfo(id, type);
      }
  }

  componentDidMount() {
    //get id do investimento
    const pathAsArray = this.props.pathname.split('/');
    const id = pathAsArray[3];
    const type = this.mapIdToTipoDeInvestimento(id);

    this.setState({
      type,
      id
    });

    if(this.props.opcoesDeInvestimento[type]){
      this.getInfo(id, type);
    }else {
      this.props.fetchInvestimentos(type);
    }

  }

  getDias = (value) => {
    const asArray = value.split('+');
    return asArray[1];
  }

  renderHeading = (text) => {
    return <Heading uppercase={true} align="center" tag="h3">{text}</Heading>;
  }

  renderInfo = (label, value, divider=true) => {
    return <Box separator={divider ? "bottom" : "none"} pad={{vertical:"small"}} direction="row" align="start" responsive={false}>
      <Box align="start" justify="start" size={{height: 'full'}}>
        <Label margin="none">{label}</Label>
      </Box>
      <Box flex="grow" align="end" justify="start">
        {value}
      </Box>
    </Box>;
  }

  renderRentabilidades(rentabilidades) {
    const {mes, ano} = rentabilidades;
    const meses12 = rentabilidades['12_meses'];
    return <Box>
      <Label align="end" margin="none">
        {`${mes}% `}
        <span style={{fontSize: "12px"}}>mês</span>
      </Label>
      <Label align="end" margin="none">
        {`${ano}% `}
        <span style={{fontSize: "12px"}}>ano</span>
      </Label>
      <Label align="end" margin="none">
        {`${meses12}% `}
        <span style={{fontSize: "11px"}}>12 meses</span>
      </Label>
    </Box>;
  }

  toggleInvestir = (bool) => {
    this.setState({
      wizard: bool
    })
  }

  renderContent = () => {
    const {investInfo} = this.state;
    return (
          <Box pad="medium" style={{backgroundColor: 'white'}} size="medium">
            {this.renderInfo('Valor mínimo', <Label margin="none">{`R$${numberWithCommas(investInfo.valor_minimo_aplicacao)}`}</Label> )}
            {
              investInfo.rentabilidades ?
              this.renderInfo('Rentabilidade', this.renderRentabilidades(investInfo.rentabilidades))
              :
              null
            }
          {this.renderInfo(
              'Cotização do Resgate',
              <Label margin="none">
                {`${this.getDias(investInfo.data_cotizacao_resgate)} `}
                <span style={{fontSize:'11px'}}>dias uteis</span>
              </Label>,
              false
            )
          }
          {this.renderInfo(
              'Resgate',
              <Label margin="none">
                {`${this.getDias(investInfo.data_credito_resgate)} `}
                <span style={{fontSize:'11px'}}>dias uteis</span>
              </Label>
            )
          }
          {
            this.renderInfo(
              'IR',
              <Label margin="none">
                {`${investInfo.valor_ir}% `}
                <span style={{fontSize:'11px'}}>do rendimento</span>
              </Label>,
              false
            )
          }
          {
            this.renderInfo(
              'Taxas',
              <Label margin="none">
                {`${2}% `}
                <span style={{fontSize:'11px'}}>ano sobre o total</span>
              </Label>
            )
          }
          {this.renderInfo('Risco', <Label margin="none">{investInfo.grau_risco}</Label>, false)}
            <Box pad="medium">
              <Button label="Investir" onClick={() => this.toggleInvestir(true)}></Button>
            </Box>
          </Box>
    );

  }

  onApply = (data) => {
    console.log('got data', data);
  }

  getMainContent = () => {
    return this.state.investInfo ? this.renderContent() : <Spinning />;
  }

  renderAplicarWizard = () => {
    return <Box pad="small" style={{backgroundColor: 'white'}} size="medium">
      <AplicarWizard onApply={this.onApply} investInfo={this.state.investInfo} onCancel={() => this.toggleInvestir(false)} />
    </Box>;
  }

  renderHeadings() {
    const {investInfo} = this.state;
    return investInfo ? [
      <Heading uppercase={true} align="center" tag="h3">{investInfo.nome_comercial}</Heading>,
      <Heading  align="center" tag="h4">{investInfo.nome_familia}</Heading>
    ] : null;
  }


  render() {
    return (
      <Section align="center" style={{backgroundColor: '#f5f5f5'}}>
        <Box align="center">
          <Anchor primary onClick={() => this.props.goToInvestimentos()} icon={<FormPreviousLink />} label="Voltar" />
          {this.renderHeadings()}
          {this.state.wizard ? this.renderAplicarWizard() : this.getMainContent()}
        </Box>
      </Section>
    );
  }
}
