(function() {try {
    var elementStyle = document.createElement('style');
    elementStyle.appendChild(document.createTextNode(".container[data-v-7cba0fb0]{width:100%!important;height:100%!important}"));
    elementStyle.id = "";
    document.head.appendChild(elementStyle);
  } catch(e) {
    console.error('vite-plugin-css-injected-by-js', e);
  }
})();
import h from "@platform/el-button@0.0.2/@vis-resm/el-button";
var m = function() {
  var e = this, r = e.$createElement, s = e._self._c || r;
  return s("el-button", {
    staticClass: "container",
    style: {
      fontSize: e.fontSize
    },
    attrs: {
      icon: e.icon,
      loading: e.loading,
      type: e.type
    }
  }, [e._v(e._s(e.text))]);
}, C = [];
function y(e, r, s, c, i, a, _, d) {
  var n = typeof e == "function" ? e.options : e;
  r && (n.render = r, n.staticRenderFns = s, n._compiled = !0), c && (n.functional = !0), a && (n._scopeId = "data-v-" + a);
  var o;
  if (_ ? (o = function(t) {
    t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !t && typeof __VUE_SSR_CONTEXT__ < "u" && (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(_);
  }, n._ssrRegister = o) : i && (o = d ? function() {
    i.call(
      this,
      (n.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : i), o)
    if (n.functional) {
      n._injectStyles = o;
      var p = n.render;
      n.render = function(v, l) {
        return o.call(l), p(v, l);
      };
    } else {
      var f = n.beforeCreate;
      n.beforeCreate = f ? [].concat(f, o) : [o];
    }
  return {
    exports: e,
    options: n
  };
}
const g = {
  components: {
    ElButton: h
  },
  data() {
    return {
      icon: "",
      loading: !1,
      text: "\u6309\u94AE",
      color: "green",
      type: "primary",
      fontSize: "12px"
    };
  },
  methods: {}
}, u = {};
var $ = /* @__PURE__ */ y(
  g,
  m,
  C,
  !1,
  R,
  "7cba0fb0",
  null,
  null
);
function R(e) {
  for (let r in u)
    this[r] = u[r];
}
const b = /* @__PURE__ */ function() {
  return $.exports;
}();
export {
  b as default
};
