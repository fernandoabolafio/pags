import React from 'react';
import ReactDOM from 'react-dom';
import Section from 'grommet/components/Section';
import Card from 'grommet/components/Card';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Legend from 'grommet/components/Legend';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Label from 'grommet/components/Label';
import Value from 'grommet/components/Value';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';
import AddIcon from 'grommet/components/icons/base/Add';

export default class MainScreen extends React.Component {
  render() {
    let cpuData = [
      {value: 510, label: 'CDB', colorIndex: 'accent-1',
        onClick: () => console.log('CDB')},
      {value: 42, label: 'LCI', colorIndex: 'accent-2',
        onClick: () => console.log('LCI')},
      {value: 55, label: 'LCA', colorIndex: 'neutral-2',
        onClick: () => console.log('LCA')},
      {value: 55, label: 'Fundo', colorIndex: 'neutral-3',
        onClick: () => console.log('Fundo')}
    ];
    const {small} = this.props;
    return (
      <Section>
        <Box direction='row'>
          <Box style={{backgroundColor: 'white', width: small ? '' : '35%'}} margin={small ? 'medium' : {left: 'medium', right: 'small'}}>
            <Card
            >
              Info gamification
            </Card>
          </Box>
          <Box style={{backgroundColor: 'white', width: small ? '' : '65%'}}  margin={small ? 'medium' : {left: 'small', right: 'medium'}}>
            <Card
              style={{width:'100%'}}
              heading={
                  <Heading tag='h2'>
                    Seus Investimentos
                  </Heading>
                }
            >
              <Box align='center'>
                <AnnotatedMeter type="circle" legend={true} units="R$"
                  size={small ? 'medium' : 'medium'}  series={cpuData} />
              </Box>
            </Card>
          </Box>
        </Box>
        <Box direction='row'>
          <Box direction='row' style={{backgroundColor: 'white', width: small ? '' : '75%'}} margin={small ? 'medium' : {top: 'medium', left: 'medium', right: 'small'}}>
            <Card
              style={{width:'100%'}}
              heading={
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <Heading tag='h2'>
                    Seus Objetivos
                  </Heading>
                  <Button onClick={() => console.log('iha')}  icon={<AddIcon />} />
                </div>

                }
            >
              <List selectable>
                <ListItem justify="between" responsive={false}>
                  <Label truncate>Objetivo ;</Label>
                  <Box margin={{left: 'small'}}>
                  <Value value={'50'}
                    units='%'
                    align='start' />
                  <Meter value='50'/>
                  </Box>
                </ListItem>
                <ListItem justify="between" responsive={false}>
                  <Label truncate>Objetivo 1</Label>
                  <Box>
                  <Value value={'50'}
                    units='%'
                    align='start' />
                  <Meter value='50'/>
                  </Box>
                </ListItem>
                <ListItem justify="between" responsive={false}>
                  <Label truncate>Objetivo 1</Label>
                  <Box>
                  <Value value={'50'}
                    units='%'
                    align='start' />
                  <Meter value='50'/>
                  </Box>
                </ListItem>
                <ListItem justify="between" responsive={false}>
                  <Label truncate>Objetivo 1</Label>
                  <Box>
                  <Value value={'50'}
                    units='%'
                    align='start' />
                  <Meter value='50'/>
                  </Box>
                </ListItem>
              </List>
            </Card>
          </Box>
          <Box direction='row' style={{backgroundColor: 'white', width: small ? '' : '25%'}} margin={small ? 'medium' : {top: 'medium', left: 'small', right: 'medium'}}>
            <Card
            >
                Informaçao
            </Card>
          </Box>
        </Box>
      </Section>
    );
  }
}
