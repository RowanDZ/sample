(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{158:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(165);t.default=function(e){return r.a.createElement(o.a,e.pageContext.meta,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},164:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c});var a=n(0),r=n.n(a),o=Object(a.createContext)(void 0);function c(){return Object(a.useContext)(o)}var i=function(e){var t=Object(a.useState)(0),n=t[0],c=t[1],i=Object(a.useMemo)(function(){return{locales:e.locales,currentLocaleCode:e.currentLocaleCode,slug:e.slug,something:n,setSomething:c}},[e,n]);return r.a.createElement(o.Provider,{value:i},e.children)}},165:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(143),c=n.n(o),i=n(163),l=n.n(i),u=(n(74),n(166)),s=n.n(u),d=n(164),m="Ila",p=function(e){var t=e.description,n=void 0===t?"":t,a=e.lang,o=void 0===a?"en":a,c=e.meta,i=void 0===c?[]:c,l=e.keywords,u=void 0===l?[]:l,p=e.title,v=[{name:"description",content:n},{property:"og:title",content:p},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m},{name:"twitter:title",content:p},{name:"twitter:description",content:n}].concat(u.length>0?{name:"keywords",content:u.join(", ")}:[]).concat(i),g=Object(d.b)(),w=g.locales,f=g.currentLocaleCode,b=w&&f?w.find(function(e){return e.code===f}).direction:"ltr";return r.a.createElement(s.a,{htmlAttributes:{lang:o,dir:b},title:p,titleTemplate:"%s| Ila",meta:v})},v=n(169),g=n.n(v),w=n(144),f=n.n(w),b=function(e){g()(e);var t=Object(a.useState)(!1),n=t[0];t[1];return r.a.createElement("div",{className:l()(f.a.Navigation,n&&"expanded")},"MENU")};t.a=function(e){var t=e.children,n=e.metaKeywords,a=e.metaDescription,o=e.metaTitle,i=e.locales,u=e.currentLocaleCode,s=e.slug,m=e.withNavigation,v=void 0===m||m;return r.a.createElement(d.a,{locales:i,currentLocaleCode:u,slug:s},r.a.createElement("div",{className:l()(c.a.Page,!v&&c.a.noNav)},r.a.createElement(p,{title:o,description:a,keywords:n}),v&&r.a.createElement(b,null),t))}}}]);
//# sourceMappingURL=component---src-components-cms-pages-404-404-tsx-818a983a1fa3f0dba861.js.map