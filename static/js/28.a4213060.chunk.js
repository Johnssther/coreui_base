(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[28],{437:function(e,t,a){"use strict";const o=()=>{const e=window.location.host;let t=null;return"localhost:3000"===e&&(t="http://localhost/coysa-laravel6/public/api/"),"johnssther.github.io"===e&&(t="https://x.johnr.top/api/"),"http://159.65.226.161:3000"===e&&(t="http://localhost/coysa-laravel6/public/api/"),t="https://x.johnr.top/api/",{URL:t,API_TOKEN:localStorage.getItem("token")}};t.a={URL:o().URL,API_TOKEN:o().API_TOKEN,id:null==JSON.parse(localStorage.getItem("auth"))?null:JSON.parse(localStorage.getItem("auth")).id}},444:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var o={};a.r(o),a.d(o,"setConfiguracion",(function(){return r}));var n={};a.r(n),a.d(n,"setPersonalexpense",(function(){return i})),a.d(n,"setPersonalexpenses",(function(){return s}));var c={};a.r(c),a.d(c,"setRevenueIndex",(function(){return d})),a.d(c,"setRevenueStore",(function(){return p})),a.d(c,"setRevenueShow",(function(){return u})),a.d(c,"setRevenueUpdate",(function(){return m})),a.d(c,"setRevenueDelete",(function(){return h}));const r=e=>({type:"SET_CONFIGURACION",payload:e}),i=e=>({type:"SET_PERSONALEXPENSE",payload:e}),s=e=>({type:"SET_PERSONALEXPENSES",payload:e});var l=a(451);const d=e=>({type:"SET_REVENUE_INDEX",payload:e}),p=e=>({type:"SET_REVENUE_STORE",payload:e}),u=e=>({type:"SET_REVENUE_SHOW",payload:e}),m=e=>({type:"SET_REVENUE_UPDATE",payload:e}),h=e=>({type:"SET_REVENUE_DELETE",payload:e}),b={configuracion:o,personalexpenses:n,expensestype:l,revenues:c}},445:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return r}));var o=a(476),n=a.n(o);const c=e=>{if(console.log(e),!1===e.success)throw e;if(e){let t={success:!1,errors:"Ocurrio un error inesperado de conexi\xf3n por favor recargue su navegador nuevamente."};if(n.a.fire({title:"Atenci\xf3n",text:t.errors,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, recargar de nuevo"}).then(e=>{e.value&&window.location.reload()}),"TypeError: Failed to fetch"!==e)throw t;throw t}},r=e=>{throw e}},451:function(e,t,a){"use strict";a.r(t),a.d(t,"setExpensestype",(function(){return o}));const o=e=>({type:"SET_EXPENSES_TYPE",payload:e})},497:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s}));var o=a(437);var n=a(445),c=a(444),r=a(104);const i=async()=>{try{let e=await(async()=>{const e=await fetch("".concat(o.a.URL,"tipogastos?api_token=").concat(o.a.API_TOKEN,"&user_id=").concat(o.a.id));return await e.json()})();r.b.dispatch(c.a.expensestype.setExpensestype(e))}catch(e){Object(n.b)(e)}},s=async e=>{try{const t=await(async e=>{const t=await fetch("".concat(o.a.URL,"tipogastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:o.a.API_TOKEN,tipogastos_name:e.tipogastos_name,tipogastos_active:e.tipogastos_active,tipogastos_usuario:e.tipogastos_usuario})});return await t.json()})(e);console.log(t)}catch(t){Object(n.b)(t)}}},500:function(e,t,a){"use strict";var o=a(457),n=a(0),c=a.n(n),r=a(459);const i=["label","placeholder"];t.a=e=>{let{label:t,placeholder:a}=e,n=Object(o.a)(e,i);const[s,l]=Object(r.c)(n),[d,p]=c.a.useState(!1),u=!!d&&s.value.length>2||l.touched;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:s.name},t),c.a.createElement("input",Object.assign({className:"form-control sm ".concat(u?l.error?"is-invalid":"is-valid":"")},s,n,{placeholder:a,onFocus:()=>p(!0)})),c.a.createElement("div",{className:"valid-feedback"},"Completado"),c.a.createElement("div",{className:"invalid-feedback"},l.error))}},955:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(643),r=a(607),i=a(647),s=a(608),l=a(507),d=a(508),p=a(584),u=a(459),m=a(600),h=a(500),b=a(457),v=a(9),f=a(434),E=a(460),g=a(582),y=a(641),O=o.createContext();var k=O;var S=a(477),j=a(596),x=a(960),N=a(506),R=o.forwardRef((function(e,t){var a=e.edge,n=void 0!==a&&a,c=e.children,r=e.classes,i=e.className,s=e.color,l=void 0===s?"default":s,d=e.disabled,p=void 0!==d&&d,u=e.disableFocusRipple,m=void 0!==u&&u,h=e.size,b=void 0===h?"medium":h,g=Object(f.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return o.createElement(x.a,Object(v.a)({className:Object(E.a)(r.root,i,"default"!==l&&r["color".concat(Object(N.a)(l))],p&&r.disabled,"small"===b&&r["size".concat(Object(N.a)(b))],{start:r.edgeStart,end:r.edgeEnd}[n]),centerRipple:!0,focusRipple:!m,disabled:p,ref:t},g),o.createElement("span",{className:r.label},c))})),_=Object(S.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(j.a)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(j.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(j.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(R),C=o.forwardRef((function(e,t){var a=e.autoFocus,n=e.checked,c=e.checkedIcon,r=e.classes,i=e.className,s=e.defaultChecked,l=e.disabled,d=e.icon,p=e.id,u=e.inputProps,m=e.inputRef,h=e.name,b=e.onBlur,O=e.onChange,S=e.onFocus,j=e.readOnly,x=e.required,N=e.tabIndex,R=e.type,C=e.value,I=Object(f.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),w=Object(y.a)({controlled:n,default:Boolean(s),name:"SwitchBase",state:"checked"}),T=Object(g.a)(w,2),z=T[0],P=T[1],B=o.useContext(k),F=l;B&&"undefined"===typeof F&&(F=B.disabled);var U="checkbox"===R||"radio"===R;return o.createElement(_,Object(v.a)({component:"span",className:Object(E.a)(r.root,i,z&&r.checked,F&&r.disabled),disabled:F,tabIndex:null,role:void 0,onFocus:function(e){S&&S(e),B&&B.onFocus&&B.onFocus(e)},onBlur:function(e){b&&b(e),B&&B.onBlur&&B.onBlur(e)},ref:t},I),o.createElement("input",Object(v.a)({autoFocus:a,checked:n,defaultChecked:s,className:r.input,disabled:F,id:U&&p,name:h,onChange:function(e){var t=e.target.checked;P(t),O&&O(e,t)},readOnly:j,ref:m,required:x,tabIndex:N,type:R,value:C},u)),z?c:d)})),I=Object(S.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(C),w=a(602),T=Object(w.a)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),z=Object(w.a)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),P=Object(w.a)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),B=o.createElement(z,null),F=o.createElement(T,null),U=o.createElement(P,null),A=o.forwardRef((function(e,t){var a=e.checkedIcon,n=void 0===a?B:a,c=e.classes,r=e.color,i=void 0===r?"secondary":r,s=e.icon,l=void 0===s?F:s,d=e.indeterminate,p=void 0!==d&&d,u=e.indeterminateIcon,m=void 0===u?U:u,h=e.inputProps,b=e.size,g=void 0===b?"medium":b,y=Object(f.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),O=p?m:l,k=p?m:n;return o.createElement(I,Object(v.a)({type:"checkbox",classes:{root:Object(E.a)(c.root,c["color".concat(Object(N.a)(i))],p&&c.indeterminate),checked:c.checked,disabled:c.disabled},color:i,inputProps:Object(v.a)({"data-indeterminate":p},h),icon:o.cloneElement(O,{fontSize:void 0===O.props.fontSize&&"small"===g?g:O.props.fontSize}),checkedIcon:o.cloneElement(k,{fontSize:void 0===k.props.fontSize&&"small"===g?g:k.props.fontSize}),ref:t},y))})),L=Object(S.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(j.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(j.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(A);const V=["label","placeholder"];var $=e=>{let{label:t,placeholder:a}=e,o=Object(b.a)(e,V);const[c,r]=Object(u.c)(o);return n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("label",{htmlFor:c.name},t),n.a.createElement("div",{className:"form-check"},n.a.createElement(L,Object.assign({color:"primary",className:"form-check-input ".concat(r.touched&&r.error?"is-invalid":"is-valid")},c,o)),r.touched&&r.error?n.a.createElement("div",{className:"invalid-feedback"},r.error):null)))};var q=e=>{const{onCreate:t}=e;return n.a.createElement(c.a,null,n.a.createElement(r.a,null,n.a.createElement(i.a,null,"Tipo de gasto"),n.a.createElement(s.a,null,n.a.createElement(u.b,{initialValues:{tipogastos_name:"Gasto de ",tipogastos_active:!0},validationSchema:m.d({tipogastos_name:m.e().min(11,"Un gasto debe tener minimo 10 caracteres.").max(100,"Un gasto debe tener maximo 30 caracteres.").required("El gasto es obligatorio"),tipogastos_active:m.a().required("Required").oneOf([!0],"El tipo de gasto debe estar activo .")}),onSubmit:(e,a)=>{let{setSubmitting:o}=a;t(e),o(!0)}},n.a.createElement(u.a,null,n.a.createElement(l.a,null,n.a.createElement(d.a,{sm:"8"},n.a.createElement(h.a,{name:"tipogastos_name",type:"text",label:"Tipo de Gasto",placeholder:"Ingrese un tipo de gasto."})),n.a.createElement(d.a,{sm:"4"},n.a.createElement($,{name:"tipogastos_active",type:"checkbox",label:"Tipo Activo"}))),n.a.createElement(l.a,null,n.a.createElement(d.a,{sm:{size:6,offset:4}},n.a.createElement(p.a,{className:"col col-sm-3 m-1",type:"reset",color:"secondary",size:"sm"},"Reset"),n.a.createElement(p.a,{className:"col col-sm-3 m-1",type:"submit",color:"dark",size:"sm"},"Register"))))))))},H=a(497),J=a(140);t.default=Object(J.b)(e=>({expensestype:e.expensestype.expensestype,createexpense:e.personalexpenses.personalexpense}),e=>({actions:{}}))((function(e){const{expensestype:t}=e;return n.a.createElement(q,{onCreate:async t=>{try{Object.assign(t,{tipogastos_usuario:JSON.parse(localStorage.getItem("auth")).id}),await Object(H.a)(t),console.log(t),await Object(H.b)(),e.history.push("/expenses/references/expensestype")}catch(a){console.log(a)}},expensestype:t})}))}}]);
//# sourceMappingURL=28.a4213060.chunk.js.map