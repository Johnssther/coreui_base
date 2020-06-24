(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[35],{1029:function(e,a,n){"use strict";n.r(a);var t=n(158),r=n(159),l=n(161),s=n(160),o=n(1),c=n.n(o),i=n(18),u=n(162),m=n(695),p=(n(798),n(725)),d=n(743),f=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:c.a.lazy((function(){return Promise.all([n.e(1),n.e(3),n.e(6),n.e(10),n.e(23)]).then(n.bind(null,1028))}))},{path:"/notifications/alerts",name:"Alerts",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(31)]).then(n.bind(null,1019))}))},{path:"/notifications/badges",name:"Badges",component:c.a.lazy((function(){return n.e(25).then(n.bind(null,1020))}))},{exact:!0,path:"/profile",name:"ProfileShow",component:c.a.lazy((function(){return n.e(28).then(n.bind(null,1037))}))},{exact:!0,path:"/profile/edit/:id",name:"ProfileEdit",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(27),n.e(24)]).then(n.bind(null,1038))}))},{exact:!0,path:"/expenses/moduls/personalexpenses",name:"Expenses",component:c.a.lazy((function(){return Promise.all([n.e(4),n.e(22)]).then(n.bind(null,1039))}))},{exact:!0,path:"/expenses/moduls/personalexpenses/create",name:"ExpensesCreate",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(11)]).then(n.bind(null,1021))}))},{exact:!0,path:"/expenses/moduls/personalexpenses/show/:id",name:"ExpensesShow",component:c.a.lazy((function(){return Promise.all([n.e(6),n.e(16)]).then(n.bind(null,1040))}))},{exact:!0,path:"/expenses/moduls/personalexpenses/edit/:id",name:"ExpensesEdit",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(12)]).then(n.bind(null,1022))}))},{exact:!0,path:"/expenses/references/expensestype",name:"Expenses Type",component:c.a.lazy((function(){return Promise.all([n.e(4),n.e(21)]).then(n.bind(null,1041))}))},{exact:!0,path:"/expenses/references/expensestype/create",name:"ExpensesTypeCreate",component:c.a.lazy((function(){return Promise.all([n.e(2),n.e(29),n.e(26)]).then(n.bind(null,1031))}))},{exact:!0,path:"/expenses/reports/rpersonalexpenses",name:"Personal Report Expenses",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(13)]).then(n.bind(null,1026))}))}],E=c.a.lazy((function(){return n.e(30).then(n.bind(null,1027))})),h=c.a.lazy((function(){return n.e(36).then(n.bind(null,1014))})),y=c.a.lazy((function(){return Promise.all([n.e(0),n.e(15),n.e(34)]).then(n.bind(null,1042))})),b=function(e){Object(l.a)(n,e);var a=Object(s.a)(n);function n(e){var r;return Object(t.a)(this,n),(r=a.call(this,e)).loading=function(){return c.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},r.state={auth:null!=localStorage.getItem("token")},r}return Object(r.a)(n,[{key:"signOut",value:function(e){e.preventDefault(),this.props.history.push("/login"),localStorage.clear()}},{key:"onProfile",value:function(e){e.preventDefault(),this.props.history.push("/profile")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"app"},c.a.createElement(p.e,{fixed:!0,style:{background:"#428bca",border:"none"}},c.a.createElement(o.Suspense,{fallback:this.loading()},c.a.createElement(y,{onLogout:function(a){return e.signOut(a)},onProfile:function(a){return e.onProfile(a)}}))),c.a.createElement("div",{className:"app-body"},c.a.createElement(p.g,{fixed:!0,display:"lg",className:"primary"},c.a.createElement(p.j,null),c.a.createElement(p.i,null),c.a.createElement(o.Suspense,null,c.a.createElement(d.a,Object.assign({className:"sidebar-nav"},this.props,{router:u}))),c.a.createElement(p.h,null),c.a.createElement(p.k,null)),c.a.createElement("main",{className:"main"},c.a.createElement(p.c,{appRoutes:f,router:u}),c.a.createElement(m.a,{fluid:!0},c.a.createElement(o.Suspense,{fallback:this.loading()},c.a.createElement(i.g,null,f.map((function(e,a){return e.component?c.a.createElement(i.d,{key:a,path:e.path,exact:e.exact,name:e.name,render:function(a){return c.a.createElement(e.component,a)}}):null})),c.a.createElement(i.c,{from:"/",to:"/dashboard"}))))),c.a.createElement(p.a,{fixed:!0},c.a.createElement(o.Suspense,{fallback:this.loading()},c.a.createElement(E,null)))),c.a.createElement(p.d,null,c.a.createElement(o.Suspense,{fallback:this.loading()},c.a.createElement(h,null))),!1===this.state.auth&&c.a.createElement(i.c,{from:"/",to:"/login"}))}}]),n}(o.Component);a.default=b},743:function(e,a,n){"use strict";var t=n(516),r=n.n(t),l=n(517),s=n(520),o=n(1),c=n.n(o),i=n(996),u=n(1e3),m=n(999),p=n(1033),d=n(1005),f=n(1002),E=n(1030),h=n(829),y=n.n(h),b=n(1006),x=n(1007),g=n(1008),v=n(830),k=n.n(v),O=n(831),S=n.n(O),P=n(832),j=n.n(P),z=n(824),N=n(823),w=n(1001),C=n(1032),R=n(1003),I=n(1004),D=Object(i.a)((function(e){return{root:{width:"100%",maxWidth:560,fontSize:"10px"},nested:{paddingLeft:e.spacing(3)}}}));a.a=function(e){var a=D(),n=c.a.useState(!1),t=Object(s.a)(n,2),o=t[0],i=t[1],h=c.a.useState(!1),v=Object(s.a)(h,2),O=v[0],P=v[1],J=c.a.useState("#212121"),F=Object(s.a)(J,2),L=F[0],T=F[1],B=c.a.useState("#212121"),M=Object(s.a)(B,2),A=M[0],H=M[1],W=c.a.useState("#212121"),q=Object(s.a)(W,2),G=q[0],K=q[1],Q=c.a.useState(),U=Object(s.a)(Q,2);function V(){if(e.location){console.log(e.location.pathname);var a=e.location.pathname;"/expenses/moduls/personalexpenses"===a&&(i(!0),P(!1),T("orange"),H("#212121"),K("#212121")),"/expenses/references/expensestype"===a&&(i(!0),P(!1),T("#212121"),H("orange"),K("#212121")),"/expenses/reports/rpersonalexpenses"===a&&(i(!0),P(!1),T("#212121"),H("#212121"),K("orange"))}}U[0],U[1],c.a.useEffect((function(){function e(){return(e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:V();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var X=function(){var a=Object(l.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.history.push("/expenses/moduls/personalexpenses");case 2:T("orange"),H("#212121"),K("#212121");case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),Y=function(){var a=Object(l.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.history.push("/expenses/references/expensestype");case 2:T("#212121"),H("orange"),K("#212121");case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),Z=function(){var a=Object(l.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.history.push("/expenses/reports/rpersonalexpenses");case 2:T("#212121"),H("#212121"),K("orange");case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return c.a.createElement(m.a,{component:"nav","aria-labelledby":"nested-list-subheader",dense:!0,subheader:c.a.createElement(u.a,{component:"div",id:"nested-list-subheader",color:"inherit"},c.a.createElement(p.a,{alignItems:"flex-start",button:!0,onClick:function(){e.history.push("/profile"),i(!1),P(!1)}},c.a.createElement(w.a,null,c.a.createElement(C.a,{alt:JSON.parse(localStorage.getItem("auth")).name,src:"/static/images/avatar/2.jpg"})),c.a.createElement(f.a,{primary:JSON.parse(localStorage.getItem("auth")).name,secondary:c.a.createElement(c.a.Fragment,null,c.a.createElement(R.a,{component:"span",variant:"body2",className:a.inline,style:{color:z.a[500]}},"Online"))}))),className:a.root},c.a.createElement(I.a,{variant:"inset",component:"li",style:{color:N.a[50]}}),c.a.createElement(p.a,{dense:!0,button:!0,onClick:function(){e.history.push("/dashboard"),i(!1),P(!1)}},c.a.createElement(d.a,null,c.a.createElement(b.a,{style:{color:N.a[50]}})),c.a.createElement(f.a,{primary:"Dashboard"})),c.a.createElement(p.a,{dense:!0,button:!0,onClick:function(){i(!o),P(!1)}},c.a.createElement(d.a,null,c.a.createElement(y.a,{style:{color:N.a[50]}})),c.a.createElement(f.a,{primary:"Expenses"}),o?c.a.createElement(k.a,null):c.a.createElement(S.a,null)),c.a.createElement(E.a,{in:o,timeout:"auto",unmountOnExit:!0},c.a.createElement(m.a,{component:"div",disablePadding:!0},c.a.createElement(p.a,{style:{background:L},dense:!0,button:!0,onClick:X,className:a.nested,autoFocus:!0},c.a.createElement(d.a,null,c.a.createElement(x.a,{style:{color:N.a[50]}})),c.a.createElement(f.a,{primary:"My Expenses"})),c.a.createElement(p.a,{style:{background:A},dense:!0,button:!0,onClick:Y,className:a.nested},c.a.createElement(d.a,null,c.a.createElement(g.a,{style:{color:N.a[50]}})),c.a.createElement(f.a,{primary:"Expenses Type"})),c.a.createElement(p.a,{style:{background:G},dense:!0,button:!0,onClick:Z,className:a.nested},c.a.createElement(d.a,null,c.a.createElement(j.a,{style:{color:N.a[50]}})),c.a.createElement(f.a,{primary:"R. Expenses",style:{fontSize:"8px"}})))),c.a.createElement(p.a,{dense:!0,button:!0,onClick:function(){i(!1),P(!O)}},c.a.createElement(d.a,{style:{color:N.a[50]}},c.a.createElement(y.a,{style:{color:N.a[50]}}),"Beta"),c.a.createElement(f.a,{primary:"Revenues"}),O?c.a.createElement(k.a,null):c.a.createElement(S.a,null)),c.a.createElement(E.a,{in:O,timeout:"auto",unmountOnExit:!0},c.a.createElement(m.a,{component:"div",disablePadding:!0},c.a.createElement(p.a,{style:{background:"#212121"},dense:!0,button:!0,onClick:function(){},className:a.nested,autoFocus:!0},c.a.createElement(d.a,null,c.a.createElement(x.a,{style:{color:N.a[50]}})),c.a.createElement(f.a,{primary:"My Revenues"})),c.a.createElement(p.a,{style:{background:"#212121"},dense:!0,button:!0,onClick:function(){},className:a.nested},c.a.createElement(d.a,null,c.a.createElement(g.a,{style:{color:N.a[50]}})),c.a.createElement(f.a,{primary:"R. Revenues"})))))}}}]);
//# sourceMappingURL=35.1ff0fb6e.chunk.js.map