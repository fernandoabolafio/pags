import React from 'react';
import AppLayout from '../layouts/AppLayout';
import Home from './Home';
import MainScreen from './MainScreen';

export const createRoutes = (store) => ({
  path: '/',
  component: AppLayout,
  indexRoute: Home,
  childRoutes: [
    MainScreen
  ]
});


export default createRoutes;
