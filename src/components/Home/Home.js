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

export default class Home extends React.Component {
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
          <Box>
            <Title>Acesse</Title>
          </Box>
          <Button href="#" label={'wowo'} />
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
