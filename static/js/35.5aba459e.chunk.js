(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[35],{1117:function(e,n,a){"use strict";a.r(n);var t=a(237),s=a(238),o=a(240),l=a(239),r=a(241),c=a(2),i=a.n(c),u=a(89),p=a(243),m=a(962),d=a(999),f={items:[{name:"Dashboard",url:"/dashboard",icon:"icon-speedometer"},{name:"Gastos",url:"/gastos",icon:"icon-cursor",children:[{name:"Ingresar gastos",url:"/gastos/ingresargastos",icon:"icon-pencil"},{name:"Informe de gastos",url:"/gastos/informegastos",icon:"icon-pencil",children:[{name:"Reporte Gastos",url:"/gastos/informegastos/reporte",icon:"icon-puzzle"},{name:"Gastos diarios",url:"/gastos/informegastos/diarios",icon:"icon-puzzle"},{name:"Gastos semanales",url:"/gastos/informegastos/semanales",icon:"icon-puzzle"},{name:"Gastos mensuales",url:"/gastos/informegastos/mensuales",icon:"icon-puzzle"}]}]},{name:"Expenses",url:"/expenses",icon:"icon-cursor",badge:{variant:"danger",text:"NEW"},children:[{name:"Moduls",url:"/expenses/moduls",icon:"icon-folder",class:"bg-dark",children:[{name:"Personal Expenses",url:"/expenses/moduls/personalexpenses",icon:"icon-cursor",class:"",attributes:{activeStyle:{backgroundColor:"yellow",color:"black"}}}]},{name:"References",url:"/expenses/references",icon:"icon-folder",class:"bg-dark",children:[{name:"Expenses Type",url:"/expenses/references/expensestype",icon:"icon-grid",class:"",attributes:{activeStyle:{backgroundColor:"yellow",color:"black"},exact:!0}}]},{name:"Reports",url:"/expenses/reports",icon:"icon-folder",class:"bg-dark",attributes:{class:"bg-success "},children:[{name:"Expenses Type",url:"/expenses/reports/rpersonalexpenses",icon:"icon-doc",attributes:{activeStyle:{backgroundColor:"yellow",color:"black"},exact:!0}}]}]}]},h=i.a.lazy((function(){return a.e(21).then(a.bind(null,1123))})),g=i.a.lazy((function(){return Promise.all([a.e(1),a.e(23)]).then(a.bind(null,1102))})),b=i.a.lazy((function(){return a.e(25).then(a.bind(null,1103))})),x=i.a.lazy((function(){return a.e(30).then(a.bind(null,1104))})),y=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:h},{path:"/notifications/alerts",name:"Alerts",component:g},{path:"/notifications/badges",name:"Badges",component:b},{path:"/gastos/ingresargastos",name:"Ingresar gastos",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(18)]).then(a.bind(null,1114))}))},{path:"/gastos/informegastos/reporte",name:"Reporte de gastos",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(19)]).then(a.bind(null,1118))}))},{path:"/gastos/informegastos/diarios",name:"Gastos diarios",component:i.a.lazy((function(){return a.e(28).then(a.bind(null,1106))}))},{path:"/gastos/informegastos/semanales",name:"Gastos semanales",component:i.a.lazy((function(){return Promise.all([a.e(1),a.e(27)]).then(a.bind(null,1115))}))},{path:"/gastos/informegastos/mensuales",name:"Gastos mensuales",component:i.a.lazy((function(){return a.e(24).then(a.bind(null,1107))}))},{exact:!0,path:"/profile",name:"Profile",component:x},{exact:!0,path:"/expenses/moduls/personalexpenses",name:"Expenses",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(3),a.e(14)]).then(a.bind(null,1124))}))},{exact:!0,path:"/expenses/moduls/personalexpenses/create",name:"ExpensesCreate",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(10)]).then(a.bind(null,1108))}))},{exact:!0,path:"/expenses/moduls/personalexpenses/show/:id",name:"ExpensesShow",component:i.a.lazy((function(){return Promise.all([a.e(20),a.e(26)]).then(a.bind(null,1116))}))},{exact:!0,path:"/expenses/moduls/personalexpenses/edit/:id",name:"ExpensesEdit",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(11)]).then(a.bind(null,1109))}))},{exact:!0,path:"/expenses/references/expensestype",name:"Expenses Type",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(3),a.e(15)]).then(a.bind(null,1121))}))},{exact:!0,path:"/expenses/references/expensestype/create",name:"ExpensesTypeCreate",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(22)]).then(a.bind(null,1122))}))},{exact:!0,path:"/expenses/reports/rpersonalexpenses",name:"Personal Report Expenses",component:i.a.lazy((function(){return a.e(36).then(a.bind(null,1110))}))}],E=i.a.lazy((function(){return a.e(29).then(a.bind(null,1113))})),z=i.a.lazy((function(){return a.e(34).then(a.bind(null,1099))})),k=i.a.lazy((function(){return Promise.all([a.e(1),a.e(9),a.e(33)]).then(a.bind(null,1126))})),v=function(e){function n(e){var a;return Object(t.a)(this,n),(a=Object(o.a)(this,Object(l.a)(n).call(this,e))).loading=function(){return i.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a.state={auth:null!=localStorage.getItem("token")},a}return Object(r.a)(n,e),Object(s.a)(n,[{key:"signOut",value:function(e){e.preventDefault(),this.props.history.push("/login"),localStorage.clear()}},{key:"onProfile",value:function(e){e.preventDefault(),this.props.history.push("/profile")}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"app"},i.a.createElement(d.e,{fixed:!0,style:{background:"#428bca",border:"none"}},i.a.createElement(c.Suspense,{fallback:this.loading()},i.a.createElement(k,{onLogout:function(n){return e.signOut(n)},onProfile:function(n){return e.onProfile(n)}}))),i.a.createElement("div",{className:"app-body"},i.a.createElement(d.g,{fixed:!0,display:"lg"},i.a.createElement(d.j,null),i.a.createElement(d.i,null),i.a.createElement(c.Suspense,null,i.a.createElement(d.l,Object.assign({className:"sidebar-nav",navConfig:f},this.props,{router:p}))),i.a.createElement(d.h,null),i.a.createElement(d.k,null)),i.a.createElement("main",{className:"main"},i.a.createElement(d.c,{appRoutes:y,router:p}),i.a.createElement(m.a,{fluid:!0},i.a.createElement(c.Suspense,{fallback:this.loading()},i.a.createElement(u.g,null,y.map((function(e,n){return e.component?i.a.createElement(u.d,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return i.a.createElement(e.component,n)}}):null})),i.a.createElement(u.c,{from:"/",to:"/dashboard"}))))),i.a.createElement(d.a,{fixed:!0},i.a.createElement(c.Suspense,{fallback:this.loading()},i.a.createElement(E,null)))),i.a.createElement(d.d,null,i.a.createElement(c.Suspense,{fallback:this.loading()},i.a.createElement(z,null))),!1===this.state.auth&&i.a.createElement(u.c,{from:"/",to:"/login"}))}}]),n}(c.Component);n.default=v}}]);
//# sourceMappingURL=35.5aba459e.chunk.js.map