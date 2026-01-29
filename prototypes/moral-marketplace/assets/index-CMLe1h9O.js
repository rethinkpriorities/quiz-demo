(function () {
  const u = document.createElement('link').relList;
  if (u && u.supports && u.supports('modulepreload')) return;
  for (const _ of document.querySelectorAll('link[rel="modulepreload"]')) v(_);
  new MutationObserver((_) => {
    for (const k of _)
      if (k.type === 'childList')
        for (const x of k.addedNodes) x.tagName === 'LINK' && x.rel === 'modulepreload' && v(x);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(_) {
    const k = {};
    return (
      _.integrity && (k.integrity = _.integrity),
      _.referrerPolicy && (k.referrerPolicy = _.referrerPolicy),
      _.crossOrigin === 'use-credentials'
        ? (k.credentials = 'include')
        : _.crossOrigin === 'anonymous'
          ? (k.credentials = 'omit')
          : (k.credentials = 'same-origin'),
      k
    );
  }
  function v(_) {
    if (_.ep) return;
    _.ep = !0;
    const k = a(_);
    fetch(_.href, k);
  }
})();
var as = { exports: {} },
  Gr = {},
  cs = { exports: {} },
  se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yc;
function bf() {
  if (yc) return se;
  yc = 1;
  var c = Symbol.for('react.element'),
    u = Symbol.for('react.portal'),
    a = Symbol.for('react.fragment'),
    v = Symbol.for('react.strict_mode'),
    _ = Symbol.for('react.profiler'),
    k = Symbol.for('react.provider'),
    x = Symbol.for('react.context'),
    E = Symbol.for('react.forward_ref'),
    y = Symbol.for('react.suspense'),
    S = Symbol.for('react.memo'),
    C = Symbol.for('react.lazy'),
    T = Symbol.iterator;
  function R(m) {
    return m === null || typeof m != 'object'
      ? null
      : ((m = (T && m[T]) || m['@@iterator']), typeof m == 'function' ? m : null);
  }
  var W = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    V = Object.assign,
    A = {};
  function O(m, N, ne) {
    ((this.props = m), (this.context = N), (this.refs = A), (this.updater = ne || W));
  }
  ((O.prototype.isReactComponent = {}),
    (O.prototype.setState = function (m, N) {
      if (typeof m != 'object' && typeof m != 'function' && m != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, m, N, 'setState');
    }),
    (O.prototype.forceUpdate = function (m) {
      this.updater.enqueueForceUpdate(this, m, 'forceUpdate');
    }));
  function Y() {}
  Y.prototype = O.prototype;
  function ue(m, N, ne) {
    ((this.props = m), (this.context = N), (this.refs = A), (this.updater = ne || W));
  }
  var K = (ue.prototype = new Y());
  ((K.constructor = ue), V(K, O.prototype), (K.isPureReactComponent = !0));
  var D = Array.isArray,
    de = Object.prototype.hasOwnProperty,
    ae = { current: null },
    we = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ve(m, N, ne) {
    var re,
      Z = {},
      oe = null,
      q = null;
    if (N != null)
      for (re in (N.ref !== void 0 && (q = N.ref), N.key !== void 0 && (oe = '' + N.key), N))
        de.call(N, re) && !we.hasOwnProperty(re) && (Z[re] = N[re]);
    var b = arguments.length - 2;
    if (b === 1) Z.children = ne;
    else if (1 < b) {
      for (var me = Array(b), Te = 0; Te < b; Te++) me[Te] = arguments[Te + 2];
      Z.children = me;
    }
    if (m && m.defaultProps)
      for (re in ((b = m.defaultProps), b)) Z[re] === void 0 && (Z[re] = b[re]);
    return { $$typeof: c, type: m, key: oe, ref: q, props: Z, _owner: ae.current };
  }
  function nt(m, N) {
    return { $$typeof: c, type: m.type, key: N, ref: m.ref, props: m.props, _owner: m._owner };
  }
  function ct(m) {
    return typeof m == 'object' && m !== null && m.$$typeof === c;
  }
  function Ct(m) {
    var N = { '=': '=0', ':': '=2' };
    return (
      '$' +
      m.replace(/[=:]/g, function (ne) {
        return N[ne];
      })
    );
  }
  var ze = /\/+/g;
  function De(m, N) {
    return typeof m == 'object' && m !== null && m.key != null ? Ct('' + m.key) : N.toString(36);
  }
  function Re(m, N, ne, re, Z) {
    var oe = typeof m;
    (oe === 'undefined' || oe === 'boolean') && (m = null);
    var q = !1;
    if (m === null) q = !0;
    else
      switch (oe) {
        case 'string':
        case 'number':
          q = !0;
          break;
        case 'object':
          switch (m.$$typeof) {
            case c:
            case u:
              q = !0;
          }
      }
    if (q)
      return (
        (q = m),
        (Z = Z(q)),
        (m = re === '' ? '.' + De(q, 0) : re),
        D(Z)
          ? ((ne = ''),
            m != null && (ne = m.replace(ze, '$&/') + '/'),
            Re(Z, N, ne, '', function (Te) {
              return Te;
            }))
          : Z != null &&
            (ct(Z) &&
              (Z = nt(
                Z,
                ne +
                  (!Z.key || (q && q.key === Z.key) ? '' : ('' + Z.key).replace(ze, '$&/') + '/') +
                  m
              )),
            N.push(Z)),
        1
      );
    if (((q = 0), (re = re === '' ? '.' : re + ':'), D(m)))
      for (var b = 0; b < m.length; b++) {
        oe = m[b];
        var me = re + De(oe, b);
        q += Re(oe, N, ne, me, Z);
      }
    else if (((me = R(m)), typeof me == 'function'))
      for (m = me.call(m), b = 0; !(oe = m.next()).done; )
        ((oe = oe.value), (me = re + De(oe, b++)), (q += Re(oe, N, ne, me, Z)));
    else if (oe === 'object')
      throw (
        (N = String(m)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (N === '[object Object]' ? 'object with keys {' + Object.keys(m).join(', ') + '}' : N) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return q;
  }
  function Je(m, N, ne) {
    if (m == null) return m;
    var re = [],
      Z = 0;
    return (
      Re(m, re, '', '', function (oe) {
        return N.call(ne, oe, Z++);
      }),
      re
    );
  }
  function $e(m) {
    if (m._status === -1) {
      var N = m._result;
      ((N = N()),
        N.then(
          function (ne) {
            (m._status === 0 || m._status === -1) && ((m._status = 1), (m._result = ne));
          },
          function (ne) {
            (m._status === 0 || m._status === -1) && ((m._status = 2), (m._result = ne));
          }
        ),
        m._status === -1 && ((m._status = 0), (m._result = N)));
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var fe = { current: null },
    M = { transition: null },
    X = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: M, ReactCurrentOwner: ae };
  function F() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (se.Children = {
      map: Je,
      forEach: function (m, N, ne) {
        Je(
          m,
          function () {
            N.apply(this, arguments);
          },
          ne
        );
      },
      count: function (m) {
        var N = 0;
        return (
          Je(m, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (m) {
        return (
          Je(m, function (N) {
            return N;
          }) || []
        );
      },
      only: function (m) {
        if (!ct(m))
          throw Error('React.Children.only expected to receive a single React element child.');
        return m;
      },
    }),
    (se.Component = O),
    (se.Fragment = a),
    (se.Profiler = _),
    (se.PureComponent = ue),
    (se.StrictMode = v),
    (se.Suspense = y),
    (se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X),
    (se.act = F),
    (se.cloneElement = function (m, N, ne) {
      if (m == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + m + '.'
        );
      var re = V({}, m.props),
        Z = m.key,
        oe = m.ref,
        q = m._owner;
      if (N != null) {
        if (
          (N.ref !== void 0 && ((oe = N.ref), (q = ae.current)),
          N.key !== void 0 && (Z = '' + N.key),
          m.type && m.type.defaultProps)
        )
          var b = m.type.defaultProps;
        for (me in N)
          de.call(N, me) &&
            !we.hasOwnProperty(me) &&
            (re[me] = N[me] === void 0 && b !== void 0 ? b[me] : N[me]);
      }
      var me = arguments.length - 2;
      if (me === 1) re.children = ne;
      else if (1 < me) {
        b = Array(me);
        for (var Te = 0; Te < me; Te++) b[Te] = arguments[Te + 2];
        re.children = b;
      }
      return { $$typeof: c, type: m.type, key: Z, ref: oe, props: re, _owner: q };
    }),
    (se.createContext = function (m) {
      return (
        (m = {
          $$typeof: x,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (m.Provider = { $$typeof: k, _context: m }),
        (m.Consumer = m)
      );
    }),
    (se.createElement = ve),
    (se.createFactory = function (m) {
      var N = ve.bind(null, m);
      return ((N.type = m), N);
    }),
    (se.createRef = function () {
      return { current: null };
    }),
    (se.forwardRef = function (m) {
      return { $$typeof: E, render: m };
    }),
    (se.isValidElement = ct),
    (se.lazy = function (m) {
      return { $$typeof: C, _payload: { _status: -1, _result: m }, _init: $e };
    }),
    (se.memo = function (m, N) {
      return { $$typeof: S, type: m, compare: N === void 0 ? null : N };
    }),
    (se.startTransition = function (m) {
      var N = M.transition;
      M.transition = {};
      try {
        m();
      } finally {
        M.transition = N;
      }
    }),
    (se.unstable_act = F),
    (se.useCallback = function (m, N) {
      return fe.current.useCallback(m, N);
    }),
    (se.useContext = function (m) {
      return fe.current.useContext(m);
    }),
    (se.useDebugValue = function () {}),
    (se.useDeferredValue = function (m) {
      return fe.current.useDeferredValue(m);
    }),
    (se.useEffect = function (m, N) {
      return fe.current.useEffect(m, N);
    }),
    (se.useId = function () {
      return fe.current.useId();
    }),
    (se.useImperativeHandle = function (m, N, ne) {
      return fe.current.useImperativeHandle(m, N, ne);
    }),
    (se.useInsertionEffect = function (m, N) {
      return fe.current.useInsertionEffect(m, N);
    }),
    (se.useLayoutEffect = function (m, N) {
      return fe.current.useLayoutEffect(m, N);
    }),
    (se.useMemo = function (m, N) {
      return fe.current.useMemo(m, N);
    }),
    (se.useReducer = function (m, N, ne) {
      return fe.current.useReducer(m, N, ne);
    }),
    (se.useRef = function (m) {
      return fe.current.useRef(m);
    }),
    (se.useState = function (m) {
      return fe.current.useState(m);
    }),
    (se.useSyncExternalStore = function (m, N, ne) {
      return fe.current.useSyncExternalStore(m, N, ne);
    }),
    (se.useTransition = function () {
      return fe.current.useTransition();
    }),
    (se.version = '18.3.1'),
    se
  );
}
var wc;
function xs() {
  return (wc || ((wc = 1), (cs.exports = bf())), cs.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _c;
function Gf() {
  if (_c) return Gr;
  _c = 1;
  var c = xs(),
    u = Symbol.for('react.element'),
    a = Symbol.for('react.fragment'),
    v = Object.prototype.hasOwnProperty,
    _ = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(E, y, S) {
    var C,
      T = {},
      R = null,
      W = null;
    (S !== void 0 && (R = '' + S),
      y.key !== void 0 && (R = '' + y.key),
      y.ref !== void 0 && (W = y.ref));
    for (C in y) v.call(y, C) && !k.hasOwnProperty(C) && (T[C] = y[C]);
    if (E && E.defaultProps) for (C in ((y = E.defaultProps), y)) T[C] === void 0 && (T[C] = y[C]);
    return { $$typeof: u, type: E, key: R, ref: W, props: T, _owner: _.current };
  }
  return ((Gr.Fragment = a), (Gr.jsx = x), (Gr.jsxs = x), Gr);
}
var kc;
function Kf() {
  return (kc || ((kc = 1), (as.exports = Gf())), as.exports);
}
var s = Kf(),
  z = xs(),
  ai = {},
  ds = { exports: {} },
  ut = {},
  fs = { exports: {} },
  ps = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sc;
function Yf() {
  return (
    Sc ||
      ((Sc = 1),
      (function (c) {
        function u(M, X) {
          var F = M.length;
          M.push(X);
          e: for (; 0 < F; ) {
            var m = (F - 1) >>> 1,
              N = M[m];
            if (0 < _(N, X)) ((M[m] = X), (M[F] = N), (F = m));
            else break e;
          }
        }
        function a(M) {
          return M.length === 0 ? null : M[0];
        }
        function v(M) {
          if (M.length === 0) return null;
          var X = M[0],
            F = M.pop();
          if (F !== X) {
            M[0] = F;
            e: for (var m = 0, N = M.length, ne = N >>> 1; m < ne; ) {
              var re = 2 * (m + 1) - 1,
                Z = M[re],
                oe = re + 1,
                q = M[oe];
              if (0 > _(Z, F))
                oe < N && 0 > _(q, Z)
                  ? ((M[m] = q), (M[oe] = F), (m = oe))
                  : ((M[m] = Z), (M[re] = F), (m = re));
              else if (oe < N && 0 > _(q, F)) ((M[m] = q), (M[oe] = F), (m = oe));
              else break e;
            }
          }
          return X;
        }
        function _(M, X) {
          var F = M.sortIndex - X.sortIndex;
          return F !== 0 ? F : M.id - X.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var k = performance;
          c.unstable_now = function () {
            return k.now();
          };
        } else {
          var x = Date,
            E = x.now();
          c.unstable_now = function () {
            return x.now() - E;
          };
        }
        var y = [],
          S = [],
          C = 1,
          T = null,
          R = 3,
          W = !1,
          V = !1,
          A = !1,
          O = typeof setTimeout == 'function' ? setTimeout : null,
          Y = typeof clearTimeout == 'function' ? clearTimeout : null,
          ue = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function K(M) {
          for (var X = a(S); X !== null; ) {
            if (X.callback === null) v(S);
            else if (X.startTime <= M) (v(S), (X.sortIndex = X.expirationTime), u(y, X));
            else break;
            X = a(S);
          }
        }
        function D(M) {
          if (((A = !1), K(M), !V))
            if (a(y) !== null) ((V = !0), $e(de));
            else {
              var X = a(S);
              X !== null && fe(D, X.startTime - M);
            }
        }
        function de(M, X) {
          ((V = !1), A && ((A = !1), Y(ve), (ve = -1)), (W = !0));
          var F = R;
          try {
            for (K(X), T = a(y); T !== null && (!(T.expirationTime > X) || (M && !Ct())); ) {
              var m = T.callback;
              if (typeof m == 'function') {
                ((T.callback = null), (R = T.priorityLevel));
                var N = m(T.expirationTime <= X);
                ((X = c.unstable_now()),
                  typeof N == 'function' ? (T.callback = N) : T === a(y) && v(y),
                  K(X));
              } else v(y);
              T = a(y);
            }
            if (T !== null) var ne = !0;
            else {
              var re = a(S);
              (re !== null && fe(D, re.startTime - X), (ne = !1));
            }
            return ne;
          } finally {
            ((T = null), (R = F), (W = !1));
          }
        }
        var ae = !1,
          we = null,
          ve = -1,
          nt = 5,
          ct = -1;
        function Ct() {
          return !(c.unstable_now() - ct < nt);
        }
        function ze() {
          if (we !== null) {
            var M = c.unstable_now();
            ct = M;
            var X = !0;
            try {
              X = we(!0, M);
            } finally {
              X ? De() : ((ae = !1), (we = null));
            }
          } else ae = !1;
        }
        var De;
        if (typeof ue == 'function')
          De = function () {
            ue(ze);
          };
        else if (typeof MessageChannel < 'u') {
          var Re = new MessageChannel(),
            Je = Re.port2;
          ((Re.port1.onmessage = ze),
            (De = function () {
              Je.postMessage(null);
            }));
        } else
          De = function () {
            O(ze, 0);
          };
        function $e(M) {
          ((we = M), ae || ((ae = !0), De()));
        }
        function fe(M, X) {
          ve = O(function () {
            M(c.unstable_now());
          }, X);
        }
        ((c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (c.unstable_continueExecution = function () {
            V || W || ((V = !0), $e(de));
          }),
          (c.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (nt = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (c.unstable_getFirstCallbackNode = function () {
            return a(y);
          }),
          (c.unstable_next = function (M) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = R;
            }
            var F = R;
            R = X;
            try {
              return M();
            } finally {
              R = F;
            }
          }),
          (c.unstable_pauseExecution = function () {}),
          (c.unstable_requestPaint = function () {}),
          (c.unstable_runWithPriority = function (M, X) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var F = R;
            R = M;
            try {
              return X();
            } finally {
              R = F;
            }
          }),
          (c.unstable_scheduleCallback = function (M, X, F) {
            var m = c.unstable_now();
            switch (
              (typeof F == 'object' && F !== null
                ? ((F = F.delay), (F = typeof F == 'number' && 0 < F ? m + F : m))
                : (F = m),
              M)
            ) {
              case 1:
                var N = -1;
                break;
              case 2:
                N = 250;
                break;
              case 5:
                N = 1073741823;
                break;
              case 4:
                N = 1e4;
                break;
              default:
                N = 5e3;
            }
            return (
              (N = F + N),
              (M = {
                id: C++,
                callback: X,
                priorityLevel: M,
                startTime: F,
                expirationTime: N,
                sortIndex: -1,
              }),
              F > m
                ? ((M.sortIndex = F),
                  u(S, M),
                  a(y) === null && M === a(S) && (A ? (Y(ve), (ve = -1)) : (A = !0), fe(D, F - m)))
                : ((M.sortIndex = N), u(y, M), V || W || ((V = !0), $e(de))),
              M
            );
          }),
          (c.unstable_shouldYield = Ct),
          (c.unstable_wrapCallback = function (M) {
            var X = R;
            return function () {
              var F = R;
              R = X;
              try {
                return M.apply(this, arguments);
              } finally {
                R = F;
              }
            };
          }));
      })(ps)),
    ps
  );
}
var xc;
function Xf() {
  return (xc || ((xc = 1), (fs.exports = Yf())), fs.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cc;
function Zf() {
  if (Cc) return ut;
  Cc = 1;
  var c = xs(),
    u = Xf();
  function a(e) {
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
  var v = new Set(),
    _ = {};
  function k(e, t) {
    (x(e, t), x(e + 'Capture', t));
  }
  function x(e, t) {
    for (_[e] = t, e = 0; e < t.length; e++) v.add(t[e]);
  }
  var E = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    y = Object.prototype.hasOwnProperty,
    S =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    C = {},
    T = {};
  function R(e) {
    return y.call(T, e) ? !0 : y.call(C, e) ? !1 : S.test(e) ? (T[e] = !0) : ((C[e] = !0), !1);
  }
  function W(e, t, n, r) {
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
  function V(e, t, n, r) {
    if (t === null || typeof t > 'u' || W(e, t, n, r)) return !0;
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
  function A(e, t, n, r, l, i, o) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o));
  }
  var O = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      O[e] = new A(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      O[t] = new A(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      O[e] = new A(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        O[e] = new A(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        O[e] = new A(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      O[e] = new A(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      O[e] = new A(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      O[e] = new A(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      O[e] = new A(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var Y = /[\-:]([a-z])/g;
  function ue(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(Y, ue);
      O[t] = new A(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(Y, ue);
        O[t] = new A(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(Y, ue);
      O[t] = new A(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      O[e] = new A(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (O.xlinkHref = new A('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      O[e] = new A(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function K(e, t, n, r) {
    var l = O.hasOwnProperty(t) ? O[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (V(t, n, l, r) && (n = null),
      r || l === null
        ? R(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
  var D = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    de = Symbol.for('react.element'),
    ae = Symbol.for('react.portal'),
    we = Symbol.for('react.fragment'),
    ve = Symbol.for('react.strict_mode'),
    nt = Symbol.for('react.profiler'),
    ct = Symbol.for('react.provider'),
    Ct = Symbol.for('react.context'),
    ze = Symbol.for('react.forward_ref'),
    De = Symbol.for('react.suspense'),
    Re = Symbol.for('react.suspense_list'),
    Je = Symbol.for('react.memo'),
    $e = Symbol.for('react.lazy'),
    fe = Symbol.for('react.offscreen'),
    M = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (M && e[M]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var F = Object.assign,
    m;
  function N(e) {
    if (m === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        m = (t && t[1]) || '';
      }
    return (
      `
` +
      m +
      e
    );
  }
  var ne = !1;
  function re(e, t) {
    if (!e || ne) return '';
    ne = !0;
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
          } catch (w) {
            var r = w;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (w) {
            r = w;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (w) {
          r = w;
        }
        e();
      }
    } catch (w) {
      if (w && r && typeof w.stack == 'string') {
        for (
          var l = w.stack.split(`
`),
            i = r.stack.split(`
`),
            o = l.length - 1,
            d = i.length - 1;
          1 <= o && 0 <= d && l[o] !== i[d];
        )
          d--;
        for (; 1 <= o && 0 <= d; o--, d--)
          if (l[o] !== i[d]) {
            if (o !== 1 || d !== 1)
              do
                if ((o--, d--, 0 > d || l[o] !== i[d])) {
                  var f =
                    `
` + l[o].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      f.includes('<anonymous>') &&
                      (f = f.replace('<anonymous>', e.displayName)),
                    f
                  );
                }
              while (1 <= o && 0 <= d);
            break;
          }
      }
    } finally {
      ((ne = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? N(e) : '';
  }
  function Z(e) {
    switch (e.tag) {
      case 5:
        return N(e.type);
      case 16:
        return N('Lazy');
      case 13:
        return N('Suspense');
      case 19:
        return N('SuspenseList');
      case 0:
      case 2:
      case 15:
        return ((e = re(e.type, !1)), e);
      case 11:
        return ((e = re(e.type.render, !1)), e);
      case 1:
        return ((e = re(e.type, !0)), e);
      default:
        return '';
    }
  }
  function oe(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case we:
        return 'Fragment';
      case ae:
        return 'Portal';
      case nt:
        return 'Profiler';
      case ve:
        return 'StrictMode';
      case De:
        return 'Suspense';
      case Re:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Ct:
          return (e.displayName || 'Context') + '.Consumer';
        case ct:
          return (e._context.displayName || 'Context') + '.Provider';
        case ze:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case Je:
          return ((t = e.displayName || null), t !== null ? t : oe(e.type) || 'Memo');
        case $e:
          ((t = e._payload), (e = e._init));
          try {
            return oe(e(t));
          } catch {}
      }
    return null;
  }
  function q(e) {
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
        return oe(t);
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
  function b(e) {
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
  function me(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Te(e) {
    var t = me(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (o) {
            ((r = '' + o), i.call(this, o));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = '' + o;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Et(e) {
    e._valueTracker || (e._valueTracker = Te(e));
  }
  function B(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = me(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function le(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ht(e, t) {
    var n = t.checked;
    return F({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function vt(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = b(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      }));
  }
  function sr(e, t) {
    ((t = t.checked), t != null && K(e, 'checked', t, !1));
  }
  function Kt(e, t) {
    sr(e, t);
    var n = b(t.value),
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
      ? gi(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && gi(e, t.type, b(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function ur(e, t, n) {
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
  function gi(e, t, n) {
    (t !== 'number' || le(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var ar = Array.isArray;
  function Mn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + b(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function yi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return F({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Ts(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(a(92));
        if (ar(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: b(n) };
  }
  function Ls(e, t) {
    var n = b(t.value),
      r = b(t.defaultValue);
    (n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r));
  }
  function Is(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function Rs(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function wi(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? Rs(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var tl,
    Ps = (function (e) {
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
          tl = tl || document.createElement('div'),
            tl.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = tl.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function cr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var dr = {
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
    Yc = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(dr).forEach(function (e) {
    Yc.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (dr[t] = dr[e]));
    });
  });
  function Os(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (dr.hasOwnProperty(e) && dr[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function Ms(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = Os(n, t[n], r);
        (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Xc = F(
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
  function _i(e, t) {
    if (t) {
      if (Xc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(a(62));
    }
  }
  function ki(e, t) {
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
  var Si = null;
  function xi(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ci = null,
    zn = null,
    Dn = null;
  function zs(e) {
    if ((e = Or(e))) {
      if (typeof Ci != 'function') throw Error(a(280));
      var t = e.stateNode;
      t && ((t = Cl(t)), Ci(e.stateNode, e.type, t));
    }
  }
  function Ds(e) {
    zn ? (Dn ? Dn.push(e) : (Dn = [e])) : (zn = e);
  }
  function As() {
    if (zn) {
      var e = zn,
        t = Dn;
      if (((Dn = zn = null), zs(e), t)) for (e = 0; e < t.length; e++) zs(t[e]);
    }
  }
  function Fs(e, t) {
    return e(t);
  }
  function Bs() {}
  var Ei = !1;
  function Us(e, t, n) {
    if (Ei) return e(t, n);
    Ei = !0;
    try {
      return Fs(e, t, n);
    } finally {
      ((Ei = !1), (zn !== null || Dn !== null) && (Bs(), As()));
    }
  }
  function fr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Cl(n);
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
    if (n && typeof n != 'function') throw Error(a(231, t, typeof n));
    return n;
  }
  var Ni = !1;
  if (E)
    try {
      var pr = {};
      (Object.defineProperty(pr, 'passive', {
        get: function () {
          Ni = !0;
        },
      }),
        window.addEventListener('test', pr, pr),
        window.removeEventListener('test', pr, pr));
    } catch {
      Ni = !1;
    }
  function Zc(e, t, n, r, l, i, o, d, f) {
    var w = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, w);
    } catch (L) {
      this.onError(L);
    }
  }
  var mr = !1,
    nl = null,
    rl = !1,
    ji = null,
    Jc = {
      onError: function (e) {
        ((mr = !0), (nl = e));
      },
    };
  function ed(e, t, n, r, l, i, o, d, f) {
    ((mr = !1), (nl = null), Zc.apply(Jc, arguments));
  }
  function td(e, t, n, r, l, i, o, d, f) {
    if ((ed.apply(this, arguments), mr)) {
      if (mr) {
        var w = nl;
        ((mr = !1), (nl = null));
      } else throw Error(a(198));
      rl || ((rl = !0), (ji = w));
    }
  }
  function yn(e) {
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
  function $s(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Ws(e) {
    if (yn(e) !== e) throw Error(a(188));
  }
  function nd(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = yn(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return (Ws(l), e);
          if (i === r) return (Ws(l), t);
          i = i.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) ((n = l), (r = i));
      else {
        for (var o = !1, d = l.child; d; ) {
          if (d === n) {
            ((o = !0), (n = l), (r = i));
            break;
          }
          if (d === r) {
            ((o = !0), (r = l), (n = i));
            break;
          }
          d = d.sibling;
        }
        if (!o) {
          for (d = i.child; d; ) {
            if (d === n) {
              ((o = !0), (n = i), (r = l));
              break;
            }
            if (d === r) {
              ((o = !0), (r = i), (n = l));
              break;
            }
            d = d.sibling;
          }
          if (!o) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function Hs(e) {
    return ((e = nd(e)), e !== null ? Vs(e) : null);
  }
  function Vs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Vs(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var qs = u.unstable_scheduleCallback,
    Qs = u.unstable_cancelCallback,
    rd = u.unstable_shouldYield,
    ld = u.unstable_requestPaint,
    Pe = u.unstable_now,
    id = u.unstable_getCurrentPriorityLevel,
    Ti = u.unstable_ImmediatePriority,
    bs = u.unstable_UserBlockingPriority,
    ll = u.unstable_NormalPriority,
    od = u.unstable_LowPriority,
    Gs = u.unstable_IdlePriority,
    il = null,
    Ot = null;
  function sd(e) {
    if (Ot && typeof Ot.onCommitFiberRoot == 'function')
      try {
        Ot.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Nt = Math.clz32 ? Math.clz32 : cd,
    ud = Math.log,
    ad = Math.LN2;
  function cd(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((ud(e) / ad) | 0)) | 0);
  }
  var ol = 64,
    sl = 4194304;
  function hr(e) {
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
  function ul(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var d = o & ~l;
      d !== 0 ? (r = hr(d)) : ((i &= o), i !== 0 && (r = hr(i)));
    } else ((o = n & ~l), o !== 0 ? (r = hr(o)) : i !== 0 && (r = hr(i)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - Nt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function dd(e, t) {
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
  function fd(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes;
      0 < i;
    ) {
      var o = 31 - Nt(i),
        d = 1 << o,
        f = l[o];
      (f === -1
        ? ((d & n) === 0 || (d & r) !== 0) && (l[o] = dd(d, t))
        : f <= t && (e.expiredLanes |= d),
        (i &= ~d));
    }
  }
  function Li(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Ks() {
    var e = ol;
    return ((ol <<= 1), (ol & 4194240) === 0 && (ol = 64), e);
  }
  function Ii(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function vr(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Nt(t)),
      (e[t] = n));
  }
  function pd(e, t) {
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
      var l = 31 - Nt(n),
        i = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
    }
  }
  function Ri(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Nt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var ge = 0;
  function Ys(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Xs,
    Pi,
    Zs,
    Js,
    eu,
    Oi = !1,
    al = [],
    Yt = null,
    Xt = null,
    Zt = null,
    gr = new Map(),
    yr = new Map(),
    Jt = [],
    md =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function tu(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Yt = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Xt = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Zt = null;
        break;
      case 'pointerover':
      case 'pointerout':
        gr.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        yr.delete(t.pointerId);
    }
  }
  function wr(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = Or(t)), t !== null && Pi(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function hd(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return ((Yt = wr(Yt, e, t, n, r, l)), !0);
      case 'dragenter':
        return ((Xt = wr(Xt, e, t, n, r, l)), !0);
      case 'mouseover':
        return ((Zt = wr(Zt, e, t, n, r, l)), !0);
      case 'pointerover':
        var i = l.pointerId;
        return (gr.set(i, wr(gr.get(i) || null, e, t, n, r, l)), !0);
      case 'gotpointercapture':
        return ((i = l.pointerId), yr.set(i, wr(yr.get(i) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function nu(e) {
    var t = wn(e.target);
    if (t !== null) {
      var n = yn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = $s(n)), t !== null)) {
            ((e.blockedOn = t),
              eu(e.priority, function () {
                Zs(n);
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
  function cl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = zi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Si = r), n.target.dispatchEvent(r), (Si = null));
      } else return ((t = Or(n)), t !== null && Pi(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function ru(e, t, n) {
    cl(e) && n.delete(t);
  }
  function vd() {
    ((Oi = !1),
      Yt !== null && cl(Yt) && (Yt = null),
      Xt !== null && cl(Xt) && (Xt = null),
      Zt !== null && cl(Zt) && (Zt = null),
      gr.forEach(ru),
      yr.forEach(ru));
  }
  function _r(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Oi || ((Oi = !0), u.unstable_scheduleCallback(u.unstable_NormalPriority, vd)));
  }
  function kr(e) {
    function t(l) {
      return _r(l, e);
    }
    if (0 < al.length) {
      _r(al[0], e);
      for (var n = 1; n < al.length; n++) {
        var r = al[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Yt !== null && _r(Yt, e),
        Xt !== null && _r(Xt, e),
        Zt !== null && _r(Zt, e),
        gr.forEach(t),
        yr.forEach(t),
        n = 0;
      n < Jt.length;
      n++
    )
      ((r = Jt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Jt.length && ((n = Jt[0]), n.blockedOn === null); )
      (nu(n), n.blockedOn === null && Jt.shift());
  }
  var An = D.ReactCurrentBatchConfig,
    dl = !0;
  function gd(e, t, n, r) {
    var l = ge,
      i = An.transition;
    An.transition = null;
    try {
      ((ge = 1), Mi(e, t, n, r));
    } finally {
      ((ge = l), (An.transition = i));
    }
  }
  function yd(e, t, n, r) {
    var l = ge,
      i = An.transition;
    An.transition = null;
    try {
      ((ge = 4), Mi(e, t, n, r));
    } finally {
      ((ge = l), (An.transition = i));
    }
  }
  function Mi(e, t, n, r) {
    if (dl) {
      var l = zi(e, t, n, r);
      if (l === null) (Zi(e, t, r, fl, n), tu(e, r));
      else if (hd(l, e, t, n, r)) r.stopPropagation();
      else if ((tu(e, r), t & 4 && -1 < md.indexOf(e))) {
        for (; l !== null; ) {
          var i = Or(l);
          if (
            (i !== null && Xs(i), (i = zi(e, t, n, r)), i === null && Zi(e, t, r, fl, n), i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else Zi(e, t, r, null, n);
    }
  }
  var fl = null;
  function zi(e, t, n, r) {
    if (((fl = null), (e = xi(r)), (e = wn(e)), e !== null))
      if (((t = yn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = $s(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((fl = e), null);
  }
  function lu(e) {
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
        switch (id()) {
          case Ti:
            return 1;
          case bs:
            return 4;
          case ll:
          case od:
            return 16;
          case Gs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var en = null,
    Di = null,
    pl = null;
  function iu() {
    if (pl) return pl;
    var e,
      t = Di,
      n = t.length,
      r,
      l = 'value' in en ? en.value : en.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (pl = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function ml(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function hl() {
    return !0;
  }
  function ou() {
    return !1;
  }
  function dt(e) {
    function t(n, r, l, i, o) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null));
      for (var d in e) e.hasOwnProperty(d) && ((n = e[d]), (this[d] = n ? n(i) : i[d]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? hl
          : ou),
        (this.isPropagationStopped = ou),
        this
      );
    }
    return (
      F(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = hl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = hl));
        },
        persist: function () {},
        isPersistent: hl,
      }),
      t
    );
  }
  var Fn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ai = dt(Fn),
    Sr = F({}, Fn, { view: 0, detail: 0 }),
    wd = dt(Sr),
    Fi,
    Bi,
    xr,
    vl = F({}, Sr, {
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
      getModifierState: $i,
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
          : (e !== xr &&
              (xr && e.type === 'mousemove'
                ? ((Fi = e.screenX - xr.screenX), (Bi = e.screenY - xr.screenY))
                : (Bi = Fi = 0),
              (xr = e)),
            Fi);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Bi;
      },
    }),
    su = dt(vl),
    _d = F({}, vl, { dataTransfer: 0 }),
    kd = dt(_d),
    Sd = F({}, Sr, { relatedTarget: 0 }),
    Ui = dt(Sd),
    xd = F({}, Fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Cd = dt(xd),
    Ed = F({}, Fn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Nd = dt(Ed),
    jd = F({}, Fn, { data: 0 }),
    uu = dt(jd),
    Td = {
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
    Ld = {
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
    Id = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Rd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Id[e]) ? !!t[e] : !1;
  }
  function $i() {
    return Rd;
  }
  var Pd = F({}, Sr, {
      key: function (e) {
        if (e.key) {
          var t = Td[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = ml(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Ld[e.keyCode] || 'Unidentified'
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
      getModifierState: $i,
      charCode: function (e) {
        return e.type === 'keypress' ? ml(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? ml(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Od = dt(Pd),
    Md = F({}, vl, {
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
    au = dt(Md),
    zd = F({}, Sr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: $i,
    }),
    Dd = dt(zd),
    Ad = F({}, Fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fd = dt(Ad),
    Bd = F({}, vl, {
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
    Ud = dt(Bd),
    $d = [9, 13, 27, 32],
    Wi = E && 'CompositionEvent' in window,
    Cr = null;
  E && 'documentMode' in document && (Cr = document.documentMode);
  var Wd = E && 'TextEvent' in window && !Cr,
    cu = E && (!Wi || (Cr && 8 < Cr && 11 >= Cr)),
    du = ' ',
    fu = !1;
  function pu(e, t) {
    switch (e) {
      case 'keyup':
        return $d.indexOf(t.keyCode) !== -1;
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
  function mu(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var Bn = !1;
  function Hd(e, t) {
    switch (e) {
      case 'compositionend':
        return mu(t);
      case 'keypress':
        return t.which !== 32 ? null : ((fu = !0), du);
      case 'textInput':
        return ((e = t.data), e === du && fu ? null : e);
      default:
        return null;
    }
  }
  function Vd(e, t) {
    if (Bn)
      return e === 'compositionend' || (!Wi && pu(e, t))
        ? ((e = iu()), (pl = Di = en = null), (Bn = !1), e)
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
        return cu && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var qd = {
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
  function hu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!qd[e.type] : t === 'textarea';
  }
  function vu(e, t, n, r) {
    (Ds(r),
      (t = kl(t, 'onChange')),
      0 < t.length &&
        ((n = new Ai('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Er = null,
    Nr = null;
  function Qd(e) {
    Mu(e, 0);
  }
  function gl(e) {
    var t = Vn(e);
    if (B(t)) return e;
  }
  function bd(e, t) {
    if (e === 'change') return t;
  }
  var gu = !1;
  if (E) {
    var Hi;
    if (E) {
      var Vi = 'oninput' in document;
      if (!Vi) {
        var yu = document.createElement('div');
        (yu.setAttribute('oninput', 'return;'), (Vi = typeof yu.oninput == 'function'));
      }
      Hi = Vi;
    } else Hi = !1;
    gu = Hi && (!document.documentMode || 9 < document.documentMode);
  }
  function wu() {
    Er && (Er.detachEvent('onpropertychange', _u), (Nr = Er = null));
  }
  function _u(e) {
    if (e.propertyName === 'value' && gl(Nr)) {
      var t = [];
      (vu(t, Nr, e, xi(e)), Us(Qd, t));
    }
  }
  function Gd(e, t, n) {
    e === 'focusin'
      ? (wu(), (Er = t), (Nr = n), Er.attachEvent('onpropertychange', _u))
      : e === 'focusout' && wu();
  }
  function Kd(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return gl(Nr);
  }
  function Yd(e, t) {
    if (e === 'click') return gl(t);
  }
  function Xd(e, t) {
    if (e === 'input' || e === 'change') return gl(t);
  }
  function Zd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var jt = typeof Object.is == 'function' ? Object.is : Zd;
  function jr(e, t) {
    if (jt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!y.call(t, l) || !jt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ku(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Su(e, t) {
    var n = ku(e);
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
      n = ku(n);
    }
  }
  function xu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? xu(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Cu() {
    for (var e = window, t = le(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = le(e.document);
    }
    return t;
  }
  function qi(e) {
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
  function Jd(e) {
    var t = Cu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && xu(n.ownerDocument.documentElement, n)) {
      if (r !== null && qi(n)) {
        if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
          ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            i = Math.min(r.start, l);
          ((r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = Su(n, i)));
          var o = Su(n, r);
          l &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var ef = E && 'documentMode' in document && 11 >= document.documentMode,
    Un = null,
    Qi = null,
    Tr = null,
    bi = !1;
  function Eu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    bi ||
      Un == null ||
      Un !== le(r) ||
      ((r = Un),
      'selectionStart' in r && qi(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Tr && jr(Tr, r)) ||
        ((Tr = r),
        (r = kl(Qi, 'onSelect')),
        0 < r.length &&
          ((t = new Ai('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Un))));
  }
  function yl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var $n = {
      animationend: yl('Animation', 'AnimationEnd'),
      animationiteration: yl('Animation', 'AnimationIteration'),
      animationstart: yl('Animation', 'AnimationStart'),
      transitionend: yl('Transition', 'TransitionEnd'),
    },
    Gi = {},
    Nu = {};
  E &&
    ((Nu = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete $n.animationend.animation,
      delete $n.animationiteration.animation,
      delete $n.animationstart.animation),
    'TransitionEvent' in window || delete $n.transitionend.transition);
  function wl(e) {
    if (Gi[e]) return Gi[e];
    if (!$n[e]) return e;
    var t = $n[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Nu) return (Gi[e] = t[n]);
    return e;
  }
  var ju = wl('animationend'),
    Tu = wl('animationiteration'),
    Lu = wl('animationstart'),
    Iu = wl('transitionend'),
    Ru = new Map(),
    Pu =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function tn(e, t) {
    (Ru.set(e, t), k(t, [e]));
  }
  for (var Ki = 0; Ki < Pu.length; Ki++) {
    var Yi = Pu[Ki],
      tf = Yi.toLowerCase(),
      nf = Yi[0].toUpperCase() + Yi.slice(1);
    tn(tf, 'on' + nf);
  }
  (tn(ju, 'onAnimationEnd'),
    tn(Tu, 'onAnimationIteration'),
    tn(Lu, 'onAnimationStart'),
    tn('dblclick', 'onDoubleClick'),
    tn('focusin', 'onFocus'),
    tn('focusout', 'onBlur'),
    tn(Iu, 'onTransitionEnd'),
    x('onMouseEnter', ['mouseout', 'mouseover']),
    x('onMouseLeave', ['mouseout', 'mouseover']),
    x('onPointerEnter', ['pointerout', 'pointerover']),
    x('onPointerLeave', ['pointerout', 'pointerover']),
    k('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    k(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    k('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    k('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    k(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    k(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var Lr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    rf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Lr));
  function Ou(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n), td(r, t, void 0, e), (e.currentTarget = null));
  }
  function Mu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var d = r[o],
              f = d.instance,
              w = d.currentTarget;
            if (((d = d.listener), f !== i && l.isPropagationStopped())) break e;
            (Ou(l, d, w), (i = f));
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((d = r[o]),
              (f = d.instance),
              (w = d.currentTarget),
              (d = d.listener),
              f !== i && l.isPropagationStopped())
            )
              break e;
            (Ou(l, d, w), (i = f));
          }
      }
    }
    if (rl) throw ((e = ji), (rl = !1), (ji = null), e);
  }
  function ke(e, t) {
    var n = t[lo];
    n === void 0 && (n = t[lo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (zu(t, e, 2, !1), n.add(r));
  }
  function Xi(e, t, n) {
    var r = 0;
    (t && (r |= 4), zu(n, e, r, t));
  }
  var _l = '_reactListening' + Math.random().toString(36).slice(2);
  function Ir(e) {
    if (!e[_l]) {
      ((e[_l] = !0),
        v.forEach(function (n) {
          n !== 'selectionchange' && (rf.has(n) || Xi(n, !1, e), Xi(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[_l] || ((t[_l] = !0), Xi('selectionchange', !1, t));
    }
  }
  function zu(e, t, n, r) {
    switch (lu(t)) {
      case 1:
        var l = gd;
        break;
      case 4:
        l = yd;
        break;
      default:
        l = Mi;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Ni || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function Zi(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var d = r.stateNode.containerInfo;
          if (d === l || (d.nodeType === 8 && d.parentNode === l)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var f = o.tag;
              if (
                (f === 3 || f === 4) &&
                ((f = o.stateNode.containerInfo),
                f === l || (f.nodeType === 8 && f.parentNode === l))
              )
                return;
              o = o.return;
            }
          for (; d !== null; ) {
            if (((o = wn(d)), o === null)) return;
            if (((f = o.tag), f === 5 || f === 6)) {
              r = i = o;
              continue e;
            }
            d = d.parentNode;
          }
        }
        r = r.return;
      }
    Us(function () {
      var w = i,
        L = xi(n),
        I = [];
      e: {
        var j = Ru.get(e);
        if (j !== void 0) {
          var U = Ai,
            H = e;
          switch (e) {
            case 'keypress':
              if (ml(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              U = Od;
              break;
            case 'focusin':
              ((H = 'focus'), (U = Ui));
              break;
            case 'focusout':
              ((H = 'blur'), (U = Ui));
              break;
            case 'beforeblur':
            case 'afterblur':
              U = Ui;
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
              U = su;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              U = kd;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              U = Dd;
              break;
            case ju:
            case Tu:
            case Lu:
              U = Cd;
              break;
            case Iu:
              U = Fd;
              break;
            case 'scroll':
              U = wd;
              break;
            case 'wheel':
              U = Ud;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              U = Nd;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              U = au;
          }
          var Q = (t & 4) !== 0,
            Oe = !Q && e === 'scroll',
            h = Q ? (j !== null ? j + 'Capture' : null) : j;
          Q = [];
          for (var p = w, g; p !== null; ) {
            g = p;
            var P = g.stateNode;
            if (
              (g.tag === 5 &&
                P !== null &&
                ((g = P), h !== null && ((P = fr(p, h)), P != null && Q.push(Rr(p, P, g)))),
              Oe)
            )
              break;
            p = p.return;
          }
          0 < Q.length && ((j = new U(j, H, null, n, L)), I.push({ event: j, listeners: Q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((j = e === 'mouseover' || e === 'pointerover'),
            (U = e === 'mouseout' || e === 'pointerout'),
            j && n !== Si && (H = n.relatedTarget || n.fromElement) && (wn(H) || H[Ft]))
          )
            break e;
          if (
            (U || j) &&
            ((j =
              L.window === L
                ? L
                : (j = L.ownerDocument)
                  ? j.defaultView || j.parentWindow
                  : window),
            U
              ? ((H = n.relatedTarget || n.toElement),
                (U = w),
                (H = H ? wn(H) : null),
                H !== null &&
                  ((Oe = yn(H)), H !== Oe || (H.tag !== 5 && H.tag !== 6)) &&
                  (H = null))
              : ((U = null), (H = w)),
            U !== H)
          ) {
            if (
              ((Q = su),
              (P = 'onMouseLeave'),
              (h = 'onMouseEnter'),
              (p = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((Q = au), (P = 'onPointerLeave'), (h = 'onPointerEnter'), (p = 'pointer')),
              (Oe = U == null ? j : Vn(U)),
              (g = H == null ? j : Vn(H)),
              (j = new Q(P, p + 'leave', U, n, L)),
              (j.target = Oe),
              (j.relatedTarget = g),
              (P = null),
              wn(L) === w &&
                ((Q = new Q(h, p + 'enter', H, n, L)),
                (Q.target = g),
                (Q.relatedTarget = Oe),
                (P = Q)),
              (Oe = P),
              U && H)
            )
              t: {
                for (Q = U, h = H, p = 0, g = Q; g; g = Wn(g)) p++;
                for (g = 0, P = h; P; P = Wn(P)) g++;
                for (; 0 < p - g; ) ((Q = Wn(Q)), p--);
                for (; 0 < g - p; ) ((h = Wn(h)), g--);
                for (; p--; ) {
                  if (Q === h || (h !== null && Q === h.alternate)) break t;
                  ((Q = Wn(Q)), (h = Wn(h)));
                }
                Q = null;
              }
            else Q = null;
            (U !== null && Du(I, j, U, Q, !1), H !== null && Oe !== null && Du(I, Oe, H, Q, !0));
          }
        }
        e: {
          if (
            ((j = w ? Vn(w) : window),
            (U = j.nodeName && j.nodeName.toLowerCase()),
            U === 'select' || (U === 'input' && j.type === 'file'))
          )
            var G = bd;
          else if (hu(j))
            if (gu) G = Xd;
            else {
              G = Kd;
              var J = Gd;
            }
          else
            (U = j.nodeName) &&
              U.toLowerCase() === 'input' &&
              (j.type === 'checkbox' || j.type === 'radio') &&
              (G = Yd);
          if (G && (G = G(e, w))) {
            vu(I, G, n, L);
            break e;
          }
          (J && J(e, j, w),
            e === 'focusout' &&
              (J = j._wrapperState) &&
              J.controlled &&
              j.type === 'number' &&
              gi(j, 'number', j.value));
        }
        switch (((J = w ? Vn(w) : window), e)) {
          case 'focusin':
            (hu(J) || J.contentEditable === 'true') && ((Un = J), (Qi = w), (Tr = null));
            break;
          case 'focusout':
            Tr = Qi = Un = null;
            break;
          case 'mousedown':
            bi = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((bi = !1), Eu(I, n, L));
            break;
          case 'selectionchange':
            if (ef) break;
          case 'keydown':
          case 'keyup':
            Eu(I, n, L);
        }
        var ee;
        if (Wi)
          e: {
            switch (e) {
              case 'compositionstart':
                var te = 'onCompositionStart';
                break e;
              case 'compositionend':
                te = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                te = 'onCompositionUpdate';
                break e;
            }
            te = void 0;
          }
        else
          Bn
            ? pu(e, n) && (te = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (te = 'onCompositionStart');
        (te &&
          (cu &&
            n.locale !== 'ko' &&
            (Bn || te !== 'onCompositionStart'
              ? te === 'onCompositionEnd' && Bn && (ee = iu())
              : ((en = L), (Di = 'value' in en ? en.value : en.textContent), (Bn = !0))),
          (J = kl(w, te)),
          0 < J.length &&
            ((te = new uu(te, e, null, n, L)),
            I.push({ event: te, listeners: J }),
            ee ? (te.data = ee) : ((ee = mu(n)), ee !== null && (te.data = ee)))),
          (ee = Wd ? Hd(e, n) : Vd(e, n)) &&
            ((w = kl(w, 'onBeforeInput')),
            0 < w.length &&
              ((L = new uu('onBeforeInput', 'beforeinput', null, n, L)),
              I.push({ event: L, listeners: w }),
              (L.data = ee))));
      }
      Mu(I, t);
    });
  }
  function Rr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function kl(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      (l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = fr(e, n)),
        i != null && r.unshift(Rr(e, i, l)),
        (i = fr(e, t)),
        i != null && r.push(Rr(e, i, l))),
        (e = e.return));
    }
    return r;
  }
  function Wn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Du(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var d = n,
        f = d.alternate,
        w = d.stateNode;
      if (f !== null && f === r) break;
      (d.tag === 5 &&
        w !== null &&
        ((d = w),
        l
          ? ((f = fr(n, i)), f != null && o.unshift(Rr(n, f, d)))
          : l || ((f = fr(n, i)), f != null && o.push(Rr(n, f, d)))),
        (n = n.return));
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var lf = /\r\n?/g,
    of = /\u0000|\uFFFD/g;
  function Au(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        lf,
        `
`
      )
      .replace(of, '');
  }
  function Sl(e, t, n) {
    if (((t = Au(t)), Au(e) !== t && n)) throw Error(a(425));
  }
  function xl() {}
  var Ji = null,
    eo = null;
  function to(e, t) {
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
  var no = typeof setTimeout == 'function' ? setTimeout : void 0,
    sf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Fu = typeof Promise == 'function' ? Promise : void 0,
    uf =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Fu < 'u'
          ? function (e) {
              return Fu.resolve(null).then(e).catch(af);
            }
          : no;
  function af(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ro(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$')) {
          if (r === 0) {
            (e.removeChild(l), kr(t));
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = l;
    } while (n);
    kr(t);
  }
  function nn(e) {
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
  function Bu(e) {
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
  var Hn = Math.random().toString(36).slice(2),
    Mt = '__reactFiber$' + Hn,
    Pr = '__reactProps$' + Hn,
    Ft = '__reactContainer$' + Hn,
    lo = '__reactEvents$' + Hn,
    cf = '__reactListeners$' + Hn,
    df = '__reactHandles$' + Hn;
  function wn(e) {
    var t = e[Mt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Ft] || n[Mt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Bu(e); e !== null; ) {
            if ((n = e[Mt])) return n;
            e = Bu(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Or(e) {
    return (
      (e = e[Mt] || e[Ft]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Vn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function Cl(e) {
    return e[Pr] || null;
  }
  var io = [],
    qn = -1;
  function rn(e) {
    return { current: e };
  }
  function Se(e) {
    0 > qn || ((e.current = io[qn]), (io[qn] = null), qn--);
  }
  function _e(e, t) {
    (qn++, (io[qn] = e.current), (e.current = t));
  }
  var ln = {},
    Ke = rn(ln),
    rt = rn(!1),
    _n = ln;
  function Qn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return ln;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function lt(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function El() {
    (Se(rt), Se(Ke));
  }
  function Uu(e, t, n) {
    if (Ke.current !== ln) throw Error(a(168));
    (_e(Ke, t), _e(rt, n));
  }
  function $u(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(a(108, q(e) || 'Unknown', l));
    return F({}, n, r);
  }
  function Nl(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ln),
      (_n = Ke.current),
      _e(Ke, e),
      _e(rt, rt.current),
      !0
    );
  }
  function Wu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    (n
      ? ((e = $u(e, t, _n)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Se(rt),
        Se(Ke),
        _e(Ke, e))
      : Se(rt),
      _e(rt, n));
  }
  var Bt = null,
    jl = !1,
    oo = !1;
  function Hu(e) {
    Bt === null ? (Bt = [e]) : Bt.push(e);
  }
  function ff(e) {
    ((jl = !0), Hu(e));
  }
  function on() {
    if (!oo && Bt !== null) {
      oo = !0;
      var e = 0,
        t = ge;
      try {
        var n = Bt;
        for (ge = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Bt = null), (jl = !1));
      } catch (l) {
        throw (Bt !== null && (Bt = Bt.slice(e + 1)), qs(Ti, on), l);
      } finally {
        ((ge = t), (oo = !1));
      }
    }
    return null;
  }
  var bn = [],
    Gn = 0,
    Tl = null,
    Ll = 0,
    gt = [],
    yt = 0,
    kn = null,
    Ut = 1,
    $t = '';
  function Sn(e, t) {
    ((bn[Gn++] = Ll), (bn[Gn++] = Tl), (Tl = e), (Ll = t));
  }
  function Vu(e, t, n) {
    ((gt[yt++] = Ut), (gt[yt++] = $t), (gt[yt++] = kn), (kn = e));
    var r = Ut;
    e = $t;
    var l = 32 - Nt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var i = 32 - Nt(t) + l;
    if (30 < i) {
      var o = l - (l % 5);
      ((i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (Ut = (1 << (32 - Nt(t) + l)) | (n << l) | r),
        ($t = i + e));
    } else ((Ut = (1 << i) | (n << l) | r), ($t = e));
  }
  function so(e) {
    e.return !== null && (Sn(e, 1), Vu(e, 1, 0));
  }
  function uo(e) {
    for (; e === Tl; ) ((Tl = bn[--Gn]), (bn[Gn] = null), (Ll = bn[--Gn]), (bn[Gn] = null));
    for (; e === kn; )
      ((kn = gt[--yt]),
        (gt[yt] = null),
        ($t = gt[--yt]),
        (gt[yt] = null),
        (Ut = gt[--yt]),
        (gt[yt] = null));
  }
  var ft = null,
    pt = null,
    xe = !1,
    Tt = null;
  function qu(e, t) {
    var n = St(5, null, null, 0);
    ((n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Qu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (ft = e), (pt = nn(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ft = e), (pt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = kn !== null ? { id: Ut, overflow: $t } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = St(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (ft = e),
              (pt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ao(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function co(e) {
    if (xe) {
      var t = pt;
      if (t) {
        var n = t;
        if (!Qu(e, t)) {
          if (ao(e)) throw Error(a(418));
          t = nn(n.nextSibling);
          var r = ft;
          t && Qu(e, t) ? qu(r, n) : ((e.flags = (e.flags & -4097) | 2), (xe = !1), (ft = e));
        }
      } else {
        if (ao(e)) throw Error(a(418));
        ((e.flags = (e.flags & -4097) | 2), (xe = !1), (ft = e));
      }
    }
  }
  function bu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ft = e;
  }
  function Il(e) {
    if (e !== ft) return !1;
    if (!xe) return (bu(e), (xe = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !to(e.type, e.memoizedProps))),
      t && (t = pt))
    ) {
      if (ao(e)) throw (Gu(), Error(a(418)));
      for (; t; ) (qu(e, t), (t = nn(t.nextSibling)));
    }
    if ((bu(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                pt = nn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        pt = null;
      }
    } else pt = ft ? nn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Gu() {
    for (var e = pt; e; ) e = nn(e.nextSibling);
  }
  function Kn() {
    ((pt = ft = null), (xe = !1));
  }
  function fo(e) {
    Tt === null ? (Tt = [e]) : Tt.push(e);
  }
  var pf = D.ReactCurrentBatchConfig;
  function Mr(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var l = r,
          i = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
          ? t.ref
          : ((t = function (o) {
              var d = l.refs;
              o === null ? delete d[i] : (d[i] = o);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != 'string') throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function Rl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        a(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      )
    );
  }
  function Ku(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Yu(e) {
    function t(h, p) {
      if (e) {
        var g = h.deletions;
        g === null ? ((h.deletions = [p]), (h.flags |= 16)) : g.push(p);
      }
    }
    function n(h, p) {
      if (!e) return null;
      for (; p !== null; ) (t(h, p), (p = p.sibling));
      return null;
    }
    function r(h, p) {
      for (h = new Map(); p !== null; )
        (p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling));
      return h;
    }
    function l(h, p) {
      return ((h = mn(h, p)), (h.index = 0), (h.sibling = null), h);
    }
    function i(h, p, g) {
      return (
        (h.index = g),
        e
          ? ((g = h.alternate),
            g !== null ? ((g = g.index), g < p ? ((h.flags |= 2), p) : g) : ((h.flags |= 2), p))
          : ((h.flags |= 1048576), p)
      );
    }
    function o(h) {
      return (e && h.alternate === null && (h.flags |= 2), h);
    }
    function d(h, p, g, P) {
      return p === null || p.tag !== 6
        ? ((p = rs(g, h.mode, P)), (p.return = h), p)
        : ((p = l(p, g)), (p.return = h), p);
    }
    function f(h, p, g, P) {
      var G = g.type;
      return G === we
        ? L(h, p, g.props.children, P, g.key)
        : p !== null &&
            (p.elementType === G ||
              (typeof G == 'object' && G !== null && G.$$typeof === $e && Ku(G) === p.type))
          ? ((P = l(p, g.props)), (P.ref = Mr(h, p, g)), (P.return = h), P)
          : ((P = ti(g.type, g.key, g.props, null, h.mode, P)),
            (P.ref = Mr(h, p, g)),
            (P.return = h),
            P);
    }
    function w(h, p, g, P) {
      return p === null ||
        p.tag !== 4 ||
        p.stateNode.containerInfo !== g.containerInfo ||
        p.stateNode.implementation !== g.implementation
        ? ((p = ls(g, h.mode, P)), (p.return = h), p)
        : ((p = l(p, g.children || [])), (p.return = h), p);
    }
    function L(h, p, g, P, G) {
      return p === null || p.tag !== 7
        ? ((p = In(g, h.mode, P, G)), (p.return = h), p)
        : ((p = l(p, g)), (p.return = h), p);
    }
    function I(h, p, g) {
      if ((typeof p == 'string' && p !== '') || typeof p == 'number')
        return ((p = rs('' + p, h.mode, g)), (p.return = h), p);
      if (typeof p == 'object' && p !== null) {
        switch (p.$$typeof) {
          case de:
            return (
              (g = ti(p.type, p.key, p.props, null, h.mode, g)),
              (g.ref = Mr(h, null, p)),
              (g.return = h),
              g
            );
          case ae:
            return ((p = ls(p, h.mode, g)), (p.return = h), p);
          case $e:
            var P = p._init;
            return I(h, P(p._payload), g);
        }
        if (ar(p) || X(p)) return ((p = In(p, h.mode, g, null)), (p.return = h), p);
        Rl(h, p);
      }
      return null;
    }
    function j(h, p, g, P) {
      var G = p !== null ? p.key : null;
      if ((typeof g == 'string' && g !== '') || typeof g == 'number')
        return G !== null ? null : d(h, p, '' + g, P);
      if (typeof g == 'object' && g !== null) {
        switch (g.$$typeof) {
          case de:
            return g.key === G ? f(h, p, g, P) : null;
          case ae:
            return g.key === G ? w(h, p, g, P) : null;
          case $e:
            return ((G = g._init), j(h, p, G(g._payload), P));
        }
        if (ar(g) || X(g)) return G !== null ? null : L(h, p, g, P, null);
        Rl(h, g);
      }
      return null;
    }
    function U(h, p, g, P, G) {
      if ((typeof P == 'string' && P !== '') || typeof P == 'number')
        return ((h = h.get(g) || null), d(p, h, '' + P, G));
      if (typeof P == 'object' && P !== null) {
        switch (P.$$typeof) {
          case de:
            return ((h = h.get(P.key === null ? g : P.key) || null), f(p, h, P, G));
          case ae:
            return ((h = h.get(P.key === null ? g : P.key) || null), w(p, h, P, G));
          case $e:
            var J = P._init;
            return U(h, p, g, J(P._payload), G);
        }
        if (ar(P) || X(P)) return ((h = h.get(g) || null), L(p, h, P, G, null));
        Rl(p, P);
      }
      return null;
    }
    function H(h, p, g, P) {
      for (
        var G = null, J = null, ee = p, te = (p = 0), Ve = null;
        ee !== null && te < g.length;
        te++
      ) {
        ee.index > te ? ((Ve = ee), (ee = null)) : (Ve = ee.sibling);
        var he = j(h, ee, g[te], P);
        if (he === null) {
          ee === null && (ee = Ve);
          break;
        }
        (e && ee && he.alternate === null && t(h, ee),
          (p = i(he, p, te)),
          J === null ? (G = he) : (J.sibling = he),
          (J = he),
          (ee = Ve));
      }
      if (te === g.length) return (n(h, ee), xe && Sn(h, te), G);
      if (ee === null) {
        for (; te < g.length; te++)
          ((ee = I(h, g[te], P)),
            ee !== null &&
              ((p = i(ee, p, te)), J === null ? (G = ee) : (J.sibling = ee), (J = ee)));
        return (xe && Sn(h, te), G);
      }
      for (ee = r(h, ee); te < g.length; te++)
        ((Ve = U(ee, h, te, g[te], P)),
          Ve !== null &&
            (e && Ve.alternate !== null && ee.delete(Ve.key === null ? te : Ve.key),
            (p = i(Ve, p, te)),
            J === null ? (G = Ve) : (J.sibling = Ve),
            (J = Ve)));
      return (
        e &&
          ee.forEach(function (hn) {
            return t(h, hn);
          }),
        xe && Sn(h, te),
        G
      );
    }
    function Q(h, p, g, P) {
      var G = X(g);
      if (typeof G != 'function') throw Error(a(150));
      if (((g = G.call(g)), g == null)) throw Error(a(151));
      for (
        var J = (G = null), ee = p, te = (p = 0), Ve = null, he = g.next();
        ee !== null && !he.done;
        te++, he = g.next()
      ) {
        ee.index > te ? ((Ve = ee), (ee = null)) : (Ve = ee.sibling);
        var hn = j(h, ee, he.value, P);
        if (hn === null) {
          ee === null && (ee = Ve);
          break;
        }
        (e && ee && hn.alternate === null && t(h, ee),
          (p = i(hn, p, te)),
          J === null ? (G = hn) : (J.sibling = hn),
          (J = hn),
          (ee = Ve));
      }
      if (he.done) return (n(h, ee), xe && Sn(h, te), G);
      if (ee === null) {
        for (; !he.done; te++, he = g.next())
          ((he = I(h, he.value, P)),
            he !== null &&
              ((p = i(he, p, te)), J === null ? (G = he) : (J.sibling = he), (J = he)));
        return (xe && Sn(h, te), G);
      }
      for (ee = r(h, ee); !he.done; te++, he = g.next())
        ((he = U(ee, h, te, he.value, P)),
          he !== null &&
            (e && he.alternate !== null && ee.delete(he.key === null ? te : he.key),
            (p = i(he, p, te)),
            J === null ? (G = he) : (J.sibling = he),
            (J = he)));
      return (
        e &&
          ee.forEach(function (Qf) {
            return t(h, Qf);
          }),
        xe && Sn(h, te),
        G
      );
    }
    function Oe(h, p, g, P) {
      if (
        (typeof g == 'object' &&
          g !== null &&
          g.type === we &&
          g.key === null &&
          (g = g.props.children),
        typeof g == 'object' && g !== null)
      ) {
        switch (g.$$typeof) {
          case de:
            e: {
              for (var G = g.key, J = p; J !== null; ) {
                if (J.key === G) {
                  if (((G = g.type), G === we)) {
                    if (J.tag === 7) {
                      (n(h, J.sibling), (p = l(J, g.props.children)), (p.return = h), (h = p));
                      break e;
                    }
                  } else if (
                    J.elementType === G ||
                    (typeof G == 'object' && G !== null && G.$$typeof === $e && Ku(G) === J.type)
                  ) {
                    (n(h, J.sibling),
                      (p = l(J, g.props)),
                      (p.ref = Mr(h, J, g)),
                      (p.return = h),
                      (h = p));
                    break e;
                  }
                  n(h, J);
                  break;
                } else t(h, J);
                J = J.sibling;
              }
              g.type === we
                ? ((p = In(g.props.children, h.mode, P, g.key)), (p.return = h), (h = p))
                : ((P = ti(g.type, g.key, g.props, null, h.mode, P)),
                  (P.ref = Mr(h, p, g)),
                  (P.return = h),
                  (h = P));
            }
            return o(h);
          case ae:
            e: {
              for (J = g.key; p !== null; ) {
                if (p.key === J)
                  if (
                    p.tag === 4 &&
                    p.stateNode.containerInfo === g.containerInfo &&
                    p.stateNode.implementation === g.implementation
                  ) {
                    (n(h, p.sibling), (p = l(p, g.children || [])), (p.return = h), (h = p));
                    break e;
                  } else {
                    n(h, p);
                    break;
                  }
                else t(h, p);
                p = p.sibling;
              }
              ((p = ls(g, h.mode, P)), (p.return = h), (h = p));
            }
            return o(h);
          case $e:
            return ((J = g._init), Oe(h, p, J(g._payload), P));
        }
        if (ar(g)) return H(h, p, g, P);
        if (X(g)) return Q(h, p, g, P);
        Rl(h, g);
      }
      return (typeof g == 'string' && g !== '') || typeof g == 'number'
        ? ((g = '' + g),
          p !== null && p.tag === 6
            ? (n(h, p.sibling), (p = l(p, g)), (p.return = h), (h = p))
            : (n(h, p), (p = rs(g, h.mode, P)), (p.return = h), (h = p)),
          o(h))
        : n(h, p);
    }
    return Oe;
  }
  var Yn = Yu(!0),
    Xu = Yu(!1),
    Pl = rn(null),
    Ol = null,
    Xn = null,
    po = null;
  function mo() {
    po = Xn = Ol = null;
  }
  function ho(e) {
    var t = Pl.current;
    (Se(Pl), (e._currentValue = t));
  }
  function vo(e, t, n) {
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
  function Zn(e, t) {
    ((Ol = e),
      (po = Xn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (it = !0), (e.firstContext = null)));
  }
  function wt(e) {
    var t = e._currentValue;
    if (po !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Xn === null)) {
        if (Ol === null) throw Error(a(308));
        ((Xn = e), (Ol.dependencies = { lanes: 0, firstContext: e }));
      } else Xn = Xn.next = e;
    return t;
  }
  var xn = null;
  function go(e) {
    xn === null ? (xn = [e]) : xn.push(e);
  }
  function Zu(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), go(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Wt(e, r)
    );
  }
  function Wt(e, t) {
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
  var sn = !1;
  function yo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ju(e, t) {
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
  function Ht(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function un(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (pe & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Wt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), go(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Wt(e, n)
    );
  }
  function Ml(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ri(e, n));
    }
  }
  function ea(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (i === null ? (l = i = o) : (i = i.next = o), (n = n.next));
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
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
  function zl(e, t, n, r) {
    var l = e.updateQueue;
    sn = !1;
    var i = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      d = l.shared.pending;
    if (d !== null) {
      l.shared.pending = null;
      var f = d,
        w = f.next;
      ((f.next = null), o === null ? (i = w) : (o.next = w), (o = f));
      var L = e.alternate;
      L !== null &&
        ((L = L.updateQueue),
        (d = L.lastBaseUpdate),
        d !== o && (d === null ? (L.firstBaseUpdate = w) : (d.next = w), (L.lastBaseUpdate = f)));
    }
    if (i !== null) {
      var I = l.baseState;
      ((o = 0), (L = w = f = null), (d = i));
      do {
        var j = d.lane,
          U = d.eventTime;
        if ((r & j) === j) {
          L !== null &&
            (L = L.next =
              {
                eventTime: U,
                lane: 0,
                tag: d.tag,
                payload: d.payload,
                callback: d.callback,
                next: null,
              });
          e: {
            var H = e,
              Q = d;
            switch (((j = t), (U = n), Q.tag)) {
              case 1:
                if (((H = Q.payload), typeof H == 'function')) {
                  I = H.call(U, I, j);
                  break e;
                }
                I = H;
                break e;
              case 3:
                H.flags = (H.flags & -65537) | 128;
              case 0:
                if (
                  ((H = Q.payload), (j = typeof H == 'function' ? H.call(U, I, j) : H), j == null)
                )
                  break e;
                I = F({}, I, j);
                break e;
              case 2:
                sn = !0;
            }
          }
          d.callback !== null &&
            d.lane !== 0 &&
            ((e.flags |= 64), (j = l.effects), j === null ? (l.effects = [d]) : j.push(d));
        } else
          ((U = {
            eventTime: U,
            lane: j,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            L === null ? ((w = L = U), (f = I)) : (L = L.next = U),
            (o |= j));
        if (((d = d.next), d === null)) {
          if (((d = l.shared.pending), d === null)) break;
          ((j = d),
            (d = j.next),
            (j.next = null),
            (l.lastBaseUpdate = j),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (L === null && (f = I),
        (l.baseState = f),
        (l.firstBaseUpdate = w),
        (l.lastBaseUpdate = L),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((o |= l.lane), (l = l.next));
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      ((Nn |= o), (e.lanes = o), (e.memoizedState = I));
    }
  }
  function ta(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != 'function')) throw Error(a(191, l));
          l.call(r);
        }
      }
  }
  var zr = {},
    zt = rn(zr),
    Dr = rn(zr),
    Ar = rn(zr);
  function Cn(e) {
    if (e === zr) throw Error(a(174));
    return e;
  }
  function wo(e, t) {
    switch ((_e(Ar, t), _e(Dr, e), _e(zt, zr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : wi(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = wi(t, e)));
    }
    (Se(zt), _e(zt, t));
  }
  function Jn() {
    (Se(zt), Se(Dr), Se(Ar));
  }
  function na(e) {
    Cn(Ar.current);
    var t = Cn(zt.current),
      n = wi(t, e.type);
    t !== n && (_e(Dr, e), _e(zt, n));
  }
  function _o(e) {
    Dr.current === e && (Se(zt), Se(Dr));
  }
  var Ee = rn(0);
  function Dl(e) {
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
  var ko = [];
  function So() {
    for (var e = 0; e < ko.length; e++) ko[e]._workInProgressVersionPrimary = null;
    ko.length = 0;
  }
  var Al = D.ReactCurrentDispatcher,
    xo = D.ReactCurrentBatchConfig,
    En = 0,
    Ne = null,
    Fe = null,
    We = null,
    Fl = !1,
    Fr = !1,
    Br = 0,
    mf = 0;
  function Ye() {
    throw Error(a(321));
  }
  function Co(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!jt(e[n], t[n])) return !1;
    return !0;
  }
  function Eo(e, t, n, r, l, i) {
    if (
      ((En = i),
      (Ne = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Al.current = e === null || e.memoizedState === null ? yf : wf),
      (e = n(r, l)),
      Fr)
    ) {
      i = 0;
      do {
        if (((Fr = !1), (Br = 0), 25 <= i)) throw Error(a(301));
        ((i += 1), (We = Fe = null), (t.updateQueue = null), (Al.current = _f), (e = n(r, l)));
      } while (Fr);
    }
    if (
      ((Al.current = $l),
      (t = Fe !== null && Fe.next !== null),
      (En = 0),
      (We = Fe = Ne = null),
      (Fl = !1),
      t)
    )
      throw Error(a(300));
    return e;
  }
  function No() {
    var e = Br !== 0;
    return ((Br = 0), e);
  }
  function Dt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (We === null ? (Ne.memoizedState = We = e) : (We = We.next = e), We);
  }
  function _t() {
    if (Fe === null) {
      var e = Ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Fe.next;
    var t = We === null ? Ne.memoizedState : We.next;
    if (t !== null) ((We = t), (Fe = e));
    else {
      if (e === null) throw Error(a(310));
      ((Fe = e),
        (e = {
          memoizedState: Fe.memoizedState,
          baseState: Fe.baseState,
          baseQueue: Fe.baseQueue,
          queue: Fe.queue,
          next: null,
        }),
        We === null ? (Ne.memoizedState = We = e) : (We = We.next = e));
    }
    return We;
  }
  function Ur(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function jo(e) {
    var t = _t(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = Fe,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        ((l.next = i.next), (i.next = o));
      }
      ((r.baseQueue = l = i), (n.pending = null));
    }
    if (l !== null) {
      ((i = l.next), (r = r.baseState));
      var d = (o = null),
        f = null,
        w = i;
      do {
        var L = w.lane;
        if ((En & L) === L)
          (f !== null &&
            (f = f.next =
              {
                lane: 0,
                action: w.action,
                hasEagerState: w.hasEagerState,
                eagerState: w.eagerState,
                next: null,
              }),
            (r = w.hasEagerState ? w.eagerState : e(r, w.action)));
        else {
          var I = {
            lane: L,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null,
          };
          (f === null ? ((d = f = I), (o = r)) : (f = f.next = I), (Ne.lanes |= L), (Nn |= L));
        }
        w = w.next;
      } while (w !== null && w !== i);
      (f === null ? (o = r) : (f.next = d),
        jt(r, t.memoizedState) || (it = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = f),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((i = l.lane), (Ne.lanes |= i), (Nn |= i), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function To(e) {
    var t = _t(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = (l = l.next);
      do ((i = e(i, o.action)), (o = o.next));
      while (o !== l);
      (jt(i, t.memoizedState) || (it = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function ra() {}
  function la(e, t) {
    var n = Ne,
      r = _t(),
      l = t(),
      i = !jt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (it = !0)),
      (r = r.queue),
      Lo(sa.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (We !== null && We.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), $r(9, oa.bind(null, n, r, l, t), void 0, null), He === null))
        throw Error(a(349));
      (En & 30) !== 0 || ia(n, t, l);
    }
    return l;
  }
  function ia(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ne.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Ne.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function oa(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ua(t) && aa(e));
  }
  function sa(e, t, n) {
    return n(function () {
      ua(t) && aa(e);
    });
  }
  function ua(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !jt(e, n);
    } catch {
      return !0;
    }
  }
  function aa(e) {
    var t = Wt(e, 1);
    t !== null && Pt(t, e, 1, -1);
  }
  function ca(e) {
    var t = Dt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ur,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = gf.bind(null, Ne, e)),
      [t.memoizedState, e]
    );
  }
  function $r(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Ne.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ne.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function da() {
    return _t().memoizedState;
  }
  function Bl(e, t, n, r) {
    var l = Dt();
    ((Ne.flags |= e), (l.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function Ul(e, t, n, r) {
    var l = _t();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Fe !== null) {
      var o = Fe.memoizedState;
      if (((i = o.destroy), r !== null && Co(r, o.deps))) {
        l.memoizedState = $r(t, n, i, r);
        return;
      }
    }
    ((Ne.flags |= e), (l.memoizedState = $r(1 | t, n, i, r)));
  }
  function fa(e, t) {
    return Bl(8390656, 8, e, t);
  }
  function Lo(e, t) {
    return Ul(2048, 8, e, t);
  }
  function pa(e, t) {
    return Ul(4, 2, e, t);
  }
  function ma(e, t) {
    return Ul(4, 4, e, t);
  }
  function ha(e, t) {
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
  function va(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), Ul(4, 4, ha.bind(null, t, e), n));
  }
  function Io() {}
  function ga(e, t) {
    var n = _t();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Co(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function ya(e, t) {
    var n = _t();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Co(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function wa(e, t, n) {
    return (En & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (it = !0)), (e.memoizedState = n))
      : (jt(n, t) || ((n = Ks()), (Ne.lanes |= n), (Nn |= n), (e.baseState = !0)), t);
  }
  function hf(e, t) {
    var n = ge;
    ((ge = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = xo.transition;
    xo.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((ge = n), (xo.transition = r));
    }
  }
  function _a() {
    return _t().memoizedState;
  }
  function vf(e, t, n) {
    var r = fn(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), ka(e)))
      Sa(t, n);
    else if (((n = Zu(e, t, n, r)), n !== null)) {
      var l = tt();
      (Pt(n, e, r, l), xa(n, t, r));
    }
  }
  function gf(e, t, n) {
    var r = fn(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ka(e)) Sa(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var o = t.lastRenderedState,
            d = i(o, n);
          if (((l.hasEagerState = !0), (l.eagerState = d), jt(d, o))) {
            var f = t.interleaved;
            (f === null ? ((l.next = l), go(t)) : ((l.next = f.next), (f.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Zu(e, t, l, r)), n !== null && ((l = tt()), Pt(n, e, r, l), xa(n, t, r)));
    }
  }
  function ka(e) {
    var t = e.alternate;
    return e === Ne || (t !== null && t === Ne);
  }
  function Sa(e, t) {
    Fr = Fl = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function xa(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ri(e, n));
    }
  }
  var $l = {
      readContext: wt,
      useCallback: Ye,
      useContext: Ye,
      useEffect: Ye,
      useImperativeHandle: Ye,
      useInsertionEffect: Ye,
      useLayoutEffect: Ye,
      useMemo: Ye,
      useReducer: Ye,
      useRef: Ye,
      useState: Ye,
      useDebugValue: Ye,
      useDeferredValue: Ye,
      useTransition: Ye,
      useMutableSource: Ye,
      useSyncExternalStore: Ye,
      useId: Ye,
      unstable_isNewReconciler: !1,
    },
    yf = {
      readContext: wt,
      useCallback: function (e, t) {
        return ((Dt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: wt,
      useEffect: fa,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), Bl(4194308, 4, ha.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Bl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Bl(4, 2, e, t);
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
          (e = e.dispatch = vf.bind(null, Ne, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Dt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ca,
      useDebugValue: Io,
      useDeferredValue: function (e) {
        return (Dt().memoizedState = e);
      },
      useTransition: function () {
        var e = ca(!1),
          t = e[0];
        return ((e = hf.bind(null, e[1])), (Dt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Ne,
          l = Dt();
        if (xe) {
          if (n === void 0) throw Error(a(407));
          n = n();
        } else {
          if (((n = t()), He === null)) throw Error(a(349));
          (En & 30) !== 0 || ia(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          fa(sa.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          $r(9, oa.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Dt(),
          t = He.identifierPrefix;
        if (xe) {
          var n = $t,
            r = Ut;
          ((n = (r & ~(1 << (32 - Nt(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = Br++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':'));
        } else ((n = mf++), (t = ':' + t + 'r' + n.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    wf = {
      readContext: wt,
      useCallback: ga,
      useContext: wt,
      useEffect: Lo,
      useImperativeHandle: va,
      useInsertionEffect: pa,
      useLayoutEffect: ma,
      useMemo: ya,
      useReducer: jo,
      useRef: da,
      useState: function () {
        return jo(Ur);
      },
      useDebugValue: Io,
      useDeferredValue: function (e) {
        var t = _t();
        return wa(t, Fe.memoizedState, e);
      },
      useTransition: function () {
        var e = jo(Ur)[0],
          t = _t().memoizedState;
        return [e, t];
      },
      useMutableSource: ra,
      useSyncExternalStore: la,
      useId: _a,
      unstable_isNewReconciler: !1,
    },
    _f = {
      readContext: wt,
      useCallback: ga,
      useContext: wt,
      useEffect: Lo,
      useImperativeHandle: va,
      useInsertionEffect: pa,
      useLayoutEffect: ma,
      useMemo: ya,
      useReducer: To,
      useRef: da,
      useState: function () {
        return To(Ur);
      },
      useDebugValue: Io,
      useDeferredValue: function (e) {
        var t = _t();
        return Fe === null ? (t.memoizedState = e) : wa(t, Fe.memoizedState, e);
      },
      useTransition: function () {
        var e = To(Ur)[0],
          t = _t().memoizedState;
        return [e, t];
      },
      useMutableSource: ra,
      useSyncExternalStore: la,
      useId: _a,
      unstable_isNewReconciler: !1,
    };
  function Lt(e, t) {
    if (e && e.defaultProps) {
      ((t = F({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ro(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : F({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Wl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? yn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = tt(),
        l = fn(e),
        i = Ht(r, l);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = un(e, i, l)),
        t !== null && (Pt(t, e, l, r), Ml(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = tt(),
        l = fn(e),
        i = Ht(r, l);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = un(e, i, l)),
        t !== null && (Pt(t, e, l, r), Ml(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = tt(),
        r = fn(e),
        l = Ht(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = un(e, l, r)),
        t !== null && (Pt(t, e, r, n), Ml(t, e, r)));
    },
  };
  function Ca(e, t, n, r, l, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, i, o)
        : t.prototype && t.prototype.isPureReactComponent
          ? !jr(n, r) || !jr(l, i)
          : !0
    );
  }
  function Ea(e, t, n) {
    var r = !1,
      l = ln,
      i = t.contextType;
    return (
      typeof i == 'object' && i !== null
        ? (i = wt(i))
        : ((l = lt(t) ? _n : Ke.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Qn(e, l) : ln)),
      (t = new t(n, i)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Wl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Na(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Wl.enqueueReplaceState(t, t.state, null));
  }
  function Po(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), yo(e));
    var i = t.contextType;
    (typeof i == 'object' && i !== null
      ? (l.context = wt(i))
      : ((i = lt(t) ? _n : Ke.current), (l.context = Qn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == 'function' && (Ro(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((t = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount(),
        t !== l.state && Wl.enqueueReplaceState(l, l.state, null),
        zl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function er(e, t) {
    try {
      var n = '',
        r = t;
      do ((n += Z(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Oo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Mo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var kf = typeof WeakMap == 'function' ? WeakMap : Map;
  function ja(e, t, n) {
    ((n = Ht(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Kl || ((Kl = !0), (Ko = r)), Mo(e, t));
      }),
      n
    );
  }
  function Ta(e, t, n) {
    ((n = Ht(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Mo(e, t);
        }));
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == 'function' &&
        (n.callback = function () {
          (Mo(e, t),
            typeof r != 'function' && (cn === null ? (cn = new Set([this])) : cn.add(this)));
          var o = t.stack;
          this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' });
        }),
      n
    );
  }
  function La(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new kf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = zf.bind(null, e, t, n)), t.then(e, e));
  }
  function Ia(e) {
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
  function Ra(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = Ht(-1, 1)), (t.tag = 2), un(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Sf = D.ReactCurrentOwner,
    it = !1;
  function et(e, t, n, r) {
    t.child = e === null ? Xu(t, null, n, r) : Yn(t, e.child, n, r);
  }
  function Pa(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      Zn(t, l),
      (r = Eo(e, t, n, r, i, l)),
      (n = No()),
      e !== null && !it
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Vt(e, t, l))
        : (xe && n && so(t), (t.flags |= 1), et(e, t, r, l), t.child)
    );
  }
  function Oa(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == 'function' &&
        !ns(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Ma(e, t, i, r, l))
        : ((e = ti(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var o = i.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : jr), n(o, r) && e.ref === t.ref))
        return Vt(e, t, l);
    }
    return ((t.flags |= 1), (e = mn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Ma(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (jr(i, r) && e.ref === t.ref)
        if (((it = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (it = !0);
        else return ((t.lanes = e.lanes), Vt(e, t, l));
    }
    return zo(e, t, n, r, l);
  }
  function za(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          _e(nr, mt),
          (mt |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            _e(nr, mt),
            (mt |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = i !== null ? i.baseLanes : n),
          _e(nr, mt),
          (mt |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        _e(nr, mt),
        (mt |= r));
    return (et(e, t, l, n), t.child);
  }
  function Da(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function zo(e, t, n, r, l) {
    var i = lt(n) ? _n : Ke.current;
    return (
      (i = Qn(t, i)),
      Zn(t, l),
      (n = Eo(e, t, n, r, i, l)),
      (r = No()),
      e !== null && !it
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Vt(e, t, l))
        : (xe && r && so(t), (t.flags |= 1), et(e, t, n, l), t.child)
    );
  }
  function Aa(e, t, n, r, l) {
    if (lt(n)) {
      var i = !0;
      Nl(t);
    } else i = !1;
    if ((Zn(t, l), t.stateNode === null)) (Vl(e, t), Ea(t, n, r), Po(t, n, r, l), (r = !0));
    else if (e === null) {
      var o = t.stateNode,
        d = t.memoizedProps;
      o.props = d;
      var f = o.context,
        w = n.contextType;
      typeof w == 'object' && w !== null
        ? (w = wt(w))
        : ((w = lt(n) ? _n : Ke.current), (w = Qn(t, w)));
      var L = n.getDerivedStateFromProps,
        I = typeof L == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
      (I ||
        (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof o.componentWillReceiveProps != 'function') ||
        ((d !== r || f !== w) && Na(t, o, r, w)),
        (sn = !1));
      var j = t.memoizedState;
      ((o.state = j),
        zl(t, r, o, l),
        (f = t.memoizedState),
        d !== r || j !== f || rt.current || sn
          ? (typeof L == 'function' && (Ro(t, n, L, r), (f = t.memoizedState)),
            (d = sn || Ca(t, n, d, r, j, f, w))
              ? (I ||
                  (typeof o.UNSAFE_componentWillMount != 'function' &&
                    typeof o.componentWillMount != 'function') ||
                  (typeof o.componentWillMount == 'function' && o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == 'function' &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = f)),
            (o.props = r),
            (o.state = f),
            (o.context = w),
            (r = d))
          : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1)));
    } else {
      ((o = t.stateNode),
        Ju(e, t),
        (d = t.memoizedProps),
        (w = t.type === t.elementType ? d : Lt(t.type, d)),
        (o.props = w),
        (I = t.pendingProps),
        (j = o.context),
        (f = n.contextType),
        typeof f == 'object' && f !== null
          ? (f = wt(f))
          : ((f = lt(n) ? _n : Ke.current), (f = Qn(t, f))));
      var U = n.getDerivedStateFromProps;
      ((L = typeof U == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
        (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof o.componentWillReceiveProps != 'function') ||
        ((d !== I || j !== f) && Na(t, o, r, f)),
        (sn = !1),
        (j = t.memoizedState),
        (o.state = j),
        zl(t, r, o, l));
      var H = t.memoizedState;
      d !== I || j !== H || rt.current || sn
        ? (typeof U == 'function' && (Ro(t, n, U, r), (H = t.memoizedState)),
          (w = sn || Ca(t, n, w, r, j, H, f) || !1)
            ? (L ||
                (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                  typeof o.componentWillUpdate != 'function') ||
                (typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(r, H, f),
                typeof o.UNSAFE_componentWillUpdate == 'function' &&
                  o.UNSAFE_componentWillUpdate(r, H, f)),
              typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof o.componentDidUpdate != 'function' ||
                (d === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != 'function' ||
                (d === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = H)),
          (o.props = r),
          (o.state = H),
          (o.context = f),
          (r = w))
        : (typeof o.componentDidUpdate != 'function' ||
            (d === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != 'function' ||
            (d === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Do(e, t, n, r, i, l);
  }
  function Do(e, t, n, r, l, i) {
    Da(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return (l && Wu(t, n, !1), Vt(e, t, i));
    ((r = t.stateNode), (Sf.current = t));
    var d = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = Yn(t, e.child, null, i)), (t.child = Yn(t, null, d, i)))
        : et(e, t, d, i),
      (t.memoizedState = r.state),
      l && Wu(t, n, !0),
      t.child
    );
  }
  function Fa(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Uu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Uu(e, t.context, !1),
      wo(e, t.containerInfo));
  }
  function Ba(e, t, n, r, l) {
    return (Kn(), fo(l), (t.flags |= 256), et(e, t, n, r), t.child);
  }
  var Ao = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Fo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ua(e, t, n) {
    var r = t.pendingProps,
      l = Ee.current,
      i = !1,
      o = (t.flags & 128) !== 0,
      d;
    if (
      ((d = o) || (d = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      d ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      _e(Ee, l & 1),
      e === null)
    )
      return (
        co(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((o = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (o = { mode: 'hidden', children: o }),
                (r & 1) === 0 && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = o))
                  : (i = ni(o, r, 0, null)),
                (e = In(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = Fo(n)),
                (t.memoizedState = Ao),
                e)
              : Bo(t, o))
      );
    if (((l = e.memoizedState), l !== null && ((d = l.dehydrated), d !== null)))
      return xf(e, t, o, r, d, l, n);
    if (i) {
      ((i = r.fallback), (o = t.mode), (l = e.child), (d = l.sibling));
      var f = { mode: 'hidden', children: r.children };
      return (
        (o & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = f), (t.deletions = null))
          : ((r = mn(l, f)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        d !== null ? (i = mn(d, i)) : ((i = In(i, o, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? Fo(n)
            : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
        (i.memoizedState = o),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ao),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = mn(i, { mode: 'visible', children: r.children })),
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
  function Bo(e, t) {
    return (
      (t = ni({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Hl(e, t, n, r) {
    return (
      r !== null && fo(r),
      Yn(t, e.child, null, n),
      (e = Bo(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function xf(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Oo(Error(a(422)))), Hl(e, t, o, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (l = t.mode),
            (r = ni({ mode: 'visible', children: r.children }, l, 0, null)),
            (i = In(i, l, o, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && Yn(t, e.child, null, o),
            (t.child.memoizedState = Fo(o)),
            (t.memoizedState = Ao),
            i);
    if ((t.mode & 1) === 0) return Hl(e, t, o, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var d = r.dgst;
      return ((r = d), (i = Error(a(419))), (r = Oo(i, r, void 0)), Hl(e, t, o, r));
    }
    if (((d = (o & e.childLanes) !== 0), it || d)) {
      if (((r = He), r !== null)) {
        switch (o & -o) {
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
        ((l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l),
          l !== 0 && l !== i.retryLane && ((i.retryLane = l), Wt(e, l), Pt(r, e, l, -1)));
      }
      return (ts(), (r = Oo(Error(a(421)))), Hl(e, t, o, r));
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Df.bind(null, e)), (l._reactRetry = t), null)
      : ((e = i.treeContext),
        (pt = nn(l.nextSibling)),
        (ft = t),
        (xe = !0),
        (Tt = null),
        e !== null &&
          ((gt[yt++] = Ut),
          (gt[yt++] = $t),
          (gt[yt++] = kn),
          (Ut = e.id),
          ($t = e.overflow),
          (kn = t)),
        (t = Bo(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function $a(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), vo(e.return, t, n));
  }
  function Uo(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function Wa(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((et(e, t, r.children, n), (r = Ee.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && $a(e, n, t);
          else if (e.tag === 19) $a(e, n, t);
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
    if ((_e(Ee, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate), e !== null && Dl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            Uo(t, !1, l, n, i));
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Dl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          Uo(t, !0, n, null, i);
          break;
        case 'together':
          Uo(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Vl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Vt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Nn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (e = t.child, n = mn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = mn(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Cf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Fa(t), Kn());
        break;
      case 5:
        na(t);
        break;
      case 1:
        lt(t.type) && Nl(t);
        break;
      case 4:
        wo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (_e(Pl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (_e(Ee, Ee.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Ua(e, t, n)
              : (_e(Ee, Ee.current & 1), (e = Vt(e, t, n)), e !== null ? e.sibling : null);
        _e(Ee, Ee.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Wa(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          _e(Ee, Ee.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), za(e, t, n));
    }
    return Vt(e, t, n);
  }
  var Ha, $o, Va, qa;
  ((Ha = function (e, t) {
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
    ($o = function () {}),
    (Va = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), Cn(zt.current));
        var i = null;
        switch (n) {
          case 'input':
            ((l = ht(e, l)), (r = ht(e, r)), (i = []));
            break;
          case 'select':
            ((l = F({}, l, { value: void 0 })), (r = F({}, r, { value: void 0 })), (i = []));
            break;
          case 'textarea':
            ((l = yi(e, l)), (r = yi(e, r)), (i = []));
            break;
          default:
            typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = xl);
        }
        _i(n, r);
        var o;
        n = null;
        for (w in l)
          if (!r.hasOwnProperty(w) && l.hasOwnProperty(w) && l[w] != null)
            if (w === 'style') {
              var d = l[w];
              for (o in d) d.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
            } else
              w !== 'dangerouslySetInnerHTML' &&
                w !== 'children' &&
                w !== 'suppressContentEditableWarning' &&
                w !== 'suppressHydrationWarning' &&
                w !== 'autoFocus' &&
                (_.hasOwnProperty(w) ? i || (i = []) : (i = i || []).push(w, null));
        for (w in r) {
          var f = r[w];
          if (
            ((d = l != null ? l[w] : void 0),
            r.hasOwnProperty(w) && f !== d && (f != null || d != null))
          )
            if (w === 'style')
              if (d) {
                for (o in d)
                  !d.hasOwnProperty(o) ||
                    (f && f.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ''));
                for (o in f) f.hasOwnProperty(o) && d[o] !== f[o] && (n || (n = {}), (n[o] = f[o]));
              } else (n || (i || (i = []), i.push(w, n)), (n = f));
            else
              w === 'dangerouslySetInnerHTML'
                ? ((f = f ? f.__html : void 0),
                  (d = d ? d.__html : void 0),
                  f != null && d !== f && (i = i || []).push(w, f))
                : w === 'children'
                  ? (typeof f != 'string' && typeof f != 'number') || (i = i || []).push(w, '' + f)
                  : w !== 'suppressContentEditableWarning' &&
                    w !== 'suppressHydrationWarning' &&
                    (_.hasOwnProperty(w)
                      ? (f != null && w === 'onScroll' && ke('scroll', e), i || d === f || (i = []))
                      : (i = i || []).push(w, f));
        }
        n && (i = i || []).push('style', n);
        var w = i;
        (t.updateQueue = w) && (t.flags |= 4);
      }
    }),
    (qa = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function Wr(e, t) {
    if (!xe)
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
  function Xe(e) {
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
  function Ef(e, t, n) {
    var r = t.pendingProps;
    switch ((uo(t), t.tag)) {
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
        return (Xe(t), null);
      case 1:
        return (lt(t.type) && El(), Xe(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Jn(),
          Se(rt),
          Se(Ke),
          So(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Il(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Tt !== null && (Zo(Tt), (Tt = null)))),
          $o(e, t),
          Xe(t),
          null
        );
      case 5:
        _o(t);
        var l = Cn(Ar.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Va(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return (Xe(t), null);
          }
          if (((e = Cn(zt.current)), Il(t))) {
            ((r = t.stateNode), (n = t.type));
            var i = t.memoizedProps;
            switch (((r[Mt] = t), (r[Pr] = i), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                (ke('cancel', r), ke('close', r));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ke('load', r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Lr.length; l++) ke(Lr[l], r);
                break;
              case 'source':
                ke('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                (ke('error', r), ke('load', r));
                break;
              case 'details':
                ke('toggle', r);
                break;
              case 'input':
                (vt(r, i), ke('invalid', r));
                break;
              case 'select':
                ((r._wrapperState = { wasMultiple: !!i.multiple }), ke('invalid', r));
                break;
              case 'textarea':
                (Ts(r, i), ke('invalid', r));
            }
            (_i(n, i), (l = null));
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var d = i[o];
                o === 'children'
                  ? typeof d == 'string'
                    ? r.textContent !== d &&
                      (i.suppressHydrationWarning !== !0 && Sl(r.textContent, d, e),
                      (l = ['children', d]))
                    : typeof d == 'number' &&
                      r.textContent !== '' + d &&
                      (i.suppressHydrationWarning !== !0 && Sl(r.textContent, d, e),
                      (l = ['children', '' + d]))
                  : _.hasOwnProperty(o) && d != null && o === 'onScroll' && ke('scroll', r);
              }
            switch (n) {
              case 'input':
                (Et(r), ur(r, i, !0));
                break;
              case 'textarea':
                (Et(r), Is(r));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof i.onClick == 'function' && (r.onclick = xl);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((o = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Rs(n)),
              e === 'http://www.w3.org/1999/xhtml'
                ? n === 'script'
                  ? ((e = o.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                    ? (e = o.createElement(n, { is: r.is }))
                    : ((e = o.createElement(n)),
                      n === 'select' &&
                        ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[Mt] = t),
              (e[Pr] = r),
              Ha(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((o = ki(n, r)), n)) {
                case 'dialog':
                  (ke('cancel', e), ke('close', e), (l = r));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (ke('load', e), (l = r));
                  break;
                case 'video':
                case 'audio':
                  for (l = 0; l < Lr.length; l++) ke(Lr[l], e);
                  l = r;
                  break;
                case 'source':
                  (ke('error', e), (l = r));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (ke('error', e), ke('load', e), (l = r));
                  break;
                case 'details':
                  (ke('toggle', e), (l = r));
                  break;
                case 'input':
                  (vt(e, r), (l = ht(e, r)), ke('invalid', e));
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = F({}, r, { value: void 0 })),
                    ke('invalid', e));
                  break;
                case 'textarea':
                  (Ts(e, r), (l = yi(e, r)), ke('invalid', e));
                  break;
                default:
                  l = r;
              }
              (_i(n, l), (d = l));
              for (i in d)
                if (d.hasOwnProperty(i)) {
                  var f = d[i];
                  i === 'style'
                    ? Ms(e, f)
                    : i === 'dangerouslySetInnerHTML'
                      ? ((f = f ? f.__html : void 0), f != null && Ps(e, f))
                      : i === 'children'
                        ? typeof f == 'string'
                          ? (n !== 'textarea' || f !== '') && cr(e, f)
                          : typeof f == 'number' && cr(e, '' + f)
                        : i !== 'suppressContentEditableWarning' &&
                          i !== 'suppressHydrationWarning' &&
                          i !== 'autoFocus' &&
                          (_.hasOwnProperty(i)
                            ? f != null && i === 'onScroll' && ke('scroll', e)
                            : f != null && K(e, i, f, o));
                }
              switch (n) {
                case 'input':
                  (Et(e), ur(e, r, !1));
                  break;
                case 'textarea':
                  (Et(e), Is(e));
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + b(r.value));
                  break;
                case 'select':
                  ((e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? Mn(e, !!r.multiple, i, !1)
                      : r.defaultValue != null && Mn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = xl);
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
        return (Xe(t), null);
      case 6:
        if (e && t.stateNode != null) qa(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(a(166));
          if (((n = Cn(Ar.current)), Cn(zt.current), Il(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Mt] = t),
              (i = r.nodeValue !== n) && ((e = ft), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Sl(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Sl(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Mt] = t),
              (t.stateNode = r));
        }
        return (Xe(t), null);
      case 13:
        if (
          (Se(Ee),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (xe && pt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Gu(), Kn(), (t.flags |= 98560), (i = !1));
          else if (((i = Il(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(a(318));
              if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
                throw Error(a(317));
              i[Mt] = t;
            } else (Kn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Xe(t), (i = !1));
          } else (Tt !== null && (Zo(Tt), (Tt = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Ee.current & 1) !== 0 ? Be === 0 && (Be = 3) : ts())),
            t.updateQueue !== null && (t.flags |= 4),
            Xe(t),
            null);
      case 4:
        return (Jn(), $o(e, t), e === null && Ir(t.stateNode.containerInfo), Xe(t), null);
      case 10:
        return (ho(t.type._context), Xe(t), null);
      case 17:
        return (lt(t.type) && El(), Xe(t), null);
      case 19:
        if ((Se(Ee), (i = t.memoizedState), i === null)) return (Xe(t), null);
        if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) Wr(i, !1);
          else {
            if (Be !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = Dl(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      Wr(i, !1),
                      r = o.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (o = i.alternate),
                      o === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = o.childLanes),
                          (i.lanes = o.lanes),
                          (i.child = o.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = o.memoizedProps),
                          (i.memoizedState = o.memoizedState),
                          (i.updateQueue = o.updateQueue),
                          (i.type = o.type),
                          (e = o.dependencies),
                          (i.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (n = n.sibling));
                  return (_e(Ee, (Ee.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Pe() > rr &&
              ((t.flags |= 128), (r = !0), Wr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Dl(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Wr(i, !0),
                i.tail === null && i.tailMode === 'hidden' && !o.alternate && !xe)
              )
                return (Xe(t), null);
            } else
              2 * Pe() - i.renderingStartTime > rr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Wr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = i.last), n !== null ? (n.sibling = o) : (t.child = o), (i.last = o));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Pe()),
            (t.sibling = null),
            (n = Ee.current),
            _e(Ee, r ? (n & 1) | 2 : n & 1),
            t)
          : (Xe(t), null);
      case 22:
      case 23:
        return (
          es(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (mt & 1073741824) !== 0 && (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Xe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Nf(e, t) {
    switch ((uo(t), t.tag)) {
      case 1:
        return (
          lt(t.type) && El(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Jn(),
          Se(rt),
          Se(Ke),
          So(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (_o(t), null);
      case 13:
        if ((Se(Ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(a(340));
          Kn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Se(Ee), null);
      case 4:
        return (Jn(), null);
      case 10:
        return (ho(t.type._context), null);
      case 22:
      case 23:
        return (es(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ql = !1,
    Ze = !1,
    jf = typeof WeakSet == 'function' ? WeakSet : Set,
    $ = null;
  function tr(e, t) {
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
  function Wo(e, t, n) {
    try {
      n();
    } catch (r) {
      Le(e, t, r);
    }
  }
  var Qa = !1;
  function Tf(e, t) {
    if (((Ji = dl), (e = Cu()), qi(e))) {
      if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, i.nodeType);
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              d = -1,
              f = -1,
              w = 0,
              L = 0,
              I = e,
              j = null;
            t: for (;;) {
              for (
                var U;
                I !== n || (l !== 0 && I.nodeType !== 3) || (d = o + l),
                  I !== i || (r !== 0 && I.nodeType !== 3) || (f = o + r),
                  I.nodeType === 3 && (o += I.nodeValue.length),
                  (U = I.firstChild) !== null;
              )
                ((j = I), (I = U));
              for (;;) {
                if (I === e) break t;
                if (
                  (j === n && ++w === l && (d = o),
                  j === i && ++L === r && (f = o),
                  (U = I.nextSibling) !== null)
                )
                  break;
                ((I = j), (j = I.parentNode));
              }
              I = U;
            }
            n = d === -1 || f === -1 ? null : { start: d, end: f };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (eo = { focusedElem: e, selectionRange: n }, dl = !1, $ = t; $ !== null; )
      if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), ($ = e));
      else
        for (; $ !== null; ) {
          t = $;
          try {
            var H = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (H !== null) {
                    var Q = H.memoizedProps,
                      Oe = H.memoizedState,
                      h = t.stateNode,
                      p = h.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Q : Lt(t.type, Q),
                        Oe
                      );
                    h.__reactInternalSnapshotBeforeUpdate = p;
                  }
                  break;
                case 3:
                  var g = t.stateNode.containerInfo;
                  g.nodeType === 1
                    ? (g.textContent = '')
                    : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (P) {
            Le(t, t.return, P);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), ($ = e));
            break;
          }
          $ = t.return;
        }
    return ((H = Qa), (Qa = !1), H);
  }
  function Hr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          ((l.destroy = void 0), i !== void 0 && Wo(t, n, i));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Ql(e, t) {
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
  function Ho(e) {
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
  function ba(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), ba(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Mt], delete t[Pr], delete t[lo], delete t[cf], delete t[df])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Ga(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ka(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ga(e.return)) return null;
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
  function Vo(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = xl)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Vo(e, t, n), e = e.sibling; e !== null; ) (Vo(e, t, n), (e = e.sibling));
  }
  function qo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (qo(e, t, n), e = e.sibling; e !== null; ) (qo(e, t, n), (e = e.sibling));
  }
  var Qe = null,
    It = !1;
  function an(e, t, n) {
    for (n = n.child; n !== null; ) (Ya(e, t, n), (n = n.sibling));
  }
  function Ya(e, t, n) {
    if (Ot && typeof Ot.onCommitFiberUnmount == 'function')
      try {
        Ot.onCommitFiberUnmount(il, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ze || tr(n, t);
      case 6:
        var r = Qe,
          l = It;
        ((Qe = null),
          an(e, t, n),
          (Qe = r),
          (It = l),
          Qe !== null &&
            (It
              ? ((e = Qe),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : Qe.removeChild(n.stateNode)));
        break;
      case 18:
        Qe !== null &&
          (It
            ? ((e = Qe),
              (n = n.stateNode),
              e.nodeType === 8 ? ro(e.parentNode, n) : e.nodeType === 1 && ro(e, n),
              kr(e))
            : ro(Qe, n.stateNode));
        break;
      case 4:
        ((r = Qe),
          (l = It),
          (Qe = n.stateNode.containerInfo),
          (It = !0),
          an(e, t, n),
          (Qe = r),
          (It = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ze && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var i = l,
              o = i.destroy;
            ((i = i.tag),
              o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Wo(n, t, o),
              (l = l.next));
          } while (l !== r);
        }
        an(e, t, n);
        break;
      case 1:
        if (!Ze && (tr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (d) {
            Le(n, t, d);
          }
        an(e, t, n);
        break;
      case 21:
        an(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ze = (r = Ze) || n.memoizedState !== null), an(e, t, n), (Ze = r))
          : an(e, t, n);
        break;
      default:
        an(e, t, n);
    }
  }
  function Xa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new jf()),
        t.forEach(function (r) {
          var l = Af.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function Rt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            o = t,
            d = o;
          e: for (; d !== null; ) {
            switch (d.tag) {
              case 5:
                ((Qe = d.stateNode), (It = !1));
                break e;
              case 3:
                ((Qe = d.stateNode.containerInfo), (It = !0));
                break e;
              case 4:
                ((Qe = d.stateNode.containerInfo), (It = !0));
                break e;
            }
            d = d.return;
          }
          if (Qe === null) throw Error(a(160));
          (Ya(i, o, l), (Qe = null), (It = !1));
          var f = l.alternate;
          (f !== null && (f.return = null), (l.return = null));
        } catch (w) {
          Le(l, t, w);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Za(t, e), (t = t.sibling));
  }
  function Za(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Rt(t, e), At(e), r & 4)) {
          try {
            (Hr(3, e, e.return), Ql(3, e));
          } catch (Q) {
            Le(e, e.return, Q);
          }
          try {
            Hr(5, e, e.return);
          } catch (Q) {
            Le(e, e.return, Q);
          }
        }
        break;
      case 1:
        (Rt(t, e), At(e), r & 512 && n !== null && tr(n, n.return));
        break;
      case 5:
        if ((Rt(t, e), At(e), r & 512 && n !== null && tr(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            cr(l, '');
          } catch (Q) {
            Le(e, e.return, Q);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            o = n !== null ? n.memoizedProps : i,
            d = e.type,
            f = e.updateQueue;
          if (((e.updateQueue = null), f !== null))
            try {
              (d === 'input' && i.type === 'radio' && i.name != null && sr(l, i), ki(d, o));
              var w = ki(d, i);
              for (o = 0; o < f.length; o += 2) {
                var L = f[o],
                  I = f[o + 1];
                L === 'style'
                  ? Ms(l, I)
                  : L === 'dangerouslySetInnerHTML'
                    ? Ps(l, I)
                    : L === 'children'
                      ? cr(l, I)
                      : K(l, L, I, w);
              }
              switch (d) {
                case 'input':
                  Kt(l, i);
                  break;
                case 'textarea':
                  Ls(l, i);
                  break;
                case 'select':
                  var j = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var U = i.value;
                  U != null
                    ? Mn(l, !!i.multiple, U, !1)
                    : j !== !!i.multiple &&
                      (i.defaultValue != null
                        ? Mn(l, !!i.multiple, i.defaultValue, !0)
                        : Mn(l, !!i.multiple, i.multiple ? [] : '', !1));
              }
              l[Pr] = i;
            } catch (Q) {
              Le(e, e.return, Q);
            }
        }
        break;
      case 6:
        if ((Rt(t, e), At(e), r & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          ((l = e.stateNode), (i = e.memoizedProps));
          try {
            l.nodeValue = i;
          } catch (Q) {
            Le(e, e.return, Q);
          }
        }
        break;
      case 3:
        if ((Rt(t, e), At(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            kr(t.containerInfo);
          } catch (Q) {
            Le(e, e.return, Q);
          }
        break;
      case 4:
        (Rt(t, e), At(e));
        break;
      case 13:
        (Rt(t, e),
          At(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (Go = Pe())),
          r & 4 && Xa(e));
        break;
      case 22:
        if (
          ((L = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ze = (w = Ze) || L), Rt(t, e), (Ze = w)) : Rt(t, e),
          At(e),
          r & 8192)
        ) {
          if (
            ((w = e.memoizedState !== null), (e.stateNode.isHidden = w) && !L && (e.mode & 1) !== 0)
          )
            for ($ = e, L = e.child; L !== null; ) {
              for (I = $ = L; $ !== null; ) {
                switch (((j = $), (U = j.child), j.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Hr(4, j, j.return);
                    break;
                  case 1:
                    tr(j, j.return);
                    var H = j.stateNode;
                    if (typeof H.componentWillUnmount == 'function') {
                      ((r = j), (n = j.return));
                      try {
                        ((t = r),
                          (H.props = t.memoizedProps),
                          (H.state = t.memoizedState),
                          H.componentWillUnmount());
                      } catch (Q) {
                        Le(r, n, Q);
                      }
                    }
                    break;
                  case 5:
                    tr(j, j.return);
                    break;
                  case 22:
                    if (j.memoizedState !== null) {
                      tc(I);
                      continue;
                    }
                }
                U !== null ? ((U.return = j), ($ = U)) : tc(I);
              }
              L = L.sibling;
            }
          e: for (L = null, I = e; ; ) {
            if (I.tag === 5) {
              if (L === null) {
                L = I;
                try {
                  ((l = I.stateNode),
                    w
                      ? ((i = l.style),
                        typeof i.setProperty == 'function'
                          ? i.setProperty('display', 'none', 'important')
                          : (i.display = 'none'))
                      : ((d = I.stateNode),
                        (f = I.memoizedProps.style),
                        (o = f != null && f.hasOwnProperty('display') ? f.display : null),
                        (d.style.display = Os('display', o))));
                } catch (Q) {
                  Le(e, e.return, Q);
                }
              }
            } else if (I.tag === 6) {
              if (L === null)
                try {
                  I.stateNode.nodeValue = w ? '' : I.memoizedProps;
                } catch (Q) {
                  Le(e, e.return, Q);
                }
            } else if (
              ((I.tag !== 22 && I.tag !== 23) || I.memoizedState === null || I === e) &&
              I.child !== null
            ) {
              ((I.child.return = I), (I = I.child));
              continue;
            }
            if (I === e) break e;
            for (; I.sibling === null; ) {
              if (I.return === null || I.return === e) break e;
              (L === I && (L = null), (I = I.return));
            }
            (L === I && (L = null), (I.sibling.return = I.return), (I = I.sibling));
          }
        }
        break;
      case 19:
        (Rt(t, e), At(e), r & 4 && Xa(e));
        break;
      case 21:
        break;
      default:
        (Rt(t, e), At(e));
    }
  }
  function At(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ga(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (cr(l, ''), (r.flags &= -33));
            var i = Ka(e);
            qo(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              d = Ka(e);
            Vo(e, d, o);
            break;
          default:
            throw Error(a(161));
        }
      } catch (f) {
        Le(e, e.return, f);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Lf(e, t, n) {
    (($ = e), Ja(e));
  }
  function Ja(e, t, n) {
    for (var r = (e.mode & 1) !== 0; $ !== null; ) {
      var l = $,
        i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || ql;
        if (!o) {
          var d = l.alternate,
            f = (d !== null && d.memoizedState !== null) || Ze;
          d = ql;
          var w = Ze;
          if (((ql = o), (Ze = f) && !w))
            for ($ = l; $ !== null; )
              ((o = $),
                (f = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? nc(l)
                  : f !== null
                    ? ((f.return = o), ($ = f))
                    : nc(l));
          for (; i !== null; ) (($ = i), Ja(i), (i = i.sibling));
          (($ = l), (ql = d), (Ze = w));
        }
        ec(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? ((i.return = l), ($ = i)) : ec(e);
    }
  }
  function ec(e) {
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
                Ze || Ql(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ze)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : Lt(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var i = t.updateQueue;
                i !== null && ta(t, i, r);
                break;
              case 3:
                var o = t.updateQueue;
                if (o !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  ta(t, o, n);
                }
                break;
              case 5:
                var d = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = d;
                  var f = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      f.autoFocus && n.focus();
                      break;
                    case 'img':
                      f.src && (n.src = f.src);
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
                  var w = t.alternate;
                  if (w !== null) {
                    var L = w.memoizedState;
                    if (L !== null) {
                      var I = L.dehydrated;
                      I !== null && kr(I);
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
                throw Error(a(163));
            }
          Ze || (t.flags & 512 && Ho(t));
        } catch (j) {
          Le(t, t.return, j);
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
  function tc(e) {
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
  function nc(e) {
    for (; $ !== null; ) {
      var t = $;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ql(4, t);
            } catch (f) {
              Le(t, n, f);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (f) {
                Le(t, l, f);
              }
            }
            var i = t.return;
            try {
              Ho(t);
            } catch (f) {
              Le(t, i, f);
            }
            break;
          case 5:
            var o = t.return;
            try {
              Ho(t);
            } catch (f) {
              Le(t, o, f);
            }
        }
      } catch (f) {
        Le(t, t.return, f);
      }
      if (t === e) {
        $ = null;
        break;
      }
      var d = t.sibling;
      if (d !== null) {
        ((d.return = t.return), ($ = d));
        break;
      }
      $ = t.return;
    }
  }
  var If = Math.ceil,
    bl = D.ReactCurrentDispatcher,
    Qo = D.ReactCurrentOwner,
    kt = D.ReactCurrentBatchConfig,
    pe = 0,
    He = null,
    Ae = null,
    be = 0,
    mt = 0,
    nr = rn(0),
    Be = 0,
    Vr = null,
    Nn = 0,
    Gl = 0,
    bo = 0,
    qr = null,
    ot = null,
    Go = 0,
    rr = 1 / 0,
    qt = null,
    Kl = !1,
    Ko = null,
    cn = null,
    Yl = !1,
    dn = null,
    Xl = 0,
    Qr = 0,
    Yo = null,
    Zl = -1,
    Jl = 0;
  function tt() {
    return (pe & 6) !== 0 ? Pe() : Zl !== -1 ? Zl : (Zl = Pe());
  }
  function fn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (pe & 2) !== 0 && be !== 0
        ? be & -be
        : pf.transition !== null
          ? (Jl === 0 && (Jl = Ks()), Jl)
          : ((e = ge), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : lu(e.type))), e);
  }
  function Pt(e, t, n, r) {
    if (50 < Qr) throw ((Qr = 0), (Yo = null), Error(a(185)));
    (vr(e, n, r),
      ((pe & 2) === 0 || e !== He) &&
        (e === He && ((pe & 2) === 0 && (Gl |= n), Be === 4 && pn(e, be)),
        st(e, r),
        n === 1 && pe === 0 && (t.mode & 1) === 0 && ((rr = Pe() + 500), jl && on())));
  }
  function st(e, t) {
    var n = e.callbackNode;
    fd(e, t);
    var r = ul(e, e === He ? be : 0);
    if (r === 0) (n !== null && Qs(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Qs(n), t === 1))
        (e.tag === 0 ? ff(lc.bind(null, e)) : Hu(lc.bind(null, e)),
          uf(function () {
            (pe & 6) === 0 && on();
          }),
          (n = null));
      else {
        switch (Ys(r)) {
          case 1:
            n = Ti;
            break;
          case 4:
            n = bs;
            break;
          case 16:
            n = ll;
            break;
          case 536870912:
            n = Gs;
            break;
          default:
            n = ll;
        }
        n = fc(n, rc.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function rc(e, t) {
    if (((Zl = -1), (Jl = 0), (pe & 6) !== 0)) throw Error(a(327));
    var n = e.callbackNode;
    if (lr() && e.callbackNode !== n) return null;
    var r = ul(e, e === He ? be : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ei(e, r);
    else {
      t = r;
      var l = pe;
      pe |= 2;
      var i = oc();
      (He !== e || be !== t) && ((qt = null), (rr = Pe() + 500), Tn(e, t));
      do
        try {
          Of();
          break;
        } catch (d) {
          ic(e, d);
        }
      while (!0);
      (mo(), (bl.current = i), (pe = l), Ae !== null ? (t = 0) : ((He = null), (be = 0), (t = Be)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Li(e)), l !== 0 && ((r = l), (t = Xo(e, l)))), t === 1))
        throw ((n = Vr), Tn(e, 0), pn(e, r), st(e, Pe()), n);
      if (t === 6) pn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Rf(l) &&
            ((t = ei(e, r)),
            t === 2 && ((i = Li(e)), i !== 0 && ((r = i), (t = Xo(e, i)))),
            t === 1))
        )
          throw ((n = Vr), Tn(e, 0), pn(e, r), st(e, Pe()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Ln(e, ot, qt);
            break;
          case 3:
            if ((pn(e, r), (r & 130023424) === r && ((t = Go + 500 - Pe()), 10 < t))) {
              if (ul(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (tt(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = no(Ln.bind(null, e, ot, qt), t);
              break;
            }
            Ln(e, ot, qt);
            break;
          case 4:
            if ((pn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - Nt(r);
              ((i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i));
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
                            : 1960 * If(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = no(Ln.bind(null, e, ot, qt), r);
              break;
            }
            Ln(e, ot, qt);
            break;
          case 5:
            Ln(e, ot, qt);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return (st(e, Pe()), e.callbackNode === n ? rc.bind(null, e) : null);
  }
  function Xo(e, t) {
    var n = qr;
    return (
      e.current.memoizedState.isDehydrated && (Tn(e, t).flags |= 256),
      (e = ei(e, t)),
      e !== 2 && ((t = ot), (ot = n), t !== null && Zo(t)),
      e
    );
  }
  function Zo(e) {
    ot === null ? (ot = e) : ot.push.apply(ot, e);
  }
  function Rf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!jt(i(), l)) return !1;
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
  function pn(e, t) {
    for (
      t &= ~bo, t &= ~Gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - Nt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function lc(e) {
    if ((pe & 6) !== 0) throw Error(a(327));
    lr();
    var t = ul(e, 0);
    if ((t & 1) === 0) return (st(e, Pe()), null);
    var n = ei(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Li(e);
      r !== 0 && ((t = r), (n = Xo(e, r)));
    }
    if (n === 1) throw ((n = Vr), Tn(e, 0), pn(e, t), st(e, Pe()), n);
    if (n === 6) throw Error(a(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Ln(e, ot, qt),
      st(e, Pe()),
      null
    );
  }
  function Jo(e, t) {
    var n = pe;
    pe |= 1;
    try {
      return e(t);
    } finally {
      ((pe = n), pe === 0 && ((rr = Pe() + 500), jl && on()));
    }
  }
  function jn(e) {
    dn !== null && dn.tag === 0 && (pe & 6) === 0 && lr();
    var t = pe;
    pe |= 1;
    var n = kt.transition,
      r = ge;
    try {
      if (((kt.transition = null), (ge = 1), e)) return e();
    } finally {
      ((ge = r), (kt.transition = n), (pe = t), (pe & 6) === 0 && on());
    }
  }
  function es() {
    ((mt = nr.current), Se(nr));
  }
  function Tn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), sf(n)), Ae !== null))
      for (n = Ae.return; n !== null; ) {
        var r = n;
        switch ((uo(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && El());
            break;
          case 3:
            (Jn(), Se(rt), Se(Ke), So());
            break;
          case 5:
            _o(r);
            break;
          case 4:
            Jn();
            break;
          case 13:
            Se(Ee);
            break;
          case 19:
            Se(Ee);
            break;
          case 10:
            ho(r.type._context);
            break;
          case 22:
          case 23:
            es();
        }
        n = n.return;
      }
    if (
      ((He = e),
      (Ae = e = mn(e.current, null)),
      (be = mt = t),
      (Be = 0),
      (Vr = null),
      (bo = Gl = Nn = 0),
      (ot = qr = null),
      xn !== null)
    ) {
      for (t = 0; t < xn.length; t++)
        if (((n = xn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var o = i.next;
            ((i.next = l), (r.next = o));
          }
          n.pending = r;
        }
      xn = null;
    }
    return e;
  }
  function ic(e, t) {
    do {
      var n = Ae;
      try {
        if ((mo(), (Al.current = $l), Fl)) {
          for (var r = Ne.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          Fl = !1;
        }
        if (
          ((En = 0),
          (We = Fe = Ne = null),
          (Fr = !1),
          (Br = 0),
          (Qo.current = null),
          n === null || n.return === null)
        ) {
          ((Be = 1), (Vr = t), (Ae = null));
          break;
        }
        e: {
          var i = e,
            o = n.return,
            d = n,
            f = t;
          if (
            ((t = be),
            (d.flags |= 32768),
            f !== null && typeof f == 'object' && typeof f.then == 'function')
          ) {
            var w = f,
              L = d,
              I = L.tag;
            if ((L.mode & 1) === 0 && (I === 0 || I === 11 || I === 15)) {
              var j = L.alternate;
              j
                ? ((L.updateQueue = j.updateQueue),
                  (L.memoizedState = j.memoizedState),
                  (L.lanes = j.lanes))
                : ((L.updateQueue = null), (L.memoizedState = null));
            }
            var U = Ia(o);
            if (U !== null) {
              ((U.flags &= -257), Ra(U, o, d, i, t), U.mode & 1 && La(i, w, t), (t = U), (f = w));
              var H = t.updateQueue;
              if (H === null) {
                var Q = new Set();
                (Q.add(f), (t.updateQueue = Q));
              } else H.add(f);
              break e;
            } else {
              if ((t & 1) === 0) {
                (La(i, w, t), ts());
                break e;
              }
              f = Error(a(426));
            }
          } else if (xe && d.mode & 1) {
            var Oe = Ia(o);
            if (Oe !== null) {
              ((Oe.flags & 65536) === 0 && (Oe.flags |= 256), Ra(Oe, o, d, i, t), fo(er(f, d)));
              break e;
            }
          }
          ((i = f = er(f, d)),
            Be !== 4 && (Be = 2),
            qr === null ? (qr = [i]) : qr.push(i),
            (i = o));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var h = ja(i, f, t);
                ea(i, h);
                break e;
              case 1:
                d = f;
                var p = i.type,
                  g = i.stateNode;
                if (
                  (i.flags & 128) === 0 &&
                  (typeof p.getDerivedStateFromError == 'function' ||
                    (g !== null &&
                      typeof g.componentDidCatch == 'function' &&
                      (cn === null || !cn.has(g))))
                ) {
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var P = Ta(i, d, t);
                  ea(i, P);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        uc(n);
      } catch (G) {
        ((t = G), Ae === n && n !== null && (Ae = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function oc() {
    var e = bl.current;
    return ((bl.current = $l), e === null ? $l : e);
  }
  function ts() {
    ((Be === 0 || Be === 3 || Be === 2) && (Be = 4),
      He === null || ((Nn & 268435455) === 0 && (Gl & 268435455) === 0) || pn(He, be));
  }
  function ei(e, t) {
    var n = pe;
    pe |= 2;
    var r = oc();
    (He !== e || be !== t) && ((qt = null), Tn(e, t));
    do
      try {
        Pf();
        break;
      } catch (l) {
        ic(e, l);
      }
    while (!0);
    if ((mo(), (pe = n), (bl.current = r), Ae !== null)) throw Error(a(261));
    return ((He = null), (be = 0), Be);
  }
  function Pf() {
    for (; Ae !== null; ) sc(Ae);
  }
  function Of() {
    for (; Ae !== null && !rd(); ) sc(Ae);
  }
  function sc(e) {
    var t = dc(e.alternate, e, mt);
    ((e.memoizedProps = e.pendingProps), t === null ? uc(e) : (Ae = t), (Qo.current = null));
  }
  function uc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Ef(n, t, mt)), n !== null)) {
          Ae = n;
          return;
        }
      } else {
        if (((n = Nf(n, t)), n !== null)) {
          ((n.flags &= 32767), (Ae = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Be = 6), (Ae = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ae = t;
        return;
      }
      Ae = t = e;
    } while (t !== null);
    Be === 0 && (Be = 5);
  }
  function Ln(e, t, n) {
    var r = ge,
      l = kt.transition;
    try {
      ((kt.transition = null), (ge = 1), Mf(e, t, n, r));
    } finally {
      ((kt.transition = l), (ge = r));
    }
    return null;
  }
  function Mf(e, t, n, r) {
    do lr();
    while (dn !== null);
    if ((pe & 6) !== 0) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(a(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (pd(e, i),
      e === He && ((Ae = He = null), (be = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Yl ||
        ((Yl = !0),
        fc(ll, function () {
          return (lr(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ((i = kt.transition), (kt.transition = null));
      var o = ge;
      ge = 1;
      var d = pe;
      ((pe |= 4),
        (Qo.current = null),
        Tf(e, n),
        Za(n, e),
        Jd(eo),
        (dl = !!Ji),
        (eo = Ji = null),
        (e.current = n),
        Lf(n),
        ld(),
        (pe = d),
        (ge = o),
        (kt.transition = i));
    } else e.current = n;
    if (
      (Yl && ((Yl = !1), (dn = e), (Xl = l)),
      (i = e.pendingLanes),
      i === 0 && (cn = null),
      sd(n.stateNode),
      st(e, Pe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (Kl) throw ((Kl = !1), (e = Ko), (Ko = null), e);
    return (
      (Xl & 1) !== 0 && e.tag !== 0 && lr(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === Yo ? Qr++ : ((Qr = 0), (Yo = e))) : (Qr = 0),
      on(),
      null
    );
  }
  function lr() {
    if (dn !== null) {
      var e = Ys(Xl),
        t = kt.transition,
        n = ge;
      try {
        if (((kt.transition = null), (ge = 16 > e ? 16 : e), dn === null)) var r = !1;
        else {
          if (((e = dn), (dn = null), (Xl = 0), (pe & 6) !== 0)) throw Error(a(331));
          var l = pe;
          for (pe |= 4, $ = e.current; $ !== null; ) {
            var i = $,
              o = i.child;
            if (($.flags & 16) !== 0) {
              var d = i.deletions;
              if (d !== null) {
                for (var f = 0; f < d.length; f++) {
                  var w = d[f];
                  for ($ = w; $ !== null; ) {
                    var L = $;
                    switch (L.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Hr(8, L, i);
                    }
                    var I = L.child;
                    if (I !== null) ((I.return = L), ($ = I));
                    else
                      for (; $ !== null; ) {
                        L = $;
                        var j = L.sibling,
                          U = L.return;
                        if ((ba(L), L === w)) {
                          $ = null;
                          break;
                        }
                        if (j !== null) {
                          ((j.return = U), ($ = j));
                          break;
                        }
                        $ = U;
                      }
                  }
                }
                var H = i.alternate;
                if (H !== null) {
                  var Q = H.child;
                  if (Q !== null) {
                    H.child = null;
                    do {
                      var Oe = Q.sibling;
                      ((Q.sibling = null), (Q = Oe));
                    } while (Q !== null);
                  }
                }
                $ = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null) ((o.return = i), ($ = o));
            else
              e: for (; $ !== null; ) {
                if (((i = $), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hr(9, i, i.return);
                  }
                var h = i.sibling;
                if (h !== null) {
                  ((h.return = i.return), ($ = h));
                  break e;
                }
                $ = i.return;
              }
          }
          var p = e.current;
          for ($ = p; $ !== null; ) {
            o = $;
            var g = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && g !== null) ((g.return = o), ($ = g));
            else
              e: for (o = p; $ !== null; ) {
                if (((d = $), (d.flags & 2048) !== 0))
                  try {
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ql(9, d);
                    }
                  } catch (G) {
                    Le(d, d.return, G);
                  }
                if (d === o) {
                  $ = null;
                  break e;
                }
                var P = d.sibling;
                if (P !== null) {
                  ((P.return = d.return), ($ = P));
                  break e;
                }
                $ = d.return;
              }
          }
          if (((pe = l), on(), Ot && typeof Ot.onPostCommitFiberRoot == 'function'))
            try {
              Ot.onPostCommitFiberRoot(il, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((ge = n), (kt.transition = t));
      }
    }
    return !1;
  }
  function ac(e, t, n) {
    ((t = er(n, t)),
      (t = ja(e, t, 1)),
      (e = un(e, t, 1)),
      (t = tt()),
      e !== null && (vr(e, 1, t), st(e, t)));
  }
  function Le(e, t, n) {
    if (e.tag === 3) ac(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ac(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (cn === null || !cn.has(r)))
          ) {
            ((e = er(n, e)),
              (e = Ta(t, e, 1)),
              (t = un(t, e, 1)),
              (e = tt()),
              t !== null && (vr(t, 1, e), st(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function zf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = tt()),
      (e.pingedLanes |= e.suspendedLanes & n),
      He === e &&
        (be & n) === n &&
        (Be === 4 || (Be === 3 && (be & 130023424) === be && 500 > Pe() - Go)
          ? Tn(e, 0)
          : (bo |= n)),
      st(e, t));
  }
  function cc(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = sl), (sl <<= 1), (sl & 130023424) === 0 && (sl = 4194304)));
    var n = tt();
    ((e = Wt(e, t)), e !== null && (vr(e, t, n), st(e, n)));
  }
  function Df(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), cc(e, n));
  }
  function Af(e, t) {
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
        throw Error(a(314));
    }
    (r !== null && r.delete(t), cc(e, n));
  }
  var dc;
  dc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || rt.current) it = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((it = !1), Cf(e, t, n));
        it = (e.flags & 131072) !== 0;
      }
    else ((it = !1), xe && (t.flags & 1048576) !== 0 && Vu(t, Ll, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Vl(e, t), (e = t.pendingProps));
        var l = Qn(t, Ke.current);
        (Zn(t, n), (l = Eo(null, t, r, e, l, n)));
        var i = No();
        return (
          (t.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              lt(r) ? ((i = !0), Nl(t)) : (i = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              yo(t),
              (l.updater = Wl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Po(t, r, e, n),
              (t = Do(null, t, r, !0, i, n)))
            : ((t.tag = 0), xe && i && so(t), et(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Vl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Bf(r)),
            (e = Lt(r, e)),
            l)
          ) {
            case 0:
              t = zo(null, t, r, e, n);
              break e;
            case 1:
              t = Aa(null, t, r, e, n);
              break e;
            case 11:
              t = Pa(null, t, r, e, n);
              break e;
            case 14:
              t = Oa(null, t, r, Lt(r.type, e), n);
              break e;
          }
          throw Error(a(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Lt(r, l)),
          zo(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Lt(r, l)),
          Aa(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Fa(t), e === null)) throw Error(a(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            Ju(e, t),
            zl(t, r, null, n));
          var o = t.memoizedState;
          if (((r = o.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              ((l = er(Error(a(423)), t)), (t = Ba(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = er(Error(a(424)), t)), (t = Ba(e, t, r, n, l)));
              break e;
            } else
              for (
                pt = nn(t.stateNode.containerInfo.firstChild),
                  ft = t,
                  xe = !0,
                  Tt = null,
                  n = Xu(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Kn(), r === l)) {
              t = Vt(e, t, n);
              break e;
            }
            et(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          na(t),
          e === null && co(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          to(r, l) ? (o = null) : i !== null && to(r, i) && (t.flags |= 32),
          Da(e, t),
          et(e, t, o, n),
          t.child
        );
      case 6:
        return (e === null && co(t), null);
      case 13:
        return Ua(e, t, n);
      case 4:
        return (
          wo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Yn(t, null, r, n)) : et(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Lt(r, l)),
          Pa(e, t, r, l, n)
        );
      case 7:
        return (et(e, t, t.pendingProps, n), t.child);
      case 8:
        return (et(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (et(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (o = l.value),
            _e(Pl, r._currentValue),
            (r._currentValue = o),
            i !== null)
          )
            if (jt(i.value, o)) {
              if (i.children === l.children && !rt.current) {
                t = Vt(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var d = i.dependencies;
                if (d !== null) {
                  o = i.child;
                  for (var f = d.firstContext; f !== null; ) {
                    if (f.context === r) {
                      if (i.tag === 1) {
                        ((f = Ht(-1, n & -n)), (f.tag = 2));
                        var w = i.updateQueue;
                        if (w !== null) {
                          w = w.shared;
                          var L = w.pending;
                          (L === null ? (f.next = f) : ((f.next = L.next), (L.next = f)),
                            (w.pending = f));
                        }
                      }
                      ((i.lanes |= n),
                        (f = i.alternate),
                        f !== null && (f.lanes |= n),
                        vo(i.return, n, t),
                        (d.lanes |= n));
                      break;
                    }
                    f = f.next;
                  }
                } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((o = i.return), o === null)) throw Error(a(341));
                  ((o.lanes |= n),
                    (d = o.alternate),
                    d !== null && (d.lanes |= n),
                    vo(o, n, t),
                    (o = i.sibling));
                } else o = i.child;
                if (o !== null) o.return = i;
                else
                  for (o = i; o !== null; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (((i = o.sibling), i !== null)) {
                      ((i.return = o.return), (o = i));
                      break;
                    }
                    o = o.return;
                  }
                i = o;
              }
          (et(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Zn(t, n),
          (l = wt(l)),
          (r = r(l)),
          (t.flags |= 1),
          et(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = Lt(r, t.pendingProps)), (l = Lt(r.type, l)), Oa(e, t, r, l, n));
      case 15:
        return Ma(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Lt(r, l)),
          Vl(e, t),
          (t.tag = 1),
          lt(r) ? ((e = !0), Nl(t)) : (e = !1),
          Zn(t, n),
          Ea(t, r, l),
          Po(t, r, l, n),
          Do(null, t, r, !0, e, n)
        );
      case 19:
        return Wa(e, t, n);
      case 22:
        return za(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function fc(e, t) {
    return qs(e, t);
  }
  function Ff(e, t, n, r) {
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
    return new Ff(e, t, n, r);
  }
  function ns(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Bf(e) {
    if (typeof e == 'function') return ns(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ze)) return 11;
      if (e === Je) return 14;
    }
    return 2;
  }
  function mn(e, t) {
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
  function ti(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == 'function')) ns(e) && (o = 1);
    else if (typeof e == 'string') o = 5;
    else
      e: switch (e) {
        case we:
          return In(n.children, l, i, t);
        case ve:
          ((o = 8), (l |= 8));
          break;
        case nt:
          return ((e = St(12, n, t, l | 2)), (e.elementType = nt), (e.lanes = i), e);
        case De:
          return ((e = St(13, n, t, l)), (e.elementType = De), (e.lanes = i), e);
        case Re:
          return ((e = St(19, n, t, l)), (e.elementType = Re), (e.lanes = i), e);
        case fe:
          return ni(n, l, i, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case ct:
                o = 10;
                break e;
              case Ct:
                o = 9;
                break e;
              case ze:
                o = 11;
                break e;
              case Je:
                o = 14;
                break e;
              case $e:
                ((o = 16), (r = null));
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ''));
      }
    return ((t = St(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t);
  }
  function In(e, t, n, r) {
    return ((e = St(7, e, r, t)), (e.lanes = n), e);
  }
  function ni(e, t, n, r) {
    return (
      (e = St(22, e, r, t)),
      (e.elementType = fe),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function rs(e, t, n) {
    return ((e = St(6, e, null, t)), (e.lanes = n), e);
  }
  function ls(e, t, n) {
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
  function Uf(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ii(0)),
      (this.expirationTimes = Ii(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ii(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function is(e, t, n, r, l, i, o, d, f) {
    return (
      (e = new Uf(e, t, n, d, f)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = St(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      yo(i),
      e
    );
  }
  function $f(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ae,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function pc(e) {
    if (!e) return ln;
    e = e._reactInternals;
    e: {
      if (yn(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (lt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (lt(n)) return $u(e, n, t);
    }
    return t;
  }
  function mc(e, t, n, r, l, i, o, d, f) {
    return (
      (e = is(n, r, !0, e, l, i, o, d, f)),
      (e.context = pc(null)),
      (n = e.current),
      (r = tt()),
      (l = fn(n)),
      (i = Ht(r, l)),
      (i.callback = t ?? null),
      un(n, i, l),
      (e.current.lanes = l),
      vr(e, l, r),
      st(e, r),
      e
    );
  }
  function ri(e, t, n, r) {
    var l = t.current,
      i = tt(),
      o = fn(l);
    return (
      (n = pc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ht(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = un(l, t, o)),
      e !== null && (Pt(e, l, o, i), Ml(e, l, o)),
      o
    );
  }
  function li(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function hc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function os(e, t) {
    (hc(e, t), (e = e.alternate) && hc(e, t));
  }
  function Wf() {
    return null;
  }
  var vc =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ss(e) {
    this._internalRoot = e;
  }
  ((ii.prototype.render = ss.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      ri(e, t, null, null);
    }),
    (ii.prototype.unmount = ss.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (jn(function () {
            ri(null, e, null, null);
          }),
            (t[Ft] = null));
        }
      }));
  function ii(e) {
    this._internalRoot = e;
  }
  ii.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Js();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Jt.length && t !== 0 && t < Jt[n].priority; n++);
      (Jt.splice(n, 0, e), n === 0 && nu(e));
    }
  };
  function us(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function oi(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function gc() {}
  function Hf(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var i = r;
        r = function () {
          var w = li(o);
          i.call(w);
        };
      }
      var o = mc(t, r, e, 0, null, !1, !1, '', gc);
      return (
        (e._reactRootContainer = o),
        (e[Ft] = o.current),
        Ir(e.nodeType === 8 ? e.parentNode : e),
        jn(),
        o
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var d = r;
      r = function () {
        var w = li(f);
        d.call(w);
      };
    }
    var f = is(e, 0, !1, null, null, !1, !1, '', gc);
    return (
      (e._reactRootContainer = f),
      (e[Ft] = f.current),
      Ir(e.nodeType === 8 ? e.parentNode : e),
      jn(function () {
        ri(t, f, n, r);
      }),
      f
    );
  }
  function si(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == 'function') {
        var d = l;
        l = function () {
          var f = li(o);
          d.call(f);
        };
      }
      ri(t, o, e, l);
    } else o = Hf(n, t, e, l, r);
    return li(o);
  }
  ((Xs = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = hr(t.pendingLanes);
          n !== 0 && (Ri(t, n | 1), st(t, Pe()), (pe & 6) === 0 && ((rr = Pe() + 500), on()));
        }
        break;
      case 13:
        (jn(function () {
          var r = Wt(e, 1);
          if (r !== null) {
            var l = tt();
            Pt(r, e, 1, l);
          }
        }),
          os(e, 1));
    }
  }),
    (Pi = function (e) {
      if (e.tag === 13) {
        var t = Wt(e, 134217728);
        if (t !== null) {
          var n = tt();
          Pt(t, e, 134217728, n);
        }
        os(e, 134217728);
      }
    }),
    (Zs = function (e) {
      if (e.tag === 13) {
        var t = fn(e),
          n = Wt(e, t);
        if (n !== null) {
          var r = tt();
          Pt(n, e, t, r);
        }
        os(e, t);
      }
    }),
    (Js = function () {
      return ge;
    }),
    (eu = function (e, t) {
      var n = ge;
      try {
        return ((ge = e), t());
      } finally {
        ge = n;
      }
    }),
    (Ci = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((Kt(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Cl(r);
                if (!l) throw Error(a(90));
                (B(r), Kt(r, l));
              }
            }
          }
          break;
        case 'textarea':
          Ls(e, n);
          break;
        case 'select':
          ((t = n.value), t != null && Mn(e, !!n.multiple, t, !1));
      }
    }),
    (Fs = Jo),
    (Bs = jn));
  var Vf = { usingClientEntryPoint: !1, Events: [Or, Vn, Cl, Ds, As, Jo] },
    br = {
      findFiberByHostInstance: wn,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    qf = {
      bundleType: br.bundleType,
      version: br.version,
      rendererPackageName: br.rendererPackageName,
      rendererConfig: br.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: D.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Hs(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: br.findFiberByHostInstance || Wf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var ui = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ui.isDisabled && ui.supportsFiber)
      try {
        ((il = ui.inject(qf)), (Ot = ui));
      } catch {}
  }
  return (
    (ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vf),
    (ut.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!us(t)) throw Error(a(200));
      return $f(e, t, null, n);
    }),
    (ut.createRoot = function (e, t) {
      if (!us(e)) throw Error(a(299));
      var n = !1,
        r = '',
        l = vc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = is(e, 1, !1, null, null, n, !1, r, l)),
        (e[Ft] = t.current),
        Ir(e.nodeType === 8 ? e.parentNode : e),
        new ss(t)
      );
    }),
    (ut.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(a(188))
          : ((e = Object.keys(e).join(',')), Error(a(268, e)));
      return ((e = Hs(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (ut.flushSync = function (e) {
      return jn(e);
    }),
    (ut.hydrate = function (e, t, n) {
      if (!oi(t)) throw Error(a(200));
      return si(null, e, t, !0, n);
    }),
    (ut.hydrateRoot = function (e, t, n) {
      if (!us(e)) throw Error(a(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = '',
        o = vc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = mc(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[Ft] = t.current),
        Ir(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new ii(t);
    }),
    (ut.render = function (e, t, n) {
      if (!oi(t)) throw Error(a(200));
      return si(null, e, t, !1, n);
    }),
    (ut.unmountComponentAtNode = function (e) {
      if (!oi(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (jn(function () {
            si(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Ft] = null));
            });
          }),
          !0)
        : !1;
    }),
    (ut.unstable_batchedUpdates = Jo),
    (ut.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!oi(n)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return si(e, t, n, !1, r);
    }),
    (ut.version = '18.3.1-next-f1338f8080-20240426'),
    ut
  );
}
var Ec;
function Jf() {
  if (Ec) return ds.exports;
  Ec = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (u) {
        console.error(u);
      }
  }
  return (c(), (ds.exports = Zf()), ds.exports);
}
var Nc;
function ep() {
  if (Nc) return ai;
  Nc = 1;
  var c = Jf();
  return ((ai.createRoot = c.createRoot), (ai.hydrateRoot = c.hydrateRoot), ai);
}
var tp = ep();
const np = JSON.parse(
    `[{"id":"animal","worldviewDimension":{"appliesWhen":"helpsAnimals","applyAs":"multiplier","options":{"equal":1,"10x":0.1,"100x":0.01}},"categoryLabel":"Moral Weights","icon":"paw","previewText":"Animal vs. Human welfare","heading":"How do you value animal welfare relative to human welfare?","info":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Excepteur sint occaecat cupidatat non proident sunt in culpa.","instructionsOptions":"Choose the view that best represents your position, or use \\"Custom Mix\\" to split your credence.","instructionsSliders":"Distribute your credence (confidence) across these views. Sliders auto-balance to 100%.","editPanelTitle":"Animal Values","options":[{"key":"equal","label":"Animals and humans matter equally","description":"Equal weight to equivalent experiences","info":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","panelLabel":"Equal weight","panelShort":"Eq"},{"key":"10x","label":"Animals matter 10× less than humans","description":"Moderate speciesist view","info":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.","panelLabel":"10× less","panelShort":"10×"},{"key":"100x","label":"Animals matter 100× less than humans","description":"Strong speciesist view","info":"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.","panelLabel":"100× less","panelShort":"100×"}]},{"id":"future","worldviewDimension":{"appliesWhen":"helpsFutureHumans","applyAs":"multiplier","options":{"equal":1,"10x":0.1,"100x":0.01}},"categoryLabel":"Time Preference","icon":"hourglass","previewText":"Current vs. Future generations","heading":"How do you value future human welfare relative to current human welfare?","info":"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet. Ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores. Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit.","instructionsOptions":"Choose the view that best represents your position, or use \\"Custom Mix\\" to split your credence.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Future Values","options":[{"key":"equal","label":"Future and current humans matter equally","description":"No time discounting","info":"Et harum quidem rerum facilis est et expedita distinctio, nam libero tempore soluta nobis eligendi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim donec pede justo fringilla vel aliquet.","panelLabel":"Equal weight","panelShort":"Eq"},{"key":"10x","label":"Future humans matter 10× less","description":"Moderate time preference","info":"Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim aliquam lorem ante dapibus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae justo nullam dictum felis eu pede. Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet. Adipiscing ante aenean commodo ligula eget dolor massa sociis natoque penatibus.","panelLabel":"10× less","panelShort":"10×"},{"key":"100x","label":"Future humans matter 100× less","description":"Strong present focus","info":"Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus donec quam felis. Ultricies nec pellentesque eu pretium quis sem nulla consequat massa quis enim. Donec pede justo fringilla vel aliquet nec vulputate eget arcu in enim justo rhoncus ut. Imperdiet a venenatis vitae justo nullam dictum felis eu pede mollis pretium.","panelLabel":"100× less","panelShort":"100×"}]},{"id":"intermission1","type":"_intermission","title":"Halfway There","body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Based on your answers so far, we're calculating how your worldview might influence your giving priorities. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"id":"scale","worldviewDimension":{"appliesTo":"scaleFactor","applyAs":"exponent","options":{"equal":0,"10x":0.5,"100x":1}},"categoryLabel":"Scale Sensitivity","icon":"bar-chart","previewText":"Helping one vs. helping millions","heading":"How much does the scale of impact matter?","info":"Maecenas nec odio et ante tincidunt tempus donec vitae sapien ut libero venenatis faucibus. Nullam quis ante etiam sit amet orci eget eros faucibus tincidunt duis leo. Sed fringilla mauris sit amet nibh donec sodales sagittis magna sed consequat leo. Aenean massa cum sociis natoque penatibus et magnis dis parturient montes nascetur.","instructionsOptions":"Choose the view that best represents your position, or use \\"Custom Mix\\" to split your credence.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Scale Sensitivity","options":[{"key":"equal","label":"Helping one person matters as much as helping millions","description":"Numbers don't multiply moral value","info":"Fusce vulputate eleifend sapien vestibulum purus quam scelerisque ut mollis sed nonummy id metus. Nullam accumsan lorem in dui cras ultricies mi eu turpis hendrerit fringilla vestibulum ante ipsum. Primis in faucibus orci luctus et ultrices posuere cubilia curae in ac dui quis mi. Consectetuer lacinia vitae elementum semper rutrum tellus pellentesque eu tincidunt.","panelLabel":"Irrelevant","panelShort":"Eq"},{"key":"10x","label":"Helping 10× more beings is significantly better","description":"Scale matters, but not linearly","info":"Phasellus viverra nulla ut metus varius laoreet quisque rutrum aenean imperdiet etiam ultricies nisi vel. Augue curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus tellus. Eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum. Nam quam nunc blandit vel luctus pulvinar hendrerit id lorem maecenas nec.","panelLabel":"Matters","panelShort":"10×"},{"key":"100x","label":"Helping 10× more beings is 10× better","description":"Full utilitarian aggregation","info":"Proin sapien ipsum porta a auctor quis euismod ac felis donec posuere vulputate arcu phasellus. Accumsan cursus velit morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam. Lacus morbi quis tortor id nulla ut metus molestie placerat vivamus dapibus fermentum. Nullam vel sem praesent libero sed cursus ante dapibus diam sed nisi.","panelLabel":"Dominates","panelShort":"100×"}]},{"id":"certainty","worldviewDimension":{"appliesWhen":"isSpeculative","applyAs":"multiplier","options":{"equal":1,"10x":0.1,"100x":0.01}},"categoryLabel":"Evidence Preference","icon":"microscope","previewText":"Proven vs. speculative interventions","heading":"How much do you value proven interventions over speculative ones?","info":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae sed aliquam. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus. Turpis in eu mi bibendum neque egestas congue quisque egestas diam.","instructionsOptions":"Choose the view that best represents your position, or use \\"Custom Mix\\" to split your credence.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Evidence Preference","options":[{"key":"equal","label":"Speculative and proven interventions matter equally","description":"Expected value is all that matters","info":"Mauris blandit aliquet elit eget tincidunt nibh pulvinar a pellentesque sit amet porttitor eget dolor. Morbi tristique senectus et netus et malesuada fames ac turpis egestas proin eget tortor risus. Praesent sapien massa convallis a pellentesque nec egestas non nisi cras ultricies ligula sed. Magna dictum porta lorem ipsum dolor sit amet consectetur adipiscing elit.","panelLabel":"Equal weight","panelShort":"Eq"},{"key":"10x","label":"Proven interventions are worth 10× more","description":"Moderate certainty preference","info":"Donec sollicitudin molestie malesuada vivamus magna justo lacinia eget consectetur sed convallis at tellus. Curabitur arcu erat accumsan id imperdiet et porttitor at sem nulla at venenatis diam. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit non mi porta gravida.","panelLabel":"10× less","panelShort":"10×"},{"key":"100x","label":"Proven interventions are worth 100× more","description":"Strong evidence focus","info":"Praesent commodo cursus magna vel scelerisque nisl consectetur et morbi leo risus porta ac consectetur. Vestibulum id ligula porta felis euismod semper fusce dapibus tellus ac cursus commodo. Maecenas sed diam eget risus varius blandit sit amet non magna aenean lacinia bibendum nulla. Sed consectetur cras mattis consectetur purus sit amet fermentum donec ullamcorper nulla non.","panelLabel":"100× less","panelShort":"100×"}]}]`
  ),
  Ic = { questions: np },
  rp = 'sqrt',
  lp = {
    globalHealth: {
      name: 'Global Health',
      color: '#f2cc8f',
      points: 100,
      scaleFactor: 1,
      helpsAnimals: !1,
      helpsFutureHumans: !1,
      isSpeculative: !1,
    },
    animalWelfare: {
      name: 'Animal Welfare',
      color: '#81b29a',
      points: 100,
      scaleFactor: 10,
      helpsAnimals: !0,
      helpsFutureHumans: !1,
      isSpeculative: !1,
    },
    gcr: {
      name: 'GCR (Future)',
      color: '#3d5a80',
      points: 100,
      scaleFactor: 100,
      helpsAnimals: !1,
      helpsFutureHumans: !0,
      isSpeculative: !0,
    },
  },
  ip = { equal: 33, '10x': 33, '100x': 34 },
  Xr = { diminishingReturns: rp, causes: lp, defaultCredences: ip },
  op = { resetButton: !1, sliderLock: !0, shareResults: !1 },
  sp = {
    showMaxEV: !0,
    showParliament: !0,
    showMergedFavorites: !0,
    showMaximin: !0,
    sideBySideComparison: !0,
  },
  Yr = { ui: op, calculations: sp },
  ir = {
    SESSION_ID: 'quiz_session_id',
    QUIZ_STATE: 'quiz_state',
    SKIP_CONFLICT: 'quiz_skip_conflict',
  },
  Rc = 3;
function up() {
  let c = sessionStorage.getItem(ir.SESSION_ID);
  return (c || ((c = crypto.randomUUID()), sessionStorage.setItem(ir.SESSION_ID, c)), c);
}
function ap(c) {
  const { currentStep: u, worldviews: a, activeWorldviewId: v, selectedCalculations: _ } = c,
    k = {};
  for (const [E, y] of Object.entries(a)) {
    const S = {};
    for (const [C, T] of Object.entries(y.questions))
      S[C] = {
        credences: T.credences,
        originalCredences: T.originalCredences,
        inputMode: T.inputMode,
        lockedKey: T.lockedKey,
      };
    k[E] = { questions: S };
  }
  const x = {
    version: Rc,
    state: { currentStep: u, worldviews: k, activeWorldviewId: v, selectedCalculations: _ },
  };
  sessionStorage.setItem(ir.QUIZ_STATE, JSON.stringify(x));
}
function ms() {
  const c = sessionStorage.getItem(ir.QUIZ_STATE);
  if (!c) return null;
  try {
    const u = JSON.parse(c);
    return u.version !== Rc ? (fi(), null) : u.state;
  } catch {
    return (fi(), null);
  }
}
function fi() {
  sessionStorage.removeItem(ir.QUIZ_STATE);
}
function cp() {
  sessionStorage.setItem(ir.SKIP_CONFLICT, 'true');
}
function hs() {
  window.location.hash &&
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
const Qt = 'rgba(255, 255, 255, 0.8)',
  jc = { default: [Qt, Qt, Qt], selection: [Qt, Qt, Qt], credence: [Qt, Qt, Qt] },
  dp = 'rgba(255, 255, 255, 0.7)',
  Pc = { OPTIONS: 'options' },
  at = {
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
 */ const fp = (c) => c.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  Oc = (...c) =>
    c
      .filter((u, a, v) => !!u && u.trim() !== '' && v.indexOf(u) === a)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var pp = {
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
 */ const mp = z.forwardRef(
  (
    {
      color: c = 'currentColor',
      size: u = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: v,
      className: _ = '',
      children: k,
      iconNode: x,
      ...E
    },
    y
  ) =>
    z.createElement(
      'svg',
      {
        ref: y,
        ...pp,
        width: u,
        height: u,
        stroke: c,
        strokeWidth: v ? (Number(a) * 24) / Number(u) : a,
        className: Oc('lucide', _),
        ...E,
      },
      [...x.map(([S, C]) => z.createElement(S, C)), ...(Array.isArray(k) ? k : [k])]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Me = (c, u) => {
  const a = z.forwardRef(({ className: v, ..._ }, k) =>
    z.createElement(mp, { ref: k, iconNode: u, className: Oc(`lucide-${fp(c)}`, v), ..._ })
  );
  return ((a.displayName = `${c}`), a);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hp = Me('Building2', [
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
 */ const vp = Me('ChartColumn', [
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
 */ const Mc = Me('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gp = Me('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yp = Me('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zc = Me('CircleHelp', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wp = Me('ExternalLink', [
  ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
  ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
  ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _p = Me('Handshake', [
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
 */ const kp = Me('Hourglass', [
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
 */ const Sp = Me('Info', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M12 16v-4', key: '1dtifu' }],
  ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xp = Me('Layers', [
  [
    'path',
    {
      d: 'm12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z',
      key: '8b97xw',
    },
  ],
  ['path', { d: 'm22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65', key: 'dd6zsq' }],
  ['path', { d: 'm22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65', key: 'ep9fru' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dc = Me('Lock', [
  ['rect', { width: '18', height: '11', x: '3', y: '11', rx: '2', ry: '2', key: '1w4ew1' }],
  ['path', { d: 'M7 11V7a5 5 0 0 1 10 0v4', key: 'fwvmzm' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cp = Me('Microscope', [
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
 */ const Ep = Me('PawPrint', [
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
 */ const Np = Me('Pencil', [
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
 */ const ys = Me('RotateCcw', [
  ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
  ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jp = Me('Scale', [
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
 */ const Tp = Me('SlidersVertical', [
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
 */ const Lp = Me('Store', [
  ['path', { d: 'm2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7', key: 'ztvudi' }],
  ['path', { d: 'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8', key: '1b2hhj' }],
  ['path', { d: 'M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4', key: '2ebpfo' }],
  ['path', { d: 'M2 7h20', key: '1fcdvo' }],
  [
    'path',
    {
      d: 'M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7',
      key: '6c3vgh',
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ip = Me('Target', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['circle', { cx: '12', cy: '12', r: '6', key: '1vlfrh' }],
  ['circle', { cx: '12', cy: '12', r: '2', key: '1c9p78' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rp = Me('X', [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ]),
  Pp = '_overlay_7q78t_1',
  Op = '_modal_7q78t_12',
  Mp = '_title_7q78t_21',
  zp = '_message_7q78t_29',
  Dp = '_buttons_7q78t_36',
  Ap = '_button_7q78t_36',
  Fp = '_worldviewRow_7q78t_51',
  Bp = '_worldviewButton_7q78t_57',
  Up = '_editRow_7q78t_62',
  $p = '_editInput_7q78t_69',
  Wp = '_iconButton_7q78t_86',
  Ie = {
    overlay: Pp,
    modal: Op,
    title: Mp,
    message: zp,
    buttons: Dp,
    button: Ap,
    worldviewRow: Fp,
    worldviewButton: Bp,
    editRow: Up,
    editInput: $p,
    iconButton: Wp,
  };
function Hp({ onKeepMine: c, onLoadShared: u, onOpenNewTab: a }) {
  return s.jsx('div', {
    className: Ie.overlay,
    children: s.jsxs('div', {
      className: Ie.modal,
      children: [
        s.jsx('h2', { className: Ie.title, children: 'You have unsaved progress' }),
        s.jsx('p', {
          className: Ie.message,
          children:
            'Loading this shared link will replace your current quiz answers. What would you like to do?',
        }),
        s.jsxs('div', {
          className: Ie.buttons,
          children: [
            s.jsx('button', {
              onClick: c,
              className: `btn btn-secondary ${Ie.button}`,
              children: 'Keep my progress',
            }),
            s.jsx('button', {
              onClick: u,
              className: `btn btn-primary ${Ie.button}`,
              children: 'Load shared results',
            }),
            s.jsxs('button', {
              onClick: a,
              className: `btn btn-secondary ${Ie.button}`,
              children: [s.jsx(wp, { size: 16 }), 'Open in new tab'],
            }),
          ],
        }),
      ],
    }),
  });
}
const { causes: On } = Xr,
  pi = { none: 1, sqrt: 0.5, extreme: 0.1 };
function Cs(c) {
  const u = (c == null ? void 0 : c.diminishingReturns) || Xr.diminishingReturns || 'sqrt';
  return pi[u] ?? 0.5;
}
function Es(c, u, a = 0.5) {
  if (a >= 1) {
    const x = Math.max(...c);
    if (x <= 0) return c.map(() => u / c.length);
    const E = c.map((y, S) => (y === x ? S : -1)).filter((y) => y >= 0);
    return c.map((y, S) => (E.includes(S) ? u / E.length : 0));
  }
  const v = 1 / (1 - a),
    _ = c.map((x) => (x > 0 ? Math.pow(x, v) : 0)),
    k = _.reduce((x, E) => x + E, 0);
  return k === 0 ? c.map(() => u / c.length) : _.map((x) => (x / k) * u);
}
function Ac(c = !1) {
  return Object.fromEntries(
    Ic.questions
      .filter((u) => u.type !== 'intermission' && u.worldviewDimension)
      .map((u) => [
        u.id,
        c ? { ...u.worldviewDimension, name: u.editPanelTitle } : u.worldviewDimension,
      ])
  );
}
const Zr = Ac();
function* Jr(c) {
  const u = Object.keys(c);
  if (u.length === 0) return;
  const a = Object.keys(c[u[0]]);
  function* v(_, k) {
    if (_ === u.length) {
      let E = 1;
      for (const y of u) E *= c[y][k[y]] / 100;
      yield { options: k, probability: E };
      return;
    }
    const x = u[_];
    for (const E of a) yield* v(_ + 1, { ...k, [x]: E });
  }
  yield* v(0, {});
}
function Fc(c, u, a) {
  let v = c.points;
  for (const [_, k] of Object.entries(a)) {
    const x = u[_],
      E = k.options[x];
    if (k.applyAs === 'multiplier') k.appliesWhen && c[k.appliesWhen] && (v *= E);
    else if (k.applyAs === 'exponent' && k.appliesTo) {
      const y = c[k.appliesTo] || 1;
      v *= Math.pow(y, E);
    }
  }
  return v;
}
function hi(c, u, a) {
  const v = {};
  for (const [_, k] of Object.entries(u)) v[_] = Fc(k, c, a);
  return v;
}
function Vp(c) {
  const u = Math.max(...Object.values(c));
  return Object.keys(c).filter((a) => Math.abs(c[a] - u) < 1e-4);
}
function Ns(c) {
  return Object.fromEntries(Object.keys(c).map((u) => [u, 0]));
}
function qp(c, u) {
  const a = (u == null ? void 0 : u.causes) || On,
    v = (u == null ? void 0 : u.dimensions) || Zr,
    _ = Cs(u),
    k = Object.keys(a),
    x = Ns(a);
  for (const { options: C, probability: T } of Jr(c)) {
    const R = hi(C, a, v);
    for (const [W, V] of Object.entries(R)) x[W] += T * V;
  }
  const E = k.map((C) => x[C]),
    y = Es(E, 100, _),
    S = { evs: x };
  return (
    k.forEach((C, T) => {
      S[C] = y[T];
    }),
    S
  );
}
function Qp(c, u) {
  const a = (u == null ? void 0 : u.causes) || On,
    v = (u == null ? void 0 : u.dimensions) || Zr,
    _ = Ns(a);
  for (const { options: x, probability: E } of Jr(c)) {
    const y = hi(x, a, v),
      S = Vp(y),
      C = E / S.length;
    for (const T of S) _[T] += C;
  }
  const k = {};
  for (const x of Object.keys(a)) k[x] = _[x] * 100;
  return k;
}
function bp(c, u) {
  const a = (u == null ? void 0 : u.causes) || On,
    v = (u == null ? void 0 : u.dimensions) || Zr,
    _ = Cs(u),
    k = Object.keys(a),
    x = Ns(a);
  for (const { options: E, probability: y } of Jr(c)) {
    const S = hi(E, a, v),
      C = y * 100,
      T = k.map((W) => S[W]),
      R = Es(T, C, _);
    k.forEach((W, V) => {
      x[W] += R[V];
    });
  }
  return x;
}
function Gp(c, u) {
  const a = (u == null ? void 0 : u.causes) || On,
    v = (u == null ? void 0 : u.dimensions) || Zr,
    _ = Object.keys(a),
    k = Kp(_);
  let x = k[0],
    E = -1 / 0;
  for (const y of k) {
    let S = 1 / 0;
    for (const { options: C, probability: T } of Jr(c)) {
      if (T < 0.001) continue;
      const R = hi(C, a, v);
      let W = 0;
      for (const V of _) W += R[V] * (y[V] / 100);
      S = Math.min(S, W);
    }
    S > E && ((E = S), (x = { ...y }));
  }
  return x;
}
function Kp(c) {
  const u = [],
    a = c.length,
    v = (y) => {
      const S = {};
      return (
        c.forEach((C, T) => {
          S[C] = y[T];
        }),
        S
      );
    };
  for (let y = 0; y < a; y++) {
    const S = new Array(a).fill(0);
    ((S[y] = 100), u.push(v(S)));
  }
  for (let y = 0; y < a; y++)
    for (let S = y + 1; S < a; S++) {
      const C = new Array(a).fill(0);
      ((C[y] = 50), (C[S] = 50), u.push(v(C)));
    }
  const _ = Math.floor(100 / a),
    k = 100 - _ * a,
    x = new Array(a).fill(_);
  ((x[0] += k), u.push(v(x)));
  const E = [
    [60, 20, 20],
    [70, 15, 15],
    [80, 10, 10],
  ];
  for (const y of E)
    if (y.length === a)
      for (let S = 0; S < a; S++) {
        const C = new Array(a).fill(0);
        C[S] = y[0];
        let T = 1;
        for (let R = 0; R < a; R++) R !== S && T < y.length && (C[R] = y[T++]);
        u.push(v(C));
      }
  return u;
}
function Bc(c, u, a, v = null, _ = null) {
  const k = _ ? a[_] : 0,
    x = 100 - k;
  u = Math.max(0, Math.min(x, u));
  const E = v || a,
    y = Object.keys(a).filter((R) => R !== c && R !== _),
    S = y.reduce((R, W) => R + E[W], 0),
    C = 100 - u - k,
    T = { [c]: u };
  if ((_ && (T[_] = a[_]), S === 0)) {
    const R = Math.floor(C / y.length);
    let W = C - R * y.length;
    y.forEach((V, A) => {
      T[V] = R + (A < W ? 1 : 0);
    });
  } else {
    let R = 0;
    y.forEach((W, V) => {
      if (V === y.length - 1) T[W] = Math.max(0, C - R);
      else {
        const A = E[W] / S,
          O = C * A;
        ((T[W] = Math.max(0, O)), (R += T[W]));
      }
    });
  }
  return T;
}
function Uc(c) {
  const u = Object.keys(c),
    a = {};
  let v = 0;
  return (
    u.slice(0, -1).forEach((_) => {
      ((a[_] = Math.round(c[_])), (v += a[_]));
    }),
    (a[u[u.length - 1]] = 100 - v),
    a
  );
}
function Yp(c, u) {
  const a = (u == null ? void 0 : u.causes) || On,
    v = (u == null ? void 0 : u.dimensions) || Zr,
    _ = Object.keys(a),
    k = {};
  for (const x of _) k[x] = 0;
  for (const { options: x, probability: E } of Jr(c))
    for (const y of _) {
      const S = Fc(a[y], x, v);
      k[y] += E * S;
    }
  return k;
}
function Xp(c, u = {}) {
  const { budget: a = 100 } = u,
    v = u.power ?? Cs(u);
  if (c.length === 0) throw new Error('At least one worldview is required');
  const _ = Object.keys(c[0].evs),
    k = c.reduce((y, S) => y + (S.weight || 1), 0),
    x = {};
  for (const y of _) x[y] = 0;
  const E = [];
  for (const y of c) {
    const S = y.weight || 1,
      C = (S / k) * a,
      T = _.map((V) => y.evs[V] || 0),
      R = Es(T, C, v),
      W = {};
    (_.forEach((V, A) => {
      ((x[V] += R[A]), (W[V] = R[A]));
    }),
      E.push({ name: y.name, weight: S, share: C, allocation: W }));
  }
  return { allocation: x, worldviewAllocations: E, config: { power: v, budget: a } };
}
const { questions: Zp } = Ic,
  { causes: Jp, defaultCredences: mi } = Xr;
function em(c) {
  var u;
  return !((u = c.type) != null && u.startsWith('_'));
}
const qe = Zp.filter(em);
function Gt(c) {
  return (c == null ? void 0 : c.type) === at.INTERMISSION;
}
function vs(c, u) {
  let a = 0;
  for (let v = 0; v < u; v++) Gt(c[v]) || a++;
  return a;
}
function tm(c) {
  {
    const u = c.type || at.DEFAULT;
    return jc[u] || jc[at.DEFAULT];
  }
}
const nm = qe.filter((c) => !Gt(c)),
  gs = nm.length,
  Tc = qe.map((c) => {
    if (Gt(c)) return { ...c, type: at.INTERMISSION };
    const u = tm(c);
    return {
      ...c,
      type: c.type || at.DEFAULT,
      options: c.options.map((a, v) => ({ ...a, color: u[v] || u[0] })),
    };
  });
function $c() {
  return { credences: { ...mi }, originalCredences: null, inputMode: Pc.OPTIONS, lockedKey: null };
}
function Wc() {
  return Object.fromEntries(qe.filter((c) => !Gt(c)).map((c) => [c.id, $c()]));
}
const gn = ['1', '2', '3'];
function ws() {
  return Object.fromEntries(gn.map((c) => [c, { questions: Wc() }]));
}
function rm(c) {
  return c != null && c.questions
    ? Object.values(c.questions).some((u) =>
        u.credences ? Object.entries(u.credences).some(([a, v]) => v !== (mi[a] ?? 0)) : !1
      )
    : !1;
}
function _s() {
  return Object.fromEntries(gn.map((c) => [c, `Worldview ${c}`]));
}
const ks = 1e7,
  Hc = {
    currentStep: 'welcome',
    worldviews: ws(),
    worldviewNames: _s(),
    activeWorldviewId: '1',
    expandedPanel: null,
    debugConfig: null,
    selectedCalculations: { left: null, right: null },
    marketplaceBudget: ks,
  },
  ye = {
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
function Ss(c) {
  return c.worldviews[c.activeWorldviewId].questions;
}
function lm(c, u, a) {
  const v = Ss(c);
  return {
    ...c,
    worldviews: {
      ...c.worldviews,
      [c.activeWorldviewId]: { questions: { ...v, [u]: { ...v[u], ...a } } },
    },
  };
}
function im(c, u) {
  switch (u.type) {
    case ye.GO_TO_STEP:
      return { ...c, currentStep: u.payload };
    case ye.UPDATE_QUESTION:
      return lm(c, u.payload.questionId, u.payload.updates);
    case ye.SET_EXPANDED_PANEL:
      return { ...c, expandedPanel: u.payload };
    case ye.SAVE_ORIGINALS: {
      const a = Ss(c);
      return {
        ...c,
        worldviews: {
          ...c.worldviews,
          [c.activeWorldviewId]: {
            questions: Object.fromEntries(
              Object.entries(a).map(([v, _]) => [
                v,
                { ..._, originalCredences: _.originalCredences || { ..._.credences } },
              ])
            ),
          },
        },
      };
    }
    case ye.RESET_TO_ORIGINAL: {
      const a = Ss(c);
      return {
        ...c,
        worldviews: {
          ...c.worldviews,
          [c.activeWorldviewId]: {
            questions: Object.fromEntries(
              Object.entries(a).map(([v, _]) => [
                v,
                { ..._, credences: _.originalCredences ? { ..._.originalCredences } : _.credences },
              ])
            ),
          },
        },
      };
    }
    case ye.RESET_QUIZ:
      return { ...Hc, worldviews: ws(), worldviewNames: _s() };
    case ye.SWITCH_WORLDVIEW:
      return gn.includes(u.payload) ? { ...c, activeWorldviewId: u.payload } : c;
    case ye.SET_WORLDVIEW_NAME: {
      const { worldviewId: a, name: v } = u.payload;
      return gn.includes(a) ? { ...c, worldviewNames: { ...c.worldviewNames, [a]: v } } : c;
    }
    case ye.SET_MARKETPLACE_BUDGET:
      return { ...c, marketplaceBudget: u.payload };
    case ye.RESTORE_FROM_URL:
    case ye.RESTORE_FROM_SESSION: {
      const a = u.type === ye.RESTORE_FROM_URL,
        {
          worldviews: v,
          worldviewNames: _,
          activeWorldviewId: k,
          questions: x,
          credences: E,
          currentStep: y,
          selectedCalculations: S,
          marketplaceBudget: C,
        } = u.payload,
        T = (A, O) => ({
          credences: A.credences,
          originalCredences: O
            ? { ...A.credences }
            : A.originalCredences
              ? { ...A.originalCredences }
              : null,
          inputMode: A.inputMode || Pc.OPTIONS,
          lockedKey: A.lockedKey || null,
        }),
        R = (A, O) => {
          const Y = {};
          for (const [ue, K] of Object.entries(A)) {
            const D = {};
            for (const [de, ae] of Object.entries(K.questions)) D[de] = T(ae, O);
            Y[ue] = { questions: D };
          }
          for (const ue of gn) Y[ue] || (Y[ue] = { questions: Wc() });
          return Y;
        },
        W = (A) => {
          const O = {};
          for (const Y of gn) O[Y] = (A == null ? void 0 : A[Y]) || `Worldview ${Y}`;
          return O;
        };
      if (v && k)
        return {
          ...c,
          currentStep: a ? 'results' : y,
          worldviews: R(v, a),
          worldviewNames: W(_),
          activeWorldviewId: k,
          selectedCalculations: S || c.selectedCalculations,
          marketplaceBudget: C || ks,
        };
      const V = {};
      if (x) for (const [A, O] of Object.entries(x)) V[A] = T(O, a);
      else if (E)
        for (const [A, O] of Object.entries(E))
          V[A] = { ...$c(), credences: O, originalCredences: a ? { ...O } : null };
      return {
        ...c,
        currentStep: a ? 'results' : y,
        worldviews: { ...ws(), 1: { questions: V } },
        worldviewNames: _s(),
        activeWorldviewId: '1',
        marketplaceBudget: ks,
      };
    }
    case ye.SET_DEBUG_CONFIG:
      return { ...c, debugConfig: u.payload };
    case ye.SET_SELECTED_CALCULATIONS:
      return { ...c, selectedCalculations: { ...c.selectedCalculations, ...u.payload } };
    default:
      return c;
  }
}
const Vc = z.createContext(null);
function om({ children: c }) {
  const [u, a] = z.useReducer(im, Hc),
    [v, _] = z.useState(null),
    [k, x] = z.useState(!0),
    [E, y] = z.useState(null),
    [S] = z.useState(() => up()),
    C = z.useRef(null);
  (z.useEffect(() => {
    {
      const B = ms();
      (B && a({ type: ye.RESTORE_FROM_SESSION, payload: B }), x(!1));
      return;
    }
  }, []),
    z.useEffect(() => {}, []));
  const T = z.useCallback(() => {
      const B = ms();
      (B && a({ type: ye.RESTORE_FROM_SESSION, payload: B }), hs(), y(null));
    }, []),
    R = z.useCallback(() => {
      (E != null && E.shareData && (a({ type: ye.RESTORE_FROM_URL, payload: E.shareData }), fi()),
        hs(),
        y(null));
    }, [E]),
    W = z.useCallback(() => {
      (cp(), E != null && E.shareUrl && window.open(E.shareUrl, '_blank'));
      const B = ms();
      (B && a({ type: ye.RESTORE_FROM_SESSION, payload: B }), hs(), y(null));
    }, [E]);
  z.useEffect(() => {
    if (!(k || u.currentStep === 'welcome'))
      return (
        C.current && clearTimeout(C.current),
        (C.current = setTimeout(() => {
          ap({
            currentStep: u.currentStep,
            worldviews: u.worldviews,
            worldviewNames: u.worldviewNames,
            activeWorldviewId: u.activeWorldviewId,
            selectedCalculations: u.selectedCalculations,
            marketplaceBudget: u.marketplaceBudget,
          });
        }, 300)),
        () => {
          C.current && clearTimeout(C.current);
        }
      );
  }, [
    u.currentStep,
    u.worldviews,
    u.worldviewNames,
    u.activeWorldviewId,
    u.selectedCalculations,
    u.marketplaceBudget,
    k,
  ]);
  const V = z.useCallback((B) => {
      a({ type: ye.GO_TO_STEP, payload: B });
    }, []),
    A = z.useCallback((B, le) => {
      a({ type: ye.UPDATE_QUESTION, payload: { questionId: B, updates: le } });
    }, []),
    O = z.useCallback((B, le) => A(B, { credences: le }), [A]),
    Y = z.useCallback((B, le) => A(B, { inputMode: le }), [A]),
    ue = z.useCallback((B, le) => A(B, { lockedKey: le }), [A]),
    K = z.useCallback((B) => {
      a({ type: ye.SET_EXPANDED_PANEL, payload: B });
    }, []),
    D = z.useCallback(() => {
      a({ type: ye.SAVE_ORIGINALS });
    }, []),
    de = z.useCallback(() => {
      a({ type: ye.RESET_TO_ORIGINAL });
    }, []),
    ae = z.useCallback(() => {
      (a({ type: ye.RESET_QUIZ }), fi());
    }, []),
    we = z.useCallback((B) => {
      a({ type: ye.SET_DEBUG_CONFIG, payload: B });
    }, []),
    ve = z.useCallback((B) => {
      a({ type: ye.SWITCH_WORLDVIEW, payload: B });
    }, []),
    nt = z.useCallback((B) => {
      a({ type: ye.SET_SELECTED_CALCULATIONS, payload: B });
    }, []),
    ct = z.useCallback((B, le) => {
      a({ type: ye.SET_WORLDVIEW_NAME, payload: { worldviewId: B, name: le } });
    }, []),
    Ct = z.useCallback((B) => {
      a({ type: ye.SET_MARKETPLACE_BUDGET, payload: B });
    }, []),
    ze = z.useCallback((B) => qe.findIndex((le) => le.id === B), []),
    De = z.useCallback(
      (B) => {
        const le = ze(B);
        return le === 0 ? 'welcome' : qe[le - 1].id;
      },
      [ze]
    ),
    Re = z.useCallback(
      (B) => {
        const le = ze(B);
        return le === qe.length - 1 ? 'results' : qe[le + 1].id;
      },
      [ze]
    ),
    Je = z.useCallback(() => {
      V(qe[0].id);
    }, [V]),
    $e = z.useCallback(() => {
      u.currentStep === 'results' ? V(qe[qe.length - 1].id) : V(De(u.currentStep));
    }, [u.currentStep, V, De]),
    fe = z.useCallback(() => {
      const B = Re(u.currentStep);
      (B === 'results' && D(), V(B));
    }, [u.currentStep, V, Re, D]),
    M = z.useMemo(
      () => u.worldviews[u.activeWorldviewId].questions,
      [u.worldviews, u.activeWorldviewId]
    ),
    X = z.useCallback(
      (B) => {
        var sr;
        const le = B === 'original' ? 'originalCredences' : 'credences',
          ht = qe.filter((Kt) => !Gt(Kt)),
          vt = M[(sr = ht[0]) == null ? void 0 : sr.id];
        return B === 'original' && !(vt != null && vt.originalCredences)
          ? null
          : Object.fromEntries(
              ht.map((Kt) => {
                var ur;
                return [Kt.id, ((ur = M[Kt.id]) == null ? void 0 : ur[le]) || mi];
              })
            );
      },
      [M]
    ),
    F = z.useCallback(
      (B, le) =>
        B
          ? {
              maxEV: qp(B, le),
              parliament: Qp(B, le),
              mergedFavorites: bp(B, le),
              maximin: Gp(B, le),
            }
          : null,
      []
    ),
    m = z.useMemo(() => F(X('current'), u.debugConfig), [X, F, u.debugConfig]),
    N = z.useMemo(() => F(X('original'), u.debugConfig), [X, F, u.debugConfig]),
    ne = z.useMemo(
      () =>
        Object.values(M).some(
          (B) =>
            B.originalCredences &&
            JSON.stringify(B.credences) !== JSON.stringify(B.originalCredences)
        ),
      [M]
    ),
    re = z.useMemo(
      () => Object.fromEntries(gn.map((B) => [B, rm(u.worldviews[B])])),
      [u.worldviews]
    ),
    Z = z.useMemo(() => ze(u.currentStep), [u.currentStep, ze]),
    oe = z.useMemo(() => (Z === -1 ? null : Tc[Z]), [Z]),
    q = z.useMemo(() => {
      if (Z === -1) return -1;
      const B = qe[Z],
        le = vs(qe, Z);
      return Gt(B) ? le : le + 1;
    }, [Z]),
    b = z.useMemo(() => {
      if (Z === -1) return 0;
      const B = qe[Z];
      return ((Gt(B) ? vs(qe, Z) : q) / gs) * 100;
    }, [Z, q]),
    me = z.useMemo(() => {
      if (Z === -1) return '';
      const B = qe[Z];
      return `Question ${Gt(B) ? vs(qe, Z) : q} of ${gs}`;
    }, [Z, q]),
    Te = z.useMemo(() => {
      const B = {};
      return (
        qe
          .filter((le) => !Gt(le))
          .forEach((le) => {
            const ht = M[le.id];
            ht &&
              (B[le.id] = {
                credences: ht.credences,
                setCredences: (vt) => O(le.id, vt),
                originalCredences: ht.originalCredences,
                inputMode: ht.inputMode,
                setInputMode: (vt) => Y(le.id, vt),
                lockedKey: ht.lockedKey,
                setLockedKey: (vt) => ue(le.id, vt),
              });
          }),
        B
      );
    }, [M, O, Y, ue]),
    Et = z.useMemo(
      () => ({
        currentStep: u.currentStep,
        questions: M,
        worldviews: u.worldviews,
        worldviewNames: u.worldviewNames,
        activeWorldviewId: u.activeWorldviewId,
        expandedPanel: u.expandedPanel,
        debugConfig: u.debugConfig,
        selectedCalculations: u.selectedCalculations,
        marketplaceBudget: u.marketplaceBudget,
        shareUrlError: v,
        isHydrating: k,
        sessionId: S,
        questionsConfig: Tc,
        causesConfig: Jp,
        defaultCredences: mi,
        worldviewIds: gn,
        goToStep: V,
        setCredences: O,
        setInputMode: Y,
        setLockedKey: ue,
        setExpandedPanel: K,
        saveOriginals: D,
        resetToOriginal: de,
        resetQuiz: ae,
        setDebugConfig: we,
        switchWorldview: ve,
        setSelectedCalculations: nt,
        setWorldviewName: ct,
        setMarketplaceBudget: Ct,
        getQuestionIndex: ze,
        getPrevStep: De,
        getNextStep: Re,
        startQuiz: Je,
        goBack: $e,
        goForward: fe,
        currentQuestion: oe,
        currentQuestionIndex: Z,
        totalQuestions: gs,
        progressPercentage: b,
        questionNumber: me,
        hasChanged: ne,
        hasProgressMap: re,
        calculationResults: m,
        originalCalculationResults: N,
        stateMap: Te,
      }),
      [
        u.currentStep,
        M,
        u.worldviews,
        u.worldviewNames,
        u.activeWorldviewId,
        u.expandedPanel,
        u.debugConfig,
        u.selectedCalculations,
        u.marketplaceBudget,
        v,
        k,
        S,
        V,
        O,
        Y,
        ue,
        K,
        D,
        de,
        ae,
        we,
        ve,
        nt,
        ct,
        Ct,
        ze,
        De,
        Re,
        Je,
        $e,
        fe,
        oe,
        Z,
        b,
        me,
        ne,
        re,
        m,
        N,
        Te,
      ]
    );
  return s.jsxs(Vc.Provider, {
    value: Et,
    children: [c, E && s.jsx(Hp, { onKeepMine: T, onLoadShared: R, onOpenNewTab: W })],
  });
}
const el = ({ subtitle: c }) =>
    s.jsxs('header', {
      className: `header${c ? ' header-with-subtitle' : ''}`,
      children: [
        s.jsxs('div', {
          className: 'header-brand',
          children: [
            s.jsx('img', {
              src: '/quiz-demo/prototypes/moral-marketplace/NewLogoSVG.svg',
              alt: 'Rethink Priorities',
              height: '24',
            }),
            s.jsx('span', { className: 'header-title', children: 'Donor Compass' }),
          ],
        }),
        c && s.jsx('div', { className: 'header-subtitle', children: c }),
      ],
    }),
  sm = { paw: Ep, hourglass: kp, 'bar-chart': vp, microscope: Cp };
function qc({ name: c, size: u = 16, className: a = '' }) {
  const v = sm[c] || zc;
  return s.jsx(v, { size: u, className: a });
}
function or() {
  const c = z.useContext(Vc);
  if (!c) throw new Error('useQuiz must be used within a QuizProvider');
  return c;
}
const um = '_container_1tu9j_3',
  am = '_heading_1tu9j_8',
  cm = '_headingEmphasis_1tu9j_17',
  dm = '_intro_1tu9j_22',
  fm = '_infoBox_1tu9j_30',
  pm = '_infoBoxLabel_1tu9j_38',
  mm = '_infoBoxGrid_1tu9j_45',
  hm = '_infoBoxItem_1tu9j_52',
  vn = {
    container: um,
    heading: am,
    headingEmphasis: cm,
    intro: dm,
    infoBox: fm,
    infoBoxLabel: pm,
    infoBoxGrid: mm,
    infoBoxItem: hm,
  },
  vm = {
    timeEstimate: '~3 minutes',
    headingLine1: 'Where Should Your',
    headingLine2: 'Giving Go?',
    intro:
      'Uncertain about your ethical views? This tool helps you allocate resources across different causes based on your moral credences—the probabilities you assign to different ethical perspectives.',
    startButton: 'Start Quiz →',
    previewLabel: "You'll be asked about:",
  },
  gm = { back: '← Back', continue: 'Continue →', backToQuiz: '← Back to Quiz' },
  ym = { modeToggle: { pickOne: 'Pick One', customMix: 'Custom Mix' } },
  wm = {
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
        title: 'Merged Favorites',
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
  _m = {
    modifiedBadge: 'modified',
    sliderNote: 'Sliders auto-balance to 100%',
    resetButton: 'Reset',
  },
  km = { lockTooltip: 'Lock slider', unlockTooltip: 'Unlock slider' },
  Sm = {
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
  xm = {
    title: 'Switch Worldview',
    description:
      'Each worldview stores a separate set of quiz answers. Select a worldview to view or edit.',
    emptyLabel: '(empty)',
    currentLabel: '(current)',
    marketplaceButton: 'Moral Marketplace',
    defaultName: 'Worldview',
  },
  ce = {
    welcome: vm,
    navigation: gm,
    questionScreen: ym,
    results: wm,
    editPanel: _m,
    sliders: km,
    marketplace: Sm,
    worldviewModal: xm,
  };
function Cm() {
  const { questionsConfig: c, startQuiz: u } = or(),
    a = c.filter((v) => v.type !== at.INTERMISSION);
  return s.jsxs('div', {
    className: 'screen',
    children: [
      s.jsx(el, { subtitle: ce.welcome.timeEstimate }),
      s.jsx('main', {
        className: 'screen-main',
        children: s.jsxs('div', {
          className: vn.container,
          children: [
            s.jsxs('h1', {
              className: vn.heading,
              children: [
                ce.welcome.headingLine1,
                s.jsx('br', {}),
                s.jsx('span', { className: vn.headingEmphasis, children: ce.welcome.headingLine2 }),
              ],
            }),
            s.jsx('p', { className: vn.intro, children: ce.welcome.intro }),
            s.jsx('button', {
              onClick: u,
              className: 'btn btn-primary',
              children: ce.welcome.startButton,
            }),
            s.jsxs('div', {
              className: vn.infoBox,
              children: [
                s.jsx('div', { className: vn.infoBoxLabel, children: ce.welcome.previewLabel }),
                s.jsx('div', {
                  className: vn.infoBoxGrid,
                  children: a.map((v) =>
                    s.jsxs(
                      'div',
                      {
                        className: vn.infoBoxItem,
                        children: [s.jsx(qc, { name: v.icon, size: 16 }), ' ', v.previewText],
                      },
                      v.id
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
const vi = ({ percentage: c }) =>
    s.jsx('div', {
      className: 'progress-container',
      children: s.jsx('div', {
        className: 'progress-track',
        children: s.jsx('div', { className: 'progress-fill', style: { width: `${c}%` } }),
      }),
    }),
  Em = '_modeToggle_yn8i0_3',
  Nm = '_button_yn8i0_10',
  jm = '_options_yn8i0_23',
  Tm = '_active_yn8i0_29',
  Lm = '_sliders_yn8i0_35',
  Rn = { modeToggle: Em, button: Nm, options: jm, active: Tm, sliders: Lm },
  Im = ({ mode: c, setMode: u }) =>
    s.jsxs('div', {
      className: Rn.modeToggle,
      children: [
        s.jsx('button', {
          onClick: () => u('options'),
          className: `${Rn.button} ${Rn.options} ${c === 'options' ? Rn.active : ''}`,
          children: ce.questionScreen.modeToggle.pickOne,
        }),
        s.jsxs('button', {
          onClick: () => u('sliders'),
          className: `${Rn.button} ${Rn.sliders} ${c === 'sliders' ? Rn.active : ''}`,
          children: [s.jsx(Tp, { size: 14 }), ce.questionScreen.modeToggle.customMix],
        }),
      ],
    }),
  Rm = '_wrapper_1674a_1',
  Pm = '_trigger_1674a_7',
  Om = '_popover_1674a_26',
  Mm = '_popoverVisible_1674a_58',
  ci = { wrapper: Rm, trigger: Pm, popover: Om, popoverVisible: Mm };
function js({ content: c, size: u = 14 }) {
  const [a, v] = z.useState(!1),
    [_, k] = z.useState({ top: 0, left: 0 }),
    x = z.useRef(null),
    E = z.useRef(null),
    y = z.useRef(null),
    S = z.useCallback(() => {
      var ue;
      if (!x.current) return;
      const R = x.current.getBoundingClientRect(),
        W = ((ue = E.current) == null ? void 0 : ue.offsetWidth) || 400,
        V = window.innerWidth,
        A = 16;
      let O = R.left + R.width / 2 - W / 2;
      const Y = R.bottom + 8;
      (O < A ? (O = A) : O + W > V - A && (O = V - W - A), k({ top: Y, left: O }));
    }, []);
  (z.useEffect(() => {
    if (!a) return;
    const R = (W) => {
      y.current && !y.current.contains(W.target) && v(!1);
    };
    return (
      document.addEventListener('mousedown', R),
      document.addEventListener('touchstart', R),
      () => {
        (document.removeEventListener('mousedown', R),
          document.removeEventListener('touchstart', R));
      }
    );
  }, [a]),
    z.useEffect(() => {
      a && S();
    }, [a, S]));
  const C = z.useCallback(() => {
      S();
    }, [S]),
    T = z.useCallback(
      (R) => {
        (R.preventDefault(), R.stopPropagation(), S(), v((W) => !W));
      },
      [S]
    );
  return c
    ? s.jsxs('span', {
        ref: y,
        className: ci.wrapper,
        children: [
          s.jsx('button', {
            ref: x,
            type: 'button',
            className: ci.trigger,
            onMouseEnter: C,
            onTouchStart: T,
            'aria-label': 'More information',
            children: s.jsx(Sp, { size: u }),
          }),
          s.jsx('span', {
            ref: E,
            className: `${ci.popover} ${a ? ci.popoverVisible : ''}`,
            style: { top: _.top, left: _.left },
            children: c,
          }),
        ],
      })
    : null;
}
const zm = '_optionButton_z7tsl_3',
  Dm = '_selected_z7tsl_20',
  Am = '_content_z7tsl_36',
  Fm = '_textContent_z7tsl_42',
  Bm = '_label_z7tsl_46',
  Um = '_description_z7tsl_58',
  $m = '_checkmark_z7tsl_64',
  bt = {
    optionButton: zm,
    default: '_default_z7tsl_15',
    selected: Dm,
    content: Am,
    textContent: Fm,
    label: Bm,
    description: Um,
    checkmark: $m,
  };
function Wm({
  label: c,
  description: u,
  info: a,
  optionKey: v,
  credences: _,
  setCredences: k,
  color: x,
  setInputMode: E,
  setLockedKey: y,
}) {
  const S = _[v] === 100,
    C = () => {
      const T = Object.fromEntries(Object.keys(_).map((R) => [R, R === v ? 100 : 0]));
      (k(T), E('options'), y && y(null));
    };
  return s.jsx('button', {
    onClick: C,
    className: `${bt.optionButton} ${S ? bt.selected : bt.default}`,
    style: { '--option-color': x },
    children: s.jsxs('div', {
      className: bt.content,
      children: [
        s.jsxs('div', {
          className: bt.textContent,
          children: [
            s.jsxs('div', {
              className: `${bt.label} ${S ? bt.selected : ''}`,
              children: [c, s.jsx(js, { content: a })],
            }),
            s.jsx('div', { className: bt.description, children: u }),
          ],
        }),
        S && s.jsx('div', { className: bt.checkmark, children: '✓' }),
      ],
    }),
  });
}
function Qc({ credences: c, isLocked: u, lockedKey: a, onChange: v }) {
  const [_, k] = z.useState(null),
    [x, E] = z.useState(!1),
    y = z.useCallback(() => {
      u || (E(!0), k({ ...c }));
    }, [u, c]),
    S = z.useCallback(
      (T) => {
        if (u || !x) return;
        E(!1);
        const R = parseFloat(T.target.value);
        (v(R, _, !0, a), k(null));
      },
      [u, x, _, a, v]
    ),
    C = z.useCallback(
      (T) => {
        if (u) return;
        const R = parseFloat(T.target.value);
        v(R, _, !1, a);
      },
      [u, _, a, v]
    );
  return {
    isDragging: x,
    dragHandlers: {
      onChange: C,
      onMouseDown: y,
      onMouseUp: S,
      onMouseLeave: S,
      onTouchStart: y,
      onTouchEnd: S,
    },
  };
}
function bc({ sliderKey: c, lockedKey: u, credences: a }) {
  return z.useMemo(() => {
    var y;
    const v = u === c,
      _ = u && u !== c,
      k = _ ? a[u] : 0,
      x = _ ? 100 - k : 100,
      E = _ ? `calc(${x}% + ${(50 - x) * 0.16}px)` : null;
    return {
      isLocked: v,
      hasLockedSibling: _,
      lockedValue: k,
      maxAllowed: x,
      thumbOffset: E,
      featureEnabled: ((y = Yr.ui) == null ? void 0 : y.sliderLock) === !0,
    };
  }, [c, u, a]);
}
const Hm = '_credenceSlider_yrqg7_4',
  Vm = '_header_yrqg7_8',
  qm = '_label_yrqg7_15',
  Qm = '_description_yrqg7_22',
  bm = '_value_yrqg7_28',
  Gm = '_sliderRow_yrqg7_35',
  Km = '_sliderContainer_yrqg7_41',
  Ym = '_lockLimit_yrqg7_46',
  Xm = '_lockButton_yrqg7_55',
  Zm = '_locked_yrqg7_73',
  Jm = '_compactSlider_yrqg7_91',
  eh = '_compactSelection_yrqg7_168',
  th = '_selected_yrqg7_186',
  nh = '_selectionLabel_yrqg7_191',
  rh = '_selectionIndicator_yrqg7_202',
  je = {
    credenceSlider: Hm,
    header: Vm,
    label: qm,
    description: Qm,
    value: bm,
    sliderRow: Gm,
    sliderContainer: Km,
    lockLimit: Ym,
    lockButton: Xm,
    locked: Zm,
    compactSlider: Jm,
    compactSelection: eh,
    selected: th,
    selectionLabel: nh,
    selectionIndicator: rh,
  };
function lh({
  label: c,
  description: u,
  info: a,
  value: v,
  onChange: _,
  color: k,
  credences: x,
  sliderKey: E,
  lockedKey: y,
  setLockedKey: S,
}) {
  const {
      isLocked: C,
      hasLockedSibling: T,
      thumbOffset: R,
      featureEnabled: W,
    } = bc({ sliderKey: E, lockedKey: y, credences: x }),
    { isDragging: V, dragHandlers: A } = Qc({
      credences: x,
      isLocked: C,
      lockedKey: y,
      onChange: _,
    }),
    O = () => {
      W && S(y === E ? null : E);
    },
    Y = T
      ? `linear-gradient(to right, ${k} 0%, ${k} ${v}%, rgba(255,255,255,0.15) ${v}%, rgba(255,255,255,0.15) ${R}, rgba(255,255,255,0.08) ${R}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${k} 0%, ${k} ${v}%, rgba(255,255,255,0.15) ${v}%, rgba(255,255,255,0.15) 100%)`;
  return s.jsxs('div', {
    className: je.credenceSlider,
    children: [
      s.jsxs('div', {
        className: je.header,
        children: [
          s.jsxs('div', {
            children: [
              s.jsxs('div', { className: je.label, children: [c, s.jsx(js, { content: a })] }),
              s.jsx('div', { className: je.description, children: u }),
            ],
          }),
          s.jsxs('div', {
            className: je.value,
            style: { color: k },
            children: [Math.round(v), '%'],
          }),
        ],
      }),
      s.jsxs('div', {
        className: je.sliderRow,
        children: [
          s.jsxs('div', {
            className: je.sliderContainer,
            children: [
              s.jsx('input', {
                type: 'range',
                min: '0',
                max: '100',
                step: 'any',
                value: v,
                ...A,
                'data-dragging': V,
                disabled: C,
                style: { background: Y, cursor: C ? 'not-allowed' : 'pointer' },
              }),
              T && s.jsx('div', { className: je.lockLimit, style: { left: R } }),
            ],
          }),
          W &&
            s.jsx('button', {
              className: `${je.lockButton} ${C ? je.locked : ''}`,
              onClick: O,
              title: C ? ce.sliders.unlockTooltip : ce.sliders.lockTooltip,
              type: 'button',
              children: s.jsx(Dc, { size: 16 }),
            }),
        ],
      }),
    ],
  });
}
const ih = '_container_9yo3m_3',
  oh = '_categoryLabel_9yo3m_8',
  sh = '_heading_9yo3m_16',
  uh = '_instructions_9yo3m_23',
  ah = '_buttonRow_9yo3m_30',
  Kr = { container: ih, categoryLabel: oh, heading: sh, instructions: uh, buttonRow: ah };
function ch(c, u, a) {
  return c === at.SELECTION ? 'options' : c === at.CREDENCE ? 'sliders' : u;
}
function dh() {
  const {
    currentQuestion: c,
    stateMap: u,
    questionNumber: a,
    progressPercentage: v,
    goBack: _,
    goForward: k,
  } = or();
  if (!c) return null;
  const x = u[c.id];
  if (!x) return null;
  const {
      credences: E,
      setCredences: y,
      inputMode: S,
      setInputMode: C,
      lockedKey: T,
      setLockedKey: R,
    } = x,
    W = c.type || at.DEFAULT,
    V = W === at.DEFAULT,
    A = ch(W, S),
    O = A === 'options' ? c.instructionsOptions : c.instructionsSliders;
  return s.jsxs('div', {
    className: 'screen',
    children: [
      s.jsx(el, { subtitle: a }),
      s.jsx(vi, { percentage: v }),
      s.jsx('main', {
        className: 'screen-main',
        children: s.jsxs('div', {
          className: Kr.container,
          children: [
            s.jsx('div', {
              className: Kr.categoryLabel,
              style: { color: dp },
              children: c.categoryLabel,
            }),
            s.jsxs('h2', {
              className: Kr.heading,
              children: [c.heading, s.jsx(js, { content: c.info })],
            }),
            s.jsx('p', { className: Kr.instructions, children: O }),
            V && s.jsx(Im, { mode: S, setMode: C }),
            s.jsx('div', {
              className: 'card',
              children:
                A === 'options'
                  ? c.options.map((Y) =>
                      s.jsx(
                        Wm,
                        {
                          label: Y.label,
                          description: Y.description,
                          info: Y.info,
                          optionKey: Y.key,
                          credences: E,
                          setCredences: y,
                          color: Y.color,
                          setInputMode: C,
                          setLockedKey: R,
                        },
                        Y.key
                      )
                    )
                  : c.options.map((Y) =>
                      s.jsx(
                        lh,
                        {
                          label: Y.label,
                          description: Y.description,
                          info: Y.info,
                          value: E[Y.key],
                          onChange: (ue, K, D, de) => {
                            const ae = Bc(Y.key, ue, E, K, de);
                            y(D ? Uc(ae) : ae);
                          },
                          color: Y.color,
                          credences: E,
                          sliderKey: Y.key,
                          lockedKey: T,
                          setLockedKey: R,
                        },
                        Y.key
                      )
                    ),
            }),
            s.jsxs('div', {
              className: Kr.buttonRow,
              children: [
                s.jsx('button', {
                  onClick: _,
                  className: 'btn btn-secondary',
                  children: ce.navigation.back,
                }),
                s.jsx('button', {
                  onClick: k,
                  className: 'btn btn-primary',
                  children: ce.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const fh = '_causeBar_as0sb_3',
  ph = '_header_as0sb_7',
  mh = '_name_as0sb_15',
  hh = '_percentage_as0sb_19',
  vh = '_changeIndicator_as0sb_23',
  gh = '_up_as0sb_27',
  yh = '_down_as0sb_31',
  wh = '_barTrack_as0sb_35',
  _h = '_barOriginal_as0sb_43',
  kh = '_barFill_as0sb_49',
  Sh = '_barLabel_as0sb_58',
  xh = '_compact_as0sb_65',
  xt = {
    causeBar: fh,
    header: ph,
    name: mh,
    percentage: hh,
    changeIndicator: vh,
    up: gh,
    down: yh,
    barTrack: wh,
    barOriginal: _h,
    barFill: kh,
    barLabel: Sh,
    compact: xh,
  },
  Gc = ({
    name: c,
    percentage: u,
    color: a,
    originalPercentage: v = null,
    hasChanged: _ = !1,
    simpleMode: k = !1,
  }) => {
    const x = !k && _ && v !== null && u !== v,
      E = x && u > v;
    return s.jsxs('div', {
      className: `${xt.causeBar} ${k ? xt.compact : ''}`,
      children: [
        s.jsxs('div', {
          className: xt.header,
          children: [
            s.jsx('span', { className: xt.name, children: c }),
            s.jsxs('span', {
              className: xt.percentage,
              style: { color: a },
              children: [
                u.toFixed(0),
                '%',
                x &&
                  s.jsx('span', {
                    className: `${xt.changeIndicator} ${E ? xt.up : xt.down}`,
                    children: E ? '↑' : '↓',
                  }),
              ],
            }),
          ],
        }),
        s.jsxs('div', {
          className: xt.barTrack,
          children: [
            x &&
              s.jsx('div', { className: xt.barOriginal, style: { width: `${v}%`, background: a } }),
            s.jsx('div', {
              className: xt.barFill,
              style: { width: `${u}%`, background: a },
              children:
                u > 15 && s.jsxs('span', { className: xt.barLabel, children: [u.toFixed(0), '%'] }),
            }),
          ],
        }),
      ],
    });
  },
  Ch = { target: Ip, parliament: hp, handshake: _p, scale: jp };
function Eh({ name: c, size: u = 18, className: a = '' }) {
  const v = Ch[c] || zc;
  return s.jsx(v, { size: u, className: a });
}
const Nh = '_resultsContainer_jokrc_3',
  jh = '_inner_jokrc_11',
  Th = '_resultsHeader_jokrc_16',
  Lh = '_title_jokrc_21',
  Ih = '_modifiedIndicator_jokrc_27',
  Rh = '_worldviewLabel_jokrc_34',
  Ph = '_resultsGrid_jokrc_38',
  Oh = '_comparisonContainer_jokrc_46',
  Mh = '_originalResults_jokrc_53',
  zh = '_newResults_jokrc_54',
  Dh = '_comparisonDivider_jokrc_89',
  Ah = '_dividerLine_jokrc_98',
  Fh = '_dividerArrow_jokrc_105',
  Bh = '_compactCard_jokrc_118',
  Uh = '_cardHeader_jokrc_122',
  $h = '_cardIcon_jokrc_126',
  Wh = '_cardTitle_jokrc_132',
  Hh = '_resultCard_jokrc_136',
  Vh = '_cardSubtitle_jokrc_168',
  qh = '_cardFooter_jokrc_174',
  Qh = '_adjustPanel_jokrc_182',
  bh = '_adjustHeader_jokrc_190',
  Gh = '_adjustTitle_jokrc_197',
  Kh = '_resetAllButton_jokrc_203',
  Yh = '_panelList_jokrc_220',
  Xh = '_backButtonContainer_jokrc_226',
  Zh = '_calculationSelect_jokrc_272',
  Jh = '_calculationSelectContainer_jokrc_305',
  ev = '_singleResultCard_jokrc_316',
  tv = '_sideLabel_jokrc_327',
  ie = {
    resultsContainer: Nh,
    inner: jh,
    resultsHeader: Th,
    title: Lh,
    modifiedIndicator: Ih,
    worldviewLabel: Rh,
    resultsGrid: Ph,
    comparisonContainer: Oh,
    originalResults: Mh,
    newResults: zh,
    comparisonDivider: Dh,
    dividerLine: Ah,
    dividerArrow: Fh,
    compactCard: Bh,
    cardHeader: Uh,
    cardIcon: $h,
    cardTitle: Wh,
    resultCard: Hh,
    cardSubtitle: Vh,
    cardFooter: qh,
    adjustPanel: Qh,
    adjustHeader: bh,
    adjustTitle: Gh,
    resetAllButton: Kh,
    panelList: Yh,
    backButtonContainer: Xh,
    calculationSelect: Zh,
    calculationSelectContainer: Jh,
    singleResultCard: ev,
    sideLabel: tv,
  };
function Kc({
  methodKey: c,
  results: u,
  evs: a = null,
  originalResults: v = null,
  causeEntries: _,
  hasChanged: k = !1,
  simpleMode: x = !1,
}) {
  const E = ce.results.methods[c],
    y = a
      ? `${E.footerLabel} ${_.map(([S, C]) => `${C.name.slice(0, 2)} ${a[S].toFixed(0)}`).join(' · ')}`
      : E.footerText;
  return s.jsxs('div', {
    className: `${ie.resultCard} ${x ? ie.compactCard : ''}`,
    children: [
      s.jsxs('div', {
        className: ie.cardHeader,
        children: [
          s.jsx('div', { className: ie.cardIcon, children: s.jsx(Eh, { name: E.icon, size: 18 }) }),
          s.jsxs('div', {
            children: [
              s.jsx('h3', { className: ie.cardTitle, children: E.title }),
              !x && s.jsx('p', { className: ie.cardSubtitle, children: E.subtitle }),
            ],
          }),
        ],
      }),
      _.map(([S, C]) =>
        s.jsx(
          Gc,
          {
            name: C.name,
            percentage: u[S],
            originalPercentage: v == null ? void 0 : v[S],
            color: C.color,
            hasChanged: !x && k,
            simpleMode: x,
          },
          S
        )
      ),
      !x && s.jsx('div', { className: ie.cardFooter, children: y }),
    ],
  });
}
const nv = '_container_1m8cr_3',
  rv = '_title_1m8cr_8',
  lv = '_body_1m8cr_16',
  iv = '_buttonRow_1m8cr_25',
  di = { container: nv, title: rv, body: lv, buttonRow: iv };
function ov() {
  const {
    currentQuestion: c,
    questionNumber: u,
    progressPercentage: a,
    calculationResults: v,
    causesConfig: _,
    goBack: k,
    goForward: x,
  } = or();
  if (!c) return null;
  const E = Object.entries(_),
    S = [
      { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
      { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
      { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
      { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
    ].filter((C) => {
      var T;
      return ((T = Yr.calculations) == null ? void 0 : T[C.flag]) === !0;
    });
  return s.jsxs('div', {
    className: 'screen',
    children: [
      s.jsx(el, { subtitle: u }),
      s.jsx(vi, { percentage: a }),
      s.jsx('main', {
        className: 'screen-main',
        children: s.jsxs('div', {
          className: di.container,
          children: [
            s.jsx('h2', { className: di.title, children: c.title }),
            s.jsx('p', { className: di.body, children: c.body }),
            s.jsx('div', {
              className: ie.resultsGrid,
              children: S.map((C) =>
                s.jsx(
                  Kc,
                  {
                    methodKey: C.key,
                    results: v[C.key],
                    evs: C.hasEvs ? v[C.key].evs : null,
                    causeEntries: E,
                  },
                  C.key
                )
              ),
            }),
            s.jsxs('div', {
              className: di.buttonRow,
              children: [
                s.jsx('button', {
                  onClick: k,
                  className: 'btn btn-secondary',
                  children: ce.navigation.back,
                }),
                s.jsx('button', {
                  onClick: x,
                  className: 'btn btn-primary',
                  children: ce.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function sv({
  label: c,
  value: u,
  onChange: a,
  color: v,
  credences: _,
  sliderKey: k,
  lockedKey: x,
  setLockedKey: E,
}) {
  const {
      isLocked: y,
      hasLockedSibling: S,
      thumbOffset: C,
      featureEnabled: T,
    } = bc({ sliderKey: k, lockedKey: x, credences: _ }),
    { isDragging: R, dragHandlers: W } = Qc({
      credences: _,
      isLocked: y,
      lockedKey: x,
      onChange: a,
    }),
    V = () => {
      T && E(x === k ? null : k);
    },
    A = S
      ? `linear-gradient(to right, ${v} 0%, ${v} ${u}%, rgba(255,255,255,0.15) ${u}%, rgba(255,255,255,0.15) ${C}, rgba(255,255,255,0.08) ${C}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${v} 0%, ${v} ${u}%, rgba(255,255,255,0.15) ${u}%, rgba(255,255,255,0.15) 100%)`;
  return s.jsxs('div', {
    className: je.compactSlider,
    children: [
      s.jsxs('div', {
        className: je.header,
        children: [
          s.jsx('span', { className: je.label, children: c }),
          s.jsxs('span', {
            className: je.value,
            style: { color: v },
            children: [Math.round(u), '%'],
          }),
        ],
      }),
      s.jsxs('div', {
        className: je.sliderRow,
        children: [
          s.jsxs('div', {
            className: je.sliderContainer,
            children: [
              s.jsx('input', {
                type: 'range',
                min: '0',
                max: '100',
                step: 'any',
                value: u,
                ...W,
                'data-dragging': R,
                disabled: y,
                style: { background: A, cursor: y ? 'not-allowed' : 'pointer' },
              }),
              S && s.jsx('div', { className: je.lockLimit, style: { left: C } }),
            ],
          }),
          T &&
            s.jsx('button', {
              className: `${je.lockButton} ${y ? je.locked : ''}`,
              onClick: V,
              title: y ? ce.sliders.unlockTooltip : ce.sliders.lockTooltip,
              type: 'button',
              children: s.jsx(Dc, { size: 14 }),
            }),
        ],
      }),
    ],
  });
}
function uv({ label: c, color: u, isSelected: a, onSelect: v }) {
  return s.jsxs('button', {
    type: 'button',
    onClick: v,
    className: `${je.compactSelection} ${a ? je.selected : ''}`,
    style: { '--selection-color': u },
    children: [
      s.jsx('span', { className: je.selectionLabel, children: c }),
      s.jsx('span', {
        className: je.selectionIndicator,
        style: { borderColor: a ? u : void 0, backgroundColor: a ? u : void 0 },
        children: a && s.jsx(Mc, { size: 12, strokeWidth: 3 }),
      }),
    ],
  });
}
const av = '_editPanel_1er15_3',
  cv = '_expanded_1er15_11',
  dv = '_toggleButton_1er15_16',
  fv = '_buttonContent_1er15_33',
  pv = '_icon_1er15_39',
  mv = '_title_1er15_43',
  hv = '_modifiedBadge_1er15_48',
  vv = '_preview_1er15_56',
  gv = '_chevron_1er15_62',
  yv = '_content_1er15_66',
  wv = '_footer_1er15_71',
  _v = '_footerNote_1er15_78',
  kv = '_resetButton_1er15_84',
  Sv = '_selectionRow_1er15_103',
  Ge = {
    editPanel: av,
    expanded: cv,
    toggleButton: dv,
    buttonContent: fv,
    icon: pv,
    title: mv,
    modifiedBadge: hv,
    preview: vv,
    chevron: gv,
    content: yv,
    footer: wv,
    footerNote: _v,
    resetButton: kv,
    selectionRow: Sv,
  };
function xv({
  title: c,
  icon: u,
  credences: a,
  setCredences: v,
  originalCredences: _,
  configs: k,
  isExpanded: x,
  onToggle: E,
  lockedKey: y,
  setLockedKey: S,
  questionType: C = at.DEFAULT,
}) {
  const T = _ && JSON.stringify(a) !== JSON.stringify(_),
    R = C === at.SELECTION,
    W = (O) => {
      const Y = {};
      (k.forEach((ue) => {
        Y[ue.key] = ue.key === O ? 100 : 0;
      }),
        v(Y));
    },
    V = (O) => {
      (O.stopPropagation(), v({ ..._ }));
    },
    A = k.map((O) => `${O.short}:${a[O.key]}%`).join(' ');
  return s.jsxs('div', {
    className: `${Ge.editPanel} ${x ? Ge.expanded : ''}`,
    children: [
      s.jsxs('button', {
        onClick: E,
        className: Ge.toggleButton,
        children: [
          s.jsxs('div', {
            className: Ge.buttonContent,
            children: [
              s.jsx('span', { className: Ge.icon, children: u }),
              s.jsx('span', { className: Ge.title, children: c }),
              T &&
                s.jsx('span', {
                  className: Ge.modifiedBadge,
                  children: ce.editPanel.modifiedBadge,
                }),
              !x && s.jsx('span', { className: Ge.preview, children: A }),
            ],
          }),
          s.jsx('span', {
            className: Ge.chevron,
            children: x ? s.jsx(yp, { size: 16 }) : s.jsx(gp, { size: 16 }),
          }),
        ],
      }),
      x &&
        s.jsx('div', {
          className: Ge.content,
          children: R
            ? s.jsxs(s.Fragment, {
                children: [
                  s.jsx('div', {
                    className: Ge.selectionRow,
                    children: k.map((O) =>
                      s.jsx(
                        uv,
                        {
                          label: O.label,
                          color: O.color,
                          isSelected: a[O.key] === 100,
                          onSelect: () => W(O.key),
                        },
                        O.key
                      )
                    ),
                  }),
                  s.jsxs('div', {
                    className: Ge.footer,
                    children: [
                      s.jsx('span', {
                        className: Ge.footerNote,
                        children: ce.editPanel.selectionNote || 'Pick one option',
                      }),
                      T &&
                        s.jsxs('button', {
                          onClick: V,
                          className: Ge.resetButton,
                          children: [s.jsx(ys, { size: 10 }), ' ', ce.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              })
            : s.jsxs(s.Fragment, {
                children: [
                  k.map((O) =>
                    s.jsx(
                      sv,
                      {
                        label: O.label,
                        value: a[O.key],
                        onChange: (Y, ue, K, D) => {
                          const de = Bc(O.key, Y, a, ue, D);
                          v(K ? Uc(de) : de);
                        },
                        color: O.color,
                        credences: a,
                        sliderKey: O.key,
                        lockedKey: y,
                        setLockedKey: S,
                      },
                      O.key
                    )
                  ),
                  s.jsxs('div', {
                    className: Ge.footer,
                    children: [
                      s.jsx('span', {
                        className: Ge.footerNote,
                        children: ce.editPanel.sliderNote,
                      }),
                      T &&
                        s.jsxs('button', {
                          onClick: V,
                          className: Ge.resetButton,
                          children: [s.jsx(ys, { size: 10 }), ' ', ce.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              }),
        }),
    ],
  });
}
const Pn = ce.worldviewModal;
function Cv({
  worldviewIds: c,
  activeWorldviewId: u,
  hasProgressMap: a,
  worldviewNames: v,
  onSwitch: _,
  onClose: k,
  onMarketplace: x,
  onRename: E,
}) {
  const [y, S] = z.useState(null),
    [C, T] = z.useState(''),
    W = Object.values(a).filter(Boolean).length >= 2 && x,
    V = (K, D) => {
      (D.stopPropagation(), S(K), T((v == null ? void 0 : v[K]) || `${Pn.defaultName} ${K}`));
    },
    A = (K, D) => {
      D.stopPropagation();
      const de = C.trim();
      (de && E && E(K, de), S(null), T(''));
    },
    O = (K) => {
      (K.stopPropagation(), S(null), T(''));
    },
    Y = (K, D) => {
      D.key === 'Enter' ? A(K, D) : D.key === 'Escape' && O(D);
    },
    ue = (K) => (v == null ? void 0 : v[K]) || `${Pn.defaultName} ${K}`;
  return s.jsx('div', {
    className: Ie.overlay,
    onClick: k,
    children: s.jsxs('div', {
      className: Ie.modal,
      onClick: (K) => K.stopPropagation(),
      children: [
        s.jsx('h2', { className: Ie.title, children: Pn.title }),
        s.jsx('p', { className: Ie.message, children: Pn.description }),
        s.jsxs('div', {
          className: Ie.buttons,
          children: [
            c.map((K) => {
              const D = K === u,
                de = a[K],
                ae = y === K,
                we = ue(K);
              return s.jsx(
                'div',
                {
                  className: Ie.worldviewRow,
                  children: ae
                    ? s.jsxs('div', {
                        className: Ie.editRow,
                        onClick: (ve) => ve.stopPropagation(),
                        children: [
                          s.jsx('input', {
                            type: 'text',
                            value: C,
                            onChange: (ve) => T(ve.target.value),
                            onKeyDown: (ve) => Y(K, ve),
                            className: Ie.editInput,
                            autoFocus: !0,
                            maxLength: 30,
                          }),
                          s.jsx('button', {
                            onClick: (ve) => A(K, ve),
                            className: Ie.iconButton,
                            title: 'Save',
                            children: s.jsx(Mc, { size: 16 }),
                          }),
                          s.jsx('button', {
                            onClick: O,
                            className: Ie.iconButton,
                            title: 'Cancel',
                            children: s.jsx(Rp, { size: 16 }),
                          }),
                        ],
                      })
                    : s.jsxs(s.Fragment, {
                        children: [
                          s.jsxs('button', {
                            onClick: () => _(K),
                            className: `btn ${D ? 'btn-primary' : 'btn-secondary'} ${Ie.button} ${Ie.worldviewButton}`,
                            disabled: D,
                            children: [we, !de && ` ${Pn.emptyLabel}`, D && ` ${Pn.currentLabel}`],
                          }),
                          de &&
                            E &&
                            s.jsx('button', {
                              onClick: (ve) => V(K, ve),
                              className: Ie.iconButton,
                              title: 'Rename',
                              children: s.jsx(Np, { size: 14 }),
                            }),
                        ],
                      }),
                },
                K
              );
            }),
            W &&
              s.jsxs('button', {
                onClick: x,
                className: `btn btn-primary ${Ie.button}`,
                style: { marginTop: '0.5rem' },
                children: [s.jsx(Lp, { size: 16 }), Pn.marketplaceButton],
              }),
          ],
        }),
      ],
    }),
  });
}
function Ev() {
  var Z, oe;
  const {
      questionsConfig: c,
      causesConfig: u,
      stateMap: a,
      expandedPanel: v,
      setExpandedPanel: _,
      calculationResults: k,
      originalCalculationResults: x,
      hasChanged: E,
      resetToOriginal: y,
      resetQuiz: S,
      goBack: C,
      goToStep: T,
      worldviews: R,
      worldviewNames: W,
      activeWorldviewId: V,
      switchWorldview: A,
      worldviewIds: O,
      hasProgressMap: Y,
      startQuiz: ue,
      selectedCalculations: K,
      setSelectedCalculations: D,
      setWorldviewName: de,
      marketplaceBudget: ae,
    } = or(),
    [we, ve] = z.useState(!1),
    [nt, ct] = z.useState(!1),
    [Ct, ze] = z.useState(null),
    [De, Re] = z.useState(!1),
    Je = Object.entries(u),
    fe = [
      { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
      { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
      { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
      { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
    ].filter((q) => {
      var b;
      return ((b = Yr.calculations) == null ? void 0 : b[q.flag]) === !0;
    });
  z.useEffect(() => {
    if (fe.length === 0) return;
    const q = fe[0].key,
      b = K.left && fe.some((Te) => Te.key === K.left),
      me = K.right && fe.some((Te) => Te.key === K.right);
    (!b || !me) && D({ left: b ? K.left : q, right: me ? K.right : q });
  }, [fe, K.left, K.right, D]);
  const M = (q, b) => {
      D({ [q]: b });
    },
    X = (q) => {
      (Re(!1), A(q), Y[q] || ue());
    },
    F = () => {
      (Re(!1), T('marketplace'));
    },
    m = (q) =>
      q.options.map((b) => ({
        key: b.key,
        label: b.panelLabel,
        short: b.panelShort,
        color: b.color,
      })),
    N = c.filter((q) => q.type !== at.INTERMISSION),
    ne = (q) =>
      s.jsx('select', {
        className: ie.calculationSelect,
        value: K[q] || '',
        onChange: (b) => M(q, b.target.value),
        children: fe.map((b) =>
          s.jsx('option', { value: b.key, children: ce.results.methods[b.key].title }, b.key)
        ),
      }),
    re = (q, b, me = !0) => {
      const Te = K[b],
        Et = fe.find((le) => le.key === Te);
      if (!Et) return null;
      const B = q == null ? void 0 : q[Et.key];
      return B
        ? s.jsx(Kc, {
            methodKey: Et.key,
            results: B,
            evs: Et.hasEvs ? B.evs : null,
            causeEntries: Je,
            simpleMode: me,
          })
        : null;
    };
  return s.jsxs('div', {
    className: ie.resultsContainer,
    children: [
      s.jsx(el, {}),
      s.jsx(vi, { percentage: 100 }),
      s.jsxs('div', {
        className: ie.inner,
        children: [
          s.jsx('div', {
            className: ie.resultsHeader,
            children: s.jsxs('h1', {
              className: ie.title,
              children: [
                ce.results.heading,
                s.jsxs('span', {
                  className: ie.worldviewLabel,
                  children: [' ', '(', (W == null ? void 0 : W[V]) || `Worldview ${V}`, ')'],
                }),
                E &&
                  s.jsx('span', {
                    className: ie.modifiedIndicator,
                    children: ce.results.modifiedIndicator,
                  }),
              ],
            }),
          }),
          s.jsx('div', {
            className: ie.calculationSelectContainer,
            children: E
              ? s.jsxs('div', {
                  className: ie.comparisonContainer,
                  children: [
                    s.jsxs('div', {
                      className: ie.originalResults,
                      children: [
                        s.jsx('div', { className: ie.sideLabel, children: 'Original' }),
                        ne('left'),
                        re(x, 'left'),
                      ],
                    }),
                    s.jsxs('div', {
                      className: ie.comparisonDivider,
                      children: [
                        s.jsx('div', { className: ie.dividerLine }),
                        s.jsx('div', { className: ie.dividerArrow, children: '→' }),
                        s.jsx('div', { className: ie.dividerLine }),
                      ],
                    }),
                    s.jsxs('div', {
                      className: ie.newResults,
                      children: [
                        s.jsx('div', { className: ie.sideLabel, children: 'Modified' }),
                        ne('right'),
                        re(k, 'right'),
                      ],
                    }),
                  ],
                })
              : s.jsxs(s.Fragment, {
                  children: [
                    ne('left'),
                    s.jsx('div', { className: ie.singleResultCard, children: re(x || k, 'left') }),
                  ],
                }),
          }),
          s.jsxs('div', {
            className: ie.adjustPanel,
            children: [
              s.jsxs('div', {
                className: ie.adjustHeader,
                children: [
                  s.jsx('span', {
                    className: ie.adjustTitle,
                    children: ce.results.adjustCredencesHeading,
                  }),
                  E &&
                    s.jsxs('button', {
                      onClick: y,
                      className: ie.resetAllButton,
                      children: [s.jsx(ys, { size: 10 }), ' ', ce.results.resetAllButton],
                    }),
                ],
              }),
              s.jsx('div', {
                className: ie.panelList,
                children: N.map((q) => {
                  const b = a[q.id];
                  return b
                    ? s.jsx(
                        xv,
                        {
                          title: q.editPanelTitle,
                          icon: s.jsx(qc, { name: q.icon, size: 16 }),
                          credences: b.credences,
                          setCredences: b.setCredences,
                          originalCredences: b.originalCredences,
                          configs: m(q),
                          isExpanded: v === q.id,
                          onToggle: () => _(v === q.id ? null : q.id),
                          lockedKey: b.lockedKey,
                          setLockedKey: b.setLockedKey,
                          questionType: q.type,
                        },
                        q.id
                      )
                    : null;
                }),
              }),
            ],
          }),
          s.jsxs('div', {
            className: ie.backButtonContainer,
            children: [
              s.jsx('button', {
                onClick: C,
                className: 'btn btn-secondary',
                children: ce.navigation.backToQuiz,
              }),
              s.jsxs('button', {
                onClick: () => Re(!0),
                className: 'btn btn-secondary',
                children: [s.jsx(xp, { size: 16 }), 'Switch Worldview'],
              }),
              (Z = Yr.ui) == null ? void 0 : Z.shareResults,
              (oe = Yr.ui) == null ? void 0 : oe.resetButton,
            ],
          }),
        ],
      }),
      De &&
        s.jsx(Cv, {
          worldviewIds: O,
          activeWorldviewId: V,
          hasProgressMap: Y,
          worldviewNames: W,
          onSwitch: X,
          onClose: () => Re(!1),
          onMarketplace: F,
          onRename: de,
        }),
    ],
  });
}
const Nv = '_description_bffzu_3',
  jv = '_emptyState_bffzu_9',
  Tv = '_settingsRow_bffzu_17',
  Lv = '_settingsLabel_bffzu_25',
  Iv = '_budgetInputWrapper_bffzu_35',
  Rv = '_currencyPrefix_bffzu_48',
  Pv = '_budgetInput_bffzu_35',
  Ov = '_settingsSelect_bffzu_68',
  Mv = '_mainCard_bffzu_98',
  zv = '_allocationItem_bffzu_103',
  Dv = '_allocationHeader_bffzu_107',
  Av = '_causeName_bffzu_114',
  Fv = '_dollarAmount_bffzu_120',
  Bv = '_barTrack_bffzu_128',
  Uv = '_barFill_bffzu_135',
  $v = '_barLabel_bffzu_144',
  Wv = '_breakdownSection_bffzu_150',
  Hv = '_breakdownHeading_bffzu_154',
  Vv = '_breakdownGrid_bffzu_161',
  qv = '_worldviewCard_bffzu_167',
  Qv = '_worldviewHeader_bffzu_174',
  bv = '_worldviewName_bffzu_183',
  Gv = '_worldviewShare_bffzu_188',
  Ce = {
    description: Nv,
    emptyState: jv,
    settingsRow: Tv,
    settingsLabel: Lv,
    budgetInputWrapper: Iv,
    currencyPrefix: Rv,
    budgetInput: Pv,
    settingsSelect: Ov,
    mainCard: Mv,
    allocationItem: zv,
    allocationHeader: Dv,
    causeName: Av,
    dollarAmount: Fv,
    barTrack: Bv,
    barFill: Uv,
    barLabel: $v,
    breakdownSection: Wv,
    breakdownHeading: Hv,
    breakdownGrid: Vv,
    worldviewCard: qv,
    worldviewHeader: Qv,
    worldviewName: bv,
    worldviewShare: Gv,
  },
  Kv = Xr.diminishingReturns;
function Lc(c) {
  if (c >= 1e6) {
    const u = c / 1e6;
    return `$${u % 1 === 0 ? u.toFixed(0) : u.toFixed(1)}M`;
  }
  return `$${c.toLocaleString()}`;
}
function Yv(c, u) {
  const a = u * 0.005;
  return Math.round(c / a) * a;
}
function Xv() {
  const {
      worldviews: c,
      worldviewNames: u,
      worldviewIds: a,
      hasProgressMap: v,
      goToStep: _,
      questionsConfig: k,
      marketplaceBudget: x,
      setMarketplaceBudget: E,
    } = or(),
    [y, S] = z.useState(Kv),
    [C, T] = z.useState(x.toLocaleString()),
    R = Object.entries(On),
    W = (D) => {
      T(D.target.value);
    },
    V = () => {
      const D = parseInt(C.replace(/[^0-9]/g, ''), 10);
      !isNaN(D) && D > 0 ? (E(D), T(D.toLocaleString())) : T(x.toLocaleString());
    },
    A = (D) => {
      D.key === 'Enter' && D.target.blur();
    },
    O = a
      .filter((D) => v[D])
      .map((D) => {
        const de = c[D],
          ae = {};
        for (const [ve, nt] of Object.entries(de.questions)) ae[ve] = nt.credences;
        const we = Yp(ae, { causes: On, dimensions: Zv(k) });
        return { id: D, name: (u == null ? void 0 : u[D]) || `Worldview ${D}`, evs: we };
      }),
    Y = O.length >= 2,
    ue = Y ? Xp(O, { diminishingReturns: y }) : null,
    K = () => {
      _('results');
    };
  return s.jsxs('div', {
    className: ie.resultsContainer,
    children: [
      s.jsx(el, {}),
      s.jsx(vi, { percentage: 100 }),
      s.jsxs('div', {
        className: ie.inner,
        children: [
          s.jsxs('div', {
            className: ie.resultsHeader,
            children: [
              s.jsx('h1', { className: ie.title, children: ce.marketplace.heading }),
              s.jsx('p', { className: Ce.description, children: ce.marketplace.description }),
            ],
          }),
          Y
            ? s.jsxs(s.Fragment, {
                children: [
                  s.jsxs('div', {
                    className: Ce.settingsRow,
                    children: [
                      s.jsxs('label', {
                        className: Ce.settingsLabel,
                        children: [
                          ce.marketplace.budgetLabel,
                          s.jsxs('div', {
                            className: Ce.budgetInputWrapper,
                            children: [
                              s.jsx('span', { className: Ce.currencyPrefix, children: '$' }),
                              s.jsx('input', {
                                type: 'text',
                                value: C,
                                onChange: W,
                                onBlur: V,
                                onKeyDown: A,
                                className: Ce.budgetInput,
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs('label', {
                        className: Ce.settingsLabel,
                        children: [
                          ce.marketplace.settingsLabel,
                          s.jsx('select', {
                            value: y,
                            onChange: (D) => S(D.target.value),
                            className: Ce.settingsSelect,
                            children: Object.keys(pi).map((D) =>
                              s.jsx(
                                'option',
                                { value: D, children: ce.marketplace.diminishingReturns[D] },
                                D
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs('div', {
                    className: `${ie.resultCard} ${Ce.mainCard}`,
                    children: [
                      s.jsx('div', {
                        className: ie.cardHeader,
                        children: s.jsxs('div', {
                          children: [
                            s.jsx('h3', {
                              className: ie.cardTitle,
                              children: 'Combined Allocation',
                            }),
                            s.jsxs('p', {
                              className: ie.cardSubtitle,
                              children: [
                                'Based on ',
                                O.length,
                                ' worldviews •',
                                ' ',
                                Lc(x),
                                ' total',
                              ],
                            }),
                          ],
                        }),
                      }),
                      R.map(([D, de]) => {
                        const ae = ue.allocation[D],
                          we = Yv((ae / 100) * x, x);
                        return s.jsxs(
                          'div',
                          {
                            className: Ce.allocationItem,
                            children: [
                              s.jsxs('div', {
                                className: Ce.allocationHeader,
                                children: [
                                  s.jsx('span', { className: Ce.causeName, children: de.name }),
                                  s.jsx('span', { className: Ce.dollarAmount, children: Lc(we) }),
                                ],
                              }),
                              s.jsx('div', {
                                className: Ce.barTrack,
                                children: s.jsx('div', {
                                  className: Ce.barFill,
                                  style: { width: `${ae}%`, background: de.color },
                                  children:
                                    ae > 15 &&
                                    s.jsxs('span', {
                                      className: Ce.barLabel,
                                      children: [ae.toFixed(0), '%'],
                                    }),
                                }),
                              }),
                            ],
                          },
                          D
                        );
                      }),
                    ],
                  }),
                  s.jsxs('div', {
                    className: Ce.breakdownSection,
                    children: [
                      s.jsx('h2', {
                        className: Ce.breakdownHeading,
                        children: ce.marketplace.worldviewBreakdownHeading,
                      }),
                      s.jsx('div', {
                        className: Ce.breakdownGrid,
                        children: ue.worldviewAllocations.map((D, de) =>
                          s.jsxs(
                            'div',
                            {
                              className: Ce.worldviewCard,
                              children: [
                                s.jsxs('div', {
                                  className: Ce.worldviewHeader,
                                  children: [
                                    s.jsx('span', {
                                      className: Ce.worldviewName,
                                      children: D.name,
                                    }),
                                    s.jsxs('span', {
                                      className: Ce.worldviewShare,
                                      children: [D.share.toFixed(0), '% budget'],
                                    }),
                                  ],
                                }),
                                R.map(([ae, we]) => {
                                  const ve = D.share > 0 ? (D.allocation[ae] / D.share) * 100 : 0;
                                  return s.jsx(
                                    Gc,
                                    {
                                      name: we.name,
                                      percentage: ve,
                                      color: we.color,
                                      simpleMode: !0,
                                    },
                                    ae
                                  );
                                }),
                              ],
                            },
                            O[de].id
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              })
            : s.jsx('div', {
                className: Ce.emptyState,
                children: s.jsx('p', { children: ce.marketplace.emptyState }),
              }),
          s.jsx('div', {
            className: ie.backButtonContainer,
            children: s.jsx('button', {
              onClick: K,
              className: 'btn btn-secondary',
              children: ce.marketplace.backButton,
            }),
          }),
        ],
      }),
    ],
  });
}
function Zv(c) {
  return Object.fromEntries(
    c
      .filter((u) => u.type !== 'intermission' && u.worldviewDimension)
      .map((u) => [u.id, u.worldviewDimension])
  );
}
const Jv = '_debugButton_1xuzz_4',
  eg = '_overlay_1xuzz_28',
  tg = '_modal_1xuzz_41',
  ng = '_header_1xuzz_52',
  rg = '_closeButton_1xuzz_66',
  lg = '_content_1xuzz_79',
  ig = '_section_1xuzz_85',
  og = '_causeBlock_1xuzz_99',
  sg = '_fieldRow_1xuzz_112',
  ug = '_checkboxRow_1xuzz_136',
  ag = '_multiplierGroup_1xuzz_155',
  cg = '_dimInfo_1xuzz_165',
  dg = '_multiplierRow_1xuzz_172',
  fg = '_footer_1xuzz_196',
  pg = '_saveButton_1xuzz_203',
  Ue = {
    debugButton: Jv,
    overlay: eg,
    modal: tg,
    header: ng,
    closeButton: rg,
    content: lg,
    section: ig,
    causeBlock: og,
    fieldRow: sg,
    checkboxRow: ug,
    multiplierGroup: ag,
    dimInfo: cg,
    multiplierRow: dg,
    footer: fg,
    saveButton: pg,
  },
  { causes: mg, diminishingReturns: hg } = Xr,
  vg = Ac(!0),
  gg = ({ onConfigChange: c }) => {
    const [u, a] = z.useState(!1),
      [v, _] = z.useState({
        causes: JSON.parse(JSON.stringify(mg)),
        dimensions: JSON.parse(JSON.stringify(vg)),
        diminishingReturns: hg,
      }),
      k = (y, S, C) => {
        _((T) => ({
          ...T,
          causes: {
            ...T.causes,
            [y]: {
              ...T.causes[y],
              [S]: S === 'name' || S === 'color' || typeof C == 'boolean' ? C : Number(C),
            },
          },
        }));
      },
      x = (y, S, C) => {
        _((T) => ({
          ...T,
          dimensions: {
            ...T.dimensions,
            [y]: { ...T.dimensions[y], options: { ...T.dimensions[y].options, [S]: Number(C) } },
          },
        }));
      },
      E = () => {
        (c(v), a(!1));
      };
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx('button', {
          className: Ue.debugButton,
          onClick: () => a(!0),
          title: 'Debug Settings',
          children: 'Settings',
        }),
        u &&
          s.jsx('div', {
            className: Ue.overlay,
            onClick: () => a(!1),
            children: s.jsxs('div', {
              className: Ue.modal,
              onClick: (y) => y.stopPropagation(),
              children: [
                s.jsxs('div', {
                  className: Ue.header,
                  children: [
                    s.jsx('h2', { children: 'Calculation Debugger' }),
                    s.jsx('button', {
                      className: Ue.closeButton,
                      onClick: () => a(!1),
                      children: 'x',
                    }),
                  ],
                }),
                s.jsxs('div', {
                  className: Ue.content,
                  children: [
                    s.jsxs('section', {
                      className: Ue.section,
                      children: [
                        s.jsx('h3', { children: 'DIMINISHING RETURNS' }),
                        s.jsx('div', {
                          className: Ue.fieldRow,
                          children: s.jsxs('label', {
                            children: [
                              'Mode:',
                              s.jsx('select', {
                                value: v.diminishingReturns,
                                onChange: (y) =>
                                  _((S) => ({ ...S, diminishingReturns: y.target.value })),
                                children: Object.keys(pi).map((y) =>
                                  s.jsxs(
                                    'option',
                                    { value: y, children: [y, ' (power = ', pi[y], ')'] },
                                    y
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                        s.jsx('p', {
                          className: Ue.dimInfo,
                          children:
                            'none = winner-take-all · sqrt = moderate spreading · extreme = near-equal',
                        }),
                      ],
                    }),
                    s.jsxs('section', {
                      className: Ue.section,
                      children: [
                        s.jsx('h3', { children: 'CAUSES' }),
                        Object.entries(v.causes).map(([y, S]) =>
                          s.jsxs(
                            'div',
                            {
                              className: Ue.causeBlock,
                              children: [
                                s.jsx('h4', { children: S.name }),
                                s.jsxs('div', {
                                  className: Ue.fieldRow,
                                  children: [
                                    s.jsxs('label', {
                                      children: [
                                        'Points:',
                                        s.jsx('input', {
                                          type: 'number',
                                          value: S.points,
                                          onChange: (C) => k(y, 'points', C.target.value),
                                        }),
                                      ],
                                    }),
                                    s.jsxs('label', {
                                      children: [
                                        'Scale Factor:',
                                        s.jsx('input', {
                                          type: 'number',
                                          value: S.scaleFactor,
                                          onChange: (C) => k(y, 'scaleFactor', C.target.value),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                s.jsxs('div', {
                                  className: Ue.checkboxRow,
                                  children: [
                                    s.jsxs('label', {
                                      children: [
                                        s.jsx('input', {
                                          type: 'checkbox',
                                          checked: S.helpsAnimals,
                                          onChange: (C) => k(y, 'helpsAnimals', C.target.checked),
                                        }),
                                        'Helps Animals',
                                      ],
                                    }),
                                    s.jsxs('label', {
                                      children: [
                                        s.jsx('input', {
                                          type: 'checkbox',
                                          checked: S.helpsFutureHumans,
                                          onChange: (C) =>
                                            k(y, 'helpsFutureHumans', C.target.checked),
                                        }),
                                        'Helps Future Humans',
                                      ],
                                    }),
                                    s.jsxs('label', {
                                      children: [
                                        s.jsx('input', {
                                          type: 'checkbox',
                                          checked: S.isSpeculative,
                                          onChange: (C) => k(y, 'isSpeculative', C.target.checked),
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
                      className: Ue.section,
                      children: [
                        s.jsx('h3', { children: 'DIMENSIONS (from questions)' }),
                        Object.entries(v.dimensions).map(([y, S]) =>
                          s.jsxs(
                            'div',
                            {
                              className: Ue.multiplierGroup,
                              children: [
                                s.jsx('h4', { children: S.name }),
                                s.jsx('p', {
                                  className: Ue.dimInfo,
                                  children:
                                    S.applyAs === 'multiplier'
                                      ? `Multiplier when: ${S.appliesWhen}`
                                      : `Exponent on: ${S.appliesTo}`,
                                }),
                                s.jsx('div', {
                                  className: Ue.multiplierRow,
                                  children: Object.entries(S.options).map(([C, T]) =>
                                    s.jsxs(
                                      'label',
                                      {
                                        children: [
                                          C,
                                          ':',
                                          s.jsx('input', {
                                            type: 'number',
                                            step: S.applyAs === 'exponent' ? '0.1' : '0.01',
                                            value: T,
                                            onChange: (R) => x(y, C, R.target.value),
                                          }),
                                        ],
                                      },
                                      C
                                    )
                                  ),
                                }),
                              ],
                            },
                            y
                          )
                        ),
                      ],
                    }),
                  ],
                }),
                s.jsx('div', {
                  className: Ue.footer,
                  children: s.jsx('button', {
                    className: Ue.saveButton,
                    onClick: E,
                    children: 'Save',
                  }),
                }),
              ],
            }),
          }),
      ],
    });
  },
  yg = {
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
function wg() {
  const {
    currentStep: c,
    currentQuestion: u,
    setDebugConfig: a,
    shareUrlError: v,
    isHydrating: _,
  } = or();
  if (_) return null;
  function k() {
    return c === 'welcome'
      ? s.jsx(Cm, {})
      : c === 'results'
        ? s.jsx(Ev, {})
        : c === 'marketplace'
          ? s.jsx(Xv, {})
          : u
            ? u.type === at.INTERMISSION
              ? s.jsx(ov, {})
              : s.jsx(dh, {})
            : null;
  }
  return s.jsxs(s.Fragment, {
    children: [
      v && s.jsx('div', { style: yg, children: v }),
      k(),
      s.jsx(gg, { onConfigChange: a }),
    ],
  });
}
function _g() {
  return s.jsx(om, { children: s.jsx(wg, {}) });
}
tp.createRoot(document.getElementById('root')).render(
  s.jsx(z.StrictMode, { children: s.jsx(_g, {}) })
);
