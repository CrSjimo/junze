!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=4)}([function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){(function(t){e.exports=t}).call(this,{})},function(e,t,n){var r=n(5),o=n(6),i=n(7),a=n(8),c=n(9),u=n(10),s=n(11);s.alea=r,s.xor128=o,s.xorwow=i,s.xorshift7=a,s.xor4096=c,s.tychei=u,e.exports=s},function(module,exports,__webpack_require__){const random=__webpack_require__(13),LeaveDatesMap={junze_old:new Date(16195392e5),junze_new:new Date(16262784e5),cute_mb:new Date(16262784e5),personalize:new Date},datePicker=document.getElementById("personalize-date"),personalizeText=document.getElementById("personalize-text"),enableEvalModeCheckbox=document.getElementById("enable-eval-mode"),templateTips=document.getElementById("template-tips");function getCurrentDate(){return"personalize"==currentMode?new Date(datePicker.value):LeaveDatesMap[currentMode]||LeaveDatesMap.junze_old}function savePersonalization(){"personalize"==currentMode&&(localStorage.setItem("personalize-date",datePicker.value),localStorage.setItem("personalize-text",personalizeText.value),localStorage.setItem("enable-eval-mode",enableEvalModeCheckbox.checked))}function loadPersonalization(){datePicker.value=localStorage.getItem("personalize-date")||"2021-04-28",personalizeText.value=localStorage.getItem("personalize-text")||"俊泽不在的第%d天，%c他。",enableEvalModeCheckbox.checked=localStorage.getItem("enable-eval-mode")||!1,enableEvalModeCheckbox.onchange()}enableEvalModeCheckbox.onchange=()=>{enableEvalModeCheckbox.checked?templateTips.style.display="none":templateTips.style.display=""};let currentMode="junze_old";function calcDate(){const e=getCurrentDate(),t=new Date;return Math.floor((Number(t)-Number(e))/864e5)}function calcChar(){return String.fromCharCode(random.default.int(19968,40959))}function hasX(){let e=personalizeText.value;return"personalize"==currentMode&&e.replace("%x","")!=e}function getJunzeObject(e,t){return{dateCount:e,dateCountDown:-e,date:getCurrentDate(),char:t,getRandomChar:(e,t)=>null==e||null==t?calcChar():String.fromCharCode(random.default.int(e,t)),random:random.default}}const TextTemplate={junze_old:(e,t)=>`俊泽不在的第${e}天，${t}他。`,junze_new:(e,t)=>`俊泽不在的第${e}天，${t}他。`,cute_mb:(e,t)=>`看不见赵总的第${e}天，${t}她。`,personalize:(date,char)=>{if(enableEvalModeCheckbox.checked){window.junze=getJunzeObject(date,char);let s="";try{s=eval("`"+personalizeText.value+"`")}catch(e){s=e.toString()}return s}{let e=personalizeText.value.replace(new RegExp("%d","g"),date).replace(new RegExp("%e","g"),-date).replace(new RegExp("%c","g"),char),t=e.replace("%x",calcChar());for(;e!=t;)e=t,t=e.replace("%x",calcChar());return e}}};function generateText(e){changeMode(location.hash,!0,!0);const t=document.getElementById("text-container"),n=document.createElement("div");n.id="text-container";let r=calcDate();for(let t=0;t<e;t++){const e=document.createElement("h1"),t=document.createElement("a");let o=calcChar();t.textContent=TextTemplate[currentMode](r,o),hasX()?t.href="https://b23.tv/BV1GJ411x7h7":t.href="https://www.baidu.com/baidu?ie=utf-8&wd="+o,t.target="_blank",t.className="no-decoration",e.appendChild(t),n.appendChild(e)}t.replaceWith(n),savePersonalization()}const personalizeContainer=document.getElementById("personalize-container");function changeMode(e,t,n){e||(e="junze_old"),"#"==e[0]&&(e=e.slice(1)),currentMode=e,LeaveDatesMap[currentMode]||(currentMode="junze_old"),t&&(location.hash=currentMode),n&&(document.getElementById(currentMode).selected=!0),personalizeContainer.style.display="personalize"==currentMode?"block":"none"}changeMode(location.hash,!1,!0),loadPersonalization();const select=document.getElementById("nav-container");select.onchange=()=>{changeMode(select.options[select.selectedIndex].id,!0)},document.getElementById("btn-once").onclick=()=>generateText(1),document.getElementById("btn-4").onclick=()=>generateText(4),document.getElementById("btn-8").onclick=()=>generateText(8),generateText(1)},function(e,t,n){(function(e){var r;!function(e,o,i){function a(e){var t,n=this,r=(t=4022871197,function(e){e=String(e);for(var n=0;n<e.length;n++){var r=.02519603282416938*(t+=e.charCodeAt(n));r-=t=r>>>0,t=(r*=t)>>>0,t+=4294967296*(r-=t)}return 2.3283064365386963e-10*(t>>>0)});n.next=function(){var e=2091639*n.s0+2.3283064365386963e-10*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=e-(n.c=0|e)},n.c=1,n.s0=r(" "),n.s1=r(" "),n.s2=r(" "),n.s0-=r(e),n.s0<0&&(n.s0+=1),n.s1-=r(e),n.s1<0&&(n.s1+=1),n.s2-=r(e),n.s2<0&&(n.s2+=1),r=null}function c(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function u(e,t){var n=new a(e),r=t&&t.state,o=n.next;return o.int32=function(){return 4294967296*n.next()|0},o.double=function(){return o()+11102230246251565e-32*(2097152*o()|0)},o.quick=o,r&&("object"==typeof r&&c(r,n),o.state=function(){return c(n,{})}),o}o&&o.exports?o.exports=u:n(0)&&n(2)?void 0===(r=function(){return u}.call(t,n,t,o))||(o.exports=r):this.alea=u}(0,e,n(0))}).call(this,n(1)(e))},function(e,t,n){(function(e){var r;!function(e,o,i){function a(e){var t=this,n="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),t.next()}function c(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function u(e,t){var n=new a(e),r=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=n.next,o.quick=o,r&&("object"==typeof r&&c(r,n),o.state=function(){return c(n,{})}),o}o&&o.exports?o.exports=u:n(0)&&n(2)?void 0===(r=function(){return u}.call(t,n,t,o))||(o.exports=r):this.xor128=u}(0,e,n(0))}).call(this,n(1)(e))},function(e,t,n){(function(e){var r;!function(e,o,i){function a(e){var t=this,n="";t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^e^e<<1)|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function c(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function u(e,t){var n=new a(e),r=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=n.next,o.quick=o,r&&("object"==typeof r&&c(r,n),o.state=function(){return c(n,{})}),o}o&&o.exports?o.exports=u:n(0)&&n(2)?void 0===(r=function(){return u}.call(t,n,t,o))||(o.exports=r):this.xorwow=u}(0,e,n(0))}).call(this,n(1)(e))},function(e,t,n){(function(e){var r;!function(e,o,i){function a(e){var t=this;t.next=function(){var e,n,r=t.x,o=t.i;return e=r[o],n=(e^=e>>>7)^e<<24,n^=(e=r[o+1&7])^e>>>10,n^=(e=r[o+3&7])^e>>>3,n^=(e=r[o+4&7])^e<<7,e=r[o+7&7],n^=(e^=e<<13)^e<<9,r[o]=n,t.i=o+1&7,n},function(e,t){var n,r=[];if(t===(0|t))r[0]=t;else for(t=""+t,n=0;n<t.length;++n)r[7&n]=r[7&n]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next()}(t,e)}function c(e,t){return t.x=e.x.slice(),t.i=e.i,t}function u(e,t){null==e&&(e=+new Date);var n=new a(e),r=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=n.next,o.quick=o,r&&(r.x&&c(r,n),o.state=function(){return c(n,{})}),o}o&&o.exports?o.exports=u:n(0)&&n(2)?void 0===(r=function(){return u}.call(t,n,t,o))||(o.exports=r):this.xorshift7=u}(0,e,n(0))}).call(this,n(1)(e))},function(e,t,n){(function(e){var r;!function(e,o,i){function a(e){var t=this;t.next=function(){var e,n,r=t.w,o=t.X,i=t.i;return t.w=r=r+1640531527|0,n=o[i+34&127],e=o[i=i+1&127],n^=n<<13,e^=e<<17,n^=n>>>15,e^=e>>>12,n=o[i]=n^e,t.i=i,n+(r^r>>>16)|0},function(e,t){var n,r,o,i,a,c=[],u=128;for(t===(0|t)?(r=t,t=null):(t+="\0",r=0,u=Math.max(u,t.length)),o=0,i=-32;i<u;++i)t&&(r^=t.charCodeAt((i+32)%t.length)),0===i&&(a=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,i>=0&&(a=a+1640531527|0,o=0==(n=c[127&i]^=r+a)?o+1:0);for(o>=128&&(c[127&(t&&t.length||0)]=-1),o=127,i=512;i>0;--i)r=c[o+34&127],n=c[o=o+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,c[o]=r^n;e.w=a,e.X=c,e.i=o}(t,e)}function c(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function u(e,t){null==e&&(e=+new Date);var n=new a(e),r=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=n.next,o.quick=o,r&&(r.X&&c(r,n),o.state=function(){return c(n,{})}),o}o&&o.exports?o.exports=u:n(0)&&n(2)?void 0===(r=function(){return u}.call(t,n,t,o))||(o.exports=r):this.xor4096=u}(0,e,n(0))}).call(this,n(1)(e))},function(e,t,n){(function(e){var r;!function(e,o,i){function a(e){var t=this,n="";t.next=function(){var e=t.b,n=t.c,r=t.d,o=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^o,o=o-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^o,t.a=o-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=0|e):n+=e;for(var r=0;r<n.length+20;r++)t.b^=0|n.charCodeAt(r),t.next()}function c(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function u(e,t){var n=new a(e),r=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=n.next,o.quick=o,r&&("object"==typeof r&&c(r,n),o.state=function(){return c(n,{})}),o}o&&o.exports?o.exports=u:n(0)&&n(2)?void 0===(r=function(){return u}.call(t,n,t,o))||(o.exports=r):this.tychei=u}(0,e,n(0))}).call(this,n(1)(e))},function(e,t,n){var r;!function(o,i,a){var c,u=a.pow(256,6),s=a.pow(2,52),l=2*s;function h(e,t,n){var r=[],h=x(function e(t,n){var r,o=[],i=typeof t;if(n&&"object"==i)for(r in t)try{o.push(e(t[r],n-1))}catch(e){}return o.length?o:"string"==i?t:t+"\0"}((t=1==t?{entropy:!0}:t||{}).entropy?[e,p(i)]:null==e?function(){try{var e;return c&&(e=c.randomBytes)?e=e(256):(e=new Uint8Array(256),(o.crypto||o.msCrypto).getRandomValues(e)),p(e)}catch(e){var t=o.navigator,n=t&&t.plugins;return[+new Date,o,n,o.screen,p(i)]}}():e,3),r),g=new f(r),v=function(){for(var e=g.g(6),t=u,n=0;e<s;)e=256*(e+n),t*=256,n=g.g(1);for(;e>=l;)e/=2,t/=2,n>>>=1;return(e+n)/t};return v.int32=function(){return 0|g.g(4)},v.quick=function(){return g.g(4)/4294967296},v.double=v,x(p(g.S),i),(t.pass||n||function(e,t,n,r){return r&&(r.S&&d(r,g),e.state=function(){return d(g,{})}),n?(a.random=e,t):e})(v,h,"global"in t?t.global:this==a,t.state)}function f(e){var t,n=e.length,r=this,o=0,i=r.i=r.j=0,a=r.S=[];for(n||(e=[n++]);o<256;)a[o]=o++;for(o=0;o<256;o++)a[o]=a[i=255&i+e[o%n]+(t=a[o])],a[i]=t;(r.g=function(e){for(var t,n=0,o=r.i,i=r.j,a=r.S;e--;)t=a[o=255&o+1],n=256*n+a[255&(a[o]=a[i=255&i+t])+(a[i]=t)];return r.i=o,r.j=i,n})(256)}function d(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function x(e,t){for(var n,r=e+"",o=0;o<r.length;)t[255&o]=255&(n^=19*t[255&o])+r.charCodeAt(o++);return p(t)}function p(e){return String.fromCharCode.apply(0,e)}if(x(a.random(),i),e.exports){e.exports=h;try{c=n(12)}catch(e){}}else void 0===(r=function(){return h}.call(t,n,t,e))||(e.exports=r)}("undefined"!=typeof self?self:this,[],Math)},function(e,t){},function(e,t,n){"use strict";n.r(t),n.d(t,"RNG",(function(){return r})),n.d(t,"RNGFactory",(function(){return c})),n.d(t,"Random",(function(){return g}));class r{_seed(e,t){if(e===(e||0))return e;{const t=""+e;let n=0;for(let e=0;e<t.length;++e)n^=0|t.charCodeAt(e);return n}}}var o=n(3),i=n.n(o);class a extends r{constructor(e,t){super(),this.seed(e,t)}get name(){return"function"}next(){return this._rng()}seed(e,t){this._rng=e}clone(e,t){return new a(this._rng,t)}}var c=(...e)=>{const[t="default",...n]=e;switch(typeof t){case"object":if(t instanceof r)return t;break;case"function":return new a(t);case"number":case"string":return new a(i()(...n))}throw new Error(`invalid RNG "${t}"`)},u=(e,t=0,n=1)=>()=>e.next()*(n-t)+t;function s(e){return new l(e)}class l{constructor(e){this.isInt=()=>{if(Number.isInteger(this.n))return this;throw new Error("Expected number to be an integer, got "+this.n)},this.isPositive=()=>{if(this.n>0)return this;throw new Error("Expected number to be positive, got "+this.n)},this.lessThan=e=>{if(this.n<e)return this;throw new Error(`Expected number to be less than ${e}, got ${this.n}`)},this.greaterThanOrEqual=e=>{if(this.n>=e)return this;throw new Error(`Expected number to be greater than or equal to ${e}, got ${this.n}`)},this.greaterThan=e=>{if(this.n>e)return this;throw new Error(`Expected number to be greater than ${e}, got ${this.n}`)},this.n=e}}var h=(e,t=0,n=1)=>(void 0===n&&(n=void 0===t?1:t,t=0),s(t).isInt(),s(n).isInt(),()=>Math.floor(e.next()*(n-t+1)+t)),f=e=>()=>e.next()>=.5;const d=[0,0,.6931471805599453,1.791759469228055,3.1780538303479458,4.787491742782046,6.579251212010101,8.525161361065415,10.60460290274525,12.801827480081469],x=e=>d[e];class p extends r{get name(){return"default"}next(){return Math.random()}seed(e,t){}clone(){return new p}}class g{constructor(e){this._cache={},this.next=()=>this._rng.next(),this.float=(e,t)=>this.uniform(e,t)(),this.int=(e,t)=>this.uniformInt(e,t)(),this.integer=(e,t)=>this.uniformInt(e,t)(),this.bool=()=>this.uniformBoolean()(),this.boolean=()=>this.uniformBoolean()(),this.uniform=(e,t)=>this._memoize("uniform",u,e,t),this.uniformInt=(e,t)=>this._memoize("uniformInt",h,e,t),this.uniformBoolean=()=>this._memoize("uniformBoolean",f),this.normal=(e,t)=>((e,t=0,n=1)=>()=>{let r,o,i;do{r=2*e.next()-1,o=2*e.next()-1,i=r*r+o*o}while(!i||i>1);return t+n*o*Math.sqrt(-2*Math.log(i)/i)})(this,e,t),this.logNormal=(e,t)=>((e,t=0,n=1)=>{const r=e.normal(t,n);return()=>Math.exp(r())})(this,e,t),this.bernoulli=e=>((e,t=.5)=>(s(t).greaterThanOrEqual(0).lessThan(1),()=>Math.floor(e.next()+t)))(this,e),this.binomial=(e,t)=>((e,t=1,n=.5)=>(s(t).isInt().isPositive(),s(n).greaterThanOrEqual(0).lessThan(1),()=>{let r=0,o=0;for(;r++<t;)e.next()<n&&o++;return o}))(this,e,t),this.geometric=e=>((e,t=.5)=>{s(t).greaterThan(0).lessThan(1);const n=1/Math.log(1-t);return()=>Math.floor(1+Math.log(e.next())*n)})(this,e),this.poisson=e=>((e,t=1)=>{if(s(t).isPositive(),t<10){const n=Math.exp(-t);return()=>{let r=n,o=0,i=e.next();for(;i>r;)i-=r,r=t*r/++o;return o}}{const n=Math.sqrt(t),r=.931+2.53*n,o=.02483*r-.059,i=1.1239+1.1328/(r-3.4),a=.9277-3.6224/(r-2);return()=>{for(var c;;){let u,s=e.next();if(s<=.86*a)return u=s/a-.43,Math.floor((2*o/(.5-Math.abs(u))+r)*u+t+.445);s>=a?u=e.next()-.5:(u=s/a-.93,u=(u<0?-.5:.5)-u,s=e.next()*a);const l=.5-Math.abs(u);if(l<.013&&s>l)continue;const h=Math.floor((2*o/l+r)*u+t+.445);if(s=s*i/(o/(l*l)+r),h>=10){const e=(h+.5)*Math.log(t/h)-t-.9189385332046727+h-(1/12-(1/360-1/(1260*h*h))/(h*h))/h;if(Math.log(s*n)<=e)return h}else if(h>=0){const e=null!==(c=x(h))&&void 0!==c?c:0;if(Math.log(s)<=h*Math.log(t)-t-e)return h}}}}})(this,e),this.exponential=e=>((e,t=1)=>(s(t).isPositive(),()=>-Math.log(1-e.next())/t))(this,e),this.irwinHall=e=>((e,t=1)=>(s(t).isInt().greaterThanOrEqual(0),()=>{let n=0;for(let r=0;r<t;++r)n+=e.next();return n}))(this,e),this.bates=e=>((e,t=1)=>{s(t).isInt().isPositive();const n=e.irwinHall(t);return()=>n()/t})(this,e),this.pareto=e=>((e,t=1)=>{s(t).greaterThanOrEqual(0);const n=1/t;return()=>1/Math.pow(1-e.next(),n)})(this,e),e&&e instanceof r?this.use(e):this.use(new p),this._cache={}}get rng(){return this._rng}clone(...e){return e.length?new g(c(...e)):new g(this.rng.clone())}use(...e){this._rng=c(...e)}patch(){if(this._patch)throw new Error("Math.random already patched");this._patch=Math.random,Math.random=this.uniform()}unpatch(){this._patch&&(Math.random=this._patch,delete this._patch)}_memoize(e,t,...n){const r=""+n.join(";");let o=this._cache[e];return void 0!==o&&o.key===r||(o={key:r,distribution:t(this,...n)},this._cache[e]=o),o.distribution}}var v=new g;t.default=v}]);
//# sourceMappingURL=bundle.js.map