import React from 'react';
import Button from 'grommet/components/Button';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import Paragraph from 'grommet/components/Paragraph';
import Sidebar from 'grommet/components/Sidebar';
import Quote from 'grommet/components/Quote';
import BankSync from '../../containers/BankSync';

export default class Home extends React.Component {
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

  render() {
    return (
      <Split flex='left' separator={true}>
        <Article>
          <Section
            full={true}
            colorIndex='brand'
            texture='url(img/splash.png)'
            pad='large'
            justify='center'
            align='center'
          >
            <Heading tag='h1' strong={true}>Insights</Heading>
            <Paragraph align='center' size='large'>
              Raparua é doce mas não é mole não
            </Paragraph>
          </Section>
        </Article>

        <Sidebar justify='between' align='center' pad='none' size='large'>
          <BankSync />
          <Footer
            direction='row'
            size='small'
            pad={{ horizontal: 'medium', vertical: 'small' }}
          >
            <span className='secondary'>&copy; 2017 Toryca SA</span>
          </Footer>
        </Sidebar>

      </Split>
    );
  }
}
