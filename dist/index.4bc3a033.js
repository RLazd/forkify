!function(){var e,t,r,n,i,o,a,s,c,u,l,p,f,d,h,g,v,y,m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function _(e){return e&&e.__esModule?e.default:e}var b={},w={},k=m.parcelRequire3a11;null==k&&((k=function(e){if(e in b)return b[e].exports;if(e in w){var t=w[e];delete w[e];var r={id:e,exports:{}};return b[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){w[e]=t},m.parcelRequire3a11=k),k.register;var E={},S=function(e){return e&&e.Math===Math&&e};E=S("object"==typeof globalThis&&globalThis)||S("object"==typeof window&&window)||S("object"==typeof self&&self)||S("object"==typeof m&&m)||S("object"==typeof E&&E)||function(){return this}()||Function("return this")();var $={},O={};$=!(O=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var j={},M={},T={},A={};A=!O(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var L=Function.prototype,P=L.call,x=A&&L.bind.bind(P,P);T=A?x:function(e){return function(){return P.apply(e,arguments)}};var I={},C="object"==typeof document&&document.all;I=void 0===C&&void 0!==C?function(e){return"function"==typeof e||e===C}:function(e){return"function"==typeof e};var F={},N={},R={},q={};q=function(e){return null==e};var H=TypeError;R=function(e){if(q(e))throw new H("Can't call method on "+e);return e};var B=Object;N=function(e){return B(R(e))};var U=T({}.hasOwnProperty);F=Object.hasOwn||function(e,t){return U(N(e),t)};var D=Function.prototype,W=$&&Object.getOwnPropertyDescriptor,G=F(D,"name"),Y=G&&(!$||$&&W(D,"name").configurable),V={},z={},J={},Q=Object.defineProperty;J=function(e,t){try{Q(E,e,{value:t,configurable:!0,writable:!0})}catch(r){E[e]=t}return t};var K="__core-js_shared__";z=E[K]||J(K,{});var X=T(Function.toString);I(z.inspectSource)||(z.inspectSource=function(e){return X(e)}),V=z.inspectSource;var Z={},ee={},et=E.WeakMap;ee=I(et)&&/native code/.test(String(et));var er={};er=function(e){return"object"==typeof e?null!==e:I(e)};var en={},ei={},eo={},ea=E.document,es=er(ea)&&er(ea.createElement);eo=function(e){return es?ea.createElement(e):{}},ei=!$&&!O(function(){return 7!==Object.defineProperty(eo("div"),"a",{get:function(){return 7}}).a});var ec={};ec=$&&O(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eu={},el=String,ep=TypeError;eu=function(e){if(er(e))return e;throw new ep(el(e)+" is not an object")};var ef={},ed={},eh={},eg=Function.prototype.call;eh=A?eg.bind(eg):function(){return eg.apply(eg,arguments)};var ev={},ey={};ey=function(e,t){var r;return arguments.length<2?(r=E[e],I(r)?r:void 0):E[e]&&E[e][t]};var em={};em=T({}.isPrototypeOf);var e_={},eb={},ew={},ek={};ek="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var eE=E.process,eS=E.Deno,e$=eE&&eE.versions||eS&&eS.version,eO=e$&&e$.v8;eO&&(n=(r=eO.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!n&&ek&&(!(r=ek.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=ek.match(/Chrome\/(\d+)/))&&(n=+r[1]),ew=n;var ej=E.String;e_=(eb=!!Object.getOwnPropertySymbols&&!O(function(){var e=Symbol("symbol detection");return!ej(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&ew&&ew<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eM=Object;ev=e_?function(e){return"symbol"==typeof e}:function(e){var t=ey("Symbol");return I(t)&&em(t.prototype,eM(e))};var eT={},eA={},eL={},eP=String;eL=function(e){try{return eP(e)}catch(e){return"Object"}};var ex=TypeError;eA=function(e){if(I(e))return e;throw new ex(eL(e)+" is not a function")},eT=function(e,t){var r=e[t];return q(r)?void 0:eA(r)};var eI={},eC=TypeError;eI=function(e,t){var r,n;if("string"===t&&I(r=e.toString)&&!er(n=eh(r,e))||I(r=e.valueOf)&&!er(n=eh(r,e))||"string"!==t&&I(r=e.toString)&&!er(n=eh(r,e)))return n;throw new eC("Can't convert object to primitive value")};var eF={},eN={},eR={};eR=!1,(eN=function(e,t){return z[e]||(z[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.35.0",mode:eR?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE",source:"https://github.com/zloirock/core-js"});var eq={},eH=0,eB=Math.random(),eU=T(1..toString);eq=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eU(++eH+eB,36)};var eD=E.Symbol,eW=eN("wks"),eG=e_?eD.for||eD:eD&&eD.withoutSetter||eq,eY=TypeError,eV=(eF=function(e){return F(eW,e)||(eW[e]=eb&&F(eD,e)?eD[e]:eG("Symbol."+e)),eW[e]})("toPrimitive");ed=function(e,t){if(!er(e)||ev(e))return e;var r,n=eT(e,eV);if(n){if(void 0===t&&(t="default"),r=eh(n,e,t),!er(r)||ev(r))return r;throw new eY("Can't convert object to primitive value")}return void 0===t&&(t="number"),eI(e,t)},ef=function(e){var t=ed(e,"string");return ev(t)?t:t+""};var ez=TypeError,eJ=Object.defineProperty,eQ=Object.getOwnPropertyDescriptor,eK="enumerable",eX="configurable",eZ="writable";t=$?ec?function(e,t,r){if(eu(e),t=ef(t),eu(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eZ in r&&!r[eZ]){var n=eQ(e,t);n&&n[eZ]&&(e[t]=r.value,r={configurable:eX in r?r[eX]:n[eX],enumerable:eK in r?r[eK]:n[eK],writable:!1})}return eJ(e,t,r)}:eJ:function(e,t,r){if(eu(e),t=ef(t),eu(r),ei)try{return eJ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new ez("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var e0={};e0=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},en=$?function(e,r,n){return t(e,r,e0(1,n))}:function(e,t,r){return e[t]=r,e};var e1={},e2=eN("keys");e1=function(e){return e2[e]||(e2[e]=eq(e))};var e9={};e9={};var e3="Object already initialized",e4=E.TypeError,e8=E.WeakMap;if(ee||z.state){var e6=z.state||(z.state=new e8);e6.get=e6.get,e6.has=e6.has,e6.set=e6.set,i=function(e,t){if(e6.has(e))throw new e4(e3);return t.facade=e,e6.set(e,t),t},o=function(e){return e6.get(e)||{}},a=function(e){return e6.has(e)}}else{var e7=e1("state");e9[e7]=!0,i=function(e,t){if(F(e,e7))throw new e4(e3);return t.facade=e,en(e,e7,t),t},o=function(e){return F(e,e7)?e[e7]:{}},a=function(e){return F(e,e7)}}var e5=(Z={set:i,get:o,has:a,enforce:function(e){return a(e)?o(e):i(e,{})},getterFor:function(e){return function(t){var r;if(!er(t)||(r=o(t)).type!==e)throw new e4("Incompatible receiver, "+e+" required");return r}}}).enforce,te=Z.get,tt=String,tr=Object.defineProperty,tn=T("".slice),ti=T("".replace),to=T([].join),ta=$&&!O(function(){return 8!==tr(function(){},"length",{value:8}).length}),ts=String(String).split("String"),tc=M=function(e,t,r){"Symbol("===tn(tt(t),0,7)&&(t="["+ti(tt(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!F(e,"name")||Y&&e.name!==t)&&($?tr(e,"name",{value:t,configurable:!0}):e.name=t),ta&&r&&F(r,"arity")&&e.length!==r.arity&&tr(e,"length",{value:r.arity});try{r&&F(r,"constructor")&&r.constructor?$&&tr(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=e5(e);return F(n,"source")||(n.source=to(ts,"string"==typeof t?t:"")),e};Function.prototype.toString=tc(function(){return I(this)&&te(this).source||V(this)},"toString"),j=function(e,r,n){return n.get&&M(n.get,r,{getter:!0}),n.set&&M(n.set,r,{setter:!0}),t(e,r,n)};var tu={};tu=function(){var e=eu(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};var tl=E.RegExp,tp=tl.prototype;$&&O(function(){var e=!0;try{tl(".","d")}catch(t){e=!1}var t={},r="",n=e?"dgimsy":"gimsy",i=function(e,n){Object.defineProperty(t,e,{get:function(){return r+=n,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(o.hasIndices="d"),o)i(a,o[a]);return Object.getOwnPropertyDescriptor(tp,"flags").get.call(t)!==n||r!==n})&&j(tp,"flags",{configurable:!0,get:tu});var tf={},td={};td="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView;var th={},tg={},tv=eF("toStringTag"),ty={};ty[tv]="z",tg="[object z]"===String(ty);var tm={},t_=T({}.toString),tb=T("".slice);tm=function(e){return tb(t_(e),8,-1)};var tw=eF("toStringTag"),tk=Object,tE="Arguments"===tm(function(){return arguments}()),tS=function(e,t){try{return e[t]}catch(e){}};th=tg?tm:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=tS(t=tk(e),tw))?r:tE?tm(t):"Object"===(n=tm(t))&&I(t.callee)?"Arguments":n};var t$={};t$=function(e,r,n,i){i||(i={});var o=i.enumerable,a=void 0!==i.name?i.name:r;if(I(n)&&M(n,a,i),i.global)o?e[r]=n:J(r,n);else{try{i.unsafe?e[r]&&(o=!0):delete e[r]}catch(e){}o?e[r]=n:t(e,r,{value:n,enumerable:!1,configurable:!i.nonConfigurable,writable:!i.nonWritable})}return e};var tO={},tj={};tj=!O(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype});var tM=e1("IE_PROTO"),tT=Object,tA=tT.prototype;tO=tj?tT.getPrototypeOf:function(e){var t=N(e);if(F(t,tM))return t[tM];var r=t.constructor;return I(r)&&t instanceof r?r.prototype:t instanceof tT?tA:null};var tL={},tP={};tP=function(e,t,r){try{return T(eA(Object.getOwnPropertyDescriptor(e,t)[r]))}catch(e){}};var tx={},tI={};tI=function(e){return er(e)||null===e};var tC=String,tF=TypeError;tx=function(e){if(tI(e))return e;throw new tF("Can't set "+tC(e)+" as a prototype")},tL=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=tP(Object.prototype,"__proto__","set"))(r,[]),t=r instanceof Array}catch(e){}return function(r,n){return eu(r),tx(n),t?e(r,n):r.__proto__=n,r}}():void 0);var tN=Z.enforce,tR=Z.get,tq=E.Int8Array,tH=tq&&tq.prototype,tB=E.Uint8ClampedArray,tU=tB&&tB.prototype,tD=tq&&tO(tq),tW=tH&&tO(tH),tG=Object.prototype,tY=E.TypeError,tV=eF("toStringTag"),tz=eq("TYPED_ARRAY_TAG"),tJ="TypedArrayConstructor",tQ=td&&!!tL&&"Opera"!==th(E.opera),tK=!1,tX={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},tZ={BigInt64Array:8,BigUint64Array:8},t0=function(e){var t=tO(e);if(er(t)){var r=tR(t);return r&&F(r,tJ)?r[tJ]:t0(t)}},t1=function(e){if(!er(e))return!1;var t=th(e);return F(tX,t)||F(tZ,t)};for(s in tX)(u=(c=E[s])&&c.prototype)?tN(u)[tJ]=c:tQ=!1;for(s in tZ)(u=(c=E[s])&&c.prototype)&&(tN(u)[tJ]=c);if((!tQ||!I(tD)||tD===Function.prototype)&&(tD=function(){throw new tY("Incorrect invocation")},tQ))for(s in tX)E[s]&&tL(E[s],tD);if((!tQ||!tW||tW===tG)&&(tW=tD.prototype,tQ))for(s in tX)E[s]&&tL(E[s].prototype,tW);if(tQ&&tO(tU)!==tW&&tL(tU,tW),$&&!F(tW,tV))for(s in tK=!0,j(tW,tV,{configurable:!0,get:function(){return er(this)?this[tz]:void 0}}),tX)E[s]&&en(E[s],tz,s);tf={NATIVE_ARRAY_BUFFER_VIEWS:tQ,TYPED_ARRAY_TAG:tK&&tz,aTypedArray:function(e){if(t1(e))return e;throw new tY("Target is not a typed array")},aTypedArrayConstructor:function(e){if(I(e)&&(!tL||em(tD,e)))return e;throw new tY(eL(e)+" is not a typed array constructor")},exportTypedArrayMethod:function(e,t,r,n){if($){if(r)for(var i in tX){var o=E[i];if(o&&F(o.prototype,e))try{delete o.prototype[e]}catch(r){try{o.prototype[e]=t}catch(e){}}}(!tW[e]||r)&&t$(tW,e,r?t:tQ&&tH[e]||t,n)}},exportTypedArrayStaticMethod:function(e,t,r){var n,i;if($){if(tL){if(r){for(n in tX)if((i=E[n])&&F(i,e))try{delete i[e]}catch(e){}}if(tD[e]&&!r)return;try{return t$(tD,e,r?t:tQ&&tD[e]||t)}catch(e){}}for(n in tX)(i=E[n])&&(!i[e]||r)&&t$(i,e,t)}},getTypedArrayConstructor:t0,isView:function(e){if(!er(e))return!1;var t=th(e);return"DataView"===t||F(tX,t)||F(tZ,t)},isTypedArray:t1,TypedArray:tD,TypedArrayPrototype:tW};var t2={},t9={},t3={},t4={},t8=Math.ceil,t6=Math.floor;t4=Math.trunc||function(e){var t=+e;return(t>0?t6:t8)(t)},t3=function(e){var t=+e;return t!=t||0===t?0:t4(t)};var t7=Math.min;t9=function(e){return e>0?t7(t3(e),9007199254740991):0},t2=function(e){return t9(e.length)};var t5={},re={},rt=RangeError;re=function(e){var t=t3(e);if(t<0)throw new rt("The argument can't be less than 0");return t};var rr=RangeError;t5=function(e,t){var r=re(e);if(r%t)throw new rr("Wrong offset");return r};var rn=E.RangeError,ri=E.Int8Array,ro=ri&&ri.prototype,ra=ro&&ro.set,rs=tf.aTypedArray,rc=tf.exportTypedArrayMethod,ru=!O(function(){var e=new Uint8ClampedArray(2);return eh(ra,e,{length:1,0:3},1),3!==e[1]}),rl=ru&&tf.NATIVE_ARRAY_BUFFER_VIEWS&&O(function(){var e=new ri(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]});rc("set",function(e){rs(this);var t=t5(arguments.length>1?arguments[1]:void 0,1),r=N(e);if(ru)return eh(ra,this,r,t);var n=this.length,i=t2(r),o=0;if(i+t>n)throw new rn("Wrong length");for(;o<i;)this[t+o]=r[o++]},!ru||rl);var rp={},rf={}.propertyIsEnumerable,rd=Object.getOwnPropertyDescriptor;p=rd&&!rf.call({1:2},1)?function(e){var t=rd(this,e);return!!t&&t.enumerable}:rf;var rh={},rg={},rv=Object,ry=T("".split);rg=O(function(){return!rv("z").propertyIsEnumerable(0)})?function(e){return"String"===tm(e)?ry(e,""):rv(e)}:rv,rh=function(e){return rg(R(e))};var rm=Object.getOwnPropertyDescriptor;l=$?rm:function(e,t){if(e=rh(e),t=ef(t),ei)try{return rm(e,t)}catch(e){}if(F(e,t))return e0(!eh(p,e,t),e[t])};var r_={},rb={},rw={},rk={},rE=Math.max,rS=Math.min;rk=function(e,t){var r=t3(e);return r<0?rE(r+t,0):rS(r,t)};var r$=function(e){return function(t,r,n){var i,o=rh(t),a=t2(o),s=rk(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},rO={includes:r$(!0),indexOf:r$(!1)}.indexOf,rj=T([].push);rw=function(e,t){var r,n=rh(e),i=0,o=[];for(r in n)!F(e9,r)&&F(n,r)&&rj(o,r);for(;t.length>i;)F(n,r=t[i++])&&(~rO(o,r)||rj(o,r));return o};var rM=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");f=Object.getOwnPropertyNames||function(e){return rw(e,rM)},d=Object.getOwnPropertySymbols;var rT=T([].concat);rb=ey("Reflect","ownKeys")||function(e){var t=f(eu(e));return d?rT(t,d(e)):t},r_=function(e,r,n){for(var i=rb(r),o=0;o<i.length;o++){var a=i[o];F(e,a)||n&&F(n,a)||t(e,a,l(r,a))}};var rA={},rL=/#|\.prototype\./,rP=function(e,t){var r=rI[rx(e)];return r===rF||r!==rC&&(I(t)?O(t):!!t)},rx=rP.normalize=function(e){return String(e).replace(rL,".").toLowerCase()},rI=rP.data={},rC=rP.NATIVE="N",rF=rP.POLYFILL="P";rA=rP,rp=function(e,t){var r,n,i,o,a,s=e.target,c=e.global,u=e.stat;if(r=c?E:u?E[s]||J(s,{}):(E[s]||{}).prototype)for(n in t){if(o=t[n],i=e.dontCallGetSet?(a=l(r,n))&&a.value:r[n],!rA(c?n:s+(u?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;r_(o,i)}(e.sham||i&&i.sham)&&en(o,"sham",!0),t$(r,n,o,e)}};var rN={},rR={},rq=Function.prototype,rH=rq.apply,rB=rq.call;rR="object"==typeof Reflect&&Reflect.apply||(A?rB.bind(rH):function(){return rB.apply(rH,arguments)});var rU={},rD={},rW=(rD=function(e){if("Function"===tm(e))return T(e)})(rD.bind);rU=function(e,t){return eA(e),void 0===t?e:A?rW(e,t):function(){return e.apply(t,arguments)}};var rG={};rG=ey("document","documentElement");var rY={};rY=T([].slice);var rV={},rz=TypeError;rV=function(e,t){if(e<t)throw new rz("Not enough arguments");return e};var rJ={};rJ=/(?:ipad|iphone|ipod).*applewebkit/i.test(ek);var rQ={};rQ="process"===tm(E.process);var rK=E.setImmediate,rX=E.clearImmediate,rZ=E.process,r0=E.Dispatch,r1=E.Function,r2=E.MessageChannel,r9=E.String,r3=0,r4={},r8="onreadystatechange";O(function(){h=E.location});var r6=function(e){if(F(r4,e)){var t=r4[e];delete r4[e],t()}},r7=function(e){return function(){r6(e)}},r5=function(e){r6(e.data)},ne=function(e){E.postMessage(r9(e),h.protocol+"//"+h.host)};rK&&rX||(rK=function(e){rV(arguments.length,1);var t=I(e)?e:r1(e),r=rY(arguments,1);return r4[++r3]=function(){rR(t,void 0,r)},g(r3),r3},rX=function(e){delete r4[e]},rQ?g=function(e){rZ.nextTick(r7(e))}:r0&&r0.now?g=function(e){r0.now(r7(e))}:r2&&!rJ?(y=(v=new r2).port2,v.port1.onmessage=r5,g=rU(y.postMessage,y)):E.addEventListener&&I(E.postMessage)&&!E.importScripts&&h&&"file:"!==h.protocol&&!O(ne)?(g=ne,E.addEventListener("message",r5,!1)):g=r8 in eo("script")?function(e){rG.appendChild(eo("script"))[r8]=function(){rG.removeChild(this),r6(e)}}:function(e){setTimeout(r7(e),0)});var nt=(rN={set:rK,clear:rX}).clear;rp({global:!0,bind:!0,enumerable:!0,forced:E.clearImmediate!==nt},{clearImmediate:nt});var nr=rN.set,nn={},ni={};ni="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var no=E.Function,na=/MSIE .\./.test(ek)||ni&&((e=E.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));nn=function(e,t){var r=t?2:1;return na?function(n,i){var o=rV(arguments.length,1)>r,a=I(n)?n:no(n),s=o?rY(arguments,r):[],c=o?function(){rR(a,this,s)}:a;return t?e(c,i):e(c)}:e};var ns=E.setImmediate?nn(nr,!1):nr;rp({global:!0,bind:!0,enumerable:!0,forced:E.setImmediate!==ns},{setImmediate:ns});let nc="https://forkify-api.herokuapp.com/api/v2/recipes/",nu="c03929ed-81a9-4a9e-80b2-331c868d3611",nl=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},np={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},nf=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},nd=async function(e){try{let t=await nl(`${nc}${e}?key=${nu}`);np.recipe=nf(t),np.bookmarks.some(t=>t.id===e)?np.recipe.bookmarked=!0:np.recipe.bookmarked=!1}catch(e){throw e}},nh=async function(e){try{np.search.query=e;let t=await nl(`${nc}?search=${e}&key=${nu}`);console.log(t.data.recipes),np.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url,...e.key&&{key:e.key}})),ng(),np.search.page=1,ng()}catch(e){throw e}},ng=async function(){np.search.results=await Promise.all(np.search.results.map(e=>{console.log(nl(`${nc}${e.id}?key=${nu}`))}))},nv=function(e=np.search.page){np.search.page=e;let t=(e-1)*np.search.resultsPerPage,r=e*np.search.resultsPerPage;return np.search.results.slice(t,r)},ny=function(e){np.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/np.recipe.servings}),np.recipe.servings=e},nm=function(){localStorage.setItem("bookmarks",JSON.stringify(np.bookmarks))},n_=function(e){np.bookmarks.push(e),e.id===np.recipe.id&&(np.recipe.bookmarked=!0),nm()},nb=function(e){let t=np.bookmarks.findIndex(t=>t.id===e);np.bookmarks.splice(t,1),e===np.recipe.id&&(np.recipe.bookmarked=!1),nm()};!function(){let e=localStorage.getItem("bookmarks");e&&(np.bookmarks=JSON.parse(e))}();let nw=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim(" "));if(3!==t.length)throw Error(" Wrong ingredient format!");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await nl(`${nc}?key=${nu}`,r);np.recipe=nf(n),n_(np.recipe)}catch(e){throw e}};var nk={};nk=k("5ufab").getBundleURL("3hnUC")+"icons.c14567a0.svg";class nE{_data;render(e,t=!0,r="afterbegin"){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML(r,n)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
          <svg>
            <use href="${_(nk)}#icon-loader"></use>
          </svg>
        </div> `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`<div class="error">
            <div>
              <svg>
                <use href="${_(nk)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._successMessage){let t=`<div class="message">
            <div>
              <svg>
                <use href="${_(nk)}#icon-smile"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var nS={};function n$(e,t,r,n,i){var o,a,s;let c=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,p=t;for(;u<=c.length;)l%c[u]==0&&p%c[u]==0?(c[u],l/=c[u],p/=c[u]):u++;return o=p,a=l,s=r,1===o&&1===a?(s=`${n}${(parseInt(s)+1).toString()}`,`${s}`):0===a?`${n}${s}`:"0"==s?`${n}${a}/${o}`:`${n}${s} ${a}/${o}`}nS=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),o=i[0];if("0"==r&&"0"!==o)return o;if("0"==r&&"0"==o)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==o)return`${o} 99/100`;if("99"==r&&"0"==o)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return o;let a=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!a||!(r.length>2)){var s,c;return s=r,c=t,n$(parseInt(s,10),Math.pow(10,s.length),o,c,!1)}{let e=a[0].split("").reverse().join(""),n=a[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let o=e.length-r.length>=1?e.length-r.length:1,a=parseFloat(`0.${e}`),s=Math.pow(10,t.length);return n$(Math.round((a*s-a)*Math.pow(10,o)),(s-1)*Math.pow(10,o),n,i,!0)}(r,n,e,o,t)}};class nO extends nE{_parentElement=document.querySelector(".recipe");_errorMessage="We couldn't find this recipe. Please try another!";_successMessage="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${_(nk)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${_(nk)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${_(nk)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${_(nk)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${_(nk)}#icon-user"></use>
            </svg>
          </div>

          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${_(nk)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
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
              <use href="${_(nk)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        `}_generateMarkupIngredients(e){return`<li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${_(nk)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${e.quantity?_(nS)(e.quantity).toString():""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
              </div>
            </li>
            `}}var nj=new nO;class nM{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").valu=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var nT=new nM,nA=new class extends nE{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
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
                     <use href="${_(nk)}#icon-user"></use>
                  </svg>
                </div>
                
              </div>
            </a>
          </li>
    `}};class nL extends nE{_parentElement=document.querySelector(".results");_errorMessage="No recipes founds!";_successMessage="";_generateMarkup(){return this._data.map(e=>nA.render(e,!1)).join("")}}var nP=new nL;class nx extends nE{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?this._generateMarkupBtnNext(e):e===t&&t>1?this._generateMarkupBtnPrevious(e):e<t-1?`${this._generateMarkupBtnPrevious(e)}
      ${this._generateMarkupBtnLast(t)}
      ${this._generateMarkupBtnNext(e)}`:e<t?`${this._generateMarkupBtnPrevious(e)}
      ${this._generateMarkupBtnNext(e)}`:""}_generateMarkupBtnPrevious(e){return`
          <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${_(nk)}#icon-arrow-left"></use>
            </svg>
            <span>${e-1}</span>
          </button>
         `}_generateMarkupBtnNext(e){return`
          <button data-goto="${e+1}"  class="btn--inline pagination__btn--next">
            <span>${e+1}</span>
            <svg class="search__icon">
              <use href="${_(nk)}#icon-arrow-right"></use>
            </svg>
          </button>
      `}_generateMarkupBtnLast(e){return`
          <button data-goto="${e}" class="btn--inline pagination__btn--last">
            <svg class="search__icon">
              <use href="${_(nk)}#icon-arrow-right"></use>
            </svg>
            <svg class="search__icon">
              <use href="${_(nk)}#icon-arrow-right"></use>
            </svg>
          </button>
      `}}var nI=new nx;class nC extends nE{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet! Find a nice recipe and bookmark it!";_successMessage="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>nA.render(e,!1)).join("")}}var nF=new nC;class nN extends nE{_parentElement=document.querySelector(".upload");_successMessage="Uploaded successfuly!";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var nR=new nN,nq=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(a=new j(o||[]),s=f,function(r,i){if(s===d)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=p(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===f)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=d;var u=p(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",d="executing",h="completed",g={};function v(){}function y(){}function m(){}var _={};u(_,a,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(M([])));w&&w!==r&&n.call(w,a)&&(_=w);var k=m.prototype=v.prototype=Object.create(_);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=p(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function M(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=M,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=nq}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=nq:Function("r","regeneratorRuntime = r")(nq)}class nH extends nE{_parentElement=document.querySelector(".search-results");_errorMessage="No recipes founds!";_successMessage="";_generateMarkupSort(){return`
              <div class="sort-by-container">
                <!--<label for="sort">Sort</label>-->
                <select  class="sort-by" id="sort-by" name="sort-by">
                  <option value="">Sort By</option>
                  <option value="time-from-highest">Cooking time &uarr;</option>
                  <option value="time-from-lowest">Cooking time &darr;</option>
                  <option value="ingredients-least">Ingredients &uarr;</option>
                </select>
              </div>
           `}_renderMarkupSort(){this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",this._generateMarkupSort())}_clear(){this._parentElement.querySelector(".sort-by-container")?.remove()}}var nB=new nH;let nU=async function(){try{let e=window.location.hash.slice(1);if(!e)return;nj.renderSpinner(),nP.update(nv()),nF.update(np.bookmarks),await nd(e),nj.render(np.recipe)}catch(e){nj.renderError()}},nD=async function(){try{nP.renderSpinner();let e=nT.getQuery();if(!e)return;await nh(e),nP.render(nv()),nB._renderMarkupSort(),nI.render(np.search)}catch(e){console.log(e)}},nW=async function(e){try{nR.renderSpinner(),await nw(e),nj.render(np.recipe),nR.renderMessage(),nF.render(np.bookmarks),window.history.pushState(null,"",`#${np.recipe.id}`),setTimeout(function(){nR.toggleWindow},2500)}catch(e){nR.renderError(e.message)}};nF.addHandlerRender(function(){nF.render(np.bookmarks)}),nj.addHandlerRender(nU),nj.addHandlerUpdateServings(function(e){ny(e),nj.update(np.recipe)}),nj.addHandlerAddBookmark(function(){np.recipe.bookmarked?nb(np.recipe.id):n_(np.recipe),nj.update(np.recipe),nF.render(np.bookmarks)}),nT.addHandlerSearch(nD),nI.addHandlerClick(function(e){nP.render(nv(e)),nI.render(np.search)}),nR.addHandlerUpload(nW)}();
//# sourceMappingURL=index.4bc3a033.js.map
