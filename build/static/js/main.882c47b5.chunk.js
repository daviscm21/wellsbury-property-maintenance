(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n.n(a),c=n(16),i=n.n(c),o=n(2),u=n.n(o),l=n(5),j=n(4),b=(n(23),function(e){var t=Object(a.useState)("showers-baths"),n=Object(j.a)(t,2),s=n[0],c=n[1];Object(a.useEffect)((function(){e.search(s)}),[]);var i=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.search(s);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"previousjobs",children:[Object(r.jsx)("h2",{children:"Previous Work:"}),Object(r.jsx)("p",{children:"Search our previous jobs below:"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"type",children:"Type:"}),Object(r.jsxs)("select",{id:"type",name:"type",onChange:function(e){c(e.target.value)},children:[Object(r.jsxs)("optgroup",{label:"Plumbing",children:[Object(r.jsx)("option",{value:"showers-baths",children:"Showers & Baths"}),Object(r.jsx)("option",{value:"toilets",children:"Toilets"}),Object(r.jsx)("option",{value:"radiators",children:"Radiators"})]}),Object(r.jsxs)("optgroup",{label:"Electrics",children:[Object(r.jsx)("option",{value:"lighting",children:"Lighting"}),Object(r.jsx)("option",{value:"fuse-box",children:"Fuse Box"}),Object(r.jsx)("option",{value:"ev-charger",children:"EV Charger"})]}),Object(r.jsxs)("optgroup",{label:"Building & Roof",children:[Object(r.jsx)("option",{value:"paving",children:"Paving"}),Object(r.jsx)("option",{value:"flooring",children:"Flooring"}),Object(r.jsx)("option",{value:"roof",children:"Roof"})]}),Object(r.jsxs)("optgroup",{label:"Painting & Decorating",children:[Object(r.jsx)("option",{value:"painting",children:"Painting"}),Object(r.jsx)("option",{value:"wallpaper",children:"Wallpapering"}),Object(r.jsx)("option",{value:"exterior-painting",children:"Exterior Painting"})]})]})]}),Object(r.jsx)("button",{type:"submit",value:"Search",onClick:i,children:"Search"})]})}),h=(n(24),function(e){return Object(r.jsx)("div",{className:"jobssearchresults",children:e.previousJobs&&Object(r.jsxs)("div",{className:"jobssearchresult",children:[Object(r.jsx)("img",{src:e.previousJobs.image,alt:e.previousJobs.name}),Object(r.jsx)("h3",{children:e.previousJobs.name}),Object(r.jsx)("p",{children:e.previousJobs.description})]})})}),p=n(6),d=n.n(p);d.a.defaults.headers.common={"Content-Type":"application/json"};var O="reviews",v=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.a.get("".concat(O)),e.abrupt("return",t.then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(u.a.mark((function e(t,n,r,a,s){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=d.a.post(O,{title:t,review:n,stars:r,firstname:a,surname:s}),e.abrupt("return",c.then((function(e){return console.log("this got sent back from the backend",e),e.data})));case 2:case"end":return e.stop()}}),e)})));return function(t,n,r,a,s){return e.apply(this,arguments)}}(),x=(n(42),function(e){var t=Object(a.useState)(""),n=Object(j.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(""),o=Object(j.a)(i,2),u=o[0],l=o[1],b=Object(a.useState)(""),h=Object(j.a)(b,2),p=h[0],d=h[1],O=Object(a.useState)(""),x=Object(j.a)(O,2),m=x[0],g=x[1],w=Object(a.useState)(""),y=Object(j.a)(w,2),S=y[0],N=y[1];return Object(r.jsxs)("div",{className:"reviewform",children:[Object(r.jsx)("h2",{children:"Leave a Review:"}),Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),f(u,s,S,p,m),v().then((function(t){return e.setReviews(t)}))},children:[Object(r.jsx)("label",{htmlFor:"review",children:"Review:"}),Object(r.jsx)("textarea",{id:"review",name:"review",required:!0,onChange:function(e){c(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"title",children:"Review Title:"}),Object(r.jsx)("input",{type:"text",id:"title",name:"title",required:!0,onChange:function(e){l(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"firstname",children:"First Name:"}),Object(r.jsx)("input",{type:"text",id:"firstname",name:"firstname",required:!0,onChange:function(e){d(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"surname",children:"Surname:"}),Object(r.jsx)("input",{type:"text",id:"surname",name:"surname",required:!0,onChange:function(e){g(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"stars",children:"Stars:"}),Object(r.jsx)("input",{type:"number",min:"1",max:"5",id:"stars",required:!0,name:"stars",onChange:function(e){N(e.target.value)}}),Object(r.jsx)("input",{type:"submit"})]})]})}),m=(n(43),function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1];Object(a.useEffect)((function(){v().then((function(e){return s(e)}))}),[]);var c=function(e){for(var t=[],n=0;n<e;n++)t.push(Object(r.jsx)("span",{children:"\u2605"},n));for(var a=0;a<5-e;a++)t.push(Object(r.jsx)("span",{children:"\u2606"},5-a));return t};return Object(r.jsxs)("div",{className:"reviews-section",children:[Object(r.jsx)("h2",{className:"reviews-header",children:"Reviews:"}),Object(r.jsx)("div",{className:"reviews",children:n&&n.map((function(e,t){return Object(r.jsxs)("div",{className:"review",children:[Object(r.jsx)("h3",{children:e.title}),Object(r.jsx)("p",{children:e.review}),Object(r.jsxs)("h4",{children:[e.firstname," ",e.surname]}),c(e.stars)]},t)}))}),Object(r.jsx)(x,{setReviews:s})]})});d.a.defaults.headers.common={"Content-Type":"application/json"};var g=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.a.get("".concat("previousjobs","?type=").concat(t)),e.abrupt("return",n.then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(44);var w=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],c=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(t).then((function(e){s(e.data)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Catamaran:600|Merriweather+Sans:300&display=swap",rel:"stylesheet"}),Object(r.jsx)("h1",{children:"WPM"}),Object(r.jsx)("h2",{className:"wpm",children:"Wellsbury Property Maintenance"}),Object(r.jsxs)("div",{className:"about",children:[Object(r.jsx)("p",{className:"about-text",children:"WPM is the leading property maintenance contractor in the Wellsbury area and having been established for over 40 years, we have expertise in a range of different areas. No job is too small or too big, just call our office and our team will be happy to guide you through the process from the initial free quote up to completion."}),Object(r.jsx)("img",{className:"workmen-img",alt:"workmen figurines",src:"https://cdn.pixabay.com/photo/2018/01/20/08/01/craftsmen-3094035__340.jpg"})]}),Object(r.jsx)(b,{search:c}),Object(r.jsx)(h,{previousJobs:n}),Object(r.jsx)(m,{}),Object(r.jsx)("footer",{children:"Charles Michael Davis - Web Developer - 2022"})]})};n(45);i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.882c47b5.chunk.js.map