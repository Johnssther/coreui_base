import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));

// ejemplo
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));

// gastos
const Ingresargastos = React.lazy(() => import('./views/Gastos/Ingresargastos/Ingresargastos'));
const Informegastos = React.lazy(() => import('./views/Gastos/Informegastos/Informegastos'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  
  // ejemplo
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  
  //gastos
  { path: '/gastos/ingresargastos', name: 'Ingresar gastos', component: Ingresargastos },
  { path: '/gastos/informegastos', name: 'Informe gastos', component: Informegastos },
];

export default routes;
