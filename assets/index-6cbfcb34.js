(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();function jm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $d={exports:{}},_l={},Gd={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ms=Symbol.for("react.element"),Cm=Symbol.for("react.portal"),_m=Symbol.for("react.fragment"),Em=Symbol.for("react.strict_mode"),Mm=Symbol.for("react.profiler"),Dm=Symbol.for("react.provider"),Tm=Symbol.for("react.context"),Fm=Symbol.for("react.forward_ref"),Pm=Symbol.for("react.suspense"),Am=Symbol.for("react.memo"),Bm=Symbol.for("react.lazy"),yn=Symbol.iterator;function Um(e){return e===null||typeof e!="object"?null:(e=yn&&e[yn]||e["@@iterator"],typeof e=="function"?e:null)}var Hd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vd=Object.assign,Wd={};function xa(e,t,a){this.props=e,this.context=t,this.refs=Wd,this.updater=a||Hd}xa.prototype.isReactComponent={};xa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yd(){}Yd.prototype=xa.prototype;function bi(e,t,a){this.props=e,this.context=t,this.refs=Wd,this.updater=a||Hd}var yi=bi.prototype=new Yd;yi.constructor=bi;Vd(yi,xa.prototype);yi.isPureReactComponent=!0;var wn=Array.isArray,Xd=Object.prototype.hasOwnProperty,wi={current:null},Jd={key:!0,ref:!0,__self:!0,__source:!0};function Qd(e,t,a){var s,r={},i=null,n=null;if(t!=null)for(s in t.ref!==void 0&&(n=t.ref),t.key!==void 0&&(i=""+t.key),t)Xd.call(t,s)&&!Jd.hasOwnProperty(s)&&(r[s]=t[s]);var d=arguments.length-2;if(d===1)r.children=a;else if(1<d){for(var o=Array(d),c=0;c<d;c++)o[c]=arguments[c+2];r.children=o}if(e&&e.defaultProps)for(s in d=e.defaultProps,d)r[s]===void 0&&(r[s]=d[s]);return{$$typeof:ms,type:e,key:i,ref:n,props:r,_owner:wi.current}}function Im(e,t){return{$$typeof:ms,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ki(e){return typeof e=="object"&&e!==null&&e.$$typeof===ms}function Rm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var kn=/\/+/g;function Xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rm(""+e.key):t.toString(36)}function zs(e,t,a,s,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var n=!1;if(e===null)n=!0;else switch(i){case"string":case"number":n=!0;break;case"object":switch(e.$$typeof){case ms:case Cm:n=!0}}if(n)return n=e,r=r(n),e=s===""?"."+Xl(n,0):s,wn(r)?(a="",e!=null&&(a=e.replace(kn,"$&/")+"/"),zs(r,t,a,"",function(c){return c})):r!=null&&(ki(r)&&(r=Im(r,a+(!r.key||n&&n.key===r.key?"":(""+r.key).replace(kn,"$&/")+"/")+e)),t.push(r)),1;if(n=0,s=s===""?".":s+":",wn(e))for(var d=0;d<e.length;d++){i=e[d];var o=s+Xl(i,d);n+=zs(i,t,a,o,r)}else if(o=Um(e),typeof o=="function")for(e=o.call(e),d=0;!(i=e.next()).done;)i=i.value,o=s+Xl(i,d++),n+=zs(i,t,a,o,r);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return n}function Ss(e,t,a){if(e==null)return e;var s=[],r=0;return zs(e,s,"","",function(i){return t.call(a,i,r++)}),s}function Lm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},$s={transition:null},Om={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:$s,ReactCurrentOwner:wi};function qd(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Ss,forEach:function(e,t,a){Ss(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Ss(e,function(){t++}),t},toArray:function(e){return Ss(e,function(t){return t})||[]},only:function(e){if(!ki(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=xa;A.Fragment=_m;A.Profiler=Mm;A.PureComponent=bi;A.StrictMode=Em;A.Suspense=Pm;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Om;A.act=qd;A.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Vd({},e.props),r=e.key,i=e.ref,n=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,n=wi.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(o in t)Xd.call(t,o)&&!Jd.hasOwnProperty(o)&&(s[o]=t[o]===void 0&&d!==void 0?d[o]:t[o])}var o=arguments.length-2;if(o===1)s.children=a;else if(1<o){d=Array(o);for(var c=0;c<o;c++)d[c]=arguments[c+2];s.children=d}return{$$typeof:ms,type:e.type,key:r,ref:i,props:s,_owner:n}};A.createContext=function(e){return e={$$typeof:Tm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Dm,_context:e},e.Consumer=e};A.createElement=Qd;A.createFactory=function(e){var t=Qd.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Fm,render:e}};A.isValidElement=ki;A.lazy=function(e){return{$$typeof:Bm,_payload:{_status:-1,_result:e},_init:Lm}};A.memo=function(e,t){return{$$typeof:Am,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=$s.transition;$s.transition={};try{e()}finally{$s.transition=t}};A.unstable_act=qd;A.useCallback=function(e,t){return pe.current.useCallback(e,t)};A.useContext=function(e){return pe.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};A.useEffect=function(e,t){return pe.current.useEffect(e,t)};A.useId=function(){return pe.current.useId()};A.useImperativeHandle=function(e,t,a){return pe.current.useImperativeHandle(e,t,a)};A.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return pe.current.useMemo(e,t)};A.useReducer=function(e,t,a){return pe.current.useReducer(e,t,a)};A.useRef=function(e){return pe.current.useRef(e)};A.useState=function(e){return pe.current.useState(e)};A.useSyncExternalStore=function(e,t,a){return pe.current.useSyncExternalStore(e,t,a)};A.useTransition=function(){return pe.current.useTransition()};A.version="18.3.1";Gd.exports=A;var g=Gd.exports;const Km=jm(g);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm=g,$m=Symbol.for("react.element"),Gm=Symbol.for("react.fragment"),Hm=Object.prototype.hasOwnProperty,Vm=zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wm={key:!0,ref:!0,__self:!0,__source:!0};function Zd(e,t,a){var s,r={},i=null,n=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(n=t.ref);for(s in t)Hm.call(t,s)&&!Wm.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)r[s]===void 0&&(r[s]=t[s]);return{$$typeof:$m,type:e,key:i,ref:n,props:r,_owner:Vm.current}}_l.Fragment=Gm;_l.jsx=Zd;_l.jsxs=Zd;$d.exports=_l;var l=$d.exports,kr={},eo={exports:{}},je={},to={exports:{}},ao={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,T){var F=C.length;C.push(T);e:for(;0<F;){var J=F-1>>>1,te=C[J];if(0<r(te,T))C[J]=T,C[F]=te,F=J;else break e}}function a(C){return C.length===0?null:C[0]}function s(C){if(C.length===0)return null;var T=C[0],F=C.pop();if(F!==T){C[0]=F;e:for(var J=0,te=C.length,ws=te>>>1;J<ws;){var Et=2*(J+1)-1,Yl=C[Et],Mt=Et+1,ks=C[Mt];if(0>r(Yl,F))Mt<te&&0>r(ks,Yl)?(C[J]=ks,C[Mt]=F,J=Mt):(C[J]=Yl,C[Et]=F,J=Et);else if(Mt<te&&0>r(ks,F))C[J]=ks,C[Mt]=F,J=Mt;else break e}}return T}function r(C,T){var F=C.sortIndex-T.sortIndex;return F!==0?F:C.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var n=Date,d=n.now();e.unstable_now=function(){return n.now()-d}}var o=[],c=[],h=1,v=null,f=3,x=!1,N=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(C){for(var T=a(c);T!==null;){if(T.callback===null)s(c);else if(T.startTime<=C)s(c),T.sortIndex=T.expirationTime,t(o,T);else break;T=a(c)}}function b(C){if(y=!1,u(C),!N)if(a(o)!==null)N=!0,Vl(k);else{var T=a(c);T!==null&&Wl(b,T.startTime-C)}}function k(C,T){N=!1,y&&(y=!1,p(M),M=-1),x=!0;var F=f;try{for(u(T),v=a(o);v!==null&&(!(v.expirationTime>T)||C&&!ve());){var J=v.callback;if(typeof J=="function"){v.callback=null,f=v.priorityLevel;var te=J(v.expirationTime<=T);T=e.unstable_now(),typeof te=="function"?v.callback=te:v===a(o)&&s(o),u(T)}else s(o);v=a(o)}if(v!==null)var ws=!0;else{var Et=a(c);Et!==null&&Wl(b,Et.startTime-T),ws=!1}return ws}finally{v=null,f=F,x=!1}}var E=!1,_=null,M=-1,R=5,D=-1;function ve(){return!(e.unstable_now()-D<R)}function wa(){if(_!==null){var C=e.unstable_now();D=C;var T=!0;try{T=_(!0,C)}finally{T?ka():(E=!1,_=null)}}else E=!1}var ka;if(typeof m=="function")ka=function(){m(wa)};else if(typeof MessageChannel<"u"){var bn=new MessageChannel,Sm=bn.port2;bn.port1.onmessage=wa,ka=function(){Sm.postMessage(null)}}else ka=function(){S(wa,0)};function Vl(C){_=C,E||(E=!0,ka())}function Wl(C,T){M=S(function(){C(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){N||x||(N=!0,Vl(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return a(o)},e.unstable_next=function(C){switch(f){case 1:case 2:case 3:var T=3;break;default:T=f}var F=f;f=T;try{return C()}finally{f=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,T){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var F=f;f=C;try{return T()}finally{f=F}},e.unstable_scheduleCallback=function(C,T,F){var J=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?J+F:J):F=J,C){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=F+te,C={id:h++,callback:T,priorityLevel:C,startTime:F,expirationTime:te,sortIndex:-1},F>J?(C.sortIndex=F,t(c,C),a(o)===null&&C===a(c)&&(y?(p(M),M=-1):y=!0,Wl(b,F-J))):(C.sortIndex=te,t(o,C),N||x||(N=!0,Vl(k))),C},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(C){var T=f;return function(){var F=f;f=T;try{return C.apply(this,arguments)}finally{f=F}}}})(ao);to.exports=ao;var Ym=to.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm=g,Se=Ym;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var so=new Set,Va={};function zt(e,t){ca(e,t),ca(e+"Capture",t)}function ca(e,t){for(Va[e]=t,e=0;e<t.length;e++)so.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sr=Object.prototype.hasOwnProperty,Jm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sn={},jn={};function Qm(e){return Sr.call(jn,e)?!0:Sr.call(Sn,e)?!1:Jm.test(e)?jn[e]=!0:(Sn[e]=!0,!1)}function qm(e,t,a,s){if(a!==null&&a.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zm(e,t,a,s){if(t===null||typeof t>"u"||qm(e,t,a,s))return!0;if(s)return!1;if(a!==null)switch(a.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,a,s,r,i,n){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=r,this.mustUseProperty=a,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=n}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Si=/[\-:]([a-z])/g;function ji(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Si,ji);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Si,ji);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Si,ji);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ci(e,t,a,s){var r=ie.hasOwnProperty(t)?ie[t]:null;(r!==null?r.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zm(t,a,r,s)&&(a=null),s||r===null?Qm(t)&&(a===null?e.removeAttribute(t):e.setAttribute(t,""+a)):r.mustUseProperty?e[r.propertyName]=a===null?r.type===3?!1:"":a:(t=r.attributeName,s=r.attributeNamespace,a===null?e.removeAttribute(t):(r=r.type,a=r===3||r===4&&a===!0?"":""+a,s?e.setAttributeNS(s,t,a):e.setAttribute(t,a))))}var it=Xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,js=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),_i=Symbol.for("react.strict_mode"),jr=Symbol.for("react.profiler"),lo=Symbol.for("react.provider"),ro=Symbol.for("react.context"),Ei=Symbol.for("react.forward_ref"),Cr=Symbol.for("react.suspense"),_r=Symbol.for("react.suspense_list"),Mi=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),io=Symbol.for("react.offscreen"),Cn=Symbol.iterator;function Sa(e){return e===null||typeof e!="object"?null:(e=Cn&&e[Cn]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Jl;function Pa(e){if(Jl===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Jl=t&&t[1]||""}return`
`+Jl+e}var Ql=!1;function ql(e,t){if(!e||Ql)return"";Ql=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var s=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){s=c}e.call(t.prototype)}else{try{throw Error()}catch(c){s=c}e()}}catch(c){if(c&&s&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=s.stack.split(`
`),n=r.length-1,d=i.length-1;1<=n&&0<=d&&r[n]!==i[d];)d--;for(;1<=n&&0<=d;n--,d--)if(r[n]!==i[d]){if(n!==1||d!==1)do if(n--,d--,0>d||r[n]!==i[d]){var o=`
`+r[n].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=n&&0<=d);break}}}finally{Ql=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?Pa(e):""}function eu(e){switch(e.tag){case 5:return Pa(e.type);case 16:return Pa("Lazy");case 13:return Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 2:case 15:return e=ql(e.type,!1),e;case 11:return e=ql(e.type.render,!1),e;case 1:return e=ql(e.type,!0),e;default:return""}}function Er(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case Vt:return"Portal";case jr:return"Profiler";case _i:return"StrictMode";case Cr:return"Suspense";case _r:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ro:return(e.displayName||"Context")+".Consumer";case lo:return(e._context.displayName||"Context")+".Provider";case Ei:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Mi:return t=e.displayName||null,t!==null?t:Er(e.type)||"Memo";case ot:t=e._payload,e=e._init;try{return Er(e(t))}catch{}}return null}function tu(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Er(t);case 8:return t===_i?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function no(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function au(e){var t=no(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(n){s=""+n,i.call(this,n)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(n){s=""+n},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cs(e){e._valueTracker||(e._valueTracker=au(e))}function oo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),s="";return e&&(s=no(e)?e.checked?"true":"false":e.value),e=s,e!==a?(t.setValue(e),!0):!1}function al(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mr(e,t){var a=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function _n(e,t){var a=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;a=kt(t.value!=null?t.value:a),e._wrapperState={initialChecked:s,initialValue:a,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function co(e,t){t=t.checked,t!=null&&Ci(e,"checked",t,!1)}function Dr(e,t){co(e,t);var a=kt(t.value),s=t.type;if(a!=null)s==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tr(e,t.type,a):t.hasOwnProperty("defaultValue")&&Tr(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function En(e,t,a){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,a||t===e.value||(e.value=t),e.defaultValue=t}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function Tr(e,t,a){(t!=="number"||al(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var Aa=Array.isArray;function la(e,t,a,s){if(e=e.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=t.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&s&&(e[a].defaultSelected=!0)}else{for(a=""+kt(a),t=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,s&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Fr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mn(e,t){var a=t.value;if(a==null){if(a=t.children,t=t.defaultValue,a!=null){if(t!=null)throw Error(w(92));if(Aa(a)){if(1<a.length)throw Error(w(93));a=a[0]}t=a}t==null&&(t=""),a=t}e._wrapperState={initialValue:kt(a)}}function mo(e,t){var a=kt(t.value),s=kt(t.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),t.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),s!=null&&(e.defaultValue=""+s)}function Dn(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _s,po=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,a,s,r){MSApp.execUnsafeLocalFunction(function(){return e(t,a,s,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_s=_s||document.createElement("div"),_s.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_s.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},su=["Webkit","ms","Moz","O"];Object.keys(Ia).forEach(function(e){su.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ia[t]=Ia[e]})});function ho(e,t,a){return t==null||typeof t=="boolean"||t===""?"":a||typeof t!="number"||t===0||Ia.hasOwnProperty(e)&&Ia[e]?(""+t).trim():t+"px"}function vo(e,t){e=e.style;for(var a in t)if(t.hasOwnProperty(a)){var s=a.indexOf("--")===0,r=ho(a,t[a],s);a==="float"&&(a="cssFloat"),s?e.setProperty(a,r):e[a]=r}}var lu=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ar(e,t){if(t){if(lu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Br(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ur=null;function Di(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ir=null,ra=null,ia=null;function Tn(e){if(e=hs(e)){if(typeof Ir!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Fl(t),Ir(e.stateNode,e.type,t))}}function fo(e){ra?ia?ia.push(e):ia=[e]:ra=e}function xo(){if(ra){var e=ra,t=ia;if(ia=ra=null,Tn(e),t)for(e=0;e<t.length;e++)Tn(t[e])}}function go(e,t){return e(t)}function No(){}var Zl=!1;function bo(e,t,a){if(Zl)return e(t,a);Zl=!0;try{return go(e,t,a)}finally{Zl=!1,(ra!==null||ia!==null)&&(No(),xo())}}function Ya(e,t){var a=e.stateNode;if(a===null)return null;var s=Fl(a);if(s===null)return null;a=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(w(231,t,typeof a));return a}var Rr=!1;if(tt)try{var ja={};Object.defineProperty(ja,"passive",{get:function(){Rr=!0}}),window.addEventListener("test",ja,ja),window.removeEventListener("test",ja,ja)}catch{Rr=!1}function ru(e,t,a,s,r,i,n,d,o){var c=Array.prototype.slice.call(arguments,3);try{t.apply(a,c)}catch(h){this.onError(h)}}var Ra=!1,sl=null,ll=!1,Lr=null,iu={onError:function(e){Ra=!0,sl=e}};function nu(e,t,a,s,r,i,n,d,o){Ra=!1,sl=null,ru.apply(iu,arguments)}function du(e,t,a,s,r,i,n,d,o){if(nu.apply(this,arguments),Ra){if(Ra){var c=sl;Ra=!1,sl=null}else throw Error(w(198));ll||(ll=!0,Lr=c)}}function $t(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function yo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fn(e){if($t(e)!==e)throw Error(w(188))}function ou(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(w(188));return t!==e?null:e}for(var a=e,s=t;;){var r=a.return;if(r===null)break;var i=r.alternate;if(i===null){if(s=r.return,s!==null){a=s;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===a)return Fn(r),e;if(i===s)return Fn(r),t;i=i.sibling}throw Error(w(188))}if(a.return!==s.return)a=r,s=i;else{for(var n=!1,d=r.child;d;){if(d===a){n=!0,a=r,s=i;break}if(d===s){n=!0,s=r,a=i;break}d=d.sibling}if(!n){for(d=i.child;d;){if(d===a){n=!0,a=i,s=r;break}if(d===s){n=!0,s=i,a=r;break}d=d.sibling}if(!n)throw Error(w(189))}}if(a.alternate!==s)throw Error(w(190))}if(a.tag!==3)throw Error(w(188));return a.stateNode.current===a?e:t}function wo(e){return e=ou(e),e!==null?ko(e):null}function ko(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ko(e);if(t!==null)return t;e=e.sibling}return null}var So=Se.unstable_scheduleCallback,Pn=Se.unstable_cancelCallback,cu=Se.unstable_shouldYield,mu=Se.unstable_requestPaint,Q=Se.unstable_now,uu=Se.unstable_getCurrentPriorityLevel,Ti=Se.unstable_ImmediatePriority,jo=Se.unstable_UserBlockingPriority,rl=Se.unstable_NormalPriority,pu=Se.unstable_LowPriority,Co=Se.unstable_IdlePriority,El=null,He=null;function hu(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(El,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:xu,vu=Math.log,fu=Math.LN2;function xu(e){return e>>>=0,e===0?32:31-(vu(e)/fu|0)|0}var Es=64,Ms=4194304;function Ba(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function il(e,t){var a=e.pendingLanes;if(a===0)return 0;var s=0,r=e.suspendedLanes,i=e.pingedLanes,n=a&268435455;if(n!==0){var d=n&~r;d!==0?s=Ba(d):(i&=n,i!==0&&(s=Ba(i)))}else n=a&~r,n!==0?s=Ba(n):i!==0&&(s=Ba(i));if(s===0)return 0;if(t!==0&&t!==s&&!(t&r)&&(r=s&-s,i=t&-t,r>=i||r===16&&(i&4194240)!==0))return t;if(s&4&&(s|=a&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)a=31-Ie(t),r=1<<a,s|=e[a],t&=~r;return s}function gu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nu(e,t){for(var a=e.suspendedLanes,s=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var n=31-Ie(i),d=1<<n,o=r[n];o===-1?(!(d&a)||d&s)&&(r[n]=gu(d,t)):o<=t&&(e.expiredLanes|=d),i&=~d}}function Or(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _o(){var e=Es;return Es<<=1,!(Es&4194240)&&(Es=64),e}function er(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function us(e,t,a){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=a}function bu(e,t){var a=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<a;){var r=31-Ie(a),i=1<<r;t[r]=0,s[r]=-1,e[r]=-1,a&=~i}}function Fi(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var s=31-Ie(a),r=1<<s;r&t|e[s]&t&&(e[s]|=t),a&=~r}}var O=0;function Eo(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mo,Pi,Do,To,Fo,Kr=!1,Ds=[],vt=null,ft=null,xt=null,Xa=new Map,Ja=new Map,mt=[],yu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function An(e,t){switch(e){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Xa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ja.delete(t.pointerId)}}function Ca(e,t,a,s,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:s,nativeEvent:i,targetContainers:[r]},t!==null&&(t=hs(t),t!==null&&Pi(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function wu(e,t,a,s,r){switch(t){case"focusin":return vt=Ca(vt,e,t,a,s,r),!0;case"dragenter":return ft=Ca(ft,e,t,a,s,r),!0;case"mouseover":return xt=Ca(xt,e,t,a,s,r),!0;case"pointerover":var i=r.pointerId;return Xa.set(i,Ca(Xa.get(i)||null,e,t,a,s,r)),!0;case"gotpointercapture":return i=r.pointerId,Ja.set(i,Ca(Ja.get(i)||null,e,t,a,s,r)),!0}return!1}function Po(e){var t=Ft(e.target);if(t!==null){var a=$t(t);if(a!==null){if(t=a.tag,t===13){if(t=yo(a),t!==null){e.blockedOn=t,Fo(e.priority,function(){Do(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=zr(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Ur=s,a.target.dispatchEvent(s),Ur=null}else return t=hs(a),t!==null&&Pi(t),e.blockedOn=a,!1;t.shift()}return!0}function Bn(e,t,a){Gs(e)&&a.delete(t)}function ku(){Kr=!1,vt!==null&&Gs(vt)&&(vt=null),ft!==null&&Gs(ft)&&(ft=null),xt!==null&&Gs(xt)&&(xt=null),Xa.forEach(Bn),Ja.forEach(Bn)}function _a(e,t){e.blockedOn===t&&(e.blockedOn=null,Kr||(Kr=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,ku)))}function Qa(e){function t(r){return _a(r,e)}if(0<Ds.length){_a(Ds[0],e);for(var a=1;a<Ds.length;a++){var s=Ds[a];s.blockedOn===e&&(s.blockedOn=null)}}for(vt!==null&&_a(vt,e),ft!==null&&_a(ft,e),xt!==null&&_a(xt,e),Xa.forEach(t),Ja.forEach(t),a=0;a<mt.length;a++)s=mt[a],s.blockedOn===e&&(s.blockedOn=null);for(;0<mt.length&&(a=mt[0],a.blockedOn===null);)Po(a),a.blockedOn===null&&mt.shift()}var na=it.ReactCurrentBatchConfig,nl=!0;function Su(e,t,a,s){var r=O,i=na.transition;na.transition=null;try{O=1,Ai(e,t,a,s)}finally{O=r,na.transition=i}}function ju(e,t,a,s){var r=O,i=na.transition;na.transition=null;try{O=4,Ai(e,t,a,s)}finally{O=r,na.transition=i}}function Ai(e,t,a,s){if(nl){var r=zr(e,t,a,s);if(r===null)cr(e,t,s,dl,a),An(e,s);else if(wu(r,e,t,a,s))s.stopPropagation();else if(An(e,s),t&4&&-1<yu.indexOf(e)){for(;r!==null;){var i=hs(r);if(i!==null&&Mo(i),i=zr(e,t,a,s),i===null&&cr(e,t,s,dl,a),i===r)break;r=i}r!==null&&s.stopPropagation()}else cr(e,t,s,null,a)}}var dl=null;function zr(e,t,a,s){if(dl=null,e=Di(s),e=Ft(e),e!==null)if(t=$t(e),t===null)e=null;else if(a=t.tag,a===13){if(e=yo(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return dl=e,null}function Ao(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uu()){case Ti:return 1;case jo:return 4;case rl:case pu:return 16;case Co:return 536870912;default:return 16}default:return 16}}var pt=null,Bi=null,Hs=null;function Bo(){if(Hs)return Hs;var e,t=Bi,a=t.length,s,r="value"in pt?pt.value:pt.textContent,i=r.length;for(e=0;e<a&&t[e]===r[e];e++);var n=a-e;for(s=1;s<=n&&t[a-s]===r[i-s];s++);return Hs=r.slice(e,1<s?1-s:void 0)}function Vs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ts(){return!0}function Un(){return!1}function Ce(e){function t(a,s,r,i,n){this._reactName=a,this._targetInst=r,this.type=s,this.nativeEvent=i,this.target=n,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ts:Un,this.isPropagationStopped=Un,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ts)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ts)},persist:function(){},isPersistent:Ts}),t}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ui=Ce(ga),ps=Y({},ga,{view:0,detail:0}),Cu=Ce(ps),tr,ar,Ea,Ml=Y({},ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ii,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ea&&(Ea&&e.type==="mousemove"?(tr=e.screenX-Ea.screenX,ar=e.screenY-Ea.screenY):ar=tr=0,Ea=e),tr)},movementY:function(e){return"movementY"in e?e.movementY:ar}}),In=Ce(Ml),_u=Y({},Ml,{dataTransfer:0}),Eu=Ce(_u),Mu=Y({},ps,{relatedTarget:0}),sr=Ce(Mu),Du=Y({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Tu=Ce(Du),Fu=Y({},ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pu=Ce(Fu),Au=Y({},ga,{data:0}),Rn=Ce(Au),Bu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ru(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Iu[e])?!!t[e]:!1}function Ii(){return Ru}var Lu=Y({},ps,{key:function(e){if(e.key){var t=Bu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ii,charCode:function(e){return e.type==="keypress"?Vs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ou=Ce(Lu),Ku=Y({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ln=Ce(Ku),zu=Y({},ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ii}),$u=Ce(zu),Gu=Y({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hu=Ce(Gu),Vu=Y({},Ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wu=Ce(Vu),Yu=[9,13,27,32],Ri=tt&&"CompositionEvent"in window,La=null;tt&&"documentMode"in document&&(La=document.documentMode);var Xu=tt&&"TextEvent"in window&&!La,Uo=tt&&(!Ri||La&&8<La&&11>=La),On=String.fromCharCode(32),Kn=!1;function Io(e,t){switch(e){case"keyup":return Yu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ro(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yt=!1;function Ju(e,t){switch(e){case"compositionend":return Ro(t);case"keypress":return t.which!==32?null:(Kn=!0,On);case"textInput":return e=t.data,e===On&&Kn?null:e;default:return null}}function Qu(e,t){if(Yt)return e==="compositionend"||!Ri&&Io(e,t)?(e=Bo(),Hs=Bi=pt=null,Yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uo&&t.locale!=="ko"?null:t.data;default:return null}}var qu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qu[e.type]:t==="textarea"}function Lo(e,t,a,s){fo(s),t=ol(t,"onChange"),0<t.length&&(a=new Ui("onChange","change",null,a,s),e.push({event:a,listeners:t}))}var Oa=null,qa=null;function Zu(e){Jo(e,0)}function Dl(e){var t=Qt(e);if(oo(t))return e}function ep(e,t){if(e==="change")return t}var Oo=!1;if(tt){var lr;if(tt){var rr="oninput"in document;if(!rr){var $n=document.createElement("div");$n.setAttribute("oninput","return;"),rr=typeof $n.oninput=="function"}lr=rr}else lr=!1;Oo=lr&&(!document.documentMode||9<document.documentMode)}function Gn(){Oa&&(Oa.detachEvent("onpropertychange",Ko),qa=Oa=null)}function Ko(e){if(e.propertyName==="value"&&Dl(qa)){var t=[];Lo(t,qa,e,Di(e)),bo(Zu,t)}}function tp(e,t,a){e==="focusin"?(Gn(),Oa=t,qa=a,Oa.attachEvent("onpropertychange",Ko)):e==="focusout"&&Gn()}function ap(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dl(qa)}function sp(e,t){if(e==="click")return Dl(t)}function lp(e,t){if(e==="input"||e==="change")return Dl(t)}function rp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Le=typeof Object.is=="function"?Object.is:rp;function Za(e,t){if(Le(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var r=a[s];if(!Sr.call(t,r)||!Le(e[r],t[r]))return!1}return!0}function Hn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vn(e,t){var a=Hn(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=t&&s>=t)return{node:a,offset:t-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hn(a)}}function zo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $o(){for(var e=window,t=al();t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=al(e.document)}return t}function Li(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ip(e){var t=$o(),a=e.focusedElem,s=e.selectionRange;if(t!==a&&a&&a.ownerDocument&&zo(a.ownerDocument.documentElement,a)){if(s!==null&&Li(a)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=a.textContent.length,i=Math.min(s.start,r);s=s.end===void 0?i:Math.min(s.end,r),!e.extend&&i>s&&(r=s,s=i,i=r),r=Vn(a,i);var n=Vn(a,s);r&&n&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==n.node||e.focusOffset!==n.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),i>s?(e.addRange(t),e.extend(n.node,n.offset)):(t.setEnd(n.node,n.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var np=tt&&"documentMode"in document&&11>=document.documentMode,Xt=null,$r=null,Ka=null,Gr=!1;function Wn(e,t,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gr||Xt==null||Xt!==al(s)||(s=Xt,"selectionStart"in s&&Li(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ka&&Za(Ka,s)||(Ka=s,s=ol($r,"onSelect"),0<s.length&&(t=new Ui("onSelect","select",null,t,a),e.push({event:t,listeners:s}),t.target=Xt)))}function Fs(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Jt={animationend:Fs("Animation","AnimationEnd"),animationiteration:Fs("Animation","AnimationIteration"),animationstart:Fs("Animation","AnimationStart"),transitionend:Fs("Transition","TransitionEnd")},ir={},Go={};tt&&(Go=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function Tl(e){if(ir[e])return ir[e];if(!Jt[e])return e;var t=Jt[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Go)return ir[e]=t[a];return e}var Ho=Tl("animationend"),Vo=Tl("animationiteration"),Wo=Tl("animationstart"),Yo=Tl("transitionend"),Xo=new Map,Yn="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,t){Xo.set(e,t),zt(t,[e])}for(var nr=0;nr<Yn.length;nr++){var dr=Yn[nr],dp=dr.toLowerCase(),op=dr[0].toUpperCase()+dr.slice(1);jt(dp,"on"+op)}jt(Ho,"onAnimationEnd");jt(Vo,"onAnimationIteration");jt(Wo,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(Yo,"onTransitionEnd");ca("onMouseEnter",["mouseout","mouseover"]);ca("onMouseLeave",["mouseout","mouseover"]);ca("onPointerEnter",["pointerout","pointerover"]);ca("onPointerLeave",["pointerout","pointerover"]);zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ua));function Xn(e,t,a){var s=e.type||"unknown-event";e.currentTarget=a,du(s,t,void 0,e),e.currentTarget=null}function Jo(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],r=s.event;s=s.listeners;e:{var i=void 0;if(t)for(var n=s.length-1;0<=n;n--){var d=s[n],o=d.instance,c=d.currentTarget;if(d=d.listener,o!==i&&r.isPropagationStopped())break e;Xn(r,d,c),i=o}else for(n=0;n<s.length;n++){if(d=s[n],o=d.instance,c=d.currentTarget,d=d.listener,o!==i&&r.isPropagationStopped())break e;Xn(r,d,c),i=o}}}if(ll)throw e=Lr,ll=!1,Lr=null,e}function z(e,t){var a=t[Xr];a===void 0&&(a=t[Xr]=new Set);var s=e+"__bubble";a.has(s)||(Qo(t,e,2,!1),a.add(s))}function or(e,t,a){var s=0;t&&(s|=4),Qo(a,e,s,t)}var Ps="_reactListening"+Math.random().toString(36).slice(2);function es(e){if(!e[Ps]){e[Ps]=!0,so.forEach(function(a){a!=="selectionchange"&&(cp.has(a)||or(a,!1,e),or(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ps]||(t[Ps]=!0,or("selectionchange",!1,t))}}function Qo(e,t,a,s){switch(Ao(t)){case 1:var r=Su;break;case 4:r=ju;break;default:r=Ai}a=r.bind(null,t,a,e),r=void 0,!Rr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),s?r!==void 0?e.addEventListener(t,a,{capture:!0,passive:r}):e.addEventListener(t,a,!0):r!==void 0?e.addEventListener(t,a,{passive:r}):e.addEventListener(t,a,!1)}function cr(e,t,a,s,r){var i=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var n=s.tag;if(n===3||n===4){var d=s.stateNode.containerInfo;if(d===r||d.nodeType===8&&d.parentNode===r)break;if(n===4)for(n=s.return;n!==null;){var o=n.tag;if((o===3||o===4)&&(o=n.stateNode.containerInfo,o===r||o.nodeType===8&&o.parentNode===r))return;n=n.return}for(;d!==null;){if(n=Ft(d),n===null)return;if(o=n.tag,o===5||o===6){s=i=n;continue e}d=d.parentNode}}s=s.return}bo(function(){var c=i,h=Di(a),v=[];e:{var f=Xo.get(e);if(f!==void 0){var x=Ui,N=e;switch(e){case"keypress":if(Vs(a)===0)break e;case"keydown":case"keyup":x=Ou;break;case"focusin":N="focus",x=sr;break;case"focusout":N="blur",x=sr;break;case"beforeblur":case"afterblur":x=sr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=In;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Eu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=$u;break;case Ho:case Vo:case Wo:x=Tu;break;case Yo:x=Hu;break;case"scroll":x=Cu;break;case"wheel":x=Wu;break;case"copy":case"cut":case"paste":x=Pu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ln}var y=(t&4)!==0,S=!y&&e==="scroll",p=y?f!==null?f+"Capture":null:f;y=[];for(var m=c,u;m!==null;){u=m;var b=u.stateNode;if(u.tag===5&&b!==null&&(u=b,p!==null&&(b=Ya(m,p),b!=null&&y.push(ts(m,b,u)))),S)break;m=m.return}0<y.length&&(f=new x(f,N,null,a,h),v.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",f&&a!==Ur&&(N=a.relatedTarget||a.fromElement)&&(Ft(N)||N[at]))break e;if((x||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,x?(N=a.relatedTarget||a.toElement,x=c,N=N?Ft(N):null,N!==null&&(S=$t(N),N!==S||N.tag!==5&&N.tag!==6)&&(N=null)):(x=null,N=c),x!==N)){if(y=In,b="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ln,b="onPointerLeave",p="onPointerEnter",m="pointer"),S=x==null?f:Qt(x),u=N==null?f:Qt(N),f=new y(b,m+"leave",x,a,h),f.target=S,f.relatedTarget=u,b=null,Ft(h)===c&&(y=new y(p,m+"enter",N,a,h),y.target=u,y.relatedTarget=S,b=y),S=b,x&&N)t:{for(y=x,p=N,m=0,u=y;u;u=Ht(u))m++;for(u=0,b=p;b;b=Ht(b))u++;for(;0<m-u;)y=Ht(y),m--;for(;0<u-m;)p=Ht(p),u--;for(;m--;){if(y===p||p!==null&&y===p.alternate)break t;y=Ht(y),p=Ht(p)}y=null}else y=null;x!==null&&Jn(v,f,x,y,!1),N!==null&&S!==null&&Jn(v,S,N,y,!0)}}e:{if(f=c?Qt(c):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var k=ep;else if(zn(f))if(Oo)k=lp;else{k=ap;var E=tp}else(x=f.nodeName)&&x.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=sp);if(k&&(k=k(e,c))){Lo(v,k,a,h);break e}E&&E(e,f,c),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&Tr(f,"number",f.value)}switch(E=c?Qt(c):window,e){case"focusin":(zn(E)||E.contentEditable==="true")&&(Xt=E,$r=c,Ka=null);break;case"focusout":Ka=$r=Xt=null;break;case"mousedown":Gr=!0;break;case"contextmenu":case"mouseup":case"dragend":Gr=!1,Wn(v,a,h);break;case"selectionchange":if(np)break;case"keydown":case"keyup":Wn(v,a,h)}var _;if(Ri)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Yt?Io(e,a)&&(M="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(M="onCompositionStart");M&&(Uo&&a.locale!=="ko"&&(Yt||M!=="onCompositionStart"?M==="onCompositionEnd"&&Yt&&(_=Bo()):(pt=h,Bi="value"in pt?pt.value:pt.textContent,Yt=!0)),E=ol(c,M),0<E.length&&(M=new Rn(M,e,null,a,h),v.push({event:M,listeners:E}),_?M.data=_:(_=Ro(a),_!==null&&(M.data=_)))),(_=Xu?Ju(e,a):Qu(e,a))&&(c=ol(c,"onBeforeInput"),0<c.length&&(h=new Rn("onBeforeInput","beforeinput",null,a,h),v.push({event:h,listeners:c}),h.data=_))}Jo(v,t)})}function ts(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ol(e,t){for(var a=t+"Capture",s=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=Ya(e,a),i!=null&&s.unshift(ts(e,i,r)),i=Ya(e,t),i!=null&&s.push(ts(e,i,r))),e=e.return}return s}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Jn(e,t,a,s,r){for(var i=t._reactName,n=[];a!==null&&a!==s;){var d=a,o=d.alternate,c=d.stateNode;if(o!==null&&o===s)break;d.tag===5&&c!==null&&(d=c,r?(o=Ya(a,i),o!=null&&n.unshift(ts(a,o,d))):r||(o=Ya(a,i),o!=null&&n.push(ts(a,o,d)))),a=a.return}n.length!==0&&e.push({event:t,listeners:n})}var mp=/\r\n?/g,up=/\u0000|\uFFFD/g;function Qn(e){return(typeof e=="string"?e:""+e).replace(mp,`
`).replace(up,"")}function As(e,t,a){if(t=Qn(t),Qn(e)!==t&&a)throw Error(w(425))}function cl(){}var Hr=null,Vr=null;function Wr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yr=typeof setTimeout=="function"?setTimeout:void 0,pp=typeof clearTimeout=="function"?clearTimeout:void 0,qn=typeof Promise=="function"?Promise:void 0,hp=typeof queueMicrotask=="function"?queueMicrotask:typeof qn<"u"?function(e){return qn.resolve(null).then(e).catch(vp)}:Yr;function vp(e){setTimeout(function(){throw e})}function mr(e,t){var a=t,s=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(s===0){e.removeChild(r),Qa(t);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=r}while(a);Qa(t)}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zn(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}var Na=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Na,as="__reactProps$"+Na,at="__reactContainer$"+Na,Xr="__reactEvents$"+Na,fp="__reactListeners$"+Na,xp="__reactHandles$"+Na;function Ft(e){var t=e[Ge];if(t)return t;for(var a=e.parentNode;a;){if(t=a[at]||a[Ge]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Zn(e);e!==null;){if(a=e[Ge])return a;e=Zn(e)}return t}e=a,a=e.parentNode}return null}function hs(e){return e=e[Ge]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Fl(e){return e[as]||null}var Jr=[],qt=-1;function Ct(e){return{current:e}}function $(e){0>qt||(e.current=Jr[qt],Jr[qt]=null,qt--)}function K(e,t){qt++,Jr[qt]=e.current,e.current=t}var St={},ce=Ct(St),ge=Ct(!1),It=St;function ma(e,t){var a=e.type.contextTypes;if(!a)return St;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in a)r[i]=t[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function Ne(e){return e=e.childContextTypes,e!=null}function ml(){$(ge),$(ce)}function ed(e,t,a){if(ce.current!==St)throw Error(w(168));K(ce,t),K(ge,a)}function qo(e,t,a){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return a;s=s.getChildContext();for(var r in s)if(!(r in t))throw Error(w(108,tu(e)||"Unknown",r));return Y({},a,s)}function ul(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||St,It=ce.current,K(ce,e),K(ge,ge.current),!0}function td(e,t,a){var s=e.stateNode;if(!s)throw Error(w(169));a?(e=qo(e,t,It),s.__reactInternalMemoizedMergedChildContext=e,$(ge),$(ce),K(ce,e)):$(ge),K(ge,a)}var Je=null,Pl=!1,ur=!1;function Zo(e){Je===null?Je=[e]:Je.push(e)}function gp(e){Pl=!0,Zo(e)}function _t(){if(!ur&&Je!==null){ur=!0;var e=0,t=O;try{var a=Je;for(O=1;e<a.length;e++){var s=a[e];do s=s(!0);while(s!==null)}Je=null,Pl=!1}catch(r){throw Je!==null&&(Je=Je.slice(e+1)),So(Ti,_t),r}finally{O=t,ur=!1}}return null}var Zt=[],ea=0,pl=null,hl=0,_e=[],Ee=0,Rt=null,Qe=1,qe="";function Dt(e,t){Zt[ea++]=hl,Zt[ea++]=pl,pl=e,hl=t}function ec(e,t,a){_e[Ee++]=Qe,_e[Ee++]=qe,_e[Ee++]=Rt,Rt=e;var s=Qe;e=qe;var r=32-Ie(s)-1;s&=~(1<<r),a+=1;var i=32-Ie(t)+r;if(30<i){var n=r-r%5;i=(s&(1<<n)-1).toString(32),s>>=n,r-=n,Qe=1<<32-Ie(t)+r|a<<r|s,qe=i+e}else Qe=1<<i|a<<r|s,qe=e}function Oi(e){e.return!==null&&(Dt(e,1),ec(e,1,0))}function Ki(e){for(;e===pl;)pl=Zt[--ea],Zt[ea]=null,hl=Zt[--ea],Zt[ea]=null;for(;e===Rt;)Rt=_e[--Ee],_e[Ee]=null,qe=_e[--Ee],_e[Ee]=null,Qe=_e[--Ee],_e[Ee]=null}var ke=null,we=null,G=!1,Ue=null;function tc(e,t){var a=Me(5,null,null,0);a.elementType="DELETED",a.stateNode=t,a.return=e,t=e.deletions,t===null?(e.deletions=[a],e.flags|=16):t.push(a)}function ad(e,t){switch(e.tag){case 5:var a=e.type;return t=t.nodeType!==1||a.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,we=gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(a=Rt!==null?{id:Qe,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:a,retryLane:1073741824},a=Me(18,null,null,0),a.stateNode=t,a.return=e,e.child=a,ke=e,we=null,!0):!1;default:return!1}}function Qr(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qr(e){if(G){var t=we;if(t){var a=t;if(!ad(e,t)){if(Qr(e))throw Error(w(418));t=gt(a.nextSibling);var s=ke;t&&ad(e,t)?tc(s,a):(e.flags=e.flags&-4097|2,G=!1,ke=e)}}else{if(Qr(e))throw Error(w(418));e.flags=e.flags&-4097|2,G=!1,ke=e}}}function sd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Bs(e){if(e!==ke)return!1;if(!G)return sd(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wr(e.type,e.memoizedProps)),t&&(t=we)){if(Qr(e))throw ac(),Error(w(418));for(;t;)tc(e,t),t=gt(t.nextSibling)}if(sd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(t===0){we=gt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++}e=e.nextSibling}we=null}}else we=ke?gt(e.stateNode.nextSibling):null;return!0}function ac(){for(var e=we;e;)e=gt(e.nextSibling)}function ua(){we=ke=null,G=!1}function zi(e){Ue===null?Ue=[e]:Ue.push(e)}var Np=it.ReactCurrentBatchConfig;function Ma(e,t,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(w(309));var s=a.stateNode}if(!s)throw Error(w(147,e));var r=s,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(n){var d=r.refs;n===null?delete d[i]:d[i]=n},t._stringRef=i,t)}if(typeof e!="string")throw Error(w(284));if(!a._owner)throw Error(w(290,e))}return e}function Us(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ld(e){var t=e._init;return t(e._payload)}function sc(e){function t(p,m){if(e){var u=p.deletions;u===null?(p.deletions=[m],p.flags|=16):u.push(m)}}function a(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function s(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function r(p,m){return p=wt(p,m),p.index=0,p.sibling=null,p}function i(p,m,u){return p.index=u,e?(u=p.alternate,u!==null?(u=u.index,u<m?(p.flags|=2,m):u):(p.flags|=2,m)):(p.flags|=1048576,m)}function n(p){return e&&p.alternate===null&&(p.flags|=2),p}function d(p,m,u,b){return m===null||m.tag!==6?(m=Nr(u,p.mode,b),m.return=p,m):(m=r(m,u),m.return=p,m)}function o(p,m,u,b){var k=u.type;return k===Wt?h(p,m,u.props.children,b,u.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ot&&ld(k)===m.type)?(b=r(m,u.props),b.ref=Ma(p,m,u),b.return=p,b):(b=Zs(u.type,u.key,u.props,null,p.mode,b),b.ref=Ma(p,m,u),b.return=p,b)}function c(p,m,u,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==u.containerInfo||m.stateNode.implementation!==u.implementation?(m=br(u,p.mode,b),m.return=p,m):(m=r(m,u.children||[]),m.return=p,m)}function h(p,m,u,b,k){return m===null||m.tag!==7?(m=Ut(u,p.mode,b,k),m.return=p,m):(m=r(m,u),m.return=p,m)}function v(p,m,u){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Nr(""+m,p.mode,u),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case js:return u=Zs(m.type,m.key,m.props,null,p.mode,u),u.ref=Ma(p,null,m),u.return=p,u;case Vt:return m=br(m,p.mode,u),m.return=p,m;case ot:var b=m._init;return v(p,b(m._payload),u)}if(Aa(m)||Sa(m))return m=Ut(m,p.mode,u,null),m.return=p,m;Us(p,m)}return null}function f(p,m,u,b){var k=m!==null?m.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return k!==null?null:d(p,m,""+u,b);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case js:return u.key===k?o(p,m,u,b):null;case Vt:return u.key===k?c(p,m,u,b):null;case ot:return k=u._init,f(p,m,k(u._payload),b)}if(Aa(u)||Sa(u))return k!==null?null:h(p,m,u,b,null);Us(p,u)}return null}function x(p,m,u,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(u)||null,d(m,p,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case js:return p=p.get(b.key===null?u:b.key)||null,o(m,p,b,k);case Vt:return p=p.get(b.key===null?u:b.key)||null,c(m,p,b,k);case ot:var E=b._init;return x(p,m,u,E(b._payload),k)}if(Aa(b)||Sa(b))return p=p.get(u)||null,h(m,p,b,k,null);Us(m,b)}return null}function N(p,m,u,b){for(var k=null,E=null,_=m,M=m=0,R=null;_!==null&&M<u.length;M++){_.index>M?(R=_,_=null):R=_.sibling;var D=f(p,_,u[M],b);if(D===null){_===null&&(_=R);break}e&&_&&D.alternate===null&&t(p,_),m=i(D,m,M),E===null?k=D:E.sibling=D,E=D,_=R}if(M===u.length)return a(p,_),G&&Dt(p,M),k;if(_===null){for(;M<u.length;M++)_=v(p,u[M],b),_!==null&&(m=i(_,m,M),E===null?k=_:E.sibling=_,E=_);return G&&Dt(p,M),k}for(_=s(p,_);M<u.length;M++)R=x(_,p,M,u[M],b),R!==null&&(e&&R.alternate!==null&&_.delete(R.key===null?M:R.key),m=i(R,m,M),E===null?k=R:E.sibling=R,E=R);return e&&_.forEach(function(ve){return t(p,ve)}),G&&Dt(p,M),k}function y(p,m,u,b){var k=Sa(u);if(typeof k!="function")throw Error(w(150));if(u=k.call(u),u==null)throw Error(w(151));for(var E=k=null,_=m,M=m=0,R=null,D=u.next();_!==null&&!D.done;M++,D=u.next()){_.index>M?(R=_,_=null):R=_.sibling;var ve=f(p,_,D.value,b);if(ve===null){_===null&&(_=R);break}e&&_&&ve.alternate===null&&t(p,_),m=i(ve,m,M),E===null?k=ve:E.sibling=ve,E=ve,_=R}if(D.done)return a(p,_),G&&Dt(p,M),k;if(_===null){for(;!D.done;M++,D=u.next())D=v(p,D.value,b),D!==null&&(m=i(D,m,M),E===null?k=D:E.sibling=D,E=D);return G&&Dt(p,M),k}for(_=s(p,_);!D.done;M++,D=u.next())D=x(_,p,M,D.value,b),D!==null&&(e&&D.alternate!==null&&_.delete(D.key===null?M:D.key),m=i(D,m,M),E===null?k=D:E.sibling=D,E=D);return e&&_.forEach(function(wa){return t(p,wa)}),G&&Dt(p,M),k}function S(p,m,u,b){if(typeof u=="object"&&u!==null&&u.type===Wt&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case js:e:{for(var k=u.key,E=m;E!==null;){if(E.key===k){if(k=u.type,k===Wt){if(E.tag===7){a(p,E.sibling),m=r(E,u.props.children),m.return=p,p=m;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ot&&ld(k)===E.type){a(p,E.sibling),m=r(E,u.props),m.ref=Ma(p,E,u),m.return=p,p=m;break e}a(p,E);break}else t(p,E);E=E.sibling}u.type===Wt?(m=Ut(u.props.children,p.mode,b,u.key),m.return=p,p=m):(b=Zs(u.type,u.key,u.props,null,p.mode,b),b.ref=Ma(p,m,u),b.return=p,p=b)}return n(p);case Vt:e:{for(E=u.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===u.containerInfo&&m.stateNode.implementation===u.implementation){a(p,m.sibling),m=r(m,u.children||[]),m.return=p,p=m;break e}else{a(p,m);break}else t(p,m);m=m.sibling}m=br(u,p.mode,b),m.return=p,p=m}return n(p);case ot:return E=u._init,S(p,m,E(u._payload),b)}if(Aa(u))return N(p,m,u,b);if(Sa(u))return y(p,m,u,b);Us(p,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,m!==null&&m.tag===6?(a(p,m.sibling),m=r(m,u),m.return=p,p=m):(a(p,m),m=Nr(u,p.mode,b),m.return=p,p=m),n(p)):a(p,m)}return S}var pa=sc(!0),lc=sc(!1),vl=Ct(null),fl=null,ta=null,$i=null;function Gi(){$i=ta=fl=null}function Hi(e){var t=vl.current;$(vl),e._currentValue=t}function Zr(e,t,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===a)break;e=e.return}}function da(e,t){fl=e,$i=ta=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if($i!==e)if(e={context:e,memoizedValue:t,next:null},ta===null){if(fl===null)throw Error(w(308));ta=e,fl.dependencies={lanes:0,firstContext:e}}else ta=ta.next=e;return t}var Pt=null;function Vi(e){Pt===null?Pt=[e]:Pt.push(e)}function rc(e,t,a,s){var r=t.interleaved;return r===null?(a.next=a,Vi(t)):(a.next=r.next,r.next=a),t.interleaved=a,st(e,s)}function st(e,t){e.lanes|=t;var a=e.alternate;for(a!==null&&(a.lanes|=t),a=e,e=e.return;e!==null;)e.childLanes|=t,a=e.alternate,a!==null&&(a.childLanes|=t),a=e,e=e.return;return a.tag===3?a.stateNode:null}var ct=!1;function Wi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ic(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,L&2){var r=s.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),s.pending=t,st(e,a)}return r=s.interleaved,r===null?(t.next=t,Vi(s)):(t.next=r.next,r.next=t),s.interleaved=t,st(e,a)}function Ws(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,Fi(e,a)}}function rd(e,t){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var r=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var n={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};i===null?r=i=n:i=i.next=n,a=a.next}while(a!==null);i===null?r=i=t:i=i.next=t}else r=i=t;a={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}function xl(e,t,a,s){var r=e.updateQueue;ct=!1;var i=r.firstBaseUpdate,n=r.lastBaseUpdate,d=r.shared.pending;if(d!==null){r.shared.pending=null;var o=d,c=o.next;o.next=null,n===null?i=c:n.next=c,n=o;var h=e.alternate;h!==null&&(h=h.updateQueue,d=h.lastBaseUpdate,d!==n&&(d===null?h.firstBaseUpdate=c:d.next=c,h.lastBaseUpdate=o))}if(i!==null){var v=r.baseState;n=0,h=c=o=null,d=i;do{var f=d.lane,x=d.eventTime;if((s&f)===f){h!==null&&(h=h.next={eventTime:x,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var N=e,y=d;switch(f=t,x=a,y.tag){case 1:if(N=y.payload,typeof N=="function"){v=N.call(x,v,f);break e}v=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=y.payload,f=typeof N=="function"?N.call(x,v,f):N,f==null)break e;v=Y({},v,f);break e;case 2:ct=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[d]:f.push(d))}else x={eventTime:x,lane:f,tag:d.tag,payload:d.payload,callback:d.callback,next:null},h===null?(c=h=x,o=v):h=h.next=x,n|=f;if(d=d.next,d===null){if(d=r.shared.pending,d===null)break;f=d,d=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(h===null&&(o=v),r.baseState=o,r.firstBaseUpdate=c,r.lastBaseUpdate=h,t=r.shared.interleaved,t!==null){r=t;do n|=r.lane,r=r.next;while(r!==t)}else i===null&&(r.shared.lanes=0);Ot|=n,e.lanes=n,e.memoizedState=v}}function id(e,t,a){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],r=s.callback;if(r!==null){if(s.callback=null,s=a,typeof r!="function")throw Error(w(191,r));r.call(s)}}}var vs={},Ve=Ct(vs),ss=Ct(vs),ls=Ct(vs);function At(e){if(e===vs)throw Error(w(174));return e}function Yi(e,t){switch(K(ls,t),K(ss,e),K(Ve,vs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pr(t,e)}$(Ve),K(Ve,t)}function ha(){$(Ve),$(ss),$(ls)}function nc(e){At(ls.current);var t=At(Ve.current),a=Pr(t,e.type);t!==a&&(K(ss,e),K(Ve,a))}function Xi(e){ss.current===e&&($(Ve),$(ss))}var H=Ct(0);function gl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pr=[];function Ji(){for(var e=0;e<pr.length;e++)pr[e]._workInProgressVersionPrimary=null;pr.length=0}var Ys=it.ReactCurrentDispatcher,hr=it.ReactCurrentBatchConfig,Lt=0,V=null,Z=null,ae=null,Nl=!1,za=!1,rs=0,bp=0;function ne(){throw Error(w(321))}function Qi(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Le(e[a],t[a]))return!1;return!0}function qi(e,t,a,s,r,i){if(Lt=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ys.current=e===null||e.memoizedState===null?Sp:jp,e=a(s,r),za){i=0;do{if(za=!1,rs=0,25<=i)throw Error(w(301));i+=1,ae=Z=null,t.updateQueue=null,Ys.current=Cp,e=a(s,r)}while(za)}if(Ys.current=bl,t=Z!==null&&Z.next!==null,Lt=0,ae=Z=V=null,Nl=!1,t)throw Error(w(300));return e}function Zi(){var e=rs!==0;return rs=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?V.memoizedState=ae=e:ae=ae.next=e,ae}function Fe(){if(Z===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=ae===null?V.memoizedState:ae.next;if(t!==null)ae=t,Z=e;else{if(e===null)throw Error(w(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ae===null?V.memoizedState=ae=e:ae=ae.next=e}return ae}function is(e,t){return typeof t=="function"?t(e):t}function vr(e){var t=Fe(),a=t.queue;if(a===null)throw Error(w(311));a.lastRenderedReducer=e;var s=Z,r=s.baseQueue,i=a.pending;if(i!==null){if(r!==null){var n=r.next;r.next=i.next,i.next=n}s.baseQueue=r=i,a.pending=null}if(r!==null){i=r.next,s=s.baseState;var d=n=null,o=null,c=i;do{var h=c.lane;if((Lt&h)===h)o!==null&&(o=o.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),s=c.hasEagerState?c.eagerState:e(s,c.action);else{var v={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};o===null?(d=o=v,n=s):o=o.next=v,V.lanes|=h,Ot|=h}c=c.next}while(c!==null&&c!==i);o===null?n=s:o.next=d,Le(s,t.memoizedState)||(xe=!0),t.memoizedState=s,t.baseState=n,t.baseQueue=o,a.lastRenderedState=s}if(e=a.interleaved,e!==null){r=e;do i=r.lane,V.lanes|=i,Ot|=i,r=r.next;while(r!==e)}else r===null&&(a.lanes=0);return[t.memoizedState,a.dispatch]}function fr(e){var t=Fe(),a=t.queue;if(a===null)throw Error(w(311));a.lastRenderedReducer=e;var s=a.dispatch,r=a.pending,i=t.memoizedState;if(r!==null){a.pending=null;var n=r=r.next;do i=e(i,n.action),n=n.next;while(n!==r);Le(i,t.memoizedState)||(xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,s]}function dc(){}function oc(e,t){var a=V,s=Fe(),r=t(),i=!Le(s.memoizedState,r);if(i&&(s.memoizedState=r,xe=!0),s=s.queue,en(uc.bind(null,a,s,e),[e]),s.getSnapshot!==t||i||ae!==null&&ae.memoizedState.tag&1){if(a.flags|=2048,ns(9,mc.bind(null,a,s,r,t),void 0,null),se===null)throw Error(w(349));Lt&30||cc(a,t,r)}return r}function cc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function mc(e,t,a,s){t.value=a,t.getSnapshot=s,pc(t)&&hc(e)}function uc(e,t,a){return a(function(){pc(t)&&hc(e)})}function pc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Le(e,a)}catch{return!0}}function hc(e){var t=st(e,1);t!==null&&Re(t,e,1,-1)}function nd(e){var t=$e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:e},t.queue=e,e=e.dispatch=kp.bind(null,V,e),[t.memoizedState,e]}function ns(e,t,a,s){return e={tag:e,create:t,destroy:a,deps:s,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(a=t.lastEffect,a===null?t.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,t.lastEffect=e)),e}function vc(){return Fe().memoizedState}function Xs(e,t,a,s){var r=$e();V.flags|=e,r.memoizedState=ns(1|t,a,void 0,s===void 0?null:s)}function Al(e,t,a,s){var r=Fe();s=s===void 0?null:s;var i=void 0;if(Z!==null){var n=Z.memoizedState;if(i=n.destroy,s!==null&&Qi(s,n.deps)){r.memoizedState=ns(t,a,i,s);return}}V.flags|=e,r.memoizedState=ns(1|t,a,i,s)}function dd(e,t){return Xs(8390656,8,e,t)}function en(e,t){return Al(2048,8,e,t)}function fc(e,t){return Al(4,2,e,t)}function xc(e,t){return Al(4,4,e,t)}function gc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nc(e,t,a){return a=a!=null?a.concat([e]):null,Al(4,4,gc.bind(null,t,e),a)}function tn(){}function bc(e,t){var a=Fe();t=t===void 0?null:t;var s=a.memoizedState;return s!==null&&t!==null&&Qi(t,s[1])?s[0]:(a.memoizedState=[e,t],e)}function yc(e,t){var a=Fe();t=t===void 0?null:t;var s=a.memoizedState;return s!==null&&t!==null&&Qi(t,s[1])?s[0]:(e=e(),a.memoizedState=[e,t],e)}function wc(e,t,a){return Lt&21?(Le(a,t)||(a=_o(),V.lanes|=a,Ot|=a,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=a)}function yp(e,t){var a=O;O=a!==0&&4>a?a:4,e(!0);var s=hr.transition;hr.transition={};try{e(!1),t()}finally{O=a,hr.transition=s}}function kc(){return Fe().memoizedState}function wp(e,t,a){var s=yt(e);if(a={lane:s,action:a,hasEagerState:!1,eagerState:null,next:null},Sc(e))jc(t,a);else if(a=rc(e,t,a,s),a!==null){var r=ue();Re(a,e,s,r),Cc(a,t,s)}}function kp(e,t,a){var s=yt(e),r={lane:s,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sc(e))jc(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var n=t.lastRenderedState,d=i(n,a);if(r.hasEagerState=!0,r.eagerState=d,Le(d,n)){var o=t.interleaved;o===null?(r.next=r,Vi(t)):(r.next=o.next,o.next=r),t.interleaved=r;return}}catch{}finally{}a=rc(e,t,r,s),a!==null&&(r=ue(),Re(a,e,s,r),Cc(a,t,s))}}function Sc(e){var t=e.alternate;return e===V||t!==null&&t===V}function jc(e,t){za=Nl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Cc(e,t,a){if(a&4194240){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,Fi(e,a)}}var bl={readContext:Te,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},Sp={readContext:Te,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:dd,useImperativeHandle:function(e,t,a){return a=a!=null?a.concat([e]):null,Xs(4194308,4,gc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Xs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xs(4,2,e,t)},useMemo:function(e,t){var a=$e();return t=t===void 0?null:t,e=e(),a.memoizedState=[e,t],e},useReducer:function(e,t,a){var s=$e();return t=a!==void 0?a(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=wp.bind(null,V,e),[s.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:nd,useDebugValue:tn,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=nd(!1),t=e[0];return e=yp.bind(null,e[1]),$e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,a){var s=V,r=$e();if(G){if(a===void 0)throw Error(w(407));a=a()}else{if(a=t(),se===null)throw Error(w(349));Lt&30||cc(s,t,a)}r.memoizedState=a;var i={value:a,getSnapshot:t};return r.queue=i,dd(uc.bind(null,s,i,e),[e]),s.flags|=2048,ns(9,mc.bind(null,s,i,a,t),void 0,null),a},useId:function(){var e=$e(),t=se.identifierPrefix;if(G){var a=qe,s=Qe;a=(s&~(1<<32-Ie(s)-1)).toString(32)+a,t=":"+t+"R"+a,a=rs++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=bp++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jp={readContext:Te,useCallback:bc,useContext:Te,useEffect:en,useImperativeHandle:Nc,useInsertionEffect:fc,useLayoutEffect:xc,useMemo:yc,useReducer:vr,useRef:vc,useState:function(){return vr(is)},useDebugValue:tn,useDeferredValue:function(e){var t=Fe();return wc(t,Z.memoizedState,e)},useTransition:function(){var e=vr(is)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:dc,useSyncExternalStore:oc,useId:kc,unstable_isNewReconciler:!1},Cp={readContext:Te,useCallback:bc,useContext:Te,useEffect:en,useImperativeHandle:Nc,useInsertionEffect:fc,useLayoutEffect:xc,useMemo:yc,useReducer:fr,useRef:vc,useState:function(){return fr(is)},useDebugValue:tn,useDeferredValue:function(e){var t=Fe();return Z===null?t.memoizedState=e:wc(t,Z.memoizedState,e)},useTransition:function(){var e=fr(is)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:dc,useSyncExternalStore:oc,useId:kc,unstable_isNewReconciler:!1};function Ae(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var a in e)t[a]===void 0&&(t[a]=e[a]);return t}return t}function ei(e,t,a,s){t=e.memoizedState,a=a(s,t),a=a==null?t:Y({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Bl={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var s=ue(),r=yt(e),i=Ze(s,r);i.payload=t,a!=null&&(i.callback=a),t=Nt(e,i,r),t!==null&&(Re(t,e,r,s),Ws(t,e,r))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var s=ue(),r=yt(e),i=Ze(s,r);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Nt(e,i,r),t!==null&&(Re(t,e,r,s),Ws(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ue(),s=yt(e),r=Ze(a,s);r.tag=2,t!=null&&(r.callback=t),t=Nt(e,r,s),t!==null&&(Re(t,e,s,a),Ws(t,e,s))}};function od(e,t,a,s,r,i,n){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,n):t.prototype&&t.prototype.isPureReactComponent?!Za(a,s)||!Za(r,i):!0}function _c(e,t,a){var s=!1,r=St,i=t.contextType;return typeof i=="object"&&i!==null?i=Te(i):(r=Ne(t)?It:ce.current,s=t.contextTypes,i=(s=s!=null)?ma(e,r):St),t=new t(a,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bl,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function cd(e,t,a,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,s),t.state!==e&&Bl.enqueueReplaceState(t,t.state,null)}function ti(e,t,a,s){var r=e.stateNode;r.props=a,r.state=e.memoizedState,r.refs={},Wi(e);var i=t.contextType;typeof i=="object"&&i!==null?r.context=Te(i):(i=Ne(t)?It:ce.current,r.context=ma(e,i)),r.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ei(e,t,i,a),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&Bl.enqueueReplaceState(r,r.state,null),xl(e,a,r,s),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function va(e,t){try{var a="",s=t;do a+=eu(s),s=s.return;while(s);var r=a}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:r,digest:null}}function xr(e,t,a){return{value:e,source:null,stack:a??null,digest:t??null}}function ai(e,t){try{console.error(t.value)}catch(a){setTimeout(function(){throw a})}}var _p=typeof WeakMap=="function"?WeakMap:Map;function Ec(e,t,a){a=Ze(-1,a),a.tag=3,a.payload={element:null};var s=t.value;return a.callback=function(){wl||(wl=!0,ui=s),ai(e,t)},a}function Mc(e,t,a){a=Ze(-1,a),a.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var r=t.value;a.payload=function(){return s(r)},a.callback=function(){ai(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(a.callback=function(){ai(e,t),typeof s!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n!==null?n:""})}),a}function md(e,t,a){var s=e.pingCache;if(s===null){s=e.pingCache=new _p;var r=new Set;s.set(t,r)}else r=s.get(t),r===void 0&&(r=new Set,s.set(t,r));r.has(a)||(r.add(a),e=Kp.bind(null,e,t,a),t.then(e,e))}function ud(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pd(e,t,a,s,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(t=Ze(-1,1),t.tag=2,Nt(a,t,1))),a.lanes|=1),e)}var Ep=it.ReactCurrentOwner,xe=!1;function me(e,t,a,s){t.child=e===null?lc(t,null,a,s):pa(t,e.child,a,s)}function hd(e,t,a,s,r){a=a.render;var i=t.ref;return da(t,r),s=qi(e,t,a,s,i,r),a=Zi(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,lt(e,t,r)):(G&&a&&Oi(t),t.flags|=1,me(e,t,s,r),t.child)}function vd(e,t,a,s,r){if(e===null){var i=a.type;return typeof i=="function"&&!cn(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(t.tag=15,t.type=i,Dc(e,t,i,s,r)):(e=Zs(a.type,null,s,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&r)){var n=i.memoizedProps;if(a=a.compare,a=a!==null?a:Za,a(n,s)&&e.ref===t.ref)return lt(e,t,r)}return t.flags|=1,e=wt(i,s),e.ref=t.ref,e.return=t,t.child=e}function Dc(e,t,a,s,r){if(e!==null){var i=e.memoizedProps;if(Za(i,s)&&e.ref===t.ref)if(xe=!1,t.pendingProps=s=i,(e.lanes&r)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,lt(e,t,r)}return si(e,t,a,s,r)}function Tc(e,t,a){var s=t.pendingProps,r=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(sa,ye),ye|=a;else{if(!(a&1073741824))return e=i!==null?i.baseLanes|a:a,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(sa,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:a,K(sa,ye),ye|=s}else i!==null?(s=i.baseLanes|a,t.memoizedState=null):s=a,K(sa,ye),ye|=s;return me(e,t,r,a),t.child}function Fc(e,t){var a=t.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(t.flags|=512,t.flags|=2097152)}function si(e,t,a,s,r){var i=Ne(a)?It:ce.current;return i=ma(t,i),da(t,r),a=qi(e,t,a,s,i,r),s=Zi(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,lt(e,t,r)):(G&&s&&Oi(t),t.flags|=1,me(e,t,a,r),t.child)}function fd(e,t,a,s,r){if(Ne(a)){var i=!0;ul(t)}else i=!1;if(da(t,r),t.stateNode===null)Js(e,t),_c(t,a,s),ti(t,a,s,r),s=!0;else if(e===null){var n=t.stateNode,d=t.memoizedProps;n.props=d;var o=n.context,c=a.contextType;typeof c=="object"&&c!==null?c=Te(c):(c=Ne(a)?It:ce.current,c=ma(t,c));var h=a.getDerivedStateFromProps,v=typeof h=="function"||typeof n.getSnapshotBeforeUpdate=="function";v||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(d!==s||o!==c)&&cd(t,n,s,c),ct=!1;var f=t.memoizedState;n.state=f,xl(t,s,n,r),o=t.memoizedState,d!==s||f!==o||ge.current||ct?(typeof h=="function"&&(ei(t,a,h,s),o=t.memoizedState),(d=ct||od(t,a,d,s,f,o,c))?(v||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=o),n.props=s,n.state=o,n.context=c,s=d):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{n=t.stateNode,ic(e,t),d=t.memoizedProps,c=t.type===t.elementType?d:Ae(t.type,d),n.props=c,v=t.pendingProps,f=n.context,o=a.contextType,typeof o=="object"&&o!==null?o=Te(o):(o=Ne(a)?It:ce.current,o=ma(t,o));var x=a.getDerivedStateFromProps;(h=typeof x=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(d!==v||f!==o)&&cd(t,n,s,o),ct=!1,f=t.memoizedState,n.state=f,xl(t,s,n,r);var N=t.memoizedState;d!==v||f!==N||ge.current||ct?(typeof x=="function"&&(ei(t,a,x,s),N=t.memoizedState),(c=ct||od(t,a,c,s,f,N,o)||!1)?(h||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(s,N,o),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(s,N,o)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||d===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=N),n.props=s,n.state=N,n.context=o,s=c):(typeof n.componentDidUpdate!="function"||d===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),s=!1)}return li(e,t,a,s,i,r)}function li(e,t,a,s,r,i){Fc(e,t);var n=(t.flags&128)!==0;if(!s&&!n)return r&&td(t,a,!1),lt(e,t,i);s=t.stateNode,Ep.current=t;var d=n&&typeof a.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&n?(t.child=pa(t,e.child,null,i),t.child=pa(t,null,d,i)):me(e,t,d,i),t.memoizedState=s.state,r&&td(t,a,!0),t.child}function Pc(e){var t=e.stateNode;t.pendingContext?ed(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ed(e,t.context,!1),Yi(e,t.containerInfo)}function xd(e,t,a,s,r){return ua(),zi(r),t.flags|=256,me(e,t,a,s),t.child}var ri={dehydrated:null,treeContext:null,retryLane:0};function ii(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ac(e,t,a){var s=t.pendingProps,r=H.current,i=!1,n=(t.flags&128)!==0,d;if((d=n)||(d=e!==null&&e.memoizedState===null?!1:(r&2)!==0),d?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),K(H,r&1),e===null)return qr(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(n=s.children,e=s.fallback,i?(s=t.mode,i=t.child,n={mode:"hidden",children:n},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=n):i=Rl(n,s,0,null),e=Ut(e,s,a,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ii(a),t.memoizedState=ri,e):an(t,n));if(r=e.memoizedState,r!==null&&(d=r.dehydrated,d!==null))return Mp(e,t,n,s,d,r,a);if(i){i=s.fallback,n=t.mode,r=e.child,d=r.sibling;var o={mode:"hidden",children:s.children};return!(n&1)&&t.child!==r?(s=t.child,s.childLanes=0,s.pendingProps=o,t.deletions=null):(s=wt(r,o),s.subtreeFlags=r.subtreeFlags&14680064),d!==null?i=wt(d,i):(i=Ut(i,n,a,null),i.flags|=2),i.return=t,s.return=t,s.sibling=i,t.child=s,s=i,i=t.child,n=e.child.memoizedState,n=n===null?ii(a):{baseLanes:n.baseLanes|a,cachePool:null,transitions:n.transitions},i.memoizedState=n,i.childLanes=e.childLanes&~a,t.memoizedState=ri,s}return i=e.child,e=i.sibling,s=wt(i,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=a),s.return=t,s.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=s,t.memoizedState=null,s}function an(e,t){return t=Rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Is(e,t,a,s){return s!==null&&zi(s),pa(t,e.child,null,a),e=an(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mp(e,t,a,s,r,i,n){if(a)return t.flags&256?(t.flags&=-257,s=xr(Error(w(422))),Is(e,t,n,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=s.fallback,r=t.mode,s=Rl({mode:"visible",children:s.children},r,0,null),i=Ut(i,r,n,null),i.flags|=2,s.return=t,i.return=t,s.sibling=i,t.child=s,t.mode&1&&pa(t,e.child,null,n),t.child.memoizedState=ii(n),t.memoizedState=ri,i);if(!(t.mode&1))return Is(e,t,n,null);if(r.data==="$!"){if(s=r.nextSibling&&r.nextSibling.dataset,s)var d=s.dgst;return s=d,i=Error(w(419)),s=xr(i,s,void 0),Is(e,t,n,s)}if(d=(n&e.childLanes)!==0,xe||d){if(s=se,s!==null){switch(n&-n){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(s.suspendedLanes|n)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,st(e,r),Re(s,e,r,-1))}return on(),s=xr(Error(w(421))),Is(e,t,n,s)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=zp.bind(null,e),r._reactRetry=t,null):(e=i.treeContext,we=gt(r.nextSibling),ke=t,G=!0,Ue=null,e!==null&&(_e[Ee++]=Qe,_e[Ee++]=qe,_e[Ee++]=Rt,Qe=e.id,qe=e.overflow,Rt=t),t=an(t,s.children),t.flags|=4096,t)}function gd(e,t,a){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Zr(e.return,t,a)}function gr(e,t,a,s,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=a,i.tailMode=r)}function Bc(e,t,a){var s=t.pendingProps,r=s.revealOrder,i=s.tail;if(me(e,t,s.children,a),s=H.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gd(e,a,t);else if(e.tag===19)gd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(K(H,s),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(a=t.child,r=null;a!==null;)e=a.alternate,e!==null&&gl(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),gr(t,!1,r,a,i);break;case"backwards":for(a=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&gl(e)===null){t.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}gr(t,!0,a,null,i);break;case"together":gr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Js(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(a&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,a=wt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=wt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Dp(e,t,a){switch(t.tag){case 3:Pc(t),ua();break;case 5:nc(t);break;case 1:Ne(t.type)&&ul(t);break;case 4:Yi(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,r=t.memoizedProps.value;K(vl,s._currentValue),s._currentValue=r;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(K(H,H.current&1),t.flags|=128,null):a&t.child.childLanes?Ac(e,t,a):(K(H,H.current&1),e=lt(e,t,a),e!==null?e.sibling:null);K(H,H.current&1);break;case 19:if(s=(a&t.childLanes)!==0,e.flags&128){if(s)return Bc(e,t,a);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),K(H,H.current),s)break;return null;case 22:case 23:return t.lanes=0,Tc(e,t,a)}return lt(e,t,a)}var Uc,ni,Ic,Rc;Uc=function(e,t){for(var a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};ni=function(){};Ic=function(e,t,a,s){var r=e.memoizedProps;if(r!==s){e=t.stateNode,At(Ve.current);var i=null;switch(a){case"input":r=Mr(e,r),s=Mr(e,s),i=[];break;case"select":r=Y({},r,{value:void 0}),s=Y({},s,{value:void 0}),i=[];break;case"textarea":r=Fr(e,r),s=Fr(e,s),i=[];break;default:typeof r.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=cl)}Ar(a,s);var n;a=null;for(c in r)if(!s.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var d=r[c];for(n in d)d.hasOwnProperty(n)&&(a||(a={}),a[n]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Va.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in s){var o=s[c];if(d=r!=null?r[c]:void 0,s.hasOwnProperty(c)&&o!==d&&(o!=null||d!=null))if(c==="style")if(d){for(n in d)!d.hasOwnProperty(n)||o&&o.hasOwnProperty(n)||(a||(a={}),a[n]="");for(n in o)o.hasOwnProperty(n)&&d[n]!==o[n]&&(a||(a={}),a[n]=o[n])}else a||(i||(i=[]),i.push(c,a)),a=o;else c==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,d=d?d.__html:void 0,o!=null&&d!==o&&(i=i||[]).push(c,o)):c==="children"?typeof o!="string"&&typeof o!="number"||(i=i||[]).push(c,""+o):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Va.hasOwnProperty(c)?(o!=null&&c==="onScroll"&&z("scroll",e),i||d===o||(i=[])):(i=i||[]).push(c,o))}a&&(i=i||[]).push("style",a);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Rc=function(e,t,a,s){a!==s&&(t.flags|=4)};function Da(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(t)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,s|=r.subtreeFlags&14680064,s|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=s,e.childLanes=a,t}function Tp(e,t,a){var s=t.pendingProps;switch(Ki(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return Ne(t.type)&&ml(),de(t),null;case 3:return s=t.stateNode,ha(),$(ge),$(ce),Ji(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Bs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ue!==null&&(vi(Ue),Ue=null))),ni(e,t),de(t),null;case 5:Xi(t);var r=At(ls.current);if(a=t.type,e!==null&&t.stateNode!=null)Ic(e,t,a,s,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(w(166));return de(t),null}if(e=At(Ve.current),Bs(t)){s=t.stateNode,a=t.type;var i=t.memoizedProps;switch(s[Ge]=t,s[as]=i,e=(t.mode&1)!==0,a){case"dialog":z("cancel",s),z("close",s);break;case"iframe":case"object":case"embed":z("load",s);break;case"video":case"audio":for(r=0;r<Ua.length;r++)z(Ua[r],s);break;case"source":z("error",s);break;case"img":case"image":case"link":z("error",s),z("load",s);break;case"details":z("toggle",s);break;case"input":_n(s,i),z("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},z("invalid",s);break;case"textarea":Mn(s,i),z("invalid",s)}Ar(a,i),r=null;for(var n in i)if(i.hasOwnProperty(n)){var d=i[n];n==="children"?typeof d=="string"?s.textContent!==d&&(i.suppressHydrationWarning!==!0&&As(s.textContent,d,e),r=["children",d]):typeof d=="number"&&s.textContent!==""+d&&(i.suppressHydrationWarning!==!0&&As(s.textContent,d,e),r=["children",""+d]):Va.hasOwnProperty(n)&&d!=null&&n==="onScroll"&&z("scroll",s)}switch(a){case"input":Cs(s),En(s,i,!0);break;case"textarea":Cs(s),Dn(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=cl)}s=r,t.updateQueue=s,s!==null&&(t.flags|=4)}else{n=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uo(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=n.createElement(a,{is:s.is}):(e=n.createElement(a),a==="select"&&(n=e,s.multiple?n.multiple=!0:s.size&&(n.size=s.size))):e=n.createElementNS(e,a),e[Ge]=t,e[as]=s,Uc(e,t,!1,!1),t.stateNode=e;e:{switch(n=Br(a,s),a){case"dialog":z("cancel",e),z("close",e),r=s;break;case"iframe":case"object":case"embed":z("load",e),r=s;break;case"video":case"audio":for(r=0;r<Ua.length;r++)z(Ua[r],e);r=s;break;case"source":z("error",e),r=s;break;case"img":case"image":case"link":z("error",e),z("load",e),r=s;break;case"details":z("toggle",e),r=s;break;case"input":_n(e,s),r=Mr(e,s),z("invalid",e);break;case"option":r=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},r=Y({},s,{value:void 0}),z("invalid",e);break;case"textarea":Mn(e,s),r=Fr(e,s),z("invalid",e);break;default:r=s}Ar(a,r),d=r;for(i in d)if(d.hasOwnProperty(i)){var o=d[i];i==="style"?vo(e,o):i==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&po(e,o)):i==="children"?typeof o=="string"?(a!=="textarea"||o!=="")&&Wa(e,o):typeof o=="number"&&Wa(e,""+o):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Va.hasOwnProperty(i)?o!=null&&i==="onScroll"&&z("scroll",e):o!=null&&Ci(e,i,o,n))}switch(a){case"input":Cs(e),En(e,s,!1);break;case"textarea":Cs(e),Dn(e);break;case"option":s.value!=null&&e.setAttribute("value",""+kt(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?la(e,!!s.multiple,i,!1):s.defaultValue!=null&&la(e,!!s.multiple,s.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=cl)}switch(a){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)Rc(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(w(166));if(a=At(ls.current),At(Ve.current),Bs(t)){if(s=t.stateNode,a=t.memoizedProps,s[Ge]=t,(i=s.nodeValue!==a)&&(e=ke,e!==null))switch(e.tag){case 3:As(s.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&As(s.nodeValue,a,(e.mode&1)!==0)}i&&(t.flags|=4)}else s=(a.nodeType===9?a:a.ownerDocument).createTextNode(s),s[Ge]=t,t.stateNode=s}return de(t),null;case 13:if($(H),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&we!==null&&t.mode&1&&!(t.flags&128))ac(),ua(),t.flags|=98560,i=!1;else if(i=Bs(t),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[Ge]=t}else ua(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),i=!1}else Ue!==null&&(vi(Ue),Ue=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=a,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?ee===0&&(ee=3):on())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return ha(),ni(e,t),e===null&&es(t.stateNode.containerInfo),de(t),null;case 10:return Hi(t.type._context),de(t),null;case 17:return Ne(t.type)&&ml(),de(t),null;case 19:if($(H),i=t.memoizedState,i===null)return de(t),null;if(s=(t.flags&128)!==0,n=i.rendering,n===null)if(s)Da(i,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(n=gl(e),n!==null){for(t.flags|=128,Da(i,!1),s=n.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=a,a=t.child;a!==null;)i=a,e=s,i.flags&=14680066,n=i.alternate,n===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=n.childLanes,i.lanes=n.lanes,i.child=n.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=n.memoizedProps,i.memoizedState=n.memoizedState,i.updateQueue=n.updateQueue,i.type=n.type,e=n.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return K(H,H.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>fa&&(t.flags|=128,s=!0,Da(i,!1),t.lanes=4194304)}else{if(!s)if(e=gl(n),e!==null){if(t.flags|=128,s=!0,a=e.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),Da(i,!0),i.tail===null&&i.tailMode==="hidden"&&!n.alternate&&!G)return de(t),null}else 2*Q()-i.renderingStartTime>fa&&a!==1073741824&&(t.flags|=128,s=!0,Da(i,!1),t.lanes=4194304);i.isBackwards?(n.sibling=t.child,t.child=n):(a=i.last,a!==null?a.sibling=n:t.child=n,i.last=n)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,a=H.current,K(H,s?a&1|2:a&1),t):(de(t),null);case 22:case 23:return dn(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?ye&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Fp(e,t){switch(Ki(t),t.tag){case 1:return Ne(t.type)&&ml(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ha(),$(ge),$(ce),Ji(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xi(t),null;case 13:if($(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(H),null;case 4:return ha(),null;case 10:return Hi(t.type._context),null;case 22:case 23:return dn(),null;case 24:return null;default:return null}}var Rs=!1,oe=!1,Pp=typeof WeakSet=="function"?WeakSet:Set,j=null;function aa(e,t){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(s){X(e,t,s)}else a.current=null}function di(e,t,a){try{a()}catch(s){X(e,t,s)}}var Nd=!1;function Ap(e,t){if(Hr=nl,e=$o(),Li(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var r=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var n=0,d=-1,o=-1,c=0,h=0,v=e,f=null;t:for(;;){for(var x;v!==a||r!==0&&v.nodeType!==3||(d=n+r),v!==i||s!==0&&v.nodeType!==3||(o=n+s),v.nodeType===3&&(n+=v.nodeValue.length),(x=v.firstChild)!==null;)f=v,v=x;for(;;){if(v===e)break t;if(f===a&&++c===r&&(d=n),f===i&&++h===s&&(o=n),(x=v.nextSibling)!==null)break;v=f,f=v.parentNode}v=x}a=d===-1||o===-1?null:{start:d,end:o}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vr={focusedElem:e,selectionRange:a},nl=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var y=N.memoizedProps,S=N.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ae(t.type,y),S);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var u=t.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(b){X(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return N=Nd,Nd=!1,N}function $a(e,t,a){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&di(t,a,i)}r=r.next}while(r!==s)}}function Ul(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var s=a.create;a.destroy=s()}a=a.next}while(a!==t)}}function oi(e){var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof t=="function"?t(e):t.current=e}}function Lc(e){var t=e.alternate;t!==null&&(e.alternate=null,Lc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[as],delete t[Xr],delete t[fp],delete t[xp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Oc(e){return e.tag===5||e.tag===3||e.tag===4}function bd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Oc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ci(e,t,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=cl));else if(s!==4&&(e=e.child,e!==null))for(ci(e,t,a),e=e.sibling;e!==null;)ci(e,t,a),e=e.sibling}function mi(e,t,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(mi(e,t,a),e=e.sibling;e!==null;)mi(e,t,a),e=e.sibling}var le=null,Be=!1;function dt(e,t,a){for(a=a.child;a!==null;)Kc(e,t,a),a=a.sibling}function Kc(e,t,a){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(El,a)}catch{}switch(a.tag){case 5:oe||aa(a,t);case 6:var s=le,r=Be;le=null,dt(e,t,a),le=s,Be=r,le!==null&&(Be?(e=le,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):le.removeChild(a.stateNode));break;case 18:le!==null&&(Be?(e=le,a=a.stateNode,e.nodeType===8?mr(e.parentNode,a):e.nodeType===1&&mr(e,a),Qa(e)):mr(le,a.stateNode));break;case 4:s=le,r=Be,le=a.stateNode.containerInfo,Be=!0,dt(e,t,a),le=s,Be=r;break;case 0:case 11:case 14:case 15:if(!oe&&(s=a.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){r=s=s.next;do{var i=r,n=i.destroy;i=i.tag,n!==void 0&&(i&2||i&4)&&di(a,t,n),r=r.next}while(r!==s)}dt(e,t,a);break;case 1:if(!oe&&(aa(a,t),s=a.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=a.memoizedProps,s.state=a.memoizedState,s.componentWillUnmount()}catch(d){X(a,t,d)}dt(e,t,a);break;case 21:dt(e,t,a);break;case 22:a.mode&1?(oe=(s=oe)||a.memoizedState!==null,dt(e,t,a),oe=s):dt(e,t,a);break;default:dt(e,t,a)}}function yd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new Pp),t.forEach(function(s){var r=$p.bind(null,e,s);a.has(s)||(a.add(s),s.then(r,r))})}}function Pe(e,t){var a=t.deletions;if(a!==null)for(var s=0;s<a.length;s++){var r=a[s];try{var i=e,n=t,d=n;e:for(;d!==null;){switch(d.tag){case 5:le=d.stateNode,Be=!1;break e;case 3:le=d.stateNode.containerInfo,Be=!0;break e;case 4:le=d.stateNode.containerInfo,Be=!0;break e}d=d.return}if(le===null)throw Error(w(160));Kc(i,n,r),le=null,Be=!1;var o=r.alternate;o!==null&&(o.return=null),r.return=null}catch(c){X(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zc(t,e),t=t.sibling}function zc(e,t){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),ze(e),s&4){try{$a(3,e,e.return),Ul(3,e)}catch(y){X(e,e.return,y)}try{$a(5,e,e.return)}catch(y){X(e,e.return,y)}}break;case 1:Pe(t,e),ze(e),s&512&&a!==null&&aa(a,a.return);break;case 5:if(Pe(t,e),ze(e),s&512&&a!==null&&aa(a,a.return),e.flags&32){var r=e.stateNode;try{Wa(r,"")}catch(y){X(e,e.return,y)}}if(s&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,n=a!==null?a.memoizedProps:i,d=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{d==="input"&&i.type==="radio"&&i.name!=null&&co(r,i),Br(d,n);var c=Br(d,i);for(n=0;n<o.length;n+=2){var h=o[n],v=o[n+1];h==="style"?vo(r,v):h==="dangerouslySetInnerHTML"?po(r,v):h==="children"?Wa(r,v):Ci(r,h,v,c)}switch(d){case"input":Dr(r,i);break;case"textarea":mo(r,i);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?la(r,!!i.multiple,x,!1):f!==!!i.multiple&&(i.defaultValue!=null?la(r,!!i.multiple,i.defaultValue,!0):la(r,!!i.multiple,i.multiple?[]:"",!1))}r[as]=i}catch(y){X(e,e.return,y)}}break;case 6:if(Pe(t,e),ze(e),s&4){if(e.stateNode===null)throw Error(w(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(y){X(e,e.return,y)}}break;case 3:if(Pe(t,e),ze(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Qa(t.containerInfo)}catch(y){X(e,e.return,y)}break;case 4:Pe(t,e),ze(e);break;case 13:Pe(t,e),ze(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(rn=Q())),s&4&&yd(e);break;case 22:if(h=a!==null&&a.memoizedState!==null,e.mode&1?(oe=(c=oe)||h,Pe(t,e),oe=c):Pe(t,e),ze(e),s&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(j=e,h=e.child;h!==null;){for(v=j=h;j!==null;){switch(f=j,x=f.child,f.tag){case 0:case 11:case 14:case 15:$a(4,f,f.return);break;case 1:aa(f,f.return);var N=f.stateNode;if(typeof N.componentWillUnmount=="function"){s=f,a=f.return;try{t=s,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(y){X(s,a,y)}}break;case 5:aa(f,f.return);break;case 22:if(f.memoizedState!==null){kd(v);continue}}x!==null?(x.return=f,j=x):kd(v)}h=h.sibling}e:for(h=null,v=e;;){if(v.tag===5){if(h===null){h=v;try{r=v.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(d=v.stateNode,o=v.memoizedProps.style,n=o!=null&&o.hasOwnProperty("display")?o.display:null,d.style.display=ho("display",n))}catch(y){X(e,e.return,y)}}}else if(v.tag===6){if(h===null)try{v.stateNode.nodeValue=c?"":v.memoizedProps}catch(y){X(e,e.return,y)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;h===v&&(h=null),v=v.return}h===v&&(h=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Pe(t,e),ze(e),s&4&&yd(e);break;case 21:break;default:Pe(t,e),ze(e)}}function ze(e){var t=e.flags;if(t&2){try{e:{for(var a=e.return;a!==null;){if(Oc(a)){var s=a;break e}a=a.return}throw Error(w(160))}switch(s.tag){case 5:var r=s.stateNode;s.flags&32&&(Wa(r,""),s.flags&=-33);var i=bd(e);mi(e,i,r);break;case 3:case 4:var n=s.stateNode.containerInfo,d=bd(e);ci(e,d,n);break;default:throw Error(w(161))}}catch(o){X(e,e.return,o)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bp(e,t,a){j=e,$c(e)}function $c(e,t,a){for(var s=(e.mode&1)!==0;j!==null;){var r=j,i=r.child;if(r.tag===22&&s){var n=r.memoizedState!==null||Rs;if(!n){var d=r.alternate,o=d!==null&&d.memoizedState!==null||oe;d=Rs;var c=oe;if(Rs=n,(oe=o)&&!c)for(j=r;j!==null;)n=j,o=n.child,n.tag===22&&n.memoizedState!==null?Sd(r):o!==null?(o.return=n,j=o):Sd(r);for(;i!==null;)j=i,$c(i),i=i.sibling;j=r,Rs=d,oe=c}wd(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,j=i):wd(e)}}function wd(e){for(;j!==null;){var t=j;if(t.flags&8772){var a=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||Ul(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!oe)if(a===null)s.componentDidMount();else{var r=t.elementType===t.type?a.memoizedProps:Ae(t.type,a.memoizedProps);s.componentDidUpdate(r,a.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&id(t,i,s);break;case 3:var n=t.updateQueue;if(n!==null){if(a=null,t.child!==null)switch(t.child.tag){case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}id(t,n,a)}break;case 5:var d=t.stateNode;if(a===null&&t.flags&4){a=d;var o=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&a.focus();break;case"img":o.src&&(a.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var v=h.dehydrated;v!==null&&Qa(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}oe||t.flags&512&&oi(t)}catch(f){X(t,t.return,f)}}if(t===e){j=null;break}if(a=t.sibling,a!==null){a.return=t.return,j=a;break}j=t.return}}function kd(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}function Sd(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var a=t.return;try{Ul(4,t)}catch(o){X(t,a,o)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var r=t.return;try{s.componentDidMount()}catch(o){X(t,r,o)}}var i=t.return;try{oi(t)}catch(o){X(t,i,o)}break;case 5:var n=t.return;try{oi(t)}catch(o){X(t,n,o)}}}catch(o){X(t,t.return,o)}if(t===e){j=null;break}var d=t.sibling;if(d!==null){d.return=t.return,j=d;break}j=t.return}}var Up=Math.ceil,yl=it.ReactCurrentDispatcher,sn=it.ReactCurrentOwner,De=it.ReactCurrentBatchConfig,L=0,se=null,q=null,re=0,ye=0,sa=Ct(0),ee=0,ds=null,Ot=0,Il=0,ln=0,Ga=null,fe=null,rn=0,fa=1/0,Xe=null,wl=!1,ui=null,bt=null,Ls=!1,ht=null,kl=0,Ha=0,pi=null,Qs=-1,qs=0;function ue(){return L&6?Q():Qs!==-1?Qs:Qs=Q()}function yt(e){return e.mode&1?L&2&&re!==0?re&-re:Np.transition!==null?(qs===0&&(qs=_o()),qs):(e=O,e!==0||(e=window.event,e=e===void 0?16:Ao(e.type)),e):1}function Re(e,t,a,s){if(50<Ha)throw Ha=0,pi=null,Error(w(185));us(e,a,s),(!(L&2)||e!==se)&&(e===se&&(!(L&2)&&(Il|=a),ee===4&&ut(e,re)),be(e,s),a===1&&L===0&&!(t.mode&1)&&(fa=Q()+500,Pl&&_t()))}function be(e,t){var a=e.callbackNode;Nu(e,t);var s=il(e,e===se?re:0);if(s===0)a!==null&&Pn(a),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(a!=null&&Pn(a),t===1)e.tag===0?gp(jd.bind(null,e)):Zo(jd.bind(null,e)),hp(function(){!(L&6)&&_t()}),a=null;else{switch(Eo(s)){case 1:a=Ti;break;case 4:a=jo;break;case 16:a=rl;break;case 536870912:a=Co;break;default:a=rl}a=Qc(a,Gc.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function Gc(e,t){if(Qs=-1,qs=0,L&6)throw Error(w(327));var a=e.callbackNode;if(oa()&&e.callbackNode!==a)return null;var s=il(e,e===se?re:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Sl(e,s);else{t=s;var r=L;L|=2;var i=Vc();(se!==e||re!==t)&&(Xe=null,fa=Q()+500,Bt(e,t));do try{Lp();break}catch(d){Hc(e,d)}while(1);Gi(),yl.current=i,L=r,q!==null?t=0:(se=null,re=0,t=ee)}if(t!==0){if(t===2&&(r=Or(e),r!==0&&(s=r,t=hi(e,r))),t===1)throw a=ds,Bt(e,0),ut(e,s),be(e,Q()),a;if(t===6)ut(e,s);else{if(r=e.current.alternate,!(s&30)&&!Ip(r)&&(t=Sl(e,s),t===2&&(i=Or(e),i!==0&&(s=i,t=hi(e,i))),t===1))throw a=ds,Bt(e,0),ut(e,s),be(e,Q()),a;switch(e.finishedWork=r,e.finishedLanes=s,t){case 0:case 1:throw Error(w(345));case 2:Tt(e,fe,Xe);break;case 3:if(ut(e,s),(s&130023424)===s&&(t=rn+500-Q(),10<t)){if(il(e,0)!==0)break;if(r=e.suspendedLanes,(r&s)!==s){ue(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Yr(Tt.bind(null,e,fe,Xe),t);break}Tt(e,fe,Xe);break;case 4:if(ut(e,s),(s&4194240)===s)break;for(t=e.eventTimes,r=-1;0<s;){var n=31-Ie(s);i=1<<n,n=t[n],n>r&&(r=n),s&=~i}if(s=r,s=Q()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Up(s/1960))-s,10<s){e.timeoutHandle=Yr(Tt.bind(null,e,fe,Xe),s);break}Tt(e,fe,Xe);break;case 5:Tt(e,fe,Xe);break;default:throw Error(w(329))}}}return be(e,Q()),e.callbackNode===a?Gc.bind(null,e):null}function hi(e,t){var a=Ga;return e.current.memoizedState.isDehydrated&&(Bt(e,t).flags|=256),e=Sl(e,t),e!==2&&(t=fe,fe=a,t!==null&&vi(t)),e}function vi(e){fe===null?fe=e:fe.push.apply(fe,e)}function Ip(e){for(var t=e;;){if(t.flags&16384){var a=t.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var s=0;s<a.length;s++){var r=a[s],i=r.getSnapshot;r=r.value;try{if(!Le(i(),r))return!1}catch{return!1}}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~ln,t&=~Il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var a=31-Ie(t),s=1<<a;e[a]=-1,t&=~s}}function jd(e){if(L&6)throw Error(w(327));oa();var t=il(e,0);if(!(t&1))return be(e,Q()),null;var a=Sl(e,t);if(e.tag!==0&&a===2){var s=Or(e);s!==0&&(t=s,a=hi(e,s))}if(a===1)throw a=ds,Bt(e,0),ut(e,t),be(e,Q()),a;if(a===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tt(e,fe,Xe),be(e,Q()),null}function nn(e,t){var a=L;L|=1;try{return e(t)}finally{L=a,L===0&&(fa=Q()+500,Pl&&_t())}}function Kt(e){ht!==null&&ht.tag===0&&!(L&6)&&oa();var t=L;L|=1;var a=De.transition,s=O;try{if(De.transition=null,O=1,e)return e()}finally{O=s,De.transition=a,L=t,!(L&6)&&_t()}}function dn(){ye=sa.current,$(sa)}function Bt(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,pp(a)),q!==null)for(a=q.return;a!==null;){var s=a;switch(Ki(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&ml();break;case 3:ha(),$(ge),$(ce),Ji();break;case 5:Xi(s);break;case 4:ha();break;case 13:$(H);break;case 19:$(H);break;case 10:Hi(s.type._context);break;case 22:case 23:dn()}a=a.return}if(se=e,q=e=wt(e.current,null),re=ye=t,ee=0,ds=null,ln=Il=Ot=0,fe=Ga=null,Pt!==null){for(t=0;t<Pt.length;t++)if(a=Pt[t],s=a.interleaved,s!==null){a.interleaved=null;var r=s.next,i=a.pending;if(i!==null){var n=i.next;i.next=r,s.next=n}a.pending=s}Pt=null}return e}function Hc(e,t){do{var a=q;try{if(Gi(),Ys.current=bl,Nl){for(var s=V.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}Nl=!1}if(Lt=0,ae=Z=V=null,za=!1,rs=0,sn.current=null,a===null||a.return===null){ee=1,ds=t,q=null;break}e:{var i=e,n=a.return,d=a,o=t;if(t=re,d.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var c=o,h=d,v=h.tag;if(!(h.mode&1)&&(v===0||v===11||v===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=ud(n);if(x!==null){x.flags&=-257,pd(x,n,d,i,t),x.mode&1&&md(i,c,t),t=x,o=c;var N=t.updateQueue;if(N===null){var y=new Set;y.add(o),t.updateQueue=y}else N.add(o);break e}else{if(!(t&1)){md(i,c,t),on();break e}o=Error(w(426))}}else if(G&&d.mode&1){var S=ud(n);if(S!==null){!(S.flags&65536)&&(S.flags|=256),pd(S,n,d,i,t),zi(va(o,d));break e}}i=o=va(o,d),ee!==4&&(ee=2),Ga===null?Ga=[i]:Ga.push(i),i=n;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Ec(i,o,t);rd(i,p);break e;case 1:d=o;var m=i.type,u=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(bt===null||!bt.has(u)))){i.flags|=65536,t&=-t,i.lanes|=t;var b=Mc(i,d,t);rd(i,b);break e}}i=i.return}while(i!==null)}Yc(a)}catch(k){t=k,q===a&&a!==null&&(q=a=a.return);continue}break}while(1)}function Vc(){var e=yl.current;return yl.current=bl,e===null?bl:e}function on(){(ee===0||ee===3||ee===2)&&(ee=4),se===null||!(Ot&268435455)&&!(Il&268435455)||ut(se,re)}function Sl(e,t){var a=L;L|=2;var s=Vc();(se!==e||re!==t)&&(Xe=null,Bt(e,t));do try{Rp();break}catch(r){Hc(e,r)}while(1);if(Gi(),L=a,yl.current=s,q!==null)throw Error(w(261));return se=null,re=0,ee}function Rp(){for(;q!==null;)Wc(q)}function Lp(){for(;q!==null&&!cu();)Wc(q)}function Wc(e){var t=Jc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?Yc(e):q=t,sn.current=null}function Yc(e){var t=e;do{var a=t.alternate;if(e=t.return,t.flags&32768){if(a=Fp(a,t),a!==null){a.flags&=32767,q=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,q=null;return}}else if(a=Tp(a,t,ye),a!==null){q=a;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);ee===0&&(ee=5)}function Tt(e,t,a){var s=O,r=De.transition;try{De.transition=null,O=1,Op(e,t,a,s)}finally{De.transition=r,O=s}return null}function Op(e,t,a,s){do oa();while(ht!==null);if(L&6)throw Error(w(327));a=e.finishedWork;var r=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=a.lanes|a.childLanes;if(bu(e,i),e===se&&(q=se=null,re=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Ls||(Ls=!0,Qc(rl,function(){return oa(),null})),i=(a.flags&15990)!==0,a.subtreeFlags&15990||i){i=De.transition,De.transition=null;var n=O;O=1;var d=L;L|=4,sn.current=null,Ap(e,a),zc(a,e),ip(Vr),nl=!!Hr,Vr=Hr=null,e.current=a,Bp(a),mu(),L=d,O=n,De.transition=i}else e.current=a;if(Ls&&(Ls=!1,ht=e,kl=r),i=e.pendingLanes,i===0&&(bt=null),hu(a.stateNode),be(e,Q()),t!==null)for(s=e.onRecoverableError,a=0;a<t.length;a++)r=t[a],s(r.value,{componentStack:r.stack,digest:r.digest});if(wl)throw wl=!1,e=ui,ui=null,e;return kl&1&&e.tag!==0&&oa(),i=e.pendingLanes,i&1?e===pi?Ha++:(Ha=0,pi=e):Ha=0,_t(),null}function oa(){if(ht!==null){var e=Eo(kl),t=De.transition,a=O;try{if(De.transition=null,O=16>e?16:e,ht===null)var s=!1;else{if(e=ht,ht=null,kl=0,L&6)throw Error(w(331));var r=L;for(L|=4,j=e.current;j!==null;){var i=j,n=i.child;if(j.flags&16){var d=i.deletions;if(d!==null){for(var o=0;o<d.length;o++){var c=d[o];for(j=c;j!==null;){var h=j;switch(h.tag){case 0:case 11:case 15:$a(8,h,i)}var v=h.child;if(v!==null)v.return=h,j=v;else for(;j!==null;){h=j;var f=h.sibling,x=h.return;if(Lc(h),h===c){j=null;break}if(f!==null){f.return=x,j=f;break}j=x}}}var N=i.alternate;if(N!==null){var y=N.child;if(y!==null){N.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}j=i}}if(i.subtreeFlags&2064&&n!==null)n.return=i,j=n;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:$a(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,j=p;break e}j=i.return}}var m=e.current;for(j=m;j!==null;){n=j;var u=n.child;if(n.subtreeFlags&2064&&u!==null)u.return=n,j=u;else e:for(n=m;j!==null;){if(d=j,d.flags&2048)try{switch(d.tag){case 0:case 11:case 15:Ul(9,d)}}catch(k){X(d,d.return,k)}if(d===n){j=null;break e}var b=d.sibling;if(b!==null){b.return=d.return,j=b;break e}j=d.return}}if(L=r,_t(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(El,e)}catch{}s=!0}return s}finally{O=a,De.transition=t}}return!1}function Cd(e,t,a){t=va(a,t),t=Ec(e,t,1),e=Nt(e,t,1),t=ue(),e!==null&&(us(e,1,t),be(e,t))}function X(e,t,a){if(e.tag===3)Cd(e,e,a);else for(;t!==null;){if(t.tag===3){Cd(t,e,a);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(bt===null||!bt.has(s))){e=va(a,e),e=Mc(t,e,1),t=Nt(t,e,1),e=ue(),t!==null&&(us(t,1,e),be(t,e));break}}t=t.return}}function Kp(e,t,a){var s=e.pingCache;s!==null&&s.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&a,se===e&&(re&a)===a&&(ee===4||ee===3&&(re&130023424)===re&&500>Q()-rn?Bt(e,0):ln|=a),be(e,t)}function Xc(e,t){t===0&&(e.mode&1?(t=Ms,Ms<<=1,!(Ms&130023424)&&(Ms=4194304)):t=1);var a=ue();e=st(e,t),e!==null&&(us(e,t,a),be(e,a))}function zp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Xc(e,a)}function $p(e,t){var a=0;switch(e.tag){case 13:var s=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(w(314))}s!==null&&s.delete(t),Xc(e,a)}var Jc;Jc=function(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)xe=!0;else{if(!(e.lanes&a)&&!(t.flags&128))return xe=!1,Dp(e,t,a);xe=!!(e.flags&131072)}else xe=!1,G&&t.flags&1048576&&ec(t,hl,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Js(e,t),e=t.pendingProps;var r=ma(t,ce.current);da(t,a),r=qi(null,t,s,e,r,a);var i=Zi();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(s)?(i=!0,ul(t)):i=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Wi(t),r.updater=Bl,t.stateNode=r,r._reactInternals=t,ti(t,s,e,a),t=li(null,t,s,!0,i,a)):(t.tag=0,G&&i&&Oi(t),me(null,t,r,a),t=t.child),t;case 16:s=t.elementType;e:{switch(Js(e,t),e=t.pendingProps,r=s._init,s=r(s._payload),t.type=s,r=t.tag=Hp(s),e=Ae(s,e),r){case 0:t=si(null,t,s,e,a);break e;case 1:t=fd(null,t,s,e,a);break e;case 11:t=hd(null,t,s,e,a);break e;case 14:t=vd(null,t,s,Ae(s.type,e),a);break e}throw Error(w(306,s,""))}return t;case 0:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:Ae(s,r),si(e,t,s,r,a);case 1:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:Ae(s,r),fd(e,t,s,r,a);case 3:e:{if(Pc(t),e===null)throw Error(w(387));s=t.pendingProps,i=t.memoizedState,r=i.element,ic(e,t),xl(t,s,null,a);var n=t.memoizedState;if(s=n.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:n.cache,pendingSuspenseBoundaries:n.pendingSuspenseBoundaries,transitions:n.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){r=va(Error(w(423)),t),t=xd(e,t,s,a,r);break e}else if(s!==r){r=va(Error(w(424)),t),t=xd(e,t,s,a,r);break e}else for(we=gt(t.stateNode.containerInfo.firstChild),ke=t,G=!0,Ue=null,a=lc(t,null,s,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ua(),s===r){t=lt(e,t,a);break e}me(e,t,s,a)}t=t.child}return t;case 5:return nc(t),e===null&&qr(t),s=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,n=r.children,Wr(s,r)?n=null:i!==null&&Wr(s,i)&&(t.flags|=32),Fc(e,t),me(e,t,n,a),t.child;case 6:return e===null&&qr(t),null;case 13:return Ac(e,t,a);case 4:return Yi(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=pa(t,null,s,a):me(e,t,s,a),t.child;case 11:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:Ae(s,r),hd(e,t,s,r,a);case 7:return me(e,t,t.pendingProps,a),t.child;case 8:return me(e,t,t.pendingProps.children,a),t.child;case 12:return me(e,t,t.pendingProps.children,a),t.child;case 10:e:{if(s=t.type._context,r=t.pendingProps,i=t.memoizedProps,n=r.value,K(vl,s._currentValue),s._currentValue=n,i!==null)if(Le(i.value,n)){if(i.children===r.children&&!ge.current){t=lt(e,t,a);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var d=i.dependencies;if(d!==null){n=i.child;for(var o=d.firstContext;o!==null;){if(o.context===s){if(i.tag===1){o=Ze(-1,a&-a),o.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?o.next=o:(o.next=h.next,h.next=o),c.pending=o}}i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),Zr(i.return,a,t),d.lanes|=a;break}o=o.next}}else if(i.tag===10)n=i.type===t.type?null:i.child;else if(i.tag===18){if(n=i.return,n===null)throw Error(w(341));n.lanes|=a,d=n.alternate,d!==null&&(d.lanes|=a),Zr(n,a,t),n=i.sibling}else n=i.child;if(n!==null)n.return=i;else for(n=i;n!==null;){if(n===t){n=null;break}if(i=n.sibling,i!==null){i.return=n.return,n=i;break}n=n.return}i=n}me(e,t,r.children,a),t=t.child}return t;case 9:return r=t.type,s=t.pendingProps.children,da(t,a),r=Te(r),s=s(r),t.flags|=1,me(e,t,s,a),t.child;case 14:return s=t.type,r=Ae(s,t.pendingProps),r=Ae(s.type,r),vd(e,t,s,r,a);case 15:return Dc(e,t,t.type,t.pendingProps,a);case 17:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:Ae(s,r),Js(e,t),t.tag=1,Ne(s)?(e=!0,ul(t)):e=!1,da(t,a),_c(t,s,r),ti(t,s,r,a),li(null,t,s,!0,e,a);case 19:return Bc(e,t,a);case 22:return Tc(e,t,a)}throw Error(w(156,t.tag))};function Qc(e,t){return So(e,t)}function Gp(e,t,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,a,s){return new Gp(e,t,a,s)}function cn(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hp(e){if(typeof e=="function")return cn(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ei)return 11;if(e===Mi)return 14}return 2}function wt(e,t){var a=e.alternate;return a===null?(a=Me(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function Zs(e,t,a,s,r,i){var n=2;if(s=e,typeof e=="function")cn(e)&&(n=1);else if(typeof e=="string")n=5;else e:switch(e){case Wt:return Ut(a.children,r,i,t);case _i:n=8,r|=8;break;case jr:return e=Me(12,a,t,r|2),e.elementType=jr,e.lanes=i,e;case Cr:return e=Me(13,a,t,r),e.elementType=Cr,e.lanes=i,e;case _r:return e=Me(19,a,t,r),e.elementType=_r,e.lanes=i,e;case io:return Rl(a,r,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lo:n=10;break e;case ro:n=9;break e;case Ei:n=11;break e;case Mi:n=14;break e;case ot:n=16,s=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Me(n,a,t,r),t.elementType=e,t.type=s,t.lanes=i,t}function Ut(e,t,a,s){return e=Me(7,e,s,t),e.lanes=a,e}function Rl(e,t,a,s){return e=Me(22,e,s,t),e.elementType=io,e.lanes=a,e.stateNode={isHidden:!1},e}function Nr(e,t,a){return e=Me(6,e,null,t),e.lanes=a,e}function br(e,t,a){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vp(e,t,a,s,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=er(0),this.expirationTimes=er(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=er(0),this.identifierPrefix=s,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function mn(e,t,a,s,r,i,n,d,o){return e=new Vp(e,t,a,d,o),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Me(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wi(i),e}function Wp(e,t,a){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:s==null?null:""+s,children:e,containerInfo:t,implementation:a}}function qc(e){if(!e)return St;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var a=e.type;if(Ne(a))return qo(e,a,t)}return t}function Zc(e,t,a,s,r,i,n,d,o){return e=mn(a,s,!0,e,r,i,n,d,o),e.context=qc(null),a=e.current,s=ue(),r=yt(a),i=Ze(s,r),i.callback=t??null,Nt(a,i,r),e.current.lanes=r,us(e,r,s),be(e,s),e}function Ll(e,t,a,s){var r=t.current,i=ue(),n=yt(r);return a=qc(a),t.context===null?t.context=a:t.pendingContext=a,t=Ze(i,n),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Nt(r,t,n),e!==null&&(Re(e,r,n,i),Ws(e,r,n)),n}function jl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _d(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function un(e,t){_d(e,t),(e=e.alternate)&&_d(e,t)}function Yp(){return null}var em=typeof reportError=="function"?reportError:function(e){console.error(e)};function pn(e){this._internalRoot=e}Ol.prototype.render=pn.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Ll(e,t,null,null)};Ol.prototype.unmount=pn.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kt(function(){Ll(null,e,null,null)}),t[at]=null}};function Ol(e){this._internalRoot=e}Ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=To();e={blockedOn:null,target:e,priority:t};for(var a=0;a<mt.length&&t!==0&&t<mt[a].priority;a++);mt.splice(a,0,e),a===0&&Po(e)}};function hn(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ed(){}function Xp(e,t,a,s,r){if(r){if(typeof s=="function"){var i=s;s=function(){var c=jl(n);i.call(c)}}var n=Zc(t,s,e,0,null,!1,!1,"",Ed);return e._reactRootContainer=n,e[at]=n.current,es(e.nodeType===8?e.parentNode:e),Kt(),n}for(;r=e.lastChild;)e.removeChild(r);if(typeof s=="function"){var d=s;s=function(){var c=jl(o);d.call(c)}}var o=mn(e,0,!1,null,null,!1,!1,"",Ed);return e._reactRootContainer=o,e[at]=o.current,es(e.nodeType===8?e.parentNode:e),Kt(function(){Ll(t,o,a,s)}),o}function zl(e,t,a,s,r){var i=a._reactRootContainer;if(i){var n=i;if(typeof r=="function"){var d=r;r=function(){var o=jl(n);d.call(o)}}Ll(t,n,e,r)}else n=Xp(a,t,e,r,s);return jl(n)}Mo=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var a=Ba(t.pendingLanes);a!==0&&(Fi(t,a|1),be(t,Q()),!(L&6)&&(fa=Q()+500,_t()))}break;case 13:Kt(function(){var s=st(e,1);if(s!==null){var r=ue();Re(s,e,1,r)}}),un(e,1)}};Pi=function(e){if(e.tag===13){var t=st(e,134217728);if(t!==null){var a=ue();Re(t,e,134217728,a)}un(e,134217728)}};Do=function(e){if(e.tag===13){var t=yt(e),a=st(e,t);if(a!==null){var s=ue();Re(a,e,t,s)}un(e,t)}};To=function(){return O};Fo=function(e,t){var a=O;try{return O=e,t()}finally{O=a}};Ir=function(e,t,a){switch(t){case"input":if(Dr(e,a),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<a.length;t++){var s=a[t];if(s!==e&&s.form===e.form){var r=Fl(s);if(!r)throw Error(w(90));oo(s),Dr(s,r)}}}break;case"textarea":mo(e,a);break;case"select":t=a.value,t!=null&&la(e,!!a.multiple,t,!1)}};go=nn;No=Kt;var Jp={usingClientEntryPoint:!1,Events:[hs,Qt,Fl,fo,xo,nn]},Ta={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qp={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wo(e),e===null?null:e.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||Yp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Os.isDisabled&&Os.supportsFiber)try{El=Os.inject(Qp),He=Os}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jp;je.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hn(t))throw Error(w(200));return Wp(e,t,null,a)};je.createRoot=function(e,t){if(!hn(e))throw Error(w(299));var a=!1,s="",r=em;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=mn(e,1,!1,null,null,a,!1,s,r),e[at]=t.current,es(e.nodeType===8?e.parentNode:e),new pn(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=wo(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Kt(e)};je.hydrate=function(e,t,a){if(!Kl(t))throw Error(w(200));return zl(null,e,t,!0,a)};je.hydrateRoot=function(e,t,a){if(!hn(e))throw Error(w(405));var s=a!=null&&a.hydratedSources||null,r=!1,i="",n=em;if(a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(n=a.onRecoverableError)),t=Zc(t,null,e,1,a??null,r,!1,i,n),e[at]=t.current,es(e),s)for(e=0;e<s.length;e++)a=s[e],r=a._getVersion,r=r(a._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[a,r]:t.mutableSourceEagerHydrationData.push(a,r);return new Ol(t)};je.render=function(e,t,a){if(!Kl(t))throw Error(w(200));return zl(null,e,t,!1,a)};je.unmountComponentAtNode=function(e){if(!Kl(e))throw Error(w(40));return e._reactRootContainer?(Kt(function(){zl(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1};je.unstable_batchedUpdates=nn;je.unstable_renderSubtreeIntoContainer=function(e,t,a,s){if(!Kl(a))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return zl(e,t,a,!1,s)};je.version="18.3.1-next-f1338f8080-20240426";function tm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tm)}catch(e){console.error(e)}}tm(),eo.exports=je;var qp=eo.exports,Md=qp;kr.createRoot=Md.createRoot,kr.hydrateRoot=Md.hydrateRoot;const Zp="modulepreload",eh=function(e){return"/"+e},Dd={},th=function(t,a,s){if(!a||a.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(a.map(i=>{if(i=eh(i),i in Dd)return;Dd[i]=!0;const n=i.endsWith(".css"),d=n?'[rel="stylesheet"]':"";if(!!s)for(let h=r.length-1;h>=0;h--){const v=r[h];if(v.href===i&&(!n||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${d}`))return;const c=document.createElement("link");if(c.rel=n?"stylesheet":Zp,n||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),n)return new Promise((h,v)=>{c.addEventListener("load",h),c.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=i,window.dispatchEvent(n),!n.defaultPrevented)throw i})};var Td="popstate";function ah(e={}){function t(s,r){let{pathname:i,search:n,hash:d}=s.location;return fi("",{pathname:i,search:n,hash:d},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function a(s,r){return typeof r=="string"?r:os(r)}return lh(t,a,null,e)}function W(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Oe(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function sh(){return Math.random().toString(36).substring(2,10)}function Fd(e,t){return{usr:e.state,key:e.key,idx:t}}function fi(e,t,a=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?ba(t):t,state:a,key:t&&t.key||s||sh()}}function os({pathname:e="/",search:t="",hash:a=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function ba(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substring(a),e=e.substring(0,a));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function lh(e,t,a,s={}){let{window:r=document.defaultView,v5Compat:i=!1}=s,n=r.history,d="POP",o=null,c=h();c==null&&(c=0,n.replaceState({...n.state,idx:c},""));function h(){return(n.state||{idx:null}).idx}function v(){d="POP";let S=h(),p=S==null?null:S-c;c=S,o&&o({action:d,location:y.location,delta:p})}function f(S,p){d="PUSH";let m=fi(y.location,S,p);a&&a(m,S),c=h()+1;let u=Fd(m,c),b=y.createHref(m);try{n.pushState(u,"",b)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;r.location.assign(b)}i&&o&&o({action:d,location:y.location,delta:1})}function x(S,p){d="REPLACE";let m=fi(y.location,S,p);a&&a(m,S),c=h();let u=Fd(m,c),b=y.createHref(m);n.replaceState(u,"",b),i&&o&&o({action:d,location:y.location,delta:0})}function N(S){return rh(S)}let y={get action(){return d},get location(){return e(r,n)},listen(S){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(Td,v),o=S,()=>{r.removeEventListener(Td,v),o=null}},createHref(S){return t(r,S)},createURL:N,encodeLocation(S){let p=N(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:x,go(S){return n.go(S)}};return y}function rh(e,t=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),W(a,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:os(e);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=a+s),new URL(s,a)}function am(e,t,a="/"){return ih(e,t,a,!1)}function ih(e,t,a,s){let r=typeof t=="string"?ba(t):t,i=rt(r.pathname||"/",a);if(i==null)return null;let n=sm(e);nh(n);let d=null;for(let o=0;d==null&&o<n.length;++o){let c=gh(i);d=fh(n[o],c,s)}return d}function sm(e,t=[],a=[],s="",r=!1){let i=(n,d,o=r,c)=>{let h={relativePath:c===void 0?n.path||"":c,caseSensitive:n.caseSensitive===!0,childrenIndex:d,route:n};if(h.relativePath.startsWith("/")){if(!h.relativePath.startsWith(s)&&o)return;W(h.relativePath.startsWith(s),`Absolute route path "${h.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(s.length)}let v=et([s,h.relativePath]),f=a.concat(h);n.children&&n.children.length>0&&(W(n.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),sm(n.children,t,f,v,o)),!(n.path==null&&!n.index)&&t.push({path:v,score:hh(v,n.index),routesMeta:f})};return e.forEach((n,d)=>{var o;if(n.path===""||!((o=n.path)!=null&&o.includes("?")))i(n,d);else for(let c of lm(n.path))i(n,d,!0,c)}),t}function lm(e){let t=e.split("/");if(t.length===0)return[];let[a,...s]=t,r=a.endsWith("?"),i=a.replace(/\?$/,"");if(s.length===0)return r?[i,""]:[i];let n=lm(s.join("/")),d=[];return d.push(...n.map(o=>o===""?i:[i,o].join("/"))),r&&d.push(...n),d.map(o=>e.startsWith("/")&&o===""?"/":o)}function nh(e){e.sort((t,a)=>t.score!==a.score?a.score-t.score:vh(t.routesMeta.map(s=>s.childrenIndex),a.routesMeta.map(s=>s.childrenIndex)))}var dh=/^:[\w-]+$/,oh=3,ch=2,mh=1,uh=10,ph=-2,Pd=e=>e==="*";function hh(e,t){let a=e.split("/"),s=a.length;return a.some(Pd)&&(s+=ph),t&&(s+=ch),a.filter(r=>!Pd(r)).reduce((r,i)=>r+(dh.test(i)?oh:i===""?mh:uh),s)}function vh(e,t){return e.length===t.length&&e.slice(0,-1).every((s,r)=>s===t[r])?e[e.length-1]-t[t.length-1]:0}function fh(e,t,a=!1){let{routesMeta:s}=e,r={},i="/",n=[];for(let d=0;d<s.length;++d){let o=s[d],c=d===s.length-1,h=i==="/"?t:t.slice(i.length)||"/",v=Cl({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},h),f=o.route;if(!v&&c&&a&&!s[s.length-1].route.index&&(v=Cl({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},h)),!v)return null;Object.assign(r,v.params),n.push({params:r,pathname:et([i,v.pathname]),pathnameBase:kh(et([i,v.pathnameBase])),route:f}),v.pathnameBase!=="/"&&(i=et([i,v.pathnameBase]))}return n}function Cl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,s]=xh(e.path,e.caseSensitive,e.end),r=t.match(a);if(!r)return null;let i=r[0],n=i.replace(/(.)\/+$/,"$1"),d=r.slice(1);return{params:s.reduce((c,{paramName:h,isOptional:v},f)=>{if(h==="*"){let N=d[f]||"";n=i.slice(0,i.length-N.length).replace(/(.)\/+$/,"$1")}const x=d[f];return v&&!x?c[h]=void 0:c[h]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:n,pattern:e}}function xh(e,t=!1,a=!0){Oe(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(n,d,o)=>(s.push({paramName:d,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(s.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),s]}function gh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Oe(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function rt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,s=e.charAt(a);return s&&s!=="/"?null:e.slice(a)||"/"}var Nh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bh=e=>Nh.test(e);function yh(e,t="/"){let{pathname:a,search:s="",hash:r=""}=typeof e=="string"?ba(e):e,i;if(a)if(bh(a))i=a;else{if(a.includes("//")){let n=a;a=a.replace(/\/\/+/g,"/"),Oe(!1,`Pathnames cannot have embedded double slashes - normalizing ${n} -> ${a}`)}a.startsWith("/")?i=Ad(a.substring(1),"/"):i=Ad(a,t)}else i=t;return{pathname:i,search:Sh(s),hash:jh(r)}}function Ad(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?a.length>1&&a.pop():r!=="."&&a.push(r)}),a.length>1?a.join("/"):"/"}function yr(e,t,a,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wh(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function rm(e){let t=wh(e);return t.map((a,s)=>s===t.length-1?a.pathname:a.pathnameBase)}function im(e,t,a,s=!1){let r;typeof e=="string"?r=ba(e):(r={...e},W(!r.pathname||!r.pathname.includes("?"),yr("?","pathname","search",r)),W(!r.pathname||!r.pathname.includes("#"),yr("#","pathname","hash",r)),W(!r.search||!r.search.includes("#"),yr("#","search","hash",r)));let i=e===""||r.pathname==="",n=i?"/":r.pathname,d;if(n==null)d=a;else{let v=t.length-1;if(!s&&n.startsWith("..")){let f=n.split("/");for(;f[0]==="..";)f.shift(),v-=1;r.pathname=f.join("/")}d=v>=0?t[v]:"/"}let o=yh(r,d),c=n&&n!=="/"&&n.endsWith("/"),h=(i||n===".")&&a.endsWith("/");return!o.pathname.endsWith("/")&&(c||h)&&(o.pathname+="/"),o}var et=e=>e.join("/").replace(/\/\/+/g,"/"),kh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Sh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ch(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var nm=["POST","PUT","PATCH","DELETE"];new Set(nm);var _h=["GET",...nm];new Set(_h);var ya=g.createContext(null);ya.displayName="DataRouter";var $l=g.createContext(null);$l.displayName="DataRouterState";g.createContext(!1);var dm=g.createContext({isTransitioning:!1});dm.displayName="ViewTransition";var Eh=g.createContext(new Map);Eh.displayName="Fetchers";var Mh=g.createContext(null);Mh.displayName="Await";var Ye=g.createContext(null);Ye.displayName="Navigation";var fs=g.createContext(null);fs.displayName="Location";var nt=g.createContext({outlet:null,matches:[],isDataRoute:!1});nt.displayName="Route";var vn=g.createContext(null);vn.displayName="RouteError";function Dh(e,{relative:t}={}){W(xs(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:s}=g.useContext(Ye),{hash:r,pathname:i,search:n}=gs(e,{relative:t}),d=i;return a!=="/"&&(d=i==="/"?a:et([a,i])),s.createHref({pathname:d,search:n,hash:r})}function xs(){return g.useContext(fs)!=null}function Gt(){return W(xs(),"useLocation() may be used only in the context of a <Router> component."),g.useContext(fs).location}var om="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function cm(e){g.useContext(Ye).static||g.useLayoutEffect(e)}function Th(){let{isDataRoute:e}=g.useContext(nt);return e?Gh():Fh()}function Fh(){W(xs(),"useNavigate() may be used only in the context of a <Router> component.");let e=g.useContext(ya),{basename:t,navigator:a}=g.useContext(Ye),{matches:s}=g.useContext(nt),{pathname:r}=Gt(),i=JSON.stringify(rm(s)),n=g.useRef(!1);return cm(()=>{n.current=!0}),g.useCallback((o,c={})=>{if(Oe(n.current,om),!n.current)return;if(typeof o=="number"){a.go(o);return}let h=im(o,JSON.parse(i),r,c.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:et([t,h.pathname])),(c.replace?a.replace:a.push)(h,c.state,c)},[t,a,i,r,e])}g.createContext(null);function gs(e,{relative:t}={}){let{matches:a}=g.useContext(nt),{pathname:s}=Gt(),r=JSON.stringify(rm(a));return g.useMemo(()=>im(e,JSON.parse(r),s,t==="path"),[e,r,s,t])}function Ph(e,t){return mm(e,t)}function mm(e,t,a,s,r){var m;W(xs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=g.useContext(Ye),{matches:n}=g.useContext(nt),d=n[n.length-1],o=d?d.params:{},c=d?d.pathname:"/",h=d?d.pathnameBase:"/",v=d&&d.route;{let u=v&&v.path||"";um(c,!v||u.endsWith("*")||u.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${u}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${u}"> to <Route path="${u==="/"?"*":`${u}/*`}">.`)}let f=Gt(),x;if(t){let u=typeof t=="string"?ba(t):t;W(h==="/"||((m=u.pathname)==null?void 0:m.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${u.pathname}" was given in the \`location\` prop.`),x=u}else x=f;let N=x.pathname||"/",y=N;if(h!=="/"){let u=h.replace(/^\//,"").split("/");y="/"+N.replace(/^\//,"").split("/").slice(u.length).join("/")}let S=am(e,{pathname:y});Oe(v||S!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Oe(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let p=Rh(S&&S.map(u=>Object.assign({},u,{params:Object.assign({},o,u.params),pathname:et([h,i.encodeLocation?i.encodeLocation(u.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:u.pathname]),pathnameBase:u.pathnameBase==="/"?h:et([h,i.encodeLocation?i.encodeLocation(u.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:u.pathnameBase])})),n,a,s,r);return t&&p?g.createElement(fs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},p):p}function Ah(){let e=$h(),t=Ch(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:s},i={padding:"2px 4px",backgroundColor:s},n=null;return console.error("Error handled by React Router default ErrorBoundary:",e),n=g.createElement(g.Fragment,null,g.createElement("p",null,"💿 Hey developer 👋"),g.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",g.createElement("code",{style:i},"ErrorBoundary")," or"," ",g.createElement("code",{style:i},"errorElement")," prop on your route.")),g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},t),a?g.createElement("pre",{style:r},a):null,n)}var Bh=g.createElement(Ah,null),Uh=class extends g.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?g.createElement(nt.Provider,{value:this.props.routeContext},g.createElement(vn.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ih({routeContext:e,match:t,children:a}){let s=g.useContext(ya);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),g.createElement(nt.Provider,{value:e},a)}function Rh(e,t=[],a=null,s=null,r=null){if(e==null){if(!a)return null;if(a.errors)e=a.matches;else if(t.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let i=e,n=a==null?void 0:a.errors;if(n!=null){let h=i.findIndex(v=>v.route.id&&(n==null?void 0:n[v.route.id])!==void 0);W(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(n).join(",")}`),i=i.slice(0,Math.min(i.length,h+1))}let d=!1,o=-1;if(a)for(let h=0;h<i.length;h++){let v=i[h];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(o=h),v.route.id){let{loaderData:f,errors:x}=a,N=v.route.loader&&!f.hasOwnProperty(v.route.id)&&(!x||x[v.route.id]===void 0);if(v.route.lazy||N){d=!0,o>=0?i=i.slice(0,o+1):i=[i[0]];break}}}let c=a&&s?(h,v)=>{var f,x;s(h,{location:a.location,params:((x=(f=a.matches)==null?void 0:f[0])==null?void 0:x.params)??{},errorInfo:v})}:void 0;return i.reduceRight((h,v,f)=>{let x,N=!1,y=null,S=null;a&&(x=n&&v.route.id?n[v.route.id]:void 0,y=v.route.errorElement||Bh,d&&(o<0&&f===0?(um("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,S=null):o===f&&(N=!0,S=v.route.hydrateFallbackElement||null)));let p=t.concat(i.slice(0,f+1)),m=()=>{let u;return x?u=y:N?u=S:v.route.Component?u=g.createElement(v.route.Component,null):v.route.element?u=v.route.element:u=h,g.createElement(Ih,{match:v,routeContext:{outlet:h,matches:p,isDataRoute:a!=null},children:u})};return a&&(v.route.ErrorBoundary||v.route.errorElement||f===0)?g.createElement(Uh,{location:a.location,revalidation:a.revalidation,component:y,error:x,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0},onError:c}):m()},null)}function fn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lh(e){let t=g.useContext(ya);return W(t,fn(e)),t}function Oh(e){let t=g.useContext($l);return W(t,fn(e)),t}function Kh(e){let t=g.useContext(nt);return W(t,fn(e)),t}function xn(e){let t=Kh(e),a=t.matches[t.matches.length-1];return W(a.route.id,`${e} can only be used on routes that contain a unique "id"`),a.route.id}function zh(){return xn("useRouteId")}function $h(){var s;let e=g.useContext(vn),t=Oh("useRouteError"),a=xn("useRouteError");return e!==void 0?e:(s=t.errors)==null?void 0:s[a]}function Gh(){let{router:e}=Lh("useNavigate"),t=xn("useNavigate"),a=g.useRef(!1);return cm(()=>{a.current=!0}),g.useCallback(async(r,i={})=>{Oe(a.current,om),a.current&&(typeof r=="number"?e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Bd={};function um(e,t,a){!t&&!Bd[e]&&(Bd[e]=!0,Oe(!1,a))}g.memo(Hh);function Hh({routes:e,future:t,state:a,unstable_onError:s}){return mm(e,void 0,a,s,t)}function P(e){W(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Vh({basename:e="/",children:t=null,location:a,navigationType:s="POP",navigator:r,static:i=!1}){W(!xs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let n=e.replace(/^\/*/,"/"),d=g.useMemo(()=>({basename:n,navigator:r,static:i,future:{}}),[n,r,i]);typeof a=="string"&&(a=ba(a));let{pathname:o="/",search:c="",hash:h="",state:v=null,key:f="default"}=a,x=g.useMemo(()=>{let N=rt(o,n);return N==null?null:{location:{pathname:N,search:c,hash:h,state:v,key:f},navigationType:s}},[n,o,c,h,v,f,s]);return Oe(x!=null,`<Router basename="${n}"> is not able to match the URL "${o}${c}${h}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:g.createElement(Ye.Provider,{value:d},g.createElement(fs.Provider,{children:t,value:x}))}function Wh({children:e,location:t}){return Ph(xi(e),t)}function xi(e,t=[]){let a=[];return g.Children.forEach(e,(s,r)=>{if(!g.isValidElement(s))return;let i=[...t,r];if(s.type===g.Fragment){a.push.apply(a,xi(s.props.children,i));return}W(s.type===P,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),W(!s.props.index||!s.props.children,"An index route cannot have child routes.");let n={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(n.children=xi(s.props.children,i)),a.push(n)}),a}var el="get",tl="application/x-www-form-urlencoded";function Gl(e){return e!=null&&typeof e.tagName=="string"}function Yh(e){return Gl(e)&&e.tagName.toLowerCase()==="button"}function Xh(e){return Gl(e)&&e.tagName.toLowerCase()==="form"}function Jh(e){return Gl(e)&&e.tagName.toLowerCase()==="input"}function Qh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qh(e,t){return e.button===0&&(!t||t==="_self")&&!Qh(e)}var Ks=null;function Zh(){if(Ks===null)try{new FormData(document.createElement("form"),0),Ks=!1}catch{Ks=!0}return Ks}var ev=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wr(e){return e!=null&&!ev.has(e)?(Oe(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tl}"`),null):e}function tv(e,t){let a,s,r,i,n;if(Xh(e)){let d=e.getAttribute("action");s=d?rt(d,t):null,a=e.getAttribute("method")||el,r=wr(e.getAttribute("enctype"))||tl,i=new FormData(e)}else if(Yh(e)||Jh(e)&&(e.type==="submit"||e.type==="image")){let d=e.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let o=e.getAttribute("formaction")||d.getAttribute("action");if(s=o?rt(o,t):null,a=e.getAttribute("formmethod")||d.getAttribute("method")||el,r=wr(e.getAttribute("formenctype"))||wr(d.getAttribute("enctype"))||tl,i=new FormData(d,e),!Zh()){let{name:c,type:h,value:v}=e;if(h==="image"){let f=c?`${c}.`:"";i.append(`${f}x`,"0"),i.append(`${f}y`,"0")}else c&&i.append(c,v)}}else{if(Gl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=el,s=null,r=tl,n=e}return i&&r==="text/plain"&&(n=i,i=void 0),{action:s,method:a.toLowerCase(),encType:r,formData:i,body:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function gn(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function av(e,t,a){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return s.pathname==="/"?s.pathname=`_root.${a}`:t&&rt(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${a}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${a}`,s}async function sv(e,t){if(e.id in t)return t[e.id];try{let a=await th(()=>import(e.module),[]);return t[e.id]=a,a}catch(a){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function lv(e){return e!=null&&typeof e.page=="string"}function rv(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function iv(e,t,a){let s=await Promise.all(e.map(async r=>{let i=t.routes[r.route.id];if(i){let n=await sv(i,a);return n.links?n.links():[]}return[]}));return cv(s.flat(1).filter(rv).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function Ud(e,t,a,s,r,i){let n=(o,c)=>a[c]?o.route.id!==a[c].route.id:!0,d=(o,c)=>{var h;return a[c].pathname!==o.pathname||((h=a[c].route.path)==null?void 0:h.endsWith("*"))&&a[c].params["*"]!==o.params["*"]};return i==="assets"?t.filter((o,c)=>n(o,c)||d(o,c)):i==="data"?t.filter((o,c)=>{var v;let h=s.routes[o.route.id];if(!h||!h.hasLoader)return!1;if(n(o,c)||d(o,c))return!0;if(o.route.shouldRevalidate){let f=o.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((v=a[0])==null?void 0:v.params)||{},nextUrl:new URL(e,window.origin),nextParams:o.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function nv(e,t,{includeHydrateFallback:a}={}){return dv(e.map(s=>{let r=t.routes[s.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),a&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function dv(e){return[...new Set(e)]}function ov(e){let t={},a=Object.keys(e).sort();for(let s of a)t[s]=e[s];return t}function cv(e,t){let a=new Set,s=new Set(t);return e.reduce((r,i)=>{if(t&&!lv(i)&&i.as==="script"&&i.href&&s.has(i.href))return r;let d=JSON.stringify(ov(i));return a.has(d)||(a.add(d),r.push({key:d,link:i})),r},[])}function pm(){let e=g.useContext(ya);return gn(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function mv(){let e=g.useContext($l);return gn(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Nn=g.createContext(void 0);Nn.displayName="FrameworkContext";function hm(){let e=g.useContext(Nn);return gn(e,"You must render this element inside a <HydratedRouter> element"),e}function uv(e,t){let a=g.useContext(Nn),[s,r]=g.useState(!1),[i,n]=g.useState(!1),{onFocus:d,onBlur:o,onMouseEnter:c,onMouseLeave:h,onTouchStart:v}=t,f=g.useRef(null);g.useEffect(()=>{if(e==="render"&&n(!0),e==="viewport"){let y=p=>{p.forEach(m=>{n(m.isIntersecting)})},S=new IntersectionObserver(y,{threshold:.5});return f.current&&S.observe(f.current),()=>{S.disconnect()}}},[e]),g.useEffect(()=>{if(s){let y=setTimeout(()=>{n(!0)},100);return()=>{clearTimeout(y)}}},[s]);let x=()=>{r(!0)},N=()=>{r(!1),n(!1)};return a?e!=="intent"?[i,f,{}]:[i,f,{onFocus:Fa(d,x),onBlur:Fa(o,N),onMouseEnter:Fa(c,x),onMouseLeave:Fa(h,N),onTouchStart:Fa(v,x)}]:[!1,f,{}]}function Fa(e,t){return a=>{e&&e(a),a.defaultPrevented||t(a)}}function pv({page:e,...t}){let{router:a}=pm(),s=g.useMemo(()=>am(a.routes,e,a.basename),[a.routes,e,a.basename]);return s?g.createElement(vv,{page:e,matches:s,...t}):null}function hv(e){let{manifest:t,routeModules:a}=hm(),[s,r]=g.useState([]);return g.useEffect(()=>{let i=!1;return iv(e,t,a).then(n=>{i||r(n)}),()=>{i=!0}},[e,t,a]),s}function vv({page:e,matches:t,...a}){let s=Gt(),{manifest:r,routeModules:i}=hm(),{basename:n}=pm(),{loaderData:d,matches:o}=mv(),c=g.useMemo(()=>Ud(e,t,o,r,s,"data"),[e,t,o,r,s]),h=g.useMemo(()=>Ud(e,t,o,r,s,"assets"),[e,t,o,r,s]),v=g.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let N=new Set,y=!1;if(t.forEach(p=>{var u;let m=r.routes[p.route.id];!m||!m.hasLoader||(!c.some(b=>b.route.id===p.route.id)&&p.route.id in d&&((u=i[p.route.id])!=null&&u.shouldRevalidate)||m.hasClientLoader?y=!0:N.add(p.route.id))}),N.size===0)return[];let S=av(e,n,"data");return y&&N.size>0&&S.searchParams.set("_routes",t.filter(p=>N.has(p.route.id)).map(p=>p.route.id).join(",")),[S.pathname+S.search]},[n,d,s,r,c,t,e,i]),f=g.useMemo(()=>nv(h,r),[h,r]),x=hv(h);return g.createElement(g.Fragment,null,v.map(N=>g.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...a})),f.map(N=>g.createElement("link",{key:N,rel:"modulepreload",href:N,...a})),x.map(({key:N,link:y})=>g.createElement("link",{key:N,nonce:a.nonce,...y})))}function fv(...e){return t=>{e.forEach(a=>{typeof a=="function"?a(t):a!=null&&(a.current=t)})}}var vm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{vm&&(window.__reactRouterVersion="7.9.6")}catch{}function xv({basename:e,children:t,window:a}){let s=g.useRef();s.current==null&&(s.current=ah({window:a,v5Compat:!0}));let r=s.current,[i,n]=g.useState({action:r.action,location:r.location}),d=g.useCallback(o=>{g.startTransition(()=>n(o))},[n]);return g.useLayoutEffect(()=>r.listen(d),[r,d]),g.createElement(Vh,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:r})}var fm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,U=g.forwardRef(function({onClick:t,discover:a="render",prefetch:s="none",relative:r,reloadDocument:i,replace:n,state:d,target:o,to:c,preventScrollReset:h,viewTransition:v,...f},x){let{basename:N}=g.useContext(Ye),y=typeof c=="string"&&fm.test(c),S,p=!1;if(typeof c=="string"&&y&&(S=c,vm))try{let R=new URL(window.location.href),D=c.startsWith("//")?new URL(R.protocol+c):new URL(c),ve=rt(D.pathname,N);D.origin===R.origin&&ve!=null?c=ve+D.search+D.hash:p=!0}catch{Oe(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let m=Dh(c,{relative:r}),[u,b,k]=uv(s,f),E=yv(c,{replace:n,state:d,target:o,preventScrollReset:h,relative:r,viewTransition:v});function _(R){t&&t(R),R.defaultPrevented||E(R)}let M=g.createElement("a",{...f,...k,href:S||m,onClick:p||i?t:_,ref:fv(x,b),target:o,"data-discover":!y&&a==="render"?"true":void 0});return u&&!y?g.createElement(g.Fragment,null,M,g.createElement(pv,{page:m})):M});U.displayName="Link";var gv=g.forwardRef(function({"aria-current":t="page",caseSensitive:a=!1,className:s="",end:r=!1,style:i,to:n,viewTransition:d,children:o,...c},h){let v=gs(n,{relative:c.relative}),f=Gt(),x=g.useContext($l),{navigator:N,basename:y}=g.useContext(Ye),S=x!=null&&Cv(v)&&d===!0,p=N.encodeLocation?N.encodeLocation(v).pathname:v.pathname,m=f.pathname,u=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;a||(m=m.toLowerCase(),u=u?u.toLowerCase():null,p=p.toLowerCase()),u&&y&&(u=rt(u,y)||u);const b=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let k=m===p||!r&&m.startsWith(p)&&m.charAt(b)==="/",E=u!=null&&(u===p||!r&&u.startsWith(p)&&u.charAt(p.length)==="/"),_={isActive:k,isPending:E,isTransitioning:S},M=k?t:void 0,R;typeof s=="function"?R=s(_):R=[s,k?"active":null,E?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let D=typeof i=="function"?i(_):i;return g.createElement(U,{...c,"aria-current":M,className:R,ref:h,style:D,to:n,viewTransition:d},typeof o=="function"?o(_):o)});gv.displayName="NavLink";var Nv=g.forwardRef(({discover:e="render",fetcherKey:t,navigate:a,reloadDocument:s,replace:r,state:i,method:n=el,action:d,onSubmit:o,relative:c,preventScrollReset:h,viewTransition:v,...f},x)=>{let N=Sv(),y=jv(d,{relative:c}),S=n.toLowerCase()==="get"?"get":"post",p=typeof d=="string"&&fm.test(d),m=u=>{if(o&&o(u),u.defaultPrevented)return;u.preventDefault();let b=u.nativeEvent.submitter,k=(b==null?void 0:b.getAttribute("formmethod"))||n;N(b||u.currentTarget,{fetcherKey:t,method:k,navigate:a,replace:r,state:i,relative:c,preventScrollReset:h,viewTransition:v})};return g.createElement("form",{ref:x,method:S,action:y,onSubmit:s?o:m,...f,"data-discover":!p&&e==="render"?"true":void 0})});Nv.displayName="Form";function bv(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xm(e){let t=g.useContext(ya);return W(t,bv(e)),t}function yv(e,{target:t,replace:a,state:s,preventScrollReset:r,relative:i,viewTransition:n}={}){let d=Th(),o=Gt(),c=gs(e,{relative:i});return g.useCallback(h=>{if(qh(h,t)){h.preventDefault();let v=a!==void 0?a:os(o)===os(c);d(e,{replace:v,state:s,preventScrollReset:r,relative:i,viewTransition:n})}},[o,d,c,a,s,t,e,r,i,n])}var wv=0,kv=()=>`__${String(++wv)}__`;function Sv(){let{router:e}=xm("useSubmit"),{basename:t}=g.useContext(Ye),a=zh();return g.useCallback(async(s,r={})=>{let{action:i,method:n,encType:d,formData:o,body:c}=tv(s,t);if(r.navigate===!1){let h=r.fetcherKey||kv();await e.fetch(h,a,r.action||i,{preventScrollReset:r.preventScrollReset,formData:o,body:c,formMethod:r.method||n,formEncType:r.encType||d,flushSync:r.flushSync})}else await e.navigate(r.action||i,{preventScrollReset:r.preventScrollReset,formData:o,body:c,formMethod:r.method||n,formEncType:r.encType||d,replace:r.replace,state:r.state,fromRouteId:a,flushSync:r.flushSync,viewTransition:r.viewTransition})},[e,t,a])}function jv(e,{relative:t}={}){let{basename:a}=g.useContext(Ye),s=g.useContext(nt);W(s,"useFormAction must be used inside a RouteContext");let[r]=s.matches.slice(-1),i={...gs(e||".",{relative:t})},n=Gt();if(e==null){i.search=n.search;let d=new URLSearchParams(i.search),o=d.getAll("index");if(o.some(h=>h==="")){d.delete("index"),o.filter(v=>v).forEach(v=>d.append("index",v));let h=d.toString();i.search=h?`?${h}`:""}}return(!e||e===".")&&r.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(i.pathname=i.pathname==="/"?a:et([a,i.pathname])),os(i)}function Cv(e,{relative:t}={}){let a=g.useContext(dm);W(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=xm("useViewTransitionState"),r=gs(e,{relative:t});if(!a.isTransitioning)return!1;let i=rt(a.currentLocation.pathname,s)||a.currentLocation.pathname,n=rt(a.nextLocation.pathname,s)||a.nextLocation.pathname;return Cl(r.pathname,n)!=null||Cl(r.pathname,i)!=null}/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ev=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,s)=>s?s.toUpperCase():a.toLowerCase()),Id=e=>{const t=Ev(e);return t.charAt(0).toUpperCase()+t.slice(1)},gm=(...e)=>e.filter((t,a,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===a).join(" ").trim(),Mv=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=g.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:r="",children:i,iconNode:n,...d},o)=>g.createElement("svg",{ref:o,...Dv,width:t,height:t,stroke:e,strokeWidth:s?Number(a)*24/Number(t):a,className:gm("lucide",r),...!i&&!Mv(d)&&{"aria-hidden":"true"},...d},[...n.map(([c,h])=>g.createElement(c,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=(e,t)=>{const a=g.forwardRef(({className:s,...r},i)=>g.createElement(Tv,{ref:i,iconNode:t,className:gm(`lucide-${_v(Id(e))}`,`lucide-${e}`,s),...r}));return a.displayName=Id(e),a};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Nm=I("arrow-right",Fv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],bm=I("award",Pv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]],Bv=I("bitcoin",Av);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],Iv=I("building-2",Uv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Lv=I("calendar",Rv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Kv=I("chart-column",Ov);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],$v=I("chevron-down",zv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Hv=I("chevron-right",Gv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],gi=I("circle-alert",Vv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ns=I("circle-check",Wv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ym=I("clock",Yv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],wm=I("coins",Xv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Rd=I("cpu",Jv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],bs=I("credit-card",Qv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Zv=I("dollar-sign",qv);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]],Ld=I("file-check",ef);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],km=I("file-text",tf);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Hl=I("globe",af);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],Od=I("headphones",sf);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Kd=I("lock",lf);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],nf=I("mail",rf);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],of=I("menu",df);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],mf=I("monitor",cf);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],pf=I("search",uf);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],zd=I("settings",hf);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Ke=I("shield",vf);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Ni=I("smartphone",ff);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],gf=I("target",xf);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],bf=I("trending-down",Nf);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],We=I("trending-up",yf);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],kf=I("users",wf);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],cs=I("wallet",Sf);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Cf=I("x",jf);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ys=I("zap",_f);function Ef(){const[e,t]=g.useState(!1),a=[{name:"关于我们",href:"/about"},{name:"交易市场",href:"/markets"},{name:"交易账户",href:"/accounts"},{name:"交易平台",href:"/platforms/metatrader-5"},{name:"联系我们",href:"/contact"}];return l.jsxs("header",{className:"sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gold-600/30",children:[l.jsx("div",{className:"bg-gradient-to-r from-gray-50 via-white to-gray-50 text-gray-700 text-xs py-1.5 hidden sm:block border-b border-gold-200",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center",children:[l.jsx("span",{className:"font-medium",children:"BKS MARKET - 专业外汇交易平台"}),l.jsxs("div",{className:"flex items-center space-x-4",children:[l.jsxs("span",{className:"flex items-center cursor-pointer hover:text-gold-600 transition-colors duration-200",children:[l.jsx(Hl,{className:"w-3 h-3 mr-1"})," 简体中文 ",l.jsx($v,{className:"w-3 h-3 ml-1"})]}),l.jsx("button",{className:"hover:text-gold-600 transition-colors duration-200",children:"登录"})]})]})}),l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"flex justify-between items-center h-16 md:h-20",children:[l.jsx("div",{className:"flex-shrink-0 flex items-center",children:l.jsx(U,{to:"/",className:"flex items-center group",children:l.jsx("img",{src:"/logo.png",alt:"BKS MARKET",className:"h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"})})}),l.jsx("nav",{className:"hidden md:flex space-x-6 lg:space-x-8",children:a.map(s=>l.jsxs(U,{to:s.href,className:"text-gray-700 hover:text-gold-600 font-medium text-sm lg:text-base transition-all duration-200 relative group",children:[s.name,l.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"})]},s.name))}),l.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[l.jsx("button",{className:"text-gray-600 hover:text-gold-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gold-50",children:l.jsx(pf,{className:"w-5 h-5"})}),l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",target:"_blank",rel:"noopener noreferrer",className:"bg-gold-gradient text-black px-5 py-2.5 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 text-sm transform hover:scale-105",children:"立即开户"})]}),l.jsx("div",{className:"md:hidden flex items-center",children:l.jsx("button",{onClick:()=>t(!e),className:"text-gray-700 hover:text-gold-600 p-2",children:e?l.jsx(Cf,{className:"w-6 h-6"}):l.jsx(of,{className:"w-6 h-6"})})})]})}),e&&l.jsx("div",{className:"md:hidden bg-white/98 backdrop-blur-sm border-t border-gold-200 absolute w-full shadow-xl",children:l.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[a.map(s=>l.jsx(U,{to:s.href,onClick:()=>t(!1),className:"block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gold-50 transition-all duration-200",children:s.name},s.name)),l.jsx("div",{className:"mt-4 px-3",children:l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center bg-gold-gradient text-black px-4 py-3 rounded-lg font-bold hover:shadow-gold transition-all duration-300",children:"立即开户"})})]})})]})}function Mf(){return l.jsxs("footer",{className:"bg-gradient-to-b from-gray-50 to-white text-gray-600 text-sm border-t border-gold-200",children:[l.jsx("div",{className:"border-b border-gold-200",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10",children:l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 items-center",children:[l.jsxs("div",{children:[l.jsx("div",{className:"flex-shrink-0 flex items-center",children:l.jsx(U,{to:"/",className:"flex items-center group",children:l.jsx("img",{src:"/logo.png",alt:"BKS MARKET",className:"h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"})})}),l.jsx("p",{className:"text-gray-600",children:"BKS MARKET 专业外汇交易平台。"})]}),l.jsxs("div",{className:"md:col-span-2 text-center md:text-right",children:[l.jsx("h3",{className:"text-gray-900 text-lg font-bold mb-2",children:"欢迎与我们联络"}),l.jsx("p",{className:"mb-4 text-gray-600",children:"逢交易日 24 小时支持"}),l.jsxs("div",{className:"flex flex-wrap justify-center md:justify-end gap-4",children:[l.jsx(U,{to:"/contact",className:"px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-all duration-200 border border-gray-300 hover:border-gray-400",children:"联系我们"}),l.jsx(U,{to:"/help",className:"px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-all duration-200 border border-gray-300 hover:border-gray-400",children:"常见问题"})]})]})]})})}),l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:l.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[l.jsxs("div",{children:[l.jsx("h4",{className:"text-gray-900 font-bold mb-4",children:"关于我们"}),l.jsxs("ul",{className:"space-y-2",children:[l.jsx("li",{children:l.jsx(U,{to:"/about",className:"hover:text-gray-900 transition-colors duration-200",children:"关于 BKS Markets"})}),l.jsx("li",{children:l.jsx(U,{to:"/why",className:"hover:text-gray-900 transition-colors duration-200",children:"为什么选择 BKS Markets"})}),l.jsx("li",{children:l.jsx(U,{to:"/contact",className:"hover:text-gray-900 transition-colors duration-200",children:"联系我们"})})]})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-gray-900 font-bold mb-4",children:"交易市场"}),l.jsxs("ul",{className:"space-y-2",children:[l.jsx("li",{children:l.jsx(U,{to:"/markets/forex",className:"hover:text-gray-900 transition-colors duration-200",children:"外汇"})}),l.jsx("li",{children:l.jsx(U,{to:"/markets/commodities",className:"hover:text-gray-900 transition-colors duration-200",children:"大宗商品"})}),l.jsx("li",{children:l.jsx(U,{to:"/markets/indices",className:"hover:text-gray-900 transition-colors duration-200",children:"指数交易"})}),l.jsx("li",{children:l.jsx(U,{to:"/markets/stocks",className:"hover:text-gray-900 transition-colors duration-200",children:"股票"})})]})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-gray-900 font-bold mb-4",children:"交易平台"}),l.jsxs("ul",{className:"space-y-2",children:[l.jsx("li",{children:l.jsx(U,{to:"/platforms/metatrader-5",className:"hover:text-gray-900 transition-colors duration-200",children:"MetaTrader 5"})}),l.jsx("li",{children:l.jsx(U,{to:"/platforms/mt5-iphone",className:"hover:text-gray-900 transition-colors duration-200",children:"MT5 iPhone/iPad"})}),l.jsx("li",{children:l.jsx(U,{to:"/platforms/mt5-android",className:"hover:text-gray-900 transition-colors duration-200",children:"MT5 安卓"})}),l.jsx("li",{children:l.jsx(U,{to:"/platforms/mt5-mac",className:"hover:text-gray-900 transition-colors duration-200",children:"MT5 Mac"})})]})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-gray-900 font-bold mb-4",children:"客户服务"}),l.jsxs("ul",{className:"space-y-2",children:[l.jsx("li",{children:l.jsx(U,{to:"/funding",className:"hover:text-gray-900 transition-colors duration-200",children:"账户入金"})}),l.jsx("li",{children:l.jsx(U,{to:"/withdrawal",className:"hover:text-gray-900 transition-colors duration-200",children:"账户出金"})}),l.jsx("li",{children:l.jsx(U,{to:"/help",className:"hover:text-gray-900 transition-colors duration-200",children:"帮助中心"})})]})]})]})}),l.jsx("div",{className:"bg-gray-50 py-8 border-t border-gold-200",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"mb-6 pb-6 border-b border-gray-300",children:[l.jsxs("p",{className:"text-xs text-gray-600 leading-relaxed",children:[l.jsx("span",{className:"font-semibold",children:"BKS MARKETS PTY LTD"})," 持有南非 FSCA 牌照（牌照号码：",l.jsx("span",{className:"font-semibold",children:"54483"}),"），由南非监管并履行其相关法规规定的所有义务。"]}),l.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"公司地址：26 LION ROAD - 47 BUCKINGHAM ESTATE, STERREWAG PRETORIA, GAUTENG 0181, South Africa"})]}),l.jsxs("div",{className:"mb-6 pb-6 border-b border-gray-300",children:[l.jsx("h4",{className:"text-sm font-bold text-gray-900 mb-3",children:"BKS Markets Pty LTD 服务条款 - 司法管辖区免责声明"}),l.jsxs("div",{className:"text-xs text-gray-600 space-y-3 leading-relaxed",children:[l.jsxs("div",{children:[l.jsx("p",{className:"font-semibold text-gray-700 mb-1",children:"重要声明："}),l.jsx("p",{children:"BKS Markets Pty LTD（以下简称「本公司」）是一家在南非注册并受 FSCA 监管的外汇交易商。本公司致力于向全球客户提供优质的交易服务，但由于各司法管辖区的法律和监管要求不同，本公司在部分地区可能无法提供或限制提供服务。"})]}),l.jsxs("div",{children:[l.jsx("p",{className:"font-semibold text-gray-700 mb-1",children:"服务提供范围："}),l.jsx("p",{children:"本公司在符合当地法律法规的前提下，向全球大部分地区的客户提供外汇、差价合约（CFD）等金融衍生品交易服务。本公司保留随时修改服务提供范围的权利，恕不另行通知。"})]}),l.jsxs("div",{children:[l.jsx("p",{className:"font-semibold text-gray-700 mb-1",children:"不提供服务的司法管辖区："}),l.jsx("p",{children:"由于法律和监管限制，本公司不向以下司法管辖区的居民提供服务："}),l.jsx("p",{className:"mt-1 text-gray-500",children:"美国、沙特阿拉伯、约旦、巴林、科威特、阿拉伯联合酋长国、阿曼、黎巴嫩、卡塔尔、伊拉克、叙利亚、也门、土耳其、伊朗、巴基斯坦、阿富汗、以色列"}),l.jsx("p",{className:"mt-1",children:"此列表可能随时更新，请您定期查阅。如果您位于上述司法管辖区，或属于上述司法管辖区的居民，请勿使用本公司的服务。"})]}),l.jsxs("div",{children:[l.jsx("p",{className:"font-semibold text-gray-700 mb-1",children:"风险提示："}),l.jsx("p",{children:"外汇和差价合约（CFD）等金融衍生品交易具有高风险，可能导致您损失全部投资。在您决定参与交易前，请务必充分了解相关风险，并评估您的风险承受能力。本公司提供的信息仅供参考，不构成任何投资建议。"})]}),l.jsxs("div",{children:[l.jsx("p",{className:"font-semibold text-gray-700 mb-1",children:"法律责任："}),l.jsx("p",{children:"您有责任确保您在使用本公司服务时遵守当地法律法规。如果您违反当地法律法规，本公司概不负责。本公司不承担因您使用或无法使用本公司服务而产生的任何直接或间接损失。"})]}),l.jsxs("div",{children:[l.jsx("p",{className:"font-semibold text-gray-700 mb-1",children:"其他："}),l.jsx("p",{children:"本免责声明构成《BKS Markets Pty LTD 客户协议》的一部分。本公司保留随时修改本免责声明的权利，恕不另行通知。若您对本免责声明有任何疑问，请随时联系本公司客服。"})]})]})]}),l.jsxs("div",{className:"mt-8 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center",children:[l.jsxs("p",{className:"text-xs text-gray-500",children:["© ",new Date().getFullYear()," BKS MARKETS PTY LTD. All rights reserved."]}),l.jsx("div",{className:"flex space-x-4 mt-4 md:mt-0",children:l.jsx(U,{to:"/legal",className:"text-xs text-gray-500 hover:text-gray-700",children:"法规文件"})})]})]})})]})}function Df(){return l.jsxs("div",{className:"relative bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-gold-50/50 via-transparent to-gold-50/50 pointer-events-none"}),l.jsx("div",{className:"max-w-7xl mx-auto relative z-10",children:l.jsx("div",{className:"relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-10 md:pt-20 px-4 sm:px-6 lg:px-8",children:l.jsx("main",{className:"mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28",children:l.jsxs("div",{className:"sm:text-center lg:text-left",children:[l.jsxs("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl",children:[l.jsx("span",{className:"block xl:inline",children:"看准汇率"})," ",l.jsx("span",{className:"block text-gold-600 xl:inline",children:"只需点一下"})]}),l.jsx("p",{className:"mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 leading-relaxed",children:"BKS MARKET 为您提供极低差价交易外汇，一周5天，每天24小时支持。立即开始体验专业级交易平台。"}),l.jsx("div",{className:"mt-8 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4",children:l.jsxs("div",{className:"flex flex-col items-start space-y-2",children:[l.jsxs("div",{className:"flex items-center",children:[l.jsx("span",{className:"h-2 w-2 bg-gold-500 rounded-full mr-2"}),l.jsx("span",{className:"text-gray-700 font-medium",children:"终身免佣"})]}),l.jsxs("div",{className:"flex items-center",children:[l.jsx("span",{className:"h-2 w-2 bg-gold-500 rounded-full mr-2"}),l.jsx("span",{className:"text-gray-700 font-medium",children:"24小时支持"})]}),l.jsxs("div",{className:"flex items-center",children:[l.jsx("span",{className:"h-2 w-2 bg-gold-500 rounded-full mr-2"}),l.jsx("span",{className:"text-gray-700 font-medium",children:"双向交易"})]})]})}),l.jsxs("div",{className:"mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start",children:[l.jsx("div",{className:"rounded-md shadow-lg",children:l.jsx("a",{href:"#",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gold-gradient hover:shadow-gold-lg md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105",children:"立即开户"})}),l.jsx("div",{className:"mt-3 sm:mt-0 sm:ml-3",children:l.jsx("a",{href:"#",className:"w-full flex items-center justify-center px-8 py-3 border border-gold-600 text-base font-medium rounded-md text-gold-600 bg-transparent hover:bg-gold-50 hover:border-gold-500 md:py-4 md:text-lg md:px-10 transition-all duration-300",children:"模拟交易"})})]})]})})})}),l.jsx("div",{className:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-8",children:l.jsx("img",{className:"h-56 w-full object-contain sm:h-72 md:h-96 lg:w-full lg:h-full",src:"https://forex.z.com/hk/static/images/tc/top/2025_slogan.png",alt:"BKS MARKET Trading App"})})]})}const Tf=({pair:e,sell:t,buy:a,spread:s,icon:r,trend:i})=>l.jsxs("div",{className:"bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gold-200 hover:border-gold-400 overflow-hidden transform hover:-translate-y-1",children:[l.jsxs("div",{className:"p-4 border-b border-gold-200 flex justify-between items-center bg-gray-50",children:[l.jsxs("div",{className:"flex items-center",children:[l.jsx("img",{src:r,alt:e,className:"w-8 h-8 mr-3"}),l.jsx("h3",{className:"font-bold text-lg text-gray-900",children:e})]}),l.jsxs("span",{className:"text-xs font-semibold bg-gold-100 text-gold-700 px-2.5 py-1 rounded border border-gold-300",children:["点差: ",s]})]}),l.jsxs("div",{className:"p-4 grid grid-cols-2 gap-4",children:[l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"text-xs text-gray-500 mb-1",children:"卖出 (Sell)"}),l.jsx("div",{className:`text-xl font-bold ${i==="up"?"text-red-600":"text-gold-600"} price-update`,children:t}),l.jsx("button",{className:"w-full mt-2 py-1.5 bg-gray-100 text-gray-700 text-xs font-bold rounded hover:bg-gray-200 transition-all duration-200 border border-gray-300",children:"卖出"})]}),l.jsxs("div",{className:"text-center border-l border-gold-200",children:[l.jsx("div",{className:"text-xs text-gray-500 mb-1",children:"买入 (Buy)"}),l.jsx("div",{className:`text-xl font-bold ${i==="up"?"text-red-600":"text-gold-600"} price-update`,children:a}),l.jsx("button",{className:"w-full mt-2 py-1.5 bg-gold-gradient text-black text-xs font-bold rounded hover:shadow-gold transition-all duration-200",children:"买入"})]})]})]});function Ff(){const e=[{pair:"欧元/美元",sell:"1.15254",buy:"1.15264",spread:"1.0",icon:"https://forex.z.com/hk/static/images/common/prod/icon-prod-EURUSD.png",trend:"up"},{pair:"美元/日元",sell:"156.545",buy:"156.555",spread:"1.0",icon:"https://forex.z.com/hk/static/images/common/prod/icon-prod-USDJPY.png",trend:"down"},{pair:"英镑/美元",sell:"1.31044",buy:"1.31060",spread:"1.6",icon:"https://forex.z.com/hk/static/images/common/prod/icon-prod-GBPUSD.png",trend:"up"},{pair:"澳元/美元",sell:"0.64638",buy:"0.64653",spread:"1.5",icon:"https://forex.z.com/hk/static/images/common/prod/icon-prod-AUDUSD.png",trend:"down"}];return l.jsx("section",{className:"py-12 bg-white",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"flex justify-between items-end mb-8",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"实时汇率"}),l.jsx("p",{className:"mt-2 text-gray-600",children:"极具竞争力的点差，助您把握每个交易机会"})]}),l.jsxs("a",{href:"#",className:"hidden sm:flex items-center text-gold-600 hover:text-gold-700 font-medium transition-colors",children:["更多货币对 ",l.jsx(Nm,{className:"ml-1 w-4 h-4"})]})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:e.map((t,a)=>l.jsx(Tf,{...t},a))})]})})}const Pf=({icon:e,title:t,description:a,link:s})=>l.jsxs("div",{className:"flex flex-col items-start p-6 bg-white rounded-lg border border-gold-200 hover:border-gold-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 shadow-sm",children:[l.jsx("div",{className:"p-3 bg-gold-50 rounded-full mb-4",children:l.jsx(e,{className:"w-8 h-8 text-gold-600"})}),l.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-2",children:t}),l.jsx("p",{className:"text-gray-600 mb-4 flex-grow text-sm leading-relaxed",children:a}),l.jsxs("a",{href:s,className:"text-gold-600 font-medium text-sm hover:text-gold-700 transition-colors duration-200 flex items-center group",children:["了解更多 ",l.jsx("span",{className:"ml-1 transform group-hover:translate-x-1 transition-transform duration-200",children:"→"})]})]});function Af(){const e=[{icon:bm,title:"日本最大外汇交易商之一",description:"集团业务始于2005年，每天处理客户交易量高达10万亿日元。信心保证。",link:"#"},{icon:Ke,title:"证监会监管 安全可靠",description:"香港证监会（SFC）监管，客户资金独立存放于香港认可银行账户，资金安全无忧。",link:"#"},{icon:We,title:"极低交易成本",description:"买卖差价低至1点，HK$3,000起即可交易。零佣金，降低您的交易成本。",link:"#"},{icon:Ni,title:"功能完善、操作简易",description:"配备浏览器，iPhone及Android 3款交易界面，一用上手，随时随地进行交易。",link:"#"},{icon:Hl,title:"负余额保护",description:"如汇率出现波动造成超额损失，账户的负余额将在下一个交易日后被免除。",link:"#"}];return l.jsx("section",{className:"py-16 bg-white",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"text-center mb-12",children:[l.jsxs("h2",{className:"text-3xl font-extrabold text-gray-900 sm:text-4xl",children:["为什么选择 ",l.jsx("span",{className:"text-gold-600",children:"BKS MARKET"}),"?"]}),l.jsx("p",{className:"mt-4 text-xl text-gray-600 max-w-3xl mx-auto",children:"我们提供安全、可靠且低成本的交易环境，助您在全球外汇市场中运筹帷幄。"})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[e.map((t,a)=>l.jsx(Pf,{...t},a)),l.jsxs("div",{className:"flex flex-col items-start p-6 bg-gold-gradient rounded-lg text-black shadow-gold-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 gold-shimmer opacity-30"}),l.jsxs("div",{className:"relative z-10 w-full",children:[l.jsx("h3",{className:"text-xl font-bold mb-3",children:"买卖外汇同时赚取过夜利息"}),l.jsx("p",{className:"text-gold-900/90 mb-6 text-sm font-medium",children:"买入高息货币日日赚，极具竞争力的过夜利息，公开透明。"}),l.jsxs("ul",{className:"space-y-3 mb-6 text-sm",children:[l.jsxs("li",{className:"flex items-center",children:[l.jsx("div",{className:"w-2 h-2 bg-gold-900 rounded-full mr-2 shadow-sm"}),l.jsx("span",{className:"font-medium",children:"每日利息结算"})]}),l.jsxs("li",{className:"flex items-center",children:[l.jsx("div",{className:"w-2 h-2 bg-gold-900 rounded-full mr-2 shadow-sm"}),l.jsx("span",{className:"font-medium",children:"随时买入及卖出"})]}),l.jsxs("li",{className:"flex items-center",children:[l.jsx("div",{className:"w-2 h-2 bg-gold-900 rounded-full mr-2 shadow-sm"}),l.jsx("span",{className:"font-medium",children:"16种自选货币对"})]})]}),l.jsx("a",{href:"#",className:"mt-auto w-full bg-black/80 text-gold-400 text-center py-2.5 rounded font-bold hover:bg-black hover:text-gold-300 transition-all duration-300 shadow-lg",children:"查看利息表"})]})]})]})]})})}const Bf=({title:e,description:t,image:a,logo:s,reverse:r})=>l.jsxs("div",{className:`flex flex-col md:flex-row ${r?"md:flex-row-reverse":""} items-center gap-8 py-12 border-b border-gold-200 last:border-0`,children:[l.jsx("div",{className:"w-full md:w-1/2 flex justify-center",children:l.jsx("img",{src:a,alt:e,className:"max-h-64 object-contain hover:scale-105 transition-transform duration-500"})}),l.jsxs("div",{className:"w-full md:w-1/2 text-center md:text-left",children:[l.jsx("div",{className:"flex justify-center md:justify-start mb-4",children:l.jsx("img",{src:s,alt:`${e} Logo`,className:"h-8 md:h-10 object-contain"})}),l.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:e}),l.jsx("p",{className:"text-gray-600 mb-6 text-lg",children:t}),l.jsx("a",{href:"#",className:"inline-flex items-center justify-center px-6 py-2.5 border border-gold-600 text-gold-600 font-medium rounded-md hover:bg-gold-50 hover:border-gold-500 hover:text-gold-700 transition-all duration-200",children:"了解更多"})]})]});function Uf(){const e=[{title:"BKS Trader Web",description:"操作简单全面，网上浏览器专用的个性化交易画面。无需下载，即开即用。",image:"https://forex.z.com/hk/static/images/tc/top/tools_webtrader.webp",logo:"https://forex.z.com/hk/static/images/tc/whyzcomforex/webtrader_logo_solid.webp",reverse:!1},{title:"iPhone / Android 应用程序",description:"通过移动设备，随时随地轻松交易。提供实时价格、图表和市场最新动态。",image:"https://forex.z.com/hk/static/images/tc/top/tools_ios.webp",logo:"https://forex.z.com/hk/static/images/tc/whyzcomforex/webtrader_mobile_logo_solid.webp",reverse:!0},{title:"Super Chart 专业图表",description:"协助进阶分析的专业图表工具；配备一系列技术指标和绘图工具协助您作出投资决定。",image:"https://forex.z.com/hk/static/images/tc/top/tools_superchart.webp",logo:"https://forex.z.com/hk/static/images/tc/whyzcomforex/superchart_logo_solid.webp",reverse:!1}];return l.jsx("section",{className:"py-16 bg-white",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"text-center mb-16",children:[l.jsx("h2",{className:"text-3xl font-extrabold text-gray-900",children:"多平台交易体验"}),l.jsx("p",{className:"mt-4 text-gray-600",children:"无论身在何处，都能轻松掌握市场脉搏"})]}),l.jsx("div",{className:"space-y-4",children:e.map((t,a)=>l.jsx(Bf,{...t},a))})]})})}function If(){const e=[{date:"2025年10月28日",title:"外汇交易时段更改通知",type:"notice"},{date:"2025年09月19日",title:"重要通告：BKS MARKET收到收购要约",type:"important"},{date:"2025年07月15日",title:"快捷简便存款服务暂停 (2025年7月19日及20日)",type:"notice"},{date:"2025年06月11日",title:"有关2025年6月内额外过夜利息日数之列表",type:"notice"},{date:"2025年04月16日",title:"请注意复活节假期内的市场流动性",type:"notice"}],t=[{title:"高风险资产跌势停不了，美元继续稳",link:"#"},{title:"美汇指数再度突破100大关，后市仍势如破竹",link:"#"},{title:"3点识外汇 - 本周策略 (19-11-2025)",link:"#"},{title:'"滞后"的非农出台前高风险资产继续泻，美金仍可看高一线',link:"#"}];return l.jsx("section",{className:"py-16 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between items-center mb-6 border-b border-gold-200 pb-2",children:[l.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"最新消息"}),l.jsx("a",{href:"#",className:"text-gold-600 text-sm font-medium hover:underline",children:"查看全部"})]}),l.jsx("div",{className:"space-y-4",children:e.map((a,s)=>l.jsxs("div",{className:"group flex flex-col sm:flex-row sm:items-center border-b border-gray-200 pb-3 last:border-0",children:[l.jsx("span",{className:"text-gray-500 text-sm w-32 flex-shrink-0",children:a.date}),l.jsx("a",{href:"#",className:`text-gray-700 hover:text-gold-600 font-medium transition-colors ${a.type==="important"?"text-red-600":""}`,children:a.title})]},s))})]}),l.jsxs("div",{className:"bg-gray-50 p-6 rounded-xl border border-gold-200 shadow-lg",children:[l.jsxs("div",{className:"flex items-center mb-6",children:[l.jsx(km,{className:"w-5 h-5 text-gold-600 mr-2"}),l.jsx("h2",{className:"text-xl font-bold text-gray-900",children:"最新市场评论"})]}),l.jsx("div",{className:"space-y-4",children:t.map((a,s)=>l.jsxs("a",{href:a.link,className:"block bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-gold-400 group transform hover:-translate-y-0.5",children:[l.jsx("h3",{className:"text-gray-800 group-hover:text-gold-600 font-medium line-clamp-2 transition-colors duration-200",children:a.title}),l.jsx("div",{className:"mt-2 flex justify-end",children:l.jsxs("span",{className:"text-gold-600 group-hover:text-gold-700 text-xs flex items-center transition-colors duration-200",children:["阅读更多 ",l.jsx(Hv,{className:"w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"})]})})]},s))}),l.jsx("a",{href:"#",className:"block mt-6 text-center text-gold-600 font-medium hover:text-gold-700 transition-colors duration-200",children:"更多市场分析 >"})]})]})})})}function Rf(){return l.jsx("section",{className:"py-12 bg-gradient-to-b from-white via-gray-50 to-white border-y border-gold-200",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("h2",{className:"text-2xl font-bold text-gray-900 mb-8 text-center",children:[l.jsx("span",{className:"text-gold-600",children:"最新推广"}),"及优惠"]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[l.jsx("a",{href:"#",className:"group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gold-200 hover:border-gold-400",children:l.jsxs("div",{className:"relative",children:[l.jsx("img",{src:"https://forex.z.com/hk/static/images/tc/top/slide202511.jpg",alt:"新开户奖赏",className:"w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"}),l.jsxs("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4",children:[l.jsx("h3",{className:"text-white font-bold text-lg group-hover:text-gold-400 transition-colors duration-200",children:"新开户奖赏"}),l.jsx("p",{className:"text-gray-200 text-sm",children:"立即开户，获取迎新礼遇"})]})]})}),l.jsx("a",{href:"#",className:"group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gold-200 hover:border-gold-400",children:l.jsxs("div",{className:"relative",children:[l.jsx("img",{src:"https://forex.z.com/hk/static/images/tc/forex_trading/calendar2026_online.jpg",alt:"2026财经月历",className:"w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"}),l.jsxs("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4",children:[l.jsx("h3",{className:"text-white font-bold text-lg group-hover:text-gold-400 transition-colors duration-200",children:"免费索取2026财经月历"}),l.jsx("p",{className:"text-gray-200 text-sm",children:"掌握全年重要财经日子"})]})]})})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8",children:[l.jsx("a",{href:"#",className:"block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gold-200 hover:border-gold-400",children:l.jsx("img",{src:"https://forex.z.com/hk/static/images/tc/top/top_side_banner_02.jpg",alt:"3点识外汇",className:"w-full h-auto"})}),l.jsx("a",{href:"#",className:"block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gold-200 hover:border-gold-400",children:l.jsx("img",{src:"https://forex.z.com/hk/static/images/tc/top/top_side_banner_03.jpg",alt:"CHATGDP",className:"w-full h-auto"})}),l.jsx("a",{href:"#",className:"block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gold-200 hover:border-gold-400",children:l.jsx("img",{src:"https://forex.z.com/hk/static/images/tc/top/top_side_banner_01.webp",alt:"免费外汇工作坊",className:"w-full h-auto"})})]})]})})}function B({title:e,subtitle:t,children:a,bannerClass:s="banner_01"}){return l.jsxs("div",{className:"min-h-screen flex flex-col bg-white",children:[e&&l.jsx("div",{className:`container-fluid ${s} bg-gradient-to-r from-gold-50 to-gold-100 py-16 md:py-24`,children:l.jsx("div",{className:"container mx-auto px-4",children:l.jsx("div",{className:"row justify-center",children:l.jsxs("div",{className:"col-sm-8 text-center",children:[l.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-4",children:e}),t&&l.jsx("h4",{className:"text-lg md:text-xl text-gray-700 mb-6",children:t}),l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"btn bg-gold-gradient text-black px-8 py-3 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 inline-block mt-4",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"开始交易"})})]})})})}),l.jsx("div",{className:"flex-grow",children:a})]})}function Lf(){const e=[{name:"诚信",icon:Ke},{name:"公平公正",icon:bm},{name:"透明",icon:gf},{name:"承诺并负责",icon:Ld},{name:"可依赖",icon:Kd},{name:"可变通",icon:ys},{name:"不断创新",icon:We},{name:"健全的公司管理制度",icon:kf}];return l.jsxs(B,{title:"关于我们",subtitle:"BKS Markets 是一家 CFD 差价合约提供商。 BKS Markets 的存在是为了连接零售和机构交易者之间的差距，使全世界的每个人都可以交易。",children:[l.jsx("section",{className:"py-12 md:py-16 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12",children:[l.jsxs("div",{children:[l.jsxs("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-6",children:["领先的 ",l.jsx("span",{className:"text-gold-600",children:"CFD 交易平台"})]}),l.jsx("p",{className:"text-lg text-gray-700 mb-4 leading-relaxed",children:"BKS Markets是最著名的CFD合约经纪商之一，为活跃的日内交易者和剥头皮以及外汇市场新手提供交易解决方案。 BKS Markets为其客户提供最先进的交易平台，低延迟连接和卓越的流动性。"}),l.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"BKS Markets正在彻底改变在线 CFD 交易，在线交易者现在能够获得以前只有投资银行和高净值个人可用的定价和流动性。"})]}),l.jsxs("div",{className:"bg-gradient-to-br from-gold-50 to-white p-8 rounded-xl border border-gold-200 shadow-lg",children:[l.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"专业团队"}),l.jsx("p",{className:"text-gray-700 leading-relaxed",children:"我们的管理团队在亚洲、欧洲和北美的外汇、CFD和股票市场方面有着丰富的经验。正是这种经验使我们能够选择尽可能的最好的技术解决方案，并手工挑选市场上可获得的最佳流动性。"})]})]})})}),l.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"text-center mb-12",children:[l.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-6",children:["为什么创立 ",l.jsx("span",{className:"text-gold-600",children:"BKS Markets"}),"?"]}),l.jsxs("div",{className:"max-w-4xl mx-auto space-y-4",children:[l.jsx("p",{className:"text-lg md:text-xl text-gray-700 leading-relaxed",children:"BKS Markets试图减小零售和机构客户之间的差距，提供以前只有投资银行和高净值个人可用的交易解决方案。 BKS Markets ECN Connectivity诞生，提供卓越的执行技术，更低的点差和无与伦比的流动性。"}),l.jsx("p",{className:"text-lg md:text-xl text-gray-700 leading-relaxed",children:"BKS Markets致力于持续创新，不断改进并利用最新的前沿技术。"})]})]})})}),l.jsx("section",{className:"py-12 md:py-16 bg-white",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"mb-12",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-6",children:"使命宣言"}),l.jsx("div",{className:"bg-gradient-to-r from-gold-50 to-white p-8 rounded-xl border-l-4 border-gold-600 shadow-md",children:l.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"BKS Markets的使命在于为零售客户和机构交易者提供一样的可以使交易者更专注于交易的最专业最透明的交易环境。同时致力于为交易者提供卓越的点差、执行和服务。"})})]}),l.jsxs("div",{className:"mb-12",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-8",children:"核心价值观"}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:e.map((t,a)=>{const s=t.icon;return l.jsxs("div",{className:"flex flex-col items-center p-6 bg-white rounded-lg border border-gold-200 hover:border-gold-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1",children:[l.jsx("div",{className:"p-3 bg-gold-50 rounded-full mb-4",children:l.jsx(s,{className:"w-6 h-6 text-gold-600"})}),l.jsx("h3",{className:"text-base font-semibold text-gray-900 text-center",children:t.name})]},a)})})]}),l.jsxs("div",{className:"space-y-12",children:[l.jsx("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:l.jsxs("div",{className:"flex items-start",children:[l.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4 flex-shrink-0",children:l.jsx(Ke,{className:"w-6 h-6 text-gold-600"})}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-gray-900 mb-4",children:"合规管理"}),l.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"BKS Markets acknowledges the importance of compliance with all relevant laws, rules, regulations, policies and standards. BKS Markets is committed to having strict management discipline and first-class controls in our compliance environment. As a globally regulated entity BKS Markets is required to meet strict financial standards, including capital adequacy and audit requirements."})]})]})}),l.jsx("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:l.jsxs("div",{className:"flex items-start",children:[l.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4 flex-shrink-0",children:l.jsx(Ld,{className:"w-6 h-6 text-gold-600"})}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-gray-900 mb-4",children:"审计"}),l.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"BKS Markets 有独立的外部审计来补充我们的业务流程，并确保法规的遵守。"})]})]})}),l.jsx("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:l.jsxs("div",{className:"flex items-start",children:[l.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4 flex-shrink-0",children:l.jsx(Kd,{className:"w-6 h-6 text-gold-600"})}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-gray-900 mb-4",children:"保密"}),l.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:'BKS Markets 保持最合适的管控，并基于"按需知密"的原则上，监管公司对内和对外移交保密且敏感的客户信息。 BKS Markets不会刻意披露客户信息，除非是应客户要求或根据法律规定。'})]})]})})]})]})}),l.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"text-center",children:[l.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:"开始交易"}),l.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:["值得信赖的全球 ",l.jsx("span",{className:"text-gold-600",children:"CFD 交易商"})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"立即开户"})}),l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"开设模拟交易账户"})})]})]})})})]})}function Of(){return l.jsxs(B,{title:"联系我们",subtitle:"客服支持24/7",children:[l.jsx("section",{className:"py-12 md:py-16 bg-white",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"text-center mb-12",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-4",children:"有问题或需要专业协助？"}),l.jsx("p",{className:"text-lg md:text-xl text-gray-700 max-w-3xl mx-auto",children:"我们的专业客服团队全天候为您服务，随时准备为您提供帮助。"})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-12",children:[l.jsxs("div",{className:"bg-gradient-to-br from-gold-50 to-white p-8 rounded-xl border border-gold-200 shadow-lg",children:[l.jsxs("div",{className:"flex items-center mb-4",children:[l.jsx("div",{className:"p-3 bg-gold-100 rounded-full mr-4",children:l.jsx(nf,{className:"w-6 h-6 text-gold-600"})}),l.jsx("h3",{className:"text-xl font-bold text-gray-900",children:"电子邮件询问"})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"客户关系"}),l.jsx("a",{href:"mailto:cs@bksmarkets.com",className:"text-gold-600 hover:text-gold-700 font-semibold text-lg transition-colors duration-200",children:"cs@bksmarkets.com"})]}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"技术支持"}),l.jsx("a",{href:"mailto:support.cn@bksmarkets.com",className:"text-gold-600 hover:text-gold-700 font-semibold text-lg transition-colors duration-200",children:"support.cn@bksmarkets.com"})]})]})]}),l.jsxs("div",{className:"bg-white p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[l.jsxs("div",{className:"flex items-center mb-4",children:[l.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:l.jsx(ym,{className:"w-6 h-6 text-gold-600"})}),l.jsx("h3",{className:"text-xl font-bold text-gray-900",children:"服务时间"})]}),l.jsx("p",{className:"text-gray-700 leading-relaxed",children:"我们的客服团队提供 24/7 全天候服务，无论何时您需要帮助，我们都在这里。"})]})]}),l.jsx("div",{className:"text-center mb-12",children:l.jsx("img",{src:"/images/contact-us-mail.png",alt:"Contact Us",className:"mx-auto max-w-md rounded-lg shadow-md"})})]})}),l.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"text-center mb-12",children:[l.jsxs("div",{className:"flex items-center justify-center mb-4",children:[l.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:l.jsx(Hl,{className:"w-8 h-8 text-gold-600"})}),l.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-gray-900",children:"全球办公地点"})]}),l.jsx("p",{className:"text-lg md:text-xl text-gray-700 max-w-3xl mx-auto",children:"BKS Markets 是一家全球经纪商，在多个司法管辖区设有办事处，以满足您的需求。"})]})})}),l.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"text-center",children:[l.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:"开始交易"}),l.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:["值得信赖的全球 ",l.jsx("span",{className:"text-gold-600",children:"CFD 交易商"})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"立即开户"})}),l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"开设模拟交易账户"})})]})]})})})]})}function Kf(){const e=[{name:"ECN",popular:!0,platform:"Meta Trader",commission:"$7.0",spread:"0.1",link:"/accounts/raw-spread"},{name:"标准",popular:!1,platform:"Meta Trader",commission:"$0",spread:"1.0",link:"/accounts/standard"}],t=[{name:"ECN Account",link:"/accounts/raw-spread",icon:We},{name:"标准账户",link:"/accounts/standard",icon:bs},{name:"账户入金",link:"/funding",icon:cs},{name:"出金取款",link:"/withdrawal",icon:Nm}];return l.jsxs(B,{title:"账户总览",subtitle:"BKS Markets 产品和大型产品系列包含在所有帐户类型中。 适合新手和有经验的交易者，只需选择您喜欢的交易平台和定价模式即可开始使用。",children:[l.jsx("section",{className:"py-8 bg-white border-b border-gray-200",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:t.map((a,s)=>{const r=a.icon;return l.jsxs(U,{to:a.link,className:"flex items-center px-6 py-3 bg-white border border-gray-300 rounded-full hover:border-gold-400 hover:bg-gold-50 transition-all duration-300 text-gray-700 hover:text-gold-600",children:[l.jsx(r,{className:"w-4 h-4 mr-2"}),l.jsx("span",{className:"font-medium",children:a.name})]},s)})})})}),l.jsx("section",{className:"py-12 md:py-16 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto",children:e.map((a,s)=>l.jsxs("div",{className:`relative bg-white rounded-xl border-2 ${a.popular?"border-gold-400 shadow-gold-lg":"border-gray-200 shadow-md"} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`,children:[a.popular&&l.jsx("div",{className:"absolute -top-4 left-1/2 transform -translate-x-1/2",children:l.jsx("span",{className:"bg-gold-gradient text-black px-4 py-1 rounded-full text-sm font-bold",children:"流行"})}),l.jsxs("div",{className:"p-8",children:[l.jsxs("div",{className:"text-center mb-6",children:[l.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"账户"}),l.jsx("h2",{className:"text-4xl font-bold text-gray-900",children:a.name})]}),l.jsxs("div",{className:"space-y-4 mb-8",children:[l.jsxs("div",{className:"flex justify-between items-center py-3 border-b border-gray-100",children:[l.jsx("span",{className:"text-gray-600",children:"交易平台"}),l.jsx("span",{className:"font-semibold text-gray-900",children:a.platform})]}),l.jsxs("div",{className:"flex justify-between items-center py-3 border-b border-gray-100",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-gray-600",children:"手续费"}),l.jsx("p",{className:"text-xs text-gray-500",children:"(per lot per side)"})]}),l.jsx("span",{className:"font-bold text-2xl text-gold-600",children:a.commission})]}),l.jsxs("div",{className:"flex justify-between items-center py-3",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-gray-600",children:"点差起"}),l.jsx("p",{className:"text-xs text-gray-500",children:"(点)"})]}),l.jsx("span",{className:"font-bold text-2xl text-gold-600",children:a.spread})]})]}),l.jsxs("div",{className:"text-center space-y-3",children:[l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",target:"_blank",rel:"noopener noreferrer",className:`block w-full py-3 px-6 rounded-full font-bold transition-all duration-300 ${a.popular?"bg-gold-gradient text-black hover:shadow-gold-lg":"bg-gray-900 text-white hover:bg-gray-800"}`,children:"开户"}),l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",target:"_blank",rel:"noopener noreferrer",className:"block text-sm text-gray-600 hover:text-gold-600 transition-colors duration-200",children:"开设模拟交易账户"})]})]})]},s))})})}),l.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"text-center",children:[l.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:"在 ECN 交易"}),l.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:l.jsx("span",{className:"text-gold-600",children:"0.1点差起"})}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"立即开户"})}),l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"开设模拟交易账户"})})]})]})})}),l.jsx("section",{className:"py-12 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[l.jsx("div",{className:"flex-1 min-w-[250px]",children:l.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4",children:"使用 BKS Markets App 访问 Global Markets"})}),l.jsx("div",{className:"flex-shrink-0",children:l.jsx("img",{src:"/images/iphones.png",alt:"BKS Markets App",className:"h-48 object-contain"})}),l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:l.jsx("img",{src:"/images/appleStore.png",alt:"Download on App Store",className:"h-12"})}),l.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:l.jsx("img",{src:"/images/GoogleStore.png",alt:"Get it on Google Play",className:"h-12"})})]})]})})})]})}function zf(){const e=[{name:"ECN Account",link:"/accounts/raw-spread",active:!0},{name:"标准账户",link:"/accounts/standard"},{name:"账户入金",link:"/funding"},{name:"出金取款",link:"/withdrawal"}],t=["点差0.1 起","极速订单执行","1:400 杠杆","高流动性","MetaTrader 5"],a=[{title:"极速订单执行",description:"BKS Markets MetaTrader 5 服务器位于纽约的Equinix NY4数据中心。NY4数据中心被称为金融生态系统，拥有600多家买卖方公司、交易所、交易场所、市场数据和服务提供商。他们MT5和5服务器交叉连接到我们的网络环境，以确保超低延迟和快速执行您的订单。",additional:"BKS Markets MetaTrader 5台交易服务器对于主要VPS提供商的延迟小于1毫秒，这些提供商要么位于NY4数据中心，要么通过专用线路连接到附近的数据中心。",icon:ys},{title:"0.1点差起",description:"BKS Markets 拥有全球外汇经纪商的最优的点差。在MT 4和5平台上的点差从0点开始，欧元兑美元的平均值是0.1点24/5。",additional:"我们从多达50个不同的流动性提供商获得多样化的流动性组合，意味着我们总是能够为我们的客户提供流动性，并保持我们的点差最低，特别是在如新闻公告这种高波动时期。",icon:We},{title:"无限制交易 – 允许剥头皮交易",description:"BKS Markets MetaTrader 5 平台对交易没有限制。我们提供最佳的交易条件给全球范围内的剥头皮交易和高频交易，允许交易者在价差之间下订单，没有最小的订单距离。这意味着包括止损订单在内的订单可以按你的价格无限接近市场价格。",additional:"交易者也可以锁仓，因为在BKS Markets没有先进先出（FIFO）的规则。交易者不需要为锁仓支付保证金，并享受保证金净值的好处。",icon:Ke},{title:"2级定价—— 市场深度",description:"市场的深度显示了由流动性提供商直接提供的全部可执行价格。市场深度通过在任何给定时间显示每个价格水平的可用交易量来提供每个货币对的流动性。高流动性、奇异现货价格和低延迟保证了尽可能的低点差。",icon:We}],s=[{title:"灵活的出入金选择",description:"一旦你开立了你的账户，你可以使用我们以下的任何方式来入金，包括：信用卡/借记卡、电汇、paypal、虚拟货币。",icon:cs},{title:"灵活的手数大小",description:"对交易手数大小没有限制，你可以做小到0.01手一笔的交易，没有最大的限制。我们灵活的交易手数大小允许您以最小的风险在平台交易，并根据您的帐户余额管理您的交易规模。",icon:bs}],r=[{title:"64 货币对和贵金属 + 15 CFDs",description:"交易64种货币对加上15种主要股票指数，包括富时100指数、标准普尔ASX 200指数和道琼斯指数。"},{title:"Leverage up to 1:400",description:"Accounts go up to 1:400 leverage on the BKS Markets MetaTrader 5 platforms. Traders can use higher leverage to suit their trading style and get the best out of their manual and automated trading strategies."}];return l.jsxs(B,{title:"ECN 账户",subtitle:"在世界上最受欢迎的交易平台上，让您拥有在一个ECN交易的优势，我们提供机构级流动性组合，包括精选的一级银行、领先的非银行做市商和暗池。",children:[l.jsx("section",{className:"py-8 bg-white border-b border-gray-200",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:e.map((i,n)=>l.jsx(U,{to:i.link,className:`px-6 py-3 rounded-full font-medium transition-all duration-300 ${i.active?"bg-gold-gradient text-black hover:shadow-gold-lg":"bg-white border border-gray-300 text-gray-700 hover:border-gold-400 hover:bg-gold-50"}`,children:i.name},n))})})}),l.jsx("section",{className:"py-12 md:py-16 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[l.jsxs("div",{className:"lg:col-span-8",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-6",children:"我们的 ECN 账户提供了尽可能的最低价差"}),l.jsx("p",{className:"text-lg text-gray-700 mb-4 leading-relaxed",children:"我们的 ECN 账户提供了尽可能的最低价差。我们的欧元/美元平均价差是 0.1 个点，只需支付较低的手续费。拥有超过 25 家不同银行的流动性，以及暗池流动性来源，BKS Markets 的 ECN 账户是为日内交易者、剥头皮交易员和 EA 建立的。"}),l.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"我们的 MetaTrader 5 服务器位于纽约的 Equinix NY4 数据中心，使您更接近我们的流动性合作伙伴，并消除部分延迟。BKS Markets MT5 平台是活跃日间交易者和全球剥头皮交易的首选。"})]}),l.jsx("div",{className:"lg:col-span-4",children:l.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 shadow-lg p-6 sticky top-8",children:[l.jsxs("div",{className:"mb-6",children:[l.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"CFD 交易"}),l.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:"ECN"})]}),l.jsx("div",{className:"space-y-3 mb-8",children:t.map((i,n)=>l.jsxs("div",{className:"flex items-center",children:[l.jsx(Ns,{className:"w-5 h-5 text-gold-600 mr-3 flex-shrink-0"}),l.jsx("span",{className:"text-gray-700",children:i})]},n))}),l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center bg-gold-gradient text-black py-3 px-6 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300",children:"开通账户"})]})})]})})}),l.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:a.map((i,n)=>{const d=i.icon;return l.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[l.jsxs("div",{className:"flex items-start mb-4",children:[l.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:l.jsx(d,{className:"w-6 h-6 text-gold-600"})}),l.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:i.title})]}),l.jsx("p",{className:"text-gray-700 leading-relaxed mb-4",children:i.description}),i.additional&&l.jsx("p",{className:"text-gray-700 leading-relaxed",children:i.additional})]},n)})})})}),l.jsx("section",{className:"py-12 md:py-16 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:s.map((i,n)=>{const d=i.icon;return l.jsxs("div",{className:"bg-gradient-to-br from-gold-50 to-white rounded-xl p-8 border border-gold-200",children:[l.jsxs("div",{className:"flex items-center mb-4",children:[l.jsx("div",{className:"p-3 bg-gold-100 rounded-full mr-4",children:l.jsx(d,{className:"w-6 h-6 text-gold-600"})}),l.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:i.title})]}),l.jsx("p",{className:"text-gray-700 leading-relaxed",children:i.description})]},n)})})})}),l.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:r.map((i,n)=>l.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md",children:[l.jsx("h4",{className:"text-xl font-bold text-gray-900 mb-4",children:i.title}),l.jsx("p",{className:"text-gray-700 leading-relaxed",children:i.description})]},n))})})}),l.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"text-center",children:[l.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:"开始交易"}),l.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:["与全球最值得信赖的 ",l.jsx("span",{className:"text-gold-600",children:"外汇CFD经纪商"})," 进行交易"]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"立即开户"})}),l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"开设模拟交易账户"})})]})]})})}),l.jsx("section",{className:"py-12 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[l.jsx("div",{className:"flex-1 min-w-[250px]",children:l.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4",children:"使用 BKS Markets App 访问 Global Markets"})}),l.jsx("div",{className:"flex-shrink-0",children:l.jsx("img",{src:"/images/iphones.png",alt:"BKS Markets App",className:"h-48 object-contain"})}),l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:l.jsx("img",{src:"/images/appleStore.png",alt:"Download on App Store",className:"h-12"})}),l.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:l.jsx("img",{src:"/images/GoogleStore.png",alt:"Get it on Google Play",className:"h-12"})})]})]})})})]})}function $f(){const e=[{name:"ECN Account",link:"/accounts/raw-spread"},{name:"标准账户",link:"/accounts/standard",active:!0},{name:"账户入金",link:"/funding"},{name:"出金取款",link:"/withdrawal"}],t=["企业级网络连接","无手续费","极速订单执行","杠杆高达1:400","高流动性","MetaTrader 5"],a=[{title:"外汇、大宗商品和全球股指",description:"交易60种货币，16种大宗商品包括贵金属，加上16种主要指数，包括富时100指数、标准普尔ASX 200指数和道琼斯指数，点差低至0.5点。",icon:Hl},{title:"Leverage up to 1:400",description:"Accounts go up to 1:400 leverage on the BKS Markets MetaTrader 5 platforms. Traders can use higher leverage to suit their trading style and get the best out of their manual and automated trading strategies.",icon:We},{title:"支持所有主要货币的账户",description:"我们知道一些交易者更倾向于使用本国货币。 在10种支持的基础货币中开立一个账户，包括美元、澳元、欧元、英镑、新加坡元、港币、纽币、日元、瑞士法郎和加元。",icon:cs}];return l.jsxs(B,{title:"标准账户",subtitle:"使用BKS Markets Standard帐户保持简单。 体验我们的所有好处，包括全包价差和无佣金。",children:[l.jsx("section",{className:"py-8 bg-white border-b border-gray-200",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:e.map((s,r)=>l.jsx(U,{to:s.link,className:`px-6 py-3 rounded-full font-medium transition-all duration-300 ${s.active?"bg-gold-gradient text-black hover:shadow-gold-lg":"bg-white border border-gray-300 text-gray-700 hover:border-gold-400 hover:bg-gold-50"}`,children:s.name},r))})})}),l.jsx("section",{className:"py-12 md:py-16 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[l.jsxs("div",{className:"lg:col-span-8",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-6",children:"为什么选择我们的标准账户?"}),l.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"BKS Markets 标准账户为您提供无与伦比的交易执行速度，以及低至1点的点差。 BKS Markets 服务器位于世界上最可靠的数据中心之一，纽约的Equinix NY4。与超过25个不同的银行和报价供应商连接在一起，您将拥有一个优越的交易体验。"})]}),l.jsx("div",{className:"lg:col-span-4",children:l.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 shadow-lg p-6 sticky top-8",children:[l.jsxs("div",{className:"mb-6",children:[l.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"CFD 交易"}),l.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:"标准账户"})]}),l.jsx("div",{className:"space-y-3 mb-8",children:t.map((s,r)=>l.jsxs("div",{className:"flex items-center",children:[l.jsx(Ns,{className:"w-5 h-5 text-gold-600 mr-3 flex-shrink-0"}),l.jsx("span",{className:"text-gray-700",children:s})]},r))}),l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center bg-gold-gradient text-black py-3 px-6 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300",children:"开通标准账户"})]})})]})})}),l.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md",children:[l.jsxs("div",{className:"flex items-start mb-4",children:[l.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:l.jsx(ys,{className:"w-6 h-6 text-gold-600"})}),l.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:"极速订单执行"})]}),l.jsx("p",{className:"text-lg text-gray-700 leading-relaxed mb-4",children:"BKS Markets MetaTrader 5 服务器位于纽约的Equinix NY4数据中心。NY4数据中心被称为金融生态系统，拥有600多家买卖双方公司、交易所、交易场所、市场数据和服务提供商。 MetaTrader 5服务器交叉连接到我们的网络，以确保超低延迟和快速执行您的订单。"}),l.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"BKS Markets MetaTrader 5交易服务器对于主要VPS提供商的延迟小于1毫秒，这些提供商要么位于NY4数据中心，要么通过专用线路连接到附近的数据中心。这种低延迟环境是自动化和高频交易以及剥头皮交易者的理想选择。"})]})})}),l.jsx("section",{className:"py-12 md:py-16 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[l.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[l.jsxs("div",{className:"flex items-start mb-4",children:[l.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:l.jsx(Ke,{className:"w-6 h-6 text-gold-600"})}),l.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:"无限制交易 – 允许剥头皮交易"})]}),l.jsx("p",{className:"text-gray-700 leading-relaxed mb-4",children:"BKS Markets MetaTrader 5 平台对交易没有限制。我们提供最佳的交易条件给全球范围内的剥头皮交易和高频交易，允许交易者在价差之间下订单，没有最小的订单距离。这意味着包括止损订单在内的订单可以按你的价格无限接近市场价格。"}),l.jsx("p",{className:"text-gray-700 leading-relaxed",children:"交易者也可以锁仓，因为在BKS Markets没有先进先出（FIFO）的规则。交易者不需要为锁仓支付保证金，并享受保证金净值的好处。"})]}),l.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[l.jsxs("div",{className:"flex items-start mb-4",children:[l.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:l.jsx(We,{className:"w-6 h-6 text-gold-600"})}),l.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:"2级定价—— 市场深度"})]}),l.jsx("p",{className:"text-gray-700 leading-relaxed",children:"市场的深度显示了由流动性提供商直接提供的全部可执行价格。市场深度通过在任何给定时间显示每个价格水平的可用交易量来提供每个货币对的流动性。高流动性、奇异现货价格和低延迟保证了尽可能的低点差。"})]}),l.jsxs("div",{className:"bg-gradient-to-br from-gold-50 to-white rounded-xl p-8 border border-gold-200",children:[l.jsxs("div",{className:"flex items-center mb-4",children:[l.jsx("div",{className:"p-3 bg-gold-100 rounded-full mr-4",children:l.jsx(cs,{className:"w-6 h-6 text-gold-600"})}),l.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:"灵活的出入金选择"})]}),l.jsx("p",{className:"text-gray-700 leading-relaxed",children:"一旦你开立了你的账户，你可以使用我们以下的任何方式来入金，包括：信用卡/借记卡、paypal、电汇、虚拟货币。"})]}),l.jsxs("div",{className:"bg-gradient-to-br from-gold-50 to-white rounded-xl p-8 border border-gold-200",children:[l.jsxs("div",{className:"flex items-center mb-4",children:[l.jsx("div",{className:"p-3 bg-gold-100 rounded-full mr-4",children:l.jsx(bs,{className:"w-6 h-6 text-gold-600"})}),l.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:"灵活的手数大小"})]}),l.jsx("p",{className:"text-gray-700 leading-relaxed",children:"对交易手数大小没有限制，你可以做小到0.01手一笔的交易，没有最大的限制。我们灵活的交易手数大小允许您以最小的风险在平台交易，并根据您的帐户余额管理您的交易规模。"})]})]})})}),l.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:a.map((s,r)=>{const i=s.icon;return l.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[l.jsxs("div",{className:"flex items-center mb-4",children:[l.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:l.jsx(i,{className:"w-6 h-6 text-gold-600"})}),l.jsx("h4",{className:"text-xl font-bold text-gray-900",children:s.title})]}),l.jsx("p",{className:"text-gray-700 leading-relaxed",children:s.description})]},r)})})})}),l.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"text-center",children:[l.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:"立即开始交易"}),l.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:["一个真正的 ",l.jsx("span",{className:"text-gold-600",children:"外汇经纪商"})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"立即开户"})}),l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"开设模拟交易账户"})})]})]})})}),l.jsx("section",{className:"py-12 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[l.jsx("div",{className:"flex-1 min-w-[250px]",children:l.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4",children:"使用 BKS Markets App 访问 Global Markets"})}),l.jsx("div",{className:"flex-shrink-0",children:l.jsx("img",{src:"/images/iphones.png",alt:"BKS Markets App",className:"h-48 object-contain"})}),l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:l.jsx("img",{src:"/images/appleStore.png",alt:"Download on App Store",className:"h-12"})}),l.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:l.jsx("img",{src:"/images/GoogleStore.png",alt:"Get it on Google Play",className:"h-12"})})]})]})})})]})}function Gf(){return l.jsx(B,{title:"外汇",subtitle:"BKS Markets Forex产品是世界上最具竞争力的产品之一。 进入全球最大，最具流动性的市场，ECN从0.0点开始。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
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
	`}})})}function Hf(){return l.jsx(B,{title:"大宗商品",subtitle:"交易世界上最流行的大宗商品，包括能源、农业和金属。BKS Markets结合最优的价格和灵活的交易环境，给你提供一个最优的产品。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
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
	`}})})}function Vf(){return l.jsx(B,{title:"指数",subtitle:"一笔交易即可交易一篮子投资产品构成的指数。<br>在BKS Markets交易平台上交易全球最流行的指数。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
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
	`}})})}function Wf(){return l.jsx(B,{title:"债券",subtitle:"在MT5和5上交易世界上包括美国，英国，欧洲和日本在内的最流行的固定收益证券。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
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
	`}})})}function Yf(){return l.jsx(B,{title:"加密货币 CFDs",subtitle:"加密货币波动性强，不受监管，去中心化且几乎仅会被散户投机者掌握的一种货币。 在FSA监管的交易商交易世界上最新的，最令人兴奋的CFD资产。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
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
	`}})})}function Xf(){return l.jsx(B,{title:"股票",subtitle:"在ASX、纽约证交所和纳斯达克证交所交易超过1800只大盘股和ETF的CFD，执行力强，定价严格，只在 BKS Markets MetaTrader 5平台上交易。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
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
	`}})})}function Jf(){return l.jsx(B,{title:"期货",subtitle:"期货是CFD最流行的形式之一。 BKS Markets 提供了来自世界各地的一系列期货产品，包括ICE Dollar Index和CBOE VIX指数。可以再 BKS Markets的MT5平台上交易基于在线期货的CFDS。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
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
	`}})})}function Qf(){const e=[{name:"外汇",icon:We,description:"外汇市场为交易者提供了在全球最具流动性的金融市场中每周5天，每天24小时交易的机会。 交易者可以利用61种货币对中最小的点差，卓越的执行力和深度的银行间流动性。",features:["61种货币对","低至0.1点差","Up to 1:400 leverage","高流动性"],link:"/markets/forex",bgColor:"bg-white"},{name:"指数",icon:Kv,description:"通过BKS Markets提供的全球指数CFDS，来参与到全球最大的股票市场。25个指数点差低至0.5个点，交易者可以更全面地看待股票市场，同时享受零佣金和跨市场的5天24小时交易。",features:["全球25种指数交易","高达200倍杠杆","低手续费","MT5"],link:"/markets/indices",bgColor:"bg-gray-50"},{name:"大宗商品",icon:wm,description:"交易能源、农业和贵金属产品和交易美元为计价货币的货币对或期货的CFD一样。我们将最优价格和每10分一个点的灵活手数结合起来，提供您一个最优质的产品。",features:["22种大宗商品供交易","能源、农业和金属","现货和期货 CFDs","Up to 1:200 leverage"],link:"/markets/commodities",bgColor:"bg-white"},{name:"股票",icon:Iv,description:"提供在澳洲证券交易所、纽约证券交易所和纳斯达克证券交易所超过1800家大市值股票和ETF的CFD。我们选择了一系列世界上最受欢迎的公司和最热门的ETF给你最好的交易机会。",features:["超过1800只在澳洲证券交易所、纽约证券交易所和纳斯达克证券交易所上市的股票","赚取股息","MT5"],link:"/markets/stocks",bgColor:"bg-gray-50"},{name:"债券",icon:Zv,description:"债券为交易者提供了投机利率和全球风险情绪、对冲股票风险以及多样化策略的机会。选择世界各国政府发行的一系列债券，包括日本、欧洲、英国和美国。",features:["超过9种债券供交易","无佣金","高达200倍杠杆","高流动性"],link:"/markets/bonds",bgColor:"bg-white"},{name:"加密货币",icon:Bv,description:"做多或做空世界上最大和最流行的加密货币。与其他零售交易商进行7*24小时交易，其中价格波动主要是由于恐惧和贪婪、新闻和普遍情绪推动的。",features:["21种最流行的加密货币","每周 7 天都可交易","多头空头","MT5 1:5 倍杠杆"],link:"/markets/cryptocurrency",bgColor:"bg-gray-50"},{name:"期货",icon:Lv,description:"期货是CFD最流行的形式之一。BKS Markets提供了来自世界各地的一系列期货，包括ICE美元指数和CBOE VIX指数。基于在线期货的CFDS仅在BKS Markets的MT5平台上提供。",features:["4种全球期货可供交易","无佣金","高达200倍杠杆","高流动性"],link:"/markets/futures",bgColor:"bg-white"}],t=[{name:"外汇",link:"/markets/forex"},{name:"大宗商品",link:"/markets/commodities"},{name:"股指",link:"/markets/indices"},{name:"债券",link:"/markets/bonds"},{name:"加密货币 CFDs",link:"/markets/cryptocurrency"},{name:"股票",link:"/markets/stocks"},{name:"期货",link:"/markets/futures"}];return l.jsxs(B,{title:"市场范围",subtitle:"BKS Markets' 精心挑选的产品让您有机会进入全球最受欢迎和流动性最强的市场，获得24/7的最佳交易机会。",children:[l.jsx("section",{className:"py-8 bg-white border-b border-gray-200",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:t.map((a,s)=>l.jsx(U,{to:a.link,className:"px-6 py-3 bg-white border border-gray-300 rounded-full hover:border-gold-400 hover:bg-gold-50 transition-all duration-300 text-gray-700 hover:text-gold-600 font-medium",children:a.name},s))})})}),l.jsx("section",{className:"py-12 md:py-16",children:e.map((a,s)=>{const r=a.icon;return l.jsx("div",{className:`${a.bgColor} py-12 md:py-16`,children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[l.jsx("div",{className:"lg:col-span-2 flex justify-center",children:l.jsx("div",{className:"p-6 bg-gold-50 rounded-full",children:l.jsx(r,{className:"w-12 h-12 text-gold-600"})})}),l.jsxs("div",{className:"lg:col-span-5",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-4",children:a.name}),l.jsx("p",{className:"text-lg text-gray-700 leading-relaxed mb-6",children:a.description}),l.jsxs(U,{to:"/trading/spreads",className:"inline-flex items-center px-6 py-3 bg-gold-50 border-2 border-gold-300 rounded-lg hover:bg-gold-100 hover:border-gold-400 transition-all duration-300 text-gold-700 font-semibold",children:[l.jsx("span",{children:"查看我们的"}),l.jsx("span",{className:"ml-2 text-xl font-bold",children:"点差"})]})]}),l.jsx("div",{className:"lg:col-span-5",children:l.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300",children:[l.jsxs("div",{className:"mb-6",children:[l.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"市场"}),l.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:a.name})]}),l.jsx("div",{className:"space-y-3 mb-6",children:a.features.map((i,n)=>l.jsxs("div",{className:"flex items-center",children:[l.jsx("div",{className:"w-2 h-2 bg-gold-500 rounded-full mr-3"}),l.jsx("span",{className:"text-gray-700",children:i})]},n))}),l.jsx(U,{to:a.link,className:"block w-full text-center bg-gold-gradient text-black py-3 px-6 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300",children:"详情"})]})})]})})},s)})}),l.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"text-center",children:[l.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:"立即开始交易"}),l.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:["值得信赖的全球 ",l.jsx("span",{className:"text-gold-600",children:"CFD 交易商"})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"立即开户"})}),l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"开设模拟交易账户"})})]})]})})}),l.jsx("section",{className:"py-12 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[l.jsx("div",{className:"flex-1 min-w-[250px]",children:l.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4",children:"使用 BKS Markets App 访问 Global Markets"})}),l.jsx("div",{className:"flex-shrink-0",children:l.jsx("img",{src:"/images/iphones.png",alt:"BKS Markets App",className:"h-48 object-contain"})}),l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:l.jsx("img",{src:"/images/appleStore.png",alt:"Download on App Store",className:"h-12"})}),l.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:l.jsx("img",{src:"/images/GoogleStore.png",alt:"Get it on Google Play",className:"h-12"})})]})]})})})]})}function qf(){return l.jsx(B,{title:"点差",subtitle:"BKS Markets 有着很低的点差，让您在市场上更轻易的交易 。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
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
	`}})})}function Zf(){return l.jsx(B,{title:"交易条件",subtitle:"BKS Markets 交易环境将为您提供在世界范围内均最具优势的报价和 最为灵活的交易条件。此类优势将是需要最佳执行质量与最低点差 易者心目中的理想之选。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
	
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
	`}})})}function e0(){return l.jsx(B,{title:"交易时间",subtitle:"在 BKS Markets，您一直有可供交易的市场。我们可以为您提供7天24小时服务。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
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
	`}})})}function t0(){return l.jsx(B,{title:"交易服务器",subtitle:"BKS Markets的MT5交易服务器分别位于纽约的NY4 Equinix数据中心和伦敦LD5 IBX Equinix数据中心，为客户提供最快的执行速度。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
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
	`}})})}function a0(){return l.jsx(B,{title:"隔夜利息费率",subtitle:"BKS Markets 隔夜利息费率是世界上最具竞争力的。最大化您的隔夜利息收益或减少您交易我们产品的隔夜利息的成本。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
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
	`}})})}function s0(){const e=[{name:"MT iPhone/iPad",link:"/platforms/mt5-iphone",icon:Ni},{name:"MT 安卓版",link:"/platforms/mt5-android",icon:Ni},{name:"MT 苹果MAC版",link:"/platforms/mt5-mac",icon:mf}],t=["市场领先的点差环境和低交易手续费","Leverage up to 1:400","最小交易手数 0.01","灵活的出入金选项","没有交易限制","闪电般的订单执行速度"],a=[{title:"超快指令执行",description:"BKS Markets MetaTrader 5服务器坐落于纽约的Equinix NY4数据中心. NY4数据中心是一个拥有超过600家做多/做空交易公司, 交易所, 交易场所, 市场数据和服务提供商. MetaTrader 5服务器可以与我们的ECN交易模式交叉连接以确保超低的交易延迟和快速执行.",additional:"BKS Markets的MetaTrader 5服务器的延迟时间可以通过联系位于NY4数据中心的VPS提供商或通过专线网络链接到附近的数据中心并使交易延迟小于1毫秒.",icon:ys},{title:"没有交易限制",description:"BKS Markets的 MetaTrader 5 交易平台没有交易限制. 我们可以为全球范围内的剥头皮和高频交易者提供一些最佳的交易条件, 些条件将允许交易者在0点差之间下单并执行平仓操作. 这一设定意味着交易单的止损价格可以靠近市场价格. 这意味着包括止损在内的交易单都可以在最靠近市场价格的价位成交.",additional:"交易者也可以使用对冲策略因为在BKS Markets没有先进先出原则(FIFO). 交易者并不需要为对冲仓位付出额外的保证金便可以享受对冲带来的利益.",icon:Ke},{title:"点差最低0.1 点",description:"BKS Markets拥有全球 CFD 交易商种最有竞争力的点差. 在 MetaTrader 5交易平台上最低点差可以达到0.1 点并且欧元兑美元的平均点差可以在正常交易日内达到0.1点. 这是目前全球范围内最低的欧美平均点差.",additional:"我们的多达50个报价提供商组合意味着平台总是能否为客户提供报价并保持低点差, 特别是在市场发生剧烈波动的时候，比如消息面数据公布.",icon:We}];return l.jsxs(B,{title:"MetaTrader 5交易平台",subtitle:"在屡获殊荣的MetaTrader 5平台体验我们超快的执行速度和灵活的交易条件。",children:[l.jsx("section",{className:"py-8 bg-white border-b border-gray-200",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:e.map((s,r)=>{const i=s.icon;return l.jsxs(U,{to:s.link,className:"flex items-center px-6 py-3 bg-white border border-gray-300 rounded-full hover:border-gold-400 hover:bg-gold-50 transition-all duration-300 text-gray-700 hover:text-gold-600",children:[l.jsx(i,{className:"w-4 h-4 mr-2"}),l.jsx("span",{className:"font-medium",children:s.name})]},r)})})})}),l.jsx("section",{className:"py-12 md:py-16 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[l.jsx("div",{className:"text-center lg:text-left",children:l.jsx("img",{src:"/images/mt5-img.png",alt:"MetaTrader 5",className:"mx-auto lg:mx-0 max-w-full h-auto rounded-lg shadow-lg"})}),l.jsx("div",{children:l.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 shadow-lg p-8",children:[l.jsxs("div",{className:"mb-6",children:[l.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"Meta Trader 5"}),l.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:"摘要"})]}),l.jsx("div",{className:"space-y-3 mb-8",children:t.map((s,r)=>l.jsxs("div",{className:"flex items-start",children:[l.jsx(Ns,{className:"w-5 h-5 text-gold-600 mr-3 flex-shrink-0 mt-0.5"}),l.jsx("span",{className:"text-gray-700",children:s})]},r))}),l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center bg-gold-gradient text-black py-3 px-6 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300",children:"开通账户"})]})})]})})}),l.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[l.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"BKS Markets为客户提供在屡获殊荣的交易平台MetaTrader 5上交易的机会. 毫无疑问，因为它易于使用， MT5已经成为最受 CFD 交易员欢迎的交易平台，该平台具有丰富的交易环境和自动化交易能力."}),l.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"它已经从一个交易平台成长为一个国际化的社区，交易员的创新需求也因为技术的提升得以满足. BKS Markets与众多技术提供商均有合作，并且自豪的为您提供下一代MetaTrader 5交易平台, 这一设计将为您的交易水平带来更进一步的帮助."}),l.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"BKS Markets为您提供MetaTrader 5交易平台下的标准账户和ECN账户."})]})})}),l.jsx("section",{className:"py-12 md:py-16 bg-white",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsx("div",{className:"mb-12",children:l.jsxs("div",{className:"flex items-start justify-between mb-8",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900",children:"为何BKS Markets MetaTrader 5交易平台如此不同?"}),l.jsxs("div",{className:"hidden lg:block bg-gold-50 border border-gold-200 rounded-lg p-6 max-w-xs",children:[l.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:"系统要求"}),l.jsx("p",{className:"text-gray-700",children:"MetaTrader 5客户端要求Windows 7 或更高级别的系统. 同时也可能允许在苹果Mac OSX系统上运行."})]})]})}),l.jsx("div",{className:"space-y-12",children:a.map((s,r)=>{const i=s.icon;return l.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:l.jsxs("div",{className:"lg:col-span-6",children:[l.jsxs("div",{className:"flex items-start mb-4",children:[l.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:l.jsx(i,{className:"w-6 h-6 text-gold-600"})}),l.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:s.title})]}),l.jsx("p",{className:"text-lg text-gray-700 leading-relaxed mb-4",children:s.description}),l.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:s.additional})]})},r)})}),l.jsxs("div",{className:"lg:hidden mt-8 bg-gold-50 border border-gold-200 rounded-lg p-6",children:[l.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:"系统要求"}),l.jsx("p",{className:"text-gray-700",children:"MetaTrader 5客户端要求Windows 7 或更高级别的系统. 同时也可能允许在苹果Mac OSX系统上运行."})]})]})}),l.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"text-center",children:[l.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:"开始交易"}),l.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:["与全球最值得信赖的 ",l.jsx("span",{className:"text-gold-600",children:"外汇CFD经纪商"})," 进行交易"]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"立即开户"})}),l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"开设模拟交易账户"})})]})]})})}),l.jsx("section",{className:"py-12 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[l.jsx("div",{className:"flex-1 min-w-[250px]",children:l.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4",children:"使用 BKS Markets App 访问 Global Markets"})}),l.jsx("div",{className:"flex-shrink-0",children:l.jsx("img",{src:"/images/iphones.png",alt:"BKS Markets App",className:"h-48 object-contain"})}),l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:l.jsx("img",{src:"/images/appleStore.png",alt:"Download on App Store",className:"h-12"})}),l.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:l.jsx("img",{src:"/images/GoogleStore.png",alt:"Get it on Google Play",className:"h-12"})})]})]})})})]})}function l0(){return l.jsx(B,{title:"苹果手机和平板电脑版本 MetaTrader",subtitle:"通过iPhone或iPad上市场领先的MetaTrader ECN帐户随时保持与市场的连接。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
				<div className="w-full md:w-3/12">
					<a href="mt5-iphone.html" className="text-primary">MT iPhone/iPad</a>
				</div>
				<div className="w-full md:w-3/12">
					<a href="mt5-android.html" className="text-secondary">MT 安卓版</a>
				</div>
				<div className="w-full md:w-3/12">
					<a href="mt5-mac.html" className="text-secondary">MT 苹果MAC版</a>
				</div>
			</div>
		</div>
	</div>
	
	<div className="w-full maket_header metatrader_cont" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-8/12 maket_header text-center">						
					<img src="images/mt-ios-img.png">
				</div>				
				<div className="w-full md:w-4/12 ">	
					<div className="market-facts-card forex">
						<div className="facts-header">
							<div className="header-label">苹果手机版MetaTrader 5</div>
							<div className="header-title">摘要</div>
						</div>
						<div className="facts-items">						
							<div className="facts-item">市场最低点差 0.1 点起</div>							
							<div className="facts-item">超快指令执行</div>	
							<div className="facts-item">银行间深度流动性</div>	
							<div className="facts-item">随时随地登陆您的交易账户</div>	
							<div className="facts-item">MetaTrader 5</div>								
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
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-12/12">						
					<h5 className="mb-4">我们提供苹果手机和平板电脑的MT5. 这两个交易平台可以使交易者更便捷的登陆账户.
</h5><h5 className="mb-0">
苹果手机和平板电脑版本的MetaTrader交易软件将配有很多新特性, 比如横向/纵向视图视角的改变 (一个简单的旋转装置). 苹果手机版本的MetaTrader交易软件也提供一键交易功能, 这一功能可以使投资者自己选择版面布局, 以及高级图表分析. 使用手机版MetaTrader软件可以在不影响执行速度或质量的前提下，为客户提供无限的灵活性体验.
</h5>
				</div>				
				
								
			</div>			
		</div>
	</div>
	<div className="w-full maket_header " >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-12/12">						
					<div className="float-right">
						<div className="floated-block">
							<h3>相关系统要求</h3>
							<p>iPhone iOS 7.0 或更新版本. 可以与苹果手机，平板电脑进行兼容.</p>
						</div>
					</div>
					<h1 className="font-bold pb-4">在苹果手机或平板电脑上交易!</h1>		
					<h1 className=" ">特点</h1>
					<div className="block-list-flex flex-wrap ">实时的外汇和差价合约报价</div>	
					<div className="block-list-flex flex-wrap mt-2">一整套完整交易单, 包括市场挂单
在图表上直接交易</div>	<div className="block-list-flex flex-wrap mt-2">
支持所有类型的执行模式</div>	<div className="block-list-flex flex-wrap mt-2">
查看完整的交易历史</div>	<div className="block-list-flex flex-wrap mt-2">
带有缩放和滚动功能的实时交互式图表</div>	<div className="block-list-flex flex-wrap mt-2">
30多种技术指标</div>	<div className="block-list-flex flex-wrap mt-2">
多种时间周期可用于分析市场价格走势</div>	<div className="block-list-flex flex-wrap mt-2">
3种图表可供选择: 长条图, 蜡烛图, 线型图</div>	<div className="block-list-flex flex-wrap mt-2">
可调整设定的技术指标</div>	
					<h1 className="pt-4 ">优势</h1>
					<div className="block-list-flex flex-wrap">简洁的用户指引界面
图标上显示交易级别和成交量</div>	<div className="block-list-flex flex-wrap mt-2">
离线模式(价格和图表符号)</div>	<div className="block-list-flex flex-wrap mt-2">
可以从苹果商城直接下载该免费软件</div>	<div className="block-list-flex flex-wrap mt-2">
在图表上直接交易</div>	
				</div>		
			</div>	
		</div>	
	</div>	
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >开始交易</h3>		
					<h1 className="f55 mb-5">现在就在苹果手机系统安装MetaTrader开设账户</h1>
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
	`}})})}function r0(){return l.jsx(B,{title:"MetaTrader 安卓版",subtitle:"不要错过机会! 使用安卓版交易系统可以随时在市场交易。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
				<div className="w-full md:w-3/12">
					<a href="mt5-iphone.html" className="text-secondary">MT iPhone/iPad</a>
				</div>
				<div className="w-full md:w-3/12">
					<a href="mt5-android.html" className="text-primary">MT 安卓版</a>
				</div>
				<div className="w-full md:w-3/12">
					<a href="mt5-mac.html" className="text-secondary">MT 苹果MAC版</a>
				</div>
			</div>
		</div>
	</div>
	
	<div className="w-full maket_header metatrader_cont" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-8/12 maket_header text-center">						
					<img src="images/mt-android-img.png">
				</div>				
				<div className="w-full md:w-4/12 ">	
					<div className="market-facts-card forex">
						<div className="facts-header">
							<div className="header-label">安卓版MetaTrader 5</div>
							<div className="header-title">摘要</div>
						</div>
						<div className="facts-items">													
							<div className="facts-item">最低点差 0.1 点起</div>							
							<div className="facts-item">超快指令执行</div>	
							<div className="facts-item">银行间的市场流动性深度</div>	
							<div className="facts-item">可以在任何地点登陆交易账户</div>	
							<div className="facts-item">MetaTrader 5</div>								
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
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-12/12">						
					<h5 className="mb-4">我们提供安卓版的MT5. 这两个交易平台可以使交易者更便捷的登陆账户.
</h5><h5 className="mb-0">
 BKS Markets的安卓版操作系统可以给您无与伦比的交易执行速度和有竞争力的点差.它的特点是可以在多个屏幕上实现一键交易和可定制布局. 并且可以完整查看交易历史数据和使用高级制图工具, 交易者可以自行管理账户, 交易所有平台提供的交易产品, 并使用多大30多种的指标用于市场分析.</h5>
				</div>				
				
								
			</div>			
		</div>
	</div>
	<div className="w-full maket_header " >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-12/12">						
					<div className="float-right">
						<div className="floated-block">
							<h3>相关系统要求</h3>
							<p>安卓系统4.0或者更高</p>
						</div>
					</div>
					<h1 className="font-bold pb-4">通过安卓系统进行交易!</h1>		
					<h1 className=" ">特点</h1>
					<div className="block-list-flex flex-wrap ">实时的外汇和差价合约报价</div>	
					<div className="block-list-flex flex-wrap mt-2">一整套完整交易单, 包括市场挂单
在图表上直接交易</div>	<div className="block-list-flex flex-wrap mt-2">
支持所有类型的执行模式</div>	<div className="block-list-flex flex-wrap mt-2">
查看完整的交易历史</div>	<div className="block-list-flex flex-wrap mt-2">
带有缩放和滚动功能的实时交互式图表</div>	<div className="block-list-flex flex-wrap mt-2">
30多种技术指标</div>	<div className="block-list-flex flex-wrap mt-2">
多种时间周期可用于分析市场价格走势</div>	<div className="block-list-flex flex-wrap mt-2">
3种图表可供选择: 长条图, 蜡烛图, 线型图</div>	<div className="block-list-flex flex-wrap mt-2">
可调整设定的技术指标</div>	
					<h1 className="pt-4 ">优势</h1>
					<div className="block-list-flex flex-wrap">简洁的用户指引界面</div>	<div className="block-list-flex flex-wrap mt-2">
图标上显示交易级别和成交量</div>	<div className="block-list-flex flex-wrap mt-2">
离线模式(价格和图表符号)</div>	<div className="block-list-flex flex-wrap mt-2">
可以从安卓市场直接下载免费软件</div>
				</div>		
			</div>	
		</div>	
	</div>	
	
	<div className="w-full index_banner" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap ">
				<div className="w-full md:w-12/12 text-center pt-5">
					<h3 >开始交易</h3>		
					<h1 className="f55 mb-5">在安卓版Metatrader开设账户</h1>
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
	`}})})}function i0(){return l.jsx(B,{title:"苹果Mac版 MetaTrader",subtitle:"利用专为Mac设计的专有版MetaTrader，利用 BKS Markets 企业级网络光纤连接。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
				<div className="w-full md:w-3/12">
					<a href="mt5-iphone.html" className="text-secondary">MT iPhone/iPad</a>
				</div>
				<div className="w-full md:w-3/12">
					<a href="mt5-Android.html" className="text-secondary">MT 安卓版</a>
				</div>
				<div className="w-full md:w-3/12">
					<a href="mt5-mac.html" className="text-primary">MT 苹果MAC版</a>
				</div>
			</div>
		</div>
	</div>
	
	<div className="w-full maket_header metatrader_cont" >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-8/12 maket_header text-center">						
					<img src="images/mt-macos-img.png">
				</div>				
				<div className="w-full md:w-4/12 ">	
					<div className="market-facts-card forex">
						<div className="facts-header">
							<div className="header-label">苹果Mac版MetaTrader</div>
							<div className="header-title">摘要</div>
						</div>
						<div className="facts-items">													
							<div className="facts-item">市场最低点差 0.1 点起</div>							
							<div className="facts-item">超快指令执行</div>	
							<div className="facts-item">银行间深度流动性</div>	
							<div className="facts-item">1:400 Leverage</div>	
							<div className="facts-item">MetaTrader 5</div>								
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
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-12/12">						
					<h5 className="mb-0"> BKS Markets 为苹果系统的用户打造了苹果IOS版本的Metatrader 5操作系统，此系统的特点在于客户可以在不安装系统的前提下使用MT5的多项功能.我们的苹果Mac版本的应用软件可以为客户提供与台式电脑用户同样的功能. 现在Mac系统的童虎可以通过安装并使用EA来获取来自第三方的软件优势并应用在交易平台上.</h5>
				</div>				
				
								
			</div>			
		</div>
	</div>
	<div className="w-full maket_header " >
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-content-around ">				
				<div className="w-full md:w-12/12">						
					<div className="float-right">
						<div className="floated-block">
							<h3>系统要求</h3>
							<p>Mac OS X 10.x 或更高</p>
						</div>
					</div>
					<h1 className="font-bold pb-4">使用MetaTrader直接在您的Mac系统下交易</h1>		
					<h1 className=" ">特点</h1>
					<div className="block-list-flex flex-wrap ">实时的外汇和差价合约报价</div>	
					<div className="block-list-flex flex-wrap mt-2">全系列自定义指标</div><div className="block-list-flex flex-wrap mt-2">
一整套完整交易单, 包括市场挂单</div><div className="block-list-flex flex-wrap mt-2">
优势均来自于MetaTrader 5平台的特点</div><div className="block-list-flex flex-wrap mt-2">
运行所有自动化交易软件 (EAs)</div><div className="block-list-flex flex-wrap mt-2">
高级图形工具和分析功能</div>	
					<h1 className="pt-4 ">优势</h1>
					<div className="block-list-flex flex-wrap">更简单的Metatrader 5使用界面</div><div className="block-list-flex flex-wrap mt-2">
市场领先的ECN</div><div className="block-list-flex flex-wrap mt-2">
无与伦比的交易执行速度</div><div className="block-list-flex flex-wrap mt-2">
没有交易限制 - 允许剥头皮交易</div><div className="block-list-flex flex-wrap mt-2">
交易外汇，股票，贵金属和差价合约</div>	
				</div>		
			
				<div className="w-full md:w-12/12 specification_card">	
					<h1 className="pt-4 ">安装</h1>
					<div className="accordion" id="accordionExample">
					  <div className="card">
						<div className="card-header" id="headingTwo">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" style="font-size:24px;"  type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							  交易平台安装介绍
							</button>
						  </h2>
						</div>
						<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
						  <div className="card-body">
							 <div className="answer-block">
								  <div className="step-block step-block--style">
									  <div className="step-block__number">1.</div>
									  <div className="step-block__detail">
										  下载  ".dmg" 文件并打开.
									  </div>
								  </div>
								  <div className="step-block step-block--style">
									  <div className="step-block__number">2.</div>
									  <div className="step-block__detail">
										  打开文件后将苹果Mac版本 BKS Markets MetaTrader文件拖拽到软件文件夹 .
									  </div>
								  </div>
								  <div className="step-block step-block--style">
									  <div className="step-block__number">3.</div>
									  <div className="step-block__detail">
										  当文件拖拽到软件文件夹后，软件安装程序将自动开始并安装苹果Mac版本到您的电脑.
									  </div>
								  </div>
								  <div className="step-block step-block--style">
									  <div className="step-block__number">4.</div>
									  <div className="step-block__detail">
										  使用登陆信息登陆到您的真实或模拟账户.
									  </div>
								  </div>
							  </div>
							 
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading1">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" style="font-size:24px;"  type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
							  安装自动化交易软件 (EAs)
							</button>
						  </h2>
						</div>
						<div id="collapse1" className="collapse" aria-labelledby="heading1" data-parent="#accordionExample">
						  <div className="card-body">
							 <div className="answer-block">
                                      <div className="step-block step-block--style">
                                          <div className="step-block__number">1.</div>
                                          <div className="step-block__detail">
                                              下载并保存您的自动化交易软件在您的苹果Mac系统. 请记住您下载的电脑路径.
                                          </div>
                                      </div>
                                      <div className="step-block step-block--style">
                                          <div className="step-block__number">2.</div>
                                          <div className="step-block__detail">
                                              选择 "开始" 
                                          </div>
                                      </div>
                                      <div className="step-block step-block--style">
                                          <div className="step-block__number">3.</div>
                                          <div className="step-block__detail">
                                              选择 程序
                                          </div>
                                      </div>
                                      <div className="step-block step-block--style">
                                          <div className="step-block__number">4.</div>
                                          <div className="step-block__detail">
                                              鼠标右键点击 "显示内容"
                                          </div>
                                      </div>
                                      <div className="step-block step-block--style">
                                          <div className="step-block__number">5.</div>
                                          <div className="step-block__detail">
                                              选择 "C盘" 然后 "Program Files" 然后 " BKS Markets Trader" 然后选择 "experts"
                                          </div>
                                      </div>
                                      <div className="step-block step-block--style">
                                          <div className="step-block__number">6.</div>
                                          <div className="step-block__detail">
                                              复制您的 "ex4" 和 "mq4" 文件到自动化交易的目录
                                          </div>
                                      </div>
                                      <div className="step-block step-block--style">
                                          <div className="step-block__number">7.</div>
                                          <div className="step-block__detail">
                                              打开 BKS Markets苹果Mac版安装程序，然后您就可以在导航菜单中看到您的自动化交易软件.
                                          </div>
                                      </div>
                                  </div>
							 
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" id="heading2">
						  <h2 className="mb-0">
							<button className="btn btn-link collapsed" style="font-size:24px;"  type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
							  安装指标
							</button>
						  </h2>
						</div>
						<div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordionExample">
						  <div className="card-body">
							<div className="answer-block">
                                      <div className="step-block step-block--style">
                                          <div className="step-block__number">1.</div>
                                          <div className="step-block__detail">
                                              下载并保存指标到苹果Mac系统. 请记住您下载的电脑路径.
                                          </div>
                                      </div>
                                      <div className="step-block step-block--style">
                                          <div className="step-block__number">2.</div>
                                          <div className="step-block__detail">
                                              选择 "开始" 
                                          </div>
                                      </div>
                                      <div className="step-block step-block--style">
                                          <div className="step-block__number">3.</div>
                                          <div className="step-block__detail">
                                              选择 程序
                                          </div>
                                      </div>
                                      <div className="step-block step-block--style">
                                          <div className="step-block__number">4.</div>
                                          <div className="step-block__detail">
                                              鼠标右键点击 "显示内容"
                                          </div>
                                      </div>
                                      <div className="step-block step-block--style">
                                          <div className="step-block__number">5.</div>
                                          <div className="step-block__detail">
                                              选择 "C盘" 然后 "Program Files" 然后 " BKS Markets Trader" 然后选择 "experts"
                                          </div>
                                      </div>
                                      <div className="step-block step-block--style">
                                          <div className="step-block__number">6.</div>
                                          <div className="step-block__detail">
                                              复制您的 "ex4" 和 "mq4" 文件到自动化交易的目录
                                          </div>
                                      </div>
                                      <div className="step-block step-block--style">
                                          <div className="step-block__number">7.</div>
                                          <div className="step-block__detail">
                                              打开 BKS Markets 苹果Mac版安装软件然后就可以在导航菜单中看到您的指标软件.
                                          </div>
                                      </div>
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
					<h1 className="f55 mb-5">现在就在Mac系统安装MetaTrader开设账户</h1>
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
	`}})})}function n0(){const e=[{name:"ECN Account",link:"/accounts/raw-spread"},{name:"标准账户",link:"/accounts/standard"},{name:"账户入金",link:"/funding",active:!0},{name:"出金取款",link:"/withdrawal"}],t=[{name:"Credit and Debit Cards 借记/信用卡",icon:bs,currencies:"AUD USD JPY EUR NZD SGD GBP CAD",processingTime:"即时",image:"/images/visa_2.png",image2:"/images/master.png"},{name:"PayPal",icon:cs,currencies:"AUD USD JPY EUR NZD SGD GBP CAD HKD CHF",processingTime:"即时",image:"/images/paypal_2.png"},{name:"USDT",icon:wm,currencies:"USD AUD GBP EUR CAD SGD JPY",processingTime:"即时",image:"/images/USDT.png"}],a=[{title:"支付过程",description:"为了更快的处理，我们建议所有账户持有人从其客户专域内将资金存入其交易账户。在您的客户专区，您可以通过银联方式，USDT以及国际电汇等方式为您的账户进行充值。如果您还没有访问过我们的客户专区，请遵循访问指令。",icon:km},{title:"资金安全",description:"您的交易账户的客户资金是被存放在安全等级为AA级银行的客户信托账户之下的。电子支付使用SSL（安全套接字层）技术进行处理，并进行加密以确保安全性。所有付款信息都是保密的，只有在 BKS Markets Global 的交易账户资金出入使用。",icon:Ke},{title:"银行费用",description:"BKS Markets Global 对客户出入金不收取任何额外费用的。然而，请知悉，您可能会被收取一些国际银行机构的支付费用。BKS Markets Global 不承担任何此类银行费用的责任。",icon:gi},{title:"第三方支付",description:"BKS Markets Global 不接受来自第三方的支付。请确保所有存款到您的交易帐户来自一个银行帐户在您的名字。如果交易账户持有人是银行账户/信用卡上的一方，则接受来自联合银行账户/信用卡的付款。",icon:Ke}];return l.jsxs(B,{title:"账户入金",subtitle:"BKS Markets提供了超过14种灵活的入金选择，包括10种不同的基本货币。即刻免费使用。",children:[l.jsx("section",{className:"py-8 bg-white border-b border-gray-200",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:e.map((s,r)=>l.jsx(U,{to:s.link,className:`px-6 py-3 rounded-full font-medium transition-all duration-300 ${s.active?"bg-gold-gradient text-black hover:shadow-gold-lg":"bg-white border border-gray-300 text-gray-700 hover:border-gold-400 hover:bg-gold-50"}`,children:s.name},r))})})}),l.jsx("section",{className:"py-12 md:py-16 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:t.map((s,r)=>(s.icon,l.jsx("div",{className:"bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",children:l.jsxs("div",{className:"p-6",children:[l.jsxs("div",{className:"mb-4",children:[l.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"入金选择"}),l.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:s.name}),l.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[s.image&&l.jsx("img",{src:s.image,alt:s.name,className:"h-8 object-contain"}),s.image2&&l.jsx("img",{src:s.image2,alt:"Mastercard",className:"h-8 object-contain"})]}),l.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"可接受货币:"}),l.jsx("p",{className:"text-sm font-semibold text-gray-900",children:s.currencies})]}),l.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 mb-6 text-center",children:[l.jsx("p",{className:"text-xs text-gray-600 mb-2",children:"大约处理时间"}),l.jsx("span",{className:"inline-block bg-gold-100 text-gold-700 px-4 py-1 rounded-full text-sm font-bold",children:s.processingTime})]}),l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center bg-gold-gradient text-black py-3 px-6 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300",children:"开通账户"})]})},r)))})})}),l.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:a.map((s,r)=>{const i=s.icon;return l.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[l.jsxs("div",{className:"flex items-start mb-4",children:[l.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:l.jsx(i,{className:"w-6 h-6 text-gold-600"})}),l.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:s.title})]}),l.jsx("p",{className:"text-gray-700 leading-relaxed",children:s.description})]},r)})})})}),l.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"text-center",children:[l.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:"立即开始交易"}),l.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:["与全球最值得信赖的 ",l.jsx("span",{className:"text-gold-600",children:"外汇CFD经纪商"})," 进行交易"]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"立即开户"})}),l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"开设模拟交易账户"})})]})]})})}),l.jsx("section",{className:"py-12 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[l.jsx("div",{className:"flex-1 min-w-[250px]",children:l.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4",children:"使用 BKS Markets App 访问 Global Markets"})}),l.jsx("div",{className:"flex-shrink-0",children:l.jsx("img",{src:"/images/iphones.png",alt:"BKS Markets App",className:"h-48 object-contain"})}),l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:l.jsx("img",{src:"/images/appleStore.png",alt:"Download on App Store",className:"h-12"})}),l.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:l.jsx("img",{src:"/images/GoogleStore.png",alt:"Get it on Google Play",className:"h-12"})})]})]})})})]})}function d0(){const e=[{name:"ECN Account",link:"/accounts/raw-spread"},{name:"标准账户",link:"/accounts/standard"},{name:"账户入金",link:"/funding"},{name:"出金取款",link:"/withdrawal",active:!0}],t=[{title:"出金申请截止时间",description:"出金申请截止时间为12:00 AEST / AEDT。 如果您的出金申请在此时间之前提交，将在当日处理。 如果您的出金申请在此时间之后提交，将在下一个工作日处理。",icon:ym},{title:"银行费用",description:"BKS Markets 不另行收取存款或提现手续费用。但是，还请注意，当您对部分国际银行机构进行转账操作时，或将产生包括中转行手续费类的资费。BKS Markets 不对任何银行费用承担责任。",icon:gi},{title:"国际银行电汇",description:"国际银行电汇最多需要 14 天到账，且中间行和/或收款行可能收取额外费用。",icon:Ke},{title:"信用卡/借记卡提现",description:"信用卡/借记卡提现*操作将不收取任何资费。一经处理，信用卡/借记卡提现部分或将于3-5个工作日内到账。不过，还是需要注意的是，在部分特殊场合，有时可能需要多达10个工作日到账，根据银行方面，到账时间会有所差异。*敬请留意：并非所有国家都支持信用卡提现。",icon:bs},{title:"超额提现",description:"如果您希望提取的金额超过 Visa/MasterCard 安全信用卡/借记卡所存入的金额，您将需要使用之前使用的另一种存款方式或银行电汇选项。",icon:gi},{title:"PayPal 出金",description:"Paypal方式提交的出金必须用当初通过同种方式入金的相应账号进行取款。出金方式均免费，且审批完后立即到账。",icon:Ke}],a=["如果您上传的信用卡/借记卡已过期，请在您的客户专区上传新卡以确保继续使用入金和出金的服务。如果新卡的号码与过期卡的号码不同，您需要提交旧卡发卡银行发出的信函，确认已发出新卡来取代旧卡。","如果您上传的信用卡/借记卡已丢失/被盗/损坏/取消，您需要提交旧卡发卡银行发出的信函，确认旧卡已不再有效。","如果上传的新卡在申请出金之前尚未用于入金，则需要存入少量的金额以激活此卡上的出金功能。","BKS Markets会根据情况，在出金到您的新卡之前要求您提交文件（比如，通过老卡入金的入金收据凭证）。","出金超过Visa / MasterCard信用卡/借记卡的金额的部分，您需要选择之前使用的其他入金方式或银行电汇选项。","BKS Markets不接受第三方支付。请确保您的付款人姓名和交易账户持有人名称一致。如果针对联名账户/信用卡持有人，可以支付到任何一方的交易账户。"];return l.jsxs(B,{title:"出金取款",subtitle:"为了加快处理速度，目前要求所有帐户持有人从客户专区内提交出金请求。如果您还无法访问客户专区，请按照访问说明进行操作。",children:[l.jsx("section",{className:"py-8 bg-white border-b border-gray-200",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:e.map((s,r)=>l.jsx(U,{to:s.link,className:`px-6 py-3 rounded-full font-medium transition-all duration-300 ${s.active?"bg-gold-gradient text-black hover:shadow-gold-lg":"bg-white border border-gray-300 text-gray-700 hover:border-gold-400 hover:bg-gold-50"}`,children:s.name},r))})})}),l.jsx("section",{className:"py-12 md:py-16 bg-white",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"mb-8",children:[l.jsxs("div",{className:"bg-gradient-to-r from-gold-50 to-white p-6 rounded-xl border-l-4 border-gold-600 mb-6",children:[l.jsx("p",{className:"text-lg font-semibold text-gray-900 mb-2",children:"为了加快处理速度，目前要求所有帐户持有人从客户专区内提交出金请求。"}),l.jsx("p",{className:"text-gray-700",children:"如果您还无法访问客户专区，请按照访问说明进行操作。"})]}),l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-8",children:"如果您还没有提交过出金申请，请注意："})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-12",children:t.map((s,r)=>{const i=s.icon;return l.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[l.jsxs("div",{className:"flex items-start mb-3",children:[l.jsx("div",{className:"p-2 bg-gold-50 rounded-full mr-3",children:l.jsx(i,{className:"w-5 h-5 text-gold-600"})}),l.jsx("h3",{className:"text-lg font-bold text-gray-900",children:s.title})]}),l.jsx("p",{className:"text-gray-700 leading-relaxed ml-10",children:s.description})]},r)})}),l.jsxs("div",{className:"bg-gray-50 rounded-xl p-8 border border-gray-200",children:[l.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-6",children:"其他重要信息"}),l.jsx("div",{className:"space-y-4",children:a.map((s,r)=>l.jsxs("div",{className:"flex items-start",children:[l.jsx(Ns,{className:"w-5 h-5 text-gold-600 mr-3 flex-shrink-0 mt-0.5"}),l.jsx("p",{className:"text-gray-700 leading-relaxed",children:s})]},r))})]})]})}),l.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"text-center",children:[l.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:"开始交易"}),l.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:["与全球最值得信赖的 ",l.jsx("span",{className:"text-gold-600",children:"外汇CFD经纪商"})," 进行交易"]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"立即开户"})}),l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"开设模拟交易账户"})})]})]})})}),l.jsx("section",{className:"py-12 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[l.jsx("div",{className:"flex-1 min-w-[250px]",children:l.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4",children:"使用 BKS Markets App 访问 Global Markets"})}),l.jsx("div",{className:"flex-shrink-0",children:l.jsx("img",{src:"/images/iphones.png",alt:"BKS Markets App",className:"h-48 object-contain"})}),l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:l.jsx("img",{src:"/images/appleStore.png",alt:"Download on App Store",className:"h-12"})}),l.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:l.jsx("img",{src:"/images/GoogleStore.png",alt:"Get it on Google Play",className:"h-12"})})]})]})})})]})}function o0(){const e=[{name:"点差",link:"/trading/spreads"},{name:"简捷的报价",link:"/trading/spreads"},{name:"CFD 交易",link:"/forex-trading"}],t=[{title:"更低的点差",description:"我们不断地在现有的交易环境中增加更多的流动性提供源，以便使我们的交易者享有全球最好的 CFD 交易条件。 优良的交易环境为客户带来最佳的交易体验。",icon:bf},{title:"快速执行",description:"BKS Markets分别在纽约和伦敦的NY4和LD5数据中心的贸易服务器上拥有自己的企业级硬件支持。 数据中心也是我们的报价提供商存放服务器的地方。专用的光纤交叉连接到我们的网络，报价提供商确保为我们的客户提供最低延迟和最快的交易执行。",icon:ys},{title:"超强的技术",description:"BKS Markets已经与世界最好的交易技术公司合作为您提供无与伦比的交易环境和尖端的交易工具，这些工具包括：市场（DOM）深度，内部市场点差监控；阶梯交易技术；使用客户自定义模板进行自动平仓等等。我们的iPhone和Android移动设备交易应用已经进行了优化，为您提供最佳的移动交易体验。",icon:Rd}],a=[{title:"终极绝佳的交易支持",description:"BKS Markets has been created with traders in mind. Scalping, hedging, and automated trading are all allowed. Our ECN Acount spreads start from 0.01pips. We have flexible leverage options offering up to 1:400, and accept deposits in 10 major currencies.",icon:zd},{title:"灵活的交易量",description:"客户可以通过我们的交易环境成交从0.01手（1,000基础货币）到250手（2500万基础货币）的交易规模。 我们的技术对价格进行分类和排序，以允许在多个报价提供商及其报价层上实时执行交易，这确保了任何交易规模的最佳价格。",icon:We}],s=[{title:"无与伦比的客服服务",description:"BKS Markets致力于为客户提供无与伦比的客户服务和支持，我们的团队都在外汇行业有着显赫的从业经历，因此他们懂得 CFD 交易者的需求。所以在BKS Markets您可以放心交易，因为我们每周7天24小时都在陪伴着您。",icon:Od},{title:"高级的交易工具",description:"我们在MetaTrader上的插件如一键成交模块、市场深度、点差监控、交易风险计算、高级订单类型等过去在MT5上不曾有的功能都将为交易者提供更棒的交易体验。",icon:zd},{title:"卓越的交易平台",description:"MetaTrader 5 是当今世界最好的平台之一，BKS Markets 通过 MT5 直接连接各大银行的报价，为客户提供更优质的交易环境。",icon:Rd},{title:"信任与透明",description:"信任与透明是BKS Markets的核心价值观。BKS Markets 作为CFD 交易商承诺绝不存在人为干涉报价、篡改价格和交易限制等行为。",icon:Ke}];return l.jsxs(B,{title:"全球受欢迎的经纪商",subtitle:"通过为交易者提供他们真正想要的东西，BKS Markets已发展成为全球受欢迎的经纪商。",children:[l.jsx("section",{className:"py-8 bg-white border-b border-gray-200",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:e.map((r,i)=>l.jsx(U,{to:r.link,className:"px-6 py-3 bg-white border border-gray-300 rounded-full hover:border-gold-400 hover:bg-gold-50 transition-all duration-300 text-gray-700 hover:text-gold-600 font-medium",children:r.name},i))})})}),l.jsx("section",{className:"py-12 md:py-16 bg-white",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsx("div",{className:"mb-8",children:l.jsx("div",{className:"bg-gradient-to-r from-gold-50 to-white p-6 rounded-xl border-l-4 border-gold-600 mb-6",children:l.jsx("p",{className:"text-lg font-semibold text-gray-900",children:"加入我们，享受最低点差的CFD交易和我们顶级客服团队的全力支持。"})})}),l.jsx("div",{className:"space-y-12",children:t.map((r,i)=>{const n=r.icon;return l.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[l.jsxs("div",{className:"flex items-start mb-4",children:[l.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:l.jsx(n,{className:"w-6 h-6 text-gold-600"})}),l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900",children:r.title})]}),l.jsx("p",{className:"text-lg text-gray-700 leading-relaxed ml-14",children:r.description})]},i)})})]})}),l.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:a.map((r,i)=>{const n=r.icon;return l.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[l.jsxs("div",{className:"flex items-start mb-4",children:[l.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:l.jsx(n,{className:"w-6 h-6 text-gold-600"})}),l.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:r.title})]}),l.jsx("p",{className:"text-gray-700 leading-relaxed ml-14",children:r.description})]},i)})})})}),l.jsx("section",{className:"py-12 md:py-16 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"space-y-8",children:s.map((r,i)=>{const n=r.icon;return l.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300",children:[l.jsxs("div",{className:"flex items-start mb-4",children:[l.jsx("div",{className:"p-3 bg-gold-50 rounded-full mr-4",children:l.jsx(n,{className:"w-6 h-6 text-gold-600"})}),l.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:r.title})]}),l.jsx("p",{className:"text-gray-700 leading-relaxed ml-14",children:r.description})]},i)})})})}),l.jsx("section",{className:"py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"max-w-md mx-auto",children:l.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 shadow-lg",children:[l.jsxs("div",{className:"mb-6",children:[l.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"联系我们"}),l.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:"客服支持24/7"})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs(U,{to:"/help",className:"flex items-center p-4 bg-gold-50 rounded-lg hover:bg-gold-100 transition-colors duration-200",children:[l.jsx("div",{className:"p-2 bg-gold-100 rounded-full mr-3",children:l.jsx(Od,{className:"w-5 h-5 text-gold-600"})}),l.jsx("span",{className:"font-semibold text-gray-900",children:"Help Centre"})]}),l.jsxs("a",{href:"mailto:support@bksmarkets.com",className:"flex items-center p-4 bg-gold-50 rounded-lg hover:bg-gold-100 transition-colors duration-200",children:[l.jsx("div",{className:"p-2 bg-gold-100 rounded-full mr-3",children:l.jsx(Ns,{className:"w-5 h-5 text-gold-600"})}),l.jsx("span",{className:"font-semibold text-gray-900",children:"Email Us"})]})]})]})})})}),l.jsx("section",{className:"py-16 md:py-20 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"text-center",children:[l.jsx("h3",{className:"text-2xl md:text-3xl font-semibold mb-4 text-gray-900",children:"开始交易"}),l.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 text-gray-900",children:["值得信赖的全球 ",l.jsx("span",{className:"text-gold-600",children:"CFD 交易商"})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"立即开户"})}),l.jsx("a",{href:"https://crm.bksmarkets.com/#/user/register",className:"border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-bold hover:bg-gold-50 transition-all duration-300 inline-block",target:"_blank",rel:"noopener noreferrer",children:l.jsx("strong",{children:"开设模拟交易账户"})})]})]})})}),l.jsx("section",{className:"py-12 bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[l.jsx("div",{className:"flex-1 min-w-[250px]",children:l.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4",children:"使用 BKS Markets App 访问 Global Markets"})}),l.jsx("div",{className:"flex-shrink-0",children:l.jsx("img",{src:"/images/iphones.png",alt:"BKS Markets App",className:"h-48 object-contain"})}),l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:l.jsx("img",{src:"/images/appleStore.png",alt:"Download on App Store",className:"h-12"})}),l.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"block",children:l.jsx("img",{src:"/images/GoogleStore.png",alt:"Get it on Google Play",className:"h-12"})})]})]})})})]})}function c0(){return l.jsx(B,{title:"外汇优势",subtitle:"外汇市场是世界上最大的金融市场，每周5天24小时开放交易。无论何时，您都可以进行 CFD 交易。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
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
	`}})})}function m0(){return l.jsx(B,{title:"差价合约的优势",subtitle:"BKS Markets 在包括指数、能源、金属、大宗商品等在内的一系列CFD上提供了灵活的交易条件。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
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
	`}})})}function u0(){return l.jsx(B,{title:"投资者教育",subtitle:"在多次获奖的MetaTrader4平台体验超快速执行，最低的点差和无交易条件限制",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
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
	`}})})}function p0(){return l.jsx(B,{title:"外汇术语",subtitle:"",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
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
	`}})})}function h0(){return l.jsx(B,{title:"帮助中心",subtitle:"帮助中心 – 使用我们全面的知识库找到您需要的答案，或者可以直接联系我们24小时在线客服",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
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
	`}})})}function v0(){return l.jsx(B,{title:"法规文件",subtitle:"您可以在此找到所有您需要了解的关于我们的法律协议和条款条件。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
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
	`}})})}function f0(){return l.jsx(B,{title:"监管机构",subtitle:"BKS Markets is authorised and regulated by multiple Regulators across the globe. Trade with peace of mind knowing that  BKS Markets is monitored by some of the strictest financial regulators’ bodies in the world.",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
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
	`}})})}function x0(){return l.jsx(B,{title:"诚聘英才",subtitle:"在 BKS Markets，我们一直渴求最优秀的人才从而进一步深化和拓展全球市场。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
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
	`}})})}function g0(){return l.jsx(B,{title:"Client Funds Insurance up to US$1,000,000",subtitle:"We've got you covered",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
	
	
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
	`}})})}function N0(){return l.jsx(B,{title:"虚拟服务器",subtitle:"VPS虚拟服务器可以让交易者实现7天24小时不间断的交易，并且获得与 BKS Markets交易服务器之间最快的连接速度。",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
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
	`}})})}function b0(){return l.jsx(B,{title:"CFD 交易",subtitle:"BKS Markets 精心挑选的产品，平台和帐户类型使您可以感受到全球最受欢迎和最具流动性的市场，以获得24/5的最佳交易机会",children:l.jsx("div",{className:"container mx-auto px-4 py-12",dangerouslySetInnerHTML:{__html:`
	
	
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
	`}})})}function y0(){return l.jsxs(l.Fragment,{children:[l.jsx(Df,{}),l.jsx(Ff,{}),l.jsx(Af,{}),l.jsx(Rf,{}),l.jsx(Uf,{}),l.jsx(If,{})]})}function w0(){return l.jsx(xv,{children:l.jsxs("div",{className:"min-h-screen flex flex-col bg-white",children:[l.jsx(Ef,{}),l.jsx("main",{className:"flex-grow",children:l.jsxs(Wh,{children:[l.jsx(P,{path:"/",element:l.jsx(y0,{})}),l.jsx(P,{path:"/about",element:l.jsx(Lf,{})}),l.jsx(P,{path:"/contact",element:l.jsx(Of,{})}),l.jsx(P,{path:"/accounts",element:l.jsx(Kf,{})}),l.jsx(P,{path:"/accounts/raw-spread",element:l.jsx(zf,{})}),l.jsx(P,{path:"/accounts/standard",element:l.jsx($f,{})}),l.jsx(P,{path:"/markets",element:l.jsx(Qf,{})}),l.jsx(P,{path:"/markets/forex",element:l.jsx(Gf,{})}),l.jsx(P,{path:"/markets/commodities",element:l.jsx(Hf,{})}),l.jsx(P,{path:"/markets/indices",element:l.jsx(Vf,{})}),l.jsx(P,{path:"/markets/bonds",element:l.jsx(Wf,{})}),l.jsx(P,{path:"/markets/cryptocurrency",element:l.jsx(Yf,{})}),l.jsx(P,{path:"/markets/stocks",element:l.jsx(Xf,{})}),l.jsx(P,{path:"/markets/futures",element:l.jsx(Jf,{})}),l.jsx(P,{path:"/trading/spreads",element:l.jsx(qf,{})}),l.jsx(P,{path:"/trading/conditions",element:l.jsx(Zf,{})}),l.jsx(P,{path:"/trading/hours",element:l.jsx(e0,{})}),l.jsx(P,{path:"/trading/servers",element:l.jsx(t0,{})}),l.jsx(P,{path:"/trading/swap-rates",element:l.jsx(a0,{})}),l.jsx(P,{path:"/platforms/metatrader-5",element:l.jsx(s0,{})}),l.jsx(P,{path:"/platforms/mt5-iphone",element:l.jsx(l0,{})}),l.jsx(P,{path:"/platforms/mt5-android",element:l.jsx(r0,{})}),l.jsx(P,{path:"/platforms/mt5-mac",element:l.jsx(i0,{})}),l.jsx(P,{path:"/funding",element:l.jsx(n0,{})}),l.jsx(P,{path:"/withdrawal",element:l.jsx(d0,{})}),l.jsx(P,{path:"/why",element:l.jsx(o0,{})}),l.jsx(P,{path:"/education",element:l.jsx(u0,{})}),l.jsx(P,{path:"/education/advantages-of-forex",element:l.jsx(c0,{})}),l.jsx(P,{path:"/education/advantages-of-cfds",element:l.jsx(m0,{})}),l.jsx(P,{path:"/education/glossary",element:l.jsx(p0,{})}),l.jsx(P,{path:"/help",element:l.jsx(h0,{})}),l.jsx(P,{path:"/legal",element:l.jsx(v0,{})}),l.jsx(P,{path:"/regulation",element:l.jsx(f0,{})}),l.jsx(P,{path:"/careers",element:l.jsx(x0,{})}),l.jsx(P,{path:"/insurance",element:l.jsx(g0,{})}),l.jsx(P,{path:"/vps",element:l.jsx(N0,{})}),l.jsx(P,{path:"/forex-trading",element:l.jsx(b0,{})})]})}),l.jsx(Mf,{})]})})}kr.createRoot(document.getElementById("root")).render(l.jsx(Km.StrictMode,{children:l.jsx(w0,{})}));
