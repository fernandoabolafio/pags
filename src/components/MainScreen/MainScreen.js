import React from 'react';
import Header from '../Header';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';
import Section from 'grommet/components/Section';
import Label from 'grommet/components/Label';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import SocialShare from 'grommet/components/SocialShare';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';

export default class MainScreen extends React.Component {
  render() {
    console.log('oi')
    return (
      <Box>
        <Header activeUser={this.props.activeUser} logout={this.props.logout}/>
        <Section>
          Oi
        </Section>
        <Footer>
          <Section
            align="center"
            pad="large"
            colorIndex="neutral-1"
            full="horizontal"
          >
            <Box
              align="center"
              direction="row"
              size={{width: 'xxlarge'}}
            >
              <Box basis="1/2" pad={{horizontal: 'large'}}>
                <Label uppercase>Contate-nos</Label>
                <Box direction="row" responsive={false} pad={{between: 'medium'}}>
                  <FormField>
                    <input
                      type="email"
                    />
                  </FormField>
                  <FormField>
                    <textarea
                      type="text"
                    />
                  </FormField>
                  <Button label="COPY" onClick={() => console.log('hello')} />
                </Box>
                <Box direction="row" margin={{top: 'medium'}} responsive={false}>
                  <SocialShare type="email" link="http://www.grommet.io/docs/" />
                  <SocialShare type="twitter" link="http://www.grommet.io/docs/" />
                  <SocialShare type="facebook" link="http://www.grommet.io/docs/" />
                  <SocialShare type="linkedin" link="http://www.grommet.io/docs/" />
                </Box>
              </Box>
              <Card
                contentPad="large"
                heading="Pellentesque porta ut augue ac ultricies."
                label="Next Article"
                link={<Anchor href="http://www.grommet.io/docs/" primary={true}>
                  Learn More</Anchor>}
                separator="left"
              />
            </Box>
          </Section>
        </Footer>
      </Box>
    );
  }
}
