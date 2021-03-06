import React from 'react';

// const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));

// ejemplo
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));


//------------------------------------------
//    Profile
//------------------------------------------
const ProfileShow = React.lazy(() => import('./views/profile/containers/show'));
const ProfileEdit = React.lazy(() => import('./views/profile/containers/edit'));

//------------------------------------------
//    Expenses
//------------------------------------------

// Expenses Module.
const PersonalExpensesIndex = React.lazy(() => import('./views/expenses/personalexpenses/containers/index'));
const PersonalExpensesCreate = React.lazy(() => import('./views/expenses/personalexpenses/containers/create'));
const PersonalExpensesShow = React.lazy(() => import('./views/expenses/personalexpenses/containers/show'));
const PersonalExpensesEdit = React.lazy(() => import('./views/expenses/personalexpenses/containers/edit'));
// Expenses References.
const ExpensesTypeIndex = React.lazy(() => import('./views/expenses/expensestype/containers/index'));
const ExpensesTypeCreate = React.lazy(() => import('./views/expenses/expensestype/containers/create'));
// Expenses Reports.
const ReportExpensesIndex = React.lazy(() => import('./views/expenses/rpersonalexpenses/containers/index'));

//------------------------------------------
//    Revenues
//------------------------------------------
const RevenuesIndex = React.lazy(() => import('./views/revenues/revenues/containers/index'));
const RevenuesCreate = React.lazy(() => import('./views/revenues/revenues/containers/create'));
//------------------------------------------
//    Budgets
//------------------------------------------
const BudgetIndex = React.lazy(() => import('./views/budget/budget/containers/index'));
const BudgetCreate = React.lazy(() => import('./views/budget/budget/containers/create'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  // ejemplo
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },

  //------------------------------------------
  //    Routes Profile
  //------------------------------------------
  { exact: true, path: '/profile', name: 'ProfileShow', component: ProfileShow },
  { exact: true, path: '/profile/edit/:id', name: 'ProfileEdit', component: ProfileEdit },

  //------------------------------------------
  //    Routes Expenses
  //------------------------------------------
  // expenses
  { exact: true, path: '/expenses/moduls/personalexpenses', name: 'Expenses', component: PersonalExpensesIndex },
  { exact: true, path: '/expenses/moduls/personalexpenses/create', name: 'ExpensesCreate', component: PersonalExpensesCreate },
  { exact: true, path: '/expenses/moduls/personalexpenses/show/:id', name: 'ExpensesShow', component: PersonalExpensesShow },
  { exact: true, path: '/expenses/moduls/personalexpenses/edit/:id', name: 'ExpensesEdit', component: PersonalExpensesEdit },
  // typeexpenses
  { exact: true, path: '/expenses/references/expensestype', name: 'Expenses Type', component: ExpensesTypeIndex },
  { exact: true, path: '/expenses/references/expensestype/create', name: 'ExpensesTypeCreate', component: ExpensesTypeCreate },
  // typeexpenses
  { exact: true, path: '/expenses/reports/rpersonalexpenses', name: 'Personal Report Expenses', component: ReportExpensesIndex },

  //------------------------------------------
  //    Routes Revenues
  //------------------------------------------
  { exact: true, path: '/revenues', name: 'Revenues', component: RevenuesIndex },
  { exact: true, path: '/revenues/create', name: 'RevenuesCreate', component: RevenuesCreate },

  //------------------------------------------
  //    Routes Budget
  //------------------------------------------
  { exact: true, path: '/budget', name: 'Budget', component: BudgetIndex },
  { exact: true, path: '/budget/create', name: 'BudgetCreate', component: BudgetCreate },
];

export default routes;
