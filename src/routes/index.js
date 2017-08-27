import React from 'react';
import AppLayout from '../layouts/AppLayout';
import Home from './Home';
import App from './App';

export const createRoutes = (store) => ({
  path: '/',
  component: AppLayout,
  indexRoute: Home,
  childRoutes: [
    App
  ]
});


export default createRoutes;
