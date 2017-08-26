import request from 'superagent';

const API_CONFIG = {
  base_path: 'https://api-insights.axwaycloud.com',
  api_auth: {
    header_name: 'keyid',
    key: '0600c8e0-0ae7-45c5-a0e5-1985d1bb634f'
  }
};

const OPERATIONS_PATHS = {
  get_cdbs: '/investimentos/v1/cdbs'
};

export function getCDBS() {
  const { base_path: basePath, api_auth: apiAuth } = API_CONFIG;
  const { get_cdbs: getCdbs } = OPERATIONS_PATHS;
  return new Promise((resolve, reject) => {
    request.get(basePath + getCdbs)
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
