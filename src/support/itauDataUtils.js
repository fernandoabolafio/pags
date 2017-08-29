
export function mapIdToTipoDeInvestimento(id) {
  let tipo = '';
  const intId = parseInt(id);
  if(intId === 1019) return 'cdbs';
  if(intId === 1003) return 'coes';
  if(intId === 1001 || intId === 1002 || (intId >= 1004 && intId <= 1014)) return 'fundos';
  if(intId >= 1015 && intId <= 1018) return 'previdencias';
  if(intId === 1020) return 'poupancas';
  return false;
}

export function mapIdToTipoDeInvestimento2(id) {
  let tipo = '';
  const intId = parseInt(id);
  if(intId === 1019) return 'cdb';
  if(intId === 1003) return 'coe';
  if(intId === 1001 || intId === 1002 || (intId >= 1004 && intId <= 1014)) return 'fundo';
  if(intId >= 1015 && intId <= 1018) return 'previdencia';
  if(intId === 1020) return 'poupanca';
  return false;
}

export function mapTypeToIdKey(type) {
  const mapTypeToIdKey = {
    cdbs: 'id_cdb',
    coes: 'id_coe',
    fundos: 'id_fundo',
    previdencias: 'id_previdencia',
    poupancas: 'id_poupanca'
  }
  return mapTypeToIdKey[type];
}
