import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));

// ejemplo
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));

// modulo gastos
const Ingresargastos = React.lazy(() => import('./views/Gastos/Ingresargastos/Ingresargastos'));
const GastosDiarios = React.lazy(() => import('./views/Gastos/Informegastos/gastosdiarios/gastosdiarios'));
const GastosSemanales = React.lazy(() => import('./views/Gastos/Informegastos/gastossemanales/gastossemanales'));
const GastosMensuales = React.lazy(() => import('./views/Gastos/Informegastos/gastosmensuales/gastosmensuales'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  
  // ejemplo
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  
  // modulo gastos
  { path: '/gastos/ingresargastos', name: 'Ingresar gastos', component: Ingresargastos },
  { path: '/gastos/informegastos/diarios', name: 'Gastos diarios', component: GastosDiarios },
  { path: '/gastos/informegastos/semanales', name: 'Gastos semanales', component: GastosSemanales },
  { path: '/gastos/informegastos/mensuales', name: 'Gastos mensuales', component: GastosMensuales },

];

export default routes;
