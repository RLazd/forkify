!function(){var e,t,r,n,i,a,o,s,c,u,l,d,p,f,g,h,v,y,_="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function m(e){return e&&e.__esModule?e.default:e}var b={},w={},k=_.parcelRequire3a11;null==k&&((k=function(e){if(e in b)return b[e].exports;if(e in w){var t=w[e];delete w[e];var r={id:e,exports:{}};return b[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){w[e]=t},_.parcelRequire3a11=k),k.register;var E={},S=function(e){return e&&e.Math===Math&&e};E=S("object"==typeof globalThis&&globalThis)||S("object"==typeof window&&window)||S("object"==typeof self&&self)||S("object"==typeof _&&_)||S("object"==typeof E&&E)||function(){return this}()||Function("return this")();var $={},M={};$=!(M=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var O={},A={},j={},T={};T=!M(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var P=Function.prototype,I=P.call,x=T&&P.bind.bind(I,I);j=T?x:function(e){return function(){return I.apply(e,arguments)}};var C={},L="object"==typeof document&&document.all;C=void 0===L&&void 0!==L?function(e){return"function"==typeof e||e===L}:function(e){return"function"==typeof e};var H={},q={},R={},F={};F=function(e){return null==e};var N=TypeError;R=function(e){if(F(e))throw new N("Can't call method on "+e);return e};var U=Object;q=function(e){return U(R(e))};var B=j({}.hasOwnProperty);H=Object.hasOwn||function(e,t){return B(q(e),t)};var D=Function.prototype,W=$&&Object.getOwnPropertyDescriptor,V=H(D,"name"),z=V&&(!$||$&&W(D,"name").configurable),Y={},G={},J={},Q=Object.defineProperty;J=function(e,t){try{Q(E,e,{value:t,configurable:!0,writable:!0})}catch(r){E[e]=t}return t};var K="__core-js_shared__";G=E[K]||J(K,{});var X=j(Function.toString);C(G.inspectSource)||(G.inspectSource=function(e){return X(e)}),Y=G.inspectSource;var Z={},ee={},et=E.WeakMap;ee=C(et)&&/native code/.test(String(et));var er={};er=function(e){return"object"==typeof e?null!==e:C(e)};var en={},ei={},ea={},eo=E.document,es=er(eo)&&er(eo.createElement);ea=function(e){return es?eo.createElement(e):{}},ei=!$&&!M(function(){return 7!==Object.defineProperty(ea("div"),"a",{get:function(){return 7}}).a});var ec={};ec=$&&M(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eu={},el=String,ed=TypeError;eu=function(e){if(er(e))return e;throw new ed(el(e)+" is not an object")};var ep={},ef={},eg={},eh=Function.prototype.call;eg=T?eh.bind(eh):function(){return eh.apply(eh,arguments)};var ev={},ey={};ey=function(e,t){var r;return arguments.length<2?(r=E[e],C(r)?r:void 0):E[e]&&E[e][t]};var e_={};e_=j({}.isPrototypeOf);var em={},eb={},ew={},ek={};ek="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var eE=E.process,eS=E.Deno,e$=eE&&eE.versions||eS&&eS.version,eM=e$&&e$.v8;eM&&(n=(r=eM.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!n&&ek&&(!(r=ek.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=ek.match(/Chrome\/(\d+)/))&&(n=+r[1]),ew=n;var eO=E.String;em=(eb=!!Object.getOwnPropertySymbols&&!M(function(){var e=Symbol("symbol detection");return!eO(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&ew&&ew<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eA=Object;ev=em?function(e){return"symbol"==typeof e}:function(e){var t=ey("Symbol");return C(t)&&e_(t.prototype,eA(e))};var ej={},eT={},eP={},eI=String;eP=function(e){try{return eI(e)}catch(e){return"Object"}};var ex=TypeError;eT=function(e){if(C(e))return e;throw new ex(eP(e)+" is not a function")},ej=function(e,t){var r=e[t];return F(r)?void 0:eT(r)};var eC={},eL=TypeError;eC=function(e,t){var r,n;if("string"===t&&C(r=e.toString)&&!er(n=eg(r,e))||C(r=e.valueOf)&&!er(n=eg(r,e))||"string"!==t&&C(r=e.toString)&&!er(n=eg(r,e)))return n;throw new eL("Can't convert object to primitive value")};var eH={},eq={},eR={};eR=!1,(eq=function(e,t){return G[e]||(G[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.35.0",mode:eR?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE",source:"https://github.com/zloirock/core-js"});var eF={},eN=0,eU=Math.random(),eB=j(1..toString);eF=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eB(++eN+eU,36)};var eD=E.Symbol,eW=eq("wks"),eV=em?eD.for||eD:eD&&eD.withoutSetter||eF,ez=TypeError,eY=(eH=function(e){return H(eW,e)||(eW[e]=eb&&H(eD,e)?eD[e]:eV("Symbol."+e)),eW[e]})("toPrimitive");ef=function(e,t){if(!er(e)||ev(e))return e;var r,n=ej(e,eY);if(n){if(void 0===t&&(t="default"),r=eg(n,e,t),!er(r)||ev(r))return r;throw new ez("Can't convert object to primitive value")}return void 0===t&&(t="number"),eC(e,t)},ep=function(e){var t=ef(e,"string");return ev(t)?t:t+""};var eG=TypeError,eJ=Object.defineProperty,eQ=Object.getOwnPropertyDescriptor,eK="enumerable",eX="configurable",eZ="writable";t=$?ec?function(e,t,r){if(eu(e),t=ep(t),eu(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eZ in r&&!r[eZ]){var n=eQ(e,t);n&&n[eZ]&&(e[t]=r.value,r={configurable:eX in r?r[eX]:n[eX],enumerable:eK in r?r[eK]:n[eK],writable:!1})}return eJ(e,t,r)}:eJ:function(e,t,r){if(eu(e),t=ep(t),eu(r),ei)try{return eJ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eG("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var e0={};e0=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},en=$?function(e,r,n){return t(e,r,e0(1,n))}:function(e,t,r){return e[t]=r,e};var e1={},e2=eq("keys");e1=function(e){return e2[e]||(e2[e]=eF(e))};var e9={};e9={};var e3="Object already initialized",e4=E.TypeError,e8=E.WeakMap;if(ee||G.state){var e6=G.state||(G.state=new e8);e6.get=e6.get,e6.has=e6.has,e6.set=e6.set,i=function(e,t){if(e6.has(e))throw new e4(e3);return t.facade=e,e6.set(e,t),t},a=function(e){return e6.get(e)||{}},o=function(e){return e6.has(e)}}else{var e7=e1("state");e9[e7]=!0,i=function(e,t){if(H(e,e7))throw new e4(e3);return t.facade=e,en(e,e7,t),t},a=function(e){return H(e,e7)?e[e7]:{}},o=function(e){return H(e,e7)}}var e5=(Z={set:i,get:a,has:o,enforce:function(e){return o(e)?a(e):i(e,{})},getterFor:function(e){return function(t){var r;if(!er(t)||(r=a(t)).type!==e)throw new e4("Incompatible receiver, "+e+" required");return r}}}).enforce,te=Z.get,tt=String,tr=Object.defineProperty,tn=j("".slice),ti=j("".replace),ta=j([].join),to=$&&!M(function(){return 8!==tr(function(){},"length",{value:8}).length}),ts=String(String).split("String"),tc=A=function(e,t,r){"Symbol("===tn(tt(t),0,7)&&(t="["+ti(tt(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!H(e,"name")||z&&e.name!==t)&&($?tr(e,"name",{value:t,configurable:!0}):e.name=t),to&&r&&H(r,"arity")&&e.length!==r.arity&&tr(e,"length",{value:r.arity});try{r&&H(r,"constructor")&&r.constructor?$&&tr(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=e5(e);return H(n,"source")||(n.source=ta(ts,"string"==typeof t?t:"")),e};Function.prototype.toString=tc(function(){return C(this)&&te(this).source||Y(this)},"toString"),O=function(e,r,n){return n.get&&A(n.get,r,{getter:!0}),n.set&&A(n.set,r,{setter:!0}),t(e,r,n)};var tu={};tu=function(){var e=eu(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};var tl=E.RegExp,td=tl.prototype;$&&M(function(){var e=!0;try{tl(".","d")}catch(t){e=!1}var t={},r="",n=e?"dgimsy":"gimsy",i=function(e,n){Object.defineProperty(t,e,{get:function(){return r+=n,!0}})},a={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var o in e&&(a.hasIndices="d"),a)i(o,a[o]);return Object.getOwnPropertyDescriptor(td,"flags").get.call(t)!==n||r!==n})&&O(td,"flags",{configurable:!0,get:tu});var tp={},tf={};tf="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView;var tg={},th={},tv=eH("toStringTag"),ty={};ty[tv]="z",th="[object z]"===String(ty);var t_={},tm=j({}.toString),tb=j("".slice);t_=function(e){return tb(tm(e),8,-1)};var tw=eH("toStringTag"),tk=Object,tE="Arguments"===t_(function(){return arguments}()),tS=function(e,t){try{return e[t]}catch(e){}};tg=th?t_:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=tS(t=tk(e),tw))?r:tE?t_(t):"Object"===(n=t_(t))&&C(t.callee)?"Arguments":n};var t$={};t$=function(e,r,n,i){i||(i={});var a=i.enumerable,o=void 0!==i.name?i.name:r;if(C(n)&&A(n,o,i),i.global)a?e[r]=n:J(r,n);else{try{i.unsafe?e[r]&&(a=!0):delete e[r]}catch(e){}a?e[r]=n:t(e,r,{value:n,enumerable:!1,configurable:!i.nonConfigurable,writable:!i.nonWritable})}return e};var tM={},tO={};tO=!M(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype});var tA=e1("IE_PROTO"),tj=Object,tT=tj.prototype;tM=tO?tj.getPrototypeOf:function(e){var t=q(e);if(H(t,tA))return t[tA];var r=t.constructor;return C(r)&&t instanceof r?r.prototype:t instanceof tj?tT:null};var tP={},tI={};tI=function(e,t,r){try{return j(eT(Object.getOwnPropertyDescriptor(e,t)[r]))}catch(e){}};var tx={},tC={};tC=function(e){return er(e)||null===e};var tL=String,tH=TypeError;tx=function(e){if(tC(e))return e;throw new tH("Can't set "+tL(e)+" as a prototype")},tP=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=tI(Object.prototype,"__proto__","set"))(r,[]),t=r instanceof Array}catch(e){}return function(r,n){return eu(r),tx(n),t?e(r,n):r.__proto__=n,r}}():void 0);var tq=Z.enforce,tR=Z.get,tF=E.Int8Array,tN=tF&&tF.prototype,tU=E.Uint8ClampedArray,tB=tU&&tU.prototype,tD=tF&&tM(tF),tW=tN&&tM(tN),tV=Object.prototype,tz=E.TypeError,tY=eH("toStringTag"),tG=eF("TYPED_ARRAY_TAG"),tJ="TypedArrayConstructor",tQ=tf&&!!tP&&"Opera"!==tg(E.opera),tK=!1,tX={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},tZ={BigInt64Array:8,BigUint64Array:8},t0=function(e){var t=tM(e);if(er(t)){var r=tR(t);return r&&H(r,tJ)?r[tJ]:t0(t)}},t1=function(e){if(!er(e))return!1;var t=tg(e);return H(tX,t)||H(tZ,t)};for(s in tX)(u=(c=E[s])&&c.prototype)?tq(u)[tJ]=c:tQ=!1;for(s in tZ)(u=(c=E[s])&&c.prototype)&&(tq(u)[tJ]=c);if((!tQ||!C(tD)||tD===Function.prototype)&&(tD=function(){throw new tz("Incorrect invocation")},tQ))for(s in tX)E[s]&&tP(E[s],tD);if((!tQ||!tW||tW===tV)&&(tW=tD.prototype,tQ))for(s in tX)E[s]&&tP(E[s].prototype,tW);if(tQ&&tM(tB)!==tW&&tP(tB,tW),$&&!H(tW,tY))for(s in tK=!0,O(tW,tY,{configurable:!0,get:function(){return er(this)?this[tG]:void 0}}),tX)E[s]&&en(E[s],tG,s);tp={NATIVE_ARRAY_BUFFER_VIEWS:tQ,TYPED_ARRAY_TAG:tK&&tG,aTypedArray:function(e){if(t1(e))return e;throw new tz("Target is not a typed array")},aTypedArrayConstructor:function(e){if(C(e)&&(!tP||e_(tD,e)))return e;throw new tz(eP(e)+" is not a typed array constructor")},exportTypedArrayMethod:function(e,t,r,n){if($){if(r)for(var i in tX){var a=E[i];if(a&&H(a.prototype,e))try{delete a.prototype[e]}catch(r){try{a.prototype[e]=t}catch(e){}}}(!tW[e]||r)&&t$(tW,e,r?t:tQ&&tN[e]||t,n)}},exportTypedArrayStaticMethod:function(e,t,r){var n,i;if($){if(tP){if(r){for(n in tX)if((i=E[n])&&H(i,e))try{delete i[e]}catch(e){}}if(tD[e]&&!r)return;try{return t$(tD,e,r?t:tQ&&tD[e]||t)}catch(e){}}for(n in tX)(i=E[n])&&(!i[e]||r)&&t$(i,e,t)}},getTypedArrayConstructor:t0,isView:function(e){if(!er(e))return!1;var t=tg(e);return"DataView"===t||H(tX,t)||H(tZ,t)},isTypedArray:t1,TypedArray:tD,TypedArrayPrototype:tW};var t2={},t9={},t3={},t4={},t8=Math.ceil,t6=Math.floor;t4=Math.trunc||function(e){var t=+e;return(t>0?t6:t8)(t)},t3=function(e){var t=+e;return t!=t||0===t?0:t4(t)};var t7=Math.min;t9=function(e){return e>0?t7(t3(e),9007199254740991):0},t2=function(e){return t9(e.length)};var t5={},re={},rt=RangeError;re=function(e){var t=t3(e);if(t<0)throw new rt("The argument can't be less than 0");return t};var rr=RangeError;t5=function(e,t){var r=re(e);if(r%t)throw new rr("Wrong offset");return r};var rn=E.RangeError,ri=E.Int8Array,ra=ri&&ri.prototype,ro=ra&&ra.set,rs=tp.aTypedArray,rc=tp.exportTypedArrayMethod,ru=!M(function(){var e=new Uint8ClampedArray(2);return eg(ro,e,{length:1,0:3},1),3!==e[1]}),rl=ru&&tp.NATIVE_ARRAY_BUFFER_VIEWS&&M(function(){var e=new ri(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]});rc("set",function(e){rs(this);var t=t5(arguments.length>1?arguments[1]:void 0,1),r=q(e);if(ru)return eg(ro,this,r,t);var n=this.length,i=t2(r),a=0;if(i+t>n)throw new rn("Wrong length");for(;a<i;)this[t+a]=r[a++]},!ru||rl);var rd={},rp={}.propertyIsEnumerable,rf=Object.getOwnPropertyDescriptor;d=rf&&!rp.call({1:2},1)?function(e){var t=rf(this,e);return!!t&&t.enumerable}:rp;var rg={},rh={},rv=Object,ry=j("".split);rh=M(function(){return!rv("z").propertyIsEnumerable(0)})?function(e){return"String"===t_(e)?ry(e,""):rv(e)}:rv,rg=function(e){return rh(R(e))};var r_=Object.getOwnPropertyDescriptor;l=$?r_:function(e,t){if(e=rg(e),t=ep(t),ei)try{return r_(e,t)}catch(e){}if(H(e,t))return e0(!eg(d,e,t),e[t])};var rm={},rb={},rw={},rk={},rE=Math.max,rS=Math.min;rk=function(e,t){var r=t3(e);return r<0?rE(r+t,0):rS(r,t)};var r$=function(e){return function(t,r,n){var i,a=rg(t),o=t2(a),s=rk(n,o);if(e&&r!=r){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},rM={includes:r$(!0),indexOf:r$(!1)}.indexOf,rO=j([].push);rw=function(e,t){var r,n=rg(e),i=0,a=[];for(r in n)!H(e9,r)&&H(n,r)&&rO(a,r);for(;t.length>i;)H(n,r=t[i++])&&(~rM(a,r)||rO(a,r));return a};var rA=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return rw(e,rA)},f=Object.getOwnPropertySymbols;var rj=j([].concat);rb=ey("Reflect","ownKeys")||function(e){var t=p(eu(e));return f?rj(t,f(e)):t},rm=function(e,r,n){for(var i=rb(r),a=0;a<i.length;a++){var o=i[a];H(e,o)||n&&H(n,o)||t(e,o,l(r,o))}};var rT={},rP=/#|\.prototype\./,rI=function(e,t){var r=rC[rx(e)];return r===rH||r!==rL&&(C(t)?M(t):!!t)},rx=rI.normalize=function(e){return String(e).replace(rP,".").toLowerCase()},rC=rI.data={},rL=rI.NATIVE="N",rH=rI.POLYFILL="P";rT=rI,rd=function(e,t){var r,n,i,a,o,s=e.target,c=e.global,u=e.stat;if(r=c?E:u?E[s]||J(s,{}):(E[s]||{}).prototype)for(n in t){if(a=t[n],i=e.dontCallGetSet?(o=l(r,n))&&o.value:r[n],!rT(c?n:s+(u?".":"#")+n,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;rm(a,i)}(e.sham||i&&i.sham)&&en(a,"sham",!0),t$(r,n,a,e)}};var rq={},rR={},rF=Function.prototype,rN=rF.apply,rU=rF.call;rR="object"==typeof Reflect&&Reflect.apply||(T?rU.bind(rN):function(){return rU.apply(rN,arguments)});var rB={},rD={},rW=(rD=function(e){if("Function"===t_(e))return j(e)})(rD.bind);rB=function(e,t){return eT(e),void 0===t?e:T?rW(e,t):function(){return e.apply(t,arguments)}};var rV={};rV=ey("document","documentElement");var rz={};rz=j([].slice);var rY={},rG=TypeError;rY=function(e,t){if(e<t)throw new rG("Not enough arguments");return e};var rJ={};rJ=/(?:ipad|iphone|ipod).*applewebkit/i.test(ek);var rQ={};rQ="process"===t_(E.process);var rK=E.setImmediate,rX=E.clearImmediate,rZ=E.process,r0=E.Dispatch,r1=E.Function,r2=E.MessageChannel,r9=E.String,r3=0,r4={},r8="onreadystatechange";M(function(){g=E.location});var r6=function(e){if(H(r4,e)){var t=r4[e];delete r4[e],t()}},r7=function(e){return function(){r6(e)}},r5=function(e){r6(e.data)},ne=function(e){E.postMessage(r9(e),g.protocol+"//"+g.host)};rK&&rX||(rK=function(e){rY(arguments.length,1);var t=C(e)?e:r1(e),r=rz(arguments,1);return r4[++r3]=function(){rR(t,void 0,r)},h(r3),r3},rX=function(e){delete r4[e]},rQ?h=function(e){rZ.nextTick(r7(e))}:r0&&r0.now?h=function(e){r0.now(r7(e))}:r2&&!rJ?(y=(v=new r2).port2,v.port1.onmessage=r5,h=rB(y.postMessage,y)):E.addEventListener&&C(E.postMessage)&&!E.importScripts&&g&&"file:"!==g.protocol&&!M(ne)?(h=ne,E.addEventListener("message",r5,!1)):h=r8 in ea("script")?function(e){rV.appendChild(ea("script"))[r8]=function(){rV.removeChild(this),r6(e)}}:function(e){setTimeout(r7(e),0)});var nt=(rq={set:rK,clear:rX}).clear;rd({global:!0,bind:!0,enumerable:!0,forced:E.clearImmediate!==nt},{clearImmediate:nt});var nr=rq.set,nn={},ni={};ni="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var na=E.Function,no=/MSIE .\./.test(ek)||ni&&((e=E.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));nn=function(e,t){var r=t?2:1;return no?function(n,i){var a=rY(arguments.length,1)>r,o=C(n)?n:na(n),s=a?rz(arguments,r):[],c=a?function(){rR(o,this,s)}:o;return t?e(c,i):e(c)}:e};var ns=E.setImmediate?nn(nr,!1):nr;rd({global:!0,bind:!0,enumerable:!0,forced:E.setImmediate!==ns},{setImmediate:ns});let nc="https://forkify-api.herokuapp.com/api/v2/recipes/",nu="c03929ed-81a9-4a9e-80b2-331c868d3611",nl=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},nd={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},np=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},nf=async function(e){try{let t=await nl(`${nc}${e}?key=${nu}`);nd.recipe=np(t),nd.bookmarks.some(t=>t.id===e)?nd.recipe.bookmarked=!0:nd.recipe.bookmarked=!1}catch(e){throw e}},ng=async function(e){try{nd.search.query=e;let t=await nl(`${nc}?search=${e}&key=${nu}`);nd.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url,...e.key&&{key:e.key}})),nd.search.page=1}catch(e){throw e}},nh=function(e=nd.search.page){nd.search.page=e;let t=(e-1)*nd.search.resultsPerPage,r=e*nd.search.resultsPerPage;return nd.search.results.slice(t,r)},nv=function(e){nd.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/nd.recipe.servings}),nd.recipe.servings=e},ny=function(){localStorage.setItem("bookmarks",JSON.stringify(nd.bookmarks))},n_=function(e){nd.bookmarks.push(e),e.id===nd.recipe.id&&(nd.recipe.bookmarked=!0),ny()},nm=function(e){let t=nd.bookmarks.findIndex(t=>t.id===e);nd.bookmarks.splice(t,1),e===nd.recipe.id&&(nd.recipe.bookmarked=!1),ny()};!function(){let e=localStorage.getItem("bookmarks");e&&(nd.bookmarks=JSON.parse(e))}();let nb=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim(" "));if(3!==t.length)throw Error(" Wrong ingredient format!");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await nl(`${nc}?key=${nu}`,r);nd.recipe=np(n),n_(nd.recipe)}catch(e){throw e}};var nw={};nw=k("5ufab").getBundleURL("3hnUC")+"icons.c14567a0.svg";class nk{_data;render(e,t=!0,r="afterbegin"){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML(r,n)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
          <svg>
            <use href="${m(nw)}#icon-loader"></use>
          </svg>
        </div> `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`<div class="error">
            <div>
              <svg>
                <use href="${m(nw)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._successMessage){let t=`<div class="message">
            <div>
              <svg>
                <use href="${m(nw)}#icon-smile"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var nE={};function nS(e,t,r,n,i){var a,o,s;let c=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,d=t;for(;u<=c.length;)l%c[u]==0&&d%c[u]==0?(c[u],l/=c[u],d/=c[u]):u++;return a=d,o=l,s=r,1===a&&1===o?(s=`${n}${(parseInt(s)+1).toString()}`,`${s}`):0===o?`${n}${s}`:"0"==s?`${n}${o}/${a}`:`${n}${s} ${o}/${a}`}nE=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!o||!(r.length>2)){var s,c;return s=r,c=t,nS(parseInt(s,10),Math.pow(10,s.length),a,c,!1)}{let e=o[0].split("").reverse().join(""),n=o[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=parseFloat(`0.${e}`),s=Math.pow(10,t.length);return nS(Math.round((o*s-o)*Math.pow(10,a)),(s-1)*Math.pow(10,a),n,i,!0)}(r,n,e,a,t)}};class n$ extends nk{_parentElement=document.querySelector(".recipe");_errorMessage="We couldn't find this recipe. Please try another!";_successMessage="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${m(nw)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${m(nw)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${m(nw)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${m(nw)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${m(nw)}#icon-user"></use>
            </svg>
          </div>

          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${m(nw)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
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
              <use href="${m(nw)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        `}_generateMarkupIngredients(e){return`<li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${m(nw)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${e.quantity?m(nE)(e.quantity).toString():""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
              </div>
            </li>
            `}}var nM=new n$;class nO{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").valu=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var nA=new nO,nj=new class extends nk{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
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
                     <use href="${m(nw)}#icon-user"></use>
                  </svg>
                </div>
                
              </div>
            </a>
          </li>
    `}};class nT extends nk{_parentElement=document.querySelector(".results");_errorMessage="No recipes founds!";_successMessage="";_generateMarkup(){return this._data.map(e=>nj.render(e,!1)).join("")}}var nP=new nT;class nI extends nk{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?this._generateMarkupBtnNext(e):e===t&&t>1?this._generateMarkupBtnPrevious(e):e<t-1?`${this._generateMarkupBtnPrevious(e)}
      ${this._generateMarkupBtnLast(t)}
      ${this._generateMarkupBtnNext(e)}`:e<t?`${this._generateMarkupBtnPrevious(e)}
      ${this._generateMarkupBtnNext(e)}`:""}_generateMarkupBtnPrevious(e){return`
          <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${m(nw)}#icon-arrow-left"></use>
            </svg>
            <span>${e-1}</span>
          </button>
         `}_generateMarkupBtnNext(e){return`
          <button data-goto="${e+1}"  class="btn--inline pagination__btn--next">
            <span>${e+1}</span>
            <svg class="search__icon">
              <use href="${m(nw)}#icon-arrow-right"></use>
            </svg>
          </button>
      `}_generateMarkupBtnLast(e){return`
          <button data-goto="${e}" class="btn--inline pagination__btn--last">
            <svg class="search__icon">
              <use href="${m(nw)}#icon-arrow-right"></use>
            </svg>
            <svg class="search__icon">
              <use href="${m(nw)}#icon-arrow-right"></use>
            </svg>
          </button>
      `}}var nx=new nI;class nC extends nk{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet! Find a nice recipe and bookmark it!";_successMessage="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>nj.render(e,!1)).join("")}}var nL=new nC;class nH extends nk{_parentElement=document.querySelector(".upload");_successMessage="Uploaded successfuly!";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var nq=new nH;class nR extends nk{_parentElement=document.querySelector(".search-results");_errorMessage="No recipes founds!";_successMessage="";_generateMarkup(){return`
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
      `}render(){this._parentElement.insertAdjacentHTML("beforebegin",this._generateMarkup())}}var nF=new nR;let nN=async function(){try{let e=window.location.hash.slice(1);if(!e)return;nM.renderSpinner(),nP.update(nh()),nL.update(nd.bookmarks),await nf(e),nM.render(nd.recipe)}catch(e){nM.renderError()}},nU=async function(){try{nP.renderSpinner();let e=nA.getQuery();if(!e)return;await ng(e),nP.render(nh()),nF.render(),nx.render(nd.search)}catch(e){console.log(e)}},nB=async function(e){try{nq.renderSpinner(),await nb(e),nM.render(nd.recipe),nq.renderMessage(),nL.render(nd.bookmarks),window.history.pushState(null,"",`#${nd.recipe.id}`),setTimeout(function(){nq.toggleWindow},2500)}catch(e){nq.renderError(e.message)}};nL.addHandlerRender(function(){nL.render(nd.bookmarks)}),nM.addHandlerRender(nN),nM.addHandlerUpdateServings(function(e){nv(e),nM.update(nd.recipe)}),nM.addHandlerAddBookmark(function(){nd.recipe.bookmarked?nm(nd.recipe.id):n_(nd.recipe),nM.update(nd.recipe),nL.render(nd.bookmarks)}),nA.addHandlerSearch(nU),nx.addHandlerClick(function(e){nP.render(nh(e)),nx.render(nd.search)}),nq.addHandlerUpload(nB)}();
//# sourceMappingURL=index.d663490c.js.map
