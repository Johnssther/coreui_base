(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[33],{516:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var a=function(e){if(console.log(e),!1===e.success)throw e;if(e){var t={success:!1,errors:"Ocurrio un error inesperado de conexi\xf3n por favor recargue su navegador nuevamente."};if("TypeError: Failed to fetch"!==e)throw t;throw t}},o=function(e){throw e}},517:function(e,t,n){"use strict";var a=n(158),o=n(159),r=(n(516),function(){function e(){Object(a.a)(this,e);var t=window.location.host;"localhost:3000"===t&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===t&&(this.URL="http://159.65.226.161/coysa-laravel/public/api"),this.API_TOKEN=localStorage.getItem("token")}return Object(o.a)(e,[{key:"onLogin",value:function(e,t){return fetch("".concat(this.URL,"login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"registerUser",value:function(e){return fetch("".concat(this.URL,"register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,username:e.username,password:e.password,password_confirmation:e.password_confirmation})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"getExpenses",value:function(e){return fetch("".concat(this.URL,"gastos?api_token=").concat(this.API_TOKEN,"\n        &user_id=").concat(JSON.parse(localStorage.getItem("auth")).id,"\n        &mes=").concat(e.mes)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"saveExpenses",value:function(e){return console.log(e,"joh"),fetch("".concat(this.URL,"gastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,gasto:e.gasto,cantidad:e.cantidad,precio_unidad:e.precio_unidad,precio_total:e.precio_total,fecha:e.fecha,user_id:e.user_id,tipogasto_id:e.tipogasto_id})}).then((function(e){return e.json()})).catch((function(e){throw e}))}},{key:"updateExpense",value:function(e){return console.log(e),fetch("".concat(this.URL,"gastos/").concat(e.id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,gasto:e.gasto,cantidad:e.cantidad,precio_unidad:e.precio_unidad,precio_total:e.precio_total,fecha:e.fecha,user_id:e.user_id,tipogasto_id:e.tipogasto_id})}).then((function(e){return e.json()})).catch((function(e){throw e}))}},{key:"showExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e.id,"?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"deleteExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e,"?api_token=").concat(this.API_TOKEN),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){throw e}))}},{key:"getExpensesType",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}}]),e}());t.a=new r},821:function(e,t,n){"use strict";n.r(t);var a=n(158),o=n(159),r=n(162),c=n(161),i=n(160),s=n(1),l=n.n(s),u=n(163),h=n(18),p=n(628),d=n(571),m=n(572),f=n(823),g=n(573),E=n(574),w=n(721),y=n(643),v=n(644),_=n(584),N=n(604),j=n(556),k=n(517),O=n(668),S=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={inputUsername:"",inputPassword:"",errorLogin:!1,auth:null!=localStorage.getItem("token"),loading:!1},o.onLogin=o.onLogin.bind(Object(r.a)(o)),o}return Object(o.a)(n,[{key:"onLogin",value:function(){var e=this;return this.setState({loading:!0,errorLogin:!1}),new Promise((function(t,n){k.a.onLogin(e.state.inputUsername,e.state.inputPassword).then((function(n){n.username&&(localStorage.setItem("auth",JSON.stringify(n)),localStorage.setItem("token",n.api_token),e.props.history.push("/")),"The given data was invalid."!==n.message||e.setState({errorLogin:!0,loading:!1}),t(n)}),(function(t){e.setState({loading:!1}),n(t)}))}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"app flex-row align-items-center"},l.a.createElement(p.a,null,!0===this.state.errorLogin?l.a.createElement("div",{className:"alert alert-warning",role:"alert"},"Error: Credenciales incorrectas"):l.a.createElement("div",null),l.a.createElement(d.a,{className:"justify-content-center"},l.a.createElement(m.a,{md:"8"},!0===this.state.loading?l.a.createElement(O.a,null):"",l.a.createElement(f.a,null,l.a.createElement(g.a,{className:"p-4"},l.a.createElement(E.a,null,l.a.createElement(w.a,null,l.a.createElement("h1",null,"Iniciar Sesi\xf3n"),l.a.createElement("p",{className:"text-muted"},"Ingresa si ya tienes una cuenta"),l.a.createElement(y.a,{className:"mb-3"},l.a.createElement(v.a,{addonType:"prepend"},l.a.createElement(_.a,null,l.a.createElement("i",{className:"icon-user"}))),l.a.createElement(N.a,{type:"text",placeholder:"Usuario",autoComplete:"username",onChange:function(t){return e.setState({inputUsername:t.target.value})}})),l.a.createElement(y.a,{className:"mb-4"},l.a.createElement(v.a,{addonType:"prepend"},l.a.createElement(_.a,null,l.a.createElement("i",{className:"icon-lock"}))),l.a.createElement(N.a,{type:"password",placeholder:"Contrace\xf1a",autoComplete:"current-password",onChange:function(t){return e.setState({inputPassword:t.target.value})}})),l.a.createElement(d.a,null,l.a.createElement(m.a,{xs:"6"},l.a.createElement(j.a,{color:"warning",className:"px-4",onClick:this.onLogin},"Iniciar ses\xf3n")),l.a.createElement(m.a,{xs:"6",className:"text-right"},l.a.createElement(u.Link,{to:"/register"},"Crear una cuenta.")))))),l.a.createElement(g.a,{className:"text-white bg-warning py-5 d-md-down-none",style:{width:"44%"}},l.a.createElement(E.a,{className:"text-center"},l.a.createElement("div",null,l.a.createElement("h2",null,"Crea tu cuenta"),l.a.createElement("p",null,"Registrate y vive una verdadera experiencia para llevar el control de tus finanzas personales"),l.a.createElement(u.Link,{to:"/register"},l.a.createElement(j.a,{color:"warning",className:"mt-3",active:!0,tabIndex:-1},"Registrate Ahora!"))))))))),!0===this.state.auth&&l.a.createElement(h.c,{from:"/",to:"/"}))}}]),n}(s.Component);t.default=S}}]);
//# sourceMappingURL=33.21ff76ea.chunk.js.map