(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{155:function(e,t,n){"use strict";n.r(t);n(34);var a,r=n(0),i=n.n(r),o=n(151),c=n.n(o),s=n(165),u=n(157),l=n.n(u),d=n(152),v=n.n(d),m=n(147),p=n.n(m),f=n(161);!function(e){e[e.ACTIVE=1]="ACTIVE",e[e.ACTIVE_NEXT=2]="ACTIVE_NEXT",e[e.ACTIVE_PREV=3]="ACTIVE_PREV",e[e.WAS_ACTIVE=4]="WAS_ACTIVE",e[e.NONE=5]="NONE"}(a||(a={}));var E=function(e){return i.a.createElement("div",{className:l()(p.a.SplitContainer,v.a.SplashSection,v.a[a[e.appearType]])},i.a.createElement("div",{className:l()(p.a.area1,v.a.area1),style:{background:e.fields.background1}},i.a.createElement("img",{className:v.a.img,src:e.fields.image.fields.file.url})),i.a.createElement("div",{className:l()(p.a.area2,v.a.area2),style:{background:e.fields.background2}},i.a.createElement(f.a,{className:v.a.text,data:e.fields.text})))},w=50,g="wheel",h="touchstart",N="touchmove",T="touchend",y=void 0;var I=function(e,t){void 0===t&&(t=0);var n=Object(r.useState)(t),a=n[0],i=n[1],o=Object(r.useState)(void 0),c=o[0],s=o[1];function u(){s(a),i(a+1)}function l(){s(a),i(a-1)}function d(e){var t=e.touches[0].pageY;window.addEventListener(N,function e(n){window.removeEventListener(T,e);var a=n.touches[0].pageY-t;Math.abs(a)<15||(a>0?u():l())})}function v(t){void 0===y&&(t.deltaY>0&&a<e-1?u():t.deltaY<0&&0<a&&l()),clearTimeout(y),y=window.setTimeout(function(){y=void 0},w)}return Object(r.useEffect)(function(){return window.addEventListener(g,v),window.addEventListener(h,d),function(){window.removeEventListener(g,v),window.removeEventListener(h,d)}},[a]),{activeIndex:a,previousIndex:c}};t.default=function(e){var t=e.pageContext.fields.sections,n=I(t.length),r=n.activeIndex,o=n.previousIndex;return i.a.createElement(s.a,Object.assign({},e.pageContext.meta,{withNavigation:!1}),i.a.createElement("div",{className:c.a.SplashPage},i.a.createElement("div",{className:c.a.components},t.map(function(e,t){var n=t===r?void 0===o?a.ACTIVE:r>o?a.ACTIVE_NEXT:a.ACTIVE_PREV:t===o?a.WAS_ACTIVE:a.NONE;return i.a.createElement(E,Object.assign({key:e.sys.id,appearType:n},e))}))))}},157:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},159:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(166),o=n.n(i),c="Ila";t.a=function(e){var t=e.description,n=void 0===t?"":t,a=e.lang,i=void 0===a?"en":a,s=e.meta,u=void 0===s?[]:s,l=e.keywords,d=void 0===l?[]:l,v=e.title,m=[{name:"description",content:n},{property:"og:title",content:v},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c},{name:"twitter:title",content:v},{name:"twitter:description",content:n}].concat(d.length>0?{name:"keywords",content:d.join(", ")}:[]).concat(u);return r.a.createElement(o.a,{htmlAttributes:{lang:i},title:v,titleTemplate:"%s| Ila",meta:m})}},161:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(143),o=n.n(i),c=n(157),s=n.n(c);t.a=function(e){var t=e.className;return r.a.createElement("div",{className:s()(o.a.RichText,t)},"RICH TEXT ... from CMS RichText")}},164:function(e,t){e.exports=function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}},165:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(144),o=n.n(i),c=n(157),s=n.n(c),u=n(159),l=n(164),d=n.n(l),v=n(145),m=n.n(v),p=function(e){d()(e);var t=Object(a.useState)(!1),n=t[0];t[1];return r.a.createElement("div",{className:s()(m.a.Navigation,n&&"expanded")},"MENU")};t.a=function(e){var t=e.children,n=e.metaKeywords,a=e.metaDescription,i=e.title,c=e.withNavigation,l=void 0===c||c;return r.a.createElement("div",{className:s()(o.a.Page,!l&&o.a.noNav)},r.a.createElement(u.a,{title:i,description:a,keywords:n}),l&&r.a.createElement(p,null),t)}}}]);
//# sourceMappingURL=component---src-components-cms-pages-splash-page-splash-page-tsx-d77a4a87228d541e7326.js.map