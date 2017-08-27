import request from 'superagent';

const API_CONFIG = {
  base_path: 'https://api-insights.axwaycloud.com',
  api_auth: {
    header_name: 'keyid',
    key: '0600c8e0-0ae7-45c5-a0e5-1985d1bb634f'
  }
};

const OPERATIONS_PATHS = {
  get_cdbs: '/investimentos/v1/cdbs',
  get_fundos_recomendados: (id_investidor) => `/investimentos/v1/investidores/${id_investidor}/ofertas_produtos`,
  get_carteira_recomendada: (id_investidor, valor, prazo) => `/investimentos/v1/investidores/${id_investidor}/recomendacoes?valor_aplicacao=${valor}&prazo_aplicacao=${prazo}`
};

export function getCDBS() {
  const { base_path: basePath, api_auth: apiAuth } = API_CONFIG;
  const { get_cdbs: getCdbs } = OPERATIONS_PATHS;
  return new Promise((resolve, reject) => {
    request.get(basePath + getCdbs)
    .set(apiAuth.header_name, apiAuth.key)
    .end((err, res) => {
      if (res) {
        resolve(res.body.data);
      }
      if (err) {
        reject(err);
      }
    });
  });
}

export function getFundosRecomendados(idInvestidor) {
  console.log('ID DO INVEST', parseInt(idInvestidor));
  const { base_path: basePath, api_auth: apiAuth } = API_CONFIG;
  const { get_fundos_recomendados: getFundosRecomendados } = OPERATIONS_PATHS;
  return new Promise((resolve, reject) => {
    request.get(basePath + getFundosRecomendados(idInvestidor))
    .set(apiAuth.header_name, apiAuth.key)
    .end((err, res) => {
      if (res) {
        resolve(res.body);
      }
      if (err) {
        reject(err);
      }
    });
  });
}

export function getCarteiraRecomendada(idInvestidor, valor, prazo) {
  const { base_path: basePath, api_auth: apiAuth } = API_CONFIG;
  const { get_carteira_recomendada: getCarteiraRecomendada } = OPERATIONS_PATHS;
  return new Promise((resolve, reject) => {
    request.get(basePath + getCarteiraRecomendada(idInvestidor, valor, prazo))
    .set(apiAuth.header_name, apiAuth.key)
    .end((err, res) => {
      if (res) {
        resolve(res.body.data);
      }
      if (err) {
        reject(err);
      }
    });
  });
}
