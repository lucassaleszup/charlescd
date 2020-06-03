(this["webpackJsonpnew-ui"]=this["webpackJsonpnew-ui"]||[]).push([[9],{104:function(e,n,t){"use strict";var r,a,c,o;t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return o})),function(e){e.REQUESTS_BY_CIRCLE="REQUESTS_BY_CIRCLE",e.REQUESTS_ERRORS_BY_CIRCLE="REQUESTS_ERRORS_BY_CIRCLE",e.REQUESTS_LATENCY_BY_CIRCLE="REQUESTS_LATENCY_BY_CIRCLE"}(r||(r={})),function(e){e[e.SLOW_TIME=3e5]="SLOW_TIME",e[e.FAST_TIME=1e4]="FAST_TIME"}(a||(a={})),function(e){e.COMPARISON="COMPARISON",e.NORMAL="NORMAL"}(c||(c={})),function(e){e.FIVE_MINUTES="FIVE_MINUTES",e.THIRTY_MINUTES="THIRTY_MINUTES",e.ONE_HOUR="ONE_HOUR",e.THREE_HOUR="THREE_HOUR",e.EIGHT_HOUR="EIGHT_HOUR"}(o||(o={}))},152:function(e,n,t){"use strict";var r=t(1),a=t.n(r),c=t(30),o=t(14);function i(){var e=Object(c.a)(["\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0px;\n  width: 269px;\n\n  > * + * {\n    margin-top: 10px;\n  }\n"]);return i=function(){return e},e}var u={Card:o.d.div(i())},l=function(e){var n=e.children,t=e.className;return a.a.createElement(u.Card,{className:t},n)},d=t(100),s=t(101),f=t(120),m=t.n(f),p=(t(181),t(182)),h=t.n(p);m.a.extend(h.a);function E(){var e=Object(c.a)(["\n  margin-left: 17px;\n  margin-right: 17px;\n"]);return E=function(){return e},e}var v={CardBody:o.d.div(E())},b=function(e){var n=e.children,t=e.className,r=e.onClick;return a.a.createElement(v.CardBody,{className:t,onClick:r},n)};function x(){var e=Object(c.a)(["\n  min-height: 100px;\n\n  > * + * {\n    margin-top: 10px;\n  }\n"]);return x=function(){return e},e}function O(){var e=Object(c.a)(["\n  width: 303px;\n  background: ",";\n  transition: all 0.3s;\n\n  :hover {\n    transition: all 0.3s;\n    transform: scale(1.03);\n  }\n"]);return O=function(){return e},e}var C={CardCircle:Object(o.d)(l)(O(),(function(e){return e.theme.card.circle.background})),CardBody:Object(o.d)(b)(x())},g=function(e){var n=e.circle,t=e.deployedAt,r=e.children;return a.a.createElement(C.CardCircle,null,a.a.createElement(ae.Header,{icon:a.a.createElement(s.a,{name:"circles",size:"15px",color:"success"})}),a.a.createElement(C.CardBody,null,a.a.createElement(d.a.h4,{color:"light",align:"left"},n),a.a.createElement(d.a.h5,{color:"light",align:"left"},"Deployed at ",function(e){var n=m()().diff(e,"hour"),t=m()().utcOffset()/60,r=m()(e).hour(m()(e).hour()+t);return n>=24?m()(r).format("hh:mm \u2022 MM/DD/YYYY"):m()(r).fromNow()}(t)),r))};function y(){var e=Object(c.a)(["\n  margin-left: auto;\n"]);return y=function(){return e},e}function j(){var e=Object(c.a)(["\n  display: flex;\n"]);return j=function(){return e},e}function R(){var e=Object(c.a)(["\n  padding: 0px 8px 0px 17px;\n  height: 15px;\n  display: flex;\n  flex-direction: row;\n\n  > * + * {\n    margin-left: 10px;\n  }\n"]);return R=function(){return e},e}var I={CardHeader:o.d.div(R()),Icon:o.d.div(j()),Action:o.d.div(y())},T=function(e){var n=e.icon,t=e.children,r=e.action;return a.a.createElement(I.CardHeader,null,n&&a.a.createElement(I.Icon,null,n),t,r&&a.a.createElement(I.Action,null,r))},w=t(102),_=t.n(w),S=t(116);function k(){var e=Object(c.a)(["\n  margin-top: 5px;\n"]);return k=function(){return e},e}function L(){var e=Object(c.a)(["\n  border: none;\n  background: ",";\n  height: 4px;\n  width: 40px;\n  border-radius: 5px;\n  margin: 9px auto -1px;\n"]);return L=function(){return e},e}function M(){var e=Object(c.a)(["\n  height: 63px;\n  display: flex;\n  flex-direction: column;\n  padding: 0 15px 10px 15px;\n"]);return M=function(){return e},e}function N(){var e=Object(c.a)(["\n  max-height: 145px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n\n  li:nth-child(odd) {\n    background: ",";\n  }\n"]);return N=function(){return e},e}var A=o.d.div(N(),(function(e){return e.theme.card.expand.background})),U=o.d.li(M()),B={Action:o.d.button(L(),(function(e){return e.theme.card.expand.button})),Expand:A,Item:U,Icon:o.d.div(k())},H=function(e){var n=e.onClick,t=e.items,c=e.className,o=Object(r.useRef)();Object(S.a)(o,(function(){return n()}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(B.Expand,{ref:o,className:c},_()(t,(function(e,n){return a.a.createElement(B.Item,{key:"".concat(e.version,"-").concat(n)},a.a.createElement(B.Icon,null,a.a.createElement(s.a,{name:"git",color:"light"})),a.a.createElement(d.a.h5,{color:"light"},"".concat(e.moduleName,"/").concat(e.componentName,"/").concat(e.version)))}))),a.a.createElement(B.Action,{onClick:n}))},Y=t(99);function F(){var e=Object(c.a)(["\n  border: 1px solid ",";\n  color: ",";\n  border-radius: 20px;\n  padding: 0px 10px;\n  box-sizing: border-box;\n  height: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-transform: lowercase;\n\n  *:first-letter {\n    text-transform: uppercase;\n  }\n"]);return F=function(){return e},e}var D={Badge:o.d.div(F(),(function(e){return e.theme.badge.border}),(function(e){return e.theme.badge.color}))},P=function(e){var n=e.label;return a.a.createElement(D.Badge,null,a.a.createElement(d.a.h6,{color:"light",align:"center"},n))};function Q(){return(Q=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function W(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var z=a.a.createElement("title",null,"5FCB714F-0DF5-4AEB-91F2-01FE28944CDB"),V=a.a.createElement("desc",null,"Created with sketchtool."),G=a.a.createElement("defs",null,a.a.createElement("path",{d:"M7.5,0.625 C11.290625,0.625 14.375,3.709375 14.375,7.5 C14.375,11.290625 11.290625,14.375 7.5,14.375 C3.709375,14.375 0.625,11.290625 0.625,7.5 C0.625,3.709375 3.709375,0.625 7.5,0.625 Z M7.5,1.875 C4.39875,1.875 1.875,4.39875 1.875,7.5 C1.875,10.601875 4.39875,13.125 7.5,13.125 C10.601875,13.125 13.125,10.601875 13.125,7.5 C13.125,4.39875 10.601875,1.875 7.5,1.875 Z M7.94375,9.55749981 C8,9.61374981 8.04375,9.6824998 8.075,9.7637498 C8.1125,9.8387498 8.125,9.91999979 8.125,10.0012498 C8.125,10.1699998 8.0625,10.3262498 7.94375,10.4387498 C7.825,10.5574998 7.66875,10.6262498 7.5,10.6262498 C7.33125,10.6262498 7.175,10.5574998 7.05625,10.4387498 C6.9375,10.3262498 6.875,10.1699998 6.875,10.0012498 C6.875,9.91999979 6.89375,9.8387498 6.925,9.7637498 C6.95625,9.6824998 7,9.61374981 7.05625,9.55749981 C7.11875,9.50124981 7.18125,9.45124981 7.2625,9.41937482 C7.4875,9.32624982 7.76875,9.38249982 7.94375,9.55749981 Z M7.5,4.375 C7.845,4.375 8.125,4.655 8.125,5 L8.125,7.5 C8.125,7.845 7.845,8.125 7.5,8.125 C7.155,8.125 6.875,7.845 6.875,7.5 L6.875,5 C6.875,4.655 7.155,4.375 7.5,4.375 Z",id:"info"})),Z=a.a.createElement("g",{id:"Asset-Artboard-Page",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Icon/Card/Git"},a.a.createElement("mask",{id:"mask-2",fill:"white"},a.a.createElement("use",{xlinkHref:"#info-1"})),a.a.createElement("use",{id:"icon-card-info",fill:"#F2F2F9",transform:"translate(7.500000, 7.500000) rotate(-180.000000) translate(-7.500000, -7.500000) ",xlinkHref:"#info"}))),J=function(e){var n=e.svgRef,t=e.title,r=W(e,["svgRef","title"]);return a.a.createElement("svg",Q({width:"15px",height:"15px",viewBox:"0 0 15 15",ref:n},r),void 0===t?z:t?a.a.createElement("title",null,t):null,V,G,Z)},q=a.a.forwardRef((function(e,n){return a.a.createElement(J,Q({svgRef:n},e))}));t.p;function K(){var e=Object(c.a)(["\n  "," {\n    width: 235px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n"]);return K=function(){return e},e}function X(){var e=Object(c.a)(["\n  background-color: ",";\n\n  :hover {\n    "," {\n      white-space: normal;\n      overflow: visible;\n    }\n  }\n"]);return X=function(){return e},e}function $(){var e=Object(c.a)([""]);return $=function(){return e},e}var ee=Object(o.d)(d.a.h4)($()),ne={CardRelease:Object(o.d)(l)(X(),(function(e){return e.theme.card.release.background}),ee),CardBody:Object(o.d)(b)(K(),ee),Text:ee},te=function(e){var n=e.status,t=e.description,c=e.expandItems,o=Object(r.useState)(!1),i=Object(Y.a)(o,2),u=i[0],l=i[1];return a.a.createElement(ne.CardRelease,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(ae.Header,{icon:a.a.createElement(q,null)},a.a.createElement(P,{label:n})),a.a.createElement(ne.CardBody,{onClick:function(){return l(!u)}},a.a.createElement(ne.Text,{color:"light"},t)),u&&a.a.createElement(H,{onClick:function(){return l(!u)},items:c})))},re={Base:function(e){return a.a.createElement(l,e)},Body:function(e){return a.a.createElement(b,e)},Circle:function(e){return a.a.createElement(g,e)},Header:function(e){return a.a.createElement(T,e)},Release:function(e){return a.a.createElement(te,e)},Expand:function(e){return a.a.createElement(H,e)}},ae=n.a=re},153:function(e,n,t){"use strict";var r=t(3),a=t(99),c=t(1),o=t.n(c),i=t(102),u=t.n(i),l=t(100),d=t(119),s=t.n(d),f={theme:{mode:"dark"},tooltip:{theme:"dark"},chart:{sparkline:{enabled:!1},toolbar:{show:!1}},yaxis:{tickAmount:2,labels:{style:{color:"#fff"}}},xaxis:{type:"numeric",tickAmount:2,axisBorder:{show:!1}},dataLabels:{enabled:!1},markers:{size:0,style:"hollow"},grid:{show:!0,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}},padding:{left:0,right:0}},stroke:{show:!0,curve:"straight",lineCap:"butt",width:1.4,dashArray:0},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.5,opacityFrom:.6,opacityTo:0,stops:[0,50,100]}}},m=t(30),p=t(14),h=t(183),E=t.n(h);function v(){var e=Object(m.a)(["\n  cursor: crosshair;\n  padding-right: 15px;\n\n  .apexcharts-canvas,\n  .apexcharts-canvas.apexcharts-theme-dark {\n    background-color: transparent;\n  }\n\n  .apexcharts-xaxis-tick {\n    display: none;\n  }\n\n  .apexcharts-yaxistooltip {\n    display: none;\n  }\n  .apexcharts-xaxistooltip {\n    display: none;\n  }\n"]);return v=function(){return e},e}var b={Chart:Object(p.d)(E.a)(v())},x=function(e){var n=e.className,t=e.options,r=e.series;return o.a.createElement(b.Chart,{className:n,options:s()(t,f),series:r,type:"area",width:"100%"})},O=t(104),C=[{type:O.c.FIVE_MINUTES,value:5,label:"m"},{type:O.c.THIRTY_MINUTES,value:30,label:"m"},{type:O.c.ONE_HOUR,value:1,label:"h"},{type:O.c.THREE_HOUR,value:3,label:"h"},{type:O.c.EIGHT_HOUR,value:8,label:"h"}],g=t(120),y=t.n(g),j={chart:{width:"100%"},stroke:{curve:"smooth"},theme:{mode:"dark"},legend:{show:!1},tooltip:{x:{formatter:function(e){return y()(new Date(1e3*e)).format("hh:mm:ss")}}},yaxis:{opposite:!1,labels:{formatter:function(e){return Number(e).toFixed(2)},style:{fontSize:"10px"}}},xaxis:{type:"numeric",tickAmount:3,labels:{style:{color:"#fff",fontSize:"10px"},formatter:function(e,n){return y()(new Date(1e3*n)).format("hh:mm:ss")}},axisBorder:{show:!1}}},R=t(103);var I=function(e,n){var t=Object(c.useRef)(),r=Object(c.useState)(n),o=Object(a.a)(r,2),i=o[0],u=o[1],l=function(){t.current.terminate()},d=Object(c.useCallback)((function(n){t.current&&l(),t.current=function(e){var n=e.toString(),t=new Blob(["("+n+")()"]);return new Worker(URL.createObjectURL(t))}(e),t.current.postMessage({apiParams:n,headers:Object(R.b)()}),t.current.addEventListener("message",(function(e){u(e.data)}))}),[e]);return Object(c.useEffect)((function(){return function(){return l()}}),[]),[i,d]},T=function(){var e=function(e){return e.map((function(e){var n=e.value;return[e.timestamp,n]}))},n=function(n,t){return"COMPARISON"===t?n.components.map((function(n){var t=n.name,r=n.data;return{name:t,data:e(r)}})):[{name:"",data:e(n.data)}]},t=function(e){var n,t=e.circleId,r="COMPARISON"===e.chartType?"circle/".concat(t,"/components"):"";return"".concat(r,"?").concat((n=e,new URLSearchParams({circleId:"".concat(n.circleId),metricType:"".concat(n.metricType),projectionType:n.projectionType})))},r=function e(r,a){fetch("https://darwin-api.continuousplatform.com/moove/metrics/".concat(t(r)),{headers:a}).then((function(e){return e.json()})).then((function(t){var c,o,i=n(t,r.chartType);self.postMessage(i),setTimeout((function(){return e(r,a)}),(c=5e3,o=15e3,c=Math.ceil(c),o=Math.floor(o),Math.floor(Math.random()*(o-c+1))+c))})).catch((function(e){console.error(e)}))};self.addEventListener("message",(function(e){if(e){var n=e.data,t=n.apiParams,a=n.headers;r(t,a)}}))},w=t(0);function _(){var e=Object(m.a)(["\n  width: 30px;\n  padding: 5px;\n  margin: 0 10px;\n  cursor: pointer;\n  border-radius: 14px;\n  border: 1px solid\n    ",";\n\n  span {\n    color: ",";\n  }\n"]);return _=function(){return e},e}function S(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n"]);return S=function(){return e},e}function k(){var e=Object(m.a)(["\n  background-color: ",";\n  border-radius: 4px;\n  padding-bottom: 10px;\n"]);return k=function(){return e},e}var L={Wrapper:p.d.div(k(),w.a),Controls:p.d.div(S()),ControlItem:p.d.div(_(),(function(e){return e.isActive?w.w:"transparent"}),w.w)},M=t(15),N=t(38),A=Object(N.a)();n.a=function(e){var n=e.id,t=e.metricType,i=e.chartType,d=e.className,s=Object(c.useState)(O.c.FIVE_MINUTES),f=Object(a.a)(s,2),m=f[0],p=f[1],h=I(T,[]),E=Object(a.a)(h,2),v=E[0],b=E[1],g=function(e,n){var t,r=(t={},Object(M.a)(t,O.b.REQUESTS_ERRORS_BY_CIRCLE,A.metrics.chartError),Object(M.a)(t,O.b.REQUESTS_BY_CIRCLE,A.metrics.chartRequestCircle),Object(M.a)(t,O.b.REQUESTS_LATENCY_BY_CIRCLE,A.metrics.chartLatency),t)[e];return n===O.a.NORMAL?[r]:A.metrics.chartComparison}(t,i),y=Object(r.a)({},j,{colors:g});return Object(c.useEffect)((function(){b({circleId:n,metricType:t,projectionType:m,chartType:i})}),[n,t,m,i,b]),o.a.createElement(L.Wrapper,{className:d,"data-testid":"circle-metric-".concat(n),onClick:function(e){return e.stopPropagation()}},o.a.createElement(x,{options:y,series:v}),o.a.createElement(L.Controls,null,u()(C,(function(e){var n=e.value,t=e.label,r=e.type;return o.a.createElement(L.ControlItem,{key:n,isActive:r===m,onClick:function(){return p(r)},"data-testid":"circle-metric-control-".concat(n).concat(t)},o.a.createElement(l.a.h6,{align:"center"},"".concat(n," ").concat(t)))}))))}},305:function(e,n,t){var r=t(165),a=t(306),c=t(132),o=t(20);e.exports=function(e,n){return(o(e)?r:a)(e,c(n,3))}},306:function(e,n,t){var r=t(140);e.exports=function(e,n){var t=[];return r(e,(function(e,r,a){n(e,r,a)&&t.push(e)})),t}},307:function(e,n,t){var r=t(308)(t(309));e.exports=r},308:function(e,n,t){var r=t(132),a=t(108),c=t(133);e.exports=function(e){return function(n,t,o){var i=Object(n);if(!a(n)){var u=r(t,3);n=c(n),t=function(e){return u(i[e],e,i)}}var l=e(n,t,o);return l>-1?i[u?n[l]:l]:void 0}}},309:function(e,n,t){var r=t(180),a=t(132),c=t(141),o=Math.max;e.exports=function(e,n,t){var i=null==e?0:e.length;if(!i)return-1;var u=null==t?0:c(t);return u<0&&(u=o(i+u,0)),r(e,a(n,3),u)}},319:function(e,n,t){"use strict";t.r(n);var r,a=t(99),c=t(1),o=t.n(c),i=t(102),u=t.n(i),l=t(110),d=t.n(l),s=t(100),f=t(105),m=t(126),p=t(122),h=t(186),E=t(305),v=t.n(E),b=t(307),x=t.n(b);!function(e){e.ID_CIRCLE_DEFAULT="f5d23a57-5607-4306-9993-477e1598cc2a"}(r||(r={}));var O=function(e){return x()(e,(function(e){return e.id===r.ID_CIRCLE_DEFAULT}))},C=t(7),g=t(152),y=t(148),j=t(104),R=t(30),I=t(14),T=t(0),w=t(153);function _(){var e=Object(R.a)(["\n  background-color: ",";\n"]);return _=function(){return e},e}function S(){var e=Object(R.a)(["\n  position: relative;\n  height: 61px;\n  z-index: ",";\n\n  > {\n    position: absolute;\n  }\n"]);return S=function(){return e},e}var k={Wrapper:I.d.div(S(),(function(e){return e.theme.zIndex.OVER_2})),Metrics:Object(I.d)(w.a)(_(),T.b)},L=Object(c.memo)((function(e){var n,t=e.id,a=e.name,c=e.deployment,i=Object(C.h)();return o.a.createElement("div",{onClick:function(){return Object(y.a)(i,t)}},o.a.createElement(g.a.Circle,{key:t,circle:a,deployedAt:null===c||void 0===c?void 0:c.deployedAt},o.a.createElement(k.Wrapper,null,o.a.createElement(g.a.Release,{status:null===c||void 0===c?void 0:c.status,description:null===c||void 0===c||null===(n=c.build)||void 0===n?void 0:n.tag})),o.a.createElement(k.Metrics,{id:t,metricType:j.b.REQUESTS_BY_CIRCLE,chartType:j.a.NORMAL}),t===r.ID_CIRCLE_DEFAULT&&o.a.createElement(o.a.Fragment,null,o.a.createElement(k.Metrics,{id:t,metricType:j.b.REQUESTS_ERRORS_BY_CIRCLE,chartType:j.a.NORMAL}),o.a.createElement(k.Metrics,{id:t,metricType:j.b.REQUESTS_LATENCY_BY_CIRCLE,chartType:j.a.NORMAL}))))})),M=t(113),N=function(){return o.a.createElement(M.a,{speed:4,width:363,height:45,viewBox:"0 0 363 45",backgroundColor:"#3a393c",foregroundColor:"#2c2b2e"},o.a.createElement("rect",{x:"0",y:"0",rx:"4",ry:"5",width:"363",height:"45"}))},A=function(){return o.a.createElement(M.a,{speed:4,width:1600,height:800,viewBox:"0 0 1600 800",backgroundColor:"#3a393c",foregroundColor:"#2c2b2e"},o.a.createElement("rect",{x:"0",y:"18",rx:"4",ry:"4",width:"303",height:"800"}),o.a.createElement("rect",{x:"330",y:"18",rx:"4",ry:"4",width:"303",height:"352"}),o.a.createElement("rect",{x:"660",y:"18",rx:"4",ry:"4",width:"303",height:"352"}),o.a.createElement("rect",{x:"330",y:"400",rx:"4",ry:"4",width:"303",height:"352"}),o.a.createElement("rect",{x:"660",y:"400",rx:"4",ry:"4",width:"303",height:"352"}))},U={Content:function(){return o.a.createElement(A,null)},Header:function(){return o.a.createElement(N,null)}},B=t(107),H=t(101);function Y(){var e=Object(R.a)(["\n  cursor: pointer;\n"]);return Y=function(){return e},e}function F(){var e=Object(R.a)(["\n  > * + * {\n    margin-left: 20px;\n  }\n"]);return F=function(){return e},e}function D(){var e=Object(R.a)(["\n  margin: 15px 0;\n"]);return D=function(){return e},e}function P(){var e=Object(R.a)(["\n  margin-bottom: 18px;\n"]);return P=function(){return e},e}function Q(){var e=Object(R.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n\n  > * {\n    margin: 15px;\n  }\n"]);return Q=function(){return e},e}function W(){var e=Object(R.a)(["\n  display: flex;\n  margin: 15px 15px 0px 0px;\n  align-self: flex-start;\n"]);return W=function(){return e},e}function z(){var e=Object(R.a)(["\n  margin: 48px 30px 18px 30px;\n"]);return z=function(){return e},e}function V(){var e=Object(R.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return V=function(){return e},e}var G=I.d.div(V()),Z=I.d.div(z()),J=I.d.div(W()),q=I.d.div(Q()),K=I.d.div(P()),X=Object(I.d)(B.a)(D()),$={Actions:I.d.div(F()),Content:G,Default:J,Header:K,Icon:Object(I.d)(H.a)(Y()),Items:q,SearchInput:X,Wrapper:Z};n.default=function(){var e=Object(p.c)(p.b.metrics),n=Object(a.a)(e,3)[2],t=Object(f.b)((function(e){return e.circles})).metrics,i=Object(m.b)("name");Object(c.useEffect)((function(){n()}),[n]);return o.a.createElement($.Wrapper,null,d()(null===t||void 0===t?void 0:t.content)?o.a.createElement(U.Header,null):o.a.createElement($.Header,null,o.a.createElement(s.a.h2,{color:"light"},i,", this is the health of your circles."),o.a.createElement(s.a.h2,{color:"light"},"You can open a circle for more information.")),d()(null===t||void 0===t?void 0:t.content)?o.a.createElement(U.Content,null):function(){var e,n;return o.a.createElement($.Content,null,o.a.createElement($.Default,null,o.a.createElement(L,Object.assign({key:null===(e=O(null===t||void 0===t?void 0:t.content))||void 0===e?void 0:e.id},O(null===t||void 0===t?void 0:t.content)))),o.a.createElement($.Items,null,u()((n=null===t||void 0===t?void 0:t.content,Object(h.a)(v()(n,(function(e){return e.id!==r.ID_CIRCLE_DEFAULT})))),(function(e){return o.a.createElement(L,Object.assign({key:e.id},e))}))))}())}}}]);
//# sourceMappingURL=9.6277d25f.chunk.js.map