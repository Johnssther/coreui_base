(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{1104:function(e,t,a){"use strict";a.r(t);var n=a(916),r=a.n(n),c=a(917),o=a(2),s=a.n(o),i=a(982),l=a(995),u=a(934),p=a(243);a(913);Object(l.a)();t.default=Object(p.b)((function(e){return{expensestypes:e.expensestype.expensestype,createexpense:e.personalexpenses.personalexpense}}),(function(e){return{actions:{}}}))((function(e){var t=e.expensestypes.map((function(e){return{value:e.id,label:e.gasto}})),a=function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,""===a.precio_total&&(n=a.cantidad*a.precio_unidad,Object.assign(a,{precio_total:n})),Object.assign(a,{user_id:JSON.parse(localStorage.getItem("auth")).id}),t.next=5,Object(u.a)(a);case 5:return t.next=7,Object(u.b)();case 7:e.history.push("/expenses/moduls/personalexpenses"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}();return s.a.createElement(i.a,{onCreate:a,expensestype:t})}))},911:function(e,t,a){"use strict";var n=a(237),r=a(238),c=function(){function e(){Object(n.a)(this,e);var t=window.location.host;"localhost:3000"===t&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===t&&(this.URL="http://coysa.herokuapp.com/api/"),this.API_TOKEN=localStorage.getItem("token")}return Object(r.a)(e,[{key:"onLogin",value:function(e,t){return fetch("".concat(this.URL,"login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"registerUser",value:function(e){return fetch("".concat(this.URL,"register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,username:e.username,password:e.password,password_confirmation:e.password_confirmation})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"saveExpenses",value:function(e){return console.log(e,"joh"),fetch("".concat(this.URL,"gastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,gasto:e.gasto,cantidad:e.cantidad,precio_unidad:e.precio_unidad,precio_total:e.precio_total,fecha:e.fecha,user_id:e.user_id,tipogasto_id:e.tipogasto_id})}).then((function(e){return e.json()})).catch((function(e){throw e}))}},{key:"getExpenses",value:function(e){return fetch("".concat(this.URL,"gastos?api_token=").concat(this.API_TOKEN,"\n        &user_id=").concat(JSON.parse(localStorage.getItem("auth")).id,"\n        &mes=").concat(e.mes)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"showExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e.id,"?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"getExpensesType",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"deleteExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e,"?api_token=").concat(this.API_TOKEN),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){throw e}))}}]),e}();t.a=new c},913:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"setConfiguracion",(function(){return o}));var r={};a.r(r),a.d(r,"setPersonalexpense",(function(){return s})),a.d(r,"setPersonalexpenses",(function(){return i}));var c={};a.r(c),a.d(c,"setExpensestype",(function(){return l}));var o=function(e){return{type:"SET_CONFIGURACION",payload:e}},s=function(e){return{type:"SET_PERSONALEXPENSE",payload:e}},i=function(e){return{type:"SET_PERSONALEXPENSES",payload:e}},l=function(e){return{type:"SET_EXPENSES_TYPE",payload:e}};a.d(t,"a",(function(){return u}));var u={configuracion:n,personalexpenses:r,expensestype:c}},920:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){if(console.log(e),e){if("TypeError: Failed to fetch"!==e)return void alert("Ha ocurrido un error de conexi\xf3n.");alert("Ha ocurrido un error inesperado, por favor recarga tu navegador.")}}},934:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return p})),a.d(t,"c",(function(){return d}));var n=a(916),r=a.n(n),c=a(917),o=a(911),s=a(920),i=a(913),l=a(183),u=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={mes:null},e.prev=1,e.next=4,o.a.getExpenses(t);case 4:a=e.sent,l.b.dispatch(i.a.personalexpenses.setPersonalexpenses(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),Object(s.a)(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.saveExpenses(t);case 3:a=e.sent,console.log(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Object(s.a)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.showExpense(t);case 3:return a=e.sent,e.next=6,l.b.dispatch(i.a.personalexpenses.setPersonalexpense(a));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Object(s.a)(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},953:function(e,t,a){"use strict";var n=a(918),r=a(914),c=a(2),o=a.n(c),s=a(915);t.a=function(e){var t=e.label,a=e.placeholder,c=Object(r.a)(e,["label","placeholder"]),i=Object(s.c)(c),l=Object(n.a)(i,2),u=l[0],p=l[1],d=o.a.useState(!1),m=Object(n.a)(d,2),f=m[0],h=m[1],b=!!f&&u.value.trim().length>2||p.touched;return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:u.name},t),o.a.createElement("input",Object.assign({className:"form-control sm ".concat(b?p.error?"is-invalid":"is-valid":"")},u,c,{placeholder:a,onFocus:function(){return h(!0)},onClick:function(){console.log("fg")}})),o.a.createElement("div",{className:"valid-feedback"},"Completado"),o.a.createElement("div",{className:"invalid-feedback"},p.error))}},954:function(e,t,a){"use strict";var n=a(918),r=a(914),c=a(2),o=a.n(c),s=a(915),i=a(1074),l=a(1051),u=a(927),p=a.n(u),d=a(951);t.a=function(e){var t=e.label,a=e.placeholder,c=Object(r.a)(e,["label","placeholder"]),u=Object(s.c)(c),m=Object(n.a)(u,3),f=m[0],h=m[1],b=m[2],v=(h.value,b.setValue),E=o.a.useState(!1),g=Object(n.a)(E,2),y=g[0],x=g[1],O=o.a.useState(!1),j=Object(n.a)(O,2),k=j[0],N=j[1],_=o.a.useState(p()()),w=Object(n.a)(_,2),S=w[0],T=w[1],P=!!y&&f.value.trim().length>2||h.touched,C=function(){N(!k)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:f.name},t),o.a.createElement("input",Object.assign({className:"form-control ".concat(P?h.error?"is-invalid":"is-valid":"")},f,c,{placeholder:a,onFocus:function(){return x(!0)},onClick:function(){C()}})),o.a.createElement("div",{className:"valid-feedback"},"Completado"),o.a.createElement("div",{className:"invalid-feedback"},h.error)),o.a.createElement(i.a,{isOpen:k,toggle:function(){C()},fade:!1,style:{width:"88%"}},o.a.createElement(l.a,null,o.a.createElement(d.Calendar,{style:{backgroundColor:"red"},onChange:function(e){v(e.format("YYYY/M/D HH:mm:ss")),T(e),C()},value:S}))))}},955:function(e,t,a){"use strict";var n=a(918),r=a(914),c=a(2),o=a.n(c),s=a(1107),i=a(915);t.a=function(e){var t=e.label,a=(e.placeholder,Object(r.a)(e,["label","placeholder"])),c=Object(i.c)(a),l=Object(n.a)(c,2),u=l[0],p=l[1];return o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("label",{htmlFor:u.name},t),o.a.createElement("div",{className:"form-check"},o.a.createElement(s.a,Object.assign({color:"primary",className:"form-check-input ".concat(p.touched&&p.error?"is-invalid":"is-valid")},u,a)),p.touched&&p.error?o.a.createElement("div",{className:"invalid-feedback"},p.error):null)))}},956:function(e,t,a){"use strict";var n=a(918),r=a(914),c=a(2),o=a.n(c),s=a(915),i=a(957);t.a=function(e){var t=e.label,a=e.expensestype,c=Object(r.a)(e,["label","expensestype"]),l=Object(s.c)(c),u=Object(n.a)(l,3),p=u[0],d=u[1],m=u[2].setValue,f=d.value,h=a.find((function(e){if(e.value===f)return e}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{htmlFor:p.name},t),o.a.createElement(i.a,{className:"is-invalid",options:a,onChange:function(e){m(e.value)},value:h}),o.a.createElement("div",{className:"valid-feedback"},"Completado"),o.a.createElement("div",{className:"invalid-feedback"},d.error),d.touched&&d.error?o.a.createElement("small",{className:"form-text text-danger"},d.error):null)}},981:function(e,t,a){"use strict";var n=a(34),r=a(90),c=a(2),o=a.n(c),s=a(60),i=a.n(s),l=a(907),u=a.n(l),p=a(908),d={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:p.m,className:i.a.string,cssModule:i.a.object},m=function(e){var t=e.className,a=e.cssModule,c=e.row,s=e.disabled,i=e.check,l=e.inline,d=e.tag,m=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(p.i)(u()(t,!!c&&"row",i?"form-check":"form-group",!(!i||!l)&&"form-check-inline",!(!i||!s)&&"disabled"),a);return"fieldset"===d&&(m.disabled=s),o.a.createElement(d,Object(n.a)({},m,{className:f}))};m.propTypes=d,m.defaultProps={tag:"div"},t.a=m},982:function(e,t,a){"use strict";var n=a(2),r=a.n(n),c=a(961),o=a(931),s=a(933),i=a(932),l=a(929),u=a(930),p=a(981),d=a(926),m=a(915),f=a(996),h=a(927),b=a.n(h),v=a(953),E=a(954),g=a(955),y=a(956),x=a(934);Object(x.b)();t.a=function(e){var t=e.onCreate,a=e.expensestype;return r.a.createElement(c.a,null,r.a.createElement(o.a,null,r.a.createElement(s.a,null,"Ingresar Gasto"),r.a.createElement(i.a,null,r.a.createElement(m.b,{initialValues:{gasto:"",cantidad:"",precio_unidad:"",precio_total:"",fecha:b()().format("YYYY/M/D  HH:mm:ss"),tipogasto_id:"",acceptedTerms:!1,jobType:2},validationSchema:f.d({gasto:f.e().min(3,"Un gasto debe tener minimo 3 caracteres.").required("El gasto es obligatorio"),cantidad:f.c().max(99999,"La cantidad no puede exceder de 99.999").positive("La cantidad no puede ser negativa.").required("La cantiad es obligatoria"),precio_unidad:f.c().positive("El precio de la unidad no puede ser negativo.").required("La cantiad es obligatoria"),precio_total:f.c().positive("La cantidad no puede ser negativa."),fecha:f.b().required("La fecha es obligatoria"),tipogasto_id:f.e().required("Debe seleccionar un tipo de gasto"),acceptedTerms:f.a().required("Required").oneOf([!0],"Debe aceptar los terminos y condiciones para poder continuar."),jobType:f.e().required("Required")}),onSubmit:function(e,a){var n=a.setSubmitting;t(e),n(!0)}},r.a.createElement(m.a,null,r.a.createElement(l.a,null,r.a.createElement(u.a,{sm:"6"},r.a.createElement(E.a,{name:"fecha",type:"text",label:"Fecha",placeholder:"Ingrese la fecha del gasto."})),r.a.createElement(u.a,{sm:"6"},r.a.createElement(p.a,null,r.a.createElement(y.a,{type:"input",label:"Tipo Gasto",name:"tipogasto_id",expensestype:a})))),r.a.createElement(l.a,null,r.a.createElement(u.a,{sm:"3"},r.a.createElement(v.a,{name:"cantidad",type:"text",label:"Cantidad",placeholder:"Ingrese una cantidad."})),r.a.createElement(u.a,{sm:"9"},r.a.createElement(v.a,{name:"gasto",type:"text",label:"Gasto",placeholder:"Ingrese un gasto."}))),r.a.createElement(l.a,null,r.a.createElement(u.a,{sm:"6"},r.a.createElement(v.a,{name:"precio_unidad",type:"text",label:"Precio unid.",placeholder:"Ingrese el precio por unidad."})),r.a.createElement(u.a,{sm:"6"},r.a.createElement(v.a,{name:"precio_total",type:"text",label:"Precio total",placeholder:"Ingrese el precio total (opcional)."}))),r.a.createElement("hr",null),r.a.createElement(l.a,null,r.a.createElement(u.a,{sm:"6"},r.a.createElement(g.a,{name:"acceptedTerms",type:"checkbox",label:"Aceptar terminos y condiciones"}))),r.a.createElement(l.a,null,r.a.createElement(u.a,{sm:{size:6,offset:4}},r.a.createElement(d.a,{className:"col-sm-3 m-1",type:"reset",color:"secondary",size:"sm"},"Reset"),r.a.createElement(d.a,{className:"col-sm-3 m-1",type:"submit",color:"dark",size:"sm"},"Register"))))))))}},995:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(916),r=a.n(n),c=a(917),o=a(911),s=a(913),i=a(183),l=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.getExpensesType();case 3:t=e.sent,i.b.dispatch(s.a.expensestype.setExpensestype(t)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Ha ocurrido un error"),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=16.a1aea19a.chunk.js.map