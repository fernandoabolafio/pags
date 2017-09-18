import React from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Heading from 'grommet/components/Heading';
import Tabs from 'grommet/components/Tabs';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Tab from 'grommet/components/Tab';
import Label from 'grommet/components/Label';
import Button from 'grommet/components/Button';
import Image from 'grommet/components/Image';
import Paragraph from 'grommet/components/Paragraph';
import Pags from '../Pags';
import TipBubble from '../TipBubble';
import acessorio00 from '../../assets/acessorio00.png';
import acessorio01 from '../../assets/acessorio01.png';
import acessorio02 from '../../assets/acessorio02.png';
import acessorio03 from '../../assets/acessorio03.png';
import acessorio04 from '../../assets/acessorio04.png';
import acessorio05 from '../../assets/acessorio05.png';
import acessorio06 from '../../assets/acessorio06.png';
import acessorio07 from '../../assets/acessorio07.png';
import acessorio08 from '../../assets/acessorio08.png';
import acessorio09 from '../../assets/acessorio09.png';
import acessorio10 from '../../assets/acessorio10.png';

const acessoriosSrc = {
  [0]: acessorio00,
  [1]: acessorio01,
  [2]: acessorio02,
  [3]: acessorio03,
  [4]: acessorio04,
  [5]: acessorio05,
  [6]: acessorio06,
  [7]: acessorio07,
  [8]: acessorio08,
  [9]: acessorio09,
  [10]: acessorio10
}

export default class Inventario extends React.Component {
  state = {
    tabActiveIndex: 0
  }

  handleTabChange = (index) => this.setState({ tabActiveIndex: index });

  handleClick = () => this.setState({ tabActiveIndex:1 });

  acessoriosContent = (acessorios, small, changeAcessorio) => {
    const style = {
      notSelected: {
        conquered: {
          border: '2px solid #a8a8a8',
          borderRadius: '5px',
          width: '250px'
        },
        notConquered: {
          opacity: '0.6',
          border: '2px solid #a8a8a8',
          borderRadius: '5px',
          width: '250px'
        }
      },
      'selected': {
        border: '2px solid #C67C00',
        borderRadius: '5px',
        width: '250px'
      }
    }
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '24px'}}>
        {acessorios.map((acessorio, index) => {
          return (
            <Box
              align='center'
              pad={{vertical: 'small', horizontal: 'medium'}}
              margin={small ? 'medium' : 'small'}
              onClick={acessorio.isConquered ? () => changeAcessorio(acessorio.id) : null}
              colorIndex={acessorio.isConquered ? 'light-1' : 'unknown'}
              style={acessorio.selected ? style.selected : style.notSelected[acessorio.isConquered ? 'conquered' : 'notConquered']}
            >
              <Image id={`acessorio-${index}`} size='small' src={acessoriosSrc[acessorio.id]} style={{maxWidth: '165px', maxHeight: '240px'}}
              />
            </Box>
          )
        })}
      </div>
  )}

  render() {
    const {small, pagsAcessorios, changeAcessorio} = this.props;
    const active = pagsAcessorios ? pagsAcessorios.filter(acessorio => acessorio.selected) : null;
    let activeAcessorio;
    if (active && active[0] !== undefined) {
      activeAcessorio = active[0].id;
    }
    const missoes = [
      {
        acessorio: 0,
        nome: 'Tutorial'
      },
      {
        acessorio: 1,
        nome: 'Liquidez'
      },
      {
        acessorio: 2,
        nome: 'Inflação'
      },
      {
        acessorio: 3,
        nome: 'Risco'
      },
      {
        acessorio: 4,
        nome: 'Tesouro Direto'
      },
      {
        acessorio: 5,
        nome: 'CDB'
      }
    ];
    return (
      <Box style={{flexShrink: '0'}} direction='row'>
        <Box style={{backgroundColor: 'white', width: small ? '' : '30%', flexShrink: '0', minHeight: '360px'}} pad='medium' margin={{top: 'medium', left: 'medium', right: 'small', bottom: 'medium'}}>
            <Heading tag='h2'>
              Meu Pag$
            </Heading>
            <Box
              direction={'column'}
              align='center'
              justify='center'
              pad={{vertical: 'medium', between: 'small'}}
              responsive={false} >

                <TipBubble
                  style={{maxWidth: '292px', minHeight: '200px'}}
                  small={small}
                  caret >
                    <Box pad={{between: 'medium'}}>
                      <Paragraph size='large' margin='none'>
                        Eaí, beleza? Você
                        já ganhou R$5,00
                      </Paragraph>
                      <Paragraph size='large' margin='none'>
                        Não é ótimo
                        ganhar um
                        dinheirinho só
                        investindo?
                      </Paragraph>
                      <Button primary label='Faça Missões' onClick={() => {this.handleClick(); console.log('oi')}}/>
                      <Paragraph size='large' margin='none'>
                        Para aumentar sua rentabilidade
                      </Paragraph>
                    </Box>
                </TipBubble>

              <Pags size={small ? 'small' : 'medium'} src={acessoriosSrc[activeAcessorio]} />

            </Box>
          </Box>
        <Box direction='column'
          style={{backgroundColor: 'white', width: small ? '' : '70%'}}
          pad='medium'
          margin={small ?
            'medium' :
            {top: 'medium', left: 'small', right: 'medium', bottom: 'medium'}}>
            <Tabs responsive={false} style={{marginBottom: '0'}} onActive={this.handleTabChange} activeIndex={this.state.tabActiveIndex}>
              <Tab title='Conquistas'>
                  {this.acessoriosContent(pagsAcessorios, small, changeAcessorio)}
              </Tab>
              <Tab title='Missões'>
                <List style={{marginTop: '24px'}}>
                  {
                    missoes.map(
                      (missao, index) =>
                        <ListItem
                          responsive={false}
                          pad={{between: 'medium', vertical: 'small', horizontal: 'large'}}
                          style={{cursor: 'pointer'}}
                          >
                          <Image id={`missao-${index}`} style={{width: '64px', height: '96px'}} src={acessoriosSrc[missao.acessorio]} />
                          <Heading tag='h3' margin='none'>{missao.nome}</Heading>
                        </ListItem>
                    )
                  }
                </List>
              </Tab>
            </Tabs>
        </Box>
      </Box>
    )
  }
}
