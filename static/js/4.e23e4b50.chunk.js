(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[4],{285:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(87);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(o){r=!0,i=o}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},289:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);var a=n(285),r=n(0),i=n.n(r),c=(n(289),n(11)),l=n(88),o=n(5),u=n(26),s=function(e){console.log(e.people);var t=Object(r.useState)(e.current),n=Object(a.a)(t,2),c=n[0],l=n[1];Object(r.useEffect)((function(){l(e.current)}),[e.current]);var o=function(t){var n=c;"--"===t&&n--,"++"===t&&n++,e.itsRename("LIST",n)};return i.a.createElement("div",null,i.a.createElement("div",{className:"LIST_PAGE"},i.a.createElement("span",{onClick:function(){return o("--")}},"< "),i.a.createElement("span",null,c," "),i.a.createElement("span",{onClick:function(){return o("++")}},">")),i.a.createElement("div",null,0===e.people.length?function(){return e.itsRename("LIST",c--)}:e.people.map((function(t){return i.a.createElement("div",{key:t._id},i.a.createElement("div",{className:"People-Item"},t.friendStatus?i.a.createElement("img",{className:"its-sub",onClick:function(){e.itsRename("SUB",t._id)},src:""!==t.Description.PhotoMin.origin?t.Description.PhotoMin.origin:t.Description.PhotoMin.default,alt:"Pic"}):i.a.createElement("img",{className:"not-sub",onClick:function(){e.itsRename("SUB",t._id)},src:""!==t.Description.PhotoMin.origin?t.Description.PhotoMin.origin:t.Description.PhotoMin.default,alt:"Pic"}),i.a.createElement("div",{className:"People-Name"},i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(u.b,{to:"/profile/"+t._id,className:"Name-to"},t.Description.Nickname.map((function(e){return e})).join(" "))),i.a.createElement("div",{id:"row"},t.Description.Tags.map((function(e){return i.a.createElement("div",null," #",e)})))),i.a.createElement("div",null,i.a.createElement("div",null,t.Description.Location.Count),i.a.createElement("div",null,t.Description.Location.City)))))}))))},m=n(100),p=function(e){return e.PeopleReducer.people},d=function(e){return e.PeopleReducer.current},f=(n(86),function(e){var t=function(t){e.itsRename(t.target.name,t.target.value)};return i.a.createElement("div",null,i.a.createElement("span",null,i.a.createElement("input",{value:e.nickname,name:"NICKNAME",onChange:t,className:"width",placeholder:"NAME \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0431\u0435\u043b \u0435\u0441\u043b\u0438 \u044d\u0442\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043b\u043e\u0432"})),i.a.createElement("span",null,i.a.createElement("input",{value:e.listTags,name:"TAGS",onChange:t,className:"width",placeholder:"TAGS \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0431\u0435\u043b"})),i.a.createElement("img",{src:"https://1\u0442\u0435\u043a\u0441\u0442\u043f\u0435\u0441\u043d\u0438.\u0440\u0444/uploads/images/t/o/j/toj_olsun_bajram_olsun_svadebnaja_2011.jpg",onClick:function(){return e.itsRename("DOUBLE")},className:"img-but"}))});t.default=Object(o.d)(Object(c.b)((function(e){return{people:p(e),current:d(e)}}),{SetCurrent:m.c,GetUser:m.b,FollowPeople:m.a}),l.a)((function(e){var t=Object(r.useState)(""),n=Object(a.a)(t,2),c=n[0],l=n[1],o=Object(r.useState)(""),u=Object(a.a)(o,2),m=u[0],p=u[1],d=Object(r.useState)(1),E=Object(a.a)(d,2),v=E[0],b=E[1];Object(r.useEffect)((function(){e.GetUser({tags:c.match(/(\w+)/gim)||[],nickname:m.match(/(\w+)/gim)||[],list:v})}),[v]);var h=function(t,n){switch(t){case"NICKNAME":return p(n);case"TAGS":return l(n);case"DOUBLE":return e.GetUser({tags:c.match(/(\w+)/gim)||[],nickname:m.match(/(\w+)/gim)||[],list:v});case"LIST":return b(n);case"SUB":return e.FollowPeople(n);default:return"Not Methods"}};return i.a.createElement("div",{className:"peo_List"},i.a.createElement("div",{className:"peo_List_Panel"},i.a.createElement(f,{itsRename:h,listTags:c,nickname:m})),i.a.createElement("div",{className:"peo_List_Peo"},i.a.createElement(s,{people:e.people,itsRename:h,current:v})))}))}}]);
//# sourceMappingURL=4.e23e4b50.chunk.js.map