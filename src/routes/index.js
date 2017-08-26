import React from 'react';
import AppLayout from '../layouts/AppLayout';
import Home from './Home';
import MainScreen from './MainScreen';
import BankSync from './BankSync';

export const createRoutes = (store) => ({
  path: '/',
  component: AppLayout,
  indexRoute: Home,
  childRoutes: [
    BankSync,
    MainScreen
  ]
});


export default createRoutes;
