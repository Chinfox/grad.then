webpackJsonp([0xd2a9905f465f],{73:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function l(e,n){return e.raw=n,e}n.__esModule=!0;var d=l(["\n  display: flex;\n  justify-content: flex-start;\n  "," ",";\n"],["\n  display: flex;\n  justify-content: flex-start;\n  "," ",";\n"]),u=l(["\n    max-width: 260px;\n    flex-wrap: wrap;\n  "],["\n    max-width: 260px;\n    flex-wrap: wrap;\n  "]),s=l(["\n    max-width: 100%;\n    width: 100%;\n    justify-content: center;\n    margin-bottom: 1rem;\n    padding: 0 0.3rem;\n  "],["\n    max-width: 100%;\n    width: 100%;\n    justify-content: center;\n    margin-bottom: 1rem;\n    padding: 0 0.3rem;\n  "]),f=l(["\n  min-width: 120px;\n  padding: 0.5rem;\n  margin: 0 0 0.2rem 0.2rem;\n  font-size: 1rem;\n  background-color: ",";\n  color: ",";\n  text-transform: uppercase;\n  border: 2px solid transparent;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n  &.active {\n    background-color: ",";\n  }\n  "," "," ",";\n"],["\n  min-width: 120px;\n  padding: 0.5rem;\n  margin: 0 0 0.2rem 0.2rem;\n  font-size: 1rem;\n  background-color: ",";\n  color: ",";\n  text-transform: uppercase;\n  border: 2px solid transparent;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n  &.active {\n    background-color: ",";\n  }\n  "," "," ",";\n"]),m=l(["\n    min-width: 100px;\n  "],["\n    min-width: 100px;\n  "]),c=l(["\n    min-width: 120px;\n  "],["\n    min-width: 120px;\n  "]),p=l(["\n    min-width: 110px;\n    font-size: 0.9rem;\n  "],["\n    min-width: 110px;\n    font-size: 0.9rem;\n  "]),h=l(["\n  margin-left: 0.2rem;\n  justify-self: flex-end;\n  ",";\n"],["\n  margin-left: 0.2rem;\n  justify-self: flex-end;\n  ",";\n"]),g=l(["\n    width: auto;\n  "],["\n    width: auto;\n  "]),y=l(["\n  padding: 8px 4px;\n  font-size: 1rem;\n  border: 2px solid ",";\n  color: ",";\n  ",";\n"],["\n  padding: 8px 4px;\n  font-size: 1rem;\n  border: 2px solid ",";\n  color: ",";\n  ",";\n"]),b=l(["\n    max-width: 75%;\n    font-size: 0.9rem;\n  "],["\n    max-width: 75%;\n    font-size: 0.9rem;\n  "]),x=l(["\n  margin: 0;\n  padding: 9px 4px;\n  border: 1px solid ",";\n  border-left-width: 0;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  text-transform: uppercase;\n  font-size: 1rem;\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n    border-color: ",";\n  }\n  ",";\n"],["\n  margin: 0;\n  padding: 9px 4px;\n  border: 1px solid ",";\n  border-left-width: 0;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  text-transform: uppercase;\n  font-size: 1rem;\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n    border-color: ",";\n  }\n  ",";\n"]),w=l(["\n    font-size: 0.9rem;\n  "],["\n    font-size: 0.9rem;\n  "]),v=l(["\n  grid-area: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  font-size: 1rem;\n  margin: 1rem 0 2rem 0;\n  "," ",";\n"],["\n  grid-area: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  font-size: 1rem;\n  margin: 1rem 0 2rem 0;\n  "," ",";\n"]),k=l(["\n    margin-top: 0.2rem;\n    margin-bottom: 1rem;\n    align-items: center;\n  "],["\n    margin-top: 0.2rem;\n    margin-bottom: 1rem;\n    align-items: center;\n  "]),E=l(["\n    flex-wrap: wrap;\n    justify-content: center;\n  "],["\n    flex-wrap: wrap;\n    justify-content: center;\n  "]),C=t(3),z=r(C),O=t(2),_=r(O),j=t(5),S=r(j),M=t(6),P=S.default.div(d,M.media.desktop(u),M.media.tablet(s)),T=S.default.button(f,function(e){return e.theme.secondary.yellow},function(e){return e.theme.primary.dark},function(e){return e.theme.primary.light},function(e){return e.theme.white},function(e){return e.theme.secondary.red},M.media.giant(m),M.media.desktop(c),M.media.tablet(p)),I=function(e){var n=e.menuItems,t=function(n){var t=n.target.innerHTML,r=n.target,i=document.getElementsByClassName("active")[0];n.preventDefault(),e.onChange(t),i.classList.remove("active"),r.classList.add("active")};return z.default.createElement(P,null,n.map(function(e,n){return z.default.createElement(T,{key:n,onClick:t,className:n?"":"active"},e)}))},L=S.default.div(h,M.media.tablet(g)),q=S.default.input(y,function(e){var n=e.theme;return n.secondary.red},function(e){var n=e.theme;return n.primary.dark},M.media.tablet(b)),R=S.default.button(x,function(e){var n=e.theme;return n.secondary.red},function(e){var n=e.theme;return n.secondary.red},function(e){var n=e.theme;return n.primary.dark},function(e){var n=e.theme;return n.primary.light},function(e){var n=e.theme;return n.white},function(e){var n=e.theme;return n.primary.light},M.media.tablet(w)),N=function(e){var n=function(n){e.input(n.target.value)},t=function(n){n.preventDefault(),e.search()};return z.default.createElement(L,null,z.default.createElement(q,{type:"text",placeholder:"Enter search term",onChange:n}),z.default.createElement(R,{onClick:t},"Search"))},A=S.default.form(v,function(e){return e.area},M.media.desktop(k),M.media.tablet(E)),D=function(e){function n(){return i(this,n),a(this,e.apply(this,arguments))}return o(n,e),n.prototype.render=function(){return z.default.createElement(A,{area:this.props.area},z.default.createElement(I,{menuItems:this.props.items,onChange:this.props.changeDates}),z.default.createElement(N,{search:this.props.search,input:this.props.input}))},n}(C.Component);I.propTypes={menuItems:_.default.array.isRequired,onChange:_.default.func.isRequired},N.propTypes={search:_.default.func.isRequired,input:_.default.func.isRequired},A.propTypes={area:_.default.string.isRequired},D.propTypes={area:_.default.string.isRequired,items:_.default.array.isRequired,changeDates:_.default.func.isRequired,search:_.default.func.isRequired,input:_.default.func.isRequired},n.default=D,e.exports=n.default},205:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function l(e,n){return e.raw=n,e}n.__esModule=!0;var d=l(["\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: auto;\n  grid-column-gap: 1rem;\n  grid-template-areas:\n    '. fs fs fs fs fs fs fs fs fs fs .'\n    '. filt filt filt lst lst lst lst lst lst lst .';\n  margin-top: 2.5rem;\n  "," ",";\n"],["\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: auto;\n  grid-column-gap: 1rem;\n  grid-template-areas:\n    '. fs fs fs fs fs fs fs fs fs fs .'\n    '. filt filt filt lst lst lst lst lst lst lst .';\n  margin-top: 2.5rem;\n  "," ",";\n"]),u=l(["\n    grid-column-gap: 0.5rem;\n    grid-template-areas:\n      'fs fs fs fs fs fs fs fs fs fs fs fs'\n      'filt filt filt filt lst lst lst lst lst lst lst .';\n  "],["\n    grid-column-gap: 0.5rem;\n    grid-template-areas:\n      'fs fs fs fs fs fs fs fs fs fs fs fs'\n      'filt filt filt filt lst lst lst lst lst lst lst .';\n  "]),s=l(["\n    grid-column-gap: 0.5rem;\n    grid-template-areas:\n      'fs fs fs fs fs fs fs fs fs fs fs fs'\n      'filt filt filt filt filt filt filt filt filt filt filt filt'\n      '. lst lst lst lst lst lst lst lst lst lst .';\n  "],["\n    grid-column-gap: 0.5rem;\n    grid-template-areas:\n      'fs fs fs fs fs fs fs fs fs fs fs fs'\n      'filt filt filt filt filt filt filt filt filt filt filt filt'\n      '. lst lst lst lst lst lst lst lst lst lst .';\n  "]),f=l(["\n  grid-area: lst;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  margin: 0;\n  padding: 0;\n"],["\n  grid-area: lst;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  margin: 0;\n  padding: 0;\n"]),m=t(3),c=r(m),p=t(5),h=r(p),g=t(2),y=r(g),b=t(6),x=t(206),w=r(x),v=t(74),k=r(v),E=t(39),C=r(E),z=t(73),O=r(z),_=t(76),j=h.default.div(d,b.media.tablet(u),b.media.phone(s)),S=h.default.div(f),M=function(e){function n(t){i(this,n);var r=a(this,e.call(this,t));return r.state={menuFilter:["all","latest","last week","last month"],searchQuery:"",filter:["any","any","any","any"],query:[{title:"",type:"",role:"",location:"",description:""}]},r.handleChange=r.handleChange.bind(r),r.submitQuery=r.submitQuery.bind(r),r.changePage=r.changePage.bind(r),r.handleDates=r.handleDates.bind(r),r.handleSearch=r.handleSearch.bind(r),r.handleInput=r.handleInput.bind(r),r}return o(n,e),n.prototype.componentDidMount=function(){var e=this;(0,_.fakeAPI)().then(function(n){return e.setState({query:n})})},n.prototype.handleChange=function(e,n){var t=this.state.filter.slice();t[e-1]=n,this.setState({filter:t})},n.prototype.submitQuery=function(){var e=this,n=this.state.filter;(0,_.fakeAPI)(10,n).then(function(n){return e.setState({query:n})})},n.prototype.changePage=function(e){var n=this,t=function(){var e;if(n.state.searchQuery){var t=n.state.searchQuery;e=(0,_.fakeAPI)(void 0,void 0,t)}else e=(0,_.fakeAPI)();e.then(function(e){return n.setState({query:e})})};e===-1?t():(0===e,t())},n.prototype.handleDates=function(e){var n,t=this,r=this.state.filter,i=this.state.query.length<5?7:this.state.query.length,a="all"===e?7:Math.floor(Math.random()*(i+1));if(this.state.searchQuery){var o=this.state.searchQuery;n=(0,_.fakeAPI)(a,void 0,o)}else n=(0,_.fakeAPI)(a,r);n.then(function(e){return t.setState({query:e})})},n.prototype.handleSearch=function(){var e=this;if(this.state.searchQuery){var n=this.state.searchQuery;(0,_.fakeAPISearch)(n).then(function(n){return e.setState({query:n})})}},n.prototype.handleInput=function(e){this.setState({searchQuery:e})},n.prototype.render=function(){var e=this.state.query;return c.default.createElement(j,null,c.default.createElement(O.default,{area:"fs",items:this.state.menuFilter,changeDates:this.handleDates,search:this.handleSearch,input:this.handleInput}),c.default.createElement(w.default,{titles:this.state.filter,onChange:this.handleChange,onSubmit:this.submitQuery}),c.default.createElement(S,null,e.map(function(e,n){return c.default.createElement(k.default,{key:n,area:"lst",title:e.title,text:e})}),c.default.createElement(C.default,{onChange:this.changePage,background:this.props.theme.white,pageNum:2})))},n}(c.default.Component);n.default=(0,p.withTheme)(M),M.propTypes={theme:y.default.oneOfType([y.default.func,y.default.object])},e.exports=n.default},206:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function l(e,n){return e.raw=n,e}n.__esModule=!0;var d=l(["\n  grid-area: filt;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 0.1rem;\n  margin-bottom: 11rem;\n  ",";\n"],["\n  grid-area: filt;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 0.1rem;\n  margin-bottom: 11rem;\n  ",";\n"]),u=l(["\n    flex-flow: row wrap;\n    align-items: flex-end;\n    padding: 0.25rem;\n    margin-bottom: 0.6rem;\n    justify-content: space-around;\n  "],["\n    flex-flow: row wrap;\n    align-items: flex-end;\n    padding: 0.25rem;\n    margin-bottom: 0.6rem;\n    justify-content: space-around;\n  "]),s=l(["\n  position: relative;\n  margin-bottom: 0.5rem;\n  padding: 0.5rem;\n  ",";\n"],["\n  position: relative;\n  margin-bottom: 0.5rem;\n  padding: 0.5rem;\n  ",";\n"]),f=l(["\n    padding: 0.2rem;\n  "],["\n    padding: 0.2rem;\n  "]),m=l(["\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  color: ",";\n  margin: 0.5rem;\n  padding: 0.5rem;\n  "," "," ",";\n"],["\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  color: ",";\n  margin: 0.5rem;\n  padding: 0.5rem;\n  "," "," ",";\n"]),c=l(["\n    font-size: 1rem;\n    padding: 0;\n    margin: 0.3rem 0;\n  "],["\n    font-size: 1rem;\n    padding: 0;\n    margin: 0.3rem 0;\n  "]),p=l(["\n    padding: 0.3rem 0;\n  "],["\n    padding: 0.3rem 0;\n  "]),h=l(["\n    text-align: center;\n    font-size: 0.8rem;\n  "],["\n    text-align: center;\n    font-size: 0.8rem;\n  "]),g=l(["\n  min-width: 12rem;\n  padding: 1rem;\n  font-size: 1.2rem;\n  background-color: ",";\n  color: ",";\n  border: none;\n  display: flex;\n  justify-content: space-between;\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n  "," "," "," ",";\n"],["\n  min-width: 12rem;\n  padding: 1rem;\n  font-size: 1.2rem;\n  background-color: ",";\n  color: ",";\n  border: none;\n  display: flex;\n  justify-content: space-between;\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n  "," "," "," ",";\n"]),y=l(["\n    min-width: 10rem;\n    padding: 0.7rem;\n    font-size: 1.2rem;\n    svg {\n      width: 1.2rem;\n      height: 1.2rem;\n    }\n  "],["\n    min-width: 10rem;\n    padding: 0.7rem;\n    font-size: 1.2rem;\n    svg {\n      width: 1.2rem;\n      height: 1.2rem;\n    }\n  "]),b=l(["\n    min-width: 9rem;\n    font-size: 1rem;\n    padding: 0.8rem;\n  "],["\n    min-width: 9rem;\n    font-size: 1rem;\n    padding: 0.8rem;\n  "]),x=l(["\n    min-width: 8.5rem;\n  "],["\n    min-width: 8.5rem;\n  "]),w=l(["\n    min-width: 9rem;\n    font-size: 1rem;\n    text-transform: lowercase;\n    flex: 1 0 80px;\n    svg {\n      width: 1rem;\n      height: 1rem;\n    }\n  "],["\n    min-width: 9rem;\n    font-size: 1rem;\n    text-transform: lowercase;\n    flex: 1 0 80px;\n    svg {\n      width: 1rem;\n      height: 1rem;\n    }\n  "]),v=l(["\n  display: none;\n  position: absolute;\n  background-color: ",";\n  min-width: 12rem;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  &.show {\n    display: block;\n  }\n  "," "," "," ",";\n"],["\n  display: none;\n  position: absolute;\n  background-color: ",";\n  min-width: 12rem;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  &.show {\n    display: block;\n  }\n  "," "," "," ",";\n"]),k=l(["\n    min-width: 10rem;\n  "],["\n    min-width: 10rem;\n  "]),E=l(["\n    min-width: 9rem;\n  "],["\n    min-width: 9rem;\n  "]),C=l(["\n  padding: 12px 16px;\n  margin: 0;\n  display: block;\n  font-size: 1.1rem;\n  color: ",";\n  &:visited,\n  &:active {\n    color: inherit;\n  }\n  &:hover {\n    color: ",";\n    background-color: ",";\n  }\n  "," "," ",";\n"],["\n  padding: 12px 16px;\n  margin: 0;\n  display: block;\n  font-size: 1.1rem;\n  color: ",";\n  &:visited,\n  &:active {\n    color: inherit;\n  }\n  &:hover {\n    color: ",";\n    background-color: ",";\n  }\n  "," "," ",";\n"]),z=l(["\n    padding: 0.5rem 0.2rem;\n    font-size: 1.15rem;\n  "],["\n    padding: 0.5rem 0.2rem;\n    font-size: 1.15rem;\n  "]),O=l(["\n    padding: 0.5rem 0.6rem;\n    font-size: 1rem;\n  "],["\n    padding: 0.5rem 0.6rem;\n    font-size: 1rem;\n  "]),_=l(["\n    font-size: 1rem;\n    padding: 0.4rem 0.6rem;\n    text-transform: lowercase;\n  "],["\n    font-size: 1rem;\n    padding: 0.4rem 0.6rem;\n    text-transform: lowercase;\n  "]),j=l(["\n  display: block;\n  min-width: 10rem;\n  padding: 1rem;\n  font-size: 1.4rem;\n  font-weight: 600;\n  border-width: 2px;\n  margin: 3rem 0 0 0;\n  "," "," "," ",";\n"],["\n  display: block;\n  min-width: 10rem;\n  padding: 1rem;\n  font-size: 1.4rem;\n  font-weight: 600;\n  border-width: 2px;\n  margin: 3rem 0 0 0;\n  "," "," "," ",";\n"]),S=l(["\n    min-width: 8rem;\n    padding: 0.5rem;\n    font-size: 1.2rem;\n    margin-top: 2.5rem;\n  "],["\n    min-width: 8rem;\n    padding: 0.5rem;\n    font-size: 1.2rem;\n    margin-top: 2.5rem;\n  "]),M=l(["\n    min-width: 7rem;\n    padding: 0.5rem;\n    font-size: 1.2rem;\n    margin: 2rem 0 0 0;\n  "],["\n    min-width: 7rem;\n    padding: 0.5rem;\n    font-size: 1.2rem;\n    margin: 2rem 0 0 0;\n  "]),P=l(["\n    min-width: 6.5rem;\n  "],["\n    min-width: 6.5rem;\n  "]),T=l(["\n    min-width: 10rem;\n    font-size: 0.9rem;\n    margin: 0.9rem 0;\n  "],["\n    min-width: 10rem;\n    font-size: 0.9rem;\n    margin: 0.9rem 0;\n  "]),I=t(3),L=r(I),q=t(5),R=r(q),N=t(2),A=r(N),D=t(6),Q=t(71),B=t(29),H=r(B),W=t(30),F=R.default.div(d,D.media.phone(u)),J=R.default.div(s,D.media.phone(f)),U=D.StyledH3.extend(m,function(e){return e.theme.primary.light},D.media.giant(c),D.media.desktop(p),D.media.phone(h)),Y=R.default.button(g,function(e){return e.theme.primary.light},function(e){return e.theme.white},function(e){return e.theme.secondary.red},D.media.giant(y),D.media.desktop(b),D.media.tablet(x),D.media.phone(w)),G=R.default.div(v,function(e){return e.theme.white},D.media.giant(k),D.media.desktop(E),D.media.tablet(x),D.media.phone(E)),K=D.StyledA.extend(C,function(e){return e.theme.primary.dark},function(e){return e.theme.white},function(e){return e.theme.primary.light},D.media.desktop(z),D.media.desktop(O),D.media.phone(_)),V=Q.Button.extend(j,D.media.giant(S),D.media.desktop(M),D.media.tablet(P),D.media.phone(T)),X=function(e){function n(t){i(this,n);var r=a(this,e.call(this,t));return r.handleClick=r.handleClick.bind(r),r.handleOption=r.handleOption.bind(r),r.handleMouseLeave=r.handleMouseLeave.bind(r),r.handleSubmit=r.handleSubmit.bind(r),r}return o(n,e),n.prototype.handleClick=function(e){var n=e.target.id,t="opt-cont-"+n.substr(-1),r=document.getElementById(t);r.classList.toggle("show")},n.prototype.handleOption=function(e){var n=e.target.parentNode.id,t=n.substr(-1),r=e.target.parentNode,i=e.target.innerText,a="filter"+t,o=document.getElementById(a);o.firstChild.innerHTML=i,r.classList.remove("show"),this.props.onChange(t,i.toLowerCase())},n.prototype.handleMouseLeave=function(e){var n=e.target.parentNode;n.classList.remove("show")},n.prototype.handleSubmit=function(){this.props.onSubmit()},n.prototype.render=function(){return L.default.createElement(F,null,L.default.createElement(J,null,L.default.createElement(U,null,"jobs type"),L.default.createElement(Y,{id:"filter1",onClick:this.handleClick},L.default.createElement("span",null,this.props.titles[0]),L.default.createElement(H.default,{icon:W.ICONS.CIRCLEDOWN,size:24,color:function(e){var n=e.theme;return n.white}})),L.default.createElement(G,{id:"opt-cont-1",onMouseLeave:this.handleMouseLeave},L.default.createElement(K,{onClick:this.handleOption},"any"),L.default.createElement(K,{onClick:this.handleOption},"full-time"),L.default.createElement(K,{onClick:this.handleOption},"part-time"),L.default.createElement(K,{onClick:this.handleOption},"remote"),L.default.createElement(K,{onClick:this.handleOption},"internship"))),L.default.createElement(J,null,L.default.createElement(U,null,"jobs role"),L.default.createElement(Y,{id:"filter2",onClick:this.handleClick},L.default.createElement("span",null,this.props.titles[1]),L.default.createElement(H.default,{icon:W.ICONS.CIRCLEDOWN,size:24,color:function(e){var n=e.theme;return n.white}})),L.default.createElement(G,{id:"opt-cont-2",onMouseLeave:this.handleMouseLeave},L.default.createElement(K,{onClick:this.handleOption},"any"),L.default.createElement(K,{onClick:this.handleOption},"front-end"),L.default.createElement(K,{onClick:this.handleOption},"back-end"),L.default.createElement(K,{onClick:this.handleOption},"full-stack"),L.default.createElement(K,{onClick:this.handleOption},"santa claus"))),L.default.createElement(J,null,L.default.createElement(U,null,"level"),L.default.createElement(Y,{id:"filter3",onClick:this.handleClick},L.default.createElement("span",null,this.props.titles[2]),L.default.createElement(H.default,{icon:W.ICONS.CIRCLEDOWN,size:24,color:function(e){var n=e.theme;return n.white}})),L.default.createElement(G,{id:"opt-cont-3",onMouseLeave:this.handleMouseLeave},L.default.createElement(K,{onClick:this.handleOption},"any"),L.default.createElement(K,{onClick:this.handleOption},"junior"),L.default.createElement(K,{onClick:this.handleOption},"middle"),L.default.createElement(K,{onClick:this.handleOption},"senior"),L.default.createElement(K,{onClick:this.handleOption},"wizard"))),L.default.createElement(J,null,L.default.createElement(U,null,"location"),L.default.createElement(Y,{id:"filter4",onClick:this.handleClick},L.default.createElement("span",null,this.props.titles[3]),L.default.createElement(H.default,{icon:W.ICONS.CIRCLEDOWN,size:24,color:function(e){var n=e.theme;return n.white}})),L.default.createElement(G,{id:"opt-cont-4",onMouseLeave:this.handleMouseLeave},L.default.createElement(K,{onClick:this.handleOption},"any"),L.default.createElement(K,{onClick:this.handleOption},"my city"),L.default.createElement(K,{onClick:this.handleOption},"my country"),L.default.createElement(K,{onClick:this.handleOption},"earth"))),L.default.createElement(V,{color:this.props.theme.primary.light,type:"submit",onClick:this.handleSubmit},"Submit"))},n}(L.default.Component);X.propTypes={titles:A.default.array.isRequired,onChange:A.default.func.isRequired,onSubmit:A.default.func.isRequired,theme:A.default.oneOfType([A.default.func,A.default.object])},n.default=(0,q.withTheme)(X),e.exports=n.default},74:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function l(e,n){return e.raw=n,e}n.__esModule=!0;var d=l(["\n  background: ",";\n  border-radius: 4px;\n  border: 1px solid ",";\n  margin: 0.5rem 0;\n  padding: 0.5rem 0.5rem 0.5rem 0.7rem;\n"],["\n  background: ",";\n  border-radius: 4px;\n  border: 1px solid ",";\n  margin: 0.5rem 0;\n  padding: 0.5rem 0.5rem 0.5rem 0.7rem;\n"]),u=l(["\n  color: inherit;\n  &:visited,\n  &:active {\n    color: inherit;\n  }\n  &:hover {\n    color: ",";\n  }\n"],["\n  color: inherit;\n  &:visited,\n  &:active {\n    color: inherit;\n  }\n  &:hover {\n    color: ",";\n  }\n"]),s=l(["\n  color: ",";\n  margin: 0rem;\n  padding: 0rem;\n"],["\n  color: ",";\n  margin: 0rem;\n  padding: 0rem;\n"]),f=l(["\n  color: ",";\n  margin: 0.2rem 0.2rem 0.2rem 0;\n  padding: 0.2rem 0.2rem 0.2rem 0;\n  "," ",";\n"],["\n  color: ",";\n  margin: 0.2rem 0.2rem 0.2rem 0;\n  padding: 0.2rem 0.2rem 0.2rem 0;\n  "," ",";\n"]),m=l(["\n    font-size: 1.2rem;\n  "],["\n    font-size: 1.2rem;\n  "]),c=l(["\n    font-size: 1rem;\n  "],["\n    font-size: 1rem;\n  "]),p=l(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  ",";\n"],["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  ",";\n"]),h=l(["\n    justify-content: flex-start;\n  "],["\n    justify-content: flex-start;\n  "]),g=l(["\n  font-weight: 600;\n  font-size: 1rem;\n  color: ",";\n  text-transform: capitalize;\n  margin: 0.2rem 0.2rem 0.2rem 0;\n  padding: 0.2rem 0.2rem 0.2rem 0;\n  ",";\n  ",";\n"],["\n  font-weight: 600;\n  font-size: 1rem;\n  color: ",";\n  text-transform: capitalize;\n  margin: 0.2rem 0.2rem 0.2rem 0;\n  padding: 0.2rem 0.2rem 0.2rem 0;\n  ",";\n  ",";\n"]),y=l(["\n    font-size: 0.8rem;\n  "],["\n    font-size: 0.8rem;\n  "]),b=l(["\n    flex: 1 0 50%;\n  "],["\n    flex: 1 0 50%;\n  "]),x=l(["\n  font-size: 1.1rem;\n  color: ",";\n  margin: 0.2rem 0.2rem 0.2rem 0;\n  padding: 0.2rem 0.2rem 0.2rem 0;\n  ",";\n"],["\n  font-size: 1.1rem;\n  color: ",";\n  margin: 0.2rem 0.2rem 0.2rem 0;\n  padding: 0.2rem 0.2rem 0.2rem 0;\n  ",";\n"]),w=l(["\n    font-size: 0.95rem;\n  "],["\n    font-size: 0.95rem;\n  "]),v=t(3),k=r(v),E=t(5),C=r(E),z=t(31),O=r(z),_=t(2),j=r(_),S=t(6),M=t(75),P=r(M),T=C.default.div(d,function(e){return e.theme.white},function(e){return e.theme.primary.light}),I=(0,C.default)(O.default).attrs({color:function(e){return e.theme.secondary.red}})(u,function(e){return e.color}),L=C.default.div(s,function(e){return e.theme.primary.light}),q=S.StyledH3.extend(f,function(e){return e.theme.primary.light},S.media.desktop(m),S.media.tablet(c)),R=C.default.div(p,S.media.phone(h)),N=S.StyledP.extend(g,function(e){return e.theme.text},S.media.tablet(y),S.media.phone(b)),A=S.StyledP.extend(x,function(e){return e.theme.text},S.media.tablet(w)),D=function(e){function n(){return i(this,n),a(this,e.apply(this,arguments))}return o(n,e),n.prototype.render=function(){return k.default.createElement(T,{area:this.props.area},"list"===this.props.type?k.default.createElement(L,null,k.default.createElement(q,null,k.default.createElement(I,{to:"/"},this.props.title)),k.default.createElement(P.default,null),k.default.createElement(R,null,k.default.createElement(N,null,"Starting date: "+this.props.text.date),k.default.createElement(N,null,"Duration: "+this.props.text.period),k.default.createElement(N,null,"Level: "+this.props.text.level),k.default.createElement(N,null,"Topic: "+this.props.text.topic)),k.default.createElement(A,null,this.props.text.description)):k.default.createElement(L,null,k.default.createElement(q,null,k.default.createElement(I,{to:"/"},this.props.title)),k.default.createElement(P.default,null),k.default.createElement(R,null,k.default.createElement(N,null,"Type: "+this.props.text.type),k.default.createElement(N,null,"Role: "+this.props.text.role),k.default.createElement(N,null,"Level: "+this.props.text.level),k.default.createElement(N,null,"Location: "+this.props.text.location)),k.default.createElement(A,null,this.props.text.description)))},n}(k.default.Component);n.default=D,T.propTypes={area:j.default.string.isRequired},D.propTypes={title:j.default.string.isRequired,text:j.default.object.isRequired,type:j.default.string,area:j.default.string.isRequired},e.exports=n.default},39:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n){return e.raw=n,e}n.__esModule=!0;var a=i(["\n  border: 1px solid ",";\n  color: ",";\n  background: ",";\n  font-size: 1.2rem;\n  min-width: 3rem;\n  min-height: 3rem;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.2s;\n  &:hover {\n    color: ",";\n    background: ",";\n  }\n  &:active {\n    outline: none;\n  }\n  &:visited {\n    outline: none;\n  }\n  ",";\n"],["\n  border: 1px solid ",";\n  color: ",";\n  background: ",";\n  font-size: 1.2rem;\n  min-width: 3rem;\n  min-height: 3rem;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.2s;\n  &:hover {\n    color: ",";\n    background: ",";\n  }\n  &:active {\n    outline: none;\n  }\n  &:visited {\n    outline: none;\n  }\n  ",";\n"]),o=i(["\n    font-size: 1rem;\n    min-width: 2rem;\n    min-height: 2rem;\n  "],["\n    font-size: 1rem;\n    min-width: 2rem;\n    min-height: 2rem;\n  "]),l=i(["\n  border-radius: 0px 4px 4px 0px;\n"],["\n  border-radius: 0px 4px 4px 0px;\n"]),d=i(["\n  border-radius: 4px 0px 0px 4px;\n"],["\n  border-radius: 4px 0px 0px 4px;\n"]),u=i(["\n  display: flex;\n  max-width: 200px;\n  border: none;\n  margin: 1rem auto;\n  padding: 0;\n"],["\n  display: flex;\n  max-width: 200px;\n  border: none;\n  margin: 1rem auto;\n  padding: 0;\n"]),s=t(3),f=r(s),m=t(5),c=r(m),p=t(2),h=r(p),g=t(6),y=c.default.button(a,function(e){return e.theme.primary.light},function(e){return e.color||e.theme.primary.light},function(e){return e.background||"lightgrey"},function(e){return e.background||"lightgrey"},function(e){return e.color||e.theme.primary.light},g.media.desktop(o)),b=y.extend(l),x=y.extend(d),w=c.default.div(u),v=function(e){var n=e.pageNum,t=Array.from({length:n},function(n,t){return f.default.createElement(y,{key:t.toString(),background:e.background,color:e.color,onClick:function(){return r(t)}},t+1)}),r=function(n){return e.onChange(n+1)},i=function(){return e.onChange(-1)},a=function(){return e.onChange(0)};return f.default.createElement(w,null,f.default.createElement(x,{background:e.background,color:e.color,onClick:i},e.backward||"⏪"),t,f.default.createElement(b,{background:e.background,color:e.color,onClick:a},e.forward||"⏩"))};v.propTypes={background:h.default.oneOfType([h.default.string,h.default.func]),color:h.default.oneOfType([h.default.string,h.default.func]),pageNum:h.default.number,backward:h.default.bool,forward:h.default.bool,onChange:h.default.func},n.default=v,e.exports=n.default},75:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n){return e.raw=n,e}n.__esModule=!0;var a=i(["\n  color: ",";\n  font-size: 1.5rem;\n  font-family: Open Sans;\n  margin: 0.75rem 0 0;\n  font-style: italic;\n"],["\n  color: ",";\n  font-size: 1.5rem;\n  font-family: Open Sans;\n  margin: 0.75rem 0 0;\n  font-style: italic;\n"]),o=i(["\n  height: 5px;\n  width: 40px;\n  background: ",";\n  margin-left: 0;\n  border: none;\n"],["\n  height: 5px;\n  width: 40px;\n  background: ",";\n  margin-left: 0;\n  border: none;\n"]),l=i(["\n  margin: 1rem 0;\n  "," "," ",";\n"],["\n  margin: 1rem 0;\n  "," "," ",";\n"]),d=i(["\n    margin: 0.8rem 0;\n  "],["\n    margin: 0.8rem 0;\n  "]),u=i(["\n    margin: 0.6rem 0;\n  "],["\n    margin: 0.6rem 0;\n  "]),s=i(["\n    margin: 0.4rem 0;\n  "],["\n    margin: 0.4rem 0;\n  "]),f=t(3),m=r(f),c=t(5),p=r(c),h=t(2),g=r(h),y=t(6),b=p.default.blockquote(a,function(e){return e.theme.primary.dark}),x=p.default.hr(o,function(e){return e.theme.primary.dark}),w=p.default.div(l,y.media.giant(d),y.media.desktop(u),y.media.tablet(s)),v=function(e){return m.default.createElement(w,null,m.default.createElement(x,null),m.default.createElement(b,null,e.children))};n.default=v,v.propTypes={children:g.default.string},e.exports=n.default},76:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["any","any","any","any"],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return new Promise(function(r){var i=Array.from({length:e},function(){return{title:t?t:l.default.commerce.productName(),type:n[0],role:n[1],level:n[2],location:n[3],description:l.default.hacker.phrase()}});setTimeout(function(){r(i)},2e3)})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=function(){var e=l.default.date.future();return e.getDate()+"."+(e.getMonth()+1)+"."+e.getFullYear()},r=function(){var e=Math.floor(13*Math.random()),n=Math.random()<.49?"week":"month";
return 1===e?e+" "+n:e+" "+n+"s"};return new Promise(function(i){var a=Array.from({length:e},function(){return{title:l.default.commerce.productName(),date:t(),period:r(),level:l.default.company.catchPhraseAdjective(),topic:n?n:l.default.company.catchPhraseNoun(),description:l.default.hacker.phrase()}});setTimeout(function(){i(a)},1e3)})}n.__esModule=!0,n.fakeLearnAPISearch=n.fakeAPISearch=void 0,n.fakeAPI=i,n.fakeLearnAPI=a;var o=t(25),l=r(o);n.fakeAPISearch=function(e){var n=Math.floor(11*Math.random());return i(n,void 0,e)},n.fakeLearnAPISearch=function(e){var n=Math.floor(6*Math.random()),t=e.slice(0,1).toUpperCase()+e.slice(1);return a(n,t)}},215:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var i=t(3),a=r(i),o=t(28),l=r(o),d=t(205),u=r(d),s=function(){return a.default.createElement("div",null,a.default.createElement(l.default,{type:"jobs"}),a.default.createElement(u.default,null))};n.default=s,e.exports=n.default}});
//# sourceMappingURL=component---src-pages-jobs-js-8fd2af7b0e81ed57e82c.js.map