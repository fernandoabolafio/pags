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
    this.state = {
      mapTabToInvestimento,
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

  renderFundo(fundo) {
    const description = fundo.valor_recomendado_aplicacao ? `Valor recomendado R$${fundo.valor_recomendado_aplicacao}` : `Valor mínimo R$${fundo.valor_minimo_aplicacao}`;
    return (
    <Box margin="small" >
      <Card
      style={{backgroundColor: 'white'}}
        headingStrong={false}
        textSize="small"
        contentPad="small"
        heading={fundo.nome_comercial}
        description={description}
        link={<Anchor primary icon={<FormNextLink />} label="Aplicar"/>}
      />
    </Box>);
  }

  renderFundos = (fundos) => {
    const fundosComponents = fundos.map( fundo => this.renderFundo(fundo));
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
        <Label>{produto.nome_comercial}</Label>
        <Box>
        <Value value={produto.percentual_investimento_sugerido}
          units='%'
          align='start' />
        <Meter value={produto.percentual_investimento_sugerido}/>
        </Box>
      </ListItem>)
    );
    // return <Distribution series={series} size="large" units={'%'} />
    // return <SunBurst size="large" onActive={this.handleHoverPiece}  data={series}/>
    return <List style={{width: "80%"}}>{items}</List>
  }

  getSearchResults = () => {
    const {opcoesDeInvestimento} = this.props;
    const {mapTabToInvestimento, tab} = this.state;
    const type = mapTabToInvestimento[tab];
    const fundos = this.props.opcoesDeInvestimento[type];
    return (
      fundos ?
      this.renderFundos(fundos)
      :
      <Spinning size="large" />
    )

  }

  getContent = () => {
    const {section} = this.state;
    const mapSectionToContent = {
      [sections.RECOMENDADOS]: [
        <Box direction="row" margin="small">
          <Anchor primary onClick={() => this.handleSetSection(sections.SEARCH)} icon={<Search />} label="Buscar Investimento" />
          <span style={{padding:"0 10px"}}>|</span>
          <Anchor primary onClick={() => this.handleSetSection(sections.CARTEIRA)} icon={<Catalog />} label="Carteira de investimento" />
        </Box>,
        this.renderHeading('Investimentos Recomendados'),
          (this.props.fundosRecomendados && !this.state.searching ?
          this.renderFundos(this.props.fundosRecomendados)
          :
          <Spinning size="large" />)
      ],
      [sections.SEARCH]: [
        this.renderAnchorBackToRecomendations(),
        this.renderHeading('Buscar Investimentos'),
        <Tabs onActive={this.handleTabChange} activeIndex={this.state.tab}>
          <Tab title="CDB" />
          <Tab title="COE" />
          <Tab title="Fundos" />
          <Tab title="Previdência" />
          <Tab title="Poupança" />
        </Tabs>,
        this.getSearchResults()
      ],
      [sections.CARTEIRA]: [
        this.renderAnchorBackToRecomendations(),
        this.renderHeading('Carteira de Investimentos'),
        <Box align="center">
          <Label>Valor da aplicação (em reais)</Label>
          <NumberInput  min={10}  onChange={(e) => this.setValue(e.target.value, 'carteira', 'valor')} step={100} defaultValue={100} />
          <Label>Prazo de Investimento (em meses)</Label>
          <NumberInput min={1} onChange={(e) => this.setValue(e.target.value, 'carteira', 'prazo')} step={1} defaultValue={12} />
          <Button onClick={this.handleSearchCarteira} style={{marginTop: '10px'}} label="Buscar" />
        </Box>,
        (
          this.state.loadingCarteira ? <Spinning size="large" /> : null
        ),
        (
          this.props.carteiraRecomendada && !this.state.loadingCarteira ? this.renderCarteiraRecomendada() : null
        )
      ]
    }
    const content = mapSectionToContent[section];
    return content;

  }

  render() {

    return (
      <Section align="center" style={{backgroundColor: '#f5f5f5'}}>
        {this.getContent()}
      </Section>
    );
  }
}
