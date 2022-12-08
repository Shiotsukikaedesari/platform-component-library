(function() {try {
    var elementStyle = document.createElement('style');
    elementStyle.appendChild(document.createTextNode(""));
    elementStyle.id = "";
    document.head.appendChild(elementStyle);
  } catch(e) {
    console.error('vite-plugin-css-injected-by-js', e);
  }
})();
(function(r,a){typeof exports=="object"&&typeof module<"u"?module.exports=a():typeof define=="function"&&define.amd?define(a):(r=typeof globalThis<"u"?globalThis:r||self,r.index=a())})(this,function(){"use strict";var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"easy-display-header",style:{"--theme-color":t.themeColor}},[e("div",{staticClass:"logo-part"},[e("img",{style:{width:t.logoSize,height:t.logoSize},attrs:{src:t.logo,alt:"logo"}})]),e("div",{staticClass:"main-part"},[e("div",{staticClass:"title-label"},[e("div",{staticClass:"title",style:{fontSize:t.titleFontSize,color:t.textColor},domProps:{textContent:t._s(t.title)}}),e("div",{staticClass:"desp",staticStyle:{opacity:"0.7"},style:{color:t.textColor},domProps:{textContent:t._s(t.desp)}})]),e("div",{staticClass:"date-label"},[e("div",{staticClass:"date-box"},[e("div",{staticClass:"day",style:{color:t.textColor},domProps:{textContent:t._s(t.getDay())}}),e("div",{staticClass:"date",style:{color:t.textColor},domProps:{textContent:t._s(t.date)}})]),e("div",{staticClass:"separator"}),e("div",{staticClass:"time",staticStyle:{"font-weight":"bold"},style:{color:t.textColor,fontSize:t.timeFontSize},domProps:{textContent:t._s(t.time)}})])])])},a=[];const x="";function p(t,s,e,C,l,c,f,y){var o=typeof t=="function"?t.options:t;s&&(o.render=s,o.staticRenderFns=e,o._compiled=!0),C&&(o.functional=!0),c&&(o._scopeId="data-v-"+c);var i;if(f?(i=function(n){n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!n&&typeof __VUE_SSR_CONTEXT__<"u"&&(n=__VUE_SSR_CONTEXT__),l&&l.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(f)},o._ssrRegister=i):l&&(i=y?function(){l.call(this,(o.functional?this.parent:this).$root.$options.shadowRoot)}:l),i)if(o.functional){o._injectStyles=i;var g=o.render;o.render=function(S,_){return i.call(_),g(S,_)}}else{var u=o.beforeCreate;o.beforeCreate=u?[].concat(u,i):[i]}return{exports:t,options:o}}const m={data(){const t=typeof document>"u"&&typeof location>"u"?new(require("url")).URL("file:"+__filename).href:typeof document>"u"?location.href:document.currentScript&&document.currentScript.src||new URL("index.umd.js",document.baseURI).href;return{textColor:"rgb(255, 255, 255)",logo:new URL("./logo.png",t).href,logoSize:"50px",themeColor:"rgba(0, 148, 255, 0.5)",title:"\u9ED8\u8BA4\u5927\u5C4F\u6807\u9898",titleFontSize:"32px",desp:"\u9ED8\u8BA4\u5927\u5C4F\u526F\u6807\u9898\u4E0E\u63CF\u8FF0\u6587\u5B57",time:new Date().toLocaleTimeString(),date:new Date().toLocaleDateString(),day:new Date().getDay(),timeFontSize:"20px",timer:""}},methods:{getDay(){return`\u661F\u671F${["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u65E5"][this.day]}`}},mounted(){this.timer=setInterval(()=>{const t=new Date;this.time=t.toLocaleTimeString(),this.date=t.toLocaleDateString(),this.day=t.getDay()},1e3)},destroyed(){clearInterval(this.timer)}},d={};var h=p(m,r,a,!1,v,"28d92bfb",null,null);function v(t){for(let s in d)this[s]=d[s]}return function(){return h.exports}()});
//# sourceMappingURL=index.umd.js.map
