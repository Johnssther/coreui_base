(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{437:function(e,t,a){"use strict";const s=()=>{const e=window.location.host;let t=null;return"localhost:3000"===e&&(t="http://localhost/coysa-laravel6/public/api/"),"johnssther.github.io"===e&&(t="https://x.johnr.top/api/"),"http://159.65.226.161:3000"===e&&(t="http://localhost/coysa-laravel6/public/api/"),t="https://x.johnr.top/api/",{URL:t,API_TOKEN:localStorage.getItem("token")}};t.a={URL:s().URL,API_TOKEN:s().API_TOKEN,id:null==JSON.parse(localStorage.getItem("auth"))?null:JSON.parse(localStorage.getItem("auth")).id}},444:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var s={};a.r(s),a.d(s,"setConfiguracion",(function(){return r}));var n={};a.r(n),a.d(n,"setPersonalexpense",(function(){return c})),a.d(n,"setPersonalexpenses",(function(){return l}));var o={};a.r(o),a.d(o,"setRevenueIndex",(function(){return p})),a.d(o,"setRevenueStore",(function(){return u})),a.d(o,"setRevenueShow",(function(){return m})),a.d(o,"setRevenueUpdate",(function(){return d})),a.d(o,"setRevenueDelete",(function(){return E}));const r=e=>({type:"SET_CONFIGURACION",payload:e}),c=e=>({type:"SET_PERSONALEXPENSE",payload:e}),l=e=>({type:"SET_PERSONALEXPENSES",payload:e});var i=a(451);const p=e=>({type:"SET_REVENUE_INDEX",payload:e}),u=e=>({type:"SET_REVENUE_STORE",payload:e}),m=e=>({type:"SET_REVENUE_SHOW",payload:e}),d=e=>({type:"SET_REVENUE_UPDATE",payload:e}),E=e=>({type:"SET_REVENUE_DELETE",payload:e}),h={configuracion:s,personalexpenses:n,expensestype:i,revenues:o}},445:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return r}));var s=a(476),n=a.n(s);const o=e=>{if(console.log(e),!1===e.success)throw e;if(e){let t={success:!1,errors:"Ocurrio un error inesperado de conexi\xf3n por favor recargue su navegador nuevamente."};if(n.a.fire({title:"Atenci\xf3n",text:t.errors,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, recargar de nuevo"}).then(e=>{e.value&&window.location.reload()}),"TypeError: Failed to fetch"!==e)throw t;throw t}},r=e=>{throw e}},451:function(e,t,a){"use strict";a.r(t),a.d(t,"setExpensestype",(function(){return s}));const s=e=>({type:"SET_EXPENSES_TYPE",payload:e})},497:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return l}));var s=a(437);var n=a(445),o=a(444),r=a(104);const c=async()=>{try{let e=await(async()=>{const e=await fetch("".concat(s.a.URL,"tipogastos?api_token=").concat(s.a.API_TOKEN,"&user_id=").concat(s.a.id));return await e.json()})();r.b.dispatch(o.a.expensestype.setExpensestype(e))}catch(e){Object(n.b)(e)}},l=async e=>{try{const t=await(async e=>{const t=await fetch("".concat(s.a.URL,"tipogastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:s.a.API_TOKEN,tipogastos_name:e.tipogastos_name,tipogastos_active:e.tipogastos_active,tipogastos_usuario:e.tipogastos_usuario})});return await t.json()})(e);console.log(t)}catch(t){Object(n.b)(t)}}},501:function(e,t,a){"use strict";var s=a(0),n=a.n(s);a(908),a(597),a(789),a(598),a(584);t.a=e=>{const{children:t,success:a}=e,[o,r]=Object(s.useState)(!0);return n.a.createElement("div",null,t)}},621:function(e,t,a){"use strict";var s=a(0),n=a.n(s);a(648),a(476);t.a=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-3 offset-md-4"},n.a.createElement("div",{className:"container center-block"},n.a.createElement("div",{className:"lds-facebook"},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null)),n.a.createElement("h4",null,"Cargando..."))))))}},648:function(e,t,a){},956:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),o=a(437);a(792);var r=a(607),c=a(647),l=a(608);var i=a(501),p=a(621),u=a(457),m=a(700),d=a(428),E=a.n(d),h=a(793);const g=["className","cssModule","header","mainText","icon","color","footer","link","children","variant"];class f extends s.Component{render(){const e=this.props,{className:t,cssModule:a,header:s,mainText:o,icon:c,color:i,footer:p,link:d,children:f,variant:y}=e,v=Object(u.a)(e,g),x="0"===y?{card:"p-3",icon:"p-3",lead:"mt-2"}:"1"===y?{card:"p-0",icon:"p-4",lead:"pt-3"}:{card:"p-0",icon:"p-4 px-5",lead:"pt-3"},b={style:"clearfix",color:i,icon:c,classes:""};b.classes=Object(h.mapToCssModules)(E()(t,b.style,x.card),a);const _={style:"h5 mb-0",color:i,classes:""};_.classes=E()(_.style,"text-"+b.color,x.lead);return n.a.createElement(r.a,null,n.a.createElement(l.a,Object.assign({className:b.classes},v),function(e){const t=E()(e,"bg-"+b.color,x.icon,"font-2xl mr-3 float-left");return n.a.createElement("i",{className:t})}(b.icon),n.a.createElement("div",{className:_.classes},s),n.a.createElement("div",{className:"text-muted text-uppercase font-weight-bold font-xs"},o)),function(){if(p)return n.a.createElement(m.a,{className:"px-3 py-2"},n.a.createElement("a",{className:"font-weight-bold font-xs btn-block text-muted",href:d},"Ver M\xe1s",n.a.createElement("i",{className:"fa fa-angle-right float-right font-lg"})))}())}}f.defaultProps={header:"$1,999.50",mainText:"Income",icon:"fa fa-cogs",color:"primary",variant:"0",link:"#"};var y=a(794),v=a(888);class x extends s.Component{constructor(e){super(e),this.state={gastoTotal:""}}render(){const e=this.props.mes;return console.log(e,"a"),n.a.createElement(n.a.Fragment,null,n.a.createElement(r.a,{style:{borderRadius:"10px"}},n.a.createElement(c.a,{style:{borderRadius:"10px 10px 0px 0px"}},"Histograma del 2025",n.a.createElement("div",{className:"card-header-actions"})),n.a.createElement(l.a,null,n.a.createElement("div",{className:"chart-wrapper"},n.a.createElement(y.Bar,{data:{labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[{label:"Gastos mensuales",backgroundColor:this.props.color,borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(168,132,8,66)",hoverBorderColor:"rgba(255,99,132,1)",data:e.map(e=>e.precio_total_mes)}]},options:{tooltips:{enabled:!1,custom:v.CustomTooltips},maintainAspectRatio:!1}})))))}}var b=x;a(926),a(950);s.Component;var _=a(140),N=a(578),S=a(497),w={coming_soon:"Proximamente:",coming_soon_item1:"Seleccionar su idioma preferido (Multiidioma).",news:"Novedades",news_item1:"-Ahora puedes registrar tus ingresos y verlos en el modulo de ingresos que hemos creado para t\xed.",news_item2:"-Una vista mas limpia y minimalista.",news_item3:"-Aun continuamos mejorando.",to_explore:"Explorar",btn_en:"Ingles",btn_es:"Espa\xf1ol",btn_fr:"Frances",my_expenses:"Mis Gastos"};class T extends s.Component{constructor(e){super(e),this.state={gastoTotal:"",mes:[],loading:!0,expensestype:[],valueSelectExpensestype:"",color:"#F55457",languaje:w,btn_color:!1}}async componentDidMount(){this.getExpensesMonths(),this.getExpensesMonth(),await Object(S.b)();const e=await this.props.expensestypes.map(e=>({value:e.id,label:e.gasto}));this.setState({expensestype:e})}async getExpensesMonth(e){try{const t=await(async e=>{const t=await fetch("".concat(o.a.URL,"dashboard/totalexpensesmonth?api_token=").concat(o.a.API_TOKEN,"&user_id=").concat(o.a.id,"&tipogasto=").concat(e));return await t.json()})(e);this.setState({gastoTotal:t,loading:!1})}catch(t){console.log(t),this.setState({loading:!1})}}async getExpensesMonths(){try{const e=await(async()=>{const e=await fetch("".concat(o.a.URL,"dashboard/totalexpensesmonths?api_token=").concat(o.a.API_TOKEN,"&user_id=").concat(o.a.id));return await e.json()})();this.setState({mes:e,loading:!1})}catch(e){console.log(e),this.setState({loading:!1})}}async onChangeSelect(e){await this.setState({valueSelectExpensestype:e}),this.getExpensesMonth(this.state.valueSelectExpensestype)}render(){const{languaje:e,btn_color:t}=this.state;return this.state.loading?n.a.createElement(p.a,{loading:this.state.loading}):n.a.createElement(i.a,{success:!1},n.a.createElement("div",{className:"offset-sm-3 col-sm-6"},n.a.createElement(N.a,{className:"is-invalid",options:this.state.expensestype,onChange:e=>{this.onChangeSelect(e.value)}})),n.a.createElement("br",null),n.a.createElement("div",{className:"row mb-2"},n.a.createElement("div",{className:"offset-sm-3 col-sm-6"},n.a.createElement(r.a,{style:{borderRadius:"10px"}},n.a.createElement(l.a,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h6",null,e.my_expenses),n.a.createElement("h3",null,"$"+(new Intl.NumberFormat).format(this.state.gastoTotal.toString())))))))),n.a.createElement("div",{className:"row mb-2"},n.a.createElement("div",{className:"offset-sm-3 col-sm-6"},n.a.createElement(b,{mes:this.state.mes,color:this.state.color}))))}}t.default=Object(_.b)(e=>({expensestypes:e.expensestype.expensestype,expense:e.personalexpenses.createpersonalexpense}))(T)}}]);
//# sourceMappingURL=22.a8ac2e9c.chunk.js.map