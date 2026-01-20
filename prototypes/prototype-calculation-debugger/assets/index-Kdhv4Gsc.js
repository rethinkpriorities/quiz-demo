(function () {
  const _ = document.createElement('link').relList;
  if (_ && _.supports && _.supports('modulepreload')) return;
  for (const v of document.querySelectorAll('link[rel="modulepreload"]')) j(v);
  new MutationObserver((v) => {
    for (const L of v)
      if (L.type === 'childList')
        for (const T of L.addedNodes) T.tagName === 'LINK' && T.rel === 'modulepreload' && j(T);
  }).observe(document, { childList: !0, subtree: !0 });
  function f(v) {
    const L = {};
    return (
      v.integrity && (L.integrity = v.integrity),
      v.referrerPolicy && (L.referrerPolicy = v.referrerPolicy),
      v.crossOrigin === 'use-credentials'
        ? (L.credentials = 'include')
        : v.crossOrigin === 'anonymous'
          ? (L.credentials = 'omit')
          : (L.credentials = 'same-origin'),
      L
    );
  }
  function j(v) {
    if (v.ep) return;
    v.ep = !0;
    const L = f(v);
    fetch(v.href, L);
  }
})();
var Ki = { exports: {} },
  Rr = {},
  Yi = { exports: {} },
  te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ka;
function sd() {
  if (Ka) return te;
  Ka = 1;
  var g = Symbol.for('react.element'),
    _ = Symbol.for('react.portal'),
    f = Symbol.for('react.fragment'),
    j = Symbol.for('react.strict_mode'),
    v = Symbol.for('react.profiler'),
    L = Symbol.for('react.provider'),
    T = Symbol.for('react.context'),
    U = Symbol.for('react.forward_ref'),
    y = Symbol.for('react.suspense'),
    D = Symbol.for('react.memo'),
    E = Symbol.for('react.lazy'),
    z = Symbol.iterator;
  function N(d) {
    return d === null || typeof d != 'object'
      ? null
      : ((d = (z && d[z]) || d['@@iterator']), typeof d == 'function' ? d : null);
  }
  var H = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Q = Object.assign,
    G = {};
  function B(d, x, J) {
    ((this.props = d), (this.context = x), (this.refs = G), (this.updater = J || H));
  }
  ((B.prototype.isReactComponent = {}),
    (B.prototype.setState = function (d, x) {
      if (typeof d != 'object' && typeof d != 'function' && d != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, d, x, 'setState');
    }),
    (B.prototype.forceUpdate = function (d) {
      this.updater.enqueueForceUpdate(this, d, 'forceUpdate');
    }));
  function K() {}
  K.prototype = B.prototype;
  function fe(d, x, J) {
    ((this.props = d), (this.context = x), (this.refs = G), (this.updater = J || H));
  }
  var ue = (fe.prototype = new K());
  ((ue.constructor = fe), Q(ue, B.prototype), (ue.isPureReactComponent = !0));
  var X = Array.isArray,
    ne = Object.prototype.hasOwnProperty,
    Y = { current: null },
    se = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ae(d, x, J) {
    var ee,
      re = {},
      le = null,
      xe = null;
    if (x != null)
      for (ee in (x.ref !== void 0 && (xe = x.ref), x.key !== void 0 && (le = '' + x.key), x))
        ne.call(x, ee) && !se.hasOwnProperty(ee) && (re[ee] = x[ee]);
    var me = arguments.length - 2;
    if (me === 1) re.children = J;
    else if (1 < me) {
      for (var Se = Array(me), qe = 0; qe < me; qe++) Se[qe] = arguments[qe + 2];
      re.children = Se;
    }
    if (d && d.defaultProps)
      for (ee in ((me = d.defaultProps), me)) re[ee] === void 0 && (re[ee] = me[ee]);
    return { $$typeof: g, type: d, key: le, ref: xe, props: re, _owner: Y.current };
  }
  function Ee(d, x) {
    return { $$typeof: g, type: d.type, key: x, ref: d.ref, props: d.props, _owner: d._owner };
  }
  function de(d) {
    return typeof d == 'object' && d !== null && d.$$typeof === g;
  }
  function ye(d) {
    var x = { '=': '=0', ':': '=2' };
    return (
      '$' +
      d.replace(/[=:]/g, function (J) {
        return x[J];
      })
    );
  }
  var b = /\/+/g;
  function oe(d, x) {
    return typeof d == 'object' && d !== null && d.key != null ? ye('' + d.key) : x.toString(36);
  }
  function pe(d, x, J, ee, re) {
    var le = typeof d;
    (le === 'undefined' || le === 'boolean') && (d = null);
    var xe = !1;
    if (d === null) xe = !0;
    else
      switch (le) {
        case 'string':
        case 'number':
          xe = !0;
          break;
        case 'object':
          switch (d.$$typeof) {
            case g:
            case _:
              xe = !0;
          }
      }
    if (xe)
      return (
        (xe = d),
        (re = re(xe)),
        (d = ee === '' ? '.' + oe(xe, 0) : ee),
        X(re)
          ? ((J = ''),
            d != null && (J = d.replace(b, '$&/') + '/'),
            pe(re, x, J, '', function (qe) {
              return qe;
            }))
          : re != null &&
            (de(re) &&
              (re = Ee(
                re,
                J +
                  (!re.key || (xe && xe.key === re.key)
                    ? ''
                    : ('' + re.key).replace(b, '$&/') + '/') +
                  d
              )),
            x.push(re)),
        1
      );
    if (((xe = 0), (ee = ee === '' ? '.' : ee + ':'), X(d)))
      for (var me = 0; me < d.length; me++) {
        le = d[me];
        var Se = ee + oe(le, me);
        xe += pe(le, x, J, Se, re);
      }
    else if (((Se = N(d)), typeof Se == 'function'))
      for (d = Se.call(d), me = 0; !(le = d.next()).done; )
        ((le = le.value), (Se = ee + oe(le, me++)), (xe += pe(le, x, J, Se, re)));
    else if (le === 'object')
      throw (
        (x = String(d)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (x === '[object Object]' ? 'object with keys {' + Object.keys(d).join(', ') + '}' : x) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return xe;
  }
  function Ie(d, x, J) {
    if (d == null) return d;
    var ee = [],
      re = 0;
    return (
      pe(d, ee, '', '', function (le) {
        return x.call(J, le, re++);
      }),
      ee
    );
  }
  function Fe(d) {
    if (d._status === -1) {
      var x = d._result;
      ((x = x()),
        x.then(
          function (J) {
            (d._status === 0 || d._status === -1) && ((d._status = 1), (d._result = J));
          },
          function (J) {
            (d._status === 0 || d._status === -1) && ((d._status = 2), (d._result = J));
          }
        ),
        d._status === -1 && ((d._status = 0), (d._result = x)));
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var ge = { current: null },
    P = { transition: null },
    W = { ReactCurrentDispatcher: ge, ReactCurrentBatchConfig: P, ReactCurrentOwner: Y };
  function O() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (te.Children = {
      map: Ie,
      forEach: function (d, x, J) {
        Ie(
          d,
          function () {
            x.apply(this, arguments);
          },
          J
        );
      },
      count: function (d) {
        var x = 0;
        return (
          Ie(d, function () {
            x++;
          }),
          x
        );
      },
      toArray: function (d) {
        return (
          Ie(d, function (x) {
            return x;
          }) || []
        );
      },
      only: function (d) {
        if (!de(d))
          throw Error('React.Children.only expected to receive a single React element child.');
        return d;
      },
    }),
    (te.Component = B),
    (te.Fragment = f),
    (te.Profiler = v),
    (te.PureComponent = fe),
    (te.StrictMode = j),
    (te.Suspense = y),
    (te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W),
    (te.act = O),
    (te.cloneElement = function (d, x, J) {
      if (d == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + d + '.'
        );
      var ee = Q({}, d.props),
        re = d.key,
        le = d.ref,
        xe = d._owner;
      if (x != null) {
        if (
          (x.ref !== void 0 && ((le = x.ref), (xe = Y.current)),
          x.key !== void 0 && (re = '' + x.key),
          d.type && d.type.defaultProps)
        )
          var me = d.type.defaultProps;
        for (Se in x)
          ne.call(x, Se) &&
            !se.hasOwnProperty(Se) &&
            (ee[Se] = x[Se] === void 0 && me !== void 0 ? me[Se] : x[Se]);
      }
      var Se = arguments.length - 2;
      if (Se === 1) ee.children = J;
      else if (1 < Se) {
        me = Array(Se);
        for (var qe = 0; qe < Se; qe++) me[qe] = arguments[qe + 2];
        ee.children = me;
      }
      return { $$typeof: g, type: d.type, key: re, ref: le, props: ee, _owner: xe };
    }),
    (te.createContext = function (d) {
      return (
        (d = {
          $$typeof: T,
          _currentValue: d,
          _currentValue2: d,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (d.Provider = { $$typeof: L, _context: d }),
        (d.Consumer = d)
      );
    }),
    (te.createElement = ae),
    (te.createFactory = function (d) {
      var x = ae.bind(null, d);
      return ((x.type = d), x);
    }),
    (te.createRef = function () {
      return { current: null };
    }),
    (te.forwardRef = function (d) {
      return { $$typeof: U, render: d };
    }),
    (te.isValidElement = de),
    (te.lazy = function (d) {
      return { $$typeof: E, _payload: { _status: -1, _result: d }, _init: Fe };
    }),
    (te.memo = function (d, x) {
      return { $$typeof: D, type: d, compare: x === void 0 ? null : x };
    }),
    (te.startTransition = function (d) {
      var x = P.transition;
      P.transition = {};
      try {
        d();
      } finally {
        P.transition = x;
      }
    }),
    (te.unstable_act = O),
    (te.useCallback = function (d, x) {
      return ge.current.useCallback(d, x);
    }),
    (te.useContext = function (d) {
      return ge.current.useContext(d);
    }),
    (te.useDebugValue = function () {}),
    (te.useDeferredValue = function (d) {
      return ge.current.useDeferredValue(d);
    }),
    (te.useEffect = function (d, x) {
      return ge.current.useEffect(d, x);
    }),
    (te.useId = function () {
      return ge.current.useId();
    }),
    (te.useImperativeHandle = function (d, x, J) {
      return ge.current.useImperativeHandle(d, x, J);
    }),
    (te.useInsertionEffect = function (d, x) {
      return ge.current.useInsertionEffect(d, x);
    }),
    (te.useLayoutEffect = function (d, x) {
      return ge.current.useLayoutEffect(d, x);
    }),
    (te.useMemo = function (d, x) {
      return ge.current.useMemo(d, x);
    }),
    (te.useReducer = function (d, x, J) {
      return ge.current.useReducer(d, x, J);
    }),
    (te.useRef = function (d) {
      return ge.current.useRef(d);
    }),
    (te.useState = function (d) {
      return ge.current.useState(d);
    }),
    (te.useSyncExternalStore = function (d, x, J) {
      return ge.current.useSyncExternalStore(d, x, J);
    }),
    (te.useTransition = function () {
      return ge.current.useTransition();
    }),
    (te.version = '18.3.1'),
    te
  );
}
var Ya;
function bi() {
  return (Ya || ((Ya = 1), (Yi.exports = sd())), Yi.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xa;
function ad() {
  if (Xa) return Rr;
  Xa = 1;
  var g = bi(),
    _ = Symbol.for('react.element'),
    f = Symbol.for('react.fragment'),
    j = Object.prototype.hasOwnProperty,
    v = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    L = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(U, y, D) {
    var E,
      z = {},
      N = null,
      H = null;
    (D !== void 0 && (N = '' + D),
      y.key !== void 0 && (N = '' + y.key),
      y.ref !== void 0 && (H = y.ref));
    for (E in y) j.call(y, E) && !L.hasOwnProperty(E) && (z[E] = y[E]);
    if (U && U.defaultProps) for (E in ((y = U.defaultProps), y)) z[E] === void 0 && (z[E] = y[E]);
    return { $$typeof: _, type: U, key: N, ref: H, props: z, _owner: v.current };
  }
  return ((Rr.Fragment = f), (Rr.jsx = T), (Rr.jsxs = T), Rr);
}
var Ja;
function cd() {
  return (Ja || ((Ja = 1), (Ki.exports = ad())), Ki.exports);
}
var s = cd(),
  he = bi(),
  Xl = {},
  Xi = { exports: {} },
  nt = {},
  Ji = { exports: {} },
  Zi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Za;
function fd() {
  return (
    Za ||
      ((Za = 1),
      (function (g) {
        function _(P, W) {
          var O = P.length;
          P.push(W);
          e: for (; 0 < O; ) {
            var d = (O - 1) >>> 1,
              x = P[d];
            if (0 < v(x, W)) ((P[d] = W), (P[O] = x), (O = d));
            else break e;
          }
        }
        function f(P) {
          return P.length === 0 ? null : P[0];
        }
        function j(P) {
          if (P.length === 0) return null;
          var W = P[0],
            O = P.pop();
          if (O !== W) {
            P[0] = O;
            e: for (var d = 0, x = P.length, J = x >>> 1; d < J; ) {
              var ee = 2 * (d + 1) - 1,
                re = P[ee],
                le = ee + 1,
                xe = P[le];
              if (0 > v(re, O))
                le < x && 0 > v(xe, re)
                  ? ((P[d] = xe), (P[le] = O), (d = le))
                  : ((P[d] = re), (P[ee] = O), (d = ee));
              else if (le < x && 0 > v(xe, O)) ((P[d] = xe), (P[le] = O), (d = le));
              else break e;
            }
          }
          return W;
        }
        function v(P, W) {
          var O = P.sortIndex - W.sortIndex;
          return O !== 0 ? O : P.id - W.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var L = performance;
          g.unstable_now = function () {
            return L.now();
          };
        } else {
          var T = Date,
            U = T.now();
          g.unstable_now = function () {
            return T.now() - U;
          };
        }
        var y = [],
          D = [],
          E = 1,
          z = null,
          N = 3,
          H = !1,
          Q = !1,
          G = !1,
          B = typeof setTimeout == 'function' ? setTimeout : null,
          K = typeof clearTimeout == 'function' ? clearTimeout : null,
          fe = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function ue(P) {
          for (var W = f(D); W !== null; ) {
            if (W.callback === null) j(D);
            else if (W.startTime <= P) (j(D), (W.sortIndex = W.expirationTime), _(y, W));
            else break;
            W = f(D);
          }
        }
        function X(P) {
          if (((G = !1), ue(P), !Q))
            if (f(y) !== null) ((Q = !0), Fe(ne));
            else {
              var W = f(D);
              W !== null && ge(X, W.startTime - P);
            }
        }
        function ne(P, W) {
          ((Q = !1), G && ((G = !1), K(ae), (ae = -1)), (H = !0));
          var O = N;
          try {
            for (ue(W), z = f(y); z !== null && (!(z.expirationTime > W) || (P && !ye())); ) {
              var d = z.callback;
              if (typeof d == 'function') {
                ((z.callback = null), (N = z.priorityLevel));
                var x = d(z.expirationTime <= W);
                ((W = g.unstable_now()),
                  typeof x == 'function' ? (z.callback = x) : z === f(y) && j(y),
                  ue(W));
              } else j(y);
              z = f(y);
            }
            if (z !== null) var J = !0;
            else {
              var ee = f(D);
              (ee !== null && ge(X, ee.startTime - W), (J = !1));
            }
            return J;
          } finally {
            ((z = null), (N = O), (H = !1));
          }
        }
        var Y = !1,
          se = null,
          ae = -1,
          Ee = 5,
          de = -1;
        function ye() {
          return !(g.unstable_now() - de < Ee);
        }
        function b() {
          if (se !== null) {
            var P = g.unstable_now();
            de = P;
            var W = !0;
            try {
              W = se(!0, P);
            } finally {
              W ? oe() : ((Y = !1), (se = null));
            }
          } else Y = !1;
        }
        var oe;
        if (typeof fe == 'function')
          oe = function () {
            fe(b);
          };
        else if (typeof MessageChannel < 'u') {
          var pe = new MessageChannel(),
            Ie = pe.port2;
          ((pe.port1.onmessage = b),
            (oe = function () {
              Ie.postMessage(null);
            }));
        } else
          oe = function () {
            B(b, 0);
          };
        function Fe(P) {
          ((se = P), Y || ((Y = !0), oe()));
        }
        function ge(P, W) {
          ae = B(function () {
            P(g.unstable_now());
          }, W);
        }
        ((g.unstable_IdlePriority = 5),
          (g.unstable_ImmediatePriority = 1),
          (g.unstable_LowPriority = 4),
          (g.unstable_NormalPriority = 3),
          (g.unstable_Profiling = null),
          (g.unstable_UserBlockingPriority = 2),
          (g.unstable_cancelCallback = function (P) {
            P.callback = null;
          }),
          (g.unstable_continueExecution = function () {
            Q || H || ((Q = !0), Fe(ne));
          }),
          (g.unstable_forceFrameRate = function (P) {
            0 > P || 125 < P
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Ee = 0 < P ? Math.floor(1e3 / P) : 5);
          }),
          (g.unstable_getCurrentPriorityLevel = function () {
            return N;
          }),
          (g.unstable_getFirstCallbackNode = function () {
            return f(y);
          }),
          (g.unstable_next = function (P) {
            switch (N) {
              case 1:
              case 2:
              case 3:
                var W = 3;
                break;
              default:
                W = N;
            }
            var O = N;
            N = W;
            try {
              return P();
            } finally {
              N = O;
            }
          }),
          (g.unstable_pauseExecution = function () {}),
          (g.unstable_requestPaint = function () {}),
          (g.unstable_runWithPriority = function (P, W) {
            switch (P) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                P = 3;
            }
            var O = N;
            N = P;
            try {
              return W();
            } finally {
              N = O;
            }
          }),
          (g.unstable_scheduleCallback = function (P, W, O) {
            var d = g.unstable_now();
            switch (
              (typeof O == 'object' && O !== null
                ? ((O = O.delay), (O = typeof O == 'number' && 0 < O ? d + O : d))
                : (O = d),
              P)
            ) {
              case 1:
                var x = -1;
                break;
              case 2:
                x = 250;
                break;
              case 5:
                x = 1073741823;
                break;
              case 4:
                x = 1e4;
                break;
              default:
                x = 5e3;
            }
            return (
              (x = O + x),
              (P = {
                id: E++,
                callback: W,
                priorityLevel: P,
                startTime: O,
                expirationTime: x,
                sortIndex: -1,
              }),
              O > d
                ? ((P.sortIndex = O),
                  _(D, P),
                  f(y) === null && P === f(D) && (G ? (K(ae), (ae = -1)) : (G = !0), ge(X, O - d)))
                : ((P.sortIndex = x), _(y, P), Q || H || ((Q = !0), Fe(ne))),
              P
            );
          }),
          (g.unstable_shouldYield = ye),
          (g.unstable_wrapCallback = function (P) {
            var W = N;
            return function () {
              var O = N;
              N = W;
              try {
                return P.apply(this, arguments);
              } finally {
                N = O;
              }
            };
          }));
      })(Zi)),
    Zi
  );
}
var ba;
function dd() {
  return (ba || ((ba = 1), (Ji.exports = fd())), Ji.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ec;
function pd() {
  if (ec) return nt;
  ec = 1;
  var g = bi(),
    _ = dd();
  function f(e) {
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
  var j = new Set(),
    v = {};
  function L(e, t) {
    (T(e, t), T(e + 'Capture', t));
  }
  function T(e, t) {
    for (v[e] = t, e = 0; e < t.length; e++) j.add(t[e]);
  }
  var U = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    y = Object.prototype.hasOwnProperty,
    D =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    E = {},
    z = {};
  function N(e) {
    return y.call(z, e) ? !0 : y.call(E, e) ? !1 : D.test(e) ? (z[e] = !0) : ((E[e] = !0), !1);
  }
  function H(e, t, n, r) {
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
  function Q(e, t, n, r) {
    if (t === null || typeof t > 'u' || H(e, t, n, r)) return !0;
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
  function G(e, t, n, r, l, o, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i));
  }
  var B = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      B[e] = new G(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      B[t] = new G(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      B[e] = new G(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        B[e] = new G(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        B[e] = new G(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      B[e] = new G(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      B[e] = new G(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      B[e] = new G(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      B[e] = new G(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var K = /[\-:]([a-z])/g;
  function fe(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(K, fe);
      B[t] = new G(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(K, fe);
        B[t] = new G(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(K, fe);
      B[t] = new G(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      B[e] = new G(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (B.xlinkHref = new G('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      B[e] = new G(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function ue(e, t, n, r) {
    var l = B.hasOwnProperty(t) ? B[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (Q(t, n, l, r) && (n = null),
      r || l === null
        ? N(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
  var X = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ne = Symbol.for('react.element'),
    Y = Symbol.for('react.portal'),
    se = Symbol.for('react.fragment'),
    ae = Symbol.for('react.strict_mode'),
    Ee = Symbol.for('react.profiler'),
    de = Symbol.for('react.provider'),
    ye = Symbol.for('react.context'),
    b = Symbol.for('react.forward_ref'),
    oe = Symbol.for('react.suspense'),
    pe = Symbol.for('react.suspense_list'),
    Ie = Symbol.for('react.memo'),
    Fe = Symbol.for('react.lazy'),
    ge = Symbol.for('react.offscreen'),
    P = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (P && e[P]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var O = Object.assign,
    d;
  function x(e) {
    if (d === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        d = (t && t[1]) || '';
      }
    return (
      `
` +
      d +
      e
    );
  }
  var J = !1;
  function ee(e, t) {
    if (!e || J) return '';
    J = !0;
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
          } catch (h) {
            var r = h;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (h) {
            r = h;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (h) {
          r = h;
        }
        e();
      }
    } catch (h) {
      if (h && r && typeof h.stack == 'string') {
        for (
          var l = h.stack.split(`
`),
            o = r.stack.split(`
`),
            i = l.length - 1,
            u = o.length - 1;
          1 <= i && 0 <= u && l[i] !== o[u];
        )
          u--;
        for (; 1 <= i && 0 <= u; i--, u--)
          if (l[i] !== o[u]) {
            if (i !== 1 || u !== 1)
              do
                if ((i--, u--, 0 > u || l[i] !== o[u])) {
                  var a =
                    `
` + l[i].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      a.includes('<anonymous>') &&
                      (a = a.replace('<anonymous>', e.displayName)),
                    a
                  );
                }
              while (1 <= i && 0 <= u);
            break;
          }
      }
    } finally {
      ((J = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? x(e) : '';
  }
  function re(e) {
    switch (e.tag) {
      case 5:
        return x(e.type);
      case 16:
        return x('Lazy');
      case 13:
        return x('Suspense');
      case 19:
        return x('SuspenseList');
      case 0:
      case 2:
      case 15:
        return ((e = ee(e.type, !1)), e);
      case 11:
        return ((e = ee(e.type.render, !1)), e);
      case 1:
        return ((e = ee(e.type, !0)), e);
      default:
        return '';
    }
  }
  function le(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case se:
        return 'Fragment';
      case Y:
        return 'Portal';
      case Ee:
        return 'Profiler';
      case ae:
        return 'StrictMode';
      case oe:
        return 'Suspense';
      case pe:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case ye:
          return (e.displayName || 'Context') + '.Consumer';
        case de:
          return (e._context.displayName || 'Context') + '.Provider';
        case b:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case Ie:
          return ((t = e.displayName || null), t !== null ? t : le(e.type) || 'Memo');
        case Fe:
          ((t = e._payload), (e = e._init));
          try {
            return le(e(t));
          } catch {}
      }
    return null;
  }
  function xe(e) {
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
        return le(t);
      case 8:
        return t === ae ? 'StrictMode' : 'Mode';
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
  function me(e) {
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
  function Se(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function qe(e) {
    var t = Se(e) ? 'checked' : 'value',
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
          set: function (i) {
            ((r = '' + i), o.call(this, i));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = '' + i;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function wn(e) {
    e._valueTracker || (e._valueTracker = qe(e));
  }
  function Hr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = Se(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function _n(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ht(e, t) {
    var n = t.checked;
    return O({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function tu(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = me(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      }));
  }
  function nu(e, t) {
    ((t = t.checked), t != null && ue(e, 'checked', t, !1));
  }
  function to(e, t) {
    nu(e, t);
    var n = me(t.value),
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
      ? no(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && no(e, t.type, me(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function ru(e, t, n) {
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
  function no(e, t, n) {
    (t !== 'number' || _n(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var Kn = Array.isArray;
  function kn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + me(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ro(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(f(91));
    return O({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function lu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(f(92));
        if (Kn(n)) {
          if (1 < n.length) throw Error(f(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: me(n) };
  }
  function ou(e, t) {
    var n = me(t.value),
      r = me(t.defaultValue);
    (n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r));
  }
  function iu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function uu(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function lo(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? uu(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var Wr,
    su = (function (e) {
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
          Wr = Wr || document.createElement('div'),
            Wr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = Wr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Yn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Xn = {
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
    fc = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Xn).forEach(function (e) {
    fc.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xn[t] = Xn[e]));
    });
  });
  function au(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (Xn.hasOwnProperty(e) && Xn[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function cu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = au(n, t[n], r);
        (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var dc = O(
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
  function oo(e, t) {
    if (t) {
      if (dc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(f(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(f(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(f(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(f(62));
    }
  }
  function io(e, t) {
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
  var uo = null;
  function so(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ao = null,
    Cn = null,
    En = null;
  function fu(e) {
    if ((e = gr(e))) {
      if (typeof ao != 'function') throw Error(f(280));
      var t = e.stateNode;
      t && ((t = fl(t)), ao(e.stateNode, e.type, t));
    }
  }
  function du(e) {
    Cn ? (En ? En.push(e) : (En = [e])) : (Cn = e);
  }
  function pu() {
    if (Cn) {
      var e = Cn,
        t = En;
      if (((En = Cn = null), fu(e), t)) for (e = 0; e < t.length; e++) fu(t[e]);
    }
  }
  function mu(e, t) {
    return e(t);
  }
  function hu() {}
  var co = !1;
  function vu(e, t, n) {
    if (co) return e(t, n);
    co = !0;
    try {
      return mu(e, t, n);
    } finally {
      ((co = !1), (Cn !== null || En !== null) && (hu(), pu()));
    }
  }
  function Jn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = fl(n);
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
    if (n && typeof n != 'function') throw Error(f(231, t, typeof n));
    return n;
  }
  var fo = !1;
  if (U)
    try {
      var Zn = {};
      (Object.defineProperty(Zn, 'passive', {
        get: function () {
          fo = !0;
        },
      }),
        window.addEventListener('test', Zn, Zn),
        window.removeEventListener('test', Zn, Zn));
    } catch {
      fo = !1;
    }
  function pc(e, t, n, r, l, o, i, u, a) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (w) {
      this.onError(w);
    }
  }
  var bn = !1,
    $r = null,
    Vr = !1,
    po = null,
    mc = {
      onError: function (e) {
        ((bn = !0), ($r = e));
      },
    };
  function hc(e, t, n, r, l, o, i, u, a) {
    ((bn = !1), ($r = null), pc.apply(mc, arguments));
  }
  function vc(e, t, n, r, l, o, i, u, a) {
    if ((hc.apply(this, arguments), bn)) {
      if (bn) {
        var h = $r;
        ((bn = !1), ($r = null));
      } else throw Error(f(198));
      Vr || ((Vr = !0), (po = h));
    }
  }
  function un(e) {
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
  function yu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function gu(e) {
    if (un(e) !== e) throw Error(f(188));
  }
  function yc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = un(e)), t === null)) throw Error(f(188));
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
          if (o === n) return (gu(l), e);
          if (o === r) return (gu(l), t);
          o = o.sibling;
        }
        throw Error(f(188));
      }
      if (n.return !== r.return) ((n = l), (r = o));
      else {
        for (var i = !1, u = l.child; u; ) {
          if (u === n) {
            ((i = !0), (n = l), (r = o));
            break;
          }
          if (u === r) {
            ((i = !0), (r = l), (n = o));
            break;
          }
          u = u.sibling;
        }
        if (!i) {
          for (u = o.child; u; ) {
            if (u === n) {
              ((i = !0), (n = o), (r = l));
              break;
            }
            if (u === r) {
              ((i = !0), (r = o), (n = l));
              break;
            }
            u = u.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (n.alternate !== r) throw Error(f(190));
    }
    if (n.tag !== 3) throw Error(f(188));
    return n.stateNode.current === n ? e : t;
  }
  function xu(e) {
    return ((e = yc(e)), e !== null ? Su(e) : null);
  }
  function Su(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Su(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var wu = _.unstable_scheduleCallback,
    _u = _.unstable_cancelCallback,
    gc = _.unstable_shouldYield,
    xc = _.unstable_requestPaint,
    Pe = _.unstable_now,
    Sc = _.unstable_getCurrentPriorityLevel,
    mo = _.unstable_ImmediatePriority,
    ku = _.unstable_UserBlockingPriority,
    Qr = _.unstable_NormalPriority,
    wc = _.unstable_LowPriority,
    Cu = _.unstable_IdlePriority,
    Gr = null,
    Ct = null;
  function _c(e) {
    if (Ct && typeof Ct.onCommitFiberRoot == 'function')
      try {
        Ct.onCommitFiberRoot(Gr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var vt = Math.clz32 ? Math.clz32 : Ec,
    kc = Math.log,
    Cc = Math.LN2;
  function Ec(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((kc(e) / Cc) | 0)) | 0);
  }
  var qr = 64,
    Kr = 4194304;
  function er(e) {
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
  function Yr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? (r = er(u)) : ((o &= i), o !== 0 && (r = er(o)));
    } else ((i = n & ~l), i !== 0 ? (r = er(i)) : o !== 0 && (r = er(o)));
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
        ((n = 31 - vt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function Nc(e, t) {
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
  function jc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes;
      0 < o;
    ) {
      var i = 31 - vt(o),
        u = 1 << i,
        a = l[i];
      (a === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[i] = Nc(u, t))
        : a <= t && (e.expiredLanes |= u),
        (o &= ~u));
    }
  }
  function ho(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Eu() {
    var e = qr;
    return ((qr <<= 1), (qr & 4194240) === 0 && (qr = 64), e);
  }
  function vo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function tr(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - vt(t)),
      (e[t] = n));
  }
  function Lc(e, t) {
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
      var l = 31 - vt(n),
        o = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o));
    }
  }
  function yo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - vt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var ve = 0;
  function Nu(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var ju,
    go,
    Lu,
    Pu,
    Tu,
    xo = !1,
    Xr = [],
    Bt = null,
    Ut = null,
    Ht = null,
    nr = new Map(),
    rr = new Map(),
    Wt = [],
    Pc =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function Ou(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Bt = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Ut = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Ht = null;
        break;
      case 'pointerover':
      case 'pointerout':
        nr.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        rr.delete(t.pointerId);
    }
  }
  function lr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = gr(t)), t !== null && go(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Tc(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return ((Bt = lr(Bt, e, t, n, r, l)), !0);
      case 'dragenter':
        return ((Ut = lr(Ut, e, t, n, r, l)), !0);
      case 'mouseover':
        return ((Ht = lr(Ht, e, t, n, r, l)), !0);
      case 'pointerover':
        var o = l.pointerId;
        return (nr.set(o, lr(nr.get(o) || null, e, t, n, r, l)), !0);
      case 'gotpointercapture':
        return ((o = l.pointerId), rr.set(o, lr(rr.get(o) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function Mu(e) {
    var t = sn(e.target);
    if (t !== null) {
      var n = un(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = yu(n)), t !== null)) {
            ((e.blockedOn = t),
              Tu(e.priority, function () {
                Lu(n);
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
  function Jr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = wo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((uo = r), n.target.dispatchEvent(r), (uo = null));
      } else return ((t = gr(n)), t !== null && go(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Ru(e, t, n) {
    Jr(e) && n.delete(t);
  }
  function Oc() {
    ((xo = !1),
      Bt !== null && Jr(Bt) && (Bt = null),
      Ut !== null && Jr(Ut) && (Ut = null),
      Ht !== null && Jr(Ht) && (Ht = null),
      nr.forEach(Ru),
      rr.forEach(Ru));
  }
  function or(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      xo || ((xo = !0), _.unstable_scheduleCallback(_.unstable_NormalPriority, Oc)));
  }
  function ir(e) {
    function t(l) {
      return or(l, e);
    }
    if (0 < Xr.length) {
      or(Xr[0], e);
      for (var n = 1; n < Xr.length; n++) {
        var r = Xr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Bt !== null && or(Bt, e),
        Ut !== null && or(Ut, e),
        Ht !== null && or(Ht, e),
        nr.forEach(t),
        rr.forEach(t),
        n = 0;
      n < Wt.length;
      n++
    )
      ((r = Wt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Wt.length && ((n = Wt[0]), n.blockedOn === null); )
      (Mu(n), n.blockedOn === null && Wt.shift());
  }
  var Nn = X.ReactCurrentBatchConfig,
    Zr = !0;
  function Mc(e, t, n, r) {
    var l = ve,
      o = Nn.transition;
    Nn.transition = null;
    try {
      ((ve = 1), So(e, t, n, r));
    } finally {
      ((ve = l), (Nn.transition = o));
    }
  }
  function Rc(e, t, n, r) {
    var l = ve,
      o = Nn.transition;
    Nn.transition = null;
    try {
      ((ve = 4), So(e, t, n, r));
    } finally {
      ((ve = l), (Nn.transition = o));
    }
  }
  function So(e, t, n, r) {
    if (Zr) {
      var l = wo(e, t, n, r);
      if (l === null) (Ao(e, t, r, br, n), Ou(e, r));
      else if (Tc(l, e, t, n, r)) r.stopPropagation();
      else if ((Ou(e, r), t & 4 && -1 < Pc.indexOf(e))) {
        for (; l !== null; ) {
          var o = gr(l);
          if (
            (o !== null && ju(o), (o = wo(e, t, n, r)), o === null && Ao(e, t, r, br, n), o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Ao(e, t, r, null, n);
    }
  }
  var br = null;
  function wo(e, t, n, r) {
    if (((br = null), (e = so(r)), (e = sn(e)), e !== null))
      if (((t = un(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = yu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((br = e), null);
  }
  function zu(e) {
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
        switch (Sc()) {
          case mo:
            return 1;
          case ku:
            return 4;
          case Qr:
          case wc:
            return 16;
          case Cu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var $t = null,
    _o = null,
    el = null;
  function Iu() {
    if (el) return el;
    var e,
      t = _o,
      n = t.length,
      r,
      l = 'value' in $t ? $t.value : $t.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (el = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function tl(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function nl() {
    return !0;
  }
  function Fu() {
    return !1;
  }
  function rt(e) {
    function t(n, r, l, o, i) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = i),
        (this.currentTarget = null));
      for (var u in e) e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? nl
          : Fu),
        (this.isPropagationStopped = Fu),
        this
      );
    }
    return (
      O(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = nl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = nl));
        },
        persist: function () {},
        isPersistent: nl,
      }),
      t
    );
  }
  var jn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ko = rt(jn),
    ur = O({}, jn, { view: 0, detail: 0 }),
    zc = rt(ur),
    Co,
    Eo,
    sr,
    rl = O({}, ur, {
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
      getModifierState: jo,
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
          : (e !== sr &&
              (sr && e.type === 'mousemove'
                ? ((Co = e.screenX - sr.screenX), (Eo = e.screenY - sr.screenY))
                : (Eo = Co = 0),
              (sr = e)),
            Co);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Eo;
      },
    }),
    Du = rt(rl),
    Ic = O({}, rl, { dataTransfer: 0 }),
    Fc = rt(Ic),
    Dc = O({}, ur, { relatedTarget: 0 }),
    No = rt(Dc),
    Ac = O({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Bc = rt(Ac),
    Uc = O({}, jn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Hc = rt(Uc),
    Wc = O({}, jn, { data: 0 }),
    Au = rt(Wc),
    $c = {
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
    Vc = {
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
    Qc = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Gc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Qc[e]) ? !!t[e] : !1;
  }
  function jo() {
    return Gc;
  }
  var qc = O({}, ur, {
      key: function (e) {
        if (e.key) {
          var t = $c[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = tl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Vc[e.keyCode] || 'Unidentified'
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
      getModifierState: jo,
      charCode: function (e) {
        return e.type === 'keypress' ? tl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? tl(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Kc = rt(qc),
    Yc = O({}, rl, {
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
    Bu = rt(Yc),
    Xc = O({}, ur, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: jo,
    }),
    Jc = rt(Xc),
    Zc = O({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    bc = rt(Zc),
    ef = O({}, rl, {
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
    tf = rt(ef),
    nf = [9, 13, 27, 32],
    Lo = U && 'CompositionEvent' in window,
    ar = null;
  U && 'documentMode' in document && (ar = document.documentMode);
  var rf = U && 'TextEvent' in window && !ar,
    Uu = U && (!Lo || (ar && 8 < ar && 11 >= ar)),
    Hu = ' ',
    Wu = !1;
  function $u(e, t) {
    switch (e) {
      case 'keyup':
        return nf.indexOf(t.keyCode) !== -1;
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
  var Ln = !1;
  function lf(e, t) {
    switch (e) {
      case 'compositionend':
        return Vu(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Wu = !0), Hu);
      case 'textInput':
        return ((e = t.data), e === Hu && Wu ? null : e);
      default:
        return null;
    }
  }
  function of(e, t) {
    if (Ln)
      return e === 'compositionend' || (!Lo && $u(e, t))
        ? ((e = Iu()), (el = _o = $t = null), (Ln = !1), e)
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
        return Uu && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var uf = {
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
  function Qu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!uf[e.type] : t === 'textarea';
  }
  function Gu(e, t, n, r) {
    (du(r),
      (t = sl(t, 'onChange')),
      0 < t.length &&
        ((n = new ko('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
  }
  var cr = null,
    fr = null;
  function sf(e) {
    cs(e, 0);
  }
  function ll(e) {
    var t = Rn(e);
    if (Hr(t)) return e;
  }
  function af(e, t) {
    if (e === 'change') return t;
  }
  var qu = !1;
  if (U) {
    var Po;
    if (U) {
      var To = 'oninput' in document;
      if (!To) {
        var Ku = document.createElement('div');
        (Ku.setAttribute('oninput', 'return;'), (To = typeof Ku.oninput == 'function'));
      }
      Po = To;
    } else Po = !1;
    qu = Po && (!document.documentMode || 9 < document.documentMode);
  }
  function Yu() {
    cr && (cr.detachEvent('onpropertychange', Xu), (fr = cr = null));
  }
  function Xu(e) {
    if (e.propertyName === 'value' && ll(fr)) {
      var t = [];
      (Gu(t, fr, e, so(e)), vu(sf, t));
    }
  }
  function cf(e, t, n) {
    e === 'focusin'
      ? (Yu(), (cr = t), (fr = n), cr.attachEvent('onpropertychange', Xu))
      : e === 'focusout' && Yu();
  }
  function ff(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return ll(fr);
  }
  function df(e, t) {
    if (e === 'click') return ll(t);
  }
  function pf(e, t) {
    if (e === 'input' || e === 'change') return ll(t);
  }
  function mf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var yt = typeof Object.is == 'function' ? Object.is : mf;
  function dr(e, t) {
    if (yt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!y.call(t, l) || !yt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ju(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Zu(e, t) {
    var n = Ju(e);
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
      n = Ju(n);
    }
  }
  function bu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? bu(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function es() {
    for (var e = window, t = _n(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = _n(e.document);
    }
    return t;
  }
  function Oo(e) {
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
  function hf(e) {
    var t = es(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && bu(n.ownerDocument.documentElement, n)) {
      if (r !== null && Oo(n)) {
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
            (l = Zu(n, o)));
          var i = Zu(n, r);
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var vf = U && 'documentMode' in document && 11 >= document.documentMode,
    Pn = null,
    Mo = null,
    pr = null,
    Ro = !1;
  function ts(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ro ||
      Pn == null ||
      Pn !== _n(r) ||
      ((r = Pn),
      'selectionStart' in r && Oo(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (pr && dr(pr, r)) ||
        ((pr = r),
        (r = sl(Mo, 'onSelect')),
        0 < r.length &&
          ((t = new ko('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Pn))));
  }
  function ol(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var Tn = {
      animationend: ol('Animation', 'AnimationEnd'),
      animationiteration: ol('Animation', 'AnimationIteration'),
      animationstart: ol('Animation', 'AnimationStart'),
      transitionend: ol('Transition', 'TransitionEnd'),
    },
    zo = {},
    ns = {};
  U &&
    ((ns = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Tn.animationend.animation,
      delete Tn.animationiteration.animation,
      delete Tn.animationstart.animation),
    'TransitionEvent' in window || delete Tn.transitionend.transition);
  function il(e) {
    if (zo[e]) return zo[e];
    if (!Tn[e]) return e;
    var t = Tn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ns) return (zo[e] = t[n]);
    return e;
  }
  var rs = il('animationend'),
    ls = il('animationiteration'),
    os = il('animationstart'),
    is = il('transitionend'),
    us = new Map(),
    ss =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Vt(e, t) {
    (us.set(e, t), L(t, [e]));
  }
  for (var Io = 0; Io < ss.length; Io++) {
    var Fo = ss[Io],
      yf = Fo.toLowerCase(),
      gf = Fo[0].toUpperCase() + Fo.slice(1);
    Vt(yf, 'on' + gf);
  }
  (Vt(rs, 'onAnimationEnd'),
    Vt(ls, 'onAnimationIteration'),
    Vt(os, 'onAnimationStart'),
    Vt('dblclick', 'onDoubleClick'),
    Vt('focusin', 'onFocus'),
    Vt('focusout', 'onBlur'),
    Vt(is, 'onTransitionEnd'),
    T('onMouseEnter', ['mouseout', 'mouseover']),
    T('onMouseLeave', ['mouseout', 'mouseover']),
    T('onPointerEnter', ['pointerout', 'pointerover']),
    T('onPointerLeave', ['pointerout', 'pointerover']),
    L('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    L(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    L('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    L('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    L(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    L(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var mr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    xf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(mr));
  function as(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n), vc(r, t, void 0, e), (e.currentTarget = null));
  }
  function cs(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var i = r.length - 1; 0 <= i; i--) {
            var u = r[i],
              a = u.instance,
              h = u.currentTarget;
            if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
            (as(l, u, h), (o = a));
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((u = r[i]),
              (a = u.instance),
              (h = u.currentTarget),
              (u = u.listener),
              a !== o && l.isPropagationStopped())
            )
              break e;
            (as(l, u, h), (o = a));
          }
      }
    }
    if (Vr) throw ((e = po), (Vr = !1), (po = null), e);
  }
  function _e(e, t) {
    var n = t[Vo];
    n === void 0 && (n = t[Vo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (fs(t, e, 2, !1), n.add(r));
  }
  function Do(e, t, n) {
    var r = 0;
    (t && (r |= 4), fs(n, e, r, t));
  }
  var ul = '_reactListening' + Math.random().toString(36).slice(2);
  function hr(e) {
    if (!e[ul]) {
      ((e[ul] = !0),
        j.forEach(function (n) {
          n !== 'selectionchange' && (xf.has(n) || Do(n, !1, e), Do(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ul] || ((t[ul] = !0), Do('selectionchange', !1, t));
    }
  }
  function fs(e, t, n, r) {
    switch (zu(t)) {
      case 1:
        var l = Mc;
        break;
      case 4:
        l = Rc;
        break;
      default:
        l = So;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !fo || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function Ao(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var a = i.tag;
              if (
                (a === 3 || a === 4) &&
                ((a = i.stateNode.containerInfo),
                a === l || (a.nodeType === 8 && a.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (((i = sn(u)), i === null)) return;
            if (((a = i.tag), a === 5 || a === 6)) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    vu(function () {
      var h = o,
        w = so(n),
        k = [];
      e: {
        var S = us.get(e);
        if (S !== void 0) {
          var M = ko,
            I = e;
          switch (e) {
            case 'keypress':
              if (tl(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              M = Kc;
              break;
            case 'focusin':
              ((I = 'focus'), (M = No));
              break;
            case 'focusout':
              ((I = 'blur'), (M = No));
              break;
            case 'beforeblur':
            case 'afterblur':
              M = No;
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
              M = Du;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              M = Fc;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              M = Jc;
              break;
            case rs:
            case ls:
            case os:
              M = Bc;
              break;
            case is:
              M = bc;
              break;
            case 'scroll':
              M = zc;
              break;
            case 'wheel':
              M = tf;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              M = Hc;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              M = Bu;
          }
          var F = (t & 4) !== 0,
            Te = !F && e === 'scroll',
            p = F ? (S !== null ? S + 'Capture' : null) : S;
          F = [];
          for (var c = h, m; c !== null; ) {
            m = c;
            var C = m.stateNode;
            if (
              (m.tag === 5 &&
                C !== null &&
                ((m = C), p !== null && ((C = Jn(c, p)), C != null && F.push(vr(c, C, m)))),
              Te)
            )
              break;
            c = c.return;
          }
          0 < F.length && ((S = new M(S, I, null, n, w)), k.push({ event: S, listeners: F }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((S = e === 'mouseover' || e === 'pointerover'),
            (M = e === 'mouseout' || e === 'pointerout'),
            S && n !== uo && (I = n.relatedTarget || n.fromElement) && (sn(I) || I[Pt]))
          )
            break e;
          if (
            (M || S) &&
            ((S =
              w.window === w
                ? w
                : (S = w.ownerDocument)
                  ? S.defaultView || S.parentWindow
                  : window),
            M
              ? ((I = n.relatedTarget || n.toElement),
                (M = h),
                (I = I ? sn(I) : null),
                I !== null &&
                  ((Te = un(I)), I !== Te || (I.tag !== 5 && I.tag !== 6)) &&
                  (I = null))
              : ((M = null), (I = h)),
            M !== I)
          ) {
            if (
              ((F = Du),
              (C = 'onMouseLeave'),
              (p = 'onMouseEnter'),
              (c = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((F = Bu), (C = 'onPointerLeave'), (p = 'onPointerEnter'), (c = 'pointer')),
              (Te = M == null ? S : Rn(M)),
              (m = I == null ? S : Rn(I)),
              (S = new F(C, c + 'leave', M, n, w)),
              (S.target = Te),
              (S.relatedTarget = m),
              (C = null),
              sn(w) === h &&
                ((F = new F(p, c + 'enter', I, n, w)),
                (F.target = m),
                (F.relatedTarget = Te),
                (C = F)),
              (Te = C),
              M && I)
            )
              t: {
                for (F = M, p = I, c = 0, m = F; m; m = On(m)) c++;
                for (m = 0, C = p; C; C = On(C)) m++;
                for (; 0 < c - m; ) ((F = On(F)), c--);
                for (; 0 < m - c; ) ((p = On(p)), m--);
                for (; c--; ) {
                  if (F === p || (p !== null && F === p.alternate)) break t;
                  ((F = On(F)), (p = On(p)));
                }
                F = null;
              }
            else F = null;
            (M !== null && ds(k, S, M, F, !1), I !== null && Te !== null && ds(k, Te, I, F, !0));
          }
        }
        e: {
          if (
            ((S = h ? Rn(h) : window),
            (M = S.nodeName && S.nodeName.toLowerCase()),
            M === 'select' || (M === 'input' && S.type === 'file'))
          )
            var A = af;
          else if (Qu(S))
            if (qu) A = pf;
            else {
              A = ff;
              var $ = cf;
            }
          else
            (M = S.nodeName) &&
              M.toLowerCase() === 'input' &&
              (S.type === 'checkbox' || S.type === 'radio') &&
              (A = df);
          if (A && (A = A(e, h))) {
            Gu(k, A, n, w);
            break e;
          }
          ($ && $(e, S, h),
            e === 'focusout' &&
              ($ = S._wrapperState) &&
              $.controlled &&
              S.type === 'number' &&
              no(S, 'number', S.value));
        }
        switch ((($ = h ? Rn(h) : window), e)) {
          case 'focusin':
            (Qu($) || $.contentEditable === 'true') && ((Pn = $), (Mo = h), (pr = null));
            break;
          case 'focusout':
            pr = Mo = Pn = null;
            break;
          case 'mousedown':
            Ro = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Ro = !1), ts(k, n, w));
            break;
          case 'selectionchange':
            if (vf) break;
          case 'keydown':
          case 'keyup':
            ts(k, n, w);
        }
        var V;
        if (Lo)
          e: {
            switch (e) {
              case 'compositionstart':
                var q = 'onCompositionStart';
                break e;
              case 'compositionend':
                q = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                q = 'onCompositionUpdate';
                break e;
            }
            q = void 0;
          }
        else
          Ln
            ? $u(e, n) && (q = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (q = 'onCompositionStart');
        (q &&
          (Uu &&
            n.locale !== 'ko' &&
            (Ln || q !== 'onCompositionStart'
              ? q === 'onCompositionEnd' && Ln && (V = Iu())
              : (($t = w), (_o = 'value' in $t ? $t.value : $t.textContent), (Ln = !0))),
          ($ = sl(h, q)),
          0 < $.length &&
            ((q = new Au(q, e, null, n, w)),
            k.push({ event: q, listeners: $ }),
            V ? (q.data = V) : ((V = Vu(n)), V !== null && (q.data = V)))),
          (V = rf ? lf(e, n) : of(e, n)) &&
            ((h = sl(h, 'onBeforeInput')),
            0 < h.length &&
              ((w = new Au('onBeforeInput', 'beforeinput', null, n, w)),
              k.push({ event: w, listeners: h }),
              (w.data = V))));
      }
      cs(k, t);
    });
  }
  function vr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function sl(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      (l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Jn(e, n)),
        o != null && r.unshift(vr(e, o, l)),
        (o = Jn(e, t)),
        o != null && r.push(vr(e, o, l))),
        (e = e.return));
    }
    return r;
  }
  function On(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ds(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n,
        a = u.alternate,
        h = u.stateNode;
      if (a !== null && a === r) break;
      (u.tag === 5 &&
        h !== null &&
        ((u = h),
        l
          ? ((a = Jn(n, o)), a != null && i.unshift(vr(n, a, u)))
          : l || ((a = Jn(n, o)), a != null && i.push(vr(n, a, u)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Sf = /\r\n?/g,
    wf = /\u0000|\uFFFD/g;
  function ps(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Sf,
        `
`
      )
      .replace(wf, '');
  }
  function al(e, t, n) {
    if (((t = ps(t)), ps(e) !== t && n)) throw Error(f(425));
  }
  function cl() {}
  var Bo = null,
    Uo = null;
  function Ho(e, t) {
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
  var Wo = typeof setTimeout == 'function' ? setTimeout : void 0,
    _f = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    ms = typeof Promise == 'function' ? Promise : void 0,
    kf =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof ms < 'u'
          ? function (e) {
              return ms.resolve(null).then(e).catch(Cf);
            }
          : Wo;
  function Cf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function $o(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$')) {
          if (r === 0) {
            (e.removeChild(l), ir(t));
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = l;
    } while (n);
    ir(t);
  }
  function Qt(e) {
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
  function hs(e) {
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
  var Mn = Math.random().toString(36).slice(2),
    Et = '__reactFiber$' + Mn,
    yr = '__reactProps$' + Mn,
    Pt = '__reactContainer$' + Mn,
    Vo = '__reactEvents$' + Mn,
    Ef = '__reactListeners$' + Mn,
    Nf = '__reactHandles$' + Mn;
  function sn(e) {
    var t = e[Et];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Pt] || n[Et])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = hs(e); e !== null; ) {
            if ((n = e[Et])) return n;
            e = hs(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function gr(e) {
    return (
      (e = e[Et] || e[Pt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Rn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(f(33));
  }
  function fl(e) {
    return e[yr] || null;
  }
  var Qo = [],
    zn = -1;
  function Gt(e) {
    return { current: e };
  }
  function ke(e) {
    0 > zn || ((e.current = Qo[zn]), (Qo[zn] = null), zn--);
  }
  function we(e, t) {
    (zn++, (Qo[zn] = e.current), (e.current = t));
  }
  var qt = {},
    $e = Gt(qt),
    Je = Gt(!1),
    an = qt;
  function In(e, t) {
    var n = e.type.contextTypes;
    if (!n) return qt;
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
  function Ze(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function dl() {
    (ke(Je), ke($e));
  }
  function vs(e, t, n) {
    if ($e.current !== qt) throw Error(f(168));
    (we($e, t), we(Je, n));
  }
  function ys(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(f(108, xe(e) || 'Unknown', l));
    return O({}, n, r);
  }
  function pl(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || qt),
      (an = $e.current),
      we($e, e),
      we(Je, Je.current),
      !0
    );
  }
  function gs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(f(169));
    (n
      ? ((e = ys(e, t, an)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ke(Je),
        ke($e),
        we($e, e))
      : ke(Je),
      we(Je, n));
  }
  var Tt = null,
    ml = !1,
    Go = !1;
  function xs(e) {
    Tt === null ? (Tt = [e]) : Tt.push(e);
  }
  function jf(e) {
    ((ml = !0), xs(e));
  }
  function Kt() {
    if (!Go && Tt !== null) {
      Go = !0;
      var e = 0,
        t = ve;
      try {
        var n = Tt;
        for (ve = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Tt = null), (ml = !1));
      } catch (l) {
        throw (Tt !== null && (Tt = Tt.slice(e + 1)), wu(mo, Kt), l);
      } finally {
        ((ve = t), (Go = !1));
      }
    }
    return null;
  }
  var Fn = [],
    Dn = 0,
    hl = null,
    vl = 0,
    st = [],
    at = 0,
    cn = null,
    Ot = 1,
    Mt = '';
  function fn(e, t) {
    ((Fn[Dn++] = vl), (Fn[Dn++] = hl), (hl = e), (vl = t));
  }
  function Ss(e, t, n) {
    ((st[at++] = Ot), (st[at++] = Mt), (st[at++] = cn), (cn = e));
    var r = Ot;
    e = Mt;
    var l = 32 - vt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var o = 32 - vt(t) + l;
    if (30 < o) {
      var i = l - (l % 5);
      ((o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (Ot = (1 << (32 - vt(t) + l)) | (n << l) | r),
        (Mt = o + e));
    } else ((Ot = (1 << o) | (n << l) | r), (Mt = e));
  }
  function qo(e) {
    e.return !== null && (fn(e, 1), Ss(e, 1, 0));
  }
  function Ko(e) {
    for (; e === hl; ) ((hl = Fn[--Dn]), (Fn[Dn] = null), (vl = Fn[--Dn]), (Fn[Dn] = null));
    for (; e === cn; )
      ((cn = st[--at]),
        (st[at] = null),
        (Mt = st[--at]),
        (st[at] = null),
        (Ot = st[--at]),
        (st[at] = null));
  }
  var lt = null,
    ot = null,
    Ce = !1,
    gt = null;
  function ws(e, t) {
    var n = pt(5, null, null, 0);
    ((n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function _s(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (lt = e), (ot = Qt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (lt = e), (ot = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = cn !== null ? { id: Ot, overflow: Mt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = pt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (lt = e),
              (ot = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Yo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Xo(e) {
    if (Ce) {
      var t = ot;
      if (t) {
        var n = t;
        if (!_s(e, t)) {
          if (Yo(e)) throw Error(f(418));
          t = Qt(n.nextSibling);
          var r = lt;
          t && _s(e, t) ? ws(r, n) : ((e.flags = (e.flags & -4097) | 2), (Ce = !1), (lt = e));
        }
      } else {
        if (Yo(e)) throw Error(f(418));
        ((e.flags = (e.flags & -4097) | 2), (Ce = !1), (lt = e));
      }
    }
  }
  function ks(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    lt = e;
  }
  function yl(e) {
    if (e !== lt) return !1;
    if (!Ce) return (ks(e), (Ce = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !Ho(e.type, e.memoizedProps))),
      t && (t = ot))
    ) {
      if (Yo(e)) throw (Cs(), Error(f(418)));
      for (; t; ) (ws(e, t), (t = Qt(t.nextSibling)));
    }
    if ((ks(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(f(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                ot = Qt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        ot = null;
      }
    } else ot = lt ? Qt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Cs() {
    for (var e = ot; e; ) e = Qt(e.nextSibling);
  }
  function An() {
    ((ot = lt = null), (Ce = !1));
  }
  function Jo(e) {
    gt === null ? (gt = [e]) : gt.push(e);
  }
  var Lf = X.ReactCurrentBatchConfig;
  function xr(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(f(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(f(147, e));
        var l = r,
          o = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === o
          ? t.ref
          : ((t = function (i) {
              var u = l.refs;
              i === null ? delete u[o] : (u[o] = i);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != 'string') throw Error(f(284));
      if (!n._owner) throw Error(f(290, e));
    }
    return e;
  }
  function gl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        f(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      )
    );
  }
  function Es(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ns(e) {
    function t(p, c) {
      if (e) {
        var m = p.deletions;
        m === null ? ((p.deletions = [c]), (p.flags |= 16)) : m.push(c);
      }
    }
    function n(p, c) {
      if (!e) return null;
      for (; c !== null; ) (t(p, c), (c = c.sibling));
      return null;
    }
    function r(p, c) {
      for (p = new Map(); c !== null; )
        (c.key !== null ? p.set(c.key, c) : p.set(c.index, c), (c = c.sibling));
      return p;
    }
    function l(p, c) {
      return ((p = nn(p, c)), (p.index = 0), (p.sibling = null), p);
    }
    function o(p, c, m) {
      return (
        (p.index = m),
        e
          ? ((m = p.alternate),
            m !== null ? ((m = m.index), m < c ? ((p.flags |= 2), c) : m) : ((p.flags |= 2), c))
          : ((p.flags |= 1048576), c)
      );
    }
    function i(p) {
      return (e && p.alternate === null && (p.flags |= 2), p);
    }
    function u(p, c, m, C) {
      return c === null || c.tag !== 6
        ? ((c = Wi(m, p.mode, C)), (c.return = p), c)
        : ((c = l(c, m)), (c.return = p), c);
    }
    function a(p, c, m, C) {
      var A = m.type;
      return A === se
        ? w(p, c, m.props.children, C, m.key)
        : c !== null &&
            (c.elementType === A ||
              (typeof A == 'object' && A !== null && A.$$typeof === Fe && Es(A) === c.type))
          ? ((C = l(c, m.props)), (C.ref = xr(p, c, m)), (C.return = p), C)
          : ((C = Wl(m.type, m.key, m.props, null, p.mode, C)),
            (C.ref = xr(p, c, m)),
            (C.return = p),
            C);
    }
    function h(p, c, m, C) {
      return c === null ||
        c.tag !== 4 ||
        c.stateNode.containerInfo !== m.containerInfo ||
        c.stateNode.implementation !== m.implementation
        ? ((c = $i(m, p.mode, C)), (c.return = p), c)
        : ((c = l(c, m.children || [])), (c.return = p), c);
    }
    function w(p, c, m, C, A) {
      return c === null || c.tag !== 7
        ? ((c = xn(m, p.mode, C, A)), (c.return = p), c)
        : ((c = l(c, m)), (c.return = p), c);
    }
    function k(p, c, m) {
      if ((typeof c == 'string' && c !== '') || typeof c == 'number')
        return ((c = Wi('' + c, p.mode, m)), (c.return = p), c);
      if (typeof c == 'object' && c !== null) {
        switch (c.$$typeof) {
          case ne:
            return (
              (m = Wl(c.type, c.key, c.props, null, p.mode, m)),
              (m.ref = xr(p, null, c)),
              (m.return = p),
              m
            );
          case Y:
            return ((c = $i(c, p.mode, m)), (c.return = p), c);
          case Fe:
            var C = c._init;
            return k(p, C(c._payload), m);
        }
        if (Kn(c) || W(c)) return ((c = xn(c, p.mode, m, null)), (c.return = p), c);
        gl(p, c);
      }
      return null;
    }
    function S(p, c, m, C) {
      var A = c !== null ? c.key : null;
      if ((typeof m == 'string' && m !== '') || typeof m == 'number')
        return A !== null ? null : u(p, c, '' + m, C);
      if (typeof m == 'object' && m !== null) {
        switch (m.$$typeof) {
          case ne:
            return m.key === A ? a(p, c, m, C) : null;
          case Y:
            return m.key === A ? h(p, c, m, C) : null;
          case Fe:
            return ((A = m._init), S(p, c, A(m._payload), C));
        }
        if (Kn(m) || W(m)) return A !== null ? null : w(p, c, m, C, null);
        gl(p, m);
      }
      return null;
    }
    function M(p, c, m, C, A) {
      if ((typeof C == 'string' && C !== '') || typeof C == 'number')
        return ((p = p.get(m) || null), u(c, p, '' + C, A));
      if (typeof C == 'object' && C !== null) {
        switch (C.$$typeof) {
          case ne:
            return ((p = p.get(C.key === null ? m : C.key) || null), a(c, p, C, A));
          case Y:
            return ((p = p.get(C.key === null ? m : C.key) || null), h(c, p, C, A));
          case Fe:
            var $ = C._init;
            return M(p, c, m, $(C._payload), A);
        }
        if (Kn(C) || W(C)) return ((p = p.get(m) || null), w(c, p, C, A, null));
        gl(c, C);
      }
      return null;
    }
    function I(p, c, m, C) {
      for (var A = null, $ = null, V = c, q = (c = 0), Be = null; V !== null && q < m.length; q++) {
        V.index > q ? ((Be = V), (V = null)) : (Be = V.sibling);
        var ce = S(p, V, m[q], C);
        if (ce === null) {
          V === null && (V = Be);
          break;
        }
        (e && V && ce.alternate === null && t(p, V),
          (c = o(ce, c, q)),
          $ === null ? (A = ce) : ($.sibling = ce),
          ($ = ce),
          (V = Be));
      }
      if (q === m.length) return (n(p, V), Ce && fn(p, q), A);
      if (V === null) {
        for (; q < m.length; q++)
          ((V = k(p, m[q], C)),
            V !== null && ((c = o(V, c, q)), $ === null ? (A = V) : ($.sibling = V), ($ = V)));
        return (Ce && fn(p, q), A);
      }
      for (V = r(p, V); q < m.length; q++)
        ((Be = M(V, p, q, m[q], C)),
          Be !== null &&
            (e && Be.alternate !== null && V.delete(Be.key === null ? q : Be.key),
            (c = o(Be, c, q)),
            $ === null ? (A = Be) : ($.sibling = Be),
            ($ = Be)));
      return (
        e &&
          V.forEach(function (rn) {
            return t(p, rn);
          }),
        Ce && fn(p, q),
        A
      );
    }
    function F(p, c, m, C) {
      var A = W(m);
      if (typeof A != 'function') throw Error(f(150));
      if (((m = A.call(m)), m == null)) throw Error(f(151));
      for (
        var $ = (A = null), V = c, q = (c = 0), Be = null, ce = m.next();
        V !== null && !ce.done;
        q++, ce = m.next()
      ) {
        V.index > q ? ((Be = V), (V = null)) : (Be = V.sibling);
        var rn = S(p, V, ce.value, C);
        if (rn === null) {
          V === null && (V = Be);
          break;
        }
        (e && V && rn.alternate === null && t(p, V),
          (c = o(rn, c, q)),
          $ === null ? (A = rn) : ($.sibling = rn),
          ($ = rn),
          (V = Be));
      }
      if (ce.done) return (n(p, V), Ce && fn(p, q), A);
      if (V === null) {
        for (; !ce.done; q++, ce = m.next())
          ((ce = k(p, ce.value, C)),
            ce !== null && ((c = o(ce, c, q)), $ === null ? (A = ce) : ($.sibling = ce), ($ = ce)));
        return (Ce && fn(p, q), A);
      }
      for (V = r(p, V); !ce.done; q++, ce = m.next())
        ((ce = M(V, p, q, ce.value, C)),
          ce !== null &&
            (e && ce.alternate !== null && V.delete(ce.key === null ? q : ce.key),
            (c = o(ce, c, q)),
            $ === null ? (A = ce) : ($.sibling = ce),
            ($ = ce)));
      return (
        e &&
          V.forEach(function (ud) {
            return t(p, ud);
          }),
        Ce && fn(p, q),
        A
      );
    }
    function Te(p, c, m, C) {
      if (
        (typeof m == 'object' &&
          m !== null &&
          m.type === se &&
          m.key === null &&
          (m = m.props.children),
        typeof m == 'object' && m !== null)
      ) {
        switch (m.$$typeof) {
          case ne:
            e: {
              for (var A = m.key, $ = c; $ !== null; ) {
                if ($.key === A) {
                  if (((A = m.type), A === se)) {
                    if ($.tag === 7) {
                      (n(p, $.sibling), (c = l($, m.props.children)), (c.return = p), (p = c));
                      break e;
                    }
                  } else if (
                    $.elementType === A ||
                    (typeof A == 'object' && A !== null && A.$$typeof === Fe && Es(A) === $.type)
                  ) {
                    (n(p, $.sibling),
                      (c = l($, m.props)),
                      (c.ref = xr(p, $, m)),
                      (c.return = p),
                      (p = c));
                    break e;
                  }
                  n(p, $);
                  break;
                } else t(p, $);
                $ = $.sibling;
              }
              m.type === se
                ? ((c = xn(m.props.children, p.mode, C, m.key)), (c.return = p), (p = c))
                : ((C = Wl(m.type, m.key, m.props, null, p.mode, C)),
                  (C.ref = xr(p, c, m)),
                  (C.return = p),
                  (p = C));
            }
            return i(p);
          case Y:
            e: {
              for ($ = m.key; c !== null; ) {
                if (c.key === $)
                  if (
                    c.tag === 4 &&
                    c.stateNode.containerInfo === m.containerInfo &&
                    c.stateNode.implementation === m.implementation
                  ) {
                    (n(p, c.sibling), (c = l(c, m.children || [])), (c.return = p), (p = c));
                    break e;
                  } else {
                    n(p, c);
                    break;
                  }
                else t(p, c);
                c = c.sibling;
              }
              ((c = $i(m, p.mode, C)), (c.return = p), (p = c));
            }
            return i(p);
          case Fe:
            return (($ = m._init), Te(p, c, $(m._payload), C));
        }
        if (Kn(m)) return I(p, c, m, C);
        if (W(m)) return F(p, c, m, C);
        gl(p, m);
      }
      return (typeof m == 'string' && m !== '') || typeof m == 'number'
        ? ((m = '' + m),
          c !== null && c.tag === 6
            ? (n(p, c.sibling), (c = l(c, m)), (c.return = p), (p = c))
            : (n(p, c), (c = Wi(m, p.mode, C)), (c.return = p), (p = c)),
          i(p))
        : n(p, c);
    }
    return Te;
  }
  var Bn = Ns(!0),
    js = Ns(!1),
    xl = Gt(null),
    Sl = null,
    Un = null,
    Zo = null;
  function bo() {
    Zo = Un = Sl = null;
  }
  function ei(e) {
    var t = xl.current;
    (ke(xl), (e._currentValue = t));
  }
  function ti(e, t, n) {
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
  function Hn(e, t) {
    ((Sl = e),
      (Zo = Un = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (be = !0), (e.firstContext = null)));
  }
  function ct(e) {
    var t = e._currentValue;
    if (Zo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Un === null)) {
        if (Sl === null) throw Error(f(308));
        ((Un = e), (Sl.dependencies = { lanes: 0, firstContext: e }));
      } else Un = Un.next = e;
    return t;
  }
  var dn = null;
  function ni(e) {
    dn === null ? (dn = [e]) : dn.push(e);
  }
  function Ls(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), ni(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Rt(e, r)
    );
  }
  function Rt(e, t) {
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
  var Yt = !1;
  function ri(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ps(e, t) {
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
  function zt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Xt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (ie & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Rt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), ni(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Rt(e, n)
    );
  }
  function wl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), yo(e, n));
    }
  }
  function Ts(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (o === null ? (l = o = i) : (o = o.next = i), (n = n.next));
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
  function _l(e, t, n, r) {
    var l = e.updateQueue;
    Yt = !1;
    var o = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var a = u,
        h = a.next;
      ((a.next = null), i === null ? (o = h) : (i.next = h), (i = a));
      var w = e.alternate;
      w !== null &&
        ((w = w.updateQueue),
        (u = w.lastBaseUpdate),
        u !== i && (u === null ? (w.firstBaseUpdate = h) : (u.next = h), (w.lastBaseUpdate = a)));
    }
    if (o !== null) {
      var k = l.baseState;
      ((i = 0), (w = h = a = null), (u = o));
      do {
        var S = u.lane,
          M = u.eventTime;
        if ((r & S) === S) {
          w !== null &&
            (w = w.next =
              {
                eventTime: M,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var I = e,
              F = u;
            switch (((S = t), (M = n), F.tag)) {
              case 1:
                if (((I = F.payload), typeof I == 'function')) {
                  k = I.call(M, k, S);
                  break e;
                }
                k = I;
                break e;
              case 3:
                I.flags = (I.flags & -65537) | 128;
              case 0:
                if (
                  ((I = F.payload), (S = typeof I == 'function' ? I.call(M, k, S) : I), S == null)
                )
                  break e;
                k = O({}, k, S);
                break e;
              case 2:
                Yt = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64), (S = l.effects), S === null ? (l.effects = [u]) : S.push(u));
        } else
          ((M = {
            eventTime: M,
            lane: S,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            w === null ? ((h = w = M), (a = k)) : (w = w.next = M),
            (i |= S));
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          ((S = u),
            (u = S.next),
            (S.next = null),
            (l.lastBaseUpdate = S),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (w === null && (a = k),
        (l.baseState = a),
        (l.firstBaseUpdate = h),
        (l.lastBaseUpdate = w),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((i |= l.lane), (l = l.next));
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      ((hn |= i), (e.lanes = i), (e.memoizedState = k));
    }
  }
  function Os(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != 'function')) throw Error(f(191, l));
          l.call(r);
        }
      }
  }
  var Sr = {},
    Nt = Gt(Sr),
    wr = Gt(Sr),
    _r = Gt(Sr);
  function pn(e) {
    if (e === Sr) throw Error(f(174));
    return e;
  }
  function li(e, t) {
    switch ((we(_r, t), we(wr, e), we(Nt, Sr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : lo(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = lo(t, e)));
    }
    (ke(Nt), we(Nt, t));
  }
  function Wn() {
    (ke(Nt), ke(wr), ke(_r));
  }
  function Ms(e) {
    pn(_r.current);
    var t = pn(Nt.current),
      n = lo(t, e.type);
    t !== n && (we(wr, e), we(Nt, n));
  }
  function oi(e) {
    wr.current === e && (ke(Nt), ke(wr));
  }
  var Ne = Gt(0);
  function kl(e) {
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
  var ii = [];
  function ui() {
    for (var e = 0; e < ii.length; e++) ii[e]._workInProgressVersionPrimary = null;
    ii.length = 0;
  }
  var Cl = X.ReactCurrentDispatcher,
    si = X.ReactCurrentBatchConfig,
    mn = 0,
    je = null,
    Re = null,
    De = null,
    El = !1,
    kr = !1,
    Cr = 0,
    Pf = 0;
  function Ve() {
    throw Error(f(321));
  }
  function ai(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!yt(e[n], t[n])) return !1;
    return !0;
  }
  function ci(e, t, n, r, l, o) {
    if (
      ((mn = o),
      (je = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Cl.current = e === null || e.memoizedState === null ? Rf : zf),
      (e = n(r, l)),
      kr)
    ) {
      o = 0;
      do {
        if (((kr = !1), (Cr = 0), 25 <= o)) throw Error(f(301));
        ((o += 1), (De = Re = null), (t.updateQueue = null), (Cl.current = If), (e = n(r, l)));
      } while (kr);
    }
    if (
      ((Cl.current = Ll),
      (t = Re !== null && Re.next !== null),
      (mn = 0),
      (De = Re = je = null),
      (El = !1),
      t)
    )
      throw Error(f(300));
    return e;
  }
  function fi() {
    var e = Cr !== 0;
    return ((Cr = 0), e);
  }
  function jt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (De === null ? (je.memoizedState = De = e) : (De = De.next = e), De);
  }
  function ft() {
    if (Re === null) {
      var e = je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Re.next;
    var t = De === null ? je.memoizedState : De.next;
    if (t !== null) ((De = t), (Re = e));
    else {
      if (e === null) throw Error(f(310));
      ((Re = e),
        (e = {
          memoizedState: Re.memoizedState,
          baseState: Re.baseState,
          baseQueue: Re.baseQueue,
          queue: Re.queue,
          next: null,
        }),
        De === null ? (je.memoizedState = De = e) : (De = De.next = e));
    }
    return De;
  }
  function Er(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function di(e) {
    var t = ft(),
      n = t.queue;
    if (n === null) throw Error(f(311));
    n.lastRenderedReducer = e;
    var r = Re,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        ((l.next = o.next), (o.next = i));
      }
      ((r.baseQueue = l = o), (n.pending = null));
    }
    if (l !== null) {
      ((o = l.next), (r = r.baseState));
      var u = (i = null),
        a = null,
        h = o;
      do {
        var w = h.lane;
        if ((mn & w) === w)
          (a !== null &&
            (a = a.next =
              {
                lane: 0,
                action: h.action,
                hasEagerState: h.hasEagerState,
                eagerState: h.eagerState,
                next: null,
              }),
            (r = h.hasEagerState ? h.eagerState : e(r, h.action)));
        else {
          var k = {
            lane: w,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          };
          (a === null ? ((u = a = k), (i = r)) : (a = a.next = k), (je.lanes |= w), (hn |= w));
        }
        h = h.next;
      } while (h !== null && h !== o);
      (a === null ? (i = r) : (a.next = u),
        yt(r, t.memoizedState) || (be = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = a),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((o = l.lane), (je.lanes |= o), (hn |= o), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function pi(e) {
    var t = ft(),
      n = t.queue;
    if (n === null) throw Error(f(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = (l = l.next);
      do ((o = e(o, i.action)), (i = i.next));
      while (i !== l);
      (yt(o, t.memoizedState) || (be = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, r];
  }
  function Rs() {}
  function zs(e, t) {
    var n = je,
      r = ft(),
      l = t(),
      o = !yt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (be = !0)),
      (r = r.queue),
      mi(Ds.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (De !== null && De.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Nr(9, Fs.bind(null, n, r, l, t), void 0, null), Ae === null))
        throw Error(f(349));
      (mn & 30) !== 0 || Is(n, t, l);
    }
    return l;
  }
  function Is(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = je.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (je.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Fs(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), As(t) && Bs(e));
  }
  function Ds(e, t, n) {
    return n(function () {
      As(t) && Bs(e);
    });
  }
  function As(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !yt(e, n);
    } catch {
      return !0;
    }
  }
  function Bs(e) {
    var t = Rt(e, 1);
    t !== null && _t(t, e, 1, -1);
  }
  function Us(e) {
    var t = jt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Er,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Mf.bind(null, je, e)),
      [t.memoizedState, e]
    );
  }
  function Nr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = je.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (je.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Hs() {
    return ft().memoizedState;
  }
  function Nl(e, t, n, r) {
    var l = jt();
    ((je.flags |= e), (l.memoizedState = Nr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function jl(e, t, n, r) {
    var l = ft();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Re !== null) {
      var i = Re.memoizedState;
      if (((o = i.destroy), r !== null && ai(r, i.deps))) {
        l.memoizedState = Nr(t, n, o, r);
        return;
      }
    }
    ((je.flags |= e), (l.memoizedState = Nr(1 | t, n, o, r)));
  }
  function Ws(e, t) {
    return Nl(8390656, 8, e, t);
  }
  function mi(e, t) {
    return jl(2048, 8, e, t);
  }
  function $s(e, t) {
    return jl(4, 2, e, t);
  }
  function Vs(e, t) {
    return jl(4, 4, e, t);
  }
  function Qs(e, t) {
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
  function Gs(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), jl(4, 4, Qs.bind(null, t, e), n));
  }
  function hi() {}
  function qs(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ai(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Ks(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ai(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ys(e, t, n) {
    return (mn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (be = !0)), (e.memoizedState = n))
      : (yt(n, t) || ((n = Eu()), (je.lanes |= n), (hn |= n), (e.baseState = !0)), t);
  }
  function Tf(e, t) {
    var n = ve;
    ((ve = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = si.transition;
    si.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((ve = n), (si.transition = r));
    }
  }
  function Xs() {
    return ft().memoizedState;
  }
  function Of(e, t, n) {
    var r = en(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Js(e)))
      Zs(t, n);
    else if (((n = Ls(e, t, n, r)), n !== null)) {
      var l = Ye();
      (_t(n, e, r, l), bs(n, t, r));
    }
  }
  function Mf(e, t, n) {
    var r = en(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Js(e)) Zs(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var i = t.lastRenderedState,
            u = o(i, n);
          if (((l.hasEagerState = !0), (l.eagerState = u), yt(u, i))) {
            var a = t.interleaved;
            (a === null ? ((l.next = l), ni(t)) : ((l.next = a.next), (a.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Ls(e, t, l, r)), n !== null && ((l = Ye()), _t(n, e, r, l), bs(n, t, r)));
    }
  }
  function Js(e) {
    var t = e.alternate;
    return e === je || (t !== null && t === je);
  }
  function Zs(e, t) {
    kr = El = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function bs(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), yo(e, n));
    }
  }
  var Ll = {
      readContext: ct,
      useCallback: Ve,
      useContext: Ve,
      useEffect: Ve,
      useImperativeHandle: Ve,
      useInsertionEffect: Ve,
      useLayoutEffect: Ve,
      useMemo: Ve,
      useReducer: Ve,
      useRef: Ve,
      useState: Ve,
      useDebugValue: Ve,
      useDeferredValue: Ve,
      useTransition: Ve,
      useMutableSource: Ve,
      useSyncExternalStore: Ve,
      useId: Ve,
      unstable_isNewReconciler: !1,
    },
    Rf = {
      readContext: ct,
      useCallback: function (e, t) {
        return ((jt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ct,
      useEffect: Ws,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), Nl(4194308, 4, Qs.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Nl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Nl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = jt();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var r = jt();
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
          (e = e.dispatch = Of.bind(null, je, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = jt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Us,
      useDebugValue: hi,
      useDeferredValue: function (e) {
        return (jt().memoizedState = e);
      },
      useTransition: function () {
        var e = Us(!1),
          t = e[0];
        return ((e = Tf.bind(null, e[1])), (jt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = je,
          l = jt();
        if (Ce) {
          if (n === void 0) throw Error(f(407));
          n = n();
        } else {
          if (((n = t()), Ae === null)) throw Error(f(349));
          (mn & 30) !== 0 || Is(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Ws(Ds.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Nr(9, Fs.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = jt(),
          t = Ae.identifierPrefix;
        if (Ce) {
          var n = Mt,
            r = Ot;
          ((n = (r & ~(1 << (32 - vt(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = Cr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':'));
        } else ((n = Pf++), (t = ':' + t + 'r' + n.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    zf = {
      readContext: ct,
      useCallback: qs,
      useContext: ct,
      useEffect: mi,
      useImperativeHandle: Gs,
      useInsertionEffect: $s,
      useLayoutEffect: Vs,
      useMemo: Ks,
      useReducer: di,
      useRef: Hs,
      useState: function () {
        return di(Er);
      },
      useDebugValue: hi,
      useDeferredValue: function (e) {
        var t = ft();
        return Ys(t, Re.memoizedState, e);
      },
      useTransition: function () {
        var e = di(Er)[0],
          t = ft().memoizedState;
        return [e, t];
      },
      useMutableSource: Rs,
      useSyncExternalStore: zs,
      useId: Xs,
      unstable_isNewReconciler: !1,
    },
    If = {
      readContext: ct,
      useCallback: qs,
      useContext: ct,
      useEffect: mi,
      useImperativeHandle: Gs,
      useInsertionEffect: $s,
      useLayoutEffect: Vs,
      useMemo: Ks,
      useReducer: pi,
      useRef: Hs,
      useState: function () {
        return pi(Er);
      },
      useDebugValue: hi,
      useDeferredValue: function (e) {
        var t = ft();
        return Re === null ? (t.memoizedState = e) : Ys(t, Re.memoizedState, e);
      },
      useTransition: function () {
        var e = pi(Er)[0],
          t = ft().memoizedState;
        return [e, t];
      },
      useMutableSource: Rs,
      useSyncExternalStore: zs,
      useId: Xs,
      unstable_isNewReconciler: !1,
    };
  function xt(e, t) {
    if (e && e.defaultProps) {
      ((t = O({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function vi(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : O({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Pl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? un(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        l = en(e),
        o = zt(r, l);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = Xt(e, o, l)),
        t !== null && (_t(t, e, l, r), wl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        l = en(e),
        o = zt(r, l);
      ((o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Xt(e, o, l)),
        t !== null && (_t(t, e, l, r), wl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ye(),
        r = en(e),
        l = zt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Xt(e, l, r)),
        t !== null && (_t(t, e, r, n), wl(t, e, r)));
    },
  };
  function ea(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !dr(n, r) || !dr(l, o)
          : !0
    );
  }
  function ta(e, t, n) {
    var r = !1,
      l = qt,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = ct(o))
        : ((l = Ze(t) ? an : $e.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? In(e, l) : qt)),
      (t = new t(n, o)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Pl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function na(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Pl.enqueueReplaceState(t, t.state, null));
  }
  function yi(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), ri(e));
    var o = t.contextType;
    (typeof o == 'object' && o !== null
      ? (l.context = ct(o))
      : ((o = Ze(t) ? an : $e.current), (l.context = In(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == 'function' && (vi(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((t = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount(),
        t !== l.state && Pl.enqueueReplaceState(l, l.state, null),
        _l(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function $n(e, t) {
    try {
      var n = '',
        r = t;
      do ((n += re(r)), (r = r.return));
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
  function gi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function xi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Ff = typeof WeakMap == 'function' ? WeakMap : Map;
  function ra(e, t, n) {
    ((n = zt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Fl || ((Fl = !0), (zi = r)), xi(e, t));
      }),
      n
    );
  }
  function la(e, t, n) {
    ((n = zt(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          xi(e, t);
        }));
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == 'function' &&
        (n.callback = function () {
          (xi(e, t),
            typeof r != 'function' && (Zt === null ? (Zt = new Set([this])) : Zt.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' });
        }),
      n
    );
  }
  function oa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Ff();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Xf.bind(null, e, t, n)), t.then(e, e));
  }
  function ia(e) {
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
  function ua(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = zt(-1, 1)), (t.tag = 2), Xt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Df = X.ReactCurrentOwner,
    be = !1;
  function Ke(e, t, n, r) {
    t.child = e === null ? js(t, null, n, r) : Bn(t, e.child, n, r);
  }
  function sa(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Hn(t, l),
      (r = ci(e, t, n, r, o, l)),
      (n = fi()),
      e !== null && !be
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), It(e, t, l))
        : (Ce && n && qo(t), (t.flags |= 1), Ke(e, t, r, l), t.child)
    );
  }
  function aa(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' &&
        !Hi(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), ca(e, t, o, r, l))
        : ((e = Wl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var i = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : dr), n(i, r) && e.ref === t.ref))
        return It(e, t, l);
    }
    return ((t.flags |= 1), (e = nn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function ca(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (dr(o, r) && e.ref === t.ref)
        if (((be = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (be = !0);
        else return ((t.lanes = e.lanes), It(e, t, l));
    }
    return Si(e, t, n, r, l);
  }
  function fa(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          we(Qn, it),
          (it |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            we(Qn, it),
            (it |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = o !== null ? o.baseLanes : n),
          we(Qn, it),
          (it |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        we(Qn, it),
        (it |= r));
    return (Ke(e, t, l, n), t.child);
  }
  function da(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Si(e, t, n, r, l) {
    var o = Ze(n) ? an : $e.current;
    return (
      (o = In(t, o)),
      Hn(t, l),
      (n = ci(e, t, n, r, o, l)),
      (r = fi()),
      e !== null && !be
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), It(e, t, l))
        : (Ce && r && qo(t), (t.flags |= 1), Ke(e, t, n, l), t.child)
    );
  }
  function pa(e, t, n, r, l) {
    if (Ze(n)) {
      var o = !0;
      pl(t);
    } else o = !1;
    if ((Hn(t, l), t.stateNode === null)) (Ol(e, t), ta(t, n, r), yi(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        u = t.memoizedProps;
      i.props = u;
      var a = i.context,
        h = n.contextType;
      typeof h == 'object' && h !== null
        ? (h = ct(h))
        : ((h = Ze(n) ? an : $e.current), (h = In(t, h)));
      var w = n.getDerivedStateFromProps,
        k = typeof w == 'function' || typeof i.getSnapshotBeforeUpdate == 'function';
      (k ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== r || a !== h) && na(t, i, r, h)),
        (Yt = !1));
      var S = t.memoizedState;
      ((i.state = S),
        _l(t, r, i, l),
        (a = t.memoizedState),
        u !== r || S !== a || Je.current || Yt
          ? (typeof w == 'function' && (vi(t, n, w, r), (a = t.memoizedState)),
            (u = Yt || ea(t, n, u, r, S, a, h))
              ? (k ||
                  (typeof i.UNSAFE_componentWillMount != 'function' &&
                    typeof i.componentWillMount != 'function') ||
                  (typeof i.componentWillMount == 'function' && i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == 'function' &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = a)),
            (i.props = r),
            (i.state = a),
            (i.context = h),
            (r = u))
          : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1)));
    } else {
      ((i = t.stateNode),
        Ps(e, t),
        (u = t.memoizedProps),
        (h = t.type === t.elementType ? u : xt(t.type, u)),
        (i.props = h),
        (k = t.pendingProps),
        (S = i.context),
        (a = n.contextType),
        typeof a == 'object' && a !== null
          ? (a = ct(a))
          : ((a = Ze(n) ? an : $e.current), (a = In(t, a))));
      var M = n.getDerivedStateFromProps;
      ((w = typeof M == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== k || S !== a) && na(t, i, r, a)),
        (Yt = !1),
        (S = t.memoizedState),
        (i.state = S),
        _l(t, r, i, l));
      var I = t.memoizedState;
      u !== k || S !== I || Je.current || Yt
        ? (typeof M == 'function' && (vi(t, n, M, r), (I = t.memoizedState)),
          (h = Yt || ea(t, n, h, r, S, I, a) || !1)
            ? (w ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                  typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(r, I, a),
                typeof i.UNSAFE_componentWillUpdate == 'function' &&
                  i.UNSAFE_componentWillUpdate(r, I, a)),
              typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (u === e.memoizedProps && S === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (u === e.memoizedProps && S === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = I)),
          (i.props = r),
          (i.state = I),
          (i.context = a),
          (r = h))
        : (typeof i.componentDidUpdate != 'function' ||
            (u === e.memoizedProps && S === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != 'function' ||
            (u === e.memoizedProps && S === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return wi(e, t, n, r, o, l);
  }
  function wi(e, t, n, r, l, o) {
    da(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && gs(t, n, !1), It(e, t, o));
    ((r = t.stateNode), (Df.current = t));
    var u = i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Bn(t, e.child, null, o)), (t.child = Bn(t, null, u, o)))
        : Ke(e, t, u, o),
      (t.memoizedState = r.state),
      l && gs(t, n, !0),
      t.child
    );
  }
  function ma(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? vs(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && vs(e, t.context, !1),
      li(e, t.containerInfo));
  }
  function ha(e, t, n, r, l) {
    return (An(), Jo(l), (t.flags |= 256), Ke(e, t, n, r), t.child);
  }
  var _i = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ki(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function va(e, t, n) {
    var r = t.pendingProps,
      l = Ne.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      we(Ne, l & 1),
      e === null)
    )
      return (
        Xo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((i = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (i = { mode: 'hidden', children: i }),
                (r & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = i))
                  : (o = $l(i, r, 0, null)),
                (e = xn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = ki(n)),
                (t.memoizedState = _i),
                e)
              : Ci(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return Af(e, t, i, r, u, l, n);
    if (o) {
      ((o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling));
      var a = { mode: 'hidden', children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
          : ((r = nn(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (o = nn(u, o)) : ((o = xn(o, i, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? ki(n)
            : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
        (o.memoizedState = i),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = _i),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = nn(o, { mode: 'visible', children: r.children })),
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
  function Ci(e, t) {
    return (
      (t = $l({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Tl(e, t, n, r) {
    return (
      r !== null && Jo(r),
      Bn(t, e.child, null, n),
      (e = Ci(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Af(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = gi(Error(f(422)))), Tl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = $l({ mode: 'visible', children: r.children }, l, 0, null)),
            (o = xn(o, l, i, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && Bn(t, e.child, null, i),
            (t.child.memoizedState = ki(i)),
            (t.memoizedState = _i),
            o);
    if ((t.mode & 1) === 0) return Tl(e, t, i, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return ((r = u), (o = Error(f(419))), (r = gi(o, r, void 0)), Tl(e, t, i, r));
    }
    if (((u = (i & e.childLanes) !== 0), be || u)) {
      if (((r = Ae), r !== null)) {
        switch (i & -i) {
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
        ((l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l),
          l !== 0 && l !== o.retryLane && ((o.retryLane = l), Rt(e, l), _t(r, e, l, -1)));
      }
      return (Ui(), (r = gi(Error(f(421)))), Tl(e, t, i, r));
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Jf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = o.treeContext),
        (ot = Qt(l.nextSibling)),
        (lt = t),
        (Ce = !0),
        (gt = null),
        e !== null &&
          ((st[at++] = Ot),
          (st[at++] = Mt),
          (st[at++] = cn),
          (Ot = e.id),
          (Mt = e.overflow),
          (cn = t)),
        (t = Ci(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function ya(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), ti(e.return, t, n));
  }
  function Ei(e, t, n, r, l) {
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
  function ga(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Ke(e, t, r.children, n), (r = Ne.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && ya(e, n, t);
          else if (e.tag === 19) ya(e, n, t);
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
    if ((we(Ne, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate), e !== null && kl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            Ei(t, !1, l, n, o));
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && kl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          Ei(t, !0, n, null, o);
          break;
        case 'together':
          Ei(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ol(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function It(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (hn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(f(153));
    if (t.child !== null) {
      for (e = t.child, n = nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = nn(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Bf(e, t, n) {
    switch (t.tag) {
      case 3:
        (ma(t), An());
        break;
      case 5:
        Ms(t);
        break;
      case 1:
        Ze(t.type) && pl(t);
        break;
      case 4:
        li(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (we(xl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (we(Ne, Ne.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? va(e, t, n)
              : (we(Ne, Ne.current & 1), (e = It(e, t, n)), e !== null ? e.sibling : null);
        we(Ne, Ne.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return ga(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          we(Ne, Ne.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), fa(e, t, n));
    }
    return It(e, t, n);
  }
  var xa, Ni, Sa, wa;
  ((xa = function (e, t) {
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
    (Ni = function () {}),
    (Sa = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), pn(Nt.current));
        var o = null;
        switch (n) {
          case 'input':
            ((l = ht(e, l)), (r = ht(e, r)), (o = []));
            break;
          case 'select':
            ((l = O({}, l, { value: void 0 })), (r = O({}, r, { value: void 0 })), (o = []));
            break;
          case 'textarea':
            ((l = ro(e, l)), (r = ro(e, r)), (o = []));
            break;
          default:
            typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = cl);
        }
        oo(n, r);
        var i;
        n = null;
        for (h in l)
          if (!r.hasOwnProperty(h) && l.hasOwnProperty(h) && l[h] != null)
            if (h === 'style') {
              var u = l[h];
              for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
            } else
              h !== 'dangerouslySetInnerHTML' &&
                h !== 'children' &&
                h !== 'suppressContentEditableWarning' &&
                h !== 'suppressHydrationWarning' &&
                h !== 'autoFocus' &&
                (v.hasOwnProperty(h) ? o || (o = []) : (o = o || []).push(h, null));
        for (h in r) {
          var a = r[h];
          if (
            ((u = l != null ? l[h] : void 0),
            r.hasOwnProperty(h) && a !== u && (a != null || u != null))
          )
            if (h === 'style')
              if (u) {
                for (i in u)
                  !u.hasOwnProperty(i) ||
                    (a && a.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ''));
                for (i in a) a.hasOwnProperty(i) && u[i] !== a[i] && (n || (n = {}), (n[i] = a[i]));
              } else (n || (o || (o = []), o.push(h, n)), (n = a));
            else
              h === 'dangerouslySetInnerHTML'
                ? ((a = a ? a.__html : void 0),
                  (u = u ? u.__html : void 0),
                  a != null && u !== a && (o = o || []).push(h, a))
                : h === 'children'
                  ? (typeof a != 'string' && typeof a != 'number') || (o = o || []).push(h, '' + a)
                  : h !== 'suppressContentEditableWarning' &&
                    h !== 'suppressHydrationWarning' &&
                    (v.hasOwnProperty(h)
                      ? (a != null && h === 'onScroll' && _e('scroll', e), o || u === a || (o = []))
                      : (o = o || []).push(h, a));
        }
        n && (o = o || []).push('style', n);
        var h = o;
        (t.updateQueue = h) && (t.flags |= 4);
      }
    }),
    (wa = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function jr(e, t) {
    if (!Ce)
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
  function Qe(e) {
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
  function Uf(e, t, n) {
    var r = t.pendingProps;
    switch ((Ko(t), t.tag)) {
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
        return (Qe(t), null);
      case 1:
        return (Ze(t.type) && dl(), Qe(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Wn(),
          ke(Je),
          ke($e),
          ui(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (yl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), gt !== null && (Di(gt), (gt = null)))),
          Ni(e, t),
          Qe(t),
          null
        );
      case 5:
        oi(t);
        var l = pn(_r.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Sa(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(f(166));
            return (Qe(t), null);
          }
          if (((e = pn(Nt.current)), yl(t))) {
            ((r = t.stateNode), (n = t.type));
            var o = t.memoizedProps;
            switch (((r[Et] = t), (r[yr] = o), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                (_e('cancel', r), _e('close', r));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                _e('load', r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < mr.length; l++) _e(mr[l], r);
                break;
              case 'source':
                _e('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                (_e('error', r), _e('load', r));
                break;
              case 'details':
                _e('toggle', r);
                break;
              case 'input':
                (tu(r, o), _e('invalid', r));
                break;
              case 'select':
                ((r._wrapperState = { wasMultiple: !!o.multiple }), _e('invalid', r));
                break;
              case 'textarea':
                (lu(r, o), _e('invalid', r));
            }
            (oo(n, o), (l = null));
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var u = o[i];
                i === 'children'
                  ? typeof u == 'string'
                    ? r.textContent !== u &&
                      (o.suppressHydrationWarning !== !0 && al(r.textContent, u, e),
                      (l = ['children', u]))
                    : typeof u == 'number' &&
                      r.textContent !== '' + u &&
                      (o.suppressHydrationWarning !== !0 && al(r.textContent, u, e),
                      (l = ['children', '' + u]))
                  : v.hasOwnProperty(i) && u != null && i === 'onScroll' && _e('scroll', r);
              }
            switch (n) {
              case 'input':
                (wn(r), ru(r, o, !0));
                break;
              case 'textarea':
                (wn(r), iu(r));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof o.onClick == 'function' && (r.onclick = cl);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = uu(n)),
              e === 'http://www.w3.org/1999/xhtml'
                ? n === 'script'
                  ? ((e = i.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                    ? (e = i.createElement(n, { is: r.is }))
                    : ((e = i.createElement(n)),
                      n === 'select' &&
                        ((i = e), r.multiple ? (i.multiple = !0) : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, n)),
              (e[Et] = t),
              (e[yr] = r),
              xa(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = io(n, r)), n)) {
                case 'dialog':
                  (_e('cancel', e), _e('close', e), (l = r));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (_e('load', e), (l = r));
                  break;
                case 'video':
                case 'audio':
                  for (l = 0; l < mr.length; l++) _e(mr[l], e);
                  l = r;
                  break;
                case 'source':
                  (_e('error', e), (l = r));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (_e('error', e), _e('load', e), (l = r));
                  break;
                case 'details':
                  (_e('toggle', e), (l = r));
                  break;
                case 'input':
                  (tu(e, r), (l = ht(e, r)), _e('invalid', e));
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = O({}, r, { value: void 0 })),
                    _e('invalid', e));
                  break;
                case 'textarea':
                  (lu(e, r), (l = ro(e, r)), _e('invalid', e));
                  break;
                default:
                  l = r;
              }
              (oo(n, l), (u = l));
              for (o in u)
                if (u.hasOwnProperty(o)) {
                  var a = u[o];
                  o === 'style'
                    ? cu(e, a)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((a = a ? a.__html : void 0), a != null && su(e, a))
                      : o === 'children'
                        ? typeof a == 'string'
                          ? (n !== 'textarea' || a !== '') && Yn(e, a)
                          : typeof a == 'number' && Yn(e, '' + a)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (v.hasOwnProperty(o)
                            ? a != null && o === 'onScroll' && _e('scroll', e)
                            : a != null && ue(e, o, a, i));
                }
              switch (n) {
                case 'input':
                  (wn(e), ru(e, r, !1));
                  break;
                case 'textarea':
                  (wn(e), iu(e));
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + me(r.value));
                  break;
                case 'select':
                  ((e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? kn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null && kn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = cl);
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
        return (Qe(t), null);
      case 6:
        if (e && t.stateNode != null) wa(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(f(166));
          if (((n = pn(_r.current)), pn(Nt.current), yl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Et] = t),
              (o = r.nodeValue !== n) && ((e = lt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  al(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    al(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Et] = t),
              (t.stateNode = r));
        }
        return (Qe(t), null);
      case 13:
        if (
          (ke(Ne),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ce && ot !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Cs(), An(), (t.flags |= 98560), (o = !1));
          else if (((o = yl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(f(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(f(317));
              o[Et] = t;
            } else (An(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Qe(t), (o = !1));
          } else (gt !== null && (Di(gt), (gt = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Ne.current & 1) !== 0 ? ze === 0 && (ze = 3) : Ui())),
            t.updateQueue !== null && (t.flags |= 4),
            Qe(t),
            null);
      case 4:
        return (Wn(), Ni(e, t), e === null && hr(t.stateNode.containerInfo), Qe(t), null);
      case 10:
        return (ei(t.type._context), Qe(t), null);
      case 17:
        return (Ze(t.type) && dl(), Qe(t), null);
      case 19:
        if ((ke(Ne), (o = t.memoizedState), o === null)) return (Qe(t), null);
        if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) jr(o, !1);
          else {
            if (ze !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = kl(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      jr(o, !1),
                      r = i.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (i = o.alternate),
                      i === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = i.childLanes),
                          (o.lanes = i.lanes),
                          (o.child = i.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = i.memoizedProps),
                          (o.memoizedState = i.memoizedState),
                          (o.updateQueue = i.updateQueue),
                          (o.type = i.type),
                          (e = i.dependencies),
                          (o.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (n = n.sibling));
                  return (we(Ne, (Ne.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Pe() > Gn &&
              ((t.flags |= 128), (r = !0), jr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = kl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                jr(o, !0),
                o.tail === null && o.tailMode === 'hidden' && !i.alternate && !Ce)
              )
                return (Qe(t), null);
            } else
              2 * Pe() - o.renderingStartTime > Gn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), jr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = o.last), n !== null ? (n.sibling = i) : (t.child = i), (o.last = i));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Pe()),
            (t.sibling = null),
            (n = Ne.current),
            we(Ne, r ? (n & 1) | 2 : n & 1),
            t)
          : (Qe(t), null);
      case 22:
      case 23:
        return (
          Bi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (it & 1073741824) !== 0 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Qe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function Hf(e, t) {
    switch ((Ko(t), t.tag)) {
      case 1:
        return (
          Ze(t.type) && dl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Wn(),
          ke(Je),
          ke($e),
          ui(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (oi(t), null);
      case 13:
        if ((ke(Ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(f(340));
          An();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (ke(Ne), null);
      case 4:
        return (Wn(), null);
      case 10:
        return (ei(t.type._context), null);
      case 22:
      case 23:
        return (Bi(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ml = !1,
    Ge = !1,
    Wf = typeof WeakSet == 'function' ? WeakSet : Set,
    R = null;
  function Vn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          Le(e, t, r);
        }
      else n.current = null;
  }
  function ji(e, t, n) {
    try {
      n();
    } catch (r) {
      Le(e, t, r);
    }
  }
  var _a = !1;
  function $f(e, t) {
    if (((Bo = Zr), (e = es()), Oo(e))) {
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
            var i = 0,
              u = -1,
              a = -1,
              h = 0,
              w = 0,
              k = e,
              S = null;
            t: for (;;) {
              for (
                var M;
                k !== n || (l !== 0 && k.nodeType !== 3) || (u = i + l),
                  k !== o || (r !== 0 && k.nodeType !== 3) || (a = i + r),
                  k.nodeType === 3 && (i += k.nodeValue.length),
                  (M = k.firstChild) !== null;
              )
                ((S = k), (k = M));
              for (;;) {
                if (k === e) break t;
                if (
                  (S === n && ++h === l && (u = i),
                  S === o && ++w === r && (a = i),
                  (M = k.nextSibling) !== null)
                )
                  break;
                ((k = S), (S = k.parentNode));
              }
              k = M;
            }
            n = u === -1 || a === -1 ? null : { start: u, end: a };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Uo = { focusedElem: e, selectionRange: n }, Zr = !1, R = t; R !== null; )
      if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (R = e));
      else
        for (; R !== null; ) {
          t = R;
          try {
            var I = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (I !== null) {
                    var F = I.memoizedProps,
                      Te = I.memoizedState,
                      p = t.stateNode,
                      c = p.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? F : xt(t.type, F),
                        Te
                      );
                    p.__reactInternalSnapshotBeforeUpdate = c;
                  }
                  break;
                case 3:
                  var m = t.stateNode.containerInfo;
                  m.nodeType === 1
                    ? (m.textContent = '')
                    : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(f(163));
              }
          } catch (C) {
            Le(t, t.return, C);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (R = e));
            break;
          }
          R = t.return;
        }
    return ((I = _a), (_a = !1), I);
  }
  function Lr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          ((l.destroy = void 0), o !== void 0 && ji(t, n, o));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Rl(e, t) {
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
  function Li(e) {
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
  function ka(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), ka(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Et], delete t[yr], delete t[Vo], delete t[Ef], delete t[Nf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Ca(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ea(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ca(e.return)) return null;
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
  function Pi(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = cl)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Pi(e, t, n), e = e.sibling; e !== null; ) (Pi(e, t, n), (e = e.sibling));
  }
  function Ti(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ti(e, t, n), e = e.sibling; e !== null; ) (Ti(e, t, n), (e = e.sibling));
  }
  var He = null,
    St = !1;
  function Jt(e, t, n) {
    for (n = n.child; n !== null; ) (Na(e, t, n), (n = n.sibling));
  }
  function Na(e, t, n) {
    if (Ct && typeof Ct.onCommitFiberUnmount == 'function')
      try {
        Ct.onCommitFiberUnmount(Gr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ge || Vn(n, t);
      case 6:
        var r = He,
          l = St;
        ((He = null),
          Jt(e, t, n),
          (He = r),
          (St = l),
          He !== null &&
            (St
              ? ((e = He),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : He.removeChild(n.stateNode)));
        break;
      case 18:
        He !== null &&
          (St
            ? ((e = He),
              (n = n.stateNode),
              e.nodeType === 8 ? $o(e.parentNode, n) : e.nodeType === 1 && $o(e, n),
              ir(e))
            : $o(He, n.stateNode));
        break;
      case 4:
        ((r = He),
          (l = St),
          (He = n.stateNode.containerInfo),
          (St = !0),
          Jt(e, t, n),
          (He = r),
          (St = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ge && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var o = l,
              i = o.destroy;
            ((o = o.tag),
              i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && ji(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        Jt(e, t, n);
        break;
      case 1:
        if (!Ge && (Vn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (u) {
            Le(n, t, u);
          }
        Jt(e, t, n);
        break;
      case 21:
        Jt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ge = (r = Ge) || n.memoizedState !== null), Jt(e, t, n), (Ge = r))
          : Jt(e, t, n);
        break;
      default:
        Jt(e, t, n);
    }
  }
  function ja(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Wf()),
        t.forEach(function (r) {
          var l = Zf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function wt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            i = t,
            u = i;
          e: for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                ((He = u.stateNode), (St = !1));
                break e;
              case 3:
                ((He = u.stateNode.containerInfo), (St = !0));
                break e;
              case 4:
                ((He = u.stateNode.containerInfo), (St = !0));
                break e;
            }
            u = u.return;
          }
          if (He === null) throw Error(f(160));
          (Na(o, i, l), (He = null), (St = !1));
          var a = l.alternate;
          (a !== null && (a.return = null), (l.return = null));
        } catch (h) {
          Le(l, t, h);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (La(t, e), (t = t.sibling));
  }
  function La(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((wt(t, e), Lt(e), r & 4)) {
          try {
            (Lr(3, e, e.return), Rl(3, e));
          } catch (F) {
            Le(e, e.return, F);
          }
          try {
            Lr(5, e, e.return);
          } catch (F) {
            Le(e, e.return, F);
          }
        }
        break;
      case 1:
        (wt(t, e), Lt(e), r & 512 && n !== null && Vn(n, n.return));
        break;
      case 5:
        if ((wt(t, e), Lt(e), r & 512 && n !== null && Vn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Yn(l, '');
          } catch (F) {
            Le(e, e.return, F);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = n !== null ? n.memoizedProps : o,
            u = e.type,
            a = e.updateQueue;
          if (((e.updateQueue = null), a !== null))
            try {
              (u === 'input' && o.type === 'radio' && o.name != null && nu(l, o), io(u, i));
              var h = io(u, o);
              for (i = 0; i < a.length; i += 2) {
                var w = a[i],
                  k = a[i + 1];
                w === 'style'
                  ? cu(l, k)
                  : w === 'dangerouslySetInnerHTML'
                    ? su(l, k)
                    : w === 'children'
                      ? Yn(l, k)
                      : ue(l, w, k, h);
              }
              switch (u) {
                case 'input':
                  to(l, o);
                  break;
                case 'textarea':
                  ou(l, o);
                  break;
                case 'select':
                  var S = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var M = o.value;
                  M != null
                    ? kn(l, !!o.multiple, M, !1)
                    : S !== !!o.multiple &&
                      (o.defaultValue != null
                        ? kn(l, !!o.multiple, o.defaultValue, !0)
                        : kn(l, !!o.multiple, o.multiple ? [] : '', !1));
              }
              l[yr] = o;
            } catch (F) {
              Le(e, e.return, F);
            }
        }
        break;
      case 6:
        if ((wt(t, e), Lt(e), r & 4)) {
          if (e.stateNode === null) throw Error(f(162));
          ((l = e.stateNode), (o = e.memoizedProps));
          try {
            l.nodeValue = o;
          } catch (F) {
            Le(e, e.return, F);
          }
        }
        break;
      case 3:
        if ((wt(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            ir(t.containerInfo);
          } catch (F) {
            Le(e, e.return, F);
          }
        break;
      case 4:
        (wt(t, e), Lt(e));
        break;
      case 13:
        (wt(t, e),
          Lt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (Ri = Pe())),
          r & 4 && ja(e));
        break;
      case 22:
        if (
          ((w = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ge = (h = Ge) || w), wt(t, e), (Ge = h)) : wt(t, e),
          Lt(e),
          r & 8192)
        ) {
          if (
            ((h = e.memoizedState !== null), (e.stateNode.isHidden = h) && !w && (e.mode & 1) !== 0)
          )
            for (R = e, w = e.child; w !== null; ) {
              for (k = R = w; R !== null; ) {
                switch (((S = R), (M = S.child), S.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Lr(4, S, S.return);
                    break;
                  case 1:
                    Vn(S, S.return);
                    var I = S.stateNode;
                    if (typeof I.componentWillUnmount == 'function') {
                      ((r = S), (n = S.return));
                      try {
                        ((t = r),
                          (I.props = t.memoizedProps),
                          (I.state = t.memoizedState),
                          I.componentWillUnmount());
                      } catch (F) {
                        Le(r, n, F);
                      }
                    }
                    break;
                  case 5:
                    Vn(S, S.return);
                    break;
                  case 22:
                    if (S.memoizedState !== null) {
                      Oa(k);
                      continue;
                    }
                }
                M !== null ? ((M.return = S), (R = M)) : Oa(k);
              }
              w = w.sibling;
            }
          e: for (w = null, k = e; ; ) {
            if (k.tag === 5) {
              if (w === null) {
                w = k;
                try {
                  ((l = k.stateNode),
                    h
                      ? ((o = l.style),
                        typeof o.setProperty == 'function'
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none'))
                      : ((u = k.stateNode),
                        (a = k.memoizedProps.style),
                        (i = a != null && a.hasOwnProperty('display') ? a.display : null),
                        (u.style.display = au('display', i))));
                } catch (F) {
                  Le(e, e.return, F);
                }
              }
            } else if (k.tag === 6) {
              if (w === null)
                try {
                  k.stateNode.nodeValue = h ? '' : k.memoizedProps;
                } catch (F) {
                  Le(e, e.return, F);
                }
            } else if (
              ((k.tag !== 22 && k.tag !== 23) || k.memoizedState === null || k === e) &&
              k.child !== null
            ) {
              ((k.child.return = k), (k = k.child));
              continue;
            }
            if (k === e) break e;
            for (; k.sibling === null; ) {
              if (k.return === null || k.return === e) break e;
              (w === k && (w = null), (k = k.return));
            }
            (w === k && (w = null), (k.sibling.return = k.return), (k = k.sibling));
          }
        }
        break;
      case 19:
        (wt(t, e), Lt(e), r & 4 && ja(e));
        break;
      case 21:
        break;
      default:
        (wt(t, e), Lt(e));
    }
  }
  function Lt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ca(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(f(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Yn(l, ''), (r.flags &= -33));
            var o = Ea(e);
            Ti(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              u = Ea(e);
            Pi(e, u, i);
            break;
          default:
            throw Error(f(161));
        }
      } catch (a) {
        Le(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Vf(e, t, n) {
    ((R = e), Pa(e));
  }
  function Pa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; R !== null; ) {
      var l = R,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || Ml;
        if (!i) {
          var u = l.alternate,
            a = (u !== null && u.memoizedState !== null) || Ge;
          u = Ml;
          var h = Ge;
          if (((Ml = i), (Ge = a) && !h))
            for (R = l; R !== null; )
              ((i = R),
                (a = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? Ma(l)
                  : a !== null
                    ? ((a.return = i), (R = a))
                    : Ma(l));
          for (; o !== null; ) ((R = o), Pa(o), (o = o.sibling));
          ((R = l), (Ml = u), (Ge = h));
        }
        Ta(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), (R = o)) : Ta(e);
    }
  }
  function Ta(e) {
    for (; R !== null; ) {
      var t = R;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ge || Rl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ge)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : xt(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && Os(t, o, r);
                break;
              case 3:
                var i = t.updateQueue;
                if (i !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Os(t, i, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
                  var a = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      a.autoFocus && n.focus();
                      break;
                    case 'img':
                      a.src && (n.src = a.src);
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
                  var h = t.alternate;
                  if (h !== null) {
                    var w = h.memoizedState;
                    if (w !== null) {
                      var k = w.dehydrated;
                      k !== null && ir(k);
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
                throw Error(f(163));
            }
          Ge || (t.flags & 512 && Li(t));
        } catch (S) {
          Le(t, t.return, S);
        }
      }
      if (t === e) {
        R = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (R = n));
        break;
      }
      R = t.return;
    }
  }
  function Oa(e) {
    for (; R !== null; ) {
      var t = R;
      if (t === e) {
        R = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (R = n));
        break;
      }
      R = t.return;
    }
  }
  function Ma(e) {
    for (; R !== null; ) {
      var t = R;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Rl(4, t);
            } catch (a) {
              Le(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                Le(t, l, a);
              }
            }
            var o = t.return;
            try {
              Li(t);
            } catch (a) {
              Le(t, o, a);
            }
            break;
          case 5:
            var i = t.return;
            try {
              Li(t);
            } catch (a) {
              Le(t, i, a);
            }
        }
      } catch (a) {
        Le(t, t.return, a);
      }
      if (t === e) {
        R = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        ((u.return = t.return), (R = u));
        break;
      }
      R = t.return;
    }
  }
  var Qf = Math.ceil,
    zl = X.ReactCurrentDispatcher,
    Oi = X.ReactCurrentOwner,
    dt = X.ReactCurrentBatchConfig,
    ie = 0,
    Ae = null,
    Me = null,
    We = 0,
    it = 0,
    Qn = Gt(0),
    ze = 0,
    Pr = null,
    hn = 0,
    Il = 0,
    Mi = 0,
    Tr = null,
    et = null,
    Ri = 0,
    Gn = 1 / 0,
    Ft = null,
    Fl = !1,
    zi = null,
    Zt = null,
    Dl = !1,
    bt = null,
    Al = 0,
    Or = 0,
    Ii = null,
    Bl = -1,
    Ul = 0;
  function Ye() {
    return (ie & 6) !== 0 ? Pe() : Bl !== -1 ? Bl : (Bl = Pe());
  }
  function en(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ie & 2) !== 0 && We !== 0
        ? We & -We
        : Lf.transition !== null
          ? (Ul === 0 && (Ul = Eu()), Ul)
          : ((e = ve), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : zu(e.type))), e);
  }
  function _t(e, t, n, r) {
    if (50 < Or) throw ((Or = 0), (Ii = null), Error(f(185)));
    (tr(e, n, r),
      ((ie & 2) === 0 || e !== Ae) &&
        (e === Ae && ((ie & 2) === 0 && (Il |= n), ze === 4 && tn(e, We)),
        tt(e, r),
        n === 1 && ie === 0 && (t.mode & 1) === 0 && ((Gn = Pe() + 500), ml && Kt())));
  }
  function tt(e, t) {
    var n = e.callbackNode;
    jc(e, t);
    var r = Yr(e, e === Ae ? We : 0);
    if (r === 0) (n !== null && _u(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && _u(n), t === 1))
        (e.tag === 0 ? jf(za.bind(null, e)) : xs(za.bind(null, e)),
          kf(function () {
            (ie & 6) === 0 && Kt();
          }),
          (n = null));
      else {
        switch (Nu(r)) {
          case 1:
            n = mo;
            break;
          case 4:
            n = ku;
            break;
          case 16:
            n = Qr;
            break;
          case 536870912:
            n = Cu;
            break;
          default:
            n = Qr;
        }
        n = Wa(n, Ra.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Ra(e, t) {
    if (((Bl = -1), (Ul = 0), (ie & 6) !== 0)) throw Error(f(327));
    var n = e.callbackNode;
    if (qn() && e.callbackNode !== n) return null;
    var r = Yr(e, e === Ae ? We : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Hl(e, r);
    else {
      t = r;
      var l = ie;
      ie |= 2;
      var o = Fa();
      (Ae !== e || We !== t) && ((Ft = null), (Gn = Pe() + 500), yn(e, t));
      do
        try {
          Kf();
          break;
        } catch (u) {
          Ia(e, u);
        }
      while (!0);
      (bo(), (zl.current = o), (ie = l), Me !== null ? (t = 0) : ((Ae = null), (We = 0), (t = ze)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = ho(e)), l !== 0 && ((r = l), (t = Fi(e, l)))), t === 1))
        throw ((n = Pr), yn(e, 0), tn(e, r), tt(e, Pe()), n);
      if (t === 6) tn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Gf(l) &&
            ((t = Hl(e, r)),
            t === 2 && ((o = ho(e)), o !== 0 && ((r = o), (t = Fi(e, o)))),
            t === 1))
        )
          throw ((n = Pr), yn(e, 0), tn(e, r), tt(e, Pe()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(f(345));
          case 2:
            gn(e, et, Ft);
            break;
          case 3:
            if ((tn(e, r), (r & 130023424) === r && ((t = Ri + 500 - Pe()), 10 < t))) {
              if (Yr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Ye(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = Wo(gn.bind(null, e, et, Ft), t);
              break;
            }
            gn(e, et, Ft);
            break;
          case 4:
            if ((tn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - vt(r);
              ((o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o));
            }
            if (
              ((r = l),
              (r = Pe() - r),
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
                            : 1960 * Qf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Wo(gn.bind(null, e, et, Ft), r);
              break;
            }
            gn(e, et, Ft);
            break;
          case 5:
            gn(e, et, Ft);
            break;
          default:
            throw Error(f(329));
        }
      }
    }
    return (tt(e, Pe()), e.callbackNode === n ? Ra.bind(null, e) : null);
  }
  function Fi(e, t) {
    var n = Tr;
    return (
      e.current.memoizedState.isDehydrated && (yn(e, t).flags |= 256),
      (e = Hl(e, t)),
      e !== 2 && ((t = et), (et = n), t !== null && Di(t)),
      e
    );
  }
  function Di(e) {
    et === null ? (et = e) : et.push.apply(et, e);
  }
  function Gf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!yt(o(), l)) return !1;
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
  function tn(e, t) {
    for (
      t &= ~Mi, t &= ~Il, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - vt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function za(e) {
    if ((ie & 6) !== 0) throw Error(f(327));
    qn();
    var t = Yr(e, 0);
    if ((t & 1) === 0) return (tt(e, Pe()), null);
    var n = Hl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ho(e);
      r !== 0 && ((t = r), (n = Fi(e, r)));
    }
    if (n === 1) throw ((n = Pr), yn(e, 0), tn(e, t), tt(e, Pe()), n);
    if (n === 6) throw Error(f(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      gn(e, et, Ft),
      tt(e, Pe()),
      null
    );
  }
  function Ai(e, t) {
    var n = ie;
    ie |= 1;
    try {
      return e(t);
    } finally {
      ((ie = n), ie === 0 && ((Gn = Pe() + 500), ml && Kt()));
    }
  }
  function vn(e) {
    bt !== null && bt.tag === 0 && (ie & 6) === 0 && qn();
    var t = ie;
    ie |= 1;
    var n = dt.transition,
      r = ve;
    try {
      if (((dt.transition = null), (ve = 1), e)) return e();
    } finally {
      ((ve = r), (dt.transition = n), (ie = t), (ie & 6) === 0 && Kt());
    }
  }
  function Bi() {
    ((it = Qn.current), ke(Qn));
  }
  function yn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), _f(n)), Me !== null))
      for (n = Me.return; n !== null; ) {
        var r = n;
        switch ((Ko(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && dl());
            break;
          case 3:
            (Wn(), ke(Je), ke($e), ui());
            break;
          case 5:
            oi(r);
            break;
          case 4:
            Wn();
            break;
          case 13:
            ke(Ne);
            break;
          case 19:
            ke(Ne);
            break;
          case 10:
            ei(r.type._context);
            break;
          case 22:
          case 23:
            Bi();
        }
        n = n.return;
      }
    if (
      ((Ae = e),
      (Me = e = nn(e.current, null)),
      (We = it = t),
      (ze = 0),
      (Pr = null),
      (Mi = Il = hn = 0),
      (et = Tr = null),
      dn !== null)
    ) {
      for (t = 0; t < dn.length; t++)
        if (((n = dn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var i = o.next;
            ((o.next = l), (r.next = i));
          }
          n.pending = r;
        }
      dn = null;
    }
    return e;
  }
  function Ia(e, t) {
    do {
      var n = Me;
      try {
        if ((bo(), (Cl.current = Ll), El)) {
          for (var r = je.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          El = !1;
        }
        if (
          ((mn = 0),
          (De = Re = je = null),
          (kr = !1),
          (Cr = 0),
          (Oi.current = null),
          n === null || n.return === null)
        ) {
          ((ze = 1), (Pr = t), (Me = null));
          break;
        }
        e: {
          var o = e,
            i = n.return,
            u = n,
            a = t;
          if (
            ((t = We),
            (u.flags |= 32768),
            a !== null && typeof a == 'object' && typeof a.then == 'function')
          ) {
            var h = a,
              w = u,
              k = w.tag;
            if ((w.mode & 1) === 0 && (k === 0 || k === 11 || k === 15)) {
              var S = w.alternate;
              S
                ? ((w.updateQueue = S.updateQueue),
                  (w.memoizedState = S.memoizedState),
                  (w.lanes = S.lanes))
                : ((w.updateQueue = null), (w.memoizedState = null));
            }
            var M = ia(i);
            if (M !== null) {
              ((M.flags &= -257), ua(M, i, u, o, t), M.mode & 1 && oa(o, h, t), (t = M), (a = h));
              var I = t.updateQueue;
              if (I === null) {
                var F = new Set();
                (F.add(a), (t.updateQueue = F));
              } else I.add(a);
              break e;
            } else {
              if ((t & 1) === 0) {
                (oa(o, h, t), Ui());
                break e;
              }
              a = Error(f(426));
            }
          } else if (Ce && u.mode & 1) {
            var Te = ia(i);
            if (Te !== null) {
              ((Te.flags & 65536) === 0 && (Te.flags |= 256), ua(Te, i, u, o, t), Jo($n(a, u)));
              break e;
            }
          }
          ((o = a = $n(a, u)),
            ze !== 4 && (ze = 2),
            Tr === null ? (Tr = [o]) : Tr.push(o),
            (o = i));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var p = ra(o, a, t);
                Ts(o, p);
                break e;
              case 1:
                u = a;
                var c = o.type,
                  m = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof c.getDerivedStateFromError == 'function' ||
                    (m !== null &&
                      typeof m.componentDidCatch == 'function' &&
                      (Zt === null || !Zt.has(m))))
                ) {
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var C = la(o, u, t);
                  Ts(o, C);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Aa(n);
      } catch (A) {
        ((t = A), Me === n && n !== null && (Me = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Fa() {
    var e = zl.current;
    return ((zl.current = Ll), e === null ? Ll : e);
  }
  function Ui() {
    ((ze === 0 || ze === 3 || ze === 2) && (ze = 4),
      Ae === null || ((hn & 268435455) === 0 && (Il & 268435455) === 0) || tn(Ae, We));
  }
  function Hl(e, t) {
    var n = ie;
    ie |= 2;
    var r = Fa();
    (Ae !== e || We !== t) && ((Ft = null), yn(e, t));
    do
      try {
        qf();
        break;
      } catch (l) {
        Ia(e, l);
      }
    while (!0);
    if ((bo(), (ie = n), (zl.current = r), Me !== null)) throw Error(f(261));
    return ((Ae = null), (We = 0), ze);
  }
  function qf() {
    for (; Me !== null; ) Da(Me);
  }
  function Kf() {
    for (; Me !== null && !gc(); ) Da(Me);
  }
  function Da(e) {
    var t = Ha(e.alternate, e, it);
    ((e.memoizedProps = e.pendingProps), t === null ? Aa(e) : (Me = t), (Oi.current = null));
  }
  function Aa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Uf(n, t, it)), n !== null)) {
          Me = n;
          return;
        }
      } else {
        if (((n = Hf(n, t)), n !== null)) {
          ((n.flags &= 32767), (Me = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((ze = 6), (Me = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Me = t;
        return;
      }
      Me = t = e;
    } while (t !== null);
    ze === 0 && (ze = 5);
  }
  function gn(e, t, n) {
    var r = ve,
      l = dt.transition;
    try {
      ((dt.transition = null), (ve = 1), Yf(e, t, n, r));
    } finally {
      ((dt.transition = l), (ve = r));
    }
    return null;
  }
  function Yf(e, t, n, r) {
    do qn();
    while (bt !== null);
    if ((ie & 6) !== 0) throw Error(f(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(f(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = n.lanes | n.childLanes;
    if (
      (Lc(e, o),
      e === Ae && ((Me = Ae = null), (We = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Dl ||
        ((Dl = !0),
        Wa(Qr, function () {
          return (qn(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = dt.transition), (dt.transition = null));
      var i = ve;
      ve = 1;
      var u = ie;
      ((ie |= 4),
        (Oi.current = null),
        $f(e, n),
        La(n, e),
        hf(Uo),
        (Zr = !!Bo),
        (Uo = Bo = null),
        (e.current = n),
        Vf(n),
        xc(),
        (ie = u),
        (ve = i),
        (dt.transition = o));
    } else e.current = n;
    if (
      (Dl && ((Dl = !1), (bt = e), (Al = l)),
      (o = e.pendingLanes),
      o === 0 && (Zt = null),
      _c(n.stateNode),
      tt(e, Pe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (Fl) throw ((Fl = !1), (e = zi), (zi = null), e);
    return (
      (Al & 1) !== 0 && e.tag !== 0 && qn(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === Ii ? Or++ : ((Or = 0), (Ii = e))) : (Or = 0),
      Kt(),
      null
    );
  }
  function qn() {
    if (bt !== null) {
      var e = Nu(Al),
        t = dt.transition,
        n = ve;
      try {
        if (((dt.transition = null), (ve = 16 > e ? 16 : e), bt === null)) var r = !1;
        else {
          if (((e = bt), (bt = null), (Al = 0), (ie & 6) !== 0)) throw Error(f(331));
          var l = ie;
          for (ie |= 4, R = e.current; R !== null; ) {
            var o = R,
              i = o.child;
            if ((R.flags & 16) !== 0) {
              var u = o.deletions;
              if (u !== null) {
                for (var a = 0; a < u.length; a++) {
                  var h = u[a];
                  for (R = h; R !== null; ) {
                    var w = R;
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Lr(8, w, o);
                    }
                    var k = w.child;
                    if (k !== null) ((k.return = w), (R = k));
                    else
                      for (; R !== null; ) {
                        w = R;
                        var S = w.sibling,
                          M = w.return;
                        if ((ka(w), w === h)) {
                          R = null;
                          break;
                        }
                        if (S !== null) {
                          ((S.return = M), (R = S));
                          break;
                        }
                        R = M;
                      }
                  }
                }
                var I = o.alternate;
                if (I !== null) {
                  var F = I.child;
                  if (F !== null) {
                    I.child = null;
                    do {
                      var Te = F.sibling;
                      ((F.sibling = null), (F = Te));
                    } while (F !== null);
                  }
                }
                R = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null) ((i.return = o), (R = i));
            else
              e: for (; R !== null; ) {
                if (((o = R), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lr(9, o, o.return);
                  }
                var p = o.sibling;
                if (p !== null) {
                  ((p.return = o.return), (R = p));
                  break e;
                }
                R = o.return;
              }
          }
          var c = e.current;
          for (R = c; R !== null; ) {
            i = R;
            var m = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && m !== null) ((m.return = i), (R = m));
            else
              e: for (i = c; R !== null; ) {
                if (((u = R), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rl(9, u);
                    }
                  } catch (A) {
                    Le(u, u.return, A);
                  }
                if (u === i) {
                  R = null;
                  break e;
                }
                var C = u.sibling;
                if (C !== null) {
                  ((C.return = u.return), (R = C));
                  break e;
                }
                R = u.return;
              }
          }
          if (((ie = l), Kt(), Ct && typeof Ct.onPostCommitFiberRoot == 'function'))
            try {
              Ct.onPostCommitFiberRoot(Gr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((ve = n), (dt.transition = t));
      }
    }
    return !1;
  }
  function Ba(e, t, n) {
    ((t = $n(n, t)),
      (t = ra(e, t, 1)),
      (e = Xt(e, t, 1)),
      (t = Ye()),
      e !== null && (tr(e, 1, t), tt(e, t)));
  }
  function Le(e, t, n) {
    if (e.tag === 3) Ba(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ba(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (Zt === null || !Zt.has(r)))
          ) {
            ((e = $n(n, e)),
              (e = la(t, e, 1)),
              (t = Xt(t, e, 1)),
              (e = Ye()),
              t !== null && (tr(t, 1, e), tt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Xf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Ye()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ae === e &&
        (We & n) === n &&
        (ze === 4 || (ze === 3 && (We & 130023424) === We && 500 > Pe() - Ri)
          ? yn(e, 0)
          : (Mi |= n)),
      tt(e, t));
  }
  function Ua(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Kr), (Kr <<= 1), (Kr & 130023424) === 0 && (Kr = 4194304)));
    var n = Ye();
    ((e = Rt(e, t)), e !== null && (tr(e, t, n), tt(e, n)));
  }
  function Jf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Ua(e, n));
  }
  function Zf(e, t) {
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
        throw Error(f(314));
    }
    (r !== null && r.delete(t), Ua(e, n));
  }
  var Ha;
  Ha = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Je.current) be = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((be = !1), Bf(e, t, n));
        be = (e.flags & 131072) !== 0;
      }
    else ((be = !1), Ce && (t.flags & 1048576) !== 0 && Ss(t, vl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Ol(e, t), (e = t.pendingProps));
        var l = In(t, $e.current);
        (Hn(t, n), (l = ci(null, t, r, e, l, n)));
        var o = fi();
        return (
          (t.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ze(r) ? ((o = !0), pl(t)) : (o = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              ri(t),
              (l.updater = Pl),
              (t.stateNode = l),
              (l._reactInternals = t),
              yi(t, r, e, n),
              (t = wi(null, t, r, !0, o, n)))
            : ((t.tag = 0), Ce && o && qo(t), Ke(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Ol(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = ed(r)),
            (e = xt(r, e)),
            l)
          ) {
            case 0:
              t = Si(null, t, r, e, n);
              break e;
            case 1:
              t = pa(null, t, r, e, n);
              break e;
            case 11:
              t = sa(null, t, r, e, n);
              break e;
            case 14:
              t = aa(null, t, r, xt(r.type, e), n);
              break e;
          }
          throw Error(f(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : xt(r, l)),
          Si(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : xt(r, l)),
          pa(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((ma(t), e === null)) throw Error(f(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            Ps(e, t),
            _l(t, r, null, n));
          var i = t.memoizedState;
          if (((r = i.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              ((l = $n(Error(f(423)), t)), (t = ha(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = $n(Error(f(424)), t)), (t = ha(e, t, r, n, l)));
              break e;
            } else
              for (
                ot = Qt(t.stateNode.containerInfo.firstChild),
                  lt = t,
                  Ce = !0,
                  gt = null,
                  n = js(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((An(), r === l)) {
              t = It(e, t, n);
              break e;
            }
            Ke(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ms(t),
          e === null && Xo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          Ho(r, l) ? (i = null) : o !== null && Ho(r, o) && (t.flags |= 32),
          da(e, t),
          Ke(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Xo(t), null);
      case 13:
        return va(e, t, n);
      case 4:
        return (
          li(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Bn(t, null, r, n)) : Ke(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : xt(r, l)),
          sa(e, t, r, l, n)
        );
      case 7:
        return (Ke(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Ke(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Ke(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (i = l.value),
            we(xl, r._currentValue),
            (r._currentValue = i),
            o !== null)
          )
            if (yt(o.value, i)) {
              if (o.children === l.children && !Je.current) {
                t = It(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var u = o.dependencies;
                if (u !== null) {
                  i = o.child;
                  for (var a = u.firstContext; a !== null; ) {
                    if (a.context === r) {
                      if (o.tag === 1) {
                        ((a = zt(-1, n & -n)), (a.tag = 2));
                        var h = o.updateQueue;
                        if (h !== null) {
                          h = h.shared;
                          var w = h.pending;
                          (w === null ? (a.next = a) : ((a.next = w.next), (w.next = a)),
                            (h.pending = a));
                        }
                      }
                      ((o.lanes |= n),
                        (a = o.alternate),
                        a !== null && (a.lanes |= n),
                        ti(o.return, n, t),
                        (u.lanes |= n));
                      break;
                    }
                    a = a.next;
                  }
                } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((i = o.return), i === null)) throw Error(f(341));
                  ((i.lanes |= n),
                    (u = i.alternate),
                    u !== null && (u.lanes |= n),
                    ti(i, n, t),
                    (i = o.sibling));
                } else i = o.child;
                if (i !== null) i.return = o;
                else
                  for (i = o; i !== null; ) {
                    if (i === t) {
                      i = null;
                      break;
                    }
                    if (((o = i.sibling), o !== null)) {
                      ((o.return = i.return), (i = o));
                      break;
                    }
                    i = i.return;
                  }
                o = i;
              }
          (Ke(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Hn(t, n),
          (l = ct(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ke(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = xt(r, t.pendingProps)), (l = xt(r.type, l)), aa(e, t, r, l, n));
      case 15:
        return ca(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : xt(r, l)),
          Ol(e, t),
          (t.tag = 1),
          Ze(r) ? ((e = !0), pl(t)) : (e = !1),
          Hn(t, n),
          ta(t, r, l),
          yi(t, r, l, n),
          wi(null, t, r, !0, e, n)
        );
      case 19:
        return ga(e, t, n);
      case 22:
        return fa(e, t, n);
    }
    throw Error(f(156, t.tag));
  };
  function Wa(e, t) {
    return wu(e, t);
  }
  function bf(e, t, n, r) {
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
  function pt(e, t, n, r) {
    return new bf(e, t, n, r);
  }
  function Hi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function ed(e) {
    if (typeof e == 'function') return Hi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === b)) return 11;
      if (e === Ie) return 14;
    }
    return 2;
  }
  function nn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = pt(e.tag, t, e.key, e.mode)),
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
  function Wl(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == 'function')) Hi(e) && (i = 1);
    else if (typeof e == 'string') i = 5;
    else
      e: switch (e) {
        case se:
          return xn(n.children, l, o, t);
        case ae:
          ((i = 8), (l |= 8));
          break;
        case Ee:
          return ((e = pt(12, n, t, l | 2)), (e.elementType = Ee), (e.lanes = o), e);
        case oe:
          return ((e = pt(13, n, t, l)), (e.elementType = oe), (e.lanes = o), e);
        case pe:
          return ((e = pt(19, n, t, l)), (e.elementType = pe), (e.lanes = o), e);
        case ge:
          return $l(n, l, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case de:
                i = 10;
                break e;
              case ye:
                i = 9;
                break e;
              case b:
                i = 11;
                break e;
              case Ie:
                i = 14;
                break e;
              case Fe:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(f(130, e == null ? e : typeof e, ''));
      }
    return ((t = pt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
  }
  function xn(e, t, n, r) {
    return ((e = pt(7, e, r, t)), (e.lanes = n), e);
  }
  function $l(e, t, n, r) {
    return (
      (e = pt(22, e, r, t)),
      (e.elementType = ge),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Wi(e, t, n) {
    return ((e = pt(6, e, null, t)), (e.lanes = n), e);
  }
  function $i(e, t, n) {
    return (
      (t = pt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function td(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = vo(0)),
      (this.expirationTimes = vo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = vo(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Vi(e, t, n, r, l, o, i, u, a) {
    return (
      (e = new td(e, t, n, u, a)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = pt(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ri(o),
      e
    );
  }
  function nd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Y,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function $a(e) {
    if (!e) return qt;
    e = e._reactInternals;
    e: {
      if (un(e) !== e || e.tag !== 1) throw Error(f(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ze(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(f(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ze(n)) return ys(e, n, t);
    }
    return t;
  }
  function Va(e, t, n, r, l, o, i, u, a) {
    return (
      (e = Vi(n, r, !0, e, l, o, i, u, a)),
      (e.context = $a(null)),
      (n = e.current),
      (r = Ye()),
      (l = en(n)),
      (o = zt(r, l)),
      (o.callback = t ?? null),
      Xt(n, o, l),
      (e.current.lanes = l),
      tr(e, l, r),
      tt(e, r),
      e
    );
  }
  function Vl(e, t, n, r) {
    var l = t.current,
      o = Ye(),
      i = en(l);
    return (
      (n = $a(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = zt(o, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Xt(l, t, i)),
      e !== null && (_t(e, l, i, o), wl(e, l, i)),
      i
    );
  }
  function Ql(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Qa(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Qi(e, t) {
    (Qa(e, t), (e = e.alternate) && Qa(e, t));
  }
  function rd() {
    return null;
  }
  var Ga =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Gi(e) {
    this._internalRoot = e;
  }
  ((Gl.prototype.render = Gi.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(f(409));
      Vl(e, t, null, null);
    }),
    (Gl.prototype.unmount = Gi.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (vn(function () {
            Vl(null, e, null, null);
          }),
            (t[Pt] = null));
        }
      }));
  function Gl(e) {
    this._internalRoot = e;
  }
  Gl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Pu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++);
      (Wt.splice(n, 0, e), n === 0 && Mu(e));
    }
  };
  function qi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ql(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function qa() {}
  function ld(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var h = Ql(i);
          o.call(h);
        };
      }
      var i = Va(t, r, e, 0, null, !1, !1, '', qa);
      return (
        (e._reactRootContainer = i),
        (e[Pt] = i.current),
        hr(e.nodeType === 8 ? e.parentNode : e),
        vn(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var u = r;
      r = function () {
        var h = Ql(a);
        u.call(h);
      };
    }
    var a = Vi(e, 0, !1, null, null, !1, !1, '', qa);
    return (
      (e._reactRootContainer = a),
      (e[Pt] = a.current),
      hr(e.nodeType === 8 ? e.parentNode : e),
      vn(function () {
        Vl(t, a, n, r);
      }),
      a
    );
  }
  function Kl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == 'function') {
        var u = l;
        l = function () {
          var a = Ql(i);
          u.call(a);
        };
      }
      Vl(t, i, e, l);
    } else i = ld(n, t, e, l, r);
    return Ql(i);
  }
  ((ju = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = er(t.pendingLanes);
          n !== 0 && (yo(t, n | 1), tt(t, Pe()), (ie & 6) === 0 && ((Gn = Pe() + 500), Kt()));
        }
        break;
      case 13:
        (vn(function () {
          var r = Rt(e, 1);
          if (r !== null) {
            var l = Ye();
            _t(r, e, 1, l);
          }
        }),
          Qi(e, 1));
    }
  }),
    (go = function (e) {
      if (e.tag === 13) {
        var t = Rt(e, 134217728);
        if (t !== null) {
          var n = Ye();
          _t(t, e, 134217728, n);
        }
        Qi(e, 134217728);
      }
    }),
    (Lu = function (e) {
      if (e.tag === 13) {
        var t = en(e),
          n = Rt(e, t);
        if (n !== null) {
          var r = Ye();
          _t(n, e, t, r);
        }
        Qi(e, t);
      }
    }),
    (Pu = function () {
      return ve;
    }),
    (Tu = function (e, t) {
      var n = ve;
      try {
        return ((ve = e), t());
      } finally {
        ve = n;
      }
    }),
    (ao = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((to(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = fl(r);
                if (!l) throw Error(f(90));
                (Hr(r), to(r, l));
              }
            }
          }
          break;
        case 'textarea':
          ou(e, n);
          break;
        case 'select':
          ((t = n.value), t != null && kn(e, !!n.multiple, t, !1));
      }
    }),
    (mu = Ai),
    (hu = vn));
  var od = { usingClientEntryPoint: !1, Events: [gr, Rn, fl, du, pu, Ai] },
    Mr = {
      findFiberByHostInstance: sn,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    id = {
      bundleType: Mr.bundleType,
      version: Mr.version,
      rendererPackageName: Mr.rendererPackageName,
      rendererConfig: Mr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: X.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = xu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Mr.findFiberByHostInstance || rd,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Yl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yl.isDisabled && Yl.supportsFiber)
      try {
        ((Gr = Yl.inject(id)), (Ct = Yl));
      } catch {}
  }
  return (
    (nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = od),
    (nt.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!qi(t)) throw Error(f(200));
      return nd(e, t, null, n);
    }),
    (nt.createRoot = function (e, t) {
      if (!qi(e)) throw Error(f(299));
      var n = !1,
        r = '',
        l = Ga;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Vi(e, 1, !1, null, null, n, !1, r, l)),
        (e[Pt] = t.current),
        hr(e.nodeType === 8 ? e.parentNode : e),
        new Gi(t)
      );
    }),
    (nt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(f(188))
          : ((e = Object.keys(e).join(',')), Error(f(268, e)));
      return ((e = xu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (nt.flushSync = function (e) {
      return vn(e);
    }),
    (nt.hydrate = function (e, t, n) {
      if (!ql(t)) throw Error(f(200));
      return Kl(null, e, t, !0, n);
    }),
    (nt.hydrateRoot = function (e, t, n) {
      if (!qi(e)) throw Error(f(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        i = Ga;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Va(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[Pt] = t.current),
        hr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Gl(t);
    }),
    (nt.render = function (e, t, n) {
      if (!ql(t)) throw Error(f(200));
      return Kl(null, e, t, !1, n);
    }),
    (nt.unmountComponentAtNode = function (e) {
      if (!ql(e)) throw Error(f(40));
      return e._reactRootContainer
        ? (vn(function () {
            Kl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Pt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (nt.unstable_batchedUpdates = Ai),
    (nt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!ql(n)) throw Error(f(200));
      if (e == null || e._reactInternals === void 0) throw Error(f(38));
      return Kl(e, t, n, !1, r);
    }),
    (nt.version = '18.3.1-next-f1338f8080-20240426'),
    nt
  );
}
var tc;
function md() {
  if (tc) return Xi.exports;
  tc = 1;
  function g() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (_) {
        console.error(_);
      }
  }
  return (g(), (Xi.exports = pd()), Xi.exports);
}
var nc;
function hd() {
  if (nc) return Xl;
  nc = 1;
  var g = md();
  return ((Xl.createRoot = g.createRoot), (Xl.hydrateRoot = g.hydrateRoot), Xl);
}
var vd = hd();
const uc = ({ subtitle: g }) =>
    s.jsxs('header', {
      className: 'header',
      children: [
        s.jsx('div', { className: 'header-title', children: 'Moral Parliament' }),
        g && s.jsx('div', { className: 'header-subtitle', children: g }),
      ],
    }),
  yd = '_container_11wow_3',
  gd = '_heading_11wow_8',
  xd = '_headingEmphasis_11wow_16',
  Sd = '_intro_11wow_24',
  wd = '_infoBox_11wow_32',
  _d = '_infoBoxLabel_11wow_40',
  kd = '_infoBoxGrid_11wow_47',
  Cd = '_infoBoxItem_11wow_54',
  Dt = {
    container: yd,
    heading: gd,
    headingEmphasis: xd,
    intro: Sd,
    infoBox: wd,
    infoBoxLabel: _d,
    infoBoxGrid: kd,
    infoBoxItem: Cd,
  },
  Ed = ({ onStart: g }) =>
    s.jsxs('div', {
      className: 'screen',
      children: [
        s.jsx(uc, { subtitle: '~3 minutes' }),
        s.jsx('main', {
          className: 'screen-main',
          children: s.jsxs('div', {
            className: Dt.container,
            children: [
              s.jsxs('h1', {
                className: Dt.heading,
                children: [
                  'Where Should Your',
                  s.jsx('br', {}),
                  s.jsx('span', { className: Dt.headingEmphasis, children: 'Giving Go?' }),
                ],
              }),
              s.jsx('p', {
                className: Dt.intro,
                children:
                  'Uncertain about your ethical views? This tool helps you allocate resources across different causes based on your moral credences—the probabilities you assign to different ethical perspectives.',
              }),
              s.jsx('button', {
                onClick: g,
                className: 'btn btn-primary',
                children: 'Start Quiz →',
              }),
              s.jsxs('div', {
                className: Dt.infoBox,
                children: [
                  s.jsx('div', { className: Dt.infoBoxLabel, children: "You'll be asked about:" }),
                  s.jsxs('div', {
                    className: Dt.infoBoxGrid,
                    children: [
                      s.jsx('div', {
                        className: Dt.infoBoxItem,
                        children: '🐾 Animal vs. Human welfare',
                      }),
                      s.jsx('div', {
                        className: Dt.infoBoxItem,
                        children: '⏳ Current vs. Future generations',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  Nd = ({ percentage: g }) =>
    s.jsx('div', {
      className: 'progress-container',
      children: s.jsx('div', {
        className: 'progress-track',
        children: s.jsx('div', { className: 'progress-fill', style: { width: `${g}%` } }),
      }),
    });
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jd = (g) => g.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  sc = (...g) =>
    g
      .filter((_, f, j) => !!_ && _.trim() !== '' && j.indexOf(_) === f)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ld = {
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
 */ const Pd = he.forwardRef(
  (
    {
      color: g = 'currentColor',
      size: _ = 24,
      strokeWidth: f = 2,
      absoluteStrokeWidth: j,
      className: v = '',
      children: L,
      iconNode: T,
      ...U
    },
    y
  ) =>
    he.createElement(
      'svg',
      {
        ref: y,
        ...Ld,
        width: _,
        height: _,
        stroke: g,
        strokeWidth: j ? (Number(f) * 24) / Number(_) : f,
        className: sc('lucide', v),
        ...U,
      },
      [...T.map(([D, E]) => he.createElement(D, E)), ...(Array.isArray(L) ? L : [L])]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bl = (g, _) => {
  const f = he.forwardRef(({ className: j, ...v }, L) =>
    he.createElement(Pd, { ref: L, iconNode: _, className: sc(`lucide-${jd(g)}`, j), ...v })
  );
  return ((f.displayName = `${g}`), f);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Td = bl('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Od = bl('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ac = bl('RotateCcw', [
  ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
  ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Md = bl('SlidersVertical', [
    ['line', { x1: '4', x2: '4', y1: '21', y2: '14', key: '1p332r' }],
    ['line', { x1: '4', x2: '4', y1: '10', y2: '3', key: 'gb41h5' }],
    ['line', { x1: '12', x2: '12', y1: '21', y2: '12', key: 'hf2csr' }],
    ['line', { x1: '12', x2: '12', y1: '8', y2: '3', key: '1kfi7u' }],
    ['line', { x1: '20', x2: '20', y1: '21', y2: '16', key: '1lhrwl' }],
    ['line', { x1: '20', x2: '20', y1: '12', y2: '3', key: '16vvfq' }],
    ['line', { x1: '2', x2: '6', y1: '14', y2: '14', key: '1uebub' }],
    ['line', { x1: '10', x2: '14', y1: '8', y2: '8', key: '1yglbp' }],
    ['line', { x1: '18', x2: '22', y1: '16', y2: '16', key: '1jxqpz' }],
  ]),
  Rd = '_modeToggle_modhv_3',
  zd = '_button_modhv_10',
  Id = '_options_modhv_23',
  Fd = '_active_modhv_29',
  Dd = '_sliders_modhv_35',
  Sn = { modeToggle: Rd, button: zd, options: Id, active: Fd, sliders: Dd },
  Ad = ({ mode: g, setMode: _ }) =>
    s.jsxs('div', {
      className: Sn.modeToggle,
      children: [
        s.jsx('button', {
          onClick: () => _('options'),
          className: `${Sn.button} ${Sn.options} ${g === 'options' ? Sn.active : ''}`,
          children: 'Pick One',
        }),
        s.jsxs('button', {
          onClick: () => _('sliders'),
          className: `${Sn.button} ${Sn.sliders} ${g === 'sliders' ? Sn.active : ''}`,
          children: [s.jsx(Md, { size: 14 }), 'Custom Mix'],
        }),
      ],
    }),
  Bd = '_optionButton_xv4xt_3',
  Ud = '_selected_xv4xt_20',
  Hd = '_content_xv4xt_34',
  Wd = '_textContent_xv4xt_40',
  $d = '_label_xv4xt_44',
  Vd = '_description_xv4xt_56',
  Qd = '_checkmark_xv4xt_62',
  At = {
    optionButton: Bd,
    default: '_default_xv4xt_15',
    selected: Ud,
    content: Hd,
    textContent: Wd,
    label: $d,
    description: Vd,
    checkmark: Qd,
  },
  Gd = ({
    label: g,
    description: _,
    optionKey: f,
    credences: j,
    setCredences: v,
    color: L,
    setInputMode: T,
  }) => {
    const U = j[f] === 100,
      y = () => {
        const D = { equal: 0, '10x': 0, '100x': 0 };
        ((D[f] = 100), v(D), T('options'));
      };
    return s.jsx('button', {
      onClick: y,
      className: `${At.optionButton} ${U ? At.selected : At.default}`,
      style: { '--option-color': L },
      children: s.jsxs('div', {
        className: At.content,
        children: [
          s.jsxs('div', {
            className: At.textContent,
            children: [
              s.jsx('div', { className: `${At.label} ${U ? At.selected : ''}`, children: g }),
              s.jsx('div', { className: At.description, children: _ }),
            ],
          }),
          U && s.jsx('div', { className: At.checkmark, children: '✓' }),
        ],
      }),
    });
  },
  qd = '_credenceSlider_1qobm_4',
  Kd = '_header_1qobm_8',
  Yd = '_label_1qobm_15',
  Xd = '_description_1qobm_22',
  Jd = '_value_1qobm_28',
  Zd = '_sliderRow_1qobm_35',
  bd = '_sliderContainer_1qobm_41',
  ep = '_lockLimit_1qobm_46',
  tp = '_compactSlider_1qobm_91',
  Xe = {
    credenceSlider: qd,
    header: Kd,
    label: Yd,
    description: Xd,
    value: Jd,
    sliderRow: Zd,
    sliderContainer: bd,
    lockLimit: ep,
    compactSlider: tp,
  },
  np = { resetButton: !1, sliderLock: !1 },
  eu = { ui: np },
  rp = ({
    label: g,
    description: _,
    value: f,
    onChange: j,
    color: v,
    credences: L,
    sliderKey: T,
    lockedKey: U,
    setLockedKey: y,
  }) => {
    var ne;
    const [D, E] = he.useState(null),
      [z, N] = he.useState(!1),
      H = U === T,
      Q = U && U !== T,
      G = Q ? L[U] : 0,
      B = Q ? 100 - G : 100,
      K = Q ? `calc(${B}% + ${(50 - B) * 0.16}px)` : null,
      fe = () => {
        H || (N(!0), E({ ...L }));
      },
      ue = (Y) => {
        if (H) return;
        N(!1);
        const se = parseFloat(Y.target.value);
        (j(se, D, !0, U), E(null));
      },
      X = (Y) => {
        if (H) return;
        const se = parseFloat(Y.target.value);
        j(se, D, !1, U);
      };
    return s.jsxs('div', {
      className: Xe.credenceSlider,
      children: [
        s.jsxs('div', {
          className: Xe.header,
          children: [
            s.jsxs('div', {
              children: [
                s.jsx('div', { className: Xe.label, children: g }),
                s.jsx('div', { className: Xe.description, children: _ }),
              ],
            }),
            s.jsxs('div', {
              className: Xe.value,
              style: { color: v },
              children: [Math.round(f), '%'],
            }),
          ],
        }),
        s.jsxs('div', {
          className: Xe.sliderRow,
          children: [
            s.jsxs('div', {
              className: Xe.sliderContainer,
              children: [
                s.jsx('input', {
                  type: 'range',
                  min: '0',
                  max: '100',
                  step: 'any',
                  value: f,
                  onChange: X,
                  onMouseDown: fe,
                  onMouseUp: ue,
                  onMouseLeave: ue,
                  onTouchStart: fe,
                  onTouchEnd: ue,
                  'data-dragging': z,
                  disabled: H,
                  style: {
                    background: Q
                      ? `linear-gradient(to right, ${v} 0%, ${v} ${f}%, rgba(255,255,255,0.15) ${f}%, rgba(255,255,255,0.15) ${K}, rgba(255,255,255,0.08) ${K}, rgba(255,255,255,0.08) 100%)`
                      : `linear-gradient(to right, ${v} 0%, ${v} ${f}%, rgba(255,255,255,0.15) ${f}%, rgba(255,255,255,0.15) 100%)`,
                    cursor: H ? 'not-allowed' : 'pointer',
                  },
                }),
                Q && s.jsx('div', { className: Xe.lockLimit, style: { left: K } }),
              ],
            }),
            (ne = eu.ui) == null ? void 0 : ne.sliderLock,
          ],
        }),
      ],
    });
  },
  Fr = {
    globalHealth: {
      name: 'Global Health',
      points: 100,
      helpsAnimals: !1,
      helpsFutureHumans: !1,
      scaleFactor: 1,
      isSpeculative: !1,
    },
    animalWelfare: {
      name: 'Animal Welfare',
      points: 100,
      helpsAnimals: !0,
      helpsFutureHumans: !1,
      scaleFactor: 10,
      isSpeculative: !1,
    },
    gcr: {
      name: 'GCR (Future)',
      points: 100,
      helpsAnimals: !1,
      helpsFutureHumans: !0,
      scaleFactor: 100,
      isSpeculative: !0,
    },
  },
  Dr = { equal: 1, '10x': 0.1, '100x': 0.01 },
  Ar = { equal: 1, '10x': 0.1, '100x': 0.01 },
  Br = { equal: 0, '10x': 0.5, '100x': 1 },
  Ur = { equal: 1, '10x': 0.1, '100x': 0.01 },
  lp = [
    {
      key: 'equal',
      label: 'Animals and humans matter equally',
      description: 'Equal weight to equivalent experiences',
      color: '#81B29A',
    },
    {
      key: '10x',
      label: 'Animals matter 10× less than humans',
      description: 'Moderate speciesist view',
      color: '#98C1D9',
    },
    {
      key: '100x',
      label: 'Animals matter 100× less than humans',
      description: 'Strong speciesist view',
      color: '#E07A5F',
    },
  ],
  op = [
    {
      key: 'equal',
      label: 'Future and current humans matter equally',
      description: 'No time discounting',
      color: '#81B29A',
    },
    {
      key: '10x',
      label: 'Future humans matter 10× less',
      description: 'Moderate time preference',
      color: '#98C1D9',
    },
    {
      key: '100x',
      label: 'Future humans matter 100× less',
      description: 'Strong present focus',
      color: '#E07A5F',
    },
  ],
  ip = [
    {
      key: 'equal',
      label: 'Helping one person matters as much as helping millions',
      description: "Numbers don't multiply moral value",
      color: '#81B29A',
    },
    {
      key: '10x',
      label: 'Helping 10× more beings is significantly better',
      description: 'Scale matters, but not linearly',
      color: '#98C1D9',
    },
    {
      key: '100x',
      label: 'Helping 10× more beings is 10× better',
      description: 'Full utilitarian aggregation',
      color: '#E07A5F',
    },
  ],
  up = [
    {
      key: 'equal',
      label: 'Speculative and proven interventions matter equally',
      description: 'Expected value is all that matters',
      color: '#81B29A',
    },
    {
      key: '10x',
      label: 'Proven interventions are worth 10× more',
      description: 'Moderate certainty preference',
      color: '#98C1D9',
    },
    {
      key: '100x',
      label: 'Proven interventions are worth 100× more',
      description: 'Strong evidence focus',
      color: '#E07A5F',
    },
  ],
  sp = [
    { key: 'equal', label: 'Equal weight', short: 'Eq', color: '#81B29A' },
    { key: '10x', label: '10× less', short: '10×', color: '#98C1D9' },
    { key: '100x', label: '100× less', short: '100×', color: '#E07A5F' },
  ],
  ap = [
    { key: 'equal', label: 'Equal weight', short: 'Eq', color: '#81B29A' },
    { key: '10x', label: '10× less', short: '10×', color: '#98C1D9' },
    { key: '100x', label: '100× less', short: '100×', color: '#E07A5F' },
  ],
  cp = [
    { key: 'equal', label: 'Irrelevant', short: 'Eq', color: '#81B29A' },
    { key: '10x', label: 'Matters', short: '10×', color: '#98C1D9' },
    { key: '100x', label: 'Dominates', short: '100×', color: '#E07A5F' },
  ],
  fp = [
    { key: 'equal', label: 'Equal weight', short: 'Eq', color: '#81B29A' },
    { key: '10x', label: '10× less', short: '10×', color: '#98C1D9' },
    { key: '100x', label: '100× less', short: '100×', color: '#E07A5F' },
  ],
  ln = { equal: 33, '10x': 33, '100x': 34 },
  Ue = {
    WELCOME: 'welcome',
    ANIMALS: 'animals',
    FUTURE: 'future',
    SCALE: 'scale',
    CERTAINTY: 'certainty',
    RESULTS: 'results',
  },
  on = { OPTIONS: 'options' },
  eo = (g, _, f, j, v) => {
    let L = g.points;
    return (
      g.helpsAnimals && (L *= _),
      g.helpsFutureHumans && (L *= f),
      (L *= Math.pow(g.scaleFactor, j)),
      g.isSpeculative && (L *= v),
      L
    );
  },
  rc = (g, _, f, j, v) => {
    const L = (v == null ? void 0 : v.causes) || Fr,
      T = (v == null ? void 0 : v.animalMultipliers) || Dr,
      U = (v == null ? void 0 : v.futureMultipliers) || Ar,
      y = (v == null ? void 0 : v.scaleMultipliers) || Br,
      D = (v == null ? void 0 : v.certaintyMultipliers) || Ur,
      E = {};
    Object.entries(L).forEach(([N, H]) => {
      let Q = 0;
      (Object.entries(g).forEach(([G, B]) => {
        Object.entries(_).forEach(([K, fe]) => {
          Object.entries(f).forEach(([ue, X]) => {
            Object.entries(j).forEach(([ne, Y]) => {
              const se = T[G],
                ae = U[K],
                Ee = y[ue],
                de = D[ne],
                ye = (B / 100) * (fe / 100) * (X / 100) * (Y / 100),
                b = eo(H, se, ae, Ee, de);
              Q += ye * b;
            });
          });
        });
      }),
        (E[N] = Q));
    });
    const z = Object.keys(E).reduce((N, H) => (E[N] > E[H] ? N : H));
    return {
      globalHealth: z === 'globalHealth' ? 100 : 0,
      animalWelfare: z === 'animalWelfare' ? 100 : 0,
      gcr: z === 'gcr' ? 100 : 0,
      evs: E,
    };
  },
  lc = (g, _, f, j, v) => {
    const L = (v == null ? void 0 : v.causes) || Fr,
      T = (v == null ? void 0 : v.animalMultipliers) || Dr,
      U = (v == null ? void 0 : v.futureMultipliers) || Ar,
      y = (v == null ? void 0 : v.scaleMultipliers) || Br,
      D = (v == null ? void 0 : v.certaintyMultipliers) || Ur,
      E = { globalHealth: 0, animalWelfare: 0, gcr: 0 };
    return (
      Object.entries(g).forEach(([z, N]) => {
        Object.entries(_).forEach(([H, Q]) => {
          Object.entries(f).forEach(([G, B]) => {
            Object.entries(j).forEach(([K, fe]) => {
              const ue = (N / 100) * (Q / 100) * (B / 100) * (fe / 100),
                X = T[z],
                ne = U[H],
                Y = y[G],
                se = D[K],
                ae = {};
              Object.entries(L).forEach(([b, oe]) => {
                ae[b] = eo(oe, X, ne, Y, se);
              });
              const Ee = Math.max(...Object.values(ae)),
                de = Object.keys(ae).filter((b) => Math.abs(ae[b] - Ee) < 1e-4),
                ye = ue / de.length;
              de.forEach((b) => {
                E[b] += ye;
              });
            });
          });
        });
      }),
      { globalHealth: E.globalHealth * 100, animalWelfare: E.animalWelfare * 100, gcr: E.gcr * 100 }
    );
  },
  oc = (g, _, f, j, v) => {
    const L = (v == null ? void 0 : v.causes) || Fr,
      T = (v == null ? void 0 : v.animalMultipliers) || Dr,
      U = (v == null ? void 0 : v.futureMultipliers) || Ar,
      y = (v == null ? void 0 : v.scaleMultipliers) || Br,
      D = (v == null ? void 0 : v.certaintyMultipliers) || Ur,
      E = { globalHealth: 0, animalWelfare: 0, gcr: 0 };
    return (
      Object.entries(g).forEach(([z, N]) => {
        Object.entries(_).forEach(([H, Q]) => {
          Object.entries(f).forEach(([G, B]) => {
            Object.entries(j).forEach(([K, fe]) => {
              const ue = (N / 100) * (Q / 100) * (B / 100) * (fe / 100),
                X = T[z],
                ne = U[H],
                Y = y[G],
                se = D[K],
                ae = {};
              Object.entries(L).forEach(([b, oe]) => {
                ae[b] = eo(oe, X, ne, Y, se);
              });
              const Ee = Math.max(...Object.values(ae)),
                de = Object.keys(ae).filter((b) => Math.abs(ae[b] - Ee) < 1e-4),
                ye = (ue * 100) / de.length;
              de.forEach((b) => {
                E[b] += ye;
              });
            });
          });
        });
      }),
      { globalHealth: E.globalHealth, animalWelfare: E.animalWelfare, gcr: E.gcr }
    );
  },
  ic = (g, _, f, j, v) => {
    const L = (v == null ? void 0 : v.causes) || Fr,
      T = (v == null ? void 0 : v.animalMultipliers) || Dr,
      U = (v == null ? void 0 : v.futureMultipliers) || Ar,
      y = (v == null ? void 0 : v.scaleMultipliers) || Br,
      D = (v == null ? void 0 : v.certaintyMultipliers) || Ur,
      E = [
        { globalHealth: 100, animalWelfare: 0, gcr: 0 },
        { globalHealth: 0, animalWelfare: 100, gcr: 0 },
        { globalHealth: 0, animalWelfare: 0, gcr: 100 },
        { globalHealth: 50, animalWelfare: 50, gcr: 0 },
        { globalHealth: 50, animalWelfare: 0, gcr: 50 },
        { globalHealth: 0, animalWelfare: 50, gcr: 50 },
        { globalHealth: 34, animalWelfare: 33, gcr: 33 },
        { globalHealth: 60, animalWelfare: 20, gcr: 20 },
        { globalHealth: 20, animalWelfare: 60, gcr: 20 },
        { globalHealth: 20, animalWelfare: 20, gcr: 60 },
        { globalHealth: 70, animalWelfare: 15, gcr: 15 },
        { globalHealth: 15, animalWelfare: 70, gcr: 15 },
        { globalHealth: 15, animalWelfare: 15, gcr: 70 },
        { globalHealth: 80, animalWelfare: 10, gcr: 10 },
        { globalHealth: 10, animalWelfare: 80, gcr: 10 },
        { globalHealth: 10, animalWelfare: 10, gcr: 80 },
      ];
    let z = E[0],
      N = -1 / 0;
    for (const H of E) {
      let Q = 1 / 0;
      (Object.entries(g).forEach(([G, B]) => {
        Object.entries(_).forEach(([K, fe]) => {
          Object.entries(f).forEach(([ue, X]) => {
            Object.entries(j).forEach(([ne, Y]) => {
              if ((B / 100) * (fe / 100) * (X / 100) * (Y / 100) < 0.001) return;
              const ae = T[G],
                Ee = U[K],
                de = y[ue],
                ye = D[ne];
              let b = 0;
              (Object.entries(L).forEach(([oe, pe]) => {
                const Ie = eo(pe, ae, Ee, de, ye);
                b += Ie * (H[oe] / 100);
              }),
                (Q = Math.min(Q, b)));
            });
          });
        });
      }),
        Q > N && ((N = Q), (z = { ...H })));
    }
    return { globalHealth: z.globalHealth, animalWelfare: z.animalWelfare, gcr: z.gcr };
  },
  Ir = (g, _, f, j = null, v = null) => {
    const L = v ? f[v] : 0,
      T = 100 - L;
    _ = Math.max(0, Math.min(T, _));
    const U = j || f,
      y = Object.keys(f).filter((N) => N !== g && N !== v),
      D = y.reduce((N, H) => N + U[H], 0),
      E = 100 - _ - L,
      z = { [g]: _ };
    if ((v && (z[v] = f[v]), D === 0)) {
      const N = Math.floor(E / y.length);
      let H = E - N * y.length;
      y.forEach((Q, G) => {
        z[Q] = N + (G < H ? 1 : 0);
      });
    } else {
      let N = 0;
      y.forEach((H, Q) => {
        if (Q === y.length - 1) z[H] = Math.max(0, E - N);
        else {
          const G = U[H] / D,
            B = E * G;
          ((z[H] = Math.max(0, B)), (N += z[H]));
        }
      });
    }
    return z;
  },
  cc = (g) => {
    const _ = Object.keys(g),
      f = {};
    let j = 0;
    return (
      _.slice(0, -1).forEach((v) => {
        ((f[v] = Math.round(g[v])), (j += f[v]));
      }),
      (f[_[_.length - 1]] = 100 - j),
      f
    );
  },
  dp = '_container_9yo3m_3',
  pp = '_categoryLabel_9yo3m_8',
  mp = '_heading_9yo3m_16',
  hp = '_instructions_9yo3m_23',
  vp = '_buttonRow_9yo3m_30',
  zr = { container: dp, categoryLabel: pp, heading: mp, instructions: hp, buttonRow: vp },
  Jl = ({
    categoryLabel: g,
    categoryColor: _,
    questionNumber: f,
    progressPercentage: j,
    heading: v,
    instructionsOptions: L,
    instructionsSliders: T,
    options: U,
    credences: y,
    setCredences: D,
    inputMode: E,
    setInputMode: z,
    lockedKey: N,
    setLockedKey: H,
    onBack: Q,
    onContinue: G,
    adjustCredences: B,
  }) =>
    s.jsxs('div', {
      className: 'screen',
      children: [
        s.jsx(uc, { subtitle: f }),
        s.jsx(Nd, { percentage: j }),
        s.jsx('main', {
          className: 'screen-main',
          children: s.jsxs('div', {
            className: zr.container,
            children: [
              s.jsx('div', { className: zr.categoryLabel, style: { color: _ }, children: g }),
              s.jsx('h2', { className: zr.heading, children: v }),
              s.jsx('p', { className: zr.instructions, children: E === 'options' ? L : T }),
              s.jsx(Ad, { mode: E, setMode: z }),
              s.jsx('div', {
                className: 'card',
                children:
                  E === 'options'
                    ? s.jsx(s.Fragment, {
                        children: U.map((K) =>
                          s.jsx(
                            Gd,
                            {
                              label: K.label,
                              description: K.description,
                              optionKey: K.key,
                              credences: y,
                              setCredences: D,
                              color: K.color,
                              setInputMode: z,
                            },
                            K.key
                          )
                        ),
                      })
                    : s.jsx(s.Fragment, {
                        children: U.map((K) =>
                          s.jsx(
                            rp,
                            {
                              label: K.label,
                              description: K.description,
                              value: y[K.key],
                              onChange: (fe, ue, X, ne) => {
                                const Y = B(K.key, fe, y, ue, ne);
                                D(X ? cc(Y) : Y);
                              },
                              color: K.color,
                              credences: y,
                              sliderKey: K.key,
                              lockedKey: N,
                              setLockedKey: H,
                            },
                            K.key
                          )
                        ),
                      }),
              }),
              s.jsxs('div', {
                className: zr.buttonRow,
                children: [
                  s.jsx('button', {
                    onClick: Q,
                    className: 'btn btn-secondary',
                    children: '← Back',
                  }),
                  s.jsx('button', {
                    onClick: G,
                    className: 'btn btn-primary',
                    children: 'Continue →',
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  yp = '_causeBar_aav23_3',
  gp = '_header_aav23_7',
  xp = '_name_aav23_15',
  Sp = '_percentage_aav23_19',
  wp = '_changeIndicator_aav23_23',
  _p = '_up_aav23_27',
  kp = '_down_aav23_31',
  Cp = '_barTrack_aav23_35',
  Ep = '_barOriginal_aav23_43',
  Np = '_barFill_aav23_49',
  jp = '_barLabel_aav23_58',
  kt = {
    causeBar: yp,
    header: gp,
    name: xp,
    percentage: Sp,
    changeIndicator: wp,
    up: _p,
    down: kp,
    barTrack: Cp,
    barOriginal: Ep,
    barFill: Np,
    barLabel: jp,
  },
  mt = ({ name: g, percentage: _, color: f, originalPercentage: j = null, hasChanged: v = !1 }) => {
    const L = v && j !== null && _ !== j,
      T = L && _ > j;
    return s.jsxs('div', {
      className: kt.causeBar,
      children: [
        s.jsxs('div', {
          className: kt.header,
          children: [
            s.jsx('span', { className: kt.name, children: g }),
            s.jsxs('span', {
              className: kt.percentage,
              style: { color: f },
              children: [
                _.toFixed(0),
                '%',
                L &&
                  s.jsx('span', {
                    className: `${kt.changeIndicator} ${T ? kt.up : kt.down}`,
                    children: T ? '↑' : '↓',
                  }),
              ],
            }),
          ],
        }),
        s.jsxs('div', {
          className: kt.barTrack,
          children: [
            L &&
              s.jsx('div', { className: kt.barOriginal, style: { width: `${j}%`, background: f } }),
            s.jsx('div', {
              className: kt.barFill,
              style: { width: `${_}%`, background: f },
              children:
                _ > 15 && s.jsxs('span', { className: kt.barLabel, children: [_.toFixed(0), '%'] }),
            }),
          ],
        }),
      ],
    });
  },
  Lp = ({
    label: g,
    value: _,
    onChange: f,
    color: j,
    credences: v,
    sliderKey: L,
    lockedKey: T,
    setLockedKey: U,
  }) => {
    var X;
    const [y, D] = he.useState(null),
      [E, z] = he.useState(!1),
      N = T === L,
      H = T && T !== L,
      Q = H ? v[T] : 0,
      G = H ? 100 - Q : 100,
      B = H ? `calc(${G}% + ${(50 - G) * 0.16}px)` : null,
      K = () => {
        N || (z(!0), D({ ...v }));
      },
      fe = (ne) => {
        if (N) return;
        z(!1);
        const Y = parseFloat(ne.target.value);
        (f(Y, y, !0, T), D(null));
      },
      ue = (ne) => {
        if (N) return;
        const Y = parseFloat(ne.target.value);
        f(Y, y, !1, T);
      };
    return s.jsxs('div', {
      className: Xe.compactSlider,
      children: [
        s.jsxs('div', {
          className: Xe.header,
          children: [
            s.jsx('span', { className: Xe.label, children: g }),
            s.jsxs('span', {
              className: Xe.value,
              style: { color: j },
              children: [Math.round(_), '%'],
            }),
          ],
        }),
        s.jsxs('div', {
          className: Xe.sliderRow,
          children: [
            s.jsxs('div', {
              className: Xe.sliderContainer,
              children: [
                s.jsx('input', {
                  type: 'range',
                  min: '0',
                  max: '100',
                  step: 'any',
                  value: _,
                  onChange: ue,
                  onMouseDown: K,
                  onMouseUp: fe,
                  onMouseLeave: fe,
                  onTouchStart: K,
                  onTouchEnd: fe,
                  'data-dragging': E,
                  disabled: N,
                  style: {
                    background: H
                      ? `linear-gradient(to right, ${j} 0%, ${j} ${_}%, rgb(51,65,85) ${_}%, rgb(51,65,85) ${B}, rgb(30,41,59) ${B}, rgb(30,41,59) 100%)`
                      : `linear-gradient(to right, ${j} 0%, ${j} ${_}%, rgb(51,65,85) ${_}%, rgb(51,65,85) 100%)`,
                    cursor: N ? 'not-allowed' : 'pointer',
                  },
                }),
                H && s.jsx('div', { className: Xe.lockLimit, style: { left: B } }),
              ],
            }),
            (X = eu.ui) == null ? void 0 : X.sliderLock,
          ],
        }),
      ],
    });
  },
  Pp = '_editPanel_aogsc_3',
  Tp = '_expanded_aogsc_11',
  Op = '_toggleButton_aogsc_16',
  Mp = '_buttonContent_aogsc_33',
  Rp = '_icon_aogsc_39',
  zp = '_title_aogsc_43',
  Ip = '_modifiedBadge_aogsc_48',
  Fp = '_preview_aogsc_56',
  Dp = '_chevron_aogsc_62',
  Ap = '_content_aogsc_66',
  Bp = '_footer_aogsc_71',
  Up = '_footerNote_aogsc_78',
  Hp = '_resetButton_aogsc_84',
  ut = {
    editPanel: Pp,
    expanded: Tp,
    toggleButton: Op,
    buttonContent: Mp,
    icon: Rp,
    title: zp,
    modifiedBadge: Ip,
    preview: Fp,
    chevron: Dp,
    content: Ap,
    footer: Bp,
    footerNote: Up,
    resetButton: Hp,
  },
  Zl = ({
    title: g,
    icon: _,
    credences: f,
    setCredences: j,
    originalCredences: v,
    configs: L,
    isExpanded: T,
    onToggle: U,
    lockedKey: y,
    setLockedKey: D,
  }) => {
    const E = v && JSON.stringify(f) !== JSON.stringify(v),
      z = (N) => {
        (N.stopPropagation(), j({ ...v }));
      };
    return s.jsxs('div', {
      className: `${ut.editPanel} ${T ? ut.expanded : ''}`,
      children: [
        s.jsxs('button', {
          onClick: U,
          className: ut.toggleButton,
          children: [
            s.jsxs('div', {
              className: ut.buttonContent,
              children: [
                s.jsx('span', { className: ut.icon, children: _ }),
                s.jsx('span', { className: ut.title, children: g }),
                E && s.jsx('span', { className: ut.modifiedBadge, children: 'modified' }),
                !T &&
                  s.jsx('span', {
                    className: ut.preview,
                    children: L.map((N) => `${N.short}:${f[N.key]}%`).join(' '),
                  }),
              ],
            }),
            s.jsx('span', {
              className: ut.chevron,
              children: T ? s.jsx(Od, { size: 16 }) : s.jsx(Td, { size: 16 }),
            }),
          ],
        }),
        T &&
          s.jsxs('div', {
            className: ut.content,
            children: [
              L.map((N) =>
                s.jsx(
                  Lp,
                  {
                    label: N.label,
                    value: f[N.key],
                    onChange: (H, Q, G, B) => {
                      const K = Ir(N.key, H, f, Q, B);
                      j(G ? cc(K) : K);
                    },
                    color: N.color,
                    credences: f,
                    sliderKey: N.key,
                    lockedKey: y,
                    setLockedKey: D,
                  },
                  N.key
                )
              ),
              s.jsxs('div', {
                className: ut.footer,
                children: [
                  s.jsx('span', {
                    className: ut.footerNote,
                    children: 'Sliders auto-balance to 100%',
                  }),
                  E &&
                    s.jsxs('button', {
                      onClick: z,
                      className: ut.resetButton,
                      children: [s.jsx(ac, { size: 10 }), ' Reset'],
                    }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  Wp = '_resultsContainer_7ijf6_3',
  $p = '_inner_7ijf6_11',
  Vp = '_header_7ijf6_16',
  Qp = '_title_7ijf6_21',
  Gp = '_modifiedIndicator_7ijf6_27',
  qp = '_resultsGrid_7ijf6_34',
  Kp = '_resultCard_7ijf6_41',
  Yp = '_cardHeader_7ijf6_48',
  Xp = '_cardIcon_7ijf6_55',
  Jp = '_maxEV_7ijf6_65',
  Zp = '_parliament_7ijf6_69',
  bp = '_cardTitle_7ijf6_73',
  em = '_cardSubtitle_7ijf6_80',
  tm = '_cardFooter_7ijf6_86',
  nm = '_adjustPanel_7ijf6_94',
  rm = '_adjustHeader_7ijf6_102',
  lm = '_adjustTitle_7ijf6_109',
  om = '_resetAllButton_7ijf6_115',
  im = '_panelList_7ijf6_132',
  um = '_backButtonContainer_7ijf6_138',
  sm = '_backButton_7ijf6_138',
  Z = {
    resultsContainer: Wp,
    inner: $p,
    header: Vp,
    title: Qp,
    modifiedIndicator: Gp,
    resultsGrid: qp,
    resultCard: Kp,
    cardHeader: Yp,
    cardIcon: Xp,
    maxEV: Jp,
    parliament: Zp,
    cardTitle: bp,
    cardSubtitle: em,
    cardFooter: tm,
    adjustPanel: nm,
    adjustHeader: rm,
    adjustTitle: lm,
    resetAllButton: om,
    panelList: im,
    backButtonContainer: um,
    backButton: sm,
  },
  am = ({
    animalCredences: g,
    setAnimalCredences: _,
    futureCredences: f,
    setFutureCredences: j,
    scaleCredences: v,
    setScaleCredences: L,
    certaintyCredences: T,
    setCertaintyCredences: U,
    originalAnimalCredences: y,
    originalFutureCredences: D,
    originalScaleCredences: E,
    originalCertaintyCredences: z,
    animalLockedKey: N,
    setAnimalLockedKey: H,
    futureLockedKey: Q,
    setFutureLockedKey: G,
    scaleLockedKey: B,
    setScaleLockedKey: K,
    certaintyLockedKey: fe,
    setCertaintyLockedKey: ue,
    expandedPanel: X,
    setExpandedPanel: ne,
    maxEVResults: Y,
    parliamentResults: se,
    mergedFavoritesResults: ae,
    maximinResults: Ee,
    originalMaxEV: de,
    originalParliament: ye,
    originalMergedFavorites: b,
    originalMaximin: oe,
    hasChanged: pe,
    onResetAll: Ie,
    onResetQuiz: Fe,
    onBack: ge,
  }) => {
    var P;
    return s.jsx('div', {
      className: Z.resultsContainer,
      children: s.jsxs('div', {
        className: Z.inner,
        children: [
          s.jsx('div', {
            className: Z.header,
            children: s.jsxs('h1', {
              className: Z.title,
              children: [
                'Recommended Allocations',
                pe && s.jsx('span', { className: Z.modifiedIndicator, children: '(modified)' }),
              ],
            }),
          }),
          s.jsxs('div', {
            className: Z.resultsGrid,
            children: [
              s.jsxs('div', {
                className: Z.resultCard,
                children: [
                  s.jsxs('div', {
                    className: Z.cardHeader,
                    children: [
                      s.jsx('div', { className: `${Z.cardIcon} ${Z.maxEV}`, children: '🎯' }),
                      s.jsxs('div', {
                        children: [
                          s.jsx('h3', { className: Z.cardTitle, children: 'Max Expected Value' }),
                          s.jsx('p', { className: Z.cardSubtitle, children: '100% to highest EV' }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx(mt, {
                    name: 'Global Health',
                    percentage: Y.globalHealth,
                    originalPercentage: de == null ? void 0 : de.globalHealth,
                    color: 'var(--color-global-health)',
                    hasChanged: pe,
                  }),
                  s.jsx(mt, {
                    name: 'Animal Welfare',
                    percentage: Y.animalWelfare,
                    originalPercentage: de == null ? void 0 : de.animalWelfare,
                    color: 'var(--color-animal-welfare)',
                    hasChanged: pe,
                  }),
                  s.jsx(mt, {
                    name: 'GCR (Future)',
                    percentage: Y.gcr,
                    originalPercentage: de == null ? void 0 : de.gcr,
                    color: 'var(--color-gcr)',
                    hasChanged: pe,
                  }),
                  s.jsxs('div', {
                    className: Z.cardFooter,
                    children: [
                      'EVs: GH ',
                      Y.evs.globalHealth.toFixed(0),
                      ' · AW',
                      ' ',
                      Y.evs.animalWelfare.toFixed(0),
                      ' · GCR ',
                      Y.evs.gcr.toFixed(0),
                    ],
                  }),
                ],
              }),
              s.jsxs('div', {
                className: Z.resultCard,
                children: [
                  s.jsxs('div', {
                    className: Z.cardHeader,
                    children: [
                      s.jsx('div', { className: `${Z.cardIcon} ${Z.parliament}`, children: '🏛️' }),
                      s.jsxs('div', {
                        children: [
                          s.jsx('h3', { className: Z.cardTitle, children: 'Variance Voting' }),
                          s.jsx('p', {
                            className: Z.cardSubtitle,
                            children: 'Weighted worldview votes',
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx(mt, {
                    name: 'Global Health',
                    percentage: se.globalHealth,
                    originalPercentage: ye == null ? void 0 : ye.globalHealth,
                    color: 'var(--color-global-health)',
                    hasChanged: pe,
                  }),
                  s.jsx(mt, {
                    name: 'Animal Welfare',
                    percentage: se.animalWelfare,
                    originalPercentage: ye == null ? void 0 : ye.animalWelfare,
                    color: 'var(--color-animal-welfare)',
                    hasChanged: pe,
                  }),
                  s.jsx(mt, {
                    name: 'GCR (Future)',
                    percentage: se.gcr,
                    originalPercentage: ye == null ? void 0 : ye.gcr,
                    color: 'var(--color-gcr)',
                    hasChanged: pe,
                  }),
                  s.jsx('div', {
                    className: Z.cardFooter,
                    children: '81 worldviews vote for preferred cause',
                  }),
                ],
              }),
              s.jsxs('div', {
                className: Z.resultCard,
                children: [
                  s.jsxs('div', {
                    className: Z.cardHeader,
                    children: [
                      s.jsx('div', { className: `${Z.cardIcon} ${Z.merged}`, children: '🤝' }),
                      s.jsxs('div', {
                        children: [
                          s.jsx('h3', { className: Z.cardTitle, children: 'Merged Favorites' }),
                          s.jsx('p', {
                            className: Z.cardSubtitle,
                            children: 'Budget shares to favorites',
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx(mt, {
                    name: 'Global Health',
                    percentage: ae.globalHealth,
                    originalPercentage: b == null ? void 0 : b.globalHealth,
                    color: 'var(--color-global-health)',
                    hasChanged: pe,
                  }),
                  s.jsx(mt, {
                    name: 'Animal Welfare',
                    percentage: ae.animalWelfare,
                    originalPercentage: b == null ? void 0 : b.animalWelfare,
                    color: 'var(--color-animal-welfare)',
                    hasChanged: pe,
                  }),
                  s.jsx(mt, {
                    name: 'GCR (Future)',
                    percentage: ae.gcr,
                    originalPercentage: b == null ? void 0 : b.gcr,
                    color: 'var(--color-gcr)',
                    hasChanged: pe,
                  }),
                  s.jsx('div', {
                    className: Z.cardFooter,
                    children: 'Each worldview allocates its budget share',
                  }),
                ],
              }),
              s.jsxs('div', {
                className: Z.resultCard,
                children: [
                  s.jsxs('div', {
                    className: Z.cardHeader,
                    children: [
                      s.jsx('div', { className: `${Z.cardIcon} ${Z.maximin}`, children: '⚖️' }),
                      s.jsxs('div', {
                        children: [
                          s.jsx('h3', {
                            className: Z.cardTitle,
                            children: 'Maximin (Egalitarian)',
                          }),
                          s.jsx('p', {
                            className: Z.cardSubtitle,
                            children: 'Fairest to all worldviews',
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx(mt, {
                    name: 'Global Health',
                    percentage: Ee.globalHealth,
                    originalPercentage: oe == null ? void 0 : oe.globalHealth,
                    color: 'var(--color-global-health)',
                    hasChanged: pe,
                  }),
                  s.jsx(mt, {
                    name: 'Animal Welfare',
                    percentage: Ee.animalWelfare,
                    originalPercentage: oe == null ? void 0 : oe.animalWelfare,
                    color: 'var(--color-animal-welfare)',
                    hasChanged: pe,
                  }),
                  s.jsx(mt, {
                    name: 'GCR (Future)',
                    percentage: Ee.gcr,
                    originalPercentage: oe == null ? void 0 : oe.gcr,
                    color: 'var(--color-gcr)',
                    hasChanged: pe,
                  }),
                  s.jsx('div', {
                    className: Z.cardFooter,
                    children: 'Maximizes minimum worldview utility',
                  }),
                ],
              }),
            ],
          }),
          s.jsxs('div', {
            className: Z.adjustPanel,
            children: [
              s.jsxs('div', {
                className: Z.adjustHeader,
                children: [
                  s.jsx('span', { className: Z.adjustTitle, children: '🎛️ Adjust Your Credences' }),
                  pe &&
                    s.jsxs('button', {
                      onClick: Ie,
                      className: Z.resetAllButton,
                      children: [s.jsx(ac, { size: 10 }), ' Reset All'],
                    }),
                ],
              }),
              s.jsxs('div', {
                className: Z.panelList,
                children: [
                  s.jsx(Zl, {
                    title: 'Animal Values',
                    icon: '🐾',
                    credences: g,
                    setCredences: _,
                    originalCredences: y,
                    configs: sp,
                    isExpanded: X === 'animals',
                    onToggle: () => ne(X === 'animals' ? null : 'animals'),
                    lockedKey: N,
                    setLockedKey: H,
                  }),
                  s.jsx(Zl, {
                    title: 'Future Values',
                    icon: '⏳',
                    credences: f,
                    setCredences: j,
                    originalCredences: D,
                    configs: ap,
                    isExpanded: X === 'future',
                    onToggle: () => ne(X === 'future' ? null : 'future'),
                    lockedKey: Q,
                    setLockedKey: G,
                  }),
                  s.jsx(Zl, {
                    title: 'Scale Sensitivity',
                    icon: '📊',
                    credences: v,
                    setCredences: L,
                    originalCredences: E,
                    configs: cp,
                    isExpanded: X === 'scale',
                    onToggle: () => ne(X === 'scale' ? null : 'scale'),
                    lockedKey: B,
                    setLockedKey: K,
                  }),
                  s.jsx(Zl, {
                    title: 'Evidence Preference',
                    icon: '🔬',
                    credences: T,
                    setCredences: U,
                    originalCredences: z,
                    configs: fp,
                    isExpanded: X === 'certainty',
                    onToggle: () => ne(X === 'certainty' ? null : 'certainty'),
                    lockedKey: fe,
                    setLockedKey: ue,
                  }),
                ],
              }),
            ],
          }),
          s.jsxs('div', {
            className: Z.backButtonContainer,
            children: [
              s.jsx('button', { onClick: ge, className: Z.backButton, children: '← Back to Quiz' }),
              (P = eu.ui) == null ? void 0 : P.resetButton,
            ],
          }),
        ],
      }),
    });
  },
  cm = '_debugButton_r75jf_4',
  fm = '_overlay_r75jf_22',
  dm = '_modal_r75jf_35',
  pm = '_header_r75jf_46',
  mm = '_closeButton_r75jf_60',
  hm = '_content_r75jf_73',
  vm = '_section_r75jf_79',
  ym = '_causeBlock_r75jf_93',
  gm = '_fieldRow_r75jf_106',
  xm = '_checkboxRow_r75jf_130',
  Sm = '_multiplierGroup_r75jf_149',
  wm = '_multiplierRow_r75jf_159',
  _m = '_footer_r75jf_183',
  km = '_saveButton_r75jf_190',
  Oe = {
    debugButton: cm,
    overlay: fm,
    modal: dm,
    header: pm,
    closeButton: mm,
    content: hm,
    section: vm,
    causeBlock: ym,
    fieldRow: gm,
    checkboxRow: xm,
    multiplierGroup: Sm,
    multiplierRow: wm,
    footer: _m,
    saveButton: km,
  },
  Cm = ({ onConfigChange: g }) => {
    const [_, f] = he.useState(!1),
      [j, v] = he.useState({
        causes: JSON.parse(JSON.stringify(Fr)),
        animalMultipliers: { ...Dr },
        futureMultipliers: { ...Ar },
        scaleMultipliers: { ...Br },
        certaintyMultipliers: { ...Ur },
      }),
      L = (y, D, E) => {
        v((z) => ({
          ...z,
          causes: {
            ...z.causes,
            [y]: { ...z.causes[y], [D]: D === 'name' || typeof E == 'boolean' ? E : Number(E) },
          },
        }));
      },
      T = (y, D, E) => {
        v((z) => ({ ...z, [y]: { ...z[y], [D]: Number(E) } }));
      },
      U = () => {
        (g(j), f(!1));
      };
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx('button', {
          className: Oe.debugButton,
          onClick: () => f(!0),
          title: 'Debug Settings',
          children: 'Settings',
        }),
        _ &&
          s.jsx('div', {
            className: Oe.overlay,
            onClick: () => f(!1),
            children: s.jsxs('div', {
              className: Oe.modal,
              onClick: (y) => y.stopPropagation(),
              children: [
                s.jsxs('div', {
                  className: Oe.header,
                  children: [
                    s.jsx('h2', { children: 'Calculation Debugger' }),
                    s.jsx('button', {
                      className: Oe.closeButton,
                      onClick: () => f(!1),
                      children: 'x',
                    }),
                  ],
                }),
                s.jsxs('div', {
                  className: Oe.content,
                  children: [
                    s.jsxs('section', {
                      className: Oe.section,
                      children: [
                        s.jsx('h3', { children: 'CAUSES' }),
                        Object.entries(j.causes).map(([y, D]) =>
                          s.jsxs(
                            'div',
                            {
                              className: Oe.causeBlock,
                              children: [
                                s.jsx('h4', { children: D.name }),
                                s.jsxs('div', {
                                  className: Oe.fieldRow,
                                  children: [
                                    s.jsxs('label', {
                                      children: [
                                        'Points:',
                                        s.jsx('input', {
                                          type: 'number',
                                          value: D.points,
                                          onChange: (E) => L(y, 'points', E.target.value),
                                        }),
                                      ],
                                    }),
                                    s.jsxs('label', {
                                      children: [
                                        'Scale Factor:',
                                        s.jsx('input', {
                                          type: 'number',
                                          value: D.scaleFactor,
                                          onChange: (E) => L(y, 'scaleFactor', E.target.value),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                s.jsxs('div', {
                                  className: Oe.checkboxRow,
                                  children: [
                                    s.jsxs('label', {
                                      children: [
                                        s.jsx('input', {
                                          type: 'checkbox',
                                          checked: D.helpsAnimals,
                                          onChange: (E) => L(y, 'helpsAnimals', E.target.checked),
                                        }),
                                        'Helps Animals',
                                      ],
                                    }),
                                    s.jsxs('label', {
                                      children: [
                                        s.jsx('input', {
                                          type: 'checkbox',
                                          checked: D.helpsFutureHumans,
                                          onChange: (E) =>
                                            L(y, 'helpsFutureHumans', E.target.checked),
                                        }),
                                        'Helps Future Humans',
                                      ],
                                    }),
                                    s.jsxs('label', {
                                      children: [
                                        s.jsx('input', {
                                          type: 'checkbox',
                                          checked: D.isSpeculative,
                                          onChange: (E) => L(y, 'isSpeculative', E.target.checked),
                                        }),
                                        'Is Speculative',
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            y
                          )
                        ),
                      ],
                    }),
                    s.jsxs('section', {
                      className: Oe.section,
                      children: [
                        s.jsx('h3', { children: 'MULTIPLIERS' }),
                        s.jsxs('div', {
                          className: Oe.multiplierGroup,
                          children: [
                            s.jsx('h4', { children: 'Animal' }),
                            s.jsxs('div', {
                              className: Oe.multiplierRow,
                              children: [
                                s.jsxs('label', {
                                  children: [
                                    'Equal:',
                                    s.jsx('input', {
                                      type: 'number',
                                      step: '0.01',
                                      value: j.animalMultipliers.equal,
                                      onChange: (y) =>
                                        T('animalMultipliers', 'equal', y.target.value),
                                    }),
                                  ],
                                }),
                                s.jsxs('label', {
                                  children: [
                                    '10x:',
                                    s.jsx('input', {
                                      type: 'number',
                                      step: '0.01',
                                      value: j.animalMultipliers['10x'],
                                      onChange: (y) =>
                                        T('animalMultipliers', '10x', y.target.value),
                                    }),
                                  ],
                                }),
                                s.jsxs('label', {
                                  children: [
                                    '100x:',
                                    s.jsx('input', {
                                      type: 'number',
                                      step: '0.01',
                                      value: j.animalMultipliers['100x'],
                                      onChange: (y) =>
                                        T('animalMultipliers', '100x', y.target.value),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        s.jsxs('div', {
                          className: Oe.multiplierGroup,
                          children: [
                            s.jsx('h4', { children: 'Future' }),
                            s.jsxs('div', {
                              className: Oe.multiplierRow,
                              children: [
                                s.jsxs('label', {
                                  children: [
                                    'Equal:',
                                    s.jsx('input', {
                                      type: 'number',
                                      step: '0.01',
                                      value: j.futureMultipliers.equal,
                                      onChange: (y) =>
                                        T('futureMultipliers', 'equal', y.target.value),
                                    }),
                                  ],
                                }),
                                s.jsxs('label', {
                                  children: [
                                    '10x:',
                                    s.jsx('input', {
                                      type: 'number',
                                      step: '0.01',
                                      value: j.futureMultipliers['10x'],
                                      onChange: (y) =>
                                        T('futureMultipliers', '10x', y.target.value),
                                    }),
                                  ],
                                }),
                                s.jsxs('label', {
                                  children: [
                                    '100x:',
                                    s.jsx('input', {
                                      type: 'number',
                                      step: '0.01',
                                      value: j.futureMultipliers['100x'],
                                      onChange: (y) =>
                                        T('futureMultipliers', '100x', y.target.value),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        s.jsxs('div', {
                          className: Oe.multiplierGroup,
                          children: [
                            s.jsx('h4', { children: 'Scale (exponents)' }),
                            s.jsxs('div', {
                              className: Oe.multiplierRow,
                              children: [
                                s.jsxs('label', {
                                  children: [
                                    'Equal:',
                                    s.jsx('input', {
                                      type: 'number',
                                      step: '0.1',
                                      value: j.scaleMultipliers.equal,
                                      onChange: (y) =>
                                        T('scaleMultipliers', 'equal', y.target.value),
                                    }),
                                  ],
                                }),
                                s.jsxs('label', {
                                  children: [
                                    '10x:',
                                    s.jsx('input', {
                                      type: 'number',
                                      step: '0.1',
                                      value: j.scaleMultipliers['10x'],
                                      onChange: (y) => T('scaleMultipliers', '10x', y.target.value),
                                    }),
                                  ],
                                }),
                                s.jsxs('label', {
                                  children: [
                                    '100x:',
                                    s.jsx('input', {
                                      type: 'number',
                                      step: '0.1',
                                      value: j.scaleMultipliers['100x'],
                                      onChange: (y) =>
                                        T('scaleMultipliers', '100x', y.target.value),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        s.jsxs('div', {
                          className: Oe.multiplierGroup,
                          children: [
                            s.jsx('h4', { children: 'Certainty' }),
                            s.jsxs('div', {
                              className: Oe.multiplierRow,
                              children: [
                                s.jsxs('label', {
                                  children: [
                                    'Equal:',
                                    s.jsx('input', {
                                      type: 'number',
                                      step: '0.01',
                                      value: j.certaintyMultipliers.equal,
                                      onChange: (y) =>
                                        T('certaintyMultipliers', 'equal', y.target.value),
                                    }),
                                  ],
                                }),
                                s.jsxs('label', {
                                  children: [
                                    '10x:',
                                    s.jsx('input', {
                                      type: 'number',
                                      step: '0.01',
                                      value: j.certaintyMultipliers['10x'],
                                      onChange: (y) =>
                                        T('certaintyMultipliers', '10x', y.target.value),
                                    }),
                                  ],
                                }),
                                s.jsxs('label', {
                                  children: [
                                    '100x:',
                                    s.jsx('input', {
                                      type: 'number',
                                      step: '0.01',
                                      value: j.certaintyMultipliers['100x'],
                                      onChange: (y) =>
                                        T('certaintyMultipliers', '100x', y.target.value),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsx('div', {
                  className: Oe.footer,
                  children: s.jsx('button', {
                    className: Oe.saveButton,
                    onClick: U,
                    children: 'Save',
                  }),
                }),
              ],
            }),
          }),
      ],
    });
  },
  Em = () => {
    const [g, _] = he.useState(Ue.WELCOME),
      [f, j] = he.useState({ ...ln }),
      [v, L] = he.useState({ ...ln }),
      [T, U] = he.useState({ ...ln }),
      [y, D] = he.useState({ ...ln }),
      [E, z] = he.useState(null),
      [N, H] = he.useState(null),
      [Q, G] = he.useState(null),
      [B, K] = he.useState(null),
      [fe, ue] = he.useState(null),
      [X, ne] = he.useState(on.OPTIONS),
      [Y, se] = he.useState(on.OPTIONS),
      [ae, Ee] = he.useState(on.OPTIONS),
      [de, ye] = he.useState(on.OPTIONS),
      [b, oe] = he.useState(null),
      [pe, Ie] = he.useState(null),
      [Fe, ge] = he.useState(null),
      [P, W] = he.useState(null),
      [O, d] = he.useState(null),
      x = rc(f, v, T, y, O),
      J = lc(f, v, T, y, O),
      ee = oc(f, v, T, y, O),
      re = ic(f, v, T, y, O),
      le = E ? rc(E, N, Q, B, O) : null,
      xe = E ? lc(E, N, Q, B, O) : null,
      me = E ? oc(E, N, Q, B, O) : null,
      Se = E ? ic(E, N, Q, B, O) : null,
      qe =
        E &&
        (JSON.stringify(f) !== JSON.stringify(E) ||
          JSON.stringify(v) !== JSON.stringify(N) ||
          JSON.stringify(T) !== JSON.stringify(Q) ||
          JSON.stringify(y) !== JSON.stringify(B)),
      wn = () => {
        (j({ ...E }), L({ ...N }), U({ ...Q }), D({ ...B }));
      },
      Hr = () => {
        (j({ ...ln }),
          L({ ...ln }),
          U({ ...ln }),
          D({ ...ln }),
          z(null),
          H(null),
          G(null),
          K(null),
          ne(on.OPTIONS),
          se(on.OPTIONS),
          Ee(on.OPTIONS),
          ye(on.OPTIONS),
          oe(null),
          Ie(null),
          ge(null),
          W(null),
          ue(null),
          _(Ue.WELCOME));
      },
      _n = () => {
        (E || (z({ ...f }), H({ ...v }), G({ ...T }), K({ ...y })), _(Ue.RESULTS));
      };
    let ht = null;
    return (
      g === Ue.WELCOME
        ? (ht = s.jsx(Ed, { onStart: () => _(Ue.ANIMALS) }))
        : g === Ue.ANIMALS
          ? (ht = s.jsx(Jl, {
              categoryLabel: 'Moral Weights',
              categoryColor: '#81B29A',
              questionNumber: 'Question 1 of 4',
              progressPercentage: 25,
              heading: 'How do you value animal welfare relative to human welfare?',
              instructionsOptions:
                'Choose the view that best represents your position, or use "Custom Mix" to split your credence.',
              instructionsSliders:
                'Distribute your credence (confidence) across these views. Sliders auto-balance to 100%.',
              options: lp,
              credences: f,
              setCredences: j,
              inputMode: X,
              setInputMode: ne,
              lockedKey: b,
              setLockedKey: oe,
              onBack: () => _(Ue.WELCOME),
              onContinue: () => _(Ue.FUTURE),
              adjustCredences: Ir,
            }))
          : g === Ue.FUTURE
            ? (ht = s.jsx(Jl, {
                categoryLabel: 'Time Preference',
                categoryColor: '#81B29A',
                questionNumber: 'Question 2 of 4',
                progressPercentage: 50,
                heading: 'How do you value future human welfare relative to current human welfare?',
                instructionsOptions:
                  'Choose the view that best represents your position, or use "Custom Mix" to split your credence.',
                instructionsSliders:
                  'Distribute your credence across these views. Sliders auto-balance to 100%.',
                options: op,
                credences: v,
                setCredences: L,
                inputMode: Y,
                setInputMode: se,
                lockedKey: pe,
                setLockedKey: Ie,
                onBack: () => _(Ue.ANIMALS),
                onContinue: () => _(Ue.SCALE),
                adjustCredences: Ir,
              }))
            : g === Ue.SCALE
              ? (ht = s.jsx(Jl, {
                  categoryLabel: 'Scale Sensitivity',
                  categoryColor: '#98C1D9',
                  questionNumber: 'Question 3 of 4',
                  progressPercentage: 75,
                  heading: 'How much does the scale of impact matter?',
                  instructionsOptions:
                    'Choose the view that best represents your position, or use "Custom Mix" to split your credence.',
                  instructionsSliders:
                    'Distribute your credence across these views. Sliders auto-balance to 100%.',
                  options: ip,
                  credences: T,
                  setCredences: U,
                  inputMode: ae,
                  setInputMode: Ee,
                  lockedKey: Fe,
                  setLockedKey: ge,
                  onBack: () => _(Ue.FUTURE),
                  onContinue: () => _(Ue.CERTAINTY),
                  adjustCredences: Ir,
                }))
              : g === Ue.CERTAINTY
                ? (ht = s.jsx(Jl, {
                    categoryLabel: 'Evidence Preference',
                    categoryColor: '#E07A5F',
                    questionNumber: 'Question 4 of 4',
                    progressPercentage: 100,
                    heading: 'How much do you value proven interventions over speculative ones?',
                    instructionsOptions:
                      'Choose the view that best represents your position, or use "Custom Mix" to split your credence.',
                    instructionsSliders:
                      'Distribute your credence across these views. Sliders auto-balance to 100%.',
                    options: up,
                    credences: y,
                    setCredences: D,
                    inputMode: de,
                    setInputMode: ye,
                    lockedKey: P,
                    setLockedKey: W,
                    onBack: () => _(Ue.SCALE),
                    onContinue: _n,
                    adjustCredences: Ir,
                  }))
                : g === Ue.RESULTS &&
                  (ht = s.jsx(am, {
                    animalCredences: f,
                    setAnimalCredences: j,
                    futureCredences: v,
                    setFutureCredences: L,
                    scaleCredences: T,
                    setScaleCredences: U,
                    certaintyCredences: y,
                    setCertaintyCredences: D,
                    originalAnimalCredences: E,
                    originalFutureCredences: N,
                    originalScaleCredences: Q,
                    originalCertaintyCredences: B,
                    animalLockedKey: b,
                    setAnimalLockedKey: oe,
                    futureLockedKey: pe,
                    setFutureLockedKey: Ie,
                    scaleLockedKey: Fe,
                    setScaleLockedKey: ge,
                    certaintyLockedKey: P,
                    setCertaintyLockedKey: W,
                    expandedPanel: fe,
                    setExpandedPanel: ue,
                    maxEVResults: x,
                    parliamentResults: J,
                    mergedFavoritesResults: ee,
                    maximinResults: re,
                    originalMaxEV: le,
                    originalParliament: xe,
                    originalMergedFavorites: me,
                    originalMaximin: Se,
                    hasChanged: qe,
                    onResetAll: wn,
                    onResetQuiz: Hr,
                    onBack: () => _(Ue.CERTAINTY),
                  })),
      s.jsxs(s.Fragment, { children: [ht, s.jsx(Cm, { onConfigChange: d })] })
    );
  };
function Nm() {
  return s.jsx(Em, {});
}
vd.createRoot(document.getElementById('root')).render(
  s.jsx(he.StrictMode, { children: s.jsx(Nm, {}) })
);
