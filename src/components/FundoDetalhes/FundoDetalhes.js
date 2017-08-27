import React from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Spinning from 'grommet/components/icons/Spinning';

export default class FundoDetalhes extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      investInfo: false
    }
  }

  getInfo() {
    const mapTypeToIdKey = {
      cdbs: 'id_cdb',
      coes: 'id_coe',
      fundos: 'id_fundo',
      previdencias: 'id_previdencia',
      poupancas: 'id_poupanca'
    };
    const {id, type} = this.state;
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
      const {type} = this.state;
      if(type && !this.state.investInfo && nextProps.opcoesDeInvestimento[type]) {
        this.getInfo();
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
      this.getInfo();
    }else {
      this.props.fetchInvestimentos(type);
    }

  }

  renderHeading = (text) => {
    return <Heading uppercase={true} align="center" tag="h3">{text}</Heading>;
  }

  renderContent = () => {
    return (
        <Box pad="medium" style={{backgroundColor: 'white'}}>
          <Heading uppercase={true} align="center" tag="h3">{'Personalite Motherfucker'}</Heading>
          <Heading  align="center" tag="h4">{'Familia: Ações'}</Heading>
          <Box>
            <Label>Risco: Alto</Label>
            <Label>Valor mínimo da aplicação: R$10,00</Label>
          </Box>
        </Box>
    );
  }

  render() {
    return (
      <Section align="center" style={{backgroundColor: '#f5f5f5'}}>
        {
          this.state.investInfo ?
          this.renderContent()
          :
          <Spinning />
        }

      </Section>
    );
  }
}
