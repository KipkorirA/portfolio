;/*FB_PKG_DELIM*/

/**
 * License: https://www.facebook.com/legal/license/V9vdYColc4k/
 */
__d("react-0.0.0",["React"],(function(a,b,c,d,e,f){"use strict";function a(a){return a&&typeof a==="object"&&"default"in a?a["default"]:a}var g=a(b("React"));d={};var h={exports:d};function i(){h.exports=g}var j=!1;function k(){j||(j=!0,i());return h.exports}function c(a){switch(a){case void 0:return k()}}e.exports=c}),null);
__d("react",["react-0.0.0"],(function(a,b,c,d,e,f){e.exports=b("react-0.0.0")()}),null);
/**
 * License: https://www.facebook.com/legal/license/t3hOLs8wlXy/
 */
__d("resize-observer-polyfill-1.5.1",[],(function(a,b,c,d,e,f){"use strict";var g={},h={exports:g};function i(){(function(b,c){typeof g==="object"&&typeof h!=="undefined"?h.exports=c():b.ResizeObserver=c()})(this,function(){var b=function(){if(typeof Map!=="undefined")return Map;function a(a,b){var c=-1;a.some(function(d,a){if(d[0]===b){c=a;return!0}return!1});return c}return function(){function b(){this.__entries__=[]}Object.defineProperty(b.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0});b.prototype.get=function(b){b=a(this.__entries__,b);b=this.__entries__[b];return b&&b[1]};b.prototype.set=function(c,d){var b=a(this.__entries__,c);~b?this.__entries__[b][1]=d:this.__entries__.push([c,d])};b.prototype["delete"]=function(b){var c=this.__entries__;b=a(c,b);~b&&c.splice(b,1)};b.prototype.has=function(b){return!!~a(this.__entries__,b)};b.prototype.clear=function(){this.__entries__.splice(0)};b.prototype.forEach=function(a,b){b===void 0&&(b=null);for(var c=0,d=this.__entries__;c<d.length;c++){var e=d[c];a.call(b,e[1],e[0])}};return b}()}(),c=typeof window!=="undefined"&&typeof document!=="undefined"&&window.document===document,d=function(){if(typeof a!=="undefined"&&a.Math===Math)return a;if(typeof self!=="undefined"&&self.Math===Math)return self;return typeof window!=="undefined"&&window.Math===Math?window:Function("return this")()}(),e=function(){return typeof requestAnimationFrame==="function"?requestAnimationFrame.bind(d):function(a){return setTimeout(function(){return a(Date.now())},1e3/60)}}(),f=2;function g(a,b){var c=!1,d=!1,g=0;function h(){c&&(c=!1,a()),d&&j()}function i(){e(h)}function j(){var a=Date.now();if(c){if(a-g<f)return;d=!0}else c=!0,d=!1,setTimeout(i,b);g=a}return j}var h=20,i=["top","right","bottom","left","width","height","size","weight"],j=typeof MutationObserver!=="undefined",k=function(){function a(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=g(this.refresh.bind(this),h)}a.prototype.addObserver=function(a){~this.observers_.indexOf(a)||this.observers_.push(a),this.connected_||this.connect_()};a.prototype.removeObserver=function(b){var a=this.observers_;b=a.indexOf(b);~b&&a.splice(b,1);!a.length&&this.connected_&&this.disconnect_()};a.prototype.refresh=function(){var a=this.updateObservers_();a&&this.refresh()};a.prototype.updateObservers_=function(){var a=this.observers_.filter(function(a){return a.gatherActive(),a.hasActive()});a.forEach(function(a){return a.broadcastActive()});return a.length>0};a.prototype.connect_=function(){if(!c||this.connected_)return;document.addEventListener("transitionend",this.onTransitionEnd_);window.addEventListener("resize",this.refresh);j?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0);this.connected_=!0};a.prototype.disconnect_=function(){if(!c||!this.connected_)return;document.removeEventListener("transitionend",this.onTransitionEnd_);window.removeEventListener("resize",this.refresh);this.mutationsObserver_&&this.mutationsObserver_.disconnect();this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh);this.mutationsObserver_=null;this.mutationEventsAdded_=!1;this.connected_=!1};a.prototype.onTransitionEnd_=function(a){a=a.propertyName;var b=a===void 0?"":a;a=i.some(function(a){return!!~b.indexOf(a)});a&&this.refresh()};a.getInstance=function(){this.instance_||(this.instance_=new a());return this.instance_};a.instance_=null;return a}(),l=function(a,b){for(var c=0,d=Object.keys(b);c<d.length;c++){var e=d[c];Object.defineProperty(a,e,{value:b[e],enumerable:!1,writable:!1,configurable:!0})}return a},m=function(a){a=a&&a.ownerDocument&&a.ownerDocument.defaultView;return a||d},n=x(0,0,0,0);function o(a){return parseFloat(a)||0}function p(a){var b=[];for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];return b.reduce(function(b,c){c=a["border-"+c+"-width"];return b+o(c)},0)}function q(a){var b=["top","right","bottom","left"],c={};for(var d=0,b=b;d<b.length;d++){var e=b[d],f=a["padding-"+e];c[e]=o(f)}return c}function r(a){a=a.getBBox();return x(0,0,a.width,a.height)}function s(a){var b=a.clientWidth,c=a.clientHeight;if(!b&&!c)return n;var d=m(a).getComputedStyle(a),e=q(d),f=e.left+e.right,g=e.top+e.bottom,h=o(d.width),i=o(d.height);d.boxSizing==="border-box"&&(Math.round(h+f)!==b&&(h-=p(d,"left","right")+f),Math.round(i+g)!==c&&(i-=p(d,"top","bottom")+g));if(!u(a)){d=Math.round(h+f)-b;a=Math.round(i+g)-c;Math.abs(d)!==1&&(h-=d);Math.abs(a)!==1&&(i-=a)}return x(e.left,e.top,h,i)}var t=function(){return typeof SVGGraphicsElement!=="undefined"?function(a){return a instanceof m(a).SVGGraphicsElement}:function(a){return a instanceof m(a).SVGElement&&typeof a.getBBox==="function"}}();function u(a){return a===m(a).document.documentElement}function v(a){if(!c)return n;return t(a)?r(a):s(a)}function w(a){var b=a.x,c=a.y,d=a.width;a=a.height;var e=typeof DOMRectReadOnly!=="undefined"?DOMRectReadOnly:Object;e=Object.create(e.prototype);l(e,{x:b,y:c,width:d,height:a,top:c,right:b+d,bottom:a+c,left:b});return e}function x(a,b,c,d){return{x:a,y:b,width:c,height:d}}var y=function(){function a(a){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=x(0,0,0,0),this.target=a}a.prototype.isActive=function(){var a=v(this.target);this.contentRect_=a;return a.width!==this.broadcastWidth||a.height!==this.broadcastHeight};a.prototype.broadcastRect=function(){var a=this.contentRect_;this.broadcastWidth=a.width;this.broadcastHeight=a.height;return a};return a}(),z=function(){function a(a,b){b=w(b);l(this,{target:a,contentRect:b})}return a}(),A=function(){function a(a,c,d){this.activeObservations_=[];this.observations_=new b();if(typeof a!=="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=a;this.controller_=c;this.callbackCtx_=d}a.prototype.observe=function(a){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(typeof Element==="undefined"||!(Element instanceof Object))return;if(!(a instanceof m(a).Element))throw new TypeError('parameter 1 is not of type "Element".');var b=this.observations_;if(b.has(a))return;b.set(a,new y(a));this.controller_.addObserver(this);this.controller_.refresh()};a.prototype.unobserve=function(a){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(typeof Element==="undefined"||!(Element instanceof Object))return;if(!(a instanceof m(a).Element))throw new TypeError('parameter 1 is not of type "Element".');var b=this.observations_;if(!b.has(a))return;b["delete"](a);b.size||this.controller_.removeObserver(this)};a.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)};a.prototype.gatherActive=function(){var a=this;this.clearActive();this.observations_.forEach(function(b){b.isActive()&&a.activeObservations_.push(b)})};a.prototype.broadcastActive=function(){if(!this.hasActive())return;var a=this.callbackCtx_,b=this.activeObservations_.map(function(a){return new z(a.target,a.broadcastRect())});this.callback_.call(a,b,a);this.clearActive()};a.prototype.clearActive=function(){this.activeObservations_.splice(0)};a.prototype.hasActive=function(){return this.activeObservations_.length>0};return a}(),B=typeof WeakMap!=="undefined"?new WeakMap():new b(),C=function(){function a(b){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var c=k.getInstance(),d=new A(b,c,this);B.set(this,d)}return a}();["observe","unobserve","disconnect"].forEach(function(a){C.prototype[a]=function(){var b;return(b=B.get(this))[a].apply(b,arguments)}});var D=function(){return typeof d.ResizeObserver!=="undefined"?d.ResizeObserver:C}();return D})}var j=!1;function k(){j||(j=!0,i());return h.exports}function b(a){switch(a){case void 0:return k()}}e.exports=b}),null);
/**
 * License: https://www.facebook.com/legal/license/t3hOLs8wlXy/
 */
__d("styleq-0.1.3",[],(function(a,b,c,d,e,f){"use strict";var g={},h={exports:g};function i(){Object.defineProperty(g,"__esModule",{value:!0});g.styleq=void 0;var a=new WeakMap(),b="$$css";function c(c){var d,e,f;c!=null&&(d=c.disableCache===!0,e=c.disableMix===!0,f=c.transform);return function(){var c=[],g="",h=null,i=d?null:a,j=new Array(arguments.length);for(var k=0;k<arguments.length;k++)j[k]=arguments[k];while(j.length>0){var l=j.pop();if(l==null||l===!1)continue;if(Array.isArray(l)){for(var m=0;m<l.length;m++)j.push(l[m]);continue}var n=f!=null?f(l):l;if(n.$$css){var o="";if(i!=null&&i.has(n)){var p=i.get(n);p!=null&&(o=p[0],c.push.apply(c,p[1]),i=p[2])}else{var q=[];for(var r in n){var s=n[r];if(r===b)continue;(typeof s==="string"||s===null)&&(c.includes(r)||(c.push(r),i!=null&&q.push(r),typeof s==="string"&&(o+=o?" "+s:s)))}if(i!=null){var t=new WeakMap();i.set(n,[o,q,t]);i=t}}o&&(g=g?o+" "+g:o)}else if(e)h==null&&(h={}),h=Object.assign({},n,h);else{var u=null;for(var v in n){var w=n[v];w!==void 0&&(c.includes(v)||(w!=null&&(h==null&&(h={}),u==null&&(u={}),u[v]=w),c.push(v),i=null))}u!=null&&(h=Object.assign(u,h))}}var x=[g,h];return x}}var d=c();g.styleq=d;d.factory=c}var j=!1;function k(){j||(j=!0,i());return h.exports}b={};var l={exports:b};function m(){l.exports=k()}var n=!1;function o(){n||(n=!0,m());return l.exports}function a(a){switch(a){case void 0:return o()}}e.exports=a}),null);
__d("styleq",["styleq-0.1.3"],(function(a,b,c,d,e,f){e.exports=b("styleq-0.1.3")()}),null);/*FB_PKG_DELIM*/
__d("SubscriptionList",["recoverableViolation"],(function(a,b,c,d,e,f,g){a=function(){function a(a,b){this.$1=[],this.$2=a,this.$3=b}var b=a.prototype;b.add=function(a){var b=this,d={callback:a};this.$1.push(d);this.$2&&this.$1.length===1&&this.$2();return{remove:function(){var a=b.$1.indexOf(d);if(a===-1){c("recoverableViolation")("SubscriptionList: Callback already removed.","SubscriptionList");return}b.$1.splice(a,1);b.$3&&b.$1.length===0&&b.$3()}}};b.getCallbacks=function(){return this.$1.map(function(a){return a.callback})};b.fireCallbacks=function(a){this.getCallbacks().forEach(function(b){b(a)})};return a}();g["default"]=a}),98);
__d("ScriptPath",["ErrorGuard","SubscriptionList","TimeSlice","WebStorage","isInIframe"],(function(a,b,c,d,e,f){"use strict";var g,h,i="sp_pi",j=1e3*30,k=null,l=null,m=new(b("SubscriptionList"))(),n=null,o=[],p=b("TimeSlice").guard(function(a,c){m.getCallbacks().forEach(function(d){(g||(g=b("ErrorGuard"))).applyWithGuard(function(){d({source:k,dest:l,cause:a,extraData:c})},null,[])})},"ScriptPath Notifying callbacks",{propagationType:b("TimeSlice").PropagationType.ORPHAN});function q(){return l?l.scriptPath:void 0}function r(){var a=(h||(h=b("WebStorage"))).getSessionStorage();if(!a||b("isInIframe")())return;h.setItemGuarded(a,i,JSON.stringify({pageInfo:l,clickPoint:n,time:Date.now()}))}function a(){var a=(h||(h=b("WebStorage"))).getSessionStorageForRead();if(!a)return;var c=a.getItem(i);if(c){c=JSON.parse(c);c&&(c.time<Date.now()-j&&(a=(h||(h=b("WebStorage"))).getSessionStorage(),a&&a.removeItem(i)),l=c.pageInfo,n=c.clickPoint,l&&(l.restored=!0))}}a();c={set:function(a,b,c){k=l,l={scriptPath:a,categoryToken:b,extraData:c||{}},o=[],window._script_path=a,p()},openOverlayView:function(a,b,c){if(!a)return;var d=o.length;(d===0||o[d-1]!==a)&&(k=babelHelpers["extends"]({},l),l&&(l.topViewEndpoint=a),c&&c.replaceTopOverlay&&d>0?(o[d-1]=a,p("replace_overlay_view",b)):(o.push(a),p("open_overlay_view",b)))},closeOverlayView:function(a,b){a=o.lastIndexOf(a);if(a===-1)return;k=babelHelpers["extends"]({},l);l&&(a>0?l.topViewEndpoint=o[a-1]:l.topViewEndpoint=null);o=o.slice(0,a);p("close_overlay_view",b)},setClickPointInfo:function(a){n=a,r()},getClickPointInfo:function(){return n},getScriptPath:q,getCategoryToken:function(){return l?l.categoryToken:void 0},getEarlyFlushPage:function(){var a;return(a=l)==null?void 0:(a=a.extraData)==null?void 0:a.ef_page},getTopViewEndpoint:function(){var a=o.length;return a>0?o[a-1]:q()},getPageInfo:function(){return l},getSourcePageInfo:function(){return k},subscribe:function(a){return m.add(b("TimeSlice").guard(a,"ScriptPath.subscribe"))},shutdown:function(){r()}};e.exports=c}),null);/*FB_PKG_DELIM*/
__d("IncludeCommentWithAttachment.relayprovider",["qex"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){return c("qex")._("1299")!==!0}};g["default"]=a}),98);
__d("areEqual",[],(function(a,b,c,d,e,f){var g=[],h=[];function a(a,b){var c=g.length?g.pop():[],d=h.length?h.pop():[];a=i(a,b,c,d);c.length=0;d.length=0;g.push(c);h.push(d);return a}function i(a,b,c,d){if(a===b)return a!==0||1/a==1/b;if(a==null||b==null)return!1;if(typeof a!=="object"||typeof b!=="object")return!1;var e=Object.prototype.toString,f=e.call(a);if(f!=e.call(b))return!1;switch(f){case"[object String]":return a==String(b);case"[object Number]":return isNaN(a)||isNaN(b)?!1:a==Number(b);case"[object Date]":case"[object Boolean]":return+a==+b;case"[object RegExp]":return a.source==b.source&&a.global==b.global&&a.multiline==b.multiline&&a.ignoreCase==b.ignoreCase}e=c.length;while(e--)if(c[e]==a)return d[e]==b;c.push(a);d.push(b);try{e=0;if(f==="[object Array]"){e=a.length;if(e!==b.length)return!1;while(e--)if(!i(a[e],b[e],c,d))return!1}else if(a instanceof Set){if(a.size!==b.size)return!1;f=Array.from(b.values());for(var e=a,g=Array.isArray(e),h=0,e=g?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var j;if(g){if(h>=e.length)break;j=e[h++]}else{h=e.next();if(h.done)break;j=h.value}j=j;var k=!1;for(var l=0;l<f.length;l++){var m=f[l];if(i(j,m,c,d)){k=!0;f.splice(l,1);break}}if(k===!1)return!1}return!0}else if(a instanceof Map){if(a.size!==b.size)return!1;m=Array.from(b);for(j=a,l=Array.isArray(j),k=0,j=l?j:j[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(l){if(k>=j.length)break;h=j[k++]}else{k=j.next();if(k.done)break;h=k.value}g=h;e=!1;for(f=0;f<m.length;f++){h=m[f];if(i(g,h,c,d)){e=!0;m.splice(f,1);break}}if(e===!1)return!1}return!0}else{if(a.constructor!==b.constructor)return!1;if(Object.prototype.hasOwnProperty.call(a,"valueOf")&&Object.prototype.hasOwnProperty.call(b,"valueOf"))return a.valueOf()==b.valueOf();h=Object.keys(a);if(h.length!=Object.keys(b).length)return!1;for(f=0;f<h.length;f++){if(h[f]==="_owner")continue;if(!Object.prototype.hasOwnProperty.call(b,h[f])||!i(a[h[f]],b[h[f]],c,d))return!1}}return!0}finally{c.pop(),d.pop()}}f["default"]=a}),66);
__d("isWorkDotMetaDotComURI",[],(function(a,b,c,d,e,f){var g=new RegExp("(^|\\.)work\\.meta\\.com$","i"),h=["https"];function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:h.indexOf(a.getProtocol())!==-1&&g.test(a.getDomain())}f["default"]=a}),66);