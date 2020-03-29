import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));

// ejemplo
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));

// modulo gastos
const Ingresargastos = React.lazy(() => import('./views/Gastos/Ingresargastos/Ingresargastos'));
const GastosReport = React.lazy(() => import('./views/Gastos/Informegastos/gastosreporte/gastosreporte'));
const GastosDiarios = React.lazy(() => import('./views/Gastos/Informegastos/gastosdiarios/gastosdiarios'));
const GastosSemanales = React.lazy(() => import('./views/Gastos/Informegastos/gastossemanales/gastossemanales'));
const GastosMensuales = React.lazy(() => import('./views/Gastos/Informegastos/gastosmensuales/gastosmensuales'));

// Expenses Module.
const PersonalExpensesIndex = React.lazy(() => import('./views/expenses/moduls/personalexpenses/containers/index'));
// Expenses References.
const ExpensesTypeIndex = React.lazy(() => import('./views/expenses/references/expensestype/containers/index'));
// Expenses Reports.
const ReportExpensesIndex = React.lazy(() => import('./views/expenses/reports/rpersonalexpenses/containers/index'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  
  // ejemplo
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  
  // modulo gastos
  { path: '/gastos/ingresargastos', name: 'Ingresar gastos', component: Ingresargastos },
  { path: '/gastos/informegastos/reporte', name: 'Reporte de gastos', component: GastosReport },
  { path: '/gastos/informegastos/diarios', name: 'Gastos diarios', component: GastosDiarios },
  { path: '/gastos/informegastos/semanales', name: 'Gastos semanales', component: GastosSemanales },
  { path: '/gastos/informegastos/mensuales', name: 'Gastos mensuales', component: GastosMensuales },

  //------------------------------------------
  //    Routes Expenses
  //------------------------------------------
  // module - expenses
  { path: '/expenses/moduls/personalexpenses', name: 'Expenses', component: PersonalExpensesIndex },
  
  // references - typeexpenses
  { path: '/expenses/references/expensestype', name: 'Expenses Type', component: ExpensesTypeIndex },
  
  // report - typeexpenses
  { path: '/expenses/reports/rpersonalexpenses', name: 'Personal Report Expenses', component: ReportExpensesIndex },
];

export default routes;
