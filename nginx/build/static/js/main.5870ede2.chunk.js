(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n.n(c),o=n(6),s=n.n(o),i=n(2),u=n.n(i),p=n(4),j=n(5),d=(n(13),window.location.href);var f=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),s=Object(j.a)(o,2),i=s[0],f=s[1],h=function(){var t=Object(p.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(d+"api/todos");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,a(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){h()}),[]);var l=function(){var t=Object(p.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,fetch(d+"api/todos",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({todo:i})});case 3:h();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("ul",{children:[0===n.length&&Object(r.jsx)("h2",{children:"please add something to do"}),n.map((function(t,e){return Object(r.jsx)("li",{children:t},t+e)}))]}),Object(r.jsxs)("form",{onSubmit:l,children:[Object(r.jsx)("input",{value:i,onChange:function(t){return f(t.target.value)}}),Object(r.jsx)("button",{children:"submit"})]})]})};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5870ede2.chunk.js.map