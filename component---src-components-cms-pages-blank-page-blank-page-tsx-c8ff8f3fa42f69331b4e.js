(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(e,t,a){e.exports=(e=>e&&e.default||e)(a(101))},101:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var u=n(a(0)),r=n(a(2)),l=n(a(26)),s=n(a(5));const i=({location:e})=>{const t=s.default.getResourcesForPathnameSync(e.pathname);return u.default.createElement(l.default,{location:e,pageResources:t,...t.json})};i.propTypes={location:r.default.shape({pathname:r.default.string.isRequired}).isRequired};var d=i;t.default=d},104:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var u,r=a(105),l=n(a(98)),s=n(a(106)),i=n(a(0));!function(e){e[e.Image=0]="Image",e[e.RichText=1]="RichText"}(u||(u={}));var d=function(e){const t=e.sys.contentType.sys.id,a=t.charAt(0).toUpperCase()+t.substring(1),n=e.sys.id;let d,o;switch(u[a]){case u.Image:o=s.default,d=e.fields.image;break;case u.RichText:o=l.default,d=e.fields.text;break;default:o=function(){return i.default.createElement("div",null,"TO BE IMPLEMENTED ... unknown from CMS")},d=e,(0,r.isDev)()&&console.error(`Missing implementation for CMS content type [${t}]`)}return i.default.createElement(o,{key:n,data:d})};t.default=d},105:function(e,t,a){"use strict";t.__esModule=!0,t.isDev=function(){return!1}},106:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var u=n(a(0)),r=n(a(82)),l=n(a(7));var s=({className:e,data:t})=>u.default.createElement("div",{className:(0,l.default)(r.default.Image,e)},u.default.createElement("img",{className:r.default.img,src:t.fields.file.url}));t.default=s},83:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var u=n(a(0)),r=n(a(104)),l=n(a(84)),s=n(a(97));var i=e=>{const t=e.pageContext.fields.items.map(e=>(0,r.default)(e));return u.default.createElement("div",{className:l.default.BlankPage},u.default.createElement("div",null,u.default.createElement(s.default,{to:"/"},"Home (hard for now)")),t)};t.default=i},97:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var u=n(a(0)),r=a(99);var l=({children:e,to:t,...a})=>{return/^\/(?!\/)/.test(t)?u.default.createElement(r.Link,Object.assign({to:t},a),e):u.default.createElement("a",Object.assign({href:t},a),e)};t.default=l},98:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var u=n(a(0)),r=n(a(81)),l=a(102),s=a(103),i=n(a(97)),d=a(24),o=a(8);const c=({children:e})=>u.default.createElement("p",{className:"align-center"},e),f=(e,t)=>u.default.createElement(c,null,t);var m=({className:e,data:t})=>u.default.createElement("div",{className:r.default.RichText},function(e){const t={renderNode:{[l.BLOCKS.EMBEDDED_ENTRY]:function(e){return u.default.createElement("div",null,JSON.stringify(e))},[l.BLOCKS.PARAGRAPH]:f,[l.INLINES.HYPERLINK]:function(e){return u.default.createElement(i.default,{to:e.data.uri},e.content[0].value)},[l.INLINES.ENTRY_HYPERLINK]:function(e){const{pageLinkMap:t,locales:a,currentLocaleCode:n}=(0,o.usePageConfig)(),r=t[e.data.target.sys.id],l=a.find(e=>e.code===n),s=(0,d.getLinkPath)(l,r);return u.default.createElement(i.default,{to:s},e.content[0].value)}}};return(0,s.documentToReactComponents)(e,t)}(t));t.default=m},99:function(e,t,a){"use strict";var n=a(4),u=a(1);t.__esModule=!0,t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},t.useStaticQuery=t.StaticQuery=t.StaticQueryContext=void 0;var r=u(a(0)),l=u(a(2)),s=n(a(25));t.Link=s.default,t.withPrefix=s.withPrefix,t.navigate=s.navigate,t.push=s.push,t.replace=s.replace,t.navigateTo=s.navigateTo,t.parsePath=s.parsePath;var i=u(a(100));t.PageRenderer=i.default;const d=r.default.createContext({});t.StaticQueryContext=d;const o=e=>r.default.createElement(d.Consumer,null,t=>e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.default.createElement("div",null,"Loading (StaticQuery)"));t.StaticQuery=o;t.useStaticQuery=(e=>{r.default.useContext;const t=r.default.useContext(d);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")}),o.propTypes={data:l.default.object,query:l.default.string.isRequired,render:l.default.func,children:l.default.func}}}]);
//# sourceMappingURL=component---src-components-cms-pages-blank-page-blank-page-tsx-c8ff8f3fa42f69331b4e.js.map