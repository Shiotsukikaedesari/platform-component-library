(function() {try {
    var elementStyle = document.createElement('style');
    elementStyle.appendChild(document.createTextNode(".easy-display-header[data-v-28d92bfb]{width:100%;height:100%;display:flex}.easy-display-header>*[data-v-28d92bfb]{text-shadow:0 0 12px var(--theme-color)}.logo-part[data-v-28d92bfb]{width:5%;height:100%;display:flex;justify-content:center;align-items:center;min-width:70px;border-left:2px solid #e3e8ff;border-top:1px solid #eaeeff;border-bottom:1px solid rgba(182,195,255,.3);box-shadow:0 0 5vw var(--theme-color) inset;box-sizing:border-box;margin-right:2px}.main-part[data-v-28d92bfb]{flex:1;display:flex;align-items:center;justify-content:space-between;padding:0 2vw;position:relative;box-shadow:0 0 200px var(--theme-color) inset}.main-part>.title-label[data-v-28d92bfb]{display:flex;align-items:center}.main-part>.title-label>.title[data-v-28d92bfb]{font-weight:700;margin-right:32px}.main-part>.date-label[data-v-28d92bfb]{display:flex;align-items:center}.main-part .separator[data-v-28d92bfb]{width:2px;height:10px;background-color:var(--theme-color);margin:12px}.main-part[data-v-28d92bfb]:before,.main-part[data-v-28d92bfb]:after{position:absolute;content:\"\";width:100%;height:2px}.main-part[data-v-28d92bfb]:before{top:0px;left:0;background:linear-gradient(to right,#f3f7ff 0%,rgba(0,0,0,0) 30%,rgba(0,0,0,0) 70%,#f3f7ff 100%)}.main-part[data-v-28d92bfb]:after{top:unset;left:0;bottom:0px;background:linear-gradient(to right,#f3f7ff 0%,rgba(0,0,0,0) 60%,rgba(0,0,0,0) 90%,#f3f7ff 100%)}"));
    elementStyle.id = "";
    document.head.appendChild(elementStyle);
  } catch(e) {
    console.error('vite-plugin-css-injected-by-js', e);
  }
})();
var m = function() {
  var t = this, a = t.$createElement, e = t._self._c || a;
  return e("div", {
    staticClass: "easy-display-header",
    style: {
      "--theme-color": t.themeColor
    }
  }, [e("div", {
    staticClass: "logo-part"
  }, [e("img", {
    style: {
      width: t.logoSize,
      height: t.logoSize
    },
    attrs: {
      src: t.logo,
      alt: "logo"
    }
  })]), e("div", {
    staticClass: "main-part"
  }, [e("div", {
    staticClass: "title-label"
  }, [e("div", {
    staticClass: "title",
    style: {
      fontSize: t.titleFontSize,
      color: t.textColor
    },
    domProps: {
      textContent: t._s(t.title)
    }
  }), e("div", {
    staticClass: "desp",
    staticStyle: {
      opacity: "0.7"
    },
    style: {
      color: t.textColor
    },
    domProps: {
      textContent: t._s(t.desp)
    }
  })]), e("div", {
    staticClass: "date-label"
  }, [e("div", {
    staticClass: "date-box"
  }, [e("div", {
    staticClass: "day",
    style: {
      color: t.textColor
    },
    domProps: {
      textContent: t._s(t.getDay())
    }
  }), e("div", {
    staticClass: "date",
    style: {
      color: t.textColor
    },
    domProps: {
      textContent: t._s(t.date)
    }
  })]), e("div", {
    staticClass: "separator"
  }), e("div", {
    staticClass: "time",
    staticStyle: {
      "font-weight": "bold"
    },
    style: {
      color: t.textColor,
      fontSize: t.timeFontSize
    },
    domProps: {
      textContent: t._s(t.time)
    }
  })])])]);
}, h = [];
function u(t, a, e, f, n, r, l, p) {
  var o = typeof t == "function" ? t.options : t;
  a && (o.render = a, o.staticRenderFns = e, o._compiled = !0), f && (o.functional = !0), r && (o._scopeId = "data-v-" + r);
  var i;
  if (l ? (i = function(s) {
    s = s || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !s && typeof __VUE_SSR_CONTEXT__ < "u" && (s = __VUE_SSR_CONTEXT__), n && n.call(this, s), s && s._registeredComponents && s._registeredComponents.add(l);
  }, o._ssrRegister = i) : n && (i = p ? function() {
    n.call(
      this,
      (o.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : n), i)
    if (o.functional) {
      o._injectStyles = i;
      var v = o.render;
      o.render = function(C, c) {
        return i.call(c), v(C, c);
      };
    } else {
      var d = o.beforeCreate;
      o.beforeCreate = d ? [].concat(d, i) : [i];
    }
  return {
    exports: t,
    options: o
  };
}
const g = {
  data() {
    const t = import.meta.url;
    return {
      textColor: "rgb(255, 255, 255)",
      logo: new URL("./logo.png", t).href,
      logoSize: "50px",
      themeColor: "rgba(0, 148, 255, 0.5)",
      title: "\u9ED8\u8BA4\u5927\u5C4F\u6807\u9898",
      titleFontSize: "32px",
      desp: "\u9ED8\u8BA4\u5927\u5C4F\u526F\u6807\u9898\u4E0E\u63CF\u8FF0\u6587\u5B57",
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      day: new Date().getDay(),
      timeFontSize: "20px",
      timer: ""
    };
  },
  methods: {
    getDay() {
      return `\u661F\u671F${["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u65E5"][this.day]}`;
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      const t = new Date();
      this.time = t.toLocaleTimeString(), this.date = t.toLocaleDateString(), this.day = t.getDay();
    }, 1e3);
  },
  destroyed() {
    clearInterval(this.timer);
  }
}, _ = {};
var y = /* @__PURE__ */ u(
  g,
  m,
  h,
  !1,
  S,
  "28d92bfb",
  null,
  null
);
function S(t) {
  for (let a in _)
    this[a] = _[a];
}
const x = /* @__PURE__ */ function() {
  return y.exports;
}();
export {
  x as default
};
//# sourceMappingURL=index.es.js.map
