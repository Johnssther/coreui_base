(this.webpackJsonpsavvi=this.webpackJsonpsavvi||[]).push([[27],{505:function(e,a,t){"use strict";var l=t(9),r=t(23),n=t(0),c=t.n(n),s=t(68),o=t.n(s),i=t(428),m=t.n(i),u=t(429),d=["className","cssModule","noGutters","tag","form","widths"],f=o.a.oneOfType([o.a.number,o.a.string]),g={tag:u.n,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},b={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,s=e.tag,o=e.form,i=e.widths,f=Object(r.a)(e,d),g=[];i.forEach((function(a,t){var l=e[a];if(delete f[a],l){var r=!t;g.push(r?"row-cols-"+l:"row-cols-"+a+"-"+l)}}));var b=Object(u.j)(m()(a,n?"no-gutters":null,o?"form-row":"row",g),t);return c.a.createElement(s,Object(l.a)({},f,{className:b}))};p.propTypes=g,p.defaultProps=b,a.a=p},506:function(e,a,t){"use strict";var l=t(9),r=t(23),n=t(0),c=t.n(n),s=t(68),o=t.n(s),i=t(428),m=t.n(i),u=t(429),d=["className","cssModule","widths","tag"],f=o.a.oneOfType([o.a.number,o.a.string]),g=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:f,offset:f})]),b={tag:u.n,xs:g,sm:g,md:g,lg:g,xl:g,className:o.a.string,cssModule:o.a.object,widths:o.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},N=function(e){var a=e.className,t=e.cssModule,n=e.widths,s=e.tag,o=Object(r.a)(e,d),i=[];n.forEach((function(a,l){var r=e[a];if(delete o[a],r||""===r){var n=!l;if(Object(u.h)(r)){var c,s=n?"-":"-"+a+"-",d=E(n,a,r.size);i.push(Object(u.j)(m()(((c={})[d]=r.size||""===r.size,c["order"+s+r.order]=r.order||0===r.order,c["offset"+s+r.offset]=r.offset||0===r.offset,c)),t))}else{var f=E(n,a,r);i.push(f)}}})),i.length||i.push("col");var f=Object(u.j)(m()(a,i),t);return c.a.createElement(s,Object(l.a)({},o,{className:f}))};N.propTypes=b,N.defaultProps=p,a.a=N},570:function(e,a,t){"use strict";var l=t(9),r=t(23),n=t(444),c=t(32),s=t(0),o=t.n(s),i=t(68),m=t.n(i),u=t(428),d=t.n(u),f=t(429),g=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],b={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:f.n,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(n.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],n=e.block,c=e.className,s=e.close,i=e.cssModule,m=e.color,u=e.outline,b=e.size,p=e.tag,E=e.innerRef,N=Object(r.a)(e,g);s&&"undefined"===typeof N.children&&(N.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var h="btn"+(u?"-outline":"")+"-"+m,v=Object(f.j)(d()(c,{close:s},s||"btn",s||h,!!b&&"btn-"+b,!!n&&"btn-block",{active:a,disabled:this.props.disabled}),i);N.href&&"button"===p&&(p="a");var y=s?"Close":null;return o.a.createElement(p,Object(l.a)({type:"button"===p&&N.onClick?"button":void 0},N,{className:v,ref:E,onClick:this.onClick,"aria-label":t||y}))},a}(o.a.Component);p.propTypes=b,p.defaultProps={color:"secondary",tag:"button"},a.a=p},607:function(e,a,t){"use strict";var l=t(9),r=t(23),n=t(0),c=t.n(n),s=t(68),o=t.n(s),i=t(428),m=t.n(i),u=t(429),d=["className","cssModule","color","body","inverse","outline","tag","innerRef"],f={tag:u.n,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},g=function(e){var a=e.className,t=e.cssModule,n=e.color,s=e.body,o=e.inverse,i=e.outline,f=e.tag,g=e.innerRef,b=Object(r.a)(e,d),p=Object(u.j)(m()(a,"card",!!o&&"text-white",!!s&&"card-body",!!n&&(i?"border":"bg")+"-"+n),t);return c.a.createElement(f,Object(l.a)({},b,{className:p,ref:g}))};g.propTypes=f,g.defaultProps={tag:"div"},a.a=g},608:function(e,a,t){"use strict";var l=t(9),r=t(23),n=t(0),c=t.n(n),s=t(68),o=t.n(s),i=t(428),m=t.n(i),u=t(429),d=["className","cssModule","innerRef","tag"],f={tag:u.n,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},g=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,s=e.tag,o=Object(r.a)(e,d),i=Object(u.j)(m()(a,"card-body"),t);return c.a.createElement(s,Object(l.a)({},o,{className:i,ref:n}))};g.propTypes=f,g.defaultProps={tag:"div"},a.a=g},647:function(e,a,t){"use strict";var l=t(9),r=t(23),n=t(0),c=t.n(n),s=t(68),o=t.n(s),i=t(428),m=t.n(i),u=t(429),d=["className","cssModule","tag"],f={tag:u.n,className:o.a.string,cssModule:o.a.object},g=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=Object(r.a)(e,d),o=Object(u.j)(m()(a,"card-header"),t);return c.a.createElement(n,Object(l.a)({},s,{className:o}))};g.propTypes=f,g.defaultProps={tag:"div"},a.a=g},700:function(e,a,t){"use strict";var l=t(9),r=t(23),n=t(0),c=t.n(n),s=t(68),o=t.n(s),i=t(428),m=t.n(i),u=t(429),d=["className","cssModule","tag"],f={tag:u.n,className:o.a.string,cssModule:o.a.object},g=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=Object(r.a)(e,d),o=Object(u.j)(m()(a,"card-footer"),t);return c.a.createElement(n,Object(l.a)({},s,{className:o}))};g.propTypes=f,g.defaultProps={tag:"div"},a.a=g},951:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(505),c=t(506),s=t(607),o=t(647),i=t(608),m=t(926),u=t(700),d=t(570);class f extends l.Component{render(){return r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement(n.a,null,r.a.createElement(c.a,{xs:"12",md:"6"},r.a.createElement(s.a,null,r.a.createElement(o.a,null,r.a.createElement("i",{className:"fa fa-align-justify"}),r.a.createElement("strong",null,"Badges"),r.a.createElement("div",{className:"card-header-actions"},r.a.createElement("a",{href:"https://reactstrap.github.io/components/badge/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},r.a.createElement("small",{className:"text-muted"},"docs")))),r.a.createElement(i.a,null,r.a.createElement("h1",null,"Heading ",r.a.createElement(m.a,{color:"secondary"},"New")),r.a.createElement("h2",null,"Heading ",r.a.createElement(m.a,{color:"secondary"},"New")),r.a.createElement("h3",null,"Heading ",r.a.createElement(m.a,{color:"secondary"},"New")),r.a.createElement("h4",null,"Heading ",r.a.createElement(m.a,{color:"secondary"},"New")),r.a.createElement("h5",null,"Heading ",r.a.createElement(m.a,{color:"secondary"},"New")),r.a.createElement("h6",null,"Heading ",r.a.createElement(m.a,{color:"secondary"},"New"))),r.a.createElement(u.a,null,r.a.createElement(d.a,{color:"primary",outline:!0},"Notifications ",r.a.createElement(m.a,{color:"secondary",pill:!0,style:{position:"static"}},"9"))))),r.a.createElement(c.a,{xs:"12",md:"6"},r.a.createElement(s.a,null,r.a.createElement(o.a,null,r.a.createElement("i",{className:"fa fa-align-justify"}),r.a.createElement("strong",null,"Badges")," ",r.a.createElement("small",null,"contextual variations")),r.a.createElement(i.a,null,r.a.createElement(m.a,{className:"mr-1",color:"primary"},"Primary"),r.a.createElement(m.a,{className:"mr-1",color:"secondary"},"Secondary"),r.a.createElement(m.a,{className:"mr-1",color:"success"},"Success"),r.a.createElement(m.a,{className:"mr-1",color:"danger"},"Danger"),r.a.createElement(m.a,{className:"mr-1",color:"warning"},"Warning"),r.a.createElement(m.a,{className:"mr-1",color:"info"},"Info"),r.a.createElement(m.a,{className:"mr-1",color:"light"},"Light"),r.a.createElement(m.a,{className:"mr-1",color:"dark"},"Dark"))),r.a.createElement(s.a,null,r.a.createElement(o.a,null,r.a.createElement("i",{className:"fa fa-align-justify"}),r.a.createElement("strong",null,"Badges")," ",r.a.createElement("small",null,"pill badges")),r.a.createElement(i.a,null,r.a.createElement(m.a,{className:"mr-1",color:"primary",pill:!0},"Primary"),r.a.createElement(m.a,{className:"mr-1",color:"secondary",pill:!0},"Secondary"),r.a.createElement(m.a,{className:"mr-1",color:"success",pill:!0},"Success"),r.a.createElement(m.a,{className:"mr-1",color:"danger",pill:!0},"Danger"),r.a.createElement(m.a,{className:"mr-1",color:"warning",pill:!0},"Warning"),r.a.createElement(m.a,{className:"mr-1",color:"info",pill:!0},"Info"),r.a.createElement(m.a,{className:"mr-1",color:"light",pill:!0},"Light"),r.a.createElement(m.a,{className:"mr-1",color:"dark",pill:!0},"Dark"))),r.a.createElement(s.a,null,r.a.createElement(o.a,null,r.a.createElement("i",{className:"fa fa-align-justify"}),r.a.createElement("strong",null,"Badges")," ",r.a.createElement("small",null,"links")),r.a.createElement(i.a,null,r.a.createElement(m.a,{className:"mr-1",href:"#",color:"primary"},"Primary"),r.a.createElement(m.a,{className:"mr-1",href:"#",color:"secondary"},"Secondary"),r.a.createElement(m.a,{className:"mr-1",href:"#",color:"success"},"Success"),r.a.createElement(m.a,{className:"mr-1",href:"#",color:"danger"},"Danger"),r.a.createElement(m.a,{className:"mr-1",href:"#",color:"warning"},"Warning"),r.a.createElement(m.a,{className:"mr-1",href:"#",color:"info"},"Info"),r.a.createElement(m.a,{className:"mr-1",href:"#",color:"light"},"Light"),r.a.createElement(m.a,{className:"mr-1",href:"#",color:"dark",pill:!0},"Dark"))))))}}a.default=f}}]);
//# sourceMappingURL=27.4120711d.chunk.js.map