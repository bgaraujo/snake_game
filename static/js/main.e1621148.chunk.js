(this.webpackJsonpsnake_game=this.webpackJsonpsnake_game||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=(n(12),n(4)),s=n(1),u=(n(13),function(){var e=Object(a.useState)(10),t=Object(s.a)(e,1)[0],n=Object(a.useState)(),c=Object(s.a)(n,2),o=c[0],u=c[1],l=Object(a.useState)(0),f=Object(s.a)(l,2),m=f[0],O=f[1],b=Object(a.useState)(),v=Object(s.a)(b,2),d=v[0],g=v[1],y=Object(a.useState)([[1,1],[1,2],[1,3]]),h=Object(s.a)(y,2),w=h[0],j=h[1],k=Object(a.useState)(!0),p=Object(s.a)(k,2),S=p[0],N=p[1];Object(a.useEffect)((function(){o||E(),function(e){var n=Object(i.a)(w),a=Object(i.a)(w[n.length-1]);switch(e){case"ArrowLeft":a[0]-=1;break;case"ArrowRight":a[0]+=1;break;case"ArrowUp":a[1]-=1;break;case"ArrowDown":a[1]+=1}(a[0]<0||a[0]>t-1||a[1]<0||a[1]>t-1)&&N(!1),JSON.stringify(n[n.length-1])!==JSON.stringify(a)&&(n.push(a),JSON.stringify(a)!==JSON.stringify(o)?n.splice(0,1):u(null),j(n))}(m);var e=setInterval((function(){S&&g(Date.now())}),500);return function(){clearInterval(e)}}),[d]),document.body.addEventListener("keydown",(function(e){O(e.code)}));var E=function(){var e=parseInt(Math.random()*(t-0)+0),n=parseInt(Math.random()*(t-0)+0);u([e,n])},J=function(){var e=Array.from(Array(t).keys()).map((function(e){return function(e){var n=Array.from(Array(t).keys()).map((function(t){var n="block";return JSON.stringify(o)===JSON.stringify([t,e])&&(n+=" active"),w.find((function(n){return JSON.stringify(n)===JSON.stringify([t,e])}))&&(n+=" snake"),r.a.createElement("div",{className:n,key:t})}));return n}(e)}));return e},A=function(){return J()};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"game"},S?r.a.createElement(A,null):r.a.createElement("div",null,"Game over")))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.e1621148.chunk.js.map