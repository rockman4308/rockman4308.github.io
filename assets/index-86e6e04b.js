(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();function Au(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ud={exports:{}},Zs={},Kd={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pr=Symbol.for("react.element"),Fu=Symbol.for("react.portal"),Pu=Symbol.for("react.fragment"),_u=Symbol.for("react.strict_mode"),Lu=Symbol.for("react.profiler"),Bu=Symbol.for("react.provider"),Ou=Symbol.for("react.context"),Iu=Symbol.for("react.forward_ref"),Ru=Symbol.for("react.suspense"),Uu=Symbol.for("react.memo"),Ku=Symbol.for("react.lazy"),Jl=Symbol.iterator;function $u(e){return e===null||typeof e!="object"?null:(e=Jl&&e[Jl]||e["@@iterator"],typeof e=="function"?e:null)}var $d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zd=Object.assign,Hd={};function Oa(e,t,a){this.props=e,this.context=t,this.refs=Hd,this.updater=a||$d}Oa.prototype.isReactComponent={};Oa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Oa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vd(){}Vd.prototype=Oa.prototype;function Qi(e,t,a){this.props=e,this.context=t,this.refs=Hd,this.updater=a||$d}var Zi=Qi.prototype=new Vd;Zi.constructor=Qi;zd(Zi,Oa.prototype);Zi.isPureReactComponent=!0;var Ql=Array.isArray,Gd=Object.prototype.hasOwnProperty,el={current:null},Wd={key:!0,ref:!0,__self:!0,__source:!0};function qd(e,t,a){var r,s={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Gd.call(t,r)&&!Wd.hasOwnProperty(r)&&(s[r]=t[r]);var o=arguments.length-2;if(o===1)s.children=a;else if(1<o){for(var d=Array(o),c=0;c<o;c++)d[c]=arguments[c+2];s.children=d}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)s[r]===void 0&&(s[r]=o[r]);return{$$typeof:Pr,type:e,key:i,ref:l,props:s,_owner:el.current}}function zu(e,t){return{$$typeof:Pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pr}function Hu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Zl=/\/+/g;function yn(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hu(""+e.key):t.toString(36)}function cs(e,t,a,r,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Pr:case Fu:l=!0}}if(l)return l=e,s=s(l),e=r===""?"."+yn(l,0):r,Ql(s)?(a="",e!=null&&(a=e.replace(Zl,"$&/")+"/"),cs(s,t,a,"",function(c){return c})):s!=null&&(tl(s)&&(s=zu(s,a+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Zl,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=r===""?".":r+":",Ql(e))for(var o=0;o<e.length;o++){i=e[o];var d=r+yn(i,o);l+=cs(i,t,a,d,s)}else if(d=$u(e),typeof d=="function")for(e=d.call(e),o=0;!(i=e.next()).done;)i=i.value,d=r+yn(i,o++),l+=cs(i,t,a,d,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Vr(e,t,a){if(e==null)return e;var r=[],s=0;return cs(e,r,"","",function(i){return t.call(a,i,s++)}),r}function Vu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},ms={transition:null},Gu={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:ms,ReactCurrentOwner:el};function Yd(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Vr,forEach:function(e,t,a){Vr(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Vr(e,function(){t++}),t},toArray:function(e){return Vr(e,function(t){return t})||[]},only:function(e){if(!tl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Oa;R.Fragment=Pu;R.Profiler=Lu;R.PureComponent=Qi;R.StrictMode=_u;R.Suspense=Ru;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gu;R.act=Yd;R.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zd({},e.props),s=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=el.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(d in t)Gd.call(t,d)&&!Wd.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&o!==void 0?o[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=a;else if(1<d){o=Array(d);for(var c=0;c<d;c++)o[c]=arguments[c+2];r.children=o}return{$$typeof:Pr,type:e.type,key:s,ref:i,props:r,_owner:l}};R.createContext=function(e){return e={$$typeof:Ou,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bu,_context:e},e.Consumer=e};R.createElement=qd;R.createFactory=function(e){var t=qd.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Iu,render:e}};R.isValidElement=tl;R.lazy=function(e){return{$$typeof:Ku,_payload:{_status:-1,_result:e},_init:Vu}};R.memo=function(e,t){return{$$typeof:Uu,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=ms.transition;ms.transition={};try{e()}finally{ms.transition=t}};R.unstable_act=Yd;R.useCallback=function(e,t){return ke.current.useCallback(e,t)};R.useContext=function(e){return ke.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};R.useEffect=function(e,t){return ke.current.useEffect(e,t)};R.useId=function(){return ke.current.useId()};R.useImperativeHandle=function(e,t,a){return ke.current.useImperativeHandle(e,t,a)};R.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ke.current.useMemo(e,t)};R.useReducer=function(e,t,a){return ke.current.useReducer(e,t,a)};R.useRef=function(e){return ke.current.useRef(e)};R.useState=function(e){return ke.current.useState(e)};R.useSyncExternalStore=function(e,t,a){return ke.current.useSyncExternalStore(e,t,a)};R.useTransition=function(){return ke.current.useTransition()};R.version="18.3.1";Kd.exports=R;var N=Kd.exports;const Wu=Au(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qu=N,Yu=Symbol.for("react.element"),Xu=Symbol.for("react.fragment"),Ju=Object.prototype.hasOwnProperty,Qu=qu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zu={key:!0,ref:!0,__self:!0,__source:!0};function Xd(e,t,a){var r,s={},i=null,l=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ju.call(t,r)&&!Zu.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:Yu,type:e,key:i,ref:l,props:s,_owner:Qu.current}}Zs.Fragment=Xu;Zs.jsx=Xd;Zs.jsxs=Xd;Ud.exports=Zs;var n=Ud.exports,Qn={},Jd={exports:{}},Le={},Qd={exports:{}},Zd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,P){var L=C.length;C.push(P);e:for(;0<L;){var $=L-1>>>1,W=C[$];if(0<s(W,P))C[$]=P,C[L]=W,L=$;else break e}}function a(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var P=C[0],L=C.pop();if(L!==P){C[0]=L;e:for(var $=0,W=C.length,et=W>>>1;$<et;){var tt=2*($+1)-1,ia=C[tt],zt=tt+1,Hr=C[zt];if(0>s(ia,L))zt<W&&0>s(Hr,ia)?(C[$]=Hr,C[zt]=L,$=zt):(C[$]=ia,C[tt]=L,$=tt);else if(zt<W&&0>s(Hr,L))C[$]=Hr,C[zt]=L,$=zt;else break e}}return P}function s(C,P){var L=C.sortIndex-P.sortIndex;return L!==0?L:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var d=[],c=[],m=1,u=null,g=3,x=!1,v=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(C){for(var P=a(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=C)r(c),P.sortIndex=P.expirationTime,t(d,P);else break;P=a(c)}}function b(C){if(y=!1,h(C),!v)if(a(d)!==null)v=!0,le(S);else{var P=a(c);P!==null&&fe(b,P.startTime-C)}}function S(C,P){v=!1,y&&(y=!1,f(D),D=-1),x=!0;var L=g;try{for(h(P),u=a(d);u!==null&&(!(u.expirationTime>P)||C&&!ie());){var $=u.callback;if(typeof $=="function"){u.callback=null,g=u.priorityLevel;var W=$(u.expirationTime<=P);P=e.unstable_now(),typeof W=="function"?u.callback=W:u===a(d)&&r(d),h(P)}else r(d);u=a(d)}if(u!==null)var et=!0;else{var tt=a(c);tt!==null&&fe(b,tt.startTime-P),et=!1}return et}finally{u=null,g=L,x=!1}}var T=!1,j=null,D=-1,A=5,E=-1;function ie(){return!(e.unstable_now()-E<A)}function H(){if(j!==null){var C=e.unstable_now();E=C;var P=!0;try{P=j(!0,C)}finally{P?B():(T=!1,j=null)}}else T=!1}var B;if(typeof p=="function")B=function(){p(H)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,ae=z.port2;z.port1.onmessage=H,B=function(){ae.postMessage(null)}}else B=function(){w(H,0)};function le(C){j=C,T||(T=!0,B())}function fe(C,P){D=w(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,le(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return a(d)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var L=g;g=P;try{return C()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var L=g;g=C;try{return P()}finally{g=L}},e.unstable_scheduleCallback=function(C,P,L){var $=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?$+L:$):L=$,C){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=L+W,C={id:m++,callback:P,priorityLevel:C,startTime:L,expirationTime:W,sortIndex:-1},L>$?(C.sortIndex=L,t(c,C),a(d)===null&&C===a(c)&&(y?(f(D),D=-1):y=!0,fe(b,L-$))):(C.sortIndex=W,t(d,C),v||x||(v=!0,le(S))),C},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(C){var P=g;return function(){var L=g;g=P;try{return C.apply(this,arguments)}finally{g=L}}}})(Zd);Qd.exports=Zd;var ep=Qd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp=N,_e=ep;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ec=new Set,pr={};function ra(e,t){Ma(e,t),Ma(e+"Capture",t)}function Ma(e,t){for(pr[e]=t,e=0;e<t.length;e++)ec.add(t[e])}var ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zn=Object.prototype.hasOwnProperty,ap=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eo={},to={};function rp(e){return Zn.call(to,e)?!0:Zn.call(eo,e)?!1:ap.test(e)?to[e]=!0:(eo[e]=!0,!1)}function sp(e,t,a,r){if(a!==null&&a.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function np(e,t,a,r){if(t===null||typeof t>"u"||sp(e,t,a,r))return!0;if(r)return!1;if(a!==null)switch(a.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,a,r,s,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=a,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var al=/[\-:]([a-z])/g;function rl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(al,rl);he[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(al,rl);he[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(al,rl);he[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function sl(e,t,a,r){var s=he.hasOwnProperty(t)?he[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(np(t,a,s,r)&&(a=null),r||s===null?rp(t)&&(a===null?e.removeAttribute(t):e.setAttribute(t,""+a)):s.mustUseProperty?e[s.propertyName]=a===null?s.type===3?!1:"":a:(t=s.attributeName,r=s.attributeNamespace,a===null?e.removeAttribute(t):(s=s.type,a=s===3||s===4&&a===!0?"":""+a,r?e.setAttributeNS(r,t,a):e.setAttribute(t,a))))}var yt=tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gr=Symbol.for("react.element"),ma=Symbol.for("react.portal"),ua=Symbol.for("react.fragment"),nl=Symbol.for("react.strict_mode"),ei=Symbol.for("react.profiler"),tc=Symbol.for("react.provider"),ac=Symbol.for("react.context"),il=Symbol.for("react.forward_ref"),ti=Symbol.for("react.suspense"),ai=Symbol.for("react.suspense_list"),ll=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),rc=Symbol.for("react.offscreen"),ao=Symbol.iterator;function $a(e){return e===null||typeof e!="object"?null:(e=ao&&e[ao]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,bn;function Qa(e){if(bn===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);bn=t&&t[1]||""}return`
`+bn+e}var wn=!1;function kn(e,t){if(!e||wn)return"";wn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),l=s.length-1,o=i.length-1;1<=l&&0<=o&&s[l]!==i[o];)o--;for(;1<=l&&0<=o;l--,o--)if(s[l]!==i[o]){if(l!==1||o!==1)do if(l--,o--,0>o||s[l]!==i[o]){var d=`
`+s[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=o);break}}}finally{wn=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?Qa(e):""}function ip(e){switch(e.tag){case 5:return Qa(e.type);case 16:return Qa("Lazy");case 13:return Qa("Suspense");case 19:return Qa("SuspenseList");case 0:case 2:case 15:return e=kn(e.type,!1),e;case 11:return e=kn(e.type.render,!1),e;case 1:return e=kn(e.type,!0),e;default:return""}}function ri(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ua:return"Fragment";case ma:return"Portal";case ei:return"Profiler";case nl:return"StrictMode";case ti:return"Suspense";case ai:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ac:return(e.displayName||"Context")+".Consumer";case tc:return(e._context.displayName||"Context")+".Provider";case il:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ll:return t=e.displayName||null,t!==null?t:ri(e.type)||"Memo";case kt:t=e._payload,e=e._init;try{return ri(e(t))}catch{}}return null}function lp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ri(t);case 8:return t===nl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ot(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function op(e){var t=sc(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var s=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wr(e){e._valueTracker||(e._valueTracker=op(e))}function nc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),r="";return e&&(r=sc(e)?e.checked?"true":"false":e.value),e=r,e!==a?(t.setValue(e),!0):!1}function js(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function si(e,t){var a=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function ro(e,t){var a=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;a=Ot(t.value!=null?t.value:a),e._wrapperState={initialChecked:r,initialValue:a,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ic(e,t){t=t.checked,t!=null&&sl(e,"checked",t,!1)}function ni(e,t){ic(e,t);var a=Ot(t.value),r=t.type;if(a!=null)r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ii(e,t.type,a):t.hasOwnProperty("defaultValue")&&ii(e,t.type,Ot(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function so(e,t,a){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,a||t===e.value||(e.value=t),e.defaultValue=t}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function ii(e,t,a){(t!=="number"||js(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var Za=Array.isArray;function ka(e,t,a,r){if(e=e.options,t){t={};for(var s=0;s<a.length;s++)t["$"+a[s]]=!0;for(a=0;a<e.length;a++)s=t.hasOwnProperty("$"+e[a].value),e[a].selected!==s&&(e[a].selected=s),s&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Ot(a),t=null,s=0;s<e.length;s++){if(e[s].value===a){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function li(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function no(e,t){var a=t.value;if(a==null){if(a=t.children,t=t.defaultValue,a!=null){if(t!=null)throw Error(k(92));if(Za(a)){if(1<a.length)throw Error(k(93));a=a[0]}t=a}t==null&&(t=""),a=t}e._wrapperState={initialValue:Ot(a)}}function lc(e,t){var a=Ot(t.value),r=Ot(t.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),t.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),r!=null&&(e.defaultValue=""+r)}function io(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function oc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?oc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qr,dc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,a,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,a,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function hr(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dp=["Webkit","ms","Moz","O"];Object.keys(ar).forEach(function(e){dp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ar[t]=ar[e]})});function cc(e,t,a){return t==null||typeof t=="boolean"||t===""?"":a||typeof t!="number"||t===0||ar.hasOwnProperty(e)&&ar[e]?(""+t).trim():t+"px"}function mc(e,t){e=e.style;for(var a in t)if(t.hasOwnProperty(a)){var r=a.indexOf("--")===0,s=cc(a,t[a],r);a==="float"&&(a="cssFloat"),r?e.setProperty(a,s):e[a]=s}}var cp=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function di(e,t){if(t){if(cp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function ci(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function ol(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ui=null,Sa=null,ja=null;function lo(e){if(e=Br(e)){if(typeof ui!="function")throw Error(k(280));var t=e.stateNode;t&&(t=sn(t),ui(e.stateNode,e.type,t))}}function uc(e){Sa?ja?ja.push(e):ja=[e]:Sa=e}function pc(){if(Sa){var e=Sa,t=ja;if(ja=Sa=null,lo(e),t)for(e=0;e<t.length;e++)lo(t[e])}}function hc(e,t){return e(t)}function fc(){}var Sn=!1;function gc(e,t,a){if(Sn)return e(t,a);Sn=!0;try{return hc(e,t,a)}finally{Sn=!1,(Sa!==null||ja!==null)&&(fc(),pc())}}function fr(e,t){var a=e.stateNode;if(a===null)return null;var r=sn(a);if(r===null)return null;a=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(k(231,t,typeof a));return a}var pi=!1;if(ft)try{var za={};Object.defineProperty(za,"passive",{get:function(){pi=!0}}),window.addEventListener("test",za,za),window.removeEventListener("test",za,za)}catch{pi=!1}function mp(e,t,a,r,s,i,l,o,d){var c=Array.prototype.slice.call(arguments,3);try{t.apply(a,c)}catch(m){this.onError(m)}}var rr=!1,Cs=null,Ts=!1,hi=null,up={onError:function(e){rr=!0,Cs=e}};function pp(e,t,a,r,s,i,l,o,d){rr=!1,Cs=null,mp.apply(up,arguments)}function hp(e,t,a,r,s,i,l,o,d){if(pp.apply(this,arguments),rr){if(rr){var c=Cs;rr=!1,Cs=null}else throw Error(k(198));Ts||(Ts=!0,hi=c)}}function sa(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function vc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oo(e){if(sa(e)!==e)throw Error(k(188))}function fp(e){var t=e.alternate;if(!t){if(t=sa(e),t===null)throw Error(k(188));return t!==e?null:e}for(var a=e,r=t;;){var s=a.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){a=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===a)return oo(s),e;if(i===r)return oo(s),t;i=i.sibling}throw Error(k(188))}if(a.return!==r.return)a=s,r=i;else{for(var l=!1,o=s.child;o;){if(o===a){l=!0,a=s,r=i;break}if(o===r){l=!0,r=s,a=i;break}o=o.sibling}if(!l){for(o=i.child;o;){if(o===a){l=!0,a=i,r=s;break}if(o===r){l=!0,r=i,a=s;break}o=o.sibling}if(!l)throw Error(k(189))}}if(a.alternate!==r)throw Error(k(190))}if(a.tag!==3)throw Error(k(188));return a.stateNode.current===a?e:t}function xc(e){return e=fp(e),e!==null?Nc(e):null}function Nc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Nc(e);if(t!==null)return t;e=e.sibling}return null}var yc=_e.unstable_scheduleCallback,co=_e.unstable_cancelCallback,gp=_e.unstable_shouldYield,vp=_e.unstable_requestPaint,se=_e.unstable_now,xp=_e.unstable_getCurrentPriorityLevel,dl=_e.unstable_ImmediatePriority,bc=_e.unstable_UserBlockingPriority,Ds=_e.unstable_NormalPriority,Np=_e.unstable_LowPriority,wc=_e.unstable_IdlePriority,en=null,it=null;function yp(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(en,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:kp,bp=Math.log,wp=Math.LN2;function kp(e){return e>>>=0,e===0?32:31-(bp(e)/wp|0)|0}var Yr=64,Xr=4194304;function er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ms(e,t){var a=e.pendingLanes;if(a===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes,l=a&268435455;if(l!==0){var o=l&~s;o!==0?r=er(o):(i&=l,i!==0&&(r=er(i)))}else l=a&~s,l!==0?r=er(l):i!==0&&(r=er(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(r&4&&(r|=a&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)a=31-We(t),s=1<<a,r|=e[a],t&=~s;return r}function Sp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jp(e,t){for(var a=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-We(i),o=1<<l,d=s[l];d===-1?(!(o&a)||o&r)&&(s[l]=Sp(o,t)):d<=t&&(e.expiredLanes|=o),i&=~o}}function fi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kc(){var e=Yr;return Yr<<=1,!(Yr&4194240)&&(Yr=64),e}function jn(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function _r(e,t,a){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=a}function Cp(e,t){var a=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<a;){var s=31-We(a),i=1<<s;t[s]=0,r[s]=-1,e[s]=-1,a&=~i}}function cl(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var r=31-We(a),s=1<<r;s&t|e[r]&t&&(e[r]|=t),a&=~s}}var G=0;function Sc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var jc,ml,Cc,Tc,Dc,gi=!1,Jr=[],Mt=null,Et=null,At=null,gr=new Map,vr=new Map,jt=[],Tp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mo(e,t){switch(e){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":gr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vr.delete(t.pointerId)}}function Ha(e,t,a,r,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},t!==null&&(t=Br(t),t!==null&&ml(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Dp(e,t,a,r,s){switch(t){case"focusin":return Mt=Ha(Mt,e,t,a,r,s),!0;case"dragenter":return Et=Ha(Et,e,t,a,r,s),!0;case"mouseover":return At=Ha(At,e,t,a,r,s),!0;case"pointerover":var i=s.pointerId;return gr.set(i,Ha(gr.get(i)||null,e,t,a,r,s)),!0;case"gotpointercapture":return i=s.pointerId,vr.set(i,Ha(vr.get(i)||null,e,t,a,r,s)),!0}return!1}function Mc(e){var t=Gt(e.target);if(t!==null){var a=sa(t);if(a!==null){if(t=a.tag,t===13){if(t=vc(a),t!==null){e.blockedOn=t,Dc(e.priority,function(){Cc(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function us(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=vi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);mi=r,a.target.dispatchEvent(r),mi=null}else return t=Br(a),t!==null&&ml(t),e.blockedOn=a,!1;t.shift()}return!0}function uo(e,t,a){us(e)&&a.delete(t)}function Mp(){gi=!1,Mt!==null&&us(Mt)&&(Mt=null),Et!==null&&us(Et)&&(Et=null),At!==null&&us(At)&&(At=null),gr.forEach(uo),vr.forEach(uo)}function Va(e,t){e.blockedOn===t&&(e.blockedOn=null,gi||(gi=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,Mp)))}function xr(e){function t(s){return Va(s,e)}if(0<Jr.length){Va(Jr[0],e);for(var a=1;a<Jr.length;a++){var r=Jr[a];r.blockedOn===e&&(r.blockedOn=null)}}for(Mt!==null&&Va(Mt,e),Et!==null&&Va(Et,e),At!==null&&Va(At,e),gr.forEach(t),vr.forEach(t),a=0;a<jt.length;a++)r=jt[a],r.blockedOn===e&&(r.blockedOn=null);for(;0<jt.length&&(a=jt[0],a.blockedOn===null);)Mc(a),a.blockedOn===null&&jt.shift()}var Ca=yt.ReactCurrentBatchConfig,Es=!0;function Ep(e,t,a,r){var s=G,i=Ca.transition;Ca.transition=null;try{G=1,ul(e,t,a,r)}finally{G=s,Ca.transition=i}}function Ap(e,t,a,r){var s=G,i=Ca.transition;Ca.transition=null;try{G=4,ul(e,t,a,r)}finally{G=s,Ca.transition=i}}function ul(e,t,a,r){if(Es){var s=vi(e,t,a,r);if(s===null)Ln(e,t,r,As,a),mo(e,r);else if(Dp(s,e,t,a,r))r.stopPropagation();else if(mo(e,r),t&4&&-1<Tp.indexOf(e)){for(;s!==null;){var i=Br(s);if(i!==null&&jc(i),i=vi(e,t,a,r),i===null&&Ln(e,t,r,As,a),i===s)break;s=i}s!==null&&r.stopPropagation()}else Ln(e,t,r,null,a)}}var As=null;function vi(e,t,a,r){if(As=null,e=ol(r),e=Gt(e),e!==null)if(t=sa(e),t===null)e=null;else if(a=t.tag,a===13){if(e=vc(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return As=e,null}function Ec(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xp()){case dl:return 1;case bc:return 4;case Ds:case Np:return 16;case wc:return 536870912;default:return 16}default:return 16}}var Tt=null,pl=null,ps=null;function Ac(){if(ps)return ps;var e,t=pl,a=t.length,r,s="value"in Tt?Tt.value:Tt.textContent,i=s.length;for(e=0;e<a&&t[e]===s[e];e++);var l=a-e;for(r=1;r<=l&&t[a-r]===s[i-r];r++);return ps=s.slice(e,1<r?1-r:void 0)}function hs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qr(){return!0}function po(){return!1}function Be(e){function t(a,r,s,i,l){this._reactName=a,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Qr:po,this.isPropagationStopped=po,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qr)},persist:function(){},isPersistent:Qr}),t}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=Be(Ia),Lr=te({},Ia,{view:0,detail:0}),Fp=Be(Lr),Cn,Tn,Ga,tn=te({},Lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ga&&(Ga&&e.type==="mousemove"?(Cn=e.screenX-Ga.screenX,Tn=e.screenY-Ga.screenY):Tn=Cn=0,Ga=e),Cn)},movementY:function(e){return"movementY"in e?e.movementY:Tn}}),ho=Be(tn),Pp=te({},tn,{dataTransfer:0}),_p=Be(Pp),Lp=te({},Lr,{relatedTarget:0}),Dn=Be(Lp),Bp=te({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),Op=Be(Bp),Ip=te({},Ia,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rp=Be(Ip),Up=te({},Ia,{data:0}),fo=Be(Up),Kp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$p={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zp[e])?!!t[e]:!1}function fl(){return Hp}var Vp=te({},Lr,{key:function(e){if(e.key){var t=Kp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$p[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fl,charCode:function(e){return e.type==="keypress"?hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gp=Be(Vp),Wp=te({},tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),go=Be(Wp),qp=te({},Lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fl}),Yp=Be(qp),Xp=te({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jp=Be(Xp),Qp=te({},tn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zp=Be(Qp),eh=[9,13,27,32],gl=ft&&"CompositionEvent"in window,sr=null;ft&&"documentMode"in document&&(sr=document.documentMode);var th=ft&&"TextEvent"in window&&!sr,Fc=ft&&(!gl||sr&&8<sr&&11>=sr),vo=String.fromCharCode(32),xo=!1;function Pc(e,t){switch(e){case"keyup":return eh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _c(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pa=!1;function ah(e,t){switch(e){case"compositionend":return _c(t);case"keypress":return t.which!==32?null:(xo=!0,vo);case"textInput":return e=t.data,e===vo&&xo?null:e;default:return null}}function rh(e,t){if(pa)return e==="compositionend"||!gl&&Pc(e,t)?(e=Ac(),ps=pl=Tt=null,pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fc&&t.locale!=="ko"?null:t.data;default:return null}}var sh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function No(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sh[e.type]:t==="textarea"}function Lc(e,t,a,r){uc(r),t=Fs(t,"onChange"),0<t.length&&(a=new hl("onChange","change",null,a,r),e.push({event:a,listeners:t}))}var nr=null,Nr=null;function nh(e){Gc(e,0)}function an(e){var t=ga(e);if(nc(t))return e}function ih(e,t){if(e==="change")return t}var Bc=!1;if(ft){var Mn;if(ft){var En="oninput"in document;if(!En){var yo=document.createElement("div");yo.setAttribute("oninput","return;"),En=typeof yo.oninput=="function"}Mn=En}else Mn=!1;Bc=Mn&&(!document.documentMode||9<document.documentMode)}function bo(){nr&&(nr.detachEvent("onpropertychange",Oc),Nr=nr=null)}function Oc(e){if(e.propertyName==="value"&&an(Nr)){var t=[];Lc(t,Nr,e,ol(e)),gc(nh,t)}}function lh(e,t,a){e==="focusin"?(bo(),nr=t,Nr=a,nr.attachEvent("onpropertychange",Oc)):e==="focusout"&&bo()}function oh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return an(Nr)}function dh(e,t){if(e==="click")return an(t)}function ch(e,t){if(e==="input"||e==="change")return an(t)}function mh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:mh;function yr(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var s=a[r];if(!Zn.call(t,s)||!Ye(e[s],t[s]))return!1}return!0}function wo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ko(e,t){var a=wo(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=t&&r>=t)return{node:a,offset:t-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=wo(a)}}function Ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rc(){for(var e=window,t=js();t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=js(e.document)}return t}function vl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function uh(e){var t=Rc(),a=e.focusedElem,r=e.selectionRange;if(t!==a&&a&&a.ownerDocument&&Ic(a.ownerDocument.documentElement,a)){if(r!==null&&vl(a)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=a.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!e.extend&&i>r&&(s=r,r=i,i=s),s=ko(a,i);var l=ko(a,r);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ph=ft&&"documentMode"in document&&11>=document.documentMode,ha=null,xi=null,ir=null,Ni=!1;function So(e,t,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ni||ha==null||ha!==js(r)||(r=ha,"selectionStart"in r&&vl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ir&&yr(ir,r)||(ir=r,r=Fs(xi,"onSelect"),0<r.length&&(t=new hl("onSelect","select",null,t,a),e.push({event:t,listeners:r}),t.target=ha)))}function Zr(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var fa={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionend:Zr("Transition","TransitionEnd")},An={},Uc={};ft&&(Uc=document.createElement("div").style,"AnimationEvent"in window||(delete fa.animationend.animation,delete fa.animationiteration.animation,delete fa.animationstart.animation),"TransitionEvent"in window||delete fa.transitionend.transition);function rn(e){if(An[e])return An[e];if(!fa[e])return e;var t=fa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Uc)return An[e]=t[a];return e}var Kc=rn("animationend"),$c=rn("animationiteration"),zc=rn("animationstart"),Hc=rn("transitionend"),Vc=new Map,jo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){Vc.set(e,t),ra(t,[e])}for(var Fn=0;Fn<jo.length;Fn++){var Pn=jo[Fn],hh=Pn.toLowerCase(),fh=Pn[0].toUpperCase()+Pn.slice(1);Rt(hh,"on"+fh)}Rt(Kc,"onAnimationEnd");Rt($c,"onAnimationIteration");Rt(zc,"onAnimationStart");Rt("dblclick","onDoubleClick");Rt("focusin","onFocus");Rt("focusout","onBlur");Rt(Hc,"onTransitionEnd");Ma("onMouseEnter",["mouseout","mouseover"]);Ma("onMouseLeave",["mouseout","mouseover"]);Ma("onPointerEnter",["pointerout","pointerover"]);Ma("onPointerLeave",["pointerout","pointerover"]);ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ra("onBeforeInput",["compositionend","keypress","textInput","paste"]);ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gh=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function Co(e,t,a){var r=e.type||"unknown-event";e.currentTarget=a,hp(r,t,void 0,e),e.currentTarget=null}function Gc(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],s=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var o=r[l],d=o.instance,c=o.currentTarget;if(o=o.listener,d!==i&&s.isPropagationStopped())break e;Co(s,o,c),i=d}else for(l=0;l<r.length;l++){if(o=r[l],d=o.instance,c=o.currentTarget,o=o.listener,d!==i&&s.isPropagationStopped())break e;Co(s,o,c),i=d}}}if(Ts)throw e=hi,Ts=!1,hi=null,e}function Y(e,t){var a=t[Si];a===void 0&&(a=t[Si]=new Set);var r=e+"__bubble";a.has(r)||(Wc(t,e,2,!1),a.add(r))}function _n(e,t,a){var r=0;t&&(r|=4),Wc(a,e,r,t)}var es="_reactListening"+Math.random().toString(36).slice(2);function br(e){if(!e[es]){e[es]=!0,ec.forEach(function(a){a!=="selectionchange"&&(gh.has(a)||_n(a,!1,e),_n(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[es]||(t[es]=!0,_n("selectionchange",!1,t))}}function Wc(e,t,a,r){switch(Ec(t)){case 1:var s=Ep;break;case 4:s=Ap;break;default:s=ul}a=s.bind(null,t,a,e),s=void 0,!pi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,a,{capture:!0,passive:s}):e.addEventListener(t,a,!0):s!==void 0?e.addEventListener(t,a,{passive:s}):e.addEventListener(t,a,!1)}function Ln(e,t,a,r,s){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var o=r.stateNode.containerInfo;if(o===s||o.nodeType===8&&o.parentNode===s)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===s||d.nodeType===8&&d.parentNode===s))return;l=l.return}for(;o!==null;){if(l=Gt(o),l===null)return;if(d=l.tag,d===5||d===6){r=i=l;continue e}o=o.parentNode}}r=r.return}gc(function(){var c=i,m=ol(a),u=[];e:{var g=Vc.get(e);if(g!==void 0){var x=hl,v=e;switch(e){case"keypress":if(hs(a)===0)break e;case"keydown":case"keyup":x=Gp;break;case"focusin":v="focus",x=Dn;break;case"focusout":v="blur",x=Dn;break;case"beforeblur":case"afterblur":x=Dn;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ho;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Yp;break;case Kc:case $c:case zc:x=Op;break;case Hc:x=Jp;break;case"scroll":x=Fp;break;case"wheel":x=Zp;break;case"copy":case"cut":case"paste":x=Rp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=go}var y=(t&4)!==0,w=!y&&e==="scroll",f=y?g!==null?g+"Capture":null:g;y=[];for(var p=c,h;p!==null;){h=p;var b=h.stateNode;if(h.tag===5&&b!==null&&(h=b,f!==null&&(b=fr(p,f),b!=null&&y.push(wr(p,b,h)))),w)break;p=p.return}0<y.length&&(g=new x(g,v,null,a,m),u.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&a!==mi&&(v=a.relatedTarget||a.fromElement)&&(Gt(v)||v[gt]))break e;if((x||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,x?(v=a.relatedTarget||a.toElement,x=c,v=v?Gt(v):null,v!==null&&(w=sa(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=c),x!==v)){if(y=ho,b="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=go,b="onPointerLeave",f="onPointerEnter",p="pointer"),w=x==null?g:ga(x),h=v==null?g:ga(v),g=new y(b,p+"leave",x,a,m),g.target=w,g.relatedTarget=h,b=null,Gt(m)===c&&(y=new y(f,p+"enter",v,a,m),y.target=h,y.relatedTarget=w,b=y),w=b,x&&v)t:{for(y=x,f=v,p=0,h=y;h;h=la(h))p++;for(h=0,b=f;b;b=la(b))h++;for(;0<p-h;)y=la(y),p--;for(;0<h-p;)f=la(f),h--;for(;p--;){if(y===f||f!==null&&y===f.alternate)break t;y=la(y),f=la(f)}y=null}else y=null;x!==null&&To(u,g,x,y,!1),v!==null&&w!==null&&To(u,w,v,y,!0)}}e:{if(g=c?ga(c):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var S=ih;else if(No(g))if(Bc)S=ch;else{S=oh;var T=lh}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=dh);if(S&&(S=S(e,c))){Lc(u,S,a,m);break e}T&&T(e,g,c),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&ii(g,"number",g.value)}switch(T=c?ga(c):window,e){case"focusin":(No(T)||T.contentEditable==="true")&&(ha=T,xi=c,ir=null);break;case"focusout":ir=xi=ha=null;break;case"mousedown":Ni=!0;break;case"contextmenu":case"mouseup":case"dragend":Ni=!1,So(u,a,m);break;case"selectionchange":if(ph)break;case"keydown":case"keyup":So(u,a,m)}var j;if(gl)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else pa?Pc(e,a)&&(D="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(D="onCompositionStart");D&&(Fc&&a.locale!=="ko"&&(pa||D!=="onCompositionStart"?D==="onCompositionEnd"&&pa&&(j=Ac()):(Tt=m,pl="value"in Tt?Tt.value:Tt.textContent,pa=!0)),T=Fs(c,D),0<T.length&&(D=new fo(D,e,null,a,m),u.push({event:D,listeners:T}),j?D.data=j:(j=_c(a),j!==null&&(D.data=j)))),(j=th?ah(e,a):rh(e,a))&&(c=Fs(c,"onBeforeInput"),0<c.length&&(m=new fo("onBeforeInput","beforeinput",null,a,m),u.push({event:m,listeners:c}),m.data=j))}Gc(u,t)})}function wr(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Fs(e,t){for(var a=t+"Capture",r=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=fr(e,a),i!=null&&r.unshift(wr(e,i,s)),i=fr(e,t),i!=null&&r.push(wr(e,i,s))),e=e.return}return r}function la(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function To(e,t,a,r,s){for(var i=t._reactName,l=[];a!==null&&a!==r;){var o=a,d=o.alternate,c=o.stateNode;if(d!==null&&d===r)break;o.tag===5&&c!==null&&(o=c,s?(d=fr(a,i),d!=null&&l.unshift(wr(a,d,o))):s||(d=fr(a,i),d!=null&&l.push(wr(a,d,o)))),a=a.return}l.length!==0&&e.push({event:t,listeners:l})}var vh=/\r\n?/g,xh=/\u0000|\uFFFD/g;function Do(e){return(typeof e=="string"?e:""+e).replace(vh,`
`).replace(xh,"")}function ts(e,t,a){if(t=Do(t),Do(e)!==t&&a)throw Error(k(425))}function Ps(){}var yi=null,bi=null;function wi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ki=typeof setTimeout=="function"?setTimeout:void 0,Nh=typeof clearTimeout=="function"?clearTimeout:void 0,Mo=typeof Promise=="function"?Promise:void 0,yh=typeof queueMicrotask=="function"?queueMicrotask:typeof Mo<"u"?function(e){return Mo.resolve(null).then(e).catch(bh)}:ki;function bh(e){setTimeout(function(){throw e})}function Bn(e,t){var a=t,r=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(r===0){e.removeChild(s),xr(t);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=s}while(a);xr(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Eo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}var Ra=Math.random().toString(36).slice(2),st="__reactFiber$"+Ra,kr="__reactProps$"+Ra,gt="__reactContainer$"+Ra,Si="__reactEvents$"+Ra,wh="__reactListeners$"+Ra,kh="__reactHandles$"+Ra;function Gt(e){var t=e[st];if(t)return t;for(var a=e.parentNode;a;){if(t=a[gt]||a[st]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Eo(e);e!==null;){if(a=e[st])return a;e=Eo(e)}return t}e=a,a=e.parentNode}return null}function Br(e){return e=e[st]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ga(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function sn(e){return e[kr]||null}var ji=[],va=-1;function Ut(e){return{current:e}}function X(e){0>va||(e.current=ji[va],ji[va]=null,va--)}function q(e,t){va++,ji[va]=e.current,e.current=t}var It={},Ne=Ut(It),De=Ut(!1),Jt=It;function Ea(e,t){var a=e.type.contextTypes;if(!a)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in a)s[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Me(e){return e=e.childContextTypes,e!=null}function _s(){X(De),X(Ne)}function Ao(e,t,a){if(Ne.current!==It)throw Error(k(168));q(Ne,t),q(De,a)}function qc(e,t,a){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return a;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(k(108,lp(e)||"Unknown",s));return te({},a,r)}function Ls(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,Jt=Ne.current,q(Ne,e),q(De,De.current),!0}function Fo(e,t,a){var r=e.stateNode;if(!r)throw Error(k(169));a?(e=qc(e,t,Jt),r.__reactInternalMemoizedMergedChildContext=e,X(De),X(Ne),q(Ne,e)):X(De),q(De,a)}var ct=null,nn=!1,On=!1;function Yc(e){ct===null?ct=[e]:ct.push(e)}function Sh(e){nn=!0,Yc(e)}function Kt(){if(!On&&ct!==null){On=!0;var e=0,t=G;try{var a=ct;for(G=1;e<a.length;e++){var r=a[e];do r=r(!0);while(r!==null)}ct=null,nn=!1}catch(s){throw ct!==null&&(ct=ct.slice(e+1)),yc(dl,Kt),s}finally{G=t,On=!1}}return null}var xa=[],Na=0,Bs=null,Os=0,Oe=[],Ie=0,Qt=null,mt=1,ut="";function Ht(e,t){xa[Na++]=Os,xa[Na++]=Bs,Bs=e,Os=t}function Xc(e,t,a){Oe[Ie++]=mt,Oe[Ie++]=ut,Oe[Ie++]=Qt,Qt=e;var r=mt;e=ut;var s=32-We(r)-1;r&=~(1<<s),a+=1;var i=32-We(t)+s;if(30<i){var l=s-s%5;i=(r&(1<<l)-1).toString(32),r>>=l,s-=l,mt=1<<32-We(t)+s|a<<s|r,ut=i+e}else mt=1<<i|a<<s|r,ut=e}function xl(e){e.return!==null&&(Ht(e,1),Xc(e,1,0))}function Nl(e){for(;e===Bs;)Bs=xa[--Na],xa[Na]=null,Os=xa[--Na],xa[Na]=null;for(;e===Qt;)Qt=Oe[--Ie],Oe[Ie]=null,ut=Oe[--Ie],Oe[Ie]=null,mt=Oe[--Ie],Oe[Ie]=null}var Pe=null,Fe=null,J=!1,Ge=null;function Jc(e,t){var a=Re(5,null,null,0);a.elementType="DELETED",a.stateNode=t,a.return=e,t=e.deletions,t===null?(e.deletions=[a],e.flags|=16):t.push(a)}function Po(e,t){switch(e.tag){case 5:var a=e.type;return t=t.nodeType!==1||a.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,Fe=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(a=Qt!==null?{id:mt,overflow:ut}:null,e.memoizedState={dehydrated:t,treeContext:a,retryLane:1073741824},a=Re(18,null,null,0),a.stateNode=t,a.return=e,e.child=a,Pe=e,Fe=null,!0):!1;default:return!1}}function Ci(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ti(e){if(J){var t=Fe;if(t){var a=t;if(!Po(e,t)){if(Ci(e))throw Error(k(418));t=Ft(a.nextSibling);var r=Pe;t&&Po(e,t)?Jc(r,a):(e.flags=e.flags&-4097|2,J=!1,Pe=e)}}else{if(Ci(e))throw Error(k(418));e.flags=e.flags&-4097|2,J=!1,Pe=e}}}function _o(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function as(e){if(e!==Pe)return!1;if(!J)return _o(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wi(e.type,e.memoizedProps)),t&&(t=Fe)){if(Ci(e))throw Qc(),Error(k(418));for(;t;)Jc(e,t),t=Ft(t.nextSibling)}if(_o(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(t===0){Fe=Ft(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=Pe?Ft(e.stateNode.nextSibling):null;return!0}function Qc(){for(var e=Fe;e;)e=Ft(e.nextSibling)}function Aa(){Fe=Pe=null,J=!1}function yl(e){Ge===null?Ge=[e]:Ge.push(e)}var jh=yt.ReactCurrentBatchConfig;function Wa(e,t,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(k(309));var r=a.stateNode}if(!r)throw Error(k(147,e));var s=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var o=s.refs;l===null?delete o[i]:o[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!a._owner)throw Error(k(290,e))}return e}function rs(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lo(e){var t=e._init;return t(e._payload)}function Zc(e){function t(f,p){if(e){var h=f.deletions;h===null?(f.deletions=[p],f.flags|=16):h.push(p)}}function a(f,p){if(!e)return null;for(;p!==null;)t(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function s(f,p){return f=Bt(f,p),f.index=0,f.sibling=null,f}function i(f,p,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<p?(f.flags|=2,p):h):(f.flags|=2,p)):(f.flags|=1048576,p)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function o(f,p,h,b){return p===null||p.tag!==6?(p=Hn(h,f.mode,b),p.return=f,p):(p=s(p,h),p.return=f,p)}function d(f,p,h,b){var S=h.type;return S===ua?m(f,p,h.props.children,b,h.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===kt&&Lo(S)===p.type)?(b=s(p,h.props),b.ref=Wa(f,p,h),b.return=f,b):(b=bs(h.type,h.key,h.props,null,f.mode,b),b.ref=Wa(f,p,h),b.return=f,b)}function c(f,p,h,b){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=Vn(h,f.mode,b),p.return=f,p):(p=s(p,h.children||[]),p.return=f,p)}function m(f,p,h,b,S){return p===null||p.tag!==7?(p=Xt(h,f.mode,b,S),p.return=f,p):(p=s(p,h),p.return=f,p)}function u(f,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Hn(""+p,f.mode,h),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Gr:return h=bs(p.type,p.key,p.props,null,f.mode,h),h.ref=Wa(f,null,p),h.return=f,h;case ma:return p=Vn(p,f.mode,h),p.return=f,p;case kt:var b=p._init;return u(f,b(p._payload),h)}if(Za(p)||$a(p))return p=Xt(p,f.mode,h,null),p.return=f,p;rs(f,p)}return null}function g(f,p,h,b){var S=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:o(f,p,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Gr:return h.key===S?d(f,p,h,b):null;case ma:return h.key===S?c(f,p,h,b):null;case kt:return S=h._init,g(f,p,S(h._payload),b)}if(Za(h)||$a(h))return S!==null?null:m(f,p,h,b,null);rs(f,h)}return null}function x(f,p,h,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return f=f.get(h)||null,o(p,f,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Gr:return f=f.get(b.key===null?h:b.key)||null,d(p,f,b,S);case ma:return f=f.get(b.key===null?h:b.key)||null,c(p,f,b,S);case kt:var T=b._init;return x(f,p,h,T(b._payload),S)}if(Za(b)||$a(b))return f=f.get(h)||null,m(p,f,b,S,null);rs(p,b)}return null}function v(f,p,h,b){for(var S=null,T=null,j=p,D=p=0,A=null;j!==null&&D<h.length;D++){j.index>D?(A=j,j=null):A=j.sibling;var E=g(f,j,h[D],b);if(E===null){j===null&&(j=A);break}e&&j&&E.alternate===null&&t(f,j),p=i(E,p,D),T===null?S=E:T.sibling=E,T=E,j=A}if(D===h.length)return a(f,j),J&&Ht(f,D),S;if(j===null){for(;D<h.length;D++)j=u(f,h[D],b),j!==null&&(p=i(j,p,D),T===null?S=j:T.sibling=j,T=j);return J&&Ht(f,D),S}for(j=r(f,j);D<h.length;D++)A=x(j,f,D,h[D],b),A!==null&&(e&&A.alternate!==null&&j.delete(A.key===null?D:A.key),p=i(A,p,D),T===null?S=A:T.sibling=A,T=A);return e&&j.forEach(function(ie){return t(f,ie)}),J&&Ht(f,D),S}function y(f,p,h,b){var S=$a(h);if(typeof S!="function")throw Error(k(150));if(h=S.call(h),h==null)throw Error(k(151));for(var T=S=null,j=p,D=p=0,A=null,E=h.next();j!==null&&!E.done;D++,E=h.next()){j.index>D?(A=j,j=null):A=j.sibling;var ie=g(f,j,E.value,b);if(ie===null){j===null&&(j=A);break}e&&j&&ie.alternate===null&&t(f,j),p=i(ie,p,D),T===null?S=ie:T.sibling=ie,T=ie,j=A}if(E.done)return a(f,j),J&&Ht(f,D),S;if(j===null){for(;!E.done;D++,E=h.next())E=u(f,E.value,b),E!==null&&(p=i(E,p,D),T===null?S=E:T.sibling=E,T=E);return J&&Ht(f,D),S}for(j=r(f,j);!E.done;D++,E=h.next())E=x(j,f,D,E.value,b),E!==null&&(e&&E.alternate!==null&&j.delete(E.key===null?D:E.key),p=i(E,p,D),T===null?S=E:T.sibling=E,T=E);return e&&j.forEach(function(H){return t(f,H)}),J&&Ht(f,D),S}function w(f,p,h,b){if(typeof h=="object"&&h!==null&&h.type===ua&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Gr:e:{for(var S=h.key,T=p;T!==null;){if(T.key===S){if(S=h.type,S===ua){if(T.tag===7){a(f,T.sibling),p=s(T,h.props.children),p.return=f,f=p;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===kt&&Lo(S)===T.type){a(f,T.sibling),p=s(T,h.props),p.ref=Wa(f,T,h),p.return=f,f=p;break e}a(f,T);break}else t(f,T);T=T.sibling}h.type===ua?(p=Xt(h.props.children,f.mode,b,h.key),p.return=f,f=p):(b=bs(h.type,h.key,h.props,null,f.mode,b),b.ref=Wa(f,p,h),b.return=f,f=b)}return l(f);case ma:e:{for(T=h.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){a(f,p.sibling),p=s(p,h.children||[]),p.return=f,f=p;break e}else{a(f,p);break}else t(f,p);p=p.sibling}p=Vn(h,f.mode,b),p.return=f,f=p}return l(f);case kt:return T=h._init,w(f,p,T(h._payload),b)}if(Za(h))return v(f,p,h,b);if($a(h))return y(f,p,h,b);rs(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(a(f,p.sibling),p=s(p,h),p.return=f,f=p):(a(f,p),p=Hn(h,f.mode,b),p.return=f,f=p),l(f)):a(f,p)}return w}var Fa=Zc(!0),em=Zc(!1),Is=Ut(null),Rs=null,ya=null,bl=null;function wl(){bl=ya=Rs=null}function kl(e){var t=Is.current;X(Is),e._currentValue=t}function Di(e,t,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===a)break;e=e.return}}function Ta(e,t){Rs=e,bl=ya=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(bl!==e)if(e={context:e,memoizedValue:t,next:null},ya===null){if(Rs===null)throw Error(k(308));ya=e,Rs.dependencies={lanes:0,firstContext:e}}else ya=ya.next=e;return t}var Wt=null;function Sl(e){Wt===null?Wt=[e]:Wt.push(e)}function tm(e,t,a,r){var s=t.interleaved;return s===null?(a.next=a,Sl(t)):(a.next=s.next,s.next=a),t.interleaved=a,vt(e,r)}function vt(e,t){e.lanes|=t;var a=e.alternate;for(a!==null&&(a.lanes|=t),a=e,e=e.return;e!==null;)e.childLanes|=t,a=e.alternate,a!==null&&(a.childLanes|=t),a=e,e=e.return;return a.tag===3?a.stateNode:null}var St=!1;function jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function am(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pt(e,t,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,vt(e,a)}return s=r.interleaved,s===null?(t.next=t,Sl(r)):(t.next=s.next,s.next=t),r.interleaved=t,vt(e,a)}function fs(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,cl(e,a)}}function Bo(e,t){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var s=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var l={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};i===null?s=i=l:i=i.next=l,a=a.next}while(a!==null);i===null?s=i=t:i=i.next=t}else s=i=t;a={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}function Us(e,t,a,r){var s=e.updateQueue;St=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var d=o,c=d.next;d.next=null,l===null?i=c:l.next=c,l=d;var m=e.alternate;m!==null&&(m=m.updateQueue,o=m.lastBaseUpdate,o!==l&&(o===null?m.firstBaseUpdate=c:o.next=c,m.lastBaseUpdate=d))}if(i!==null){var u=s.baseState;l=0,m=c=d=null,o=i;do{var g=o.lane,x=o.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:x,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=e,y=o;switch(g=t,x=a,y.tag){case 1:if(v=y.payload,typeof v=="function"){u=v.call(x,u,g);break e}u=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,g=typeof v=="function"?v.call(x,u,g):v,g==null)break e;u=te({},u,g);break e;case 2:St=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,g=s.effects,g===null?s.effects=[o]:g.push(o))}else x={eventTime:x,lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},m===null?(c=m=x,d=u):m=m.next=x,l|=g;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;g=o,o=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(1);if(m===null&&(d=u),s.baseState=d,s.firstBaseUpdate=c,s.lastBaseUpdate=m,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);ea|=l,e.lanes=l,e.memoizedState=u}}function Oo(e,t,a){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=a,typeof s!="function")throw Error(k(191,s));s.call(r)}}}var Or={},lt=Ut(Or),Sr=Ut(Or),jr=Ut(Or);function qt(e){if(e===Or)throw Error(k(174));return e}function Cl(e,t){switch(q(jr,t),q(Sr,e),q(lt,Or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=oi(t,e)}X(lt),q(lt,t)}function Pa(){X(lt),X(Sr),X(jr)}function rm(e){qt(jr.current);var t=qt(lt.current),a=oi(t,e.type);t!==a&&(q(Sr,e),q(lt,a))}function Tl(e){Sr.current===e&&(X(lt),X(Sr))}var Q=Ut(0);function Ks(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var In=[];function Dl(){for(var e=0;e<In.length;e++)In[e]._workInProgressVersionPrimary=null;In.length=0}var gs=yt.ReactCurrentDispatcher,Rn=yt.ReactCurrentBatchConfig,Zt=0,Z=null,oe=null,ce=null,$s=!1,lr=!1,Cr=0,Ch=0;function ge(){throw Error(k(321))}function Ml(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ye(e[a],t[a]))return!1;return!0}function El(e,t,a,r,s,i){if(Zt=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,gs.current=e===null||e.memoizedState===null?Eh:Ah,e=a(r,s),lr){i=0;do{if(lr=!1,Cr=0,25<=i)throw Error(k(301));i+=1,ce=oe=null,t.updateQueue=null,gs.current=Fh,e=a(r,s)}while(lr)}if(gs.current=zs,t=oe!==null&&oe.next!==null,Zt=0,ce=oe=Z=null,$s=!1,t)throw Error(k(300));return e}function Al(){var e=Cr!==0;return Cr=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Z.memoizedState=ce=e:ce=ce.next=e,ce}function $e(){if(oe===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ce===null?Z.memoizedState:ce.next;if(t!==null)ce=t,oe=e;else{if(e===null)throw Error(k(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ce===null?Z.memoizedState=ce=e:ce=ce.next=e}return ce}function Tr(e,t){return typeof t=="function"?t(e):t}function Un(e){var t=$e(),a=t.queue;if(a===null)throw Error(k(311));a.lastRenderedReducer=e;var r=oe,s=r.baseQueue,i=a.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}r.baseQueue=s=i,a.pending=null}if(s!==null){i=s.next,r=r.baseState;var o=l=null,d=null,c=i;do{var m=c.lane;if((Zt&m)===m)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var u={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(o=d=u,l=r):d=d.next=u,Z.lanes|=m,ea|=m}c=c.next}while(c!==null&&c!==i);d===null?l=r:d.next=o,Ye(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,a.lastRenderedState=r}if(e=a.interleaved,e!==null){s=e;do i=s.lane,Z.lanes|=i,ea|=i,s=s.next;while(s!==e)}else s===null&&(a.lanes=0);return[t.memoizedState,a.dispatch]}function Kn(e){var t=$e(),a=t.queue;if(a===null)throw Error(k(311));a.lastRenderedReducer=e;var r=a.dispatch,s=a.pending,i=t.memoizedState;if(s!==null){a.pending=null;var l=s=s.next;do i=e(i,l.action),l=l.next;while(l!==s);Ye(i,t.memoizedState)||(Te=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,r]}function sm(){}function nm(e,t){var a=Z,r=$e(),s=t(),i=!Ye(r.memoizedState,s);if(i&&(r.memoizedState=s,Te=!0),r=r.queue,Fl(om.bind(null,a,r,e),[e]),r.getSnapshot!==t||i||ce!==null&&ce.memoizedState.tag&1){if(a.flags|=2048,Dr(9,lm.bind(null,a,r,s,t),void 0,null),me===null)throw Error(k(349));Zt&30||im(a,t,s)}return s}function im(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function lm(e,t,a,r){t.value=a,t.getSnapshot=r,dm(t)&&cm(e)}function om(e,t,a){return a(function(){dm(t)&&cm(e)})}function dm(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ye(e,a)}catch{return!0}}function cm(e){var t=vt(e,1);t!==null&&qe(t,e,1,-1)}function Io(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:e},t.queue=e,e=e.dispatch=Mh.bind(null,Z,e),[t.memoizedState,e]}function Dr(e,t,a,r){return e={tag:e,create:t,destroy:a,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(a=t.lastEffect,a===null?t.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,t.lastEffect=e)),e}function mm(){return $e().memoizedState}function vs(e,t,a,r){var s=rt();Z.flags|=e,s.memoizedState=Dr(1|t,a,void 0,r===void 0?null:r)}function ln(e,t,a,r){var s=$e();r=r===void 0?null:r;var i=void 0;if(oe!==null){var l=oe.memoizedState;if(i=l.destroy,r!==null&&Ml(r,l.deps)){s.memoizedState=Dr(t,a,i,r);return}}Z.flags|=e,s.memoizedState=Dr(1|t,a,i,r)}function Ro(e,t){return vs(8390656,8,e,t)}function Fl(e,t){return ln(2048,8,e,t)}function um(e,t){return ln(4,2,e,t)}function pm(e,t){return ln(4,4,e,t)}function hm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fm(e,t,a){return a=a!=null?a.concat([e]):null,ln(4,4,hm.bind(null,t,e),a)}function Pl(){}function gm(e,t){var a=$e();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&Ml(t,r[1])?r[0]:(a.memoizedState=[e,t],e)}function vm(e,t){var a=$e();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&Ml(t,r[1])?r[0]:(e=e(),a.memoizedState=[e,t],e)}function xm(e,t,a){return Zt&21?(Ye(a,t)||(a=kc(),Z.lanes|=a,ea|=a,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=a)}function Th(e,t){var a=G;G=a!==0&&4>a?a:4,e(!0);var r=Rn.transition;Rn.transition={};try{e(!1),t()}finally{G=a,Rn.transition=r}}function Nm(){return $e().memoizedState}function Dh(e,t,a){var r=Lt(e);if(a={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null},ym(e))bm(t,a);else if(a=tm(e,t,a,r),a!==null){var s=we();qe(a,e,r,s),wm(a,t,r)}}function Mh(e,t,a){var r=Lt(e),s={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null};if(ym(e))bm(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,o=i(l,a);if(s.hasEagerState=!0,s.eagerState=o,Ye(o,l)){var d=t.interleaved;d===null?(s.next=s,Sl(t)):(s.next=d.next,d.next=s),t.interleaved=s;return}}catch{}finally{}a=tm(e,t,s,r),a!==null&&(s=we(),qe(a,e,r,s),wm(a,t,r))}}function ym(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function bm(e,t){lr=$s=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function wm(e,t,a){if(a&4194240){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,cl(e,a)}}var zs={readContext:Ke,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Eh={readContext:Ke,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:Ro,useImperativeHandle:function(e,t,a){return a=a!=null?a.concat([e]):null,vs(4194308,4,hm.bind(null,t,e),a)},useLayoutEffect:function(e,t){return vs(4194308,4,e,t)},useInsertionEffect:function(e,t){return vs(4,2,e,t)},useMemo:function(e,t){var a=rt();return t=t===void 0?null:t,e=e(),a.memoizedState=[e,t],e},useReducer:function(e,t,a){var r=rt();return t=a!==void 0?a(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Dh.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:Io,useDebugValue:Pl,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=Io(!1),t=e[0];return e=Th.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,a){var r=Z,s=rt();if(J){if(a===void 0)throw Error(k(407));a=a()}else{if(a=t(),me===null)throw Error(k(349));Zt&30||im(r,t,a)}s.memoizedState=a;var i={value:a,getSnapshot:t};return s.queue=i,Ro(om.bind(null,r,i,e),[e]),r.flags|=2048,Dr(9,lm.bind(null,r,i,a,t),void 0,null),a},useId:function(){var e=rt(),t=me.identifierPrefix;if(J){var a=ut,r=mt;a=(r&~(1<<32-We(r)-1)).toString(32)+a,t=":"+t+"R"+a,a=Cr++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=Ch++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ah={readContext:Ke,useCallback:gm,useContext:Ke,useEffect:Fl,useImperativeHandle:fm,useInsertionEffect:um,useLayoutEffect:pm,useMemo:vm,useReducer:Un,useRef:mm,useState:function(){return Un(Tr)},useDebugValue:Pl,useDeferredValue:function(e){var t=$e();return xm(t,oe.memoizedState,e)},useTransition:function(){var e=Un(Tr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:sm,useSyncExternalStore:nm,useId:Nm,unstable_isNewReconciler:!1},Fh={readContext:Ke,useCallback:gm,useContext:Ke,useEffect:Fl,useImperativeHandle:fm,useInsertionEffect:um,useLayoutEffect:pm,useMemo:vm,useReducer:Kn,useRef:mm,useState:function(){return Kn(Tr)},useDebugValue:Pl,useDeferredValue:function(e){var t=$e();return oe===null?t.memoizedState=e:xm(t,oe.memoizedState,e)},useTransition:function(){var e=Kn(Tr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:sm,useSyncExternalStore:nm,useId:Nm,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var a in e)t[a]===void 0&&(t[a]=e[a]);return t}return t}function Mi(e,t,a,r){t=e.memoizedState,a=a(r,t),a=a==null?t:te({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var on={isMounted:function(e){return(e=e._reactInternals)?sa(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var r=we(),s=Lt(e),i=pt(r,s);i.payload=t,a!=null&&(i.callback=a),t=Pt(e,i,s),t!==null&&(qe(t,e,s,r),fs(t,e,s))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var r=we(),s=Lt(e),i=pt(r,s);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Pt(e,i,s),t!==null&&(qe(t,e,s,r),fs(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=we(),r=Lt(e),s=pt(a,r);s.tag=2,t!=null&&(s.callback=t),t=Pt(e,s,r),t!==null&&(qe(t,e,r,a),fs(t,e,r))}};function Uo(e,t,a,r,s,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!yr(a,r)||!yr(s,i):!0}function km(e,t,a){var r=!1,s=It,i=t.contextType;return typeof i=="object"&&i!==null?i=Ke(i):(s=Me(t)?Jt:Ne.current,r=t.contextTypes,i=(r=r!=null)?Ea(e,s):It),t=new t(a,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=on,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ko(e,t,a,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,r),t.state!==e&&on.enqueueReplaceState(t,t.state,null)}function Ei(e,t,a,r){var s=e.stateNode;s.props=a,s.state=e.memoizedState,s.refs={},jl(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=Ke(i):(i=Me(t)?Jt:Ne.current,s.context=Ea(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Mi(e,t,i,a),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&on.enqueueReplaceState(s,s.state,null),Us(e,a,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function _a(e,t){try{var a="",r=t;do a+=ip(r),r=r.return;while(r);var s=a}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function $n(e,t,a){return{value:e,source:null,stack:a??null,digest:t??null}}function Ai(e,t){try{console.error(t.value)}catch(a){setTimeout(function(){throw a})}}var Ph=typeof WeakMap=="function"?WeakMap:Map;function Sm(e,t,a){a=pt(-1,a),a.tag=3,a.payload={element:null};var r=t.value;return a.callback=function(){Vs||(Vs=!0,Ki=r),Ai(e,t)},a}function jm(e,t,a){a=pt(-1,a),a.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;a.payload=function(){return r(s)},a.callback=function(){Ai(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(a.callback=function(){Ai(e,t),typeof r!="function"&&(_t===null?_t=new Set([this]):_t.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),a}function $o(e,t,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Ph;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(a)||(s.add(a),e=Wh.bind(null,e,t,a),t.then(e,e))}function zo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ho(e,t,a,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(t=pt(-1,1),t.tag=2,Pt(a,t,1))),a.lanes|=1),e)}var _h=yt.ReactCurrentOwner,Te=!1;function be(e,t,a,r){t.child=e===null?em(t,null,a,r):Fa(t,e.child,a,r)}function Vo(e,t,a,r,s){a=a.render;var i=t.ref;return Ta(t,s),r=El(e,t,a,r,i,s),a=Al(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,xt(e,t,s)):(J&&a&&xl(t),t.flags|=1,be(e,t,r,s),t.child)}function Go(e,t,a,r,s){if(e===null){var i=a.type;return typeof i=="function"&&!Kl(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(t.tag=15,t.type=i,Cm(e,t,i,r,s)):(e=bs(a.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var l=i.memoizedProps;if(a=a.compare,a=a!==null?a:yr,a(l,r)&&e.ref===t.ref)return xt(e,t,s)}return t.flags|=1,e=Bt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Cm(e,t,a,r,s){if(e!==null){var i=e.memoizedProps;if(yr(i,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=i,(e.lanes&s)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,xt(e,t,s)}return Fi(e,t,a,r,s)}function Tm(e,t,a){var r=t.pendingProps,s=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(wa,Ae),Ae|=a;else{if(!(a&1073741824))return e=i!==null?i.baseLanes|a:a,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(wa,Ae),Ae|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:a,q(wa,Ae),Ae|=r}else i!==null?(r=i.baseLanes|a,t.memoizedState=null):r=a,q(wa,Ae),Ae|=r;return be(e,t,s,a),t.child}function Dm(e,t){var a=t.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(t.flags|=512,t.flags|=2097152)}function Fi(e,t,a,r,s){var i=Me(a)?Jt:Ne.current;return i=Ea(t,i),Ta(t,s),a=El(e,t,a,r,i,s),r=Al(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,xt(e,t,s)):(J&&r&&xl(t),t.flags|=1,be(e,t,a,s),t.child)}function Wo(e,t,a,r,s){if(Me(a)){var i=!0;Ls(t)}else i=!1;if(Ta(t,s),t.stateNode===null)xs(e,t),km(t,a,r),Ei(t,a,r,s),r=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var d=l.context,c=a.contextType;typeof c=="object"&&c!==null?c=Ke(c):(c=Me(a)?Jt:Ne.current,c=Ea(t,c));var m=a.getDerivedStateFromProps,u=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";u||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==r||d!==c)&&Ko(t,l,r,c),St=!1;var g=t.memoizedState;l.state=g,Us(t,r,l,s),d=t.memoizedState,o!==r||g!==d||De.current||St?(typeof m=="function"&&(Mi(t,a,m,r),d=t.memoizedState),(o=St||Uo(t,a,o,r,g,d,c))?(u||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=c,r=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,am(e,t),o=t.memoizedProps,c=t.type===t.elementType?o:He(t.type,o),l.props=c,u=t.pendingProps,g=l.context,d=a.contextType,typeof d=="object"&&d!==null?d=Ke(d):(d=Me(a)?Jt:Ne.current,d=Ea(t,d));var x=a.getDerivedStateFromProps;(m=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==u||g!==d)&&Ko(t,l,r,d),St=!1,g=t.memoizedState,l.state=g,Us(t,r,l,s);var v=t.memoizedState;o!==u||g!==v||De.current||St?(typeof x=="function"&&(Mi(t,a,x,r),v=t.memoizedState),(c=St||Uo(t,a,c,r,g,v,d)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=d,r=c):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Pi(e,t,a,r,i,s)}function Pi(e,t,a,r,s,i){Dm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return s&&Fo(t,a,!1),xt(e,t,i);r=t.stateNode,_h.current=t;var o=l&&typeof a.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Fa(t,e.child,null,i),t.child=Fa(t,null,o,i)):be(e,t,o,i),t.memoizedState=r.state,s&&Fo(t,a,!0),t.child}function Mm(e){var t=e.stateNode;t.pendingContext?Ao(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ao(e,t.context,!1),Cl(e,t.containerInfo)}function qo(e,t,a,r,s){return Aa(),yl(s),t.flags|=256,be(e,t,a,r),t.child}var _i={dehydrated:null,treeContext:null,retryLane:0};function Li(e){return{baseLanes:e,cachePool:null,transitions:null}}function Em(e,t,a){var r=t.pendingProps,s=Q.current,i=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(s&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),q(Q,s&1),e===null)return Ti(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=mn(l,r,0,null),e=Xt(e,r,a,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Li(a),t.memoizedState=_i,e):_l(t,l));if(s=e.memoizedState,s!==null&&(o=s.dehydrated,o!==null))return Lh(e,t,l,r,o,s,a);if(i){i=r.fallback,l=t.mode,s=e.child,o=s.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Bt(s,d),r.subtreeFlags=s.subtreeFlags&14680064),o!==null?i=Bt(o,i):(i=Xt(i,l,a,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Li(a):{baseLanes:l.baseLanes|a,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~a,t.memoizedState=_i,r}return i=e.child,e=i.sibling,r=Bt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=a),r.return=t,r.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=r,t.memoizedState=null,r}function _l(e,t){return t=mn({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ss(e,t,a,r){return r!==null&&yl(r),Fa(t,e.child,null,a),e=_l(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lh(e,t,a,r,s,i,l){if(a)return t.flags&256?(t.flags&=-257,r=$n(Error(k(422))),ss(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,s=t.mode,r=mn({mode:"visible",children:r.children},s,0,null),i=Xt(i,s,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Fa(t,e.child,null,l),t.child.memoizedState=Li(l),t.memoizedState=_i,i);if(!(t.mode&1))return ss(e,t,l,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var o=r.dgst;return r=o,i=Error(k(419)),r=$n(i,r,void 0),ss(e,t,l,r)}if(o=(l&e.childLanes)!==0,Te||o){if(r=me,r!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|l)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,vt(e,s),qe(r,e,s,-1))}return Ul(),r=$n(Error(k(421))),ss(e,t,l,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=qh.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,Fe=Ft(s.nextSibling),Pe=t,J=!0,Ge=null,e!==null&&(Oe[Ie++]=mt,Oe[Ie++]=ut,Oe[Ie++]=Qt,mt=e.id,ut=e.overflow,Qt=t),t=_l(t,r.children),t.flags|=4096,t)}function Yo(e,t,a){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Di(e.return,t,a)}function zn(e,t,a,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=a,i.tailMode=s)}function Am(e,t,a){var r=t.pendingProps,s=r.revealOrder,i=r.tail;if(be(e,t,r.children,a),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yo(e,a,t);else if(e.tag===19)Yo(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(Q,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(a=t.child,s=null;a!==null;)e=a.alternate,e!==null&&Ks(e)===null&&(s=a),a=a.sibling;a=s,a===null?(s=t.child,t.child=null):(s=a.sibling,a.sibling=null),zn(t,!1,s,a,i);break;case"backwards":for(a=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Ks(e)===null){t.child=s;break}e=s.sibling,s.sibling=a,a=s,s=e}zn(t,!0,a,null,i);break;case"together":zn(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ea|=t.lanes,!(a&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,a=Bt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Bt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Bh(e,t,a){switch(t.tag){case 3:Mm(t),Aa();break;case 5:rm(t);break;case 1:Me(t.type)&&Ls(t);break;case 4:Cl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;q(Is,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(Q,Q.current&1),t.flags|=128,null):a&t.child.childLanes?Em(e,t,a):(q(Q,Q.current&1),e=xt(e,t,a),e!==null?e.sibling:null);q(Q,Q.current&1);break;case 19:if(r=(a&t.childLanes)!==0,e.flags&128){if(r)return Am(e,t,a);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),q(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Tm(e,t,a)}return xt(e,t,a)}var Fm,Bi,Pm,_m;Fm=function(e,t){for(var a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};Bi=function(){};Pm=function(e,t,a,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,qt(lt.current);var i=null;switch(a){case"input":s=si(e,s),r=si(e,r),i=[];break;case"select":s=te({},s,{value:void 0}),r=te({},r,{value:void 0}),i=[];break;case"textarea":s=li(e,s),r=li(e,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ps)}di(a,r);var l;a=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var o=s[c];for(l in o)o.hasOwnProperty(l)&&(a||(a={}),a[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(pr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var d=r[c];if(o=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&d!==o&&(d!=null||o!=null))if(c==="style")if(o){for(l in o)!o.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(a||(a={}),a[l]="");for(l in d)d.hasOwnProperty(l)&&o[l]!==d[l]&&(a||(a={}),a[l]=d[l])}else a||(i||(i=[]),i.push(c,a)),a=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,o=o?o.__html:void 0,d!=null&&o!==d&&(i=i||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(pr.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&Y("scroll",e),i||o===d||(i=[])):(i=i||[]).push(c,d))}a&&(i=i||[]).push("style",a);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};_m=function(e,t,a,r){a!==r&&(t.flags|=4)};function qa(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(t)for(var s=e.child;s!==null;)a|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)a|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=a,t}function Oh(e,t,a){var r=t.pendingProps;switch(Nl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Me(t.type)&&_s(),ve(t),null;case 3:return r=t.stateNode,Pa(),X(De),X(Ne),Dl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(as(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ge!==null&&(Hi(Ge),Ge=null))),Bi(e,t),ve(t),null;case 5:Tl(t);var s=qt(jr.current);if(a=t.type,e!==null&&t.stateNode!=null)Pm(e,t,a,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ve(t),null}if(e=qt(lt.current),as(t)){r=t.stateNode,a=t.type;var i=t.memoizedProps;switch(r[st]=t,r[kr]=i,e=(t.mode&1)!==0,a){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(s=0;s<tr.length;s++)Y(tr[s],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":ro(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":no(r,i),Y("invalid",r)}di(a,i),s=null;for(var l in i)if(i.hasOwnProperty(l)){var o=i[l];l==="children"?typeof o=="string"?r.textContent!==o&&(i.suppressHydrationWarning!==!0&&ts(r.textContent,o,e),s=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&ts(r.textContent,o,e),s=["children",""+o]):pr.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&Y("scroll",r)}switch(a){case"input":Wr(r),so(r,i,!0);break;case"textarea":Wr(r),io(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ps)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=oc(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(a,{is:r.is}):(e=l.createElement(a),a==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,a),e[st]=t,e[kr]=r,Fm(e,t,!1,!1),t.stateNode=e;e:{switch(l=ci(a,r),a){case"dialog":Y("cancel",e),Y("close",e),s=r;break;case"iframe":case"object":case"embed":Y("load",e),s=r;break;case"video":case"audio":for(s=0;s<tr.length;s++)Y(tr[s],e);s=r;break;case"source":Y("error",e),s=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),s=r;break;case"details":Y("toggle",e),s=r;break;case"input":ro(e,r),s=si(e,r),Y("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=te({},r,{value:void 0}),Y("invalid",e);break;case"textarea":no(e,r),s=li(e,r),Y("invalid",e);break;default:s=r}di(a,s),o=s;for(i in o)if(o.hasOwnProperty(i)){var d=o[i];i==="style"?mc(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&dc(e,d)):i==="children"?typeof d=="string"?(a!=="textarea"||d!=="")&&hr(e,d):typeof d=="number"&&hr(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(pr.hasOwnProperty(i)?d!=null&&i==="onScroll"&&Y("scroll",e):d!=null&&sl(e,i,d,l))}switch(a){case"input":Wr(e),so(e,r,!1);break;case"textarea":Wr(e),io(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ot(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ka(e,!!r.multiple,i,!1):r.defaultValue!=null&&ka(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ps)}switch(a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)_m(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(a=qt(jr.current),qt(lt.current),as(t)){if(r=t.stateNode,a=t.memoizedProps,r[st]=t,(i=r.nodeValue!==a)&&(e=Pe,e!==null))switch(e.tag){case 3:ts(r.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ts(r.nodeValue,a,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(a.nodeType===9?a:a.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return ve(t),null;case 13:if(X(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Fe!==null&&t.mode&1&&!(t.flags&128))Qc(),Aa(),t.flags|=98560,i=!1;else if(i=as(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[st]=t}else Aa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else Ge!==null&&(Hi(Ge),Ge=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=a,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?de===0&&(de=3):Ul())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Pa(),Bi(e,t),e===null&&br(t.stateNode.containerInfo),ve(t),null;case 10:return kl(t.type._context),ve(t),null;case 17:return Me(t.type)&&_s(),ve(t),null;case 19:if(X(Q),i=t.memoizedState,i===null)return ve(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)qa(i,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ks(e),l!==null){for(t.flags|=128,qa(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=a,a=t.child;a!==null;)i=a,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return q(Q,Q.current&1|2),t.child}e=e.sibling}i.tail!==null&&se()>La&&(t.flags|=128,r=!0,qa(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ks(l),e!==null){if(t.flags|=128,r=!0,a=e.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),qa(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!J)return ve(t),null}else 2*se()-i.renderingStartTime>La&&a!==1073741824&&(t.flags|=128,r=!0,qa(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(a=i.last,a!==null?a.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=se(),t.sibling=null,a=Q.current,q(Q,r?a&1|2:a&1),t):(ve(t),null);case 22:case 23:return Rl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ae&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Ih(e,t){switch(Nl(t),t.tag){case 1:return Me(t.type)&&_s(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pa(),X(De),X(Ne),Dl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tl(t),null;case 13:if(X(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(Q),null;case 4:return Pa(),null;case 10:return kl(t.type._context),null;case 22:case 23:return Rl(),null;case 24:return null;default:return null}}var ns=!1,xe=!1,Rh=typeof WeakSet=="function"?WeakSet:Set,M=null;function ba(e,t){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(r){re(e,t,r)}else a.current=null}function Oi(e,t,a){try{a()}catch(r){re(e,t,r)}}var Xo=!1;function Uh(e,t){if(yi=Es,e=Rc(),vl(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var l=0,o=-1,d=-1,c=0,m=0,u=e,g=null;t:for(;;){for(var x;u!==a||s!==0&&u.nodeType!==3||(o=l+s),u!==i||r!==0&&u.nodeType!==3||(d=l+r),u.nodeType===3&&(l+=u.nodeValue.length),(x=u.firstChild)!==null;)g=u,u=x;for(;;){if(u===e)break t;if(g===a&&++c===s&&(o=l),g===i&&++m===r&&(d=l),(x=u.nextSibling)!==null)break;u=g,g=u.parentNode}u=x}a=o===-1||d===-1?null:{start:o,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(bi={focusedElem:e,selectionRange:a},Es=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,w=v.memoizedState,f=t.stateNode,p=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:He(t.type,y),w);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(b){re(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return v=Xo,Xo=!1,v}function or(e,t,a){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&Oi(t,a,i)}s=s.next}while(s!==r)}}function dn(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var r=a.create;a.destroy=r()}a=a.next}while(a!==t)}}function Ii(e){var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof t=="function"?t(e):t.current=e}}function Lm(e){var t=e.alternate;t!==null&&(e.alternate=null,Lm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[kr],delete t[Si],delete t[wh],delete t[kh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bm(e){return e.tag===5||e.tag===3||e.tag===4}function Jo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ri(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ps));else if(r!==4&&(e=e.child,e!==null))for(Ri(e,t,a),e=e.sibling;e!==null;)Ri(e,t,a),e=e.sibling}function Ui(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ui(e,t,a),e=e.sibling;e!==null;)Ui(e,t,a),e=e.sibling}var ue=null,Ve=!1;function wt(e,t,a){for(a=a.child;a!==null;)Om(e,t,a),a=a.sibling}function Om(e,t,a){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(en,a)}catch{}switch(a.tag){case 5:xe||ba(a,t);case 6:var r=ue,s=Ve;ue=null,wt(e,t,a),ue=r,Ve=s,ue!==null&&(Ve?(e=ue,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):ue.removeChild(a.stateNode));break;case 18:ue!==null&&(Ve?(e=ue,a=a.stateNode,e.nodeType===8?Bn(e.parentNode,a):e.nodeType===1&&Bn(e,a),xr(e)):Bn(ue,a.stateNode));break;case 4:r=ue,s=Ve,ue=a.stateNode.containerInfo,Ve=!0,wt(e,t,a),ue=r,Ve=s;break;case 0:case 11:case 14:case 15:if(!xe&&(r=a.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Oi(a,t,l),s=s.next}while(s!==r)}wt(e,t,a);break;case 1:if(!xe&&(ba(a,t),r=a.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=a.memoizedProps,r.state=a.memoizedState,r.componentWillUnmount()}catch(o){re(a,t,o)}wt(e,t,a);break;case 21:wt(e,t,a);break;case 22:a.mode&1?(xe=(r=xe)||a.memoizedState!==null,wt(e,t,a),xe=r):wt(e,t,a);break;default:wt(e,t,a)}}function Qo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new Rh),t.forEach(function(r){var s=Yh.bind(null,e,r);a.has(r)||(a.add(r),r.then(s,s))})}}function ze(e,t){var a=t.deletions;if(a!==null)for(var r=0;r<a.length;r++){var s=a[r];try{var i=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:ue=o.stateNode,Ve=!1;break e;case 3:ue=o.stateNode.containerInfo,Ve=!0;break e;case 4:ue=o.stateNode.containerInfo,Ve=!0;break e}o=o.return}if(ue===null)throw Error(k(160));Om(i,l,s),ue=null,Ve=!1;var d=s.alternate;d!==null&&(d.return=null),s.return=null}catch(c){re(s,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Im(t,e),t=t.sibling}function Im(e,t){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),at(e),r&4){try{or(3,e,e.return),dn(3,e)}catch(y){re(e,e.return,y)}try{or(5,e,e.return)}catch(y){re(e,e.return,y)}}break;case 1:ze(t,e),at(e),r&512&&a!==null&&ba(a,a.return);break;case 5:if(ze(t,e),at(e),r&512&&a!==null&&ba(a,a.return),e.flags&32){var s=e.stateNode;try{hr(s,"")}catch(y){re(e,e.return,y)}}if(r&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,l=a!==null?a.memoizedProps:i,o=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&ic(s,i),ci(o,l);var c=ci(o,i);for(l=0;l<d.length;l+=2){var m=d[l],u=d[l+1];m==="style"?mc(s,u):m==="dangerouslySetInnerHTML"?dc(s,u):m==="children"?hr(s,u):sl(s,m,u,c)}switch(o){case"input":ni(s,i);break;case"textarea":lc(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?ka(s,!!i.multiple,x,!1):g!==!!i.multiple&&(i.defaultValue!=null?ka(s,!!i.multiple,i.defaultValue,!0):ka(s,!!i.multiple,i.multiple?[]:"",!1))}s[kr]=i}catch(y){re(e,e.return,y)}}break;case 6:if(ze(t,e),at(e),r&4){if(e.stateNode===null)throw Error(k(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(y){re(e,e.return,y)}}break;case 3:if(ze(t,e),at(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{xr(t.containerInfo)}catch(y){re(e,e.return,y)}break;case 4:ze(t,e),at(e);break;case 13:ze(t,e),at(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Ol=se())),r&4&&Qo(e);break;case 22:if(m=a!==null&&a.memoizedState!==null,e.mode&1?(xe=(c=xe)||m,ze(t,e),xe=c):ze(t,e),at(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(M=e,m=e.child;m!==null;){for(u=M=m;M!==null;){switch(g=M,x=g.child,g.tag){case 0:case 11:case 14:case 15:or(4,g,g.return);break;case 1:ba(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,a=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){re(r,a,y)}}break;case 5:ba(g,g.return);break;case 22:if(g.memoizedState!==null){ed(u);continue}}x!==null?(x.return=g,M=x):ed(u)}m=m.sibling}e:for(m=null,u=e;;){if(u.tag===5){if(m===null){m=u;try{s=u.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=u.stateNode,d=u.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,o.style.display=cc("display",l))}catch(y){re(e,e.return,y)}}}else if(u.tag===6){if(m===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(y){re(e,e.return,y)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;m===u&&(m=null),u=u.return}m===u&&(m=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:ze(t,e),at(e),r&4&&Qo(e);break;case 21:break;default:ze(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{e:{for(var a=e.return;a!==null;){if(Bm(a)){var r=a;break e}a=a.return}throw Error(k(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(hr(s,""),r.flags&=-33);var i=Jo(e);Ui(e,i,s);break;case 3:case 4:var l=r.stateNode.containerInfo,o=Jo(e);Ri(e,o,l);break;default:throw Error(k(161))}}catch(d){re(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kh(e,t,a){M=e,Rm(e)}function Rm(e,t,a){for(var r=(e.mode&1)!==0;M!==null;){var s=M,i=s.child;if(s.tag===22&&r){var l=s.memoizedState!==null||ns;if(!l){var o=s.alternate,d=o!==null&&o.memoizedState!==null||xe;o=ns;var c=xe;if(ns=l,(xe=d)&&!c)for(M=s;M!==null;)l=M,d=l.child,l.tag===22&&l.memoizedState!==null?td(s):d!==null?(d.return=l,M=d):td(s);for(;i!==null;)M=i,Rm(i),i=i.sibling;M=s,ns=o,xe=c}Zo(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,M=i):Zo(e)}}function Zo(e){for(;M!==null;){var t=M;if(t.flags&8772){var a=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||dn(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(a===null)r.componentDidMount();else{var s=t.elementType===t.type?a.memoizedProps:He(t.type,a.memoizedProps);r.componentDidUpdate(s,a.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Oo(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(a=null,t.child!==null)switch(t.child.tag){case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}Oo(t,l,a)}break;case 5:var o=t.stateNode;if(a===null&&t.flags&4){a=o;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&a.focus();break;case"img":d.src&&(a.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var u=m.dehydrated;u!==null&&xr(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}xe||t.flags&512&&Ii(t)}catch(g){re(t,t.return,g)}}if(t===e){M=null;break}if(a=t.sibling,a!==null){a.return=t.return,M=a;break}M=t.return}}function ed(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}function td(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var a=t.return;try{dn(4,t)}catch(d){re(t,a,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(d){re(t,s,d)}}var i=t.return;try{Ii(t)}catch(d){re(t,i,d)}break;case 5:var l=t.return;try{Ii(t)}catch(d){re(t,l,d)}}}catch(d){re(t,t.return,d)}if(t===e){M=null;break}var o=t.sibling;if(o!==null){o.return=t.return,M=o;break}M=t.return}}var $h=Math.ceil,Hs=yt.ReactCurrentDispatcher,Ll=yt.ReactCurrentOwner,Ue=yt.ReactCurrentBatchConfig,V=0,me=null,ne=null,pe=0,Ae=0,wa=Ut(0),de=0,Mr=null,ea=0,cn=0,Bl=0,dr=null,Ce=null,Ol=0,La=1/0,dt=null,Vs=!1,Ki=null,_t=null,is=!1,Dt=null,Gs=0,cr=0,$i=null,Ns=-1,ys=0;function we(){return V&6?se():Ns!==-1?Ns:Ns=se()}function Lt(e){return e.mode&1?V&2&&pe!==0?pe&-pe:jh.transition!==null?(ys===0&&(ys=kc()),ys):(e=G,e!==0||(e=window.event,e=e===void 0?16:Ec(e.type)),e):1}function qe(e,t,a,r){if(50<cr)throw cr=0,$i=null,Error(k(185));_r(e,a,r),(!(V&2)||e!==me)&&(e===me&&(!(V&2)&&(cn|=a),de===4&&Ct(e,pe)),Ee(e,r),a===1&&V===0&&!(t.mode&1)&&(La=se()+500,nn&&Kt()))}function Ee(e,t){var a=e.callbackNode;jp(e,t);var r=Ms(e,e===me?pe:0);if(r===0)a!==null&&co(a),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(a!=null&&co(a),t===1)e.tag===0?Sh(ad.bind(null,e)):Yc(ad.bind(null,e)),yh(function(){!(V&6)&&Kt()}),a=null;else{switch(Sc(r)){case 1:a=dl;break;case 4:a=bc;break;case 16:a=Ds;break;case 536870912:a=wc;break;default:a=Ds}a=Wm(a,Um.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function Um(e,t){if(Ns=-1,ys=0,V&6)throw Error(k(327));var a=e.callbackNode;if(Da()&&e.callbackNode!==a)return null;var r=Ms(e,e===me?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ws(e,r);else{t=r;var s=V;V|=2;var i=$m();(me!==e||pe!==t)&&(dt=null,La=se()+500,Yt(e,t));do try{Vh();break}catch(o){Km(e,o)}while(1);wl(),Hs.current=i,V=s,ne!==null?t=0:(me=null,pe=0,t=de)}if(t!==0){if(t===2&&(s=fi(e),s!==0&&(r=s,t=zi(e,s))),t===1)throw a=Mr,Yt(e,0),Ct(e,r),Ee(e,se()),a;if(t===6)Ct(e,r);else{if(s=e.current.alternate,!(r&30)&&!zh(s)&&(t=Ws(e,r),t===2&&(i=fi(e),i!==0&&(r=i,t=zi(e,i))),t===1))throw a=Mr,Yt(e,0),Ct(e,r),Ee(e,se()),a;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Vt(e,Ce,dt);break;case 3:if(Ct(e,r),(r&130023424)===r&&(t=Ol+500-se(),10<t)){if(Ms(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=ki(Vt.bind(null,e,Ce,dt),t);break}Vt(e,Ce,dt);break;case 4:if(Ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var l=31-We(r);i=1<<l,l=t[l],l>s&&(s=l),r&=~i}if(r=s,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$h(r/1960))-r,10<r){e.timeoutHandle=ki(Vt.bind(null,e,Ce,dt),r);break}Vt(e,Ce,dt);break;case 5:Vt(e,Ce,dt);break;default:throw Error(k(329))}}}return Ee(e,se()),e.callbackNode===a?Um.bind(null,e):null}function zi(e,t){var a=dr;return e.current.memoizedState.isDehydrated&&(Yt(e,t).flags|=256),e=Ws(e,t),e!==2&&(t=Ce,Ce=a,t!==null&&Hi(t)),e}function Hi(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function zh(e){for(var t=e;;){if(t.flags&16384){var a=t.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var r=0;r<a.length;r++){var s=a[r],i=s.getSnapshot;s=s.value;try{if(!Ye(i(),s))return!1}catch{return!1}}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ct(e,t){for(t&=~Bl,t&=~cn,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var a=31-We(t),r=1<<a;e[a]=-1,t&=~r}}function ad(e){if(V&6)throw Error(k(327));Da();var t=Ms(e,0);if(!(t&1))return Ee(e,se()),null;var a=Ws(e,t);if(e.tag!==0&&a===2){var r=fi(e);r!==0&&(t=r,a=zi(e,r))}if(a===1)throw a=Mr,Yt(e,0),Ct(e,t),Ee(e,se()),a;if(a===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vt(e,Ce,dt),Ee(e,se()),null}function Il(e,t){var a=V;V|=1;try{return e(t)}finally{V=a,V===0&&(La=se()+500,nn&&Kt())}}function ta(e){Dt!==null&&Dt.tag===0&&!(V&6)&&Da();var t=V;V|=1;var a=Ue.transition,r=G;try{if(Ue.transition=null,G=1,e)return e()}finally{G=r,Ue.transition=a,V=t,!(V&6)&&Kt()}}function Rl(){Ae=wa.current,X(wa)}function Yt(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,Nh(a)),ne!==null)for(a=ne.return;a!==null;){var r=a;switch(Nl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_s();break;case 3:Pa(),X(De),X(Ne),Dl();break;case 5:Tl(r);break;case 4:Pa();break;case 13:X(Q);break;case 19:X(Q);break;case 10:kl(r.type._context);break;case 22:case 23:Rl()}a=a.return}if(me=e,ne=e=Bt(e.current,null),pe=Ae=t,de=0,Mr=null,Bl=cn=ea=0,Ce=dr=null,Wt!==null){for(t=0;t<Wt.length;t++)if(a=Wt[t],r=a.interleaved,r!==null){a.interleaved=null;var s=r.next,i=a.pending;if(i!==null){var l=i.next;i.next=s,r.next=l}a.pending=r}Wt=null}return e}function Km(e,t){do{var a=ne;try{if(wl(),gs.current=zs,$s){for(var r=Z.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}$s=!1}if(Zt=0,ce=oe=Z=null,lr=!1,Cr=0,Ll.current=null,a===null||a.return===null){de=1,Mr=t,ne=null;break}e:{var i=e,l=a.return,o=a,d=t;if(t=pe,o.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,m=o,u=m.tag;if(!(m.mode&1)&&(u===0||u===11||u===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=zo(l);if(x!==null){x.flags&=-257,Ho(x,l,o,i,t),x.mode&1&&$o(i,c,t),t=x,d=c;var v=t.updateQueue;if(v===null){var y=new Set;y.add(d),t.updateQueue=y}else v.add(d);break e}else{if(!(t&1)){$o(i,c,t),Ul();break e}d=Error(k(426))}}else if(J&&o.mode&1){var w=zo(l);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Ho(w,l,o,i,t),yl(_a(d,o));break e}}i=d=_a(d,o),de!==4&&(de=2),dr===null?dr=[i]:dr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Sm(i,d,t);Bo(i,f);break e;case 1:o=d;var p=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(_t===null||!_t.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var b=jm(i,o,t);Bo(i,b);break e}}i=i.return}while(i!==null)}Hm(a)}catch(S){t=S,ne===a&&a!==null&&(ne=a=a.return);continue}break}while(1)}function $m(){var e=Hs.current;return Hs.current=zs,e===null?zs:e}function Ul(){(de===0||de===3||de===2)&&(de=4),me===null||!(ea&268435455)&&!(cn&268435455)||Ct(me,pe)}function Ws(e,t){var a=V;V|=2;var r=$m();(me!==e||pe!==t)&&(dt=null,Yt(e,t));do try{Hh();break}catch(s){Km(e,s)}while(1);if(wl(),V=a,Hs.current=r,ne!==null)throw Error(k(261));return me=null,pe=0,de}function Hh(){for(;ne!==null;)zm(ne)}function Vh(){for(;ne!==null&&!gp();)zm(ne)}function zm(e){var t=Gm(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,t===null?Hm(e):ne=t,Ll.current=null}function Hm(e){var t=e;do{var a=t.alternate;if(e=t.return,t.flags&32768){if(a=Ih(a,t),a!==null){a.flags&=32767,ne=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,ne=null;return}}else if(a=Oh(a,t,Ae),a!==null){ne=a;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);de===0&&(de=5)}function Vt(e,t,a){var r=G,s=Ue.transition;try{Ue.transition=null,G=1,Gh(e,t,a,r)}finally{Ue.transition=s,G=r}return null}function Gh(e,t,a,r){do Da();while(Dt!==null);if(V&6)throw Error(k(327));a=e.finishedWork;var s=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=a.lanes|a.childLanes;if(Cp(e,i),e===me&&(ne=me=null,pe=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||is||(is=!0,Wm(Ds,function(){return Da(),null})),i=(a.flags&15990)!==0,a.subtreeFlags&15990||i){i=Ue.transition,Ue.transition=null;var l=G;G=1;var o=V;V|=4,Ll.current=null,Uh(e,a),Im(a,e),uh(bi),Es=!!yi,bi=yi=null,e.current=a,Kh(a),vp(),V=o,G=l,Ue.transition=i}else e.current=a;if(is&&(is=!1,Dt=e,Gs=s),i=e.pendingLanes,i===0&&(_t=null),yp(a.stateNode),Ee(e,se()),t!==null)for(r=e.onRecoverableError,a=0;a<t.length;a++)s=t[a],r(s.value,{componentStack:s.stack,digest:s.digest});if(Vs)throw Vs=!1,e=Ki,Ki=null,e;return Gs&1&&e.tag!==0&&Da(),i=e.pendingLanes,i&1?e===$i?cr++:(cr=0,$i=e):cr=0,Kt(),null}function Da(){if(Dt!==null){var e=Sc(Gs),t=Ue.transition,a=G;try{if(Ue.transition=null,G=16>e?16:e,Dt===null)var r=!1;else{if(e=Dt,Dt=null,Gs=0,V&6)throw Error(k(331));var s=V;for(V|=4,M=e.current;M!==null;){var i=M,l=i.child;if(M.flags&16){var o=i.deletions;if(o!==null){for(var d=0;d<o.length;d++){var c=o[d];for(M=c;M!==null;){var m=M;switch(m.tag){case 0:case 11:case 15:or(8,m,i)}var u=m.child;if(u!==null)u.return=m,M=u;else for(;M!==null;){m=M;var g=m.sibling,x=m.return;if(Lm(m),m===c){M=null;break}if(g!==null){g.return=x,M=g;break}M=x}}}var v=i.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}M=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,M=l;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:or(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,M=f;break e}M=i.return}}var p=e.current;for(M=p;M!==null;){l=M;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,M=h;else e:for(l=p;M!==null;){if(o=M,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:dn(9,o)}}catch(S){re(o,o.return,S)}if(o===l){M=null;break e}var b=o.sibling;if(b!==null){b.return=o.return,M=b;break e}M=o.return}}if(V=s,Kt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(en,e)}catch{}r=!0}return r}finally{G=a,Ue.transition=t}}return!1}function rd(e,t,a){t=_a(a,t),t=Sm(e,t,1),e=Pt(e,t,1),t=we(),e!==null&&(_r(e,1,t),Ee(e,t))}function re(e,t,a){if(e.tag===3)rd(e,e,a);else for(;t!==null;){if(t.tag===3){rd(t,e,a);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_t===null||!_t.has(r))){e=_a(a,e),e=jm(t,e,1),t=Pt(t,e,1),e=we(),t!==null&&(_r(t,1,e),Ee(t,e));break}}t=t.return}}function Wh(e,t,a){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&a,me===e&&(pe&a)===a&&(de===4||de===3&&(pe&130023424)===pe&&500>se()-Ol?Yt(e,0):Bl|=a),Ee(e,t)}function Vm(e,t){t===0&&(e.mode&1?(t=Xr,Xr<<=1,!(Xr&130023424)&&(Xr=4194304)):t=1);var a=we();e=vt(e,t),e!==null&&(_r(e,t,a),Ee(e,a))}function qh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Vm(e,a)}function Yh(e,t){var a=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(a=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Vm(e,a)}var Gm;Gm=function(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Te=!0;else{if(!(e.lanes&a)&&!(t.flags&128))return Te=!1,Bh(e,t,a);Te=!!(e.flags&131072)}else Te=!1,J&&t.flags&1048576&&Xc(t,Os,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xs(e,t),e=t.pendingProps;var s=Ea(t,Ne.current);Ta(t,a),s=El(null,t,r,e,s,a);var i=Al();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(i=!0,Ls(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,jl(t),s.updater=on,t.stateNode=s,s._reactInternals=t,Ei(t,r,e,a),t=Pi(null,t,r,!0,i,a)):(t.tag=0,J&&i&&xl(t),be(null,t,s,a),t=t.child),t;case 16:r=t.elementType;e:{switch(xs(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=Jh(r),e=He(r,e),s){case 0:t=Fi(null,t,r,e,a);break e;case 1:t=Wo(null,t,r,e,a);break e;case 11:t=Vo(null,t,r,e,a);break e;case 14:t=Go(null,t,r,He(r.type,e),a);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:He(r,s),Fi(e,t,r,s,a);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:He(r,s),Wo(e,t,r,s,a);case 3:e:{if(Mm(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,s=i.element,am(e,t),Us(t,r,null,a);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=_a(Error(k(423)),t),t=qo(e,t,r,a,s);break e}else if(r!==s){s=_a(Error(k(424)),t),t=qo(e,t,r,a,s);break e}else for(Fe=Ft(t.stateNode.containerInfo.firstChild),Pe=t,J=!0,Ge=null,a=em(t,null,r,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Aa(),r===s){t=xt(e,t,a);break e}be(e,t,r,a)}t=t.child}return t;case 5:return rm(t),e===null&&Ti(t),r=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,l=s.children,wi(r,s)?l=null:i!==null&&wi(r,i)&&(t.flags|=32),Dm(e,t),be(e,t,l,a),t.child;case 6:return e===null&&Ti(t),null;case 13:return Em(e,t,a);case 4:return Cl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fa(t,null,r,a):be(e,t,r,a),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:He(r,s),Vo(e,t,r,s,a);case 7:return be(e,t,t.pendingProps,a),t.child;case 8:return be(e,t,t.pendingProps.children,a),t.child;case 12:return be(e,t,t.pendingProps.children,a),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,i=t.memoizedProps,l=s.value,q(Is,r._currentValue),r._currentValue=l,i!==null)if(Ye(i.value,l)){if(i.children===s.children&&!De.current){t=xt(e,t,a);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){l=i.child;for(var d=o.firstContext;d!==null;){if(d.context===r){if(i.tag===1){d=pt(-1,a&-a),d.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?d.next=d:(d.next=m.next,m.next=d),c.pending=d}}i.lanes|=a,d=i.alternate,d!==null&&(d.lanes|=a),Di(i.return,a,t),o.lanes|=a;break}d=d.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=a,o=l.alternate,o!==null&&(o.lanes|=a),Di(l,a,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}be(e,t,s.children,a),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Ta(t,a),s=Ke(s),r=r(s),t.flags|=1,be(e,t,r,a),t.child;case 14:return r=t.type,s=He(r,t.pendingProps),s=He(r.type,s),Go(e,t,r,s,a);case 15:return Cm(e,t,t.type,t.pendingProps,a);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:He(r,s),xs(e,t),t.tag=1,Me(r)?(e=!0,Ls(t)):e=!1,Ta(t,a),km(t,r,s),Ei(t,r,s,a),Pi(null,t,r,!0,e,a);case 19:return Am(e,t,a);case 22:return Tm(e,t,a)}throw Error(k(156,t.tag))};function Wm(e,t){return yc(e,t)}function Xh(e,t,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,a,r){return new Xh(e,t,a,r)}function Kl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jh(e){if(typeof e=="function")return Kl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===il)return 11;if(e===ll)return 14}return 2}function Bt(e,t){var a=e.alternate;return a===null?(a=Re(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function bs(e,t,a,r,s,i){var l=2;if(r=e,typeof e=="function")Kl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ua:return Xt(a.children,s,i,t);case nl:l=8,s|=8;break;case ei:return e=Re(12,a,t,s|2),e.elementType=ei,e.lanes=i,e;case ti:return e=Re(13,a,t,s),e.elementType=ti,e.lanes=i,e;case ai:return e=Re(19,a,t,s),e.elementType=ai,e.lanes=i,e;case rc:return mn(a,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tc:l=10;break e;case ac:l=9;break e;case il:l=11;break e;case ll:l=14;break e;case kt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Re(l,a,t,s),t.elementType=e,t.type=r,t.lanes=i,t}function Xt(e,t,a,r){return e=Re(7,e,r,t),e.lanes=a,e}function mn(e,t,a,r){return e=Re(22,e,r,t),e.elementType=rc,e.lanes=a,e.stateNode={isHidden:!1},e}function Hn(e,t,a){return e=Re(6,e,null,t),e.lanes=a,e}function Vn(e,t,a){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qh(e,t,a,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jn(0),this.expirationTimes=jn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jn(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function $l(e,t,a,r,s,i,l,o,d){return e=new Qh(e,t,a,o,d),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Re(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},jl(i),e}function Zh(e,t,a){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ma,key:r==null?null:""+r,children:e,containerInfo:t,implementation:a}}function qm(e){if(!e)return It;e=e._reactInternals;e:{if(sa(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var a=e.type;if(Me(a))return qc(e,a,t)}return t}function Ym(e,t,a,r,s,i,l,o,d){return e=$l(a,r,!0,e,s,i,l,o,d),e.context=qm(null),a=e.current,r=we(),s=Lt(a),i=pt(r,s),i.callback=t??null,Pt(a,i,s),e.current.lanes=s,_r(e,s,r),Ee(e,r),e}function un(e,t,a,r){var s=t.current,i=we(),l=Lt(s);return a=qm(a),t.context===null?t.context=a:t.pendingContext=a,t=pt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pt(s,t,l),e!==null&&(qe(e,s,l,i),fs(e,s,l)),l}function qs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function zl(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function ef(){return null}var Xm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hl(e){this._internalRoot=e}pn.prototype.render=Hl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));un(e,t,null,null)};pn.prototype.unmount=Hl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ta(function(){un(null,e,null,null)}),t[gt]=null}};function pn(e){this._internalRoot=e}pn.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<jt.length&&t!==0&&t<jt[a].priority;a++);jt.splice(a,0,e),a===0&&Mc(e)}};function Vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hn(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nd(){}function tf(e,t,a,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=qs(l);i.call(c)}}var l=Ym(t,r,e,0,null,!1,!1,"",nd);return e._reactRootContainer=l,e[gt]=l.current,br(e.nodeType===8?e.parentNode:e),ta(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var o=r;r=function(){var c=qs(d);o.call(c)}}var d=$l(e,0,!1,null,null,!1,!1,"",nd);return e._reactRootContainer=d,e[gt]=d.current,br(e.nodeType===8?e.parentNode:e),ta(function(){un(t,d,a,r)}),d}function fn(e,t,a,r,s){var i=a._reactRootContainer;if(i){var l=i;if(typeof s=="function"){var o=s;s=function(){var d=qs(l);o.call(d)}}un(t,l,e,s)}else l=tf(a,t,e,s,r);return qs(l)}jc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var a=er(t.pendingLanes);a!==0&&(cl(t,a|1),Ee(t,se()),!(V&6)&&(La=se()+500,Kt()))}break;case 13:ta(function(){var r=vt(e,1);if(r!==null){var s=we();qe(r,e,1,s)}}),zl(e,1)}};ml=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var a=we();qe(t,e,134217728,a)}zl(e,134217728)}};Cc=function(e){if(e.tag===13){var t=Lt(e),a=vt(e,t);if(a!==null){var r=we();qe(a,e,t,r)}zl(e,t)}};Tc=function(){return G};Dc=function(e,t){var a=G;try{return G=e,t()}finally{G=a}};ui=function(e,t,a){switch(t){case"input":if(ni(e,a),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<a.length;t++){var r=a[t];if(r!==e&&r.form===e.form){var s=sn(r);if(!s)throw Error(k(90));nc(r),ni(r,s)}}}break;case"textarea":lc(e,a);break;case"select":t=a.value,t!=null&&ka(e,!!a.multiple,t,!1)}};hc=Il;fc=ta;var af={usingClientEntryPoint:!1,Events:[Br,ga,sn,uc,pc,Il]},Ya={findFiberByHostInstance:Gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rf={bundleType:Ya.bundleType,version:Ya.version,rendererPackageName:Ya.rendererPackageName,rendererConfig:Ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xc(e),e===null?null:e.stateNode},findFiberByHostInstance:Ya.findFiberByHostInstance||ef,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{en=ls.inject(rf),it=ls}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=af;Le.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vl(t))throw Error(k(200));return Zh(e,t,null,a)};Le.createRoot=function(e,t){if(!Vl(e))throw Error(k(299));var a=!1,r="",s=Xm;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=$l(e,1,!1,null,null,a,!1,r,s),e[gt]=t.current,br(e.nodeType===8?e.parentNode:e),new Hl(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=xc(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return ta(e)};Le.hydrate=function(e,t,a){if(!hn(t))throw Error(k(200));return fn(null,e,t,!0,a)};Le.hydrateRoot=function(e,t,a){if(!Vl(e))throw Error(k(405));var r=a!=null&&a.hydratedSources||null,s=!1,i="",l=Xm;if(a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(l=a.onRecoverableError)),t=Ym(t,null,e,1,a??null,s,!1,i,l),e[gt]=t.current,br(e),r)for(e=0;e<r.length;e++)a=r[e],s=a._getVersion,s=s(a._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[a,s]:t.mutableSourceEagerHydrationData.push(a,s);return new pn(t)};Le.render=function(e,t,a){if(!hn(t))throw Error(k(200));return fn(null,e,t,!1,a)};Le.unmountComponentAtNode=function(e){if(!hn(e))throw Error(k(40));return e._reactRootContainer?(ta(function(){fn(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Le.unstable_batchedUpdates=Il;Le.unstable_renderSubtreeIntoContainer=function(e,t,a,r){if(!hn(a))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return fn(e,t,a,!1,r)};Le.version="18.3.1-next-f1338f8080-20240426";function Jm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jm)}catch(e){console.error(e)}}Jm(),Jd.exports=Le;var sf=Jd.exports,id=sf;Qn.createRoot=id.createRoot,Qn.hydrateRoot=id.hydrateRoot;const nf="modulepreload",lf=function(e){return"/"+e},ld={},of=function(t,a,r){if(!a||a.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(a.map(i=>{if(i=lf(i),i in ld)return;ld[i]=!0;const l=i.endsWith(".css"),o=l?'[rel="stylesheet"]':"";if(!!r)for(let m=s.length-1;m>=0;m--){const u=s[m];if(u.href===i&&(!l||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${o}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":nf,l||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),l)return new Promise((m,u)=>{c.addEventListener("load",m),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i})};var od="popstate";function df(e={}){function t(r,s){let{pathname:i,search:l,hash:o}=r.location;return Vi("",{pathname:i,search:l,hash:o},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function a(r,s){return typeof s=="string"?s:Er(s)}return mf(t,a,null,e)}function ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xe(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cf(){return Math.random().toString(36).substring(2,10)}function dd(e,t){return{usr:e.state,key:e.key,idx:t}}function Vi(e,t,a=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ua(t):t,state:a,key:t&&t.key||r||cf()}}function Er({pathname:e="/",search:t="",hash:a=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function Ua(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substring(a),e=e.substring(0,a));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function mf(e,t,a,r={}){let{window:s=document.defaultView,v5Compat:i=!1}=r,l=s.history,o="POP",d=null,c=m();c==null&&(c=0,l.replaceState({...l.state,idx:c},""));function m(){return(l.state||{idx:null}).idx}function u(){o="POP";let w=m(),f=w==null?null:w-c;c=w,d&&d({action:o,location:y.location,delta:f})}function g(w,f){o="PUSH";let p=Vi(y.location,w,f);a&&a(p,w),c=m()+1;let h=dd(p,c),b=y.createHref(p);try{l.pushState(h,"",b)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;s.location.assign(b)}i&&d&&d({action:o,location:y.location,delta:1})}function x(w,f){o="REPLACE";let p=Vi(y.location,w,f);a&&a(p,w),c=m();let h=dd(p,c),b=y.createHref(p);l.replaceState(h,"",b),i&&d&&d({action:o,location:y.location,delta:0})}function v(w){return uf(w)}let y={get action(){return o},get location(){return e(s,l)},listen(w){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(od,u),d=w,()=>{s.removeEventListener(od,u),d=null}},createHref(w){return t(s,w)},createURL:v,encodeLocation(w){let f=v(w);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:x,go(w){return l.go(w)}};return y}function uf(e,t=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),ee(a,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Er(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=a+r),new URL(r,a)}function Qm(e,t,a="/"){return pf(e,t,a,!1)}function pf(e,t,a,r){let s=typeof t=="string"?Ua(t):t,i=Nt(s.pathname||"/",a);if(i==null)return null;let l=Zm(e);hf(l);let o=null;for(let d=0;o==null&&d<l.length;++d){let c=jf(i);o=kf(l[d],c,r)}return o}function Zm(e,t=[],a=[],r="",s=!1){let i=(l,o,d=s,c)=>{let m={relativePath:c===void 0?l.path||"":c,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(r)&&d)return;ee(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length)}let u=ht([r,m.relativePath]),g=a.concat(m);l.children&&l.children.length>0&&(ee(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),Zm(l.children,t,g,u,d)),!(l.path==null&&!l.index)&&t.push({path:u,score:bf(u,l.index),routesMeta:g})};return e.forEach((l,o)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))i(l,o);else for(let c of eu(l.path))i(l,o,!0,c)}),t}function eu(e){let t=e.split("/");if(t.length===0)return[];let[a,...r]=t,s=a.endsWith("?"),i=a.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let l=eu(r.join("/")),o=[];return o.push(...l.map(d=>d===""?i:[i,d].join("/"))),s&&o.push(...l),o.map(d=>e.startsWith("/")&&d===""?"/":d)}function hf(e){e.sort((t,a)=>t.score!==a.score?a.score-t.score:wf(t.routesMeta.map(r=>r.childrenIndex),a.routesMeta.map(r=>r.childrenIndex)))}var ff=/^:[\w-]+$/,gf=3,vf=2,xf=1,Nf=10,yf=-2,cd=e=>e==="*";function bf(e,t){let a=e.split("/"),r=a.length;return a.some(cd)&&(r+=yf),t&&(r+=vf),a.filter(s=>!cd(s)).reduce((s,i)=>s+(ff.test(i)?gf:i===""?xf:Nf),r)}function wf(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function kf(e,t,a=!1){let{routesMeta:r}=e,s={},i="/",l=[];for(let o=0;o<r.length;++o){let d=r[o],c=o===r.length-1,m=i==="/"?t:t.slice(i.length)||"/",u=Ys({path:d.relativePath,caseSensitive:d.caseSensitive,end:c},m),g=d.route;if(!u&&c&&a&&!r[r.length-1].route.index&&(u=Ys({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},m)),!u)return null;Object.assign(s,u.params),l.push({params:s,pathname:ht([i,u.pathname]),pathnameBase:Ef(ht([i,u.pathnameBase])),route:g}),u.pathnameBase!=="/"&&(i=ht([i,u.pathnameBase]))}return l}function Ys(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,r]=Sf(e.path,e.caseSensitive,e.end),s=t.match(a);if(!s)return null;let i=s[0],l=i.replace(/(.)\/+$/,"$1"),o=s.slice(1);return{params:r.reduce((c,{paramName:m,isOptional:u},g)=>{if(m==="*"){let v=o[g]||"";l=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const x=o[g];return u&&!x?c[m]=void 0:c[m]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:l,pattern:e}}function Sf(e,t=!1,a=!0){Xe(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,d)=>(r.push({paramName:o,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function jf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Xe(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Nt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,r=e.charAt(a);return r&&r!=="/"?null:e.slice(a)||"/"}var Cf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tf=e=>Cf.test(e);function Df(e,t="/"){let{pathname:a,search:r="",hash:s=""}=typeof e=="string"?Ua(e):e,i;if(a)if(Tf(a))i=a;else{if(a.includes("//")){let l=a;a=a.replace(/\/\/+/g,"/"),Xe(!1,`Pathnames cannot have embedded double slashes - normalizing ${l} -> ${a}`)}a.startsWith("/")?i=md(a.substring(1),"/"):i=md(a,t)}else i=t;return{pathname:i,search:Af(r),hash:Ff(s)}}function md(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?a.length>1&&a.pop():s!=="."&&a.push(s)}),a.length>1?a.join("/"):"/"}function Gn(e,t,a,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Mf(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function tu(e){let t=Mf(e);return t.map((a,r)=>r===t.length-1?a.pathname:a.pathnameBase)}function au(e,t,a,r=!1){let s;typeof e=="string"?s=Ua(e):(s={...e},ee(!s.pathname||!s.pathname.includes("?"),Gn("?","pathname","search",s)),ee(!s.pathname||!s.pathname.includes("#"),Gn("#","pathname","hash",s)),ee(!s.search||!s.search.includes("#"),Gn("#","search","hash",s)));let i=e===""||s.pathname==="",l=i?"/":s.pathname,o;if(l==null)o=a;else{let u=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),u-=1;s.pathname=g.join("/")}o=u>=0?t[u]:"/"}let d=Df(s,o),c=l&&l!=="/"&&l.endsWith("/"),m=(i||l===".")&&a.endsWith("/");return!d.pathname.endsWith("/")&&(c||m)&&(d.pathname+="/"),d}var ht=e=>e.join("/").replace(/\/\/+/g,"/"),Ef=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Af=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ff=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Pf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ru=["POST","PUT","PATCH","DELETE"];new Set(ru);var _f=["GET",...ru];new Set(_f);var Ka=N.createContext(null);Ka.displayName="DataRouter";var gn=N.createContext(null);gn.displayName="DataRouterState";N.createContext(!1);var su=N.createContext({isTransitioning:!1});su.displayName="ViewTransition";var Lf=N.createContext(new Map);Lf.displayName="Fetchers";var Bf=N.createContext(null);Bf.displayName="Await";var ot=N.createContext(null);ot.displayName="Navigation";var Ir=N.createContext(null);Ir.displayName="Location";var bt=N.createContext({outlet:null,matches:[],isDataRoute:!1});bt.displayName="Route";var Gl=N.createContext(null);Gl.displayName="RouteError";function Of(e,{relative:t}={}){ee(Rr(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:r}=N.useContext(ot),{hash:s,pathname:i,search:l}=Ur(e,{relative:t}),o=i;return a!=="/"&&(o=i==="/"?a:ht([a,i])),r.createHref({pathname:o,search:l,hash:s})}function Rr(){return N.useContext(Ir)!=null}function na(){return ee(Rr(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(Ir).location}var nu="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function iu(e){N.useContext(ot).static||N.useLayoutEffect(e)}function If(){let{isDataRoute:e}=N.useContext(bt);return e?Jf():Rf()}function Rf(){ee(Rr(),"useNavigate() may be used only in the context of a <Router> component.");let e=N.useContext(Ka),{basename:t,navigator:a}=N.useContext(ot),{matches:r}=N.useContext(bt),{pathname:s}=na(),i=JSON.stringify(tu(r)),l=N.useRef(!1);return iu(()=>{l.current=!0}),N.useCallback((d,c={})=>{if(Xe(l.current,nu),!l.current)return;if(typeof d=="number"){a.go(d);return}let m=au(d,JSON.parse(i),s,c.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:ht([t,m.pathname])),(c.replace?a.replace:a.push)(m,c.state,c)},[t,a,i,s,e])}N.createContext(null);function Ur(e,{relative:t}={}){let{matches:a}=N.useContext(bt),{pathname:r}=na(),s=JSON.stringify(tu(a));return N.useMemo(()=>au(e,JSON.parse(s),r,t==="path"),[e,s,r,t])}function Uf(e,t){return lu(e,t)}function lu(e,t,a,r,s){var p;ee(Rr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=N.useContext(ot),{matches:l}=N.useContext(bt),o=l[l.length-1],d=o?o.params:{},c=o?o.pathname:"/",m=o?o.pathnameBase:"/",u=o&&o.route;{let h=u&&u.path||"";ou(c,!u||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let g=na(),x;if(t){let h=typeof t=="string"?Ua(t):t;ee(m==="/"||((p=h.pathname)==null?void 0:p.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${h.pathname}" was given in the \`location\` prop.`),x=h}else x=g;let v=x.pathname||"/",y=v;if(m!=="/"){let h=m.replace(/^\//,"").split("/");y="/"+v.replace(/^\//,"").split("/").slice(h.length).join("/")}let w=Qm(e,{pathname:y});Xe(u||w!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Xe(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let f=Vf(w&&w.map(h=>Object.assign({},h,{params:Object.assign({},d,h.params),pathname:ht([m,i.encodeLocation?i.encodeLocation(h.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?m:ht([m,i.encodeLocation?i.encodeLocation(h.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathnameBase])})),l,a,r,s);return t&&f?N.createElement(Ir.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},f):f}function Kf(){let e=Xf(),t=Pf(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:i},"ErrorBoundary")," or"," ",N.createElement("code",{style:i},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),a?N.createElement("pre",{style:s},a):null,l)}var $f=N.createElement(Kf,null),zf=class extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?N.createElement(bt.Provider,{value:this.props.routeContext},N.createElement(Gl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Hf({routeContext:e,match:t,children:a}){let r=N.useContext(Ka);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),N.createElement(bt.Provider,{value:e},a)}function Vf(e,t=[],a=null,r=null,s=null){if(e==null){if(!a)return null;if(a.errors)e=a.matches;else if(t.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let i=e,l=a==null?void 0:a.errors;if(l!=null){let m=i.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id])!==void 0);ee(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),i=i.slice(0,Math.min(i.length,m+1))}let o=!1,d=-1;if(a)for(let m=0;m<i.length;m++){let u=i[m];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(d=m),u.route.id){let{loaderData:g,errors:x}=a,v=u.route.loader&&!g.hasOwnProperty(u.route.id)&&(!x||x[u.route.id]===void 0);if(u.route.lazy||v){o=!0,d>=0?i=i.slice(0,d+1):i=[i[0]];break}}}let c=a&&r?(m,u)=>{var g,x;r(m,{location:a.location,params:((x=(g=a.matches)==null?void 0:g[0])==null?void 0:x.params)??{},errorInfo:u})}:void 0;return i.reduceRight((m,u,g)=>{let x,v=!1,y=null,w=null;a&&(x=l&&u.route.id?l[u.route.id]:void 0,y=u.route.errorElement||$f,o&&(d<0&&g===0?(ou("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,w=null):d===g&&(v=!0,w=u.route.hydrateFallbackElement||null)));let f=t.concat(i.slice(0,g+1)),p=()=>{let h;return x?h=y:v?h=w:u.route.Component?h=N.createElement(u.route.Component,null):u.route.element?h=u.route.element:h=m,N.createElement(Hf,{match:u,routeContext:{outlet:m,matches:f,isDataRoute:a!=null},children:h})};return a&&(u.route.ErrorBoundary||u.route.errorElement||g===0)?N.createElement(zf,{location:a.location,revalidation:a.revalidation,component:y,error:x,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0},onError:c}):p()},null)}function Wl(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gf(e){let t=N.useContext(Ka);return ee(t,Wl(e)),t}function Wf(e){let t=N.useContext(gn);return ee(t,Wl(e)),t}function qf(e){let t=N.useContext(bt);return ee(t,Wl(e)),t}function ql(e){let t=qf(e),a=t.matches[t.matches.length-1];return ee(a.route.id,`${e} can only be used on routes that contain a unique "id"`),a.route.id}function Yf(){return ql("useRouteId")}function Xf(){var r;let e=N.useContext(Gl),t=Wf("useRouteError"),a=ql("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[a]}function Jf(){let{router:e}=Gf("useNavigate"),t=ql("useNavigate"),a=N.useRef(!1);return iu(()=>{a.current=!0}),N.useCallback(async(s,i={})=>{Xe(a.current,nu),a.current&&(typeof s=="number"?e.navigate(s):await e.navigate(s,{fromRouteId:t,...i}))},[e,t])}var ud={};function ou(e,t,a){!t&&!ud[e]&&(ud[e]=!0,Xe(!1,a))}N.memo(Qf);function Qf({routes:e,future:t,state:a,unstable_onError:r}){return lu(e,void 0,a,r,t)}function O(e){ee(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Zf({basename:e="/",children:t=null,location:a,navigationType:r="POP",navigator:s,static:i=!1}){ee(!Rr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),o=N.useMemo(()=>({basename:l,navigator:s,static:i,future:{}}),[l,s,i]);typeof a=="string"&&(a=Ua(a));let{pathname:d="/",search:c="",hash:m="",state:u=null,key:g="default"}=a,x=N.useMemo(()=>{let v=Nt(d,l);return v==null?null:{location:{pathname:v,search:c,hash:m,state:u,key:g},navigationType:r}},[l,d,c,m,u,g,r]);return Xe(x!=null,`<Router basename="${l}"> is not able to match the URL "${d}${c}${m}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:N.createElement(ot.Provider,{value:o},N.createElement(Ir.Provider,{children:t,value:x}))}function eg({children:e,location:t}){return Uf(Gi(e),t)}function Gi(e,t=[]){let a=[];return N.Children.forEach(e,(r,s)=>{if(!N.isValidElement(r))return;let i=[...t,s];if(r.type===N.Fragment){a.push.apply(a,Gi(r.props.children,i));return}ee(r.type===O,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ee(!r.props.index||!r.props.children,"An index route cannot have child routes.");let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Gi(r.props.children,i)),a.push(l)}),a}var ws="get",ks="application/x-www-form-urlencoded";function vn(e){return e!=null&&typeof e.tagName=="string"}function tg(e){return vn(e)&&e.tagName.toLowerCase()==="button"}function ag(e){return vn(e)&&e.tagName.toLowerCase()==="form"}function rg(e){return vn(e)&&e.tagName.toLowerCase()==="input"}function sg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ng(e,t){return e.button===0&&(!t||t==="_self")&&!sg(e)}var os=null;function ig(){if(os===null)try{new FormData(document.createElement("form"),0),os=!1}catch{os=!0}return os}var lg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Wn(e){return e!=null&&!lg.has(e)?(Xe(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ks}"`),null):e}function og(e,t){let a,r,s,i,l;if(ag(e)){let o=e.getAttribute("action");r=o?Nt(o,t):null,a=e.getAttribute("method")||ws,s=Wn(e.getAttribute("enctype"))||ks,i=new FormData(e)}else if(tg(e)||rg(e)&&(e.type==="submit"||e.type==="image")){let o=e.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=e.getAttribute("formaction")||o.getAttribute("action");if(r=d?Nt(d,t):null,a=e.getAttribute("formmethod")||o.getAttribute("method")||ws,s=Wn(e.getAttribute("formenctype"))||Wn(o.getAttribute("enctype"))||ks,i=new FormData(o,e),!ig()){let{name:c,type:m,value:u}=e;if(m==="image"){let g=c?`${c}.`:"";i.append(`${g}x`,"0"),i.append(`${g}y`,"0")}else c&&i.append(c,u)}}else{if(vn(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=ws,r=null,s=ks,l=e}return i&&s==="text/plain"&&(l=i,i=void 0),{action:r,method:a.toLowerCase(),encType:s,formData:i,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Yl(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function dg(e,t,a){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${a}`:t&&Nt(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${a}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${a}`,r}async function cg(e,t){if(e.id in t)return t[e.id];try{let a=await of(()=>import(e.module),[]);return t[e.id]=a,a}catch(a){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function mg(e){return e!=null&&typeof e.page=="string"}function ug(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function pg(e,t,a){let r=await Promise.all(e.map(async s=>{let i=t.routes[s.route.id];if(i){let l=await cg(i,a);return l.links?l.links():[]}return[]}));return vg(r.flat(1).filter(ug).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function pd(e,t,a,r,s,i){let l=(d,c)=>a[c]?d.route.id!==a[c].route.id:!0,o=(d,c)=>{var m;return a[c].pathname!==d.pathname||((m=a[c].route.path)==null?void 0:m.endsWith("*"))&&a[c].params["*"]!==d.params["*"]};return i==="assets"?t.filter((d,c)=>l(d,c)||o(d,c)):i==="data"?t.filter((d,c)=>{var u;let m=r.routes[d.route.id];if(!m||!m.hasLoader)return!1;if(l(d,c)||o(d,c))return!0;if(d.route.shouldRevalidate){let g=d.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((u=a[0])==null?void 0:u.params)||{},nextUrl:new URL(e,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function hg(e,t,{includeHydrateFallback:a}={}){return fg(e.map(r=>{let s=t.routes[r.route.id];if(!s)return[];let i=[s.module];return s.clientActionModule&&(i=i.concat(s.clientActionModule)),s.clientLoaderModule&&(i=i.concat(s.clientLoaderModule)),a&&s.hydrateFallbackModule&&(i=i.concat(s.hydrateFallbackModule)),s.imports&&(i=i.concat(s.imports)),i}).flat(1))}function fg(e){return[...new Set(e)]}function gg(e){let t={},a=Object.keys(e).sort();for(let r of a)t[r]=e[r];return t}function vg(e,t){let a=new Set,r=new Set(t);return e.reduce((s,i)=>{if(t&&!mg(i)&&i.as==="script"&&i.href&&r.has(i.href))return s;let o=JSON.stringify(gg(i));return a.has(o)||(a.add(o),s.push({key:o,link:i})),s},[])}function du(){let e=N.useContext(Ka);return Yl(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function xg(){let e=N.useContext(gn);return Yl(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Xl=N.createContext(void 0);Xl.displayName="FrameworkContext";function cu(){let e=N.useContext(Xl);return Yl(e,"You must render this element inside a <HydratedRouter> element"),e}function Ng(e,t){let a=N.useContext(Xl),[r,s]=N.useState(!1),[i,l]=N.useState(!1),{onFocus:o,onBlur:d,onMouseEnter:c,onMouseLeave:m,onTouchStart:u}=t,g=N.useRef(null);N.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let y=f=>{f.forEach(p=>{l(p.isIntersecting)})},w=new IntersectionObserver(y,{threshold:.5});return g.current&&w.observe(g.current),()=>{w.disconnect()}}},[e]),N.useEffect(()=>{if(r){let y=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(y)}}},[r]);let x=()=>{s(!0)},v=()=>{s(!1),l(!1)};return a?e!=="intent"?[i,g,{}]:[i,g,{onFocus:Xa(o,x),onBlur:Xa(d,v),onMouseEnter:Xa(c,x),onMouseLeave:Xa(m,v),onTouchStart:Xa(u,x)}]:[!1,g,{}]}function Xa(e,t){return a=>{e&&e(a),a.defaultPrevented||t(a)}}function yg({page:e,...t}){let{router:a}=du(),r=N.useMemo(()=>Qm(a.routes,e,a.basename),[a.routes,e,a.basename]);return r?N.createElement(wg,{page:e,matches:r,...t}):null}function bg(e){let{manifest:t,routeModules:a}=cu(),[r,s]=N.useState([]);return N.useEffect(()=>{let i=!1;return pg(e,t,a).then(l=>{i||s(l)}),()=>{i=!0}},[e,t,a]),r}function wg({page:e,matches:t,...a}){let r=na(),{manifest:s,routeModules:i}=cu(),{basename:l}=du(),{loaderData:o,matches:d}=xg(),c=N.useMemo(()=>pd(e,t,d,s,r,"data"),[e,t,d,s,r]),m=N.useMemo(()=>pd(e,t,d,s,r,"assets"),[e,t,d,s,r]),u=N.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,y=!1;if(t.forEach(f=>{var h;let p=s.routes[f.route.id];!p||!p.hasLoader||(!c.some(b=>b.route.id===f.route.id)&&f.route.id in o&&((h=i[f.route.id])!=null&&h.shouldRevalidate)||p.hasClientLoader?y=!0:v.add(f.route.id))}),v.size===0)return[];let w=dg(e,l,"data");return y&&v.size>0&&w.searchParams.set("_routes",t.filter(f=>v.has(f.route.id)).map(f=>f.route.id).join(",")),[w.pathname+w.search]},[l,o,r,s,c,t,e,i]),g=N.useMemo(()=>hg(m,s),[m,s]),x=bg(m);return N.createElement(N.Fragment,null,u.map(v=>N.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...a})),g.map(v=>N.createElement("link",{key:v,rel:"modulepreload",href:v,...a})),x.map(({key:v,link:y})=>N.createElement("link",{key:v,nonce:a.nonce,...y})))}function kg(...e){return t=>{e.forEach(a=>{typeof a=="function"?a(t):a!=null&&(a.current=t)})}}var mu=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{mu&&(window.__reactRouterVersion="7.9.6")}catch{}function Sg({basename:e,children:t,window:a}){let r=N.useRef();r.current==null&&(r.current=df({window:a,v5Compat:!0}));let s=r.current,[i,l]=N.useState({action:s.action,location:s.location}),o=N.useCallback(d=>{N.startTransition(()=>l(d))},[l]);return N.useLayoutEffect(()=>s.listen(o),[s,o]),N.createElement(Zf,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:s})}var uu=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,I=N.forwardRef(function({onClick:t,discover:a="render",prefetch:r="none",relative:s,reloadDocument:i,replace:l,state:o,target:d,to:c,preventScrollReset:m,viewTransition:u,...g},x){let{basename:v}=N.useContext(ot),y=typeof c=="string"&&uu.test(c),w,f=!1;if(typeof c=="string"&&y&&(w=c,mu))try{let A=new URL(window.location.href),E=c.startsWith("//")?new URL(A.protocol+c):new URL(c),ie=Nt(E.pathname,v);E.origin===A.origin&&ie!=null?c=ie+E.search+E.hash:f=!0}catch{Xe(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let p=Of(c,{relative:s}),[h,b,S]=Ng(r,g),T=Dg(c,{replace:l,state:o,target:d,preventScrollReset:m,relative:s,viewTransition:u});function j(A){t&&t(A),A.defaultPrevented||T(A)}let D=N.createElement("a",{...g,...S,href:w||p,onClick:f||i?t:j,ref:kg(x,b),target:d,"data-discover":!y&&a==="render"?"true":void 0});return h&&!y?N.createElement(N.Fragment,null,D,N.createElement(yg,{page:p})):D});I.displayName="Link";var jg=N.forwardRef(function({"aria-current":t="page",caseSensitive:a=!1,className:r="",end:s=!1,style:i,to:l,viewTransition:o,children:d,...c},m){let u=Ur(l,{relative:c.relative}),g=na(),x=N.useContext(gn),{navigator:v,basename:y}=N.useContext(ot),w=x!=null&&Pg(u)&&o===!0,f=v.encodeLocation?v.encodeLocation(u).pathname:u.pathname,p=g.pathname,h=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;a||(p=p.toLowerCase(),h=h?h.toLowerCase():null,f=f.toLowerCase()),h&&y&&(h=Nt(h,y)||h);const b=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let S=p===f||!s&&p.startsWith(f)&&p.charAt(b)==="/",T=h!=null&&(h===f||!s&&h.startsWith(f)&&h.charAt(f.length)==="/"),j={isActive:S,isPending:T,isTransitioning:w},D=S?t:void 0,A;typeof r=="function"?A=r(j):A=[r,S?"active":null,T?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let E=typeof i=="function"?i(j):i;return N.createElement(I,{...c,"aria-current":D,className:A,ref:m,style:E,to:l,viewTransition:o},typeof d=="function"?d(j):d)});jg.displayName="NavLink";var Cg=N.forwardRef(({discover:e="render",fetcherKey:t,navigate:a,reloadDocument:r,replace:s,state:i,method:l=ws,action:o,onSubmit:d,relative:c,preventScrollReset:m,viewTransition:u,...g},x)=>{let v=Ag(),y=Fg(o,{relative:c}),w=l.toLowerCase()==="get"?"get":"post",f=typeof o=="string"&&uu.test(o),p=h=>{if(d&&d(h),h.defaultPrevented)return;h.preventDefault();let b=h.nativeEvent.submitter,S=(b==null?void 0:b.getAttribute("formmethod"))||l;v(b||h.currentTarget,{fetcherKey:t,method:S,navigate:a,replace:s,state:i,relative:c,preventScrollReset:m,viewTransition:u})};return N.createElement("form",{ref:x,method:w,action:y,onSubmit:r?d:p,...g,"data-discover":!f&&e==="render"?"true":void 0})});Cg.displayName="Form";function Tg(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pu(e){let t=N.useContext(Ka);return ee(t,Tg(e)),t}function Dg(e,{target:t,replace:a,state:r,preventScrollReset:s,relative:i,viewTransition:l}={}){let o=If(),d=na(),c=Ur(e,{relative:i});return N.useCallback(m=>{if(ng(m,t)){m.preventDefault();let u=a!==void 0?a:Er(d)===Er(c);o(e,{replace:u,state:r,preventScrollReset:s,relative:i,viewTransition:l})}},[d,o,c,a,r,t,e,s,i,l])}var Mg=0,Eg=()=>`__${String(++Mg)}__`;function Ag(){let{router:e}=pu("useSubmit"),{basename:t}=N.useContext(ot),a=Yf();return N.useCallback(async(r,s={})=>{let{action:i,method:l,encType:o,formData:d,body:c}=og(r,t);if(s.navigate===!1){let m=s.fetcherKey||Eg();await e.fetch(m,a,s.action||i,{preventScrollReset:s.preventScrollReset,formData:d,body:c,formMethod:s.method||l,formEncType:s.encType||o,flushSync:s.flushSync})}else await e.navigate(s.action||i,{preventScrollReset:s.preventScrollReset,formData:d,body:c,formMethod:s.method||l,formEncType:s.encType||o,replace:s.replace,state:s.state,fromRouteId:a,flushSync:s.flushSync,viewTransition:s.viewTransition})},[e,t,a])}function Fg(e,{relative:t}={}){let{basename:a}=N.useContext(ot),r=N.useContext(bt);ee(r,"useFormAction must be used inside a RouteContext");let[s]=r.matches.slice(-1),i={...Ur(e||".",{relative:t})},l=na();if(e==null){i.search=l.search;let o=new URLSearchParams(i.search),d=o.getAll("index");if(d.some(m=>m==="")){o.delete("index"),d.filter(u=>u).forEach(u=>o.append("index",u));let m=o.toString();i.search=m?`?${m}`:""}}return(!e||e===".")&&s.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(i.pathname=i.pathname==="/"?a:ht([a,i.pathname])),Er(i)}function Pg(e,{relative:t}={}){let a=N.useContext(su);ee(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=pu("useViewTransitionState"),s=Ur(e,{relative:t});if(!a.isTransitioning)return!1;let i=Nt(a.currentLocation.pathname,r)||a.currentLocation.pathname,l=Nt(a.nextLocation.pathname,r)||a.nextLocation.pathname;return Ys(s.pathname,l)!=null||Ys(s.pathname,i)!=null}/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lg=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,r)=>r?r.toUpperCase():a.toLowerCase()),hd=e=>{const t=Lg(e);return t.charAt(0).toUpperCase()+t.slice(1)},hu=(...e)=>e.filter((t,a,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===a).join(" ").trim(),Bg=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Og={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=N.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:l,...o},d)=>N.createElement("svg",{ref:d,...Og,width:t,height:t,stroke:e,strokeWidth:r?Number(a)*24/Number(t):a,className:hu("lucide",s),...!i&&!Bg(o)&&{"aria-hidden":"true"},...o},[...l.map(([c,m])=>N.createElement(c,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=(e,t)=>{const a=N.forwardRef(({className:r,...s},i)=>N.createElement(Ig,{ref:i,iconNode:t,className:hu(`lucide-${_g(hd(e))}`,`lucide-${e}`,r),...s}));return a.displayName=hd(e),a};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],fu=U("arrow-right",Rg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],gu=U("award",Ug);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]],$g=U("bitcoin",Kg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],Hg=U("building-2",zg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Gg=U("calendar",Vg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],qg=U("chart-column",Wg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ss=U("chevron-down",Yg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Jg=U("chevron-right",Xg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],qn=U("chevron-up",Qg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Wi=U("circle-alert",Zg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Je=U("circle-check",ev);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],vu=U("clock",tv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],xu=U("coins",av);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],fd=U("cpu",rv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Kr=U("credit-card",sv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],iv=U("dollar-sign",nv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]],gd=U("file-check",lv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Nu=U("file-text",ov);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],xn=U("globe",dv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],vd=U("headphones",cv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]],$r=U("laptop",mv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],xd=U("lock",uv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],hv=U("mail",pv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],gv=U("menu",fv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],zr=U("monitor",vv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Nv=U("search",xv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Nd=U("settings",yv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Qe=U("shield",bv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Ze=U("smartphone",wv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Sv=U("target",kv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],Cv=U("trending-down",jv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],ye=U("trending-up",Tv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Mv=U("users",Dv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],Ar=U("wallet",Ev);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Fv=U("x",Av);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],$t=U("zap",Pv),_=e=>typeof e=="string",Ja=()=>{let e,t;const a=new Promise((r,s)=>{e=r,t=s});return a.resolve=e,a.reject=t,a},yd=e=>e==null?"":""+e,_v=(e,t,a)=>{e.forEach(r=>{t[r]&&(a[r]=t[r])})},Lv=/###/g,bd=e=>e&&e.indexOf("###")>-1?e.replace(Lv,"."):e,wd=e=>!e||_(e),mr=(e,t,a)=>{const r=_(t)?t.split("."):t;let s=0;for(;s<r.length-1;){if(wd(e))return{};const i=bd(r[s]);!e[i]&&a&&(e[i]=new a),Object.prototype.hasOwnProperty.call(e,i)?e=e[i]:e={},++s}return wd(e)?{}:{obj:e,k:bd(r[s])}},kd=(e,t,a)=>{const{obj:r,k:s}=mr(e,t,Object);if(r!==void 0||t.length===1){r[s]=a;return}let i=t[t.length-1],l=t.slice(0,t.length-1),o=mr(e,l,Object);for(;o.obj===void 0&&l.length;)i=`${l[l.length-1]}.${i}`,l=l.slice(0,l.length-1),o=mr(e,l,Object),o!=null&&o.obj&&typeof o.obj[`${o.k}.${i}`]<"u"&&(o.obj=void 0);o.obj[`${o.k}.${i}`]=a},Bv=(e,t,a,r)=>{const{obj:s,k:i}=mr(e,t,Object);s[i]=s[i]||[],s[i].push(a)},Xs=(e,t)=>{const{obj:a,k:r}=mr(e,t);if(a&&Object.prototype.hasOwnProperty.call(a,r))return a[r]},Ov=(e,t,a)=>{const r=Xs(e,a);return r!==void 0?r:Xs(t,a)},yu=(e,t,a)=>{for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?_(e[r])||e[r]instanceof String||_(t[r])||t[r]instanceof String?a&&(e[r]=t[r]):yu(e[r],t[r],a):e[r]=t[r]);return e},oa=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Iv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Rv=e=>_(e)?e.replace(/[&<>"'\/]/g,t=>Iv[t]):e;class Uv{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const a=this.regExpMap.get(t);if(a!==void 0)return a;const r=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,r),this.regExpQueue.push(t),r}}const Kv=[" ",",","?","!",";"],$v=new Uv(20),zv=(e,t,a)=>{t=t||"",a=a||"";const r=Kv.filter(l=>t.indexOf(l)<0&&a.indexOf(l)<0);if(r.length===0)return!0;const s=$v.getRegExp(`(${r.map(l=>l==="?"?"\\?":l).join("|")})`);let i=!s.test(e);if(!i){const l=e.indexOf(a);l>0&&!s.test(e.substring(0,l))&&(i=!0)}return i},qi=(e,t,a=".")=>{if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;const r=t.split(a);let s=e;for(let i=0;i<r.length;){if(!s||typeof s!="object")return;let l,o="";for(let d=i;d<r.length;++d)if(d!==i&&(o+=a),o+=r[d],l=s[o],l!==void 0){if(["string","number","boolean"].indexOf(typeof l)>-1&&d<r.length-1)continue;i+=d-i+1;break}s=l}return s},Fr=e=>e==null?void 0:e.replace("_","-"),Hv={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){var a,r;(r=(a=console==null?void 0:console[e])==null?void 0:a.apply)==null||r.call(a,console,t)}};class Js{constructor(t,a={}){this.init(t,a)}init(t,a={}){this.prefix=a.prefix||"i18next:",this.logger=t||Hv,this.options=a,this.debug=a.debug}log(...t){return this.forward(t,"log","",!0)}warn(...t){return this.forward(t,"warn","",!0)}error(...t){return this.forward(t,"error","")}deprecate(...t){return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(t,a,r,s){return s&&!this.debug?null:(_(t[0])&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[a](t))}create(t){return new Js(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new Js(this.logger,t)}}var nt=new Js;class Nn{constructor(){this.observers={}}on(t,a){return t.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const s=this.observers[r].get(a)||0;this.observers[r].set(a,s+1)}),this}off(t,a){if(this.observers[t]){if(!a){delete this.observers[t];return}this.observers[t].delete(a)}}emit(t,...a){this.observers[t]&&Array.from(this.observers[t].entries()).forEach(([s,i])=>{for(let l=0;l<i;l++)s(...a)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([s,i])=>{for(let l=0;l<i;l++)s.apply(s,[t,...a])})}}class Sd extends Nn{constructor(t,a={ns:["translation"],defaultNS:"translation"}){super(),this.data=t||{},this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const a=this.options.ns.indexOf(t);a>-1&&this.options.ns.splice(a,1)}getResource(t,a,r,s={}){var c,m;const i=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,l=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;t.indexOf(".")>-1?o=t.split("."):(o=[t,a],r&&(Array.isArray(r)?o.push(...r):_(r)&&i?o.push(...r.split(i)):o.push(r)));const d=Xs(this.data,o);return!d&&!a&&!r&&t.indexOf(".")>-1&&(t=o[0],a=o[1],r=o.slice(2).join(".")),d||!l||!_(r)?d:qi((m=(c=this.data)==null?void 0:c[t])==null?void 0:m[a],r,i)}addResource(t,a,r,s,i={silent:!1}){const l=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let o=[t,a];r&&(o=o.concat(l?r.split(l):r)),t.indexOf(".")>-1&&(o=t.split("."),s=a,a=o[1]),this.addNamespaces(a),kd(this.data,o,s),i.silent||this.emit("added",t,a,r,s)}addResources(t,a,r,s={silent:!1}){for(const i in r)(_(r[i])||Array.isArray(r[i]))&&this.addResource(t,a,i,r[i],{silent:!0});s.silent||this.emit("added",t,a,r)}addResourceBundle(t,a,r,s,i,l={silent:!1,skipCopy:!1}){let o=[t,a];t.indexOf(".")>-1&&(o=t.split("."),s=r,r=a,a=o[1]),this.addNamespaces(a);let d=Xs(this.data,o)||{};l.skipCopy||(r=JSON.parse(JSON.stringify(r))),s?yu(d,r,i):d={...d,...r},kd(this.data,o,d),l.silent||this.emit("added",t,a,r)}removeResourceBundle(t,a){this.hasResourceBundle(t,a)&&delete this.data[t][a],this.removeNamespaces(a),this.emit("removed",t,a)}hasResourceBundle(t,a){return this.getResource(t,a)!==void 0}getResourceBundle(t,a){return a||(a=this.options.defaultNS),this.getResource(t,a)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const a=this.getDataByLanguage(t);return!!(a&&Object.keys(a)||[]).find(s=>a[s]&&Object.keys(a[s]).length>0)}toJSON(){return this.data}}var bu={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,a,r,s){return e.forEach(i=>{var l;t=((l=this.processors[i])==null?void 0:l.process(t,a,r,s))??t}),t}};const wu=Symbol("i18next/PATH_KEY");function Vv(){const e=[],t=Object.create(null);let a;return t.get=(r,s)=>{var i;return(i=a==null?void 0:a.revoke)==null||i.call(a),s===wu?e:(e.push(s),a=Proxy.revocable(r,t),a.proxy)},Proxy.revocable(Object.create(null),t).proxy}function Yi(e,t){const{[wu]:a}=e(Vv());return a.join((t==null?void 0:t.keySeparator)??".")}const jd={},Yn=e=>!_(e)&&typeof e!="boolean"&&typeof e!="number";class Qs extends Nn{constructor(t,a={}){super(),_v(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=nt.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t,a={interpolation:{}}){const r={...a};if(t==null)return!1;const s=this.resolve(t,r);if((s==null?void 0:s.res)===void 0)return!1;const i=Yn(s.res);return!(r.returnObjects===!1&&i)}extractFromKey(t,a){let r=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const s=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator;let i=a.ns||this.options.defaultNS||[];const l=r&&t.indexOf(r)>-1,o=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!zv(t,r,s);if(l&&!o){const d=t.match(this.interpolator.nestingRegexp);if(d&&d.length>0)return{key:t,namespaces:_(i)?[i]:i};const c=t.split(r);(r!==s||r===s&&this.options.ns.indexOf(c[0])>-1)&&(i=c.shift()),t=c.join(s)}return{key:t,namespaces:_(i)?[i]:i}}translate(t,a,r){let s=typeof a=="object"?{...a}:a;if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),t==null)return"";typeof t=="function"&&(t=Yi(t,{...this.options,...s})),Array.isArray(t)||(t=[String(t)]);const i=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,l=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:o,namespaces:d}=this.extractFromKey(t[t.length-1],s),c=d[d.length-1];let m=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;m===void 0&&(m=":");const u=s.lng||this.language,g=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((u==null?void 0:u.toLowerCase())==="cimode")return g?i?{res:`${c}${m}${o}`,usedKey:o,exactUsedKey:o,usedLng:u,usedNS:c,usedParams:this.getUsedParamsDetails(s)}:`${c}${m}${o}`:i?{res:o,usedKey:o,exactUsedKey:o,usedLng:u,usedNS:c,usedParams:this.getUsedParamsDetails(s)}:o;const x=this.resolve(t,s);let v=x==null?void 0:x.res;const y=(x==null?void 0:x.usedKey)||o,w=(x==null?void 0:x.exactUsedKey)||o,f=["[object Number]","[object Function]","[object RegExp]"],p=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,h=!this.i18nFormat||this.i18nFormat.handleAsObject,b=s.count!==void 0&&!_(s.count),S=Qs.hasDefaultValue(s),T=b?this.pluralResolver.getSuffix(u,s.count,s):"",j=s.ordinal&&b?this.pluralResolver.getSuffix(u,s.count,{ordinal:!1}):"",D=b&&!s.ordinal&&s.count===0,A=D&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${T}`]||s[`defaultValue${j}`]||s.defaultValue;let E=v;h&&!v&&S&&(E=A);const ie=Yn(E),H=Object.prototype.toString.apply(E);if(h&&E&&ie&&f.indexOf(H)<0&&!(_(p)&&Array.isArray(E))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const B=this.options.returnedObjectHandler?this.options.returnedObjectHandler(y,E,{...s,ns:d}):`key '${o} (${this.language})' returned an object instead of string.`;return i?(x.res=B,x.usedParams=this.getUsedParamsDetails(s),x):B}if(l){const B=Array.isArray(E),z=B?[]:{},ae=B?w:y;for(const le in E)if(Object.prototype.hasOwnProperty.call(E,le)){const fe=`${ae}${l}${le}`;S&&!v?z[le]=this.translate(fe,{...s,defaultValue:Yn(A)?A[le]:void 0,joinArrays:!1,ns:d}):z[le]=this.translate(fe,{...s,joinArrays:!1,ns:d}),z[le]===fe&&(z[le]=E[le])}v=z}}else if(h&&_(p)&&Array.isArray(v))v=v.join(p),v&&(v=this.extendTranslation(v,t,s,r));else{let B=!1,z=!1;!this.isValidLookup(v)&&S&&(B=!0,v=A),this.isValidLookup(v)||(z=!0,v=o);const le=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&z?void 0:v,fe=S&&A!==v&&this.options.updateMissing;if(z||B||fe){if(this.logger.log(fe?"updateKey":"missingKey",u,c,o,fe?A:v),l){const $=this.resolve(o,{...s,keySeparator:!1});$&&$.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let C=[];const P=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&P&&P[0])for(let $=0;$<P.length;$++)C.push(P[$]);else this.options.saveMissingTo==="all"?C=this.languageUtils.toResolveHierarchy(s.lng||this.language):C.push(s.lng||this.language);const L=($,W,et)=>{var ia;const tt=S&&et!==v?et:le;this.options.missingKeyHandler?this.options.missingKeyHandler($,c,W,tt,fe,s):(ia=this.backendConnector)!=null&&ia.saveMissing&&this.backendConnector.saveMissing($,c,W,tt,fe,s),this.emit("missingKey",$,c,W,v)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?C.forEach($=>{const W=this.pluralResolver.getSuffixes($,s);D&&s[`defaultValue${this.options.pluralSeparator}zero`]&&W.indexOf(`${this.options.pluralSeparator}zero`)<0&&W.push(`${this.options.pluralSeparator}zero`),W.forEach(et=>{L([$],o+et,s[`defaultValue${et}`]||A)})}):L(C,o,A))}v=this.extendTranslation(v,t,s,x,r),z&&v===o&&this.options.appendNamespaceToMissingKey&&(v=`${c}${m}${o}`),(z||B)&&this.options.parseMissingKeyHandler&&(v=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}${m}${o}`:o,B?v:void 0,s))}return i?(x.res=v,x.usedParams=this.getUsedParamsDetails(s),x):v}extendTranslation(t,a,r,s,i){var d,c;if((d=this.i18nFormat)!=null&&d.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const m=_(t)&&(((c=r==null?void 0:r.interpolation)==null?void 0:c.skipOnVariables)!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(m){const x=t.match(this.interpolator.nestingRegexp);u=x&&x.length}let g=r.replace&&!_(r.replace)?r.replace:r;if(this.options.interpolation.defaultVariables&&(g={...this.options.interpolation.defaultVariables,...g}),t=this.interpolator.interpolate(t,g,r.lng||this.language||s.usedLng,r),m){const x=t.match(this.interpolator.nestingRegexp),v=x&&x.length;u<v&&(r.nest=!1)}!r.lng&&s&&s.res&&(r.lng=this.language||s.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,(...x)=>(i==null?void 0:i[0])===x[0]&&!r.context?(this.logger.warn(`It seems you are nesting recursively key: ${x[0]} in key: ${a[0]}`),null):this.translate(...x,a),r)),r.interpolation&&this.interpolator.reset()}const l=r.postProcess||this.options.postProcess,o=_(l)?[l]:l;return t!=null&&(o!=null&&o.length)&&r.applyPostProcessor!==!1&&(t=bu.handle(o,t,a,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),t}resolve(t,a={}){let r,s,i,l,o;return _(t)&&(t=[t]),t.forEach(d=>{if(this.isValidLookup(r))return;const c=this.extractFromKey(d,a),m=c.key;s=m;let u=c.namespaces;this.options.fallbackNS&&(u=u.concat(this.options.fallbackNS));const g=a.count!==void 0&&!_(a.count),x=g&&!a.ordinal&&a.count===0,v=a.context!==void 0&&(_(a.context)||typeof a.context=="number")&&a.context!=="",y=a.lngs?a.lngs:this.languageUtils.toResolveHierarchy(a.lng||this.language,a.fallbackLng);u.forEach(w=>{var f,p;this.isValidLookup(r)||(o=w,!jd[`${y[0]}-${w}`]&&((f=this.utils)!=null&&f.hasLoadedNamespace)&&!((p=this.utils)!=null&&p.hasLoadedNamespace(o))&&(jd[`${y[0]}-${w}`]=!0,this.logger.warn(`key "${s}" for languages "${y.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),y.forEach(h=>{var T;if(this.isValidLookup(r))return;l=h;const b=[m];if((T=this.i18nFormat)!=null&&T.addLookupKeys)this.i18nFormat.addLookupKeys(b,m,h,w,a);else{let j;g&&(j=this.pluralResolver.getSuffix(h,a.count,a));const D=`${this.options.pluralSeparator}zero`,A=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(g&&(a.ordinal&&j.indexOf(A)===0&&b.push(m+j.replace(A,this.options.pluralSeparator)),b.push(m+j),x&&b.push(m+D)),v){const E=`${m}${this.options.contextSeparator||"_"}${a.context}`;b.push(E),g&&(a.ordinal&&j.indexOf(A)===0&&b.push(E+j.replace(A,this.options.pluralSeparator)),b.push(E+j),x&&b.push(E+D))}}let S;for(;S=b.pop();)this.isValidLookup(r)||(i=S,r=this.getResource(h,w,S,a))}))})}),{res:r,usedKey:s,exactUsedKey:i,usedLng:l,usedNS:o}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,a,r,s={}){var i;return(i=this.i18nFormat)!=null&&i.getResource?this.i18nFormat.getResource(t,a,r,s):this.resourceStore.getResource(t,a,r,s)}getUsedParamsDetails(t={}){const a=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=t.replace&&!_(t.replace);let s=r?t.replace:t;if(r&&typeof t.count<"u"&&(s.count=t.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!r){s={...s};for(const i of a)delete s[i]}return s}static hasDefaultValue(t){const a="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&a===r.substring(0,a.length)&&t[r]!==void 0)return!0;return!1}}class Cd{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=nt.create("languageUtils")}getScriptPartFromCode(t){if(t=Fr(t),!t||t.indexOf("-")<0)return null;const a=t.split("-");return a.length===2||(a.pop(),a[a.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(a.join("-"))}getLanguagePartFromCode(t){if(t=Fr(t),!t||t.indexOf("-")<0)return t;const a=t.split("-");return this.formatLanguageCode(a[0])}formatLanguageCode(t){if(_(t)&&t.indexOf("-")>-1){let a;try{a=Intl.getCanonicalLocales(t)[0]}catch{}return a&&this.options.lowerCaseLng&&(a=a.toLowerCase()),a||(this.options.lowerCaseLng?t.toLowerCase():t)}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let a;return t.forEach(r=>{if(a)return;const s=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(s))&&(a=s)}),!a&&this.options.supportedLngs&&t.forEach(r=>{if(a)return;const s=this.getScriptPartFromCode(r);if(this.isSupportedCode(s))return a=s;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return a=i;a=this.options.supportedLngs.find(l=>{if(l===i)return l;if(!(l.indexOf("-")<0&&i.indexOf("-")<0)&&(l.indexOf("-")>0&&i.indexOf("-")<0&&l.substring(0,l.indexOf("-"))===i||l.indexOf(i)===0&&i.length>1))return l})}),a||(a=this.getFallbackCodes(this.options.fallbackLng)[0]),a}getFallbackCodes(t,a){if(!t)return[];if(typeof t=="function"&&(t=t(a)),_(t)&&(t=[t]),Array.isArray(t))return t;if(!a)return t.default||[];let r=t[a];return r||(r=t[this.getScriptPartFromCode(a)]),r||(r=t[this.formatLanguageCode(a)]),r||(r=t[this.getLanguagePartFromCode(a)]),r||(r=t.default),r||[]}toResolveHierarchy(t,a){const r=this.getFallbackCodes((a===!1?[]:a)||this.options.fallbackLng||[],t),s=[],i=l=>{l&&(this.isSupportedCode(l)?s.push(l):this.logger.warn(`rejecting language code not found in supportedLngs: ${l}`))};return _(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&i(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&i(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&i(this.getLanguagePartFromCode(t))):_(t)&&i(this.formatLanguageCode(t)),r.forEach(l=>{s.indexOf(l)<0&&i(this.formatLanguageCode(l))}),s}}const Td={zero:0,one:1,two:2,few:3,many:4,other:5},Dd={select:e=>e===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Gv{constructor(t,a={}){this.languageUtils=t,this.options=a,this.logger=nt.create("pluralResolver"),this.pluralRulesCache={}}addRule(t,a){this.rules[t]=a}clearCache(){this.pluralRulesCache={}}getRule(t,a={}){const r=Fr(t==="dev"?"en":t),s=a.ordinal?"ordinal":"cardinal",i=JSON.stringify({cleanedCode:r,type:s});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let l;try{l=new Intl.PluralRules(r,{type:s})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Dd;if(!t.match(/-|_/))return Dd;const d=this.languageUtils.getLanguagePartFromCode(t);l=this.getRule(d,a)}return this.pluralRulesCache[i]=l,l}needsPlural(t,a={}){let r=this.getRule(t,a);return r||(r=this.getRule("dev",a)),(r==null?void 0:r.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(t,a,r={}){return this.getSuffixes(t,r).map(s=>`${a}${s}`)}getSuffixes(t,a={}){let r=this.getRule(t,a);return r||(r=this.getRule("dev",a)),r?r.resolvedOptions().pluralCategories.sort((s,i)=>Td[s]-Td[i]).map(s=>`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(t,a,r={}){const s=this.getRule(t,r);return s?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${s.select(a)}`:(this.logger.warn(`no plural rule found for: ${t}`),this.getSuffix("dev",a,r))}}const Md=(e,t,a,r=".",s=!0)=>{let i=Ov(e,t,a);return!i&&s&&_(a)&&(i=qi(e,a,r),i===void 0&&(i=qi(t,a,r))),i},Xn=e=>e.replace(/\$/g,"$$$$");class Ed{constructor(t={}){var a;this.logger=nt.create("interpolator"),this.options=t,this.format=((a=t==null?void 0:t.interpolation)==null?void 0:a.format)||(r=>r),this.init(t)}init(t={}){t.interpolation||(t.interpolation={escapeValue:!0});const{escape:a,escapeValue:r,useRawValueToEscape:s,prefix:i,prefixEscaped:l,suffix:o,suffixEscaped:d,formatSeparator:c,unescapeSuffix:m,unescapePrefix:u,nestingPrefix:g,nestingPrefixEscaped:x,nestingSuffix:v,nestingSuffixEscaped:y,nestingOptionsSeparator:w,maxReplaces:f,alwaysFormat:p}=t.interpolation;this.escape=a!==void 0?a:Rv,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=i?oa(i):l||"{{",this.suffix=o?oa(o):d||"}}",this.formatSeparator=c||",",this.unescapePrefix=m?"":u||"-",this.unescapeSuffix=this.unescapePrefix?"":m||"",this.nestingPrefix=g?oa(g):x||oa("$t("),this.nestingSuffix=v?oa(v):y||oa(")"),this.nestingOptionsSeparator=w||",",this.maxReplaces=f||1e3,this.alwaysFormat=p!==void 0?p:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(a,r)=>(a==null?void 0:a.source)===r?(a.lastIndex=0,a):new RegExp(r,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(t,a,r,s){var x;let i,l,o;const d=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=v=>{if(v.indexOf(this.formatSeparator)<0){const p=Md(a,d,v,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(p,void 0,r,{...s,...a,interpolationkey:v}):p}const y=v.split(this.formatSeparator),w=y.shift().trim(),f=y.join(this.formatSeparator).trim();return this.format(Md(a,d,w,this.options.keySeparator,this.options.ignoreJSONStructure),f,r,{...s,...a,interpolationkey:w})};this.resetRegExp();const m=(s==null?void 0:s.missingInterpolationHandler)||this.options.missingInterpolationHandler,u=((x=s==null?void 0:s.interpolation)==null?void 0:x.skipOnVariables)!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:v=>Xn(v)},{regex:this.regexp,safeValue:v=>this.escapeValue?Xn(this.escape(v)):Xn(v)}].forEach(v=>{for(o=0;i=v.regex.exec(t);){const y=i[1].trim();if(l=c(y),l===void 0)if(typeof m=="function"){const f=m(t,i,s);l=_(f)?f:""}else if(s&&Object.prototype.hasOwnProperty.call(s,y))l="";else if(u){l=i[0];continue}else this.logger.warn(`missed to pass in variable ${y} for interpolating ${t}`),l="";else!_(l)&&!this.useRawValueToEscape&&(l=yd(l));const w=v.safeValue(l);if(t=t.replace(i[0],w),u?(v.regex.lastIndex+=l.length,v.regex.lastIndex-=i[0].length):v.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),t}nest(t,a,r={}){let s,i,l;const o=(d,c)=>{const m=this.nestingOptionsSeparator;if(d.indexOf(m)<0)return d;const u=d.split(new RegExp(`${m}[ ]*{`));let g=`{${u[1]}`;d=u[0],g=this.interpolate(g,l);const x=g.match(/'/g),v=g.match(/"/g);(((x==null?void 0:x.length)??0)%2===0&&!v||v.length%2!==0)&&(g=g.replace(/'/g,'"'));try{l=JSON.parse(g),c&&(l={...c,...l})}catch(y){return this.logger.warn(`failed parsing options string in nesting for key ${d}`,y),`${d}${m}${g}`}return l.defaultValue&&l.defaultValue.indexOf(this.prefix)>-1&&delete l.defaultValue,d};for(;s=this.nestingRegexp.exec(t);){let d=[];l={...r},l=l.replace&&!_(l.replace)?l.replace:l,l.applyPostProcessor=!1,delete l.defaultValue;const c=/{.*}/.test(s[1])?s[1].lastIndexOf("}")+1:s[1].indexOf(this.formatSeparator);if(c!==-1&&(d=s[1].slice(c).split(this.formatSeparator).map(m=>m.trim()).filter(Boolean),s[1]=s[1].slice(0,c)),i=a(o.call(this,s[1].trim(),l),l),i&&s[0]===t&&!_(i))return i;_(i)||(i=yd(i)),i||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${t}`),i=""),d.length&&(i=d.reduce((m,u)=>this.format(m,u,r.lng,{...r,interpolationkey:s[1].trim()}),i.trim())),t=t.replace(s[0],i),this.regexp.lastIndex=0}return t}}const Wv=e=>{let t=e.toLowerCase().trim();const a={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const s=r[1].substring(0,r[1].length-1);t==="currency"&&s.indexOf(":")<0?a.currency||(a.currency=s.trim()):t==="relativetime"&&s.indexOf(":")<0?a.range||(a.range=s.trim()):s.split(";").forEach(l=>{if(l){const[o,...d]=l.split(":"),c=d.join(":").trim().replace(/^'+|'+$/g,""),m=o.trim();a[m]||(a[m]=c),c==="false"&&(a[m]=!1),c==="true"&&(a[m]=!0),isNaN(c)||(a[m]=parseInt(c,10))}})}return{formatName:t,formatOptions:a}},Ad=e=>{const t={};return(a,r,s)=>{let i=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(i={...i,[s.interpolationkey]:void 0});const l=r+JSON.stringify(i);let o=t[l];return o||(o=e(Fr(r),s),t[l]=o),o(a)}},qv=e=>(t,a,r)=>e(Fr(a),r)(t);class Yv{constructor(t={}){this.logger=nt.create("formatter"),this.options=t,this.init(t)}init(t,a={interpolation:{}}){this.formatSeparator=a.interpolation.formatSeparator||",";const r=a.cacheInBuiltFormats?Ad:qv;this.formats={number:r((s,i)=>{const l=new Intl.NumberFormat(s,{...i});return o=>l.format(o)}),currency:r((s,i)=>{const l=new Intl.NumberFormat(s,{...i,style:"currency"});return o=>l.format(o)}),datetime:r((s,i)=>{const l=new Intl.DateTimeFormat(s,{...i});return o=>l.format(o)}),relativetime:r((s,i)=>{const l=new Intl.RelativeTimeFormat(s,{...i});return o=>l.format(o,i.range||"day")}),list:r((s,i)=>{const l=new Intl.ListFormat(s,{...i});return o=>l.format(o)})}}add(t,a){this.formats[t.toLowerCase().trim()]=a}addCached(t,a){this.formats[t.toLowerCase().trim()]=Ad(a)}format(t,a,r,s={}){const i=a.split(this.formatSeparator);if(i.length>1&&i[0].indexOf("(")>1&&i[0].indexOf(")")<0&&i.find(o=>o.indexOf(")")>-1)){const o=i.findIndex(d=>d.indexOf(")")>-1);i[0]=[i[0],...i.splice(1,o)].join(this.formatSeparator)}return i.reduce((o,d)=>{var u;const{formatName:c,formatOptions:m}=Wv(d);if(this.formats[c]){let g=o;try{const x=((u=s==null?void 0:s.formatParams)==null?void 0:u[s.interpolationkey])||{},v=x.locale||x.lng||s.locale||s.lng||r;g=this.formats[c](o,v,{...m,...s,...x})}catch(x){this.logger.warn(x)}return g}else this.logger.warn(`there was no format function for ${c}`);return o},t)}}const Xv=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class Jv extends Nn{constructor(t,a,r,s={}){var i,l;super(),this.backend=t,this.store=a,this.services=r,this.languageUtils=r.languageUtils,this.options=s,this.logger=nt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],(l=(i=this.backend)==null?void 0:i.init)==null||l.call(i,r,s.backend,s)}queueLoad(t,a,r,s){const i={},l={},o={},d={};return t.forEach(c=>{let m=!0;a.forEach(u=>{const g=`${c}|${u}`;!r.reload&&this.store.hasResourceBundle(c,u)?this.state[g]=2:this.state[g]<0||(this.state[g]===1?l[g]===void 0&&(l[g]=!0):(this.state[g]=1,m=!1,l[g]===void 0&&(l[g]=!0),i[g]===void 0&&(i[g]=!0),d[u]===void 0&&(d[u]=!0)))}),m||(o[c]=!0)}),(Object.keys(i).length||Object.keys(l).length)&&this.queue.push({pending:l,pendingCount:Object.keys(l).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(i),pending:Object.keys(l),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(d)}}loaded(t,a,r){const s=t.split("|"),i=s[0],l=s[1];a&&this.emit("failedLoading",i,l,a),!a&&r&&this.store.addResourceBundle(i,l,r,void 0,void 0,{skipCopy:!0}),this.state[t]=a?-1:2,a&&r&&(this.state[t]=0);const o={};this.queue.forEach(d=>{Bv(d.loaded,[i],l),Xv(d,t),a&&d.errors.push(a),d.pendingCount===0&&!d.done&&(Object.keys(d.loaded).forEach(c=>{o[c]||(o[c]={});const m=d.loaded[c];m.length&&m.forEach(u=>{o[c][u]===void 0&&(o[c][u]=!0)})}),d.done=!0,d.errors.length?d.callback(d.errors):d.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(d=>!d.done)}read(t,a,r,s=0,i=this.retryTimeout,l){if(!t.length)return l(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:a,fcName:r,tried:s,wait:i,callback:l});return}this.readingCalls++;const o=(c,m)=>{if(this.readingCalls--,this.waitingReads.length>0){const u=this.waitingReads.shift();this.read(u.lng,u.ns,u.fcName,u.tried,u.wait,u.callback)}if(c&&m&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,t,a,r,s+1,i*2,l)},i);return}l(c,m)},d=this.backend[r].bind(this.backend);if(d.length===2){try{const c=d(t,a);c&&typeof c.then=="function"?c.then(m=>o(null,m)).catch(o):o(null,c)}catch(c){o(c)}return}return d(t,a,o)}prepareLoading(t,a,r={},s){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();_(t)&&(t=this.languageUtils.toResolveHierarchy(t)),_(a)&&(a=[a]);const i=this.queueLoad(t,a,r,s);if(!i.toLoad.length)return i.pending.length||s(),null;i.toLoad.forEach(l=>{this.loadOne(l)})}load(t,a,r){this.prepareLoading(t,a,{},r)}reload(t,a,r){this.prepareLoading(t,a,{reload:!0},r)}loadOne(t,a=""){const r=t.split("|"),s=r[0],i=r[1];this.read(s,i,"read",void 0,void 0,(l,o)=>{l&&this.logger.warn(`${a}loading namespace ${i} for language ${s} failed`,l),!l&&o&&this.logger.log(`${a}loaded namespace ${i} for language ${s}`,o),this.loaded(t,l,o)})}saveMissing(t,a,r,s,i,l={},o=()=>{}){var d,c,m,u,g;if((c=(d=this.services)==null?void 0:d.utils)!=null&&c.hasLoadedNamespace&&!((u=(m=this.services)==null?void 0:m.utils)!=null&&u.hasLoadedNamespace(a))){this.logger.warn(`did not save key "${r}" as the namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if((g=this.backend)!=null&&g.create){const x={...l,isUpdate:i},v=this.backend.create.bind(this.backend);if(v.length<6)try{let y;v.length===5?y=v(t,a,r,s,x):y=v(t,a,r,s),y&&typeof y.then=="function"?y.then(w=>o(null,w)).catch(o):o(null,y)}catch(y){o(y)}else v(t,a,r,s,o,x)}!t||!t[0]||this.store.addResource(t[0],a,r,s)}}}const Fd=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),_(e[1])&&(t.defaultValue=e[1]),_(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const a=e[3]||e[2];Object.keys(a).forEach(r=>{t[r]=a[r]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Pd=e=>{var t,a;return _(e.ns)&&(e.ns=[e.ns]),_(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),_(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),((a=(t=e.supportedLngs)==null?void 0:t.indexOf)==null?void 0:a.call(t,"cimode"))<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),typeof e.initImmediate=="boolean"&&(e.initAsync=e.initImmediate),e},ds=()=>{},Qv=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(a=>{typeof e[a]=="function"&&(e[a]=e[a].bind(e))})};class ur extends Nn{constructor(t={},a){if(super(),this.options=Pd(t),this.services={},this.logger=nt,this.modules={external:[]},Qv(this),a&&!this.isInitialized&&!t.isClone){if(!this.options.initAsync)return this.init(t,a),this;setTimeout(()=>{this.init(t,a)},0)}}init(t={},a){this.isInitializing=!0,typeof t=="function"&&(a=t,t={}),t.defaultNS==null&&t.ns&&(_(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const r=Fd();this.options={...r,...this.options,...Pd(t)},this.options.interpolation={...r.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const s=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?nt.init(s(this.modules.logger),this.options):nt.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:c=Yv;const m=new Cd(this.options);this.store=new Sd(this.options.resources,this.options);const u=this.services;u.logger=nt,u.resourceStore=this.store,u.languageUtils=m,u.pluralResolver=new Gv(m,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==r.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),c&&(!this.options.interpolation.format||this.options.interpolation.format===r.interpolation.format)&&(u.formatter=s(c),u.formatter.init&&u.formatter.init(u,this.options),this.options.interpolation.format=u.formatter.format.bind(u.formatter)),u.interpolator=new Ed(this.options),u.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},u.backendConnector=new Jv(s(this.modules.backend),u.resourceStore,u,this.options),u.backendConnector.on("*",(x,...v)=>{this.emit(x,...v)}),this.modules.languageDetector&&(u.languageDetector=s(this.modules.languageDetector),u.languageDetector.init&&u.languageDetector.init(u,this.options.detection,this.options)),this.modules.i18nFormat&&(u.i18nFormat=s(this.modules.i18nFormat),u.i18nFormat.init&&u.i18nFormat.init(this)),this.translator=new Qs(this.services,this.options),this.translator.on("*",(x,...v)=>{this.emit(x,...v)}),this.modules.external.forEach(x=>{x.init&&x.init(this)})}if(this.format=this.options.interpolation.format,a||(a=ds),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=(...m)=>this.store[c](...m)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=(...m)=>(this.store[c](...m),this)});const o=Ja(),d=()=>{const c=(m,u)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),o.resolve(u),a(m,u)};if(this.languages&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initAsync?d():setTimeout(d,0),o}loadResources(t,a=ds){var i,l;let r=a;const s=_(t)?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if((s==null?void 0:s.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const o=[],d=c=>{if(!c||c==="cimode")return;this.services.languageUtils.toResolveHierarchy(c).forEach(u=>{u!=="cimode"&&o.indexOf(u)<0&&o.push(u)})};s?d(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(m=>d(m)),(l=(i=this.options.preload)==null?void 0:i.forEach)==null||l.call(i,c=>d(c)),this.services.backendConnector.load(o,this.options.ns,c=>{!c&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(c)})}else r(null)}reloadResources(t,a,r){const s=Ja();return typeof t=="function"&&(r=t,t=void 0),typeof a=="function"&&(r=a,a=void 0),t||(t=this.languages),a||(a=this.options.ns),r||(r=ds),this.services.backendConnector.reload(t,a,i=>{s.resolve(),r(i)}),s}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&bu.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1)){for(let a=0;a<this.languages.length;a++){const r=this.languages[a];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}!this.resolvedLanguage&&this.languages.indexOf(t)<0&&this.store.hasLanguageSomeTranslations(t)&&(this.resolvedLanguage=t,this.languages.unshift(t))}}changeLanguage(t,a){this.isLanguageChangingTo=t;const r=Ja();this.emit("languageChanging",t);const s=o=>{this.language=o,this.languages=this.services.languageUtils.toResolveHierarchy(o),this.resolvedLanguage=void 0,this.setResolvedLanguage(o)},i=(o,d)=>{d?this.isLanguageChangingTo===t&&(s(d),this.translator.changeLanguage(d),this.isLanguageChangingTo=void 0,this.emit("languageChanged",d),this.logger.log("languageChanged",d)):this.isLanguageChangingTo=void 0,r.resolve((...c)=>this.t(...c)),a&&a(o,(...c)=>this.t(...c))},l=o=>{var m,u;!t&&!o&&this.services.languageDetector&&(o=[]);const d=_(o)?o:o&&o[0],c=this.store.hasLanguageSomeTranslations(d)?d:this.services.languageUtils.getBestMatchFromCodes(_(o)?[o]:o);c&&(this.language||s(c),this.translator.language||this.translator.changeLanguage(c),(u=(m=this.services.languageDetector)==null?void 0:m.cacheUserLanguage)==null||u.call(m,c)),this.loadResources(c,g=>{i(g,c)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?l(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(l):this.services.languageDetector.detect(l):l(t),r}getFixedT(t,a,r){const s=(i,l,...o)=>{let d;typeof l!="object"?d=this.options.overloadTranslationOptionHandler([i,l].concat(o)):d={...l},d.lng=d.lng||s.lng,d.lngs=d.lngs||s.lngs,d.ns=d.ns||s.ns,d.keyPrefix!==""&&(d.keyPrefix=d.keyPrefix||r||s.keyPrefix);const c=this.options.keySeparator||".";let m;return d.keyPrefix&&Array.isArray(i)?m=i.map(u=>(typeof u=="function"&&(u=Yi(u,{...this.options,...l})),`${d.keyPrefix}${c}${u}`)):(typeof i=="function"&&(i=Yi(i,{...this.options,...l})),m=d.keyPrefix?`${d.keyPrefix}${c}${i}`:i),this.t(m,d)};return _(t)?s.lng=t:s.lngs=t,s.ns=a,s.keyPrefix=r,s}t(...t){var a;return(a=this.translator)==null?void 0:a.translate(...t)}exists(...t){var a;return(a=this.translator)==null?void 0:a.exists(...t)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t,a={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=a.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const l=(o,d)=>{const c=this.services.backendConnector.state[`${o}|${d}`];return c===-1||c===0||c===2};if(a.precheck){const o=a.precheck(this,l);if(o!==void 0)return o}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||l(r,t)&&(!s||l(i,t)))}loadNamespaces(t,a){const r=Ja();return this.options.ns?(_(t)&&(t=[t]),t.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{r.resolve(),a&&a(s)}),r):(a&&a(),Promise.resolve())}loadLanguages(t,a){const r=Ja();_(t)&&(t=[t]);const s=this.options.preload||[],i=t.filter(l=>s.indexOf(l)<0&&this.services.languageUtils.isSupportedCode(l));return i.length?(this.options.preload=s.concat(i),this.loadResources(l=>{r.resolve(),a&&a(l)}),r):(a&&a(),Promise.resolve())}dir(t){var s,i;if(t||(t=this.resolvedLanguage||(((s=this.languages)==null?void 0:s.length)>0?this.languages[0]:this.language)),!t)return"rtl";try{const l=new Intl.Locale(t);if(l&&l.getTextInfo){const o=l.getTextInfo();if(o&&o.direction)return o.direction}}catch{}const a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=((i=this.services)==null?void 0:i.languageUtils)||new Cd(Fd());return t.toLowerCase().indexOf("-latn")>1?"ltr":a.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(t={},a){const r=new ur(t,a);return r.createInstance=ur.createInstance,r}cloneInstance(t={},a=ds){const r=t.forkResourceStore;r&&delete t.forkResourceStore;const s={...this.options,...t,isClone:!0},i=new ur(s);if((t.debug!==void 0||t.prefix!==void 0)&&(i.logger=i.logger.clone(t)),["store","services","language"].forEach(o=>{i[o]=this[o]}),i.services={...this.services},i.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},r){const o=Object.keys(this.store.data).reduce((d,c)=>(d[c]={...this.store.data[c]},d[c]=Object.keys(d[c]).reduce((m,u)=>(m[u]={...d[c][u]},m),d[c]),d),{});i.store=new Sd(o,s),i.services.resourceStore=i.store}return t.interpolation&&(i.services.interpolator=new Ed(s)),i.translator=new Qs(i.services,s),i.translator.on("*",(o,...d)=>{i.emit(o,...d)}),i.init(s,a),i.translator.options=s,i.translator.backendConnector.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},i}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const je=ur.createInstance();je.createInstance;je.dir;je.init;je.loadResources;je.reloadResources;je.use;je.changeLanguage;je.getFixedT;je.t;je.exists;je.setDefaultNamespace;je.hasLoadedNamespace;je.loadNamespaces;je.loadLanguages;const Zv=(e,t,a,r)=>{var i,l,o,d;const s=[a,{code:t,...r||{}}];if((l=(i=e==null?void 0:e.services)==null?void 0:i.logger)!=null&&l.forward)return e.services.logger.forward(s,"warn","react-i18next::",!0);aa(s[0])&&(s[0]=`react-i18next:: ${s[0]}`),(d=(o=e==null?void 0:e.services)==null?void 0:o.logger)!=null&&d.warn?e.services.logger.warn(...s):console!=null&&console.warn&&console.warn(...s)},_d={},ku=(e,t,a,r)=>{aa(a)&&_d[a]||(aa(a)&&(_d[a]=new Date),Zv(e,t,a,r))},Su=(e,t)=>()=>{if(e.isInitialized)t();else{const a=()=>{setTimeout(()=>{e.off("initialized",a)},0),t()};e.on("initialized",a)}},Xi=(e,t,a)=>{e.loadNamespaces(t,Su(e,a))},Ld=(e,t,a,r)=>{if(aa(a)&&(a=[a]),e.options.preload&&e.options.preload.indexOf(t)>-1)return Xi(e,a,r);a.forEach(s=>{e.options.ns.indexOf(s)<0&&e.options.ns.push(s)}),e.loadLanguages(t,Su(e,r))},ex=(e,t,a={})=>!t.languages||!t.languages.length?(ku(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:a.lng,precheck:(r,s)=>{if(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!s(r.isLanguageChangingTo,e))return!1}}),aa=e=>typeof e=="string",tx=e=>typeof e=="object"&&e!==null,ax=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,rx={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},sx=e=>rx[e],nx=e=>e.replace(ax,sx);let Ji={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:nx};const ix=(e={})=>{Ji={...Ji,...e}},lx=()=>Ji;let ju;const ox=e=>{ju=e},dx=()=>ju,cx={type:"3rdParty",init(e){ix(e.options.react),ox(e)}},mx=N.createContext();class ux{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(a=>{this.usedNamespaces[a]||(this.usedNamespaces[a]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var Cu={exports:{}},Tu={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba=N;function px(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var hx=typeof Object.is=="function"?Object.is:px,fx=Ba.useState,gx=Ba.useEffect,vx=Ba.useLayoutEffect,xx=Ba.useDebugValue;function Nx(e,t){var a=t(),r=fx({inst:{value:a,getSnapshot:t}}),s=r[0].inst,i=r[1];return vx(function(){s.value=a,s.getSnapshot=t,Jn(s)&&i({inst:s})},[e,a,t]),gx(function(){return Jn(s)&&i({inst:s}),e(function(){Jn(s)&&i({inst:s})})},[e]),xx(a),a}function Jn(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!hx(e,a)}catch{return!0}}function yx(e,t){return t()}var bx=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?yx:Nx;Tu.useSyncExternalStore=Ba.useSyncExternalStore!==void 0?Ba.useSyncExternalStore:bx;Cu.exports=Tu;var wx=Cu.exports;const kx=(e,t)=>aa(t)?t:tx(t)&&aa(t.defaultValue)?t.defaultValue:Array.isArray(e)?e[e.length-1]:e,Sx={t:kx,ready:!1},jx=()=>()=>{},F=(e,t={})=>{var A,E,ie;const{i18n:a}=t,{i18n:r,defaultNS:s}=N.useContext(mx)||{},i=a||r||dx();i&&!i.reportNamespaces&&(i.reportNamespaces=new ux),i||ku(i,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const l=N.useMemo(()=>{var H;return{...lx(),...(H=i==null?void 0:i.options)==null?void 0:H.react,...t}},[i,t]),{useSuspense:o,keyPrefix:d}=l,c=e||s||((A=i==null?void 0:i.options)==null?void 0:A.defaultNS),m=aa(c)?[c]:c||["translation"],u=N.useMemo(()=>m,m);(ie=(E=i==null?void 0:i.reportNamespaces)==null?void 0:E.addUsedNamespaces)==null||ie.call(E,u);const g=N.useRef(0),x=N.useCallback(H=>{if(!i)return jx;const{bindI18n:B,bindI18nStore:z}=l,ae=()=>{g.current+=1,H()};return B&&i.on(B,ae),z&&i.store.on(z,ae),()=>{B&&B.split(" ").forEach(le=>i.off(le,ae)),z&&z.split(" ").forEach(le=>i.store.off(le,ae))}},[i,l]),v=N.useRef(),y=N.useCallback(()=>{if(!i)return Sx;const H=!!(i.isInitialized||i.initializedStoreOnce)&&u.every(C=>ex(C,i,l)),B=t.lng||i.language,z=g.current,ae=v.current;if(ae&&ae.ready===H&&ae.lng===B&&ae.keyPrefix===d&&ae.revision===z)return ae;const fe={t:i.getFixedT(B,l.nsMode==="fallback"?u:u[0],d),ready:H,lng:B,keyPrefix:d,revision:z};return v.current=fe,fe},[i,u,d,l,t.lng]),[w,f]=N.useState(0),{t:p,ready:h}=wx.useSyncExternalStore(x,y,y);N.useEffect(()=>{if(i&&!h&&!o){const H=()=>f(B=>B+1);t.lng?Ld(i,t.lng,u,H):Xi(i,u,H)}},[i,t.lng,u,h,o,w]);const b=i||{},S=N.useRef(null),T=N.useRef(),j=H=>{const B=Object.getOwnPropertyDescriptors(H);B.__original&&delete B.__original;const z=Object.create(Object.getPrototypeOf(H),B);if(!Object.prototype.hasOwnProperty.call(z,"__original"))try{Object.defineProperty(z,"__original",{value:H,writable:!1,enumerable:!1,configurable:!1})}catch{}return z},D=N.useMemo(()=>{const H=b,B=H==null?void 0:H.language;let z=H;H&&(S.current&&S.current.__original===H?T.current!==B?(z=j(H),S.current=z,T.current=B):z=S.current:(z=j(H),S.current=z,T.current=B));const ae=[p,z,h];return ae.t=p,ae.i18n=z,ae.ready=h,ae},[p,b,h,b.resolvedLanguage,b.language,b.languages]);if(i&&o&&!h)throw new Promise(H=>{const B=()=>H();t.lng?Ld(i,t.lng,u,B):Xi(i,u,B)});return D};function Cx(){const{t:e,i18n:t}=F(),[a,r]=N.useState(!1),[s,i]=N.useState(!1),l=N.useRef(null),o=[{key:"about",href:"/about"},{key:"markets",href:"/markets"},{key:"accounts",href:"/accounts"},{key:"platforms",href:"/platforms/metatrader-5"},{key:"contact",href:"/contact"}],d=m=>{t.changeLanguage(m),i(!1)},c=()=>t.language==="en"?"English":"简体中文";return N.useEffect(()=>{const m=u=>{l.current&&!l.current.contains(u.target)&&i(!1)};return s&&document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}},[s]),n.jsxs("header",{className:"sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gold-600/30",children:[n.jsx("div",{className:"bg-gradient-to-r from-gray-50 via-white to-gray-50 text-gray-700 text-xs py-1.5 hidden sm:block border-b border-gold-200",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center",children:[n.jsx("span",{className:"font-medium",children:e("header.tagline")}),n.jsxs("div",{className:"flex items-center space-x-4 relative",children:[n.jsxs("div",{className:"relative",ref:l,children:[n.jsxs("span",{className:"flex items-center cursor-pointer hover:text-gold-600 transition-colors duration-200",onClick:()=>i(!s),children:[n.jsx(xn,{className:"w-3 h-3 mr-1"})," ",c()," ",n.jsx(Ss,{className:"w-3 h-3 ml-1"})]}),s&&n.jsxs("div",{className:"absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 z-50",children:[n.jsx("button",{onClick:()=>d("zh-CN"),className:`block w-full text-left px-4 py-2 text-sm hover:bg-gold-50 transition-colors ${t.language==="zh-CN"?"text-gold-600 font-medium":"text-gray-700"}`,children:"简体中文"}),n.jsx("button",{onClick:()=>d("en"),className:`block w-full text-left px-4 py-2 text-sm hover:bg-gold-50 transition-colors ${t.language==="en"?"text-gold-600 font-medium":"text-gray-700"}`,children:"English"})]})]}),n.jsx("button",{className:"hover:text-gold-600 transition-colors duration-200",children:e("header.login")})]})]})}),n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"flex justify-between items-center h-16 md:h-20",children:[n.jsx("div",{className:"flex-shrink-0 flex items-center",children:n.jsx(I,{to:"/",className:"flex items-center group",children:n.jsx("img",{src:"/images/logo.png",alt:"BKS MARKETS",className:"h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"})})}),n.jsx("nav",{className:"hidden md:flex space-x-6 lg:space-x-8",children:o.map(m=>n.jsxs(I,{to:m.href,className:"text-gray-700 hover:text-gold-600 font-medium text-sm lg:text-base transition-all duration-200 relative group",children:[e(`header.nav.${m.key}`),n.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"})]},m.key))}),n.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[n.jsx("button",{className:"text-gray-600 hover:text-gold-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gold-50",children:n.jsx(Nv,{className:"w-5 h-5"})}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",target:"_blank",rel:"noopener noreferrer",className:"bg-gold-gradient text-black px-5 py-2.5 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 text-sm transform hover:scale-105",children:e("header.openAccount")})]}),n.jsx("div",{className:"md:hidden flex items-center",children:n.jsx("button",{onClick:()=>r(!a),className:"text-gray-700 hover:text-gold-600 p-2",children:a?n.jsx(Fv,{className:"w-6 h-6"}):n.jsx(gv,{className:"w-6 h-6"})})})]})}),a&&n.jsx("div",{className:"md:hidden bg-white/98 backdrop-blur-sm border-t border-gold-200 absolute w-full shadow-xl",children:n.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[o.map(m=>n.jsx(I,{to:m.href,onClick:()=>r(!1),className:"block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gold-50 transition-all duration-200",children:e(`header.nav.${m.key}`)},m.key)),n.jsx("div",{className:"mt-4 px-3",children:n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center bg-gold-gradient text-black px-4 py-3 rounded-lg font-bold hover:shadow-gold transition-all duration-300",children:e("header.openAccount")})})]})})]})}function Tx(){const{t:e}=F();return n.jsxs("footer",{className:"bg-gradient-to-b from-gray-50 to-white text-gray-600 text-sm border-t border-gold-200",children:[n.jsx("div",{className:"border-b border-gold-200",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10",children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 items-center",children:[n.jsxs("div",{children:[n.jsx("div",{className:"flex-shrink-0 flex items-center",children:n.jsx(I,{to:"/",className:"flex items-center group",children:n.jsx("img",{src:"/logo.png",alt:"BKS MARKETS",className:"h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"})})}),n.jsx("p",{className:"text-gray-600",children:e("components.footer.tagline")})]}),n.jsxs("div",{className:"md:col-span-2 text-center md:text-right",children:[n.jsx("h3",{className:"text-gray-900 text-lg font-bold mb-2",children:e("components.footer.contactUs")}),n.jsx("p",{className:"mb-4 text-gray-600",children:e("components.footer.supportHours")}),n.jsxs("div",{className:"flex flex-wrap justify-center md:justify-end gap-4",children:[n.jsx(I,{to:"/contact",className:"px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-all duration-200 border border-gray-300 hover:border-gray-400",children:e("components.footer.contactButton")}),n.jsx(I,{to:"/help",className:"px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-all duration-200 border border-gray-300 hover:border-gray-400",children:e("components.footer.faqButton")})]})]})]})})}),n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:n.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[n.jsxs("div",{children:[n.jsx("h4",{className:"text-gray-900 font-bold mb-4",children:e("components.footer.aboutUs")}),n.jsxs("ul",{className:"space-y-2",children:[n.jsx("li",{children:n.jsx(I,{to:"/about",className:"hover:text-gray-900 transition-colors duration-200",children:e("components.footer.aboutBks")})}),n.jsx("li",{children:n.jsx(I,{to:"/why",className:"hover:text-gray-900 transition-colors duration-200",children:e("components.footer.whyBks")})}),n.jsx("li",{children:n.jsx(I,{to:"/contact",className:"hover:text-gray-900 transition-colors duration-200",children:e("components.footer.contactButton")})})]})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"text-gray-900 font-bold mb-4",children:e("components.footer.tradingMarkets")}),n.jsxs("ul",{className:"space-y-2",children:[n.jsx("li",{children:n.jsx(I,{to:"/markets/forex",className:"hover:text-gray-900 transition-colors duration-200",children:e("components.footer.forex")})}),n.jsx("li",{children:n.jsx(I,{to:"/markets/commodities",className:"hover:text-gray-900 transition-colors duration-200",children:e("components.footer.commodities")})}),n.jsx("li",{children:n.jsx(I,{to:"/markets/indices",className:"hover:text-gray-900 transition-colors duration-200",children:e("components.footer.indices")})}),n.jsx("li",{children:n.jsx(I,{to:"/markets/stocks",className:"hover:text-gray-900 transition-colors duration-200",children:e("components.footer.stocks")})})]})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"text-gray-900 font-bold mb-4",children:e("components.footer.platforms")}),n.jsxs("ul",{className:"space-y-2",children:[n.jsx("li",{children:n.jsx(I,{to:"/platforms/metatrader-5",className:"hover:text-gray-900 transition-colors duration-200",children:e("components.footer.mt5")})}),n.jsx("li",{children:n.jsx(I,{to:"/platforms/mt5-iphone",className:"hover:text-gray-900 transition-colors duration-200",children:e("components.footer.mt5iPhone")})}),n.jsx("li",{children:n.jsx(I,{to:"/platforms/mt5-android",className:"hover:text-gray-900 transition-colors duration-200",children:e("components.footer.mt5Android")})}),n.jsx("li",{children:n.jsx(I,{to:"/platforms/mt5-mac",className:"hover:text-gray-900 transition-colors duration-200",children:e("components.footer.mt5Mac")})})]})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"text-gray-900 font-bold mb-4",children:e("components.footer.customerService")}),n.jsxs("ul",{className:"space-y-2",children:[n.jsx("li",{children:n.jsx(I,{to:"/funding",className:"hover:text-gray-900 transition-colors duration-200",children:e("components.footer.accountFunding")})}),n.jsx("li",{children:n.jsx(I,{to:"/withdrawal",className:"hover:text-gray-900 transition-colors duration-200",children:e("components.footer.accountWithdrawal")})}),n.jsx("li",{children:n.jsx(I,{to:"/help",className:"hover:text-gray-900 transition-colors duration-200",children:e("components.footer.helpCenter")})})]})]})]})}),n.jsx("div",{className:"bg-gray-50 py-8 border-t border-gold-200",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{className:"mb-6 pb-6 border-b border-gray-300",children:[n.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:e("components.footer.regulatoryInfo")}),n.jsx("p",{className:"text-xs text-gray-500 mt-2",children:e("components.footer.companyAddress")})]}),n.jsxs("div",{className:"mb-6 pb-6 border-b border-gray-300",children:[n.jsx("h4",{className:"text-sm font-bold text-gray-900 mb-3",children:e("components.footer.termsOfService")}),n.jsxs("div",{className:"text-xs text-gray-600 space-y-3 leading-relaxed",children:[n.jsxs("div",{children:[n.jsx("p",{className:"font-semibold text-gray-700 mb-1",children:e("components.footer.importantNotice")}),n.jsx("p",{children:e("components.footer.importantNoticeText")})]}),n.jsxs("div",{children:[n.jsx("p",{className:"font-semibold text-gray-700 mb-1",children:e("components.footer.serviceRange")}),n.jsx("p",{children:e("components.footer.serviceRangeText")})]}),n.jsxs("div",{children:[n.jsx("p",{className:"font-semibold text-gray-700 mb-1",children:e("components.footer.notServedJurisdictions")}),n.jsx("p",{children:e("components.footer.notServedJurisdictionsText")}),n.jsx("p",{className:"mt-1 text-gray-500",children:e("components.footer.notServedList")}),n.jsx("p",{className:"mt-1",children:e("components.footer.notServedNote")})]}),n.jsxs("div",{children:[n.jsx("p",{className:"font-semibold text-gray-700 mb-1",children:e("components.footer.riskWarning")}),n.jsx("p",{children:e("components.footer.riskWarningText")})]}),n.jsxs("div",{children:[n.jsx("p",{className:"font-semibold text-gray-700 mb-1",children:e("components.footer.legalLiability")}),n.jsx("p",{children:e("components.footer.legalLiabilityText")})]}),n.jsxs("div",{children:[n.jsx("p",{className:"font-semibold text-gray-700 mb-1",children:e("components.footer.others")}),n.jsx("p",{children:e("components.footer.othersText")})]})]})]}),n.jsxs("div",{className:"mt-8 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center",children:[n.jsx("p",{className:"text-xs text-gray-500",children:e("components.footer.copyright",{year:new Date().getFullYear()})}),n.jsx("div",{className:"flex space-x-4 mt-4 md:mt-0",children:n.jsx(I,{to:"/legal",className:"text-xs text-gray-500 hover:text-gray-700",children:e("components.footer.legalDocuments")})})]})]})})]})}function Dx(){const{t:e}=F();return n.jsxs("div",{className:"relative bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-gold-50/50 via-transparent to-gold-50/50 pointer-events-none"}),n.jsx("div",{className:"max-w-7xl mx-auto relative z-10",children:n.jsx("div",{className:"relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-10 md:pt-20 px-4 sm:px-6 lg:px-8",children:n.jsx("main",{className:"mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28",children:n.jsxs("div",{className:"sm:text-center lg:text-left",children:[n.jsxs("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl",children:[n.jsx("span",{className:"block xl:inline",children:e("hero.title1")})," ",n.jsx("span",{className:"block text-gold-600 xl:inline",children:e("hero.title2")})]}),n.jsx("p",{className:"mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 leading-relaxed",children:e("hero.description")}),n.jsx("div",{className:"mt-8 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4",children:n.jsxs("div",{className:"flex flex-col items-start space-y-2",children:[n.jsxs("div",{className:"flex items-center",children:[n.jsx("span",{className:"h-2 w-2 bg-gold-500 rounded-full mr-2"}),n.jsx("span",{className:"text-gray-700 font-medium",children:e("hero.feature1")})]}),n.jsxs("div",{className:"flex items-center",children:[n.jsx("span",{className:"h-2 w-2 bg-gold-500 rounded-full mr-2"}),n.jsx("span",{className:"text-gray-700 font-medium",children:e("hero.feature2")})]}),n.jsxs("div",{className:"flex items-center",children:[n.jsx("span",{className:"h-2 w-2 bg-gold-500 rounded-full mr-2"}),n.jsx("span",{className:"text-gray-700 font-medium",children:e("hero.feature3")})]})]})}),n.jsxs("div",{className:"mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start",children:[n.jsx("div",{className:"rounded-md shadow-lg",children:n.jsx("a",{href:"#",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gold-gradient hover:shadow-gold-lg md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105",children:e("hero.openAccount")})}),n.jsx("div",{className:"mt-3 sm:mt-0 sm:ml-3",children:n.jsx("a",{href:"#",className:"w-full flex items-center justify-center px-8 py-3 border border-gold-600 text-base font-medium rounded-md text-gold-600 bg-transparent hover:bg-gold-50 hover:border-gold-500 md:py-4 md:text-lg md:px-10 transition-all duration-300",children:e("hero.demoTrading")})})]})]})})})}),n.jsx("div",{className:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-8",children:n.jsx("img",{className:"h-56 w-full object-contain sm:h-72 md:h-96 lg:w-full lg:h-full",src:"https://forex.z.com/hk/static/images/tc/top/2025_slogan.png",alt:"BKS MARKETS Trading App"})})]})}const Mx=({pair:e,sell:t,buy:a,spread:r,icon:s,trend:i})=>{const{t:l}=F();return n.jsxs("div",{className:"bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gold-200 hover:border-gold-400 overflow-hidden transform hover:-translate-y-1",children:[n.jsxs("div",{className:"p-4 border-b border-gold-200 flex justify-between items-center bg-gray-50",children:[n.jsxs("div",{className:"flex items-center",children:[n.jsx("img",{src:s,alt:e,className:"w-8 h-8 mr-3"}),n.jsx("h3",{className:"font-bold text-lg text-gray-900",children:e})]}),n.jsxs("span",{className:"text-xs font-semibold bg-gold-100 text-gold-700 px-2.5 py-1 rounded border border-gold-300",children:[l("components.liveRates.spread"),": ",r]})]}),n.jsxs("div",{className:"p-4 grid grid-cols-2 gap-4",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-xs text-gray-500 mb-1",children:l("components.liveRates.sell")}),n.jsx("div",{className:`text-xl font-bold ${i==="up"?"text-red-600":"text-gold-600"} price-update`,children:t}),n.jsx("button",{className:"w-full mt-2 py-1.5 bg-gray-100 text-gray-700 text-xs font-bold rounded hover:bg-gray-200 transition-all duration-200 border border-gray-300",children:l("components.liveRates.sellButton")})]}),n.jsxs("div",{className:"text-center border-l border-gold-200",children:[n.jsx("div",{className:"text-xs text-gray-500 mb-1",children:l("components.liveRates.buy")}),n.jsx("div",{className:`text-xl font-bold ${i==="up"?"text-red-600":"text-gold-600"} price-update`,children:a}),n.jsx("button",{className:"w-full mt-2 py-1.5 bg-gold-gradient text-black text-xs font-bold rounded hover:shadow-gold transition-all duration-200",children:l("components.liveRates.buyButton")})]})]})]})};function Ex(){const{t:e}=F(),t=[{pair:e("components.liveRates.eurUsd"),sell:"1.15254",buy:"1.15264",spread:"1.0",icon:"https://forex.z.com/hk/static/images/common/prod/icon-prod-EURUSD.png",trend:"up"},{pair:e("components.liveRates.usdJpy"),sell:"156.545",buy:"156.555",spread:"1.0",icon:"https://forex.z.com/hk/static/images/common/prod/icon-prod-USDJPY.png",trend:"down"},{pair:e("components.liveRates.gbpUsd"),sell:"1.31044",buy:"1.31060",spread:"1.6",icon:"https://forex.z.com/hk/static/images/common/prod/icon-prod-GBPUSD.png",trend:"up"},{pair:e("components.liveRates.audUsd"),sell:"0.64638",buy:"0.64653",spread:"1.5",icon:"https://forex.z.com/hk/static/images/common/prod/icon-prod-AUDUSD.png",trend:"down"}];return n.jsx("section",{className:"py-12 bg-white",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{className:"flex justify-between items-end mb-8",children:[n.jsxs("div",{children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:e("components.liveRates.title")}),n.jsx("p",{className:"mt-2 text-gray-600",children:e("components.liveRates.subtitle")})]}),n.jsxs("a",{href:"#",className:"hidden sm:flex items-center text-gold-600 hover:text-gold-700 font-medium transition-colors",children:[e("components.liveRates.morePairs")," ",n.jsx(fu,{className:"ml-1 w-4 h-4"})]})]}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:t.map((a,r)=>n.jsx(Mx,{...a},r))})]})})}const Ax=({icon:e,title:t,description:a,link:r})=>{const{t:s}=F();return n.jsxs("div",{className:"flex flex-col items-start p-6 bg-white rounded-lg border border-gold-200 hover:border-gold-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 shadow-sm",children:[n.jsx("div",{className:"p-3 bg-gold-50 rounded-full mb-4",children:n.jsx(e,{className:"w-8 h-8 text-gold-600"})}),n.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-2",children:t}),n.jsx("p",{className:"text-gray-600 mb-4 flex-grow text-sm leading-relaxed",children:a}),n.jsxs("a",{href:r,className:"text-gold-600 font-medium text-sm hover:text-gold-700 transition-colors duration-200 flex items-center group",children:[s("common.learnMore")," ",n.jsx("span",{className:"ml-1 transform group-hover:translate-x-1 transition-transform duration-200",children:"→"})]})]})};function Fx(){const{t:e}=F(),t=[{icon:gu,title:e("components.features.feature1Title"),description:e("components.features.feature1Description"),link:"#"},{icon:Qe,title:e("components.features.feature2Title"),description:e("components.features.feature2Description"),link:"#"},{icon:ye,title:e("components.features.feature3Title"),description:e("components.features.feature3Description"),link:"#"},{icon:Ze,title:e("components.features.feature4Title"),description:e("components.features.feature4Description"),link:"#"},{icon:xn,title:e("components.features.feature5Title"),description:e("components.features.feature5Description"),link:"#"}];return n.jsx("section",{className:"py-16 bg-white",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{className:"text-center mb-12",children:[n.jsxs("h2",{className:"text-3xl font-extrabold text-gray-900 sm:text-4xl",children:[e("components.features.title")," ",n.jsx("span",{className:"text-gold-600",children:e("components.features.titleHighlight")}),"?"]}),n.jsx("p",{className:"mt-4 text-xl text-gray-600 max-w-3xl mx-auto",children:e("components.features.subtitle")})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[t.map((a,r)=>n.jsx(Ax,{...a},r)),n.jsxs("div",{className:"flex flex-col items-start p-6 bg-gold-gradient rounded-lg text-black shadow-gold-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 gold-shimmer opacity-30"}),n.jsxs("div",{className:"relative z-10 w-full",children:[n.jsx("h3",{className:"text-xl font-bold mb-3",children:e("components.features.specialCardTitle")}),n.jsx("p",{className:"text-gold-900/90 mb-6 text-sm font-medium",children:e("components.features.specialCardDescription")}),n.jsxs("ul",{className:"space-y-3 mb-6 text-sm",children:[n.jsxs("li",{className:"flex items-center",children:[n.jsx("div",{className:"w-2 h-2 bg-gold-900 rounded-full mr-2 shadow-sm"}),n.jsx("span",{className:"font-medium",children:e("components.features.dailyInterest")})]}),n.jsxs("li",{className:"flex items-center",children:[n.jsx("div",{className:"w-2 h-2 bg-gold-900 rounded-full mr-2 shadow-sm"}),n.jsx("span",{className:"font-medium",children:e("components.features.buySellAnytime")})]}),n.jsxs("li",{className:"flex items-center",children:[n.jsx("div",{className:"w-2 h-2 bg-gold-900 rounded-full mr-2 shadow-sm"}),n.jsx("span",{className:"font-medium",children:e("components.features.currencyPairs")})]})]}),n.jsx("a",{href:"#",className:"mt-auto w-full bg-black/80 text-gold-400 text-center py-2.5 rounded font-bold hover:bg-black hover:text-gold-300 transition-all duration-300 shadow-lg",children:e("components.features.viewInterestTable")})]})]})]})]})})}const Px=({title:e,description:t,image:a,icon:r,reverse:s})=>{const{t:i}=F();return n.jsxs("div",{className:`flex flex-col md:flex-row ${s?"md:flex-row-reverse":""} items-center gap-8 py-12 border-b border-gold-200 last:border-0`,children:[n.jsx("div",{className:"w-full md:w-1/2 flex justify-center",children:n.jsx("img",{src:a,alt:e,className:"max-h-64 object-contain hover:scale-105 transition-transform duration-500"})}),n.jsxs("div",{className:"w-full md:w-1/2 text-center md:text-left",children:[n.jsx("div",{className:"flex justify-center md:justify-start mb-4",children:n.jsx("div",{className:"p-3 bg-gold-50 rounded-full",children:n.jsx(r,{className:"w-8 h-8 md:w-10 md:h-10 text-gold-600"})})}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:e}),n.jsx("p",{className:"text-gray-600 mb-6 text-lg",children:t}),n.jsx("a",{href:"#",className:"inline-flex items-center justify-center px-6 py-2.5 border border-gold-600 text-gold-600 font-medium rounded-md hover:bg-gold-50 hover:border-gold-500 hover:text-gold-700 transition-all duration-200",children:i("common.learnMore")})]})]})};function _x(){const{t:e}=F(),t=[{title:e("components.platforms.platform1Title"),description:e("components.platforms.platform1Description"),image:"/images/mt5-img.png",icon:$r,reverse:!1},{title:e("components.platforms.platform2Title"),description:e("components.platforms.platform2Description"),image:"/images/mt-ios-img.png",icon:Ze,reverse:!0},{title:e("components.platforms.platform3Title"),description:e("components.platforms.platform3Description"),image:"/images/mt-android-img.png",icon:Ze,reverse:!1},{title:e("components.platforms.platform4Title"),description:e("components.platforms.platform4Description"),image:"/images/mt-macos-img.png",icon:zr,reverse:!0}];return n.jsx("section",{className:"py-16 bg-white",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{className:"text-center mb-16",children:[n.jsx("h2",{className:"text-3xl font-extrabold text-gray-900",children:e("components.platforms.title")}),n.jsx("p",{className:"mt-4 text-gray-600",children:e("components.platforms.subtitle")})]}),n.jsx("div",{className:"space-y-4",children:t.map((a,r)=>n.jsx(Px,{...a},r))})]})})}function Lx(){const{t:e}=F(),t=[{date:e("components.news.news1Date"),title:e("components.news.news1Title"),type:"notice"},{date:e("components.news.news2Date"),title:e("components.news.news2Title"),type:"important"},{date:e("components.news.news3Date"),title:e("components.news.news3Title"),type:"notice"},{date:e("components.news.news4Date"),title:e("components.news.news4Title"),type:"notice"},{date:e("components.news.news5Date"),title:e("components.news.news5Title"),type:"notice"}],a=[{title:e("components.news.commentary1"),link:"#"},{title:e("components.news.commentary2"),link:"#"},{title:e("components.news.commentary3"),link:"#"},{title:e("components.news.commentary4"),link:"#"}];return n.jsx("section",{className:"py-16 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex justify-between items-center mb-6 border-b border-gold-200 pb-2",children:[n.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:e("components.news.latestNews")}),n.jsx("a",{href:"#",className:"text-gold-600 text-sm font-medium hover:underline",children:e("components.news.viewAll")})]}),n.jsx("div",{className:"space-y-4",children:t.map((r,s)=>n.jsxs("div",{className:"group flex flex-col sm:flex-row sm:items-center border-b border-gray-200 pb-3 last:border-0",children:[n.jsx("span",{className:"text-gray-500 text-sm w-32 flex-shrink-0",children:r.date}),n.jsx("a",{href:"#",className:`text-gray-700 hover:text-gold-600 font-medium transition-colors ${r.type==="important"?"text-red-600":""}`,children:r.title})]},s))})]}),n.jsxs("div",{className:"bg-gray-50 p-6 rounded-xl border border-gold-200 shadow-lg",children:[n.jsxs("div",{className:"flex items-center mb-6",children:[n.jsx(Nu,{className:"w-5 h-5 text-gold-600 mr-2"}),n.jsx("h2",{className:"text-xl font-bold text-gray-900",children:e("components.news.marketCommentary")})]}),n.jsx("div",{className:"space-y-4",children:a.map((r,s)=>n.jsxs("a",{href:r.link,className:"block bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-gold-400 group transform hover:-translate-y-0.5",children:[n.jsx("h3",{className:"text-gray-800 group-hover:text-gold-600 font-medium line-clamp-2 transition-colors duration-200",children:r.title}),n.jsx("div",{className:"mt-2 flex justify-end",children:n.jsxs("span",{className:"text-gold-600 group-hover:text-gold-700 text-xs flex items-center transition-colors duration-200",children:[e("components.news.readMore")," ",n.jsx(Jg,{className:"w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"})]})})]},s))}),n.jsx("a",{href:"#",className:"block mt-6 text-center text-gold-600 font-medium hover:text-gold-700 transition-colors duration-200",children:e("components.news.moreAnalysis")})]})]})})})}function Bx(){const{t:e}=F();return n.jsx("section",{className:"py-12 bg-gradient-to-b from-white via-gray-50 to-white border-y border-gold-200",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("h2",{className:"text-2xl font-bold text-gray-900 mb-8 text-center",children:[n.jsx("span",{className:"text-gold-600",children:e("components.promotions.title")}),e("components.promotions.titleHighlight")]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[n.jsx("a",{href:"#",className:"group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gold-200 hover:border-gold-400",children:n.jsxs("div",{className:"relative",children:[n.jsx("img",{src:"https://forex.z.com/hk/static/images/tc/top/slide202511.jpg",alt:"新开户奖赏",className:"w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"}),n.jsxs("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4",children:[n.jsx("h3",{className:"text-white font-bold text-lg group-hover:text-gold-400 transition-colors duration-200",children:e("components.promotions.promo1Title")}),n.jsx("p",{className:"text-gray-200 text-sm",children:e("components.promotions.promo1Description")})]})]})}),n.jsx("a",{href:"#",className:"group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gold-200 hover:border-gold-400",children:n.jsxs("div",{className:"relative",children:[n.jsx("img",{src:"https://forex.z.com/hk/static/images/tc/forex_trading/calendar2026_online.jpg",alt:"2026财经月历",className:"w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"}),n.jsxs("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4",children:[n.jsx("h3",{className:"text-white font-bold text-lg group-hover:text-gold-400 transition-colors duration-200",children:e("components.promotions.promo2Title")}),n.jsx("p",{className:"text-gray-200 text-sm",children:e("components.promotions.promo2Description")})]})]})})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8",children:[n.jsx("a",{href:"#",className:"block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gold-200 hover:border-gold-400",children:n.jsx("img",{src:"https://forex.z.com/hk/static/images/tc/top/top_side_banner_02.jpg",alt:"3点识外汇",className:"w-full h-auto"})}),n.jsx("a",{href:"#",className:"block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gold-200 hover:border-gold-400",children:n.jsx("img",{src:"https://forex.z.com/hk/static/images/tc/top/top_side_banner_03.jpg",alt:"CHATGDP",className:"w-full h-auto"})}),n.jsx("a",{href:"#",className:"block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gold-200 hover:border-gold-400",children:n.jsx("img",{src:"https://forex.z.com/hk/static/images/tc/top/top_side_banner_01.webp",alt:"免费外汇工作坊",className:"w-full h-auto"})})]})]})})}function K({title:e,subtitle:t,children:a,bannerClass:r="banner_01",bannerImage:s}){const{t:i}=F(),l=s?{backgroundImage:`url(${s})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:{};return n.jsxs("div",{className:"min-h-screen flex flex-col bg-white",children:[e&&n.jsx("div",{className:`container-fluid ${r} ${s?"":"bg-gradient-to-r from-gold-50 to-gold-100"} py-16 md:py-24`,style:l,children:n.jsx("div",{className:"container mx-auto px-4",children:n.jsx("div",{className:"row justify-center",children:n.jsxs("div",{className:"col-sm-8 text-center",children:[n.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:e}),t&&n.jsx("h4",{className:"text-lg md:text-xl text-white mb-6",children:t}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"btn bg-gold-gradient text-black px-8 py-3 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 inline-block mt-4",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:i("common.startTrading")})})]})})})}),n.jsx("div",{className:"flex-grow",children:a})]})}function Ox(){const{t:e}=F(),t=[{key:"coreValue1",icon:Qe},{key:"coreValue2",icon:gu},{key:"coreValue3",icon:Sv},{key:"coreValue4",icon:gd},{key:"coreValue5",icon:xd},{key:"coreValue6",icon:$t},{key:"coreValue7",icon:ye},{key:"coreValue8",icon:Mv}];return n.jsxs(K,{title:e("pages.about.title"),subtitle:e("pages.about.subtitle"),bannerImage:"/images/about-us-banner.png",children:[n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12",children:[n.jsxs("div",{children:[n.jsxs("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-6",children:[e("pages.about.leadingCfd")," ",n.jsx("span",{className:"text-gold-600",children:e("pages.about.cfdTradingPlatform")})]}),n.jsx("p",{className:"text-lg text-gray-700 mb-4 leading-relaxed",children:e("pages.about.description1")}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:e("pages.about.description2")})]}),n.jsxs("div",{className:"bg-gradient-to-br from-gold-50 to-white p-8 rounded-xl border border-gold-200 shadow-lg",children:[n.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:e("pages.about.professionalTeam")}),n.jsx("p",{className:"text-gray-700 leading-relaxed",children:e("pages.about.teamDescription")})]})]})})}),n.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center mb-12",children:[n.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-6",children:[e("pages.about.whyBksMarkets")," ",n.jsx("span",{className:"text-gold-600",children:e("pages.about.whyBksMarkets2")}),"?"]}),n.jsxs("div",{className:"max-w-4xl mx-auto space-y-4",children:[n.jsx("p",{className:"text-lg md:text-xl text-gray-700 leading-relaxed",children:e("pages.about.whyDescription1")}),n.jsx("p",{className:"text-lg md:text-xl text-gray-700 leading-relaxed",children:e("pages.about.whyDescription2")})]})]})})}),n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{className:"mb-12",children:[n.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-6",children:e("pages.about.missionStatement")}),n.jsx("div",{className:"bg-gradient-to-r from-gold-50 to-white p-8 rounded-xl border-l-4 border-gold-600 shadow-md",children:n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:e("pages.about.missionDescription")})})]}),n.jsxs("div",{className:"mb-12",children:[n.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-8",children:e("pages.about.coreValues")}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:t.map((a,r)=>{const s=a.icon;return n.jsxs("div",{className:"flex flex-col items-center p-6 bg-white rounded-lg border border-gold-200 hover:border-gold-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1",children:[n.jsx("div",{className:"p-3 bg-gold-50 rounded-full mb-4",children:n.jsx(s,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-base font-semibold text-gray-900 text-center",children:e(`pages.about.${a.key}`)})]},r)})})]}),n.jsxs("div",{className:"space-y-12",children:[n.jsx("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:n.jsxs("div",{className:"flex items-start",children:[n.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4 flex-shrink-0",children:n.jsx(Qe,{className:"w-6 h-6 text-gold-600"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-gray-900 mb-4",children:e("pages.about.complianceManagement")}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:e("pages.about.complianceDescription")})]})]})}),n.jsx("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:n.jsxs("div",{className:"flex items-start",children:[n.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4 flex-shrink-0",children:n.jsx(gd,{className:"w-6 h-6 text-gold-600"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-gray-900 mb-4",children:e("pages.about.audit")}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:e("pages.about.auditDescription")})]})]})}),n.jsx("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:n.jsxs("div",{className:"flex items-start",children:[n.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4 flex-shrink-0",children:n.jsx(xd,{className:"w-6 h-6 text-gold-600"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-gray-900 mb-4",children:e("pages.about.confidentiality")}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:e("pages.about.confidentialityDescription")})]})]})})]})]})}),n.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:e("common.startTrading")}),n.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:[e("common.trustedGlobal")," ",n.jsx("span",{className:"text-gold-600",children:e("common.cfdBroker")})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openAccount")})}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openDemoAccount")})})]})]})})})]})}function Ix(){const{t:e}=F();return n.jsxs(K,{title:e("pages.contact.title"),subtitle:e("pages.contact.subtitle"),bannerImage:"/images/careers-banner.jpg",children:[n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{className:"text-center mb-12",children:[n.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-4",children:e("pages.contact.questionOrHelp")}),n.jsx("p",{className:"text-lg md:text-xl text-gray-700 max-w-3xl mx-auto",children:e("pages.contact.helpDescription")})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-12",children:[n.jsxs("div",{className:"bg-gradient-to-br from-gold-50 to-white p-8 rounded-xl border border-gold-200 shadow-lg",children:[n.jsxs("div",{className:"flex items-center mb-4",children:[n.jsx("div",{className:"p-3 bg-gold-100 rounded-full mr-4",children:n.jsx(hv,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-xl font-bold text-gray-900",children:e("pages.contact.emailInquiry")})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-sm text-gray-600 mb-2",children:e("pages.contact.customerRelations")}),n.jsx("a",{href:"mailto:cs@bksmarkets.com",className:"text-gold-600 hover:text-gold-700 font-semibold text-lg transition-colors duration-200",children:"cs@bksmarkets.com"})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-sm text-gray-600 mb-2",children:e("pages.contact.technicalSupport")}),n.jsx("a",{href:"mailto:support.cn@bksmarkets.com",className:"text-gold-600 hover:text-gold-700 font-semibold text-lg transition-colors duration-200",children:"support.cn@bksmarkets.com"})]})]})]}),n.jsxs("div",{className:"bg-white p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[n.jsxs("div",{className:"flex items-center mb-4",children:[n.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:n.jsx(vu,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-xl font-bold text-gray-900",children:e("pages.contact.serviceHours")})]}),n.jsx("p",{className:"text-gray-700 leading-relaxed",children:e("pages.contact.serviceHoursDescription")})]})]}),n.jsx("div",{className:"text-center mb-12",children:n.jsx("img",{src:"/images/contact-us-mail.png",alt:"Contact Us",className:"mx-auto max-w-md rounded-lg shadow-md"})})]})}),n.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center mb-12",children:[n.jsxs("div",{className:"flex items-center justify-center mb-4",children:[n.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:n.jsx(xn,{className:"w-8 h-8 text-gold-600"})}),n.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-gray-900",children:e("common.globalOffices")})]}),n.jsx("p",{className:"text-lg md:text-xl text-gray-700 max-w-3xl mx-auto",children:e("pages.contact.globalOfficesDescription")})]})})}),n.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:e("common.startTrading")}),n.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:[e("common.trustedGlobal")," ",n.jsx("span",{className:"text-gold-600",children:e("common.cfdBroker")})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openAccount")})}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openDemoAccount")})})]})]})})})]})}function Rx(){const{t:e}=F(),t=[{name:"ECN",popular:!0,platform:"Meta Trader",commission:"$7.0",spread:"0.1",link:"/accounts/raw-spread"},{name:e("pages.accounts.standardAccount"),popular:!1,platform:"Meta Trader",commission:"$0",spread:"1.0",link:"/accounts/standard"}],a=[{name:e("pages.accounts.ecnAccount"),link:"/accounts/raw-spread",icon:ye},{name:e("pages.accounts.standardAccount"),link:"/accounts/standard",icon:Kr},{name:e("pages.accounts.accountFunding"),link:"/funding",icon:Ar},{name:e("pages.accounts.withdrawal"),link:"/withdrawal",icon:fu}];return n.jsxs(K,{title:e("pages.accounts.title"),subtitle:e("pages.accounts.subtitle"),bannerImage:"/images/accounts_banner.jpg",children:[n.jsx("section",{className:"py-8 bg-white border-b border-gray-200",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:a.map((r,s)=>{const i=r.icon;return n.jsxs(I,{to:r.link,className:"flex items-center px-6 py-3 bg-white border border-gray-300 rounded-full hover:border-gold-400 hover:bg-gold-50 transition-all duration-300 text-gray-700 hover:text-gold-600",children:[n.jsx(i,{className:"w-4 h-4 mr-2"}),n.jsx("span",{className:"font-medium",children:r.name})]},s)})})})}),n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto",children:t.map((r,s)=>n.jsxs("div",{className:`relative bg-white rounded-xl border-2 ${r.popular?"border-gold-400 shadow-gold-lg":"border-gray-200 shadow-md"} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`,children:[r.popular&&n.jsx("div",{className:"absolute -top-4 left-1/2 transform -translate-x-1/2",children:n.jsx("span",{className:"bg-gold-gradient text-black px-4 py-1 rounded-full text-sm font-bold",children:e("common.popular")})}),n.jsxs("div",{className:"p-8",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("p",{className:"text-sm text-gray-600 mb-2",children:e("common.account")}),n.jsx("h2",{className:"text-4xl font-bold text-gray-900",children:r.name})]}),n.jsxs("div",{className:"space-y-4 mb-8",children:[n.jsxs("div",{className:"flex justify-between items-center py-3 border-b border-gray-100",children:[n.jsx("span",{className:"text-gray-600",children:e("common.tradingPlatform")}),n.jsx("span",{className:"font-semibold text-gray-900",children:r.platform})]}),n.jsxs("div",{className:"flex justify-between items-center py-3 border-b border-gray-100",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-gray-600",children:e("common.commission")}),n.jsx("p",{className:"text-xs text-gray-500",children:e("common.perLotPerSide")})]}),n.jsx("span",{className:"font-bold text-2xl text-gold-600",children:r.commission})]}),n.jsxs("div",{className:"flex justify-between items-center py-3",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-gray-600",children:e("common.spreadFrom")}),n.jsx("p",{className:"text-xs text-gray-500",children:e("common.points")})]}),n.jsx("span",{className:"font-bold text-2xl text-gold-600",children:r.spread})]})]}),n.jsxs("div",{className:"text-center space-y-3",children:[n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",target:"_blank",rel:"noopener noreferrer",className:`block w-full py-3 px-6 rounded-full font-bold transition-all duration-300 ${r.popular?"bg-gold-gradient text-black hover:shadow-gold-lg":"bg-gray-900 text-white hover:bg-gray-800"}`,children:e("pages.accounts.openAccount")}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",target:"_blank",rel:"noopener noreferrer",className:"block text-sm text-gray-600 hover:text-gold-600 transition-colors duration-200",children:e("pages.accounts.openDemoAccount")})]})]})]},s))})})}),n.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:e("pages.accounts.tradeEcn")}),n.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:n.jsx("span",{className:"text-gold-600",children:e("pages.accounts.spreadFrom01")})}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openAccount")})}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openDemoAccount")})})]})]})})}),n.jsx("section",{className:"py-12 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[n.jsx("div",{className:"flex-1 min-w-[250px]",children:n.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4",children:e("common.useApp")})}),n.jsx("div",{className:"flex-shrink-0",children:n.jsx("img",{src:"/images/iphones.png",alt:"BKS Markets App",className:"h-48 object-contain"})}),n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/appleStore.png",alt:"Download on App Store",className:"h-12"})}),n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/GoogleStore.png",alt:"Get it on Google Play",className:"h-12"})})]})]})})})]})}function Ux(){const{t:e}=F(),t=[{name:e("pages.rawSpreadAccount.ecnAccount"),link:"/accounts/raw-spread",active:!0},{name:e("pages.rawSpreadAccount.standardAccount"),link:"/accounts/standard"},{name:e("pages.rawSpreadAccount.accountFunding"),link:"/funding"},{name:e("pages.rawSpreadAccount.withdrawal"),link:"/withdrawal"}],a=[e("pages.rawSpreadAccount.spreadFrom01"),e("pages.rawSpreadAccount.fastExecution"),e("pages.rawSpreadAccount.leverage1400"),e("pages.rawSpreadAccount.highLiquidity"),e("pages.rawSpreadAccount.metatrader5")],r=[{title:e("pages.rawSpreadAccount.fastExecutionTitle"),description:e("pages.rawSpreadAccount.fastExecutionDescription"),additional:e("pages.rawSpreadAccount.fastExecutionAdditional"),icon:$t},{title:e("pages.rawSpreadAccount.spreadFrom01Title"),description:e("pages.rawSpreadAccount.spreadFrom01Description"),additional:e("pages.rawSpreadAccount.spreadFrom01Additional"),icon:ye},{title:e("pages.rawSpreadAccount.noTradingRestrictions"),description:e("pages.rawSpreadAccount.noTradingRestrictionsDescription"),additional:e("pages.rawSpreadAccount.noTradingRestrictionsAdditional"),icon:Qe},{title:e("pages.rawSpreadAccount.level2Pricing"),description:e("pages.rawSpreadAccount.level2PricingDescription"),icon:ye}],s=[{title:e("pages.rawSpreadAccount.flexibleFundingTitle"),description:e("pages.rawSpreadAccount.flexibleFundingDescription"),icon:Ar},{title:e("pages.rawSpreadAccount.flexibleLotSizeTitle"),description:e("pages.rawSpreadAccount.flexibleLotSizeDescription"),icon:Kr}],i=[{title:e("pages.rawSpreadAccount.currencyPairs"),description:e("pages.rawSpreadAccount.currencyPairsDescription")},{title:e("pages.rawSpreadAccount.leverageUpTo400Title"),description:e("pages.rawSpreadAccount.leverageUpTo400Description")}];return n.jsxs(K,{title:e("pages.rawSpreadAccount.title"),subtitle:e("pages.rawSpreadAccount.subtitle"),children:[n.jsx("section",{className:"py-8 bg-white border-b border-gray-200",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:t.map((l,o)=>n.jsx(I,{to:l.link,className:`px-6 py-3 rounded-full font-medium transition-all duration-300 ${l.active?"bg-gold-gradient text-black hover:shadow-gold-lg":"bg-white border border-gray-300 text-gray-700 hover:border-gold-400 hover:bg-gold-50"}`,children:l.name},o))})})}),n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[n.jsxs("div",{className:"lg:col-span-8",children:[n.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-6",children:e("pages.rawSpreadAccount.lowestSpreadsTitle")}),n.jsx("p",{className:"text-lg text-gray-700 mb-4 leading-relaxed",children:e("pages.rawSpreadAccount.lowestSpreadsDescription1")}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:e("pages.rawSpreadAccount.lowestSpreadsDescription2")})]}),n.jsx("div",{className:"lg:col-span-4",children:n.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 shadow-lg p-6 sticky top-8",children:[n.jsxs("div",{className:"mb-6",children:[n.jsx("p",{className:"text-sm text-gray-500 mb-1",children:e("pages.rawSpreadAccount.cfdTrading")}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:e("pages.rawSpreadAccount.ecnAccount")})]}),n.jsx("div",{className:"space-y-3 mb-8",children:a.map((l,o)=>n.jsxs("div",{className:"flex items-center",children:[n.jsx(Je,{className:"w-5 h-5 text-gold-600 mr-3 flex-shrink-0"}),n.jsx("span",{className:"text-gray-700",children:l})]},o))}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center bg-gold-gradient text-black py-3 px-6 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300",children:e("pages.rawSpreadAccount.openAccount")})]})})]})})}),n.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:r.map((l,o)=>{const d=l.icon;return n.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[n.jsxs("div",{className:"flex items-start mb-4",children:[n.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:n.jsx(d,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:l.title})]}),n.jsx("p",{className:"text-gray-700 leading-relaxed mb-4",children:l.description}),l.additional&&n.jsx("p",{className:"text-gray-700 leading-relaxed",children:l.additional})]},o)})})})}),n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:s.map((l,o)=>{const d=l.icon;return n.jsxs("div",{className:"bg-gradient-to-br from-gold-50 to-white rounded-xl p-8 border border-gold-200",children:[n.jsxs("div",{className:"flex items-center mb-4",children:[n.jsx("div",{className:"p-3 bg-gold-100 rounded-full mr-4",children:n.jsx(d,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:l.title})]}),n.jsx("p",{className:"text-gray-700 leading-relaxed",children:l.description})]},o)})})})}),n.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:i.map((l,o)=>n.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md",children:[n.jsx("h4",{className:"text-xl font-bold text-gray-900 mb-4",children:l.title}),n.jsx("p",{className:"text-gray-700 leading-relaxed",children:l.description})]},o))})})}),n.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:e("pages.rawSpreadAccount.ctaStartTrading")}),n.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:[e("pages.rawSpreadAccount.ctaTradeWithTrusted")," ",n.jsx("span",{className:"text-gold-600",children:e("pages.rawSpreadAccount.forexCfdBroker")})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openAccount")})}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openDemoAccount")})})]})]})})}),n.jsx("section",{className:"py-12 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[n.jsx("div",{className:"flex-1 min-w-[250px]",children:n.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4",children:e("common.useApp")})}),n.jsx("div",{className:"flex-shrink-0",children:n.jsx("img",{src:"/images/iphones.png",alt:"BKS Markets App",className:"h-48 object-contain"})}),n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/appleStore.png",alt:"Download on App Store",className:"h-12"})}),n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/GoogleStore.png",alt:"Get it on Google Play",className:"h-12"})})]})]})})})]})}function Kx(){const{t:e}=F(),t=[{name:e("pages.standardAccount.ecnAccount"),link:"/accounts/raw-spread"},{name:e("pages.standardAccount.standardAccount"),link:"/accounts/standard",active:!0},{name:e("pages.standardAccount.accountFunding"),link:"/funding"},{name:e("pages.standardAccount.withdrawal"),link:"/withdrawal"}],a=[e("pages.standardAccount.enterpriseNetwork"),e("pages.standardAccount.noCommission"),e("pages.standardAccount.fastExecution"),e("pages.standardAccount.leverageUpTo400"),e("pages.standardAccount.highLiquidity"),e("pages.standardAccount.metatrader5")],r=[{title:e("pages.standardAccount.forexCommoditiesIndices"),description:e("pages.standardAccount.forexCommoditiesDescription"),icon:xn},{title:e("pages.standardAccount.leverageUpTo400Title"),description:e("pages.standardAccount.leverageDescription"),icon:ye},{title:e("pages.standardAccount.supportedCurrencies"),description:e("pages.standardAccount.supportedCurrenciesDescription"),icon:Ar}];return n.jsxs(K,{title:e("pages.standardAccount.title"),subtitle:e("pages.standardAccount.subtitle"),children:[n.jsx("section",{className:"py-8 bg-white border-b border-gray-200",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:t.map((s,i)=>n.jsx(I,{to:s.link,className:`px-6 py-3 rounded-full font-medium transition-all duration-300 ${s.active?"bg-gold-gradient text-black hover:shadow-gold-lg":"bg-white border border-gray-300 text-gray-700 hover:border-gold-400 hover:bg-gold-50"}`,children:s.name},i))})})}),n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[n.jsxs("div",{className:"lg:col-span-8",children:[n.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-6",children:e("pages.standardAccount.whyChooseTitle")}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:e("pages.standardAccount.whyChooseDescription")})]}),n.jsx("div",{className:"lg:col-span-4",children:n.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 shadow-lg p-6 sticky top-8",children:[n.jsxs("div",{className:"mb-6",children:[n.jsx("p",{className:"text-sm text-gray-500 mb-1",children:e("pages.standardAccount.cfdTrading")}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:e("pages.standardAccount.standardAccount")})]}),n.jsx("div",{className:"space-y-3 mb-8",children:a.map((s,i)=>n.jsxs("div",{className:"flex items-center",children:[n.jsx(Je,{className:"w-5 h-5 text-gold-600 mr-3 flex-shrink-0"}),n.jsx("span",{className:"text-gray-700",children:s})]},i))}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center bg-gold-gradient text-black py-3 px-6 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300",children:e("pages.standardAccount.openStandardAccount")})]})})]})})}),n.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md",children:[n.jsxs("div",{className:"flex items-start mb-4",children:[n.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:n.jsx($t,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:e("pages.standardAccount.executionSpeedTitle")})]}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed mb-4",children:e("pages.standardAccount.executionSpeedDescription1")}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:e("pages.standardAccount.executionSpeedDescription2")})]})})}),n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[n.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[n.jsxs("div",{className:"flex items-start mb-4",children:[n.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:n.jsx(Qe,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:e("pages.standardAccount.noTradingRestrictions")})]}),n.jsx("p",{className:"text-gray-700 leading-relaxed mb-4",children:e("pages.standardAccount.noTradingRestrictionsDescription1")}),n.jsx("p",{className:"text-gray-700 leading-relaxed",children:e("pages.standardAccount.noTradingRestrictionsDescription2")})]}),n.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[n.jsxs("div",{className:"flex items-start mb-4",children:[n.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:n.jsx(ye,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:e("pages.standardAccount.level2Pricing")})]}),n.jsx("p",{className:"text-gray-700 leading-relaxed",children:e("pages.standardAccount.level2PricingDescription")})]}),n.jsxs("div",{className:"bg-gradient-to-br from-gold-50 to-white rounded-xl p-8 border border-gold-200",children:[n.jsxs("div",{className:"flex items-center mb-4",children:[n.jsx("div",{className:"p-3 bg-gold-100 rounded-full mr-4",children:n.jsx(Ar,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:e("pages.standardAccount.flexibleFunding")})]}),n.jsx("p",{className:"text-gray-700 leading-relaxed",children:e("pages.standardAccount.flexibleFundingDescription")})]}),n.jsxs("div",{className:"bg-gradient-to-br from-gold-50 to-white rounded-xl p-8 border border-gold-200",children:[n.jsxs("div",{className:"flex items-center mb-4",children:[n.jsx("div",{className:"p-3 bg-gold-100 rounded-full mr-4",children:n.jsx(Kr,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:e("pages.standardAccount.flexibleLotSize")})]}),n.jsx("p",{className:"text-gray-700 leading-relaxed",children:e("pages.standardAccount.flexibleLotSizeDescription")})]})]})})}),n.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:r.map((s,i)=>{const l=s.icon;return n.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[n.jsxs("div",{className:"flex items-center mb-4",children:[n.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:n.jsx(l,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h4",{className:"text-xl font-bold text-gray-900",children:s.title})]}),n.jsx("p",{className:"text-gray-700 leading-relaxed",children:s.description})]},i)})})})}),n.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:e("pages.standardAccount.ctaStartTrading")}),n.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:[e("pages.standardAccount.ctaTrueForexBroker")," ",n.jsx("span",{className:"text-gold-600",children:e("pages.standardAccount.forexBroker")})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openAccount")})}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openDemoAccount")})})]})]})})}),n.jsx("section",{className:"py-12 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[n.jsx("div",{className:"flex-1 min-w-[250px]",children:n.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4",children:e("common.useApp")})}),n.jsx("div",{className:"flex-shrink-0",children:n.jsx("img",{src:"/images/iphones.png",alt:"BKS Markets App",className:"h-48 object-contain"})}),n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/appleStore.png",alt:"Download on App Store",className:"h-12"})}),n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/GoogleStore.png",alt:"Get it on Google Play",className:"h-12"})})]})]})})})]})}function $x(){const{t:e}=F();return n.jsx(K,{title:e("pages.forex.title"),subtitle:e("pages.forex.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
				<div className="market_menu">
					<a href="forex.html" className="text-primary">外汇</a>		
				</div>
				<div className="market_menu">
					<a href="commodities.html" className="text-secondary">大宗商品</a>		
				</div>
				<div className="market_menu">
					<a href="indices.html" className="text-secondary">股指</a>		
				</div>
				<div className="market_menu">
					<a href="bonds.html" className="text-secondary">债券</a>		
				</div>
				<div className="market_menu">
					<a href="digitalcurrency.html" className="text-secondary">加密货币 CFDs</a>		
				</div>
				<div className="market_menu">
					<a href="stocks.html" className="text-secondary">股票</a>		
				</div>
				<div className="market_menu">
					<a href="futures.html" className="text-secondary">期货</a>		
				</div>
				
			</div>
		</div>
	</div>	
	
	
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4 maket_header">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-2/12 text-center"><img src="images/icon-forex.svg" width="100"></div>
				<div className="w-full md:w-6/12">						
					<h4 className="font-bold pb-4">外汇市场每周7天，每天24小时开放，是全球规模最大、流动性最强的市场，日交易额超过4万亿美元，超过任何场内交易市场</h4>
					<h5 className="pb-4">外汇市场为交易者提供了在全球最具流动性的金融市场中每周5天，每天24小时交易的机会。 交易者可以利用61种货币对中最小的点差，卓越的执行力和深度的银行间流动性。</h5>
				</div>
				
				<div className="w-full md:w-4/12 ">	
					<div className="market-facts-card forex">
						<div className="facts-header">
							<div className="header-label">外汇</div>
							<div className="header-title">概要</div>
						</div>
						<div className="facts-items">							
							<div className="facts-item">可供交易的货币对超过61种</div>							
							<div className="facts-item">点差低至0.1</div>
							<div className="facts-item">高达 1:400 杠杆</div>
							<div className="facts-item">高流动性</div>	
							<div className="facts-item">一天24小时交易,一周五天</div>							
						</div>
						<div className="text-center">
							<a className="btn btn-primary" style="border-radius:50px;" href="https://crm.bksmarkets.com/#/user/register">开设账户</a>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</div>
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-12/12">	
					<h1 className="pb-3"> CFD 交易点差</h1>
					<h5 className="pb-2">BKS Markets为 CFD 交易者提供了全球所有 CFD 交易经纪商中一些最小的点差，我们的欧元/美元平均点差为0.1个点。最小的点差加上我们低延迟的企业级硬件使得BKS Markets成为活跃的日内交易员和使用EA的理想选择。下表显示了所有主要货币对的最小和平均点差。</h5>
				</div>						
			</div>			
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-5/12">	
					<h1 className="pb-3">如何进行<br> CFD 交易?</h1>
					<img src="images/forexImg.png">
				</div>	
				<div className="w-full md:w-6/12">	
					<h5 className="pb-2">Forex trading is similar to trading shares or futures except that when trading foreign exchange you are buying or selling one currency against another and you do not take delivery of the underlying currency. One of the key advantages Forex has over other financial instruments is that relatively small lot sizes can be traded - lot sizes can be as small as 1000 units (one micro lot). Typically, foreign exchange also involves leverage which in some cases can be as high as 1:1000, which is very different to trading shares where no leverage is involved.</h5>
				</div>						
			</div>			
		</div>
	</div>
	<div className="w-full maket_header  bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-12/12">	
					<h1 className="pb-3"> CFD 交易实例</h1>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">您的交易毛利润计算如下:</h5>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">开仓价</h5>
						<h6 className="text-secondary">€200,000 x 1.33623 = USD $267,246</h6>
					</div>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">关仓价</h5>
						<h6 className="text-secondary">€200,000 x 1.32129 = USD $264,258</h6>
					</div>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">交易毛利润</h5>
						<h6 className="text-secondary">$2988</h6>
					</div>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">开仓</h5>
					<h5 className="mb-0">欧元对美元（欧/美）的价格是 1.33623/1.33624，你决定在1.33623卖出2标准手(等于 €200,000)。</h5>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">关仓</h5>
					<h5 className="mb-0">欧元兑美元在一周后跌至1.32128/1.32129，你决定在1.32129止盈买回2标准手。</h5>
				</div>						
			</div>			
		</div>
	</div>
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-12/12">	
					<h1 className="pb-3">点差</h1>
					<h3 className="pb-3">外汇</h3>
					<div className="specification_card">
							<ul className="nav nav-tabs" id="myTab" role="tablist">
							  <li className="nav-item">
								<a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Major</a>
							  </li>
							  <li className="nav-item">
								<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Minor</a>
							  </li>
							  <li className="nav-item">
								<a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Exotic</a>
							  </li>
							  <li  className="nav-item"><p className="nav-link text-secondary pl-5">* MIN - minimum, AVG - average</p></li>
							</ul>
							<div className="tab-content" id="myTabContent">
							  <div className="tab-pane fade show active single-table" id="home" role="tabpanel" aria-labelledby="home-tab">
								<div className="table-responsive">	
									<table className="table">
									  <thead className="thead-light">
										<tr>
										  <th scope="col" colspan="2">Product</th>
										  <th scope="col" colspan="2">ECN Account</th>
										  <th scope="col" colspan="2">Standard Account</th>
										</tr>
									  </thead>
									  <tbody>
										<tr className="text-primary">										  
										  <td>SYMBOL</td>
										  <td>DESCRIPTION</td>
										  <td>MIN</td><td>AVG</td><td>MIN</td><td>AVG</td>
										</tr>
										<tr>										  
										  <td>AUDUSD</td>
										  <td>Australian Dollar vs United States Dollar</td>
										  <td>0.1</td><td>0.17</td><td>0.6</td><td>0.77</td>
										</tr>
										<tr>										  
										  <td>EURUSD</td>
										  <td>Euro vs United States Dollar</td>
										  <td>0.1</td><td>0.02</td><td>0.6</td><td>0.62</td>
										</tr>
										<tr>										  
										  <td>GBPUSD</td>
										  <td>British Pound vs United States Dollar</td>
										  <td>0.1</td><td>0.23</td><td>0.6</td><td>0.83</td>
										</tr>
										<tr>										  
										  <td>USDCAD</td>
										  <td>United States Dollar vs Canadian Dollar</td>
										  <td>0.1</td><td>0.25</td><td>0.6</td><td>0.85</td>
										</tr>
										<tr>										  
										  <td>USDCHF</td>
										  <td>United States Dollar vs Swiss Franc</td>
										  <td>0.1</td><td>0.19</td><td>0.6</td><td>0.79</td>
										</tr>
										<tr>										  
										  <td>USDJPY</td>
										  <td>United States Dollar vs Japanese Yen</td>
										  <td>0.1</td><td>0.14</td><td>0.6</td><td>0.74</td>
										</tr>
										
										
									  </tbody>
									</table>									
								</div>
							  </div>
							  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
								<div className="table-responsive">	
									<table className="table">
									  <thead className="thead-light">
										<tr>
										  <th scope="col" colspan="2">Product</th>
										  <th scope="col" colspan="2">ECN Account</th>
										  <th scope="col" colspan="2">Standard Account</th>
										</tr>
									  </thead>
									  <tbody>
										<tr className="text-primary">										  
										  <td>SYMBOL</td>
										  <td>DESCRIPTION</td>
										  <td>MIN</td><td>AVG</td><td>MIN</td><td>AVG</td>
										</tr>
										<tr>										  
										  <td>AUDCAD</td>
										  <td>Australian Dollar vs Canadian Dollar</td>
										  <td>0.1</td><td>0.68</td><td>1</td><td>1.68</td>
										</tr>
										<tr>										  
										  <td>AUDCHF</td>
										  <td>Australian Dollar vs Swiss Franc</td>
										  <td>0.1</td><td>0.41</td><td>1</td><td>1.41</td>
										</tr>
										<tr>										  
										  <td>AUDJPY</td>
										  <td>Australian Dollar vs Japanese Yen</td>
										  <td>0.1</td><td>0.5</td><td>1</td><td>1.5</td>
										</tr>
										<tr>										  
										  <td>AUDNZD</td>
										  <td>Australian Dollar vs New Zealand Dollar</td>
										  <td>0.1</td><td>0.77</td><td>1</td><td>1.77</td>
										</tr>
										<tr>										  
										  <td>CADCHF</td>
										  <td>Canadian Dollar vs Swiss Franc</td>
										  <td>0.1</td><td>0.58</td><td>1</td><td>1.58</td>
										</tr>
										<tr>										  
										  <td>CADJPY</td>
										  <td>Canadian Dollar vs Japanese Yen</td>
										  <td>0.1</td><td>0.48</td><td>1</td><td>1.48</td>
										</tr>
										<tr>										  
										  <td>CHFJPY</td>
										  <td>Swiss Franc vs Japanese Yen</td>
										  <td>0.1</td><td>0.86</td><td>1</td><td>1.86</td>
										</tr>
										<tr>										  
										  <td>EURAUD</td>
										  <td>Euro vs Australian Dollar</td>
										  <td>0.1</td><td>0.8</td><td>1</td><td>1.8</td>
										</tr>
										<tr>										  
										  <td>EURCAD</td>
										  <td>Euro vs Canadian Dollar</td>
										  <td>0.1</td><td>0.74</td><td>1</td><td>1.74</td>
										</tr>
										<tr>										  
										  <td>EURCHF</td>
										  <td>Euro vs Swiss Franc</td>
										  <td>0.1</td><td>0.61</td><td>1</td><td>1.61</td>
										</tr>
										<tr>										  
										  <td>EURGBP</td>
										  <td>Euro vs British Pound</td>
										  <td>0.1</td><td>0.27</td><td>1</td><td>1.27</td>
										</tr>
										<tr>										  
										  <td>EURJPY</td>
										  <td>Euro vs Japanese Yen</td>
										  <td>0.1</td><td>0.3</td><td>1</td><td>1.3</td>
										</tr>
										<tr>										  
										  <td>EURNZD</td>
										  <td>Euro vs New Zealand Dollar</td>
										  <td>0.1</td><td>1.32</td><td>1</td><td>2.32</td>
										</tr>
										<tr>										  
										  <td>GBPAUD</td>
										  <td>British Pound vs Australian Dollar</td>
										  <td>0.1</td><td>1.06</td><td>1</td><td>2.06</td>
										</tr>
										<tr>										  
										  <td>GBPCAD</td>
										  <td>British Pound vs Canadian Dollar</td>
										  <td>0.1</td><td>1.12</td><td>1</td><td>2.12</td>
										</tr>
										<tr>										  
										  <td>GBPCHF</td>
										  <td>British Pound vs Swiss Franc</td>
										  <td>0.1</td><td>1.1</td><td>1</td><td>2.1</td>
										</tr>
										<tr>										  
										  <td>GBPJPY</td>
										  <td>British Pound vs Japanese Yen</td>
										  <td>0.1</td><td>0.82</td><td>1</td><td>1.82</td>
										</tr>
										<tr>										  
										  <td>GBPNZD</td>
										  <td>British Pound vs New Zealand Dollar</td>
										  <td>0.1</td><td>1.98</td><td>1</td><td>2.98</td>
										</tr>
										<tr>										  
										  <td>NZDCAD</td>
										  <td>New Zealand Dollar vs Canadian Dollar</td>
										  <td>0.1</td><td>1.04</td><td>1</td><td>2.04</td>
										</tr>
										<tr>										  
										  <td>NZDCHF</td>
										  <td>New Zealand Dollar vs Swiss Franc</td>
										  <td>0.1</td><td>0.73</td><td>1</td><td>1.73</td>
										</tr>
										<tr>										  
										  <td>NZDJPY</td>
										  <td>New Zealand Dollar vs Japanese Yen</td>
										  <td>0.1</td><td>0.6</td><td>1</td><td>1.6</td>
										</tr>
										<tr>										  
										  <td>NZDUSD</td>
										  <td>New Zealand Dollar vs United States Dollar</td>
										  <td>0.1</td><td>0.38</td><td>1</td><td>1.38</td>
										</tr>
										
										
									  </tbody>
									</table>									
								</div>
							  </div>
							  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
								<div className="table-responsive">	
									<table className="table">
									  <thead className="thead-light">
										<tr>
										  <th scope="col" colspan="2">Product</th>
										  <th scope="col" colspan="2">ECN Account</th>
										  <th scope="col" colspan="2">Standard Account</th>
										</tr>
									  </thead>
									  <tbody>
										<tr className="text-primary">										  
										  <td>SYMBOL</td>
										  <td>DESCRIPTION</td>
										  <td>MIN</td><td>AVG</td><td>MIN</td><td>AVG</td>
										</tr>
										<tr>										  
										  <td>AUDSGD</td>
										  <td>Australian Dollar vs Singapore Dollar</td>
										  <td>0.1</td><td>0.97</td><td>1</td><td>1.97</td>
										</tr>
										<tr>										  
										  <td>CHFSGD</td>
										  <td>Swiss Franc vs Singapore Dollar</td>
										  <td>0.3</td><td>2.05</td><td>1</td><td>3.05</td>
										</tr>
										<tr>										  
										  <td>EURDKK</td>
										  <td>Euro vs Danish Kroner</td>
										  <td>10</td><td>11.11</td><td>1</td><td>12.11</td>
										</tr>
										<tr>										  
										  <td>EURHKD</td>
										  <td>Euro vs Hong Kong Dollar</td>
										  <td>10</td><td>2.17</td><td>1</td><td>3.17</td>
										</tr>
										
										
									  </tbody>
									</table>									
								</div>
							  </div>
							</div>
						  </div>
				</div>						
			</div>			
		</div>
	</div>
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >立即开始交易</h3>		
					<h1 className="f55 mb-5">值得信赖的全球 CFD 交易商</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
	
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function zx(){const{t:e}=F();return n.jsx(K,{title:e("pages.commodities.title"),subtitle:e("pages.commodities.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
				<div className="market_menu">
					<a href="forex.html" className="text-secondary">外汇</a>		
				</div>
				<div className="market_menu">
					<a href="commodities.html" className="text-primary">大宗商品</a>		
				</div>
				<div className="market_menu">
					<a href="indices.html" className="text-secondary">股指</a>		
				</div>
				<div className="market_menu">
					<a href="bonds.html" className="text-secondary">债券</a>		
				</div>
				<div className="market_menu">
					<a href="digitalcurrency.html" className="text-secondary">加密货币 CFDs</a>		
				</div>
				<div className="market_menu">
					<a href="stocks.html" className="text-secondary">股票</a>		
				</div>
				<div className="market_menu">
					<a href="futures.html" className="text-secondary">期货</a>		
				</div>
				
			</div>
		</div>
	</div>	
	
	
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4 maket_header">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-2/12 text-center"><img src="images/icon-comodity.svg" width="100"></div>
				<div className="w-full md:w-6/12">						
					<h4 className="font-bold pb-4">BKS Markets 提供灵活和简单的方式通过MT5,MT5和cTrader交易平台去参与到世界上最流行的大宗商品交易中，包括能源和金属。</h4>
					<h5 className="pb-4">大宗商品市场对投机者很有吸引力，因为它们易受供求变化的影响。</h5>
				</div>
				
				<div className="w-full md:w-4/12 ">	
					<div className="market-facts-card forex">
						<div className="facts-header">
							<div className="header-label">大宗商品</div>
							<div className="header-title">概要</div>
						</div>
						<div className="facts-items">							
							<div className="facts-item">可供交易的大宗商品超过22个产品</div>							
							<div className="facts-item">能源、农业和金属</div>							
							<div className="facts-item">现货CFDs和期货CFDs</div>							
							<div className="facts-item">杠杆高达 1:200</div>
							<div className="facts-item">高流动性</div>	
							<div className="facts-item">点差低至10</div>
						</div>
						<div className="text-center">
							<a className="btn btn-primary" style="border-radius:50px;" href="https://crm.bksmarkets.com/#/user/register">开设账户</a>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</div>
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-12/12">	
					<h1 className="pb-3">能源</h1>
					<h5 className="pb-2">BKS Markets能够在MT5平台上交易以美元计价的现货能源合约，包括原油，布伦特和天然气。
</h5><h5>
交易能源合约作为一种现货产品，对于那些只对价格投机感兴趣的投资者来说具有许多优势。</h5>
				</div>	
				<div className="w-full md:w-6/12 pr-5 mb-4">	
					<h1 className="pb-3">贵金属</h1>
					<h5 className="pb-2">BKS Markets allows trading the spot price for metals including Gold or Silver against the US Dollar or Euro and the metals Platinum or Palladium against the US Dollar as a currency pair on 1:1000 leverage.</h5>
				</div>
				<div className="w-full md:w-6/12 pr-5 mb-4">	
					<h1 className="pb-3">软性大宗商品</h1>
					<h5 className="pb-2">除了能源和金属合同，在BKS Markets，我们提供一系列软性大宗商品交易，包括玉米、大豆、糖、咖啡和小麦的差价合约——所有这些产品都具有低点差和高达1:100的杠杆率。</h5>
				</div>
			</div>			
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-5/12">	
					<h1 className="pb-3">如何<br>进行大宗商品交易?</h1>
					<img src="images/forexImg.png">
				</div>	
				<div className="w-full md:w-6/12">	
					<h5  className="pb-3"> 大宗商品覆盖能源、农业和金属产品。这些产品在期货市场上交易，并从供需关系中提现它们的价值。
</h5><h5 className="pb-3">
供给包括农业的天气状况和采矿和能源的开采成本。
</h5><h5 className="pb-3">
对商品的需求往往以更广泛的条件为特征，如经济周期和人口增长。大宗商品可以作为独立产品进行交易，也可以成对交易。
</h5><h5 className="pb-3">
金属和能源与主流货币进行交易，而农产品期货合约则作为独立合约进行交易。</h5>
				</div>						
			</div>			
		</div>
	</div>
	<div className="w-full maket_header  bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around align-items-start">				
				<div className="w-full md:w-12/12">	
					<h1 className="pb-3">大宗商品交易实例</h1>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">您的交易毛利润计算如下:</h5>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">开仓价</h5>
						<h6 className="text-secondary">$435.25 * 100 contracts * 4 = USD $174,100</h6>
					</div>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">关仓价</h5>
						<h6 className="text-secondary">460 * 100 contracts * 4 = USD $184,000</h6>
					</div>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">交易毛利润</h5>
						<h6 className="text-secondary">USD $184,000 - $174,100 = $9,900</h6>
					</div>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">开仓</h5>
					<h5 className="mb-4">Wheat_N7 目前可以在434.00/435.25进行交易， 您预计澳大利亚东海岸的农作物将在来年受到不利天气模式的影响，这将导致农作物产量低于平均水平。</h5>
					<p className="small text-secondary">Wheat_N7 目前可以在434.00/435.25进行交易， 您预计澳大利亚东海岸的农作物将在来年受到不利天气模式的影响，这将导致农作物产量低于平均水平。</p>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">关仓</h5>
					<h5 className="mb-0">您对天气状况的研究结果是正确的。今年小麦产量较低，导致小麦价格上涨到460.00／462.15。您在460卖出合约。</h5>
				</div>						
			</div>			
		</div>
	</div>
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-12/12">	
					<h1 className="pb-3">点差</h1>
					<h3 className="pb-3">大宗商品</h3>
					<div className="specification_card">
							 <p className="text-secondary">* MIN - minimum, AVG - average</p>
							 <div className="table-responsive">	
									<table className="table">
									  <thead className="thead-light">
										<tr>
										  <th scope="col" colspan="2">Product</th>
										  <th scope="col" colspan="2">All Accounts</th>
										</tr>
									  </thead>
									  <tbody>
										<tr className="text-primary">										  
										  <td>SYMBOL</td>
										  <td width="40%">DESCRIPTION</td>
										  <td>MIN</td><td>AVG</td>
										</tr>
										<tr>										  
										  <td>BRENT</td>
										  <td>Brent Crude Oil Futures</td>
										  <td>0.020</td><td>0.028</td>
										</tr>
										<tr>										  
										  <td>Cocoa</td>
										  <td>Cocoa futures</td>
										  <td>3.000</td><td>4.608</td>
										</tr>
										<tr>										  
										  <td>Coffee</td>
										  <td>Coffee Futures</td>
										  <td>0.300</td><td>0.300</td>
										</tr>
										<tr>										  
										  <td>Corn</td>
										  <td>Corn Futures</td>
										  <td>0.680</td><td>0.680</td>
										</tr>
										<tr>										  
										  <td>Cotton</td>
										  <td>Cotton Futures</td>
										  <td>0.150</td><td>0.150</td>
										</tr>
										<tr>										  
										  <td>OJ</td>
										  <td>Orange Juice Futures</td>
										  <td>1.120</td><td>1.120</td>
										</tr>
										<tr>										  
										  <td>Soybean</td>
										  <td>Soybean Futures</td>
										  <td>1.350</td><td>1.350</td>
										</tr>
										<tr>										  
										  <td>Sugar</td>
										  <td>Sugar Futures</td>
										  <td>0.030</td><td>0.033</td>
										</tr>
										<tr>										  
										  <td>Wheat</td>
										  <td>Wheat Futures</td>
										  <td>0.750</td><td>0.750</td>
										</tr>
										<tr>										  
										  <td>WTI</td>
										  <td>West Texas Intermediate - Crude Oil Futures</td>
										  <td>0.020</td><td>0.027</td>
										</tr>
										<tr>										  
										  <td>XBRUSD</td>
										  <td>Brent Crude Oil Spot vs United States Dollar</td>
										  <td>0.030</td><td>0.034</td>
										</tr>
										<tr>										  
										  <td>XNGUSD</td>
										  <td>Natural Gas Spot vs United States Dollar</td>
										  <td>0.002</td><td>0.004</td>
										</tr>
										<tr>										  
										  <td>XTIUSD</td>
										  <td>WTI Crude Oil Spot vs United States Dollar</td>
										  <td>0.030</td><td>0.034</td>
										</tr>
										
									  </tbody>
									</table>									
								</div>
						  </div>
				</div>						
			</div>			
		</div>
	</div>
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >立即开始交易</h3>		
					<h1 className="f55 mb-5">值得信赖的全球 CFD 交易商</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
	
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function Hx(){const{t:e}=F();return n.jsx(K,{title:e("pages.indices.title"),subtitle:e("pages.indices.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
				<div className="market_menu">
					<a href="forex.html" className="text-secondary">外汇</a>		
				</div>
				<div className="market_menu">
					<a href="commodities.html" className="text-secondary">大宗商品</a>		
				</div>
				<div className="market_menu">
					<a href="indices.html" className="text-primary">股指</a>		
				</div>
				<div className="market_menu">
					<a href="bonds.html" className="text-secondary">债券</a>		
				</div>
				<div className="market_menu">
					<a href="digitalcurrency.html" className="text-secondary">加密货币 CFDs</a>		
				</div>
				<div className="market_menu">
					<a href="stocks.html" className="text-secondary">股票</a>		
				</div>
				<div className="market_menu">
					<a href="futures.html" className="text-secondary">期货</a>		
				</div>
				
			</div>
		</div>
	</div>	
	
	
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4 maket_header">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-2/12 text-center"><img src="images/icon-indices.svg" width="100"></div>
				<div className="w-full md:w-6/12">						
					<h4 className="font-bold pb-4">股指是差价合约交易中最流行的一种。BKS Markets拥有世界各地的股指可供选择，包括澳大利亚标准普尔200指数、英国富时100指数、美国E-mini标准普尔500指数和美国DJIA指数。</h4>
					<h5 className="pb-4">股票指数是衡量市场表现的一个很好的指标。富时100指数和DJIA指数等指数都是在交易所上市的蓝筹股的综合指数，通常都是衡量当前市场情绪的有效指标。指数中的任何成分股价格变化会反映在该指数的整体价值上。
</h5><h5 className="pb-4">
股指具有一定的优势，交易者能够纵观一篮子股票的整体表现而不是拘泥于单个股票。BKS Markets在MT5,MT5以及cTrader上均提供在线股指差价合约和期货合约的交易。</h5>
				</div>
				
				<div className="w-full md:w-4/12 ">	
					<div className="market-facts-card forex">
						<div className="facts-header">
							<div className="header-label">指数</div>
							<div className="header-title">概要</div>
						</div>
						<div className="facts-items">							
							<div className="facts-item">23 种指数可供交易</div>							
							<div className="facts-item">杠杆高达200倍</div>							
							<div className="facts-item">点差低至0.5个点</div>							
							<div className="facts-item">高流动性</div>							
							<div className="facts-item">低手续费</div>
							<div className="facts-item">MetaTrader 5</div>
						</div>
						<div className="text-center">
							<a className="btn btn-primary" style="border-radius:50px;" href="https://crm.bksmarkets.com/#/user/register">开设账户</a>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</div>
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">	
				<div className="w-full md:w-6/12 pr-5 mb-4">	
					<h1 className="pb-3">(现货) 股票指数点差</h1>
					<h5 className="pb-2">BKS Markets 的所有股指的点差都有很强的竞争力, 包括 E-mini S&P 500 Index 点差低至 0.5 点, the FTSE 100 Index 点差低至 1 点, Xetra DAX Index 点差始于 1 点，S&P 200 Index 点差始于 1 点。</h5>
				</div>
				<div className="w-full md:w-6/12 pr-5 mb-4">	
					<h1 className="pb-3">期货指数</h1>
					<h5 className="pb-2">除了股票指数外，BKS Markets 也提供期货指数: ICE Dollar Index 和 VIX Index。</h5>
				</div>
			</div>			
		</div>
	</div>
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around align-items-start">				
				<div className="w-full md:w-12/12">	
					<h1 className="pb-3">指数实例</h1>
					<h3 className="btn btn-secondary mb-4">买入澳大利亚标普200指数</h3>
				</div>
				<div className="w-full md:w-4/12" style="">	
					<h5 className="font-bold pb-4">您的交易毛利润计算如下:</h5>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">开仓价</h5>
						<h6 className="text-secondary">4951</h6>
					</div>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">关仓价</h5>
						<h6 className="text-secondary">4970</h6>
					</div>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">差价</h5>
						<h6 className="text-secondary">19</h6>
					</div>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">交易毛利润</h5>
						<h6 className="text-secondary">19.00 点 x 2 份合约 ($2 每点) = AUD $38.00</h6>
					</div>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">开仓</h5>
					<h5 className="mb-4">澳大利亚标普200指数的价格是 4950.00/4951.00. 您认为蓝筹股被低估了，因此您在4951.00买入2份合约。 指数交易不收取佣金。</h5>
					<p className="small text-secondary">澳大利亚标普200指数，报价每高于4951.00一个点，你将获得2澳元的利润，报价每低于4951.00一个点，你将损失2澳元。</p>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">关仓</h5>
					<h5 className="mb-0">澳大利亚标普200指数在4天后上涨至4970.00/4971.00，您决定在4970.00卖出2份合约执行止盈。</h5>
				</div>						
			</div>			
		</div>
	</div>
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-5/12">	
					<h1 className="pb-3">如何确定一个客户有权从AUS200指数获得股息?</h1>
					<img src="images/forexImg.png">
				</div>	
				<div className="w-full md:w-6/12">	
					<h5  className="pb-3"> 根据上面的例子，我们假设指数AUS200除息日是在2016年8月18日。 因此，客户必须在8月18日之前持有澳元200指数的头寸，并且必须保留头寸到2016年8月18日，以保证能获得每手2.44美元的股息调整。要确定是否将股息入账到客户帐户还是从客户账户中扣除，这取决于客户是做多还是做空AUS200。如果客户做多1手AUS200，客户将有权获得2.44美元的股息每手。然而，如果它是做空AUS200，将从客户账户扣除2.44美元每手。在扣除之前，每手2.44美元将转换为客户账户的计价货币。
</h5><h5 className="pb-3">由于这是指数AUS200，股息调整是2.44澳币每手。如果指数是US500，股息调整会是2.44美金每手。除息Excel表公示预期指数将会在给定一周内调整其指数点，并且每个指数的实际除息调整量将定期在我们的博客上更新除息调整。</h5>
				</div>						
			</div>			
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-12/12">	
					<h1 className="pb-3">点差</h1>
					<h3 className="pb-3">指数</h3>
					<div className="specification_card">
							<p className="text-secondary">* MIN - minimum, AVG - average</p>
							 <div className="table-responsive">	
									<table className="table">
									  <thead className="thead-light">
										<tr>
										  <th scope="col" colspan="2">Product</th>
										  <th scope="col" colspan="2">All Accounts</th>
										</tr>
									  </thead>
									  <tbody>
										<tr className="text-primary">										  
										  <td>SYMBOL</td>
										  <td width="40%">DESCRIPTION</td>
										  <td>MIN</td><td>AVG</td>
										</tr>
										<tr>
											<td>AUS200</td> 
											<td>Australia S&amp;P ASX 200 Index</td>
											<td>0.000</td>
											<td>1.220</td>
										</tr>
										<tr>										  
										  <td>DE40</td>    
									  	  <td>Germany 40 Index</td>
										  <td>0.500</td>
										  <td>1.338</td>
										</tr>
										<tr>										  
										  <td>F40</td> <td>France 40 Index</td><td>0.000</td><td>0.749</td>
										</tr>
										<tr>										  
										  <td>JP225</td> <td>Japan 225 Index</td><td>6.000</td><td>8.858</td>
										</tr>
										<tr>										  
										  <td>STOXX50</td><td>EU Stocks 50 Index</td><td>0.200</td><td>1.760</td>
										</tr>
										<tr>										  
										   <td>UK100</td><td>UK 100 Index</td><td>1.000</td><td>2.133</td>
										</tr>
										<tr>										  
										  <td>US30</td> <td>US Wall Street 30 Index</td> <td>1.000</td> <td>1.411</td>
										</tr>
										<tr>										  
										  <td>US500</td> <td>US SPX 500 Index</td> <td>0.200</td><td>0.492</td>
										</tr>
										<tr>										  
										  <td>USTEC</td> <td>US Tech 100 Index</td><td>1.000</td> <td>1.807</td>
										</tr>
										<tr>										  
										  <td>CA60</td> <td>Canada 60 Index</td> <td>0.600</td> <td>0.600</td>
										</tr>
										<tr>										  
										   <td>CHINA50</td> <td>FTSE China A50 Index</td> <td>3.290</td> <td>6.953</td>
										</tr>
										<tr>										  
										  <td>CHINAH</td> <td>Hong Kong China H-shares Index</td> <td>0.000</td> <td>2.083</td>
										</tr>
										<tr>										  
										   <td>ES35</td> <td>Spain 35 Index</td> <td>4.200</td> <td>4.426</td>
										</tr>
										<tr>										  
										  <td>HK50</td> <td>Hong Kong 50 Index</td> <td>7.000</td> <td>8.169</td>
										</tr>
										<tr>										  
										   <td>IT40</td> <td>Italy 40 Index</td> <td>9.000</td> <td>9.000</td>
										</tr>
										<tr>										  
										   <td>MidDE50</td> <td>Germany Mid 50 Index</td> <td>7.500</td> <td>27.864</td>
										</tr>
										<tr>										  
										   <td>NETH25</td> <td>Netherlands 25 Index</td> <td>0.190</td> <td>0.190</td>
										</tr>
										<tr>										  
										   <td>NOR25</td> <td>Norway 25 Index</td> <td>0.680</td> <td>0.680</td>
										</tr>
										<tr>										  
										   <td>SA40</td> <td>South Africa 40 Index</td> <td>7.500</td> <td>15.444</td>
										</tr>
										<tr>										  
										  <td>SE30</td> <td>Sweden 30</td> <td>0.380</td> <td>0.380</td>
										</tr>
										<tr>										  
										  <td>SWI20</td> <td>Switzerland 20 Index</td> <td>3.000</td> <td>3.500</td>
										</tr>
										<tr>										  
										  <td>TecDE30</td> <td>Germany Tech 30 Index</td> <td>2.300</td> <td>3.172</td>
										</tr>
										<tr>										  
										  <td>US2000</td> <td>US Small Cap 2000 Index</td> <td>0.140</td> <td>0.480</td>
										</tr>
										
									  </tbody>
									</table>									
								</div>
						  </div>
				</div>						
			</div>			
		</div>
	</div>
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >立即开始交易</h3>		
					<h1 className="f55 mb-5">值得信赖的全球 CFD 交易商</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
	
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function Vx(){const{t:e}=F();return n.jsx(K,{title:e("pages.bonds.title"),subtitle:e("pages.bonds.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
				<div className="market_menu">
					<a href="forex.html" className="text-secondary">外汇</a>		
				</div>
				<div className="market_menu">
					<a href="commodities.html" className="text-secondary">大宗商品</a>		
				</div>
				<div className="market_menu">
					<a href="indices.html" className="text-secondary">股指</a>		
				</div>
				<div className="market_menu">
					<a href="bonds.html" className="text-primary">债券</a>		
				</div>
				<div className="market_menu">
					<a href="digitalcurrency.html" className="text-secondary">加密货币 CFDs</a>		
				</div>
				<div className="market_menu">
					<a href="stocks.html" className="text-secondary">股票</a>		
				</div>
				<div className="market_menu">
					<a href="futures.html" className="text-secondary">期货</a>		
				</div>
				
			</div>
		</div>
	</div>	
	
	
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4 maket_header">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-2/12 text-center"><img src="images/icon-bond.svg" width="100"></div>
				<div className="w-full md:w-6/12">						
					<h4 className="font-bold pb-4">BKS Markets债券CFDs是以固定收益债券为基础的，这些债券向投资者支付定期票息以获得他们的投资。我们提供的债券产品作为一个差价合约，交易手数大小比较灵活，所以你可以通过做多或做空来炒作债券的价格。</h4>
					<h5 className="pb-4">在这些债券CFD上没有利息或贷记，就如标的期货市场一样。因此，这意味着你只需要关注债券的价格和你的多空仓位即可。
</h5><h5 className="pb-4">
BKS Markets提供的债券CFD是基于高评级的政府发行债券，包括美国、日本和欧洲政府。债券为交易者提供了投机利率和风险情绪、使投资组合多样化或降低风险、在经济疲软或不确定性时期建立防御头寸的机会。</h5>
				</div>
				
				<div className="w-full md:w-4/12 ">	
					<div className="market-facts-card forex">
						<div className="facts-header">
							<div className="header-label">债券</div>
							<div className="header-title">概要</div>
						</div>
						<div className="facts-items">							
							<div className="facts-item">可供交易的债券超过9种</div>							
							<div className="facts-item">没有佣金</div>							
							<div className="facts-item">高达200倍杠杆</div>							
							<div className="facts-item">高流动性</div>							
							<div className="facts-item">MetaTrader 5</div>	
							<div className="facts-item">5天24小时交易</div>							
						</div>
						<div className="text-center">
							<a className="btn btn-primary" style="border-radius:50px;" href="https://crm.bksmarkets.com/#/user/register">开设账户</a>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</div>

	<div className="w-full maket_header " >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-5/12">	
					<h1 className="pb-3">如何做<br>债券交易?</h1>
					<img src="images/forexImg.png">
				</div>	
				<div className="w-full md:w-6/12">	
					<h5  className="pb-3"> 债券是固定收益资产类别的一部分。
</h5><h5 className="pb-3">
债券定期向债券持有人支付票息，并可在二级市场出售。政府发行债券以资助政府在公共基础设施等项目上的支出。
</h5><h5 className="pb-3">
交易者一般根据未来的利率预期进行债券交易。
</h5><h5 className="pb-3">
如果央行增加利率，债券价格将下降，收益率将增加。</h5>
				</div>						
			</div>			
		</div>
	</div>
	<div className="w-full maket_header  bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around align-items-start">				
				<div className="w-full md:w-12/12">	
					<h1 className="pb-3">债券交易实例</h1>
					<h3 className="btn btn-secondary mb-4">卖出: 5年期美国国债</h3>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">您的交易毛利润计算如下:</h5>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">开仓价</h5>
						<h6 className="text-secondary">($120.25 x 10 contracts) x $200 = USD $240,500</h6>
					</div>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">关仓价</h5>
						<h6 className="text-secondary">($118.32 x 10 contracts) x $200 = USD $236,640</h6>
					</div>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">交易毛利润</h5>
						<h6 className="text-secondary">$240,500 - $236,640 = USD $3,860</h6>
					</div>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">开仓</h5>
					<h5 className="mb-0">您认为美联储会提高利率，5年期国债收益率会因此而增涨。您在120.25的价格卖出了10份2017年3月的5年期美国国库券的合约。</h5>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">关仓</h5>
					<h5 className="mb-4">您的观点是正确的，2017年3月的5年期国债价格下跌。</h5>
					<p className="small text-secondary">注: 合约大小为200的债券，每波动0.01，债券CFD波动2美金。</p>
				
				</div>						
			</div>			
		</div>
	</div>
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-12/12">	
					<h1 className="pb-3">即将到期的期货</h1>
					<h3 className="pb-3">期货到期/转约过程</h3>
					<h5>BKS Markets期货合约CFDs将在合约到期日当天到期。当期货CFD合约期满时，按期货交易所所报告,所有未平仓头寸将按期货结算价格结算。这一过程通常在到期后的第二天进行。持仓头寸不续约到下一个月，所以任何希望持有长期头寸的客户必须重新开始下一个可用合约的交易</h5>
					<div className="specification_card pt-4">
							 <div className="table-responsive">	
									<table className="table">
									  <thead className="thead-light">
										<tr>
										  <th>符号</th>
                            <th>Start Date</th>
                            <th>Close Only Date</th>
                            <th>到期日</th>
                            <th>合约月份</th>
										</tr>
									  </thead>
									  <tbody>
										 <tr>
                               <td>UST05Y_Z2</td>
                                <td>26/08/2022</td>
                                <td>25/11/2022</td>
                                <td>28/11/2022</td>
                                <td>December</td>
                            </tr>
                        
                            <tr>
                               <td>UST10Y_Z2</td>
                                <td>29/08/2022</td>
                                <td>25/11/2022</td>
                                <td>28/11/2022</td>
                                <td>December</td>
                            </tr>
                        
                            <tr>
                               <td>UST30Y_Z2</td>
                                <td>29/08/2022</td>
                                <td>25/11/2022</td>
                                <td>28/11/2022</td>
                                <td>December</td>
                            </tr>
                        
                            <tr>
                               <td>UKGB_Z2</td>
                                <td>24/08/2022</td>
                                <td>28/11/2022</td>
                                <td>29/11/2022</td>
                                <td>December</td>
                            </tr>
                        
                           <tr>
                               <td>EURBBL_Z2</td>
                                <td>05/09/2022</td>
                                <td>05/12/2022</td>
                                <td>06/12/2022</td>
                                <td>December</td>
                           </tr>
                        
                            <tr>
                               <td>EURBND_Z2</td>
                                <td>05/09/2022</td>
                                <td>05/12/2022</td>
                                <td>06/12/2022</td>
                                <td>December</td>
                            </tr>
                        
                            <tr>
                               <td>EURSCA_Z2</td>
                                <td>05/09/2022</td>
                                <td>05/12/2022</td>
                                <td>06/12/2022</td>
                                <td>December</td>
                            </tr>
                        
                            <tr>
                               <td>ITB10Y_Z2</td>
                                <td>05/09/2022</td>
                                <td>05/12/2022</td>
                                <td>06/12/2022</td>
                                <td>December</td>
                            </tr>
                        
                            <tr>
                               <td>JGB10Y_Z2</td>
                                <td>05/09/2022</td>
                                <td>05/12/2022</td>
                                <td>08/12/2022</td>
                                <td>December</td>
                            </tr>
										
									  </tbody>
									</table>									
								</div>	 
					</div>
				</div>						
			</div>			
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-12/12">	
					<h1 className="pb-3">点差</h1>
					<h3 className="pb-3">债券</h3>
					<div className="specification_card">
						<p className="text-secondary">* MIN - minimum, AVG - average</p>
							 <div className="table-responsive">	
									<table className="table">
									  <thead className="thead-light">
										<tr>
										  <th scope="col" colspan="2">Product</th>
										  <th scope="col" colspan="2">All Accounts</th>
										</tr>
									  </thead>
									  <tbody>
										<tr className="text-primary">										  
										  <td>SYMBOL</td>
										  <td width="40%">DESCRIPTION</td>
										  <td>MIN</td><td>AVG</td>
										</tr>
										<tr>
											 <td>EURBOBL</td> <td>Euro Bobl</td> <td>0.010</td> <td>0.010</td>
										</tr>
										<tr>										  
										  <td>EURBUND</td> <td>Euro Bund</td> <td>0.010</td> <td>0.011</td>
										</tr>
										<tr>										  
										  <td>EURSCHA</td> <td>Euro Schatz</td> <td>0.010</td> <td>0.010</td>
										</tr>
										<tr>										  
										  <td>ITBTP10Y</td> <td>BTP Italian Bonds</td> <td>0.020</td> <td>0.020</td>
										</tr>
										<tr>										  
										  <td>JGB10Y</td> <td>Japanese 10 YR</td> <td>0.030</td> <td>0.034</td>
										</tr>
										<tr>										  
										   <td>UKGB</td> <td>UK Long Gilt</td> <td>0.010</td> <td>0.012</td>
										</tr>
										<tr>										  
										   <td>UST05Y</td> <td>US 5 YR T-Note</td> <td>0.014</td> <td>0.014</td>
										</tr>
										<tr>										  
										  <td>UST10Y</td> <td>US 10 YR T-Note</td> <td>0.031</td> <td>0.031</td>
										</tr>
										<tr>										  
										   <td>UST30Y</td> <td>US T-Bond (30 year)</td> <td>0.030</td> <td>0.031</td>
										</tr>
										
									  </tbody>
									</table>									
								</div>	 
					</div>
				</div>						
			</div>			
		</div>
	</div>
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >立即开始交易</h3>		
					<h1 className="f55 mb-5">值得信赖的全球 CFD 交易商</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
	
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function Gx(){const{t:e}=F();return n.jsx(K,{title:e("pages.cryptocurrency.title"),subtitle:e("pages.cryptocurrency.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
				<div className="market_menu">
					<a href="forex.html" className="text-secondary">外汇</a>		
				</div>
				<div className="market_menu">
					<a href="commodities.html" className="text-secondary">大宗商品</a>		
				</div>
				<div className="market_menu">
					<a href="indices.html" className="text-secondary">股指</a>		
				</div>
				<div className="market_menu">
					<a href="bonds.html" className="text-secondary">债券</a>		
				</div>
				<div className="market_menu">
					<a href="digitalcurrency.html" className="text-primary">加密货币 CFDs</a>		
				</div>
				<div className="market_menu">
					<a href="stocks.html" className="text-secondary">股票</a>		
				</div>
				<div className="market_menu">
					<a href="futures.html" className="text-secondary">期货</a>		
				</div>
				
			</div>
		</div>
	</div>	
	
	
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4 maket_header">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-2/12 text-center"><img src="images/icon-crypto.svg" width="100"></div>
				<div className="w-full md:w-6/12">						
					<h5 className="pb-4">*请注意，部分工具代码在周末可能无法交易。交易时段详情可参阅平台内容。</h5>
					<h4 className="font-bold pb-4">与其他资产类别（外汇、股票、大宗商品等）不同，加密货币市场由散户投机者主导。交易加密货币，您将在没有中央银行干预、银行间交易商控制订单流动或巨额养老基金影响价格的市场中进行交易。</h4>
					<h5 className="pb-4">比特币、以太币等加密货币的价格波动主要受新闻和大众情绪影响，即散户投机者的恐惧和贪婪所驱动。有时，这些因素的变化会导致日内价格大幅波动，使得加密货币成为交易激进且有经验的日内交易者理想的产品。
</h5><h5 className="pb-4">
 BKS Markets 加密货币的差价合约产品允许交易者在不持有密码的情况下进行做多或做空的交易。这意味着交易者可以在不担心与存储加密货币相关的安全风险以及来自交易对方交易风险的情况下获知加密货币的价格。这类似于交易能源期货，如石油，而不是拥有实物石油来推测其价格。</h5>
				</div>
				
				<div className="w-full md:w-4/12 ">	
					<div className="market-facts-card forex">
						<div className="facts-header">
							<div className="header-label">加密货币 CFDs</div>
							<div className="header-title">概要</div>
						</div>
						<div className="facts-items">							
							<div className="facts-item">5 倍杠杆 </div>
							<div className="facts-item">每周 7 天都可ด入市ด交易</div>							
							<div className="facts-item">做多或做空</div>							
							<div className="facts-item">MBS 监管</div>
							<div className="facts-item">无佣金</div>	
							<div className="facts-item">人工在线客服!</div>							
						</div>
						<div className="text-center">
							<a className="btn btn-primary" style="border-radius:50px;" href="https://crm.bksmarkets.com/#/user/register">开设账户</a>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</div>
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">
				<div className="w-full md:w-6/12 pr-5 mb-4 flex flex-wrap">
					<div className="w-3/12"><img src="images/btc-color.png"></div>
					<div className="w-9/12">
						<h1 className="pb-3">比特币 CFD</h1>
						<h5 className="pb-2">比特币是第一种也是最大的密码货币，它为数百种类似的货币铺平了道路，并且拥有超过1000亿美元的市值。</h5>
					</div>
				</div>
				<div className="w-full md:w-6/12 pr-5 mb-4 flex flex-wrap">
					<div className="w-3/12"><img src="images/ethereum-color.png"></div>
					<div className="w-9/12">
						<h1 className="pb-3">以太币 CFD</h1>
						<h5 className="pb-2">这是世界第二大的加密货币，它被许多人称为“下一个比特币”。以太币受到了诸如微软、摩根大通和英特尔等大型机构的国际认可和支持。</h5>
					</div>
				</div>
				<div className="w-full md:w-6/12 pr-5 mb-4 flex flex-wrap">
					<div className="w-3/12"><img src="images/dash-color.png"></div>
					<div className="w-9/12">
						<h1 className="pb-3">达世币 CFD</h1>
						<h5 className="pb-2">达世币的关注点是即时交易和所有者隐私。达世币拥有比其他加密货币更快的交易基础设施，因此表现出比许多同类货币更高的流动性。</h5>
					</div>
				</div>
				<div className="w-full md:w-6/12 pr-5 mb-4 flex flex-wrap">
					<div className="w-3/12"><img src="images/lite-color.png"></div>
					<div className="w-9/12">
						<h1 className="pb-3">莱特币 CFD</h1>
						<h5 className="pb-2">莱特币由谷歌前工程师设计，用于改进比特币的技术，它提供更快的处理时间和更多的货币。它也是第一个提出SegWit的加密算法，这是一种在不损害底层块链技术的情况下加速交易时间的方法。</h5>
					</div>
				</div>
				<div className="w-full md:w-6/12 pr-5 mb-4 flex flex-wrap">
					<div className="w-3/12"><img src="images/btc-cash-color.png"></div>
					<div className="w-9/12">
						<h1 className="pb-3">比特币现金 CFD</h1>
						<h5 className="pb-2">比特币现金来源于比特币区块链的硬分叉。它在不需要SegWit的情况下，将区块大小从1兆字节增加到8兆字节。</h5>
					</div>
				</div>
				<div className="w-full md:w-6/12 pr-5 mb-4 flex flex-wrap">
					<div className="w-3/12"><img src="images/rippleIcon.png"></div>
					<div className="w-9/12">
						<h1 className="pb-3">瑞波币 CFD</h1>
						<h5 className="pb-2">Ripple是一个交易网络和加密货币，它创建于2012年，作为银行和全球货币转移的通用加密货币，并且在近期增长较快。</h5>
					</div>
				</div>
				<div className="w-full md:w-6/12 pr-5 mb-4 flex flex-wrap">
					<div className="w-3/12"><img src="images/eos-icon.jpg"></div>
					<div className="w-9/12">
						<h1 className="pb-3">EOS CFD</h1>
						<h5 className="pb-2">EOS is a decentralized operating system based on blockchain technology. It is designed to support of decentralized applications on a commercial-scale by giving all the required core functionalities.</h5>
					</div>
				</div>
				<div className="w-full md:w-6/12 pr-5 mb-4 flex flex-wrap">
					<div className="w-3/12"><img src="images/emc-icon.jpg"></div>
					<div className="w-9/12">
						<h1 className="pb-3">Emercoin CFD</h1>
						<h5 className="pb-2">Emercoin is an open-source cryptocurrency which originated from Bitcoin, Peercoin and Namecoin. Other than being a cryptocurrency, it is also a platform for secure distributed blockchain business services.</h5>
					</div>
				</div>
				<div className="w-full md:w-6/12 pr-5 mb-4 flex flex-wrap">
					<div className="w-3/12"><img src="images/nmc-icon.jpg"></div>
					<div className="w-9/12">
						<h1 className="pb-3">NameCoin CFD</h1>
						<h5 className="pb-2">Namecoin is a blockchain protocol that serves as a naming system. Since Namecoin is a fork of Bitcoin, it is also a cryptocurrency that can be used for peer-to-peer transactions.</h5>
					</div>
				</div>
				<div className="w-full md:w-6/12 pr-5 mb-4 flex flex-wrap">
					<div className="w-3/12"><img src="images/ppc-icon.jpg"></div>
					<div className="w-9/12">
						<h1 className="pb-3">PeerCoin CFD</h1>
						<h5 className="pb-2">PeerCoin aims to solve the inefficiency problem of the Proof-of-Work that is used by bitcoin and many other coins using its own Proof-of-Stake system.</h5>
					</div>
				</div>
				<div className="w-full md:w-6/12 pr-5 mb-4 flex flex-wrap">
					<div className="w-3/12"><img src="images/dot-icon.png"></div>
					<div className="w-9/12">
						<h1 className="pb-3">Polkadot CFD</h1>
						<h5 className="pb-2">Polkadot is a platform that allows diverse blockchains to transfer messages, including value, in a trust-free fashion; sharing their unique features while pooling their security. In brief, Polkadot is a scalable, heterogeneous, multi-chain technology.</h5>
					</div>
				</div>
				<div className="w-full md:w-6/12 pr-5 mb-4 flex flex-wrap">
					<div className="w-3/12"><img src="images/xlm-icon.png"></div>
					<div className="w-9/12">
						<h1 className="pb-3">Stellar CFD</h1>
						<h5 className="pb-2">Stellar, or Stellar Lumens, is an open source, decentralized protocol for digital currency to fiat money low-cost transfers which allows cross-border transactions between any pair of currencies.</h5>
					</div>
				</div>
				<div className="w-full md:w-6/12 pr-5 mb-4 flex flex-wrap">
					<div className="w-3/12"><img src="images/lnk-icon.png"></div>
					<div className="w-9/12">
						<h1 className="pb-3">Chainlink CFD</h1>
						<h5 className="pb-2">Chainlink is a decentralized oracle network and cryptocurrency that provides data to blockchains. It is one of the main sources of data used to feed information to applications in decentralized finance.</h5>
					</div>
				</div>
				<div className="w-full md:w-6/12 pr-5 mb-4 flex flex-wrap">
					<div className="w-3/12"><img src="images/dgc-icon.png"></div>
					<div className="w-9/12">
						<h1 className="pb-3">Dogecoin CFD</h1>
						<h5 className="pb-2">Dogecoin was founded by software engineers Billy Markus and Jackson Palmer, as a payment system. This coin began as a 'meme coin' and is now seen as a popular option for traders.</h5>
					</div>
				</div>
				
			</div>			
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-5/12">	
					<h1 className="pb-3">如何交易<br>加密 CFD?</h1>
					<img src="images/forexImg.png">
				</div>	
				<div className="w-full md:w-6/12">	
					<h5  className="pb-3"> 比特币是一种数字加密货币，它的价值来源于这个资产类别特有的供需因素。
</h5><h5 className="pb-3">
比特币供给是有限的，因此随着需求的增加，价格上涨。
</h5><h5 className="pb-3">
需求源于投机性的来源和更实际的来源，例如比特币可用于支付网络购物。
</h5><h5 className="pb-3">
比特币在股票和外汇等更为传统的市场中也有对市场情绪做出反应的趋势，在负面情绪时期这种反应会加剧。</h5>
				</div>						
			</div>			
		</div>
	</div>
	<div className="w-full maket_header  bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around align-items-start">				
				<div className="w-full md:w-12/12">	
					<h1 className="pb-3">比特币 CFD 交易实例</h1>
					<h3 className="btn btn-secondary mb-4">买入: BTCUSD</h3>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">您的交易毛利润计算如下:</h5>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">开仓价</h5>
						<h6 className="text-secondary">3910.25 * 2 = USD $7820.50</h6>
					</div>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">关仓价</h5>
						<h6 className="text-secondary">4200.50 * 2 = USD $8401.00</h6>
					</div>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">交易毛利润</h5>
						<h6 className="text-secondary">USD $8401.00 - 7820.50 = $580.50</h6>
					</div>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">开仓</h5>
					<h5 className="mb-4">比特币对美元的价格是3900.25/3910.25， 您在3910.25买入2份合约。</h5>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">关仓</h5>
					<h5 className="mb-0">比特币在一个月后涨至 4200.50/4210.50 你决定在4200.50止盈卖出2份合约。</h5>
				</div>						
			</div>			
		</div>
	</div>
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-12/12">	
					<h1 className="pb-3">点差</h1>
					<h3 className="pb-3">加密货币 CFD</h3>
					<div className="specification_card">
							 <p className="text-secondary">* MIN - minimum, AVG - average</p>
							 <div className="table-responsive">	
									<table className="table">
									  <thead className="thead-light">
										<tr>
										  <th scope="col" colspan="2">Product</th>
										  <th scope="col" colspan="2">All Accounts</th>
										</tr>
									  </thead>
									  <tbody>
										<tr className="text-primary">										  
										  <td>SYMBOL</td>
										  <td width="40%">DESCRIPTION</td>
										  <td>MIN</td><td>AVG</td>
										</tr>
										 <tr> <td>BCHUSD</td> <td>Bitcoin Cash vs United States Dollar CFD</td> <td>2.210</td> <td>5.839</td> </tr> <tr> <td>BTCUSD</td> <td>Bitcoin vs United States Dollar CFD</td> <td>8.710</td> <td>42.036</td> </tr> <tr> <td>DOTUSD</td> <td>Polkadot vs United States Dollar CFD</td> <td>0.011</td> <td>0.013</td> </tr> <tr> <td>DSHUSD</td> <td>Dash Coin vs United States Dollar CFD</td> <td>0.000</td> <td>1.241</td> </tr> <tr> <td>EMCUSD</td> <td>Emercoin vs United States Dollar CFD</td> <td>0.157</td> <td>0.157</td> </tr> <tr> <td>EOSUSD</td> <td>EOS vs United States Dollar CFD</td> <td>0.000</td> <td>0.064</td> </tr> <tr> <td>ETHUSD</td> <td>Ethereum vs United States Dollar CFD</td> <td>4.560</td> <td>11.605</td> </tr> <tr> <td>LNKUSD</td> <td>Chainlink vs United States Dollar CFD</td> <td>0.012</td> <td>0.020</td> </tr> <tr> <td>LTCUSD</td> <td>Lite Coin vs United States Dollar CFD</td> <td>1.050</td> <td>1.597</td> </tr> <tr> <td>NMCUSD</td> <td>NameCoin vs United States Dollar CFD</td> <td>7.895</td> <td>7.895</td> </tr> <tr> <td>PPCUSD</td> <td>PeerCoin vs United States Dollar CFD</td> <td>0.184</td> <td>0.276</td> </tr> <tr> <td>XLMUSD</td> <td>Stellar vs United States Dollar CFD</td> <td>0.000</td> <td>0.000</td> </tr> <tr> <td>XRPUSD</td> <td>Ripple vs United States Dollar CFD</td> <td>0.008</td> <td>0.020</td> </tr> <tr> <td>ADAUSD</td> <td>Cardano vs United States Dollar CFD</td> <td>0.001</td> <td>0.003</td> </tr> <tr> <td>BNBUSD</td> <td>Binance Smartchain vs United States Dollar CFD</td> <td>1.266</td> <td>1.415</td> </tr> <tr> <td>DOGUSD</td> <td>Doge vs United States Dollar CFD</td> <td>0.001</td> <td>0.001</td> </tr> <tr> <td>UNIUSD</td> <td>Uniswap vs United States Dollar CFD</td> <td>0.061</td> <td>0.064</td> </tr> <tr> <td>XTZUSD</td> <td>Tezos vs United States Dollar CFD</td> <td>0.003</td> <td>0.026</td> </tr>
										
									  </tbody>
									</table>									
								</div>
						  </div>
				</div>						
			</div>			
		</div>
	</div>
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >立即开始交易</h3>		
					<h1 className="f55 mb-5">值得信赖的全球 CFD 交易商</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
	
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function Wx(){const{t:e}=F();return n.jsx(K,{title:e("pages.stocks.title"),subtitle:e("pages.stocks.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
				<div className="market_menu">
					<a href="forex.html" className="text-secondary">外汇</a>		
				</div>
				<div className="market_menu">
					<a href="commodities.html" className="text-secondary">大宗商品</a>		
				</div>
				<div className="market_menu">
					<a href="indices.html" className="text-secondary">股指</a>		
				</div>
				<div className="market_menu">
					<a href="bonds.html" className="text-secondary">债券</a>		
				</div>
				<div className="market_menu">
					<a href="digitalcurrency.html" className="text-secondary">加密货币 CFDs</a>		
				</div>
				<div className="market_menu">
					<a href="stocks.html" className="text-primary">股票</a>		
				</div>
				<div className="market_menu">
					<a href="futures.html" className="text-secondary">期货</a>		
				</div>
				
			</div>
		</div>
	</div>	
	
	
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4 maket_header">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-2/12 text-center"><img src="images/icon-stock.svg" width="100"></div>
				<div className="w-full md:w-6/12">						
					<h4 className="font-bold pb-4"> BKS Markets单一股票CFD使交易者有能力交易世界上最受欢迎的公司，如苹果、Facebook或必和必拓。</h4>
					<h5 className="pb-4">我们在澳洲和美国市场列出了最受欢迎的股票，给你们提供最好的交易机会。另一种选择是，您可以通过我们特别选择的美国交易所上市ETF CFD来交易，其中包括一系列新兴市场指数ETF和流行商品ETF，如VanEck Vectors Gold Miners(GDX)ETF。
					</h5><h5 className="pb-4">
					股票只在 BKS Markets MetaTrader 5平台上提供，该平台为需要极速执行和高级制图工具的新手的和有经验的交易者提供了一些高级功能。</h5>
					<a href="#stocks_3" style="cursor:pointer;" className="text-primary">Please see below for further information on US Stock Trading</a><br>
					<a href="#stocks_4" style="cursor:pointer;" className="text-primary">关于通过ASX开展交易的更多信息，请参见下文</a>
				</div>
				
				<div className="w-full md:w-4/12 ">	
					<div className="market-facts-card forex">
						<div className="facts-header">
							<div className="header-label">股票</div>
							<div className="header-title">概要</div>
						</div>
						<div className="facts-items">							
							<div className="facts-item">1800+ 股票和ETF</div>							
							<div className="facts-item">澳洲证券交易所、纽约证券交易所和纳斯达克证券交易所</div>							
							<div className="facts-item">超快执行</div>							
							<div className="facts-item">赚取股息</div>							
							<div className="facts-item">MetaTrader 5</div>							
						</div>
						<div className="text-center">
							<a className="btn btn-primary" style="border-radius:50px;" href="https://crm.bksmarkets.com/#/user/register">开设账户</a>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</div>
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-5/12">	
					<h1 className="pb-3">如何交易<br>股票 CFD?</h1>
					<img src="images/forexImg.png">
				</div>	
				<div className="w-full md:w-6/12">	
					<h5  className="pb-3"> 股票交易包括买卖在ASX或纳斯达克等交易所上市的个别公司的股权。股票通常在没有杠杆作用的情况下通过股票交易所交易。然而股票CFD可以利用杠杆交易，做场外交易（OTC）。参与者可以获得个别公司的股票，在个别公司或特定经济部门建仓。
</h5><h5 className="pb-3">
参与者常常在构建多元化战略的同时，将非系统性风险分散到多个公司或多个部门。如果投资者预测波动性较大，投资者可以选择建立较保守的头寸。同样，投资者可能会决定围绕一个由中小型科技股组成的增长战略建立投资组合。
</h5>
				</div>						
			</div>			
		</div>
	</div>
	<div className="w-full maket_header  bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around align-items-start">				
				<div className="w-full md:w-12/12">	
					<h1 className="pb-3">股票交易实例</h1>
					<h3 className="btn btn-secondary mb-4">买入: 苹果 公司 (NASDAQ: AAPL)</h3>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">您的交易毛利润计算如下:</h5>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">开仓价</h5>
						<h6 className="text-secondary">$152 x 100 shares = USD $15,200</h6>
					</div>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">关仓价</h5>
						<h6 className="text-secondary">$170 x 100 shares = USD $17,000</h6>
					</div>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">交易毛利润</h5>
						<h6 className="text-secondary">USD $17,000 - $15,200 = $1,800</h6>
					</div>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">开仓</h5>
					<h5 className="mb-4">苹果的交易价格为150/152，你认为苹果的最新产品发布将促进销售。你决定购买100股AAPL。对于每一个合同，一个点（1的价格变动）等于1美元。</h5>
					<p className="text-secondary small">在100份合约中，AAPL的每个报价点都高于152美元，你将获得100美元的利润，而报价点都低于152美元，你将损失100美元。</p>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">关仓</h5>
					<h5 className="mb-4">一个月后，在销售结果公布之后，AAPL的价格已经上升到170/172，您决定卖出00份AAPL股票CFD合同来获取利润。</h5>
					<p className="text-secondary small">要计算净利润，你必须包括任何融资或股息调整。在“做多”的情况下，利息被记入贷方，而在“做空”的情况下，利息被借记。</p>
				
				</div>						
			</div>			
		</div>
	</div>
	<div className="w-full maket_header " id="stocks_3" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around align-items-start">				
				<div className="w-full md:w-12/12">	
					<h1 className="pb-3">*US STOCK TRADING</h1>
					<p>The US Internal Revenue Service (IRS) requires all non-US resident holders of US equity derivatives – (this includes CFDs ) to be taxed on dividend adjustments.</p>
					<h5 className="pt-4 font-bold">What does it mean for me?</h5>
					<p>When trading any US listed equities with  BKS Markets, the Dividend adjustments on your long positions are credited to your account, and the applicable withholding taxes are automatically deducted.</p>
					<h5 className="pt-4 font-bold">How much will be deducted?</h5>
					<p>The deduction rate varies depending on the underlying market, but where a treaty between Australia and the relevant market exists, the rate may be reduced to 15%. Please note that the withholding tax deduction doesn't apply to short positions.</p>
					<h5 className="pt-4 font-bold">What should I do?</h5>
					<p>If you are an INDIVIDUAL and want the applicable reduced rate, please fill out "Form W-8BEN" and upload it to your Client Area.
</p><p>
If you are an ENTITY and want the applicable reduced rate, please fill out "Form W-8BEN-E" and upload it to your Client Area.
</p><p>
For further information please do not hesitate to contact our Support Team</p>
					
				</div>
									
			</div>			
		</div>
	</div><div className="w-full maket_header bg-gray-50" id="stocks_4" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around align-items-start">				
				<div className="w-full md:w-12/12">	
					<h1 className="pb-3">**关于通过ASX开展交易的说明</h1>
					<h5 className="pt-4 font-bold">市场数据费用</h5>
					<p>从2020年9月1日起，将针对市场数据服务收取固定费用，即每月22澳元。此费用将在您访问市场数据的次月月初，按月直接自账户扣除，举例说明，数据月费将在10月初适用于在9月访问市场数据的所有交易者，其余月份，均可依此类推。
</p><p>
如果您拥有多个账户和/或多次访问市场数据，平台将只收取一次费用。如果您已访问ASX股票差价合约相关的市场数据，则您无需对账户进行任何更改，该费用将每月自动收取。
</p>
					<h5 className="pt-4 font-bold">ASX股票差价合约是否收取佣金？</h5>
					<p>无论您的交易量高低，从2020年9月1日开始，您的账户每次交易（双向交易）将被即时收取7澳元的最低佣金。</p>
				</div>
									
			</div>			
		</div>
	</div>
	
	
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >立即开始交易</h3>		
					<h1 className="f55 mb-5">值得信赖的全球 CFD 交易商</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
	
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function qx(){const{t:e}=F();return n.jsx(K,{title:e("pages.futures.title"),subtitle:e("pages.futures.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
				<div className="market_menu">
					<a href="forex.html" className="text-secondary">外汇</a>		
				</div>
				<div className="market_menu">
					<a href="commodities.html" className="text-secondary">大宗商品</a>		
				</div>
				<div className="market_menu">
					<a href="indices.html" className="text-secondary">股指</a>		
				</div>
				<div className="market_menu">
					<a href="bonds.html" className="text-secondary">债券</a>		
				</div>
				<div className="market_menu">
					<a href="digitalcurrency.html" className="text-secondary">加密货币 CFDs</a>		
				</div>
				<div className="market_menu">
					<a href="stocks.html" className="text-secondary">股票</a>		
				</div>
				<div className="market_menu">
					<a href="futures.html" className="text-primary">期货</a>		
				</div>
				
			</div>
		</div>
	</div>	
	
	
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4 maket_header">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-2/12 text-center"><img src="images/icon-futures.png" width="100"></div>
				<div className="w-full md:w-6/12">						
					<h4 className="font-bold pb-4">CFD期货直接从标的期货市场定价，佣金、融资费用和股息调整都包含在点差中。 BKS Markets为我们的期货CFD提供了有竞争力的点差。</h4>
					<h5 className="pb-4">下图是我们精选的全球期货CFD</h5>
					<div className="specification_card">
						 <div className="table-responsive">	
							<table className="table">
							  <thead className="thead-light">
								<tr>
								  <th scope="col" >股指</th>
								  <th scope="col" >代码</th>
								</tr>
							  </thead>
							  <tbody>
								<tr>
									<td>ICE Dollar Index Futures 美元指数期货</td>
									<td>DXY</td>
								</tr>
								<tr>
									<td>CBOE VIX Index Futures 波动率指数期货</td>
									<td>VIX</td>
								</tr>
								<tr>
									<td>Brent Crude Oil Futures 布伦特原油期货</td>
									<td>BRENT</td>
							   </tr>
								<tr>
									<td>WTI Crude Oil Futures 美油期货</td>
									<td>WTI</td>
								</tr>
							  </tbody>
						  </table>									
						</div>
					</div>
				</div>
				
				<div className="w-full md:w-4/12 ">	
					<div className="market-facts-card forex">
						<div className="facts-header">
							<div className="header-label">期货</div>
							<div className="header-title">概要</div>
						</div>
						<div className="facts-items">							
							<div className="facts-item">4个全球性的期货可供交易</div>							
							<div className="facts-item">无佣金</div>							
							<div className="facts-item">高达200倍的杠杆</div>							
							<div className="facts-item">高流动性</div>							
							<div className="facts-item">MetaTrader 4 and 5</div>
							<div className="facts-item">5天24小时交易</div>	
						</div>
						<div className="text-center">
							<a className="btn btn-primary" style="border-radius:50px;" href="https://crm.bksmarkets.com/#/user/register">开设账户</a>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</div>
	
	<div className="w-full maket_header  bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around align-items-start">				
				<div className="w-full md:w-12/12">	
					<h1 className="pb-3">Futures CFD Example 合约价差期货范例</h1>
					<h3 className="btn btn-secondary mb-4">Buying the Volatility Index (VIX) 买入波动率指数期货</h3>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">您的交易毛利润计算如下:</h5>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">开仓价</h5>
						<h6 className="text-secondary">$14.20</h6>
					</div>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">关仓价</h5>
						<h6 className="text-secondary">$18.20</h6>
					</div>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">差价</h5>
						<h6 className="text-secondary">4.00 (400 Index points)</h6>
					</div>
					<div className="border-bottom mb-3">
						<h5 className="mb-0">交易毛利润</h5>
						<h6 className="text-secondary">400 x 1 张合同($0.01 每点) = USD $4.00</h6>
					</div>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">开仓</h5>
					<h5 className="mb-4">VIX 的价格为 14.05/14.20. 您认为市场波动会增加，因此您决定在14.20买入1张合约。 期货CFD不收取佣金。</h5>
					<p className="text-secondary small">对于VIX报价高于14.20的每一点，您将获利0.01美元， 对于VIX报价低于14.20的每一点，您将损失0.01美元。</p>
				</div>
				<div className="w-full md:w-4/12" style="max-width:360px; margin:0 auto;">	
					<h5 className="font-bold pb-4">关仓</h5>
					<h5 className="mb-4">四天后，VIX上升到18.20/18.35，你决定止盈。你在18.20的时候卖出1份合约以关仓。</h5>
					
				</div>						
			</div>			
		</div>
	</div>
	<div className="w-full maket_header "  >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around align-items-start">				
				<div className="w-full md:w-12/12 bg-gray-50 p-4 text-center">你应该知道，如果市场走势相反，你可能会损失超过你的初始存款。</div>
				<div className="w-full md:w-12/12">	
					<h1 className=" pt-4">即将到期的现货原油和可交易市场</h1>
					<h5 className="pt-4 font-bold">期货到期/换约过程</h5>
					<p> BKS Markets 期货差价合约将于合约在基础市场到期的两日前到期。期货差价合约到期时，所有未平仓头寸均根据期货交易所的报告，按期货结算价平仓。这一过程通常在期满后的第二天进行。未平仓头寸不会滚动到下一个月，因此任何希望持有长期头寸的客户必须基于下一个可用的合约重新开仓。</p>
					<div className="specification_card pt-4">
						 <div className="table-responsive">	
							<table className="table">
							  <thead className="thead-light">
								<tr>
								  <th scope="col" >股指</th>
								  <th scope="col" >Start Date</th>
								  <th scope="col" >Close Only Date</th>
								  <th scope="col" >到期日期</th>
								  <th scope="col" >合约月份</th>
								</tr>
							  </thead>
							  <tbody>
								 <tr>
                                <td>VIX_V2</td>
                                <td>16/09/2022</td>
                                <td>17/10/2022</td>
                                <td>18/10/2022</td>
                                <td>October</td>
                            </tr>
                        
                             <tr>
                                <td>VIX_X2</td>
                                <td>17/10/2022</td>
                                <td>14/11/2022</td>
                                <td>15/11/2022</td>
                                <td>November</td>
                            </tr>
                        
                            <tr>
                                <td>DXY_Z2</td>
                                <td>15/09/2022</td>
                                <td>15/12/2022</td>
                                <td>16/12/2022</td>
                                <td>December</td>
                            </tr>
							  </tbody>
						  </table>									
						</div>
					</div>
					<h1 className=" pt-4">软性大宗商品到期信息:</h1>
					<div className="specification_card pt-4">
						 <div className="table-responsive">	
							<table className="table">
							  <thead className="thead-light">
								<tr>
									 <th>软性大宗商品</th>
                            <th>Start Date</th>
                            <th>Close Only Date</th>
                            <th>到期日期</th>
                            <th>合约月份</th>
								</tr>
							  </thead>
							  <tbody>
								  <tr>
                               <td>WTI_X2</td>
                                <td>15/09/2022</td>
                                <td>13/10/2022</td>
                                <td>14/10/2022</td>
                                <td>November</td>
                            </tr>
                        
                            <tr>
                               <td>Sbean_X2</td>
                                <td>22/08/2022</td>
                                <td>20/10/2022</td>
                                <td>21/10/2022</td>
                                <td>November</td>
                            </tr>
                        
                            <tr>
                               <td>OJ_X2</td>
                                <td>24/08/2022</td>
                                <td>26/10/2022</td>
                                <td>27/10/2022</td>
                                <td>November</td>
                            </tr>
                        
                            <tr>
                               <td>BRENT_Z2</td>
                                <td>27/09/2022</td>
                                <td>26/10/2022</td>
                                <td>27/10/2022</td>
                                <td>December</td>
                            </tr>
                        
                            <tr>
                               <td>Cocoa_Z2</td>
                                <td>10/08/2022</td>
                                <td>08/11/2022</td>
                                <td>09/11/2022</td>
                                <td>December</td>
                            </tr>
                        
                            <tr>
                               <td>Coffee_Z2</td>
                                <td>10/08/2022</td>
                                <td>08/11/2022</td>
                                <td>09/11/2022</td>
                                <td>December</td>
                            </tr>
                        
                            <tr>
                               <td>Cotton_Z2</td>
                                <td>07/09/2022</td>
                                <td>09/11/2022</td>
                                <td>10/11/2022</td>
                                <td>December</td>
                            </tr>
                        
                            <tr>
                               <td>WTI_Z2</td>
                                <td>13/10/2022</td>
                                <td>14/11/2022</td>
                                <td>15/11/2022</td>
                                <td>December</td>
                            </tr>
                        
                            <tr>
                               <td>Wheat_Z2</td>
                                <td>15/08/2022</td>
                                <td>14/11/2022</td>
                                <td>15/11/2022</td>
                                <td>December</td>
                            </tr>
                        
                            <tr>
                               <td>Corn_Z2</td>
                                <td>22/08/2022</td>
                                <td>21/11/2022</td>
                                <td>22/11/2022</td>
                                <td>December</td>
                            </tr>
                        
                            <tr>
                               <td>BRENT_F2</td>
                                <td>26/10/2022</td>
                                <td>25/11/2022</td>
                                <td>28/11/2022</td>
                                <td>January</td>
                            </tr>
                        
                            <tr>
                               <td>Sbean_F3</td>
                                <td>20/10/2022</td>
                                <td>21/12/2022</td>
                                <td>22/12/2022</td>
                                <td>January</td>
                            </tr>
							<tr>
                               <td>OJ_F3</td>
                                <td>26/10/2022</td>
                                <td>29/12/2022</td>
                                <td>30/12/2022</td>
                                <td>January</td>
                            </tr>                        
                           <tr>
                               <td>Wheat_H3</td>
                                <td>14/11/2022</td>
                                <td>10/02/2023</td>
                                <td>13/02/2023</td>
                                <td>March</td>
                            </tr>
                        
                            <tr>
                               <td>Corn_H3</td>
                                <td>21/11/2022</td>
                                <td>20/02/2023</td>
                                <td>21/02/2023</td>
                                <td>March</td>
                            </tr>
                        
                            <tr>
                               <td>Sugar_H3</td>
                                <td>27/09/2022</td>
                                <td>23/02/2023</td>
                                <td>24/02/2023</td>
                                <td>March</td>
                            </tr>
							  </tbody>
						  </table>									
						</div>
					</div>
				</div>
									
			</div>			
		</div>
	</div>
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >立即开始交易</h3>		
					<h1 className="f55 mb-5">值得信赖的全球 CFD 交易商</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
	
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function Yx(){const{t:e}=F(),t=[{name:e("pages.tradingMarkets.forexName"),icon:ye,description:e("pages.tradingMarkets.forexDescription"),features:[e("pages.tradingMarkets.forexFeatures1"),e("pages.tradingMarkets.forexFeatures2"),e("pages.tradingMarkets.forexFeatures3"),e("pages.tradingMarkets.forexFeatures4")],link:"/markets/forex",bgColor:"bg-white"},{name:e("pages.tradingMarkets.indicesName"),icon:qg,description:e("pages.tradingMarkets.indicesDescription"),features:[e("pages.tradingMarkets.indicesFeatures1"),e("pages.tradingMarkets.indicesFeatures2"),e("pages.tradingMarkets.indicesFeatures3"),e("pages.tradingMarkets.indicesFeatures4")],link:"/markets/indices",bgColor:"bg-gray-50"},{name:e("pages.tradingMarkets.commoditiesName"),icon:xu,description:e("pages.tradingMarkets.commoditiesDescription"),features:[e("pages.tradingMarkets.commoditiesFeatures1"),e("pages.tradingMarkets.commoditiesFeatures2"),e("pages.tradingMarkets.commoditiesFeatures3"),e("pages.tradingMarkets.commoditiesFeatures4")],link:"/markets/commodities",bgColor:"bg-white"},{name:e("pages.tradingMarkets.stocksName"),icon:Hg,description:e("pages.tradingMarkets.stocksDescription"),features:[e("pages.tradingMarkets.stocksFeatures1"),e("pages.tradingMarkets.stocksFeatures2"),e("pages.tradingMarkets.stocksFeatures3")],link:"/markets/stocks",bgColor:"bg-gray-50"},{name:e("pages.tradingMarkets.bondsName"),icon:iv,description:e("pages.tradingMarkets.bondsDescription"),features:[e("pages.tradingMarkets.bondsFeatures1"),e("pages.tradingMarkets.bondsFeatures2"),e("pages.tradingMarkets.bondsFeatures3"),e("pages.tradingMarkets.bondsFeatures4")],link:"/markets/bonds",bgColor:"bg-white"},{name:e("pages.tradingMarkets.cryptoName"),icon:$g,description:e("pages.tradingMarkets.cryptoDescription"),features:[e("pages.tradingMarkets.cryptoFeatures1"),e("pages.tradingMarkets.cryptoFeatures2"),e("pages.tradingMarkets.cryptoFeatures3"),e("pages.tradingMarkets.cryptoFeatures4")],link:"/markets/cryptocurrency",bgColor:"bg-gray-50"},{name:e("pages.tradingMarkets.futuresName"),icon:Gg,description:e("pages.tradingMarkets.futuresDescription"),features:[e("pages.tradingMarkets.futuresFeatures1"),e("pages.tradingMarkets.futuresFeatures2"),e("pages.tradingMarkets.futuresFeatures3"),e("pages.tradingMarkets.futuresFeatures4")],link:"/markets/futures",bgColor:"bg-white"}],a=[{name:e("pages.tradingMarkets.forexName"),link:"/markets/forex"},{name:e("pages.tradingMarkets.commoditiesName"),link:"/markets/commodities"},{name:e("pages.tradingMarkets.indicesName"),link:"/markets/indices"},{name:e("pages.tradingMarkets.bondsName"),link:"/markets/bonds"},{name:e("pages.forex.cryptoCfds"),link:"/markets/cryptocurrency"},{name:e("pages.tradingMarkets.stocksName"),link:"/markets/stocks"},{name:e("pages.tradingMarkets.futuresName"),link:"/markets/futures"}];return n.jsxs(K,{title:e("pages.tradingMarkets.title"),subtitle:e("pages.tradingMarkets.subtitle"),bannerImage:"/images/banner2.png",children:[n.jsx("section",{className:"py-8 bg-white border-b border-gray-200",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:a.map((r,s)=>n.jsx(I,{to:r.link,className:"px-6 py-3 bg-white border border-gray-300 rounded-full hover:border-gold-400 hover:bg-gold-50 transition-all duration-300 text-gray-700 hover:text-gold-600 font-medium",children:r.name},s))})})}),n.jsx("section",{className:"py-12 md:py-16",children:t.map((r,s)=>{const i=r.icon;return n.jsx("div",{className:`${r.bgColor} py-12 md:py-16`,children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[n.jsx("div",{className:"lg:col-span-2 flex justify-center",children:n.jsx("div",{className:"p-6 bg-gold-50 rounded-full",children:n.jsx(i,{className:"w-12 h-12 text-gold-600"})})}),n.jsxs("div",{className:"lg:col-span-5",children:[n.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-4",children:r.name}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed mb-6",children:r.description}),n.jsxs(I,{to:"/trading/spreads",className:"inline-flex items-center px-6 py-3 bg-gold-50 border-2 border-gold-300 rounded-lg hover:bg-gold-100 hover:border-gold-400 transition-all duration-300 text-gold-700 font-semibold",children:[n.jsx("span",{children:e("pages.tradingMarkets.viewOurSpreads")}),n.jsx("span",{className:"ml-2 text-xl font-bold",children:e("pages.tradingMarkets.spreads")})]})]}),n.jsx("div",{className:"lg:col-span-5",children:n.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300",children:[n.jsxs("div",{className:"mb-6",children:[n.jsx("p",{className:"text-sm text-gray-500 mb-1",children:e("pages.tradingMarkets.market")}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:r.name})]}),n.jsx("div",{className:"space-y-3 mb-6",children:r.features.map((l,o)=>n.jsxs("div",{className:"flex items-center",children:[n.jsx("div",{className:"w-2 h-2 bg-gold-500 rounded-full mr-3"}),n.jsx("span",{className:"text-gray-700",children:l})]},o))}),n.jsx(I,{to:r.link,className:"block w-full text-center bg-gold-gradient text-black py-3 px-6 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300",children:e("pages.tradingMarkets.details")})]})})]})})},s)})}),n.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:e("common.startTrading")}),n.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:[e("common.trustedGlobal")," ",n.jsx("span",{className:"text-gold-600",children:e("common.cfdBroker")})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openAccount")})}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openDemoAccount")})})]})]})})}),n.jsx("section",{className:"py-12 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[n.jsx("div",{className:"flex-1 min-w-[250px]",children:n.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4",children:e("common.useApp")})}),n.jsx("div",{className:"flex-shrink-0",children:n.jsx("img",{src:"/images/iphones.png",alt:"BKS Markets App",className:"h-48 object-contain"})}),n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/appleStore.png",alt:"Download on App Store",className:"h-12"})}),n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/GoogleStore.png",alt:"Get it on Google Play",className:"h-12"})})]})]})})})]})}function Xx(){const{t:e}=F();return n.jsx(K,{title:e("pages.spreads.title"),subtitle:e("pages.spreads.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
				<div className="w-full md:w-4/12">
						
				</div>
				<div className="w-full md:w-4/12">
					<a href="swap-rates.html" className="text-secondary">隔夜利息</a>		
				</div>
				
			</div>
		</div>
	</div>	
	
	
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-2/12 text-center"><img src="images/spreads-spread.png"></div>
				<div className="w-full md:w-10/12 ">						
					<h4 className="font-bold pb-4">BBKS Markets 提供浮动点差 Meta Trader 5 上提供可变点差。通过为我们提供银行连接，我们能够在平台中提供市场领先的点差。多达 25 家不同的银行和暗池流动资金来源在任何特定时间给我们的网络报价，以确保我们的点差保持低和流动性深 24/5。</h4>		
					<h5 className="pb-4">免责声明:金融工具的合同内容可能出现变动。按照电子交易系统显示于您账户上的信息为准。</h5>
				</div>
				
	
				<div className="w-full md:w-12/12 pt-5">	
					<h1 className="f50">Spreads</h1>
				</div>
				<div className="w-full md:w-12/12 specification_card">	
					<div className="accordion" id="accordionExample">
					  <div className="card">
						<div className="card-header" id="headingOne">
						  <h2 className="mb-0">
							<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
							  外汇
							</button>
						  </h2>
						</div>

						<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
						  <div className="card-body">
							<ul className="nav nav-tabs" id="myTab" role="tablist">
							  <li className="nav-item">
								<a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Major</a>
							  </li>
							  <li className="nav-item">
								<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Minor</a>
							  </li>
							  <li className="nav-item">
								<a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Exotic</a>
							  </li>
							  <li  className="nav-item"><p className="nav-link text-secondary pl-5">* MIN - minimum, AVG - average</p></li>
							</ul>
							<div className="tab-content" id="myTabContent">
							  <div className="tab-pane fade show active single-table" id="home" role="tabpanel" aria-labelledby="home-tab">
								<div className="table-responsive">	
									<table className="table">
									  <thead className="thead-light">
										<tr>
										  <th scope="col" colspan="2">Product</th>
										  <th scope="col" colspan="2">ECN Account</th>
										  <th scope="col" colspan="2">Standard Account</th>
										</tr>
									  </thead>
									  <tbody>
										<tr className="text-primary">										  
										  <td>SYMBOL</td>
										  <td>DESCRIPTION</td>
										  <td>MIN</td><td>AVG</td><td>MIN</td><td>AVG</td>
										</tr>
										<tr>										  
										  <td>AUDUSD</td>
										  <td>Australian Dollar vs United States Dollar</td>
										  <td>0.1</td><td>0.17</td><td>0.1</td><td>0.77</td>
										</tr>
										<tr>										  
										  <td>EURUSD</td>
										  <td>Euro vs United States Dollar</td>
										  <td>0.1</td><td>0.02</td><td>0.1</td><td>0.62</td>
										</tr>
										<tr>										  
										  <td>GBPUSD</td>
										  <td>British Pound vs United States Dollar</td>
										  <td>0.1</td><td>0.23</td><td>0.1</td><td>0.83</td>
										</tr>
										<tr>										  
										  <td>USDCAD</td>
										  <td>United States Dollar vs Canadian Dollar</td>
										  <td>0.1</td><td>0.25</td><td>0.1</td><td>0.85</td>
										</tr>
										<tr>										  
										  <td>USDCHF</td>
										  <td>United States Dollar vs Swiss Franc</td>
										  <td>0.1</td><td>0.19</td><td>0.1</td><td>0.79</td>
										</tr>
										<tr>										  
										  <td>USDJPY</td>
										  <td>United States Dollar vs Japanese Yen</td>
										  <td>0.1</td><td>0.14</td><td>0.1</td><td>0.74</td>
										</tr>
										
										
									  </tbody>
									</table>									
								</div>
							  </div>
							  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
								<div className="table-responsive">	
									<table className="table">
									  <thead className="thead-light">
										<tr>
										  <th scope="col" colspan="2">Product</th>
										  <th scope="col" colspan="2">ECN Acount</th>
										  <th scope="col" colspan="2">Standard Account</th>
										</tr>
									  </thead>
									  <tbody>
										<tr className="text-primary">										  
										  <td>SYMBOL</td>
										  <td>DESCRIPTION</td>
										  <td>MIN</td><td>AVG</td><td>MIN</td><td>AVG</td>
										</tr>
										<tr>										  
										  <td>AUDCAD</td>
										  <td>Australian Dollar vs Canadian Dollar</td>
										  <td>0.1</td><td>0.68</td><td>1</td><td>1.68</td>
										</tr>
										<tr>										  
										  <td>AUDCHF</td>
										  <td>Australian Dollar vs Swiss Franc</td>
										  <td>0.1</td><td>0.41</td><td>1</td><td>1.41</td>
										</tr>
										<tr>										  
										  <td>AUDJPY</td>
										  <td>Australian Dollar vs Japanese Yen</td>
										  <td>0.1</td><td>0.5</td><td>1</td><td>1.5</td>
										</tr>
										<tr>										  
										  <td>AUDNZD</td>
										  <td>Australian Dollar vs New Zealand Dollar</td>
										  <td>0.1</td><td>0.77</td><td>1</td><td>1.77</td>
										</tr>
										<tr>										  
										  <td>CADCHF</td>
										  <td>Canadian Dollar vs Swiss Franc</td>
										  <td>0.1</td><td>0.58</td><td>1</td><td>1.58</td>
										</tr>
										<tr>										  
										  <td>CADJPY</td>
										  <td>Canadian Dollar vs Japanese Yen</td>
										  <td>0.1</td><td>0.48</td><td>1</td><td>1.48</td>
										</tr>
										<tr>										  
										  <td>CHFJPY</td>
										  <td>Swiss Franc vs Japanese Yen</td>
										  <td>0.1</td><td>0.86</td><td>1</td><td>1.86</td>
										</tr>
										<tr>										  
										  <td>EURAUD</td>
										  <td>Euro vs Australian Dollar</td>
										  <td>0.1</td><td>0.8</td><td>1</td><td>1.8</td>
										</tr>
										<tr>										  
										  <td>EURCAD</td>
										  <td>Euro vs Canadian Dollar</td>
										  <td>0.1</td><td>0.74</td><td>1</td><td>1.74</td>
										</tr>
										<tr>										  
										  <td>EURCHF</td>
										  <td>Euro vs Swiss Franc</td>
										  <td>0.1</td><td>0.61</td><td>1</td><td>1.61</td>
										</tr>
										<tr>										  
										  <td>EURGBP</td>
										  <td>Euro vs British Pound</td>
										  <td>0.1</td><td>0.27</td><td>1</td><td>1.27</td>
										</tr>
										<tr>										  
										  <td>EURJPY</td>
										  <td>Euro vs Japanese Yen</td>
										  <td>0.1</td><td>0.3</td><td>1</td><td>1.3</td>
										</tr>
										<tr>										  
										  <td>EURNZD</td>
										  <td>Euro vs New Zealand Dollar</td>
										  <td>0.1</td><td>1.32</td><td>1</td><td>2.32</td>
										</tr>
										<tr>										  
										  <td>GBPAUD</td>
										  <td>British Pound vs Australian Dollar</td>
										  <td>0.1</td><td>1.06</td><td>1</td><td>2.06</td>
										</tr>
										<tr>										  
										  <td>GBPCAD</td>
										  <td>British Pound vs Canadian Dollar</td>
										  <td>0.1</td><td>1.12</td><td>1</td><td>2.12</td>
										</tr>
										<tr>										  
										  <td>GBPCHF</td>
										  <td>British Pound vs Swiss Franc</td>
										  <td>0.1</td><td>1.1</td><td>1</td><td>2.1</td>
										</tr>
										<tr>										  
										  <td>GBPJPY</td>
										  <td>British Pound vs Japanese Yen</td>
										  <td>0.1</td><td>0.82</td><td>1</td><td>1.82</td>
										</tr>
										<tr>										  
										  <td>GBPNZD</td>
										  <td>British Pound vs New Zealand Dollar</td>
										  <td>0.1</td><td>1.98</td><td>1</td><td>2.98</td>
										</tr>
										<tr>										  
										  <td>NZDCAD</td>
										  <td>New Zealand Dollar vs Canadian Dollar</td>
										  <td>0.1</td><td>1.04</td><td>1</td><td>2.04</td>
										</tr>
										<tr>										  
										  <td>NZDCHF</td>
										  <td>New Zealand Dollar vs Swiss Franc</td>
										  <td>0.1</td><td>0.73</td><td>1</td><td>1.73</td>
										</tr>
										<tr>										  
										  <td>NZDJPY</td>
										  <td>New Zealand Dollar vs Japanese Yen</td>
										  <td>0.1</td><td>0.6</td><td>1</td><td>1.6</td>
										</tr>
										<tr>										  
										  <td>NZDUSD</td>
										  <td>New Zealand Dollar vs United States Dollar</td>
										  <td>0.1</td><td>0.38</td><td>1</td><td>1.38</td>
										</tr>
										
										
									  </tbody>
									</table>									
								</div>
							  </div>
							  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
								<div className="table-responsive">	
									<table className="table">
									  <thead className="thead-light">
										<tr>
										  <th scope="col" colspan="2">Product</th>
										  <th scope="col" colspan="2">ECN Acount</th>
										  <th scope="col" colspan="2">Standard Account</th>
										</tr>
									  </thead>
									  <tbody>
										<tr className="text-primary">										  
										  <td>SYMBOL</td>
										  <td>DESCRIPTION</td>
										  <td>MIN</td><td>AVG</td><td>MIN</td><td>AVG</td>
										</tr>
										<tr>										  
										  <td>AUDSGD</td>
										  <td>Australian Dollar vs Singapore Dollar</td>
										  <td>0.1</td><td>0.97</td><td>1</td><td>1.97</td>
										</tr>
										<tr>										  
										  <td>CHFSGD</td>
										  <td>Swiss Franc vs Singapore Dollar</td>
										  <td>0.1</td><td>2.05</td><td>1</td><td>3.05</td>
										</tr>
										<tr>										  
										  <td>EURDKK</td>
										  <td>Euro vs Danish Kroner</td>
										  <td>0.1</td><td>11.11</td><td>1</td><td>12.11</td>
										</tr>
										<tr>										  
										  <td>EURHKD</td>
										  <td>Euro vs Hong Kong Dollar</td>
										  <td>0.1</td><td>2.17</td><td>1</td><td>3.17</td>
										</tr>
										
										
									  </tbody>
									</table>									
								</div>
							  </div>
							</div>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="headingTwo">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							  大宗商品
							</button>
						  </h2>
						</div>
						<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
						  <div className="card-body">
							 <p className="text-secondary">* MIN - minimum, AVG - average</p>
							 <div className="table-responsive">	
									<table className="table">
									  <thead className="thead-light">
										<tr>
										  <th scope="col" colspan="2">Product</th>
										  <th scope="col" colspan="2">All Accounts</th>
										</tr>
									  </thead>
									  <tbody>
										<tr className="text-primary">										  
										  <td>SYMBOL</td>
										  <td width="40%">DESCRIPTION</td>
										  <td>MIN</td><td>AVG</td>
										</tr>
										<tr>										  
										  <td>BRENT</td>
										  <td>Brent Crude Oil Futures</td>
										  <td>0.020</td><td>0.028</td>
										</tr>
										<tr>										  
										  <td>Cocoa</td>
										  <td>Cocoa futures</td>
										  <td>3.000</td><td>4.608</td>
										</tr>
										<tr>										  
										  <td>Coffee</td>
										  <td>Coffee Futures</td>
										  <td>0.300</td><td>0.300</td>
										</tr>
										<tr>										  
										  <td>Corn</td>
										  <td>Corn Futures</td>
										  <td>0.680</td><td>0.680</td>
										</tr>
										<tr>										  
										  <td>Cotton</td>
										  <td>Cotton Futures</td>
										  <td>0.150</td><td>0.150</td>
										</tr>
										<tr>										  
										  <td>OJ</td>
										  <td>Orange Juice Futures</td>
										  <td>1.120</td><td>1.120</td>
										</tr>
										<tr>										  
										  <td>Soybean</td>
										  <td>Soybean Futures</td>
										  <td>1.350</td><td>1.350</td>
										</tr>
										<tr>										  
										  <td>Sugar</td>
										  <td>Sugar Futures</td>
										  <td>0.030</td><td>0.033</td>
										</tr>
										<tr>										  
										  <td>Wheat</td>
										  <td>Wheat Futures</td>
										  <td>0.750</td><td>0.750</td>
										</tr>
										<tr>										  
										  <td>WTI</td>
										  <td>West Texas Intermediate - Crude Oil Futures</td>
										  <td>0.020</td><td>0.027</td>
										</tr>
										<tr>										  
										  <td>XBRUSD</td>
										  <td>Brent Crude Oil Spot vs United States Dollar</td>
										  <td>0.030</td><td>0.034</td>
										</tr>
										<tr>										  
										  <td>XNGUSD</td>
										  <td>Natural Gas Spot vs United States Dollar</td>
										  <td>0.002</td><td>0.004</td>
										</tr>
										<tr>										  
										  <td>XTIUSD</td>
										  <td>WTI Crude Oil Spot vs United States Dollar</td>
										  <td>0.030</td><td>0.034</td>
										</tr>
										
									  </tbody>
									</table>									
								</div>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="headingThree">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
							  指数
							</button>
						  </h2>
						</div>
						<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
						  <div className="card-body">
							 <p className="text-secondary">* MIN - minimum, AVG - average</p>
							 <div className="table-responsive">	
									<table className="table">
									  <thead className="thead-light">
										<tr>
										  <th scope="col" colspan="2">Product</th>
										  <th scope="col" colspan="2">All Accounts</th>
										</tr>
									  </thead>
									  <tbody>
										<tr className="text-primary">										  
										  <td>SYMBOL</td>
										  <td width="40%">DESCRIPTION</td>
										  <td>MIN</td><td>AVG</td>
										</tr>
										<tr>
											<td>AUS200</td> 
											<td>Australia S&amp;P ASX 200 Index</td>
											<td>0.000</td>
											<td>1.220</td>
										</tr>
										<tr>										  
										  <td>DE40</td>    
									  	  <td>Germany 40 Index</td>
										  <td>0.500</td>
										  <td>1.338</td>
										</tr>
										<tr>										  
										  <td>F40</td> <td>France 40 Index</td><td>0.000</td><td>0.749</td>
										</tr>
										<tr>										  
										  <td>JP225</td> <td>Japan 225 Index</td><td>6.000</td><td>8.858</td>
										</tr>
										<tr>										  
										  <td>STOXX50</td><td>EU Stocks 50 Index</td><td>0.200</td><td>1.760</td>
										</tr>
										<tr>										  
										   <td>UK100</td><td>UK 100 Index</td><td>1.000</td><td>2.133</td>
										</tr>
										<tr>										  
										  <td>US30</td> <td>US Wall Street 30 Index</td> <td>1.000</td> <td>1.411</td>
										</tr>
										<tr>										  
										  <td>US500</td> <td>US SPX 500 Index</td> <td>0.200</td><td>0.492</td>
										</tr>
										<tr>										  
										  <td>USTEC</td> <td>US Tech 100 Index</td><td>1.000</td> <td>1.807</td>
										</tr>
										<tr>										  
										  <td>CA60</td> <td>Canada 60 Index</td> <td>0.600</td> <td>0.600</td>
										</tr>
										<tr>										  
										   <td>CHINA50</td> <td>FTSE China A50 Index</td> <td>3.290</td> <td>6.953</td>
										</tr>
										<tr>										  
										  <td>CHINAH</td> <td>Hong Kong China H-shares Index</td> <td>0.000</td> <td>2.083</td>
										</tr>
										<tr>										  
										   <td>ES35</td> <td>Spain 35 Index</td> <td>4.200</td> <td>4.426</td>
										</tr>
										<tr>										  
										  <td>HK50</td> <td>Hong Kong 50 Index</td> <td>7.000</td> <td>8.169</td>
										</tr>
										<tr>										  
										   <td>IT40</td> <td>Italy 40 Index</td> <td>9.000</td> <td>9.000</td>
										</tr>
										<tr>										  
										   <td>MidDE50</td> <td>Germany Mid 50 Index</td> <td>7.500</td> <td>27.864</td>
										</tr>
										<tr>										  
										   <td>NETH25</td> <td>Netherlands 25 Index</td> <td>0.190</td> <td>0.190</td>
										</tr>
										<tr>										  
										   <td>NOR25</td> <td>Norway 25 Index</td> <td>0.680</td> <td>0.680</td>
										</tr>
										<tr>										  
										   <td>SA40</td> <td>South Africa 40 Index</td> <td>7.500</td> <td>15.444</td>
										</tr>
										<tr>										  
										  <td>SE30</td> <td>Sweden 30</td> <td>0.380</td> <td>0.380</td>
										</tr>
										<tr>										  
										  <td>SWI20</td> <td>Switzerland 20 Index</td> <td>3.000</td> <td>3.500</td>
										</tr>
										<tr>										  
										  <td>TecDE30</td> <td>Germany Tech 30 Index</td> <td>2.300</td> <td>3.172</td>
										</tr>
										<tr>										  
										  <td>US2000</td> <td>US Small Cap 2000 Index</td> <td>0.140</td> <td>0.480</td>
										</tr>
										
									  </tbody>
									</table>									
								</div>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading4">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
							  贵金属
							</button>
						  </h2>
						</div>
						<div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordionExample">
						  <div className="card-body">
							   <p className="text-secondary">* MIN - minimum, AVG - average</p>
							  <div className="table-responsive">	
									<table className="table">
									  <thead className="thead-light">
										<tr>
										  <th scope="col" colspan="2">Product</th>
										  <th scope="col" colspan="2">ECN Acount</th>
										  <th scope="col" colspan="2">Standard Account</th>
										</tr>
									  </thead>
									  <tbody>
										<tr className="text-primary">										  
										  <td>SYMBOL</td>
										  <td>DESCRIPTION</td>
										  <td>MIN</td><td>AVG</td><td>MIN</td><td>AVG</td>
										</tr>
										<tr>										  
										  <td>XAGEUR</td> <td>Silver vs Euro</td> <td>0.000</td> <td>0.813</td> <td>1</td> <td>1.813</td>
										</tr>
										<tr>										  
										  <td>XAGUSD</td> <td>Silver vs United States Dollar</td> <td>0.000</td> <td>0.894</td> <td>1</td> <td>1.894</td>
										</tr>
										<tr>										  
										  <td>XAUAUD</td> <td>Gold vs Aus</td> <td>0.800</td> <td>3.679</td> <td>1</td> <td>4.679</td>
										</tr>
										<tr>										  
										  <td>XAUEUR</td> <td>Gold vs Euro</td> <td>2.000</td> <td>3.537</td> <td>1</td> <td>4.537</td>
										</tr>
										<tr>										  
										  <td>XAUUSD</td> <td>Gold vs United States Dollar</td> <td>0.000</td> <td>1.083</td> <td>1</td> <td>2.083</td>
										</tr>
										<tr>										  
										  <td>XPDUSD</td> <td>Palladium vs United States Dollar</td> <td>86.000</td> <td>162.735</td> <td>1</td> <td>163.735</td>
										</tr>
										<tr>										  
										  <td>XPTUSD</td> <td>Platinum vs United States Dollar</td> <td>18.200</td> <td>42.300</td> <td>1</td> <td>43.300</td>
										</tr>
										
										
									  </tbody>
									</table>									
								</div>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading5">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
							  债券
							</button>
						  </h2>
						</div>
						<div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordionExample">
						   <div className="card-body">
							 <p className="text-secondary">* MIN - minimum, AVG - average</p>
							 <div className="table-responsive">	
									<table className="table">
									  <thead className="thead-light">
										<tr>
										  <th scope="col" colspan="2">Product</th>
										  <th scope="col" colspan="2">All Accounts</th>
										</tr>
									  </thead>
									  <tbody>
										<tr className="text-primary">										  
										  <td>SYMBOL</td>
										  <td width="40%">DESCRIPTION</td>
										  <td>MIN</td><td>AVG</td>
										</tr>
										<tr>
											 <td>EURBOBL</td> <td>Euro Bobl</td> <td>0.010</td> <td>0.010</td>
										</tr>
										<tr>										  
										  <td>EURBUND</td> <td>Euro Bund</td> <td>0.010</td> <td>0.011</td>
										</tr>
										<tr>										  
										  <td>EURSCHA</td> <td>Euro Schatz</td> <td>0.010</td> <td>0.010</td>
										</tr>
										<tr>										  
										  <td>ITBTP10Y</td> <td>BTP Italian Bonds</td> <td>0.020</td> <td>0.020</td>
										</tr>
										<tr>										  
										  <td>JGB10Y</td> <td>Japanese 10 YR</td> <td>0.030</td> <td>0.034</td>
										</tr>
										<tr>										  
										   <td>UKGB</td> <td>UK Long Gilt</td> <td>0.010</td> <td>0.012</td>
										</tr>
										<tr>										  
										   <td>UST05Y</td> <td>US 5 YR T-Note</td> <td>0.014</td> <td>0.014</td>
										</tr>
										<tr>										  
										  <td>UST10Y</td> <td>US 10 YR T-Note</td> <td>0.031</td> <td>0.031</td>
										</tr>
										<tr>										  
										   <td>UST30Y</td> <td>US T-Bond (30 year)</td> <td>0.030</td> <td>0.031</td>
										</tr>
										
									  </tbody>
									</table>									
								</div>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading6">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
							  加密货币
							</button>
						  </h2>
						</div>
						<div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#accordionExample">
						  <div className="card-body">
							 <p className="text-secondary">* MIN - minimum, AVG - average</p>
							 <div className="table-responsive">	
									<table className="table">
									  <thead className="thead-light">
										<tr>
										  <th scope="col" colspan="2">Product</th>
										  <th scope="col" colspan="2">All Accounts</th>
										</tr>
									  </thead>
									  <tbody>
										<tr className="text-primary">										  
										  <td>SYMBOL</td>
										  <td width="40%">DESCRIPTION</td>
										  <td>MIN</td><td>AVG</td>
										</tr>
										 <tr> <td>BCHUSD</td> <td>Bitcoin Cash vs United States Dollar CFD</td> <td>2.210</td> <td>5.839</td> </tr> <tr> <td>BTCUSD</td> <td>Bitcoin vs United States Dollar CFD</td> <td>8.710</td> <td>42.036</td> </tr> <tr> <td>DOTUSD</td> <td>Polkadot vs United States Dollar CFD</td> <td>0.011</td> <td>0.013</td> </tr> <tr> <td>DSHUSD</td> <td>Dash Coin vs United States Dollar CFD</td> <td>0.000</td> <td>1.241</td> </tr> <tr> <td>EMCUSD</td> <td>Emercoin vs United States Dollar CFD</td> <td>0.157</td> <td>0.157</td> </tr> <tr> <td>EOSUSD</td> <td>EOS vs United States Dollar CFD</td> <td>0.000</td> <td>0.064</td> </tr> <tr> <td>ETHUSD</td> <td>Ethereum vs United States Dollar CFD</td> <td>4.560</td> <td>11.605</td> </tr> <tr> <td>LNKUSD</td> <td>Chainlink vs United States Dollar CFD</td> <td>0.012</td> <td>0.020</td> </tr> <tr> <td>LTCUSD</td> <td>Lite Coin vs United States Dollar CFD</td> <td>1.050</td> <td>1.597</td> </tr> <tr> <td>NMCUSD</td> <td>NameCoin vs United States Dollar CFD</td> <td>7.895</td> <td>7.895</td> </tr> <tr> <td>PPCUSD</td> <td>PeerCoin vs United States Dollar CFD</td> <td>0.184</td> <td>0.276</td> </tr> <tr> <td>XLMUSD</td> <td>Stellar vs United States Dollar CFD</td> <td>0.000</td> <td>0.000</td> </tr> <tr> <td>XRPUSD</td> <td>Ripple vs United States Dollar CFD</td> <td>0.008</td> <td>0.020</td> </tr> <tr> <td>ADAUSD</td> <td>Cardano vs United States Dollar CFD</td> <td>0.001</td> <td>0.003</td> </tr> <tr> <td>BNBUSD</td> <td>Binance Smartchain vs United States Dollar CFD</td> <td>1.266</td> <td>1.415</td> </tr> <tr> <td>DOGUSD</td> <td>Doge vs United States Dollar CFD</td> <td>0.001</td> <td>0.001</td> </tr> <tr> <td>UNIUSD</td> <td>Uniswap vs United States Dollar CFD</td> <td>0.061</td> <td>0.064</td> </tr> <tr> <td>XTZUSD</td> <td>Tezos vs United States Dollar CFD</td> <td>0.003</td> <td>0.026</td> </tr>
										
									  </tbody>
									</table>									
								</div>
						  </div>
						</div>
					  </div>
					  
					</div>
				</div>
						
			</div>			
		</div>
	</div>

				
				<div className="w-full md:w-12/12 index_cont06_account_swiper2 d-lg-none d-md-none d-sm-block d-print-block">
					<div className="swiper-container mx-auto px-4 pt-3 pb-3">
						<div className="swiper-wrapper">
						  <div className="swiper-slide">
							<div className="index_cont06_account index_cont06_account02">								
								<div className="account_title text-center">
									<div className="spreads-card-popular">流行</div>
									<h5 className="mb-0"><strong>账户</strong></h5>
									<h2 className="mb-0">ECN</h2>								
								</div>
								<div className="spreads-card-section">
                                    <div className="spreads-card-section-label">交易平台</div>
                                    <div className="spreads-card-section-value">Meta Trader</div>
                                </div>
								<div className="spreads-card-section last-section">
                                    <div className="spreads-card-section-label">佣金<br><span>(per lot per side)</span></div>
                                    <div className="spreads-card-section-value bigger">$3.5</div>
                                </div>
								<div className="text-center pb-4">
									<a href="#" className="btn btn-primary m-3" style="border-radius:50px;">开户</a>
									<div className="small"><a href="#" className="text-body">开设模拟交易账户</a> 或  <a href="#" className="text-body">了解更多</a></div>
								</div>
							</div>
						  </div>
						  <div className="swiper-slide">
							<div className="index_cont06_account index_cont06_account03">
								<div className="account_title text-center">
									<h5 className="mb-0"><strong>账户</strong></h5>
									<h2 className="mb-0">ECN</h2>
									<h6 className="mb-0">(cTrader)</h6>									
								</div>
								<div className="spreads-card-section">
                                    <div className="spreads-card-section-label">交易平台</div>
                                    <div className="spreads-card-section-value">cTrader</div>
                                </div>
								<div className="spreads-card-section last-section">
                                    <div className="spreads-card-section-label">佣金<br><span>(每10万美金)</span></div>
                                    <div className="spreads-card-section-value bigger">$3</div>
                                </div>
								<div className="text-center pb-4">
									<a href="#" className="btn btn-secondary m-3">开户</a>
									<div className="small"><a href="#" className="text-body">开设模拟交易账户</a> 或  <a href="#" className="text-body">了解更多</a></div>
								</div>
							</div>
						  </div>
						  <div className="swiper-slide">
							<div className="index_cont06_account index_cont06_account03">
								<div className="account_title text-center">
									<h5 className="mb-0"><strong>账户</strong></h5>
									<h2 className="mb-0">标准</h2>								
								</div>
								<div className="spreads-card-section">
                                    <div className="spreads-card-section-label">交易平台</div>
                                    <div className="spreads-card-section-value">Meta Trader</div>
                                </div>
								<div className="spreads-card-section last-section">
                                    <div className="spreads-card-section-label">佣金<br><span>(per lot per side)</span></div>
                                    <div className="spreads-card-section-value bigger">$0</div>
                                </div>
								<div className="text-center pb-4">
									<a href="#" className="btn btn-secondary m-3">开户</a>
									<div className="small"><a href="#" className="text-body">开设模拟交易账户</a> 或  <a href="#" className="text-body">了解更多</a></div>
								</div>
							</div>
						  </div>
						</div>
						
						<div className="swiper-pagination"></div>
					  </div>
				</div>
			</div>
		</div>
	</div>
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >立即开始交易</h3>		
					<h1 className="f55 mb-5">值得信赖的全球 CFD 交易商</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function Jx(){const{t:e}=F();return n.jsx(K,{title:e("pages.tradingConditions.title"),subtitle:e("pages.tradingConditions.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4 maket_header">
			<div className="flex flex-wrap mb-4">				
				<div className="w-full md:w-2/12 text-center"><img src="images/spreads-spread.png"></div>
				<div className="w-full md:w-10/12 ">						
					<h1>点差</h1>
					<h5 className="pb-4">我们的价差在市场上处于领先地位，价格来自多达25家不同的银行和非银行提供商。 企业级交易环境中的低延迟服务器意味着您将始终以最优惠的价格进行交易。 在 MetaTrader 5 平台上点差可低至 0.1 点。</h5>
				</div>
			</div>	
			<div className="flex flex-wrap mb-4">	
				<div className="w-full md:w-2/12 text-center"><img src="images/trading-conditions-execution.png"></div>
				<div className="w-full md:w-10/12 ">						
					<h1>执行</h1>
					<h5 className="pb-4">一旦 BKS Markets 的桥接收到订单，我们的平均执行速度低于 40ms。 我们执行您的交易，无需任何人工干预，并以您期望的价格更好。 通过我们的易环境进行交易，获得无与伦比的市场深度和执行。</h5>
				</div>
			</div>
			<div className="flex flex-wrap mb-4">	
				<div className="w-full md:w-2/12 text-center"><img src="images/trading-conditions-margin.png"></div>
				<div className="w-full md:w-10/12 ">						
					<h1>保证金和杠杆</h1>
					<h5 className="pb-4">By offering leverage up to 1:400 we open the path to the forex market for Retail traders. Using leverage means only a small initial outlay (margin) is required. The use of leverage can magnify gains but losses can also exceed your initial deposit.</h5>
				</div>
			</div>	
			<div className="flex flex-wrap mb-4">	
				<div className="w-full md:w-2/12 text-center"><img src="images/trading-conditions-currency.png"></div>
				<div className="w-full md:w-10/12 ">						
					<h1>货币对</h1>
					<h5 className="pb-4"> BKS Markets 的交易平台报价了 60 个不同的货币对和 4 个贵金属。 BKS Markets 能够通过汇总来自 50 多家不同银行和暗池流动性来源的报价来提供业内最好的定价。这种低价格加上无与伦比的执行速度，使得 BKS Markets 成为日内交易者、剥头皮交易者和使用专家顾问（EA）的人们青睐的目的地。</h5>
				</div>
			</div>	
			<div className="flex flex-wrap mb-4">	
				<div className="w-full md:w-2/12 text-center"><img src="images/trading-conditions-swaps.png"></div>
				<div className="w-full md:w-10/12 ">						
					<h1>隔夜利息费率</h1>
					<h5 className="pb-4">我们为所有的货币对和贵金属提供做多和做空的隔夜利息。隔夜利息是由两种货币之间的隔夜利率差额以及该头寸是做多头寸还是卖空头寸决定的。</h5>
				</div>
			</div>	
			<div className="flex flex-wrap">	
				<div className="w-full md:w-2/12 text-center"><img src="images/trading-conditions-hours.png"></div>
				<div className="w-full md:w-10/12 ">						
					<h1>交易时间</h1>
					<h5 className="pb-4">我们使交易者很容易知道市场何时开放交易。在我们种类繁多的产品中轻易知悉其交易时间。交易时间也可以在 MetaTrader 交易终端内查看。</h5>
				</div>
			</div>	
			
		</div>
	</div>

	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >立即开始交易</h3>		
					<h1 className="f55 mb-5">some of the tightest spreads in the world*</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
	
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function Qx(){const{t:e}=F();return n.jsx(K,{title:e("pages.tradingHours.title"),subtitle:e("pages.tradingHours.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
				<div className="w-full md:w-4/12">
					<a href="trading-hours.html" className="text-primary">交易时间</a>		
				</div>
				<div className="w-full md:w-4/12">
					<a href="swap-rates.html" className="text-secondary">隔夜利息</a>		
				</div>
				
			</div>
		</div>
	</div>	
	
	
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-2/12 text-center"><img src="images/trading-hours-hours.png"></div>
				<div className="w-full md:w-6/12 ">						
					<h4 className="font-bold pb-4">我们所有的可交易产品的市场时间如下。请注意， BKS Markets的服务器时间和图表是GMT+ 2或GMT+ 3(夏令时期间)..</h4>		
					<h5 className="">所有货币对的交易时间为每天服务器时间的00:01至23:59 （星期五为23:57），而黄金的交易时间为每天服务器时间的00:02至23:57。其他金属（XAG、XPD、XPT）于服务器时间的01:00(星期一)开盘，服务器时间23:59（星期五为23:57）收盘
</h5><h5 className="pt-3">
您还可以通过以下概述从MetaTrader交易终端中查看交易时间。
</h5><h5 className="pt-3">
Right click on any instrument in the 'Market Watch' section, then left click on the 'Specification' button, a new window will open that shows the Trading Hours for the pair selected. 
</h5><h5 className="pt-3">
免责声明:交易时间可能出现变动。按照电子交易系统显示于您账户上的信息为准。</h5>
				</div>
				<div className="w-full md:w-4/12">
						<div className="double-sidebar-block">                        
							<div className="contact-card contact-block">                        
								<div className="contact-header">
									<div className="header-label">联系我们</div>
									<div className="header-title">客服支持24/7。</div>
								</div>
								<div className="contact-pre-imaged chat-img">
									<div><a id="contact_card_help" href="help-center.html">Help Centre</a></div>
								</div>
								
								<div className="contact-pre-imaged email-img">
									 <div><a id="contact_card_email" href="mailto:support@bksmarkets.com">Email Us</a></div>
								</div>
							</div>
						</div>
					</div>
	
				<div className="w-full md:w-12/12 pt-5">	
					<h1 className="f50">交易时间</h1>
					<p>Please refer to the platform for the exact trading session.</p>
				</div>
				<div className="w-full md:w-12/12 specification_card">	
					<div className="accordion" id="accordionExample">
					  <div className="card">
						<div className="card-header" id="headingOne">
						  <h2 className="mb-0">
							<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
							  货币对
							</button>
						  </h2>
						</div>

						<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
						  <div className="card-body">
								<div className="table-responsive">	
									<table className="table  table-striped">
										<thead>
										<tr className="table-header">
											<th>货币对</th>
											<th>交易时间 (服务器时间)</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td>每</td>
											<td>天: 00:01 – 23:59</td>
										</tr>
										<tr>
											<td>每</td>
											<td>周五: 00:01 – 23:57</td>
										</tr>
										<tr>
											<td>USD/RUB</td>
											<td>天: 10:00- 23:50</td>
										</tr>
										</tbody>
									</table>
								 </div>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="headingTwo">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							  贵金属
							</button>
						  </h2>
						</div>
						<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
						  <div className="card-body">
							 <div className="table-responsive">	
									<table className="table  table-striped">
                                            <thead className="table-header">
                                            <tr>
                                                <th>贵金属</th>
                                                <th>交易时间 (服务器时间)</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>XAU/USD</td>
                                                <td>01:02 - 23:57 (周五: 01:02 - 23:57)</td>
                                            </tr>
                                            <tr>
                                                <td>XAU/EUR</td>
                                                <td>01:02 - 23:57 (周五: 01:02 - 23:57)</td>
                                            </tr>
                                            <tr>
                                                <td>XAU/AUD</td>
                                                <td>01:02 - 23:57 (周五: 01:02 - 23:57)</td>
                                            </tr>
                                            <tr>
                                                <td>XAG/USD</td>
                                                <td>01:00 - 23:59 (周五: 01:00 - 23:57)</td>
                                            </tr>
                                            <tr>
                                                <td>XAG/EUR</td>
                                                <td>01:00 - 23:59 (周五: 01:00 - 23:57)</td>
                                            </tr>
                                            <tr>
                                                <td>XPT/USD</td>
                                                <td>01:00 - 23:59 (周五: 01:00 - 23:57)</td>
                                            </tr>
                                            <tr>
                                                <td>XPD/USD</td>
                                                <td>01:00 - 23:59 (周五: 01:00 - 23:57)</td>
                                            </tr>
                                            </tbody>
                                        </table>								
								</div>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="headingThree">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
							  现货能源
							</button>
						  </h2>
						</div>
						<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
						  <div className="card-body">
							 
							 <div className="table-responsive">	
									<table className="table  table-striped">
                                            <thead className="table-header">
                                            <tr>
                                                <th>现货能源</th>
                                                <th>交易时间 (服务器时间)</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>XTI/USD</td>
                                                <td>01:00 - 23:59 (周五: 01:00 - 23:57)</td>
                                            </tr>
                                            <tr>
                                                <td>XNG/USD</td>
                                                <td>01:00 - 23:59 (周五: 01:00 - 23:57)</td>
                                            </tr>
                                            <tr>
                                                <td>XBR/USD</td>
                                                <td>Monday: 01:00 - 23:59<br>Tuesday, Wednesday, Thursday: 03:00 - 23:59<br>Friday: 03:00 - 23:57</td>
                                            </tr>
                                            </tbody>
                                        </table>								
								</div>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading4">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
							  软性大宗商品
							</button>
						  </h2>
						</div>
						<div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordionExample">
						  <div className="card-body">
							  <div className="table-responsive">	
									<table className="table  table-striped">
                                            <thead className="table-header">
                                            <tr>
                                                <th>软性大宗商品</th>
                                                <th>交易时间 (服务器时间)</th>
                                                <th>日间休市 (服务器时间)</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>玉米</td>
                                                <td>03:00 - 21:20</td>
                                                <td>15:45 - 16:30, 21:20 - 03:00</td>
                                            </tr>
                                            <tr>
                                                <td>咖啡</td>
                                                <td>11:16 - 20:30</td>
                                                <td>20:30 - 11:16</td>
                                            </tr>
                                            <tr>
                                                <td>大豆</td>
                                                <td>03:00 - 21:15</td>
                                                <td>15:45 - 16:30, 21:15 - 03:00</td>
                                            </tr>
                                            <tr>
                                                <td>白糖</td>
                                                <td>10:31 - 20:00</td>
                                                <td>20:00 - 10:31</td>
                                            </tr>
                                            <tr>
                                                <td>小麦</td>
                                                <td>03:00 - 21:20</td>
                                                <td>15:45 - 16:30, 21:20 - 03:00</td>
                                            </tr>
                                            <tr>
                                                <td>棉花</td>
                                                <td>04:00 - 21:20</td>
                                                <td>21:20 - 04:00</td>
                                            </tr>
                                            <tr>
                                                <td>橙汁</td>
                                                <td>15:00 - 21:00</td>
                                                <td>21:00 - 15:00</td>
                                            </tr>
                                            <tr>
                                                <td>可可</td>
                                                <td>11:50 - 20:30</td>
                                                <td>20:30 - 11:50</td>
                                            </tr>
                                            </tbody>
                                        </table>									
								</div>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading5">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
							  指数
							</button>
						  </h2>
						</div>
						<div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordionExample">
						   <div className="card-body">
							 <div className="table-responsive">	
									<table className="table  table-striped">
                                            <thead className="table-header">
                                            <tr>
                                                <th>指数</th>
                                                <th>参见</th>
                                                <th>交易时间 (服务器时间)</th>
                                                <th>日间休市 (服务器时间)</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>UK100 </td>
                                                <td>FTSE 100 Index</td>
                                                <td>01:02 - 23:59 (周一开市 01:05, 周五闭市 22:59)</td>
                                                <td>23:59 - 01:02</td>
                                            </tr>
                                            <tr>
                                                <td>US2000</td>
                                                <td>Russell 2000 Index</td>
                                                <td>01:00 - 23:59 (周一开市 01:00, 周五闭市 23:55)</td>
                                                <td>23:59 - 01:00</td>
                                            </tr>
                                            <tr>
                                                <td>US30</td>
                                                <td>DJIA Index</td>
                                                <td>01:00 - 23:59 (周一开市 01:00, 周五闭市 23:55)</td>
                                                <td>23:59 - 01:00</td>
                                            </tr>
                                            <tr>
                                                <td>US500</td>
                                                <td>E-mini S&amp;P 500 Index</td>
                                                <td>01:00 - 23:59 (周一开市 01:00, 周五闭市 23:55)</td>
                                                <td>23:59 - 01:00</td>
                                            </tr>
                                            <tr>
                                                <td>USTEC</td>
                                                <td>E-mini Nasdaq 100</td>
                                                <td>01:00 - 23:59 (周一开市 01:00, 周五闭市 23:55)</td>
                                                <td>23:59 - 01:00</td>
                                            </tr>
                                            <tr>
                                                <td>AUS200</td>
                                                <td>Australia 200 Index</td>
                                                <td>01:50 - 08:30, 09:10 - 22:59</td>
                                                <td>08:30 - 09:10, 22:59 - 01:50</td>
                                            </tr>
                                            <tr>
                                                <td>CA60</td>
                                                <td>Canada 60 TSX Index</td>
                                                <td>16:35 - 23:00</td>
                                                <td>23:00 - 16:35</td>
                                            </tr>
                                            <tr>
                                                <td>CHINA50</td>
                                                <td>FTSE ChinaA50 Index</td>
                                                <td>04:00 - 11:30, 12:00 - 23:45</td>
                                                <td>11:30 - 12:00, 23:45 - 04:00</td>
                                            </tr>
                                            <tr>
                                                <td>CHINAH</td>
                                                <td>Hong Kong ChinaH Index</td>
                                                <td>04:15 - 07:00, 08:00 - 11:30, 12:15 - 22:00</td>
                                                <td>07:00 - 08:00, 11:30 - 12:15, 22:00 - 04:15</td>
                                            </tr>
                                            <tr>
                                                <td>DE40</td>
                                                <td>Germany 40 DAX Index</td>
                                                <td>01:02 - 03:15, 03:16 - 23:59 (周五闭市 23:00)</td>
                                                <td>03:15 - 03:16, 23:59 - 01:02</td>
                                            </tr>
                                            <tr>
                                                <td>ES35</td>
                                                <td>IBEX 35 Spain Index</td>
                                                <td>10:00 - 20:59</td>
                                                <td>20:59 - 10:00</td>
                                            </tr>
                                            <tr>
                                                <td>F40</td>
                                                <td>France 40 CAC Index</td>
                                                <td>09:00 - 22:59</td>
                                                <td>22:59 - 09:00</td>
                                            </tr>
                                            <tr>
                                                <td>HK50</td>
                                                <td>Hong Kong 50 Index</td>
                                                <td>04:15 - 07:00, 08:00 - 11:30, 12:15 - 22:00</td>
                                                <td>07:00 - 08:00, 11:30 - 12:15, 22:00 - 04:15</td>
                                            </tr>
                                            <tr>
                                                <td>IT40</td>
                                                <td>Italian 40 Index</td>
                                                <td>09:05 - 22:59</td>
                                                <td>22:59 - 09:05</td>
                                            </tr>
                                            <tr>
                                                <td>JP225</td>
                                                <td>Japan 225 NIKKEI Index</td>
                                                <td>01:00 - 23:15, 23:30 - 23:59 (Friday 01:00 - 23:15)</td>
                                                <td>23:15 - 23:30, 23:59 - 01:00</td>
                                            </tr>
                                            <tr>
                                                <td>MidDE50</td>
                                                <td>Germany Mid50 Index</td>
                                                <td>10:05 - 18:25</td>
                                                <td>18:25 - 10:05</td>
                                            </tr>
                                            <tr>
                                                <td>NETH25</td>
                                                <td>Netherlands 25 Index</td>
                                                <td>09:05 - 22:45</td>
                                                <td>22:45 - 09:05</td>
                                            </tr>
                                            <tr>
                                                <td>NOR25</td>
                                                <td>Norway 25 Index</td>
                                                <td>10:05 - 17:15</td>
                                                <td>17:15 - 10:05</td>
                                            </tr>
                                            <tr>
                                                <td>SA40</td>
                                                <td>South Africa 40 Index</td>
                                                <td>09:35 - 18:25</td>
                                                <td>18:25 - 09:35</td>
                                            </tr>
                                            <tr>
                                                <td>SE30</td>
                                                <td>Sweden 30 Index</td>
                                                <td>10:05 - 18:20</td>
                                                <td>18:20 - 10:05</td>
                                            </tr>
                                            <tr>
                                                <td>STOXX50</td>
                                                <td>EUROSTOXX 50 Index</td>
                                                <td>09:00 - 22:59</td>
                                                <td>22:59 - 09:00</td>
                                            </tr>
                                            <tr>
                                                <td>SWI20</td>
                                                <td>Switzerland 20 Index</td>
                                                <td>09:05 - 22:45</td>
                                                <td>22:45 - 09:05</td>
                                            </tr>
                                            <tr>
                                                <td>TecDE30</td>
                                                <td>Germany Tech30 Index</td>
                                                <td>10:05 - 18:25</td>
                                                <td>18:25 - 10:05</td>
                                            </tr>
                                            </tbody>
                                        </table>								
								</div>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading6">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
							  期货
							</button>
						  </h2>
						</div>
						<div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#accordionExample">
						  <div className="card-body">
							 <div className="table-responsive">	
									<table className="table  table-striped">									 
                                            <thead className="table-header">
                                            <tr>
                                                <th>Futures 期货</th>
                                                <th>交易时间 (服务器时间)</th>
                                                <th>日间休市 (服务器时间)</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Brent Crude Oil Futures(BRENTxx) 布伦特原油期货</td>
                                                <td>Monday: 01:00 - 23:59; Tuesday - Friday: 00:01 - 01:00, 03:00 - 23:59</td>
                                                <td>01:00 - 03:00</td>
                                            </tr>
                                            <tr>
                                                <td>WTI Crude Oil Futures(WTIxx) 美油期货</td>
                                                <td>周一开市: 01:00, 周五闭市: 23:15</td>
                                                <td>00:00 - 01:00</td>
                                            </tr>
                                            <tr>
                                                <td>US Volatility Index Futures(VIXxx) 波动率指数期货</td>
                                                <td>周一开市: 01:00, 周五闭市: 23:15</td>
                                                <td>23:15 - 01:00</td>
                                            </tr>
                                            <tr>
                                                <td>US Dollar Index Futures(DXYxx) 美元指数期货</td>
                                                <td>周一开市: 00:01, 周五闭市: 23:57</td>
                                                <td>00:00 - 03:00</td>
                                            </tr>
                                            </tbody>
                                        </table>									
								</div>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading7">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
							  加密货币
							</button>
						  </h2>
						</div>
						<div id="collapse7" className="collapse" aria-labelledby="heading7" data-parent="#accordionExample">
						  <div className="card-body">
							 <div className="table-responsive">	
									<table className="table  table-striped">
                                            <thead className="table-header">
                                            <tr>
                                                <th>Cryptocurrency 加密货币</th>
                                                <th>MT5 &amp; MT5</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>BCHUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59</td>
                                            </tr>
                                            <tr>
                                                <td>BTCUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59</td>
                                            </tr>
                                            <tr>
                                                <td>ETHUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59</td>
                                            </tr>
                                            <tr>
                                                <td>LTCUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59</td>
                                            </tr>
                                            <tr>
                                                <td>XRPUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 01:05-17:00 Sunday 00:05-23:59</td>
                                            </tr>
                                            <tr>
                                                <td>XLMUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 01:05-17:00 Sunday 00:05-23:59</td>
                                            </tr>
                                            <tr>
                                                <td>DOTUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 01:05-17:00 Sunday 00:05-23:59</td>
                                            </tr>
                                            <tr>
                                                <td>LNKUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 01:05-17:00 Sunday 00:05-23:59</td>
                                            </tr>
                                            <tr>
                                                <td>DSHUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>
                                            <tr>
                                                <td>EOSUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>
                                            <tr>
                                                <td>EMCUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>
                                            <tr>
                                                <td>NMCUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>
                                            <tr>
                                                <td>PPCUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>
                                            <tr>
                                                <td>ADAUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>
                                            <tr>
                                                <td>XTZUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>            
                                            <tr>
                                                <td>DOGUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>       
                                            <tr>
                                                <td>UNIUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>
                                            <tr>
                                                <td>BNBUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>
                                            <tr>
                                                <td>SOLUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>
                                            <tr>
                                                <td>MTCUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>
                                            <tr>
                                                <td>LUNUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>
                                            <tr>
                                                <td>KSMUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>
                                            <tr>
                                                <td>GLMUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>                                            
                                            <tr>
                                                <td>AVXUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>                                            
                                            </tbody>
                                        </table>	
										<table className="table  table-striped">
                                            <thead className="table-header">
                                            <tr>
                                                <th>Cryptocurrency 加密货币</th>
                                                <th>cTrader</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>BCHUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>
                                            <tr>
                                                <td>BTCUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>
                                            <tr>
                                                <td>ETHUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>
                                            <tr>
                                                <td>LTCUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>
                                            <tr>
                                                <td>DSHUSD</td>
                                                <td>Monday - Thursday 00:05-23:59 Friday 00:05-23:55</td>
                                            </tr>                                        
                                            </tbody>
                                        </table>	
								</div>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading8">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
							  股票
							</button>
						  </h2>
						</div>
						<div id="collapse8" className="collapse" aria-labelledby="heading8" data-parent="#accordionExample">
						  <div className="card-body">
							 <div className="table-responsive">	
									<table className="table  table-striped">
                                            <thead className="table-header">
                                            <tr>
                                                <th>Stocks 股票</th>
                                                <th>Stock Exchange Name 股票交易所名称</th>
                                                <th>Trading sessions 交易时段</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>ASX</td>
                                                <td>Australian Stock Exchange 澳大利亚证券交易所</td>
                                                <td>02:10 - 07:55</td>
                                            </tr>
                                            <tr>
                                                <td>NYSE</td>
                                                <td>New York Stock Exchange 纽约证券交易所</td>
                                                <td>16:35 - 22:55</td>
                                            </tr>
                                            <tr>
                                                <td>NAS</td>
                                                <td>NASDAQ Basic 纳斯达克交易所</td>
                                                <td>16:35 - 22:55</td>
                                            </tr>
                                            <tr>
                                                <td>ETR</td>
                                                <td>Xetra German Stock Exchange</td>
                                                <td>10:05 - 18:25</td>
                                            </tr>
                                            <tr>
                                                <td>AMS</td>
                                                <td>Amsterdam Stock Exchange</td>
                                                <td>10:05 - 18:25</td>
                                            </tr>
                                            <tr>
                                                <td>PAR</td>
                                                <td>Paris Stock Exchange</td>
                                                <td>10:05 - 18:25</td>
                                            </tr>
                                            <tr>
                                                <td>MAD</td>
                                                <td>Madrid Stock Exchange</td>
                                                <td>10:05 - 18:25</td>
                                            </tr>
                                            <tr>
                                                <td>LSE</td>
                                                <td>London Stock Exchange</td>
                                                <td>10:05 - 18:25</td>
                                            </tr>
                                            </tbody>
                                        </table>       							
								</div>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading9">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
							  债券期货
							</button>
						  </h2>
						</div>
						<div id="collapse9" className="collapse" aria-labelledby="heading9" data-parent="#accordionExample">
						  <div className="card-body">
							 <div className="table-responsive">	
									<table className="table  table-striped">
                                            <thead className="table-header">
                                            <tr>
                                                <th>符号</th>
                                                <th>名称</th>
                                                <th>交易时间</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>ITBTP10Y</td>
                                                <td>BTP Italian Bonds 意大利公债</td>
                                                <td>周一 09:00 到周五 20:00</td>
                                            </tr>
                                            <tr>
                                                <td>EURBOBL</td>
                                                <td>Euro Bobl 欧洲中期公债</td>
                                                <td>周一 09:00 到周五 22:59</td>
                                            </tr>
                                            <tr>
                                                <td>EURBUND</td>
                                                <td>Euro Bund 欧洲长期公债</td>
                                                <td>周一 09:00 到周五 22:59</td>
                                            </tr>
                                            <tr>
                                                <td>EURSCHA</td>
                                                <td>Euro Schatz 欧洲短期公债</td>
                                                <td>周一 09:00 到周五 22:59</td>
                                            </tr>
                                            <tr>
                                                <td>UKGB</td>
                                                <td>UK Long Gilt 英国长期公债</td>
                                                <td>周一 10:00 到周五 20:00</td>
                                            </tr>
                                            <tr>
                                                <td>UST10Y</td>
                                                <td>US 10 YR T-Note 美国10年公债</td>
                                                <td>周一 01:00 到周五 23:55</td>
                                            </tr>
                                            <tr>
                                                <td>UST05Y</td>
                                                <td>US 5 YR T-Note 美国5年公债</td>
                                                <td>周一 01:00 到周五 23:55</td>
                                            </tr>
                                            <tr>
                                                <td>UST30Y</td>
                                                <td>US 30 YR T-Note 美国30年公债</td>
                                                <td>周一 01:00 到周五 23:55</td>
                                            </tr>
                                            <tr>
                                                <td>JGB10Y</td>
                                                <td>Japanese 10yr 日本10年公债</td>
                                                <td>周一 03:00 到周五 19:00 (Daily Break 12:10 - 13:30)</td>
                                            </tr>
                                            </tbody>
                                        </table>    							
								</div>
						  </div>
						</div>
					  </div>
					  
					</div>
				</div>
						
			</div>			
		</div>
	</div>

	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >立即开始交易</h3>		
					<h1 className="f55 mb-5">值得信赖的全球 CFD 交易商</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function Zx(){const{t:e}=F();return n.jsx(K,{title:e("pages.tradingServers.title"),subtitle:e("pages.tradingServers.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
				<div className="w-full md:w-5/12">
					<a href="MT5-iphone.html" className="text-primary">TRADING SERVERS</a>
				</div>
			</div>
		</div>
	</div>
	
	<div className="w-full maket_header metatrader_cont" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-12/12 ">						
					<h4 className="font-bold mb-4"> BKS Markets的MT5交易服务器分别位于纽约的NY4 Equinix数据中心和伦敦LD5 IBX Equinix数据中心，为客户提供最快的执行速度。 Equinix的数据中心是全球闻名的安全和可靠的数据中心。</h4>
								
				</div>				
				
								
			</div>			
		</div>
	</div>
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center ">				
				<div className="w-full md:w-12/12">						
					<h1 className="pb-3">什么是Equinix NY4和LD5数据中心?</h1>
					<h5>Equinix NY4（纽约）和LD5（伦敦）数据中心是60多家股票交易平台,400多家买卖公司、150多家金融服务商、675加网络带宽的一致选择。
</h5><h5>
Equinix的数据中心被称为是世界上最可靠的数据中心。在这些设施中金融市场的参与者可以在低延迟环境中互动，以确保超高速数据的传输，从而为最终用户提供最快的执行速度。</h5>
					<h1 className="pt-4 pb-3">Equinix NY4 的优势</h1>
					<h5> BKS Markets MetaTrader 4和5服务器目前位于纽约的NY4数据中心，与我们的价格提供商并置，包括最多25个不同银行和非银行场所的汇总。
</h5><h5>
在NY4托管的Metatrader服务器可以与MT5服务器、整体服务器以及 BKS Markets的所有流动性提供商之间交叉互连，这些专线连接使得最终客户可以享受到超低延迟以及超高速的执行速度。
</h5><h5>
超低延迟的交易环境使得我们可以为全球客户提供超快速的执行速度，从而确保客户的订单可以成交在可能的最优价格上。</h5>
					<h1 className="pt-4 pb-3">Equinix LD5 的优势</h1>
					<h5>我们架设在伦敦LD5数据中心的cTrader服务器和MetaTrader服务器一样，也可以获得与流动性提供商最佳的连接速度。
</h5><h5>
cTrader服务器专为快速连接而设计，无需费用即可确保为 CFD 交易者提供最佳环境。 这使得cTrader成为欧洲及周边地区手动和自动交易者的理想平台和设置。</h5>
				
				
				</div>				
				
								
			</div>			
		</div>
	</div>
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >开始交易</h3>		
					<h1 className="f55 mb-5">在您值得信赖的监管经纪商开户交易</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function e0(){const{t:e}=F();return n.jsx(K,{title:e("pages.swapRates.title"),subtitle:e("pages.swapRates.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
				<div className="w-full md:w-4/12">
						
				</div>
				<div className="w-full md:w-4/12">
					<a href="swap-rates.html" className="text-primary">隔夜利息</a>		
				</div>
				
			</div>
		</div>
	</div>	
	
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				
					
					<div className="w-full md:w-2/12 text-center"><img src="images/swap-rates-swaps.png"></div>
					<div className="w-full md:w-6/12 ">						
						<h1 className="font-bold pb-4">外汇隔夜利息: 是什么?</h1>
						<h5 className="">外汇隔夜利息或过夜利息是指持仓过夜需要支付或者收取的隔夜利息。 隔夜利息取决于做多或做空某两种货币，他们存在过夜利息的不同。</h5>
					</div>
					<div className="w-full md:w-4/12">
						<div className="double-sidebar-block">                        
							<div className="contact-card contact-block">                        
								<div className="contact-header">
									<div className="header-label">联系我们</div>
									<div className="header-title">客服支持24/7。</div>
								</div>
								<div className="contact-pre-imaged chat-img">
									<div><a id="contact_card_help" href="help-center.html">Help Centre</a></div>
								</div>
								
								<div className="contact-pre-imaged email-img">
									 <div><a id="contact_card_email" href="mailto:support@bksmarkets.com">Email Us</a></div>
								</div>
							</div>
						</div>
					</div>
				
				
			</div>			
		</div>
	</div>
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around">
				<div className="w-full md:w-12/12"><h1 className="f50">关于隔夜利息，你应该了解什么？</h1></div>
				<div className="w-full md:w-6/12 pr-5">						
					<h5 className="pre-i">只有在持仓一直到第二个 CFD 交易日才会有隔夜费。
</h5><h5 className=" pre-i">
一些货币对可能存在不论做多还是做空都是负值的情况。
</h5><h5 className=" pre-i">
隔夜利息以点计算，MT5自动将其转换为您账户的基础货币。</h5>
				</div>
				<div className="w-full md:w-6/12 pl-5">						
					<h5 className="pre-i">每一个货币对有其自己的隔夜费收取标准，衡量的基础是1手的标准大小.
</h5><h5 className=" pre-i">
On Wednesday night swaps for FX, Metals, Bonds and Commodities are charged a triple rate the usual rate. On Friday night swaps for Energies, Indices and Cryptocurrencies are charged a triple rate the usual rate.</h5>
				</div>	
								
			</div>			
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12 ">	
					<h1 className="f50 pb-3">隔夜利息费率</h1>
					<h5 className="pb-4">You will able to view the latest swap rates within your MetaTrader 5 trading terminal by following the process outlined below.
</h5><h5 className="pb-4">
右键单击在“市场观察”部分的任何产品，然后从下拉菜单中单击左键“规格”选项。将打开一个新窗口，显示所选中产品的做多和做空隔夜利息费率。</h5>
				
				</div>	
				
			</div>			
		</div>
	</div>
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >开始交易</h3>		
					<h1 className="f55 mb-5">一个正在的True ECN经纪商</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function t0(){const{t:e}=F(),t=[{name:e("pages.metatrader5.platformLinks.mtPc"),link:"/platforms/metatrader-5",icon:$r},{name:e("pages.metatrader5.platformLinks.mtiPhone"),link:"/platforms/mt5-iphone",icon:Ze},{name:e("pages.metatrader5.platformLinks.mtAndroid"),link:"/platforms/mt5-android",icon:Ze},{name:e("pages.metatrader5.platformLinks.mtMac"),link:"/platforms/mt5-mac",icon:zr}],a=[e("pages.metatrader5.features1"),e("pages.metatrader5.features2"),e("pages.metatrader5.features3"),e("pages.metatrader5.features4"),e("pages.metatrader5.features5"),e("pages.metatrader5.features6")],r=[{title:e("pages.metatrader5.ultraFastExecutionTitle"),description:e("pages.metatrader5.ultraFastExecutionDescription"),additional:e("pages.metatrader5.ultraFastExecutionAdditional"),icon:$t},{title:e("pages.metatrader5.noTradingRestrictionsTitle"),description:e("pages.metatrader5.noTradingRestrictionsDescription"),additional:e("pages.metatrader5.noTradingRestrictionsAdditional"),icon:Qe},{title:e("pages.metatrader5.spreadLowestTitle"),description:e("pages.metatrader5.spreadLowestDescription"),additional:e("pages.metatrader5.spreadLowestAdditional"),icon:ye}];return n.jsxs(K,{title:e("pages.metatrader5.title"),subtitle:e("pages.metatrader5.subtitle"),bannerImage:"/images/metatrader_banner.jpg",children:[n.jsx("section",{className:"py-8 bg-white border-b border-gray-200",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:t.map((s,i)=>{const l=s.icon;return n.jsxs(I,{to:s.link,className:"flex items-center px-6 py-3 bg-white border border-gray-300 rounded-full hover:border-gold-400 hover:bg-gold-50 transition-all duration-300 text-gray-700 hover:text-gold-600",children:[n.jsx(l,{className:"w-4 h-4 mr-2"}),n.jsx("span",{className:"font-medium",children:s.name})]},i)})})})}),n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[n.jsx("div",{className:"text-center lg:text-left",children:n.jsx("img",{src:"/images/mt5-img.png",alt:"MetaTrader 5",className:"mx-auto lg:mx-0 max-w-full h-auto rounded-lg shadow-lg"})}),n.jsx("div",{children:n.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 shadow-lg p-8",children:[n.jsxs("div",{className:"mb-6",children:[n.jsx("p",{className:"text-sm text-gray-500 mb-1",children:e("pages.metatrader5.metaTrader5")}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:e("pages.metatrader5.summary")})]}),n.jsx("div",{className:"space-y-3 mb-8",children:a.map((s,i)=>n.jsxs("div",{className:"flex items-start",children:[n.jsx(Je,{className:"w-5 h-5 text-gold-600 mr-3 flex-shrink-0 mt-0.5"}),n.jsx("span",{className:"text-gray-700",children:s})]},i))}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center bg-gold-gradient text-black py-3 px-6 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300",children:e("pages.metatrader5.openAccount")})]})})]})})}),n.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:e("pages.metatrader5.description1")}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:e("pages.metatrader5.description2")}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:e("pages.metatrader5.description3")})]})})}),n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsx("div",{className:"mb-12",children:n.jsxs("div",{className:"flex items-start justify-between mb-8",children:[n.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900",children:e("pages.metatrader5.whyDifferentTitle")}),n.jsxs("div",{className:"hidden lg:block bg-gold-50 border border-gold-200 rounded-lg p-6 max-w-xs",children:[n.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:e("pages.metatrader5.systemRequirements")}),n.jsx("p",{className:"text-gray-700",children:e("pages.metatrader5.systemRequirementsDescription")})]})]})}),n.jsx("div",{className:"space-y-12",children:r.map((s,i)=>{const l=s.icon;return n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-start mb-4",children:[n.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4 flex-shrink-0",children:n.jsx(l,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:s.title})]}),n.jsxs("div",{className:"pl-16 md:pl-20",children:[n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed mb-4",children:s.description}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:s.additional})]})]},i)})}),n.jsxs("div",{className:"lg:hidden mt-8 bg-gold-50 border border-gold-200 rounded-lg p-6",children:[n.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:e("pages.metatrader5.systemRequirements")}),n.jsx("p",{className:"text-gray-700",children:e("pages.metatrader5.systemRequirementsDescription")})]})]})}),n.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:e("pages.metatrader5.ctaStartTrading")}),n.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:[e("pages.metatrader5.ctaTradeWithTrusted")," ",n.jsx("span",{className:"text-gold-600",children:e("pages.metatrader5.forexCfdBroker")})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openAccount")})}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openDemoAccount")})})]})]})})}),n.jsx("section",{className:"py-12 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[n.jsx("div",{className:"flex-1 min-w-[250px]",children:n.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4",children:e("common.useApp")})}),n.jsx("div",{className:"flex-shrink-0",children:n.jsx("img",{src:"/images/iphones.png",alt:"BKS Markets App",className:"h-48 object-contain"})}),n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/appleStore.png",alt:"Download on App Store",className:"h-12"})}),n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/GoogleStore.png",alt:"Get it on Google Play",className:"h-12"})})]})]})})})]})}function a0(){const{t:e}=F(),t=[{name:e("pages.mt5iPhone.platformLinks.mtPc"),link:"/platforms/metatrader-5",icon:$r},{name:e("pages.mt5iPhone.platformLinks.mtiPhone"),link:"/platforms/mt5-iphone",active:!0,icon:Ze},{name:e("pages.mt5iPhone.platformLinks.mtAndroid"),link:"/platforms/mt5-android",icon:Ze},{name:e("pages.mt5iPhone.platformLinks.mtMac"),link:"/platforms/mt5-mac",icon:zr}],a=e("pages.mt5iPhone.features",{returnObjects:!0}),r=e("pages.mt5iPhone.characteristics",{returnObjects:!0}),s=e("pages.mt5iPhone.advantages",{returnObjects:!0});return n.jsxs(K,{title:e("pages.mt5iPhone.title"),subtitle:e("pages.mt5iPhone.subtitle"),bannerImage:"/images/metatrader_banner.jpg",children:[n.jsx("section",{className:"py-8 bg-white border-b border-gray-200",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:t.map((i,l)=>{const o=i.icon;return n.jsxs(I,{to:i.link,className:`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${i.active?"bg-gold-gradient text-black hover:shadow-gold-lg":"bg-white border border-gray-300 text-gray-700 hover:border-gold-400 hover:bg-gold-50"}`,children:[o&&n.jsx(o,{className:"w-4 h-4 mr-2"}),i.name]},l)})})})}),n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[n.jsx("div",{className:"text-center lg:text-left",children:n.jsx("img",{src:"/images/mt-ios-img.png",alt:"MetaTrader 5 iPhone",className:"mx-auto lg:mx-0 max-w-full h-auto rounded-lg shadow-lg"})}),n.jsx("div",{children:n.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 shadow-lg p-8",children:[n.jsxs("div",{className:"mb-6",children:[n.jsx("p",{className:"text-sm text-gray-500 mb-1",children:e("pages.mt5iPhone.summaryTitle")}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:e("pages.mt5iPhone.summary")})]}),n.jsx("div",{className:"space-y-3 mb-8",children:a.map((i,l)=>n.jsxs("div",{className:"flex items-start",children:[n.jsx(Je,{className:"w-5 h-5 text-gold-600 mr-3 flex-shrink-0 mt-0.5"}),n.jsx("span",{className:"text-gray-700",children:i})]},l))}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center bg-gold-gradient text-black py-3 px-6 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300",children:e("pages.mt5iPhone.openAccount")})]})})]})})}),n.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"max-w-4xl mx-auto space-y-4",children:[n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:e("pages.mt5iPhone.description1")}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:e("pages.mt5iPhone.description2")})]})})}),n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{className:"flex items-start justify-between mb-8",children:[n.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900",children:e("pages.mt5iPhone.tradeOnTitle")}),n.jsxs("div",{className:"hidden lg:block bg-gold-50 border border-gold-200 rounded-lg p-6 max-w-xs flex-shrink-0 ml-8",children:[n.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:e("pages.mt5iPhone.systemRequirements")}),n.jsx("p",{className:"text-gray-700",children:e("pages.mt5iPhone.systemRequirementsDescription")})]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-12",children:[n.jsxs("div",{className:"flex items-center mb-8",children:[n.jsx("div",{className:"p-3 bg-gradient-to-br from-gold-100 to-gold-50 rounded-xl mr-4 shadow-sm",children:n.jsx($t,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:e("pages.mt5iPhone.characteristicsTitle")})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.map((i,l)=>n.jsxs("div",{className:"flex items-start p-4 bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-100 hover:border-gold-200 hover:shadow-md transition-all duration-300 group",children:[n.jsx("div",{className:"flex-shrink-0 mr-4 mt-0.5",children:n.jsx("div",{className:"w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center group-hover:bg-gold-200 transition-colors duration-300",children:n.jsx(Je,{className:"w-4 h-4 text-gold-600"})})}),n.jsx("span",{className:"text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300",children:i})]},l))})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center mb-8",children:[n.jsx("div",{className:"p-3 bg-gradient-to-br from-gold-100 to-gold-50 rounded-xl mr-4 shadow-sm",children:n.jsx(ye,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:e("pages.mt5iPhone.advantagesTitle")})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:s.map((i,l)=>n.jsxs("div",{className:"flex items-start p-4 bg-gradient-to-br from-gold-50/50 to-white rounded-lg border border-gold-100 hover:border-gold-300 hover:shadow-md transition-all duration-300 group",children:[n.jsx("div",{className:"flex-shrink-0 mr-4 mt-0.5",children:n.jsx("div",{className:"w-6 h-6 bg-gold-200 rounded-full flex items-center justify-center group-hover:bg-gold-300 transition-colors duration-300",children:n.jsx(ye,{className:"w-4 h-4 text-gold-700"})})}),n.jsx("p",{className:"text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300",children:i})]},l))})]})]}),n.jsxs("div",{className:"lg:hidden mt-8 bg-gold-50 border border-gold-200 rounded-lg p-6",children:[n.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:e("pages.mt5iPhone.systemRequirements")}),n.jsx("p",{className:"text-gray-700",children:e("pages.mt5iPhone.systemRequirementsDescription")})]})]})}),n.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:e("pages.mt5iPhone.ctaTitle")}),n.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:[e("pages.mt5iPhone.ctaSubtitle")," ",n.jsx("span",{className:"text-gold-600",children:e("pages.mt5iPhone.ctaAccount")})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("pages.mt5iPhone.ctaOpenAccount")})}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("pages.mt5iPhone.ctaDemoAccount")})})]})]})})}),n.jsx("section",{className:"py-12 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[n.jsx("div",{className:"flex-1 min-w-[250px]",children:n.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4",children:e("pages.mt5iPhone.appDownloadTitle")})}),n.jsx("div",{className:"flex-shrink-0",children:n.jsx("img",{src:"/images/iphones.png",alt:"BKS Markets App",className:"h-48 object-contain"})}),n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/appleStore.png",alt:"Download on App Store",className:"h-12"})}),n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/GoogleStore.png",alt:"Get it on Google Play",className:"h-12"})})]})]})})})]})}function r0(){const{t:e}=F(),t=[{name:e("pages.mt5Android.platformLinks.mtPc"),link:"/platforms/metatrader-5",icon:$r},{name:e("pages.mt5Android.platformLinks.mtiPhone"),link:"/platforms/mt5-iphone",icon:Ze},{name:e("pages.mt5Android.platformLinks.mtAndroid"),link:"/platforms/mt5-android",active:!0,icon:Ze},{name:e("pages.mt5Android.platformLinks.mtMac"),link:"/platforms/mt5-mac",icon:zr}],a=e("pages.mt5Android.features",{returnObjects:!0}),r=e("pages.mt5Android.characteristics",{returnObjects:!0}),s=e("pages.mt5Android.advantages",{returnObjects:!0});return n.jsxs(K,{title:e("pages.mt5Android.title"),subtitle:e("pages.mt5Android.subtitle"),bannerImage:"/images/metatrader_banner.jpg",children:[n.jsx("section",{className:"py-8 bg-white border-b border-gray-200",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:t.map((i,l)=>{const o=i.icon;return n.jsxs(I,{to:i.link,className:`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${i.active?"bg-gold-gradient text-black hover:shadow-gold-lg":"bg-white border border-gray-300 text-gray-700 hover:border-gold-400 hover:bg-gold-50"}`,children:[o&&n.jsx(o,{className:"w-4 h-4 mr-2"}),i.name]},l)})})})}),n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[n.jsx("div",{className:"text-center lg:text-left",children:n.jsx("img",{src:"/images/mt-android-img.png",alt:"MetaTrader 5 Android",className:"mx-auto lg:mx-0 max-w-full h-auto rounded-lg shadow-lg"})}),n.jsx("div",{children:n.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 shadow-lg p-8",children:[n.jsxs("div",{className:"mb-6",children:[n.jsx("p",{className:"text-sm text-gray-500 mb-1",children:e("pages.mt5Android.summaryTitle")}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:e("pages.mt5Android.summary")})]}),n.jsx("div",{className:"space-y-3 mb-8",children:a.map((i,l)=>n.jsxs("div",{className:"flex items-start",children:[n.jsx(Je,{className:"w-5 h-5 text-gold-600 mr-3 flex-shrink-0 mt-0.5"}),n.jsx("span",{className:"text-gray-700",children:i})]},l))}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center bg-gold-gradient text-black py-3 px-6 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300",children:e("pages.mt5Android.openAccount")})]})})]})})}),n.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"max-w-4xl mx-auto space-y-4",children:[n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:e("pages.mt5Android.description1")}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:e("pages.mt5Android.description2")})]})})}),n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{className:"flex items-start justify-between mb-8",children:[n.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900",children:e("pages.mt5Android.tradeOnTitle")}),n.jsxs("div",{className:"hidden lg:block bg-gold-50 border border-gold-200 rounded-lg p-6 max-w-xs flex-shrink-0 ml-8",children:[n.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:e("pages.mt5Android.systemRequirements")}),n.jsx("p",{className:"text-gray-700",children:e("pages.mt5Android.systemRequirementsDescription")})]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-12",children:[n.jsxs("div",{className:"flex items-center mb-8",children:[n.jsx("div",{className:"p-3 bg-gradient-to-br from-gold-100 to-gold-50 rounded-xl mr-4 shadow-sm",children:n.jsx($t,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:e("pages.mt5Android.characteristicsTitle")})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.map((i,l)=>n.jsxs("div",{className:"flex items-start p-4 bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-100 hover:border-gold-200 hover:shadow-md transition-all duration-300 group",children:[n.jsx("div",{className:"flex-shrink-0 mr-4 mt-0.5",children:n.jsx("div",{className:"w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center group-hover:bg-gold-200 transition-colors duration-300",children:n.jsx(Je,{className:"w-4 h-4 text-gold-600"})})}),n.jsx("span",{className:"text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300",children:i})]},l))})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center mb-8",children:[n.jsx("div",{className:"p-3 bg-gradient-to-br from-gold-100 to-gold-50 rounded-xl mr-4 shadow-sm",children:n.jsx(ye,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:e("pages.mt5Android.advantagesTitle")})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:s.map((i,l)=>n.jsxs("div",{className:"flex items-start p-4 bg-gradient-to-br from-gold-50/50 to-white rounded-lg border border-gold-100 hover:border-gold-300 hover:shadow-md transition-all duration-300 group",children:[n.jsx("div",{className:"flex-shrink-0 mr-4 mt-0.5",children:n.jsx("div",{className:"w-6 h-6 bg-gold-200 rounded-full flex items-center justify-center group-hover:bg-gold-300 transition-colors duration-300",children:n.jsx(ye,{className:"w-4 h-4 text-gold-700"})})}),n.jsx("p",{className:"text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300",children:i})]},l))})]})]}),n.jsxs("div",{className:"lg:hidden mt-8 bg-gold-50 border border-gold-200 rounded-lg p-6",children:[n.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:e("pages.mt5Android.systemRequirements")}),n.jsx("p",{className:"text-gray-700",children:e("pages.mt5Android.systemRequirementsDescription")})]})]})}),n.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:e("pages.mt5Android.ctaTitle")}),n.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:[e("pages.mt5Android.ctaSubtitle")," ",n.jsx("span",{className:"text-gold-600",children:e("pages.mt5Android.ctaAccount")})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("pages.mt5Android.ctaOpenAccount")})}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("pages.mt5Android.ctaDemoAccount")})})]})]})})}),n.jsx("section",{className:"py-12 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[n.jsx("div",{className:"flex-1 min-w-[250px]",children:n.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4",children:e("pages.mt5Android.appDownloadTitle")})}),n.jsx("div",{className:"flex-shrink-0",children:n.jsx("img",{src:"/images/iphones.png",alt:"BKS Markets App",className:"h-48 object-contain"})}),n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/appleStore.png",alt:"Download on App Store",className:"h-12"})}),n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/GoogleStore.png",alt:"Get it on Google Play",className:"h-12"})})]})]})})})]})}function s0(){const{t:e}=F(),t=[{name:e("pages.mt5Mac.platformLinks.mtPc"),link:"/platforms/metatrader-5",icon:$r},{name:e("pages.mt5Mac.platformLinks.mtiPhone"),link:"/platforms/mt5-iphone",icon:Ze},{name:e("pages.mt5Mac.platformLinks.mtAndroid"),link:"/platforms/mt5-android",icon:Ze},{name:e("pages.mt5Mac.platformLinks.mtMac"),link:"/platforms/mt5-mac",active:!0,icon:zr}],a=e("pages.mt5Mac.features",{returnObjects:!0}),r=e("pages.mt5Mac.characteristics",{returnObjects:!0}),s=e("pages.mt5Mac.advantages",{returnObjects:!0}),i={platform:e("pages.mt5Mac.platformInstallationSteps",{returnObjects:!0}).map((c,m)=>({number:m+1,detail:c})),eas:e("pages.mt5Mac.eaInstallationSteps",{returnObjects:!0}).map((c,m)=>({number:m+1,detail:c})),indicators:e("pages.mt5Mac.indicatorsInstallationSteps",{returnObjects:!0}).map((c,m)=>({number:m+1,detail:c}))},[l,o]=N.useState(null),d=c=>{o(l===c?null:c)};return n.jsxs(K,{title:e("pages.mt5Mac.title"),subtitle:e("pages.mt5Mac.subtitle"),bannerImage:"/images/metatrader_banner.jpg",children:[n.jsx("section",{className:"py-8 bg-white border-b border-gray-200",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:t.map((c,m)=>{const u=c.icon;return n.jsxs(I,{to:c.link,className:`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${c.active?"bg-gold-gradient text-black hover:shadow-gold-lg":"bg-white border border-gray-300 text-gray-700 hover:border-gold-400 hover:bg-gold-50"}`,children:[u&&n.jsx(u,{className:"w-4 h-4 mr-2"}),c.name]},m)})})})}),n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[n.jsx("div",{className:"text-center lg:text-left",children:n.jsx("img",{src:"/images/mt-macos-img.png",alt:"MetaTrader 5 Mac",className:"mx-auto lg:mx-0 max-w-full h-auto rounded-lg shadow-lg"})}),n.jsx("div",{children:n.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 shadow-lg p-8",children:[n.jsxs("div",{className:"mb-6",children:[n.jsx("p",{className:"text-sm text-gray-500 mb-1",children:e("pages.mt5Mac.summaryTitle")}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:e("pages.mt5Mac.summary")})]}),n.jsx("div",{className:"space-y-3 mb-8",children:a.map((c,m)=>n.jsxs("div",{className:"flex items-start",children:[n.jsx(Je,{className:"w-5 h-5 text-gold-600 mr-3 flex-shrink-0 mt-0.5"}),n.jsx("span",{className:"text-gray-700",children:c})]},m))}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center bg-gold-gradient text-black py-3 px-6 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300",children:e("pages.mt5Mac.openAccount")})]})})]})})}),n.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"max-w-4xl mx-auto",children:n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:e("pages.mt5Mac.description")})})})}),n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{className:"flex items-start justify-between mb-8",children:[n.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900",children:e("pages.mt5Mac.tradeOnTitle")}),n.jsxs("div",{className:"hidden lg:block bg-gold-50 border border-gold-200 rounded-lg p-6 max-w-xs flex-shrink-0 ml-8",children:[n.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:e("pages.mt5Mac.systemRequirements")}),n.jsx("p",{className:"text-gray-700",children:e("pages.mt5Mac.systemRequirementsDescription")})]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-12",children:[n.jsxs("div",{className:"flex items-center mb-8",children:[n.jsx("div",{className:"p-3 bg-gradient-to-br from-gold-100 to-gold-50 rounded-xl mr-4 shadow-sm",children:n.jsx($t,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:e("pages.mt5Mac.characteristicsTitle")})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.map((c,m)=>n.jsxs("div",{className:"flex items-start p-4 bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-100 hover:border-gold-200 hover:shadow-md transition-all duration-300 group",children:[n.jsx("div",{className:"flex-shrink-0 mr-4 mt-0.5",children:n.jsx("div",{className:"w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center group-hover:bg-gold-200 transition-colors duration-300",children:n.jsx(Je,{className:"w-4 h-4 text-gold-600"})})}),n.jsx("span",{className:"text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300",children:c})]},m))})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center mb-8",children:[n.jsx("div",{className:"p-3 bg-gradient-to-br from-gold-100 to-gold-50 rounded-xl mr-4 shadow-sm",children:n.jsx(ye,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:e("pages.mt5Mac.advantagesTitle")})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:s.map((c,m)=>n.jsxs("div",{className:"flex items-start p-4 bg-gradient-to-br from-gold-50/50 to-white rounded-lg border border-gold-100 hover:border-gold-300 hover:shadow-md transition-all duration-300 group",children:[n.jsx("div",{className:"flex-shrink-0 mr-4 mt-0.5",children:n.jsx("div",{className:"w-6 h-6 bg-gold-200 rounded-full flex items-center justify-center group-hover:bg-gold-300 transition-colors duration-300",children:n.jsx(ye,{className:"w-4 h-4 text-gold-700"})})}),n.jsx("p",{className:"text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300",children:c})]},m))})]})]}),n.jsxs("div",{className:"lg:hidden mt-8 bg-gold-50 border border-gold-200 rounded-lg p-6",children:[n.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:e("pages.mt5Mac.systemRequirements")}),n.jsx("p",{className:"text-gray-700",children:e("pages.mt5Mac.systemRequirementsDescription")})]})]})}),n.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-8",children:e("pages.mt5Mac.installationTitle")}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden",children:[n.jsxs("button",{onClick:()=>d("platform"),className:"w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200",children:[n.jsx("h3",{className:"text-xl md:text-2xl font-bold text-gray-900",children:e("pages.mt5Mac.platformInstallationTitle")}),l==="platform"?n.jsx(qn,{className:"w-6 h-6 text-gold-600"}):n.jsx(Ss,{className:"w-6 h-6 text-gold-600"})]}),l==="platform"&&n.jsx("div",{className:"px-6 pb-6",children:n.jsx("div",{className:"space-y-4",children:i.platform.map((c,m)=>n.jsxs("div",{className:"flex items-start",children:[n.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-gold-100 text-gold-700 rounded-full flex items-center justify-center font-bold mr-4",children:c.number}),n.jsx("p",{className:"text-gray-700 leading-relaxed pt-1",children:c.detail})]},m))})})]}),n.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden",children:[n.jsxs("button",{onClick:()=>d("eas"),className:"w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200",children:[n.jsx("h3",{className:"text-xl md:text-2xl font-bold text-gray-900",children:e("pages.mt5Mac.eaInstallationTitle")}),l==="eas"?n.jsx(qn,{className:"w-6 h-6 text-gold-600"}):n.jsx(Ss,{className:"w-6 h-6 text-gold-600"})]}),l==="eas"&&n.jsx("div",{className:"px-6 pb-6",children:n.jsx("div",{className:"space-y-4",children:i.eas.map((c,m)=>n.jsxs("div",{className:"flex items-start",children:[n.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-gold-100 text-gold-700 rounded-full flex items-center justify-center font-bold mr-4",children:c.number}),n.jsx("p",{className:"text-gray-700 leading-relaxed pt-1",children:c.detail})]},m))})})]}),n.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden",children:[n.jsxs("button",{onClick:()=>d("indicators"),className:"w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200",children:[n.jsx("h3",{className:"text-xl md:text-2xl font-bold text-gray-900",children:e("pages.mt5Mac.indicatorsInstallationTitle")}),l==="indicators"?n.jsx(qn,{className:"w-6 h-6 text-gold-600"}):n.jsx(Ss,{className:"w-6 h-6 text-gold-600"})]}),l==="indicators"&&n.jsx("div",{className:"px-6 pb-6",children:n.jsx("div",{className:"space-y-4",children:i.indicators.map((c,m)=>n.jsxs("div",{className:"flex items-start",children:[n.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-gold-100 text-gold-700 rounded-full flex items-center justify-center font-bold mr-4",children:c.number}),n.jsx("p",{className:"text-gray-700 leading-relaxed pt-1",children:c.detail})]},m))})})]})]})]})}),n.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:e("pages.mt5Mac.ctaTitle")}),n.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:[e("pages.mt5Mac.ctaSubtitle")," ",n.jsx("span",{className:"text-gold-600",children:e("pages.mt5Mac.ctaAccount")})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("pages.mt5Mac.ctaOpenAccount")})}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("pages.mt5Mac.ctaDemoAccount")})})]})]})})}),n.jsx("section",{className:"py-12 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[n.jsx("div",{className:"flex-1 min-w-[250px]",children:n.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4",children:e("pages.mt5Mac.appDownloadTitle")})}),n.jsx("div",{className:"flex-shrink-0",children:n.jsx("img",{src:"/images/iphones.png",alt:"BKS Markets App",className:"h-48 object-contain"})}),n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/appleStore.png",alt:"Download on App Store",className:"h-12"})}),n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/GoogleStore.png",alt:"Get it on Google Play",className:"h-12"})})]})]})})})]})}function n0(){const{t:e}=F(),t=[{name:e("pages.funding.ecnAccount"),link:"/accounts/raw-spread"},{name:e("pages.funding.standardAccount"),link:"/accounts/standard"},{name:e("pages.funding.accountFunding"),link:"/funding",active:!0},{name:e("pages.funding.withdrawal"),link:"/withdrawal"}],a=[{name:e("pages.funding.creditDebitCards"),icon:Kr,currencies:"AUD USD JPY EUR NZD SGD GBP CAD",processingTime:e("pages.funding.instant"),image:"/images/visa_2.png",image2:"/images/master.png"},{name:"PayPal",icon:Ar,currencies:"AUD USD JPY EUR NZD SGD GBP CAD HKD CHF",processingTime:e("pages.funding.instant"),image:"/images/paypal_2.png"},{name:"USDT",icon:xu,currencies:"USD AUD GBP EUR CAD SGD JPY",processingTime:e("pages.funding.instant"),image:"/images/USDT.png"}],r=[{title:e("pages.funding.paymentProcess"),description:e("pages.funding.paymentProcessDescription"),icon:Nu},{title:e("pages.funding.fundSecurity"),description:e("pages.funding.fundSecurityDescription"),icon:Qe},{title:e("pages.funding.bankFees"),description:e("pages.funding.bankFeesDescription"),icon:Wi},{title:e("pages.funding.thirdPartyPayment"),description:e("pages.funding.thirdPartyPaymentDescription"),icon:Qe}];return n.jsxs(K,{title:e("pages.funding.title"),subtitle:e("pages.funding.subtitle"),children:[n.jsx("section",{className:"py-8 bg-white border-b border-gray-200",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:t.map((s,i)=>n.jsx(I,{to:s.link,className:`px-6 py-3 rounded-full font-medium transition-all duration-300 ${s.active?"bg-gold-gradient text-black hover:shadow-gold-lg":"bg-white border border-gray-300 text-gray-700 hover:border-gold-400 hover:bg-gold-50"}`,children:s.name},i))})})}),n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:a.map((s,i)=>(s.icon,n.jsx("div",{className:"bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",children:n.jsxs("div",{className:"p-6",children:[n.jsxs("div",{className:"mb-4",children:[n.jsx("p",{className:"text-sm text-gray-500 mb-1",children:e("pages.funding.fundingOption")}),n.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:s.name}),n.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[s.image&&n.jsx("img",{src:s.image,alt:s.name,className:"h-8 object-contain"}),s.image2&&n.jsx("img",{src:s.image2,alt:"Mastercard",className:"h-8 object-contain"})]}),n.jsx("p",{className:"text-sm text-gray-600 mb-2",children:e("pages.funding.acceptableCurrencies")}),n.jsx("p",{className:"text-sm font-semibold text-gray-900",children:s.currencies})]}),n.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 mb-6 text-center",children:[n.jsx("p",{className:"text-xs text-gray-600 mb-2",children:e("pages.funding.processingTime")}),n.jsx("span",{className:"inline-block bg-gold-100 text-gold-700 px-4 py-1 rounded-full text-sm font-bold",children:s.processingTime})]}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center bg-gold-gradient text-black py-3 px-6 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300",children:e("pages.funding.openAccount")})]})},i)))})})}),n.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:r.map((s,i)=>{const l=s.icon;return n.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[n.jsxs("div",{className:"flex items-start mb-4",children:[n.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:n.jsx(l,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:s.title})]}),n.jsx("p",{className:"text-gray-700 leading-relaxed",children:s.description})]},i)})})})}),n.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:e("pages.funding.ctaStartTrading")}),n.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:[e("pages.funding.ctaTradeWithTrusted")," ",n.jsx("span",{className:"text-gold-600",children:e("pages.funding.forexCfdBroker")})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openAccount")})}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openDemoAccount")})})]})]})})}),n.jsx("section",{className:"py-12 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[n.jsx("div",{className:"flex-1 min-w-[250px]",children:n.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4",children:e("common.useApp")})}),n.jsx("div",{className:"flex-shrink-0",children:n.jsx("img",{src:"/images/iphones.png",alt:"BKS Markets App",className:"h-48 object-contain"})}),n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/appleStore.png",alt:"Download on App Store",className:"h-12"})}),n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/GoogleStore.png",alt:"Get it on Google Play",className:"h-12"})})]})]})})})]})}function i0(){const{t:e}=F(),t=[{name:e("pages.withdrawal.ecnAccount"),link:"/accounts/raw-spread"},{name:e("pages.withdrawal.standardAccount"),link:"/accounts/standard"},{name:e("pages.withdrawal.accountFunding"),link:"/funding"},{name:e("pages.withdrawal.withdrawal"),link:"/withdrawal",active:!0}],a=[{title:e("pages.withdrawal.deadlineTitle"),description:e("pages.withdrawal.deadlineDescription"),icon:vu},{title:e("pages.withdrawal.bankFeesTitle"),description:e("pages.withdrawal.bankFeesDescription"),icon:Wi},{title:e("pages.withdrawal.wireTransferTitle"),description:e("pages.withdrawal.wireTransferDescription"),icon:Qe},{title:e("pages.withdrawal.cardWithdrawalTitle"),description:e("pages.withdrawal.cardWithdrawalDescription"),icon:Kr},{title:e("pages.withdrawal.excessWithdrawalTitle"),description:e("pages.withdrawal.excessWithdrawalDescription"),icon:Wi},{title:e("pages.withdrawal.paypalWithdrawalTitle"),description:e("pages.withdrawal.paypalWithdrawalDescription"),icon:Qe}],r=[e("pages.withdrawal.additionalPoint1"),e("pages.withdrawal.additionalPoint2"),e("pages.withdrawal.additionalPoint3"),e("pages.withdrawal.additionalPoint4"),e("pages.withdrawal.additionalPoint5"),e("pages.withdrawal.additionalPoint6")];return n.jsxs(K,{title:e("pages.withdrawal.title"),subtitle:e("pages.withdrawal.subtitle"),children:[n.jsx("section",{className:"py-8 bg-white border-b border-gray-200",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:t.map((s,i)=>n.jsx(I,{to:s.link,className:`px-6 py-3 rounded-full font-medium transition-all duration-300 ${s.active?"bg-gold-gradient text-black hover:shadow-gold-lg":"bg-white border border-gray-300 text-gray-700 hover:border-gold-400 hover:bg-gold-50"}`,children:s.name},i))})})}),n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{className:"mb-8",children:[n.jsxs("div",{className:"bg-gradient-to-r from-gold-50 to-white p-6 rounded-xl border-l-4 border-gold-600 mb-6",children:[n.jsx("p",{className:"text-lg font-semibold text-gray-900 mb-2",children:e("pages.withdrawal.fasterProcessing")}),n.jsx("p",{className:"text-gray-700",children:e("pages.withdrawal.accessInstructions")})]}),n.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-8",children:e("pages.withdrawal.noteBeforeFirst")})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-12",children:a.map((s,i)=>{const l=s.icon;return n.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[n.jsxs("div",{className:"flex items-start mb-3",children:[n.jsx("div",{className:"p-2 bg-gold-50 rounded-full mr-3",children:n.jsx(l,{className:"w-5 h-5 text-gold-600"})}),n.jsx("h3",{className:"text-lg font-bold text-gray-900",children:s.title})]}),n.jsx("p",{className:"text-gray-700 leading-relaxed ml-10",children:s.description})]},i)})}),n.jsxs("div",{className:"bg-gray-50 rounded-xl p-8 border border-gray-200",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-6",children:e("pages.withdrawal.otherImportantInfo")}),n.jsx("div",{className:"space-y-4",children:r.map((s,i)=>n.jsxs("div",{className:"flex items-start",children:[n.jsx(Je,{className:"w-5 h-5 text-gold-600 mr-3 flex-shrink-0 mt-0.5"}),n.jsx("p",{className:"text-gray-700 leading-relaxed",children:s})]},i))})]})]})}),n.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:e("pages.withdrawal.ctaStartTrading")}),n.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:[e("pages.withdrawal.ctaTradeWithTrusted")," ",n.jsx("span",{className:"text-gold-600",children:e("pages.withdrawal.forexCfdBroker")})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openAccount")})}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openDemoAccount")})})]})]})})}),n.jsx("section",{className:"py-12 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[n.jsx("div",{className:"flex-1 min-w-[250px]",children:n.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4",children:e("common.useApp")})}),n.jsx("div",{className:"flex-shrink-0",children:n.jsx("img",{src:"/images/iphones.png",alt:"BKS Markets App",className:"h-48 object-contain"})}),n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/appleStore.png",alt:"Download on App Store",className:"h-12"})}),n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/GoogleStore.png",alt:"Get it on Google Play",className:"h-12"})})]})]})})})]})}function l0(){const{t:e}=F(),t=[{name:e("pages.why.spread"),link:"/trading/spreads"},{name:e("pages.why.simpleQuotes"),link:"/trading/spreads"},{name:e("pages.why.cfdTrading"),link:"/forex-trading"}],a=[{title:e("pages.why.lowerSpreadsTitle"),description:e("pages.why.lowerSpreadsDescription"),icon:Cv},{title:e("pages.why.fastExecutionTitle"),description:e("pages.why.fastExecutionDescription"),icon:$t},{title:e("pages.why.advancedTechTitle"),description:e("pages.why.advancedTechDescription"),icon:fd}],r=[{title:e("pages.why.ultimateSupportTitle"),description:e("pages.why.ultimateSupportDescription"),icon:Nd},{title:e("pages.why.flexibleVolumeTitle"),description:e("pages.why.flexibleVolumeDescription"),icon:ye}],s=[{title:e("pages.why.unparalleledServiceTitle"),description:e("pages.why.unparalleledServiceDescription"),icon:vd},{title:e("pages.why.advancedToolsTitle"),description:e("pages.why.advancedToolsDescription"),icon:Nd},{title:e("pages.why.excellentPlatformTitle"),description:e("pages.why.excellentPlatformDescription"),icon:fd},{title:e("pages.why.trustTransparencyTitle"),description:e("pages.why.trustTransparencyDescription"),icon:Qe}];return n.jsxs(K,{title:e("pages.why.title"),subtitle:e("pages.why.subtitle"),children:[n.jsx("section",{className:"py-8 bg-white border-b border-gray-200",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:t.map((i,l)=>n.jsx(I,{to:i.link,className:"px-6 py-3 bg-white border border-gray-300 rounded-full hover:border-gold-400 hover:bg-gold-50 transition-all duration-300 text-gray-700 hover:text-gold-600 font-medium",children:i.name},l))})})}),n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsx("div",{className:"mb-8",children:n.jsx("div",{className:"bg-gradient-to-r from-gold-50 to-white p-6 rounded-xl border-l-4 border-gold-600 mb-6",children:n.jsx("p",{className:"text-lg font-semibold text-gray-900",children:e("pages.why.joinUsDescription")})})}),n.jsx("div",{className:"space-y-12",children:a.map((i,l)=>{const o=i.icon;return n.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[n.jsxs("div",{className:"flex items-start mb-4",children:[n.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:n.jsx(o,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900",children:i.title})]}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed ml-14",children:i.description})]},l)})})]})}),n.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:r.map((i,l)=>{const o=i.icon;return n.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[n.jsxs("div",{className:"flex items-start mb-4",children:[n.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:n.jsx(o,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:i.title})]}),n.jsx("p",{className:"text-gray-700 leading-relaxed ml-14",children:i.description})]},l)})})})}),n.jsx("section",{className:"py-12 md:py-16 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"space-y-8",children:s.map((i,l)=>{const o=i.icon;return n.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[n.jsxs("div",{className:"flex items-start mb-4",children:[n.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:n.jsx(o,{className:"w-6 h-6 text-gold-600"})}),n.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:i.title})]}),n.jsx("p",{className:"text-gray-700 leading-relaxed ml-14",children:i.description})]},l)})})})}),n.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{className:"max-w-md mx-auto",children:n.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-lg",children:[n.jsxs("div",{className:"mb-6",children:[n.jsx("p",{className:"text-sm text-gray-500 mb-1",children:e("pages.why.contactUs")}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:e("common.customerSupport")})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs(I,{to:"/help",className:"flex items-center p-4 bg-gold-50 rounded-lg hover:bg-gold-100 transition-colors duration-200",children:[n.jsx("div",{className:"p-2 bg-gold-100 rounded-full mr-3",children:n.jsx(vd,{className:"w-5 h-5 text-gold-600"})}),n.jsx("span",{className:"font-semibold text-gray-900",children:e("pages.why.helpCentre")})]}),n.jsxs("a",{href:"mailto:support@bksmarkets.com",className:"flex items-center p-4 bg-gold-50 rounded-lg hover:bg-gold-100 transition-colors duration-200",children:[n.jsx("div",{className:"p-2 bg-gold-100 rounded-full mr-3",children:n.jsx(Je,{className:"w-5 h-5 text-gold-600"})}),n.jsx("span",{className:"font-semibold text-gray-900",children:e("pages.why.emailUs")})]})]})]})})})}),n.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:e("common.startTrading")}),n.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:[e("common.trustedGlobal")," ",n.jsx("span",{className:"text-gold-600",children:e("common.cfdBroker")})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openAccount")})}),n.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:n.jsx("strong",{children:e("common.openDemoAccount")})})]})]})})}),n.jsx("section",{className:"py-12 bg-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[n.jsx("div",{className:"flex-1 min-w-[250px]",children:n.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4",children:e("common.useApp")})}),n.jsx("div",{className:"flex-shrink-0",children:n.jsx("img",{src:"/images/iphones.png",alt:"BKS Markets App",className:"h-48 object-contain"})}),n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/appleStore.png",alt:"Download on App Store",className:"h-12"})}),n.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:n.jsx("img",{src:"/images/GoogleStore.png",alt:"Get it on Google Play",className:"h-12"})})]})]})})})]})}function o0(){const{t:e}=F();return n.jsx(K,{title:e("pages.advantagesOfForex.title"),subtitle:e("pages.advantagesOfForex.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
				<div className="w-full md:w-4/12">
					<a href="advantages-of-forex.html" className="text-primary">ADVANTAGES OF FOREX</a>		
				</div>
				<div className="w-full md:w-4/12">
					<a href="advantages-of-cfds.html" className="text-secondary">ADVANTAGES OF CFDS</a>		
				</div>				
			</div>
		</div>
	</div>		
	
	
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12 maket_header pb-0">	
					<div className="float-right">
						<div className="double-sidebar-block">                        
							<div className="contact-card contact-block ">                        
								<div className="contact-header">
									<div className="header-label">联系我们</div>
									<div className="header-title">客服支持24/7。</div>
								</div>
								<div className="contact-pre-imaged chat-img">
									<div><a id="contact_card_help" href="help-center.html">Help Centre</a></div>
								</div>
								
								<div className="contact-pre-imaged email-img">
									 <div><a id="contact_card_email" href="mailto:support@bksmarkets.com">Email Us</a></div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<h4 className="font-bold pb-4">外汇保证金是双方当事人之间的合同，双方同意在头寸开立和平仓时兑换货币价值的差额。</h4>
						<h5 className="pb-3">外汇的主要优势是每周5天24小时开放，这就使交易者能使用杠杆从周日晚上到周五晚上都可以进行买卖，以便从全球货币流动和新闻事件中进行投机。外汇市场也是世界上最大和最具流动性的市场，使它成为能够公平参与市场竞争和真实价格提现的一个真正的平台。</h5>
						<h5 className="pb-4"> CFD 交易的一些优点如下。了解为什么外汇市场是世界上增长最快的市场。</h5>
					</div>
				</div>	
				
			</div>			
		</div>
	</div>
	
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12  ">	
					<h1 className=" pb-3">24 小时交易的市场</h1>
					<h5 className="">外汇市场每天开放24小时，每周5天。当全球主要金融中心对外开放时，交易就开始了。新西兰股市星期日晚间开盘，星期五在纽约股市收盘后结束。当不同时区的股市同时可以交易的时段，流动性是最好的。</h5>
								
				</div>	
			</div>			
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12  ">	
					<h1 className=" pb-3">门槛</h1>
					<h5 className=""> CFD 交易所需的金额一般低于交易其他金融市场所需的金额。除此之外，可以通过电脑终端和移动交易端随时访问外汇市场。</h5>
								
				</div>	
			</div>			
		</div>
	</div>	
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12  ">	
					<h1 className=" pb-3">杠杆</h1>
					<h5 className=""> CFD 交易 可以使用杠杆交易。杠杆意味着仅需要较少的资金即可撬动更大的头寸。例如，如果您的交易账户里有1000美元，使用1:100的杠杆率，您就可以开立价值为100，000美元的头寸（是您账户金额的100倍）。然而，值得注意的是，尽管杠杆使交易者能够开出更大的头寸来最大化潜在的利润，但损失的可能性同样大。</h5>
								
				</div>	
			</div>			
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12  ">	
					<h1 className=" pb-3">流动性</h1>
					<h5 className="">外汇市场的主要优势之一是其极强的流动性。外汇市场是世界上最具流动性的市场，这也是外汇市场与其他金融市场的主要区别因素之一。外汇市场每天的交易量超过5万亿美元，这种高流动性意味着您的资产可以在没有任何价格折扣的情况下快速地转换成现金，从而很容易地将大量的钱转换成一种外币，而对价格影响很小。</h5>
								
				</div>	
			</div>			
		</div>
	</div>
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12  ">	
					<h1 className=" pb-3">在上涨和下跌市场中交易</h1>
					<h5 className="">外汇市场没有限制，您可以多空两个方向做交易。这意味着，如果您认为一个货币对价值会增加，您就可以将其买入或“做多”。同样，如果您相信这对价值会下降，您就可以将其卖出，或者“卖空”。</h5>
								
				</div>	
			</div>			
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12  ">	
					<h1 className=" pb-3">低交易成本</h1>
					<h5 className=""> CFD 交易中的每笔交易成本不到平均股票交易成本的十分之一。这就节约了大量的成本。这也意味着只需较低的资金就可以开始 CFD 交易。</h5>
								
				</div>	
			</div>			
		</div>
	</div>
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12  ">	
					<h1 className=" pb-3">公开透明</h1>
					<h5 className="">在一些场内交易市场中，已知较大的参与者为了获得不公平的优势而操纵股票或大宗商品。鉴于外汇市场的流动性很强，一般的场内势力几乎不可能干预，这就为所有参与者提供一个公平透明的市场</h5>
								
				</div>	
			</div>			
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12  ">	
					<h1 className=" pb-3">市场波动性</h1>
					<h5 className="">由于外汇市场巨大的日成交量，波动也是一直存在的。波动性的加剧意味着更多的交易机会。您有能力选择适合您的交易风格的货币对。例如，澳元/纽元由于其较窄的日间波动幅度和较低的点差，是初学者开始交易的一种很合适的货币对，而欧元/美元由于其较大的日间波动和其涨跌的速度，更适合高级交易者。</h5>
								
				</div>	
			</div>			
		</div>
	</div>
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12  ">	
					<h1 className=" pb-3">非标合同大小</h1>
					<h5 className="">外汇市场是一个场外交易市场，与股票和期货市场不同。这意味着 CFD 交易者在头寸大小方面具有灵活性，可以在0.01标准手（1超迷你手）和200手之间进行任意数量的交易。这给交易者提供了更大的管理风险的能力。</h5>
								
				</div>	
			</div>			
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12  ">	
					<h1 className=" pb-3">劣势</h1>
					<h5 className="">在使用杠杆交易产品之前，您应该首先考虑您的风险偏好和投资策略。使用杠杆有利有弊，既能扩大利润，也会加剧亏损。如果市场出现不利于您的巨幅波动，您的账户可能会出现穿仓。这里需要强调的是您并不实际拥有差价合约下的标的产品。可以在我们网站找到关于CFD交易的收益和风险的详解。</h5>
								
				</div>	
			</div>			
		</div>
	</div>
	
	
	
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >开始交易</h3>		
					<h1 className="f55 mb-5">与全球最值得信赖的外汇CFD经纪商进行交易</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function d0(){const{t:e}=F();return n.jsx(K,{title:e("pages.advantagesOfCfds.title"),subtitle:e("pages.advantagesOfCfds.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
				<div className="w-full md:w-4/12">
					<a href="advantages-of-forex.html" className="text-secondary">ADVANTAGES OF FOREX</a>		
				</div>
				<div className="w-full md:w-4/12">
					<a href="advantages-of-cfds.html" className="text-primary">ADVANTAGES OF CFDS</a>		
				</div>				
			</div>
		</div>
	</div>		
	
	
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12 ">	
					<div className="float-right">
						<div className="double-sidebar-block">                        
							<div className="contact-card contact-block">                        
								<div className="contact-header">
									<div className="header-label">联系我们</div>
									<div className="header-title">客服支持24/7。</div>
								</div>
								<div className="contact-pre-imaged chat-img">
									<div><a id="contact_card_help" href="help-center.html">Help Centre</a></div>
								</div>
								
								<div className="contact-pre-imaged email-img">
									 <div><a id="contact_card_email" href="mailto:support@bksmarkets.com">Email Us</a></div>
								</div>
							</div>
						</div>
					</div>
					<div className="maket_header">
						<h4 className="font-bold pb-4">CFD代表“差价合约”，是双方当事人之间的合同，双方当事人同意在差价合约开立时和关闭时交换证券、票据或其他资产价值的差额。</h4>
						<h5 className="pb-3">CFDS是一种极为流行的产品，越来越受欢迎，成为一种短期投资产品。它们提供了一种有效的方法来最大化您的资本，并且可以帮助分散您现有的投资组合或套期保值。交易CFD的一些优点如下。</h5>
					</div>
				</div>	
				
			</div>			
		</div>
	</div>
	
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12  ">	
					<h1 className=" pb-3">在上涨和下跌市场中投机</h1>
					<h5 className="pb-3">CFDS是基于标的产品的衍生产品。虽然您没有标的资产所有权，但您可以在资产的价格变动中交易。这意味着您既可以在上涨的市场也可以在下跌的市场上获利。
</h5><h5 className="pb-3">
在一个不断上涨的市场，您想买入CFD，然后再出售。这叫做“做多”。
</h5><h5 className="">
在下跌的市场中，您会先卖出一个CFD的头寸，然后在稍后的时间购回该产品从而关闭仓位。这就是所谓的“做空”。</h5>
								
				</div>	
			</div>			
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12  ">	
					<h1 className=" pb-3">资本的有效利用</h1>
					<h5 className="">CFDS是杠杆产品，使交易者能够用少量的资金参与到标的资产的交易中去。当您开仓交易，您只需要在仓位里存入一小部分资金，这就是所谓的保证金。您开仓所需保证金会根据您标的CFD价值的变化而变化。如果市场向对您有利的方向发展，杠杆可以带来额外的收益，但如果市场走势与您开仓方向相反，也会带来风险，杠杆可以导致更多的损失。</h5>
								
				</div>	
			</div>			
		</div>
	</div>	
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12  ">	
					<h1 className=" pb-3">对冲其它投资</h1>
					<h5 className="pb-3">CFD的“做多”和“做空”的特性就意味着它们是对冲现有投资组合的一个很好的产品。这也是一种性价比很高的方式去提前了结现有的投资组合，同时也可以为价格反向运动提供”对冲“。
</h5><h5 className="">
例如，如果您希望持有一个长期投资组合，但您认为，现有投资组合存在一些短期的风险，您可以使用CFD来'对冲'您的头寸。如果投资组合的资产价值下降，您在CFD上的利润将抵消您的投资组合中的损失。</h5>
								
				</div>	
			</div>			
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12  ">	
					<h1 className=" pb-3">灵活的合同大小</h1>
					<h5 className="">CFD的合同大小通常小于标的的投资产品的合同大小，这意味着您可以在不需要巨额保证金的情况下参与到标的投资产品的价格变动中去。灵活的合同大小能够在满足您风险管理标准的情况下设计出符合您的交易需求。</h5>
								
				</div>	
			</div>			
		</div>
	</div>
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12  ">	
					<h1 className=" pb-3">参与全球金融市场</h1>
					<h5 className="">CFDS使交易者能够参与到原本很难进行投资的全球市场。CFD使得交易黄金、白银、石油等商品以及全球指数变得更加便利，而不必交易期货合约本身。</h5>
								
				</div>	
			</div>			
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12  ">	
					<h1 className=" pb-3">劣势</h1>
					<h5 className="">在使用杠杆交易产品之前，您应该首先考虑您的风险偏好和投资策略。使用杠杆有利有弊，既能扩大利润，也会加剧亏损。如果市场出现不利于您的巨幅波动，你的账户可能会出现穿仓。这里需要强调的是您并不实际拥有差价合约下的标的产品。可以在我们网站找到关于CFD交易的收益和风险的详解。</h5>
								
				</div>	
			</div>			
		</div>
	</div>

	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >开始交易</h3>		
					<h1 className="f55 mb-5">与全球最值得信赖的外汇CFD经纪商进行交易</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function c0(){const{t:e}=F();return n.jsx(K,{title:e("pages.educationOverview.title"),subtitle:e("pages.educationOverview.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
				<div className="w-full md:w-4/12">
					<a href="advantages-of-forex.html" className="text-secondary">ADVANTAGES OF FOREX</a>		
				</div>
				<div className="w-full md:w-4/12">
					<a href="advantages-of-cfds.html" className="text-secondary">ADVANTAGES OF CFDS</a>		
				</div>				
			</div>
		</div>
	</div>		
	
	
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12 ">	
					<div className="float-right">
						<div className="double-sidebar-block">                        
							<div className="contact-card contact-block mt-2">                        
								<div className="contact-header">
									<div className="header-label">联系我们</div>
									<div className="header-title">客服支持24/7。</div>
								</div>
								<div className="contact-pre-imaged chat-img">
									<div><a id="contact_card_help" href="help-center.html">Help Centre</a></div>
								</div>
								
								<div className="contact-pre-imaged email-img">
									 <div><a id="contact_card_email" href="mailto:support@bksmarkets.com">Email Us</a></div>
								</div>
							</div>
						</div>
					</div>
					<div style="max-width:600px;">
						<h1 className="font-bold pb-3">开始</h1>
						<h5 className="pb-4">了解外汇（ CFD 交易）市场的一般概念，熟悉外汇市场的一些基本知识。开始您的 CFD 交易，并了解外汇市场的运作方式，基本的技术和基本分析，以及影响外汇市场的因素。</h5>
						<a href="#" className="btn btn-primary" style="border-radius:50px;">了解更多</a>
					</div>
				</div>	
				
			</div>			
		</div>
	</div>
	
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12  ">	
					<h1 className="font-bold pb-3"> CFD 交易的优势</h1>
					<h5 className="pb-4">了解外汇市场交易的众多优势，您会发现外汇市场为什么是公平市场竞争和真正价格发现的真实舞台之一</h5>
					<a href="advantages-of-forex.html" className="btn btn-primary" style="border-radius:50px;">了解更多</a>				
				</div>	
			</div>			
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12  ">	
					<h1 className="font-bold pb-3">差价合约的优势</h1>
					<h5 className="pb-4">了解交易指数差价合约的众多优势，您会发现为什么指数CFD交易市场如此受欢迎。</h5>
					<a href="advantages-of-cfds.html" className="btn btn-primary" style="border-radius:50px;">了解更多</a>				
				</div>	
			</div>			
		</div>
	</div>	
	
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >开始交易</h3>		
					<h1 className="f55 mb-5">与全球最值得信赖的外汇CFD经纪商进行交易</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function m0(){const{t:e}=F();return n.jsx(K,{title:e("pages.forexGlossary.title"),subtitle:e("pages.forexGlossary.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
				<div className="w-full md:w-6/12">
					<a href="forex-glossary.html" className="text-primary">外汇术语</a>		
				</div>			
			</div>
		</div>		
	
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">
				<div className="w-full md:w-12/12 index_shuju pt-3 pb-4">
					<ul className="nav nav-tabs pb-5" id="myTab" role="tablist">
					  <li className="nav-item">
						<a className="nav-link active" id="A-tab" data-toggle="tab" href="#A" role="tab" aria-controls="A" aria-selected="true">A</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="B-tab" data-toggle="tab" href="#B" role="tab" aria-controls="B" aria-selected="false">B</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="C-tab" data-toggle="tab" href="#C" role="tab" aria-controls="C" aria-selected="false">C</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="D-tab" data-toggle="tab" href="#D" role="tab" aria-controls="D" aria-selected="false">D</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="E-tab" data-toggle="tab" href="#E" role="tab" aria-controls="E" aria-selected="false">E</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="F-tab" data-toggle="tab" href="#F" role="tab" aria-controls="F" aria-selected="false">F</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="G-tab" data-toggle="tab" href="#G" role="tab" aria-controls="G" aria-selected="false">G</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="H-tab" data-toggle="tab" href="#H" role="tab" aria-controls="H" aria-selected="false">H</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="I-tab" data-toggle="tab" href="#I" role="tab" aria-controls="I" aria-selected="false">I</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="J-tab" data-toggle="tab" href="#J" role="tab" aria-controls="J" aria-selected="false">J</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="K-tab" data-toggle="tab" href="#K" role="tab" aria-controls="K" aria-selected="false">K</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="L-tab" data-toggle="tab" href="#L" role="tab" aria-controls="L" aria-selected="false">L</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="M-tab" data-toggle="tab" href="#M" role="tab" aria-controls="M" aria-selected="false">M</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="N-tab" data-toggle="tab" href="#N" role="tab" aria-controls="N" aria-selected="false">N</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="O-tab" data-toggle="tab" href="#O" role="tab" aria-controls="O" aria-selected="false">O</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="P-tab" data-toggle="tab" href="#P" role="tab" aria-controls="P" aria-selected="false">P</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="Q-tab" data-toggle="tab" href="#Q" role="tab" aria-controls="Q" aria-selected="false">Q</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="R-tab" data-toggle="tab" href="#R" role="tab" aria-controls="R" aria-selected="false">R</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="S-tab" data-toggle="tab" href="#S" role="tab" aria-controls="S" aria-selected="false">S</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="T-tab" data-toggle="tab" href="#T" role="tab" aria-controls="T" aria-selected="false">T</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="U-tab" data-toggle="tab" href="#U" role="tab" aria-controls="U" aria-selected="false">U</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="V-tab" data-toggle="tab" href="#V" role="tab" aria-controls="V" aria-selected="false">V</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="W-tab" data-toggle="tab" href="#W" role="tab" aria-controls="W" aria-selected="false">W</a>
					  </li>
					</ul>
					<div className="tab-content" id="myTabContent">
					  <div className="tab-pane fade show active" id="A" role="tabpanel" aria-labelledby="A-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">A</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Account balance（账户余额）</h3> <div className="text"><p>账户余额反映您账户的资本，不包括您当前未平仓头寸的利润/亏损。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Account Equity（账户净值）</h3> <div className="text"><p>净值反映您的余额+您的未平仓头寸的浮动盈利/亏损。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">At or Better（以指定价格或以更好价格）</h3> <div className="text"><p>一个订单以特定的价格或或更好的价格快速处理。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">At Best（以最佳价格）</h3> <div className="text"><p>给经销商的指令，以可以获得的最好价格快速买入或卖出。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Ask (Offer) Price（卖出报价）</h3> <div className="text"><p>在一 CFD 交易合同或交叉货币交易合同中一指定货币的卖出价格。以此价格， 交易者可以买进基础货币。在报价中，显示在报价对右侧。例如，美元/瑞郎报价1.4527/32，卖出价为1.4532，这意味着你可以用1.4532瑞士法郎买到1美元。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Arbitrage（套汇）</h3> <div className="text"><p>利用不同市场的对冲价格，通过买入或卖出信用工具，同时在相应市场中买入相同金额但方向相反的头寸，以便从细微价格差额中获利。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Appreciation（增值）</h3> <div className="text"><p>如果一种货币的价格由于市场需求而超过特定的货币价格时被称为"增值"。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="B" role="tabpanel" aria-labelledby="B-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">B</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Bundesbank（联邦银行）</h3> <div className="text"><p>德国中央银行。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Bull Market（牛市）</h3> <div className="text"><p>市场处于长期上涨趋势中，叫做牛市，反之叫做熊市。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Bretton Woods Agreement of 1944（1944年签署的布雷顿伍兹协议）</h3> <div className="text"><p>这是主要关于建立固定货币和外汇利率的协议，在货币市场中为中央银行起到一个干涉的作用，并且限制黄金价格每盎司35美元的价格。该协议持续到1971年，这是自美国总统尼克松下台后布雷顿伍兹第一个同意建立货币浮动利率的协议。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Broker（经纪商）</h3> <div className="text"><p>充当中介的个人或者公司，出于收取手续费或佣金目的，为买方和卖方牵线搭桥。与此相比， " 交易商 " 是经营资本并且购入头寸的一边，希望在接下来的交易中通过向另一方抛售头寸赚取差价（利润）。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Book（账面）</h3> <div className="text"><p>在专业的交易环境里，"账面"是指交易平台的净头寸。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Big Figure（大数）</h3> <div className="text"><p>指汇率的头几位数字。这些数字在正常的市场波动中很少发生变化，因此通常在交易员的报价中被省略，特别是在市场活动频繁的时候。比如，美元 / 日元汇率是 107.30/107.35 ，但是在被口头报价时没有前三位数字，只报 "30/35。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Bid/Ask Spread（点差）</h3> <div className="text"><p>买入与卖出价格的差额。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Bid Price（卖出价）</h3> <div className="text"><p>是指市场准备买入外汇合约特定货币或交叉货币合同的价格。在这个价位上，交易者可卖出基础货币。它显示在报价的左侧。例如，USD/CHF的报1.4527/32，卖出价为1.4527;这意味着你可以卖出1美元获得1.4527瑞士法郎。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Bear Market（熊市）</h3> <div className="text"><p>市场处于长期下跌趋势中，叫做熊市，反之叫做牛市。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Base Currency（基础货币）</h3> <div className="text"><p>其它货币均比照其进行报价的货币。 它表示基础货币相对第二种货币的价值。例 , USD/CHF 报 价为 1.6215 ，即是 1 美元价值 1.6215 瑞士法郎。在 CFD 交易市场中，美元通常被认为是用作报价的 " 基础 " 通货，意即：报价表达式为 1 美元的 1 个单位等于不同单位的其他货币。但是英镑，欧元和澳元例外。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Bar Chart（柱状图）</h3> <div className="text"><p>图表的一种类型，包括四个显著点：高，低价格，形成了竖线，开盘价，标有一个小水平线在左侧。收盘价，标有一个小水平线在右侧。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="C" role="tabpanel" aria-labelledby="C-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">C</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Current Account（经常账户）</h3> <div className="text"><p>或称为"现金账户"，是一国国际收支的主要组成部分，主要包括商品贸易收支，即有形货物的进出口，及服务贸易收支，即诸如旅游、银行及保险等各种服务的往来。经常账户不包含长期借贷和投资的资金流，这些均是资本账户上的项目。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Currency Risk（货币风险）</h3> <div className="text"><p>在利率方面存在的一种不利的并且可变风险。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Currency Pair（货币对）</h3> <div className="text"><p>由两种货币组成的外汇汇率。例如，EUR/USD
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Currency（货币对）</h3> <div className="text"><p>由一个政府或中央银行出具的任何形式的货币作为交易的法定货币作为交易的基础货币。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Currency symbols（货币符号）</h3> <div className="text"><p>AUD – 澳元
</p> <p>CAD – 加拿大元
</p> <p>EUR – 欧元
</p> <p>JPY – 日元
</p> <p>GBP – 英镑
</p> <p>CHF – 瑞士法郎
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Cross Currency Pairs（交叉货币对）</h3> <div className="text"><p>不包含美元的货币对。例如： EUR/JPY 或 GBP/CHF.
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Country Risk（国家风险）</h3> <div className="text"><p>与跨国交易有关，但不包括合法性和政治现状限制的风险。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Counterparty（定约方）</h3> <div className="text"><p>在一次金融业务交易中的参与者。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Counter Currency（计价货币）</h3> <div className="text"><p>货币对中的第二个货币。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Contract（合同）</h3> <div className="text"><p>交易的单位标准。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Confirmation（确认）</h3> <div className="text"><p>将交割单交给对方进行交易确认
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Collateral（抵押品）</h3> <div className="text"><p> 用于获得贷款或作为履约担保的抵押物。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Clearing（清算）</h3> <div className="text"><p> 完成 一交易的过程。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Commission（佣金）</h3> <div className="text"><p> 经纪人收取的交易费用。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Closed Position（已平仓头寸）</h3> <div className="text"><p> 不再持有外汇头寸。平仓的过程是买入或卖出一定量的货币来抵消等量的持仓头寸。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Cleared Funds（资金清算）</h3> <div className="text"><p>不再持有外汇头寸。平仓的过程是买入或卖出一定量的货币来抵消等量的持仓头寸。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Chartist（图表专家）</h3> <div className="text"><p> 使用图表和图形，解释历史数据，以便能找到趋势，预测未来走势，并协助技术分析的人。 也可称为技术交易员。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Central Bank（中央银行）</h3> <div className="text"><p>管理国家货币政策的政府或准政府组织。 例如，美国中央银行是美联储，德国中央银行是德国央行。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Cash Market（现货市场）</h3> <div className="text"><p>一个人们可以买和卖实物商品的场所，如粮仓，银行，等等，见现货和远期合约。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Carry Trade（套利交易）</h3> <div className="text"><p>是指低利率抛售一国货币，同时购买较高利率的货币。例如日元交叉盘如英镑/日元和纽元/日元。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Candlestick Chart（蜡烛图）</h3> <div className="text"><p>表示当日成交价格幅度以及开盘及收盘价格的图表。如果收盘价格低于开盘价格，此矩形会被变暗或填满。如果开盘价高于收盘价，此矩形将不被填充。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="D" role="tabpanel" aria-labelledby="D-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">D</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Discount Rate（贴现率）</h3> <div className="text"><p>是指将未来支付改变为现值所使用的利率，或指持票人以没有到期的票据向银行要求兑现，银行将利息先行扣除所使用的利率。这种贴现率也指再贴现率，即各成员银行将已贴现过的票据作担保，作为向中央银行借款时所支付的利息。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Devaluation（贬值）</h3> <div className="text"><p>货币的价格如果故意向下调整, 通常由官方声明。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Derivative（衍生品）</h3> <div className="text"><p> 是一种金融工具，一般表现为两个主体之间的一个协议，其价格由其他基础产品的价格决定。并且有相应的现货资产作为标的物，成交时不需立即交割，而可在未来时点交割。典型的衍生品包括远期，期货、期权和互换等。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Depreciation（贬值）</h3> <div className="text"><p> 由于市场的力量使一个货币的价值降低。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Delivery（交付）</h3> <div className="text"><p> CFD 交易双方采取实际交付货币的方式兑换货币。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Deficit（赤字）</h3> <div className="text"><p>贸易或国际收支的负结余。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Dealer（交易商）</h3> <div className="text"><p>作为为个人进行交易的个体。负责在适当的价格买进以赚取利润，相反经济人则是单方面的或是固定的中介，收集卖主和买家。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Day Trader（日内交易者）</h3> <div className="text"><p>在同一个交易日内开仓并平仓的投机者。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="E" role="tabpanel" aria-labelledby="E-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">E</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Eurozone Organization for Economic Co-operation and Development (OECD) Leading Indicator（OECD领先指标）</h3> <div className="text"><p> 欧元区组织，经济合作与发展组织（OECD）领先指标。经合组织产生的月度指数，它结合了十个领先指标衡量整体经济的健康，包括：周平均小时，新订单，消费者预期，房产证，股票价格和利率的利差。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">European Central Bank (ECB)（欧洲中央银行）</h3> <div className="text"><p>欧洲中央银行 简称欧洲央行，总管理欧元区的货币政策。它由19个欧盟成员国，是世界上最大的货币区之一。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">EURO（欧元）</h3> <div className="text"><p>欧元区的法定货币，它由欧洲联盟28个成员国中的19国家的统一货币：奥地利，比利时，塞浦路斯，爱沙尼亚，芬兰，法国，德国，希腊，爱尔兰，意大利，拉脱维亚，立陶宛，卢森堡，马耳他，荷兰，葡萄牙，斯洛伐克，斯洛文尼亚和西班牙。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">European Monetary Union (EMU)（欧洲货币联盟）</h3> <div className="text"><p>欧洲货币联盟的主要目标是要建立名为欧元的单一欧洲货币。欧元于2002年正式取代19个欧盟成员国的国家货币。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">End Of Day Order (EOD)（EOD订单）</h3> <div className="text"><p>指定价格的买入或卖出订单，在交易日结束内有效。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Economic Indicator（经济指标）</h3> <div className="text"><p>政府发布当前的经济增长和稳定的统计数据，内容包括就业，GDP（国民生产总值），通货膨胀，零售业等等。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="F" role="tabpanel" aria-labelledby="F-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">F</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">FX（外汇）</h3> <div className="text"><p>外汇兑换。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Futures Contract（期货合约）</h3> <div className="text"><p>期货合约，是指买卖双方同意在某一时间内或某一特定时间以预先达成的价格去买卖某种物品。通常期货合约只会在交易所中买卖。在交易所买卖的期货，通常是有指定的物品，而且每张合约的大小，均已由交易所设定。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Fundamental Analysis（基本面分析）</h3> <div className="text"><p>对一个金融市场未来的运动目标或者对经济和政治信息的分析。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Forward Points（期货点）</h3> <div className="text"><p>对现今一个期货价格的汇率增加或者减少进行通报。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Forward（早先的）</h3> <div className="text"><p> 外汇合同预先指定一个双方同意的交换利率，根据利率差别再介入二者货币之间。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Foreign Exchange – (Forex, FX) - Foreign Exchange(Forex, FX)（外汇兑换，外汇）</h3> <div className="text"><p>一种货币同时购买和卖出。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Flat/square - Flat/Square（正方形）</h3> <div className="text"><p>经销商专用术语经常描述被扭转的局面，比如你买了￥500，000然后又卖了500，000，因此中立（平仓）的位置。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">First In First Out (FIFO)（先进先出规则）</h3> <div className="text"><p>根据先进先出规则平仓持仓头寸。所有持仓头寸以开仓的顺序进行清算。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Federal Reserve (Fed) - Federal Reserve(Fed)（美国联邦储备委员会）</h3> <div className="text"><p>美国中央银行。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="G" role="tabpanel" aria-labelledby="G-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">G</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Good 'Til Cancelled Order (GTC) - Good Till Cancelled Order (GTC)（撤消前有效）</h3> <div className="text"><p>以一个适当的价格购买或者出售，这项命令始终有效，直到客户补仓或取消。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Gross National Product（国民生产总值）</h3> <div className="text"><p>国内生产总值加上国外投资或工作赚取的收入。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Gross Domestic Product（国内生产总值GDP）</h3> <div className="text"><p>一个国家的产出，收入和支出的总价值。是用来衡量一个国家的经济运行状况的主要指标之一。它代表一个国家所有在一定时期内生产的所有最终产品和劳务的市场价值。是衡量一个国家或地区总体经济状况重要指标。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Gold Contract（黄金合约）</h3> <div className="text"><p>交易黄金的一份合约的标准单位，等于10盎司。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Gold Certificate（黄金证书）</h3> <div className="text"><p>黄金投资者用于买入和卖出商品的所有权证书，而不对实物黄金本身的传输和存储。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Going Short（做空）</h3> <div className="text"><p>卖出货币或品种。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Going Long（做多）</h3> <div className="text"><p>购买用于投资或投机的股票，商品或货币。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">G7</h3> <div className="text"><p>7个领先工业国家，美国，德国，日本，法国，英国，加拿大，意大利。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="H" role="tabpanel" aria-labelledby="H-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">H</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">"Hit the bid"（接受最高进价）</h3> <div className="text"><p>接受以市场价买入（offer价）或卖出（bid价）。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Hedge（对冲）</h3> <div className="text"><p>为了降低风险而下的相反的头寸，也叫锁仓。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="I" role="tabpanel" aria-labelledby="I-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">I</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">ISM Non-Manufacturing（ISM非制造业指数）</h3> <div className="text"><p>衡量的是非制造业部门经营状况，基于就业趋势、物价和新订单等数据。值超过50一般表明扩张，而低于50表示收缩。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">ISM Manufacturing Index（ISM制造业指数）</h3> <div className="text"><p>通过对未来的生产，新订单，库存，就业和交货预期调查人员评估美国制造业的状况的指数。 值超过50一般表明扩张，而低于50表示收缩。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Introducing Broker（IB，介绍经纪人）</h3> <div className="text"><p>介绍经纪人，为交易商推荐客户赚取佣金的个人或法人实体。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Intervention（干预）</h3> <div className="text"><p>由央行进入市场影响其货币的价值的动作。联合干预干预是指行动由多家央行控制汇率。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Interbank Rates（银行同业买卖汇率 ）</h3> <div className="text"><p>大的国际银行引用一些其他大的国际银行的外币汇率。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Initial Margin（初始保证金）</h3> <div className="text"><p>要求每个开户存款有有一个初始投资来对头寸进行担保。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Inflation（通货膨胀）</h3> <div className="text"><p>一种消费品价格上涨的经济环境, 降低购买力。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Industrial Production（工业生产指数）</h3> <div className="text"><p>是衡量制造业、矿业与公共事业的实质产出的总价值。这些数据往往能够快速应对商业周期的扩张和收缩，可以作为就业和个人收入的领先指标作用。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="J" role="tabpanel" aria-labelledby="J-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">J</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Japanese Machine Tool Orders（日本机床订单）</h3> <div className="text"><p>衡量机床制造商新订单的总价值。机床订单是衡量机器制造机器，未来工业生产的领先指标的需求。强劲的经济数据通常预示着制造业正在改善，经济处于扩张阶段。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Japanese Economy Watchers Survey（日本经济观察家调查）</h3> <div className="text"><p>衡量企业直接服务消费者，例如服务员，司机，和美容师的心情。该指数高于50通常预示着情绪的改善。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="K" role="tabpanel" aria-labelledby="K-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">K</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Kiwi</h3> <div className="text"><p>纽元的俚语。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="L" role="tabpanel" aria-labelledby="L-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">L</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Lot（手）</h3> <div className="text"><p>一个用来衡量交易量的单位。交易的价值总是相对于手数的整数。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Long position - Long Position（多头头寸）</h3> <div className="text"><p>交易中,买入上涨合约后所持有的头寸叫多头头寸,简称多头。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Liquidity（流动性）</h3> <div className="text"><p>使得在市场交易中，市场对交易价格稳定的影响降到最低。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Liquidation（清算）</h3> <div className="text"><p>通过一笔额外的交易来平掉目前中的价位。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Limit order - Limit Order（限价订单）</h3> <div className="text"><p>把欲进行买卖的价格设于目前市场成交价格以外的地方，一旦市场价格达到其设定价格时，交易员根据其指标的价格与数量来进行交易。比如美元兑日元价格为117.00/05，然后买进美元兑日元的价格设在低于117.00的价格。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">LIBOR（同业拆借利率LIBOR单位）</h3> <div className="text"><p>London Interbank Offered Rate的缩写，伦墩的银行之间的贷款利率，当从另一家银行贷款时，银行都使用LIBOR单位。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Leverage（杠杆）</h3> <div className="text"><p>也称为保证金。在一个交易中使用的所需安全存款量的比率。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Leading Indicators（领先指标）</h3> <div className="text"><p>对将来经济活动的预计和统计。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="M" role="tabpanel" aria-labelledby="M-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">M</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Maturity（到期）</h3> <div className="text"><p>金融证券的结算或终止日期。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Mark-to-Market（按市价调整）</h3> <div className="text"><p>指根据当天的收盘价重新评估头寸或资产组合的价值,借此可算出尚未实现的盈利或亏损. 在保证金交易上,借此可算出是否需要追加保证金。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Market Risk（市场风险）</h3> <div className="text"><p>显示市场价格变化的动向。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Market Maker（做市商）</h3> <div className="text"><p>通过提供买卖报价（即双向报价）为金融产品制造市场的交易商。向投资者提供买卖价格，并按其提供的价格接受投资者的买卖要求，以其自有资金和证券与投资者进行交易，从而为市场提供即时性和流动性，并通过买卖价差实现一定利润。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Margin Call（追加保证金）</h3> <div className="text"><p>投资人在从事保证金交易或期货交易时，若其投资标的物的账面损失超过其保证金的某一比率，其经纪商会通知投资人，要求其在规定的时间内补足其保证金，否则经纪商会出清投资人的投资，以避免损失扩大。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Manufacturing Production（工业生产指数）</h3> <div className="text"><p>是衡量工业生产制造方面的总产出。该数据仅测量直接关系到制造业的13个子行业。制造业构成工业总产值的80％左右。。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Margin（保证金）</h3> <div className="text"><p>投资者必须存入的所需担保头寸的资金。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="N" role="tabpanel" aria-labelledby="N-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">N</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Net Position（净头寸）</h3> <div className="text"><p>指交易商在市场上所持的多头与空头头寸的差额。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="O" role="tabpanel" aria-labelledby="O-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">O</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Order（订单）</h3> <div className="text"><p>在指定的价格执行交易的指令。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Overnight Position（过夜头寸）</h3> <div className="text"><p>交易持续到下一个交易日。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Over the Counter (OTC) - Over the Counter(OTC)（场外交易市场，又称柜台交易市场）</h3> <div className="text"><p>柜台交易是此种交易形态的债券或股票通常是小规模公司所发行的，或买卖金额较小，而无法以一般市场成交金额的交易方式来成交的。在外汇市场中，乃指银行对银行或对客户直接报价、议价所完成之交易。今日外汇市场大部分的成交量属于此类型。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Open position - Open Position（未平仓头寸）</h3> <div className="text"><p>交易尚未撤销或结算。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Open order - Open Order（未结订单）</h3> <div className="text"><p>价格移动到指定的价格时订单将会被执行，直到取消订单。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">One Cancels the Other Order (OCO) - One Cancels the Other Order(OCO)（OCO订单）</h3> <div className="text"><p>设计为2个订单其中一个被执行时自动取消另一个。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Offsetting transaction - Offsetting Transaction（交易补偿）</h3> <div className="text"><p>增加一个交易以平掉目前手中打开的价格，以降低市场风险。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Offer (ask)（买入报价）</h3> <div className="text"><p>经纪商希望卖出（客户买入）一个货币对的报价。见 Ask (offer) 价。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="P" role="tabpanel" aria-labelledby="P-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">P</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Purchasing Managers Index Services (Eurozone, UK)（采购经理人指数 – 欧元区，英国）</h3> <div className="text"><p>是衡量一个国家制造业的"体检表",是衡量制造业在生产、新订单、商品价格、存货、 雇员、订单交货、新出口订单和进口等八个方面状况的指数，是经济先行指标中一项非常重要的附属指标。该指数高于50通常表明扩张，而低于50表明经济萎缩。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Profit/Loss - Profit /Loss or "P/L" or Gain/Loss（"利润/亏损"或"收益/损失"）</h3> <div className="text"><p>从已平仓头寸"已实现"的利润或亏损，加上未平仓的持仓头寸"未实现"的理论利润或亏损。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Price Transparency（价格透明度）</h3> <div className="text"><p>描述每个市场参与者具有相同访问权限的报价。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Premium（额外费用）</h3> <div className="text"><p>在货币市场上，描述当前或者未来价格超出的数额。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Position（头寸）</h3> <div className="text"><p>指账上所持有某一金融产品的数量。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Political Risk（政治风险）</h3> <div className="text"><p>由于政策上的变化将对投资者产生不利影响。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Pips（点）</h3> <div className="text"><p>从第四个小数位增加或者减去，比如0.0001。通常称为点。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Personal Income（个人收入）</h3> <div className="text"><p>测量从工资，企业和各种投资的个人年度总毛收入。个人收入的关键是个人消费，占主要经济体国内生产总值的2/3。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="Q" role="tabpanel" aria-labelledby="Q-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">Q</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Quote（行情报价）</h3> <div className="text"><p>表示市场价格，通常指一些对达成目标有用的信息。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="R" role="tabpanel" aria-labelledby="R-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">R</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Round trip（来回）</h3> <div className="text"><p>买和卖指定金额的货币。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Roll-Over</h3> <div className="text"><p>持仓头寸在纽约17:00 ET反应两种货币之间的利率差支付或赚取利息。 在进行掉期交易的时候，交割日总在两个银行工作日之后。因此，假如您在星期一的时候开仓并保持到星期二，那么实际将按您在星期三开仓并保持到星期四来计算，换句话，也就是说保持1天。然而，如果您在星期三开仓然后保持到了星期四，会按星期五开仓并保持到星期一来计算，也就是相当于持仓了3天。因此，在星期三开仓的掉期交易并保持到第二天就可以用三倍的比率交割！除此以外，在一星期的其他的天里，只适用一天的掉期利率，包括星期五到星期一的持仓。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Risk Management（风险管理）</h3> <div className="text"><p>有效的财务分析和交易技术层面的分级将控制各种各样类型的风险。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Risk（风险）</h3> <div className="text"><p>不确定的变动，经常对市场产生消极影响。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Revaluation（升值）</h3> <div className="text"><p>由于央行干涉导致货币利率上升。相反的是''Devaluation- 贬值''。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Retail Sales（零售销售）</h3> <div className="text"><p>是零售销售数额的统计汇总，包括所有主要从事零售业务的商店以现金或信用形式销售的商品价值总额。这个数据给出了一个直观的消费行为，这是所有主要经济体增长的关键因素。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Resistance（阻力）</h3> <div className="text"><p>在技术分析中使用的一个术语，指被市场视为重要的高价，在接近在某个特定的价格水平时价格会减缓或者折返。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Rate（汇率）</h3> <div className="text"><p>一个货币对另一种货币的价格，通常用来作买卖用途。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Range（交易范围）</h3> <div className="text"><p>一个给定的交易时段最高点和最低的之前的范围。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Rally（上涨）</h3> <div className="text"><p>货币价格的复苏在一段下跌后恢复。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="S" role="tabpanel" aria-labelledby="S-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">S</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Support Levels（支撑水平）</h3> <div className="text"><p>在技术分析中使用的一个术语，指被市场视为重要的低价，在接近在某个特定的价格水平时价格会减缓或者折返。 相反的是''Resistance-阻力''.
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Swissy（瑞郎）</h3> <div className="text"><p>瑞士法郎的市场俚语。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Stop Loss Order（止损订单）</h3> <div className="text"><p>预订类型凭此一个打开位置被自动以一个具体的价格清算。 如果市场对一个投资者的位置移动，经常过去常常对损失使暴露减到最小。 举一个例子， 如果一位投资者在156.27多的美元，他可能希望设置一个止损订单在155. 49，用于将限制美元贬值也许低于155.49带来的损失。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Square（轧平）</h3> <div className="text"><p>既没有多头也没有空头，即为持平或者轧平。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Swap（隔夜利息）</h3> <div className="text"><p>持仓到下一个交易日的过夜利息（赚取或支付）。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Spread（点差）</h3> <div className="text"><p>即买价与卖价的差额。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Spot Trade（现货交易）</h3> <div className="text"><p>购买或出售外汇或商品立即交付（而不是一个日期在未来）。现货合同是电子结算。</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Spot Price（即期价格）</h3> <div className="text"><p>当前市场价格。即期交易结算通常在两个交易日内发生。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Spot Market（现货市场）</h3> <div className="text"><p>一个有形市场，可以立即以市场价格买入或卖出外汇和大宗商品，现金结算并交付。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Simple Moving Average (SMA) - Simple Moving Average (SMA) （简单移动平均线）</h3> <div className="text"><p>定义K线的数量。例如，日线图50周期的平均线即前50日K线的平均收盘价。任何时间间隔都可以在这里应用。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Short Position（空头头寸）</h3> <div className="text"><p>交易中,卖出下跌合约后所持有的头寸叫空头头寸,简称空头。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Settlement（结算）</h3> <div className="text"><p>一笔交易计入账面以及记录的订立的过程。交易结算的货币可能会或可能不涉及另一种货币的实际交换实物。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="T" role="tabpanel" aria-labelledby="T-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">T</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Two-Way Price（双向报价）</h3> <div className="text"><p>为一项 CFD 交易同时提供买入和卖出报价。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Turnover（营业额）</h3> <div className="text"><p>在一定时期进行的一切交易的金额总量；销售量。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Transaction Date（交易日期）</h3> <div className="text"><p>交易发生的日期。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Transaction Cost（交易价值）</h3> <div className="text"><p>买卖金融工具的价值。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Trade Balance（贸易差额）</h3> <div className="text"><p>衡量进出口货物和服务之间的差值。贸易顺差（出口大于进口），如日本的国家，往往趋向看到自己的货币升值，而贸易逆差（比出口更大的进口），如美国的国家，往往趋向看到自己的货币走软。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Tomorflex flex-wrap Next (Tom/Next)</h3> <div className="text"><p>明日次日-同时买入和卖出一种货币在下一日交割。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Tick（闪电图/跳动点图/即时图）</h3> <div className="text"><p>价格的最小变动，向上或向下。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Technical Analysis（技术分析）</h3> <div className="text"><p>通过分析市场数据来预测价格，如历史价格和趋势和平均数，销售量，银行利息等。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="U" role="tabpanel" aria-labelledby="U-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">U</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">US Prime Rate（美国最优惠利率）</h3> <div className="text"><p>美国银行非常重视在他们那里开户顾客的利益。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Uptick Rule（报升规则）</h3> <div className="text"><p>在美国一个章程规定一笔交易不可以以买进的价格卖出，除非卖空之前的交易价格比卖空现价更低。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Uptick（报升）</h3> <div className="text"><p>新报价比前一个报价高。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Unrealized Gain/Loss（浮动盈亏）</h3> <div className="text"><p>持仓头寸在当前市场价格的理论上的盈利或亏损，由经纪商全权酌情决定。平仓后浮动盈亏将变成实际盈亏。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Unemployment Rate（失业率）</h3> <div className="text"><p>衡量总劳动人口的失业并积极寻找就业机会，以劳动力的百分比来衡量。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="V" role="tabpanel" aria-labelledby="V-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">V</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">VIX or Volatility Index - Volatility （Vol）（波动）</h3> <div className="text"><p>一定时期市场价格变化的统计衡量。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Variation Margin（价格变动保证金）</h3> <div className="text"><p>经纪人要求客户将必须的保证金存入。该术语通常指由于市价波动的不利趋势，客户必须存入额外的资金。
</p></div></article> <article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Value Date（交割日）</h3> <div className="text"><p>金融交易的双方同意清偿各自债务即交换支付的日期。对现钞交易来说，交割日通常是向后两个营业日。也被称为到期日。
</p></div></article></div>
								</div>
							</div>
					  </div>
					  <div className="tab-pane fade" id="W" role="tabpanel" aria-labelledby="W-tab">
							<div className="flex flex-wrap">
								<div className="w-1/12"><h1 ><strong className="border_speciality">W</strong></h1></div>
								<div className="w-11/12">
									<div className="pl-3 pr-3"><article className="mb-3 text-16"><h3 className="text-18 font-weight-bold mb-1">Wedge Chart Pattern（楔形图表形态）</h3> <div className="text"><p>随着时间的推移图表显示为越来越窄的价格范围内，楔形分为上升楔形和下降楔形。上升楔形通常会向下突破，而下降楔形通常向上突破。
</p></div></article></div>
								</div>
							</div>
					  </div>					  
					</div>
				
				</div>
			</div>	
		</div>
	</div>
	
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >开始交易</h3>		
					<h1 className="f55 mb-5">与全球最值得信赖的外汇CFD经纪商进行交易</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function u0(){const{t:e}=F();return n.jsx(K,{title:e("pages.helpCenter.title"),subtitle:e("pages.helpCenter.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
				<div className="w-full md:w-6/12">
					<a href="forex-glossary.html" className="text-secondary">外汇术语</a>		
				</div>			
			</div>
		</div>
	</div>		
	
	
	
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12 specification_card specification_card2">	
					<div className="text-center">
						<h1>Most frequently asked questions</h1>
						<h5>Here are the most common questions a trader would normally ask us or consider to ask before opening an account with us.<br>
For more information on help resources related to  BKS Markets and the products we offer,<br>
simply type your question below or visit our live chat service.</h5>
					</div>
					<div className="accordion maket_header" id="accordionExample">
					  <div className="card">
						<div className="card-header" id="headingOne">
						  <h2 className="mb-0">
							<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
							  What account types does  BKS Markets offer?
							</button>
						  </h2>
						</div>

						<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
						  <div className="card-body">
								<h5> BKS Markets offer two types of accounts, Standard account and our market leading, ECN account.
</h5><h5 className="pt-3">
ECN Account: This account shows the Raw inter-bank spread received from our liquidity providers. There is a commission charge of $7 per standard lot round turn.
</h5><h5 className="pt-3">
Standard Account: We do not charge a commission on Standard accounts but instead, there is a mark up applied to the spread of 0.6 pip above the raw Inter-bank rate received from our Liquidity providers.
</h5><h5 className="pt-3">
Further information about the different types of trading accounts available can be found on our Account Overview page.</h5>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="headingTwo">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							  What are the fees, commissions for trading with  BKS Markets?
							</button>
						  </h2>
						</div>
						<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
						  <div className="card-body">
							 <h5> BKS Markets has two MetaTrader account types, a Standard account and our market leading, The ECN account.  BKS Markets does not charge a commission on Standard accounts but instead applies a spread mark up of 0.6 pip above the Raw inter-bank prices received from our liquidity providers.  BKS Markets ECN account shows the raw inter-bank spread received from our liquidity providers. On this account we commission of $7 per standard lot round turn. 
</h5><h5 className="pt-3">
Below are commission rates for different base currency accounts:</h5>
	<table className="table table-striped table-bordered" style="max-width:400px;"><tbody><tr><td>AUD</td><td>7.00 round turn</td></tr><tr><td>USD</td><td>7.00 round turn</td></tr><tr><td>EUR</td><td>5.50 round turn</td></tr><tr><td>GBP</td><td>5.00 round turn</td></tr><tr><td>SGD</td><td>9.00 round turn</td></tr><tr><td>JPY</td><td>700.00 round turn</td></tr><tr><td>CHF</td><td>6.60 round turn</td></tr><tr><td>NZD</td><td>9.00 round turn</td></tr><tr><td>HKD</td><td>54.25 round turn</td></tr></tbody></table>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="headingThree">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
							  What is the minimum amount needed to open a trading account?
							</button>
						  </h2>
						</div>
						<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
						  <div className="card-body">
							 <h5> BKS Markets allows clients to open an account with as little as USD $200 or currency equivalent.</h5>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading4">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
							  What are your trading conditions?
							</button>
						  </h2>
						</div>
						<div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordionExample">
						  <div className="card-body">
							  <h5>Our mission is to provide traders with the lowest spreads and fastest executions possible across over 285 Forex products including Forex, precious metals, stocks, futures and other commodities. We have invested heavily in technology and establishing strong relationships with the largest and most reliable price providers in the market.
</h5><h5 className="pt-3">
To find more about products offering click here: range of products.
</h5><h5 className="pt-3">
We also strongly suggest to thoroughly read our Product Disclosure Statement and Account Terms available for the attached costs, risks and your responsibilities before deciding to trade with us.</h5>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading5">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
							  Is  BKS Markets an ECN/STP broker or a Market Maker?
							</button>
						  </h2>
						</div>
						<div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordionExample">
						   <div className="card-body">
								<h5>This is one of the most frequently asked questions. The difficult part in understanding ECN and STP meanings is that those have been interpreted differently by many people. There are three main business models used by Forex brokers which differ by the way the transactions are handled and orders are executed: ECN, STP and  Market Makers.  
</h5><h5 className="pt-3">
ECN: ECN stands for 'Electronic Communication Network' which is simply a technical term that is used to describe how banks and liquidity providers connect to each other to form a bid and offer price. In the Forex industry, it can be used to identify providers who use this type of pricing mechanism in order to offer raw interbank pricing to retail traders. Under this model your broker will stream raw prices and your trades will be offset with another client, a liquidity provider or held internally by the broker. This usually results in faster trade execution. This is distinct from order execution that may result in an offsetting order placed with a liquidity provider. 
</h5><h5 className="pt-3">
STP: This term stands for Straight Through Processing and is used when a Forex and CFD provider processes all trades at market prices obtained from liquidity provider(s) not on prices created by the broker themselves. This is not dissimilar to the ECN pricing model in that there is no dealing desk intervention when the trade is processed.
</h5><h5 className="pt-3">
Market Maker: In Australia all Forex and CFD providers including  BKS Markets have the market making authorisation on their AFS licence, however many do not consider themselves market makers. Typically, market makers operate a dealing desk in order to create their own prices, these prices can be based on their own proprietary trading positions or overall risk exposure and may not reflect the prices in the underlying market.
</h5><h5 className="pt-3">
 BKS Markets is the issuer of the products it provides. We consider ourselves to be a forex provider offering the ECN pricing model as we source our pricing from external unrelated liquidity providers via an ECN, these prices are passed onto you with no dealing desk intervention. In order to provide you with better price certainty and to ensure fast execution speed we do not hedge each and every position with our liquidity providers. We do this in order to provide you with a better overall trading experience. </h5>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading6">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
							  How do I open a live trading account with  BKS Markets?
							</button>
						  </h2>
						</div>
						<div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#accordionExample">
						  <div className="card-body">
							<h5>Opening an account is simple. Click on the Open a Live Account link and complete your application form.
</h5><h5 className="pt-3">
Once your on-line application form has been approved by our accounts team you will be emailed your trading account login details and password.</h5>
						  </div>
						</div>
					  </div>
					  
					</div>
					
				</div>	
				
			</div>			
		</div>
	</div>
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12 specification_card specification_card3">	
					<h1 className=" pb-3"> BKS Markets的日常问题</h1>
					<div className="accordion " id="accordionExample2">
					 <div className="card">
						<div className="card-header" id="heading7">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
							  How to open a live trading account with  BKS Markets?
							</button>
						  </h2>
						</div>
						<div id="collapse7" className="collapse" aria-labelledby="heading7" data-parent="#accordionExample2">
						  <div className="card-body">
							<h5>Opening a live trading account with  BKS Markets is simple.
</h5><h5 className="pt-3">
Please follow these steps to get started:
</h5><h5 className="pt-2">
▪ Fill the online registration form to create an  BKS Markets profile<br>
▪ You will receive an email containing a link to verify your email<br>
▪ Verify, complete the application and submit your documents<br>
▪ Get approved and receive your approval email<br>
▪ Login into your  BKS Markets Trader’s Portal and create a live MT5 account<br>
▪ Fund your account and start trading</h5>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading8">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
							  Which type of documents do I need to send?
							</button>
						  </h2>
						</div>
						<div id="collapse8" className="collapse" aria-labelledby="heading8" data-parent="#accordionExample2">
						  <div className="card-body">
							<h5>Before a client can trade with us for the first time on a new account (even when they have previously held an account), we need to perform identity and residential address verification. Moreover, as part of the due diligence process, you may be required to provide proof of your residential verification and certain information regarding the payment method you wish to use to fund your account.
</h5><h5 className="pt-3">
Our requirements for identity verification may include the following:
</h5><h5 className="pt-3">
1) A government issued identification document (ID) that contains all the following information:
</h5><h5 className="pt-2">
▪ Photo<br>
▪ Identity number<br>
▪ Full name<br>
▪ Date of birth<br>
▪ Date of expiry</h5><h5 className="pt-3">
2) A residential verification document, displaying your full name and address. The residential verification document should be issued by a financial institution, utility company, government agency or a judicial authority and can be one of the following:
</h5><h5 className="pt-2">
▪ Bank statement<br>
▪ Credit card statement<br>
▪ Electricity bill<br>
▪ Water or gas bill<br>
▪ Council tax bill<br>
▪ Tax letter<br>
▪ Phone bill<br>
▪ Television services bill, or<br>
▪ Internet bill</h5>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading9">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
							  How long does it take to open a live trading account with  BKS Markets?
							</button>
						  </h2>
						</div>
						<div id="collapse9" className="collapse" aria-labelledby="heading9" data-parent="#accordionExample2">
						  <div className="card-body">
							<h5>Once we receive your application with the required documents, your account will be processed within 2 business days.</h5>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading10">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
							  Is  BKS Markets regulated?
							</button>
						  </h2>
						</div>
						<div id="collapse10" className="collapse" aria-labelledby="heading10" data-parent="#accordionExample2">
						  <div className="card-body">
							<h5>Yes, BKS Markets is regulated. BKS Markets CO LTD is a well-capitalized company that complies with the authoritative approval of Canada's FTR MBS (Money Services Business) and implements a comprehensive and effective compliance regulatory plan (INCORPORATION NUMBER: 1286155-1).</h5>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading11">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
							  What are the benefits of trading with a regulated Сompany?
							</button>
						  </h2>
						</div>
						<div id="collapse11" className="collapse" aria-labelledby="heading11" data-parent="#accordionExample2">
						  <div className="card-body">
							<h5>One of the benefits of trading with a regulated firm is that you know you are contracting with a reliable provider in a regulated environment, which has stringent rules and regulations designed, in particular, to protect the interest of retail clients.</h5>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading14">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
							  How to complain?
							</button>
						  </h2>
						</div>
						<div id="collapse14" className="collapse" aria-labelledby="heading14" data-parent="#accordionExample2">
						  <div className="card-body">
							<h5>Please follow the Company’s Complaint handling Policy</h5>
						  </div>
						</div>
					  </div>
					  
					</div>
								
				</div>	
			</div>			
		</div>
	</div>
	
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >开始交易</h3>		
					<h1 className="f55 mb-5">与全球最值得信赖的外汇CFD经纪商进行交易</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function p0(){const{t:e}=F();return n.jsx(K,{title:e("pages.legal.title"),subtitle:e("pages.legal.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
	<div className="w-full maket_header " >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-center">				
				<div className="w-full md:w-8/12">
					<h4 className="font-bold">法规文件</h4>
					<h6 className="mb-5">您可以在此找到所有您需要了解的关于我们的法律协议和条款条件。</h6>
					<div className="mb-3"><img src="images/legel_icon_06.svg" width="25"> <a target="_blank" href="images/Privacy-Agreement.pdf" className="text-dark">隐私协议</a></div>
					<div className="mb-3"><img src="images/legel_icon_06.svg" width="25"> <a target="_blank" href="images/Risk-disclosure.pdf" className="text-dark">风险披露</a></div>
					<div className="mb-3"><img src="images/legel_icon_06.svg" width="25"> <a target="_blank" href="images/Money-laundering-prevention.pdf" className="text-dark">洗钱防制</a></div>
				</div>	
				
			</div>			
		</div>
	</div>
	
	
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >开始交易</h3>		
					<h1 className="f55 mb-5">值得信赖的全球 CFD 交易商</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function h0(){const{t:e}=F();return n.jsx(K,{title:e("pages.regulation.title"),subtitle:e("pages.regulation.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
				<div className="w-full md:w-3/12">
					<a href="regulation.html" className="text-primary">监管机构</a>		
				</div>
				<div className="w-full md:w-3/12">
					<a href="careers.html" className="text-secondary">诚聘英才</a>		
				</div>
				<div className="w-full md:w-3/12">
					<a href="contact.html" className="text-secondary">联系我们</a>		
				</div>
				
			</div>
		</div>
	</div>		
	
	
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12 ">	
					<div className="float-right">
						<div className="double-sidebar-block">                        
							<div className="contact-card contact-block mt-2">                        
								<div className="contact-header">
									<div className="header-label">联系我们</div>
									<div className="header-title">客服支持24/7。</div>
								</div>
								<div className="contact-pre-imaged chat-img">
									<div><a id="contact_card_help" href="help-center.html">Help Centre</a></div>
								</div>
								
								<div className="contact-pre-imaged email-img">
									 <div><a id="contact_card_email" href="mailto:support@bksmarkets.com">Email Us</a></div>
								</div>
							</div>
						</div>
					</div>
					<div style="max-width:600px;">
						<h1 className="font-bold pb-3"><span className="text-primary"> BKS Markets</span> is authorised and regulated by multiple <span className="text-primary">Regulators</span> across the globe.</h1>
						<h5 className="pb-4">Trade with peace of mind knowing that  BKS Markets is supervised by some of the strictest regulatory bodies in the world.</h5>
					</div>
				</div>	
				
			</div>			
		</div>
	</div>
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4 redesign">
			<div className="flex flex-wrap d-flex">
				<div className="col-xs-12 w-full md:w-6/12 w-full lg:w-6/12 d-flex p-right">
					<div className="card">
						<div className="card-header">
							<div className="card-img asic"></div>
							<div className="card-wave"></div>
							<div className="card-caption">
								<span><b>ASIC</b></span> <a href="javascript:void(0);" className="info"><span>ASIC is the financial services regulator in Australia responsible for ensuring that financial markets in Australia are fair and transparent, supported by confident and informed investors and consumers. ASIC is an independent Commonwealth Government body established under the Australian Securities and Investments Commission Act (ASIC Act), carrying out most of its work under the Corporations Act.</span></a>
								<p>Australian Securities and<br>Investments Commission</p>
							</div>
						</div>
						<div className="card-body"> BKS Markets AU complies with ASIC regulatory requirements and has in place procedures to ensure that capital adequacy requirements are always maintained along with internal risk management and staff training requirements.<br><br>External audits supplement  BKS Markets AU operational and accounting processes and ensure regulatory compliance.<br><br><a href="regulation.html" target="_blank">Go To ASIC</a></div>
					</div>
				</div>
				<div className="col-xs-12 w-full md:w-6/12 w-full lg:w-6/12 d-flex p-left">
					<div className="card">
						<div className="card-header">
							<div className="card-img eu"></div>
							<div className="card-wave"></div>
							<div className="card-caption">
								<span><b>CySEC</b></span> <a href="javascript:void(0);" className="info"><span>CySEC is an established regulatory authority governing financial services firms in Cyprus. Being a part of the European Union, CySEC is also a member of the European Securities and Markets Authority (ESMA). As a CySEC licensed firm,  BKS Markets EU complies with all domestic and European laws and regulations applicable to investment firms.</span></a>
								<p>Cyprus Securities and<br>Exchange Commission</p>
							</div>
						</div>
						<div className="card-body"> BKS Markets EU complies with CySEC regulatory requirements and is required to meet strict financial standards, including capital adequacy and audit requirements.<br><br> BKS Markets EU is committed to having strict management discipline and first-class controls in our compliance environment.<br><br><br><a href="regulation.html" target="_blank">Go To CySEC</a></div>
					</div>
				</div>
			</div>	
			<div className="flex flex-wrap d-flex">
				<div className="col-xs-12 w-full md:w-6/12 w-full lg:w-6/12 d-flex p-right">
					<div className="card">
						<div className="card-header">
							<div className="card-img global"></div>
							<div className="card-wave"></div>
							<div className="card-caption">
								<span><b>FSA</b></span> <a href="javascript:void(0);" className="info"><span>FSA is the financial services regulator in Seychelles responsible for ensuring that financial markets in Seychelles are fair and transparent, supported by confident and informed investors and consumers. The Seychelles Financial Services Authority is the autonomous regulatory body responsible for the non-bank financial services in the Seychelles. Established under the Financial Services Authority Act, 2013.</span></a>
								<p>Financial Services Authority</p>
							</div>
						</div>
						<div className="card-body">BKS Markets Global complies with the FSA regulatory requirements and has in place internal risk management controls to ensure that it is sufficiently capitalized to support its operations.<br><br>External audits supplement  BKS Markets operational and accounting process and ensure full regulatory compliance.</div>
					</div>
				</div>
				<div className="col-xs-12 w-full md:w-6/12 w-full lg:w-6/12 d-flex p-left">
					<div className="card">
						<div className="card-header">
							<div className="card-img scb"></div>
							<div className="card-wave"></div>
							<div className="card-caption">
								<span><b>SCB</b></span> <a href="javascript:void(0);" className="info"><span>SCB is the Securities Commission of The Bahamas responsible for regulating and overseeing investment funds, securities and the capital markets. The Securities Commission of The Bahamas’s mission is to effectively oversee and regulate the activities of securities and the capital markets, to protect investors while strengthening public and institutional confidence in the integrity of those markets.</span></a>
								<p>Securities Commission Bahamas</p>
							</div>
						</div>
						<div className="card-body"> BKS Markets Ltd. trading as  BKS Markets International complies with SCB regulatory requirements and has in place internal risk management controls to ensure sufficient capital requirements are always maintained.<br><br>External audits supplement  BKS Markets International operational and accounting process and ensure full regulatory compliance.<br><br><a href="regulation.html" target="_blank">Go To SCB</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12 redesign ">	
					
					<div className="page-section tabs-section">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
						  <li className="nav-item">
							<a className="nav-link active" id="au-tab" data-toggle="tab" href="#au" role="tab" aria-controls="au" aria-selected="true"> BKS Markets AU</a>
						  </li>
						  <li className="nav-item">
							<a className="nav-link" id="eu-tab" data-toggle="tab" href="#eu" role="tab" aria-controls="eu" aria-selected="false"> BKS Markets EU</a>
						  </li>
						  <li className="nav-item">
							<a className="nav-link" id="global-tab" data-toggle="tab" href="#global" role="tab" aria-controls="global" aria-selected="false"> BKS Markets</a>
						  </li>
						  <li className="nav-item">
							<a className="nav-link" id="scb-tab" data-toggle="tab" href="#scb" role="tab" aria-controls="scb" aria-selected="false"> BKS Markets SCB</a>
						  </li>
						</ul>
						
                        <div className="tab-content">
                            <div id="au" className="tab-pane fade active show ">
                                <div className="tab-pane-item"><div className="tab-pane-item-title">Segregation of Client Funds</div>
								<div className="tab-pane-item-desc">When funding your trading account client funds are held in client segregated accounts at Australian Banks.  BKS Markets complies with the Australian Client Money Handling Rules and employs strict policies and procedures regarding the maintenance and operation of these accounts.</div></div>
								<div className="tab-pane-item"><div className="tab-pane-item-title">Anti-Money Laundering</div>
								<div className="tab-pane-item-desc">In accordance with the Australian Anti-Money Laundering and Counter Terrorism Financial Act 2006  BKS Markets AU has in place policies and procedures to ensure compliance with the law. These policies and procedures are designed to prevent money laundering activities from occurring.  BKS Markets AU Anti-Money Laundering policy outlines the documents that you must provide us before opening an account.</div></div>
								<div className="tab-pane-item"><div className="tab-pane-item-title">Licence</div><div className="tab-pane-item-desc">International Capital Markets hold an Australian financial services licence (AFSL) No. 335692 and is authorised to carry on a financial services business in Australia, limited to the financial services covered by our AFSL.</div></div>
                            </div>
                            <div id="eu" className="tab-pane fade">
                                <div className="tab-pane-item"><div className="tab-pane-item-title">Segregation of Client Funds</div>
								<div className="tab-pane-item-desc"> BKS Markets EU holds Clients Money in Segregated trust accounts with top tier European banks. All Client money is managed in accordance with the MiFID II and held separately to  BKS Markets EU company funds.  BKS Markets hold client money separately to company funds and does not use these funds for any operational expenses or purpose.</div></div>
								<div className="tab-pane-item"><div className="tab-pane-item-title">Anti-Money Laundering</div><div className="tab-pane-item-desc">In accordance with the CySEC AML Law “The Prevention and Suppression of Money Anti-Money Laundering and Terrorist Financing Law of 2019”,  BKS Markets EU has in place policies and procedures to ensure compliance with the law. These policies and procedures are designed to detect and prevent money laundering activities for occurring.</div></div>
								<div className="tab-pane-item"><div className="tab-pane-item-title">Licence</div><div className="tab-pane-item-desc"> BKS Markets (EU) Ltd is registered in Cyprus with the Registration Number 356877, authorized and regulated by the Cyprus Securities and Exchange Commission (www.cysec.gov.cy) with Licence No 362/18</div></div>
                            </div>
                            <div id="global" className="tab-pane fade">
                                <div className="tab-pane-item"><div className="tab-pane-item-title">Segregation of Client Funds</div>
								<div className="tab-pane-item-desc">When funding your trading account your funds are held in client segregated accounts with top tier banking institutions.  BKS Markets complies with the Securities Act and the Securities (Conduct of Business) Regulations and employs strict policies and procedures regarding the maintenance and operation of these accounts.</div></div>
								<div className="tab-pane-item"><div className="tab-pane-item-title">Anti-Money Laundering</div><div className="tab-pane-item-desc">In accordance with the FSA Anti-Money Laundering and Counter Terrorism Financial Act,  BKS Markets has in place policies and procedures to ensure compliance with the law. These policies and procedures are designed to prevent money laundering activities from occurring.  BKS Markets Anti-Money Laundering policy outlines the documents that you must provide us before opening an account.</div></div>
								<div className="tab-pane-item"><div className="tab-pane-item-title">Licence</div><div className="tab-pane-item-desc">Raw Trading Ltd,  BKS Markets, is authorised by the Seychelles Financial Services Authority as a Security Dealer for the provision of financial services under License NO SD018.</div></div>
                            </div>
                            <div id="scb" className="tab-pane fade">
                                <div className="tab-pane-item"><div className="tab-pane-item-title">Segregation of Client Funds</div>
								<div className="tab-pane-item-desc">When funding your trading account client funds are held in client segregated trust accounts at Australian Banks, National Australia Bank (NAB) and Commonwealth Bank of Australia (CBA).  BKS Markets complies with the Australian Client Money Handling Rules and employs strict policies and procedures regarding the maintenance and operation of these accounts.</div></div>
								<div className="tab-pane-item"><div className="tab-pane-item-title">Anti-Money Laundering</div><div className="tab-pane-item-desc">In accordance with the SCB AML regulations,  BKS Markets International has in place policies and procedures to ensure compliance with the law. These policies and procedures are designed to prevent money laundering activities from occurring.  BKS Markets International Anti-Money Laundering policy outlines the documents that you must provide us before opening an account.</div></div>
								<div className="tab-pane-item"><div className="tab-pane-item-title">Licence</div><div className="tab-pane-item-desc"> BKS Markets Ltd registered in The Bahamas with Company number 76823 C, trading as  BKS Markets International, regulated by the Securities Commission of The Bahamas with license number: SIA-F214.</div></div>
                            </div>
                        </div>
                    </div>
				</div>	
				
			</div>			
		</div>
	</div>
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >开始交易</h3>		
					<h1 className="f55 mb-5">与全球最值得信赖的外汇CFD经纪商进行交易</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function f0(){const{t:e}=F();return n.jsx(K,{title:e("pages.careers.title"),subtitle:e("pages.careers.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
				<div className="w-full md:w-3/12">
					<a href="regulation.html" className="text-secondary">监管机构</a>		
				</div>
				<div className="w-full md:w-3/12">
					<a href="careers.html" className="text-primary">诚聘英才</a>		
				</div>
				<div className="w-full md:w-3/12">
					<a href="contact.html" className="text-secondary">联系我们</a>		
				</div>
				
			</div>
		</div>
	</div>		
	
	
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12 ">	
				
					<h4 className="font-bold pb-3">我们认为我司的持续发展是建立在不断吸引并留住有能力员工的基础上，因此我们一直渴求最优秀的人才。如果您想在一个高速发展且不断创新的公司寻求进一步的职业发展机会，那么  BKS Markets 是您的正确选择。</h4>
					<h1 className="f50 pb-3 pt-3">拓展您的职业生涯。</h1>
					<h5 className="pb-4 pb-3">随着 BKS Markets 业务的持续强劲发展，我们在全球的员工数量迅速增长。这就意味着定期会在公司的主要部门有新的工作机会， 如交易部，市场部，法务部，销售部，财务部，技术/产品部，运营部，人力资源。</h5>
				
				</div>	
				
			</div>			
		</div>
	</div>
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12 specification_card">	
					<h5>We aim to provide a challenging and rewarding working environment.</h5>
					<h1 className="pt-4 text-primary">Seychelles</h1>
					<div className="accordion" id="accordionExample">
					  <div className="card">
						<div className="card-header" id="headingTwo">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" style="font-size:24px;"  type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							  Customer Support Operator
							</button>
						  </h2>
						</div>
						<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
						  <div className="card-body">
							  <div className="panel-content">
								<p>
									We are always looking for new talent to join our support team.
								</p>
								<h3>
									Job role and responsibilities:
								</h3>
								<ul>
									<li>Assisting clients in a friendly, helpful manner via Live Chat, telephone and email.
									</li>
									<li>Educating clients in the company’s platforms, trading products, account opening/deposit/withdrawal procedures.
									</li>
									<li>Analysing and investigating trades.
									</li>
									<li>Maintaining the company’s high standard of client communication.
									</li>
									<li>Working as part of a team to ensure department KPI’s are met, particularly with regards to response times and client satisfaction levels.
									</li>
									<li>Handling complaints professionally and courteously.
									</li>
									<li>Flexible with work hours including weekends.
									</li>
								</ul>
								<h3>
									Candidate requirements:
								</h3>
								<ul>
									<li>Fluent in verbal and written English to business standard.
									</li>
									<li>Enthusiastic and ‘can do’ approach to customer service.
									</li>
									<li>Ability to remain calm and focused in a fast paced environment.
									</li>
									<li>Previous experience in a similar role considered an advantage.
									</li>
									<li>A broad understanding of financial markets and trading, preferably with foreign exchange.
									</li>
									<li className="list-title">Mandatory:
									</li>
									<li>Willing to work in a regulated environment and observe the guidelines set by the relevant governing body.
									</li>
									<li>A high level of professionalism and personal integrity.
									</li>
								</ul>
							</div>
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading1">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" style="font-size:24px;"  type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
							  Client Relations Officer (Multiple languages)
							</button>
						  </h2>
						</div>
						<div id="collapse1" className="collapse" aria-labelledby="heading1" data-parent="#accordionExample">
						  <div className="card-body">
							<div className="panel-content">
								<h3>
									Job role and responsibilities:
								</h3>
								<ul>
									<li>Assist clients throughout the onboarding process.
									</li>
									<li>Relationship management with new and existing clients.
									</li>
									<li>Relationship management with new and existing Partners
									</li>
									<li>Educate clients on how to use the company’s trading platforms and products, deposit and withdrawal methods.
									</li>
									<li>Researching regional business opportunities
									</li>
								</ul>
								<h3>
									Candidate requirements:
								</h3>
								<ul>
									<li>Fluent in either Portuguese, Arabic, Italian or German to a business standard, in addition to English.
									</li>
									<li>Excellent communication and written skills as well as attention to detail.
									</li>
									<li>At least one year experience with forex in a similar role.
									</li>
								</ul>
							</div> 
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading2">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" style="font-size:24px;"  type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
							  Client Accounts / Backoffice Administrator
							</button>
						  </h2>
						</div>
						<div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordionExample">
						  <div className="card-body">
							 <div className="panel-content">
								<h3>
									Job role and responsibilities:
								</h3>
								<ul>
									<li>Initial due diligence on clients’ accounts
									</li>
									<li>Verification and monitoring of Know Your Customer documentation
									</li>
									<li>Monitoring and subsequently investigating incoming deposit transactions.
									</li>
									<li>Processing of manual client inter account / profile transfers.
									</li>
									<li>Review and approval of IB commission related withdrawal requests
									</li>
									<li>Assisting clients with their Accounts related queries via email
									</li>
									<li>Providing Support team additional Accounts related information / feedback relating to client’s requests
									</li>
								</ul>
								<h3>
									Candidate requirements:
								</h3>
								<ul>
									<li>Experience in back office administration/accounting would be an advantage
									</li>
									<li>Excellent written and verbal communication skills
									</li>
									<li>Basic knowledge of Excel and other Microsoft Office tools
									</li>
									<li>Attention to detail and good organizational skills
									</li>
									<li>Open minded team player and willingness to learn
									</li>
								</ul>
							</div>
							 
						  </div>
						</div>
					  </div>
					  
					 </div> 
				</div>	
				
			</div>			
		</div>
	</div>
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >开始交易</h3>		
					<h1 className="f55 mb-5">值得信赖的全球 CFD 交易商</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function g0(){const{t:e}=F();return n.jsx(K,{title:e("pages.insurance.title"),subtitle:e("pages.insurance.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
	
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-12/12 specification_card">	
					<div className="accordion" id="accordionExample">
					  <div className="card">
						<div className="card-header" id="headingTwo">
						  <h2 className="mb-0">
							<button className="btn btn-link " style="font-size:24px;"  type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							  What is  BKS Markets' Insurance Coverage?
							</button>
						  </h2>
						</div>
						<div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
						  <div className="card-body pb-4">
							 <h5>We have added additional protection on your funds so you can continue trading with more confidence. The insurance will cover up to US$1,000,000 per client.</h5>
							 
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading1">
						  <h2 className="mb-0">
							<button className="btn btn-link " style="font-size:24px;"  type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
							  What does the Insurance Coverage include?
							</button>
						  </h2>
						</div>
						<div id="collapse1" className="collapse show" aria-labelledby="heading1" data-parent="#accordionExample">
						  <div className="card-body pb-4">
							 <h5>The Insurance Coverage includes the available balance and open CFD positions of the client.</h5>
							 
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading2">
						  <h2 className="mb-0">
							<button className="btn btn-link " style="font-size:24px;"  type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
							  Can I benefit from the Insurance Coverage?
							</button>
						  </h2>
						</div>
						<div id="collapse2" className="collapse show" aria-labelledby="heading2" data-parent="#accordionExample">
						  <div className="card-body">
							<h5>The Insurance Coverage is available to all the  BKS Markets clients of Raw Trading Ltd, and will be triggered only in the unlikely event of Raw Trading Ltd's insolvency.</h5>
							 
						  </div>
						</div>
					  </div>
					  
					 </div> 
				</div>	
				
			</div>			
		</div>
	</div>
	<div className="w-full maket_header " >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around">
				<div className="w-full md:w-12/12">	
					<div className="">
						<a className="text-body h4" href="#" target="_blank">Certificate</a>
						<img className="" src="images/certificate_icon2.png" alt="" style=" height: 55px; margin-left: 15px; padding-bottom: 10px;">
					</div>
					<div className="text-center maket_header">
						<h5 className="font-bold">Have a question or require specialist assistance?</h5><h5>
Our dedicated customer service team is here 24/7 to assist you.</h5>
					</div>
				</div>				
								
			</div>			
		</div>
	</div>
	
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >开始交易</h3>		
					<h1 className="f55 mb-5">a regulated Forex CFD provider today</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function v0(){const{t:e}=F();return n.jsx(K,{title:e("pages.vps.title"),subtitle:e("pages.vps.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
				<div className="w-full md:w-5/12">
					<a href="MT5-iphone.html" className="text-secondary">TRADING SERVERS</a>
				</div>
			</div>
		</div>
	</div>
	
	<div className="w-full maket_header metatrader_cont" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-12/12 ">						
					<h4 className="font-bold mb-4">您无需安装更多电脑设备或备用的网络、电力系统，只需使用VPS虚拟服务器，即可保证您的EA在最佳的环境中运行。 BKS Markets 建议您选择距离Equinix NY4或LD5数据中心近的VPS提供商。 NY4.</h4>
					<h5 className="pb-4">客户单月交易量（按自然月计算；注册邮箱下的所有账户累计；仅计算外汇和贵金属品种）达到50标准手，即有资格申请阿里云VPS费用报销。详情如下：</h5>
					<ul style="list-style: decimal;padding-inline-start: 30px;">
						<li style="word-break: break-all;list-style: decimal;">满足条件的客户可以自行到阿里云官网 <a id="virtual_private_server_4" target="_blank" href="https://cn.aliyun.com/product/ecs?spm=5176.8142029.cloudEssentials.1.54216d3eRE1pDf 上购买云服务器。">https://cn.aliyun.com/product/ecs?spm=5176.8142029.cloudEssentials.1.54216d3eRE1pDf</a></li>
						<li style="word-break: break-all;list-style: decimal;">购买完成后，从阿里云账户后台开具发票，并通过您在IC的注册邮箱，将发票截图、交易账号等信息发送至我们的客服邮箱 support@bksmarkets.com</li>
						<li style="word-break: break-all;list-style: decimal;">我们会尽快处理您的报销请求，并向您的交易账号汇入相应的金额。</li>
						<li style="word-break: break-all;list-style: decimal;">请注意，每张发票仅能报销一次（如购买的整年云服务器，则每月都需发报销申请邮件，按月摊销结算），每个月报销金额上限为200人民币，超额部分需自理。</li>
					</ul>
				
				</div>				
				
								
			</div>			
		</div>
	</div>
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center ">				
				<div className="w-full md:w-4/12">						
					<img src="images/virtual-private-server-imgcn.png">
				</div>				
				<div className="w-full md:w-4/12">						
					<h2>阿里云 VPS</h2>
					<a className="btn btn-primary" style="border-radius:50px;" href="#">进入阿里云官网</a>
				</div>				
				
								
			</div>			
		</div>
	</div>
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >开始交易</h3>		
					<h1 className="f55 mb-5">在您值得信赖的监管经纪商开户交易</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function x0(){const{t:e}=F();return n.jsx(K,{title:e("pages.forexTrading.title"),subtitle:e("pages.forexTrading.subtitle"),children:n.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
				<div className="w-full md:w-4/12">
					<a href="spreads.html" className="text-secondary">简捷的报价</a>		
				</div>
				<div className="w-full md:w-4/12">
					<a href="forex-trading.html" className="text-primary"> CFD 交易</a>		
				</div>
				
			</div>
		</div>
	</div>		
	
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-8/12">						
					<h1 className="pb-4">CFD 帐户类型</h1>
					<h5 className="pb-4">BKS Markets 允许您选择最适合您的帐户类型。我们的标准MetaTrader 5 账户，没有手续费，最低点差为 1.0 点。我们的 ECN帐户最低点差为 0.1 点，我们的平台都使用了我们的超低延迟交易环境。
</h5>
				</div>				
				<div className="w-full md:w-4/12 ">	
					<div className="market-facts-card forex">
						<div className="facts-header">
							<div className="header-label">CFD 帐户类型</div>
							<div className="header-title">属性</div>
						</div>
						<div className="facts-items">							
							<div className="facts-item">ECN 帐户或标准帐户</div>							
							<div className="facts-item">MT5 交易平台</div>							
							<div className="facts-item">最低点差 0.1 起</div>							
						</div>
						<div className="text-center">
							<a className="btn btn-primary" style="border-radius:50px;" href="https://crm.bksmarkets.com/#/user/register">开通账户</a>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</div>
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-8/12">						
					<h1 className="pb-4">模拟账户</h1>
					<h5 className="pb-4">BKS Markets MetaTrader 5 模拟账户允许交易者在线实践他们的交易策略，并在无风险的环境中熟悉我们的外汇交易平台。 我们所有的模拟交易账户都具有与我们的实时交易账户相同的功能，包括超低延迟执行和我们享有世界知名的 ECN 定价连接，没有重新报价。 在转换到实时交易环境之前，外汇交易者可以进行交易并测试他们的专家顾问(EA).</h5>
				</div>				
				<div className="w-full md:w-4/12 ">	
					<div className="market-facts-card forex">
						<div className="facts-header">
							<div className="header-label">模拟账户</div>
							<div className="header-title">属性</div>
						</div>
						<div className="facts-items">							
							<div className="facts-item">免费</div>							
							<div className="facts-item">MT5</div>							
							<div className="facts-item">所有账户类型和产品</div>							
							<div className="facts-item">模拟账户没有数量，时间和次数限制，您可以随意练习操作直至准备好开通真实账户为止</div>							
						</div>
						<div className="text-center">
							<a className="btn btn-primary" style="border-radius:50px;" href="https://crm.bksmarkets.com/#/user/register">开通账户</a>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-8/12">						
					<h1 className="pb-4"> CFD 交易</h1>
					<h5 className="pb-4">BKS Markets MetaTrader 5 allow you to trade over 60+ currency pairs including majors, minors and exotics with the tighest possible spreads with Raw Pricing connectivity. Trade on a flexible leverage from 1:1 to 1:200 with no intervention.</h5>
				</div>				
				<div className="w-full md:w-4/12 ">	
					<div className="market-facts-card forex">
						<div className="facts-header">
							<div className="header-label"> CFD 交易</div>
							<div className="header-title">属性</div>
						</div>
						<div className="facts-items">							
							<div className="facts-item">Over 60 currency pairs</div>							
							<div className="facts-item">最小的点差为 0.1 起</div>							
							<div className="facts-item">Up to 1:200 leverage</div>							
							<div className="facts-item">充沛的市场流动性</div>							
						</div>
						<div className="text-center">
							<a className="btn btn-primary" style="border-radius:50px;" href="https://crm.bksmarkets.com/#/user/register">开通账户</a>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</div>
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-8/12">						
					<h1 className="pb-4">商品交易</h1>
					<h5 className="pb-4">BKS Markets offers the both gold and and silver trading against the USD and EUR (XAU/USD, XAG/USD, XAU/EUR and XAG/EUR). Traders can trade metals with ultra fast execution speeds and no requotes. Trade gold and silver on 1:200 leverage with no dealing desk.</h5>
				</div>				
				<div className="w-full md:w-4/12 ">	
					<div className="market-facts-card forex">
						<div className="facts-header">
							<div className="header-label">商品交易</div>
							<div className="header-title">属性</div>
						</div>
						<div className="facts-items">							
							<div className="facts-item">超过19种商品可供交易</div>							
							<div className="facts-item">能源，大宗商品和贵金属</div>							
							<div className="facts-item">现货和期货的差价合约（CFD）s</div>							
							<div className="facts-item">UP to 1:200 leverage</div>							
						</div>
						<div className="text-center">
							<a className="btn btn-primary" style="border-radius:50px;" href="https://crm.bksmarkets.com/#/user/register">开通账户</a>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-8/12">						
					<h1 className="pb-4">指数差价合约（CFD） 交易</h1>
					<h5 className="pb-4">BKS Markets提供多种指数差价合约，涵盖15个主要市场的指数以及布伦特，WTI和天然气。我们的指数差价合约可以直接从您的MetaTrader 5账户进行交易，其差价从ASX 200指数差价合约的0.5点开始，到富时100指数差价合约的点差。</h5>
				</div>				
				<div className="w-full md:w-4/12 ">	
					<div className="market-facts-card forex">
						<div className="facts-header">
							<div className="header-label">指数差价合约交易</div>
							<div className="header-title">属性</div>
						</div>
						<div className="facts-items">							
							<div className="facts-item">来自于全球不同的17种交易指数</div>							
							<div className="facts-item">最高杠杆1:200</div>							
							<div className="facts-item">低手续费</div>							
							<div className="facts-item"> MT5</div>							
						</div>
						<div className="text-center">
							<a className="btn btn-primary" style="border-radius:50px;" href="https://crm.bksmarkets.com/#/user/register">开通账户</a>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</div>
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-8/12">						
					<h1 className="pb-4">股票交易</h1>
					<h5 className="pb-4">BKS Markets在MetaTrader 5平台上提供多种股票差价合约。交易者可以在ECN环境中以高达1:20的杠杆，对澳大利亚和美国的120多只股票进行交易。</h5>
				</div>				
				<div className="w-full md:w-4/12 ">	
					<div className="market-facts-card forex">
						<div className="facts-header">
							<div className="header-label">股票交易</div>
							<div className="header-title">属性</div>
						</div>
						<div className="facts-items">							
							<div className="facts-item">120多种股票和ETF来自于ASX, Nasdaq & NYSE</div>							
							<div className="facts-item">MT5</div>							
							<div className="facts-item">股息收益</div>										
						</div>
						<div className="text-center">
							<a className="btn btn-primary" style="border-radius:50px;" href="https://crm.bksmarkets.com/#/user/register">开通账户</a>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-8/12">						
					<h1 className="pb-4">债券交易</h1>
					<h5 className="pb-4">BKS Markets为交易者提供来自世界各地的一系列债券，包括ICE欧洲期货，欧洲期货交易所和芝加哥商品交易所（CME）的期货。 并在所有固定收益期货产品中具有竞争性差价。差价合约债券期货直接从相关期货市场定价，佣金，融资费用和股息调整都包含在价差中。</h5>
				</div>				
				<div className="w-full md:w-4/12 ">	
					<div className="market-facts-card forex">
						<div className="facts-header">
							<div className="header-label">债券交易</div>
							<div className="header-title">属性</div>
						</div>
						<div className="facts-items">							
							<div className="facts-item">120多种股票和ETF来自于ASX, Nasdaq & NYSE</div>							
							<div className="facts-item">无手续费</div>							
							<div className="facts-item">MT5</div>							
							<div className="facts-item">股息收益</div>							
						</div>
						<div className="text-center">
							<a className="btn btn-primary" style="border-radius:50px;" href="https://crm.bksmarkets.com/#/user/register">开通账户</a>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</div>
	<div className="w-full maket_header bg-gray-50" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-8/12">						
					<h1 className="pb-4">加密数字货币交易</h1>
					<h5 className="pb-4">BKS Markets提供各种加密数字货币，包括6种最受欢迎​​的数字货币。交易者可以做多做空，增加机会。在受监管环境中数字货币的点差从0.01起。</h5>
				</div>				
				<div className="w-full md:w-4/12 ">	
					<div className="market-facts-card forex">
						<div className="facts-header">
							<div className="header-label">加密数字货币交易</div>
							<div className="header-title">属性</div>
						</div>
						<div className="facts-items">							
							<div className="facts-item">以您的帐户货币进行即时现金结算交易</div>							
							<div className="facts-item">做多或者做空</div>							
							<div className="facts-item">杠杆最高可达1:5</div>	
							<div className="facts-item">六种最受欢迎的数字货币</div>										
						</div>
						<div className="text-center">
							<a className="btn btn-primary" style="border-radius:50px;" href="https://crm.bksmarkets.com/#/user/register">开通账户</a>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</div>
	<div className="w-full maket_header" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">				
				<div className="w-full md:w-8/12">						
					<h1 className="pb-4">交易条件</h1>
					<h5 className="pb-4">查看我们的在线交易条件，包括点差，库存费和可用货币对。 BKS Markets ECN在线交易环境提供业内最具竞争力的点差，多达25家不同银行的流动性和60多种不同货币对的暗池流动性来源。</h5>
				</div>				
				<div className="w-full md:w-4/12 ">	
					<div className="market-facts-card forex">
						<div className="facts-header">
							<div className="header-label">交易条件</div>
							<div className="header-title">属性</div>
						</div>
						<div className="facts-items">							
							<div className="facts-item">点差</div>							
							<div className="facts-item">交易时间</div>							
							<div className="facts-item">隔夜利息</div>								
						</div>
						<div className="text-center">
							<a className="btn btn-primary" style="border-radius:50px;" href="https://crm.bksmarkets.com/#/user/register">开通账户</a>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</div>
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >开始交易</h3>		
					<h1 className="f55 mb-5">值得信赖的全球 CFD 交易商</h1>
					<div>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-primary" style="border-radius:50px;" target="_blank"><strong>立即开户</strong></a>
						<a href="https://crm.bksmarkets.com/#/user/register" className="btn btn-outline-primary" style="border-radius:50px;" target="_blank"><strong>开设模拟交易账户</strong></a>
					</div>
				</div>	
				
			</div>
		</div>
	</div>
   <div className="w-full p-2 d-none d-md-block d-lg-block d-print-block" style="margin-top: -60px;">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap align-items-center justify-content-center">
				<div className="w-full md:w-4/12 pl-0 pr-0 pt-5">
					<h4 style="font-size:22px;">使用 BKS Markets App 访问 Global Markets</h4>		
				</div>	
				<div className="w-full md:w-3/12 text-center"><img src="images/iphones.png">	</div>
				<div className="w-full md:w-4/12 pt-5">
					<div className="text-center">
					<a href="#" className="" target="_blank"><img src="images/appleStore.png"></a>
					<a href="#" className="" target="_blank"><img src="images/GoogleStore.png"></a></div>
				</div>
			</div>
		</div>
	</div>
	`}})})}function N0(){return n.jsxs(n.Fragment,{children:[n.jsx(Dx,{}),n.jsx(Ex,{}),n.jsx(Fx,{}),n.jsx(Bx,{}),n.jsx(_x,{}),n.jsx(Lx,{})]})}function y0(){return n.jsx(Sg,{children:n.jsxs("div",{className:"min-h-screen flex flex-col bg-white",children:[n.jsx(Cx,{}),n.jsx("main",{className:"flex-grow",children:n.jsxs(eg,{children:[n.jsx(O,{path:"/",element:n.jsx(N0,{})}),n.jsx(O,{path:"/about",element:n.jsx(Ox,{})}),n.jsx(O,{path:"/contact",element:n.jsx(Ix,{})}),n.jsx(O,{path:"/accounts",element:n.jsx(Rx,{})}),n.jsx(O,{path:"/accounts/raw-spread",element:n.jsx(Ux,{})}),n.jsx(O,{path:"/accounts/standard",element:n.jsx(Kx,{})}),n.jsx(O,{path:"/markets",element:n.jsx(Yx,{})}),n.jsx(O,{path:"/markets/forex",element:n.jsx($x,{})}),n.jsx(O,{path:"/markets/commodities",element:n.jsx(zx,{})}),n.jsx(O,{path:"/markets/indices",element:n.jsx(Hx,{})}),n.jsx(O,{path:"/markets/bonds",element:n.jsx(Vx,{})}),n.jsx(O,{path:"/markets/cryptocurrency",element:n.jsx(Gx,{})}),n.jsx(O,{path:"/markets/stocks",element:n.jsx(Wx,{})}),n.jsx(O,{path:"/markets/futures",element:n.jsx(qx,{})}),n.jsx(O,{path:"/trading/spreads",element:n.jsx(Xx,{})}),n.jsx(O,{path:"/trading/conditions",element:n.jsx(Jx,{})}),n.jsx(O,{path:"/trading/hours",element:n.jsx(Qx,{})}),n.jsx(O,{path:"/trading/servers",element:n.jsx(Zx,{})}),n.jsx(O,{path:"/trading/swap-rates",element:n.jsx(e0,{})}),n.jsx(O,{path:"/platforms/metatrader-5",element:n.jsx(t0,{})}),n.jsx(O,{path:"/platforms/mt5-iphone",element:n.jsx(a0,{})}),n.jsx(O,{path:"/platforms/mt5-android",element:n.jsx(r0,{})}),n.jsx(O,{path:"/platforms/mt5-mac",element:n.jsx(s0,{})}),n.jsx(O,{path:"/funding",element:n.jsx(n0,{})}),n.jsx(O,{path:"/withdrawal",element:n.jsx(i0,{})}),n.jsx(O,{path:"/why",element:n.jsx(l0,{})}),n.jsx(O,{path:"/education",element:n.jsx(c0,{})}),n.jsx(O,{path:"/education/advantages-of-forex",element:n.jsx(o0,{})}),n.jsx(O,{path:"/education/advantages-of-cfds",element:n.jsx(d0,{})}),n.jsx(O,{path:"/education/glossary",element:n.jsx(m0,{})}),n.jsx(O,{path:"/help",element:n.jsx(u0,{})}),n.jsx(O,{path:"/legal",element:n.jsx(p0,{})}),n.jsx(O,{path:"/regulation",element:n.jsx(h0,{})}),n.jsx(O,{path:"/careers",element:n.jsx(f0,{})}),n.jsx(O,{path:"/insurance",element:n.jsx(g0,{})}),n.jsx(O,{path:"/vps",element:n.jsx(v0,{})}),n.jsx(O,{path:"/forex-trading",element:n.jsx(x0,{})})]})}),n.jsx(Tx,{})]})})}const{slice:b0,forEach:w0}=[];function k0(e){return w0.call(b0.call(arguments,1),t=>{if(t)for(const a in t)e[a]===void 0&&(e[a]=t[a])}),e}function S0(e){return typeof e!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(a=>a.test(e))}const Bd=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,j0=function(e,t){const r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},s=encodeURIComponent(t);let i=`${e}=${s}`;if(r.maxAge>0){const l=r.maxAge-0;if(Number.isNaN(l))throw new Error("maxAge should be a Number");i+=`; Max-Age=${Math.floor(l)}`}if(r.domain){if(!Bd.test(r.domain))throw new TypeError("option domain is invalid");i+=`; Domain=${r.domain}`}if(r.path){if(!Bd.test(r.path))throw new TypeError("option path is invalid");i+=`; Path=${r.path}`}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");i+=`; Expires=${r.expires.toUTCString()}`}if(r.httpOnly&&(i+="; HttpOnly"),r.secure&&(i+="; Secure"),r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(i+="; Partitioned"),i},Od={create(e,t,a,r){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};a&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+a*60*1e3)),r&&(s.domain=r),document.cookie=j0(e,t,s)},read(e){const t=`${e}=`,a=document.cookie.split(";");for(let r=0;r<a.length;r++){let s=a[r];for(;s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(t)===0)return s.substring(t.length,s.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var C0={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<"u")return Od.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:a,cookieMinutes:r,cookieDomain:s,cookieOptions:i}=t;a&&typeof document<"u"&&Od.create(a,e,r,s,i)}},T0={name:"querystring",lookup(e){var r;let{lookupQuerystring:t}=e,a;if(typeof window<"u"){let{search:s}=window.location;!window.location.search&&((r=window.location.hash)==null?void 0:r.indexOf("?"))>-1&&(s=window.location.hash.substring(window.location.hash.indexOf("?")));const l=s.substring(1).split("&");for(let o=0;o<l.length;o++){const d=l[o].indexOf("=");d>0&&l[o].substring(0,d)===t&&(a=l[o].substring(d+1))}}return a}},D0={name:"hash",lookup(e){var s;let{lookupHash:t,lookupFromHashIndex:a}=e,r;if(typeof window<"u"){const{hash:i}=window.location;if(i&&i.length>2){const l=i.substring(1);if(t){const o=l.split("&");for(let d=0;d<o.length;d++){const c=o[d].indexOf("=");c>0&&o[d].substring(0,c)===t&&(r=o[d].substring(c+1))}}if(r)return r;if(!r&&a>-1){const o=i.match(/\/([a-zA-Z-]*)/g);return Array.isArray(o)?(s=o[typeof a=="number"?a:0])==null?void 0:s.replace("/",""):void 0}}}return r}};let da=null;const Id=()=>{if(da!==null)return da;try{if(da=typeof window<"u"&&window.localStorage!==null,!da)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{da=!1}return da};var M0={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&Id())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:a}=t;a&&Id()&&window.localStorage.setItem(a,e)}};let ca=null;const Rd=()=>{if(ca!==null)return ca;try{if(ca=typeof window<"u"&&window.sessionStorage!==null,!ca)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{ca=!1}return ca};var E0={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&Rd())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:a}=t;a&&Rd()&&window.sessionStorage.setItem(a,e)}},A0={name:"navigator",lookup(e){const t=[];if(typeof navigator<"u"){const{languages:a,userLanguage:r,language:s}=navigator;if(a)for(let i=0;i<a.length;i++)t.push(a[i]);r&&t.push(r),s&&t.push(s)}return t.length>0?t:void 0}},F0={name:"htmlTag",lookup(e){let{htmlTag:t}=e,a;const r=t||(typeof document<"u"?document.documentElement:null);return r&&typeof r.getAttribute=="function"&&(a=r.getAttribute("lang")),a}},P0={name:"path",lookup(e){var s;let{lookupFromPathIndex:t}=e;if(typeof window>"u")return;const a=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(a)?(s=a[typeof t=="number"?t:0])==null?void 0:s.replace("/",""):void 0}},_0={name:"subdomain",lookup(e){var s,i;let{lookupFromSubdomainIndex:t}=e;const a=typeof t=="number"?t+1:1,r=typeof window<"u"&&((i=(s=window.location)==null?void 0:s.hostname)==null?void 0:i.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(r)return r[a]}};let Du=!1;try{document.cookie,Du=!0}catch{}const Mu=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Du||Mu.splice(1,1);const L0=()=>({order:Mu,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class Eu{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,a)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t,this.options=k0(a,this.options||{},L0()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=s=>s.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=r,this.addDetector(C0),this.addDetector(T0),this.addDetector(M0),this.addDetector(E0),this.addDetector(A0),this.addDetector(F0),this.addDetector(P0),this.addDetector(_0),this.addDetector(D0)}addDetector(t){return this.detectors[t.name]=t,this}detect(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,a=[];return t.forEach(r=>{if(this.detectors[r]){let s=this.detectors[r].lookup(this.options);s&&typeof s=="string"&&(s=[s]),s&&(a=a.concat(s))}}),a=a.filter(r=>r!=null&&!S0(r)).map(r=>this.options.convertDetectedLanguage(r)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?a:a.length>0?a[0]:null}cacheUserLanguage(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;a&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||a.forEach(r=>{this.detectors[r]&&this.detectors[r].cacheUserLanguage(t,this.options)}))}}Eu.type="languageDetector";const B0={tagline:"BKS MARKETS - 专业外汇交易平台",language:"简体中文",login:"登录",openAccount:"立即开户",nav:{about:"关于我们",markets:"交易市场",accounts:"交易账户",platforms:"交易平台",contact:"联系我们"}},O0={title1:"看准汇率",title2:"只需点一下",description:"BKS MARKETS 为您提供极低差价交易外汇，一周5天，每天24小时支持。立即开始体验专业级交易平台。",feature1:"终身免佣",feature2:"24小时支持",feature3:"双向交易",openAccount:"立即开户",demoTrading:"模拟交易"},I0={startTrading:"开始交易",openAccount:"立即开户",openDemoAccount:"开设模拟交易账户",learnMore:"了解更多",account:"账户",tradingPlatform:"交易平台",commission:"手续费",perLotPerSide:"(per lot per side)",spreadFrom:"点差起",points:"(点)",popular:"流行",contactUs:"联系我们",customerSupport:"客服支持24/7",helpCenter:"Help Centre",emailUs:"Email Us",globalOffices:"全球办公地点",trustedGlobal:"值得信赖的全球",cfdBroker:"CFD 交易商",useApp:"使用 BKS Markets App 访问 Global Markets"},R0={footer:{tagline:"BKS MARKETS 专业外汇交易平台。",contactUs:"欢迎与我们联络",supportHours:"逢交易日 24 小时支持",contactButton:"联系我们",faqButton:"常见问题",aboutUs:"关于我们",aboutBks:"关于 BKS Markets",whyBks:"为什么选择 BKS Markets",tradingMarkets:"交易市场",forex:"外汇",commodities:"大宗商品",indices:"指数交易",stocks:"股票",platforms:"交易平台",mt5:"MetaTrader 5",mt5iPhone:"MT5 iPhone/iPad",mt5Android:"MT5 安卓",mt5Mac:"MT5 Mac",customerService:"客户服务",accountFunding:"账户入金",accountWithdrawal:"账户出金",helpCenter:"帮助中心",regulatoryInfo:"BKS Markets PTY LTD 持有南非 FSCA 牌照（牌照号码：54483），由南非监管并履行其相关法规规定的所有义务。",companyAddress:"公司地址：26 LION ROAD - 47 BUCKINGHAM ESTATE, STERREWAG PRETORIA, GAUTENG 0181, South Africa",termsOfService:"BKS Markets Pty LTD 服务条款 - 司法管辖区免责声明",importantNotice:"重要声明：",importantNoticeText:"BKS Markets Pty LTD（以下简称「本公司」）是一家在南非注册并受 FSCA 监管的外汇交易商。本公司致力于向全球客户提供优质的交易服务，但由于各司法管辖区的法律和监管要求不同，本公司在部分地区可能无法提供或限制提供服务。",serviceRange:"服务提供范围：",serviceRangeText:"本公司在符合当地法律法规的前提下，向全球大部分地区的客户提供外汇、差价合约（CFD）等金融衍生品交易服务。本公司保留随时修改服务提供范围的权利，恕不另行通知。",notServedJurisdictions:"不提供服务的司法管辖区：",notServedJurisdictionsText:"由于法律和监管限制，本公司不向以下司法管辖区的居民提供服务：",notServedList:"美国、沙特阿拉伯、约旦、巴林、科威特、阿拉伯联合酋长国、阿曼、黎巴嫩、卡塔尔、伊拉克、叙利亚、也门、土耳其、伊朗、巴基斯坦、阿富汗、以色列",notServedNote:"此列表可能随时更新，请您定期查阅。如果您位于上述司法管辖区，或属于上述司法管辖区的居民，请勿使用本公司的服务。",riskWarning:"风险提示：",riskWarningText:"外汇和差价合约（CFD）等金融衍生品交易具有高风险，可能导致您损失全部投资。在您决定参与交易前，请务必充分了解相关风险，并评估您的风险承受能力。本公司提供的信息仅供参考，不构成任何投资建议。",legalLiability:"法律责任：",legalLiabilityText:"您有责任确保您在使用本公司服务时遵守当地法律法规。如果您违反当地法律法规，本公司概不负责。本公司不承担因您使用或无法使用本公司服务而产生的任何直接或间接损失。",others:"其他：",othersText:"本免责声明构成《BKS Markets Pty LTD 客户协议》的一部分。本公司保留随时修改本免责声明的权利，恕不另行通知。若您对本免责声明有任何疑问，请随时联系本公司客服。",copyright:"© {year} BKS Markets PTY LTD. All rights reserved.",legalDocuments:"法规文件"},features:{title:"为什么选择",titleHighlight:"BKS MARKETS",subtitle:"我们提供安全、可靠且低成本的交易环境，助您在全球外汇市场中运筹帷幄。",feature1Title:"日本最大外汇交易商之一",feature1Description:"集团业务始于2005年，每天处理客户交易量高达10万亿日元。信心保证。",feature2Title:"证监会监管 安全可靠",feature2Description:"香港证监会（SFC）监管，客户资金独立存放于香港认可银行账户，资金安全无忧。",feature3Title:"极低交易成本",feature3Description:"买卖差价低至1点，HK$3,000起即可交易。零佣金，降低您的交易成本。",feature4Title:"功能完善、操作简易",feature4Description:"配备浏览器，iPhone及Android 3款交易界面，一用上手，随时随地进行交易。",feature5Title:"负余额保护",feature5Description:"如汇率出现波动造成超额损失，账户的负余额将在下一个交易日后被免除。",specialCardTitle:"买卖外汇同时赚取过夜利息",specialCardDescription:"买入高息货币日日赚，极具竞争力的过夜利息，公开透明。",dailyInterest:"每日利息结算",buySellAnytime:"随时买入及卖出",currencyPairs:"16种自选货币对",viewInterestTable:"查看利息表"},platforms:{title:"多平台交易体验",subtitle:"无论身在何处，都能轻松掌握市场脉搏",platform1Title:"MT PC版",platform1Description:"在Windows PC上运行MetaTrader 5交易平台。BKS Markets MetaTrader 5服务器坐落于纽约的Equinix NY4数据中心，确保超低的交易延迟和快速执行。支持Windows 7或更高级别的系统，提供市场领先的点差环境和低交易手续费。",platform2Title:"MT iPhone/iPad",platform2Description:"BKS Markets为客户提供在屡获殊荣的交易平台MetaTrader 5上交易的机会。通过iPhone和iPad，随时随地轻松交易，享受市场领先的点差环境和低交易手续费，闪电般的订单执行速度。",platform3Title:"MT 安卓版",platform3Description:"在Android设备上体验MetaTrader 5的强大功能。该平台具有丰富的交易环境和自动化交易能力，已成为最受CFD交易员欢迎的交易平台。支持杠杆高达1:400，最小交易手数0.01，没有交易限制。",platform4Title:"MT 苹果MAC版",platform4Description:"在Mac OSX系统上运行MetaTrader 5交易平台。BKS Markets与众多技术提供商均有合作，为您提供下一代MetaTrader 5交易平台，这一设计将为您的交易水平带来更进一步的帮助。支持标准账户和ECN账户。"},promotions:{title:"最新推广",titleHighlight:"及优惠",promo1Title:"新开户奖赏",promo1Description:"立即开户，获取迎新礼遇",promo2Title:"免费索取2026财经月历",promo2Description:"掌握全年重要财经日子"},news:{latestNews:"最新消息",viewAll:"查看全部",marketCommentary:"最新市场评论",readMore:"阅读更多",moreAnalysis:"更多市场分析 &gt;",news1Date:"2025年10月28日",news1Title:"外汇交易时段更改通知",news2Date:"2025年09月19日",news2Title:"重要通告：BKS MARKETS收到收购要约",news3Date:"2025年07月15日",news3Title:"快捷简便存款服务暂停 (2025年7月19日及20日)",news4Date:"2025年06月11日",news4Title:"有关2025年6月内额外过夜利息日数之列表",news5Date:"2025年04月16日",news5Title:"请注意复活节假期内的市场流动性",commentary1:"高风险资产跌势停不了，美元继续稳",commentary2:"美汇指数再度突破100大关，后市仍势如破竹",commentary3:"3点识外汇 - 本周策略 (19-11-2025)",commentary4:'"滞后"的非农出台前高风险资产继续泻，美金仍可看高一线'},liveRates:{title:"实时汇率",subtitle:"极具竞争力的点差，助您把握每个交易机会",morePairs:"更多货币对",spread:"点差",sell:"卖出 (Sell)",buy:"买入 (Buy)",sellButton:"卖出",buyButton:"买入",eurUsd:"欧元/美元",usdJpy:"美元/日元",gbpUsd:"英镑/美元",audUsd:"澳元/美元"}},U0={about:{title:"关于我们",subtitle:"BKS Markets 是一家 CFD 差价合约提供商。 BKS Markets 的存在是为了连接零售和机构交易者之间的差距，使全世界的每个人都可以交易。",leadingCfd:"领先的",cfdTradingPlatform:"CFD 交易平台",description1:"BKS Markets是最著名的CFD合约经纪商之一，为活跃的日内交易者和剥头皮以及外汇市场新手提供交易解决方案。 BKS Markets为其客户提供最先进的交易平台，低延迟连接和卓越的流动性。",description2:"BKS Markets正在彻底改变在线 CFD 交易，在线交易者现在能够获得以前只有投资银行和高净值个人可用的定价和流动性。",professionalTeam:"专业团队",teamDescription:"我们的管理团队在亚洲、欧洲和北美的外汇、CFD和股票市场方面有着丰富的经验。正是这种经验使我们能够选择尽可能的最好的技术解决方案，并手工挑选市场上可获得的最佳流动性。",whyBksMarkets:"为什么创立",whyBksMarkets2:"BKS Markets",whyDescription1:"BKS Markets试图减小零售和机构客户之间的差距，提供以前只有投资银行和高净值个人可用的交易解决方案。 BKS Markets ECN Connectivity诞生，提供卓越的执行技术，更低的点差和无与伦比的流动性。",whyDescription2:"BKS Markets致力于持续创新，不断改进并利用最新的前沿技术。",missionStatement:"使命宣言",missionDescription:"BKS Markets的使命在于为零售客户和机构交易者提供一样的可以使交易者更专注于交易的最专业最透明的交易环境。同时致力于为交易者提供卓越的点差、执行和服务。",coreValues:"核心价值观",coreValue1:"诚信",coreValue2:"公平公正",coreValue3:"透明",coreValue4:"承诺并负责",coreValue5:"可依赖",coreValue6:"可变通",coreValue7:"不断创新",coreValue8:"健全的公司管理制度",complianceManagement:"合规管理",complianceDescription:"BKS Markets acknowledges the importance of compliance with all relevant laws, rules, regulations, policies and standards. BKS Markets is committed to having strict management discipline and first-class controls in our compliance environment. As a globally regulated entity BKS Markets is required to meet strict financial standards, including capital adequacy and audit requirements.",audit:"审计",auditDescription:"BKS Markets 有独立的外部审计来补充我们的业务流程，并确保法规的遵守。",confidentiality:"保密",confidentialityDescription:'BKS Markets 保持最合适的管控，并基于"按需知密"的原则上，监管公司对内和对外移交保密且敏感的客户信息。 BKS Markets不会刻意披露客户信息，除非是应客户要求或根据法律规定。'},contact:{title:"联系我们",subtitle:"客服支持24/7",questionOrHelp:"有问题或需要专业协助？",helpDescription:"我们的专业客服团队全天候为您服务，随时准备为您提供帮助。",emailInquiry:"电子邮件询问",customerRelations:"客户关系",technicalSupport:"技术支持",serviceHours:"服务时间",serviceHoursDescription:"我们的客服团队提供 24/7 全天候服务，无论何时您需要帮助，我们都在这里。",globalOfficesDescription:"BKS Markets 是一家全球经纪商，在多个司法管辖区设有办事处，以满足您的需求。"},accounts:{title:"账户总览",subtitle:"BKS Markets 产品和大型产品系列包含在所有帐户类型中。 适合新手和有经验的交易者，只需选择您喜欢的交易平台和定价模式即可开始使用。",ecnAccount:"ECN Account",standardAccount:"标准账户",accountFunding:"账户入金",withdrawal:"出金取款",accountType:"账户",tradingPlatform:"交易平台",commission:"手续费",spreadFrom:"点差起",openAccount:"开户",openDemoAccount:"开设模拟交易账户",tradeEcn:"在 ECN 交易",spreadFrom01:"0.1点差起"},educationOverview:{title:"投资者教育",subtitle:"在多次获奖的MetaTrader4平台体验超快速执行，最低的点差和无交易条件限制",advantagesOfForex:"ADVANTAGES OF FOREX",advantagesOfCfds:"ADVANTAGES OF CFDS",contactHeader:"联系我们",start:"开始",startDescription:"了解外汇（ CFD 交易）市场的一般概念，熟悉外汇市场的一些基本知识。开始您的 CFD 交易，并了解外汇市场的运作方式，基本的技术和基本分析，以及影响外汇市场的因素。",cfdAdvantages:"CFD 交易的优势",cfdAdvantagesDescription:"了解外汇市场交易的众多优势，您会发现外汇市场为什么是公平市场竞争和真正价格发现的真实舞台之一",contractAdvantages:"差价合约的优势",contractAdvantagesDescription:"了解交易指数差价合约的众多优势，您会发现为什么指数CFD交易市场如此受欢迎。",tradeWithTrusted:"与全球最值得信赖的外汇CFD经纪商进行交易"},forex:{title:"外汇",subtitle:"BKS Markets Forex产品是世界上最具竞争力的产品之一。 进入全球最大，最具流动性的市场，ECN从0.0点开始。",forex:"外汇",commodities:"大宗商品",indices:"股指",bonds:"债券",cryptoCfds:"加密货币 CFDs",stocks:"股票",futures:"期货",marketDescription1:"外汇市场每周7天，每天24小时开放，是全球规模最大、流动性最强的市场，日交易额超过4万亿美元，超过任何场内交易市场",marketDescription2:"外汇市场为交易者提供了在全球最具流动性的金融市场中每周5天，每天24小时交易的机会。 交易者可以利用61种货币对中最小的点差，卓越的执行力和深度的银行间流动性。",forexOverview:"概要",over61Pairs:"可供交易的货币对超过61种",spreadFrom01:"点差低至0.1",leverageUpTo400:"高达 1:400 杠杆",highLiquidity:"高流动性",trade24Hours:"一天24小时交易,一周五天",openAccount:"开设账户",cfdSpreads:"CFD 交易点差",spreadDescription:"BKS Markets为 CFD 交易者提供了全球所有 CFD 交易经纪商中一些最小的点差，我们的欧元/美元平均点差为0.1个点。最小的点差加上我们低延迟的企业级硬件使得BKS Markets成为活跃的日内交易员和使用EA的理想选择。下表显示了所有主要货币对的最小和平均点差。",howToTrade:"如何进行",howToTradeCfd:"CFD 交易?",tradingExample:"CFD 交易实例"},funding:{title:"账户入金",subtitle:"BKS Markets提供了超过14种灵活的入金选择，包括10种不同的基本货币。即刻免费使用。",ecnAccount:"ECN Account",standardAccount:"标准账户",accountFunding:"账户入金",withdrawal:"出金取款",creditDebitCards:"Credit and Debit Cards 借记/信用卡",instant:"即时",fundingOption:"入金选择",acceptableCurrencies:"可接受货币:",processingTime:"大约处理时间",openAccount:"开通账户",paymentProcess:"支付过程",paymentProcessDescription:"为了更快的处理，我们建议所有账户持有人从其客户专域内将资金存入其交易账户。在您的客户专区，您可以通过银联方式，USDT以及国际电汇等方式为您的账户进行充值。如果您还没有访问过我们的客户专区，请遵循访问指令。",fundSecurity:"资金安全",fundSecurityDescription:"您的交易账户的客户资金是被存放在安全等级为AA级银行的客户信托账户之下的。电子支付使用SSL（安全套接字层）技术进行处理，并进行加密以确保安全性。所有付款信息都是保密的，只有在 BKS Markets Global 的交易账户资金出入使用。",bankFees:"银行费用",bankFeesDescription:"BKS Markets Global 对客户出入金不收取任何额外费用的。然而，请知悉，您可能会被收取一些国际银行机构的支付费用。BKS Markets Global 不承担任何此类银行费用的责任。",thirdPartyPayment:"第三方支付",thirdPartyPaymentDescription:"BKS Markets Global 不接受来自第三方的支付。请确保所有存款到您的交易帐户来自一个银行帐户在您的名字。如果交易账户持有人是银行账户/信用卡上的一方，则接受来自联合银行账户/信用卡的付款。",ctaStartTrading:"立即开始交易",ctaTradeWithTrusted:"与全球最值得信赖的",forexCfdBroker:"外汇CFD经纪商"},standardAccount:{title:"标准账户",subtitle:"使用BKS Markets Standard帐户保持简单。 体验我们的所有好处，包括全包价差和无佣金。",ecnAccount:"ECN Account",standardAccount:"标准账户",accountFunding:"账户入金",withdrawal:"出金取款",enterpriseNetwork:"企业级网络连接",noCommission:"无手续费",fastExecution:"极速订单执行",leverageUpTo400:"杠杆高达1:400",highLiquidity:"高流动性",metatrader5:"MetaTrader 5",forexCommoditiesIndices:"外汇、大宗商品和全球股指",forexCommoditiesDescription:"交易60种货币，16种大宗商品包括贵金属，加上16种主要指数，包括富时100指数、标准普尔ASX 200指数和道琼斯指数，点差低至0.5点。",leverageUpTo400Title:"Leverage up to 1:400",leverageDescription:"Accounts go up to 1:400 leverage on the BKS Markets MetaTrader 5 platforms. Traders can use higher leverage to suit their trading style and get the best out of their manual and automated trading strategies.",supportedCurrencies:"支持所有主要货币的账户",supportedCurrenciesDescription:"我们知道一些交易者更倾向于使用本国货币。 在10种支持的基础货币中开立一个账户，包括美元、澳元、欧元、英镑、新加坡元、港币、纽币、日元、瑞士法郎和加元。",whyChooseTitle:"为什么选择我们的标准账户?",whyChooseDescription:"BKS Markets 标准账户为您提供无与伦比的交易执行速度，以及低至1点的点差。 BKS Markets 服务器位于世界上最可靠的数据中心之一，纽约的Equinix NY4。与超过25个不同的银行和报价供应商连接在一起，您将拥有一个优越的交易体验。",cfdTrading:"CFD 交易",openStandardAccount:"开通标准账户",executionSpeedTitle:"极速订单执行",executionSpeedDescription1:"BKS Markets MetaTrader 5 服务器位于纽约的Equinix NY4数据中心。NY4数据中心被称为金融生态系统，拥有600多家买卖双方公司、交易所、交易场所、市场数据和服务提供商。 MetaTrader 5服务器交叉连接到我们的网络，以确保超低延迟和快速执行您的订单。",executionSpeedDescription2:"BKS Markets MetaTrader 5交易服务器对于主要VPS提供商的延迟小于1毫秒，这些提供商要么位于NY4数据中心，要么通过专用线路连接到附近的数据中心。这种低延迟环境是自动化和高频交易以及剥头皮交易者的理想选择。",noTradingRestrictions:"无限制交易 – 允许剥头皮交易",noTradingRestrictionsDescription1:"BKS Markets MetaTrader 5 平台对交易没有限制。我们提供最佳的交易条件给全球范围内的剥头皮交易和高频交易，允许交易者在价差之间下订单，没有最小的订单距离。这意味着包括止损订单在内的订单可以按你的价格无限接近市场价格。",noTradingRestrictionsDescription2:"交易者也可以锁仓，因为在BKS Markets没有先进先出（FIFO）的规则。交易者不需要为锁仓支付保证金，并享受保证金净值的好处。",level2Pricing:"2级定价—— 市场深度",level2PricingDescription:"市场的深度显示了由流动性提供商直接提供的全部可执行价格。市场深度通过在任何给定时间显示每个价格水平的可用交易量来提供每个货币对的流动性。高流动性、奇异现货价格和低延迟保证了尽可能的低点差。",flexibleFunding:"灵活的出入金选择",flexibleFundingDescription:"一旦你开立了你的账户，你可以使用我们以下的任何方式来入金，包括：信用卡/借记卡、paypal、电汇、虚拟货币。",flexibleLotSize:"灵活的手数大小",flexibleLotSizeDescription:"对交易手数大小没有限制，你可以做小到0.01手一笔的交易，没有最大的限制。我们灵活的交易手数大小允许您以最小的风险在平台交易，并根据您的帐户余额管理您的交易规模。",ctaStartTrading:"立即开始交易",ctaTrueForexBroker:"一个真正的",forexBroker:"外汇经纪商"},rawSpreadAccount:{title:"ECN 账户",subtitle:"在世界上最受欢迎的交易平台上，让您拥有在一个ECN交易的优势，我们提供机构级流动性组合，包括精选的一级银行、领先的非银行做市商和暗池。",ecnAccount:"ECN Account",standardAccount:"标准账户",accountFunding:"账户入金",withdrawal:"出金取款",spreadFrom01:"点差0.1 起",fastExecution:"极速订单执行",leverage1400:"1:400 杠杆",highLiquidity:"高流动性",metatrader5:"MetaTrader 5",lowestSpreadsTitle:"我们的 ECN 账户提供了尽可能的最低价差",lowestSpreadsDescription1:"我们的 ECN 账户提供了尽可能的最低价差。我们的欧元/美元平均价差是 0.1 个点，只需支付较低的手续费。拥有超过 25 家不同银行的流动性，以及暗池流动性来源，BKS Markets 的 ECN 账户是为日内交易者、剥头皮交易员和 EA 建立的。",lowestSpreadsDescription2:"我们的 MetaTrader 5 服务器位于纽约的 Equinix NY4 数据中心，使您更接近我们的流动性合作伙伴，并消除部分延迟。BKS Markets MT5 平台是活跃日间交易者和全球剥头皮交易的首选。",cfdTrading:"CFD 交易",openAccount:"开通账户",fastExecutionTitle:"极速订单执行",fastExecutionDescription:"BKS Markets MetaTrader 5 服务器位于纽约的Equinix NY4数据中心。NY4数据中心被称为金融生态系统，拥有600多家买卖方公司、交易所、交易场所、市场数据和服务提供商。他们MT5和5服务器交叉连接到我们的网络环境，以确保超低延迟和快速执行您的订单。",fastExecutionAdditional:"BKS Markets MetaTrader 5台交易服务器对于主要VPS提供商的延迟小于1毫秒，这些提供商要么位于NY4数据中心，要么通过专用线路连接到附近的数据中心。",spreadFrom01Title:"0.1点差起",spreadFrom01Description:"BKS Markets 拥有全球外汇经纪商的最优的点差。在MT 4和5平台上的点差从0点开始，欧元兑美元的平均值是0.1点24/5。",spreadFrom01Additional:"我们从多达50个不同的流动性提供商获得多样化的流动性组合，意味着我们总是能够为我们的客户提供流动性，并保持我们的点差最低，特别是在如新闻公告这种高波动时期。",noTradingRestrictions:"无限制交易 – 允许剥头皮交易",noTradingRestrictionsDescription:"BKS Markets MetaTrader 5 平台对交易没有限制。我们提供最佳的交易条件给全球范围内的剥头皮交易和高频交易，允许交易者在价差之间下订单，没有最小的订单距离。这意味着包括止损订单在内的订单可以按你的价格无限接近市场价格。",noTradingRestrictionsAdditional:"交易者也可以锁仓，因为在BKS Markets没有先进先出（FIFO）的规则。交易者不需要为锁仓支付保证金，并享受保证金净值的好处。",level2Pricing:"2级定价—— 市场深度",level2PricingDescription:"市场的深度显示了由流动性提供商直接提供的全部可执行价格。市场深度通过在任何给定时间显示每个价格水平的可用交易量来提供每个货币对的流动性。高流动性、奇异现货价格和低延迟保证了尽可能的低点差。",flexibleFundingTitle:"灵活的出入金选择",flexibleFundingDescription:"一旦你开立了你的账户，你可以使用我们以下的任何方式来入金，包括：信用卡/借记卡、电汇、paypal、虚拟货币。",flexibleLotSizeTitle:"灵活的手数大小",flexibleLotSizeDescription:"对交易手数大小没有限制，你可以做小到0.01手一笔的交易，没有最大的限制。我们灵活的交易手数大小允许您以最小的风险在平台交易，并根据您的帐户余额管理您的交易规模。",currencyPairs:"64 货币对和贵金属 + 15 CFDs",currencyPairsDescription:"交易64种货币对加上15种主要股票指数，包括富时100指数、标准普尔ASX 200指数和道琼斯指数。",leverageUpTo400Title:"Leverage up to 1:400",leverageUpTo400Description:"Accounts go up to 1:400 leverage on the BKS Markets MetaTrader 5 platforms. Traders can use higher leverage to suit their trading style and get the best out of their manual and automated trading strategies.",ctaStartTrading:"开始交易",ctaTradeWithTrusted:"与全球最值得信赖的",forexCfdBroker:"外汇CFD经纪商"},withdrawal:{title:"出金取款",subtitle:"为了加快处理速度，目前要求所有帐户持有人从客户专区内提交出金请求。如果您还无法访问客户专区，请按照访问说明进行操作。",ecnAccount:"ECN Account",standardAccount:"标准账户",accountFunding:"账户入金",withdrawal:"出金取款",fasterProcessing:"为了加快处理速度，目前要求所有帐户持有人从客户专区内提交出金请求。",accessInstructions:"如果您还无法访问客户专区，请按照访问说明进行操作。",noteBeforeFirst:"如果您还没有提交过出金申请，请注意：",deadlineTitle:"出金申请截止时间",deadlineDescription:"出金申请截止时间为12:00 AEST / AEDT。 如果您的出金申请在此时间之前提交，将在当日处理。 如果您的出金申请在此时间之后提交，将在下一个工作日处理。",bankFeesTitle:"银行费用",bankFeesDescription:"BKS Markets 不另行收取存款或提现手续费用。但是，还请注意，当您对部分国际银行机构进行转账操作时，或将产生包括中转行手续费类的资费。BKS Markets 不对任何银行费用承担责任。",wireTransferTitle:"国际银行电汇",wireTransferDescription:"国际银行电汇最多需要 14 天到账，且中间行和/或收款行可能收取额外费用。",cardWithdrawalTitle:"信用卡/借记卡提现",cardWithdrawalDescription:"信用卡/借记卡提现*操作将不收取任何资费。一经处理，信用卡/借记卡提现部分或将于3-5个工作日内到账。不过，还是需要注意的是，在部分特殊场合，有时可能需要多达10个工作日到账，根据银行方面，到账时间会有所差异。*敬请留意：并非所有国家都支持信用卡提现。",excessWithdrawalTitle:"超额提现",excessWithdrawalDescription:"如果您希望提取的金额超过 Visa/MasterCard 安全信用卡/借记卡所存入的金额，您将需要使用之前使用的另一种存款方式或银行电汇选项。",paypalWithdrawalTitle:"PayPal 出金",paypalWithdrawalDescription:"Paypal方式提交的出金必须用当初通过同种方式入金的相应账号进行取款。出金方式均免费，且审批完后立即到账。",otherImportantInfo:"其他重要信息",additionalPoint1:"如果您上传的信用卡/借记卡已过期，请在您的客户专区上传新卡以确保继续使用入金和出金的服务。如果新卡的号码与过期卡的号码不同，您需要提交旧卡发卡银行发出的信函，确认已发出新卡来取代旧卡。",additionalPoint2:"如果您上传的信用卡/借记卡已丢失/被盗/损坏/取消，您需要提交旧卡发卡银行发出的信函，确认旧卡已不再有效。",additionalPoint3:"如果上传的新卡在申请出金之前尚未用于入金，则需要存入少量的金额以激活此卡上的出金功能。",additionalPoint4:"BKS Markets会根据情况，在出金到您的新卡之前要求您提交文件（比如，通过老卡入金的入金收据凭证）。",additionalPoint5:"出金超过Visa / MasterCard信用卡/借记卡的金额的部分，您需要选择之前使用的其他入金方式或银行电汇选项。",additionalPoint6:"BKS Markets不接受第三方支付。请确保您的付款人姓名和交易账户持有人名称一致。如果针对联名账户/信用卡持有人，可以支付到任何一方的交易账户。",ctaStartTrading:"开始交易",ctaTradeWithTrusted:"与全球最值得信赖的",forexCfdBroker:"外汇CFD经纪商"},tradingMarkets:{title:"市场范围",subtitle:"BKS Markets' 精心挑选的产品让您有机会进入全球最受欢迎和流动性最强的市场，获得24/7的最佳交易机会。",markets:{forex:"外汇",indices:"指数",commodities:"大宗商品",stocks:"股票",bonds:"债券",crypto:"加密货币",futures:"期货"},forexName:"外汇",forexDescription:"外汇市场为交易者提供了在全球最具流动性的金融市场中每周5天，每天24小时交易的机会。 交易者可以利用61种货币对中最小的点差，卓越的执行力和深度的银行间流动性。",forexFeatures1:"61种货币对",forexFeatures2:"低至0.1点差",forexFeatures3:"Up to 1:400 leverage",forexFeatures4:"高流动性",indicesName:"指数",indicesDescription:"通过BKS Markets提供的全球指数CFDS，来参与到全球最大的股票市场。25个指数点差低至0.5个点，交易者可以更全面地看待股票市场，同时享受零佣金和跨市场的5天24小时交易。",indicesFeatures1:"全球25种指数交易",indicesFeatures2:"高达200倍杠杆",indicesFeatures3:"低手续费",indicesFeatures4:"MT5",commoditiesName:"大宗商品",commoditiesDescription:"交易能源、农业和贵金属产品和交易美元为计价货币的货币对或期货的CFD一样。我们将最优价格和每10分一个点的灵活手数结合起来，提供您一个最优质的产品。",commoditiesFeatures1:"22种大宗商品供交易",commoditiesFeatures2:"能源、农业和金属",commoditiesFeatures3:"现货和期货 CFDs",commoditiesFeatures4:"Up to 1:200 leverage",stocksName:"股票",stocksDescription:"提供在澳洲证券交易所、纽约证券交易所和纳斯达克证券交易所超过1800家大市值股票和ETF的CFD。我们选择了一系列世界上最受欢迎的公司和最热门的ETF给你最好的交易机会。",stocksFeatures1:"超过1800只在澳洲证券交易所、纽约证券交易所和纳斯达克证券交易所上市的股票",stocksFeatures2:"赚取股息",stocksFeatures3:"MT5",bondsName:"债券",bondsDescription:"债券为交易者提供了投机利率和全球风险情绪、对冲股票风险以及多样化策略的机会。选择世界各国政府发行的一系列债券，包括日本、欧洲、英国和美国。",bondsFeatures1:"超过9种债券供交易",bondsFeatures2:"无佣金",bondsFeatures3:"高达200倍杠杆",bondsFeatures4:"高流动性",cryptoName:"加密货币",cryptoDescription:"做多或做空世界上最大和最流行的加密货币。与其他零售交易商进行7*24小时交易，其中价格波动主要是由于恐惧和贪婪、新闻和普遍情绪推动的。",cryptoFeatures1:"21种最流行的加密货币",cryptoFeatures2:"每周 7 天都可交易",cryptoFeatures3:"多头空头",cryptoFeatures4:"MT5 1:5 倍杠杆",futuresName:"期货",futuresDescription:"期货是CFD最流行的形式之一。BKS Markets提供了来自世界各地的一系列期货，包括ICE美元指数和CBOE VIX指数。基于在线期货的CFDS仅在BKS Markets的MT5平台上提供。",futuresFeatures1:"4种全球期货可供交易",futuresFeatures2:"无佣金",futuresFeatures3:"高达200倍杠杆",futuresFeatures4:"高流动性",viewOurSpreads:"查看我们的",spreads:"点差",details:"详情",market:"市场"},metatrader5:{title:"MetaTrader 5交易平台",subtitle:"在屡获殊荣的MetaTrader 5平台体验我们超快的执行速度和灵活的交易条件。",platformLinks:{mtPc:"MT PC版",mtiPhone:"MT iPhone/iPad",mtAndroid:"MT 安卓版",mtMac:"MT 苹果MAC版"},features1:"市场领先的点差环境和低交易手续费",features2:"Leverage up to 1:400",features3:"最小交易手数 0.01",features4:"灵活的出入金选项",features5:"没有交易限制",features6:"闪电般的订单执行速度",metaTrader5:"Meta Trader 5",summary:"摘要",openAccount:"开通账户",description1:"BKS Markets为客户提供在屡获殊荣的交易平台MetaTrader 5上交易的机会. 毫无疑问，因为它易于使用， MT5已经成为最受 CFD 交易员欢迎的交易平台，该平台具有丰富的交易环境和自动化交易能力.",description2:"它已经从一个交易平台成长为一个国际化的社区，交易员的创新需求也因为技术的提升得以满足. BKS Markets与众多技术提供商均有合作，并且自豪的为您提供下一代MetaTrader 5交易平台, 这一设计将为您的交易水平带来更进一步的帮助.",description3:"BKS Markets为您提供MetaTrader 5交易平台下的标准账户和ECN账户.",whyDifferentTitle:"为何BKS Markets MetaTrader 5交易平台如此不同?",systemRequirements:"系统要求",systemRequirementsDescription:"MetaTrader 5客户端要求Windows 7 或更高级别的系统. 同时也可能允许在苹果Mac OSX系统上运行.",ultraFastExecutionTitle:"超快指令执行",ultraFastExecutionDescription:"BKS Markets MetaTrader 5服务器坐落于纽约的Equinix NY4数据中心. NY4数据中心是一个拥有超过600家做多/做空交易公司, 交易所, 交易场所, 市场数据和服务提供商. MetaTrader 5服务器可以与我们的ECN交易模式交叉连接以确保超低的交易延迟和快速执行.",ultraFastExecutionAdditional:"BKS Markets的MetaTrader 5服务器的延迟时间可以通过联系位于NY4数据中心的VPS提供商或通过专线网络链接到附近的数据中心并使交易延迟小于1毫秒.",noTradingRestrictionsTitle:"没有交易限制",noTradingRestrictionsDescription:"BKS Markets的 MetaTrader 5 交易平台没有交易限制. 我们可以为全球范围内的剥头皮和高频交易者提供一些最佳的交易条件, 些条件将允许交易者在0点差之间下单并执行平仓操作. 这一设定意味着交易单的止损价格可以靠近市场价格. 这意味着包括止损在内的交易单都可以在最靠近市场价格的价位成交.",noTradingRestrictionsAdditional:"交易者也可以使用对冲策略因为在BKS Markets没有先进先出原则(FIFO). 交易者并不需要为对冲仓位付出额外的保证金便可以享受对冲带来的利益.",spreadLowestTitle:"点差最低0.1 点",spreadLowestDescription:"BKS Markets拥有全球 CFD 交易商种最有竞争力的点差. 在 MetaTrader 5交易平台上最低点差可以达到0.1 点并且欧元兑美元的平均点差可以在正常交易日内达到0.1点. 这是目前全球范围内最低的欧美平均点差.",spreadLowestAdditional:"我们的多达50个报价提供商组合意味着平台总是能否为客户提供报价并保持低点差, 特别是在市场发生剧烈波动的时候，比如消息面数据公布.",ctaStartTrading:"开始交易",ctaTradeWithTrusted:"与全球最值得信赖的",forexCfdBroker:"外汇CFD经纪商"},mt5iPhone:{title:"苹果手机和平板电脑版本 MetaTrader",subtitle:"通过iPhone或iPad上市场领先的MetaTrader ECN帐户随时保持与市场的连接。",platformLinks:{mtPc:"MT PC版",mtiPhone:"MT iPhone/iPad",mtAndroid:"MT 安卓版",mtMac:"MT 苹果MAC版"},summaryTitle:"苹果手机版MetaTrader 5",summary:"摘要",features:["市场最低点差 0.1 点起","超快指令执行","银行间深度流动性","随时随地登陆您的交易账户","MetaTrader 5"],openAccount:"开通账户",description1:"我们提供苹果手机和平板电脑的MT5. 这两个交易平台可以使交易者更便捷的登陆账户.",description2:"苹果手机和平板电脑版本的MetaTrader交易软件将配有很多新特性, 比如横向/纵向视图视角的改变 (一个简单的旋转装置). 苹果手机版本的MetaTrader交易软件也提供一键交易功能, 这一功能可以使投资者自己选择版面布局, 以及高级图表分析. 使用手机版MetaTrader软件可以在不影响执行速度或质量的前提下，为客户提供无限的灵活性体验.",tradeOnTitle:"在苹果手机或平板电脑上交易!",systemRequirements:"相关系统要求",systemRequirementsDescription:"iPhone iOS 7.0 或更新版本. 可以与苹果手机，平板电脑进行兼容.",characteristicsTitle:"特点",characteristics:["实时的外汇和差价合约报价","一整套完整交易单, 包括市场挂单在图表上直接交易","支持所有类型的执行模式","查看完整的交易历史","带有缩放和滚动功能的实时交互式图表","30多种技术指标","多种时间周期可用于分析市场价格走势","3种图表可供选择: 长条图, 蜡烛图, 线型图","可调整设定的技术指标"],advantagesTitle:"优势",advantages:["简洁的用户指引界面图标上显示交易级别和成交量","离线模式(价格和图表符号)","可以从苹果商城直接下载该免费软件","在图表上直接交易"],ctaTitle:"开始交易",ctaSubtitle:"现在就在苹果手机系统安装MetaTrader",ctaAccount:"开设账户",ctaOpenAccount:"立即开户",ctaDemoAccount:"开设模拟交易账户",appDownloadTitle:"使用 BKS Markets App 访问 Global Markets"},mt5Android:{title:"MetaTrader 安卓版",subtitle:"不要错过机会! 使用安卓版交易系统可以随时在市场交易。",platformLinks:{mtPc:"MT PC版",mtiPhone:"MT iPhone/iPad",mtAndroid:"MT 安卓版",mtMac:"MT 苹果MAC版"},summaryTitle:"安卓版MetaTrader 5",summary:"摘要",features:["最低点差 0.1 点起","超快指令执行","银行间的市场流动性深度","可以在任何地点登陆交易账户","MetaTrader 5"],openAccount:"开通账户",description1:"我们提供安卓版的MT5. 这两个交易平台可以使交易者更便捷的登陆账户.",description2:"BKS Markets的安卓版操作系统可以给您无与伦比的交易执行速度和有竞争力的点差.它的特点是可以在多个屏幕上实现一键交易和可定制布局. 并且可以完整查看交易历史数据和使用高级制图工具, 交易者可以自行管理账户, 交易所有平台提供的交易产品, 并使用多大30多种的指标用于市场分析.",tradeOnTitle:"通过安卓系统进行交易!",systemRequirements:"相关系统要求",systemRequirementsDescription:"安卓系统4.0或者更高",characteristicsTitle:"特点",characteristics:["实时的外汇和差价合约报价","一整套完整交易单, 包括市场挂单在图表上直接交易","支持所有类型的执行模式","查看完整的交易历史","带有缩放和滚动功能的实时交互式图表","30多种技术指标","多种时间周期可用于分析市场价格走势","3种图表可供选择: 长条图, 蜡烛图, 线型图","可调整设定的技术指标"],advantagesTitle:"优势",advantages:["简洁的用户指引界面","图标上显示交易级别和成交量","离线模式(价格和图表符号)","可以从安卓市场直接下载免费软件"],ctaTitle:"开始交易",ctaSubtitle:"在安卓版Metatrader",ctaAccount:"开设账户",ctaOpenAccount:"立即开户",ctaDemoAccount:"开设模拟交易账户",appDownloadTitle:"使用 BKS Markets App 访问 Global Markets"},mt5Mac:{title:"苹果Mac版 MetaTrader",subtitle:"利用专为Mac设计的专有版MetaTrader，利用 BKS Markets 企业级网络光纤连接。",platformLinks:{mtPc:"MT PC版",mtiPhone:"MT iPhone/iPad",mtAndroid:"MT 安卓版",mtMac:"MT 苹果MAC版"},summaryTitle:"苹果Mac版MetaTrader",summary:"摘要",features:["市场最低点差 0.1 点起","超快指令执行","银行间深度流动性","1:400 Leverage","MetaTrader 5"],openAccount:"开通账户",description:"BKS Markets 为苹果系统的用户打造了苹果IOS版本的Metatrader 5操作系统，此系统的特点在于客户可以在不安装系统的前提下使用MT5的多项功能.我们的苹果Mac版本的应用软件可以为客户提供与台式电脑用户同样的功能. 现在Mac系统的童虎可以通过安装并使用EA来获取来自第三方的软件优势并应用在交易平台上.",tradeOnTitle:"使用MetaTrader直接在您的Mac系统下交易",systemRequirements:"系统要求",systemRequirementsDescription:"Mac OS X 10.x 或更高",characteristicsTitle:"特点",characteristics:["实时的外汇和差价合约报价","全系列自定义指标","一整套完整交易单, 包括市场挂单","优势均来自于MetaTrader 5平台的特点","运行所有自动化交易软件 (EAs)","高级图形工具和分析功能"],advantagesTitle:"优势",advantages:["更简单的Metatrader 5使用界面","市场领先的ECN","无与伦比的交易执行速度","没有交易限制 - 允许剥头皮交易","交易外汇，股票，贵金属和差价合约"],installationTitle:"安装",platformInstallationTitle:"交易平台安装介绍",platformInstallationSteps:['下载 ".dmg" 文件并打开.',"打开文件后将苹果Mac版本 BKS Markets MetaTrader文件拖拽到软件文件夹 .","当文件拖拽到软件文件夹后，软件安装程序将自动开始并安装苹果Mac版本到您的电脑.","使用登陆信息登陆到您的真实或模拟账户."],eaInstallationTitle:"安装自动化交易软件 (EAs)",eaInstallationSteps:["下载并保存您的自动化交易软件在您的苹果Mac系统. 请记住您下载的电脑路径.",'选择 "开始"',"选择 程序",'鼠标右键点击 "显示内容"','选择 "C盘" 然后 "Program Files" 然后 " BKS Markets Trader" 然后选择 "experts"','复制您的 "ex4" 和 "mq4" 文件到自动化交易的目录',"打开 BKS Markets苹果Mac版安装程序，然后您就可以在导航菜单中看到您的自动化交易软件."],indicatorsInstallationTitle:"安装指标",indicatorsInstallationSteps:["下载并保存指标到苹果Mac系统. 请记住您下载的电脑路径.",'选择 "开始"',"选择 程序",'鼠标右键点击 "显示内容"','选择 "C盘" 然后 "Program Files" 然后 " BKS Markets Trader" 然后选择 "experts"','复制您的 "ex4" 和 "mq4" 文件到自动化交易的目录',"打开 BKS Markets 苹果Mac版安装软件然后就可以在导航菜单中看到您的指标软件."],ctaTitle:"开始交易",ctaSubtitle:"现在就在Mac系统安装MetaTrader",ctaAccount:"开设账户",ctaOpenAccount:"立即开户",ctaDemoAccount:"开设模拟交易账户",appDownloadTitle:"使用 BKS Markets App 访问 Global Markets"},tradingConditions:{title:"交易条件",subtitle:"BKS Markets 交易环境将为您提供在世界范围内均最具优势的报价和 最为灵活的交易条件。此类优势将是需要最佳执行质量与最低点差 易者心目中的理想之选。"},indices:{title:"指数",subtitle:"一笔交易即可交易一篮子投资产品构成的指数。<br>在BKS Markets交易平台上交易全球最流行的指数。"},tradingServers:{title:"交易服务器",subtitle:"BKS Markets的MT5交易服务器分别位于纽约的NY4 Equinix数据中心和伦敦LD5 IBX Equinix数据中心，为客户提供最快的执行速度。"},insurance:{title:"Client Funds Insurance up to US$1,000,000",subtitle:"We've got you covered"},regulation:{title:"监管机构",subtitle:"BKS Markets is authorised and regulated by multiple Regulators across the globe. Trade with peace of mind knowing that  BKS Markets is monitored by some of the strictest financial regulators' bodies in the world."},helpCenter:{title:"帮助中心",subtitle:"帮助中心 – 使用我们全面的知识库找到您需要的答案，或者可以直接联系我们24小时在线客服"},advantagesOfCfds:{title:"差价合约的优势",subtitle:"BKS Markets 在包括指数、能源、金属、大宗商品等在内的一系列CFD上提供了灵活的交易条件。"},forexGlossary:{title:"外汇术语",subtitle:""},careers:{title:"诚聘英才",subtitle:"在 BKS Markets，我们一直渴求最优秀的人才从而进一步深化和拓展全球市场。"},futures:{title:"期货",subtitle:"期货是CFD最流行的形式之一。 BKS Markets 提供了来自世界各地的一系列期货产品，包括ICE Dollar Index和CBOE VIX指数。可以再 BKS Markets的MT5平台上交易基于在线期货的CFDS。"},stocks:{title:"股票",subtitle:"在ASX、纽约证交所和纳斯达克证交所交易超过1800只大盘股和ETF的CFD，执行力强，定价严格，只在 BKS Markets MetaTrader 5平台上交易。"},forexTrading:{title:"CFD 交易",subtitle:"BKS Markets 精心挑选的产品，平台和帐户类型使您可以感受到全球最受欢迎和最具流动性的市场，以获得24/5的最佳交易机会"},legal:{title:"法规文件",subtitle:"您可以在此找到所有您需要了解的关于我们的法律协议和条款条件。"},advantagesOfForex:{title:"外汇优势",subtitle:"外汇市场是世界上最大的金融市场，每周5天24小时开放交易。无论何时，您都可以进行 CFD 交易。"},vps:{title:"虚拟服务器",subtitle:"VPS虚拟服务器可以让交易者实现7天24小时不间断的交易，并且获得与 BKS Markets交易服务器之间最快的连接速度。"},spreads:{title:"点差",subtitle:"BKS Markets 有着很低的点差，让您在市场上更轻易的交易 。"},commodities:{title:"大宗商品",subtitle:"交易世界上最流行的大宗商品，包括能源、农业和金属。BKS Markets结合最优的价格和灵活的交易环境，给你提供一个最优的产品。"},tradingHours:{title:"交易时间",subtitle:"在 BKS Markets，您一直有可供交易的市场。我们可以为您提供7天24小时服务。"},cryptocurrency:{title:"加密货币 CFDs",subtitle:"加密货币波动性强，不受监管，去中心化且几乎仅会被散户投机者掌握的一种货币。 在FSA监管的交易商交易世界上最新的，最令人兴奋的CFD资产。"},swapRates:{title:"隔夜利息费率",subtitle:"BKS Markets 隔夜利息费率是世界上最具竞争力的。最大化您的隔夜利息收益或减少您交易我们产品的隔夜利息的成本。"},bonds:{title:"债券",subtitle:"在MT5和5上交易世界上包括美国，英国，欧洲和日本在内的最流行的固定收益证券。"},why:{title:"全球受欢迎的经纪商",subtitle:"通过为交易者提供他们真正想要的东西，BKS Markets已发展成为全球受欢迎的经纪商。",spread:"点差",simpleQuotes:"简捷的报价",cfdTrading:"CFD 交易",joinUsDescription:"加入我们，享受最低点差的CFD交易和我们顶级客服团队的全力支持。",lowerSpreadsTitle:"更低的点差",lowerSpreadsDescription:"我们不断地在现有的交易环境中增加更多的流动性提供源，以便使我们的交易者享有全球最好的 CFD 交易条件。 优良的交易环境为客户带来最佳的交易体验。",fastExecutionTitle:"快速执行",fastExecutionDescription:"BKS Markets分别在纽约和伦敦的NY4和LD5数据中心的贸易服务器上拥有自己的企业级硬件支持。 数据中心也是我们的报价提供商存放服务器的地方。专用的光纤交叉连接到我们的网络，报价提供商确保为我们的客户提供最低延迟和最快的交易执行。",advancedTechTitle:"超强的技术",advancedTechDescription:"BKS Markets已经与世界最好的交易技术公司合作为您提供无与伦比的交易环境和尖端的交易工具，这些工具包括：市场（DOM）深度，内部市场点差监控；阶梯交易技术；使用客户自定义模板进行自动平仓等等。我们的iPhone和Android移动设备交易应用已经进行了优化，为您提供最佳的移动交易体验。",ultimateSupportTitle:"终极绝佳的交易支持",ultimateSupportDescription:"BKS Markets has been created with traders in mind. Scalping, hedging, and automated trading are all allowed. Our ECN Acount spreads start from 0.01pips. We have flexible leverage options offering up to 1:400, and accept deposits in 10 major currencies.",flexibleVolumeTitle:"灵活的交易量",flexibleVolumeDescription:"客户可以通过我们的交易环境成交从0.01手（1,000基础货币）到250手（2500万基础货币）的交易规模。 我们的技术对价格进行分类和排序，以允许在多个报价提供商及其报价层上实时执行交易，这确保了任何交易规模的最佳价格。",unparalleledServiceTitle:"无与伦比的客服服务",unparalleledServiceDescription:"BKS Markets致力于为客户提供无与伦比的客户服务和支持，我们的团队都在外汇行业有着显赫的从业经历，因此他们懂得 CFD 交易者的需求。所以在BKS Markets您可以放心交易，因为我们每周7天24小时都在陪伴着您。",advancedToolsTitle:"高级的交易工具",advancedToolsDescription:"我们在MetaTrader上的插件如一键成交模块、市场深度、点差监控、交易风险计算、高级订单类型等过去在MT5上不曾有的功能都将为交易者提供更棒的交易体验。",excellentPlatformTitle:"卓越的交易平台",excellentPlatformDescription:"MetaTrader 5 是当今世界最好的平台之一，BKS Markets 通过 MT5 直接连接各大银行的报价，为客户提供更优质的交易环境。",trustTransparencyTitle:"信任与透明",trustTransparencyDescription:"信任与透明是BKS Markets的核心价值观。BKS Markets 作为CFD 交易商承诺绝不存在人为干涉报价、篡改价格和交易限制等行为。",contactUs:"联系我们",helpCentre:"Help Centre",emailUs:"Email Us"}},K0={header:B0,hero:O0,common:I0,components:R0,pages:U0},$0={tagline:"BKS MARKETS - Professional Forex Trading Platform",language:"English",login:"Login",openAccount:"Open Account",nav:{about:"About Us",markets:"Trading Markets",accounts:"Trading Accounts",platforms:"Trading Platforms",contact:"Contact Us"}},z0={title1:"Spot Exchange Rates",title2:"With Just One Click",description:"BKS MARKETS offers you ultra-low spread forex trading, 24/5 support. Start experiencing a professional-grade trading platform now.",feature1:"Lifetime No Commission",feature2:"24/5 Support",feature3:"Two-Way Trading",openAccount:"Open Account",demoTrading:"Demo Trading"},H0={startTrading:"Start Trading",openAccount:"Open Account",openDemoAccount:"Open Demo Account",learnMore:"Learn More",account:"Account",tradingPlatform:"Trading Platform",commission:"Commission",perLotPerSide:"(per lot per side)",spreadFrom:"Spread From",points:"(points)",popular:"Popular",contactUs:"Contact Us",customerSupport:"Customer Support 24/7",helpCenter:"Help Centre",emailUs:"Email Us",globalOffices:"Global Office Locations",trustedGlobal:"Trusted Global",cfdBroker:"CFD Broker",useApp:"Access Global Markets with BKS Markets App"},V0={footer:{tagline:"BKS MARKETS Professional Forex Trading Platform.",contactUs:"Contact Us",supportHours:"24/7 Support on Trading Days",contactButton:"Contact Us",faqButton:"FAQ",aboutUs:"About Us",aboutBks:"About BKS Markets",whyBks:"Why Choose BKS Markets",tradingMarkets:"Trading Markets",forex:"Forex",commodities:"Commodities",indices:"Indices Trading",stocks:"Stocks",platforms:"Trading Platforms",mt5:"MetaTrader 5",mt5iPhone:"MT5 iPhone/iPad",mt5Android:"MT5 Android",mt5Mac:"MT5 Mac",customerService:"Customer Service",accountFunding:"Account Funding",accountWithdrawal:"Account Withdrawal",helpCenter:"Help Center",regulatoryInfo:"BKS Markets PTY LTD holds a South African FSCA license (License No: 54483), is regulated by South Africa and fulfills all obligations under its relevant regulations.",companyAddress:"Company Address: 26 LION ROAD - 47 BUCKINGHAM ESTATE, STERREWAG PRETORIA, GAUTENG 0181, South Africa",termsOfService:"BKS Markets Pty LTD Terms of Service - Jurisdiction Disclaimer",importantNotice:"Important Notice:",importantNoticeText:'BKS Markets Pty LTD (hereinafter referred to as "the Company") is a forex broker registered in South Africa and regulated by the FSCA. The Company is committed to providing quality trading services to customers worldwide, but due to different legal and regulatory requirements in various jurisdictions, the Company may be unable to provide or may restrict services in some regions.',serviceRange:"Service Coverage:",serviceRangeText:"Subject to compliance with local laws and regulations, the Company provides trading services in financial derivatives such as forex and CFDs to customers in most regions worldwide. The Company reserves the right to modify the service coverage at any time without prior notice.",notServedJurisdictions:"Jurisdictions Not Served:",notServedJurisdictionsText:"Due to legal and regulatory restrictions, the Company does not provide services to residents of the following jurisdictions:",notServedList:"United States, Saudi Arabia, Jordan, Bahrain, Kuwait, United Arab Emirates, Oman, Lebanon, Qatar, Iraq, Syria, Yemen, Turkey, Iran, Pakistan, Afghanistan, Israel",notServedNote:"This list may be updated at any time. Please check regularly. If you are located in or are a resident of any of the above jurisdictions, please do not use the Company's services.",riskWarning:"Risk Warning:",riskWarningText:"Trading in financial derivatives such as forex and CFDs involves high risk and may result in the loss of your entire investment. Before deciding to participate in trading, please fully understand the related risks and assess your risk tolerance. The information provided by the Company is for reference only and does not constitute any investment advice.",legalLiability:"Legal Liability:",legalLiabilityText:"You are responsible for ensuring that you comply with local laws and regulations when using the Company's services. If you violate local laws and regulations, the Company shall not be held responsible. The Company shall not be liable for any direct or indirect losses arising from your use or inability to use the Company's services.",others:"Others:",othersText:`This disclaimer forms part of the "BKS Markets Pty LTD Customer Agreement". The Company reserves the right to modify this disclaimer at any time without prior notice. If you have any questions about this disclaimer, please contact the Company's customer service at any time.`,copyright:"© {year} BKS Markets PTY LTD. All rights reserved.",legalDocuments:"Legal Documents"},features:{title:"Why Choose",titleHighlight:"BKS MARKETS",subtitle:"We provide a safe, reliable and low-cost trading environment to help you excel in the global forex market.",feature1Title:"One of Japan's Largest Forex Brokers",feature1Description:"Group operations began in 2005, processing customer trading volume of up to 10 trillion yen per day. Confidence guaranteed.",feature2Title:"SFC Regulated - Safe and Secure",feature2Description:"Regulated by the Hong Kong Securities and Futures Commission (SFC), customer funds are held in separate accounts with recognized banks in Hong Kong, ensuring fund safety.",feature3Title:"Ultra-Low Trading Costs",feature3Description:"Bid-ask spreads as low as 1 pip, trading from HK$3,000. Zero commission, reducing your trading costs.",feature4Title:"Fully Functional and Easy to Use",feature4Description:"Equipped with browser, iPhone and Android trading interfaces, easy to use, trade anytime, anywhere.",feature5Title:"Negative Balance Protection",feature5Description:"If exchange rate fluctuations cause excess losses, negative balances in accounts will be waived after the next trading day.",specialCardTitle:"Earn Overnight Interest While Trading Forex",specialCardDescription:"Buy high-yield currencies to earn daily, highly competitive overnight interest, transparent and open.",dailyInterest:"Daily Interest Settlement",buySellAnytime:"Buy and Sell Anytime",currencyPairs:"16 Currency Pairs Available",viewInterestTable:"View Interest Table"},platforms:{title:"Multi-Platform Trading Experience",subtitle:"Wherever you are, easily master market trends",platform1Title:"MT PC Version",platform1Description:"Run the MetaTrader 5 trading platform on Windows PC. BKS Markets MetaTrader 5 servers are located at the Equinix NY4 data center in New York, ensuring ultra-low trading latency and fast execution. Supports Windows 7 or higher systems, providing market-leading spread environment and low trading fees.",platform2Title:"MT iPhone/iPad",platform2Description:"BKS Markets provides customers with the opportunity to trade on the award-winning MetaTrader 5 platform. Trade easily anytime, anywhere through iPhone and iPad, enjoy market-leading spread environment and low trading fees, with lightning-fast order execution.",platform3Title:"MT Android Version",platform3Description:"Experience the powerful features of MetaTrader 5 on Android devices. The platform features a rich trading environment and automated trading capabilities, and has become the most popular trading platform among CFD traders. Supports leverage up to 1:400, minimum lot size 0.01, no trading restrictions.",platform4Title:"MT Mac Version",platform4Description:"Run the MetaTrader 5 trading platform on Mac OSX systems. BKS Markets works with numerous technology providers to bring you the next-generation MetaTrader 5 trading platform, designed to further enhance your trading level. Supports both Standard and ECN accounts."},promotions:{title:"Latest Promotions",titleHighlight:"and Offers",promo1Title:"New Account Bonus",promo1Description:"Open an account now and get welcome benefits",promo2Title:"Free 2026 Financial Calendar",promo2Description:"Master important financial dates throughout the year"},news:{latestNews:"Latest News",viewAll:"View All",marketCommentary:"Latest Market Commentary",readMore:"Read More",moreAnalysis:"More Market Analysis &gt;",news1Date:"October 28, 2025",news1Title:"Forex Trading Hours Change Notice",news2Date:"September 19, 2025",news2Title:"Important Notice: BKS MARKETS Receives Acquisition Offer",news3Date:"July 15, 2025",news3Title:"Quick and Easy Deposit Service Suspension (July 19-20, 2025)",news4Date:"June 11, 2025",news4Title:"List of Additional Overnight Interest Days in June 2025",news5Date:"April 16, 2025",news5Title:"Please Note Market Liquidity During Easter Holidays",commentary1:"High-risk assets continue to fall, US dollar remains stable",commentary2:"US Dollar Index breaks through 100 again, bullish momentum remains strong",commentary3:"3 Points to Know Forex - Weekly Strategy (19-11-2025)",commentary4:'High-risk assets continue to fall before "delayed" non-farm payrolls, US dollar can still look higher'},liveRates:{title:"Live Exchange Rates",subtitle:"Highly competitive spreads to help you seize every trading opportunity",morePairs:"More Currency Pairs",spread:"Spread",sell:"Sell",buy:"Buy",sellButton:"Sell",buyButton:"Buy",eurUsd:"EUR/USD",usdJpy:"USD/JPY",gbpUsd:"GBP/USD",audUsd:"AUD/USD"}},G0={about:{title:"About Us",subtitle:"BKS Markets is a CFD contract provider. BKS Markets exists to bridge the gap between retail and institutional traders, making trading accessible to everyone worldwide.",leadingCfd:"Leading",cfdTradingPlatform:"CFD Trading Platform",description1:"BKS Markets is one of the most renowned CFD contract brokers, providing trading solutions for active day traders and scalpers as well as newcomers to the forex market. BKS Markets provides its clients with the most advanced trading platforms, low-latency connections and exceptional liquidity.",description2:"BKS Markets is revolutionizing online CFD trading, and online traders can now access pricing and liquidity that was previously only available to investment banks and high-net-worth individuals.",professionalTeam:"Professional Team",teamDescription:"Our management team has extensive experience in forex, CFD and equity markets across Asia, Europe and North America. This experience enables us to select the best possible technical solutions and hand-pick the best liquidity available in the market.",whyBksMarkets:"Why",whyBksMarkets2:"BKS Markets",whyDescription1:"BKS Markets seeks to reduce the gap between retail and institutional clients, providing trading solutions that were previously only available to investment banks and high-net-worth individuals. BKS Markets ECN Connectivity was born, offering exceptional execution technology, lower spreads and unparalleled liquidity.",whyDescription2:"BKS Markets is committed to continuous innovation, constantly improving and leveraging the latest cutting-edge technology.",missionStatement:"Mission Statement",missionDescription:"BKS Markets' mission is to provide retail clients and institutional traders with the same professional and transparent trading environment that allows traders to focus more on trading. At the same time, we are committed to providing traders with excellent spreads, execution and service.",coreValues:"Core Values",coreValue1:"Integrity",coreValue2:"Fairness",coreValue3:"Transparency",coreValue4:"Commitment and Responsibility",coreValue5:"Reliability",coreValue6:"Flexibility",coreValue7:"Continuous Innovation",coreValue8:"Sound Corporate Management System",complianceManagement:"Compliance Management",complianceDescription:"BKS Markets acknowledges the importance of compliance with all relevant laws, rules, regulations, policies and standards. BKS Markets is committed to having strict management discipline and first-class controls in our compliance environment. As a globally regulated entity BKS Markets is required to meet strict financial standards, including capital adequacy and audit requirements.",audit:"Audit",auditDescription:"BKS Markets has independent external audits to supplement our business processes and ensure regulatory compliance.",confidentiality:"Confidentiality",confidentialityDescription:"BKS Markets maintains the most appropriate controls and, based on the principle of 'need-to-know', regulates the company's internal and external transfer of confidential and sensitive customer information. BKS Markets will not deliberately disclose customer information unless requested by the customer or required by law."},contact:{title:"Contact Us",subtitle:"Customer Support 24/7",questionOrHelp:"Have questions or need professional assistance?",helpDescription:"Our professional customer service team is available 24/7 to help you at any time.",emailInquiry:"Email Inquiry",customerRelations:"Customer Relations",technicalSupport:"Technical Support",serviceHours:"Service Hours",serviceHoursDescription:"Our customer service team provides 24/7 service, and we are here whenever you need help.",globalOfficesDescription:"BKS Markets is a global broker with offices in multiple jurisdictions to meet your needs."},accounts:{title:"Account Overview",subtitle:"BKS Markets products and extensive product range are included in all account types. Suitable for both beginners and experienced traders, simply choose your preferred trading platform and pricing model to get started.",ecnAccount:"ECN Account",standardAccount:"Standard Account",accountFunding:"Account Funding",withdrawal:"Withdrawal",accountType:"Account",tradingPlatform:"Trading Platform",commission:"Commission",spreadFrom:"Spread From",openAccount:"Open Account",openDemoAccount:"Open Demo Account",tradeEcn:"Trade on ECN",spreadFrom01:"From 0.1 Spread"},educationOverview:{title:"Investor Education",subtitle:"Experience ultra-fast execution, lowest spreads and no trading restrictions on the award-winning MetaTrader 4 platform",advantagesOfForex:"ADVANTAGES OF FOREX",advantagesOfCfds:"ADVANTAGES OF CFDS",contactHeader:"Contact Us",start:"Getting Started",startDescription:"Learn the general concepts of the forex (CFD trading) market and familiarize yourself with some basic knowledge of the forex market. Start your CFD trading and learn how the forex market works, basic technical and fundamental analysis, and factors that affect the forex market.",cfdAdvantages:"Advantages of CFD Trading",cfdAdvantagesDescription:"Learn about the many advantages of forex market trading, and you will discover why the forex market is one of the true stages of fair market competition and true price discovery.",contractAdvantages:"Advantages of CFDs",contractAdvantagesDescription:"Learn about the many advantages of trading index CFDs, and you will discover why the index CFD trading market is so popular.",tradeWithTrusted:"Trade with the World's Most Trusted Forex CFD Broker"},forex:{title:"Forex",subtitle:"BKS Markets Forex products are among the most competitive in the world. Access the world's largest and most liquid market, ECN starting from 0.0 pips.",forex:"Forex",commodities:"Commodities",indices:"Indices",bonds:"Bonds",cryptoCfds:"Cryptocurrency CFDs",stocks:"Stocks",futures:"Futures",marketDescription1:"The forex market is open 24 hours a day, 7 days a week, and is the largest and most liquid market in the world, with daily trading volume exceeding $4 trillion, exceeding any exchange-traded market.",marketDescription2:"The forex market provides traders with the opportunity to trade 24 hours a day, 5 days a week in the world's most liquid financial market. Traders can take advantage of the smallest spreads among 61 currency pairs, excellent execution and deep interbank liquidity.",forexOverview:"Overview",over61Pairs:"Over 61 currency pairs available for trading",spreadFrom01:"Spreads as low as 0.1",leverageUpTo400:"Up to 1:400 leverage",highLiquidity:"High liquidity",trade24Hours:"24-hour trading, 5 days a week",openAccount:"Open Account",cfdSpreads:"CFD Trading Spreads",spreadDescription:"BKS Markets provides CFD traders with some of the smallest spreads among all CFD trading brokers worldwide. Our average EUR/USD spread is 0.1 pips. The smallest spreads combined with our low-latency enterprise-grade hardware make BKS Markets ideal for active day traders and EA users. The table below shows the minimum and average spreads for all major currency pairs.",howToTrade:"How to",howToTradeCfd:"Trade CFDs?",tradingExample:"CFD Trading Examples"},funding:{title:"Account Funding",subtitle:"BKS Markets offers more than 14 flexible funding options, including 10 different base currencies. Free to use immediately.",ecnAccount:"ECN Account",standardAccount:"Standard Account",accountFunding:"Account Funding",withdrawal:"Withdrawal",creditDebitCards:"Credit and Debit Cards",instant:"Instant",fundingOption:"Funding Option",acceptableCurrencies:"Acceptable Currencies:",processingTime:"Approximate Processing Time",openAccount:"Open Account",paymentProcess:"Payment Process",paymentProcessDescription:"For faster processing, we recommend that all account holders deposit funds into their trading accounts from their client portal. In your client portal, you can top up your account via UnionPay, USDT and international wire transfers. If you haven't accessed our client portal yet, please follow the access instructions.",fundSecurity:"Fund Security",fundSecurityDescription:"Your trading account's customer funds are held in customer trust accounts at AA-rated banks. Electronic payments are processed using SSL (Secure Sockets Layer) technology and encrypted for security. All payment information is confidential and is only used for BKS Markets Global trading account deposits and withdrawals.",bankFees:"Bank Fees",bankFeesDescription:"BKS Markets Global does not charge any additional fees for customer deposits and withdrawals. However, please note that you may be charged some payment fees by international banking institutions. BKS Markets Global is not responsible for any such bank fees.",thirdPartyPayment:"Third-Party Payments",thirdPartyPaymentDescription:"BKS Markets Global does not accept payments from third parties. Please ensure that all deposits to your trading account come from a bank account in your name. If the trading account holder is a party on the bank account/credit card, payments from joint bank accounts/credit cards are accepted.",ctaStartTrading:"Start Trading Now",ctaTradeWithTrusted:"Trade with the World's Most Trusted",forexCfdBroker:"Forex CFD Broker"},standardAccount:{title:"Standard Account",subtitle:"Keep it simple with BKS Markets Standard account. Experience all our benefits, including all-inclusive spreads and no commission.",ecnAccount:"ECN Account",standardAccount:"Standard Account",accountFunding:"Account Funding",withdrawal:"Withdrawal",enterpriseNetwork:"Enterprise-grade network connection",noCommission:"No commission",fastExecution:"Ultra-fast order execution",leverageUpTo400:"Leverage up to 1:400",highLiquidity:"High liquidity",metatrader5:"MetaTrader 5",forexCommoditiesIndices:"Forex, Commodities and Global Indices",forexCommoditiesDescription:"Trade 60 currencies, 16 commodities including precious metals, plus 16 major indices including FTSE 100, S&P ASX 200 and Dow Jones, with spreads as low as 0.5 pips.",leverageUpTo400Title:"Leverage up to 1:400",leverageDescription:"Accounts go up to 1:400 leverage on the BKS Markets MetaTrader 5 platforms. Traders can use higher leverage to suit their trading style and get the best out of their manual and automated trading strategies.",supportedCurrencies:"Accounts Supporting All Major Currencies",supportedCurrenciesDescription:"We know that some traders prefer to use their local currency. Open an account in one of 10 supported base currencies, including USD, AUD, EUR, GBP, SGD, HKD, NZD, JPY, CHF and CAD.",whyChooseTitle:"Why Choose Our Standard Account?",whyChooseDescription:"BKS Markets Standard account provides you with unparalleled trading execution speed and spreads as low as 1 pip. BKS Markets servers are located at one of the world's most reliable data centers, Equinix NY4 in New York. Connected to over 25 different banks and quote providers, you will have a superior trading experience.",cfdTrading:"CFD Trading",openStandardAccount:"Open Standard Account",executionSpeedTitle:"Ultra-Fast Order Execution",executionSpeedDescription1:"BKS Markets MetaTrader 5 servers are located at the Equinix NY4 data center in New York. The NY4 data center is known as a financial ecosystem with over 600 buy-side and sell-side companies, exchanges, trading venues, market data and service providers. MetaTrader 5 servers are cross-connected to our network to ensure ultra-low latency and fast execution of your orders.",executionSpeedDescription2:"BKS Markets MetaTrader 5 trading servers have less than 1 millisecond latency to major VPS providers, which are either located in the NY4 data center or connected to nearby data centers via dedicated lines. This low-latency environment is ideal for automated and high-frequency trading as well as scalpers.",noTradingRestrictions:"No Trading Restrictions – Scalping Allowed",noTradingRestrictionsDescription1:"BKS Markets MetaTrader 5 platform has no trading restrictions. We provide the best trading conditions for scalpers and high-frequency traders worldwide, allowing traders to place orders between spreads with no minimum order distance. This means that orders, including stop-loss orders, can be placed infinitely close to the market price.",noTradingRestrictionsDescription2:"Traders can also hedge because there is no first-in-first-out (FIFO) rule at BKS Markets. Traders do not need to pay margin for hedging positions and enjoy the benefits of margin equity.",level2Pricing:"Level 2 Pricing – Market Depth",level2PricingDescription:"Market depth shows all executable prices directly provided by liquidity providers. Market depth provides liquidity for each currency pair by showing available trading volume at each price level at any given time. High liquidity, exotic spot prices and low latency ensure the lowest possible spreads.",flexibleFunding:"Flexible Deposit and Withdrawal Options",flexibleFundingDescription:"Once you open your account, you can deposit funds using any of the following methods: credit/debit cards, PayPal, wire transfers, virtual currency.",flexibleLotSize:"Flexible Lot Sizes",flexibleLotSizeDescription:"There are no restrictions on trading lot sizes. You can trade as small as 0.01 lots per trade with no maximum limit. Our flexible trading lot sizes allow you to trade on the platform with minimal risk and manage your trading size according to your account balance.",ctaStartTrading:"Start Trading Now",ctaTrueForexBroker:"A True",forexBroker:"Forex Broker"},rawSpreadAccount:{title:"ECN Account",subtitle:"On the world's most popular trading platform, enjoy the advantages of ECN trading. We provide institutional-grade liquidity pools, including selected Tier 1 banks, leading non-bank market makers and dark pools.",ecnAccount:"ECN Account",standardAccount:"Standard Account",accountFunding:"Account Funding",withdrawal:"Withdrawal",spreadFrom01:"Spreads from 0.1",fastExecution:"Ultra-fast order execution",leverage1400:"1:400 Leverage",highLiquidity:"High liquidity",metatrader5:"MetaTrader 5",lowestSpreadsTitle:"Our ECN Account Offers the Lowest Possible Spreads",lowestSpreadsDescription1:"Our ECN account offers the lowest possible spreads. Our average EUR/USD spread is 0.1 pips, with only low commission fees. With liquidity from over 25 different banks and dark pool liquidity sources, BKS Markets' ECN account is built for day traders, scalpers and EAs.",lowestSpreadsDescription2:"Our MetaTrader 5 servers are located at the Equinix NY4 data center in New York, bringing you closer to our liquidity partners and eliminating some latency. BKS Markets MT5 platform is the preferred choice for active day traders and global scalpers.",cfdTrading:"CFD Trading",openAccount:"Open Account",fastExecutionTitle:"Ultra-Fast Order Execution",fastExecutionDescription:"BKS Markets MetaTrader 5 servers are located at the Equinix NY4 data center in New York. The NY4 data center is known as a financial ecosystem with over 600 buy-side and sell-side companies, exchanges, trading venues, market data and service providers. Their MT5 servers are cross-connected to our network environment to ensure ultra-low latency and fast execution of your orders.",fastExecutionAdditional:"BKS Markets MetaTrader 5 trading servers have less than 1 millisecond latency to major VPS providers, which are either located in the NY4 data center or connected to nearby data centers via dedicated lines.",spreadFrom01Title:"Spreads from 0.1",spreadFrom01Description:"BKS Markets has the best spreads among global forex brokers. Spreads on MT 4 and 5 platforms start from 0 pips, with an average EUR/USD of 0.1 pips 24/5.",spreadFrom01Additional:"Our diversified liquidity pool from up to 50 different liquidity providers means we can always provide liquidity to our customers and keep our spreads lowest, especially during high volatility periods such as news announcements.",noTradingRestrictions:"No Trading Restrictions – Scalping Allowed",noTradingRestrictionsDescription:"BKS Markets MetaTrader 5 platform has no trading restrictions. We provide the best trading conditions for scalpers and high-frequency traders worldwide, allowing traders to place orders between spreads with no minimum order distance. This means that orders, including stop-loss orders, can be placed infinitely close to the market price.",noTradingRestrictionsAdditional:"Traders can also hedge because there is no first-in-first-out (FIFO) rule at BKS Markets. Traders do not need to pay margin for hedging positions and enjoy the benefits of margin equity.",level2Pricing:"Level 2 Pricing – Market Depth",level2PricingDescription:"Market depth shows all executable prices directly provided by liquidity providers. Market depth provides liquidity for each currency pair by showing available trading volume at each price level at any given time. High liquidity, exotic spot prices and low latency ensure the lowest possible spreads.",flexibleFundingTitle:"Flexible Deposit and Withdrawal Options",flexibleFundingDescription:"Once you open your account, you can deposit funds using any of the following methods: credit/debit cards, wire transfers, PayPal, virtual currency.",flexibleLotSizeTitle:"Flexible Lot Sizes",flexibleLotSizeDescription:"There are no restrictions on trading lot sizes. You can trade as small as 0.01 lots per trade with no maximum limit. Our flexible trading lot sizes allow you to trade on the platform with minimal risk and manage your trading size according to your account balance.",currencyPairs:"64 Currency Pairs and Precious Metals + 15 CFDs",currencyPairsDescription:"Trade 64 currency pairs plus 15 major stock indices including FTSE 100, S&P ASX 200 and Dow Jones.",leverageUpTo400Title:"Leverage up to 1:400",leverageUpTo400Description:"Accounts go up to 1:400 leverage on the BKS Markets MetaTrader 5 platforms. Traders can use higher leverage to suit their trading style and get the best out of their manual and automated trading strategies.",ctaStartTrading:"Start Trading",ctaTradeWithTrusted:"Trade with the World's Most Trusted",forexCfdBroker:"Forex CFD Broker"},withdrawal:{title:"Withdrawal",subtitle:"To speed up processing, all account holders are currently required to submit withdrawal requests from the client portal. If you don't have access to the client portal yet, please follow the access instructions.",ecnAccount:"ECN Account",standardAccount:"Standard Account",accountFunding:"Account Funding",withdrawal:"Withdrawal",fasterProcessing:"To speed up processing, all account holders are currently required to submit withdrawal requests from the client portal.",accessInstructions:"If you don't have access to the client portal yet, please follow the access instructions.",noteBeforeFirst:"If you haven't submitted a withdrawal request before, please note:",deadlineTitle:"Withdrawal Application Deadline",deadlineDescription:"The withdrawal application deadline is 12:00 AEST / AEDT. If your withdrawal application is submitted before this time, it will be processed on the same day. If your withdrawal application is submitted after this time, it will be processed on the next business day.",bankFeesTitle:"Bank Fees",bankFeesDescription:"BKS Markets does not charge additional deposit or withdrawal fees. However, please note that when you transfer to some international banking institutions, charges including intermediary bank fees may be incurred. BKS Markets is not responsible for any such bank fees.",wireTransferTitle:"International Bank Wire Transfer",wireTransferDescription:"International bank wire transfers may take up to 14 days to arrive, and intermediary and/or receiving banks may charge additional fees.",cardWithdrawalTitle:"Credit/Debit Card Withdrawal",cardWithdrawalDescription:"Credit/debit card withdrawals* will not incur any charges. Once processed, credit/debit card withdrawals may arrive within 3-5 business days. However, please note that in some special circumstances, it may take up to 10 business days to arrive, and the arrival time will vary depending on the bank. *Please note: Not all countries support credit card withdrawals.",excessWithdrawalTitle:"Excess Withdrawal",excessWithdrawalDescription:"If you wish to withdraw an amount exceeding the amount deposited via Visa/MasterCard secure credit/debit card, you will need to use another deposit method used previously or the bank wire transfer option.",paypalWithdrawalTitle:"PayPal Withdrawal",paypalWithdrawalDescription:"Withdrawals submitted via PayPal must be withdrawn using the same account used for deposits through the same method. All withdrawal methods are free and will arrive immediately after approval.",otherImportantInfo:"Other Important Information",additionalPoint1:"If your uploaded credit/debit card has expired, please upload a new card in your client portal to ensure continued use of deposit and withdrawal services. If the new card number is different from the expired card number, you need to submit a letter from the old card issuing bank confirming that a new card has been issued to replace the old card.",additionalPoint2:"If your uploaded credit/debit card has been lost/stolen/damaged/cancelled, you need to submit a letter from the old card issuing bank confirming that the old card is no longer valid.",additionalPoint3:"If the newly uploaded card has not been used for deposits before applying for withdrawal, a small amount needs to be deposited to activate the withdrawal function on this card.",additionalPoint4:"BKS Markets may, depending on the situation, require you to submit documents (such as deposit receipt certificates through the old card) before withdrawing to your new card.",additionalPoint5:"For amounts exceeding Visa/MasterCard credit/debit card deposits, you need to choose other deposit methods used previously or bank wire transfer options.",additionalPoint6:"BKS Markets does not accept third-party payments. Please ensure that the payer name matches the trading account holder name. For joint accounts/credit card holders, payments can be made to either party's trading account.",ctaStartTrading:"Start Trading",ctaTradeWithTrusted:"Trade with the World's Most Trusted",forexCfdBroker:"Forex CFD Broker"},tradingMarkets:{title:"Market Coverage",subtitle:"BKS Markets' carefully selected products give you access to the world's most popular and liquid markets, with 24/7 best trading opportunities.",markets:{forex:"Forex",indices:"Indices",commodities:"Commodities",stocks:"Stocks",bonds:"Bonds",crypto:"Cryptocurrency",futures:"Futures"},forexName:"Forex",forexDescription:"The forex market provides traders with the opportunity to trade 24 hours a day, 5 days a week in the world's most liquid financial market. Traders can take advantage of the smallest spreads among 61 currency pairs, excellent execution and deep interbank liquidity.",forexFeatures1:"61 Currency Pairs",forexFeatures2:"Spreads as low as 0.1",forexFeatures3:"Up to 1:400 leverage",forexFeatures4:"High liquidity",indicesName:"Indices",indicesDescription:"Participate in the world's largest stock market through global index CFDs provided by BKS Markets. 25 indices with spreads as low as 0.5 pips, allowing traders to take a more comprehensive view of the stock market while enjoying zero commission and cross-market 24-hour trading 5 days a week.",indicesFeatures1:"25 Global Indices Trading",indicesFeatures2:"Up to 200x Leverage",indicesFeatures3:"Low Fees",indicesFeatures4:"MT5",commoditiesName:"Commodities",commoditiesDescription:"Trade energy, agriculture and precious metal products the same way you trade currency pairs or futures denominated in US dollars as CFDs. We combine the best prices with flexible lot sizes of 0.1 points to provide you with a premium product.",commoditiesFeatures1:"22 Commodities Available for Trading",commoditiesFeatures2:"Energy, Agriculture and Metals",commoditiesFeatures3:"Spot and Futures CFDs",commoditiesFeatures4:"Up to 1:200 leverage",stocksName:"Stocks",stocksDescription:"Provides CFDs on more than 1,800 large-cap stocks and ETFs on the Australian Stock Exchange, New York Stock Exchange and NASDAQ. We have selected a series of the world's most popular companies and hottest ETFs to give you the best trading opportunities.",stocksFeatures1:"More than 1,800 stocks listed on ASX, NYSE and NASDAQ",stocksFeatures2:"Earn Dividends",stocksFeatures3:"MT5",bondsName:"Bonds",bondsDescription:"Bonds provide traders with opportunities to speculate on interest rates and global risk sentiment, hedge stock risk and diversify strategies. Choose from a range of bonds issued by governments around the world, including Japan, Europe, UK and US.",bondsFeatures1:"More than 9 Bonds Available for Trading",bondsFeatures2:"No Commission",bondsFeatures3:"Up to 200x Leverage",bondsFeatures4:"High Liquidity",cryptoName:"Cryptocurrency",cryptoDescription:"Go long or short on the world's largest and most popular cryptocurrencies. Trade 7*24 hours with other retail traders, where price volatility is mainly driven by fear and greed, news and general sentiment.",cryptoFeatures1:"21 Most Popular Cryptocurrencies",cryptoFeatures2:"Tradeable 7 Days a Week",cryptoFeatures3:"Long and Short",cryptoFeatures4:"MT5 1:5 Leverage",futuresName:"Futures",futuresDescription:"Futures are one of the most popular forms of CFDs. BKS Markets offers a range of futures from around the world, including the ICE Dollar Index and CBOE VIX Index. CFDs based on online futures are only available on BKS Markets' MT5 platform.",futuresFeatures1:"4 Global Futures Available for Trading",futuresFeatures2:"No Commission",futuresFeatures3:"Up to 200x Leverage",futuresFeatures4:"High Liquidity",viewOurSpreads:"View Our",spreads:"Spreads",details:"Details",market:"Market"},metatrader5:{title:"MetaTrader 5 Trading Platform",subtitle:"Experience our ultra-fast execution speeds and flexible trading conditions on the award-winning MetaTrader 5 platform.",platformLinks:{mtPc:"MT PC Version",mtiPhone:"MT iPhone/iPad",mtAndroid:"MT Android Version",mtMac:"MT Mac Version"},features1:"Market-leading spread environment and low trading fees",features2:"Leverage up to 1:400",features3:"Minimum lot size 0.01",features4:"Flexible deposit and withdrawal options",features5:"No trading restrictions",features6:"Lightning-fast order execution speed",metaTrader5:"Meta Trader 5",summary:"Summary",openAccount:"Open Account",description1:"BKS Markets offers clients the opportunity to trade on the award-winning MetaTrader 5 platform. Undoubtedly, because of its ease of use, MT5 has become the most popular trading platform among CFD traders, with a rich trading environment and automated trading capabilities.",description2:"It has grown from a trading platform into an international community, and traders' innovative needs are met through technological advancement. BKS Markets collaborates with numerous technology providers and is proud to offer you the next-generation MetaTrader 5 trading platform, a design that will further enhance your trading level.",description3:"BKS Markets offers Standard and ECN accounts on the MetaTrader 5 trading platform.",whyDifferentTitle:"Why is BKS Markets MetaTrader 5 Trading Platform So Different?",systemRequirements:"System Requirements",systemRequirementsDescription:"MetaTrader 5 client requires Windows 7 or higher. It may also be allowed to run on Apple Mac OSX systems.",ultraFastExecutionTitle:"Ultra-Fast Order Execution",ultraFastExecutionDescription:"BKS Markets MetaTrader 5 servers are located at the Equinix NY4 data center in New York. The NY4 data center is home to over 600 buy/sell trading companies, exchanges, trading venues, market data and service providers. MetaTrader 5 servers can be cross-connected to our ECN trading mode to ensure ultra-low trading latency and fast execution.",ultraFastExecutionAdditional:"The latency of BKS Markets' MetaTrader 5 servers can be reduced to less than 1 millisecond by contacting VPS providers located at the NY4 data center or through dedicated network links to nearby data centers.",noTradingRestrictionsTitle:"No Trading Restrictions",noTradingRestrictionsDescription:"BKS Markets' MetaTrader 5 trading platform has no trading restrictions. We can provide some of the best trading conditions for scalpers and high-frequency traders worldwide, conditions that will allow traders to place and execute closing orders between 0 spreads. This setting means that stop-loss prices can be close to market prices. This means that all orders, including stop-loss orders, can be executed at prices closest to market prices.",noTradingRestrictionsAdditional:"Traders can also use hedging strategies because there is no first-in-first-out (FIFO) principle at BKS Markets. Traders do not need to pay additional margin for hedging positions to enjoy the benefits of hedging.",spreadLowestTitle:"Lowest Spreads from 0.1 Pips",spreadLowestDescription:"BKS Markets has the most competitive spreads among global CFD brokers. The minimum spread on the MetaTrader 5 trading platform can reach 0.1 pips, and the average EUR/USD spread can reach 0.1 pips during normal trading days. This is currently the lowest average EUR/USD spread globally.",spreadLowestAdditional:"Our combination of up to 50 quote providers means the platform can always provide quotes to customers and maintain low spreads, especially during periods of high market volatility such as news announcements.",ctaStartTrading:"Start Trading",ctaTradeWithTrusted:"Trade with the World's Most Trusted",forexCfdBroker:"Forex CFD Broker"},mt5iPhone:{title:"MetaTrader for iPhone and iPad",subtitle:"Stay connected to the market at all times with the market-leading MetaTrader ECN account on iPhone or iPad.",platformLinks:{mtPc:"MT PC Version",mtiPhone:"MT iPhone/iPad",mtAndroid:"MT Android Version",mtMac:"MT Mac Version"},summaryTitle:"MetaTrader 5 for iPhone",summary:"Summary",features:["Lowest spreads from 0.1 pips","Ultra-fast order execution","Deep interbank liquidity","Access your trading account anytime, anywhere","MetaTrader 5"],openAccount:"Open Account",description1:"We provide MT5 for iPhone and iPad. These two trading platforms allow traders to access their accounts more conveniently.",description2:"The iPhone and iPad versions of MetaTrader trading software come with many new features, such as landscape/portrait view changes (a simple rotation device). The iPhone version of MetaTrader trading software also provides one-click trading functionality, which allows investors to choose their own layout and advanced chart analysis. Using the mobile version of MetaTrader software provides unlimited flexibility without affecting execution speed or quality.",tradeOnTitle:"Trade on iPhone or iPad!",systemRequirements:"System Requirements",systemRequirementsDescription:"iPhone iOS 7.0 or later. Compatible with iPhone and iPad.",characteristicsTitle:"Features",characteristics:["Real-time forex and CFD quotes","Complete set of trading orders, including market orders for direct trading on charts","Support for all types of execution modes","View complete trading history","Real-time interactive charts with zoom and scroll functions","More than 30 technical indicators","Multiple timeframes for analyzing market price trends","3 chart types available: bar chart, candlestick chart, line chart","Adjustable technical indicator settings"],advantagesTitle:"Advantages",advantages:["Simple user interface with trading level and volume displayed on icons","Offline mode (prices and chart symbols)","Free software available for direct download from the App Store","Direct trading on charts"],ctaTitle:"Start Trading",ctaSubtitle:"Install MetaTrader on iPhone Now",ctaAccount:"Open Account",ctaOpenAccount:"Open Account Now",ctaDemoAccount:"Open Demo Account",appDownloadTitle:"Access Global Markets with BKS Markets App"},mt5Android:{title:"MetaTrader for Android",subtitle:"Don't miss opportunities! Trade in the market anytime with the Android trading system.",platformLinks:{mtPc:"MT PC Version",mtiPhone:"MT iPhone/iPad",mtAndroid:"MT Android Version",mtMac:"MT Mac Version"},summaryTitle:"MetaTrader 5 for Android",summary:"Summary",features:["Lowest spreads from 0.1 pips","Ultra-fast order execution","Deep interbank market liquidity","Access your trading account from anywhere","MetaTrader 5"],openAccount:"Open Account",description1:"We provide MT5 for Android. These two trading platforms allow traders to access their accounts more conveniently.",description2:"BKS Markets' Android operating system provides you with unparalleled trading execution speed and competitive spreads. It features one-click trading and customizable layouts on multiple screens. You can also view complete trading history data and use advanced charting tools. Traders can manage their accounts, trade all products offered by the platform, and use more than 30 indicators for market analysis.",tradeOnTitle:"Trade on Android!",systemRequirements:"System Requirements",systemRequirementsDescription:"Android 4.0 or higher",characteristicsTitle:"Features",characteristics:["Real-time forex and CFD quotes","Complete set of trading orders, including market orders for direct trading on charts","Support for all types of execution modes","View complete trading history","Real-time interactive charts with zoom and scroll functions","More than 30 technical indicators","Multiple timeframes for analyzing market price trends","3 chart types available: bar chart, candlestick chart, line chart","Adjustable technical indicator settings"],advantagesTitle:"Advantages",advantages:["Simple user interface","Trading level and volume displayed on icons","Offline mode (prices and chart symbols)","Free software available for direct download from Google Play"],ctaTitle:"Start Trading",ctaSubtitle:"Open Account on Android MetaTrader",ctaAccount:"Open Account",ctaOpenAccount:"Open Account Now",ctaDemoAccount:"Open Demo Account",appDownloadTitle:"Access Global Markets with BKS Markets App"},mt5Mac:{title:"MetaTrader for Mac",subtitle:"Take advantage of the proprietary MetaTrader designed for Mac, leveraging BKS Markets' enterprise-grade network fiber connections.",platformLinks:{mtPc:"MT PC Version",mtiPhone:"MT iPhone/iPad",mtAndroid:"MT Android Version",mtMac:"MT Mac Version"},summaryTitle:"MetaTrader for Mac",summary:"Summary",features:["Lowest spreads from 0.1 pips","Ultra-fast order execution","Deep interbank liquidity","1:400 Leverage","MetaTrader 5"],openAccount:"Open Account",description:"BKS Markets has created a Mac OS version of MetaTrader 5 for Mac users. This system allows customers to use many MT5 functions without installing the system. Our Mac version application software can provide customers with the same functions as desktop users. Now Mac users can install and use EAs to obtain third-party software advantages and apply them to the trading platform.",tradeOnTitle:"Trade Directly on Your Mac with MetaTrader",systemRequirements:"System Requirements",systemRequirementsDescription:"Mac OS X 10.x or higher",characteristicsTitle:"Features",characteristics:["Real-time forex and CFD quotes","Full range of custom indicators","Complete set of trading orders, including market orders","All advantages come from MetaTrader 5 platform features","Run all automated trading software (EAs)","Advanced graphics tools and analytical functions"],advantagesTitle:"Advantages",advantages:["Simpler MetaTrader 5 user interface","Market-leading ECN","Unparalleled trading execution speed","No trading restrictions - scalping allowed","Trade forex, stocks, precious metals and CFDs"],installationTitle:"Installation",platformInstallationTitle:"Trading Platform Installation Guide",platformInstallationSteps:['Download the ".dmg" file and open it.',"After opening the file, drag the BKS Markets MetaTrader Mac version file to the Applications folder.","After dragging the file to the Applications folder, the software installer will automatically start and install the Mac version to your computer.","Log in to your real or demo account using your login credentials."],eaInstallationTitle:"Install Automated Trading Software (EAs)",eaInstallationSteps:["Download and save your automated trading software on your Mac. Remember the path where you downloaded it.",'Select "Start"',"Select Program",'Right-click "Show Package Contents"','Select "C Drive" then "Program Files" then "BKS Markets Trader" then select "experts"','Copy your "ex4" and "mq4" files to the automated trading directory',"Open BKS Markets Mac version installer, and you will see your automated trading software in the navigation menu."],indicatorsInstallationTitle:"Install Indicators",indicatorsInstallationSteps:["Download and save indicators to your Mac. Remember the path where you downloaded them.",'Select "Start"',"Select Program",'Right-click "Show Package Contents"','Select "C Drive" then "Program Files" then "BKS Markets Trader" then select "experts"','Copy your "ex4" and "mq4" files to the automated trading directory',"Open BKS Markets Mac version installer and you will see your indicators in the navigation menu."],ctaTitle:"Start Trading",ctaSubtitle:"Install MetaTrader on Mac Now",ctaAccount:"Open Account",ctaOpenAccount:"Open Account Now",ctaDemoAccount:"Open Demo Account",appDownloadTitle:"Access Global Markets with BKS Markets App"},tradingConditions:{title:"Trading Conditions",subtitle:"BKS Markets trading environment will provide you with the most advantageous quotes and most flexible trading conditions worldwide. These advantages will be the ideal choice for traders who need the best execution quality and lowest spreads."},indices:{title:"Indices",subtitle:"Trade an index composed of a basket of investment products with a single trade.<br>Trade the world's most popular indices on the BKS Markets trading platform."},tradingServers:{title:"Trading Servers",subtitle:"BKS Markets' MT5 trading servers are located at the NY4 Equinix data center in New York and the LD5 IBX Equinix data center in London, providing customers with the fastest execution speeds."},insurance:{title:"Client Funds Insurance up to US$1,000,000",subtitle:"We've got you covered"},regulation:{title:"Regulatory Bodies",subtitle:"BKS Markets is authorised and regulated by multiple Regulators across the globe. Trade with peace of mind knowing that  BKS Markets is monitored by some of the strictest financial regulators' bodies in the world."},helpCenter:{title:"Help Center",subtitle:"Help Center – Find the answers you need using our comprehensive knowledge base, or contact our 24-hour online customer service directly"},advantagesOfCfds:{title:"Advantages of CFDs",subtitle:"BKS Markets offers flexible trading conditions on a range of CFDs including indices, energy, metals and commodities."},forexGlossary:{title:"Forex Glossary",subtitle:""},careers:{title:"Careers",subtitle:"At BKS Markets, we are always looking for the best talent to further deepen and expand global markets."},futures:{title:"Futures",subtitle:"Futures are one of the most popular forms of CFDs. BKS Markets offers a range of futures products from around the world, including the ICE Dollar Index and CBOE VIX Index. Trade CFDs based on online futures on BKS Markets' MT5 platform."},stocks:{title:"Stocks",subtitle:"Trade CFDs on more than 1,800 large-cap stocks and ETFs on ASX, NYSE and NASDAQ exchanges with strong execution and strict pricing, only on BKS Markets MetaTrader 5 platform."},forexTrading:{title:"CFD Trading",subtitle:"BKS Markets' carefully selected products, platforms and account types allow you to experience the world's most popular and liquid markets for 24/5 best trading opportunities"},legal:{title:"Legal Documents",subtitle:"You can find all you need to know about our legal agreements and terms and conditions here."},advantagesOfForex:{title:"Advantages of Forex",subtitle:"The forex market is the world's largest financial market, open for trading 24 hours a day, 5 days a week. You can trade CFDs anytime."},vps:{title:"Virtual Private Server",subtitle:"VPS virtual servers allow traders to achieve 7-day, 24-hour uninterrupted trading and get the fastest connection speed with BKS Markets trading servers."},spreads:{title:"Spreads",subtitle:"BKS Markets has very low spreads, making it easier for you to trade in the market."},commodities:{title:"Commodities",subtitle:"Trade the world's most popular commodities, including energy, agriculture and metals. BKS Markets combines the best prices and flexible trading environment to provide you with an optimal product."},tradingHours:{title:"Trading Hours",subtitle:"At BKS Markets, you always have markets available for trading. We can provide you with 7-day, 24-hour service."},cryptocurrency:{title:"Cryptocurrency CFDs",subtitle:"Cryptocurrency is a highly volatile, unregulated, decentralized currency that is almost exclusively held by retail speculators. Trade the world's newest and most exciting CFD assets with an FSA-regulated broker."},swapRates:{title:"Swap Rates",subtitle:"BKS Markets swap rates are among the most competitive in the world. Maximize your swap income or reduce the cost of swaps on our products."},bonds:{title:"Bonds",subtitle:"Trade the world's most popular fixed-income securities including the US, UK, Europe and Japan on MT5, with strong execution and strict pricing."},why:{title:"Globally Popular Broker",subtitle:"By providing traders with what they really want, BKS Markets has grown into a globally popular broker.",spread:"Spreads",simpleQuotes:"Simple Quotes",cfdTrading:"CFD Trading",joinUsDescription:"Join us and enjoy CFD trading with the lowest spreads and full support from our top customer service team.",lowerSpreadsTitle:"Lower Spreads",lowerSpreadsDescription:"We continuously add more liquidity providers to our existing trading environment so that our traders can enjoy the best CFD trading conditions globally. Excellent trading environment brings customers the best trading experience.",fastExecutionTitle:"Fast Execution",fastExecutionDescription:"BKS Markets has its own enterprise-grade hardware support on trading servers at NY4 and LD5 data centers in New York and London respectively. Data centers are also where our quote providers host their servers. Dedicated fiber cross-connections to our network ensure the lowest latency and fastest trading execution for our customers.",advancedTechTitle:"Advanced Technology",advancedTechDescription:"BKS Markets has partnered with the world's best trading technology companies to provide you with an unparalleled trading environment and cutting-edge trading tools, including market (DOM) depth, internal market spread monitoring; ladder trading technology; automatic position closing using customer custom templates, etc. Our iPhone and Android mobile trading applications have been optimized to provide you with the best mobile trading experience.",ultimateSupportTitle:"Ultimate Trading Support",ultimateSupportDescription:"BKS Markets has been created with traders in mind. Scalping, hedging, and automated trading are all allowed. Our ECN Account spreads start from 0.01pips. We have flexible leverage options offering up to 1:400, and accept deposits in 10 major currencies.",flexibleVolumeTitle:"Flexible Trading Volume",flexibleVolumeDescription:"Customers can execute trades ranging from 0.01 lots (1,000 base currency) to 250 lots (25 million base currency) through our trading environment. Our technology sorts and ranks prices to allow real-time execution on multiple quote providers and their quote layers, ensuring the best price for any trade size.",unparalleledServiceTitle:"Unparalleled Customer Service",unparalleledServiceDescription:"BKS Markets is committed to providing customers with unparalleled customer service and support. Our team has distinguished experience in the forex industry, so they understand the needs of CFD traders. So you can trade with confidence at BKS Markets, because we are with you 24 hours a day, 7 days a week.",advancedToolsTitle:"Advanced Trading Tools",advancedToolsDescription:"Our plugins on MetaTrader, such as one-click trading modules, market depth, spread monitoring, trading risk calculation, advanced order types and other features that were not available on MT5 in the past, will provide traders with a better trading experience.",excellentPlatformTitle:"Excellent Trading Platform",excellentPlatformDescription:"MetaTrader 5 is one of the best platforms in the world today. BKS Markets connects directly to quotes from major banks through MT5, providing customers with a better trading environment.",trustTransparencyTitle:"Trust and Transparency",trustTransparencyDescription:"Trust and transparency are the core values of BKS Markets. BKS Markets, as a CFD broker, promises that there will be no artificial interference with quotes, price manipulation or trading restrictions.",contactUs:"Contact Us",helpCentre:"Help Centre",emailUs:"Email Us"}},W0={header:$0,hero:z0,common:H0,components:V0,pages:G0};je.use(Eu).use(cx).init({resources:{"zh-CN":{translation:K0},en:{translation:W0}},fallbackLng:"zh-CN",lng:"zh-CN",interpolation:{escapeValue:!1}});Qn.createRoot(document.getElementById("root")).render(n.jsx(Wu.StrictMode,{children:n.jsx(y0,{})}));
