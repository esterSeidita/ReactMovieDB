"use strict";(self.webpackChunkreact_movies_db=self.webpackChunkreact_movies_db||[]).push([[343],{48:function(e,t,n){n.d(t,{Z:function(){return a}});var r="style_Card__Z6Vzh",i="style_mainCard__z21Ph",o=n(504),s=n(184);function a(e){var t=e.setModal,n=e.movie,a=e.cardID,c=e.setUpdateCardId,u=e.needActions;return(0,s.jsxs)("div",{className:r,children:[(0,s.jsx)("img",{src:n.poster&&n.poster,alt:n.title&&n.title}),(0,s.jsxs)("div",{className:i,children:[(0,s.jsx)("h2",{children:n.title&&n.title}),(0,s.jsx)("p",{children:n.year&&n.year}),(0,s.jsx)("p",{children:n.description&&n.description}),(0,s.jsx)("ul",{children:n&&Array.isArray(n.genres)?n.genres.map((function(e,t){return(0,s.jsx)("li",{children:e},t)})):(0,s.jsx)("li",{children:n.genres})}),u&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{onClick:function(){t({show:"visible",title:"Sicuro di volere eliminare?",description:"",needConfirm:!0,cardId:a})},children:"Delete"}),(0,s.jsx)(o.rU,{to:"UpdateMovie",children:(0,s.jsx)("button",{onClick:function(){c(a)},children:"Update"})})]})]})]})}},838:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(885),i=n(791),o=n(184);function s(e){var t=e.setDeleteConfirmed,n=e.showModal,s=e.title,a=e.description,c=e.needConfirm,u=(0,i.useState)("not-visible"),l=(0,r.Z)(u,2),d=l[0],f=l[1];return(0,i.useEffect)((function(){f(n)}),[n]),(0,o.jsxs)("div",{id:d,className:"ModalWrapper",children:[(0,o.jsx)("div",{className:"overlay"}),(0,o.jsxs)("div",{className:"modal",children:[(0,o.jsx)("h1",{children:s}),(0,o.jsx)("p",{children:a}),c&&(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{onClick:function(){return t(!0)},className:"confirm",children:"Conferma"}),(0,o.jsx)("button",{onClick:function(){t(!1),window.location.href="/ReactMovieDB"},className:"abort",children:"Annulla"})]})]})]})}},343:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(885),i=n(791),o=n(48),s="style_CardList__YGjd-",a=n(703),c=n(184);function u(e){var t=e.setModalInfo,n=e.categoriesFilter,u=e.filter,l=e.setUpdateCardId,d=e.onDeleteRender,f=(0,i.useState)([]),p=(0,r.Z)(f,2),h=p[0],m=p[1],v=(0,i.useState)([]),y=(0,r.Z)(v,2),x=y[0],j=y[1],b=(0,i.useState)({}),C=(0,r.Z)(b,2),g=C[0],w=C[1],Z=(0,i.useState)(!1),S=(0,r.Z)(Z,2),k=S[0],_=S[1];return(0,i.useEffect)((function(){(0,a.eO)().then((function(e){m(e),j(e)}))}),[d]),(0,i.useEffect)((function(){t(g)}),[g]),(0,i.useEffect)((function(){_(!k)}),[n]),(0,i.useEffect)((function(){_(!k)}),[d]),(0,i.useEffect)((function(){var e=h.filter((function(e){return e.title&&e.title.toLowerCase().includes(u.toLowerCase())||e.genres&&Array.isArray(e.genres)&&e.genres.join("").toLowerCase().includes(u.toLowerCase())}));j(e)}),[u]),(0,c.jsx)("div",{className:s,children:x.map((function(e,t){return(0===n.length||e.genres.some((function(e){return n.includes(e)})))&&(0,c.jsx)(o.Z,{setUpdateCardId:l,cardID:e.id,movie:e,setModal:w,needActions:!0},t)}))})}var l="style_SearchInput__bCCU4",d="style_searchInput__NK4E3";function f(e){var t=e.setFilter,n=(0,i.useState)(""),o=(0,r.Z)(n,2),s=o[0],a=o[1];return(0,c.jsxs)("div",{className:l,children:[(0,c.jsx)("label",{htmlFor:"filter",children:"Cerca:"}),(0,c.jsx)("input",{className:d,id:"filter",placeholder:"ex. Deadpool",type:"text",value:s,onChange:function(e){a(e.target.value),t(e.target.value)}})]})}var p=n(838),h=n(181);var m=n(907);function v(e){return function(e){if(Array.isArray(e))return(0,m.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,h.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e){var t=e.setCategoriesFilter,n=(0,i.useState)([]),o=(0,r.Z)(n,2),s=o[0],u=o[1],l=(0,i.useState)([]),d=(0,r.Z)(l,2),f=d[0],p=d[1],m=function(e){var t=e.target.id;if(e.target.classList.toggle("selected"),-1===f.indexOf(t))p((function(e){return[].concat(v(e),[t])}));else{var n=f.indexOf(t);f.splice(n,1),p(f)}},y=function(e){var t=[];e.forEach((function(e){var n,r=function(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,h.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}(e.genres);try{for(r.s();!(n=r.n()).done;){var i=n.value;-1===t.indexOf(i)&&t.push(i)}}catch(o){r.e(o)}finally{r.f()}})),u(t)};return(0,i.useEffect)((function(){(0,a.eO)().then((function(e){return y(e)}))}),[]),(0,i.useEffect)((function(){t(f)}),[f]),(0,c.jsxs)("div",{className:"Categories",children:[(0,c.jsx)("h3",{children:"Filtra per categoria:"}),s.map((function(e,t){return(0,c.jsx)("div",{onClick:m,value:e,id:e,children:(0,a.lu)(e)},t)}))]})}function x(e){var t=e.onDeleteRender,n=e.setDeleted,o=e.setUpdateCardId,s=(0,i.useState)(""),l=(0,r.Z)(s,2),d=l[0],h=l[1],m=(0,i.useState)({}),v=(0,r.Z)(m,2),x=v[0],j=v[1],b=(0,i.useState)(!1),C=(0,r.Z)(b,2),g=C[0],w=C[1],Z=(0,i.useState)([]),S=(0,r.Z)(Z,2),k=S[0],_=S[1],E=(0,i.useState)(!1),I=(0,r.Z)(E,2),N=I[0],A=I[1];return(0,i.useEffect)((function(){g&&(0,a.Fh)(x.cardId).then((function(){n(!0),w(!1),j({show:"not-visible"})}))}),[g]),(0,i.useEffect)((function(){A(!N)}),[N]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(p.Z,{showModal:x.show||"not-visible",description:x.description||"",title:x.title||"",needConfirm:x.needConfirm||!1,setDeleteConfirmed:w}),(0,c.jsx)(y,{setCategoriesFilter:_}),(0,c.jsx)(f,{setFilter:h}),(0,c.jsx)(u,{onDeleteRender:t,categoriesFilter:k,setModalInfo:j,filter:d,setUpdateCardId:o,deleteConfirmed:g})]})}},703:function(e,t,n){n.d(t,{Fh:function(){return c},Qu:function(){return f},eO:function(){return s},k0:function(){return l},lu:function(){return h}});var r=n(861),i=n(757),o=n.n(i);function s(){return a.apply(this,arguments)}function a(){return a=(0,r.Z)(o().mark((function e(){var t,n,r,i=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",e.next=3,fetch("https://edgemony-backend.herokuapp.com/movies/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)}))),a.apply(this,arguments)}function c(e){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://edgemony-backend.herokuapp.com/movies/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function e(t,n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://edgemony-backend.herokuapp.com/movies/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({description:n.description,genres:n.genres,poster:n.poster,title:n.title,year:n.year})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://edgemony-backend.herokuapp.com/movies/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({description:t.description,genres:t.genres,poster:t.poster,title:t.title,year:t.year})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=function(e){var t=e.trim().toLowerCase().split("");return t[0].toUpperCase()+t.slice(1).join("")}}}]);
//# sourceMappingURL=343.d002853a.chunk.js.map