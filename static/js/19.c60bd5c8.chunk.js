(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[19],{1010:function(e,t,a){"use strict";a.r(t);var n=a(235),r=a(236),o=a(239),s=a(237),c=a(240),i=a(238),l=a(2),m=a.n(l),p=a(925),u=a(917),h=a(918),d=a(922),f=a(923),g=a(965),E=a(930),w=a(931),_=a(914),y=a(932),b=a(920),v=a(912),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={name:"",username:"",email:"",password:"",password_confirmation:"",name_error:"",errors_example:""},a.validateForm=a.validateForm.bind(Object(c.a)(a)),a.registerUser=a.registerUser.bind(Object(c.a)(a)),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){console.log("usuario registrado")}},{key:"validateForm",value:function(e){var t=e.target.name,a=e.target.value;switch(t){case"name":this.setState({name:a});break;case"username":this.setState({username:a});break;case"email":this.setState({email:a});break;case"password":this.setState({password:a});break;case"password_confirmation":this.setState({password_confirmation:a})}}},{key:"registerUser",value:function(){var e=this,t={name:this.state.name,username:this.state.username,email:this.state.email,password:this.state.password,password_confirmation:this.state.password_confirmation};!0===function(){var a=!!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t.email),n=t.name.length>4,r=t.username.length>4,o=t.password.length>7;return n?r?a?o?!!(t.password===t.password_confirmation)||(e.setState({errors_example:"La contrace\xf1as con considen"}),!1):(e.setState({errors_example:"La contrace\xf1a debe tener minimo 8 caracteres"}),!1):(e.setState({errors_example:"Correo invalido"}),!1):(e.setState({errors_example:"Usuario minimo 4 caracteres"}),!1):(e.setState({errors_example:"Nombre minimo 4 caracteres"}),!1)}()&&(this.setState({errors_example:"Campos validos, puede continuar"}),v.a.registerUser(t),this.props.history.push("/login"))}},{key:"render",value:function(){return m.a.createElement("div",{className:"app flex-row align-items-center"},m.a.createElement(p.a,null,m.a.createElement(u.a,{className:"justify-content-center"},m.a.createElement(h.a,{md:"9",lg:"7",xl:"6"},m.a.createElement(d.a,{className:"mx-4"},m.a.createElement(f.a,{className:"p-4"},m.a.createElement(g.a,null,m.a.createElement("h1",null,"Registrate"),m.a.createElement("p",{className:"text-muted"}),"Crea tu cuenta",m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(w.a,{addonType:"prepend"},m.a.createElement(_.a,null,m.a.createElement("i",{className:"icon-user"}))),m.a.createElement(y.a,{type:"text",placeholder:"Ingresa tu Nombre",autoComplete:"name",name:"name",onChange:this.validateForm})),m.a.createElement("p",null,this.state.name_error),m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(w.a,{addonType:"prepend"},m.a.createElement(_.a,null,m.a.createElement("i",{className:"icon-user"}))),m.a.createElement(y.a,{type:"text",placeholder:"Ingresa un usuario",autoComplete:"username",name:"username",onChange:this.validateForm})),m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(w.a,{addonType:"prepend"},m.a.createElement(_.a,null,"@")),m.a.createElement(y.a,{type:"text",placeholder:"Ingresa correo electr\xf3nico",autoComplete:"email",name:"email",onChange:this.validateForm})),m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(w.a,{addonType:"prepend"},m.a.createElement(_.a,null,m.a.createElement("i",{className:"icon-lock"}))),m.a.createElement(y.a,{type:"password",placeholder:"Ingresa Contrace\xf1a",autoComplete:"new-password",name:"password",onChange:this.validateForm})),m.a.createElement(E.a,{className:"mb-4"},m.a.createElement(w.a,{addonType:"prepend"},m.a.createElement(_.a,null,m.a.createElement("i",{className:"icon-lock"}))),m.a.createElement(y.a,{type:"password",placeholder:"Repita tu  contrace\xf1a",autoComplete:"new-password",name:"password_confirmation",onChange:this.validateForm})),m.a.createElement(b.a,{color:"success",block:!0,onClick:this.registerUser},"Registrarme"),m.a.createElement("p",null,this.state.errors_example))))))))}}]),t}(l.Component);t.default=j},912:function(e,t,a){"use strict";var n=a(235),r=a(236),o=function(){function e(){Object(n.a)(this,e);var t=window.location.host;"localhost:3000"===t&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===t&&(this.URL="http://coysa.herokuapp.com/api/"),this.API_TOKEN=localStorage.getItem("token")}return Object(r.a)(e,[{key:"onLogin",value:function(e,t){return fetch("".concat(this.URL,"login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"registerUser",value:function(e){return fetch("".concat(this.URL,"register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,username:e.username,password:e.password,password_confirmation:e.password_confirmation})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"saveExpenses",value:function(e){return fetch("".concat(this.URL,"gastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,gasto:e.gasto,cantidad:e.cantidad,precio_unidad:e.precioUnidad,precio_total:e.precioTotal,fecha:e.Fecha,user_id:e.id_usuario,tipogasto_id:e.tipogasto_id})}).then((function(e){return console.log("objeto guardado"),e.json()})).catch((function(e){throw e}))}},{key:"getExpenses",value:function(){var e=window.location;return console.log(e,"oo"),fetch("".concat(this.URL,"gastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"getTipogastos",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"deleteExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){throw e}))}}]),e}();t.a=new o}}]);
//# sourceMappingURL=19.c60bd5c8.chunk.js.map