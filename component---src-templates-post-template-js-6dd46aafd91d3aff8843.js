(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),d=r(a("pVnL")),o=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=g(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),o.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+o+s+l+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=o.default.createElement(V,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?o.default.createElement("picture",null,i(r),l):l})),V=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=g(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,w=e.loading,x=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,d.default)({opacity:I?1:0,transition:C?"opacity "+y+"ms":"none"},l),N="boolean"==typeof b?"lightgray":b,P={transitionDelay:y+"ms"},T=(0,d.default)({opacity:this.state.imgLoaded?0:1},C&&P,l,f),H={title:t,alt:this.state.isVisible?"":a,style:T,className:g,itemProp:S};if(m){var q=m,j=p(m);return o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:j.maxWidth?j.maxWidth+"px":null,maxHeight:j.maxHeight?j.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},o.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),N&&o.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&P)}),j.base64&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:H,imageVariants:q,generateSources:R}),j.tracedSVG&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:H,imageVariants:q,generateSources:L}),this.state.isVisible&&o.default.createElement("picture",null,E(q),o.default.createElement(V,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:x})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:w},j,{imageVariants:q}))}}))}if(h){var W=h,M=p(h),G=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete G.display,o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},N&&o.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:N,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},C&&P)}),M.base64&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:H,imageVariants:W,generateSources:R}),M.tracedSVG&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:H,imageVariants:W,generateSources:L}),this.state.isVisible&&o.default.createElement("picture",null,E(W),o.default.createElement(V,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:x})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:w},M,{imageVariants:W}))}}))}return null},t}(o.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),N=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});C.propTypes={resolutions:k,sizes:N,fixed:c.default.oneOfType([k,c.default.arrayOf(k)]),fluid:c.default.oneOfType([N,c.default.arrayOf(N)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var P=C;t.default=P},ORvQ:function(e,t,a){"use strict";a.r(t),a.d(t,"postQuery",(function(){return v}));a("rO+z");var r=a("kPKH"),i=(a("qNb/"),a("PArb")),n=a("q1tI"),s=a.n(n),l=a("qhky"),d=a("Wbzz"),o=a("9eSz"),c=a.n(o),u=(a("E5k/"),{icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"}),f=a("6VBw"),g=function(e,t){return n.createElement(f.a,Object.assign({},e,{ref:t,icon:u}))};g.displayName="LeftOutlined";var p=n.forwardRef(g),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},h=function(e,t){return n.createElement(f.a,Object.assign({},e,{ref:t,icon:m}))};h.displayName="RightOutlined";var b=n.forwardRef(h),y=a("7oih"),v=(t.default=function(e){var t=e.data,a=e.pageContext,n=t.markdownRemark,o=t.file?t.file.childImageSharp.fluid:null,u=n.frontmatter,f=u.title,g=u.date,m=u.description,h=u.tags,v=u.path,S=a.next,E=a.prev;return s.a.createElement(y.a,null,s.a.createElement(l.a,null,s.a.createElement("title",null,f),s.a.createElement("meta",{charSet:"utf-8",name:"description",property:"og:description",content:'Post "'+m+"\" on Constantine's blog"}),s.a.createElement("meta",{name:"keywords",content:h}),s.a.createElement("meta",{name:"author",content:"Constantine Yarushkin"}),s.a.createElement("link",{rel:"canonical",href:"https://c-v-ya.github.io/blog"+v})),s.a.createElement(r.a,{xs:{span:24},lg:{span:12,offset:4},style:{padding:"1rem"}},s.a.createElement("h1",null,f),s.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",paddingBottom:"0.5rem"}},s.a.createElement("em",null,g),s.a.createElement(i.a,{type:"vertical"}),s.a.createElement("span",null,n.timeToRead," min read")),o&&s.a.createElement("div",{style:{paddingBottom:"0.5rem"}},s.a.createElement(c.a,{fluid:o})),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}),s.a.createElement(i.a,null),s.a.createElement("ul",{className:"ant-pagination",style:{display:"flex",justifyContent:"center"}},S&&s.a.createElement("li",{className:"ant-pagination-item ant-pagination-prev"},s.a.createElement(d.a,{to:S.frontmatter.path},s.a.createElement(p,null)," Previous post")),E&&s.a.createElement("li",{className:"ant-pagination-item ant-pagination-next"},s.a.createElement(d.a,{to:E.frontmatter.path},"Next post ",s.a.createElement(b,null))))))},"413878034")},"t+fG":function(e,t,a){var r=a("P8UN"),i=a("96qb"),n=a("ap2Z"),s=/"/g,l=function(e,t,a,r){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},zTTH:function(e,t,a){"use strict";var r=a("P8UN"),i=a("Wadk")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(n)}}]);
//# sourceMappingURL=component---src-templates-post-template-js-6dd46aafd91d3aff8843.js.map