(function() {try {
    var elementStyle = document.createElement('style');
    elementStyle.appendChild(document.createTextNode(".basic-text-container[data-v-403afa34]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}input[data-v-403afa34]{outline:none;margin:0;border:0;padding:0;display:inline}"));
    elementStyle.id = "";
    document.head.appendChild(elementStyle);
  } catch(e) {
    console.error('vite-plugin-css-injected-by-js', e);
  }
})();
var h = function() {
  var e = this, r = e.$createElement, i = e._self._c || r;
  return i("div", {
    staticClass: "basic-text-container",
    style: {
      justifyContent: e.textAlign,
      alignItems: e.baseline,
      backgroundColor: e.backgroundColor,
      color: e.color
    },
    on: {
      click: e.edit
    }
  }, [i("input", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: e.focus,
      expression: "focus"
    }, {
      name: "model",
      rawName: "v-model",
      value: e.text,
      expression: "text"
    }],
    ref: "input",
    style: {
      fontSize: e.fontSize
    },
    attrs: {
      type: "text"
    },
    domProps: {
      value: e.text
    },
    on: {
      blur: function(s) {
        e.focus = !1;
      },
      mousedown: function(s) {
        return s.stopPropagation(), function() {
        }.apply(null, arguments);
      },
      input: function(s) {
        s.target.composing || (e.text = s.target.value);
      }
    }
  }), i("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !e.focus,
      expression: "!focus"
    }],
    style: {
      fontSize: e.fontSize
    },
    domProps: {
      textContent: e._s(e.text)
    }
  })]);
}, m = [];
function g(e, r, i, s, a, u, f, d) {
  var t = typeof e == "function" ? e.options : e;
  r && (t.render = r, t.staticRenderFns = i, t._compiled = !0), s && (t.functional = !0), u && (t._scopeId = "data-v-" + u);
  var o;
  if (f ? (o = function(n) {
    n = n || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !n && typeof __VUE_SSR_CONTEXT__ < "u" && (n = __VUE_SSR_CONTEXT__), a && a.call(this, n), n && n._registeredComponents && n._registeredComponents.add(f);
  }, t._ssrRegister = o) : a && (o = d ? function() {
    a.call(
      this,
      (t.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), o)
    if (t.functional) {
      t._injectStyles = o;
      var p = t.render;
      t.render = function(v, c) {
        return o.call(c), p(v, c);
      };
    } else {
      var l = t.beforeCreate;
      t.beforeCreate = l ? [].concat(l, o) : [o];
    }
  return {
    exports: e,
    options: t
  };
}
const C = {
  data() {
    return {
      text: "\u9ED8\u8BA4\u6587\u672C",
      fontSize: "16px",
      textAlign: "center",
      baseline: "center",
      focus: !1,
      backgroundColor: "",
      color: "rgb(255, 255, 255)"
    };
  },
  methods: {
    edit() {
      this.focus = !0, this.$nextTick(() => {
        this.$refs.input.focus();
      });
    }
  }
}, _ = {};
var x = /* @__PURE__ */ g(
  C,
  h,
  m,
  !1,
  b,
  "403afa34",
  null,
  null
);
function b(e) {
  for (let r in _)
    this[r] = _[r];
}
const w = /* @__PURE__ */ function() {
  return x.exports;
}();
export {
  w as default
};
