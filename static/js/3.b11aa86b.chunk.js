(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[3],{286:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(88);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,i=!1,r=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(l){i=!0,r=l}finally{try{a||null==c.return||c.return()}finally{if(i)throw r}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},288:function(e,t,n){},289:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAI8SURBVHhe7dTLbcMwEEXRVJCdN6ktXbjn1BEFChzn6mM+iRyS4gPOyhDJmbvw29f9ZokcS+BYAscSOJagxVifH+/4pRGOJWgu1lRqht9b4FiCtmI9SrXZy7EEDcVCqRm+qcuxBK3EQqNn+LIixxI0EQt1lvB9LY4lqB8LXbbgVBWOJegm1gQH41WOhRz7cDZeT7EmOB6sZiyESIEbgnUWa4JLIlWLhQTpcE8kxxLUiYX9VbgtjGMJKsTC5sfgzhiOJYiOhZ3PwM0BHEsQGgvbnof7S3MsQVws7JkLXinKsQRBsbBhXnirHMcSRMTCbiXgxUIcS1A8FrYqB++W4FiCsrGwT2l4PTvHEhSMhU1iYIa8HEtQKhZ2iIRJMnIsQZFYmD4e5snFsQT5Y2HuWjBVFo4lyBwLE9eF2c5zLEHOWJi1BZjwJMcSZIuFKduBOc9wLEGeWJivNZj2MMcSZIiFydqEmY9xLMHZWJipZZj8AMcSnIqFadqH+VWOJTgeC3P0AltIHEswXKwJFkl3MBae7wt2STdirAnWSXQkFh7uETZKNGisCZZKIcfCk/3CXikcS6DFwnu9w3YvOZZAiIWXrgE77nMsrrkjNRbeuBJsusOxcsfC7deDfbc41g/su+V1LNx7Vdh6lWP9wtarXsTCjdeG3Zcc6w92X9qLhbtGgALgWP+gAGzGwi3jQIdnjkXo8Gw9Fs6PBjUeHGsFajysxMLJMaHJzLHWocls8w/elhxL4FgCxxI4VrL77Rsi9L7omLLyZgAAAABJRU5ErkJggg=="},292:function(e,t,n){"use strict";n.r(t);var a=n(286),i=n(0),r=n.n(i),s=(n(288),n(11)),c=n(10),l=n(89),u=n(5),m=(n(87),r.a.memo((function(e){var t=e.friend.map((function(t){return r.a.createElement("div",{className:"List-item-Party-Friend"},r.a.createElement("img",{id:"ava-min",src:t.Description.PhotoMin.origin||t.Description.PhotoMin.default,alt:"Pic"}),r.a.createElement("div",{id:"text-description-friend-party"},r.a.createElement("div",null,t.Description.Nickname.map((function(e){return e})).join(" ")),r.a.createElement("div",null,t.Description.Status)),e.setting&&r.a.createElement("input",{type:"checkbox",onClick:function(){e.itsRename("SELECTED-FRIEND",t._id)}}))}));return r.a.createElement("div",null,t)}))),o=n(90),d=n(100),E=function(e){return e.MessageReducer.Message},f=function(e){return e.MessageReducer.Friend},g=function(e){return e.MessageReducer.Party},v=function(e){return e.MessageReducer.Profile},A=n(289),b=n.n(A),p=function(e){return Object(i.useEffect)((function(){return document.addEventListener("keypress",(function(t){t.ctrlKey&&"Enter"===t.code&&e.itsRename("SEND")}))}),[]),r.a.createElement("form",{onChange:function(t){e.itsRename("TEXT",t.target.value)}},r.a.createElement("input",{className:"text-area",id:"text",autocomplete:"off",value:e.text}),r.a.createElement("img",{src:b.a,className:"send-mess",onClick:function(){return e.itsRename("SEND")},value:"send"}))},S=r.a.memo((function(e){var t=e.party.map((function(t){return r.a.createElement("div",{className:"List-item-Party-Friend",onClick:function(){!function(t){e.itsRename("PROFILE",{list:t.ListPeople,id:t._id});var n=document.getElementById("list");n.style.pointerEvents="none",n.style.color="gray",setTimeout((function(){n.style.pointerEvents=null,n.style.color="black"}),2e3),console.log(n)}(t)}},r.a.createElement("div",null,r.a.createElement("img",{id:"ava-min",src:t.AvaParty,alt:"Pic"})),r.a.createElement("div",null,r.a.createElement("div",null,t.NameParty.map((function(e){return e})).join(" ")||"Name Party"," , ",t.NumberOfPerson)),0!==t.admin.filter((function(t){return t===e.user})).length?e.setting&&r.a.createElement("input",{type:"checkbox",onClick:function(){e.itsRename("SELECTED-PARTY",t._id)}}):e.setting&&r.a.createElement("button",{onClick:function(){e.itsRename("LEAVING-THE-PARTY",t._id)}},"Leave"))}));return r.a.createElement("div",{id:"list"},t)})),L=r.a.memo((function(e){var t=e.profile.id&&0!==e.message&&e.message.ListMessage.map((function(t){return r.a.createElement("div",null,e.user===t.user?r.a.createElement("div",{className:"MESSAGE_ITEM",id:"USER"},r.a.createElement("div",null,t.text,""!==t.img&&r.a.createElement("img",{alt:"Pic Send for you",src:t.img})),r.a.createElement("div",null,t.date)):r.a.createElement("div",{className:"MESSAGE_ITEM",id:"PROFILE"},r.a.createElement("div",null,t.text),r.a.createElement("div",null,t.date)))}));return r.a.createElement("div",{className:"mess_List_Desc"},!e.profile.id&&r.a.createElement("div",null,r.a.createElement("img",{id:"mess_img",src:"https://avatars.mds.yandex.net/get-pdb/34158/6e006c76-9b84-4ad1-8d07-b31e7e8d284b/s600",alt:"Pic"})),e.profile.id&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{id:"ava-min",src:e.message.AvaParty,alt:"Pic"})),r.a.createElement("div",null,"Name Party",e.message.NameParty&&e.message.NameParty.map((function(e){return e})).join(" "),", numb Person ",e.message.NumberOfPerson,", numb message ",e.message.NumberMessage)),r.a.createElement("div",{className:"mess_List_List",id:"mess"},e.profile.id&&r.a.createElement("div",null,t))))})),y=n(58);t.default=Object(u.d)(Object(s.b)((function(e){return{state:e.LoginReducer.user,message:E(e),friend:f(e),party:g(e),profile:v(e),loading:Object(y.a)(e)}}),{addProfile:d.f,GetListFriend:d.a,GetListMessages:d.b,SendMessage:d.d,SendSetting:d.e,GetListParty:d.c,deleteParty:d.h}),c.f,l.a)((function(e){var t=Object(i.useState)(""),n=Object(a.a)(t,2),s=n[0],c=n[1],l=Object(i.useState)(""),u=Object(a.a)(l,2),d=u[0],E=u[1],f=Object(i.useState)(""),g=Object(a.a)(f,2),v=g[0],A=g[1],b=Object(i.useState)([e.state.user]),y=Object(a.a)(b,2),P=y[0],O=y[1],R=Object(i.useState)([]),j=Object(a.a)(R,2),M=j[0],T=j[1],D=Object(i.useState)({ListMessage:[]}),N=Object(a.a)(D,2),h=N[0],C=N[1],I=Object(i.useState)([]),F=Object(a.a)(I,2),B=F[0],k=F[1],x=Object(i.useState)([]),w=Object(a.a)(x,2),G=w[0],J=w[1],Y=Object(i.useState)(e.state.user),_=Object(a.a)(Y,2),Z=_[0],H=(_[1],Object(i.useState)(e.profile)),X=Object(a.a)(H,2),Q=(X[0],X[1],Object(i.useState)(!1)),V=Object(a.a)(Q,2),W=V[0],U=V[1],q=Object(i.useState)(!1),K=Object(a.a)(q,2),z=K[0],$=K[1];Object(i.useEffect)((function(){z?e.GetListFriend():e.GetListParty()}),[z,W]),Object(i.useEffect)((function(){e.GetListMessages(e.profile),e.profile.id&&setTimeout((function(){var e=document.getElementById("mess");e.scrollTop=e.scrollHeight}),300)}),[e.profile]),Object(i.useEffect)((function(){c(s)}),[s]),Object(i.useEffect)((function(){k(e.friend),J(e.party)}),[e.friend,e.party]),Object(i.useEffect)((function(){C(e.message)}),[e.message]);var ee=function(t,n){switch(t){case"TEXT":return c(n);case"IMG":return E(n);case"PROFILE":return e.addProfile(n);case"NAME-PARTY":return A(n);case"SEND":return e.SendMessage({idParty:e.profile.id,dialog:e.profile.list,user:Z,text:s,img:d,date:(new Date).toTimeString().replace(/ .*/,"")}),c("");case"SETTING":return U(n);case"SELECTED-FRIEND":var a=P;if(0!==a.filter((function(e){return e===n})).length){var i=a.indexOf(n);a.splice(i,i+1)}else a.push(n);return O(a);case"SELECTED-FRIEND-ADD-PARTY":return P.length>1&&e.SendSetting({command:"FRI-ADD-PARTY",list:P,nameParty:v}),U(!0);case"SELECTED-PARTY":var r=M;if(0!==r.filter((function(e){return e===n})).length){var l=r.indexOf(n);r.splice(l,l+1)}else r.push(n);return T(r);case"SELECTED-PARTY-DEL":return U(!0),e.SendSetting({command:"PAR-DEL",list:M}),e.addProfile({id:!1,list:[]});case"LEAVING-THE-PARTY":return e.SendSetting({command:"LEAVING-THE-PARTY",list:n}),U(!0);default:return"null method"}};return r.a.createElement("div",{className:"mess_Section"},e.loading&&r.a.createElement("div",null,r.a.createElement(o.a,null)),!e.loading&&r.a.createElement("div",{className:"mess-List_Mess"},r.a.createElement(L,{message:h,user:Z,profile:e.profile}),r.a.createElement("div",{className:"mess_List_Form"},e.profile.id&&r.a.createElement(p,{itsRename:ee,text:s}))),!e.loading&&r.a.createElement("div",{className:"mess_List_Dia"},r.a.createElement("div",{className:"mess_List_Dia_Panel"},r.a.createElement("div",{onClick:function(){$(!z)},id:"Button-Message"},z?"Friend":"Party"),r.a.createElement("div",null,z?r.a.createElement("div",null,W?r.a.createElement("div",{className:"Button-Flex"},r.a.createElement("div",{onClick:function(){ee("SELECTED-FRIEND-ADD-PARTY")},id:"Button-Message"},"Done"),r.a.createElement("div",{onClick:function(){U(!W)},id:"Button-Message"},"Cancel")):r.a.createElement("div",{onClick:function(){U(!0)},id:"Button-Message",className:"Create-Place"},"Create Party"),r.a.createElement("div",null,W&&r.a.createElement("input",{onChange:function(e){ee(e.target.name,e.target.value)},name:"NAME-PARTY",value:v,id:"input-name",placeholder:"Entry nickname Party"}))):r.a.createElement("span",null,W?r.a.createElement("div",{className:"Button-Flex"},r.a.createElement("div",{onClick:function(){ee("SELECTED-PARTY-DEL")},id:"Button-Message"},"Done"),r.a.createElement("div",{onClick:function(){U(!W)},id:"Button-Message"},"Cancel")):r.a.createElement("span",null,r.a.createElement("div",{onClick:function(){U(!0)},id:"Button-Message"},W?"Done":"Deleted Party"))))),r.a.createElement("div",{className:"mess_List_Dia_List"},z&&r.a.createElement(m,{friend:B,itsRename:ee,selectedFriend:P,setting:W}),!z&&r.a.createElement(S,{party:G,user:Z,itsRename:ee,selectedParty:M,setting:W}))))}))}}]);
//# sourceMappingURL=3.b11aa86b.chunk.js.map