(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[15],{1031:function(e,t,n){"use strict";n.r(t);var a=n(235),o=n(236),c=n(238),s=n(237),r=n(239),i=n(2),u=n.n(i),l=n(913),d=n(927),p=n(914),f=n(934),h=n(910),m=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={noviembre:0},n}return Object(r.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.getExpenses({mes:11}).then((function(t){console.log(t),e.setState({noviembre:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement("div",null,u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-sm"},u.a.createElement(l.a,null,u.a.createElement(d.a,null,u.a.createElement("strong",null,"Noviembre 2019")),u.a.createElement(p.a,null,"Tus gastos del noviembre fueron de: ","$ ".concat((new Intl.NumberFormat).format(this.state.noviembre)),u.a.createElement("hr",null)),u.a.createElement(f.a,null)))))))}}]),t}(i.Component);t.default=m},910:function(e,t,n){"use strict";var a=n(235),o=n(236),c=function(){function e(){Object(a.a)(this,e);var t=window.location.host;"localhost:3000"===t&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===t&&(this.URL="http://coysa.herokuapp.com/api/"),this.API_TOKEN=localStorage.getItem("token")}return Object(o.a)(e,[{key:"onLogin",value:function(e,t){return fetch("".concat(this.URL,"login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"registerUser",value:function(e){return fetch("".concat(this.URL,"register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,username:e.username,password:e.password,password_confirmation:e.password_confirmation})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"saveExpenses",value:function(e){return fetch("".concat(this.URL,"gastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,gasto:e.gasto,cantidad:e.cantidad,precio_unidad:e.precioUnidad,precio_total:e.precioTotal,fecha:e.Fecha,user_id:e.id_usuario,tipogasto_id:e.tipogasto_id})}).then((function(e){return console.log("objeto guardado"),e.json()})).catch((function(e){throw e}))}},{key:"getExpenses",value:function(e){return fetch("".concat(this.URL,"gastos?api_token=").concat(this.API_TOKEN,"\n        &user_id=").concat(JSON.parse(localStorage.getItem("auth")).id,"\n        &mes=").concat(e.mes)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"getTipogastos",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"deleteExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){throw e}))}}]),e}();t.a=new c},913:function(e,t,n){"use strict";var a=n(34),o=n(90),c=n(2),s=n.n(c),r=n(60),i=n.n(r),u=n(905),l=n.n(u),d=n(906),p={tag:d.m,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},f=function(e){var t=e.className,n=e.cssModule,c=e.color,r=e.body,i=e.inverse,u=e.outline,p=e.tag,f=e.innerRef,h=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(d.i)(l()(t,"card",!!i&&"text-white",!!r&&"card-body",!!c&&(u?"border":"bg")+"-"+c),n);return s.a.createElement(p,Object(a.a)({},h,{className:m,ref:f}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},914:function(e,t,n){"use strict";var a=n(34),o=n(90),c=n(2),s=n.n(c),r=n(60),i=n.n(r),u=n(905),l=n.n(u),d=n(906),p={tag:d.m,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},f=function(e){var t=e.className,n=e.cssModule,c=e.innerRef,r=e.tag,i=Object(o.a)(e,["className","cssModule","innerRef","tag"]),u=Object(d.i)(l()(t,"card-body"),n);return s.a.createElement(r,Object(a.a)({},i,{className:u,ref:c}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},927:function(e,t,n){"use strict";var a=n(34),o=n(90),c=n(2),s=n.n(c),r=n(60),i=n.n(r),u=n(905),l=n.n(u),d=n(906),p={tag:d.m,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,n=e.cssModule,c=e.tag,r=Object(o.a)(e,["className","cssModule","tag"]),i=Object(d.i)(l()(t,"card-header"),n);return s.a.createElement(c,Object(a.a)({},r,{className:i}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},934:function(e,t,n){"use strict";var a=n(34),o=n(90),c=n(2),s=n.n(c),r=n(60),i=n.n(r),u=n(905),l=n.n(u),d=n(906),p={tag:d.m,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,n=e.cssModule,c=e.tag,r=Object(o.a)(e,["className","cssModule","tag"]),i=Object(d.i)(l()(t,"card-footer"),n);return s.a.createElement(c,Object(a.a)({},r,{className:i}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f}}]);
//# sourceMappingURL=15.34fd00fd.chunk.js.map