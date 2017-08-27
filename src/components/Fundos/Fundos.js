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
import SearchInput from 'grommet/components/SearchInput';
import Spinning from 'grommet/components/icons/Spinning';

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


export default class Fundos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searching: false
    }
  }

  componentDidMount() {
    this.props.fetchFundosRecomendados();
  }

  handleToggleSearchMode = () => {
    const {searching} = this.state;
    this.setState({
      searching: !searching
    })
  }

  renderFundo(fundo) {
    return (
    <Box margin="small" >
      <Card
      style={{backgroundColor: 'white'}}
        headingStrong={false}
        textSize="small"
        contentPad="small"
        heading={fundo.nome_comercial}
        description={`Valor recomendado R$${fundo.valor_recomendado_aplicacao}`}
        link={<Anchor primary icon={<FormNextLink />} label="Aplicar"/>}
      />
    </Box>);
  }

  renderFundos = () => {
    const fundos = this.props.fundosRecomendados.map( fundo => this.renderFundo(fundo));
    return <Columns size="small" justify="center">
            {fundos}
          </Columns>
  }

  render() {
    const notSearchingContent = [
      <Anchor primary onClick={this.handleToggleSearchMode} icon={<Search />} label="Buscar Investimento" />,
      <Heading tag="h2">Investimentos Recomendados</Heading>,
        (this.props.fundosRecomendados && !this.state.searching ?
        this.renderFundos()
        :
        <Spinning size="large" />)
    ];
    const searchingContent = [
      <Anchor primary onClick={this.handleToggleSearchMode} icon={<FormPreviousLink />} label="Recomendados" />,
      <Heading tag="h2" >Buscar Investimentos</Heading>,
      <SearchInput />
    ]
    return (
      <Section align="center">
        {
          this.state.searching ?
            searchingContent
            :
            notSearchingContent
        }
      </Section>
    );
  }
}
