(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{150:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(151),c=n.n(i),u=n(146),l=n.n(u),o=n(162),s=n(160);a.default=function(e){var a=e.pageContext,n=a.fields,t=(a.title,n.area1),i=n.area2;return r.a.createElement("div",{className:l.a.Page},r.a.createElement("div",{className:c.a.SplitPage},r.a.createElement(o.a,null),r.a.createElement(s.a,{area1:t,area2:i})))}},155:function(e,a,n){var t;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var t=arguments[a];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)&&t.length){var c=r.apply(null,t);c&&e.push(c)}else if("object"===i)for(var u in t)n.call(t,u)&&t[u]&&e.push(u)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(a,[]))||(e.exports=t)}()},156:function(e,a,n){var t;e.exports=(t=n(159))&&t.default||t},157:function(e,a,n){"use strict";var t=n(74),r=n.n(t),i=n(0),c=n.n(i),u=n(158);a.a=function(e){var a=e.children,n=r()(e,["children"]);return c.a.createElement(u.a,n,a)}},158:function(e,a,n){"use strict";n.d(a,"b",function(){return s});var t=n(0),r=n.n(t),i=n(4),c=n.n(i),u=n(33),l=n.n(u);n.d(a,"a",function(){return l.a});n(156);var o=r.a.createContext({}),s=function(e){return r.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},159:function(e,a,n){"use strict";n.r(a);n(34);var t=n(0),r=n.n(t),i=n(4),c=n.n(i),u=n(55),l=n(2),o=function(e){var a=e.location,n=l.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(u.a,Object.assign({location:a,pageResources:n},n.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=o},160:function(e,a,n){"use strict";var t=n(0),r=n.n(t),i=n(161),c=n(143),u=n.n(c),l=n(155),o=n.n(l),s=n(157);a.a=function(e){var a=e.area1,n=e.area2;function t(){document.documentElement.classList.toggle("rtl")}function c(e,a){return r.a.createElement("div",{className:o()(u.a.area,u.a["area"+e])},r.a.createElement("h3",null,"Area",e," from CMS SplitContainer"),r.a.createElement("div",null,a.map(function(e){return Object(i.a)(e)})),2===e&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(s.a,{to:"/blank-page"},"Second page (hard link now)")),r.a.createElement("div",null,r.a.createElement("button",{onClick:t},"Toggle RTL"))))}return r.a.createElement("div",{className:u.a.SplitContainer},c(1,a),c(2,n))}},161:function(e,a,n){"use strict";var t,r=n(160),i=n(0),c=n.n(i),u=n(144),l=n.n(u),o=n(155),s=n.n(o),d=function(e){var a=e.className,n=e.data;console.log(n);var t=Object(i.useState)(!1),r=t[0],u=t[1];return c.a.createElement("div",{className:s()(l.a.Image,a,r&&l.a.loaded)},c.a.createElement("img",{onLoad:function(){return u(!0)},className:l.a.img,src:n.fields.image.fields.file.url}))},f=n(145),m=n.n(f),p=function(e){var a=e.className;return c.a.createElement("div",{className:s()(m.a.RichText,a)},"RICH TEXT ... from CMS RichText")};!function(e){e[e.ContainerSplitContent=1]="ContainerSplitContent",e[e.Image=2]="Image",e[e.RichText=3]="RichText"}(t||(t={}));a.a=function(e){var a,n=e.sys.contentType.sys.id,i=n.charAt(0).toUpperCase()+n.substring(1),u=e.sys.id;switch(t[i]){case t.ContainerSplitContent:a=r.a;break;case t.Image:a=d;break;case t.RichText:a=p;break;default:a=function(){return c.a.createElement("div",null,"TO BE IMPLEMENTED ... unknown from CMS")}}return c.a.createElement(a,{key:u,data:e})}},162:function(e,a,n){"use strict";var t=n(163),r=n.n(t),i=n(0),c=n.n(i),u=n(147),l=n.n(u),o=n(155),s=n.n(o);a.a=function(e){r()(e);var a=Object(i.useState)(!1),n=a[0];a[1];return c.a.createElement("div",{className:s()(l.a.Navigation,n&&"expanded")},"MENU")}},163:function(e,a){e.exports=function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}}}]);
//# sourceMappingURL=component---src-components-cms-pages-split-page-split-page-tsx-30677871a8c4b5c2f378.js.map