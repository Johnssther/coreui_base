var backgroundactive = 'yellow';
var coloractive = 'black';

//http://localhost:3000/expenses/moduls/personalexpenses#/expenses/moduls/personalexpenses
//http://localhost:3000/expenses/moduls/personalexpenses#/dashboard
const navigation1 = [{
    // class="metismenu-icon fa fa-dashboard"
    icon: 'fa fa-speedometer',
    label: 'Dashboard',
    to: '#/dashboard',
},
{
    icon: 'icon-cursor',
    label: 'Expenses',
    content: [
        {
            icon: 'icon-folder',
            label: 'Moduls',
            content: [
                {
                    icon: 'icon-cursor',
                    label: 'Personal Expenses',
                    to: '#/expenses/moduls/personalexpenses',
                }
            ]
        },
        {
            icon: 'icon-folder',
            label: 'Options',
            content: [
                {
                    icon: 'icon-cursor',
                    label: 'PersonalExpens',
                    to: '#/expenses/references/expensestype',
                }
            ]
        },
        {
            icon: 'icon-folder',
            label: 'Reports',
            content: [
                {
                    icon: 'icon-cursor',
                    label: 'PersonalExpens',
                    to: '#/expenses/reports/rpersonalexpenses',
                }
            ]
        },
    ],
},
];

export default navigation1

// {
//   items: [

//     //Dashboard
//     {
//       icon: 'icon-speedometer',
//       label: 'Dashboard',
//       to: '/dashboard',
//     },

//     /* Expenses Module */
//     {
//       name: 'Expenses',
//       url: '/expenses',
//       icon: 'icon-cursor',
//       content: [
//         {
//           name: 'Moduls',
//           url: '/expenses/moduls',
//           icon: 'icon-folder',
//           class: 'bg-dark',
//           content: [
//             {
//               name: 'Personal Expenses',
//               url: '/expenses/moduls/personalexpenses',
//               icon: 'icon-cursor',
//               class: '',
//               attributes: {
//                 activeStyle: { backgroundColor: backgroundactive, color: coloractive },
//               }
//             },
//           ]
//         },

//         /* References */
//         {
//           name: 'References',
//           url: '/expenses/references',
//           icon: 'icon-folder',
//           class: 'bg-dark',
//           content: [
//             {
//               name: 'Expenses Type',
//               url: '/expenses/references/expensestype',
//               icon: 'icon-grid',
//               class: '',
//               attributes: { 
//                 activeStyle: { backgroundColor: backgroundactive, color: coloractive },
//                 exact:true,
//               },
//             },
//           ]
//         },

//         /* Reports */
//         {
//           name: 'Reports',
//           url: '/expenses/reports',
//           icon: 'icon-folder',
//           class: 'bg-dark',
//           attributes: { class: 'bg-success ' },
//           content: [
//             {
//               name: 'Expenses Type',
//               url: '/expenses/reports/rpersonalexpenses',
//               icon: 'icon-doc',
//               attributes: {
//                 activeStyle: { backgroundColor: backgroundactive, color: coloractive },
//                 exact:true,
//               }
//             },
//           ]
//         },
//       ]
//     }

//   ],
// };

// // https://github.com/coreui/coreui-react/blob/master/src/SidebarNav.md