(function () {
  const a = document.createElement('link').relList;
  if (a && a.supports && a.supports('modulepreload')) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) c(d);
  new MutationObserver((d) => {
    for (const f of d)
      if (f.type === 'childList')
        for (const p of f.addedNodes) p.tagName === 'LINK' && p.rel === 'modulepreload' && c(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(d) {
    const f = {};
    return (
      d.integrity && (f.integrity = d.integrity),
      d.referrerPolicy && (f.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === 'use-credentials'
        ? (f.credentials = 'include')
        : d.crossOrigin === 'anonymous'
          ? (f.credentials = 'omit')
          : (f.credentials = 'same-origin'),
      f
    );
  }
  function c(d) {
    if (d.ep) return;
    d.ep = !0;
    const f = i(d);
    fetch(d.href, f);
  }
})();
var is = { exports: {} },
  el = {},
  ss = { exports: {} },
  he = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hc;
function Yf() {
  if (hc) return he;
  hc = 1;
  var s = Symbol.for('react.element'),
    a = Symbol.for('react.portal'),
    i = Symbol.for('react.fragment'),
    c = Symbol.for('react.strict_mode'),
    d = Symbol.for('react.profiler'),
    f = Symbol.for('react.provider'),
    p = Symbol.for('react.context'),
    w = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    v = Symbol.for('react.lazy'),
    x = Symbol.iterator;
  function I(k) {
    return k === null || typeof k != 'object'
      ? null
      : ((k = (x && k[x]) || k['@@iterator']), typeof k == 'function' ? k : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    P = Object.assign,
    M = {};
  function j(k, T, oe) {
    ((this.props = k), (this.context = T), (this.refs = M), (this.updater = oe || O));
  }
  ((j.prototype.isReactComponent = {}),
    (j.prototype.setState = function (k, T) {
      if (typeof k != 'object' && typeof k != 'function' && k != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, k, T, 'setState');
    }),
    (j.prototype.forceUpdate = function (k) {
      this.updater.enqueueForceUpdate(this, k, 'forceUpdate');
    }));
  function F() {}
  F.prototype = j.prototype;
  function N(k, T, oe) {
    ((this.props = k), (this.context = T), (this.refs = M), (this.updater = oe || O));
  }
  var V = (N.prototype = new F());
  ((V.constructor = N), P(V, j.prototype), (V.isPureReactComponent = !0));
  var B = Array.isArray,
    H = Object.prototype.hasOwnProperty,
    J = { current: null },
    ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(k, T, oe) {
    var fe,
      ve = {},
      ye = null,
      Se = null;
    if (T != null)
      for (fe in (T.ref !== void 0 && (Se = T.ref), T.key !== void 0 && (ye = '' + T.key), T))
        H.call(T, fe) && !ee.hasOwnProperty(fe) && (ve[fe] = T[fe]);
    var ge = arguments.length - 2;
    if (ge === 1) ve.children = oe;
    else if (1 < ge) {
      for (var Ce = Array(ge), Ye = 0; Ye < ge; Ye++) Ce[Ye] = arguments[Ye + 2];
      ve.children = Ce;
    }
    if (k && k.defaultProps)
      for (fe in ((ge = k.defaultProps), ge)) ve[fe] === void 0 && (ve[fe] = ge[fe]);
    return { $$typeof: s, type: k, key: ye, ref: Se, props: ve, _owner: J.current };
  }
  function ie(k, T) {
    return { $$typeof: s, type: k.type, key: T, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function ue(k) {
    return typeof k == 'object' && k !== null && k.$$typeof === s;
  }
  function Z(k) {
    var T = { '=': '=0', ':': '=2' };
    return (
      '$' +
      k.replace(/[=:]/g, function (oe) {
        return T[oe];
      })
    );
  }
  var me = /\/+/g;
  function ce(k, T) {
    return typeof k == 'object' && k !== null && k.key != null ? Z('' + k.key) : T.toString(36);
  }
  function Ee(k, T, oe, fe, ve) {
    var ye = typeof k;
    (ye === 'undefined' || ye === 'boolean') && (k = null);
    var Se = !1;
    if (k === null) Se = !0;
    else
      switch (ye) {
        case 'string':
        case 'number':
          Se = !0;
          break;
        case 'object':
          switch (k.$$typeof) {
            case s:
            case a:
              Se = !0;
          }
      }
    if (Se)
      return (
        (Se = k),
        (ve = ve(Se)),
        (k = fe === '' ? '.' + ce(Se, 0) : fe),
        B(ve)
          ? ((oe = ''),
            k != null && (oe = k.replace(me, '$&/') + '/'),
            Ee(ve, T, oe, '', function (Ye) {
              return Ye;
            }))
          : ve != null &&
            (ue(ve) &&
              (ve = ie(
                ve,
                oe +
                  (!ve.key || (Se && Se.key === ve.key)
                    ? ''
                    : ('' + ve.key).replace(me, '$&/') + '/') +
                  k
              )),
            T.push(ve)),
        1
      );
    if (((Se = 0), (fe = fe === '' ? '.' : fe + ':'), B(k)))
      for (var ge = 0; ge < k.length; ge++) {
        ye = k[ge];
        var Ce = fe + ce(ye, ge);
        Se += Ee(ye, T, oe, Ce, ve);
      }
    else if (((Ce = I(k)), typeof Ce == 'function'))
      for (k = Ce.call(k), ge = 0; !(ye = k.next()).done; )
        ((ye = ye.value), (Ce = fe + ce(ye, ge++)), (Se += Ee(ye, T, oe, Ce, ve)));
    else if (ye === 'object')
      throw (
        (T = String(k)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (T === '[object Object]' ? 'object with keys {' + Object.keys(k).join(', ') + '}' : T) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return Se;
  }
  function Be(k, T, oe) {
    if (k == null) return k;
    var fe = [],
      ve = 0;
    return (
      Ee(k, fe, '', '', function (ye) {
        return T.call(oe, ye, ve++);
      }),
      fe
    );
  }
  function We(k) {
    if (k._status === -1) {
      var T = k._result;
      ((T = T()),
        T.then(
          function (oe) {
            (k._status === 0 || k._status === -1) && ((k._status = 1), (k._result = oe));
          },
          function (oe) {
            (k._status === 0 || k._status === -1) && ((k._status = 2), (k._result = oe));
          }
        ),
        k._status === -1 && ((k._status = 0), (k._result = T)));
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var ke = { current: null },
    U = { transition: null },
    ne = { ReactCurrentDispatcher: ke, ReactCurrentBatchConfig: U, ReactCurrentOwner: J };
  function q() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (he.Children = {
      map: Be,
      forEach: function (k, T, oe) {
        Be(
          k,
          function () {
            T.apply(this, arguments);
          },
          oe
        );
      },
      count: function (k) {
        var T = 0;
        return (
          Be(k, function () {
            T++;
          }),
          T
        );
      },
      toArray: function (k) {
        return (
          Be(k, function (T) {
            return T;
          }) || []
        );
      },
      only: function (k) {
        if (!ue(k))
          throw Error('React.Children.only expected to receive a single React element child.');
        return k;
      },
    }),
    (he.Component = j),
    (he.Fragment = i),
    (he.Profiler = d),
    (he.PureComponent = N),
    (he.StrictMode = c),
    (he.Suspense = h),
    (he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne),
    (he.act = q),
    (he.cloneElement = function (k, T, oe) {
      if (k == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + k + '.'
        );
      var fe = P({}, k.props),
        ve = k.key,
        ye = k.ref,
        Se = k._owner;
      if (T != null) {
        if (
          (T.ref !== void 0 && ((ye = T.ref), (Se = J.current)),
          T.key !== void 0 && (ve = '' + T.key),
          k.type && k.type.defaultProps)
        )
          var ge = k.type.defaultProps;
        for (Ce in T)
          H.call(T, Ce) &&
            !ee.hasOwnProperty(Ce) &&
            (fe[Ce] = T[Ce] === void 0 && ge !== void 0 ? ge[Ce] : T[Ce]);
      }
      var Ce = arguments.length - 2;
      if (Ce === 1) fe.children = oe;
      else if (1 < Ce) {
        ge = Array(Ce);
        for (var Ye = 0; Ye < Ce; Ye++) ge[Ye] = arguments[Ye + 2];
        fe.children = ge;
      }
      return { $$typeof: s, type: k.type, key: ve, ref: ye, props: fe, _owner: Se };
    }),
    (he.createContext = function (k) {
      return (
        (k = {
          $$typeof: p,
          _currentValue: k,
          _currentValue2: k,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (k.Provider = { $$typeof: f, _context: k }),
        (k.Consumer = k)
      );
    }),
    (he.createElement = te),
    (he.createFactory = function (k) {
      var T = te.bind(null, k);
      return ((T.type = k), T);
    }),
    (he.createRef = function () {
      return { current: null };
    }),
    (he.forwardRef = function (k) {
      return { $$typeof: w, render: k };
    }),
    (he.isValidElement = ue),
    (he.lazy = function (k) {
      return { $$typeof: v, _payload: { _status: -1, _result: k }, _init: We };
    }),
    (he.memo = function (k, T) {
      return { $$typeof: g, type: k, compare: T === void 0 ? null : T };
    }),
    (he.startTransition = function (k) {
      var T = U.transition;
      U.transition = {};
      try {
        k();
      } finally {
        U.transition = T;
      }
    }),
    (he.unstable_act = q),
    (he.useCallback = function (k, T) {
      return ke.current.useCallback(k, T);
    }),
    (he.useContext = function (k) {
      return ke.current.useContext(k);
    }),
    (he.useDebugValue = function () {}),
    (he.useDeferredValue = function (k) {
      return ke.current.useDeferredValue(k);
    }),
    (he.useEffect = function (k, T) {
      return ke.current.useEffect(k, T);
    }),
    (he.useId = function () {
      return ke.current.useId();
    }),
    (he.useImperativeHandle = function (k, T, oe) {
      return ke.current.useImperativeHandle(k, T, oe);
    }),
    (he.useInsertionEffect = function (k, T) {
      return ke.current.useInsertionEffect(k, T);
    }),
    (he.useLayoutEffect = function (k, T) {
      return ke.current.useLayoutEffect(k, T);
    }),
    (he.useMemo = function (k, T) {
      return ke.current.useMemo(k, T);
    }),
    (he.useReducer = function (k, T, oe) {
      return ke.current.useReducer(k, T, oe);
    }),
    (he.useRef = function (k) {
      return ke.current.useRef(k);
    }),
    (he.useState = function (k) {
      return ke.current.useState(k);
    }),
    (he.useSyncExternalStore = function (k, T, oe) {
      return ke.current.useSyncExternalStore(k, T, oe);
    }),
    (he.useTransition = function () {
      return ke.current.useTransition();
    }),
    (he.version = '18.3.1'),
    he
  );
}
var vc;
function Es() {
  return (vc || ((vc = 1), (ss.exports = Yf())), ss.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yc;
function Xf() {
  if (yc) return el;
  yc = 1;
  var s = Es(),
    a = Symbol.for('react.element'),
    i = Symbol.for('react.fragment'),
    c = Object.prototype.hasOwnProperty,
    d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(w, h, g) {
    var v,
      x = {},
      I = null,
      O = null;
    (g !== void 0 && (I = '' + g),
      h.key !== void 0 && (I = '' + h.key),
      h.ref !== void 0 && (O = h.ref));
    for (v in h) c.call(h, v) && !f.hasOwnProperty(v) && (x[v] = h[v]);
    if (w && w.defaultProps) for (v in ((h = w.defaultProps), h)) x[v] === void 0 && (x[v] = h[v]);
    return { $$typeof: a, type: w, key: I, ref: O, props: x, _owner: d.current };
  }
  return ((el.Fragment = i), (el.jsx = p), (el.jsxs = p), el);
}
var gc;
function Jf() {
  return (gc || ((gc = 1), (is.exports = Xf())), is.exports);
}
var b = Jf(),
  z = Es(),
  po = {},
  as = { exports: {} },
  ct = {},
  us = { exports: {} },
  cs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wc;
function Zf() {
  return (
    wc ||
      ((wc = 1),
      (function (s) {
        function a(U, ne) {
          var q = U.length;
          U.push(ne);
          e: for (; 0 < q; ) {
            var k = (q - 1) >>> 1,
              T = U[k];
            if (0 < d(T, ne)) ((U[k] = ne), (U[q] = T), (q = k));
            else break e;
          }
        }
        function i(U) {
          return U.length === 0 ? null : U[0];
        }
        function c(U) {
          if (U.length === 0) return null;
          var ne = U[0],
            q = U.pop();
          if (q !== ne) {
            U[0] = q;
            e: for (var k = 0, T = U.length, oe = T >>> 1; k < oe; ) {
              var fe = 2 * (k + 1) - 1,
                ve = U[fe],
                ye = fe + 1,
                Se = U[ye];
              if (0 > d(ve, q))
                ye < T && 0 > d(Se, ve)
                  ? ((U[k] = Se), (U[ye] = q), (k = ye))
                  : ((U[k] = ve), (U[fe] = q), (k = fe));
              else if (ye < T && 0 > d(Se, q)) ((U[k] = Se), (U[ye] = q), (k = ye));
              else break e;
            }
          }
          return ne;
        }
        function d(U, ne) {
          var q = U.sortIndex - ne.sortIndex;
          return q !== 0 ? q : U.id - ne.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var f = performance;
          s.unstable_now = function () {
            return f.now();
          };
        } else {
          var p = Date,
            w = p.now();
          s.unstable_now = function () {
            return p.now() - w;
          };
        }
        var h = [],
          g = [],
          v = 1,
          x = null,
          I = 3,
          O = !1,
          P = !1,
          M = !1,
          j = typeof setTimeout == 'function' ? setTimeout : null,
          F = typeof clearTimeout == 'function' ? clearTimeout : null,
          N = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function V(U) {
          for (var ne = i(g); ne !== null; ) {
            if (ne.callback === null) c(g);
            else if (ne.startTime <= U) (c(g), (ne.sortIndex = ne.expirationTime), a(h, ne));
            else break;
            ne = i(g);
          }
        }
        function B(U) {
          if (((M = !1), V(U), !P))
            if (i(h) !== null) ((P = !0), We(H));
            else {
              var ne = i(g);
              ne !== null && ke(B, ne.startTime - U);
            }
        }
        function H(U, ne) {
          ((P = !1), M && ((M = !1), F(te), (te = -1)), (O = !0));
          var q = I;
          try {
            for (V(ne), x = i(h); x !== null && (!(x.expirationTime > ne) || (U && !Z())); ) {
              var k = x.callback;
              if (typeof k == 'function') {
                ((x.callback = null), (I = x.priorityLevel));
                var T = k(x.expirationTime <= ne);
                ((ne = s.unstable_now()),
                  typeof T == 'function' ? (x.callback = T) : x === i(h) && c(h),
                  V(ne));
              } else c(h);
              x = i(h);
            }
            if (x !== null) var oe = !0;
            else {
              var fe = i(g);
              (fe !== null && ke(B, fe.startTime - ne), (oe = !1));
            }
            return oe;
          } finally {
            ((x = null), (I = q), (O = !1));
          }
        }
        var J = !1,
          ee = null,
          te = -1,
          ie = 5,
          ue = -1;
        function Z() {
          return !(s.unstable_now() - ue < ie);
        }
        function me() {
          if (ee !== null) {
            var U = s.unstable_now();
            ue = U;
            var ne = !0;
            try {
              ne = ee(!0, U);
            } finally {
              ne ? ce() : ((J = !1), (ee = null));
            }
          } else J = !1;
        }
        var ce;
        if (typeof N == 'function')
          ce = function () {
            N(me);
          };
        else if (typeof MessageChannel < 'u') {
          var Ee = new MessageChannel(),
            Be = Ee.port2;
          ((Ee.port1.onmessage = me),
            (ce = function () {
              Be.postMessage(null);
            }));
        } else
          ce = function () {
            j(me, 0);
          };
        function We(U) {
          ((ee = U), J || ((J = !0), ce()));
        }
        function ke(U, ne) {
          te = j(function () {
            U(s.unstable_now());
          }, ne);
        }
        ((s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (U) {
            U.callback = null;
          }),
          (s.unstable_continueExecution = function () {
            P || O || ((P = !0), We(H));
          }),
          (s.unstable_forceFrameRate = function (U) {
            0 > U || 125 < U
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (ie = 0 < U ? Math.floor(1e3 / U) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return I;
          }),
          (s.unstable_getFirstCallbackNode = function () {
            return i(h);
          }),
          (s.unstable_next = function (U) {
            switch (I) {
              case 1:
              case 2:
              case 3:
                var ne = 3;
                break;
              default:
                ne = I;
            }
            var q = I;
            I = ne;
            try {
              return U();
            } finally {
              I = q;
            }
          }),
          (s.unstable_pauseExecution = function () {}),
          (s.unstable_requestPaint = function () {}),
          (s.unstable_runWithPriority = function (U, ne) {
            switch (U) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                U = 3;
            }
            var q = I;
            I = U;
            try {
              return ne();
            } finally {
              I = q;
            }
          }),
          (s.unstable_scheduleCallback = function (U, ne, q) {
            var k = s.unstable_now();
            switch (
              (typeof q == 'object' && q !== null
                ? ((q = q.delay), (q = typeof q == 'number' && 0 < q ? k + q : k))
                : (q = k),
              U)
            ) {
              case 1:
                var T = -1;
                break;
              case 2:
                T = 250;
                break;
              case 5:
                T = 1073741823;
                break;
              case 4:
                T = 1e4;
                break;
              default:
                T = 5e3;
            }
            return (
              (T = q + T),
              (U = {
                id: v++,
                callback: ne,
                priorityLevel: U,
                startTime: q,
                expirationTime: T,
                sortIndex: -1,
              }),
              q > k
                ? ((U.sortIndex = q),
                  a(g, U),
                  i(h) === null && U === i(g) && (M ? (F(te), (te = -1)) : (M = !0), ke(B, q - k)))
                : ((U.sortIndex = T), a(h, U), P || O || ((P = !0), We(H))),
              U
            );
          }),
          (s.unstable_shouldYield = Z),
          (s.unstable_wrapCallback = function (U) {
            var ne = I;
            return function () {
              var q = I;
              I = ne;
              try {
                return U.apply(this, arguments);
              } finally {
                I = q;
              }
            };
          }));
      })(cs)),
    cs
  );
}
var _c;
function ed() {
  return (_c || ((_c = 1), (us.exports = Zf())), us.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kc;
function td() {
  if (kc) return ct;
  kc = 1;
  var s = Es(),
    a = ed();
  function i(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
      n < arguments.length;
      n++
    )
      t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var c = new Set(),
    d = {};
  function f(e, t) {
    (p(e, t), p(e + 'Capture', t));
  }
  function p(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var w = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    h = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    v = {},
    x = {};
  function I(e) {
    return h.call(x, e) ? !0 : h.call(v, e) ? !1 : g.test(e) ? (x[e] = !0) : ((v[e] = !0), !1);
  }
  function O(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function P(e, t, n, r) {
    if (t === null || typeof t > 'u' || O(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
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
  function M(e, t, n, r, l, o, u) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = u));
  }
  var j = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      j[e] = new M(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      j[t] = new M(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      j[e] = new M(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        j[e] = new M(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        j[e] = new M(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      j[e] = new M(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      j[e] = new M(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      j[e] = new M(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      j[e] = new M(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var F = /[\-:]([a-z])/g;
  function N(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(F, N);
      j[t] = new M(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(F, N);
        j[t] = new M(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(F, N);
      j[t] = new M(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      j[e] = new M(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (j.xlinkHref = new M('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      j[e] = new M(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function V(e, t, n, r) {
    var l = j.hasOwnProperty(t) ? j[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (P(t, n, l, r) && (n = null),
      r || l === null
        ? I(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var B = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    H = Symbol.for('react.element'),
    J = Symbol.for('react.portal'),
    ee = Symbol.for('react.fragment'),
    te = Symbol.for('react.strict_mode'),
    ie = Symbol.for('react.profiler'),
    ue = Symbol.for('react.provider'),
    Z = Symbol.for('react.context'),
    me = Symbol.for('react.forward_ref'),
    ce = Symbol.for('react.suspense'),
    Ee = Symbol.for('react.suspense_list'),
    Be = Symbol.for('react.memo'),
    We = Symbol.for('react.lazy'),
    ke = Symbol.for('react.offscreen'),
    U = Symbol.iterator;
  function ne(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (U && e[U]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var q = Object.assign,
    k;
  function T(e) {
    if (k === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        k = (t && t[1]) || '';
      }
    return (
      `
` +
      k +
      e
    );
  }
  var oe = !1;
  function fe(e, t) {
    if (!e || oe) return '';
    oe = !0;
    var n = Error.prepareStackTrace;
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
          } catch (C) {
            var r = C;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (C) {
            r = C;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (C) {
          r = C;
        }
        e();
      }
    } catch (C) {
      if (C && r && typeof C.stack == 'string') {
        for (
          var l = C.stack.split(`
`),
            o = r.stack.split(`
`),
            u = l.length - 1,
            m = o.length - 1;
          1 <= u && 0 <= m && l[u] !== o[m];
        )
          m--;
        for (; 1 <= u && 0 <= m; u--, m--)
          if (l[u] !== o[m]) {
            if (u !== 1 || m !== 1)
              do
                if ((u--, m--, 0 > m || l[u] !== o[m])) {
                  var y =
                    `
` + l[u].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      y.includes('<anonymous>') &&
                      (y = y.replace('<anonymous>', e.displayName)),
                    y
                  );
                }
              while (1 <= u && 0 <= m);
            break;
          }
      }
    } finally {
      ((oe = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? T(e) : '';
  }
  function ve(e) {
    switch (e.tag) {
      case 5:
        return T(e.type);
      case 16:
        return T('Lazy');
      case 13:
        return T('Suspense');
      case 19:
        return T('SuspenseList');
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
  function ye(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case ee:
        return 'Fragment';
      case J:
        return 'Portal';
      case ie:
        return 'Profiler';
      case te:
        return 'StrictMode';
      case ce:
        return 'Suspense';
      case Ee:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Z:
          return (e.displayName || 'Context') + '.Consumer';
        case ue:
          return (e._context.displayName || 'Context') + '.Provider';
        case me:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case Be:
          return ((t = e.displayName || null), t !== null ? t : ye(e.type) || 'Memo');
        case We:
          ((t = e._payload), (e = e._init));
          try {
            return ye(e(t));
          } catch {}
      }
    return null;
  }
  function Se(e) {
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
        return ye(t);
      case 8:
        return t === te ? 'StrictMode' : 'Mode';
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
  function ge(e) {
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
  function Ce(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Ye(e) {
    var t = Ce(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            ((r = '' + u), o.call(this, u));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = '' + u;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Sn(e) {
    e._valueTracker || (e._valueTracker = Ye(e));
  }
  function Et(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = Ce(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function En(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function xn(e, t) {
    var n = t.checked;
    return q({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function rl(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = ge(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      }));
  }
  function hr(e, t) {
    ((t = t.checked), t != null && V(e, 'checked', t, !1));
  }
  function De(e, t) {
    hr(e, t);
    var n = ge(t.value),
      r = t.type;
    if (n != null)
      r === 'number'
        ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
        : e.value !== '' + n && (e.value = '' + n);
    else if (r === 'submit' || r === 'reset') {
      e.removeAttribute('value');
      return;
    }
    (t.hasOwnProperty('value')
      ? Yt(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && Yt(e, t.type, ge(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function vr(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var r = t.type;
      if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
      ((t = '' + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== '' && (e.name = n));
  }
  function Yt(e, t, n) {
    (t !== 'number' || En(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var Xt = Array.isArray;
  function zt(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + ge(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function bn(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return q({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function ll(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(i(92));
        if (Xt(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: ge(n) };
  }
  function W(e, t) {
    var n = ge(t.value),
      r = ge(t.defaultValue);
    (n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r));
  }
  function G(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function de(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Ie(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? de(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var xt,
    Le = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
      else {
        for (
          xt = xt || document.createElement('div'),
            xt.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = xt.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Jt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var yr = {
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
    Zc = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(yr).forEach(function (e) {
    Zc.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (yr[t] = yr[e]));
    });
  });
  function Ts(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (yr.hasOwnProperty(e) && yr[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function Ls(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = Ts(n, t[n], r);
        (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var e0 = q(
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
  function go(e, t) {
    if (t) {
      if (e0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(i(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(i(62));
    }
  }
  function wo(e, t) {
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
  var _o = null;
  function ko(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var So = null,
    Bn = null,
    Qn = null;
  function Ms(e) {
    if ((e = Fr(e))) {
      if (typeof So != 'function') throw Error(i(280));
      var t = e.stateNode;
      t && ((t = Ol(t)), So(e.stateNode, e.type, t));
    }
  }
  function Rs(e) {
    Bn ? (Qn ? Qn.push(e) : (Qn = [e])) : (Bn = e);
  }
  function Ps() {
    if (Bn) {
      var e = Bn,
        t = Qn;
      if (((Qn = Bn = null), Ms(e), t)) for (e = 0; e < t.length; e++) Ms(t[e]);
    }
  }
  function Ds(e, t) {
    return e(t);
  }
  function As() {}
  var Eo = !1;
  function zs(e, t, n) {
    if (Eo) return e(t, n);
    Eo = !0;
    try {
      return Ds(e, t, n);
    } finally {
      ((Eo = !1), (Bn !== null || Qn !== null) && (As(), Ps()));
    }
  }
  function gr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ol(n);
    if (r === null) return null;
    n = r[t];
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
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(i(231, t, typeof n));
    return n;
  }
  var xo = !1;
  if (w)
    try {
      var wr = {};
      (Object.defineProperty(wr, 'passive', {
        get: function () {
          xo = !0;
        },
      }),
        window.addEventListener('test', wr, wr),
        window.removeEventListener('test', wr, wr));
    } catch {
      xo = !1;
    }
  function t0(e, t, n, r, l, o, u, m, y) {
    var C = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, C);
    } catch (R) {
      this.onError(R);
    }
  }
  var _r = !1,
    ol = null,
    il = !1,
    Co = null,
    n0 = {
      onError: function (e) {
        ((_r = !0), (ol = e));
      },
    };
  function r0(e, t, n, r, l, o, u, m, y) {
    ((_r = !1), (ol = null), t0.apply(n0, arguments));
  }
  function l0(e, t, n, r, l, o, u, m, y) {
    if ((r0.apply(this, arguments), _r)) {
      if (_r) {
        var C = ol;
        ((_r = !1), (ol = null));
      } else throw Error(i(198));
      il || ((il = !0), (Co = C));
    }
  }
  function Cn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ws(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Fs(e) {
    if (Cn(e) !== e) throw Error(i(188));
  }
  function o0(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Cn(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return (Fs(l), e);
          if (o === r) return (Fs(l), t);
          o = o.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== r.return) ((n = l), (r = o));
      else {
        for (var u = !1, m = l.child; m; ) {
          if (m === n) {
            ((u = !0), (n = l), (r = o));
            break;
          }
          if (m === r) {
            ((u = !0), (r = l), (n = o));
            break;
          }
          m = m.sibling;
        }
        if (!u) {
          for (m = o.child; m; ) {
            if (m === n) {
              ((u = !0), (n = o), (r = l));
              break;
            }
            if (m === r) {
              ((u = !0), (r = o), (n = l));
              break;
            }
            m = m.sibling;
          }
          if (!u) throw Error(i(189));
        }
      }
      if (n.alternate !== r) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function Vs(e) {
    return ((e = o0(e)), e !== null ? Us(e) : null);
  }
  function Us(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Us(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var bs = a.unstable_scheduleCallback,
    Bs = a.unstable_cancelCallback,
    i0 = a.unstable_shouldYield,
    s0 = a.unstable_requestPaint,
    Ae = a.unstable_now,
    a0 = a.unstable_getCurrentPriorityLevel,
    Io = a.unstable_ImmediatePriority,
    Qs = a.unstable_UserBlockingPriority,
    sl = a.unstable_NormalPriority,
    u0 = a.unstable_LowPriority,
    Hs = a.unstable_IdlePriority,
    al = null,
    Mt = null;
  function c0(e) {
    if (Mt && typeof Mt.onCommitFiberRoot == 'function')
      try {
        Mt.onCommitFiberRoot(al, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Ct = Math.clz32 ? Math.clz32 : p0,
    f0 = Math.log,
    d0 = Math.LN2;
  function p0(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((f0(e) / d0) | 0)) | 0);
  }
  var ul = 64,
    cl = 4194304;
  function kr(e) {
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
  function fl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var m = u & ~l;
      m !== 0 ? (r = kr(m)) : ((o &= u), o !== 0 && (r = kr(o)));
    } else ((u = n & ~l), u !== 0 ? (r = kr(u)) : o !== 0 && (r = kr(o)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - Ct(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function m0(e, t) {
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
  function h0(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes;
      0 < o;
    ) {
      var u = 31 - Ct(o),
        m = 1 << u,
        y = l[u];
      (y === -1
        ? ((m & n) === 0 || (m & r) !== 0) && (l[u] = m0(m, t))
        : y <= t && (e.expiredLanes |= m),
        (o &= ~m));
    }
  }
  function Oo(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function qs() {
    var e = ul;
    return ((ul <<= 1), (ul & 4194240) === 0 && (ul = 64), e);
  }
  function jo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Sr(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Ct(t)),
      (e[t] = n));
  }
  function v0(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Ct(n),
        o = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o));
    }
  }
  function No(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Ct(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var xe = 0;
  function $s(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Ks,
    To,
    Gs,
    Ys,
    Xs,
    Lo = !1,
    dl = [],
    Zt = null,
    en = null,
    tn = null,
    Er = new Map(),
    xr = new Map(),
    nn = [],
    y0 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function Js(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Zt = null;
        break;
      case 'dragenter':
      case 'dragleave':
        en = null;
        break;
      case 'mouseover':
      case 'mouseout':
        tn = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Er.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        xr.delete(t.pointerId);
    }
  }
  function Cr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = Fr(t)), t !== null && To(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function g0(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return ((Zt = Cr(Zt, e, t, n, r, l)), !0);
      case 'dragenter':
        return ((en = Cr(en, e, t, n, r, l)), !0);
      case 'mouseover':
        return ((tn = Cr(tn, e, t, n, r, l)), !0);
      case 'pointerover':
        var o = l.pointerId;
        return (Er.set(o, Cr(Er.get(o) || null, e, t, n, r, l)), !0);
      case 'gotpointercapture':
        return ((o = l.pointerId), xr.set(o, Cr(xr.get(o) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function Zs(e) {
    var t = In(e.target);
    if (t !== null) {
      var n = Cn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ws(n)), t !== null)) {
            ((e.blockedOn = t),
              Xs(e.priority, function () {
                Gs(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function pl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ro(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((_o = r), n.target.dispatchEvent(r), (_o = null));
      } else return ((t = Fr(n)), t !== null && To(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function ea(e, t, n) {
    pl(e) && n.delete(t);
  }
  function w0() {
    ((Lo = !1),
      Zt !== null && pl(Zt) && (Zt = null),
      en !== null && pl(en) && (en = null),
      tn !== null && pl(tn) && (tn = null),
      Er.forEach(ea),
      xr.forEach(ea));
  }
  function Ir(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Lo || ((Lo = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, w0)));
  }
  function Or(e) {
    function t(l) {
      return Ir(l, e);
    }
    if (0 < dl.length) {
      Ir(dl[0], e);
      for (var n = 1; n < dl.length; n++) {
        var r = dl[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Zt !== null && Ir(Zt, e),
        en !== null && Ir(en, e),
        tn !== null && Ir(tn, e),
        Er.forEach(t),
        xr.forEach(t),
        n = 0;
      n < nn.length;
      n++
    )
      ((r = nn[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < nn.length && ((n = nn[0]), n.blockedOn === null); )
      (Zs(n), n.blockedOn === null && nn.shift());
  }
  var Hn = B.ReactCurrentBatchConfig,
    ml = !0;
  function _0(e, t, n, r) {
    var l = xe,
      o = Hn.transition;
    Hn.transition = null;
    try {
      ((xe = 1), Mo(e, t, n, r));
    } finally {
      ((xe = l), (Hn.transition = o));
    }
  }
  function k0(e, t, n, r) {
    var l = xe,
      o = Hn.transition;
    Hn.transition = null;
    try {
      ((xe = 4), Mo(e, t, n, r));
    } finally {
      ((xe = l), (Hn.transition = o));
    }
  }
  function Mo(e, t, n, r) {
    if (ml) {
      var l = Ro(e, t, n, r);
      if (l === null) (Yo(e, t, r, hl, n), Js(e, r));
      else if (g0(l, e, t, n, r)) r.stopPropagation();
      else if ((Js(e, r), t & 4 && -1 < y0.indexOf(e))) {
        for (; l !== null; ) {
          var o = Fr(l);
          if (
            (o !== null && Ks(o), (o = Ro(e, t, n, r)), o === null && Yo(e, t, r, hl, n), o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Yo(e, t, r, null, n);
    }
  }
  var hl = null;
  function Ro(e, t, n, r) {
    if (((hl = null), (e = ko(r)), (e = In(e)), e !== null))
      if (((t = Cn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ws(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((hl = e), null);
  }
  function ta(e) {
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
        switch (a0()) {
          case Io:
            return 1;
          case Qs:
            return 4;
          case sl:
          case u0:
            return 16;
          case Hs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var rn = null,
    Po = null,
    vl = null;
  function na() {
    if (vl) return vl;
    var e,
      t = Po,
      n = t.length,
      r,
      l = 'value' in rn ? rn.value : rn.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[o - r]; r++);
    return (vl = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function yl(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function gl() {
    return !0;
  }
  function ra() {
    return !1;
  }
  function dt(e) {
    function t(n, r, l, o, u) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = u),
        (this.currentTarget = null));
      for (var m in e) e.hasOwnProperty(m) && ((n = e[m]), (this[m] = n ? n(o) : o[m]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? gl
          : ra),
        (this.isPropagationStopped = ra),
        this
      );
    }
    return (
      q(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = gl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = gl));
        },
        persist: function () {},
        isPersistent: gl,
      }),
      t
    );
  }
  var qn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Do = dt(qn),
    jr = q({}, qn, { view: 0, detail: 0 }),
    S0 = dt(jr),
    Ao,
    zo,
    Nr,
    wl = q({}, jr, {
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
          : (e !== Nr &&
              (Nr && e.type === 'mousemove'
                ? ((Ao = e.screenX - Nr.screenX), (zo = e.screenY - Nr.screenY))
                : (zo = Ao = 0),
              (Nr = e)),
            Ao);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : zo;
      },
    }),
    la = dt(wl),
    E0 = q({}, wl, { dataTransfer: 0 }),
    x0 = dt(E0),
    C0 = q({}, jr, { relatedTarget: 0 }),
    Wo = dt(C0),
    I0 = q({}, qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    O0 = dt(I0),
    j0 = q({}, qn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    N0 = dt(j0),
    T0 = q({}, qn, { data: 0 }),
    oa = dt(T0),
    L0 = {
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
    M0 = {
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
    R0 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function P0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = R0[e]) ? !!t[e] : !1;
  }
  function Fo() {
    return P0;
  }
  var D0 = q({}, jr, {
      key: function (e) {
        if (e.key) {
          var t = L0[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = yl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? M0[e.keyCode] || 'Unidentified'
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
        return e.type === 'keypress' ? yl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? yl(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    A0 = dt(D0),
    z0 = q({}, wl, {
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
    ia = dt(z0),
    W0 = q({}, jr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fo,
    }),
    F0 = dt(W0),
    V0 = q({}, qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    U0 = dt(V0),
    b0 = q({}, wl, {
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
    B0 = dt(b0),
    Q0 = [9, 13, 27, 32],
    Vo = w && 'CompositionEvent' in window,
    Tr = null;
  w && 'documentMode' in document && (Tr = document.documentMode);
  var H0 = w && 'TextEvent' in window && !Tr,
    sa = w && (!Vo || (Tr && 8 < Tr && 11 >= Tr)),
    aa = ' ',
    ua = !1;
  function ca(e, t) {
    switch (e) {
      case 'keyup':
        return Q0.indexOf(t.keyCode) !== -1;
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
  function fa(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var $n = !1;
  function q0(e, t) {
    switch (e) {
      case 'compositionend':
        return fa(t);
      case 'keypress':
        return t.which !== 32 ? null : ((ua = !0), aa);
      case 'textInput':
        return ((e = t.data), e === aa && ua ? null : e);
      default:
        return null;
    }
  }
  function $0(e, t) {
    if ($n)
      return e === 'compositionend' || (!Vo && ca(e, t))
        ? ((e = na()), (vl = Po = rn = null), ($n = !1), e)
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
        return sa && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var K0 = {
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
  function da(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!K0[e.type] : t === 'textarea';
  }
  function pa(e, t, n, r) {
    (Rs(r),
      (t = xl(t, 'onChange')),
      0 < t.length &&
        ((n = new Do('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Lr = null,
    Mr = null;
  function G0(e) {
    La(e, 0);
  }
  function _l(e) {
    var t = Jn(e);
    if (Et(t)) return e;
  }
  function Y0(e, t) {
    if (e === 'change') return t;
  }
  var ma = !1;
  if (w) {
    var Uo;
    if (w) {
      var bo = 'oninput' in document;
      if (!bo) {
        var ha = document.createElement('div');
        (ha.setAttribute('oninput', 'return;'), (bo = typeof ha.oninput == 'function'));
      }
      Uo = bo;
    } else Uo = !1;
    ma = Uo && (!document.documentMode || 9 < document.documentMode);
  }
  function va() {
    Lr && (Lr.detachEvent('onpropertychange', ya), (Mr = Lr = null));
  }
  function ya(e) {
    if (e.propertyName === 'value' && _l(Mr)) {
      var t = [];
      (pa(t, Mr, e, ko(e)), zs(G0, t));
    }
  }
  function X0(e, t, n) {
    e === 'focusin'
      ? (va(), (Lr = t), (Mr = n), Lr.attachEvent('onpropertychange', ya))
      : e === 'focusout' && va();
  }
  function J0(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return _l(Mr);
  }
  function Z0(e, t) {
    if (e === 'click') return _l(t);
  }
  function ef(e, t) {
    if (e === 'input' || e === 'change') return _l(t);
  }
  function tf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var It = typeof Object.is == 'function' ? Object.is : tf;
  function Rr(e, t) {
    if (It(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!h.call(t, l) || !It(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ga(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function wa(e, t) {
    var n = ga(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ga(n);
    }
  }
  function _a(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? _a(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function ka() {
    for (var e = window, t = En(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = En(e.document);
    }
    return t;
  }
  function Bo(e) {
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
  function nf(e) {
    var t = ka(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && _a(n.ownerDocument.documentElement, n)) {
      if (r !== null && Bo(n)) {
        if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
          ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          ((r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = wa(n, o)));
          var u = wa(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var rf = w && 'documentMode' in document && 11 >= document.documentMode,
    Kn = null,
    Qo = null,
    Pr = null,
    Ho = !1;
  function Sa(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ho ||
      Kn == null ||
      Kn !== En(r) ||
      ((r = Kn),
      'selectionStart' in r && Bo(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Pr && Rr(Pr, r)) ||
        ((Pr = r),
        (r = xl(Qo, 'onSelect')),
        0 < r.length &&
          ((t = new Do('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Kn))));
  }
  function kl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var Gn = {
      animationend: kl('Animation', 'AnimationEnd'),
      animationiteration: kl('Animation', 'AnimationIteration'),
      animationstart: kl('Animation', 'AnimationStart'),
      transitionend: kl('Transition', 'TransitionEnd'),
    },
    qo = {},
    Ea = {};
  w &&
    ((Ea = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Gn.animationend.animation,
      delete Gn.animationiteration.animation,
      delete Gn.animationstart.animation),
    'TransitionEvent' in window || delete Gn.transitionend.transition);
  function Sl(e) {
    if (qo[e]) return qo[e];
    if (!Gn[e]) return e;
    var t = Gn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ea) return (qo[e] = t[n]);
    return e;
  }
  var xa = Sl('animationend'),
    Ca = Sl('animationiteration'),
    Ia = Sl('animationstart'),
    Oa = Sl('transitionend'),
    ja = new Map(),
    Na =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function ln(e, t) {
    (ja.set(e, t), f(t, [e]));
  }
  for (var $o = 0; $o < Na.length; $o++) {
    var Ko = Na[$o],
      lf = Ko.toLowerCase(),
      of = Ko[0].toUpperCase() + Ko.slice(1);
    ln(lf, 'on' + of);
  }
  (ln(xa, 'onAnimationEnd'),
    ln(Ca, 'onAnimationIteration'),
    ln(Ia, 'onAnimationStart'),
    ln('dblclick', 'onDoubleClick'),
    ln('focusin', 'onFocus'),
    ln('focusout', 'onBlur'),
    ln(Oa, 'onTransitionEnd'),
    p('onMouseEnter', ['mouseout', 'mouseover']),
    p('onMouseLeave', ['mouseout', 'mouseover']),
    p('onPointerEnter', ['pointerout', 'pointerover']),
    p('onPointerLeave', ['pointerout', 'pointerover']),
    f('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    f(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    f('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    f('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    f(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    f(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var Dr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    sf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Dr));
  function Ta(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n), l0(r, t, void 0, e), (e.currentTarget = null));
  }
  function La(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var m = r[u],
              y = m.instance,
              C = m.currentTarget;
            if (((m = m.listener), y !== o && l.isPropagationStopped())) break e;
            (Ta(l, m, C), (o = y));
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((m = r[u]),
              (y = m.instance),
              (C = m.currentTarget),
              (m = m.listener),
              y !== o && l.isPropagationStopped())
            )
              break e;
            (Ta(l, m, C), (o = y));
          }
      }
    }
    if (il) throw ((e = Co), (il = !1), (Co = null), e);
  }
  function je(e, t) {
    var n = t[ni];
    n === void 0 && (n = t[ni] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Ma(t, e, 2, !1), n.add(r));
  }
  function Go(e, t, n) {
    var r = 0;
    (t && (r |= 4), Ma(n, e, r, t));
  }
  var El = '_reactListening' + Math.random().toString(36).slice(2);
  function Ar(e) {
    if (!e[El]) {
      ((e[El] = !0),
        c.forEach(function (n) {
          n !== 'selectionchange' && (sf.has(n) || Go(n, !1, e), Go(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[El] || ((t[El] = !0), Go('selectionchange', !1, t));
    }
  }
  function Ma(e, t, n, r) {
    switch (ta(t)) {
      case 1:
        var l = _0;
        break;
      case 4:
        l = k0;
        break;
      default:
        l = Mo;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !xo || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function Yo(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var m = r.stateNode.containerInfo;
          if (m === l || (m.nodeType === 8 && m.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var y = u.tag;
              if (
                (y === 3 || y === 4) &&
                ((y = u.stateNode.containerInfo),
                y === l || (y.nodeType === 8 && y.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; m !== null; ) {
            if (((u = In(m)), u === null)) return;
            if (((y = u.tag), y === 5 || y === 6)) {
              r = o = u;
              continue e;
            }
            m = m.parentNode;
          }
        }
        r = r.return;
      }
    zs(function () {
      var C = o,
        R = ko(n),
        D = [];
      e: {
        var L = ja.get(e);
        if (L !== void 0) {
          var Q = Do,
            K = e;
          switch (e) {
            case 'keypress':
              if (yl(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              Q = A0;
              break;
            case 'focusin':
              ((K = 'focus'), (Q = Wo));
              break;
            case 'focusout':
              ((K = 'blur'), (Q = Wo));
              break;
            case 'beforeblur':
            case 'afterblur':
              Q = Wo;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              Q = la;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              Q = x0;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              Q = F0;
              break;
            case xa:
            case Ca:
            case Ia:
              Q = O0;
              break;
            case Oa:
              Q = U0;
              break;
            case 'scroll':
              Q = S0;
              break;
            case 'wheel':
              Q = B0;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              Q = N0;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              Q = ia;
          }
          var Y = (t & 4) !== 0,
            ze = !Y && e === 'scroll',
            S = Y ? (L !== null ? L + 'Capture' : null) : L;
          Y = [];
          for (var _ = C, E; _ !== null; ) {
            E = _;
            var A = E.stateNode;
            if (
              (E.tag === 5 &&
                A !== null &&
                ((E = A), S !== null && ((A = gr(_, S)), A != null && Y.push(zr(_, A, E)))),
              ze)
            )
              break;
            _ = _.return;
          }
          0 < Y.length && ((L = new Q(L, K, null, n, R)), D.push({ event: L, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((L = e === 'mouseover' || e === 'pointerover'),
            (Q = e === 'mouseout' || e === 'pointerout'),
            L && n !== _o && (K = n.relatedTarget || n.fromElement) && (In(K) || K[Wt]))
          )
            break e;
          if (
            (Q || L) &&
            ((L =
              R.window === R
                ? R
                : (L = R.ownerDocument)
                  ? L.defaultView || L.parentWindow
                  : window),
            Q
              ? ((K = n.relatedTarget || n.toElement),
                (Q = C),
                (K = K ? In(K) : null),
                K !== null &&
                  ((ze = Cn(K)), K !== ze || (K.tag !== 5 && K.tag !== 6)) &&
                  (K = null))
              : ((Q = null), (K = C)),
            Q !== K)
          ) {
            if (
              ((Y = la),
              (A = 'onMouseLeave'),
              (S = 'onMouseEnter'),
              (_ = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((Y = ia), (A = 'onPointerLeave'), (S = 'onPointerEnter'), (_ = 'pointer')),
              (ze = Q == null ? L : Jn(Q)),
              (E = K == null ? L : Jn(K)),
              (L = new Y(A, _ + 'leave', Q, n, R)),
              (L.target = ze),
              (L.relatedTarget = E),
              (A = null),
              In(R) === C &&
                ((Y = new Y(S, _ + 'enter', K, n, R)),
                (Y.target = E),
                (Y.relatedTarget = ze),
                (A = Y)),
              (ze = A),
              Q && K)
            )
              t: {
                for (Y = Q, S = K, _ = 0, E = Y; E; E = Yn(E)) _++;
                for (E = 0, A = S; A; A = Yn(A)) E++;
                for (; 0 < _ - E; ) ((Y = Yn(Y)), _--);
                for (; 0 < E - _; ) ((S = Yn(S)), E--);
                for (; _--; ) {
                  if (Y === S || (S !== null && Y === S.alternate)) break t;
                  ((Y = Yn(Y)), (S = Yn(S)));
                }
                Y = null;
              }
            else Y = null;
            (Q !== null && Ra(D, L, Q, Y, !1), K !== null && ze !== null && Ra(D, ze, K, Y, !0));
          }
        }
        e: {
          if (
            ((L = C ? Jn(C) : window),
            (Q = L.nodeName && L.nodeName.toLowerCase()),
            Q === 'select' || (Q === 'input' && L.type === 'file'))
          )
            var X = Y0;
          else if (da(L))
            if (ma) X = ef;
            else {
              X = J0;
              var re = X0;
            }
          else
            (Q = L.nodeName) &&
              Q.toLowerCase() === 'input' &&
              (L.type === 'checkbox' || L.type === 'radio') &&
              (X = Z0);
          if (X && (X = X(e, C))) {
            pa(D, X, n, R);
            break e;
          }
          (re && re(e, L, C),
            e === 'focusout' &&
              (re = L._wrapperState) &&
              re.controlled &&
              L.type === 'number' &&
              Yt(L, 'number', L.value));
        }
        switch (((re = C ? Jn(C) : window), e)) {
          case 'focusin':
            (da(re) || re.contentEditable === 'true') && ((Kn = re), (Qo = C), (Pr = null));
            break;
          case 'focusout':
            Pr = Qo = Kn = null;
            break;
          case 'mousedown':
            Ho = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Ho = !1), Sa(D, n, R));
            break;
          case 'selectionchange':
            if (rf) break;
          case 'keydown':
          case 'keyup':
            Sa(D, n, R);
        }
        var le;
        if (Vo)
          e: {
            switch (e) {
              case 'compositionstart':
                var ae = 'onCompositionStart';
                break e;
              case 'compositionend':
                ae = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                ae = 'onCompositionUpdate';
                break e;
            }
            ae = void 0;
          }
        else
          $n
            ? ca(e, n) && (ae = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (ae = 'onCompositionStart');
        (ae &&
          (sa &&
            n.locale !== 'ko' &&
            ($n || ae !== 'onCompositionStart'
              ? ae === 'onCompositionEnd' && $n && (le = na())
              : ((rn = R), (Po = 'value' in rn ? rn.value : rn.textContent), ($n = !0))),
          (re = xl(C, ae)),
          0 < re.length &&
            ((ae = new oa(ae, e, null, n, R)),
            D.push({ event: ae, listeners: re }),
            le ? (ae.data = le) : ((le = fa(n)), le !== null && (ae.data = le)))),
          (le = H0 ? q0(e, n) : $0(e, n)) &&
            ((C = xl(C, 'onBeforeInput')),
            0 < C.length &&
              ((R = new oa('onBeforeInput', 'beforeinput', null, n, R)),
              D.push({ event: R, listeners: C }),
              (R.data = le))));
      }
      La(D, t);
    });
  }
  function zr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function xl(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      (l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = gr(e, n)),
        o != null && r.unshift(zr(e, o, l)),
        (o = gr(e, t)),
        o != null && r.push(zr(e, o, l))),
        (e = e.return));
    }
    return r;
  }
  function Yn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ra(e, t, n, r, l) {
    for (var o = t._reactName, u = []; n !== null && n !== r; ) {
      var m = n,
        y = m.alternate,
        C = m.stateNode;
      if (y !== null && y === r) break;
      (m.tag === 5 &&
        C !== null &&
        ((m = C),
        l
          ? ((y = gr(n, o)), y != null && u.unshift(zr(n, y, m)))
          : l || ((y = gr(n, o)), y != null && u.push(zr(n, y, m)))),
        (n = n.return));
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var af = /\r\n?/g,
    uf = /\u0000|\uFFFD/g;
  function Pa(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        af,
        `
`
      )
      .replace(uf, '');
  }
  function Cl(e, t, n) {
    if (((t = Pa(t)), Pa(e) !== t && n)) throw Error(i(425));
  }
  function Il() {}
  var Xo = null,
    Jo = null;
  function Zo(e, t) {
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
  var ei = typeof setTimeout == 'function' ? setTimeout : void 0,
    cf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Da = typeof Promise == 'function' ? Promise : void 0,
    ff =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Da < 'u'
          ? function (e) {
              return Da.resolve(null).then(e).catch(df);
            }
          : ei;
  function df(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ti(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$')) {
          if (r === 0) {
            (e.removeChild(l), Or(t));
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = l;
    } while (n);
    Or(t);
  }
  function on(e) {
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
  function Aa(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '$' || n === '$!' || n === '$?') {
          if (t === 0) return e;
          t--;
        } else n === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Xn = Math.random().toString(36).slice(2),
    Rt = '__reactFiber$' + Xn,
    Wr = '__reactProps$' + Xn,
    Wt = '__reactContainer$' + Xn,
    ni = '__reactEvents$' + Xn,
    pf = '__reactListeners$' + Xn,
    mf = '__reactHandles$' + Xn;
  function In(e) {
    var t = e[Rt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Wt] || n[Rt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Aa(e); e !== null; ) {
            if ((n = e[Rt])) return n;
            e = Aa(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Fr(e) {
    return (
      (e = e[Rt] || e[Wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Jn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Ol(e) {
    return e[Wr] || null;
  }
  var ri = [],
    Zn = -1;
  function sn(e) {
    return { current: e };
  }
  function Ne(e) {
    0 > Zn || ((e.current = ri[Zn]), (ri[Zn] = null), Zn--);
  }
  function Oe(e, t) {
    (Zn++, (ri[Zn] = e.current), (e.current = t));
  }
  var an = {},
    Xe = sn(an),
    ot = sn(!1),
    On = an;
  function er(e, t) {
    var n = e.type.contextTypes;
    if (!n) return an;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function it(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function jl() {
    (Ne(ot), Ne(Xe));
  }
  function za(e, t, n) {
    if (Xe.current !== an) throw Error(i(168));
    (Oe(Xe, t), Oe(ot, n));
  }
  function Wa(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(i(108, Se(e) || 'Unknown', l));
    return q({}, n, r);
  }
  function Nl(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || an),
      (On = Xe.current),
      Oe(Xe, e),
      Oe(ot, ot.current),
      !0
    );
  }
  function Fa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(i(169));
    (n
      ? ((e = Wa(e, t, On)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Ne(ot),
        Ne(Xe),
        Oe(Xe, e))
      : Ne(ot),
      Oe(ot, n));
  }
  var Ft = null,
    Tl = !1,
    li = !1;
  function Va(e) {
    Ft === null ? (Ft = [e]) : Ft.push(e);
  }
  function hf(e) {
    ((Tl = !0), Va(e));
  }
  function un() {
    if (!li && Ft !== null) {
      li = !0;
      var e = 0,
        t = xe;
      try {
        var n = Ft;
        for (xe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Ft = null), (Tl = !1));
      } catch (l) {
        throw (Ft !== null && (Ft = Ft.slice(e + 1)), bs(Io, un), l);
      } finally {
        ((xe = t), (li = !1));
      }
    }
    return null;
  }
  var tr = [],
    nr = 0,
    Ll = null,
    Ml = 0,
    yt = [],
    gt = 0,
    jn = null,
    Vt = 1,
    Ut = '';
  function Nn(e, t) {
    ((tr[nr++] = Ml), (tr[nr++] = Ll), (Ll = e), (Ml = t));
  }
  function Ua(e, t, n) {
    ((yt[gt++] = Vt), (yt[gt++] = Ut), (yt[gt++] = jn), (jn = e));
    var r = Vt;
    e = Ut;
    var l = 32 - Ct(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var o = 32 - Ct(t) + l;
    if (30 < o) {
      var u = l - (l % 5);
      ((o = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (Vt = (1 << (32 - Ct(t) + l)) | (n << l) | r),
        (Ut = o + e));
    } else ((Vt = (1 << o) | (n << l) | r), (Ut = e));
  }
  function oi(e) {
    e.return !== null && (Nn(e, 1), Ua(e, 1, 0));
  }
  function ii(e) {
    for (; e === Ll; ) ((Ll = tr[--nr]), (tr[nr] = null), (Ml = tr[--nr]), (tr[nr] = null));
    for (; e === jn; )
      ((jn = yt[--gt]),
        (yt[gt] = null),
        (Ut = yt[--gt]),
        (yt[gt] = null),
        (Vt = yt[--gt]),
        (yt[gt] = null));
  }
  var pt = null,
    mt = null,
    Te = !1,
    Ot = null;
  function ba(e, t) {
    var n = St(5, null, null, 0);
    ((n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Ba(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (pt = e), (mt = on(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (pt = e), (mt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = jn !== null ? { id: Vt, overflow: Ut } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = St(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (pt = e),
              (mt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function si(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ai(e) {
    if (Te) {
      var t = mt;
      if (t) {
        var n = t;
        if (!Ba(e, t)) {
          if (si(e)) throw Error(i(418));
          t = on(n.nextSibling);
          var r = pt;
          t && Ba(e, t) ? ba(r, n) : ((e.flags = (e.flags & -4097) | 2), (Te = !1), (pt = e));
        }
      } else {
        if (si(e)) throw Error(i(418));
        ((e.flags = (e.flags & -4097) | 2), (Te = !1), (pt = e));
      }
    }
  }
  function Qa(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    pt = e;
  }
  function Rl(e) {
    if (e !== pt) return !1;
    if (!Te) return (Qa(e), (Te = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !Zo(e.type, e.memoizedProps))),
      t && (t = mt))
    ) {
      if (si(e)) throw (Ha(), Error(i(418)));
      for (; t; ) (ba(e, t), (t = on(t.nextSibling)));
    }
    if ((Qa(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                mt = on(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        mt = null;
      }
    } else mt = pt ? on(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ha() {
    for (var e = mt; e; ) e = on(e.nextSibling);
  }
  function rr() {
    ((mt = pt = null), (Te = !1));
  }
  function ui(e) {
    Ot === null ? (Ot = [e]) : Ot.push(e);
  }
  var vf = B.ReactCurrentBatchConfig;
  function Vr(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(i(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(i(147, e));
        var l = r,
          o = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === o
          ? t.ref
          : ((t = function (u) {
              var m = l.refs;
              u === null ? delete m[o] : (m[o] = u);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != 'string') throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function Pl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        i(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      )
    );
  }
  function qa(e) {
    var t = e._init;
    return t(e._payload);
  }
  function $a(e) {
    function t(S, _) {
      if (e) {
        var E = S.deletions;
        E === null ? ((S.deletions = [_]), (S.flags |= 16)) : E.push(_);
      }
    }
    function n(S, _) {
      if (!e) return null;
      for (; _ !== null; ) (t(S, _), (_ = _.sibling));
      return null;
    }
    function r(S, _) {
      for (S = new Map(); _ !== null; )
        (_.key !== null ? S.set(_.key, _) : S.set(_.index, _), (_ = _.sibling));
      return S;
    }
    function l(S, _) {
      return ((S = yn(S, _)), (S.index = 0), (S.sibling = null), S);
    }
    function o(S, _, E) {
      return (
        (S.index = E),
        e
          ? ((E = S.alternate),
            E !== null ? ((E = E.index), E < _ ? ((S.flags |= 2), _) : E) : ((S.flags |= 2), _))
          : ((S.flags |= 1048576), _)
      );
    }
    function u(S) {
      return (e && S.alternate === null && (S.flags |= 2), S);
    }
    function m(S, _, E, A) {
      return _ === null || _.tag !== 6
        ? ((_ = es(E, S.mode, A)), (_.return = S), _)
        : ((_ = l(_, E)), (_.return = S), _);
    }
    function y(S, _, E, A) {
      var X = E.type;
      return X === ee
        ? R(S, _, E.props.children, A, E.key)
        : _ !== null &&
            (_.elementType === X ||
              (typeof X == 'object' && X !== null && X.$$typeof === We && qa(X) === _.type))
          ? ((A = l(_, E.props)), (A.ref = Vr(S, _, E)), (A.return = S), A)
          : ((A = lo(E.type, E.key, E.props, null, S.mode, A)),
            (A.ref = Vr(S, _, E)),
            (A.return = S),
            A);
    }
    function C(S, _, E, A) {
      return _ === null ||
        _.tag !== 4 ||
        _.stateNode.containerInfo !== E.containerInfo ||
        _.stateNode.implementation !== E.implementation
        ? ((_ = ts(E, S.mode, A)), (_.return = S), _)
        : ((_ = l(_, E.children || [])), (_.return = S), _);
    }
    function R(S, _, E, A, X) {
      return _ === null || _.tag !== 7
        ? ((_ = zn(E, S.mode, A, X)), (_.return = S), _)
        : ((_ = l(_, E)), (_.return = S), _);
    }
    function D(S, _, E) {
      if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
        return ((_ = es('' + _, S.mode, E)), (_.return = S), _);
      if (typeof _ == 'object' && _ !== null) {
        switch (_.$$typeof) {
          case H:
            return (
              (E = lo(_.type, _.key, _.props, null, S.mode, E)),
              (E.ref = Vr(S, null, _)),
              (E.return = S),
              E
            );
          case J:
            return ((_ = ts(_, S.mode, E)), (_.return = S), _);
          case We:
            var A = _._init;
            return D(S, A(_._payload), E);
        }
        if (Xt(_) || ne(_)) return ((_ = zn(_, S.mode, E, null)), (_.return = S), _);
        Pl(S, _);
      }
      return null;
    }
    function L(S, _, E, A) {
      var X = _ !== null ? _.key : null;
      if ((typeof E == 'string' && E !== '') || typeof E == 'number')
        return X !== null ? null : m(S, _, '' + E, A);
      if (typeof E == 'object' && E !== null) {
        switch (E.$$typeof) {
          case H:
            return E.key === X ? y(S, _, E, A) : null;
          case J:
            return E.key === X ? C(S, _, E, A) : null;
          case We:
            return ((X = E._init), L(S, _, X(E._payload), A));
        }
        if (Xt(E) || ne(E)) return X !== null ? null : R(S, _, E, A, null);
        Pl(S, E);
      }
      return null;
    }
    function Q(S, _, E, A, X) {
      if ((typeof A == 'string' && A !== '') || typeof A == 'number')
        return ((S = S.get(E) || null), m(_, S, '' + A, X));
      if (typeof A == 'object' && A !== null) {
        switch (A.$$typeof) {
          case H:
            return ((S = S.get(A.key === null ? E : A.key) || null), y(_, S, A, X));
          case J:
            return ((S = S.get(A.key === null ? E : A.key) || null), C(_, S, A, X));
          case We:
            var re = A._init;
            return Q(S, _, E, re(A._payload), X);
        }
        if (Xt(A) || ne(A)) return ((S = S.get(E) || null), R(_, S, A, X, null));
        Pl(_, A);
      }
      return null;
    }
    function K(S, _, E, A) {
      for (
        var X = null, re = null, le = _, ae = (_ = 0), qe = null;
        le !== null && ae < E.length;
        ae++
      ) {
        le.index > ae ? ((qe = le), (le = null)) : (qe = le.sibling);
        var _e = L(S, le, E[ae], A);
        if (_e === null) {
          le === null && (le = qe);
          break;
        }
        (e && le && _e.alternate === null && t(S, le),
          (_ = o(_e, _, ae)),
          re === null ? (X = _e) : (re.sibling = _e),
          (re = _e),
          (le = qe));
      }
      if (ae === E.length) return (n(S, le), Te && Nn(S, ae), X);
      if (le === null) {
        for (; ae < E.length; ae++)
          ((le = D(S, E[ae], A)),
            le !== null &&
              ((_ = o(le, _, ae)), re === null ? (X = le) : (re.sibling = le), (re = le)));
        return (Te && Nn(S, ae), X);
      }
      for (le = r(S, le); ae < E.length; ae++)
        ((qe = Q(le, S, ae, E[ae], A)),
          qe !== null &&
            (e && qe.alternate !== null && le.delete(qe.key === null ? ae : qe.key),
            (_ = o(qe, _, ae)),
            re === null ? (X = qe) : (re.sibling = qe),
            (re = qe)));
      return (
        e &&
          le.forEach(function (gn) {
            return t(S, gn);
          }),
        Te && Nn(S, ae),
        X
      );
    }
    function Y(S, _, E, A) {
      var X = ne(E);
      if (typeof X != 'function') throw Error(i(150));
      if (((E = X.call(E)), E == null)) throw Error(i(151));
      for (
        var re = (X = null), le = _, ae = (_ = 0), qe = null, _e = E.next();
        le !== null && !_e.done;
        ae++, _e = E.next()
      ) {
        le.index > ae ? ((qe = le), (le = null)) : (qe = le.sibling);
        var gn = L(S, le, _e.value, A);
        if (gn === null) {
          le === null && (le = qe);
          break;
        }
        (e && le && gn.alternate === null && t(S, le),
          (_ = o(gn, _, ae)),
          re === null ? (X = gn) : (re.sibling = gn),
          (re = gn),
          (le = qe));
      }
      if (_e.done) return (n(S, le), Te && Nn(S, ae), X);
      if (le === null) {
        for (; !_e.done; ae++, _e = E.next())
          ((_e = D(S, _e.value, A)),
            _e !== null &&
              ((_ = o(_e, _, ae)), re === null ? (X = _e) : (re.sibling = _e), (re = _e)));
        return (Te && Nn(S, ae), X);
      }
      for (le = r(S, le); !_e.done; ae++, _e = E.next())
        ((_e = Q(le, S, ae, _e.value, A)),
          _e !== null &&
            (e && _e.alternate !== null && le.delete(_e.key === null ? ae : _e.key),
            (_ = o(_e, _, ae)),
            re === null ? (X = _e) : (re.sibling = _e),
            (re = _e)));
      return (
        e &&
          le.forEach(function (Gf) {
            return t(S, Gf);
          }),
        Te && Nn(S, ae),
        X
      );
    }
    function ze(S, _, E, A) {
      if (
        (typeof E == 'object' &&
          E !== null &&
          E.type === ee &&
          E.key === null &&
          (E = E.props.children),
        typeof E == 'object' && E !== null)
      ) {
        switch (E.$$typeof) {
          case H:
            e: {
              for (var X = E.key, re = _; re !== null; ) {
                if (re.key === X) {
                  if (((X = E.type), X === ee)) {
                    if (re.tag === 7) {
                      (n(S, re.sibling), (_ = l(re, E.props.children)), (_.return = S), (S = _));
                      break e;
                    }
                  } else if (
                    re.elementType === X ||
                    (typeof X == 'object' && X !== null && X.$$typeof === We && qa(X) === re.type)
                  ) {
                    (n(S, re.sibling),
                      (_ = l(re, E.props)),
                      (_.ref = Vr(S, re, E)),
                      (_.return = S),
                      (S = _));
                    break e;
                  }
                  n(S, re);
                  break;
                } else t(S, re);
                re = re.sibling;
              }
              E.type === ee
                ? ((_ = zn(E.props.children, S.mode, A, E.key)), (_.return = S), (S = _))
                : ((A = lo(E.type, E.key, E.props, null, S.mode, A)),
                  (A.ref = Vr(S, _, E)),
                  (A.return = S),
                  (S = A));
            }
            return u(S);
          case J:
            e: {
              for (re = E.key; _ !== null; ) {
                if (_.key === re)
                  if (
                    _.tag === 4 &&
                    _.stateNode.containerInfo === E.containerInfo &&
                    _.stateNode.implementation === E.implementation
                  ) {
                    (n(S, _.sibling), (_ = l(_, E.children || [])), (_.return = S), (S = _));
                    break e;
                  } else {
                    n(S, _);
                    break;
                  }
                else t(S, _);
                _ = _.sibling;
              }
              ((_ = ts(E, S.mode, A)), (_.return = S), (S = _));
            }
            return u(S);
          case We:
            return ((re = E._init), ze(S, _, re(E._payload), A));
        }
        if (Xt(E)) return K(S, _, E, A);
        if (ne(E)) return Y(S, _, E, A);
        Pl(S, E);
      }
      return (typeof E == 'string' && E !== '') || typeof E == 'number'
        ? ((E = '' + E),
          _ !== null && _.tag === 6
            ? (n(S, _.sibling), (_ = l(_, E)), (_.return = S), (S = _))
            : (n(S, _), (_ = es(E, S.mode, A)), (_.return = S), (S = _)),
          u(S))
        : n(S, _);
    }
    return ze;
  }
  var lr = $a(!0),
    Ka = $a(!1),
    Dl = sn(null),
    Al = null,
    or = null,
    ci = null;
  function fi() {
    ci = or = Al = null;
  }
  function di(e) {
    var t = Dl.current;
    (Ne(Dl), (e._currentValue = t));
  }
  function pi(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function ir(e, t) {
    ((Al = e),
      (ci = or = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (st = !0), (e.firstContext = null)));
  }
  function wt(e) {
    var t = e._currentValue;
    if (ci !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), or === null)) {
        if (Al === null) throw Error(i(308));
        ((or = e), (Al.dependencies = { lanes: 0, firstContext: e }));
      } else or = or.next = e;
    return t;
  }
  var Tn = null;
  function mi(e) {
    Tn === null ? (Tn = [e]) : Tn.push(e);
  }
  function Ga(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), mi(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      bt(e, r)
    );
  }
  function bt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var cn = !1;
  function hi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ya(e, t) {
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
  function Bt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function fn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (we & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        bt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), mi(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      bt(e, n)
    );
  }
  function zl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), No(e, n));
    }
  }
  function Xa(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (o === null ? (l = o = u) : (o = o.next = u), (n = n.next));
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function Wl(e, t, n, r) {
    var l = e.updateQueue;
    cn = !1;
    var o = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      m = l.shared.pending;
    if (m !== null) {
      l.shared.pending = null;
      var y = m,
        C = y.next;
      ((y.next = null), u === null ? (o = C) : (u.next = C), (u = y));
      var R = e.alternate;
      R !== null &&
        ((R = R.updateQueue),
        (m = R.lastBaseUpdate),
        m !== u && (m === null ? (R.firstBaseUpdate = C) : (m.next = C), (R.lastBaseUpdate = y)));
    }
    if (o !== null) {
      var D = l.baseState;
      ((u = 0), (R = C = y = null), (m = o));
      do {
        var L = m.lane,
          Q = m.eventTime;
        if ((r & L) === L) {
          R !== null &&
            (R = R.next =
              {
                eventTime: Q,
                lane: 0,
                tag: m.tag,
                payload: m.payload,
                callback: m.callback,
                next: null,
              });
          e: {
            var K = e,
              Y = m;
            switch (((L = t), (Q = n), Y.tag)) {
              case 1:
                if (((K = Y.payload), typeof K == 'function')) {
                  D = K.call(Q, D, L);
                  break e;
                }
                D = K;
                break e;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = Y.payload), (L = typeof K == 'function' ? K.call(Q, D, L) : K), L == null)
                )
                  break e;
                D = q({}, D, L);
                break e;
              case 2:
                cn = !0;
            }
          }
          m.callback !== null &&
            m.lane !== 0 &&
            ((e.flags |= 64), (L = l.effects), L === null ? (l.effects = [m]) : L.push(m));
        } else
          ((Q = {
            eventTime: Q,
            lane: L,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null,
          }),
            R === null ? ((C = R = Q), (y = D)) : (R = R.next = Q),
            (u |= L));
        if (((m = m.next), m === null)) {
          if (((m = l.shared.pending), m === null)) break;
          ((L = m),
            (m = L.next),
            (L.next = null),
            (l.lastBaseUpdate = L),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (R === null && (y = D),
        (l.baseState = y),
        (l.firstBaseUpdate = C),
        (l.lastBaseUpdate = R),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((u |= l.lane), (l = l.next));
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      ((Rn |= u), (e.lanes = u), (e.memoizedState = D));
    }
  }
  function Ja(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != 'function')) throw Error(i(191, l));
          l.call(r);
        }
      }
  }
  var Ur = {},
    Pt = sn(Ur),
    br = sn(Ur),
    Br = sn(Ur);
  function Ln(e) {
    if (e === Ur) throw Error(i(174));
    return e;
  }
  function vi(e, t) {
    switch ((Oe(Br, t), Oe(br, e), Oe(Pt, Ur), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ie(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ie(t, e)));
    }
    (Ne(Pt), Oe(Pt, t));
  }
  function sr() {
    (Ne(Pt), Ne(br), Ne(Br));
  }
  function Za(e) {
    Ln(Br.current);
    var t = Ln(Pt.current),
      n = Ie(t, e.type);
    t !== n && (Oe(br, e), Oe(Pt, n));
  }
  function yi(e) {
    br.current === e && (Ne(Pt), Ne(br));
  }
  var Me = sn(0);
  function Fl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
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
  var gi = [];
  function wi() {
    for (var e = 0; e < gi.length; e++) gi[e]._workInProgressVersionPrimary = null;
    gi.length = 0;
  }
  var Vl = B.ReactCurrentDispatcher,
    _i = B.ReactCurrentBatchConfig,
    Mn = 0,
    Re = null,
    Ue = null,
    Qe = null,
    Ul = !1,
    Qr = !1,
    Hr = 0,
    yf = 0;
  function Je() {
    throw Error(i(321));
  }
  function ki(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!It(e[n], t[n])) return !1;
    return !0;
  }
  function Si(e, t, n, r, l, o) {
    if (
      ((Mn = o),
      (Re = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Vl.current = e === null || e.memoizedState === null ? kf : Sf),
      (e = n(r, l)),
      Qr)
    ) {
      o = 0;
      do {
        if (((Qr = !1), (Hr = 0), 25 <= o)) throw Error(i(301));
        ((o += 1), (Qe = Ue = null), (t.updateQueue = null), (Vl.current = Ef), (e = n(r, l)));
      } while (Qr);
    }
    if (
      ((Vl.current = Ql),
      (t = Ue !== null && Ue.next !== null),
      (Mn = 0),
      (Qe = Ue = Re = null),
      (Ul = !1),
      t)
    )
      throw Error(i(300));
    return e;
  }
  function Ei() {
    var e = Hr !== 0;
    return ((Hr = 0), e);
  }
  function Dt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Qe === null ? (Re.memoizedState = Qe = e) : (Qe = Qe.next = e), Qe);
  }
  function _t() {
    if (Ue === null) {
      var e = Re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ue.next;
    var t = Qe === null ? Re.memoizedState : Qe.next;
    if (t !== null) ((Qe = t), (Ue = e));
    else {
      if (e === null) throw Error(i(310));
      ((Ue = e),
        (e = {
          memoizedState: Ue.memoizedState,
          baseState: Ue.baseState,
          baseQueue: Ue.baseQueue,
          queue: Ue.queue,
          next: null,
        }),
        Qe === null ? (Re.memoizedState = Qe = e) : (Qe = Qe.next = e));
    }
    return Qe;
  }
  function qr(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function xi(e) {
    var t = _t(),
      n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var r = Ue,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        ((l.next = o.next), (o.next = u));
      }
      ((r.baseQueue = l = o), (n.pending = null));
    }
    if (l !== null) {
      ((o = l.next), (r = r.baseState));
      var m = (u = null),
        y = null,
        C = o;
      do {
        var R = C.lane;
        if ((Mn & R) === R)
          (y !== null &&
            (y = y.next =
              {
                lane: 0,
                action: C.action,
                hasEagerState: C.hasEagerState,
                eagerState: C.eagerState,
                next: null,
              }),
            (r = C.hasEagerState ? C.eagerState : e(r, C.action)));
        else {
          var D = {
            lane: R,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null,
          };
          (y === null ? ((m = y = D), (u = r)) : (y = y.next = D), (Re.lanes |= R), (Rn |= R));
        }
        C = C.next;
      } while (C !== null && C !== o);
      (y === null ? (u = r) : (y.next = m),
        It(r, t.memoizedState) || (st = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = y),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((o = l.lane), (Re.lanes |= o), (Rn |= o), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ci(e) {
    var t = _t(),
      n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do ((o = e(o, u.action)), (u = u.next));
      while (u !== l);
      (It(o, t.memoizedState) || (st = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, r];
  }
  function eu() {}
  function tu(e, t) {
    var n = Re,
      r = _t(),
      l = t(),
      o = !It(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (st = !0)),
      (r = r.queue),
      Ii(lu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Qe !== null && Qe.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), $r(9, ru.bind(null, n, r, l, t), void 0, null), He === null))
        throw Error(i(349));
      (Mn & 30) !== 0 || nu(n, t, l);
    }
    return l;
  }
  function nu(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Re.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Re.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ru(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ou(t) && iu(e));
  }
  function lu(e, t, n) {
    return n(function () {
      ou(t) && iu(e);
    });
  }
  function ou(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !It(e, n);
    } catch {
      return !0;
    }
  }
  function iu(e) {
    var t = bt(e, 1);
    t !== null && Lt(t, e, 1, -1);
  }
  function su(e) {
    var t = Dt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = _f.bind(null, Re, e)),
      [t.memoizedState, e]
    );
  }
  function $r(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Re.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Re.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function au() {
    return _t().memoizedState;
  }
  function bl(e, t, n, r) {
    var l = Dt();
    ((Re.flags |= e), (l.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function Bl(e, t, n, r) {
    var l = _t();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ue !== null) {
      var u = Ue.memoizedState;
      if (((o = u.destroy), r !== null && ki(r, u.deps))) {
        l.memoizedState = $r(t, n, o, r);
        return;
      }
    }
    ((Re.flags |= e), (l.memoizedState = $r(1 | t, n, o, r)));
  }
  function uu(e, t) {
    return bl(8390656, 8, e, t);
  }
  function Ii(e, t) {
    return Bl(2048, 8, e, t);
  }
  function cu(e, t) {
    return Bl(4, 2, e, t);
  }
  function fu(e, t) {
    return Bl(4, 4, e, t);
  }
  function du(e, t) {
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
  function pu(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), Bl(4, 4, du.bind(null, t, e), n));
  }
  function Oi() {}
  function mu(e, t) {
    var n = _t();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ki(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function hu(e, t) {
    var n = _t();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ki(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function vu(e, t, n) {
    return (Mn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (st = !0)), (e.memoizedState = n))
      : (It(n, t) || ((n = qs()), (Re.lanes |= n), (Rn |= n), (e.baseState = !0)), t);
  }
  function gf(e, t) {
    var n = xe;
    ((xe = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = _i.transition;
    _i.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((xe = n), (_i.transition = r));
    }
  }
  function yu() {
    return _t().memoizedState;
  }
  function wf(e, t, n) {
    var r = hn(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), gu(e)))
      wu(t, n);
    else if (((n = Ga(e, t, n, r)), n !== null)) {
      var l = nt();
      (Lt(n, e, r, l), _u(n, t, r));
    }
  }
  function _f(e, t, n) {
    var r = hn(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (gu(e)) wu(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var u = t.lastRenderedState,
            m = o(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = m), It(m, u))) {
            var y = t.interleaved;
            (y === null ? ((l.next = l), mi(t)) : ((l.next = y.next), (y.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Ga(e, t, l, r)), n !== null && ((l = nt()), Lt(n, e, r, l), _u(n, t, r)));
    }
  }
  function gu(e) {
    var t = e.alternate;
    return e === Re || (t !== null && t === Re);
  }
  function wu(e, t) {
    Qr = Ul = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function _u(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), No(e, n));
    }
  }
  var Ql = {
      readContext: wt,
      useCallback: Je,
      useContext: Je,
      useEffect: Je,
      useImperativeHandle: Je,
      useInsertionEffect: Je,
      useLayoutEffect: Je,
      useMemo: Je,
      useReducer: Je,
      useRef: Je,
      useState: Je,
      useDebugValue: Je,
      useDeferredValue: Je,
      useTransition: Je,
      useMutableSource: Je,
      useSyncExternalStore: Je,
      useId: Je,
      unstable_isNewReconciler: !1,
    },
    kf = {
      readContext: wt,
      useCallback: function (e, t) {
        return ((Dt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: wt,
      useEffect: uu,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), bl(4194308, 4, du.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return bl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return bl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Dt();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var r = Dt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = wf.bind(null, Re, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Dt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: su,
      useDebugValue: Oi,
      useDeferredValue: function (e) {
        return (Dt().memoizedState = e);
      },
      useTransition: function () {
        var e = su(!1),
          t = e[0];
        return ((e = gf.bind(null, e[1])), (Dt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Re,
          l = Dt();
        if (Te) {
          if (n === void 0) throw Error(i(407));
          n = n();
        } else {
          if (((n = t()), He === null)) throw Error(i(349));
          (Mn & 30) !== 0 || nu(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          uu(lu.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          $r(9, ru.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Dt(),
          t = He.identifierPrefix;
        if (Te) {
          var n = Ut,
            r = Vt;
          ((n = (r & ~(1 << (32 - Ct(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = Hr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':'));
        } else ((n = yf++), (t = ':' + t + 'r' + n.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Sf = {
      readContext: wt,
      useCallback: mu,
      useContext: wt,
      useEffect: Ii,
      useImperativeHandle: pu,
      useInsertionEffect: cu,
      useLayoutEffect: fu,
      useMemo: hu,
      useReducer: xi,
      useRef: au,
      useState: function () {
        return xi(qr);
      },
      useDebugValue: Oi,
      useDeferredValue: function (e) {
        var t = _t();
        return vu(t, Ue.memoizedState, e);
      },
      useTransition: function () {
        var e = xi(qr)[0],
          t = _t().memoizedState;
        return [e, t];
      },
      useMutableSource: eu,
      useSyncExternalStore: tu,
      useId: yu,
      unstable_isNewReconciler: !1,
    },
    Ef = {
      readContext: wt,
      useCallback: mu,
      useContext: wt,
      useEffect: Ii,
      useImperativeHandle: pu,
      useInsertionEffect: cu,
      useLayoutEffect: fu,
      useMemo: hu,
      useReducer: Ci,
      useRef: au,
      useState: function () {
        return Ci(qr);
      },
      useDebugValue: Oi,
      useDeferredValue: function (e) {
        var t = _t();
        return Ue === null ? (t.memoizedState = e) : vu(t, Ue.memoizedState, e);
      },
      useTransition: function () {
        var e = Ci(qr)[0],
          t = _t().memoizedState;
        return [e, t];
      },
      useMutableSource: eu,
      useSyncExternalStore: tu,
      useId: yu,
      unstable_isNewReconciler: !1,
    };
  function jt(e, t) {
    if (e && e.defaultProps) {
      ((t = q({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ji(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : q({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Hl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Cn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = nt(),
        l = hn(e),
        o = Bt(r, l);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = fn(e, o, l)),
        t !== null && (Lt(t, e, l, r), zl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = nt(),
        l = hn(e),
        o = Bt(r, l);
      ((o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = fn(e, o, l)),
        t !== null && (Lt(t, e, l, r), zl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = nt(),
        r = hn(e),
        l = Bt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = fn(e, l, r)),
        t !== null && (Lt(t, e, r, n), zl(t, e, r)));
    },
  };
  function ku(e, t, n, r, l, o, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, u)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Rr(n, r) || !Rr(l, o)
          : !0
    );
  }
  function Su(e, t, n) {
    var r = !1,
      l = an,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = wt(o))
        : ((l = it(t) ? On : Xe.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? er(e, l) : an)),
      (t = new t(n, o)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Hl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Eu(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Hl.enqueueReplaceState(t, t.state, null));
  }
  function Ni(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), hi(e));
    var o = t.contextType;
    (typeof o == 'object' && o !== null
      ? (l.context = wt(o))
      : ((o = it(t) ? On : Xe.current), (l.context = er(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == 'function' && (ji(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((t = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount(),
        t !== l.state && Hl.enqueueReplaceState(l, l.state, null),
        Wl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function ar(e, t) {
    try {
      var n = '',
        r = t;
      do ((n += ve(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Ti(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Li(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var xf = typeof WeakMap == 'function' ? WeakMap : Map;
  function xu(e, t, n) {
    ((n = Bt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Jl || ((Jl = !0), (qi = r)), Li(e, t));
      }),
      n
    );
  }
  function Cu(e, t, n) {
    ((n = Bt(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Li(e, t);
        }));
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == 'function' &&
        (n.callback = function () {
          (Li(e, t),
            typeof r != 'function' && (pn === null ? (pn = new Set([this])) : pn.add(this)));
          var u = t.stack;
          this.componentDidCatch(t.value, { componentStack: u !== null ? u : '' });
        }),
      n
    );
  }
  function Iu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new xf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Wf.bind(null, e, t, n)), t.then(e, e));
  }
  function Ou(e) {
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
  function ju(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = Bt(-1, 1)), (t.tag = 2), fn(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Cf = B.ReactCurrentOwner,
    st = !1;
  function tt(e, t, n, r) {
    t.child = e === null ? Ka(t, null, n, r) : lr(t, e.child, n, r);
  }
  function Nu(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      ir(t, l),
      (r = Si(e, t, n, r, o, l)),
      (n = Ei()),
      e !== null && !st
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Qt(e, t, l))
        : (Te && n && oi(t), (t.flags |= 1), tt(e, t, r, l), t.child)
    );
  }
  function Tu(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' &&
        !Zi(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Lu(e, t, o, r, l))
        : ((e = lo(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var u = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Rr), n(u, r) && e.ref === t.ref))
        return Qt(e, t, l);
    }
    return ((t.flags |= 1), (e = yn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Lu(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Rr(o, r) && e.ref === t.ref)
        if (((st = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (st = !0);
        else return ((t.lanes = e.lanes), Qt(e, t, l));
    }
    return Mi(e, t, n, r, l);
  }
  function Mu(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          Oe(cr, ht),
          (ht |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            Oe(cr, ht),
            (ht |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = o !== null ? o.baseLanes : n),
          Oe(cr, ht),
          (ht |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Oe(cr, ht),
        (ht |= r));
    return (tt(e, t, l, n), t.child);
  }
  function Ru(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Mi(e, t, n, r, l) {
    var o = it(n) ? On : Xe.current;
    return (
      (o = er(t, o)),
      ir(t, l),
      (n = Si(e, t, n, r, o, l)),
      (r = Ei()),
      e !== null && !st
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Qt(e, t, l))
        : (Te && r && oi(t), (t.flags |= 1), tt(e, t, n, l), t.child)
    );
  }
  function Pu(e, t, n, r, l) {
    if (it(n)) {
      var o = !0;
      Nl(t);
    } else o = !1;
    if ((ir(t, l), t.stateNode === null)) ($l(e, t), Su(t, n, r), Ni(t, n, r, l), (r = !0));
    else if (e === null) {
      var u = t.stateNode,
        m = t.memoizedProps;
      u.props = m;
      var y = u.context,
        C = n.contextType;
      typeof C == 'object' && C !== null
        ? (C = wt(C))
        : ((C = it(n) ? On : Xe.current), (C = er(t, C)));
      var R = n.getDerivedStateFromProps,
        D = typeof R == 'function' || typeof u.getSnapshotBeforeUpdate == 'function';
      (D ||
        (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof u.componentWillReceiveProps != 'function') ||
        ((m !== r || y !== C) && Eu(t, u, r, C)),
        (cn = !1));
      var L = t.memoizedState;
      ((u.state = L),
        Wl(t, r, u, l),
        (y = t.memoizedState),
        m !== r || L !== y || ot.current || cn
          ? (typeof R == 'function' && (ji(t, n, R, r), (y = t.memoizedState)),
            (m = cn || ku(t, n, m, r, L, y, C))
              ? (D ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = y)),
            (u.props = r),
            (u.state = y),
            (u.context = C),
            (r = m))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1)));
    } else {
      ((u = t.stateNode),
        Ya(e, t),
        (m = t.memoizedProps),
        (C = t.type === t.elementType ? m : jt(t.type, m)),
        (u.props = C),
        (D = t.pendingProps),
        (L = u.context),
        (y = n.contextType),
        typeof y == 'object' && y !== null
          ? (y = wt(y))
          : ((y = it(n) ? On : Xe.current), (y = er(t, y))));
      var Q = n.getDerivedStateFromProps;
      ((R = typeof Q == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
        (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof u.componentWillReceiveProps != 'function') ||
        ((m !== D || L !== y) && Eu(t, u, r, y)),
        (cn = !1),
        (L = t.memoizedState),
        (u.state = L),
        Wl(t, r, u, l));
      var K = t.memoizedState;
      m !== D || L !== K || ot.current || cn
        ? (typeof Q == 'function' && (ji(t, n, Q, r), (K = t.memoizedState)),
          (C = cn || ku(t, n, C, r, L, K, y) || !1)
            ? (R ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(r, K, y),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(r, K, y)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (m === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (m === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = K)),
          (u.props = r),
          (u.state = K),
          (u.context = y),
          (r = C))
        : (typeof u.componentDidUpdate != 'function' ||
            (m === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (m === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Ri(e, t, n, r, o, l);
  }
  function Ri(e, t, n, r, l, o) {
    Ru(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return (l && Fa(t, n, !1), Qt(e, t, o));
    ((r = t.stateNode), (Cf.current = t));
    var m = u && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = lr(t, e.child, null, o)), (t.child = lr(t, null, m, o)))
        : tt(e, t, m, o),
      (t.memoizedState = r.state),
      l && Fa(t, n, !0),
      t.child
    );
  }
  function Du(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? za(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && za(e, t.context, !1),
      vi(e, t.containerInfo));
  }
  function Au(e, t, n, r, l) {
    return (rr(), ui(l), (t.flags |= 256), tt(e, t, n, r), t.child);
  }
  var Pi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Di(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function zu(e, t, n) {
    var r = t.pendingProps,
      l = Me.current,
      o = !1,
      u = (t.flags & 128) !== 0,
      m;
    if (
      ((m = u) || (m = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      m ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      Oe(Me, l & 1),
      e === null)
    )
      return (
        ai(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((u = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (u = { mode: 'hidden', children: u }),
                (r & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = u))
                  : (o = oo(u, r, 0, null)),
                (e = zn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = Di(n)),
                (t.memoizedState = Pi),
                e)
              : Ai(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((m = l.dehydrated), m !== null)))
      return If(e, t, u, r, m, l, n);
    if (o) {
      ((o = r.fallback), (u = t.mode), (l = e.child), (m = l.sibling));
      var y = { mode: 'hidden', children: r.children };
      return (
        (u & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = y), (t.deletions = null))
          : ((r = yn(l, y)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        m !== null ? (o = yn(m, o)) : ((o = zn(o, u, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? Di(n)
            : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }),
        (o.memoizedState = u),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = Pi),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = yn(o, { mode: 'visible', children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Ai(e, t) {
    return (
      (t = oo({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ql(e, t, n, r) {
    return (
      r !== null && ui(r),
      lr(t, e.child, null, n),
      (e = Ai(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function If(e, t, n, r, l, o, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Ti(Error(i(422)))), ql(e, t, u, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = oo({ mode: 'visible', children: r.children }, l, 0, null)),
            (o = zn(o, l, u, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && lr(t, e.child, null, u),
            (t.child.memoizedState = Di(u)),
            (t.memoizedState = Pi),
            o);
    if ((t.mode & 1) === 0) return ql(e, t, u, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var m = r.dgst;
      return ((r = m), (o = Error(i(419))), (r = Ti(o, r, void 0)), ql(e, t, u, r));
    }
    if (((m = (u & e.childLanes) !== 0), st || m)) {
      if (((r = He), r !== null)) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (r.suspendedLanes | u)) !== 0 ? 0 : l),
          l !== 0 && l !== o.retryLane && ((o.retryLane = l), bt(e, l), Lt(r, e, l, -1)));
      }
      return (Ji(), (r = Ti(Error(i(421)))), ql(e, t, u, r));
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Ff.bind(null, e)), (l._reactRetry = t), null)
      : ((e = o.treeContext),
        (mt = on(l.nextSibling)),
        (pt = t),
        (Te = !0),
        (Ot = null),
        e !== null &&
          ((yt[gt++] = Vt),
          (yt[gt++] = Ut),
          (yt[gt++] = jn),
          (Vt = e.id),
          (Ut = e.overflow),
          (jn = t)),
        (t = Ai(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Wu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), pi(e.return, t, n));
  }
  function zi(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function Fu(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((tt(e, t, r.children, n), (r = Me.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Wu(e, n, t);
          else if (e.tag === 19) Wu(e, n, t);
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
      r &= 1;
    }
    if ((Oe(Me, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate), e !== null && Fl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            zi(t, !1, l, n, o));
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Fl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          zi(t, !0, n, null, o);
          break;
        case 'together':
          zi(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function $l(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Qt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Rn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = yn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = yn(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Of(e, t, n) {
    switch (t.tag) {
      case 3:
        (Du(t), rr());
        break;
      case 5:
        Za(t);
        break;
      case 1:
        it(t.type) && Nl(t);
        break;
      case 4:
        vi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (Oe(Dl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Oe(Me, Me.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? zu(e, t, n)
              : (Oe(Me, Me.current & 1), (e = Qt(e, t, n)), e !== null ? e.sibling : null);
        Oe(Me, Me.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Fu(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Oe(Me, Me.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Mu(e, t, n));
    }
    return Qt(e, t, n);
  }
  var Vu, Wi, Uu, bu;
  ((Vu = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (Wi = function () {}),
    (Uu = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), Ln(Pt.current));
        var o = null;
        switch (n) {
          case 'input':
            ((l = xn(e, l)), (r = xn(e, r)), (o = []));
            break;
          case 'select':
            ((l = q({}, l, { value: void 0 })), (r = q({}, r, { value: void 0 })), (o = []));
            break;
          case 'textarea':
            ((l = bn(e, l)), (r = bn(e, r)), (o = []));
            break;
          default:
            typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Il);
        }
        go(n, r);
        var u;
        n = null;
        for (C in l)
          if (!r.hasOwnProperty(C) && l.hasOwnProperty(C) && l[C] != null)
            if (C === 'style') {
              var m = l[C];
              for (u in m) m.hasOwnProperty(u) && (n || (n = {}), (n[u] = ''));
            } else
              C !== 'dangerouslySetInnerHTML' &&
                C !== 'children' &&
                C !== 'suppressContentEditableWarning' &&
                C !== 'suppressHydrationWarning' &&
                C !== 'autoFocus' &&
                (d.hasOwnProperty(C) ? o || (o = []) : (o = o || []).push(C, null));
        for (C in r) {
          var y = r[C];
          if (
            ((m = l != null ? l[C] : void 0),
            r.hasOwnProperty(C) && y !== m && (y != null || m != null))
          )
            if (C === 'style')
              if (m) {
                for (u in m)
                  !m.hasOwnProperty(u) ||
                    (y && y.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ''));
                for (u in y) y.hasOwnProperty(u) && m[u] !== y[u] && (n || (n = {}), (n[u] = y[u]));
              } else (n || (o || (o = []), o.push(C, n)), (n = y));
            else
              C === 'dangerouslySetInnerHTML'
                ? ((y = y ? y.__html : void 0),
                  (m = m ? m.__html : void 0),
                  y != null && m !== y && (o = o || []).push(C, y))
                : C === 'children'
                  ? (typeof y != 'string' && typeof y != 'number') || (o = o || []).push(C, '' + y)
                  : C !== 'suppressContentEditableWarning' &&
                    C !== 'suppressHydrationWarning' &&
                    (d.hasOwnProperty(C)
                      ? (y != null && C === 'onScroll' && je('scroll', e), o || m === y || (o = []))
                      : (o = o || []).push(C, y));
        }
        n && (o = o || []).push('style', n);
        var C = o;
        (t.updateQueue = C) && (t.flags |= 4);
      }
    }),
    (bu = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function Kr(e, t) {
    if (!Te)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; ) (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var r = null; n !== null; ) (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function jf(e, t, n) {
    var r = t.pendingProps;
    switch ((ii(t), t.tag)) {
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
        return (Ze(t), null);
      case 1:
        return (it(t.type) && jl(), Ze(t), null);
      case 3:
        return (
          (r = t.stateNode),
          sr(),
          Ne(ot),
          Ne(Xe),
          wi(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Rl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ot !== null && (Gi(Ot), (Ot = null)))),
          Wi(e, t),
          Ze(t),
          null
        );
      case 5:
        yi(t);
        var l = Ln(Br.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Uu(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(i(166));
            return (Ze(t), null);
          }
          if (((e = Ln(Pt.current)), Rl(t))) {
            ((r = t.stateNode), (n = t.type));
            var o = t.memoizedProps;
            switch (((r[Rt] = t), (r[Wr] = o), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                (je('cancel', r), je('close', r));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                je('load', r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Dr.length; l++) je(Dr[l], r);
                break;
              case 'source':
                je('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                (je('error', r), je('load', r));
                break;
              case 'details':
                je('toggle', r);
                break;
              case 'input':
                (rl(r, o), je('invalid', r));
                break;
              case 'select':
                ((r._wrapperState = { wasMultiple: !!o.multiple }), je('invalid', r));
                break;
              case 'textarea':
                (ll(r, o), je('invalid', r));
            }
            (go(n, o), (l = null));
            for (var u in o)
              if (o.hasOwnProperty(u)) {
                var m = o[u];
                u === 'children'
                  ? typeof m == 'string'
                    ? r.textContent !== m &&
                      (o.suppressHydrationWarning !== !0 && Cl(r.textContent, m, e),
                      (l = ['children', m]))
                    : typeof m == 'number' &&
                      r.textContent !== '' + m &&
                      (o.suppressHydrationWarning !== !0 && Cl(r.textContent, m, e),
                      (l = ['children', '' + m]))
                  : d.hasOwnProperty(u) && m != null && u === 'onScroll' && je('scroll', r);
              }
            switch (n) {
              case 'input':
                (Sn(r), vr(r, o, !0));
                break;
              case 'textarea':
                (Sn(r), G(r));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof o.onClick == 'function' && (r.onclick = Il);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((u = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = de(n)),
              e === 'http://www.w3.org/1999/xhtml'
                ? n === 'script'
                  ? ((e = u.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                    ? (e = u.createElement(n, { is: r.is }))
                    : ((e = u.createElement(n)),
                      n === 'select' &&
                        ((u = e), r.multiple ? (u.multiple = !0) : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[Rt] = t),
              (e[Wr] = r),
              Vu(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((u = wo(n, r)), n)) {
                case 'dialog':
                  (je('cancel', e), je('close', e), (l = r));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (je('load', e), (l = r));
                  break;
                case 'video':
                case 'audio':
                  for (l = 0; l < Dr.length; l++) je(Dr[l], e);
                  l = r;
                  break;
                case 'source':
                  (je('error', e), (l = r));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (je('error', e), je('load', e), (l = r));
                  break;
                case 'details':
                  (je('toggle', e), (l = r));
                  break;
                case 'input':
                  (rl(e, r), (l = xn(e, r)), je('invalid', e));
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = q({}, r, { value: void 0 })),
                    je('invalid', e));
                  break;
                case 'textarea':
                  (ll(e, r), (l = bn(e, r)), je('invalid', e));
                  break;
                default:
                  l = r;
              }
              (go(n, l), (m = l));
              for (o in m)
                if (m.hasOwnProperty(o)) {
                  var y = m[o];
                  o === 'style'
                    ? Ls(e, y)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((y = y ? y.__html : void 0), y != null && Le(e, y))
                      : o === 'children'
                        ? typeof y == 'string'
                          ? (n !== 'textarea' || y !== '') && Jt(e, y)
                          : typeof y == 'number' && Jt(e, '' + y)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (d.hasOwnProperty(o)
                            ? y != null && o === 'onScroll' && je('scroll', e)
                            : y != null && V(e, o, y, u));
                }
              switch (n) {
                case 'input':
                  (Sn(e), vr(e, r, !1));
                  break;
                case 'textarea':
                  (Sn(e), G(e));
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + ge(r.value));
                  break;
                case 'select':
                  ((e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? zt(e, !!r.multiple, o, !1)
                      : r.defaultValue != null && zt(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = Il);
              }
              switch (n) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  r = !!r.autoFocus;
                  break e;
                case 'img':
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Ze(t), null);
      case 6:
        if (e && t.stateNode != null) bu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(i(166));
          if (((n = Ln(Br.current)), Ln(Pt.current), Rl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Rt] = t),
              (o = r.nodeValue !== n) && ((e = pt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Cl(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Cl(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Rt] = t),
              (t.stateNode = r));
        }
        return (Ze(t), null);
      case 13:
        if (
          (Ne(Me),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Te && mt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Ha(), rr(), (t.flags |= 98560), (o = !1));
          else if (((o = Rl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(i(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(i(317));
              o[Rt] = t;
            } else (rr(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ze(t), (o = !1));
          } else (Ot !== null && (Gi(Ot), (Ot = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Me.current & 1) !== 0 ? be === 0 && (be = 3) : Ji())),
            t.updateQueue !== null && (t.flags |= 4),
            Ze(t),
            null);
      case 4:
        return (sr(), Wi(e, t), e === null && Ar(t.stateNode.containerInfo), Ze(t), null);
      case 10:
        return (di(t.type._context), Ze(t), null);
      case 17:
        return (it(t.type) && jl(), Ze(t), null);
      case 19:
        if ((Ne(Me), (o = t.memoizedState), o === null)) return (Ze(t), null);
        if (((r = (t.flags & 128) !== 0), (u = o.rendering), u === null))
          if (r) Kr(o, !1);
          else {
            if (be !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = Fl(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Kr(o, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (u = o.alternate),
                      u === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = u.childLanes),
                          (o.lanes = u.lanes),
                          (o.child = u.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = u.memoizedProps),
                          (o.memoizedState = u.memoizedState),
                          (o.updateQueue = u.updateQueue),
                          (o.type = u.type),
                          (e = u.dependencies),
                          (o.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (n = n.sibling));
                  return (Oe(Me, (Me.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Ae() > fr &&
              ((t.flags |= 128), (r = !0), Kr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Fl(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Kr(o, !0),
                o.tail === null && o.tailMode === 'hidden' && !u.alternate && !Te)
              )
                return (Ze(t), null);
            } else
              2 * Ae() - o.renderingStartTime > fr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Kr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = o.last), n !== null ? (n.sibling = u) : (t.child = u), (o.last = u));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Ae()),
            (t.sibling = null),
            (n = Me.current),
            Oe(Me, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ze(t), null);
      case 22:
      case 23:
        return (
          Xi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (ht & 1073741824) !== 0 && (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ze(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Nf(e, t) {
    switch ((ii(t), t.tag)) {
      case 1:
        return (
          it(t.type) && jl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          sr(),
          Ne(ot),
          Ne(Xe),
          wi(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (yi(t), null);
      case 13:
        if ((Ne(Me), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(i(340));
          rr();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Ne(Me), null);
      case 4:
        return (sr(), null);
      case 10:
        return (di(t.type._context), null);
      case 22:
      case 23:
        return (Xi(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Kl = !1,
    et = !1,
    Tf = typeof WeakSet == 'function' ? WeakSet : Set,
    $ = null;
  function ur(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          Pe(e, t, r);
        }
      else n.current = null;
  }
  function Fi(e, t, n) {
    try {
      n();
    } catch (r) {
      Pe(e, t, r);
    }
  }
  var Bu = !1;
  function Lf(e, t) {
    if (((Xo = ml), (e = ka()), Bo(e))) {
      if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, o.nodeType);
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              m = -1,
              y = -1,
              C = 0,
              R = 0,
              D = e,
              L = null;
            t: for (;;) {
              for (
                var Q;
                D !== n || (l !== 0 && D.nodeType !== 3) || (m = u + l),
                  D !== o || (r !== 0 && D.nodeType !== 3) || (y = u + r),
                  D.nodeType === 3 && (u += D.nodeValue.length),
                  (Q = D.firstChild) !== null;
              )
                ((L = D), (D = Q));
              for (;;) {
                if (D === e) break t;
                if (
                  (L === n && ++C === l && (m = u),
                  L === o && ++R === r && (y = u),
                  (Q = D.nextSibling) !== null)
                )
                  break;
                ((D = L), (L = D.parentNode));
              }
              D = Q;
            }
            n = m === -1 || y === -1 ? null : { start: m, end: y };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Jo = { focusedElem: e, selectionRange: n }, ml = !1, $ = t; $ !== null; )
      if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), ($ = e));
      else
        for (; $ !== null; ) {
          t = $;
          try {
            var K = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (K !== null) {
                    var Y = K.memoizedProps,
                      ze = K.memoizedState,
                      S = t.stateNode,
                      _ = S.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Y : jt(t.type, Y),
                        ze
                      );
                    S.__reactInternalSnapshotBeforeUpdate = _;
                  }
                  break;
                case 3:
                  var E = t.stateNode.containerInfo;
                  E.nodeType === 1
                    ? (E.textContent = '')
                    : E.nodeType === 9 && E.documentElement && E.removeChild(E.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(i(163));
              }
          } catch (A) {
            Pe(t, t.return, A);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), ($ = e));
            break;
          }
          $ = t.return;
        }
    return ((K = Bu), (Bu = !1), K);
  }
  function Gr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          ((l.destroy = void 0), o !== void 0 && Fi(t, n, o));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Gl(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Vi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function Qu(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Qu(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Rt], delete t[Wr], delete t[ni], delete t[pf], delete t[mf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Hu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function qu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Hu(e.return)) return null;
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
  function Ui(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Il)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ui(e, t, n), e = e.sibling; e !== null; ) (Ui(e, t, n), (e = e.sibling));
  }
  function bi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (bi(e, t, n), e = e.sibling; e !== null; ) (bi(e, t, n), (e = e.sibling));
  }
  var Ke = null,
    Nt = !1;
  function dn(e, t, n) {
    for (n = n.child; n !== null; ) ($u(e, t, n), (n = n.sibling));
  }
  function $u(e, t, n) {
    if (Mt && typeof Mt.onCommitFiberUnmount == 'function')
      try {
        Mt.onCommitFiberUnmount(al, n);
      } catch {}
    switch (n.tag) {
      case 5:
        et || ur(n, t);
      case 6:
        var r = Ke,
          l = Nt;
        ((Ke = null),
          dn(e, t, n),
          (Ke = r),
          (Nt = l),
          Ke !== null &&
            (Nt
              ? ((e = Ke),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : Ke.removeChild(n.stateNode)));
        break;
      case 18:
        Ke !== null &&
          (Nt
            ? ((e = Ke),
              (n = n.stateNode),
              e.nodeType === 8 ? ti(e.parentNode, n) : e.nodeType === 1 && ti(e, n),
              Or(e))
            : ti(Ke, n.stateNode));
        break;
      case 4:
        ((r = Ke),
          (l = Nt),
          (Ke = n.stateNode.containerInfo),
          (Nt = !0),
          dn(e, t, n),
          (Ke = r),
          (Nt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!et && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var o = l,
              u = o.destroy;
            ((o = o.tag),
              u !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Fi(n, t, u),
              (l = l.next));
          } while (l !== r);
        }
        dn(e, t, n);
        break;
      case 1:
        if (!et && (ur(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (m) {
            Pe(n, t, m);
          }
        dn(e, t, n);
        break;
      case 21:
        dn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((et = (r = et) || n.memoizedState !== null), dn(e, t, n), (et = r))
          : dn(e, t, n);
        break;
      default:
        dn(e, t, n);
    }
  }
  function Ku(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Tf()),
        t.forEach(function (r) {
          var l = Vf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function Tt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            u = t,
            m = u;
          e: for (; m !== null; ) {
            switch (m.tag) {
              case 5:
                ((Ke = m.stateNode), (Nt = !1));
                break e;
              case 3:
                ((Ke = m.stateNode.containerInfo), (Nt = !0));
                break e;
              case 4:
                ((Ke = m.stateNode.containerInfo), (Nt = !0));
                break e;
            }
            m = m.return;
          }
          if (Ke === null) throw Error(i(160));
          ($u(o, u, l), (Ke = null), (Nt = !1));
          var y = l.alternate;
          (y !== null && (y.return = null), (l.return = null));
        } catch (C) {
          Pe(l, t, C);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Gu(t, e), (t = t.sibling));
  }
  function Gu(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Tt(t, e), At(e), r & 4)) {
          try {
            (Gr(3, e, e.return), Gl(3, e));
          } catch (Y) {
            Pe(e, e.return, Y);
          }
          try {
            Gr(5, e, e.return);
          } catch (Y) {
            Pe(e, e.return, Y);
          }
        }
        break;
      case 1:
        (Tt(t, e), At(e), r & 512 && n !== null && ur(n, n.return));
        break;
      case 5:
        if ((Tt(t, e), At(e), r & 512 && n !== null && ur(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Jt(l, '');
          } catch (Y) {
            Pe(e, e.return, Y);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            u = n !== null ? n.memoizedProps : o,
            m = e.type,
            y = e.updateQueue;
          if (((e.updateQueue = null), y !== null))
            try {
              (m === 'input' && o.type === 'radio' && o.name != null && hr(l, o), wo(m, u));
              var C = wo(m, o);
              for (u = 0; u < y.length; u += 2) {
                var R = y[u],
                  D = y[u + 1];
                R === 'style'
                  ? Ls(l, D)
                  : R === 'dangerouslySetInnerHTML'
                    ? Le(l, D)
                    : R === 'children'
                      ? Jt(l, D)
                      : V(l, R, D, C);
              }
              switch (m) {
                case 'input':
                  De(l, o);
                  break;
                case 'textarea':
                  W(l, o);
                  break;
                case 'select':
                  var L = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var Q = o.value;
                  Q != null
                    ? zt(l, !!o.multiple, Q, !1)
                    : L !== !!o.multiple &&
                      (o.defaultValue != null
                        ? zt(l, !!o.multiple, o.defaultValue, !0)
                        : zt(l, !!o.multiple, o.multiple ? [] : '', !1));
              }
              l[Wr] = o;
            } catch (Y) {
              Pe(e, e.return, Y);
            }
        }
        break;
      case 6:
        if ((Tt(t, e), At(e), r & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          ((l = e.stateNode), (o = e.memoizedProps));
          try {
            l.nodeValue = o;
          } catch (Y) {
            Pe(e, e.return, Y);
          }
        }
        break;
      case 3:
        if ((Tt(t, e), At(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Or(t.containerInfo);
          } catch (Y) {
            Pe(e, e.return, Y);
          }
        break;
      case 4:
        (Tt(t, e), At(e));
        break;
      case 13:
        (Tt(t, e),
          At(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (Hi = Ae())),
          r & 4 && Ku(e));
        break;
      case 22:
        if (
          ((R = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((et = (C = et) || R), Tt(t, e), (et = C)) : Tt(t, e),
          At(e),
          r & 8192)
        ) {
          if (
            ((C = e.memoizedState !== null), (e.stateNode.isHidden = C) && !R && (e.mode & 1) !== 0)
          )
            for ($ = e, R = e.child; R !== null; ) {
              for (D = $ = R; $ !== null; ) {
                switch (((L = $), (Q = L.child), L.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Gr(4, L, L.return);
                    break;
                  case 1:
                    ur(L, L.return);
                    var K = L.stateNode;
                    if (typeof K.componentWillUnmount == 'function') {
                      ((r = L), (n = L.return));
                      try {
                        ((t = r),
                          (K.props = t.memoizedProps),
                          (K.state = t.memoizedState),
                          K.componentWillUnmount());
                      } catch (Y) {
                        Pe(r, n, Y);
                      }
                    }
                    break;
                  case 5:
                    ur(L, L.return);
                    break;
                  case 22:
                    if (L.memoizedState !== null) {
                      Ju(D);
                      continue;
                    }
                }
                Q !== null ? ((Q.return = L), ($ = Q)) : Ju(D);
              }
              R = R.sibling;
            }
          e: for (R = null, D = e; ; ) {
            if (D.tag === 5) {
              if (R === null) {
                R = D;
                try {
                  ((l = D.stateNode),
                    C
                      ? ((o = l.style),
                        typeof o.setProperty == 'function'
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none'))
                      : ((m = D.stateNode),
                        (y = D.memoizedProps.style),
                        (u = y != null && y.hasOwnProperty('display') ? y.display : null),
                        (m.style.display = Ts('display', u))));
                } catch (Y) {
                  Pe(e, e.return, Y);
                }
              }
            } else if (D.tag === 6) {
              if (R === null)
                try {
                  D.stateNode.nodeValue = C ? '' : D.memoizedProps;
                } catch (Y) {
                  Pe(e, e.return, Y);
                }
            } else if (
              ((D.tag !== 22 && D.tag !== 23) || D.memoizedState === null || D === e) &&
              D.child !== null
            ) {
              ((D.child.return = D), (D = D.child));
              continue;
            }
            if (D === e) break e;
            for (; D.sibling === null; ) {
              if (D.return === null || D.return === e) break e;
              (R === D && (R = null), (D = D.return));
            }
            (R === D && (R = null), (D.sibling.return = D.return), (D = D.sibling));
          }
        }
        break;
      case 19:
        (Tt(t, e), At(e), r & 4 && Ku(e));
        break;
      case 21:
        break;
      default:
        (Tt(t, e), At(e));
    }
  }
  function At(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Hu(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(i(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Jt(l, ''), (r.flags &= -33));
            var o = qu(e);
            bi(e, o, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              m = qu(e);
            Ui(e, m, u);
            break;
          default:
            throw Error(i(161));
        }
      } catch (y) {
        Pe(e, e.return, y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Mf(e, t, n) {
    (($ = e), Yu(e));
  }
  function Yu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; $ !== null; ) {
      var l = $,
        o = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || Kl;
        if (!u) {
          var m = l.alternate,
            y = (m !== null && m.memoizedState !== null) || et;
          m = Kl;
          var C = et;
          if (((Kl = u), (et = y) && !C))
            for ($ = l; $ !== null; )
              ((u = $),
                (y = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? Zu(l)
                  : y !== null
                    ? ((y.return = u), ($ = y))
                    : Zu(l));
          for (; o !== null; ) (($ = o), Yu(o), (o = o.sibling));
          (($ = l), (Kl = m), (et = C));
        }
        Xu(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), ($ = o)) : Xu(e);
    }
  }
  function Xu(e) {
    for (; $ !== null; ) {
      var t = $;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                et || Gl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !et)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : jt(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && Ja(t, o, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Ja(t, u, n);
                }
                break;
              case 5:
                var m = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = m;
                  var y = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      y.autoFocus && n.focus();
                      break;
                    case 'img':
                      y.src && (n.src = y.src);
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
                  var C = t.alternate;
                  if (C !== null) {
                    var R = C.memoizedState;
                    if (R !== null) {
                      var D = R.dehydrated;
                      D !== null && Or(D);
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
                throw Error(i(163));
            }
          et || (t.flags & 512 && Vi(t));
        } catch (L) {
          Pe(t, t.return, L);
        }
      }
      if (t === e) {
        $ = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), ($ = n));
        break;
      }
      $ = t.return;
    }
  }
  function Ju(e) {
    for (; $ !== null; ) {
      var t = $;
      if (t === e) {
        $ = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), ($ = n));
        break;
      }
      $ = t.return;
    }
  }
  function Zu(e) {
    for (; $ !== null; ) {
      var t = $;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Gl(4, t);
            } catch (y) {
              Pe(t, n, y);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (y) {
                Pe(t, l, y);
              }
            }
            var o = t.return;
            try {
              Vi(t);
            } catch (y) {
              Pe(t, o, y);
            }
            break;
          case 5:
            var u = t.return;
            try {
              Vi(t);
            } catch (y) {
              Pe(t, u, y);
            }
        }
      } catch (y) {
        Pe(t, t.return, y);
      }
      if (t === e) {
        $ = null;
        break;
      }
      var m = t.sibling;
      if (m !== null) {
        ((m.return = t.return), ($ = m));
        break;
      }
      $ = t.return;
    }
  }
  var Rf = Math.ceil,
    Yl = B.ReactCurrentDispatcher,
    Bi = B.ReactCurrentOwner,
    kt = B.ReactCurrentBatchConfig,
    we = 0,
    He = null,
    Fe = null,
    Ge = 0,
    ht = 0,
    cr = sn(0),
    be = 0,
    Yr = null,
    Rn = 0,
    Xl = 0,
    Qi = 0,
    Xr = null,
    at = null,
    Hi = 0,
    fr = 1 / 0,
    Ht = null,
    Jl = !1,
    qi = null,
    pn = null,
    Zl = !1,
    mn = null,
    eo = 0,
    Jr = 0,
    $i = null,
    to = -1,
    no = 0;
  function nt() {
    return (we & 6) !== 0 ? Ae() : to !== -1 ? to : (to = Ae());
  }
  function hn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (we & 2) !== 0 && Ge !== 0
        ? Ge & -Ge
        : vf.transition !== null
          ? (no === 0 && (no = qs()), no)
          : ((e = xe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ta(e.type))), e);
  }
  function Lt(e, t, n, r) {
    if (50 < Jr) throw ((Jr = 0), ($i = null), Error(i(185)));
    (Sr(e, n, r),
      ((we & 2) === 0 || e !== He) &&
        (e === He && ((we & 2) === 0 && (Xl |= n), be === 4 && vn(e, Ge)),
        ut(e, r),
        n === 1 && we === 0 && (t.mode & 1) === 0 && ((fr = Ae() + 500), Tl && un())));
  }
  function ut(e, t) {
    var n = e.callbackNode;
    h0(e, t);
    var r = fl(e, e === He ? Ge : 0);
    if (r === 0) (n !== null && Bs(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Bs(n), t === 1))
        (e.tag === 0 ? hf(tc.bind(null, e)) : Va(tc.bind(null, e)),
          ff(function () {
            (we & 6) === 0 && un();
          }),
          (n = null));
      else {
        switch ($s(r)) {
          case 1:
            n = Io;
            break;
          case 4:
            n = Qs;
            break;
          case 16:
            n = sl;
            break;
          case 536870912:
            n = Hs;
            break;
          default:
            n = sl;
        }
        n = uc(n, ec.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function ec(e, t) {
    if (((to = -1), (no = 0), (we & 6) !== 0)) throw Error(i(327));
    var n = e.callbackNode;
    if (dr() && e.callbackNode !== n) return null;
    var r = fl(e, e === He ? Ge : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ro(e, r);
    else {
      t = r;
      var l = we;
      we |= 2;
      var o = rc();
      (He !== e || Ge !== t) && ((Ht = null), (fr = Ae() + 500), Dn(e, t));
      do
        try {
          Af();
          break;
        } catch (m) {
          nc(e, m);
        }
      while (!0);
      (fi(), (Yl.current = o), (we = l), Fe !== null ? (t = 0) : ((He = null), (Ge = 0), (t = be)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Oo(e)), l !== 0 && ((r = l), (t = Ki(e, l)))), t === 1))
        throw ((n = Yr), Dn(e, 0), vn(e, r), ut(e, Ae()), n);
      if (t === 6) vn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Pf(l) &&
            ((t = ro(e, r)),
            t === 2 && ((o = Oo(e)), o !== 0 && ((r = o), (t = Ki(e, o)))),
            t === 1))
        )
          throw ((n = Yr), Dn(e, 0), vn(e, r), ut(e, Ae()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            An(e, at, Ht);
            break;
          case 3:
            if ((vn(e, r), (r & 130023424) === r && ((t = Hi + 500 - Ae()), 10 < t))) {
              if (fl(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (nt(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = ei(An.bind(null, e, at, Ht), t);
              break;
            }
            An(e, at, Ht);
            break;
          case 4:
            if ((vn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - Ct(r);
              ((o = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~o));
            }
            if (
              ((r = l),
              (r = Ae() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * Rf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ei(An.bind(null, e, at, Ht), r);
              break;
            }
            An(e, at, Ht);
            break;
          case 5:
            An(e, at, Ht);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return (ut(e, Ae()), e.callbackNode === n ? ec.bind(null, e) : null);
  }
  function Ki(e, t) {
    var n = Xr;
    return (
      e.current.memoizedState.isDehydrated && (Dn(e, t).flags |= 256),
      (e = ro(e, t)),
      e !== 2 && ((t = at), (at = n), t !== null && Gi(t)),
      e
    );
  }
  function Gi(e) {
    at === null ? (at = e) : at.push.apply(at, e);
  }
  function Pf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!It(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
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
  function vn(e, t) {
    for (
      t &= ~Qi, t &= ~Xl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - Ct(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function tc(e) {
    if ((we & 6) !== 0) throw Error(i(327));
    dr();
    var t = fl(e, 0);
    if ((t & 1) === 0) return (ut(e, Ae()), null);
    var n = ro(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Oo(e);
      r !== 0 && ((t = r), (n = Ki(e, r)));
    }
    if (n === 1) throw ((n = Yr), Dn(e, 0), vn(e, t), ut(e, Ae()), n);
    if (n === 6) throw Error(i(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      An(e, at, Ht),
      ut(e, Ae()),
      null
    );
  }
  function Yi(e, t) {
    var n = we;
    we |= 1;
    try {
      return e(t);
    } finally {
      ((we = n), we === 0 && ((fr = Ae() + 500), Tl && un()));
    }
  }
  function Pn(e) {
    mn !== null && mn.tag === 0 && (we & 6) === 0 && dr();
    var t = we;
    we |= 1;
    var n = kt.transition,
      r = xe;
    try {
      if (((kt.transition = null), (xe = 1), e)) return e();
    } finally {
      ((xe = r), (kt.transition = n), (we = t), (we & 6) === 0 && un());
    }
  }
  function Xi() {
    ((ht = cr.current), Ne(cr));
  }
  function Dn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), cf(n)), Fe !== null))
      for (n = Fe.return; n !== null; ) {
        var r = n;
        switch ((ii(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && jl());
            break;
          case 3:
            (sr(), Ne(ot), Ne(Xe), wi());
            break;
          case 5:
            yi(r);
            break;
          case 4:
            sr();
            break;
          case 13:
            Ne(Me);
            break;
          case 19:
            Ne(Me);
            break;
          case 10:
            di(r.type._context);
            break;
          case 22:
          case 23:
            Xi();
        }
        n = n.return;
      }
    if (
      ((He = e),
      (Fe = e = yn(e.current, null)),
      (Ge = ht = t),
      (be = 0),
      (Yr = null),
      (Qi = Xl = Rn = 0),
      (at = Xr = null),
      Tn !== null)
    ) {
      for (t = 0; t < Tn.length; t++)
        if (((n = Tn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var u = o.next;
            ((o.next = l), (r.next = u));
          }
          n.pending = r;
        }
      Tn = null;
    }
    return e;
  }
  function nc(e, t) {
    do {
      var n = Fe;
      try {
        if ((fi(), (Vl.current = Ql), Ul)) {
          for (var r = Re.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          Ul = !1;
        }
        if (
          ((Mn = 0),
          (Qe = Ue = Re = null),
          (Qr = !1),
          (Hr = 0),
          (Bi.current = null),
          n === null || n.return === null)
        ) {
          ((be = 1), (Yr = t), (Fe = null));
          break;
        }
        e: {
          var o = e,
            u = n.return,
            m = n,
            y = t;
          if (
            ((t = Ge),
            (m.flags |= 32768),
            y !== null && typeof y == 'object' && typeof y.then == 'function')
          ) {
            var C = y,
              R = m,
              D = R.tag;
            if ((R.mode & 1) === 0 && (D === 0 || D === 11 || D === 15)) {
              var L = R.alternate;
              L
                ? ((R.updateQueue = L.updateQueue),
                  (R.memoizedState = L.memoizedState),
                  (R.lanes = L.lanes))
                : ((R.updateQueue = null), (R.memoizedState = null));
            }
            var Q = Ou(u);
            if (Q !== null) {
              ((Q.flags &= -257), ju(Q, u, m, o, t), Q.mode & 1 && Iu(o, C, t), (t = Q), (y = C));
              var K = t.updateQueue;
              if (K === null) {
                var Y = new Set();
                (Y.add(y), (t.updateQueue = Y));
              } else K.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Iu(o, C, t), Ji());
                break e;
              }
              y = Error(i(426));
            }
          } else if (Te && m.mode & 1) {
            var ze = Ou(u);
            if (ze !== null) {
              ((ze.flags & 65536) === 0 && (ze.flags |= 256), ju(ze, u, m, o, t), ui(ar(y, m)));
              break e;
            }
          }
          ((o = y = ar(y, m)),
            be !== 4 && (be = 2),
            Xr === null ? (Xr = [o]) : Xr.push(o),
            (o = u));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var S = xu(o, y, t);
                Xa(o, S);
                break e;
              case 1:
                m = y;
                var _ = o.type,
                  E = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof _.getDerivedStateFromError == 'function' ||
                    (E !== null &&
                      typeof E.componentDidCatch == 'function' &&
                      (pn === null || !pn.has(E))))
                ) {
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var A = Cu(o, m, t);
                  Xa(o, A);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        oc(n);
      } catch (X) {
        ((t = X), Fe === n && n !== null && (Fe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function rc() {
    var e = Yl.current;
    return ((Yl.current = Ql), e === null ? Ql : e);
  }
  function Ji() {
    ((be === 0 || be === 3 || be === 2) && (be = 4),
      He === null || ((Rn & 268435455) === 0 && (Xl & 268435455) === 0) || vn(He, Ge));
  }
  function ro(e, t) {
    var n = we;
    we |= 2;
    var r = rc();
    (He !== e || Ge !== t) && ((Ht = null), Dn(e, t));
    do
      try {
        Df();
        break;
      } catch (l) {
        nc(e, l);
      }
    while (!0);
    if ((fi(), (we = n), (Yl.current = r), Fe !== null)) throw Error(i(261));
    return ((He = null), (Ge = 0), be);
  }
  function Df() {
    for (; Fe !== null; ) lc(Fe);
  }
  function Af() {
    for (; Fe !== null && !i0(); ) lc(Fe);
  }
  function lc(e) {
    var t = ac(e.alternate, e, ht);
    ((e.memoizedProps = e.pendingProps), t === null ? oc(e) : (Fe = t), (Bi.current = null));
  }
  function oc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = jf(n, t, ht)), n !== null)) {
          Fe = n;
          return;
        }
      } else {
        if (((n = Nf(n, t)), n !== null)) {
          ((n.flags &= 32767), (Fe = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((be = 6), (Fe = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Fe = t;
        return;
      }
      Fe = t = e;
    } while (t !== null);
    be === 0 && (be = 5);
  }
  function An(e, t, n) {
    var r = xe,
      l = kt.transition;
    try {
      ((kt.transition = null), (xe = 1), zf(e, t, n, r));
    } finally {
      ((kt.transition = l), (xe = r));
    }
    return null;
  }
  function zf(e, t, n, r) {
    do dr();
    while (mn !== null);
    if ((we & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(i(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = n.lanes | n.childLanes;
    if (
      (v0(e, o),
      e === He && ((Fe = He = null), (Ge = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Zl ||
        ((Zl = !0),
        uc(sl, function () {
          return (dr(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = kt.transition), (kt.transition = null));
      var u = xe;
      xe = 1;
      var m = we;
      ((we |= 4),
        (Bi.current = null),
        Lf(e, n),
        Gu(n, e),
        nf(Jo),
        (ml = !!Xo),
        (Jo = Xo = null),
        (e.current = n),
        Mf(n),
        s0(),
        (we = m),
        (xe = u),
        (kt.transition = o));
    } else e.current = n;
    if (
      (Zl && ((Zl = !1), (mn = e), (eo = l)),
      (o = e.pendingLanes),
      o === 0 && (pn = null),
      c0(n.stateNode),
      ut(e, Ae()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (Jl) throw ((Jl = !1), (e = qi), (qi = null), e);
    return (
      (eo & 1) !== 0 && e.tag !== 0 && dr(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === $i ? Jr++ : ((Jr = 0), ($i = e))) : (Jr = 0),
      un(),
      null
    );
  }
  function dr() {
    if (mn !== null) {
      var e = $s(eo),
        t = kt.transition,
        n = xe;
      try {
        if (((kt.transition = null), (xe = 16 > e ? 16 : e), mn === null)) var r = !1;
        else {
          if (((e = mn), (mn = null), (eo = 0), (we & 6) !== 0)) throw Error(i(331));
          var l = we;
          for (we |= 4, $ = e.current; $ !== null; ) {
            var o = $,
              u = o.child;
            if (($.flags & 16) !== 0) {
              var m = o.deletions;
              if (m !== null) {
                for (var y = 0; y < m.length; y++) {
                  var C = m[y];
                  for ($ = C; $ !== null; ) {
                    var R = $;
                    switch (R.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gr(8, R, o);
                    }
                    var D = R.child;
                    if (D !== null) ((D.return = R), ($ = D));
                    else
                      for (; $ !== null; ) {
                        R = $;
                        var L = R.sibling,
                          Q = R.return;
                        if ((Qu(R), R === C)) {
                          $ = null;
                          break;
                        }
                        if (L !== null) {
                          ((L.return = Q), ($ = L));
                          break;
                        }
                        $ = Q;
                      }
                  }
                }
                var K = o.alternate;
                if (K !== null) {
                  var Y = K.child;
                  if (Y !== null) {
                    K.child = null;
                    do {
                      var ze = Y.sibling;
                      ((Y.sibling = null), (Y = ze));
                    } while (Y !== null);
                  }
                }
                $ = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && u !== null) ((u.return = o), ($ = u));
            else
              e: for (; $ !== null; ) {
                if (((o = $), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gr(9, o, o.return);
                  }
                var S = o.sibling;
                if (S !== null) {
                  ((S.return = o.return), ($ = S));
                  break e;
                }
                $ = o.return;
              }
          }
          var _ = e.current;
          for ($ = _; $ !== null; ) {
            u = $;
            var E = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && E !== null) ((E.return = u), ($ = E));
            else
              e: for (u = _; $ !== null; ) {
                if (((m = $), (m.flags & 2048) !== 0))
                  try {
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gl(9, m);
                    }
                  } catch (X) {
                    Pe(m, m.return, X);
                  }
                if (m === u) {
                  $ = null;
                  break e;
                }
                var A = m.sibling;
                if (A !== null) {
                  ((A.return = m.return), ($ = A));
                  break e;
                }
                $ = m.return;
              }
          }
          if (((we = l), un(), Mt && typeof Mt.onPostCommitFiberRoot == 'function'))
            try {
              Mt.onPostCommitFiberRoot(al, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((xe = n), (kt.transition = t));
      }
    }
    return !1;
  }
  function ic(e, t, n) {
    ((t = ar(n, t)),
      (t = xu(e, t, 1)),
      (e = fn(e, t, 1)),
      (t = nt()),
      e !== null && (Sr(e, 1, t), ut(e, t)));
  }
  function Pe(e, t, n) {
    if (e.tag === 3) ic(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ic(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (pn === null || !pn.has(r)))
          ) {
            ((e = ar(n, e)),
              (e = Cu(t, e, 1)),
              (t = fn(t, e, 1)),
              (e = nt()),
              t !== null && (Sr(t, 1, e), ut(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Wf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = nt()),
      (e.pingedLanes |= e.suspendedLanes & n),
      He === e &&
        (Ge & n) === n &&
        (be === 4 || (be === 3 && (Ge & 130023424) === Ge && 500 > Ae() - Hi)
          ? Dn(e, 0)
          : (Qi |= n)),
      ut(e, t));
  }
  function sc(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = cl), (cl <<= 1), (cl & 130023424) === 0 && (cl = 4194304)));
    var n = nt();
    ((e = bt(e, t)), e !== null && (Sr(e, t, n), ut(e, n)));
  }
  function Ff(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), sc(e, n));
  }
  function Vf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    (r !== null && r.delete(t), sc(e, n));
  }
  var ac;
  ac = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || ot.current) st = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((st = !1), Of(e, t, n));
        st = (e.flags & 131072) !== 0;
      }
    else ((st = !1), Te && (t.flags & 1048576) !== 0 && Ua(t, Ml, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        ($l(e, t), (e = t.pendingProps));
        var l = er(t, Xe.current);
        (ir(t, n), (l = Si(null, t, r, e, l, n)));
        var o = Ei();
        return (
          (t.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              it(r) ? ((o = !0), Nl(t)) : (o = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              hi(t),
              (l.updater = Hl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Ni(t, r, e, n),
              (t = Ri(null, t, r, !0, o, n)))
            : ((t.tag = 0), Te && o && oi(t), tt(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            ($l(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = bf(r)),
            (e = jt(r, e)),
            l)
          ) {
            case 0:
              t = Mi(null, t, r, e, n);
              break e;
            case 1:
              t = Pu(null, t, r, e, n);
              break e;
            case 11:
              t = Nu(null, t, r, e, n);
              break e;
            case 14:
              t = Tu(null, t, r, jt(r.type, e), n);
              break e;
          }
          throw Error(i(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : jt(r, l)),
          Mi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : jt(r, l)),
          Pu(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Du(t), e === null)) throw Error(i(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            Ya(e, t),
            Wl(t, r, null, n));
          var u = t.memoizedState;
          if (((r = u.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              ((l = ar(Error(i(423)), t)), (t = Au(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = ar(Error(i(424)), t)), (t = Au(e, t, r, n, l)));
              break e;
            } else
              for (
                mt = on(t.stateNode.containerInfo.firstChild),
                  pt = t,
                  Te = !0,
                  Ot = null,
                  n = Ka(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((rr(), r === l)) {
              t = Qt(e, t, n);
              break e;
            }
            tt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Za(t),
          e === null && ai(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (u = l.children),
          Zo(r, l) ? (u = null) : o !== null && Zo(r, o) && (t.flags |= 32),
          Ru(e, t),
          tt(e, t, u, n),
          t.child
        );
      case 6:
        return (e === null && ai(t), null);
      case 13:
        return zu(e, t, n);
      case 4:
        return (
          vi(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = lr(t, null, r, n)) : tt(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : jt(r, l)),
          Nu(e, t, r, l, n)
        );
      case 7:
        return (tt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (tt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (tt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (u = l.value),
            Oe(Dl, r._currentValue),
            (r._currentValue = u),
            o !== null)
          )
            if (It(o.value, u)) {
              if (o.children === l.children && !ot.current) {
                t = Qt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var m = o.dependencies;
                if (m !== null) {
                  u = o.child;
                  for (var y = m.firstContext; y !== null; ) {
                    if (y.context === r) {
                      if (o.tag === 1) {
                        ((y = Bt(-1, n & -n)), (y.tag = 2));
                        var C = o.updateQueue;
                        if (C !== null) {
                          C = C.shared;
                          var R = C.pending;
                          (R === null ? (y.next = y) : ((y.next = R.next), (R.next = y)),
                            (C.pending = y));
                        }
                      }
                      ((o.lanes |= n),
                        (y = o.alternate),
                        y !== null && (y.lanes |= n),
                        pi(o.return, n, t),
                        (m.lanes |= n));
                      break;
                    }
                    y = y.next;
                  }
                } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((u = o.return), u === null)) throw Error(i(341));
                  ((u.lanes |= n),
                    (m = u.alternate),
                    m !== null && (m.lanes |= n),
                    pi(u, n, t),
                    (u = o.sibling));
                } else u = o.child;
                if (u !== null) u.return = o;
                else
                  for (u = o; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((o = u.sibling), o !== null)) {
                      ((o.return = u.return), (u = o));
                      break;
                    }
                    u = u.return;
                  }
                o = u;
              }
          (tt(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          ir(t, n),
          (l = wt(l)),
          (r = r(l)),
          (t.flags |= 1),
          tt(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = jt(r, t.pendingProps)), (l = jt(r.type, l)), Tu(e, t, r, l, n));
      case 15:
        return Lu(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : jt(r, l)),
          $l(e, t),
          (t.tag = 1),
          it(r) ? ((e = !0), Nl(t)) : (e = !1),
          ir(t, n),
          Su(t, r, l),
          Ni(t, r, l, n),
          Ri(null, t, r, !0, e, n)
        );
      case 19:
        return Fu(e, t, n);
      case 22:
        return Mu(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function uc(e, t) {
    return bs(e, t);
  }
  function Uf(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
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
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function St(e, t, n, r) {
    return new Uf(e, t, n, r);
  }
  function Zi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function bf(e) {
    if (typeof e == 'function') return Zi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === me)) return 11;
      if (e === Be) return 14;
    }
    return 2;
  }
  function yn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = St(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function lo(e, t, n, r, l, o) {
    var u = 2;
    if (((r = e), typeof e == 'function')) Zi(e) && (u = 1);
    else if (typeof e == 'string') u = 5;
    else
      e: switch (e) {
        case ee:
          return zn(n.children, l, o, t);
        case te:
          ((u = 8), (l |= 8));
          break;
        case ie:
          return ((e = St(12, n, t, l | 2)), (e.elementType = ie), (e.lanes = o), e);
        case ce:
          return ((e = St(13, n, t, l)), (e.elementType = ce), (e.lanes = o), e);
        case Ee:
          return ((e = St(19, n, t, l)), (e.elementType = Ee), (e.lanes = o), e);
        case ke:
          return oo(n, l, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case ue:
                u = 10;
                break e;
              case Z:
                u = 9;
                break e;
              case me:
                u = 11;
                break e;
              case Be:
                u = 14;
                break e;
              case We:
                ((u = 16), (r = null));
                break e;
            }
          throw Error(i(130, e == null ? e : typeof e, ''));
      }
    return ((t = St(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
  }
  function zn(e, t, n, r) {
    return ((e = St(7, e, r, t)), (e.lanes = n), e);
  }
  function oo(e, t, n, r) {
    return (
      (e = St(22, e, r, t)),
      (e.elementType = ke),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function es(e, t, n) {
    return ((e = St(6, e, null, t)), (e.lanes = n), e);
  }
  function ts(e, t, n) {
    return (
      (t = St(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Bf(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = jo(0)),
      (this.expirationTimes = jo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = jo(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function ns(e, t, n, r, l, o, u, m, y) {
    return (
      (e = new Bf(e, t, n, m, y)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = St(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      hi(o),
      e
    );
  }
  function Qf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: J,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function cc(e) {
    if (!e) return an;
    e = e._reactInternals;
    e: {
      if (Cn(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (it(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (it(n)) return Wa(e, n, t);
    }
    return t;
  }
  function fc(e, t, n, r, l, o, u, m, y) {
    return (
      (e = ns(n, r, !0, e, l, o, u, m, y)),
      (e.context = cc(null)),
      (n = e.current),
      (r = nt()),
      (l = hn(n)),
      (o = Bt(r, l)),
      (o.callback = t ?? null),
      fn(n, o, l),
      (e.current.lanes = l),
      Sr(e, l, r),
      ut(e, r),
      e
    );
  }
  function io(e, t, n, r) {
    var l = t.current,
      o = nt(),
      u = hn(l);
    return (
      (n = cc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Bt(o, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = fn(l, t, u)),
      e !== null && (Lt(e, l, u, o), zl(e, l, u)),
      u
    );
  }
  function so(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function dc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function rs(e, t) {
    (dc(e, t), (e = e.alternate) && dc(e, t));
  }
  function Hf() {
    return null;
  }
  var pc =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ls(e) {
    this._internalRoot = e;
  }
  ((ao.prototype.render = ls.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      io(e, t, null, null);
    }),
    (ao.prototype.unmount = ls.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Pn(function () {
            io(null, e, null, null);
          }),
            (t[Wt] = null));
        }
      }));
  function ao(e) {
    this._internalRoot = e;
  }
  ao.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ys();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < nn.length && t !== 0 && t < nn[n].priority; n++);
      (nn.splice(n, 0, e), n === 0 && Zs(e));
    }
  };
  function os(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function uo(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function mc() {}
  function qf(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var C = so(u);
          o.call(C);
        };
      }
      var u = fc(t, r, e, 0, null, !1, !1, '', mc);
      return (
        (e._reactRootContainer = u),
        (e[Wt] = u.current),
        Ar(e.nodeType === 8 ? e.parentNode : e),
        Pn(),
        u
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var m = r;
      r = function () {
        var C = so(y);
        m.call(C);
      };
    }
    var y = ns(e, 0, !1, null, null, !1, !1, '', mc);
    return (
      (e._reactRootContainer = y),
      (e[Wt] = y.current),
      Ar(e.nodeType === 8 ? e.parentNode : e),
      Pn(function () {
        io(t, y, n, r);
      }),
      y
    );
  }
  function co(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof l == 'function') {
        var m = l;
        l = function () {
          var y = so(u);
          m.call(y);
        };
      }
      io(t, u, e, l);
    } else u = qf(n, t, e, l, r);
    return so(u);
  }
  ((Ks = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = kr(t.pendingLanes);
          n !== 0 && (No(t, n | 1), ut(t, Ae()), (we & 6) === 0 && ((fr = Ae() + 500), un()));
        }
        break;
      case 13:
        (Pn(function () {
          var r = bt(e, 1);
          if (r !== null) {
            var l = nt();
            Lt(r, e, 1, l);
          }
        }),
          rs(e, 1));
    }
  }),
    (To = function (e) {
      if (e.tag === 13) {
        var t = bt(e, 134217728);
        if (t !== null) {
          var n = nt();
          Lt(t, e, 134217728, n);
        }
        rs(e, 134217728);
      }
    }),
    (Gs = function (e) {
      if (e.tag === 13) {
        var t = hn(e),
          n = bt(e, t);
        if (n !== null) {
          var r = nt();
          Lt(n, e, t, r);
        }
        rs(e, t);
      }
    }),
    (Ys = function () {
      return xe;
    }),
    (Xs = function (e, t) {
      var n = xe;
      try {
        return ((xe = e), t());
      } finally {
        xe = n;
      }
    }),
    (So = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((De(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Ol(r);
                if (!l) throw Error(i(90));
                (Et(r), De(r, l));
              }
            }
          }
          break;
        case 'textarea':
          W(e, n);
          break;
        case 'select':
          ((t = n.value), t != null && zt(e, !!n.multiple, t, !1));
      }
    }),
    (Ds = Yi),
    (As = Pn));
  var $f = { usingClientEntryPoint: !1, Events: [Fr, Jn, Ol, Rs, Ps, Yi] },
    Zr = {
      findFiberByHostInstance: In,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    Kf = {
      bundleType: Zr.bundleType,
      version: Zr.version,
      rendererPackageName: Zr.rendererPackageName,
      rendererConfig: Zr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: B.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Vs(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Zr.findFiberByHostInstance || Hf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fo.isDisabled && fo.supportsFiber)
      try {
        ((al = fo.inject(Kf)), (Mt = fo));
      } catch {}
  }
  return (
    (ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $f),
    (ct.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!os(t)) throw Error(i(200));
      return Qf(e, t, null, n);
    }),
    (ct.createRoot = function (e, t) {
      if (!os(e)) throw Error(i(299));
      var n = !1,
        r = '',
        l = pc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = ns(e, 1, !1, null, null, n, !1, r, l)),
        (e[Wt] = t.current),
        Ar(e.nodeType === 8 ? e.parentNode : e),
        new ls(t)
      );
    }),
    (ct.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(i(188))
          : ((e = Object.keys(e).join(',')), Error(i(268, e)));
      return ((e = Vs(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (ct.flushSync = function (e) {
      return Pn(e);
    }),
    (ct.hydrate = function (e, t, n) {
      if (!uo(t)) throw Error(i(200));
      return co(null, e, t, !0, n);
    }),
    (ct.hydrateRoot = function (e, t, n) {
      if (!os(e)) throw Error(i(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        u = pc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = fc(t, null, e, 1, n ?? null, l, !1, o, u)),
        (e[Wt] = t.current),
        Ar(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new ao(t);
    }),
    (ct.render = function (e, t, n) {
      if (!uo(t)) throw Error(i(200));
      return co(null, e, t, !1, n);
    }),
    (ct.unmountComponentAtNode = function (e) {
      if (!uo(e)) throw Error(i(40));
      return e._reactRootContainer
        ? (Pn(function () {
            co(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Wt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (ct.unstable_batchedUpdates = Yi),
    (ct.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!uo(n)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return co(e, t, n, !1, r);
    }),
    (ct.version = '18.3.1-next-f1338f8080-20240426'),
    ct
  );
}
var Sc;
function nd() {
  if (Sc) return as.exports;
  Sc = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (a) {
        console.error(a);
      }
  }
  return (s(), (as.exports = td()), as.exports);
}
var Ec;
function rd() {
  if (Ec) return po;
  Ec = 1;
  var s = nd();
  return ((po.createRoot = s.createRoot), (po.hydrateRoot = s.hydrateRoot), po);
}
var ld = rd();
const od = JSON.parse(
    `[{"id":"timeframes","type":"preset","presets":[{"id":"next-decade","name":"Focused on next decade (until 2035)","description":"Evaluates projects primarily by their effects over the next decade.","credences":{"equalAll":0,"prioritizeNearer":0,"discountDistant":25,"shortTermOnly":75}},{"id":"next-generations","name":"Focused on next generations (until 2100)","description":"Emphasizes effects on the next few generations, including individuals who do not currently exist.","credences":{"equalAll":20,"prioritizeNearer":50,"discountDistant":30,"shortTermOnly":0}},{"id":"longtermist","name":"Longtermist","description":"Concerned with the longterm future, valuing effects equally regardless of when they occur.","credences":{"equalAll":80,"prioritizeNearer":20,"discountDistant":0,"shortTermOnly":0}}],"worldviewDimension":{"appliesTo":"timeframe","applyAs":"multiplier","options":{"equalAll":{"short":1,"medium":1,"long":1},"prioritizeNearer":{"short":1,"medium":0.5,"long":0.2},"discountDistant":{"short":1,"medium":0.2,"long":0},"shortTermOnly":{"short":1,"medium":0,"long":0}}},"categoryLabel":"Time Preferences","icon":"clock","previewText":"Short vs. long-term effects","heading":"When evaluating projects, how much consideration do you give to projects' near-term, medium-term, or longer-term effects?","info":"A project's effects play out over different timelines. Some effects, like malaria treatments, might occur right away. Others, like investments in education or infrastructure, could take years to arise. Other effects will arise in the longer run future. When you are evaluating projects, do you give extra weight to effects that will happen sooner (in the next decade) rather than later (decades or even centuries in the future)?\\n\\nThere are several reasons why you might give extra weight to near-term effects. First, you might think it's more morally important to help individuals that currently exist or will exist very soon than it is to help individuals that will potentially exist in the future. Alternatively, even if you think all beings matter equally, regardless of time, you might be so uncertain about a project's long-term effects that you'd rather focus on the more predictable near future. Lastly, you might have beliefs about how the future will go (e.g. that AI will change everything in 10 years) that make you want to just focus on projects whose effects will happen soon.","context":"Consider the following timeframes:\\n\\n- **Short-term:** before 2035\\n- **Medium-term:** from 2035-2100\\n- **Long-term:** after 2100\\n\\nWhich of these positions best describes your view when evaluating the effects of different projects?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Time Preferences","options":[{"key":"shortTermOnly","label":"Short-term only","description":"I only care about effects in the short-term","info":"","panelLabel":"Short","panelShort":"ST","marketplaceValue":[1,1,0,0,0,0]},{"key":"discountDistant","label":"Discount the distant future","description":"I do not care about the distant future. I care a bit about the medium-term, but I put more priority on the short-term","info":"","panelLabel":"Discount","panelShort":">>","marketplaceValue":[1,1,0.2,0.2,0,0]},{"key":"prioritizeNearer","label":"Prioritize nearer term","description":"I care a bit about the long-term future, but I put more priority on the medium-term and even more priority on the short-term","info":"","panelLabel":"Nearer","panelShort":">","marketplaceValue":[1,1,0.5,0.5,0.2,0.2]},{"key":"equalAll","label":"Equal across all timeframes","description":"I only care about how much good I could possibly do, and I don't care whether that good happens in the short-term, medium-term, or long-term","info":"","panelLabel":"Equal","panelShort":"=","marketplaceValue":[1,1,1,1,1,1]}]},{"id":"risk","type":"credence","worldviewDimension":{"appliesWhen":"isDummyRisk","applyAs":"multiplier","options":{"riskNeutral":1,"upsideSkepticism":1,"lossAversion":1,"both":1}},"categoryLabel":"Risk Attitudes","icon":"dice","previewText":"Attitudes toward risk","heading":"Are you averse to taking certain kinds of risks in your philanthropic giving?","info":"The expected value of a project is a weighted average of all the effects that the project might have. Two projects can have the same expected value but otherwise be very different. For example, a \\"safe\\" project may be almost guaranteed to do X amount of good, so its expected value is X. A \\"risky\\" project might have a 1/100 chance of delivering 100 x X amount of good and a 99/100 of doing nothing, so its expected value is also X. A different kind of \\"risky\\" project might have a 1/2 chance of backfiring, creating -X value, and a 1/2 chance of creating 3X value, so its expected value is also X.\\n\\nIf you only care about maximizing expected value, you will treat these projects the same way. However, if you are risk averse, you may dislike one or both of the risky projects. There are a few ways to be risk averse, including:\\n\\n- **Upside skepticism:** you are wary of spending your money on bets that have very small chances of success. You want to focus on what will probably happen, not what will happen in the most optimistic of outcomes.\\n- **Loss aversion:** you want to avoid situations where your money does nothing, and you are even more keen to avoid situations where your actions made things worse. You want to penalize projects that have decent chances of failure or backfire.\\n- **Both skeptical of upsides and averse to losses**","context":"Which of these best describes your perspective:","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Risk Attitudes","options":[{"key":"riskNeutral","label":"Risk neutral","description":"I prefer to invest in options that have the highest expected value, even if they have low success rates or risk of negative outcomes","info":"","panelLabel":"Neutral","panelShort":"EV","marketplaceValue":0},{"key":"upsideSkepticism","label":"Skeptical of optimistic scenarios","description":"I am skeptical of projects' most optimistic scenarios and decide where to give based on scenarios that are more likely to occur","info":"","panelLabel":"Skeptical","panelShort":"S","marketplaceValue":1},{"key":"lossAversion","label":"Avoid losses","description":"I want to avoid losses and am motivated to avoid projects that have significant chances of failure or backfire (even if those projects have high expected value)","info":"","panelLabel":"Loss averse","panelShort":"LA","marketplaceValue":2},{"key":"both","label":"Both skeptical and loss averse","description":"I am both skeptical of projects' most optimistic scenarios and motivated to avoid losses","info":"","panelLabel":"Both","panelShort":"B","marketplaceValue":3}]},{"id":"xrisk","type":"credence","worldviewDimension":{"appliesWhen":"isNonXRisk","applyAs":"multiplier","options":{"evaluateSame":1,"discount10":0.9,"discount50":0.5,"xriskOnly":0}},"categoryLabel":"Existential Risk","icon":"alert-triangle","previewText":"Existential risk priority","heading":"How much do you want to prioritize efforts to mitigate near-term existential risks that demand action in the next several years, compared to other kinds of projects you might fund?","info":"Some projects aim to reduce the chances of an event that poses existential or catastrophic risk (such as an engineered pandemic or AI takeover). If an event like this occurs, then it could severely mitigate the beneficial effects of other kinds of philanthropic projects (such as global health interventions). This can make it hard to compare the value of existential risk mitigation to the value of other projects.\\n\\nIf you think there is a high chance of a catastrophic risk in the near future (say, the next 10 years), then you may think that we need to act now to try to reduce these threats. You may care a lot about the longer-run future and what the world is like decades from now, but you want to prioritize actions now to ensure that humanity is around to enjoy that future.","context":"Do you want to treat near-term existential risk mitigation projects differently than other projects?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"X-Risk Priority","options":[{"key":"evaluateSame","label":"Evaluate the same way","description":"I want to evaluate near-term existential risk projects the same way that I evaluate all other projects (e.g. by calculating their expected effects over the timeline I care about)","info":"","panelLabel":"Same","panelShort":"=","marketplaceValue":0},{"key":"discount10","label":"Discount other projects somewhat","description":"I think there is about a 10% probability that an existential risk occurs in the next decade that renders other projects useless. Therefore, I want to discount the value of these other projects somewhat","info":"","panelLabel":"10% risk","panelShort":"10%","marketplaceValue":0.1},{"key":"discount50","label":"Discount other projects greatly","description":"I think there is about a 50% probability that an existential risk occurs in the next decade that renders other projects useless. Therefore, I want to greatly discount the value of these other projects","info":"","panelLabel":"50% risk","panelShort":"50%","marketplaceValue":0.5},{"key":"xriskOnly","label":"Only x-risk reduction","description":"I only care about reducing near-term existential risk","info":"","panelLabel":"X-risk only","panelShort":"X","marketplaceValue":1}]},{"id":"animal","type":"preset","presets":[{"id":"animal-friendly","name":"Animal friendly view","description":"Emphasizes equal consideration for animal and human suffering.","credences":{"humanEqual":75,"human10x":25,"human100x":0,"human1000x":0,"noValue":0}},{"id":"rethink-priorities","name":"Rethink Priorities default","description":"Based on empirical research on animal welfare ranges, gives animals somewhat lower weight than humans.","credences":{"humanEqual":20,"human10x":50,"human100x":20,"human1000x":10,"noValue":0}},{"id":"animal-skeptic","name":"Animal skeptic view","description":"Gives strong priority to human welfare, based on their unique capacities or our special moral obligations to other humans.","credences":{"humanEqual":0,"human10x":10,"human100x":60,"human1000x":30,"noValue":0}}],"worldviewDimension":{"appliesWhen":"helpsAnimals","applyAs":"multiplier","options":{"humanEqual":0.0172,"human10x":0.00172,"human100x":0.000172,"human1000x":0.0000172,"noValue":0}},"categoryLabel":"Animal Welfare","icon":"paw","previewText":"Animal welfare","heading":"How much do you value reducing suffering in animals compared to reducing suffering in humans?","info":"It can be difficult to compare the value of helping humans versus helping animals. For now, let's consider animals that most people believe are capable of suffering (such as pigs, dogs, or cows) and use chickens as a test case.\\n\\nThere are some conditions that decrease chickens' quality of life, which we can measure in terms of chicken Disability Adjusted Life Years. For example, suppose living in hurtful pain for a year reduces a chicken's quality of life by 25%. Therefore, if we improve a chicken's living conditions to relieve this suffering, this would result in a gain of 0.25 chicken DALYs. Likewise, some human conditions reduce a human's quality of life by 25%, so relieving this for a year would result in 0.25 human DALYs.\\n\\nHow much do you value chicken DALYs versus human DALYs? In other words, how much do you care about a quality of life reduction in chickens compared to a similar proportional quality of life reduction in humans? Note that there are a few different reasons you might give chicken DALYs lower weight. Perhaps you think a 25% reduction in a chicken's quality of life involves less suffering (or loss of meaningful experiences) than a 25% reduction in a human's quality of life. Alternatively, you could think the amount of suffering is the same, but you think it is morally more important to alleviate human suffering.","context":"For this question, we'll focus on familiar farmed animals—chickens, pigs, and cows—that most people agree can experience pain and distress.\\n\\nWhich of these positions best describes your view?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Animal Welfare Weights","options":[{"key":"humanEqual","label":"Equal to humans","description":"I treat a year of disability in an animal the same as a year of disability in a human","info":"","panelLabel":"Equal","panelShort":"=","marketplaceValue":1},{"key":"human10x","label":"10x less than humans","description":"I value a human year of disability about 10x as much as a year of disability in an animal","info":"","panelLabel":"10x less","panelShort":"10x","marketplaceValue":0.1},{"key":"human100x","label":"100x less than humans","description":"I value a human year of disability about 100x as much as a year of disability in an animal","info":"","panelLabel":"100x less","panelShort":"100x","marketplaceValue":0.01},{"key":"human1000x","label":"1000x less than humans","description":"I value a human year of disability about 1000x as much as a year of disability in an animal","info":"","panelLabel":"1000x less","panelShort":"1kx","marketplaceValue":0.001},{"key":"noValue","label":"No value","description":"I do not value animal welfare","info":"","panelLabel":"None","panelShort":"0","marketplaceValue":0}]},{"id":"invertebrate","type":"preset","presets":[{"id":"invertebrate-friendly","name":"Invertebrate friendly view","description":"Emphasizes roughly equal consideration for invertebrate and human suffering, tempered by uncertainty about invertebrate sentience.","credences":{"humanEqual":40,"human100x":40,"human1000x":20,"human10000x":0,"noValue":0}},{"id":"rethink-priorities","name":"Rethink Priorities default","description":"Based on empirical research on animal welfare ranges and likelihoods of invertebrate sentience, gives animals significantly lower weight than humans.","credences":{"humanEqual":10,"human100x":40,"human1000x":30,"human10000x":10,"noValue":10}},{"id":"invertebrate-skeptic","name":"Invertebrate skeptic view","description":"Gives strong priority to human welfare, highly skeptical about invertebrates' capacity for welfare.","credences":{"humanEqual":0,"human100x":0,"human1000x":10,"human10000x":40,"noValue":50}}],"worldviewDimension":{"appliesWhen":"helpsInvertebrates","applyAs":"multiplier","options":{"humanEqual":0.0172,"human100x":0.000172,"human1000x":0.0000172,"human10000x":0.00000172,"noValue":0}},"categoryLabel":"Invertebrate Welfare","icon":"shell","previewText":"Invertebrate welfare","heading":"How much do you care about reducing the suffering of shrimp (or other small, less understood farmed invertebrates), compared to reducing the suffering of humans?","info":"It can be difficult to compare the value of helping humans versus helping animals. This is even more difficult when we are uncertain whether the animals even have conscious experiences or what their experiences are like. For now, let's consider farmed invertebrates (such as shrimp or insects) and use shrimp as a test case.\\n\\nShrimp may experience conditions that reduce their quality of life. Assuming they are sentient, we can characterize their loss of quality of life via a shrimp DALY. How much do you value shrimp DALYs versus human DALYs? Note that there are three different reasons you might give shrimp DALYs lower weight. Perhaps you think a 25% reduction in a shrimp's quality of life involves less suffering (or loss of meaningful experiences) than a 25% reduction in a human's quality of life. Alternatively, you could think the amount of suffering is the same, but you think it is morally more important to alleviate human suffering. Lastly, you could doubt that shrimp are sentient and therefore doubt that they can suffer.","context":"Which of these positions best describes your view?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Invertebrate Weights","options":[{"key":"humanEqual","label":"Equal to humans","description":"I treat a year of disability in shrimp the same as a year of disability in a human","info":"","panelLabel":"Equal","panelShort":"=","marketplaceValue":1},{"key":"human100x","label":"100x less than humans","description":"I value a human year of disability about 100x as much as a year of disability in a shrimp","info":"","panelLabel":"100x less","panelShort":"100x","marketplaceValue":0.01},{"key":"human1000x","label":"1000x less than humans","description":"I value a human year of disability about 1000x as much as a year of disability in a shrimp","info":"","panelLabel":"1000x less","panelShort":"1kx","marketplaceValue":0.001},{"key":"human10000x","label":"10,000x less than humans","description":"I value a human year of disability about 10,000x as much as a year of disability in a shrimp","info":"","panelLabel":"10kx less","panelShort":"10kx","marketplaceValue":0.0001},{"key":"noValue","label":"No value","description":"I do not value shrimp welfare","info":"","panelLabel":"None","panelShort":"0","marketplaceValue":0}]},{"id":"disability","type":"preset","presets":[{"id":"prioritize-lives","name":"Prioritize saving lives","description":"Places more emphasis on preventing deaths than relieving suffering from non-fatal diseases and disabilities.","credences":{"livesOnly":25,"livesMore":75,"equal":0,"disabilityMore":0}},{"id":"equal-weight","name":"Equal weight","description":"Values saving lives the same as restoring quality of life lost to disability. Similar to GiveWell's moral weights.","credences":{"livesOnly":0,"livesMore":0,"equal":100,"disabilityMore":0}},{"id":"prioritize-quality","name":"Prioritize improving quality of life","description":"Places more emphasis on relieving suffering due to disease and disability, instead of saving lives.","credences":{"livesOnly":0,"livesMore":0,"equal":25,"disabilityMore":75}}],"worldviewDimension":{"appliesWhen":"preventsDisability","applyAs":"multiplier","options":{"livesOnly":0,"livesMore":0.003,"equal":0.0172,"disabilityMore":0.086}},"categoryLabel":"Disability Weights","icon":"heart-pulse","previewText":"Disability vs. saving lives","heading":"When you think about helping people, how do you weigh saving lives against making people's existing lives better by reducing disease or disability?","info":"Here's an example that may help you think through your options. Suppose that living with blindness reduces someone's quality of life by 25%. You could either choose to cure blindness in a group of people, restoring them to full health for some number of years. Or you could save a child's life, giving them 50 extra years to live. How many years of blindness would you need to relieve to make it as good as saving the one child's life?\\n\\nSome charitable projects save lives—preventing people from dying. Others relieve suffering from diseases or disabilities that aren't fatal but significantly reduce quality of life.\\n\\n**How we measure this:** We can estimate how much a disease or disability reduces someone's quality of life (estimates typically come from the [Global Burden of Disease](https://www.healthdata.org/research-analysis/gbd)). For example:\\n\\n- **Clubfoot** might reduce quality of life by 20%\\n- **Blindness** might reduce quality of life by 25%\\n- **Severe multiple sclerosis** might reduce quality of life by 75%\\n\\nIf a charity treats someone's blindness for 10 years, that's like restoring 2.5 \\"full-health years\\" (10 years × 25% improvement). If a charity corrects an infant's clubfeet and prevents them from suffering from 60 years of that condition, that's like restoring 12 full health years. We call these recovered years \\"disability-adjusted life years\\" or DALYs.","context":"Imagine you must choose between two projects:\\n\\n- **Project A:** Save one child's life, giving them 50 additional years to live\\n- **Project B:** Cure or treat a serious disability for multiple people, restoring some number of \\"full-health years\\"\\n\\nHow many years of disability would you need to relieve to make it as good as saving the one child's life?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Disability Weights","options":[{"key":"livesOnly","label":"Saving lives only","description":"I only care about saving years of life due to death","info":"","panelLabel":"Lives only","panelShort":"0","marketplaceValue":0},{"key":"livesMore","label":"More weight on saving lives","description":"I put 5x as much value on saving a year of life lost to death than a year of life lost to disability","info":"I'd need to prevent 1000 years of blindness to equal saving 50 years of life.","panelLabel":"5x lives","panelShort":"5xL","marketplaceValue":0.003},{"key":"equal","label":"Equal weight for saving lives and relieving disabilities","description":"I value a year of life lost equally, whether it is due to death or disability","info":"I'd need to prevent 200 years of blindness to equal saving 50 years of life. For comparison, this is the weight given to disability by GiveWell.","panelLabel":"Equal","panelShort":"=","marketplaceValue":0.0172},{"key":"disabilityMore","label":"More weight on relieving disability","description":"I put 5x as much value on saving a year of life lost to disability than a year of life lost to death","info":"I'd need to prevent 40 years of blindness to equal saving 50 years of life.","panelLabel":"5x disability","panelShort":"5xD","marketplaceValue":0.086}]},{"id":"income","type":"preset","presets":[{"id":"prioritize-lives","name":"Prioritize saving lives","description":"Places much more emphasis on preventing deaths than improving material conditions for people living in poverty.","credences":{"livesOnly":25,"lives10x":75,"lives2x":0,"equal":0}},{"id":"balanced","name":"Balanced","description":"Gives more weight to saving lives than improving incomes, but cares about both goals. Similar to GiveWell's moral weights.","credences":{"livesOnly":0,"lives10x":25,"lives2x":75,"equal":0}},{"id":"poverty-relief","name":"Poverty relief","description":"Prioritizes poverty relief as highly as saving lives.","credences":{"livesOnly":0,"lives10x":0,"lives2x":25,"equal":75}}],"worldviewDimension":{"appliesWhen":"increasesIncome","applyAs":"multiplier","options":{"livesOnly":0,"lives10x":0.0017,"lives2x":0.0086,"equal":0.0172}},"categoryLabel":"Income Weights","icon":"banknote","previewText":"Income vs. saving lives","heading":"When you think about helping people, how do you weigh saving lives against increasing people's income, allowing them to improve their material quality of life?","info":"Here's an example that might help you think through your options. Suppose that you could make direct cash transfers that would double incomes for a group of people for a year. The same amount of money would save one child's life, giving them an extra 50 years to live. How many people's incomes would you have to double to make that option as good as saving the one child's life?","context":"**Imagine this scenario:** You could either:\\n\\n- **Option A:** Add one year of life to someone who would otherwise die\\n- **Option B:** Double someone's income for one year, significantly improving their material circumstances\\n\\nHow much do you value doubling someone's income for a year compared to adding one year to someone's life?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Income Weights","options":[{"key":"livesOnly","label":"Saving lives only","description":"I only care about adding years of life","info":"","panelLabel":"Lives only","panelShort":"0","marketplaceValue":0},{"key":"lives10x","label":"Much more weight on a year of life","description":"I put 10x as much value on a year of life compared to a year of doubled income","info":"I would need to double yearly income for 500 people to equal saving 50 years of life.","panelLabel":"10x lives","panelShort":"10x","marketplaceValue":0.0017},{"key":"lives2x","label":"Some more weight on a year of life","description":"I put 2x as much value on a year of life compared to a year of doubled income","info":"I would need to double yearly income for 100 people to equal saving 50 years of life. This is comparable to (but slightly higher than) the weight that GiveWell assigns to a year of income doubling compared to saving a year of life.","panelLabel":"2x lives","panelShort":"2x","marketplaceValue":0.0086},{"key":"equal","label":"Equal weight","description":"I put the same value on a year of life compared to a year of doubled income","info":"I would need to double yearly income for 50 people to equal saving 50 years of life.","panelLabel":"Equal","panelShort":"=","marketplaceValue":0.0172}]}]`
  ),
  nl = { questions: od },
  id = 'extreme',
  sd = {
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
  ad = { livesOnly: 25, livesMore: 25, equal: 25, disabilityMore: 25 },
  xs = { diminishingReturns: id, causes: sd, defaultCredences: ad },
  ud = !1,
  cd = { sliderLock: !0 },
  fd = {
    order: ['moralMarketplace', 'mergedFavorites', 'maxEV', 'parliament', 'maximin'],
    showMoralMarketplace: !0,
    showMergedFavorites: !0,
    showMaxEV: !0,
    showParliament: !1,
    showMaximin: !1,
    sideBySideComparison: !0,
  },
  mo = { advanced: ud, ui: cd, calculations: fd },
  Kt = {
    SESSION_ID: 'quiz_session_id',
    QUIZ_STATE: 'quiz_state',
    SKIP_CONFLICT: 'quiz_skip_conflict',
  },
  Pc = 7;
function dd() {
  let s = sessionStorage.getItem(Kt.SESSION_ID);
  return (s || ((s = crypto.randomUUID()), sessionStorage.setItem(Kt.SESSION_ID, s)), s);
}
function pd(s) {
  const {
      currentStep: a,
      worldviews: i,
      activeWorldviewId: c,
      selectedCalculations: d,
      worldviewNames: f,
      marketplaceBudget: p,
    } = s,
    w = {};
  for (const [g, v] of Object.entries(i)) {
    const x = {};
    for (const [I, O] of Object.entries(v.questions))
      x[I] = {
        credences: O.credences,
        originalCredences: O.originalCredences,
        inputMode: O.inputMode,
        lockedKeys: O.lockedKeys,
        selectedPreset: O.selectedPreset,
      };
    w[g] = { questions: x, completed: v.completed || !1 };
  }
  const h = {
    version: Pc,
    state: {
      currentStep: a,
      worldviews: w,
      activeWorldviewId: c,
      selectedCalculations: d,
      worldviewNames: f,
      marketplaceBudget: p,
    },
  };
  sessionStorage.setItem(Kt.QUIZ_STATE, JSON.stringify(h));
}
function Wn() {
  const s = sessionStorage.getItem(Kt.QUIZ_STATE);
  if (!s) return null;
  try {
    const a = JSON.parse(s);
    return a.version !== Pc ? (pr(), null) : a.state;
  } catch {
    return (pr(), null);
  }
}
function xc() {
  return sessionStorage.getItem(Kt.QUIZ_STATE) !== null;
}
function pr() {
  sessionStorage.removeItem(Kt.QUIZ_STATE);
}
function md() {
  sessionStorage.setItem(Kt.SKIP_CONFLICT, 'true');
}
function Cc() {
  const s = sessionStorage.getItem(Kt.SKIP_CONFLICT) === 'true';
  return (s && sessionStorage.removeItem(Kt.SKIP_CONFLICT), s);
}
const hd = '/api',
  vd = { share: `${hd}/share` },
  { questions: yd } = nl;
function gd() {
  return yd
    .filter((s) => s.type !== 'intermission' && s.options)
    .map((s) => ({ id: s.id, optionKeys: s.options.map((a) => a.key) }));
}
function Ic(s) {
  const a = gd(),
    i = new Set(a.map((p) => p.id)),
    d = Object.keys(s).filter((p) => !i.has(p)),
    f = a.filter((p) => !s[p.id]);
  return d.length > 0 || f.length > 0
    ? { valid: !1, error: 'Quiz has changed since this link was created' }
    : { valid: !0 };
}
async function wd(s) {
  try {
    const a = await fetch(`${vd.share}?id=${encodeURIComponent(s)}`);
    if (!a.ok) {
      if (a.status === 404) return null;
      throw new Error('Failed to fetch share data');
    }
    return await a.json();
  } catch {
    return null;
  }
}
function vs() {
  const s = window.location.hash;
  if (s.startsWith('#s=')) {
    const a = s.slice(3);
    return a ? { hasShare: !0, id: a } : { hasShare: !1 };
  }
  return { hasShare: !1 };
}
function _d(s) {
  const a = {};
  for (const [i, c] of Object.entries(s))
    a[i] = { credences: c, inputMode: 'options', lockedKeys: [] };
  return a;
}
async function Oc() {
  const s = vs();
  if (!s.hasShare) return null;
  const a = await wd(s.id);
  if (!a) return { error: 'This share link has expired or no longer exists' };
  if (a.worldviews && a.activeWorldviewId) {
    for (const d of Object.values(a.worldviews))
      if (d.questions) {
        const f = Ic(d.questions);
        if (!f.valid) return { error: f.error };
      }
    return {
      worldviews: a.worldviews,
      activeWorldviewId: a.activeWorldviewId,
      selectedCalculations: a.selectedCalculations || null,
      worldviewNames: a.worldviewNames || null,
      marketplaceBudget: a.marketplaceBudget || null,
    };
  }
  const i = a.questions || (a.credences && _d(a.credences));
  if (!i) return { error: 'Invalid share data format' };
  const c = Ic(i);
  return c.valid ? { questions: i } : { error: c.error };
}
function wn() {
  window.location.hash &&
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
const ft = 'rgba(255, 255, 255, 0.8)',
  jc = {
    default: [ft, ft, ft],
    selection: [ft, ft, ft],
    credence: [ft, ft, ft],
    preset: [ft, ft, ft, ft, ft],
  },
  ys = { OPTIONS: 'options' },
  $t = { DEFAULT: 'default', INTERMISSION: 'intermission', RATIO: 'ratio' };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kd = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  Dc = (...s) =>
    s
      .filter((a, i, c) => !!a && a.trim() !== '' && c.indexOf(a) === i)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Sd = {
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
 */ const Ed = z.forwardRef(
  (
    {
      color: s = 'currentColor',
      size: a = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: c,
      className: d = '',
      children: f,
      iconNode: p,
      ...w
    },
    h
  ) =>
    z.createElement(
      'svg',
      {
        ref: h,
        ...Sd,
        width: a,
        height: a,
        stroke: s,
        strokeWidth: c ? (Number(i) * 24) / Number(a) : i,
        className: Dc('lucide', d),
        ...w,
      },
      [...p.map(([g, v]) => z.createElement(g, v)), ...(Array.isArray(f) ? f : [f])]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ac = (s, a) => {
  const i = z.forwardRef(({ className: c, ...d }, f) =>
    z.createElement(Ed, { ref: f, iconNode: a, className: Dc(`lucide-${kd(s)}`, c), ...d })
  );
  return ((i.displayName = `${s}`), i);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xd = Ac('ExternalLink', [
  ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
  ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
  ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cd = Ac('Lock', [
    ['rect', { width: '18', height: '11', x: '3', y: '11', rx: '2', ry: '2', key: '1w4ew1' }],
    ['path', { d: 'M7 11V7a5 5 0 0 1 10 0v4', key: 'fwvmzm' }],
  ]),
  Id = '_overlay_13cvn_1',
  Od = '_modal_13cvn_12',
  jd = '_title_13cvn_21',
  Nd = '_message_13cvn_29',
  Td = '_buttons_13cvn_36',
  Ld = '_button_13cvn_36',
  _n = { overlay: Id, modal: Od, title: jd, message: Nd, buttons: Td, button: Ld };
function Md({ onKeepMine: s, onLoadShared: a, onOpenNewTab: i }) {
  return b.jsx('div', {
    className: _n.overlay,
    children: b.jsxs('div', {
      className: _n.modal,
      children: [
        b.jsx('h2', { className: _n.title, children: 'You have unsaved progress' }),
        b.jsx('p', {
          className: _n.message,
          children:
            'Loading this shared link will replace your current quiz answers. What would you like to do?',
        }),
        b.jsxs('div', {
          className: _n.buttons,
          children: [
            b.jsx('button', {
              onClick: s,
              className: `btn btn-secondary ${_n.button}`,
              children: 'Keep my progress',
            }),
            b.jsx('button', {
              onClick: a,
              className: `btn btn-primary ${_n.button}`,
              children: 'Load shared results',
            }),
            b.jsxs('button', {
              onClick: i,
              className: `btn btn-secondary ${_n.button}`,
              children: [b.jsx(xd, { size: 16 }), 'Open in new tab'],
            }),
          ],
        }),
      ],
    }),
  });
}
const { causes: vo } = xs,
  Rd = { none: 1, sqrt: 0.5, extreme: 0.1 };
function Pd(s) {
  const a = (s == null ? void 0 : s.diminishingReturns) || xs.diminishingReturns;
  return Rd[a] ?? 0.5;
}
function Dd(s) {
  const a = JSON.stringify(s);
  let i = 0;
  for (let c = 0; c < a.length; c++) {
    const d = a.charCodeAt(c);
    ((i = (i << 5) - i + d), (i = i & i));
  }
  return Math.abs(i);
}
function Ad(s) {
  let a = s;
  return function () {
    ((a |= 0), (a = (a + 1831565813) | 0));
    let i = Math.imul(a ^ (a >>> 15), 1 | a);
    return (
      (i = (i + Math.imul(i ^ (i >>> 7), 61 | i)) ^ i),
      ((i ^ (i >>> 14)) >>> 0) / 4294967296
    );
  };
}
function zc(s, a, i = 0.5) {
  if (i >= 1) {
    const p = Math.max(...s);
    if (p <= 0) return s.map(() => a / s.length);
    const w = s.map((h, g) => (h === p ? g : -1)).filter((h) => h >= 0);
    return s.map((h, g) => (w.includes(g) ? a / w.length : 0));
  }
  const c = 1 / (1 - i),
    d = s.map((p) => (p > 0 ? Math.pow(p, c) : 0)),
    f = d.reduce((p, w) => p + w, 0);
  return f === 0 ? s.map(() => a / s.length) : d.map((p) => (p / f) * a);
}
function Wc(s = !1) {
  return Object.fromEntries(
    nl.questions
      .filter((a) => a.type !== 'intermission' && a.worldviewDimension)
      .map((a) => [
        a.id,
        s ? { ...a.worldviewDimension, name: a.editPanelTitle } : a.worldviewDimension,
      ])
  );
}
const yo = Wc();
function* zd(s) {
  const a = Object.keys(s);
  if (a.length === 0) return;
  function* i(c, d) {
    if (c === a.length) {
      let w = 1;
      for (const h of a) w *= s[h][d[h]] / 100;
      yield { options: d, probability: w };
      return;
    }
    const f = a[c],
      p = Object.keys(s[f]);
    for (const w of p) yield* i(c + 1, { ...d, [f]: w });
  }
  yield* i(0, {});
}
function* Wd(s, a = 2e3) {
  const i = Object.keys(s);
  if (i.length === 0) return;
  const c = Dd(s),
    d = Ad(c),
    f = {};
  for (const h of i) {
    const g = Object.entries(s[h]);
    let v = 0;
    f[h] = g.map(([x, I]) => ((v += I / 100), { key: x, cumsum: v }));
  }
  const p = (h, g) => {
      const v = f[h];
      for (const { key: x, cumsum: I } of v) if (g <= I) return x;
      return v[v.length - 1].key;
    },
    w = 1 / a;
  for (let h = 0; h < a; h++) {
    const g = {};
    for (const v of i) g[v] = p(v, d());
    yield { options: g, probability: w };
  }
}
function Fd(s) {
  return Object.values(s).reduce((a, i) => a * Object.keys(i).length, 1);
}
function Vd(s) {
  for (const a of Object.values(s)) {
    const i = Object.values(a),
      c = i.filter((f) => f === 100).length === 1,
      d = i.filter((f) => f === 0).length === i.length - 1;
    if (!c || !d) return !1;
  }
  return !0;
}
function* Ud(s) {
  const a = {};
  for (const [i, c] of Object.entries(s))
    for (const [d, f] of Object.entries(c))
      if (f === 100) {
        a[i] = d;
        break;
      }
  yield { options: a, probability: 1 };
}
function* Cs(s, a = 500, i = 2e3) {
  if (Vd(s)) {
    yield* Ud(s);
    return;
  }
  Fd(s) <= a ? yield* zd(s) : yield* Wd(s, i);
}
function bd(s, a, i) {
  let c = s.points;
  for (const [d, f] of Object.entries(i)) {
    const p = a[d],
      w = f.options[p];
    if (f.applyAs === 'multiplier')
      if (f.appliesTo) {
        const h = s[f.appliesTo];
        if (h && typeof w == 'object') {
          const g = w[h];
          g !== void 0 && (c *= g);
        }
      } else f.appliesWhen && s[f.appliesWhen] && (c *= w);
    else if (f.applyAs === 'exponent' && f.appliesTo) {
      const h = s[f.appliesTo] || 1;
      c *= Math.pow(h, w);
    }
  }
  return c;
}
function Is(s, a, i) {
  const c = {};
  for (const [d, f] of Object.entries(a)) c[d] = bd(f, s, i);
  return c;
}
function Bd(s) {
  const a = Math.max(...Object.values(s));
  return Object.keys(s).filter((i) => Math.abs(s[i] - a) < 1e-4);
}
function Fc(s) {
  return Object.fromEntries(Object.keys(s).map((a) => [a, 0]));
}
function Qd(s, a, i) {
  if (a.applyAs === 'multiplier') {
    if (a.appliesTo) {
      const d = s[a.appliesTo];
      if (!d) return 1;
      let f = 0;
      for (const [p, w] of Object.entries(i)) {
        const h = a.options[p],
          g = typeof h == 'object' ? (h[d] ?? 1) : (h ?? 1);
        f += (w / 100) * g;
      }
      return f;
    }
    if (!a.appliesWhen || !s[a.appliesWhen]) return 1;
    let c = 0;
    for (const [d, f] of Object.entries(i)) {
      const p = a.options[d] ?? 1;
      c += (f / 100) * p;
    }
    return c;
  }
  return 1;
}
function Hd(s, a) {
  const i = (a == null ? void 0 : a.causes) || vo,
    c = (a == null ? void 0 : a.dimensions) || yo,
    d = Object.keys(i),
    f = {};
  for (const g of d) {
    const v = i[g];
    let x = v.points;
    for (const [I, O] of Object.entries(c)) {
      const P = s[I];
      P && (x *= Qd(v, O, P));
    }
    f[g] = x;
  }
  const p = d.map((g) => f[g]),
    w = zc(p, 100, 1),
    h = { evs: f };
  return (
    d.forEach((g, v) => {
      h[g] = w[v];
    }),
    h
  );
}
function qd(s, a) {
  const i = (a == null ? void 0 : a.causes) || vo,
    c = (a == null ? void 0 : a.dimensions) || yo,
    d = Fc(i);
  for (const { options: p, probability: w } of Cs(s)) {
    const h = Is(p, i, c),
      g = Bd(h),
      v = w / g.length;
    for (const x of g) d[x] += v;
  }
  const f = {};
  for (const p of Object.keys(i)) f[p] = d[p] * 100;
  return f;
}
function $d(s, a) {
  const i = (a == null ? void 0 : a.causes) || vo,
    c = (a == null ? void 0 : a.dimensions) || yo,
    d = Pd(a),
    f = Object.keys(i),
    p = Fc(i);
  for (const { options: w, probability: h } of Cs(s)) {
    const g = Is(w, i, c),
      v = h * 100,
      x = f.map((O) => g[O]),
      I = zc(x, v, d);
    f.forEach((O, P) => {
      p[O] += I[P];
    });
  }
  return p;
}
function Kd(s, a) {
  const i = (a == null ? void 0 : a.causes) || vo,
    c = (a == null ? void 0 : a.dimensions) || yo,
    d = Object.keys(i),
    f = Gd(d),
    p = [...Cs(s, 500, 1e3)];
  let w = f[0],
    h = -1 / 0;
  for (const g of f) {
    let v = 1 / 0;
    for (const { options: x, probability: I } of p) {
      if (I < 1e-4) continue;
      const O = Is(x, i, c);
      let P = 0;
      for (const M of d) P += O[M] * (g[M] / 100);
      v = Math.min(v, P);
    }
    v > h && ((h = v), (w = { ...g }));
  }
  return w;
}
function Gd(s) {
  const a = [],
    i = s.length,
    c = (h) => {
      const g = {};
      return (
        s.forEach((v, x) => {
          g[v] = h[x];
        }),
        g
      );
    };
  for (let h = 0; h < i; h++) {
    const g = new Array(i).fill(0);
    ((g[h] = 100), a.push(c(g)));
  }
  for (let h = 0; h < i; h++)
    for (let g = h + 1; g < i; g++) {
      const v = new Array(i).fill(0);
      ((v[h] = 50), (v[g] = 50), a.push(c(v)));
    }
  const d = Math.floor(100 / i),
    f = 100 - d * i,
    p = new Array(i).fill(d);
  ((p[0] += f), a.push(c(p)));
  const w = [
    [60, 20, 20],
    [70, 15, 15],
    [80, 10, 10],
  ];
  for (const h of w)
    if (h.length === i)
      for (let g = 0; g < i; g++) {
        const v = new Array(i).fill(0);
        v[g] = h[0];
        let x = 1;
        for (let I = 0; I < i; I++) I !== g && x < h.length && (v[I] = h[x++]);
        a.push(c(v));
      }
  return a;
}
function Yd(s, a, i, c = null, d = null) {
  const f = Array.isArray(d) ? d : d ? [d] : [],
    p = f.reduce((O, P) => O + (i[P] || 0), 0),
    w = 100 - p;
  a = Math.max(0, Math.min(w, a));
  const h = c || i,
    g = Object.keys(i).filter((O) => O !== s && !f.includes(O)),
    v = g.reduce((O, P) => O + h[P], 0),
    x = 100 - a - p,
    I = { [s]: a };
  for (const O of f) I[O] = i[O];
  if (v === 0) {
    const O = Math.floor(x / g.length);
    let P = x - O * g.length;
    g.forEach((M, j) => {
      I[M] = O + (j < P ? 1 : 0);
    });
  } else {
    let O = 0;
    g.forEach((P, M) => {
      if (M === g.length - 1) I[P] = Math.max(0, x - O);
      else {
        const j = h[P] / v,
          F = x * j;
        ((I[P] = Math.max(0, F)), (O += I[P]));
      }
    });
  }
  return I;
}
function Xd(s) {
  const a = Object.keys(s),
    i = {};
  let c = 0;
  return (
    a.slice(0, -1).forEach((d) => {
      ((i[d] = Math.round(s[d])), (c += i[d]));
    }),
    (i[a[a.length - 1]] = 100 - c),
    i
  );
}
const Jd = 897,
  Zd = 10,
  ep = {
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
  tp = { budget: Jd, incrementSize: Zd, projects: ep },
  { projects: tl, budget: np, incrementSize: Vc } = tp,
  rp = ['disability', 'income', 'animal', 'invertebrate', 'timeframes', 'risk', 'xrisk'];
function lp() {
  const s = {};
  for (const i of nl.questions) i.options && (s[i.id] = i);
  const a = [];
  for (const i of rp) {
    const c = s[i];
    if (!c || c.options[0].marketplaceValue === void 0) continue;
    const d = c.options.map((f) => f.marketplaceValue);
    a.push({ questionId: i, optionValues: d });
  }
  return a;
}
const Os = lp(),
  Nc = Os.map((s) => s.optionValues);
function op(s, a, i, c) {
  const d = s * i,
    f = s * c,
    p = (f + d) / 2;
  return {
    human_life_years: 1,
    human_ylds: s,
    human_income_doublings: a,
    chickens_birds: d,
    mammals: d,
    fish: p,
    shrimp: f,
    non_shrimp_invertebrates: f,
  };
}
function ip(s, a, i, c) {
  const d = s.values;
  let f = 0;
  for (let p = 0; p < 6; p++) f += d[p][c] * i[p];
  return a * f;
}
function sp(s, a, i, c) {
  let d = 0;
  for (const f of Object.values(s.effects)) {
    const p = a[f.recipient_type] ?? 0;
    d += ip(f, p, i, c);
  }
  return d;
}
function ap(s, a, i, c) {
  const d = {};
  for (const [f, p] of Object.entries(s)) d[f] = sp(p, a, i, c);
  return d;
}
function up(s, a, i) {
  const c = {};
  for (const [d, f] of Object.entries(s))
    a[d].tags.near_term_xrisk ? (c[d] = f) : (c[d] = f * (1 - i));
  return c;
}
function cp(s = tl) {
  if (Nc.length < 7) return [];
  const [a, i, c, d, f, p, w] = Nc,
    h = [];
  for (const g of a)
    for (const v of i)
      for (const x of c)
        for (const I of d)
          for (let O = 0; O < f.length; O++)
            for (const P of p)
              for (const M of w) {
                const j = op(g, v, x, I),
                  F = f[O],
                  N = ap(s, j, F, P),
                  V = up(N, s, M);
                h.push({ project_values: V });
              }
  return h;
}
let fs = null;
function fp() {
  return (fs || (fs = cp()), fs);
}
function dp(s) {
  const a = [];
  let i = 0;
  const [c, d, f, p, w, h, g] = s;
  for (let v = 0; v < c.length; v++)
    for (let x = 0; x < d.length; x++)
      for (let I = 0; I < f.length; I++)
        for (let O = 0; O < p.length; O++)
          for (let P = 0; P < w.length; P++)
            for (let M = 0; M < h.length; M++)
              for (let j = 0; j < g.length; j++) {
                const F = c[v] * d[x] * f[I] * p[O] * w[P] * h[M] * g[j];
                (F > 0 && a.push({ result_idx: i, credence: F }), i++);
              }
  return a;
}
function pp(s, a, i = tl) {
  const c = Object.keys(i),
    d = c.length,
    f = a.length,
    p = new Float64Array(f * d),
    w = new Float64Array(f);
  for (let g = 0; g < f; g++) {
    const v = s[a[g].result_idx].project_values;
    w[g] = a[g].credence;
    const x = g * d;
    for (let I = 0; I < d; I++) p[x + I] = v[c[I]];
  }
  const h = c.map((g) => {
    const v = i[g].diminishing_returns,
      x = new Float64Array(v.length);
    return (x.set(v), x);
  });
  return { scoreMatrix: p, credences: w, numActive: f, projectIds: c, drArrays: h };
}
function mp(s, a, i, { packed: c }) {
  const { scoreMatrix: d, credences: f, numActive: p, projectIds: w, drArrays: h } = c,
    g = w.length,
    v = new Float64Array(g);
  for (let O = 0; O < g; O++) {
    const P = Math.floor(a[w[O]] / 10),
      M = h[O];
    v[O] = P >= M.length ? M[M.length - 1] : M[P];
  }
  const x = new Float64Array(g);
  for (let O = 0; O < p; O++) {
    const P = O * g,
      M = f[O] * i;
    let j = 0,
      F = d[P] * v[0];
    for (let N = 1; N < g; N++) {
      const V = d[P + N] * v[N];
      V > F && ((F = V), (j = N));
    }
    x[j] += M;
  }
  const I = {};
  for (let O = 0; O < g; O++) I[w[O]] = x[O];
  return I;
}
function hp(s, a, i, c = {}) {
  const d = c.incrementSize ?? Vc,
    f = {};
  for (const w of Object.keys(s)) f[w] = 0;
  let p = i;
  for (; p > 0; ) {
    const w = Math.min(d, p),
      h = a(s, f, w, c);
    for (const g of Object.keys(s)) f[g] += h[g];
    p -= w;
  }
  return { funding: f };
}
function vp(s) {
  const a = [];
  for (const i of Os) {
    const c = s[i.questionId];
    if (!c) {
      const p = i.optionValues.length;
      a.push(new Array(p).fill(1 / p));
      continue;
    }
    const d = nl.questions.find((p) => p.id === i.questionId);
    if (!d || !d.options) {
      const p = i.optionValues.length;
      a.push(new Array(p).fill(1 / p));
      continue;
    }
    const f = d.options.map((p) => (c[p.key] ?? 0) / 100);
    a.push(f);
  }
  return a;
}
function yp(s, a = {}) {
  if (Os.length < 7) {
    const h = {};
    for (const g of Object.keys(tl)) h[g] = 0;
    return h;
  }
  const i = a.budget ? a.budget / 1e6 : np,
    c = vp(s),
    d = dp(c),
    f = pp(fp(), d, tl),
    { funding: p } = hp(tl, mp, i, { packed: f, incrementSize: Vc }),
    w = {};
  for (const [h, g] of Object.entries(p)) w[h] = (g / i) * 100;
  return w;
}
const gp = [
  { flag: 'showMoralMarketplace', key: 'moralMarketplace', hasEvs: !1 },
  { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
  { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
  { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
  { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
];
function wp() {
  var i;
  const s = ((i = mo.calculations) == null ? void 0 : i.order) || [];
  return [...gp]
    .sort((c, d) => {
      const f = s.indexOf(c.key),
        p = s.indexOf(d.key);
      return f === -1 && p === -1 ? 0 : f === -1 ? 1 : p === -1 ? -1 : f - p;
    })
    .filter((c) => {
      var d;
      return ((d = mo.calculations) == null ? void 0 : d[c.flag]) === !0;
    });
}
const _p = mo.advanced === !0,
  kp = nl,
  { questions: Sp } = kp,
  { causes: Ep, defaultCredences: xp } = xs;
function Cp(s) {
  var a;
  return !((a = s.type) != null && a.startsWith('_'));
}
const Ve = Sp.filter(Cp);
function qt(s) {
  return (s == null ? void 0 : s.type) === $t.INTERMISSION;
}
function ds(s, a) {
  let i = 0;
  for (let c = 0; c < a; c++) qt(s[c]) || i++;
  return i;
}
function Ip(s) {
  {
    const a = s.type || $t.DEFAULT;
    return jc[a] || jc[$t.DEFAULT];
  }
}
const Op = Ve.filter((s) => !qt(s)),
  ps = Op.length,
  Tc = Ve.map((s) => {
    var i;
    if (qt(s)) return { ...s, type: $t.INTERMISSION };
    if (s.type === $t.RATIO) return { ...s, type: $t.RATIO };
    const a = Ip(s);
    return {
      ...s,
      type: s.type || $t.DEFAULT,
      options: (i = s.options) == null ? void 0 : i.map((c, d) => ({ ...c, color: a[d] || a[0] })),
    };
  });
function js(s) {
  var d;
  if (s.type === $t.RATIO)
    return { value: ((d = s.ratioConfig) == null ? void 0 : d.defaultValue) ?? 0.5 };
  if (s.defaultCredences) return { ...s.defaultCredences };
  if (!s.options) return {};
  const a = s.options.map((f) => f.key),
    i = Math.floor(100 / a.length),
    c = 100 - i * a.length;
  return Object.fromEntries(a.map((f, p) => [f, i + (p === 0 ? c : 0)]));
}
function Uc(s) {
  var a;
  return s.type === $t.RATIO
    ? {
        credences: { value: ((a = s.ratioConfig) == null ? void 0 : a.defaultValue) ?? 0.5 },
        originalCredences: null,
        inputMode: ys.OPTIONS,
        lockedKeys: [],
        selectedPreset: null,
      }
    : {
        credences: js(s),
        originalCredences: null,
        inputMode: ys.OPTIONS,
        lockedKeys: [],
        selectedPreset: null,
      };
}
function gs() {
  return Object.fromEntries(Ve.filter((s) => !qt(s)).map((s) => [s.id, Uc(s)]));
}
const bc = 6,
  Bc = ['1', '2', '3'];
function ws() {
  return Object.fromEntries(Bc.map((s) => [s, { questions: gs(), completed: !1 }]));
}
function jp(s) {
  return s != null && s.questions
    ? Object.entries(s.questions).some(([a, i]) => {
        if (!i.credences) return !1;
        const c = Ve.find((f) => f.id === a);
        if (!c) return !1;
        const d = js(c);
        return Object.entries(i.credences).some(([f, p]) => p !== (d[f] ?? 0));
      })
    : !1;
}
function _s() {
  return Object.fromEntries(Bc.map((s) => [s, `Worldview ${s}`]));
}
const ks = 9e8,
  Qc = () => 'disclaimer',
  Hc = {
    currentStep: Qc(),
    worldviews: ws(),
    worldviewNames: _s(),
    activeWorldviewId: '1',
    expandedPanel: null,
    debugConfig: null,
    selectedCalculations: { left: null, right: null },
    marketplaceBudget: ks,
    justCompletedWorldview: null,
  },
  pe = {
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
function Ss(s) {
  return s.worldviews[s.activeWorldviewId].questions;
}
function Np(s, a, i) {
  const c = Ss(s),
    d = s.worldviews[s.activeWorldviewId];
  return {
    ...s,
    worldviews: {
      ...s.worldviews,
      [s.activeWorldviewId]: { ...d, questions: { ...c, [a]: { ...c[a], ...i } } },
    },
  };
}
function Tp(s, a) {
  switch (a.type) {
    case pe.GO_TO_STEP:
      return { ...s, currentStep: a.payload };
    case pe.UPDATE_QUESTION:
      return Np(s, a.payload.questionId, a.payload.updates);
    case pe.SET_EXPANDED_PANEL:
      return { ...s, expandedPanel: a.payload };
    case pe.SAVE_ORIGINALS: {
      const i = Ss(s),
        c = s.worldviews[s.activeWorldviewId];
      return {
        ...s,
        worldviews: {
          ...s.worldviews,
          [s.activeWorldviewId]: {
            ...c,
            questions: Object.fromEntries(
              Object.entries(i).map(([d, f]) => [
                d,
                { ...f, originalCredences: f.originalCredences || { ...f.credences } },
              ])
            ),
          },
        },
      };
    }
    case pe.RESET_TO_ORIGINAL: {
      const i = Ss(s),
        c = s.worldviews[s.activeWorldviewId];
      return {
        ...s,
        worldviews: {
          ...s.worldviews,
          [s.activeWorldviewId]: {
            ...c,
            questions: Object.fromEntries(
              Object.entries(i).map(([d, f]) => [
                d,
                { ...f, credences: f.originalCredences ? { ...f.originalCredences } : f.credences },
              ])
            ),
          },
        },
      };
    }
    case pe.RESET_QUIZ:
      return { ...Hc, currentStep: Qc(), worldviews: ws(), worldviewNames: _s() };
    case pe.SWITCH_WORLDVIEW:
      return s.worldviews[a.payload] ? { ...s, activeWorldviewId: a.payload } : s;
    case pe.SET_WORLDVIEW_NAME: {
      const { worldviewId: i, name: c } = a.payload;
      return s.worldviews[i] ? { ...s, worldviewNames: { ...s.worldviewNames, [i]: c } } : s;
    }
    case pe.SET_MARKETPLACE_BUDGET:
      return { ...s, marketplaceBudget: a.payload };
    case pe.MARK_WORLDVIEW_COMPLETED: {
      const i = a.payload;
      return s.worldviews[i]
        ? { ...s, worldviews: { ...s.worldviews, [i]: { ...s.worldviews[i], completed: !0 } } }
        : s;
    }
    case pe.ADD_WORLDVIEW: {
      const i = Object.keys(s.worldviews);
      if (
        i.length >= bc ||
        !i.every((p) => {
          var w;
          return (w = s.worldviews[p]) == null ? void 0 : w.completed;
        })
      )
        return s;
      const d = Math.max(...i.map((p) => parseInt(p, 10))),
        f = String(d + 1);
      return {
        ...s,
        worldviews: { ...s.worldviews, [f]: { questions: gs(), completed: !1 } },
        worldviewNames: { ...s.worldviewNames, [f]: `Worldview ${f}` },
        activeWorldviewId: f,
        currentStep: Ve[0].id,
      };
    }
    case pe.RESTORE_FROM_URL:
    case pe.RESTORE_FROM_SESSION: {
      const i = a.type === pe.RESTORE_FROM_URL,
        {
          worldviews: c,
          worldviewNames: d,
          activeWorldviewId: f,
          questions: p,
          credences: w,
          currentStep: h,
          selectedCalculations: g,
          marketplaceBudget: v,
        } = a.payload,
        x = (M, j) => ({
          credences: M.credences,
          originalCredences: M.originalCredences
            ? { ...M.originalCredences }
            : j
              ? { ...M.credences }
              : null,
          inputMode: M.inputMode || ys.OPTIONS,
          lockedKeys: M.lockedKeys || (M.lockedKey ? [M.lockedKey] : []),
          selectedPreset: M.selectedPreset || null,
        }),
        I = (M, j) => {
          const F = {};
          for (const [N, V] of Object.entries(M)) {
            const B = {};
            for (const [H, J] of Object.entries(V.questions)) B[H] = x(J, j);
            F[N] = { questions: B, completed: V.completed || !1 };
          }
          return (F[1] || (F[1] = { questions: gs(), completed: !1 }), F);
        },
        O = (M, j) => {
          const F = {},
            N = Object.keys(j || {});
          N.includes('1') || N.push('1');
          for (const V of N) F[V] = (M == null ? void 0 : M[V]) || `Worldview ${V}`;
          return F;
        };
      if (c && f)
        return {
          ...s,
          currentStep: i ? 'results' : h,
          worldviews: I(c, i),
          worldviewNames: O(d, c),
          activeWorldviewId: f,
          selectedCalculations: g || s.selectedCalculations,
          marketplaceBudget: v || ks,
        };
      const P = {};
      if (p) for (const [M, j] of Object.entries(p)) P[M] = x(j, i);
      else if (w)
        for (const [M, j] of Object.entries(w))
          P[M] = { ...Uc(), credences: j, originalCredences: i ? { ...j } : null };
      return {
        ...s,
        currentStep: i ? 'results' : h,
        worldviews: { ...ws(), 1: { questions: P, completed: !1 } },
        worldviewNames: _s(),
        activeWorldviewId: '1',
        marketplaceBudget: ks,
      };
    }
    case pe.SET_DEBUG_CONFIG:
      return { ...s, debugConfig: a.payload };
    case pe.SET_JUST_COMPLETED_WORLDVIEW:
      return { ...s, justCompletedWorldview: a.payload };
    case pe.CLEAR_JUST_COMPLETED_WORLDVIEW:
      return { ...s, justCompletedWorldview: null };
    case pe.SET_SELECTED_CALCULATIONS:
      return { ...s, selectedCalculations: { ...s.selectedCalculations, ...a.payload } };
    default:
      return s;
  }
}
const qc = z.createContext(null);
function Lp({ children: s }) {
  const [a, i] = z.useReducer(Tp, Hc),
    [c, d] = z.useState(null),
    [f, p] = z.useState(!0),
    [w, h] = z.useState(null),
    [g] = z.useState(() => dd()),
    v = z.useRef(null);
  (z.useEffect(() => {
    (async () => {
      const G = vs(),
        de = xc();
      if (!G.hasShare) {
        if (de) {
          const Le = Wn();
          Le && i({ type: pe.RESTORE_FROM_SESSION, payload: Le });
        }
        p(!1);
        return;
      }
      const Ie = await Oc();
      if (!Ie) {
        if ((wn(), de)) {
          const Le = Wn();
          Le && i({ type: pe.RESTORE_FROM_SESSION, payload: Le });
        }
        p(!1);
        return;
      }
      if (Ie.error) {
        if ((d(Ie.error), wn(), window.setTimeout(() => d(null), 5e3), de)) {
          const Le = Wn();
          Le && i({ type: pe.RESTORE_FROM_SESSION, payload: Le });
        }
        p(!1);
        return;
      }
      const xt = Cc();
      if (de && !xt) {
        const Le = Wn();
        if (Le && Le.currentStep !== 'welcome') {
          (h({ shareData: Ie, shareUrl: window.location.href }), p(!1));
          return;
        }
      }
      (i({ type: pe.RESTORE_FROM_URL, payload: Ie }), wn(), pr(), p(!1));
    })();
  }, []),
    z.useEffect(() => {
      const W = async () => {
        if (!vs().hasShare) return;
        const de = await Oc();
        if (!de || de.error) {
          (de != null && de.error && (d(de.error), window.setTimeout(() => d(null), 5e3)), wn());
          return;
        }
        const Ie = xc(),
          xt = Cc();
        if (Ie && !xt) {
          const Le = Wn();
          if (Le && Le.currentStep !== 'welcome') {
            h({ shareData: de, shareUrl: window.location.href });
            return;
          }
        }
        (i({ type: pe.RESTORE_FROM_URL, payload: de }), wn(), pr());
      };
      return (
        window.addEventListener('hashchange', W),
        () => window.removeEventListener('hashchange', W)
      );
    }, []));
  const x = z.useCallback(() => {
      const W = Wn();
      (W && i({ type: pe.RESTORE_FROM_SESSION, payload: W }), wn(), h(null));
    }, []),
    I = z.useCallback(() => {
      (w != null && w.shareData && (i({ type: pe.RESTORE_FROM_URL, payload: w.shareData }), pr()),
        wn(),
        h(null));
    }, [w]),
    O = z.useCallback(() => {
      (md(), w != null && w.shareUrl && window.open(w.shareUrl, '_blank'));
      const W = Wn();
      (W && i({ type: pe.RESTORE_FROM_SESSION, payload: W }), wn(), h(null));
    }, [w]);
  z.useEffect(() => {
    if (!f)
      return (
        v.current && clearTimeout(v.current),
        (v.current = setTimeout(() => {
          pd({
            currentStep: a.currentStep,
            worldviews: a.worldviews,
            worldviewNames: a.worldviewNames,
            activeWorldviewId: a.activeWorldviewId,
            selectedCalculations: a.selectedCalculations,
            marketplaceBudget: a.marketplaceBudget,
          });
        }, 300)),
        () => {
          v.current && clearTimeout(v.current);
        }
      );
  }, [
    a.currentStep,
    a.worldviews,
    a.worldviewNames,
    a.activeWorldviewId,
    a.selectedCalculations,
    a.marketplaceBudget,
    f,
  ]);
  const P = z.useCallback((W) => {
      (i({ type: pe.GO_TO_STEP, payload: W }), window.scrollTo(0, 0));
    }, []),
    M = z.useCallback((W, G) => {
      i({ type: pe.UPDATE_QUESTION, payload: { questionId: W, updates: G } });
    }, []),
    j = z.useCallback((W, G) => M(W, { credences: G }), [M]),
    F = z.useCallback((W, G) => M(W, { inputMode: G }), [M]),
    N = z.useCallback((W, G) => M(W, { lockedKeys: G }), [M]),
    V = z.useCallback((W, G) => M(W, { selectedPreset: G }), [M]),
    B = z.useCallback((W) => {
      i({ type: pe.SET_EXPANDED_PANEL, payload: W });
    }, []),
    H = z.useCallback(() => {
      i({ type: pe.SAVE_ORIGINALS });
    }, []),
    J = z.useCallback(() => {
      i({ type: pe.RESET_TO_ORIGINAL });
    }, []),
    ee = z.useCallback(() => {
      (i({ type: pe.RESET_QUIZ }), pr());
    }, []),
    te = z.useCallback((W) => {
      i({ type: pe.SET_DEBUG_CONFIG, payload: W });
    }, []),
    ie = z.useCallback((W) => {
      i({ type: pe.SWITCH_WORLDVIEW, payload: W });
    }, []),
    ue = z.useCallback((W) => {
      i({ type: pe.SET_SELECTED_CALCULATIONS, payload: W });
    }, []),
    Z = z.useCallback((W, G) => {
      i({ type: pe.SET_WORLDVIEW_NAME, payload: { worldviewId: W, name: G } });
    }, []),
    me = z.useCallback((W) => {
      i({ type: pe.SET_MARKETPLACE_BUDGET, payload: W });
    }, []),
    ce = z.useCallback((W) => {
      i({ type: pe.SET_JUST_COMPLETED_WORLDVIEW, payload: W });
    }, []),
    Ee = z.useCallback(() => {
      i({ type: pe.CLEAR_JUST_COMPLETED_WORLDVIEW });
    }, []),
    Be = z.useCallback((W) => {
      i({ type: pe.MARK_WORLDVIEW_COMPLETED, payload: W });
    }, []),
    We = z.useCallback(() => {
      i({ type: pe.ADD_WORLDVIEW });
    }, []),
    ke = z.useCallback((W) => Ve.findIndex((G) => G.id === W), []),
    U = z.useCallback(
      (W) => {
        const G = ke(W);
        return G === 0 ? 'welcome' : Ve[G - 1].id;
      },
      [ke]
    ),
    ne = z.useCallback(
      (W) => {
        const G = ke(W);
        return G === Ve.length - 1 ? 'results' : Ve[G + 1].id;
      },
      [ke]
    ),
    q = z.useCallback(() => {
      P(Ve[0].id);
    }, [P]),
    k = z.useCallback(() => {
      a.currentStep === 'results' ? P(Ve[Ve.length - 1].id) : P(U(a.currentStep));
    }, [a.currentStep, P, U]),
    T = z.useCallback(() => {
      const W = ne(a.currentStep);
      (W === 'results' && H(), P(W));
    }, [a.currentStep, a.activeWorldviewId, P, ne, H, Be, ce]),
    oe = z.useMemo(
      () => a.worldviews[a.activeWorldviewId].questions,
      [a.worldviews, a.activeWorldviewId]
    ),
    fe = z.useCallback(
      (W) => {
        var xt;
        const G = W === 'original' ? 'originalCredences' : 'credences',
          de = Ve.filter((Le) => !qt(Le)),
          Ie = oe[(xt = de[0]) == null ? void 0 : xt.id];
        return W === 'original' && !(Ie != null && Ie.originalCredences)
          ? null
          : Object.fromEntries(
              de.map((Le) => {
                var Jt;
                return [Le.id, ((Jt = oe[Le.id]) == null ? void 0 : Jt[G]) || js(Le)];
              })
            );
      },
      [oe]
    ),
    ve = z.useCallback((W, G, de, Ie) => {
      switch (W) {
        case 'moralMarketplace':
          return yp(G, { budget: Ie });
        case 'maxEV':
          return Hd(G, de);
        case 'parliament':
          return qd(G, de);
        case 'mergedFavorites':
          return $d(G, de);
        case 'maximin':
          return Kd(G, de);
        default:
          return null;
      }
    }, []),
    ye = z.useMemo(() => {
      const G = wp().map((de) => de.key);
      {
        const de = new Set();
        return (
          a.selectedCalculations.left && de.add(a.selectedCalculations.left),
          a.selectedCalculations.right && de.add(a.selectedCalculations.right),
          de.size === 0 && G.length > 0 && de.add(G[0]),
          [...de].filter((Ie) => G.includes(Ie))
        );
      }
    }, [a.selectedCalculations]),
    Se = z.useMemo(() => fe('current'), [fe]),
    ge = z.useMemo(() => {
      const W = fe('original');
      return W || null;
    }, [JSON.stringify(fe('original'))]),
    Ce = z.useMemo(() => {
      if (!Se) return null;
      const W = {};
      for (const G of ye) W[G] = ve(G, Se, a.debugConfig, a.marketplaceBudget);
      return W;
    }, [Se, ye, ve, a.debugConfig, a.marketplaceBudget]),
    Ye = z.useMemo(() => {
      if (!ge) return null;
      const W = {};
      for (const G of ye) W[G] = ve(G, ge, a.debugConfig, a.marketplaceBudget);
      return W;
    }, [ge, ye, ve, a.debugConfig, a.marketplaceBudget]),
    Sn = z.useMemo(
      () =>
        Object.values(oe).some(
          (W) =>
            W.originalCredences &&
            JSON.stringify(W.credences) !== JSON.stringify(W.originalCredences)
        ),
      [oe]
    ),
    Et = z.useMemo(
      () => Object.keys(a.worldviews).sort((W, G) => parseInt(W, 10) - parseInt(G, 10)),
      [a.worldviews]
    ),
    En = z.useMemo(
      () => Object.fromEntries(Et.map((W) => [W, jp(a.worldviews[W])])),
      [a.worldviews, Et]
    ),
    xn = z.useMemo(
      () =>
        Object.fromEntries(
          Et.map((W) => {
            var G;
            return [W, ((G = a.worldviews[W]) == null ? void 0 : G.completed) === !0];
          })
        ),
      [a.worldviews, Et]
    ),
    rl = Et.every((W) => xn[W]),
    hr = Et.length < bc && rl,
    De = z.useMemo(() => ke(a.currentStep), [a.currentStep, ke]),
    vr = z.useMemo(() => (De === -1 ? null : Tc[De]), [De]),
    Yt = z.useMemo(() => {
      if (De === -1) return -1;
      const W = Ve[De],
        G = ds(Ve, De);
      return qt(W) ? G : G + 1;
    }, [De]),
    Xt = z.useMemo(() => {
      if (De === -1) return 0;
      const W = Ve[De];
      return ((qt(W) ? ds(Ve, De) : Yt) / ps) * 100;
    }, [De, Yt]),
    zt = z.useMemo(() => {
      if (De === -1) return '';
      const W = Ve[De];
      return `Question ${qt(W) ? ds(Ve, De) : Yt} of ${ps}`;
    }, [De, Yt]),
    bn = z.useMemo(() => {
      const W = {};
      return (
        Ve.filter((G) => !qt(G)).forEach((G) => {
          const de = oe[G.id];
          de &&
            (W[G.id] = {
              credences: de.credences,
              setCredences: (Ie) => j(G.id, Ie),
              originalCredences: de.originalCredences,
              inputMode: de.inputMode,
              setInputMode: (Ie) => F(G.id, Ie),
              lockedKeys: de.lockedKeys,
              setLockedKeys: (Ie) => N(G.id, Ie),
              selectedPreset: de.selectedPreset,
              setSelectedPreset: (Ie) => V(G.id, Ie),
            });
        }),
        W
      );
    }, [oe, j, F, N, V]),
    ll = z.useMemo(
      () => ({
        currentStep: a.currentStep,
        questions: oe,
        worldviews: a.worldviews,
        worldviewNames: a.worldviewNames,
        activeWorldviewId: a.activeWorldviewId,
        expandedPanel: a.expandedPanel,
        debugConfig: a.debugConfig,
        selectedCalculations: a.selectedCalculations,
        marketplaceBudget: a.marketplaceBudget,
        justCompletedWorldview: a.justCompletedWorldview,
        shareUrlError: c,
        isHydrating: f,
        sessionId: g,
        isAdvancedMode: _p,
        questionsConfig: Tc,
        causesConfig: Ep,
        defaultCredences: xp,
        worldviewIds: Et,
        canAddWorldview: hr,
        addWorldview: We,
        goToStep: P,
        setCredences: j,
        setInputMode: F,
        setLockedKeys: N,
        setSelectedPreset: V,
        setExpandedPanel: B,
        saveOriginals: H,
        resetToOriginal: J,
        resetQuiz: ee,
        setDebugConfig: te,
        switchWorldview: ie,
        setSelectedCalculations: ue,
        setWorldviewName: Z,
        setMarketplaceBudget: me,
        clearJustCompletedWorldview: Ee,
        getQuestionIndex: ke,
        getPrevStep: U,
        getNextStep: ne,
        startQuiz: q,
        goBack: k,
        goForward: T,
        currentQuestion: vr,
        currentQuestionIndex: De,
        totalQuestions: ps,
        progressPercentage: Xt,
        questionNumber: zt,
        hasChanged: Sn,
        hasProgressMap: En,
        completedMap: xn,
        calculationResults: Ce,
        originalCalculationResults: Ye,
        stateMap: bn,
      }),
      [
        a.currentStep,
        oe,
        a.worldviews,
        a.worldviewNames,
        a.activeWorldviewId,
        a.expandedPanel,
        a.debugConfig,
        a.selectedCalculations,
        a.marketplaceBudget,
        a.justCompletedWorldview,
        c,
        f,
        g,
        P,
        j,
        F,
        N,
        V,
        B,
        H,
        J,
        ee,
        te,
        ie,
        ue,
        Z,
        me,
        Ee,
        ke,
        U,
        ne,
        q,
        k,
        T,
        vr,
        De,
        Xt,
        zt,
        Sn,
        En,
        xn,
        Ce,
        Ye,
        bn,
        Et,
        hr,
        We,
      ]
    );
  return b.jsxs(qc.Provider, {
    value: ll,
    children: [s, w && b.jsx(Md, { onKeepMine: x, onLoadShared: I, onOpenNewTab: O })],
  });
}
function Mp() {
  const s = z.useContext(qc);
  if (!s) throw new Error('useQuiz must be used within a QuizProvider');
  return s;
}
function Rp({ credences: s, isLocked: a, lockedKeys: i, onChange: c }) {
  const [d, f] = z.useState(null),
    [p, w] = z.useState(!1),
    h = z.useCallback(() => {
      a || (w(!0), f({ ...s }));
    }, [a, s]),
    g = z.useCallback(
      (x) => {
        if (a || !p) return;
        w(!1);
        const I = parseFloat(x.target.value);
        (c(I, d, !0, i), f(null));
      },
      [a, p, d, i, c]
    ),
    v = z.useCallback(
      (x) => {
        if (a) return;
        const I = parseFloat(x.target.value);
        c(I, d, !1, i);
      },
      [a, d, i, c]
    );
  return {
    isDragging: p,
    dragHandlers: {
      onChange: v,
      onMouseDown: h,
      onMouseUp: g,
      onMouseLeave: g,
      onTouchStart: h,
      onTouchEnd: g,
    },
  };
}
function Pp({ sliderKey: s, lockedKeys: a = [], credences: i }) {
  return z.useMemo(() => {
    var I;
    const c = Array.isArray(a) ? a : a ? [a] : [],
      d = c.includes(s),
      f = c.length > 0 && !d,
      p = f ? c.reduce((O, P) => O + (i[P] || 0), 0) : 0,
      w = f ? 100 - p : 100,
      h = f ? `calc(${w}% + ${(50 - w) * 0.16}px)` : null,
      x = Object.keys(i).length - c.length > 2;
    return {
      isLocked: d,
      hasLockedSibling: f,
      lockedValue: p,
      maxAllowed: w,
      thumbOffset: h,
      canLockMore: x,
      featureEnabled: ((I = mo.ui) == null ? void 0 : I.sliderLock) === !0,
    };
  }, [s, a, i]);
}
function vt(s, a, i = 1e-9) {
  return Math.abs(s - a) <= i;
}
function Vn(s) {
  let a = 0;
  for (let i = 0; i < s.length; i++) a += s[i];
  return a;
}
function Dp(s) {
  let a = 1;
  for (let i = 0; i < s.length; i++) a *= s[i];
  return a;
}
function $c(s) {
  let a = 0;
  for (let i = 1; i < s.length; i++) s[i] > s[a] && (a = i);
  return a;
}
function Ap(s, a) {
  return s.map((i) => i[a]);
}
function zp(s, a) {
  let i = 0;
  for (let c = 0; c < s.length; c++) i += s[c] * a[c];
  return i;
}
function Kc(s) {
  let a = s | 0;
  return {
    next() {
      ((a |= 0), (a = (a + 1831565813) | 0));
      let i = Math.imul(a ^ (a >>> 15), 1 | a);
      return (
        (i = (i + Math.imul(i ^ (i >>> 7), 61 | i)) ^ i),
        ((i ^ (i >>> 14)) >>> 0) / 4294967296
      );
    },
    choice(i) {
      return i[Math.floor(this.next() * i.length)];
    },
  };
}
function ho(s) {
  return Vn(s) / s.length;
}
function Gc(s, a) {
  const i = s.length;
  if (i < 2) return 0;
  const c = ho(s),
    d = ho(a);
  let f = 0,
    p = 0,
    w = 0;
  for (let g = 0; g < i; g++) {
    const v = s[g] - c,
      x = a[g] - d;
    ((f += v * x), (p += v * v), (w += x * x));
  }
  const h = Math.sqrt(p * w);
  return h === 0 ? 0 : f / h;
}
function Lc(s) {
  const a = s.map((d, f) => ({ v: d, i: f }));
  a.sort((d, f) => d.v - f.v);
  const i = new Array(s.length);
  let c = 0;
  for (; c < a.length; ) {
    let d = c;
    for (; d < a.length && a[d].v === a[c].v; ) d++;
    const f = (c + d - 1) / 2 + 1;
    for (let p = c; p < d; p++) i[a[p].i] = f;
    c = d;
  }
  return i;
}
function Wp(s, a) {
  return Gc(Lc(s), Lc(a));
}
function Mc(s, a) {
  let i = 0;
  for (let c = 0; c < s.length; c++) i += (s[c] - a[c]) ** 2;
  return Math.sqrt(i);
}
function Fp(s) {
  const a = s.length,
    i = s.map((w) => w.slice()),
    c = Array.from({ length: a }, (w, h) => Array.from({ length: a }, (g, v) => (h === v ? 1 : 0))),
    d = 100 * a * a;
  for (let w = 0; w < d; w++) {
    let h = 0,
      g = 0,
      v = 1;
    for (let j = 0; j < a; j++)
      for (let F = j + 1; F < a; F++)
        Math.abs(i[j][F]) > h && ((h = Math.abs(i[j][F])), (g = j), (v = F));
    if (h < 1e-12) break;
    const x = i[g][g] === i[v][v] ? Math.PI / 4 : 0.5 * Math.atan2(2 * i[g][v], i[g][g] - i[v][v]),
      I = Math.cos(x),
      O = Math.sin(x),
      P = I * I * i[g][g] + 2 * O * I * i[g][v] + O * O * i[v][v],
      M = O * O * i[g][g] - 2 * O * I * i[g][v] + I * I * i[v][v];
    ((i[g][v] = 0), (i[v][g] = 0), (i[g][g] = P), (i[v][v] = M));
    for (let j = 0; j < a; j++) {
      if (j === g || j === v) continue;
      const F = I * i[j][g] + O * i[j][v],
        N = -O * i[j][g] + I * i[j][v];
      ((i[j][g] = F), (i[g][j] = F), (i[j][v] = N), (i[v][j] = N));
    }
    for (let j = 0; j < a; j++) {
      const F = I * c[j][g] + O * c[j][v],
        N = -O * c[j][g] + I * c[j][v];
      ((c[j][g] = F), (c[j][v] = N));
    }
  }
  const f = i.map((w, h) => w[h]),
    p = f.map((w, h) => h);
  return (
    p.sort((w, h) => f[h] - f[w]),
    { eigenvalues: p.map((w) => f[w]), eigenvectors: p.map((w) => c.map((h) => h[w])) }
  );
}
function Vp(s, a = 2) {
  const i = s.length;
  if (i <= a)
    return Array.from({ length: i }, (v, x) => {
      const I = new Array(a).fill(0);
      return (x < a && (I[x] = 1), I);
    });
  const c = s.map((v) => v.map((x) => x * x)),
    d = Array.from({ length: i }, () => new Array(i).fill(0)),
    f = c.map((v) => ho(v)),
    p = ho(f);
  for (let v = 0; v < i; v++)
    for (let x = 0; x < i; x++) d[v][x] = -0.5 * (c[v][x] - f[v] - f[x] + p);
  const { eigenvalues: w, eigenvectors: h } = Fp(d),
    g = Array.from({ length: i }, () => new Array(a).fill(0));
  for (let v = 0; v < a; v++) {
    const x = Math.max(w[v], 0),
      I = Math.sqrt(x);
    for (let O = 0; O < i; O++) g[O][v] = h[v][O] * I;
  }
  return g;
}
function Up(s, a) {
  const i = s.length,
    c = Array.from({ length: i }, () => new Array(i).fill(0)),
    d = Array.from({ length: i }, () => new Array(i).fill(0));
  for (let f = 0; f < i; f++)
    for (let p = 0; p < i; p++)
      if (f === p) ((c[f][p] = 1), (d[f][p] = 1));
      else {
        const w = a.map((g) => s[f].evaluate(g)),
          h = a.map((g) => s[p].evaluate(g));
        ((c[f][p] = (Gc(w, h) + 1) / 2), (d[f][p] = (Wp(w, h) + 1) / 2));
      }
  return { pearsonMatrix: c, rankMatrix: d };
}
function bp(s, a) {
  const i = s.length,
    c = Array.from({ length: i }, () => new Array(i).fill(0));
  for (let d = 0; d < i; d++)
    for (let f = 0; f < i; f++) {
      const p = 1 - s[d][f],
        w = 1 - a[d][f];
      c[d][f] = Math.sqrt(p * p + w * w);
    }
  return Vp(c, 2);
}
function Bp(s, a) {
  const i = Vn(a);
  if (i === 0) return [0, 0];
  const c = s[0].length,
    d = new Array(c).fill(0);
  for (let f = 0; f < s.length; f++) for (let p = 0; p < c; p++) d[p] += a[f] * s[f][p];
  for (let f = 0; f < c; f++) d[f] /= i;
  return d;
}
function Qp(s, a) {
  let i = 0,
    c = Mc(s[0], a);
  for (let d = 1; d < s.length; d++) {
    const f = Mc(s[d], a);
    f < c && ((c = f), (i = d));
  }
  return i;
}
class Hp {
  constructor(a, i) {
    ((this.name = a), (this.interventionValues = i));
  }
  valueOf(a) {
    const i = this.interventionValues[a];
    return i != null ? Number(i) : 0;
  }
}
function qp(s, a, i) {
  const c = {};
  for (const f of s) {
    let p = 0;
    for (const w of a) {
      const h = i[w.name] || 0;
      p += h * w.valueOf(f);
    }
    c[f] = p;
  }
  let d = s[0];
  for (const f of s) c[f] > c[d] && (d = f);
  return { best: d, scores: c };
}
function $p(s, a, i, c) {
  const d = Ap(s.values, c);
  return a * zp(d, i);
}
function Kp(s, a, i, c) {
  let d = 0;
  const f = {};
  for (const [p, w] of Object.entries(s.effects)) {
    const h = a[w.recipient_type] || 0,
      g = $p(w, h, i, c);
    ((f[p] = g), (d += g));
  }
  return { total: d, breakdown: f };
}
function Gp(s, a, i, c) {
  const d = {};
  for (const [f, p] of Object.entries(s)) d[f] = Kp(p, a, i, c).total;
  return d;
}
function Yp(s, a, i) {
  const c = {};
  for (const [d, f] of Object.entries(s))
    a[d].tags.near_term_xrisk ? (c[d] = f) : (c[d] = f * (1 - i));
  return c;
}
const lt = {
    met_threshold: 0.5,
    nash_disagreement_point: 'zero_spending',
    msa_permissibility_mode: 'winner_take_all',
    msa_top_k: 2,
    msa_within_percent: 0.1,
    msa_binary_threshold: 0,
    tie_break: 'deterministic',
  },
  Xp = new Set(['Kantianism', 'Rawlsian Contractarianism']);
function Jp(s, a, i) {
  const d = i / 10,
    f = Math.round(d);
  let p;
  (vt(d, f) ? (p = f) : (p = Math.floor(d)), (p = Math.max(p, 0)));
  const w = s[a].diminishing_returns;
  return p >= w.length ? w[w.length - 1] : w[p];
}
function Gt(s, a) {
  return s === 'random' ? Kc(a ?? Date.now()) : null;
}
function mr(s, a = 'deterministic', i = null) {
  if (!s.length) throw new Error('No candidates provided.');
  return a === 'random' ? (i || (i = Kc(Date.now())), i.choice(s)) : s.slice().sort()[0];
}
function Fn(s, a = 'deterministic', i = null) {
  const c = Math.max(...Object.values(s)),
    d = Object.keys(s).filter((f) => vt(s[f], c));
  return mr(d, a, i);
}
function Yc(s, a = !1, i = 1e-6) {
  const c = [];
  for (let f = 0; f < s.length; f++) {
    const p = s[f];
    if (p.credence === void 0 || p.credence === null)
      throw new Error(`Worldview at index ${f} is missing 'credence'.`);
    const w = Number(p.credence);
    if (isNaN(w))
      throw new Error(`Worldview at index ${f} has non-numeric credence: ${p.credence}`);
    if (w < 0) {
      const h = p.name || `worldview_${f}`;
      throw new Error(`Credence for worldview '${h}' must be non-negative. Got ${w}.`);
    }
    c.push(w);
  }
  const d = Vn(c);
  if (a && !vt(d, 1, i))
    throw new Error(`Worldview credences must sum to 1.0 for this voting method. Got ${d}.`);
  return { credences: c, total: d };
}
function kn(s) {
  const { credences: a, total: i } = Yc(s, !1);
  return i <= 0 ? a.map(() => 0) : a.map((c) => c / i);
}
function Ns(s, a, i) {
  const c = Gp(s, i.moral_weights, i.discount_factors, i.risk_profile),
    d = Yp(c, s, i.p_extinction),
    f = {};
  for (const p of Object.keys(s)) f[p] = d[p] * Jp(s, p, a[p]);
  return f;
}
function Un(s, a, i) {
  return i.map((c) => Ns(s, a, c));
}
function Zp(s) {
  return Object.keys(s).sort((a, i) => s[i] - s[a] || a.localeCompare(i));
}
function em(s, a = null) {
  const i = String(s.theory_type || '')
    .trim()
    .toLowerCase();
  if (i === 'binary' || i === 'cardinal') return i;
  const c = s.name || '';
  if (a && c in a) {
    const d = String(a[c]).trim().toLowerCase();
    if (d === 'binary' || d === 'cardinal') return d;
  }
  return Xp.has(c) ? 'binary' : 'cardinal';
}
function tm(s, a, i, c) {
  const d = {};
  for (const h of Object.keys(s)) d[h] = 0;
  const { credences: f, total: p } = Yc(c, !1);
  if (!(vt(p, 1, 1e-6) || vt(p, 0, 1e-12)))
    throw new Error(`Worldview credences must sum to 1.0 (or all be zero). Got ${p}.`);
  if (vt(p, 0, 1e-12)) return d;
  const w = Gt(lt.tie_break, null);
  for (let h = 0; h < c.length; h++) {
    const g = f[h] * i,
      v = Ns(s, a, c[h]),
      x = Fn(v, 'deterministic', w);
    d[x] += g;
  }
  return d;
}
function nm(
  s,
  a,
  i,
  { customWorldviews: c = null, tieBreak: d = null, randomSeed: f = null } = {}
) {
  const p = {};
  for (const O of Object.keys(s)) p[O] = 0;
  d = d ?? lt.tie_break;
  const w = Gt(d, f);
  if (!c || !c.length) return p;
  const h = kn(c);
  if (vt(Vn(h), 0)) return p;
  const g = $c(h),
    v = c[g],
    x = Ns(s, a, v),
    I = Fn(x, d, w);
  return ((p[I] = i), p);
}
function rm(
  s,
  a,
  i,
  { customWorldviews: c = null, tieBreak: d = null, randomSeed: f = null } = {}
) {
  const p = {};
  for (const I of Object.keys(s)) p[I] = 0;
  d = d ?? lt.tie_break;
  const w = Gt(d, f);
  if (!c || !c.length) return p;
  const h = kn(c);
  if (vt(Vn(h), 0)) return p;
  const g = Un(s, a, c),
    v = {};
  for (const I of Object.keys(s)) {
    let O = 0;
    for (let P = 0; P < c.length; P++) O += h[P] * g[P][I];
    v[I] = O;
  }
  const x = Fn(v, d, w);
  return ((p[x] = i), p);
}
function lm(s, a, i, c, { metThreshold: d = null, tieBreak: f = null, randomSeed: p = null } = {}) {
  const w = {};
  for (const F of Object.keys(s)) w[F] = 0;
  if (!c || !c.length) return w;
  const h = d ?? lt.met_threshold;
  f = f ?? lt.tie_break;
  const g = Gt(f, p),
    v = Un(s, a, c),
    x = kn(c),
    I = $c(x),
    O = x[I];
  let P = I;
  if (O < h) {
    const F = Object.keys(s),
      N = v.map((ee) => ({ evaluate: (te) => ee[te] })),
      { pearsonMatrix: V, rankMatrix: B } = Up(N, F),
      H = bp(V, B),
      J = Bp(H, x);
    P = Qp(H, J);
  }
  const M = v[P],
    j = Fn(M, f, g);
  return ((w[j] = i), w);
}
function om(s, a, i, c = 'deterministic', d = null) {
  const f = s.length,
    p = f > 0 ? Object.keys(s[0]) : [],
    w = s.map((h) => Fn(h, c, d));
  if (i === 'zero_spending') return new Array(f).fill(0);
  if (i === 'anti_utopia') return s.map((h) => Math.min(...p.map((g) => h[g])));
  if (i === 'random_dictator') {
    const h = [];
    for (let g = 0; g < f; g++) {
      let v = 0;
      for (let x = 0; x < f; x++) v += a[x] * s[g][w[x]];
      h.push(v);
    }
    return h;
  }
  if (i === 'exclusionary_proportional_split') {
    const h = [];
    for (let g = 0; g < f; g++) {
      const v = a[g];
      if (v >= 1) {
        h.push(0);
        continue;
      }
      let x = 0;
      const I = 1 - v;
      for (let O = 0; O < f; O++) O !== g && (x += (a[O] / I) * s[g][w[O]]);
      h.push(x);
    }
    return h;
  }
  throw new Error(
    'Unknown disagreement_point. Use one of: zero_spending, anti_utopia, random_dictator, exclusionary_proportional_split.'
  );
}
function im(
  s,
  a,
  i,
  c,
  { disagreementPoint: d = null, tieBreak: f = null, randomSeed: p = null } = {}
) {
  const w = {};
  for (const F of Object.keys(s)) w[F] = 0;
  if (!c || !c.length) return w;
  ((d = d ?? lt.nash_disagreement_point), (f = f ?? lt.tie_break));
  const h = Gt(f, p),
    g = Un(s, a, c),
    v = kn(c),
    x = Object.keys(s),
    I = om(g, v, d, f, h),
    O = {},
    P = {};
  for (const F of x) {
    const N = [];
    for (let V = 0; V < c.length; V++) N.push(g[V][F] - I[V]);
    (N.every((V) => V >= -1e-12) && (O[F] = Dp(N.map((V) => Math.max(V, 0)))), (P[F] = Vn(N)));
  }
  let M;
  if (Object.keys(O).length) {
    const F = Math.max(...Object.values(O));
    M = Object.keys(O).filter((N) => vt(O[N], F));
  } else {
    const F = Math.max(...Object.values(P));
    M = Object.keys(P).filter((N) => vt(P[N], F));
  }
  const j = mr(M, f, h);
  return ((w[j] = i), w);
}
function sm(
  s,
  a,
  i,
  c,
  {
    worldviewTypes: d = null,
    cardinalPermissibilityMode: f = null,
    cardinalTopK: p = null,
    cardinalWithinPercent: w = null,
    binaryPermissibilityThreshold: h = null,
    noPermissibleAction: g = 'stop',
    tieBreak: v = null,
    randomSeed: x = null,
  } = {}
) {
  const I = {};
  for (const Z of Object.keys(s)) I[Z] = 0;
  if (!c || !c.length) return I;
  v = v ?? lt.tie_break;
  const O = Gt(v, x);
  ((f = f ?? lt.msa_permissibility_mode),
    (p = p ?? lt.msa_top_k),
    (w = w ?? lt.msa_within_percent),
    (h = h ?? lt.msa_binary_threshold));
  const P = Un(s, a, c),
    M = kn(c),
    j = Object.keys(s),
    F = [],
    N = [];
  for (let Z = 0; Z < c.length; Z++) em(c[Z], d) === 'binary' ? N.push(Z) : F.push(Z);
  const V = Vn(F.map((Z) => M[Z])),
    B = {};
  for (const Z of j) B[Z] = 0;
  let H = null;
  if (F.length) {
    const Z = [],
      me = {};
    for (const Ee of F) {
      const We = `${c[Ee].name || `worldview_${Ee}`}_${Ee}`;
      (Z.push(new Hp(We, P[Ee])), (me[We] = M[Ee]));
    }
    const ce = qp(j, Z, me);
    ((H = ce.best), Object.assign(B, ce.scores));
  }
  const J = new Set();
  if (F.length)
    if (f === 'winner_take_all') J.add(H);
    else if (f === 'top_k') {
      const Z = Math.max(1, Math.floor(p)),
        me = j.slice().sort((ce, Ee) => B[Ee] - B[ce] || ce.localeCompare(Ee));
      for (let ce = 0; ce < Math.min(Z, me.length); ce++) J.add(me[ce]);
    } else if (f === 'within_percent') {
      if (w < 0) throw new Error('cardinalWithinPercent must be >= 0.');
      const Z = B[H],
        me = Z - Math.abs(Z) * w;
      for (const ce of j) B[ce] >= me - 1e-12 && J.add(ce);
    } else
      throw new Error(
        'Unknown cardinalPermissibilityMode. Use one of: winner_take_all, top_k, within_percent.'
      );
  const ee = {};
  for (const Z of j) ee[Z] = 0;
  for (const Z of J) ee[Z] += V;
  for (const Z of N) {
    const me = M[Z],
      ce = P[Z];
    for (const Ee of j) ce[Ee] > h && (ee[Ee] += me);
  }
  const te = Math.max(...Object.values(ee), 0);
  if (te <= 0.5) {
    if (g === 'stop')
      return { __stop__: !0, __reason__: 'No intervention exceeded 50% permissibility.' };
    if (g === 'fallback_mec') {
      let Z;
      if (F.length) Z = Fn(B, v, O);
      else {
        const me = {};
        for (const ce of j) {
          let Ee = 0;
          for (let Be = 0; Be < c.length; Be++) Ee += M[Be] * P[Be][ce];
          me[ce] = Ee;
        }
        Z = Fn(me, v, O);
      }
      return ((I[Z] = i), I);
    }
    throw new Error('Unknown noPermissibleAction. Use stop or fallback_mec.');
  }
  const ie = j.filter((Z) => vt(ee[Z], te)),
    ue = mr(ie, v, O);
  return ((I[ue] = i), I);
}
function am(s, a, i, c, { tieBreak: d = null, randomSeed: f = null } = {}) {
  const p = {};
  for (const j of Object.keys(s)) p[j] = 0;
  if (!c || !c.length) return p;
  d = d ?? lt.tie_break;
  const w = Gt(d, f),
    h = Un(s, a, c),
    g = kn(c),
    v = Object.keys(s),
    x = v.length,
    I = {};
  for (const j of v) I[j] = 0;
  for (let j = 0; j < h.length; j++) {
    const F = Zp(h[j]);
    for (let N = 0; N < F.length; N++) {
      const V = x - 1 - N;
      I[F[N]] += g[j] * V;
    }
  }
  const O = Math.max(...Object.values(I)),
    P = v.filter((j) => vt(I[j], O)),
    M = mr(P, d, w);
  return ((p[M] = i), p);
}
function um(s, a, i, c, { tieBreak: d = null, randomSeed: f = null } = {}) {
  const p = {};
  for (const N of Object.keys(s)) p[N] = 0;
  if (!c || !c.length) return p;
  d = d ?? lt.tie_break;
  const w = Gt(d, f),
    h = Un(s, a, c),
    g = kn(c),
    v = Object.keys(s),
    x = {};
  for (const N of v) {
    x[N] = {};
    for (const V of v) x[N][V] = 0;
  }
  for (let N = 0; N < h.length; N++) {
    const V = h[N],
      B = g[N];
    for (let H = 0; H < v.length; H++)
      for (let J = H + 1; J < v.length; J++) {
        const ee = v[H],
          te = v[J];
        V[ee] > V[te] ? (x[ee][te] += B) : V[te] > V[ee] && (x[te][ee] += B);
      }
  }
  const I = {};
  for (const N of v) {
    I[N] = {};
    for (const V of v) I[N][V] = x[N][V] - x[V][N];
  }
  const O = {};
  for (const N of v) {
    O[N] = {};
    for (const V of v) O[N][V] = I[N][V] > 0 ? I[N][V] : -1 / 0;
    O[N][N] = 0;
  }
  for (const N of v)
    for (const V of v)
      if (V !== N)
        for (const B of v) {
          if (V === B || B === N) continue;
          const H = Math.min(O[V][N], O[N][B]);
          H > O[V][B] && (O[V][B] = H);
        }
  const P = {};
  for (const N of v) {
    P[N] = {};
    for (const V of v) P[N][V] = I[N][V] > 0 && I[N][V] > O[V][N] + 1e-12;
  }
  let M = v.filter((N) => !v.some((V) => V !== N && P[V][N])),
    j;
  if (M.length) j = M;
  else {
    const N = {};
    for (const B of v) {
      let H = 0;
      for (const J of v) J !== B && (H += I[B][J]);
      N[B] = H;
    }
    const V = Math.max(...Object.values(N));
    j = v.filter((B) => vt(N[B], V));
  }
  const F = mr(j, d, w);
  return ((p[F] = i), p);
}
function cm(s, a, i, c, { tieBreak: d = null, randomSeed: f = null } = {}) {
  const p = {};
  for (const j of Object.keys(s)) p[j] = 0;
  if (!c || !c.length) return p;
  d = d ?? lt.tie_break;
  const w = Gt(d, f),
    h = Un(s, a, c),
    g = kn(c),
    v = Object.keys(s),
    x = {};
  for (const j of v) {
    const F = [];
    for (let N = 0; N < c.length; N++) F.push(g[N] * h[N][j]);
    x[j] = F.slice().sort((N, V) => N - V);
  }
  function I(j, F) {
    for (let N = 0; N < j.length; N++) {
      if (j[N] < F[N]) return -1;
      if (j[N] > F[N]) return 1;
    }
    return 0;
  }
  let O = x[v[0]];
  for (let j = 1; j < v.length; j++) I(x[v[j]], O) > 0 && (O = x[v[j]]);
  const P = v.filter((j) => I(x[j], O) === 0),
    M = mr(P, d, w);
  return ((p[M] = i), p);
}
function fm(s, a, i, { incrementSize: c = 10, ...d } = {}) {
  const f = {};
  for (const w of Object.keys(s)) f[w] = 0;
  let p = i;
  for (; p > 0; ) {
    const w = Math.min(c, p),
      h = a(s, f, w, d);
    if (typeof h != 'object')
      throw new TypeError('Voting methods must return an object of allocations.');
    if (h.__stop__) break;
    for (const g of Object.keys(s)) f[g] += h[g] || 0;
    p -= w;
  }
  return { funding: f };
}
const dm = {
  credenceWeighted: (s, a, i, c) => tm(s, a, i, c.customWorldviews),
  myFavoriteTheory: (s, a, i, c) => nm(s, a, i, c),
  mec: (s, a, i, c) => rm(s, a, i, c),
  met: (s, a, i, c) => lm(s, a, i, c.customWorldviews, c),
  nashBargaining: (s, a, i, c) => im(s, a, i, c.customWorldviews, c),
  msa: (s, a, i, c) => sm(s, a, i, c.customWorldviews, c),
  borda: (s, a, i, c) => am(s, a, i, c.customWorldviews, c),
  splitCycle: (s, a, i, c) => um(s, a, i, c.customWorldviews, c),
  lexicographicMaximin: (s, a, i, c) => cm(s, a, i, c.customWorldviews, c),
};
function pm(s, a, i, c, d) {
  const f = {};
  for (const [v, x] of Object.entries(s)) {
    const { name: I, color: O, ...P } = x;
    f[v] = P;
  }
  const p = dm[i];
  if (!p) throw new Error(`Unknown voting method: ${i}`);
  const { funding: w } = fm(f, p, c, { incrementSize: d, customWorldviews: a }),
    h = Object.values(w).reduce((v, x) => v + x, 0),
    g = {};
  for (const [v, x] of Object.entries(w)) g[v] = h > 0 ? (x / h) * 100 : 0;
  return { allocations: g, funding: w };
}
const mm = 800,
  hm = 10,
  vm = {
    malaria_nets: {
      name: 'Malaria Nets',
      color: '#5eb3d4',
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
      name: 'Cage-Free Campaigns',
      color: '#e8a838',
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
      name: 'Shrimp Welfare',
      color: '#e06060',
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
      name: 'Wild Animal Welfare',
      color: '#7bc67e',
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
      name: 'Fish Welfare',
      color: '#9b7fd4',
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
      name: 'AI Safety & Policy',
      color: '#d4a05e',
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
  ym = [
    { key: 'human_life_years', label: 'Human Life-Years' },
    { key: 'human_ylds', label: 'Human YLDs' },
    { key: 'human_income_doublings', label: 'Human Income Doublings' },
    { key: 'chickens_birds', label: 'Chickens/Birds' },
    { key: 'fish', label: 'Fish' },
    { key: 'shrimp', label: 'Shrimp' },
    { key: 'non_shrimp_invertebrates', label: 'Non-Shrimp Invertebrates' },
    { key: 'mammals', label: 'Mammals' },
  ],
  gm = ['0-5 years', '5-10 years', '10-20 years', '20-100 years', '100-500 years', '500+ years'],
  wm = [
    { value: 0, label: 'Neutral' },
    { value: 1, label: 'Upside' },
    { value: 2, label: 'Downside' },
    { value: 3, label: 'Combined' },
  ],
  _m = [
    { key: 'credenceWeighted', name: 'Credence-Weighted' },
    { key: 'myFavoriteTheory', name: 'My Favorite Theory' },
    { key: 'mec', name: 'MEC' },
    { key: 'met', name: 'MET' },
    { key: 'nashBargaining', name: 'Nash Bargaining', ignoresCredences: !0 },
    { key: 'msa', name: 'MSA', ignoresCredences: !0 },
    { key: 'borda', name: 'Borda Count' },
    { key: 'splitCycle', name: 'Split-Cycle' },
    { key: 'lexicographicMaximin', name: 'Lexicographic Maximin' },
  ],
  km = [
    {
      id: 'total_utilitarian',
      name: 'Total Utilitarian',
      moral_weights: {
        human_life_years: 1,
        human_ylds: 1,
        human_income_doublings: 0.3,
        chickens_birds: 0.4,
        fish: 0.24,
        shrimp: 0.08,
        non_shrimp_invertebrates: 0.07,
        mammals: 0.44,
      },
      discount_factors: [1, 0.9, 0.8, 0.6, 0.4, 0.01],
      risk_profile: 0,
      p_extinction: 0,
    },
    {
      id: 'kantianism',
      name: 'Kantianism',
      moral_weights: {
        human_life_years: 1,
        human_ylds: 0.5,
        human_income_doublings: 0.5,
        chickens_birds: 0.05,
        fish: 0.01,
        shrimp: 0.001,
        non_shrimp_invertebrates: 0.001,
        mammals: 0.05,
      },
      discount_factors: [1, 1, 0.5, 0.1, 0.001, 1e-5],
      risk_profile: 3,
      p_extinction: 0,
    },
    {
      id: 'non_util_consequentialism',
      name: 'Non-utilitarian Consequentialism',
      moral_weights: {
        human_life_years: 1,
        human_ylds: 1,
        human_income_doublings: 1,
        chickens_birds: 0.1,
        fish: 0.06,
        shrimp: 0.02,
        non_shrimp_invertebrates: 0.02,
        mammals: 0.11,
      },
      discount_factors: [1, 0.9, 0.8, 0.6, 0.4, 0.01],
      risk_profile: 0,
      p_extinction: 0,
    },
    {
      id: 'contractualism',
      name: 'Contractualism',
      moral_weights: {
        human_life_years: 1,
        human_ylds: 0.01,
        human_income_doublings: 0.001,
        chickens_birds: 0.004,
        fish: 0.002,
        shrimp: 0.0016,
        non_shrimp_invertebrates: 0.0014,
        mammals: 0.0044,
      },
      discount_factors: [1, 1, 0.5, 0.1, 0.001, 1e-5],
      risk_profile: 3,
      p_extinction: 0,
    },
  ],
  $e = {
    totalBudget: mm,
    incrementSize: hm,
    projects: vm,
    moralWeightKeys: ym,
    discountFactorLabels: gm,
    riskProfileOptions: wm,
    votingMethods: _m,
    presets: km,
  },
  Sm = {
    name: 'Worldview 1',
    credence: 1,
    moral_weights: {
      human_life_years: 1,
      human_ylds: 0.5,
      human_income_doublings: 0.2,
      chickens_birds: 0.01,
      fish: 0.005,
      shrimp: 1e-4,
      non_shrimp_invertebrates: 5e-5,
      mammals: 0.05,
    },
    discount_factors: [1, 0.9, 0.5, 0.2, 0.05, 0.01],
    risk_profile: 0,
    p_extinction: 0,
  },
  Em = { defaultWorldview: Sm },
  Xc = 'marcus_state',
  Jc = 4;
function ms(s) {
  if (s) {
    const i = $e.presets.find((c) => c.id === s);
    if (i) {
      const { id: c, name: d, ...f } = i;
      return { ...JSON.parse(JSON.stringify(f)), name: d, presetId: c };
    }
  }
  const a = Em.defaultWorldview;
  return { ...JSON.parse(JSON.stringify(a)), name: 'Custom', presetId: null };
}
function hs(s) {
  const a = Math.floor(100 / s),
    i = {};
  for (let c = 0; c < s; c++) i[c] = a;
  return ((i[0] += 100 - a * s), i);
}
function xm() {
  try {
    const s = sessionStorage.getItem(Xc);
    if (!s) return null;
    const a = JSON.parse(s);
    if (a.version !== Jc) return null;
    const {
      worldviews: i,
      credences: c,
      lockedKeys: d,
      selectedMethod: f,
      totalBudget: p,
    } = a.state;
    return !Array.isArray(i) || !i.length
      ? null
      : { worldviews: i, credences: c, lockedKeys: d, selectedMethod: f, totalBudget: p };
  } catch {
    return null;
  }
}
function Cm(s) {
  try {
    sessionStorage.setItem(Xc, JSON.stringify({ version: Jc, state: s }));
  } catch {}
}
const rt = xm();
function Im() {
  const [s, a] = z.useState(
      () => (rt == null ? void 0 : rt.worldviews) ?? $e.presets.map((H) => ms(H.id))
    ),
    [i, c] = z.useState(() => (rt == null ? void 0 : rt.credences) ?? hs($e.presets.length)),
    [d, f] = z.useState(() => (rt == null ? void 0 : rt.lockedKeys) ?? []),
    [p, w] = z.useState(() => (rt == null ? void 0 : rt.selectedMethod) ?? $e.votingMethods[0].key),
    [h, g] = z.useState(() => (rt == null ? void 0 : rt.totalBudget) ?? $e.totalBudget),
    [v, x] = z.useState({ worldviews: s, credences: i, totalBudget: h }),
    I = z.useRef(null);
  z.useEffect(
    () => (
      I.current && clearTimeout(I.current),
      (I.current = setTimeout(() => {
        x({ worldviews: s, credences: i, totalBudget: h });
      }, 150)),
      () => {
        I.current && clearTimeout(I.current);
      }
    ),
    [s, i, h]
  );
  const O = z.useRef(null);
  z.useEffect(
    () => (
      O.current && clearTimeout(O.current),
      (O.current = setTimeout(() => {
        Cm({ worldviews: s, credences: i, lockedKeys: d, selectedMethod: p, totalBudget: h });
      }, 300)),
      () => {
        O.current && clearTimeout(O.current);
      }
    ),
    [s, i, d, p, h]
  );
  const P = z.useMemo(() => {
      const { worldviews: H, credences: J, totalBudget: ee } = v;
      if (!H.length) {
        const ie = {};
        for (const ue of Object.keys($e.projects)) ie[ue] = 0;
        return { allocations: ie, funding: ie };
      }
      const te = H.map((ie, ue) => ({ ...ie, credence: (J[ue] || 0) / 100 }));
      try {
        const ie = pm($e.projects, te, p, ee, $e.incrementSize);
        return (
          console.log('[marcus] recalc', p, {
            credences: Object.fromEntries(H.map((ue, Z) => [ue.name, `${Math.round(J[Z] || 0)}%`])),
            allocations: Object.fromEntries(
              Object.entries(ie.allocations)
                .filter(([, ue]) => ue > 0)
                .sort((ue, Z) => Z[1] - ue[1])
                .map(([ue, Z]) => [$e.projects[ue].name, `${Z.toFixed(1)}%`])
            ),
          }),
          ie
        );
      } catch (ie) {
        console.error('[marcus] calc error', ie);
        const ue = {};
        for (const Z of Object.keys($e.projects)) ue[Z] = 0;
        return { allocations: ue, funding: ue };
      }
    }, [v, p]),
    M = z.useCallback(() => {
      a((H) => {
        const J = [...H, ms(null)];
        return (c(hs(J.length)), f([]), J);
      });
    }, []),
    j = z.useCallback((H) => {
      a((J) => {
        if (J.length <= 1) return J;
        const ee = J.filter((te, ie) => ie !== H);
        return (c(hs(ee.length)), f([]), ee);
      });
    }, []),
    F = z.useCallback(
      (H, J, ee, te, ie) => {
        const ue = String(H),
          me = Yd(ue, J, ee || i, ee, ie),
          ce = te ? Xd(me) : me;
        c(ce);
      },
      [i]
    ),
    N = z.useCallback((H, J, ee) => {
      a((te) =>
        te.map((ue, Z) => {
          if (Z !== H) return ue;
          const me = { ...ue },
            ce = J.split('.');
          return (
            ce.length === 1
              ? (me[ce[0]] = ee)
              : ce.length === 2 && (me[ce[0]] = { ...me[ce[0]], [ce[1]]: ee }),
            me
          );
        })
      );
    }, []),
    V = z.useCallback((H, J, ee) => {
      a((te) =>
        te.map((ue, Z) => {
          if (Z !== H) return ue;
          const me = [...ue.discount_factors];
          return ((me[J] = ee), { ...ue, discount_factors: me });
        })
      );
    }, []),
    B = z.useCallback((H, J) => {
      a((ee) =>
        ee.map((te, ie) => (ie !== H ? te : J ? ms(J) : { ...te, presetId: null, name: 'Custom' }))
      );
    }, []);
  return {
    worldviews: s,
    credences: i,
    lockedKeys: d,
    setLockedKeys: f,
    selectedMethod: p,
    totalBudget: h,
    results: P,
    addWorldview: M,
    removeWorldview: j,
    updateCredence: F,
    updateWorldview: N,
    updateDiscountFactor: V,
    applyPreset: B,
    setSelectedMethod: w,
    setTotalBudget: g,
  };
}
const Om = '_container_1drlj_3',
  jm = '_layout_1drlj_11',
  Nm = '_spreadsheetSide_1drlj_22',
  Tm = '_spreadsheet_1drlj_22',
  Lm = '_spreadsheetScroll_1drlj_34',
  Mm = '_rowLabels_1drlj_40',
  Rm = '_labelHeader_1drlj_50',
  Pm = '_sectionTitle_1drlj_58',
  Dm = '_rowLabel_1drlj_40',
  Am = '_worldviewColumn_1drlj_84',
  zm = '_columnHeader_1drlj_95',
  Wm = '_presetSelect_1drlj_105',
  Fm = '_removeButton_1drlj_128',
  Vm = '_cell_1drlj_151',
  Um = '_cellInput_1drlj_158',
  bm = '_cellSelect_1drlj_191',
  Bm = '_credenceCell_1drlj_214',
  Qm = '_credenceSliderTrack_1drlj_222',
  Hm = '_credenceLockLimit_1drlj_258',
  qm = '_credenceValue_1drlj_267',
  $m = '_credenceLockButton_1drlj_276',
  Km = '_locked_1drlj_295',
  Gm = '_lockDisabled_1drlj_300',
  Ym = '_addColumn_1drlj_306',
  Xm = '_addButton_1drlj_313',
  Jm = '_resultsSide_1drlj_336',
  Zm = '_resultsPanel_1drlj_341',
  eh = '_methodSelector_1drlj_348',
  th = '_methodLabel_1drlj_352',
  nh = '_methodSelect_1drlj_348',
  rh = '_budgetInput_1drlj_379',
  lh = '_allocationList_1drlj_405',
  oh = '_allocationBar_1drlj_413',
  ih = '_allocationLabel_1drlj_419',
  sh = '_allocationName_1drlj_425',
  ah = '_allocationValue_1drlj_431',
  uh = '_allocationFunding_1drlj_437',
  ch = '_allocationTrack_1drlj_444',
  fh = '_allocationFill_1drlj_451',
  dh = '_methodDisclaimer_1drlj_459',
  se = {
    container: Om,
    layout: jm,
    spreadsheetSide: Nm,
    spreadsheet: Tm,
    spreadsheetScroll: Lm,
    rowLabels: Mm,
    labelHeader: Rm,
    sectionTitle: Pm,
    rowLabel: Dm,
    worldviewColumn: Am,
    columnHeader: zm,
    presetSelect: Wm,
    removeButton: Fm,
    cell: Vm,
    cellInput: Um,
    cellSelect: bm,
    credenceCell: Bm,
    credenceSliderTrack: Qm,
    credenceLockLimit: Hm,
    credenceValue: qm,
    credenceLockButton: $m,
    locked: Km,
    lockDisabled: Gm,
    addColumn: Ym,
    addButton: Xm,
    resultsSide: Jm,
    resultsPanel: Zm,
    methodSelector: eh,
    methodLabel: th,
    methodSelect: nh,
    budgetInput: rh,
    allocationList: lh,
    allocationBar: oh,
    allocationLabel: ih,
    allocationName: sh,
    allocationValue: ah,
    allocationFunding: uh,
    allocationTrack: ch,
    allocationFill: fh,
    methodDisclaimer: dh,
  };
function ph({
  index: s,
  credences: a,
  lockedKeys: i,
  setLockedKeys: c,
  onCredenceChange: d,
  cellProps: f,
}) {
  const p = String(s),
    w = a[p] ?? 0,
    {
      isLocked: h,
      hasLockedSibling: g,
      thumbOffset: v,
      canLockMore: x,
      featureEnabled: I,
    } = Pp({ sliderKey: p, lockedKeys: i, credences: a }),
    O = z.useCallback(
      (N, V, B, H) => {
        d(p, N, V, B, H);
      },
      [p, d]
    ),
    { isDragging: P, dragHandlers: M } = Rp({
      credences: a,
      isLocked: h,
      lockedKeys: i,
      onChange: O,
    }),
    j = () => {
      h ? c(i.filter((N) => N !== p)) : x && c([...i, p]);
    },
    F = g
      ? `linear-gradient(to right, var(--text-gray-medium) 0%, var(--text-gray-medium) ${w}%, rgba(255,255,255,0.15) ${w}%, rgba(255,255,255,0.15) ${v}, rgba(255,255,255,0.06) ${v}, rgba(255,255,255,0.06) 100%)`
      : `linear-gradient(to right, var(--text-gray-medium) 0%, var(--text-gray-medium) ${w}%, rgba(255,255,255,0.1) ${w}%, rgba(255,255,255,0.1) 100%)`;
  return b.jsxs('div', {
    className: se.credenceCell,
    children: [
      b.jsxs('div', {
        className: se.credenceSliderTrack,
        children: [
          b.jsx('input', {
            type: 'range',
            min: '0',
            max: '100',
            step: 'any',
            value: w,
            ...M,
            ...f,
            'data-dragging': P,
            disabled: h,
            style: { background: F, cursor: h ? 'not-allowed' : 'pointer' },
          }),
          g && b.jsx('div', { className: se.credenceLockLimit, style: { left: v } }),
        ],
      }),
      b.jsxs('span', { className: se.credenceValue, children: [Math.round(w), '%'] }),
      I &&
        b.jsx('button', {
          className: `${se.credenceLockButton} ${h ? se.locked : ''} ${!h && !x ? se.lockDisabled : ''}`,
          onClick: j,
          type: 'button',
          tabIndex: -1,
          disabled: !h && !x,
          children: b.jsx(Cd, { size: 10 }),
        }),
    ],
  });
}
function mh({
  worldview: s,
  index: a,
  rows: i,
  columnIndex: c,
  totalColumns: d,
  credences: f,
  lockedKeys: p,
  setLockedKeys: w,
  onCredenceChange: h,
  onUpdate: g,
  onUpdateDiscount: v,
  onApplyPreset: x,
  onRemove: I,
  canRemove: O,
}) {
  const P = (B) => {
      const H = B.target.value;
      x(a, H === 'custom' ? null : H);
    },
    M = (B, H) => {
      const J = H === '' ? 0 : Number(H);
      isNaN(J) || g(a, B, J);
    },
    j = z.useCallback(
      (B) => {
        if (B.key !== 'Tab') return;
        const H = Number(B.target.dataset.cellRow),
          J = Number(B.target.dataset.cellCol);
        let ee = H,
          te = J;
        B.shiftKey ? (te--, te < 0 && ((te = d - 1), ee--)) : (te++, te >= d && ((te = 0), ee++));
        const ie = document.querySelector(`[data-cell-row="${ee}"][data-cell-col="${te}"]`);
        ie && (B.preventDefault(), ie.focus());
      },
      [d]
    ),
    F = [];
  let N = 0;
  for (const B of i) F.push(B.type === 'sectionTitle' ? null : N++);
  function V(B, H) {
    if (B.type === 'sectionTitle') return b.jsx('div', { className: se.sectionTitle });
    const ee = { 'data-cell-row': F[H], 'data-cell-col': c, onKeyDown: j },
      { field: te } = B;
    if (te === 'credence')
      return b.jsx(ph, {
        index: a,
        credences: f,
        lockedKeys: p,
        setLockedKeys: w,
        onCredenceChange: h,
        cellProps: ee,
      });
    if (te.startsWith('moral_weights.')) {
      const ie = te.split('.')[1];
      return b.jsx('div', {
        className: se.cell,
        children: b.jsx('input', {
          type: 'number',
          className: se.cellInput,
          value: s.moral_weights[ie] ?? 0,
          min: '0',
          step: '0.01',
          onChange: (ue) => M(te, ue.target.value),
          ...ee,
        }),
      });
    }
    if (te.startsWith('discount_factor.')) {
      const ie = Number(te.split('.')[1]);
      return b.jsx('div', {
        className: se.cell,
        children: b.jsx('input', {
          type: 'number',
          className: se.cellInput,
          value: s.discount_factors[ie] ?? 0,
          min: '0',
          max: '1',
          step: '0.05',
          onChange: (ue) => {
            const Z = ue.target.value === '' ? 0 : Number(ue.target.value);
            isNaN(Z) || v(a, ie, Z);
          },
          ...ee,
        }),
      });
    }
    return te === 'risk_profile'
      ? b.jsx('div', {
          className: se.cell,
          children: b.jsx('select', {
            className: se.cellSelect,
            value: s.risk_profile,
            onChange: (ie) => g(a, 'risk_profile', Number(ie.target.value)),
            ...ee,
            children: $e.riskProfileOptions.map((ie) =>
              b.jsx('option', { value: ie.value, children: ie.label }, ie.value)
            ),
          }),
        })
      : te === 'p_extinction'
        ? b.jsx('div', {
            className: se.cell,
            children: b.jsx('input', {
              type: 'number',
              className: se.cellInput,
              value: s.p_extinction,
              min: '0',
              max: '1',
              step: '0.05',
              onChange: (ie) => M('p_extinction', ie.target.value),
              ...ee,
            }),
          })
        : null;
  }
  return b.jsxs('div', {
    className: se.worldviewColumn,
    children: [
      b.jsxs('div', {
        className: se.columnHeader,
        children: [
          b.jsxs('select', {
            className: se.presetSelect,
            value: s.presetId || 'custom',
            onChange: P,
            children: [
              $e.presets.map((B) => b.jsx('option', { value: B.id, children: B.name }, B.id)),
              b.jsx('option', { value: 'custom', children: 'Custom' }),
            ],
          }),
          O &&
            b.jsx('button', {
              type: 'button',
              className: se.removeButton,
              onClick: () => I(a),
              title: 'Remove worldview',
              children: '×',
            }),
        ],
      }),
      i.map((B, H) => b.jsx('div', { children: V(B, H) }, H)),
    ],
  });
}
function hh() {
  const s = [];
  (s.push({ type: 'sectionTitle', label: 'Credence' }),
    s.push({ type: 'data', field: 'credence', label: 'Weight' }),
    s.push({ type: 'sectionTitle', label: 'Moral Weights' }));
  for (const a of $e.moralWeightKeys)
    s.push({ type: 'data', field: `moral_weights.${a.key}`, label: a.label });
  s.push({ type: 'sectionTitle', label: 'Discount Factors' });
  for (let a = 0; a < $e.discountFactorLabels.length; a++)
    s.push({ type: 'data', field: `discount_factor.${a}`, label: $e.discountFactorLabels[a] });
  return (
    s.push({ type: 'sectionTitle', label: 'Risk' }),
    s.push({ type: 'data', field: 'risk_profile', label: 'Risk Profile' }),
    s.push({ type: 'data', field: 'p_extinction', label: 'Non-xrisk discount' }),
    s
  );
}
const Rc = hh();
function vh({
  worldviews: s,
  credences: a,
  lockedKeys: i,
  setLockedKeys: c,
  onCredenceChange: d,
  onUpdate: f,
  onUpdateDiscount: p,
  onApplyPreset: w,
  onAdd: h,
  onRemove: g,
}) {
  return b.jsx('div', {
    className: se.spreadsheet,
    children: b.jsxs('div', {
      className: se.spreadsheetScroll,
      children: [
        b.jsxs('div', {
          className: se.rowLabels,
          children: [
            b.jsx('div', { className: se.labelHeader }),
            Rc.map((v, x) =>
              v.type === 'sectionTitle'
                ? b.jsx('div', { className: se.sectionTitle, children: v.label }, x)
                : b.jsx('div', { className: se.rowLabel, children: v.label }, x)
            ),
          ],
        }),
        s.map((v, x) =>
          b.jsx(
            mh,
            {
              worldview: v,
              index: x,
              rows: Rc,
              columnIndex: x,
              totalColumns: s.length,
              credences: a,
              lockedKeys: i,
              setLockedKeys: c,
              onCredenceChange: d,
              onUpdate: f,
              onUpdateDiscount: p,
              onApplyPreset: w,
              onRemove: g,
              canRemove: s.length > 1,
            },
            x
          )
        ),
        b.jsx('div', {
          className: se.addColumn,
          children: b.jsx('button', {
            type: 'button',
            className: se.addButton,
            onClick: h,
            children: '+',
          }),
        }),
      ],
    }),
  });
}
function yh({ name: s, percentage: a, funding: i, color: c }) {
  return b.jsxs('div', {
    className: se.allocationBar,
    children: [
      b.jsxs('div', {
        className: se.allocationLabel,
        children: [
          b.jsx('span', { className: se.allocationName, children: s }),
          b.jsxs('span', {
            className: se.allocationValue,
            children: [
              a.toFixed(1),
              '%',
              b.jsxs('span', {
                className: se.allocationFunding,
                children: ['$', i.toFixed(0), 'M'],
              }),
            ],
          }),
        ],
      }),
      b.jsx('div', {
        className: se.allocationTrack,
        children: b.jsx('div', {
          className: se.allocationFill,
          style: { width: `${a}%`, backgroundColor: c },
        }),
      }),
    ],
  });
}
function gh({
  selectedMethod: s,
  onMethodChange: a,
  totalBudget: i,
  onBudgetChange: c,
  results: d,
}) {
  const f = Object.entries($e.projects),
    p = $e.votingMethods.find((h) => h.key === s),
    w = (h) => {
      const g = h.target.value === '' ? 0 : Number(h.target.value);
      !isNaN(g) && g >= 0 && c(g);
    };
  return b.jsxs('div', {
    className: se.resultsPanel,
    children: [
      b.jsxs('div', {
        className: se.methodSelector,
        children: [
          b.jsx('label', { className: se.methodLabel, children: 'Total Budget ($M)' }),
          b.jsx('input', {
            type: 'number',
            className: se.budgetInput,
            value: i,
            min: '0',
            step: '10',
            onChange: w,
          }),
        ],
      }),
      b.jsxs('div', {
        className: se.methodSelector,
        children: [
          b.jsx('label', { className: se.methodLabel, children: 'Voting Method' }),
          b.jsx('select', {
            className: se.methodSelect,
            value: s,
            onChange: (h) => a(h.target.value),
            children: $e.votingMethods.map((h) =>
              b.jsx('option', { value: h.key, children: h.name }, h.key)
            ),
          }),
        ],
      }),
      b.jsx('div', {
        className: se.allocationList,
        children: f.map(([h, g]) =>
          b.jsx(
            yh,
            {
              name: g.name,
              percentage: d.allocations[h] || 0,
              funding: d.funding[h] || 0,
              color: g.color,
            },
            h
          )
        ),
      }),
      (p == null ? void 0 : p.ignoresCredences) &&
        b.jsx('p', {
          className: se.methodDisclaimer,
          children:
            'This method does not use credence weights. Results depend only on the worldview parameters, not how much weight you assign to each.',
        }),
    ],
  });
}
function wh() {
  const {
    worldviews: s,
    credences: a,
    lockedKeys: i,
    setLockedKeys: c,
    selectedMethod: d,
    results: f,
    addWorldview: p,
    removeWorldview: w,
    updateCredence: h,
    updateWorldview: g,
    updateDiscountFactor: v,
    applyPreset: x,
    setSelectedMethod: I,
    totalBudget: O,
    setTotalBudget: P,
  } = Im();
  return b.jsx('div', {
    className: se.container,
    children: b.jsxs('div', {
      className: se.layout,
      children: [
        b.jsx('div', {
          className: se.spreadsheetSide,
          children: b.jsx(vh, {
            worldviews: s,
            credences: a,
            lockedKeys: i,
            setLockedKeys: c,
            onCredenceChange: h,
            onUpdate: g,
            onUpdateDiscount: v,
            onApplyPreset: x,
            onAdd: p,
            onRemove: w,
          }),
        }),
        b.jsx('div', {
          className: se.resultsSide,
          children: b.jsx(gh, {
            selectedMethod: d,
            onMethodChange: I,
            totalBudget: O,
            onBudgetChange: P,
            results: f,
          }),
        }),
      ],
    }),
  });
}
Wc(!0);
function _h() {
  const {
    currentStep: s,
    currentQuestion: a,
    setDebugConfig: i,
    shareUrlError: c,
    isHydrating: d,
  } = Mp();
  return d ? null : b.jsx(wh, {});
}
function kh() {
  return b.jsx(Lp, { children: b.jsx(_h, {}) });
}
ld.createRoot(document.getElementById('root')).render(
  b.jsx(z.StrictMode, { children: b.jsx(kh, {}) })
);
