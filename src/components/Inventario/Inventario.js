import React from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Heading from 'grommet/components/Heading';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Meter from 'grommet/components/Meter';
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
        border: '2px solid #865cd6',
        borderRadius: '5px',
        width: '250px'
      }
    }
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
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
              <Label align='center' margin={{bottom: '0'}} style={acessorio.selected ? {color: '#865cd6'} : {}}>{acessorio.text}</Label>
            </Box>
          )
        })}
      </div>
  )}

  rightContent = (small, nivel, title, exp) => {
    const completo = exp === 100 ? '1' : '2'
    const text = {
      '1': {
        '1': 'Parabéns, você é um Investidor Junior! Continue com o bom trabalho.',
        '2': 'Ao completar esse nível você saberá o básico sobre investimentos e como aplicar.'
      },
      '2': {
        '1': 'Parabéns, você é um Especialista em investimentos!',
        '2': 'Ao completar esse nível você entenderá o bastante para gerenciar seus investimentos.'
      },
      '3': {
        '1': 'Parabéns, você é um Mestre em investimentos!',
        '2': 'Ao completar esse nível você terá uma boa noção de como fazer o seu dinheiro render.'
      },
      '4': {
        '1': 'Parabéns, você é um verdadeiro Money Maker! Não é tão difícil assim investir, né?',
        '2': 'Ao completar esse nível você entenderá tudo sobre investimentos.'
      }
    }
    return (
      <div style={ small ? {} : {height: '300px'}}>
        <div>
          <Label
            size='small'>
            Nivel {nivel}
          </Label>
          <Heading
            tag='h3'
            style={{color: '#ffd602'}}
          >
            {title}
          </Heading>
        </div>
        <Meter size='small'
          colorIndex='warning'
          type='bar'
          label={
            <Value colorIndex='warning' value={exp}
            units='%'
            size='small' />
          }
          value={exp}
        />
        <Box wrap pad={{vertical: 'small'}}>
          <Paragraph margin='none'>
            {text[nivel][completo]}
          </Paragraph>
        </Box>
      </div>
    )
}

  render() {
    const {small, pagsAcessorios, changeAcessorio} = this.props;
    const active = pagsAcessorios ? pagsAcessorios.filter(acessorio => acessorio.selected) : null;
    let activeAcessorio;
    if (active[0] !== undefined) {
      activeAcessorio = active[0].id;
    }
    const title = {
      '1': 'Junior',
      '2': 'Entusiasta',
      '3': 'Master',
      '4': 'Money Maker'
    }
    return (
      <Section style={{flexShrink: '0'}}>
        <Box direction='row' style={{flexShrink:'0'}}>
          <Box style={{backgroundColor: 'white', width: small ? '' : '30%', flexShrink: '0', minHeight: '360px'}} margin={small ? 'medium' : {left: 'medium', right: 'small'}} pad='medium'>
            <Heading tag='h2'>
              Seu Pag$
            </Heading>
            <Box style={{height: "100%"}} justify="center">
              <Pags src={acessoriosSrc[activeAcessorio]} size={small ? 'small' : 'medium'} />
            </Box>
          </Box>
          <Box style={{backgroundColor: 'white', width: small ? '' : '70%'}} margin={small ? 'medium' : {left: 'small', right: 'medium'}} pad='medium'>
              <Heading tag='h2'>
                Suas Conquistas
              </Heading>
              <Box>
                <Box direction='row' pad={{vertical: 'small', horizontal: 'small', between: 'small'}} justify='center'>
                  <TipBubble
                    style={small ? {} : {width: '50%'}}
                    small={small}
                    rightContent={this.rightContent(small, 1, title['1'], 100)}
                   />
                   <TipBubble
                     style={small ? {} : {width: '50%'}}
                     small={small}
                     rightContent={this.rightContent(small, 2, title['2'], 35)}
                    />
                </Box>
                <Box direction='row' pad={{vertical: 'none', horizontal: 'small', between: 'small'}} justify='center'>
                  <TipBubble
                    style={small ? {} : {width: '50%'}}
                    small={small}
                    rightContent={this.rightContent(small, 3, title['3'], 0)}
                   />
                   <TipBubble
                     style={small ? {} : {width: '50%'}}
                     small={small}
                     rightContent={this.rightContent(small, 4, title['4'], 0)}
                    />
                 </Box>
              </Box>
          </Box>
        </Box>
        <Box direction='row' style={{backgroundColor: 'white'}} margin='medium'>
          <Card justify='center'
            full='horizontal'
            heading={
              <Heading tag='h2' margin='none'>
                Acessórios
              </Heading>
            }>
            {this.acessoriosContent(pagsAcessorios, small, changeAcessorio)}
          </Card>
        </Box>
      </Section>
    )
  }
}
