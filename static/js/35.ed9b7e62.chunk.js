(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[35],{437:function(e,a,t){"use strict";const r=()=>{const e=window.location.host;let a=null;return"localhost:3000"===e&&(a="http://localhost/coysa-laravel6/public/api/"),"johnssther.github.io"===e&&(a="https://x.johnr.top/api/"),"http://159.65.226.161:3000"===e&&(a="http://localhost/coysa-laravel6/public/api/"),a="https://x.johnr.top/api/",{URL:a,API_TOKEN:localStorage.getItem("token")}};a.a={URL:r().URL,API_TOKEN:r().API_TOKEN,id:null==JSON.parse(localStorage.getItem("auth"))?null:JSON.parse(localStorage.getItem("auth")).id}},975:function(e,a,t){"use strict";t.r(a);var r=t(0),s=t.n(r),n=t(643),o=t(507),l=t(508),m=t(607),i=t(608),c=t(781),p=t(644),d=t(645),h=t(583),u=t(620),E=t(584),g=t(139),w=t(437);class b extends r.Component{constructor(e){super(e),this.state={name:"",username:"",email:"",password:"",password_confirmation:"",name_error:"",errors_example:""},this.validateForm=this.validateForm.bind(this),this.registerUser=this.registerUser.bind(this)}componentDidMount(){}validateForm(e){let a=e.target.name,t=e.target.value;switch(a){case"name":this.setState({name:t});break;case"username":this.setState({username:t});break;case"email":this.setState({email:t});break;case"password":this.setState({password:t});break;case"password_confirmation":this.setState({password_confirmation:t})}}async registerUser(){let e={name:this.state.name,username:this.state.username,email:this.state.email,password:this.state.password,password_confirmation:this.state.password_confirmation};!0===(()=>{let a=!!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e.email),t=e.name.length>4,r=e.username.length>4,s=e.password.length>7;return t?r?a?s?!!(e.password===e.password_confirmation)||(this.setState({errors_example:"Las contrase\xf1as con considen"}),!1):(this.setState({errors_example:"La contrase\xf1a debe tener minimo 8 caracteres"}),!1):(this.setState({errors_example:"Correo invalido"}),!1):(this.setState({errors_example:"Usuario minimo 4 caracteres"}),!1):(this.setState({errors_example:"Nombre minimo 4 caracteres"}),!1)})()&&(this.setState({errors_example:"Campos validos, puede continuar"}),await(async e=>{const a=await fetch("".concat(w.a.URL,"register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,username:e.username,password:e.password,password_confirmation:e.password_confirmation})});return await a.json()})(e),this.props.history.push("/login"))}render(){return s.a.createElement("div",{className:"app flex-row align-items-center"},s.a.createElement(n.a,null,s.a.createElement(o.a,{className:"justify-content-center"},s.a.createElement(l.a,{md:"9",lg:"7",xl:"6"},s.a.createElement(m.a,{className:"mx-4"},s.a.createElement(i.a,{className:"p-4"},s.a.createElement(c.a,null,s.a.createElement("h1",null,"Registrate"),s.a.createElement(g.Link,{to:"/login"},"Regresar al Login."),s.a.createElement("br",null),s.a.createElement("p",{className:"text-muted"}),"Crea tu cuenta",s.a.createElement(p.a,{className:"mb-3"},s.a.createElement(d.a,{addonType:"prepend"},s.a.createElement(h.a,null,s.a.createElement("i",{className:"icon-user"}))),s.a.createElement(u.a,{type:"text",placeholder:"Ingresa tu Nombre",autoComplete:"name",name:"name",onChange:this.validateForm})),s.a.createElement("p",null,this.state.name_error),s.a.createElement(p.a,{className:"mb-3"},s.a.createElement(d.a,{addonType:"prepend"},s.a.createElement(h.a,null,s.a.createElement("i",{className:"icon-user"}))),s.a.createElement(u.a,{type:"text",placeholder:"Ingresa un usuario",autoComplete:"username",name:"username",onChange:this.validateForm})),s.a.createElement(p.a,{className:"mb-3"},s.a.createElement(d.a,{addonType:"prepend"},s.a.createElement(h.a,null,"@")),s.a.createElement(u.a,{type:"text",placeholder:"Ingresa correo electr\xf3nico",autoComplete:"email",name:"email",onChange:this.validateForm})),s.a.createElement(p.a,{className:"mb-3"},s.a.createElement(d.a,{addonType:"prepend"},s.a.createElement(h.a,null,s.a.createElement("i",{className:"icon-lock"}))),s.a.createElement(u.a,{type:"password",placeholder:"Ingresa Contrase\xf1a",autoComplete:"new-password",name:"password",onChange:this.validateForm})),s.a.createElement(p.a,{className:"mb-4"},s.a.createElement(d.a,{addonType:"prepend"},s.a.createElement(h.a,null,s.a.createElement("i",{className:"icon-lock"}))),s.a.createElement(u.a,{type:"password",placeholder:"Repita tu  contrase\xf1a",autoComplete:"new-password",name:"password_confirmation",onChange:this.validateForm})),s.a.createElement(E.a,{style:{background:"#FFA73D"},block:!0,onClick:this.registerUser},"Registrarme"),s.a.createElement("p",null,this.state.errors_example))))))))}}a.default=b}}]);
//# sourceMappingURL=35.ed9b7e62.chunk.js.map