(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{155:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(151),o=n.n(i),c=n(165),s=n(157),l=n.n(s),u=n(152),d=n.n(u),m=n(147),v=n.n(m),f=n(161),p=function(e){return r.a.createElement("div",{className:l()(v.a.SplitContainer,d.a.SplashSection)},r.a.createElement("div",{className:v.a.area1},r.a.createElement("img",{className:d.a.img,src:e.fields.image.fields.file.url})),r.a.createElement("div",{className:v.a.area2},r.a.createElement(f.a,{data:e.fields.text})))},w=50,g="wheel",E=void 0;var h=function(e,t){void 0===t&&(t=0);var n=Object(a.useState)(t),r=n[0],i=n[1];function o(t){void 0===E&&(t.deltaY>0&&r<e-1?i(r+1):t.deltaY<0&&0<r&&i(r-1)),clearTimeout(E),E=window.setTimeout(function(){E=void 0},w)}return Object(a.useEffect)(function(){return window.addEventListener(g,o),function(){return window.removeEventListener(g,o)}},[r]),r};t.default=function(e){var t=e.pageContext.fields.sections.map(function(e){return r.a.createElement(p,Object.assign({key:e.sys.id},e))}),n=h(t.length);return r.a.createElement(c.a,Object.assign({},e.pageContext.meta,{withNavigation:!1}),r.a.createElement("div",{className:o.a.SplashPage},r.a.createElement("div",{className:o.a.components,style:{transform:"translate3d(0, -"+100*n+"vh, 0)"}},t)))}},157:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},159:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(166),o=n.n(i),c="Ila";t.a=function(e){var t=e.description,n=void 0===t?"":t,a=e.lang,i=void 0===a?"en":a,s=e.meta,l=void 0===s?[]:s,u=e.keywords,d=void 0===u?[]:u,m=e.title,v=[{name:"description",content:n},{property:"og:title",content:m},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c},{name:"twitter:title",content:m},{name:"twitter:description",content:n}].concat(d.length>0?{name:"keywords",content:d.join(", ")}:[]).concat(l);return r.a.createElement(o.a,{htmlAttributes:{lang:i},title:m,titleTemplate:"%s| Ila",meta:v})}},161:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(143),o=n.n(i),c=n(157),s=n.n(c);t.a=function(e){var t=e.className;return r.a.createElement("div",{className:s()(o.a.RichText,t)},"RICH TEXT ... from CMS RichText")}},164:function(e,t){e.exports=function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}},165:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(144),o=n.n(i),c=n(157),s=n.n(c),l=n(159),u=n(164),d=n.n(u),m=n(145),v=n.n(m),f=function(e){d()(e);var t=Object(a.useState)(!1),n=t[0];t[1];return r.a.createElement("div",{className:s()(v.a.Navigation,n&&"expanded")},"MENU")};t.a=function(e){var t=e.children,n=e.metaKeywords,a=e.metaDescription,i=e.title,c=e.withNavigation,u=void 0===c||c;return r.a.createElement("div",{className:s()(o.a.Page,!u&&o.a.noNav)},r.a.createElement(l.a,{title:i,description:a,keywords:n}),u&&r.a.createElement(f,null),t)}}}]);
//# sourceMappingURL=component---src-components-cms-pages-splash-page-splash-page-tsx-380e050ae1f6c2d65d6a.js.map