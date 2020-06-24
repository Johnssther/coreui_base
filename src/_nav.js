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

    /* Expenses Module */
    {
      name: 'Expenses',
      url: '/expenses',
      icon: 'icon-cursor',
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