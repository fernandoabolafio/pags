import React from 'react';
import Section from 'grommet/components/Section';
import Card from 'grommet/components/Card';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Label from 'grommet/components/Label';
import Value from 'grommet/components/Value';
import Button from 'grommet/components/Button';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';
import AddIcon from 'grommet/components/icons/base/Add';
import Layer from '../Layer';
import ViewObjetivoLayerContent from './ViewObjetivoLayerContent';
import AddObjetivoLayerContent from './AddObjetivoLayerContent';

export default class MainScreen extends React.Component {
  state = {};
  onSelectObjetivo = (selection) => {
    this.setState({selection});
  }
  onDeselectObjetivo = () => {
    this.setState({selection: undefined, addObjetivo: undefined});
  }
  onClickAddObjetivo = () => {
    this.setState({addObjetivo: true})
  }
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
    const {selection, addObjetivo} = this.state;
    let layer;

    if (selection >= 0) {
      layer = (
        <Layer
          onClose={this.onDeselectObjetivo}
          a11yTitle='Detalhes do objetivo'
        >
          <ViewObjetivoLayerContent />
        </Layer>
      )
    } else if (addObjetivo) {
      layer = (
        <Layer
          onClose={this.onDeselectObjetivo}
          a11yTitle='Adicionar objetivo'
        >
          <AddObjetivoLayerContent />
        </Layer>
      )
    }



    return (
      <div>
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
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Box margin={{bottom: 'small'}}>
                      <Heading tag='h2' margin='none'>
                        Seus Objetivos
                      </Heading>
                      <Label size='small'>Ordene seus objetivos, defina prioridades</Label>
                    </Box>
                    <Button onClick={this.onClickAddObjetivo}  icon={<AddIcon />} />
                  </div>

                  }
              >
                <List selectable onSelect={this.onSelectObjetivo} >
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
          </Box>
          <Box direction='row'>
            <Box direction='row' style={{backgroundColor: 'white', width: small ? '' : '65%'}} margin={small ? 'medium' : {top: 'medium', left: 'medium', right: 'small'}}>
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
            <Box direction='row' style={{backgroundColor: 'white', width: small ? '' : '35%'}} margin={small ? 'medium' : {top: 'medium', left: 'small', right: 'medium'}}>
              <Card
              >
                  Informaçao
              </Card>
            </Box>
          </Box>
        </Section>
        {layer}
      </div>
    );
  }
}
