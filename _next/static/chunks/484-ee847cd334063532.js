"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[484],{908:(e,t,r)=>{r.d(t,{PA:()=>b});var n,o,i=r(7725),a=r(2115);if(!a.useState)throw Error("mobx-react-lite requires React with Hooks support");if(!i.Gn)throw Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var u=r(7650);function l(e){e()}function s(e){return(0,i.yl)(e)}var f=function(){function e(e){var t=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(e){void 0===e&&(e=1e4),clearTimeout(t.sweepTimeout),t.sweepTimeout=void 0;var r=Date.now();t.registrations.forEach(function(n,o){r-n.registeredAt>=e&&(t.finalize(n.value),t.registrations.delete(o))}),t.registrations.size>0&&t.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){t.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,r){this.registrations.set(r,{value:t,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){void 0===this.sweepTimeout&&(this.sweepTimeout=setTimeout(this.sweep,1e4))}}),e}(),c=new("undefined"!=typeof FinalizationRegistry?FinalizationRegistry:f)(function(e){var t;null===(t=e.reaction)||void 0===t||t.dispose(),e.reaction=null}),d=r(4236);function p(e){e.reaction=new i.qT("observer".concat(e.name),function(){var t;e.stateVersion=Symbol(),null===(t=e.onStoreChange)||void 0===t||t.call(e)})}var m="function"==typeof Symbol&&Symbol.for,g=null!==(o=null===(n=Object.getOwnPropertyDescriptor(function(){},"name"))||void 0===n?void 0:n.configurable)&&void 0!==o&&o,h=m?Symbol.for("react.forward_ref"):"function"==typeof a.forwardRef&&(0,a.forwardRef)(function(e){return null}).$$typeof,y=m?Symbol.for("react.memo"):"function"==typeof a.memo&&(0,a.memo)(function(e){return null}).$$typeof;function b(e,t){if(y&&e.$$typeof===y)throw Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var r,n=null!==(r=null==t?void 0:t.forwardRef)&&void 0!==r&&r,o=e,i=e.displayName||e.name;if(h&&e.$$typeof===h&&(n=!0,"function"!=typeof(o=e.render)))throw Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var u=function(e,t){return function(e,t){void 0===t&&(t="observed");var r,n,o=a.useRef(null);if(!o.current){var i={reaction:null,onStoreChange:null,stateVersion:Symbol(),name:t,subscribe:function(e){return c.unregister(i),i.onStoreChange=e,i.reaction||(p(i),i.stateVersion=Symbol()),function(){var e;i.onStoreChange=null,null===(e=i.reaction)||void 0===e||e.dispose(),i.reaction=null}},getSnapshot:function(){return i.stateVersion}};o.current=i}var u=o.current;if(u.reaction||(p(u),c.register(o,u,u)),a.useDebugValue(u.reaction,s),(0,d.useSyncExternalStore)(u.subscribe,u.getSnapshot,u.getSnapshot),u.reaction.track(function(){try{r=e()}catch(e){n=e}}),n)throw n;return r}(function(){return o(e,t)},i)};return u.displayName=e.displayName,g&&Object.defineProperty(u,"name",{value:e.name,writable:!0,configurable:!0}),e.contextTypes&&(u.contextTypes=e.contextTypes),n&&(u=(0,a.forwardRef)(u)),function(e,t){Object.keys(e).forEach(function(r){v[r]||Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}(e,u=(0,a.memo)(u)),u}var v={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};!function(e){e||(e=l),(0,i.jK)({reactionScheduler:e})}(u.unstable_batchedUpdates),c.finalizeAllImmediately},5565:(e,t,r)=>{r.d(t,{default:()=>o.a});var n=r(4146),o=r.n(n)},8173:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let n=r(306),o=r(5155),i=n._(r(2115)),a=r(180),u=r(1394),l=r(4116),s=r(4445),f=r(5353),c=r(2170),d=r(9544);function p(e,t,r){"undefined"!=typeof window&&(async()=>e.prefetch(t,r))().catch(e=>{})}function m(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}r(2363);let g=i.default.forwardRef(function(e,t){let r,n;let{href:a,as:g,children:h,prefetch:y=null,passHref:b,replace:v,shallow:w,scroll:_,onClick:S,onMouseEnter:j,onTouchStart:P,legacyBehavior:O=!1,...x}=e;r=h,O&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let E=i.default.useContext(u.AppRouterContext),C=!1!==y,M=null===y?s.PrefetchKind.AUTO:s.PrefetchKind.FULL,{href:I,as:k}=i.default.useMemo(()=>{let e=m(a);return{href:e,as:g?m(g):e}},[a,g]),R=i.default.useRef(I),z=i.default.useRef(k);O&&(n=i.default.Children.only(r));let T=O?n&&"object"==typeof n&&n.ref:t,[A,N,D]=(0,l.useIntersection)({rootMargin:"200px"}),U=i.default.useCallback(e=>{(z.current!==k||R.current!==I)&&(D(),z.current=k,R.current=I),A(e)},[k,I,D,A]),F=(0,f.useMergedRef)(U,T);i.default.useEffect(()=>{E&&N&&C&&p(E,I,{kind:M})},[k,I,N,C,E,M]);let L={ref:F,onClick(e){O||"function"!=typeof S||S(e),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),E&&!e.defaultPrevented&&function(e,t,r,n,o,a,u){let{nodeName:l}=e.currentTarget;"A"===l.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),i.default.startTransition(()=>{let e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,E,I,k,v,w,_)},onMouseEnter(e){O||"function"!=typeof j||j(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),E&&C&&p(E,I,{kind:M})},onTouchStart:function(e){O||"function"!=typeof P||P(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),E&&C&&p(E,I,{kind:M})}};return(0,c.isAbsoluteUrl)(k)?L.href=k:O&&!b&&("a"!==n.type||"href"in n.props)||(L.href=(0,d.addBasePath)(k)),O?i.default.cloneElement(n,L):(0,o.jsx)("a",{...x,...L,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7970:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let n=r(306),o=r(9955),i=r(5155),a=o._(r(2115)),u=n._(r(7650)),l=n._(r(6107)),s=r(666),f=r(1159),c=r(3621);r(2363);let d=r(3576),p=n._(r(5514)),m=r(5353),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/foodforkiss/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,n,o,i,a){let u=null==e?void 0:e.src;e&&e["data-loaded-src"]!==u&&(e["data-loaded-src"]=u,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function y(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:u,width:l,decoding:s,className:f,style:c,fetchPriority:d,placeholder:p,loading:g,unoptimized:b,fill:v,onLoadRef:w,onLoadingCompleteRef:_,setBlurComplete:S,setShowAltText:j,sizesInput:P,onLoad:O,onError:x,...E}=e,C=(0,a.useCallback)(e=>{e&&(x&&(e.src=e.src),e.complete&&h(e,p,w,_,S,b,P))},[r,p,w,_,S,x,b,P]),M=(0,m.useMergedRef)(t,C);return(0,i.jsx)("img",{...E,...y(d),loading:g,width:l,height:u,decoding:s,"data-nimg":v?"fill":"1",className:f,style:c,sizes:o,srcSet:n,src:r,ref:M,onLoad:e=>{h(e.currentTarget,p,w,_,S,b,P)},onError:e=>{j(!0),"empty"!==p&&S(!0),x&&x(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...y(r.fetchPriority)};return t&&u.default.preload?(u.default.preload(r.src,n),null):(0,i.jsx)(l.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let w=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(d.RouterContext),n=(0,a.useContext)(c.ImageConfigContext),o=(0,a.useMemo)(()=>{let e=g||n||f.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:u,onLoadingComplete:l}=e,m=(0,a.useRef)(u);(0,a.useEffect)(()=>{m.current=u},[u]);let h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let[y,w]=(0,a.useState)(!1),[_,S]=(0,a.useState)(!1),{props:j,meta:P}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:y,showAltText:_});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{...j,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:S,sizesInput:e.sizes,ref:t}),P.priority?(0,i.jsx)(v,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8571:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let n=r(2115),o=r(8571),i="function"==typeof IntersectionObserver,a=new Map,u=[];function l(e){let{rootRef:t,rootMargin:r,disabled:l}=e,s=l||!i,[f,c]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(s||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},u.push(r),a.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!f){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,f,d.current]),[p,f,(0,n.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5353:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(2115);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=i(e,n),o.current=i(t,n))}:e||t,[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3003:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(306)._(r(2115)).default.createContext({})},675:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},666:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),r(2363);let n=r(5859),o=r(1159);function i(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var r;let u,l,s,{src:f,sizes:c,unoptimized:d=!1,priority:p=!1,loading:m,className:g,quality:h,width:y,height:b,fill:v=!1,style:w,overrideSrc:_,onLoad:S,onLoadingComplete:j,placeholder:P="empty",blurDataURL:O,fetchPriority:x,decoding:E="async",layout:C,objectFit:M,objectPosition:I,lazyBoundary:k,lazyRoot:R,...z}=e,{imgConf:T,showAltText:A,blurComplete:N,defaultLoader:D}=t,U=T||o.imageConfigDefault;if("allSizes"in U)u=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t);u={...U,allSizes:e,deviceSizes:t}}if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=z.loader||D;delete z.loader,delete z.srcSet;let L="__next_img_default"in F;if(L){if("custom"===u.loader)throw Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(C){"fill"===C&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!c&&(c=t)}let B="",V=a(y),$=a(b);if((r=f)&&"object"==typeof r&&(i(r)||void 0!==r.src)){let e=i(f)?f.default:f;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,s=e.blurHeight,O=O||e.blurDataURL,B=e.src,!v){if(V||$){if(V&&!$){let t=V/e.width;$=Math.round(e.height*t)}else if(!V&&$){let t=$/e.height;V=Math.round(e.width*t)}}else V=e.width,$=e.height}}let q=!p&&("lazy"===m||void 0===m);(!(f="string"==typeof f?f:B)||f.startsWith("data:")||f.startsWith("blob:"))&&(d=!0,q=!1),u.unoptimized&&(d=!0),L&&!u.dangerouslyAllowSVG&&f.split("?",1)[0].endsWith(".svg")&&(d=!0);let G=a(h),W=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:I}:{},A?{}:{color:"transparent"},w),K=N||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:V,heightInt:$,blurWidth:l,blurHeight:s,blurDataURL:O||"",objectFit:W.objectFit})+'")':'url("'+P+'")',H=K?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:K}:{},J=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:a,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,a),f=l.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:l.map((e,n)=>u({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:u({config:t,src:r,quality:i,width:l[f]})}}({config:u,src:f,unoptimized:d,width:V,quality:G,sizes:c,loader:F});return{props:{...z,loading:q?"lazy":m,fetchPriority:x,width:V,height:$,decoding:E,className:g,style:{...W,...H},sizes:J.sizes,srcSet:J.srcSet,src:_||J.src},meta:{unoptimized:d,priority:p,placeholder:P,fill:v}}}},6107:(e,t,r)=>{var n=r(2818);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return d}});let o=r(306),i=r(9955),a=r(5155),u=i._(r(2115)),l=o._(r(1172)),s=r(3003),f=r(1147),c=r(675);function d(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(2363);let m=["name","httpEquiv","charSet","itemProp"];function g(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(d(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let i=!0,a=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){a=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=m.length;e<t;e++){let t=m[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?i=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?i=!1:(r.add(e),n[t]=r)}}}}return i}}()).reverse().map((e,t)=>{let o=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,u.default.cloneElement(e,t)}return u.default.cloneElement(e,{key:o})})}let h=function(e){let{children:t}=e,r=(0,u.useContext)(s.AmpStateContext),n=(0,u.useContext)(f.HeadManagerContext);return(0,a.jsx)(l.default,{reduceComponentsToState:g,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5859:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:a}=e,u=n?40*n:t,l=o?40*o:r,s=u&&l?"viewBox='0 0 "+u+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3621:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let n=r(306)._(r(2115)),o=r(1159),i=n.default.createContext(o.imageConfigDefault)},1159:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},4146:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return u}});let n=r(306),o=r(666),i=r(7970),a=n._(r(5514));function u(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/foodforkiss/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=i.Image},5514:(e,t)=>{function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)+(r.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},3576:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(306)._(r(2115)).default.createContext(null)},180:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return i},formatWithValidation:function(){return u},urlObjectKeys:function(){return a}});let n=r(9955)._(r(4156)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,i=e.protocol||"",a=e.pathname||"",u=e.hash||"",l=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let f=e.search||l&&"?"+l||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==s?(s="//"+(s||""),a&&"/"!==a[0]&&(a="/"+a)):s||(s=""),u&&"#"!==u[0]&&(u="#"+u),f&&"?"!==f[0]&&(f="?"+f),""+i+s+(a=a.replace(/[?#]/g,encodeURIComponent))+(f=f.replace("#","%23"))+u}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return i(e)}},4156:(e,t)=>{function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function i(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return i},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},1172:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let n=r(2115),o="undefined"==typeof window,i=o?()=>{}:n.useLayoutEffect,a=o?()=>{}:n.useEffect;function u(e){let{headManager:t,reduceComponentsToState:r}=e;function u(){if(t&&t.mountedInstances){let o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(o,e))}}if(o){var l;null==t||null==(l=t.mountedInstances)||l.add(e.children),u()}return i(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=u),()=>{t&&(t._pendingUpdate=u)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},2170:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return m},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return y},NormalizeError:function(){return g},PageNotFoundError:function(){return h},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return l},getLocationOrigin:function(){return a},getURL:function(){return u},isAbsoluteUrl:function(){return i},isResSent:function(){return s},loadGetInitialProps:function(){return c},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return v}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function u(){let{href:e}=window.location,t=a();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function c(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await c(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&s(r))return n;if(!n)throw Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class g extends Error{}class h extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},3027:(e,t,r)=>{var n=r(2115),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=n.useState,a=n.useEffect,u=n.useLayoutEffect,l=n.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(e){return!0}}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=i({inst:{value:r,getSnapshot:t}}),o=n[0].inst,f=n[1];return u(function(){o.value=r,o.getSnapshot=t,s(o)&&f({inst:o})},[e,r,t]),a(function(){return s(o)&&f({inst:o}),e(function(){s(o)&&f({inst:o})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:f},4236:(e,t,r)=>{e.exports=r(3027)}}]);