webpackJsonp([0xdf49b16e737],{72:function(n,e,t){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}function o(n,e){return n.raw=e,n}e.__esModule=!0;var u=o(["\n  border: 1px solid ",";\n  color: ",";\n  background: ",";\n  font-size: 1.2rem;\n  min-width: 3rem;\n  min-height: 3rem;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.2s;\n  &:hover {\n    color: ",";\n    background: ",";\n  }\n  &:active {\n    outline: none;\n  }\n\n  &:visited {\n    outline: none;\n  }\n"],["\n  border: 1px solid ",";\n  color: ",";\n  background: ",";\n  font-size: 1.2rem;\n  min-width: 3rem;\n  min-height: 3rem;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.2s;\n  &:hover {\n    color: ",";\n    background: ",";\n  }\n  &:active {\n    outline: none;\n  }\n\n  &:visited {\n    outline: none;\n  }\n"]),a=o(["\n  border-radius: 0px 4px 4px 0px;\n"],["\n  border-radius: 0px 4px 4px 0px;\n"]),l=o(["\n  border-radius: 4px 0px 0px 4px;\n"],["\n  border-radius: 4px 0px 0px 4px;\n"]),d=o(["\n  display: flex;\n  max-width: 200px;\n  border: none;\n  margin: 1rem auto;\n  padding: 0;\n"],["\n  display: flex;\n  max-width: 200px;\n  border: none;\n  margin: 1rem auto;\n  padding: 0;\n"]),i=t(3),c=r(i),f=t(7),p=r(f),s=t(2),g=r(s),m=p.default.button(u,function(n){return n.theme.primary.light},function(n){return n.color||n.theme.primary.light},function(n){return n.background||"lightgrey"},function(n){return n.background||"lightgrey"},function(n){return n.color||n.theme.primary.light}),x=m.extend(a),b=m.extend(l),h=p.default.div(d),k=function(n){var e=n.pageNum,t=Array.from({length:e},function(e,t){return c.default.createElement(m,{key:t.toString(),background:n.background,color:n.color,onClick:function(){return r(t)}},t+1)}),r=function(e){return n.onChange(e+1)},o=function(){return n.onChange(-1)},u=function(){return n.onChange(0)};return c.default.createElement(h,null,c.default.createElement(b,{background:n.background,color:n.color,onClick:o},n.backward||"⏪"),t,c.default.createElement(x,{background:n.background,color:n.color,onClick:u},n.forward||"⏩"))};k.propTypes={background:g.default.oneOfType([g.default.string,g.default.func]),color:g.default.oneOfType([g.default.string,g.default.func]),pageNum:g.default.number,backward:g.default.bool,forward:g.default.bool,onChange:g.default.func},e.default=k,n.exports=e.default},214:function(n,e,t){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}function o(n,e){return n.raw=e,n}e.__esModule=!0;var u=o(["\n  text-align: center;\n  text-transform: uppercase;\n  color: ",";\n"],["\n  text-align: center;\n  text-transform: uppercase;\n  color: ",";\n"]),a=t(3),l=r(a),d=t(29),i=r(d),c=t(12),f=t(51),p=r(f),s=t(52),g=t(72),m=r(g),x=c.StyledH2.extend(u,function(n){return n.theme.primary.light}),b=function(){return l.default.createElement("div",null,l.default.createElement(i.default,{type:"stories"}),l.default.createElement(x,null,"Stories Page"),l.default.createElement(p.default,{cols:2},(0,s.addCards)(4,"story")),l.default.createElement("div",{style:{display:"flex",justifyContent:"center",padding:"4px"}},l.default.createElement(m.default,{pageNum:5})))};e.default=b,n.exports=e.default}});
//# sourceMappingURL=component---src-pages-stories-js-8e62f7235d6689eb91e5.js.map