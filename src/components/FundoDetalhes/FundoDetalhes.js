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
import Status from 'grommet/components/icons/Status';
import BadgeLayer from '../BadgeLayer';
import {recomendados, generateRendBruto, generateRendLiq, generateFormatedData, generateFormatedDataWithPoupanca} from '../../test/mockedRecomendados';
import {numberWithCommas} from '../../support/objectUtils';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import ProjectionChart from '../ProjectionChart';


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
    const investId = window.location.hash.split("/")[3];
    const investimento = recomendados.filter(rec => rec.id === parseInt(investId))[0];

    function getQueryStringValue (key) {
      return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }

// Would write the value of the QueryString-variable called name to the console
    const quantia = getQueryStringValue("quantia");

    this.state = {
      investInfo: false,
      wizar: false,
      investimento,
      quantia
    }
  }


  onApply = (data) => {
    this.setState({
      applying: true,
      wizardData: data
    });
  }

  renderAplicarWizard = () => {
    return <Box pad="small" style={{backgroundColor: 'white', width: "100%"}}>
      <AplicarWizard onApply={this.onApply} investInfo={this.state.investimento} onCancel={() => this.toggleInvestir(false)} />
    </Box>;
  }

  renderHeadings() {
    const {investInfo} = this.state;
    return investInfo ? [
      <Heading uppercase={true} align="center" tag="h3">{investInfo.nome_comercial}</Heading>,
      <Heading  align="center" tag="h4">{investInfo.nome_familia}</Heading>
    ] : null;
  }

  formatValue = (value) => {
    return `R$${numberWithCommas(value)}`;
  }

  renderRentabilidades(rentabilidades) {
    const {mes, ano, dia} = rentabilidades;
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
        {`${dia}% `}
        <span style={{fontSize: "11px"}}>dia</span>
      </Label>
    </Box>;
  }

  getDias = (value) => {
    const asArray = value.split('+');
    return asArray[1];
  }

  toggleInvestir = (bool) => {
    this.setState({
      wizard: bool
    })
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

  onApply = (data) => {
    this.setState({
      applied: true,
      wizardData: data
    });
  }

    renderContent = () => {
    const {investimento} = this.state;
    const {small} = this.props;
    return (
          <Box pad="medium" style={{backgroundColor: 'white', width: small ?"100%" : ""}} >
            {this.renderInfo('Valor mínimo', <Label margin="none">{`R$${investimento.invest_min}`}</Label> )}
            {
              investimento.rentabilidades ?
              this.renderInfo('Rentabilidade', this.renderRentabilidades(investimento.rentabilidades))
              :
              null
            }
          {this.renderInfo(
              'Possibilidade de resgate',
              <Label margin="none">
                {investimento.liquidez === 'diario' ? 'Diária' : 'No vencimento'}
              </Label>,
              false
            )
          }
          {this.renderInfo(
              'Quando cai o resgate',
              <Label margin="none">
                {`${this.getDias(investimento.quando_recebe)} `}
                <span style={{fontSize:'11px'}}>dias uteis</span>
              </Label>
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
          {this.renderInfo('Risco', <Label margin="none">{investimento.risco}</Label>, false)}
            <Box align="center">
              <Heading tag="h4">Rendimento esperado para os proximos 12 meses:</Heading>
              <ProjectionChart small={small} investimento={this.state.investimento} meses={12} valor={1500} />
            </Box>
            <Box pad="medium" align="center">
              <Button label="Investir" onClick={() => this.toggleInvestir(true)}></Button>
            </Box>
          </Box>
    );

  }

  renderSuccessStep = () => {
    const {tipo_movimentacao, valor, data} = this.state.wizardData;
    const {investimento} = this.state;
    const {formatValue} = this;

    const mapTipoToMessage = {
      H:(<Box align="center">
          <Heading align="center" tag="h3">{`Parabens!`}</Heading>
          <Heading align="center" tag="h4">{`Você investiu ${formatValue(valor)} em ${investimento.nome}`}</Heading>
        </Box>),
      M: <Heading align="center" tag="h4">{`Parabens! Seu investimento mensal de ${formatValue(valor)} foi cadastrado.`}</Heading>,
      G: <Heading align="center" tag="h4">{`Parabens! Seu investimento de ${formatValue(valor)} será efetuado em ${data}`}</Heading>
    };
    const message = mapTipoToMessage[tipo_movimentacao];
    return <Box align="center">
      {message}
      <Status value='ok' />
      <Anchor style={{marginTop:"20px"}} primary onClick={() => this.props.goToMain()}  label="Ver meus investimentos" />
    </Box>;
  }

  renderHeadings() {
    const {investimento} = this.state;
    return (
      <Heading uppercase={true} align="center" tag="h3">{investimento.nome}</Heading>
    );
  }


  render() {
    const layer = this.props.novaRecompensa.active ? (<BadgeLayer
      onClose={this.props.eraseNovaRecompensa}
      recompensa={this.props.novaRecompensa}
      small={this.props.small}
    />) : null;

    return (

      <div>
        <Section align="center" style={{backgroundColor: '#f5f5f5'}}>
        {
          !this.state.applied ?
          [
            <Anchor primary onClick={() => this.props.goToInvestimentos()} icon={<FormPreviousLink />} label="Voltar" />,
            this.renderHeadings(),
            this.state.wizard ? this.renderAplicarWizard() : this.renderContent()
          ]
          :
          <Box pad="medium" style={{backgroundColor: 'white', width: "100%"}}>
            {this.renderSuccessStep()}
          </Box>
        }
        </Section>
        {layer}
      </div>
    );
  }
}
