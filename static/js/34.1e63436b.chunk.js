(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[34],{437:function(e,a,t){"use strict";const n=()=>{const e=window.location.host;let a=null;return"localhost:3000"===e&&(a="http://localhost/coysa-laravel6/public/api/"),"johnssther.github.io"===e&&(a="https://x.johnr.top/api/"),"http://159.65.226.161:3000"===e&&(a="http://localhost/coysa-laravel6/public/api/"),a="https://x.johnr.top/api/",{URL:a,API_TOKEN:localStorage.getItem("token")}};a.a={URL:n().URL,API_TOKEN:n().API_TOKEN,id:null==JSON.parse(localStorage.getItem("auth"))?null:JSON.parse(localStorage.getItem("auth")).id}},976:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(139),s=t(14),o=t(643),c=t(507),i=t(508),m=t(945),u=t(607),p=t(608),h=t(781),d=t(644),g=t(645),E=t(583),w=t(620),N=t(584),y=t(437);var v=t(780);class S extends n.Component{constructor(e){super(e),this.state={inputUsername:"",inputPassword:"",errorLogin:!1,auth:null!=localStorage.getItem("token"),loading:!1},this.onLogin=this.onLogin.bind(this)}async onLogin(){this.setState({loading:!0,errorLogin:!1});try{const e=await(async(e,a)=>{const t=await fetch("".concat(y.a.URL,"login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,password:a})});return await t.json()})(this.state.inputUsername,this.state.inputPassword);e.username&&(localStorage.setItem("auth",JSON.stringify(e)),localStorage.setItem("token",e.api_token),this.props.history.push("/")),"The given data was invalid."===e.message&&this.setState({errorLogin:!0,loading:!1})}catch(e){this.setState({loading:!1}),console.log(e)}}render(){return r.a.createElement("div",{className:"app flex-row align-items-center"},r.a.createElement(o.a,null,!0===this.state.errorLogin?r.a.createElement("div",{className:"alert alert-warning",role:"alert"},"Error: Credenciales incorrectas"):r.a.createElement("div",null),r.a.createElement(c.a,{className:"justify-content-center"},r.a.createElement(i.a,{md:"8"},!0===this.state.loading?r.a.createElement(v.a,null):"",r.a.createElement(m.a,null,r.a.createElement(u.a,{className:"p-4"},r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement("h1",null,"Iniciar Sesi\xf3n"),r.a.createElement("p",{className:"text-muted"},"Ingresa si ya tienes una cuenta"),r.a.createElement(d.a,{className:"mb-3"},r.a.createElement(g.a,{addonType:"prepend"},r.a.createElement(E.a,null,r.a.createElement("i",{className:"icon-user"}))),r.a.createElement(w.a,{type:"text",placeholder:"Usuario",autoComplete:"username",onChange:e=>this.setState({inputUsername:e.target.value})})),r.a.createElement(d.a,{className:"mb-4"},r.a.createElement(g.a,{addonType:"prepend"},r.a.createElement(E.a,null,r.a.createElement("i",{className:"icon-lock"}))),r.a.createElement(w.a,{type:"password",placeholder:"Contrace\xf1a",autoComplete:"current-password",onChange:e=>this.setState({inputPassword:e.target.value})})),r.a.createElement(c.a,null,r.a.createElement(i.a,{xs:"6"},r.a.createElement(N.a,{color:"warning",className:"px-4",onClick:this.onLogin},"Iniciar ses\xf3n")),r.a.createElement(i.a,{xs:"6",className:"text-right"},r.a.createElement(l.Link,{to:"/register"},"Crear una cuenta."),r.a.createElement("br",null),r.a.createElement("a",{href:"http://coysa.herokuapp.com/password/reset",target:"blank"},"Olvid\xe9 mi contrase\xf1a")))))),r.a.createElement(u.a,{className:"text-white py-5 d-md-down-none",style:{background:"#FFA73D",width:"44%"}},r.a.createElement(p.a,{className:"text-center"},r.a.createElement("div",null,r.a.createElement("h2",null,"Crea tu cuenta"),r.a.createElement("p",null,"Registrate y vive una verdadera experiencia para llevar el control de tus finanzas personales"),r.a.createElement(l.Link,{to:"/register"},r.a.createElement(N.a,{color:"warning",className:"mt-3",active:!0,tabIndex:-1},"Registrate Ahora!"))))))))),!0===this.state.auth&&r.a.createElement(s.c,{from:"/",to:"/"}))}}a.default=S}}]);
//# sourceMappingURL=34.1e63436b.chunk.js.map