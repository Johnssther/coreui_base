(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[18],{1007:function(e,t,a){"use strict";a.r(t);var n=a(229),o=a(230),r=a(233),i=a(231),s=a(235),l=a(232),c=a(3),u=a.n(c),d=a(934),p=a(936),g=a.n(p),h=a(940),m=a(901),f=a(1010),E=a(993),v=a(994),b=a(995),C=a(904),y=a(902),O=a(906),k=a(933),w=a(907),T=a(998),j=a(999),S=a(915),x=a(943),N=a(1009),P=a(1015),_=a(996),G=a(987),U=a(969),F=a.n(U),I=a(1002),D=a(1e3),A=(c.Component,{header:{borderColor:"transparent"},rows:{spacing:"spaced",spacingBorderRadius:"50px",spacingMargin:"3px",borderColor:"rgba(0,0,0,.12)",backgroundColor:"white",height:"52px"},cells:{cellPadding:"48px"},footer:{separatorStyle:"none"}}),R=[{cell:function(e){return u.a.createElement("button",null,"eliminar")},allowOverflow:!0,button:!0,width:"56px"},{name:"Fecha",selector:"fecha",sortable:!0,cell:function(e){return u.a.createElement("div",null,u.a.createElement("div",{style:{fontWeight:700}},e.fecha),e.summary)}},{name:"Cantidad",selector:"cantidad",sortable:!0},{name:"Gasto",selector:"gasto",sortable:!0},{name:"Precio Unid.",selector:"preciounid",sortable:!0},{name:"Precio Total",selector:"precio",sortable:!0}],Y=Object(D.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),L=function(){var e=Y();return u.a.createElement("div",{className:e.root},u.a.createElement(I.a,{color:"secondary"}))},J=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement(O.a,null,u.a.createElement(k.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Gastos diarios"),u.a.createElement("small",null," Gastos ")),u.a.createElement(w.a,null,u.a.createElement(F.a,{title:this.props.title,columns:R,data:this.props.gastos,highlightOnHover:!0,actions:u.a.createElement(C.a,{key:"add",onClick:this.props.handleClick},"Nuevo"),pagination:!0,customTheme:A,expandableRows:!0,expandableRowsComponent:u.a.createElement("div",null,"Detalle de los gastos"),expandOnRowClicked:!0,progressPending:this.props.loading,progressComponent:u.a.createElement(L,null),progressShowTableHead:!0})))}}]),t}(c.Component),M=a(897),$=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).tipoGasto=function(e,t){console.log(e.value),a.setState({inputTipogasto:e.value})},a.state={ingresargastos:!1,data:[],gastoTotal:0,inputFecha:"",inputCantidad:"",inputGasto:"",inputPrecioUnidad:"",inputPrecioTotal:"",inputTipogasto:"",value:g()(),options:[],danger:!1,textError:"",loading:!0,dropdownOpen:new Array(6).fill(!1)},a.disabledRanges=[{color:"green",start:g()(),end:g()()}],a.handleClick=a.handleClick.bind(Object(s.a)(a)),a.addExpenses=a.addExpenses.bind(Object(s.a)(a)),a.tipoGasto=a.tipoGasto.bind(Object(s.a)(a)),a.toggleDanger=a.toggleDanger.bind(Object(s.a)(a)),a.toggle=a.toggle.bind(Object(s.a)(a)),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getGastos(),M.a.getTipogastos().then((function(t){var a=t.map((function(e){return{value:e.id,label:e.gasto}}));e.setState({options:a})}))}},{key:"toggle",value:function(e){var t=this.state.dropdownOpen.map((function(t,a){return a===e&&!t}));this.setState({dropdownOpen:t})}},{key:"getGastos",value:function(){var e=this;this.setState({data:[]}),setTimeout((function(){M.a.getExpenses().then((function(t){console.log(t);var a=t.map((function(e){return e.precio_total})),n=t.map((function(e){return{fecha:e.fecha,cantidad:e.cantidad,gasto:e.gasto,preciounid:"$ "+(new Intl.NumberFormat).format(e.precio_unidad),precio:"$ "+(new Intl.NumberFormat).format(e.precio_total)}}));if(a.length>0)var o=a.reduce((function(e,t){return e+t}));else o=0;e.setState({data:n,gastoTotal:o,loading:!1})}))}),500)}},{key:"handleClick",value:function(){this.setState({ingresargastos:!this.state.ingresargastos,loading:!this.state.loading}),this.getGastos()}},{key:"addExpenses",value:function(){var e=this;!function(t){""===t.tipogasto_id?e.setState({danger:!e.state.danger,textError:"Debe seleccionar el tipo de gasto"}):""===t.gasto?e.setState({danger:!e.state.danger,textError:"Debe ingresar un gasto en el campo gasto"}):""===t.cantidad?e.setState({danger:!e.state.danger,textError:"Ingrese una cantidad"}):""===t.precioUnidad?e.setState({danger:!e.state.danger,textError:"Ingrese el costo por unidad"}):(M.a.saveExpenses(t),e.handleClick())}({gasto:this.state.inputGasto,cantidad:this.state.inputCantidad,precioUnidad:this.state.inputPrecioUnidad,precioTotal:""===this.state.inputPrecioTotal?this.state.inputCantidad*this.state.inputPrecioUnidad:this.state.inputPrecioTotal,Fecha:this.state.value.format("YYYY/M/D"),id_usuario:JSON.parse(localStorage.getItem("auth")).id,tipogasto_id:this.state.inputTipogasto})}},{key:"toggleDanger",value:function(){this.setState({danger:!this.state.danger}),console.log("sesion cerrada")}},{key:"render",value:function(){var e=this;if(!0===this.state.ingresargastos)return u.a.createElement(m.a,null,u.a.createElement(f.a,{isOpen:this.state.danger,toggle:this.toggleDanger,className:"modal-danger "+this.props.className},u.a.createElement(E.a,{toggle:this.toggleDanger},"Error al intentar registrar este gasto"),u.a.createElement(v.a,null,this.state.textError),u.a.createElement(b.a,null,u.a.createElement(C.a,{color:"danger",onClick:this.toggleDanger},"Ok")," ")),u.a.createElement(y.a,{xs:"12",sm:"6"},u.a.createElement(O.a,null,u.a.createElement(k.a,null,u.a.createElement("strong",null,"Nuevo gasto")," generado"),u.a.createElement(w.a,null,u.a.createElement(d.Calendar,{style:{backgroundColo:"red"},onChange:function(t){return e.setState({value:t})},value:this.state.value}),u.a.createElement("h6",null,u.a.createElement("strong",null,"Fecha: "),this.state.value.format("YYYY/M/D"))))),u.a.createElement(y.a,{xs:"12",sm:"6"},u.a.createElement(O.a,null,u.a.createElement(k.a,null,u.a.createElement("strong",null,"Ingresar gastos")," diarios",u.a.createElement(C.a,{style:{marginLeft:137},key:"add",onClick:this.handleClick},"Ver Mis gastos")),u.a.createElement(w.a,null,u.a.createElement(T.a,null,u.a.createElement(j.a,{htmlFor:"inputFecha"},"Fecha"),u.a.createElement(S.a,{type:"text",id:"inputFecha",value:this.state.value.format("YYYY/M/D"),onChange:function(t){return e.setState({inputFecha:t.target.value})}})),u.a.createElement(T.a,null,u.a.createElement(j.a,{htmlFor:"inputTipogasto"},"Tipo Gasto"),u.a.createElement(h.a,{options:this.state.options,onChange:this.tipoGasto})),u.a.createElement(T.a,null,u.a.createElement(j.a,{htmlFor:"inputGasto"},"Gasto"),u.a.createElement(S.a,{placeholder:"Ingresar Gasto",type:"text",id:"inputGasto",onChange:function(t){return e.setState({inputGasto:t.target.value})}})),u.a.createElement(T.a,null,u.a.createElement(j.a,{htmlFor:"inputCantidad"},"Cantidad"),u.a.createElement(S.a,{placeholder:"Numero Total",type:"text",id:"inputCantidad",onChange:function(t){return e.setState({inputCantidad:t.target.value})}})),u.a.createElement(T.a,null,u.a.createElement(j.a,{htmlFor:"inputPrecioUnidad"},"Precio unidad"),u.a.createElement(S.a,{placeholder:"$ Costo Unidad",type:"text",id:"inputPrecioUnidad",onChange:function(t){return e.setState({inputPrecioUnidad:t.target.value})}})),u.a.createElement(T.a,null,u.a.createElement(j.a,{htmlFor:"inputPrecioTotal"},"Precio Total"),u.a.createElement(S.a,{placeholder:"$ Costo Total (opcional)",type:"text",id:"inputPrecioTotal",onChange:function(t){return e.setState({inputPrecioTotal:t.target.value})}})),u.a.createElement(C.a,{key:"add",onClick:this.addExpenses},"Registrar")))),u.a.createElement(O.a,null,u.a.createElement(k.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Dropdowns"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement("a",{href:"https://reactstrap.github.io/components/dropdowns/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},u.a.createElement("small",{className:"text-muted"},"docs")))),u.a.createElement(x.a,{isOpen:this.state.dropdownOpen[0],toggle:function(){e.toggle(0)}},u.a.createElement(N.a,{caret:!0},"Acciones"),u.a.createElement(P.a,null,u.a.createElement(_.a,{header:!0},"Acci\xf3n"),u.a.createElement(_.a,null,"Actualizar"),u.a.createElement(_.a,null,"Eliminar"),u.a.createElement(_.a,null,"Another Action")))));var t=u.a.createElement("small",null,"Gastos diarios. Total: ",u.a.createElement(G.a,{className:"mr-1",href:"#",color:"danger"},"$ ".concat((new Intl.NumberFormat).format(this.state.gastoTotal))));return u.a.createElement(J,{gastos:this.state.data,loading:this.state.loading,title:t,handleClick:this.handleClick})}}]),t}(c.Component);t.default=$},897:function(e,t,a){"use strict";var n=a(229),o=a(230),r=function(){function e(){Object(n.a)(this,e);var t=window.location.host;"localhost:3000"===t&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===t&&(this.URL="http://coysa.herokuapp.com/api/"),this.API_TOKEN=localStorage.getItem("token")}return Object(o.a)(e,[{key:"onLogin",value:function(e,t){return fetch("".concat(this.URL,"login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"registerUser",value:function(e){return fetch("".concat(this.URL,"register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,username:e.username,password:e.password,password_confirmation:e.password_confirmation})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"saveExpenses",value:function(e){fetch("".concat(this.URL,"gastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,gasto:e.gasto,cantidad:e.cantidad,precio_unidad:e.precioUnidad,precio_total:e.precioTotal,fecha:e.Fecha,user_id:e.id_usuario,tipogasto_id:e.tipogasto_id})}).then((function(e){return e.json()})).catch((function(e){throw e}))}},{key:"getExpenses",value:function(){var e=window.location;return console.log(e,"oo"),fetch("".concat(this.URL,"gastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"getTipogastos",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}}]),e}();t.a=new r}}]);
//# sourceMappingURL=18.626cc9be.chunk.js.map