import React from 'react';
import AppLayout from '../layouts/AppLayout';
import Home from './Home';

export const createRoutes = (store) => ({
  path: '/',
  component: AppLayout,
  indexRoute: Home
});


export default createRoutes;
