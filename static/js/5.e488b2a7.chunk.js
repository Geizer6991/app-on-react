(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{215:function(e,t,n){},221:function(e,t,n){"use strict";var a=n(224),r=n.n(a),i=n(0),o=n.n(i);t.a=function(){return o.a.createElement("img",{src:r.a,alt:"PIC"})}},222:function(e,t,n){},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(216),r=n(217),i=n(219),o=n(218),l=n(220),s=n(0),u=n.n(s),c=n(10),m=n(47),p=function(e){return{state:e.LoginReducer}},f=function(e){var t=function(t){function n(){return Object(a.a)(this,n),Object(i.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(l.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return this.props.state.userEntry.status?u.a.createElement(e,this.props):u.a.createElement(c.a,{to:"/"})}}]),n}(u.a.Component);return Object(m.b)(p)(t)}},224:function(e,t,n){e.exports=n.p+"static/media/loaD.a4b3162e.svg"},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));var a=n(229),r=n(0),i=n.n(r),o=(n(222),function(e){var t=e.input,n=e.meta,r=(e.value,Object(a.a)(e,["input","meta","value"])),o=n.touched&&n.error;return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("input",Object.assign({},t,r,{className:o&&"formControl"}))),o&&i.a.createElement("span",{className:"formSpan"},n.error))}),l=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),o=n.touched&&n.error;return i.a.createElement("div",null,i.a.createElement("div",{className:o&&"formControl"},i.a.createElement("textarea",Object.assign({},t,r,{wrap:"soft",rows:"1"}))),o&&i.a.createElement("span",null,o))}},226:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(215);var i=function(){return r.a.createElement("div",{className:"LOGO_PIC"},"\u0421\u0418\u0418\u0418\u041b\u042c\u041d\u041e")},o=n(51),l=n(21),s=n(47),u=n(49),c=Object(l.d)(Object(s.b)((function(e){return{state:e.LoginReducer}}),{Exit:u.a}))((function(e){return r.a.createElement("div",{className:"HEADER_AN_PAGE"},r.a.createElement("div",null,r.a.createElement(o.b,{to:"/profile",className:"Button_item"},"\u041c\u043e\u044f \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 ")),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/message",className:"Button_item"},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f ")),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/subscribers",className:"Button_item"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 ")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.Exit()}},"Exit")))}));t.a=function(){return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(c,null))}},230:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c}));var a,r=n(21),i=n(47),o=n(0),l=n.n(o),s=function(e){if(!e)return"Field is required"},u=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}},c=function(e){return function(t){return t&&t.length<e?"Min length is ".concat(e," symbols"):void 0}},m=function(e){return function(t){return t&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t)?"Invalid email address":e.status?void 0:l.a.createElement("span",null,"\u041f\u0430\u0440\u043e\u043b\u044c \u0438\u043b\u0438 \u043b\u043e\u0433\u0438\u043d \u043d\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439")}};a=13,Object(r.d)(Object(i.b)((function(e){return{userEntry:e.LoginReducer.userEntry}}),null))(m)},235:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(s){r=!0,i=s}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return a}))},289:function(e,t,n){"use strict";n.r(t);var a=n(216),r=n(217),i=n(219),o=n(218),l=n(220),s=n(0),u=n.n(s),c=(n(215),n(47)),m=n(10),p=n(223),f=n(21),d=n(226),v=n(221),E=n(235),b=u.a.memo((function(e){var t=Object(s.useState)(!1),n=Object(E.a)(t,2),a=n[0],r=n[1],i=Object(s.useState)(""!==e.status?e.status:""),o=Object(E.a)(i,2),l=o[0],c=o[1];Object(s.useEffect)((function(){c(e.status)}),[e.status]);return u.a.createElement("div",null,e.id===e.user?u.a.createElement("div",null,!a&&u.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.id===e.user?l:e.status||"Your Status"),a&&u.a.createElement("input",{id:"inputStatus",onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,onBlur:function(){!function(t){r(!0),e.sendStatus(t)}(l)},value:l})):u.a.createElement("div",null,u.a.createElement("span",null,e.status)))})),h=u.a.memo((function(e){var t,n;return n={fullName:{name:"",lastName:""},location:{city:"",country:""},status:""},0!==e.profilePage.length&&(t=e.profilePage.picture,n={fullName:e.profilePage.fullName,location:e.profilePage.location,status:e.profilePage.status}),0===e.user.length?u.a.createElement(v.a,null):u.a.createElement("div",{className:"descript"},u.a.createElement("div",{className:"Ava"},u.a.createElement("img",{width:"100px",height:"100px",src:t,alt:"PIC"})),u.a.createElement("div",null,u.a.createElement("div",null," ",n.fullName.name," ",n.fullName.lastName," "),u.a.createElement("div",null," ",n.location.city," \u0414\u0430, \u0434\u0430 \u0435\u0441\u0442\u044c \u0442\u0430\u043a\u043e\u0439 \u0433\u043e\u0440\u043e\u0434 \u0432 ",n.location.country," "),u.a.createElement(b,{status:n.status,sendStatus:e.sendStatus,id:e.id,user:e.user.id})))})),g=n(100),O=n(101),j=n(225),P=n(230),y=Object(P.b)(3),S=Object(P.a)(20),N=u.a.memo((function(e){return u.a.createElement("div",null,u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement("div",{className:"POST_FORM"},u.a.createElement(g.a,{component:j.b,validate:[y,S],name:"post",placeholder:"Post",id:"textarea"}),u.a.createElement("button",null,"add post"))))})),I=Object(O.a)({form:"post"})(N),x=u.a.memo((function(e){var t;return 0!==e.post.length&&(t=e.post.map((function(e){return u.a.createElement(A,{propsProfile:e.post,propsLogin:e.user})}))),u.a.createElement("div",{className:"POST"},t)})),A=function(e){return u.a.createElement("div",{className:"POST_ITEM"},"my post: ",e.propsProfile," is of: ",e.propsLogin)},w=n(28),C=n.n(w),k=n(64),R=function(e){return e.ProfileReducer.profile},_=function(e){return e.ProfileReducer.post},D=function(e){return e.ProfileReducer.loading},L=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={UserId:n.props.state.user.id,ProfileId:parseInt(n.props.match.params.userID)||parseInt(n.props.state.user.id),profile:n.props.profile,post:n.props.post,loading:n.props.state.loading},n.onSubmit=function(e){if(void 0!==e.post){var t={post:e.post,user:n.state.UserId,profile:n.state.ProfileId};n.props.SendPost(t),document.getElementById("textarea").value=""}},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.setState({time:Date.now()})}),1e3),this.props.GetProfile(this.state.ProfileId),this.props.GetPost(this.state.ProfileId),console.log("1"),C.a.set("History","profile")}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"componentDidUpdate",value:function(e,t,n){t.post!==this.props.post&&this.setState({post:this.props.post}),t.profile!==this.props.profile&&this.setState({profile:this.props.profile}),t.loading!==this.props.loading&&this.setState({loading:this.props.loading})}},{key:"render",value:function(){return u.a.createElement("div",null,this.state.loading?u.a.createElement("div",null,u.a.createElement(v.a,null)):u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(d.a,null)),u.a.createElement("div",{className:"PROFILE"},u.a.createElement(h,{profile:this.state.ProfileId,user:this.state.UserId,profilePage:this.props.profile,sendStatus:this.props.SendStatus}),u.a.createElement(I,{onSubmit:this.onSubmit}),u.a.createElement(x,{post:this.state.post}))))}}]),t}(s.PureComponent);t.default=Object(f.d)(Object(c.b)((function(e){return{profile:R(e),post:_(e),loading:D(e)}}),{GetProfile:k.b,GetPost:k.a,SendPost:k.c,SendStatus:k.d}),m.f,p.a)(L)}}]);
//# sourceMappingURL=5.e488b2a7.chunk.js.map