(this["webpackJsonpreact-sw-api"]=this["webpackJsonpreact-sw-api"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(6),a=n.n(c),u=(n(11),n(12),n(2)),i=n.n(u),o=n(4),p=n(5),j=n(0),b=function(){var e=Object(r.useState)(""),t=Object(p.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(""),a=Object(p.a)(c,2),u=a[0],b=a[1],l=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/starships/");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,r=n.results.map((function(e,t){return Object(j.jsx)("button",{className:"nave-btn",onClick:function(){return f(t)},children:e.name},t)})),e.abrupt("return",s(r));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/starships/");case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,s=r.results[t],console.log(Object.entries(s)[t]),e.abrupt("return",b(Object.entries(s).map((function(e,t){return Object(j.jsxs)("li",{className:"nave-info",children:[e[0]+" : "+e[1]," "]},t)}))));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"nav-bar",children:[Object(j.jsx)("button",{className:"nave-search",onClick:function(){return l(n)},children:"Buscar as naves"}),Object(j.jsx)("p",{children:n}),Object(j.jsx)("ul",{className:"nave-info-ul",children:u})]})};var l=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(b,{})})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.43a23ce5.chunk.js.map