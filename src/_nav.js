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

  ],
};
