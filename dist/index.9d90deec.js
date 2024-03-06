var e,t,r,n,i,a,o,s,c,u,l,d,p,f,g,h,v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function m(e){return e&&e.__esModule?e.default:e}var _={},b=function(e){return e&&e.Math===Math&&e};_=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||b("object"==typeof self&&self)||b("object"==typeof v&&v)||b("object"==typeof _&&_)||function(){return this}()||Function("return this")();var y={},w={};y=!(w=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var k={},S={},$={},E={};E=!w(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var M=Function.prototype,j=M.call,O=E&&M.bind.bind(j,j);$=E?O:function(e){return function(){return j.apply(e,arguments)}};var P={},T="object"==typeof document&&document.all;P=void 0===T&&void 0!==T?function(e){return"function"==typeof e||e===T}:function(e){return"function"==typeof e};var I={},H={},L={},q={};q=function(e){return null==e};var x=TypeError;L=function(e){if(q(e))throw new x("Can't call method on "+e);return e};var C=Object;H=function(e){return C(L(e))};var A=$({}.hasOwnProperty);I=Object.hasOwn||function(e,t){return A(H(e),t)};var N=Function.prototype,F=y&&Object.getOwnPropertyDescriptor,B=I(N,"name")&&(!y||y&&F(N,"name").configurable),W={},R={},D={},U=Object.defineProperty;D=function(e,t){try{U(_,e,{value:t,configurable:!0,writable:!0})}catch(r){_[e]=t}return t};var z="__core-js_shared__";R=_[z]||D(z,{});var J=$(Function.toString);P(R.inspectSource)||(R.inspectSource=function(e){return J(e)}),W=R.inspectSource;var Q={},V={},Y=_.WeakMap;V=P(Y)&&/native code/.test(String(Y));var G={};G=function(e){return"object"==typeof e?null!==e:P(e)};var K={},X={},Z={},ee=_.document,et=G(ee)&&G(ee.createElement);Z=function(e){return et?ee.createElement(e):{}},X=!y&&!w(function(){return 7!==Object.defineProperty(Z("div"),"a",{get:function(){return 7}}).a});var er={};er=y&&w(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var en={},ei=String,ea=TypeError;en=function(e){if(G(e))return e;throw new ea(ei(e)+" is not an object")};var eo={},es={},ec={},eu=Function.prototype.call;ec=E?eu.bind(eu):function(){return eu.apply(eu,arguments)};var el={},ed={};ed=function(e,t){var r;return arguments.length<2?(r=_[e],P(r)?r:void 0):_[e]&&_[e][t]};var ep={};ep=$({}.isPrototypeOf);var ef={},eg={},eh={},ev={};ev="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var em=_.process,e_=_.Deno,eb=em&&em.versions||e_&&e_.version,ey=eb&&eb.v8;ey&&(i=(n=ey.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&ev&&(!(n=ev.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=ev.match(/Chrome\/(\d+)/))&&(i=+n[1]),eh=i;var ew=_.String;ef=(eg=!!Object.getOwnPropertySymbols&&!w(function(){var e=Symbol("symbol detection");return!ew(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&eh&&eh<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ek=Object;el=ef?function(e){return"symbol"==typeof e}:function(e){var t=ed("Symbol");return P(t)&&ep(t.prototype,ek(e))};var eS={},e$={},eE={},eM=String;eE=function(e){try{return eM(e)}catch(e){return"Object"}};var ej=TypeError;e$=function(e){if(P(e))return e;throw new ej(eE(e)+" is not a function")},eS=function(e,t){var r=e[t];return q(r)?void 0:e$(r)};var eO={},eP=TypeError;eO=function(e,t){var r,n;if("string"===t&&P(r=e.toString)&&!G(n=ec(r,e))||P(r=e.valueOf)&&!G(n=ec(r,e))||"string"!==t&&P(r=e.toString)&&!G(n=ec(r,e)))return n;throw new eP("Can't convert object to primitive value")};var eT={},eI={};eI=!1,(eT=function(e,t){return R[e]||(R[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.35.0",mode:eI?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE",source:"https://github.com/zloirock/core-js"});var eH={},eL=0,eq=Math.random(),ex=$(1..toString);eH=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ex(++eL+eq,36)};var eC=_.Symbol,eA=eT("wks"),eN=ef?eC.for||eC:eC&&eC.withoutSetter||eH,eF=TypeError,eB=(I(eA,e="toPrimitive")||(eA[e]=eg&&I(eC,e)?eC[e]:eN("Symbol."+e)),eA[e]);es=function(e,t){if(!G(e)||el(e))return e;var r,n=eS(e,eB);if(n){if(void 0===t&&(t="default"),r=ec(n,e,t),!G(r)||el(r))return r;throw new eF("Can't convert object to primitive value")}return void 0===t&&(t="number"),eO(e,t)},eo=function(e){var t=es(e,"string");return el(t)?t:t+""};var eW=TypeError,eR=Object.defineProperty,eD=Object.getOwnPropertyDescriptor,eU="enumerable",ez="configurable",eJ="writable";r=y?er?function(e,t,r){if(en(e),t=eo(t),en(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eJ in r&&!r[eJ]){var n=eD(e,t);n&&n[eJ]&&(e[t]=r.value,r={configurable:ez in r?r[ez]:n[ez],enumerable:eU in r?r[eU]:n[eU],writable:!1})}return eR(e,t,r)}:eR:function(e,t,r){if(en(e),t=eo(t),en(r),X)try{return eR(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eW("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var eQ={};eQ=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},K=y?function(e,t,n){return r(e,t,eQ(1,n))}:function(e,t,r){return e[t]=r,e};var eV={},eY=eT("keys");eV=function(e){return eY[e]||(eY[e]=eH(e))};var eG={};eG={};var eK="Object already initialized",eX=_.TypeError,eZ=_.WeakMap;if(V||R.state){var e0=R.state||(R.state=new eZ);e0.get=e0.get,e0.has=e0.has,e0.set=e0.set,a=function(e,t){if(e0.has(e))throw new eX(eK);return t.facade=e,e0.set(e,t),t},o=function(e){return e0.get(e)||{}},s=function(e){return e0.has(e)}}else{var e1=eV("state");eG[e1]=!0,a=function(e,t){if(I(e,e1))throw new eX(eK);return t.facade=e,K(e,e1,t),t},o=function(e){return I(e,e1)?e[e1]:{}},s=function(e){return I(e,e1)}}var e9=(Q={set:a,get:o,has:s,enforce:function(e){return s(e)?o(e):a(e,{})},getterFor:function(e){return function(t){var r;if(!G(t)||(r=o(t)).type!==e)throw new eX("Incompatible receiver, "+e+" required");return r}}}).enforce,e2=Q.get,e3=String,e4=Object.defineProperty,e7=$("".slice),e8=$("".replace),e5=$([].join),e6=y&&!w(function(){return 8!==e4(function(){},"length",{value:8}).length}),te=String(String).split("String"),tt=S=function(e,t,r){"Symbol("===e7(e3(t),0,7)&&(t="["+e8(e3(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!I(e,"name")||B&&e.name!==t)&&(y?e4(e,"name",{value:t,configurable:!0}):e.name=t),e6&&r&&I(r,"arity")&&e.length!==r.arity&&e4(e,"length",{value:r.arity});try{r&&I(r,"constructor")&&r.constructor?y&&e4(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=e9(e);return I(n,"source")||(n.source=e5(te,"string"==typeof t?t:"")),e};Function.prototype.toString=tt(function(){return P(this)&&e2(this).source||W(this)},"toString"),k=function(e,t,n){return n.get&&S(n.get,t,{getter:!0}),n.set&&S(n.set,t,{setter:!0}),r(e,t,n)};var tr={};tr=function(){var e=en(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};var tn=_.RegExp,ti=tn.prototype;y&&w(function(){var e=!0;try{tn(".","d")}catch(t){e=!1}var t={},r="",n=e?"dgimsy":"gimsy",i=function(e,n){Object.defineProperty(t,e,{get:function(){return r+=n,!0}})},a={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var o in e&&(a.hasIndices="d"),a)i(o,a[o]);return Object.getOwnPropertyDescriptor(ti,"flags").get.call(t)!==n||r!==n})&&k(ti,"flags",{configurable:!0,get:tr});var ta={},to={}.propertyIsEnumerable,ts=Object.getOwnPropertyDescriptor;u=ts&&!to.call({1:2},1)?function(e){var t=ts(this,e);return!!t&&t.enumerable}:to;var tc={},tu={},tl={},td=$({}.toString),tp=$("".slice);tl=function(e){return tp(td(e),8,-1)};var tf=Object,tg=$("".split);tu=w(function(){return!tf("z").propertyIsEnumerable(0)})?function(e){return"String"===tl(e)?tg(e,""):tf(e)}:tf,tc=function(e){return tu(L(e))};var th=Object.getOwnPropertyDescriptor;c=y?th:function(e,t){if(e=tc(e),t=eo(t),X)try{return th(e,t)}catch(e){}if(I(e,t))return eQ(!ec(u,e,t),e[t])};var tv={};tv=function(e,t,n,i){i||(i={});var a=i.enumerable,o=void 0!==i.name?i.name:t;if(P(n)&&S(n,o,i),i.global)a?e[t]=n:D(t,n);else{try{i.unsafe?e[t]&&(a=!0):delete e[t]}catch(e){}a?e[t]=n:r(e,t,{value:n,enumerable:!1,configurable:!i.nonConfigurable,writable:!i.nonWritable})}return e};var tm={},t_={},tb={},ty={},tw={},tk={},tS=Math.ceil,t$=Math.floor;tk=Math.trunc||function(e){var t=+e;return(t>0?t$:tS)(t)},tw=function(e){var t=+e;return t!=t||0===t?0:tk(t)};var tE=Math.max,tM=Math.min;ty=function(e,t){var r=tw(e);return r<0?tE(r+t,0):tM(r,t)};var tj={},tO={},tP=Math.min;tO=function(e){return e>0?tP(tw(e),9007199254740991):0},tj=function(e){return tO(e.length)};var tT=function(e){return function(t,r,n){var i,a=tc(t),o=tj(a),s=ty(n,o);if(e&&r!=r){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},tI={includes:tT(!0),indexOf:tT(!1)}.indexOf,tH=$([].push);tb=function(e,t){var r,n=tc(e),i=0,a=[];for(r in n)!I(eG,r)&&I(n,r)&&tH(a,r);for(;t.length>i;)I(n,r=t[i++])&&(~tI(a,r)||tH(a,r));return a};var tL=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tb(e,tL)},d=Object.getOwnPropertySymbols;var tq=$([].concat);t_=ed("Reflect","ownKeys")||function(e){var t=l(en(e));return d?tq(t,d(e)):t},tm=function(e,t,n){for(var i=t_(t),a=0;a<i.length;a++){var o=i[a];I(e,o)||n&&I(n,o)||r(e,o,c(t,o))}};var tx={},tC=/#|\.prototype\./,tA=function(e,t){var r=tF[tN(e)];return r===tW||r!==tB&&(P(t)?w(t):!!t)},tN=tA.normalize=function(e){return String(e).replace(tC,".").toLowerCase()},tF=tA.data={},tB=tA.NATIVE="N",tW=tA.POLYFILL="P";tx=tA,ta=function(e,t){var r,n,i,a,o,s=e.target,u=e.global,l=e.stat;if(r=u?_:l?_[s]||D(s,{}):(_[s]||{}).prototype)for(n in t){if(a=t[n],i=e.dontCallGetSet?(o=c(r,n))&&o.value:r[n],!tx(u?n:s+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;tm(a,i)}(e.sham||i&&i.sham)&&K(a,"sham",!0),tv(r,n,a,e)}};var tR={},tD={},tU=Function.prototype,tz=tU.apply,tJ=tU.call;tD="object"==typeof Reflect&&Reflect.apply||(E?tJ.bind(tz):function(){return tJ.apply(tz,arguments)});var tQ={},tV={},tY=(tV=function(e){if("Function"===tl(e))return $(e)})(tV.bind);tQ=function(e,t){return e$(e),void 0===t?e:E?tY(e,t):function(){return e.apply(t,arguments)}};var tG={};tG=ed("document","documentElement");var tK={};tK=$([].slice);var tX={},tZ=TypeError;tX=function(e,t){if(e<t)throw new tZ("Not enough arguments");return e};var t0={};t0=/(?:ipad|iphone|ipod).*applewebkit/i.test(ev);var t1={};t1="process"===tl(_.process);var t9=_.setImmediate,t2=_.clearImmediate,t3=_.process,t4=_.Dispatch,t7=_.Function,t8=_.MessageChannel,t5=_.String,t6=0,re={},rt="onreadystatechange";w(function(){p=_.location});var rr=function(e){if(I(re,e)){var t=re[e];delete re[e],t()}},rn=function(e){return function(){rr(e)}},ri=function(e){rr(e.data)},ra=function(e){_.postMessage(t5(e),p.protocol+"//"+p.host)};t9&&t2||(t9=function(e){tX(arguments.length,1);var t=P(e)?e:t7(e),r=tK(arguments,1);return re[++t6]=function(){tD(t,void 0,r)},f(t6),t6},t2=function(e){delete re[e]},t1?f=function(e){t3.nextTick(rn(e))}:t4&&t4.now?f=function(e){t4.now(rn(e))}:t8&&!t0?(h=(g=new t8).port2,g.port1.onmessage=ri,f=tQ(h.postMessage,h)):_.addEventListener&&P(_.postMessage)&&!_.importScripts&&p&&"file:"!==p.protocol&&!w(ra)?(f=ra,_.addEventListener("message",ri,!1)):f=rt in Z("script")?function(e){tG.appendChild(Z("script"))[rt]=function(){tG.removeChild(this),rr(e)}}:function(e){setTimeout(rn(e),0)});var ro=(tR={set:t9,clear:t2}).clear;ta({global:!0,bind:!0,enumerable:!0,forced:_.clearImmediate!==ro},{clearImmediate:ro});var rs=tR.set,rc={},ru={};ru="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rl=_.Function,rd=/MSIE .\./.test(ev)||ru&&((t=_.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rc=function(e,t){var r=t?2:1;return rd?function(n,i){var a=tX(arguments.length,1)>r,o=P(n)?n:rl(n),s=a?tK(arguments,r):[],c=a?function(){tD(o,this,s)}:o;return t?e(c,i):e(c)}:e};var rp=_.setImmediate?rc(rs,!1):rs;ta({global:!0,bind:!0,enumerable:!0,forced:_.setImmediate!==rp},{setImmediate:rp});const rf="https://forkify-api.herokuapp.com/api/v2/recipes/",rg="c03929ed-81a9-4a9e-80b2-331c868d3611",rh=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rv={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rm=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},r_=async function(e){try{let t=await rh(`${rf}${e}?key=${rg}`);rv.recipe=rm(t),rv.bookmarks.some(t=>t.id===e)?rv.recipe.bookmarked=!0:rv.recipe.bookmarked=!1}catch(e){throw e}},rb=async function(e){try{rv.search.query=e;let t=await rh(`${rf}?search=${e}&key=${rg}`);rv.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url,...e.key&&{key:e.key}})),rv.search.page=1}catch(e){throw e}},ry=function(e=rv.search.page){rv.search.page=e;let t=(e-1)*rv.search.resultsPerPage,r=e*rv.search.resultsPerPage;return rv.search.results.slice(t,r)},rw=function(e){rv.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rv.recipe.servings}),rv.recipe.servings=e},rk=function(){localStorage.setItem("bookmarks",JSON.stringify(rv.bookmarks))},rS=function(e){rv.bookmarks.push(e),e.id===rv.recipe.id&&(rv.recipe.bookmarked=!0),rk()},r$=function(e){let t=rv.bookmarks.findIndex(t=>t.id===e);rv.bookmarks.splice(t,1),e===rv.recipe.id&&(rv.recipe.bookmarked=!1),rk()};!function(){let e=localStorage.getItem("bookmarks");e&&(rv.bookmarks=JSON.parse(e))}();const rE=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim(" "));if(3!==t.length)throw Error(" Wrong ingredient format!");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rh(`${rf}?key=${rg}`,r);rv.recipe=rm(n),rS(rv.recipe)}catch(e){throw e}};var rM={};rM=new URL("icons.c14567a0.svg",import.meta.url).toString();class rj{_data;render(e,t=!0,r="afterbegin"){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML(r,n)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
          <svg>
            <use href="${m(rM)}#icon-loader"></use>
          </svg>
        </div> `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`<div class="error">
            <div>
              <svg>
                <use href="${m(rM)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._successMessage){let t=`<div class="message">
            <div>
              <svg>
                <use href="${m(rM)}#icon-smile"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var rO={};function rP(e,t,r,n,i){var a,o,s;let c=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,d=t;for(;u<=c.length;)l%c[u]==0&&d%c[u]==0?(c[u],l/=c[u],d/=c[u]):u++;return a=d,o=l,s=r,1===a&&1===o?(s=`${n}${(parseInt(s)+1).toString()}`,`${s}`):0===o?`${n}${s}`:"0"==s?`${n}${o}/${a}`:`${n}${s} ${o}/${a}`}rO=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!o||!(r.length>2)){var s,c;return s=r,c=t,rP(parseInt(s,10),Math.pow(10,s.length),a,c,!1)}{let e=o[0].split("").reverse().join(""),n=o[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=parseFloat(`0.${e}`),s=Math.pow(10,t.length);return rP(Math.round((o*s-o)*Math.pow(10,a)),(s-1)*Math.pow(10,a),n,i,!0)}(r,n,e,a,t)}};class rT extends rj{_parentElement=document.querySelector(".recipe");_errorMessage="We couldn't find this recipe. Please try another!";_successMessage="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${m(rM)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${m(rM)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${m(rM)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${m(rM)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${m(rM)}#icon-user"></use>
            </svg>
          </div>

          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${m(rM)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>

          </div>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(e=>this._generateMarkupIngredients(e)).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${m(rM)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        `}_generateMarkupIngredients(e){return`<li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${m(rM)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${e.quantity?m(rO)(e.quantity).toString():""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
              </div>
            </li>
            `}}var rI=new rT;class rH{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").valu=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rL=new rH,rq=new class extends rj{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
         <li class="preview">
            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>

                <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                  <svg>
                     <use href="${m(rM)}#icon-user"></use>
                  </svg>
                </div>
                
              </div>
            </a>
          </li>
    `}};class rx extends rj{_parentElement=document.querySelector(".results");_errorMessage="No recipes founds!";_successMessage="";_generateMarkup(){return this._data.map(e=>rq.render(e,!1)).join("")}}var rC=new rx;class rA extends rj{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?this._generateMarkupBtnNext(e):e===t&&t>1?this._generateMarkupBtnPrevious(e):e<t-1?`${this._generateMarkupBtnPrevious(e)}
      ${this._generateMarkupBtnLast(t)}
      ${this._generateMarkupBtnNext(e)}`:e<t?`${this._generateMarkupBtnPrevious(e)}
      ${this._generateMarkupBtnNext(e)}`:""}_generateMarkupBtnPrevious(e){return`
          <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${m(rM)}#icon-arrow-left"></use>
            </svg>
            <span>${e-1}</span>
          </button>
         `}_generateMarkupBtnNext(e){return`
          <button data-goto="${e+1}"  class="btn--inline pagination__btn--next">
            <span>${e+1}</span>
            <svg class="search__icon">
              <use href="${m(rM)}#icon-arrow-right"></use>
            </svg>
          </button>
      `}_generateMarkupBtnLast(e){return`
          <button data-goto="${e}" class="btn--inline pagination__btn--last">
            <svg class="search__icon">
              <use href="${m(rM)}#icon-arrow-right"></use>
            </svg>
            <svg class="search__icon">
              <use href="${m(rM)}#icon-arrow-right"></use>
            </svg>
          </button>
      `}}var rN=new rA;class rF extends rj{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet! Find a nice recipe and bookmark it!";_successMessage="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rq.render(e,!1)).join("")}}var rB=new rF;class rW extends rj{_parentElement=document.querySelector(".upload");_successMessage="Uploaded successfuly!";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rR=new rW;class rD extends rj{_parentElement=document.querySelector(".search-results");_errorMessage="No recipes founds!";_successMessage="";_generateMarkup(){return`
          <!--<button class="btn--inline pagination__btn--next">
            <span>hello</span>
            <svg class="search__icon">
              <use href="#icon-arrow-right"></use>
            </svg> 
          </button>-->

              <div>
                <!--<label for="sort">Sort by </label>-->
                <select class="sort-by" id="sort-by" name="sort-by">
                  <option value="">Sort by</option>
                  <option value="time-from-highest">Cooking time &uarr;</option>
                  <option value="time-from-lowest">Cooking time &darr;</option>
                  <option value="ingredients-least">Ingredients &uarr;</option>
                </select>
              </div>
      `}render(){this._parentElement.insertAdjacentHTML("beforebegin",this._generateMarkup())}}var rU=new rD;const rz=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rI.renderSpinner(),rC.update(ry()),rB.update(rv.bookmarks),await r_(e),rI.render(rv.recipe)}catch(e){rI.renderError()}},rJ=async function(){try{rC.renderSpinner();let e=rL.getQuery();if(!e)return;await rb(e),rC.render(ry()),rU.render(),rN.render(rv.search)}catch(e){console.log(e)}},rQ=async function(e){try{rR.renderSpinner(),await rE(e),rI.render(rv.recipe),rR.renderMessage(),rB.render(rv.bookmarks),window.history.pushState(null,"",`#${rv.recipe.id}`),setTimeout(function(){rR.toggleWindow},2500)}catch(e){rR.renderError(e.message)}};rB.addHandlerRender(function(){rB.render(rv.bookmarks)}),rI.addHandlerRender(rz),rI.addHandlerUpdateServings(function(e){rw(e),rI.update(rv.recipe)}),rI.addHandlerAddBookmark(function(){rv.recipe.bookmarked?r$(rv.recipe.id):rS(rv.recipe),rI.update(rv.recipe),rB.render(rv.bookmarks)}),rL.addHandlerSearch(rJ),rN.addHandlerClick(function(e){rC.render(ry(e)),rN.render(rv.search)}),rR.addHandlerUpload(rQ);
//# sourceMappingURL=index.9d90deec.js.map
