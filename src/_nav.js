export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    // {
    //   name: 'Example',
    //   url: '/notifications',
    //   icon: 'icon-cursor',
    //   children: [
    //     {
    //       name: 'Ingresar gastos',
    //       url: '/notifications/alerts',
    //       icon: 'icon-pencil',
    //     },
    //     {
    //       name: 'Informe de gastos',
    //       url: '/notifications/badges',
    //       icon: 'icon-pencil',
    //     },
    //   ],
    // },
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
              name: 'Gastos diarios',
              url: '/gastos/informegastos',
              icon: 'icon-puzzle',
            },
            {
              name: 'Gastos semanales',
              url: '/gastos/informegastos',
              icon: 'icon-puzzle',
            },
            {
              name: 'Gastos mensuales',
              url: '/gastos/informegastos',
              icon: 'icon-puzzle',
            },
          ]
        },
      ],
    },

  ],
};
