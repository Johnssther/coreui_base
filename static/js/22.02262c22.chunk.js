(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{437:function(e,t,a){"use strict";const n=()=>{const e=window.location.host;let t=null;return"localhost:3000"===e&&(t="http://localhost/coysa-laravel6/public/api/"),"johnssther.github.io"===e&&(t="https://x.johnr.top/api/"),"http://159.65.226.161:3000"===e&&(t="http://localhost/coysa-laravel6/public/api/"),t="https://x.johnr.top/api/",{URL:t,API_TOKEN:localStorage.getItem("token")}};t.a={URL:n().URL,API_TOKEN:n().API_TOKEN,id:null==JSON.parse(localStorage.getItem("auth"))?null:JSON.parse(localStorage.getItem("auth")).id}},443:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n={};a.r(n),a.d(n,"setConfiguracion",(function(){return r}));var s={};a.r(s),a.d(s,"setPersonalexpense",(function(){return c})),a.d(s,"setPersonalexpenses",(function(){return i}));var o={};a.r(o),a.d(o,"setRevenueIndex",(function(){return p})),a.d(o,"setRevenueStore",(function(){return u})),a.d(o,"setRevenueShow",(function(){return d})),a.d(o,"setRevenueUpdate",(function(){return m})),a.d(o,"setRevenueDelete",(function(){return E}));const r=e=>({type:"SET_CONFIGURACION",payload:e}),c=e=>({type:"SET_PERSONALEXPENSE",payload:e}),i=e=>({type:"SET_PERSONALEXPENSES",payload:e});var l=a(451);const p=e=>({type:"SET_REVENUE_INDEX",payload:e}),u=e=>({type:"SET_REVENUE_STORE",payload:e}),d=e=>({type:"SET_REVENUE_SHOW",payload:e}),m=e=>({type:"SET_REVENUE_UPDATE",payload:e}),E=e=>({type:"SET_REVENUE_DELETE",payload:e}),h={configuracion:n,personalexpenses:s,expensestype:l,revenues:o}},445:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return r}));var n=a(475),s=a.n(n);const o=e=>{if(console.log(e),!1===e.success)throw e;if(e){let t={success:!1,errors:"Ocurrio un error inesperado de conexi\xf3n por favor recargue su navegador nuevamente."};if(s.a.fire({title:"Atenci\xf3n",text:t.errors,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, recargar de nuevo"}).then(e=>{e.value&&window.location.reload()}),"TypeError: Failed to fetch"!==e)throw t;throw t}},r=e=>{throw e}},451:function(e,t,a){"use strict";a.r(t),a.d(t,"setExpensestype",(function(){return n}));const n=e=>({type:"SET_EXPENSES_TYPE",payload:e})},493:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(437);var s=a(445),o=a(443),r=a(104);const c=async()=>{try{let e=await(async()=>{const e=await fetch("".concat(n.a.URL,"tipogastos?api_token=").concat(n.a.API_TOKEN,"&user_id=").concat(n.a.id));return await e.json()})();r.b.dispatch(o.a.expensestype.setExpensestype(e))}catch(e){Object(s.b)(e)}},i=async e=>{try{const t=await(async e=>{const t=await fetch("".concat(n.a.URL,"tipogastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:n.a.API_TOKEN,tipogastos_name:e.tipogastos_name,tipogastos_active:e.tipogastos_active,tipogastos_usuario:e.tipogastos_usuario})});return await t.json()})(e);console.log(t)}catch(t){Object(s.b)(t)}}},501:function(e,t,a){"use strict";var n=a(0),s=a.n(n);a(908),a(595),a(789),a(596),a(571);t.a=e=>{const{children:t,success:a}=e,[o,r]=Object(n.useState)(!0);return s.a.createElement("div",null,t)}},622:function(e,t,a){"use strict";var n=a(0),s=a.n(n);a(648),a(475);t.a=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-3 offset-md-4"},s.a.createElement("div",{className:"container center-block"},s.a.createElement("div",{className:"lds-facebook"},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null)),s.a.createElement("h4",null,"Cargando..."))))))}},648:function(e,t,a){},956:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(437);a(792);var r=a(608),c=a(507),i=a(609);var l=a(501),p=a(622),u=a(457),d=a(700),m=a(428),E=a.n(m),h=a(793);const g=["className","cssModule","header","mainText","icon","color","footer","link","children","variant"];class f extends n.Component{render(){const e=this.props,{className:t,cssModule:a,header:n,mainText:o,icon:c,color:l,footer:p,link:m,children:f,variant:y}=e,x=Object(u.a)(e,g),v="0"===y?{card:"p-3",icon:"p-3",lead:"mt-2"}:"1"===y?{card:"p-0",icon:"p-4",lead:"pt-3"}:{card:"p-0",icon:"p-4 px-5",lead:"pt-3"},b={style:"clearfix",color:l,icon:c,classes:""};b.classes=Object(h.mapToCssModules)(E()(t,b.style,v.card),a);const _={style:"h5 mb-0",color:l,classes:""};_.classes=E()(_.style,"text-"+b.color,v.lead);return s.a.createElement(r.a,null,s.a.createElement(i.a,Object.assign({className:b.classes},x),function(e){const t=E()(e,"bg-"+b.color,v.icon,"font-2xl mr-3 float-left");return s.a.createElement("i",{className:t})}(b.icon),s.a.createElement("div",{className:_.classes},n),s.a.createElement("div",{className:"text-muted text-uppercase font-weight-bold font-xs"},o)),function(){if(p)return s.a.createElement(d.a,{className:"px-3 py-2"},s.a.createElement("a",{className:"font-weight-bold font-xs btn-block text-muted",href:m},"Ver M\xe1s",s.a.createElement("i",{className:"fa fa-angle-right float-right font-lg"})))}())}}f.defaultProps={header:"$1,999.50",mainText:"Income",icon:"fa fa-cogs",color:"primary",variant:"0",link:"#"};var y=a(794),x=a(888);class v extends n.Component{constructor(e){super(e),this.state={gastoTotal:""}}render(){const e=this.props.mes;return console.log(e,"a"),s.a.createElement(s.a.Fragment,null,s.a.createElement(r.a,{style:{borderRadius:"10px"}},s.a.createElement(c.a,{style:{borderRadius:"10px 10px 0px 0px"}},"Histograma del 2025",s.a.createElement("div",{className:"card-header-actions"})),s.a.createElement(i.a,null,s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(y.Bar,{data:{labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[{label:"Gastos mensuales",backgroundColor:this.props.color,borderColor:"purple",borderWidth:1,hoverBackgroundColor:"purple",hoverBorderColor:"rgb(92, 7, 132)",data:e.map(e=>e.precio_total_mes)}]},options:{tooltips:{enabled:!1,custom:x.CustomTooltips},maintainAspectRatio:!1}})))))}}var b=v;a(926),a(950);n.Component;var _=a(140),N=a(493),S={coming_soon:"Proximamente:",coming_soon_item1:"Seleccionar su idioma preferido (Multiidioma).",news:"Novedades",news_item1:"-Ahora puedes registrar tus ingresos y verlos en el modulo de ingresos que hemos creado para t\xed.",news_item2:"-Una vista mas limpia y minimalista.",news_item3:"-Aun continuamos mejorando.",to_explore:"Explorar",btn_en:"Ingles",btn_es:"Espa\xf1ol",btn_fr:"Frances",my_expenses:"Mis Gastos"};class w extends n.Component{constructor(e){super(e),this.state={gastoTotal:"",mes:[],loading:!0,expensestype:[],valueSelectExpensestype:"",color:"purple",languaje:S,btn_color:!1}}async componentDidMount(){this.getExpensesMonths(),this.getExpensesMonth(),await Object(N.b)();const e=await this.props.expensestypes.map(e=>({value:e.id,label:e.gasto}));this.setState({expensestype:e})}async getExpensesMonth(e){try{const t=await(async e=>{const t=await fetch("".concat(o.a.URL,"dashboard/totalexpensesmonth?api_token=").concat(o.a.API_TOKEN,"&user_id=").concat(o.a.id,"&tipogasto=").concat(e));return await t.json()})(e);this.setState({gastoTotal:t,loading:!1})}catch(t){console.log(t),this.setState({loading:!1})}}async getExpensesMonths(){try{const e=await(async()=>{const e=await fetch("".concat(o.a.URL,"dashboard/totalexpensesmonths?api_token=").concat(o.a.API_TOKEN,"&user_id=").concat(o.a.id));return await e.json()})();this.setState({mes:e,loading:!1})}catch(e){console.log(e),this.setState({loading:!1})}}async onChangeSelect(e){await this.setState({valueSelectExpensestype:e}),this.getExpensesMonth(this.state.valueSelectExpensestype)}render(){const{languaje:e,btn_color:t}=this.state;return this.state.loading?s.a.createElement(p.a,{loading:this.state.loading}):s.a.createElement(l.a,{success:!1},s.a.createElement(b,{mes:this.state.mes,color:this.state.color}))}}t.default=Object(_.b)(e=>({expensestypes:e.expensestype.expensestype,expense:e.personalexpenses.createpersonalexpense}))(w)}}]);
//# sourceMappingURL=22.02262c22.chunk.js.map