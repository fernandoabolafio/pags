import React from 'react';
import Box from 'grommet/components/Box';
import Article from 'grommet/components/Article';
import Image from 'grommet/components/Image';
import Button from 'grommet/components/Button';
import FormField from 'grommet/components/FormField';
import Paragraph from 'grommet/components/Paragraph';
import Select from 'grommet/components/Select';

export default class Inflacao extends React.Component {
  state = {
    step: 1,
    moedasGastas: 'Uma',
    resposta: undefined
  }

  prevStep = () => this.setState({step: this.state.step-1});
  nextStep = () => this.setState({step: this.state.step+1});
  nextNextStep = () => this.setState({step: this.state.step+2});
  selectMoedas = (value) => this.setState({moedasGastas: value});
  resposta = (value) => this.setState({resposta: value});

  render() {
    const {small} = this.props;
    const coinsStringToInt = {
      'Uma': 1,
      'Duas': 2,
      'Três': 3
    }

    const coinsToFlagCompletoInvestido = {
      'Uma': 'img/missoes/inflacao/FLAG_COMPLETO3.svg',
      'Duas': 'img/missoes/inflacao/FLAG_COMPLETO2.svg',
      'Três': 'img/missoes/inflacao/FLAG_COMPLETO0.svg',
    }

    const coinsToPagsCompletoInvestido = {
      'Uma' : 'img/missoes/inflacao/pags_somente/08_1.svg',
      'Duas' : 'img/missoes/inflacao/pags_somente/08_2.svg',
      'Três' : 'img/missoes/inflacao/pags_somente/08_3.svg'
    }

    const coinsToFlagEscolhido = {
      'Uma': 'img/missoes/inflacao/FLAG_ESCOLHIDO1.svg',
      'Duas': 'img/missoes/inflacao/FLAG_ESCOLHIDO2.svg',
      'Três': 'img/missoes/inflacao/FLAG_ESCOLHIDO3.svg'
    }
    const coinsToFlagCompleto = {
      'Uma': 'img/missoes/inflacao/FLAG_COMPLETO2.svg',
      'Duas': 'img/missoes/inflacao/FLAG_COMPLETO1.svg',
      'Três': 'img/missoes/inflacao/FLAG_COMPLETO0.svg'
    }
    const coinsToPags = {
      'Uma': 'img/missoes/inflacao/pags_somente/03_1.svg',
      'Duas': 'img/missoes/inflacao/pags_somente/03_2.svg',
      'Três': 'img/missoes/inflacao/pags_somente/03_3.svg'
    }
    const coinsToPagsMaisCaro = {
      'Uma': 'img/missoes/inflacao/pags_somente/04_1.svg',
      'Duas': 'img/missoes/inflacao/pags_somente/04_2.svg',
      'Três': 'img/missoes/inflacao/pags_somente/04_3.svg'
    }

    const steps = {
      [1]: {
        progressBar: 'img/missoes/inflacao/progress_bar_1.svg',
        flag: 'img/missoes/inflacao/FLAG_ABRE.svg',
        pags: 'img/missoes/inflacao/pags_somente/01_ABRE.svg'
      },
      [2]: {
        progressBar: 'img/missoes/inflacao/progress_bar_2.svg',
        flag: 'img/missoes/inflacao/FLAG_COMPLETO3.svg',
        pags: 'img/missoes/inflacao/pags_somente/02_0.svg'
      },
      [3]: {
        progressBar: 'img/missoes/inflacao/progress_bar_2.svg',
        flag: coinsToFlagEscolhido[this.state.moedasGastas],
        pags: 'img/missoes/inflacao/pags_somente/02_0.svg'
      },
      [4]: {
        progressBar: 'img/missoes/inflacao/progress_bar_3.svg',
        flag: coinsToFlagCompleto[this.state.moedasGastas],
        pags: coinsToPags[this.state.moedasGastas]
      },
      [5]: {
        progressBar: null,
        flag: 'img/missoes/inflacao/_clock.svg',
        pags: null
      },
      [6]: {
        progressBar: 'img/missoes/inflacao/progress_bar_4.svg',
        flag: coinsToFlagCompleto[this.state.moedasGastas],
        pags: coinsToPagsMaisCaro[this.state.moedasGastas]
      },
      [7]: {
        progressBar: 'img/missoes/inflacao/progress_bar_5.svg',
        flag: null,
        pags: 'img/missoes/inflacao/pags_somente/05.svg'
      },
      [8]: {
        progressBar: 'img/missoes/inflacao/progress_bar_6.svg',
        flag: 'img/missoes/inflacao/FLAG_COMPLETO3.svg',
        pags: 'img/missoes/inflacao/pags_somente/02_0.svg'
      },
      [9]: {
        progressBar: 'img/missoes/inflacao/progress_bar_6.svg',
        flag: coinsToFlagEscolhido[this.state.moedasGastas],
        pags: 'img/missoes/inflacao/pags_somente/02_0.svg'
      },
      [10]: {
        progressBar: 'img/missoes/inflacao/progress_bar_7.svg',
        flag: coinsToFlagCompleto[this.state.moedasGastas],
        pags: coinsToPags[this.state.moedasGastas]
      },
      [11]: {
        progressBar: null,
        flag: 'img/missoes/inflacao/_clock.svg',
        pags: null
      },
      [12]: {
        progressBar: null,
        flag: 'img/missoes/inflacao/MAGIA.svg',
        pags: null
      },
      [13]: {
        progressBar: 'img/missoes/inflacao/progress_bar_8.svg',
        flag: coinsToFlagCompletoInvestido[this.state.moedasGastas],
        pags: coinsToPagsCompletoInvestido[this.state.moedasGastas]
      },
      [14]: {
        progressBar: 'img/missoes/inflacao/progress_bar_9.svg',
        flag: null,
        pags: 'img/missoes/inflacao/pags_somente/09.svg'
      },
      [15]: {
        progressBar: null,
        flag: null,
        pags: this.state.resposta === 2 ? 'img/missoes/inflacao/pags_somente/10_1.svg' : 'img/missoes/inflacao/pags_somente/10_2.svg'
      }
    }

    const renderMiddle = this.state.step === 14 ?
        <Box direction='row' responsive={false}>
          <Image src={steps[this.state.step].pags} size='medium' />
            <Box pad={{between: 'small'}}>
              <Button primary label='Me fazer guardar grana' onClick={() => this.resposta(1)} />
              <Button primary label='Influencia meu poder de compra' onClick={() => this.resposta(2)} />
              <Button primary label='Me faz investir' onClick={() => this.resposta(3)} />
            </Box>
        </Box>
      :
      <Image src={steps[this.state.step].pags} size='medium' />

    console.log(this.state.step);
    console.log(steps[this.state.step]);
    return(
      <Article pad={small ? {vertical: 'large', between: 'medium'} : {vertical: 'medium', between: 'medium'}} >
        <Box align='center' pad={small ? {between: 'small', vertical: 'medium'} : {between: 'small', vertical: 'medium'}}>
          <Image src={steps[this.state.step].progressBar} />
        </Box>
        <Box align='center' pad={{between: 'medium'}}>
          <Image src={steps[this.state.step].flag}
            size={(this.state.step === 5 || this.state.step === 11 || this.state.step === 12) ? 'small' : 'medium'} />
          {((this.state.step === 2) || (this.state.step === 8)) &&
            <FormField help='Quantas moedas deseja gastar?' style={{textAlign: 'left'}}>
              <Select options={['Uma', 'Duas', 'Três']} inline value={this.state.moedasGastas} onChange={(obj) => this.selectMoedas(obj.value)} />
            </FormField>
          }
          {(this.state.step === 5 || this.state.step === 11 || this.state.step === 12) ?
            <Paragraph>
              {((this.state.step === 5 || this.state.step === 11)) && 'Após a inflação agir ...'}
              {(this.state.step === 12) && 'A magia do investimento acontece!'}
            </Paragraph>
            :
            renderMiddle
          }
          {!(this.state.step === 7) ?
            <Box pad={{vertical: 'medium', between: 'medium'}} align='center' direction='row' responsive={false}>
              {!(this.state.step === 1) && <Button primary style={{}} label='Voltar' onClick={this.prevStep}/>}
              <Button label={'Próximo'} primary onClick={(this.state.moedasGastas === 'Três' && this.state.step === 11) ? this.nextNextStep : this.nextStep} />
            </Box>
            :
            <Button label={'Veja a mesma história se o PAG$ tivesse investido'} primary onClick={this.nextStep} />
          }

        </Box>
      </Article>
  )}
}
