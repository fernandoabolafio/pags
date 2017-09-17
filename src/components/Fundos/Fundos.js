import React from 'react';
import Button from 'grommet/components/Button';
import Title from 'grommet/components/Title';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Columns from 'grommet/components/Columns';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import FormNextLink from 'grommet/components/icons/base/FormNextLink';
import CircleQuestion from 'grommet/components/icons/base/CircleQuestion';
import FormPreviousLink from 'grommet/components/icons/base/FormPreviousLink';
import Search from 'grommet/components/icons/base/Search';
import Catalog from 'grommet/components/icons/base/Catalog';
import SearchInput from 'grommet/components/SearchInput';
import Spinning from 'grommet/components/icons/Spinning';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import NumberInput from 'grommet/components/NumberInput';
import Distribution from 'grommet/components/Distribution';
import SunBurst from 'grommet/components/SunBurst';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import {numberWithCommas} from '../../support/objectUtils';
import Entenda from './Entenda';
import FormRecomendador from './FormRecomendador';
import {recomendados, generateRendBruto, generateRendLiq, generateFormatedData, generateFormatedDataWithPoupanca} from '../../test/mockedRecomendados';

const Fundo = {
        "id_cdb": "1019",
        "nome_comercial": "CDB DI",
        "nome_familia": "Juros Pós-Fixados",
        "grau_risco": "Baixo",
        "valor_minimo_aplicacao": 100,
        "valor_minimo_resgate": 1,
        "hora_limite_aplicacao": "20:00:00",
        "hora_limite_resgate": "20:00:00",
        "data_debito_aplicacao": "D+0",
        "data_cotizacao_resgate": "D+0",
        "data_credito_resgate": "D+0",
        "valor_ir": 15,
        "termo_aplicacao": ""
};

const sections = {
  RECOMENDADOS: 'recomendados',
  CARTEIRA: 'carteira',
  SEARCH: 'search'
}

export default class Fundos extends React.Component {

  constructor(props) {
    super(props);

    const inputsRecomendados = {
      quantia: 100,
      prazo: 6,
      liquidez: 'diario',
      rendimento: 'pre_fixado',
      risco: 'baixo'
    };

    this.state = {
      section: sections.RECOMENDADOS,
      tab: 0,
      loadingCarteira: false,
      inputsRecomendados,
      inputs: {
        carteira: {
          valor: 100,
          prazo: 12
        }
      }
    }
  }

  componentDidMount() {
    //TODO: FETCH INVESTIMENTOS FROM PAGS-DB
  }

  onChangeForm = (inputsRecomendados) => {
    this.setState({
      inputsRecomendados
    })
  }
  mapTabToInfo(tab) {
    const mapTabToInfo = {
      0:  {
            what: 'O que é CDB?',
            text: ' (Certificado de Depósito Bancário): são títulos emitidos para os bancos arrecadarem dinheiro para financiar suas atividades de crédito.Pós-fixado é baseado no CDI ou IPCA. Tem proteção do FGC. IOF em resgates antes de 30 dias.'
          },
      1:  {
            what: 'O que é COE?',
            text: 'Certificado de Operações Estruturadas, é uma “solução pronta” onde são combinadas diferentes ações de renda fixa e renda variável, onde você escolhe seu lucro máximo e sua perda máxima. Assim você estrutura sua compra na bolsa de valores e se protege de possíveis quedas bruscas, mas também tem um máximo para ganhar. Cada COE é baseado no perfil de investidor, então se você é um investidor que quer correr altos riscos, sua COE pode não ter proteção.'
          },
      2: {
            what: 'O que são Fundos?',
            text: 'É uma aplicação financeira que reúne investidores (os cotistas) que querer lucrar com a compra e venda de títulos e valores mobiliários. Isso significa que você compra cotas desse fundo e um profissional ou instituição financeira administra os investimentos, seguindo as regras pré-estabelecidas. Os custos normalmente são mais baixos, pois são divididos entre os cotistas. Não é garantido pelo FGC, sujeito a IR e IOF.'
          },
      3: {
          what: 'O que é a Previdência?',
          text : `Planos de investimento para receber uma renda quando você for se aposentar. Para o VGBL: o IR é calculado sobre o rendimento do valor investido e não sobre o valor total. Para o PGBL você pode abater o valor investido do cálculo de seu IR, caso você invista no máximo 12% da sua renda bruta tributável, porém o valor total investido será tributado pelo IR.`
         },
      4: {
          what: 'O que é Poupança?',
          text: 'Rendimento igual para todos os bancos, de um valor fixo de 0.5% ao mês mais a TR(Taxa Referencial), caso a Selic for superior a 8,5% ou 70% a Selic caso essa seja menor que 8,5%. Proteção do FGC e isenta de todas as taxas.'
         }
    }
    return mapTabToInfo[tab];
  }

  componentWillReceiveProps(nextProps) {
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

  handleSetSection = (section) => {
    this.setState({
      section
    })
  }

  renderFundo(fundo, idkey) {
    const description = fundo.valor_recomendado_aplicacao ? `Valor recomendado R$${numberWithCommas(fundo.valor_recomendado_aplicacao)}` : `Valor mínimo R$${numberWithCommas(fundo.valor_minimo_aplicacao)}`;
    return (
    <Box margin="small" >
      <Card
      style={{backgroundColor: 'white'}}
        label={fundo.grau_risco}
        textSize="small"
        contentPad="small"
        heading={<Heading strong={true} tag="h3">{fundo.nome_comercial}</Heading>}
        description={description}
        link={<Anchor primary icon={<FormNextLink />} onClick={() => this.props.seeMoreInvestimento(fundo[idkey])} label="Aplicar"/>}
      />
    </Box>);
  }



  renderFundoRecomendado = (fundo) => {
    const {small} = this.props;
    const description = `Valor mínimo R$${numberWithCommas(fundo.invest_min)}`;
    const rend = generateRendBruto(fundo, this.state.inputsRecomendados.prazo, parseFloat(this.state.inputsRecomendados.quantia));
    const rendaEsperada = rend[rend.length-1]-rend[0];
    const mes = `Rendimento de R$${numberWithCommas(parseInt(rendaEsperada))}`;
    return (
    <Box margin="small" >
      <Card
        style={{backgroundColor: 'white', width: small ? '' : '240px'}}
        label={<Heading strong={true} tag="h3">{fundo.nome}</Heading>}
        textSize="small"
        contentPad="small"
        heading={<Heading  tag="h4">{`risco ${fundo.risco}`}</Heading>}
        description={mes}
        link={<Anchor disabled={!fundo.canApply} primary icon={<FormNextLink />} onClick={() => this.props.seeMoreInvestimento(fundo.id, this.state.inputsRecomendados)} label="Aplicar"/>}
      />
    </Box>
    );
  }

  renderFundos = (fundos) => {
    const {small} = this.props;
    const {inputsRecomendados} = this.state;
    const recomendadosFormated = fundos.map( fundo => {
      let canApply = false;
      const matchLiq = fundo.liquidez === inputsRecomendados.liquidez;
      const matchRend = fundo.rendimento === inputsRecomendados.rendimento;
      const matchRisco = fundo.risco === inputsRecomendados.risco;
      const matchVal = fundo.invest_min <= inputsRecomendados.quantia;
      const matchPrazo = fundo.tempo_min <= inputsRecomendados.prazo;
      if( matchVal && matchLiq && matchRend && matchRisco && matchPrazo) {
        canApply = true;
      }
      return {
        ...fundo,
        canApply
      }
    })

    const fundosComponents = recomendadosFormated.map( fundo => this.renderFundoRecomendado(fundo));
    return <Columns size="small" style={{width: small ? '' : '50%'}} justify="center">
            {fundosComponents}
          </Columns>;
  }

  renderAnchorBackToRecomendations = () => {
    return (
      <Anchor primary onClick={() => this.handleSetSection(sections.RECOMENDADOS)} icon={<FormPreviousLink />} label="Recomendados" />
    );
  }

  renderHeading = (text) => {
    return <Heading align="center" tag="h2">{text}</Heading>;
  }

  getContent = () => {
    const {small} = this.props;
    const {section, inputsRecomendados} = this.state;

    return [
      <FormRecomendador small={small} inputs={inputsRecomendados} onChangeInputs={this.onChangeForm}/>,
      this.renderFundos(recomendados)
    ];
  }

  handleCloseEntenda = () => {
    this.setState({
      showEntenda: false
    })
  }

  handleOpenEntenda = () => {
    this.setState({
      showEntenda: true
    })
  }

  render() {
    const {small} = this.props;
    return (
      <Section align="center" style={{backgroundColor: '#f5f5f5'}}>
        <Heading align="center" tag="h3">Investimentos Recomendados</Heading>
        <Heading align="center" tag="h4">Modifique os parametros para encontrar um investimento</Heading>
        <Box direction="row"  pad="medium" style={{width: '100%', paddingRight: small ? '' : '0px', justifyContent:'center'}}>
          {this.getContent()}
        </Box>

        {
          this.state.showEntenda ?
          <Entenda title={this.mapTabToInfo(this.state.tab).what} text={this.mapTabToInfo(this.state.tab).text} onClose={this.handleCloseEntenda}/>
          :
          null
        }
      </Section>
    );
  }
}
