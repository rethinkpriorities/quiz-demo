(function () {
  const i = document.createElement('link').relList;
  if (i && i.supports && i.supports('modulepreload')) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) s(a);
  new MutationObserver((a) => {
    for (const u of a)
      if (u.type === 'childList')
        for (const d of u.addedNodes) d.tagName === 'LINK' && d.rel === 'modulepreload' && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(a) {
    const u = {};
    return (
      a.integrity && (u.integrity = a.integrity),
      a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === 'use-credentials'
        ? (u.credentials = 'include')
        : a.crossOrigin === 'anonymous'
          ? (u.credentials = 'omit')
          : (u.credentials = 'same-origin'),
      u
    );
  }
  function s(a) {
    if (a.ep) return;
    a.ep = !0;
    const u = l(a);
    fetch(a.href, u);
  }
})();
function pp(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
}
var pa = { exports: {} },
  qi = {},
  ha = { exports: {} },
  je = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ff;
function h0() {
  if (ff) return je;
  ff = 1;
  var n = Symbol.for('react.element'),
    i = Symbol.for('react.portal'),
    l = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    a = Symbol.for('react.profiler'),
    u = Symbol.for('react.provider'),
    d = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    m = Symbol.for('react.suspense'),
    h = Symbol.for('react.memo'),
    g = Symbol.for('react.lazy'),
    w = Symbol.iterator;
  function x(I) {
    return I === null || typeof I != 'object'
      ? null
      : ((I = (w && I[w]) || I['@@iterator']), typeof I == 'function' ? I : null);
  }
  var k = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    N = {};
  function O(I, F, _) {
    ((this.props = I), (this.context = F), (this.refs = N), (this.updater = _ || k));
  }
  ((O.prototype.isReactComponent = {}),
    (O.prototype.setState = function (I, F) {
      if (typeof I != 'object' && typeof I != 'function' && I != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, I, F, 'setState');
    }),
    (O.prototype.forceUpdate = function (I) {
      this.updater.enqueueForceUpdate(this, I, 'forceUpdate');
    }));
  function L() {}
  L.prototype = O.prototype;
  function D(I, F, _) {
    ((this.props = I), (this.context = F), (this.refs = N), (this.updater = _ || k));
  }
  var z = (D.prototype = new L());
  ((z.constructor = D), T(z, O.prototype), (z.isPureReactComponent = !0));
  var ee = Array.isArray,
    te = Object.prototype.hasOwnProperty,
    A = { current: null },
    $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ue(I, F, _) {
    var ce,
      _e = {},
      ve = null,
      Te = null;
    if (F != null)
      for (ce in (F.ref !== void 0 && (Te = F.ref), F.key !== void 0 && (ve = '' + F.key), F))
        te.call(F, ce) && !$.hasOwnProperty(ce) && (_e[ce] = F[ce]);
    var be = arguments.length - 2;
    if (be === 1) _e.children = _;
    else if (1 < be) {
      for (var Pe = Array(be), qe = 0; qe < be; qe++) Pe[qe] = arguments[qe + 2];
      _e.children = Pe;
    }
    if (I && I.defaultProps)
      for (ce in ((be = I.defaultProps), be)) _e[ce] === void 0 && (_e[ce] = be[ce]);
    return { $$typeof: n, type: I, key: ve, ref: Te, props: _e, _owner: A.current };
  }
  function se(I, F) {
    return { $$typeof: n, type: I.type, key: F, ref: I.ref, props: I.props, _owner: I._owner };
  }
  function fe(I) {
    return typeof I == 'object' && I !== null && I.$$typeof === n;
  }
  function Z(I) {
    var F = { '=': '=0', ':': '=2' };
    return (
      '$' +
      I.replace(/[=:]/g, function (_) {
        return F[_];
      })
    );
  }
  var B = /\/+/g;
  function ge(I, F) {
    return typeof I == 'object' && I !== null && I.key != null ? Z('' + I.key) : F.toString(36);
  }
  function U(I, F, _, ce, _e) {
    var ve = typeof I;
    (ve === 'undefined' || ve === 'boolean') && (I = null);
    var Te = !1;
    if (I === null) Te = !0;
    else
      switch (ve) {
        case 'string':
        case 'number':
          Te = !0;
          break;
        case 'object':
          switch (I.$$typeof) {
            case n:
            case i:
              Te = !0;
          }
      }
    if (Te)
      return (
        (Te = I),
        (_e = _e(Te)),
        (I = ce === '' ? '.' + ge(Te, 0) : ce),
        ee(_e)
          ? ((_ = ''),
            I != null && (_ = I.replace(B, '$&/') + '/'),
            U(_e, F, _, '', function (qe) {
              return qe;
            }))
          : _e != null &&
            (fe(_e) &&
              (_e = se(
                _e,
                _ +
                  (!_e.key || (Te && Te.key === _e.key)
                    ? ''
                    : ('' + _e.key).replace(B, '$&/') + '/') +
                  I
              )),
            F.push(_e)),
        1
      );
    if (((Te = 0), (ce = ce === '' ? '.' : ce + ':'), ee(I)))
      for (var be = 0; be < I.length; be++) {
        ve = I[be];
        var Pe = ce + ge(ve, be);
        Te += U(ve, F, _, Pe, _e);
      }
    else if (((Pe = x(I)), typeof Pe == 'function'))
      for (I = Pe.call(I), be = 0; !(ve = I.next()).done; )
        ((ve = ve.value), (Pe = ce + ge(ve, be++)), (Te += U(ve, F, _, Pe, _e)));
    else if (ve === 'object')
      throw (
        (F = String(I)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (F === '[object Object]' ? 'object with keys {' + Object.keys(I).join(', ') + '}' : F) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return Te;
  }
  function q(I, F, _) {
    if (I == null) return I;
    var ce = [],
      _e = 0;
    return (
      U(I, ce, '', '', function (ve) {
        return F.call(_, ve, _e++);
      }),
      ce
    );
  }
  function ye(I) {
    if (I._status === -1) {
      var F = I._result;
      ((F = F()),
        F.then(
          function (_) {
            (I._status === 0 || I._status === -1) && ((I._status = 1), (I._result = _));
          },
          function (_) {
            (I._status === 0 || I._status === -1) && ((I._status = 2), (I._result = _));
          }
        ),
        I._status === -1 && ((I._status = 0), (I._result = F)));
    }
    if (I._status === 1) return I._result.default;
    throw I._result;
  }
  var pe = { current: null },
    G = { transition: null },
    re = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: G, ReactCurrentOwner: A };
  function S() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (je.Children = {
      map: q,
      forEach: function (I, F, _) {
        q(
          I,
          function () {
            F.apply(this, arguments);
          },
          _
        );
      },
      count: function (I) {
        var F = 0;
        return (
          q(I, function () {
            F++;
          }),
          F
        );
      },
      toArray: function (I) {
        return (
          q(I, function (F) {
            return F;
          }) || []
        );
      },
      only: function (I) {
        if (!fe(I))
          throw Error('React.Children.only expected to receive a single React element child.');
        return I;
      },
    }),
    (je.Component = O),
    (je.Fragment = l),
    (je.Profiler = a),
    (je.PureComponent = D),
    (je.StrictMode = s),
    (je.Suspense = m),
    (je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re),
    (je.act = S),
    (je.cloneElement = function (I, F, _) {
      if (I == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + I + '.'
        );
      var ce = T({}, I.props),
        _e = I.key,
        ve = I.ref,
        Te = I._owner;
      if (F != null) {
        if (
          (F.ref !== void 0 && ((ve = F.ref), (Te = A.current)),
          F.key !== void 0 && (_e = '' + F.key),
          I.type && I.type.defaultProps)
        )
          var be = I.type.defaultProps;
        for (Pe in F)
          te.call(F, Pe) &&
            !$.hasOwnProperty(Pe) &&
            (ce[Pe] = F[Pe] === void 0 && be !== void 0 ? be[Pe] : F[Pe]);
      }
      var Pe = arguments.length - 2;
      if (Pe === 1) ce.children = _;
      else if (1 < Pe) {
        be = Array(Pe);
        for (var qe = 0; qe < Pe; qe++) be[qe] = arguments[qe + 2];
        ce.children = be;
      }
      return { $$typeof: n, type: I.type, key: _e, ref: ve, props: ce, _owner: Te };
    }),
    (je.createContext = function (I) {
      return (
        (I = {
          $$typeof: d,
          _currentValue: I,
          _currentValue2: I,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (I.Provider = { $$typeof: u, _context: I }),
        (I.Consumer = I)
      );
    }),
    (je.createElement = ue),
    (je.createFactory = function (I) {
      var F = ue.bind(null, I);
      return ((F.type = I), F);
    }),
    (je.createRef = function () {
      return { current: null };
    }),
    (je.forwardRef = function (I) {
      return { $$typeof: p, render: I };
    }),
    (je.isValidElement = fe),
    (je.lazy = function (I) {
      return { $$typeof: g, _payload: { _status: -1, _result: I }, _init: ye };
    }),
    (je.memo = function (I, F) {
      return { $$typeof: h, type: I, compare: F === void 0 ? null : F };
    }),
    (je.startTransition = function (I) {
      var F = G.transition;
      G.transition = {};
      try {
        I();
      } finally {
        G.transition = F;
      }
    }),
    (je.unstable_act = S),
    (je.useCallback = function (I, F) {
      return pe.current.useCallback(I, F);
    }),
    (je.useContext = function (I) {
      return pe.current.useContext(I);
    }),
    (je.useDebugValue = function () {}),
    (je.useDeferredValue = function (I) {
      return pe.current.useDeferredValue(I);
    }),
    (je.useEffect = function (I, F) {
      return pe.current.useEffect(I, F);
    }),
    (je.useId = function () {
      return pe.current.useId();
    }),
    (je.useImperativeHandle = function (I, F, _) {
      return pe.current.useImperativeHandle(I, F, _);
    }),
    (je.useInsertionEffect = function (I, F) {
      return pe.current.useInsertionEffect(I, F);
    }),
    (je.useLayoutEffect = function (I, F) {
      return pe.current.useLayoutEffect(I, F);
    }),
    (je.useMemo = function (I, F) {
      return pe.current.useMemo(I, F);
    }),
    (je.useReducer = function (I, F, _) {
      return pe.current.useReducer(I, F, _);
    }),
    (je.useRef = function (I) {
      return pe.current.useRef(I);
    }),
    (je.useState = function (I) {
      return pe.current.useState(I);
    }),
    (je.useSyncExternalStore = function (I, F, _) {
      return pe.current.useSyncExternalStore(I, F, _);
    }),
    (je.useTransition = function () {
      return pe.current.useTransition();
    }),
    (je.version = '18.3.1'),
    je
  );
}
var pf;
function eu() {
  return (pf || ((pf = 1), (ha.exports = h0())), ha.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hf;
function m0() {
  if (hf) return qi;
  hf = 1;
  var n = eu(),
    i = Symbol.for('react.element'),
    l = Symbol.for('react.fragment'),
    s = Object.prototype.hasOwnProperty,
    a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(p, m, h) {
    var g,
      w = {},
      x = null,
      k = null;
    (h !== void 0 && (x = '' + h),
      m.key !== void 0 && (x = '' + m.key),
      m.ref !== void 0 && (k = m.ref));
    for (g in m) s.call(m, g) && !u.hasOwnProperty(g) && (w[g] = m[g]);
    if (p && p.defaultProps) for (g in ((m = p.defaultProps), m)) w[g] === void 0 && (w[g] = m[g]);
    return { $$typeof: i, type: p, key: x, ref: k, props: w, _owner: a.current };
  }
  return ((qi.Fragment = l), (qi.jsx = d), (qi.jsxs = d), qi);
}
var mf;
function g0() {
  return (mf || ((mf = 1), (pa.exports = m0())), pa.exports);
}
var v = g0(),
  W = eu(),
  fo = {},
  ma = { exports: {} },
  Rt = {},
  ga = { exports: {} },
  ya = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gf;
function y0() {
  return (
    gf ||
      ((gf = 1),
      (function (n) {
        function i(G, re) {
          var S = G.length;
          G.push(re);
          e: for (; 0 < S; ) {
            var I = (S - 1) >>> 1,
              F = G[I];
            if (0 < a(F, re)) ((G[I] = re), (G[S] = F), (S = I));
            else break e;
          }
        }
        function l(G) {
          return G.length === 0 ? null : G[0];
        }
        function s(G) {
          if (G.length === 0) return null;
          var re = G[0],
            S = G.pop();
          if (S !== re) {
            G[0] = S;
            e: for (var I = 0, F = G.length, _ = F >>> 1; I < _; ) {
              var ce = 2 * (I + 1) - 1,
                _e = G[ce],
                ve = ce + 1,
                Te = G[ve];
              if (0 > a(_e, S))
                ve < F && 0 > a(Te, _e)
                  ? ((G[I] = Te), (G[ve] = S), (I = ve))
                  : ((G[I] = _e), (G[ce] = S), (I = ce));
              else if (ve < F && 0 > a(Te, S)) ((G[I] = Te), (G[ve] = S), (I = ve));
              else break e;
            }
          }
          return re;
        }
        function a(G, re) {
          var S = G.sortIndex - re.sortIndex;
          return S !== 0 ? S : G.id - re.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var u = performance;
          n.unstable_now = function () {
            return u.now();
          };
        } else {
          var d = Date,
            p = d.now();
          n.unstable_now = function () {
            return d.now() - p;
          };
        }
        var m = [],
          h = [],
          g = 1,
          w = null,
          x = 3,
          k = !1,
          T = !1,
          N = !1,
          O = typeof setTimeout == 'function' ? setTimeout : null,
          L = typeof clearTimeout == 'function' ? clearTimeout : null,
          D = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function z(G) {
          for (var re = l(h); re !== null; ) {
            if (re.callback === null) s(h);
            else if (re.startTime <= G) (s(h), (re.sortIndex = re.expirationTime), i(m, re));
            else break;
            re = l(h);
          }
        }
        function ee(G) {
          if (((N = !1), z(G), !T))
            if (l(m) !== null) ((T = !0), ye(te));
            else {
              var re = l(h);
              re !== null && pe(ee, re.startTime - G);
            }
        }
        function te(G, re) {
          ((T = !1), N && ((N = !1), L(ue), (ue = -1)), (k = !0));
          var S = x;
          try {
            for (z(re), w = l(m); w !== null && (!(w.expirationTime > re) || (G && !Z())); ) {
              var I = w.callback;
              if (typeof I == 'function') {
                ((w.callback = null), (x = w.priorityLevel));
                var F = I(w.expirationTime <= re);
                ((re = n.unstable_now()),
                  typeof F == 'function' ? (w.callback = F) : w === l(m) && s(m),
                  z(re));
              } else s(m);
              w = l(m);
            }
            if (w !== null) var _ = !0;
            else {
              var ce = l(h);
              (ce !== null && pe(ee, ce.startTime - re), (_ = !1));
            }
            return _;
          } finally {
            ((w = null), (x = S), (k = !1));
          }
        }
        var A = !1,
          $ = null,
          ue = -1,
          se = 5,
          fe = -1;
        function Z() {
          return !(n.unstable_now() - fe < se);
        }
        function B() {
          if ($ !== null) {
            var G = n.unstable_now();
            fe = G;
            var re = !0;
            try {
              re = $(!0, G);
            } finally {
              re ? ge() : ((A = !1), ($ = null));
            }
          } else A = !1;
        }
        var ge;
        if (typeof D == 'function')
          ge = function () {
            D(B);
          };
        else if (typeof MessageChannel < 'u') {
          var U = new MessageChannel(),
            q = U.port2;
          ((U.port1.onmessage = B),
            (ge = function () {
              q.postMessage(null);
            }));
        } else
          ge = function () {
            O(B, 0);
          };
        function ye(G) {
          (($ = G), A || ((A = !0), ge()));
        }
        function pe(G, re) {
          ue = O(function () {
            G(n.unstable_now());
          }, re);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (G) {
            G.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            T || k || ((T = !0), ye(te));
          }),
          (n.unstable_forceFrameRate = function (G) {
            0 > G || 125 < G
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (se = 0 < G ? Math.floor(1e3 / G) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return l(m);
          }),
          (n.unstable_next = function (G) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var re = 3;
                break;
              default:
                re = x;
            }
            var S = x;
            x = re;
            try {
              return G();
            } finally {
              x = S;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (G, re) {
            switch (G) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                G = 3;
            }
            var S = x;
            x = G;
            try {
              return re();
            } finally {
              x = S;
            }
          }),
          (n.unstable_scheduleCallback = function (G, re, S) {
            var I = n.unstable_now();
            switch (
              (typeof S == 'object' && S !== null
                ? ((S = S.delay), (S = typeof S == 'number' && 0 < S ? I + S : I))
                : (S = I),
              G)
            ) {
              case 1:
                var F = -1;
                break;
              case 2:
                F = 250;
                break;
              case 5:
                F = 1073741823;
                break;
              case 4:
                F = 1e4;
                break;
              default:
                F = 5e3;
            }
            return (
              (F = S + F),
              (G = {
                id: g++,
                callback: re,
                priorityLevel: G,
                startTime: S,
                expirationTime: F,
                sortIndex: -1,
              }),
              S > I
                ? ((G.sortIndex = S),
                  i(h, G),
                  l(m) === null && G === l(h) && (N ? (L(ue), (ue = -1)) : (N = !0), pe(ee, S - I)))
                : ((G.sortIndex = F), i(m, G), T || k || ((T = !0), ye(te))),
              G
            );
          }),
          (n.unstable_shouldYield = Z),
          (n.unstable_wrapCallback = function (G) {
            var re = x;
            return function () {
              var S = x;
              x = re;
              try {
                return G.apply(this, arguments);
              } finally {
                x = S;
              }
            };
          }));
      })(ya)),
    ya
  );
}
var yf;
function v0() {
  return (yf || ((yf = 1), (ga.exports = y0())), ga.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vf;
function w0() {
  if (vf) return Rt;
  vf = 1;
  var n = eu(),
    i = v0();
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
    a = {};
  function u(e, t) {
    (d(e, t), d(e + 'Capture', t));
  }
  function d(e, t) {
    for (a[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var p = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    m = Object.prototype.hasOwnProperty,
    h =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    w = {};
  function x(e) {
    return m.call(w, e) ? !0 : m.call(g, e) ? !1 : h.test(e) ? (w[e] = !0) : ((g[e] = !0), !1);
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
  function T(e, t, r, o) {
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
  function N(e, t, r, o, c, f, y) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = c),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = f),
      (this.removeEmptyString = y));
  }
  var O = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      O[e] = new N(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      O[t] = new N(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      O[e] = new N(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        O[e] = new N(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        O[e] = new N(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      O[e] = new N(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      O[e] = new N(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      O[e] = new N(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      O[e] = new N(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var L = /[\-:]([a-z])/g;
  function D(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(L, D);
      O[t] = new N(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(L, D);
        O[t] = new N(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(L, D);
      O[t] = new N(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      O[e] = new N(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (O.xlinkHref = new N('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      O[e] = new N(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function z(e, t, r, o) {
    var c = O.hasOwnProperty(t) ? O[t] : null;
    (c !== null
      ? c.type !== 0
      : o || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (T(t, r, c, o) && (r = null),
      o || c === null
        ? x(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
        : c.mustUseProperty
          ? (e[c.propertyName] = r === null ? (c.type === 3 ? !1 : '') : r)
          : ((t = c.attributeName),
            (o = c.attributeNamespace),
            r === null
              ? e.removeAttribute(t)
              : ((c = c.type),
                (r = c === 3 || (c === 4 && r === !0) ? '' : '' + r),
                o ? e.setAttributeNS(o, t, r) : e.setAttribute(t, r))));
  }
  var ee = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    te = Symbol.for('react.element'),
    A = Symbol.for('react.portal'),
    $ = Symbol.for('react.fragment'),
    ue = Symbol.for('react.strict_mode'),
    se = Symbol.for('react.profiler'),
    fe = Symbol.for('react.provider'),
    Z = Symbol.for('react.context'),
    B = Symbol.for('react.forward_ref'),
    ge = Symbol.for('react.suspense'),
    U = Symbol.for('react.suspense_list'),
    q = Symbol.for('react.memo'),
    ye = Symbol.for('react.lazy'),
    pe = Symbol.for('react.offscreen'),
    G = Symbol.iterator;
  function re(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (G && e[G]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var S = Object.assign,
    I;
  function F(e) {
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
  var _ = !1;
  function ce(e, t) {
    if (!e || _) return '';
    _ = !0;
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
          } catch (R) {
            var o = R;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (R) {
            o = R;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (R) {
          o = R;
        }
        e();
      }
    } catch (R) {
      if (R && o && typeof R.stack == 'string') {
        for (
          var c = R.stack.split(`
`),
            f = o.stack.split(`
`),
            y = c.length - 1,
            C = f.length - 1;
          1 <= y && 0 <= C && c[y] !== f[C];
        )
          C--;
        for (; 1 <= y && 0 <= C; y--, C--)
          if (c[y] !== f[C]) {
            if (y !== 1 || C !== 1)
              do
                if ((y--, C--, 0 > C || c[y] !== f[C])) {
                  var E =
                    `
` + c[y].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      E.includes('<anonymous>') &&
                      (E = E.replace('<anonymous>', e.displayName)),
                    E
                  );
                }
              while (1 <= y && 0 <= C);
            break;
          }
      }
    } finally {
      ((_ = !1), (Error.prepareStackTrace = r));
    }
    return (e = e ? e.displayName || e.name : '') ? F(e) : '';
  }
  function _e(e) {
    switch (e.tag) {
      case 5:
        return F(e.type);
      case 16:
        return F('Lazy');
      case 13:
        return F('Suspense');
      case 19:
        return F('SuspenseList');
      case 0:
      case 2:
      case 15:
        return ((e = ce(e.type, !1)), e);
      case 11:
        return ((e = ce(e.type.render, !1)), e);
      case 1:
        return ((e = ce(e.type, !0)), e);
      default:
        return '';
    }
  }
  function ve(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case $:
        return 'Fragment';
      case A:
        return 'Portal';
      case se:
        return 'Profiler';
      case ue:
        return 'StrictMode';
      case ge:
        return 'Suspense';
      case U:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Z:
          return (e.displayName || 'Context') + '.Consumer';
        case fe:
          return (e._context.displayName || 'Context') + '.Provider';
        case B:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case q:
          return ((t = e.displayName || null), t !== null ? t : ve(e.type) || 'Memo');
        case ye:
          ((t = e._payload), (e = e._init));
          try {
            return ve(e(t));
          } catch {}
      }
    return null;
  }
  function Te(e) {
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
        return ve(t);
      case 8:
        return t === ue ? 'StrictMode' : 'Mode';
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
  function be(e) {
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
  function Pe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function qe(e) {
    var t = Pe(e) ? 'checked' : 'value',
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      o = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < 'u' &&
      typeof r.get == 'function' &&
      typeof r.set == 'function'
    ) {
      var c = r.get,
        f = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (y) {
            ((o = '' + y), f.call(this, y));
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
  function It(e) {
    e._valueTracker || (e._valueTracker = qe(e));
  }
  function Et(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      o = '';
    return (
      e && (o = Pe(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = o),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function Ft(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Bt(e, t) {
    var r = t.checked;
    return S({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function gn(e, t) {
    var r = t.defaultValue == null ? '' : t.defaultValue,
      o = t.checked != null ? t.checked : t.defaultChecked;
    ((r = be(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: o,
        initialValue: r,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      }));
  }
  function on(e, t) {
    ((t = t.checked), t != null && z(e, 'checked', t, !1));
  }
  function ae(e, t) {
    on(e, t);
    var r = be(t.value),
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
      ? Je(e, t.type, r)
      : t.hasOwnProperty('defaultValue') && Je(e, t.type, be(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function De(e, t, r) {
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
  function Je(e, t, r) {
    (t !== 'number' || Ft(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
  }
  var pt = Array.isArray;
  function vt(e, t, r, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var c = 0; c < r.length; c++) t['$' + r[c]] = !0;
      for (r = 0; r < e.length; r++)
        ((c = t.hasOwnProperty('$' + e[r].value)),
          e[r].selected !== c && (e[r].selected = c),
          c && o && (e[r].defaultSelected = !0));
    } else {
      for (r = '' + be(r), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === r) {
          ((e[c].selected = !0), o && (e[c].defaultSelected = !0));
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Yt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return S({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Wn(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(l(92));
        if (pt(r)) {
          if (1 < r.length) throw Error(l(93));
          r = r[0];
        }
        t = r;
      }
      (t == null && (t = ''), (r = t));
    }
    e._wrapperState = { initialValue: be(r) };
  }
  function J(e, t) {
    var r = be(t.value),
      o = be(t.defaultValue);
    (r != null &&
      ((r = '' + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      o != null && (e.defaultValue = '' + o));
  }
  function he(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function M(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Q(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? M(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var xe,
    Ne = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, r, o, c) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, o, c);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
      else {
        for (
          xe = xe || document.createElement('div'),
            xe.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = xe.firstChild;
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
  var ht = {
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
    bn = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(ht).forEach(function (e) {
    bn.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ht[t] = ht[e]));
    });
  });
  function Xt(e, t, r) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : r || typeof t != 'number' || t === 0 || (ht.hasOwnProperty(e) && ht[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function Vn(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = r.indexOf('--') === 0,
          c = Xt(r, t[r], o);
        (r === 'float' && (r = 'cssFloat'), o ? e.setProperty(r, c) : (e[r] = c));
      }
  }
  var dr = S(
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
  function mt(e, t) {
    if (t) {
      if (dr[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function yn(e, t) {
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
  var Wt = null;
  function Io(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var To = null,
    jr = null,
    Lr = null;
  function Iu(e) {
    if ((e = ji(e))) {
      if (typeof To != 'function') throw Error(l(280));
      var t = e.stateNode;
      t && ((t = bl(t)), To(e.stateNode, e.type, t));
    }
  }
  function Tu(e) {
    jr ? (Lr ? Lr.push(e) : (Lr = [e])) : (jr = e);
  }
  function ju() {
    if (jr) {
      var e = jr,
        t = Lr;
      if (((Lr = jr = null), Iu(e), t)) for (e = 0; e < t.length; e++) Iu(t[e]);
    }
  }
  function Lu(e, t) {
    return e(t);
  }
  function Pu() {}
  var jo = !1;
  function Ou(e, t, r) {
    if (jo) return e(t, r);
    jo = !0;
    try {
      return Lu(e, t, r);
    } finally {
      ((jo = !1), (jr !== null || Lr !== null) && (Pu(), ju()));
    }
  }
  function ui(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var o = bl(r);
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
  var Lo = !1;
  if (p)
    try {
      var ci = {};
      (Object.defineProperty(ci, 'passive', {
        get: function () {
          Lo = !0;
        },
      }),
        window.addEventListener('test', ci, ci),
        window.removeEventListener('test', ci, ci));
    } catch {
      Lo = !1;
    }
  function kh(e, t, r, o, c, f, y, C, E) {
    var R = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, R);
    } catch (H) {
      this.onError(H);
    }
  }
  var di = !1,
    il = null,
    ll = !1,
    Po = null,
    xh = {
      onError: function (e) {
        ((di = !0), (il = e));
      },
    };
  function Sh(e, t, r, o, c, f, y, C, E) {
    ((di = !1), (il = null), kh.apply(xh, arguments));
  }
  function _h(e, t, r, o, c, f, y, C, E) {
    if ((Sh.apply(this, arguments), di)) {
      if (di) {
        var R = il;
        ((di = !1), (il = null));
      } else throw Error(l(198));
      ll || ((ll = !0), (Po = R));
    }
  }
  function fr(e) {
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
  function Ru(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Mu(e) {
    if (fr(e) !== e) throw Error(l(188));
  }
  function Ch(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = fr(e)), t === null)) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var r = e, o = t; ; ) {
      var c = r.return;
      if (c === null) break;
      var f = c.alternate;
      if (f === null) {
        if (((o = c.return), o !== null)) {
          r = o;
          continue;
        }
        break;
      }
      if (c.child === f.child) {
        for (f = c.child; f; ) {
          if (f === r) return (Mu(c), e);
          if (f === o) return (Mu(c), t);
          f = f.sibling;
        }
        throw Error(l(188));
      }
      if (r.return !== o.return) ((r = c), (o = f));
      else {
        for (var y = !1, C = c.child; C; ) {
          if (C === r) {
            ((y = !0), (r = c), (o = f));
            break;
          }
          if (C === o) {
            ((y = !0), (o = c), (r = f));
            break;
          }
          C = C.sibling;
        }
        if (!y) {
          for (C = f.child; C; ) {
            if (C === r) {
              ((y = !0), (r = f), (o = c));
              break;
            }
            if (C === o) {
              ((y = !0), (o = f), (r = c));
              break;
            }
            C = C.sibling;
          }
          if (!y) throw Error(l(189));
        }
      }
      if (r.alternate !== o) throw Error(l(190));
    }
    if (r.tag !== 3) throw Error(l(188));
    return r.stateNode.current === r ? e : t;
  }
  function Au(e) {
    return ((e = Ch(e)), e !== null ? Du(e) : null);
  }
  function Du(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Du(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var zu = i.unstable_scheduleCallback,
    Fu = i.unstable_cancelCallback,
    Eh = i.unstable_shouldYield,
    bh = i.unstable_requestPaint,
    nt = i.unstable_now,
    Nh = i.unstable_getCurrentPriorityLevel,
    Oo = i.unstable_ImmediatePriority,
    Bu = i.unstable_UserBlockingPriority,
    ol = i.unstable_NormalPriority,
    Ih = i.unstable_LowPriority,
    Wu = i.unstable_IdlePriority,
    sl = null,
    vn = null;
  function Th(e) {
    if (vn && typeof vn.onCommitFiberRoot == 'function')
      try {
        vn.onCommitFiberRoot(sl, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var sn = Math.clz32 ? Math.clz32 : Ph,
    jh = Math.log,
    Lh = Math.LN2;
  function Ph(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((jh(e) / Lh) | 0)) | 0);
  }
  var al = 64,
    ul = 4194304;
  function fi(e) {
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
  function cl(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var o = 0,
      c = e.suspendedLanes,
      f = e.pingedLanes,
      y = r & 268435455;
    if (y !== 0) {
      var C = y & ~c;
      C !== 0 ? (o = fi(C)) : ((f &= y), f !== 0 && (o = fi(f)));
    } else ((y = r & ~c), y !== 0 ? (o = fi(y)) : f !== 0 && (o = fi(f)));
    if (o === 0) return 0;
    if (
      t !== 0 &&
      t !== o &&
      (t & c) === 0 &&
      ((c = o & -o), (f = t & -t), c >= f || (c === 16 && (f & 4194240) !== 0))
    )
      return t;
    if (((o & 4) !== 0 && (o |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= o; 0 < t; )
        ((r = 31 - sn(t)), (c = 1 << r), (o |= e[r]), (t &= ~c));
    return o;
  }
  function Oh(e, t) {
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
  function Rh(e, t) {
    for (
      var r = e.suspendedLanes, o = e.pingedLanes, c = e.expirationTimes, f = e.pendingLanes;
      0 < f;
    ) {
      var y = 31 - sn(f),
        C = 1 << y,
        E = c[y];
      (E === -1
        ? ((C & r) === 0 || (C & o) !== 0) && (c[y] = Oh(C, t))
        : E <= t && (e.expiredLanes |= C),
        (f &= ~C));
    }
  }
  function Ro(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Vu() {
    var e = al;
    return ((al <<= 1), (al & 4194240) === 0 && (al = 64), e);
  }
  function Mo(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function pi(e, t, r) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - sn(t)),
      (e[t] = r));
  }
  function Mh(e, t) {
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
      var c = 31 - sn(r),
        f = 1 << c;
      ((t[c] = 0), (o[c] = -1), (e[c] = -1), (r &= ~f));
    }
  }
  function Ao(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var o = 31 - sn(r),
        c = 1 << o;
      ((c & t) | (e[o] & t) && (e[o] |= t), (r &= ~c));
    }
  }
  var Fe = 0;
  function $u(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Uu,
    Do,
    qu,
    Hu,
    Qu,
    zo = !1,
    dl = [],
    $n = null,
    Un = null,
    qn = null,
    hi = new Map(),
    mi = new Map(),
    Hn = [],
    Ah =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function Ku(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        $n = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Un = null;
        break;
      case 'mouseover':
      case 'mouseout':
        qn = null;
        break;
      case 'pointerover':
      case 'pointerout':
        hi.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        mi.delete(t.pointerId);
    }
  }
  function gi(e, t, r, o, c, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: o,
          nativeEvent: f,
          targetContainers: [c],
        }),
        t !== null && ((t = ji(t)), t !== null && Do(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        c !== null && t.indexOf(c) === -1 && t.push(c),
        e);
  }
  function Dh(e, t, r, o, c) {
    switch (t) {
      case 'focusin':
        return (($n = gi($n, e, t, r, o, c)), !0);
      case 'dragenter':
        return ((Un = gi(Un, e, t, r, o, c)), !0);
      case 'mouseover':
        return ((qn = gi(qn, e, t, r, o, c)), !0);
      case 'pointerover':
        var f = c.pointerId;
        return (hi.set(f, gi(hi.get(f) || null, e, t, r, o, c)), !0);
      case 'gotpointercapture':
        return ((f = c.pointerId), mi.set(f, gi(mi.get(f) || null, e, t, r, o, c)), !0);
    }
    return !1;
  }
  function Gu(e) {
    var t = pr(e.target);
    if (t !== null) {
      var r = fr(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Ru(r)), t !== null)) {
            ((e.blockedOn = t),
              Qu(e.priority, function () {
                qu(r);
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
  function fl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Bo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        ((Wt = o), r.target.dispatchEvent(o), (Wt = null));
      } else return ((t = ji(r)), t !== null && Do(t), (e.blockedOn = r), !1);
      t.shift();
    }
    return !0;
  }
  function Yu(e, t, r) {
    fl(e) && r.delete(t);
  }
  function zh() {
    ((zo = !1),
      $n !== null && fl($n) && ($n = null),
      Un !== null && fl(Un) && (Un = null),
      qn !== null && fl(qn) && (qn = null),
      hi.forEach(Yu),
      mi.forEach(Yu));
  }
  function yi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      zo || ((zo = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, zh)));
  }
  function vi(e) {
    function t(c) {
      return yi(c, e);
    }
    if (0 < dl.length) {
      yi(dl[0], e);
      for (var r = 1; r < dl.length; r++) {
        var o = dl[r];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      $n !== null && yi($n, e),
        Un !== null && yi(Un, e),
        qn !== null && yi(qn, e),
        hi.forEach(t),
        mi.forEach(t),
        r = 0;
      r < Hn.length;
      r++
    )
      ((o = Hn[r]), o.blockedOn === e && (o.blockedOn = null));
    for (; 0 < Hn.length && ((r = Hn[0]), r.blockedOn === null); )
      (Gu(r), r.blockedOn === null && Hn.shift());
  }
  var Pr = ee.ReactCurrentBatchConfig,
    pl = !0;
  function Fh(e, t, r, o) {
    var c = Fe,
      f = Pr.transition;
    Pr.transition = null;
    try {
      ((Fe = 1), Fo(e, t, r, o));
    } finally {
      ((Fe = c), (Pr.transition = f));
    }
  }
  function Bh(e, t, r, o) {
    var c = Fe,
      f = Pr.transition;
    Pr.transition = null;
    try {
      ((Fe = 4), Fo(e, t, r, o));
    } finally {
      ((Fe = c), (Pr.transition = f));
    }
  }
  function Fo(e, t, r, o) {
    if (pl) {
      var c = Bo(e, t, r, o);
      if (c === null) (rs(e, t, o, hl, r), Ku(e, o));
      else if (Dh(c, e, t, r, o)) o.stopPropagation();
      else if ((Ku(e, o), t & 4 && -1 < Ah.indexOf(e))) {
        for (; c !== null; ) {
          var f = ji(c);
          if (
            (f !== null && Uu(f), (f = Bo(e, t, r, o)), f === null && rs(e, t, o, hl, r), f === c)
          )
            break;
          c = f;
        }
        c !== null && o.stopPropagation();
      } else rs(e, t, o, null, r);
    }
  }
  var hl = null;
  function Bo(e, t, r, o) {
    if (((hl = null), (e = Io(o)), (e = pr(e)), e !== null))
      if (((t = fr(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Ru(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((hl = e), null);
  }
  function Xu(e) {
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
        switch (Nh()) {
          case Oo:
            return 1;
          case Bu:
            return 4;
          case ol:
          case Ih:
            return 16;
          case Wu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Qn = null,
    Wo = null,
    ml = null;
  function Ju() {
    if (ml) return ml;
    var e,
      t = Wo,
      r = t.length,
      o,
      c = 'value' in Qn ? Qn.value : Qn.textContent,
      f = c.length;
    for (e = 0; e < r && t[e] === c[e]; e++);
    var y = r - e;
    for (o = 1; o <= y && t[r - o] === c[f - o]; o++);
    return (ml = c.slice(e, 1 < o ? 1 - o : void 0));
  }
  function gl(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function yl() {
    return !0;
  }
  function Zu() {
    return !1;
  }
  function Vt(e) {
    function t(r, o, c, f, y) {
      ((this._reactName = r),
        (this._targetInst = c),
        (this.type = o),
        (this.nativeEvent = f),
        (this.target = y),
        (this.currentTarget = null));
      for (var C in e) e.hasOwnProperty(C) && ((r = e[C]), (this[C] = r ? r(f) : f[C]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? yl
          : Zu),
        (this.isPropagationStopped = Zu),
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
            (this.isDefaultPrevented = yl));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
            (this.isPropagationStopped = yl));
        },
        persist: function () {},
        isPersistent: yl,
      }),
      t
    );
  }
  var Or = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Vo = Vt(Or),
    wi = S({}, Or, { view: 0, detail: 0 }),
    Wh = Vt(wi),
    $o,
    Uo,
    ki,
    vl = S({}, wi, {
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
      getModifierState: Ho,
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
          : (e !== ki &&
              (ki && e.type === 'mousemove'
                ? (($o = e.screenX - ki.screenX), (Uo = e.screenY - ki.screenY))
                : (Uo = $o = 0),
              (ki = e)),
            $o);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Uo;
      },
    }),
    ec = Vt(vl),
    Vh = S({}, vl, { dataTransfer: 0 }),
    $h = Vt(Vh),
    Uh = S({}, wi, { relatedTarget: 0 }),
    qo = Vt(Uh),
    qh = S({}, Or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Hh = Vt(qh),
    Qh = S({}, Or, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Kh = Vt(Qh),
    Gh = S({}, Or, { data: 0 }),
    tc = Vt(Gh),
    Yh = {
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
    Xh = {
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
    Jh = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Zh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Jh[e]) ? !!t[e] : !1;
  }
  function Ho() {
    return Zh;
  }
  var em = S({}, wi, {
      key: function (e) {
        if (e.key) {
          var t = Yh[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = gl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Xh[e.keyCode] || 'Unidentified'
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
      getModifierState: Ho,
      charCode: function (e) {
        return e.type === 'keypress' ? gl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? gl(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    tm = Vt(em),
    nm = S({}, vl, {
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
    nc = Vt(nm),
    rm = S({}, wi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ho,
    }),
    im = Vt(rm),
    lm = S({}, Or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    om = Vt(lm),
    sm = S({}, vl, {
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
    am = Vt(sm),
    um = [9, 13, 27, 32],
    Qo = p && 'CompositionEvent' in window,
    xi = null;
  p && 'documentMode' in document && (xi = document.documentMode);
  var cm = p && 'TextEvent' in window && !xi,
    rc = p && (!Qo || (xi && 8 < xi && 11 >= xi)),
    ic = ' ',
    lc = !1;
  function oc(e, t) {
    switch (e) {
      case 'keyup':
        return um.indexOf(t.keyCode) !== -1;
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
  function sc(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var Rr = !1;
  function dm(e, t) {
    switch (e) {
      case 'compositionend':
        return sc(t);
      case 'keypress':
        return t.which !== 32 ? null : ((lc = !0), ic);
      case 'textInput':
        return ((e = t.data), e === ic && lc ? null : e);
      default:
        return null;
    }
  }
  function fm(e, t) {
    if (Rr)
      return e === 'compositionend' || (!Qo && oc(e, t))
        ? ((e = Ju()), (ml = Wo = Qn = null), (Rr = !1), e)
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
        return rc && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var pm = {
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
  function ac(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!pm[e.type] : t === 'textarea';
  }
  function uc(e, t, r, o) {
    (Tu(o),
      (t = _l(t, 'onChange')),
      0 < t.length &&
        ((r = new Vo('onChange', 'change', null, r, o)), e.push({ event: r, listeners: t })));
  }
  var Si = null,
    _i = null;
  function hm(e) {
    Nc(e, 0);
  }
  function wl(e) {
    var t = Fr(e);
    if (Et(t)) return e;
  }
  function mm(e, t) {
    if (e === 'change') return t;
  }
  var cc = !1;
  if (p) {
    var Ko;
    if (p) {
      var Go = 'oninput' in document;
      if (!Go) {
        var dc = document.createElement('div');
        (dc.setAttribute('oninput', 'return;'), (Go = typeof dc.oninput == 'function'));
      }
      Ko = Go;
    } else Ko = !1;
    cc = Ko && (!document.documentMode || 9 < document.documentMode);
  }
  function fc() {
    Si && (Si.detachEvent('onpropertychange', pc), (_i = Si = null));
  }
  function pc(e) {
    if (e.propertyName === 'value' && wl(_i)) {
      var t = [];
      (uc(t, _i, e, Io(e)), Ou(hm, t));
    }
  }
  function gm(e, t, r) {
    e === 'focusin'
      ? (fc(), (Si = t), (_i = r), Si.attachEvent('onpropertychange', pc))
      : e === 'focusout' && fc();
  }
  function ym(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return wl(_i);
  }
  function vm(e, t) {
    if (e === 'click') return wl(t);
  }
  function wm(e, t) {
    if (e === 'input' || e === 'change') return wl(t);
  }
  function km(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var an = typeof Object.is == 'function' ? Object.is : km;
  function Ci(e, t) {
    if (an(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var r = Object.keys(e),
      o = Object.keys(t);
    if (r.length !== o.length) return !1;
    for (o = 0; o < r.length; o++) {
      var c = r[o];
      if (!m.call(t, c) || !an(e[c], t[c])) return !1;
    }
    return !0;
  }
  function hc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function mc(e, t) {
    var r = hc(e);
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
      r = hc(r);
    }
  }
  function gc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? gc(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function yc() {
    for (var e = window, t = Ft(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == 'string';
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Ft(e.document);
    }
    return t;
  }
  function Yo(e) {
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
  function xm(e) {
    var t = yc(),
      r = e.focusedElem,
      o = e.selectionRange;
    if (t !== r && r && r.ownerDocument && gc(r.ownerDocument.documentElement, r)) {
      if (o !== null && Yo(r)) {
        if (((t = o.start), (e = o.end), e === void 0 && (e = t), 'selectionStart' in r))
          ((r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length)));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var c = r.textContent.length,
            f = Math.min(o.start, c);
          ((o = o.end === void 0 ? f : Math.min(o.end, c)),
            !e.extend && f > o && ((c = o), (o = f), (f = c)),
            (c = mc(r, f)));
          var y = mc(r, o);
          c &&
            y &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== c.node ||
              e.anchorOffset !== c.offset ||
              e.focusNode !== y.node ||
              e.focusOffset !== y.offset) &&
            ((t = t.createRange()),
            t.setStart(c.node, c.offset),
            e.removeAllRanges(),
            f > o
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
  var Sm = p && 'documentMode' in document && 11 >= document.documentMode,
    Mr = null,
    Xo = null,
    Ei = null,
    Jo = !1;
  function vc(e, t, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Jo ||
      Mr == null ||
      Mr !== Ft(o) ||
      ((o = Mr),
      'selectionStart' in o && Yo(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Ei && Ci(Ei, o)) ||
        ((Ei = o),
        (o = _l(Xo, 'onSelect')),
        0 < o.length &&
          ((t = new Vo('onSelect', 'select', null, t, r)),
          e.push({ event: t, listeners: o }),
          (t.target = Mr))));
  }
  function kl(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r['Webkit' + e] = 'webkit' + t),
      (r['Moz' + e] = 'moz' + t),
      r
    );
  }
  var Ar = {
      animationend: kl('Animation', 'AnimationEnd'),
      animationiteration: kl('Animation', 'AnimationIteration'),
      animationstart: kl('Animation', 'AnimationStart'),
      transitionend: kl('Transition', 'TransitionEnd'),
    },
    Zo = {},
    wc = {};
  p &&
    ((wc = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Ar.animationend.animation,
      delete Ar.animationiteration.animation,
      delete Ar.animationstart.animation),
    'TransitionEvent' in window || delete Ar.transitionend.transition);
  function xl(e) {
    if (Zo[e]) return Zo[e];
    if (!Ar[e]) return e;
    var t = Ar[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in wc) return (Zo[e] = t[r]);
    return e;
  }
  var kc = xl('animationend'),
    xc = xl('animationiteration'),
    Sc = xl('animationstart'),
    _c = xl('transitionend'),
    Cc = new Map(),
    Ec =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Kn(e, t) {
    (Cc.set(e, t), u(t, [e]));
  }
  for (var es = 0; es < Ec.length; es++) {
    var ts = Ec[es],
      _m = ts.toLowerCase(),
      Cm = ts[0].toUpperCase() + ts.slice(1);
    Kn(_m, 'on' + Cm);
  }
  (Kn(kc, 'onAnimationEnd'),
    Kn(xc, 'onAnimationIteration'),
    Kn(Sc, 'onAnimationStart'),
    Kn('dblclick', 'onDoubleClick'),
    Kn('focusin', 'onFocus'),
    Kn('focusout', 'onBlur'),
    Kn(_c, 'onTransitionEnd'),
    d('onMouseEnter', ['mouseout', 'mouseover']),
    d('onMouseLeave', ['mouseout', 'mouseover']),
    d('onPointerEnter', ['pointerout', 'pointerover']),
    d('onPointerLeave', ['pointerout', 'pointerover']),
    u('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    u(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    u('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    u('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    u(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    u(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var bi =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Em = new Set('cancel close invalid load scroll toggle'.split(' ').concat(bi));
  function bc(e, t, r) {
    var o = e.type || 'unknown-event';
    ((e.currentTarget = r), _h(o, t, void 0, e), (e.currentTarget = null));
  }
  function Nc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var o = e[r],
        c = o.event;
      o = o.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var y = o.length - 1; 0 <= y; y--) {
            var C = o[y],
              E = C.instance,
              R = C.currentTarget;
            if (((C = C.listener), E !== f && c.isPropagationStopped())) break e;
            (bc(c, C, R), (f = E));
          }
        else
          for (y = 0; y < o.length; y++) {
            if (
              ((C = o[y]),
              (E = C.instance),
              (R = C.currentTarget),
              (C = C.listener),
              E !== f && c.isPropagationStopped())
            )
              break e;
            (bc(c, C, R), (f = E));
          }
      }
    }
    if (ll) throw ((e = Po), (ll = !1), (Po = null), e);
  }
  function He(e, t) {
    var r = t[us];
    r === void 0 && (r = t[us] = new Set());
    var o = e + '__bubble';
    r.has(o) || (Ic(t, e, 2, !1), r.add(o));
  }
  function ns(e, t, r) {
    var o = 0;
    (t && (o |= 4), Ic(r, e, o, t));
  }
  var Sl = '_reactListening' + Math.random().toString(36).slice(2);
  function Ni(e) {
    if (!e[Sl]) {
      ((e[Sl] = !0),
        s.forEach(function (r) {
          r !== 'selectionchange' && (Em.has(r) || ns(r, !1, e), ns(r, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Sl] || ((t[Sl] = !0), ns('selectionchange', !1, t));
    }
  }
  function Ic(e, t, r, o) {
    switch (Xu(t)) {
      case 1:
        var c = Fh;
        break;
      case 4:
        c = Bh;
        break;
      default:
        c = Fo;
    }
    ((r = c.bind(null, t, r, e)),
      (c = void 0),
      !Lo || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (c = !0),
      o
        ? c !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: c })
          : e.addEventListener(t, r, !0)
        : c !== void 0
          ? e.addEventListener(t, r, { passive: c })
          : e.addEventListener(t, r, !1));
  }
  function rs(e, t, r, o, c) {
    var f = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var y = o.tag;
        if (y === 3 || y === 4) {
          var C = o.stateNode.containerInfo;
          if (C === c || (C.nodeType === 8 && C.parentNode === c)) break;
          if (y === 4)
            for (y = o.return; y !== null; ) {
              var E = y.tag;
              if (
                (E === 3 || E === 4) &&
                ((E = y.stateNode.containerInfo),
                E === c || (E.nodeType === 8 && E.parentNode === c))
              )
                return;
              y = y.return;
            }
          for (; C !== null; ) {
            if (((y = pr(C)), y === null)) return;
            if (((E = y.tag), E === 5 || E === 6)) {
              o = f = y;
              continue e;
            }
            C = C.parentNode;
          }
        }
        o = o.return;
      }
    Ou(function () {
      var R = f,
        H = Io(r),
        K = [];
      e: {
        var V = Cc.get(e);
        if (V !== void 0) {
          var ne = Vo,
            le = e;
          switch (e) {
            case 'keypress':
              if (gl(r) === 0) break e;
            case 'keydown':
            case 'keyup':
              ne = tm;
              break;
            case 'focusin':
              ((le = 'focus'), (ne = qo));
              break;
            case 'focusout':
              ((le = 'blur'), (ne = qo));
              break;
            case 'beforeblur':
            case 'afterblur':
              ne = qo;
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
              ne = ec;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              ne = $h;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              ne = im;
              break;
            case kc:
            case xc:
            case Sc:
              ne = Hh;
              break;
            case _c:
              ne = om;
              break;
            case 'scroll':
              ne = Wh;
              break;
            case 'wheel':
              ne = am;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              ne = Kh;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              ne = nc;
          }
          var de = (t & 4) !== 0,
            rt = !de && e === 'scroll',
            j = de ? (V !== null ? V + 'Capture' : null) : V;
          de = [];
          for (var b = R, P; b !== null; ) {
            P = b;
            var X = P.stateNode;
            if (
              (P.tag === 5 &&
                X !== null &&
                ((P = X), j !== null && ((X = ui(b, j)), X != null && de.push(Ii(b, X, P)))),
              rt)
            )
              break;
            b = b.return;
          }
          0 < de.length && ((V = new ne(V, le, null, r, H)), K.push({ event: V, listeners: de }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((V = e === 'mouseover' || e === 'pointerover'),
            (ne = e === 'mouseout' || e === 'pointerout'),
            V && r !== Wt && (le = r.relatedTarget || r.fromElement) && (pr(le) || le[Nn]))
          )
            break e;
          if (
            (ne || V) &&
            ((V =
              H.window === H
                ? H
                : (V = H.ownerDocument)
                  ? V.defaultView || V.parentWindow
                  : window),
            ne
              ? ((le = r.relatedTarget || r.toElement),
                (ne = R),
                (le = le ? pr(le) : null),
                le !== null &&
                  ((rt = fr(le)), le !== rt || (le.tag !== 5 && le.tag !== 6)) &&
                  (le = null))
              : ((ne = null), (le = R)),
            ne !== le)
          ) {
            if (
              ((de = ec),
              (X = 'onMouseLeave'),
              (j = 'onMouseEnter'),
              (b = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((de = nc), (X = 'onPointerLeave'), (j = 'onPointerEnter'), (b = 'pointer')),
              (rt = ne == null ? V : Fr(ne)),
              (P = le == null ? V : Fr(le)),
              (V = new de(X, b + 'leave', ne, r, H)),
              (V.target = rt),
              (V.relatedTarget = P),
              (X = null),
              pr(H) === R &&
                ((de = new de(j, b + 'enter', le, r, H)),
                (de.target = P),
                (de.relatedTarget = rt),
                (X = de)),
              (rt = X),
              ne && le)
            )
              t: {
                for (de = ne, j = le, b = 0, P = de; P; P = Dr(P)) b++;
                for (P = 0, X = j; X; X = Dr(X)) P++;
                for (; 0 < b - P; ) ((de = Dr(de)), b--);
                for (; 0 < P - b; ) ((j = Dr(j)), P--);
                for (; b--; ) {
                  if (de === j || (j !== null && de === j.alternate)) break t;
                  ((de = Dr(de)), (j = Dr(j)));
                }
                de = null;
              }
            else de = null;
            (ne !== null && Tc(K, V, ne, de, !1),
              le !== null && rt !== null && Tc(K, rt, le, de, !0));
          }
        }
        e: {
          if (
            ((V = R ? Fr(R) : window),
            (ne = V.nodeName && V.nodeName.toLowerCase()),
            ne === 'select' || (ne === 'input' && V.type === 'file'))
          )
            var me = mm;
          else if (ac(V))
            if (cc) me = wm;
            else {
              me = ym;
              var we = gm;
            }
          else
            (ne = V.nodeName) &&
              ne.toLowerCase() === 'input' &&
              (V.type === 'checkbox' || V.type === 'radio') &&
              (me = vm);
          if (me && (me = me(e, R))) {
            uc(K, me, r, H);
            break e;
          }
          (we && we(e, V, R),
            e === 'focusout' &&
              (we = V._wrapperState) &&
              we.controlled &&
              V.type === 'number' &&
              Je(V, 'number', V.value));
        }
        switch (((we = R ? Fr(R) : window), e)) {
          case 'focusin':
            (ac(we) || we.contentEditable === 'true') && ((Mr = we), (Xo = R), (Ei = null));
            break;
          case 'focusout':
            Ei = Xo = Mr = null;
            break;
          case 'mousedown':
            Jo = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Jo = !1), vc(K, r, H));
            break;
          case 'selectionchange':
            if (Sm) break;
          case 'keydown':
          case 'keyup':
            vc(K, r, H);
        }
        var ke;
        if (Qo)
          e: {
            switch (e) {
              case 'compositionstart':
                var Ce = 'onCompositionStart';
                break e;
              case 'compositionend':
                Ce = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Ce = 'onCompositionUpdate';
                break e;
            }
            Ce = void 0;
          }
        else
          Rr
            ? oc(e, r) && (Ce = 'onCompositionEnd')
            : e === 'keydown' && r.keyCode === 229 && (Ce = 'onCompositionStart');
        (Ce &&
          (rc &&
            r.locale !== 'ko' &&
            (Rr || Ce !== 'onCompositionStart'
              ? Ce === 'onCompositionEnd' && Rr && (ke = Ju())
              : ((Qn = H), (Wo = 'value' in Qn ? Qn.value : Qn.textContent), (Rr = !0))),
          (we = _l(R, Ce)),
          0 < we.length &&
            ((Ce = new tc(Ce, e, null, r, H)),
            K.push({ event: Ce, listeners: we }),
            ke ? (Ce.data = ke) : ((ke = sc(r)), ke !== null && (Ce.data = ke)))),
          (ke = cm ? dm(e, r) : fm(e, r)) &&
            ((R = _l(R, 'onBeforeInput')),
            0 < R.length &&
              ((H = new tc('onBeforeInput', 'beforeinput', null, r, H)),
              K.push({ event: H, listeners: R }),
              (H.data = ke))));
      }
      Nc(K, t);
    });
  }
  function Ii(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function _l(e, t) {
    for (var r = t + 'Capture', o = []; e !== null; ) {
      var c = e,
        f = c.stateNode;
      (c.tag === 5 &&
        f !== null &&
        ((c = f),
        (f = ui(e, r)),
        f != null && o.unshift(Ii(e, f, c)),
        (f = ui(e, t)),
        f != null && o.push(Ii(e, f, c))),
        (e = e.return));
    }
    return o;
  }
  function Dr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Tc(e, t, r, o, c) {
    for (var f = t._reactName, y = []; r !== null && r !== o; ) {
      var C = r,
        E = C.alternate,
        R = C.stateNode;
      if (E !== null && E === o) break;
      (C.tag === 5 &&
        R !== null &&
        ((C = R),
        c
          ? ((E = ui(r, f)), E != null && y.unshift(Ii(r, E, C)))
          : c || ((E = ui(r, f)), E != null && y.push(Ii(r, E, C)))),
        (r = r.return));
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var bm = /\r\n?/g,
    Nm = /\u0000|\uFFFD/g;
  function jc(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        bm,
        `
`
      )
      .replace(Nm, '');
  }
  function Cl(e, t, r) {
    if (((t = jc(t)), jc(e) !== t && r)) throw Error(l(425));
  }
  function El() {}
  var is = null,
    ls = null;
  function os(e, t) {
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
  var ss = typeof setTimeout == 'function' ? setTimeout : void 0,
    Im = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Lc = typeof Promise == 'function' ? Promise : void 0,
    Tm =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Lc < 'u'
          ? function (e) {
              return Lc.resolve(null).then(e).catch(jm);
            }
          : ss;
  function jm(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function as(e, t) {
    var r = t,
      o = 0;
    do {
      var c = r.nextSibling;
      if ((e.removeChild(r), c && c.nodeType === 8))
        if (((r = c.data), r === '/$')) {
          if (o === 0) {
            (e.removeChild(c), vi(t));
            return;
          }
          o--;
        } else (r !== '$' && r !== '$?' && r !== '$!') || o++;
      r = c;
    } while (r);
    vi(t);
  }
  function Gn(e) {
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
  function Pc(e) {
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
  var zr = Math.random().toString(36).slice(2),
    wn = '__reactFiber$' + zr,
    Ti = '__reactProps$' + zr,
    Nn = '__reactContainer$' + zr,
    us = '__reactEvents$' + zr,
    Lm = '__reactListeners$' + zr,
    Pm = '__reactHandles$' + zr;
  function pr(e) {
    var t = e[wn];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[Nn] || r[wn])) {
        if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
          for (e = Pc(e); e !== null; ) {
            if ((r = e[wn])) return r;
            e = Pc(e);
          }
        return t;
      }
      ((e = r), (r = e.parentNode));
    }
    return null;
  }
  function ji(e) {
    return (
      (e = e[wn] || e[Nn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Fr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function bl(e) {
    return e[Ti] || null;
  }
  var cs = [],
    Br = -1;
  function Yn(e) {
    return { current: e };
  }
  function Qe(e) {
    0 > Br || ((e.current = cs[Br]), (cs[Br] = null), Br--);
  }
  function Ve(e, t) {
    (Br++, (cs[Br] = e.current), (e.current = t));
  }
  var Xn = {},
    wt = Yn(Xn),
    Tt = Yn(!1),
    hr = Xn;
  function Wr(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Xn;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {},
      f;
    for (f in r) c[f] = t[f];
    return (
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      c
    );
  }
  function jt(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Nl() {
    (Qe(Tt), Qe(wt));
  }
  function Oc(e, t, r) {
    if (wt.current !== Xn) throw Error(l(168));
    (Ve(wt, t), Ve(Tt, r));
  }
  function Rc(e, t, r) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != 'function')) return r;
    o = o.getChildContext();
    for (var c in o) if (!(c in t)) throw Error(l(108, Te(e) || 'Unknown', c));
    return S({}, r, o);
  }
  function Il(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Xn),
      (hr = wt.current),
      Ve(wt, e),
      Ve(Tt, Tt.current),
      !0
    );
  }
  function Mc(e, t, r) {
    var o = e.stateNode;
    if (!o) throw Error(l(169));
    (r
      ? ((e = Rc(e, t, hr)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        Qe(Tt),
        Qe(wt),
        Ve(wt, e))
      : Qe(Tt),
      Ve(Tt, r));
  }
  var In = null,
    Tl = !1,
    ds = !1;
  function Ac(e) {
    In === null ? (In = [e]) : In.push(e);
  }
  function Om(e) {
    ((Tl = !0), Ac(e));
  }
  function Jn() {
    if (!ds && In !== null) {
      ds = !0;
      var e = 0,
        t = Fe;
      try {
        var r = In;
        for (Fe = 1; e < r.length; e++) {
          var o = r[e];
          do o = o(!0);
          while (o !== null);
        }
        ((In = null), (Tl = !1));
      } catch (c) {
        throw (In !== null && (In = In.slice(e + 1)), zu(Oo, Jn), c);
      } finally {
        ((Fe = t), (ds = !1));
      }
    }
    return null;
  }
  var Vr = [],
    $r = 0,
    jl = null,
    Ll = 0,
    Jt = [],
    Zt = 0,
    mr = null,
    Tn = 1,
    jn = '';
  function gr(e, t) {
    ((Vr[$r++] = Ll), (Vr[$r++] = jl), (jl = e), (Ll = t));
  }
  function Dc(e, t, r) {
    ((Jt[Zt++] = Tn), (Jt[Zt++] = jn), (Jt[Zt++] = mr), (mr = e));
    var o = Tn;
    e = jn;
    var c = 32 - sn(o) - 1;
    ((o &= ~(1 << c)), (r += 1));
    var f = 32 - sn(t) + c;
    if (30 < f) {
      var y = c - (c % 5);
      ((f = (o & ((1 << y) - 1)).toString(32)),
        (o >>= y),
        (c -= y),
        (Tn = (1 << (32 - sn(t) + c)) | (r << c) | o),
        (jn = f + e));
    } else ((Tn = (1 << f) | (r << c) | o), (jn = e));
  }
  function fs(e) {
    e.return !== null && (gr(e, 1), Dc(e, 1, 0));
  }
  function ps(e) {
    for (; e === jl; ) ((jl = Vr[--$r]), (Vr[$r] = null), (Ll = Vr[--$r]), (Vr[$r] = null));
    for (; e === mr; )
      ((mr = Jt[--Zt]),
        (Jt[Zt] = null),
        (jn = Jt[--Zt]),
        (Jt[Zt] = null),
        (Tn = Jt[--Zt]),
        (Jt[Zt] = null));
  }
  var $t = null,
    Ut = null,
    Ge = !1,
    un = null;
  function zc(e, t) {
    var r = rn(5, null, null, 0);
    ((r.elementType = 'DELETED'),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
  }
  function Fc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), ($t = e), (Ut = Gn(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), ($t = e), (Ut = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = mr !== null ? { id: Tn, overflow: jn } : null),
              (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
              (r = rn(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              ($t = e),
              (Ut = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function hs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ms(e) {
    if (Ge) {
      var t = Ut;
      if (t) {
        var r = t;
        if (!Fc(e, t)) {
          if (hs(e)) throw Error(l(418));
          t = Gn(r.nextSibling);
          var o = $t;
          t && Fc(e, t) ? zc(o, r) : ((e.flags = (e.flags & -4097) | 2), (Ge = !1), ($t = e));
        }
      } else {
        if (hs(e)) throw Error(l(418));
        ((e.flags = (e.flags & -4097) | 2), (Ge = !1), ($t = e));
      }
    }
  }
  function Bc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    $t = e;
  }
  function Pl(e) {
    if (e !== $t) return !1;
    if (!Ge) return (Bc(e), (Ge = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !os(e.type, e.memoizedProps))),
      t && (t = Ut))
    ) {
      if (hs(e)) throw (Wc(), Error(l(418)));
      for (; t; ) (zc(e, t), (t = Gn(t.nextSibling)));
    }
    if ((Bc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === '/$') {
              if (t === 0) {
                Ut = Gn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        Ut = null;
      }
    } else Ut = $t ? Gn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wc() {
    for (var e = Ut; e; ) e = Gn(e.nextSibling);
  }
  function Ur() {
    ((Ut = $t = null), (Ge = !1));
  }
  function gs(e) {
    un === null ? (un = [e]) : un.push(e);
  }
  var Rm = ee.ReactCurrentBatchConfig;
  function Li(e, t, r) {
    if (((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(l(309));
          var o = r.stateNode;
        }
        if (!o) throw Error(l(147, e));
        var c = o,
          f = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === f
          ? t.ref
          : ((t = function (y) {
              var C = c.refs;
              y === null ? delete C[f] : (C[f] = y);
            }),
            (t._stringRef = f),
            t);
      }
      if (typeof e != 'string') throw Error(l(284));
      if (!r._owner) throw Error(l(290, e));
    }
    return e;
  }
  function Ol(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        l(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      )
    );
  }
  function Vc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function $c(e) {
    function t(j, b) {
      if (e) {
        var P = j.deletions;
        P === null ? ((j.deletions = [b]), (j.flags |= 16)) : P.push(b);
      }
    }
    function r(j, b) {
      if (!e) return null;
      for (; b !== null; ) (t(j, b), (b = b.sibling));
      return null;
    }
    function o(j, b) {
      for (j = new Map(); b !== null; )
        (b.key !== null ? j.set(b.key, b) : j.set(b.index, b), (b = b.sibling));
      return j;
    }
    function c(j, b) {
      return ((j = or(j, b)), (j.index = 0), (j.sibling = null), j);
    }
    function f(j, b, P) {
      return (
        (j.index = P),
        e
          ? ((P = j.alternate),
            P !== null ? ((P = P.index), P < b ? ((j.flags |= 2), b) : P) : ((j.flags |= 2), b))
          : ((j.flags |= 1048576), b)
      );
    }
    function y(j) {
      return (e && j.alternate === null && (j.flags |= 2), j);
    }
    function C(j, b, P, X) {
      return b === null || b.tag !== 6
        ? ((b = sa(P, j.mode, X)), (b.return = j), b)
        : ((b = c(b, P)), (b.return = j), b);
    }
    function E(j, b, P, X) {
      var me = P.type;
      return me === $
        ? H(j, b, P.props.children, X, P.key)
        : b !== null &&
            (b.elementType === me ||
              (typeof me == 'object' && me !== null && me.$$typeof === ye && Vc(me) === b.type))
          ? ((X = c(b, P.props)), (X.ref = Li(j, b, P)), (X.return = j), X)
          : ((X = ro(P.type, P.key, P.props, null, j.mode, X)),
            (X.ref = Li(j, b, P)),
            (X.return = j),
            X);
    }
    function R(j, b, P, X) {
      return b === null ||
        b.tag !== 4 ||
        b.stateNode.containerInfo !== P.containerInfo ||
        b.stateNode.implementation !== P.implementation
        ? ((b = aa(P, j.mode, X)), (b.return = j), b)
        : ((b = c(b, P.children || [])), (b.return = j), b);
    }
    function H(j, b, P, X, me) {
      return b === null || b.tag !== 7
        ? ((b = Cr(P, j.mode, X, me)), (b.return = j), b)
        : ((b = c(b, P)), (b.return = j), b);
    }
    function K(j, b, P) {
      if ((typeof b == 'string' && b !== '') || typeof b == 'number')
        return ((b = sa('' + b, j.mode, P)), (b.return = j), b);
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case te:
            return (
              (P = ro(b.type, b.key, b.props, null, j.mode, P)),
              (P.ref = Li(j, null, b)),
              (P.return = j),
              P
            );
          case A:
            return ((b = aa(b, j.mode, P)), (b.return = j), b);
          case ye:
            var X = b._init;
            return K(j, X(b._payload), P);
        }
        if (pt(b) || re(b)) return ((b = Cr(b, j.mode, P, null)), (b.return = j), b);
        Ol(j, b);
      }
      return null;
    }
    function V(j, b, P, X) {
      var me = b !== null ? b.key : null;
      if ((typeof P == 'string' && P !== '') || typeof P == 'number')
        return me !== null ? null : C(j, b, '' + P, X);
      if (typeof P == 'object' && P !== null) {
        switch (P.$$typeof) {
          case te:
            return P.key === me ? E(j, b, P, X) : null;
          case A:
            return P.key === me ? R(j, b, P, X) : null;
          case ye:
            return ((me = P._init), V(j, b, me(P._payload), X));
        }
        if (pt(P) || re(P)) return me !== null ? null : H(j, b, P, X, null);
        Ol(j, P);
      }
      return null;
    }
    function ne(j, b, P, X, me) {
      if ((typeof X == 'string' && X !== '') || typeof X == 'number')
        return ((j = j.get(P) || null), C(b, j, '' + X, me));
      if (typeof X == 'object' && X !== null) {
        switch (X.$$typeof) {
          case te:
            return ((j = j.get(X.key === null ? P : X.key) || null), E(b, j, X, me));
          case A:
            return ((j = j.get(X.key === null ? P : X.key) || null), R(b, j, X, me));
          case ye:
            var we = X._init;
            return ne(j, b, P, we(X._payload), me);
        }
        if (pt(X) || re(X)) return ((j = j.get(P) || null), H(b, j, X, me, null));
        Ol(b, X);
      }
      return null;
    }
    function le(j, b, P, X) {
      for (
        var me = null, we = null, ke = b, Ce = (b = 0), ft = null;
        ke !== null && Ce < P.length;
        Ce++
      ) {
        ke.index > Ce ? ((ft = ke), (ke = null)) : (ft = ke.sibling);
        var Me = V(j, ke, P[Ce], X);
        if (Me === null) {
          ke === null && (ke = ft);
          break;
        }
        (e && ke && Me.alternate === null && t(j, ke),
          (b = f(Me, b, Ce)),
          we === null ? (me = Me) : (we.sibling = Me),
          (we = Me),
          (ke = ft));
      }
      if (Ce === P.length) return (r(j, ke), Ge && gr(j, Ce), me);
      if (ke === null) {
        for (; Ce < P.length; Ce++)
          ((ke = K(j, P[Ce], X)),
            ke !== null &&
              ((b = f(ke, b, Ce)), we === null ? (me = ke) : (we.sibling = ke), (we = ke)));
        return (Ge && gr(j, Ce), me);
      }
      for (ke = o(j, ke); Ce < P.length; Ce++)
        ((ft = ne(ke, j, Ce, P[Ce], X)),
          ft !== null &&
            (e && ft.alternate !== null && ke.delete(ft.key === null ? Ce : ft.key),
            (b = f(ft, b, Ce)),
            we === null ? (me = ft) : (we.sibling = ft),
            (we = ft)));
      return (
        e &&
          ke.forEach(function (sr) {
            return t(j, sr);
          }),
        Ge && gr(j, Ce),
        me
      );
    }
    function de(j, b, P, X) {
      var me = re(P);
      if (typeof me != 'function') throw Error(l(150));
      if (((P = me.call(P)), P == null)) throw Error(l(151));
      for (
        var we = (me = null), ke = b, Ce = (b = 0), ft = null, Me = P.next();
        ke !== null && !Me.done;
        Ce++, Me = P.next()
      ) {
        ke.index > Ce ? ((ft = ke), (ke = null)) : (ft = ke.sibling);
        var sr = V(j, ke, Me.value, X);
        if (sr === null) {
          ke === null && (ke = ft);
          break;
        }
        (e && ke && sr.alternate === null && t(j, ke),
          (b = f(sr, b, Ce)),
          we === null ? (me = sr) : (we.sibling = sr),
          (we = sr),
          (ke = ft));
      }
      if (Me.done) return (r(j, ke), Ge && gr(j, Ce), me);
      if (ke === null) {
        for (; !Me.done; Ce++, Me = P.next())
          ((Me = K(j, Me.value, X)),
            Me !== null &&
              ((b = f(Me, b, Ce)), we === null ? (me = Me) : (we.sibling = Me), (we = Me)));
        return (Ge && gr(j, Ce), me);
      }
      for (ke = o(j, ke); !Me.done; Ce++, Me = P.next())
        ((Me = ne(ke, j, Ce, Me.value, X)),
          Me !== null &&
            (e && Me.alternate !== null && ke.delete(Me.key === null ? Ce : Me.key),
            (b = f(Me, b, Ce)),
            we === null ? (me = Me) : (we.sibling = Me),
            (we = Me)));
      return (
        e &&
          ke.forEach(function (p0) {
            return t(j, p0);
          }),
        Ge && gr(j, Ce),
        me
      );
    }
    function rt(j, b, P, X) {
      if (
        (typeof P == 'object' &&
          P !== null &&
          P.type === $ &&
          P.key === null &&
          (P = P.props.children),
        typeof P == 'object' && P !== null)
      ) {
        switch (P.$$typeof) {
          case te:
            e: {
              for (var me = P.key, we = b; we !== null; ) {
                if (we.key === me) {
                  if (((me = P.type), me === $)) {
                    if (we.tag === 7) {
                      (r(j, we.sibling), (b = c(we, P.props.children)), (b.return = j), (j = b));
                      break e;
                    }
                  } else if (
                    we.elementType === me ||
                    (typeof me == 'object' &&
                      me !== null &&
                      me.$$typeof === ye &&
                      Vc(me) === we.type)
                  ) {
                    (r(j, we.sibling),
                      (b = c(we, P.props)),
                      (b.ref = Li(j, we, P)),
                      (b.return = j),
                      (j = b));
                    break e;
                  }
                  r(j, we);
                  break;
                } else t(j, we);
                we = we.sibling;
              }
              P.type === $
                ? ((b = Cr(P.props.children, j.mode, X, P.key)), (b.return = j), (j = b))
                : ((X = ro(P.type, P.key, P.props, null, j.mode, X)),
                  (X.ref = Li(j, b, P)),
                  (X.return = j),
                  (j = X));
            }
            return y(j);
          case A:
            e: {
              for (we = P.key; b !== null; ) {
                if (b.key === we)
                  if (
                    b.tag === 4 &&
                    b.stateNode.containerInfo === P.containerInfo &&
                    b.stateNode.implementation === P.implementation
                  ) {
                    (r(j, b.sibling), (b = c(b, P.children || [])), (b.return = j), (j = b));
                    break e;
                  } else {
                    r(j, b);
                    break;
                  }
                else t(j, b);
                b = b.sibling;
              }
              ((b = aa(P, j.mode, X)), (b.return = j), (j = b));
            }
            return y(j);
          case ye:
            return ((we = P._init), rt(j, b, we(P._payload), X));
        }
        if (pt(P)) return le(j, b, P, X);
        if (re(P)) return de(j, b, P, X);
        Ol(j, P);
      }
      return (typeof P == 'string' && P !== '') || typeof P == 'number'
        ? ((P = '' + P),
          b !== null && b.tag === 6
            ? (r(j, b.sibling), (b = c(b, P)), (b.return = j), (j = b))
            : (r(j, b), (b = sa(P, j.mode, X)), (b.return = j), (j = b)),
          y(j))
        : r(j, b);
    }
    return rt;
  }
  var qr = $c(!0),
    Uc = $c(!1),
    Rl = Yn(null),
    Ml = null,
    Hr = null,
    ys = null;
  function vs() {
    ys = Hr = Ml = null;
  }
  function ws(e) {
    var t = Rl.current;
    (Qe(Rl), (e._currentValue = t));
  }
  function ks(e, t, r) {
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
  function Qr(e, t) {
    ((Ml = e),
      (ys = Hr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Lt = !0), (e.firstContext = null)));
  }
  function en(e) {
    var t = e._currentValue;
    if (ys !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Hr === null)) {
        if (Ml === null) throw Error(l(308));
        ((Hr = e), (Ml.dependencies = { lanes: 0, firstContext: e }));
      } else Hr = Hr.next = e;
    return t;
  }
  var yr = null;
  function xs(e) {
    yr === null ? (yr = [e]) : yr.push(e);
  }
  function qc(e, t, r, o) {
    var c = t.interleaved;
    return (
      c === null ? ((r.next = r), xs(t)) : ((r.next = c.next), (c.next = r)),
      (t.interleaved = r),
      Ln(e, o)
    );
  }
  function Ln(e, t) {
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
  var Zn = !1;
  function Ss(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Hc(e, t) {
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
  function Pn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function er(e, t, r) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (Re & 2) !== 0)) {
      var c = o.pending;
      return (
        c === null ? (t.next = t) : ((t.next = c.next), (c.next = t)),
        (o.pending = t),
        Ln(e, r)
      );
    }
    return (
      (c = o.interleaved),
      c === null ? ((t.next = t), xs(o)) : ((t.next = c.next), (c.next = t)),
      (o.interleaved = t),
      Ln(e, r)
    );
  }
  function Al(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), Ao(e, r));
    }
  }
  function Qc(e, t) {
    var r = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), r === o)) {
      var c = null,
        f = null;
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
          (f === null ? (c = f = y) : (f = f.next = y), (r = r.next));
        } while (r !== null);
        f === null ? (c = f = t) : (f = f.next = t);
      } else c = f = t;
      ((r = {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: f,
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
  function Dl(e, t, r, o) {
    var c = e.updateQueue;
    Zn = !1;
    var f = c.firstBaseUpdate,
      y = c.lastBaseUpdate,
      C = c.shared.pending;
    if (C !== null) {
      c.shared.pending = null;
      var E = C,
        R = E.next;
      ((E.next = null), y === null ? (f = R) : (y.next = R), (y = E));
      var H = e.alternate;
      H !== null &&
        ((H = H.updateQueue),
        (C = H.lastBaseUpdate),
        C !== y && (C === null ? (H.firstBaseUpdate = R) : (C.next = R), (H.lastBaseUpdate = E)));
    }
    if (f !== null) {
      var K = c.baseState;
      ((y = 0), (H = R = E = null), (C = f));
      do {
        var V = C.lane,
          ne = C.eventTime;
        if ((o & V) === V) {
          H !== null &&
            (H = H.next =
              {
                eventTime: ne,
                lane: 0,
                tag: C.tag,
                payload: C.payload,
                callback: C.callback,
                next: null,
              });
          e: {
            var le = e,
              de = C;
            switch (((V = t), (ne = r), de.tag)) {
              case 1:
                if (((le = de.payload), typeof le == 'function')) {
                  K = le.call(ne, K, V);
                  break e;
                }
                K = le;
                break e;
              case 3:
                le.flags = (le.flags & -65537) | 128;
              case 0:
                if (
                  ((le = de.payload),
                  (V = typeof le == 'function' ? le.call(ne, K, V) : le),
                  V == null)
                )
                  break e;
                K = S({}, K, V);
                break e;
              case 2:
                Zn = !0;
            }
          }
          C.callback !== null &&
            C.lane !== 0 &&
            ((e.flags |= 64), (V = c.effects), V === null ? (c.effects = [C]) : V.push(C));
        } else
          ((ne = {
            eventTime: ne,
            lane: V,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null,
          }),
            H === null ? ((R = H = ne), (E = K)) : (H = H.next = ne),
            (y |= V));
        if (((C = C.next), C === null)) {
          if (((C = c.shared.pending), C === null)) break;
          ((V = C),
            (C = V.next),
            (V.next = null),
            (c.lastBaseUpdate = V),
            (c.shared.pending = null));
        }
      } while (!0);
      if (
        (H === null && (E = K),
        (c.baseState = E),
        (c.firstBaseUpdate = R),
        (c.lastBaseUpdate = H),
        (t = c.shared.interleaved),
        t !== null)
      ) {
        c = t;
        do ((y |= c.lane), (c = c.next));
        while (c !== t);
      } else f === null && (c.shared.lanes = 0);
      ((kr |= y), (e.lanes = y), (e.memoizedState = K));
    }
  }
  function Kc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var o = e[t],
          c = o.callback;
        if (c !== null) {
          if (((o.callback = null), (o = r), typeof c != 'function')) throw Error(l(191, c));
          c.call(o);
        }
      }
  }
  var Pi = {},
    kn = Yn(Pi),
    Oi = Yn(Pi),
    Ri = Yn(Pi);
  function vr(e) {
    if (e === Pi) throw Error(l(174));
    return e;
  }
  function _s(e, t) {
    switch ((Ve(Ri, t), Ve(Oi, e), Ve(kn, Pi), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Q(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Q(t, e)));
    }
    (Qe(kn), Ve(kn, t));
  }
  function Kr() {
    (Qe(kn), Qe(Oi), Qe(Ri));
  }
  function Gc(e) {
    vr(Ri.current);
    var t = vr(kn.current),
      r = Q(t, e.type);
    t !== r && (Ve(Oi, e), Ve(kn, r));
  }
  function Cs(e) {
    Oi.current === e && (Qe(kn), Qe(Oi));
  }
  var Ye = Yn(0);
  function zl(e) {
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
  var Es = [];
  function bs() {
    for (var e = 0; e < Es.length; e++) Es[e]._workInProgressVersionPrimary = null;
    Es.length = 0;
  }
  var Fl = ee.ReactCurrentDispatcher,
    Ns = ee.ReactCurrentBatchConfig,
    wr = 0,
    Xe = null,
    at = null,
    ct = null,
    Bl = !1,
    Mi = !1,
    Ai = 0,
    Mm = 0;
  function kt() {
    throw Error(l(321));
  }
  function Is(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!an(e[r], t[r])) return !1;
    return !0;
  }
  function Ts(e, t, r, o, c, f) {
    if (
      ((wr = f),
      (Xe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Fl.current = e === null || e.memoizedState === null ? Fm : Bm),
      (e = r(o, c)),
      Mi)
    ) {
      f = 0;
      do {
        if (((Mi = !1), (Ai = 0), 25 <= f)) throw Error(l(301));
        ((f += 1), (ct = at = null), (t.updateQueue = null), (Fl.current = Wm), (e = r(o, c)));
      } while (Mi);
    }
    if (
      ((Fl.current = $l),
      (t = at !== null && at.next !== null),
      (wr = 0),
      (ct = at = Xe = null),
      (Bl = !1),
      t)
    )
      throw Error(l(300));
    return e;
  }
  function js() {
    var e = Ai !== 0;
    return ((Ai = 0), e);
  }
  function xn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (ct === null ? (Xe.memoizedState = ct = e) : (ct = ct.next = e), ct);
  }
  function tn() {
    if (at === null) {
      var e = Xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = at.next;
    var t = ct === null ? Xe.memoizedState : ct.next;
    if (t !== null) ((ct = t), (at = e));
    else {
      if (e === null) throw Error(l(310));
      ((at = e),
        (e = {
          memoizedState: at.memoizedState,
          baseState: at.baseState,
          baseQueue: at.baseQueue,
          queue: at.queue,
          next: null,
        }),
        ct === null ? (Xe.memoizedState = ct = e) : (ct = ct.next = e));
    }
    return ct;
  }
  function Di(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Ls(e) {
    var t = tn(),
      r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var o = at,
      c = o.baseQueue,
      f = r.pending;
    if (f !== null) {
      if (c !== null) {
        var y = c.next;
        ((c.next = f.next), (f.next = y));
      }
      ((o.baseQueue = c = f), (r.pending = null));
    }
    if (c !== null) {
      ((f = c.next), (o = o.baseState));
      var C = (y = null),
        E = null,
        R = f;
      do {
        var H = R.lane;
        if ((wr & H) === H)
          (E !== null &&
            (E = E.next =
              {
                lane: 0,
                action: R.action,
                hasEagerState: R.hasEagerState,
                eagerState: R.eagerState,
                next: null,
              }),
            (o = R.hasEagerState ? R.eagerState : e(o, R.action)));
        else {
          var K = {
            lane: H,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          };
          (E === null ? ((C = E = K), (y = o)) : (E = E.next = K), (Xe.lanes |= H), (kr |= H));
        }
        R = R.next;
      } while (R !== null && R !== f);
      (E === null ? (y = o) : (E.next = C),
        an(o, t.memoizedState) || (Lt = !0),
        (t.memoizedState = o),
        (t.baseState = y),
        (t.baseQueue = E),
        (r.lastRenderedState = o));
    }
    if (((e = r.interleaved), e !== null)) {
      c = e;
      do ((f = c.lane), (Xe.lanes |= f), (kr |= f), (c = c.next));
      while (c !== e);
    } else c === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function Ps(e) {
    var t = tn(),
      r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var o = r.dispatch,
      c = r.pending,
      f = t.memoizedState;
    if (c !== null) {
      r.pending = null;
      var y = (c = c.next);
      do ((f = e(f, y.action)), (y = y.next));
      while (y !== c);
      (an(f, t.memoizedState) || (Lt = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (r.lastRenderedState = f));
    }
    return [f, o];
  }
  function Yc() {}
  function Xc(e, t) {
    var r = Xe,
      o = tn(),
      c = t(),
      f = !an(o.memoizedState, c);
    if (
      (f && ((o.memoizedState = c), (Lt = !0)),
      (o = o.queue),
      Os(ed.bind(null, r, o, e), [e]),
      o.getSnapshot !== t || f || (ct !== null && ct.memoizedState.tag & 1))
    ) {
      if (((r.flags |= 2048), zi(9, Zc.bind(null, r, o, c, t), void 0, null), dt === null))
        throw Error(l(349));
      (wr & 30) !== 0 || Jc(r, t, c);
    }
    return c;
  }
  function Jc(e, t, r) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Xe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Xe.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
  }
  function Zc(e, t, r, o) {
    ((t.value = r), (t.getSnapshot = o), td(t) && nd(e));
  }
  function ed(e, t, r) {
    return r(function () {
      td(t) && nd(e);
    });
  }
  function td(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !an(e, r);
    } catch {
      return !0;
    }
  }
  function nd(e) {
    var t = Ln(e, 1);
    t !== null && pn(t, e, 1, -1);
  }
  function rd(e) {
    var t = xn();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Di,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = zm.bind(null, Xe, e)),
      [t.memoizedState, e]
    );
  }
  function zi(e, t, r, o) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: o, next: null }),
      (t = Xe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Xe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((o = r.next), (r.next = e), (e.next = o), (t.lastEffect = e))),
      e
    );
  }
  function id() {
    return tn().memoizedState;
  }
  function Wl(e, t, r, o) {
    var c = xn();
    ((Xe.flags |= e), (c.memoizedState = zi(1 | t, r, void 0, o === void 0 ? null : o)));
  }
  function Vl(e, t, r, o) {
    var c = tn();
    o = o === void 0 ? null : o;
    var f = void 0;
    if (at !== null) {
      var y = at.memoizedState;
      if (((f = y.destroy), o !== null && Is(o, y.deps))) {
        c.memoizedState = zi(t, r, f, o);
        return;
      }
    }
    ((Xe.flags |= e), (c.memoizedState = zi(1 | t, r, f, o)));
  }
  function ld(e, t) {
    return Wl(8390656, 8, e, t);
  }
  function Os(e, t) {
    return Vl(2048, 8, e, t);
  }
  function od(e, t) {
    return Vl(4, 2, e, t);
  }
  function sd(e, t) {
    return Vl(4, 4, e, t);
  }
  function ad(e, t) {
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
  function ud(e, t, r) {
    return ((r = r != null ? r.concat([e]) : null), Vl(4, 4, ad.bind(null, t, e), r));
  }
  function Rs() {}
  function cd(e, t) {
    var r = tn();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && Is(t, o[1]) ? o[0] : ((r.memoizedState = [e, t]), e);
  }
  function dd(e, t) {
    var r = tn();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && Is(t, o[1])
      ? o[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function fd(e, t, r) {
    return (wr & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Lt = !0)), (e.memoizedState = r))
      : (an(r, t) || ((r = Vu()), (Xe.lanes |= r), (kr |= r), (e.baseState = !0)), t);
  }
  function Am(e, t) {
    var r = Fe;
    ((Fe = r !== 0 && 4 > r ? r : 4), e(!0));
    var o = Ns.transition;
    Ns.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((Fe = r), (Ns.transition = o));
    }
  }
  function pd() {
    return tn().memoizedState;
  }
  function Dm(e, t, r) {
    var o = ir(e);
    if (((r = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null }), hd(e)))
      md(t, r);
    else if (((r = qc(e, t, r, o)), r !== null)) {
      var c = Nt();
      (pn(r, e, o, c), gd(r, t, o));
    }
  }
  function zm(e, t, r) {
    var o = ir(e),
      c = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (hd(e)) md(t, c);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var y = t.lastRenderedState,
            C = f(y, r);
          if (((c.hasEagerState = !0), (c.eagerState = C), an(C, y))) {
            var E = t.interleaved;
            (E === null ? ((c.next = c), xs(t)) : ((c.next = E.next), (E.next = c)),
              (t.interleaved = c));
            return;
          }
        } catch {
        } finally {
        }
      ((r = qc(e, t, c, o)), r !== null && ((c = Nt()), pn(r, e, o, c), gd(r, t, o)));
    }
  }
  function hd(e) {
    var t = e.alternate;
    return e === Xe || (t !== null && t === Xe);
  }
  function md(e, t) {
    Mi = Bl = !0;
    var r = e.pending;
    (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t));
  }
  function gd(e, t, r) {
    if ((r & 4194240) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), Ao(e, r));
    }
  }
  var $l = {
      readContext: en,
      useCallback: kt,
      useContext: kt,
      useEffect: kt,
      useImperativeHandle: kt,
      useInsertionEffect: kt,
      useLayoutEffect: kt,
      useMemo: kt,
      useReducer: kt,
      useRef: kt,
      useState: kt,
      useDebugValue: kt,
      useDeferredValue: kt,
      useTransition: kt,
      useMutableSource: kt,
      useSyncExternalStore: kt,
      useId: kt,
      unstable_isNewReconciler: !1,
    },
    Fm = {
      readContext: en,
      useCallback: function (e, t) {
        return ((xn().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: en,
      useEffect: ld,
      useImperativeHandle: function (e, t, r) {
        return ((r = r != null ? r.concat([e]) : null), Wl(4194308, 4, ad.bind(null, t, e), r));
      },
      useLayoutEffect: function (e, t) {
        return Wl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Wl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = xn();
        return ((t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, r) {
        var o = xn();
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
          (e = e.dispatch = Dm.bind(null, Xe, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = xn();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: rd,
      useDebugValue: Rs,
      useDeferredValue: function (e) {
        return (xn().memoizedState = e);
      },
      useTransition: function () {
        var e = rd(!1),
          t = e[0];
        return ((e = Am.bind(null, e[1])), (xn().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var o = Xe,
          c = xn();
        if (Ge) {
          if (r === void 0) throw Error(l(407));
          r = r();
        } else {
          if (((r = t()), dt === null)) throw Error(l(349));
          (wr & 30) !== 0 || Jc(o, t, r);
        }
        c.memoizedState = r;
        var f = { value: r, getSnapshot: t };
        return (
          (c.queue = f),
          ld(ed.bind(null, o, f, e), [e]),
          (o.flags |= 2048),
          zi(9, Zc.bind(null, o, f, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = xn(),
          t = dt.identifierPrefix;
        if (Ge) {
          var r = jn,
            o = Tn;
          ((r = (o & ~(1 << (32 - sn(o) - 1))).toString(32) + r),
            (t = ':' + t + 'R' + r),
            (r = Ai++),
            0 < r && (t += 'H' + r.toString(32)),
            (t += ':'));
        } else ((r = Mm++), (t = ':' + t + 'r' + r.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Bm = {
      readContext: en,
      useCallback: cd,
      useContext: en,
      useEffect: Os,
      useImperativeHandle: ud,
      useInsertionEffect: od,
      useLayoutEffect: sd,
      useMemo: dd,
      useReducer: Ls,
      useRef: id,
      useState: function () {
        return Ls(Di);
      },
      useDebugValue: Rs,
      useDeferredValue: function (e) {
        var t = tn();
        return fd(t, at.memoizedState, e);
      },
      useTransition: function () {
        var e = Ls(Di)[0],
          t = tn().memoizedState;
        return [e, t];
      },
      useMutableSource: Yc,
      useSyncExternalStore: Xc,
      useId: pd,
      unstable_isNewReconciler: !1,
    },
    Wm = {
      readContext: en,
      useCallback: cd,
      useContext: en,
      useEffect: Os,
      useImperativeHandle: ud,
      useInsertionEffect: od,
      useLayoutEffect: sd,
      useMemo: dd,
      useReducer: Ps,
      useRef: id,
      useState: function () {
        return Ps(Di);
      },
      useDebugValue: Rs,
      useDeferredValue: function (e) {
        var t = tn();
        return at === null ? (t.memoizedState = e) : fd(t, at.memoizedState, e);
      },
      useTransition: function () {
        var e = Ps(Di)[0],
          t = tn().memoizedState;
        return [e, t];
      },
      useMutableSource: Yc,
      useSyncExternalStore: Xc,
      useId: pd,
      unstable_isNewReconciler: !1,
    };
  function cn(e, t) {
    if (e && e.defaultProps) {
      ((t = S({}, t)), (e = e.defaultProps));
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function Ms(e, t, r, o) {
    ((t = e.memoizedState),
      (r = r(o, t)),
      (r = r == null ? t : S({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r));
  }
  var Ul = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? fr(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var o = Nt(),
        c = ir(e),
        f = Pn(o, c);
      ((f.payload = t),
        r != null && (f.callback = r),
        (t = er(e, f, c)),
        t !== null && (pn(t, e, c, o), Al(t, e, c)));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var o = Nt(),
        c = ir(e),
        f = Pn(o, c);
      ((f.tag = 1),
        (f.payload = t),
        r != null && (f.callback = r),
        (t = er(e, f, c)),
        t !== null && (pn(t, e, c, o), Al(t, e, c)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Nt(),
        o = ir(e),
        c = Pn(r, o);
      ((c.tag = 2),
        t != null && (c.callback = t),
        (t = er(e, c, o)),
        t !== null && (pn(t, e, o, r), Al(t, e, o)));
    },
  };
  function yd(e, t, r, o, c, f, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(o, f, y)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ci(r, o) || !Ci(c, f)
          : !0
    );
  }
  function vd(e, t, r) {
    var o = !1,
      c = Xn,
      f = t.contextType;
    return (
      typeof f == 'object' && f !== null
        ? (f = en(f))
        : ((c = jt(t) ? hr : wt.current),
          (o = t.contextTypes),
          (f = (o = o != null) ? Wr(e, c) : Xn)),
      (t = new t(r, f)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ul),
      (e.stateNode = t),
      (t._reactInternals = e),
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = c),
        (e.__reactInternalMemoizedMaskedChildContext = f)),
      t
    );
  }
  function wd(e, t, r, o) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, o),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(r, o),
      t.state !== e && Ul.enqueueReplaceState(t, t.state, null));
  }
  function As(e, t, r, o) {
    var c = e.stateNode;
    ((c.props = r), (c.state = e.memoizedState), (c.refs = {}), Ss(e));
    var f = t.contextType;
    (typeof f == 'object' && f !== null
      ? (c.context = en(f))
      : ((f = jt(t) ? hr : wt.current), (c.context = Wr(e, f))),
      (c.state = e.memoizedState),
      (f = t.getDerivedStateFromProps),
      typeof f == 'function' && (Ms(e, t, f, r), (c.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof c.getSnapshotBeforeUpdate == 'function' ||
        (typeof c.UNSAFE_componentWillMount != 'function' &&
          typeof c.componentWillMount != 'function') ||
        ((t = c.state),
        typeof c.componentWillMount == 'function' && c.componentWillMount(),
        typeof c.UNSAFE_componentWillMount == 'function' && c.UNSAFE_componentWillMount(),
        t !== c.state && Ul.enqueueReplaceState(c, c.state, null),
        Dl(e, r, c, o),
        (c.state = e.memoizedState)),
      typeof c.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function Gr(e, t) {
    try {
      var r = '',
        o = t;
      do ((r += _e(o)), (o = o.return));
      while (o);
      var c = r;
    } catch (f) {
      c =
        `
Error generating stack: ` +
        f.message +
        `
` +
        f.stack;
    }
    return { value: e, source: t, stack: c, digest: null };
  }
  function Ds(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function zs(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var Vm = typeof WeakMap == 'function' ? WeakMap : Map;
  function kd(e, t, r) {
    ((r = Pn(-1, r)), (r.tag = 3), (r.payload = { element: null }));
    var o = t.value;
    return (
      (r.callback = function () {
        (Xl || ((Xl = !0), (Zs = o)), zs(e, t));
      }),
      r
    );
  }
  function xd(e, t, r) {
    ((r = Pn(-1, r)), (r.tag = 3));
    var o = e.type.getDerivedStateFromError;
    if (typeof o == 'function') {
      var c = t.value;
      ((r.payload = function () {
        return o(c);
      }),
        (r.callback = function () {
          zs(e, t);
        }));
    }
    var f = e.stateNode;
    return (
      f !== null &&
        typeof f.componentDidCatch == 'function' &&
        (r.callback = function () {
          (zs(e, t),
            typeof o != 'function' && (nr === null ? (nr = new Set([this])) : nr.add(this)));
          var y = t.stack;
          this.componentDidCatch(t.value, { componentStack: y !== null ? y : '' });
        }),
      r
    );
  }
  function Sd(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Vm();
      var c = new Set();
      o.set(t, c);
    } else ((c = o.get(t)), c === void 0 && ((c = new Set()), o.set(t, c)));
    c.has(r) || (c.add(r), (e = n0.bind(null, e, t, r)), t.then(e, e));
  }
  function _d(e) {
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
  function Cd(e, t, r, o, c) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null ? (r.tag = 17) : ((t = Pn(-1, 1)), (t.tag = 2), er(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = c), e);
  }
  var $m = ee.ReactCurrentOwner,
    Lt = !1;
  function bt(e, t, r, o) {
    t.child = e === null ? Uc(t, null, r, o) : qr(t, e.child, r, o);
  }
  function Ed(e, t, r, o, c) {
    r = r.render;
    var f = t.ref;
    return (
      Qr(t, c),
      (o = Ts(e, t, r, o, f, c)),
      (r = js()),
      e !== null && !Lt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~c), On(e, t, c))
        : (Ge && r && fs(t), (t.flags |= 1), bt(e, t, o, c), t.child)
    );
  }
  function bd(e, t, r, o, c) {
    if (e === null) {
      var f = r.type;
      return typeof f == 'function' &&
        !oa(f) &&
        f.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = f), Nd(e, t, f, o, c))
        : ((e = ro(r.type, null, o, t, t.mode, c)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((f = e.child), (e.lanes & c) === 0)) {
      var y = f.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : Ci), r(y, o) && e.ref === t.ref))
        return On(e, t, c);
    }
    return ((t.flags |= 1), (e = or(f, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Nd(e, t, r, o, c) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Ci(f, o) && e.ref === t.ref)
        if (((Lt = !1), (t.pendingProps = o = f), (e.lanes & c) !== 0))
          (e.flags & 131072) !== 0 && (Lt = !0);
        else return ((t.lanes = e.lanes), On(e, t, c));
    }
    return Fs(e, t, r, o, c);
  }
  function Id(e, t, r) {
    var o = t.pendingProps,
      c = o.children,
      f = e !== null ? e.memoizedState : null;
    if (o.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          Ve(Xr, qt),
          (qt |= r));
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = f !== null ? f.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            Ve(Xr, qt),
            (qt |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (o = f !== null ? f.baseLanes : r),
          Ve(Xr, qt),
          (qt |= o));
      }
    else
      (f !== null ? ((o = f.baseLanes | r), (t.memoizedState = null)) : (o = r),
        Ve(Xr, qt),
        (qt |= o));
    return (bt(e, t, c, r), t.child);
  }
  function Td(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Fs(e, t, r, o, c) {
    var f = jt(r) ? hr : wt.current;
    return (
      (f = Wr(t, f)),
      Qr(t, c),
      (r = Ts(e, t, r, o, f, c)),
      (o = js()),
      e !== null && !Lt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~c), On(e, t, c))
        : (Ge && o && fs(t), (t.flags |= 1), bt(e, t, r, c), t.child)
    );
  }
  function jd(e, t, r, o, c) {
    if (jt(r)) {
      var f = !0;
      Il(t);
    } else f = !1;
    if ((Qr(t, c), t.stateNode === null)) (Hl(e, t), vd(t, r, o), As(t, r, o, c), (o = !0));
    else if (e === null) {
      var y = t.stateNode,
        C = t.memoizedProps;
      y.props = C;
      var E = y.context,
        R = r.contextType;
      typeof R == 'object' && R !== null
        ? (R = en(R))
        : ((R = jt(r) ? hr : wt.current), (R = Wr(t, R)));
      var H = r.getDerivedStateFromProps,
        K = typeof H == 'function' || typeof y.getSnapshotBeforeUpdate == 'function';
      (K ||
        (typeof y.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof y.componentWillReceiveProps != 'function') ||
        ((C !== o || E !== R) && wd(t, y, o, R)),
        (Zn = !1));
      var V = t.memoizedState;
      ((y.state = V),
        Dl(t, o, y, c),
        (E = t.memoizedState),
        C !== o || V !== E || Tt.current || Zn
          ? (typeof H == 'function' && (Ms(t, r, H, o), (E = t.memoizedState)),
            (C = Zn || yd(t, r, C, o, V, E, R))
              ? (K ||
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
            (y.context = R),
            (o = C))
          : (typeof y.componentDidMount == 'function' && (t.flags |= 4194308), (o = !1)));
    } else {
      ((y = t.stateNode),
        Hc(e, t),
        (C = t.memoizedProps),
        (R = t.type === t.elementType ? C : cn(t.type, C)),
        (y.props = R),
        (K = t.pendingProps),
        (V = y.context),
        (E = r.contextType),
        typeof E == 'object' && E !== null
          ? (E = en(E))
          : ((E = jt(r) ? hr : wt.current), (E = Wr(t, E))));
      var ne = r.getDerivedStateFromProps;
      ((H = typeof ne == 'function' || typeof y.getSnapshotBeforeUpdate == 'function') ||
        (typeof y.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof y.componentWillReceiveProps != 'function') ||
        ((C !== K || V !== E) && wd(t, y, o, E)),
        (Zn = !1),
        (V = t.memoizedState),
        (y.state = V),
        Dl(t, o, y, c));
      var le = t.memoizedState;
      C !== K || V !== le || Tt.current || Zn
        ? (typeof ne == 'function' && (Ms(t, r, ne, o), (le = t.memoizedState)),
          (R = Zn || yd(t, r, R, o, V, le, E) || !1)
            ? (H ||
                (typeof y.UNSAFE_componentWillUpdate != 'function' &&
                  typeof y.componentWillUpdate != 'function') ||
                (typeof y.componentWillUpdate == 'function' && y.componentWillUpdate(o, le, E),
                typeof y.UNSAFE_componentWillUpdate == 'function' &&
                  y.UNSAFE_componentWillUpdate(o, le, E)),
              typeof y.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof y.componentDidUpdate != 'function' ||
                (C === e.memoizedProps && V === e.memoizedState) ||
                (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate != 'function' ||
                (C === e.memoizedProps && V === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = le)),
          (y.props = o),
          (y.state = le),
          (y.context = E),
          (o = R))
        : (typeof y.componentDidUpdate != 'function' ||
            (C === e.memoizedProps && V === e.memoizedState) ||
            (t.flags |= 4),
          typeof y.getSnapshotBeforeUpdate != 'function' ||
            (C === e.memoizedProps && V === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return Bs(e, t, r, o, f, c);
  }
  function Bs(e, t, r, o, c, f) {
    Td(e, t);
    var y = (t.flags & 128) !== 0;
    if (!o && !y) return (c && Mc(t, r, !1), On(e, t, f));
    ((o = t.stateNode), ($m.current = t));
    var C = y && typeof r.getDerivedStateFromError != 'function' ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && y
        ? ((t.child = qr(t, e.child, null, f)), (t.child = qr(t, null, C, f)))
        : bt(e, t, C, f),
      (t.memoizedState = o.state),
      c && Mc(t, r, !0),
      t.child
    );
  }
  function Ld(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Oc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Oc(e, t.context, !1),
      _s(e, t.containerInfo));
  }
  function Pd(e, t, r, o, c) {
    return (Ur(), gs(c), (t.flags |= 256), bt(e, t, r, o), t.child);
  }
  var Ws = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Vs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Od(e, t, r) {
    var o = t.pendingProps,
      c = Ye.current,
      f = !1,
      y = (t.flags & 128) !== 0,
      C;
    if (
      ((C = y) || (C = e !== null && e.memoizedState === null ? !1 : (c & 2) !== 0),
      C ? ((f = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (c |= 1),
      Ve(Ye, c & 1),
      e === null)
    )
      return (
        ms(t),
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
            f
              ? ((o = t.mode),
                (f = t.child),
                (y = { mode: 'hidden', children: y }),
                (o & 1) === 0 && f !== null
                  ? ((f.childLanes = 0), (f.pendingProps = y))
                  : (f = io(y, o, 0, null)),
                (e = Cr(e, o, r, null)),
                (f.return = t),
                (e.return = t),
                (f.sibling = e),
                (t.child = f),
                (t.child.memoizedState = Vs(r)),
                (t.memoizedState = Ws),
                e)
              : $s(t, y))
      );
    if (((c = e.memoizedState), c !== null && ((C = c.dehydrated), C !== null)))
      return Um(e, t, y, o, C, c, r);
    if (f) {
      ((f = o.fallback), (y = t.mode), (c = e.child), (C = c.sibling));
      var E = { mode: 'hidden', children: o.children };
      return (
        (y & 1) === 0 && t.child !== c
          ? ((o = t.child), (o.childLanes = 0), (o.pendingProps = E), (t.deletions = null))
          : ((o = or(c, E)), (o.subtreeFlags = c.subtreeFlags & 14680064)),
        C !== null ? (f = or(C, f)) : ((f = Cr(f, y, r, null)), (f.flags |= 2)),
        (f.return = t),
        (o.return = t),
        (o.sibling = f),
        (t.child = o),
        (o = f),
        (f = t.child),
        (y = e.child.memoizedState),
        (y =
          y === null
            ? Vs(r)
            : { baseLanes: y.baseLanes | r, cachePool: null, transitions: y.transitions }),
        (f.memoizedState = y),
        (f.childLanes = e.childLanes & ~r),
        (t.memoizedState = Ws),
        o
      );
    }
    return (
      (f = e.child),
      (e = f.sibling),
      (o = or(f, { mode: 'visible', children: o.children })),
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
  function $s(e, t) {
    return (
      (t = io({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ql(e, t, r, o) {
    return (
      o !== null && gs(o),
      qr(t, e.child, null, r),
      (e = $s(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Um(e, t, r, o, c, f, y) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (o = Ds(Error(l(422)))), ql(e, t, y, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((f = o.fallback),
            (c = t.mode),
            (o = io({ mode: 'visible', children: o.children }, c, 0, null)),
            (f = Cr(f, c, y, null)),
            (f.flags |= 2),
            (o.return = t),
            (f.return = t),
            (o.sibling = f),
            (t.child = o),
            (t.mode & 1) !== 0 && qr(t, e.child, null, y),
            (t.child.memoizedState = Vs(y)),
            (t.memoizedState = Ws),
            f);
    if ((t.mode & 1) === 0) return ql(e, t, y, null);
    if (c.data === '$!') {
      if (((o = c.nextSibling && c.nextSibling.dataset), o)) var C = o.dgst;
      return ((o = C), (f = Error(l(419))), (o = Ds(f, o, void 0)), ql(e, t, y, o));
    }
    if (((C = (y & e.childLanes) !== 0), Lt || C)) {
      if (((o = dt), o !== null)) {
        switch (y & -y) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        ((c = (c & (o.suspendedLanes | y)) !== 0 ? 0 : c),
          c !== 0 && c !== f.retryLane && ((f.retryLane = c), Ln(e, c), pn(o, e, c, -1)));
      }
      return (la(), (o = Ds(Error(l(421)))), ql(e, t, y, o));
    }
    return c.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = r0.bind(null, e)), (c._reactRetry = t), null)
      : ((e = f.treeContext),
        (Ut = Gn(c.nextSibling)),
        ($t = t),
        (Ge = !0),
        (un = null),
        e !== null &&
          ((Jt[Zt++] = Tn),
          (Jt[Zt++] = jn),
          (Jt[Zt++] = mr),
          (Tn = e.id),
          (jn = e.overflow),
          (mr = t)),
        (t = $s(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function Rd(e, t, r) {
    e.lanes |= t;
    var o = e.alternate;
    (o !== null && (o.lanes |= t), ks(e.return, t, r));
  }
  function Us(e, t, r, o, c) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: r,
          tailMode: c,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = o),
        (f.tail = r),
        (f.tailMode = c));
  }
  function Md(e, t, r) {
    var o = t.pendingProps,
      c = o.revealOrder,
      f = o.tail;
    if ((bt(e, t, o.children, r), (o = Ye.current), (o & 2) !== 0))
      ((o = (o & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Rd(e, r, t);
          else if (e.tag === 19) Rd(e, r, t);
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
    if ((Ve(Ye, o), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (c) {
        case 'forwards':
          for (r = t.child, c = null; r !== null; )
            ((e = r.alternate), e !== null && zl(e) === null && (c = r), (r = r.sibling));
          ((r = c),
            r === null ? ((c = t.child), (t.child = null)) : ((c = r.sibling), (r.sibling = null)),
            Us(t, !1, c, r, f));
          break;
        case 'backwards':
          for (r = null, c = t.child, t.child = null; c !== null; ) {
            if (((e = c.alternate), e !== null && zl(e) === null)) {
              t.child = c;
              break;
            }
            ((e = c.sibling), (c.sibling = r), (r = c), (c = e));
          }
          Us(t, !0, r, null, f);
          break;
        case 'together':
          Us(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Hl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function On(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (kr |= t.lanes), (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, r = or(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
        ((e = e.sibling), (r = r.sibling = or(e, e.pendingProps)), (r.return = t));
      r.sibling = null;
    }
    return t.child;
  }
  function qm(e, t, r) {
    switch (t.tag) {
      case 3:
        (Ld(t), Ur());
        break;
      case 5:
        Gc(t);
        break;
      case 1:
        jt(t.type) && Il(t);
        break;
      case 4:
        _s(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          c = t.memoizedProps.value;
        (Ve(Rl, o._currentValue), (o._currentValue = c));
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (Ve(Ye, Ye.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? Od(e, t, r)
              : (Ve(Ye, Ye.current & 1), (e = On(e, t, r)), e !== null ? e.sibling : null);
        Ve(Ye, Ye.current & 1);
        break;
      case 19:
        if (((o = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return Md(e, t, r);
          t.flags |= 128;
        }
        if (
          ((c = t.memoizedState),
          c !== null && ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          Ve(Ye, Ye.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Id(e, t, r));
    }
    return On(e, t, r);
  }
  var Ad, qs, Dd, zd;
  ((Ad = function (e, t) {
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
    (qs = function () {}),
    (Dd = function (e, t, r, o) {
      var c = e.memoizedProps;
      if (c !== o) {
        ((e = t.stateNode), vr(kn.current));
        var f = null;
        switch (r) {
          case 'input':
            ((c = Bt(e, c)), (o = Bt(e, o)), (f = []));
            break;
          case 'select':
            ((c = S({}, c, { value: void 0 })), (o = S({}, o, { value: void 0 })), (f = []));
            break;
          case 'textarea':
            ((c = Yt(e, c)), (o = Yt(e, o)), (f = []));
            break;
          default:
            typeof c.onClick != 'function' && typeof o.onClick == 'function' && (e.onclick = El);
        }
        mt(r, o);
        var y;
        r = null;
        for (R in c)
          if (!o.hasOwnProperty(R) && c.hasOwnProperty(R) && c[R] != null)
            if (R === 'style') {
              var C = c[R];
              for (y in C) C.hasOwnProperty(y) && (r || (r = {}), (r[y] = ''));
            } else
              R !== 'dangerouslySetInnerHTML' &&
                R !== 'children' &&
                R !== 'suppressContentEditableWarning' &&
                R !== 'suppressHydrationWarning' &&
                R !== 'autoFocus' &&
                (a.hasOwnProperty(R) ? f || (f = []) : (f = f || []).push(R, null));
        for (R in o) {
          var E = o[R];
          if (
            ((C = c != null ? c[R] : void 0),
            o.hasOwnProperty(R) && E !== C && (E != null || C != null))
          )
            if (R === 'style')
              if (C) {
                for (y in C)
                  !C.hasOwnProperty(y) ||
                    (E && E.hasOwnProperty(y)) ||
                    (r || (r = {}), (r[y] = ''));
                for (y in E) E.hasOwnProperty(y) && C[y] !== E[y] && (r || (r = {}), (r[y] = E[y]));
              } else (r || (f || (f = []), f.push(R, r)), (r = E));
            else
              R === 'dangerouslySetInnerHTML'
                ? ((E = E ? E.__html : void 0),
                  (C = C ? C.__html : void 0),
                  E != null && C !== E && (f = f || []).push(R, E))
                : R === 'children'
                  ? (typeof E != 'string' && typeof E != 'number') || (f = f || []).push(R, '' + E)
                  : R !== 'suppressContentEditableWarning' &&
                    R !== 'suppressHydrationWarning' &&
                    (a.hasOwnProperty(R)
                      ? (E != null && R === 'onScroll' && He('scroll', e), f || C === E || (f = []))
                      : (f = f || []).push(R, E));
        }
        r && (f = f || []).push('style', r);
        var R = f;
        (t.updateQueue = R) && (t.flags |= 4);
      }
    }),
    (zd = function (e, t, r, o) {
      r !== o && (t.flags |= 4);
    }));
  function Fi(e, t) {
    if (!Ge)
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
  function xt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      o = 0;
    if (t)
      for (var c = e.child; c !== null; )
        ((r |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags & 14680064),
          (o |= c.flags & 14680064),
          (c.return = e),
          (c = c.sibling));
    else
      for (c = e.child; c !== null; )
        ((r |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags),
          (o |= c.flags),
          (c.return = e),
          (c = c.sibling));
    return ((e.subtreeFlags |= o), (e.childLanes = r), t);
  }
  function Hm(e, t, r) {
    var o = t.pendingProps;
    switch ((ps(t), t.tag)) {
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
        return (xt(t), null);
      case 1:
        return (jt(t.type) && Nl(), xt(t), null);
      case 3:
        return (
          (o = t.stateNode),
          Kr(),
          Qe(Tt),
          Qe(wt),
          bs(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (Pl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), un !== null && (na(un), (un = null)))),
          qs(e, t),
          xt(t),
          null
        );
      case 5:
        Cs(t);
        var c = vr(Ri.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          (Dd(e, t, r, o, c), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(l(166));
            return (xt(t), null);
          }
          if (((e = vr(kn.current)), Pl(t))) {
            ((o = t.stateNode), (r = t.type));
            var f = t.memoizedProps;
            switch (((o[wn] = t), (o[Ti] = f), (e = (t.mode & 1) !== 0), r)) {
              case 'dialog':
                (He('cancel', o), He('close', o));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                He('load', o);
                break;
              case 'video':
              case 'audio':
                for (c = 0; c < bi.length; c++) He(bi[c], o);
                break;
              case 'source':
                He('error', o);
                break;
              case 'img':
              case 'image':
              case 'link':
                (He('error', o), He('load', o));
                break;
              case 'details':
                He('toggle', o);
                break;
              case 'input':
                (gn(o, f), He('invalid', o));
                break;
              case 'select':
                ((o._wrapperState = { wasMultiple: !!f.multiple }), He('invalid', o));
                break;
              case 'textarea':
                (Wn(o, f), He('invalid', o));
            }
            (mt(r, f), (c = null));
            for (var y in f)
              if (f.hasOwnProperty(y)) {
                var C = f[y];
                y === 'children'
                  ? typeof C == 'string'
                    ? o.textContent !== C &&
                      (f.suppressHydrationWarning !== !0 && Cl(o.textContent, C, e),
                      (c = ['children', C]))
                    : typeof C == 'number' &&
                      o.textContent !== '' + C &&
                      (f.suppressHydrationWarning !== !0 && Cl(o.textContent, C, e),
                      (c = ['children', '' + C]))
                  : a.hasOwnProperty(y) && C != null && y === 'onScroll' && He('scroll', o);
              }
            switch (r) {
              case 'input':
                (It(o), De(o, f, !0));
                break;
              case 'textarea':
                (It(o), he(o));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof f.onClick == 'function' && (o.onclick = El);
            }
            ((o = c), (t.updateQueue = o), o !== null && (t.flags |= 4));
          } else {
            ((y = c.nodeType === 9 ? c : c.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = M(r)),
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
              (e[wn] = t),
              (e[Ti] = o),
              Ad(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((y = yn(r, o)), r)) {
                case 'dialog':
                  (He('cancel', e), He('close', e), (c = o));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (He('load', e), (c = o));
                  break;
                case 'video':
                case 'audio':
                  for (c = 0; c < bi.length; c++) He(bi[c], e);
                  c = o;
                  break;
                case 'source':
                  (He('error', e), (c = o));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (He('error', e), He('load', e), (c = o));
                  break;
                case 'details':
                  (He('toggle', e), (c = o));
                  break;
                case 'input':
                  (gn(e, o), (c = Bt(e, o)), He('invalid', e));
                  break;
                case 'option':
                  c = o;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!o.multiple }),
                    (c = S({}, o, { value: void 0 })),
                    He('invalid', e));
                  break;
                case 'textarea':
                  (Wn(e, o), (c = Yt(e, o)), He('invalid', e));
                  break;
                default:
                  c = o;
              }
              (mt(r, c), (C = c));
              for (f in C)
                if (C.hasOwnProperty(f)) {
                  var E = C[f];
                  f === 'style'
                    ? Vn(e, E)
                    : f === 'dangerouslySetInnerHTML'
                      ? ((E = E ? E.__html : void 0), E != null && Ne(e, E))
                      : f === 'children'
                        ? typeof E == 'string'
                          ? (r !== 'textarea' || E !== '') && Oe(e, E)
                          : typeof E == 'number' && Oe(e, '' + E)
                        : f !== 'suppressContentEditableWarning' &&
                          f !== 'suppressHydrationWarning' &&
                          f !== 'autoFocus' &&
                          (a.hasOwnProperty(f)
                            ? E != null && f === 'onScroll' && He('scroll', e)
                            : E != null && z(e, f, E, y));
                }
              switch (r) {
                case 'input':
                  (It(e), De(e, o, !1));
                  break;
                case 'textarea':
                  (It(e), he(e));
                  break;
                case 'option':
                  o.value != null && e.setAttribute('value', '' + be(o.value));
                  break;
                case 'select':
                  ((e.multiple = !!o.multiple),
                    (f = o.value),
                    f != null
                      ? vt(e, !!o.multiple, f, !1)
                      : o.defaultValue != null && vt(e, !!o.multiple, o.defaultValue, !0));
                  break;
                default:
                  typeof c.onClick == 'function' && (e.onclick = El);
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
        return (xt(t), null);
      case 6:
        if (e && t.stateNode != null) zd(e, t, e.memoizedProps, o);
        else {
          if (typeof o != 'string' && t.stateNode === null) throw Error(l(166));
          if (((r = vr(Ri.current)), vr(kn.current), Pl(t))) {
            if (
              ((o = t.stateNode),
              (r = t.memoizedProps),
              (o[wn] = t),
              (f = o.nodeValue !== r) && ((e = $t), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Cl(o.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Cl(o.nodeValue, r, (e.mode & 1) !== 0);
              }
            f && (t.flags |= 4);
          } else
            ((o = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(o)),
              (o[wn] = t),
              (t.stateNode = o));
        }
        return (xt(t), null);
      case 13:
        if (
          (Qe(Ye),
          (o = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ge && Ut !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Wc(), Ur(), (t.flags |= 98560), (f = !1));
          else if (((f = Pl(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(l(318));
              if (((f = t.memoizedState), (f = f !== null ? f.dehydrated : null), !f))
                throw Error(l(317));
              f[wn] = t;
            } else (Ur(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (xt(t), (f = !1));
          } else (un !== null && (na(un), (un = null)), (f = !0));
          if (!f) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Ye.current & 1) !== 0 ? ut === 0 && (ut = 3) : la())),
            t.updateQueue !== null && (t.flags |= 4),
            xt(t),
            null);
      case 4:
        return (Kr(), qs(e, t), e === null && Ni(t.stateNode.containerInfo), xt(t), null);
      case 10:
        return (ws(t.type._context), xt(t), null);
      case 17:
        return (jt(t.type) && Nl(), xt(t), null);
      case 19:
        if ((Qe(Ye), (f = t.memoizedState), f === null)) return (xt(t), null);
        if (((o = (t.flags & 128) !== 0), (y = f.rendering), y === null))
          if (o) Fi(f, !1);
          else {
            if (ut !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((y = zl(e)), y !== null)) {
                  for (
                    t.flags |= 128,
                      Fi(f, !1),
                      o = y.updateQueue,
                      o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      o = r,
                      r = t.child;
                    r !== null;
                  )
                    ((f = r),
                      (e = o),
                      (f.flags &= 14680066),
                      (y = f.alternate),
                      y === null
                        ? ((f.childLanes = 0),
                          (f.lanes = e),
                          (f.child = null),
                          (f.subtreeFlags = 0),
                          (f.memoizedProps = null),
                          (f.memoizedState = null),
                          (f.updateQueue = null),
                          (f.dependencies = null),
                          (f.stateNode = null))
                        : ((f.childLanes = y.childLanes),
                          (f.lanes = y.lanes),
                          (f.child = y.child),
                          (f.subtreeFlags = 0),
                          (f.deletions = null),
                          (f.memoizedProps = y.memoizedProps),
                          (f.memoizedState = y.memoizedState),
                          (f.updateQueue = y.updateQueue),
                          (f.type = y.type),
                          (e = y.dependencies),
                          (f.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (r = r.sibling));
                  return (Ve(Ye, (Ye.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            f.tail !== null &&
              nt() > Jr &&
              ((t.flags |= 128), (o = !0), Fi(f, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = zl(y)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                Fi(f, !0),
                f.tail === null && f.tailMode === 'hidden' && !y.alternate && !Ge)
              )
                return (xt(t), null);
            } else
              2 * nt() - f.renderingStartTime > Jr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (o = !0), Fi(f, !1), (t.lanes = 4194304));
          f.isBackwards
            ? ((y.sibling = t.child), (t.child = y))
            : ((r = f.last), r !== null ? (r.sibling = y) : (t.child = y), (f.last = y));
        }
        return f.tail !== null
          ? ((t = f.tail),
            (f.rendering = t),
            (f.tail = t.sibling),
            (f.renderingStartTime = nt()),
            (t.sibling = null),
            (r = Ye.current),
            Ve(Ye, o ? (r & 1) | 2 : r & 1),
            t)
          : (xt(t), null);
      case 22:
      case 23:
        return (
          ia(),
          (o = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
          o && (t.mode & 1) !== 0
            ? (qt & 1073741824) !== 0 && (xt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : xt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Qm(e, t) {
    switch ((ps(t), t.tag)) {
      case 1:
        return (
          jt(t.type) && Nl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Kr(),
          Qe(Tt),
          Qe(wt),
          bs(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Cs(t), null);
      case 13:
        if ((Qe(Ye), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(l(340));
          Ur();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Qe(Ye), null);
      case 4:
        return (Kr(), null);
      case 10:
        return (ws(t.type._context), null);
      case 22:
      case 23:
        return (ia(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ql = !1,
    St = !1,
    Km = typeof WeakSet == 'function' ? WeakSet : Set,
    ie = null;
  function Yr(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == 'function')
        try {
          r(null);
        } catch (o) {
          Ze(e, t, o);
        }
      else r.current = null;
  }
  function Hs(e, t, r) {
    try {
      r();
    } catch (o) {
      Ze(e, t, o);
    }
  }
  var Fd = !1;
  function Gm(e, t) {
    if (((is = pl), (e = yc()), Yo(e))) {
      if ('selectionStart' in e) var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var o = r.getSelection && r.getSelection();
          if (o && o.rangeCount !== 0) {
            r = o.anchorNode;
            var c = o.anchorOffset,
              f = o.focusNode;
            o = o.focusOffset;
            try {
              (r.nodeType, f.nodeType);
            } catch {
              r = null;
              break e;
            }
            var y = 0,
              C = -1,
              E = -1,
              R = 0,
              H = 0,
              K = e,
              V = null;
            t: for (;;) {
              for (
                var ne;
                K !== r || (c !== 0 && K.nodeType !== 3) || (C = y + c),
                  K !== f || (o !== 0 && K.nodeType !== 3) || (E = y + o),
                  K.nodeType === 3 && (y += K.nodeValue.length),
                  (ne = K.firstChild) !== null;
              )
                ((V = K), (K = ne));
              for (;;) {
                if (K === e) break t;
                if (
                  (V === r && ++R === c && (C = y),
                  V === f && ++H === o && (E = y),
                  (ne = K.nextSibling) !== null)
                )
                  break;
                ((K = V), (V = K.parentNode));
              }
              K = ne;
            }
            r = C === -1 || E === -1 ? null : { start: C, end: E };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (ls = { focusedElem: e, selectionRange: r }, pl = !1, ie = t; ie !== null; )
      if (((t = ie), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (ie = e));
      else
        for (; ie !== null; ) {
          t = ie;
          try {
            var le = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (le !== null) {
                    var de = le.memoizedProps,
                      rt = le.memoizedState,
                      j = t.stateNode,
                      b = j.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? de : cn(t.type, de),
                        rt
                      );
                    j.__reactInternalSnapshotBeforeUpdate = b;
                  }
                  break;
                case 3:
                  var P = t.stateNode.containerInfo;
                  P.nodeType === 1
                    ? (P.textContent = '')
                    : P.nodeType === 9 && P.documentElement && P.removeChild(P.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(l(163));
              }
          } catch (X) {
            Ze(t, t.return, X);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (ie = e));
            break;
          }
          ie = t.return;
        }
    return ((le = Fd), (Fd = !1), le);
  }
  function Bi(e, t, r) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var c = (o = o.next);
      do {
        if ((c.tag & e) === e) {
          var f = c.destroy;
          ((c.destroy = void 0), f !== void 0 && Hs(t, r, f));
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Kl(e, t) {
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
  function Qs(e) {
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
  function Bd(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Bd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[wn], delete t[Ti], delete t[us], delete t[Lm], delete t[Pm])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Wd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Vd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Wd(e.return)) return null;
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
  function Ks(e, t, r) {
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
            r != null || t.onclick !== null || (t.onclick = El)));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Ks(e, t, r), e = e.sibling; e !== null; ) (Ks(e, t, r), (e = e.sibling));
  }
  function Gs(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6) ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Gs(e, t, r), e = e.sibling; e !== null; ) (Gs(e, t, r), (e = e.sibling));
  }
  var gt = null,
    dn = !1;
  function tr(e, t, r) {
    for (r = r.child; r !== null; ) ($d(e, t, r), (r = r.sibling));
  }
  function $d(e, t, r) {
    if (vn && typeof vn.onCommitFiberUnmount == 'function')
      try {
        vn.onCommitFiberUnmount(sl, r);
      } catch {}
    switch (r.tag) {
      case 5:
        St || Yr(r, t);
      case 6:
        var o = gt,
          c = dn;
        ((gt = null),
          tr(e, t, r),
          (gt = o),
          (dn = c),
          gt !== null &&
            (dn
              ? ((e = gt),
                (r = r.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
              : gt.removeChild(r.stateNode)));
        break;
      case 18:
        gt !== null &&
          (dn
            ? ((e = gt),
              (r = r.stateNode),
              e.nodeType === 8 ? as(e.parentNode, r) : e.nodeType === 1 && as(e, r),
              vi(e))
            : as(gt, r.stateNode));
        break;
      case 4:
        ((o = gt),
          (c = dn),
          (gt = r.stateNode.containerInfo),
          (dn = !0),
          tr(e, t, r),
          (gt = o),
          (dn = c));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!St && ((o = r.updateQueue), o !== null && ((o = o.lastEffect), o !== null))) {
          c = o = o.next;
          do {
            var f = c,
              y = f.destroy;
            ((f = f.tag),
              y !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && Hs(r, t, y),
              (c = c.next));
          } while (c !== o);
        }
        tr(e, t, r);
        break;
      case 1:
        if (!St && (Yr(r, t), (o = r.stateNode), typeof o.componentWillUnmount == 'function'))
          try {
            ((o.props = r.memoizedProps), (o.state = r.memoizedState), o.componentWillUnmount());
          } catch (C) {
            Ze(r, t, C);
          }
        tr(e, t, r);
        break;
      case 21:
        tr(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((St = (o = St) || r.memoizedState !== null), tr(e, t, r), (St = o))
          : tr(e, t, r);
        break;
      default:
        tr(e, t, r);
    }
  }
  function Ud(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      (r === null && (r = e.stateNode = new Km()),
        t.forEach(function (o) {
          var c = i0.bind(null, e, o);
          r.has(o) || (r.add(o), o.then(c, c));
        }));
    }
  }
  function fn(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var o = 0; o < r.length; o++) {
        var c = r[o];
        try {
          var f = e,
            y = t,
            C = y;
          e: for (; C !== null; ) {
            switch (C.tag) {
              case 5:
                ((gt = C.stateNode), (dn = !1));
                break e;
              case 3:
                ((gt = C.stateNode.containerInfo), (dn = !0));
                break e;
              case 4:
                ((gt = C.stateNode.containerInfo), (dn = !0));
                break e;
            }
            C = C.return;
          }
          if (gt === null) throw Error(l(160));
          ($d(f, y, c), (gt = null), (dn = !1));
          var E = c.alternate;
          (E !== null && (E.return = null), (c.return = null));
        } catch (R) {
          Ze(c, t, R);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (qd(t, e), (t = t.sibling));
  }
  function qd(e, t) {
    var r = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((fn(t, e), Sn(e), o & 4)) {
          try {
            (Bi(3, e, e.return), Kl(3, e));
          } catch (de) {
            Ze(e, e.return, de);
          }
          try {
            Bi(5, e, e.return);
          } catch (de) {
            Ze(e, e.return, de);
          }
        }
        break;
      case 1:
        (fn(t, e), Sn(e), o & 512 && r !== null && Yr(r, r.return));
        break;
      case 5:
        if ((fn(t, e), Sn(e), o & 512 && r !== null && Yr(r, r.return), e.flags & 32)) {
          var c = e.stateNode;
          try {
            Oe(c, '');
          } catch (de) {
            Ze(e, e.return, de);
          }
        }
        if (o & 4 && ((c = e.stateNode), c != null)) {
          var f = e.memoizedProps,
            y = r !== null ? r.memoizedProps : f,
            C = e.type,
            E = e.updateQueue;
          if (((e.updateQueue = null), E !== null))
            try {
              (C === 'input' && f.type === 'radio' && f.name != null && on(c, f), yn(C, y));
              var R = yn(C, f);
              for (y = 0; y < E.length; y += 2) {
                var H = E[y],
                  K = E[y + 1];
                H === 'style'
                  ? Vn(c, K)
                  : H === 'dangerouslySetInnerHTML'
                    ? Ne(c, K)
                    : H === 'children'
                      ? Oe(c, K)
                      : z(c, H, K, R);
              }
              switch (C) {
                case 'input':
                  ae(c, f);
                  break;
                case 'textarea':
                  J(c, f);
                  break;
                case 'select':
                  var V = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!f.multiple;
                  var ne = f.value;
                  ne != null
                    ? vt(c, !!f.multiple, ne, !1)
                    : V !== !!f.multiple &&
                      (f.defaultValue != null
                        ? vt(c, !!f.multiple, f.defaultValue, !0)
                        : vt(c, !!f.multiple, f.multiple ? [] : '', !1));
              }
              c[Ti] = f;
            } catch (de) {
              Ze(e, e.return, de);
            }
        }
        break;
      case 6:
        if ((fn(t, e), Sn(e), o & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          ((c = e.stateNode), (f = e.memoizedProps));
          try {
            c.nodeValue = f;
          } catch (de) {
            Ze(e, e.return, de);
          }
        }
        break;
      case 3:
        if ((fn(t, e), Sn(e), o & 4 && r !== null && r.memoizedState.isDehydrated))
          try {
            vi(t.containerInfo);
          } catch (de) {
            Ze(e, e.return, de);
          }
        break;
      case 4:
        (fn(t, e), Sn(e));
        break;
      case 13:
        (fn(t, e),
          Sn(e),
          (c = e.child),
          c.flags & 8192 &&
            ((f = c.memoizedState !== null),
            (c.stateNode.isHidden = f),
            !f || (c.alternate !== null && c.alternate.memoizedState !== null) || (Js = nt())),
          o & 4 && Ud(e));
        break;
      case 22:
        if (
          ((H = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((St = (R = St) || H), fn(t, e), (St = R)) : fn(t, e),
          Sn(e),
          o & 8192)
        ) {
          if (
            ((R = e.memoizedState !== null), (e.stateNode.isHidden = R) && !H && (e.mode & 1) !== 0)
          )
            for (ie = e, H = e.child; H !== null; ) {
              for (K = ie = H; ie !== null; ) {
                switch (((V = ie), (ne = V.child), V.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Bi(4, V, V.return);
                    break;
                  case 1:
                    Yr(V, V.return);
                    var le = V.stateNode;
                    if (typeof le.componentWillUnmount == 'function') {
                      ((o = V), (r = V.return));
                      try {
                        ((t = o),
                          (le.props = t.memoizedProps),
                          (le.state = t.memoizedState),
                          le.componentWillUnmount());
                      } catch (de) {
                        Ze(o, r, de);
                      }
                    }
                    break;
                  case 5:
                    Yr(V, V.return);
                    break;
                  case 22:
                    if (V.memoizedState !== null) {
                      Kd(K);
                      continue;
                    }
                }
                ne !== null ? ((ne.return = V), (ie = ne)) : Kd(K);
              }
              H = H.sibling;
            }
          e: for (H = null, K = e; ; ) {
            if (K.tag === 5) {
              if (H === null) {
                H = K;
                try {
                  ((c = K.stateNode),
                    R
                      ? ((f = c.style),
                        typeof f.setProperty == 'function'
                          ? f.setProperty('display', 'none', 'important')
                          : (f.display = 'none'))
                      : ((C = K.stateNode),
                        (E = K.memoizedProps.style),
                        (y = E != null && E.hasOwnProperty('display') ? E.display : null),
                        (C.style.display = Xt('display', y))));
                } catch (de) {
                  Ze(e, e.return, de);
                }
              }
            } else if (K.tag === 6) {
              if (H === null)
                try {
                  K.stateNode.nodeValue = R ? '' : K.memoizedProps;
                } catch (de) {
                  Ze(e, e.return, de);
                }
            } else if (
              ((K.tag !== 22 && K.tag !== 23) || K.memoizedState === null || K === e) &&
              K.child !== null
            ) {
              ((K.child.return = K), (K = K.child));
              continue;
            }
            if (K === e) break e;
            for (; K.sibling === null; ) {
              if (K.return === null || K.return === e) break e;
              (H === K && (H = null), (K = K.return));
            }
            (H === K && (H = null), (K.sibling.return = K.return), (K = K.sibling));
          }
        }
        break;
      case 19:
        (fn(t, e), Sn(e), o & 4 && Ud(e));
        break;
      case 21:
        break;
      default:
        (fn(t, e), Sn(e));
    }
  }
  function Sn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Wd(r)) {
              var o = r;
              break e;
            }
            r = r.return;
          }
          throw Error(l(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (Oe(c, ''), (o.flags &= -33));
            var f = Vd(e);
            Gs(e, f, c);
            break;
          case 3:
          case 4:
            var y = o.stateNode.containerInfo,
              C = Vd(e);
            Ks(e, C, y);
            break;
          default:
            throw Error(l(161));
        }
      } catch (E) {
        Ze(e, e.return, E);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ym(e, t, r) {
    ((ie = e), Hd(e));
  }
  function Hd(e, t, r) {
    for (var o = (e.mode & 1) !== 0; ie !== null; ) {
      var c = ie,
        f = c.child;
      if (c.tag === 22 && o) {
        var y = c.memoizedState !== null || Ql;
        if (!y) {
          var C = c.alternate,
            E = (C !== null && C.memoizedState !== null) || St;
          C = Ql;
          var R = St;
          if (((Ql = y), (St = E) && !R))
            for (ie = c; ie !== null; )
              ((y = ie),
                (E = y.child),
                y.tag === 22 && y.memoizedState !== null
                  ? Gd(c)
                  : E !== null
                    ? ((E.return = y), (ie = E))
                    : Gd(c));
          for (; f !== null; ) ((ie = f), Hd(f), (f = f.sibling));
          ((ie = c), (Ql = C), (St = R));
        }
        Qd(e);
      } else (c.subtreeFlags & 8772) !== 0 && f !== null ? ((f.return = c), (ie = f)) : Qd(e);
    }
  }
  function Qd(e) {
    for (; ie !== null; ) {
      var t = ie;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                St || Kl(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !St)
                  if (r === null) o.componentDidMount();
                  else {
                    var c =
                      t.elementType === t.type ? r.memoizedProps : cn(t.type, r.memoizedProps);
                    o.componentDidUpdate(c, r.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var f = t.updateQueue;
                f !== null && Kc(t, f, o);
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
                  Kc(t, y, r);
                }
                break;
              case 5:
                var C = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = C;
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
                  var R = t.alternate;
                  if (R !== null) {
                    var H = R.memoizedState;
                    if (H !== null) {
                      var K = H.dehydrated;
                      K !== null && vi(K);
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
          St || (t.flags & 512 && Qs(t));
        } catch (V) {
          Ze(t, t.return, V);
        }
      }
      if (t === e) {
        ie = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        ((r.return = t.return), (ie = r));
        break;
      }
      ie = t.return;
    }
  }
  function Kd(e) {
    for (; ie !== null; ) {
      var t = ie;
      if (t === e) {
        ie = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        ((r.return = t.return), (ie = r));
        break;
      }
      ie = t.return;
    }
  }
  function Gd(e) {
    for (; ie !== null; ) {
      var t = ie;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              Kl(4, t);
            } catch (E) {
              Ze(t, r, E);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == 'function') {
              var c = t.return;
              try {
                o.componentDidMount();
              } catch (E) {
                Ze(t, c, E);
              }
            }
            var f = t.return;
            try {
              Qs(t);
            } catch (E) {
              Ze(t, f, E);
            }
            break;
          case 5:
            var y = t.return;
            try {
              Qs(t);
            } catch (E) {
              Ze(t, y, E);
            }
        }
      } catch (E) {
        Ze(t, t.return, E);
      }
      if (t === e) {
        ie = null;
        break;
      }
      var C = t.sibling;
      if (C !== null) {
        ((C.return = t.return), (ie = C));
        break;
      }
      ie = t.return;
    }
  }
  var Xm = Math.ceil,
    Gl = ee.ReactCurrentDispatcher,
    Ys = ee.ReactCurrentOwner,
    nn = ee.ReactCurrentBatchConfig,
    Re = 0,
    dt = null,
    lt = null,
    yt = 0,
    qt = 0,
    Xr = Yn(0),
    ut = 0,
    Wi = null,
    kr = 0,
    Yl = 0,
    Xs = 0,
    Vi = null,
    Pt = null,
    Js = 0,
    Jr = 1 / 0,
    Rn = null,
    Xl = !1,
    Zs = null,
    nr = null,
    Jl = !1,
    rr = null,
    Zl = 0,
    $i = 0,
    ea = null,
    eo = -1,
    to = 0;
  function Nt() {
    return (Re & 6) !== 0 ? nt() : eo !== -1 ? eo : (eo = nt());
  }
  function ir(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Re & 2) !== 0 && yt !== 0
        ? yt & -yt
        : Rm.transition !== null
          ? (to === 0 && (to = Vu()), to)
          : ((e = Fe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Xu(e.type))), e);
  }
  function pn(e, t, r, o) {
    if (50 < $i) throw (($i = 0), (ea = null), Error(l(185)));
    (pi(e, r, o),
      ((Re & 2) === 0 || e !== dt) &&
        (e === dt && ((Re & 2) === 0 && (Yl |= r), ut === 4 && lr(e, yt)),
        Ot(e, o),
        r === 1 && Re === 0 && (t.mode & 1) === 0 && ((Jr = nt() + 500), Tl && Jn())));
  }
  function Ot(e, t) {
    var r = e.callbackNode;
    Rh(e, t);
    var o = cl(e, e === dt ? yt : 0);
    if (o === 0) (r !== null && Fu(r), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((r != null && Fu(r), t === 1))
        (e.tag === 0 ? Om(Xd.bind(null, e)) : Ac(Xd.bind(null, e)),
          Tm(function () {
            (Re & 6) === 0 && Jn();
          }),
          (r = null));
      else {
        switch ($u(o)) {
          case 1:
            r = Oo;
            break;
          case 4:
            r = Bu;
            break;
          case 16:
            r = ol;
            break;
          case 536870912:
            r = Wu;
            break;
          default:
            r = ol;
        }
        r = of(r, Yd.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = r));
    }
  }
  function Yd(e, t) {
    if (((eo = -1), (to = 0), (Re & 6) !== 0)) throw Error(l(327));
    var r = e.callbackNode;
    if (Zr() && e.callbackNode !== r) return null;
    var o = cl(e, e === dt ? yt : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = no(e, o);
    else {
      t = o;
      var c = Re;
      Re |= 2;
      var f = Zd();
      (dt !== e || yt !== t) && ((Rn = null), (Jr = nt() + 500), Sr(e, t));
      do
        try {
          e0();
          break;
        } catch (C) {
          Jd(e, C);
        }
      while (!0);
      (vs(), (Gl.current = f), (Re = c), lt !== null ? (t = 0) : ((dt = null), (yt = 0), (t = ut)));
    }
    if (t !== 0) {
      if ((t === 2 && ((c = Ro(e)), c !== 0 && ((o = c), (t = ta(e, c)))), t === 1))
        throw ((r = Wi), Sr(e, 0), lr(e, o), Ot(e, nt()), r);
      if (t === 6) lr(e, o);
      else {
        if (
          ((c = e.current.alternate),
          (o & 30) === 0 &&
            !Jm(c) &&
            ((t = no(e, o)),
            t === 2 && ((f = Ro(e)), f !== 0 && ((o = f), (t = ta(e, f)))),
            t === 1))
        )
          throw ((r = Wi), Sr(e, 0), lr(e, o), Ot(e, nt()), r);
        switch (((e.finishedWork = c), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            _r(e, Pt, Rn);
            break;
          case 3:
            if ((lr(e, o), (o & 130023424) === o && ((t = Js + 500 - nt()), 10 < t))) {
              if (cl(e, 0) !== 0) break;
              if (((c = e.suspendedLanes), (c & o) !== o)) {
                (Nt(), (e.pingedLanes |= e.suspendedLanes & c));
                break;
              }
              e.timeoutHandle = ss(_r.bind(null, e, Pt, Rn), t);
              break;
            }
            _r(e, Pt, Rn);
            break;
          case 4:
            if ((lr(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, c = -1; 0 < o; ) {
              var y = 31 - sn(o);
              ((f = 1 << y), (y = t[y]), y > c && (c = y), (o &= ~f));
            }
            if (
              ((o = c),
              (o = nt() - o),
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
                            : 1960 * Xm(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = ss(_r.bind(null, e, Pt, Rn), o);
              break;
            }
            _r(e, Pt, Rn);
            break;
          case 5:
            _r(e, Pt, Rn);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return (Ot(e, nt()), e.callbackNode === r ? Yd.bind(null, e) : null);
  }
  function ta(e, t) {
    var r = Vi;
    return (
      e.current.memoizedState.isDehydrated && (Sr(e, t).flags |= 256),
      (e = no(e, t)),
      e !== 2 && ((t = Pt), (Pt = r), t !== null && na(t)),
      e
    );
  }
  function na(e) {
    Pt === null ? (Pt = e) : Pt.push.apply(Pt, e);
  }
  function Jm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var o = 0; o < r.length; o++) {
            var c = r[o],
              f = c.getSnapshot;
            c = c.value;
            try {
              if (!an(f(), c)) return !1;
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
  function lr(e, t) {
    for (
      t &= ~Xs, t &= ~Yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var r = 31 - sn(t),
        o = 1 << r;
      ((e[r] = -1), (t &= ~o));
    }
  }
  function Xd(e) {
    if ((Re & 6) !== 0) throw Error(l(327));
    Zr();
    var t = cl(e, 0);
    if ((t & 1) === 0) return (Ot(e, nt()), null);
    var r = no(e, t);
    if (e.tag !== 0 && r === 2) {
      var o = Ro(e);
      o !== 0 && ((t = o), (r = ta(e, o)));
    }
    if (r === 1) throw ((r = Wi), Sr(e, 0), lr(e, t), Ot(e, nt()), r);
    if (r === 6) throw Error(l(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      _r(e, Pt, Rn),
      Ot(e, nt()),
      null
    );
  }
  function ra(e, t) {
    var r = Re;
    Re |= 1;
    try {
      return e(t);
    } finally {
      ((Re = r), Re === 0 && ((Jr = nt() + 500), Tl && Jn()));
    }
  }
  function xr(e) {
    rr !== null && rr.tag === 0 && (Re & 6) === 0 && Zr();
    var t = Re;
    Re |= 1;
    var r = nn.transition,
      o = Fe;
    try {
      if (((nn.transition = null), (Fe = 1), e)) return e();
    } finally {
      ((Fe = o), (nn.transition = r), (Re = t), (Re & 6) === 0 && Jn());
    }
  }
  function ia() {
    ((qt = Xr.current), Qe(Xr));
  }
  function Sr(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), Im(r)), lt !== null))
      for (r = lt.return; r !== null; ) {
        var o = r;
        switch ((ps(o), o.tag)) {
          case 1:
            ((o = o.type.childContextTypes), o != null && Nl());
            break;
          case 3:
            (Kr(), Qe(Tt), Qe(wt), bs());
            break;
          case 5:
            Cs(o);
            break;
          case 4:
            Kr();
            break;
          case 13:
            Qe(Ye);
            break;
          case 19:
            Qe(Ye);
            break;
          case 10:
            ws(o.type._context);
            break;
          case 22:
          case 23:
            ia();
        }
        r = r.return;
      }
    if (
      ((dt = e),
      (lt = e = or(e.current, null)),
      (yt = qt = t),
      (ut = 0),
      (Wi = null),
      (Xs = Yl = kr = 0),
      (Pt = Vi = null),
      yr !== null)
    ) {
      for (t = 0; t < yr.length; t++)
        if (((r = yr[t]), (o = r.interleaved), o !== null)) {
          r.interleaved = null;
          var c = o.next,
            f = r.pending;
          if (f !== null) {
            var y = f.next;
            ((f.next = c), (o.next = y));
          }
          r.pending = o;
        }
      yr = null;
    }
    return e;
  }
  function Jd(e, t) {
    do {
      var r = lt;
      try {
        if ((vs(), (Fl.current = $l), Bl)) {
          for (var o = Xe.memoizedState; o !== null; ) {
            var c = o.queue;
            (c !== null && (c.pending = null), (o = o.next));
          }
          Bl = !1;
        }
        if (
          ((wr = 0),
          (ct = at = Xe = null),
          (Mi = !1),
          (Ai = 0),
          (Ys.current = null),
          r === null || r.return === null)
        ) {
          ((ut = 1), (Wi = t), (lt = null));
          break;
        }
        e: {
          var f = e,
            y = r.return,
            C = r,
            E = t;
          if (
            ((t = yt),
            (C.flags |= 32768),
            E !== null && typeof E == 'object' && typeof E.then == 'function')
          ) {
            var R = E,
              H = C,
              K = H.tag;
            if ((H.mode & 1) === 0 && (K === 0 || K === 11 || K === 15)) {
              var V = H.alternate;
              V
                ? ((H.updateQueue = V.updateQueue),
                  (H.memoizedState = V.memoizedState),
                  (H.lanes = V.lanes))
                : ((H.updateQueue = null), (H.memoizedState = null));
            }
            var ne = _d(y);
            if (ne !== null) {
              ((ne.flags &= -257),
                Cd(ne, y, C, f, t),
                ne.mode & 1 && Sd(f, R, t),
                (t = ne),
                (E = R));
              var le = t.updateQueue;
              if (le === null) {
                var de = new Set();
                (de.add(E), (t.updateQueue = de));
              } else le.add(E);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Sd(f, R, t), la());
                break e;
              }
              E = Error(l(426));
            }
          } else if (Ge && C.mode & 1) {
            var rt = _d(y);
            if (rt !== null) {
              ((rt.flags & 65536) === 0 && (rt.flags |= 256), Cd(rt, y, C, f, t), gs(Gr(E, C)));
              break e;
            }
          }
          ((f = E = Gr(E, C)),
            ut !== 4 && (ut = 2),
            Vi === null ? (Vi = [f]) : Vi.push(f),
            (f = y));
          do {
            switch (f.tag) {
              case 3:
                ((f.flags |= 65536), (t &= -t), (f.lanes |= t));
                var j = kd(f, E, t);
                Qc(f, j);
                break e;
              case 1:
                C = E;
                var b = f.type,
                  P = f.stateNode;
                if (
                  (f.flags & 128) === 0 &&
                  (typeof b.getDerivedStateFromError == 'function' ||
                    (P !== null &&
                      typeof P.componentDidCatch == 'function' &&
                      (nr === null || !nr.has(P))))
                ) {
                  ((f.flags |= 65536), (t &= -t), (f.lanes |= t));
                  var X = xd(f, C, t);
                  Qc(f, X);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        tf(r);
      } catch (me) {
        ((t = me), lt === r && r !== null && (lt = r = r.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Zd() {
    var e = Gl.current;
    return ((Gl.current = $l), e === null ? $l : e);
  }
  function la() {
    ((ut === 0 || ut === 3 || ut === 2) && (ut = 4),
      dt === null || ((kr & 268435455) === 0 && (Yl & 268435455) === 0) || lr(dt, yt));
  }
  function no(e, t) {
    var r = Re;
    Re |= 2;
    var o = Zd();
    (dt !== e || yt !== t) && ((Rn = null), Sr(e, t));
    do
      try {
        Zm();
        break;
      } catch (c) {
        Jd(e, c);
      }
    while (!0);
    if ((vs(), (Re = r), (Gl.current = o), lt !== null)) throw Error(l(261));
    return ((dt = null), (yt = 0), ut);
  }
  function Zm() {
    for (; lt !== null; ) ef(lt);
  }
  function e0() {
    for (; lt !== null && !Eh(); ) ef(lt);
  }
  function ef(e) {
    var t = lf(e.alternate, e, qt);
    ((e.memoizedProps = e.pendingProps), t === null ? tf(e) : (lt = t), (Ys.current = null));
  }
  function tf(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Hm(r, t, qt)), r !== null)) {
          lt = r;
          return;
        }
      } else {
        if (((r = Qm(r, t)), r !== null)) {
          ((r.flags &= 32767), (lt = r));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((ut = 6), (lt = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        lt = t;
        return;
      }
      lt = t = e;
    } while (t !== null);
    ut === 0 && (ut = 5);
  }
  function _r(e, t, r) {
    var o = Fe,
      c = nn.transition;
    try {
      ((nn.transition = null), (Fe = 1), t0(e, t, r, o));
    } finally {
      ((nn.transition = c), (Fe = o));
    }
    return null;
  }
  function t0(e, t, r, o) {
    do Zr();
    while (rr !== null);
    if ((Re & 6) !== 0) throw Error(l(327));
    r = e.finishedWork;
    var c = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(l(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var f = r.lanes | r.childLanes;
    if (
      (Mh(e, f),
      e === dt && ((lt = dt = null), (yt = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        Jl ||
        ((Jl = !0),
        of(ol, function () {
          return (Zr(), null);
        })),
      (f = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || f)
    ) {
      ((f = nn.transition), (nn.transition = null));
      var y = Fe;
      Fe = 1;
      var C = Re;
      ((Re |= 4),
        (Ys.current = null),
        Gm(e, r),
        qd(r, e),
        xm(ls),
        (pl = !!is),
        (ls = is = null),
        (e.current = r),
        Ym(r),
        bh(),
        (Re = C),
        (Fe = y),
        (nn.transition = f));
    } else e.current = r;
    if (
      (Jl && ((Jl = !1), (rr = e), (Zl = c)),
      (f = e.pendingLanes),
      f === 0 && (nr = null),
      Th(r.stateNode),
      Ot(e, nt()),
      t !== null)
    )
      for (o = e.onRecoverableError, r = 0; r < t.length; r++)
        ((c = t[r]), o(c.value, { componentStack: c.stack, digest: c.digest }));
    if (Xl) throw ((Xl = !1), (e = Zs), (Zs = null), e);
    return (
      (Zl & 1) !== 0 && e.tag !== 0 && Zr(),
      (f = e.pendingLanes),
      (f & 1) !== 0 ? (e === ea ? $i++ : (($i = 0), (ea = e))) : ($i = 0),
      Jn(),
      null
    );
  }
  function Zr() {
    if (rr !== null) {
      var e = $u(Zl),
        t = nn.transition,
        r = Fe;
      try {
        if (((nn.transition = null), (Fe = 16 > e ? 16 : e), rr === null)) var o = !1;
        else {
          if (((e = rr), (rr = null), (Zl = 0), (Re & 6) !== 0)) throw Error(l(331));
          var c = Re;
          for (Re |= 4, ie = e.current; ie !== null; ) {
            var f = ie,
              y = f.child;
            if ((ie.flags & 16) !== 0) {
              var C = f.deletions;
              if (C !== null) {
                for (var E = 0; E < C.length; E++) {
                  var R = C[E];
                  for (ie = R; ie !== null; ) {
                    var H = ie;
                    switch (H.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Bi(8, H, f);
                    }
                    var K = H.child;
                    if (K !== null) ((K.return = H), (ie = K));
                    else
                      for (; ie !== null; ) {
                        H = ie;
                        var V = H.sibling,
                          ne = H.return;
                        if ((Bd(H), H === R)) {
                          ie = null;
                          break;
                        }
                        if (V !== null) {
                          ((V.return = ne), (ie = V));
                          break;
                        }
                        ie = ne;
                      }
                  }
                }
                var le = f.alternate;
                if (le !== null) {
                  var de = le.child;
                  if (de !== null) {
                    le.child = null;
                    do {
                      var rt = de.sibling;
                      ((de.sibling = null), (de = rt));
                    } while (de !== null);
                  }
                }
                ie = f;
              }
            }
            if ((f.subtreeFlags & 2064) !== 0 && y !== null) ((y.return = f), (ie = y));
            else
              e: for (; ie !== null; ) {
                if (((f = ie), (f.flags & 2048) !== 0))
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bi(9, f, f.return);
                  }
                var j = f.sibling;
                if (j !== null) {
                  ((j.return = f.return), (ie = j));
                  break e;
                }
                ie = f.return;
              }
          }
          var b = e.current;
          for (ie = b; ie !== null; ) {
            y = ie;
            var P = y.child;
            if ((y.subtreeFlags & 2064) !== 0 && P !== null) ((P.return = y), (ie = P));
            else
              e: for (y = b; ie !== null; ) {
                if (((C = ie), (C.flags & 2048) !== 0))
                  try {
                    switch (C.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Kl(9, C);
                    }
                  } catch (me) {
                    Ze(C, C.return, me);
                  }
                if (C === y) {
                  ie = null;
                  break e;
                }
                var X = C.sibling;
                if (X !== null) {
                  ((X.return = C.return), (ie = X));
                  break e;
                }
                ie = C.return;
              }
          }
          if (((Re = c), Jn(), vn && typeof vn.onPostCommitFiberRoot == 'function'))
            try {
              vn.onPostCommitFiberRoot(sl, e);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        ((Fe = r), (nn.transition = t));
      }
    }
    return !1;
  }
  function nf(e, t, r) {
    ((t = Gr(r, t)),
      (t = kd(e, t, 1)),
      (e = er(e, t, 1)),
      (t = Nt()),
      e !== null && (pi(e, 1, t), Ot(e, t)));
  }
  function Ze(e, t, r) {
    if (e.tag === 3) nf(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          nf(t, e, r);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof o.componentDidCatch == 'function' && (nr === null || !nr.has(o)))
          ) {
            ((e = Gr(r, e)),
              (e = xd(t, e, 1)),
              (t = er(t, e, 1)),
              (e = Nt()),
              t !== null && (pi(t, 1, e), Ot(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function n0(e, t, r) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (t = Nt()),
      (e.pingedLanes |= e.suspendedLanes & r),
      dt === e &&
        (yt & r) === r &&
        (ut === 4 || (ut === 3 && (yt & 130023424) === yt && 500 > nt() - Js)
          ? Sr(e, 0)
          : (Xs |= r)),
      Ot(e, t));
  }
  function rf(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = ul), (ul <<= 1), (ul & 130023424) === 0 && (ul = 4194304)));
    var r = Nt();
    ((e = Ln(e, t)), e !== null && (pi(e, t, r), Ot(e, r)));
  }
  function r0(e) {
    var t = e.memoizedState,
      r = 0;
    (t !== null && (r = t.retryLane), rf(e, r));
  }
  function i0(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          c = e.memoizedState;
        c !== null && (r = c.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    (o !== null && o.delete(t), rf(e, r));
  }
  var lf;
  lf = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Tt.current) Lt = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return ((Lt = !1), qm(e, t, r));
        Lt = (e.flags & 131072) !== 0;
      }
    else ((Lt = !1), Ge && (t.flags & 1048576) !== 0 && Dc(t, Ll, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        (Hl(e, t), (e = t.pendingProps));
        var c = Wr(t, wt.current);
        (Qr(t, r), (c = Ts(null, t, o, e, c, r)));
        var f = js();
        return (
          (t.flags |= 1),
          typeof c == 'object' &&
          c !== null &&
          typeof c.render == 'function' &&
          c.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              jt(o) ? ((f = !0), Il(t)) : (f = !1),
              (t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null),
              Ss(t),
              (c.updater = Ul),
              (t.stateNode = c),
              (c._reactInternals = t),
              As(t, o, e, r),
              (t = Bs(null, t, o, !0, f, r)))
            : ((t.tag = 0), Ge && f && fs(t), bt(null, t, c, r), (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
            (Hl(e, t),
            (e = t.pendingProps),
            (c = o._init),
            (o = c(o._payload)),
            (t.type = o),
            (c = t.tag = o0(o)),
            (e = cn(o, e)),
            c)
          ) {
            case 0:
              t = Fs(null, t, o, e, r);
              break e;
            case 1:
              t = jd(null, t, o, e, r);
              break e;
            case 11:
              t = Ed(null, t, o, e, r);
              break e;
            case 14:
              t = bd(null, t, o, cn(o.type, e), r);
              break e;
          }
          throw Error(l(306, o, ''));
        }
        return t;
      case 0:
        return (
          (o = t.type),
          (c = t.pendingProps),
          (c = t.elementType === o ? c : cn(o, c)),
          Fs(e, t, o, c, r)
        );
      case 1:
        return (
          (o = t.type),
          (c = t.pendingProps),
          (c = t.elementType === o ? c : cn(o, c)),
          jd(e, t, o, c, r)
        );
      case 3:
        e: {
          if ((Ld(t), e === null)) throw Error(l(387));
          ((o = t.pendingProps),
            (f = t.memoizedState),
            (c = f.element),
            Hc(e, t),
            Dl(t, o, null, r));
          var y = t.memoizedState;
          if (((o = y.element), f.isDehydrated))
            if (
              ((f = {
                element: o,
                isDehydrated: !1,
                cache: y.cache,
                pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
                transitions: y.transitions,
              }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              ((c = Gr(Error(l(423)), t)), (t = Pd(e, t, o, r, c)));
              break e;
            } else if (o !== c) {
              ((c = Gr(Error(l(424)), t)), (t = Pd(e, t, o, r, c)));
              break e;
            } else
              for (
                Ut = Gn(t.stateNode.containerInfo.firstChild),
                  $t = t,
                  Ge = !0,
                  un = null,
                  r = Uc(t, null, o, r),
                  t.child = r;
                r;
              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
          else {
            if ((Ur(), o === c)) {
              t = On(e, t, r);
              break e;
            }
            bt(e, t, o, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Gc(t),
          e === null && ms(t),
          (o = t.type),
          (c = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (y = c.children),
          os(o, c) ? (y = null) : f !== null && os(o, f) && (t.flags |= 32),
          Td(e, t),
          bt(e, t, y, r),
          t.child
        );
      case 6:
        return (e === null && ms(t), null);
      case 13:
        return Od(e, t, r);
      case 4:
        return (
          _s(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = qr(t, null, o, r)) : bt(e, t, o, r),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (c = t.pendingProps),
          (c = t.elementType === o ? c : cn(o, c)),
          Ed(e, t, o, c, r)
        );
      case 7:
        return (bt(e, t, t.pendingProps, r), t.child);
      case 8:
        return (bt(e, t, t.pendingProps.children, r), t.child);
      case 12:
        return (bt(e, t, t.pendingProps.children, r), t.child);
      case 10:
        e: {
          if (
            ((o = t.type._context),
            (c = t.pendingProps),
            (f = t.memoizedProps),
            (y = c.value),
            Ve(Rl, o._currentValue),
            (o._currentValue = y),
            f !== null)
          )
            if (an(f.value, y)) {
              if (f.children === c.children && !Tt.current) {
                t = On(e, t, r);
                break e;
              }
            } else
              for (f = t.child, f !== null && (f.return = t); f !== null; ) {
                var C = f.dependencies;
                if (C !== null) {
                  y = f.child;
                  for (var E = C.firstContext; E !== null; ) {
                    if (E.context === o) {
                      if (f.tag === 1) {
                        ((E = Pn(-1, r & -r)), (E.tag = 2));
                        var R = f.updateQueue;
                        if (R !== null) {
                          R = R.shared;
                          var H = R.pending;
                          (H === null ? (E.next = E) : ((E.next = H.next), (H.next = E)),
                            (R.pending = E));
                        }
                      }
                      ((f.lanes |= r),
                        (E = f.alternate),
                        E !== null && (E.lanes |= r),
                        ks(f.return, r, t),
                        (C.lanes |= r));
                      break;
                    }
                    E = E.next;
                  }
                } else if (f.tag === 10) y = f.type === t.type ? null : f.child;
                else if (f.tag === 18) {
                  if (((y = f.return), y === null)) throw Error(l(341));
                  ((y.lanes |= r),
                    (C = y.alternate),
                    C !== null && (C.lanes |= r),
                    ks(y, r, t),
                    (y = f.sibling));
                } else y = f.child;
                if (y !== null) y.return = f;
                else
                  for (y = f; y !== null; ) {
                    if (y === t) {
                      y = null;
                      break;
                    }
                    if (((f = y.sibling), f !== null)) {
                      ((f.return = y.return), (y = f));
                      break;
                    }
                    y = y.return;
                  }
                f = y;
              }
          (bt(e, t, c.children, r), (t = t.child));
        }
        return t;
      case 9:
        return (
          (c = t.type),
          (o = t.pendingProps.children),
          Qr(t, r),
          (c = en(c)),
          (o = o(c)),
          (t.flags |= 1),
          bt(e, t, o, r),
          t.child
        );
      case 14:
        return ((o = t.type), (c = cn(o, t.pendingProps)), (c = cn(o.type, c)), bd(e, t, o, c, r));
      case 15:
        return Nd(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (o = t.type),
          (c = t.pendingProps),
          (c = t.elementType === o ? c : cn(o, c)),
          Hl(e, t),
          (t.tag = 1),
          jt(o) ? ((e = !0), Il(t)) : (e = !1),
          Qr(t, r),
          vd(t, o, c),
          As(t, o, c, r),
          Bs(null, t, o, !0, e, r)
        );
      case 19:
        return Md(e, t, r);
      case 22:
        return Id(e, t, r);
    }
    throw Error(l(156, t.tag));
  };
  function of(e, t) {
    return zu(e, t);
  }
  function l0(e, t, r, o) {
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
  function rn(e, t, r, o) {
    return new l0(e, t, r, o);
  }
  function oa(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function o0(e) {
    if (typeof e == 'function') return oa(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === B)) return 11;
      if (e === q) return 14;
    }
    return 2;
  }
  function or(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = rn(e.tag, t, e.key, e.mode)),
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
  function ro(e, t, r, o, c, f) {
    var y = 2;
    if (((o = e), typeof e == 'function')) oa(e) && (y = 1);
    else if (typeof e == 'string') y = 5;
    else
      e: switch (e) {
        case $:
          return Cr(r.children, c, f, t);
        case ue:
          ((y = 8), (c |= 8));
          break;
        case se:
          return ((e = rn(12, r, t, c | 2)), (e.elementType = se), (e.lanes = f), e);
        case ge:
          return ((e = rn(13, r, t, c)), (e.elementType = ge), (e.lanes = f), e);
        case U:
          return ((e = rn(19, r, t, c)), (e.elementType = U), (e.lanes = f), e);
        case pe:
          return io(r, c, f, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case fe:
                y = 10;
                break e;
              case Z:
                y = 9;
                break e;
              case B:
                y = 11;
                break e;
              case q:
                y = 14;
                break e;
              case ye:
                ((y = 16), (o = null));
                break e;
            }
          throw Error(l(130, e == null ? e : typeof e, ''));
      }
    return ((t = rn(y, r, t, c)), (t.elementType = e), (t.type = o), (t.lanes = f), t);
  }
  function Cr(e, t, r, o) {
    return ((e = rn(7, e, o, t)), (e.lanes = r), e);
  }
  function io(e, t, r, o) {
    return (
      (e = rn(22, e, o, t)),
      (e.elementType = pe),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function sa(e, t, r) {
    return ((e = rn(6, e, null, t)), (e.lanes = r), e);
  }
  function aa(e, t, r) {
    return (
      (t = rn(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function s0(e, t, r, o, c) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Mo(0)),
      (this.expirationTimes = Mo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Mo(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = c),
      (this.mutableSourceEagerHydrationData = null));
  }
  function ua(e, t, r, o, c, f, y, C, E) {
    return (
      (e = new s0(e, t, r, C, E)),
      t === 1 ? ((t = 1), f === !0 && (t |= 8)) : (t = 0),
      (f = rn(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (f.memoizedState = {
        element: o,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ss(f),
      e
    );
  }
  function a0(e, t, r) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: A,
      key: o == null ? null : '' + o,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function sf(e) {
    if (!e) return Xn;
    e = e._reactInternals;
    e: {
      if (fr(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (jt(t.type)) {
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
      if (jt(r)) return Rc(e, r, t);
    }
    return t;
  }
  function af(e, t, r, o, c, f, y, C, E) {
    return (
      (e = ua(r, o, !0, e, c, f, y, C, E)),
      (e.context = sf(null)),
      (r = e.current),
      (o = Nt()),
      (c = ir(r)),
      (f = Pn(o, c)),
      (f.callback = t ?? null),
      er(r, f, c),
      (e.current.lanes = c),
      pi(e, c, o),
      Ot(e, o),
      e
    );
  }
  function lo(e, t, r, o) {
    var c = t.current,
      f = Nt(),
      y = ir(c);
    return (
      (r = sf(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Pn(f, y)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = er(c, t, y)),
      e !== null && (pn(e, c, y, f), Al(e, c, y)),
      y
    );
  }
  function oo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function uf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function ca(e, t) {
    (uf(e, t), (e = e.alternate) && uf(e, t));
  }
  function u0() {
    return null;
  }
  var cf =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function da(e) {
    this._internalRoot = e;
  }
  ((so.prototype.render = da.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(l(409));
      lo(e, t, null, null);
    }),
    (so.prototype.unmount = da.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (xr(function () {
            lo(null, e, null, null);
          }),
            (t[Nn] = null));
        }
      }));
  function so(e) {
    this._internalRoot = e;
  }
  so.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Hu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Hn.length && t !== 0 && t < Hn[r].priority; r++);
      (Hn.splice(r, 0, e), r === 0 && Gu(e));
    }
  };
  function fa(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ao(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function df() {}
  function c0(e, t, r, o, c) {
    if (c) {
      if (typeof o == 'function') {
        var f = o;
        o = function () {
          var R = oo(y);
          f.call(R);
        };
      }
      var y = af(t, o, e, 0, null, !1, !1, '', df);
      return (
        (e._reactRootContainer = y),
        (e[Nn] = y.current),
        Ni(e.nodeType === 8 ? e.parentNode : e),
        xr(),
        y
      );
    }
    for (; (c = e.lastChild); ) e.removeChild(c);
    if (typeof o == 'function') {
      var C = o;
      o = function () {
        var R = oo(E);
        C.call(R);
      };
    }
    var E = ua(e, 0, !1, null, null, !1, !1, '', df);
    return (
      (e._reactRootContainer = E),
      (e[Nn] = E.current),
      Ni(e.nodeType === 8 ? e.parentNode : e),
      xr(function () {
        lo(t, E, r, o);
      }),
      E
    );
  }
  function uo(e, t, r, o, c) {
    var f = r._reactRootContainer;
    if (f) {
      var y = f;
      if (typeof c == 'function') {
        var C = c;
        c = function () {
          var E = oo(y);
          C.call(E);
        };
      }
      lo(t, y, e, c);
    } else y = c0(r, t, e, c, o);
    return oo(y);
  }
  ((Uu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = fi(t.pendingLanes);
          r !== 0 && (Ao(t, r | 1), Ot(t, nt()), (Re & 6) === 0 && ((Jr = nt() + 500), Jn()));
        }
        break;
      case 13:
        (xr(function () {
          var o = Ln(e, 1);
          if (o !== null) {
            var c = Nt();
            pn(o, e, 1, c);
          }
        }),
          ca(e, 1));
    }
  }),
    (Do = function (e) {
      if (e.tag === 13) {
        var t = Ln(e, 134217728);
        if (t !== null) {
          var r = Nt();
          pn(t, e, 134217728, r);
        }
        ca(e, 134217728);
      }
    }),
    (qu = function (e) {
      if (e.tag === 13) {
        var t = ir(e),
          r = Ln(e, t);
        if (r !== null) {
          var o = Nt();
          pn(r, e, t, o);
        }
        ca(e, t);
      }
    }),
    (Hu = function () {
      return Fe;
    }),
    (Qu = function (e, t) {
      var r = Fe;
      try {
        return ((Fe = e), t());
      } finally {
        Fe = r;
      }
    }),
    (To = function (e, t, r) {
      switch (t) {
        case 'input':
          if ((ae(e, r), (t = r.name), r.type === 'radio' && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
                t = 0;
              t < r.length;
              t++
            ) {
              var o = r[t];
              if (o !== e && o.form === e.form) {
                var c = bl(o);
                if (!c) throw Error(l(90));
                (Et(o), ae(o, c));
              }
            }
          }
          break;
        case 'textarea':
          J(e, r);
          break;
        case 'select':
          ((t = r.value), t != null && vt(e, !!r.multiple, t, !1));
      }
    }),
    (Lu = ra),
    (Pu = xr));
  var d0 = { usingClientEntryPoint: !1, Events: [ji, Fr, bl, Tu, ju, ra] },
    Ui = {
      findFiberByHostInstance: pr,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    f0 = {
      bundleType: Ui.bundleType,
      version: Ui.version,
      rendererPackageName: Ui.rendererPackageName,
      rendererConfig: Ui.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ee.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Au(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Ui.findFiberByHostInstance || u0,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var co = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!co.isDisabled && co.supportsFiber)
      try {
        ((sl = co.inject(f0)), (vn = co));
      } catch {}
  }
  return (
    (Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d0),
    (Rt.createPortal = function (e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!fa(t)) throw Error(l(200));
      return a0(e, t, null, r);
    }),
    (Rt.createRoot = function (e, t) {
      if (!fa(e)) throw Error(l(299));
      var r = !1,
        o = '',
        c = cf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = ua(e, 1, !1, null, null, r, !1, o, c)),
        (e[Nn] = t.current),
        Ni(e.nodeType === 8 ? e.parentNode : e),
        new da(t)
      );
    }),
    (Rt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(l(188))
          : ((e = Object.keys(e).join(',')), Error(l(268, e)));
      return ((e = Au(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Rt.flushSync = function (e) {
      return xr(e);
    }),
    (Rt.hydrate = function (e, t, r) {
      if (!ao(t)) throw Error(l(200));
      return uo(null, e, t, !0, r);
    }),
    (Rt.hydrateRoot = function (e, t, r) {
      if (!fa(e)) throw Error(l(405));
      var o = (r != null && r.hydratedSources) || null,
        c = !1,
        f = '',
        y = cf;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (c = !0),
          r.identifierPrefix !== void 0 && (f = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (y = r.onRecoverableError)),
        (t = af(t, null, e, 1, r ?? null, c, !1, f, y)),
        (e[Nn] = t.current),
        Ni(e),
        o)
      )
        for (e = 0; e < o.length; e++)
          ((r = o[e]),
            (c = r._getVersion),
            (c = c(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, c])
              : t.mutableSourceEagerHydrationData.push(r, c));
      return new so(t);
    }),
    (Rt.render = function (e, t, r) {
      if (!ao(t)) throw Error(l(200));
      return uo(null, e, t, !1, r);
    }),
    (Rt.unmountComponentAtNode = function (e) {
      if (!ao(e)) throw Error(l(40));
      return e._reactRootContainer
        ? (xr(function () {
            uo(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Nn] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Rt.unstable_batchedUpdates = ra),
    (Rt.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!ao(r)) throw Error(l(200));
      if (e == null || e._reactInternals === void 0) throw Error(l(38));
      return uo(e, t, r, !1, o);
    }),
    (Rt.version = '18.3.1-next-f1338f8080-20240426'),
    Rt
  );
}
var wf;
function k0() {
  if (wf) return ma.exports;
  wf = 1;
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
  return (n(), (ma.exports = w0()), ma.exports);
}
var kf;
function x0() {
  if (kf) return fo;
  kf = 1;
  var n = k0();
  return ((fo.createRoot = n.createRoot), (fo.hydrateRoot = n.hydrateRoot), fo);
}
var S0 = x0();
const _0 = JSON.parse(
    `[{"id":"timeframes","type":"preset","presets":[{"id":"next-decade","name":"Focused on next decade (until 2035)","description":"Evaluates projects primarily by their effects over the next decade.","credences":{"equalAll":0,"prioritizeNearer":0,"discountDistant":25,"shortTermOnly":75}},{"id":"next-generations","name":"Focused on next generations (until 2100)","description":"Emphasizes effects on the next few generations, including individuals who do not currently exist.","credences":{"equalAll":20,"prioritizeNearer":50,"discountDistant":30,"shortTermOnly":0}},{"id":"longtermist","name":"Longtermist","description":"Concerned with the longterm future, valuing effects equally regardless of when they occur.","credences":{"equalAll":80,"prioritizeNearer":20,"discountDistant":0,"shortTermOnly":0}}],"worldviewDimension":{"appliesTo":"timeframe","applyAs":"multiplier","options":{"equalAll":{"short":1,"medium":1,"long":1},"prioritizeNearer":{"short":1,"medium":0.5,"long":0.2},"discountDistant":{"short":1,"medium":0.2,"long":0},"shortTermOnly":{"short":1,"medium":0,"long":0}}},"categoryLabel":"Time Preferences","icon":"clock","previewText":"Short vs. long-term effects","heading":"When evaluating projects, how much consideration do you give to projects' near-term, medium-term, or longer-term effects?","info":"A project's effects play out over different timelines. Some effects, like malaria treatments, might occur right away. Others, like investments in education or infrastructure, could take years to arise. Other effects will arise in the longer run future. When you are evaluating projects, do you give extra weight to effects that will happen sooner (in the next decade) rather than later (decades or even centuries in the future)?\\n\\nThere are several reasons why you might give extra weight to near-term effects. First, you might think it's more morally important to help individuals that currently exist or will exist very soon than it is to help individuals that will potentially exist in the future. Alternatively, even if you think all beings matter equally, regardless of time, you might be so uncertain about a project's long-term effects that you'd rather focus on the more predictable near future. Lastly, you might have beliefs about how the future will go (e.g. that AI will change everything in 10 years) that make you want to just focus on projects whose effects will happen soon.","context":"Consider the following timeframes:\\n\\n- **Short-term:** before 2035\\n- **Medium-term:** from 2035-2100\\n- **Long-term:** after 2100\\n\\nWhich of these positions best describes your view when evaluating the effects of different projects?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Time Preferences","options":[{"key":"shortTermOnly","label":"Short-term only","description":"I only care about effects in the short-term","info":"","panelLabel":"Short","panelShort":"ST","marketplaceValue":[1,1,0,0,0,0]},{"key":"discountDistant","label":"Discount the distant future","description":"I do not care about the distant future. I care a bit about the medium-term, but I put more priority on the short-term","info":"","panelLabel":"Discount","panelShort":">>","marketplaceValue":[1,1,0.2,0.2,0,0]},{"key":"prioritizeNearer","label":"Prioritize nearer term","description":"I care a bit about the long-term future, but I put more priority on the medium-term and even more priority on the short-term","info":"","panelLabel":"Nearer","panelShort":">","marketplaceValue":[1,1,0.5,0.5,0.2,0.2]},{"key":"equalAll","label":"Equal across all timeframes","description":"I only care about how much good I could possibly do, and I don't care whether that good happens in the short-term, medium-term, or long-term","info":"","panelLabel":"Equal","panelShort":"=","marketplaceValue":[1,1,1,1,1,1]}]},{"id":"risk","type":"credence","worldviewDimension":{"appliesWhen":"isDummyRisk","applyAs":"multiplier","options":{"riskNeutral":1,"upsideSkepticism":1,"lossAversion":1,"both":1}},"categoryLabel":"Risk Attitudes","icon":"dice","previewText":"Attitudes toward risk","heading":"Are you averse to taking certain kinds of risks in your philanthropic giving?","info":"The expected value of a project is a weighted average of all the effects that the project might have. Two projects can have the same expected value but otherwise be very different. For example, a \\"safe\\" project may be almost guaranteed to do X amount of good, so its expected value is X. A \\"risky\\" project might have a 1/100 chance of delivering 100 x X amount of good and a 99/100 of doing nothing, so its expected value is also X. A different kind of \\"risky\\" project might have a 1/2 chance of backfiring, creating -X value, and a 1/2 chance of creating 3X value, so its expected value is also X.\\n\\nIf you only care about maximizing expected value, you will treat these projects the same way. However, if you are risk averse, you may dislike one or both of the risky projects. There are a few ways to be risk averse, including:\\n\\n- **Upside skepticism:** you are wary of spending your money on bets that have very small chances of success. You want to focus on what will probably happen, not what will happen in the most optimistic of outcomes.\\n- **Loss aversion:** you want to avoid situations where your money does nothing, and you are even more keen to avoid situations where your actions made things worse. You want to penalize projects that have decent chances of failure or backfire.\\n- **Both skeptical of upsides and averse to losses**","context":"Which of these best describes your perspective:","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Risk Attitudes","options":[{"key":"riskNeutral","label":"Risk neutral","description":"I prefer to invest in options that have the highest expected value, even if they have low success rates or risk of negative outcomes","info":"","panelLabel":"Neutral","panelShort":"EV","marketplaceValue":0},{"key":"upsideSkepticism","label":"Skeptical of optimistic scenarios","description":"I am skeptical of projects' most optimistic scenarios and decide where to give based on scenarios that are more likely to occur","info":"","panelLabel":"Skeptical","panelShort":"S","marketplaceValue":1},{"key":"lossAversion","label":"Avoid losses","description":"I want to avoid losses and am motivated to avoid projects that have significant chances of failure or backfire (even if those projects have high expected value)","info":"","panelLabel":"Loss averse","panelShort":"LA","marketplaceValue":2},{"key":"both","label":"Both skeptical and loss averse","description":"I am both skeptical of projects' most optimistic scenarios and motivated to avoid losses","info":"","panelLabel":"Both","panelShort":"B","marketplaceValue":3}]},{"id":"xrisk","type":"credence","worldviewDimension":{"appliesWhen":"isNonXRisk","applyAs":"multiplier","options":{"evaluateSame":1,"discount10":0.9,"discount50":0.5,"xriskOnly":0}},"categoryLabel":"Existential Risk","icon":"alert-triangle","previewText":"Existential risk priority","heading":"How much do you want to prioritize efforts to mitigate near-term existential risks that demand action in the next several years, compared to other kinds of projects you might fund?","info":"Some projects aim to reduce the chances of an event that poses existential or catastrophic risk (such as an engineered pandemic or AI takeover). If an event like this occurs, then it could severely mitigate the beneficial effects of other kinds of philanthropic projects (such as global health interventions). This can make it hard to compare the value of existential risk mitigation to the value of other projects.\\n\\nIf you think there is a high chance of a catastrophic risk in the near future (say, the next 10 years), then you may think that we need to act now to try to reduce these threats. You may care a lot about the longer-run future and what the world is like decades from now, but you want to prioritize actions now to ensure that humanity is around to enjoy that future.","context":"Do you want to treat near-term existential risk mitigation projects differently than other projects?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"X-Risk Priority","options":[{"key":"evaluateSame","label":"Evaluate the same way","description":"I want to evaluate near-term existential risk projects the same way that I evaluate all other projects (e.g. by calculating their expected effects over the timeline I care about)","info":"","panelLabel":"Same","panelShort":"=","marketplaceValue":0},{"key":"discount10","label":"Discount other projects somewhat","description":"I think there is about a 10% probability that an existential risk occurs in the next decade that renders other projects useless. Therefore, I want to discount the value of these other projects somewhat","info":"","panelLabel":"10% risk","panelShort":"10%","marketplaceValue":0.1},{"key":"discount50","label":"Discount other projects greatly","description":"I think there is about a 50% probability that an existential risk occurs in the next decade that renders other projects useless. Therefore, I want to greatly discount the value of these other projects","info":"","panelLabel":"50% risk","panelShort":"50%","marketplaceValue":0.5},{"key":"xriskOnly","label":"Only x-risk reduction","description":"I only care about reducing near-term existential risk","info":"","panelLabel":"X-risk only","panelShort":"X","marketplaceValue":1}]},{"id":"animal","type":"preset","presets":[{"id":"animal-friendly","name":"Animal friendly view","description":"Emphasizes equal consideration for animal and human suffering.","credences":{"humanEqual":75,"human10x":25,"human100x":0,"human1000x":0,"noValue":0}},{"id":"rethink-priorities","name":"Rethink Priorities default","description":"Based on empirical research on animal welfare ranges, gives animals somewhat lower weight than humans.","credences":{"humanEqual":20,"human10x":50,"human100x":20,"human1000x":10,"noValue":0}},{"id":"animal-skeptic","name":"Animal skeptic view","description":"Gives strong priority to human welfare, based on their unique capacities or our special moral obligations to other humans.","credences":{"humanEqual":0,"human10x":10,"human100x":60,"human1000x":30,"noValue":0}}],"worldviewDimension":{"appliesWhen":"helpsAnimals","applyAs":"multiplier","options":{"humanEqual":0.0172,"human10x":0.00172,"human100x":0.000172,"human1000x":0.0000172,"noValue":0}},"categoryLabel":"Animal Welfare","icon":"paw","previewText":"Animal welfare","heading":"How much do you value reducing suffering in animals compared to reducing suffering in humans?","info":"It can be difficult to compare the value of helping humans versus helping animals. For now, let's consider animals that most people believe are capable of suffering (such as pigs, dogs, or cows) and use chickens as a test case.\\n\\nThere are some conditions that decrease chickens' quality of life, which we can measure in terms of chicken Disability Adjusted Life Years. For example, suppose living in hurtful pain for a year reduces a chicken's quality of life by 25%. Therefore, if we improve a chicken's living conditions to relieve this suffering, this would result in a gain of 0.25 chicken DALYs. Likewise, some human conditions reduce a human's quality of life by 25%, so relieving this for a year would result in 0.25 human DALYs.\\n\\nHow much do you value chicken DALYs versus human DALYs? In other words, how much do you care about a quality of life reduction in chickens compared to a similar proportional quality of life reduction in humans? Note that there are a few different reasons you might give chicken DALYs lower weight. Perhaps you think a 25% reduction in a chicken's quality of life involves less suffering (or loss of meaningful experiences) than a 25% reduction in a human's quality of life. Alternatively, you could think the amount of suffering is the same, but you think it is morally more important to alleviate human suffering.","context":"For this question, we'll focus on familiar farmed animals—chickens, pigs, and cows—that most people agree can experience pain and distress.\\n\\nWhich of these positions best describes your view?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Animal Welfare Weights","options":[{"key":"humanEqual","label":"Equal to humans","description":"I treat a year of disability in an animal the same as a year of disability in a human","info":"","panelLabel":"Equal","panelShort":"=","marketplaceValue":1},{"key":"human10x","label":"10x less than humans","description":"I value a human year of disability about 10x as much as a year of disability in an animal","info":"","panelLabel":"10x less","panelShort":"10x","marketplaceValue":0.1},{"key":"human100x","label":"100x less than humans","description":"I value a human year of disability about 100x as much as a year of disability in an animal","info":"","panelLabel":"100x less","panelShort":"100x","marketplaceValue":0.01},{"key":"human1000x","label":"1000x less than humans","description":"I value a human year of disability about 1000x as much as a year of disability in an animal","info":"","panelLabel":"1000x less","panelShort":"1kx","marketplaceValue":0.001},{"key":"noValue","label":"No value","description":"I do not value animal welfare","info":"","panelLabel":"None","panelShort":"0","marketplaceValue":0}]},{"id":"invertebrate","type":"preset","presets":[{"id":"invertebrate-friendly","name":"Invertebrate friendly view","description":"Emphasizes roughly equal consideration for invertebrate and human suffering, tempered by uncertainty about invertebrate sentience.","credences":{"humanEqual":40,"human100x":40,"human1000x":20,"human10000x":0,"noValue":0}},{"id":"rethink-priorities","name":"Rethink Priorities default","description":"Based on empirical research on animal welfare ranges and likelihoods of invertebrate sentience, gives animals significantly lower weight than humans.","credences":{"humanEqual":10,"human100x":40,"human1000x":30,"human10000x":10,"noValue":10}},{"id":"invertebrate-skeptic","name":"Invertebrate skeptic view","description":"Gives strong priority to human welfare, highly skeptical about invertebrates' capacity for welfare.","credences":{"humanEqual":0,"human100x":0,"human1000x":10,"human10000x":40,"noValue":50}}],"worldviewDimension":{"appliesWhen":"helpsInvertebrates","applyAs":"multiplier","options":{"humanEqual":0.0172,"human100x":0.000172,"human1000x":0.0000172,"human10000x":0.00000172,"noValue":0}},"categoryLabel":"Invertebrate Welfare","icon":"shell","previewText":"Invertebrate welfare","heading":"How much do you care about reducing the suffering of shrimp (or other small, less understood farmed invertebrates), compared to reducing the suffering of humans?","info":"It can be difficult to compare the value of helping humans versus helping animals. This is even more difficult when we are uncertain whether the animals even have conscious experiences or what their experiences are like. For now, let's consider farmed invertebrates (such as shrimp or insects) and use shrimp as a test case.\\n\\nShrimp may experience conditions that reduce their quality of life. Assuming they are sentient, we can characterize their loss of quality of life via a shrimp DALY. How much do you value shrimp DALYs versus human DALYs? Note that there are three different reasons you might give shrimp DALYs lower weight. Perhaps you think a 25% reduction in a shrimp's quality of life involves less suffering (or loss of meaningful experiences) than a 25% reduction in a human's quality of life. Alternatively, you could think the amount of suffering is the same, but you think it is morally more important to alleviate human suffering. Lastly, you could doubt that shrimp are sentient and therefore doubt that they can suffer.","context":"Which of these positions best describes your view?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Invertebrate Weights","options":[{"key":"humanEqual","label":"Equal to humans","description":"I treat a year of disability in shrimp the same as a year of disability in a human","info":"","panelLabel":"Equal","panelShort":"=","marketplaceValue":1},{"key":"human100x","label":"100x less than humans","description":"I value a human year of disability about 100x as much as a year of disability in a shrimp","info":"","panelLabel":"100x less","panelShort":"100x","marketplaceValue":0.01},{"key":"human1000x","label":"1000x less than humans","description":"I value a human year of disability about 1000x as much as a year of disability in a shrimp","info":"","panelLabel":"1000x less","panelShort":"1kx","marketplaceValue":0.001},{"key":"human10000x","label":"10,000x less than humans","description":"I value a human year of disability about 10,000x as much as a year of disability in a shrimp","info":"","panelLabel":"10kx less","panelShort":"10kx","marketplaceValue":0.0001},{"key":"noValue","label":"No value","description":"I do not value shrimp welfare","info":"","panelLabel":"None","panelShort":"0","marketplaceValue":0}]},{"id":"disability","type":"preset","presets":[{"id":"prioritize-lives","name":"Prioritize saving lives","description":"Places more emphasis on preventing deaths than relieving suffering from non-fatal diseases and disabilities.","credences":{"livesOnly":25,"livesMore":75,"equal":0,"disabilityMore":0}},{"id":"equal-weight","name":"Equal weight","description":"Values saving lives the same as restoring quality of life lost to disability. Similar to GiveWell's moral weights.","credences":{"livesOnly":0,"livesMore":0,"equal":100,"disabilityMore":0}},{"id":"prioritize-quality","name":"Prioritize improving quality of life","description":"Places more emphasis on relieving suffering due to disease and disability, instead of saving lives.","credences":{"livesOnly":0,"livesMore":0,"equal":25,"disabilityMore":75}}],"worldviewDimension":{"appliesWhen":"preventsDisability","applyAs":"multiplier","options":{"livesOnly":0,"livesMore":0.003,"equal":0.0172,"disabilityMore":0.086}},"categoryLabel":"Disability Weights","icon":"heart-pulse","previewText":"Disability vs. saving lives","heading":"When you think about helping people, how do you weigh saving lives against making people's existing lives better by reducing disease or disability?","info":"Here's an example that may help you think through your options. Suppose that living with blindness reduces someone's quality of life by 25%. You could either choose to cure blindness in a group of people, restoring them to full health for some number of years. Or you could save a child's life, giving them 50 extra years to live. How many years of blindness would you need to relieve to make it as good as saving the one child's life?\\n\\nSome charitable projects save lives—preventing people from dying. Others relieve suffering from diseases or disabilities that aren't fatal but significantly reduce quality of life.\\n\\n**How we measure this:** We can estimate how much a disease or disability reduces someone's quality of life (estimates typically come from the [Global Burden of Disease](https://www.healthdata.org/research-analysis/gbd)). For example:\\n\\n- **Clubfoot** might reduce quality of life by 20%\\n- **Blindness** might reduce quality of life by 25%\\n- **Severe multiple sclerosis** might reduce quality of life by 75%\\n\\nIf a charity treats someone's blindness for 10 years, that's like restoring 2.5 \\"full-health years\\" (10 years × 25% improvement). If a charity corrects an infant's clubfeet and prevents them from suffering from 60 years of that condition, that's like restoring 12 full health years. We call these recovered years \\"disability-adjusted life years\\" or DALYs.","context":"Imagine you must choose between two projects:\\n\\n- **Project A:** Save one child's life, giving them 50 additional years to live\\n- **Project B:** Cure or treat a serious disability for multiple people, restoring some number of \\"full-health years\\"\\n\\nHow many years of disability would you need to relieve to make it as good as saving the one child's life?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Disability Weights","options":[{"key":"livesOnly","label":"Saving lives only","description":"I only care about saving years of life due to death","info":"","panelLabel":"Lives only","panelShort":"0","marketplaceValue":0},{"key":"livesMore","label":"More weight on saving lives","description":"I put 5x as much value on saving a year of life lost to death than a year of life lost to disability","info":"I'd need to prevent 1000 years of blindness to equal saving 50 years of life.","panelLabel":"5x lives","panelShort":"5xL","marketplaceValue":0.003},{"key":"equal","label":"Equal weight for saving lives and relieving disabilities","description":"I value a year of life lost equally, whether it is due to death or disability","info":"I'd need to prevent 200 years of blindness to equal saving 50 years of life. For comparison, this is the weight given to disability by GiveWell.","panelLabel":"Equal","panelShort":"=","marketplaceValue":0.0172},{"key":"disabilityMore","label":"More weight on relieving disability","description":"I put 5x as much value on saving a year of life lost to disability than a year of life lost to death","info":"I'd need to prevent 40 years of blindness to equal saving 50 years of life.","panelLabel":"5x disability","panelShort":"5xD","marketplaceValue":0.086}]},{"id":"income","type":"preset","presets":[{"id":"prioritize-lives","name":"Prioritize saving lives","description":"Places much more emphasis on preventing deaths than improving material conditions for people living in poverty.","credences":{"livesOnly":25,"lives10x":75,"lives2x":0,"equal":0}},{"id":"balanced","name":"Balanced","description":"Gives more weight to saving lives than improving incomes, but cares about both goals. Similar to GiveWell's moral weights.","credences":{"livesOnly":0,"lives10x":25,"lives2x":75,"equal":0}},{"id":"poverty-relief","name":"Poverty relief","description":"Prioritizes poverty relief as highly as saving lives.","credences":{"livesOnly":0,"lives10x":0,"lives2x":25,"equal":75}}],"worldviewDimension":{"appliesWhen":"increasesIncome","applyAs":"multiplier","options":{"livesOnly":0,"lives10x":0.0017,"lives2x":0.0086,"equal":0.0172}},"categoryLabel":"Income Weights","icon":"banknote","previewText":"Income vs. saving lives","heading":"When you think about helping people, how do you weigh saving lives against increasing people's income, allowing them to improve their material quality of life?","info":"Here's an example that might help you think through your options. Suppose that you could make direct cash transfers that would double incomes for a group of people for a year. The same amount of money would save one child's life, giving them an extra 50 years to live. How many people's incomes would you have to double to make that option as good as saving the one child's life?","context":"**Imagine this scenario:** You could either:\\n\\n- **Option A:** Add one year of life to someone who would otherwise die\\n- **Option B:** Double someone's income for one year, significantly improving their material circumstances\\n\\nHow much do you value doubling someone's income for a year compared to adding one year to someone's life?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Income Weights","options":[{"key":"livesOnly","label":"Saving lives only","description":"I only care about adding years of life","info":"","panelLabel":"Lives only","panelShort":"0","marketplaceValue":0},{"key":"lives10x","label":"Much more weight on a year of life","description":"I put 10x as much value on a year of life compared to a year of doubled income","info":"I would need to double yearly income for 500 people to equal saving 50 years of life.","panelLabel":"10x lives","panelShort":"10x","marketplaceValue":0.0017},{"key":"lives2x","label":"Some more weight on a year of life","description":"I put 2x as much value on a year of life compared to a year of doubled income","info":"I would need to double yearly income for 100 people to equal saving 50 years of life. This is comparable to (but slightly higher than) the weight that GiveWell assigns to a year of income doubling compared to saving a year of life.","panelLabel":"2x lives","panelShort":"2x","marketplaceValue":0.0086},{"key":"equal","label":"Equal weight","description":"I put the same value on a year of life compared to a year of doubled income","info":"I would need to double yearly income for 50 people to equal saving 50 years of life.","panelLabel":"Equal","panelShort":"=","marketplaceValue":0.0172}]}]`
  ),
  _o = { questions: _0 },
  C0 = 'extreme',
  E0 = {
    malaria_nets: {
      name: 'Malaria Prevention',
      color: '#5eb3d4',
      points: 100,
      scaleFactor: 1,
      preventsDisability: !0,
      increasesIncome: !0,
      helpsAnimals: !1,
      helpsInvertebrates: !1,
      timeframe: 'short',
      isNonXRisk: !0,
      isDummyRisk: !0,
    },
    cage_free_campaigns: {
      name: 'Cage-Free Campaigns',
      color: '#ff6b9d',
      points: 100,
      scaleFactor: 100,
      preventsDisability: !1,
      increasesIncome: !1,
      helpsAnimals: !0,
      helpsInvertebrates: !1,
      timeframe: 'short',
      isNonXRisk: !0,
      isDummyRisk: !0,
    },
    shrimp_welfare: {
      name: 'Shrimp Welfare',
      color: '#e76f51',
      points: 100,
      scaleFactor: 1e3,
      preventsDisability: !1,
      increasesIncome: !1,
      helpsAnimals: !1,
      helpsInvertebrates: !0,
      timeframe: 'short',
      isNonXRisk: !0,
      isDummyRisk: !0,
    },
    wild_animal_welfare: {
      name: 'Wild Animal Welfare',
      color: '#27ae60',
      points: 100,
      scaleFactor: 1,
      preventsDisability: !1,
      increasesIncome: !1,
      helpsAnimals: !0,
      helpsInvertebrates: !1,
      timeframe: 'medium',
      isNonXRisk: !0,
      isDummyRisk: !0,
    },
    fish_welfare: {
      name: 'Fish Welfare',
      color: '#d4a25e',
      points: 100,
      scaleFactor: 1,
      preventsDisability: !1,
      increasesIncome: !1,
      helpsAnimals: !0,
      helpsInvertebrates: !1,
      timeframe: 'short',
      isNonXRisk: !0,
      isDummyRisk: !0,
    },
    ai_safety_policy: {
      name: 'AI Safety & Policy',
      color: '#9b5de5',
      points: 100,
      scaleFactor: 1,
      preventsDisability: !1,
      increasesIncome: !1,
      helpsAnimals: !1,
      helpsInvertebrates: !1,
      timeframe: 'long',
      isLongTerm: !0,
      isNonXRisk: !1,
      isDummyRisk: !0,
    },
  },
  b0 = { livesOnly: 25, livesMore: 25, equal: 25, disabilityMore: 25 },
  Co = { diminishingReturns: C0, causes: E0, defaultCredences: b0 },
  N0 = !1,
  I0 = {
    resetButton: !1,
    sliderLock: !0,
    shareResults: !1,
    multipleWorldviews: !1,
    moralMarketplace: !1,
  },
  T0 = {
    order: ['moralMarketplace', 'mergedFavorites', 'maxEV', 'parliament', 'maximin'],
    showMoralMarketplace: !0,
    showMergedFavorites: !0,
    showMaxEV: !0,
    showParliament: !1,
    showMaximin: !1,
    sideBySideComparison: !0,
  },
  j0 = { calculationDebugger: !1 },
  hn = { advanced: N0, ui: I0, calculations: T0, developer: j0 },
  li = {
    SESSION_ID: 'quiz_session_id',
    QUIZ_STATE: 'quiz_state',
    SKIP_CONFLICT: 'quiz_skip_conflict',
  },
  hp = 7;
function mp() {
  let n = sessionStorage.getItem(li.SESSION_ID);
  return (n || ((n = crypto.randomUUID()), sessionStorage.setItem(li.SESSION_ID, n)), n);
}
function L0(n) {
  const {
      currentStep: i,
      worldviews: l,
      activeWorldviewId: s,
      selectedCalculations: a,
      worldviewNames: u,
      marketplaceBudget: d,
    } = n,
    p = {};
  for (const [h, g] of Object.entries(l)) {
    const w = {};
    for (const [x, k] of Object.entries(g.questions))
      w[x] = {
        credences: k.credences,
        originalCredences: k.originalCredences,
        inputMode: k.inputMode,
        lockedKeys: k.lockedKeys,
        selectedPreset: k.selectedPreset,
      };
    p[h] = { questions: w, completed: g.completed || !1 };
  }
  const m = {
    version: hp,
    state: {
      currentStep: i,
      worldviews: p,
      activeWorldviewId: s,
      selectedCalculations: a,
      worldviewNames: u,
      marketplaceBudget: d,
    },
  };
  sessionStorage.setItem(li.QUIZ_STATE, JSON.stringify(m));
}
function va() {
  const n = sessionStorage.getItem(li.QUIZ_STATE);
  if (!n) return null;
  try {
    const i = JSON.parse(n);
    return i.version !== hp ? (ko(), null) : i.state;
  } catch {
    return (ko(), null);
  }
}
function ko() {
  sessionStorage.removeItem(li.QUIZ_STATE);
}
function P0() {
  sessionStorage.setItem(li.SKIP_CONFLICT, 'true');
}
const O0 = '/api',
  R0 = { share: `${O0}/share` },
  M0 = 2;
async function A0(n, i, l = {}) {
  const s = mp(),
    { selectedCalculations: a, worldviewNames: u, marketplaceBudget: d } = l,
    p = {
      sessionId: s,
      quizVersion: M0,
      worldviews: n,
      activeWorldviewId: i,
      ...(a && { selectedCalculations: a }),
      ...(u && { worldviewNames: u }),
      ...(d && { marketplaceBudget: d }),
    },
    m = await fetch(R0.share, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(p),
    });
  if (!m.ok) {
    const w = await m.json().catch(() => ({}));
    throw new Error(w.message || 'Failed to create share link');
  }
  const { id: h } = await m.json();
  return { url: `${window.location.origin + window.location.pathname}#s=${h}`, id: h };
}
function wa() {
  window.location.hash &&
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
const Mt = 'rgba(255, 255, 255, 0.8)',
  xf = {
    default: [Mt, Mt, Mt],
    selection: [Mt, Mt, Mt],
    credence: [Mt, Mt, Mt],
    preset: [Mt, Mt, Mt, Mt, Mt],
  },
  tu = 'rgba(255, 255, 255, 0.7)',
  Da = { OPTIONS: 'options' },
  tt = {
    DEFAULT: 'default',
    SELECTION: 'selection',
    CREDENCE: 'credence',
    INTERMISSION: 'intermission',
    PRESET: 'preset',
    RATIO: 'ratio',
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D0 = (n) => n.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  gp = (...n) =>
    n
      .filter((i, l, s) => !!i && i.trim() !== '' && s.indexOf(i) === l)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var z0 = {
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
 */ const F0 = W.forwardRef(
  (
    {
      color: n = 'currentColor',
      size: i = 24,
      strokeWidth: l = 2,
      absoluteStrokeWidth: s,
      className: a = '',
      children: u,
      iconNode: d,
      ...p
    },
    m
  ) =>
    W.createElement(
      'svg',
      {
        ref: m,
        ...z0,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: s ? (Number(l) * 24) / Number(i) : l,
        className: gp('lucide', a),
        ...p,
      },
      [...d.map(([h, g]) => W.createElement(h, g)), ...(Array.isArray(u) ? u : [u])]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const We = (n, i) => {
  const l = W.forwardRef(({ className: s, ...a }, u) =>
    W.createElement(F0, { ref: u, iconNode: i, className: gp(`lucide-${D0(n)}`, s), ...a })
  );
  return ((l.displayName = `${n}`), l);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B0 = We('Banknote', [
  ['rect', { width: '20', height: '12', x: '2', y: '6', rx: '2', key: '9lu3g6' }],
  ['circle', { cx: '12', cy: '12', r: '2', key: '1c9p78' }],
  ['path', { d: 'M6 12h.01M18 12h.01', key: '113zkx' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const W0 = We('Bird', [
  ['path', { d: 'M16 7h.01', key: '1kdx03' }],
  ['path', { d: 'M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20', key: 'oj1oa8' }],
  ['path', { d: 'm20 7 2 .5-2 .5', key: '12nv4d' }],
  ['path', { d: 'M10 18v3', key: '1yea0a' }],
  ['path', { d: 'M14 17.75V21', key: '1pymcb' }],
  ['path', { d: 'M7 18a6 6 0 0 0 3.84-10.61', key: '1npnn0' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V0 = We('Building2', [
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
 */ const $0 = We('ChartColumn', [
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
 */ const yp = We('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const U0 = We('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q0 = We('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vp = We('CircleHelp', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H0 = We('Clock', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['polyline', { points: '12 6 12 12 16 14', key: '68esgv' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q0 = We('Dices', [
  ['rect', { width: '12', height: '12', x: '2', y: '10', rx: '2', ry: '2', key: '6agr2n' }],
  [
    'path',
    { d: 'm17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6', key: '1o487t' },
  ],
  ['path', { d: 'M6 18h.01', key: 'uhywen' }],
  ['path', { d: 'M10 14h.01', key: 'ssrbsk' }],
  ['path', { d: 'M15 6h.01', key: 'cblpky' }],
  ['path', { d: 'M18 9h.01', key: '2061c0' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K0 = We('ExternalLink', [
  ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
  ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
  ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G0 = We('Handshake', [
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
 */ const Y0 = We('HeartPulse', [
  [
    'path',
    {
      d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z',
      key: 'c3ymky',
    },
  ],
  ['path', { d: 'M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27', key: '1uw2ng' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X0 = We('Hourglass', [
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
 */ const J0 = We('Info', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M12 16v-4', key: '1dtifu' }],
  ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wp = We('Lock', [
  ['rect', { width: '18', height: '11', x: '3', y: '11', rx: '2', ry: '2', key: '1w4ew1' }],
  ['path', { d: 'M7 11V7a5 5 0 0 1 10 0v4', key: 'fwvmzm' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z0 = We('Microscope', [
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
 */ const eg = We('PawPrint', [
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
 */ const tg = We('Pencil', [
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
 */ const ng = We('Plus', [
  ['path', { d: 'M5 12h14', key: '1ays0h' }],
  ['path', { d: 'M12 5v14', key: 's699le' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const za = We('RotateCcw', [
  ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
  ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rg = We('Scale', [
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
 */ const ig = We('Shell', [
  [
    'path',
    {
      d: 'M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44',
      key: '1cn552',
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lg = We('SlidersVertical', [
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
 */ const og = We('Target', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['circle', { cx: '12', cy: '12', r: '6', key: '1vlfrh' }],
  ['circle', { cx: '12', cy: '12', r: '2', key: '1c9p78' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sg = We('TriangleAlert', [
  [
    'path',
    {
      d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3',
      key: 'wmoenq',
    },
  ],
  ['path', { d: 'M12 9v4', key: 'juzpu7' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ag = We('X', [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ]),
  ug = '_overlay_13cvn_1',
  cg = '_modal_13cvn_12',
  dg = '_title_13cvn_21',
  fg = '_message_13cvn_29',
  pg = '_buttons_13cvn_36',
  hg = '_button_13cvn_36',
  mg = '_worldviewRow_13cvn_51',
  gg = '_worldviewButton_13cvn_57',
  yg = '_editRow_13cvn_62',
  vg = '_editInput_13cvn_69',
  wg = '_iconButton_13cvn_86',
  it = {
    overlay: ug,
    modal: cg,
    title: dg,
    message: fg,
    buttons: pg,
    button: hg,
    worldviewRow: mg,
    worldviewButton: gg,
    editRow: yg,
    editInput: vg,
    iconButton: wg,
  };
function kg({ onKeepMine: n, onLoadShared: i, onOpenNewTab: l }) {
  return v.jsx('div', {
    className: it.overlay,
    children: v.jsxs('div', {
      className: it.modal,
      children: [
        v.jsx('h2', { className: it.title, children: 'You have unsaved progress' }),
        v.jsx('p', {
          className: it.message,
          children:
            'Loading this shared link will replace your current quiz answers. What would you like to do?',
        }),
        v.jsxs('div', {
          className: it.buttons,
          children: [
            v.jsx('button', {
              onClick: n,
              className: `btn btn-secondary ${it.button}`,
              children: 'Keep my progress',
            }),
            v.jsx('button', {
              onClick: i,
              className: `btn btn-primary ${it.button}`,
              children: 'Load shared results',
            }),
            v.jsxs('button', {
              onClick: l,
              className: `btn btn-secondary ${it.button}`,
              children: [v.jsx(K0, { size: 16 }), 'Open in new tab'],
            }),
          ],
        }),
      ],
    }),
  });
}
const { causes: zn } = Co,
  kp = { none: 1, sqrt: 0.5, extreme: 0.1 };
function xp(n) {
  const i = (n == null ? void 0 : n.diminishingReturns) || Co.diminishingReturns || 'sqrt';
  return kp[i] ?? 0.5;
}
function xg(n) {
  const i = JSON.stringify(n);
  let l = 0;
  for (let s = 0; s < i.length; s++) {
    const a = i.charCodeAt(s);
    ((l = (l << 5) - l + a), (l = l & l));
  }
  return Math.abs(l);
}
function Sg(n) {
  let i = n;
  return function () {
    ((i |= 0), (i = (i + 1831565813) | 0));
    let l = Math.imul(i ^ (i >>> 15), 1 | i);
    return (
      (l = (l + Math.imul(l ^ (l >>> 7), 61 | l)) ^ l),
      ((l ^ (l >>> 14)) >>> 0) / 4294967296
    );
  };
}
function nu(n, i, l = 0.5) {
  if (l >= 1) {
    const d = Math.max(...n);
    if (d <= 0) return n.map(() => i / n.length);
    const p = n.map((m, h) => (m === d ? h : -1)).filter((m) => m >= 0);
    return n.map((m, h) => (p.includes(h) ? i / p.length : 0));
  }
  const s = 1 / (1 - l),
    a = n.map((d) => (d > 0 ? Math.pow(d, s) : 0)),
    u = a.reduce((d, p) => d + p, 0);
  return u === 0 ? n.map(() => i / n.length) : a.map((d) => (d / u) * i);
}
function Sp(n = !1) {
  return Object.fromEntries(
    _o.questions
      .filter((i) => i.type !== 'intermission' && i.worldviewDimension)
      .map((i) => [
        i.id,
        n ? { ...i.worldviewDimension, name: i.editPanelTitle } : i.worldviewDimension,
      ])
  );
}
const tl = Sp();
function* _g(n) {
  const i = Object.keys(n);
  if (i.length === 0) return;
  function* l(s, a) {
    if (s === i.length) {
      let p = 1;
      for (const m of i) p *= n[m][a[m]] / 100;
      yield { options: a, probability: p };
      return;
    }
    const u = i[s],
      d = Object.keys(n[u]);
    for (const p of d) yield* l(s + 1, { ...a, [u]: p });
  }
  yield* l(0, {});
}
function* Cg(n, i = 2e3) {
  const l = Object.keys(n);
  if (l.length === 0) return;
  const s = xg(n),
    a = Sg(s),
    u = {};
  for (const m of l) {
    const h = Object.entries(n[m]);
    let g = 0;
    u[m] = h.map(([w, x]) => ((g += x / 100), { key: w, cumsum: g }));
  }
  const d = (m, h) => {
      const g = u[m];
      for (const { key: w, cumsum: x } of g) if (h <= x) return w;
      return g[g.length - 1].key;
    },
    p = 1 / i;
  for (let m = 0; m < i; m++) {
    const h = {};
    for (const g of l) h[g] = d(g, a());
    yield { options: h, probability: p };
  }
}
function Eg(n) {
  return Object.values(n).reduce((i, l) => i * Object.keys(l).length, 1);
}
function bg(n) {
  for (const i of Object.values(n)) {
    const l = Object.values(i),
      s = l.filter((u) => u === 100).length === 1,
      a = l.filter((u) => u === 0).length === l.length - 1;
    if (!s || !a) return !1;
  }
  return !0;
}
function* Ng(n) {
  const i = {};
  for (const [l, s] of Object.entries(n))
    for (const [a, u] of Object.entries(s))
      if (u === 100) {
        i[l] = a;
        break;
      }
  yield { options: i, probability: 1 };
}
function* ru(n, i = 500, l = 2e3) {
  if (bg(n)) {
    yield* Ng(n);
    return;
  }
  Eg(n) <= i ? yield* _g(n) : yield* Cg(n, l);
}
function Ig(n, i, l) {
  let s = n.points;
  for (const [a, u] of Object.entries(l)) {
    const d = i[a],
      p = u.options[d];
    if (u.applyAs === 'multiplier')
      if (u.appliesTo) {
        const m = n[u.appliesTo];
        if (m && typeof p == 'object') {
          const h = p[m];
          h !== void 0 && (s *= h);
        }
      } else u.appliesWhen && n[u.appliesWhen] && (s *= p);
    else if (u.applyAs === 'exponent' && u.appliesTo) {
      const m = n[u.appliesTo] || 1;
      s *= Math.pow(m, p);
    }
  }
  return s;
}
function iu(n, i, l) {
  const s = {};
  for (const [a, u] of Object.entries(i)) s[a] = Ig(u, n, l);
  return s;
}
function Tg(n) {
  const i = Math.max(...Object.values(n));
  return Object.keys(n).filter((l) => Math.abs(n[l] - i) < 1e-4);
}
function _p(n) {
  return Object.fromEntries(Object.keys(n).map((i) => [i, 0]));
}
function lu(n, i, l) {
  if (i.applyAs === 'multiplier') {
    if (i.appliesTo) {
      const a = n[i.appliesTo];
      if (!a) return 1;
      let u = 0;
      for (const [d, p] of Object.entries(l)) {
        const m = i.options[d],
          h = typeof m == 'object' ? (m[a] ?? 1) : (m ?? 1);
        u += (p / 100) * h;
      }
      return u;
    }
    if (!i.appliesWhen || !n[i.appliesWhen]) return 1;
    let s = 0;
    for (const [a, u] of Object.entries(l)) {
      const d = i.options[a] ?? 1;
      s += (u / 100) * d;
    }
    return s;
  }
  return 1;
}
function jg(n, i) {
  const l = (i == null ? void 0 : i.causes) || zn,
    s = (i == null ? void 0 : i.dimensions) || tl,
    a = Object.keys(l),
    u = {};
  for (const h of a) {
    const g = l[h];
    let w = g.points;
    for (const [x, k] of Object.entries(s)) {
      const T = n[x];
      T && (w *= lu(g, k, T));
    }
    u[h] = w;
  }
  const d = a.map((h) => u[h]),
    p = nu(d, 100, 1),
    m = { evs: u };
  return (
    a.forEach((h, g) => {
      m[h] = p[g];
    }),
    m
  );
}
function Lg(n, i) {
  const l = (i == null ? void 0 : i.causes) || zn,
    s = (i == null ? void 0 : i.dimensions) || tl,
    a = _p(l);
  for (const { options: d, probability: p } of ru(n)) {
    const m = iu(d, l, s),
      h = Tg(m),
      g = p / h.length;
    for (const w of h) a[w] += g;
  }
  const u = {};
  for (const d of Object.keys(l)) u[d] = a[d] * 100;
  return u;
}
function Pg(n, i) {
  const l = (i == null ? void 0 : i.causes) || zn,
    s = (i == null ? void 0 : i.dimensions) || tl,
    a = xp(i),
    u = Object.keys(l),
    d = _p(l);
  for (const { options: p, probability: m } of ru(n)) {
    const h = iu(p, l, s),
      g = m * 100,
      w = u.map((k) => h[k]),
      x = nu(w, g, a);
    u.forEach((k, T) => {
      d[k] += x[T];
    });
  }
  return d;
}
function Og(n, i) {
  const l = (i == null ? void 0 : i.causes) || zn,
    s = (i == null ? void 0 : i.dimensions) || tl,
    a = Object.keys(l),
    u = Rg(a),
    d = [...ru(n, 500, 1e3)];
  let p = u[0],
    m = -1 / 0;
  for (const h of u) {
    let g = 1 / 0;
    for (const { options: w, probability: x } of d) {
      if (x < 1e-4) continue;
      const k = iu(w, l, s);
      let T = 0;
      for (const N of a) T += k[N] * (h[N] / 100);
      g = Math.min(g, T);
    }
    g > m && ((m = g), (p = { ...h }));
  }
  return p;
}
function Rg(n) {
  const i = [],
    l = n.length,
    s = (m) => {
      const h = {};
      return (
        n.forEach((g, w) => {
          h[g] = m[w];
        }),
        h
      );
    };
  for (let m = 0; m < l; m++) {
    const h = new Array(l).fill(0);
    ((h[m] = 100), i.push(s(h)));
  }
  for (let m = 0; m < l; m++)
    for (let h = m + 1; h < l; h++) {
      const g = new Array(l).fill(0);
      ((g[m] = 50), (g[h] = 50), i.push(s(g)));
    }
  const a = Math.floor(100 / l),
    u = 100 - a * l,
    d = new Array(l).fill(a);
  ((d[0] += u), i.push(s(d)));
  const p = [
    [60, 20, 20],
    [70, 15, 15],
    [80, 10, 10],
  ];
  for (const m of p)
    if (m.length === l)
      for (let h = 0; h < l; h++) {
        const g = new Array(l).fill(0);
        g[h] = m[0];
        let w = 1;
        for (let x = 0; x < l; x++) x !== h && w < m.length && (g[x] = m[w++]);
        i.push(s(g));
      }
  return i;
}
function ou(n, i, l, s = null, a = null) {
  const u = Array.isArray(a) ? a : a ? [a] : [],
    d = u.reduce((k, T) => k + (l[T] || 0), 0),
    p = 100 - d;
  i = Math.max(0, Math.min(p, i));
  const m = s || l,
    h = Object.keys(l).filter((k) => k !== n && !u.includes(k)),
    g = h.reduce((k, T) => k + m[T], 0),
    w = 100 - i - d,
    x = { [n]: i };
  for (const k of u) x[k] = l[k];
  if (g === 0) {
    const k = Math.floor(w / h.length);
    let T = w - k * h.length;
    h.forEach((N, O) => {
      x[N] = k + (O < T ? 1 : 0);
    });
  } else {
    let k = 0;
    h.forEach((T, N) => {
      if (N === h.length - 1) x[T] = Math.max(0, w - k);
      else {
        const O = m[T] / g,
          L = w * O;
        ((x[T] = Math.max(0, L)), (k += x[T]));
      }
    });
  }
  return x;
}
function su(n) {
  const i = Object.keys(n),
    l = {};
  let s = 0;
  return (
    i.slice(0, -1).forEach((a) => {
      ((l[a] = Math.round(n[a])), (s += l[a]));
    }),
    (l[i[i.length - 1]] = 100 - s),
    l
  );
}
function Mg(n, i) {
  const l = (i == null ? void 0 : i.causes) || zn,
    s = (i == null ? void 0 : i.dimensions) || tl,
    a = Object.keys(l),
    u = {};
  for (const d of a) {
    const p = l[d];
    let m = p.points;
    for (const [h, g] of Object.entries(s)) {
      const w = n[h];
      w && (m *= lu(p, g, w));
    }
    u[d] = m;
  }
  return u;
}
function Ag(n, i = {}) {
  const { budget: l = 100 } = i,
    s = i.power ?? xp(i);
  if (n.length === 0) throw new Error('At least one worldview is required');
  const a = Object.keys(n[0].evs),
    u = n.reduce((m, h) => m + (h.weight || 1), 0),
    d = {};
  for (const m of a) d[m] = 0;
  const p = [];
  for (const m of n) {
    const h = m.weight || 1,
      g = (h / u) * l,
      w = a.map((T) => m.evs[T] || 0),
      x = nu(w, g, s),
      k = {};
    (a.forEach((T, N) => {
      ((d[T] += x[N]), (k[T] = x[N]));
    }),
      p.push({ name: m.name, weight: h, share: g, allocation: k }));
  }
  return { allocation: d, worldviewAllocations: p, config: { power: s, budget: l } };
}
function Cp(n, i) {
  const { scale: l, min: s, max: a } = i;
  return l === 'logarithmic' ? s * Math.pow(a / s, n) : s + n * (a - s);
}
function Dg(n, i) {
  return Cp(n, i);
}
function zg(n, i, l) {
  var d;
  const s = (l == null ? void 0 : l.causes) || zn,
    a = Object.keys(s),
    u = {};
  for (const p of a) {
    const m = s[p];
    let h = m.points;
    for (const g of i) {
      const w = n[g.id];
      if (!w || !g.worldviewDimension) continue;
      const x = g.worldviewDimension;
      if (g.type === 'ratio' && g.ratioConfig) {
        const k =
            ((d = w.credences) == null ? void 0 : d.value) ?? g.ratioConfig.defaultValue ?? 0.5,
          T = Cp(k, g.ratioConfig);
        Fg(m, x) && (x.directMultiplier ? (h *= T) : (h *= 1 / T));
      } else if (w.credences) {
        const k = lu(m, x, w.credences);
        h *= k;
      }
    }
    u[p] = h;
  }
  return u;
}
function Fg(n, i) {
  return i.appliesTo ? n[i.appliesTo] !== void 0 : i.appliesWhen ? n[i.appliesWhen] === !0 : !1;
}
const Bg = 897,
  Wg = 10,
  Vg = {
    malaria_nets: {
      tags: { near_term_xrisk: !1 },
      diminishing_returns: [
        1, 0.833, 0.714, 0.625, 0.556, 0.5, 0.455, 0.417, 0.385, 0.357, 0.333, 0.313, 0.294, 0.278,
        0.263, 0.25, 0.238, 0.227, 0.217, 0.208, 0.2, 0.192, 0.185, 0.179, 0.173, 0.167, 0.161,
        0.156, 0.152, 0.147, 0.143, 0.139, 0.135, 0.132, 0.128, 0.125, 0.122, 0.119, 0.116, 0.114,
        0.111, 0.109, 0.106, 0.104, 0.102, 0.1, 0.098, 0.096, 0.094, 0.093, 0.091, 0.089, 0.088,
        0.087, 0.085, 0.084, 0.082, 0.081, 0.08, 0.079, 0.077, 0.076, 0.075, 0.074, 0.073, 0.072,
        0.071, 0.07, 0.069, 0.068, 0.068, 0.067, 0.066, 0.065, 0.065, 0.064, 0.063, 0.063, 0.062,
        0.061, 0.061, 0.06, 0.06, 0.059, 0.059, 0.058, 0.058, 0.057, 0.057, 0.056,
      ],
      effects: {
        effect_lives_saved: {
          recipient_type: 'human_life_years',
          values: [
            [1e3, 950, 900, 850],
            [800, 760, 720, 680],
            [400, 380, 360, 340],
            [100, 95, 90, 85],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
        },
        effect_disability_reduction: {
          recipient_type: 'human_ylds',
          values: [
            [500, 475, 450, 425],
            [600, 570, 540, 510],
            [400, 380, 360, 340],
            [200, 190, 180, 170],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
        },
        effect_income: {
          recipient_type: 'human_income_doublings',
          values: [
            [0, 0, 0, 0],
            [50, 47, 45, 42],
            [100, 95, 90, 85],
            [80, 76, 72, 68],
            [20, 19, 18, 17],
            [0, 0, 0, 0],
          ],
        },
      },
    },
    cage_free_campaigns: {
      tags: { near_term_xrisk: !1 },
      diminishing_returns: [
        1, 0.667, 0.5, 0.4, 0.333, 0.286, 0.25, 0.222, 0.2, 0.182, 0.167, 0.154, 0.143, 0.133,
        0.125, 0.118, 0.111, 0.105, 0.1, 0.095, 0.091, 0.087, 0.083, 0.08, 0.077, 0.074, 0.071,
        0.069, 0.067, 0.065, 0.063, 0.061, 0.059, 0.057, 0.056, 0.054, 0.053, 0.051, 0.05, 0.049,
        0.048, 0.047, 0.046, 0.045, 0.044, 0.043, 0.042, 0.041, 0.04, 0.039, 0.038, 0.038, 0.037,
        0.036, 0.036, 0.035, 0.035, 0.034, 0.034, 0.033, 0.033, 0.032, 0.032, 0.031, 0.031, 0.031,
        0.03, 0.03, 0.03, 0.029, 0.029, 0.029, 0.028, 0.028, 0.028, 0.028, 0.027, 0.027, 0.027,
        0.027, 0.026, 0.026, 0.026, 0.026, 0.026, 0.025, 0.025, 0.025, 0.025, 0.025,
      ],
      effects: {
        effect_chickens: {
          recipient_type: 'chickens_birds',
          values: [
            [5e4, 45e3, 4e4, 35e3],
            [8e4, 72e3, 64e3, 56e3],
            [6e4, 54e3, 48e3, 42e3],
            [2e4, 18e3, 16e3, 14e3],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
        },
      },
    },
    shrimp_welfare: {
      tags: { near_term_xrisk: !1 },
      diminishing_returns: [
        1, 0.667, 0.5, 0.4, 0.333, 0.286, 0.25, 0.222, 0.2, 0.182, 0.167, 0.154, 0.143, 0.133,
        0.125, 0.118, 0.111, 0.105, 0.1, 0.095, 0.091, 0.087, 0.083, 0.08, 0.077, 0.074, 0.071,
        0.069, 0.067, 0.065, 0.063, 0.061, 0.059, 0.057, 0.056, 0.054, 0.053, 0.051, 0.05, 0.049,
        0.048, 0.047, 0.046, 0.045, 0.044, 0.043, 0.042, 0.041, 0.04, 0.039, 0.038, 0.038, 0.037,
        0.036, 0.036, 0.035, 0.035, 0.034, 0.034, 0.033, 0.033, 0.032, 0.032, 0.031, 0.031, 0.031,
        0.03, 0.03, 0.03, 0.029, 0.029, 0.029, 0.028, 0.028, 0.028, 0.028, 0.027, 0.027, 0.027,
        0.027, 0.026, 0.026, 0.026, 0.026, 0.026, 0.025, 0.025, 0.025, 0.025, 0.025,
      ],
      effects: {
        effect_shrimp: {
          recipient_type: 'shrimp',
          values: [
            [1e6, 8e5, 6e5, 4e5],
            [2e6, 16e5, 12e5, 8e5],
            [15e5, 12e5, 9e5, 6e5],
            [5e5, 4e5, 3e5, 2e5],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
        },
      },
    },
    wild_animal_welfare: {
      tags: { near_term_xrisk: !1 },
      diminishing_returns: [
        1, 0.769, 0.625, 0.526, 0.455, 0.4, 0.357, 0.323, 0.294, 0.27, 0.25, 0.233, 0.217, 0.204,
        0.192, 0.182, 0.172, 0.164, 0.156, 0.149, 0.143, 0.137, 0.132, 0.127, 0.122, 0.118, 0.114,
        0.11, 0.107, 0.104, 0.101, 0.098, 0.096, 0.093, 0.091, 0.089, 0.087, 0.085, 0.083, 0.081,
        0.079, 0.078, 0.076, 0.075, 0.073, 0.072, 0.071, 0.069, 0.068, 0.067, 0.066, 0.065, 0.064,
        0.063, 0.063, 0.062, 0.061, 0.06, 0.06, 0.059, 0.058, 0.058, 0.057, 0.057, 0.056, 0.056,
        0.055, 0.055, 0.054, 0.054, 0.053, 0.053, 0.053, 0.052, 0.052, 0.052, 0.051, 0.051, 0.051,
        0.05, 0.05, 0.05, 0.05, 0.049, 0.049, 0.049, 0.049, 0.048, 0.048, 0.048,
      ],
      effects: {
        effect_mammals: {
          recipient_type: 'mammals',
          values: [
            [100, 80, 50, 30],
            [500, 400, 250, 150],
            [1e3, 800, 500, 300],
            [800, 640, 400, 240],
            [200, 160, 100, 60],
            [0, 0, 0, 0],
          ],
        },
        effect_invertebrates: {
          recipient_type: 'non_shrimp_invertebrates',
          values: [
            [1e4, 8e3, 5e3, 3e3],
            [5e4, 4e4, 25e3, 15e3],
            [1e5, 8e4, 5e4, 3e4],
            [8e4, 64e3, 4e4, 24e3],
            [2e4, 16e3, 1e4, 6e3],
            [0, 0, 0, 0],
          ],
        },
      },
    },
    fish_welfare: {
      tags: { near_term_xrisk: !1 },
      diminishing_returns: [
        1, 0.667, 0.5, 0.4, 0.333, 0.286, 0.25, 0.222, 0.2, 0.182, 0.167, 0.154, 0.143, 0.133,
        0.125, 0.118, 0.111, 0.105, 0.1, 0.095, 0.091, 0.087, 0.083, 0.08, 0.077, 0.074, 0.071,
        0.069, 0.067, 0.065, 0.063, 0.061, 0.059, 0.057, 0.056, 0.054, 0.053, 0.051, 0.05, 0.049,
        0.048, 0.047, 0.046, 0.045, 0.044, 0.043, 0.042, 0.041, 0.04, 0.039, 0.038, 0.038, 0.037,
        0.036, 0.036, 0.035, 0.035, 0.034, 0.034, 0.033, 0.033, 0.032, 0.032, 0.031, 0.031, 0.031,
        0.03, 0.03, 0.03, 0.029, 0.029, 0.029, 0.028, 0.028, 0.028, 0.028, 0.027, 0.027, 0.027,
        0.027, 0.026, 0.026, 0.026, 0.026, 0.026, 0.025, 0.025, 0.025, 0.025, 0.025,
      ],
      effects: {
        effect_fish: {
          recipient_type: 'fish',
          values: [
            [1e5, 9e4, 8e4, 7e4],
            [2e5, 18e4, 16e4, 14e4],
            [15e4, 135e3, 12e4, 105e3],
            [5e4, 45e3, 4e4, 35e3],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
        },
      },
    },
    ai_safety_policy: {
      tags: { near_term_xrisk: !0 },
      diminishing_returns: [
        1, 0.909, 0.833, 0.769, 0.714, 0.667, 0.625, 0.588, 0.556, 0.526, 0.5, 0.476, 0.455, 0.435,
        0.417, 0.4, 0.385, 0.37, 0.357, 0.345, 0.333, 0.323, 0.313, 0.303, 0.294, 0.286, 0.278,
        0.27, 0.263, 0.256, 0.25, 0.244, 0.238, 0.233, 0.227, 0.222, 0.217, 0.213, 0.208, 0.204,
        0.2, 0.196, 0.192, 0.189, 0.185, 0.182, 0.179, 0.176, 0.173, 0.17, 0.167, 0.164, 0.161,
        0.159, 0.156, 0.154, 0.152, 0.149, 0.147, 0.145, 0.143, 0.141, 0.139, 0.137, 0.135, 0.134,
        0.132, 0.13, 0.129, 0.127, 0.126, 0.124, 0.123, 0.121, 0.12, 0.119, 0.117, 0.116, 0.115,
        0.114, 0.112, 0.111, 0.11, 0.109, 0.108, 0.107, 0.106, 0.105, 0.104, 0.103,
      ],
      effects: {
        effect_human_lives_far_future: {
          recipient_type: 'human_life_years',
          values: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [100, 50, -50, -100],
            [1e4, 8e3, 5e3, 3e3],
            [5e4, 4e4, 25e3, 15e3],
            [1e5, 8e4, 5e4, 3e4],
          ],
        },
      },
    },
  },
  $g = { budget: Bg, incrementSize: Wg, projects: Vg },
  { projects: Yi, budget: Ug, incrementSize: Ep } = $g,
  qg = ['disability', 'income', 'animal', 'invertebrate', 'timeframes', 'risk', 'xrisk'];
function Hg() {
  const n = {};
  for (const l of _o.questions) l.options && (n[l.id] = l);
  const i = [];
  for (const l of qg) {
    const s = n[l];
    if (!s || s.options[0].marketplaceValue === void 0) continue;
    const a = s.options.map((u) => u.marketplaceValue);
    i.push({ questionId: l, optionValues: a });
  }
  return i;
}
const au = Hg(),
  Sf = au.map((n) => n.optionValues);
function Qg(n, i, l, s) {
  const a = n * l,
    u = n * s,
    d = (u + a) / 2;
  return {
    human_life_years: 1,
    human_ylds: n,
    human_income_doublings: i,
    chickens_birds: a,
    mammals: a,
    fish: d,
    shrimp: u,
    non_shrimp_invertebrates: u,
  };
}
function Kg(n, i, l, s) {
  const a = n.values;
  let u = 0;
  for (let d = 0; d < 6; d++) u += a[d][s] * l[d];
  return i * u;
}
function Gg(n, i, l, s) {
  let a = 0;
  for (const u of Object.values(n.effects)) {
    const d = i[u.recipient_type] ?? 0;
    a += Kg(u, d, l, s);
  }
  return a;
}
function Yg(n, i, l, s) {
  const a = {};
  for (const [u, d] of Object.entries(n)) a[u] = Gg(d, i, l, s);
  return a;
}
function Xg(n, i, l) {
  const s = {};
  for (const [a, u] of Object.entries(n))
    i[a].tags.near_term_xrisk ? (s[a] = u) : (s[a] = u * (1 - l));
  return s;
}
function Jg(n = Yi) {
  if (Sf.length < 7) return [];
  const [i, l, s, a, u, d, p] = Sf,
    m = [];
  for (const h of i)
    for (const g of l)
      for (const w of s)
        for (const x of a)
          for (let k = 0; k < u.length; k++)
            for (const T of d)
              for (const N of p) {
                const O = Qg(h, g, w, x),
                  L = u[k],
                  D = Yg(n, O, L, T),
                  z = Xg(D, n, N);
                m.push({ project_values: z });
              }
  return m;
}
let ka = null;
function Zg() {
  return (ka || (ka = Jg()), ka);
}
function ey(n) {
  const i = [];
  let l = 0;
  const [s, a, u, d, p, m, h] = n;
  for (let g = 0; g < s.length; g++)
    for (let w = 0; w < a.length; w++)
      for (let x = 0; x < u.length; x++)
        for (let k = 0; k < d.length; k++)
          for (let T = 0; T < p.length; T++)
            for (let N = 0; N < m.length; N++)
              for (let O = 0; O < h.length; O++) {
                const L = s[g] * a[w] * u[x] * d[k] * p[T] * m[N] * h[O];
                (L > 0 && i.push({ result_idx: l, credence: L }), l++);
              }
  return i;
}
function ty(n, i, l = Yi) {
  const s = Object.keys(l),
    a = s.length,
    u = i.length,
    d = new Float64Array(u * a),
    p = new Float64Array(u);
  for (let h = 0; h < u; h++) {
    const g = n[i[h].result_idx].project_values;
    p[h] = i[h].credence;
    const w = h * a;
    for (let x = 0; x < a; x++) d[w + x] = g[s[x]];
  }
  const m = s.map((h) => {
    const g = l[h].diminishing_returns,
      w = new Float64Array(g.length);
    return (w.set(g), w);
  });
  return { scoreMatrix: d, credences: p, numActive: u, projectIds: s, drArrays: m };
}
function ny(n, i, l, { packed: s }) {
  const { scoreMatrix: a, credences: u, numActive: d, projectIds: p, drArrays: m } = s,
    h = p.length,
    g = new Float64Array(h);
  for (let k = 0; k < h; k++) {
    const T = Math.floor(i[p[k]] / 10),
      N = m[k];
    g[k] = T >= N.length ? N[N.length - 1] : N[T];
  }
  const w = new Float64Array(h);
  for (let k = 0; k < d; k++) {
    const T = k * h,
      N = u[k] * l;
    let O = 0,
      L = a[T] * g[0];
    for (let D = 1; D < h; D++) {
      const z = a[T + D] * g[D];
      z > L && ((L = z), (O = D));
    }
    w[O] += N;
  }
  const x = {};
  for (let k = 0; k < h; k++) x[p[k]] = w[k];
  return x;
}
function ry(n, i, l, s = {}) {
  const a = s.incrementSize ?? Ep,
    u = {};
  for (const p of Object.keys(n)) u[p] = 0;
  let d = l;
  for (; d > 0; ) {
    const p = Math.min(a, d),
      m = i(n, u, p, s);
    for (const h of Object.keys(n)) u[h] += m[h];
    d -= p;
  }
  return { funding: u };
}
function iy(n) {
  const i = [];
  for (const l of au) {
    const s = n[l.questionId];
    if (!s) {
      const d = l.optionValues.length;
      i.push(new Array(d).fill(1 / d));
      continue;
    }
    const a = _o.questions.find((d) => d.id === l.questionId);
    if (!a || !a.options) {
      const d = l.optionValues.length;
      i.push(new Array(d).fill(1 / d));
      continue;
    }
    const u = a.options.map((d) => (s[d.key] ?? 0) / 100);
    i.push(u);
  }
  return i;
}
function ly(n, i = {}) {
  if (au.length < 7) {
    const m = {};
    for (const h of Object.keys(Yi)) m[h] = 0;
    return m;
  }
  const l = i.budget ? i.budget / 1e6 : Ug,
    s = iy(n),
    a = ey(s),
    u = ty(Zg(), a, Yi),
    { funding: d } = ry(Yi, ny, l, { packed: u, incrementSize: Ep }),
    p = {};
  for (const [m, h] of Object.entries(d)) p[m] = (h / l) * 100;
  return p;
}
const oy = [
  { flag: 'showMoralMarketplace', key: 'moralMarketplace', hasEvs: !1 },
  { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
  { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
  { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
  { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
];
function uu() {
  var l;
  const n = ((l = hn.calculations) == null ? void 0 : l.order) || [];
  return [...oy]
    .sort((s, a) => {
      const u = n.indexOf(s.key),
        d = n.indexOf(a.key);
      return u === -1 && d === -1 ? 0 : u === -1 ? 1 : d === -1 ? -1 : u - d;
    })
    .filter((s) => {
      var a;
      return ((a = hn.calculations) == null ? void 0 : a[s.flag]) === !0;
    });
}
const sy = hn.advanced === !0,
  ay = _o,
  { questions: uy } = ay,
  { causes: cy, defaultCredences: dy } = Co;
function fy(n) {
  var i;
  return !((i = n.type) != null && i.startsWith('_'));
}
const ot = uy.filter(fy);
function Dn(n) {
  return (n == null ? void 0 : n.type) === tt.INTERMISSION;
}
function xa(n, i) {
  let l = 0;
  for (let s = 0; s < i; s++) Dn(n[s]) || l++;
  return l;
}
function py(n) {
  {
    const i = n.type || tt.DEFAULT;
    return xf[i] || xf[tt.DEFAULT];
  }
}
const hy = ot.filter((n) => !Dn(n)),
  Sa = hy.length,
  _f = ot.map((n) => {
    var l;
    if (Dn(n)) return { ...n, type: tt.INTERMISSION };
    if (n.type === tt.RATIO) return { ...n, type: tt.RATIO };
    const i = py(n);
    return {
      ...n,
      type: n.type || tt.DEFAULT,
      options: (l = n.options) == null ? void 0 : l.map((s, a) => ({ ...s, color: i[a] || i[0] })),
    };
  });
function cu(n) {
  var a;
  if (n.type === tt.RATIO)
    return { value: ((a = n.ratioConfig) == null ? void 0 : a.defaultValue) ?? 0.5 };
  if (n.defaultCredences) return { ...n.defaultCredences };
  if (!n.options) return {};
  const i = n.options.map((u) => u.key),
    l = Math.floor(100 / i.length),
    s = 100 - l * i.length;
  return Object.fromEntries(i.map((u, d) => [u, l + (d === 0 ? s : 0)]));
}
function bp(n) {
  var i;
  return n.type === tt.RATIO
    ? {
        credences: { value: ((i = n.ratioConfig) == null ? void 0 : i.defaultValue) ?? 0.5 },
        originalCredences: null,
        inputMode: Da.OPTIONS,
        lockedKeys: [],
        selectedPreset: null,
      }
    : {
        credences: cu(n),
        originalCredences: null,
        inputMode: Da.OPTIONS,
        lockedKeys: [],
        selectedPreset: null,
      };
}
function Fa() {
  return Object.fromEntries(ot.filter((n) => !Dn(n)).map((n) => [n.id, bp(n)]));
}
const Np = 6,
  Ip = ['1', '2', '3'];
function Ba() {
  return Object.fromEntries(Ip.map((n) => [n, { questions: Fa(), completed: !1 }]));
}
function my(n) {
  return n != null && n.questions
    ? Object.entries(n.questions).some(([i, l]) => {
        if (!l.credences) return !1;
        const s = ot.find((u) => u.id === i);
        if (!s) return !1;
        const a = cu(s);
        return Object.entries(l.credences).some(([u, d]) => d !== (a[u] ?? 0));
      })
    : !1;
}
function Wa() {
  return Object.fromEntries(Ip.map((n) => [n, `Worldview ${n}`]));
}
const Va = 9e8,
  Tp = () => 'disclaimer',
  jp = {
    currentStep: Tp(),
    worldviews: Ba(),
    worldviewNames: Wa(),
    activeWorldviewId: '1',
    expandedPanel: null,
    debugConfig: null,
    selectedCalculations: { left: null, right: null },
    marketplaceBudget: Va,
    justCompletedWorldview: null,
  },
  Le = {
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
    SET_JUST_COMPLETED_WORLDVIEW: 'SET_JUST_COMPLETED_WORLDVIEW',
    CLEAR_JUST_COMPLETED_WORLDVIEW: 'CLEAR_JUST_COMPLETED_WORLDVIEW',
    MARK_WORLDVIEW_COMPLETED: 'MARK_WORLDVIEW_COMPLETED',
    ADD_WORLDVIEW: 'ADD_WORLDVIEW',
  };
function $a(n) {
  return n.worldviews[n.activeWorldviewId].questions;
}
function gy(n, i, l) {
  const s = $a(n),
    a = n.worldviews[n.activeWorldviewId];
  return {
    ...n,
    worldviews: {
      ...n.worldviews,
      [n.activeWorldviewId]: { ...a, questions: { ...s, [i]: { ...s[i], ...l } } },
    },
  };
}
function yy(n, i) {
  switch (i.type) {
    case Le.GO_TO_STEP:
      return { ...n, currentStep: i.payload };
    case Le.UPDATE_QUESTION:
      return gy(n, i.payload.questionId, i.payload.updates);
    case Le.SET_EXPANDED_PANEL:
      return { ...n, expandedPanel: i.payload };
    case Le.SAVE_ORIGINALS: {
      const l = $a(n),
        s = n.worldviews[n.activeWorldviewId];
      return {
        ...n,
        worldviews: {
          ...n.worldviews,
          [n.activeWorldviewId]: {
            ...s,
            questions: Object.fromEntries(
              Object.entries(l).map(([a, u]) => [
                a,
                { ...u, originalCredences: u.originalCredences || { ...u.credences } },
              ])
            ),
          },
        },
      };
    }
    case Le.RESET_TO_ORIGINAL: {
      const l = $a(n),
        s = n.worldviews[n.activeWorldviewId];
      return {
        ...n,
        worldviews: {
          ...n.worldviews,
          [n.activeWorldviewId]: {
            ...s,
            questions: Object.fromEntries(
              Object.entries(l).map(([a, u]) => [
                a,
                { ...u, credences: u.originalCredences ? { ...u.originalCredences } : u.credences },
              ])
            ),
          },
        },
      };
    }
    case Le.RESET_QUIZ:
      return { ...jp, currentStep: Tp(), worldviews: Ba(), worldviewNames: Wa() };
    case Le.SWITCH_WORLDVIEW:
      return n.worldviews[i.payload] ? { ...n, activeWorldviewId: i.payload } : n;
    case Le.SET_WORLDVIEW_NAME: {
      const { worldviewId: l, name: s } = i.payload;
      return n.worldviews[l] ? { ...n, worldviewNames: { ...n.worldviewNames, [l]: s } } : n;
    }
    case Le.SET_MARKETPLACE_BUDGET:
      return { ...n, marketplaceBudget: i.payload };
    case Le.MARK_WORLDVIEW_COMPLETED: {
      const l = i.payload;
      return n.worldviews[l]
        ? { ...n, worldviews: { ...n.worldviews, [l]: { ...n.worldviews[l], completed: !0 } } }
        : n;
    }
    case Le.ADD_WORLDVIEW: {
      const l = Object.keys(n.worldviews);
      if (
        l.length >= Np ||
        !l.every((d) => {
          var p;
          return (p = n.worldviews[d]) == null ? void 0 : p.completed;
        })
      )
        return n;
      const a = Math.max(...l.map((d) => parseInt(d, 10))),
        u = String(a + 1);
      return {
        ...n,
        worldviews: { ...n.worldviews, [u]: { questions: Fa(), completed: !1 } },
        worldviewNames: { ...n.worldviewNames, [u]: `Worldview ${u}` },
        activeWorldviewId: u,
        currentStep: ot[0].id,
      };
    }
    case Le.RESTORE_FROM_URL:
    case Le.RESTORE_FROM_SESSION: {
      const l = i.type === Le.RESTORE_FROM_URL,
        {
          worldviews: s,
          worldviewNames: a,
          activeWorldviewId: u,
          questions: d,
          credences: p,
          currentStep: m,
          selectedCalculations: h,
          marketplaceBudget: g,
        } = i.payload,
        w = (N, O) => ({
          credences: N.credences,
          originalCredences: N.originalCredences
            ? { ...N.originalCredences }
            : O
              ? { ...N.credences }
              : null,
          inputMode: N.inputMode || Da.OPTIONS,
          lockedKeys: N.lockedKeys || (N.lockedKey ? [N.lockedKey] : []),
          selectedPreset: N.selectedPreset || null,
        }),
        x = (N, O) => {
          const L = {};
          for (const [D, z] of Object.entries(N)) {
            const ee = {};
            for (const [te, A] of Object.entries(z.questions)) ee[te] = w(A, O);
            L[D] = { questions: ee, completed: z.completed || !1 };
          }
          return (L[1] || (L[1] = { questions: Fa(), completed: !1 }), L);
        },
        k = (N, O) => {
          const L = {},
            D = Object.keys(O || {});
          D.includes('1') || D.push('1');
          for (const z of D) L[z] = (N == null ? void 0 : N[z]) || `Worldview ${z}`;
          return L;
        };
      if (s && u)
        return {
          ...n,
          currentStep: l ? 'results' : m,
          worldviews: x(s, l),
          worldviewNames: k(a, s),
          activeWorldviewId: u,
          selectedCalculations: h || n.selectedCalculations,
          marketplaceBudget: g || Va,
        };
      const T = {};
      if (d) for (const [N, O] of Object.entries(d)) T[N] = w(O, l);
      else if (p)
        for (const [N, O] of Object.entries(p))
          T[N] = { ...bp(), credences: O, originalCredences: l ? { ...O } : null };
      return {
        ...n,
        currentStep: l ? 'results' : m,
        worldviews: { ...Ba(), 1: { questions: T, completed: !1 } },
        worldviewNames: Wa(),
        activeWorldviewId: '1',
        marketplaceBudget: Va,
      };
    }
    case Le.SET_DEBUG_CONFIG:
      return { ...n, debugConfig: i.payload };
    case Le.SET_JUST_COMPLETED_WORLDVIEW:
      return { ...n, justCompletedWorldview: i.payload };
    case Le.CLEAR_JUST_COMPLETED_WORLDVIEW:
      return { ...n, justCompletedWorldview: null };
    case Le.SET_SELECTED_CALCULATIONS:
      return { ...n, selectedCalculations: { ...n.selectedCalculations, ...i.payload } };
    default:
      return n;
  }
}
const Lp = W.createContext(null);
function vy({ children: n }) {
  const [i, l] = W.useReducer(yy, jp),
    [s, a] = W.useState(null),
    [u, d] = W.useState(!0),
    [p, m] = W.useState(null),
    [h] = W.useState(() => mp()),
    g = W.useRef(null);
  (W.useEffect(() => {
    {
      const J = va();
      (J && l({ type: Le.RESTORE_FROM_SESSION, payload: J }), d(!1));
      return;
    }
  }, []),
    W.useEffect(() => {}, []));
  const w = W.useCallback(() => {
      const J = va();
      (J && l({ type: Le.RESTORE_FROM_SESSION, payload: J }), wa(), m(null));
    }, []),
    x = W.useCallback(() => {
      (p != null && p.shareData && (l({ type: Le.RESTORE_FROM_URL, payload: p.shareData }), ko()),
        wa(),
        m(null));
    }, [p]),
    k = W.useCallback(() => {
      (P0(), p != null && p.shareUrl && window.open(p.shareUrl, '_blank'));
      const J = va();
      (J && l({ type: Le.RESTORE_FROM_SESSION, payload: J }), wa(), m(null));
    }, [p]);
  W.useEffect(() => {
    if (!(u || i.currentStep === 'welcome' || i.currentStep === 'disclaimer'))
      return (
        g.current && clearTimeout(g.current),
        (g.current = setTimeout(() => {
          L0({
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
    u,
  ]);
  const T = W.useCallback((J) => {
      (l({ type: Le.GO_TO_STEP, payload: J }), window.scrollTo(0, 0));
    }, []),
    N = W.useCallback((J, he) => {
      l({ type: Le.UPDATE_QUESTION, payload: { questionId: J, updates: he } });
    }, []),
    O = W.useCallback((J, he) => N(J, { credences: he }), [N]),
    L = W.useCallback((J, he) => N(J, { inputMode: he }), [N]),
    D = W.useCallback((J, he) => N(J, { lockedKeys: he }), [N]),
    z = W.useCallback((J, he) => N(J, { selectedPreset: he }), [N]),
    ee = W.useCallback((J) => {
      l({ type: Le.SET_EXPANDED_PANEL, payload: J });
    }, []),
    te = W.useCallback(() => {
      l({ type: Le.SAVE_ORIGINALS });
    }, []),
    A = W.useCallback(() => {
      l({ type: Le.RESET_TO_ORIGINAL });
    }, []),
    $ = W.useCallback(() => {
      (l({ type: Le.RESET_QUIZ }), ko());
    }, []),
    ue = W.useCallback((J) => {
      l({ type: Le.SET_DEBUG_CONFIG, payload: J });
    }, []),
    se = W.useCallback((J) => {
      l({ type: Le.SWITCH_WORLDVIEW, payload: J });
    }, []),
    fe = W.useCallback((J) => {
      l({ type: Le.SET_SELECTED_CALCULATIONS, payload: J });
    }, []),
    Z = W.useCallback((J, he) => {
      l({ type: Le.SET_WORLDVIEW_NAME, payload: { worldviewId: J, name: he } });
    }, []),
    B = W.useCallback((J) => {
      l({ type: Le.SET_MARKETPLACE_BUDGET, payload: J });
    }, []),
    ge = W.useCallback((J) => {
      l({ type: Le.SET_JUST_COMPLETED_WORLDVIEW, payload: J });
    }, []),
    U = W.useCallback(() => {
      l({ type: Le.CLEAR_JUST_COMPLETED_WORLDVIEW });
    }, []),
    q = W.useCallback((J) => {
      l({ type: Le.MARK_WORLDVIEW_COMPLETED, payload: J });
    }, []),
    ye = W.useCallback(() => {
      l({ type: Le.ADD_WORLDVIEW });
    }, []),
    pe = W.useCallback((J) => ot.findIndex((he) => he.id === J), []),
    G = W.useCallback(
      (J) => {
        const he = pe(J);
        return he === 0 ? 'welcome' : ot[he - 1].id;
      },
      [pe]
    ),
    re = W.useCallback(
      (J) => {
        const he = pe(J);
        return he === ot.length - 1 ? 'results' : ot[he + 1].id;
      },
      [pe]
    ),
    S = W.useCallback(() => {
      T(ot[0].id);
    }, [T]),
    I = W.useCallback(() => {
      i.currentStep === 'results' ? T(ot[ot.length - 1].id) : T(G(i.currentStep));
    }, [i.currentStep, T, G]),
    F = W.useCallback(() => {
      const J = re(i.currentStep);
      (J === 'results' && te(), T(J));
    }, [i.currentStep, i.activeWorldviewId, T, re, te, q, ge]),
    _ = W.useMemo(
      () => i.worldviews[i.activeWorldviewId].questions,
      [i.worldviews, i.activeWorldviewId]
    ),
    ce = W.useCallback(
      (J) => {
        var xe;
        const he = J === 'original' ? 'originalCredences' : 'credences',
          M = ot.filter((Ne) => !Dn(Ne)),
          Q = _[(xe = M[0]) == null ? void 0 : xe.id];
        return J === 'original' && !(Q != null && Q.originalCredences)
          ? null
          : Object.fromEntries(
              M.map((Ne) => {
                var Oe;
                return [Ne.id, ((Oe = _[Ne.id]) == null ? void 0 : Oe[he]) || cu(Ne)];
              })
            );
      },
      [_]
    ),
    _e = W.useCallback((J, he, M, Q) => {
      switch (J) {
        case 'moralMarketplace':
          return ly(he, { budget: Q });
        case 'maxEV':
          return jg(he, M);
        case 'parliament':
          return Lg(he, M);
        case 'mergedFavorites':
          return Pg(he, M);
        case 'maximin':
          return Og(he, M);
        default:
          return null;
      }
    }, []),
    ve = W.useMemo(() => {
      const he = uu().map((M) => M.key);
      {
        const M = new Set();
        return (
          i.selectedCalculations.left && M.add(i.selectedCalculations.left),
          i.selectedCalculations.right && M.add(i.selectedCalculations.right),
          M.size === 0 && he.length > 0 && M.add(he[0]),
          [...M].filter((Q) => he.includes(Q))
        );
      }
    }, [i.selectedCalculations]),
    Te = W.useMemo(() => ce('current'), [ce]),
    be = W.useMemo(() => {
      const J = ce('original');
      return J || null;
    }, [JSON.stringify(ce('original'))]),
    Pe = W.useMemo(() => {
      if (!Te) return null;
      const J = {};
      for (const he of ve) J[he] = _e(he, Te, i.debugConfig, i.marketplaceBudget);
      return J;
    }, [Te, ve, _e, i.debugConfig, i.marketplaceBudget]),
    qe = W.useMemo(() => {
      if (!be) return null;
      const J = {};
      for (const he of ve) J[he] = _e(he, be, i.debugConfig, i.marketplaceBudget);
      return J;
    }, [be, ve, _e, i.debugConfig, i.marketplaceBudget]),
    It = W.useMemo(
      () =>
        Object.values(_).some(
          (J) =>
            J.originalCredences &&
            JSON.stringify(J.credences) !== JSON.stringify(J.originalCredences)
        ),
      [_]
    ),
    Et = W.useMemo(
      () => Object.keys(i.worldviews).sort((J, he) => parseInt(J, 10) - parseInt(he, 10)),
      [i.worldviews]
    ),
    Ft = W.useMemo(
      () => Object.fromEntries(Et.map((J) => [J, my(i.worldviews[J])])),
      [i.worldviews, Et]
    ),
    Bt = W.useMemo(
      () =>
        Object.fromEntries(
          Et.map((J) => {
            var he;
            return [J, ((he = i.worldviews[J]) == null ? void 0 : he.completed) === !0];
          })
        ),
      [i.worldviews, Et]
    ),
    gn = Et.every((J) => Bt[J]),
    on = Et.length < Np && gn,
    ae = W.useMemo(() => pe(i.currentStep), [i.currentStep, pe]),
    De = W.useMemo(() => (ae === -1 ? null : _f[ae]), [ae]),
    Je = W.useMemo(() => {
      if (ae === -1) return -1;
      const J = ot[ae],
        he = xa(ot, ae);
      return Dn(J) ? he : he + 1;
    }, [ae]),
    pt = W.useMemo(() => {
      if (ae === -1) return 0;
      const J = ot[ae];
      return ((Dn(J) ? xa(ot, ae) : Je) / Sa) * 100;
    }, [ae, Je]),
    vt = W.useMemo(() => {
      if (ae === -1) return '';
      const J = ot[ae];
      return `Question ${Dn(J) ? xa(ot, ae) : Je} of ${Sa}`;
    }, [ae, Je]),
    Yt = W.useMemo(() => {
      const J = {};
      return (
        ot
          .filter((he) => !Dn(he))
          .forEach((he) => {
            const M = _[he.id];
            M &&
              (J[he.id] = {
                credences: M.credences,
                setCredences: (Q) => O(he.id, Q),
                originalCredences: M.originalCredences,
                inputMode: M.inputMode,
                setInputMode: (Q) => L(he.id, Q),
                lockedKeys: M.lockedKeys,
                setLockedKeys: (Q) => D(he.id, Q),
                selectedPreset: M.selectedPreset,
                setSelectedPreset: (Q) => z(he.id, Q),
              });
          }),
        J
      );
    }, [_, O, L, D, z]),
    Wn = W.useMemo(
      () => ({
        currentStep: i.currentStep,
        questions: _,
        worldviews: i.worldviews,
        worldviewNames: i.worldviewNames,
        activeWorldviewId: i.activeWorldviewId,
        expandedPanel: i.expandedPanel,
        debugConfig: i.debugConfig,
        selectedCalculations: i.selectedCalculations,
        marketplaceBudget: i.marketplaceBudget,
        justCompletedWorldview: i.justCompletedWorldview,
        shareUrlError: s,
        isHydrating: u,
        sessionId: h,
        isAdvancedMode: sy,
        questionsConfig: _f,
        causesConfig: cy,
        defaultCredences: dy,
        worldviewIds: Et,
        canAddWorldview: on,
        addWorldview: ye,
        goToStep: T,
        setCredences: O,
        setInputMode: L,
        setLockedKeys: D,
        setSelectedPreset: z,
        setExpandedPanel: ee,
        saveOriginals: te,
        resetToOriginal: A,
        resetQuiz: $,
        setDebugConfig: ue,
        switchWorldview: se,
        setSelectedCalculations: fe,
        setWorldviewName: Z,
        setMarketplaceBudget: B,
        clearJustCompletedWorldview: U,
        getQuestionIndex: pe,
        getPrevStep: G,
        getNextStep: re,
        startQuiz: S,
        goBack: I,
        goForward: F,
        currentQuestion: De,
        currentQuestionIndex: ae,
        totalQuestions: Sa,
        progressPercentage: pt,
        questionNumber: vt,
        hasChanged: It,
        hasProgressMap: Ft,
        completedMap: Bt,
        calculationResults: Pe,
        originalCalculationResults: qe,
        stateMap: Yt,
      }),
      [
        i.currentStep,
        _,
        i.worldviews,
        i.worldviewNames,
        i.activeWorldviewId,
        i.expandedPanel,
        i.debugConfig,
        i.selectedCalculations,
        i.marketplaceBudget,
        i.justCompletedWorldview,
        s,
        u,
        h,
        T,
        O,
        L,
        D,
        z,
        ee,
        te,
        A,
        $,
        ue,
        se,
        fe,
        Z,
        B,
        U,
        pe,
        G,
        re,
        S,
        I,
        F,
        De,
        ae,
        pt,
        vt,
        It,
        Ft,
        Bt,
        Pe,
        qe,
        Yt,
        Et,
        on,
        ye,
      ]
    );
  return v.jsxs(Lp.Provider, {
    value: Wn,
    children: [n, p && v.jsx(kg, { onKeepMine: w, onLoadShared: x, onOpenNewTab: k })],
  });
}
function wy(n, i) {
  const l = {};
  return (n[n.length - 1] === '' ? [...n, ''] : n)
    .join((l.padRight ? ' ' : '') + ',' + (l.padLeft === !1 ? '' : ' '))
    .trim();
}
const ky = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  xy = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Sy = {};
function Cf(n, i) {
  return (Sy.jsx ? xy : ky).test(n);
}
const _y = /[ \t\n\f\r]/g;
function Cy(n) {
  return typeof n == 'object' ? (n.type === 'text' ? Ef(n.value) : !1) : Ef(n);
}
function Ef(n) {
  return n.replace(_y, '') === '';
}
class nl {
  constructor(i, l, s) {
    ((this.normal = l), (this.property = i), s && (this.space = s));
  }
}
nl.prototype.normal = {};
nl.prototype.property = {};
nl.prototype.space = void 0;
function Pp(n, i) {
  const l = {},
    s = {};
  for (const a of n) (Object.assign(l, a.property), Object.assign(s, a.normal));
  return new nl(l, s, i);
}
function Ua(n) {
  return n.toLowerCase();
}
class zt {
  constructor(i, l) {
    ((this.attribute = l), (this.property = i));
  }
}
zt.prototype.attribute = '';
zt.prototype.booleanish = !1;
zt.prototype.boolean = !1;
zt.prototype.commaOrSpaceSeparated = !1;
zt.prototype.commaSeparated = !1;
zt.prototype.defined = !1;
zt.prototype.mustUseProperty = !1;
zt.prototype.number = !1;
zt.prototype.overloadedBoolean = !1;
zt.prototype.property = '';
zt.prototype.spaceSeparated = !1;
zt.prototype.space = void 0;
let Ey = 0;
const Ie = Ir(),
  st = Ir(),
  qa = Ir(),
  Y = Ir(),
  $e = Ir(),
  ri = Ir(),
  Kt = Ir();
function Ir() {
  return 2 ** ++Ey;
}
const Ha = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: Ie,
        booleanish: st,
        commaOrSpaceSeparated: Kt,
        commaSeparated: ri,
        number: Y,
        overloadedBoolean: qa,
        spaceSeparated: $e,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  _a = Object.keys(Ha);
class du extends zt {
  constructor(i, l, s, a) {
    let u = -1;
    if ((super(i, l), bf(this, 'space', a), typeof s == 'number'))
      for (; ++u < _a.length; ) {
        const d = _a[u];
        bf(this, _a[u], (s & Ha[d]) === Ha[d]);
      }
  }
}
du.prototype.defined = !0;
function bf(n, i, l) {
  l && (n[i] = l);
}
function oi(n) {
  const i = {},
    l = {};
  for (const [s, a] of Object.entries(n.properties)) {
    const u = new du(s, n.transform(n.attributes || {}, s), a, n.space);
    (n.mustUseProperty && n.mustUseProperty.includes(s) && (u.mustUseProperty = !0),
      (i[s] = u),
      (l[Ua(s)] = s),
      (l[Ua(u.attribute)] = s));
  }
  return new nl(i, l, n.space);
}
const Op = oi({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: st,
    ariaAutoComplete: null,
    ariaBusy: st,
    ariaChecked: st,
    ariaColCount: Y,
    ariaColIndex: Y,
    ariaColSpan: Y,
    ariaControls: $e,
    ariaCurrent: null,
    ariaDescribedBy: $e,
    ariaDetails: null,
    ariaDisabled: st,
    ariaDropEffect: $e,
    ariaErrorMessage: null,
    ariaExpanded: st,
    ariaFlowTo: $e,
    ariaGrabbed: st,
    ariaHasPopup: null,
    ariaHidden: st,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: $e,
    ariaLevel: Y,
    ariaLive: null,
    ariaModal: st,
    ariaMultiLine: st,
    ariaMultiSelectable: st,
    ariaOrientation: null,
    ariaOwns: $e,
    ariaPlaceholder: null,
    ariaPosInSet: Y,
    ariaPressed: st,
    ariaReadOnly: st,
    ariaRelevant: null,
    ariaRequired: st,
    ariaRoleDescription: $e,
    ariaRowCount: Y,
    ariaRowIndex: Y,
    ariaRowSpan: Y,
    ariaSelected: st,
    ariaSetSize: Y,
    ariaSort: null,
    ariaValueMax: Y,
    ariaValueMin: Y,
    ariaValueNow: Y,
    ariaValueText: null,
    role: null,
  },
  transform(n, i) {
    return i === 'role' ? i : 'aria-' + i.slice(4).toLowerCase();
  },
});
function Rp(n, i) {
  return i in n ? n[i] : i;
}
function Mp(n, i) {
  return Rp(n, i.toLowerCase());
}
const by = oi({
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv',
    },
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: ri,
      acceptCharset: $e,
      accessKey: $e,
      action: null,
      allow: null,
      allowFullScreen: Ie,
      allowPaymentRequest: Ie,
      allowUserMedia: Ie,
      alt: null,
      as: null,
      async: Ie,
      autoCapitalize: null,
      autoComplete: $e,
      autoFocus: Ie,
      autoPlay: Ie,
      blocking: $e,
      capture: null,
      charSet: null,
      checked: Ie,
      cite: null,
      className: $e,
      cols: Y,
      colSpan: null,
      content: null,
      contentEditable: st,
      controls: Ie,
      controlsList: $e,
      coords: Y | ri,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: Ie,
      defer: Ie,
      dir: null,
      dirName: null,
      disabled: Ie,
      download: qa,
      draggable: st,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: Ie,
      formTarget: null,
      headers: $e,
      height: Y,
      hidden: qa,
      high: Y,
      href: null,
      hrefLang: null,
      htmlFor: $e,
      httpEquiv: $e,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: Ie,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: Ie,
      itemId: null,
      itemProp: $e,
      itemRef: $e,
      itemScope: Ie,
      itemType: $e,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: Ie,
      low: Y,
      manifest: null,
      max: null,
      maxLength: Y,
      media: null,
      method: null,
      min: null,
      minLength: Y,
      multiple: Ie,
      muted: Ie,
      name: null,
      nonce: null,
      noModule: Ie,
      noValidate: Ie,
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
      open: Ie,
      optimum: Y,
      pattern: null,
      ping: $e,
      placeholder: null,
      playsInline: Ie,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: Ie,
      referrerPolicy: null,
      rel: $e,
      required: Ie,
      reversed: Ie,
      rows: Y,
      rowSpan: Y,
      sandbox: $e,
      scope: null,
      scoped: Ie,
      seamless: Ie,
      selected: Ie,
      shadowRootClonable: Ie,
      shadowRootDelegatesFocus: Ie,
      shadowRootMode: null,
      shape: null,
      size: Y,
      sizes: null,
      slot: null,
      span: Y,
      spellCheck: st,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: Y,
      step: null,
      style: null,
      tabIndex: Y,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: Ie,
      useMap: null,
      value: st,
      width: Y,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: $e,
      axis: null,
      background: null,
      bgColor: null,
      border: Y,
      borderColor: null,
      bottomMargin: Y,
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
      compact: Ie,
      declare: Ie,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: Y,
      leftMargin: Y,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: Y,
      marginWidth: Y,
      noResize: Ie,
      noHref: Ie,
      noShade: Ie,
      noWrap: Ie,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: Y,
      rules: null,
      scheme: null,
      scrolling: st,
      standby: null,
      summary: null,
      text: null,
      topMargin: Y,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: Y,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: Ie,
      disableRemotePlayback: Ie,
      prefix: null,
      property: null,
      results: Y,
      security: null,
      unselectable: null,
    },
    space: 'html',
    transform: Mp,
  }),
  Ny = oi({
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
      about: Kt,
      accentHeight: Y,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: Y,
      amplitude: Y,
      arabicForm: null,
      ascent: Y,
      attributeName: null,
      attributeType: null,
      azimuth: Y,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: Y,
      by: null,
      calcMode: null,
      capHeight: Y,
      className: $e,
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
      descent: Y,
      diffuseConstant: Y,
      direction: null,
      display: null,
      dur: null,
      divisor: Y,
      dominantBaseline: null,
      download: Ie,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: Y,
      enableBackground: null,
      end: null,
      event: null,
      exponent: Y,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: Y,
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
      g1: ri,
      g2: ri,
      glyphName: ri,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: Y,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: Y,
      horizOriginX: Y,
      horizOriginY: Y,
      id: null,
      ideographic: Y,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: Y,
      k: Y,
      k1: Y,
      k2: Y,
      k3: Y,
      k4: Y,
      kernelMatrix: Kt,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: Y,
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
      mediaSize: Y,
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
      overlinePosition: Y,
      overlineThickness: Y,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: Y,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: $e,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: Y,
      pointsAtY: Y,
      pointsAtZ: Y,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: Kt,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: Kt,
      rev: Kt,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: Kt,
      requiredFeatures: Kt,
      requiredFonts: Kt,
      requiredFormats: Kt,
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
      specularConstant: Y,
      specularExponent: Y,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: Y,
      strikethroughThickness: Y,
      string: null,
      stroke: null,
      strokeDashArray: Kt,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: Y,
      strokeOpacity: Y,
      strokeWidth: null,
      style: null,
      surfaceScale: Y,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: Kt,
      tabIndex: Y,
      tableValues: null,
      target: null,
      targetX: Y,
      targetY: Y,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: Kt,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: Y,
      underlineThickness: Y,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: Y,
      values: null,
      vAlphabetic: Y,
      vMathematical: Y,
      vectorEffect: null,
      vHanging: Y,
      vIdeographic: Y,
      version: null,
      vertAdvY: Y,
      vertOriginX: Y,
      vertOriginY: Y,
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
      xHeight: Y,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: 'svg',
    transform: Rp,
  }),
  Ap = oi({
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
  Dp = oi({
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    properties: { xmlnsXLink: null, xmlns: null },
    space: 'xmlns',
    transform: Mp,
  }),
  zp = oi({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: 'xml',
    transform(n, i) {
      return 'xml:' + i.slice(3).toLowerCase();
    },
  }),
  Iy = {
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
  Ty = /[A-Z]/g,
  Nf = /-[a-z]/g,
  jy = /^data[-\w.:]+$/i;
function Ly(n, i) {
  const l = Ua(i);
  let s = i,
    a = zt;
  if (l in n.normal) return n.property[n.normal[l]];
  if (l.length > 4 && l.slice(0, 4) === 'data' && jy.test(i)) {
    if (i.charAt(4) === '-') {
      const u = i.slice(5).replace(Nf, Oy);
      s = 'data' + u.charAt(0).toUpperCase() + u.slice(1);
    } else {
      const u = i.slice(4);
      if (!Nf.test(u)) {
        let d = u.replace(Ty, Py);
        (d.charAt(0) !== '-' && (d = '-' + d), (i = 'data' + d));
      }
    }
    a = du;
  }
  return new a(s, i);
}
function Py(n) {
  return '-' + n.toLowerCase();
}
function Oy(n) {
  return n.charAt(1).toUpperCase();
}
const Ry = Pp([Op, by, Ap, Dp, zp], 'html'),
  fu = Pp([Op, Ny, Ap, Dp, zp], 'svg');
function My(n) {
  return n.join(' ').trim();
}
var ei = {},
  Ca,
  If;
function Ay() {
  if (If) return Ca;
  If = 1;
  var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    i = /\n/g,
    l = /^\s*/,
    s = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    a = /^:\s*/,
    u = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    d = /^[;\s]*/,
    p = /^\s+|\s+$/g,
    m = `
`,
    h = '/',
    g = '*',
    w = '',
    x = 'comment',
    k = 'declaration';
  function T(O, L) {
    if (typeof O != 'string') throw new TypeError('First argument must be a string');
    if (!O) return [];
    L = L || {};
    var D = 1,
      z = 1;
    function ee(U) {
      var q = U.match(i);
      q && (D += q.length);
      var ye = U.lastIndexOf(m);
      z = ~ye ? U.length - ye : z + U.length;
    }
    function te() {
      var U = { line: D, column: z };
      return function (q) {
        return ((q.position = new A(U)), se(), q);
      };
    }
    function A(U) {
      ((this.start = U), (this.end = { line: D, column: z }), (this.source = L.source));
    }
    A.prototype.content = O;
    function $(U) {
      var q = new Error(L.source + ':' + D + ':' + z + ': ' + U);
      if (
        ((q.reason = U),
        (q.filename = L.source),
        (q.line = D),
        (q.column = z),
        (q.source = O),
        !L.silent)
      )
        throw q;
    }
    function ue(U) {
      var q = U.exec(O);
      if (q) {
        var ye = q[0];
        return (ee(ye), (O = O.slice(ye.length)), q);
      }
    }
    function se() {
      ue(l);
    }
    function fe(U) {
      var q;
      for (U = U || []; (q = Z()); ) q !== !1 && U.push(q);
      return U;
    }
    function Z() {
      var U = te();
      if (!(h != O.charAt(0) || g != O.charAt(1))) {
        for (var q = 2; w != O.charAt(q) && (g != O.charAt(q) || h != O.charAt(q + 1)); ) ++q;
        if (((q += 2), w === O.charAt(q - 1))) return $('End of comment missing');
        var ye = O.slice(2, q - 2);
        return ((z += 2), ee(ye), (O = O.slice(q)), (z += 2), U({ type: x, comment: ye }));
      }
    }
    function B() {
      var U = te(),
        q = ue(s);
      if (q) {
        if ((Z(), !ue(a))) return $("property missing ':'");
        var ye = ue(u),
          pe = U({
            type: k,
            property: N(q[0].replace(n, w)),
            value: ye ? N(ye[0].replace(n, w)) : w,
          });
        return (ue(d), pe);
      }
    }
    function ge() {
      var U = [];
      fe(U);
      for (var q; (q = B()); ) q !== !1 && (U.push(q), fe(U));
      return U;
    }
    return (se(), ge());
  }
  function N(O) {
    return O ? O.replace(p, w) : w;
  }
  return ((Ca = T), Ca);
}
var Tf;
function Dy() {
  if (Tf) return ei;
  Tf = 1;
  var n =
    (ei && ei.__importDefault) ||
    function (s) {
      return s && s.__esModule ? s : { default: s };
    };
  (Object.defineProperty(ei, '__esModule', { value: !0 }), (ei.default = l));
  const i = n(Ay());
  function l(s, a) {
    let u = null;
    if (!s || typeof s != 'string') return u;
    const d = (0, i.default)(s),
      p = typeof a == 'function';
    return (
      d.forEach((m) => {
        if (m.type !== 'declaration') return;
        const { property: h, value: g } = m;
        p ? a(h, g, m) : g && ((u = u || {}), (u[h] = g));
      }),
      u
    );
  }
  return ei;
}
var Hi = {},
  jf;
function zy() {
  if (jf) return Hi;
  ((jf = 1), Object.defineProperty(Hi, '__esModule', { value: !0 }), (Hi.camelCase = void 0));
  var n = /^--[a-zA-Z0-9_-]+$/,
    i = /-([a-z])/g,
    l = /^[^-]+$/,
    s = /^-(webkit|moz|ms|o|khtml)-/,
    a = /^-(ms)-/,
    u = function (h) {
      return !h || l.test(h) || n.test(h);
    },
    d = function (h, g) {
      return g.toUpperCase();
    },
    p = function (h, g) {
      return ''.concat(g, '-');
    },
    m = function (h, g) {
      return (
        g === void 0 && (g = {}),
        u(h)
          ? h
          : ((h = h.toLowerCase()),
            g.reactCompat ? (h = h.replace(a, p)) : (h = h.replace(s, p)),
            h.replace(i, d))
      );
    };
  return ((Hi.camelCase = m), Hi);
}
var Qi, Lf;
function Fy() {
  if (Lf) return Qi;
  Lf = 1;
  var n =
      (Qi && Qi.__importDefault) ||
      function (a) {
        return a && a.__esModule ? a : { default: a };
      },
    i = n(Dy()),
    l = zy();
  function s(a, u) {
    var d = {};
    return (
      !a ||
        typeof a != 'string' ||
        (0, i.default)(a, function (p, m) {
          p && m && (d[(0, l.camelCase)(p, u)] = m);
        }),
      d
    );
  }
  return ((s.default = s), (Qi = s), Qi);
}
var By = Fy();
const Wy = pp(By),
  Fp = Bp('end'),
  pu = Bp('start');
function Bp(n) {
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
function Vy(n) {
  const i = pu(n),
    l = Fp(n);
  if (i && l) return { start: i, end: l };
}
function Xi(n) {
  return !n || typeof n != 'object'
    ? ''
    : 'position' in n || 'type' in n
      ? Pf(n.position)
      : 'start' in n || 'end' in n
        ? Pf(n)
        : 'line' in n || 'column' in n
          ? Qa(n)
          : '';
}
function Qa(n) {
  return Of(n && n.line) + ':' + Of(n && n.column);
}
function Pf(n) {
  return Qa(n && n.start) + '-' + Qa(n && n.end);
}
function Of(n) {
  return n && typeof n == 'number' ? n : 1;
}
class Ct extends Error {
  constructor(i, l, s) {
    (super(), typeof l == 'string' && ((s = l), (l = void 0)));
    let a = '',
      u = {},
      d = !1;
    if (
      (l &&
        ('line' in l && 'column' in l
          ? (u = { place: l })
          : 'start' in l && 'end' in l
            ? (u = { place: l })
            : 'type' in l
              ? (u = { ancestors: [l], place: l.position })
              : (u = { ...l })),
      typeof i == 'string' ? (a = i) : !u.cause && i && ((d = !0), (a = i.message), (u.cause = i)),
      !u.ruleId && !u.source && typeof s == 'string')
    ) {
      const m = s.indexOf(':');
      m === -1 ? (u.ruleId = s) : ((u.source = s.slice(0, m)), (u.ruleId = s.slice(m + 1)));
    }
    if (!u.place && u.ancestors && u.ancestors) {
      const m = u.ancestors[u.ancestors.length - 1];
      m && (u.place = m.position);
    }
    const p = u.place && 'start' in u.place ? u.place.start : u.place;
    ((this.ancestors = u.ancestors || void 0),
      (this.cause = u.cause || void 0),
      (this.column = p ? p.column : void 0),
      (this.fatal = void 0),
      (this.file = ''),
      (this.message = a),
      (this.line = p ? p.line : void 0),
      (this.name = Xi(u.place) || '1:1'),
      (this.place = u.place || void 0),
      (this.reason = this.message),
      (this.ruleId = u.ruleId || void 0),
      (this.source = u.source || void 0),
      (this.stack = d && u.cause && typeof u.cause.stack == 'string' ? u.cause.stack : ''),
      (this.actual = void 0),
      (this.expected = void 0),
      (this.note = void 0),
      (this.url = void 0));
  }
}
Ct.prototype.file = '';
Ct.prototype.name = '';
Ct.prototype.reason = '';
Ct.prototype.message = '';
Ct.prototype.stack = '';
Ct.prototype.column = void 0;
Ct.prototype.line = void 0;
Ct.prototype.ancestors = void 0;
Ct.prototype.cause = void 0;
Ct.prototype.fatal = void 0;
Ct.prototype.place = void 0;
Ct.prototype.ruleId = void 0;
Ct.prototype.source = void 0;
const hu = {}.hasOwnProperty,
  $y = new Map(),
  Uy = /[A-Z]/g,
  qy = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr']),
  Hy = new Set(['td', 'th']),
  Wp = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';
function Qy(n, i) {
  if (!i || i.Fragment === void 0) throw new TypeError('Expected `Fragment` in options');
  const l = i.filePath || void 0;
  let s;
  if (i.development) {
    if (typeof i.jsxDEV != 'function')
      throw new TypeError('Expected `jsxDEV` in options when `development: true`');
    s = t1(l, i.jsxDEV);
  } else {
    if (typeof i.jsx != 'function') throw new TypeError('Expected `jsx` in production options');
    if (typeof i.jsxs != 'function') throw new TypeError('Expected `jsxs` in production options');
    s = e1(l, i.jsx, i.jsxs);
  }
  const a = {
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
      schema: i.space === 'svg' ? fu : Ry,
      stylePropertyNameCase: i.stylePropertyNameCase || 'dom',
      tableCellAlignToStyle: i.tableCellAlignToStyle !== !1,
    },
    u = Vp(a, n, void 0);
  return u && typeof u != 'string' ? u : a.create(n, a.Fragment, { children: u || void 0 }, void 0);
}
function Vp(n, i, l) {
  if (i.type === 'element') return Ky(n, i, l);
  if (i.type === 'mdxFlowExpression' || i.type === 'mdxTextExpression') return Gy(n, i);
  if (i.type === 'mdxJsxFlowElement' || i.type === 'mdxJsxTextElement') return Xy(n, i, l);
  if (i.type === 'mdxjsEsm') return Yy(n, i);
  if (i.type === 'root') return Jy(n, i, l);
  if (i.type === 'text') return Zy(n, i);
}
function Ky(n, i, l) {
  const s = n.schema;
  let a = s;
  (i.tagName.toLowerCase() === 'svg' && s.space === 'html' && ((a = fu), (n.schema = a)),
    n.ancestors.push(i));
  const u = Up(n, i.tagName, !1),
    d = n1(n, i);
  let p = gu(n, i);
  return (
    qy.has(i.tagName) &&
      (p = p.filter(function (m) {
        return typeof m == 'string' ? !Cy(m) : !0;
      })),
    $p(n, d, u, i),
    mu(d, p),
    n.ancestors.pop(),
    (n.schema = s),
    n.create(i, u, d, l)
  );
}
function Gy(n, i) {
  if (i.data && i.data.estree && n.evaluater) {
    const s = i.data.estree.body[0];
    return (s.type, n.evaluater.evaluateExpression(s.expression));
  }
  el(n, i.position);
}
function Yy(n, i) {
  if (i.data && i.data.estree && n.evaluater) return n.evaluater.evaluateProgram(i.data.estree);
  el(n, i.position);
}
function Xy(n, i, l) {
  const s = n.schema;
  let a = s;
  (i.name === 'svg' && s.space === 'html' && ((a = fu), (n.schema = a)), n.ancestors.push(i));
  const u = i.name === null ? n.Fragment : Up(n, i.name, !0),
    d = r1(n, i),
    p = gu(n, i);
  return ($p(n, d, u, i), mu(d, p), n.ancestors.pop(), (n.schema = s), n.create(i, u, d, l));
}
function Jy(n, i, l) {
  const s = {};
  return (mu(s, gu(n, i)), n.create(i, n.Fragment, s, l));
}
function Zy(n, i) {
  return i.value;
}
function $p(n, i, l, s) {
  typeof l != 'string' && l !== n.Fragment && n.passNode && (i.node = s);
}
function mu(n, i) {
  if (i.length > 0) {
    const l = i.length > 1 ? i : i[0];
    l && (n.children = l);
  }
}
function e1(n, i, l) {
  return s;
  function s(a, u, d, p) {
    const h = Array.isArray(d.children) ? l : i;
    return p ? h(u, d, p) : h(u, d);
  }
}
function t1(n, i) {
  return l;
  function l(s, a, u, d) {
    const p = Array.isArray(u.children),
      m = pu(s);
    return i(
      a,
      u,
      d,
      p,
      { columnNumber: m ? m.column - 1 : void 0, fileName: n, lineNumber: m ? m.line : void 0 },
      void 0
    );
  }
}
function n1(n, i) {
  const l = {};
  let s, a;
  for (a in i.properties)
    if (a !== 'children' && hu.call(i.properties, a)) {
      const u = i1(n, a, i.properties[a]);
      if (u) {
        const [d, p] = u;
        n.tableCellAlignToStyle && d === 'align' && typeof p == 'string' && Hy.has(i.tagName)
          ? (s = p)
          : (l[d] = p);
      }
    }
  if (s) {
    const u = l.style || (l.style = {});
    u[n.stylePropertyNameCase === 'css' ? 'text-align' : 'textAlign'] = s;
  }
  return l;
}
function r1(n, i) {
  const l = {};
  for (const s of i.attributes)
    if (s.type === 'mdxJsxExpressionAttribute')
      if (s.data && s.data.estree && n.evaluater) {
        const u = s.data.estree.body[0];
        u.type;
        const d = u.expression;
        d.type;
        const p = d.properties[0];
        (p.type, Object.assign(l, n.evaluater.evaluateExpression(p.argument)));
      } else el(n, i.position);
    else {
      const a = s.name;
      let u;
      if (s.value && typeof s.value == 'object')
        if (s.value.data && s.value.data.estree && n.evaluater) {
          const p = s.value.data.estree.body[0];
          (p.type, (u = n.evaluater.evaluateExpression(p.expression)));
        } else el(n, i.position);
      else u = s.value === null ? !0 : s.value;
      l[a] = u;
    }
  return l;
}
function gu(n, i) {
  const l = [];
  let s = -1;
  const a = n.passKeys ? new Map() : $y;
  for (; ++s < i.children.length; ) {
    const u = i.children[s];
    let d;
    if (n.passKeys) {
      const m =
        u.type === 'element'
          ? u.tagName
          : u.type === 'mdxJsxFlowElement' || u.type === 'mdxJsxTextElement'
            ? u.name
            : void 0;
      if (m) {
        const h = a.get(m) || 0;
        ((d = m + '-' + h), a.set(m, h + 1));
      }
    }
    const p = Vp(n, u, d);
    p !== void 0 && l.push(p);
  }
  return l;
}
function i1(n, i, l) {
  const s = Ly(n.schema, i);
  if (!(l == null || (typeof l == 'number' && Number.isNaN(l)))) {
    if ((Array.isArray(l) && (l = s.commaSeparated ? wy(l) : My(l)), s.property === 'style')) {
      let a = typeof l == 'object' ? l : l1(n, String(l));
      return (n.stylePropertyNameCase === 'css' && (a = o1(a)), ['style', a]);
    }
    return [
      n.elementAttributeNameCase === 'react' && s.space
        ? Iy[s.property] || s.property
        : s.attribute,
      l,
    ];
  }
}
function l1(n, i) {
  try {
    return Wy(i, { reactCompat: !0 });
  } catch (l) {
    if (n.ignoreInvalidStyle) return {};
    const s = l,
      a = new Ct('Cannot parse `style` attribute', {
        ancestors: n.ancestors,
        cause: s,
        ruleId: 'style',
        source: 'hast-util-to-jsx-runtime',
      });
    throw ((a.file = n.filePath || void 0), (a.url = Wp + '#cannot-parse-style-attribute'), a);
  }
}
function Up(n, i, l) {
  let s;
  if (!l) s = { type: 'Literal', value: i };
  else if (i.includes('.')) {
    const a = i.split('.');
    let u = -1,
      d;
    for (; ++u < a.length; ) {
      const p = Cf(a[u]) ? { type: 'Identifier', name: a[u] } : { type: 'Literal', value: a[u] };
      d = d
        ? {
            type: 'MemberExpression',
            object: d,
            property: p,
            computed: !!(u && p.type === 'Literal'),
            optional: !1,
          }
        : p;
    }
    s = d;
  } else
    s =
      Cf(i) && !/^[a-z]/.test(i) ? { type: 'Identifier', name: i } : { type: 'Literal', value: i };
  if (s.type === 'Literal') {
    const a = s.value;
    return hu.call(n.components, a) ? n.components[a] : a;
  }
  if (n.evaluater) return n.evaluater.evaluateExpression(s);
  el(n);
}
function el(n, i) {
  const l = new Ct('Cannot handle MDX estrees without `createEvaluater`', {
    ancestors: n.ancestors,
    place: i,
    ruleId: 'mdx-estree',
    source: 'hast-util-to-jsx-runtime',
  });
  throw (
    (l.file = n.filePath || void 0),
    (l.url = Wp + '#cannot-handle-mdx-estrees-without-createevaluater'),
    l
  );
}
function o1(n) {
  const i = {};
  let l;
  for (l in n) hu.call(n, l) && (i[s1(l)] = n[l]);
  return i;
}
function s1(n) {
  let i = n.replace(Uy, a1);
  return (i.slice(0, 3) === 'ms-' && (i = '-' + i), i);
}
function a1(n) {
  return '-' + n.toLowerCase();
}
const Ea = {
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
  u1 = {};
function c1(n, i) {
  const l = u1,
    s = typeof l.includeImageAlt == 'boolean' ? l.includeImageAlt : !0,
    a = typeof l.includeHtml == 'boolean' ? l.includeHtml : !0;
  return qp(n, s, a);
}
function qp(n, i, l) {
  if (d1(n)) {
    if ('value' in n) return n.type === 'html' && !l ? '' : n.value;
    if (i && 'alt' in n && n.alt) return n.alt;
    if ('children' in n) return Rf(n.children, i, l);
  }
  return Array.isArray(n) ? Rf(n, i, l) : '';
}
function Rf(n, i, l) {
  const s = [];
  let a = -1;
  for (; ++a < n.length; ) s[a] = qp(n[a], i, l);
  return s.join('');
}
function d1(n) {
  return !!(n && typeof n == 'object');
}
const Mf = document.createElement('i');
function yu(n) {
  const i = '&' + n + ';';
  Mf.innerHTML = i;
  const l = Mf.textContent;
  return (l.charCodeAt(l.length - 1) === 59 && n !== 'semi') || l === i ? !1 : l;
}
function En(n, i, l, s) {
  const a = n.length;
  let u = 0,
    d;
  if ((i < 0 ? (i = -i > a ? 0 : a + i) : (i = i > a ? a : i), (l = l > 0 ? l : 0), s.length < 1e4))
    ((d = Array.from(s)), d.unshift(i, l), n.splice(...d));
  else
    for (l && n.splice(i, l); u < s.length; )
      ((d = s.slice(u, u + 1e4)), d.unshift(i, 0), n.splice(...d), (u += 1e4), (i += 1e4));
}
function ln(n, i) {
  return n.length > 0 ? (En(n, n.length, 0, i), n) : i;
}
const Af = {}.hasOwnProperty;
function f1(n) {
  const i = {};
  let l = -1;
  for (; ++l < n.length; ) p1(i, n[l]);
  return i;
}
function p1(n, i) {
  let l;
  for (l in i) {
    const a = (Af.call(n, l) ? n[l] : void 0) || (n[l] = {}),
      u = i[l];
    let d;
    if (u)
      for (d in u) {
        Af.call(a, d) || (a[d] = []);
        const p = u[d];
        h1(a[d], Array.isArray(p) ? p : p ? [p] : []);
      }
  }
}
function h1(n, i) {
  let l = -1;
  const s = [];
  for (; ++l < i.length; ) (i[l].add === 'after' ? n : s).push(i[l]);
  En(n, 0, 0, s);
}
function Hp(n, i) {
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
function ii(n) {
  return n
    .replace(/[\t\n\r ]+/g, ' ')
    .replace(/^ | $/g, '')
    .toLowerCase()
    .toUpperCase();
}
const Cn = cr(/[A-Za-z]/),
  Gt = cr(/[\dA-Za-z]/),
  m1 = cr(/[#-'*+\--9=?A-Z^-~]/);
function Ka(n) {
  return n !== null && (n < 32 || n === 127);
}
const Ga = cr(/\d/),
  g1 = cr(/[\dA-Fa-f]/),
  y1 = cr(/[!-/:-@[-`{-~]/);
function Ee(n) {
  return n !== null && n < -2;
}
function Dt(n) {
  return n !== null && (n < 0 || n === 32);
}
function Ae(n) {
  return n === -2 || n === -1 || n === 32;
}
const v1 = cr(new RegExp('\\p{P}|\\p{S}', 'u')),
  w1 = cr(/\s/);
function cr(n) {
  return i;
  function i(l) {
    return l !== null && l > -1 && n.test(String.fromCharCode(l));
  }
}
function si(n) {
  const i = [];
  let l = -1,
    s = 0,
    a = 0;
  for (; ++l < n.length; ) {
    const u = n.charCodeAt(l);
    let d = '';
    if (u === 37 && Gt(n.charCodeAt(l + 1)) && Gt(n.charCodeAt(l + 2))) a = 2;
    else if (u < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(u)) || (d = String.fromCharCode(u));
    else if (u > 55295 && u < 57344) {
      const p = n.charCodeAt(l + 1);
      u < 56320 && p > 56319 && p < 57344 ? ((d = String.fromCharCode(u, p)), (a = 1)) : (d = '�');
    } else d = String.fromCharCode(u);
    (d && (i.push(n.slice(s, l), encodeURIComponent(d)), (s = l + a + 1), (d = '')),
      a && ((l += a), (a = 0)));
  }
  return i.join('') + n.slice(s);
}
function Ue(n, i, l, s) {
  const a = s ? s - 1 : Number.POSITIVE_INFINITY;
  let u = 0;
  return d;
  function d(m) {
    return Ae(m) ? (n.enter(l), p(m)) : i(m);
  }
  function p(m) {
    return Ae(m) && u++ < a ? (n.consume(m), p) : (n.exit(l), i(m));
  }
}
const k1 = { tokenize: x1 };
function x1(n) {
  const i = n.attempt(this.parser.constructs.contentInitial, s, a);
  let l;
  return i;
  function s(p) {
    if (p === null) {
      n.consume(p);
      return;
    }
    return (n.enter('lineEnding'), n.consume(p), n.exit('lineEnding'), Ue(n, i, 'linePrefix'));
  }
  function a(p) {
    return (n.enter('paragraph'), u(p));
  }
  function u(p) {
    const m = n.enter('chunkText', { contentType: 'text', previous: l });
    return (l && (l.next = m), (l = m), d(p));
  }
  function d(p) {
    if (p === null) {
      (n.exit('chunkText'), n.exit('paragraph'), n.consume(p));
      return;
    }
    return Ee(p) ? (n.consume(p), n.exit('chunkText'), u) : (n.consume(p), d);
  }
}
const S1 = { tokenize: _1 },
  Df = { tokenize: C1 };
function _1(n) {
  const i = this,
    l = [];
  let s = 0,
    a,
    u,
    d;
  return p;
  function p(z) {
    if (s < l.length) {
      const ee = l[s];
      return ((i.containerState = ee[1]), n.attempt(ee[0].continuation, m, h)(z));
    }
    return h(z);
  }
  function m(z) {
    if ((s++, i.containerState._closeFlow)) {
      ((i.containerState._closeFlow = void 0), a && D());
      const ee = i.events.length;
      let te = ee,
        A;
      for (; te--; )
        if (i.events[te][0] === 'exit' && i.events[te][1].type === 'chunkFlow') {
          A = i.events[te][1].end;
          break;
        }
      L(s);
      let $ = ee;
      for (; $ < i.events.length; ) ((i.events[$][1].end = { ...A }), $++);
      return (En(i.events, te + 1, 0, i.events.slice(ee)), (i.events.length = $), h(z));
    }
    return p(z);
  }
  function h(z) {
    if (s === l.length) {
      if (!a) return x(z);
      if (a.currentConstruct && a.currentConstruct.concrete) return T(z);
      i.interrupt = !!(a.currentConstruct && !a._gfmTableDynamicInterruptHack);
    }
    return ((i.containerState = {}), n.check(Df, g, w)(z));
  }
  function g(z) {
    return (a && D(), L(s), x(z));
  }
  function w(z) {
    return ((i.parser.lazy[i.now().line] = s !== l.length), (d = i.now().offset), T(z));
  }
  function x(z) {
    return ((i.containerState = {}), n.attempt(Df, k, T)(z));
  }
  function k(z) {
    return (s++, l.push([i.currentConstruct, i.containerState]), x(z));
  }
  function T(z) {
    if (z === null) {
      (a && D(), L(0), n.consume(z));
      return;
    }
    return (
      (a = a || i.parser.flow(i.now())),
      n.enter('chunkFlow', { _tokenizer: a, contentType: 'flow', previous: u }),
      N(z)
    );
  }
  function N(z) {
    if (z === null) {
      (O(n.exit('chunkFlow'), !0), L(0), n.consume(z));
      return;
    }
    return Ee(z)
      ? (n.consume(z), O(n.exit('chunkFlow')), (s = 0), (i.interrupt = void 0), p)
      : (n.consume(z), N);
  }
  function O(z, ee) {
    const te = i.sliceStream(z);
    if (
      (ee && te.push(null),
      (z.previous = u),
      u && (u.next = z),
      (u = z),
      a.defineSkip(z.start),
      a.write(te),
      i.parser.lazy[z.start.line])
    ) {
      let A = a.events.length;
      for (; A--; )
        if (
          a.events[A][1].start.offset < d &&
          (!a.events[A][1].end || a.events[A][1].end.offset > d)
        )
          return;
      const $ = i.events.length;
      let ue = $,
        se,
        fe;
      for (; ue--; )
        if (i.events[ue][0] === 'exit' && i.events[ue][1].type === 'chunkFlow') {
          if (se) {
            fe = i.events[ue][1].end;
            break;
          }
          se = !0;
        }
      for (L(s), A = $; A < i.events.length; ) ((i.events[A][1].end = { ...fe }), A++);
      (En(i.events, ue + 1, 0, i.events.slice($)), (i.events.length = A));
    }
  }
  function L(z) {
    let ee = l.length;
    for (; ee-- > z; ) {
      const te = l[ee];
      ((i.containerState = te[1]), te[0].exit.call(i, n));
    }
    l.length = z;
  }
  function D() {
    (a.write([null]), (u = void 0), (a = void 0), (i.containerState._closeFlow = void 0));
  }
}
function C1(n, i, l) {
  return Ue(
    n,
    n.attempt(this.parser.constructs.document, i, l),
    'linePrefix',
    this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
  );
}
function zf(n) {
  if (n === null || Dt(n) || w1(n)) return 1;
  if (v1(n)) return 2;
}
function vu(n, i, l) {
  const s = [];
  let a = -1;
  for (; ++a < n.length; ) {
    const u = n[a].resolveAll;
    u && !s.includes(u) && ((i = u(i, l)), s.push(u));
  }
  return i;
}
const Ya = { name: 'attention', resolveAll: E1, tokenize: b1 };
function E1(n, i) {
  let l = -1,
    s,
    a,
    u,
    d,
    p,
    m,
    h,
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
          m =
            n[s][1].end.offset - n[s][1].start.offset > 1 &&
            n[l][1].end.offset - n[l][1].start.offset > 1
              ? 2
              : 1;
          const w = { ...n[s][1].end },
            x = { ...n[l][1].start };
          (Ff(w, -m),
            Ff(x, m),
            (d = {
              type: m > 1 ? 'strongSequence' : 'emphasisSequence',
              start: w,
              end: { ...n[s][1].end },
            }),
            (p = {
              type: m > 1 ? 'strongSequence' : 'emphasisSequence',
              start: { ...n[l][1].start },
              end: x,
            }),
            (u = {
              type: m > 1 ? 'strongText' : 'emphasisText',
              start: { ...n[s][1].end },
              end: { ...n[l][1].start },
            }),
            (a = { type: m > 1 ? 'strong' : 'emphasis', start: { ...d.start }, end: { ...p.end } }),
            (n[s][1].end = { ...d.start }),
            (n[l][1].start = { ...p.end }),
            (h = []),
            n[s][1].end.offset - n[s][1].start.offset &&
              (h = ln(h, [
                ['enter', n[s][1], i],
                ['exit', n[s][1], i],
              ])),
            (h = ln(h, [
              ['enter', a, i],
              ['enter', d, i],
              ['exit', d, i],
              ['enter', u, i],
            ])),
            (h = ln(h, vu(i.parser.constructs.insideSpan.null, n.slice(s + 1, l), i))),
            (h = ln(h, [
              ['exit', u, i],
              ['enter', p, i],
              ['exit', p, i],
              ['exit', a, i],
            ])),
            n[l][1].end.offset - n[l][1].start.offset
              ? ((g = 2),
                (h = ln(h, [
                  ['enter', n[l][1], i],
                  ['exit', n[l][1], i],
                ])))
              : (g = 0),
            En(n, s - 1, l - s + 3, h),
            (l = s + h.length - g - 2));
          break;
        }
    }
  for (l = -1; ++l < n.length; ) n[l][1].type === 'attentionSequence' && (n[l][1].type = 'data');
  return n;
}
function b1(n, i) {
  const l = this.parser.constructs.attentionMarkers.null,
    s = this.previous,
    a = zf(s);
  let u;
  return d;
  function d(m) {
    return ((u = m), n.enter('attentionSequence'), p(m));
  }
  function p(m) {
    if (m === u) return (n.consume(m), p);
    const h = n.exit('attentionSequence'),
      g = zf(m),
      w = !g || (g === 2 && a) || l.includes(m),
      x = !a || (a === 2 && g) || l.includes(s);
    return (
      (h._open = !!(u === 42 ? w : w && (a || !x))),
      (h._close = !!(u === 42 ? x : x && (g || !w))),
      i(m)
    );
  }
}
function Ff(n, i) {
  ((n.column += i), (n.offset += i), (n._bufferIndex += i));
}
const N1 = { name: 'autolink', tokenize: I1 };
function I1(n, i, l) {
  let s = 0;
  return a;
  function a(k) {
    return (
      n.enter('autolink'),
      n.enter('autolinkMarker'),
      n.consume(k),
      n.exit('autolinkMarker'),
      n.enter('autolinkProtocol'),
      u
    );
  }
  function u(k) {
    return Cn(k) ? (n.consume(k), d) : k === 64 ? l(k) : h(k);
  }
  function d(k) {
    return k === 43 || k === 45 || k === 46 || Gt(k) ? ((s = 1), p(k)) : h(k);
  }
  function p(k) {
    return k === 58
      ? (n.consume(k), (s = 0), m)
      : (k === 43 || k === 45 || k === 46 || Gt(k)) && s++ < 32
        ? (n.consume(k), p)
        : ((s = 0), h(k));
  }
  function m(k) {
    return k === 62
      ? (n.exit('autolinkProtocol'),
        n.enter('autolinkMarker'),
        n.consume(k),
        n.exit('autolinkMarker'),
        n.exit('autolink'),
        i)
      : k === null || k === 32 || k === 60 || Ka(k)
        ? l(k)
        : (n.consume(k), m);
  }
  function h(k) {
    return k === 64 ? (n.consume(k), g) : m1(k) ? (n.consume(k), h) : l(k);
  }
  function g(k) {
    return Gt(k) ? w(k) : l(k);
  }
  function w(k) {
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
    if ((k === 45 || Gt(k)) && s++ < 63) {
      const T = k === 45 ? x : w;
      return (n.consume(k), T);
    }
    return l(k);
  }
}
const Eo = { partial: !0, tokenize: T1 };
function T1(n, i, l) {
  return s;
  function s(u) {
    return Ae(u) ? Ue(n, a, 'linePrefix')(u) : a(u);
  }
  function a(u) {
    return u === null || Ee(u) ? i(u) : l(u);
  }
}
const Qp = { continuation: { tokenize: L1 }, exit: P1, name: 'blockQuote', tokenize: j1 };
function j1(n, i, l) {
  const s = this;
  return a;
  function a(d) {
    if (d === 62) {
      const p = s.containerState;
      return (
        p.open || (n.enter('blockQuote', { _container: !0 }), (p.open = !0)),
        n.enter('blockQuotePrefix'),
        n.enter('blockQuoteMarker'),
        n.consume(d),
        n.exit('blockQuoteMarker'),
        u
      );
    }
    return l(d);
  }
  function u(d) {
    return Ae(d)
      ? (n.enter('blockQuotePrefixWhitespace'),
        n.consume(d),
        n.exit('blockQuotePrefixWhitespace'),
        n.exit('blockQuotePrefix'),
        i)
      : (n.exit('blockQuotePrefix'), i(d));
  }
}
function L1(n, i, l) {
  const s = this;
  return a;
  function a(d) {
    return Ae(d)
      ? Ue(
          n,
          u,
          'linePrefix',
          s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
        )(d)
      : u(d);
  }
  function u(d) {
    return n.attempt(Qp, i, l)(d);
  }
}
function P1(n) {
  n.exit('blockQuote');
}
const Kp = { name: 'characterEscape', tokenize: O1 };
function O1(n, i, l) {
  return s;
  function s(u) {
    return (
      n.enter('characterEscape'),
      n.enter('escapeMarker'),
      n.consume(u),
      n.exit('escapeMarker'),
      a
    );
  }
  function a(u) {
    return y1(u)
      ? (n.enter('characterEscapeValue'),
        n.consume(u),
        n.exit('characterEscapeValue'),
        n.exit('characterEscape'),
        i)
      : l(u);
  }
}
const Gp = { name: 'characterReference', tokenize: R1 };
function R1(n, i, l) {
  const s = this;
  let a = 0,
    u,
    d;
  return p;
  function p(w) {
    return (
      n.enter('characterReference'),
      n.enter('characterReferenceMarker'),
      n.consume(w),
      n.exit('characterReferenceMarker'),
      m
    );
  }
  function m(w) {
    return w === 35
      ? (n.enter('characterReferenceMarkerNumeric'),
        n.consume(w),
        n.exit('characterReferenceMarkerNumeric'),
        h)
      : (n.enter('characterReferenceValue'), (u = 31), (d = Gt), g(w));
  }
  function h(w) {
    return w === 88 || w === 120
      ? (n.enter('characterReferenceMarkerHexadecimal'),
        n.consume(w),
        n.exit('characterReferenceMarkerHexadecimal'),
        n.enter('characterReferenceValue'),
        (u = 6),
        (d = g1),
        g)
      : (n.enter('characterReferenceValue'), (u = 7), (d = Ga), g(w));
  }
  function g(w) {
    if (w === 59 && a) {
      const x = n.exit('characterReferenceValue');
      return d === Gt && !yu(s.sliceSerialize(x))
        ? l(w)
        : (n.enter('characterReferenceMarker'),
          n.consume(w),
          n.exit('characterReferenceMarker'),
          n.exit('characterReference'),
          i);
    }
    return d(w) && a++ < u ? (n.consume(w), g) : l(w);
  }
}
const Bf = { partial: !0, tokenize: A1 },
  Wf = { concrete: !0, name: 'codeFenced', tokenize: M1 };
function M1(n, i, l) {
  const s = this,
    a = { partial: !0, tokenize: te };
  let u = 0,
    d = 0,
    p;
  return m;
  function m(A) {
    return h(A);
  }
  function h(A) {
    const $ = s.events[s.events.length - 1];
    return (
      (u = $ && $[1].type === 'linePrefix' ? $[2].sliceSerialize($[1], !0).length : 0),
      (p = A),
      n.enter('codeFenced'),
      n.enter('codeFencedFence'),
      n.enter('codeFencedFenceSequence'),
      g(A)
    );
  }
  function g(A) {
    return A === p
      ? (d++, n.consume(A), g)
      : d < 3
        ? l(A)
        : (n.exit('codeFencedFenceSequence'), Ae(A) ? Ue(n, w, 'whitespace')(A) : w(A));
  }
  function w(A) {
    return A === null || Ee(A)
      ? (n.exit('codeFencedFence'), s.interrupt ? i(A) : n.check(Bf, N, ee)(A))
      : (n.enter('codeFencedFenceInfo'), n.enter('chunkString', { contentType: 'string' }), x(A));
  }
  function x(A) {
    return A === null || Ee(A)
      ? (n.exit('chunkString'), n.exit('codeFencedFenceInfo'), w(A))
      : Ae(A)
        ? (n.exit('chunkString'), n.exit('codeFencedFenceInfo'), Ue(n, k, 'whitespace')(A))
        : A === 96 && A === p
          ? l(A)
          : (n.consume(A), x);
  }
  function k(A) {
    return A === null || Ee(A)
      ? w(A)
      : (n.enter('codeFencedFenceMeta'), n.enter('chunkString', { contentType: 'string' }), T(A));
  }
  function T(A) {
    return A === null || Ee(A)
      ? (n.exit('chunkString'), n.exit('codeFencedFenceMeta'), w(A))
      : A === 96 && A === p
        ? l(A)
        : (n.consume(A), T);
  }
  function N(A) {
    return n.attempt(a, ee, O)(A);
  }
  function O(A) {
    return (n.enter('lineEnding'), n.consume(A), n.exit('lineEnding'), L);
  }
  function L(A) {
    return u > 0 && Ae(A) ? Ue(n, D, 'linePrefix', u + 1)(A) : D(A);
  }
  function D(A) {
    return A === null || Ee(A) ? n.check(Bf, N, ee)(A) : (n.enter('codeFlowValue'), z(A));
  }
  function z(A) {
    return A === null || Ee(A) ? (n.exit('codeFlowValue'), D(A)) : (n.consume(A), z);
  }
  function ee(A) {
    return (n.exit('codeFenced'), i(A));
  }
  function te(A, $, ue) {
    let se = 0;
    return fe;
    function fe(q) {
      return (A.enter('lineEnding'), A.consume(q), A.exit('lineEnding'), Z);
    }
    function Z(q) {
      return (
        A.enter('codeFencedFence'),
        Ae(q)
          ? Ue(
              A,
              B,
              'linePrefix',
              s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
            )(q)
          : B(q)
      );
    }
    function B(q) {
      return q === p ? (A.enter('codeFencedFenceSequence'), ge(q)) : ue(q);
    }
    function ge(q) {
      return q === p
        ? (se++, A.consume(q), ge)
        : se >= d
          ? (A.exit('codeFencedFenceSequence'), Ae(q) ? Ue(A, U, 'whitespace')(q) : U(q))
          : ue(q);
    }
    function U(q) {
      return q === null || Ee(q) ? (A.exit('codeFencedFence'), $(q)) : ue(q);
    }
  }
}
function A1(n, i, l) {
  const s = this;
  return a;
  function a(d) {
    return d === null ? l(d) : (n.enter('lineEnding'), n.consume(d), n.exit('lineEnding'), u);
  }
  function u(d) {
    return s.parser.lazy[s.now().line] ? l(d) : i(d);
  }
}
const ba = { name: 'codeIndented', tokenize: z1 },
  D1 = { partial: !0, tokenize: F1 };
function z1(n, i, l) {
  const s = this;
  return a;
  function a(h) {
    return (n.enter('codeIndented'), Ue(n, u, 'linePrefix', 5)(h));
  }
  function u(h) {
    const g = s.events[s.events.length - 1];
    return g && g[1].type === 'linePrefix' && g[2].sliceSerialize(g[1], !0).length >= 4
      ? d(h)
      : l(h);
  }
  function d(h) {
    return h === null ? m(h) : Ee(h) ? n.attempt(D1, d, m)(h) : (n.enter('codeFlowValue'), p(h));
  }
  function p(h) {
    return h === null || Ee(h) ? (n.exit('codeFlowValue'), d(h)) : (n.consume(h), p);
  }
  function m(h) {
    return (n.exit('codeIndented'), i(h));
  }
}
function F1(n, i, l) {
  const s = this;
  return a;
  function a(d) {
    return s.parser.lazy[s.now().line]
      ? l(d)
      : Ee(d)
        ? (n.enter('lineEnding'), n.consume(d), n.exit('lineEnding'), a)
        : Ue(n, u, 'linePrefix', 5)(d);
  }
  function u(d) {
    const p = s.events[s.events.length - 1];
    return p && p[1].type === 'linePrefix' && p[2].sliceSerialize(p[1], !0).length >= 4
      ? i(d)
      : Ee(d)
        ? a(d)
        : l(d);
  }
}
const B1 = { name: 'codeText', previous: V1, resolve: W1, tokenize: $1 };
function W1(n) {
  let i = n.length - 4,
    l = 3,
    s,
    a;
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
    a === void 0
      ? s !== i && n[s][1].type !== 'lineEnding' && (a = s)
      : (s === i || n[s][1].type === 'lineEnding') &&
        ((n[a][1].type = 'codeTextData'),
        s !== a + 2 &&
          ((n[a][1].end = n[s - 1][1].end),
          n.splice(a + 2, s - a - 2),
          (i -= s - a - 2),
          (s = a + 2)),
        (a = void 0));
  return n;
}
function V1(n) {
  return n !== 96 || this.events[this.events.length - 1][1].type === 'characterEscape';
}
function $1(n, i, l) {
  let s = 0,
    a,
    u;
  return d;
  function d(w) {
    return (n.enter('codeText'), n.enter('codeTextSequence'), p(w));
  }
  function p(w) {
    return w === 96 ? (n.consume(w), s++, p) : (n.exit('codeTextSequence'), m(w));
  }
  function m(w) {
    return w === null
      ? l(w)
      : w === 32
        ? (n.enter('space'), n.consume(w), n.exit('space'), m)
        : w === 96
          ? ((u = n.enter('codeTextSequence')), (a = 0), g(w))
          : Ee(w)
            ? (n.enter('lineEnding'), n.consume(w), n.exit('lineEnding'), m)
            : (n.enter('codeTextData'), h(w));
  }
  function h(w) {
    return w === null || w === 32 || w === 96 || Ee(w)
      ? (n.exit('codeTextData'), m(w))
      : (n.consume(w), h);
  }
  function g(w) {
    return w === 96
      ? (n.consume(w), a++, g)
      : a === s
        ? (n.exit('codeTextSequence'), n.exit('codeText'), i(w))
        : ((u.type = 'codeTextData'), h(w));
  }
}
class U1 {
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
    const a = l || 0;
    this.setCursor(Math.trunc(i));
    const u = this.right.splice(this.right.length - a, Number.POSITIVE_INFINITY);
    return (s && Ki(this.left, s), u.reverse());
  }
  pop() {
    return (this.setCursor(Number.POSITIVE_INFINITY), this.left.pop());
  }
  push(i) {
    (this.setCursor(Number.POSITIVE_INFINITY), this.left.push(i));
  }
  pushMany(i) {
    (this.setCursor(Number.POSITIVE_INFINITY), Ki(this.left, i));
  }
  unshift(i) {
    (this.setCursor(0), this.right.push(i));
  }
  unshiftMany(i) {
    (this.setCursor(0), Ki(this.right, i.reverse()));
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
        Ki(this.right, l.reverse());
      } else {
        const l = this.right.splice(
          this.left.length + this.right.length - i,
          Number.POSITIVE_INFINITY
        );
        Ki(this.left, l.reverse());
      }
  }
}
function Ki(n, i) {
  let l = 0;
  if (i.length < 1e4) n.push(...i);
  else for (; l < i.length; ) (n.push(...i.slice(l, l + 1e4)), (l += 1e4));
}
function Yp(n) {
  const i = {};
  let l = -1,
    s,
    a,
    u,
    d,
    p,
    m,
    h;
  const g = new U1(n);
  for (; ++l < g.length; ) {
    for (; l in i; ) l = i[l];
    if (
      ((s = g.get(l)),
      l &&
        s[1].type === 'chunkFlow' &&
        g.get(l - 1)[1].type === 'listItemPrefix' &&
        ((m = s[1]._tokenizer.events),
        (u = 0),
        u < m.length && m[u][1].type === 'lineEndingBlank' && (u += 2),
        u < m.length && m[u][1].type === 'content'))
    )
      for (; ++u < m.length && m[u][1].type !== 'content'; )
        m[u][1].type === 'chunkText' && ((m[u][1]._isInFirstContentOfListItem = !0), u++);
    if (s[0] === 'enter') s[1].contentType && (Object.assign(i, q1(g, l)), (l = i[l]), (h = !0));
    else if (s[1]._container) {
      for (u = l, a = void 0; u--; )
        if (((d = g.get(u)), d[1].type === 'lineEnding' || d[1].type === 'lineEndingBlank'))
          d[0] === 'enter' &&
            (a && (g.get(a)[1].type = 'lineEndingBlank'), (d[1].type = 'lineEnding'), (a = u));
        else if (!(d[1].type === 'linePrefix' || d[1].type === 'listItemIndent')) break;
      a &&
        ((s[1].end = { ...g.get(a)[1].start }),
        (p = g.slice(a, l)),
        p.unshift(s),
        g.splice(a, l - a + 1, p));
    }
  }
  return (En(n, 0, Number.POSITIVE_INFINITY, g.slice(0)), !h);
}
function q1(n, i) {
  const l = n.get(i)[1],
    s = n.get(i)[2];
  let a = i - 1;
  const u = [];
  let d = l._tokenizer;
  d ||
    ((d = s.parser[l.contentType](l.start)),
    l._contentTypeTextTrailing && (d._contentTypeTextTrailing = !0));
  const p = d.events,
    m = [],
    h = {};
  let g,
    w,
    x = -1,
    k = l,
    T = 0,
    N = 0;
  const O = [N];
  for (; k; ) {
    for (; n.get(++a)[1] !== k; );
    (u.push(a),
      k._tokenizer ||
        ((g = s.sliceStream(k)),
        k.next || g.push(null),
        w && d.defineSkip(k.start),
        k._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = !0),
        d.write(g),
        k._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = void 0)),
      (w = k),
      (k = k.next));
  }
  for (k = l; ++x < p.length; )
    p[x][0] === 'exit' &&
      p[x - 1][0] === 'enter' &&
      p[x][1].type === p[x - 1][1].type &&
      p[x][1].start.line !== p[x][1].end.line &&
      ((N = x + 1), O.push(N), (k._tokenizer = void 0), (k.previous = void 0), (k = k.next));
  for (
    d.events = [], k ? ((k._tokenizer = void 0), (k.previous = void 0)) : O.pop(), x = O.length;
    x--;
  ) {
    const L = p.slice(O[x], O[x + 1]),
      D = u.pop();
    (m.push([D, D + L.length - 1]), n.splice(D, 2, L));
  }
  for (m.reverse(), x = -1; ++x < m.length; )
    ((h[T + m[x][0]] = T + m[x][1]), (T += m[x][1] - m[x][0] - 1));
  return h;
}
const H1 = { resolve: K1, tokenize: G1 },
  Q1 = { partial: !0, tokenize: Y1 };
function K1(n) {
  return (Yp(n), n);
}
function G1(n, i) {
  let l;
  return s;
  function s(p) {
    return (n.enter('content'), (l = n.enter('chunkContent', { contentType: 'content' })), a(p));
  }
  function a(p) {
    return p === null ? u(p) : Ee(p) ? n.check(Q1, d, u)(p) : (n.consume(p), a);
  }
  function u(p) {
    return (n.exit('chunkContent'), n.exit('content'), i(p));
  }
  function d(p) {
    return (
      n.consume(p),
      n.exit('chunkContent'),
      (l.next = n.enter('chunkContent', { contentType: 'content', previous: l })),
      (l = l.next),
      a
    );
  }
}
function Y1(n, i, l) {
  const s = this;
  return a;
  function a(d) {
    return (
      n.exit('chunkContent'),
      n.enter('lineEnding'),
      n.consume(d),
      n.exit('lineEnding'),
      Ue(n, u, 'linePrefix')
    );
  }
  function u(d) {
    if (d === null || Ee(d)) return l(d);
    const p = s.events[s.events.length - 1];
    return !s.parser.constructs.disable.null.includes('codeIndented') &&
      p &&
      p[1].type === 'linePrefix' &&
      p[2].sliceSerialize(p[1], !0).length >= 4
      ? i(d)
      : n.interrupt(s.parser.constructs.flow, l, i)(d);
  }
}
function Xp(n, i, l, s, a, u, d, p, m) {
  const h = m || Number.POSITIVE_INFINITY;
  let g = 0;
  return w;
  function w(L) {
    return L === 60
      ? (n.enter(s), n.enter(a), n.enter(u), n.consume(L), n.exit(u), x)
      : L === null || L === 32 || L === 41 || Ka(L)
        ? l(L)
        : (n.enter(s),
          n.enter(d),
          n.enter(p),
          n.enter('chunkString', { contentType: 'string' }),
          N(L));
  }
  function x(L) {
    return L === 62
      ? (n.enter(u), n.consume(L), n.exit(u), n.exit(a), n.exit(s), i)
      : (n.enter(p), n.enter('chunkString', { contentType: 'string' }), k(L));
  }
  function k(L) {
    return L === 62
      ? (n.exit('chunkString'), n.exit(p), x(L))
      : L === null || L === 60 || Ee(L)
        ? l(L)
        : (n.consume(L), L === 92 ? T : k);
  }
  function T(L) {
    return L === 60 || L === 62 || L === 92 ? (n.consume(L), k) : k(L);
  }
  function N(L) {
    return !g && (L === null || L === 41 || Dt(L))
      ? (n.exit('chunkString'), n.exit(p), n.exit(d), n.exit(s), i(L))
      : g < h && L === 40
        ? (n.consume(L), g++, N)
        : L === 41
          ? (n.consume(L), g--, N)
          : L === null || L === 32 || L === 40 || Ka(L)
            ? l(L)
            : (n.consume(L), L === 92 ? O : N);
  }
  function O(L) {
    return L === 40 || L === 41 || L === 92 ? (n.consume(L), N) : N(L);
  }
}
function Jp(n, i, l, s, a, u) {
  const d = this;
  let p = 0,
    m;
  return h;
  function h(k) {
    return (n.enter(s), n.enter(a), n.consume(k), n.exit(a), n.enter(u), g);
  }
  function g(k) {
    return p > 999 ||
      k === null ||
      k === 91 ||
      (k === 93 && !m) ||
      (k === 94 && !p && '_hiddenFootnoteSupport' in d.parser.constructs)
      ? l(k)
      : k === 93
        ? (n.exit(u), n.enter(a), n.consume(k), n.exit(a), n.exit(s), i)
        : Ee(k)
          ? (n.enter('lineEnding'), n.consume(k), n.exit('lineEnding'), g)
          : (n.enter('chunkString', { contentType: 'string' }), w(k));
  }
  function w(k) {
    return k === null || k === 91 || k === 93 || Ee(k) || p++ > 999
      ? (n.exit('chunkString'), g(k))
      : (n.consume(k), m || (m = !Ae(k)), k === 92 ? x : w);
  }
  function x(k) {
    return k === 91 || k === 92 || k === 93 ? (n.consume(k), p++, w) : w(k);
  }
}
function Zp(n, i, l, s, a, u) {
  let d;
  return p;
  function p(x) {
    return x === 34 || x === 39 || x === 40
      ? (n.enter(s), n.enter(a), n.consume(x), n.exit(a), (d = x === 40 ? 41 : x), m)
      : l(x);
  }
  function m(x) {
    return x === d ? (n.enter(a), n.consume(x), n.exit(a), n.exit(s), i) : (n.enter(u), h(x));
  }
  function h(x) {
    return x === d
      ? (n.exit(u), m(d))
      : x === null
        ? l(x)
        : Ee(x)
          ? (n.enter('lineEnding'), n.consume(x), n.exit('lineEnding'), Ue(n, h, 'linePrefix'))
          : (n.enter('chunkString', { contentType: 'string' }), g(x));
  }
  function g(x) {
    return x === d || x === null || Ee(x)
      ? (n.exit('chunkString'), h(x))
      : (n.consume(x), x === 92 ? w : g);
  }
  function w(x) {
    return x === d || x === 92 ? (n.consume(x), g) : g(x);
  }
}
function Ji(n, i) {
  let l;
  return s;
  function s(a) {
    return Ee(a)
      ? (n.enter('lineEnding'), n.consume(a), n.exit('lineEnding'), (l = !0), s)
      : Ae(a)
        ? Ue(n, s, l ? 'linePrefix' : 'lineSuffix')(a)
        : i(a);
  }
}
const X1 = { name: 'definition', tokenize: Z1 },
  J1 = { partial: !0, tokenize: ev };
function Z1(n, i, l) {
  const s = this;
  let a;
  return u;
  function u(k) {
    return (n.enter('definition'), d(k));
  }
  function d(k) {
    return Jp.call(
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
      (a = ii(s.sliceSerialize(s.events[s.events.length - 1][1]).slice(1, -1))),
      k === 58 ? (n.enter('definitionMarker'), n.consume(k), n.exit('definitionMarker'), m) : l(k)
    );
  }
  function m(k) {
    return Dt(k) ? Ji(n, h)(k) : h(k);
  }
  function h(k) {
    return Xp(
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
    return n.attempt(J1, w, w)(k);
  }
  function w(k) {
    return Ae(k) ? Ue(n, x, 'whitespace')(k) : x(k);
  }
  function x(k) {
    return k === null || Ee(k) ? (n.exit('definition'), s.parser.defined.push(a), i(k)) : l(k);
  }
}
function ev(n, i, l) {
  return s;
  function s(p) {
    return Dt(p) ? Ji(n, a)(p) : l(p);
  }
  function a(p) {
    return Zp(n, u, l, 'definitionTitle', 'definitionTitleMarker', 'definitionTitleString')(p);
  }
  function u(p) {
    return Ae(p) ? Ue(n, d, 'whitespace')(p) : d(p);
  }
  function d(p) {
    return p === null || Ee(p) ? i(p) : l(p);
  }
}
const tv = { name: 'hardBreakEscape', tokenize: nv };
function nv(n, i, l) {
  return s;
  function s(u) {
    return (n.enter('hardBreakEscape'), n.consume(u), a);
  }
  function a(u) {
    return Ee(u) ? (n.exit('hardBreakEscape'), i(u)) : l(u);
  }
}
const rv = { name: 'headingAtx', resolve: iv, tokenize: lv };
function iv(n, i) {
  let l = n.length - 2,
    s = 3,
    a,
    u;
  return (
    n[s][1].type === 'whitespace' && (s += 2),
    l - 2 > s && n[l][1].type === 'whitespace' && (l -= 2),
    n[l][1].type === 'atxHeadingSequence' &&
      (s === l - 1 || (l - 4 > s && n[l - 2][1].type === 'whitespace')) &&
      (l -= s + 1 === l ? 2 : 4),
    l > s &&
      ((a = { type: 'atxHeadingText', start: n[s][1].start, end: n[l][1].end }),
      (u = { type: 'chunkText', start: n[s][1].start, end: n[l][1].end, contentType: 'text' }),
      En(n, s, l - s + 1, [
        ['enter', a, i],
        ['enter', u, i],
        ['exit', u, i],
        ['exit', a, i],
      ])),
    n
  );
}
function lv(n, i, l) {
  let s = 0;
  return a;
  function a(g) {
    return (n.enter('atxHeading'), u(g));
  }
  function u(g) {
    return (n.enter('atxHeadingSequence'), d(g));
  }
  function d(g) {
    return g === 35 && s++ < 6
      ? (n.consume(g), d)
      : g === null || Dt(g)
        ? (n.exit('atxHeadingSequence'), p(g))
        : l(g);
  }
  function p(g) {
    return g === 35
      ? (n.enter('atxHeadingSequence'), m(g))
      : g === null || Ee(g)
        ? (n.exit('atxHeading'), i(g))
        : Ae(g)
          ? Ue(n, p, 'whitespace')(g)
          : (n.enter('atxHeadingText'), h(g));
  }
  function m(g) {
    return g === 35 ? (n.consume(g), m) : (n.exit('atxHeadingSequence'), p(g));
  }
  function h(g) {
    return g === null || g === 35 || Dt(g) ? (n.exit('atxHeadingText'), p(g)) : (n.consume(g), h);
  }
}
const ov = [
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
  Vf = ['pre', 'script', 'style', 'textarea'],
  sv = { concrete: !0, name: 'htmlFlow', resolveTo: cv, tokenize: dv },
  av = { partial: !0, tokenize: pv },
  uv = { partial: !0, tokenize: fv };
function cv(n) {
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
function dv(n, i, l) {
  const s = this;
  let a, u, d, p, m;
  return h;
  function h(_) {
    return g(_);
  }
  function g(_) {
    return (n.enter('htmlFlow'), n.enter('htmlFlowData'), n.consume(_), w);
  }
  function w(_) {
    return _ === 33
      ? (n.consume(_), x)
      : _ === 47
        ? (n.consume(_), (u = !0), N)
        : _ === 63
          ? (n.consume(_), (a = 3), s.interrupt ? i : S)
          : Cn(_)
            ? (n.consume(_), (d = String.fromCharCode(_)), O)
            : l(_);
  }
  function x(_) {
    return _ === 45
      ? (n.consume(_), (a = 2), k)
      : _ === 91
        ? (n.consume(_), (a = 5), (p = 0), T)
        : Cn(_)
          ? (n.consume(_), (a = 4), s.interrupt ? i : S)
          : l(_);
  }
  function k(_) {
    return _ === 45 ? (n.consume(_), s.interrupt ? i : S) : l(_);
  }
  function T(_) {
    const ce = 'CDATA[';
    return _ === ce.charCodeAt(p++)
      ? (n.consume(_), p === ce.length ? (s.interrupt ? i : B) : T)
      : l(_);
  }
  function N(_) {
    return Cn(_) ? (n.consume(_), (d = String.fromCharCode(_)), O) : l(_);
  }
  function O(_) {
    if (_ === null || _ === 47 || _ === 62 || Dt(_)) {
      const ce = _ === 47,
        _e = d.toLowerCase();
      return !ce && !u && Vf.includes(_e)
        ? ((a = 1), s.interrupt ? i(_) : B(_))
        : ov.includes(d.toLowerCase())
          ? ((a = 6), ce ? (n.consume(_), L) : s.interrupt ? i(_) : B(_))
          : ((a = 7), s.interrupt && !s.parser.lazy[s.now().line] ? l(_) : u ? D(_) : z(_));
    }
    return _ === 45 || Gt(_) ? (n.consume(_), (d += String.fromCharCode(_)), O) : l(_);
  }
  function L(_) {
    return _ === 62 ? (n.consume(_), s.interrupt ? i : B) : l(_);
  }
  function D(_) {
    return Ae(_) ? (n.consume(_), D) : fe(_);
  }
  function z(_) {
    return _ === 47
      ? (n.consume(_), fe)
      : _ === 58 || _ === 95 || Cn(_)
        ? (n.consume(_), ee)
        : Ae(_)
          ? (n.consume(_), z)
          : fe(_);
  }
  function ee(_) {
    return _ === 45 || _ === 46 || _ === 58 || _ === 95 || Gt(_) ? (n.consume(_), ee) : te(_);
  }
  function te(_) {
    return _ === 61 ? (n.consume(_), A) : Ae(_) ? (n.consume(_), te) : z(_);
  }
  function A(_) {
    return _ === null || _ === 60 || _ === 61 || _ === 62 || _ === 96
      ? l(_)
      : _ === 34 || _ === 39
        ? (n.consume(_), (m = _), $)
        : Ae(_)
          ? (n.consume(_), A)
          : ue(_);
  }
  function $(_) {
    return _ === m
      ? (n.consume(_), (m = null), se)
      : _ === null || Ee(_)
        ? l(_)
        : (n.consume(_), $);
  }
  function ue(_) {
    return _ === null ||
      _ === 34 ||
      _ === 39 ||
      _ === 47 ||
      _ === 60 ||
      _ === 61 ||
      _ === 62 ||
      _ === 96 ||
      Dt(_)
      ? te(_)
      : (n.consume(_), ue);
  }
  function se(_) {
    return _ === 47 || _ === 62 || Ae(_) ? z(_) : l(_);
  }
  function fe(_) {
    return _ === 62 ? (n.consume(_), Z) : l(_);
  }
  function Z(_) {
    return _ === null || Ee(_) ? B(_) : Ae(_) ? (n.consume(_), Z) : l(_);
  }
  function B(_) {
    return _ === 45 && a === 2
      ? (n.consume(_), ye)
      : _ === 60 && a === 1
        ? (n.consume(_), pe)
        : _ === 62 && a === 4
          ? (n.consume(_), I)
          : _ === 63 && a === 3
            ? (n.consume(_), S)
            : _ === 93 && a === 5
              ? (n.consume(_), re)
              : Ee(_) && (a === 6 || a === 7)
                ? (n.exit('htmlFlowData'), n.check(av, F, ge)(_))
                : _ === null || Ee(_)
                  ? (n.exit('htmlFlowData'), ge(_))
                  : (n.consume(_), B);
  }
  function ge(_) {
    return n.check(uv, U, F)(_);
  }
  function U(_) {
    return (n.enter('lineEnding'), n.consume(_), n.exit('lineEnding'), q);
  }
  function q(_) {
    return _ === null || Ee(_) ? ge(_) : (n.enter('htmlFlowData'), B(_));
  }
  function ye(_) {
    return _ === 45 ? (n.consume(_), S) : B(_);
  }
  function pe(_) {
    return _ === 47 ? (n.consume(_), (d = ''), G) : B(_);
  }
  function G(_) {
    if (_ === 62) {
      const ce = d.toLowerCase();
      return Vf.includes(ce) ? (n.consume(_), I) : B(_);
    }
    return Cn(_) && d.length < 8 ? (n.consume(_), (d += String.fromCharCode(_)), G) : B(_);
  }
  function re(_) {
    return _ === 93 ? (n.consume(_), S) : B(_);
  }
  function S(_) {
    return _ === 62 ? (n.consume(_), I) : _ === 45 && a === 2 ? (n.consume(_), S) : B(_);
  }
  function I(_) {
    return _ === null || Ee(_) ? (n.exit('htmlFlowData'), F(_)) : (n.consume(_), I);
  }
  function F(_) {
    return (n.exit('htmlFlow'), i(_));
  }
}
function fv(n, i, l) {
  const s = this;
  return a;
  function a(d) {
    return Ee(d) ? (n.enter('lineEnding'), n.consume(d), n.exit('lineEnding'), u) : l(d);
  }
  function u(d) {
    return s.parser.lazy[s.now().line] ? l(d) : i(d);
  }
}
function pv(n, i, l) {
  return s;
  function s(a) {
    return (n.enter('lineEnding'), n.consume(a), n.exit('lineEnding'), n.attempt(Eo, i, l));
  }
}
const hv = { name: 'htmlText', tokenize: mv };
function mv(n, i, l) {
  const s = this;
  let a, u, d;
  return p;
  function p(S) {
    return (n.enter('htmlText'), n.enter('htmlTextData'), n.consume(S), m);
  }
  function m(S) {
    return S === 33
      ? (n.consume(S), h)
      : S === 47
        ? (n.consume(S), te)
        : S === 63
          ? (n.consume(S), z)
          : Cn(S)
            ? (n.consume(S), ue)
            : l(S);
  }
  function h(S) {
    return S === 45
      ? (n.consume(S), g)
      : S === 91
        ? (n.consume(S), (u = 0), T)
        : Cn(S)
          ? (n.consume(S), D)
          : l(S);
  }
  function g(S) {
    return S === 45 ? (n.consume(S), k) : l(S);
  }
  function w(S) {
    return S === null
      ? l(S)
      : S === 45
        ? (n.consume(S), x)
        : Ee(S)
          ? ((d = w), pe(S))
          : (n.consume(S), w);
  }
  function x(S) {
    return S === 45 ? (n.consume(S), k) : w(S);
  }
  function k(S) {
    return S === 62 ? ye(S) : S === 45 ? x(S) : w(S);
  }
  function T(S) {
    const I = 'CDATA[';
    return S === I.charCodeAt(u++) ? (n.consume(S), u === I.length ? N : T) : l(S);
  }
  function N(S) {
    return S === null
      ? l(S)
      : S === 93
        ? (n.consume(S), O)
        : Ee(S)
          ? ((d = N), pe(S))
          : (n.consume(S), N);
  }
  function O(S) {
    return S === 93 ? (n.consume(S), L) : N(S);
  }
  function L(S) {
    return S === 62 ? ye(S) : S === 93 ? (n.consume(S), L) : N(S);
  }
  function D(S) {
    return S === null || S === 62 ? ye(S) : Ee(S) ? ((d = D), pe(S)) : (n.consume(S), D);
  }
  function z(S) {
    return S === null
      ? l(S)
      : S === 63
        ? (n.consume(S), ee)
        : Ee(S)
          ? ((d = z), pe(S))
          : (n.consume(S), z);
  }
  function ee(S) {
    return S === 62 ? ye(S) : z(S);
  }
  function te(S) {
    return Cn(S) ? (n.consume(S), A) : l(S);
  }
  function A(S) {
    return S === 45 || Gt(S) ? (n.consume(S), A) : $(S);
  }
  function $(S) {
    return Ee(S) ? ((d = $), pe(S)) : Ae(S) ? (n.consume(S), $) : ye(S);
  }
  function ue(S) {
    return S === 45 || Gt(S) ? (n.consume(S), ue) : S === 47 || S === 62 || Dt(S) ? se(S) : l(S);
  }
  function se(S) {
    return S === 47
      ? (n.consume(S), ye)
      : S === 58 || S === 95 || Cn(S)
        ? (n.consume(S), fe)
        : Ee(S)
          ? ((d = se), pe(S))
          : Ae(S)
            ? (n.consume(S), se)
            : ye(S);
  }
  function fe(S) {
    return S === 45 || S === 46 || S === 58 || S === 95 || Gt(S) ? (n.consume(S), fe) : Z(S);
  }
  function Z(S) {
    return S === 61
      ? (n.consume(S), B)
      : Ee(S)
        ? ((d = Z), pe(S))
        : Ae(S)
          ? (n.consume(S), Z)
          : se(S);
  }
  function B(S) {
    return S === null || S === 60 || S === 61 || S === 62 || S === 96
      ? l(S)
      : S === 34 || S === 39
        ? (n.consume(S), (a = S), ge)
        : Ee(S)
          ? ((d = B), pe(S))
          : Ae(S)
            ? (n.consume(S), B)
            : (n.consume(S), U);
  }
  function ge(S) {
    return S === a
      ? (n.consume(S), (a = void 0), q)
      : S === null
        ? l(S)
        : Ee(S)
          ? ((d = ge), pe(S))
          : (n.consume(S), ge);
  }
  function U(S) {
    return S === null || S === 34 || S === 39 || S === 60 || S === 61 || S === 96
      ? l(S)
      : S === 47 || S === 62 || Dt(S)
        ? se(S)
        : (n.consume(S), U);
  }
  function q(S) {
    return S === 47 || S === 62 || Dt(S) ? se(S) : l(S);
  }
  function ye(S) {
    return S === 62 ? (n.consume(S), n.exit('htmlTextData'), n.exit('htmlText'), i) : l(S);
  }
  function pe(S) {
    return (n.exit('htmlTextData'), n.enter('lineEnding'), n.consume(S), n.exit('lineEnding'), G);
  }
  function G(S) {
    return Ae(S)
      ? Ue(
          n,
          re,
          'linePrefix',
          s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
        )(S)
      : re(S);
  }
  function re(S) {
    return (n.enter('htmlTextData'), d(S));
  }
}
const wu = { name: 'labelEnd', resolveAll: wv, resolveTo: kv, tokenize: xv },
  gv = { tokenize: Sv },
  yv = { tokenize: _v },
  vv = { tokenize: Cv };
function wv(n) {
  let i = -1;
  const l = [];
  for (; ++i < n.length; ) {
    const s = n[i][1];
    if (
      (l.push(n[i]), s.type === 'labelImage' || s.type === 'labelLink' || s.type === 'labelEnd')
    ) {
      const a = s.type === 'labelImage' ? 4 : 2;
      ((s.type = 'data'), (i += a));
    }
  }
  return (n.length !== l.length && En(n, 0, n.length, l), n);
}
function kv(n, i) {
  let l = n.length,
    s = 0,
    a,
    u,
    d,
    p;
  for (; l--; )
    if (((a = n[l][1]), u)) {
      if (a.type === 'link' || (a.type === 'labelLink' && a._inactive)) break;
      n[l][0] === 'enter' && a.type === 'labelLink' && (a._inactive = !0);
    } else if (d) {
      if (
        n[l][0] === 'enter' &&
        (a.type === 'labelImage' || a.type === 'labelLink') &&
        !a._balanced &&
        ((u = l), a.type !== 'labelLink')
      ) {
        s = 2;
        break;
      }
    } else a.type === 'labelEnd' && (d = l);
  const m = {
      type: n[u][1].type === 'labelLink' ? 'link' : 'image',
      start: { ...n[u][1].start },
      end: { ...n[n.length - 1][1].end },
    },
    h = { type: 'label', start: { ...n[u][1].start }, end: { ...n[d][1].end } },
    g = { type: 'labelText', start: { ...n[u + s + 2][1].end }, end: { ...n[d - 2][1].start } };
  return (
    (p = [
      ['enter', m, i],
      ['enter', h, i],
    ]),
    (p = ln(p, n.slice(u + 1, u + s + 3))),
    (p = ln(p, [['enter', g, i]])),
    (p = ln(p, vu(i.parser.constructs.insideSpan.null, n.slice(u + s + 4, d - 3), i))),
    (p = ln(p, [['exit', g, i], n[d - 2], n[d - 1], ['exit', h, i]])),
    (p = ln(p, n.slice(d + 1))),
    (p = ln(p, [['exit', m, i]])),
    En(n, u, n.length, p),
    n
  );
}
function xv(n, i, l) {
  const s = this;
  let a = s.events.length,
    u,
    d;
  for (; a--; )
    if (
      (s.events[a][1].type === 'labelImage' || s.events[a][1].type === 'labelLink') &&
      !s.events[a][1]._balanced
    ) {
      u = s.events[a][1];
      break;
    }
  return p;
  function p(x) {
    return u
      ? u._inactive
        ? w(x)
        : ((d = s.parser.defined.includes(ii(s.sliceSerialize({ start: u.end, end: s.now() })))),
          n.enter('labelEnd'),
          n.enter('labelMarker'),
          n.consume(x),
          n.exit('labelMarker'),
          n.exit('labelEnd'),
          m)
      : l(x);
  }
  function m(x) {
    return x === 40
      ? n.attempt(gv, g, d ? g : w)(x)
      : x === 91
        ? n.attempt(yv, g, d ? h : w)(x)
        : d
          ? g(x)
          : w(x);
  }
  function h(x) {
    return n.attempt(vv, g, w)(x);
  }
  function g(x) {
    return i(x);
  }
  function w(x) {
    return ((u._balanced = !0), l(x));
  }
}
function Sv(n, i, l) {
  return s;
  function s(w) {
    return (
      n.enter('resource'),
      n.enter('resourceMarker'),
      n.consume(w),
      n.exit('resourceMarker'),
      a
    );
  }
  function a(w) {
    return Dt(w) ? Ji(n, u)(w) : u(w);
  }
  function u(w) {
    return w === 41
      ? g(w)
      : Xp(
          n,
          d,
          p,
          'resourceDestination',
          'resourceDestinationLiteral',
          'resourceDestinationLiteralMarker',
          'resourceDestinationRaw',
          'resourceDestinationString',
          32
        )(w);
  }
  function d(w) {
    return Dt(w) ? Ji(n, m)(w) : g(w);
  }
  function p(w) {
    return l(w);
  }
  function m(w) {
    return w === 34 || w === 39 || w === 40
      ? Zp(n, h, l, 'resourceTitle', 'resourceTitleMarker', 'resourceTitleString')(w)
      : g(w);
  }
  function h(w) {
    return Dt(w) ? Ji(n, g)(w) : g(w);
  }
  function g(w) {
    return w === 41
      ? (n.enter('resourceMarker'), n.consume(w), n.exit('resourceMarker'), n.exit('resource'), i)
      : l(w);
  }
}
function _v(n, i, l) {
  const s = this;
  return a;
  function a(p) {
    return Jp.call(s, n, u, d, 'reference', 'referenceMarker', 'referenceString')(p);
  }
  function u(p) {
    return s.parser.defined.includes(
      ii(s.sliceSerialize(s.events[s.events.length - 1][1]).slice(1, -1))
    )
      ? i(p)
      : l(p);
  }
  function d(p) {
    return l(p);
  }
}
function Cv(n, i, l) {
  return s;
  function s(u) {
    return (
      n.enter('reference'),
      n.enter('referenceMarker'),
      n.consume(u),
      n.exit('referenceMarker'),
      a
    );
  }
  function a(u) {
    return u === 93
      ? (n.enter('referenceMarker'),
        n.consume(u),
        n.exit('referenceMarker'),
        n.exit('reference'),
        i)
      : l(u);
  }
}
const Ev = { name: 'labelStartImage', resolveAll: wu.resolveAll, tokenize: bv };
function bv(n, i, l) {
  const s = this;
  return a;
  function a(p) {
    return (
      n.enter('labelImage'),
      n.enter('labelImageMarker'),
      n.consume(p),
      n.exit('labelImageMarker'),
      u
    );
  }
  function u(p) {
    return p === 91
      ? (n.enter('labelMarker'), n.consume(p), n.exit('labelMarker'), n.exit('labelImage'), d)
      : l(p);
  }
  function d(p) {
    return p === 94 && '_hiddenFootnoteSupport' in s.parser.constructs ? l(p) : i(p);
  }
}
const Nv = { name: 'labelStartLink', resolveAll: wu.resolveAll, tokenize: Iv };
function Iv(n, i, l) {
  const s = this;
  return a;
  function a(d) {
    return (
      n.enter('labelLink'),
      n.enter('labelMarker'),
      n.consume(d),
      n.exit('labelMarker'),
      n.exit('labelLink'),
      u
    );
  }
  function u(d) {
    return d === 94 && '_hiddenFootnoteSupport' in s.parser.constructs ? l(d) : i(d);
  }
}
const Na = { name: 'lineEnding', tokenize: Tv };
function Tv(n, i) {
  return l;
  function l(s) {
    return (n.enter('lineEnding'), n.consume(s), n.exit('lineEnding'), Ue(n, i, 'linePrefix'));
  }
}
const wo = { name: 'thematicBreak', tokenize: jv };
function jv(n, i, l) {
  let s = 0,
    a;
  return u;
  function u(h) {
    return (n.enter('thematicBreak'), d(h));
  }
  function d(h) {
    return ((a = h), p(h));
  }
  function p(h) {
    return h === a
      ? (n.enter('thematicBreakSequence'), m(h))
      : s >= 3 && (h === null || Ee(h))
        ? (n.exit('thematicBreak'), i(h))
        : l(h);
  }
  function m(h) {
    return h === a
      ? (n.consume(h), s++, m)
      : (n.exit('thematicBreakSequence'), Ae(h) ? Ue(n, p, 'whitespace')(h) : p(h));
  }
}
const At = { continuation: { tokenize: Rv }, exit: Av, name: 'list', tokenize: Ov },
  Lv = { partial: !0, tokenize: Dv },
  Pv = { partial: !0, tokenize: Mv };
function Ov(n, i, l) {
  const s = this,
    a = s.events[s.events.length - 1];
  let u = a && a[1].type === 'linePrefix' ? a[2].sliceSerialize(a[1], !0).length : 0,
    d = 0;
  return p;
  function p(k) {
    const T =
      s.containerState.type || (k === 42 || k === 43 || k === 45 ? 'listUnordered' : 'listOrdered');
    if (T === 'listUnordered' ? !s.containerState.marker || k === s.containerState.marker : Ga(k)) {
      if (
        (s.containerState.type || ((s.containerState.type = T), n.enter(T, { _container: !0 })),
        T === 'listUnordered')
      )
        return (n.enter('listItemPrefix'), k === 42 || k === 45 ? n.check(wo, l, h)(k) : h(k));
      if (!s.interrupt || k === 49)
        return (n.enter('listItemPrefix'), n.enter('listItemValue'), m(k));
    }
    return l(k);
  }
  function m(k) {
    return Ga(k) && ++d < 10
      ? (n.consume(k), m)
      : (!s.interrupt || d < 2) &&
          (s.containerState.marker ? k === s.containerState.marker : k === 41 || k === 46)
        ? (n.exit('listItemValue'), h(k))
        : l(k);
  }
  function h(k) {
    return (
      n.enter('listItemMarker'),
      n.consume(k),
      n.exit('listItemMarker'),
      (s.containerState.marker = s.containerState.marker || k),
      n.check(Eo, s.interrupt ? l : g, n.attempt(Lv, x, w))
    );
  }
  function g(k) {
    return ((s.containerState.initialBlankLine = !0), u++, x(k));
  }
  function w(k) {
    return Ae(k)
      ? (n.enter('listItemPrefixWhitespace'), n.consume(k), n.exit('listItemPrefixWhitespace'), x)
      : l(k);
  }
  function x(k) {
    return (
      (s.containerState.size = u + s.sliceSerialize(n.exit('listItemPrefix'), !0).length),
      i(k)
    );
  }
}
function Rv(n, i, l) {
  const s = this;
  return ((s.containerState._closeFlow = void 0), n.check(Eo, a, u));
  function a(p) {
    return (
      (s.containerState.furtherBlankLines =
        s.containerState.furtherBlankLines || s.containerState.initialBlankLine),
      Ue(n, i, 'listItemIndent', s.containerState.size + 1)(p)
    );
  }
  function u(p) {
    return s.containerState.furtherBlankLines || !Ae(p)
      ? ((s.containerState.furtherBlankLines = void 0),
        (s.containerState.initialBlankLine = void 0),
        d(p))
      : ((s.containerState.furtherBlankLines = void 0),
        (s.containerState.initialBlankLine = void 0),
        n.attempt(Pv, i, d)(p));
  }
  function d(p) {
    return (
      (s.containerState._closeFlow = !0),
      (s.interrupt = void 0),
      Ue(
        n,
        n.attempt(At, i, l),
        'linePrefix',
        s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
      )(p)
    );
  }
}
function Mv(n, i, l) {
  const s = this;
  return Ue(n, a, 'listItemIndent', s.containerState.size + 1);
  function a(u) {
    const d = s.events[s.events.length - 1];
    return d &&
      d[1].type === 'listItemIndent' &&
      d[2].sliceSerialize(d[1], !0).length === s.containerState.size
      ? i(u)
      : l(u);
  }
}
function Av(n) {
  n.exit(this.containerState.type);
}
function Dv(n, i, l) {
  const s = this;
  return Ue(
    n,
    a,
    'listItemPrefixWhitespace',
    s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 5
  );
  function a(u) {
    const d = s.events[s.events.length - 1];
    return !Ae(u) && d && d[1].type === 'listItemPrefixWhitespace' ? i(u) : l(u);
  }
}
const $f = { name: 'setextUnderline', resolveTo: zv, tokenize: Fv };
function zv(n, i) {
  let l = n.length,
    s,
    a,
    u;
  for (; l--; )
    if (n[l][0] === 'enter') {
      if (n[l][1].type === 'content') {
        s = l;
        break;
      }
      n[l][1].type === 'paragraph' && (a = l);
    } else
      (n[l][1].type === 'content' && n.splice(l, 1),
        !u && n[l][1].type === 'definition' && (u = l));
  const d = {
    type: 'setextHeading',
    start: { ...n[s][1].start },
    end: { ...n[n.length - 1][1].end },
  };
  return (
    (n[a][1].type = 'setextHeadingText'),
    u
      ? (n.splice(a, 0, ['enter', d, i]),
        n.splice(u + 1, 0, ['exit', n[s][1], i]),
        (n[s][1].end = { ...n[u][1].end }))
      : (n[s][1] = d),
    n.push(['exit', d, i]),
    n
  );
}
function Fv(n, i, l) {
  const s = this;
  let a;
  return u;
  function u(h) {
    let g = s.events.length,
      w;
    for (; g--; )
      if (
        s.events[g][1].type !== 'lineEnding' &&
        s.events[g][1].type !== 'linePrefix' &&
        s.events[g][1].type !== 'content'
      ) {
        w = s.events[g][1].type === 'paragraph';
        break;
      }
    return !s.parser.lazy[s.now().line] && (s.interrupt || w)
      ? (n.enter('setextHeadingLine'), (a = h), d(h))
      : l(h);
  }
  function d(h) {
    return (n.enter('setextHeadingLineSequence'), p(h));
  }
  function p(h) {
    return h === a
      ? (n.consume(h), p)
      : (n.exit('setextHeadingLineSequence'), Ae(h) ? Ue(n, m, 'lineSuffix')(h) : m(h));
  }
  function m(h) {
    return h === null || Ee(h) ? (n.exit('setextHeadingLine'), i(h)) : l(h);
  }
}
const Bv = { tokenize: Wv };
function Wv(n) {
  const i = this,
    l = n.attempt(
      Eo,
      s,
      n.attempt(
        this.parser.constructs.flowInitial,
        a,
        Ue(n, n.attempt(this.parser.constructs.flow, a, n.attempt(H1, a)), 'linePrefix')
      )
    );
  return l;
  function s(u) {
    if (u === null) {
      n.consume(u);
      return;
    }
    return (
      n.enter('lineEndingBlank'),
      n.consume(u),
      n.exit('lineEndingBlank'),
      (i.currentConstruct = void 0),
      l
    );
  }
  function a(u) {
    if (u === null) {
      n.consume(u);
      return;
    }
    return (
      n.enter('lineEnding'),
      n.consume(u),
      n.exit('lineEnding'),
      (i.currentConstruct = void 0),
      l
    );
  }
}
const Vv = { resolveAll: th() },
  $v = eh('string'),
  Uv = eh('text');
function eh(n) {
  return { resolveAll: th(n === 'text' ? qv : void 0), tokenize: i };
  function i(l) {
    const s = this,
      a = this.parser.constructs[n],
      u = l.attempt(a, d, p);
    return d;
    function d(g) {
      return h(g) ? u(g) : p(g);
    }
    function p(g) {
      if (g === null) {
        l.consume(g);
        return;
      }
      return (l.enter('data'), l.consume(g), m);
    }
    function m(g) {
      return h(g) ? (l.exit('data'), u(g)) : (l.consume(g), m);
    }
    function h(g) {
      if (g === null) return !0;
      const w = a[g];
      let x = -1;
      if (w)
        for (; ++x < w.length; ) {
          const k = w[x];
          if (!k.previous || k.previous.call(s, s.previous)) return !0;
        }
      return !1;
    }
  }
}
function th(n) {
  return i;
  function i(l, s) {
    let a = -1,
      u;
    for (; ++a <= l.length; )
      u === void 0
        ? l[a] && l[a][1].type === 'data' && ((u = a), a++)
        : (!l[a] || l[a][1].type !== 'data') &&
          (a !== u + 2 &&
            ((l[u][1].end = l[a - 1][1].end), l.splice(u + 2, a - u - 2), (a = u + 2)),
          (u = void 0));
    return n ? n(l, s) : l;
  }
}
function qv(n, i) {
  let l = 0;
  for (; ++l <= n.length; )
    if ((l === n.length || n[l][1].type === 'lineEnding') && n[l - 1][1].type === 'data') {
      const s = n[l - 1][1],
        a = i.sliceStream(s);
      let u = a.length,
        d = -1,
        p = 0,
        m;
      for (; u--; ) {
        const h = a[u];
        if (typeof h == 'string') {
          for (d = h.length; h.charCodeAt(d - 1) === 32; ) (p++, d--);
          if (d) break;
          d = -1;
        } else if (h === -2) ((m = !0), p++);
        else if (h !== -1) {
          u++;
          break;
        }
      }
      if ((i._contentTypeTextTrailing && l === n.length && (p = 0), p)) {
        const h = {
          type: l === n.length || m || p < 2 ? 'lineSuffix' : 'hardBreakTrailing',
          start: {
            _bufferIndex: u ? d : s.start._bufferIndex + d,
            _index: s.start._index + u,
            line: s.end.line,
            column: s.end.column - p,
            offset: s.end.offset - p,
          },
          end: { ...s.end },
        };
        ((s.end = { ...h.start }),
          s.start.offset === s.end.offset
            ? Object.assign(s, h)
            : (n.splice(l, 0, ['enter', h, i], ['exit', h, i]), (l += 2)));
      }
      l++;
    }
  return n;
}
const Hv = {
    42: At,
    43: At,
    45: At,
    48: At,
    49: At,
    50: At,
    51: At,
    52: At,
    53: At,
    54: At,
    55: At,
    56: At,
    57: At,
    62: Qp,
  },
  Qv = { 91: X1 },
  Kv = { [-2]: ba, [-1]: ba, 32: ba },
  Gv = { 35: rv, 42: wo, 45: [$f, wo], 60: sv, 61: $f, 95: wo, 96: Wf, 126: Wf },
  Yv = { 38: Gp, 92: Kp },
  Xv = {
    [-5]: Na,
    [-4]: Na,
    [-3]: Na,
    33: Ev,
    38: Gp,
    42: Ya,
    60: [N1, hv],
    91: Nv,
    92: [tv, Kp],
    93: wu,
    95: Ya,
    96: B1,
  },
  Jv = { null: [Ya, Vv] },
  Zv = { null: [42, 95] },
  ew = { null: [] },
  tw = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: Zv,
        contentInitial: Qv,
        disable: ew,
        document: Hv,
        flow: Gv,
        flowInitial: Kv,
        insideSpan: Jv,
        string: Yv,
        text: Xv,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
function nw(n, i, l) {
  let s = {
    _bufferIndex: -1,
    _index: 0,
    line: (l && l.line) || 1,
    column: (l && l.column) || 1,
    offset: (l && l.offset) || 0,
  };
  const a = {},
    u = [];
  let d = [],
    p = [];
  const m = {
      attempt: $(te),
      check: $(A),
      consume: D,
      enter: z,
      exit: ee,
      interrupt: $(A, { interrupt: !0 }),
    },
    h = {
      code: null,
      containerState: {},
      defineSkip: N,
      events: [],
      now: T,
      parser: n,
      previous: null,
      sliceSerialize: x,
      sliceStream: k,
      write: w,
    };
  let g = i.tokenize.call(h, m);
  return (i.resolveAll && u.push(i), h);
  function w(Z) {
    return (
      (d = ln(d, Z)),
      O(),
      d[d.length - 1] !== null ? [] : (ue(i, 0), (h.events = vu(u, h.events, h)), h.events)
    );
  }
  function x(Z, B) {
    return iw(k(Z), B);
  }
  function k(Z) {
    return rw(d, Z);
  }
  function T() {
    const { _bufferIndex: Z, _index: B, line: ge, column: U, offset: q } = s;
    return { _bufferIndex: Z, _index: B, line: ge, column: U, offset: q };
  }
  function N(Z) {
    ((a[Z.line] = Z.column), fe());
  }
  function O() {
    let Z;
    for (; s._index < d.length; ) {
      const B = d[s._index];
      if (typeof B == 'string')
        for (
          Z = s._index, s._bufferIndex < 0 && (s._bufferIndex = 0);
          s._index === Z && s._bufferIndex < B.length;
        )
          L(B.charCodeAt(s._bufferIndex));
      else L(B);
    }
  }
  function L(Z) {
    g = g(Z);
  }
  function D(Z) {
    (Ee(Z)
      ? (s.line++, (s.column = 1), (s.offset += Z === -3 ? 2 : 1), fe())
      : Z !== -1 && (s.column++, s.offset++),
      s._bufferIndex < 0
        ? s._index++
        : (s._bufferIndex++,
          s._bufferIndex === d[s._index].length && ((s._bufferIndex = -1), s._index++)),
      (h.previous = Z));
  }
  function z(Z, B) {
    const ge = B || {};
    return ((ge.type = Z), (ge.start = T()), h.events.push(['enter', ge, h]), p.push(ge), ge);
  }
  function ee(Z) {
    const B = p.pop();
    return ((B.end = T()), h.events.push(['exit', B, h]), B);
  }
  function te(Z, B) {
    ue(Z, B.from);
  }
  function A(Z, B) {
    B.restore();
  }
  function $(Z, B) {
    return ge;
    function ge(U, q, ye) {
      let pe, G, re, S;
      return Array.isArray(U) ? F(U) : 'tokenize' in U ? F([U]) : I(U);
      function I(ve) {
        return Te;
        function Te(be) {
          const Pe = be !== null && ve[be],
            qe = be !== null && ve.null,
            It = [
              ...(Array.isArray(Pe) ? Pe : Pe ? [Pe] : []),
              ...(Array.isArray(qe) ? qe : qe ? [qe] : []),
            ];
          return F(It)(be);
        }
      }
      function F(ve) {
        return ((pe = ve), (G = 0), ve.length === 0 ? ye : _(ve[G]));
      }
      function _(ve) {
        return Te;
        function Te(be) {
          return (
            (S = se()),
            (re = ve),
            ve.partial || (h.currentConstruct = ve),
            ve.name && h.parser.constructs.disable.null.includes(ve.name)
              ? _e()
              : ve.tokenize.call(B ? Object.assign(Object.create(h), B) : h, m, ce, _e)(be)
          );
        }
      }
      function ce(ve) {
        return (Z(re, S), q);
      }
      function _e(ve) {
        return (S.restore(), ++G < pe.length ? _(pe[G]) : ye);
      }
    }
  }
  function ue(Z, B) {
    (Z.resolveAll && !u.includes(Z) && u.push(Z),
      Z.resolve && En(h.events, B, h.events.length - B, Z.resolve(h.events.slice(B), h)),
      Z.resolveTo && (h.events = Z.resolveTo(h.events, h)));
  }
  function se() {
    const Z = T(),
      B = h.previous,
      ge = h.currentConstruct,
      U = h.events.length,
      q = Array.from(p);
    return { from: U, restore: ye };
    function ye() {
      ((s = Z), (h.previous = B), (h.currentConstruct = ge), (h.events.length = U), (p = q), fe());
    }
  }
  function fe() {
    s.line in a && s.column < 2 && ((s.column = a[s.line]), (s.offset += a[s.line] - 1));
  }
}
function rw(n, i) {
  const l = i.start._index,
    s = i.start._bufferIndex,
    a = i.end._index,
    u = i.end._bufferIndex;
  let d;
  if (l === a) d = [n[l].slice(s, u)];
  else {
    if (((d = n.slice(l, a)), s > -1)) {
      const p = d[0];
      typeof p == 'string' ? (d[0] = p.slice(s)) : d.shift();
    }
    u > 0 && d.push(n[a].slice(0, u));
  }
  return d;
}
function iw(n, i) {
  let l = -1;
  const s = [];
  let a;
  for (; ++l < n.length; ) {
    const u = n[l];
    let d;
    if (typeof u == 'string') d = u;
    else
      switch (u) {
        case -5: {
          d = '\r';
          break;
        }
        case -4: {
          d = `
`;
          break;
        }
        case -3: {
          d = `\r
`;
          break;
        }
        case -2: {
          d = i ? ' ' : '	';
          break;
        }
        case -1: {
          if (!i && a) continue;
          d = ' ';
          break;
        }
        default:
          d = String.fromCharCode(u);
      }
    ((a = u === -2), s.push(d));
  }
  return s.join('');
}
function lw(n) {
  const s = {
    constructs: f1([tw, ...((n || {}).extensions || [])]),
    content: a(k1),
    defined: [],
    document: a(S1),
    flow: a(Bv),
    lazy: {},
    string: a($v),
    text: a(Uv),
  };
  return s;
  function a(u) {
    return d;
    function d(p) {
      return nw(s, u, p);
    }
  }
}
function ow(n) {
  for (; !Yp(n); );
  return n;
}
const Uf = /[\0\t\n\r]/g;
function sw() {
  let n = 1,
    i = '',
    l = !0,
    s;
  return a;
  function a(u, d, p) {
    const m = [];
    let h, g, w, x, k;
    for (
      u = i + (typeof u == 'string' ? u.toString() : new TextDecoder(d || void 0).decode(u)),
        w = 0,
        i = '',
        l && (u.charCodeAt(0) === 65279 && w++, (l = void 0));
      w < u.length;
    ) {
      if (
        ((Uf.lastIndex = w),
        (h = Uf.exec(u)),
        (x = h && h.index !== void 0 ? h.index : u.length),
        (k = u.charCodeAt(x)),
        !h)
      ) {
        i = u.slice(w);
        break;
      }
      if (k === 10 && w === x && s) (m.push(-3), (s = void 0));
      else
        switch (
          (s && (m.push(-5), (s = void 0)), w < x && (m.push(u.slice(w, x)), (n += x - w)), k)
        ) {
          case 0: {
            (m.push(65533), n++);
            break;
          }
          case 9: {
            for (g = Math.ceil(n / 4) * 4, m.push(-2); n++ < g; ) m.push(-1);
            break;
          }
          case 10: {
            (m.push(-4), (n = 1));
            break;
          }
          default:
            ((s = !0), (n = 1));
        }
      w = x + 1;
    }
    return (p && (s && m.push(-5), i && m.push(i), m.push(null)), m);
  }
}
const aw = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function uw(n) {
  return n.replace(aw, cw);
}
function cw(n, i, l) {
  if (i) return i;
  if (l.charCodeAt(0) === 35) {
    const a = l.charCodeAt(1),
      u = a === 120 || a === 88;
    return Hp(l.slice(u ? 2 : 1), u ? 16 : 10);
  }
  return yu(l) || n;
}
const nh = {}.hasOwnProperty;
function dw(n, i, l) {
  return (
    typeof i != 'string' && ((l = i), (i = void 0)),
    fw(l)(
      ow(
        lw(l)
          .document()
          .write(sw()(n, i, !0))
      )
    )
  );
}
function fw(n) {
  const i = {
    transforms: [],
    canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
    enter: {
      autolink: u(Je),
      autolinkProtocol: se,
      autolinkEmail: se,
      atxHeading: u(gn),
      blockQuote: u(qe),
      characterEscape: se,
      characterReference: se,
      codeFenced: u(It),
      codeFencedFenceInfo: d,
      codeFencedFenceMeta: d,
      codeIndented: u(It, d),
      codeText: u(Et, d),
      codeTextData: se,
      data: se,
      codeFlowValue: se,
      definition: u(Ft),
      definitionDestinationString: d,
      definitionLabelString: d,
      definitionTitleString: d,
      emphasis: u(Bt),
      hardBreakEscape: u(on),
      hardBreakTrailing: u(on),
      htmlFlow: u(ae, d),
      htmlFlowData: se,
      htmlText: u(ae, d),
      htmlTextData: se,
      image: u(De),
      label: d,
      link: u(Je),
      listItem: u(vt),
      listItemValue: x,
      listOrdered: u(pt, w),
      listUnordered: u(pt),
      paragraph: u(Yt),
      reference: _,
      referenceString: d,
      resourceDestinationString: d,
      resourceTitleString: d,
      setextHeading: u(gn),
      strong: u(Wn),
      thematicBreak: u(he),
    },
    exit: {
      atxHeading: m(),
      atxHeadingSequence: te,
      autolink: m(),
      autolinkEmail: Pe,
      autolinkProtocol: be,
      blockQuote: m(),
      characterEscapeValue: fe,
      characterReferenceMarkerHexadecimal: _e,
      characterReferenceMarkerNumeric: _e,
      characterReferenceValue: ve,
      characterReference: Te,
      codeFenced: m(O),
      codeFencedFence: N,
      codeFencedFenceInfo: k,
      codeFencedFenceMeta: T,
      codeFlowValue: fe,
      codeIndented: m(L),
      codeText: m(q),
      codeTextData: fe,
      data: fe,
      definition: m(),
      definitionDestinationString: ee,
      definitionLabelString: D,
      definitionTitleString: z,
      emphasis: m(),
      hardBreakEscape: m(B),
      hardBreakTrailing: m(B),
      htmlFlow: m(ge),
      htmlFlowData: fe,
      htmlText: m(U),
      htmlTextData: fe,
      image: m(pe),
      label: re,
      labelText: G,
      lineEnding: Z,
      link: m(ye),
      listItem: m(),
      listOrdered: m(),
      listUnordered: m(),
      paragraph: m(),
      referenceString: ce,
      resourceDestinationString: S,
      resourceTitleString: I,
      resource: F,
      setextHeading: m(ue),
      setextHeadingLineSequence: $,
      setextHeadingText: A,
      strong: m(),
      thematicBreak: m(),
    },
  };
  rh(i, (n || {}).mdastExtensions || []);
  const l = {};
  return s;
  function s(M) {
    let Q = { type: 'root', children: [] };
    const xe = {
        stack: [Q],
        tokenStack: [],
        config: i,
        enter: p,
        exit: h,
        buffer: d,
        resume: g,
        data: l,
      },
      Ne = [];
    let Oe = -1;
    for (; ++Oe < M.length; )
      if (M[Oe][1].type === 'listOrdered' || M[Oe][1].type === 'listUnordered')
        if (M[Oe][0] === 'enter') Ne.push(Oe);
        else {
          const ht = Ne.pop();
          Oe = a(M, ht, Oe);
        }
    for (Oe = -1; ++Oe < M.length; ) {
      const ht = i[M[Oe][0]];
      nh.call(ht, M[Oe][1].type) &&
        ht[M[Oe][1].type].call(
          Object.assign({ sliceSerialize: M[Oe][2].sliceSerialize }, xe),
          M[Oe][1]
        );
    }
    if (xe.tokenStack.length > 0) {
      const ht = xe.tokenStack[xe.tokenStack.length - 1];
      (ht[1] || qf).call(xe, void 0, ht[0]);
    }
    for (
      Q.position = {
        start: ar(M.length > 0 ? M[0][1].start : { line: 1, column: 1, offset: 0 }),
        end: ar(M.length > 0 ? M[M.length - 2][1].end : { line: 1, column: 1, offset: 0 }),
      },
        Oe = -1;
      ++Oe < i.transforms.length;
    )
      Q = i.transforms[Oe](Q) || Q;
    return Q;
  }
  function a(M, Q, xe) {
    let Ne = Q - 1,
      Oe = -1,
      ht = !1,
      bn,
      Xt,
      Vn,
      dr;
    for (; ++Ne <= xe; ) {
      const mt = M[Ne];
      switch (mt[1].type) {
        case 'listUnordered':
        case 'listOrdered':
        case 'blockQuote': {
          (mt[0] === 'enter' ? Oe++ : Oe--, (dr = void 0));
          break;
        }
        case 'lineEndingBlank': {
          mt[0] === 'enter' && (bn && !dr && !Oe && !Vn && (Vn = Ne), (dr = void 0));
          break;
        }
        case 'linePrefix':
        case 'listItemValue':
        case 'listItemMarker':
        case 'listItemPrefix':
        case 'listItemPrefixWhitespace':
          break;
        default:
          dr = void 0;
      }
      if (
        (!Oe && mt[0] === 'enter' && mt[1].type === 'listItemPrefix') ||
        (Oe === -1 &&
          mt[0] === 'exit' &&
          (mt[1].type === 'listUnordered' || mt[1].type === 'listOrdered'))
      ) {
        if (bn) {
          let yn = Ne;
          for (Xt = void 0; yn--; ) {
            const Wt = M[yn];
            if (Wt[1].type === 'lineEnding' || Wt[1].type === 'lineEndingBlank') {
              if (Wt[0] === 'exit') continue;
              (Xt && ((M[Xt][1].type = 'lineEndingBlank'), (ht = !0)),
                (Wt[1].type = 'lineEnding'),
                (Xt = yn));
            } else if (
              !(
                Wt[1].type === 'linePrefix' ||
                Wt[1].type === 'blockQuotePrefix' ||
                Wt[1].type === 'blockQuotePrefixWhitespace' ||
                Wt[1].type === 'blockQuoteMarker' ||
                Wt[1].type === 'listItemIndent'
              )
            )
              break;
          }
          (Vn && (!Xt || Vn < Xt) && (bn._spread = !0),
            (bn.end = Object.assign({}, Xt ? M[Xt][1].start : mt[1].end)),
            M.splice(Xt || Ne, 0, ['exit', bn, mt[2]]),
            Ne++,
            xe++);
        }
        if (mt[1].type === 'listItemPrefix') {
          const yn = {
            type: 'listItem',
            _spread: !1,
            start: Object.assign({}, mt[1].start),
            end: void 0,
          };
          ((bn = yn), M.splice(Ne, 0, ['enter', yn, mt[2]]), Ne++, xe++, (Vn = void 0), (dr = !0));
        }
      }
    }
    return ((M[Q][1]._spread = ht), xe);
  }
  function u(M, Q) {
    return xe;
    function xe(Ne) {
      (p.call(this, M(Ne), Ne), Q && Q.call(this, Ne));
    }
  }
  function d() {
    this.stack.push({ type: 'fragment', children: [] });
  }
  function p(M, Q, xe) {
    (this.stack[this.stack.length - 1].children.push(M),
      this.stack.push(M),
      this.tokenStack.push([Q, xe || void 0]),
      (M.position = { start: ar(Q.start), end: void 0 }));
  }
  function m(M) {
    return Q;
    function Q(xe) {
      (M && M.call(this, xe), h.call(this, xe));
    }
  }
  function h(M, Q) {
    const xe = this.stack.pop(),
      Ne = this.tokenStack.pop();
    if (Ne)
      Ne[0].type !== M.type && (Q ? Q.call(this, M, Ne[0]) : (Ne[1] || qf).call(this, M, Ne[0]));
    else
      throw new Error(
        'Cannot close `' + M.type + '` (' + Xi({ start: M.start, end: M.end }) + '): it’s not open'
      );
    xe.position.end = ar(M.end);
  }
  function g() {
    return c1(this.stack.pop());
  }
  function w() {
    this.data.expectingFirstListItemValue = !0;
  }
  function x(M) {
    if (this.data.expectingFirstListItemValue) {
      const Q = this.stack[this.stack.length - 2];
      ((Q.start = Number.parseInt(this.sliceSerialize(M), 10)),
        (this.data.expectingFirstListItemValue = void 0));
    }
  }
  function k() {
    const M = this.resume(),
      Q = this.stack[this.stack.length - 1];
    Q.lang = M;
  }
  function T() {
    const M = this.resume(),
      Q = this.stack[this.stack.length - 1];
    Q.meta = M;
  }
  function N() {
    this.data.flowCodeInside || (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function O() {
    const M = this.resume(),
      Q = this.stack[this.stack.length - 1];
    ((Q.value = M.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '')), (this.data.flowCodeInside = void 0));
  }
  function L() {
    const M = this.resume(),
      Q = this.stack[this.stack.length - 1];
    Q.value = M.replace(/(\r?\n|\r)$/g, '');
  }
  function D(M) {
    const Q = this.resume(),
      xe = this.stack[this.stack.length - 1];
    ((xe.label = Q), (xe.identifier = ii(this.sliceSerialize(M)).toLowerCase()));
  }
  function z() {
    const M = this.resume(),
      Q = this.stack[this.stack.length - 1];
    Q.title = M;
  }
  function ee() {
    const M = this.resume(),
      Q = this.stack[this.stack.length - 1];
    Q.url = M;
  }
  function te(M) {
    const Q = this.stack[this.stack.length - 1];
    if (!Q.depth) {
      const xe = this.sliceSerialize(M).length;
      Q.depth = xe;
    }
  }
  function A() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function $(M) {
    const Q = this.stack[this.stack.length - 1];
    Q.depth = this.sliceSerialize(M).codePointAt(0) === 61 ? 1 : 2;
  }
  function ue() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function se(M) {
    const xe = this.stack[this.stack.length - 1].children;
    let Ne = xe[xe.length - 1];
    ((!Ne || Ne.type !== 'text') &&
      ((Ne = J()), (Ne.position = { start: ar(M.start), end: void 0 }), xe.push(Ne)),
      this.stack.push(Ne));
  }
  function fe(M) {
    const Q = this.stack.pop();
    ((Q.value += this.sliceSerialize(M)), (Q.position.end = ar(M.end)));
  }
  function Z(M) {
    const Q = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const xe = Q.children[Q.children.length - 1];
      ((xe.position.end = ar(M.end)), (this.data.atHardBreak = void 0));
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      i.canContainEols.includes(Q.type) &&
      (se.call(this, M), fe.call(this, M));
  }
  function B() {
    this.data.atHardBreak = !0;
  }
  function ge() {
    const M = this.resume(),
      Q = this.stack[this.stack.length - 1];
    Q.value = M;
  }
  function U() {
    const M = this.resume(),
      Q = this.stack[this.stack.length - 1];
    Q.value = M;
  }
  function q() {
    const M = this.resume(),
      Q = this.stack[this.stack.length - 1];
    Q.value = M;
  }
  function ye() {
    const M = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const Q = this.data.referenceType || 'shortcut';
      ((M.type += 'Reference'), (M.referenceType = Q), delete M.url, delete M.title);
    } else (delete M.identifier, delete M.label);
    this.data.referenceType = void 0;
  }
  function pe() {
    const M = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const Q = this.data.referenceType || 'shortcut';
      ((M.type += 'Reference'), (M.referenceType = Q), delete M.url, delete M.title);
    } else (delete M.identifier, delete M.label);
    this.data.referenceType = void 0;
  }
  function G(M) {
    const Q = this.sliceSerialize(M),
      xe = this.stack[this.stack.length - 2];
    ((xe.label = uw(Q)), (xe.identifier = ii(Q).toLowerCase()));
  }
  function re() {
    const M = this.stack[this.stack.length - 1],
      Q = this.resume(),
      xe = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), xe.type === 'link')) {
      const Ne = M.children;
      xe.children = Ne;
    } else xe.alt = Q;
  }
  function S() {
    const M = this.resume(),
      Q = this.stack[this.stack.length - 1];
    Q.url = M;
  }
  function I() {
    const M = this.resume(),
      Q = this.stack[this.stack.length - 1];
    Q.title = M;
  }
  function F() {
    this.data.inReference = void 0;
  }
  function _() {
    this.data.referenceType = 'collapsed';
  }
  function ce(M) {
    const Q = this.resume(),
      xe = this.stack[this.stack.length - 1];
    ((xe.label = Q),
      (xe.identifier = ii(this.sliceSerialize(M)).toLowerCase()),
      (this.data.referenceType = 'full'));
  }
  function _e(M) {
    this.data.characterReferenceType = M.type;
  }
  function ve(M) {
    const Q = this.sliceSerialize(M),
      xe = this.data.characterReferenceType;
    let Ne;
    xe
      ? ((Ne = Hp(Q, xe === 'characterReferenceMarkerNumeric' ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (Ne = yu(Q));
    const Oe = this.stack[this.stack.length - 1];
    Oe.value += Ne;
  }
  function Te(M) {
    const Q = this.stack.pop();
    Q.position.end = ar(M.end);
  }
  function be(M) {
    fe.call(this, M);
    const Q = this.stack[this.stack.length - 1];
    Q.url = this.sliceSerialize(M);
  }
  function Pe(M) {
    fe.call(this, M);
    const Q = this.stack[this.stack.length - 1];
    Q.url = 'mailto:' + this.sliceSerialize(M);
  }
  function qe() {
    return { type: 'blockquote', children: [] };
  }
  function It() {
    return { type: 'code', lang: null, meta: null, value: '' };
  }
  function Et() {
    return { type: 'inlineCode', value: '' };
  }
  function Ft() {
    return { type: 'definition', identifier: '', label: null, title: null, url: '' };
  }
  function Bt() {
    return { type: 'emphasis', children: [] };
  }
  function gn() {
    return { type: 'heading', depth: 0, children: [] };
  }
  function on() {
    return { type: 'break' };
  }
  function ae() {
    return { type: 'html', value: '' };
  }
  function De() {
    return { type: 'image', title: null, url: '', alt: null };
  }
  function Je() {
    return { type: 'link', title: null, url: '', children: [] };
  }
  function pt(M) {
    return {
      type: 'list',
      ordered: M.type === 'listOrdered',
      start: null,
      spread: M._spread,
      children: [],
    };
  }
  function vt(M) {
    return { type: 'listItem', spread: M._spread, checked: null, children: [] };
  }
  function Yt() {
    return { type: 'paragraph', children: [] };
  }
  function Wn() {
    return { type: 'strong', children: [] };
  }
  function J() {
    return { type: 'text', value: '' };
  }
  function he() {
    return { type: 'thematicBreak' };
  }
}
function ar(n) {
  return { line: n.line, column: n.column, offset: n.offset };
}
function rh(n, i) {
  let l = -1;
  for (; ++l < i.length; ) {
    const s = i[l];
    Array.isArray(s) ? rh(n, s) : pw(n, s);
  }
}
function pw(n, i) {
  let l;
  for (l in i)
    if (nh.call(i, l))
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
function qf(n, i) {
  throw n
    ? new Error(
        'Cannot close `' +
          n.type +
          '` (' +
          Xi({ start: n.start, end: n.end }) +
          '): a different token (`' +
          i.type +
          '`, ' +
          Xi({ start: i.start, end: i.end }) +
          ') is open'
      )
    : new Error(
        'Cannot close document, a token (`' +
          i.type +
          '`, ' +
          Xi({ start: i.start, end: i.end }) +
          ') is still open'
      );
}
function hw(n) {
  const i = this;
  i.parser = l;
  function l(s) {
    return dw(s, {
      ...i.data('settings'),
      ...n,
      extensions: i.data('micromarkExtensions') || [],
      mdastExtensions: i.data('fromMarkdownExtensions') || [],
    });
  }
}
function mw(n, i) {
  const l = {
    type: 'element',
    tagName: 'blockquote',
    properties: {},
    children: n.wrap(n.all(i), !0),
  };
  return (n.patch(i, l), n.applyData(i, l));
}
function gw(n, i) {
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
function yw(n, i) {
  const l = i.value
      ? i.value +
        `
`
      : '',
    s = {},
    a = i.lang ? i.lang.split(/\s+/) : [];
  a.length > 0 && (s.className = ['language-' + a[0]]);
  let u = {
    type: 'element',
    tagName: 'code',
    properties: s,
    children: [{ type: 'text', value: l }],
  };
  return (
    i.meta && (u.data = { meta: i.meta }),
    n.patch(i, u),
    (u = n.applyData(i, u)),
    (u = { type: 'element', tagName: 'pre', properties: {}, children: [u] }),
    n.patch(i, u),
    u
  );
}
function vw(n, i) {
  const l = { type: 'element', tagName: 'del', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function ww(n, i) {
  const l = { type: 'element', tagName: 'em', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function kw(n, i) {
  const l = typeof n.options.clobberPrefix == 'string' ? n.options.clobberPrefix : 'user-content-',
    s = String(i.identifier).toUpperCase(),
    a = si(s.toLowerCase()),
    u = n.footnoteOrder.indexOf(s);
  let d,
    p = n.footnoteCounts.get(s);
  (p === void 0 ? ((p = 0), n.footnoteOrder.push(s), (d = n.footnoteOrder.length)) : (d = u + 1),
    (p += 1),
    n.footnoteCounts.set(s, p));
  const m = {
    type: 'element',
    tagName: 'a',
    properties: {
      href: '#' + l + 'fn-' + a,
      id: l + 'fnref-' + a + (p > 1 ? '-' + p : ''),
      dataFootnoteRef: !0,
      ariaDescribedBy: ['footnote-label'],
    },
    children: [{ type: 'text', value: String(d) }],
  };
  n.patch(i, m);
  const h = { type: 'element', tagName: 'sup', properties: {}, children: [m] };
  return (n.patch(i, h), n.applyData(i, h));
}
function xw(n, i) {
  const l = { type: 'element', tagName: 'h' + i.depth, properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function Sw(n, i) {
  if (n.options.allowDangerousHtml) {
    const l = { type: 'raw', value: i.value };
    return (n.patch(i, l), n.applyData(i, l));
  }
}
function ih(n, i) {
  const l = i.referenceType;
  let s = ']';
  if (
    (l === 'collapsed' ? (s += '[]') : l === 'full' && (s += '[' + (i.label || i.identifier) + ']'),
    i.type === 'imageReference')
  )
    return [{ type: 'text', value: '![' + i.alt + s }];
  const a = n.all(i),
    u = a[0];
  u && u.type === 'text' ? (u.value = '[' + u.value) : a.unshift({ type: 'text', value: '[' });
  const d = a[a.length - 1];
  return (d && d.type === 'text' ? (d.value += s) : a.push({ type: 'text', value: s }), a);
}
function _w(n, i) {
  const l = String(i.identifier).toUpperCase(),
    s = n.definitionById.get(l);
  if (!s) return ih(n, i);
  const a = { src: si(s.url || ''), alt: i.alt };
  s.title !== null && s.title !== void 0 && (a.title = s.title);
  const u = { type: 'element', tagName: 'img', properties: a, children: [] };
  return (n.patch(i, u), n.applyData(i, u));
}
function Cw(n, i) {
  const l = { src: si(i.url) };
  (i.alt !== null && i.alt !== void 0 && (l.alt = i.alt),
    i.title !== null && i.title !== void 0 && (l.title = i.title));
  const s = { type: 'element', tagName: 'img', properties: l, children: [] };
  return (n.patch(i, s), n.applyData(i, s));
}
function Ew(n, i) {
  const l = { type: 'text', value: i.value.replace(/\r?\n|\r/g, ' ') };
  n.patch(i, l);
  const s = { type: 'element', tagName: 'code', properties: {}, children: [l] };
  return (n.patch(i, s), n.applyData(i, s));
}
function bw(n, i) {
  const l = String(i.identifier).toUpperCase(),
    s = n.definitionById.get(l);
  if (!s) return ih(n, i);
  const a = { href: si(s.url || '') };
  s.title !== null && s.title !== void 0 && (a.title = s.title);
  const u = { type: 'element', tagName: 'a', properties: a, children: n.all(i) };
  return (n.patch(i, u), n.applyData(i, u));
}
function Nw(n, i) {
  const l = { href: si(i.url) };
  i.title !== null && i.title !== void 0 && (l.title = i.title);
  const s = { type: 'element', tagName: 'a', properties: l, children: n.all(i) };
  return (n.patch(i, s), n.applyData(i, s));
}
function Iw(n, i, l) {
  const s = n.all(i),
    a = l ? Tw(l) : lh(i),
    u = {},
    d = [];
  if (typeof i.checked == 'boolean') {
    const g = s[0];
    let w;
    (g && g.type === 'element' && g.tagName === 'p'
      ? (w = g)
      : ((w = { type: 'element', tagName: 'p', properties: {}, children: [] }), s.unshift(w)),
      w.children.length > 0 && w.children.unshift({ type: 'text', value: ' ' }),
      w.children.unshift({
        type: 'element',
        tagName: 'input',
        properties: { type: 'checkbox', checked: i.checked, disabled: !0 },
        children: [],
      }),
      (u.className = ['task-list-item']));
  }
  let p = -1;
  for (; ++p < s.length; ) {
    const g = s[p];
    ((a || p !== 0 || g.type !== 'element' || g.tagName !== 'p') &&
      d.push({
        type: 'text',
        value: `
`,
      }),
      g.type === 'element' && g.tagName === 'p' && !a ? d.push(...g.children) : d.push(g));
  }
  const m = s[s.length - 1];
  m &&
    (a || m.type !== 'element' || m.tagName !== 'p') &&
    d.push({
      type: 'text',
      value: `
`,
    });
  const h = { type: 'element', tagName: 'li', properties: u, children: d };
  return (n.patch(i, h), n.applyData(i, h));
}
function Tw(n) {
  let i = !1;
  if (n.type === 'list') {
    i = n.spread || !1;
    const l = n.children;
    let s = -1;
    for (; !i && ++s < l.length; ) i = lh(l[s]);
  }
  return i;
}
function lh(n) {
  const i = n.spread;
  return i ?? n.children.length > 1;
}
function jw(n, i) {
  const l = {},
    s = n.all(i);
  let a = -1;
  for (typeof i.start == 'number' && i.start !== 1 && (l.start = i.start); ++a < s.length; ) {
    const d = s[a];
    if (
      d.type === 'element' &&
      d.tagName === 'li' &&
      d.properties &&
      Array.isArray(d.properties.className) &&
      d.properties.className.includes('task-list-item')
    ) {
      l.className = ['contains-task-list'];
      break;
    }
  }
  const u = {
    type: 'element',
    tagName: i.ordered ? 'ol' : 'ul',
    properties: l,
    children: n.wrap(s, !0),
  };
  return (n.patch(i, u), n.applyData(i, u));
}
function Lw(n, i) {
  const l = { type: 'element', tagName: 'p', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function Pw(n, i) {
  const l = { type: 'root', children: n.wrap(n.all(i)) };
  return (n.patch(i, l), n.applyData(i, l));
}
function Ow(n, i) {
  const l = { type: 'element', tagName: 'strong', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function Rw(n, i) {
  const l = n.all(i),
    s = l.shift(),
    a = [];
  if (s) {
    const d = { type: 'element', tagName: 'thead', properties: {}, children: n.wrap([s], !0) };
    (n.patch(i.children[0], d), a.push(d));
  }
  if (l.length > 0) {
    const d = { type: 'element', tagName: 'tbody', properties: {}, children: n.wrap(l, !0) },
      p = pu(i.children[1]),
      m = Fp(i.children[i.children.length - 1]);
    (p && m && (d.position = { start: p, end: m }), a.push(d));
  }
  const u = { type: 'element', tagName: 'table', properties: {}, children: n.wrap(a, !0) };
  return (n.patch(i, u), n.applyData(i, u));
}
function Mw(n, i, l) {
  const s = l ? l.children : void 0,
    u = (s ? s.indexOf(i) : 1) === 0 ? 'th' : 'td',
    d = l && l.type === 'table' ? l.align : void 0,
    p = d ? d.length : i.children.length;
  let m = -1;
  const h = [];
  for (; ++m < p; ) {
    const w = i.children[m],
      x = {},
      k = d ? d[m] : void 0;
    k && (x.align = k);
    let T = { type: 'element', tagName: u, properties: x, children: [] };
    (w && ((T.children = n.all(w)), n.patch(w, T), (T = n.applyData(w, T))), h.push(T));
  }
  const g = { type: 'element', tagName: 'tr', properties: {}, children: n.wrap(h, !0) };
  return (n.patch(i, g), n.applyData(i, g));
}
function Aw(n, i) {
  const l = { type: 'element', tagName: 'td', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
const Hf = 9,
  Qf = 32;
function Dw(n) {
  const i = String(n),
    l = /\r?\n|\r/g;
  let s = l.exec(i),
    a = 0;
  const u = [];
  for (; s; )
    (u.push(Kf(i.slice(a, s.index), a > 0, !0), s[0]),
      (a = s.index + s[0].length),
      (s = l.exec(i)));
  return (u.push(Kf(i.slice(a), a > 0, !1)), u.join(''));
}
function Kf(n, i, l) {
  let s = 0,
    a = n.length;
  if (i) {
    let u = n.codePointAt(s);
    for (; u === Hf || u === Qf; ) (s++, (u = n.codePointAt(s)));
  }
  if (l) {
    let u = n.codePointAt(a - 1);
    for (; u === Hf || u === Qf; ) (a--, (u = n.codePointAt(a - 1)));
  }
  return a > s ? n.slice(s, a) : '';
}
function zw(n, i) {
  const l = { type: 'text', value: Dw(String(i.value)) };
  return (n.patch(i, l), n.applyData(i, l));
}
function Fw(n, i) {
  const l = { type: 'element', tagName: 'hr', properties: {}, children: [] };
  return (n.patch(i, l), n.applyData(i, l));
}
const Bw = {
  blockquote: mw,
  break: gw,
  code: yw,
  delete: vw,
  emphasis: ww,
  footnoteReference: kw,
  heading: xw,
  html: Sw,
  imageReference: _w,
  image: Cw,
  inlineCode: Ew,
  linkReference: bw,
  link: Nw,
  listItem: Iw,
  list: jw,
  paragraph: Lw,
  root: Pw,
  strong: Ow,
  table: Rw,
  tableCell: Aw,
  tableRow: Mw,
  text: zw,
  thematicBreak: Fw,
  toml: po,
  yaml: po,
  definition: po,
  footnoteDefinition: po,
};
function po() {}
const oh = -1,
  bo = 0,
  Zi = 1,
  xo = 2,
  ku = 3,
  xu = 4,
  Su = 5,
  _u = 6,
  sh = 7,
  ah = 8,
  Gf = typeof self == 'object' ? self : globalThis,
  Ww = (n, i) => {
    const l = (a, u) => (n.set(u, a), a),
      s = (a) => {
        if (n.has(a)) return n.get(a);
        const [u, d] = i[a];
        switch (u) {
          case bo:
          case oh:
            return l(d, a);
          case Zi: {
            const p = l([], a);
            for (const m of d) p.push(s(m));
            return p;
          }
          case xo: {
            const p = l({}, a);
            for (const [m, h] of d) p[s(m)] = s(h);
            return p;
          }
          case ku:
            return l(new Date(d), a);
          case xu: {
            const { source: p, flags: m } = d;
            return l(new RegExp(p, m), a);
          }
          case Su: {
            const p = l(new Map(), a);
            for (const [m, h] of d) p.set(s(m), s(h));
            return p;
          }
          case _u: {
            const p = l(new Set(), a);
            for (const m of d) p.add(s(m));
            return p;
          }
          case sh: {
            const { name: p, message: m } = d;
            return l(new Gf[p](m), a);
          }
          case ah:
            return l(BigInt(d), a);
          case 'BigInt':
            return l(Object(BigInt(d)), a);
          case 'ArrayBuffer':
            return l(new Uint8Array(d).buffer, d);
          case 'DataView': {
            const { buffer: p } = new Uint8Array(d);
            return l(new DataView(p), d);
          }
        }
        return l(new Gf[u](d), a);
      };
    return s;
  },
  Yf = (n) => Ww(new Map(), n)(0),
  ti = '',
  { toString: Vw } = {},
  { keys: $w } = Object,
  Gi = (n) => {
    const i = typeof n;
    if (i !== 'object' || !n) return [bo, i];
    const l = Vw.call(n).slice(8, -1);
    switch (l) {
      case 'Array':
        return [Zi, ti];
      case 'Object':
        return [xo, ti];
      case 'Date':
        return [ku, ti];
      case 'RegExp':
        return [xu, ti];
      case 'Map':
        return [Su, ti];
      case 'Set':
        return [_u, ti];
      case 'DataView':
        return [Zi, l];
    }
    return l.includes('Array') ? [Zi, l] : l.includes('Error') ? [sh, l] : [xo, l];
  },
  ho = ([n, i]) => n === bo && (i === 'function' || i === 'symbol'),
  Uw = (n, i, l, s) => {
    const a = (d, p) => {
        const m = s.push(d) - 1;
        return (l.set(p, m), m);
      },
      u = (d) => {
        if (l.has(d)) return l.get(d);
        let [p, m] = Gi(d);
        switch (p) {
          case bo: {
            let g = d;
            switch (m) {
              case 'bigint':
                ((p = ah), (g = d.toString()));
                break;
              case 'function':
              case 'symbol':
                if (n) throw new TypeError('unable to serialize ' + m);
                g = null;
                break;
              case 'undefined':
                return a([oh], d);
            }
            return a([p, g], d);
          }
          case Zi: {
            if (m) {
              let x = d;
              return (
                m === 'DataView'
                  ? (x = new Uint8Array(d.buffer))
                  : m === 'ArrayBuffer' && (x = new Uint8Array(d)),
                a([m, [...x]], d)
              );
            }
            const g = [],
              w = a([p, g], d);
            for (const x of d) g.push(u(x));
            return w;
          }
          case xo: {
            if (m)
              switch (m) {
                case 'BigInt':
                  return a([m, d.toString()], d);
                case 'Boolean':
                case 'Number':
                case 'String':
                  return a([m, d.valueOf()], d);
              }
            if (i && 'toJSON' in d) return u(d.toJSON());
            const g = [],
              w = a([p, g], d);
            for (const x of $w(d)) (n || !ho(Gi(d[x]))) && g.push([u(x), u(d[x])]);
            return w;
          }
          case ku:
            return a([p, d.toISOString()], d);
          case xu: {
            const { source: g, flags: w } = d;
            return a([p, { source: g, flags: w }], d);
          }
          case Su: {
            const g = [],
              w = a([p, g], d);
            for (const [x, k] of d) (n || !(ho(Gi(x)) || ho(Gi(k)))) && g.push([u(x), u(k)]);
            return w;
          }
          case _u: {
            const g = [],
              w = a([p, g], d);
            for (const x of d) (n || !ho(Gi(x))) && g.push(u(x));
            return w;
          }
        }
        const { message: h } = d;
        return a([p, { name: m, message: h }], d);
      };
    return u;
  },
  Xf = (n, { json: i, lossy: l } = {}) => {
    const s = [];
    return (Uw(!(i || l), !!i, new Map(), s)(n), s);
  },
  So =
    typeof structuredClone == 'function'
      ? (n, i) => (i && ('json' in i || 'lossy' in i) ? Yf(Xf(n, i)) : structuredClone(n))
      : (n, i) => Yf(Xf(n, i));
function qw(n, i) {
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
function Hw(n, i) {
  return 'Back to reference ' + (n + 1) + (i > 1 ? '-' + i : '');
}
function Qw(n) {
  const i = typeof n.options.clobberPrefix == 'string' ? n.options.clobberPrefix : 'user-content-',
    l = n.options.footnoteBackContent || qw,
    s = n.options.footnoteBackLabel || Hw,
    a = n.options.footnoteLabel || 'Footnotes',
    u = n.options.footnoteLabelTagName || 'h2',
    d = n.options.footnoteLabelProperties || { className: ['sr-only'] },
    p = [];
  let m = -1;
  for (; ++m < n.footnoteOrder.length; ) {
    const h = n.footnoteById.get(n.footnoteOrder[m]);
    if (!h) continue;
    const g = n.all(h),
      w = String(h.identifier).toUpperCase(),
      x = si(w.toLowerCase());
    let k = 0;
    const T = [],
      N = n.footnoteCounts.get(w);
    for (; N !== void 0 && ++k <= N; ) {
      T.length > 0 && T.push({ type: 'text', value: ' ' });
      let D = typeof l == 'string' ? l : l(m, k);
      (typeof D == 'string' && (D = { type: 'text', value: D }),
        T.push({
          type: 'element',
          tagName: 'a',
          properties: {
            href: '#' + i + 'fnref-' + x + (k > 1 ? '-' + k : ''),
            dataFootnoteBackref: '',
            ariaLabel: typeof s == 'string' ? s : s(m, k),
            className: ['data-footnote-backref'],
          },
          children: Array.isArray(D) ? D : [D],
        }));
    }
    const O = g[g.length - 1];
    if (O && O.type === 'element' && O.tagName === 'p') {
      const D = O.children[O.children.length - 1];
      (D && D.type === 'text' ? (D.value += ' ') : O.children.push({ type: 'text', value: ' ' }),
        O.children.push(...T));
    } else g.push(...T);
    const L = {
      type: 'element',
      tagName: 'li',
      properties: { id: i + 'fn-' + x },
      children: n.wrap(g, !0),
    };
    (n.patch(h, L), p.push(L));
  }
  if (p.length !== 0)
    return {
      type: 'element',
      tagName: 'section',
      properties: { dataFootnotes: !0, className: ['footnotes'] },
      children: [
        {
          type: 'element',
          tagName: u,
          properties: { ...So(d), id: 'footnote-label' },
          children: [{ type: 'text', value: a }],
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
const uh = function (n) {
  if (n == null) return Xw;
  if (typeof n == 'function') return No(n);
  if (typeof n == 'object') return Array.isArray(n) ? Kw(n) : Gw(n);
  if (typeof n == 'string') return Yw(n);
  throw new Error('Expected function, string, or object as test');
};
function Kw(n) {
  const i = [];
  let l = -1;
  for (; ++l < n.length; ) i[l] = uh(n[l]);
  return No(s);
  function s(...a) {
    let u = -1;
    for (; ++u < i.length; ) if (i[u].apply(this, a)) return !0;
    return !1;
  }
}
function Gw(n) {
  const i = n;
  return No(l);
  function l(s) {
    const a = s;
    let u;
    for (u in n) if (a[u] !== i[u]) return !1;
    return !0;
  }
}
function Yw(n) {
  return No(i);
  function i(l) {
    return l && l.type === n;
  }
}
function No(n) {
  return i;
  function i(l, s, a) {
    return !!(Jw(l) && n.call(this, l, typeof s == 'number' ? s : void 0, a || void 0));
  }
}
function Xw() {
  return !0;
}
function Jw(n) {
  return n !== null && typeof n == 'object' && 'type' in n;
}
const ch = [],
  Zw = !0,
  Jf = !1,
  ek = 'skip';
function tk(n, i, l, s) {
  let a;
  typeof i == 'function' && typeof l != 'function' ? ((s = l), (l = i)) : (a = i);
  const u = uh(a),
    d = s ? -1 : 1;
  p(n, void 0, [])();
  function p(m, h, g) {
    const w = m && typeof m == 'object' ? m : {};
    if (typeof w.type == 'string') {
      const k =
        typeof w.tagName == 'string' ? w.tagName : typeof w.name == 'string' ? w.name : void 0;
      Object.defineProperty(x, 'name', {
        value: 'node (' + (m.type + (k ? '<' + k + '>' : '')) + ')',
      });
    }
    return x;
    function x() {
      let k = ch,
        T,
        N,
        O;
      if ((!i || u(m, h, g[g.length - 1] || void 0)) && ((k = nk(l(m, g))), k[0] === Jf)) return k;
      if ('children' in m && m.children) {
        const L = m;
        if (L.children && k[0] !== ek)
          for (
            N = (s ? L.children.length : -1) + d, O = g.concat(L);
            N > -1 && N < L.children.length;
          ) {
            const D = L.children[N];
            if (((T = p(D, N, O)()), T[0] === Jf)) return T;
            N = typeof T[1] == 'number' ? T[1] : N + d;
          }
      }
      return k;
    }
  }
}
function nk(n) {
  return Array.isArray(n) ? n : typeof n == 'number' ? [Zw, n] : n == null ? ch : [n];
}
function dh(n, i, l, s) {
  let a, u, d;
  (typeof i == 'function' && typeof l != 'function'
    ? ((u = void 0), (d = i), (a = l))
    : ((u = i), (d = l), (a = s)),
    tk(n, u, p, a));
  function p(m, h) {
    const g = h[h.length - 1],
      w = g ? g.children.indexOf(m) : void 0;
    return d(m, w, g);
  }
}
const Xa = {}.hasOwnProperty,
  rk = {};
function ik(n, i) {
  const l = i || rk,
    s = new Map(),
    a = new Map(),
    u = new Map(),
    d = { ...Bw, ...l.handlers },
    p = {
      all: h,
      applyData: ok,
      definitionById: s,
      footnoteById: a,
      footnoteCounts: u,
      footnoteOrder: [],
      handlers: d,
      one: m,
      options: l,
      patch: lk,
      wrap: ak,
    };
  return (
    dh(n, function (g) {
      if (g.type === 'definition' || g.type === 'footnoteDefinition') {
        const w = g.type === 'definition' ? s : a,
          x = String(g.identifier).toUpperCase();
        w.has(x) || w.set(x, g);
      }
    }),
    p
  );
  function m(g, w) {
    const x = g.type,
      k = p.handlers[x];
    if (Xa.call(p.handlers, x) && k) return k(p, g, w);
    if (p.options.passThrough && p.options.passThrough.includes(x)) {
      if ('children' in g) {
        const { children: N, ...O } = g,
          L = So(O);
        return ((L.children = p.all(g)), L);
      }
      return So(g);
    }
    return (p.options.unknownHandler || sk)(p, g, w);
  }
  function h(g) {
    const w = [];
    if ('children' in g) {
      const x = g.children;
      let k = -1;
      for (; ++k < x.length; ) {
        const T = p.one(x[k], g);
        if (T) {
          if (
            k &&
            x[k - 1].type === 'break' &&
            (!Array.isArray(T) && T.type === 'text' && (T.value = Zf(T.value)),
            !Array.isArray(T) && T.type === 'element')
          ) {
            const N = T.children[0];
            N && N.type === 'text' && (N.value = Zf(N.value));
          }
          Array.isArray(T) ? w.push(...T) : w.push(T);
        }
      }
    }
    return w;
  }
}
function lk(n, i) {
  n.position && (i.position = Vy(n));
}
function ok(n, i) {
  let l = i;
  if (n && n.data) {
    const s = n.data.hName,
      a = n.data.hChildren,
      u = n.data.hProperties;
    if (typeof s == 'string')
      if (l.type === 'element') l.tagName = s;
      else {
        const d = 'children' in l ? l.children : [l];
        l = { type: 'element', tagName: s, properties: {}, children: d };
      }
    (l.type === 'element' && u && Object.assign(l.properties, So(u)),
      'children' in l && l.children && a !== null && a !== void 0 && (l.children = a));
  }
  return l;
}
function sk(n, i) {
  const l = i.data || {},
    s =
      'value' in i && !(Xa.call(l, 'hProperties') || Xa.call(l, 'hChildren'))
        ? { type: 'text', value: i.value }
        : { type: 'element', tagName: 'div', properties: {}, children: n.all(i) };
  return (n.patch(i, s), n.applyData(i, s));
}
function ak(n, i) {
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
function Zf(n) {
  let i = 0,
    l = n.charCodeAt(i);
  for (; l === 9 || l === 32; ) (i++, (l = n.charCodeAt(i)));
  return n.slice(i);
}
function ep(n, i) {
  const l = ik(n, i),
    s = l.one(n, void 0),
    a = Qw(l),
    u = Array.isArray(s) ? { type: 'root', children: s } : s || { type: 'root', children: [] };
  return (
    a &&
      u.children.push(
        {
          type: 'text',
          value: `
`,
        },
        a
      ),
    u
  );
}
function uk(n, i) {
  return n && 'run' in n
    ? async function (l, s) {
        const a = ep(l, { file: s, ...i });
        await n.run(a, s);
      }
    : function (l, s) {
        return ep(l, { file: s, ...(n || i) });
      };
}
function tp(n) {
  if (n) throw n;
}
var Ia, np;
function ck() {
  if (np) return Ia;
  np = 1;
  var n = Object.prototype.hasOwnProperty,
    i = Object.prototype.toString,
    l = Object.defineProperty,
    s = Object.getOwnPropertyDescriptor,
    a = function (h) {
      return typeof Array.isArray == 'function' ? Array.isArray(h) : i.call(h) === '[object Array]';
    },
    u = function (h) {
      if (!h || i.call(h) !== '[object Object]') return !1;
      var g = n.call(h, 'constructor'),
        w =
          h.constructor &&
          h.constructor.prototype &&
          n.call(h.constructor.prototype, 'isPrototypeOf');
      if (h.constructor && !g && !w) return !1;
      var x;
      for (x in h);
      return typeof x > 'u' || n.call(h, x);
    },
    d = function (h, g) {
      l && g.name === '__proto__'
        ? l(h, g.name, { enumerable: !0, configurable: !0, value: g.newValue, writable: !0 })
        : (h[g.name] = g.newValue);
    },
    p = function (h, g) {
      if (g === '__proto__')
        if (n.call(h, g)) {
          if (s) return s(h, g).value;
        } else return;
      return h[g];
    };
  return (
    (Ia = function m() {
      var h,
        g,
        w,
        x,
        k,
        T,
        N = arguments[0],
        O = 1,
        L = arguments.length,
        D = !1;
      for (
        typeof N == 'boolean' && ((D = N), (N = arguments[1] || {}), (O = 2)),
          (N == null || (typeof N != 'object' && typeof N != 'function')) && (N = {});
        O < L;
        ++O
      )
        if (((h = arguments[O]), h != null))
          for (g in h)
            ((w = p(N, g)),
              (x = p(h, g)),
              N !== x &&
                (D && x && (u(x) || (k = a(x)))
                  ? (k ? ((k = !1), (T = w && a(w) ? w : [])) : (T = w && u(w) ? w : {}),
                    d(N, { name: g, newValue: m(D, T, x) }))
                  : typeof x < 'u' && d(N, { name: g, newValue: x })));
      return N;
    }),
    Ia
  );
}
var dk = ck();
const Ta = pp(dk);
function Ja(n) {
  if (typeof n != 'object' || n === null) return !1;
  const i = Object.getPrototypeOf(n);
  return (
    (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) &&
    !(Symbol.toStringTag in n) &&
    !(Symbol.iterator in n)
  );
}
function fk() {
  const n = [],
    i = { run: l, use: s };
  return i;
  function l(...a) {
    let u = -1;
    const d = a.pop();
    if (typeof d != 'function') throw new TypeError('Expected function as last argument, not ' + d);
    p(null, ...a);
    function p(m, ...h) {
      const g = n[++u];
      let w = -1;
      if (m) {
        d(m);
        return;
      }
      for (; ++w < a.length; ) (h[w] === null || h[w] === void 0) && (h[w] = a[w]);
      ((a = h), g ? pk(g, p)(...h) : d(null, ...h));
    }
  }
  function s(a) {
    if (typeof a != 'function')
      throw new TypeError('Expected `middelware` to be a function, not ' + a);
    return (n.push(a), i);
  }
}
function pk(n, i) {
  let l;
  return s;
  function s(...d) {
    const p = n.length > d.length;
    let m;
    p && d.push(a);
    try {
      m = n.apply(this, d);
    } catch (h) {
      const g = h;
      if (p && l) throw g;
      return a(g);
    }
    p ||
      (m && m.then && typeof m.then == 'function'
        ? m.then(u, a)
        : m instanceof Error
          ? a(m)
          : u(m));
  }
  function a(d, ...p) {
    l || ((l = !0), i(d, ...p));
  }
  function u(d) {
    a(null, d);
  }
}
const _n = { basename: hk, dirname: mk, extname: gk, join: yk, sep: '/' };
function hk(n, i) {
  if (i !== void 0 && typeof i != 'string') throw new TypeError('"ext" argument must be a string');
  rl(n);
  let l = 0,
    s = -1,
    a = n.length,
    u;
  if (i === void 0 || i.length === 0 || i.length > n.length) {
    for (; a--; )
      if (n.codePointAt(a) === 47) {
        if (u) {
          l = a + 1;
          break;
        }
      } else s < 0 && ((u = !0), (s = a + 1));
    return s < 0 ? '' : n.slice(l, s);
  }
  if (i === n) return '';
  let d = -1,
    p = i.length - 1;
  for (; a--; )
    if (n.codePointAt(a) === 47) {
      if (u) {
        l = a + 1;
        break;
      }
    } else
      (d < 0 && ((u = !0), (d = a + 1)),
        p > -1 &&
          (n.codePointAt(a) === i.codePointAt(p--) ? p < 0 && (s = a) : ((p = -1), (s = d))));
  return (l === s ? (s = d) : s < 0 && (s = n.length), n.slice(l, s));
}
function mk(n) {
  if ((rl(n), n.length === 0)) return '.';
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
function gk(n) {
  rl(n);
  let i = n.length,
    l = -1,
    s = 0,
    a = -1,
    u = 0,
    d;
  for (; i--; ) {
    const p = n.codePointAt(i);
    if (p === 47) {
      if (d) {
        s = i + 1;
        break;
      }
      continue;
    }
    (l < 0 && ((d = !0), (l = i + 1)),
      p === 46 ? (a < 0 ? (a = i) : u !== 1 && (u = 1)) : a > -1 && (u = -1));
  }
  return a < 0 || l < 0 || u === 0 || (u === 1 && a === l - 1 && a === s + 1) ? '' : n.slice(a, l);
}
function yk(...n) {
  let i = -1,
    l;
  for (; ++i < n.length; ) (rl(n[i]), n[i] && (l = l === void 0 ? n[i] : l + '/' + n[i]));
  return l === void 0 ? '.' : vk(l);
}
function vk(n) {
  rl(n);
  const i = n.codePointAt(0) === 47;
  let l = wk(n, !i);
  return (
    l.length === 0 && !i && (l = '.'),
    l.length > 0 && n.codePointAt(n.length - 1) === 47 && (l += '/'),
    i ? '/' + l : l
  );
}
function wk(n, i) {
  let l = '',
    s = 0,
    a = -1,
    u = 0,
    d = -1,
    p,
    m;
  for (; ++d <= n.length; ) {
    if (d < n.length) p = n.codePointAt(d);
    else {
      if (p === 47) break;
      p = 47;
    }
    if (p === 47) {
      if (!(a === d - 1 || u === 1))
        if (a !== d - 1 && u === 2) {
          if (
            l.length < 2 ||
            s !== 2 ||
            l.codePointAt(l.length - 1) !== 46 ||
            l.codePointAt(l.length - 2) !== 46
          ) {
            if (l.length > 2) {
              if (((m = l.lastIndexOf('/')), m !== l.length - 1)) {
                (m < 0
                  ? ((l = ''), (s = 0))
                  : ((l = l.slice(0, m)), (s = l.length - 1 - l.lastIndexOf('/'))),
                  (a = d),
                  (u = 0));
                continue;
              }
            } else if (l.length > 0) {
              ((l = ''), (s = 0), (a = d), (u = 0));
              continue;
            }
          }
          i && ((l = l.length > 0 ? l + '/..' : '..'), (s = 2));
        } else
          (l.length > 0 ? (l += '/' + n.slice(a + 1, d)) : (l = n.slice(a + 1, d)),
            (s = d - a - 1));
      ((a = d), (u = 0));
    } else p === 46 && u > -1 ? u++ : (u = -1);
  }
  return l;
}
function rl(n) {
  if (typeof n != 'string')
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(n));
}
const kk = { cwd: xk };
function xk() {
  return '/';
}
function Za(n) {
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
function Sk(n) {
  if (typeof n == 'string') n = new URL(n);
  else if (!Za(n)) {
    const i = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + n + '`'
    );
    throw ((i.code = 'ERR_INVALID_ARG_TYPE'), i);
  }
  if (n.protocol !== 'file:') {
    const i = new TypeError('The URL must be of scheme file');
    throw ((i.code = 'ERR_INVALID_URL_SCHEME'), i);
  }
  return _k(n);
}
function _k(n) {
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
        const a = new TypeError('File URL path must not include encoded / characters');
        throw ((a.code = 'ERR_INVALID_FILE_URL_PATH'), a);
      }
    }
  return decodeURIComponent(i);
}
const ja = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
class fh {
  constructor(i) {
    let l;
    (i
      ? Za(i)
        ? (l = { path: i })
        : typeof i == 'string' || Ck(i)
          ? (l = { value: i })
          : (l = i)
      : (l = {}),
      (this.cwd = 'cwd' in l ? '' : kk.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored);
    let s = -1;
    for (; ++s < ja.length; ) {
      const u = ja[s];
      u in l && l[u] !== void 0 && l[u] !== null && (this[u] = u === 'history' ? [...l[u]] : l[u]);
    }
    let a;
    for (a in l) ja.includes(a) || (this[a] = l[a]);
  }
  get basename() {
    return typeof this.path == 'string' ? _n.basename(this.path) : void 0;
  }
  set basename(i) {
    (Pa(i, 'basename'), La(i, 'basename'), (this.path = _n.join(this.dirname || '', i)));
  }
  get dirname() {
    return typeof this.path == 'string' ? _n.dirname(this.path) : void 0;
  }
  set dirname(i) {
    (rp(this.basename, 'dirname'), (this.path = _n.join(i || '', this.basename)));
  }
  get extname() {
    return typeof this.path == 'string' ? _n.extname(this.path) : void 0;
  }
  set extname(i) {
    if ((La(i, 'extname'), rp(this.dirname, 'extname'), i)) {
      if (i.codePointAt(0) !== 46) throw new Error('`extname` must start with `.`');
      if (i.includes('.', 1)) throw new Error('`extname` cannot contain multiple dots');
    }
    this.path = _n.join(this.dirname, this.stem + (i || ''));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(i) {
    (Za(i) && (i = Sk(i)), Pa(i, 'path'), this.path !== i && this.history.push(i));
  }
  get stem() {
    return typeof this.path == 'string' ? _n.basename(this.path, this.extname) : void 0;
  }
  set stem(i) {
    (Pa(i, 'stem'),
      La(i, 'stem'),
      (this.path = _n.join(this.dirname || '', i + (this.extname || ''))));
  }
  fail(i, l, s) {
    const a = this.message(i, l, s);
    throw ((a.fatal = !0), a);
  }
  info(i, l, s) {
    const a = this.message(i, l, s);
    return ((a.fatal = void 0), a);
  }
  message(i, l, s) {
    const a = new Ct(i, l, s);
    return (
      this.path && ((a.name = this.path + ':' + a.name), (a.file = this.path)),
      (a.fatal = !1),
      this.messages.push(a),
      a
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
function La(n, i) {
  if (n && n.includes(_n.sep))
    throw new Error('`' + i + '` cannot be a path: did not expect `' + _n.sep + '`');
}
function Pa(n, i) {
  if (!n) throw new Error('`' + i + '` cannot be empty');
}
function rp(n, i) {
  if (!n) throw new Error('Setting `' + i + '` requires `path` to be set too');
}
function Ck(n) {
  return !!(n && typeof n == 'object' && 'byteLength' in n && 'byteOffset' in n);
}
const Ek = function (n) {
    const s = this.constructor.prototype,
      a = s[n],
      u = function () {
        return a.apply(u, arguments);
      };
    return (Object.setPrototypeOf(u, s), u);
  },
  bk = {}.hasOwnProperty;
class Cu extends Ek {
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
      (this.transformers = fk()));
  }
  copy() {
    const i = new Cu();
    let l = -1;
    for (; ++l < this.attachers.length; ) {
      const s = this.attachers[l];
      i.use(...s);
    }
    return (i.data(Ta(!0, {}, this.namespace)), i);
  }
  data(i, l) {
    return typeof i == 'string'
      ? arguments.length === 2
        ? (Ma('data', this.frozen), (this.namespace[i] = l), this)
        : (bk.call(this.namespace, i) && this.namespace[i]) || void 0
      : i
        ? (Ma('data', this.frozen), (this.namespace = i), this)
        : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const i = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [l, ...s] = this.attachers[this.freezeIndex];
      if (s[0] === !1) continue;
      s[0] === !0 && (s[0] = void 0);
      const a = l.call(i, ...s);
      typeof a == 'function' && this.transformers.use(a);
    }
    return ((this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this);
  }
  parse(i) {
    this.freeze();
    const l = mo(i),
      s = this.parser || this.Parser;
    return (Oa('parse', s), s(String(l), l));
  }
  process(i, l) {
    const s = this;
    return (
      this.freeze(),
      Oa('process', this.parser || this.Parser),
      Ra('process', this.compiler || this.Compiler),
      l ? a(void 0, l) : new Promise(a)
    );
    function a(u, d) {
      const p = mo(i),
        m = s.parse(p);
      s.run(m, p, function (g, w, x) {
        if (g || !w || !x) return h(g);
        const k = w,
          T = s.stringify(k, x);
        (Tk(T) ? (x.value = T) : (x.result = T), h(g, x));
      });
      function h(g, w) {
        g || !w ? d(g) : u ? u(w) : l(void 0, w);
      }
    }
  }
  processSync(i) {
    let l = !1,
      s;
    return (
      this.freeze(),
      Oa('processSync', this.parser || this.Parser),
      Ra('processSync', this.compiler || this.Compiler),
      this.process(i, a),
      lp('processSync', 'process', l),
      s
    );
    function a(u, d) {
      ((l = !0), tp(u), (s = d));
    }
  }
  run(i, l, s) {
    (ip(i), this.freeze());
    const a = this.transformers;
    return (
      !s && typeof l == 'function' && ((s = l), (l = void 0)),
      s ? u(void 0, s) : new Promise(u)
    );
    function u(d, p) {
      const m = mo(l);
      a.run(i, m, h);
      function h(g, w, x) {
        const k = w || i;
        g ? p(g) : d ? d(k) : s(void 0, k, x);
      }
    }
  }
  runSync(i, l) {
    let s = !1,
      a;
    return (this.run(i, l, u), lp('runSync', 'run', s), a);
    function u(d, p) {
      (tp(d), (a = p), (s = !0));
    }
  }
  stringify(i, l) {
    this.freeze();
    const s = mo(l),
      a = this.compiler || this.Compiler;
    return (Ra('stringify', a), ip(i), a(i, s));
  }
  use(i, ...l) {
    const s = this.attachers,
      a = this.namespace;
    if ((Ma('use', this.frozen), i != null))
      if (typeof i == 'function') m(i, l);
      else if (typeof i == 'object') Array.isArray(i) ? p(i) : d(i);
      else throw new TypeError('Expected usable value, not `' + i + '`');
    return this;
    function u(h) {
      if (typeof h == 'function') m(h, []);
      else if (typeof h == 'object')
        if (Array.isArray(h)) {
          const [g, ...w] = h;
          m(g, w);
        } else d(h);
      else throw new TypeError('Expected usable value, not `' + h + '`');
    }
    function d(h) {
      if (!('plugins' in h) && !('settings' in h))
        throw new Error(
          'Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither'
        );
      (p(h.plugins), h.settings && (a.settings = Ta(!0, a.settings, h.settings)));
    }
    function p(h) {
      let g = -1;
      if (h != null)
        if (Array.isArray(h))
          for (; ++g < h.length; ) {
            const w = h[g];
            u(w);
          }
        else throw new TypeError('Expected a list of plugins, not `' + h + '`');
    }
    function m(h, g) {
      let w = -1,
        x = -1;
      for (; ++w < s.length; )
        if (s[w][0] === h) {
          x = w;
          break;
        }
      if (x === -1) s.push([h, ...g]);
      else if (g.length > 0) {
        let [k, ...T] = g;
        const N = s[x][1];
        (Ja(N) && Ja(k) && (k = Ta(!0, N, k)), (s[x] = [h, k, ...T]));
      }
    }
  }
}
const Nk = new Cu().freeze();
function Oa(n, i) {
  if (typeof i != 'function') throw new TypeError('Cannot `' + n + '` without `parser`');
}
function Ra(n, i) {
  if (typeof i != 'function') throw new TypeError('Cannot `' + n + '` without `compiler`');
}
function Ma(n, i) {
  if (i)
    throw new Error(
      'Cannot call `' +
        n +
        '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.'
    );
}
function ip(n) {
  if (!Ja(n) || typeof n.type != 'string') throw new TypeError('Expected node, got `' + n + '`');
}
function lp(n, i, l) {
  if (!l) throw new Error('`' + n + '` finished async. Use `' + i + '` instead');
}
function mo(n) {
  return Ik(n) ? n : new fh(n);
}
function Ik(n) {
  return !!(n && typeof n == 'object' && 'message' in n && 'messages' in n);
}
function Tk(n) {
  return typeof n == 'string' || jk(n);
}
function jk(n) {
  return !!(n && typeof n == 'object' && 'byteLength' in n && 'byteOffset' in n);
}
const Lk = 'https://github.com/remarkjs/react-markdown/blob/main/changelog.md',
  op = [],
  sp = { allowDangerousHtml: !0 },
  Pk = /^(https?|ircs?|mailto|xmpp)$/i,
  Ok = [
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
function Tr(n) {
  const i = Rk(n),
    l = Mk(n);
  return Ak(i.runSync(i.parse(l), l), n);
}
function Rk(n) {
  const i = n.rehypePlugins || op,
    l = n.remarkPlugins || op,
    s = n.remarkRehypeOptions ? { ...n.remarkRehypeOptions, ...sp } : sp;
  return Nk().use(hw).use(l).use(uk, s).use(i);
}
function Mk(n) {
  const i = n.children || '',
    l = new fh();
  return (typeof i == 'string' && (l.value = i), l);
}
function Ak(n, i) {
  const l = i.allowedElements,
    s = i.allowElement,
    a = i.components,
    u = i.disallowedElements,
    d = i.skipHtml,
    p = i.unwrapDisallowed,
    m = i.urlTransform || Dk;
  for (const g of Ok)
    Object.hasOwn(i, g.from) &&
      ('' + g.from + (g.to ? 'use `' + g.to + '` instead' : 'remove it') + Lk + g.id, void 0);
  return (
    dh(n, h),
    Qy(n, {
      Fragment: v.Fragment,
      components: a,
      ignoreInvalidStyle: !0,
      jsx: v.jsx,
      jsxs: v.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function h(g, w, x) {
    if (g.type === 'raw' && x && typeof w == 'number')
      return (d ? x.children.splice(w, 1) : (x.children[w] = { type: 'text', value: g.value }), w);
    if (g.type === 'element') {
      let k;
      for (k in Ea)
        if (Object.hasOwn(Ea, k) && Object.hasOwn(g.properties, k)) {
          const T = g.properties[k],
            N = Ea[k];
          (N === null || N.includes(g.tagName)) && (g.properties[k] = m(String(T || ''), k, g));
        }
    }
    if (g.type === 'element') {
      let k = l ? !l.includes(g.tagName) : u ? u.includes(g.tagName) : !1;
      if ((!k && s && typeof w == 'number' && (k = !s(g, w, x)), k && x && typeof w == 'number'))
        return (
          p && g.children ? x.children.splice(w, 1, ...g.children) : x.children.splice(w, 1),
          w
        );
    }
  }
}
function Dk(n) {
  const i = n.indexOf(':'),
    l = n.indexOf('?'),
    s = n.indexOf('#'),
    a = n.indexOf('/');
  return i === -1 ||
    (a !== -1 && i > a) ||
    (l !== -1 && i > l) ||
    (s !== -1 && i > s) ||
    Pk.test(n.slice(0, i))
    ? n
    : '';
}
const Bn = ({ subtitle: n }) =>
  v.jsxs('header', {
    className: `header${n ? ' header-with-subtitle' : ''}`,
    children: [
      v.jsxs('div', {
        className: 'header-brand',
        children: [
          v.jsx('img', {
            src: '/quiz-demo/prototypes/moral-marketplace/NewLogoSVG.svg',
            alt: 'Rethink Priorities',
            height: '24',
          }),
          v.jsx('span', { className: 'header-title', children: 'Donor Compass' }),
        ],
      }),
      n && v.jsx('div', { className: 'header-subtitle', children: n }),
    ],
  });
function mn() {
  const n = W.useContext(Lp);
  if (!n) throw new Error('useQuiz must be used within a QuizProvider');
  return n;
}
function Eu(n) {
  const [i, l] = W.useState(!1),
    [s, a, u] = n || [],
    d = s ? `${s}@${a}.${u}` : null,
    p = W.useCallback(
      (m) => {
        (m.preventDefault(),
          d && (navigator.clipboard.writeText(d), l(!0), setTimeout(() => l(!1), 2e3)));
      },
      [d]
    );
  return { email: d, copied: i, handleEmailClick: p };
}
function bu(n, i, l) {
  return !i || !n ? n : n.replace('{{EMAIL}}', `[${l ? 'Copied!' : i}](#copy-email)`);
}
function Nu(n, i) {
  return function ({ href: s, children: a }) {
    return s === '#copy-email'
      ? v.jsx('span', { onClick: n, className: i, children: a })
      : v.jsx('a', { href: s, target: '_blank', rel: 'noopener noreferrer', children: a });
  };
}
const zk = '_container_hmsrd_3',
  Fk = '_heading_hmsrd_8',
  Bk = '_content_hmsrd_16',
  Wk = '_emailCopy_hmsrd_60',
  go = { container: zk, heading: Fk, content: Bk, emailCopy: Wk },
  Vk = {
    heading: "This is a prototype of Rethink Priorities's Donor Compass",
    content: `**This version is a prototype. The funds, underlying data, and calculations in this version are placeholders meant to illustrate the type of behavior you can expect from the tool. All of these will change in future versions.** 

 **Donor Compass helps you find a distribution of donations across funds that fits your personal values.** The tool asks for your personal preferences about things that matter when assessing different charitable projects (like how much you weigh animal suffering or effects on the distant future) and then calculates which funds best match those preferences. Importantly, future versions will account for diminishing returns, so recommendations will update as large amounts of money go into specific funds.

 **What we're seeking feedback on:** The types of inputs and questions we ask, the general workflow and layout, and what changes would make this tool more useful for your decision making.

 **Future iterations will include:**
- A usable version ready in early March 2026, including the GiveWell Top Charities Fund, EA Animal Welfare Fund, Longview Philanthropy Fund, and others
- Detailed cost-effectiveness estimates for included funds
- Detailed explanations of all calculations that account for diminishing returns
- Different methods for aggregating your inputs into recommended allocations
- A power user version that is more freely configurable 
- A fund, guided by the most recent research and funding insights, that distributes across cause areas  
- Potentially: an LLM interface that helps you interpret the calculations and results.

**Share your feedback:** Please share any thoughts, however brief, in [this form](https://rethinkpriorities.qualtrics.com/jfe/form/SV_9mJlFv7Tch8qMMC) or by email to {{EMAIL}}. If you’d like to talk to Marcus A. Davis (cofounder) in San Francisco you can [book a coffee chat with him using this link](https://calendar.app.google/rS74siwccp8mScvR7) for Thursday February 5th or 13th-15th. You can also [book an online call](https://calendly.com/hayley-clatterbuck/30min) with Hayley Clatterbuck.

**Sign up** [**here**](https://mailchi.mp/4da0acddedce/rethink-priorities-donor-compass) if you'd like to get an email when the next version of this tool is ready.`,
    email: ['carmen', 'rethinkpriorities', 'org'],
    continueButton: 'Continue →',
  },
  $k = {
    timeEstimate: '5-20 minutes',
    headingLine1: 'Where Should Your',
    headingLine2: 'Giving Go?',
    intro:
      'Uncertain about your ethical views? This tool helps you allocate resources across different causes based on your moral credences—the probabilities you assign to different ethical perspectives.',
    startButton: 'Start Quiz →',
    previewLabel: "You'll be asked about:",
  },
  Uk = { back: '← Back', continue: 'Continue →', backToQuiz: '← Back to Quiz' },
  qk = { modeToggle: { pickOne: 'Pick One', customMix: 'Custom Mix' } },
  Hk = {
    heading: 'Recommended Allocations',
    prototypeDisclaimer:
      'This version is a prototype. The funds, underlying data, and calculations in this version are placeholders meant to illustrate the type of behavior you can expect from the tool. All of these will change in future versions.',
    budgetLabel: 'Total Budget',
    budgetInfo:
      'Future diminishing returns calculations will change depending on total money spent, not in this prototype',
    feedbackCard: `**Share your feedback:** Please share any thoughts, however brief, in [this form](https://rethinkpriorities.qualtrics.com/jfe/form/SV_9mJlFv7Tch8qMMC) or by email to {{EMAIL}}. If you’d like to talk to Marcus A. Davis (cofounder) in San Francisco you can [book a coffee chat with him using this link](https://calendar.app.google/rS74siwccp8mScvR7) for Thursday February 5th or 13th-15th. You can also [book an online call](https://calendly.com/hayley-clatterbuck/30min) with Hayley Clatterbuck. You can also help us by clicking the share button above, it will save the results to a database we can read (and copy a link to your clipboard that will take you back to these results).

**Future iterations will include:**
- A usable version ready in early March 2026, including the GiveWell Top Charities Fund, EA Animal Welfare Fund, Longview Philanthropy Fund, and others
- Detailed cost-effectiveness estimates for included funds
- Detailed explanations of all calculations that account for diminishing returns
- Different methods for aggregating your inputs into recommended allocations
- A power user version that is more freely configurable 
- A fund, guided by the most recent research and funding insights, that distributes across cause areas  
- Potentially: an LLM interface that helps you interpret the calculations and results.



**Sign up** [**here**](https://mailchi.mp/4da0acddedce/rethink-priorities-donor-compass) if you'd like to get an email when the next version of this tool is ready.`,
    feedbackEmail: ['carmen', 'rethinkpriorities', 'org'],
    modifiedIndicator: '(modified)',
    adjustCredencesHeading: 'Adjust Your Credences',
    resetAllButton: 'Reset All',
    calculationSelectTooltip:
      'There are different ways to advise allocations based on your inputs. The next version of the tool will let you compare different methods and explain clearly what is happening behind the scenes for each of these options. The current calculations are placeholders.',
    methods: {
      moralMarketplace: {
        icon: 'shopping-cart',
        title: 'Moral Marketplace',
        subtitle: '25,600 worldview parliament',
        footerLabel: null,
        footerText: 'Budget allocation across all worldview combinations',
      },
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
  Qk = {
    modifiedBadge: 'modified',
    sliderNote: 'Sliders auto-balance to 100%',
    resetButton: 'Reset',
  },
  Kk = { lockTooltip: 'Lock slider', unlockTooltip: 'Unlock slider' },
  Gk = {
    title: 'Your Credences',
    tooltip:
      "These questions don't have obvious right answers, so we're asking for your credences—how much you believe in each possible answer. You can select multiple options and split your belief between them. If you're certain about one answer, give it 100%. If you're split, you might put 80% on one and 20% on another, or 50/50 if you're truly torn.",
  },
  Yk = {
    heading: 'Recommended Allocations',
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
  Xk = {
    title: 'Switch Worldview',
    description:
      'Each worldview stores a separate set of quiz answers. Select a worldview to view or edit.',
    emptyLabel: '(empty)',
    currentLabel: '(current)',
    defaultName: 'Worldview',
  },
  Jk = {
    heading: 'Your Worldviews',
    subtitle:
      'Define different perspectives, then see how they combine into Recommended Allocations.',
    marketplaceButton: 'View Recommended Allocations',
    marketplaceHint: 'Complete at least 2 worldviews to unlock',
    addWorldview: 'Add another worldview',
    backButton: '← Back to Hub',
  },
  oe = {
    disclaimer: Vk,
    welcome: $k,
    navigation: Uk,
    questionScreen: qk,
    results: Hk,
    editPanel: Qk,
    sliders: Kk,
    credences: Gk,
    marketplace: Yk,
    worldviewModal: Xk,
    hub: Jk,
  };
function Zk() {
  var p;
  const { goToStep: n, isAdvancedMode: i } = mn(),
    {
      email: l,
      copied: s,
      handleEmailClick: a,
    } = Eu((p = oe.disclaimer) == null ? void 0 : p.email),
    u = () => {
      n(i ? 'hub' : 'welcome');
    },
    d = bu(oe.disclaimer.content, l, s);
  return v.jsxs('div', {
    className: 'screen',
    children: [
      v.jsx(Bn, {}),
      v.jsx('main', {
        className: 'screen-main',
        children: v.jsxs('div', {
          className: go.container,
          children: [
            v.jsx('h1', { className: go.heading, children: oe.disclaimer.heading }),
            v.jsx('div', {
              className: go.content,
              children: v.jsx(Tr, { components: { a: Nu(a, go.emailCopy) }, children: d }),
            }),
            v.jsx('button', {
              onClick: u,
              className: 'btn btn-primary',
              children: oe.disclaimer.continueButton,
            }),
          ],
        }),
      }),
    ],
  });
}
const ex = {
  paw: eg,
  hourglass: X0,
  'bar-chart': $0,
  microscope: Z0,
  'heart-pulse': Y0,
  banknote: B0,
  bird: W0,
  shell: ig,
  clock: H0,
  dice: Q0,
  'alert-triangle': sg,
};
function ph({ name: n, size: i = 16, className: l = '' }) {
  const s = ex[n] || vp;
  return v.jsx(s, { size: i, className: l });
}
const tx = '_container_1eq83_3',
  nx = '_heading_1eq83_8',
  rx = '_headingEmphasis_1eq83_17',
  ix = '_intro_1eq83_22',
  lx = '_infoBox_1eq83_30',
  ox = '_infoBoxLabel_1eq83_38',
  sx = '_infoBoxGrid_1eq83_45',
  ax = '_infoBoxItem_1eq83_52',
  ur = {
    container: tx,
    heading: nx,
    headingEmphasis: rx,
    intro: ix,
    infoBox: lx,
    infoBoxLabel: ox,
    infoBoxGrid: sx,
    infoBoxItem: ax,
  };
function ux() {
  const { questionsConfig: n, startQuiz: i } = mn(),
    l = n.filter((s) => s.type !== tt.INTERMISSION);
  return v.jsxs('div', {
    className: 'screen',
    children: [
      v.jsx(Bn, { subtitle: oe.welcome.timeEstimate }),
      v.jsx('main', {
        className: 'screen-main',
        children: v.jsxs('div', {
          className: ur.container,
          children: [
            v.jsxs('h1', {
              className: ur.heading,
              children: [
                oe.welcome.headingLine1,
                v.jsx('br', {}),
                v.jsx('span', { className: ur.headingEmphasis, children: oe.welcome.headingLine2 }),
              ],
            }),
            v.jsx('p', { className: ur.intro, children: oe.welcome.intro }),
            v.jsx('button', {
              onClick: i,
              className: 'btn btn-primary',
              children: oe.welcome.startButton,
            }),
            v.jsxs('div', {
              className: ur.infoBox,
              children: [
                v.jsx('div', { className: ur.infoBoxLabel, children: oe.welcome.previewLabel }),
                v.jsx('div', {
                  className: ur.infoBoxGrid,
                  children: l.map((s) =>
                    v.jsxs(
                      'div',
                      {
                        className: ur.infoBoxItem,
                        children: [v.jsx(ph, { name: s.icon, size: 16 }), ' ', s.previewText],
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
const cx = '_overlay_3gvjz_1',
  dx = '_modal_3gvjz_12',
  fx = '_title_3gvjz_21',
  px = '_buttons_3gvjz_35',
  hx = '_button_3gvjz_35',
  mx = '_nameSection_3gvjz_50',
  gx = '_nameLabel_3gvjz_54',
  yx = '_nameInput_3gvjz_61',
  Mn = {
    overlay: cx,
    modal: dx,
    title: fx,
    buttons: px,
    button: hx,
    nameSection: mx,
    nameLabel: gx,
    nameInput: yx,
  };
function vx({ worldviewId: n, worldviewName: i, onEditAnswers: l, onClose: s }) {
  const { setWorldviewName: a } = mn(),
    [u, d] = W.useState(i),
    p = (g) => {
      d(g.target.value);
    },
    m = () => {
      u.trim() && u !== i && a(n, u.trim());
    },
    h = (g) => {
      g.key === 'Enter' && g.target.blur();
    };
  return v.jsx('div', {
    className: Mn.overlay,
    onClick: s,
    children: v.jsxs('div', {
      className: Mn.modal,
      onClick: (g) => g.stopPropagation(),
      children: [
        v.jsx('h2', { className: Mn.title, children: 'Edit Worldview' }),
        v.jsxs('div', {
          className: Mn.nameSection,
          children: [
            v.jsx('label', { className: Mn.nameLabel, children: 'Name' }),
            v.jsx('input', {
              type: 'text',
              value: u,
              onChange: p,
              onBlur: m,
              onKeyDown: h,
              className: Mn.nameInput,
              placeholder: 'Enter worldview name',
            }),
          ],
        }),
        v.jsxs('div', {
          className: Mn.buttons,
          children: [
            v.jsx('button', {
              onClick: l,
              className: `btn btn-primary ${Mn.button}`,
              children: 'Edit Answers',
            }),
            v.jsx('button', {
              onClick: s,
              className: `btn btn-secondary ${Mn.button}`,
              children: 'Cancel',
            }),
          ],
        }),
      ],
    }),
  });
}
function wx(n) {
  const i = document.createElement('textarea');
  ((i.value = n),
    document.body.appendChild(i),
    i.select(),
    document.execCommand('copy'),
    document.body.removeChild(i));
}
function hh({
  worldviews: n,
  activeWorldviewId: i,
  selectedCalculations: l,
  worldviewNames: s,
  marketplaceBudget: a,
}) {
  const [u, d] = W.useState(!1),
    [p, m] = W.useState(!1),
    [h, g] = W.useState(null),
    w = W.useCallback(async () => {
      var N;
      g(null);
      const x = {};
      for (const [O, L] of Object.entries(n)) {
        const D = {};
        for (const [z, ee] of Object.entries(L.questions))
          D[z] = {
            credences: ee.credences,
            inputMode: ee.inputMode,
            lockedKeys: ee.lockedKeys,
            originalCredences: ee.originalCredences,
          };
        x[O] = { questions: D, completed: L.completed || !1 };
      }
      m(!0);
      const T = A0(x, i, { selectedCalculations: l, worldviewNames: s, marketplaceBudget: a }).then(
        ({ url: O }) => O
      );
      try {
        if ((N = navigator.clipboard) != null && N.write && typeof ClipboardItem < 'u') {
          const O = T.then((L) => new Blob([L], { type: 'text/plain' }));
          await navigator.clipboard.write([new ClipboardItem({ 'text/plain': O })]);
        } else {
          const O = await T;
          try {
            await navigator.clipboard.writeText(O);
          } catch {
            wx(O);
          }
        }
        (d(!0), window.setTimeout(() => d(!1), 2e3));
      } catch (O) {
        (g(O.message || 'Failed to create share link'), window.setTimeout(() => g(null), 5e3));
      } finally {
        m(!1);
      }
    }, [n, i, l, s, a]);
  return { copied: u, loading: p, error: h, handleShare: w };
}
const kx = '_container_iqh3p_3',
  xx = '_heading_iqh3p_9',
  Sx = '_subtitle_iqh3p_17',
  _x = '_alert_iqh3p_26',
  Cx = '_slotsGrid_iqh3p_53',
  Ex = '_slotCard_iqh3p_69',
  bx = '_slotCardEmpty_iqh3p_90',
  Nx = '_slotCardFilled_iqh3p_94',
  Ix = '_slotNumber_iqh3p_104',
  Tx = '_slotName_iqh3p_112',
  jx = '_slotStatus_iqh3p_117',
  Lx = '_slotStatusEmpty_iqh3p_123',
  Px = '_slotStatusFilled_iqh3p_127',
  Ox = '_slotCheckmark_iqh3p_132',
  Rx = '_slotCardAdd_iqh3p_139',
  Mx = '_addIcon_iqh3p_152',
  Ax = '_addLabel_iqh3p_156',
  Dx = '_marketplaceSection_iqh3p_163',
  zx = '_marketplaceButton_iqh3p_172',
  Fx = '_marketplaceHint_iqh3p_183',
  et = {
    container: kx,
    heading: xx,
    subtitle: Sx,
    alert: _x,
    slotsGrid: Cx,
    slotCard: Ex,
    slotCardEmpty: bx,
    slotCardFilled: Nx,
    slotNumber: Ix,
    slotName: Tx,
    slotStatus: jx,
    slotStatusEmpty: Lx,
    slotStatusFilled: Px,
    slotCheckmark: Ox,
    slotCardAdd: Rx,
    addIcon: Mx,
    addLabel: Ax,
    marketplaceSection: Dx,
    marketplaceButton: zx,
    marketplaceHint: Fx,
  };
function Bx() {
  var ue, se, fe, Z, B, ge;
  const {
      worldviewIds: n,
      worldviewNames: i,
      completedMap: l,
      switchWorldview: s,
      startQuiz: a,
      goToStep: u,
      justCompletedWorldview: d,
      clearJustCompletedWorldview: p,
      worldviews: m,
      activeWorldviewId: h,
      selectedCalculations: g,
      marketplaceBudget: w,
      canAddWorldview: x,
      addWorldview: k,
    } = mn(),
    [T, N] = W.useState(null);
  hh({
    worldviews: m,
    activeWorldviewId: h,
    selectedCalculations: g,
    worldviewNames: i,
    marketplaceBudget: w,
  });
  const O = !!d,
    L = d ? `${i[d] || `Worldview ${d}`} completed!` : '';
  W.useEffect(() => {
    if (d) {
      const U = setTimeout(() => p(), 3e3);
      return () => clearTimeout(U);
    }
  }, [d, p]);
  const z = n.filter((U) => l[U]).length >= 2,
    ee = (U) => {
      l[U] ? N(U) : (s(U), a());
    },
    te = () => {
      (T && (s(T), a()), N(null));
    },
    A = () => {
      N(null);
    },
    $ = () => {
      u('marketplace');
    };
  return v.jsxs('div', {
    className: 'screen',
    children: [
      v.jsx(Bn, {}),
      O && v.jsx('div', { className: et.alert, children: L }),
      v.jsx('main', {
        className: 'screen-main',
        children: v.jsxs('div', {
          className: et.container,
          children: [
            v.jsx('h1', {
              className: et.heading,
              children: (ue = oe.hub) == null ? void 0 : ue.heading,
            }),
            v.jsx('p', {
              className: et.subtitle,
              children: (se = oe.hub) == null ? void 0 : se.subtitle,
            }),
            v.jsxs('div', {
              className: et.slotsGrid,
              children: [
                n.map((U) => {
                  const q = l[U],
                    ye = i[U] || `Worldview ${U}`;
                  return v.jsxs(
                    'div',
                    {
                      className: `${et.slotCard} ${q ? et.slotCardFilled : et.slotCardEmpty}`,
                      onClick: () => ee(U),
                      role: 'button',
                      tabIndex: 0,
                      onKeyDown: (pe) => {
                        (pe.key === 'Enter' || pe.key === ' ') && ee(U);
                      },
                      children: [
                        v.jsxs('span', { className: et.slotNumber, children: ['Slot ', U] }),
                        v.jsx('span', { className: et.slotName, children: ye }),
                        q
                          ? v.jsxs(v.Fragment, {
                              children: [
                                v.jsx('span', { className: et.slotCheckmark, children: '✓' }),
                                v.jsx('span', {
                                  className: `${et.slotStatus} ${et.slotStatusFilled}`,
                                  children: 'Click to edit',
                                }),
                              ],
                            })
                          : v.jsx('span', {
                              className: `${et.slotStatus} ${et.slotStatusEmpty}`,
                              children: 'Click to define',
                            }),
                      ],
                    },
                    U
                  );
                }),
                x &&
                  v.jsxs('div', {
                    className: `${et.slotCard} ${et.slotCardAdd}`,
                    onClick: k,
                    role: 'button',
                    tabIndex: 0,
                    onKeyDown: (U) => {
                      (U.key === 'Enter' || U.key === ' ') && k();
                    },
                    children: [
                      v.jsx(ng, { size: 32, className: et.addIcon }),
                      v.jsx('span', {
                        className: et.addLabel,
                        children: (fe = oe.hub) == null ? void 0 : fe.addWorldview,
                      }),
                    ],
                  }),
              ],
            }),
            v.jsxs('div', {
              className: et.marketplaceSection,
              children: [
                v.jsx('button', {
                  className: `btn btn-primary ${et.marketplaceButton}`,
                  onClick: $,
                  disabled: !z,
                  children: (Z = oe.hub) == null ? void 0 : Z.marketplaceButton,
                }),
                !z &&
                  v.jsx('p', {
                    className: et.marketplaceHint,
                    children: (B = oe.hub) == null ? void 0 : B.marketplaceHint,
                  }),
                (ge = hn.ui) == null ? void 0 : ge.shareResults,
              ],
            }),
          ],
        }),
      }),
      T &&
        v.jsx(vx, {
          worldviewId: T,
          worldviewName: i[T] || `Worldview ${T}`,
          onEditAnswers: te,
          onClose: A,
        }),
    ],
  });
}
const ai = ({ percentage: n }) =>
    v.jsx('div', {
      className: 'progress-container',
      children: v.jsx('div', {
        className: 'progress-track',
        children: v.jsx('div', { className: 'progress-fill', style: { width: `${n}%` } }),
      }),
    }),
  Wx = '_modeToggle_yn8i0_3',
  Vx = '_button_yn8i0_10',
  $x = '_options_yn8i0_23',
  Ux = '_active_yn8i0_29',
  qx = '_sliders_yn8i0_35',
  Er = { modeToggle: Wx, button: Vx, options: $x, active: Ux, sliders: qx },
  Hx = ({ mode: n, setMode: i }) =>
    v.jsxs('div', {
      className: Er.modeToggle,
      children: [
        v.jsx('button', {
          onClick: () => i('options'),
          className: `${Er.button} ${Er.options} ${n === 'options' ? Er.active : ''}`,
          children: oe.questionScreen.modeToggle.pickOne,
        }),
        v.jsxs('button', {
          onClick: () => i('sliders'),
          className: `${Er.button} ${Er.sliders} ${n === 'sliders' ? Er.active : ''}`,
          children: [v.jsx(lg, { size: 14 }), oe.questionScreen.modeToggle.customMix],
        }),
      ],
    }),
  Qx = '_wrapper_h2uk9_1',
  Kx = '_trigger_h2uk9_7',
  Gx = '_popover_h2uk9_27',
  Yx = '_popoverVisible_h2uk9_62',
  yo = { wrapper: Qx, trigger: Kx, popover: Gx, popoverVisible: Yx };
function Fn({ content: n, size: i = 14 }) {
  const [l, s] = W.useState(!1),
    [a, u] = W.useState({ top: 0, left: 0 }),
    d = W.useRef(null),
    p = W.useRef(null),
    m = W.useRef(null),
    h = W.useCallback(() => {
      var D;
      if (!d.current) return;
      const x = d.current.getBoundingClientRect(),
        k = ((D = p.current) == null ? void 0 : D.offsetWidth) || 400,
        T = window.innerWidth,
        N = 16;
      let O = x.left + x.width / 2 - k / 2;
      const L = x.bottom + 8;
      (O < N ? (O = N) : O + k > T - N && (O = T - k - N), u({ top: L, left: O }));
    }, []);
  (W.useEffect(() => {
    if (!l) return;
    const x = (k) => {
      m.current && !m.current.contains(k.target) && s(!1);
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
    W.useEffect(() => {
      l && h();
    }, [l, h]));
  const g = W.useCallback(() => {
      h();
    }, [h]),
    w = W.useCallback(
      (x) => {
        (x.preventDefault(), x.stopPropagation(), h(), s((k) => !k));
      },
      [h]
    );
  return n
    ? v.jsxs('span', {
        ref: m,
        className: yo.wrapper,
        children: [
          v.jsx('button', {
            ref: d,
            type: 'button',
            className: yo.trigger,
            onMouseEnter: g,
            onTouchStart: w,
            'aria-label': 'More information',
            children: v.jsx(J0, { size: i }),
          }),
          v.jsx('span', {
            ref: p,
            className: `${yo.popover} ${l ? yo.popoverVisible : ''}`,
            style: { top: a.top, left: a.left },
            children: v.jsx(Tr, {
              components: {
                a: ({ href: x, children: k }) =>
                  v.jsx('a', {
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
const Xx = '_optionButton_z7tsl_3',
  Jx = '_selected_z7tsl_20',
  Zx = '_content_z7tsl_36',
  eS = '_textContent_z7tsl_42',
  tS = '_label_z7tsl_46',
  nS = '_description_z7tsl_58',
  rS = '_checkmark_z7tsl_64',
  An = {
    optionButton: Xx,
    default: '_default_z7tsl_15',
    selected: Jx,
    content: Zx,
    textContent: eS,
    label: tS,
    description: nS,
    checkmark: rS,
  };
function iS({
  label: n,
  description: i,
  info: l,
  optionKey: s,
  credences: a,
  setCredences: u,
  color: d,
  setInputMode: p,
  setLockedKeys: m,
}) {
  const h = a[s] === 100,
    g = () => {
      const w = Object.fromEntries(Object.keys(a).map((x) => [x, x === s ? 100 : 0]));
      (u(w), p('options'), m && m([]));
    };
  return v.jsx('button', {
    onClick: g,
    className: `${An.optionButton} ${h ? An.selected : An.default}`,
    style: { '--option-color': d },
    children: v.jsxs('div', {
      className: An.content,
      children: [
        v.jsxs('div', {
          className: An.textContent,
          children: [
            v.jsxs('div', {
              className: `${An.label} ${h ? An.selected : ''}`,
              children: [n, v.jsx(Fn, { content: l })],
            }),
            v.jsx('div', { className: An.description, children: i }),
          ],
        }),
        h && v.jsx('div', { className: An.checkmark, children: '✓' }),
      ],
    }),
  });
}
function mh({ credences: n, isLocked: i, lockedKeys: l, onChange: s }) {
  const [a, u] = W.useState(null),
    [d, p] = W.useState(!1),
    m = W.useCallback(() => {
      i || (p(!0), u({ ...n }));
    }, [i, n]),
    h = W.useCallback(
      (w) => {
        if (i || !d) return;
        p(!1);
        const x = parseFloat(w.target.value);
        (s(x, a, !0, l), u(null));
      },
      [i, d, a, l, s]
    ),
    g = W.useCallback(
      (w) => {
        if (i) return;
        const x = parseFloat(w.target.value);
        s(x, a, !1, l);
      },
      [i, a, l, s]
    );
  return {
    isDragging: d,
    dragHandlers: {
      onChange: g,
      onMouseDown: m,
      onMouseUp: h,
      onMouseLeave: h,
      onTouchStart: m,
      onTouchEnd: h,
    },
  };
}
function gh({ sliderKey: n, lockedKeys: i = [], credences: l }) {
  return W.useMemo(() => {
    var x;
    const s = Array.isArray(i) ? i : i ? [i] : [],
      a = s.includes(n),
      u = s.length > 0 && !a,
      d = u ? s.reduce((k, T) => k + (l[T] || 0), 0) : 0,
      p = u ? 100 - d : 100,
      m = u ? `calc(${p}% + ${(50 - p) * 0.16}px)` : null,
      w = Object.keys(l).length - s.length > 2;
    return {
      isLocked: a,
      hasLockedSibling: u,
      lockedValue: d,
      maxAllowed: p,
      thumbOffset: m,
      canLockMore: w,
      featureEnabled: ((x = hn.ui) == null ? void 0 : x.sliderLock) === !0,
    };
  }, [n, i, l]);
}
const lS = '_credenceSlider_1cwrq_4',
  oS = '_header_1cwrq_8',
  sS = '_label_1cwrq_15',
  aS = '_description_1cwrq_22',
  uS = '_value_1cwrq_28',
  cS = '_sliderRow_1cwrq_35',
  dS = '_sliderContainer_1cwrq_41',
  fS = '_lockLimit_1cwrq_46',
  pS = '_lockButton_1cwrq_55',
  hS = '_locked_1cwrq_73',
  mS = '_lockDisabled_1cwrq_78',
  gS = '_compactSlider_1cwrq_100',
  yS = '_compactSelection_1cwrq_186',
  vS = '_selected_1cwrq_204',
  wS = '_selectionLabel_1cwrq_209',
  kS = '_selectionIndicator_1cwrq_220',
  Ke = {
    credenceSlider: lS,
    header: oS,
    label: sS,
    description: aS,
    value: uS,
    sliderRow: cS,
    sliderContainer: dS,
    lockLimit: fS,
    lockButton: pS,
    locked: hS,
    lockDisabled: mS,
    compactSlider: gS,
    compactSelection: yS,
    selected: vS,
    selectionLabel: wS,
    selectionIndicator: kS,
  };
function yh({
  label: n,
  description: i,
  info: l,
  value: s,
  onChange: a,
  color: u,
  credences: d,
  sliderKey: p,
  lockedKeys: m = [],
  setLockedKeys: h,
}) {
  const {
      isLocked: g,
      hasLockedSibling: w,
      thumbOffset: x,
      canLockMore: k,
      featureEnabled: T,
    } = gh({ sliderKey: p, lockedKeys: m, credences: d }),
    { isDragging: N, dragHandlers: O } = mh({
      credences: d,
      isLocked: g,
      lockedKeys: m,
      onChange: a,
    }),
    L = () => {
      T && (g ? h(m.filter((z) => z !== p)) : k && h([...m, p]));
    },
    D = w
      ? `linear-gradient(to right, ${u} 0%, ${u} ${s}%, rgba(255,255,255,0.15) ${s}%, rgba(255,255,255,0.15) ${x}, rgba(255,255,255,0.08) ${x}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${u} 0%, ${u} ${s}%, rgba(255,255,255,0.15) ${s}%, rgba(255,255,255,0.15) 100%)`;
  return v.jsxs('div', {
    className: Ke.credenceSlider,
    children: [
      v.jsxs('div', {
        className: Ke.header,
        children: [
          v.jsxs('div', {
            children: [
              v.jsxs('div', { className: Ke.label, children: [n, v.jsx(Fn, { content: l })] }),
              v.jsx('div', { className: Ke.description, children: i }),
            ],
          }),
          v.jsxs('div', {
            className: Ke.value,
            style: { color: u },
            children: [Math.round(s), '%'],
          }),
        ],
      }),
      v.jsxs('div', {
        className: Ke.sliderRow,
        children: [
          v.jsxs('div', {
            className: Ke.sliderContainer,
            children: [
              v.jsx('input', {
                type: 'range',
                min: '0',
                max: '100',
                step: 'any',
                value: s,
                ...O,
                'data-dragging': N,
                disabled: g,
                style: { background: D, cursor: g ? 'not-allowed' : 'pointer' },
              }),
              w && v.jsx('div', { className: Ke.lockLimit, style: { left: x } }),
            ],
          }),
          T &&
            v.jsx('button', {
              className: `${Ke.lockButton} ${g ? Ke.locked : ''} ${!g && !k ? Ke.lockDisabled : ''}`,
              onClick: L,
              title: g ? oe.sliders.unlockTooltip : oe.sliders.lockTooltip,
              type: 'button',
              disabled: !g && !k,
              children: v.jsx(wp, { size: 16 }),
            }),
        ],
      }),
    ],
  });
}
const xS = '_container_g2rou_3',
  SS = '_categoryLabel_g2rou_8',
  _S = '_heading_g2rou_16',
  CS = '_context_g2rou_23',
  ES = '_instructions_g2rou_52',
  bS = '_twoColumnLayout_g2rou_60',
  NS = '_presetCard_g2rou_66',
  IS = '_sliderCard_g2rou_67',
  TS = '_cardTitle_g2rou_74',
  jS = '_presetOption_g2rou_84',
  LS = '_selected_g2rou_101',
  PS = '_presetContent_g2rou_111',
  OS = '_presetTextContent_g2rou_117',
  RS = '_presetName_g2rou_121',
  MS = '_presetDescription_g2rou_133',
  AS = '_presetCheckmark_g2rou_139',
  DS = '_customSeparator_g2rou_154',
  zS = '_customSeparatorText_g2rou_169',
  FS = '_sliderList_g2rou_177',
  BS = '_sliderDisabled_g2rou_183',
  WS = '_sliderReadOnlyNote_g2rou_191',
  VS = '_buttonRow_g2rou_200',
  ze = {
    container: xS,
    categoryLabel: SS,
    heading: _S,
    context: CS,
    instructions: ES,
    twoColumnLayout: bS,
    presetCard: NS,
    sliderCard: IS,
    cardTitle: TS,
    presetOption: jS,
    selected: LS,
    presetContent: PS,
    presetTextContent: OS,
    presetName: RS,
    presetDescription: MS,
    presetCheckmark: AS,
    customSeparator: DS,
    customSeparatorText: zS,
    sliderList: FS,
    sliderDisabled: BS,
    sliderReadOnlyNote: WS,
    buttonRow: VS,
  },
  br = 'custom',
  $S = 300,
  Aa = 8;
function US() {
  const {
      currentQuestion: n,
      stateMap: i,
      questionNumber: l,
      progressPercentage: s,
      goBack: a,
      goForward: u,
    } = mn(),
    d = n ? i[n.id] : null,
    [p, m] = W.useState(null),
    h = W.useRef(null),
    g = W.useRef(null);
  if (
    (W.useEffect(
      () => () => {
        (h.current && clearTimeout(h.current), g.current && clearTimeout(g.current));
      },
      []
    ),
    !n || !d)
  )
    return null;
  const {
      credences: w,
      setCredences: x,
      lockedKeys: k,
      setLockedKeys: T,
      selectedPreset: N,
      setSelectedPreset: O,
    } = d,
    L = p || w,
    D = n.presets || [],
    z = N && N !== br,
    ee = ($) => {
      (h.current && clearTimeout(h.current), g.current && clearTimeout(g.current));
      const ue = { ...w },
        se = $S / Aa;
      let fe = 0;
      const Z = () => {
        fe++;
        const B = fe / Aa,
          ge = 1 - Math.pow(1 - B, 3),
          U = {};
        for (const q of Object.keys($)) {
          const ye = ue[q] || 0,
            pe = $[q] || 0;
          U[q] = Math.round(ye + (pe - ye) * ge);
        }
        fe < Aa
          ? (m(U), (h.current = setTimeout(Z, se)))
          : (m({ ...$ }), x({ ...$ }), (g.current = setTimeout(() => m(null), 50)));
      };
      (m(ue), (h.current = setTimeout(Z, se)));
    },
    te = ($) => {
      if ((O($), $ !== br)) {
        const ue = D.find((se) => se.id === $);
        ue && ee(ue.credences);
      }
      T && T([]);
    },
    A = ($, ue, se, fe, Z) => {
      if (z) return;
      N !== br && O(br);
      const ge = ou($, ue, se || p || w, se, Z),
        U = fe ? su(ge) : ge;
      (m(U),
        g.current && clearTimeout(g.current),
        fe
          ? (x(U), (g.current = setTimeout(() => m(null), 50)))
          : (g.current = setTimeout(() => {
              x(U);
            }, 100)));
    };
  return v.jsxs('div', {
    className: 'screen',
    children: [
      v.jsx(Bn, { subtitle: l }),
      v.jsx(ai, { percentage: s }),
      v.jsx('main', {
        className: 'screen-main',
        children: v.jsxs('div', {
          className: ze.container,
          children: [
            v.jsx('div', {
              className: ze.categoryLabel,
              style: { color: tu },
              children: n.categoryLabel,
            }),
            v.jsxs('h2', {
              className: ze.heading,
              children: [n.heading, v.jsx(Fn, { content: n.info })],
            }),
            n.context &&
              v.jsx('div', { className: ze.context, children: v.jsx(Tr, { children: n.context }) }),
            v.jsx('p', {
              className: ze.instructions,
              children:
                n.instructionsPreset ||
                'Select a preset or choose Custom to set your own credences.',
            }),
            v.jsxs('div', {
              className: ze.twoColumnLayout,
              children: [
                v.jsxs('div', {
                  className: ze.presetCard,
                  children: [
                    v.jsx('div', { className: ze.cardTitle, children: 'Presets' }),
                    D.map(($) =>
                      v.jsx(
                        'button',
                        {
                          onClick: () => te($.id),
                          className: `${ze.presetOption} ${N === $.id ? ze.selected : ''}`,
                          children: v.jsxs('div', {
                            className: ze.presetContent,
                            children: [
                              v.jsxs('div', {
                                className: ze.presetTextContent,
                                children: [
                                  v.jsx('div', { className: ze.presetName, children: $.name }),
                                  v.jsx('div', {
                                    className: ze.presetDescription,
                                    children: $.description,
                                  }),
                                ],
                              }),
                              N === $.id &&
                                v.jsx('div', { className: ze.presetCheckmark, children: '✓' }),
                            ],
                          }),
                        },
                        $.id
                      )
                    ),
                    v.jsx('div', {
                      className: ze.customSeparator,
                      children: v.jsx('span', {
                        className: ze.customSeparatorText,
                        children: 'or',
                      }),
                    }),
                    v.jsx('button', {
                      onClick: () => te(br),
                      className: `${ze.presetOption} ${N === br ? ze.selected : ''}`,
                      children: v.jsxs('div', {
                        className: ze.presetContent,
                        children: [
                          v.jsxs('div', {
                            className: ze.presetTextContent,
                            children: [
                              v.jsx('div', { className: ze.presetName, children: 'Custom' }),
                              v.jsx('div', {
                                className: ze.presetDescription,
                                children: 'Set your own credences using the sliders',
                              }),
                            ],
                          }),
                          N === br &&
                            v.jsx('div', { className: ze.presetCheckmark, children: '✓' }),
                        ],
                      }),
                    }),
                  ],
                }),
                v.jsxs('div', {
                  className: ze.sliderCard,
                  children: [
                    v.jsxs('div', {
                      className: ze.cardTitle,
                      children: [oe.credences.title, v.jsx(Fn, { content: oe.credences.tooltip })],
                    }),
                    v.jsx('div', {
                      className: `${ze.sliderList} ${z ? ze.sliderDisabled : ''}`,
                      children: n.options.map(($) =>
                        v.jsx(
                          yh,
                          {
                            label: $.label,
                            description: $.description,
                            info: $.info,
                            value: L[$.key],
                            onChange: (ue, se, fe, Z) => {
                              A($.key, ue, se, fe, Z);
                            },
                            color: $.color,
                            credences: L,
                            sliderKey: $.key,
                            lockedKeys: k,
                            setLockedKeys: z ? () => {} : T,
                          },
                          $.key
                        )
                      ),
                    }),
                    z &&
                      v.jsx('div', {
                        className: ze.sliderReadOnlyNote,
                        children: 'Select "Custom" to adjust sliders manually',
                      }),
                  ],
                }),
              ],
            }),
            v.jsxs('div', {
              className: ze.buttonRow,
              children: [
                v.jsx('button', {
                  onClick: a,
                  className: 'btn btn-secondary',
                  children: oe.navigation.back,
                }),
                v.jsx('button', {
                  onClick: u,
                  className: 'btn btn-primary',
                  children: oe.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const qS = '_container_kq5as_3',
  HS = '_categoryLabel_kq5as_8',
  QS = '_heading_kq5as_16',
  KS = '_context_kq5as_23',
  GS = '_instructions_kq5as_52',
  YS = '_credencesHeader_kq5as_59',
  XS = '_buttonRow_kq5as_68',
  Nr = {
    container: qS,
    categoryLabel: HS,
    heading: QS,
    context: KS,
    instructions: GS,
    credencesHeader: YS,
    buttonRow: XS,
  };
function JS(n, i, l) {
  return n === tt.SELECTION ? 'options' : n === tt.CREDENCE ? 'sliders' : i;
}
function ZS() {
  const {
    currentQuestion: n,
    stateMap: i,
    questionNumber: l,
    progressPercentage: s,
    goBack: a,
    goForward: u,
  } = mn();
  if (!n) return null;
  if (n.type === tt.PRESET) return v.jsx(US, {});
  const d = i[n.id];
  if (!d) return null;
  const {
      credences: p,
      setCredences: m,
      inputMode: h,
      setInputMode: g,
      lockedKeys: w,
      setLockedKeys: x,
    } = d,
    k = n.type || tt.DEFAULT,
    T = k === tt.DEFAULT,
    N = JS(k, h),
    L =
      k === tt.SELECTION
        ? n.instructionsSelection || 'Choose the option that best represents your position.'
        : N === 'options'
          ? n.instructionsOptions
          : n.instructionsSliders;
  return v.jsxs('div', {
    className: 'screen',
    children: [
      v.jsx(Bn, { subtitle: l }),
      v.jsx(ai, { percentage: s }),
      v.jsx('main', {
        className: 'screen-main',
        children: v.jsxs('div', {
          className: Nr.container,
          children: [
            v.jsx('div', {
              className: Nr.categoryLabel,
              style: { color: tu },
              children: n.categoryLabel,
            }),
            v.jsxs('h2', {
              className: Nr.heading,
              children: [n.heading, v.jsx(Fn, { content: n.info })],
            }),
            n.context &&
              v.jsx('div', { className: Nr.context, children: v.jsx(Tr, { children: n.context }) }),
            v.jsx('p', { className: Nr.instructions, children: L }),
            T && v.jsx(Hx, { mode: h, setMode: g }),
            v.jsxs('div', {
              className: 'card',
              children: [
                N === 'sliders' &&
                  k === tt.CREDENCE &&
                  v.jsxs('div', {
                    className: Nr.credencesHeader,
                    children: [oe.credences.title, v.jsx(Fn, { content: oe.credences.tooltip })],
                  }),
                N === 'options'
                  ? n.options.map((D) =>
                      v.jsx(
                        iS,
                        {
                          label: D.label,
                          description: D.description,
                          info: D.info,
                          optionKey: D.key,
                          credences: p,
                          setCredences: m,
                          color: D.color,
                          setInputMode: g,
                          setLockedKeys: x,
                        },
                        D.key
                      )
                    )
                  : n.options.map((D) =>
                      v.jsx(
                        yh,
                        {
                          label: D.label,
                          description: D.description,
                          info: D.info,
                          value: p[D.key],
                          onChange: (z, ee, te, A) => {
                            const $ = ou(D.key, z, p, ee, A);
                            m(te ? su($) : $);
                          },
                          color: D.color,
                          credences: p,
                          sliderKey: D.key,
                          lockedKeys: w,
                          setLockedKeys: x,
                        },
                        D.key
                      )
                    ),
              ],
            }),
            v.jsxs('div', {
              className: Nr.buttonRow,
              children: [
                v.jsx('button', {
                  onClick: a,
                  className: 'btn btn-secondary',
                  children: oe.navigation.back,
                }),
                v.jsx('button', {
                  onClick: u,
                  className: 'btn btn-primary',
                  children: oe.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const e_ = '_container_1aw1l_3',
  t_ = '_categoryLabel_1aw1l_8',
  n_ = '_heading_1aw1l_18',
  r_ = '_context_1aw1l_28',
  i_ = '_sliderCard_1aw1l_52',
  l_ = '_sliderLabels_1aw1l_56',
  o_ = '_sliderLabelLeft_1aw1l_64',
  s_ = '_sliderLabelRight_1aw1l_70',
  a_ = '_sliderContainer_1aw1l_76',
  u_ = '_slider_1aw1l_52',
  c_ = '_valueDisplay_1aw1l_149',
  d_ = '_valueNumber_1aw1l_157',
  f_ = '_buttonRow_1aw1l_163',
  Ht = {
    container: e_,
    categoryLabel: t_,
    heading: n_,
    context: r_,
    sliderCard: i_,
    sliderLabels: l_,
    sliderLabelLeft: o_,
    sliderLabelRight: s_,
    sliderContainer: a_,
    slider: u_,
    valueDisplay: c_,
    valueNumber: d_,
    buttonRow: f_,
  };
function p_() {
  var L;
  const {
    currentQuestion: n,
    stateMap: i,
    questionNumber: l,
    progressPercentage: s,
    goBack: a,
    goForward: u,
  } = mn();
  if (!n) return null;
  const d = i[n.id];
  if (!d) return null;
  const { credences: p, setCredences: m } = d,
    h =
      (p == null ? void 0 : p.value) ??
      ((L = n.ratioConfig) == null ? void 0 : L.defaultValue) ??
      0.5,
    { minLabel: g, maxLabel: w } = n.ratioConfig || {},
    x = (D) => {
      const z = parseFloat(D.target.value);
      m({ value: z });
    },
    k = n.displayConfig || n.ratioConfig,
    T = Dg(h, k),
    N = h_(T, k.scale, k.min, k.max, k.format, k.suffix),
    O = h * 100;
  return v.jsxs('div', {
    className: 'screen',
    children: [
      v.jsx(Bn, { subtitle: l }),
      v.jsx(ai, { percentage: s }),
      v.jsx('main', {
        className: 'screen-main',
        children: v.jsxs('div', {
          className: Ht.container,
          children: [
            v.jsx('div', {
              className: Ht.categoryLabel,
              style: { color: tu },
              children: n.categoryLabel,
            }),
            v.jsxs('h2', {
              className: Ht.heading,
              children: [n.heading, v.jsx(Fn, { content: n.info })],
            }),
            n.context &&
              v.jsx('div', { className: Ht.context, children: v.jsx(Tr, { children: n.context }) }),
            v.jsxs('div', {
              className: `card ${Ht.sliderCard}`,
              children: [
                v.jsxs('div', {
                  className: Ht.sliderLabels,
                  children: [
                    v.jsx('span', { className: Ht.sliderLabelLeft, children: g }),
                    v.jsx('span', { className: Ht.sliderLabelRight, children: w }),
                  ],
                }),
                v.jsx('div', {
                  className: Ht.sliderContainer,
                  children: v.jsx('input', {
                    type: 'range',
                    min: '0',
                    max: '1',
                    step: '0.01',
                    value: h,
                    onChange: x,
                    className: Ht.slider,
                    style: { '--slider-progress': `${O}%` },
                  }),
                }),
                v.jsxs('div', {
                  className: Ht.valueDisplay,
                  children: [
                    'Current value: ',
                    v.jsx('span', { className: Ht.valueNumber, children: N }),
                  ],
                }),
              ],
            }),
            v.jsxs('div', {
              className: Ht.buttonRow,
              children: [
                v.jsx('button', {
                  onClick: a,
                  className: 'btn btn-secondary',
                  children: oe.navigation.back,
                }),
                v.jsx('button', {
                  onClick: u,
                  className: 'btn btn-primary',
                  children: oe.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function h_(n, i, l, s, a, u = '') {
  if (a === 'percentage') return `${(n * 100).toFixed(0)}%${u}`;
  if (a === 'multiplier' || i === 'logarithmic') {
    let d;
    return (
      n >= 1e3
        ? (d = `${(n / 1e3).toFixed(1)}k×`)
        : n >= 100
          ? (d = `${Math.round(n)}×`)
          : n >= 10
            ? (d = `${n.toFixed(1)}×`)
            : n >= 1
              ? (d = `${n.toFixed(1)}×`)
              : (d = `${n.toFixed(2)}×`),
      `${d}${u}`
    );
  }
  return l === 0 && s === 1 ? `${(n * 100).toFixed(0)}%${u}` : `${n.toFixed(2)}${u}`;
}
const m_ = '_causeBar_1pclx_3',
  g_ = '_header_1pclx_7',
  y_ = '_name_1pclx_15',
  v_ = '_dollarAmount_1pclx_19',
  w_ = '_percentage_1pclx_24',
  k_ = '_changeIndicator_1pclx_28',
  x_ = '_up_1pclx_32',
  S_ = '_down_1pclx_36',
  __ = '_barTrack_1pclx_40',
  C_ = '_barOriginal_1pclx_48',
  E_ = '_barFill_1pclx_54',
  b_ = '_barLabel_1pclx_63',
  N_ = '_compact_1pclx_70',
  Qt = {
    causeBar: m_,
    header: g_,
    name: y_,
    dollarAmount: v_,
    percentage: w_,
    changeIndicator: k_,
    up: x_,
    down: S_,
    barTrack: __,
    barOriginal: C_,
    barFill: E_,
    barLabel: b_,
    compact: N_,
  };
function I_(n) {
  if (n >= 1e6) {
    const i = n / 1e6;
    return `$${i % 1 === 0 ? i.toFixed(0) : i.toFixed(1)}M`;
  }
  return `$${n.toLocaleString()}`;
}
function T_(n, i) {
  const l = i * 0.005;
  return Math.round(n / l) * l;
}
const vh = ({
    name: n,
    percentage: i,
    color: l,
    originalPercentage: s = null,
    hasChanged: a = !1,
    simpleMode: u = !1,
    budget: d = null,
  }) => {
    const p = !u && a && s !== null && i !== s,
      m = p && i > s,
      h = d ? I_(T_((i / 100) * d, d)) : null;
    return v.jsxs('div', {
      className: `${Qt.causeBar} ${u ? Qt.compact : ''}`,
      children: [
        v.jsxs('div', {
          className: Qt.header,
          children: [
            v.jsx('span', { className: Qt.name, children: n }),
            h
              ? v.jsx('span', { className: Qt.dollarAmount, children: h })
              : v.jsxs('span', {
                  className: Qt.percentage,
                  style: { color: l },
                  children: [
                    i.toFixed(0),
                    '%',
                    p &&
                      v.jsx('span', {
                        className: `${Qt.changeIndicator} ${m ? Qt.up : Qt.down}`,
                        children: m ? '↑' : '↓',
                      }),
                  ],
                }),
          ],
        }),
        v.jsxs('div', {
          className: Qt.barTrack,
          children: [
            p &&
              v.jsx('div', { className: Qt.barOriginal, style: { width: `${s}%`, background: l } }),
            v.jsx('div', {
              className: Qt.barFill,
              style: { width: `${i}%`, background: l },
              children:
                i > 15 && v.jsxs('span', { className: Qt.barLabel, children: [i.toFixed(0), '%'] }),
            }),
          ],
        }),
      ],
    });
  },
  j_ = { target: og, parliament: V0, handshake: G0, scale: rg };
function L_({ name: n, size: i = 18, className: l = '' }) {
  const s = j_[n] || vp;
  return v.jsx(s, { size: i, className: l });
}
const P_ = '_resultsContainer_13qwl_3',
  O_ = '_inner_13qwl_11',
  R_ = '_resultsHeader_13qwl_16',
  M_ = '_title_13qwl_21',
  A_ = '_modifiedIndicator_13qwl_27',
  D_ = '_prototypeDisclaimer_13qwl_38',
  z_ = '_budgetRow_13qwl_46',
  F_ = '_resultsGrid_13qwl_52',
  B_ = '_comparisonContainer_13qwl_60',
  W_ = '_originalResults_13qwl_67',
  V_ = '_newResults_13qwl_68',
  $_ = '_comparisonDivider_13qwl_103',
  U_ = '_dividerLine_13qwl_112',
  q_ = '_dividerArrow_13qwl_119',
  H_ = '_compactCard_13qwl_132',
  Q_ = '_cardHeader_13qwl_136',
  K_ = '_cardIcon_13qwl_140',
  G_ = '_cardTitle_13qwl_146',
  Y_ = '_resultCard_13qwl_150',
  X_ = '_cardSubtitle_13qwl_182',
  J_ = '_cardFooter_13qwl_188',
  Z_ = '_adjustPanel_13qwl_196',
  e2 = '_adjustHeader_13qwl_204',
  t2 = '_adjustTitle_13qwl_211',
  n2 = '_resetAllButton_13qwl_217',
  r2 = '_panelList_13qwl_234',
  i2 = '_backButtonContainer_13qwl_240',
  l2 = '_calculationSelect_13qwl_286',
  o2 = '_calculationSelectWrapper_13qwl_318',
  s2 = '_calculationSelectContainer_13qwl_331',
  a2 = '_singleResultCard_13qwl_336',
  u2 = '_sideLabel_13qwl_347',
  c2 = '_feedbackCard_13qwl_363',
  d2 = '_emailCopy_13qwl_407',
  Se = {
    resultsContainer: P_,
    inner: O_,
    resultsHeader: R_,
    title: M_,
    modifiedIndicator: A_,
    prototypeDisclaimer: D_,
    budgetRow: z_,
    resultsGrid: F_,
    comparisonContainer: B_,
    originalResults: W_,
    newResults: V_,
    comparisonDivider: $_,
    dividerLine: U_,
    dividerArrow: q_,
    compactCard: H_,
    cardHeader: Q_,
    cardIcon: K_,
    cardTitle: G_,
    resultCard: Y_,
    cardSubtitle: X_,
    cardFooter: J_,
    adjustPanel: Z_,
    adjustHeader: e2,
    adjustTitle: t2,
    resetAllButton: n2,
    panelList: r2,
    backButtonContainer: i2,
    calculationSelect: l2,
    calculationSelectWrapper: o2,
    calculationSelectContainer: s2,
    singleResultCard: a2,
    sideLabel: u2,
    feedbackCard: c2,
    emailCopy: d2,
  };
function wh({
  methodKey: n,
  results: i,
  evs: l = null,
  originalResults: s = null,
  causeEntries: a,
  hasChanged: u = !1,
  simpleMode: d = !1,
  budget: p = null,
}) {
  const m = oe.results.methods[n],
    h = l
      ? `${m.footerLabel} ${a.map(([g, w]) => `${w.name.slice(0, 2)} ${l[g].toFixed(0)}`).join(' · ')}`
      : m.footerText;
  return v.jsxs('div', {
    className: `${Se.resultCard} ${d ? Se.compactCard : ''}`,
    children: [
      v.jsxs('div', {
        className: Se.cardHeader,
        children: [
          v.jsx('div', { className: Se.cardIcon, children: v.jsx(L_, { name: m.icon, size: 18 }) }),
          v.jsxs('div', {
            children: [
              v.jsx('h3', { className: Se.cardTitle, children: m.title }),
              !d && v.jsx('p', { className: Se.cardSubtitle, children: m.subtitle }),
            ],
          }),
        ],
      }),
      a.map(([g, w]) =>
        v.jsx(
          vh,
          {
            name: w.name,
            percentage: i[g],
            originalPercentage: s == null ? void 0 : s[g],
            color: w.color,
            hasChanged: !d && u,
            simpleMode: d,
            budget: p,
          },
          g
        )
      ),
      !d && v.jsx('div', { className: Se.cardFooter, children: h }),
    ],
  });
}
const f2 = '_container_1tjs1_3',
  p2 = '_title_1tjs1_8',
  h2 = '_body_1tjs1_16',
  m2 = '_buttonRow_1tjs1_25',
  vo = { container: f2, title: p2, body: h2, buttonRow: m2 };
function g2() {
  const {
    currentQuestion: n,
    questionNumber: i,
    progressPercentage: l,
    calculationResults: s,
    causesConfig: a,
    goBack: u,
    goForward: d,
    marketplaceBudget: p,
  } = mn();
  if (!n) return null;
  const m = Object.entries(a),
    h = uu();
  return v.jsxs('div', {
    className: 'screen',
    children: [
      v.jsx(Bn, { subtitle: i }),
      v.jsx(ai, { percentage: l }),
      v.jsx('main', {
        className: 'screen-main',
        children: v.jsxs('div', {
          className: vo.container,
          children: [
            v.jsx('h2', { className: vo.title, children: n.title }),
            v.jsx('p', { className: vo.body, children: n.body }),
            v.jsx('div', {
              className: Se.resultsGrid,
              children: h.map((g) =>
                v.jsx(
                  wh,
                  {
                    methodKey: g.key,
                    results: s[g.key],
                    evs: g.hasEvs ? s[g.key].evs : null,
                    causeEntries: m,
                    budget: p,
                  },
                  g.key
                )
              ),
            }),
            v.jsxs('div', {
              className: vo.buttonRow,
              children: [
                v.jsx('button', {
                  onClick: u,
                  className: 'btn btn-secondary',
                  children: oe.navigation.back,
                }),
                v.jsx('button', {
                  onClick: d,
                  className: 'btn btn-primary',
                  children: oe.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function y2({
  label: n,
  value: i,
  onChange: l,
  color: s,
  credences: a,
  sliderKey: u,
  lockedKeys: d = [],
  setLockedKeys: p,
}) {
  const {
      isLocked: m,
      hasLockedSibling: h,
      thumbOffset: g,
      canLockMore: w,
      featureEnabled: x,
    } = gh({ sliderKey: u, lockedKeys: d, credences: a }),
    { isDragging: k, dragHandlers: T } = mh({
      credences: a,
      isLocked: m,
      lockedKeys: d,
      onChange: l,
    }),
    N = () => {
      x && (m ? p(d.filter((L) => L !== u)) : w && p([...d, u]));
    },
    O = h
      ? `linear-gradient(to right, ${s} 0%, ${s} ${i}%, rgba(255,255,255,0.15) ${i}%, rgba(255,255,255,0.15) ${g}, rgba(255,255,255,0.08) ${g}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${s} 0%, ${s} ${i}%, rgba(255,255,255,0.15) ${i}%, rgba(255,255,255,0.15) 100%)`;
  return v.jsxs('div', {
    className: Ke.compactSlider,
    children: [
      v.jsxs('div', {
        className: Ke.header,
        children: [
          v.jsx('span', { className: Ke.label, children: n }),
          v.jsxs('span', {
            className: Ke.value,
            style: { color: s },
            children: [Math.round(i), '%'],
          }),
        ],
      }),
      v.jsxs('div', {
        className: Ke.sliderRow,
        children: [
          v.jsxs('div', {
            className: Ke.sliderContainer,
            children: [
              v.jsx('input', {
                type: 'range',
                min: '0',
                max: '100',
                step: 'any',
                value: i,
                ...T,
                'data-dragging': k,
                disabled: m,
                style: { background: O, cursor: m ? 'not-allowed' : 'pointer' },
              }),
              h && v.jsx('div', { className: Ke.lockLimit, style: { left: g } }),
            ],
          }),
          x &&
            v.jsx('button', {
              className: `${Ke.lockButton} ${m ? Ke.locked : ''} ${!m && !w ? Ke.lockDisabled : ''}`,
              onClick: N,
              title: m ? oe.sliders.unlockTooltip : oe.sliders.lockTooltip,
              type: 'button',
              disabled: !m && !w,
              children: v.jsx(wp, { size: 14 }),
            }),
        ],
      }),
    ],
  });
}
function v2({ label: n, color: i, isSelected: l, onSelect: s }) {
  return v.jsxs('button', {
    type: 'button',
    onClick: s,
    className: `${Ke.compactSelection} ${l ? Ke.selected : ''}`,
    style: { '--selection-color': i },
    children: [
      v.jsx('span', { className: Ke.selectionLabel, children: n }),
      v.jsx('span', {
        className: Ke.selectionIndicator,
        style: { borderColor: l ? i : void 0, backgroundColor: l ? i : void 0 },
        children: l && v.jsx(yp, { size: 12, strokeWidth: 3 }),
      }),
    ],
  });
}
const w2 = '_editPanel_ln2er_3',
  k2 = '_expanded_ln2er_11',
  x2 = '_toggleButton_ln2er_16',
  S2 = '_buttonContent_ln2er_33',
  _2 = '_icon_ln2er_39',
  C2 = '_title_ln2er_44',
  E2 = '_modifiedBadge_ln2er_49',
  b2 = '_chevron_ln2er_63',
  N2 = '_content_ln2er_67',
  I2 = '_footer_ln2er_72',
  T2 = '_footerNote_ln2er_79',
  j2 = '_resetButton_ln2er_85',
  L2 = '_selectionRow_ln2er_104',
  _t = {
    editPanel: w2,
    expanded: k2,
    toggleButton: x2,
    buttonContent: S2,
    icon: _2,
    title: C2,
    modifiedBadge: E2,
    chevron: b2,
    content: N2,
    footer: I2,
    footerNote: T2,
    resetButton: j2,
    selectionRow: L2,
  },
  ap = 'custom';
function P2({
  title: n,
  icon: i,
  credences: l,
  setCredences: s,
  originalCredences: a,
  configs: u,
  isExpanded: d,
  onToggle: p,
  lockedKeys: m = [],
  setLockedKeys: h,
  questionType: g = tt.DEFAULT,
  selectedPreset: w,
  setSelectedPreset: x,
}) {
  const [k, T] = W.useState(null),
    N = W.useRef(null);
  W.useEffect(
    () => () => {
      N.current && clearTimeout(N.current);
    },
    []
  );
  const O = k || l,
    L = a && JSON.stringify(l) !== JSON.stringify(a),
    D = g === tt.SELECTION,
    z = (te) => {
      const A = {};
      (u.forEach(($) => {
        A[$.key] = $.key === te ? 100 : 0;
      }),
        s(A));
    },
    ee = (te) => {
      (te.stopPropagation(), s({ ...a }));
    };
  return v.jsxs('div', {
    className: `${_t.editPanel} ${d ? _t.expanded : ''}`,
    children: [
      v.jsxs('button', {
        onClick: p,
        className: _t.toggleButton,
        children: [
          v.jsxs('div', {
            className: _t.buttonContent,
            children: [
              v.jsx('span', { className: _t.icon, children: i }),
              v.jsx('span', { className: _t.title, children: n }),
              L &&
                v.jsx('span', {
                  className: _t.modifiedBadge,
                  children: oe.editPanel.modifiedBadge,
                }),
            ],
          }),
          v.jsx('span', {
            className: _t.chevron,
            children: d ? v.jsx(q0, { size: 16 }) : v.jsx(U0, { size: 16 }),
          }),
        ],
      }),
      d &&
        v.jsx('div', {
          className: _t.content,
          children: D
            ? v.jsxs(v.Fragment, {
                children: [
                  v.jsx('div', {
                    className: _t.selectionRow,
                    children: u.map((te) =>
                      v.jsx(
                        v2,
                        {
                          label: te.label,
                          color: te.color,
                          isSelected: l[te.key] === 100,
                          onSelect: () => z(te.key),
                        },
                        te.key
                      )
                    ),
                  }),
                  v.jsxs('div', {
                    className: _t.footer,
                    children: [
                      v.jsx('span', {
                        className: _t.footerNote,
                        children: oe.editPanel.selectionNote || 'Pick one option',
                      }),
                      L &&
                        v.jsxs('button', {
                          onClick: ee,
                          className: _t.resetButton,
                          children: [v.jsx(za, { size: 10 }), ' ', oe.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              })
            : v.jsxs(v.Fragment, {
                children: [
                  u.map((te) =>
                    v.jsx(
                      y2,
                      {
                        label: te.label,
                        value: O[te.key],
                        onChange: (A, $, ue, se) => {
                          const fe = $ || k || l,
                            Z = ou(te.key, A, fe, $, se),
                            B = ue ? su(Z) : Z;
                          (T(B),
                            x && w !== ap && x(ap),
                            N.current && clearTimeout(N.current),
                            ue
                              ? (s(B), (N.current = setTimeout(() => T(null), 50)))
                              : (N.current = setTimeout(() => {
                                  s(B);
                                }, 100)));
                        },
                        color: te.color,
                        credences: O,
                        sliderKey: te.key,
                        lockedKeys: m,
                        setLockedKeys: h,
                      },
                      te.key
                    )
                  ),
                  v.jsxs('div', {
                    className: _t.footer,
                    children: [
                      v.jsx('span', {
                        className: _t.footerNote,
                        children: oe.editPanel.sliderNote,
                      }),
                      L &&
                        v.jsxs('button', {
                          onClick: ee,
                          className: _t.resetButton,
                          children: [v.jsx(za, { size: 10 }), ' ', oe.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              }),
        }),
    ],
  });
}
var dp;
const O2 = ((dp = hn.ui) == null ? void 0 : dp.moralMarketplace) === !0,
  ni = oe.worldviewModal;
function R2({
  worldviewIds: n,
  activeWorldviewId: i,
  hasProgressMap: l,
  worldviewNames: s,
  onSwitch: a,
  onClose: u,
  onMarketplace: d,
  onRename: p,
}) {
  const [m, h] = W.useState(null),
    [g, w] = W.useState('');
  Object.values(l).filter(Boolean).length;
  const x = O2,
    k = (D, z) => {
      (z.stopPropagation(), h(D), w((s == null ? void 0 : s[D]) || `${ni.defaultName} ${D}`));
    },
    T = (D, z) => {
      z.stopPropagation();
      const ee = g.trim();
      (ee && p && p(D, ee), h(null), w(''));
    },
    N = (D) => {
      (D.stopPropagation(), h(null), w(''));
    },
    O = (D, z) => {
      z.key === 'Enter' ? T(D, z) : z.key === 'Escape' && N(z);
    },
    L = (D) => (s == null ? void 0 : s[D]) || `${ni.defaultName} ${D}`;
  return v.jsx('div', {
    className: it.overlay,
    onClick: u,
    children: v.jsxs('div', {
      className: it.modal,
      onClick: (D) => D.stopPropagation(),
      children: [
        v.jsx('h2', { className: it.title, children: ni.title }),
        v.jsx('p', { className: it.message, children: ni.description }),
        v.jsxs('div', {
          className: it.buttons,
          children: [
            n.map((D) => {
              const z = D === i,
                ee = l[D],
                te = m === D,
                A = L(D);
              return v.jsx(
                'div',
                {
                  className: it.worldviewRow,
                  children: te
                    ? v.jsxs('div', {
                        className: it.editRow,
                        onClick: ($) => $.stopPropagation(),
                        children: [
                          v.jsx('input', {
                            type: 'text',
                            value: g,
                            onChange: ($) => w($.target.value),
                            onKeyDown: ($) => O(D, $),
                            className: it.editInput,
                            autoFocus: !0,
                            maxLength: 30,
                          }),
                          v.jsx('button', {
                            onClick: ($) => T(D, $),
                            className: it.iconButton,
                            title: 'Save',
                            children: v.jsx(yp, { size: 16 }),
                          }),
                          v.jsx('button', {
                            onClick: N,
                            className: it.iconButton,
                            title: 'Cancel',
                            children: v.jsx(ag, { size: 16 }),
                          }),
                        ],
                      })
                    : v.jsxs(v.Fragment, {
                        children: [
                          v.jsxs('button', {
                            onClick: () => a(D),
                            className: `btn ${z ? 'btn-primary' : 'btn-secondary'} ${it.button} ${it.worldviewButton}`,
                            disabled: z,
                            children: [A, !ee && ` ${ni.emptyLabel}`, z && ` ${ni.currentLabel}`],
                          }),
                          ee &&
                            p &&
                            v.jsx('button', {
                              onClick: ($) => k(D, $),
                              className: it.iconButton,
                              title: 'Rename',
                              children: v.jsx(tg, { size: 14 }),
                            }),
                        ],
                      }),
                },
                D
              );
            }),
            x,
          ],
        }),
      ],
    }),
  });
}
const M2 = '_description_bffzu_3',
  A2 = '_emptyState_bffzu_9',
  D2 = '_settingsRow_bffzu_17',
  z2 = '_settingsLabel_bffzu_25',
  F2 = '_budgetInputWrapper_bffzu_35',
  B2 = '_currencyPrefix_bffzu_48',
  W2 = '_budgetInput_bffzu_35',
  V2 = '_settingsSelect_bffzu_68',
  $2 = '_mainCard_bffzu_98',
  U2 = '_allocationItem_bffzu_103',
  q2 = '_allocationHeader_bffzu_107',
  H2 = '_causeName_bffzu_114',
  Q2 = '_dollarAmount_bffzu_120',
  K2 = '_barTrack_bffzu_128',
  G2 = '_barFill_bffzu_135',
  Y2 = '_barLabel_bffzu_144',
  X2 = '_breakdownSection_bffzu_150',
  J2 = '_breakdownHeading_bffzu_154',
  Z2 = '_breakdownGrid_bffzu_161',
  eC = '_worldviewCard_bffzu_167',
  tC = '_worldviewHeader_bffzu_174',
  nC = '_worldviewName_bffzu_183',
  rC = '_worldviewShare_bffzu_188',
  Be = {
    description: M2,
    emptyState: A2,
    settingsRow: D2,
    settingsLabel: z2,
    budgetInputWrapper: F2,
    currencyPrefix: B2,
    budgetInput: W2,
    settingsSelect: V2,
    mainCard: $2,
    allocationItem: U2,
    allocationHeader: q2,
    causeName: H2,
    dollarAmount: Q2,
    barTrack: K2,
    barFill: G2,
    barLabel: Y2,
    breakdownSection: X2,
    breakdownHeading: J2,
    breakdownGrid: Z2,
    worldviewCard: eC,
    worldviewHeader: tC,
    worldviewName: nC,
    worldviewShare: rC,
  };
var fp;
const up = ((fp = hn.ui) == null ? void 0 : fp.multipleWorldviews) === !0;
function iC() {
  var gn, on;
  const {
      questionsConfig: n,
      causesConfig: i,
      stateMap: l,
      expandedPanel: s,
      setExpandedPanel: a,
      calculationResults: u,
      originalCalculationResults: d,
      hasChanged: p,
      resetToOriginal: m,
      resetQuiz: h,
      goBack: g,
      goToStep: w,
      worldviews: x,
      worldviewNames: k,
      activeWorldviewId: T,
      switchWorldview: N,
      worldviewIds: O,
      hasProgressMap: L,
      startQuiz: D,
      selectedCalculations: z,
      setSelectedCalculations: ee,
      setWorldviewName: te,
      marketplaceBudget: A,
      setMarketplaceBudget: $,
    } = mn(),
    se = A ?? 1e7,
    [fe, Z] = W.useState(se.toLocaleString()),
    [B, ge] = W.useState(!1),
    [U, q] = W.useState(!1),
    [ye, pe] = W.useState(null),
    [G, re] = W.useState(!1),
    { email: S, copied: I, handleEmailClick: F } = Eu(oe.results.feedbackEmail),
    _ = Object.entries(i),
    ce = uu();
  W.useEffect(() => {
    if (ce.length === 0) return;
    const ae = ce[0].key,
      De = z.left && ce.some((pt) => pt.key === z.left),
      Je = z.right && ce.some((pt) => pt.key === z.right);
    (!De || !Je) && ee({ left: De ? z.left : ae, right: Je ? z.right : ae });
  }, [ce, z.left, z.right, ee]);
  const _e = (ae, De) => {
      ee({ [ae]: De });
    },
    ve = (ae) => {
      Z(ae.target.value);
    },
    Te = () => {
      const ae = parseInt(fe.replace(/[^0-9]/g, ''), 10);
      !isNaN(ae) && ae > 0 ? ($(ae), Z(ae.toLocaleString())) : Z(se.toLocaleString());
    },
    be = (ae) => {
      ae.key === 'Enter' && ae.target.blur();
    },
    Pe = (ae) => {
      (re(!1), N(ae), L[ae] || D());
    },
    qe = () => {
      (re(!1), w('marketplace'));
    },
    It = (ae) =>
      ae.options.map((De) => ({
        key: De.key,
        label: De.panelLabel,
        short: De.panelShort,
        color: De.color,
      })),
    Et = n.filter((ae) => ae.type !== tt.INTERMISSION),
    Ft = (ae, De = !1) =>
      v.jsxs('div', {
        className: Se.calculationSelectWrapper,
        children: [
          v.jsx('select', {
            className: Se.calculationSelect,
            value: z[ae] || '',
            onChange: (Je) => _e(ae, Je.target.value),
            children: ce.map((Je) =>
              v.jsx('option', { value: Je.key, children: oe.results.methods[Je.key].title }, Je.key)
            ),
          }),
          De && v.jsx(Fn, { content: oe.results.calculationSelectTooltip }),
        ],
      }),
    Bt = (ae, De, Je = !0) => {
      const pt = z[De],
        vt = ce.find((Wn) => Wn.key === pt);
      if (!vt) return null;
      const Yt = ae == null ? void 0 : ae[vt.key];
      return Yt
        ? v.jsx(wh, {
            methodKey: vt.key,
            results: Yt,
            evs: vt.hasEvs ? Yt.evs : null,
            causeEntries: _,
            simpleMode: Je,
            budget: se,
          })
        : null;
    };
  return v.jsxs('div', {
    className: Se.resultsContainer,
    children: [
      v.jsx(Bn, {}),
      v.jsx(ai, { percentage: 100 }),
      v.jsxs('div', {
        className: Se.inner,
        children: [
          v.jsxs('div', {
            className: Se.resultsHeader,
            children: [
              v.jsxs('h1', {
                className: Se.title,
                children: [
                  oe.results.heading,
                  up,
                  p &&
                    v.jsx('span', {
                      className: Se.modifiedIndicator,
                      children: oe.results.modifiedIndicator,
                    }),
                ],
              }),
              v.jsx('p', {
                className: Se.prototypeDisclaimer,
                children: oe.results.prototypeDisclaimer,
              }),
            ],
          }),
          v.jsx('div', {
            className: Se.budgetRow,
            children: v.jsxs('label', {
              className: Be.settingsLabel,
              children: [
                oe.results.budgetLabel,
                v.jsx(Fn, { content: oe.results.budgetInfo }),
                v.jsxs('div', {
                  className: Be.budgetInputWrapper,
                  children: [
                    v.jsx('span', { className: Be.currencyPrefix, children: '$' }),
                    v.jsx('input', {
                      type: 'text',
                      value: fe,
                      onChange: ve,
                      onBlur: Te,
                      onKeyDown: be,
                      className: Be.budgetInput,
                    }),
                  ],
                }),
              ],
            }),
          }),
          v.jsx('div', {
            className: Se.calculationSelectContainer,
            children: p
              ? v.jsxs('div', {
                  className: Se.comparisonContainer,
                  children: [
                    v.jsxs('div', {
                      className: Se.originalResults,
                      children: [
                        v.jsx('div', { className: Se.sideLabel, children: 'Original' }),
                        Ft('left', !0),
                        Bt(d, 'left'),
                      ],
                    }),
                    v.jsxs('div', {
                      className: Se.comparisonDivider,
                      children: [
                        v.jsx('div', { className: Se.dividerLine }),
                        v.jsx('div', { className: Se.dividerArrow, children: '→' }),
                        v.jsx('div', { className: Se.dividerLine }),
                      ],
                    }),
                    v.jsxs('div', {
                      className: Se.newResults,
                      children: [
                        v.jsx('div', { className: Se.sideLabel, children: 'Modified' }),
                        Ft('right'),
                        Bt(u, 'right'),
                      ],
                    }),
                  ],
                })
              : v.jsxs(v.Fragment, {
                  children: [
                    Ft('left', !0),
                    v.jsx('div', { className: Se.singleResultCard, children: Bt(d || u, 'left') }),
                  ],
                }),
          }),
          v.jsxs('div', {
            className: Se.adjustPanel,
            children: [
              v.jsxs('div', {
                className: Se.adjustHeader,
                children: [
                  v.jsx('span', {
                    className: Se.adjustTitle,
                    children: oe.results.adjustCredencesHeading,
                  }),
                  p &&
                    v.jsxs('button', {
                      onClick: m,
                      className: Se.resetAllButton,
                      children: [v.jsx(za, { size: 10 }), ' ', oe.results.resetAllButton],
                    }),
                ],
              }),
              v.jsx('div', {
                className: Se.panelList,
                children: Et.map((ae) => {
                  const De = l[ae.id];
                  return De
                    ? v.jsx(
                        P2,
                        {
                          title: ae.editPanelTitle,
                          icon: v.jsx(ph, { name: ae.icon, size: 16 }),
                          credences: De.credences,
                          setCredences: De.setCredences,
                          originalCredences: De.originalCredences,
                          configs: It(ae),
                          isExpanded: s === ae.id,
                          onToggle: () => a(s === ae.id ? null : ae.id),
                          lockedKeys: De.lockedKeys,
                          setLockedKeys: De.setLockedKeys,
                          questionType: ae.type,
                          selectedPreset: De.selectedPreset,
                          setSelectedPreset: De.setSelectedPreset,
                        },
                        ae.id
                      )
                    : null;
                }),
              }),
            ],
          }),
          v.jsxs('div', {
            className: Se.backButtonContainer,
            children: [
              v.jsx('button', {
                onClick: g,
                className: 'btn btn-secondary',
                children: oe.navigation.backToQuiz,
              }),
              up,
              (gn = hn.ui) == null ? void 0 : gn.shareResults,
              (on = hn.ui) == null ? void 0 : on.resetButton,
            ],
          }),
          v.jsx('div', {
            className: Se.feedbackCard,
            children: v.jsx(Tr, {
              components: { a: Nu(F, Se.emailCopy) },
              children: bu(oe.results.feedbackCard, S, I),
            }),
          }),
        ],
      }),
      G &&
        v.jsx(R2, {
          worldviewIds: O,
          activeWorldviewId: T,
          hasProgressMap: L,
          worldviewNames: k,
          onSwitch: Pe,
          onClose: () => re(!1),
          onMarketplace: qe,
          onRename: te,
        }),
    ],
  });
}
const lC = Co.diminishingReturns;
function cp(n) {
  if (n >= 1e6) {
    const i = n / 1e6;
    return `$${i % 1 === 0 ? i.toFixed(0) : i.toFixed(1)}M`;
  }
  return `$${n.toLocaleString()}`;
}
function oC(n, i) {
  const l = i * 0.005;
  return Math.round(n / l) * l;
}
function sC() {
  var fe, Z;
  const {
      worldviews: n,
      worldviewNames: i,
      worldviewIds: l,
      completedMap: s,
      goToStep: a,
      questionsConfig: u,
      marketplaceBudget: d,
      setMarketplaceBudget: p,
      isAdvancedMode: m,
      activeWorldviewId: h,
      selectedCalculations: g,
    } = mn(),
    [w, x] = W.useState(lC),
    [k, T] = W.useState(d.toLocaleString());
  hh({
    worldviews: n,
    activeWorldviewId: h,
    selectedCalculations: g,
    worldviewNames: i,
    marketplaceBudget: d,
  });
  const { email: N, copied: O, handleEmailClick: L } = Eu(oe.results.feedbackEmail),
    D = Object.entries(zn),
    z = (B) => {
      T(B.target.value);
    },
    ee = () => {
      const B = parseInt(k.replace(/[^0-9]/g, ''), 10);
      !isNaN(B) && B > 0 ? (p(B), T(B.toLocaleString())) : T(d.toLocaleString());
    },
    te = (B) => {
      B.key === 'Enter' && B.target.blur();
    },
    A = l
      .filter((B) => s[B])
      .map((B) => {
        const ge = n[B],
          U = {};
        for (const [ye, pe] of Object.entries(ge.questions)) U[ye] = pe;
        let q;
        if (m) q = zg(U, u, { causes: zn });
        else {
          const ye = {};
          for (const [pe, G] of Object.entries(ge.questions)) ye[pe] = G.credences;
          q = Mg(ye, { causes: zn, dimensions: aC(u) });
        }
        return { id: B, name: (i == null ? void 0 : i[B]) || `Worldview ${B}`, evs: q };
      }),
    $ = A.length >= 2,
    ue = $ ? Ag(A, { diminishingReturns: w }) : null,
    se = () => {
      a(m ? 'hub' : 'results');
    };
  return v.jsxs('div', {
    className: Se.resultsContainer,
    children: [
      v.jsx(Bn, {}),
      v.jsx(ai, { percentage: 100 }),
      v.jsxs('div', {
        className: Se.inner,
        children: [
          v.jsxs('div', {
            className: Se.resultsHeader,
            children: [
              v.jsx('h1', { className: Se.title, children: oe.marketplace.heading }),
              v.jsx('p', {
                className: Se.prototypeDisclaimer,
                children: oe.results.prototypeDisclaimer,
              }),
              v.jsx('p', { className: Be.description, children: oe.marketplace.description }),
            ],
          }),
          $
            ? v.jsxs(v.Fragment, {
                children: [
                  v.jsxs('div', {
                    className: Be.settingsRow,
                    children: [
                      v.jsxs('label', {
                        className: Be.settingsLabel,
                        children: [
                          oe.marketplace.budgetLabel,
                          v.jsxs('div', {
                            className: Be.budgetInputWrapper,
                            children: [
                              v.jsx('span', { className: Be.currencyPrefix, children: '$' }),
                              v.jsx('input', {
                                type: 'text',
                                value: k,
                                onChange: z,
                                onBlur: ee,
                                onKeyDown: te,
                                className: Be.budgetInput,
                              }),
                            ],
                          }),
                        ],
                      }),
                      v.jsxs('label', {
                        className: Be.settingsLabel,
                        children: [
                          oe.marketplace.settingsLabel,
                          v.jsx('select', {
                            value: w,
                            onChange: (B) => x(B.target.value),
                            className: Be.settingsSelect,
                            children: Object.keys(kp).map((B) =>
                              v.jsx(
                                'option',
                                { value: B, children: oe.marketplace.diminishingReturns[B] },
                                B
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  v.jsxs('div', {
                    className: `${Se.resultCard} ${Be.mainCard}`,
                    children: [
                      v.jsx('div', {
                        className: Se.cardHeader,
                        children: v.jsxs('div', {
                          children: [
                            v.jsx('h3', {
                              className: Se.cardTitle,
                              children: 'Combined Allocation',
                            }),
                            v.jsxs('p', {
                              className: Se.cardSubtitle,
                              children: [
                                'Based on ',
                                A.length,
                                ' worldviews •',
                                ' ',
                                cp(d),
                                ' total',
                              ],
                            }),
                          ],
                        }),
                      }),
                      D.map(([B, ge]) => {
                        const U = ue.allocation[B],
                          q = oC((U / 100) * d, d);
                        return v.jsxs(
                          'div',
                          {
                            className: Be.allocationItem,
                            children: [
                              v.jsxs('div', {
                                className: Be.allocationHeader,
                                children: [
                                  v.jsx('span', { className: Be.causeName, children: ge.name }),
                                  v.jsx('span', { className: Be.dollarAmount, children: cp(q) }),
                                ],
                              }),
                              v.jsx('div', {
                                className: Be.barTrack,
                                children: v.jsx('div', {
                                  className: Be.barFill,
                                  style: { width: `${U}%`, background: ge.color },
                                  children:
                                    U > 15 &&
                                    v.jsxs('span', {
                                      className: Be.barLabel,
                                      children: [U.toFixed(0), '%'],
                                    }),
                                }),
                              }),
                            ],
                          },
                          B
                        );
                      }),
                    ],
                  }),
                  v.jsxs('div', {
                    className: Be.breakdownSection,
                    children: [
                      v.jsx('h2', {
                        className: Be.breakdownHeading,
                        children: oe.marketplace.worldviewBreakdownHeading,
                      }),
                      v.jsx('div', {
                        className: Be.breakdownGrid,
                        children: ue.worldviewAllocations.map((B, ge) =>
                          v.jsxs(
                            'div',
                            {
                              className: Be.worldviewCard,
                              children: [
                                v.jsxs('div', {
                                  className: Be.worldviewHeader,
                                  children: [
                                    v.jsx('span', {
                                      className: Be.worldviewName,
                                      children: B.name,
                                    }),
                                    v.jsxs('span', {
                                      className: Be.worldviewShare,
                                      children: [B.share.toFixed(0), '% budget'],
                                    }),
                                  ],
                                }),
                                D.map(([U, q]) => {
                                  const ye = B.share > 0 ? (B.allocation[U] / B.share) * 100 : 0;
                                  return v.jsx(
                                    vh,
                                    {
                                      name: q.name,
                                      percentage: ye,
                                      color: q.color,
                                      simpleMode: !0,
                                    },
                                    U
                                  );
                                }),
                              ],
                            },
                            A[ge].id
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              })
            : v.jsx('div', {
                className: Be.emptyState,
                children: v.jsx('p', { children: oe.marketplace.emptyState }),
              }),
          v.jsxs('div', {
            className: Se.backButtonContainer,
            children: [
              v.jsx('button', {
                onClick: se,
                className: 'btn btn-secondary',
                children: m
                  ? (fe = oe.hub) == null
                    ? void 0
                    : fe.backButton
                  : oe.marketplace.backButton,
              }),
              (Z = hn.ui) == null ? void 0 : Z.shareResults,
            ],
          }),
          v.jsx('div', {
            className: Se.feedbackCard,
            children: v.jsx(Tr, {
              components: { a: Nu(L, Se.emailCopy) },
              children: bu(oe.results.feedbackCard, N, O),
            }),
          }),
        ],
      }),
    ],
  });
}
function aC(n) {
  return Object.fromEntries(
    n
      .filter((i) => i.type !== 'intermission' && i.worldviewDimension)
      .map((i) => [i.id, i.worldviewDimension])
  );
}
Sp(!0);
const uC = {
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
function cC() {
  var d;
  const {
    currentStep: n,
    currentQuestion: i,
    setDebugConfig: l,
    shareUrlError: s,
    isHydrating: a,
  } = mn();
  if (a) return null;
  function u() {
    return n === 'disclaimer'
      ? v.jsx(Zk, {})
      : n === 'welcome'
        ? v.jsx(ux, {})
        : n === 'hub'
          ? v.jsx(Bx, {})
          : n === 'results'
            ? v.jsx(iC, {})
            : n === 'marketplace'
              ? v.jsx(sC, {})
              : i
                ? i.type === tt.RATIO
                  ? v.jsx(p_, {})
                  : i.type === tt.INTERMISSION
                    ? v.jsx(g2, {})
                    : v.jsx(ZS, {})
                : null;
  }
  return v.jsxs(v.Fragment, {
    children: [
      s && v.jsx('div', { style: uC, children: s }),
      u(),
      (d = hn.developer) == null ? void 0 : d.calculationDebugger,
    ],
  });
}
function dC() {
  return v.jsx(vy, { children: v.jsx(cC, {}) });
}
S0.createRoot(document.getElementById('root')).render(
  v.jsx(W.StrictMode, { children: v.jsx(dC, {}) })
);
