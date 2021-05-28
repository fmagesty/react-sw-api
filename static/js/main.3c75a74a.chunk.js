(this["webpackJsonpreact-sw-api"]=this["webpackJsonpreact-sw-api"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),c=n(19),a=n.n(c),i=(n(36),n(37),n(20)),u=n(5),o=n(1),l=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"This project is all about working with an API and Json data. It was a project developed by the PodCodar community and asked the developer to search the starwar ships on the API and show it's information without using any library that worked with it. This was a good challenge and interesting project. It was made in React. Currently it searches for ships but also characters and planets aswell."})})},j=n(9),h=n.n(j),b=n(13),p=n(15),d=function(){var e=Object(s.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)(""),a=Object(p.a)(c,2),i=a[0],u=a[1],l=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/starships/");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,s=n.results.map((function(e,t){return Object(o.jsx)("button",{className:"nave-btn",onClick:function(){return j(t)},children:e.name},t)})),e.abrupt("return",r(s));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(b.a)(h.a.mark((function e(t){var n,s,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/starships/");case 2:return n=e.sent,e.next=5,n.json();case 5:return s=e.sent,r=s.results[t],console.log(Object.entries(r)[t]),e.abrupt("return",u(Object.entries(r).map((function(e,t){return Object(o.jsxs)("li",{className:"nave-info",children:[e[0]+" : "+e[1]," "]},t)}))));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"nav-bar",children:[Object(o.jsx)("button",{className:"nave-search",onClick:function(){return l(n)},children:"Fetch ships"}),Object(o.jsx)("p",{children:n}),Object(o.jsx)("ul",{className:"nave-info-ul",children:i})]})},O=function(){var e=Object(s.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)(""),a=Object(p.a)(c,2),i=a[0],u=a[1],l=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/people/");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,s=n.results.map((function(e,t){return Object(o.jsx)("button",{className:"people-btn",onClick:function(){return j(t)},children:e.name},t)})),e.abrupt("return",r(s));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(b.a)(h.a.mark((function e(t){var n,s,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/people/");case 2:return n=e.sent,e.next=5,n.json();case 5:return s=e.sent,r=s.results[t],console.log(Object.entries(r)[t]),e.abrupt("return",u(Object.entries(r).map((function(e,t){return Object(o.jsxs)("li",{className:"people-info",children:[e[0]+" : "+e[1]," "]},t)}))));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"nav-bar",children:[Object(o.jsx)("button",{className:"people-search",onClick:function(){return l(n)},children:"Fetch characters"}),Object(o.jsx)("p",{children:n}),Object(o.jsx)("ul",{className:"people-info-ul",children:i})]})},A=function(){var e=Object(s.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)(""),a=Object(p.a)(c,2),i=a[0],u=a[1],l=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/planets/");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,s=n.results.map((function(e,t){return Object(o.jsx)("button",{className:"planets-btn",onClick:function(){return j(t)},children:e.name},t)})),e.abrupt("return",r(s));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(b.a)(h.a.mark((function e(t){var n,s,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/planets/");case 2:return n=e.sent,e.next=5,n.json();case 5:return s=e.sent,r=s.results[t],console.log(Object.entries(r)[t]),e.abrupt("return",u(Object.entries(r).map((function(e,t){return Object(o.jsxs)("li",{className:"planets-info",children:[e[0]+" : "+e[1]," "]},t)}))));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"nav-bar",children:[Object(o.jsx)("button",{className:"planets-search",onClick:function(){return l(n)},children:"Fetch planets"}),Object(o.jsx)("p",{children:n}),Object(o.jsx)("ul",{className:"planets-info-ul",children:i})]})},f=function(){return Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:"",className:"sw-logo"}),Object(o.jsxs)("div",{className:"github",children:[Object(o.jsx)("h4",{className:"gh-link",children:Object(o.jsx)("a",{href:"https://github.com/fmagesty",children:"github.com/fmagesty"})}),Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",className:"bi bi-person-circle",id:"github-icon",alt:"github-icon",viewBox:"0 0 16 16",children:[Object(o.jsx)("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),Object(o.jsx)("path",{fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"})]})]})]})},x=n(28),w=n(30),v=n(31);var m=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(x.a,{bg:"primary",variant:"dark",children:Object(o.jsxs)(w.a,{children:[Object(o.jsx)(x.a.Brand,{href:"/",children:Object(o.jsx)(i.b,{to:"/",children:"Home"})}),Object(o.jsxs)(v.a,{className:"me-auto",children:[Object(o.jsx)(i.b,{to:"/ships",children:"Ships"}),Object(o.jsx)(i.b,{to:"/Characters",children:"Characters"}),Object(o.jsx)(i.b,{to:"/planets",children:"Planets"})]})]})}),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(u.c,{children:[Object(o.jsxs)(u.a,{exact:!0,path:"/",children:[Object(o.jsx)(l,{}),Object(o.jsx)(f,{})]}),Object(o.jsxs)(u.a,{path:"/ships",children:[Object(o.jsx)(d,{}),Object(o.jsx)(f,{})]}),Object(o.jsxs)(u.a,{path:"/Characters",children:[Object(o.jsx)(O,{}),Object(o.jsx)(f,{})]}),Object(o.jsxs)(u.a,{path:"/planets",children:[Object(o.jsx)(A,{}),Object(o.jsx)(f,{})]})]})})]})};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.3c75a74a.chunk.js.map