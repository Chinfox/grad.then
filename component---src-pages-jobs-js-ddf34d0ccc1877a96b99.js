webpackJsonp([0xd2a9905f465f],{198:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function l(e,n){return e.raw=n,e}n.__esModule=!0;var u=l(["\n  padding: 8px 4px;\n  font-size: 1rem;\n  border: 2px solid ",";\n  color: ",";\n"],["\n  padding: 8px 4px;\n  font-size: 1rem;\n  border: 2px solid ",";\n  color: ",";\n"]),d=l(["\n  margin: 0;\n  padding: 9px 4px;\n  border: 1px solid ",";\n  border-left-width: 0;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  text-transform: uppercase;\n  font-size: 1rem;\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n    border-color: ",";\n  }\n"],["\n  margin: 0;\n  padding: 9px 4px;\n  border: 1px solid ",";\n  border-left-width: 0;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  text-transform: uppercase;\n  font-size: 1rem;\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n    border-color: ",";\n  }\n"]),c=l(["\n  grid-area: ",";\n  display: grid;\n  grid-template-columns: 2fr 1fr 2fr;\n  grid-template-rows: auto;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  margin: 1rem 0 2rem 0;\n"],["\n  grid-area: ",";\n  display: grid;\n  grid-template-columns: 2fr 1fr 2fr;\n  grid-template-rows: auto;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  margin: 1rem 0 2rem 0;\n"]),s=l(["\n  grid-column: 4 / span 2;\n  justify-self: end;\n  margin-left: 0.2rem;\n"],["\n  grid-column: 4 / span 2;\n  justify-self: end;\n  margin-left: 0.2rem;\n"]),f=l(["\n  grid-column: 1 / span 2;\n  justify-self: start;\n"],["\n  grid-column: 1 / span 2;\n  justify-self: start;\n"]),p=l(["\n  min-width: 7rem;\n  padding: 0.5rem;\n  margin-left: 0.2rem;\n  font-size: 1rem;\n  background-color: ",";\n  color: ",";\n  text-transform: uppercase;\n  border: 2px solid transparent;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n  &.active {\n    background-color: ",";\n  }\n"],["\n  min-width: 7rem;\n  padding: 0.5rem;\n  margin-left: 0.2rem;\n  font-size: 1rem;\n  background-color: ",";\n  color: ",";\n  text-transform: uppercase;\n  border: 2px solid transparent;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n  &.active {\n    background-color: ",";\n  }\n"]),m=t(3),h=r(m),g=t(2),y=r(g),b=t(7),v=r(b),k=v.default.input(u,function(e){var n=e.theme;return n.secondary.red},function(e){var n=e.theme;return n.primary.dark}),x=v.default.button(d,function(e){var n=e.theme;return n.secondary.red},function(e){var n=e.theme;return n.secondary.red},function(e){var n=e.theme;return n.primary.dark},function(e){var n=e.theme;return n.primary.light},function(e){var n=e.theme;return n.white},function(e){var n=e.theme;return n.primary.light}),E=v.default.form(c,function(e){return e.area}),w=v.default.div(s),C=v.default.div(f),O=v.default.button(p,function(e){return e.theme.secondary.yellow},function(e){return e.theme.primary.dark},function(e){return e.theme.primary.light},function(e){return e.theme.white},function(e){return e.theme.secondary.red}),_=function(e){var n=e.menuItems,t=function(n){var t=n.target.innerHTML,r=n.target,o=document.getElementsByClassName("active")[0];n.preventDefault(),e.onChange(t),o.classList.remove("active"),r.classList.add("active")};return h.default.createElement(C,null,n.map(function(e,n){return h.default.createElement(O,{key:n,onClick:t,className:n?"":"active"},e)}))},S=function(e){var n=function(n){e.input(n.target.value)},t=function(n){n.preventDefault(),e.search()};return h.default.createElement(w,null,h.default.createElement(k,{type:"text",placeholder:"Enter search term",onChange:n}),h.default.createElement(x,{onClick:t},"Search"))},M=function(e){function n(){return o(this,n),a(this,e.apply(this,arguments))}return i(n,e),n.prototype.render=function(){return h.default.createElement(E,{area:this.props.area},h.default.createElement(_,{menuItems:this.props.items,onChange:this.props.changeDates}),h.default.createElement(S,{search:this.props.search,input:this.props.input}))},n}(m.Component);_.propTypes={menuItems:y.default.array.isRequired,onChange:y.default.func.isRequired},S.propTypes={search:y.default.func.isRequired,input:y.default.func.isRequired},E.propTypes={area:y.default.string.isRequired},M.propTypes={area:y.default.string.isRequired,items:y.default.array.isRequired,changeDates:y.default.func.isRequired,search:y.default.func.isRequired,input:y.default.func.isRequired},n.default=M,e.exports=n.default},201:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function l(e,n){return e.raw=n,e}n.__esModule=!0;var u=l(["\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: auto;\n  grid-column-gap: 1rem;\n  grid-template-areas:\n    '. fs fs fs fs fs fs fs fs fs fs .'\n    '. filt filt filt lst lst lst lst lst lst lst .';\n  margin-top: 2.5rem;\n"],["\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: auto;\n  grid-column-gap: 1rem;\n  grid-template-areas:\n    '. fs fs fs fs fs fs fs fs fs fs .'\n    '. filt filt filt lst lst lst lst lst lst lst .';\n  margin-top: 2.5rem;\n"]),d=l(["\n  grid-area: lst;\n  margin: 0;\n  padding: 0rem;\n"],["\n  grid-area: lst;\n  margin: 0;\n  padding: 0rem;\n"]),c=t(3),s=r(c),f=t(7),p=r(f),m=t(2),h=r(m),g=t(202),y=r(g),b=t(203),v=r(b),k=t(72),x=r(k),E=t(198),w=r(E),C=t(208),O=p.default.div(u),_=p.default.div(d),S=function(e){function n(t){o(this,n);var r=a(this,e.call(this,t));return r.state={menuFilter:["all","latest","last week","last month"],searchQuery:"",filter:["any","any","any","any"],query:[{title:"",type:"",role:"",location:"",description:""}]},r.handleChange=r.handleChange.bind(r),r.submitQuery=r.submitQuery.bind(r),r.changePage=r.changePage.bind(r),r.handleDates=r.handleDates.bind(r),r.handleSearch=r.handleSearch.bind(r),r.handleInput=r.handleInput.bind(r),r}return i(n,e),n.prototype.componentDidMount=function(){var e=this;(0,C.fakeAPI)().then(function(n){return e.setState({query:n})})},n.prototype.handleChange=function(e,n){var t=this.state.filter.slice();t[e-1]=n,this.setState({filter:t})},n.prototype.submitQuery=function(){var e=this,n=this.state.filter;(0,C.fakeAPI)(10,n).then(function(n){return e.setState({query:n})})},n.prototype.changePage=function(e){var n=this,t=function(){var e;if(n.state.searchQuery){var t=n.state.searchQuery;e=(0,C.fakeAPI)(void 0,void 0,t)}else e=(0,C.fakeAPI)();e.then(function(e){return n.setState({query:e})})};e===-1?t():(0===e,t())},n.prototype.handleDates=function(e){var n,t=this,r=this.state.query.length<5?7:this.state.query.length,o="all"===e?7:Math.floor(Math.random()*(r+1));if(this.state.searchQuery){var a=this.state.searchQuery;n=(0,C.fakeAPI)(o,void 0,a)}else n=(0,C.fakeAPI)(o);n.then(function(e){return t.setState({query:e})})},n.prototype.handleSearch=function(){var e=this;if(this.state.searchQuery){var n=this.state.searchQuery;(0,C.fakeAPISearch)(n).then(function(n){return e.setState({query:n})})}},n.prototype.handleInput=function(e){this.setState({searchQuery:e})},n.prototype.render=function(){var e=this.state.query;return s.default.createElement(O,null,s.default.createElement(w.default,{area:"fs",items:this.state.menuFilter,changeDates:this.handleDates,search:this.handleSearch,input:this.handleInput}),s.default.createElement(y.default,{titles:this.state.filter,onChange:this.handleChange,onSubmit:this.submitQuery}),s.default.createElement(_,null,e.map(function(e,n){return s.default.createElement(v.default,{key:n,area:"lst",title:e.title,text:e})}),s.default.createElement(x.default,{onChange:this.changePage,background:this.props.theme.white,pageNum:2})))},n}(s.default.Component);n.default=(0,f.withTheme)(S),S.propTypes={theme:h.default.oneOfType([h.default.func,h.default.object])},e.exports=n.default},202:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function l(e,n){return e.raw=n,e}n.__esModule=!0;var u=l(["\n  grid-area: filt;\n  display: block;\n  margin: 0 auto;\n  margin-top: 0.1rem;\n  margin-bottom: 11rem;\n"],["\n  grid-area: filt;\n  display: block;\n  margin: 0 auto;\n  margin-top: 0.1rem;\n  margin-bottom: 11rem;\n"]),d=l(["\n  position: relative;\n  margin-bottom: 0.5rem;\n  padding: 0.5rem;\n"],["\n  position: relative;\n  margin-bottom: 0.5rem;\n  padding: 0.5rem;\n"]),c=l(["\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  color: ",";\n  margin: 0.5rem;\n  padding: 0.5rem;\n"],["\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  color: ",";\n  margin: 0.5rem;\n  padding: 0.5rem;\n"]),s=l(["\n  min-width: 10rem;\n  padding: 1rem;\n  font-size: 1.2rem;\n  background-color: ",";\n  color: ",";\n  text-transform: uppercase;\n  border: none;\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"],["\n  min-width: 10rem;\n  padding: 1rem;\n  font-size: 1.2rem;\n  background-color: ",";\n  color: ",";\n  text-transform: uppercase;\n  border: none;\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"]),f=l(["\n  display: none;\n  position: absolute;\n  background-color: ",";\n  min-width: 10rem;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  &.show {\n    display: block;\n  }\n"],["\n  display: none;\n  position: absolute;\n  background-color: ",";\n  min-width: 10rem;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  &.show {\n    display: block;\n  }\n"]),p=l(["\n  padding: 12px 16px;\n  margin: 0;\n  display: block;\n  text-transform: uppercase;\n  font-size: 1.1rem;\n  color: ",";\n  &:visited,\n  &:active {\n    color: inherit;\n  }\n  &:hover {\n    color: ",";\n    background-color: ",";\n  }\n"],["\n  padding: 12px 16px;\n  margin: 0;\n  display: block;\n  text-transform: uppercase;\n  font-size: 1.1rem;\n  color: ",";\n  &:visited,\n  &:active {\n    color: inherit;\n  }\n  &:hover {\n    color: ",";\n    background-color: ",";\n  }\n"]),m=l(["\n  display: block;\n  min-width: 10rem;\n  padding: 1rem;\n  font-size: 1.4rem;\n  font-weight: 600;\n  border-width: 2px;\n  margin: 3rem 0 0 0.5rem;\n"],["\n  display: block;\n  min-width: 10rem;\n  padding: 1rem;\n  font-size: 1.4rem;\n  font-weight: 600;\n  border-width: 2px;\n  margin: 3rem 0 0 0.5rem;\n"]),h=t(3),g=r(h),y=t(7),b=r(y),v=t(2),k=r(v),x=t(12),E=t(70),w=b.default.div(u),C=b.default.div(d),O=x.StyledH3.extend(c,function(e){return e.theme.primary.light}),_=b.default.button(s,function(e){return e.theme.primary.light},function(e){return e.theme.white},function(e){return e.theme.secondary.red}),S=b.default.div(f,function(e){return e.theme.white}),M=x.StyledA.extend(p,function(e){return e.theme.primary.dark},function(e){return e.theme.white},function(e){return e.theme.primary.light}),j=E.Button.extend(m),T=function(e){function n(t){o(this,n);var r=a(this,e.call(this,t));return r.handleClick=r.handleClick.bind(r),r.handleOption=r.handleOption.bind(r),r.handleMouseLeave=r.handleMouseLeave.bind(r),r.handleSubmit=r.handleSubmit.bind(r),r}return i(n,e),n.prototype.handleClick=function(e){var n=e.target.id,t="opt-cont-"+n.substr(-1),r=document.getElementById(t);r.classList.toggle("show")},n.prototype.handleOption=function(e){var n=e.target.parentNode.id,t=n.substr(-1),r=e.target.parentNode,o=e.target.innerText,a="filter"+t,i=document.getElementById(a);i.innerHTML=o,r.classList.remove("show"),this.props.onChange(t,o.toLowerCase())},n.prototype.handleMouseLeave=function(e){var n=e.target.parentNode;n.classList.remove("show")},n.prototype.handleSubmit=function(){this.props.onSubmit()},n.prototype.render=function(){return g.default.createElement(w,null,g.default.createElement(C,null,g.default.createElement(O,null,"jobs type"),g.default.createElement(_,{id:"filter1",onClick:this.handleClick},this.props.titles[0]),g.default.createElement(S,{id:"opt-cont-1",onMouseLeave:this.handleMouseLeave},g.default.createElement(M,{onClick:this.handleOption},"any"),g.default.createElement(M,{onClick:this.handleOption},"full-time"),g.default.createElement(M,{onClick:this.handleOption},"part-time"),g.default.createElement(M,{onClick:this.handleOption},"remote"),g.default.createElement(M,{onClick:this.handleOption},"internship"))),g.default.createElement(C,null,g.default.createElement(O,null,"jobs role"),g.default.createElement(_,{id:"filter2",onClick:this.handleClick},this.props.titles[1]),g.default.createElement(S,{id:"opt-cont-2",onMouseLeave:this.handleMouseLeave},g.default.createElement(M,{onClick:this.handleOption},"any"),g.default.createElement(M,{onClick:this.handleOption},"front-end"),g.default.createElement(M,{onClick:this.handleOption},"back-end"),g.default.createElement(M,{onClick:this.handleOption},"full-stack"),g.default.createElement(M,{onClick:this.handleOption},"santa claus"))),g.default.createElement(C,null,g.default.createElement(O,null,"level"),g.default.createElement(_,{id:"filter3",onClick:this.handleClick},this.props.titles[2]),g.default.createElement(S,{id:"opt-cont-3",onMouseLeave:this.handleMouseLeave},g.default.createElement(M,{onClick:this.handleOption},"any"),g.default.createElement(M,{onClick:this.handleOption},"junior"),g.default.createElement(M,{onClick:this.handleOption},"middle"),g.default.createElement(M,{onClick:this.handleOption},"senior"),g.default.createElement(M,{onClick:this.handleOption},"wizard"))),g.default.createElement(C,null,g.default.createElement(O,null,"location"),g.default.createElement(_,{id:"filter4",onClick:this.handleClick},this.props.titles[3]),g.default.createElement(S,{id:"opt-cont-4",onMouseLeave:this.handleMouseLeave},g.default.createElement(M,{onClick:this.handleOption},"any"),g.default.createElement(M,{onClick:this.handleOption},"my city"),g.default.createElement(M,{onClick:this.handleOption},"my country"),g.default.createElement(M,{onClick:this.handleOption},"earth"))),g.default.createElement(j,{color:this.props.theme.primary.light,type:"submit",onClick:this.handleSubmit},"Submit"))},n}(g.default.Component);T.propTypes={titles:k.default.array.isRequired,onChange:k.default.func.isRequired,onSubmit:k.default.func.isRequired,theme:k.default.oneOfType([k.default.func,k.default.object])},n.default=(0,y.withTheme)(T),e.exports=n.default},203:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function l(e,n){return e.raw=n,e}n.__esModule=!0;var u=l(["\n  background: ",";\n  border-radius: 4px;\n  border: 1px solid ",";\n  margin: 0.5rem 0;\n"],["\n  background: ",";\n  border-radius: 4px;\n  border: 1px solid ",";\n  margin: 0.5rem 0;\n"]),d=l(["\n  color: inherit;\n  &:visited,\n  &:active {\n    color: inherit;\n  }\n  &:hover {\n    color: ",";\n  }\n"],["\n  color: inherit;\n  &:visited,\n  &:active {\n    color: inherit;\n  }\n  &:hover {\n    color: ",";\n  }\n"]),c=l(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: auto;\n  color: ",";\n  margin: 0rem;\n  padding: 0rem;\n"],["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: auto;\n  color: ",";\n  margin: 0rem;\n  padding: 0rem;\n"]),s=l(["\n  grid-column: 1 / span 4;\n  color: ",";\n  margin: 0.2rem;\n  padding: 0.2rem;\n"],["\n  grid-column: 1 / span 4;\n  color: ",";\n  margin: 0.2rem;\n  padding: 0.2rem;\n"]),f=l(["\n  font-weight: 600;\n  font-size: 1rem;\n  color: ",";\n  text-transform: capitalize;\n  margin: 0.2rem;\n  padding: 0.2rem;\n"],["\n  font-weight: 600;\n  font-size: 1rem;\n  color: ",";\n  text-transform: capitalize;\n  margin: 0.2rem;\n  padding: 0.2rem;\n"]),p=l(["\n  grid-column: 1 / span 4;\n  font-size: 1.1rem;\n  color: ",";\n  margin: 0.2rem;\n  padding: 0.2rem;\n"],["\n  grid-column: 1 / span 4;\n  font-size: 1.1rem;\n  color: ",";\n  margin: 0.2rem;\n  padding: 0.2rem;\n"]),m=t(3),h=r(m),g=t(7),y=r(g),b=t(43),v=r(b),k=t(2),x=r(k),E=t(12),w=y.default.div(u,function(e){return e.theme.white},function(e){return e.theme.primary.light}),C=(0,y.default)(v.default).attrs({color:function(e){return e.theme.secondary.red}})(d,function(e){return e.color}),O=y.default.div(c,function(e){return e.theme.primary.light}),_=E.StyledH3.extend(s,function(e){return e.theme.primary.light}),S=E.StyledP.extend(f,function(e){return e.theme.text}),M=E.StyledP.extend(p,function(e){return e.theme.text}),j=function(e){function n(){return o(this,n),a(this,e.apply(this,arguments))}return i(n,e),n.prototype.render=function(){return h.default.createElement(w,{area:this.props.area},"list"===this.props.type?h.default.createElement(O,null,h.default.createElement(_,null,h.default.createElement(C,{to:"/"},this.props.title))):h.default.createElement(O,null,h.default.createElement(_,null,h.default.createElement(C,{to:"/"},this.props.title)),h.default.createElement(S,null,"Type: "+this.props.text.type),h.default.createElement(S,null,"Role: "+this.props.text.role),h.default.createElement(S,null,"Level: "+this.props.text.level),h.default.createElement(S,null,"Location: "+this.props.text.location),h.default.createElement(M,null,this.props.text.description)))},n}(h.default.Component);n.default=j,w.propTypes={area:x.default.string.isRequired},j.propTypes={title:x.default.string.isRequired,text:x.default.object.isRequired,type:x.default.string,area:x.default.string.isRequired},e.exports=n.default},72:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){return e.raw=n,e}n.__esModule=!0;var a=o(["\n  border: 1px solid ",";\n  color: ",";\n  background: ",";\n  font-size: 1.2rem;\n  min-width: 3rem;\n  min-height: 3rem;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.2s;\n  &:hover {\n    color: ",";\n    background: ",";\n  }\n  &:active {\n    outline: none;\n  }\n\n  &:visited {\n    outline: none;\n  }\n"],["\n  border: 1px solid ",";\n  color: ",";\n  background: ",";\n  font-size: 1.2rem;\n  min-width: 3rem;\n  min-height: 3rem;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.2s;\n  &:hover {\n    color: ",";\n    background: ",";\n  }\n  &:active {\n    outline: none;\n  }\n\n  &:visited {\n    outline: none;\n  }\n"]),i=o(["\n  border-radius: 0px 4px 4px 0px;\n"],["\n  border-radius: 0px 4px 4px 0px;\n"]),l=o(["\n  border-radius: 4px 0px 0px 4px;\n"],["\n  border-radius: 4px 0px 0px 4px;\n"]),u=o(["\n  display: flex;\n  max-width: 200px;\n  border: none;\n  margin: 1rem auto;\n  padding: 0;\n"],["\n  display: flex;\n  max-width: 200px;\n  border: none;\n  margin: 1rem auto;\n  padding: 0;\n"]),d=t(3),c=r(d),s=t(7),f=r(s),p=t(2),m=r(p),h=f.default.button(a,function(e){return e.theme.primary.light},function(e){return e.color||e.theme.primary.light},function(e){return e.background||"lightgrey"},function(e){return e.background||"lightgrey"},function(e){return e.color||e.theme.primary.light}),g=h.extend(i),y=h.extend(l),b=f.default.div(u),v=function(e){var n=e.pageNum,t=Array.from({length:n},function(n,t){return c.default.createElement(h,{key:t.toString(),background:e.background,color:e.color,onClick:function(){return r(t)}},t+1)}),r=function(n){return e.onChange(n+1)},o=function(){return e.onChange(-1)},a=function(){return e.onChange(0)};return c.default.createElement(b,null,c.default.createElement(y,{background:e.background,color:e.color,onClick:o},e.backward||"⏪"),t,c.default.createElement(g,{background:e.background,color:e.color,onClick:a},e.forward||"⏩"))};v.propTypes={background:m.default.oneOfType([m.default.string,m.default.func]),color:m.default.oneOfType([m.default.string,m.default.func]),pageNum:m.default.number,backward:m.default.bool,forward:m.default.bool,onChange:m.default.func},n.default=v,e.exports=n.default},208:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["any","any","any","any"],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return new Promise(function(r){var o=Array.from({length:e},function(){return{title:t?t:i.default.commerce.productName(),type:n[0],role:n[1],level:n[2],location:n[3],description:i.default.hacker.phrase()}});setTimeout(function(){r(o)},2e3)})}n.__esModule=!0,n.fakeAPISearch=void 0,n.fakeAPI=o;var a=t(30),i=r(a);n.fakeAPISearch=function(e){var n=Math.floor(11*Math.random());return o(n,void 0,e)}},212:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var o=t(3),a=r(o),i=t(29),l=r(i),u=t(201),d=r(u),c=function(){return a.default.createElement("div",null,a.default.createElement(l.default,{type:"jobs"}),a.default.createElement(d.default,null))};n.default=c,e.exports=n.default}});
//# sourceMappingURL=component---src-pages-jobs-js-ddf34d0ccc1877a96b99.js.map