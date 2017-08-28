import React from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Heading from 'grommet/components/Heading';
import Columns from 'grommet/components/Columns';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Meter from 'grommet/components/Meter';
import Image from 'grommet/components/Image';
import Paragraph from 'grommet/components/Paragraph';
import Pags from '../Pags';
import TipBubble from '../TipBubble';
import acessorio00 from '../../assets/acessorio00.png'
import acessorio01 from '../../assets/acessorio01.png'
import acessorio02 from '../../assets/acessorio02.png'
import acessorio03 from '../../assets/acessorio03.png'
import acessorio04 from '../../assets/acessorio04.png'
import acessorio05 from '../../assets/acessorio05.png'
import acessorio06 from '../../assets/acessorio06.png'
import acessorio07 from '../../assets/acessorio07.png'
import acessorio08 from '../../assets/acessorio08.png'
import acessorio09 from '../../assets/acessorio09.png'
import acessorio10 from '../../assets/acessorio10.png'

export default class Inventario extends React.Component {
  acessoriosContent = (acessorios, small) => {
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
              pad='small'
              margin={small ? 'medium' : 'small'}
              onClick={acessorio.isConquered ? () => console.log('oi') : null}
              colorIndex={acessorio.isConquered ? 'light-1' : 'unknown'}
              style={acessorio.selected ? style.selected : style.notSelected[acessorio.isConquered ? 'conquered' : 'notConquered']}
            >
              <Image id={`acessorio-${index}`} size='small' src={acessorio.src}
              />
              <Label align='center' style={acessorio.selected ? {color: '#865cd6'} : {}}>{acessorio.text}</Label>
            </Box>
          )
        })}
      </div>
  )}

  rightContent = (small, nivel, title, exp) =>{
    const completo = exp === 100 ? '1' : '2'
    const text = {
      '1': {
        '1': 'Parabéns, você é um Investidor Junior! Agora já entende o básico sobre investimentos. Continue com o bom trabalho.',
        '2': 'Ao completar esse nível, você entenderá o básico sobre investimentos e saberá como aplicá-los.'
      },
      '2': {
        '1': 'Parabéns, você é um Especialista em investimentos! Agora você já está mais experiente com investimentos. Vire um mestre!',
        '2': 'Ao completar esse nível, você entenderá o bastante para gerenciar seus investimentos com sabedoria.'
      },
      '3': {
        '1': 'Parabéns, você é um Mestre em investimentos! Agora você já está brincando de investir. Não é tão difícil assim, não é mesmo?',
        '2': 'Ao completar esse nível, você terá um conhecimento profundo sobre investimentos e como eles podem ajudar o seu dinheiro a render mais.'
      },
      '4': {
        '1': 'Parabéns, você é um verdadeiro Money Maker! Agora você já é um super investidor, capaz de multiplicar suas economias',
        '2': 'Ao completar esse nível, você será um super investidor! Você entendará tudo sobre taxas, tipos de investimento e riscos'
      }
    }
    return (
      <div style={{height: '300px'}}>
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
          <Paragraph>
            {text[nivel][completo]}
          </Paragraph>
        </Box>
      </div>
    )
}

  render() {
    const {small} = this.props;
    const title = {
      '1': 'Junior',
      '2': 'Entusiasta',
      '3': 'Master',
      '4': 'Money Maker'
    }
    const acessorios = [
      { src: acessorio00, text: 'Cadastre-se', isConquered: true, selected: true },
      { src: acessorio01, text: 'Faça o tutorial', isConquered: true, selected: false },
      { src: acessorio02, text: 'Crie seu primeiro objetivo', isConquered: true, selected: false },
      { src: acessorio03, text: 'Realize seu primeiro investimento', isConquered: true, selected: false },
      { src: acessorio04, text: 'Invista por 3 meses', isConquered: true, selected: false },
      { src: acessorio05, text: 'Invista por 6 meses', isConquered: false, selected: false },
      { src: acessorio06, text: 'Invista por 1 ano', isConquered: false, selected: false },
      { src: acessorio07, text: 'Invista em ações', isConquered: false, selected: false },
      { src: acessorio08, text: 'Assista sua primeira aula', isConquered: true, selected: false },
      { src: acessorio09, text: 'Complete todas as aulas', isConquered: false, selected: false },
      { src: acessorio10, text: 'Torne-se um Money Maker', isConquered: false, selected: false }
    ]
    return (
      <Section>
        <Box direction='row'>
          <Box style={{backgroundColor: 'white', width: small ? '' : '30%'}} margin={small ? 'medium' : {left: 'medium', right: 'small'}} pad='medium'>
            <Heading tag='h2'>
              Seu Pag$
            </Heading>
            <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <Pags />
            </div>
          </Box>
          <Box style={{backgroundColor: 'white', width: small ? '' : '70%'}} margin={small ? 'medium' : {left: 'small', right: 'medium'}} pad='medium'>
              <Heading tag='h2'>
                Suas Conquistas
              </Heading>
              <Box>
                <Box direction='row' pad={{vertical: 'small', horizontal: 'small', between: 'small'}} justify='center'>
                  <TipBubble
                    small={small}
                    rightContent={this.rightContent(small, 1, title['1'], 100)}
                   />
                   <TipBubble
                     small={small}
                     rightContent={this.rightContent(small, 2, title['2'], 35)}
                    />
                </Box>
                <Box direction='row' pad={{vertical: 'none', horizontal: 'small', between: 'small'}} justify='center'>
                  <TipBubble
                    small={small}
                    rightContent={this.rightContent(small, 3, title['3'], 0)}
                   />
                   <TipBubble
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
            {this.acessoriosContent(acessorios, small)}
          </Card>
        </Box>
      </Section>
    )
  }
}
