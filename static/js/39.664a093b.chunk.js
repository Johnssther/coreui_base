(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[39],{992:function(e,n,t){"use strict";t.r(n);var a=t(158),o=t(159),l=t(161),s=t(160),r=t(1),i=t.n(r),c=t(18),u=t(163),p=t(719),m=t(807),d=t.n(m),h=t(757),f=[{icon:"fa fa-speedometer",label:"Dashboard",to:"#/dashboard"},{icon:"icon-cursor",label:"Expenses",content:[{icon:"icon-folder",label:"Moduls",content:[{icon:"icon-cursor",label:"Personal Expenses",to:"#/expenses/moduls/personalexpenses"}]},{icon:"icon-folder",label:"Options",content:[{icon:"icon-cursor",label:"PersonalExpens",to:"#/expenses/references/expensestype"}]},{icon:"icon-folder",label:"Reports",content:[{icon:"icon-cursor",label:"PersonalExpens",to:"#/expenses/reports/rpersonalexpenses"}]}]}],b=i.a.lazy((function(){return Promise.all([t.e(2),t.e(5),t.e(12),t.e(32)]).then(t.bind(null,993))})),x=i.a.lazy((function(){return Promise.all([t.e(0),t.e(28)]).then(t.bind(null,982))})),E=i.a.lazy((function(){return t.e(26).then(t.bind(null,983))})),g=i.a.lazy((function(){return Promise.all([t.e(29),t.e(41)]).then(t.bind(null,1004))})),y=i.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(15),t.e(34)]).then(t.bind(null,996))})),P=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:b},{path:"/notifications/alerts",name:"Alerts",component:x},{path:"/notifications/badges",name:"Badges",component:E},{path:"/gastos/ingresargastos",name:"Ingresar gastos",component:i.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(13)]).then(t.bind(null,991))}))},{path:"/gastos/informegastos/reporte",name:"Reporte de gastos",component:i.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(14)]).then(t.bind(null,995))}))},{path:"/gastos/informegastos/diarios",name:"Gastos diarios",component:i.a.lazy((function(){return t.e(30).then(t.bind(null,984))}))},{path:"/gastos/informegastos/semanales",name:"Gastos semanales",component:i.a.lazy((function(){return Promise.all([t.e(0),t.e(33)]).then(t.bind(null,994))}))},{path:"/gastos/informegastos/mensuales",name:"Gastos mensuales",component:i.a.lazy((function(){return t.e(25).then(t.bind(null,985))}))},{exact:!0,path:"/profile",name:"ProfileShow",component:g},{exact:!0,path:"/profile/edit/:id",name:"ProfileEdit",component:y},{exact:!0,path:"/expenses/moduls/personalexpenses",name:"Expenses",component:i.a.lazy((function(){return Promise.all([t.e(1),t.e(4),t.e(22)]).then(t.bind(null,997))}))},{exact:!0,path:"/expenses/moduls/personalexpenses/create",name:"ExpensesCreate",component:i.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(9)]).then(t.bind(null,986))}))},{exact:!0,path:"/expenses/moduls/personalexpenses/show/:id",name:"ExpensesShow",component:i.a.lazy((function(){return Promise.all([t.e(5),t.e(27),t.e(24)]).then(t.bind(null,999))}))},{exact:!0,path:"/expenses/moduls/personalexpenses/edit/:id",name:"ExpensesEdit",component:i.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(10)]).then(t.bind(null,987))}))},{exact:!0,path:"/expenses/references/expensestype",name:"Expenses Type",component:i.a.lazy((function(){return Promise.all([t.e(1),t.e(4),t.e(23)]).then(t.bind(null,1e3))}))},{exact:!0,path:"/expenses/references/expensestype/create",name:"ExpensesTypeCreate",component:i.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(11)]).then(t.bind(null,1001))}))},{exact:!0,path:"/expenses/reports/rpersonalexpenses",name:"Personal Report Expenses",component:i.a.lazy((function(){return t.e(40).then(t.bind(null,988))}))}],z=i.a.lazy((function(){return t.e(31).then(t.bind(null,990))})),k=i.a.lazy((function(){return t.e(38).then(t.bind(null,978))})),v=i.a.lazy((function(){return Promise.all([t.e(0),t.e(17),t.e(37)]).then(t.bind(null,998))})),S=function(e){Object(l.a)(t,e);var n=Object(s.a)(t);function t(e){var o;return Object(a.a)(this,t),(o=n.call(this,e)).loading=function(){return i.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},o.state={auth:null!=localStorage.getItem("token")},o}return Object(o.a)(t,[{key:"signOut",value:function(e){e.preventDefault(),this.props.history.push("/login"),localStorage.clear()}},{key:"onProfile",value:function(e){e.preventDefault(),this.props.history.push("/profile")}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"app"},i.a.createElement(h.e,{fixed:!0,style:{background:"#428bca",border:"none"}},i.a.createElement(r.Suspense,{fallback:this.loading()},i.a.createElement(v,{onLogout:function(n){return e.signOut(n)},onProfile:function(n){return e.onProfile(n)}}))),i.a.createElement("div",{className:"app-body"},i.a.createElement(h.i,null),i.a.createElement(h.h,null),i.a.createElement(r.Suspense,null,i.a.createElement(d.a,Object.assign({content:f},this.props,{router:u})),","),i.a.createElement(h.g,null),i.a.createElement("main",{className:"main"},i.a.createElement(h.c,{appRoutes:P,router:u}),i.a.createElement(p.a,{fluid:!0},i.a.createElement(r.Suspense,{fallback:this.loading()},i.a.createElement(c.g,null,P.map((function(e,n){return e.component?i.a.createElement(c.d,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return i.a.createElement(e.component,n)}}):null})),i.a.createElement(c.c,{from:"/",to:"/dashboard"}))))),i.a.createElement(h.a,{fixed:!0},i.a.createElement(r.Suspense,{fallback:this.loading()},i.a.createElement(z,null)))),i.a.createElement(h.d,null,i.a.createElement(r.Suspense,{fallback:this.loading()},i.a.createElement(k,null))),!1===this.state.auth&&i.a.createElement(c.c,{from:"/",to:"/login"}))}}]),t}(r.Component);n.default=S}}]);
//# sourceMappingURL=39.664a093b.chunk.js.map