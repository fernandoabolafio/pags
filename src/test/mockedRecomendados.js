export const recomendados = [
  {
    id: 1,
    nome: 'Poupança',
    invest_min: 1,
    tesouro: false,
    tempo_min: 0.1,
    rendimento: 'pos_fixado',
    risco: 'baixo',
    liquidez: 'diario',
    quando_recebe: 'D+O',
    rentabilidades: {
      ano: 6.3,
      mes: 0.53,
      dia: 0.02
    },
    taxa_ir: 0,
    taxa_iof: 0,
    taxa_adm: 0,
    taxa_cust: 0
  },
  {
    id: 2,
    nome: 'CDB',
    invest_min: 1000,
    tempo_min: 12,
    rendimento: 'pos_fixado',
    risco: 'baixo',
    liquidez: 'vencimento',
    quando_recebe: 'D+0',
    rentabilidades: {
      ano: 10.45,
      mes: 0.87,
      dia: 0.03
    },
    taxa_ir: 'tab',
    taxa_iof: 0,
    taxa_adm: 0,
    taxa_cust: 0
  },
  {
    id: 3,
    nome: 'Tesouro Selic 2023',
    invest_min: 30,
    tempo_min: 0.1,
    rendimento: 'pos_fixado',
    risco: 'baixo',
    liquidez: 'diario',
    quando_recebe: 'D+1',
    rentabilidades: {
      ano: 9,
      mes: 0.71,
      dia: 0.02
    },
    taxa_ir: 'tab',
    taxa_iof: 'tab',
    taxa_adm: 0,
    taxa_cust: 0.3
  },
  {
    id: 4,
    nome: 'Tesouro Préfixado 2020',
    invest_min: 30,
    tempo_min: 0.1,
    rendimento: 'pre_fixado',
    risco: 'baixo',
    liquidez: 'diario',
    quando_recebe: 'D+1',
    rentabilidades: {
      ano: 8.31,
      mes: 0.78,
      dia: 0.03
    },
    taxa_ir: 'tab',
    taxa_iof: 'tab',
    taxa_adm: 0,
    taxa_cust: 0.3
  },
  {
    id: 5,
    nome: 'Fundo Itaú',
    invest_min: 5000,
    tempo_min: 0.1,
    rendimento: 'pre_fixado',
    risco: 'medio',
    liquidez: 'diario',
    quando_recebe: 'D+1',
    rentabilidades: {
      ano: 16.3,
      mes: 1.36,
      dia: 0.05
    },
    taxa_ir: 'tab',
    taxa_iof: 'tab',
    taxa_adm: 1.5,
    taxa_cust: 0
  }
]


const getValorIR = (meses) => {
  if(meses === 0) return 0;
  if(meses < 6) return 22.5;
  if(meses > 6 && meses < 12) return 20;
  if(meses > 12 && meses < 24) return 17.5;
  return 15;
}

export const generateRendBruto = (investimento, prazo, valorInicial) => {
  const data = [];
  const rentMes = investimento.rentabilidades.mes/100;
  for(var i = 0 ; i <= prazo ; i++) {
    let valor = 0;
    if(i === 0) {
      valor = valorInicial;
    } else {
      valor = data[i-1] + (data[i-1]*rentMes)
    }
    const makeiTTwoDecimal = (value) => parseInt(value*100)/100;
    data.push(makeiTTwoDecimal(valor));
  }

  return data;
}

export const generateTaxasIR = (investimento, rendBruto) => {
  const taxasIR = rendBruto.map( (valor, i) => {
    if(i === 0) {
      return 0;
    }
    let ir = 0;
    if(investimento.taxa_ir) ir = getValorIR(i)/100;
    return (valor - rendBruto[0]) * ir;
  })
  return taxasIR;
}

export const generateRendLiq = (investimento, prazo, valorInicial) => {
  const rendBruto = generateRendBruto(investimento, prazo, valorInicial);
  let rendLiq = rendBruto;
  if(investimento.taxa_ir) {
    const taxasIR = generateTaxasIR(investimento, rendBruto);
    rendLiq = rendLiq.map( (valor,i) => valor - taxasIR[i]);
  }
  return rendLiq;
}

export const generateFormatedData = (rawData, name) => {
  const formatedData = rawData.map( (value, i) => ({
    mes: i,
    [name]: value
  }))
  return formatedData;
}

export const generateFormatedDataWithPoupanca = (rawData, rawDataPoupanca, name) => {
  const nomePoupanca = recomendados[0].nome;
  const formatedData = rawData.map( (value, i) => ({
    mes: i,
    [name]: value,
    [nomePoupanca]: rawDataPoupanca[i]
  }))
  return formatedData;
}
