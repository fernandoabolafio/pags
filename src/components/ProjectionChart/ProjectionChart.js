import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {recomendados, generateRendBruto, generateRendLiq, generateFormatedData, generateFormatedDataWithPoupanca} from '../../test/mockedRecomendados';
import {Box} from 'grommet';

export default class ProjectionChart extends React.Component {
  generateData = () => {
    const {investimento, meses, valor} = this.props;
    const dataCurrentInvest = generateRendBruto(investimento, meses, valor);
    const dataPoupanca = generateRendBruto(recomendados[0], meses, valor);
    const formatedData = generateFormatedDataWithPoupanca(dataCurrentInvest, dataPoupanca, this.props.investimento.nome);
    return formatedData;
  }
  render() {
    const {investimento, meses, valor, small} = this.props;
    const data = this.generateData();
    return (
      <Box style={{margin:"20px 0"}}>
        <LineChart width={small ? 300 : 400} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="mes"/>
           <YAxis domain={['dataMin - 100', 'dataMax']} />
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line type="monotone" dataKey={investimento.nome} stroke="#8884d8" activeDot={{r: 8}}/>
           {
             investimento.nome === recomendados[0].nome ?
             null
             :
            <Line type="monotone" dataKey={recomendados[0].nome} stroke="#82ca9d" />
           }
        </LineChart>
      </Box>

    );
  }
}
