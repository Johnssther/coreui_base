(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[19],{1037:function(e,t,a){"use strict";a.r(t);var n=a(235),o=a(236),i=a(238),r=a(237),l=a(240),s=a(239),c=a(2),u=a.n(c),g=a(923),d=a.n(g),m=a(1013),p=(a(938),a(958)),h=a.n(p),f=a(1035),E=a(1031),b=a(913),v=a(929),C=a(914),y=a(940),k=a(910),O=a(916),S=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={delete:""},a.delete=a.delete.bind(Object(l.a)(a)),a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"delete",value:function(){var e=this;!0===window.confirm("\xbfRealmente deseas eliminar este gasto? "+this.props.data.id)&&k.a.deleteExpense(this.props.data.id).then((function(t){console.log(t),e.setState({delete:""})}))}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(b.a,null,u.a.createElement(v.a,null,"Codigo: ",this.props.data.id),u.a.createElement(C.a,null,"Gasto: ",this.props.data.gasto," ",u.a.createElement("br",null),"Acciones:",u.a.createElement(O.a,{key:"delete",className:"btn-sm btn-danger",onClick:this.delete},"Eliminar Gasto"))))}}]),t}(c.Component),j=a(930),N=a(962),x=a(1002),T=a(985),w=a(986),P=a(987),_=a(1028),L=a(1029),F=a(935),I=a(1030),U=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).tipoGasto=function(e,t){a.setState({inputTipogasto:e.value})},a.state={fecha:"",inputFecha:d()(),inputGasto:"",inputPrecioUnidad:"",inputCantidad:"",inputPrecioTotal:"",inputTipogasto:"",options:[],loading:!0,large:!1,textError:"No ha ingresado ningun gasto"},a.addExpenses=a.addExpenses.bind(Object(l.a)(a)),a.toggleLarge=a.toggleLarge.bind(Object(l.a)(a)),a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.getTipogastos().then((function(t){var a=t.map((function(e){return{value:e.id,label:e.gasto}}));e.setState({options:a,loading:!1,textError:""})}))}},{key:"addExpenses",value:function(){var e={gasto:this.state.inputGasto,cantidad:this.state.inputCantidad,precioUnidad:this.state.inputPrecioUnidad,precioTotal:""===this.state.inputPrecioTotal?this.state.inputCantidad*this.state.inputPrecioUnidad:this.state.inputPrecioTotal,Fecha:this.state.inputFecha.format("YYYY/M/D"),id_usuario:JSON.parse(localStorage.getItem("auth")).id,tipogasto_id:this.state.inputTipogasto};return""===e.Fecha?(this.setState({textError:"Seleccione una fecha por favor"}),!1):""===e.tipogasto_id?(this.setState({textError:"Seleccione el tipo de gasto por favor"}),!1):""===e.cantidad?(this.setState({textError:"Debe ingresar la cantidad"}),!1):""===e.gasto?(this.setState({textError:"No ha ingresado ningun gasto"}),!1):""===e.precioUnidad?(this.setState({textError:"No ha ingresado el precio por unidad"}),!1):(this.props.addExpense(e),!0)}},{key:"toggleLarge",value:function(){this.setState({large:!this.state.large,textError:"Ingrese el costo por unidad"})}},{key:"render",value:function(){var e=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement(x.a,{isOpen:this.state.large,toggle:this.toggleLarge,className:"modal-danger "+this.props.className},u.a.createElement(T.a,{toggle:this.toggleLarge},"Calendario"),u.a.createElement(w.a,null,u.a.createElement(j.Calendar,{style:{backgroundColo:"red"},onChange:function(t){return e.setState({inputFecha:t})},value:this.state.inputFecha}),u.a.createElement("h6",null,u.a.createElement("strong",null,"Fecha: "),this.state.inputFecha.format("YYYY/M/D"))),u.a.createElement(P.a,null,u.a.createElement(O.a,{color:"primary",onClick:this.toggleLarge},"Ok")," ")),u.a.createElement(b.a,null,u.a.createElement(C.a,null,u.a.createElement(_.a,null,u.a.createElement(L.a,{htmlFor:"inputFecha"},"Fecha"),u.a.createElement(F.a,{onClick:this.toggleLarge,type:"text",id:"inputFecha",value:this.state.inputFecha.format("YYYY/M/D"),onChange:function(e){return null}})),u.a.createElement(_.a,null,u.a.createElement(L.a,{htmlFor:"inputTipogasto"},"Tipo Gasto"),u.a.createElement(N.a,{options:this.state.options,onChange:this.tipoGasto}),!0===this.state.loading?u.a.createElement(I.a,{color:"success"}):""),u.a.createElement(_.a,null,u.a.createElement(L.a,{htmlFor:"inputCantidad"},"Cantidad"),u.a.createElement(F.a,{placeholder:"Numero Total",type:"text",id:"inputCantidad",onChange:function(t){return e.setState({inputCantidad:t.target.value})}})),u.a.createElement(_.a,null,u.a.createElement(L.a,{htmlFor:"inputGasto"},"Gasto"),u.a.createElement(F.a,{placeholder:"Ingresar Gasto",type:"text",id:"inputGasto",onChange:function(t){return e.setState({inputGasto:t.target.value})}})),u.a.createElement(_.a,null,u.a.createElement(L.a,{htmlFor:"inputPrecioUnidad"},"Precio unidad"),u.a.createElement(F.a,{placeholder:"$ Costo Unidad",type:"text",id:"inputPrecioUnidad",onChange:function(t){return e.setState({inputPrecioUnidad:t.target.value})}})),u.a.createElement(_.a,null,u.a.createElement(L.a,{htmlFor:"inputPrecioTotal"},"Precio Total"),u.a.createElement(F.a,{placeholder:"$ Costo Total (opcional)",type:"text",id:"inputPrecioTotal",onChange:function(t){return e.setState({inputPrecioTotal:t.target.value})}})),u.a.createElement(O.a,{color:"primary",key:"add",onClick:this.addExpenses},"Guardar"),u.a.createElement("h6",null,this.state.textError))))}}]),t}(c.Component),D={header:{borderColor:"transparent"},rows:{spacing:"spaced",spacingBorderRadius:"50px",spacingMargin:"3px",borderColor:"rgba(0,0,0,.12)",backgroundColor:"white",height:"52px"},cells:{cellPadding:"48px"},footer:{separatorStyle:"none"}},G=[{name:"Fecha",selector:"fecha",sortable:!0,cell:function(e){return u.a.createElement("div",null,u.a.createElement("div",{style:{fontWeight:700}},e.fecha),e.summary)}},{name:"Tipo de gasto",selector:"tipo_gasto",sortable:!0},{name:"Cantidad",selector:"cantidad",sortable:!0},{name:"Gasto",selector:"gasto",sortable:!0},{name:"Precio Unid.",selector:"preciounid",sortable:!0},{name:"Precio Total",selector:"precio",sortable:!0},{cell:function(e){return u.a.createElement(u.a.Fragment,null)},allowOverflow:!0,button:!0,width:"56px"}],q=function(){var e=A();return u.a.createElement("div",{className:e.root},u.a.createElement(f.a,{color:"secondary"}))},R=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement(b.a,null,u.a.createElement(v.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Gastos diarios"),u.a.createElement("small",null," Gastos ")),u.a.createElement(C.a,null,u.a.createElement(h.a,{title:this.props.title,columns:G,data:this.props.gastos,highlightOnHover:!0,actions:u.a.createElement(y.a,{modal:"toggleLarge",name:"Nuevo",title:"Ingresar nuevo gasto",cerrarmodal:this.props.cerrarmodal}," ",u.a.createElement(U,{addExpense:this.props.addExpense,handleClick:this.props.handleClick})," "),pagination:!0,customTheme:D,expandableRows:!0,expandableRowsComponent:u.a.createElement(S,{data:this.props.gastos}),expandOnRowClicked:!0,progressPending:this.props.loading,progressComponent:u.a.createElement(q,{data:this.props.gastos}),progressShowTableHead:!0,ignoreRowClick:!0})))}}]),t}(c.Component),A=Object(E.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),M=R,Y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={ingresargastos:!1,data:[],gastoTotal:0,loading:!0,cerrarmodal:!1},a.handleClick=a.handleClick.bind(Object(l.a)(a)),a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getGastos(),k.a.getTipogastos().then((function(t){var a=t.map((function(e){return{value:e.id,label:e.gasto}}));e.setState({options:a})}))}},{key:"getGastos",value:function(){var e=this;this.setState({data:[]});k.a.getExpenses({mes:null}).then((function(t){var a=t.map((function(e){return e.precio_total})),n=t.map((function(e){return{id:e.id,fecha:e.fecha,tipo_gasto:e.tipo_gasto,cantidad:e.cantidad,gasto:e.gasto,preciounid:"$ "+(new Intl.NumberFormat).format(e.precio_unidad),precio:"$ "+(new Intl.NumberFormat).format(e.precio_total)}}));if(a.length>0)var o=a.reduce((function(e,t){return e+t}));else o=0;e.setState({data:n,gastoTotal:o,loading:!1})}))}},{key:"addExpense",value:function(e){var t=this,a={gasto:e.gasto,cantidad:e.cantidad,precioUnidad:e.precioUnidad,precioTotal:e.precioTotal,Fecha:e.Fecha,id_usuario:e.id_usuario,tipogasto_id:e.tipogasto_id};k.a.saveExpenses(a).then((function(e){t.handleClick()})).catch((function(e){alert("Ha ocurrido un error inesperado :(")}))}},{key:"handleClick",value:function(){this.setState({ingresargastos:!this.state.ingresargastos,cerrarmodal:!this.state.cerrarmodal}),this.getGastos()}},{key:"render",value:function(){var e=u.a.createElement("small",null,"Gastos diarios. Total: ",u.a.createElement(m.a,{className:"mr-1",href:"#",color:"danger"},"$ ".concat((new Intl.NumberFormat).format(this.state.gastoTotal))));return u.a.createElement(M,{gastos:this.state.data,loading:this.state.loading,title:e,addExpense:this.addExpense,handleClick:this.handleClick,cerrarmodal:this.state.cerrarmodal})}}]),t}(c.Component);t.default=Y},910:function(e,t,a){"use strict";var n=a(235),o=a(236),i=function(){function e(){Object(n.a)(this,e);var t=window.location.host;"localhost:3000"===t&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===t&&(this.URL="http://coysa.herokuapp.com/api/"),this.API_TOKEN=localStorage.getItem("token")}return Object(o.a)(e,[{key:"onLogin",value:function(e,t){return fetch("".concat(this.URL,"login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"registerUser",value:function(e){return fetch("".concat(this.URL,"register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,username:e.username,password:e.password,password_confirmation:e.password_confirmation})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"saveExpenses",value:function(e){return fetch("".concat(this.URL,"gastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,gasto:e.gasto,cantidad:e.cantidad,precio_unidad:e.precioUnidad,precio_total:e.precioTotal,fecha:e.Fecha,user_id:e.id_usuario,tipogasto_id:e.tipogasto_id})}).then((function(e){return console.log("objeto guardado"),e.json()})).catch((function(e){throw e}))}},{key:"getExpenses",value:function(e){return fetch("".concat(this.URL,"gastos?api_token=").concat(this.API_TOKEN,"\n        &user_id=").concat(JSON.parse(localStorage.getItem("auth")).id,"\n        &mes=").concat(e.mes)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"getTipogastos",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"deleteExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e,"?api_token=").concat(this.API_TOKEN),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){throw e}))}}]),e}();t.a=new i},924:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"setConfiguracion",(function(){return o}));var o=function(e){return{type:"SET_CONFIGURACION",payload:e}};a.d(t,"a",(function(){return i}));var i={configuracion:n}},938:function(e,t,a){"use strict";var n=a(235),o=a(236),i=a(238),r=a(237),l=a(240),s=a(239),c=a(2),u=a.n(c),g=a(1002),d=a(985),m=a(986),p=a(923),h=a.n(p),f=a(930);c.Component},940:function(e,t,a){"use strict";var n=a(235),o=a(236),i=a(238),r=a(237),l=a(240),s=a(239),c=a(2),u=a.n(c),g=a(916),d=a(1002),m=a(985),p=a(986),h=a(987),f=a(242),E=(a(924),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={modal:!1,large:a.props.config.modalActiva,small:!1,primary:!1,success:!1,warning:!1,danger:!1,info:!1},a.toggle=a.toggle.bind(Object(l.a)(a)),a.toggleLarge=a.toggleLarge.bind(Object(l.a)(a)),a.toggleSmall=a.toggleSmall.bind(Object(l.a)(a)),a.togglePrimary=a.togglePrimary.bind(Object(l.a)(a)),a.toggleSuccess=a.toggleSuccess.bind(Object(l.a)(a)),a.toggleWarning=a.toggleWarning.bind(Object(l.a)(a)),a.toggleDanger=a.toggleDanger.bind(Object(l.a)(a)),a.toggleInfo=a.toggleInfo.bind(Object(l.a)(a)),a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"toggleLarge",value:function(){this.setState({large:!this.state.large})}},{key:"toggleSmall",value:function(){this.setState({small:!this.state.small})}},{key:"togglePrimary",value:function(){this.setState({primary:!this.state.primary})}},{key:"toggleSuccess",value:function(){this.setState({success:!this.state.success})}},{key:"toggleWarning",value:function(){this.setState({warning:!this.state.warning})}},{key:"toggleDanger",value:function(){this.setState({danger:!this.state.danger})}},{key:"toggleInfo",value:function(){this.setState({info:!this.state.info})}},{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},"toggle"===this.props.modal?u.a.createElement(g.a,{onClick:this.toggle,className:"mr-1"},this.props.name):"","toggleLarge"===this.props.modal?u.a.createElement(g.a,{onClick:this.toggleLarge,className:"mr-1"},this.props.name):"","toggleSmall"===this.props.modal?u.a.createElement(g.a,{onClick:this.toggleSmall,className:"mr-1"},this.props.name):"","togglePrimary"===this.props.modal?u.a.createElement(g.a,{onClick:this.togglePrimary,className:"mr-1"},this.props.name):"","toggleDanger"===this.props.modal?u.a.createElement(g.a,{onClick:this.toggleDanger,className:"mr-1"},this.props.name):"","toggleWarning"===this.props.modal?u.a.createElement(g.a,{onClick:this.toggleWarning,className:"mr-1"},this.props.name):"","toggleSuccess"===this.props.modal?u.a.createElement(g.a,{onClick:this.toggleSuccess,className:"mr-1"},this.props.name):"","toggleInfo"===this.props.modal?u.a.createElement(g.a,{onClick:this.toggleInfo,className:"mr-1"},this.props.name):"",u.a.createElement(d.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},u.a.createElement(m.a,{toggle:this.toggle},"Modal title"),u.a.createElement(p.a,null,this.props.children),u.a.createElement(h.a,null,u.a.createElement(g.a,{color:"primary",onClick:this.toggle},"Do Something")," ",u.a.createElement(g.a,{color:"secondary",onClick:this.toggle},"Cancel"))),u.a.createElement(d.a,{isOpen:this.state.large!==this.props.cerrarmodal,toggle:this.toggleLarge,className:"modal-lg "+this.props.className},u.a.createElement(m.a,{toggle:this.toggleLarge},this.props.title),u.a.createElement(p.a,null,this.props.children),u.a.createElement(h.a,null,u.a.createElement(g.a,{onClick:this.toggleLarge},"Cancelar")," ")),u.a.createElement(d.a,{isOpen:this.state.small,toggle:this.toggleSmall,className:"modal-sm "+this.props.className},u.a.createElement(m.a,{toggle:this.toggleSmall},"Modal title"),u.a.createElement(p.a,null,this.props.children),u.a.createElement(h.a,null,u.a.createElement(g.a,{color:"primary",onClick:this.toggleSmall},"Do Something")," ",u.a.createElement(g.a,{color:"secondary",onClick:this.toggleSmall},"Cancel"))),u.a.createElement(d.a,{isOpen:this.state.primary,toggle:this.togglePrimary,className:"modal-primary "+this.props.className},u.a.createElement(m.a,{toggle:this.togglePrimary},this.props.title),u.a.createElement(p.a,null,this.props.children),u.a.createElement(h.a,null,u.a.createElement(g.a,{onClick:this.togglePrimary},"Cancelar")," ")),u.a.createElement(d.a,{isOpen:this.state.success,toggle:this.toggleSuccess,className:"modal-success "+this.props.className},u.a.createElement(m.a,{toggle:this.toggleSuccess},"Modal title"),u.a.createElement(p.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement(h.a,null,u.a.createElement(g.a,{color:"success",onClick:this.toggleSuccess},"Do Something")," ",u.a.createElement(g.a,{color:"secondary",onClick:this.toggleSuccess},"Cancel"))),u.a.createElement(d.a,{isOpen:this.state.warning,toggle:this.toggleWarning,className:"modal-warning "+this.props.className},u.a.createElement(m.a,{toggle:this.toggleWarning},"Modal title"),u.a.createElement(p.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement(h.a,null,u.a.createElement(g.a,{color:"warning",onClick:this.toggleWarning},"Do Something")," ",u.a.createElement(g.a,{color:"secondary",onClick:this.toggleWarning},"Cancel"))),u.a.createElement(d.a,{isOpen:this.state.danger,toggle:this.toggleDanger,className:"modal-danger   "+this.props.className},u.a.createElement(m.a,{toggle:this.toggleDanger},"Modal title"),u.a.createElement(p.a,null,this.props.children),u.a.createElement(h.a,null,u.a.createElement(g.a,{color:"danger",onClick:this.toggleDanger},"Do Something")," ",u.a.createElement(g.a,{color:"secondary",onClick:this.toggleDanger},"Cancel"))),u.a.createElement(d.a,{isOpen:this.state.info,toggle:this.toggleInfo,className:"modal-info "+this.props.className},u.a.createElement(m.a,{toggle:this.toggleInfo},"Modal title"),u.a.createElement(p.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement(h.a,null,u.a.createElement(g.a,{color:"primary",onClick:this.toggleInfo},"Do Something")," ",u.a.createElement(g.a,{color:"secondary",onClick:this.toggleInfo},"Cancel"))))}}]),t}(c.Component));t.a=Object(f.b)((function(e){return{config:e.configuracion.configuracionUsuario}}),(function(e){return{actions:{}}}))(E)}}]);
//# sourceMappingURL=19.96a6b18c.chunk.js.map