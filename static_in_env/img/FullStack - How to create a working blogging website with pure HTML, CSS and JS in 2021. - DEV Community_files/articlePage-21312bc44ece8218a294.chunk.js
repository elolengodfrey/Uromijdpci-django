(window.webpackJsonp=window.webpackJsonp||[]).push([[16,3,4,127],{0:function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return q})),n.d(t,"hydrate",(function(){return W})),n.d(t,"createElement",(function(){return m})),n.d(t,"h",(function(){return m})),n.d(t,"Fragment",(function(){return g})),n.d(t,"createRef",(function(){return h})),n.d(t,"isValidElement",(function(){return u})),n.d(t,"Component",(function(){return b})),n.d(t,"cloneElement",(function(){return F})),n.d(t,"createContext",(function(){return $})),n.d(t,"toChildArray",(function(){return A})),n.d(t,"options",(function(){return o}));var r,o,i,u,l,c,a,s,d={},f=[],_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function p(e,t){for(var n in t)e[n]=t[n];return e}function v(e){var t=e.parentNode;t&&t.removeChild(e)}function m(e,t,n){var o,i,u,l={};for(u in t)"key"==u?o=t[u]:"ref"==u?i=t[u]:l[u]=t[u];if(arguments.length>2&&(l.children=arguments.length>3?r.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(u in e.defaultProps)void 0===l[u]&&(l[u]=e.defaultProps[u]);return y(e,l,o,i,null)}function y(e,t,n,r,u){var l={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==u?++i:u};return null==u&&null!=o.vnode&&o.vnode(l),l}function h(){return{current:null}}function g(e){return e.children}function b(e,t){this.props=e,this.context=t}function w(e,t){if(null==t)return e.__?w(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?w(e):null}function E(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return E(e)}}function C(e){(!e.__d&&(e.__d=!0)&&l.push(e)&&!k.__r++||a!==o.debounceRendering)&&((a=o.debounceRendering)||c)(k)}function k(){for(var e;k.__r=l.length;)e=l.sort((function(e,t){return e.__v.__b-t.__v.__b})),l=[],e.some((function(e){var t,n,r,o,i,u;e.__d&&(i=(o=(t=e).__v).__e,(u=t.__P)&&(n=[],(r=p({},o)).__v=o.__v+1,B(u,o,r,t.__n,void 0!==u.ownerSVGElement,null!=o.__h?[i]:null,n,null==i?w(o):i,o.__h),P(n,o),o.__e!=i&&E(o)))}))}function S(e,t,n,r,o,i,u,l,c,a){var s,_,p,v,m,h,b,E=r&&r.__k||f,C=E.length;for(n.__k=[],s=0;s<t.length;s++)if(null!=(v=n.__k[s]=null==(v=t[s])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v||"bigint"==typeof v?y(null,v,null,null,v):Array.isArray(v)?y(g,{children:v},null,null,null):v.__b>0?y(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(p=E[s])||p&&v.key==p.key&&v.type===p.type)E[s]=void 0;else for(_=0;_<C;_++){if((p=E[_])&&v.key==p.key&&v.type===p.type){E[_]=void 0;break}p=null}B(e,v,p=p||d,o,i,u,l,c,a),m=v.__e,(_=v.ref)&&p.ref!=_&&(b||(b=[]),p.ref&&b.push(p.ref,null,v),b.push(_,v.__c||m,v)),null!=m?(null==h&&(h=m),"function"==typeof v.type&&v.__k===p.__k?v.__d=c=I(v,c,e):c=j(e,v,p,E,m,c),"function"==typeof n.type&&(n.__d=c)):c&&p.__e==c&&c.parentNode!=e&&(c=w(p))}for(n.__e=h,s=C;s--;)null!=E[s]&&("function"==typeof n.type&&null!=E[s].__e&&E[s].__e==n.__d&&(n.__d=w(r,s+1)),M(E[s],E[s]));if(b)for(s=0;s<b.length;s++)U(b[s],b[++s],b[++s])}function I(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t="function"==typeof r.type?I(r,t,n):j(n,r,r,o,r.__e,t));return t}function A(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){A(e,t)})):t.push(e)),t}function j(e,t,n,r,o,i){var u,l,c;if(void 0!==t.__d)u=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),u=null;else{for(l=i,c=0;(l=l.nextSibling)&&c<r.length;c+=2)if(l==o)break e;e.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function L(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||_.test(t)?n:n+"px"}function x(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||L(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||L(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?T:O,i):e.removeEventListener(t,i?T:O,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function O(e){this.l[e.type+!1](o.event?o.event(e):e)}function T(e){this.l[e.type+!0](o.event?o.event(e):e)}function B(e,t,n,r,i,u,l,c,a){var s,d,f,_,v,m,y,h,w,E,C,k=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(a=n.__h,c=t.__e=n.__e,t.__h=null,u=[c]),(s=o.__b)&&s(t);try{e:if("function"==typeof k){if(h=t.props,w=(s=k.contextType)&&r[s.__c],E=s?w?w.props.value:s.__:r,n.__c?y=(d=t.__c=n.__c).__=d.__E:("prototype"in k&&k.prototype.render?t.__c=d=new k(h,E):(t.__c=d=new b(h,E),d.constructor=k,d.render=D),w&&w.sub(d),d.props=h,d.state||(d.state={}),d.context=E,d.__n=r,f=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=k.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=p({},d.__s)),p(d.__s,k.getDerivedStateFromProps(h,d.__s))),_=d.props,v=d.state,f)null==k.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==k.getDerivedStateFromProps&&h!==_&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(h,E),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(h,d.__s,E)||t.__v===n.__v){d.props=h,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),d.__h.length&&l.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(h,d.__s,E),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(_,v,m)}))}d.context=E,d.props=h,d.state=d.__s,(s=o.__r)&&s(t),d.__d=!1,d.__v=t,d.__P=e,s=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(r=p(p({},r),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(m=d.getSnapshotBeforeUpdate(_,v)),C=null!=s&&s.type===g&&null==s.key?s.props.children:s,S(e,Array.isArray(C)?C:[C],t,n,r,i,u,l,c,a),d.base=t.__e,t.__h=null,d.__h.length&&l.push(d),y&&(d.__E=d.__=null),d.__e=!1}else null==u&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=N(n.__e,t,n,r,i,u,l,a);(s=o.diffed)&&s(t)}catch(e){t.__v=null,(a||null!=u)&&(t.__e=c,t.__h=!!a,u[u.indexOf(c)]=null),o.__e(e,t,n)}}function P(e,t){o.__c&&o.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){o.__e(e,t.__v)}}))}function N(e,t,n,o,i,u,l,c){var a,s,f,_=n.props,p=t.props,m=t.type,y=0;if("svg"===m&&(i=!0),null!=u)for(;y<u.length;y++)if((a=u[y])&&"setAttribute"in a==!!m&&(m?a.localName===m:3===a.nodeType)){e=a,u[y]=null;break}if(null==e){if(null===m)return document.createTextNode(p);e=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,p.is&&p),u=null,c=!1}if(null===m)_===p||c&&e.data===p||(e.data=p);else{if(u=u&&r.call(e.childNodes),s=(_=n.props||d).dangerouslySetInnerHTML,f=p.dangerouslySetInnerHTML,!c){if(null!=u)for(_={},y=0;y<e.attributes.length;y++)_[e.attributes[y].name]=e.attributes[y].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||x(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||x(e,i,t[i],n[i],r)}(e,p,_,i,c),f)t.__k=[];else if(y=t.props.children,S(e,Array.isArray(y)?y:[y],t,n,o,i&&"foreignObject"!==m,u,l,u?u[0]:n.__k&&w(n,0),c),null!=u)for(y=u.length;y--;)null!=u[y]&&v(u[y]);c||("value"in p&&void 0!==(y=p.value)&&(y!==e.value||"progress"===m&&!y||"option"===m&&y!==_.value)&&x(e,"value",y,_.value,!1),"checked"in p&&void 0!==(y=p.checked)&&y!==e.checked&&x(e,"checked",y,_.checked,!1))}return e}function U(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){o.__e(e,n)}}function M(e,t,n){var r,i;if(o.unmount&&o.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||U(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){o.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&M(r[i],t,"function"!=typeof e.type);n||null==e.__e||v(e.__e),e.__e=e.__d=void 0}function D(e,t,n){return this.constructor(e,n)}function q(e,t,n){var i,u,l;o.__&&o.__(e,t),u=(i="function"==typeof n)?null:n&&n.__k||t.__k,l=[],B(t,e=(!i&&n||t).__k=m(g,null,[e]),u||d,d,void 0!==t.ownerSVGElement,!i&&n?[n]:u?null:t.firstChild?r.call(t.childNodes):null,l,!i&&n?n:u?u.__e:t.firstChild,i),P(l,e)}function W(e,t){q(e,t,W)}function F(e,t,n){var o,i,u,l=p({},e.props);for(u in t)"key"==u?o=t[u]:"ref"==u?i=t[u]:l[u]=t[u];return arguments.length>2&&(l.children=arguments.length>3?r.call(arguments,2):n),y(e.type,l,o||e.key,i||e.ref,null)}function $(e,t){var n={__c:t="__cC"+s++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(C)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}r=f.slice,o={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},i=0,u=function(e){return null!=e&&void 0===e.constructor},b.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(p({},n),this.props)),e&&p(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),C(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),C(this))},b.prototype.render=g,l=[],c="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,k.__r=0,s=0},10:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(9),o=n(11);function i(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=function(){return Object(o.a)(c)},c=function(){var e,t=i(document.querySelectorAll("[data-repositioning-dropdown]"));try{for(t.s();!(e=t.n()).done;){var n=e.value;n.classList.remove("reverse");var o="block"===n.style.display;o||(n.style.opacity=0,n.style.display="block"),Object(r.a)({element:n})||n.classList.add("reverse"),o||(n.style.removeProperty("display"),n.style.removeProperty("opacity"))}}catch(u){t.e(u)}finally{t.f()}},a='button, [href], input:not([type="hidden"]), select, textarea, [tabindex="0"]',s=function(e){var t,n=e.triggerElementId,r=e.dropdownContentId,o=e.onClose,i=document.getElementById(r);i&&(null===(t=document.getElementById(n))||void 0===t||t.setAttribute("aria-expanded","false"),i.style.removeProperty("display"),null===o||void 0===o||o())},d=function(e){var t=e.triggerElementId,n=e.dropdownContentId,r=e.dropdownContentCloseButtonId,o=e.onClose,i=e.onOpen,u=document.getElementById(t),l=document.getElementById(n);if(u&&l){u.setAttribute("aria-expanded","false"),u.setAttribute("aria-controls",n),u.setAttribute("aria-haspopup","true");var c,d=function(e){var r=e.key;if("Escape"===r)"true"===u.getAttribute("aria-expanded")&&(s({triggerElementId:t,dropdownContentId:n,onClose:_}),u.focus());else if("Tab"===r){(null===l||void 0===l?void 0:l.contains(document.activeElement))||s({triggerElementId:t,dropdownContentId:n,onClose:_})}},f=function(e){var r=e.target;r===u||l.contains(r)||u.contains(r)||(s({triggerElementId:t,dropdownContentId:n,onClose:_}),r.matches(a)||u.focus())},_=function(){null===o||void 0===o||o(),document.removeEventListener("keyup",d),document.removeEventListener("click",f)};if(u.addEventListener("click",(function(){var e;"true"===(null===(e=document.getElementById(t))||void 0===e?void 0:e.getAttribute("aria-expanded"))?s({triggerElementId:t,dropdownContentId:n,onClose:_}):(!function(e){var t,n=e.triggerElementId,r=e.dropdownContentId,o=document.getElementById(r);document.getElementById(n).setAttribute("aria-expanded","true"),o.style.display="block",null===(t=o.querySelector(a))||void 0===t||t.focus()}({triggerElementId:t,dropdownContentId:n}),null===i||void 0===i||i(),document.addEventListener("keyup",d),document.addEventListener("click",f))})),r)null===(c=document.getElementById(r))||void 0===c||c.addEventListener("click",(function(){var e;s({triggerElementId:t,dropdownContentId:n,onClose:_}),null===(e=document.getElementById(t))||void 0===e||e.focus()}));return{closeDropdown:function(){s({triggerElementId:t,dropdownContentId:n,onClose:_})}}}}},11:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(12),o=n.n(r);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.time,r=void 0===n?300:n,i=t.config,l=void 0===i?{leading:!1}:i,c=u({},l);return o()(e,r,c)}},12:function(e,t,n){(function(t){var n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,a=l||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,f=Math.min,_=function(){return a.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=o.test(e);return l||i.test(e)?u(e.slice(2),l?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,i,u,l,c,a=0,s=!1,m=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,i=o;return r=o=void 0,a=t,u=e.apply(i,n)}function g(e){return a=e,l=setTimeout(w,t),s?h(e):u}function b(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-a>=i}function w(){var e=_();if(b(e))return E(e);l=setTimeout(w,function(e){var n=t-(e-c);return m?f(n,i-(e-a)):n}(e))}function E(e){return l=void 0,y&&r?h(e):(r=o=void 0,u)}function C(){var e=_(),n=b(e);if(r=arguments,o=this,c=e,n){if(void 0===l)return g(c);if(m)return l=setTimeout(w,t),h(c)}return void 0===l&&(l=setTimeout(w,t)),u}return t=v(t)||0,p(n)&&(s=!!n.leading,i=(m="maxWait"in n)?d(v(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),C.cancel=function(){void 0!==l&&clearTimeout(l),a=0,r=c=o=l=void 0},C.flush=function(){return void 0===l?u:E(_())},C}}).call(this,n(22))},129:function(e,t,n){"use strict";n.r(t);var r,o=n(0),i=n(14),u=n(55),l=n(10),c=n(38),a=n(37);function s(e,t,n,r,o,i,u){try{var l=e[i](u),c=l.value}catch(a){return void n(a)}l.done?t(c):Promise.resolve(c).then(r,o)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){s(i,r,o,u,l,"next",e)}function l(e){s(i,r,o,u,l,"throw",e)}u(void 0)}))}}function f(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){l=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw i}}}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e){var t=e.tagContainer,n=e.showSubscribeAction,r=void 0!==n&&n,o=e.appleAuth,i=void 0!==o&&o,u=t.getElementsByClassName("ltag__user-subscription-tag__signed-in")[0],l=t.getElementsByClassName("ltag__user-subscription-tag__apple-auth")[0];return r?i?(u.classList.add("hidden"),void l.classList.remove("hidden")):void u.classList.remove("hidden"):(l.classList.add("hidden"),void u.classList.add("hidden"))}function v(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.getElementsByClassName("ltag__user-subscription-tag__signed-out")[0];t?n.classList.remove("hidden"):n.classList.add("hidden")}function m(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.getElementsByClassName("ltag__user-subscription-tag__profile-images")[0];t?(n.classList.add("signed-in"),n.classList.remove("signed-out"),e.getElementsByClassName("ltag__user-subscription-tag__subscriber-profile-image")[0].classList.remove("hidden")):(n.classList.remove("signed-in"),n.classList.add("signed-out"),e.getElementsByClassName("ltag__user-subscription-tag__subscriber-profile-image")[0].classList.add("hidden"))}function y(e){p({tagContainer:e,showSubscribeAction:!1}),v(e,!0),m(e,!1)}function h(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];p({tagContainer:e,showSubscribeAction:!0,appleAuth:t}),v(e,!1),m(e,!0),e.querySelector(".ltag__user-subscription-tag__signed-in .crayons-btn").addEventListener("click",(function(){window.Forem.showModal({title:"Confirm subscribe",contentSelector:".user-subscription-confirmation-modal .crayons-modal__box__body",overlay:!0,onOpen:function(){document.querySelector("#window-modal .ltag__user-subscription-tag____cancel-btn").addEventListener("click",window.Forem.closeModal),document.querySelector("#window-modal .ltag__user-subscription-tag__confirmation-btn").addEventListener("click",g)}})}))}function g(){window.Forem.closeModal(),function(){var e,t=f(document.getElementsByClassName("ltag__user-subscription-tag__response-message"));try{for(t.s();!(e=t.n()).done;){e.value.classList.add("hidden")}}catch(n){t.e(n)}finally{t.f()}E(!0)}(),function(){var e,t,n;b({disabled:!0,textContent:"Submitting"});var r=null!==(e=null===(t=document.getElementById("article-body"))||void 0===t||null===(n=t.dataset)||void 0===n?void 0:n.articleId)&&void 0!==e?e:null,o=userData(),i=JSON.stringify({user_subscription:{source_type:"Article",source_id:r,subscriber_email:o.email}});return getCsrfToken().then(sendFetch("user_subscriptions",i)).then((function(e){return e.json()}))}().then((function(e){if(e.success){var t=document.getElementsByClassName("ltag__user-subscription-tag");k();var n,r=f(t);try{for(r.s();!(n=r.n()).done;){p({tagContainer:n.value,showSubscribeAction:!1})}}catch(o){r.e(o)}finally{r.f()}}else w({variant:"danger",content:e.error}),b({disabled:!1,textContent:"Subscribe"})}))}function b(e){var t,n=e.disabled,r=e.textContent,o=f(document.querySelectorAll(".ltag__user-subscription-tag__signed-in .crayons-btn"));try{for(o.s();!(t=o.n()).done;){var i=t.value;i.disabled=n,i.textContent=r}}catch(u){o.e(u)}finally{o.f()}}function w(e){var t,n=e.variant,r=e.content,o=f(document.getElementsByClassName("ltag__user-subscription-tag__response-message"));try{for(o.s();!(t=o.n()).done;){var i=t.value;i.classList.remove("hidden"),i.classList.add("crayons-notice--".concat(n)),i.textContent=r}}catch(u){o.e(u)}finally{o.f()}E(!1)}function E(e){var t,n=f(document.querySelectorAll(".ltag__user-subscription-tag__signed-in .ltag__user-subscription-tag__logged-in-text"));try{for(n.s();!(t=n.n()).done;){var r=t.value;e?r.classList.remove("hidden"):r.classList.add("hidden")}}catch(o){n.e(o)}finally{n.f()}}function C(){var e=document.getElementById("article-body").dataset.articleId,t=new URLSearchParams({source_type:"Article",source_id:e}).toString(),n={Accept:"application/json","X-CSRF-Token":window.csrfToken,"Content-Type":"application/json"};return fetch("/user_subscriptions/subscribed?".concat(t),{method:"GET",headers:n,credentials:"same-origin"}).then((function(e){if(e.ok)return e.json();console.error("Base data error: ".concat(e.status," - ").concat(e.statusText))}))}function k(){var e=document.getElementsByClassName("ltag__user-subscription-tag")[0].dataset.authorUsername;w({variant:"success",content:"You are now subscribed and may receive emails from ".concat(e)})}function S(e){var t=e.profile_image_90,n=e.username;document.querySelectorAll(".ltag__user-subscription-tag__subscriber-profile-image").forEach((function(e){e.src=t,e.alt=n}))}function I(){return(I=d((function*(){var e=document.getElementsByClassName("ltag__user-subscription-tag__container");if("logged-out"!==document.querySelector("body").dataset.userStatus){var t,n=(yield Object(a.a)()).currentUser,r=n.apple_auth,o=f(e);try{for(o.s();!(t=o.n()).done;){h(t.value,r)}}catch(l){o.e(l)}finally{o.f()}S(n),C().then((function(t){var n=t.is_subscribed;n&&k();var o,i=f(e);try{for(i.s();!(o=i.n()).done;){p({tagContainer:o.value,showSubscribeAction:!n,appleAuth:r})}}catch(l){i.e(l)}finally{i.f()}}))}else{var i,u=f(e);try{for(u.s();!(i=u.n()).done;){y(i.value)}}catch(l){u.e(l)}finally{u.f()}}}))).apply(this,arguments)}function A(e,t,n,r,o,i,u){try{var l=e[i](u),c=l.value}catch(a){return void n(a)}l.done?t(c):Promise.resolve(c).then(r,o)}function j(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){A(i,r,o,u,l,"next",e)}function l(e){A(i,r,o,u,l,"throw",e)}u(void 0)}))}}var L=document.querySelectorAll('[data-animated="true"]');L.length>0&&n.e(120).then(n.bind(null,141)).then((function(e){(0,e.initializePausableAnimatedImages)(L)}));var x=document.getElementsByClassName("js-fullscreen-code-action");x&&Object(u.a)(x);var O=document.getElementById("snack-zone");O&&Object(o.render)(Object(o.h)(i.Snackbar,{lifespan:3}),O),top.addSnackbarItem=i.addSnackbarItem;var T=document.getElementById("article-show-more-button");if("true"!==T.dataset.initialized){if(Runtime.isNativeAndroid("shareText"))T.addEventListener("click",(function(){return AndroidBridge.shareText(location.href)}));else{var B=Object(l.b)({triggerElementId:"article-show-more-button",dropdownContentId:"article-show-more-dropdown",onClose:function(){document.getElementById("article-copy-link-announcer").hidden=!0}}).closeDropdown;document.querySelectorAll("#article-show-more-dropdown [href]").forEach((function(e){e.addEventListener("click",(function(e){B(e)}))}))}T.dataset.initialized="true"}null===(r=document.getElementById("copy-post-url-button"))||void 0===r||r.addEventListener("click",(function(){var e=document.getElementById("copy-post-url-button").getAttribute("data-postUrl");Runtime.copyToClipboard(e).then((function(){document.getElementById("article-copy-link-announcer").hidden=!1}))})),getCsrfToken().then(j((function*(){var e=document.body.dataset,t=e.user,r=void 0===t?null:t,u=e.userStatus,l=document.getElementById("comment-subscription"),c="logged-in"===u;try{var a=yield n.e(119).then(n.bind(null,142)),s=a.getCommentSubscriptionStatus,d=a.setCommentSubscriptionStatus,f=a.CommentSubscription,_=document.getElementById("article-body").dataset.articleId,p="not_subscribed";if(c&&null!==r)p=(yield s(_)).config;var v=function(){var e=j((function*(e){var t=yield d(_,e);Object(i.addSnackbarItem)({message:t,addCloseButton:!0})}));return function(t){return e.apply(this,arguments)}}();Object(o.render)(Object(o.h)(f,{subscriptionType:p,positionType:"static",onSubscribe:v,onUnsubscribe:v,isLoggedIn:c}),l)}catch(m){document.getElementById("comment-subscription").innerHTML='<p className="color-accent-danger">Unable to load Comment Subscription component.<br />Try refreshing the page.</p>'}})));var P=document.querySelector("#comments");P&&Object(c.a)(P),function(){I.apply(this,arguments)}()},22:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=function(e){var t=e.resolve,n=e.reject,r=e.waitTime,o=void 0===r?20:r,i=0;return function e(){if(3e3!==i){var r,u=(document,null!==(r=document.querySelector("meta[name='csrf-token']"))?r.content:void 0),l=document.body.dataset.user;if(l&&void 0!==u){var c=JSON.parse(l);t({currentUser:c,csrfToken:u})}else i+=o,setTimeout(e,o)}else n(new Error("Couldn't find user data on page."))}};function o(){return new Promise((function(e,t){r({resolve:e,reject:t})()}))}},38:function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=i(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,u=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw u}}}}function i(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t,n,r,o,i,u){try{var l=e[i](u),c=l.value}catch(a){return void n(a)}l.done?t(c):Promise.resolve(c).then(r,o)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){l(i,r,o,u,c,"next",e)}function c(e){l(i,r,o,u,c,"throw",e)}u(void 0)}))}}var a;function s(){return d.apply(this,arguments)}function d(){return(d=c((function*(){if(a)return a;var e=(yield n.e(126).then(n.t.bind(null,47,7))).default;return a=e}))).apply(this,arguments)}function f(e){var t,n=[],i=o(e);try{for(i.s();!(t=i.n()).done;){var u=t.value;1===u.nodeType&&(u.classList.contains("ltag_gist-liquid-tag")&&n.push(u),n.push.apply(n,r(u.querySelectorAll(".ltag_gist-liquid-tag"))))}}catch(l){i.e(l)}finally{i.f()}return n}function _(e,t){var n,r=o(t);try{var i=function(){var t=n.value,r=t.firstElementChild;e(t,r.outerHTML,{beforeWrite:function(e){return t.childElementCount>3?"":e}}),r.remove()};for(r.s();!(n=r.n()).done;)i()}catch(u){r.e(u)}finally{r.f()}}function p(e,t){var n=new MutationObserver((function(e){var n,r=o(e);try{for(r.s();!(n=r.n()).done;){var i=n.value,u=i.type,l=i.addedNodes;"childList"===u&&l.length>0&&_(t,f(l))}}catch(c){r.e(c)}finally{r.f()}}));n.observe(e,{attributes:!1,childList:!0,subtree:!0}),InstantClick.on("change",(function(){n.disconnect()})),window.addEventListener("beforeunload",(function(){n.disconnect()}))}function v(e){return m.apply(this,arguments)}function m(){return(m=c((function*(e){var t=yield s();_(t,document.querySelectorAll(".ltag_gist-liquid-tag")),p(e,t)}))).apply(this,arguments)}n.d(t,"a",(function(){return v}))},55:function(e,t,n){"use strict";function r(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,u=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw u}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return f}));var i=!1,u=0,l=document.getElementsByClassName("js-fullscreen-code")[0],c=document.body;function a(e){"Escape"==e.key&&_(e)}function s(e){e?document.body.addEventListener("keyup",a):document.body.removeEventListener("keyup",a)}function d(e){c.style.overflow=e?"hidden":""}function f(e){if(e){var t,n=r(e);try{for(n.s();!(t=n.n()).done;){t.value.addEventListener("click",_)}}catch(o){n.e(o)}finally{n.f()}}}function _(e){var t=e.currentTarget.closest(".js-code-highlight")?e.currentTarget.closest(".js-code-highlight").cloneNode(!0):null,n=t?t.getElementsByClassName("js-fullscreen-code-action"):null;i?(d(!1),window.scrollTo(0,u),s(!1),function(e){if(e){var t,n=r(e);try{for(n.s();!(t=n.n()).done;)t.value.removeEventListener("click",_)}catch(o){n.e(o)}finally{n.f()}}}(n),l.classList.remove("is-open"),l.removeChild(l.childNodes[0]),i=!1):(d(!0),u=window.scrollY,s(!0),t.classList.add("is-fullscreen"),l.appendChild(t),l.classList.add("is-open"),f(n),i=!0)}},9:function(e,t,n){"use strict";function r(e){var t=e.element,n=e.offsetTop,r=void 0===n?0:n,o=e.allowPartialVisibility,i=void 0!==o&&o,u=t.getBoundingClientRect(),l=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth,a=u.top<=l&&u.top>=r,s=u.right>=0&&u.right<=c,d=u.bottom>=r&&u.bottom<=l,f=u.left<=c&&u.left>=0,_=u.top<=r,p=u.bottom>=l;return i?(a||d||_&&p)&&(f||s):a&&d&&f&&s}n.d(t,"a",(function(){return r}))}},[[129,58,0,1]]]);
//# sourceMappingURL=articlePage-21312bc44ece8218a294.chunk.js.map