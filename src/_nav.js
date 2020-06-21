var backgroundactive = 'yellow';
var coloractive = 'black';
export default {
  items: [

    //Dashboard
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },

    //Modulo gastos
    {
      name: 'Gastos',
      url: '/gastos',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Ingresar gastos',
          url: '/gastos/ingresargastos',
          icon: 'icon-pencil',
        },
        {
          name: 'Informe de gastos',
          url: '/gastos/informegastos',
          icon: 'icon-pencil',
          children: [
            {
              name: 'Reporte Gastos',
              url: '/gastos/informegastos/reporte',
              icon: 'icon-puzzle',
            },
            {
              name: 'Gastos diarios',
              url: '/gastos/informegastos/diarios',
              icon: 'icon-puzzle',
            },
            {
              name: 'Gastos semanales',
              url: '/gastos/informegastos/semanales',
              icon: 'icon-puzzle',
            },
            {
              name: 'Gastos mensuales',
              url: '/gastos/informegastos/mensuales',
              icon: 'icon-puzzle',
            },
          ]
        },
      ],
    },

    /* Expenses Module */
    {
      name: 'Expenses',
      url: '/expenses',
      icon: 'icon-cursor',
      // badge: {
      //   variant: 'danger',
      //   text: 'NEW'
      // },
      children: [
        {
          name: 'Moduls',
          url: '/expenses/moduls',
          icon: 'icon-folder',
          class: 'bg-dark',
          children: [
            {
              name: 'Personal Expenses',
              url: '/expenses/moduls/personalexpenses',
              icon: 'icon-cursor',
              class: '',
              attributes: {
                activeStyle: { backgroundColor: backgroundactive, color: coloractive },
              }
            },
          ]
        },

        /* References */
        {
          name: 'References',
          url: '/expenses/references',
          icon: 'icon-folder',
          class: 'bg-dark',
          children: [
            {
              name: 'Expenses Type',
              url: '/expenses/references/expensestype',
              icon: 'icon-grid',
              class: '',
              attributes: { 
                activeStyle: { backgroundColor: backgroundactive, color: coloractive },
                exact:true,
              },
            },
          ]
        },

        /* Reports */
        {
          name: 'Reports',
          url: '/expenses/reports',
          icon: 'icon-folder',
          class: 'bg-dark',
          attributes: { class: 'bg-success ' },
          children: [
            {
              name: 'Expenses Type',
              url: '/expenses/reports/rpersonalexpenses',
              icon: 'icon-doc',
              attributes: {
                activeStyle: { backgroundColor: backgroundactive, color: coloractive },
                exact:true,
              }
            },
          ]
        },
      ]
    }

  ],
};

// https://github.com/coreui/coreui-react/blob/master/src/SidebarNav.md