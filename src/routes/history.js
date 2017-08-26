import { useRouterHistory } from 'react-router';

const createHistory = require('../../node_modules/react-router/node_modules/history').createHashHistory;
const appHistory = useRouterHistory(createHistory)({ queryKey: false });

export default appHistory;
