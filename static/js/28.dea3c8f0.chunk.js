(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[28],{1018:function(e,t,n){"use strict";n.r(t);var a=n(529),o=n.n(a),c=n(530),r=n(158),s=n(159),i=n(161),l=n(160),u=n(1),p=n.n(u),h=n(561),m=n(743),d=n(593),f=n(594),g=n(506),E=n.n(g),v=n(874),b=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,a=e.header,o=e.mainText,c=e.icon,r=e.color,s=e.footer,i=e.link,l=(e.children,e.variant),u=Object(h.a)(e,["className","cssModule","header","mainText","icon","color","footer","link","children","variant"]),g="0"===l?{card:"p-3",icon:"p-3",lead:"mt-2"}:"1"===l?{card:"p-0",icon:"p-4",lead:"pt-3"}:{card:"p-0",icon:"p-4 px-5",lead:"pt-3"},b={style:"clearfix",color:r,icon:c,classes:""};b.classes=Object(v.mapToCssModules)(E()(t,b.style,g.card),n);var y={style:"h5 mb-0",color:r,classes:""};y.classes=E()(y.style,"text-"+b.color,g.lead);return p.a.createElement(d.a,null,p.a.createElement(f.a,Object.assign({className:b.classes},u),function(e){var t=E()(e,"bg-"+b.color,g.icon,"font-2xl mr-3 float-left");return p.a.createElement("i",{className:t})}(b.icon),p.a.createElement("div",{className:y.classes},a),p.a.createElement("div",{className:"text-muted text-uppercase font-weight-bold font-xs"},o)),function(){if(s)return p.a.createElement(m.a,{className:"px-3 py-2"},p.a.createElement("a",{className:"font-weight-bold font-xs btn-block text-muted",href:i},"Ver M\xe1s",p.a.createElement("i",{className:"fa fa-angle-right float-right font-lg"})))}())}}]),n}(u.Component);b.defaultProps={header:"$1,999.50",mainText:"Income",icon:"fa fa-cogs",color:"primary",variant:"0",link:"#"};var y=b,x=(n(512),new(function(){function e(){Object(r.a)(this,e);var t=window.location.host;"localhost:3000"===t&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===t&&(this.URL="http://coysa.herokuapp.com/api/"),"http://159.65.226.161:3000"===t&&(this.URL="http://localhost/coysa/public/api/"),this.API_TOKEN=localStorage.getItem("token")}return Object(s.a)(e,[{key:"getTotalExpensesMonths",value:function(){return fetch("".concat(this.URL,"dashboard/totalexpensesmonths?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"getTotalExpensesMonth",value:function(e){return fetch("".concat(this.URL,"dashboard/totalexpensesmonth?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id,"&tipogasto=").concat(e)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}}]),e}())),N=n(618),O=n(727),_=n(1007),j=n(790),k=n(807),w=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={gastoTotal:""},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.mes;return console.log(e,"a"),p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"animated fadeIn"},p.a.createElement(_.a,{className:"cols-2"},p.a.createElement(d.a,null,p.a.createElement(N.a,null,"Bar Chart",p.a.createElement("div",{className:"card-header-actions"},p.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},p.a.createElement("small",{className:"text-muted"},"docs")))),p.a.createElement(f.a,null,p.a.createElement("div",{className:"chart-wrapper"},p.a.createElement(j.a,{data:{labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[{label:"My First dataset",backgroundColor:"rgba(17,168,141)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(168,132,8,66)",hoverBorderColor:"rgba(255,99,132,1)",data:e.map((function(e){return e.precio_total_mes}))}]},options:{tooltips:{enabled:!1,custom:k.CustomTooltips},maintainAspectRatio:!1}})))))))}}]),n}(u.Component),T=n(162),S=n(700),I=n(611),A=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={gastoTotal:"",mes:[],loading:!0,expensestype:[],valueSelectExpensestype:""},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(c.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.getExpensesMonths(),this.getExpensesMonth(),e.next=4,Object(I.b)();case 4:return e.next=6,this.props.expensestypes.map((function(e){return{value:e.id,label:e.gasto}}));case 6:t=e.sent,this.setState({expensestype:t});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getExpensesMonth",value:function(e){var t=this;x.getTotalExpensesMonth(e).then((function(e){t.setState({gastoTotal:e,loading:!1})})).catch((function(e){return console.log(e)}))}},{key:"getExpensesMonths",value:function(){var e=this;x.getTotalExpensesMonths().then((function(t){e.setState({mes:t,loading:!1})})).catch((function(e){return console.log(e)}))}},{key:"onChangeSelect",value:function(){var e=Object(c.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({valueSelectExpensestype:t});case 2:this.getExpensesMonth(this.state.valueSelectExpensestype);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];return this.state.loading?p.a.createElement(O.a,{loading:this.state.loading}):p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"row mb-2"},p.a.createElement("div",{className:"offset-sm-3 col-sm-6"},p.a.createElement(S.a,{className:"is-invalid",options:this.state.expensestype,onChange:function(t){e.onChangeSelect(t.value)}}))),p.a.createElement("div",{className:"row"},p.a.createElement("div",{className:"col-sm-6"},p.a.createElement("div",{className:"animated fadeIn"},p.a.createElement(y,{header:"$"+(new Intl.NumberFormat).format(this.state.gastoTotal.toString()),mainText:"Gastos totales de este mes"})))),p.a.createElement("div",{className:"animated fadeIn"},p.a.createElement("div",null,p.a.createElement("div",{className:"row topContainer"},this.state.mes.map((function(e,n){return p.a.createElement("div",{className:"col-sm",key:n},p.a.createElement(d.a,null,p.a.createElement(N.a,{className:"bg-primary"},p.a.createElement("h4",null," ",t[e.mes-1]," ",e.anio," ")),p.a.createElement(f.a,{className:"bg-info text-dark"},"Gastos: ",p.a.createElement("h3",null," ","$ ".concat((new Intl.NumberFormat).format(e.precio_total_mes))," "),p.a.createElement("hr",null))))}))))),p.a.createElement(w,{mes:this.state.mes}))}}]),n}(u.Component);t.default=Object(T.b)((function(e){return{expensestypes:e.expensestype.expensestype,expense:e.personalexpenses.createpersonalexpense}}))(A)},512:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var a=function(e){if(console.log(e),!1===e.success)throw e;if(e){var t={success:!1,errors:"Ocurrio un error inesperado de conexi\xf3n por favor recargue su navegador nuevamente."};if("TypeError: Failed to fetch"!==e)throw t;throw t}},o=function(e){throw e}},522:function(e,t,n){"use strict";var a=n(158),o=n(159),c=(n(512),function(){function e(){Object(a.a)(this,e);var t=window.location.host;"localhost:3000"===t&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===t&&(this.URL="http://coysa.herokuapp.com/api/"),this.API_TOKEN=localStorage.getItem("token")}return Object(o.a)(e,[{key:"onLogin",value:function(e,t){return fetch("".concat(this.URL,"login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"registerUser",value:function(e){return fetch("".concat(this.URL,"register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,username:e.username,password:e.password,password_confirmation:e.password_confirmation})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"getExpenses",value:function(e){return fetch("".concat(this.URL,"gastos?api_token=").concat(this.API_TOKEN,"\n        &user_id=").concat(JSON.parse(localStorage.getItem("auth")).id,"\n        &mes=").concat(e.mes)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"saveExpenses",value:function(e){return console.log(e,"joh"),fetch("".concat(this.URL,"gastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,gasto:e.gasto,cantidad:e.cantidad,precio_unidad:e.precio_unidad,precio_total:e.precio_total,fecha:e.fecha,user_id:e.user_id,tipogasto_id:e.tipogasto_id})}).then((function(e){return e.json()})).catch((function(e){throw e}))}},{key:"updateExpense",value:function(e){return console.log(e),fetch("".concat(this.URL,"gastos/").concat(e.id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,gasto:e.gasto,cantidad:e.cantidad,precio_unidad:e.precio_unidad,precio_total:e.precio_total,fecha:e.fecha,user_id:e.user_id,tipogasto_id:e.tipogasto_id})}).then((function(e){return e.json()})).catch((function(e){throw e}))}},{key:"showExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e.id,"?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"deleteExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e,"?api_token=").concat(this.API_TOKEN),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){throw e}))}},{key:"getExpensesType",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}}]),e}());t.a=new c},531:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a={};n.r(a),n.d(a,"setConfiguracion",(function(){return c}));var o={};n.r(o),n.d(o,"setPersonalexpense",(function(){return r})),n.d(o,"setPersonalexpenses",(function(){return s}));var c=function(e){return{type:"SET_CONFIGURACION",payload:e}},r=function(e){return{type:"SET_PERSONALEXPENSE",payload:e}},s=function(e){return{type:"SET_PERSONALEXPENSES",payload:e}},i={configuracion:a,personalexpenses:o,expensestype:n(535)}},535:function(e,t,n){"use strict";n.r(t),n.d(t,"setExpensestype",(function(){return a}));var a=function(e){return{type:"SET_EXPENSES_TYPE",payload:e}}},611:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return m}));var a=n(529),o=n.n(a),c=n(530),r=n(158),s=n(159),i=(n(522),new(function(){function e(){Object(r.a)(this,e);var t=window.location.host;"localhost:3000"===t&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===t&&(this.URL="http://coysa.herokuapp.com/api/"),this.API_TOKEN=localStorage.getItem("token")}return Object(s.a)(e,[{key:"getExpensesType",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"saveExpenseType",value:function(e){return console.log(e,"joh"),fetch("".concat(this.URL,"tipogastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,tipogastos_name:e.tipogastos_name,tipogastos_active:e.tipogastos_active,tipogastos_usuario:e.tipogastos_usuario})}).then((function(e){return e.json()})).catch((function(e){throw e}))}}]),e}())),l=n(512),u=n(531),p=n(107),h=function(){var e=Object(c.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.getExpensesType();case 3:t=e.sent,p.b.dispatch(u.a.expensestype.setExpensestype(t)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Ha ocurrido un error"),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.saveExpenseType(t);case 3:n=e.sent,console.log(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Object(l.b)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},727:function(e,t,n){"use strict";var a=n(1),o=n.n(a);n(744),n(728);t.a=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-3 offset-md-4"},o.a.createElement("div",{className:"container center-block"},o.a.createElement("div",{className:"lds-facebook"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)),o.a.createElement("h4",null,"Cargando..."))))))}},744:function(e,t,n){}}]);
//# sourceMappingURL=28.dea3c8f0.chunk.js.map