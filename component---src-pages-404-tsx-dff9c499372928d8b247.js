(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{155:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(175),o=n(159),c=n(158),l=function(e){var t=e.siteTitle;return r.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(c.a,{to:"/"},t))))};l.defaultProps={siteTitle:""};var u=l,s=function(e){var t=e.children;return r.a.createElement(o.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:i})},d=n(161);t.default=function(){return r.a.createElement(s,null,r.a.createElement(d.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},157:function(e,t,n){var a;e.exports=(a=n(160))&&a.default||a},158:function(e,t,n){"use strict";var a=n(74),r=n.n(a),i=n(0),o=n.n(i),c=n(159);t.a=function(e){var t=e.children,n=r()(e,["children"]);return o.a.createElement(c.a,n,t)}},159:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(33),l=n.n(c);n.d(t,"a",function(){return l.a});n(157);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},160:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(55),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},161:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(166),o=n.n(i),c="Ila";t.a=function(e){var t=e.description,n=void 0===t?"":t,a=e.lang,i=void 0===a?"en":a,l=e.meta,u=void 0===l?[]:l,s=e.keywords,d=void 0===s?[]:s,m=e.title,p=[{name:"description",content:n},{property:"og:title",content:m},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c},{name:"twitter:title",content:m},{name:"twitter:description",content:n}].concat(d.length>0?{name:"keywords",content:d.join(", ")}:[]).concat(u);return r.a.createElement(o.a,{htmlAttributes:{lang:i},title:m,titleTemplate:"%s| Ila",meta:p})}},175:function(e){e.exports={data:{site:{siteMetadata:{title:"Ila"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-dff9c499372928d8b247.js.map