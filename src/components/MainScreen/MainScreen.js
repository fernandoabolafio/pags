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
import Image from 'grommet/components/Image';
import Button from 'grommet/components/Button';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';
import AddIcon from 'grommet/components/icons/base/Add';
import Layer from '../Layer';
import ViewObjetivoLayerContent from './ViewObjetivoLayerContent';
import AddObjetivoLayerContent from './AddObjetivoLayerContent';
import Tip from 'grommet/components/Tip';
import Objetivos from './Objetivos'
import {arrayMove} from 'react-sortable-hoc';
import pagsWelcome from './assets/pags_welcome.png';
import './MainScreen.css'
import CaretDownIcon from 'grommet/components/icons/base/CaretDown';


export default class MainScreen extends React.Component {
  state = {
    objetivos: [
      {
        nome: 'Comprar casa',
        criado: '10/10/2016',
        conclusaoEstimada: '10/10/2017',
        valor: 200000,
        acumulado: 0.3,
        descricao: 'Comprar casa afim de dar mais estabilidade para minha familia',
      },
      {
        nome: 'Comprar carro',
        criado: '10/10/2016',
        conclusaoEstimada: '05/09/2017',
        valor: 20000,
        acumulado: 0.5,
        descricao: 'Comprar carro para ir trabalhar',
      },
      {
        nome: 'Aposentadoria',
        criado: '10/10/2016',
        conclusaoEstimada: '10/10/2051',
        valor: 2000000,
        acumulado: 0.05,
        descricao: 'Juntar 2 milhoes para aposentar',
      },
      {
        nome: 'Viajar',
        criado: '30/07/2017',
        conclusaoEstimada: '30/11/2017',
        valor: 5000,
        acumulado: 0,
        descricao: 'Tour pela Europa',
      },
      {
        nome: 'Tunnar o carro',
        criado: '30/07/2017',
        conclusaoEstimada: '30/09/2017',
        acumulado: 1,
        valor: 10000
      }
    ]
  };
  onSelectObjetivo = (selection) => {
    this.setState({selection});
  }
  onDeselectObjetivo = () => {
    this.setState({selection: undefined, addObjetivo: undefined});
  }
  onClickAddObjetivo = () => {
    this.setState({addObjetivo: true})
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      objetivos: arrayMove(this.state.objetivos, oldIndex, newIndex),
    });
  };
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
    const {selection, addObjetivo, objetivos} = this.state;
    let layer;

    if (selection >= 0) {
      layer = (
        <Layer
          onClose={this.onDeselectObjetivo}
          a11yTitle='Detalhes do objetivo'
        >
          <ViewObjetivoLayerContent objetivo={objetivos[selection]}/>
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
                align='center'
              >
                <Box style={{backgroundColor: 'black', borderRadius: '10px', color: '#F5FAF6'}} pad='medium'>
                  ABCDEF
                  evwv
                  console.warn(v
                  console.warnvefefefefefefefefef
                  efefefefefefefefefefef
                  <div className='caret' />
                </Box>
                <Box align='center'>
                  <Image id='pags' size='small' src={pagsWelcome} />
                </Box>
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
                <Objetivos onSelectObjetivo={this.onSelectObjetivo} onSortEnd={this.onSortEnd} objetivos={objetivos} />
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
