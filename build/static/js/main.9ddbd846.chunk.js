(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(16),i=n.n(r),o=n(17),a=n(3),l=n(1),u=function(e){var t=e.newFilter,n=e.filterChange;return Object(c.jsx)("div",{children:Object(c.jsx)("input",{value:t,onChange:n,placeholder:"Search blogs titles"})})},s=function(e){var t=e.filterBlog,n=e.deleteBlog;return Object(c.jsx)("div",{children:t.map((function(e,t){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:e.title}),Object(c.jsx)("p",{children:Object(c.jsx)("i",{children:e.author})}),Object(c.jsx)("p",{children:e.url}),Object(c.jsx)("p",{children:e.likes}),Object(c.jsx)("button",{onClick:function(){return n(e.id,e.title)},children:"Delete Blog"})]},t)}))})},j=function(e){var t=e.addBlog,n=e.newTitle,r=e.newAuthor,i=e.newURL,o=e.newLikes,a=e.titleChange,l=e.authorChange,u=e.urlChange,s=e.likesChange;return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:t,children:[Object(c.jsx)("div",{children:Object(c.jsx)("input",{value:n,onChange:a,placeholder:"Blog title"})}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{value:r,onChange:l,placeholder:"Author"})}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{value:i,onChange:u,placeholder:"Url"})}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{value:o,onChange:s,placeholder:"Likes"})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"Add Blog"})})]})})},d=n(5),h=n.n(d),b="/api/blogs",f=function(){return h.a.get(b).then((function(e){return e.data}))},O=function(e){return h.a.post(b,e).then((function(e){return e.data}))},g=function(e,t){return h.a.put("".concat(b,"/").concat(e),t).then((function(e){return e.data}))},p=function(e){return h.a.delete("".concat(b,"/").concat(e)).then((function(e){return e}))},v=function(e){var t=e.message,n=e.messageType;return null===t?null:Object(c.jsx)("div",{className:n,children:t})},x=function(){var e=Object(l.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(l.useState)(""),d=Object(a.a)(i,2),h=d[0],b=d[1],x=Object(l.useState)(""),m=Object(a.a)(x,2),w=m[0],C=m[1],k=Object(l.useState)(""),B=Object(a.a)(k,2),S=B[0],L=B[1],T=Object(l.useState)(""),y=Object(a.a)(T,2),A=y[0],D=y[1],U=Object(l.useState)(""),E=Object(a.a)(U,2),F=E[0],I=E[1],J=Object(l.useState)(null),R=Object(a.a)(J,2),N=R[0],q=R[1],z=Object(l.useState)(""),G=Object(a.a)(z,2),H=G[0],K=G[1];Object(l.useEffect)((function(){f().then((function(e){r(e)}))}),[]);var M=n?n.filter((function(e){return e.title.toLowerCase().includes(F.toLowerCase())})):[];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Bloglist"}),Object(c.jsx)(v,{message:N,messageType:H}),Object(c.jsx)(u,{newFilter:F,filterChange:function(e){I(e.target.value)}}),Object(c.jsx)("h3",{children:"Add a new blog"}),Object(c.jsx)(j,{addBlog:function(e){e.preventDefault();var t=n.find((function(e){return e.title.toLowerCase()===h.toLowerCase()}));t?window.confirm("".concat(h," is already added to phonebook, replace the old number with a new one?"))&&g(t.id,{title:h,author:w,url:S,likes:A}).then((function(e){r(n.map((function(t){return t.id!==e.id?t:e}))),K("success"),q("Changed ".concat(t.title))})).catch((function(e){return console.log(e)})):O({title:h.trim(),author:w.trim(),url:S.trim(),likes:A.trim()}).then((function(e){r([].concat(Object(o.a)(n),[e])),K("success"),q("Added ".concat(e.title))})).catch((function(e){K("error"),q("".concat(e.response.data.error))}));b(""),C(""),L(""),D(""),setTimeout((function(){q(null)}),5e3)},newTitle:h,newAuthor:w,newURL:S,newLikes:A,titleChange:function(e){b(e.target.value)},authorChange:function(e){C(e.target.value)},urlChange:function(e){L(e.target.value)},likesChange:function(e){D(e.target.value)}}),Object(c.jsx)("h3",{children:"Blogs"}),Object(c.jsx)(s,{filterBlog:M,deleteBlog:function(e,t){window.confirm("Delete ".concat(t,"?"))?p(e).then((function(c){200===c.status&&(r(n.filter((function(t){return t.id!==e}))),b(""),C(""),L(""),D(""),K("success"),q("Deleted ".concat(t)),setTimeout((function(){q(null)}),5e3))})).catch((function(c){K("error"),q("Information of ".concat(t," has already been removed from server!")),setTimeout((function(){q(null)}),5e3),r(n.filter((function(t){return t.id!==e})))})):console.log()}})]})};n(40);i.a.render(Object(c.jsx)(x,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.9ddbd846.chunk.js.map