(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[28],{589:function(e,a,t){"use strict";var l=t(19),n=t(51),s=t(1),r=t.n(s),i=t(59),c=t.n(i),o=t(506),m=t.n(o),u=t(507),d={tag:u.m,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,s=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),c=Object(u.i)(m()(a,"card-header"),t);return r.a.createElement(s,Object(l.a)({},i,{className:c}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},691:function(e,a,t){"use strict";var l=t(19),n=t(51),s=t(1),r=t.n(s),i=t(59),c=t.n(i),o=t(506),m=t.n(o),u=t(507),d={tag:u.m,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var a=e.className,t=e.cssModule,s=e.color,i=e.body,c=e.inverse,o=e.outline,d=e.tag,f=e.innerRef,h=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),E=Object(u.i)(m()(a,"card",!!c&&"text-white",!!i&&"card-body",!!s&&(o?"border":"bg")+"-"+s),t);return r.a.createElement(d,Object(l.a)({},h,{className:E,ref:f}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},692:function(e,a,t){"use strict";var l=t(19),n=t(51),s=t(1),r=t.n(s),i=t(59),c=t.n(i),o=t(506),m=t.n(o),u=t(507),d={tag:u.m,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,i=e.tag,c=Object(n.a)(e,["className","cssModule","innerRef","tag"]),o=Object(u.i)(m()(a,"card-body"),t);return r.a.createElement(i,Object(l.a)({},c,{className:o,ref:s}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},707:function(e,a,t){"use strict";var l=t(19),n=t(51),s=t(566),r=t(1),i=t.n(r),c=t(59),o=t.n(c),m=t(506),u=t.n(m),d=t(507),f=t(570),h={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:d.m,transition:o.a.shape(f.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},E={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(s.a)({},f.a.defaultProps,{unmountOnExit:!0})};function g(e){var a=e.className,t=e.closeClassName,r=e.closeAriaLabel,c=e.cssModule,o=e.tag,m=e.color,h=e.isOpen,E=e.toggle,g=e.children,p=e.transition,b=e.fade,k=e.innerRef,y=Object(n.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),N=Object(d.i)(u()(a,"alert","alert-"+m,{"alert-dismissible":E}),c),v=Object(d.i)(u()("close",t),c),j=Object(s.a)({},f.a.defaultProps,{},p,{baseClass:b?p.baseClass:"",timeout:b?p.timeout:0});return i.a.createElement(f.a,Object(l.a)({},y,j,{tag:o,className:N,in:h,role:"alert",innerRef:k}),E?i.a.createElement("button",{type:"button",className:v,"aria-label":r,onClick:E},i.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,g)}g.propTypes=h,g.defaultProps=E,a.a=g},988:function(e,a,t){"use strict";t.r(a);var l=t(158),n=t(159),s=t(165),r=t(161),i=t(160),c=t(1),o=t.n(c),m=t(586),u=t(587),d=t(691),f=t(589),h=t(692),E=t(707),g=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={visible:!0},n.onDismiss=n.onDismiss.bind(Object(s.a)(n)),n}return Object(n.a)(t,[{key:"onDismiss",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(m.a,null,o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(f.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("div",{className:"card-header-actions"},o.a.createElement("a",{href:"https://reactstrap.github.io/components/alerts/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},o.a.createElement("small",{className:"text-muted"},"docs")))),o.a.createElement(h.a,null,o.a.createElement(E.a,{color:"primary"},"This is a primary alert \u2014 check it out!"),o.a.createElement(E.a,{color:"secondary"},"This is a secondary alert \u2014 check it out!"),o.a.createElement(E.a,{color:"success"},"This is a success alert \u2014 check it out!"),o.a.createElement(E.a,{color:"danger"},"This is a danger alert \u2014 check it out!"),o.a.createElement(E.a,{color:"warning"},"This is a warning alert \u2014 check it out!"),o.a.createElement(E.a,{color:"info"},"This is a info alert \u2014 check it out!"),o.a.createElement(E.a,{color:"light"},"This is a light alert \u2014 check it out!"),o.a.createElement(E.a,{color:"dark"},"This is a dark alert \u2014 check it out!")))),o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(f.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("small",null," use ",o.a.createElement("code",null,".alert-link")," to provide links")),o.a.createElement(h.a,null,o.a.createElement(E.a,{color:"primary"},"This is a primary alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(E.a,{color:"secondary"},"This is a secondary alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(E.a,{color:"success"},"This is a success alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(E.a,{color:"danger"},"This is a danger alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(E.a,{color:"warning"},"This is a warning alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(E.a,{color:"info"},"This is a info alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(E.a,{color:"light"},"This is a light alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(E.a,{color:"dark"},"This is a dark alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."))))),o.a.createElement(m.a,null,o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(f.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("small",null,"additional content")),o.a.createElement(h.a,null,o.a.createElement(E.a,{color:"success"},o.a.createElement("h4",{className:"alert-heading"},"Well done!"),o.a.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),o.a.createElement("hr",null),o.a.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."))))),o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(f.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("small",null,"dismissing")),o.a.createElement(h.a,null,o.a.createElement(E.a,{color:"info",isOpen:this.state.visible,toggle:this.onDismiss},"I am an alert and I can be dismissed!"))))))}}]),t}(c.Component);a.default=g}}]);
//# sourceMappingURL=28.fa2b6de1.chunk.js.map