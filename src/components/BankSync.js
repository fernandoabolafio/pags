import React from 'react';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Label from 'grommet/components/Label';
import Title from 'grommet/components/Title';
import Heading from 'grommet/components/Heading';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Image from 'grommet/components/Image';
import Spinning from 'grommet/components/icons/Spinning';
import {itauUsers, banks} from '../test/mockData';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    }

  }

  handleSelectBank(bank) {
    console.log('bank', bank, ' selected');
    this.setState({
      step: 2
    })
  }

  handleSelectAccount(user) {
    console.log('user', user, 'selected');
    this.setState({
      step: 3
    })
    setTimeout( () => this.props.login(user), 3000);
  }

  getStepContent() {
    const {step} = this.state;
    const mapStepToContent = {
      [2]: <Box margin={ {top: 'large'}} justify="start">
        <Title>2 - Selecione um usuário</Title>
        <List style={{marginTop: '20px'}} selectable={true} >
          {itauUsers.map(user =>
            <ListItem responsive={false} onClick={() => this.handleSelectAccount(user)} >
              <Image style={{marginRight: '10px'}} src={user.thumb} size="thumb" />
              <Label>{user.first_name}</Label>
            </ListItem>)}
        </List>
      </Box>,
      [1]: <Box margin={{top: 'large'}} >
        <Title>1 - Selecione seu banco</Title>
        <List style={{marginTop: '20px'}} selectable={true} >
          {banks.map(bank =>
            <ListItem responsive={false} onClick={() => this.handleSelectBank(bank)} >
              <Image style={{marginRight: '10px'}} src={bank.thumb} size="thumb" />
              <Label>{bank.first_name}</Label>
            </ListItem>)}
        </List>
      </Box>,
      [3]: <Box margin={{top: 'large'}} >
        <Spinning size='large' />
      </Box>
    }
    const content = mapStepToContent[step];
    return content;
  }

  render() {
    const {step} = this.state;
    const defaultHeadings = [
      <Heading tag="h2" align="center">Login com seu banco</Heading>,
      <Heading tag="h4" align="center">Faça login com seu banco para uma melhor experiência!</Heading>
    ];
    const loadingHeadings = [
      <Heading tag="h2" align="center">Aguarde um instante...</Heading>,
      <Heading tag="h4" align="center">Estamos processando suas informações bancárias</Heading>
    ];
    return (
      <App>
        <Article>
          <Section align="center">
            <Image size="small" src="img/pags_marca.png" />
            <Box pad={{horizontal: 'small'}}>
              {step === 3 ? loadingHeadings : defaultHeadings}
            </Box>
            {this.getStepContent()}
          </Section>
        </Article>
      </App>
    );
  }
}
