(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{161:function(e,t,n){"use strict";n.r(t);n(34);var a,r=n(0),o=n.n(r),c=n(151),i=n.n(c),s=n(165),l=n(152),u=n.n(l),d=n(164),m=n.n(d),v=n(153),E=n.n(v),f=n(166);!function(e){e[e.ACTIVE=1]="ACTIVE",e[e.ACTIVE_NEXT=2]="ACTIVE_NEXT",e[e.ACTIVE_PREV=3]="ACTIVE_PREV",e[e.WAS_ACTIVE=4]="WAS_ACTIVE",e[e.NONE=5]="NONE"}(a||(a={}));var p=function(e){var t=e.fields;return o.a.createElement("div",{className:m()(E.a.SplashSection,E.a[a[e.appearType]])},o.a.createElement("div",{className:E.a.area1,style:{background:t.background1,color:t.textColor1}},o.a.createElement("img",{className:E.a.img,src:t.image.fields.file.url})),o.a.createElement("div",{className:E.a.area2,style:{background:t.background2,color:t.textColor2}},o.a.createElement(f.a,{className:E.a.text,data:t.text})))},g=50,w="wheel",N="touchstart",T="touchend",C=void 0;var b=function(e,t){void 0===t&&(t=0);var n=Object(r.useState)(t),a=n[0],o=n[1],c=Object(r.useState)(void 0),i=c[0],s=c[1];function l(){s(a),o(a+1)}function u(){s(a),o(a-1)}function d(e){e.preventDefault();var t=e.changedTouches[0].pageY;window.addEventListener(T,function e(n){n.preventDefault(),window.removeEventListener(T,e);var a=n.changedTouches[0].pageY-t;Math.abs(a)<15||(a<0?l():u())})}function m(t){void 0===C&&(t.deltaY>0&&a<e-1?l():t.deltaY<0&&0<a&&u()),clearTimeout(C),C=window.setTimeout(function(){C=void 0},g)}return Object(r.useEffect)(function(){if(!(e<=1))return window.addEventListener(w,m),window.addEventListener(N,d),function(){window.removeEventListener(w,m),window.removeEventListener(N,d)}},[a,e]),{activeIndex:a,previousIndex:i}},h=function(e){var t=e.sections,n=b(t.length),r=n.activeIndex,c=n.previousIndex;return o.a.createElement("div",{className:u.a.components},t.map(function(e,t){var n=t===r?void 0===c?a.ACTIVE:r>c?a.ACTIVE_NEXT:a.ACTIVE_PREV:t===c?a.WAS_ACTIVE:a.NONE;return o.a.createElement(p,Object.assign({key:e.sys.id,appearType:n},e))}))};t.default=function(e){var t=e.pageContext.fields.sections;return o.a.createElement(s.a,Object.assign({},e.pageContext.meta,{withNavigation:!1}),o.a.createElement("div",{className:i.a.SplashPage},o.a.createElement(h,{sections:t})))}},163:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c});var a=n(0),r=n.n(a),o=Object(a.createContext)(void 0);function c(){return Object(a.useContext)(o)}var i=function(e){var t=Object(a.useState)(0),n=t[0],c=t[1],i=Object(a.useMemo)(function(){return{locales:e.locales,currentLocaleCode:e.currentLocaleCode,slug:e.slug,something:n,setSomething:c}},[e,n]);return r.a.createElement(o.Provider,{value:i},e.children)}},165:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(143),c=n.n(o),i=n(164),s=n.n(i),l=(n(74),n(167)),u=n.n(l),d=n(163),m="Ila",v=function(e){var t=e.description,n=void 0===t?"":t,a=e.lang,o=void 0===a?"en":a,c=e.meta,i=void 0===c?[]:c,s=e.keywords,l=void 0===s?[]:s,v=e.title,E=[{name:"description",content:n},{property:"og:title",content:v},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m},{name:"twitter:title",content:v},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(i),f=Object(d.b)(),p=f.locales,g=f.currentLocaleCode,w=p&&g?p.find(function(e){return e.code===g}).direction:"ltr";return r.a.createElement(u.a,{htmlAttributes:{lang:o,dir:w},title:v,titleTemplate:"%s| Ila",meta:E})},E=n(169),f=n.n(E),p=n(144),g=n.n(p),w=function(e){f()(e);var t=Object(a.useState)(!1),n=t[0];t[1];return r.a.createElement("div",{className:s()(g.a.Navigation,n&&"expanded")},"MENU")};t.a=function(e){var t=e.children,n=e.metaKeywords,a=e.metaDescription,o=e.metaTitle,i=e.locales,l=e.currentLocaleCode,u=e.slug,m=e.withNavigation,E=void 0===m||m;return r.a.createElement(d.a,{locales:i,currentLocaleCode:l,slug:u},r.a.createElement("div",{className:s()(c.a.Page,!E&&c.a.noNav)},r.a.createElement(v,{title:o,description:a,keywords:n}),E&&r.a.createElement(w,null),t))}},166:function(e,t,n){"use strict";var a,r=n(0),o=n.n(r),c=n(145),i=n.n(c),s=n(170),l=n(171),u={renderNode:(a={},a[s.BLOCKS.EMBEDDED_ENTRY]=function(e){return o.a.createElement("div",null,JSON.stringify(e))},a)};t.a=function(e){e.className;var t=e.data;return o.a.createElement("div",{className:i.a.RichText},Object(l.documentToReactComponents)(t,u))}}}]);
//# sourceMappingURL=component---src-components-cms-pages-splash-page-splash-page-tsx-676c4db5c62c75468bb4.js.map