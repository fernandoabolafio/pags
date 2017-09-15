import React from 'react';
import Button from 'grommet/components/Button';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import Paragraph from 'grommet/components/Paragraph';
import Sidebar from 'grommet/components/Sidebar';
import Quote from 'grommet/components/Quote';
import Image from 'grommet/components/Image';
import BankSync from '../../containers/BankSync';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

import Footer from '../Footer';
import HomeBanner from './HomeBanner';
import HomeAdvantages from './HomeAdvantages';
import HomeReasons from './HomeReasons';
import HomeAdvertise from './HomeAdvertise';

import {
  sectionStyle,
  colors,
  sectionTitleStyle,
} from '../../constants/styles';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chapter: 0
    }
  }

  componentDidMount() {
    this.getFacebookButton();
  }

  getFacebookButton() {
    (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.10&appId=112725816063664";
    fjs.parentNode.insertBefore(js, fjs);
  } (document, 'script', 'facebook-jssdk'));
  }

  handleFbLogin(e) {
    e.preventDefault();
    console.log('facebook Login');
  }

  setChapter = (chapter) => {
    this.setState({
      chapter
    })
  }

  render() {
    return (
      <Article scrollStep={true}yar selected={this.state.chapter} onSelect={(chapter) => this.setChapter(chapter)}>
          <Header colorIndex="brand"  style={{backgroundColor: '#102027', paddingLeft: "40px", paddingRight: "40px"}}>
            <Image style={{width:'45.8px', height: '42.1px'}} src="img/logo.png" />
            <Menu
              inline
              direction='row'
              style={{border: '3px solid transparent'}}
             >
               <Anchor onClick={() => this.setChapter(2)} >Como funciona</Anchor>
               <Anchor onClick={() => this.setChapter(3)} >Vantagens</Anchor>
               <Anchor onClick={() => this.setChapter(4)} >Contato</Anchor>
            </Menu>
            <Box flex="grow" justify="end" direction="row">
              <Button onClick={this.props.goToLogin}  style={{backgroundColor:'#FFAB00', color: 'black', borderColor: '#FFAB00'}} primary label="Entrar" />
            </Box>
          </Header>
          <HomeBanner />
          <HomeReasons />
          <HomeAdvertise />
          <Section
            style={{ ...sectionStyle, backgroundColor: colors.lightGray }}
            direction="column"
          >
            <Box align="center">
              <Heading tag="h3" style={ sectionTitleStyle }>
                Como funciona
              </Heading>
            </Box>
            <Box direction="row" justify="center">
              <Box pad="medium" align="center">
                <Heading style={{fontSize: '22px'}} strong={true}>1. Cadastre-se</Heading>
                <Image size="small" src={'img/landing-section2-img1.png'} />
                <Label style={{maxWidth:'200px'}} align="center">Coloque os dados do banco e crie seu perfil</Label>
              </Box>
              <Box pad="medium" align="center">
                <Heading style={{fontSize: '22px'}} strong={true}>2. Liste Sonhos</Heading>
                <Image size="small" src={'img/landing-section2-img2.png'} />
                <Label style={{maxWidth:'200px'}} align="center">Determine suas motivações e o valor delas</Label>
              </Box>
              <Box pad="medium" align="center">
                <Heading style={{fontSize: '22px'}} strong={true}>3. Receba sugestões</Heading>
                <Image size="small" src={'img/landing-section2-img3.png'} />
                <Label style={{maxWidth:'200px'}} align="center">Receba sugestões dos melhores investimos</Label>
              </Box>
              <Box pad="medium" align="center">
                <Heading style={{fontSize: '22px'}} strong={true}>4. Invista</Heading>
                <Image size="small" src={'img/landing-section2-img4.png'} />
                <Label style={{maxWidth:'200px'}} align="center">Defina investimentos mensais automáticos</Label>
              </Box>
            </Box>
            <Box align="center">
              <Image size="large" src={'img/landing-section2-img5.png'} />
            </Box>
          </Section>
          <HomeAdvantages />
          <Section
            justify="center"
            direction="row"
            align="center"
            style={{ ...sectionStyle, backgroundColor: colors.lightGray }}
          >
              <Box>
                <Image size="small" src={'img/landing-section4-img1.png'} />
              </Box>
              <Box align="center" style={{maxWidth:'400px'}}>
                <Heading  strong={true}>PAG$ é GRÁTI$</Heading>
                <Label align="center">Você tem acesso total as funcionalidades e só paga as taxas administrativas dos investimentos que escolher</Label>
              </Box>
          </Section>
          <Footer />
        </Article>
    );
  }
}
