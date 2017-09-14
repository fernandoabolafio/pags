import React from 'react';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Title from 'grommet/components/Title';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

import {colors} from '../../constants/styles';
import UserSelectionBox from './UserSelectionBox';
import LoadingBox from './LoadingBox';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    }

  }

  handleSelectAccount = (user) => {
    this.setState({
      step: 2
    })
    setTimeout( () => this.props.login(user), 3000);
  }

  getStepContent = () => {
    const {step} = this.state;
    const mapStepToContent = {
      1: <UserSelectionBox handleClick={ this.handleSelectAccount } />,
      2: <LoadingBox />,
    }
    const content = mapStepToContent[step];
    return content;
  }

  render() {
    const sectionStyle = {
      backgroundColor: colors.darkBlue,
      justifyContent: 'center',
    };

    const wrapperStyle = {
      width: '100%',
      display: 'flex',
      flexFlow: 'column wrap',
      alignItems: 'center',
      alignContent: 'center',
    };

    const boxStyle = {
      backgroundColor: colors.lightGray,
      width: '80%',
      minWidth: '300px',
      maxWidth: '500px',
    };

    const logoStyle = {
      width: '290px',
      marginBottom: '50px',
    };

    return (
        <Article>
          <Section full={true} align="center" style={sectionStyle}>
            <div style={wrapperStyle}>
              <Image style={logoStyle} src="img/logo_title.svg" />
              <Box style={boxStyle} pad="large" align="center" flex="grow">
                <Title>Entre</Title>
                <Paragraph margin="small">Escolha seu usuário</Paragraph>
                {this.getStepContent()}
              </Box>
            </div>
          </Section>
        </Article>
    );
  }
}
