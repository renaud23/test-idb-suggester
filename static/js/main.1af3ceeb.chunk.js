(this["webpackJsonptest-idb-suggester"]=this["webpackJsonptest-idb-suggester"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),s=(n(14),n(4)),l=n(1),i=n.n(l),u=n(8),m=n(3),p=n(7),f=n.n(p),d=n(2),h=(n(16),n(17),[{name:"libelle"},{name:"com"},{name:"nccenr"}]);function g(e){var t=e.suggestion,n=t.com,a=t.libelle;return r.a.createElement("div",{className:"custom-cog-option"},r.a.createElement("span",{className:"com"},n),r.a.createElement("span",{className:"libelle"},a))}function b(){return v.apply(this,arguments)}function v(){return(v=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/test-idb-suggester/communes-2019.json").then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t.map((function(e,t){var n=e.com;return Object(s.a)(Object(s.a)({},e),{},{id:"COM-".concat(t,"-").concat(n)})})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(){var e=Object(a.useState)(void 0),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,Object(d.createStore)("TEST/COG",1,h);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",{style:{width:"250px"}},r.a.createElement(d.StoreManager,{name:"TEST/COG",version:1,fields:h,fetch:b}),r.a.createElement(d.Suggester,{store:n,placeHolder:"Rechercher dans le COG.",optionComponent:g,displayPath:"libelle",onSelect:function(e){console.log("onSelect",e)}})),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"))):null};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("p",null,"Test in CRA app. French communes."),r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.1af3ceeb.chunk.js.map