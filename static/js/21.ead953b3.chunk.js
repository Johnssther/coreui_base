(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[21],{1017:function(e,a,t){"use strict";t.r(a);var n=t(235),r=t(236),o=t(239),s=t(237),c=t(240),i=t(238),l=t(2),m=t.n(l),p=t(925),u=t(918),h=t(919),d=t(913),f=t(914),g=t(971),E=t(929),w=t(930),y=t(915),_=t(931),b=t(921),v=t(911),j=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(o.a)(this,Object(s.a)(a).call(this,e))).state={name:"",username:"",email:"",password:"",password_confirmation:"",name_error:"",errors_example:""},t.validateForm=t.validateForm.bind(Object(c.a)(t)),t.registerUser=t.registerUser.bind(Object(c.a)(t)),t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){console.log("usuario registrado")}},{key:"validateForm",value:function(e){var a=e.target.name,t=e.target.value;switch(a){case"name":this.setState({name:t});break;case"username":this.setState({username:t});break;case"email":this.setState({email:t});break;case"password":this.setState({password:t});break;case"password_confirmation":this.setState({password_confirmation:t})}}},{key:"registerUser",value:function(){var e=this,a={name:this.state.name,username:this.state.username,email:this.state.email,password:this.state.password,password_confirmation:this.state.password_confirmation};!0===function(){var t=!!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(a.email),n=a.name.length>4,r=a.username.length>4,o=a.password.length>7;return n?r?t?o?!!(a.password===a.password_confirmation)||(e.setState({errors_example:"Las contrase\xf1as con considen"}),!1):(e.setState({errors_example:"La contrase\xf1a debe tener minimo 8 caracteres"}),!1):(e.setState({errors_example:"Correo invalido"}),!1):(e.setState({errors_example:"Usuario minimo 4 caracteres"}),!1):(e.setState({errors_example:"Nombre minimo 4 caracteres"}),!1)}()&&(this.setState({errors_example:"Campos validos, puede continuar"}),v.a.registerUser(a),this.props.history.push("/login"))}},{key:"render",value:function(){return m.a.createElement("div",{className:"app flex-row align-items-center"},m.a.createElement(p.a,null,m.a.createElement(u.a,{className:"justify-content-center"},m.a.createElement(h.a,{md:"9",lg:"7",xl:"6"},m.a.createElement(d.a,{className:"mx-4"},m.a.createElement(f.a,{className:"p-4"},m.a.createElement(g.a,null,m.a.createElement("h1",null,"Registrate"),m.a.createElement("p",{className:"text-muted"}),"Crea tu cuenta",m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(w.a,{addonType:"prepend"},m.a.createElement(y.a,null,m.a.createElement("i",{className:"icon-user"}))),m.a.createElement(_.a,{type:"text",placeholder:"Ingresa tu Nombre",autoComplete:"name",name:"name",onChange:this.validateForm})),m.a.createElement("p",null,this.state.name_error),m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(w.a,{addonType:"prepend"},m.a.createElement(y.a,null,m.a.createElement("i",{className:"icon-user"}))),m.a.createElement(_.a,{type:"text",placeholder:"Ingresa un usuario",autoComplete:"username",name:"username",onChange:this.validateForm})),m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(w.a,{addonType:"prepend"},m.a.createElement(y.a,null,"@")),m.a.createElement(_.a,{type:"text",placeholder:"Ingresa correo electr\xf3nico",autoComplete:"email",name:"email",onChange:this.validateForm})),m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(w.a,{addonType:"prepend"},m.a.createElement(y.a,null,m.a.createElement("i",{className:"icon-lock"}))),m.a.createElement(_.a,{type:"password",placeholder:"Ingresa Contrase\xf1a",autoComplete:"new-password",name:"password",onChange:this.validateForm})),m.a.createElement(E.a,{className:"mb-4"},m.a.createElement(w.a,{addonType:"prepend"},m.a.createElement(y.a,null,m.a.createElement("i",{className:"icon-lock"}))),m.a.createElement(_.a,{type:"password",placeholder:"Repita tu  contrase\xf1a",autoComplete:"new-password",name:"password_confirmation",onChange:this.validateForm})),m.a.createElement(b.a,{color:"primary",block:!0,onClick:this.registerUser},"Registrarme"),m.a.createElement("p",null,this.state.errors_example))))))))}}]),a}(l.Component);a.default=j},911:function(e,a,t){"use strict";var n=t(235),r=t(236),o=function(){function e(){Object(n.a)(this,e);var a=window.location.host;"localhost:3000"===a&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===a&&(this.URL="http://coysa.herokuapp.com/api/"),this.API_TOKEN=localStorage.getItem("token")}return Object(r.a)(e,[{key:"onLogin",value:function(e,a){return fetch("".concat(this.URL,"login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,password:a})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"registerUser",value:function(e){return fetch("".concat(this.URL,"register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,username:e.username,password:e.password,password_confirmation:e.password_confirmation})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"saveExpenses",value:function(e){return fetch("".concat(this.URL,"gastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,gasto:e.gasto,cantidad:e.cantidad,precio_unidad:e.precioUnidad,precio_total:e.precioTotal,fecha:e.Fecha,user_id:e.id_usuario,tipogasto_id:e.tipogasto_id})}).then((function(e){return console.log("objeto guardado"),e.json()})).catch((function(e){throw e}))}},{key:"getExpenses",value:function(){var e=window.location;return console.log(e,"oo"),fetch("".concat(this.URL,"gastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"getTipogastos",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"deleteExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){throw e}))}}]),e}();a.a=new o}}]);
//# sourceMappingURL=21.ead953b3.chunk.js.map