webpackJsonp([0xd2a9905f465f],{188:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){return e.raw=t,e}t.__esModule=!0;var u=o(["\n  width: 400px;\n  display: grid;\n  /* grid-template-columns: 3fr;\n  grid-template-rows: auto; */\n  grid-template-areas: 'text text text';\n  background: ",";\n  border-radius: 4px;\n  border: 1px solid ",";\n"],["\n  width: 400px;\n  display: grid;\n  /* grid-template-columns: 3fr;\n  grid-template-rows: auto; */\n  grid-template-areas: 'text text text';\n  background: ",";\n  border-radius: 4px;\n  border: 1px solid ",";\n"]),d=o(["\n  color: inherit;\n  &:visited,\n  &:active {\n    color: inherit;\n  }\n  &:hover {\n    color: ",";\n  }\n"],["\n  color: inherit;\n  &:visited,\n  &:active {\n    color: inherit;\n  }\n  &:hover {\n    color: ",";\n  }\n"]),c=o(["\n  display: inline;\n  color: ",";\n  margin: 0rem;\n  padding: 0rem;\n"],["\n  display: inline;\n  color: ",";\n  margin: 0rem;\n  padding: 0rem;\n"]),f=o(["\n  color: ",";\n  margin: 0.05rem;\n  padding: 0rem;\n"],["\n  color: ",";\n  margin: 0.05rem;\n  padding: 0rem;\n"]),m=o(["\n  /* grid-area: text; */\n  /* margin: 0.5rem; */\n  padding: 0.5rem;\n"],["\n  /* grid-area: text; */\n  /* margin: 0.5rem; */\n  padding: 0.5rem;\n"]),s=n(3),p=r(s),h=n(10),g=r(h),y=n(30),x=r(y),b=n(11),E=g.default.div(u,function(e){return e.theme.white},function(e){return e.theme.primary.light}),w=(0,g.default)(x.default).attrs({color:function(e){return e.theme.secondary.red}})(d,function(e){return e.color}),_=b.StyledLi.extend(c,function(e){return e.theme.primary.light}),v=b.StyledH3.extend(f,function(e){return e.theme.primary.light}),k=b.StyledP.extend(f,function(e){return e.theme.primary.light}),S=g.default.div(m),O=function(e){function t(){return l(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return p.default.createElement(E,null,p.default.createElement(S,null,"list"===this.props.type?p.default.createElement(_,null,p.default.createElement(v,null,p.default.createElement(w,null,this.props.title))):p.default.createElement(_,null,p.default.createElement(v,null,p.default.createElement(w,null,this.props.title)),p.default.createElement(k,null,this.props.text))))},t}(p.default.Component);t.default=O,e.exports=t.default},191:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return e.raw=t,e}t.__esModule=!0;var a=l(["\n  color: ",";\n  font-size: 1.5rem;\n  font-family: Open Sans;\n  margin: 0.75rem 0 0;\n  font-style: italic;\n"],["\n  color: ",";\n  font-size: 1.5rem;\n  font-family: Open Sans;\n  margin: 0.75rem 0 0;\n  font-style: italic;\n"]),i=l(["\n  height: 5px;\n  width: 40px;\n  background: ",";\n  margin-left: 0;\n  border: none;\n"],["\n  height: 5px;\n  width: 40px;\n  background: ",";\n  margin-left: 0;\n  border: none;\n"]),o=l(["\n  margin: 2rem 0;\n"],["\n  margin: 2rem 0;\n"]),u=n(3),d=r(u),c=n(10),f=r(c),m=f.default.blockquote(a,function(e){return e.theme.primary.dark}),s=f.default.hr(i,function(e){return e.theme.primary.dark}),p=f.default.div(o);t.default=function(e){return d.default.createElement(p,null,d.default.createElement(s,null),d.default.createElement(m,null,e.children))},e.exports=t.default},197:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(3),a=r(l),i=n(29),o=r(i),u=n(11),d=n(188),c=r(d),f=n(191),m=r(f),s=n(27),p=r(s),h=function(){return a.default.createElement("div",null,a.default.createElement(o.default,{type:"jobs"}),a.default.createElement(u.StyledH1,null,"Jobs Page"),a.default.createElement(u.StyledP,null,"This is the Jobs page"),a.default.createElement(m.default,null,"Thin Jobs"),a.default.createElement(c.default,{type:"list",title:p.default.commerce.productName(),text:p.default.hacker.phrase()}),a.default.createElement(m.default,null,"Thick Jobs"),a.default.createElement(c.default,{title:p.default.commerce.productName(),text:p.default.hacker.phrase()}))};t.default=h,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-jobs-js-1f6089d9c2a2c26677ae.js.map