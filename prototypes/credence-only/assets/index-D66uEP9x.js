(function () {
  const i = document.createElement('link').relList;
  if (i && i.supports && i.supports('modulepreload')) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) s(u);
  new MutationObserver((u) => {
    for (const c of u)
      if (c.type === 'childList')
        for (const f of c.addedNodes) f.tagName === 'LINK' && f.rel === 'modulepreload' && s(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(u) {
    const c = {};
    return (
      u.integrity && (c.integrity = u.integrity),
      u.referrerPolicy && (c.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === 'use-credentials'
        ? (c.credentials = 'include')
        : u.crossOrigin === 'anonymous'
          ? (c.credentials = 'omit')
          : (c.credentials = 'same-origin'),
      c
    );
  }
  function s(u) {
    if (u.ep) return;
    u.ep = !0;
    const c = l(u);
    fetch(u.href, c);
  }
})();
function Qd(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
}
var oa = { exports: {} },
  Ri = {},
  sa = { exports: {} },
  je = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qf;
function $m() {
  if (qf) return je;
  qf = 1;
  var n = Symbol.for('react.element'),
    i = Symbol.for('react.portal'),
    l = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    u = Symbol.for('react.profiler'),
    c = Symbol.for('react.provider'),
    f = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    m = Symbol.for('react.memo'),
    g = Symbol.for('react.lazy'),
    v = Symbol.iterator;
  function x(I) {
    return I === null || typeof I != 'object'
      ? null
      : ((I = (v && I[v]) || I['@@iterator']), typeof I == 'function' ? I : null);
  }
  var k = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    O = Object.assign,
    j = {};
  function L(I, D, C) {
    ((this.props = I), (this.context = D), (this.refs = j), (this.updater = C || k));
  }
  ((L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (I, D) {
      if (typeof I != 'object' && typeof I != 'function' && I != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, I, D, 'setState');
    }),
    (L.prototype.forceUpdate = function (I) {
      this.updater.enqueueForceUpdate(this, I, 'forceUpdate');
    }));
  function R() {}
  R.prototype = L.prototype;
  function M(I, D, C) {
    ((this.props = I), (this.context = D), (this.refs = j), (this.updater = C || k));
  }
  var F = (M.prototype = new R());
  ((F.constructor = M), O(F, L.prototype), (F.isPureReactComponent = !0));
  var V = Array.isArray,
    ae = Object.prototype.hasOwnProperty,
    z = { current: null },
    J = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ve(I, D, C) {
    var fe,
      le = {},
      ue = null,
      Ie = null;
    if (D != null)
      for (fe in (D.ref !== void 0 && (Ie = D.ref), D.key !== void 0 && (ue = '' + D.key), D))
        ae.call(D, fe) && !J.hasOwnProperty(fe) && (le[fe] = D[fe]);
    var _e = arguments.length - 2;
    if (_e === 1) le.children = C;
    else if (1 < _e) {
      for (var Le = Array(_e), ce = 0; ce < _e; ce++) Le[ce] = arguments[ce + 2];
      le.children = Le;
    }
    if (I && I.defaultProps)
      for (fe in ((_e = I.defaultProps), _e)) le[fe] === void 0 && (le[fe] = _e[fe]);
    return { $$typeof: n, type: I, key: ue, ref: Ie, props: le, _owner: z.current };
  }
  function Se(I, D) {
    return { $$typeof: n, type: I.type, key: D, ref: I.ref, props: I.props, _owner: I._owner };
  }
  function Ce(I) {
    return typeof I == 'object' && I !== null && I.$$typeof === n;
  }
  function re(I) {
    var D = { '=': '=0', ':': '=2' };
    return (
      '$' +
      I.replace(/[=:]/g, function (C) {
        return D[C];
      })
    );
  }
  var X = /\/+/g;
  function ke(I, D) {
    return typeof I == 'object' && I !== null && I.key != null ? re('' + I.key) : D.toString(36);
  }
  function te(I, D, C, fe, le) {
    var ue = typeof I;
    (ue === 'undefined' || ue === 'boolean') && (I = null);
    var Ie = !1;
    if (I === null) Ie = !0;
    else
      switch (ue) {
        case 'string':
        case 'number':
          Ie = !0;
          break;
        case 'object':
          switch (I.$$typeof) {
            case n:
            case i:
              Ie = !0;
          }
      }
    if (Ie)
      return (
        (Ie = I),
        (le = le(Ie)),
        (I = fe === '' ? '.' + ke(Ie, 0) : fe),
        V(le)
          ? ((C = ''),
            I != null && (C = I.replace(X, '$&/') + '/'),
            te(le, D, C, '', function (ce) {
              return ce;
            }))
          : le != null &&
            (Ce(le) &&
              (le = Se(
                le,
                C +
                  (!le.key || (Ie && Ie.key === le.key)
                    ? ''
                    : ('' + le.key).replace(X, '$&/') + '/') +
                  I
              )),
            D.push(le)),
        1
      );
    if (((Ie = 0), (fe = fe === '' ? '.' : fe + ':'), V(I)))
      for (var _e = 0; _e < I.length; _e++) {
        ue = I[_e];
        var Le = fe + ke(ue, _e);
        Ie += te(ue, D, C, Le, le);
      }
    else if (((Le = x(I)), typeof Le == 'function'))
      for (I = Le.call(I), _e = 0; !(ue = I.next()).done; )
        ((ue = ue.value), (Le = fe + ke(ue, _e++)), (Ie += te(ue, D, C, Le, le)));
    else if (ue === 'object')
      throw (
        (D = String(I)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (D === '[object Object]' ? 'object with keys {' + Object.keys(I).join(', ') + '}' : D) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return Ie;
  }
  function q(I, D, C) {
    if (I == null) return I;
    var fe = [],
      le = 0;
    return (
      te(I, fe, '', '', function (ue) {
        return D.call(C, ue, le++);
      }),
      fe
    );
  }
  function me(I) {
    if (I._status === -1) {
      var D = I._result;
      ((D = D()),
        D.then(
          function (C) {
            (I._status === 0 || I._status === -1) && ((I._status = 1), (I._result = C));
          },
          function (C) {
            (I._status === 0 || I._status === -1) && ((I._status = 2), (I._result = C));
          }
        ),
        I._status === -1 && ((I._status = 0), (I._result = D)));
    }
    if (I._status === 1) return I._result.default;
    throw I._result;
  }
  var ge = { current: null },
    $ = { transition: null },
    Z = { ReactCurrentDispatcher: ge, ReactCurrentBatchConfig: $, ReactCurrentOwner: z };
  function S() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (je.Children = {
      map: q,
      forEach: function (I, D, C) {
        q(
          I,
          function () {
            D.apply(this, arguments);
          },
          C
        );
      },
      count: function (I) {
        var D = 0;
        return (
          q(I, function () {
            D++;
          }),
          D
        );
      },
      toArray: function (I) {
        return (
          q(I, function (D) {
            return D;
          }) || []
        );
      },
      only: function (I) {
        if (!Ce(I))
          throw Error('React.Children.only expected to receive a single React element child.');
        return I;
      },
    }),
    (je.Component = L),
    (je.Fragment = l),
    (je.Profiler = u),
    (je.PureComponent = M),
    (je.StrictMode = s),
    (je.Suspense = h),
    (je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z),
    (je.act = S),
    (je.cloneElement = function (I, D, C) {
      if (I == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + I + '.'
        );
      var fe = O({}, I.props),
        le = I.key,
        ue = I.ref,
        Ie = I._owner;
      if (D != null) {
        if (
          (D.ref !== void 0 && ((ue = D.ref), (Ie = z.current)),
          D.key !== void 0 && (le = '' + D.key),
          I.type && I.type.defaultProps)
        )
          var _e = I.type.defaultProps;
        for (Le in D)
          ae.call(D, Le) &&
            !J.hasOwnProperty(Le) &&
            (fe[Le] = D[Le] === void 0 && _e !== void 0 ? _e[Le] : D[Le]);
      }
      var Le = arguments.length - 2;
      if (Le === 1) fe.children = C;
      else if (1 < Le) {
        _e = Array(Le);
        for (var ce = 0; ce < Le; ce++) _e[ce] = arguments[ce + 2];
        fe.children = _e;
      }
      return { $$typeof: n, type: I.type, key: le, ref: ue, props: fe, _owner: Ie };
    }),
    (je.createContext = function (I) {
      return (
        (I = {
          $$typeof: f,
          _currentValue: I,
          _currentValue2: I,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (I.Provider = { $$typeof: c, _context: I }),
        (I.Consumer = I)
      );
    }),
    (je.createElement = ve),
    (je.createFactory = function (I) {
      var D = ve.bind(null, I);
      return ((D.type = I), D);
    }),
    (je.createRef = function () {
      return { current: null };
    }),
    (je.forwardRef = function (I) {
      return { $$typeof: p, render: I };
    }),
    (je.isValidElement = Ce),
    (je.lazy = function (I) {
      return { $$typeof: g, _payload: { _status: -1, _result: I }, _init: me };
    }),
    (je.memo = function (I, D) {
      return { $$typeof: m, type: I, compare: D === void 0 ? null : D };
    }),
    (je.startTransition = function (I) {
      var D = $.transition;
      $.transition = {};
      try {
        I();
      } finally {
        $.transition = D;
      }
    }),
    (je.unstable_act = S),
    (je.useCallback = function (I, D) {
      return ge.current.useCallback(I, D);
    }),
    (je.useContext = function (I) {
      return ge.current.useContext(I);
    }),
    (je.useDebugValue = function () {}),
    (je.useDeferredValue = function (I) {
      return ge.current.useDeferredValue(I);
    }),
    (je.useEffect = function (I, D) {
      return ge.current.useEffect(I, D);
    }),
    (je.useId = function () {
      return ge.current.useId();
    }),
    (je.useImperativeHandle = function (I, D, C) {
      return ge.current.useImperativeHandle(I, D, C);
    }),
    (je.useInsertionEffect = function (I, D) {
      return ge.current.useInsertionEffect(I, D);
    }),
    (je.useLayoutEffect = function (I, D) {
      return ge.current.useLayoutEffect(I, D);
    }),
    (je.useMemo = function (I, D) {
      return ge.current.useMemo(I, D);
    }),
    (je.useReducer = function (I, D, C) {
      return ge.current.useReducer(I, D, C);
    }),
    (je.useRef = function (I) {
      return ge.current.useRef(I);
    }),
    (je.useState = function (I) {
      return ge.current.useState(I);
    }),
    (je.useSyncExternalStore = function (I, D, C) {
      return ge.current.useSyncExternalStore(I, D, C);
    }),
    (je.useTransition = function () {
      return ge.current.useTransition();
    }),
    (je.version = '18.3.1'),
    je
  );
}
var Yf;
function Ha() {
  return (Yf || ((Yf = 1), (sa.exports = $m())), sa.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gf;
function Wm() {
  if (Gf) return Ri;
  Gf = 1;
  var n = Ha(),
    i = Symbol.for('react.element'),
    l = Symbol.for('react.fragment'),
    s = Object.prototype.hasOwnProperty,
    u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, h, m) {
    var g,
      v = {},
      x = null,
      k = null;
    (m !== void 0 && (x = '' + m),
      h.key !== void 0 && (x = '' + h.key),
      h.ref !== void 0 && (k = h.ref));
    for (g in h) s.call(h, g) && !c.hasOwnProperty(g) && (v[g] = h[g]);
    if (p && p.defaultProps) for (g in ((h = p.defaultProps), h)) v[g] === void 0 && (v[g] = h[g]);
    return { $$typeof: i, type: p, key: x, ref: k, props: v, _owner: u.current };
  }
  return ((Ri.Fragment = l), (Ri.jsx = f), (Ri.jsxs = f), Ri);
}
var Kf;
function Qm() {
  return (Kf || ((Kf = 1), (oa.exports = Wm())), oa.exports);
}
var w = Qm(),
  G = Ha(),
  lo = {},
  aa = { exports: {} },
  bt = {},
  ua = { exports: {} },
  ca = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xf;
function qm() {
  return (
    Xf ||
      ((Xf = 1),
      (function (n) {
        function i($, Z) {
          var S = $.length;
          $.push(Z);
          e: for (; 0 < S; ) {
            var I = (S - 1) >>> 1,
              D = $[I];
            if (0 < u(D, Z)) (($[I] = Z), ($[S] = D), (S = I));
            else break e;
          }
        }
        function l($) {
          return $.length === 0 ? null : $[0];
        }
        function s($) {
          if ($.length === 0) return null;
          var Z = $[0],
            S = $.pop();
          if (S !== Z) {
            $[0] = S;
            e: for (var I = 0, D = $.length, C = D >>> 1; I < C; ) {
              var fe = 2 * (I + 1) - 1,
                le = $[fe],
                ue = fe + 1,
                Ie = $[ue];
              if (0 > u(le, S))
                ue < D && 0 > u(Ie, le)
                  ? (($[I] = Ie), ($[ue] = S), (I = ue))
                  : (($[I] = le), ($[fe] = S), (I = fe));
              else if (ue < D && 0 > u(Ie, S)) (($[I] = Ie), ($[ue] = S), (I = ue));
              else break e;
            }
          }
          return Z;
        }
        function u($, Z) {
          var S = $.sortIndex - Z.sortIndex;
          return S !== 0 ? S : $.id - Z.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var c = performance;
          n.unstable_now = function () {
            return c.now();
          };
        } else {
          var f = Date,
            p = f.now();
          n.unstable_now = function () {
            return f.now() - p;
          };
        }
        var h = [],
          m = [],
          g = 1,
          v = null,
          x = 3,
          k = !1,
          O = !1,
          j = !1,
          L = typeof setTimeout == 'function' ? setTimeout : null,
          R = typeof clearTimeout == 'function' ? clearTimeout : null,
          M = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function F($) {
          for (var Z = l(m); Z !== null; ) {
            if (Z.callback === null) s(m);
            else if (Z.startTime <= $) (s(m), (Z.sortIndex = Z.expirationTime), i(h, Z));
            else break;
            Z = l(m);
          }
        }
        function V($) {
          if (((j = !1), F($), !O))
            if (l(h) !== null) ((O = !0), me(ae));
            else {
              var Z = l(m);
              Z !== null && ge(V, Z.startTime - $);
            }
        }
        function ae($, Z) {
          ((O = !1), j && ((j = !1), R(ve), (ve = -1)), (k = !0));
          var S = x;
          try {
            for (F(Z), v = l(h); v !== null && (!(v.expirationTime > Z) || ($ && !re())); ) {
              var I = v.callback;
              if (typeof I == 'function') {
                ((v.callback = null), (x = v.priorityLevel));
                var D = I(v.expirationTime <= Z);
                ((Z = n.unstable_now()),
                  typeof D == 'function' ? (v.callback = D) : v === l(h) && s(h),
                  F(Z));
              } else s(h);
              v = l(h);
            }
            if (v !== null) var C = !0;
            else {
              var fe = l(m);
              (fe !== null && ge(V, fe.startTime - Z), (C = !1));
            }
            return C;
          } finally {
            ((v = null), (x = S), (k = !1));
          }
        }
        var z = !1,
          J = null,
          ve = -1,
          Se = 5,
          Ce = -1;
        function re() {
          return !(n.unstable_now() - Ce < Se);
        }
        function X() {
          if (J !== null) {
            var $ = n.unstable_now();
            Ce = $;
            var Z = !0;
            try {
              Z = J(!0, $);
            } finally {
              Z ? ke() : ((z = !1), (J = null));
            }
          } else z = !1;
        }
        var ke;
        if (typeof M == 'function')
          ke = function () {
            M(X);
          };
        else if (typeof MessageChannel < 'u') {
          var te = new MessageChannel(),
            q = te.port2;
          ((te.port1.onmessage = X),
            (ke = function () {
              q.postMessage(null);
            }));
        } else
          ke = function () {
            L(X, 0);
          };
        function me($) {
          ((J = $), z || ((z = !0), ke()));
        }
        function ge($, Z) {
          ve = L(function () {
            $(n.unstable_now());
          }, Z);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function ($) {
            $.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            O || k || ((O = !0), me(ae));
          }),
          (n.unstable_forceFrameRate = function ($) {
            0 > $ || 125 < $
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Se = 0 < $ ? Math.floor(1e3 / $) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return l(h);
          }),
          (n.unstable_next = function ($) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var Z = 3;
                break;
              default:
                Z = x;
            }
            var S = x;
            x = Z;
            try {
              return $();
            } finally {
              x = S;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function ($, Z) {
            switch ($) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                $ = 3;
            }
            var S = x;
            x = $;
            try {
              return Z();
            } finally {
              x = S;
            }
          }),
          (n.unstable_scheduleCallback = function ($, Z, S) {
            var I = n.unstable_now();
            switch (
              (typeof S == 'object' && S !== null
                ? ((S = S.delay), (S = typeof S == 'number' && 0 < S ? I + S : I))
                : (S = I),
              $)
            ) {
              case 1:
                var D = -1;
                break;
              case 2:
                D = 250;
                break;
              case 5:
                D = 1073741823;
                break;
              case 4:
                D = 1e4;
                break;
              default:
                D = 5e3;
            }
            return (
              (D = S + D),
              ($ = {
                id: g++,
                callback: Z,
                priorityLevel: $,
                startTime: S,
                expirationTime: D,
                sortIndex: -1,
              }),
              S > I
                ? (($.sortIndex = S),
                  i(m, $),
                  l(h) === null && $ === l(m) && (j ? (R(ve), (ve = -1)) : (j = !0), ge(V, S - I)))
                : (($.sortIndex = D), i(h, $), O || k || ((O = !0), me(ae))),
              $
            );
          }),
          (n.unstable_shouldYield = re),
          (n.unstable_wrapCallback = function ($) {
            var Z = x;
            return function () {
              var S = x;
              x = Z;
              try {
                return $.apply(this, arguments);
              } finally {
                x = S;
              }
            };
          }));
      })(ca)),
    ca
  );
}
var Zf;
function Ym() {
  return (Zf || ((Zf = 1), (ua.exports = qm())), ua.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jf;
function Gm() {
  if (Jf) return bt;
  Jf = 1;
  var n = Ha(),
    i = Ym();
  function l(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1;
      r < arguments.length;
      r++
    )
      t += '&args[]=' + encodeURIComponent(arguments[r]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var s = new Set(),
    u = {};
  function c(e, t) {
    (f(e, t), f(e + 'Capture', t));
  }
  function f(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var p = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    h = Object.prototype.hasOwnProperty,
    m =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    v = {};
  function x(e) {
    return h.call(v, e) ? !0 : h.call(g, e) ? !1 : m.test(e) ? (v[e] = !0) : ((g[e] = !0), !1);
  }
  function k(e, t, r, o) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return o
          ? !1
          : r !== null
            ? !r.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function O(e, t, r, o) {
    if (t === null || typeof t > 'u' || k(e, t, r, o)) return !0;
    if (o) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function j(e, t, r, o, a, d, y) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = a),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = d),
      (this.removeEmptyString = y));
  }
  var L = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      L[e] = new j(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      L[t] = new j(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      L[e] = new j(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        L[e] = new j(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        L[e] = new j(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      L[e] = new j(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      L[e] = new j(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      L[e] = new j(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      L[e] = new j(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var R = /[\-:]([a-z])/g;
  function M(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(R, M);
      L[t] = new j(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(R, M);
        L[t] = new j(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(R, M);
      L[t] = new j(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      L[e] = new j(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (L.xlinkHref = new j('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      L[e] = new j(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function F(e, t, r, o) {
    var a = L.hasOwnProperty(t) ? L[t] : null;
    (a !== null
      ? a.type !== 0
      : o || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (O(t, r, a, o) && (r = null),
      o || a === null
        ? x(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
        : a.mustUseProperty
          ? (e[a.propertyName] = r === null ? (a.type === 3 ? !1 : '') : r)
          : ((t = a.attributeName),
            (o = a.attributeNamespace),
            r === null
              ? e.removeAttribute(t)
              : ((a = a.type),
                (r = a === 3 || (a === 4 && r === !0) ? '' : '' + r),
                o ? e.setAttributeNS(o, t, r) : e.setAttribute(t, r))));
  }
  var V = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ae = Symbol.for('react.element'),
    z = Symbol.for('react.portal'),
    J = Symbol.for('react.fragment'),
    ve = Symbol.for('react.strict_mode'),
    Se = Symbol.for('react.profiler'),
    Ce = Symbol.for('react.provider'),
    re = Symbol.for('react.context'),
    X = Symbol.for('react.forward_ref'),
    ke = Symbol.for('react.suspense'),
    te = Symbol.for('react.suspense_list'),
    q = Symbol.for('react.memo'),
    me = Symbol.for('react.lazy'),
    ge = Symbol.for('react.offscreen'),
    $ = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = ($ && e[$]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var S = Object.assign,
    I;
  function D(e) {
    if (I === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        I = (t && t[1]) || '';
      }
    return (
      `
` +
      I +
      e
    );
  }
  var C = !1;
  function fe(e, t) {
    if (!e || C) return '';
    C = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (P) {
            var o = P;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (P) {
            o = P;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (P) {
          o = P;
        }
        e();
      }
    } catch (P) {
      if (P && o && typeof P.stack == 'string') {
        for (
          var a = P.stack.split(`
`),
            d = o.stack.split(`
`),
            y = a.length - 1,
            _ = d.length - 1;
          1 <= y && 0 <= _ && a[y] !== d[_];
        )
          _--;
        for (; 1 <= y && 0 <= _; y--, _--)
          if (a[y] !== d[_]) {
            if (y !== 1 || _ !== 1)
              do
                if ((y--, _--, 0 > _ || a[y] !== d[_])) {
                  var E =
                    `
` + a[y].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      E.includes('<anonymous>') &&
                      (E = E.replace('<anonymous>', e.displayName)),
                    E
                  );
                }
              while (1 <= y && 0 <= _);
            break;
          }
      }
    } finally {
      ((C = !1), (Error.prepareStackTrace = r));
    }
    return (e = e ? e.displayName || e.name : '') ? D(e) : '';
  }
  function le(e) {
    switch (e.tag) {
      case 5:
        return D(e.type);
      case 16:
        return D('Lazy');
      case 13:
        return D('Suspense');
      case 19:
        return D('SuspenseList');
      case 0:
      case 2:
      case 15:
        return ((e = fe(e.type, !1)), e);
      case 11:
        return ((e = fe(e.type.render, !1)), e);
      case 1:
        return ((e = fe(e.type, !0)), e);
      default:
        return '';
    }
  }
  function ue(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case J:
        return 'Fragment';
      case z:
        return 'Portal';
      case Se:
        return 'Profiler';
      case ve:
        return 'StrictMode';
      case ke:
        return 'Suspense';
      case te:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case re:
          return (e.displayName || 'Context') + '.Consumer';
        case Ce:
          return (e._context.displayName || 'Context') + '.Provider';
        case X:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case q:
          return ((t = e.displayName || null), t !== null ? t : ue(e.type) || 'Memo');
        case me:
          ((t = e._payload), (e = e._init));
          try {
            return ue(e(t));
          } catch {}
      }
    return null;
  }
  function Ie(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (t.displayName || 'Context') + '.Consumer';
      case 10:
        return (t._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return t;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return ue(t);
      case 8:
        return t === ve ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null;
        if (typeof t == 'string') return t;
    }
    return null;
  }
  function _e(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function Le(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function ce(e) {
    var t = Le(e) ? 'checked' : 'value',
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      o = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < 'u' &&
      typeof r.get == 'function' &&
      typeof r.set == 'function'
    ) {
      var a = r.get,
        d = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (y) {
            ((o = '' + y), d.call(this, y));
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (y) {
            o = '' + y;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Ee(e) {
    e._valueTracker || (e._valueTracker = ce(e));
  }
  function K(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      o = '';
    return (
      e && (o = Le(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = o),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function de(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function tt(e, t) {
    var r = t.checked;
    return S({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function nt(e, t) {
    var r = t.defaultValue == null ? '' : t.defaultValue,
      o = t.checked != null ? t.checked : t.defaultChecked;
    ((r = _e(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: o,
        initialValue: r,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      }));
  }
  function rn(e, t) {
    ((t = t.checked), t != null && F(e, 'checked', t, !1));
  }
  function Bt(e, t) {
    rn(e, t);
    var r = _e(t.value),
      o = t.type;
    if (r != null)
      o === 'number'
        ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
        : e.value !== '' + r && (e.value = '' + r);
    else if (o === 'submit' || o === 'reset') {
      e.removeAttribute('value');
      return;
    }
    (t.hasOwnProperty('value')
      ? yr(e, t.type, r)
      : t.hasOwnProperty('defaultValue') && yr(e, t.type, _e(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Jn(e, t, r) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var o = t.type;
      if (!((o !== 'submit' && o !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
      ((t = '' + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((r = e.name),
      r !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== '' && (e.name = r));
  }
  function yr(e, t, r) {
    (t !== 'number' || de(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
  }
  var In = Array.isArray;
  function Tn(e, t, r, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < r.length; a++) t['$' + r[a]] = !0;
      for (r = 0; r < e.length; r++)
        ((a = t.hasOwnProperty('$' + e[r].value)),
          e[r].selected !== a && (e[r].selected = a),
          a && o && (e[r].defaultSelected = !0));
    } else {
      for (r = '' + _e(r), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === r) {
          ((e[a].selected = !0), o && (e[a].defaultSelected = !0));
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Zr(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return S({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Gi(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(l(92));
        if (In(r)) {
          if (1 < r.length) throw Error(l(93));
          r = r[0];
        }
        t = r;
      }
      (t == null && (t = ''), (r = t));
    }
    e._wrapperState = { initialValue: _e(r) };
  }
  function Ki(e, t) {
    var r = _e(t.value),
      o = _e(t.defaultValue);
    (r != null &&
      ((r = '' + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      o != null && (e.defaultValue = '' + o));
  }
  function Xi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function A(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Y(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? A(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var ye,
    be = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, r, o, a) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, o, a);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
      else {
        for (
          ye = ye || document.createElement('div'),
            ye.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = ye.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Oe(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ft = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    hn = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(ft).forEach(function (e) {
    hn.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ft[t] = ft[e]));
    });
  });
  function Ut(e, t, r) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : r || typeof t != 'number' || t === 0 || (ft.hasOwnProperty(e) && ft[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function bn(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = r.indexOf('--') === 0,
          a = Ut(r, t[r], o);
        (r === 'float' && (r = 'cssFloat'), o ? e.setProperty(r, a) : (e[r] = a));
      }
  }
  var er = S(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function dt(e, t) {
    if (t) {
      if (er[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(l(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(l(62));
    }
  }
  function ln(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Ot = null;
  function xo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var So = null,
    vr = null,
    kr = null;
  function uu(e) {
    if ((e = wi(e))) {
      if (typeof So != 'function') throw Error(l(280));
      var t = e.stateNode;
      t && ((t = wl(t)), So(e.stateNode, e.type, t));
    }
  }
  function cu(e) {
    vr ? (kr ? kr.push(e) : (kr = [e])) : (vr = e);
  }
  function fu() {
    if (vr) {
      var e = vr,
        t = kr;
      if (((kr = vr = null), uu(e), t)) for (e = 0; e < t.length; e++) uu(t[e]);
    }
  }
  function du(e, t) {
    return e(t);
  }
  function pu() {}
  var _o = !1;
  function hu(e, t, r) {
    if (_o) return e(t, r);
    _o = !0;
    try {
      return du(e, t, r);
    } finally {
      ((_o = !1), (vr !== null || kr !== null) && (pu(), fu()));
    }
  }
  function Jr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var o = wl(r);
    if (o === null) return null;
    r = o[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((o = !o.disabled) ||
          ((e = e.type),
          (o = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !o));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != 'function') throw Error(l(231, t, typeof r));
    return r;
  }
  var Co = !1;
  if (p)
    try {
      var ei = {};
      (Object.defineProperty(ei, 'passive', {
        get: function () {
          Co = !0;
        },
      }),
        window.addEventListener('test', ei, ei),
        window.removeEventListener('test', ei, ei));
    } catch {
      Co = !1;
    }
  function Kp(e, t, r, o, a, d, y, _, E) {
    var P = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, P);
    } catch (U) {
      this.onError(U);
    }
  }
  var ti = !1,
    Zi = null,
    Ji = !1,
    Eo = null,
    Xp = {
      onError: function (e) {
        ((ti = !0), (Zi = e));
      },
    };
  function Zp(e, t, r, o, a, d, y, _, E) {
    ((ti = !1), (Zi = null), Kp.apply(Xp, arguments));
  }
  function Jp(e, t, r, o, a, d, y, _, E) {
    if ((Zp.apply(this, arguments), ti)) {
      if (ti) {
        var P = Zi;
        ((ti = !1), (Zi = null));
      } else throw Error(l(198));
      Ji || ((Ji = !0), (Eo = P));
    }
  }
  function tr(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function mu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function gu(e) {
    if (tr(e) !== e) throw Error(l(188));
  }
  function eh(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = tr(e)), t === null)) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var r = e, o = t; ; ) {
      var a = r.return;
      if (a === null) break;
      var d = a.alternate;
      if (d === null) {
        if (((o = a.return), o !== null)) {
          r = o;
          continue;
        }
        break;
      }
      if (a.child === d.child) {
        for (d = a.child; d; ) {
          if (d === r) return (gu(a), e);
          if (d === o) return (gu(a), t);
          d = d.sibling;
        }
        throw Error(l(188));
      }
      if (r.return !== o.return) ((r = a), (o = d));
      else {
        for (var y = !1, _ = a.child; _; ) {
          if (_ === r) {
            ((y = !0), (r = a), (o = d));
            break;
          }
          if (_ === o) {
            ((y = !0), (o = a), (r = d));
            break;
          }
          _ = _.sibling;
        }
        if (!y) {
          for (_ = d.child; _; ) {
            if (_ === r) {
              ((y = !0), (r = d), (o = a));
              break;
            }
            if (_ === o) {
              ((y = !0), (o = d), (r = a));
              break;
            }
            _ = _.sibling;
          }
          if (!y) throw Error(l(189));
        }
      }
      if (r.alternate !== o) throw Error(l(190));
    }
    if (r.tag !== 3) throw Error(l(188));
    return r.stateNode.current === r ? e : t;
  }
  function yu(e) {
    return ((e = eh(e)), e !== null ? vu(e) : null);
  }
  function vu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = vu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ku = i.unstable_scheduleCallback,
    wu = i.unstable_cancelCallback,
    th = i.unstable_shouldYield,
    nh = i.unstable_requestPaint,
    Ke = i.unstable_now,
    rh = i.unstable_getCurrentPriorityLevel,
    No = i.unstable_ImmediatePriority,
    xu = i.unstable_UserBlockingPriority,
    el = i.unstable_NormalPriority,
    ih = i.unstable_LowPriority,
    Su = i.unstable_IdlePriority,
    tl = null,
    on = null;
  function lh(e) {
    if (on && typeof on.onCommitFiberRoot == 'function')
      try {
        on.onCommitFiberRoot(tl, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Kt = Math.clz32 ? Math.clz32 : ah,
    oh = Math.log,
    sh = Math.LN2;
  function ah(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((oh(e) / sh) | 0)) | 0);
  }
  var nl = 64,
    rl = 4194304;
  function ni(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function il(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var o = 0,
      a = e.suspendedLanes,
      d = e.pingedLanes,
      y = r & 268435455;
    if (y !== 0) {
      var _ = y & ~a;
      _ !== 0 ? (o = ni(_)) : ((d &= y), d !== 0 && (o = ni(d)));
    } else ((y = r & ~a), y !== 0 ? (o = ni(y)) : d !== 0 && (o = ni(d)));
    if (o === 0) return 0;
    if (
      t !== 0 &&
      t !== o &&
      (t & a) === 0 &&
      ((a = o & -o), (d = t & -t), a >= d || (a === 16 && (d & 4194240) !== 0))
    )
      return t;
    if (((o & 4) !== 0 && (o |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= o; 0 < t; )
        ((r = 31 - Kt(t)), (a = 1 << r), (o |= e[r]), (t &= ~a));
    return o;
  }
  function uh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ch(e, t) {
    for (
      var r = e.suspendedLanes, o = e.pingedLanes, a = e.expirationTimes, d = e.pendingLanes;
      0 < d;
    ) {
      var y = 31 - Kt(d),
        _ = 1 << y,
        E = a[y];
      (E === -1
        ? ((_ & r) === 0 || (_ & o) !== 0) && (a[y] = uh(_, t))
        : E <= t && (e.expiredLanes |= _),
        (d &= ~_));
    }
  }
  function Io(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function _u() {
    var e = nl;
    return ((nl <<= 1), (nl & 4194240) === 0 && (nl = 64), e);
  }
  function To(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function ri(e, t, r) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Kt(t)),
      (e[t] = r));
  }
  function fh(e, t) {
    var r = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var a = 31 - Kt(r),
        d = 1 << a;
      ((t[a] = 0), (o[a] = -1), (e[a] = -1), (r &= ~d));
    }
  }
  function bo(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var o = 31 - Kt(r),
        a = 1 << o;
      ((a & t) | (e[o] & t) && (e[o] |= t), (r &= ~a));
    }
  }
  var Ae = 0;
  function Cu(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Eu,
    jo,
    Nu,
    Iu,
    Tu,
    Lo = !1,
    ll = [],
    jn = null,
    Ln = null,
    Pn = null,
    ii = new Map(),
    li = new Map(),
    On = [],
    dh =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function bu(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        jn = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Ln = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Pn = null;
        break;
      case 'pointerover':
      case 'pointerout':
        ii.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        li.delete(t.pointerId);
    }
  }
  function oi(e, t, r, o, a, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: o,
          nativeEvent: d,
          targetContainers: [a],
        }),
        t !== null && ((t = wi(t)), t !== null && jo(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function ph(e, t, r, o, a) {
    switch (t) {
      case 'focusin':
        return ((jn = oi(jn, e, t, r, o, a)), !0);
      case 'dragenter':
        return ((Ln = oi(Ln, e, t, r, o, a)), !0);
      case 'mouseover':
        return ((Pn = oi(Pn, e, t, r, o, a)), !0);
      case 'pointerover':
        var d = a.pointerId;
        return (ii.set(d, oi(ii.get(d) || null, e, t, r, o, a)), !0);
      case 'gotpointercapture':
        return ((d = a.pointerId), li.set(d, oi(li.get(d) || null, e, t, r, o, a)), !0);
    }
    return !1;
  }
  function ju(e) {
    var t = nr(e.target);
    if (t !== null) {
      var r = tr(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = mu(r)), t !== null)) {
            ((e.blockedOn = t),
              Tu(e.priority, function () {
                Nu(r);
              }));
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ol(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Oo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        ((Ot = o), r.target.dispatchEvent(o), (Ot = null));
      } else return ((t = wi(r)), t !== null && jo(t), (e.blockedOn = r), !1);
      t.shift();
    }
    return !0;
  }
  function Lu(e, t, r) {
    ol(e) && r.delete(t);
  }
  function hh() {
    ((Lo = !1),
      jn !== null && ol(jn) && (jn = null),
      Ln !== null && ol(Ln) && (Ln = null),
      Pn !== null && ol(Pn) && (Pn = null),
      ii.forEach(Lu),
      li.forEach(Lu));
  }
  function si(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Lo || ((Lo = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, hh)));
  }
  function ai(e) {
    function t(a) {
      return si(a, e);
    }
    if (0 < ll.length) {
      si(ll[0], e);
      for (var r = 1; r < ll.length; r++) {
        var o = ll[r];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      jn !== null && si(jn, e),
        Ln !== null && si(Ln, e),
        Pn !== null && si(Pn, e),
        ii.forEach(t),
        li.forEach(t),
        r = 0;
      r < On.length;
      r++
    )
      ((o = On[r]), o.blockedOn === e && (o.blockedOn = null));
    for (; 0 < On.length && ((r = On[0]), r.blockedOn === null); )
      (ju(r), r.blockedOn === null && On.shift());
  }
  var wr = V.ReactCurrentBatchConfig,
    sl = !0;
  function mh(e, t, r, o) {
    var a = Ae,
      d = wr.transition;
    wr.transition = null;
    try {
      ((Ae = 1), Po(e, t, r, o));
    } finally {
      ((Ae = a), (wr.transition = d));
    }
  }
  function gh(e, t, r, o) {
    var a = Ae,
      d = wr.transition;
    wr.transition = null;
    try {
      ((Ae = 4), Po(e, t, r, o));
    } finally {
      ((Ae = a), (wr.transition = d));
    }
  }
  function Po(e, t, r, o) {
    if (sl) {
      var a = Oo(e, t, r, o);
      if (a === null) (Ko(e, t, o, al, r), bu(e, o));
      else if (ph(a, e, t, r, o)) o.stopPropagation();
      else if ((bu(e, o), t & 4 && -1 < dh.indexOf(e))) {
        for (; a !== null; ) {
          var d = wi(a);
          if (
            (d !== null && Eu(d), (d = Oo(e, t, r, o)), d === null && Ko(e, t, o, al, r), d === a)
          )
            break;
          a = d;
        }
        a !== null && o.stopPropagation();
      } else Ko(e, t, o, null, r);
    }
  }
  var al = null;
  function Oo(e, t, r, o) {
    if (((al = null), (e = xo(o)), (e = nr(e)), e !== null))
      if (((t = tr(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = mu(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((al = e), null);
  }
  function Pu(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (rh()) {
          case No:
            return 1;
          case xu:
            return 4;
          case el:
          case ih:
            return 16;
          case Su:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var zn = null,
    zo = null,
    ul = null;
  function Ou() {
    if (ul) return ul;
    var e,
      t = zo,
      r = t.length,
      o,
      a = 'value' in zn ? zn.value : zn.textContent,
      d = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++);
    var y = r - e;
    for (o = 1; o <= y && t[r - o] === a[d - o]; o++);
    return (ul = a.slice(e, 1 < o ? 1 - o : void 0));
  }
  function cl(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function fl() {
    return !0;
  }
  function zu() {
    return !1;
  }
  function zt(e) {
    function t(r, o, a, d, y) {
      ((this._reactName = r),
        (this._targetInst = a),
        (this.type = o),
        (this.nativeEvent = d),
        (this.target = y),
        (this.currentTarget = null));
      for (var _ in e) e.hasOwnProperty(_) && ((r = e[_]), (this[_] = r ? r(d) : d[_]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? fl
          : zu),
        (this.isPropagationStopped = zu),
        this
      );
    }
    return (
      S(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
            (this.isDefaultPrevented = fl));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
            (this.isPropagationStopped = fl));
        },
        persist: function () {},
        isPersistent: fl,
      }),
      t
    );
  }
  var xr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ro = zt(xr),
    ui = S({}, xr, { view: 0, detail: 0 }),
    yh = zt(ui),
    Mo,
    Ao,
    ci,
    dl = S({}, ui, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Fo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== ci &&
              (ci && e.type === 'mousemove'
                ? ((Mo = e.screenX - ci.screenX), (Ao = e.screenY - ci.screenY))
                : (Ao = Mo = 0),
              (ci = e)),
            Mo);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Ao;
      },
    }),
    Ru = zt(dl),
    vh = S({}, dl, { dataTransfer: 0 }),
    kh = zt(vh),
    wh = S({}, ui, { relatedTarget: 0 }),
    Do = zt(wh),
    xh = S({}, xr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sh = zt(xh),
    _h = S({}, xr, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ch = zt(_h),
    Eh = S({}, xr, { data: 0 }),
    Mu = zt(Eh),
    Nh = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    Ih = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Th = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function bh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Th[e]) ? !!t[e] : !1;
  }
  function Fo() {
    return bh;
  }
  var jh = S({}, ui, {
      key: function (e) {
        if (e.key) {
          var t = Nh[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = cl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Ih[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Fo,
      charCode: function (e) {
        return e.type === 'keypress' ? cl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? cl(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Lh = zt(jh),
    Ph = S({}, dl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Au = zt(Ph),
    Oh = S({}, ui, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fo,
    }),
    zh = zt(Oh),
    Rh = S({}, xr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Mh = zt(Rh),
    Ah = S({}, dl, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Dh = zt(Ah),
    Fh = [9, 13, 27, 32],
    Bo = p && 'CompositionEvent' in window,
    fi = null;
  p && 'documentMode' in document && (fi = document.documentMode);
  var Bh = p && 'TextEvent' in window && !fi,
    Du = p && (!Bo || (fi && 8 < fi && 11 >= fi)),
    Fu = ' ',
    Bu = !1;
  function Uu(e, t) {
    switch (e) {
      case 'keyup':
        return Fh.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Vu(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var Sr = !1;
  function Uh(e, t) {
    switch (e) {
      case 'compositionend':
        return Vu(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Bu = !0), Fu);
      case 'textInput':
        return ((e = t.data), e === Fu && Bu ? null : e);
      default:
        return null;
    }
  }
  function Vh(e, t) {
    if (Sr)
      return e === 'compositionend' || (!Bo && Uu(e, t))
        ? ((e = Ou()), (ul = zo = zn = null), (Sr = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Du && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Hh = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Hu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Hh[e.type] : t === 'textarea';
  }
  function $u(e, t, r, o) {
    (cu(o),
      (t = yl(t, 'onChange')),
      0 < t.length &&
        ((r = new Ro('onChange', 'change', null, r, o)), e.push({ event: r, listeners: t })));
  }
  var di = null,
    pi = null;
  function $h(e) {
    ac(e, 0);
  }
  function pl(e) {
    var t = Ir(e);
    if (K(t)) return e;
  }
  function Wh(e, t) {
    if (e === 'change') return t;
  }
  var Wu = !1;
  if (p) {
    var Uo;
    if (p) {
      var Vo = 'oninput' in document;
      if (!Vo) {
        var Qu = document.createElement('div');
        (Qu.setAttribute('oninput', 'return;'), (Vo = typeof Qu.oninput == 'function'));
      }
      Uo = Vo;
    } else Uo = !1;
    Wu = Uo && (!document.documentMode || 9 < document.documentMode);
  }
  function qu() {
    di && (di.detachEvent('onpropertychange', Yu), (pi = di = null));
  }
  function Yu(e) {
    if (e.propertyName === 'value' && pl(pi)) {
      var t = [];
      ($u(t, pi, e, xo(e)), hu($h, t));
    }
  }
  function Qh(e, t, r) {
    e === 'focusin'
      ? (qu(), (di = t), (pi = r), di.attachEvent('onpropertychange', Yu))
      : e === 'focusout' && qu();
  }
  function qh(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return pl(pi);
  }
  function Yh(e, t) {
    if (e === 'click') return pl(t);
  }
  function Gh(e, t) {
    if (e === 'input' || e === 'change') return pl(t);
  }
  function Kh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Xt = typeof Object.is == 'function' ? Object.is : Kh;
  function hi(e, t) {
    if (Xt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var r = Object.keys(e),
      o = Object.keys(t);
    if (r.length !== o.length) return !1;
    for (o = 0; o < r.length; o++) {
      var a = r[o];
      if (!h.call(t, a) || !Xt(e[a], t[a])) return !1;
    }
    return !0;
  }
  function Gu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ku(e, t) {
    var r = Gu(e);
    e = 0;
    for (var o; r; ) {
      if (r.nodeType === 3) {
        if (((o = e + r.textContent.length), e <= t && o >= t)) return { node: r, offset: t - e };
        e = o;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Gu(r);
    }
  }
  function Xu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Xu(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Zu() {
    for (var e = window, t = de(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == 'string';
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = de(e.document);
    }
    return t;
  }
  function Ho(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function Xh(e) {
    var t = Zu(),
      r = e.focusedElem,
      o = e.selectionRange;
    if (t !== r && r && r.ownerDocument && Xu(r.ownerDocument.documentElement, r)) {
      if (o !== null && Ho(r)) {
        if (((t = o.start), (e = o.end), e === void 0 && (e = t), 'selectionStart' in r))
          ((r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length)));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var a = r.textContent.length,
            d = Math.min(o.start, a);
          ((o = o.end === void 0 ? d : Math.min(o.end, a)),
            !e.extend && d > o && ((a = o), (o = d), (d = a)),
            (a = Ku(r, d)));
          var y = Ku(r, o);
          a &&
            y &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== y.node ||
              e.focusOffset !== y.offset) &&
            ((t = t.createRange()),
            t.setStart(a.node, a.offset),
            e.removeAllRanges(),
            d > o
              ? (e.addRange(t), e.extend(y.node, y.offset))
              : (t.setEnd(y.node, y.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
        ((e = t[r]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var Zh = p && 'documentMode' in document && 11 >= document.documentMode,
    _r = null,
    $o = null,
    mi = null,
    Wo = !1;
  function Ju(e, t, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Wo ||
      _r == null ||
      _r !== de(o) ||
      ((o = _r),
      'selectionStart' in o && Ho(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (mi && hi(mi, o)) ||
        ((mi = o),
        (o = yl($o, 'onSelect')),
        0 < o.length &&
          ((t = new Ro('onSelect', 'select', null, t, r)),
          e.push({ event: t, listeners: o }),
          (t.target = _r))));
  }
  function hl(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r['Webkit' + e] = 'webkit' + t),
      (r['Moz' + e] = 'moz' + t),
      r
    );
  }
  var Cr = {
      animationend: hl('Animation', 'AnimationEnd'),
      animationiteration: hl('Animation', 'AnimationIteration'),
      animationstart: hl('Animation', 'AnimationStart'),
      transitionend: hl('Transition', 'TransitionEnd'),
    },
    Qo = {},
    ec = {};
  p &&
    ((ec = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Cr.animationend.animation,
      delete Cr.animationiteration.animation,
      delete Cr.animationstart.animation),
    'TransitionEvent' in window || delete Cr.transitionend.transition);
  function ml(e) {
    if (Qo[e]) return Qo[e];
    if (!Cr[e]) return e;
    var t = Cr[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in ec) return (Qo[e] = t[r]);
    return e;
  }
  var tc = ml('animationend'),
    nc = ml('animationiteration'),
    rc = ml('animationstart'),
    ic = ml('transitionend'),
    lc = new Map(),
    oc =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Rn(e, t) {
    (lc.set(e, t), c(t, [e]));
  }
  for (var qo = 0; qo < oc.length; qo++) {
    var Yo = oc[qo],
      Jh = Yo.toLowerCase(),
      em = Yo[0].toUpperCase() + Yo.slice(1);
    Rn(Jh, 'on' + em);
  }
  (Rn(tc, 'onAnimationEnd'),
    Rn(nc, 'onAnimationIteration'),
    Rn(rc, 'onAnimationStart'),
    Rn('dblclick', 'onDoubleClick'),
    Rn('focusin', 'onFocus'),
    Rn('focusout', 'onBlur'),
    Rn(ic, 'onTransitionEnd'),
    f('onMouseEnter', ['mouseout', 'mouseover']),
    f('onMouseLeave', ['mouseout', 'mouseover']),
    f('onPointerEnter', ['pointerout', 'pointerover']),
    f('onPointerLeave', ['pointerout', 'pointerover']),
    c('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    c(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    c('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    c('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    c(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    c(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var gi =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    tm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(gi));
  function sc(e, t, r) {
    var o = e.type || 'unknown-event';
    ((e.currentTarget = r), Jp(o, t, void 0, e), (e.currentTarget = null));
  }
  function ac(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var o = e[r],
        a = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var y = o.length - 1; 0 <= y; y--) {
            var _ = o[y],
              E = _.instance,
              P = _.currentTarget;
            if (((_ = _.listener), E !== d && a.isPropagationStopped())) break e;
            (sc(a, _, P), (d = E));
          }
        else
          for (y = 0; y < o.length; y++) {
            if (
              ((_ = o[y]),
              (E = _.instance),
              (P = _.currentTarget),
              (_ = _.listener),
              E !== d && a.isPropagationStopped())
            )
              break e;
            (sc(a, _, P), (d = E));
          }
      }
    }
    if (Ji) throw ((e = Eo), (Ji = !1), (Eo = null), e);
  }
  function Ve(e, t) {
    var r = t[ns];
    r === void 0 && (r = t[ns] = new Set());
    var o = e + '__bubble';
    r.has(o) || (uc(t, e, 2, !1), r.add(o));
  }
  function Go(e, t, r) {
    var o = 0;
    (t && (o |= 4), uc(r, e, o, t));
  }
  var gl = '_reactListening' + Math.random().toString(36).slice(2);
  function yi(e) {
    if (!e[gl]) {
      ((e[gl] = !0),
        s.forEach(function (r) {
          r !== 'selectionchange' && (tm.has(r) || Go(r, !1, e), Go(r, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[gl] || ((t[gl] = !0), Go('selectionchange', !1, t));
    }
  }
  function uc(e, t, r, o) {
    switch (Pu(t)) {
      case 1:
        var a = mh;
        break;
      case 4:
        a = gh;
        break;
      default:
        a = Po;
    }
    ((r = a.bind(null, t, r, e)),
      (a = void 0),
      !Co || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (a = !0),
      o
        ? a !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: a })
          : e.addEventListener(t, r, !0)
        : a !== void 0
          ? e.addEventListener(t, r, { passive: a })
          : e.addEventListener(t, r, !1));
  }
  function Ko(e, t, r, o, a) {
    var d = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var y = o.tag;
        if (y === 3 || y === 4) {
          var _ = o.stateNode.containerInfo;
          if (_ === a || (_.nodeType === 8 && _.parentNode === a)) break;
          if (y === 4)
            for (y = o.return; y !== null; ) {
              var E = y.tag;
              if (
                (E === 3 || E === 4) &&
                ((E = y.stateNode.containerInfo),
                E === a || (E.nodeType === 8 && E.parentNode === a))
              )
                return;
              y = y.return;
            }
          for (; _ !== null; ) {
            if (((y = nr(_)), y === null)) return;
            if (((E = y.tag), E === 5 || E === 6)) {
              o = d = y;
              continue e;
            }
            _ = _.parentNode;
          }
        }
        o = o.return;
      }
    hu(function () {
      var P = d,
        U = xo(r),
        H = [];
      e: {
        var B = lc.get(e);
        if (B !== void 0) {
          var ee = Ro,
            ie = e;
          switch (e) {
            case 'keypress':
              if (cl(r) === 0) break e;
            case 'keydown':
            case 'keyup':
              ee = Lh;
              break;
            case 'focusin':
              ((ie = 'focus'), (ee = Do));
              break;
            case 'focusout':
              ((ie = 'blur'), (ee = Do));
              break;
            case 'beforeblur':
            case 'afterblur':
              ee = Do;
              break;
            case 'click':
              if (r.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              ee = Ru;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              ee = kh;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              ee = zh;
              break;
            case tc:
            case nc:
            case rc:
              ee = Sh;
              break;
            case ic:
              ee = Mh;
              break;
            case 'scroll':
              ee = yh;
              break;
            case 'wheel':
              ee = Dh;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              ee = Ch;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              ee = Au;
          }
          var oe = (t & 4) !== 0,
            Xe = !oe && e === 'scroll',
            T = oe ? (B !== null ? B + 'Capture' : null) : B;
          oe = [];
          for (var N = P, b; N !== null; ) {
            b = N;
            var Q = b.stateNode;
            if (
              (b.tag === 5 &&
                Q !== null &&
                ((b = Q), T !== null && ((Q = Jr(N, T)), Q != null && oe.push(vi(N, Q, b)))),
              Xe)
            )
              break;
            N = N.return;
          }
          0 < oe.length && ((B = new ee(B, ie, null, r, U)), H.push({ event: B, listeners: oe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((B = e === 'mouseover' || e === 'pointerover'),
            (ee = e === 'mouseout' || e === 'pointerout'),
            B && r !== Ot && (ie = r.relatedTarget || r.fromElement) && (nr(ie) || ie[mn]))
          )
            break e;
          if (
            (ee || B) &&
            ((B =
              U.window === U
                ? U
                : (B = U.ownerDocument)
                  ? B.defaultView || B.parentWindow
                  : window),
            ee
              ? ((ie = r.relatedTarget || r.toElement),
                (ee = P),
                (ie = ie ? nr(ie) : null),
                ie !== null &&
                  ((Xe = tr(ie)), ie !== Xe || (ie.tag !== 5 && ie.tag !== 6)) &&
                  (ie = null))
              : ((ee = null), (ie = P)),
            ee !== ie)
          ) {
            if (
              ((oe = Ru),
              (Q = 'onMouseLeave'),
              (T = 'onMouseEnter'),
              (N = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((oe = Au), (Q = 'onPointerLeave'), (T = 'onPointerEnter'), (N = 'pointer')),
              (Xe = ee == null ? B : Ir(ee)),
              (b = ie == null ? B : Ir(ie)),
              (B = new oe(Q, N + 'leave', ee, r, U)),
              (B.target = Xe),
              (B.relatedTarget = b),
              (Q = null),
              nr(U) === P &&
                ((oe = new oe(T, N + 'enter', ie, r, U)),
                (oe.target = b),
                (oe.relatedTarget = Xe),
                (Q = oe)),
              (Xe = Q),
              ee && ie)
            )
              t: {
                for (oe = ee, T = ie, N = 0, b = oe; b; b = Er(b)) N++;
                for (b = 0, Q = T; Q; Q = Er(Q)) b++;
                for (; 0 < N - b; ) ((oe = Er(oe)), N--);
                for (; 0 < b - N; ) ((T = Er(T)), b--);
                for (; N--; ) {
                  if (oe === T || (T !== null && oe === T.alternate)) break t;
                  ((oe = Er(oe)), (T = Er(T)));
                }
                oe = null;
              }
            else oe = null;
            (ee !== null && cc(H, B, ee, oe, !1),
              ie !== null && Xe !== null && cc(H, Xe, ie, oe, !0));
          }
        }
        e: {
          if (
            ((B = P ? Ir(P) : window),
            (ee = B.nodeName && B.nodeName.toLowerCase()),
            ee === 'select' || (ee === 'input' && B.type === 'file'))
          )
            var se = Wh;
          else if (Hu(B))
            if (Wu) se = Gh;
            else {
              se = qh;
              var pe = Qh;
            }
          else
            (ee = B.nodeName) &&
              ee.toLowerCase() === 'input' &&
              (B.type === 'checkbox' || B.type === 'radio') &&
              (se = Yh);
          if (se && (se = se(e, P))) {
            $u(H, se, r, U);
            break e;
          }
          (pe && pe(e, B, P),
            e === 'focusout' &&
              (pe = B._wrapperState) &&
              pe.controlled &&
              B.type === 'number' &&
              yr(B, 'number', B.value));
        }
        switch (((pe = P ? Ir(P) : window), e)) {
          case 'focusin':
            (Hu(pe) || pe.contentEditable === 'true') && ((_r = pe), ($o = P), (mi = null));
            break;
          case 'focusout':
            mi = $o = _r = null;
            break;
          case 'mousedown':
            Wo = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Wo = !1), Ju(H, r, U));
            break;
          case 'selectionchange':
            if (Zh) break;
          case 'keydown':
          case 'keyup':
            Ju(H, r, U);
        }
        var he;
        if (Bo)
          e: {
            switch (e) {
              case 'compositionstart':
                var we = 'onCompositionStart';
                break e;
              case 'compositionend':
                we = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                we = 'onCompositionUpdate';
                break e;
            }
            we = void 0;
          }
        else
          Sr
            ? Uu(e, r) && (we = 'onCompositionEnd')
            : e === 'keydown' && r.keyCode === 229 && (we = 'onCompositionStart');
        (we &&
          (Du &&
            r.locale !== 'ko' &&
            (Sr || we !== 'onCompositionStart'
              ? we === 'onCompositionEnd' && Sr && (he = Ou())
              : ((zn = U), (zo = 'value' in zn ? zn.value : zn.textContent), (Sr = !0))),
          (pe = yl(P, we)),
          0 < pe.length &&
            ((we = new Mu(we, e, null, r, U)),
            H.push({ event: we, listeners: pe }),
            he ? (we.data = he) : ((he = Vu(r)), he !== null && (we.data = he)))),
          (he = Bh ? Uh(e, r) : Vh(e, r)) &&
            ((P = yl(P, 'onBeforeInput')),
            0 < P.length &&
              ((U = new Mu('onBeforeInput', 'beforeinput', null, r, U)),
              H.push({ event: U, listeners: P }),
              (U.data = he))));
      }
      ac(H, t);
    });
  }
  function vi(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function yl(e, t) {
    for (var r = t + 'Capture', o = []; e !== null; ) {
      var a = e,
        d = a.stateNode;
      (a.tag === 5 &&
        d !== null &&
        ((a = d),
        (d = Jr(e, r)),
        d != null && o.unshift(vi(e, d, a)),
        (d = Jr(e, t)),
        d != null && o.push(vi(e, d, a))),
        (e = e.return));
    }
    return o;
  }
  function Er(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function cc(e, t, r, o, a) {
    for (var d = t._reactName, y = []; r !== null && r !== o; ) {
      var _ = r,
        E = _.alternate,
        P = _.stateNode;
      if (E !== null && E === o) break;
      (_.tag === 5 &&
        P !== null &&
        ((_ = P),
        a
          ? ((E = Jr(r, d)), E != null && y.unshift(vi(r, E, _)))
          : a || ((E = Jr(r, d)), E != null && y.push(vi(r, E, _)))),
        (r = r.return));
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var nm = /\r\n?/g,
    rm = /\u0000|\uFFFD/g;
  function fc(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        nm,
        `
`
      )
      .replace(rm, '');
  }
  function vl(e, t, r) {
    if (((t = fc(t)), fc(e) !== t && r)) throw Error(l(425));
  }
  function kl() {}
  var Xo = null,
    Zo = null;
  function Jo(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var es = typeof setTimeout == 'function' ? setTimeout : void 0,
    im = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    dc = typeof Promise == 'function' ? Promise : void 0,
    lm =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof dc < 'u'
          ? function (e) {
              return dc.resolve(null).then(e).catch(om);
            }
          : es;
  function om(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ts(e, t) {
    var r = t,
      o = 0;
    do {
      var a = r.nextSibling;
      if ((e.removeChild(r), a && a.nodeType === 8))
        if (((r = a.data), r === '/$')) {
          if (o === 0) {
            (e.removeChild(a), ai(t));
            return;
          }
          o--;
        } else (r !== '$' && r !== '$?' && r !== '$!') || o++;
      r = a;
    } while (r);
    ai(t);
  }
  function Mn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function pc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === '$' || r === '$!' || r === '$?') {
          if (t === 0) return e;
          t--;
        } else r === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Nr = Math.random().toString(36).slice(2),
    sn = '__reactFiber$' + Nr,
    ki = '__reactProps$' + Nr,
    mn = '__reactContainer$' + Nr,
    ns = '__reactEvents$' + Nr,
    sm = '__reactListeners$' + Nr,
    am = '__reactHandles$' + Nr;
  function nr(e) {
    var t = e[sn];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[mn] || r[sn])) {
        if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
          for (e = pc(e); e !== null; ) {
            if ((r = e[sn])) return r;
            e = pc(e);
          }
        return t;
      }
      ((e = r), (r = e.parentNode));
    }
    return null;
  }
  function wi(e) {
    return (
      (e = e[sn] || e[mn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Ir(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function wl(e) {
    return e[ki] || null;
  }
  var rs = [],
    Tr = -1;
  function An(e) {
    return { current: e };
  }
  function He(e) {
    0 > Tr || ((e.current = rs[Tr]), (rs[Tr] = null), Tr--);
  }
  function Fe(e, t) {
    (Tr++, (rs[Tr] = e.current), (e.current = t));
  }
  var Dn = {},
    gt = An(Dn),
    Ct = An(!1),
    rr = Dn;
  function br(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Dn;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
      return o.__reactInternalMemoizedMaskedChildContext;
    var a = {},
      d;
    for (d in r) a[d] = t[d];
    return (
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      a
    );
  }
  function Et(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function xl() {
    (He(Ct), He(gt));
  }
  function hc(e, t, r) {
    if (gt.current !== Dn) throw Error(l(168));
    (Fe(gt, t), Fe(Ct, r));
  }
  function mc(e, t, r) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != 'function')) return r;
    o = o.getChildContext();
    for (var a in o) if (!(a in t)) throw Error(l(108, Ie(e) || 'Unknown', a));
    return S({}, r, o);
  }
  function Sl(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dn),
      (rr = gt.current),
      Fe(gt, e),
      Fe(Ct, Ct.current),
      !0
    );
  }
  function gc(e, t, r) {
    var o = e.stateNode;
    if (!o) throw Error(l(169));
    (r
      ? ((e = mc(e, t, rr)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        He(Ct),
        He(gt),
        Fe(gt, e))
      : He(Ct),
      Fe(Ct, r));
  }
  var gn = null,
    _l = !1,
    is = !1;
  function yc(e) {
    gn === null ? (gn = [e]) : gn.push(e);
  }
  function um(e) {
    ((_l = !0), yc(e));
  }
  function Fn() {
    if (!is && gn !== null) {
      is = !0;
      var e = 0,
        t = Ae;
      try {
        var r = gn;
        for (Ae = 1; e < r.length; e++) {
          var o = r[e];
          do o = o(!0);
          while (o !== null);
        }
        ((gn = null), (_l = !1));
      } catch (a) {
        throw (gn !== null && (gn = gn.slice(e + 1)), ku(No, Fn), a);
      } finally {
        ((Ae = t), (is = !1));
      }
    }
    return null;
  }
  var jr = [],
    Lr = 0,
    Cl = null,
    El = 0,
    Vt = [],
    Ht = 0,
    ir = null,
    yn = 1,
    vn = '';
  function lr(e, t) {
    ((jr[Lr++] = El), (jr[Lr++] = Cl), (Cl = e), (El = t));
  }
  function vc(e, t, r) {
    ((Vt[Ht++] = yn), (Vt[Ht++] = vn), (Vt[Ht++] = ir), (ir = e));
    var o = yn;
    e = vn;
    var a = 32 - Kt(o) - 1;
    ((o &= ~(1 << a)), (r += 1));
    var d = 32 - Kt(t) + a;
    if (30 < d) {
      var y = a - (a % 5);
      ((d = (o & ((1 << y) - 1)).toString(32)),
        (o >>= y),
        (a -= y),
        (yn = (1 << (32 - Kt(t) + a)) | (r << a) | o),
        (vn = d + e));
    } else ((yn = (1 << d) | (r << a) | o), (vn = e));
  }
  function ls(e) {
    e.return !== null && (lr(e, 1), vc(e, 1, 0));
  }
  function os(e) {
    for (; e === Cl; ) ((Cl = jr[--Lr]), (jr[Lr] = null), (El = jr[--Lr]), (jr[Lr] = null));
    for (; e === ir; )
      ((ir = Vt[--Ht]),
        (Vt[Ht] = null),
        (vn = Vt[--Ht]),
        (Vt[Ht] = null),
        (yn = Vt[--Ht]),
        (Vt[Ht] = null));
  }
  var Rt = null,
    Mt = null,
    $e = !1,
    Zt = null;
  function kc(e, t) {
    var r = qt(5, null, null, 0);
    ((r.elementType = 'DELETED'),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
  }
  function wc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (Rt = e), (Mt = Mn(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Rt = e), (Mt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = ir !== null ? { id: yn, overflow: vn } : null),
              (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
              (r = qt(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (Rt = e),
              (Mt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ss(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function as(e) {
    if ($e) {
      var t = Mt;
      if (t) {
        var r = t;
        if (!wc(e, t)) {
          if (ss(e)) throw Error(l(418));
          t = Mn(r.nextSibling);
          var o = Rt;
          t && wc(e, t) ? kc(o, r) : ((e.flags = (e.flags & -4097) | 2), ($e = !1), (Rt = e));
        }
      } else {
        if (ss(e)) throw Error(l(418));
        ((e.flags = (e.flags & -4097) | 2), ($e = !1), (Rt = e));
      }
    }
  }
  function xc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Rt = e;
  }
  function Nl(e) {
    if (e !== Rt) return !1;
    if (!$e) return (xc(e), ($e = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !Jo(e.type, e.memoizedProps))),
      t && (t = Mt))
    ) {
      if (ss(e)) throw (Sc(), Error(l(418)));
      for (; t; ) (kc(e, t), (t = Mn(t.nextSibling)));
    }
    if ((xc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === '/$') {
              if (t === 0) {
                Mt = Mn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        Mt = null;
      }
    } else Mt = Rt ? Mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Sc() {
    for (var e = Mt; e; ) e = Mn(e.nextSibling);
  }
  function Pr() {
    ((Mt = Rt = null), ($e = !1));
  }
  function us(e) {
    Zt === null ? (Zt = [e]) : Zt.push(e);
  }
  var cm = V.ReactCurrentBatchConfig;
  function xi(e, t, r) {
    if (((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(l(309));
          var o = r.stateNode;
        }
        if (!o) throw Error(l(147, e));
        var a = o,
          d = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === d
          ? t.ref
          : ((t = function (y) {
              var _ = a.refs;
              y === null ? delete _[d] : (_[d] = y);
            }),
            (t._stringRef = d),
            t);
      }
      if (typeof e != 'string') throw Error(l(284));
      if (!r._owner) throw Error(l(290, e));
    }
    return e;
  }
  function Il(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        l(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      )
    );
  }
  function _c(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Cc(e) {
    function t(T, N) {
      if (e) {
        var b = T.deletions;
        b === null ? ((T.deletions = [N]), (T.flags |= 16)) : b.push(N);
      }
    }
    function r(T, N) {
      if (!e) return null;
      for (; N !== null; ) (t(T, N), (N = N.sibling));
      return null;
    }
    function o(T, N) {
      for (T = new Map(); N !== null; )
        (N.key !== null ? T.set(N.key, N) : T.set(N.index, N), (N = N.sibling));
      return T;
    }
    function a(T, N) {
      return ((T = qn(T, N)), (T.index = 0), (T.sibling = null), T);
    }
    function d(T, N, b) {
      return (
        (T.index = b),
        e
          ? ((b = T.alternate),
            b !== null ? ((b = b.index), b < N ? ((T.flags |= 2), N) : b) : ((T.flags |= 2), N))
          : ((T.flags |= 1048576), N)
      );
    }
    function y(T) {
      return (e && T.alternate === null && (T.flags |= 2), T);
    }
    function _(T, N, b, Q) {
      return N === null || N.tag !== 6
        ? ((N = ea(b, T.mode, Q)), (N.return = T), N)
        : ((N = a(N, b)), (N.return = T), N);
    }
    function E(T, N, b, Q) {
      var se = b.type;
      return se === J
        ? U(T, N, b.props.children, Q, b.key)
        : N !== null &&
            (N.elementType === se ||
              (typeof se == 'object' && se !== null && se.$$typeof === me && _c(se) === N.type))
          ? ((Q = a(N, b.props)), (Q.ref = xi(T, N, b)), (Q.return = T), Q)
          : ((Q = Xl(b.type, b.key, b.props, null, T.mode, Q)),
            (Q.ref = xi(T, N, b)),
            (Q.return = T),
            Q);
    }
    function P(T, N, b, Q) {
      return N === null ||
        N.tag !== 4 ||
        N.stateNode.containerInfo !== b.containerInfo ||
        N.stateNode.implementation !== b.implementation
        ? ((N = ta(b, T.mode, Q)), (N.return = T), N)
        : ((N = a(N, b.children || [])), (N.return = T), N);
    }
    function U(T, N, b, Q, se) {
      return N === null || N.tag !== 7
        ? ((N = pr(b, T.mode, Q, se)), (N.return = T), N)
        : ((N = a(N, b)), (N.return = T), N);
    }
    function H(T, N, b) {
      if ((typeof N == 'string' && N !== '') || typeof N == 'number')
        return ((N = ea('' + N, T.mode, b)), (N.return = T), N);
      if (typeof N == 'object' && N !== null) {
        switch (N.$$typeof) {
          case ae:
            return (
              (b = Xl(N.type, N.key, N.props, null, T.mode, b)),
              (b.ref = xi(T, null, N)),
              (b.return = T),
              b
            );
          case z:
            return ((N = ta(N, T.mode, b)), (N.return = T), N);
          case me:
            var Q = N._init;
            return H(T, Q(N._payload), b);
        }
        if (In(N) || Z(N)) return ((N = pr(N, T.mode, b, null)), (N.return = T), N);
        Il(T, N);
      }
      return null;
    }
    function B(T, N, b, Q) {
      var se = N !== null ? N.key : null;
      if ((typeof b == 'string' && b !== '') || typeof b == 'number')
        return se !== null ? null : _(T, N, '' + b, Q);
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case ae:
            return b.key === se ? E(T, N, b, Q) : null;
          case z:
            return b.key === se ? P(T, N, b, Q) : null;
          case me:
            return ((se = b._init), B(T, N, se(b._payload), Q));
        }
        if (In(b) || Z(b)) return se !== null ? null : U(T, N, b, Q, null);
        Il(T, b);
      }
      return null;
    }
    function ee(T, N, b, Q, se) {
      if ((typeof Q == 'string' && Q !== '') || typeof Q == 'number')
        return ((T = T.get(b) || null), _(N, T, '' + Q, se));
      if (typeof Q == 'object' && Q !== null) {
        switch (Q.$$typeof) {
          case ae:
            return ((T = T.get(Q.key === null ? b : Q.key) || null), E(N, T, Q, se));
          case z:
            return ((T = T.get(Q.key === null ? b : Q.key) || null), P(N, T, Q, se));
          case me:
            var pe = Q._init;
            return ee(T, N, b, pe(Q._payload), se);
        }
        if (In(Q) || Z(Q)) return ((T = T.get(b) || null), U(N, T, Q, se, null));
        Il(N, Q);
      }
      return null;
    }
    function ie(T, N, b, Q) {
      for (
        var se = null, pe = null, he = N, we = (N = 0), ct = null;
        he !== null && we < b.length;
        we++
      ) {
        he.index > we ? ((ct = he), (he = null)) : (ct = he.sibling);
        var Re = B(T, he, b[we], Q);
        if (Re === null) {
          he === null && (he = ct);
          break;
        }
        (e && he && Re.alternate === null && t(T, he),
          (N = d(Re, N, we)),
          pe === null ? (se = Re) : (pe.sibling = Re),
          (pe = Re),
          (he = ct));
      }
      if (we === b.length) return (r(T, he), $e && lr(T, we), se);
      if (he === null) {
        for (; we < b.length; we++)
          ((he = H(T, b[we], Q)),
            he !== null &&
              ((N = d(he, N, we)), pe === null ? (se = he) : (pe.sibling = he), (pe = he)));
        return ($e && lr(T, we), se);
      }
      for (he = o(T, he); we < b.length; we++)
        ((ct = ee(he, T, we, b[we], Q)),
          ct !== null &&
            (e && ct.alternate !== null && he.delete(ct.key === null ? we : ct.key),
            (N = d(ct, N, we)),
            pe === null ? (se = ct) : (pe.sibling = ct),
            (pe = ct)));
      return (
        e &&
          he.forEach(function (Yn) {
            return t(T, Yn);
          }),
        $e && lr(T, we),
        se
      );
    }
    function oe(T, N, b, Q) {
      var se = Z(b);
      if (typeof se != 'function') throw Error(l(150));
      if (((b = se.call(b)), b == null)) throw Error(l(151));
      for (
        var pe = (se = null), he = N, we = (N = 0), ct = null, Re = b.next();
        he !== null && !Re.done;
        we++, Re = b.next()
      ) {
        he.index > we ? ((ct = he), (he = null)) : (ct = he.sibling);
        var Yn = B(T, he, Re.value, Q);
        if (Yn === null) {
          he === null && (he = ct);
          break;
        }
        (e && he && Yn.alternate === null && t(T, he),
          (N = d(Yn, N, we)),
          pe === null ? (se = Yn) : (pe.sibling = Yn),
          (pe = Yn),
          (he = ct));
      }
      if (Re.done) return (r(T, he), $e && lr(T, we), se);
      if (he === null) {
        for (; !Re.done; we++, Re = b.next())
          ((Re = H(T, Re.value, Q)),
            Re !== null &&
              ((N = d(Re, N, we)), pe === null ? (se = Re) : (pe.sibling = Re), (pe = Re)));
        return ($e && lr(T, we), se);
      }
      for (he = o(T, he); !Re.done; we++, Re = b.next())
        ((Re = ee(he, T, we, Re.value, Q)),
          Re !== null &&
            (e && Re.alternate !== null && he.delete(Re.key === null ? we : Re.key),
            (N = d(Re, N, we)),
            pe === null ? (se = Re) : (pe.sibling = Re),
            (pe = Re)));
      return (
        e &&
          he.forEach(function (Hm) {
            return t(T, Hm);
          }),
        $e && lr(T, we),
        se
      );
    }
    function Xe(T, N, b, Q) {
      if (
        (typeof b == 'object' &&
          b !== null &&
          b.type === J &&
          b.key === null &&
          (b = b.props.children),
        typeof b == 'object' && b !== null)
      ) {
        switch (b.$$typeof) {
          case ae:
            e: {
              for (var se = b.key, pe = N; pe !== null; ) {
                if (pe.key === se) {
                  if (((se = b.type), se === J)) {
                    if (pe.tag === 7) {
                      (r(T, pe.sibling), (N = a(pe, b.props.children)), (N.return = T), (T = N));
                      break e;
                    }
                  } else if (
                    pe.elementType === se ||
                    (typeof se == 'object' &&
                      se !== null &&
                      se.$$typeof === me &&
                      _c(se) === pe.type)
                  ) {
                    (r(T, pe.sibling),
                      (N = a(pe, b.props)),
                      (N.ref = xi(T, pe, b)),
                      (N.return = T),
                      (T = N));
                    break e;
                  }
                  r(T, pe);
                  break;
                } else t(T, pe);
                pe = pe.sibling;
              }
              b.type === J
                ? ((N = pr(b.props.children, T.mode, Q, b.key)), (N.return = T), (T = N))
                : ((Q = Xl(b.type, b.key, b.props, null, T.mode, Q)),
                  (Q.ref = xi(T, N, b)),
                  (Q.return = T),
                  (T = Q));
            }
            return y(T);
          case z:
            e: {
              for (pe = b.key; N !== null; ) {
                if (N.key === pe)
                  if (
                    N.tag === 4 &&
                    N.stateNode.containerInfo === b.containerInfo &&
                    N.stateNode.implementation === b.implementation
                  ) {
                    (r(T, N.sibling), (N = a(N, b.children || [])), (N.return = T), (T = N));
                    break e;
                  } else {
                    r(T, N);
                    break;
                  }
                else t(T, N);
                N = N.sibling;
              }
              ((N = ta(b, T.mode, Q)), (N.return = T), (T = N));
            }
            return y(T);
          case me:
            return ((pe = b._init), Xe(T, N, pe(b._payload), Q));
        }
        if (In(b)) return ie(T, N, b, Q);
        if (Z(b)) return oe(T, N, b, Q);
        Il(T, b);
      }
      return (typeof b == 'string' && b !== '') || typeof b == 'number'
        ? ((b = '' + b),
          N !== null && N.tag === 6
            ? (r(T, N.sibling), (N = a(N, b)), (N.return = T), (T = N))
            : (r(T, N), (N = ea(b, T.mode, Q)), (N.return = T), (T = N)),
          y(T))
        : r(T, N);
    }
    return Xe;
  }
  var Or = Cc(!0),
    Ec = Cc(!1),
    Tl = An(null),
    bl = null,
    zr = null,
    cs = null;
  function fs() {
    cs = zr = bl = null;
  }
  function ds(e) {
    var t = Tl.current;
    (He(Tl), (e._currentValue = t));
  }
  function ps(e, t, r) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
          : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function Rr(e, t) {
    ((bl = e),
      (cs = zr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Nt = !0), (e.firstContext = null)));
  }
  function $t(e) {
    var t = e._currentValue;
    if (cs !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), zr === null)) {
        if (bl === null) throw Error(l(308));
        ((zr = e), (bl.dependencies = { lanes: 0, firstContext: e }));
      } else zr = zr.next = e;
    return t;
  }
  var or = null;
  function hs(e) {
    or === null ? (or = [e]) : or.push(e);
  }
  function Nc(e, t, r, o) {
    var a = t.interleaved;
    return (
      a === null ? ((r.next = r), hs(t)) : ((r.next = a.next), (a.next = r)),
      (t.interleaved = r),
      kn(e, o)
    );
  }
  function kn(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return));
    return r.tag === 3 ? r.stateNode : null;
  }
  var Bn = !1;
  function ms(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ic(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function wn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Un(e, t, r) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (ze & 2) !== 0)) {
      var a = o.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (o.pending = t),
        kn(e, r)
      );
    }
    return (
      (a = o.interleaved),
      a === null ? ((t.next = t), hs(o)) : ((t.next = a.next), (a.next = t)),
      (o.interleaved = t),
      kn(e, r)
    );
  }
  function jl(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), bo(e, r));
    }
  }
  function Tc(e, t) {
    var r = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), r === o)) {
      var a = null,
        d = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var y = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          (d === null ? (a = d = y) : (d = d.next = y), (r = r.next));
        } while (r !== null);
        d === null ? (a = d = t) : (d = d.next = t);
      } else a = d = t;
      ((r = {
        baseState: o.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: d,
        shared: o.shared,
        effects: o.effects,
      }),
        (e.updateQueue = r));
      return;
    }
    ((e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t));
  }
  function Ll(e, t, r, o) {
    var a = e.updateQueue;
    Bn = !1;
    var d = a.firstBaseUpdate,
      y = a.lastBaseUpdate,
      _ = a.shared.pending;
    if (_ !== null) {
      a.shared.pending = null;
      var E = _,
        P = E.next;
      ((E.next = null), y === null ? (d = P) : (y.next = P), (y = E));
      var U = e.alternate;
      U !== null &&
        ((U = U.updateQueue),
        (_ = U.lastBaseUpdate),
        _ !== y && (_ === null ? (U.firstBaseUpdate = P) : (_.next = P), (U.lastBaseUpdate = E)));
    }
    if (d !== null) {
      var H = a.baseState;
      ((y = 0), (U = P = E = null), (_ = d));
      do {
        var B = _.lane,
          ee = _.eventTime;
        if ((o & B) === B) {
          U !== null &&
            (U = U.next =
              {
                eventTime: ee,
                lane: 0,
                tag: _.tag,
                payload: _.payload,
                callback: _.callback,
                next: null,
              });
          e: {
            var ie = e,
              oe = _;
            switch (((B = t), (ee = r), oe.tag)) {
              case 1:
                if (((ie = oe.payload), typeof ie == 'function')) {
                  H = ie.call(ee, H, B);
                  break e;
                }
                H = ie;
                break e;
              case 3:
                ie.flags = (ie.flags & -65537) | 128;
              case 0:
                if (
                  ((ie = oe.payload),
                  (B = typeof ie == 'function' ? ie.call(ee, H, B) : ie),
                  B == null)
                )
                  break e;
                H = S({}, H, B);
                break e;
              case 2:
                Bn = !0;
            }
          }
          _.callback !== null &&
            _.lane !== 0 &&
            ((e.flags |= 64), (B = a.effects), B === null ? (a.effects = [_]) : B.push(_));
        } else
          ((ee = {
            eventTime: ee,
            lane: B,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null,
          }),
            U === null ? ((P = U = ee), (E = H)) : (U = U.next = ee),
            (y |= B));
        if (((_ = _.next), _ === null)) {
          if (((_ = a.shared.pending), _ === null)) break;
          ((B = _),
            (_ = B.next),
            (B.next = null),
            (a.lastBaseUpdate = B),
            (a.shared.pending = null));
        }
      } while (!0);
      if (
        (U === null && (E = H),
        (a.baseState = E),
        (a.firstBaseUpdate = P),
        (a.lastBaseUpdate = U),
        (t = a.shared.interleaved),
        t !== null)
      ) {
        a = t;
        do ((y |= a.lane), (a = a.next));
        while (a !== t);
      } else d === null && (a.shared.lanes = 0);
      ((ur |= y), (e.lanes = y), (e.memoizedState = H));
    }
  }
  function bc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var o = e[t],
          a = o.callback;
        if (a !== null) {
          if (((o.callback = null), (o = r), typeof a != 'function')) throw Error(l(191, a));
          a.call(o);
        }
      }
  }
  var Si = {},
    an = An(Si),
    _i = An(Si),
    Ci = An(Si);
  function sr(e) {
    if (e === Si) throw Error(l(174));
    return e;
  }
  function gs(e, t) {
    switch ((Fe(Ci, t), Fe(_i, e), Fe(an, Si), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Y(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Y(t, e)));
    }
    (He(an), Fe(an, t));
  }
  function Mr() {
    (He(an), He(_i), He(Ci));
  }
  function jc(e) {
    sr(Ci.current);
    var t = sr(an.current),
      r = Y(t, e.type);
    t !== r && (Fe(_i, e), Fe(an, r));
  }
  function ys(e) {
    _i.current === e && (He(an), He(_i));
  }
  var Qe = An(0);
  function Pl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!'))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var vs = [];
  function ks() {
    for (var e = 0; e < vs.length; e++) vs[e]._workInProgressVersionPrimary = null;
    vs.length = 0;
  }
  var Ol = V.ReactCurrentDispatcher,
    ws = V.ReactCurrentBatchConfig,
    ar = 0,
    qe = null,
    rt = null,
    at = null,
    zl = !1,
    Ei = !1,
    Ni = 0,
    fm = 0;
  function yt() {
    throw Error(l(321));
  }
  function xs(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Xt(e[r], t[r])) return !1;
    return !0;
  }
  function Ss(e, t, r, o, a, d) {
    if (
      ((ar = d),
      (qe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Ol.current = e === null || e.memoizedState === null ? mm : gm),
      (e = r(o, a)),
      Ei)
    ) {
      d = 0;
      do {
        if (((Ei = !1), (Ni = 0), 25 <= d)) throw Error(l(301));
        ((d += 1), (at = rt = null), (t.updateQueue = null), (Ol.current = ym), (e = r(o, a)));
      } while (Ei);
    }
    if (
      ((Ol.current = Al),
      (t = rt !== null && rt.next !== null),
      (ar = 0),
      (at = rt = qe = null),
      (zl = !1),
      t)
    )
      throw Error(l(300));
    return e;
  }
  function _s() {
    var e = Ni !== 0;
    return ((Ni = 0), e);
  }
  function un() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (at === null ? (qe.memoizedState = at = e) : (at = at.next = e), at);
  }
  function Wt() {
    if (rt === null) {
      var e = qe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = rt.next;
    var t = at === null ? qe.memoizedState : at.next;
    if (t !== null) ((at = t), (rt = e));
    else {
      if (e === null) throw Error(l(310));
      ((rt = e),
        (e = {
          memoizedState: rt.memoizedState,
          baseState: rt.baseState,
          baseQueue: rt.baseQueue,
          queue: rt.queue,
          next: null,
        }),
        at === null ? (qe.memoizedState = at = e) : (at = at.next = e));
    }
    return at;
  }
  function Ii(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Cs(e) {
    var t = Wt(),
      r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var o = rt,
      a = o.baseQueue,
      d = r.pending;
    if (d !== null) {
      if (a !== null) {
        var y = a.next;
        ((a.next = d.next), (d.next = y));
      }
      ((o.baseQueue = a = d), (r.pending = null));
    }
    if (a !== null) {
      ((d = a.next), (o = o.baseState));
      var _ = (y = null),
        E = null,
        P = d;
      do {
        var U = P.lane;
        if ((ar & U) === U)
          (E !== null &&
            (E = E.next =
              {
                lane: 0,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null,
              }),
            (o = P.hasEagerState ? P.eagerState : e(o, P.action)));
        else {
          var H = {
            lane: U,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null,
          };
          (E === null ? ((_ = E = H), (y = o)) : (E = E.next = H), (qe.lanes |= U), (ur |= U));
        }
        P = P.next;
      } while (P !== null && P !== d);
      (E === null ? (y = o) : (E.next = _),
        Xt(o, t.memoizedState) || (Nt = !0),
        (t.memoizedState = o),
        (t.baseState = y),
        (t.baseQueue = E),
        (r.lastRenderedState = o));
    }
    if (((e = r.interleaved), e !== null)) {
      a = e;
      do ((d = a.lane), (qe.lanes |= d), (ur |= d), (a = a.next));
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function Es(e) {
    var t = Wt(),
      r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var o = r.dispatch,
      a = r.pending,
      d = t.memoizedState;
    if (a !== null) {
      r.pending = null;
      var y = (a = a.next);
      do ((d = e(d, y.action)), (y = y.next));
      while (y !== a);
      (Xt(d, t.memoizedState) || (Nt = !0),
        (t.memoizedState = d),
        t.baseQueue === null && (t.baseState = d),
        (r.lastRenderedState = d));
    }
    return [d, o];
  }
  function Lc() {}
  function Pc(e, t) {
    var r = qe,
      o = Wt(),
      a = t(),
      d = !Xt(o.memoizedState, a);
    if (
      (d && ((o.memoizedState = a), (Nt = !0)),
      (o = o.queue),
      Ns(Rc.bind(null, r, o, e), [e]),
      o.getSnapshot !== t || d || (at !== null && at.memoizedState.tag & 1))
    ) {
      if (((r.flags |= 2048), Ti(9, zc.bind(null, r, o, a, t), void 0, null), ut === null))
        throw Error(l(349));
      (ar & 30) !== 0 || Oc(r, t, a);
    }
    return a;
  }
  function Oc(e, t, r) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = qe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (qe.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
  }
  function zc(e, t, r, o) {
    ((t.value = r), (t.getSnapshot = o), Mc(t) && Ac(e));
  }
  function Rc(e, t, r) {
    return r(function () {
      Mc(t) && Ac(e);
    });
  }
  function Mc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Xt(e, r);
    } catch {
      return !0;
    }
  }
  function Ac(e) {
    var t = kn(e, 1);
    t !== null && nn(t, e, 1, -1);
  }
  function Dc(e) {
    var t = un();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ii,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = hm.bind(null, qe, e)),
      [t.memoizedState, e]
    );
  }
  function Ti(e, t, r, o) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: o, next: null }),
      (t = qe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (qe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((o = r.next), (r.next = e), (e.next = o), (t.lastEffect = e))),
      e
    );
  }
  function Fc() {
    return Wt().memoizedState;
  }
  function Rl(e, t, r, o) {
    var a = un();
    ((qe.flags |= e), (a.memoizedState = Ti(1 | t, r, void 0, o === void 0 ? null : o)));
  }
  function Ml(e, t, r, o) {
    var a = Wt();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (rt !== null) {
      var y = rt.memoizedState;
      if (((d = y.destroy), o !== null && xs(o, y.deps))) {
        a.memoizedState = Ti(t, r, d, o);
        return;
      }
    }
    ((qe.flags |= e), (a.memoizedState = Ti(1 | t, r, d, o)));
  }
  function Bc(e, t) {
    return Rl(8390656, 8, e, t);
  }
  function Ns(e, t) {
    return Ml(2048, 8, e, t);
  }
  function Uc(e, t) {
    return Ml(4, 2, e, t);
  }
  function Vc(e, t) {
    return Ml(4, 4, e, t);
  }
  function Hc(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function $c(e, t, r) {
    return ((r = r != null ? r.concat([e]) : null), Ml(4, 4, Hc.bind(null, t, e), r));
  }
  function Is() {}
  function Wc(e, t) {
    var r = Wt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && xs(t, o[1]) ? o[0] : ((r.memoizedState = [e, t]), e);
  }
  function Qc(e, t) {
    var r = Wt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && xs(t, o[1])
      ? o[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function qc(e, t, r) {
    return (ar & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Nt = !0)), (e.memoizedState = r))
      : (Xt(r, t) || ((r = _u()), (qe.lanes |= r), (ur |= r), (e.baseState = !0)), t);
  }
  function dm(e, t) {
    var r = Ae;
    ((Ae = r !== 0 && 4 > r ? r : 4), e(!0));
    var o = ws.transition;
    ws.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((Ae = r), (ws.transition = o));
    }
  }
  function Yc() {
    return Wt().memoizedState;
  }
  function pm(e, t, r) {
    var o = Wn(e);
    if (((r = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null }), Gc(e)))
      Kc(t, r);
    else if (((r = Nc(e, t, r, o)), r !== null)) {
      var a = St();
      (nn(r, e, o, a), Xc(r, t, o));
    }
  }
  function hm(e, t, r) {
    var o = Wn(e),
      a = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (Gc(e)) Kc(t, a);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = t.lastRenderedReducer), d !== null)
      )
        try {
          var y = t.lastRenderedState,
            _ = d(y, r);
          if (((a.hasEagerState = !0), (a.eagerState = _), Xt(_, y))) {
            var E = t.interleaved;
            (E === null ? ((a.next = a), hs(t)) : ((a.next = E.next), (E.next = a)),
              (t.interleaved = a));
            return;
          }
        } catch {
        } finally {
        }
      ((r = Nc(e, t, a, o)), r !== null && ((a = St()), nn(r, e, o, a), Xc(r, t, o)));
    }
  }
  function Gc(e) {
    var t = e.alternate;
    return e === qe || (t !== null && t === qe);
  }
  function Kc(e, t) {
    Ei = zl = !0;
    var r = e.pending;
    (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t));
  }
  function Xc(e, t, r) {
    if ((r & 4194240) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), bo(e, r));
    }
  }
  var Al = {
      readContext: $t,
      useCallback: yt,
      useContext: yt,
      useEffect: yt,
      useImperativeHandle: yt,
      useInsertionEffect: yt,
      useLayoutEffect: yt,
      useMemo: yt,
      useReducer: yt,
      useRef: yt,
      useState: yt,
      useDebugValue: yt,
      useDeferredValue: yt,
      useTransition: yt,
      useMutableSource: yt,
      useSyncExternalStore: yt,
      useId: yt,
      unstable_isNewReconciler: !1,
    },
    mm = {
      readContext: $t,
      useCallback: function (e, t) {
        return ((un().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: $t,
      useEffect: Bc,
      useImperativeHandle: function (e, t, r) {
        return ((r = r != null ? r.concat([e]) : null), Rl(4194308, 4, Hc.bind(null, t, e), r));
      },
      useLayoutEffect: function (e, t) {
        return Rl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Rl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = un();
        return ((t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, r) {
        var o = un();
        return (
          (t = r !== void 0 ? r(t) : t),
          (o.memoizedState = o.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (o.queue = e),
          (e = e.dispatch = pm.bind(null, qe, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = un();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Dc,
      useDebugValue: Is,
      useDeferredValue: function (e) {
        return (un().memoizedState = e);
      },
      useTransition: function () {
        var e = Dc(!1),
          t = e[0];
        return ((e = dm.bind(null, e[1])), (un().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var o = qe,
          a = un();
        if ($e) {
          if (r === void 0) throw Error(l(407));
          r = r();
        } else {
          if (((r = t()), ut === null)) throw Error(l(349));
          (ar & 30) !== 0 || Oc(o, t, r);
        }
        a.memoizedState = r;
        var d = { value: r, getSnapshot: t };
        return (
          (a.queue = d),
          Bc(Rc.bind(null, o, d, e), [e]),
          (o.flags |= 2048),
          Ti(9, zc.bind(null, o, d, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = un(),
          t = ut.identifierPrefix;
        if ($e) {
          var r = vn,
            o = yn;
          ((r = (o & ~(1 << (32 - Kt(o) - 1))).toString(32) + r),
            (t = ':' + t + 'R' + r),
            (r = Ni++),
            0 < r && (t += 'H' + r.toString(32)),
            (t += ':'));
        } else ((r = fm++), (t = ':' + t + 'r' + r.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    gm = {
      readContext: $t,
      useCallback: Wc,
      useContext: $t,
      useEffect: Ns,
      useImperativeHandle: $c,
      useInsertionEffect: Uc,
      useLayoutEffect: Vc,
      useMemo: Qc,
      useReducer: Cs,
      useRef: Fc,
      useState: function () {
        return Cs(Ii);
      },
      useDebugValue: Is,
      useDeferredValue: function (e) {
        var t = Wt();
        return qc(t, rt.memoizedState, e);
      },
      useTransition: function () {
        var e = Cs(Ii)[0],
          t = Wt().memoizedState;
        return [e, t];
      },
      useMutableSource: Lc,
      useSyncExternalStore: Pc,
      useId: Yc,
      unstable_isNewReconciler: !1,
    },
    ym = {
      readContext: $t,
      useCallback: Wc,
      useContext: $t,
      useEffect: Ns,
      useImperativeHandle: $c,
      useInsertionEffect: Uc,
      useLayoutEffect: Vc,
      useMemo: Qc,
      useReducer: Es,
      useRef: Fc,
      useState: function () {
        return Es(Ii);
      },
      useDebugValue: Is,
      useDeferredValue: function (e) {
        var t = Wt();
        return rt === null ? (t.memoizedState = e) : qc(t, rt.memoizedState, e);
      },
      useTransition: function () {
        var e = Es(Ii)[0],
          t = Wt().memoizedState;
        return [e, t];
      },
      useMutableSource: Lc,
      useSyncExternalStore: Pc,
      useId: Yc,
      unstable_isNewReconciler: !1,
    };
  function Jt(e, t) {
    if (e && e.defaultProps) {
      ((t = S({}, t)), (e = e.defaultProps));
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function Ts(e, t, r, o) {
    ((t = e.memoizedState),
      (r = r(o, t)),
      (r = r == null ? t : S({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r));
  }
  var Dl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? tr(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var o = St(),
        a = Wn(e),
        d = wn(o, a);
      ((d.payload = t),
        r != null && (d.callback = r),
        (t = Un(e, d, a)),
        t !== null && (nn(t, e, a, o), jl(t, e, a)));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var o = St(),
        a = Wn(e),
        d = wn(o, a);
      ((d.tag = 1),
        (d.payload = t),
        r != null && (d.callback = r),
        (t = Un(e, d, a)),
        t !== null && (nn(t, e, a, o), jl(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = St(),
        o = Wn(e),
        a = wn(r, o);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = Un(e, a, o)),
        t !== null && (nn(t, e, o, r), jl(t, e, o)));
    },
  };
  function Zc(e, t, r, o, a, d, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(o, d, y)
        : t.prototype && t.prototype.isPureReactComponent
          ? !hi(r, o) || !hi(a, d)
          : !0
    );
  }
  function Jc(e, t, r) {
    var o = !1,
      a = Dn,
      d = t.contextType;
    return (
      typeof d == 'object' && d !== null
        ? (d = $t(d))
        : ((a = Et(t) ? rr : gt.current),
          (o = t.contextTypes),
          (d = (o = o != null) ? br(e, a) : Dn)),
      (t = new t(r, d)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Dl),
      (e.stateNode = t),
      (t._reactInternals = e),
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = d)),
      t
    );
  }
  function ef(e, t, r, o) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, o),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(r, o),
      t.state !== e && Dl.enqueueReplaceState(t, t.state, null));
  }
  function bs(e, t, r, o) {
    var a = e.stateNode;
    ((a.props = r), (a.state = e.memoizedState), (a.refs = {}), ms(e));
    var d = t.contextType;
    (typeof d == 'object' && d !== null
      ? (a.context = $t(d))
      : ((d = Et(t) ? rr : gt.current), (a.context = br(e, d))),
      (a.state = e.memoizedState),
      (d = t.getDerivedStateFromProps),
      typeof d == 'function' && (Ts(e, t, d, r), (a.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function' ||
        (typeof a.UNSAFE_componentWillMount != 'function' &&
          typeof a.componentWillMount != 'function') ||
        ((t = a.state),
        typeof a.componentWillMount == 'function' && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == 'function' && a.UNSAFE_componentWillMount(),
        t !== a.state && Dl.enqueueReplaceState(a, a.state, null),
        Ll(e, r, a, o),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function Ar(e, t) {
    try {
      var r = '',
        o = t;
      do ((r += le(o)), (o = o.return));
      while (o);
      var a = r;
    } catch (d) {
      a =
        `
Error generating stack: ` +
        d.message +
        `
` +
        d.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function js(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function Ls(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var vm = typeof WeakMap == 'function' ? WeakMap : Map;
  function tf(e, t, r) {
    ((r = wn(-1, r)), (r.tag = 3), (r.payload = { element: null }));
    var o = t.value;
    return (
      (r.callback = function () {
        (Wl || ((Wl = !0), (Qs = o)), Ls(e, t));
      }),
      r
    );
  }
  function nf(e, t, r) {
    ((r = wn(-1, r)), (r.tag = 3));
    var o = e.type.getDerivedStateFromError;
    if (typeof o == 'function') {
      var a = t.value;
      ((r.payload = function () {
        return o(a);
      }),
        (r.callback = function () {
          Ls(e, t);
        }));
    }
    var d = e.stateNode;
    return (
      d !== null &&
        typeof d.componentDidCatch == 'function' &&
        (r.callback = function () {
          (Ls(e, t),
            typeof o != 'function' && (Hn === null ? (Hn = new Set([this])) : Hn.add(this)));
          var y = t.stack;
          this.componentDidCatch(t.value, { componentStack: y !== null ? y : '' });
        }),
      r
    );
  }
  function rf(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new vm();
      var a = new Set();
      o.set(t, a);
    } else ((a = o.get(t)), a === void 0 && ((a = new Set()), o.set(t, a)));
    a.has(r) || (a.add(r), (e = Pm.bind(null, e, t, r)), t.then(e, e));
  }
  function lf(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function of(e, t, r, o, a) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null ? (r.tag = 17) : ((t = wn(-1, 1)), (t.tag = 2), Un(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = a), e);
  }
  var km = V.ReactCurrentOwner,
    Nt = !1;
  function xt(e, t, r, o) {
    t.child = e === null ? Ec(t, null, r, o) : Or(t, e.child, r, o);
  }
  function sf(e, t, r, o, a) {
    r = r.render;
    var d = t.ref;
    return (
      Rr(t, a),
      (o = Ss(e, t, r, o, d, a)),
      (r = _s()),
      e !== null && !Nt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), xn(e, t, a))
        : ($e && r && ls(t), (t.flags |= 1), xt(e, t, o, a), t.child)
    );
  }
  function af(e, t, r, o, a) {
    if (e === null) {
      var d = r.type;
      return typeof d == 'function' &&
        !Js(d) &&
        d.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = d), uf(e, t, d, o, a))
        : ((e = Xl(r.type, null, o, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((d = e.child), (e.lanes & a) === 0)) {
      var y = d.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : hi), r(y, o) && e.ref === t.ref))
        return xn(e, t, a);
    }
    return ((t.flags |= 1), (e = qn(d, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function uf(e, t, r, o, a) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (hi(d, o) && e.ref === t.ref)
        if (((Nt = !1), (t.pendingProps = o = d), (e.lanes & a) !== 0))
          (e.flags & 131072) !== 0 && (Nt = !0);
        else return ((t.lanes = e.lanes), xn(e, t, a));
    }
    return Ps(e, t, r, o, a);
  }
  function cf(e, t, r) {
    var o = t.pendingProps,
      a = o.children,
      d = e !== null ? e.memoizedState : null;
    if (o.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          Fe(Fr, At),
          (At |= r));
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = d !== null ? d.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            Fe(Fr, At),
            (At |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (o = d !== null ? d.baseLanes : r),
          Fe(Fr, At),
          (At |= o));
      }
    else
      (d !== null ? ((o = d.baseLanes | r), (t.memoizedState = null)) : (o = r),
        Fe(Fr, At),
        (At |= o));
    return (xt(e, t, a, r), t.child);
  }
  function ff(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ps(e, t, r, o, a) {
    var d = Et(r) ? rr : gt.current;
    return (
      (d = br(t, d)),
      Rr(t, a),
      (r = Ss(e, t, r, o, d, a)),
      (o = _s()),
      e !== null && !Nt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), xn(e, t, a))
        : ($e && o && ls(t), (t.flags |= 1), xt(e, t, r, a), t.child)
    );
  }
  function df(e, t, r, o, a) {
    if (Et(r)) {
      var d = !0;
      Sl(t);
    } else d = !1;
    if ((Rr(t, a), t.stateNode === null)) (Bl(e, t), Jc(t, r, o), bs(t, r, o, a), (o = !0));
    else if (e === null) {
      var y = t.stateNode,
        _ = t.memoizedProps;
      y.props = _;
      var E = y.context,
        P = r.contextType;
      typeof P == 'object' && P !== null
        ? (P = $t(P))
        : ((P = Et(r) ? rr : gt.current), (P = br(t, P)));
      var U = r.getDerivedStateFromProps,
        H = typeof U == 'function' || typeof y.getSnapshotBeforeUpdate == 'function';
      (H ||
        (typeof y.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof y.componentWillReceiveProps != 'function') ||
        ((_ !== o || E !== P) && ef(t, y, o, P)),
        (Bn = !1));
      var B = t.memoizedState;
      ((y.state = B),
        Ll(t, o, y, a),
        (E = t.memoizedState),
        _ !== o || B !== E || Ct.current || Bn
          ? (typeof U == 'function' && (Ts(t, r, U, o), (E = t.memoizedState)),
            (_ = Bn || Zc(t, r, _, o, B, E, P))
              ? (H ||
                  (typeof y.UNSAFE_componentWillMount != 'function' &&
                    typeof y.componentWillMount != 'function') ||
                  (typeof y.componentWillMount == 'function' && y.componentWillMount(),
                  typeof y.UNSAFE_componentWillMount == 'function' &&
                    y.UNSAFE_componentWillMount()),
                typeof y.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof y.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = E)),
            (y.props = o),
            (y.state = E),
            (y.context = P),
            (o = _))
          : (typeof y.componentDidMount == 'function' && (t.flags |= 4194308), (o = !1)));
    } else {
      ((y = t.stateNode),
        Ic(e, t),
        (_ = t.memoizedProps),
        (P = t.type === t.elementType ? _ : Jt(t.type, _)),
        (y.props = P),
        (H = t.pendingProps),
        (B = y.context),
        (E = r.contextType),
        typeof E == 'object' && E !== null
          ? (E = $t(E))
          : ((E = Et(r) ? rr : gt.current), (E = br(t, E))));
      var ee = r.getDerivedStateFromProps;
      ((U = typeof ee == 'function' || typeof y.getSnapshotBeforeUpdate == 'function') ||
        (typeof y.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof y.componentWillReceiveProps != 'function') ||
        ((_ !== H || B !== E) && ef(t, y, o, E)),
        (Bn = !1),
        (B = t.memoizedState),
        (y.state = B),
        Ll(t, o, y, a));
      var ie = t.memoizedState;
      _ !== H || B !== ie || Ct.current || Bn
        ? (typeof ee == 'function' && (Ts(t, r, ee, o), (ie = t.memoizedState)),
          (P = Bn || Zc(t, r, P, o, B, ie, E) || !1)
            ? (U ||
                (typeof y.UNSAFE_componentWillUpdate != 'function' &&
                  typeof y.componentWillUpdate != 'function') ||
                (typeof y.componentWillUpdate == 'function' && y.componentWillUpdate(o, ie, E),
                typeof y.UNSAFE_componentWillUpdate == 'function' &&
                  y.UNSAFE_componentWillUpdate(o, ie, E)),
              typeof y.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof y.componentDidUpdate != 'function' ||
                (_ === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate != 'function' ||
                (_ === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = ie)),
          (y.props = o),
          (y.state = ie),
          (y.context = E),
          (o = P))
        : (typeof y.componentDidUpdate != 'function' ||
            (_ === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 4),
          typeof y.getSnapshotBeforeUpdate != 'function' ||
            (_ === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return Os(e, t, r, o, d, a);
  }
  function Os(e, t, r, o, a, d) {
    ff(e, t);
    var y = (t.flags & 128) !== 0;
    if (!o && !y) return (a && gc(t, r, !1), xn(e, t, d));
    ((o = t.stateNode), (km.current = t));
    var _ = y && typeof r.getDerivedStateFromError != 'function' ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && y
        ? ((t.child = Or(t, e.child, null, d)), (t.child = Or(t, null, _, d)))
        : xt(e, t, _, d),
      (t.memoizedState = o.state),
      a && gc(t, r, !0),
      t.child
    );
  }
  function pf(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? hc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && hc(e, t.context, !1),
      gs(e, t.containerInfo));
  }
  function hf(e, t, r, o, a) {
    return (Pr(), us(a), (t.flags |= 256), xt(e, t, r, o), t.child);
  }
  var zs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Rs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function mf(e, t, r) {
    var o = t.pendingProps,
      a = Qe.current,
      d = !1,
      y = (t.flags & 128) !== 0,
      _;
    if (
      ((_ = y) || (_ = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      _ ? ((d = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (a |= 1),
      Fe(Qe, a & 1),
      e === null)
    )
      return (
        as(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((y = o.children),
            (e = o.fallback),
            d
              ? ((o = t.mode),
                (d = t.child),
                (y = { mode: 'hidden', children: y }),
                (o & 1) === 0 && d !== null
                  ? ((d.childLanes = 0), (d.pendingProps = y))
                  : (d = Zl(y, o, 0, null)),
                (e = pr(e, o, r, null)),
                (d.return = t),
                (e.return = t),
                (d.sibling = e),
                (t.child = d),
                (t.child.memoizedState = Rs(r)),
                (t.memoizedState = zs),
                e)
              : Ms(t, y))
      );
    if (((a = e.memoizedState), a !== null && ((_ = a.dehydrated), _ !== null)))
      return wm(e, t, y, o, _, a, r);
    if (d) {
      ((d = o.fallback), (y = t.mode), (a = e.child), (_ = a.sibling));
      var E = { mode: 'hidden', children: o.children };
      return (
        (y & 1) === 0 && t.child !== a
          ? ((o = t.child), (o.childLanes = 0), (o.pendingProps = E), (t.deletions = null))
          : ((o = qn(a, E)), (o.subtreeFlags = a.subtreeFlags & 14680064)),
        _ !== null ? (d = qn(_, d)) : ((d = pr(d, y, r, null)), (d.flags |= 2)),
        (d.return = t),
        (o.return = t),
        (o.sibling = d),
        (t.child = o),
        (o = d),
        (d = t.child),
        (y = e.child.memoizedState),
        (y =
          y === null
            ? Rs(r)
            : { baseLanes: y.baseLanes | r, cachePool: null, transitions: y.transitions }),
        (d.memoizedState = y),
        (d.childLanes = e.childLanes & ~r),
        (t.memoizedState = zs),
        o
      );
    }
    return (
      (d = e.child),
      (e = d.sibling),
      (o = qn(d, { mode: 'visible', children: o.children })),
      (t.mode & 1) === 0 && (o.lanes = r),
      (o.return = t),
      (o.sibling = null),
      e !== null &&
        ((r = t.deletions), r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = o),
      (t.memoizedState = null),
      o
    );
  }
  function Ms(e, t) {
    return (
      (t = Zl({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Fl(e, t, r, o) {
    return (
      o !== null && us(o),
      Or(t, e.child, null, r),
      (e = Ms(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function wm(e, t, r, o, a, d, y) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (o = js(Error(l(422)))), Fl(e, t, y, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((d = o.fallback),
            (a = t.mode),
            (o = Zl({ mode: 'visible', children: o.children }, a, 0, null)),
            (d = pr(d, a, y, null)),
            (d.flags |= 2),
            (o.return = t),
            (d.return = t),
            (o.sibling = d),
            (t.child = o),
            (t.mode & 1) !== 0 && Or(t, e.child, null, y),
            (t.child.memoizedState = Rs(y)),
            (t.memoizedState = zs),
            d);
    if ((t.mode & 1) === 0) return Fl(e, t, y, null);
    if (a.data === '$!') {
      if (((o = a.nextSibling && a.nextSibling.dataset), o)) var _ = o.dgst;
      return ((o = _), (d = Error(l(419))), (o = js(d, o, void 0)), Fl(e, t, y, o));
    }
    if (((_ = (y & e.childLanes) !== 0), Nt || _)) {
      if (((o = ut), o !== null)) {
        switch (y & -y) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        ((a = (a & (o.suspendedLanes | y)) !== 0 ? 0 : a),
          a !== 0 && a !== d.retryLane && ((d.retryLane = a), kn(e, a), nn(o, e, a, -1)));
      }
      return (Zs(), (o = js(Error(l(421)))), Fl(e, t, y, o));
    }
    return a.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Om.bind(null, e)), (a._reactRetry = t), null)
      : ((e = d.treeContext),
        (Mt = Mn(a.nextSibling)),
        (Rt = t),
        ($e = !0),
        (Zt = null),
        e !== null &&
          ((Vt[Ht++] = yn),
          (Vt[Ht++] = vn),
          (Vt[Ht++] = ir),
          (yn = e.id),
          (vn = e.overflow),
          (ir = t)),
        (t = Ms(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function gf(e, t, r) {
    e.lanes |= t;
    var o = e.alternate;
    (o !== null && (o.lanes |= t), ps(e.return, t, r));
  }
  function As(e, t, r, o, a) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: r,
          tailMode: a,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = o),
        (d.tail = r),
        (d.tailMode = a));
  }
  function yf(e, t, r) {
    var o = t.pendingProps,
      a = o.revealOrder,
      d = o.tail;
    if ((xt(e, t, o.children, r), (o = Qe.current), (o & 2) !== 0))
      ((o = (o & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && gf(e, r, t);
          else if (e.tag === 19) gf(e, r, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      o &= 1;
    }
    if ((Fe(Qe, o), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (a) {
        case 'forwards':
          for (r = t.child, a = null; r !== null; )
            ((e = r.alternate), e !== null && Pl(e) === null && (a = r), (r = r.sibling));
          ((r = a),
            r === null ? ((a = t.child), (t.child = null)) : ((a = r.sibling), (r.sibling = null)),
            As(t, !1, a, r, d));
          break;
        case 'backwards':
          for (r = null, a = t.child, t.child = null; a !== null; ) {
            if (((e = a.alternate), e !== null && Pl(e) === null)) {
              t.child = a;
              break;
            }
            ((e = a.sibling), (a.sibling = r), (r = a), (a = e));
          }
          As(t, !0, r, null, d);
          break;
        case 'together':
          As(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Bl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function xn(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (ur |= t.lanes), (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, r = qn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
        ((e = e.sibling), (r = r.sibling = qn(e, e.pendingProps)), (r.return = t));
      r.sibling = null;
    }
    return t.child;
  }
  function xm(e, t, r) {
    switch (t.tag) {
      case 3:
        (pf(t), Pr());
        break;
      case 5:
        jc(t);
        break;
      case 1:
        Et(t.type) && Sl(t);
        break;
      case 4:
        gs(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          a = t.memoizedProps.value;
        (Fe(Tl, o._currentValue), (o._currentValue = a));
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (Fe(Qe, Qe.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? mf(e, t, r)
              : (Fe(Qe, Qe.current & 1), (e = xn(e, t, r)), e !== null ? e.sibling : null);
        Fe(Qe, Qe.current & 1);
        break;
      case 19:
        if (((o = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return yf(e, t, r);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          Fe(Qe, Qe.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), cf(e, t, r));
    }
    return xn(e, t, r);
  }
  var vf, Ds, kf, wf;
  ((vf = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        ((r.child.return = r), (r = r.child));
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      ((r.sibling.return = r.return), (r = r.sibling));
    }
  }),
    (Ds = function () {}),
    (kf = function (e, t, r, o) {
      var a = e.memoizedProps;
      if (a !== o) {
        ((e = t.stateNode), sr(an.current));
        var d = null;
        switch (r) {
          case 'input':
            ((a = tt(e, a)), (o = tt(e, o)), (d = []));
            break;
          case 'select':
            ((a = S({}, a, { value: void 0 })), (o = S({}, o, { value: void 0 })), (d = []));
            break;
          case 'textarea':
            ((a = Zr(e, a)), (o = Zr(e, o)), (d = []));
            break;
          default:
            typeof a.onClick != 'function' && typeof o.onClick == 'function' && (e.onclick = kl);
        }
        dt(r, o);
        var y;
        r = null;
        for (P in a)
          if (!o.hasOwnProperty(P) && a.hasOwnProperty(P) && a[P] != null)
            if (P === 'style') {
              var _ = a[P];
              for (y in _) _.hasOwnProperty(y) && (r || (r = {}), (r[y] = ''));
            } else
              P !== 'dangerouslySetInnerHTML' &&
                P !== 'children' &&
                P !== 'suppressContentEditableWarning' &&
                P !== 'suppressHydrationWarning' &&
                P !== 'autoFocus' &&
                (u.hasOwnProperty(P) ? d || (d = []) : (d = d || []).push(P, null));
        for (P in o) {
          var E = o[P];
          if (
            ((_ = a != null ? a[P] : void 0),
            o.hasOwnProperty(P) && E !== _ && (E != null || _ != null))
          )
            if (P === 'style')
              if (_) {
                for (y in _)
                  !_.hasOwnProperty(y) ||
                    (E && E.hasOwnProperty(y)) ||
                    (r || (r = {}), (r[y] = ''));
                for (y in E) E.hasOwnProperty(y) && _[y] !== E[y] && (r || (r = {}), (r[y] = E[y]));
              } else (r || (d || (d = []), d.push(P, r)), (r = E));
            else
              P === 'dangerouslySetInnerHTML'
                ? ((E = E ? E.__html : void 0),
                  (_ = _ ? _.__html : void 0),
                  E != null && _ !== E && (d = d || []).push(P, E))
                : P === 'children'
                  ? (typeof E != 'string' && typeof E != 'number') || (d = d || []).push(P, '' + E)
                  : P !== 'suppressContentEditableWarning' &&
                    P !== 'suppressHydrationWarning' &&
                    (u.hasOwnProperty(P)
                      ? (E != null && P === 'onScroll' && Ve('scroll', e), d || _ === E || (d = []))
                      : (d = d || []).push(P, E));
        }
        r && (d = d || []).push('style', r);
        var P = d;
        (t.updateQueue = P) && (t.flags |= 4);
      }
    }),
    (wf = function (e, t, r, o) {
      r !== o && (t.flags |= 4);
    }));
  function bi(e, t) {
    if (!$e)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var r = null; t !== null; ) (t.alternate !== null && (r = t), (t = t.sibling));
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case 'collapsed':
          r = e.tail;
          for (var o = null; r !== null; ) (r.alternate !== null && (o = r), (r = r.sibling));
          o === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function vt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      o = 0;
    if (t)
      for (var a = e.child; a !== null; )
        ((r |= a.lanes | a.childLanes),
          (o |= a.subtreeFlags & 14680064),
          (o |= a.flags & 14680064),
          (a.return = e),
          (a = a.sibling));
    else
      for (a = e.child; a !== null; )
        ((r |= a.lanes | a.childLanes),
          (o |= a.subtreeFlags),
          (o |= a.flags),
          (a.return = e),
          (a = a.sibling));
    return ((e.subtreeFlags |= o), (e.childLanes = r), t);
  }
  function Sm(e, t, r) {
    var o = t.pendingProps;
    switch ((os(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (vt(t), null);
      case 1:
        return (Et(t.type) && xl(), vt(t), null);
      case 3:
        return (
          (o = t.stateNode),
          Mr(),
          He(Ct),
          He(gt),
          ks(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (Nl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Zt !== null && (Gs(Zt), (Zt = null)))),
          Ds(e, t),
          vt(t),
          null
        );
      case 5:
        ys(t);
        var a = sr(Ci.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          (kf(e, t, r, o, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(l(166));
            return (vt(t), null);
          }
          if (((e = sr(an.current)), Nl(t))) {
            ((o = t.stateNode), (r = t.type));
            var d = t.memoizedProps;
            switch (((o[sn] = t), (o[ki] = d), (e = (t.mode & 1) !== 0), r)) {
              case 'dialog':
                (Ve('cancel', o), Ve('close', o));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Ve('load', o);
                break;
              case 'video':
              case 'audio':
                for (a = 0; a < gi.length; a++) Ve(gi[a], o);
                break;
              case 'source':
                Ve('error', o);
                break;
              case 'img':
              case 'image':
              case 'link':
                (Ve('error', o), Ve('load', o));
                break;
              case 'details':
                Ve('toggle', o);
                break;
              case 'input':
                (nt(o, d), Ve('invalid', o));
                break;
              case 'select':
                ((o._wrapperState = { wasMultiple: !!d.multiple }), Ve('invalid', o));
                break;
              case 'textarea':
                (Gi(o, d), Ve('invalid', o));
            }
            (dt(r, d), (a = null));
            for (var y in d)
              if (d.hasOwnProperty(y)) {
                var _ = d[y];
                y === 'children'
                  ? typeof _ == 'string'
                    ? o.textContent !== _ &&
                      (d.suppressHydrationWarning !== !0 && vl(o.textContent, _, e),
                      (a = ['children', _]))
                    : typeof _ == 'number' &&
                      o.textContent !== '' + _ &&
                      (d.suppressHydrationWarning !== !0 && vl(o.textContent, _, e),
                      (a = ['children', '' + _]))
                  : u.hasOwnProperty(y) && _ != null && y === 'onScroll' && Ve('scroll', o);
              }
            switch (r) {
              case 'input':
                (Ee(o), Jn(o, d, !0));
                break;
              case 'textarea':
                (Ee(o), Xi(o));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof d.onClick == 'function' && (o.onclick = kl);
            }
            ((o = a), (t.updateQueue = o), o !== null && (t.flags |= 4));
          } else {
            ((y = a.nodeType === 9 ? a : a.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = A(r)),
              e === 'http://www.w3.org/1999/xhtml'
                ? r === 'script'
                  ? ((e = y.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof o.is == 'string'
                    ? (e = y.createElement(r, { is: o.is }))
                    : ((e = y.createElement(r)),
                      r === 'select' &&
                        ((y = e), o.multiple ? (y.multiple = !0) : o.size && (y.size = o.size)))
                : (e = y.createElementNS(e, r)),
              (e[sn] = t),
              (e[ki] = o),
              vf(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((y = ln(r, o)), r)) {
                case 'dialog':
                  (Ve('cancel', e), Ve('close', e), (a = o));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (Ve('load', e), (a = o));
                  break;
                case 'video':
                case 'audio':
                  for (a = 0; a < gi.length; a++) Ve(gi[a], e);
                  a = o;
                  break;
                case 'source':
                  (Ve('error', e), (a = o));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (Ve('error', e), Ve('load', e), (a = o));
                  break;
                case 'details':
                  (Ve('toggle', e), (a = o));
                  break;
                case 'input':
                  (nt(e, o), (a = tt(e, o)), Ve('invalid', e));
                  break;
                case 'option':
                  a = o;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!o.multiple }),
                    (a = S({}, o, { value: void 0 })),
                    Ve('invalid', e));
                  break;
                case 'textarea':
                  (Gi(e, o), (a = Zr(e, o)), Ve('invalid', e));
                  break;
                default:
                  a = o;
              }
              (dt(r, a), (_ = a));
              for (d in _)
                if (_.hasOwnProperty(d)) {
                  var E = _[d];
                  d === 'style'
                    ? bn(e, E)
                    : d === 'dangerouslySetInnerHTML'
                      ? ((E = E ? E.__html : void 0), E != null && be(e, E))
                      : d === 'children'
                        ? typeof E == 'string'
                          ? (r !== 'textarea' || E !== '') && Oe(e, E)
                          : typeof E == 'number' && Oe(e, '' + E)
                        : d !== 'suppressContentEditableWarning' &&
                          d !== 'suppressHydrationWarning' &&
                          d !== 'autoFocus' &&
                          (u.hasOwnProperty(d)
                            ? E != null && d === 'onScroll' && Ve('scroll', e)
                            : E != null && F(e, d, E, y));
                }
              switch (r) {
                case 'input':
                  (Ee(e), Jn(e, o, !1));
                  break;
                case 'textarea':
                  (Ee(e), Xi(e));
                  break;
                case 'option':
                  o.value != null && e.setAttribute('value', '' + _e(o.value));
                  break;
                case 'select':
                  ((e.multiple = !!o.multiple),
                    (d = o.value),
                    d != null
                      ? Tn(e, !!o.multiple, d, !1)
                      : o.defaultValue != null && Tn(e, !!o.multiple, o.defaultValue, !0));
                  break;
                default:
                  typeof a.onClick == 'function' && (e.onclick = kl);
              }
              switch (r) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  o = !!o.autoFocus;
                  break e;
                case 'img':
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (vt(t), null);
      case 6:
        if (e && t.stateNode != null) wf(e, t, e.memoizedProps, o);
        else {
          if (typeof o != 'string' && t.stateNode === null) throw Error(l(166));
          if (((r = sr(Ci.current)), sr(an.current), Nl(t))) {
            if (
              ((o = t.stateNode),
              (r = t.memoizedProps),
              (o[sn] = t),
              (d = o.nodeValue !== r) && ((e = Rt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  vl(o.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    vl(o.nodeValue, r, (e.mode & 1) !== 0);
              }
            d && (t.flags |= 4);
          } else
            ((o = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(o)),
              (o[sn] = t),
              (t.stateNode = o));
        }
        return (vt(t), null);
      case 13:
        if (
          (He(Qe),
          (o = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if ($e && Mt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Sc(), Pr(), (t.flags |= 98560), (d = !1));
          else if (((d = Nl(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!d) throw Error(l(318));
              if (((d = t.memoizedState), (d = d !== null ? d.dehydrated : null), !d))
                throw Error(l(317));
              d[sn] = t;
            } else (Pr(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (vt(t), (d = !1));
          } else (Zt !== null && (Gs(Zt), (Zt = null)), (d = !0));
          if (!d) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Qe.current & 1) !== 0 ? it === 0 && (it = 3) : Zs())),
            t.updateQueue !== null && (t.flags |= 4),
            vt(t),
            null);
      case 4:
        return (Mr(), Ds(e, t), e === null && yi(t.stateNode.containerInfo), vt(t), null);
      case 10:
        return (ds(t.type._context), vt(t), null);
      case 17:
        return (Et(t.type) && xl(), vt(t), null);
      case 19:
        if ((He(Qe), (d = t.memoizedState), d === null)) return (vt(t), null);
        if (((o = (t.flags & 128) !== 0), (y = d.rendering), y === null))
          if (o) bi(d, !1);
          else {
            if (it !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((y = Pl(e)), y !== null)) {
                  for (
                    t.flags |= 128,
                      bi(d, !1),
                      o = y.updateQueue,
                      o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      o = r,
                      r = t.child;
                    r !== null;
                  )
                    ((d = r),
                      (e = o),
                      (d.flags &= 14680066),
                      (y = d.alternate),
                      y === null
                        ? ((d.childLanes = 0),
                          (d.lanes = e),
                          (d.child = null),
                          (d.subtreeFlags = 0),
                          (d.memoizedProps = null),
                          (d.memoizedState = null),
                          (d.updateQueue = null),
                          (d.dependencies = null),
                          (d.stateNode = null))
                        : ((d.childLanes = y.childLanes),
                          (d.lanes = y.lanes),
                          (d.child = y.child),
                          (d.subtreeFlags = 0),
                          (d.deletions = null),
                          (d.memoizedProps = y.memoizedProps),
                          (d.memoizedState = y.memoizedState),
                          (d.updateQueue = y.updateQueue),
                          (d.type = y.type),
                          (e = y.dependencies),
                          (d.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (r = r.sibling));
                  return (Fe(Qe, (Qe.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            d.tail !== null &&
              Ke() > Br &&
              ((t.flags |= 128), (o = !0), bi(d, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = Pl(y)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                bi(d, !0),
                d.tail === null && d.tailMode === 'hidden' && !y.alternate && !$e)
              )
                return (vt(t), null);
            } else
              2 * Ke() - d.renderingStartTime > Br &&
                r !== 1073741824 &&
                ((t.flags |= 128), (o = !0), bi(d, !1), (t.lanes = 4194304));
          d.isBackwards
            ? ((y.sibling = t.child), (t.child = y))
            : ((r = d.last), r !== null ? (r.sibling = y) : (t.child = y), (d.last = y));
        }
        return d.tail !== null
          ? ((t = d.tail),
            (d.rendering = t),
            (d.tail = t.sibling),
            (d.renderingStartTime = Ke()),
            (t.sibling = null),
            (r = Qe.current),
            Fe(Qe, o ? (r & 1) | 2 : r & 1),
            t)
          : (vt(t), null);
      case 22:
      case 23:
        return (
          Xs(),
          (o = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
          o && (t.mode & 1) !== 0
            ? (At & 1073741824) !== 0 && (vt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : vt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function _m(e, t) {
    switch ((os(t), t.tag)) {
      case 1:
        return (
          Et(t.type) && xl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Mr(),
          He(Ct),
          He(gt),
          ks(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (ys(t), null);
      case 13:
        if ((He(Qe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(l(340));
          Pr();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (He(Qe), null);
      case 4:
        return (Mr(), null);
      case 10:
        return (ds(t.type._context), null);
      case 22:
      case 23:
        return (Xs(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ul = !1,
    kt = !1,
    Cm = typeof WeakSet == 'function' ? WeakSet : Set,
    ne = null;
  function Dr(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == 'function')
        try {
          r(null);
        } catch (o) {
          Ge(e, t, o);
        }
      else r.current = null;
  }
  function Fs(e, t, r) {
    try {
      r();
    } catch (o) {
      Ge(e, t, o);
    }
  }
  var xf = !1;
  function Em(e, t) {
    if (((Xo = sl), (e = Zu()), Ho(e))) {
      if ('selectionStart' in e) var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var o = r.getSelection && r.getSelection();
          if (o && o.rangeCount !== 0) {
            r = o.anchorNode;
            var a = o.anchorOffset,
              d = o.focusNode;
            o = o.focusOffset;
            try {
              (r.nodeType, d.nodeType);
            } catch {
              r = null;
              break e;
            }
            var y = 0,
              _ = -1,
              E = -1,
              P = 0,
              U = 0,
              H = e,
              B = null;
            t: for (;;) {
              for (
                var ee;
                H !== r || (a !== 0 && H.nodeType !== 3) || (_ = y + a),
                  H !== d || (o !== 0 && H.nodeType !== 3) || (E = y + o),
                  H.nodeType === 3 && (y += H.nodeValue.length),
                  (ee = H.firstChild) !== null;
              )
                ((B = H), (H = ee));
              for (;;) {
                if (H === e) break t;
                if (
                  (B === r && ++P === a && (_ = y),
                  B === d && ++U === o && (E = y),
                  (ee = H.nextSibling) !== null)
                )
                  break;
                ((H = B), (B = H.parentNode));
              }
              H = ee;
            }
            r = _ === -1 || E === -1 ? null : { start: _, end: E };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Zo = { focusedElem: e, selectionRange: r }, sl = !1, ne = t; ne !== null; )
      if (((t = ne), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (ne = e));
      else
        for (; ne !== null; ) {
          t = ne;
          try {
            var ie = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ie !== null) {
                    var oe = ie.memoizedProps,
                      Xe = ie.memoizedState,
                      T = t.stateNode,
                      N = T.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? oe : Jt(t.type, oe),
                        Xe
                      );
                    T.__reactInternalSnapshotBeforeUpdate = N;
                  }
                  break;
                case 3:
                  var b = t.stateNode.containerInfo;
                  b.nodeType === 1
                    ? (b.textContent = '')
                    : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(l(163));
              }
          } catch (Q) {
            Ge(t, t.return, Q);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (ne = e));
            break;
          }
          ne = t.return;
        }
    return ((ie = xf), (xf = !1), ie);
  }
  function ji(e, t, r) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var a = (o = o.next);
      do {
        if ((a.tag & e) === e) {
          var d = a.destroy;
          ((a.destroy = void 0), d !== void 0 && Fs(t, r, d));
        }
        a = a.next;
      } while (a !== o);
    }
  }
  function Vl(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var o = r.create;
          r.destroy = o();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Bs(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function Sf(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Sf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[sn], delete t[ki], delete t[ns], delete t[sm], delete t[am])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function _f(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Cf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || _f(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Us(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6)
      ((e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = kl)));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Us(e, t, r), e = e.sibling; e !== null; ) (Us(e, t, r), (e = e.sibling));
  }
  function Vs(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6) ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Vs(e, t, r), e = e.sibling; e !== null; ) (Vs(e, t, r), (e = e.sibling));
  }
  var pt = null,
    en = !1;
  function Vn(e, t, r) {
    for (r = r.child; r !== null; ) (Ef(e, t, r), (r = r.sibling));
  }
  function Ef(e, t, r) {
    if (on && typeof on.onCommitFiberUnmount == 'function')
      try {
        on.onCommitFiberUnmount(tl, r);
      } catch {}
    switch (r.tag) {
      case 5:
        kt || Dr(r, t);
      case 6:
        var o = pt,
          a = en;
        ((pt = null),
          Vn(e, t, r),
          (pt = o),
          (en = a),
          pt !== null &&
            (en
              ? ((e = pt),
                (r = r.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
              : pt.removeChild(r.stateNode)));
        break;
      case 18:
        pt !== null &&
          (en
            ? ((e = pt),
              (r = r.stateNode),
              e.nodeType === 8 ? ts(e.parentNode, r) : e.nodeType === 1 && ts(e, r),
              ai(e))
            : ts(pt, r.stateNode));
        break;
      case 4:
        ((o = pt),
          (a = en),
          (pt = r.stateNode.containerInfo),
          (en = !0),
          Vn(e, t, r),
          (pt = o),
          (en = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!kt && ((o = r.updateQueue), o !== null && ((o = o.lastEffect), o !== null))) {
          a = o = o.next;
          do {
            var d = a,
              y = d.destroy;
            ((d = d.tag),
              y !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && Fs(r, t, y),
              (a = a.next));
          } while (a !== o);
        }
        Vn(e, t, r);
        break;
      case 1:
        if (!kt && (Dr(r, t), (o = r.stateNode), typeof o.componentWillUnmount == 'function'))
          try {
            ((o.props = r.memoizedProps), (o.state = r.memoizedState), o.componentWillUnmount());
          } catch (_) {
            Ge(r, t, _);
          }
        Vn(e, t, r);
        break;
      case 21:
        Vn(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((kt = (o = kt) || r.memoizedState !== null), Vn(e, t, r), (kt = o))
          : Vn(e, t, r);
        break;
      default:
        Vn(e, t, r);
    }
  }
  function Nf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      (r === null && (r = e.stateNode = new Cm()),
        t.forEach(function (o) {
          var a = zm.bind(null, e, o);
          r.has(o) || (r.add(o), o.then(a, a));
        }));
    }
  }
  function tn(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var o = 0; o < r.length; o++) {
        var a = r[o];
        try {
          var d = e,
            y = t,
            _ = y;
          e: for (; _ !== null; ) {
            switch (_.tag) {
              case 5:
                ((pt = _.stateNode), (en = !1));
                break e;
              case 3:
                ((pt = _.stateNode.containerInfo), (en = !0));
                break e;
              case 4:
                ((pt = _.stateNode.containerInfo), (en = !0));
                break e;
            }
            _ = _.return;
          }
          if (pt === null) throw Error(l(160));
          (Ef(d, y, a), (pt = null), (en = !1));
          var E = a.alternate;
          (E !== null && (E.return = null), (a.return = null));
        } catch (P) {
          Ge(a, t, P);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (If(t, e), (t = t.sibling));
  }
  function If(e, t) {
    var r = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((tn(t, e), cn(e), o & 4)) {
          try {
            (ji(3, e, e.return), Vl(3, e));
          } catch (oe) {
            Ge(e, e.return, oe);
          }
          try {
            ji(5, e, e.return);
          } catch (oe) {
            Ge(e, e.return, oe);
          }
        }
        break;
      case 1:
        (tn(t, e), cn(e), o & 512 && r !== null && Dr(r, r.return));
        break;
      case 5:
        if ((tn(t, e), cn(e), o & 512 && r !== null && Dr(r, r.return), e.flags & 32)) {
          var a = e.stateNode;
          try {
            Oe(a, '');
          } catch (oe) {
            Ge(e, e.return, oe);
          }
        }
        if (o & 4 && ((a = e.stateNode), a != null)) {
          var d = e.memoizedProps,
            y = r !== null ? r.memoizedProps : d,
            _ = e.type,
            E = e.updateQueue;
          if (((e.updateQueue = null), E !== null))
            try {
              (_ === 'input' && d.type === 'radio' && d.name != null && rn(a, d), ln(_, y));
              var P = ln(_, d);
              for (y = 0; y < E.length; y += 2) {
                var U = E[y],
                  H = E[y + 1];
                U === 'style'
                  ? bn(a, H)
                  : U === 'dangerouslySetInnerHTML'
                    ? be(a, H)
                    : U === 'children'
                      ? Oe(a, H)
                      : F(a, U, H, P);
              }
              switch (_) {
                case 'input':
                  Bt(a, d);
                  break;
                case 'textarea':
                  Ki(a, d);
                  break;
                case 'select':
                  var B = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!d.multiple;
                  var ee = d.value;
                  ee != null
                    ? Tn(a, !!d.multiple, ee, !1)
                    : B !== !!d.multiple &&
                      (d.defaultValue != null
                        ? Tn(a, !!d.multiple, d.defaultValue, !0)
                        : Tn(a, !!d.multiple, d.multiple ? [] : '', !1));
              }
              a[ki] = d;
            } catch (oe) {
              Ge(e, e.return, oe);
            }
        }
        break;
      case 6:
        if ((tn(t, e), cn(e), o & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          ((a = e.stateNode), (d = e.memoizedProps));
          try {
            a.nodeValue = d;
          } catch (oe) {
            Ge(e, e.return, oe);
          }
        }
        break;
      case 3:
        if ((tn(t, e), cn(e), o & 4 && r !== null && r.memoizedState.isDehydrated))
          try {
            ai(t.containerInfo);
          } catch (oe) {
            Ge(e, e.return, oe);
          }
        break;
      case 4:
        (tn(t, e), cn(e));
        break;
      case 13:
        (tn(t, e),
          cn(e),
          (a = e.child),
          a.flags & 8192 &&
            ((d = a.memoizedState !== null),
            (a.stateNode.isHidden = d),
            !d || (a.alternate !== null && a.alternate.memoizedState !== null) || (Ws = Ke())),
          o & 4 && Nf(e));
        break;
      case 22:
        if (
          ((U = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((kt = (P = kt) || U), tn(t, e), (kt = P)) : tn(t, e),
          cn(e),
          o & 8192)
        ) {
          if (
            ((P = e.memoizedState !== null), (e.stateNode.isHidden = P) && !U && (e.mode & 1) !== 0)
          )
            for (ne = e, U = e.child; U !== null; ) {
              for (H = ne = U; ne !== null; ) {
                switch (((B = ne), (ee = B.child), B.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ji(4, B, B.return);
                    break;
                  case 1:
                    Dr(B, B.return);
                    var ie = B.stateNode;
                    if (typeof ie.componentWillUnmount == 'function') {
                      ((o = B), (r = B.return));
                      try {
                        ((t = o),
                          (ie.props = t.memoizedProps),
                          (ie.state = t.memoizedState),
                          ie.componentWillUnmount());
                      } catch (oe) {
                        Ge(o, r, oe);
                      }
                    }
                    break;
                  case 5:
                    Dr(B, B.return);
                    break;
                  case 22:
                    if (B.memoizedState !== null) {
                      jf(H);
                      continue;
                    }
                }
                ee !== null ? ((ee.return = B), (ne = ee)) : jf(H);
              }
              U = U.sibling;
            }
          e: for (U = null, H = e; ; ) {
            if (H.tag === 5) {
              if (U === null) {
                U = H;
                try {
                  ((a = H.stateNode),
                    P
                      ? ((d = a.style),
                        typeof d.setProperty == 'function'
                          ? d.setProperty('display', 'none', 'important')
                          : (d.display = 'none'))
                      : ((_ = H.stateNode),
                        (E = H.memoizedProps.style),
                        (y = E != null && E.hasOwnProperty('display') ? E.display : null),
                        (_.style.display = Ut('display', y))));
                } catch (oe) {
                  Ge(e, e.return, oe);
                }
              }
            } else if (H.tag === 6) {
              if (U === null)
                try {
                  H.stateNode.nodeValue = P ? '' : H.memoizedProps;
                } catch (oe) {
                  Ge(e, e.return, oe);
                }
            } else if (
              ((H.tag !== 22 && H.tag !== 23) || H.memoizedState === null || H === e) &&
              H.child !== null
            ) {
              ((H.child.return = H), (H = H.child));
              continue;
            }
            if (H === e) break e;
            for (; H.sibling === null; ) {
              if (H.return === null || H.return === e) break e;
              (U === H && (U = null), (H = H.return));
            }
            (U === H && (U = null), (H.sibling.return = H.return), (H = H.sibling));
          }
        }
        break;
      case 19:
        (tn(t, e), cn(e), o & 4 && Nf(e));
        break;
      case 21:
        break;
      default:
        (tn(t, e), cn(e));
    }
  }
  function cn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (_f(r)) {
              var o = r;
              break e;
            }
            r = r.return;
          }
          throw Error(l(160));
        }
        switch (o.tag) {
          case 5:
            var a = o.stateNode;
            o.flags & 32 && (Oe(a, ''), (o.flags &= -33));
            var d = Cf(e);
            Vs(e, d, a);
            break;
          case 3:
          case 4:
            var y = o.stateNode.containerInfo,
              _ = Cf(e);
            Us(e, _, y);
            break;
          default:
            throw Error(l(161));
        }
      } catch (E) {
        Ge(e, e.return, E);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Nm(e, t, r) {
    ((ne = e), Tf(e));
  }
  function Tf(e, t, r) {
    for (var o = (e.mode & 1) !== 0; ne !== null; ) {
      var a = ne,
        d = a.child;
      if (a.tag === 22 && o) {
        var y = a.memoizedState !== null || Ul;
        if (!y) {
          var _ = a.alternate,
            E = (_ !== null && _.memoizedState !== null) || kt;
          _ = Ul;
          var P = kt;
          if (((Ul = y), (kt = E) && !P))
            for (ne = a; ne !== null; )
              ((y = ne),
                (E = y.child),
                y.tag === 22 && y.memoizedState !== null
                  ? Lf(a)
                  : E !== null
                    ? ((E.return = y), (ne = E))
                    : Lf(a));
          for (; d !== null; ) ((ne = d), Tf(d), (d = d.sibling));
          ((ne = a), (Ul = _), (kt = P));
        }
        bf(e);
      } else (a.subtreeFlags & 8772) !== 0 && d !== null ? ((d.return = a), (ne = d)) : bf(e);
    }
  }
  function bf(e) {
    for (; ne !== null; ) {
      var t = ne;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                kt || Vl(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !kt)
                  if (r === null) o.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type ? r.memoizedProps : Jt(t.type, r.memoizedProps);
                    o.componentDidUpdate(a, r.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = t.updateQueue;
                d !== null && bc(t, d, o);
                break;
              case 3:
                var y = t.updateQueue;
                if (y !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  bc(t, y, r);
                }
                break;
              case 5:
                var _ = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = _;
                  var E = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      E.autoFocus && r.focus();
                      break;
                    case 'img':
                      E.src && (r.src = E.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var P = t.alternate;
                  if (P !== null) {
                    var U = P.memoizedState;
                    if (U !== null) {
                      var H = U.dehydrated;
                      H !== null && ai(H);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(l(163));
            }
          kt || (t.flags & 512 && Bs(t));
        } catch (B) {
          Ge(t, t.return, B);
        }
      }
      if (t === e) {
        ne = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        ((r.return = t.return), (ne = r));
        break;
      }
      ne = t.return;
    }
  }
  function jf(e) {
    for (; ne !== null; ) {
      var t = ne;
      if (t === e) {
        ne = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        ((r.return = t.return), (ne = r));
        break;
      }
      ne = t.return;
    }
  }
  function Lf(e) {
    for (; ne !== null; ) {
      var t = ne;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              Vl(4, t);
            } catch (E) {
              Ge(t, r, E);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == 'function') {
              var a = t.return;
              try {
                o.componentDidMount();
              } catch (E) {
                Ge(t, a, E);
              }
            }
            var d = t.return;
            try {
              Bs(t);
            } catch (E) {
              Ge(t, d, E);
            }
            break;
          case 5:
            var y = t.return;
            try {
              Bs(t);
            } catch (E) {
              Ge(t, y, E);
            }
        }
      } catch (E) {
        Ge(t, t.return, E);
      }
      if (t === e) {
        ne = null;
        break;
      }
      var _ = t.sibling;
      if (_ !== null) {
        ((_.return = t.return), (ne = _));
        break;
      }
      ne = t.return;
    }
  }
  var Im = Math.ceil,
    Hl = V.ReactCurrentDispatcher,
    Hs = V.ReactCurrentOwner,
    Qt = V.ReactCurrentBatchConfig,
    ze = 0,
    ut = null,
    Je = null,
    ht = 0,
    At = 0,
    Fr = An(0),
    it = 0,
    Li = null,
    ur = 0,
    $l = 0,
    $s = 0,
    Pi = null,
    It = null,
    Ws = 0,
    Br = 1 / 0,
    Sn = null,
    Wl = !1,
    Qs = null,
    Hn = null,
    Ql = !1,
    $n = null,
    ql = 0,
    Oi = 0,
    qs = null,
    Yl = -1,
    Gl = 0;
  function St() {
    return (ze & 6) !== 0 ? Ke() : Yl !== -1 ? Yl : (Yl = Ke());
  }
  function Wn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ze & 2) !== 0 && ht !== 0
        ? ht & -ht
        : cm.transition !== null
          ? (Gl === 0 && (Gl = _u()), Gl)
          : ((e = Ae), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Pu(e.type))), e);
  }
  function nn(e, t, r, o) {
    if (50 < Oi) throw ((Oi = 0), (qs = null), Error(l(185)));
    (ri(e, r, o),
      ((ze & 2) === 0 || e !== ut) &&
        (e === ut && ((ze & 2) === 0 && ($l |= r), it === 4 && Qn(e, ht)),
        Tt(e, o),
        r === 1 && ze === 0 && (t.mode & 1) === 0 && ((Br = Ke() + 500), _l && Fn())));
  }
  function Tt(e, t) {
    var r = e.callbackNode;
    ch(e, t);
    var o = il(e, e === ut ? ht : 0);
    if (o === 0) (r !== null && wu(r), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((r != null && wu(r), t === 1))
        (e.tag === 0 ? um(Of.bind(null, e)) : yc(Of.bind(null, e)),
          lm(function () {
            (ze & 6) === 0 && Fn();
          }),
          (r = null));
      else {
        switch (Cu(o)) {
          case 1:
            r = No;
            break;
          case 4:
            r = xu;
            break;
          case 16:
            r = el;
            break;
          case 536870912:
            r = Su;
            break;
          default:
            r = el;
        }
        r = Uf(r, Pf.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = r));
    }
  }
  function Pf(e, t) {
    if (((Yl = -1), (Gl = 0), (ze & 6) !== 0)) throw Error(l(327));
    var r = e.callbackNode;
    if (Ur() && e.callbackNode !== r) return null;
    var o = il(e, e === ut ? ht : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = Kl(e, o);
    else {
      t = o;
      var a = ze;
      ze |= 2;
      var d = Rf();
      (ut !== e || ht !== t) && ((Sn = null), (Br = Ke() + 500), fr(e, t));
      do
        try {
          jm();
          break;
        } catch (_) {
          zf(e, _);
        }
      while (!0);
      (fs(), (Hl.current = d), (ze = a), Je !== null ? (t = 0) : ((ut = null), (ht = 0), (t = it)));
    }
    if (t !== 0) {
      if ((t === 2 && ((a = Io(e)), a !== 0 && ((o = a), (t = Ys(e, a)))), t === 1))
        throw ((r = Li), fr(e, 0), Qn(e, o), Tt(e, Ke()), r);
      if (t === 6) Qn(e, o);
      else {
        if (
          ((a = e.current.alternate),
          (o & 30) === 0 &&
            !Tm(a) &&
            ((t = Kl(e, o)),
            t === 2 && ((d = Io(e)), d !== 0 && ((o = d), (t = Ys(e, d)))),
            t === 1))
        )
          throw ((r = Li), fr(e, 0), Qn(e, o), Tt(e, Ke()), r);
        switch (((e.finishedWork = a), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            dr(e, It, Sn);
            break;
          case 3:
            if ((Qn(e, o), (o & 130023424) === o && ((t = Ws + 500 - Ke()), 10 < t))) {
              if (il(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & o) !== o)) {
                (St(), (e.pingedLanes |= e.suspendedLanes & a));
                break;
              }
              e.timeoutHandle = es(dr.bind(null, e, It, Sn), t);
              break;
            }
            dr(e, It, Sn);
            break;
          case 4:
            if ((Qn(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, a = -1; 0 < o; ) {
              var y = 31 - Kt(o);
              ((d = 1 << y), (y = t[y]), y > a && (a = y), (o &= ~d));
            }
            if (
              ((o = a),
              (o = Ke() - o),
              (o =
                (120 > o
                  ? 120
                  : 480 > o
                    ? 480
                    : 1080 > o
                      ? 1080
                      : 1920 > o
                        ? 1920
                        : 3e3 > o
                          ? 3e3
                          : 4320 > o
                            ? 4320
                            : 1960 * Im(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = es(dr.bind(null, e, It, Sn), o);
              break;
            }
            dr(e, It, Sn);
            break;
          case 5:
            dr(e, It, Sn);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return (Tt(e, Ke()), e.callbackNode === r ? Pf.bind(null, e) : null);
  }
  function Ys(e, t) {
    var r = Pi;
    return (
      e.current.memoizedState.isDehydrated && (fr(e, t).flags |= 256),
      (e = Kl(e, t)),
      e !== 2 && ((t = It), (It = r), t !== null && Gs(t)),
      e
    );
  }
  function Gs(e) {
    It === null ? (It = e) : It.push.apply(It, e);
  }
  function Tm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var o = 0; o < r.length; o++) {
            var a = r[o],
              d = a.getSnapshot;
            a = a.value;
            try {
              if (!Xt(d(), a)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null)) ((r.return = t), (t = r));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Qn(e, t) {
    for (
      t &= ~$s, t &= ~$l, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var r = 31 - Kt(t),
        o = 1 << r;
      ((e[r] = -1), (t &= ~o));
    }
  }
  function Of(e) {
    if ((ze & 6) !== 0) throw Error(l(327));
    Ur();
    var t = il(e, 0);
    if ((t & 1) === 0) return (Tt(e, Ke()), null);
    var r = Kl(e, t);
    if (e.tag !== 0 && r === 2) {
      var o = Io(e);
      o !== 0 && ((t = o), (r = Ys(e, o)));
    }
    if (r === 1) throw ((r = Li), fr(e, 0), Qn(e, t), Tt(e, Ke()), r);
    if (r === 6) throw Error(l(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      dr(e, It, Sn),
      Tt(e, Ke()),
      null
    );
  }
  function Ks(e, t) {
    var r = ze;
    ze |= 1;
    try {
      return e(t);
    } finally {
      ((ze = r), ze === 0 && ((Br = Ke() + 500), _l && Fn()));
    }
  }
  function cr(e) {
    $n !== null && $n.tag === 0 && (ze & 6) === 0 && Ur();
    var t = ze;
    ze |= 1;
    var r = Qt.transition,
      o = Ae;
    try {
      if (((Qt.transition = null), (Ae = 1), e)) return e();
    } finally {
      ((Ae = o), (Qt.transition = r), (ze = t), (ze & 6) === 0 && Fn());
    }
  }
  function Xs() {
    ((At = Fr.current), He(Fr));
  }
  function fr(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), im(r)), Je !== null))
      for (r = Je.return; r !== null; ) {
        var o = r;
        switch ((os(o), o.tag)) {
          case 1:
            ((o = o.type.childContextTypes), o != null && xl());
            break;
          case 3:
            (Mr(), He(Ct), He(gt), ks());
            break;
          case 5:
            ys(o);
            break;
          case 4:
            Mr();
            break;
          case 13:
            He(Qe);
            break;
          case 19:
            He(Qe);
            break;
          case 10:
            ds(o.type._context);
            break;
          case 22:
          case 23:
            Xs();
        }
        r = r.return;
      }
    if (
      ((ut = e),
      (Je = e = qn(e.current, null)),
      (ht = At = t),
      (it = 0),
      (Li = null),
      ($s = $l = ur = 0),
      (It = Pi = null),
      or !== null)
    ) {
      for (t = 0; t < or.length; t++)
        if (((r = or[t]), (o = r.interleaved), o !== null)) {
          r.interleaved = null;
          var a = o.next,
            d = r.pending;
          if (d !== null) {
            var y = d.next;
            ((d.next = a), (o.next = y));
          }
          r.pending = o;
        }
      or = null;
    }
    return e;
  }
  function zf(e, t) {
    do {
      var r = Je;
      try {
        if ((fs(), (Ol.current = Al), zl)) {
          for (var o = qe.memoizedState; o !== null; ) {
            var a = o.queue;
            (a !== null && (a.pending = null), (o = o.next));
          }
          zl = !1;
        }
        if (
          ((ar = 0),
          (at = rt = qe = null),
          (Ei = !1),
          (Ni = 0),
          (Hs.current = null),
          r === null || r.return === null)
        ) {
          ((it = 1), (Li = t), (Je = null));
          break;
        }
        e: {
          var d = e,
            y = r.return,
            _ = r,
            E = t;
          if (
            ((t = ht),
            (_.flags |= 32768),
            E !== null && typeof E == 'object' && typeof E.then == 'function')
          ) {
            var P = E,
              U = _,
              H = U.tag;
            if ((U.mode & 1) === 0 && (H === 0 || H === 11 || H === 15)) {
              var B = U.alternate;
              B
                ? ((U.updateQueue = B.updateQueue),
                  (U.memoizedState = B.memoizedState),
                  (U.lanes = B.lanes))
                : ((U.updateQueue = null), (U.memoizedState = null));
            }
            var ee = lf(y);
            if (ee !== null) {
              ((ee.flags &= -257),
                of(ee, y, _, d, t),
                ee.mode & 1 && rf(d, P, t),
                (t = ee),
                (E = P));
              var ie = t.updateQueue;
              if (ie === null) {
                var oe = new Set();
                (oe.add(E), (t.updateQueue = oe));
              } else ie.add(E);
              break e;
            } else {
              if ((t & 1) === 0) {
                (rf(d, P, t), Zs());
                break e;
              }
              E = Error(l(426));
            }
          } else if ($e && _.mode & 1) {
            var Xe = lf(y);
            if (Xe !== null) {
              ((Xe.flags & 65536) === 0 && (Xe.flags |= 256), of(Xe, y, _, d, t), us(Ar(E, _)));
              break e;
            }
          }
          ((d = E = Ar(E, _)),
            it !== 4 && (it = 2),
            Pi === null ? (Pi = [d]) : Pi.push(d),
            (d = y));
          do {
            switch (d.tag) {
              case 3:
                ((d.flags |= 65536), (t &= -t), (d.lanes |= t));
                var T = tf(d, E, t);
                Tc(d, T);
                break e;
              case 1:
                _ = E;
                var N = d.type,
                  b = d.stateNode;
                if (
                  (d.flags & 128) === 0 &&
                  (typeof N.getDerivedStateFromError == 'function' ||
                    (b !== null &&
                      typeof b.componentDidCatch == 'function' &&
                      (Hn === null || !Hn.has(b))))
                ) {
                  ((d.flags |= 65536), (t &= -t), (d.lanes |= t));
                  var Q = nf(d, _, t);
                  Tc(d, Q);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Af(r);
      } catch (se) {
        ((t = se), Je === r && r !== null && (Je = r = r.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Rf() {
    var e = Hl.current;
    return ((Hl.current = Al), e === null ? Al : e);
  }
  function Zs() {
    ((it === 0 || it === 3 || it === 2) && (it = 4),
      ut === null || ((ur & 268435455) === 0 && ($l & 268435455) === 0) || Qn(ut, ht));
  }
  function Kl(e, t) {
    var r = ze;
    ze |= 2;
    var o = Rf();
    (ut !== e || ht !== t) && ((Sn = null), fr(e, t));
    do
      try {
        bm();
        break;
      } catch (a) {
        zf(e, a);
      }
    while (!0);
    if ((fs(), (ze = r), (Hl.current = o), Je !== null)) throw Error(l(261));
    return ((ut = null), (ht = 0), it);
  }
  function bm() {
    for (; Je !== null; ) Mf(Je);
  }
  function jm() {
    for (; Je !== null && !th(); ) Mf(Je);
  }
  function Mf(e) {
    var t = Bf(e.alternate, e, At);
    ((e.memoizedProps = e.pendingProps), t === null ? Af(e) : (Je = t), (Hs.current = null));
  }
  function Af(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Sm(r, t, At)), r !== null)) {
          Je = r;
          return;
        }
      } else {
        if (((r = _m(r, t)), r !== null)) {
          ((r.flags &= 32767), (Je = r));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((it = 6), (Je = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Je = t;
        return;
      }
      Je = t = e;
    } while (t !== null);
    it === 0 && (it = 5);
  }
  function dr(e, t, r) {
    var o = Ae,
      a = Qt.transition;
    try {
      ((Qt.transition = null), (Ae = 1), Lm(e, t, r, o));
    } finally {
      ((Qt.transition = a), (Ae = o));
    }
    return null;
  }
  function Lm(e, t, r, o) {
    do Ur();
    while ($n !== null);
    if ((ze & 6) !== 0) throw Error(l(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(l(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var d = r.lanes | r.childLanes;
    if (
      (fh(e, d),
      e === ut && ((Je = ut = null), (ht = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        Ql ||
        ((Ql = !0),
        Uf(el, function () {
          return (Ur(), null);
        })),
      (d = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || d)
    ) {
      ((d = Qt.transition), (Qt.transition = null));
      var y = Ae;
      Ae = 1;
      var _ = ze;
      ((ze |= 4),
        (Hs.current = null),
        Em(e, r),
        If(r, e),
        Xh(Zo),
        (sl = !!Xo),
        (Zo = Xo = null),
        (e.current = r),
        Nm(r),
        nh(),
        (ze = _),
        (Ae = y),
        (Qt.transition = d));
    } else e.current = r;
    if (
      (Ql && ((Ql = !1), ($n = e), (ql = a)),
      (d = e.pendingLanes),
      d === 0 && (Hn = null),
      lh(r.stateNode),
      Tt(e, Ke()),
      t !== null)
    )
      for (o = e.onRecoverableError, r = 0; r < t.length; r++)
        ((a = t[r]), o(a.value, { componentStack: a.stack, digest: a.digest }));
    if (Wl) throw ((Wl = !1), (e = Qs), (Qs = null), e);
    return (
      (ql & 1) !== 0 && e.tag !== 0 && Ur(),
      (d = e.pendingLanes),
      (d & 1) !== 0 ? (e === qs ? Oi++ : ((Oi = 0), (qs = e))) : (Oi = 0),
      Fn(),
      null
    );
  }
  function Ur() {
    if ($n !== null) {
      var e = Cu(ql),
        t = Qt.transition,
        r = Ae;
      try {
        if (((Qt.transition = null), (Ae = 16 > e ? 16 : e), $n === null)) var o = !1;
        else {
          if (((e = $n), ($n = null), (ql = 0), (ze & 6) !== 0)) throw Error(l(331));
          var a = ze;
          for (ze |= 4, ne = e.current; ne !== null; ) {
            var d = ne,
              y = d.child;
            if ((ne.flags & 16) !== 0) {
              var _ = d.deletions;
              if (_ !== null) {
                for (var E = 0; E < _.length; E++) {
                  var P = _[E];
                  for (ne = P; ne !== null; ) {
                    var U = ne;
                    switch (U.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ji(8, U, d);
                    }
                    var H = U.child;
                    if (H !== null) ((H.return = U), (ne = H));
                    else
                      for (; ne !== null; ) {
                        U = ne;
                        var B = U.sibling,
                          ee = U.return;
                        if ((Sf(U), U === P)) {
                          ne = null;
                          break;
                        }
                        if (B !== null) {
                          ((B.return = ee), (ne = B));
                          break;
                        }
                        ne = ee;
                      }
                  }
                }
                var ie = d.alternate;
                if (ie !== null) {
                  var oe = ie.child;
                  if (oe !== null) {
                    ie.child = null;
                    do {
                      var Xe = oe.sibling;
                      ((oe.sibling = null), (oe = Xe));
                    } while (oe !== null);
                  }
                }
                ne = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && y !== null) ((y.return = d), (ne = y));
            else
              e: for (; ne !== null; ) {
                if (((d = ne), (d.flags & 2048) !== 0))
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ji(9, d, d.return);
                  }
                var T = d.sibling;
                if (T !== null) {
                  ((T.return = d.return), (ne = T));
                  break e;
                }
                ne = d.return;
              }
          }
          var N = e.current;
          for (ne = N; ne !== null; ) {
            y = ne;
            var b = y.child;
            if ((y.subtreeFlags & 2064) !== 0 && b !== null) ((b.return = y), (ne = b));
            else
              e: for (y = N; ne !== null; ) {
                if (((_ = ne), (_.flags & 2048) !== 0))
                  try {
                    switch (_.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Vl(9, _);
                    }
                  } catch (se) {
                    Ge(_, _.return, se);
                  }
                if (_ === y) {
                  ne = null;
                  break e;
                }
                var Q = _.sibling;
                if (Q !== null) {
                  ((Q.return = _.return), (ne = Q));
                  break e;
                }
                ne = _.return;
              }
          }
          if (((ze = a), Fn(), on && typeof on.onPostCommitFiberRoot == 'function'))
            try {
              on.onPostCommitFiberRoot(tl, e);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        ((Ae = r), (Qt.transition = t));
      }
    }
    return !1;
  }
  function Df(e, t, r) {
    ((t = Ar(r, t)),
      (t = tf(e, t, 1)),
      (e = Un(e, t, 1)),
      (t = St()),
      e !== null && (ri(e, 1, t), Tt(e, t)));
  }
  function Ge(e, t, r) {
    if (e.tag === 3) Df(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Df(t, e, r);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof o.componentDidCatch == 'function' && (Hn === null || !Hn.has(o)))
          ) {
            ((e = Ar(r, e)),
              (e = nf(t, e, 1)),
              (t = Un(t, e, 1)),
              (e = St()),
              t !== null && (ri(t, 1, e), Tt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Pm(e, t, r) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (t = St()),
      (e.pingedLanes |= e.suspendedLanes & r),
      ut === e &&
        (ht & r) === r &&
        (it === 4 || (it === 3 && (ht & 130023424) === ht && 500 > Ke() - Ws)
          ? fr(e, 0)
          : ($s |= r)),
      Tt(e, t));
  }
  function Ff(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = rl), (rl <<= 1), (rl & 130023424) === 0 && (rl = 4194304)));
    var r = St();
    ((e = kn(e, t)), e !== null && (ri(e, t, r), Tt(e, r)));
  }
  function Om(e) {
    var t = e.memoizedState,
      r = 0;
    (t !== null && (r = t.retryLane), Ff(e, r));
  }
  function zm(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          a = e.memoizedState;
        a !== null && (r = a.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    (o !== null && o.delete(t), Ff(e, r));
  }
  var Bf;
  Bf = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ct.current) Nt = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return ((Nt = !1), xm(e, t, r));
        Nt = (e.flags & 131072) !== 0;
      }
    else ((Nt = !1), $e && (t.flags & 1048576) !== 0 && vc(t, El, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        (Bl(e, t), (e = t.pendingProps));
        var a = br(t, gt.current);
        (Rr(t, r), (a = Ss(null, t, o, e, a, r)));
        var d = _s();
        return (
          (t.flags |= 1),
          typeof a == 'object' &&
          a !== null &&
          typeof a.render == 'function' &&
          a.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Et(o) ? ((d = !0), Sl(t)) : (d = !1),
              (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
              ms(t),
              (a.updater = Dl),
              (t.stateNode = a),
              (a._reactInternals = t),
              bs(t, o, e, r),
              (t = Os(null, t, o, !0, d, r)))
            : ((t.tag = 0), $e && d && ls(t), xt(null, t, a, r), (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
            (Bl(e, t),
            (e = t.pendingProps),
            (a = o._init),
            (o = a(o._payload)),
            (t.type = o),
            (a = t.tag = Mm(o)),
            (e = Jt(o, e)),
            a)
          ) {
            case 0:
              t = Ps(null, t, o, e, r);
              break e;
            case 1:
              t = df(null, t, o, e, r);
              break e;
            case 11:
              t = sf(null, t, o, e, r);
              break e;
            case 14:
              t = af(null, t, o, Jt(o.type, e), r);
              break e;
          }
          throw Error(l(306, o, ''));
        }
        return t;
      case 0:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Jt(o, a)),
          Ps(e, t, o, a, r)
        );
      case 1:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Jt(o, a)),
          df(e, t, o, a, r)
        );
      case 3:
        e: {
          if ((pf(t), e === null)) throw Error(l(387));
          ((o = t.pendingProps),
            (d = t.memoizedState),
            (a = d.element),
            Ic(e, t),
            Ll(t, o, null, r));
          var y = t.memoizedState;
          if (((o = y.element), d.isDehydrated))
            if (
              ((d = {
                element: o,
                isDehydrated: !1,
                cache: y.cache,
                pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
                transitions: y.transitions,
              }),
              (t.updateQueue.baseState = d),
              (t.memoizedState = d),
              t.flags & 256)
            ) {
              ((a = Ar(Error(l(423)), t)), (t = hf(e, t, o, r, a)));
              break e;
            } else if (o !== a) {
              ((a = Ar(Error(l(424)), t)), (t = hf(e, t, o, r, a)));
              break e;
            } else
              for (
                Mt = Mn(t.stateNode.containerInfo.firstChild),
                  Rt = t,
                  $e = !0,
                  Zt = null,
                  r = Ec(t, null, o, r),
                  t.child = r;
                r;
              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
          else {
            if ((Pr(), o === a)) {
              t = xn(e, t, r);
              break e;
            }
            xt(e, t, o, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          jc(t),
          e === null && as(t),
          (o = t.type),
          (a = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (y = a.children),
          Jo(o, a) ? (y = null) : d !== null && Jo(o, d) && (t.flags |= 32),
          ff(e, t),
          xt(e, t, y, r),
          t.child
        );
      case 6:
        return (e === null && as(t), null);
      case 13:
        return mf(e, t, r);
      case 4:
        return (
          gs(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = Or(t, null, o, r)) : xt(e, t, o, r),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Jt(o, a)),
          sf(e, t, o, a, r)
        );
      case 7:
        return (xt(e, t, t.pendingProps, r), t.child);
      case 8:
        return (xt(e, t, t.pendingProps.children, r), t.child);
      case 12:
        return (xt(e, t, t.pendingProps.children, r), t.child);
      case 10:
        e: {
          if (
            ((o = t.type._context),
            (a = t.pendingProps),
            (d = t.memoizedProps),
            (y = a.value),
            Fe(Tl, o._currentValue),
            (o._currentValue = y),
            d !== null)
          )
            if (Xt(d.value, y)) {
              if (d.children === a.children && !Ct.current) {
                t = xn(e, t, r);
                break e;
              }
            } else
              for (d = t.child, d !== null && (d.return = t); d !== null; ) {
                var _ = d.dependencies;
                if (_ !== null) {
                  y = d.child;
                  for (var E = _.firstContext; E !== null; ) {
                    if (E.context === o) {
                      if (d.tag === 1) {
                        ((E = wn(-1, r & -r)), (E.tag = 2));
                        var P = d.updateQueue;
                        if (P !== null) {
                          P = P.shared;
                          var U = P.pending;
                          (U === null ? (E.next = E) : ((E.next = U.next), (U.next = E)),
                            (P.pending = E));
                        }
                      }
                      ((d.lanes |= r),
                        (E = d.alternate),
                        E !== null && (E.lanes |= r),
                        ps(d.return, r, t),
                        (_.lanes |= r));
                      break;
                    }
                    E = E.next;
                  }
                } else if (d.tag === 10) y = d.type === t.type ? null : d.child;
                else if (d.tag === 18) {
                  if (((y = d.return), y === null)) throw Error(l(341));
                  ((y.lanes |= r),
                    (_ = y.alternate),
                    _ !== null && (_.lanes |= r),
                    ps(y, r, t),
                    (y = d.sibling));
                } else y = d.child;
                if (y !== null) y.return = d;
                else
                  for (y = d; y !== null; ) {
                    if (y === t) {
                      y = null;
                      break;
                    }
                    if (((d = y.sibling), d !== null)) {
                      ((d.return = y.return), (y = d));
                      break;
                    }
                    y = y.return;
                  }
                d = y;
              }
          (xt(e, t, a.children, r), (t = t.child));
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (o = t.pendingProps.children),
          Rr(t, r),
          (a = $t(a)),
          (o = o(a)),
          (t.flags |= 1),
          xt(e, t, o, r),
          t.child
        );
      case 14:
        return ((o = t.type), (a = Jt(o, t.pendingProps)), (a = Jt(o.type, a)), af(e, t, o, a, r));
      case 15:
        return uf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Jt(o, a)),
          Bl(e, t),
          (t.tag = 1),
          Et(o) ? ((e = !0), Sl(t)) : (e = !1),
          Rr(t, r),
          Jc(t, o, a),
          bs(t, o, a, r),
          Os(null, t, o, !0, e, r)
        );
      case 19:
        return yf(e, t, r);
      case 22:
        return cf(e, t, r);
    }
    throw Error(l(156, t.tag));
  };
  function Uf(e, t) {
    return ku(e, t);
  }
  function Rm(e, t, r, o) {
    ((this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function qt(e, t, r, o) {
    return new Rm(e, t, r, o);
  }
  function Js(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Mm(e) {
    if (typeof e == 'function') return Js(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === X)) return 11;
      if (e === q) return 14;
    }
    return 2;
  }
  function qn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = qt(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function Xl(e, t, r, o, a, d) {
    var y = 2;
    if (((o = e), typeof e == 'function')) Js(e) && (y = 1);
    else if (typeof e == 'string') y = 5;
    else
      e: switch (e) {
        case J:
          return pr(r.children, a, d, t);
        case ve:
          ((y = 8), (a |= 8));
          break;
        case Se:
          return ((e = qt(12, r, t, a | 2)), (e.elementType = Se), (e.lanes = d), e);
        case ke:
          return ((e = qt(13, r, t, a)), (e.elementType = ke), (e.lanes = d), e);
        case te:
          return ((e = qt(19, r, t, a)), (e.elementType = te), (e.lanes = d), e);
        case ge:
          return Zl(r, a, d, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Ce:
                y = 10;
                break e;
              case re:
                y = 9;
                break e;
              case X:
                y = 11;
                break e;
              case q:
                y = 14;
                break e;
              case me:
                ((y = 16), (o = null));
                break e;
            }
          throw Error(l(130, e == null ? e : typeof e, ''));
      }
    return ((t = qt(y, r, t, a)), (t.elementType = e), (t.type = o), (t.lanes = d), t);
  }
  function pr(e, t, r, o) {
    return ((e = qt(7, e, o, t)), (e.lanes = r), e);
  }
  function Zl(e, t, r, o) {
    return (
      (e = qt(22, e, o, t)),
      (e.elementType = ge),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ea(e, t, r) {
    return ((e = qt(6, e, null, t)), (e.lanes = r), e);
  }
  function ta(e, t, r) {
    return (
      (t = qt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Am(e, t, r, o, a) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = To(0)),
      (this.expirationTimes = To(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = To(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null));
  }
  function na(e, t, r, o, a, d, y, _, E) {
    return (
      (e = new Am(e, t, r, _, E)),
      t === 1 ? ((t = 1), d === !0 && (t |= 8)) : (t = 0),
      (d = qt(3, null, null, t)),
      (e.current = d),
      (d.stateNode = e),
      (d.memoizedState = {
        element: o,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ms(d),
      e
    );
  }
  function Dm(e, t, r) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: z,
      key: o == null ? null : '' + o,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function Vf(e) {
    if (!e) return Dn;
    e = e._reactInternals;
    e: {
      if (tr(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Et(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (Et(r)) return mc(e, r, t);
    }
    return t;
  }
  function Hf(e, t, r, o, a, d, y, _, E) {
    return (
      (e = na(r, o, !0, e, a, d, y, _, E)),
      (e.context = Vf(null)),
      (r = e.current),
      (o = St()),
      (a = Wn(r)),
      (d = wn(o, a)),
      (d.callback = t ?? null),
      Un(r, d, a),
      (e.current.lanes = a),
      ri(e, a, o),
      Tt(e, o),
      e
    );
  }
  function Jl(e, t, r, o) {
    var a = t.current,
      d = St(),
      y = Wn(a);
    return (
      (r = Vf(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = wn(d, y)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = Un(a, t, y)),
      e !== null && (nn(e, a, y, d), jl(e, a, y)),
      y
    );
  }
  function eo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function $f(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function ra(e, t) {
    ($f(e, t), (e = e.alternate) && $f(e, t));
  }
  function Fm() {
    return null;
  }
  var Wf =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ia(e) {
    this._internalRoot = e;
  }
  ((to.prototype.render = ia.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(l(409));
      Jl(e, t, null, null);
    }),
    (to.prototype.unmount = ia.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (cr(function () {
            Jl(null, e, null, null);
          }),
            (t[mn] = null));
        }
      }));
  function to(e) {
    this._internalRoot = e;
  }
  to.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Iu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < On.length && t !== 0 && t < On[r].priority; r++);
      (On.splice(r, 0, e), r === 0 && ju(e));
    }
  };
  function la(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function no(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Qf() {}
  function Bm(e, t, r, o, a) {
    if (a) {
      if (typeof o == 'function') {
        var d = o;
        o = function () {
          var P = eo(y);
          d.call(P);
        };
      }
      var y = Hf(t, o, e, 0, null, !1, !1, '', Qf);
      return (
        (e._reactRootContainer = y),
        (e[mn] = y.current),
        yi(e.nodeType === 8 ? e.parentNode : e),
        cr(),
        y
      );
    }
    for (; (a = e.lastChild); ) e.removeChild(a);
    if (typeof o == 'function') {
      var _ = o;
      o = function () {
        var P = eo(E);
        _.call(P);
      };
    }
    var E = na(e, 0, !1, null, null, !1, !1, '', Qf);
    return (
      (e._reactRootContainer = E),
      (e[mn] = E.current),
      yi(e.nodeType === 8 ? e.parentNode : e),
      cr(function () {
        Jl(t, E, r, o);
      }),
      E
    );
  }
  function ro(e, t, r, o, a) {
    var d = r._reactRootContainer;
    if (d) {
      var y = d;
      if (typeof a == 'function') {
        var _ = a;
        a = function () {
          var E = eo(y);
          _.call(E);
        };
      }
      Jl(t, y, e, a);
    } else y = Bm(r, t, e, a, o);
    return eo(y);
  }
  ((Eu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = ni(t.pendingLanes);
          r !== 0 && (bo(t, r | 1), Tt(t, Ke()), (ze & 6) === 0 && ((Br = Ke() + 500), Fn()));
        }
        break;
      case 13:
        (cr(function () {
          var o = kn(e, 1);
          if (o !== null) {
            var a = St();
            nn(o, e, 1, a);
          }
        }),
          ra(e, 1));
    }
  }),
    (jo = function (e) {
      if (e.tag === 13) {
        var t = kn(e, 134217728);
        if (t !== null) {
          var r = St();
          nn(t, e, 134217728, r);
        }
        ra(e, 134217728);
      }
    }),
    (Nu = function (e) {
      if (e.tag === 13) {
        var t = Wn(e),
          r = kn(e, t);
        if (r !== null) {
          var o = St();
          nn(r, e, t, o);
        }
        ra(e, t);
      }
    }),
    (Iu = function () {
      return Ae;
    }),
    (Tu = function (e, t) {
      var r = Ae;
      try {
        return ((Ae = e), t());
      } finally {
        Ae = r;
      }
    }),
    (So = function (e, t, r) {
      switch (t) {
        case 'input':
          if ((Bt(e, r), (t = r.name), r.type === 'radio' && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
                t = 0;
              t < r.length;
              t++
            ) {
              var o = r[t];
              if (o !== e && o.form === e.form) {
                var a = wl(o);
                if (!a) throw Error(l(90));
                (K(o), Bt(o, a));
              }
            }
          }
          break;
        case 'textarea':
          Ki(e, r);
          break;
        case 'select':
          ((t = r.value), t != null && Tn(e, !!r.multiple, t, !1));
      }
    }),
    (du = Ks),
    (pu = cr));
  var Um = { usingClientEntryPoint: !1, Events: [wi, Ir, wl, cu, fu, Ks] },
    zi = {
      findFiberByHostInstance: nr,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    Vm = {
      bundleType: zi.bundleType,
      version: zi.version,
      rendererPackageName: zi.rendererPackageName,
      rendererConfig: zi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: V.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = yu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: zi.findFiberByHostInstance || Fm,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var io = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!io.isDisabled && io.supportsFiber)
      try {
        ((tl = io.inject(Vm)), (on = io));
      } catch {}
  }
  return (
    (bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Um),
    (bt.createPortal = function (e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!la(t)) throw Error(l(200));
      return Dm(e, t, null, r);
    }),
    (bt.createRoot = function (e, t) {
      if (!la(e)) throw Error(l(299));
      var r = !1,
        o = '',
        a = Wf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = na(e, 1, !1, null, null, r, !1, o, a)),
        (e[mn] = t.current),
        yi(e.nodeType === 8 ? e.parentNode : e),
        new ia(t)
      );
    }),
    (bt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(l(188))
          : ((e = Object.keys(e).join(',')), Error(l(268, e)));
      return ((e = yu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (bt.flushSync = function (e) {
      return cr(e);
    }),
    (bt.hydrate = function (e, t, r) {
      if (!no(t)) throw Error(l(200));
      return ro(null, e, t, !0, r);
    }),
    (bt.hydrateRoot = function (e, t, r) {
      if (!la(e)) throw Error(l(405));
      var o = (r != null && r.hydratedSources) || null,
        a = !1,
        d = '',
        y = Wf;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (d = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (y = r.onRecoverableError)),
        (t = Hf(t, null, e, 1, r ?? null, a, !1, d, y)),
        (e[mn] = t.current),
        yi(e),
        o)
      )
        for (e = 0; e < o.length; e++)
          ((r = o[e]),
            (a = r._getVersion),
            (a = a(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, a])
              : t.mutableSourceEagerHydrationData.push(r, a));
      return new to(t);
    }),
    (bt.render = function (e, t, r) {
      if (!no(t)) throw Error(l(200));
      return ro(null, e, t, !1, r);
    }),
    (bt.unmountComponentAtNode = function (e) {
      if (!no(e)) throw Error(l(40));
      return e._reactRootContainer
        ? (cr(function () {
            ro(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[mn] = null));
            });
          }),
          !0)
        : !1;
    }),
    (bt.unstable_batchedUpdates = Ks),
    (bt.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!no(r)) throw Error(l(200));
      if (e == null || e._reactInternals === void 0) throw Error(l(38));
      return ro(e, t, r, !1, o);
    }),
    (bt.version = '18.3.1-next-f1338f8080-20240426'),
    bt
  );
}
var ed;
function Km() {
  if (ed) return aa.exports;
  ed = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return (n(), (aa.exports = Gm()), aa.exports);
}
var td;
function Xm() {
  if (td) return lo;
  td = 1;
  var n = Km();
  return ((lo.createRoot = n.createRoot), (lo.hydrateRoot = n.hydrateRoot), lo);
}
var Zm = Xm();
const Jm = JSON.parse(
    `[{"id":"disability","type":"credence","worldviewDimension":{"appliesWhen":"preventsDisability","applyAs":"multiplier","options":{"livesOnly":0,"livesMore":0.003,"equal":0.0172,"disabilityMore":0.086}},"categoryLabel":"Disability Weights","icon":"heart-pulse","previewText":"Disability vs. saving lives","heading":"How much do you value saving Years of Life Lost to Disability versus Years of Life Lost due to death?","info":"Some projects relieve suffering from non-lethal diseases or disabilities. We can measure the impact of these diseases in terms of how much worse one's quality of life is with the disability compared to full health. If we alleviate that disability, we can estimate how many years of health we are restoring.\\n\\nThis is measured by Disability Adjusted Life Years (DALYs). Suppose living for a year with a particular serious disability means you lose 50% of your quality of life. If we relieve that disease for a year, that's saving ½ DALY. Estimates of how much a disease decreases quality of life typically come from the [Global Burden of Disease](https://www.healthdata.org/research-analysis/gbd). For example, GiveWell estimates that clubfoot has a disability weight of around 0.2. If we treat an infant and prevent them from suffering from 60 years of clubfoot, this intervention will save 12 DALYs. Severe multiple sclerosis is estimated to have a disability weight of 0.7. Preventing severe MS for 10 years would deliver 7 DALYs.\\n\\nSuppose that living with blindness reduces someone's quality of life by 25%. You could either choose to cure blindness in a group of people, restoring them to full health for some number of years. Or you could save a child's life, giving them 50 extra years to live. How many years of blindness would you need to relieve to make it as good as saving the one child's life?","context":"A person suffering from a disease or disability has their quality of life reduced. We can measure this in terms of the Years of Life Lost to Disability (YLD). For example, if I live with a disease that reduces my quality of life by 25% for 4 years, that totals 1 Year Lost to Disability. If someone dies, we can measure their loss in terms of Years of Life Lost (YLL) due to death.","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Disability Weights","options":[{"key":"livesOnly","label":"Saving lives only","description":"I only care about saving years of life due to death","info":"","panelLabel":"Lives only","panelShort":"0"},{"key":"livesMore","label":"More weight on saving lives","description":"I put 5x as much value on saving a year of life lost to death than a year of life lost to disability","info":"","panelLabel":"5x lives","panelShort":"5×L"},{"key":"equal","label":"Equal weight","description":"I value a year of life lost equally, whether it is due to death or disability","info":"","panelLabel":"Equal","panelShort":"="},{"key":"disabilityMore","label":"More weight on relieving disability","description":"I put 5x as much value on saving a year of life lost to disability than a year of life lost to death","info":"","panelLabel":"5x disability","panelShort":"5×D"}]},{"id":"income","type":"credence","worldviewDimension":{"appliesWhen":"increasesIncome","applyAs":"multiplier","options":{"livesOnly":0,"lives10x":0.0017,"lives2x":0.0086,"equal":0.0172}},"categoryLabel":"Income Weights","icon":"banknote","previewText":"Income vs. saving lives","heading":"How much do you value doubling someone's income for a year compared to adding one year to someone's life?","info":"Some projects have the effect of increasing people's income. While this may have indirect effects on health or lifespan, here we are just measuring the increase in the resources people have (or, alternatively, in their levels of consumption). Typically, this is measured in units of how many people had their income doubled for a single year.","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Income Weights","options":[{"key":"livesOnly","label":"Saving lives only","description":"I only care about adding years of life","info":"","panelLabel":"Lives only","panelShort":"0"},{"key":"lives10x","label":"Much more weight on a year of life","description":"I put 10x as much value on a year of life compared to a year of doubled income","info":"","panelLabel":"10x lives","panelShort":"10×"},{"key":"lives2x","label":"Some more weight on a year of life","description":"I put 2x as much value on a year of life compared to a year of doubled income","info":"","panelLabel":"2x lives","panelShort":"2×"},{"key":"equal","label":"Equal weight","description":"I put the same value on a year of life compared to a year of doubled income","info":"","panelLabel":"Equal","panelShort":"="}]},{"id":"chicken","type":"credence","worldviewDimension":{"appliesWhen":"helpsChickens","applyAs":"multiplier","options":{"humanEqual":0.0172,"human10x":0.00172,"human100x":0.000172,"human1000x":0.0000172,"noValue":0}},"categoryLabel":"Animal Welfare","icon":"bird","previewText":"Chicken vs. human welfare","heading":"Which of these positions best describes your view?","info":"It can be difficult to compare the value of helping humans versus helping animals. For now, let's consider animals that most people believe are capable of suffering (such as pigs, dogs, or cows) and use chickens as a test case.\\n\\nThere are some conditions that decrease chickens' quality of life, which we can measure in terms of chicken Disability Adjusted Life Years. For example, suppose living in hurtful pain for a year reduces a chicken's quality of life by 25%. Therefore, if we improve a chicken's living conditions to relieve this suffering, this would result in a gain of 0.25 chicken DALYs. Likewise, some human conditions reduce a human's quality of life by 25%, so relieving this for a year would result in 0.25 human DALYs.\\n\\nHow much do you value chicken DALYs versus human DALYs? In other words, how much do you care about a quality of life reduction in chickens compared to a similar proportional quality of life reduction in humans? Note that there are two different reasons you might give chicken DALYs lower weight. Perhaps you think a 25% reduction in a chicken's quality of life involves less suffering (or loss of meaningful experiences) than a 25% reduction in a human's quality of life. Alternatively, you could think the amount of suffering is the same, but you think it is morally more important to alleviate human suffering.","context":"How much do you value improving the welfare of chickens (and other large, familiar farmed animals like pigs and cows), compared to how much you value improving the welfare of humans?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Chicken Weights","options":[{"key":"humanEqual","label":"Equal to humans","description":"I treat a year of disability in a chicken the same as a year of disability in a human","info":"","panelLabel":"Equal","panelShort":"="},{"key":"human10x","label":"10× less than humans","description":"I value a human year of disability about 10x as much as a year of disability in a chicken","info":"","panelLabel":"10× less","panelShort":"10×"},{"key":"human100x","label":"100× less than humans","description":"I value a human year of disability about 100x as much as a year of disability in a chicken","info":"","panelLabel":"100× less","panelShort":"100×"},{"key":"human1000x","label":"1000× less than humans","description":"I value a human year of disability about 1000x as much as a year of disability in a chicken","info":"","panelLabel":"1000× less","panelShort":"1k×"},{"key":"noValue","label":"No value","description":"I do not value chicken welfare","info":"","panelLabel":"None","panelShort":"0"}]},{"id":"shrimp","type":"credence","worldviewDimension":{"appliesWhen":"helpsShrimp","applyAs":"multiplier","options":{"humanEqual":0.0172,"human100x":0.000172,"human1000x":0.0000172,"human10000x":0.00000172,"noValue":0}},"categoryLabel":"Animal Welfare","icon":"shell","previewText":"Shrimp vs. human welfare","heading":"Which of these positions best describes your view?","info":"It can be difficult to compare the value of helping humans versus helping animals. This is even more difficult when we are uncertain whether the animals even have conscious experiences or what their experiences are like. For now, let's consider farmed invertebrates (such as shrimp or insects) and use shrimp as a test case.\\n\\nShrimp may experience conditions that reduce their quality of life. Assuming they are sentient, we can characterize their loss of quality of life via a shrimp DALY. How much do you value shrimp DALYs versus human DALYs? Note that there are three different reasons you might give shrimp DALYs lower weight. Perhaps you think a 25% reduction in a shrimp's quality of life involves less suffering (or loss of meaningful experiences) than a 25% reduction in a human's quality of life. Alternatively, you could think the amount of suffering is the same, but you think it is morally more important to alleviate human suffering. Lastly, you could doubt that shrimp are sentient and therefore doubt that they can suffer.","context":"How much do you value improving the welfare of shrimp (and other small, less understood farmed invertebrates like insects), compared to how much you value improving the welfare of humans?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Shrimp Weights","options":[{"key":"humanEqual","label":"Equal to humans","description":"I treat a year of disability in shrimp the same as a year of disability in a human","info":"","panelLabel":"Equal","panelShort":"="},{"key":"human100x","label":"100× less than humans","description":"I value a human year of disability about 100x as much as a year of disability in a shrimp","info":"","panelLabel":"100× less","panelShort":"100×"},{"key":"human1000x","label":"1000× less than humans","description":"I value a human year of disability about 1000x as much as a year of disability in a shrimp","info":"","panelLabel":"1000× less","panelShort":"1k×"},{"key":"human10000x","label":"10,000× less than humans","description":"I value a human year of disability about 10,000x as much as a year of disability in a shrimp","info":"","panelLabel":"10k× less","panelShort":"10k×"},{"key":"noValue","label":"No value","description":"I do not value shrimp welfare","info":"","panelLabel":"None","panelShort":"0"}]},{"id":"timeframes","type":"credence","worldviewDimension":{"appliesTo":"timeframe","applyAs":"multiplier","options":{"equalAll":{"short":1,"medium":1,"long":1},"prioritizeNearer":{"short":1,"medium":0.5,"long":0.2},"discountDistant":{"short":1,"medium":0.2,"long":0},"shortTermOnly":{"short":1,"medium":0,"long":0}}},"categoryLabel":"Time Preferences","icon":"clock","previewText":"Short vs. long-term effects","heading":"Which of these positions best describes your view when evaluating the effects of different projects?","info":"A project's effects play out over different timelines. Some effects, like malaria treatments, might occur right away. Others, like investments in education or infrastructure, could take years to arise. Other effects will arise in the longer run future.\\n\\nWhen you are evaluating projects, do you give extra weight to effects that will happen sooner (in the next decade) rather than later (decades or even centuries in the future)?\\n\\nThere are several reasons why you might give extra weight to near-term effects. First, you might think it's more morally important to help individuals that currently exist or will exist very soon than it is to help individuals that will potentially exist in the future. Alternatively, even if you think all beings matter equally, regardless of time, you might be so uncertain about a project's long-term effects that you'd rather focus on the more predictable near future. Lastly, you might have beliefs about how the future will go (e.g. that AI will change everything in 10 years) that make you want to just focus on projects whose effects will happen soon.","context":"Consider the following timeframes:\\n- **Short-term:** before 2035\\n- **Medium-term:** from 2035-2100\\n- **Long-term:** after 2100","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Time Preferences","options":[{"key":"equalAll","label":"Equal across all timeframes","description":"I only care about how much good I could do, regardless of when it happens","info":"","panelLabel":"Equal","panelShort":"="},{"key":"prioritizeNearer","label":"Prioritize nearer term","description":"I care about the long-term, but put more priority on medium-term and even more on short-term","info":"","panelLabel":"Nearer","panelShort":"→"},{"key":"discountDistant","label":"Discount the distant future","description":"I do not care about the distant future; I care a bit about medium-term but prioritize short-term","info":"","panelLabel":"Discount","panelShort":"↓"},{"key":"shortTermOnly","label":"Short-term only","description":"I only care about effects in the short-term","info":"","panelLabel":"Short","panelShort":"ST"}]},{"id":"xrisk","type":"credence","worldviewDimension":{"appliesWhen":"isNonXRisk","applyAs":"multiplier","options":{"evaluateSame":1,"discount10":0.9,"discount50":0.5,"xriskOnly":0}},"categoryLabel":"Existential Risk","icon":"alert-triangle","previewText":"Existential risk priority","heading":"Do you want to treat near-term existential risk mitigation projects differently than other projects?","info":"Some projects aim to reduce the chances of an event that poses existential or catastrophic risk (such as an engineered pandemic or AI takeover). If an event like this occurs, then it could severely mitigate the beneficial effects of other kinds of philanthropic projects (such as global health interventions). This can make it hard to compare the value of existential risk mitigation to the value of other projects.\\n\\nIf you think there is a high chance of a catastrophic risk in the near future (say, the next 10 years), then you may think that we need to act now to try to reduce these threats. You may care a lot about the longer-run future and what the world is like decades from now, but you want to prioritize actions now to ensure that humanity is around to enjoy that future.","context":"How much do you want to prioritize efforts to mitigate near-term existential risks which demand action in the next several years, compared to other kinds of projects you might fund?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"X-Risk Priority","options":[{"key":"evaluateSame","label":"Evaluate the same way","description":"I want to evaluate x-risk projects the same way I evaluate all other projects","info":"","panelLabel":"Same","panelShort":"="},{"key":"discount10","label":"Discount other projects somewhat","description":"I think there's about a 10% probability that an existential risk in the next decade renders other projects useless","info":"","panelLabel":"10% risk","panelShort":"10%"},{"key":"discount50","label":"Discount other projects greatly","description":"I think there's about a 50% probability that an existential risk in the next decade renders other projects useless","info":"","panelLabel":"50% risk","panelShort":"50%"},{"key":"xriskOnly","label":"Only x-risk reduction","description":"I only care about reducing near-term existential risk","info":"","panelLabel":"X-risk only","panelShort":"X"}]}]`
  ),
  qd = { questions: Jm },
  eg = 'extreme',
  tg = {
    blindnessPrevention: {
      name: 'Blindness Prevention',
      color: '#5eb3d4',
      points: 100,
      scaleFactor: 1,
      preventsDisability: !0,
      increasesIncome: !1,
      helpsChickens: !1,
      helpsShrimp: !1,
      timeframe: 'short',
      isNonXRisk: !0,
    },
    basicIncome: {
      name: 'Basic Income',
      color: '#81b29a',
      points: 100,
      scaleFactor: 1,
      preventsDisability: !1,
      increasesIncome: !0,
      helpsChickens: !1,
      helpsShrimp: !1,
      timeframe: 'short',
      isNonXRisk: !0,
    },
    chickenWelfare: {
      name: 'Chicken Welfare',
      color: '#f4a261',
      points: 100,
      scaleFactor: 100,
      preventsDisability: !1,
      increasesIncome: !1,
      helpsChickens: !0,
      helpsShrimp: !1,
      timeframe: 'short',
      isNonXRisk: !0,
    },
    shrimpWelfare: {
      name: 'Shrimp Welfare',
      color: '#e76f51',
      points: 100,
      scaleFactor: 1e3,
      preventsDisability: !1,
      increasesIncome: !1,
      helpsChickens: !1,
      helpsShrimp: !0,
      timeframe: 'short',
      isNonXRisk: !0,
    },
    aiSafety: {
      name: 'AI Safety Research',
      color: '#9b5de5',
      points: 1,
      scaleFactor: 0.9,
      preventsDisability: !1,
      increasesIncome: !1,
      helpsChickens: !1,
      helpsShrimp: !1,
      timeframe: 'long',
      isNonXRisk: !1,
    },
    pandemicPrevention: {
      name: 'Pandemic Prevention',
      color: '#00b4d8',
      points: 1,
      scaleFactor: 0.8,
      preventsDisability: !1,
      increasesIncome: !1,
      helpsChickens: !1,
      helpsShrimp: !1,
      timeframe: 'short',
      isNonXRisk: !1,
    },
  },
  ng = { livesOnly: 25, livesMore: 25, equal: 25, disabilityMore: 25 },
  $i = { diminishingReturns: eg, causes: tg, defaultCredences: ng },
  rg = {
    resetButton: !1,
    sliderLock: !0,
    shareResults: !1,
    multipleWorldviews: !1,
    moralMarketplace: !1,
  },
  ig = {
    order: ['mergedFavorites', 'maxEV', 'parliament', 'maximin'],
    showMergedFavorites: !0,
    showMaxEV: !0,
    showParliament: !1,
    showMaximin: !1,
    sideBySideComparison: !0,
  },
  Nn = { ui: rg, calculations: ig },
  Yr = {
    SESSION_ID: 'quiz_session_id',
    QUIZ_STATE: 'quiz_state',
    SKIP_CONFLICT: 'quiz_skip_conflict',
  },
  Yd = 3;
function lg() {
  let n = sessionStorage.getItem(Yr.SESSION_ID);
  return (n || ((n = crypto.randomUUID()), sessionStorage.setItem(Yr.SESSION_ID, n)), n);
}
function og(n) {
  const { currentStep: i, worldviews: l, activeWorldviewId: s, selectedCalculations: u } = n,
    c = {};
  for (const [p, h] of Object.entries(l)) {
    const m = {};
    for (const [g, v] of Object.entries(h.questions))
      m[g] = {
        credences: v.credences,
        originalCredences: v.originalCredences,
        inputMode: v.inputMode,
        lockedKey: v.lockedKey,
      };
    c[p] = { questions: m };
  }
  const f = {
    version: Yd,
    state: { currentStep: i, worldviews: c, activeWorldviewId: s, selectedCalculations: u },
  };
  sessionStorage.setItem(Yr.QUIZ_STATE, JSON.stringify(f));
}
function fa() {
  const n = sessionStorage.getItem(Yr.QUIZ_STATE);
  if (!n) return null;
  try {
    const i = JSON.parse(n);
    return i.version !== Yd ? (po(), null) : i.state;
  } catch {
    return (po(), null);
  }
}
function po() {
  sessionStorage.removeItem(Yr.QUIZ_STATE);
}
function sg() {
  sessionStorage.setItem(Yr.SKIP_CONFLICT, 'true');
}
function da() {
  window.location.hash &&
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
const _n = 'rgba(255, 255, 255, 0.8)',
  nd = { default: [_n, _n, _n], selection: [_n, _n, _n], credence: [_n, _n, _n] },
  ag = 'rgba(255, 255, 255, 0.7)',
  Gd = { OPTIONS: 'options' },
  _t = {
    DEFAULT: 'default',
    SELECTION: 'selection',
    CREDENCE: 'credence',
    INTERMISSION: 'intermission',
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ug = (n) => n.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  Kd = (...n) =>
    n
      .filter((i, l, s) => !!i && i.trim() !== '' && s.indexOf(i) === l)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var cg = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fg = G.forwardRef(
  (
    {
      color: n = 'currentColor',
      size: i = 24,
      strokeWidth: l = 2,
      absoluteStrokeWidth: s,
      className: u = '',
      children: c,
      iconNode: f,
      ...p
    },
    h
  ) =>
    G.createElement(
      'svg',
      {
        ref: h,
        ...cg,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: s ? (Number(l) * 24) / Number(i) : l,
        className: Kd('lucide', u),
        ...p,
      },
      [...f.map(([m, g]) => G.createElement(m, g)), ...(Array.isArray(c) ? c : [c])]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const st = (n, i) => {
  const l = G.forwardRef(({ className: s, ...u }, c) =>
    G.createElement(fg, { ref: c, iconNode: i, className: Kd(`lucide-${ug(n)}`, s), ...u })
  );
  return ((l.displayName = `${n}`), l);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dg = st('Building2', [
  ['path', { d: 'M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z', key: '1b4qmf' }],
  ['path', { d: 'M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2', key: 'i71pzd' }],
  ['path', { d: 'M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2', key: '10jefs' }],
  ['path', { d: 'M10 6h4', key: '1itunk' }],
  ['path', { d: 'M10 10h4', key: 'tcdvrf' }],
  ['path', { d: 'M10 14h4', key: 'kelpxr' }],
  ['path', { d: 'M10 18h4', key: '1ulq68' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pg = st('ChartColumn', [
  ['path', { d: 'M3 3v16a2 2 0 0 0 2 2h16', key: 'c24i48' }],
  ['path', { d: 'M18 17V9', key: '2bz60n' }],
  ['path', { d: 'M13 17V5', key: '1frdt8' }],
  ['path', { d: 'M8 17v-3', key: '17ska0' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xd = st('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hg = st('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mg = st('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zd = st('CircleHelp', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gg = st('ExternalLink', [
  ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
  ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
  ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yg = st('Handshake', [
  ['path', { d: 'm11 17 2 2a1 1 0 1 0 3-3', key: 'efffak' }],
  [
    'path',
    {
      d: 'm14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4',
      key: '9pr0kb',
    },
  ],
  ['path', { d: 'm21 3 1 11h-2', key: '1tisrp' }],
  ['path', { d: 'M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3', key: '1uvwmv' }],
  ['path', { d: 'M3 4h8', key: '1ep09j' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vg = st('Hourglass', [
  ['path', { d: 'M5 22h14', key: 'ehvnwv' }],
  ['path', { d: 'M5 2h14', key: 'pdyrp9' }],
  [
    'path',
    {
      d: 'M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22',
      key: '1d314k',
    },
  ],
  [
    'path',
    { d: 'M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2', key: '1vvvr6' },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kg = st('Info', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M12 16v-4', key: '1dtifu' }],
  ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jd = st('Lock', [
  ['rect', { width: '18', height: '11', x: '3', y: '11', rx: '2', ry: '2', key: '1w4ew1' }],
  ['path', { d: 'M7 11V7a5 5 0 0 1 10 0v4', key: 'fwvmzm' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wg = st('Microscope', [
  ['path', { d: 'M6 18h8', key: '1borvv' }],
  ['path', { d: 'M3 22h18', key: '8prr45' }],
  ['path', { d: 'M14 22a7 7 0 1 0 0-14h-1', key: '1jwaiy' }],
  ['path', { d: 'M9 14h2', key: '197e7h' }],
  ['path', { d: 'M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z', key: '1bmzmy' }],
  ['path', { d: 'M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3', key: '1drr47' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xg = st('PawPrint', [
  ['circle', { cx: '11', cy: '4', r: '2', key: 'vol9p0' }],
  ['circle', { cx: '18', cy: '8', r: '2', key: '17gozi' }],
  ['circle', { cx: '20', cy: '16', r: '2', key: '1v9bxh' }],
  [
    'path',
    {
      d: 'M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z',
      key: '1ydw1z',
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sg = st('Pencil', [
  [
    'path',
    {
      d: 'M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z',
      key: '1a8usu',
    },
  ],
  ['path', { d: 'm15 5 4 4', key: '1mk7zo' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ta = st('RotateCcw', [
  ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
  ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _g = st('Scale', [
  ['path', { d: 'm16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z', key: '7g6ntu' }],
  ['path', { d: 'm2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z', key: 'ijws7r' }],
  ['path', { d: 'M7 21h10', key: '1b0cd5' }],
  ['path', { d: 'M12 3v18', key: '108xh3' }],
  ['path', { d: 'M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2', key: '3gwbw2' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cg = st('SlidersVertical', [
  ['line', { x1: '4', x2: '4', y1: '21', y2: '14', key: '1p332r' }],
  ['line', { x1: '4', x2: '4', y1: '10', y2: '3', key: 'gb41h5' }],
  ['line', { x1: '12', x2: '12', y1: '21', y2: '12', key: 'hf2csr' }],
  ['line', { x1: '12', x2: '12', y1: '8', y2: '3', key: '1kfi7u' }],
  ['line', { x1: '20', x2: '20', y1: '21', y2: '16', key: '1lhrwl' }],
  ['line', { x1: '20', x2: '20', y1: '12', y2: '3', key: '16vvfq' }],
  ['line', { x1: '2', x2: '6', y1: '14', y2: '14', key: '1uebub' }],
  ['line', { x1: '10', x2: '14', y1: '8', y2: '8', key: '1yglbp' }],
  ['line', { x1: '18', x2: '22', y1: '16', y2: '16', key: '1jxqpz' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Eg = st('Target', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['circle', { cx: '12', cy: '12', r: '6', key: '1vlfrh' }],
  ['circle', { cx: '12', cy: '12', r: '2', key: '1c9p78' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ng = st('X', [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ]),
  Ig = '_overlay_7q78t_1',
  Tg = '_modal_7q78t_12',
  bg = '_title_7q78t_21',
  jg = '_message_7q78t_29',
  Lg = '_buttons_7q78t_36',
  Pg = '_button_7q78t_36',
  Og = '_worldviewRow_7q78t_51',
  zg = '_worldviewButton_7q78t_57',
  Rg = '_editRow_7q78t_62',
  Mg = '_editInput_7q78t_69',
  Ag = '_iconButton_7q78t_86',
  Ze = {
    overlay: Ig,
    modal: Tg,
    title: bg,
    message: jg,
    buttons: Lg,
    button: Pg,
    worldviewRow: Og,
    worldviewButton: zg,
    editRow: Rg,
    editInput: Mg,
    iconButton: Ag,
  };
function Dg({ onKeepMine: n, onLoadShared: i, onOpenNewTab: l }) {
  return w.jsx('div', {
    className: Ze.overlay,
    children: w.jsxs('div', {
      className: Ze.modal,
      children: [
        w.jsx('h2', { className: Ze.title, children: 'You have unsaved progress' }),
        w.jsx('p', {
          className: Ze.message,
          children:
            'Loading this shared link will replace your current quiz answers. What would you like to do?',
        }),
        w.jsxs('div', {
          className: Ze.buttons,
          children: [
            w.jsx('button', {
              onClick: n,
              className: `btn btn-secondary ${Ze.button}`,
              children: 'Keep my progress',
            }),
            w.jsx('button', {
              onClick: i,
              className: `btn btn-primary ${Ze.button}`,
              children: 'Load shared results',
            }),
            w.jsxs('button', {
              onClick: l,
              className: `btn btn-secondary ${Ze.button}`,
              children: [w.jsx(gg, { size: 16 }), 'Open in new tab'],
            }),
          ],
        }),
      ],
    }),
  });
}
const { causes: mr } = $i,
  ho = { none: 1, sqrt: 0.5, extreme: 0.1 };
function ep(n) {
  const i = (n == null ? void 0 : n.diminishingReturns) || $i.diminishingReturns || 'sqrt';
  return ho[i] ?? 0.5;
}
function $a(n, i, l = 0.5) {
  if (l >= 1) {
    const f = Math.max(...n);
    if (f <= 0) return n.map(() => i / n.length);
    const p = n.map((h, m) => (h === f ? m : -1)).filter((h) => h >= 0);
    return n.map((h, m) => (p.includes(m) ? i / p.length : 0));
  }
  const s = 1 / (1 - l),
    u = n.map((f) => (f > 0 ? Math.pow(f, s) : 0)),
    c = u.reduce((f, p) => f + p, 0);
  return c === 0 ? n.map(() => i / n.length) : u.map((f) => (f / c) * i);
}
function tp(n = !1) {
  return Object.fromEntries(
    qd.questions
      .filter((i) => i.type !== 'intermission' && i.worldviewDimension)
      .map((i) => [
        i.id,
        n ? { ...i.worldviewDimension, name: i.editPanelTitle } : i.worldviewDimension,
      ])
  );
}
const Wi = tp();
function* Fg(n) {
  const i = Object.keys(n);
  if (i.length === 0) return;
  function* l(s, u) {
    if (s === i.length) {
      let p = 1;
      for (const h of i) p *= n[h][u[h]] / 100;
      yield { options: u, probability: p };
      return;
    }
    const c = i[s],
      f = Object.keys(n[c]);
    for (const p of f) yield* l(s + 1, { ...u, [c]: p });
  }
  yield* l(0, {});
}
function* Bg(n, i = 2e3) {
  const l = Object.keys(n);
  if (l.length === 0) return;
  const s = {};
  for (const f of l) {
    const p = Object.entries(n[f]);
    let h = 0;
    s[f] = p.map(([m, g]) => ((h += g / 100), { key: m, cumsum: h }));
  }
  const u = (f, p) => {
      const h = s[f];
      for (const { key: m, cumsum: g } of h) if (p <= g) return m;
      return h[h.length - 1].key;
    },
    c = 1 / i;
  for (let f = 0; f < i; f++) {
    const p = {};
    for (const h of l) p[h] = u(h, Math.random());
    yield { options: p, probability: c };
  }
}
function Ug(n) {
  return Object.values(n).reduce((i, l) => i * Object.keys(l).length, 1);
}
function Vg(n) {
  for (const i of Object.values(n)) {
    const l = Object.values(i),
      s = l.filter((c) => c === 100).length === 1,
      u = l.filter((c) => c === 0).length === l.length - 1;
    if (!s || !u) return !1;
  }
  return !0;
}
function* Hg(n) {
  const i = {};
  for (const [l, s] of Object.entries(n))
    for (const [u, c] of Object.entries(s))
      if (c === 100) {
        i[l] = u;
        break;
      }
  yield { options: i, probability: 1 };
}
function* Wa(n, i = 500, l = 2e3) {
  if (Vg(n)) {
    yield* Hg(n);
    return;
  }
  Ug(n) <= i ? yield* Fg(n) : yield* Bg(n, l);
}
function $g(n, i, l) {
  let s = n.points;
  for (const [u, c] of Object.entries(l)) {
    const f = i[u],
      p = c.options[f];
    if (c.applyAs === 'multiplier')
      if (c.appliesTo) {
        const h = n[c.appliesTo];
        if (h && typeof p == 'object') {
          const m = p[h];
          m !== void 0 && (s *= m);
        }
      } else c.appliesWhen && n[c.appliesWhen] && (s *= p);
    else if (c.applyAs === 'exponent' && c.appliesTo) {
      const h = n[c.appliesTo] || 1;
      s *= Math.pow(h, p);
    }
  }
  return s;
}
function Qa(n, i, l) {
  const s = {};
  for (const [u, c] of Object.entries(i)) s[u] = $g(c, n, l);
  return s;
}
function Wg(n) {
  const i = Math.max(...Object.values(n));
  return Object.keys(n).filter((l) => Math.abs(n[l] - i) < 1e-4);
}
function np(n) {
  return Object.fromEntries(Object.keys(n).map((i) => [i, 0]));
}
function rp(n, i, l) {
  if (i.applyAs === 'multiplier') {
    if (i.appliesTo) {
      const u = n[i.appliesTo];
      if (!u) return 1;
      let c = 0;
      for (const [f, p] of Object.entries(l)) {
        const h = i.options[f],
          m = typeof h == 'object' ? (h[u] ?? 1) : (h ?? 1);
        c += (p / 100) * m;
      }
      return c;
    }
    if (!i.appliesWhen || !n[i.appliesWhen]) return 1;
    let s = 0;
    for (const [u, c] of Object.entries(l)) {
      const f = i.options[u] ?? 1;
      s += (c / 100) * f;
    }
    return s;
  }
  return 1;
}
function Qg(n, i) {
  const l = (i == null ? void 0 : i.causes) || mr,
    s = (i == null ? void 0 : i.dimensions) || Wi,
    u = Object.keys(l),
    c = {};
  for (const m of u) {
    const g = l[m];
    let v = g.points;
    for (const [x, k] of Object.entries(s)) {
      const O = n[x];
      O && (v *= rp(g, k, O));
    }
    c[m] = v;
  }
  const f = u.map((m) => c[m]),
    p = $a(f, 100, 1),
    h = { evs: c };
  return (
    u.forEach((m, g) => {
      h[m] = p[g];
    }),
    h
  );
}
function qg(n, i) {
  const l = (i == null ? void 0 : i.causes) || mr,
    s = (i == null ? void 0 : i.dimensions) || Wi,
    u = np(l);
  for (const { options: f, probability: p } of Wa(n)) {
    const h = Qa(f, l, s),
      m = Wg(h),
      g = p / m.length;
    for (const v of m) u[v] += g;
  }
  const c = {};
  for (const f of Object.keys(l)) c[f] = u[f] * 100;
  return c;
}
function Yg(n, i) {
  const l = (i == null ? void 0 : i.causes) || mr,
    s = (i == null ? void 0 : i.dimensions) || Wi,
    u = ep(i),
    c = Object.keys(l),
    f = np(l);
  for (const { options: p, probability: h } of Wa(n)) {
    const m = Qa(p, l, s),
      g = h * 100,
      v = c.map((k) => m[k]),
      x = $a(v, g, u);
    c.forEach((k, O) => {
      f[k] += x[O];
    });
  }
  return f;
}
function Gg(n, i) {
  const l = (i == null ? void 0 : i.causes) || mr,
    s = (i == null ? void 0 : i.dimensions) || Wi,
    u = Object.keys(l),
    c = Kg(u),
    f = [...Wa(n, 500, 1e3)];
  let p = c[0],
    h = -1 / 0;
  for (const m of c) {
    let g = 1 / 0;
    for (const { options: v, probability: x } of f) {
      if (x < 1e-4) continue;
      const k = Qa(v, l, s);
      let O = 0;
      for (const j of u) O += k[j] * (m[j] / 100);
      g = Math.min(g, O);
    }
    g > h && ((h = g), (p = { ...m }));
  }
  return p;
}
function Kg(n) {
  const i = [],
    l = n.length,
    s = (h) => {
      const m = {};
      return (
        n.forEach((g, v) => {
          m[g] = h[v];
        }),
        m
      );
    };
  for (let h = 0; h < l; h++) {
    const m = new Array(l).fill(0);
    ((m[h] = 100), i.push(s(m)));
  }
  for (let h = 0; h < l; h++)
    for (let m = h + 1; m < l; m++) {
      const g = new Array(l).fill(0);
      ((g[h] = 50), (g[m] = 50), i.push(s(g)));
    }
  const u = Math.floor(100 / l),
    c = 100 - u * l,
    f = new Array(l).fill(u);
  ((f[0] += c), i.push(s(f)));
  const p = [
    [60, 20, 20],
    [70, 15, 15],
    [80, 10, 10],
  ];
  for (const h of p)
    if (h.length === l)
      for (let m = 0; m < l; m++) {
        const g = new Array(l).fill(0);
        g[m] = h[0];
        let v = 1;
        for (let x = 0; x < l; x++) x !== m && v < h.length && (g[x] = h[v++]);
        i.push(s(g));
      }
  return i;
}
function ip(n, i, l, s = null, u = null) {
  const c = u ? l[u] : 0,
    f = 100 - c;
  i = Math.max(0, Math.min(f, i));
  const p = s || l,
    h = Object.keys(l).filter((x) => x !== n && x !== u),
    m = h.reduce((x, k) => x + p[k], 0),
    g = 100 - i - c,
    v = { [n]: i };
  if ((u && (v[u] = l[u]), m === 0)) {
    const x = Math.floor(g / h.length);
    let k = g - x * h.length;
    h.forEach((O, j) => {
      v[O] = x + (j < k ? 1 : 0);
    });
  } else {
    let x = 0;
    h.forEach((k, O) => {
      if (O === h.length - 1) v[k] = Math.max(0, g - x);
      else {
        const j = p[k] / m,
          L = g * j;
        ((v[k] = Math.max(0, L)), (x += v[k]));
      }
    });
  }
  return v;
}
function lp(n) {
  const i = Object.keys(n),
    l = {};
  let s = 0;
  return (
    i.slice(0, -1).forEach((u) => {
      ((l[u] = Math.round(n[u])), (s += l[u]));
    }),
    (l[i[i.length - 1]] = 100 - s),
    l
  );
}
function Xg(n, i) {
  const l = (i == null ? void 0 : i.causes) || mr,
    s = (i == null ? void 0 : i.dimensions) || Wi,
    u = Object.keys(l),
    c = {};
  for (const f of u) {
    const p = l[f];
    let h = p.points;
    for (const [m, g] of Object.entries(s)) {
      const v = n[m];
      v && (h *= rp(p, g, v));
    }
    c[f] = h;
  }
  return c;
}
function Zg(n, i = {}) {
  const { budget: l = 100 } = i,
    s = i.power ?? ep(i);
  if (n.length === 0) throw new Error('At least one worldview is required');
  const u = Object.keys(n[0].evs),
    c = n.reduce((h, m) => h + (m.weight || 1), 0),
    f = {};
  for (const h of u) f[h] = 0;
  const p = [];
  for (const h of n) {
    const m = h.weight || 1,
      g = (m / c) * l,
      v = u.map((O) => h.evs[O] || 0),
      x = $a(v, g, s),
      k = {};
    (u.forEach((O, j) => {
      ((f[O] += x[j]), (k[O] = x[j]));
    }),
      p.push({ name: h.name, weight: m, share: g, allocation: k }));
  }
  return { allocation: f, worldviewAllocations: p, config: { power: s, budget: l } };
}
const { questions: Jg } = qd,
  { causes: ey, defaultCredences: ty } = $i;
function ny(n) {
  var i;
  return !((i = n.type) != null && i.startsWith('_'));
}
const ot = Jg.filter(ny);
function En(n) {
  return (n == null ? void 0 : n.type) === _t.INTERMISSION;
}
function pa(n, i) {
  let l = 0;
  for (let s = 0; s < i; s++) En(n[s]) || l++;
  return l;
}
function ry(n) {
  {
    const i = n.type || _t.DEFAULT;
    return nd[i] || nd[_t.DEFAULT];
  }
}
const iy = ot.filter((n) => !En(n)),
  ha = iy.length,
  rd = ot.map((n) => {
    if (En(n)) return { ...n, type: _t.INTERMISSION };
    const i = ry(n);
    return {
      ...n,
      type: n.type || _t.DEFAULT,
      options: n.options.map((l, s) => ({ ...l, color: i[s] || i[0] })),
    };
  });
function qa(n) {
  if (n.defaultCredences) return { ...n.defaultCredences };
  const i = n.options.map((u) => u.key),
    l = Math.floor(100 / i.length),
    s = 100 - l * i.length;
  return Object.fromEntries(i.map((u, c) => [u, l + (c === 0 ? s : 0)]));
}
function op(n) {
  return { credences: qa(n), originalCredences: null, inputMode: Gd.OPTIONS, lockedKey: null };
}
function sp() {
  return Object.fromEntries(ot.filter((n) => !En(n)).map((n) => [n.id, op(n)]));
}
const Xn = ['1', '2', '3'];
function ba() {
  return Object.fromEntries(Xn.map((n) => [n, { questions: sp() }]));
}
function ly(n) {
  return n != null && n.questions
    ? Object.entries(n.questions).some(([i, l]) => {
        if (!l.credences) return !1;
        const s = ot.find((c) => c.id === i);
        if (!s) return !1;
        const u = qa(s);
        return Object.entries(l.credences).some(([c, f]) => f !== (u[c] ?? 0));
      })
    : !1;
}
function ja() {
  return Object.fromEntries(Xn.map((n) => [n, `Worldview ${n}`]));
}
const La = 1e7,
  ap = {
    currentStep: 'welcome',
    worldviews: ba(),
    worldviewNames: ja(),
    activeWorldviewId: '1',
    expandedPanel: null,
    debugConfig: null,
    selectedCalculations: { left: null, right: null },
    marketplaceBudget: La,
  },
  De = {
    GO_TO_STEP: 'GO_TO_STEP',
    UPDATE_QUESTION: 'UPDATE_QUESTION',
    SET_EXPANDED_PANEL: 'SET_EXPANDED_PANEL',
    SAVE_ORIGINALS: 'SAVE_ORIGINALS',
    RESET_TO_ORIGINAL: 'RESET_TO_ORIGINAL',
    RESET_QUIZ: 'RESET_QUIZ',
    SET_DEBUG_CONFIG: 'SET_DEBUG_CONFIG',
    RESTORE_FROM_URL: 'RESTORE_FROM_URL',
    RESTORE_FROM_SESSION: 'RESTORE_FROM_SESSION',
    SWITCH_WORLDVIEW: 'SWITCH_WORLDVIEW',
    SET_SELECTED_CALCULATIONS: 'SET_SELECTED_CALCULATIONS',
    SET_WORLDVIEW_NAME: 'SET_WORLDVIEW_NAME',
    SET_MARKETPLACE_BUDGET: 'SET_MARKETPLACE_BUDGET',
  };
function Pa(n) {
  return n.worldviews[n.activeWorldviewId].questions;
}
function oy(n, i, l) {
  const s = Pa(n);
  return {
    ...n,
    worldviews: {
      ...n.worldviews,
      [n.activeWorldviewId]: { questions: { ...s, [i]: { ...s[i], ...l } } },
    },
  };
}
function sy(n, i) {
  switch (i.type) {
    case De.GO_TO_STEP:
      return { ...n, currentStep: i.payload };
    case De.UPDATE_QUESTION:
      return oy(n, i.payload.questionId, i.payload.updates);
    case De.SET_EXPANDED_PANEL:
      return { ...n, expandedPanel: i.payload };
    case De.SAVE_ORIGINALS: {
      const l = Pa(n);
      return {
        ...n,
        worldviews: {
          ...n.worldviews,
          [n.activeWorldviewId]: {
            questions: Object.fromEntries(
              Object.entries(l).map(([s, u]) => [
                s,
                { ...u, originalCredences: u.originalCredences || { ...u.credences } },
              ])
            ),
          },
        },
      };
    }
    case De.RESET_TO_ORIGINAL: {
      const l = Pa(n);
      return {
        ...n,
        worldviews: {
          ...n.worldviews,
          [n.activeWorldviewId]: {
            questions: Object.fromEntries(
              Object.entries(l).map(([s, u]) => [
                s,
                { ...u, credences: u.originalCredences ? { ...u.originalCredences } : u.credences },
              ])
            ),
          },
        },
      };
    }
    case De.RESET_QUIZ:
      return { ...ap, worldviews: ba(), worldviewNames: ja() };
    case De.SWITCH_WORLDVIEW:
      return Xn.includes(i.payload) ? { ...n, activeWorldviewId: i.payload } : n;
    case De.SET_WORLDVIEW_NAME: {
      const { worldviewId: l, name: s } = i.payload;
      return Xn.includes(l) ? { ...n, worldviewNames: { ...n.worldviewNames, [l]: s } } : n;
    }
    case De.SET_MARKETPLACE_BUDGET:
      return { ...n, marketplaceBudget: i.payload };
    case De.RESTORE_FROM_URL:
    case De.RESTORE_FROM_SESSION: {
      const l = i.type === De.RESTORE_FROM_URL,
        {
          worldviews: s,
          worldviewNames: u,
          activeWorldviewId: c,
          questions: f,
          credences: p,
          currentStep: h,
          selectedCalculations: m,
          marketplaceBudget: g,
        } = i.payload,
        v = (j, L) => ({
          credences: j.credences,
          originalCredences: j.originalCredences
            ? { ...j.originalCredences }
            : L
              ? { ...j.credences }
              : null,
          inputMode: j.inputMode || Gd.OPTIONS,
          lockedKey: j.lockedKey || null,
        }),
        x = (j, L) => {
          const R = {};
          for (const [M, F] of Object.entries(j)) {
            const V = {};
            for (const [ae, z] of Object.entries(F.questions)) V[ae] = v(z, L);
            R[M] = { questions: V };
          }
          for (const M of Xn) R[M] || (R[M] = { questions: sp() });
          return R;
        },
        k = (j) => {
          const L = {};
          for (const R of Xn) L[R] = (j == null ? void 0 : j[R]) || `Worldview ${R}`;
          return L;
        };
      if (s && c)
        return {
          ...n,
          currentStep: l ? 'results' : h,
          worldviews: x(s, l),
          worldviewNames: k(u),
          activeWorldviewId: c,
          selectedCalculations: m || n.selectedCalculations,
          marketplaceBudget: g || La,
        };
      const O = {};
      if (f) for (const [j, L] of Object.entries(f)) O[j] = v(L, l);
      else if (p)
        for (const [j, L] of Object.entries(p))
          O[j] = { ...op(), credences: L, originalCredences: l ? { ...L } : null };
      return {
        ...n,
        currentStep: l ? 'results' : h,
        worldviews: { ...ba(), 1: { questions: O } },
        worldviewNames: ja(),
        activeWorldviewId: '1',
        marketplaceBudget: La,
      };
    }
    case De.SET_DEBUG_CONFIG:
      return { ...n, debugConfig: i.payload };
    case De.SET_SELECTED_CALCULATIONS:
      return { ...n, selectedCalculations: { ...n.selectedCalculations, ...i.payload } };
    default:
      return n;
  }
}
const up = G.createContext(null);
function ay({ children: n }) {
  const [i, l] = G.useReducer(sy, ap),
    [s, u] = G.useState(null),
    [c, f] = G.useState(!0),
    [p, h] = G.useState(null),
    [m] = G.useState(() => lg()),
    g = G.useRef(null);
  (G.useEffect(() => {
    {
      const K = fa();
      (K && l({ type: De.RESTORE_FROM_SESSION, payload: K }), f(!1));
      return;
    }
  }, []),
    G.useEffect(() => {}, []));
  const v = G.useCallback(() => {
      const K = fa();
      (K && l({ type: De.RESTORE_FROM_SESSION, payload: K }), da(), h(null));
    }, []),
    x = G.useCallback(() => {
      (p != null && p.shareData && (l({ type: De.RESTORE_FROM_URL, payload: p.shareData }), po()),
        da(),
        h(null));
    }, [p]),
    k = G.useCallback(() => {
      (sg(), p != null && p.shareUrl && window.open(p.shareUrl, '_blank'));
      const K = fa();
      (K && l({ type: De.RESTORE_FROM_SESSION, payload: K }), da(), h(null));
    }, [p]);
  G.useEffect(() => {
    if (!(c || i.currentStep === 'welcome'))
      return (
        g.current && clearTimeout(g.current),
        (g.current = setTimeout(() => {
          og({
            currentStep: i.currentStep,
            worldviews: i.worldviews,
            worldviewNames: i.worldviewNames,
            activeWorldviewId: i.activeWorldviewId,
            selectedCalculations: i.selectedCalculations,
            marketplaceBudget: i.marketplaceBudget,
          });
        }, 300)),
        () => {
          g.current && clearTimeout(g.current);
        }
      );
  }, [
    i.currentStep,
    i.worldviews,
    i.worldviewNames,
    i.activeWorldviewId,
    i.selectedCalculations,
    i.marketplaceBudget,
    c,
  ]);
  const O = G.useCallback((K) => {
      l({ type: De.GO_TO_STEP, payload: K });
    }, []),
    j = G.useCallback((K, de) => {
      l({ type: De.UPDATE_QUESTION, payload: { questionId: K, updates: de } });
    }, []),
    L = G.useCallback((K, de) => j(K, { credences: de }), [j]),
    R = G.useCallback((K, de) => j(K, { inputMode: de }), [j]),
    M = G.useCallback((K, de) => j(K, { lockedKey: de }), [j]),
    F = G.useCallback((K) => {
      l({ type: De.SET_EXPANDED_PANEL, payload: K });
    }, []),
    V = G.useCallback(() => {
      l({ type: De.SAVE_ORIGINALS });
    }, []),
    ae = G.useCallback(() => {
      l({ type: De.RESET_TO_ORIGINAL });
    }, []),
    z = G.useCallback(() => {
      (l({ type: De.RESET_QUIZ }), po());
    }, []),
    J = G.useCallback((K) => {
      l({ type: De.SET_DEBUG_CONFIG, payload: K });
    }, []),
    ve = G.useCallback((K) => {
      l({ type: De.SWITCH_WORLDVIEW, payload: K });
    }, []),
    Se = G.useCallback((K) => {
      l({ type: De.SET_SELECTED_CALCULATIONS, payload: K });
    }, []),
    Ce = G.useCallback((K, de) => {
      l({ type: De.SET_WORLDVIEW_NAME, payload: { worldviewId: K, name: de } });
    }, []),
    re = G.useCallback((K) => {
      l({ type: De.SET_MARKETPLACE_BUDGET, payload: K });
    }, []),
    X = G.useCallback((K) => ot.findIndex((de) => de.id === K), []),
    ke = G.useCallback(
      (K) => {
        const de = X(K);
        return de === 0 ? 'welcome' : ot[de - 1].id;
      },
      [X]
    ),
    te = G.useCallback(
      (K) => {
        const de = X(K);
        return de === ot.length - 1 ? 'results' : ot[de + 1].id;
      },
      [X]
    ),
    q = G.useCallback(() => {
      O(ot[0].id);
    }, [O]),
    me = G.useCallback(() => {
      i.currentStep === 'results' ? O(ot[ot.length - 1].id) : O(ke(i.currentStep));
    }, [i.currentStep, O, ke]),
    ge = G.useCallback(() => {
      const K = te(i.currentStep);
      (K === 'results' && V(), O(K));
    }, [i.currentStep, O, te, V]),
    $ = G.useMemo(
      () => i.worldviews[i.activeWorldviewId].questions,
      [i.worldviews, i.activeWorldviewId]
    ),
    Z = G.useCallback(
      (K) => {
        var rn;
        const de = K === 'original' ? 'originalCredences' : 'credences',
          tt = ot.filter((Bt) => !En(Bt)),
          nt = $[(rn = tt[0]) == null ? void 0 : rn.id];
        return K === 'original' && !(nt != null && nt.originalCredences)
          ? null
          : Object.fromEntries(
              tt.map((Bt) => {
                var Jn;
                return [Bt.id, ((Jn = $[Bt.id]) == null ? void 0 : Jn[de]) || qa(Bt)];
              })
            );
      },
      [$]
    ),
    S = G.useCallback(
      (K, de) =>
        K
          ? {
              maxEV: Qg(K, de),
              parliament: qg(K, de),
              mergedFavorites: Yg(K, de),
              maximin: Gg(K, de),
            }
          : null,
      []
    ),
    I = G.useMemo(() => S(Z('current'), i.debugConfig), [Z, S, i.debugConfig]),
    D = G.useMemo(() => S(Z('original'), i.debugConfig), [Z, S, i.debugConfig]),
    C = G.useMemo(
      () =>
        Object.values($).some(
          (K) =>
            K.originalCredences &&
            JSON.stringify(K.credences) !== JSON.stringify(K.originalCredences)
        ),
      [$]
    ),
    fe = G.useMemo(
      () => Object.fromEntries(Xn.map((K) => [K, ly(i.worldviews[K])])),
      [i.worldviews]
    ),
    le = G.useMemo(() => X(i.currentStep), [i.currentStep, X]),
    ue = G.useMemo(() => (le === -1 ? null : rd[le]), [le]),
    Ie = G.useMemo(() => {
      if (le === -1) return -1;
      const K = ot[le],
        de = pa(ot, le);
      return En(K) ? de : de + 1;
    }, [le]),
    _e = G.useMemo(() => {
      if (le === -1) return 0;
      const K = ot[le];
      return ((En(K) ? pa(ot, le) : Ie) / ha) * 100;
    }, [le, Ie]),
    Le = G.useMemo(() => {
      if (le === -1) return '';
      const K = ot[le];
      return `Question ${En(K) ? pa(ot, le) : Ie} of ${ha}`;
    }, [le, Ie]),
    ce = G.useMemo(() => {
      const K = {};
      return (
        ot
          .filter((de) => !En(de))
          .forEach((de) => {
            const tt = $[de.id];
            tt &&
              (K[de.id] = {
                credences: tt.credences,
                setCredences: (nt) => L(de.id, nt),
                originalCredences: tt.originalCredences,
                inputMode: tt.inputMode,
                setInputMode: (nt) => R(de.id, nt),
                lockedKey: tt.lockedKey,
                setLockedKey: (nt) => M(de.id, nt),
              });
          }),
        K
      );
    }, [$, L, R, M]),
    Ee = G.useMemo(
      () => ({
        currentStep: i.currentStep,
        questions: $,
        worldviews: i.worldviews,
        worldviewNames: i.worldviewNames,
        activeWorldviewId: i.activeWorldviewId,
        expandedPanel: i.expandedPanel,
        debugConfig: i.debugConfig,
        selectedCalculations: i.selectedCalculations,
        marketplaceBudget: i.marketplaceBudget,
        shareUrlError: s,
        isHydrating: c,
        sessionId: m,
        questionsConfig: rd,
        causesConfig: ey,
        defaultCredences: ty,
        worldviewIds: Xn,
        goToStep: O,
        setCredences: L,
        setInputMode: R,
        setLockedKey: M,
        setExpandedPanel: F,
        saveOriginals: V,
        resetToOriginal: ae,
        resetQuiz: z,
        setDebugConfig: J,
        switchWorldview: ve,
        setSelectedCalculations: Se,
        setWorldviewName: Ce,
        setMarketplaceBudget: re,
        getQuestionIndex: X,
        getPrevStep: ke,
        getNextStep: te,
        startQuiz: q,
        goBack: me,
        goForward: ge,
        currentQuestion: ue,
        currentQuestionIndex: le,
        totalQuestions: ha,
        progressPercentage: _e,
        questionNumber: Le,
        hasChanged: C,
        hasProgressMap: fe,
        calculationResults: I,
        originalCalculationResults: D,
        stateMap: ce,
      }),
      [
        i.currentStep,
        $,
        i.worldviews,
        i.worldviewNames,
        i.activeWorldviewId,
        i.expandedPanel,
        i.debugConfig,
        i.selectedCalculations,
        i.marketplaceBudget,
        s,
        c,
        m,
        O,
        L,
        R,
        M,
        F,
        V,
        ae,
        z,
        J,
        ve,
        Se,
        Ce,
        re,
        X,
        ke,
        te,
        q,
        me,
        ge,
        ue,
        le,
        _e,
        Le,
        C,
        fe,
        I,
        D,
        ce,
      ]
    );
  return w.jsxs(up.Provider, {
    value: Ee,
    children: [n, p && w.jsx(Dg, { onKeepMine: v, onLoadShared: x, onOpenNewTab: k })],
  });
}
const Qi = ({ subtitle: n }) =>
    w.jsxs('header', {
      className: `header${n ? ' header-with-subtitle' : ''}`,
      children: [
        w.jsxs('div', {
          className: 'header-brand',
          children: [
            w.jsx('img', {
              src: '/quiz-demo/prototypes/credence-only/NewLogoSVG.svg',
              alt: 'Rethink Priorities',
              height: '24',
            }),
            w.jsx('span', { className: 'header-title', children: 'Donor Compass' }),
          ],
        }),
        n && w.jsx('div', { className: 'header-subtitle', children: n }),
      ],
    }),
  uy = { paw: xg, hourglass: vg, 'bar-chart': pg, microscope: wg };
function cp({ name: n, size: i = 16, className: l = '' }) {
  const s = uy[n] || Zd;
  return w.jsx(s, { size: i, className: l });
}
function Gr() {
  const n = G.useContext(up);
  if (!n) throw new Error('useQuiz must be used within a QuizProvider');
  return n;
}
const cy = '_container_1tu9j_3',
  fy = '_heading_1tu9j_8',
  dy = '_headingEmphasis_1tu9j_17',
  py = '_intro_1tu9j_22',
  hy = '_infoBox_1tu9j_30',
  my = '_infoBoxLabel_1tu9j_38',
  gy = '_infoBoxGrid_1tu9j_45',
  yy = '_infoBoxItem_1tu9j_52',
  Gn = {
    container: cy,
    heading: fy,
    headingEmphasis: dy,
    intro: py,
    infoBox: hy,
    infoBoxLabel: my,
    infoBoxGrid: gy,
    infoBoxItem: yy,
  },
  vy = {
    timeEstimate: '~3 minutes',
    headingLine1: 'Where Should Your',
    headingLine2: 'Giving Go?',
    intro:
      'Uncertain about your ethical views? This tool helps you allocate resources across different causes based on your moral credences—the probabilities you assign to different ethical perspectives.',
    startButton: 'Start Quiz →',
    previewLabel: "You'll be asked about:",
  },
  ky = { back: '← Back', continue: 'Continue →', backToQuiz: '← Back to Quiz' },
  wy = { modeToggle: { pickOne: 'Pick One', customMix: 'Custom Mix' } },
  xy = {
    heading: 'Recommended Allocations',
    modifiedIndicator: '(modified)',
    adjustCredencesHeading: 'Adjust Your Credences',
    resetAllButton: 'Reset All',
    methods: {
      maxEV: {
        icon: 'target',
        title: 'Max Expected Value',
        subtitle: '100% to highest EV',
        footerLabel: 'EVs:',
        footerText: null,
      },
      parliament: {
        icon: 'parliament',
        title: 'Variance Voting',
        subtitle: 'Weighted worldview votes',
        footerLabel: null,
        footerText: 'Each worldview votes for preferred cause',
      },
      mergedFavorites: {
        icon: 'handshake',
        title: 'Proportional Allocation',
        subtitle: 'Budget shares to favorites',
        footerLabel: null,
        footerText: 'Each worldview allocates its budget share',
      },
      maximin: {
        icon: 'scale',
        title: 'Maximin (Egalitarian)',
        subtitle: 'Fairest to all worldviews',
        footerLabel: null,
        footerText: 'Maximizes minimum worldview utility',
      },
    },
  },
  Sy = {
    modifiedBadge: 'modified',
    sliderNote: 'Sliders auto-balance to 100%',
    resetButton: 'Reset',
  },
  _y = { lockTooltip: 'Lock slider', unlockTooltip: 'Unlock slider' },
  Cy = {
    heading: 'Moral Marketplace',
    description: 'Combined allocation based on your worldviews',
    backButton: '← Back to Results',
    worldviewBreakdownHeading: 'Worldview Contributions',
    emptyState: 'Complete at least two worldviews to see combined results.',
    budgetLabel: 'Total Budget',
    settingsLabel: 'Allocation Mode',
    diminishingReturns: {
      none: 'Winner-take-all',
      sqrt: 'Balanced (default)',
      extreme: 'Near-equal',
    },
  },
  Ey = {
    title: 'Switch Worldview',
    description:
      'Each worldview stores a separate set of quiz answers. Select a worldview to view or edit.',
    emptyLabel: '(empty)',
    currentLabel: '(current)',
    defaultName: 'Worldview',
  },
  Pe = {
    welcome: vy,
    navigation: ky,
    questionScreen: wy,
    results: xy,
    editPanel: Sy,
    sliders: _y,
    marketplace: Cy,
    worldviewModal: Ey,
  };
function Ny() {
  const { questionsConfig: n, startQuiz: i } = Gr(),
    l = n.filter((s) => s.type !== _t.INTERMISSION);
  return w.jsxs('div', {
    className: 'screen',
    children: [
      w.jsx(Qi, { subtitle: Pe.welcome.timeEstimate }),
      w.jsx('main', {
        className: 'screen-main',
        children: w.jsxs('div', {
          className: Gn.container,
          children: [
            w.jsxs('h1', {
              className: Gn.heading,
              children: [
                Pe.welcome.headingLine1,
                w.jsx('br', {}),
                w.jsx('span', { className: Gn.headingEmphasis, children: Pe.welcome.headingLine2 }),
              ],
            }),
            w.jsx('p', { className: Gn.intro, children: Pe.welcome.intro }),
            w.jsx('button', {
              onClick: i,
              className: 'btn btn-primary',
              children: Pe.welcome.startButton,
            }),
            w.jsxs('div', {
              className: Gn.infoBox,
              children: [
                w.jsx('div', { className: Gn.infoBoxLabel, children: Pe.welcome.previewLabel }),
                w.jsx('div', {
                  className: Gn.infoBoxGrid,
                  children: l.map((s) =>
                    w.jsxs(
                      'div',
                      {
                        className: Gn.infoBoxItem,
                        children: [w.jsx(cp, { name: s.icon, size: 16 }), ' ', s.previewText],
                      },
                      s.id
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const yo = ({ percentage: n }) =>
    w.jsx('div', {
      className: 'progress-container',
      children: w.jsx('div', {
        className: 'progress-track',
        children: w.jsx('div', { className: 'progress-fill', style: { width: `${n}%` } }),
      }),
    }),
  Iy = '_modeToggle_yn8i0_3',
  Ty = '_button_yn8i0_10',
  by = '_options_yn8i0_23',
  jy = '_active_yn8i0_29',
  Ly = '_sliders_yn8i0_35',
  hr = { modeToggle: Iy, button: Ty, options: by, active: jy, sliders: Ly },
  Py = ({ mode: n, setMode: i }) =>
    w.jsxs('div', {
      className: hr.modeToggle,
      children: [
        w.jsx('button', {
          onClick: () => i('options'),
          className: `${hr.button} ${hr.options} ${n === 'options' ? hr.active : ''}`,
          children: Pe.questionScreen.modeToggle.pickOne,
        }),
        w.jsxs('button', {
          onClick: () => i('sliders'),
          className: `${hr.button} ${hr.sliders} ${n === 'sliders' ? hr.active : ''}`,
          children: [w.jsx(Cg, { size: 14 }), Pe.questionScreen.modeToggle.customMix],
        }),
      ],
    });
function Oy(n, i) {
  const l = {};
  return (n[n.length - 1] === '' ? [...n, ''] : n)
    .join((l.padRight ? ' ' : '') + ',' + (l.padLeft === !1 ? '' : ' '))
    .trim();
}
const zy = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Ry = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  My = {};
function id(n, i) {
  return (My.jsx ? Ry : zy).test(n);
}
const Ay = /[ \t\n\f\r]/g;
function Dy(n) {
  return typeof n == 'object' ? (n.type === 'text' ? ld(n.value) : !1) : ld(n);
}
function ld(n) {
  return n.replace(Ay, '') === '';
}
class qi {
  constructor(i, l, s) {
    ((this.normal = l), (this.property = i), s && (this.space = s));
  }
}
qi.prototype.normal = {};
qi.prototype.property = {};
qi.prototype.space = void 0;
function fp(n, i) {
  const l = {},
    s = {};
  for (const u of n) (Object.assign(l, u.property), Object.assign(s, u.normal));
  return new qi(l, s, i);
}
function Oa(n) {
  return n.toLowerCase();
}
class Pt {
  constructor(i, l) {
    ((this.attribute = l), (this.property = i));
  }
}
Pt.prototype.attribute = '';
Pt.prototype.booleanish = !1;
Pt.prototype.boolean = !1;
Pt.prototype.commaOrSpaceSeparated = !1;
Pt.prototype.commaSeparated = !1;
Pt.prototype.defined = !1;
Pt.prototype.mustUseProperty = !1;
Pt.prototype.number = !1;
Pt.prototype.overloadedBoolean = !1;
Pt.prototype.property = '';
Pt.prototype.spaceSeparated = !1;
Pt.prototype.space = void 0;
let Fy = 0;
const Ne = gr(),
  et = gr(),
  za = gr(),
  W = gr(),
  Be = gr(),
  Qr = gr(),
  Dt = gr();
function gr() {
  return 2 ** ++Fy;
}
const Ra = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: Ne,
        booleanish: et,
        commaOrSpaceSeparated: Dt,
        commaSeparated: Qr,
        number: W,
        overloadedBoolean: za,
        spaceSeparated: Be,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  ma = Object.keys(Ra);
class Ya extends Pt {
  constructor(i, l, s, u) {
    let c = -1;
    if ((super(i, l), od(this, 'space', u), typeof s == 'number'))
      for (; ++c < ma.length; ) {
        const f = ma[c];
        od(this, ma[c], (s & Ra[f]) === Ra[f]);
      }
  }
}
Ya.prototype.defined = !0;
function od(n, i, l) {
  l && (n[i] = l);
}
function Kr(n) {
  const i = {},
    l = {};
  for (const [s, u] of Object.entries(n.properties)) {
    const c = new Ya(s, n.transform(n.attributes || {}, s), u, n.space);
    (n.mustUseProperty && n.mustUseProperty.includes(s) && (c.mustUseProperty = !0),
      (i[s] = c),
      (l[Oa(s)] = s),
      (l[Oa(c.attribute)] = s));
  }
  return new qi(i, l, n.space);
}
const dp = Kr({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: et,
    ariaAutoComplete: null,
    ariaBusy: et,
    ariaChecked: et,
    ariaColCount: W,
    ariaColIndex: W,
    ariaColSpan: W,
    ariaControls: Be,
    ariaCurrent: null,
    ariaDescribedBy: Be,
    ariaDetails: null,
    ariaDisabled: et,
    ariaDropEffect: Be,
    ariaErrorMessage: null,
    ariaExpanded: et,
    ariaFlowTo: Be,
    ariaGrabbed: et,
    ariaHasPopup: null,
    ariaHidden: et,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Be,
    ariaLevel: W,
    ariaLive: null,
    ariaModal: et,
    ariaMultiLine: et,
    ariaMultiSelectable: et,
    ariaOrientation: null,
    ariaOwns: Be,
    ariaPlaceholder: null,
    ariaPosInSet: W,
    ariaPressed: et,
    ariaReadOnly: et,
    ariaRelevant: null,
    ariaRequired: et,
    ariaRoleDescription: Be,
    ariaRowCount: W,
    ariaRowIndex: W,
    ariaRowSpan: W,
    ariaSelected: et,
    ariaSetSize: W,
    ariaSort: null,
    ariaValueMax: W,
    ariaValueMin: W,
    ariaValueNow: W,
    ariaValueText: null,
    role: null,
  },
  transform(n, i) {
    return i === 'role' ? i : 'aria-' + i.slice(4).toLowerCase();
  },
});
function pp(n, i) {
  return i in n ? n[i] : i;
}
function hp(n, i) {
  return pp(n, i.toLowerCase());
}
const By = Kr({
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv',
    },
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: Qr,
      acceptCharset: Be,
      accessKey: Be,
      action: null,
      allow: null,
      allowFullScreen: Ne,
      allowPaymentRequest: Ne,
      allowUserMedia: Ne,
      alt: null,
      as: null,
      async: Ne,
      autoCapitalize: null,
      autoComplete: Be,
      autoFocus: Ne,
      autoPlay: Ne,
      blocking: Be,
      capture: null,
      charSet: null,
      checked: Ne,
      cite: null,
      className: Be,
      cols: W,
      colSpan: null,
      content: null,
      contentEditable: et,
      controls: Ne,
      controlsList: Be,
      coords: W | Qr,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: Ne,
      defer: Ne,
      dir: null,
      dirName: null,
      disabled: Ne,
      download: za,
      draggable: et,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: Ne,
      formTarget: null,
      headers: Be,
      height: W,
      hidden: za,
      high: W,
      href: null,
      hrefLang: null,
      htmlFor: Be,
      httpEquiv: Be,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: Ne,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: Ne,
      itemId: null,
      itemProp: Be,
      itemRef: Be,
      itemScope: Ne,
      itemType: Be,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: Ne,
      low: W,
      manifest: null,
      max: null,
      maxLength: W,
      media: null,
      method: null,
      min: null,
      minLength: W,
      multiple: Ne,
      muted: Ne,
      name: null,
      nonce: null,
      noModule: Ne,
      noValidate: Ne,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: Ne,
      optimum: W,
      pattern: null,
      ping: Be,
      placeholder: null,
      playsInline: Ne,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: Ne,
      referrerPolicy: null,
      rel: Be,
      required: Ne,
      reversed: Ne,
      rows: W,
      rowSpan: W,
      sandbox: Be,
      scope: null,
      scoped: Ne,
      seamless: Ne,
      selected: Ne,
      shadowRootClonable: Ne,
      shadowRootDelegatesFocus: Ne,
      shadowRootMode: null,
      shape: null,
      size: W,
      sizes: null,
      slot: null,
      span: W,
      spellCheck: et,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: W,
      step: null,
      style: null,
      tabIndex: W,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: Ne,
      useMap: null,
      value: et,
      width: W,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: Be,
      axis: null,
      background: null,
      bgColor: null,
      border: W,
      borderColor: null,
      bottomMargin: W,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: Ne,
      declare: Ne,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: W,
      leftMargin: W,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: W,
      marginWidth: W,
      noResize: Ne,
      noHref: Ne,
      noShade: Ne,
      noWrap: Ne,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: W,
      rules: null,
      scheme: null,
      scrolling: et,
      standby: null,
      summary: null,
      text: null,
      topMargin: W,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: W,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: Ne,
      disableRemotePlayback: Ne,
      prefix: null,
      property: null,
      results: W,
      security: null,
      unselectable: null,
    },
    space: 'html',
    transform: hp,
  }),
  Uy = Kr({
    attributes: {
      accentHeight: 'accent-height',
      alignmentBaseline: 'alignment-baseline',
      arabicForm: 'arabic-form',
      baselineShift: 'baseline-shift',
      capHeight: 'cap-height',
      className: 'class',
      clipPath: 'clip-path',
      clipRule: 'clip-rule',
      colorInterpolation: 'color-interpolation',
      colorInterpolationFilters: 'color-interpolation-filters',
      colorProfile: 'color-profile',
      colorRendering: 'color-rendering',
      crossOrigin: 'crossorigin',
      dataType: 'datatype',
      dominantBaseline: 'dominant-baseline',
      enableBackground: 'enable-background',
      fillOpacity: 'fill-opacity',
      fillRule: 'fill-rule',
      floodColor: 'flood-color',
      floodOpacity: 'flood-opacity',
      fontFamily: 'font-family',
      fontSize: 'font-size',
      fontSizeAdjust: 'font-size-adjust',
      fontStretch: 'font-stretch',
      fontStyle: 'font-style',
      fontVariant: 'font-variant',
      fontWeight: 'font-weight',
      glyphName: 'glyph-name',
      glyphOrientationHorizontal: 'glyph-orientation-horizontal',
      glyphOrientationVertical: 'glyph-orientation-vertical',
      hrefLang: 'hreflang',
      horizAdvX: 'horiz-adv-x',
      horizOriginX: 'horiz-origin-x',
      horizOriginY: 'horiz-origin-y',
      imageRendering: 'image-rendering',
      letterSpacing: 'letter-spacing',
      lightingColor: 'lighting-color',
      markerEnd: 'marker-end',
      markerMid: 'marker-mid',
      markerStart: 'marker-start',
      navDown: 'nav-down',
      navDownLeft: 'nav-down-left',
      navDownRight: 'nav-down-right',
      navLeft: 'nav-left',
      navNext: 'nav-next',
      navPrev: 'nav-prev',
      navRight: 'nav-right',
      navUp: 'nav-up',
      navUpLeft: 'nav-up-left',
      navUpRight: 'nav-up-right',
      onAbort: 'onabort',
      onActivate: 'onactivate',
      onAfterPrint: 'onafterprint',
      onBeforePrint: 'onbeforeprint',
      onBegin: 'onbegin',
      onCancel: 'oncancel',
      onCanPlay: 'oncanplay',
      onCanPlayThrough: 'oncanplaythrough',
      onChange: 'onchange',
      onClick: 'onclick',
      onClose: 'onclose',
      onCopy: 'oncopy',
      onCueChange: 'oncuechange',
      onCut: 'oncut',
      onDblClick: 'ondblclick',
      onDrag: 'ondrag',
      onDragEnd: 'ondragend',
      onDragEnter: 'ondragenter',
      onDragExit: 'ondragexit',
      onDragLeave: 'ondragleave',
      onDragOver: 'ondragover',
      onDragStart: 'ondragstart',
      onDrop: 'ondrop',
      onDurationChange: 'ondurationchange',
      onEmptied: 'onemptied',
      onEnd: 'onend',
      onEnded: 'onended',
      onError: 'onerror',
      onFocus: 'onfocus',
      onFocusIn: 'onfocusin',
      onFocusOut: 'onfocusout',
      onHashChange: 'onhashchange',
      onInput: 'oninput',
      onInvalid: 'oninvalid',
      onKeyDown: 'onkeydown',
      onKeyPress: 'onkeypress',
      onKeyUp: 'onkeyup',
      onLoad: 'onload',
      onLoadedData: 'onloadeddata',
      onLoadedMetadata: 'onloadedmetadata',
      onLoadStart: 'onloadstart',
      onMessage: 'onmessage',
      onMouseDown: 'onmousedown',
      onMouseEnter: 'onmouseenter',
      onMouseLeave: 'onmouseleave',
      onMouseMove: 'onmousemove',
      onMouseOut: 'onmouseout',
      onMouseOver: 'onmouseover',
      onMouseUp: 'onmouseup',
      onMouseWheel: 'onmousewheel',
      onOffline: 'onoffline',
      onOnline: 'ononline',
      onPageHide: 'onpagehide',
      onPageShow: 'onpageshow',
      onPaste: 'onpaste',
      onPause: 'onpause',
      onPlay: 'onplay',
      onPlaying: 'onplaying',
      onPopState: 'onpopstate',
      onProgress: 'onprogress',
      onRateChange: 'onratechange',
      onRepeat: 'onrepeat',
      onReset: 'onreset',
      onResize: 'onresize',
      onScroll: 'onscroll',
      onSeeked: 'onseeked',
      onSeeking: 'onseeking',
      onSelect: 'onselect',
      onShow: 'onshow',
      onStalled: 'onstalled',
      onStorage: 'onstorage',
      onSubmit: 'onsubmit',
      onSuspend: 'onsuspend',
      onTimeUpdate: 'ontimeupdate',
      onToggle: 'ontoggle',
      onUnload: 'onunload',
      onVolumeChange: 'onvolumechange',
      onWaiting: 'onwaiting',
      onZoom: 'onzoom',
      overlinePosition: 'overline-position',
      overlineThickness: 'overline-thickness',
      paintOrder: 'paint-order',
      panose1: 'panose-1',
      pointerEvents: 'pointer-events',
      referrerPolicy: 'referrerpolicy',
      renderingIntent: 'rendering-intent',
      shapeRendering: 'shape-rendering',
      stopColor: 'stop-color',
      stopOpacity: 'stop-opacity',
      strikethroughPosition: 'strikethrough-position',
      strikethroughThickness: 'strikethrough-thickness',
      strokeDashArray: 'stroke-dasharray',
      strokeDashOffset: 'stroke-dashoffset',
      strokeLineCap: 'stroke-linecap',
      strokeLineJoin: 'stroke-linejoin',
      strokeMiterLimit: 'stroke-miterlimit',
      strokeOpacity: 'stroke-opacity',
      strokeWidth: 'stroke-width',
      tabIndex: 'tabindex',
      textAnchor: 'text-anchor',
      textDecoration: 'text-decoration',
      textRendering: 'text-rendering',
      transformOrigin: 'transform-origin',
      typeOf: 'typeof',
      underlinePosition: 'underline-position',
      underlineThickness: 'underline-thickness',
      unicodeBidi: 'unicode-bidi',
      unicodeRange: 'unicode-range',
      unitsPerEm: 'units-per-em',
      vAlphabetic: 'v-alphabetic',
      vHanging: 'v-hanging',
      vIdeographic: 'v-ideographic',
      vMathematical: 'v-mathematical',
      vectorEffect: 'vector-effect',
      vertAdvY: 'vert-adv-y',
      vertOriginX: 'vert-origin-x',
      vertOriginY: 'vert-origin-y',
      wordSpacing: 'word-spacing',
      writingMode: 'writing-mode',
      xHeight: 'x-height',
      playbackOrder: 'playbackorder',
      timelineBegin: 'timelinebegin',
    },
    properties: {
      about: Dt,
      accentHeight: W,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: W,
      amplitude: W,
      arabicForm: null,
      ascent: W,
      attributeName: null,
      attributeType: null,
      azimuth: W,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: W,
      by: null,
      calcMode: null,
      capHeight: W,
      className: Be,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: W,
      diffuseConstant: W,
      direction: null,
      display: null,
      dur: null,
      divisor: W,
      dominantBaseline: null,
      download: Ne,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: W,
      enableBackground: null,
      end: null,
      event: null,
      exponent: W,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: W,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: Qr,
      g2: Qr,
      glyphName: Qr,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: W,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: W,
      horizOriginX: W,
      horizOriginY: W,
      id: null,
      ideographic: W,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: W,
      k: W,
      k1: W,
      k2: W,
      k3: W,
      k4: W,
      kernelMatrix: Dt,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: W,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: W,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: W,
      overlineThickness: W,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: W,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: Be,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: W,
      pointsAtY: W,
      pointsAtZ: W,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: Dt,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: Dt,
      rev: Dt,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: Dt,
      requiredFeatures: Dt,
      requiredFonts: Dt,
      requiredFormats: Dt,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: W,
      specularExponent: W,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: W,
      strikethroughThickness: W,
      string: null,
      stroke: null,
      strokeDashArray: Dt,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: W,
      strokeOpacity: W,
      strokeWidth: null,
      style: null,
      surfaceScale: W,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: Dt,
      tabIndex: W,
      tableValues: null,
      target: null,
      targetX: W,
      targetY: W,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: Dt,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: W,
      underlineThickness: W,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: W,
      values: null,
      vAlphabetic: W,
      vMathematical: W,
      vectorEffect: null,
      vHanging: W,
      vIdeographic: W,
      version: null,
      vertAdvY: W,
      vertOriginX: W,
      vertOriginY: W,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: W,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: 'svg',
    transform: pp,
  }),
  mp = Kr({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
    space: 'xlink',
    transform(n, i) {
      return 'xlink:' + i.slice(5).toLowerCase();
    },
  }),
  gp = Kr({
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    properties: { xmlnsXLink: null, xmlns: null },
    space: 'xmlns',
    transform: hp,
  }),
  yp = Kr({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: 'xml',
    transform(n, i) {
      return 'xml:' + i.slice(3).toLowerCase();
    },
  }),
  Vy = {
    classId: 'classID',
    dataType: 'datatype',
    itemId: 'itemID',
    strokeDashArray: 'strokeDasharray',
    strokeDashOffset: 'strokeDashoffset',
    strokeLineCap: 'strokeLinecap',
    strokeLineJoin: 'strokeLinejoin',
    strokeMiterLimit: 'strokeMiterlimit',
    typeOf: 'typeof',
    xLinkActuate: 'xlinkActuate',
    xLinkArcRole: 'xlinkArcrole',
    xLinkHref: 'xlinkHref',
    xLinkRole: 'xlinkRole',
    xLinkShow: 'xlinkShow',
    xLinkTitle: 'xlinkTitle',
    xLinkType: 'xlinkType',
    xmlnsXLink: 'xmlnsXlink',
  },
  Hy = /[A-Z]/g,
  sd = /-[a-z]/g,
  $y = /^data[-\w.:]+$/i;
function Wy(n, i) {
  const l = Oa(i);
  let s = i,
    u = Pt;
  if (l in n.normal) return n.property[n.normal[l]];
  if (l.length > 4 && l.slice(0, 4) === 'data' && $y.test(i)) {
    if (i.charAt(4) === '-') {
      const c = i.slice(5).replace(sd, qy);
      s = 'data' + c.charAt(0).toUpperCase() + c.slice(1);
    } else {
      const c = i.slice(4);
      if (!sd.test(c)) {
        let f = c.replace(Hy, Qy);
        (f.charAt(0) !== '-' && (f = '-' + f), (i = 'data' + f));
      }
    }
    u = Ya;
  }
  return new u(s, i);
}
function Qy(n) {
  return '-' + n.toLowerCase();
}
function qy(n) {
  return n.charAt(1).toUpperCase();
}
const Yy = fp([dp, By, mp, gp, yp], 'html'),
  Ga = fp([dp, Uy, mp, gp, yp], 'svg');
function Gy(n) {
  return n.join(' ').trim();
}
var Vr = {},
  ga,
  ad;
function Ky() {
  if (ad) return ga;
  ad = 1;
  var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    i = /\n/g,
    l = /^\s*/,
    s = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    u = /^:\s*/,
    c = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    f = /^[;\s]*/,
    p = /^\s+|\s+$/g,
    h = `
`,
    m = '/',
    g = '*',
    v = '',
    x = 'comment',
    k = 'declaration';
  function O(L, R) {
    if (typeof L != 'string') throw new TypeError('First argument must be a string');
    if (!L) return [];
    R = R || {};
    var M = 1,
      F = 1;
    function V(te) {
      var q = te.match(i);
      q && (M += q.length);
      var me = te.lastIndexOf(h);
      F = ~me ? te.length - me : F + te.length;
    }
    function ae() {
      var te = { line: M, column: F };
      return function (q) {
        return ((q.position = new z(te)), Se(), q);
      };
    }
    function z(te) {
      ((this.start = te), (this.end = { line: M, column: F }), (this.source = R.source));
    }
    z.prototype.content = L;
    function J(te) {
      var q = new Error(R.source + ':' + M + ':' + F + ': ' + te);
      if (
        ((q.reason = te),
        (q.filename = R.source),
        (q.line = M),
        (q.column = F),
        (q.source = L),
        !R.silent)
      )
        throw q;
    }
    function ve(te) {
      var q = te.exec(L);
      if (q) {
        var me = q[0];
        return (V(me), (L = L.slice(me.length)), q);
      }
    }
    function Se() {
      ve(l);
    }
    function Ce(te) {
      var q;
      for (te = te || []; (q = re()); ) q !== !1 && te.push(q);
      return te;
    }
    function re() {
      var te = ae();
      if (!(m != L.charAt(0) || g != L.charAt(1))) {
        for (var q = 2; v != L.charAt(q) && (g != L.charAt(q) || m != L.charAt(q + 1)); ) ++q;
        if (((q += 2), v === L.charAt(q - 1))) return J('End of comment missing');
        var me = L.slice(2, q - 2);
        return ((F += 2), V(me), (L = L.slice(q)), (F += 2), te({ type: x, comment: me }));
      }
    }
    function X() {
      var te = ae(),
        q = ve(s);
      if (q) {
        if ((re(), !ve(u))) return J("property missing ':'");
        var me = ve(c),
          ge = te({
            type: k,
            property: j(q[0].replace(n, v)),
            value: me ? j(me[0].replace(n, v)) : v,
          });
        return (ve(f), ge);
      }
    }
    function ke() {
      var te = [];
      Ce(te);
      for (var q; (q = X()); ) q !== !1 && (te.push(q), Ce(te));
      return te;
    }
    return (Se(), ke());
  }
  function j(L) {
    return L ? L.replace(p, v) : v;
  }
  return ((ga = O), ga);
}
var ud;
function Xy() {
  if (ud) return Vr;
  ud = 1;
  var n =
    (Vr && Vr.__importDefault) ||
    function (s) {
      return s && s.__esModule ? s : { default: s };
    };
  (Object.defineProperty(Vr, '__esModule', { value: !0 }), (Vr.default = l));
  const i = n(Ky());
  function l(s, u) {
    let c = null;
    if (!s || typeof s != 'string') return c;
    const f = (0, i.default)(s),
      p = typeof u == 'function';
    return (
      f.forEach((h) => {
        if (h.type !== 'declaration') return;
        const { property: m, value: g } = h;
        p ? u(m, g, h) : g && ((c = c || {}), (c[m] = g));
      }),
      c
    );
  }
  return Vr;
}
var Mi = {},
  cd;
function Zy() {
  if (cd) return Mi;
  ((cd = 1), Object.defineProperty(Mi, '__esModule', { value: !0 }), (Mi.camelCase = void 0));
  var n = /^--[a-zA-Z0-9_-]+$/,
    i = /-([a-z])/g,
    l = /^[^-]+$/,
    s = /^-(webkit|moz|ms|o|khtml)-/,
    u = /^-(ms)-/,
    c = function (m) {
      return !m || l.test(m) || n.test(m);
    },
    f = function (m, g) {
      return g.toUpperCase();
    },
    p = function (m, g) {
      return ''.concat(g, '-');
    },
    h = function (m, g) {
      return (
        g === void 0 && (g = {}),
        c(m)
          ? m
          : ((m = m.toLowerCase()),
            g.reactCompat ? (m = m.replace(u, p)) : (m = m.replace(s, p)),
            m.replace(i, f))
      );
    };
  return ((Mi.camelCase = h), Mi);
}
var Ai, fd;
function Jy() {
  if (fd) return Ai;
  fd = 1;
  var n =
      (Ai && Ai.__importDefault) ||
      function (u) {
        return u && u.__esModule ? u : { default: u };
      },
    i = n(Xy()),
    l = Zy();
  function s(u, c) {
    var f = {};
    return (
      !u ||
        typeof u != 'string' ||
        (0, i.default)(u, function (p, h) {
          p && h && (f[(0, l.camelCase)(p, c)] = h);
        }),
      f
    );
  }
  return ((s.default = s), (Ai = s), Ai);
}
var e1 = Jy();
const t1 = Qd(e1),
  vp = kp('end'),
  Ka = kp('start');
function kp(n) {
  return i;
  function i(l) {
    const s = (l && l.position && l.position[n]) || {};
    if (typeof s.line == 'number' && s.line > 0 && typeof s.column == 'number' && s.column > 0)
      return {
        line: s.line,
        column: s.column,
        offset: typeof s.offset == 'number' && s.offset > -1 ? s.offset : void 0,
      };
  }
}
function n1(n) {
  const i = Ka(n),
    l = vp(n);
  if (i && l) return { start: i, end: l };
}
function Bi(n) {
  return !n || typeof n != 'object'
    ? ''
    : 'position' in n || 'type' in n
      ? dd(n.position)
      : 'start' in n || 'end' in n
        ? dd(n)
        : 'line' in n || 'column' in n
          ? Ma(n)
          : '';
}
function Ma(n) {
  return pd(n && n.line) + ':' + pd(n && n.column);
}
function dd(n) {
  return Ma(n && n.start) + '-' + Ma(n && n.end);
}
function pd(n) {
  return n && typeof n == 'number' ? n : 1;
}
class wt extends Error {
  constructor(i, l, s) {
    (super(), typeof l == 'string' && ((s = l), (l = void 0)));
    let u = '',
      c = {},
      f = !1;
    if (
      (l &&
        ('line' in l && 'column' in l
          ? (c = { place: l })
          : 'start' in l && 'end' in l
            ? (c = { place: l })
            : 'type' in l
              ? (c = { ancestors: [l], place: l.position })
              : (c = { ...l })),
      typeof i == 'string' ? (u = i) : !c.cause && i && ((f = !0), (u = i.message), (c.cause = i)),
      !c.ruleId && !c.source && typeof s == 'string')
    ) {
      const h = s.indexOf(':');
      h === -1 ? (c.ruleId = s) : ((c.source = s.slice(0, h)), (c.ruleId = s.slice(h + 1)));
    }
    if (!c.place && c.ancestors && c.ancestors) {
      const h = c.ancestors[c.ancestors.length - 1];
      h && (c.place = h.position);
    }
    const p = c.place && 'start' in c.place ? c.place.start : c.place;
    ((this.ancestors = c.ancestors || void 0),
      (this.cause = c.cause || void 0),
      (this.column = p ? p.column : void 0),
      (this.fatal = void 0),
      (this.file = ''),
      (this.message = u),
      (this.line = p ? p.line : void 0),
      (this.name = Bi(c.place) || '1:1'),
      (this.place = c.place || void 0),
      (this.reason = this.message),
      (this.ruleId = c.ruleId || void 0),
      (this.source = c.source || void 0),
      (this.stack = f && c.cause && typeof c.cause.stack == 'string' ? c.cause.stack : ''),
      (this.actual = void 0),
      (this.expected = void 0),
      (this.note = void 0),
      (this.url = void 0));
  }
}
wt.prototype.file = '';
wt.prototype.name = '';
wt.prototype.reason = '';
wt.prototype.message = '';
wt.prototype.stack = '';
wt.prototype.column = void 0;
wt.prototype.line = void 0;
wt.prototype.ancestors = void 0;
wt.prototype.cause = void 0;
wt.prototype.fatal = void 0;
wt.prototype.place = void 0;
wt.prototype.ruleId = void 0;
wt.prototype.source = void 0;
const Xa = {}.hasOwnProperty,
  r1 = new Map(),
  i1 = /[A-Z]/g,
  l1 = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr']),
  o1 = new Set(['td', 'th']),
  wp = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';
function s1(n, i) {
  if (!i || i.Fragment === void 0) throw new TypeError('Expected `Fragment` in options');
  const l = i.filePath || void 0;
  let s;
  if (i.development) {
    if (typeof i.jsxDEV != 'function')
      throw new TypeError('Expected `jsxDEV` in options when `development: true`');
    s = m1(l, i.jsxDEV);
  } else {
    if (typeof i.jsx != 'function') throw new TypeError('Expected `jsx` in production options');
    if (typeof i.jsxs != 'function') throw new TypeError('Expected `jsxs` in production options');
    s = h1(l, i.jsx, i.jsxs);
  }
  const u = {
      Fragment: i.Fragment,
      ancestors: [],
      components: i.components || {},
      create: s,
      elementAttributeNameCase: i.elementAttributeNameCase || 'react',
      evaluater: i.createEvaluater ? i.createEvaluater() : void 0,
      filePath: l,
      ignoreInvalidStyle: i.ignoreInvalidStyle || !1,
      passKeys: i.passKeys !== !1,
      passNode: i.passNode || !1,
      schema: i.space === 'svg' ? Ga : Yy,
      stylePropertyNameCase: i.stylePropertyNameCase || 'dom',
      tableCellAlignToStyle: i.tableCellAlignToStyle !== !1,
    },
    c = xp(u, n, void 0);
  return c && typeof c != 'string' ? c : u.create(n, u.Fragment, { children: c || void 0 }, void 0);
}
function xp(n, i, l) {
  if (i.type === 'element') return a1(n, i, l);
  if (i.type === 'mdxFlowExpression' || i.type === 'mdxTextExpression') return u1(n, i);
  if (i.type === 'mdxJsxFlowElement' || i.type === 'mdxJsxTextElement') return f1(n, i, l);
  if (i.type === 'mdxjsEsm') return c1(n, i);
  if (i.type === 'root') return d1(n, i, l);
  if (i.type === 'text') return p1(n, i);
}
function a1(n, i, l) {
  const s = n.schema;
  let u = s;
  (i.tagName.toLowerCase() === 'svg' && s.space === 'html' && ((u = Ga), (n.schema = u)),
    n.ancestors.push(i));
  const c = _p(n, i.tagName, !1),
    f = g1(n, i);
  let p = Ja(n, i);
  return (
    l1.has(i.tagName) &&
      (p = p.filter(function (h) {
        return typeof h == 'string' ? !Dy(h) : !0;
      })),
    Sp(n, f, c, i),
    Za(f, p),
    n.ancestors.pop(),
    (n.schema = s),
    n.create(i, c, f, l)
  );
}
function u1(n, i) {
  if (i.data && i.data.estree && n.evaluater) {
    const s = i.data.estree.body[0];
    return (s.type, n.evaluater.evaluateExpression(s.expression));
  }
  Hi(n, i.position);
}
function c1(n, i) {
  if (i.data && i.data.estree && n.evaluater) return n.evaluater.evaluateProgram(i.data.estree);
  Hi(n, i.position);
}
function f1(n, i, l) {
  const s = n.schema;
  let u = s;
  (i.name === 'svg' && s.space === 'html' && ((u = Ga), (n.schema = u)), n.ancestors.push(i));
  const c = i.name === null ? n.Fragment : _p(n, i.name, !0),
    f = y1(n, i),
    p = Ja(n, i);
  return (Sp(n, f, c, i), Za(f, p), n.ancestors.pop(), (n.schema = s), n.create(i, c, f, l));
}
function d1(n, i, l) {
  const s = {};
  return (Za(s, Ja(n, i)), n.create(i, n.Fragment, s, l));
}
function p1(n, i) {
  return i.value;
}
function Sp(n, i, l, s) {
  typeof l != 'string' && l !== n.Fragment && n.passNode && (i.node = s);
}
function Za(n, i) {
  if (i.length > 0) {
    const l = i.length > 1 ? i : i[0];
    l && (n.children = l);
  }
}
function h1(n, i, l) {
  return s;
  function s(u, c, f, p) {
    const m = Array.isArray(f.children) ? l : i;
    return p ? m(c, f, p) : m(c, f);
  }
}
function m1(n, i) {
  return l;
  function l(s, u, c, f) {
    const p = Array.isArray(c.children),
      h = Ka(s);
    return i(
      u,
      c,
      f,
      p,
      { columnNumber: h ? h.column - 1 : void 0, fileName: n, lineNumber: h ? h.line : void 0 },
      void 0
    );
  }
}
function g1(n, i) {
  const l = {};
  let s, u;
  for (u in i.properties)
    if (u !== 'children' && Xa.call(i.properties, u)) {
      const c = v1(n, u, i.properties[u]);
      if (c) {
        const [f, p] = c;
        n.tableCellAlignToStyle && f === 'align' && typeof p == 'string' && o1.has(i.tagName)
          ? (s = p)
          : (l[f] = p);
      }
    }
  if (s) {
    const c = l.style || (l.style = {});
    c[n.stylePropertyNameCase === 'css' ? 'text-align' : 'textAlign'] = s;
  }
  return l;
}
function y1(n, i) {
  const l = {};
  for (const s of i.attributes)
    if (s.type === 'mdxJsxExpressionAttribute')
      if (s.data && s.data.estree && n.evaluater) {
        const c = s.data.estree.body[0];
        c.type;
        const f = c.expression;
        f.type;
        const p = f.properties[0];
        (p.type, Object.assign(l, n.evaluater.evaluateExpression(p.argument)));
      } else Hi(n, i.position);
    else {
      const u = s.name;
      let c;
      if (s.value && typeof s.value == 'object')
        if (s.value.data && s.value.data.estree && n.evaluater) {
          const p = s.value.data.estree.body[0];
          (p.type, (c = n.evaluater.evaluateExpression(p.expression)));
        } else Hi(n, i.position);
      else c = s.value === null ? !0 : s.value;
      l[u] = c;
    }
  return l;
}
function Ja(n, i) {
  const l = [];
  let s = -1;
  const u = n.passKeys ? new Map() : r1;
  for (; ++s < i.children.length; ) {
    const c = i.children[s];
    let f;
    if (n.passKeys) {
      const h =
        c.type === 'element'
          ? c.tagName
          : c.type === 'mdxJsxFlowElement' || c.type === 'mdxJsxTextElement'
            ? c.name
            : void 0;
      if (h) {
        const m = u.get(h) || 0;
        ((f = h + '-' + m), u.set(h, m + 1));
      }
    }
    const p = xp(n, c, f);
    p !== void 0 && l.push(p);
  }
  return l;
}
function v1(n, i, l) {
  const s = Wy(n.schema, i);
  if (!(l == null || (typeof l == 'number' && Number.isNaN(l)))) {
    if ((Array.isArray(l) && (l = s.commaSeparated ? Oy(l) : Gy(l)), s.property === 'style')) {
      let u = typeof l == 'object' ? l : k1(n, String(l));
      return (n.stylePropertyNameCase === 'css' && (u = w1(u)), ['style', u]);
    }
    return [
      n.elementAttributeNameCase === 'react' && s.space
        ? Vy[s.property] || s.property
        : s.attribute,
      l,
    ];
  }
}
function k1(n, i) {
  try {
    return t1(i, { reactCompat: !0 });
  } catch (l) {
    if (n.ignoreInvalidStyle) return {};
    const s = l,
      u = new wt('Cannot parse `style` attribute', {
        ancestors: n.ancestors,
        cause: s,
        ruleId: 'style',
        source: 'hast-util-to-jsx-runtime',
      });
    throw ((u.file = n.filePath || void 0), (u.url = wp + '#cannot-parse-style-attribute'), u);
  }
}
function _p(n, i, l) {
  let s;
  if (!l) s = { type: 'Literal', value: i };
  else if (i.includes('.')) {
    const u = i.split('.');
    let c = -1,
      f;
    for (; ++c < u.length; ) {
      const p = id(u[c]) ? { type: 'Identifier', name: u[c] } : { type: 'Literal', value: u[c] };
      f = f
        ? {
            type: 'MemberExpression',
            object: f,
            property: p,
            computed: !!(c && p.type === 'Literal'),
            optional: !1,
          }
        : p;
    }
    s = f;
  } else
    s =
      id(i) && !/^[a-z]/.test(i) ? { type: 'Identifier', name: i } : { type: 'Literal', value: i };
  if (s.type === 'Literal') {
    const u = s.value;
    return Xa.call(n.components, u) ? n.components[u] : u;
  }
  if (n.evaluater) return n.evaluater.evaluateExpression(s);
  Hi(n);
}
function Hi(n, i) {
  const l = new wt('Cannot handle MDX estrees without `createEvaluater`', {
    ancestors: n.ancestors,
    place: i,
    ruleId: 'mdx-estree',
    source: 'hast-util-to-jsx-runtime',
  });
  throw (
    (l.file = n.filePath || void 0),
    (l.url = wp + '#cannot-handle-mdx-estrees-without-createevaluater'),
    l
  );
}
function w1(n) {
  const i = {};
  let l;
  for (l in n) Xa.call(n, l) && (i[x1(l)] = n[l]);
  return i;
}
function x1(n) {
  let i = n.replace(i1, S1);
  return (i.slice(0, 3) === 'ms-' && (i = '-' + i), i);
}
function S1(n) {
  return '-' + n.toLowerCase();
}
const ya = {
    action: ['form'],
    cite: ['blockquote', 'del', 'ins', 'q'],
    data: ['object'],
    formAction: ['button', 'input'],
    href: ['a', 'area', 'base', 'link'],
    icon: ['menuitem'],
    itemId: null,
    manifest: ['html'],
    ping: ['a', 'area'],
    poster: ['video'],
    src: ['audio', 'embed', 'iframe', 'img', 'input', 'script', 'source', 'track', 'video'],
  },
  _1 = {};
function C1(n, i) {
  const l = _1,
    s = typeof l.includeImageAlt == 'boolean' ? l.includeImageAlt : !0,
    u = typeof l.includeHtml == 'boolean' ? l.includeHtml : !0;
  return Cp(n, s, u);
}
function Cp(n, i, l) {
  if (E1(n)) {
    if ('value' in n) return n.type === 'html' && !l ? '' : n.value;
    if (i && 'alt' in n && n.alt) return n.alt;
    if ('children' in n) return hd(n.children, i, l);
  }
  return Array.isArray(n) ? hd(n, i, l) : '';
}
function hd(n, i, l) {
  const s = [];
  let u = -1;
  for (; ++u < n.length; ) s[u] = Cp(n[u], i, l);
  return s.join('');
}
function E1(n) {
  return !!(n && typeof n == 'object');
}
const md = document.createElement('i');
function eu(n) {
  const i = '&' + n + ';';
  md.innerHTML = i;
  const l = md.textContent;
  return (l.charCodeAt(l.length - 1) === 59 && n !== 'semi') || l === i ? !1 : l;
}
function pn(n, i, l, s) {
  const u = n.length;
  let c = 0,
    f;
  if ((i < 0 ? (i = -i > u ? 0 : u + i) : (i = i > u ? u : i), (l = l > 0 ? l : 0), s.length < 1e4))
    ((f = Array.from(s)), f.unshift(i, l), n.splice(...f));
  else
    for (l && n.splice(i, l); c < s.length; )
      ((f = s.slice(c, c + 1e4)), f.unshift(i, 0), n.splice(...f), (c += 1e4), (i += 1e4));
}
function Gt(n, i) {
  return n.length > 0 ? (pn(n, n.length, 0, i), n) : i;
}
const gd = {}.hasOwnProperty;
function N1(n) {
  const i = {};
  let l = -1;
  for (; ++l < n.length; ) I1(i, n[l]);
  return i;
}
function I1(n, i) {
  let l;
  for (l in i) {
    const u = (gd.call(n, l) ? n[l] : void 0) || (n[l] = {}),
      c = i[l];
    let f;
    if (c)
      for (f in c) {
        gd.call(u, f) || (u[f] = []);
        const p = c[f];
        T1(u[f], Array.isArray(p) ? p : p ? [p] : []);
      }
  }
}
function T1(n, i) {
  let l = -1;
  const s = [];
  for (; ++l < i.length; ) (i[l].add === 'after' ? n : s).push(i[l]);
  pn(n, 0, 0, s);
}
function Ep(n, i) {
  const l = Number.parseInt(n, i);
  return l < 9 ||
    l === 11 ||
    (l > 13 && l < 32) ||
    (l > 126 && l < 160) ||
    (l > 55295 && l < 57344) ||
    (l > 64975 && l < 65008) ||
    (l & 65535) === 65535 ||
    (l & 65535) === 65534 ||
    l > 1114111
    ? '�'
    : String.fromCodePoint(l);
}
function qr(n) {
  return n
    .replace(/[\t\n\r ]+/g, ' ')
    .replace(/^ | $/g, '')
    .toLowerCase()
    .toUpperCase();
}
const dn = Zn(/[A-Za-z]/),
  Ft = Zn(/[\dA-Za-z]/),
  b1 = Zn(/[#-'*+\--9=?A-Z^-~]/);
function Aa(n) {
  return n !== null && (n < 32 || n === 127);
}
const Da = Zn(/\d/),
  j1 = Zn(/[\dA-Fa-f]/),
  L1 = Zn(/[!-/:-@[-`{-~]/);
function xe(n) {
  return n !== null && n < -2;
}
function Lt(n) {
  return n !== null && (n < 0 || n === 32);
}
function Me(n) {
  return n === -2 || n === -1 || n === 32;
}
const P1 = Zn(new RegExp('\\p{P}|\\p{S}', 'u')),
  O1 = Zn(/\s/);
function Zn(n) {
  return i;
  function i(l) {
    return l !== null && l > -1 && n.test(String.fromCharCode(l));
  }
}
function Xr(n) {
  const i = [];
  let l = -1,
    s = 0,
    u = 0;
  for (; ++l < n.length; ) {
    const c = n.charCodeAt(l);
    let f = '';
    if (c === 37 && Ft(n.charCodeAt(l + 1)) && Ft(n.charCodeAt(l + 2))) u = 2;
    else if (c < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c)) || (f = String.fromCharCode(c));
    else if (c > 55295 && c < 57344) {
      const p = n.charCodeAt(l + 1);
      c < 56320 && p > 56319 && p < 57344 ? ((f = String.fromCharCode(c, p)), (u = 1)) : (f = '�');
    } else f = String.fromCharCode(c);
    (f && (i.push(n.slice(s, l), encodeURIComponent(f)), (s = l + u + 1), (f = '')),
      u && ((l += u), (u = 0)));
  }
  return i.join('') + n.slice(s);
}
function Ue(n, i, l, s) {
  const u = s ? s - 1 : Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(h) {
    return Me(h) ? (n.enter(l), p(h)) : i(h);
  }
  function p(h) {
    return Me(h) && c++ < u ? (n.consume(h), p) : (n.exit(l), i(h));
  }
}
const z1 = { tokenize: R1 };
function R1(n) {
  const i = n.attempt(this.parser.constructs.contentInitial, s, u);
  let l;
  return i;
  function s(p) {
    if (p === null) {
      n.consume(p);
      return;
    }
    return (n.enter('lineEnding'), n.consume(p), n.exit('lineEnding'), Ue(n, i, 'linePrefix'));
  }
  function u(p) {
    return (n.enter('paragraph'), c(p));
  }
  function c(p) {
    const h = n.enter('chunkText', { contentType: 'text', previous: l });
    return (l && (l.next = h), (l = h), f(p));
  }
  function f(p) {
    if (p === null) {
      (n.exit('chunkText'), n.exit('paragraph'), n.consume(p));
      return;
    }
    return xe(p) ? (n.consume(p), n.exit('chunkText'), c) : (n.consume(p), f);
  }
}
const M1 = { tokenize: A1 },
  yd = { tokenize: D1 };
function A1(n) {
  const i = this,
    l = [];
  let s = 0,
    u,
    c,
    f;
  return p;
  function p(F) {
    if (s < l.length) {
      const V = l[s];
      return ((i.containerState = V[1]), n.attempt(V[0].continuation, h, m)(F));
    }
    return m(F);
  }
  function h(F) {
    if ((s++, i.containerState._closeFlow)) {
      ((i.containerState._closeFlow = void 0), u && M());
      const V = i.events.length;
      let ae = V,
        z;
      for (; ae--; )
        if (i.events[ae][0] === 'exit' && i.events[ae][1].type === 'chunkFlow') {
          z = i.events[ae][1].end;
          break;
        }
      R(s);
      let J = V;
      for (; J < i.events.length; ) ((i.events[J][1].end = { ...z }), J++);
      return (pn(i.events, ae + 1, 0, i.events.slice(V)), (i.events.length = J), m(F));
    }
    return p(F);
  }
  function m(F) {
    if (s === l.length) {
      if (!u) return x(F);
      if (u.currentConstruct && u.currentConstruct.concrete) return O(F);
      i.interrupt = !!(u.currentConstruct && !u._gfmTableDynamicInterruptHack);
    }
    return ((i.containerState = {}), n.check(yd, g, v)(F));
  }
  function g(F) {
    return (u && M(), R(s), x(F));
  }
  function v(F) {
    return ((i.parser.lazy[i.now().line] = s !== l.length), (f = i.now().offset), O(F));
  }
  function x(F) {
    return ((i.containerState = {}), n.attempt(yd, k, O)(F));
  }
  function k(F) {
    return (s++, l.push([i.currentConstruct, i.containerState]), x(F));
  }
  function O(F) {
    if (F === null) {
      (u && M(), R(0), n.consume(F));
      return;
    }
    return (
      (u = u || i.parser.flow(i.now())),
      n.enter('chunkFlow', { _tokenizer: u, contentType: 'flow', previous: c }),
      j(F)
    );
  }
  function j(F) {
    if (F === null) {
      (L(n.exit('chunkFlow'), !0), R(0), n.consume(F));
      return;
    }
    return xe(F)
      ? (n.consume(F), L(n.exit('chunkFlow')), (s = 0), (i.interrupt = void 0), p)
      : (n.consume(F), j);
  }
  function L(F, V) {
    const ae = i.sliceStream(F);
    if (
      (V && ae.push(null),
      (F.previous = c),
      c && (c.next = F),
      (c = F),
      u.defineSkip(F.start),
      u.write(ae),
      i.parser.lazy[F.start.line])
    ) {
      let z = u.events.length;
      for (; z--; )
        if (
          u.events[z][1].start.offset < f &&
          (!u.events[z][1].end || u.events[z][1].end.offset > f)
        )
          return;
      const J = i.events.length;
      let ve = J,
        Se,
        Ce;
      for (; ve--; )
        if (i.events[ve][0] === 'exit' && i.events[ve][1].type === 'chunkFlow') {
          if (Se) {
            Ce = i.events[ve][1].end;
            break;
          }
          Se = !0;
        }
      for (R(s), z = J; z < i.events.length; ) ((i.events[z][1].end = { ...Ce }), z++);
      (pn(i.events, ve + 1, 0, i.events.slice(J)), (i.events.length = z));
    }
  }
  function R(F) {
    let V = l.length;
    for (; V-- > F; ) {
      const ae = l[V];
      ((i.containerState = ae[1]), ae[0].exit.call(i, n));
    }
    l.length = F;
  }
  function M() {
    (u.write([null]), (c = void 0), (u = void 0), (i.containerState._closeFlow = void 0));
  }
}
function D1(n, i, l) {
  return Ue(
    n,
    n.attempt(this.parser.constructs.document, i, l),
    'linePrefix',
    this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
  );
}
function vd(n) {
  if (n === null || Lt(n) || O1(n)) return 1;
  if (P1(n)) return 2;
}
function tu(n, i, l) {
  const s = [];
  let u = -1;
  for (; ++u < n.length; ) {
    const c = n[u].resolveAll;
    c && !s.includes(c) && ((i = c(i, l)), s.push(c));
  }
  return i;
}
const Fa = { name: 'attention', resolveAll: F1, tokenize: B1 };
function F1(n, i) {
  let l = -1,
    s,
    u,
    c,
    f,
    p,
    h,
    m,
    g;
  for (; ++l < n.length; )
    if (n[l][0] === 'enter' && n[l][1].type === 'attentionSequence' && n[l][1]._close) {
      for (s = l; s--; )
        if (
          n[s][0] === 'exit' &&
          n[s][1].type === 'attentionSequence' &&
          n[s][1]._open &&
          i.sliceSerialize(n[s][1]).charCodeAt(0) === i.sliceSerialize(n[l][1]).charCodeAt(0)
        ) {
          if (
            (n[s][1]._close || n[l][1]._open) &&
            (n[l][1].end.offset - n[l][1].start.offset) % 3 &&
            !(
              (n[s][1].end.offset -
                n[s][1].start.offset +
                n[l][1].end.offset -
                n[l][1].start.offset) %
              3
            )
          )
            continue;
          h =
            n[s][1].end.offset - n[s][1].start.offset > 1 &&
            n[l][1].end.offset - n[l][1].start.offset > 1
              ? 2
              : 1;
          const v = { ...n[s][1].end },
            x = { ...n[l][1].start };
          (kd(v, -h),
            kd(x, h),
            (f = {
              type: h > 1 ? 'strongSequence' : 'emphasisSequence',
              start: v,
              end: { ...n[s][1].end },
            }),
            (p = {
              type: h > 1 ? 'strongSequence' : 'emphasisSequence',
              start: { ...n[l][1].start },
              end: x,
            }),
            (c = {
              type: h > 1 ? 'strongText' : 'emphasisText',
              start: { ...n[s][1].end },
              end: { ...n[l][1].start },
            }),
            (u = { type: h > 1 ? 'strong' : 'emphasis', start: { ...f.start }, end: { ...p.end } }),
            (n[s][1].end = { ...f.start }),
            (n[l][1].start = { ...p.end }),
            (m = []),
            n[s][1].end.offset - n[s][1].start.offset &&
              (m = Gt(m, [
                ['enter', n[s][1], i],
                ['exit', n[s][1], i],
              ])),
            (m = Gt(m, [
              ['enter', u, i],
              ['enter', f, i],
              ['exit', f, i],
              ['enter', c, i],
            ])),
            (m = Gt(m, tu(i.parser.constructs.insideSpan.null, n.slice(s + 1, l), i))),
            (m = Gt(m, [
              ['exit', c, i],
              ['enter', p, i],
              ['exit', p, i],
              ['exit', u, i],
            ])),
            n[l][1].end.offset - n[l][1].start.offset
              ? ((g = 2),
                (m = Gt(m, [
                  ['enter', n[l][1], i],
                  ['exit', n[l][1], i],
                ])))
              : (g = 0),
            pn(n, s - 1, l - s + 3, m),
            (l = s + m.length - g - 2));
          break;
        }
    }
  for (l = -1; ++l < n.length; ) n[l][1].type === 'attentionSequence' && (n[l][1].type = 'data');
  return n;
}
function B1(n, i) {
  const l = this.parser.constructs.attentionMarkers.null,
    s = this.previous,
    u = vd(s);
  let c;
  return f;
  function f(h) {
    return ((c = h), n.enter('attentionSequence'), p(h));
  }
  function p(h) {
    if (h === c) return (n.consume(h), p);
    const m = n.exit('attentionSequence'),
      g = vd(h),
      v = !g || (g === 2 && u) || l.includes(h),
      x = !u || (u === 2 && g) || l.includes(s);
    return (
      (m._open = !!(c === 42 ? v : v && (u || !x))),
      (m._close = !!(c === 42 ? x : x && (g || !v))),
      i(h)
    );
  }
}
function kd(n, i) {
  ((n.column += i), (n.offset += i), (n._bufferIndex += i));
}
const U1 = { name: 'autolink', tokenize: V1 };
function V1(n, i, l) {
  let s = 0;
  return u;
  function u(k) {
    return (
      n.enter('autolink'),
      n.enter('autolinkMarker'),
      n.consume(k),
      n.exit('autolinkMarker'),
      n.enter('autolinkProtocol'),
      c
    );
  }
  function c(k) {
    return dn(k) ? (n.consume(k), f) : k === 64 ? l(k) : m(k);
  }
  function f(k) {
    return k === 43 || k === 45 || k === 46 || Ft(k) ? ((s = 1), p(k)) : m(k);
  }
  function p(k) {
    return k === 58
      ? (n.consume(k), (s = 0), h)
      : (k === 43 || k === 45 || k === 46 || Ft(k)) && s++ < 32
        ? (n.consume(k), p)
        : ((s = 0), m(k));
  }
  function h(k) {
    return k === 62
      ? (n.exit('autolinkProtocol'),
        n.enter('autolinkMarker'),
        n.consume(k),
        n.exit('autolinkMarker'),
        n.exit('autolink'),
        i)
      : k === null || k === 32 || k === 60 || Aa(k)
        ? l(k)
        : (n.consume(k), h);
  }
  function m(k) {
    return k === 64 ? (n.consume(k), g) : b1(k) ? (n.consume(k), m) : l(k);
  }
  function g(k) {
    return Ft(k) ? v(k) : l(k);
  }
  function v(k) {
    return k === 46
      ? (n.consume(k), (s = 0), g)
      : k === 62
        ? ((n.exit('autolinkProtocol').type = 'autolinkEmail'),
          n.enter('autolinkMarker'),
          n.consume(k),
          n.exit('autolinkMarker'),
          n.exit('autolink'),
          i)
        : x(k);
  }
  function x(k) {
    if ((k === 45 || Ft(k)) && s++ < 63) {
      const O = k === 45 ? x : v;
      return (n.consume(k), O);
    }
    return l(k);
  }
}
const vo = { partial: !0, tokenize: H1 };
function H1(n, i, l) {
  return s;
  function s(c) {
    return Me(c) ? Ue(n, u, 'linePrefix')(c) : u(c);
  }
  function u(c) {
    return c === null || xe(c) ? i(c) : l(c);
  }
}
const Np = { continuation: { tokenize: W1 }, exit: Q1, name: 'blockQuote', tokenize: $1 };
function $1(n, i, l) {
  const s = this;
  return u;
  function u(f) {
    if (f === 62) {
      const p = s.containerState;
      return (
        p.open || (n.enter('blockQuote', { _container: !0 }), (p.open = !0)),
        n.enter('blockQuotePrefix'),
        n.enter('blockQuoteMarker'),
        n.consume(f),
        n.exit('blockQuoteMarker'),
        c
      );
    }
    return l(f);
  }
  function c(f) {
    return Me(f)
      ? (n.enter('blockQuotePrefixWhitespace'),
        n.consume(f),
        n.exit('blockQuotePrefixWhitespace'),
        n.exit('blockQuotePrefix'),
        i)
      : (n.exit('blockQuotePrefix'), i(f));
  }
}
function W1(n, i, l) {
  const s = this;
  return u;
  function u(f) {
    return Me(f)
      ? Ue(
          n,
          c,
          'linePrefix',
          s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
        )(f)
      : c(f);
  }
  function c(f) {
    return n.attempt(Np, i, l)(f);
  }
}
function Q1(n) {
  n.exit('blockQuote');
}
const Ip = { name: 'characterEscape', tokenize: q1 };
function q1(n, i, l) {
  return s;
  function s(c) {
    return (
      n.enter('characterEscape'),
      n.enter('escapeMarker'),
      n.consume(c),
      n.exit('escapeMarker'),
      u
    );
  }
  function u(c) {
    return L1(c)
      ? (n.enter('characterEscapeValue'),
        n.consume(c),
        n.exit('characterEscapeValue'),
        n.exit('characterEscape'),
        i)
      : l(c);
  }
}
const Tp = { name: 'characterReference', tokenize: Y1 };
function Y1(n, i, l) {
  const s = this;
  let u = 0,
    c,
    f;
  return p;
  function p(v) {
    return (
      n.enter('characterReference'),
      n.enter('characterReferenceMarker'),
      n.consume(v),
      n.exit('characterReferenceMarker'),
      h
    );
  }
  function h(v) {
    return v === 35
      ? (n.enter('characterReferenceMarkerNumeric'),
        n.consume(v),
        n.exit('characterReferenceMarkerNumeric'),
        m)
      : (n.enter('characterReferenceValue'), (c = 31), (f = Ft), g(v));
  }
  function m(v) {
    return v === 88 || v === 120
      ? (n.enter('characterReferenceMarkerHexadecimal'),
        n.consume(v),
        n.exit('characterReferenceMarkerHexadecimal'),
        n.enter('characterReferenceValue'),
        (c = 6),
        (f = j1),
        g)
      : (n.enter('characterReferenceValue'), (c = 7), (f = Da), g(v));
  }
  function g(v) {
    if (v === 59 && u) {
      const x = n.exit('characterReferenceValue');
      return f === Ft && !eu(s.sliceSerialize(x))
        ? l(v)
        : (n.enter('characterReferenceMarker'),
          n.consume(v),
          n.exit('characterReferenceMarker'),
          n.exit('characterReference'),
          i);
    }
    return f(v) && u++ < c ? (n.consume(v), g) : l(v);
  }
}
const wd = { partial: !0, tokenize: K1 },
  xd = { concrete: !0, name: 'codeFenced', tokenize: G1 };
function G1(n, i, l) {
  const s = this,
    u = { partial: !0, tokenize: ae };
  let c = 0,
    f = 0,
    p;
  return h;
  function h(z) {
    return m(z);
  }
  function m(z) {
    const J = s.events[s.events.length - 1];
    return (
      (c = J && J[1].type === 'linePrefix' ? J[2].sliceSerialize(J[1], !0).length : 0),
      (p = z),
      n.enter('codeFenced'),
      n.enter('codeFencedFence'),
      n.enter('codeFencedFenceSequence'),
      g(z)
    );
  }
  function g(z) {
    return z === p
      ? (f++, n.consume(z), g)
      : f < 3
        ? l(z)
        : (n.exit('codeFencedFenceSequence'), Me(z) ? Ue(n, v, 'whitespace')(z) : v(z));
  }
  function v(z) {
    return z === null || xe(z)
      ? (n.exit('codeFencedFence'), s.interrupt ? i(z) : n.check(wd, j, V)(z))
      : (n.enter('codeFencedFenceInfo'), n.enter('chunkString', { contentType: 'string' }), x(z));
  }
  function x(z) {
    return z === null || xe(z)
      ? (n.exit('chunkString'), n.exit('codeFencedFenceInfo'), v(z))
      : Me(z)
        ? (n.exit('chunkString'), n.exit('codeFencedFenceInfo'), Ue(n, k, 'whitespace')(z))
        : z === 96 && z === p
          ? l(z)
          : (n.consume(z), x);
  }
  function k(z) {
    return z === null || xe(z)
      ? v(z)
      : (n.enter('codeFencedFenceMeta'), n.enter('chunkString', { contentType: 'string' }), O(z));
  }
  function O(z) {
    return z === null || xe(z)
      ? (n.exit('chunkString'), n.exit('codeFencedFenceMeta'), v(z))
      : z === 96 && z === p
        ? l(z)
        : (n.consume(z), O);
  }
  function j(z) {
    return n.attempt(u, V, L)(z);
  }
  function L(z) {
    return (n.enter('lineEnding'), n.consume(z), n.exit('lineEnding'), R);
  }
  function R(z) {
    return c > 0 && Me(z) ? Ue(n, M, 'linePrefix', c + 1)(z) : M(z);
  }
  function M(z) {
    return z === null || xe(z) ? n.check(wd, j, V)(z) : (n.enter('codeFlowValue'), F(z));
  }
  function F(z) {
    return z === null || xe(z) ? (n.exit('codeFlowValue'), M(z)) : (n.consume(z), F);
  }
  function V(z) {
    return (n.exit('codeFenced'), i(z));
  }
  function ae(z, J, ve) {
    let Se = 0;
    return Ce;
    function Ce(q) {
      return (z.enter('lineEnding'), z.consume(q), z.exit('lineEnding'), re);
    }
    function re(q) {
      return (
        z.enter('codeFencedFence'),
        Me(q)
          ? Ue(
              z,
              X,
              'linePrefix',
              s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
            )(q)
          : X(q)
      );
    }
    function X(q) {
      return q === p ? (z.enter('codeFencedFenceSequence'), ke(q)) : ve(q);
    }
    function ke(q) {
      return q === p
        ? (Se++, z.consume(q), ke)
        : Se >= f
          ? (z.exit('codeFencedFenceSequence'), Me(q) ? Ue(z, te, 'whitespace')(q) : te(q))
          : ve(q);
    }
    function te(q) {
      return q === null || xe(q) ? (z.exit('codeFencedFence'), J(q)) : ve(q);
    }
  }
}
function K1(n, i, l) {
  const s = this;
  return u;
  function u(f) {
    return f === null ? l(f) : (n.enter('lineEnding'), n.consume(f), n.exit('lineEnding'), c);
  }
  function c(f) {
    return s.parser.lazy[s.now().line] ? l(f) : i(f);
  }
}
const va = { name: 'codeIndented', tokenize: Z1 },
  X1 = { partial: !0, tokenize: J1 };
function Z1(n, i, l) {
  const s = this;
  return u;
  function u(m) {
    return (n.enter('codeIndented'), Ue(n, c, 'linePrefix', 5)(m));
  }
  function c(m) {
    const g = s.events[s.events.length - 1];
    return g && g[1].type === 'linePrefix' && g[2].sliceSerialize(g[1], !0).length >= 4
      ? f(m)
      : l(m);
  }
  function f(m) {
    return m === null ? h(m) : xe(m) ? n.attempt(X1, f, h)(m) : (n.enter('codeFlowValue'), p(m));
  }
  function p(m) {
    return m === null || xe(m) ? (n.exit('codeFlowValue'), f(m)) : (n.consume(m), p);
  }
  function h(m) {
    return (n.exit('codeIndented'), i(m));
  }
}
function J1(n, i, l) {
  const s = this;
  return u;
  function u(f) {
    return s.parser.lazy[s.now().line]
      ? l(f)
      : xe(f)
        ? (n.enter('lineEnding'), n.consume(f), n.exit('lineEnding'), u)
        : Ue(n, c, 'linePrefix', 5)(f);
  }
  function c(f) {
    const p = s.events[s.events.length - 1];
    return p && p[1].type === 'linePrefix' && p[2].sliceSerialize(p[1], !0).length >= 4
      ? i(f)
      : xe(f)
        ? u(f)
        : l(f);
  }
}
const ev = { name: 'codeText', previous: nv, resolve: tv, tokenize: rv };
function tv(n) {
  let i = n.length - 4,
    l = 3,
    s,
    u;
  if (
    (n[l][1].type === 'lineEnding' || n[l][1].type === 'space') &&
    (n[i][1].type === 'lineEnding' || n[i][1].type === 'space')
  ) {
    for (s = l; ++s < i; )
      if (n[s][1].type === 'codeTextData') {
        ((n[l][1].type = 'codeTextPadding'),
          (n[i][1].type = 'codeTextPadding'),
          (l += 2),
          (i -= 2));
        break;
      }
  }
  for (s = l - 1, i++; ++s <= i; )
    u === void 0
      ? s !== i && n[s][1].type !== 'lineEnding' && (u = s)
      : (s === i || n[s][1].type === 'lineEnding') &&
        ((n[u][1].type = 'codeTextData'),
        s !== u + 2 &&
          ((n[u][1].end = n[s - 1][1].end),
          n.splice(u + 2, s - u - 2),
          (i -= s - u - 2),
          (s = u + 2)),
        (u = void 0));
  return n;
}
function nv(n) {
  return n !== 96 || this.events[this.events.length - 1][1].type === 'characterEscape';
}
function rv(n, i, l) {
  let s = 0,
    u,
    c;
  return f;
  function f(v) {
    return (n.enter('codeText'), n.enter('codeTextSequence'), p(v));
  }
  function p(v) {
    return v === 96 ? (n.consume(v), s++, p) : (n.exit('codeTextSequence'), h(v));
  }
  function h(v) {
    return v === null
      ? l(v)
      : v === 32
        ? (n.enter('space'), n.consume(v), n.exit('space'), h)
        : v === 96
          ? ((c = n.enter('codeTextSequence')), (u = 0), g(v))
          : xe(v)
            ? (n.enter('lineEnding'), n.consume(v), n.exit('lineEnding'), h)
            : (n.enter('codeTextData'), m(v));
  }
  function m(v) {
    return v === null || v === 32 || v === 96 || xe(v)
      ? (n.exit('codeTextData'), h(v))
      : (n.consume(v), m);
  }
  function g(v) {
    return v === 96
      ? (n.consume(v), u++, g)
      : u === s
        ? (n.exit('codeTextSequence'), n.exit('codeText'), i(v))
        : ((c.type = 'codeTextData'), m(v));
  }
}
class iv {
  constructor(i) {
    ((this.left = i ? [...i] : []), (this.right = []));
  }
  get(i) {
    if (i < 0 || i >= this.left.length + this.right.length)
      throw new RangeError(
        'Cannot access index `' +
          i +
          '` in a splice buffer of size `' +
          (this.left.length + this.right.length) +
          '`'
      );
    return i < this.left.length
      ? this.left[i]
      : this.right[this.right.length - i + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return (this.setCursor(0), this.right.pop());
  }
  slice(i, l) {
    const s = l ?? Number.POSITIVE_INFINITY;
    return s < this.left.length
      ? this.left.slice(i, s)
      : i > this.left.length
        ? this.right
            .slice(
              this.right.length - s + this.left.length,
              this.right.length - i + this.left.length
            )
            .reverse()
        : this.left
            .slice(i)
            .concat(this.right.slice(this.right.length - s + this.left.length).reverse());
  }
  splice(i, l, s) {
    const u = l || 0;
    this.setCursor(Math.trunc(i));
    const c = this.right.splice(this.right.length - u, Number.POSITIVE_INFINITY);
    return (s && Di(this.left, s), c.reverse());
  }
  pop() {
    return (this.setCursor(Number.POSITIVE_INFINITY), this.left.pop());
  }
  push(i) {
    (this.setCursor(Number.POSITIVE_INFINITY), this.left.push(i));
  }
  pushMany(i) {
    (this.setCursor(Number.POSITIVE_INFINITY), Di(this.left, i));
  }
  unshift(i) {
    (this.setCursor(0), this.right.push(i));
  }
  unshiftMany(i) {
    (this.setCursor(0), Di(this.right, i.reverse()));
  }
  setCursor(i) {
    if (
      !(
        i === this.left.length ||
        (i > this.left.length && this.right.length === 0) ||
        (i < 0 && this.left.length === 0)
      )
    )
      if (i < this.left.length) {
        const l = this.left.splice(i, Number.POSITIVE_INFINITY);
        Di(this.right, l.reverse());
      } else {
        const l = this.right.splice(
          this.left.length + this.right.length - i,
          Number.POSITIVE_INFINITY
        );
        Di(this.left, l.reverse());
      }
  }
}
function Di(n, i) {
  let l = 0;
  if (i.length < 1e4) n.push(...i);
  else for (; l < i.length; ) (n.push(...i.slice(l, l + 1e4)), (l += 1e4));
}
function bp(n) {
  const i = {};
  let l = -1,
    s,
    u,
    c,
    f,
    p,
    h,
    m;
  const g = new iv(n);
  for (; ++l < g.length; ) {
    for (; l in i; ) l = i[l];
    if (
      ((s = g.get(l)),
      l &&
        s[1].type === 'chunkFlow' &&
        g.get(l - 1)[1].type === 'listItemPrefix' &&
        ((h = s[1]._tokenizer.events),
        (c = 0),
        c < h.length && h[c][1].type === 'lineEndingBlank' && (c += 2),
        c < h.length && h[c][1].type === 'content'))
    )
      for (; ++c < h.length && h[c][1].type !== 'content'; )
        h[c][1].type === 'chunkText' && ((h[c][1]._isInFirstContentOfListItem = !0), c++);
    if (s[0] === 'enter') s[1].contentType && (Object.assign(i, lv(g, l)), (l = i[l]), (m = !0));
    else if (s[1]._container) {
      for (c = l, u = void 0; c--; )
        if (((f = g.get(c)), f[1].type === 'lineEnding' || f[1].type === 'lineEndingBlank'))
          f[0] === 'enter' &&
            (u && (g.get(u)[1].type = 'lineEndingBlank'), (f[1].type = 'lineEnding'), (u = c));
        else if (!(f[1].type === 'linePrefix' || f[1].type === 'listItemIndent')) break;
      u &&
        ((s[1].end = { ...g.get(u)[1].start }),
        (p = g.slice(u, l)),
        p.unshift(s),
        g.splice(u, l - u + 1, p));
    }
  }
  return (pn(n, 0, Number.POSITIVE_INFINITY, g.slice(0)), !m);
}
function lv(n, i) {
  const l = n.get(i)[1],
    s = n.get(i)[2];
  let u = i - 1;
  const c = [];
  let f = l._tokenizer;
  f ||
    ((f = s.parser[l.contentType](l.start)),
    l._contentTypeTextTrailing && (f._contentTypeTextTrailing = !0));
  const p = f.events,
    h = [],
    m = {};
  let g,
    v,
    x = -1,
    k = l,
    O = 0,
    j = 0;
  const L = [j];
  for (; k; ) {
    for (; n.get(++u)[1] !== k; );
    (c.push(u),
      k._tokenizer ||
        ((g = s.sliceStream(k)),
        k.next || g.push(null),
        v && f.defineSkip(k.start),
        k._isInFirstContentOfListItem && (f._gfmTasklistFirstContentOfListItem = !0),
        f.write(g),
        k._isInFirstContentOfListItem && (f._gfmTasklistFirstContentOfListItem = void 0)),
      (v = k),
      (k = k.next));
  }
  for (k = l; ++x < p.length; )
    p[x][0] === 'exit' &&
      p[x - 1][0] === 'enter' &&
      p[x][1].type === p[x - 1][1].type &&
      p[x][1].start.line !== p[x][1].end.line &&
      ((j = x + 1), L.push(j), (k._tokenizer = void 0), (k.previous = void 0), (k = k.next));
  for (
    f.events = [], k ? ((k._tokenizer = void 0), (k.previous = void 0)) : L.pop(), x = L.length;
    x--;
  ) {
    const R = p.slice(L[x], L[x + 1]),
      M = c.pop();
    (h.push([M, M + R.length - 1]), n.splice(M, 2, R));
  }
  for (h.reverse(), x = -1; ++x < h.length; )
    ((m[O + h[x][0]] = O + h[x][1]), (O += h[x][1] - h[x][0] - 1));
  return m;
}
const ov = { resolve: av, tokenize: uv },
  sv = { partial: !0, tokenize: cv };
function av(n) {
  return (bp(n), n);
}
function uv(n, i) {
  let l;
  return s;
  function s(p) {
    return (n.enter('content'), (l = n.enter('chunkContent', { contentType: 'content' })), u(p));
  }
  function u(p) {
    return p === null ? c(p) : xe(p) ? n.check(sv, f, c)(p) : (n.consume(p), u);
  }
  function c(p) {
    return (n.exit('chunkContent'), n.exit('content'), i(p));
  }
  function f(p) {
    return (
      n.consume(p),
      n.exit('chunkContent'),
      (l.next = n.enter('chunkContent', { contentType: 'content', previous: l })),
      (l = l.next),
      u
    );
  }
}
function cv(n, i, l) {
  const s = this;
  return u;
  function u(f) {
    return (
      n.exit('chunkContent'),
      n.enter('lineEnding'),
      n.consume(f),
      n.exit('lineEnding'),
      Ue(n, c, 'linePrefix')
    );
  }
  function c(f) {
    if (f === null || xe(f)) return l(f);
    const p = s.events[s.events.length - 1];
    return !s.parser.constructs.disable.null.includes('codeIndented') &&
      p &&
      p[1].type === 'linePrefix' &&
      p[2].sliceSerialize(p[1], !0).length >= 4
      ? i(f)
      : n.interrupt(s.parser.constructs.flow, l, i)(f);
  }
}
function jp(n, i, l, s, u, c, f, p, h) {
  const m = h || Number.POSITIVE_INFINITY;
  let g = 0;
  return v;
  function v(R) {
    return R === 60
      ? (n.enter(s), n.enter(u), n.enter(c), n.consume(R), n.exit(c), x)
      : R === null || R === 32 || R === 41 || Aa(R)
        ? l(R)
        : (n.enter(s),
          n.enter(f),
          n.enter(p),
          n.enter('chunkString', { contentType: 'string' }),
          j(R));
  }
  function x(R) {
    return R === 62
      ? (n.enter(c), n.consume(R), n.exit(c), n.exit(u), n.exit(s), i)
      : (n.enter(p), n.enter('chunkString', { contentType: 'string' }), k(R));
  }
  function k(R) {
    return R === 62
      ? (n.exit('chunkString'), n.exit(p), x(R))
      : R === null || R === 60 || xe(R)
        ? l(R)
        : (n.consume(R), R === 92 ? O : k);
  }
  function O(R) {
    return R === 60 || R === 62 || R === 92 ? (n.consume(R), k) : k(R);
  }
  function j(R) {
    return !g && (R === null || R === 41 || Lt(R))
      ? (n.exit('chunkString'), n.exit(p), n.exit(f), n.exit(s), i(R))
      : g < m && R === 40
        ? (n.consume(R), g++, j)
        : R === 41
          ? (n.consume(R), g--, j)
          : R === null || R === 32 || R === 40 || Aa(R)
            ? l(R)
            : (n.consume(R), R === 92 ? L : j);
  }
  function L(R) {
    return R === 40 || R === 41 || R === 92 ? (n.consume(R), j) : j(R);
  }
}
function Lp(n, i, l, s, u, c) {
  const f = this;
  let p = 0,
    h;
  return m;
  function m(k) {
    return (n.enter(s), n.enter(u), n.consume(k), n.exit(u), n.enter(c), g);
  }
  function g(k) {
    return p > 999 ||
      k === null ||
      k === 91 ||
      (k === 93 && !h) ||
      (k === 94 && !p && '_hiddenFootnoteSupport' in f.parser.constructs)
      ? l(k)
      : k === 93
        ? (n.exit(c), n.enter(u), n.consume(k), n.exit(u), n.exit(s), i)
        : xe(k)
          ? (n.enter('lineEnding'), n.consume(k), n.exit('lineEnding'), g)
          : (n.enter('chunkString', { contentType: 'string' }), v(k));
  }
  function v(k) {
    return k === null || k === 91 || k === 93 || xe(k) || p++ > 999
      ? (n.exit('chunkString'), g(k))
      : (n.consume(k), h || (h = !Me(k)), k === 92 ? x : v);
  }
  function x(k) {
    return k === 91 || k === 92 || k === 93 ? (n.consume(k), p++, v) : v(k);
  }
}
function Pp(n, i, l, s, u, c) {
  let f;
  return p;
  function p(x) {
    return x === 34 || x === 39 || x === 40
      ? (n.enter(s), n.enter(u), n.consume(x), n.exit(u), (f = x === 40 ? 41 : x), h)
      : l(x);
  }
  function h(x) {
    return x === f ? (n.enter(u), n.consume(x), n.exit(u), n.exit(s), i) : (n.enter(c), m(x));
  }
  function m(x) {
    return x === f
      ? (n.exit(c), h(f))
      : x === null
        ? l(x)
        : xe(x)
          ? (n.enter('lineEnding'), n.consume(x), n.exit('lineEnding'), Ue(n, m, 'linePrefix'))
          : (n.enter('chunkString', { contentType: 'string' }), g(x));
  }
  function g(x) {
    return x === f || x === null || xe(x)
      ? (n.exit('chunkString'), m(x))
      : (n.consume(x), x === 92 ? v : g);
  }
  function v(x) {
    return x === f || x === 92 ? (n.consume(x), g) : g(x);
  }
}
function Ui(n, i) {
  let l;
  return s;
  function s(u) {
    return xe(u)
      ? (n.enter('lineEnding'), n.consume(u), n.exit('lineEnding'), (l = !0), s)
      : Me(u)
        ? Ue(n, s, l ? 'linePrefix' : 'lineSuffix')(u)
        : i(u);
  }
}
const fv = { name: 'definition', tokenize: pv },
  dv = { partial: !0, tokenize: hv };
function pv(n, i, l) {
  const s = this;
  let u;
  return c;
  function c(k) {
    return (n.enter('definition'), f(k));
  }
  function f(k) {
    return Lp.call(
      s,
      n,
      p,
      l,
      'definitionLabel',
      'definitionLabelMarker',
      'definitionLabelString'
    )(k);
  }
  function p(k) {
    return (
      (u = qr(s.sliceSerialize(s.events[s.events.length - 1][1]).slice(1, -1))),
      k === 58 ? (n.enter('definitionMarker'), n.consume(k), n.exit('definitionMarker'), h) : l(k)
    );
  }
  function h(k) {
    return Lt(k) ? Ui(n, m)(k) : m(k);
  }
  function m(k) {
    return jp(
      n,
      g,
      l,
      'definitionDestination',
      'definitionDestinationLiteral',
      'definitionDestinationLiteralMarker',
      'definitionDestinationRaw',
      'definitionDestinationString'
    )(k);
  }
  function g(k) {
    return n.attempt(dv, v, v)(k);
  }
  function v(k) {
    return Me(k) ? Ue(n, x, 'whitespace')(k) : x(k);
  }
  function x(k) {
    return k === null || xe(k) ? (n.exit('definition'), s.parser.defined.push(u), i(k)) : l(k);
  }
}
function hv(n, i, l) {
  return s;
  function s(p) {
    return Lt(p) ? Ui(n, u)(p) : l(p);
  }
  function u(p) {
    return Pp(n, c, l, 'definitionTitle', 'definitionTitleMarker', 'definitionTitleString')(p);
  }
  function c(p) {
    return Me(p) ? Ue(n, f, 'whitespace')(p) : f(p);
  }
  function f(p) {
    return p === null || xe(p) ? i(p) : l(p);
  }
}
const mv = { name: 'hardBreakEscape', tokenize: gv };
function gv(n, i, l) {
  return s;
  function s(c) {
    return (n.enter('hardBreakEscape'), n.consume(c), u);
  }
  function u(c) {
    return xe(c) ? (n.exit('hardBreakEscape'), i(c)) : l(c);
  }
}
const yv = { name: 'headingAtx', resolve: vv, tokenize: kv };
function vv(n, i) {
  let l = n.length - 2,
    s = 3,
    u,
    c;
  return (
    n[s][1].type === 'whitespace' && (s += 2),
    l - 2 > s && n[l][1].type === 'whitespace' && (l -= 2),
    n[l][1].type === 'atxHeadingSequence' &&
      (s === l - 1 || (l - 4 > s && n[l - 2][1].type === 'whitespace')) &&
      (l -= s + 1 === l ? 2 : 4),
    l > s &&
      ((u = { type: 'atxHeadingText', start: n[s][1].start, end: n[l][1].end }),
      (c = { type: 'chunkText', start: n[s][1].start, end: n[l][1].end, contentType: 'text' }),
      pn(n, s, l - s + 1, [
        ['enter', u, i],
        ['enter', c, i],
        ['exit', c, i],
        ['exit', u, i],
      ])),
    n
  );
}
function kv(n, i, l) {
  let s = 0;
  return u;
  function u(g) {
    return (n.enter('atxHeading'), c(g));
  }
  function c(g) {
    return (n.enter('atxHeadingSequence'), f(g));
  }
  function f(g) {
    return g === 35 && s++ < 6
      ? (n.consume(g), f)
      : g === null || Lt(g)
        ? (n.exit('atxHeadingSequence'), p(g))
        : l(g);
  }
  function p(g) {
    return g === 35
      ? (n.enter('atxHeadingSequence'), h(g))
      : g === null || xe(g)
        ? (n.exit('atxHeading'), i(g))
        : Me(g)
          ? Ue(n, p, 'whitespace')(g)
          : (n.enter('atxHeadingText'), m(g));
  }
  function h(g) {
    return g === 35 ? (n.consume(g), h) : (n.exit('atxHeadingSequence'), p(g));
  }
  function m(g) {
    return g === null || g === 35 || Lt(g) ? (n.exit('atxHeadingText'), p(g)) : (n.consume(g), m);
  }
}
const wv = [
    'address',
    'article',
    'aside',
    'base',
    'basefont',
    'blockquote',
    'body',
    'caption',
    'center',
    'col',
    'colgroup',
    'dd',
    'details',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hr',
    'html',
    'iframe',
    'legend',
    'li',
    'link',
    'main',
    'menu',
    'menuitem',
    'nav',
    'noframes',
    'ol',
    'optgroup',
    'option',
    'p',
    'param',
    'search',
    'section',
    'summary',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'title',
    'tr',
    'track',
    'ul',
  ],
  Sd = ['pre', 'script', 'style', 'textarea'],
  xv = { concrete: !0, name: 'htmlFlow', resolveTo: Cv, tokenize: Ev },
  Sv = { partial: !0, tokenize: Iv },
  _v = { partial: !0, tokenize: Nv };
function Cv(n) {
  let i = n.length;
  for (; i-- && !(n[i][0] === 'enter' && n[i][1].type === 'htmlFlow'); );
  return (
    i > 1 &&
      n[i - 2][1].type === 'linePrefix' &&
      ((n[i][1].start = n[i - 2][1].start),
      (n[i + 1][1].start = n[i - 2][1].start),
      n.splice(i - 2, 2)),
    n
  );
}
function Ev(n, i, l) {
  const s = this;
  let u, c, f, p, h;
  return m;
  function m(C) {
    return g(C);
  }
  function g(C) {
    return (n.enter('htmlFlow'), n.enter('htmlFlowData'), n.consume(C), v);
  }
  function v(C) {
    return C === 33
      ? (n.consume(C), x)
      : C === 47
        ? (n.consume(C), (c = !0), j)
        : C === 63
          ? (n.consume(C), (u = 3), s.interrupt ? i : S)
          : dn(C)
            ? (n.consume(C), (f = String.fromCharCode(C)), L)
            : l(C);
  }
  function x(C) {
    return C === 45
      ? (n.consume(C), (u = 2), k)
      : C === 91
        ? (n.consume(C), (u = 5), (p = 0), O)
        : dn(C)
          ? (n.consume(C), (u = 4), s.interrupt ? i : S)
          : l(C);
  }
  function k(C) {
    return C === 45 ? (n.consume(C), s.interrupt ? i : S) : l(C);
  }
  function O(C) {
    const fe = 'CDATA[';
    return C === fe.charCodeAt(p++)
      ? (n.consume(C), p === fe.length ? (s.interrupt ? i : X) : O)
      : l(C);
  }
  function j(C) {
    return dn(C) ? (n.consume(C), (f = String.fromCharCode(C)), L) : l(C);
  }
  function L(C) {
    if (C === null || C === 47 || C === 62 || Lt(C)) {
      const fe = C === 47,
        le = f.toLowerCase();
      return !fe && !c && Sd.includes(le)
        ? ((u = 1), s.interrupt ? i(C) : X(C))
        : wv.includes(f.toLowerCase())
          ? ((u = 6), fe ? (n.consume(C), R) : s.interrupt ? i(C) : X(C))
          : ((u = 7), s.interrupt && !s.parser.lazy[s.now().line] ? l(C) : c ? M(C) : F(C));
    }
    return C === 45 || Ft(C) ? (n.consume(C), (f += String.fromCharCode(C)), L) : l(C);
  }
  function R(C) {
    return C === 62 ? (n.consume(C), s.interrupt ? i : X) : l(C);
  }
  function M(C) {
    return Me(C) ? (n.consume(C), M) : Ce(C);
  }
  function F(C) {
    return C === 47
      ? (n.consume(C), Ce)
      : C === 58 || C === 95 || dn(C)
        ? (n.consume(C), V)
        : Me(C)
          ? (n.consume(C), F)
          : Ce(C);
  }
  function V(C) {
    return C === 45 || C === 46 || C === 58 || C === 95 || Ft(C) ? (n.consume(C), V) : ae(C);
  }
  function ae(C) {
    return C === 61 ? (n.consume(C), z) : Me(C) ? (n.consume(C), ae) : F(C);
  }
  function z(C) {
    return C === null || C === 60 || C === 61 || C === 62 || C === 96
      ? l(C)
      : C === 34 || C === 39
        ? (n.consume(C), (h = C), J)
        : Me(C)
          ? (n.consume(C), z)
          : ve(C);
  }
  function J(C) {
    return C === h
      ? (n.consume(C), (h = null), Se)
      : C === null || xe(C)
        ? l(C)
        : (n.consume(C), J);
  }
  function ve(C) {
    return C === null ||
      C === 34 ||
      C === 39 ||
      C === 47 ||
      C === 60 ||
      C === 61 ||
      C === 62 ||
      C === 96 ||
      Lt(C)
      ? ae(C)
      : (n.consume(C), ve);
  }
  function Se(C) {
    return C === 47 || C === 62 || Me(C) ? F(C) : l(C);
  }
  function Ce(C) {
    return C === 62 ? (n.consume(C), re) : l(C);
  }
  function re(C) {
    return C === null || xe(C) ? X(C) : Me(C) ? (n.consume(C), re) : l(C);
  }
  function X(C) {
    return C === 45 && u === 2
      ? (n.consume(C), me)
      : C === 60 && u === 1
        ? (n.consume(C), ge)
        : C === 62 && u === 4
          ? (n.consume(C), I)
          : C === 63 && u === 3
            ? (n.consume(C), S)
            : C === 93 && u === 5
              ? (n.consume(C), Z)
              : xe(C) && (u === 6 || u === 7)
                ? (n.exit('htmlFlowData'), n.check(Sv, D, ke)(C))
                : C === null || xe(C)
                  ? (n.exit('htmlFlowData'), ke(C))
                  : (n.consume(C), X);
  }
  function ke(C) {
    return n.check(_v, te, D)(C);
  }
  function te(C) {
    return (n.enter('lineEnding'), n.consume(C), n.exit('lineEnding'), q);
  }
  function q(C) {
    return C === null || xe(C) ? ke(C) : (n.enter('htmlFlowData'), X(C));
  }
  function me(C) {
    return C === 45 ? (n.consume(C), S) : X(C);
  }
  function ge(C) {
    return C === 47 ? (n.consume(C), (f = ''), $) : X(C);
  }
  function $(C) {
    if (C === 62) {
      const fe = f.toLowerCase();
      return Sd.includes(fe) ? (n.consume(C), I) : X(C);
    }
    return dn(C) && f.length < 8 ? (n.consume(C), (f += String.fromCharCode(C)), $) : X(C);
  }
  function Z(C) {
    return C === 93 ? (n.consume(C), S) : X(C);
  }
  function S(C) {
    return C === 62 ? (n.consume(C), I) : C === 45 && u === 2 ? (n.consume(C), S) : X(C);
  }
  function I(C) {
    return C === null || xe(C) ? (n.exit('htmlFlowData'), D(C)) : (n.consume(C), I);
  }
  function D(C) {
    return (n.exit('htmlFlow'), i(C));
  }
}
function Nv(n, i, l) {
  const s = this;
  return u;
  function u(f) {
    return xe(f) ? (n.enter('lineEnding'), n.consume(f), n.exit('lineEnding'), c) : l(f);
  }
  function c(f) {
    return s.parser.lazy[s.now().line] ? l(f) : i(f);
  }
}
function Iv(n, i, l) {
  return s;
  function s(u) {
    return (n.enter('lineEnding'), n.consume(u), n.exit('lineEnding'), n.attempt(vo, i, l));
  }
}
const Tv = { name: 'htmlText', tokenize: bv };
function bv(n, i, l) {
  const s = this;
  let u, c, f;
  return p;
  function p(S) {
    return (n.enter('htmlText'), n.enter('htmlTextData'), n.consume(S), h);
  }
  function h(S) {
    return S === 33
      ? (n.consume(S), m)
      : S === 47
        ? (n.consume(S), ae)
        : S === 63
          ? (n.consume(S), F)
          : dn(S)
            ? (n.consume(S), ve)
            : l(S);
  }
  function m(S) {
    return S === 45
      ? (n.consume(S), g)
      : S === 91
        ? (n.consume(S), (c = 0), O)
        : dn(S)
          ? (n.consume(S), M)
          : l(S);
  }
  function g(S) {
    return S === 45 ? (n.consume(S), k) : l(S);
  }
  function v(S) {
    return S === null
      ? l(S)
      : S === 45
        ? (n.consume(S), x)
        : xe(S)
          ? ((f = v), ge(S))
          : (n.consume(S), v);
  }
  function x(S) {
    return S === 45 ? (n.consume(S), k) : v(S);
  }
  function k(S) {
    return S === 62 ? me(S) : S === 45 ? x(S) : v(S);
  }
  function O(S) {
    const I = 'CDATA[';
    return S === I.charCodeAt(c++) ? (n.consume(S), c === I.length ? j : O) : l(S);
  }
  function j(S) {
    return S === null
      ? l(S)
      : S === 93
        ? (n.consume(S), L)
        : xe(S)
          ? ((f = j), ge(S))
          : (n.consume(S), j);
  }
  function L(S) {
    return S === 93 ? (n.consume(S), R) : j(S);
  }
  function R(S) {
    return S === 62 ? me(S) : S === 93 ? (n.consume(S), R) : j(S);
  }
  function M(S) {
    return S === null || S === 62 ? me(S) : xe(S) ? ((f = M), ge(S)) : (n.consume(S), M);
  }
  function F(S) {
    return S === null
      ? l(S)
      : S === 63
        ? (n.consume(S), V)
        : xe(S)
          ? ((f = F), ge(S))
          : (n.consume(S), F);
  }
  function V(S) {
    return S === 62 ? me(S) : F(S);
  }
  function ae(S) {
    return dn(S) ? (n.consume(S), z) : l(S);
  }
  function z(S) {
    return S === 45 || Ft(S) ? (n.consume(S), z) : J(S);
  }
  function J(S) {
    return xe(S) ? ((f = J), ge(S)) : Me(S) ? (n.consume(S), J) : me(S);
  }
  function ve(S) {
    return S === 45 || Ft(S) ? (n.consume(S), ve) : S === 47 || S === 62 || Lt(S) ? Se(S) : l(S);
  }
  function Se(S) {
    return S === 47
      ? (n.consume(S), me)
      : S === 58 || S === 95 || dn(S)
        ? (n.consume(S), Ce)
        : xe(S)
          ? ((f = Se), ge(S))
          : Me(S)
            ? (n.consume(S), Se)
            : me(S);
  }
  function Ce(S) {
    return S === 45 || S === 46 || S === 58 || S === 95 || Ft(S) ? (n.consume(S), Ce) : re(S);
  }
  function re(S) {
    return S === 61
      ? (n.consume(S), X)
      : xe(S)
        ? ((f = re), ge(S))
        : Me(S)
          ? (n.consume(S), re)
          : Se(S);
  }
  function X(S) {
    return S === null || S === 60 || S === 61 || S === 62 || S === 96
      ? l(S)
      : S === 34 || S === 39
        ? (n.consume(S), (u = S), ke)
        : xe(S)
          ? ((f = X), ge(S))
          : Me(S)
            ? (n.consume(S), X)
            : (n.consume(S), te);
  }
  function ke(S) {
    return S === u
      ? (n.consume(S), (u = void 0), q)
      : S === null
        ? l(S)
        : xe(S)
          ? ((f = ke), ge(S))
          : (n.consume(S), ke);
  }
  function te(S) {
    return S === null || S === 34 || S === 39 || S === 60 || S === 61 || S === 96
      ? l(S)
      : S === 47 || S === 62 || Lt(S)
        ? Se(S)
        : (n.consume(S), te);
  }
  function q(S) {
    return S === 47 || S === 62 || Lt(S) ? Se(S) : l(S);
  }
  function me(S) {
    return S === 62 ? (n.consume(S), n.exit('htmlTextData'), n.exit('htmlText'), i) : l(S);
  }
  function ge(S) {
    return (n.exit('htmlTextData'), n.enter('lineEnding'), n.consume(S), n.exit('lineEnding'), $);
  }
  function $(S) {
    return Me(S)
      ? Ue(
          n,
          Z,
          'linePrefix',
          s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
        )(S)
      : Z(S);
  }
  function Z(S) {
    return (n.enter('htmlTextData'), f(S));
  }
}
const nu = { name: 'labelEnd', resolveAll: Ov, resolveTo: zv, tokenize: Rv },
  jv = { tokenize: Mv },
  Lv = { tokenize: Av },
  Pv = { tokenize: Dv };
function Ov(n) {
  let i = -1;
  const l = [];
  for (; ++i < n.length; ) {
    const s = n[i][1];
    if (
      (l.push(n[i]), s.type === 'labelImage' || s.type === 'labelLink' || s.type === 'labelEnd')
    ) {
      const u = s.type === 'labelImage' ? 4 : 2;
      ((s.type = 'data'), (i += u));
    }
  }
  return (n.length !== l.length && pn(n, 0, n.length, l), n);
}
function zv(n, i) {
  let l = n.length,
    s = 0,
    u,
    c,
    f,
    p;
  for (; l--; )
    if (((u = n[l][1]), c)) {
      if (u.type === 'link' || (u.type === 'labelLink' && u._inactive)) break;
      n[l][0] === 'enter' && u.type === 'labelLink' && (u._inactive = !0);
    } else if (f) {
      if (
        n[l][0] === 'enter' &&
        (u.type === 'labelImage' || u.type === 'labelLink') &&
        !u._balanced &&
        ((c = l), u.type !== 'labelLink')
      ) {
        s = 2;
        break;
      }
    } else u.type === 'labelEnd' && (f = l);
  const h = {
      type: n[c][1].type === 'labelLink' ? 'link' : 'image',
      start: { ...n[c][1].start },
      end: { ...n[n.length - 1][1].end },
    },
    m = { type: 'label', start: { ...n[c][1].start }, end: { ...n[f][1].end } },
    g = { type: 'labelText', start: { ...n[c + s + 2][1].end }, end: { ...n[f - 2][1].start } };
  return (
    (p = [
      ['enter', h, i],
      ['enter', m, i],
    ]),
    (p = Gt(p, n.slice(c + 1, c + s + 3))),
    (p = Gt(p, [['enter', g, i]])),
    (p = Gt(p, tu(i.parser.constructs.insideSpan.null, n.slice(c + s + 4, f - 3), i))),
    (p = Gt(p, [['exit', g, i], n[f - 2], n[f - 1], ['exit', m, i]])),
    (p = Gt(p, n.slice(f + 1))),
    (p = Gt(p, [['exit', h, i]])),
    pn(n, c, n.length, p),
    n
  );
}
function Rv(n, i, l) {
  const s = this;
  let u = s.events.length,
    c,
    f;
  for (; u--; )
    if (
      (s.events[u][1].type === 'labelImage' || s.events[u][1].type === 'labelLink') &&
      !s.events[u][1]._balanced
    ) {
      c = s.events[u][1];
      break;
    }
  return p;
  function p(x) {
    return c
      ? c._inactive
        ? v(x)
        : ((f = s.parser.defined.includes(qr(s.sliceSerialize({ start: c.end, end: s.now() })))),
          n.enter('labelEnd'),
          n.enter('labelMarker'),
          n.consume(x),
          n.exit('labelMarker'),
          n.exit('labelEnd'),
          h)
      : l(x);
  }
  function h(x) {
    return x === 40
      ? n.attempt(jv, g, f ? g : v)(x)
      : x === 91
        ? n.attempt(Lv, g, f ? m : v)(x)
        : f
          ? g(x)
          : v(x);
  }
  function m(x) {
    return n.attempt(Pv, g, v)(x);
  }
  function g(x) {
    return i(x);
  }
  function v(x) {
    return ((c._balanced = !0), l(x));
  }
}
function Mv(n, i, l) {
  return s;
  function s(v) {
    return (
      n.enter('resource'),
      n.enter('resourceMarker'),
      n.consume(v),
      n.exit('resourceMarker'),
      u
    );
  }
  function u(v) {
    return Lt(v) ? Ui(n, c)(v) : c(v);
  }
  function c(v) {
    return v === 41
      ? g(v)
      : jp(
          n,
          f,
          p,
          'resourceDestination',
          'resourceDestinationLiteral',
          'resourceDestinationLiteralMarker',
          'resourceDestinationRaw',
          'resourceDestinationString',
          32
        )(v);
  }
  function f(v) {
    return Lt(v) ? Ui(n, h)(v) : g(v);
  }
  function p(v) {
    return l(v);
  }
  function h(v) {
    return v === 34 || v === 39 || v === 40
      ? Pp(n, m, l, 'resourceTitle', 'resourceTitleMarker', 'resourceTitleString')(v)
      : g(v);
  }
  function m(v) {
    return Lt(v) ? Ui(n, g)(v) : g(v);
  }
  function g(v) {
    return v === 41
      ? (n.enter('resourceMarker'), n.consume(v), n.exit('resourceMarker'), n.exit('resource'), i)
      : l(v);
  }
}
function Av(n, i, l) {
  const s = this;
  return u;
  function u(p) {
    return Lp.call(s, n, c, f, 'reference', 'referenceMarker', 'referenceString')(p);
  }
  function c(p) {
    return s.parser.defined.includes(
      qr(s.sliceSerialize(s.events[s.events.length - 1][1]).slice(1, -1))
    )
      ? i(p)
      : l(p);
  }
  function f(p) {
    return l(p);
  }
}
function Dv(n, i, l) {
  return s;
  function s(c) {
    return (
      n.enter('reference'),
      n.enter('referenceMarker'),
      n.consume(c),
      n.exit('referenceMarker'),
      u
    );
  }
  function u(c) {
    return c === 93
      ? (n.enter('referenceMarker'),
        n.consume(c),
        n.exit('referenceMarker'),
        n.exit('reference'),
        i)
      : l(c);
  }
}
const Fv = { name: 'labelStartImage', resolveAll: nu.resolveAll, tokenize: Bv };
function Bv(n, i, l) {
  const s = this;
  return u;
  function u(p) {
    return (
      n.enter('labelImage'),
      n.enter('labelImageMarker'),
      n.consume(p),
      n.exit('labelImageMarker'),
      c
    );
  }
  function c(p) {
    return p === 91
      ? (n.enter('labelMarker'), n.consume(p), n.exit('labelMarker'), n.exit('labelImage'), f)
      : l(p);
  }
  function f(p) {
    return p === 94 && '_hiddenFootnoteSupport' in s.parser.constructs ? l(p) : i(p);
  }
}
const Uv = { name: 'labelStartLink', resolveAll: nu.resolveAll, tokenize: Vv };
function Vv(n, i, l) {
  const s = this;
  return u;
  function u(f) {
    return (
      n.enter('labelLink'),
      n.enter('labelMarker'),
      n.consume(f),
      n.exit('labelMarker'),
      n.exit('labelLink'),
      c
    );
  }
  function c(f) {
    return f === 94 && '_hiddenFootnoteSupport' in s.parser.constructs ? l(f) : i(f);
  }
}
const ka = { name: 'lineEnding', tokenize: Hv };
function Hv(n, i) {
  return l;
  function l(s) {
    return (n.enter('lineEnding'), n.consume(s), n.exit('lineEnding'), Ue(n, i, 'linePrefix'));
  }
}
const fo = { name: 'thematicBreak', tokenize: $v };
function $v(n, i, l) {
  let s = 0,
    u;
  return c;
  function c(m) {
    return (n.enter('thematicBreak'), f(m));
  }
  function f(m) {
    return ((u = m), p(m));
  }
  function p(m) {
    return m === u
      ? (n.enter('thematicBreakSequence'), h(m))
      : s >= 3 && (m === null || xe(m))
        ? (n.exit('thematicBreak'), i(m))
        : l(m);
  }
  function h(m) {
    return m === u
      ? (n.consume(m), s++, h)
      : (n.exit('thematicBreakSequence'), Me(m) ? Ue(n, p, 'whitespace')(m) : p(m));
  }
}
const jt = { continuation: { tokenize: Yv }, exit: Kv, name: 'list', tokenize: qv },
  Wv = { partial: !0, tokenize: Xv },
  Qv = { partial: !0, tokenize: Gv };
function qv(n, i, l) {
  const s = this,
    u = s.events[s.events.length - 1];
  let c = u && u[1].type === 'linePrefix' ? u[2].sliceSerialize(u[1], !0).length : 0,
    f = 0;
  return p;
  function p(k) {
    const O =
      s.containerState.type || (k === 42 || k === 43 || k === 45 ? 'listUnordered' : 'listOrdered');
    if (O === 'listUnordered' ? !s.containerState.marker || k === s.containerState.marker : Da(k)) {
      if (
        (s.containerState.type || ((s.containerState.type = O), n.enter(O, { _container: !0 })),
        O === 'listUnordered')
      )
        return (n.enter('listItemPrefix'), k === 42 || k === 45 ? n.check(fo, l, m)(k) : m(k));
      if (!s.interrupt || k === 49)
        return (n.enter('listItemPrefix'), n.enter('listItemValue'), h(k));
    }
    return l(k);
  }
  function h(k) {
    return Da(k) && ++f < 10
      ? (n.consume(k), h)
      : (!s.interrupt || f < 2) &&
          (s.containerState.marker ? k === s.containerState.marker : k === 41 || k === 46)
        ? (n.exit('listItemValue'), m(k))
        : l(k);
  }
  function m(k) {
    return (
      n.enter('listItemMarker'),
      n.consume(k),
      n.exit('listItemMarker'),
      (s.containerState.marker = s.containerState.marker || k),
      n.check(vo, s.interrupt ? l : g, n.attempt(Wv, x, v))
    );
  }
  function g(k) {
    return ((s.containerState.initialBlankLine = !0), c++, x(k));
  }
  function v(k) {
    return Me(k)
      ? (n.enter('listItemPrefixWhitespace'), n.consume(k), n.exit('listItemPrefixWhitespace'), x)
      : l(k);
  }
  function x(k) {
    return (
      (s.containerState.size = c + s.sliceSerialize(n.exit('listItemPrefix'), !0).length),
      i(k)
    );
  }
}
function Yv(n, i, l) {
  const s = this;
  return ((s.containerState._closeFlow = void 0), n.check(vo, u, c));
  function u(p) {
    return (
      (s.containerState.furtherBlankLines =
        s.containerState.furtherBlankLines || s.containerState.initialBlankLine),
      Ue(n, i, 'listItemIndent', s.containerState.size + 1)(p)
    );
  }
  function c(p) {
    return s.containerState.furtherBlankLines || !Me(p)
      ? ((s.containerState.furtherBlankLines = void 0),
        (s.containerState.initialBlankLine = void 0),
        f(p))
      : ((s.containerState.furtherBlankLines = void 0),
        (s.containerState.initialBlankLine = void 0),
        n.attempt(Qv, i, f)(p));
  }
  function f(p) {
    return (
      (s.containerState._closeFlow = !0),
      (s.interrupt = void 0),
      Ue(
        n,
        n.attempt(jt, i, l),
        'linePrefix',
        s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
      )(p)
    );
  }
}
function Gv(n, i, l) {
  const s = this;
  return Ue(n, u, 'listItemIndent', s.containerState.size + 1);
  function u(c) {
    const f = s.events[s.events.length - 1];
    return f &&
      f[1].type === 'listItemIndent' &&
      f[2].sliceSerialize(f[1], !0).length === s.containerState.size
      ? i(c)
      : l(c);
  }
}
function Kv(n) {
  n.exit(this.containerState.type);
}
function Xv(n, i, l) {
  const s = this;
  return Ue(
    n,
    u,
    'listItemPrefixWhitespace',
    s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 5
  );
  function u(c) {
    const f = s.events[s.events.length - 1];
    return !Me(c) && f && f[1].type === 'listItemPrefixWhitespace' ? i(c) : l(c);
  }
}
const _d = { name: 'setextUnderline', resolveTo: Zv, tokenize: Jv };
function Zv(n, i) {
  let l = n.length,
    s,
    u,
    c;
  for (; l--; )
    if (n[l][0] === 'enter') {
      if (n[l][1].type === 'content') {
        s = l;
        break;
      }
      n[l][1].type === 'paragraph' && (u = l);
    } else
      (n[l][1].type === 'content' && n.splice(l, 1),
        !c && n[l][1].type === 'definition' && (c = l));
  const f = {
    type: 'setextHeading',
    start: { ...n[s][1].start },
    end: { ...n[n.length - 1][1].end },
  };
  return (
    (n[u][1].type = 'setextHeadingText'),
    c
      ? (n.splice(u, 0, ['enter', f, i]),
        n.splice(c + 1, 0, ['exit', n[s][1], i]),
        (n[s][1].end = { ...n[c][1].end }))
      : (n[s][1] = f),
    n.push(['exit', f, i]),
    n
  );
}
function Jv(n, i, l) {
  const s = this;
  let u;
  return c;
  function c(m) {
    let g = s.events.length,
      v;
    for (; g--; )
      if (
        s.events[g][1].type !== 'lineEnding' &&
        s.events[g][1].type !== 'linePrefix' &&
        s.events[g][1].type !== 'content'
      ) {
        v = s.events[g][1].type === 'paragraph';
        break;
      }
    return !s.parser.lazy[s.now().line] && (s.interrupt || v)
      ? (n.enter('setextHeadingLine'), (u = m), f(m))
      : l(m);
  }
  function f(m) {
    return (n.enter('setextHeadingLineSequence'), p(m));
  }
  function p(m) {
    return m === u
      ? (n.consume(m), p)
      : (n.exit('setextHeadingLineSequence'), Me(m) ? Ue(n, h, 'lineSuffix')(m) : h(m));
  }
  function h(m) {
    return m === null || xe(m) ? (n.exit('setextHeadingLine'), i(m)) : l(m);
  }
}
const e0 = { tokenize: t0 };
function t0(n) {
  const i = this,
    l = n.attempt(
      vo,
      s,
      n.attempt(
        this.parser.constructs.flowInitial,
        u,
        Ue(n, n.attempt(this.parser.constructs.flow, u, n.attempt(ov, u)), 'linePrefix')
      )
    );
  return l;
  function s(c) {
    if (c === null) {
      n.consume(c);
      return;
    }
    return (
      n.enter('lineEndingBlank'),
      n.consume(c),
      n.exit('lineEndingBlank'),
      (i.currentConstruct = void 0),
      l
    );
  }
  function u(c) {
    if (c === null) {
      n.consume(c);
      return;
    }
    return (
      n.enter('lineEnding'),
      n.consume(c),
      n.exit('lineEnding'),
      (i.currentConstruct = void 0),
      l
    );
  }
}
const n0 = { resolveAll: zp() },
  r0 = Op('string'),
  i0 = Op('text');
function Op(n) {
  return { resolveAll: zp(n === 'text' ? l0 : void 0), tokenize: i };
  function i(l) {
    const s = this,
      u = this.parser.constructs[n],
      c = l.attempt(u, f, p);
    return f;
    function f(g) {
      return m(g) ? c(g) : p(g);
    }
    function p(g) {
      if (g === null) {
        l.consume(g);
        return;
      }
      return (l.enter('data'), l.consume(g), h);
    }
    function h(g) {
      return m(g) ? (l.exit('data'), c(g)) : (l.consume(g), h);
    }
    function m(g) {
      if (g === null) return !0;
      const v = u[g];
      let x = -1;
      if (v)
        for (; ++x < v.length; ) {
          const k = v[x];
          if (!k.previous || k.previous.call(s, s.previous)) return !0;
        }
      return !1;
    }
  }
}
function zp(n) {
  return i;
  function i(l, s) {
    let u = -1,
      c;
    for (; ++u <= l.length; )
      c === void 0
        ? l[u] && l[u][1].type === 'data' && ((c = u), u++)
        : (!l[u] || l[u][1].type !== 'data') &&
          (u !== c + 2 &&
            ((l[c][1].end = l[u - 1][1].end), l.splice(c + 2, u - c - 2), (u = c + 2)),
          (c = void 0));
    return n ? n(l, s) : l;
  }
}
function l0(n, i) {
  let l = 0;
  for (; ++l <= n.length; )
    if ((l === n.length || n[l][1].type === 'lineEnding') && n[l - 1][1].type === 'data') {
      const s = n[l - 1][1],
        u = i.sliceStream(s);
      let c = u.length,
        f = -1,
        p = 0,
        h;
      for (; c--; ) {
        const m = u[c];
        if (typeof m == 'string') {
          for (f = m.length; m.charCodeAt(f - 1) === 32; ) (p++, f--);
          if (f) break;
          f = -1;
        } else if (m === -2) ((h = !0), p++);
        else if (m !== -1) {
          c++;
          break;
        }
      }
      if ((i._contentTypeTextTrailing && l === n.length && (p = 0), p)) {
        const m = {
          type: l === n.length || h || p < 2 ? 'lineSuffix' : 'hardBreakTrailing',
          start: {
            _bufferIndex: c ? f : s.start._bufferIndex + f,
            _index: s.start._index + c,
            line: s.end.line,
            column: s.end.column - p,
            offset: s.end.offset - p,
          },
          end: { ...s.end },
        };
        ((s.end = { ...m.start }),
          s.start.offset === s.end.offset
            ? Object.assign(s, m)
            : (n.splice(l, 0, ['enter', m, i], ['exit', m, i]), (l += 2)));
      }
      l++;
    }
  return n;
}
const o0 = {
    42: jt,
    43: jt,
    45: jt,
    48: jt,
    49: jt,
    50: jt,
    51: jt,
    52: jt,
    53: jt,
    54: jt,
    55: jt,
    56: jt,
    57: jt,
    62: Np,
  },
  s0 = { 91: fv },
  a0 = { [-2]: va, [-1]: va, 32: va },
  u0 = { 35: yv, 42: fo, 45: [_d, fo], 60: xv, 61: _d, 95: fo, 96: xd, 126: xd },
  c0 = { 38: Tp, 92: Ip },
  f0 = {
    [-5]: ka,
    [-4]: ka,
    [-3]: ka,
    33: Fv,
    38: Tp,
    42: Fa,
    60: [U1, Tv],
    91: Uv,
    92: [mv, Ip],
    93: nu,
    95: Fa,
    96: ev,
  },
  d0 = { null: [Fa, n0] },
  p0 = { null: [42, 95] },
  h0 = { null: [] },
  m0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: p0,
        contentInitial: s0,
        disable: h0,
        document: o0,
        flow: u0,
        flowInitial: a0,
        insideSpan: d0,
        string: c0,
        text: f0,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
function g0(n, i, l) {
  let s = {
    _bufferIndex: -1,
    _index: 0,
    line: (l && l.line) || 1,
    column: (l && l.column) || 1,
    offset: (l && l.offset) || 0,
  };
  const u = {},
    c = [];
  let f = [],
    p = [];
  const h = {
      attempt: J(ae),
      check: J(z),
      consume: M,
      enter: F,
      exit: V,
      interrupt: J(z, { interrupt: !0 }),
    },
    m = {
      code: null,
      containerState: {},
      defineSkip: j,
      events: [],
      now: O,
      parser: n,
      previous: null,
      sliceSerialize: x,
      sliceStream: k,
      write: v,
    };
  let g = i.tokenize.call(m, h);
  return (i.resolveAll && c.push(i), m);
  function v(re) {
    return (
      (f = Gt(f, re)),
      L(),
      f[f.length - 1] !== null ? [] : (ve(i, 0), (m.events = tu(c, m.events, m)), m.events)
    );
  }
  function x(re, X) {
    return v0(k(re), X);
  }
  function k(re) {
    return y0(f, re);
  }
  function O() {
    const { _bufferIndex: re, _index: X, line: ke, column: te, offset: q } = s;
    return { _bufferIndex: re, _index: X, line: ke, column: te, offset: q };
  }
  function j(re) {
    ((u[re.line] = re.column), Ce());
  }
  function L() {
    let re;
    for (; s._index < f.length; ) {
      const X = f[s._index];
      if (typeof X == 'string')
        for (
          re = s._index, s._bufferIndex < 0 && (s._bufferIndex = 0);
          s._index === re && s._bufferIndex < X.length;
        )
          R(X.charCodeAt(s._bufferIndex));
      else R(X);
    }
  }
  function R(re) {
    g = g(re);
  }
  function M(re) {
    (xe(re)
      ? (s.line++, (s.column = 1), (s.offset += re === -3 ? 2 : 1), Ce())
      : re !== -1 && (s.column++, s.offset++),
      s._bufferIndex < 0
        ? s._index++
        : (s._bufferIndex++,
          s._bufferIndex === f[s._index].length && ((s._bufferIndex = -1), s._index++)),
      (m.previous = re));
  }
  function F(re, X) {
    const ke = X || {};
    return ((ke.type = re), (ke.start = O()), m.events.push(['enter', ke, m]), p.push(ke), ke);
  }
  function V(re) {
    const X = p.pop();
    return ((X.end = O()), m.events.push(['exit', X, m]), X);
  }
  function ae(re, X) {
    ve(re, X.from);
  }
  function z(re, X) {
    X.restore();
  }
  function J(re, X) {
    return ke;
    function ke(te, q, me) {
      let ge, $, Z, S;
      return Array.isArray(te) ? D(te) : 'tokenize' in te ? D([te]) : I(te);
      function I(ue) {
        return Ie;
        function Ie(_e) {
          const Le = _e !== null && ue[_e],
            ce = _e !== null && ue.null,
            Ee = [
              ...(Array.isArray(Le) ? Le : Le ? [Le] : []),
              ...(Array.isArray(ce) ? ce : ce ? [ce] : []),
            ];
          return D(Ee)(_e);
        }
      }
      function D(ue) {
        return ((ge = ue), ($ = 0), ue.length === 0 ? me : C(ue[$]));
      }
      function C(ue) {
        return Ie;
        function Ie(_e) {
          return (
            (S = Se()),
            (Z = ue),
            ue.partial || (m.currentConstruct = ue),
            ue.name && m.parser.constructs.disable.null.includes(ue.name)
              ? le()
              : ue.tokenize.call(X ? Object.assign(Object.create(m), X) : m, h, fe, le)(_e)
          );
        }
      }
      function fe(ue) {
        return (re(Z, S), q);
      }
      function le(ue) {
        return (S.restore(), ++$ < ge.length ? C(ge[$]) : me);
      }
    }
  }
  function ve(re, X) {
    (re.resolveAll && !c.includes(re) && c.push(re),
      re.resolve && pn(m.events, X, m.events.length - X, re.resolve(m.events.slice(X), m)),
      re.resolveTo && (m.events = re.resolveTo(m.events, m)));
  }
  function Se() {
    const re = O(),
      X = m.previous,
      ke = m.currentConstruct,
      te = m.events.length,
      q = Array.from(p);
    return { from: te, restore: me };
    function me() {
      ((s = re),
        (m.previous = X),
        (m.currentConstruct = ke),
        (m.events.length = te),
        (p = q),
        Ce());
    }
  }
  function Ce() {
    s.line in u && s.column < 2 && ((s.column = u[s.line]), (s.offset += u[s.line] - 1));
  }
}
function y0(n, i) {
  const l = i.start._index,
    s = i.start._bufferIndex,
    u = i.end._index,
    c = i.end._bufferIndex;
  let f;
  if (l === u) f = [n[l].slice(s, c)];
  else {
    if (((f = n.slice(l, u)), s > -1)) {
      const p = f[0];
      typeof p == 'string' ? (f[0] = p.slice(s)) : f.shift();
    }
    c > 0 && f.push(n[u].slice(0, c));
  }
  return f;
}
function v0(n, i) {
  let l = -1;
  const s = [];
  let u;
  for (; ++l < n.length; ) {
    const c = n[l];
    let f;
    if (typeof c == 'string') f = c;
    else
      switch (c) {
        case -5: {
          f = '\r';
          break;
        }
        case -4: {
          f = `
`;
          break;
        }
        case -3: {
          f = `\r
`;
          break;
        }
        case -2: {
          f = i ? ' ' : '	';
          break;
        }
        case -1: {
          if (!i && u) continue;
          f = ' ';
          break;
        }
        default:
          f = String.fromCharCode(c);
      }
    ((u = c === -2), s.push(f));
  }
  return s.join('');
}
function k0(n) {
  const s = {
    constructs: N1([m0, ...((n || {}).extensions || [])]),
    content: u(z1),
    defined: [],
    document: u(M1),
    flow: u(e0),
    lazy: {},
    string: u(r0),
    text: u(i0),
  };
  return s;
  function u(c) {
    return f;
    function f(p) {
      return g0(s, c, p);
    }
  }
}
function w0(n) {
  for (; !bp(n); );
  return n;
}
const Cd = /[\0\t\n\r]/g;
function x0() {
  let n = 1,
    i = '',
    l = !0,
    s;
  return u;
  function u(c, f, p) {
    const h = [];
    let m, g, v, x, k;
    for (
      c = i + (typeof c == 'string' ? c.toString() : new TextDecoder(f || void 0).decode(c)),
        v = 0,
        i = '',
        l && (c.charCodeAt(0) === 65279 && v++, (l = void 0));
      v < c.length;
    ) {
      if (
        ((Cd.lastIndex = v),
        (m = Cd.exec(c)),
        (x = m && m.index !== void 0 ? m.index : c.length),
        (k = c.charCodeAt(x)),
        !m)
      ) {
        i = c.slice(v);
        break;
      }
      if (k === 10 && v === x && s) (h.push(-3), (s = void 0));
      else
        switch (
          (s && (h.push(-5), (s = void 0)), v < x && (h.push(c.slice(v, x)), (n += x - v)), k)
        ) {
          case 0: {
            (h.push(65533), n++);
            break;
          }
          case 9: {
            for (g = Math.ceil(n / 4) * 4, h.push(-2); n++ < g; ) h.push(-1);
            break;
          }
          case 10: {
            (h.push(-4), (n = 1));
            break;
          }
          default:
            ((s = !0), (n = 1));
        }
      v = x + 1;
    }
    return (p && (s && h.push(-5), i && h.push(i), h.push(null)), h);
  }
}
const S0 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function _0(n) {
  return n.replace(S0, C0);
}
function C0(n, i, l) {
  if (i) return i;
  if (l.charCodeAt(0) === 35) {
    const u = l.charCodeAt(1),
      c = u === 120 || u === 88;
    return Ep(l.slice(c ? 2 : 1), c ? 16 : 10);
  }
  return eu(l) || n;
}
const Rp = {}.hasOwnProperty;
function E0(n, i, l) {
  return (
    typeof i != 'string' && ((l = i), (i = void 0)),
    N0(l)(
      w0(
        k0(l)
          .document()
          .write(x0()(n, i, !0))
      )
    )
  );
}
function N0(n) {
  const i = {
    transforms: [],
    canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
    enter: {
      autolink: c(yr),
      autolinkProtocol: Se,
      autolinkEmail: Se,
      atxHeading: c(nt),
      blockQuote: c(ce),
      characterEscape: Se,
      characterReference: Se,
      codeFenced: c(Ee),
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: f,
      codeIndented: c(Ee, f),
      codeText: c(K, f),
      codeTextData: Se,
      data: Se,
      codeFlowValue: Se,
      definition: c(de),
      definitionDestinationString: f,
      definitionLabelString: f,
      definitionTitleString: f,
      emphasis: c(tt),
      hardBreakEscape: c(rn),
      hardBreakTrailing: c(rn),
      htmlFlow: c(Bt, f),
      htmlFlowData: Se,
      htmlText: c(Bt, f),
      htmlTextData: Se,
      image: c(Jn),
      label: f,
      link: c(yr),
      listItem: c(Tn),
      listItemValue: x,
      listOrdered: c(In, v),
      listUnordered: c(In),
      paragraph: c(Zr),
      reference: C,
      referenceString: f,
      resourceDestinationString: f,
      resourceTitleString: f,
      setextHeading: c(nt),
      strong: c(Gi),
      thematicBreak: c(Xi),
    },
    exit: {
      atxHeading: h(),
      atxHeadingSequence: ae,
      autolink: h(),
      autolinkEmail: Le,
      autolinkProtocol: _e,
      blockQuote: h(),
      characterEscapeValue: Ce,
      characterReferenceMarkerHexadecimal: le,
      characterReferenceMarkerNumeric: le,
      characterReferenceValue: ue,
      characterReference: Ie,
      codeFenced: h(L),
      codeFencedFence: j,
      codeFencedFenceInfo: k,
      codeFencedFenceMeta: O,
      codeFlowValue: Ce,
      codeIndented: h(R),
      codeText: h(q),
      codeTextData: Ce,
      data: Ce,
      definition: h(),
      definitionDestinationString: V,
      definitionLabelString: M,
      definitionTitleString: F,
      emphasis: h(),
      hardBreakEscape: h(X),
      hardBreakTrailing: h(X),
      htmlFlow: h(ke),
      htmlFlowData: Ce,
      htmlText: h(te),
      htmlTextData: Ce,
      image: h(ge),
      label: Z,
      labelText: $,
      lineEnding: re,
      link: h(me),
      listItem: h(),
      listOrdered: h(),
      listUnordered: h(),
      paragraph: h(),
      referenceString: fe,
      resourceDestinationString: S,
      resourceTitleString: I,
      resource: D,
      setextHeading: h(ve),
      setextHeadingLineSequence: J,
      setextHeadingText: z,
      strong: h(),
      thematicBreak: h(),
    },
  };
  Mp(i, (n || {}).mdastExtensions || []);
  const l = {};
  return s;
  function s(A) {
    let Y = { type: 'root', children: [] };
    const ye = {
        stack: [Y],
        tokenStack: [],
        config: i,
        enter: p,
        exit: m,
        buffer: f,
        resume: g,
        data: l,
      },
      be = [];
    let Oe = -1;
    for (; ++Oe < A.length; )
      if (A[Oe][1].type === 'listOrdered' || A[Oe][1].type === 'listUnordered')
        if (A[Oe][0] === 'enter') be.push(Oe);
        else {
          const ft = be.pop();
          Oe = u(A, ft, Oe);
        }
    for (Oe = -1; ++Oe < A.length; ) {
      const ft = i[A[Oe][0]];
      Rp.call(ft, A[Oe][1].type) &&
        ft[A[Oe][1].type].call(
          Object.assign({ sliceSerialize: A[Oe][2].sliceSerialize }, ye),
          A[Oe][1]
        );
    }
    if (ye.tokenStack.length > 0) {
      const ft = ye.tokenStack[ye.tokenStack.length - 1];
      (ft[1] || Ed).call(ye, void 0, ft[0]);
    }
    for (
      Y.position = {
        start: Kn(A.length > 0 ? A[0][1].start : { line: 1, column: 1, offset: 0 }),
        end: Kn(A.length > 0 ? A[A.length - 2][1].end : { line: 1, column: 1, offset: 0 }),
      },
        Oe = -1;
      ++Oe < i.transforms.length;
    )
      Y = i.transforms[Oe](Y) || Y;
    return Y;
  }
  function u(A, Y, ye) {
    let be = Y - 1,
      Oe = -1,
      ft = !1,
      hn,
      Ut,
      bn,
      er;
    for (; ++be <= ye; ) {
      const dt = A[be];
      switch (dt[1].type) {
        case 'listUnordered':
        case 'listOrdered':
        case 'blockQuote': {
          (dt[0] === 'enter' ? Oe++ : Oe--, (er = void 0));
          break;
        }
        case 'lineEndingBlank': {
          dt[0] === 'enter' && (hn && !er && !Oe && !bn && (bn = be), (er = void 0));
          break;
        }
        case 'linePrefix':
        case 'listItemValue':
        case 'listItemMarker':
        case 'listItemPrefix':
        case 'listItemPrefixWhitespace':
          break;
        default:
          er = void 0;
      }
      if (
        (!Oe && dt[0] === 'enter' && dt[1].type === 'listItemPrefix') ||
        (Oe === -1 &&
          dt[0] === 'exit' &&
          (dt[1].type === 'listUnordered' || dt[1].type === 'listOrdered'))
      ) {
        if (hn) {
          let ln = be;
          for (Ut = void 0; ln--; ) {
            const Ot = A[ln];
            if (Ot[1].type === 'lineEnding' || Ot[1].type === 'lineEndingBlank') {
              if (Ot[0] === 'exit') continue;
              (Ut && ((A[Ut][1].type = 'lineEndingBlank'), (ft = !0)),
                (Ot[1].type = 'lineEnding'),
                (Ut = ln));
            } else if (
              !(
                Ot[1].type === 'linePrefix' ||
                Ot[1].type === 'blockQuotePrefix' ||
                Ot[1].type === 'blockQuotePrefixWhitespace' ||
                Ot[1].type === 'blockQuoteMarker' ||
                Ot[1].type === 'listItemIndent'
              )
            )
              break;
          }
          (bn && (!Ut || bn < Ut) && (hn._spread = !0),
            (hn.end = Object.assign({}, Ut ? A[Ut][1].start : dt[1].end)),
            A.splice(Ut || be, 0, ['exit', hn, dt[2]]),
            be++,
            ye++);
        }
        if (dt[1].type === 'listItemPrefix') {
          const ln = {
            type: 'listItem',
            _spread: !1,
            start: Object.assign({}, dt[1].start),
            end: void 0,
          };
          ((hn = ln), A.splice(be, 0, ['enter', ln, dt[2]]), be++, ye++, (bn = void 0), (er = !0));
        }
      }
    }
    return ((A[Y][1]._spread = ft), ye);
  }
  function c(A, Y) {
    return ye;
    function ye(be) {
      (p.call(this, A(be), be), Y && Y.call(this, be));
    }
  }
  function f() {
    this.stack.push({ type: 'fragment', children: [] });
  }
  function p(A, Y, ye) {
    (this.stack[this.stack.length - 1].children.push(A),
      this.stack.push(A),
      this.tokenStack.push([Y, ye || void 0]),
      (A.position = { start: Kn(Y.start), end: void 0 }));
  }
  function h(A) {
    return Y;
    function Y(ye) {
      (A && A.call(this, ye), m.call(this, ye));
    }
  }
  function m(A, Y) {
    const ye = this.stack.pop(),
      be = this.tokenStack.pop();
    if (be)
      be[0].type !== A.type && (Y ? Y.call(this, A, be[0]) : (be[1] || Ed).call(this, A, be[0]));
    else
      throw new Error(
        'Cannot close `' + A.type + '` (' + Bi({ start: A.start, end: A.end }) + '): it’s not open'
      );
    ye.position.end = Kn(A.end);
  }
  function g() {
    return C1(this.stack.pop());
  }
  function v() {
    this.data.expectingFirstListItemValue = !0;
  }
  function x(A) {
    if (this.data.expectingFirstListItemValue) {
      const Y = this.stack[this.stack.length - 2];
      ((Y.start = Number.parseInt(this.sliceSerialize(A), 10)),
        (this.data.expectingFirstListItemValue = void 0));
    }
  }
  function k() {
    const A = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.lang = A;
  }
  function O() {
    const A = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.meta = A;
  }
  function j() {
    this.data.flowCodeInside || (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function L() {
    const A = this.resume(),
      Y = this.stack[this.stack.length - 1];
    ((Y.value = A.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '')), (this.data.flowCodeInside = void 0));
  }
  function R() {
    const A = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.value = A.replace(/(\r?\n|\r)$/g, '');
  }
  function M(A) {
    const Y = this.resume(),
      ye = this.stack[this.stack.length - 1];
    ((ye.label = Y), (ye.identifier = qr(this.sliceSerialize(A)).toLowerCase()));
  }
  function F() {
    const A = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.title = A;
  }
  function V() {
    const A = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.url = A;
  }
  function ae(A) {
    const Y = this.stack[this.stack.length - 1];
    if (!Y.depth) {
      const ye = this.sliceSerialize(A).length;
      Y.depth = ye;
    }
  }
  function z() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function J(A) {
    const Y = this.stack[this.stack.length - 1];
    Y.depth = this.sliceSerialize(A).codePointAt(0) === 61 ? 1 : 2;
  }
  function ve() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function Se(A) {
    const ye = this.stack[this.stack.length - 1].children;
    let be = ye[ye.length - 1];
    ((!be || be.type !== 'text') &&
      ((be = Ki()), (be.position = { start: Kn(A.start), end: void 0 }), ye.push(be)),
      this.stack.push(be));
  }
  function Ce(A) {
    const Y = this.stack.pop();
    ((Y.value += this.sliceSerialize(A)), (Y.position.end = Kn(A.end)));
  }
  function re(A) {
    const Y = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const ye = Y.children[Y.children.length - 1];
      ((ye.position.end = Kn(A.end)), (this.data.atHardBreak = void 0));
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      i.canContainEols.includes(Y.type) &&
      (Se.call(this, A), Ce.call(this, A));
  }
  function X() {
    this.data.atHardBreak = !0;
  }
  function ke() {
    const A = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.value = A;
  }
  function te() {
    const A = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.value = A;
  }
  function q() {
    const A = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.value = A;
  }
  function me() {
    const A = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const Y = this.data.referenceType || 'shortcut';
      ((A.type += 'Reference'), (A.referenceType = Y), delete A.url, delete A.title);
    } else (delete A.identifier, delete A.label);
    this.data.referenceType = void 0;
  }
  function ge() {
    const A = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const Y = this.data.referenceType || 'shortcut';
      ((A.type += 'Reference'), (A.referenceType = Y), delete A.url, delete A.title);
    } else (delete A.identifier, delete A.label);
    this.data.referenceType = void 0;
  }
  function $(A) {
    const Y = this.sliceSerialize(A),
      ye = this.stack[this.stack.length - 2];
    ((ye.label = _0(Y)), (ye.identifier = qr(Y).toLowerCase()));
  }
  function Z() {
    const A = this.stack[this.stack.length - 1],
      Y = this.resume(),
      ye = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), ye.type === 'link')) {
      const be = A.children;
      ye.children = be;
    } else ye.alt = Y;
  }
  function S() {
    const A = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.url = A;
  }
  function I() {
    const A = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.title = A;
  }
  function D() {
    this.data.inReference = void 0;
  }
  function C() {
    this.data.referenceType = 'collapsed';
  }
  function fe(A) {
    const Y = this.resume(),
      ye = this.stack[this.stack.length - 1];
    ((ye.label = Y),
      (ye.identifier = qr(this.sliceSerialize(A)).toLowerCase()),
      (this.data.referenceType = 'full'));
  }
  function le(A) {
    this.data.characterReferenceType = A.type;
  }
  function ue(A) {
    const Y = this.sliceSerialize(A),
      ye = this.data.characterReferenceType;
    let be;
    ye
      ? ((be = Ep(Y, ye === 'characterReferenceMarkerNumeric' ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (be = eu(Y));
    const Oe = this.stack[this.stack.length - 1];
    Oe.value += be;
  }
  function Ie(A) {
    const Y = this.stack.pop();
    Y.position.end = Kn(A.end);
  }
  function _e(A) {
    Ce.call(this, A);
    const Y = this.stack[this.stack.length - 1];
    Y.url = this.sliceSerialize(A);
  }
  function Le(A) {
    Ce.call(this, A);
    const Y = this.stack[this.stack.length - 1];
    Y.url = 'mailto:' + this.sliceSerialize(A);
  }
  function ce() {
    return { type: 'blockquote', children: [] };
  }
  function Ee() {
    return { type: 'code', lang: null, meta: null, value: '' };
  }
  function K() {
    return { type: 'inlineCode', value: '' };
  }
  function de() {
    return { type: 'definition', identifier: '', label: null, title: null, url: '' };
  }
  function tt() {
    return { type: 'emphasis', children: [] };
  }
  function nt() {
    return { type: 'heading', depth: 0, children: [] };
  }
  function rn() {
    return { type: 'break' };
  }
  function Bt() {
    return { type: 'html', value: '' };
  }
  function Jn() {
    return { type: 'image', title: null, url: '', alt: null };
  }
  function yr() {
    return { type: 'link', title: null, url: '', children: [] };
  }
  function In(A) {
    return {
      type: 'list',
      ordered: A.type === 'listOrdered',
      start: null,
      spread: A._spread,
      children: [],
    };
  }
  function Tn(A) {
    return { type: 'listItem', spread: A._spread, checked: null, children: [] };
  }
  function Zr() {
    return { type: 'paragraph', children: [] };
  }
  function Gi() {
    return { type: 'strong', children: [] };
  }
  function Ki() {
    return { type: 'text', value: '' };
  }
  function Xi() {
    return { type: 'thematicBreak' };
  }
}
function Kn(n) {
  return { line: n.line, column: n.column, offset: n.offset };
}
function Mp(n, i) {
  let l = -1;
  for (; ++l < i.length; ) {
    const s = i[l];
    Array.isArray(s) ? Mp(n, s) : I0(n, s);
  }
}
function I0(n, i) {
  let l;
  for (l in i)
    if (Rp.call(i, l))
      switch (l) {
        case 'canContainEols': {
          const s = i[l];
          s && n[l].push(...s);
          break;
        }
        case 'transforms': {
          const s = i[l];
          s && n[l].push(...s);
          break;
        }
        case 'enter':
        case 'exit': {
          const s = i[l];
          s && Object.assign(n[l], s);
          break;
        }
      }
}
function Ed(n, i) {
  throw n
    ? new Error(
        'Cannot close `' +
          n.type +
          '` (' +
          Bi({ start: n.start, end: n.end }) +
          '): a different token (`' +
          i.type +
          '`, ' +
          Bi({ start: i.start, end: i.end }) +
          ') is open'
      )
    : new Error(
        'Cannot close document, a token (`' +
          i.type +
          '`, ' +
          Bi({ start: i.start, end: i.end }) +
          ') is still open'
      );
}
function T0(n) {
  const i = this;
  i.parser = l;
  function l(s) {
    return E0(s, {
      ...i.data('settings'),
      ...n,
      extensions: i.data('micromarkExtensions') || [],
      mdastExtensions: i.data('fromMarkdownExtensions') || [],
    });
  }
}
function b0(n, i) {
  const l = {
    type: 'element',
    tagName: 'blockquote',
    properties: {},
    children: n.wrap(n.all(i), !0),
  };
  return (n.patch(i, l), n.applyData(i, l));
}
function j0(n, i) {
  const l = { type: 'element', tagName: 'br', properties: {}, children: [] };
  return (
    n.patch(i, l),
    [
      n.applyData(i, l),
      {
        type: 'text',
        value: `
`,
      },
    ]
  );
}
function L0(n, i) {
  const l = i.value
      ? i.value +
        `
`
      : '',
    s = {},
    u = i.lang ? i.lang.split(/\s+/) : [];
  u.length > 0 && (s.className = ['language-' + u[0]]);
  let c = {
    type: 'element',
    tagName: 'code',
    properties: s,
    children: [{ type: 'text', value: l }],
  };
  return (
    i.meta && (c.data = { meta: i.meta }),
    n.patch(i, c),
    (c = n.applyData(i, c)),
    (c = { type: 'element', tagName: 'pre', properties: {}, children: [c] }),
    n.patch(i, c),
    c
  );
}
function P0(n, i) {
  const l = { type: 'element', tagName: 'del', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function O0(n, i) {
  const l = { type: 'element', tagName: 'em', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function z0(n, i) {
  const l = typeof n.options.clobberPrefix == 'string' ? n.options.clobberPrefix : 'user-content-',
    s = String(i.identifier).toUpperCase(),
    u = Xr(s.toLowerCase()),
    c = n.footnoteOrder.indexOf(s);
  let f,
    p = n.footnoteCounts.get(s);
  (p === void 0 ? ((p = 0), n.footnoteOrder.push(s), (f = n.footnoteOrder.length)) : (f = c + 1),
    (p += 1),
    n.footnoteCounts.set(s, p));
  const h = {
    type: 'element',
    tagName: 'a',
    properties: {
      href: '#' + l + 'fn-' + u,
      id: l + 'fnref-' + u + (p > 1 ? '-' + p : ''),
      dataFootnoteRef: !0,
      ariaDescribedBy: ['footnote-label'],
    },
    children: [{ type: 'text', value: String(f) }],
  };
  n.patch(i, h);
  const m = { type: 'element', tagName: 'sup', properties: {}, children: [h] };
  return (n.patch(i, m), n.applyData(i, m));
}
function R0(n, i) {
  const l = { type: 'element', tagName: 'h' + i.depth, properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function M0(n, i) {
  if (n.options.allowDangerousHtml) {
    const l = { type: 'raw', value: i.value };
    return (n.patch(i, l), n.applyData(i, l));
  }
}
function Ap(n, i) {
  const l = i.referenceType;
  let s = ']';
  if (
    (l === 'collapsed' ? (s += '[]') : l === 'full' && (s += '[' + (i.label || i.identifier) + ']'),
    i.type === 'imageReference')
  )
    return [{ type: 'text', value: '![' + i.alt + s }];
  const u = n.all(i),
    c = u[0];
  c && c.type === 'text' ? (c.value = '[' + c.value) : u.unshift({ type: 'text', value: '[' });
  const f = u[u.length - 1];
  return (f && f.type === 'text' ? (f.value += s) : u.push({ type: 'text', value: s }), u);
}
function A0(n, i) {
  const l = String(i.identifier).toUpperCase(),
    s = n.definitionById.get(l);
  if (!s) return Ap(n, i);
  const u = { src: Xr(s.url || ''), alt: i.alt };
  s.title !== null && s.title !== void 0 && (u.title = s.title);
  const c = { type: 'element', tagName: 'img', properties: u, children: [] };
  return (n.patch(i, c), n.applyData(i, c));
}
function D0(n, i) {
  const l = { src: Xr(i.url) };
  (i.alt !== null && i.alt !== void 0 && (l.alt = i.alt),
    i.title !== null && i.title !== void 0 && (l.title = i.title));
  const s = { type: 'element', tagName: 'img', properties: l, children: [] };
  return (n.patch(i, s), n.applyData(i, s));
}
function F0(n, i) {
  const l = { type: 'text', value: i.value.replace(/\r?\n|\r/g, ' ') };
  n.patch(i, l);
  const s = { type: 'element', tagName: 'code', properties: {}, children: [l] };
  return (n.patch(i, s), n.applyData(i, s));
}
function B0(n, i) {
  const l = String(i.identifier).toUpperCase(),
    s = n.definitionById.get(l);
  if (!s) return Ap(n, i);
  const u = { href: Xr(s.url || '') };
  s.title !== null && s.title !== void 0 && (u.title = s.title);
  const c = { type: 'element', tagName: 'a', properties: u, children: n.all(i) };
  return (n.patch(i, c), n.applyData(i, c));
}
function U0(n, i) {
  const l = { href: Xr(i.url) };
  i.title !== null && i.title !== void 0 && (l.title = i.title);
  const s = { type: 'element', tagName: 'a', properties: l, children: n.all(i) };
  return (n.patch(i, s), n.applyData(i, s));
}
function V0(n, i, l) {
  const s = n.all(i),
    u = l ? H0(l) : Dp(i),
    c = {},
    f = [];
  if (typeof i.checked == 'boolean') {
    const g = s[0];
    let v;
    (g && g.type === 'element' && g.tagName === 'p'
      ? (v = g)
      : ((v = { type: 'element', tagName: 'p', properties: {}, children: [] }), s.unshift(v)),
      v.children.length > 0 && v.children.unshift({ type: 'text', value: ' ' }),
      v.children.unshift({
        type: 'element',
        tagName: 'input',
        properties: { type: 'checkbox', checked: i.checked, disabled: !0 },
        children: [],
      }),
      (c.className = ['task-list-item']));
  }
  let p = -1;
  for (; ++p < s.length; ) {
    const g = s[p];
    ((u || p !== 0 || g.type !== 'element' || g.tagName !== 'p') &&
      f.push({
        type: 'text',
        value: `
`,
      }),
      g.type === 'element' && g.tagName === 'p' && !u ? f.push(...g.children) : f.push(g));
  }
  const h = s[s.length - 1];
  h &&
    (u || h.type !== 'element' || h.tagName !== 'p') &&
    f.push({
      type: 'text',
      value: `
`,
    });
  const m = { type: 'element', tagName: 'li', properties: c, children: f };
  return (n.patch(i, m), n.applyData(i, m));
}
function H0(n) {
  let i = !1;
  if (n.type === 'list') {
    i = n.spread || !1;
    const l = n.children;
    let s = -1;
    for (; !i && ++s < l.length; ) i = Dp(l[s]);
  }
  return i;
}
function Dp(n) {
  const i = n.spread;
  return i ?? n.children.length > 1;
}
function $0(n, i) {
  const l = {},
    s = n.all(i);
  let u = -1;
  for (typeof i.start == 'number' && i.start !== 1 && (l.start = i.start); ++u < s.length; ) {
    const f = s[u];
    if (
      f.type === 'element' &&
      f.tagName === 'li' &&
      f.properties &&
      Array.isArray(f.properties.className) &&
      f.properties.className.includes('task-list-item')
    ) {
      l.className = ['contains-task-list'];
      break;
    }
  }
  const c = {
    type: 'element',
    tagName: i.ordered ? 'ol' : 'ul',
    properties: l,
    children: n.wrap(s, !0),
  };
  return (n.patch(i, c), n.applyData(i, c));
}
function W0(n, i) {
  const l = { type: 'element', tagName: 'p', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function Q0(n, i) {
  const l = { type: 'root', children: n.wrap(n.all(i)) };
  return (n.patch(i, l), n.applyData(i, l));
}
function q0(n, i) {
  const l = { type: 'element', tagName: 'strong', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function Y0(n, i) {
  const l = n.all(i),
    s = l.shift(),
    u = [];
  if (s) {
    const f = { type: 'element', tagName: 'thead', properties: {}, children: n.wrap([s], !0) };
    (n.patch(i.children[0], f), u.push(f));
  }
  if (l.length > 0) {
    const f = { type: 'element', tagName: 'tbody', properties: {}, children: n.wrap(l, !0) },
      p = Ka(i.children[1]),
      h = vp(i.children[i.children.length - 1]);
    (p && h && (f.position = { start: p, end: h }), u.push(f));
  }
  const c = { type: 'element', tagName: 'table', properties: {}, children: n.wrap(u, !0) };
  return (n.patch(i, c), n.applyData(i, c));
}
function G0(n, i, l) {
  const s = l ? l.children : void 0,
    c = (s ? s.indexOf(i) : 1) === 0 ? 'th' : 'td',
    f = l && l.type === 'table' ? l.align : void 0,
    p = f ? f.length : i.children.length;
  let h = -1;
  const m = [];
  for (; ++h < p; ) {
    const v = i.children[h],
      x = {},
      k = f ? f[h] : void 0;
    k && (x.align = k);
    let O = { type: 'element', tagName: c, properties: x, children: [] };
    (v && ((O.children = n.all(v)), n.patch(v, O), (O = n.applyData(v, O))), m.push(O));
  }
  const g = { type: 'element', tagName: 'tr', properties: {}, children: n.wrap(m, !0) };
  return (n.patch(i, g), n.applyData(i, g));
}
function K0(n, i) {
  const l = { type: 'element', tagName: 'td', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
const Nd = 9,
  Id = 32;
function X0(n) {
  const i = String(n),
    l = /\r?\n|\r/g;
  let s = l.exec(i),
    u = 0;
  const c = [];
  for (; s; )
    (c.push(Td(i.slice(u, s.index), u > 0, !0), s[0]),
      (u = s.index + s[0].length),
      (s = l.exec(i)));
  return (c.push(Td(i.slice(u), u > 0, !1)), c.join(''));
}
function Td(n, i, l) {
  let s = 0,
    u = n.length;
  if (i) {
    let c = n.codePointAt(s);
    for (; c === Nd || c === Id; ) (s++, (c = n.codePointAt(s)));
  }
  if (l) {
    let c = n.codePointAt(u - 1);
    for (; c === Nd || c === Id; ) (u--, (c = n.codePointAt(u - 1)));
  }
  return u > s ? n.slice(s, u) : '';
}
function Z0(n, i) {
  const l = { type: 'text', value: X0(String(i.value)) };
  return (n.patch(i, l), n.applyData(i, l));
}
function J0(n, i) {
  const l = { type: 'element', tagName: 'hr', properties: {}, children: [] };
  return (n.patch(i, l), n.applyData(i, l));
}
const ek = {
  blockquote: b0,
  break: j0,
  code: L0,
  delete: P0,
  emphasis: O0,
  footnoteReference: z0,
  heading: R0,
  html: M0,
  imageReference: A0,
  image: D0,
  inlineCode: F0,
  linkReference: B0,
  link: U0,
  listItem: V0,
  list: $0,
  paragraph: W0,
  root: Q0,
  strong: q0,
  table: Y0,
  tableCell: K0,
  tableRow: G0,
  text: Z0,
  thematicBreak: J0,
  toml: oo,
  yaml: oo,
  definition: oo,
  footnoteDefinition: oo,
};
function oo() {}
const Fp = -1,
  ko = 0,
  Vi = 1,
  mo = 2,
  ru = 3,
  iu = 4,
  lu = 5,
  ou = 6,
  Bp = 7,
  Up = 8,
  bd = typeof self == 'object' ? self : globalThis,
  tk = (n, i) => {
    const l = (u, c) => (n.set(c, u), u),
      s = (u) => {
        if (n.has(u)) return n.get(u);
        const [c, f] = i[u];
        switch (c) {
          case ko:
          case Fp:
            return l(f, u);
          case Vi: {
            const p = l([], u);
            for (const h of f) p.push(s(h));
            return p;
          }
          case mo: {
            const p = l({}, u);
            for (const [h, m] of f) p[s(h)] = s(m);
            return p;
          }
          case ru:
            return l(new Date(f), u);
          case iu: {
            const { source: p, flags: h } = f;
            return l(new RegExp(p, h), u);
          }
          case lu: {
            const p = l(new Map(), u);
            for (const [h, m] of f) p.set(s(h), s(m));
            return p;
          }
          case ou: {
            const p = l(new Set(), u);
            for (const h of f) p.add(s(h));
            return p;
          }
          case Bp: {
            const { name: p, message: h } = f;
            return l(new bd[p](h), u);
          }
          case Up:
            return l(BigInt(f), u);
          case 'BigInt':
            return l(Object(BigInt(f)), u);
          case 'ArrayBuffer':
            return l(new Uint8Array(f).buffer, f);
          case 'DataView': {
            const { buffer: p } = new Uint8Array(f);
            return l(new DataView(p), f);
          }
        }
        return l(new bd[c](f), u);
      };
    return s;
  },
  jd = (n) => tk(new Map(), n)(0),
  Hr = '',
  { toString: nk } = {},
  { keys: rk } = Object,
  Fi = (n) => {
    const i = typeof n;
    if (i !== 'object' || !n) return [ko, i];
    const l = nk.call(n).slice(8, -1);
    switch (l) {
      case 'Array':
        return [Vi, Hr];
      case 'Object':
        return [mo, Hr];
      case 'Date':
        return [ru, Hr];
      case 'RegExp':
        return [iu, Hr];
      case 'Map':
        return [lu, Hr];
      case 'Set':
        return [ou, Hr];
      case 'DataView':
        return [Vi, l];
    }
    return l.includes('Array') ? [Vi, l] : l.includes('Error') ? [Bp, l] : [mo, l];
  },
  so = ([n, i]) => n === ko && (i === 'function' || i === 'symbol'),
  ik = (n, i, l, s) => {
    const u = (f, p) => {
        const h = s.push(f) - 1;
        return (l.set(p, h), h);
      },
      c = (f) => {
        if (l.has(f)) return l.get(f);
        let [p, h] = Fi(f);
        switch (p) {
          case ko: {
            let g = f;
            switch (h) {
              case 'bigint':
                ((p = Up), (g = f.toString()));
                break;
              case 'function':
              case 'symbol':
                if (n) throw new TypeError('unable to serialize ' + h);
                g = null;
                break;
              case 'undefined':
                return u([Fp], f);
            }
            return u([p, g], f);
          }
          case Vi: {
            if (h) {
              let x = f;
              return (
                h === 'DataView'
                  ? (x = new Uint8Array(f.buffer))
                  : h === 'ArrayBuffer' && (x = new Uint8Array(f)),
                u([h, [...x]], f)
              );
            }
            const g = [],
              v = u([p, g], f);
            for (const x of f) g.push(c(x));
            return v;
          }
          case mo: {
            if (h)
              switch (h) {
                case 'BigInt':
                  return u([h, f.toString()], f);
                case 'Boolean':
                case 'Number':
                case 'String':
                  return u([h, f.valueOf()], f);
              }
            if (i && 'toJSON' in f) return c(f.toJSON());
            const g = [],
              v = u([p, g], f);
            for (const x of rk(f)) (n || !so(Fi(f[x]))) && g.push([c(x), c(f[x])]);
            return v;
          }
          case ru:
            return u([p, f.toISOString()], f);
          case iu: {
            const { source: g, flags: v } = f;
            return u([p, { source: g, flags: v }], f);
          }
          case lu: {
            const g = [],
              v = u([p, g], f);
            for (const [x, k] of f) (n || !(so(Fi(x)) || so(Fi(k)))) && g.push([c(x), c(k)]);
            return v;
          }
          case ou: {
            const g = [],
              v = u([p, g], f);
            for (const x of f) (n || !so(Fi(x))) && g.push(c(x));
            return v;
          }
        }
        const { message: m } = f;
        return u([p, { name: h, message: m }], f);
      };
    return c;
  },
  Ld = (n, { json: i, lossy: l } = {}) => {
    const s = [];
    return (ik(!(i || l), !!i, new Map(), s)(n), s);
  },
  go =
    typeof structuredClone == 'function'
      ? (n, i) => (i && ('json' in i || 'lossy' in i) ? jd(Ld(n, i)) : structuredClone(n))
      : (n, i) => jd(Ld(n, i));
function lk(n, i) {
  const l = [{ type: 'text', value: '↩' }];
  return (
    i > 1 &&
      l.push({
        type: 'element',
        tagName: 'sup',
        properties: {},
        children: [{ type: 'text', value: String(i) }],
      }),
    l
  );
}
function ok(n, i) {
  return 'Back to reference ' + (n + 1) + (i > 1 ? '-' + i : '');
}
function sk(n) {
  const i = typeof n.options.clobberPrefix == 'string' ? n.options.clobberPrefix : 'user-content-',
    l = n.options.footnoteBackContent || lk,
    s = n.options.footnoteBackLabel || ok,
    u = n.options.footnoteLabel || 'Footnotes',
    c = n.options.footnoteLabelTagName || 'h2',
    f = n.options.footnoteLabelProperties || { className: ['sr-only'] },
    p = [];
  let h = -1;
  for (; ++h < n.footnoteOrder.length; ) {
    const m = n.footnoteById.get(n.footnoteOrder[h]);
    if (!m) continue;
    const g = n.all(m),
      v = String(m.identifier).toUpperCase(),
      x = Xr(v.toLowerCase());
    let k = 0;
    const O = [],
      j = n.footnoteCounts.get(v);
    for (; j !== void 0 && ++k <= j; ) {
      O.length > 0 && O.push({ type: 'text', value: ' ' });
      let M = typeof l == 'string' ? l : l(h, k);
      (typeof M == 'string' && (M = { type: 'text', value: M }),
        O.push({
          type: 'element',
          tagName: 'a',
          properties: {
            href: '#' + i + 'fnref-' + x + (k > 1 ? '-' + k : ''),
            dataFootnoteBackref: '',
            ariaLabel: typeof s == 'string' ? s : s(h, k),
            className: ['data-footnote-backref'],
          },
          children: Array.isArray(M) ? M : [M],
        }));
    }
    const L = g[g.length - 1];
    if (L && L.type === 'element' && L.tagName === 'p') {
      const M = L.children[L.children.length - 1];
      (M && M.type === 'text' ? (M.value += ' ') : L.children.push({ type: 'text', value: ' ' }),
        L.children.push(...O));
    } else g.push(...O);
    const R = {
      type: 'element',
      tagName: 'li',
      properties: { id: i + 'fn-' + x },
      children: n.wrap(g, !0),
    };
    (n.patch(m, R), p.push(R));
  }
  if (p.length !== 0)
    return {
      type: 'element',
      tagName: 'section',
      properties: { dataFootnotes: !0, className: ['footnotes'] },
      children: [
        {
          type: 'element',
          tagName: c,
          properties: { ...go(f), id: 'footnote-label' },
          children: [{ type: 'text', value: u }],
        },
        {
          type: 'text',
          value: `
`,
        },
        { type: 'element', tagName: 'ol', properties: {}, children: n.wrap(p, !0) },
        {
          type: 'text',
          value: `
`,
        },
      ],
    };
}
const Vp = function (n) {
  if (n == null) return fk;
  if (typeof n == 'function') return wo(n);
  if (typeof n == 'object') return Array.isArray(n) ? ak(n) : uk(n);
  if (typeof n == 'string') return ck(n);
  throw new Error('Expected function, string, or object as test');
};
function ak(n) {
  const i = [];
  let l = -1;
  for (; ++l < n.length; ) i[l] = Vp(n[l]);
  return wo(s);
  function s(...u) {
    let c = -1;
    for (; ++c < i.length; ) if (i[c].apply(this, u)) return !0;
    return !1;
  }
}
function uk(n) {
  const i = n;
  return wo(l);
  function l(s) {
    const u = s;
    let c;
    for (c in n) if (u[c] !== i[c]) return !1;
    return !0;
  }
}
function ck(n) {
  return wo(i);
  function i(l) {
    return l && l.type === n;
  }
}
function wo(n) {
  return i;
  function i(l, s, u) {
    return !!(dk(l) && n.call(this, l, typeof s == 'number' ? s : void 0, u || void 0));
  }
}
function fk() {
  return !0;
}
function dk(n) {
  return n !== null && typeof n == 'object' && 'type' in n;
}
const Hp = [],
  pk = !0,
  Pd = !1,
  hk = 'skip';
function mk(n, i, l, s) {
  let u;
  typeof i == 'function' && typeof l != 'function' ? ((s = l), (l = i)) : (u = i);
  const c = Vp(u),
    f = s ? -1 : 1;
  p(n, void 0, [])();
  function p(h, m, g) {
    const v = h && typeof h == 'object' ? h : {};
    if (typeof v.type == 'string') {
      const k =
        typeof v.tagName == 'string' ? v.tagName : typeof v.name == 'string' ? v.name : void 0;
      Object.defineProperty(x, 'name', {
        value: 'node (' + (h.type + (k ? '<' + k + '>' : '')) + ')',
      });
    }
    return x;
    function x() {
      let k = Hp,
        O,
        j,
        L;
      if ((!i || c(h, m, g[g.length - 1] || void 0)) && ((k = gk(l(h, g))), k[0] === Pd)) return k;
      if ('children' in h && h.children) {
        const R = h;
        if (R.children && k[0] !== hk)
          for (
            j = (s ? R.children.length : -1) + f, L = g.concat(R);
            j > -1 && j < R.children.length;
          ) {
            const M = R.children[j];
            if (((O = p(M, j, L)()), O[0] === Pd)) return O;
            j = typeof O[1] == 'number' ? O[1] : j + f;
          }
      }
      return k;
    }
  }
}
function gk(n) {
  return Array.isArray(n) ? n : typeof n == 'number' ? [pk, n] : n == null ? Hp : [n];
}
function $p(n, i, l, s) {
  let u, c, f;
  (typeof i == 'function' && typeof l != 'function'
    ? ((c = void 0), (f = i), (u = l))
    : ((c = i), (f = l), (u = s)),
    mk(n, c, p, u));
  function p(h, m) {
    const g = m[m.length - 1],
      v = g ? g.children.indexOf(h) : void 0;
    return f(h, v, g);
  }
}
const Ba = {}.hasOwnProperty,
  yk = {};
function vk(n, i) {
  const l = i || yk,
    s = new Map(),
    u = new Map(),
    c = new Map(),
    f = { ...ek, ...l.handlers },
    p = {
      all: m,
      applyData: wk,
      definitionById: s,
      footnoteById: u,
      footnoteCounts: c,
      footnoteOrder: [],
      handlers: f,
      one: h,
      options: l,
      patch: kk,
      wrap: Sk,
    };
  return (
    $p(n, function (g) {
      if (g.type === 'definition' || g.type === 'footnoteDefinition') {
        const v = g.type === 'definition' ? s : u,
          x = String(g.identifier).toUpperCase();
        v.has(x) || v.set(x, g);
      }
    }),
    p
  );
  function h(g, v) {
    const x = g.type,
      k = p.handlers[x];
    if (Ba.call(p.handlers, x) && k) return k(p, g, v);
    if (p.options.passThrough && p.options.passThrough.includes(x)) {
      if ('children' in g) {
        const { children: j, ...L } = g,
          R = go(L);
        return ((R.children = p.all(g)), R);
      }
      return go(g);
    }
    return (p.options.unknownHandler || xk)(p, g, v);
  }
  function m(g) {
    const v = [];
    if ('children' in g) {
      const x = g.children;
      let k = -1;
      for (; ++k < x.length; ) {
        const O = p.one(x[k], g);
        if (O) {
          if (
            k &&
            x[k - 1].type === 'break' &&
            (!Array.isArray(O) && O.type === 'text' && (O.value = Od(O.value)),
            !Array.isArray(O) && O.type === 'element')
          ) {
            const j = O.children[0];
            j && j.type === 'text' && (j.value = Od(j.value));
          }
          Array.isArray(O) ? v.push(...O) : v.push(O);
        }
      }
    }
    return v;
  }
}
function kk(n, i) {
  n.position && (i.position = n1(n));
}
function wk(n, i) {
  let l = i;
  if (n && n.data) {
    const s = n.data.hName,
      u = n.data.hChildren,
      c = n.data.hProperties;
    if (typeof s == 'string')
      if (l.type === 'element') l.tagName = s;
      else {
        const f = 'children' in l ? l.children : [l];
        l = { type: 'element', tagName: s, properties: {}, children: f };
      }
    (l.type === 'element' && c && Object.assign(l.properties, go(c)),
      'children' in l && l.children && u !== null && u !== void 0 && (l.children = u));
  }
  return l;
}
function xk(n, i) {
  const l = i.data || {},
    s =
      'value' in i && !(Ba.call(l, 'hProperties') || Ba.call(l, 'hChildren'))
        ? { type: 'text', value: i.value }
        : { type: 'element', tagName: 'div', properties: {}, children: n.all(i) };
  return (n.patch(i, s), n.applyData(i, s));
}
function Sk(n, i) {
  const l = [];
  let s = -1;
  for (
    i &&
    l.push({
      type: 'text',
      value: `
`,
    });
    ++s < n.length;
  )
    (s &&
      l.push({
        type: 'text',
        value: `
`,
      }),
      l.push(n[s]));
  return (
    i &&
      n.length > 0 &&
      l.push({
        type: 'text',
        value: `
`,
      }),
    l
  );
}
function Od(n) {
  let i = 0,
    l = n.charCodeAt(i);
  for (; l === 9 || l === 32; ) (i++, (l = n.charCodeAt(i)));
  return n.slice(i);
}
function zd(n, i) {
  const l = vk(n, i),
    s = l.one(n, void 0),
    u = sk(l),
    c = Array.isArray(s) ? { type: 'root', children: s } : s || { type: 'root', children: [] };
  return (
    u &&
      c.children.push(
        {
          type: 'text',
          value: `
`,
        },
        u
      ),
    c
  );
}
function _k(n, i) {
  return n && 'run' in n
    ? async function (l, s) {
        const u = zd(l, { file: s, ...i });
        await n.run(u, s);
      }
    : function (l, s) {
        return zd(l, { file: s, ...(n || i) });
      };
}
function Rd(n) {
  if (n) throw n;
}
var wa, Md;
function Ck() {
  if (Md) return wa;
  Md = 1;
  var n = Object.prototype.hasOwnProperty,
    i = Object.prototype.toString,
    l = Object.defineProperty,
    s = Object.getOwnPropertyDescriptor,
    u = function (m) {
      return typeof Array.isArray == 'function' ? Array.isArray(m) : i.call(m) === '[object Array]';
    },
    c = function (m) {
      if (!m || i.call(m) !== '[object Object]') return !1;
      var g = n.call(m, 'constructor'),
        v =
          m.constructor &&
          m.constructor.prototype &&
          n.call(m.constructor.prototype, 'isPrototypeOf');
      if (m.constructor && !g && !v) return !1;
      var x;
      for (x in m);
      return typeof x > 'u' || n.call(m, x);
    },
    f = function (m, g) {
      l && g.name === '__proto__'
        ? l(m, g.name, { enumerable: !0, configurable: !0, value: g.newValue, writable: !0 })
        : (m[g.name] = g.newValue);
    },
    p = function (m, g) {
      if (g === '__proto__')
        if (n.call(m, g)) {
          if (s) return s(m, g).value;
        } else return;
      return m[g];
    };
  return (
    (wa = function h() {
      var m,
        g,
        v,
        x,
        k,
        O,
        j = arguments[0],
        L = 1,
        R = arguments.length,
        M = !1;
      for (
        typeof j == 'boolean' && ((M = j), (j = arguments[1] || {}), (L = 2)),
          (j == null || (typeof j != 'object' && typeof j != 'function')) && (j = {});
        L < R;
        ++L
      )
        if (((m = arguments[L]), m != null))
          for (g in m)
            ((v = p(j, g)),
              (x = p(m, g)),
              j !== x &&
                (M && x && (c(x) || (k = u(x)))
                  ? (k ? ((k = !1), (O = v && u(v) ? v : [])) : (O = v && c(v) ? v : {}),
                    f(j, { name: g, newValue: h(M, O, x) }))
                  : typeof x < 'u' && f(j, { name: g, newValue: x })));
      return j;
    }),
    wa
  );
}
var Ek = Ck();
const xa = Qd(Ek);
function Ua(n) {
  if (typeof n != 'object' || n === null) return !1;
  const i = Object.getPrototypeOf(n);
  return (
    (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) &&
    !(Symbol.toStringTag in n) &&
    !(Symbol.iterator in n)
  );
}
function Nk() {
  const n = [],
    i = { run: l, use: s };
  return i;
  function l(...u) {
    let c = -1;
    const f = u.pop();
    if (typeof f != 'function') throw new TypeError('Expected function as last argument, not ' + f);
    p(null, ...u);
    function p(h, ...m) {
      const g = n[++c];
      let v = -1;
      if (h) {
        f(h);
        return;
      }
      for (; ++v < u.length; ) (m[v] === null || m[v] === void 0) && (m[v] = u[v]);
      ((u = m), g ? Ik(g, p)(...m) : f(null, ...m));
    }
  }
  function s(u) {
    if (typeof u != 'function')
      throw new TypeError('Expected `middelware` to be a function, not ' + u);
    return (n.push(u), i);
  }
}
function Ik(n, i) {
  let l;
  return s;
  function s(...f) {
    const p = n.length > f.length;
    let h;
    p && f.push(u);
    try {
      h = n.apply(this, f);
    } catch (m) {
      const g = m;
      if (p && l) throw g;
      return u(g);
    }
    p ||
      (h && h.then && typeof h.then == 'function'
        ? h.then(c, u)
        : h instanceof Error
          ? u(h)
          : c(h));
  }
  function u(f, ...p) {
    l || ((l = !0), i(f, ...p));
  }
  function c(f) {
    u(null, f);
  }
}
const fn = { basename: Tk, dirname: bk, extname: jk, join: Lk, sep: '/' };
function Tk(n, i) {
  if (i !== void 0 && typeof i != 'string') throw new TypeError('"ext" argument must be a string');
  Yi(n);
  let l = 0,
    s = -1,
    u = n.length,
    c;
  if (i === void 0 || i.length === 0 || i.length > n.length) {
    for (; u--; )
      if (n.codePointAt(u) === 47) {
        if (c) {
          l = u + 1;
          break;
        }
      } else s < 0 && ((c = !0), (s = u + 1));
    return s < 0 ? '' : n.slice(l, s);
  }
  if (i === n) return '';
  let f = -1,
    p = i.length - 1;
  for (; u--; )
    if (n.codePointAt(u) === 47) {
      if (c) {
        l = u + 1;
        break;
      }
    } else
      (f < 0 && ((c = !0), (f = u + 1)),
        p > -1 &&
          (n.codePointAt(u) === i.codePointAt(p--) ? p < 0 && (s = u) : ((p = -1), (s = f))));
  return (l === s ? (s = f) : s < 0 && (s = n.length), n.slice(l, s));
}
function bk(n) {
  if ((Yi(n), n.length === 0)) return '.';
  let i = -1,
    l = n.length,
    s;
  for (; --l; )
    if (n.codePointAt(l) === 47) {
      if (s) {
        i = l;
        break;
      }
    } else s || (s = !0);
  return i < 0
    ? n.codePointAt(0) === 47
      ? '/'
      : '.'
    : i === 1 && n.codePointAt(0) === 47
      ? '//'
      : n.slice(0, i);
}
function jk(n) {
  Yi(n);
  let i = n.length,
    l = -1,
    s = 0,
    u = -1,
    c = 0,
    f;
  for (; i--; ) {
    const p = n.codePointAt(i);
    if (p === 47) {
      if (f) {
        s = i + 1;
        break;
      }
      continue;
    }
    (l < 0 && ((f = !0), (l = i + 1)),
      p === 46 ? (u < 0 ? (u = i) : c !== 1 && (c = 1)) : u > -1 && (c = -1));
  }
  return u < 0 || l < 0 || c === 0 || (c === 1 && u === l - 1 && u === s + 1) ? '' : n.slice(u, l);
}
function Lk(...n) {
  let i = -1,
    l;
  for (; ++i < n.length; ) (Yi(n[i]), n[i] && (l = l === void 0 ? n[i] : l + '/' + n[i]));
  return l === void 0 ? '.' : Pk(l);
}
function Pk(n) {
  Yi(n);
  const i = n.codePointAt(0) === 47;
  let l = Ok(n, !i);
  return (
    l.length === 0 && !i && (l = '.'),
    l.length > 0 && n.codePointAt(n.length - 1) === 47 && (l += '/'),
    i ? '/' + l : l
  );
}
function Ok(n, i) {
  let l = '',
    s = 0,
    u = -1,
    c = 0,
    f = -1,
    p,
    h;
  for (; ++f <= n.length; ) {
    if (f < n.length) p = n.codePointAt(f);
    else {
      if (p === 47) break;
      p = 47;
    }
    if (p === 47) {
      if (!(u === f - 1 || c === 1))
        if (u !== f - 1 && c === 2) {
          if (
            l.length < 2 ||
            s !== 2 ||
            l.codePointAt(l.length - 1) !== 46 ||
            l.codePointAt(l.length - 2) !== 46
          ) {
            if (l.length > 2) {
              if (((h = l.lastIndexOf('/')), h !== l.length - 1)) {
                (h < 0
                  ? ((l = ''), (s = 0))
                  : ((l = l.slice(0, h)), (s = l.length - 1 - l.lastIndexOf('/'))),
                  (u = f),
                  (c = 0));
                continue;
              }
            } else if (l.length > 0) {
              ((l = ''), (s = 0), (u = f), (c = 0));
              continue;
            }
          }
          i && ((l = l.length > 0 ? l + '/..' : '..'), (s = 2));
        } else
          (l.length > 0 ? (l += '/' + n.slice(u + 1, f)) : (l = n.slice(u + 1, f)),
            (s = f - u - 1));
      ((u = f), (c = 0));
    } else p === 46 && c > -1 ? c++ : (c = -1);
  }
  return l;
}
function Yi(n) {
  if (typeof n != 'string')
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(n));
}
const zk = { cwd: Rk };
function Rk() {
  return '/';
}
function Va(n) {
  return !!(
    n !== null &&
    typeof n == 'object' &&
    'href' in n &&
    n.href &&
    'protocol' in n &&
    n.protocol &&
    n.auth === void 0
  );
}
function Mk(n) {
  if (typeof n == 'string') n = new URL(n);
  else if (!Va(n)) {
    const i = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + n + '`'
    );
    throw ((i.code = 'ERR_INVALID_ARG_TYPE'), i);
  }
  if (n.protocol !== 'file:') {
    const i = new TypeError('The URL must be of scheme file');
    throw ((i.code = 'ERR_INVALID_URL_SCHEME'), i);
  }
  return Ak(n);
}
function Ak(n) {
  if (n.hostname !== '') {
    const s = new TypeError('File URL host must be "localhost" or empty on darwin');
    throw ((s.code = 'ERR_INVALID_FILE_URL_HOST'), s);
  }
  const i = n.pathname;
  let l = -1;
  for (; ++l < i.length; )
    if (i.codePointAt(l) === 37 && i.codePointAt(l + 1) === 50) {
      const s = i.codePointAt(l + 2);
      if (s === 70 || s === 102) {
        const u = new TypeError('File URL path must not include encoded / characters');
        throw ((u.code = 'ERR_INVALID_FILE_URL_PATH'), u);
      }
    }
  return decodeURIComponent(i);
}
const Sa = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
class Wp {
  constructor(i) {
    let l;
    (i
      ? Va(i)
        ? (l = { path: i })
        : typeof i == 'string' || Dk(i)
          ? (l = { value: i })
          : (l = i)
      : (l = {}),
      (this.cwd = 'cwd' in l ? '' : zk.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored);
    let s = -1;
    for (; ++s < Sa.length; ) {
      const c = Sa[s];
      c in l && l[c] !== void 0 && l[c] !== null && (this[c] = c === 'history' ? [...l[c]] : l[c]);
    }
    let u;
    for (u in l) Sa.includes(u) || (this[u] = l[u]);
  }
  get basename() {
    return typeof this.path == 'string' ? fn.basename(this.path) : void 0;
  }
  set basename(i) {
    (Ca(i, 'basename'), _a(i, 'basename'), (this.path = fn.join(this.dirname || '', i)));
  }
  get dirname() {
    return typeof this.path == 'string' ? fn.dirname(this.path) : void 0;
  }
  set dirname(i) {
    (Ad(this.basename, 'dirname'), (this.path = fn.join(i || '', this.basename)));
  }
  get extname() {
    return typeof this.path == 'string' ? fn.extname(this.path) : void 0;
  }
  set extname(i) {
    if ((_a(i, 'extname'), Ad(this.dirname, 'extname'), i)) {
      if (i.codePointAt(0) !== 46) throw new Error('`extname` must start with `.`');
      if (i.includes('.', 1)) throw new Error('`extname` cannot contain multiple dots');
    }
    this.path = fn.join(this.dirname, this.stem + (i || ''));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(i) {
    (Va(i) && (i = Mk(i)), Ca(i, 'path'), this.path !== i && this.history.push(i));
  }
  get stem() {
    return typeof this.path == 'string' ? fn.basename(this.path, this.extname) : void 0;
  }
  set stem(i) {
    (Ca(i, 'stem'),
      _a(i, 'stem'),
      (this.path = fn.join(this.dirname || '', i + (this.extname || ''))));
  }
  fail(i, l, s) {
    const u = this.message(i, l, s);
    throw ((u.fatal = !0), u);
  }
  info(i, l, s) {
    const u = this.message(i, l, s);
    return ((u.fatal = void 0), u);
  }
  message(i, l, s) {
    const u = new wt(i, l, s);
    return (
      this.path && ((u.name = this.path + ':' + u.name), (u.file = this.path)),
      (u.fatal = !1),
      this.messages.push(u),
      u
    );
  }
  toString(i) {
    return this.value === void 0
      ? ''
      : typeof this.value == 'string'
        ? this.value
        : new TextDecoder(i || void 0).decode(this.value);
  }
}
function _a(n, i) {
  if (n && n.includes(fn.sep))
    throw new Error('`' + i + '` cannot be a path: did not expect `' + fn.sep + '`');
}
function Ca(n, i) {
  if (!n) throw new Error('`' + i + '` cannot be empty');
}
function Ad(n, i) {
  if (!n) throw new Error('Setting `' + i + '` requires `path` to be set too');
}
function Dk(n) {
  return !!(n && typeof n == 'object' && 'byteLength' in n && 'byteOffset' in n);
}
const Fk = function (n) {
    const s = this.constructor.prototype,
      u = s[n],
      c = function () {
        return u.apply(c, arguments);
      };
    return (Object.setPrototypeOf(c, s), c);
  },
  Bk = {}.hasOwnProperty;
class su extends Fk {
  constructor() {
    (super('copy'),
      (this.Compiler = void 0),
      (this.Parser = void 0),
      (this.attachers = []),
      (this.compiler = void 0),
      (this.freezeIndex = -1),
      (this.frozen = void 0),
      (this.namespace = {}),
      (this.parser = void 0),
      (this.transformers = Nk()));
  }
  copy() {
    const i = new su();
    let l = -1;
    for (; ++l < this.attachers.length; ) {
      const s = this.attachers[l];
      i.use(...s);
    }
    return (i.data(xa(!0, {}, this.namespace)), i);
  }
  data(i, l) {
    return typeof i == 'string'
      ? arguments.length === 2
        ? (Ia('data', this.frozen), (this.namespace[i] = l), this)
        : (Bk.call(this.namespace, i) && this.namespace[i]) || void 0
      : i
        ? (Ia('data', this.frozen), (this.namespace = i), this)
        : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const i = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [l, ...s] = this.attachers[this.freezeIndex];
      if (s[0] === !1) continue;
      s[0] === !0 && (s[0] = void 0);
      const u = l.call(i, ...s);
      typeof u == 'function' && this.transformers.use(u);
    }
    return ((this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this);
  }
  parse(i) {
    this.freeze();
    const l = ao(i),
      s = this.parser || this.Parser;
    return (Ea('parse', s), s(String(l), l));
  }
  process(i, l) {
    const s = this;
    return (
      this.freeze(),
      Ea('process', this.parser || this.Parser),
      Na('process', this.compiler || this.Compiler),
      l ? u(void 0, l) : new Promise(u)
    );
    function u(c, f) {
      const p = ao(i),
        h = s.parse(p);
      s.run(h, p, function (g, v, x) {
        if (g || !v || !x) return m(g);
        const k = v,
          O = s.stringify(k, x);
        (Hk(O) ? (x.value = O) : (x.result = O), m(g, x));
      });
      function m(g, v) {
        g || !v ? f(g) : c ? c(v) : l(void 0, v);
      }
    }
  }
  processSync(i) {
    let l = !1,
      s;
    return (
      this.freeze(),
      Ea('processSync', this.parser || this.Parser),
      Na('processSync', this.compiler || this.Compiler),
      this.process(i, u),
      Fd('processSync', 'process', l),
      s
    );
    function u(c, f) {
      ((l = !0), Rd(c), (s = f));
    }
  }
  run(i, l, s) {
    (Dd(i), this.freeze());
    const u = this.transformers;
    return (
      !s && typeof l == 'function' && ((s = l), (l = void 0)),
      s ? c(void 0, s) : new Promise(c)
    );
    function c(f, p) {
      const h = ao(l);
      u.run(i, h, m);
      function m(g, v, x) {
        const k = v || i;
        g ? p(g) : f ? f(k) : s(void 0, k, x);
      }
    }
  }
  runSync(i, l) {
    let s = !1,
      u;
    return (this.run(i, l, c), Fd('runSync', 'run', s), u);
    function c(f, p) {
      (Rd(f), (u = p), (s = !0));
    }
  }
  stringify(i, l) {
    this.freeze();
    const s = ao(l),
      u = this.compiler || this.Compiler;
    return (Na('stringify', u), Dd(i), u(i, s));
  }
  use(i, ...l) {
    const s = this.attachers,
      u = this.namespace;
    if ((Ia('use', this.frozen), i != null))
      if (typeof i == 'function') h(i, l);
      else if (typeof i == 'object') Array.isArray(i) ? p(i) : f(i);
      else throw new TypeError('Expected usable value, not `' + i + '`');
    return this;
    function c(m) {
      if (typeof m == 'function') h(m, []);
      else if (typeof m == 'object')
        if (Array.isArray(m)) {
          const [g, ...v] = m;
          h(g, v);
        } else f(m);
      else throw new TypeError('Expected usable value, not `' + m + '`');
    }
    function f(m) {
      if (!('plugins' in m) && !('settings' in m))
        throw new Error(
          'Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither'
        );
      (p(m.plugins), m.settings && (u.settings = xa(!0, u.settings, m.settings)));
    }
    function p(m) {
      let g = -1;
      if (m != null)
        if (Array.isArray(m))
          for (; ++g < m.length; ) {
            const v = m[g];
            c(v);
          }
        else throw new TypeError('Expected a list of plugins, not `' + m + '`');
    }
    function h(m, g) {
      let v = -1,
        x = -1;
      for (; ++v < s.length; )
        if (s[v][0] === m) {
          x = v;
          break;
        }
      if (x === -1) s.push([m, ...g]);
      else if (g.length > 0) {
        let [k, ...O] = g;
        const j = s[x][1];
        (Ua(j) && Ua(k) && (k = xa(!0, j, k)), (s[x] = [m, k, ...O]));
      }
    }
  }
}
const Uk = new su().freeze();
function Ea(n, i) {
  if (typeof i != 'function') throw new TypeError('Cannot `' + n + '` without `parser`');
}
function Na(n, i) {
  if (typeof i != 'function') throw new TypeError('Cannot `' + n + '` without `compiler`');
}
function Ia(n, i) {
  if (i)
    throw new Error(
      'Cannot call `' +
        n +
        '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.'
    );
}
function Dd(n) {
  if (!Ua(n) || typeof n.type != 'string') throw new TypeError('Expected node, got `' + n + '`');
}
function Fd(n, i, l) {
  if (!l) throw new Error('`' + n + '` finished async. Use `' + i + '` instead');
}
function ao(n) {
  return Vk(n) ? n : new Wp(n);
}
function Vk(n) {
  return !!(n && typeof n == 'object' && 'message' in n && 'messages' in n);
}
function Hk(n) {
  return typeof n == 'string' || $k(n);
}
function $k(n) {
  return !!(n && typeof n == 'object' && 'byteLength' in n && 'byteOffset' in n);
}
const Wk = 'https://github.com/remarkjs/react-markdown/blob/main/changelog.md',
  Bd = [],
  Ud = { allowDangerousHtml: !0 },
  Qk = /^(https?|ircs?|mailto|xmpp)$/i,
  qk = [
    { from: 'astPlugins', id: 'remove-buggy-html-in-markdown-parser' },
    { from: 'allowDangerousHtml', id: 'remove-buggy-html-in-markdown-parser' },
    {
      from: 'allowNode',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'allowElement',
    },
    {
      from: 'allowedTypes',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'allowedElements',
    },
    { from: 'className', id: 'remove-classname' },
    {
      from: 'disallowedTypes',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'disallowedElements',
    },
    { from: 'escapeHtml', id: 'remove-buggy-html-in-markdown-parser' },
    { from: 'includeElementIndex', id: '#remove-includeelementindex' },
    { from: 'includeNodeIndex', id: 'change-includenodeindex-to-includeelementindex' },
    { from: 'linkTarget', id: 'remove-linktarget' },
    { from: 'plugins', id: 'change-plugins-to-remarkplugins', to: 'remarkPlugins' },
    { from: 'rawSourcePos', id: '#remove-rawsourcepos' },
    { from: 'renderers', id: 'change-renderers-to-components', to: 'components' },
    { from: 'source', id: 'change-source-to-children', to: 'children' },
    { from: 'sourcePos', id: '#remove-sourcepos' },
    { from: 'transformImageUri', id: '#add-urltransform', to: 'urlTransform' },
    { from: 'transformLinkUri', id: '#add-urltransform', to: 'urlTransform' },
  ];
function Yk(n) {
  const i = Gk(n),
    l = Kk(n);
  return Xk(i.runSync(i.parse(l), l), n);
}
function Gk(n) {
  const i = n.rehypePlugins || Bd,
    l = n.remarkPlugins || Bd,
    s = n.remarkRehypeOptions ? { ...n.remarkRehypeOptions, ...Ud } : Ud;
  return Uk().use(T0).use(l).use(_k, s).use(i);
}
function Kk(n) {
  const i = n.children || '',
    l = new Wp();
  return (typeof i == 'string' && (l.value = i), l);
}
function Xk(n, i) {
  const l = i.allowedElements,
    s = i.allowElement,
    u = i.components,
    c = i.disallowedElements,
    f = i.skipHtml,
    p = i.unwrapDisallowed,
    h = i.urlTransform || Zk;
  for (const g of qk)
    Object.hasOwn(i, g.from) &&
      ('' + g.from + (g.to ? 'use `' + g.to + '` instead' : 'remove it') + Wk + g.id, void 0);
  return (
    $p(n, m),
    s1(n, {
      Fragment: w.Fragment,
      components: u,
      ignoreInvalidStyle: !0,
      jsx: w.jsx,
      jsxs: w.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function m(g, v, x) {
    if (g.type === 'raw' && x && typeof v == 'number')
      return (f ? x.children.splice(v, 1) : (x.children[v] = { type: 'text', value: g.value }), v);
    if (g.type === 'element') {
      let k;
      for (k in ya)
        if (Object.hasOwn(ya, k) && Object.hasOwn(g.properties, k)) {
          const O = g.properties[k],
            j = ya[k];
          (j === null || j.includes(g.tagName)) && (g.properties[k] = h(String(O || ''), k, g));
        }
    }
    if (g.type === 'element') {
      let k = l ? !l.includes(g.tagName) : c ? c.includes(g.tagName) : !1;
      if ((!k && s && typeof v == 'number' && (k = !s(g, v, x)), k && x && typeof v == 'number'))
        return (
          p && g.children ? x.children.splice(v, 1, ...g.children) : x.children.splice(v, 1),
          v
        );
    }
  }
}
function Zk(n) {
  const i = n.indexOf(':'),
    l = n.indexOf('?'),
    s = n.indexOf('#'),
    u = n.indexOf('/');
  return i === -1 ||
    (u !== -1 && i > u) ||
    (l !== -1 && i > l) ||
    (s !== -1 && i > s) ||
    Qk.test(n.slice(0, i))
    ? n
    : '';
}
const Jk = '_wrapper_dkai6_1',
  ew = '_trigger_dkai6_7',
  tw = '_popover_dkai6_26',
  nw = '_popoverVisible_dkai6_58',
  uo = { wrapper: Jk, trigger: ew, popover: tw, popoverVisible: nw };
function au({ content: n, size: i = 14 }) {
  const [l, s] = G.useState(!1),
    [u, c] = G.useState({ top: 0, left: 0 }),
    f = G.useRef(null),
    p = G.useRef(null),
    h = G.useRef(null),
    m = G.useCallback(() => {
      var M;
      if (!f.current) return;
      const x = f.current.getBoundingClientRect(),
        k = ((M = p.current) == null ? void 0 : M.offsetWidth) || 400,
        O = window.innerWidth,
        j = 16;
      let L = x.left + x.width / 2 - k / 2;
      const R = x.bottom + 8;
      (L < j ? (L = j) : L + k > O - j && (L = O - k - j), c({ top: R, left: L }));
    }, []);
  (G.useEffect(() => {
    if (!l) return;
    const x = (k) => {
      h.current && !h.current.contains(k.target) && s(!1);
    };
    return (
      document.addEventListener('mousedown', x),
      document.addEventListener('touchstart', x),
      () => {
        (document.removeEventListener('mousedown', x),
          document.removeEventListener('touchstart', x));
      }
    );
  }, [l]),
    G.useEffect(() => {
      l && m();
    }, [l, m]));
  const g = G.useCallback(() => {
      m();
    }, [m]),
    v = G.useCallback(
      (x) => {
        (x.preventDefault(), x.stopPropagation(), m(), s((k) => !k));
      },
      [m]
    );
  return n
    ? w.jsxs('span', {
        ref: h,
        className: uo.wrapper,
        children: [
          w.jsx('button', {
            ref: f,
            type: 'button',
            className: uo.trigger,
            onMouseEnter: g,
            onTouchStart: v,
            'aria-label': 'More information',
            children: w.jsx(kg, { size: i }),
          }),
          w.jsx('span', {
            ref: p,
            className: `${uo.popover} ${l ? uo.popoverVisible : ''}`,
            style: { top: u.top, left: u.left },
            children: w.jsx(Yk, {
              components: {
                a: ({ href: x, children: k }) =>
                  w.jsx('a', {
                    href: x,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    children: k,
                  }),
              },
              children: n,
            }),
          }),
        ],
      })
    : null;
}
const rw = '_optionButton_z7tsl_3',
  iw = '_selected_z7tsl_20',
  lw = '_content_z7tsl_36',
  ow = '_textContent_z7tsl_42',
  sw = '_label_z7tsl_46',
  aw = '_description_z7tsl_58',
  uw = '_checkmark_z7tsl_64',
  Cn = {
    optionButton: rw,
    default: '_default_z7tsl_15',
    selected: iw,
    content: lw,
    textContent: ow,
    label: sw,
    description: aw,
    checkmark: uw,
  };
function cw({
  label: n,
  description: i,
  info: l,
  optionKey: s,
  credences: u,
  setCredences: c,
  color: f,
  setInputMode: p,
  setLockedKey: h,
}) {
  const m = u[s] === 100,
    g = () => {
      const v = Object.fromEntries(Object.keys(u).map((x) => [x, x === s ? 100 : 0]));
      (c(v), p('options'), h && h(null));
    };
  return w.jsx('button', {
    onClick: g,
    className: `${Cn.optionButton} ${m ? Cn.selected : Cn.default}`,
    style: { '--option-color': f },
    children: w.jsxs('div', {
      className: Cn.content,
      children: [
        w.jsxs('div', {
          className: Cn.textContent,
          children: [
            w.jsxs('div', {
              className: `${Cn.label} ${m ? Cn.selected : ''}`,
              children: [n, w.jsx(au, { content: l })],
            }),
            w.jsx('div', { className: Cn.description, children: i }),
          ],
        }),
        m && w.jsx('div', { className: Cn.checkmark, children: '✓' }),
      ],
    }),
  });
}
function Qp({ credences: n, isLocked: i, lockedKey: l, onChange: s }) {
  const [u, c] = G.useState(null),
    [f, p] = G.useState(!1),
    h = G.useCallback(() => {
      i || (p(!0), c({ ...n }));
    }, [i, n]),
    m = G.useCallback(
      (v) => {
        if (i || !f) return;
        p(!1);
        const x = parseFloat(v.target.value);
        (s(x, u, !0, l), c(null));
      },
      [i, f, u, l, s]
    ),
    g = G.useCallback(
      (v) => {
        if (i) return;
        const x = parseFloat(v.target.value);
        s(x, u, !1, l);
      },
      [i, u, l, s]
    );
  return {
    isDragging: f,
    dragHandlers: {
      onChange: g,
      onMouseDown: h,
      onMouseUp: m,
      onMouseLeave: m,
      onTouchStart: h,
      onTouchEnd: m,
    },
  };
}
function qp({ sliderKey: n, lockedKey: i, credences: l }) {
  return G.useMemo(() => {
    var h;
    const s = i === n,
      u = i && i !== n,
      c = u ? l[i] : 0,
      f = u ? 100 - c : 100,
      p = u ? `calc(${f}% + ${(50 - f) * 0.16}px)` : null;
    return {
      isLocked: s,
      hasLockedSibling: u,
      lockedValue: c,
      maxAllowed: f,
      thumbOffset: p,
      featureEnabled: ((h = Nn.ui) == null ? void 0 : h.sliderLock) === !0,
    };
  }, [n, i, l]);
}
const fw = '_credenceSlider_yrqg7_4',
  dw = '_header_yrqg7_8',
  pw = '_label_yrqg7_15',
  hw = '_description_yrqg7_22',
  mw = '_value_yrqg7_28',
  gw = '_sliderRow_yrqg7_35',
  yw = '_sliderContainer_yrqg7_41',
  vw = '_lockLimit_yrqg7_46',
  kw = '_lockButton_yrqg7_55',
  ww = '_locked_yrqg7_73',
  xw = '_compactSlider_yrqg7_91',
  Sw = '_compactSelection_yrqg7_168',
  _w = '_selected_yrqg7_186',
  Cw = '_selectionLabel_yrqg7_191',
  Ew = '_selectionIndicator_yrqg7_202',
  Ye = {
    credenceSlider: fw,
    header: dw,
    label: pw,
    description: hw,
    value: mw,
    sliderRow: gw,
    sliderContainer: yw,
    lockLimit: vw,
    lockButton: kw,
    locked: ww,
    compactSlider: xw,
    compactSelection: Sw,
    selected: _w,
    selectionLabel: Cw,
    selectionIndicator: Ew,
  };
function Nw({
  label: n,
  description: i,
  info: l,
  value: s,
  onChange: u,
  color: c,
  credences: f,
  sliderKey: p,
  lockedKey: h,
  setLockedKey: m,
}) {
  const {
      isLocked: g,
      hasLockedSibling: v,
      thumbOffset: x,
      featureEnabled: k,
    } = qp({ sliderKey: p, lockedKey: h, credences: f }),
    { isDragging: O, dragHandlers: j } = Qp({
      credences: f,
      isLocked: g,
      lockedKey: h,
      onChange: u,
    }),
    L = () => {
      k && m(h === p ? null : p);
    },
    R = v
      ? `linear-gradient(to right, ${c} 0%, ${c} ${s}%, rgba(255,255,255,0.15) ${s}%, rgba(255,255,255,0.15) ${x}, rgba(255,255,255,0.08) ${x}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${c} 0%, ${c} ${s}%, rgba(255,255,255,0.15) ${s}%, rgba(255,255,255,0.15) 100%)`;
  return w.jsxs('div', {
    className: Ye.credenceSlider,
    children: [
      w.jsxs('div', {
        className: Ye.header,
        children: [
          w.jsxs('div', {
            children: [
              w.jsxs('div', { className: Ye.label, children: [n, w.jsx(au, { content: l })] }),
              w.jsx('div', { className: Ye.description, children: i }),
            ],
          }),
          w.jsxs('div', {
            className: Ye.value,
            style: { color: c },
            children: [Math.round(s), '%'],
          }),
        ],
      }),
      w.jsxs('div', {
        className: Ye.sliderRow,
        children: [
          w.jsxs('div', {
            className: Ye.sliderContainer,
            children: [
              w.jsx('input', {
                type: 'range',
                min: '0',
                max: '100',
                step: 'any',
                value: s,
                ...j,
                'data-dragging': O,
                disabled: g,
                style: { background: R, cursor: g ? 'not-allowed' : 'pointer' },
              }),
              v && w.jsx('div', { className: Ye.lockLimit, style: { left: x } }),
            ],
          }),
          k &&
            w.jsx('button', {
              className: `${Ye.lockButton} ${g ? Ye.locked : ''}`,
              onClick: L,
              title: g ? Pe.sliders.unlockTooltip : Pe.sliders.lockTooltip,
              type: 'button',
              children: w.jsx(Jd, { size: 16 }),
            }),
        ],
      }),
    ],
  });
}
const Iw = '_container_4ytil_3',
  Tw = '_categoryLabel_4ytil_8',
  bw = '_heading_4ytil_16',
  jw = '_context_4ytil_23',
  Lw = '_instructions_4ytil_31',
  Pw = '_buttonRow_4ytil_38',
  $r = {
    container: Iw,
    categoryLabel: Tw,
    heading: bw,
    context: jw,
    instructions: Lw,
    buttonRow: Pw,
  };
function Ow(n, i, l) {
  return n === _t.SELECTION ? 'options' : n === _t.CREDENCE ? 'sliders' : i;
}
function zw() {
  const {
    currentQuestion: n,
    stateMap: i,
    questionNumber: l,
    progressPercentage: s,
    goBack: u,
    goForward: c,
  } = Gr();
  if (!n) return null;
  const f = i[n.id];
  if (!f) return null;
  const {
      credences: p,
      setCredences: h,
      inputMode: m,
      setInputMode: g,
      lockedKey: v,
      setLockedKey: x,
    } = f,
    k = n.type || _t.DEFAULT,
    O = k === _t.DEFAULT,
    j = Ow(k, m),
    R =
      k === _t.SELECTION
        ? n.instructionsSelection || 'Choose the option that best represents your position.'
        : j === 'options'
          ? n.instructionsOptions
          : n.instructionsSliders;
  return w.jsxs('div', {
    className: 'screen',
    children: [
      w.jsx(Qi, { subtitle: l }),
      w.jsx(yo, { percentage: s }),
      w.jsx('main', {
        className: 'screen-main',
        children: w.jsxs('div', {
          className: $r.container,
          children: [
            w.jsx('div', {
              className: $r.categoryLabel,
              style: { color: ag },
              children: n.categoryLabel,
            }),
            w.jsxs('h2', {
              className: $r.heading,
              children: [n.heading, w.jsx(au, { content: n.info })],
            }),
            n.context && w.jsx('p', { className: $r.context, children: n.context }),
            w.jsx('p', { className: $r.instructions, children: R }),
            O && w.jsx(Py, { mode: m, setMode: g }),
            w.jsx('div', {
              className: 'card',
              children:
                j === 'options'
                  ? n.options.map((M) =>
                      w.jsx(
                        cw,
                        {
                          label: M.label,
                          description: M.description,
                          info: M.info,
                          optionKey: M.key,
                          credences: p,
                          setCredences: h,
                          color: M.color,
                          setInputMode: g,
                          setLockedKey: x,
                        },
                        M.key
                      )
                    )
                  : n.options.map((M) =>
                      w.jsx(
                        Nw,
                        {
                          label: M.label,
                          description: M.description,
                          info: M.info,
                          value: p[M.key],
                          onChange: (F, V, ae, z) => {
                            const J = ip(M.key, F, p, V, z);
                            h(ae ? lp(J) : J);
                          },
                          color: M.color,
                          credences: p,
                          sliderKey: M.key,
                          lockedKey: v,
                          setLockedKey: x,
                        },
                        M.key
                      )
                    ),
            }),
            w.jsxs('div', {
              className: $r.buttonRow,
              children: [
                w.jsx('button', {
                  onClick: u,
                  className: 'btn btn-secondary',
                  children: Pe.navigation.back,
                }),
                w.jsx('button', {
                  onClick: c,
                  className: 'btn btn-primary',
                  children: Pe.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const Rw = '_causeBar_as0sb_3',
  Mw = '_header_as0sb_7',
  Aw = '_name_as0sb_15',
  Dw = '_percentage_as0sb_19',
  Fw = '_changeIndicator_as0sb_23',
  Bw = '_up_as0sb_27',
  Uw = '_down_as0sb_31',
  Vw = '_barTrack_as0sb_35',
  Hw = '_barOriginal_as0sb_43',
  $w = '_barFill_as0sb_49',
  Ww = '_barLabel_as0sb_58',
  Qw = '_compact_as0sb_65',
  Yt = {
    causeBar: Rw,
    header: Mw,
    name: Aw,
    percentage: Dw,
    changeIndicator: Fw,
    up: Bw,
    down: Uw,
    barTrack: Vw,
    barOriginal: Hw,
    barFill: $w,
    barLabel: Ww,
    compact: Qw,
  },
  Yp = ({
    name: n,
    percentage: i,
    color: l,
    originalPercentage: s = null,
    hasChanged: u = !1,
    simpleMode: c = !1,
  }) => {
    const f = !c && u && s !== null && i !== s,
      p = f && i > s;
    return w.jsxs('div', {
      className: `${Yt.causeBar} ${c ? Yt.compact : ''}`,
      children: [
        w.jsxs('div', {
          className: Yt.header,
          children: [
            w.jsx('span', { className: Yt.name, children: n }),
            w.jsxs('span', {
              className: Yt.percentage,
              style: { color: l },
              children: [
                i.toFixed(0),
                '%',
                f &&
                  w.jsx('span', {
                    className: `${Yt.changeIndicator} ${p ? Yt.up : Yt.down}`,
                    children: p ? '↑' : '↓',
                  }),
              ],
            }),
          ],
        }),
        w.jsxs('div', {
          className: Yt.barTrack,
          children: [
            f &&
              w.jsx('div', { className: Yt.barOriginal, style: { width: `${s}%`, background: l } }),
            w.jsx('div', {
              className: Yt.barFill,
              style: { width: `${i}%`, background: l },
              children:
                i > 15 && w.jsxs('span', { className: Yt.barLabel, children: [i.toFixed(0), '%'] }),
            }),
          ],
        }),
      ],
    });
  },
  qw = { target: Eg, parliament: dg, handshake: yg, scale: _g };
function Yw({ name: n, size: i = 18, className: l = '' }) {
  const s = qw[n] || Zd;
  return w.jsx(s, { size: i, className: l });
}
const Gw = '_resultsContainer_jokrc_3',
  Kw = '_inner_jokrc_11',
  Xw = '_resultsHeader_jokrc_16',
  Zw = '_title_jokrc_21',
  Jw = '_modifiedIndicator_jokrc_27',
  ex = '_resultsGrid_jokrc_38',
  tx = '_comparisonContainer_jokrc_46',
  nx = '_originalResults_jokrc_53',
  rx = '_newResults_jokrc_54',
  ix = '_comparisonDivider_jokrc_89',
  lx = '_dividerLine_jokrc_98',
  ox = '_dividerArrow_jokrc_105',
  sx = '_compactCard_jokrc_118',
  ax = '_cardHeader_jokrc_122',
  ux = '_cardIcon_jokrc_126',
  cx = '_cardTitle_jokrc_132',
  fx = '_resultCard_jokrc_136',
  dx = '_cardSubtitle_jokrc_168',
  px = '_cardFooter_jokrc_174',
  hx = '_adjustPanel_jokrc_182',
  mx = '_adjustHeader_jokrc_190',
  gx = '_adjustTitle_jokrc_197',
  yx = '_resetAllButton_jokrc_203',
  vx = '_panelList_jokrc_220',
  kx = '_backButtonContainer_jokrc_226',
  wx = '_calculationSelect_jokrc_272',
  xx = '_calculationSelectContainer_jokrc_305',
  Sx = '_singleResultCard_jokrc_316',
  _x = '_sideLabel_jokrc_327',
  Te = {
    resultsContainer: Gw,
    inner: Kw,
    resultsHeader: Xw,
    title: Zw,
    modifiedIndicator: Jw,
    resultsGrid: ex,
    comparisonContainer: tx,
    originalResults: nx,
    newResults: rx,
    comparisonDivider: ix,
    dividerLine: lx,
    dividerArrow: ox,
    compactCard: sx,
    cardHeader: ax,
    cardIcon: ux,
    cardTitle: cx,
    resultCard: fx,
    cardSubtitle: dx,
    cardFooter: px,
    adjustPanel: hx,
    adjustHeader: mx,
    adjustTitle: gx,
    resetAllButton: yx,
    panelList: vx,
    backButtonContainer: kx,
    calculationSelect: wx,
    calculationSelectContainer: xx,
    singleResultCard: Sx,
    sideLabel: _x,
  };
function Gp({
  methodKey: n,
  results: i,
  evs: l = null,
  originalResults: s = null,
  causeEntries: u,
  hasChanged: c = !1,
  simpleMode: f = !1,
}) {
  const p = Pe.results.methods[n],
    h = l
      ? `${p.footerLabel} ${u.map(([m, g]) => `${g.name.slice(0, 2)} ${l[m].toFixed(0)}`).join(' · ')}`
      : p.footerText;
  return w.jsxs('div', {
    className: `${Te.resultCard} ${f ? Te.compactCard : ''}`,
    children: [
      w.jsxs('div', {
        className: Te.cardHeader,
        children: [
          w.jsx('div', { className: Te.cardIcon, children: w.jsx(Yw, { name: p.icon, size: 18 }) }),
          w.jsxs('div', {
            children: [
              w.jsx('h3', { className: Te.cardTitle, children: p.title }),
              !f && w.jsx('p', { className: Te.cardSubtitle, children: p.subtitle }),
            ],
          }),
        ],
      }),
      u.map(([m, g]) =>
        w.jsx(
          Yp,
          {
            name: g.name,
            percentage: i[m],
            originalPercentage: s == null ? void 0 : s[m],
            color: g.color,
            hasChanged: !f && c,
            simpleMode: f,
          },
          m
        )
      ),
      !f && w.jsx('div', { className: Te.cardFooter, children: h }),
    ],
  });
}
const Cx = '_container_1m8cr_3',
  Ex = '_title_1m8cr_8',
  Nx = '_body_1m8cr_16',
  Ix = '_buttonRow_1m8cr_25',
  co = { container: Cx, title: Ex, body: Nx, buttonRow: Ix };
function Tx() {
  var x;
  const {
    currentQuestion: n,
    questionNumber: i,
    progressPercentage: l,
    calculationResults: s,
    causesConfig: u,
    goBack: c,
    goForward: f,
  } = Gr();
  if (!n) return null;
  const p = Object.entries(u),
    h = [
      { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
      { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
      { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
      { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
    ],
    m = ((x = Nn.calculations) == null ? void 0 : x.order) || [],
    v = [...h]
      .sort((k, O) => {
        const j = m.indexOf(k.key),
          L = m.indexOf(O.key);
        return j === -1 && L === -1 ? 0 : j === -1 ? 1 : L === -1 ? -1 : j - L;
      })
      .filter((k) => {
        var O;
        return ((O = Nn.calculations) == null ? void 0 : O[k.flag]) === !0;
      });
  return w.jsxs('div', {
    className: 'screen',
    children: [
      w.jsx(Qi, { subtitle: i }),
      w.jsx(yo, { percentage: l }),
      w.jsx('main', {
        className: 'screen-main',
        children: w.jsxs('div', {
          className: co.container,
          children: [
            w.jsx('h2', { className: co.title, children: n.title }),
            w.jsx('p', { className: co.body, children: n.body }),
            w.jsx('div', {
              className: Te.resultsGrid,
              children: v.map((k) =>
                w.jsx(
                  Gp,
                  {
                    methodKey: k.key,
                    results: s[k.key],
                    evs: k.hasEvs ? s[k.key].evs : null,
                    causeEntries: p,
                  },
                  k.key
                )
              ),
            }),
            w.jsxs('div', {
              className: co.buttonRow,
              children: [
                w.jsx('button', {
                  onClick: c,
                  className: 'btn btn-secondary',
                  children: Pe.navigation.back,
                }),
                w.jsx('button', {
                  onClick: f,
                  className: 'btn btn-primary',
                  children: Pe.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function bx({
  label: n,
  value: i,
  onChange: l,
  color: s,
  credences: u,
  sliderKey: c,
  lockedKey: f,
  setLockedKey: p,
}) {
  const {
      isLocked: h,
      hasLockedSibling: m,
      thumbOffset: g,
      featureEnabled: v,
    } = qp({ sliderKey: c, lockedKey: f, credences: u }),
    { isDragging: x, dragHandlers: k } = Qp({
      credences: u,
      isLocked: h,
      lockedKey: f,
      onChange: l,
    }),
    O = () => {
      v && p(f === c ? null : c);
    },
    j = m
      ? `linear-gradient(to right, ${s} 0%, ${s} ${i}%, rgba(255,255,255,0.15) ${i}%, rgba(255,255,255,0.15) ${g}, rgba(255,255,255,0.08) ${g}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${s} 0%, ${s} ${i}%, rgba(255,255,255,0.15) ${i}%, rgba(255,255,255,0.15) 100%)`;
  return w.jsxs('div', {
    className: Ye.compactSlider,
    children: [
      w.jsxs('div', {
        className: Ye.header,
        children: [
          w.jsx('span', { className: Ye.label, children: n }),
          w.jsxs('span', {
            className: Ye.value,
            style: { color: s },
            children: [Math.round(i), '%'],
          }),
        ],
      }),
      w.jsxs('div', {
        className: Ye.sliderRow,
        children: [
          w.jsxs('div', {
            className: Ye.sliderContainer,
            children: [
              w.jsx('input', {
                type: 'range',
                min: '0',
                max: '100',
                step: 'any',
                value: i,
                ...k,
                'data-dragging': x,
                disabled: h,
                style: { background: j, cursor: h ? 'not-allowed' : 'pointer' },
              }),
              m && w.jsx('div', { className: Ye.lockLimit, style: { left: g } }),
            ],
          }),
          v &&
            w.jsx('button', {
              className: `${Ye.lockButton} ${h ? Ye.locked : ''}`,
              onClick: O,
              title: h ? Pe.sliders.unlockTooltip : Pe.sliders.lockTooltip,
              type: 'button',
              children: w.jsx(Jd, { size: 14 }),
            }),
        ],
      }),
    ],
  });
}
function jx({ label: n, color: i, isSelected: l, onSelect: s }) {
  return w.jsxs('button', {
    type: 'button',
    onClick: s,
    className: `${Ye.compactSelection} ${l ? Ye.selected : ''}`,
    style: { '--selection-color': i },
    children: [
      w.jsx('span', { className: Ye.selectionLabel, children: n }),
      w.jsx('span', {
        className: Ye.selectionIndicator,
        style: { borderColor: l ? i : void 0, backgroundColor: l ? i : void 0 },
        children: l && w.jsx(Xd, { size: 12, strokeWidth: 3 }),
      }),
    ],
  });
}
const Lx = '_editPanel_1er15_3',
  Px = '_expanded_1er15_11',
  Ox = '_toggleButton_1er15_16',
  zx = '_buttonContent_1er15_33',
  Rx = '_icon_1er15_39',
  Mx = '_title_1er15_43',
  Ax = '_modifiedBadge_1er15_48',
  Dx = '_preview_1er15_56',
  Fx = '_chevron_1er15_62',
  Bx = '_content_1er15_66',
  Ux = '_footer_1er15_71',
  Vx = '_footerNote_1er15_78',
  Hx = '_resetButton_1er15_84',
  $x = '_selectionRow_1er15_103',
  mt = {
    editPanel: Lx,
    expanded: Px,
    toggleButton: Ox,
    buttonContent: zx,
    icon: Rx,
    title: Mx,
    modifiedBadge: Ax,
    preview: Dx,
    chevron: Fx,
    content: Bx,
    footer: Ux,
    footerNote: Vx,
    resetButton: Hx,
    selectionRow: $x,
  };
function Wx({
  title: n,
  icon: i,
  credences: l,
  setCredences: s,
  originalCredences: u,
  configs: c,
  isExpanded: f,
  onToggle: p,
  lockedKey: h,
  setLockedKey: m,
  questionType: g = _t.DEFAULT,
}) {
  const v = u && JSON.stringify(l) !== JSON.stringify(u),
    x = g === _t.SELECTION,
    k = (L) => {
      const R = {};
      (c.forEach((M) => {
        R[M.key] = M.key === L ? 100 : 0;
      }),
        s(R));
    },
    O = (L) => {
      (L.stopPropagation(), s({ ...u }));
    },
    j = c.map((L) => `${L.short}:${l[L.key]}%`).join(' ');
  return w.jsxs('div', {
    className: `${mt.editPanel} ${f ? mt.expanded : ''}`,
    children: [
      w.jsxs('button', {
        onClick: p,
        className: mt.toggleButton,
        children: [
          w.jsxs('div', {
            className: mt.buttonContent,
            children: [
              w.jsx('span', { className: mt.icon, children: i }),
              w.jsx('span', { className: mt.title, children: n }),
              v &&
                w.jsx('span', {
                  className: mt.modifiedBadge,
                  children: Pe.editPanel.modifiedBadge,
                }),
              !f && w.jsx('span', { className: mt.preview, children: j }),
            ],
          }),
          w.jsx('span', {
            className: mt.chevron,
            children: f ? w.jsx(mg, { size: 16 }) : w.jsx(hg, { size: 16 }),
          }),
        ],
      }),
      f &&
        w.jsx('div', {
          className: mt.content,
          children: x
            ? w.jsxs(w.Fragment, {
                children: [
                  w.jsx('div', {
                    className: mt.selectionRow,
                    children: c.map((L) =>
                      w.jsx(
                        jx,
                        {
                          label: L.label,
                          color: L.color,
                          isSelected: l[L.key] === 100,
                          onSelect: () => k(L.key),
                        },
                        L.key
                      )
                    ),
                  }),
                  w.jsxs('div', {
                    className: mt.footer,
                    children: [
                      w.jsx('span', {
                        className: mt.footerNote,
                        children: Pe.editPanel.selectionNote || 'Pick one option',
                      }),
                      v &&
                        w.jsxs('button', {
                          onClick: O,
                          className: mt.resetButton,
                          children: [w.jsx(Ta, { size: 10 }), ' ', Pe.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              })
            : w.jsxs(w.Fragment, {
                children: [
                  c.map((L) =>
                    w.jsx(
                      bx,
                      {
                        label: L.label,
                        value: l[L.key],
                        onChange: (R, M, F, V) => {
                          const ae = ip(L.key, R, l, M, V);
                          s(F ? lp(ae) : ae);
                        },
                        color: L.color,
                        credences: l,
                        sliderKey: L.key,
                        lockedKey: h,
                        setLockedKey: m,
                      },
                      L.key
                    )
                  ),
                  w.jsxs('div', {
                    className: mt.footer,
                    children: [
                      w.jsx('span', {
                        className: mt.footerNote,
                        children: Pe.editPanel.sliderNote,
                      }),
                      v &&
                        w.jsxs('button', {
                          onClick: O,
                          className: mt.resetButton,
                          children: [w.jsx(Ta, { size: 10 }), ' ', Pe.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              }),
        }),
    ],
  });
}
var $d;
const Qx = (($d = Nn.ui) == null ? void 0 : $d.moralMarketplace) === !0,
  Wr = Pe.worldviewModal;
function qx({
  worldviewIds: n,
  activeWorldviewId: i,
  hasProgressMap: l,
  worldviewNames: s,
  onSwitch: u,
  onClose: c,
  onMarketplace: f,
  onRename: p,
}) {
  const [h, m] = G.useState(null),
    [g, v] = G.useState('');
  Object.values(l).filter(Boolean).length;
  const x = Qx,
    k = (M, F) => {
      (F.stopPropagation(), m(M), v((s == null ? void 0 : s[M]) || `${Wr.defaultName} ${M}`));
    },
    O = (M, F) => {
      F.stopPropagation();
      const V = g.trim();
      (V && p && p(M, V), m(null), v(''));
    },
    j = (M) => {
      (M.stopPropagation(), m(null), v(''));
    },
    L = (M, F) => {
      F.key === 'Enter' ? O(M, F) : F.key === 'Escape' && j(F);
    },
    R = (M) => (s == null ? void 0 : s[M]) || `${Wr.defaultName} ${M}`;
  return w.jsx('div', {
    className: Ze.overlay,
    onClick: c,
    children: w.jsxs('div', {
      className: Ze.modal,
      onClick: (M) => M.stopPropagation(),
      children: [
        w.jsx('h2', { className: Ze.title, children: Wr.title }),
        w.jsx('p', { className: Ze.message, children: Wr.description }),
        w.jsxs('div', {
          className: Ze.buttons,
          children: [
            n.map((M) => {
              const F = M === i,
                V = l[M],
                ae = h === M,
                z = R(M);
              return w.jsx(
                'div',
                {
                  className: Ze.worldviewRow,
                  children: ae
                    ? w.jsxs('div', {
                        className: Ze.editRow,
                        onClick: (J) => J.stopPropagation(),
                        children: [
                          w.jsx('input', {
                            type: 'text',
                            value: g,
                            onChange: (J) => v(J.target.value),
                            onKeyDown: (J) => L(M, J),
                            className: Ze.editInput,
                            autoFocus: !0,
                            maxLength: 30,
                          }),
                          w.jsx('button', {
                            onClick: (J) => O(M, J),
                            className: Ze.iconButton,
                            title: 'Save',
                            children: w.jsx(Xd, { size: 16 }),
                          }),
                          w.jsx('button', {
                            onClick: j,
                            className: Ze.iconButton,
                            title: 'Cancel',
                            children: w.jsx(Ng, { size: 16 }),
                          }),
                        ],
                      })
                    : w.jsxs(w.Fragment, {
                        children: [
                          w.jsxs('button', {
                            onClick: () => u(M),
                            className: `btn ${F ? 'btn-primary' : 'btn-secondary'} ${Ze.button} ${Ze.worldviewButton}`,
                            disabled: F,
                            children: [z, !V && ` ${Wr.emptyLabel}`, F && ` ${Wr.currentLabel}`],
                          }),
                          V &&
                            p &&
                            w.jsx('button', {
                              onClick: (J) => k(M, J),
                              className: Ze.iconButton,
                              title: 'Rename',
                              children: w.jsx(Sg, { size: 14 }),
                            }),
                        ],
                      }),
                },
                M
              );
            }),
            x,
          ],
        }),
      ],
    }),
  });
}
var Wd;
const Vd = ((Wd = Nn.ui) == null ? void 0 : Wd.multipleWorldviews) === !0;
function Yx() {
  var Ie, _e, Le;
  const {
      questionsConfig: n,
      causesConfig: i,
      stateMap: l,
      expandedPanel: s,
      setExpandedPanel: u,
      calculationResults: c,
      originalCalculationResults: f,
      hasChanged: p,
      resetToOriginal: h,
      resetQuiz: m,
      goBack: g,
      goToStep: v,
      worldviews: x,
      worldviewNames: k,
      activeWorldviewId: O,
      switchWorldview: j,
      worldviewIds: L,
      hasProgressMap: R,
      startQuiz: M,
      selectedCalculations: F,
      setSelectedCalculations: V,
      setWorldviewName: ae,
      marketplaceBudget: z,
    } = Gr(),
    [J, ve] = G.useState(!1),
    [Se, Ce] = G.useState(!1),
    [re, X] = G.useState(null),
    [ke, te] = G.useState(!1),
    q = Object.entries(i),
    me = [
      { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
      { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
      { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
      { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
    ],
    ge = ((Ie = Nn.calculations) == null ? void 0 : Ie.order) || [],
    Z = [...me]
      .sort((ce, Ee) => {
        const K = ge.indexOf(ce.key),
          de = ge.indexOf(Ee.key);
        return K === -1 && de === -1 ? 0 : K === -1 ? 1 : de === -1 ? -1 : K - de;
      })
      .filter((ce) => {
        var Ee;
        return ((Ee = Nn.calculations) == null ? void 0 : Ee[ce.flag]) === !0;
      });
  G.useEffect(() => {
    if (Z.length === 0) return;
    const ce = Z[0].key,
      Ee = F.left && Z.some((de) => de.key === F.left),
      K = F.right && Z.some((de) => de.key === F.right);
    (!Ee || !K) && V({ left: Ee ? F.left : ce, right: K ? F.right : ce });
  }, [Z, F.left, F.right, V]);
  const S = (ce, Ee) => {
      V({ [ce]: Ee });
    },
    I = (ce) => {
      (te(!1), j(ce), R[ce] || M());
    },
    D = () => {
      (te(!1), v('marketplace'));
    },
    C = (ce) =>
      ce.options.map((Ee) => ({
        key: Ee.key,
        label: Ee.panelLabel,
        short: Ee.panelShort,
        color: Ee.color,
      })),
    fe = n.filter((ce) => ce.type !== _t.INTERMISSION),
    le = (ce) =>
      w.jsx('select', {
        className: Te.calculationSelect,
        value: F[ce] || '',
        onChange: (Ee) => S(ce, Ee.target.value),
        children: Z.map((Ee) =>
          w.jsx('option', { value: Ee.key, children: Pe.results.methods[Ee.key].title }, Ee.key)
        ),
      }),
    ue = (ce, Ee, K = !0) => {
      const de = F[Ee],
        tt = Z.find((rn) => rn.key === de);
      if (!tt) return null;
      const nt = ce == null ? void 0 : ce[tt.key];
      return nt
        ? w.jsx(Gp, {
            methodKey: tt.key,
            results: nt,
            evs: tt.hasEvs ? nt.evs : null,
            causeEntries: q,
            simpleMode: K,
          })
        : null;
    };
  return w.jsxs('div', {
    className: Te.resultsContainer,
    children: [
      w.jsx(Qi, {}),
      w.jsx(yo, { percentage: 100 }),
      w.jsxs('div', {
        className: Te.inner,
        children: [
          w.jsx('div', {
            className: Te.resultsHeader,
            children: w.jsxs('h1', {
              className: Te.title,
              children: [
                Pe.results.heading,
                Vd,
                p &&
                  w.jsx('span', {
                    className: Te.modifiedIndicator,
                    children: Pe.results.modifiedIndicator,
                  }),
              ],
            }),
          }),
          w.jsx('div', {
            className: Te.calculationSelectContainer,
            children: p
              ? w.jsxs('div', {
                  className: Te.comparisonContainer,
                  children: [
                    w.jsxs('div', {
                      className: Te.originalResults,
                      children: [
                        w.jsx('div', { className: Te.sideLabel, children: 'Original' }),
                        le('left'),
                        ue(f, 'left'),
                      ],
                    }),
                    w.jsxs('div', {
                      className: Te.comparisonDivider,
                      children: [
                        w.jsx('div', { className: Te.dividerLine }),
                        w.jsx('div', { className: Te.dividerArrow, children: '→' }),
                        w.jsx('div', { className: Te.dividerLine }),
                      ],
                    }),
                    w.jsxs('div', {
                      className: Te.newResults,
                      children: [
                        w.jsx('div', { className: Te.sideLabel, children: 'Modified' }),
                        le('right'),
                        ue(c, 'right'),
                      ],
                    }),
                  ],
                })
              : w.jsxs(w.Fragment, {
                  children: [
                    le('left'),
                    w.jsx('div', { className: Te.singleResultCard, children: ue(f || c, 'left') }),
                  ],
                }),
          }),
          w.jsxs('div', {
            className: Te.adjustPanel,
            children: [
              w.jsxs('div', {
                className: Te.adjustHeader,
                children: [
                  w.jsx('span', {
                    className: Te.adjustTitle,
                    children: Pe.results.adjustCredencesHeading,
                  }),
                  p &&
                    w.jsxs('button', {
                      onClick: h,
                      className: Te.resetAllButton,
                      children: [w.jsx(Ta, { size: 10 }), ' ', Pe.results.resetAllButton],
                    }),
                ],
              }),
              w.jsx('div', {
                className: Te.panelList,
                children: fe.map((ce) => {
                  const Ee = l[ce.id];
                  return Ee
                    ? w.jsx(
                        Wx,
                        {
                          title: ce.editPanelTitle,
                          icon: w.jsx(cp, { name: ce.icon, size: 16 }),
                          credences: Ee.credences,
                          setCredences: Ee.setCredences,
                          originalCredences: Ee.originalCredences,
                          configs: C(ce),
                          isExpanded: s === ce.id,
                          onToggle: () => u(s === ce.id ? null : ce.id),
                          lockedKey: Ee.lockedKey,
                          setLockedKey: Ee.setLockedKey,
                          questionType: ce.type,
                        },
                        ce.id
                      )
                    : null;
                }),
              }),
            ],
          }),
          w.jsxs('div', {
            className: Te.backButtonContainer,
            children: [
              w.jsx('button', {
                onClick: g,
                className: 'btn btn-secondary',
                children: Pe.navigation.backToQuiz,
              }),
              Vd,
              (_e = Nn.ui) == null ? void 0 : _e.shareResults,
              (Le = Nn.ui) == null ? void 0 : Le.resetButton,
            ],
          }),
        ],
      }),
      ke &&
        w.jsx(qx, {
          worldviewIds: L,
          activeWorldviewId: O,
          hasProgressMap: R,
          worldviewNames: k,
          onSwitch: I,
          onClose: () => te(!1),
          onMarketplace: D,
          onRename: ae,
        }),
    ],
  });
}
const Gx = '_description_bffzu_3',
  Kx = '_emptyState_bffzu_9',
  Xx = '_settingsRow_bffzu_17',
  Zx = '_settingsLabel_bffzu_25',
  Jx = '_budgetInputWrapper_bffzu_35',
  eS = '_currencyPrefix_bffzu_48',
  tS = '_budgetInput_bffzu_35',
  nS = '_settingsSelect_bffzu_68',
  rS = '_mainCard_bffzu_98',
  iS = '_allocationItem_bffzu_103',
  lS = '_allocationHeader_bffzu_107',
  oS = '_causeName_bffzu_114',
  sS = '_dollarAmount_bffzu_120',
  aS = '_barTrack_bffzu_128',
  uS = '_barFill_bffzu_135',
  cS = '_barLabel_bffzu_144',
  fS = '_breakdownSection_bffzu_150',
  dS = '_breakdownHeading_bffzu_154',
  pS = '_breakdownGrid_bffzu_161',
  hS = '_worldviewCard_bffzu_167',
  mS = '_worldviewHeader_bffzu_174',
  gS = '_worldviewName_bffzu_183',
  yS = '_worldviewShare_bffzu_188',
  We = {
    description: Gx,
    emptyState: Kx,
    settingsRow: Xx,
    settingsLabel: Zx,
    budgetInputWrapper: Jx,
    currencyPrefix: eS,
    budgetInput: tS,
    settingsSelect: nS,
    mainCard: rS,
    allocationItem: iS,
    allocationHeader: lS,
    causeName: oS,
    dollarAmount: sS,
    barTrack: aS,
    barFill: uS,
    barLabel: cS,
    breakdownSection: fS,
    breakdownHeading: dS,
    breakdownGrid: pS,
    worldviewCard: hS,
    worldviewHeader: mS,
    worldviewName: gS,
    worldviewShare: yS,
  },
  vS = $i.diminishingReturns;
function Hd(n) {
  if (n >= 1e6) {
    const i = n / 1e6;
    return `$${i % 1 === 0 ? i.toFixed(0) : i.toFixed(1)}M`;
  }
  return `$${n.toLocaleString()}`;
}
function kS(n, i) {
  const l = i * 0.005;
  return Math.round(n / l) * l;
}
function wS() {
  const {
      worldviews: n,
      worldviewNames: i,
      worldviewIds: l,
      hasProgressMap: s,
      goToStep: u,
      questionsConfig: c,
      marketplaceBudget: f,
      setMarketplaceBudget: p,
    } = Gr(),
    [h, m] = G.useState(vS),
    [g, v] = G.useState(f.toLocaleString()),
    x = Object.entries(mr),
    k = (V) => {
      v(V.target.value);
    },
    O = () => {
      const V = parseInt(g.replace(/[^0-9]/g, ''), 10);
      !isNaN(V) && V > 0 ? (p(V), v(V.toLocaleString())) : v(f.toLocaleString());
    },
    j = (V) => {
      V.key === 'Enter' && V.target.blur();
    },
    L = l
      .filter((V) => s[V])
      .map((V) => {
        const ae = n[V],
          z = {};
        for (const [ve, Se] of Object.entries(ae.questions)) z[ve] = Se.credences;
        const J = Xg(z, { causes: mr, dimensions: xS(c) });
        return { id: V, name: (i == null ? void 0 : i[V]) || `Worldview ${V}`, evs: J };
      }),
    R = L.length >= 2,
    M = R ? Zg(L, { diminishingReturns: h }) : null,
    F = () => {
      u('results');
    };
  return w.jsxs('div', {
    className: Te.resultsContainer,
    children: [
      w.jsx(Qi, {}),
      w.jsx(yo, { percentage: 100 }),
      w.jsxs('div', {
        className: Te.inner,
        children: [
          w.jsxs('div', {
            className: Te.resultsHeader,
            children: [
              w.jsx('h1', { className: Te.title, children: Pe.marketplace.heading }),
              w.jsx('p', { className: We.description, children: Pe.marketplace.description }),
            ],
          }),
          R
            ? w.jsxs(w.Fragment, {
                children: [
                  w.jsxs('div', {
                    className: We.settingsRow,
                    children: [
                      w.jsxs('label', {
                        className: We.settingsLabel,
                        children: [
                          Pe.marketplace.budgetLabel,
                          w.jsxs('div', {
                            className: We.budgetInputWrapper,
                            children: [
                              w.jsx('span', { className: We.currencyPrefix, children: '$' }),
                              w.jsx('input', {
                                type: 'text',
                                value: g,
                                onChange: k,
                                onBlur: O,
                                onKeyDown: j,
                                className: We.budgetInput,
                              }),
                            ],
                          }),
                        ],
                      }),
                      w.jsxs('label', {
                        className: We.settingsLabel,
                        children: [
                          Pe.marketplace.settingsLabel,
                          w.jsx('select', {
                            value: h,
                            onChange: (V) => m(V.target.value),
                            className: We.settingsSelect,
                            children: Object.keys(ho).map((V) =>
                              w.jsx(
                                'option',
                                { value: V, children: Pe.marketplace.diminishingReturns[V] },
                                V
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  w.jsxs('div', {
                    className: `${Te.resultCard} ${We.mainCard}`,
                    children: [
                      w.jsx('div', {
                        className: Te.cardHeader,
                        children: w.jsxs('div', {
                          children: [
                            w.jsx('h3', {
                              className: Te.cardTitle,
                              children: 'Combined Allocation',
                            }),
                            w.jsxs('p', {
                              className: Te.cardSubtitle,
                              children: [
                                'Based on ',
                                L.length,
                                ' worldviews •',
                                ' ',
                                Hd(f),
                                ' total',
                              ],
                            }),
                          ],
                        }),
                      }),
                      x.map(([V, ae]) => {
                        const z = M.allocation[V],
                          J = kS((z / 100) * f, f);
                        return w.jsxs(
                          'div',
                          {
                            className: We.allocationItem,
                            children: [
                              w.jsxs('div', {
                                className: We.allocationHeader,
                                children: [
                                  w.jsx('span', { className: We.causeName, children: ae.name }),
                                  w.jsx('span', { className: We.dollarAmount, children: Hd(J) }),
                                ],
                              }),
                              w.jsx('div', {
                                className: We.barTrack,
                                children: w.jsx('div', {
                                  className: We.barFill,
                                  style: { width: `${z}%`, background: ae.color },
                                  children:
                                    z > 15 &&
                                    w.jsxs('span', {
                                      className: We.barLabel,
                                      children: [z.toFixed(0), '%'],
                                    }),
                                }),
                              }),
                            ],
                          },
                          V
                        );
                      }),
                    ],
                  }),
                  w.jsxs('div', {
                    className: We.breakdownSection,
                    children: [
                      w.jsx('h2', {
                        className: We.breakdownHeading,
                        children: Pe.marketplace.worldviewBreakdownHeading,
                      }),
                      w.jsx('div', {
                        className: We.breakdownGrid,
                        children: M.worldviewAllocations.map((V, ae) =>
                          w.jsxs(
                            'div',
                            {
                              className: We.worldviewCard,
                              children: [
                                w.jsxs('div', {
                                  className: We.worldviewHeader,
                                  children: [
                                    w.jsx('span', {
                                      className: We.worldviewName,
                                      children: V.name,
                                    }),
                                    w.jsxs('span', {
                                      className: We.worldviewShare,
                                      children: [V.share.toFixed(0), '% budget'],
                                    }),
                                  ],
                                }),
                                x.map(([z, J]) => {
                                  const ve = V.share > 0 ? (V.allocation[z] / V.share) * 100 : 0;
                                  return w.jsx(
                                    Yp,
                                    {
                                      name: J.name,
                                      percentage: ve,
                                      color: J.color,
                                      simpleMode: !0,
                                    },
                                    z
                                  );
                                }),
                              ],
                            },
                            L[ae].id
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              })
            : w.jsx('div', {
                className: We.emptyState,
                children: w.jsx('p', { children: Pe.marketplace.emptyState }),
              }),
          w.jsx('div', {
            className: Te.backButtonContainer,
            children: w.jsx('button', {
              onClick: F,
              className: 'btn btn-secondary',
              children: Pe.marketplace.backButton,
            }),
          }),
        ],
      }),
    ],
  });
}
function xS(n) {
  return Object.fromEntries(
    n
      .filter((i) => i.type !== 'intermission' && i.worldviewDimension)
      .map((i) => [i.id, i.worldviewDimension])
  );
}
const SS = '_debugButton_1xuzz_4',
  _S = '_overlay_1xuzz_28',
  CS = '_modal_1xuzz_41',
  ES = '_header_1xuzz_52',
  NS = '_closeButton_1xuzz_66',
  IS = '_content_1xuzz_79',
  TS = '_section_1xuzz_85',
  bS = '_causeBlock_1xuzz_99',
  jS = '_fieldRow_1xuzz_112',
  LS = '_checkboxRow_1xuzz_136',
  PS = '_multiplierGroup_1xuzz_155',
  OS = '_dimInfo_1xuzz_165',
  zS = '_multiplierRow_1xuzz_172',
  RS = '_footer_1xuzz_196',
  MS = '_saveButton_1xuzz_203',
  lt = {
    debugButton: SS,
    overlay: _S,
    modal: CS,
    header: ES,
    closeButton: NS,
    content: IS,
    section: TS,
    causeBlock: bS,
    fieldRow: jS,
    checkboxRow: LS,
    multiplierGroup: PS,
    dimInfo: OS,
    multiplierRow: zS,
    footer: RS,
    saveButton: MS,
  },
  { causes: AS, diminishingReturns: DS } = $i,
  FS = tp(!0),
  BS = ({ onConfigChange: n }) => {
    const [i, l] = G.useState(!1),
      [s, u] = G.useState({
        causes: JSON.parse(JSON.stringify(AS)),
        dimensions: JSON.parse(JSON.stringify(FS)),
        diminishingReturns: DS,
      }),
      c = (h, m, g) => {
        u((v) => ({
          ...v,
          causes: {
            ...v.causes,
            [h]: {
              ...v.causes[h],
              [m]: m === 'name' || m === 'color' || typeof g == 'boolean' ? g : Number(g),
            },
          },
        }));
      },
      f = (h, m, g) => {
        u((v) => ({
          ...v,
          dimensions: {
            ...v.dimensions,
            [h]: { ...v.dimensions[h], options: { ...v.dimensions[h].options, [m]: Number(g) } },
          },
        }));
      },
      p = () => {
        (n(s), l(!1));
      };
    return w.jsxs(w.Fragment, {
      children: [
        w.jsx('button', {
          className: lt.debugButton,
          onClick: () => l(!0),
          title: 'Debug Settings',
          children: 'Settings',
        }),
        i &&
          w.jsx('div', {
            className: lt.overlay,
            onClick: () => l(!1),
            children: w.jsxs('div', {
              className: lt.modal,
              onClick: (h) => h.stopPropagation(),
              children: [
                w.jsxs('div', {
                  className: lt.header,
                  children: [
                    w.jsx('h2', { children: 'Calculation Debugger' }),
                    w.jsx('button', {
                      className: lt.closeButton,
                      onClick: () => l(!1),
                      children: 'x',
                    }),
                  ],
                }),
                w.jsxs('div', {
                  className: lt.content,
                  children: [
                    w.jsxs('section', {
                      className: lt.section,
                      children: [
                        w.jsx('h3', { children: 'DIMINISHING RETURNS' }),
                        w.jsx('div', {
                          className: lt.fieldRow,
                          children: w.jsxs('label', {
                            children: [
                              'Mode:',
                              w.jsx('select', {
                                value: s.diminishingReturns,
                                onChange: (h) =>
                                  u((m) => ({ ...m, diminishingReturns: h.target.value })),
                                children: Object.keys(ho).map((h) =>
                                  w.jsxs(
                                    'option',
                                    { value: h, children: [h, ' (power = ', ho[h], ')'] },
                                    h
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                        w.jsx('p', {
                          className: lt.dimInfo,
                          children:
                            'none = winner-take-all · sqrt = moderate spreading · extreme = near-equal',
                        }),
                      ],
                    }),
                    w.jsxs('section', {
                      className: lt.section,
                      children: [
                        w.jsx('h3', { children: 'CAUSES' }),
                        Object.entries(s.causes).map(([h, m]) =>
                          w.jsxs(
                            'div',
                            {
                              className: lt.causeBlock,
                              children: [
                                w.jsx('h4', { children: m.name }),
                                w.jsxs('div', {
                                  className: lt.fieldRow,
                                  children: [
                                    w.jsxs('label', {
                                      children: [
                                        'Points:',
                                        w.jsx('input', {
                                          type: 'number',
                                          value: m.points,
                                          onChange: (g) => c(h, 'points', g.target.value),
                                        }),
                                      ],
                                    }),
                                    w.jsxs('label', {
                                      children: [
                                        'Scale Factor:',
                                        w.jsx('input', {
                                          type: 'number',
                                          value: m.scaleFactor,
                                          onChange: (g) => c(h, 'scaleFactor', g.target.value),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                w.jsxs('div', {
                                  className: lt.checkboxRow,
                                  children: [
                                    w.jsxs('label', {
                                      children: [
                                        w.jsx('input', {
                                          type: 'checkbox',
                                          checked: m.helpsAnimals,
                                          onChange: (g) => c(h, 'helpsAnimals', g.target.checked),
                                        }),
                                        'Helps Animals',
                                      ],
                                    }),
                                    w.jsxs('label', {
                                      children: [
                                        w.jsx('input', {
                                          type: 'checkbox',
                                          checked: m.helpsFutureHumans,
                                          onChange: (g) =>
                                            c(h, 'helpsFutureHumans', g.target.checked),
                                        }),
                                        'Helps Future Humans',
                                      ],
                                    }),
                                    w.jsxs('label', {
                                      children: [
                                        w.jsx('input', {
                                          type: 'checkbox',
                                          checked: m.isSpeculative,
                                          onChange: (g) => c(h, 'isSpeculative', g.target.checked),
                                        }),
                                        'Is Speculative',
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            h
                          )
                        ),
                      ],
                    }),
                    w.jsxs('section', {
                      className: lt.section,
                      children: [
                        w.jsx('h3', { children: 'DIMENSIONS (from questions)' }),
                        Object.entries(s.dimensions).map(([h, m]) =>
                          w.jsxs(
                            'div',
                            {
                              className: lt.multiplierGroup,
                              children: [
                                w.jsx('h4', { children: m.name }),
                                w.jsx('p', {
                                  className: lt.dimInfo,
                                  children:
                                    m.applyAs === 'multiplier'
                                      ? `Multiplier when: ${m.appliesWhen}`
                                      : `Exponent on: ${m.appliesTo}`,
                                }),
                                w.jsx('div', {
                                  className: lt.multiplierRow,
                                  children: Object.entries(m.options).map(([g, v]) =>
                                    w.jsxs(
                                      'label',
                                      {
                                        children: [
                                          g,
                                          ':',
                                          w.jsx('input', {
                                            type: 'number',
                                            step: m.applyAs === 'exponent' ? '0.1' : '0.01',
                                            value: v,
                                            onChange: (x) => f(h, g, x.target.value),
                                          }),
                                        ],
                                      },
                                      g
                                    )
                                  ),
                                }),
                              ],
                            },
                            h
                          )
                        ),
                      ],
                    }),
                  ],
                }),
                w.jsx('div', {
                  className: lt.footer,
                  children: w.jsx('button', {
                    className: lt.saveButton,
                    onClick: p,
                    children: 'Save',
                  }),
                }),
              ],
            }),
          }),
      ],
    });
  },
  US = {
    position: 'fixed',
    top: '1rem',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'rgba(239, 68, 68, 0.9)',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    zIndex: 1e3,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
  };
function VS() {
  const {
    currentStep: n,
    currentQuestion: i,
    setDebugConfig: l,
    shareUrlError: s,
    isHydrating: u,
  } = Gr();
  if (u) return null;
  function c() {
    return n === 'welcome'
      ? w.jsx(Ny, {})
      : n === 'results'
        ? w.jsx(Yx, {})
        : n === 'marketplace'
          ? w.jsx(wS, {})
          : i
            ? i.type === _t.INTERMISSION
              ? w.jsx(Tx, {})
              : w.jsx(zw, {})
            : null;
  }
  return w.jsxs(w.Fragment, {
    children: [
      s && w.jsx('div', { style: US, children: s }),
      c(),
      w.jsx(BS, { onConfigChange: l }),
    ],
  });
}
function HS() {
  return w.jsx(ay, { children: w.jsx(VS, {}) });
}
Zm.createRoot(document.getElementById('root')).render(
  w.jsx(G.StrictMode, { children: w.jsx(HS, {}) })
);
