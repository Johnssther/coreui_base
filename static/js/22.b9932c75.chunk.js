(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{1002:function(e,t,a){"use strict";var n=a(916),o=a.n(n),r=a(917),c=a(237),s=a(238),i=(a(911),new(function(){function e(){Object(c.a)(this,e);var t=window.location.host;"localhost:3000"===t&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===t&&(this.URL="http://coysa.herokuapp.com/api/"),this.API_TOKEN=localStorage.getItem("token")}return Object(s.a)(e,[{key:"getExpensesType",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"saveExpenseType",value:function(e){return console.log(e,"joh"),fetch("".concat(this.URL,"tipogastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,tipogastos_name:e.tipogastos_name,tipogastos_active:e.tipogastos_active,tipogastos_usuario:e.tipogastos_usuario})}).then((function(e){return e.json()})).catch((function(e){throw e}))}}]),e}())),l=a(920),u=a(913),p=a(183);a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return h}));var m=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.getExpensesType();case 3:t=e.sent,p.b.dispatch(u.a.expensestype.setExpensestype(t)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Ha ocurrido un error"),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.saveExpenseType(t);case 3:a=e.sent,console.log(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Object(l.a)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},1119:function(e,t,a){"use strict";a.r(t);var n=a(916),o=a.n(n),r=a(917),c=a(2),s=a.n(c),i=a(961),l=a(931),u=a(933),p=a(932),m=a(929),h=a(930),d=a(926),f=a(915),v=a(996),g=(a(927),a(953)),E=(a(954),a(955)),b=(a(956),function(e){var t=e.onCreate;return s.a.createElement(i.a,null,s.a.createElement(l.a,null,s.a.createElement(u.a,null,"Tipo de gasto"),s.a.createElement(p.a,null,s.a.createElement(f.b,{initialValues:{tipogastos_name:"Gasto de ",tipogastos_active:!0},validationSchema:v.d({tipogastos_name:v.e().min(11,"Un gasto debe tener minimo 10 caracteres.").max(30,"Un gasto debe tener maximo 30 caracteres.").required("El gasto es obligatorio"),tipogastos_active:v.a().required("Required").oneOf([!0],"El tipo de gasto debe estar activo .")}),onSubmit:function(e,a){var n=a.setSubmitting;t(e),n(!0)}},s.a.createElement(f.a,null,s.a.createElement(m.a,null,s.a.createElement(h.a,{sm:"8"},s.a.createElement(g.a,{name:"tipogastos_name",type:"text",label:"Tipo de Gasto",placeholder:"Ingrese un tipo de gasto."})),s.a.createElement(h.a,{sm:"4"},s.a.createElement(E.a,{name:"tipogastos_active",type:"checkbox",label:"Tipo Activo"}))),s.a.createElement(m.a,null,s.a.createElement(h.a,{sm:{size:6,offset:4}},s.a.createElement(d.a,{className:"col col-sm-3 m-1",type:"reset",color:"secondary",size:"sm"},"Reset"),s.a.createElement(d.a,{className:"col col-sm-3 m-1",type:"submit",color:"dark",size:"sm"},"Register"))))))))}),y=a(1002),O=a(243);t.default=Object(O.b)((function(e){return{expensestype:e.expensestype.expensestype,createexpense:e.personalexpenses.personalexpense}}),(function(e){return{actions:{}}}))((function(e){var t=e.expensestype,a=function(){var t=Object(r.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Object.assign(a,{tipogastos_usuario:JSON.parse(localStorage.getItem("auth")).id}),t.next=4,Object(y.a)(a);case 4:return console.log(a),t.next=7,Object(y.b)();case 7:e.history.push("/expenses/references/expensestype"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}();return s.a.createElement(b,{onCreate:a,expensestype:t})}))},911:function(e,t,a){"use strict";var n=a(237),o=a(238),r=function(){function e(){Object(n.a)(this,e);var t=window.location.host;"localhost:3000"===t&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===t&&(this.URL="http://coysa.herokuapp.com/api/"),this.API_TOKEN=localStorage.getItem("token")}return Object(o.a)(e,[{key:"onLogin",value:function(e,t){return fetch("".concat(this.URL,"login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"registerUser",value:function(e){return fetch("".concat(this.URL,"register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,username:e.username,password:e.password,password_confirmation:e.password_confirmation})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"saveExpenses",value:function(e){return console.log(e,"joh"),fetch("".concat(this.URL,"gastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,gasto:e.gasto,cantidad:e.cantidad,precio_unidad:e.precio_unidad,precio_total:e.precio_total,fecha:e.fecha,user_id:e.user_id,tipogasto_id:e.tipogasto_id})}).then((function(e){return e.json()})).catch((function(e){throw e}))}},{key:"getExpenses",value:function(e){return fetch("".concat(this.URL,"gastos?api_token=").concat(this.API_TOKEN,"\n        &user_id=").concat(JSON.parse(localStorage.getItem("auth")).id,"\n        &mes=").concat(e.mes)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"showExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e.id,"?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"getExpensesType",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"deleteExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e,"?api_token=").concat(this.API_TOKEN),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){throw e}))}}]),e}();t.a=new r},913:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"setConfiguracion",(function(){return c}));var o={};a.r(o),a.d(o,"setPersonalexpense",(function(){return s})),a.d(o,"setPersonalexpenses",(function(){return i}));var r={};a.r(r),a.d(r,"setExpensestype",(function(){return l}));var c=function(e){return{type:"SET_CONFIGURACION",payload:e}},s=function(e){return{type:"SET_PERSONALEXPENSE",payload:e}},i=function(e){return{type:"SET_PERSONALEXPENSES",payload:e}},l=function(e){return{type:"SET_EXPENSES_TYPE",payload:e}};a.d(t,"a",(function(){return u}));var u={configuracion:n,personalexpenses:o,expensestype:r}},920:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){if(console.log(e),e){if("TypeError: Failed to fetch"!==e)return void alert("Ha ocurrido un error de conexi\xf3n.");alert("Ha ocurrido un error inesperado, por favor recarga tu navegador.")}}},953:function(e,t,a){"use strict";var n=a(918),o=a(914),r=a(2),c=a.n(r),s=a(915);t.a=function(e){var t=e.label,a=e.placeholder,r=Object(o.a)(e,["label","placeholder"]),i=Object(s.c)(r),l=Object(n.a)(i,2),u=l[0],p=l[1],m=c.a.useState(!1),h=Object(n.a)(m,2),d=h[0],f=h[1],v=!!d&&u.value.trim().length>2||p.touched;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:u.name},t),c.a.createElement("input",Object.assign({className:"form-control sm ".concat(v?p.error?"is-invalid":"is-valid":"")},u,r,{placeholder:a,onFocus:function(){return f(!0)},onClick:function(){console.log("fg")}})),c.a.createElement("div",{className:"valid-feedback"},"Completado"),c.a.createElement("div",{className:"invalid-feedback"},p.error))}},954:function(e,t,a){"use strict";var n=a(918),o=a(914),r=a(2),c=a.n(r),s=a(915),i=a(1074),l=a(1051),u=a(927),p=a.n(u),m=a(951);t.a=function(e){var t=e.label,a=e.placeholder,r=Object(o.a)(e,["label","placeholder"]),u=Object(s.c)(r),h=Object(n.a)(u,3),d=h[0],f=h[1],v=h[2],g=(f.value,v.setValue),E=c.a.useState(!1),b=Object(n.a)(E,2),y=b[0],O=b[1],j=c.a.useState(!1),_=Object(n.a)(j,2),x=_[0],N=_[1],k=c.a.useState(p()()),S=Object(n.a)(k,2),T=S[0],w=S[1],P=!!y&&d.value.trim().length>2||f.touched,C=function(){N(!x)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:d.name},t),c.a.createElement("input",Object.assign({className:"form-control ".concat(P?f.error?"is-invalid":"is-valid":"")},d,r,{placeholder:a,onFocus:function(){return O(!0)},onClick:function(){C()}})),c.a.createElement("div",{className:"valid-feedback"},"Completado"),c.a.createElement("div",{className:"invalid-feedback"},f.error)),c.a.createElement(i.a,{isOpen:x,toggle:function(){C()},fade:!1,style:{width:"88%"}},c.a.createElement(l.a,null,c.a.createElement(m.Calendar,{style:{backgroundColor:"red"},onChange:function(e){g(e.format("YYYY/M/D HH:mm:ss")),w(e),C()},value:T}))))}},955:function(e,t,a){"use strict";var n=a(918),o=a(914),r=a(2),c=a.n(r),s=a(1107),i=a(915);t.a=function(e){var t=e.label,a=(e.placeholder,Object(o.a)(e,["label","placeholder"])),r=Object(i.c)(a),l=Object(n.a)(r,2),u=l[0],p=l[1];return c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("label",{htmlFor:u.name},t),c.a.createElement("div",{className:"form-check"},c.a.createElement(s.a,Object.assign({color:"primary",className:"form-check-input ".concat(p.touched&&p.error?"is-invalid":"is-valid")},u,a)),p.touched&&p.error?c.a.createElement("div",{className:"invalid-feedback"},p.error):null)))}},956:function(e,t,a){"use strict";var n=a(918),o=a(914),r=a(2),c=a.n(r),s=a(915),i=a(957);t.a=function(e){var t=e.label,a=e.expensestype,r=Object(o.a)(e,["label","expensestype"]),l=Object(s.c)(r),u=Object(n.a)(l,3),p=u[0],m=u[1],h=u[2].setValue,d=m.value,f=a.find((function(e){if(e.value===d)return e}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{htmlFor:p.name},t),c.a.createElement(i.a,{className:"is-invalid",options:a,onChange:function(e){h(e.value)},value:f}),c.a.createElement("div",{className:"valid-feedback"},"Completado"),c.a.createElement("div",{className:"invalid-feedback"},m.error),m.touched&&m.error?c.a.createElement("small",{className:"form-text text-danger"},m.error):null)}}}]);
//# sourceMappingURL=22.b9932c75.chunk.js.map