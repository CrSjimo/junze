!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/dist/",e(e.s=4)}([function(t,n){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n){(function(n){t.exports=n}).call(this,{})},function(t,n,e){var r=e(5),o=e(6),i=e(7),u=e(8),s=e(9),c=e(10),a=e(11);a.alea=r,a.xor128=o,a.xorwow=i,a.xorshift7=u,a.xor4096=s,a.tychei=c,t.exports=a},function(t,n,e){const r=e(13),o={junze_old:new Date("2021-04-28 00:00:00"),junze_new:new Date("2021-07-15 00:00:00"),cute_mb:new Date("2021-07-15 00:00:00")};let i="junze_old";const u={junze_old:(t,n)=>`俊泽不在的第${t}天，${n}他。`,junze_new:(t,n)=>`俊泽不在的第${t}天，${n}他。`,cute_mb:(t,n)=>`看不见赵总的第${t}天，${n}她。`};function s(t){c(location.hash,!0,!0);const n=document.getElementById("text-container"),e=document.createElement("div");e.id="text-container";let s=function(){const t=o[i]||o.junze_old,n=new Date;return Math.floor((Number(n)-Number(t))/864e5)}();for(let n=0;n<t;n++){const t=document.createElement("h1"),n=document.createElement("a");let o=String.fromCharCode(r.default.int(19968,40959));n.textContent=u[i](s,o),n.href="https://www.baidu.com/baidu?ie=utf-8&wd="+o,n.target="_blank",t.appendChild(n),e.appendChild(t)}n.replaceWith(e)}function c(t,n,e){t||(t="junze_old"),"#"==t[0]&&(t=t.slice(1)),i=t,o[i]||(i="junze_old"),n&&(location.hash=i),e&&(document.getElementById(i).selected=!0)}c(location.hash,!1,!0);const a=document.getElementById("nav-container");a.onchange=()=>{c(a.options[a.selectedIndex].id,!0)},document.getElementById("btn-once").onclick=()=>s(1),document.getElementById("btn-4").onclick=()=>s(4),document.getElementById("btn-8").onclick=()=>s(8),s(1)},function(t,n,e){(function(t){var r;!function(t,o,i){function u(t){var n,e=this,r=(n=4022871197,function(t){t=String(t);for(var e=0;e<t.length;e++){var r=.02519603282416938*(n+=t.charCodeAt(e));r-=n=r>>>0,n=(r*=n)>>>0,n+=4294967296*(r-=n)}return 2.3283064365386963e-10*(n>>>0)});e.next=function(){var t=2091639*e.s0+2.3283064365386963e-10*e.c;return e.s0=e.s1,e.s1=e.s2,e.s2=t-(e.c=0|t)},e.c=1,e.s0=r(" "),e.s1=r(" "),e.s2=r(" "),e.s0-=r(t),e.s0<0&&(e.s0+=1),e.s1-=r(t),e.s1<0&&(e.s1+=1),e.s2-=r(t),e.s2<0&&(e.s2+=1),r=null}function s(t,n){return n.c=t.c,n.s0=t.s0,n.s1=t.s1,n.s2=t.s2,n}function c(t,n){var e=new u(t),r=n&&n.state,o=e.next;return o.int32=function(){return 4294967296*e.next()|0},o.double=function(){return o()+11102230246251565e-32*(2097152*o()|0)},o.quick=o,r&&("object"==typeof r&&s(r,e),o.state=function(){return s(e,{})}),o}o&&o.exports?o.exports=c:e(0)&&e(2)?void 0===(r=function(){return c}.call(n,e,n,o))||(o.exports=r):this.alea=c}(0,t,e(0))}).call(this,e(1)(t))},function(t,n,e){(function(t){var r;!function(t,o,i){function u(t){var n=this,e="";n.x=0,n.y=0,n.z=0,n.w=0,n.next=function(){var t=n.x^n.x<<11;return n.x=n.y,n.y=n.z,n.z=n.w,n.w^=n.w>>>19^t^t>>>8},t===(0|t)?n.x=t:e+=t;for(var r=0;r<e.length+64;r++)n.x^=0|e.charCodeAt(r),n.next()}function s(t,n){return n.x=t.x,n.y=t.y,n.z=t.z,n.w=t.w,n}function c(t,n){var e=new u(t),r=n&&n.state,o=function(){return(e.next()>>>0)/4294967296};return o.double=function(){do{var t=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=e.next,o.quick=o,r&&("object"==typeof r&&s(r,e),o.state=function(){return s(e,{})}),o}o&&o.exports?o.exports=c:e(0)&&e(2)?void 0===(r=function(){return c}.call(n,e,n,o))||(o.exports=r):this.xor128=c}(0,t,e(0))}).call(this,e(1)(t))},function(t,n,e){(function(t){var r;!function(t,o,i){function u(t){var n=this,e="";n.next=function(){var t=n.x^n.x>>>2;return n.x=n.y,n.y=n.z,n.z=n.w,n.w=n.v,(n.d=n.d+362437|0)+(n.v=n.v^n.v<<4^t^t<<1)|0},n.x=0,n.y=0,n.z=0,n.w=0,n.v=0,t===(0|t)?n.x=t:e+=t;for(var r=0;r<e.length+64;r++)n.x^=0|e.charCodeAt(r),r==e.length&&(n.d=n.x<<10^n.x>>>4),n.next()}function s(t,n){return n.x=t.x,n.y=t.y,n.z=t.z,n.w=t.w,n.v=t.v,n.d=t.d,n}function c(t,n){var e=new u(t),r=n&&n.state,o=function(){return(e.next()>>>0)/4294967296};return o.double=function(){do{var t=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=e.next,o.quick=o,r&&("object"==typeof r&&s(r,e),o.state=function(){return s(e,{})}),o}o&&o.exports?o.exports=c:e(0)&&e(2)?void 0===(r=function(){return c}.call(n,e,n,o))||(o.exports=r):this.xorwow=c}(0,t,e(0))}).call(this,e(1)(t))},function(t,n,e){(function(t){var r;!function(t,o,i){function u(t){var n=this;n.next=function(){var t,e,r=n.x,o=n.i;return t=r[o],e=(t^=t>>>7)^t<<24,e^=(t=r[o+1&7])^t>>>10,e^=(t=r[o+3&7])^t>>>3,e^=(t=r[o+4&7])^t<<7,t=r[o+7&7],e^=(t^=t<<13)^t<<9,r[o]=e,n.i=o+1&7,e},function(t,n){var e,r=[];if(n===(0|n))r[0]=n;else for(n=""+n,e=0;e<n.length;++e)r[7&e]=r[7&e]<<15^n.charCodeAt(e)+r[e+1&7]<<13;for(;r.length<8;)r.push(0);for(e=0;e<8&&0===r[e];++e);for(8==e?r[7]=-1:r[e],t.x=r,t.i=0,e=256;e>0;--e)t.next()}(n,t)}function s(t,n){return n.x=t.x.slice(),n.i=t.i,n}function c(t,n){null==t&&(t=+new Date);var e=new u(t),r=n&&n.state,o=function(){return(e.next()>>>0)/4294967296};return o.double=function(){do{var t=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=e.next,o.quick=o,r&&(r.x&&s(r,e),o.state=function(){return s(e,{})}),o}o&&o.exports?o.exports=c:e(0)&&e(2)?void 0===(r=function(){return c}.call(n,e,n,o))||(o.exports=r):this.xorshift7=c}(0,t,e(0))}).call(this,e(1)(t))},function(t,n,e){(function(t){var r;!function(t,o,i){function u(t){var n=this;n.next=function(){var t,e,r=n.w,o=n.X,i=n.i;return n.w=r=r+1640531527|0,e=o[i+34&127],t=o[i=i+1&127],e^=e<<13,t^=t<<17,e^=e>>>15,t^=t>>>12,e=o[i]=e^t,n.i=i,e+(r^r>>>16)|0},function(t,n){var e,r,o,i,u,s=[],c=128;for(n===(0|n)?(r=n,n=null):(n+="\0",r=0,c=Math.max(c,n.length)),o=0,i=-32;i<c;++i)n&&(r^=n.charCodeAt((i+32)%n.length)),0===i&&(u=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,i>=0&&(u=u+1640531527|0,o=0==(e=s[127&i]^=r+u)?o+1:0);for(o>=128&&(s[127&(n&&n.length||0)]=-1),o=127,i=512;i>0;--i)r=s[o+34&127],e=s[o=o+1&127],r^=r<<13,e^=e<<17,r^=r>>>15,e^=e>>>12,s[o]=r^e;t.w=u,t.X=s,t.i=o}(n,t)}function s(t,n){return n.i=t.i,n.w=t.w,n.X=t.X.slice(),n}function c(t,n){null==t&&(t=+new Date);var e=new u(t),r=n&&n.state,o=function(){return(e.next()>>>0)/4294967296};return o.double=function(){do{var t=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=e.next,o.quick=o,r&&(r.X&&s(r,e),o.state=function(){return s(e,{})}),o}o&&o.exports?o.exports=c:e(0)&&e(2)?void 0===(r=function(){return c}.call(n,e,n,o))||(o.exports=r):this.xor4096=c}(0,t,e(0))}).call(this,e(1)(t))},function(t,n,e){(function(t){var r;!function(t,o,i){function u(t){var n=this,e="";n.next=function(){var t=n.b,e=n.c,r=n.d,o=n.a;return t=t<<25^t>>>7^e,e=e-r|0,r=r<<24^r>>>8^o,o=o-t|0,n.b=t=t<<20^t>>>12^e,n.c=e=e-r|0,n.d=r<<16^e>>>16^o,n.a=o-t|0},n.a=0,n.b=0,n.c=-1640531527,n.d=1367130551,t===Math.floor(t)?(n.a=t/4294967296|0,n.b=0|t):e+=t;for(var r=0;r<e.length+20;r++)n.b^=0|e.charCodeAt(r),n.next()}function s(t,n){return n.a=t.a,n.b=t.b,n.c=t.c,n.d=t.d,n}function c(t,n){var e=new u(t),r=n&&n.state,o=function(){return(e.next()>>>0)/4294967296};return o.double=function(){do{var t=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=e.next,o.quick=o,r&&("object"==typeof r&&s(r,e),o.state=function(){return s(e,{})}),o}o&&o.exports?o.exports=c:e(0)&&e(2)?void 0===(r=function(){return c}.call(n,e,n,o))||(o.exports=r):this.tychei=c}(0,t,e(0))}).call(this,e(1)(t))},function(t,n,e){var r;!function(o,i,u){var s,c=u.pow(256,6),a=u.pow(2,52),l=2*a;function h(t,n,e){var r=[],h=x(function t(n,e){var r,o=[],i=typeof n;if(e&&"object"==i)for(r in n)try{o.push(t(n[r],e-1))}catch(t){}return o.length?o:"string"==i?n:n+"\0"}((n=1==n?{entropy:!0}:n||{}).entropy?[t,p(i)]:null==t?function(){try{var t;return s&&(t=s.randomBytes)?t=t(256):(t=new Uint8Array(256),(o.crypto||o.msCrypto).getRandomValues(t)),p(t)}catch(t){var n=o.navigator,e=n&&n.plugins;return[+new Date,o,e,o.screen,p(i)]}}():t,3),r),v=new f(r),g=function(){for(var t=v.g(6),n=c,e=0;t<a;)t=256*(t+e),n*=256,e=v.g(1);for(;t>=l;)t/=2,n/=2,e>>>=1;return(t+e)/n};return g.int32=function(){return 0|v.g(4)},g.quick=function(){return v.g(4)/4294967296},g.double=g,x(p(v.S),i),(n.pass||e||function(t,n,e,r){return r&&(r.S&&d(r,v),t.state=function(){return d(v,{})}),e?(u.random=t,n):t})(g,h,"global"in n?n.global:this==u,n.state)}function f(t){var n,e=t.length,r=this,o=0,i=r.i=r.j=0,u=r.S=[];for(e||(t=[e++]);o<256;)u[o]=o++;for(o=0;o<256;o++)u[o]=u[i=255&i+t[o%e]+(n=u[o])],u[i]=n;(r.g=function(t){for(var n,e=0,o=r.i,i=r.j,u=r.S;t--;)n=u[o=255&o+1],e=256*e+u[255&(u[o]=u[i=255&i+n])+(u[i]=n)];return r.i=o,r.j=i,e})(256)}function d(t,n){return n.i=t.i,n.j=t.j,n.S=t.S.slice(),n}function x(t,n){for(var e,r=t+"",o=0;o<r.length;)n[255&o]=255&(e^=19*n[255&o])+r.charCodeAt(o++);return p(n)}function p(t){return String.fromCharCode.apply(0,t)}if(x(u.random(),i),t.exports){t.exports=h;try{s=e(12)}catch(t){}}else void 0===(r=function(){return h}.call(n,e,n,t))||(t.exports=r)}("undefined"!=typeof self?self:this,[],Math)},function(t,n){},function(t,n,e){"use strict";e.r(n),e.d(n,"RNG",(function(){return r})),e.d(n,"RNGFactory",(function(){return s})),e.d(n,"Random",(function(){return v}));class r{_seed(t,n){if(t===(t||0))return t;{const n=""+t;let e=0;for(let t=0;t<n.length;++t)e^=0|n.charCodeAt(t);return e}}}var o=e(3),i=e.n(o);class u extends r{constructor(t,n){super(),this.seed(t,n)}get name(){return"function"}next(){return this._rng()}seed(t,n){this._rng=t}clone(t,n){return new u(this._rng,n)}}var s=(...t)=>{const[n="default",...e]=t;switch(typeof n){case"object":if(n instanceof r)return n;break;case"function":return new u(n);case"number":case"string":return new u(i()(...e))}throw new Error(`invalid RNG "${n}"`)},c=(t,n=0,e=1)=>()=>t.next()*(e-n)+n;function a(t){return new l(t)}class l{constructor(t){this.isInt=()=>{if(Number.isInteger(this.n))return this;throw new Error("Expected number to be an integer, got "+this.n)},this.isPositive=()=>{if(this.n>0)return this;throw new Error("Expected number to be positive, got "+this.n)},this.lessThan=t=>{if(this.n<t)return this;throw new Error(`Expected number to be less than ${t}, got ${this.n}`)},this.greaterThanOrEqual=t=>{if(this.n>=t)return this;throw new Error(`Expected number to be greater than or equal to ${t}, got ${this.n}`)},this.greaterThan=t=>{if(this.n>t)return this;throw new Error(`Expected number to be greater than ${t}, got ${this.n}`)},this.n=t}}var h=(t,n=0,e=1)=>(void 0===e&&(e=void 0===n?1:n,n=0),a(n).isInt(),a(e).isInt(),()=>Math.floor(t.next()*(e-n+1)+n)),f=t=>()=>t.next()>=.5;const d=[0,0,.6931471805599453,1.791759469228055,3.1780538303479458,4.787491742782046,6.579251212010101,8.525161361065415,10.60460290274525,12.801827480081469],x=t=>d[t];class p extends r{get name(){return"default"}next(){return Math.random()}seed(t,n){}clone(){return new p}}class v{constructor(t){this._cache={},this.next=()=>this._rng.next(),this.float=(t,n)=>this.uniform(t,n)(),this.int=(t,n)=>this.uniformInt(t,n)(),this.integer=(t,n)=>this.uniformInt(t,n)(),this.bool=()=>this.uniformBoolean()(),this.boolean=()=>this.uniformBoolean()(),this.uniform=(t,n)=>this._memoize("uniform",c,t,n),this.uniformInt=(t,n)=>this._memoize("uniformInt",h,t,n),this.uniformBoolean=()=>this._memoize("uniformBoolean",f),this.normal=(t,n)=>((t,n=0,e=1)=>()=>{let r,o,i;do{r=2*t.next()-1,o=2*t.next()-1,i=r*r+o*o}while(!i||i>1);return n+e*o*Math.sqrt(-2*Math.log(i)/i)})(this,t,n),this.logNormal=(t,n)=>((t,n=0,e=1)=>{const r=t.normal(n,e);return()=>Math.exp(r())})(this,t,n),this.bernoulli=t=>((t,n=.5)=>(a(n).greaterThanOrEqual(0).lessThan(1),()=>Math.floor(t.next()+n)))(this,t),this.binomial=(t,n)=>((t,n=1,e=.5)=>(a(n).isInt().isPositive(),a(e).greaterThanOrEqual(0).lessThan(1),()=>{let r=0,o=0;for(;r++<n;)t.next()<e&&o++;return o}))(this,t,n),this.geometric=t=>((t,n=.5)=>{a(n).greaterThan(0).lessThan(1);const e=1/Math.log(1-n);return()=>Math.floor(1+Math.log(t.next())*e)})(this,t),this.poisson=t=>((t,n=1)=>{if(a(n).isPositive(),n<10){const e=Math.exp(-n);return()=>{let r=e,o=0,i=t.next();for(;i>r;)i-=r,r=n*r/++o;return o}}{const e=Math.sqrt(n),r=.931+2.53*e,o=.02483*r-.059,i=1.1239+1.1328/(r-3.4),u=.9277-3.6224/(r-2);return()=>{for(var s;;){let c,a=t.next();if(a<=.86*u)return c=a/u-.43,Math.floor((2*o/(.5-Math.abs(c))+r)*c+n+.445);a>=u?c=t.next()-.5:(c=a/u-.93,c=(c<0?-.5:.5)-c,a=t.next()*u);const l=.5-Math.abs(c);if(l<.013&&a>l)continue;const h=Math.floor((2*o/l+r)*c+n+.445);if(a=a*i/(o/(l*l)+r),h>=10){const t=(h+.5)*Math.log(n/h)-n-.9189385332046727+h-(1/12-(1/360-1/(1260*h*h))/(h*h))/h;if(Math.log(a*e)<=t)return h}else if(h>=0){const t=null!==(s=x(h))&&void 0!==s?s:0;if(Math.log(a)<=h*Math.log(n)-n-t)return h}}}}})(this,t),this.exponential=t=>((t,n=1)=>(a(n).isPositive(),()=>-Math.log(1-t.next())/n))(this,t),this.irwinHall=t=>((t,n=1)=>(a(n).isInt().greaterThanOrEqual(0),()=>{let e=0;for(let r=0;r<n;++r)e+=t.next();return e}))(this,t),this.bates=t=>((t,n=1)=>{a(n).isInt().isPositive();const e=t.irwinHall(n);return()=>e()/n})(this,t),this.pareto=t=>((t,n=1)=>{a(n).greaterThanOrEqual(0);const e=1/n;return()=>1/Math.pow(1-t.next(),e)})(this,t),t&&t instanceof r?this.use(t):this.use(new p),this._cache={}}get rng(){return this._rng}clone(...t){return t.length?new v(s(...t)):new v(this.rng.clone())}use(...t){this._rng=s(...t)}patch(){if(this._patch)throw new Error("Math.random already patched");this._patch=Math.random,Math.random=this.uniform()}unpatch(){this._patch&&(Math.random=this._patch,delete this._patch)}_memoize(t,n,...e){const r=""+e.join(";");let o=this._cache[t];return void 0!==o&&o.key===r||(o={key:r,distribution:n(this,...e)},this._cache[t]=o),o.distribution}}var g=new v;n.default=g}]);
//# sourceMappingURL=bundle.js.map