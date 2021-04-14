(this["webpackJsonpvideo-demo"]=this["webpackJsonpvideo-demo"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),i=n.n(r),o=(n(56),n(57),n(14)),s=n(104),l=n(6),d=n(105),j=n(107),u=n(3),b=function(){return Object(u.jsxs)(d.a,{bg:"light",expand:"lg",children:[Object(u.jsx)(d.a.Brand,{href:"",children:"Video Demo"}),Object(u.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(j.a,{className:"mr-auto",children:[Object(u.jsx)(j.a.Link,{children:Object(u.jsx)(o.b,{to:"/",style:{textDecoration:"none"},children:"Home"})}),Object(u.jsx)(j.a.Link,{children:Object(u.jsx)(o.b,{to:"/upload",style:{textDecoration:"none"},children:"Upload"})})]})})]})},p=n(51),h=n.n(p),x=function(){var e=Object(l.g)().name;return Object(u.jsx)("div",{className:"player-wrapper",children:Object(u.jsx)(h.a,{className:"react-player",controls:!0,url:"".concat("https://storage.googleapis.com/upload-videos-test/").concat(e),width:"100%",height:"100%"})})},O=n(20),m=n.n(O),v=n(23),f=n(18),g=n(24),y=n.n(g),w=function(e){var t=e.title,n=void 0===t?"This is a video":t,a=e.description,c=e.url,r=encodeURI(c).split("/"),i=r[r.length-1];return Object(u.jsx)(o.b,{to:"/video/".concat(i),children:Object(u.jsx)("li",{className:"list-group-item d-flex justify-content-between align-items-start",children:Object(u.jsxs)("div",{className:"ms-2 me-auto",children:[Object(u.jsx)("div",{className:"fw-bold",children:n}),a]})})})},N=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("".concat("/apis/","videos?limit=1000"));case 2:t=e.sent,c(t.data.videos||[]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){r()}),[]);var i=n.map((function(e,t){var n=e.title,a=e.url;return Object(u.jsx)(w,{title:"".concat(t+1,". ").concat(n),url:a})}));return Object(u.jsx)("ol",{className:"list-group list-group-numbered",style:{marginTop:"10px"},children:i})},S=n(106),T=n(108),D=n(103),L=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(f.a)(r,2),o=i[0],s=i[1],d=Object(a.useState)(!1),j=Object(f.a)(d,2),b=j[0],p=j[1],h=Object(a.useState)(),x=Object(f.a)(h,2),O=x[0],g=x[1],w=Object(a.useState)(),N=Object(f.a)(w,2),L=N[0],k=N[1],C=Object(l.f)(),I=function(){var e=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("video",O),t.append("title",n),t.append("description",o),e.abrupt("return",y.a.post("".concat("/apis/","videos/single"),t,{onUploadProgress:function(e){k(Math.round(100*e.loaded/e.total))}}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(S.a,{style:{margin:"2vh"},onSubmit:function(e){e.preventDefault(),p(!0),I().then((function(){c(""),s(""),g(void 0)})).finally((function(){p(!1),C.push("/")}))},children:[Object(u.jsxs)(S.a.Group,{controlId:"form-group-title",children:[Object(u.jsx)(S.a.Label,{children:"Video Title"}),Object(u.jsx)(S.a.Control,{type:"text",placeholder:"Video title",maxLength:"100",value:n,onChange:function(e){c(e.target.value)},required:!0}),Object(u.jsx)(S.a.Text,{className:"text-muted",children:"The title to be displayed for the uploaded video"})]}),Object(u.jsxs)(S.a.Group,{controlId:"form-group-description",children:[Object(u.jsx)(S.a.Label,{children:"Description"}),Object(u.jsx)(S.a.Control,{type:"text",placeholder:"Description",maxLength:"1024",value:o,onChange:function(e){s(e.target.value)},required:!0}),Object(u.jsx)(S.a.Text,{className:"text-muted",children:"A brief video description"})]}),Object(u.jsxs)(S.a.Group,{controlId:"form-group-video",children:[Object(u.jsx)(S.a.Label,{children:"Video"}),Object(u.jsx)(S.a.File,{id:"video",label:"Video",accept:"video/mp4,video/x-m4v,video/*",custom:!0,onChange:function(e){g(e.target.files[0])}})]}),L&&Object(u.jsx)(T.a,{now:L,label:"".concat(L,"%"),style:{marginTop:"2px",marginBottom:"2px"}}),Object(u.jsx)(D.a,{variant:"primary",disabled:b,type:"submit",children:b?"uploading ...":"Submit"})]})};var k=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(s.a,{fluid:!0,children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/upload",children:Object(u.jsx)(L,{})}),Object(u.jsx)(l.a,{path:"/video/:name",children:Object(u.jsx)(x,{})}),Object(u.jsx)(l.a,{path:"/",children:Object(u.jsx)(N,{})})]})})]})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(k,{})})}),document.getElementById("root"))},56:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.12970e98.chunk.js.map