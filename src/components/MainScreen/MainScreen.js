import React from 'react';
import ReactDOM from 'react-dom';
import Section from 'grommet/components/Section';
import Card from 'grommet/components/Card';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Legend from 'grommet/components/Legend';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';

// import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
//
// const data = [
//       {investimento: 'CDI', percentual: [40, 50], liquido: 400},
//       {investimento: 'CDB', percentual: 20, liquido: 200},
//       {investimento: 'LCI', percentual: 10, liquido: 100},
//       {investimento: 'LCA', percentual: 30, liquido: 300},
// ];
// const SimpleBarChart = React.createClass({
// 	render () {
//   	return (
//       <ResponsiveContainer width='100%' aspect={2}>
//       	<BarChart data={data}>
//          <XAxis dataKey="investimento"/>
//          <YAxis domain={[0, 100]}/>
//          <CartesianGrid strokeDasharray="1 1"/>
//          <Tooltip/>
//          <Legend />
//          <Bar dataKey="percentual" fill="#8884d8" />
//         </BarChart>
//       </ResponsiveContainer>
//     );
//   }
// })

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
          <Box style={{backgroundColor: 'white', width: small ? '' : '25%'}} margin={small ? 'medium' : {left: 'medium', right: 'small'}}>
            <Card
            >
              Info gamification
            </Card>
          </Box>
          <Box style={{backgroundColor: 'white', width: small ? '' : '75%'}}  margin={small ? 'medium' : {left: 'small', right: 'medium'}}>
            <Card
              align='center'
              justify='center'
              heading={
                  <Heading tag='h2'>
                    Seus Investimentos
                  </Heading>
                }
            >
              <AnnotatedMeter type="circle" legend={true} units="R$"
                size={small ? 'medium' : 'medium'}  series={cpuData} />
            </Card>
          </Box>
        </Box>
        <Box direction='row' style={{backgroundColor: 'white'}} margin={small ? 'medium' : {top: 'medium', left: 'medium', right: 'medium'}}>
          <Card
            heading={
                <Heading tag='h2'>
                  Seus Objetivos
                </Heading>
              }
          >
            Info gamification
          </Card>
        </Box>
      </Section>
    );
  }
}
