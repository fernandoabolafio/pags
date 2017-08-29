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
    const mapTabToInvestimento = {
      [0]: 'cdbs',
      [1]: 'coes',
      [2]: 'fundos',
      [3]: 'previdencias',
      [4]: 'poupancas'
    }
    const mapTypeToIdKey = {
      cdbs: 'id_cdb',
      coes: 'id_coe',
      fundos: 'id_fundo',
      previdencias: 'id_previdencia',
      poupancas: 'id_poupanca'
    };
    this.state = {
      mapTabToInvestimento,
      mapTypeToIdKey,
      section: sections.RECOMENDADOS,
      tab: 0,
      loadingCarteira: false,
      inputs: {
        carteira: {
          valor: 100,
          prazo: 12
        }
      }
    }
  }

  componentDidMount() {
    this.props.fetchFundosRecomendados();
    this.props.fetchInvestimentos('cdbs');
    this.props.fetchInvestimentos('coes');
    this.props.fetchInvestimentos('fundos');
    this.props.fetchInvestimentos('previdencias');
    this.props.fetchInvestimentos('poupancas');
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
    if(!this.props.carteiraRecomendada && nextProps.carteiraRecomendada ) {
      this.setState({
        loadingCarteira: false
      })
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

  handleToggleSearchMode = () => {
    const {searching} = this.state;
    this.setState({
      searching: !searching
    })
  }

  handleTabChange = (tab) => {

    const {mapTabToInvestimento}  = this.state;

    this.setState({
      tab: tab
    })

    const type = mapTabToInvestimento[tab];

    if(!this.props.opcoesDeInvestimento[type]) {
      this.props.fetchInvestimentos(type);
    }
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

  renderFundos = (fundos, idkey) => {
    const fundosComponents = fundos.map( fundo => this.renderFundo(fundo, idkey));
    return <Columns size="small" justify="center">
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

  handleSearchCarteira = () => {
    const {valor, prazo} = this.state.inputs.carteira;
    this.setState({
      loadingCarteira: true
    })
    this.props.clearCarteiraRecomendada();
    this.props.fetchCarteiraRecomendada(valor, prazo);
  }

  renderChartLabel = () => {
    const {highLightedProduct} = this.state;
    return <Label>{highLightedProduct.nome_comercial}</Label>;
  }

  renderCarteiraRecomendada = () => {
    const {carteiraRecomendada} = this.props;
    const {
            produtos_recomendados:produtosRecomendados,
            perfil_investidor: perfil_investidor
          } = carteiraRecomendada;
    const items = produtosRecomendados.map( produto =>
      (<ListItem justify="between">
        <Box style={{maxWidth: '100px'}}>
          <Label>{produto.nome_comercial}</Label>
        </Box>
        <Box>
        <Value value={produto.percentual_investimento_sugerido}
          units='%'
          align='start' />
        <Meter value={produto.percentual_investimento_sugerido}/>
        </Box>
        <Box>
          <Anchor primary icon={<FormNextLink />} onClick={() => this.props.seeMoreInvestimento(produto.codigo_produto)} label="Aplicar"/>
        </Box>
      </ListItem>)
    );
    // return <Distribution series={series} size="large" units={'%'} />
    // return <SunBurst size="large" onActive={this.handleHoverPiece}  data={series}/>
    return <Box size="large"><List style={{backgroundColor: 'white', marginTop: '20px', width:'100%'}}>{items}</List></Box>
  }

  getSearchResults = () => {
    const {opcoesDeInvestimento} = this.props;
    const {mapTabToInvestimento, tab, mapTypeToIdKey} = this.state;
    const type = mapTabToInvestimento[tab];
    const fundos = this.props.opcoesDeInvestimento[type];
    const idKey = mapTypeToIdKey[type];
    return (
      fundos ?
      this.renderFundos(fundos, idKey)
      :
      <Spinning size="large" />
    )

  }

  getContent = () => {
    const {small} = this.props;
    const {section} = this.state;
    const mapSectionToContent = {
      [sections.RECOMENDADOS]: [
        <Box direction="row" margin="small">
          <Anchor primary onClick={() => this.handleSetSection(sections.SEARCH)} icon={<Search />} label="Buscar Investimento" />
          <span style={{padding:"0 10px"}}>{small ? "" : "|"}</span>
          <Anchor primary onClick={() => this.handleSetSection(sections.CARTEIRA)} icon={<Catalog />} label="Carteira de investimento" />
        </Box>,
        this.renderHeading('Investimentos Recomendados'),
          (this.props.fundosRecomendados && !this.state.searching ?
          this.renderFundos(this.props.fundosRecomendados, 'codigo_produto')
          :
          <Spinning size="large" />)
      ],
      [sections.SEARCH]: [
        this.renderAnchorBackToRecomendations(),
        this.renderHeading('Buscar Investimentos'),
        <Tabs onActive={this.handleTabChange} responsive={false} activeIndex={this.state.tab}>
          <Tab title="CDB" />
          <Tab title="COE" />
          <Tab title="Fundos" />
          <Tab title="Previdência" />
          <Tab title="Poupança" />
        </Tabs>,
        <Anchor  onClick={this.handleOpenEntenda} icon={<CircleQuestion />} label={this.mapTabToInfo(this.state.tab).what} />,
        this.getSearchResults()
      ],
      [sections.CARTEIRA]: [
        this.renderAnchorBackToRecomendations(),
        this.renderHeading('Carteira de Investimentos'),
        <Box align="center" style={{backgroundColor:"white"}} pad="medium">
          <Label>Valor da aplicação (em reais)</Label>
          <NumberInput  min={10}  onChange={(e) => this.setValue(e.target.value, 'carteira', 'valor')} step={100} defaultValue={100} />
          <Label>Prazo de Investimento (em meses)</Label>
          <NumberInput min={1} onChange={(e) => this.setValue(e.target.value, 'carteira', 'prazo')} step={1} defaultValue={12} />
          <Button onClick={this.handleSearchCarteira} style={{marginTop: '10px'}} label="Buscar" />
        </Box>,
        (
          this.state.loadingCarteira ? <Spinning size="large" style={{marginTop: '20px'}} /> : null
        ),
        (
          this.props.carteiraRecomendada && !this.state.loadingCarteira ? this.renderCarteiraRecomendada() : null
        )
      ]
    }
    const content = mapSectionToContent[section];
    return content;

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

    return (
      <Section align="center" style={{backgroundColor: '#f5f5f5'}}>
        {this.getContent()}
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
