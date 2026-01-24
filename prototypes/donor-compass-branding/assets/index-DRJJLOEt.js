(function () {
  const a = document.createElement('link').relList;
  if (a && a.supports && a.supports('modulepreload')) return;
  for (const C of document.querySelectorAll('link[rel="modulepreload"]')) k(C);
  new MutationObserver((C) => {
    for (const x of C)
      if (x.type === 'childList')
        for (const j of x.addedNodes) j.tagName === 'LINK' && j.rel === 'modulepreload' && k(j);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(C) {
    const x = {};
    return (
      C.integrity && (x.integrity = C.integrity),
      C.referrerPolicy && (x.referrerPolicy = C.referrerPolicy),
      C.crossOrigin === 'use-credentials'
        ? (x.credentials = 'include')
        : C.crossOrigin === 'anonymous'
          ? (x.credentials = 'omit')
          : (x.credentials = 'same-origin'),
      x
    );
  }
  function k(C) {
    if (C.ep) return;
    C.ep = !0;
    const x = s(C);
    fetch(C.href, x);
  }
})();
function Lf(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, 'default') ? c.default : c;
}
var Ki = { exports: {} },
  Or = {},
  Yi = { exports: {} },
  oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lc;
function Pf() {
  if (lc) return oe;
  lc = 1;
  var c = Symbol.for('react.element'),
    a = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    k = Symbol.for('react.strict_mode'),
    C = Symbol.for('react.profiler'),
    x = Symbol.for('react.provider'),
    j = Symbol.for('react.context'),
    E = Symbol.for('react.forward_ref'),
    p = Symbol.for('react.suspense'),
    v = Symbol.for('react.memo'),
    _ = Symbol.for('react.lazy'),
    S = Symbol.iterator;
  function T(h) {
    return h === null || typeof h != 'object'
      ? null
      : ((h = (S && h[S]) || h['@@iterator']), typeof h == 'function' ? h : null);
  }
  var $ = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    b = Object.assign,
    V = {};
  function U(h, P, re) {
    ((this.props = h), (this.context = P), (this.refs = V), (this.updater = re || $));
  }
  ((U.prototype.isReactComponent = {}),
    (U.prototype.setState = function (h, P) {
      if (typeof h != 'object' && typeof h != 'function' && h != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, h, P, 'setState');
    }),
    (U.prototype.forceUpdate = function (h) {
      this.updater.enqueueForceUpdate(this, h, 'forceUpdate');
    }));
  function q() {}
  q.prototype = U.prototype;
  function le(h, P, re) {
    ((this.props = h), (this.context = P), (this.refs = V), (this.updater = re || $));
  }
  var ne = (le.prototype = new q());
  ((ne.constructor = le), b(ne, U.prototype), (ne.isPureReactComponent = !0));
  var Y = Array.isArray,
    J = Object.prototype.hasOwnProperty,
    N = { current: null },
    z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(h, P, re) {
    var ie,
      ue = {},
      ae = null,
      ve = null;
    if (P != null)
      for (ie in (P.ref !== void 0 && (ve = P.ref), P.key !== void 0 && (ae = '' + P.key), P))
        J.call(P, ie) && !z.hasOwnProperty(ie) && (ue[ie] = P[ie]);
    var pe = arguments.length - 2;
    if (pe === 1) ue.children = re;
    else if (1 < pe) {
      for (var _e = Array(pe), ot = 0; ot < pe; ot++) _e[ot] = arguments[ot + 2];
      ue.children = _e;
    }
    if (h && h.defaultProps)
      for (ie in ((pe = h.defaultProps), pe)) ue[ie] === void 0 && (ue[ie] = pe[ie]);
    return { $$typeof: c, type: h, key: ae, ref: ve, props: ue, _owner: N.current };
  }
  function Oe(h, P) {
    return { $$typeof: c, type: h.type, key: P, ref: h.ref, props: h.props, _owner: h._owner };
  }
  function fe(h) {
    return typeof h == 'object' && h !== null && h.$$typeof === c;
  }
  function Et(h) {
    var P = { '=': '=0', ':': '=2' };
    return (
      '$' +
      h.replace(/[=:]/g, function (re) {
        return P[re];
      })
    );
  }
  var qe = /\/+/g;
  function Ue(h, P) {
    return typeof h == 'object' && h !== null && h.key != null ? Et('' + h.key) : P.toString(36);
  }
  function Xe(h, P, re, ie, ue) {
    var ae = typeof h;
    (ae === 'undefined' || ae === 'boolean') && (h = null);
    var ve = !1;
    if (h === null) ve = !0;
    else
      switch (ae) {
        case 'string':
        case 'number':
          ve = !0;
          break;
        case 'object':
          switch (h.$$typeof) {
            case c:
            case a:
              ve = !0;
          }
      }
    if (ve)
      return (
        (ve = h),
        (ue = ue(ve)),
        (h = ie === '' ? '.' + Ue(ve, 0) : ie),
        Y(ue)
          ? ((re = ''),
            h != null && (re = h.replace(qe, '$&/') + '/'),
            Xe(ue, P, re, '', function (ot) {
              return ot;
            }))
          : ue != null &&
            (fe(ue) &&
              (ue = Oe(
                ue,
                re +
                  (!ue.key || (ve && ve.key === ue.key)
                    ? ''
                    : ('' + ue.key).replace(qe, '$&/') + '/') +
                  h
              )),
            P.push(ue)),
        1
      );
    if (((ve = 0), (ie = ie === '' ? '.' : ie + ':'), Y(h)))
      for (var pe = 0; pe < h.length; pe++) {
        ae = h[pe];
        var _e = ie + Ue(ae, pe);
        ve += Xe(ae, P, re, _e, ue);
      }
    else if (((_e = T(h)), typeof _e == 'function'))
      for (h = _e.call(h), pe = 0; !(ae = h.next()).done; )
        ((ae = ae.value), (_e = ie + Ue(ae, pe++)), (ve += Xe(ae, P, re, _e, ue)));
    else if (ae === 'object')
      throw (
        (P = String(h)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (P === '[object Object]' ? 'object with keys {' + Object.keys(h).join(', ') + '}' : P) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return ve;
  }
  function lt(h, P, re) {
    if (h == null) return h;
    var ie = [],
      ue = 0;
    return (
      Xe(h, ie, '', '', function (ae) {
        return P.call(re, ae, ue++);
      }),
      ie
    );
  }
  function $e(h) {
    if (h._status === -1) {
      var P = h._result;
      ((P = P()),
        P.then(
          function (re) {
            (h._status === 0 || h._status === -1) && ((h._status = 1), (h._result = re));
          },
          function (re) {
            (h._status === 0 || h._status === -1) && ((h._status = 2), (h._result = re));
          }
        ),
        h._status === -1 && ((h._status = 0), (h._result = P)));
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var F = { current: null },
    L = { transition: null },
    K = { ReactCurrentDispatcher: F, ReactCurrentBatchConfig: L, ReactCurrentOwner: N };
  function D() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (oe.Children = {
      map: lt,
      forEach: function (h, P, re) {
        lt(
          h,
          function () {
            P.apply(this, arguments);
          },
          re
        );
      },
      count: function (h) {
        var P = 0;
        return (
          lt(h, function () {
            P++;
          }),
          P
        );
      },
      toArray: function (h) {
        return (
          lt(h, function (P) {
            return P;
          }) || []
        );
      },
      only: function (h) {
        if (!fe(h))
          throw Error('React.Children.only expected to receive a single React element child.');
        return h;
      },
    }),
    (oe.Component = U),
    (oe.Fragment = s),
    (oe.Profiler = C),
    (oe.PureComponent = le),
    (oe.StrictMode = k),
    (oe.Suspense = p),
    (oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K),
    (oe.act = D),
    (oe.cloneElement = function (h, P, re) {
      if (h == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + h + '.'
        );
      var ie = b({}, h.props),
        ue = h.key,
        ae = h.ref,
        ve = h._owner;
      if (P != null) {
        if (
          (P.ref !== void 0 && ((ae = P.ref), (ve = N.current)),
          P.key !== void 0 && (ue = '' + P.key),
          h.type && h.type.defaultProps)
        )
          var pe = h.type.defaultProps;
        for (_e in P)
          J.call(P, _e) &&
            !z.hasOwnProperty(_e) &&
            (ie[_e] = P[_e] === void 0 && pe !== void 0 ? pe[_e] : P[_e]);
      }
      var _e = arguments.length - 2;
      if (_e === 1) ie.children = re;
      else if (1 < _e) {
        pe = Array(_e);
        for (var ot = 0; ot < _e; ot++) pe[ot] = arguments[ot + 2];
        ie.children = pe;
      }
      return { $$typeof: c, type: h.type, key: ue, ref: ae, props: ie, _owner: ve };
    }),
    (oe.createContext = function (h) {
      return (
        (h = {
          $$typeof: j,
          _currentValue: h,
          _currentValue2: h,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (h.Provider = { $$typeof: x, _context: h }),
        (h.Consumer = h)
      );
    }),
    (oe.createElement = A),
    (oe.createFactory = function (h) {
      var P = A.bind(null, h);
      return ((P.type = h), P);
    }),
    (oe.createRef = function () {
      return { current: null };
    }),
    (oe.forwardRef = function (h) {
      return { $$typeof: E, render: h };
    }),
    (oe.isValidElement = fe),
    (oe.lazy = function (h) {
      return { $$typeof: _, _payload: { _status: -1, _result: h }, _init: $e };
    }),
    (oe.memo = function (h, P) {
      return { $$typeof: v, type: h, compare: P === void 0 ? null : P };
    }),
    (oe.startTransition = function (h) {
      var P = L.transition;
      L.transition = {};
      try {
        h();
      } finally {
        L.transition = P;
      }
    }),
    (oe.unstable_act = D),
    (oe.useCallback = function (h, P) {
      return F.current.useCallback(h, P);
    }),
    (oe.useContext = function (h) {
      return F.current.useContext(h);
    }),
    (oe.useDebugValue = function () {}),
    (oe.useDeferredValue = function (h) {
      return F.current.useDeferredValue(h);
    }),
    (oe.useEffect = function (h, P) {
      return F.current.useEffect(h, P);
    }),
    (oe.useId = function () {
      return F.current.useId();
    }),
    (oe.useImperativeHandle = function (h, P, re) {
      return F.current.useImperativeHandle(h, P, re);
    }),
    (oe.useInsertionEffect = function (h, P) {
      return F.current.useInsertionEffect(h, P);
    }),
    (oe.useLayoutEffect = function (h, P) {
      return F.current.useLayoutEffect(h, P);
    }),
    (oe.useMemo = function (h, P) {
      return F.current.useMemo(h, P);
    }),
    (oe.useReducer = function (h, P, re) {
      return F.current.useReducer(h, P, re);
    }),
    (oe.useRef = function (h) {
      return F.current.useRef(h);
    }),
    (oe.useState = function (h) {
      return F.current.useState(h);
    }),
    (oe.useSyncExternalStore = function (h, P, re) {
      return F.current.useSyncExternalStore(h, P, re);
    }),
    (oe.useTransition = function () {
      return F.current.useTransition();
    }),
    (oe.version = '18.3.1'),
    oe
  );
}
var oc;
function is() {
  return (oc || ((oc = 1), (Yi.exports = Pf())), Yi.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ic;
function Rf() {
  if (ic) return Or;
  ic = 1;
  var c = is(),
    a = Symbol.for('react.element'),
    s = Symbol.for('react.fragment'),
    k = Object.prototype.hasOwnProperty,
    C = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(E, p, v) {
    var _,
      S = {},
      T = null,
      $ = null;
    (v !== void 0 && (T = '' + v),
      p.key !== void 0 && (T = '' + p.key),
      p.ref !== void 0 && ($ = p.ref));
    for (_ in p) k.call(p, _) && !x.hasOwnProperty(_) && (S[_] = p[_]);
    if (E && E.defaultProps) for (_ in ((p = E.defaultProps), p)) S[_] === void 0 && (S[_] = p[_]);
    return { $$typeof: a, type: E, key: T, ref: $, props: S, _owner: C.current };
  }
  return ((Or.Fragment = s), (Or.jsx = j), (Or.jsxs = j), Or);
}
var sc;
function Of() {
  return (sc || ((sc = 1), (Ki.exports = Rf())), Ki.exports);
}
var d = Of(),
  ee = is(),
  Wl = {},
  Xi = { exports: {} },
  nt = {},
  Zi = { exports: {} },
  Ji = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uc;
function If() {
  return (
    uc ||
      ((uc = 1),
      (function (c) {
        function a(L, K) {
          var D = L.length;
          L.push(K);
          e: for (; 0 < D; ) {
            var h = (D - 1) >>> 1,
              P = L[h];
            if (0 < C(P, K)) ((L[h] = K), (L[D] = P), (D = h));
            else break e;
          }
        }
        function s(L) {
          return L.length === 0 ? null : L[0];
        }
        function k(L) {
          if (L.length === 0) return null;
          var K = L[0],
            D = L.pop();
          if (D !== K) {
            L[0] = D;
            e: for (var h = 0, P = L.length, re = P >>> 1; h < re; ) {
              var ie = 2 * (h + 1) - 1,
                ue = L[ie],
                ae = ie + 1,
                ve = L[ae];
              if (0 > C(ue, D))
                ae < P && 0 > C(ve, ue)
                  ? ((L[h] = ve), (L[ae] = D), (h = ae))
                  : ((L[h] = ue), (L[ie] = D), (h = ie));
              else if (ae < P && 0 > C(ve, D)) ((L[h] = ve), (L[ae] = D), (h = ae));
              else break e;
            }
          }
          return K;
        }
        function C(L, K) {
          var D = L.sortIndex - K.sortIndex;
          return D !== 0 ? D : L.id - K.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var x = performance;
          c.unstable_now = function () {
            return x.now();
          };
        } else {
          var j = Date,
            E = j.now();
          c.unstable_now = function () {
            return j.now() - E;
          };
        }
        var p = [],
          v = [],
          _ = 1,
          S = null,
          T = 3,
          $ = !1,
          b = !1,
          V = !1,
          U = typeof setTimeout == 'function' ? setTimeout : null,
          q = typeof clearTimeout == 'function' ? clearTimeout : null,
          le = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function ne(L) {
          for (var K = s(v); K !== null; ) {
            if (K.callback === null) k(v);
            else if (K.startTime <= L) (k(v), (K.sortIndex = K.expirationTime), a(p, K));
            else break;
            K = s(v);
          }
        }
        function Y(L) {
          if (((V = !1), ne(L), !b))
            if (s(p) !== null) ((b = !0), $e(J));
            else {
              var K = s(v);
              K !== null && F(Y, K.startTime - L);
            }
        }
        function J(L, K) {
          ((b = !1), V && ((V = !1), q(A), (A = -1)), ($ = !0));
          var D = T;
          try {
            for (ne(K), S = s(p); S !== null && (!(S.expirationTime > K) || (L && !Et())); ) {
              var h = S.callback;
              if (typeof h == 'function') {
                ((S.callback = null), (T = S.priorityLevel));
                var P = h(S.expirationTime <= K);
                ((K = c.unstable_now()),
                  typeof P == 'function' ? (S.callback = P) : S === s(p) && k(p),
                  ne(K));
              } else k(p);
              S = s(p);
            }
            if (S !== null) var re = !0;
            else {
              var ie = s(v);
              (ie !== null && F(Y, ie.startTime - K), (re = !1));
            }
            return re;
          } finally {
            ((S = null), (T = D), ($ = !1));
          }
        }
        var N = !1,
          z = null,
          A = -1,
          Oe = 5,
          fe = -1;
        function Et() {
          return !(c.unstable_now() - fe < Oe);
        }
        function qe() {
          if (z !== null) {
            var L = c.unstable_now();
            fe = L;
            var K = !0;
            try {
              K = z(!0, L);
            } finally {
              K ? Ue() : ((N = !1), (z = null));
            }
          } else N = !1;
        }
        var Ue;
        if (typeof le == 'function')
          Ue = function () {
            le(qe);
          };
        else if (typeof MessageChannel < 'u') {
          var Xe = new MessageChannel(),
            lt = Xe.port2;
          ((Xe.port1.onmessage = qe),
            (Ue = function () {
              lt.postMessage(null);
            }));
        } else
          Ue = function () {
            U(qe, 0);
          };
        function $e(L) {
          ((z = L), N || ((N = !0), Ue()));
        }
        function F(L, K) {
          A = U(function () {
            L(c.unstable_now());
          }, K);
        }
        ((c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (L) {
            L.callback = null;
          }),
          (c.unstable_continueExecution = function () {
            b || $ || ((b = !0), $e(J));
          }),
          (c.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Oe = 0 < L ? Math.floor(1e3 / L) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (c.unstable_getFirstCallbackNode = function () {
            return s(p);
          }),
          (c.unstable_next = function (L) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = T;
            }
            var D = T;
            T = K;
            try {
              return L();
            } finally {
              T = D;
            }
          }),
          (c.unstable_pauseExecution = function () {}),
          (c.unstable_requestPaint = function () {}),
          (c.unstable_runWithPriority = function (L, K) {
            switch (L) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                L = 3;
            }
            var D = T;
            T = L;
            try {
              return K();
            } finally {
              T = D;
            }
          }),
          (c.unstable_scheduleCallback = function (L, K, D) {
            var h = c.unstable_now();
            switch (
              (typeof D == 'object' && D !== null
                ? ((D = D.delay), (D = typeof D == 'number' && 0 < D ? h + D : h))
                : (D = h),
              L)
            ) {
              case 1:
                var P = -1;
                break;
              case 2:
                P = 250;
                break;
              case 5:
                P = 1073741823;
                break;
              case 4:
                P = 1e4;
                break;
              default:
                P = 5e3;
            }
            return (
              (P = D + P),
              (L = {
                id: _++,
                callback: K,
                priorityLevel: L,
                startTime: D,
                expirationTime: P,
                sortIndex: -1,
              }),
              D > h
                ? ((L.sortIndex = D),
                  a(v, L),
                  s(p) === null && L === s(v) && (V ? (q(A), (A = -1)) : (V = !0), F(Y, D - h)))
                : ((L.sortIndex = P), a(p, L), b || $ || ((b = !0), $e(J))),
              L
            );
          }),
          (c.unstable_shouldYield = Et),
          (c.unstable_wrapCallback = function (L) {
            var K = T;
            return function () {
              var D = T;
              T = K;
              try {
                return L.apply(this, arguments);
              } finally {
                T = D;
              }
            };
          }));
      })(Ji)),
    Ji
  );
}
var ac;
function zf() {
  return (ac || ((ac = 1), (Zi.exports = If())), Zi.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cc;
function Mf() {
  if (cc) return nt;
  cc = 1;
  var c = is(),
    a = zf();
  function s(e) {
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
  var k = new Set(),
    C = {};
  function x(e, t) {
    (j(e, t), j(e + 'Capture', t));
  }
  function j(e, t) {
    for (C[e] = t, e = 0; e < t.length; e++) k.add(t[e]);
  }
  var E = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    p = Object.prototype.hasOwnProperty,
    v =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    _ = {},
    S = {};
  function T(e) {
    return p.call(S, e) ? !0 : p.call(_, e) ? !1 : v.test(e) ? (S[e] = !0) : ((_[e] = !0), !1);
  }
  function $(e, t, n, r) {
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
  function b(e, t, n, r) {
    if (t === null || typeof t > 'u' || $(e, t, n, r)) return !0;
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
  function V(e, t, n, r, l, o, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i));
  }
  var U = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      U[e] = new V(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      U[t] = new V(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      U[e] = new V(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        U[e] = new V(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        U[e] = new V(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      U[e] = new V(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      U[e] = new V(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      U[e] = new V(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      U[e] = new V(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var q = /[\-:]([a-z])/g;
  function le(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(q, le);
      U[t] = new V(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(q, le);
        U[t] = new V(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(q, le);
      U[t] = new V(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      U[e] = new V(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (U.xlinkHref = new V('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      U[e] = new V(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function ne(e, t, n, r) {
    var l = U.hasOwnProperty(t) ? U[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (b(t, n, l, r) && (n = null),
      r || l === null
        ? T(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
  var Y = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    J = Symbol.for('react.element'),
    N = Symbol.for('react.portal'),
    z = Symbol.for('react.fragment'),
    A = Symbol.for('react.strict_mode'),
    Oe = Symbol.for('react.profiler'),
    fe = Symbol.for('react.provider'),
    Et = Symbol.for('react.context'),
    qe = Symbol.for('react.forward_ref'),
    Ue = Symbol.for('react.suspense'),
    Xe = Symbol.for('react.suspense_list'),
    lt = Symbol.for('react.memo'),
    $e = Symbol.for('react.lazy'),
    F = Symbol.for('react.offscreen'),
    L = Symbol.iterator;
  function K(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (L && e[L]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var D = Object.assign,
    h;
  function P(e) {
    if (h === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        h = (t && t[1]) || '';
      }
    return (
      `
` +
      h +
      e
    );
  }
  var re = !1;
  function ie(e, t) {
    if (!e || re) return '';
    re = !0;
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
                  var f =
                    `
` + l[i].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      f.includes('<anonymous>') &&
                      (f = f.replace('<anonymous>', e.displayName)),
                    f
                  );
                }
              while (1 <= i && 0 <= u);
            break;
          }
      }
    } finally {
      ((re = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? P(e) : '';
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return P(e.type);
      case 16:
        return P('Lazy');
      case 13:
        return P('Suspense');
      case 19:
        return P('SuspenseList');
      case 0:
      case 2:
      case 15:
        return ((e = ie(e.type, !1)), e);
      case 11:
        return ((e = ie(e.type.render, !1)), e);
      case 1:
        return ((e = ie(e.type, !0)), e);
      default:
        return '';
    }
  }
  function ae(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case z:
        return 'Fragment';
      case N:
        return 'Portal';
      case Oe:
        return 'Profiler';
      case A:
        return 'StrictMode';
      case Ue:
        return 'Suspense';
      case Xe:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Et:
          return (e.displayName || 'Context') + '.Consumer';
        case fe:
          return (e._context.displayName || 'Context') + '.Provider';
        case qe:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case lt:
          return ((t = e.displayName || null), t !== null ? t : ae(e.type) || 'Memo');
        case $e:
          ((t = e._payload), (e = e._init));
          try {
            return ae(e(t));
          } catch {}
      }
    return null;
  }
  function ve(e) {
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
        return ae(t);
      case 8:
        return t === A ? 'StrictMode' : 'Mode';
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
  function pe(e) {
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
  function _e(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function ot(e) {
    var t = _e(e) ? 'checked' : 'value',
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
  function Mr(e) {
    e._valueTracker || (e._valueTracker = ot(e));
  }
  function cs(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = _e(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Dr(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function eo(e, t) {
    var n = t.checked;
    return D({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function ds(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = pe(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      }));
  }
  function fs(e, t) {
    ((t = t.checked), t != null && ne(e, 'checked', t, !1));
  }
  function to(e, t) {
    fs(e, t);
    var n = pe(t.value),
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
      : t.hasOwnProperty('defaultValue') && no(e, t.type, pe(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function ps(e, t, n) {
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
    (t !== 'number' || Dr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var qn = Array.isArray;
  function kn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + pe(n), t = null, l = 0; l < e.length; l++) {
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
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return D({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function ms(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(s(92));
        if (qn(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: pe(n) };
  }
  function hs(e, t) {
    var n = pe(t.value),
      r = pe(t.defaultValue);
    (n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r));
  }
  function vs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function ys(e) {
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
      ? ys(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var Fr,
    gs = (function (e) {
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
          Fr = Fr || document.createElement('div'),
            Fr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = Fr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Kn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Yn = {
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
    Oc = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Yn).forEach(function (e) {
    Oc.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yn[t] = Yn[e]));
    });
  });
  function ws(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (Yn.hasOwnProperty(e) && Yn[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function _s(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = ws(n, t[n], r);
        (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Ic = D(
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
      if (Ic[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(s(62));
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
  var so = null;
  function uo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ao = null,
    xn = null,
    En = null;
  function Ss(e) {
    if ((e = yr(e))) {
      if (typeof ao != 'function') throw Error(s(280));
      var t = e.stateNode;
      t && ((t = il(t)), ao(e.stateNode, e.type, t));
    }
  }
  function ks(e) {
    xn ? (En ? En.push(e) : (En = [e])) : (xn = e);
  }
  function xs() {
    if (xn) {
      var e = xn,
        t = En;
      if (((En = xn = null), Ss(e), t)) for (e = 0; e < t.length; e++) Ss(t[e]);
    }
  }
  function Es(e, t) {
    return e(t);
  }
  function Cs() {}
  var co = !1;
  function Ns(e, t, n) {
    if (co) return e(t, n);
    co = !0;
    try {
      return Es(e, t, n);
    } finally {
      ((co = !1), (xn !== null || En !== null) && (Cs(), xs()));
    }
  }
  function Xn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = il(n);
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
    if (n && typeof n != 'function') throw Error(s(231, t, typeof n));
    return n;
  }
  var fo = !1;
  if (E)
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
  function zc(e, t, n, r, l, o, i, u, f) {
    var w = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, w);
    } catch (O) {
      this.onError(O);
    }
  }
  var Jn = !1,
    Ar = null,
    Br = !1,
    po = null,
    Mc = {
      onError: function (e) {
        ((Jn = !0), (Ar = e));
      },
    };
  function Dc(e, t, n, r, l, o, i, u, f) {
    ((Jn = !1), (Ar = null), zc.apply(Mc, arguments));
  }
  function Fc(e, t, n, r, l, o, i, u, f) {
    if ((Dc.apply(this, arguments), Jn)) {
      if (Jn) {
        var w = Ar;
        ((Jn = !1), (Ar = null));
      } else throw Error(s(198));
      Br || ((Br = !0), (po = w));
    }
  }
  function sn(e) {
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
  function js(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Ts(e) {
    if (sn(e) !== e) throw Error(s(188));
  }
  function Ac(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = sn(e)), t === null)) throw Error(s(188));
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
          if (o === n) return (Ts(l), e);
          if (o === r) return (Ts(l), t);
          o = o.sibling;
        }
        throw Error(s(188));
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
          if (!i) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ls(e) {
    return ((e = Ac(e)), e !== null ? Ps(e) : null);
  }
  function Ps(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ps(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Rs = a.unstable_scheduleCallback,
    Os = a.unstable_cancelCallback,
    Bc = a.unstable_shouldYield,
    Uc = a.unstable_requestPaint,
    Ne = a.unstable_now,
    $c = a.unstable_getCurrentPriorityLevel,
    mo = a.unstable_ImmediatePriority,
    Is = a.unstable_UserBlockingPriority,
    Ur = a.unstable_NormalPriority,
    Qc = a.unstable_LowPriority,
    zs = a.unstable_IdlePriority,
    $r = null,
    Ct = null;
  function Hc(e) {
    if (Ct && typeof Ct.onCommitFiberRoot == 'function')
      try {
        Ct.onCommitFiberRoot($r, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var yt = Math.clz32 ? Math.clz32 : Gc,
    Vc = Math.log,
    Wc = Math.LN2;
  function Gc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Vc(e) / Wc) | 0)) | 0);
  }
  var Qr = 64,
    Hr = 4194304;
  function bn(e) {
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
  function Vr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? (r = bn(u)) : ((o &= i), o !== 0 && (r = bn(o)));
    } else ((i = n & ~l), i !== 0 ? (r = bn(i)) : o !== 0 && (r = bn(o)));
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
        ((n = 31 - yt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function qc(e, t) {
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
  function Kc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes;
      0 < o;
    ) {
      var i = 31 - yt(o),
        u = 1 << i,
        f = l[i];
      (f === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[i] = qc(u, t))
        : f <= t && (e.expiredLanes |= u),
        (o &= ~u));
    }
  }
  function ho(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Ms() {
    var e = Qr;
    return ((Qr <<= 1), (Qr & 4194240) === 0 && (Qr = 64), e);
  }
  function vo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function er(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - yt(t)),
      (e[t] = n));
  }
  function Yc(e, t) {
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
      var l = 31 - yt(n),
        o = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o));
    }
  }
  function yo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - yt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var me = 0;
  function Ds(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Fs,
    go,
    As,
    Bs,
    Us,
    wo = !1,
    Wr = [],
    Ut = null,
    $t = null,
    Qt = null,
    tr = new Map(),
    nr = new Map(),
    Ht = [],
    Xc =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function $s(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Ut = null;
        break;
      case 'dragenter':
      case 'dragleave':
        $t = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Qt = null;
        break;
      case 'pointerover':
      case 'pointerout':
        tr.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        nr.delete(t.pointerId);
    }
  }
  function rr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = yr(t)), t !== null && go(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Zc(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return ((Ut = rr(Ut, e, t, n, r, l)), !0);
      case 'dragenter':
        return (($t = rr($t, e, t, n, r, l)), !0);
      case 'mouseover':
        return ((Qt = rr(Qt, e, t, n, r, l)), !0);
      case 'pointerover':
        var o = l.pointerId;
        return (tr.set(o, rr(tr.get(o) || null, e, t, n, r, l)), !0);
      case 'gotpointercapture':
        return ((o = l.pointerId), nr.set(o, rr(nr.get(o) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function Qs(e) {
    var t = un(e.target);
    if (t !== null) {
      var n = sn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = js(n)), t !== null)) {
            ((e.blockedOn = t),
              Us(e.priority, function () {
                As(n);
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
  function Gr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = So(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((so = r), n.target.dispatchEvent(r), (so = null));
      } else return ((t = yr(n)), t !== null && go(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Hs(e, t, n) {
    Gr(e) && n.delete(t);
  }
  function Jc() {
    ((wo = !1),
      Ut !== null && Gr(Ut) && (Ut = null),
      $t !== null && Gr($t) && ($t = null),
      Qt !== null && Gr(Qt) && (Qt = null),
      tr.forEach(Hs),
      nr.forEach(Hs));
  }
  function lr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      wo || ((wo = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, Jc)));
  }
  function or(e) {
    function t(l) {
      return lr(l, e);
    }
    if (0 < Wr.length) {
      lr(Wr[0], e);
      for (var n = 1; n < Wr.length; n++) {
        var r = Wr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Ut !== null && lr(Ut, e),
        $t !== null && lr($t, e),
        Qt !== null && lr(Qt, e),
        tr.forEach(t),
        nr.forEach(t),
        n = 0;
      n < Ht.length;
      n++
    )
      ((r = Ht[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Ht.length && ((n = Ht[0]), n.blockedOn === null); )
      (Qs(n), n.blockedOn === null && Ht.shift());
  }
  var Cn = Y.ReactCurrentBatchConfig,
    qr = !0;
  function bc(e, t, n, r) {
    var l = me,
      o = Cn.transition;
    Cn.transition = null;
    try {
      ((me = 1), _o(e, t, n, r));
    } finally {
      ((me = l), (Cn.transition = o));
    }
  }
  function ed(e, t, n, r) {
    var l = me,
      o = Cn.transition;
    Cn.transition = null;
    try {
      ((me = 4), _o(e, t, n, r));
    } finally {
      ((me = l), (Cn.transition = o));
    }
  }
  function _o(e, t, n, r) {
    if (qr) {
      var l = So(e, t, n, r);
      if (l === null) (Ao(e, t, r, Kr, n), $s(e, r));
      else if (Zc(l, e, t, n, r)) r.stopPropagation();
      else if (($s(e, r), t & 4 && -1 < Xc.indexOf(e))) {
        for (; l !== null; ) {
          var o = yr(l);
          if (
            (o !== null && Fs(o), (o = So(e, t, n, r)), o === null && Ao(e, t, r, Kr, n), o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Ao(e, t, r, null, n);
    }
  }
  var Kr = null;
  function So(e, t, n, r) {
    if (((Kr = null), (e = uo(r)), (e = un(e)), e !== null))
      if (((t = sn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = js(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Kr = e), null);
  }
  function Vs(e) {
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
        switch ($c()) {
          case mo:
            return 1;
          case Is:
            return 4;
          case Ur:
          case Qc:
            return 16;
          case zs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Vt = null,
    ko = null,
    Yr = null;
  function Ws() {
    if (Yr) return Yr;
    var e,
      t = ko,
      n = t.length,
      r,
      l = 'value' in Vt ? Vt.value : Vt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (Yr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Xr(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Zr() {
    return !0;
  }
  function Gs() {
    return !1;
  }
  function it(e) {
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
          ? Zr
          : Gs),
        (this.isPropagationStopped = Gs),
        this
      );
    }
    return (
      D(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = Zr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Zr));
        },
        persist: function () {},
        isPersistent: Zr,
      }),
      t
    );
  }
  var Nn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    xo = it(Nn),
    ir = D({}, Nn, { view: 0, detail: 0 }),
    td = it(ir),
    Eo,
    Co,
    sr,
    Jr = D({}, ir, {
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
                ? ((Eo = e.screenX - sr.screenX), (Co = e.screenY - sr.screenY))
                : (Co = Eo = 0),
              (sr = e)),
            Eo);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Co;
      },
    }),
    qs = it(Jr),
    nd = D({}, Jr, { dataTransfer: 0 }),
    rd = it(nd),
    ld = D({}, ir, { relatedTarget: 0 }),
    No = it(ld),
    od = D({}, Nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    id = it(od),
    sd = D({}, Nn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ud = it(sd),
    ad = D({}, Nn, { data: 0 }),
    Ks = it(ad),
    cd = {
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
    dd = {
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
    fd = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function pd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = fd[e]) ? !!t[e] : !1;
  }
  function jo() {
    return pd;
  }
  var md = D({}, ir, {
      key: function (e) {
        if (e.key) {
          var t = cd[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Xr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? dd[e.keyCode] || 'Unidentified'
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
        return e.type === 'keypress' ? Xr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Xr(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    hd = it(md),
    vd = D({}, Jr, {
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
    Ys = it(vd),
    yd = D({}, ir, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: jo,
    }),
    gd = it(yd),
    wd = D({}, Nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _d = it(wd),
    Sd = D({}, Jr, {
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
    kd = it(Sd),
    xd = [9, 13, 27, 32],
    To = E && 'CompositionEvent' in window,
    ur = null;
  E && 'documentMode' in document && (ur = document.documentMode);
  var Ed = E && 'TextEvent' in window && !ur,
    Xs = E && (!To || (ur && 8 < ur && 11 >= ur)),
    Zs = ' ',
    Js = !1;
  function bs(e, t) {
    switch (e) {
      case 'keyup':
        return xd.indexOf(t.keyCode) !== -1;
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
  function eu(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var jn = !1;
  function Cd(e, t) {
    switch (e) {
      case 'compositionend':
        return eu(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Js = !0), Zs);
      case 'textInput':
        return ((e = t.data), e === Zs && Js ? null : e);
      default:
        return null;
    }
  }
  function Nd(e, t) {
    if (jn)
      return e === 'compositionend' || (!To && bs(e, t))
        ? ((e = Ws()), (Yr = ko = Vt = null), (jn = !1), e)
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
        return Xs && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var jd = {
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
  function tu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!jd[e.type] : t === 'textarea';
  }
  function nu(e, t, n, r) {
    (ks(r),
      (t = rl(t, 'onChange')),
      0 < t.length &&
        ((n = new xo('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
  }
  var ar = null,
    cr = null;
  function Td(e) {
    _u(e, 0);
  }
  function br(e) {
    var t = On(e);
    if (cs(t)) return e;
  }
  function Ld(e, t) {
    if (e === 'change') return t;
  }
  var ru = !1;
  if (E) {
    var Lo;
    if (E) {
      var Po = 'oninput' in document;
      if (!Po) {
        var lu = document.createElement('div');
        (lu.setAttribute('oninput', 'return;'), (Po = typeof lu.oninput == 'function'));
      }
      Lo = Po;
    } else Lo = !1;
    ru = Lo && (!document.documentMode || 9 < document.documentMode);
  }
  function ou() {
    ar && (ar.detachEvent('onpropertychange', iu), (cr = ar = null));
  }
  function iu(e) {
    if (e.propertyName === 'value' && br(cr)) {
      var t = [];
      (nu(t, cr, e, uo(e)), Ns(Td, t));
    }
  }
  function Pd(e, t, n) {
    e === 'focusin'
      ? (ou(), (ar = t), (cr = n), ar.attachEvent('onpropertychange', iu))
      : e === 'focusout' && ou();
  }
  function Rd(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return br(cr);
  }
  function Od(e, t) {
    if (e === 'click') return br(t);
  }
  function Id(e, t) {
    if (e === 'input' || e === 'change') return br(t);
  }
  function zd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var gt = typeof Object.is == 'function' ? Object.is : zd;
  function dr(e, t) {
    if (gt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!p.call(t, l) || !gt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function su(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function uu(e, t) {
    var n = su(e);
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
      n = su(n);
    }
  }
  function au(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? au(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function cu() {
    for (var e = window, t = Dr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Dr(e.document);
    }
    return t;
  }
  function Ro(e) {
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
  function Md(e) {
    var t = cu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && au(n.ownerDocument.documentElement, n)) {
      if (r !== null && Ro(n)) {
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
            (l = uu(n, o)));
          var i = uu(n, r);
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
  var Dd = E && 'documentMode' in document && 11 >= document.documentMode,
    Tn = null,
    Oo = null,
    fr = null,
    Io = !1;
  function du(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Io ||
      Tn == null ||
      Tn !== Dr(r) ||
      ((r = Tn),
      'selectionStart' in r && Ro(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (fr && dr(fr, r)) ||
        ((fr = r),
        (r = rl(Oo, 'onSelect')),
        0 < r.length &&
          ((t = new xo('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Tn))));
  }
  function el(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var Ln = {
      animationend: el('Animation', 'AnimationEnd'),
      animationiteration: el('Animation', 'AnimationIteration'),
      animationstart: el('Animation', 'AnimationStart'),
      transitionend: el('Transition', 'TransitionEnd'),
    },
    zo = {},
    fu = {};
  E &&
    ((fu = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Ln.animationend.animation,
      delete Ln.animationiteration.animation,
      delete Ln.animationstart.animation),
    'TransitionEvent' in window || delete Ln.transitionend.transition);
  function tl(e) {
    if (zo[e]) return zo[e];
    if (!Ln[e]) return e;
    var t = Ln[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in fu) return (zo[e] = t[n]);
    return e;
  }
  var pu = tl('animationend'),
    mu = tl('animationiteration'),
    hu = tl('animationstart'),
    vu = tl('transitionend'),
    yu = new Map(),
    gu =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Wt(e, t) {
    (yu.set(e, t), x(t, [e]));
  }
  for (var Mo = 0; Mo < gu.length; Mo++) {
    var Do = gu[Mo],
      Fd = Do.toLowerCase(),
      Ad = Do[0].toUpperCase() + Do.slice(1);
    Wt(Fd, 'on' + Ad);
  }
  (Wt(pu, 'onAnimationEnd'),
    Wt(mu, 'onAnimationIteration'),
    Wt(hu, 'onAnimationStart'),
    Wt('dblclick', 'onDoubleClick'),
    Wt('focusin', 'onFocus'),
    Wt('focusout', 'onBlur'),
    Wt(vu, 'onTransitionEnd'),
    j('onMouseEnter', ['mouseout', 'mouseover']),
    j('onMouseLeave', ['mouseout', 'mouseover']),
    j('onPointerEnter', ['pointerout', 'pointerover']),
    j('onPointerLeave', ['pointerout', 'pointerover']),
    x('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    x(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    x('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    x('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    x(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    x(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var pr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Bd = new Set('cancel close invalid load scroll toggle'.split(' ').concat(pr));
  function wu(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n), Fc(r, t, void 0, e), (e.currentTarget = null));
  }
  function _u(e, t) {
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
              f = u.instance,
              w = u.currentTarget;
            if (((u = u.listener), f !== o && l.isPropagationStopped())) break e;
            (wu(l, u, w), (o = f));
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((u = r[i]),
              (f = u.instance),
              (w = u.currentTarget),
              (u = u.listener),
              f !== o && l.isPropagationStopped())
            )
              break e;
            (wu(l, u, w), (o = f));
          }
      }
    }
    if (Br) throw ((e = po), (Br = !1), (po = null), e);
  }
  function ge(e, t) {
    var n = t[Vo];
    n === void 0 && (n = t[Vo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Su(t, e, 2, !1), n.add(r));
  }
  function Fo(e, t, n) {
    var r = 0;
    (t && (r |= 4), Su(n, e, r, t));
  }
  var nl = '_reactListening' + Math.random().toString(36).slice(2);
  function mr(e) {
    if (!e[nl]) {
      ((e[nl] = !0),
        k.forEach(function (n) {
          n !== 'selectionchange' && (Bd.has(n) || Fo(n, !1, e), Fo(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[nl] || ((t[nl] = !0), Fo('selectionchange', !1, t));
    }
  }
  function Su(e, t, n, r) {
    switch (Vs(t)) {
      case 1:
        var l = bc;
        break;
      case 4:
        l = ed;
        break;
      default:
        l = _o;
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
              var f = i.tag;
              if (
                (f === 3 || f === 4) &&
                ((f = i.stateNode.containerInfo),
                f === l || (f.nodeType === 8 && f.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (((i = un(u)), i === null)) return;
            if (((f = i.tag), f === 5 || f === 6)) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    Ns(function () {
      var w = o,
        O = uo(n),
        I = [];
      e: {
        var R = yu.get(e);
        if (R !== void 0) {
          var B = xo,
            H = e;
          switch (e) {
            case 'keypress':
              if (Xr(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              B = hd;
              break;
            case 'focusin':
              ((H = 'focus'), (B = No));
              break;
            case 'focusout':
              ((H = 'blur'), (B = No));
              break;
            case 'beforeblur':
            case 'afterblur':
              B = No;
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
              B = qs;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              B = rd;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              B = gd;
              break;
            case pu:
            case mu:
            case hu:
              B = id;
              break;
            case vu:
              B = _d;
              break;
            case 'scroll':
              B = td;
              break;
            case 'wheel':
              B = kd;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              B = ud;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              B = Ys;
          }
          var W = (t & 4) !== 0,
            je = !W && e === 'scroll',
            y = W ? (R !== null ? R + 'Capture' : null) : R;
          W = [];
          for (var m = w, g; m !== null; ) {
            g = m;
            var M = g.stateNode;
            if (
              (g.tag === 5 &&
                M !== null &&
                ((g = M), y !== null && ((M = Xn(m, y)), M != null && W.push(hr(m, M, g)))),
              je)
            )
              break;
            m = m.return;
          }
          0 < W.length && ((R = new B(R, H, null, n, O)), I.push({ event: R, listeners: W }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((R = e === 'mouseover' || e === 'pointerover'),
            (B = e === 'mouseout' || e === 'pointerout'),
            R && n !== so && (H = n.relatedTarget || n.fromElement) && (un(H) || H[Pt]))
          )
            break e;
          if (
            (B || R) &&
            ((R =
              O.window === O
                ? O
                : (R = O.ownerDocument)
                  ? R.defaultView || R.parentWindow
                  : window),
            B
              ? ((H = n.relatedTarget || n.toElement),
                (B = w),
                (H = H ? un(H) : null),
                H !== null &&
                  ((je = sn(H)), H !== je || (H.tag !== 5 && H.tag !== 6)) &&
                  (H = null))
              : ((B = null), (H = w)),
            B !== H)
          ) {
            if (
              ((W = qs),
              (M = 'onMouseLeave'),
              (y = 'onMouseEnter'),
              (m = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((W = Ys), (M = 'onPointerLeave'), (y = 'onPointerEnter'), (m = 'pointer')),
              (je = B == null ? R : On(B)),
              (g = H == null ? R : On(H)),
              (R = new W(M, m + 'leave', B, n, O)),
              (R.target = je),
              (R.relatedTarget = g),
              (M = null),
              un(O) === w &&
                ((W = new W(y, m + 'enter', H, n, O)),
                (W.target = g),
                (W.relatedTarget = je),
                (M = W)),
              (je = M),
              B && H)
            )
              t: {
                for (W = B, y = H, m = 0, g = W; g; g = Pn(g)) m++;
                for (g = 0, M = y; M; M = Pn(M)) g++;
                for (; 0 < m - g; ) ((W = Pn(W)), m--);
                for (; 0 < g - m; ) ((y = Pn(y)), g--);
                for (; m--; ) {
                  if (W === y || (y !== null && W === y.alternate)) break t;
                  ((W = Pn(W)), (y = Pn(y)));
                }
                W = null;
              }
            else W = null;
            (B !== null && ku(I, R, B, W, !1), H !== null && je !== null && ku(I, je, H, W, !0));
          }
        }
        e: {
          if (
            ((R = w ? On(w) : window),
            (B = R.nodeName && R.nodeName.toLowerCase()),
            B === 'select' || (B === 'input' && R.type === 'file'))
          )
            var G = Ld;
          else if (tu(R))
            if (ru) G = Id;
            else {
              G = Rd;
              var X = Pd;
            }
          else
            (B = R.nodeName) &&
              B.toLowerCase() === 'input' &&
              (R.type === 'checkbox' || R.type === 'radio') &&
              (G = Od);
          if (G && (G = G(e, w))) {
            nu(I, G, n, O);
            break e;
          }
          (X && X(e, R, w),
            e === 'focusout' &&
              (X = R._wrapperState) &&
              X.controlled &&
              R.type === 'number' &&
              no(R, 'number', R.value));
        }
        switch (((X = w ? On(w) : window), e)) {
          case 'focusin':
            (tu(X) || X.contentEditable === 'true') && ((Tn = X), (Oo = w), (fr = null));
            break;
          case 'focusout':
            fr = Oo = Tn = null;
            break;
          case 'mousedown':
            Io = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Io = !1), du(I, n, O));
            break;
          case 'selectionchange':
            if (Dd) break;
          case 'keydown':
          case 'keyup':
            du(I, n, O);
        }
        var Z;
        if (To)
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
          jn
            ? bs(e, n) && (te = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (te = 'onCompositionStart');
        (te &&
          (Xs &&
            n.locale !== 'ko' &&
            (jn || te !== 'onCompositionStart'
              ? te === 'onCompositionEnd' && jn && (Z = Ws())
              : ((Vt = O), (ko = 'value' in Vt ? Vt.value : Vt.textContent), (jn = !0))),
          (X = rl(w, te)),
          0 < X.length &&
            ((te = new Ks(te, e, null, n, O)),
            I.push({ event: te, listeners: X }),
            Z ? (te.data = Z) : ((Z = eu(n)), Z !== null && (te.data = Z)))),
          (Z = Ed ? Cd(e, n) : Nd(e, n)) &&
            ((w = rl(w, 'onBeforeInput')),
            0 < w.length &&
              ((O = new Ks('onBeforeInput', 'beforeinput', null, n, O)),
              I.push({ event: O, listeners: w }),
              (O.data = Z))));
      }
      _u(I, t);
    });
  }
  function hr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function rl(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      (l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Xn(e, n)),
        o != null && r.unshift(hr(e, o, l)),
        (o = Xn(e, t)),
        o != null && r.push(hr(e, o, l))),
        (e = e.return));
    }
    return r;
  }
  function Pn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ku(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n,
        f = u.alternate,
        w = u.stateNode;
      if (f !== null && f === r) break;
      (u.tag === 5 &&
        w !== null &&
        ((u = w),
        l
          ? ((f = Xn(n, o)), f != null && i.unshift(hr(n, f, u)))
          : l || ((f = Xn(n, o)), f != null && i.push(hr(n, f, u)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Ud = /\r\n?/g,
    $d = /\u0000|\uFFFD/g;
  function xu(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Ud,
        `
`
      )
      .replace($d, '');
  }
  function ll(e, t, n) {
    if (((t = xu(t)), xu(e) !== t && n)) throw Error(s(425));
  }
  function ol() {}
  var Bo = null,
    Uo = null;
  function $o(e, t) {
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
  var Qo = typeof setTimeout == 'function' ? setTimeout : void 0,
    Qd = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Eu = typeof Promise == 'function' ? Promise : void 0,
    Hd =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Eu < 'u'
          ? function (e) {
              return Eu.resolve(null).then(e).catch(Vd);
            }
          : Qo;
  function Vd(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ho(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$')) {
          if (r === 0) {
            (e.removeChild(l), or(t));
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = l;
    } while (n);
    or(t);
  }
  function Gt(e) {
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
  function Cu(e) {
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
  var Rn = Math.random().toString(36).slice(2),
    Nt = '__reactFiber$' + Rn,
    vr = '__reactProps$' + Rn,
    Pt = '__reactContainer$' + Rn,
    Vo = '__reactEvents$' + Rn,
    Wd = '__reactListeners$' + Rn,
    Gd = '__reactHandles$' + Rn;
  function un(e) {
    var t = e[Nt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Pt] || n[Nt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Cu(e); e !== null; ) {
            if ((n = e[Nt])) return n;
            e = Cu(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function yr(e) {
    return (
      (e = e[Nt] || e[Pt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function On(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function il(e) {
    return e[vr] || null;
  }
  var Wo = [],
    In = -1;
  function qt(e) {
    return { current: e };
  }
  function we(e) {
    0 > In || ((e.current = Wo[In]), (Wo[In] = null), In--);
  }
  function ye(e, t) {
    (In++, (Wo[In] = e.current), (e.current = t));
  }
  var Kt = {},
    Qe = qt(Kt),
    Ze = qt(!1),
    an = Kt;
  function zn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Kt;
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
  function Je(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function sl() {
    (we(Ze), we(Qe));
  }
  function Nu(e, t, n) {
    if (Qe.current !== Kt) throw Error(s(168));
    (ye(Qe, t), ye(Ze, n));
  }
  function ju(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(s(108, ve(e) || 'Unknown', l));
    return D({}, n, r);
  }
  function ul(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Kt),
      (an = Qe.current),
      ye(Qe, e),
      ye(Ze, Ze.current),
      !0
    );
  }
  function Tu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    (n
      ? ((e = ju(e, t, an)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        we(Ze),
        we(Qe),
        ye(Qe, e))
      : we(Ze),
      ye(Ze, n));
  }
  var Rt = null,
    al = !1,
    Go = !1;
  function Lu(e) {
    Rt === null ? (Rt = [e]) : Rt.push(e);
  }
  function qd(e) {
    ((al = !0), Lu(e));
  }
  function Yt() {
    if (!Go && Rt !== null) {
      Go = !0;
      var e = 0,
        t = me;
      try {
        var n = Rt;
        for (me = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Rt = null), (al = !1));
      } catch (l) {
        throw (Rt !== null && (Rt = Rt.slice(e + 1)), Rs(mo, Yt), l);
      } finally {
        ((me = t), (Go = !1));
      }
    }
    return null;
  }
  var Mn = [],
    Dn = 0,
    cl = null,
    dl = 0,
    ct = [],
    dt = 0,
    cn = null,
    Ot = 1,
    It = '';
  function dn(e, t) {
    ((Mn[Dn++] = dl), (Mn[Dn++] = cl), (cl = e), (dl = t));
  }
  function Pu(e, t, n) {
    ((ct[dt++] = Ot), (ct[dt++] = It), (ct[dt++] = cn), (cn = e));
    var r = Ot;
    e = It;
    var l = 32 - yt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var o = 32 - yt(t) + l;
    if (30 < o) {
      var i = l - (l % 5);
      ((o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (Ot = (1 << (32 - yt(t) + l)) | (n << l) | r),
        (It = o + e));
    } else ((Ot = (1 << o) | (n << l) | r), (It = e));
  }
  function qo(e) {
    e.return !== null && (dn(e, 1), Pu(e, 1, 0));
  }
  function Ko(e) {
    for (; e === cl; ) ((cl = Mn[--Dn]), (Mn[Dn] = null), (dl = Mn[--Dn]), (Mn[Dn] = null));
    for (; e === cn; )
      ((cn = ct[--dt]),
        (ct[dt] = null),
        (It = ct[--dt]),
        (ct[dt] = null),
        (Ot = ct[--dt]),
        (ct[dt] = null));
  }
  var st = null,
    ut = null,
    Se = !1,
    wt = null;
  function Ru(e, t) {
    var n = ht(5, null, null, 0);
    ((n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Ou(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (st = e), (ut = Gt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (st = e), (ut = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = cn !== null ? { id: Ot, overflow: It } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = ht(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (st = e),
              (ut = null),
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
    if (Se) {
      var t = ut;
      if (t) {
        var n = t;
        if (!Ou(e, t)) {
          if (Yo(e)) throw Error(s(418));
          t = Gt(n.nextSibling);
          var r = st;
          t && Ou(e, t) ? Ru(r, n) : ((e.flags = (e.flags & -4097) | 2), (Se = !1), (st = e));
        }
      } else {
        if (Yo(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (Se = !1), (st = e));
      }
    }
  }
  function Iu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    st = e;
  }
  function fl(e) {
    if (e !== st) return !1;
    if (!Se) return (Iu(e), (Se = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !$o(e.type, e.memoizedProps))),
      t && (t = ut))
    ) {
      if (Yo(e)) throw (zu(), Error(s(418)));
      for (; t; ) (Ru(e, t), (t = Gt(t.nextSibling)));
    }
    if ((Iu(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                ut = Gt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        ut = null;
      }
    } else ut = st ? Gt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function zu() {
    for (var e = ut; e; ) e = Gt(e.nextSibling);
  }
  function Fn() {
    ((ut = st = null), (Se = !1));
  }
  function Zo(e) {
    wt === null ? (wt = [e]) : wt.push(e);
  }
  var Kd = Y.ReactCurrentBatchConfig;
  function gr(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
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
      if (typeof e != 'string') throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function pl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        s(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      )
    );
  }
  function Mu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Du(e) {
    function t(y, m) {
      if (e) {
        var g = y.deletions;
        g === null ? ((y.deletions = [m]), (y.flags |= 16)) : g.push(m);
      }
    }
    function n(y, m) {
      if (!e) return null;
      for (; m !== null; ) (t(y, m), (m = m.sibling));
      return null;
    }
    function r(y, m) {
      for (y = new Map(); m !== null; )
        (m.key !== null ? y.set(m.key, m) : y.set(m.index, m), (m = m.sibling));
      return y;
    }
    function l(y, m) {
      return ((y = rn(y, m)), (y.index = 0), (y.sibling = null), y);
    }
    function o(y, m, g) {
      return (
        (y.index = g),
        e
          ? ((g = y.alternate),
            g !== null ? ((g = g.index), g < m ? ((y.flags |= 2), m) : g) : ((y.flags |= 2), m))
          : ((y.flags |= 1048576), m)
      );
    }
    function i(y) {
      return (e && y.alternate === null && (y.flags |= 2), y);
    }
    function u(y, m, g, M) {
      return m === null || m.tag !== 6
        ? ((m = Qi(g, y.mode, M)), (m.return = y), m)
        : ((m = l(m, g)), (m.return = y), m);
    }
    function f(y, m, g, M) {
      var G = g.type;
      return G === z
        ? O(y, m, g.props.children, M, g.key)
        : m !== null &&
            (m.elementType === G ||
              (typeof G == 'object' && G !== null && G.$$typeof === $e && Mu(G) === m.type))
          ? ((M = l(m, g.props)), (M.ref = gr(y, m, g)), (M.return = y), M)
          : ((M = Fl(g.type, g.key, g.props, null, y.mode, M)),
            (M.ref = gr(y, m, g)),
            (M.return = y),
            M);
    }
    function w(y, m, g, M) {
      return m === null ||
        m.tag !== 4 ||
        m.stateNode.containerInfo !== g.containerInfo ||
        m.stateNode.implementation !== g.implementation
        ? ((m = Hi(g, y.mode, M)), (m.return = y), m)
        : ((m = l(m, g.children || [])), (m.return = y), m);
    }
    function O(y, m, g, M, G) {
      return m === null || m.tag !== 7
        ? ((m = wn(g, y.mode, M, G)), (m.return = y), m)
        : ((m = l(m, g)), (m.return = y), m);
    }
    function I(y, m, g) {
      if ((typeof m == 'string' && m !== '') || typeof m == 'number')
        return ((m = Qi('' + m, y.mode, g)), (m.return = y), m);
      if (typeof m == 'object' && m !== null) {
        switch (m.$$typeof) {
          case J:
            return (
              (g = Fl(m.type, m.key, m.props, null, y.mode, g)),
              (g.ref = gr(y, null, m)),
              (g.return = y),
              g
            );
          case N:
            return ((m = Hi(m, y.mode, g)), (m.return = y), m);
          case $e:
            var M = m._init;
            return I(y, M(m._payload), g);
        }
        if (qn(m) || K(m)) return ((m = wn(m, y.mode, g, null)), (m.return = y), m);
        pl(y, m);
      }
      return null;
    }
    function R(y, m, g, M) {
      var G = m !== null ? m.key : null;
      if ((typeof g == 'string' && g !== '') || typeof g == 'number')
        return G !== null ? null : u(y, m, '' + g, M);
      if (typeof g == 'object' && g !== null) {
        switch (g.$$typeof) {
          case J:
            return g.key === G ? f(y, m, g, M) : null;
          case N:
            return g.key === G ? w(y, m, g, M) : null;
          case $e:
            return ((G = g._init), R(y, m, G(g._payload), M));
        }
        if (qn(g) || K(g)) return G !== null ? null : O(y, m, g, M, null);
        pl(y, g);
      }
      return null;
    }
    function B(y, m, g, M, G) {
      if ((typeof M == 'string' && M !== '') || typeof M == 'number')
        return ((y = y.get(g) || null), u(m, y, '' + M, G));
      if (typeof M == 'object' && M !== null) {
        switch (M.$$typeof) {
          case J:
            return ((y = y.get(M.key === null ? g : M.key) || null), f(m, y, M, G));
          case N:
            return ((y = y.get(M.key === null ? g : M.key) || null), w(m, y, M, G));
          case $e:
            var X = M._init;
            return B(y, m, g, X(M._payload), G);
        }
        if (qn(M) || K(M)) return ((y = y.get(g) || null), O(m, y, M, G, null));
        pl(m, M);
      }
      return null;
    }
    function H(y, m, g, M) {
      for (
        var G = null, X = null, Z = m, te = (m = 0), Me = null;
        Z !== null && te < g.length;
        te++
      ) {
        Z.index > te ? ((Me = Z), (Z = null)) : (Me = Z.sibling);
        var ce = R(y, Z, g[te], M);
        if (ce === null) {
          Z === null && (Z = Me);
          break;
        }
        (e && Z && ce.alternate === null && t(y, Z),
          (m = o(ce, m, te)),
          X === null ? (G = ce) : (X.sibling = ce),
          (X = ce),
          (Z = Me));
      }
      if (te === g.length) return (n(y, Z), Se && dn(y, te), G);
      if (Z === null) {
        for (; te < g.length; te++)
          ((Z = I(y, g[te], M)),
            Z !== null && ((m = o(Z, m, te)), X === null ? (G = Z) : (X.sibling = Z), (X = Z)));
        return (Se && dn(y, te), G);
      }
      for (Z = r(y, Z); te < g.length; te++)
        ((Me = B(Z, y, te, g[te], M)),
          Me !== null &&
            (e && Me.alternate !== null && Z.delete(Me.key === null ? te : Me.key),
            (m = o(Me, m, te)),
            X === null ? (G = Me) : (X.sibling = Me),
            (X = Me)));
      return (
        e &&
          Z.forEach(function (ln) {
            return t(y, ln);
          }),
        Se && dn(y, te),
        G
      );
    }
    function W(y, m, g, M) {
      var G = K(g);
      if (typeof G != 'function') throw Error(s(150));
      if (((g = G.call(g)), g == null)) throw Error(s(151));
      for (
        var X = (G = null), Z = m, te = (m = 0), Me = null, ce = g.next();
        Z !== null && !ce.done;
        te++, ce = g.next()
      ) {
        Z.index > te ? ((Me = Z), (Z = null)) : (Me = Z.sibling);
        var ln = R(y, Z, ce.value, M);
        if (ln === null) {
          Z === null && (Z = Me);
          break;
        }
        (e && Z && ln.alternate === null && t(y, Z),
          (m = o(ln, m, te)),
          X === null ? (G = ln) : (X.sibling = ln),
          (X = ln),
          (Z = Me));
      }
      if (ce.done) return (n(y, Z), Se && dn(y, te), G);
      if (Z === null) {
        for (; !ce.done; te++, ce = g.next())
          ((ce = I(y, ce.value, M)),
            ce !== null &&
              ((m = o(ce, m, te)), X === null ? (G = ce) : (X.sibling = ce), (X = ce)));
        return (Se && dn(y, te), G);
      }
      for (Z = r(y, Z); !ce.done; te++, ce = g.next())
        ((ce = B(Z, y, te, ce.value, M)),
          ce !== null &&
            (e && ce.alternate !== null && Z.delete(ce.key === null ? te : ce.key),
            (m = o(ce, m, te)),
            X === null ? (G = ce) : (X.sibling = ce),
            (X = ce)));
      return (
        e &&
          Z.forEach(function (Tf) {
            return t(y, Tf);
          }),
        Se && dn(y, te),
        G
      );
    }
    function je(y, m, g, M) {
      if (
        (typeof g == 'object' &&
          g !== null &&
          g.type === z &&
          g.key === null &&
          (g = g.props.children),
        typeof g == 'object' && g !== null)
      ) {
        switch (g.$$typeof) {
          case J:
            e: {
              for (var G = g.key, X = m; X !== null; ) {
                if (X.key === G) {
                  if (((G = g.type), G === z)) {
                    if (X.tag === 7) {
                      (n(y, X.sibling), (m = l(X, g.props.children)), (m.return = y), (y = m));
                      break e;
                    }
                  } else if (
                    X.elementType === G ||
                    (typeof G == 'object' && G !== null && G.$$typeof === $e && Mu(G) === X.type)
                  ) {
                    (n(y, X.sibling),
                      (m = l(X, g.props)),
                      (m.ref = gr(y, X, g)),
                      (m.return = y),
                      (y = m));
                    break e;
                  }
                  n(y, X);
                  break;
                } else t(y, X);
                X = X.sibling;
              }
              g.type === z
                ? ((m = wn(g.props.children, y.mode, M, g.key)), (m.return = y), (y = m))
                : ((M = Fl(g.type, g.key, g.props, null, y.mode, M)),
                  (M.ref = gr(y, m, g)),
                  (M.return = y),
                  (y = M));
            }
            return i(y);
          case N:
            e: {
              for (X = g.key; m !== null; ) {
                if (m.key === X)
                  if (
                    m.tag === 4 &&
                    m.stateNode.containerInfo === g.containerInfo &&
                    m.stateNode.implementation === g.implementation
                  ) {
                    (n(y, m.sibling), (m = l(m, g.children || [])), (m.return = y), (y = m));
                    break e;
                  } else {
                    n(y, m);
                    break;
                  }
                else t(y, m);
                m = m.sibling;
              }
              ((m = Hi(g, y.mode, M)), (m.return = y), (y = m));
            }
            return i(y);
          case $e:
            return ((X = g._init), je(y, m, X(g._payload), M));
        }
        if (qn(g)) return H(y, m, g, M);
        if (K(g)) return W(y, m, g, M);
        pl(y, g);
      }
      return (typeof g == 'string' && g !== '') || typeof g == 'number'
        ? ((g = '' + g),
          m !== null && m.tag === 6
            ? (n(y, m.sibling), (m = l(m, g)), (m.return = y), (y = m))
            : (n(y, m), (m = Qi(g, y.mode, M)), (m.return = y), (y = m)),
          i(y))
        : n(y, m);
    }
    return je;
  }
  var An = Du(!0),
    Fu = Du(!1),
    ml = qt(null),
    hl = null,
    Bn = null,
    Jo = null;
  function bo() {
    Jo = Bn = hl = null;
  }
  function ei(e) {
    var t = ml.current;
    (we(ml), (e._currentValue = t));
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
  function Un(e, t) {
    ((hl = e),
      (Jo = Bn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (be = !0), (e.firstContext = null)));
  }
  function ft(e) {
    var t = e._currentValue;
    if (Jo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Bn === null)) {
        if (hl === null) throw Error(s(308));
        ((Bn = e), (hl.dependencies = { lanes: 0, firstContext: e }));
      } else Bn = Bn.next = e;
    return t;
  }
  var fn = null;
  function ni(e) {
    fn === null ? (fn = [e]) : fn.push(e);
  }
  function Au(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), ni(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      zt(e, r)
    );
  }
  function zt(e, t) {
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
  var Xt = !1;
  function ri(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Bu(e, t) {
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
  function Mt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Zt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (se & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        zt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), ni(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      zt(e, n)
    );
  }
  function vl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), yo(e, n));
    }
  }
  function Uu(e, t) {
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
  function yl(e, t, n, r) {
    var l = e.updateQueue;
    Xt = !1;
    var o = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var f = u,
        w = f.next;
      ((f.next = null), i === null ? (o = w) : (i.next = w), (i = f));
      var O = e.alternate;
      O !== null &&
        ((O = O.updateQueue),
        (u = O.lastBaseUpdate),
        u !== i && (u === null ? (O.firstBaseUpdate = w) : (u.next = w), (O.lastBaseUpdate = f)));
    }
    if (o !== null) {
      var I = l.baseState;
      ((i = 0), (O = w = f = null), (u = o));
      do {
        var R = u.lane,
          B = u.eventTime;
        if ((r & R) === R) {
          O !== null &&
            (O = O.next =
              {
                eventTime: B,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var H = e,
              W = u;
            switch (((R = t), (B = n), W.tag)) {
              case 1:
                if (((H = W.payload), typeof H == 'function')) {
                  I = H.call(B, I, R);
                  break e;
                }
                I = H;
                break e;
              case 3:
                H.flags = (H.flags & -65537) | 128;
              case 0:
                if (
                  ((H = W.payload), (R = typeof H == 'function' ? H.call(B, I, R) : H), R == null)
                )
                  break e;
                I = D({}, I, R);
                break e;
              case 2:
                Xt = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64), (R = l.effects), R === null ? (l.effects = [u]) : R.push(u));
        } else
          ((B = {
            eventTime: B,
            lane: R,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            O === null ? ((w = O = B), (f = I)) : (O = O.next = B),
            (i |= R));
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          ((R = u),
            (u = R.next),
            (R.next = null),
            (l.lastBaseUpdate = R),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (O === null && (f = I),
        (l.baseState = f),
        (l.firstBaseUpdate = w),
        (l.lastBaseUpdate = O),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((i |= l.lane), (l = l.next));
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      ((hn |= i), (e.lanes = i), (e.memoizedState = I));
    }
  }
  function $u(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != 'function')) throw Error(s(191, l));
          l.call(r);
        }
      }
  }
  var wr = {},
    jt = qt(wr),
    _r = qt(wr),
    Sr = qt(wr);
  function pn(e) {
    if (e === wr) throw Error(s(174));
    return e;
  }
  function li(e, t) {
    switch ((ye(Sr, t), ye(_r, e), ye(jt, wr), (e = t.nodeType), e)) {
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
    (we(jt), ye(jt, t));
  }
  function $n() {
    (we(jt), we(_r), we(Sr));
  }
  function Qu(e) {
    pn(Sr.current);
    var t = pn(jt.current),
      n = lo(t, e.type);
    t !== n && (ye(_r, e), ye(jt, n));
  }
  function oi(e) {
    _r.current === e && (we(jt), we(_r));
  }
  var ke = qt(0);
  function gl(e) {
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
  function si() {
    for (var e = 0; e < ii.length; e++) ii[e]._workInProgressVersionPrimary = null;
    ii.length = 0;
  }
  var wl = Y.ReactCurrentDispatcher,
    ui = Y.ReactCurrentBatchConfig,
    mn = 0,
    xe = null,
    Le = null,
    Ie = null,
    _l = !1,
    kr = !1,
    xr = 0,
    Yd = 0;
  function He() {
    throw Error(s(321));
  }
  function ai(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!gt(e[n], t[n])) return !1;
    return !0;
  }
  function ci(e, t, n, r, l, o) {
    if (
      ((mn = o),
      (xe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (wl.current = e === null || e.memoizedState === null ? bd : ef),
      (e = n(r, l)),
      kr)
    ) {
      o = 0;
      do {
        if (((kr = !1), (xr = 0), 25 <= o)) throw Error(s(301));
        ((o += 1), (Ie = Le = null), (t.updateQueue = null), (wl.current = tf), (e = n(r, l)));
      } while (kr);
    }
    if (
      ((wl.current = xl),
      (t = Le !== null && Le.next !== null),
      (mn = 0),
      (Ie = Le = xe = null),
      (_l = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function di() {
    var e = xr !== 0;
    return ((xr = 0), e);
  }
  function Tt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Ie === null ? (xe.memoizedState = Ie = e) : (Ie = Ie.next = e), Ie);
  }
  function pt() {
    if (Le === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = Ie === null ? xe.memoizedState : Ie.next;
    if (t !== null) ((Ie = t), (Le = e));
    else {
      if (e === null) throw Error(s(310));
      ((Le = e),
        (e = {
          memoizedState: Le.memoizedState,
          baseState: Le.baseState,
          baseQueue: Le.baseQueue,
          queue: Le.queue,
          next: null,
        }),
        Ie === null ? (xe.memoizedState = Ie = e) : (Ie = Ie.next = e));
    }
    return Ie;
  }
  function Er(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function fi(e) {
    var t = pt(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Le,
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
        f = null,
        w = o;
      do {
        var O = w.lane;
        if ((mn & O) === O)
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
            lane: O,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null,
          };
          (f === null ? ((u = f = I), (i = r)) : (f = f.next = I), (xe.lanes |= O), (hn |= O));
        }
        w = w.next;
      } while (w !== null && w !== o);
      (f === null ? (i = r) : (f.next = u),
        gt(r, t.memoizedState) || (be = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = f),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((o = l.lane), (xe.lanes |= o), (hn |= o), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function pi(e) {
    var t = pt(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = (l = l.next);
      do ((o = e(o, i.action)), (i = i.next));
      while (i !== l);
      (gt(o, t.memoizedState) || (be = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, r];
  }
  function Hu() {}
  function Vu(e, t) {
    var n = xe,
      r = pt(),
      l = t(),
      o = !gt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (be = !0)),
      (r = r.queue),
      mi(qu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Ie !== null && Ie.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Cr(9, Gu.bind(null, n, r, l, t), void 0, null), ze === null))
        throw Error(s(349));
      (mn & 30) !== 0 || Wu(n, t, l);
    }
    return l;
  }
  function Wu(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = xe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (xe.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Gu(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Ku(t) && Yu(e));
  }
  function qu(e, t, n) {
    return n(function () {
      Ku(t) && Yu(e);
    });
  }
  function Ku(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !gt(e, n);
    } catch {
      return !0;
    }
  }
  function Yu(e) {
    var t = zt(e, 1);
    t !== null && xt(t, e, 1, -1);
  }
  function Xu(e) {
    var t = Tt();
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
      (e = e.dispatch = Jd.bind(null, xe, e)),
      [t.memoizedState, e]
    );
  }
  function Cr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = xe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (xe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Zu() {
    return pt().memoizedState;
  }
  function Sl(e, t, n, r) {
    var l = Tt();
    ((xe.flags |= e), (l.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function kl(e, t, n, r) {
    var l = pt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Le !== null) {
      var i = Le.memoizedState;
      if (((o = i.destroy), r !== null && ai(r, i.deps))) {
        l.memoizedState = Cr(t, n, o, r);
        return;
      }
    }
    ((xe.flags |= e), (l.memoizedState = Cr(1 | t, n, o, r)));
  }
  function Ju(e, t) {
    return Sl(8390656, 8, e, t);
  }
  function mi(e, t) {
    return kl(2048, 8, e, t);
  }
  function bu(e, t) {
    return kl(4, 2, e, t);
  }
  function ea(e, t) {
    return kl(4, 4, e, t);
  }
  function ta(e, t) {
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
  function na(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), kl(4, 4, ta.bind(null, t, e), n));
  }
  function hi() {}
  function ra(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ai(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function la(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ai(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function oa(e, t, n) {
    return (mn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (be = !0)), (e.memoizedState = n))
      : (gt(n, t) || ((n = Ms()), (xe.lanes |= n), (hn |= n), (e.baseState = !0)), t);
  }
  function Xd(e, t) {
    var n = me;
    ((me = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = ui.transition;
    ui.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((me = n), (ui.transition = r));
    }
  }
  function ia() {
    return pt().memoizedState;
  }
  function Zd(e, t, n) {
    var r = tn(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), sa(e)))
      ua(t, n);
    else if (((n = Au(e, t, n, r)), n !== null)) {
      var l = Ye();
      (xt(n, e, r, l), aa(n, t, r));
    }
  }
  function Jd(e, t, n) {
    var r = tn(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (sa(e)) ua(t, l);
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
          if (((l.hasEagerState = !0), (l.eagerState = u), gt(u, i))) {
            var f = t.interleaved;
            (f === null ? ((l.next = l), ni(t)) : ((l.next = f.next), (f.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Au(e, t, l, r)), n !== null && ((l = Ye()), xt(n, e, r, l), aa(n, t, r)));
    }
  }
  function sa(e) {
    var t = e.alternate;
    return e === xe || (t !== null && t === xe);
  }
  function ua(e, t) {
    kr = _l = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function aa(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), yo(e, n));
    }
  }
  var xl = {
      readContext: ft,
      useCallback: He,
      useContext: He,
      useEffect: He,
      useImperativeHandle: He,
      useInsertionEffect: He,
      useLayoutEffect: He,
      useMemo: He,
      useReducer: He,
      useRef: He,
      useState: He,
      useDebugValue: He,
      useDeferredValue: He,
      useTransition: He,
      useMutableSource: He,
      useSyncExternalStore: He,
      useId: He,
      unstable_isNewReconciler: !1,
    },
    bd = {
      readContext: ft,
      useCallback: function (e, t) {
        return ((Tt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ft,
      useEffect: Ju,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), Sl(4194308, 4, ta.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Sl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Sl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Tt();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var r = Tt();
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
          (e = e.dispatch = Zd.bind(null, xe, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Tt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Xu,
      useDebugValue: hi,
      useDeferredValue: function (e) {
        return (Tt().memoizedState = e);
      },
      useTransition: function () {
        var e = Xu(!1),
          t = e[0];
        return ((e = Xd.bind(null, e[1])), (Tt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = xe,
          l = Tt();
        if (Se) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), ze === null)) throw Error(s(349));
          (mn & 30) !== 0 || Wu(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Ju(qu.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Cr(9, Gu.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Tt(),
          t = ze.identifierPrefix;
        if (Se) {
          var n = It,
            r = Ot;
          ((n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = xr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':'));
        } else ((n = Yd++), (t = ':' + t + 'r' + n.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    ef = {
      readContext: ft,
      useCallback: ra,
      useContext: ft,
      useEffect: mi,
      useImperativeHandle: na,
      useInsertionEffect: bu,
      useLayoutEffect: ea,
      useMemo: la,
      useReducer: fi,
      useRef: Zu,
      useState: function () {
        return fi(Er);
      },
      useDebugValue: hi,
      useDeferredValue: function (e) {
        var t = pt();
        return oa(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = fi(Er)[0],
          t = pt().memoizedState;
        return [e, t];
      },
      useMutableSource: Hu,
      useSyncExternalStore: Vu,
      useId: ia,
      unstable_isNewReconciler: !1,
    },
    tf = {
      readContext: ft,
      useCallback: ra,
      useContext: ft,
      useEffect: mi,
      useImperativeHandle: na,
      useInsertionEffect: bu,
      useLayoutEffect: ea,
      useMemo: la,
      useReducer: pi,
      useRef: Zu,
      useState: function () {
        return pi(Er);
      },
      useDebugValue: hi,
      useDeferredValue: function (e) {
        var t = pt();
        return Le === null ? (t.memoizedState = e) : oa(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = pi(Er)[0],
          t = pt().memoizedState;
        return [e, t];
      },
      useMutableSource: Hu,
      useSyncExternalStore: Vu,
      useId: ia,
      unstable_isNewReconciler: !1,
    };
  function _t(e, t) {
    if (e && e.defaultProps) {
      ((t = D({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function vi(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : D({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var El = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? sn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        l = tn(e),
        o = Mt(r, l);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = Zt(e, o, l)),
        t !== null && (xt(t, e, l, r), vl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        l = tn(e),
        o = Mt(r, l);
      ((o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Zt(e, o, l)),
        t !== null && (xt(t, e, l, r), vl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ye(),
        r = tn(e),
        l = Mt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Zt(e, l, r)),
        t !== null && (xt(t, e, r, n), vl(t, e, r)));
    },
  };
  function ca(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !dr(n, r) || !dr(l, o)
          : !0
    );
  }
  function da(e, t, n) {
    var r = !1,
      l = Kt,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = ft(o))
        : ((l = Je(t) ? an : Qe.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? zn(e, l) : Kt)),
      (t = new t(n, o)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = El),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function fa(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && El.enqueueReplaceState(t, t.state, null));
  }
  function yi(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), ri(e));
    var o = t.contextType;
    (typeof o == 'object' && o !== null
      ? (l.context = ft(o))
      : ((o = Je(t) ? an : Qe.current), (l.context = zn(e, o))),
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
        t !== l.state && El.enqueueReplaceState(l, l.state, null),
        yl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function Qn(e, t) {
    try {
      var n = '',
        r = t;
      do ((n += ue(r)), (r = r.return));
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
  function wi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var nf = typeof WeakMap == 'function' ? WeakMap : Map;
  function pa(e, t, n) {
    ((n = Mt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Rl || ((Rl = !0), (zi = r)), wi(e, t));
      }),
      n
    );
  }
  function ma(e, t, n) {
    ((n = Mt(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          wi(e, t);
        }));
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == 'function' &&
        (n.callback = function () {
          (wi(e, t),
            typeof r != 'function' && (bt === null ? (bt = new Set([this])) : bt.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' });
        }),
      n
    );
  }
  function ha(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new nf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = yf.bind(null, e, t, n)), t.then(e, e));
  }
  function va(e) {
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
  function ya(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = Mt(-1, 1)), (t.tag = 2), Zt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var rf = Y.ReactCurrentOwner,
    be = !1;
  function Ke(e, t, n, r) {
    t.child = e === null ? Fu(t, null, n, r) : An(t, e.child, n, r);
  }
  function ga(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Un(t, l),
      (r = ci(e, t, n, r, o, l)),
      (n = di()),
      e !== null && !be
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Dt(e, t, l))
        : (Se && n && qo(t), (t.flags |= 1), Ke(e, t, r, l), t.child)
    );
  }
  function wa(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' &&
        !$i(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), _a(e, t, o, r, l))
        : ((e = Fl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var i = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : dr), n(i, r) && e.ref === t.ref))
        return Dt(e, t, l);
    }
    return ((t.flags |= 1), (e = rn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function _a(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (dr(o, r) && e.ref === t.ref)
        if (((be = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (be = !0);
        else return ((t.lanes = e.lanes), Dt(e, t, l));
    }
    return _i(e, t, n, r, l);
  }
  function Sa(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          ye(Vn, at),
          (at |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            ye(Vn, at),
            (at |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = o !== null ? o.baseLanes : n),
          ye(Vn, at),
          (at |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ye(Vn, at),
        (at |= r));
    return (Ke(e, t, l, n), t.child);
  }
  function ka(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function _i(e, t, n, r, l) {
    var o = Je(n) ? an : Qe.current;
    return (
      (o = zn(t, o)),
      Un(t, l),
      (n = ci(e, t, n, r, o, l)),
      (r = di()),
      e !== null && !be
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Dt(e, t, l))
        : (Se && r && qo(t), (t.flags |= 1), Ke(e, t, n, l), t.child)
    );
  }
  function xa(e, t, n, r, l) {
    if (Je(n)) {
      var o = !0;
      ul(t);
    } else o = !1;
    if ((Un(t, l), t.stateNode === null)) (Nl(e, t), da(t, n, r), yi(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        u = t.memoizedProps;
      i.props = u;
      var f = i.context,
        w = n.contextType;
      typeof w == 'object' && w !== null
        ? (w = ft(w))
        : ((w = Je(n) ? an : Qe.current), (w = zn(t, w)));
      var O = n.getDerivedStateFromProps,
        I = typeof O == 'function' || typeof i.getSnapshotBeforeUpdate == 'function';
      (I ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== r || f !== w) && fa(t, i, r, w)),
        (Xt = !1));
      var R = t.memoizedState;
      ((i.state = R),
        yl(t, r, i, l),
        (f = t.memoizedState),
        u !== r || R !== f || Ze.current || Xt
          ? (typeof O == 'function' && (vi(t, n, O, r), (f = t.memoizedState)),
            (u = Xt || ca(t, n, u, r, R, f, w))
              ? (I ||
                  (typeof i.UNSAFE_componentWillMount != 'function' &&
                    typeof i.componentWillMount != 'function') ||
                  (typeof i.componentWillMount == 'function' && i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == 'function' &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = f)),
            (i.props = r),
            (i.state = f),
            (i.context = w),
            (r = u))
          : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1)));
    } else {
      ((i = t.stateNode),
        Bu(e, t),
        (u = t.memoizedProps),
        (w = t.type === t.elementType ? u : _t(t.type, u)),
        (i.props = w),
        (I = t.pendingProps),
        (R = i.context),
        (f = n.contextType),
        typeof f == 'object' && f !== null
          ? (f = ft(f))
          : ((f = Je(n) ? an : Qe.current), (f = zn(t, f))));
      var B = n.getDerivedStateFromProps;
      ((O = typeof B == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== I || R !== f) && fa(t, i, r, f)),
        (Xt = !1),
        (R = t.memoizedState),
        (i.state = R),
        yl(t, r, i, l));
      var H = t.memoizedState;
      u !== I || R !== H || Ze.current || Xt
        ? (typeof B == 'function' && (vi(t, n, B, r), (H = t.memoizedState)),
          (w = Xt || ca(t, n, w, r, R, H, f) || !1)
            ? (O ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                  typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(r, H, f),
                typeof i.UNSAFE_componentWillUpdate == 'function' &&
                  i.UNSAFE_componentWillUpdate(r, H, f)),
              typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (u === e.memoizedProps && R === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (u === e.memoizedProps && R === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = H)),
          (i.props = r),
          (i.state = H),
          (i.context = f),
          (r = w))
        : (typeof i.componentDidUpdate != 'function' ||
            (u === e.memoizedProps && R === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != 'function' ||
            (u === e.memoizedProps && R === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Si(e, t, n, r, o, l);
  }
  function Si(e, t, n, r, l, o) {
    ka(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && Tu(t, n, !1), Dt(e, t, o));
    ((r = t.stateNode), (rf.current = t));
    var u = i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = An(t, e.child, null, o)), (t.child = An(t, null, u, o)))
        : Ke(e, t, u, o),
      (t.memoizedState = r.state),
      l && Tu(t, n, !0),
      t.child
    );
  }
  function Ea(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Nu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Nu(e, t.context, !1),
      li(e, t.containerInfo));
  }
  function Ca(e, t, n, r, l) {
    return (Fn(), Zo(l), (t.flags |= 256), Ke(e, t, n, r), t.child);
  }
  var ki = { dehydrated: null, treeContext: null, retryLane: 0 };
  function xi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Na(e, t, n) {
    var r = t.pendingProps,
      l = ke.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      ye(ke, l & 1),
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
                  : (o = Al(i, r, 0, null)),
                (e = wn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = xi(n)),
                (t.memoizedState = ki),
                e)
              : Ei(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return lf(e, t, i, r, u, l, n);
    if (o) {
      ((o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling));
      var f = { mode: 'hidden', children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = f), (t.deletions = null))
          : ((r = rn(l, f)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (o = rn(u, o)) : ((o = wn(o, i, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? xi(n)
            : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
        (o.memoizedState = i),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = ki),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = rn(o, { mode: 'visible', children: r.children })),
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
  function Ei(e, t) {
    return (
      (t = Al({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Cl(e, t, n, r) {
    return (
      r !== null && Zo(r),
      An(t, e.child, null, n),
      (e = Ei(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function lf(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = gi(Error(s(422)))), Cl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = Al({ mode: 'visible', children: r.children }, l, 0, null)),
            (o = wn(o, l, i, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && An(t, e.child, null, i),
            (t.child.memoizedState = xi(i)),
            (t.memoizedState = ki),
            o);
    if ((t.mode & 1) === 0) return Cl(e, t, i, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return ((r = u), (o = Error(s(419))), (r = gi(o, r, void 0)), Cl(e, t, i, r));
    }
    if (((u = (i & e.childLanes) !== 0), be || u)) {
      if (((r = ze), r !== null)) {
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
          l !== 0 && l !== o.retryLane && ((o.retryLane = l), zt(e, l), xt(r, e, l, -1)));
      }
      return (Ui(), (r = gi(Error(s(421)))), Cl(e, t, i, r));
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = gf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = o.treeContext),
        (ut = Gt(l.nextSibling)),
        (st = t),
        (Se = !0),
        (wt = null),
        e !== null &&
          ((ct[dt++] = Ot),
          (ct[dt++] = It),
          (ct[dt++] = cn),
          (Ot = e.id),
          (It = e.overflow),
          (cn = t)),
        (t = Ei(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function ja(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), ti(e.return, t, n));
  }
  function Ci(e, t, n, r, l) {
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
  function Ta(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Ke(e, t, r.children, n), (r = ke.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && ja(e, n, t);
          else if (e.tag === 19) ja(e, n, t);
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
    if ((ye(ke, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate), e !== null && gl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            Ci(t, !1, l, n, o));
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && gl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          Ci(t, !0, n, null, o);
          break;
        case 'together':
          Ci(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Nl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Dt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (hn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = rn(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function of(e, t, n) {
    switch (t.tag) {
      case 3:
        (Ea(t), Fn());
        break;
      case 5:
        Qu(t);
        break;
      case 1:
        Je(t.type) && ul(t);
        break;
      case 4:
        li(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (ye(ml, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ye(ke, ke.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Na(e, t, n)
              : (ye(ke, ke.current & 1), (e = Dt(e, t, n)), e !== null ? e.sibling : null);
        ye(ke, ke.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Ta(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ye(ke, ke.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Sa(e, t, n));
    }
    return Dt(e, t, n);
  }
  var La, Ni, Pa, Ra;
  ((La = function (e, t) {
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
    (Pa = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), pn(jt.current));
        var o = null;
        switch (n) {
          case 'input':
            ((l = eo(e, l)), (r = eo(e, r)), (o = []));
            break;
          case 'select':
            ((l = D({}, l, { value: void 0 })), (r = D({}, r, { value: void 0 })), (o = []));
            break;
          case 'textarea':
            ((l = ro(e, l)), (r = ro(e, r)), (o = []));
            break;
          default:
            typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = ol);
        }
        oo(n, r);
        var i;
        n = null;
        for (w in l)
          if (!r.hasOwnProperty(w) && l.hasOwnProperty(w) && l[w] != null)
            if (w === 'style') {
              var u = l[w];
              for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
            } else
              w !== 'dangerouslySetInnerHTML' &&
                w !== 'children' &&
                w !== 'suppressContentEditableWarning' &&
                w !== 'suppressHydrationWarning' &&
                w !== 'autoFocus' &&
                (C.hasOwnProperty(w) ? o || (o = []) : (o = o || []).push(w, null));
        for (w in r) {
          var f = r[w];
          if (
            ((u = l != null ? l[w] : void 0),
            r.hasOwnProperty(w) && f !== u && (f != null || u != null))
          )
            if (w === 'style')
              if (u) {
                for (i in u)
                  !u.hasOwnProperty(i) ||
                    (f && f.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ''));
                for (i in f) f.hasOwnProperty(i) && u[i] !== f[i] && (n || (n = {}), (n[i] = f[i]));
              } else (n || (o || (o = []), o.push(w, n)), (n = f));
            else
              w === 'dangerouslySetInnerHTML'
                ? ((f = f ? f.__html : void 0),
                  (u = u ? u.__html : void 0),
                  f != null && u !== f && (o = o || []).push(w, f))
                : w === 'children'
                  ? (typeof f != 'string' && typeof f != 'number') || (o = o || []).push(w, '' + f)
                  : w !== 'suppressContentEditableWarning' &&
                    w !== 'suppressHydrationWarning' &&
                    (C.hasOwnProperty(w)
                      ? (f != null && w === 'onScroll' && ge('scroll', e), o || u === f || (o = []))
                      : (o = o || []).push(w, f));
        }
        n && (o = o || []).push('style', n);
        var w = o;
        (t.updateQueue = w) && (t.flags |= 4);
      }
    }),
    (Ra = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function Nr(e, t) {
    if (!Se)
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
  function Ve(e) {
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
  function sf(e, t, n) {
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
        return (Ve(t), null);
      case 1:
        return (Je(t.type) && sl(), Ve(t), null);
      case 3:
        return (
          (r = t.stateNode),
          $n(),
          we(Ze),
          we(Qe),
          si(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (fl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), wt !== null && (Fi(wt), (wt = null)))),
          Ni(e, t),
          Ve(t),
          null
        );
      case 5:
        oi(t);
        var l = pn(Sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Pa(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return (Ve(t), null);
          }
          if (((e = pn(jt.current)), fl(t))) {
            ((r = t.stateNode), (n = t.type));
            var o = t.memoizedProps;
            switch (((r[Nt] = t), (r[vr] = o), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                (ge('cancel', r), ge('close', r));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ge('load', r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < pr.length; l++) ge(pr[l], r);
                break;
              case 'source':
                ge('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                (ge('error', r), ge('load', r));
                break;
              case 'details':
                ge('toggle', r);
                break;
              case 'input':
                (ds(r, o), ge('invalid', r));
                break;
              case 'select':
                ((r._wrapperState = { wasMultiple: !!o.multiple }), ge('invalid', r));
                break;
              case 'textarea':
                (ms(r, o), ge('invalid', r));
            }
            (oo(n, o), (l = null));
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var u = o[i];
                i === 'children'
                  ? typeof u == 'string'
                    ? r.textContent !== u &&
                      (o.suppressHydrationWarning !== !0 && ll(r.textContent, u, e),
                      (l = ['children', u]))
                    : typeof u == 'number' &&
                      r.textContent !== '' + u &&
                      (o.suppressHydrationWarning !== !0 && ll(r.textContent, u, e),
                      (l = ['children', '' + u]))
                  : C.hasOwnProperty(i) && u != null && i === 'onScroll' && ge('scroll', r);
              }
            switch (n) {
              case 'input':
                (Mr(r), ps(r, o, !0));
                break;
              case 'textarea':
                (Mr(r), vs(r));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof o.onClick == 'function' && (r.onclick = ol);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = ys(n)),
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
              (e[Nt] = t),
              (e[vr] = r),
              La(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = io(n, r)), n)) {
                case 'dialog':
                  (ge('cancel', e), ge('close', e), (l = r));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (ge('load', e), (l = r));
                  break;
                case 'video':
                case 'audio':
                  for (l = 0; l < pr.length; l++) ge(pr[l], e);
                  l = r;
                  break;
                case 'source':
                  (ge('error', e), (l = r));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (ge('error', e), ge('load', e), (l = r));
                  break;
                case 'details':
                  (ge('toggle', e), (l = r));
                  break;
                case 'input':
                  (ds(e, r), (l = eo(e, r)), ge('invalid', e));
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = D({}, r, { value: void 0 })),
                    ge('invalid', e));
                  break;
                case 'textarea':
                  (ms(e, r), (l = ro(e, r)), ge('invalid', e));
                  break;
                default:
                  l = r;
              }
              (oo(n, l), (u = l));
              for (o in u)
                if (u.hasOwnProperty(o)) {
                  var f = u[o];
                  o === 'style'
                    ? _s(e, f)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((f = f ? f.__html : void 0), f != null && gs(e, f))
                      : o === 'children'
                        ? typeof f == 'string'
                          ? (n !== 'textarea' || f !== '') && Kn(e, f)
                          : typeof f == 'number' && Kn(e, '' + f)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (C.hasOwnProperty(o)
                            ? f != null && o === 'onScroll' && ge('scroll', e)
                            : f != null && ne(e, o, f, i));
                }
              switch (n) {
                case 'input':
                  (Mr(e), ps(e, r, !1));
                  break;
                case 'textarea':
                  (Mr(e), vs(e));
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + pe(r.value));
                  break;
                case 'select':
                  ((e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? kn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null && kn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = ol);
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
        return (Ve(t), null);
      case 6:
        if (e && t.stateNode != null) Ra(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(s(166));
          if (((n = pn(Sr.current)), pn(jt.current), fl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Nt] = t),
              (o = r.nodeValue !== n) && ((e = st), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ll(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ll(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Nt] = t),
              (t.stateNode = r));
        }
        return (Ve(t), null);
      case 13:
        if (
          (we(ke),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Se && ut !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (zu(), Fn(), (t.flags |= 98560), (o = !1));
          else if (((o = fl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(s(317));
              o[Nt] = t;
            } else (Fn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ve(t), (o = !1));
          } else (wt !== null && (Fi(wt), (wt = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ke.current & 1) !== 0 ? Pe === 0 && (Pe = 3) : Ui())),
            t.updateQueue !== null && (t.flags |= 4),
            Ve(t),
            null);
      case 4:
        return ($n(), Ni(e, t), e === null && mr(t.stateNode.containerInfo), Ve(t), null);
      case 10:
        return (ei(t.type._context), Ve(t), null);
      case 17:
        return (Je(t.type) && sl(), Ve(t), null);
      case 19:
        if ((we(ke), (o = t.memoizedState), o === null)) return (Ve(t), null);
        if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) Nr(o, !1);
          else {
            if (Pe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = gl(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      Nr(o, !1),
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
                  return (ye(ke, (ke.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Ne() > Wn &&
              ((t.flags |= 128), (r = !0), Nr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = gl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Nr(o, !0),
                o.tail === null && o.tailMode === 'hidden' && !i.alternate && !Se)
              )
                return (Ve(t), null);
            } else
              2 * Ne() - o.renderingStartTime > Wn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Nr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = o.last), n !== null ? (n.sibling = i) : (t.child = i), (o.last = i));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Ne()),
            (t.sibling = null),
            (n = ke.current),
            ye(ke, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ve(t), null);
      case 22:
      case 23:
        return (
          Bi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (at & 1073741824) !== 0 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ve(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function uf(e, t) {
    switch ((Ko(t), t.tag)) {
      case 1:
        return (
          Je(t.type) && sl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          $n(),
          we(Ze),
          we(Qe),
          si(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (oi(t), null);
      case 13:
        if ((we(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          Fn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (we(ke), null);
      case 4:
        return ($n(), null);
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
  var jl = !1,
    We = !1,
    af = typeof WeakSet == 'function' ? WeakSet : Set,
    Q = null;
  function Hn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          Ce(e, t, r);
        }
      else n.current = null;
  }
  function ji(e, t, n) {
    try {
      n();
    } catch (r) {
      Ce(e, t, r);
    }
  }
  var Oa = !1;
  function cf(e, t) {
    if (((Bo = qr), (e = cu()), Ro(e))) {
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
              f = -1,
              w = 0,
              O = 0,
              I = e,
              R = null;
            t: for (;;) {
              for (
                var B;
                I !== n || (l !== 0 && I.nodeType !== 3) || (u = i + l),
                  I !== o || (r !== 0 && I.nodeType !== 3) || (f = i + r),
                  I.nodeType === 3 && (i += I.nodeValue.length),
                  (B = I.firstChild) !== null;
              )
                ((R = I), (I = B));
              for (;;) {
                if (I === e) break t;
                if (
                  (R === n && ++w === l && (u = i),
                  R === o && ++O === r && (f = i),
                  (B = I.nextSibling) !== null)
                )
                  break;
                ((I = R), (R = I.parentNode));
              }
              I = B;
            }
            n = u === -1 || f === -1 ? null : { start: u, end: f };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Uo = { focusedElem: e, selectionRange: n }, qr = !1, Q = t; Q !== null; )
      if (((t = Q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (Q = e));
      else
        for (; Q !== null; ) {
          t = Q;
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
                    var W = H.memoizedProps,
                      je = H.memoizedState,
                      y = t.stateNode,
                      m = y.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? W : _t(t.type, W),
                        je
                      );
                    y.__reactInternalSnapshotBeforeUpdate = m;
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
                  throw Error(s(163));
              }
          } catch (M) {
            Ce(t, t.return, M);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Q = e));
            break;
          }
          Q = t.return;
        }
    return ((H = Oa), (Oa = !1), H);
  }
  function jr(e, t, n) {
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
  function Tl(e, t) {
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
  function Ti(e) {
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
  function Ia(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Ia(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Nt], delete t[vr], delete t[Vo], delete t[Wd], delete t[Gd])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function za(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ma(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || za(e.return)) return null;
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
  function Li(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = ol)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Li(e, t, n), e = e.sibling; e !== null; ) (Li(e, t, n), (e = e.sibling));
  }
  function Pi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Pi(e, t, n), e = e.sibling; e !== null; ) (Pi(e, t, n), (e = e.sibling));
  }
  var Fe = null,
    St = !1;
  function Jt(e, t, n) {
    for (n = n.child; n !== null; ) (Da(e, t, n), (n = n.sibling));
  }
  function Da(e, t, n) {
    if (Ct && typeof Ct.onCommitFiberUnmount == 'function')
      try {
        Ct.onCommitFiberUnmount($r, n);
      } catch {}
    switch (n.tag) {
      case 5:
        We || Hn(n, t);
      case 6:
        var r = Fe,
          l = St;
        ((Fe = null),
          Jt(e, t, n),
          (Fe = r),
          (St = l),
          Fe !== null &&
            (St
              ? ((e = Fe),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : Fe.removeChild(n.stateNode)));
        break;
      case 18:
        Fe !== null &&
          (St
            ? ((e = Fe),
              (n = n.stateNode),
              e.nodeType === 8 ? Ho(e.parentNode, n) : e.nodeType === 1 && Ho(e, n),
              or(e))
            : Ho(Fe, n.stateNode));
        break;
      case 4:
        ((r = Fe),
          (l = St),
          (Fe = n.stateNode.containerInfo),
          (St = !0),
          Jt(e, t, n),
          (Fe = r),
          (St = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!We && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
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
        if (!We && (Hn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (u) {
            Ce(n, t, u);
          }
        Jt(e, t, n);
        break;
      case 21:
        Jt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((We = (r = We) || n.memoizedState !== null), Jt(e, t, n), (We = r))
          : Jt(e, t, n);
        break;
      default:
        Jt(e, t, n);
    }
  }
  function Fa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new af()),
        t.forEach(function (r) {
          var l = wf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function kt(e, t) {
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
                ((Fe = u.stateNode), (St = !1));
                break e;
              case 3:
                ((Fe = u.stateNode.containerInfo), (St = !0));
                break e;
              case 4:
                ((Fe = u.stateNode.containerInfo), (St = !0));
                break e;
            }
            u = u.return;
          }
          if (Fe === null) throw Error(s(160));
          (Da(o, i, l), (Fe = null), (St = !1));
          var f = l.alternate;
          (f !== null && (f.return = null), (l.return = null));
        } catch (w) {
          Ce(l, t, w);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Aa(t, e), (t = t.sibling));
  }
  function Aa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((kt(t, e), Lt(e), r & 4)) {
          try {
            (jr(3, e, e.return), Tl(3, e));
          } catch (W) {
            Ce(e, e.return, W);
          }
          try {
            jr(5, e, e.return);
          } catch (W) {
            Ce(e, e.return, W);
          }
        }
        break;
      case 1:
        (kt(t, e), Lt(e), r & 512 && n !== null && Hn(n, n.return));
        break;
      case 5:
        if ((kt(t, e), Lt(e), r & 512 && n !== null && Hn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Kn(l, '');
          } catch (W) {
            Ce(e, e.return, W);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = n !== null ? n.memoizedProps : o,
            u = e.type,
            f = e.updateQueue;
          if (((e.updateQueue = null), f !== null))
            try {
              (u === 'input' && o.type === 'radio' && o.name != null && fs(l, o), io(u, i));
              var w = io(u, o);
              for (i = 0; i < f.length; i += 2) {
                var O = f[i],
                  I = f[i + 1];
                O === 'style'
                  ? _s(l, I)
                  : O === 'dangerouslySetInnerHTML'
                    ? gs(l, I)
                    : O === 'children'
                      ? Kn(l, I)
                      : ne(l, O, I, w);
              }
              switch (u) {
                case 'input':
                  to(l, o);
                  break;
                case 'textarea':
                  hs(l, o);
                  break;
                case 'select':
                  var R = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var B = o.value;
                  B != null
                    ? kn(l, !!o.multiple, B, !1)
                    : R !== !!o.multiple &&
                      (o.defaultValue != null
                        ? kn(l, !!o.multiple, o.defaultValue, !0)
                        : kn(l, !!o.multiple, o.multiple ? [] : '', !1));
              }
              l[vr] = o;
            } catch (W) {
              Ce(e, e.return, W);
            }
        }
        break;
      case 6:
        if ((kt(t, e), Lt(e), r & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((l = e.stateNode), (o = e.memoizedProps));
          try {
            l.nodeValue = o;
          } catch (W) {
            Ce(e, e.return, W);
          }
        }
        break;
      case 3:
        if ((kt(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            or(t.containerInfo);
          } catch (W) {
            Ce(e, e.return, W);
          }
        break;
      case 4:
        (kt(t, e), Lt(e));
        break;
      case 13:
        (kt(t, e),
          Lt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (Ii = Ne())),
          r & 4 && Fa(e));
        break;
      case 22:
        if (
          ((O = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((We = (w = We) || O), kt(t, e), (We = w)) : kt(t, e),
          Lt(e),
          r & 8192)
        ) {
          if (
            ((w = e.memoizedState !== null), (e.stateNode.isHidden = w) && !O && (e.mode & 1) !== 0)
          )
            for (Q = e, O = e.child; O !== null; ) {
              for (I = Q = O; Q !== null; ) {
                switch (((R = Q), (B = R.child), R.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    jr(4, R, R.return);
                    break;
                  case 1:
                    Hn(R, R.return);
                    var H = R.stateNode;
                    if (typeof H.componentWillUnmount == 'function') {
                      ((r = R), (n = R.return));
                      try {
                        ((t = r),
                          (H.props = t.memoizedProps),
                          (H.state = t.memoizedState),
                          H.componentWillUnmount());
                      } catch (W) {
                        Ce(r, n, W);
                      }
                    }
                    break;
                  case 5:
                    Hn(R, R.return);
                    break;
                  case 22:
                    if (R.memoizedState !== null) {
                      $a(I);
                      continue;
                    }
                }
                B !== null ? ((B.return = R), (Q = B)) : $a(I);
              }
              O = O.sibling;
            }
          e: for (O = null, I = e; ; ) {
            if (I.tag === 5) {
              if (O === null) {
                O = I;
                try {
                  ((l = I.stateNode),
                    w
                      ? ((o = l.style),
                        typeof o.setProperty == 'function'
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none'))
                      : ((u = I.stateNode),
                        (f = I.memoizedProps.style),
                        (i = f != null && f.hasOwnProperty('display') ? f.display : null),
                        (u.style.display = ws('display', i))));
                } catch (W) {
                  Ce(e, e.return, W);
                }
              }
            } else if (I.tag === 6) {
              if (O === null)
                try {
                  I.stateNode.nodeValue = w ? '' : I.memoizedProps;
                } catch (W) {
                  Ce(e, e.return, W);
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
              (O === I && (O = null), (I = I.return));
            }
            (O === I && (O = null), (I.sibling.return = I.return), (I = I.sibling));
          }
        }
        break;
      case 19:
        (kt(t, e), Lt(e), r & 4 && Fa(e));
        break;
      case 21:
        break;
      default:
        (kt(t, e), Lt(e));
    }
  }
  function Lt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (za(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Kn(l, ''), (r.flags &= -33));
            var o = Ma(e);
            Pi(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              u = Ma(e);
            Li(e, u, i);
            break;
          default:
            throw Error(s(161));
        }
      } catch (f) {
        Ce(e, e.return, f);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function df(e, t, n) {
    ((Q = e), Ba(e));
  }
  function Ba(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Q !== null; ) {
      var l = Q,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || jl;
        if (!i) {
          var u = l.alternate,
            f = (u !== null && u.memoizedState !== null) || We;
          u = jl;
          var w = We;
          if (((jl = i), (We = f) && !w))
            for (Q = l; Q !== null; )
              ((i = Q),
                (f = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? Qa(l)
                  : f !== null
                    ? ((f.return = i), (Q = f))
                    : Qa(l));
          for (; o !== null; ) ((Q = o), Ba(o), (o = o.sibling));
          ((Q = l), (jl = u), (We = w));
        }
        Ua(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), (Q = o)) : Ua(e);
    }
  }
  function Ua(e) {
    for (; Q !== null; ) {
      var t = Q;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                We || Tl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !We)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : _t(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && $u(t, o, r);
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
                  $u(t, i, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
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
                    var O = w.memoizedState;
                    if (O !== null) {
                      var I = O.dehydrated;
                      I !== null && or(I);
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
                throw Error(s(163));
            }
          We || (t.flags & 512 && Ti(t));
        } catch (R) {
          Ce(t, t.return, R);
        }
      }
      if (t === e) {
        Q = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (Q = n));
        break;
      }
      Q = t.return;
    }
  }
  function $a(e) {
    for (; Q !== null; ) {
      var t = Q;
      if (t === e) {
        Q = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (Q = n));
        break;
      }
      Q = t.return;
    }
  }
  function Qa(e) {
    for (; Q !== null; ) {
      var t = Q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Tl(4, t);
            } catch (f) {
              Ce(t, n, f);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (f) {
                Ce(t, l, f);
              }
            }
            var o = t.return;
            try {
              Ti(t);
            } catch (f) {
              Ce(t, o, f);
            }
            break;
          case 5:
            var i = t.return;
            try {
              Ti(t);
            } catch (f) {
              Ce(t, i, f);
            }
        }
      } catch (f) {
        Ce(t, t.return, f);
      }
      if (t === e) {
        Q = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        ((u.return = t.return), (Q = u));
        break;
      }
      Q = t.return;
    }
  }
  var ff = Math.ceil,
    Ll = Y.ReactCurrentDispatcher,
    Ri = Y.ReactCurrentOwner,
    mt = Y.ReactCurrentBatchConfig,
    se = 0,
    ze = null,
    Te = null,
    Ae = 0,
    at = 0,
    Vn = qt(0),
    Pe = 0,
    Tr = null,
    hn = 0,
    Pl = 0,
    Oi = 0,
    Lr = null,
    et = null,
    Ii = 0,
    Wn = 1 / 0,
    Ft = null,
    Rl = !1,
    zi = null,
    bt = null,
    Ol = !1,
    en = null,
    Il = 0,
    Pr = 0,
    Mi = null,
    zl = -1,
    Ml = 0;
  function Ye() {
    return (se & 6) !== 0 ? Ne() : zl !== -1 ? zl : (zl = Ne());
  }
  function tn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (se & 2) !== 0 && Ae !== 0
        ? Ae & -Ae
        : Kd.transition !== null
          ? (Ml === 0 && (Ml = Ms()), Ml)
          : ((e = me), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vs(e.type))), e);
  }
  function xt(e, t, n, r) {
    if (50 < Pr) throw ((Pr = 0), (Mi = null), Error(s(185)));
    (er(e, n, r),
      ((se & 2) === 0 || e !== ze) &&
        (e === ze && ((se & 2) === 0 && (Pl |= n), Pe === 4 && nn(e, Ae)),
        tt(e, r),
        n === 1 && se === 0 && (t.mode & 1) === 0 && ((Wn = Ne() + 500), al && Yt())));
  }
  function tt(e, t) {
    var n = e.callbackNode;
    Kc(e, t);
    var r = Vr(e, e === ze ? Ae : 0);
    if (r === 0) (n !== null && Os(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Os(n), t === 1))
        (e.tag === 0 ? qd(Va.bind(null, e)) : Lu(Va.bind(null, e)),
          Hd(function () {
            (se & 6) === 0 && Yt();
          }),
          (n = null));
      else {
        switch (Ds(r)) {
          case 1:
            n = mo;
            break;
          case 4:
            n = Is;
            break;
          case 16:
            n = Ur;
            break;
          case 536870912:
            n = zs;
            break;
          default:
            n = Ur;
        }
        n = Ja(n, Ha.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Ha(e, t) {
    if (((zl = -1), (Ml = 0), (se & 6) !== 0)) throw Error(s(327));
    var n = e.callbackNode;
    if (Gn() && e.callbackNode !== n) return null;
    var r = Vr(e, e === ze ? Ae : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Dl(e, r);
    else {
      t = r;
      var l = se;
      se |= 2;
      var o = Ga();
      (ze !== e || Ae !== t) && ((Ft = null), (Wn = Ne() + 500), yn(e, t));
      do
        try {
          hf();
          break;
        } catch (u) {
          Wa(e, u);
        }
      while (!0);
      (bo(), (Ll.current = o), (se = l), Te !== null ? (t = 0) : ((ze = null), (Ae = 0), (t = Pe)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = ho(e)), l !== 0 && ((r = l), (t = Di(e, l)))), t === 1))
        throw ((n = Tr), yn(e, 0), nn(e, r), tt(e, Ne()), n);
      if (t === 6) nn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !pf(l) &&
            ((t = Dl(e, r)),
            t === 2 && ((o = ho(e)), o !== 0 && ((r = o), (t = Di(e, o)))),
            t === 1))
        )
          throw ((n = Tr), yn(e, 0), nn(e, r), tt(e, Ne()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            gn(e, et, Ft);
            break;
          case 3:
            if ((nn(e, r), (r & 130023424) === r && ((t = Ii + 500 - Ne()), 10 < t))) {
              if (Vr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Ye(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = Qo(gn.bind(null, e, et, Ft), t);
              break;
            }
            gn(e, et, Ft);
            break;
          case 4:
            if ((nn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - yt(r);
              ((o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o));
            }
            if (
              ((r = l),
              (r = Ne() - r),
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
                            : 1960 * ff(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Qo(gn.bind(null, e, et, Ft), r);
              break;
            }
            gn(e, et, Ft);
            break;
          case 5:
            gn(e, et, Ft);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (tt(e, Ne()), e.callbackNode === n ? Ha.bind(null, e) : null);
  }
  function Di(e, t) {
    var n = Lr;
    return (
      e.current.memoizedState.isDehydrated && (yn(e, t).flags |= 256),
      (e = Dl(e, t)),
      e !== 2 && ((t = et), (et = n), t !== null && Fi(t)),
      e
    );
  }
  function Fi(e) {
    et === null ? (et = e) : et.push.apply(et, e);
  }
  function pf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!gt(o(), l)) return !1;
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
  function nn(e, t) {
    for (
      t &= ~Oi, t &= ~Pl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - yt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function Va(e) {
    if ((se & 6) !== 0) throw Error(s(327));
    Gn();
    var t = Vr(e, 0);
    if ((t & 1) === 0) return (tt(e, Ne()), null);
    var n = Dl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ho(e);
      r !== 0 && ((t = r), (n = Di(e, r)));
    }
    if (n === 1) throw ((n = Tr), yn(e, 0), nn(e, t), tt(e, Ne()), n);
    if (n === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      gn(e, et, Ft),
      tt(e, Ne()),
      null
    );
  }
  function Ai(e, t) {
    var n = se;
    se |= 1;
    try {
      return e(t);
    } finally {
      ((se = n), se === 0 && ((Wn = Ne() + 500), al && Yt()));
    }
  }
  function vn(e) {
    en !== null && en.tag === 0 && (se & 6) === 0 && Gn();
    var t = se;
    se |= 1;
    var n = mt.transition,
      r = me;
    try {
      if (((mt.transition = null), (me = 1), e)) return e();
    } finally {
      ((me = r), (mt.transition = n), (se = t), (se & 6) === 0 && Yt());
    }
  }
  function Bi() {
    ((at = Vn.current), we(Vn));
  }
  function yn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Qd(n)), Te !== null))
      for (n = Te.return; n !== null; ) {
        var r = n;
        switch ((Ko(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && sl());
            break;
          case 3:
            ($n(), we(Ze), we(Qe), si());
            break;
          case 5:
            oi(r);
            break;
          case 4:
            $n();
            break;
          case 13:
            we(ke);
            break;
          case 19:
            we(ke);
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
      ((ze = e),
      (Te = e = rn(e.current, null)),
      (Ae = at = t),
      (Pe = 0),
      (Tr = null),
      (Oi = Pl = hn = 0),
      (et = Lr = null),
      fn !== null)
    ) {
      for (t = 0; t < fn.length; t++)
        if (((n = fn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var i = o.next;
            ((o.next = l), (r.next = i));
          }
          n.pending = r;
        }
      fn = null;
    }
    return e;
  }
  function Wa(e, t) {
    do {
      var n = Te;
      try {
        if ((bo(), (wl.current = xl), _l)) {
          for (var r = xe.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          _l = !1;
        }
        if (
          ((mn = 0),
          (Ie = Le = xe = null),
          (kr = !1),
          (xr = 0),
          (Ri.current = null),
          n === null || n.return === null)
        ) {
          ((Pe = 1), (Tr = t), (Te = null));
          break;
        }
        e: {
          var o = e,
            i = n.return,
            u = n,
            f = t;
          if (
            ((t = Ae),
            (u.flags |= 32768),
            f !== null && typeof f == 'object' && typeof f.then == 'function')
          ) {
            var w = f,
              O = u,
              I = O.tag;
            if ((O.mode & 1) === 0 && (I === 0 || I === 11 || I === 15)) {
              var R = O.alternate;
              R
                ? ((O.updateQueue = R.updateQueue),
                  (O.memoizedState = R.memoizedState),
                  (O.lanes = R.lanes))
                : ((O.updateQueue = null), (O.memoizedState = null));
            }
            var B = va(i);
            if (B !== null) {
              ((B.flags &= -257), ya(B, i, u, o, t), B.mode & 1 && ha(o, w, t), (t = B), (f = w));
              var H = t.updateQueue;
              if (H === null) {
                var W = new Set();
                (W.add(f), (t.updateQueue = W));
              } else H.add(f);
              break e;
            } else {
              if ((t & 1) === 0) {
                (ha(o, w, t), Ui());
                break e;
              }
              f = Error(s(426));
            }
          } else if (Se && u.mode & 1) {
            var je = va(i);
            if (je !== null) {
              ((je.flags & 65536) === 0 && (je.flags |= 256), ya(je, i, u, o, t), Zo(Qn(f, u)));
              break e;
            }
          }
          ((o = f = Qn(f, u)),
            Pe !== 4 && (Pe = 2),
            Lr === null ? (Lr = [o]) : Lr.push(o),
            (o = i));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var y = pa(o, f, t);
                Uu(o, y);
                break e;
              case 1:
                u = f;
                var m = o.type,
                  g = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof m.getDerivedStateFromError == 'function' ||
                    (g !== null &&
                      typeof g.componentDidCatch == 'function' &&
                      (bt === null || !bt.has(g))))
                ) {
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var M = ma(o, u, t);
                  Uu(o, M);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Ka(n);
      } catch (G) {
        ((t = G), Te === n && n !== null && (Te = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Ga() {
    var e = Ll.current;
    return ((Ll.current = xl), e === null ? xl : e);
  }
  function Ui() {
    ((Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
      ze === null || ((hn & 268435455) === 0 && (Pl & 268435455) === 0) || nn(ze, Ae));
  }
  function Dl(e, t) {
    var n = se;
    se |= 2;
    var r = Ga();
    (ze !== e || Ae !== t) && ((Ft = null), yn(e, t));
    do
      try {
        mf();
        break;
      } catch (l) {
        Wa(e, l);
      }
    while (!0);
    if ((bo(), (se = n), (Ll.current = r), Te !== null)) throw Error(s(261));
    return ((ze = null), (Ae = 0), Pe);
  }
  function mf() {
    for (; Te !== null; ) qa(Te);
  }
  function hf() {
    for (; Te !== null && !Bc(); ) qa(Te);
  }
  function qa(e) {
    var t = Za(e.alternate, e, at);
    ((e.memoizedProps = e.pendingProps), t === null ? Ka(e) : (Te = t), (Ri.current = null));
  }
  function Ka(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = sf(n, t, at)), n !== null)) {
          Te = n;
          return;
        }
      } else {
        if (((n = uf(n, t)), n !== null)) {
          ((n.flags &= 32767), (Te = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Pe = 6), (Te = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Te = t;
        return;
      }
      Te = t = e;
    } while (t !== null);
    Pe === 0 && (Pe = 5);
  }
  function gn(e, t, n) {
    var r = me,
      l = mt.transition;
    try {
      ((mt.transition = null), (me = 1), vf(e, t, n, r));
    } finally {
      ((mt.transition = l), (me = r));
    }
    return null;
  }
  function vf(e, t, n, r) {
    do Gn();
    while (en !== null);
    if ((se & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = n.lanes | n.childLanes;
    if (
      (Yc(e, o),
      e === ze && ((Te = ze = null), (Ae = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Ol ||
        ((Ol = !0),
        Ja(Ur, function () {
          return (Gn(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = mt.transition), (mt.transition = null));
      var i = me;
      me = 1;
      var u = se;
      ((se |= 4),
        (Ri.current = null),
        cf(e, n),
        Aa(n, e),
        Md(Uo),
        (qr = !!Bo),
        (Uo = Bo = null),
        (e.current = n),
        df(n),
        Uc(),
        (se = u),
        (me = i),
        (mt.transition = o));
    } else e.current = n;
    if (
      (Ol && ((Ol = !1), (en = e), (Il = l)),
      (o = e.pendingLanes),
      o === 0 && (bt = null),
      Hc(n.stateNode),
      tt(e, Ne()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (Rl) throw ((Rl = !1), (e = zi), (zi = null), e);
    return (
      (Il & 1) !== 0 && e.tag !== 0 && Gn(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === Mi ? Pr++ : ((Pr = 0), (Mi = e))) : (Pr = 0),
      Yt(),
      null
    );
  }
  function Gn() {
    if (en !== null) {
      var e = Ds(Il),
        t = mt.transition,
        n = me;
      try {
        if (((mt.transition = null), (me = 16 > e ? 16 : e), en === null)) var r = !1;
        else {
          if (((e = en), (en = null), (Il = 0), (se & 6) !== 0)) throw Error(s(331));
          var l = se;
          for (se |= 4, Q = e.current; Q !== null; ) {
            var o = Q,
              i = o.child;
            if ((Q.flags & 16) !== 0) {
              var u = o.deletions;
              if (u !== null) {
                for (var f = 0; f < u.length; f++) {
                  var w = u[f];
                  for (Q = w; Q !== null; ) {
                    var O = Q;
                    switch (O.tag) {
                      case 0:
                      case 11:
                      case 15:
                        jr(8, O, o);
                    }
                    var I = O.child;
                    if (I !== null) ((I.return = O), (Q = I));
                    else
                      for (; Q !== null; ) {
                        O = Q;
                        var R = O.sibling,
                          B = O.return;
                        if ((Ia(O), O === w)) {
                          Q = null;
                          break;
                        }
                        if (R !== null) {
                          ((R.return = B), (Q = R));
                          break;
                        }
                        Q = B;
                      }
                  }
                }
                var H = o.alternate;
                if (H !== null) {
                  var W = H.child;
                  if (W !== null) {
                    H.child = null;
                    do {
                      var je = W.sibling;
                      ((W.sibling = null), (W = je));
                    } while (W !== null);
                  }
                }
                Q = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null) ((i.return = o), (Q = i));
            else
              e: for (; Q !== null; ) {
                if (((o = Q), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jr(9, o, o.return);
                  }
                var y = o.sibling;
                if (y !== null) {
                  ((y.return = o.return), (Q = y));
                  break e;
                }
                Q = o.return;
              }
          }
          var m = e.current;
          for (Q = m; Q !== null; ) {
            i = Q;
            var g = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && g !== null) ((g.return = i), (Q = g));
            else
              e: for (i = m; Q !== null; ) {
                if (((u = Q), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Tl(9, u);
                    }
                  } catch (G) {
                    Ce(u, u.return, G);
                  }
                if (u === i) {
                  Q = null;
                  break e;
                }
                var M = u.sibling;
                if (M !== null) {
                  ((M.return = u.return), (Q = M));
                  break e;
                }
                Q = u.return;
              }
          }
          if (((se = l), Yt(), Ct && typeof Ct.onPostCommitFiberRoot == 'function'))
            try {
              Ct.onPostCommitFiberRoot($r, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((me = n), (mt.transition = t));
      }
    }
    return !1;
  }
  function Ya(e, t, n) {
    ((t = Qn(n, t)),
      (t = pa(e, t, 1)),
      (e = Zt(e, t, 1)),
      (t = Ye()),
      e !== null && (er(e, 1, t), tt(e, t)));
  }
  function Ce(e, t, n) {
    if (e.tag === 3) Ya(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ya(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (bt === null || !bt.has(r)))
          ) {
            ((e = Qn(n, e)),
              (e = ma(t, e, 1)),
              (t = Zt(t, e, 1)),
              (e = Ye()),
              t !== null && (er(t, 1, e), tt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function yf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Ye()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ze === e &&
        (Ae & n) === n &&
        (Pe === 4 || (Pe === 3 && (Ae & 130023424) === Ae && 500 > Ne() - Ii)
          ? yn(e, 0)
          : (Oi |= n)),
      tt(e, t));
  }
  function Xa(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Hr), (Hr <<= 1), (Hr & 130023424) === 0 && (Hr = 4194304)));
    var n = Ye();
    ((e = zt(e, t)), e !== null && (er(e, t, n), tt(e, n)));
  }
  function gf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Xa(e, n));
  }
  function wf(e, t) {
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
        throw Error(s(314));
    }
    (r !== null && r.delete(t), Xa(e, n));
  }
  var Za;
  Za = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ze.current) be = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((be = !1), of(e, t, n));
        be = (e.flags & 131072) !== 0;
      }
    else ((be = !1), Se && (t.flags & 1048576) !== 0 && Pu(t, dl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Nl(e, t), (e = t.pendingProps));
        var l = zn(t, Qe.current);
        (Un(t, n), (l = ci(null, t, r, e, l, n)));
        var o = di();
        return (
          (t.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Je(r) ? ((o = !0), ul(t)) : (o = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              ri(t),
              (l.updater = El),
              (t.stateNode = l),
              (l._reactInternals = t),
              yi(t, r, e, n),
              (t = Si(null, t, r, !0, o, n)))
            : ((t.tag = 0), Se && o && qo(t), Ke(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Nl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Sf(r)),
            (e = _t(r, e)),
            l)
          ) {
            case 0:
              t = _i(null, t, r, e, n);
              break e;
            case 1:
              t = xa(null, t, r, e, n);
              break e;
            case 11:
              t = ga(null, t, r, e, n);
              break e;
            case 14:
              t = wa(null, t, r, _t(r.type, e), n);
              break e;
          }
          throw Error(s(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : _t(r, l)),
          _i(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : _t(r, l)),
          xa(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Ea(t), e === null)) throw Error(s(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            Bu(e, t),
            yl(t, r, null, n));
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
              ((l = Qn(Error(s(423)), t)), (t = Ca(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Qn(Error(s(424)), t)), (t = Ca(e, t, r, n, l)));
              break e;
            } else
              for (
                ut = Gt(t.stateNode.containerInfo.firstChild),
                  st = t,
                  Se = !0,
                  wt = null,
                  n = Fu(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Fn(), r === l)) {
              t = Dt(e, t, n);
              break e;
            }
            Ke(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Qu(t),
          e === null && Xo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          $o(r, l) ? (i = null) : o !== null && $o(r, o) && (t.flags |= 32),
          ka(e, t),
          Ke(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Xo(t), null);
      case 13:
        return Na(e, t, n);
      case 4:
        return (
          li(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = An(t, null, r, n)) : Ke(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : _t(r, l)),
          ga(e, t, r, l, n)
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
            ye(ml, r._currentValue),
            (r._currentValue = i),
            o !== null)
          )
            if (gt(o.value, i)) {
              if (o.children === l.children && !Ze.current) {
                t = Dt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var u = o.dependencies;
                if (u !== null) {
                  i = o.child;
                  for (var f = u.firstContext; f !== null; ) {
                    if (f.context === r) {
                      if (o.tag === 1) {
                        ((f = Mt(-1, n & -n)), (f.tag = 2));
                        var w = o.updateQueue;
                        if (w !== null) {
                          w = w.shared;
                          var O = w.pending;
                          (O === null ? (f.next = f) : ((f.next = O.next), (O.next = f)),
                            (w.pending = f));
                        }
                      }
                      ((o.lanes |= n),
                        (f = o.alternate),
                        f !== null && (f.lanes |= n),
                        ti(o.return, n, t),
                        (u.lanes |= n));
                      break;
                    }
                    f = f.next;
                  }
                } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((i = o.return), i === null)) throw Error(s(341));
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
          Un(t, n),
          (l = ft(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ke(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = _t(r, t.pendingProps)), (l = _t(r.type, l)), wa(e, t, r, l, n));
      case 15:
        return _a(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : _t(r, l)),
          Nl(e, t),
          (t.tag = 1),
          Je(r) ? ((e = !0), ul(t)) : (e = !1),
          Un(t, n),
          da(t, r, l),
          yi(t, r, l, n),
          Si(null, t, r, !0, e, n)
        );
      case 19:
        return Ta(e, t, n);
      case 22:
        return Sa(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Ja(e, t) {
    return Rs(e, t);
  }
  function _f(e, t, n, r) {
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
  function ht(e, t, n, r) {
    return new _f(e, t, n, r);
  }
  function $i(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Sf(e) {
    if (typeof e == 'function') return $i(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === qe)) return 11;
      if (e === lt) return 14;
    }
    return 2;
  }
  function rn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ht(e.tag, t, e.key, e.mode)),
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
  function Fl(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == 'function')) $i(e) && (i = 1);
    else if (typeof e == 'string') i = 5;
    else
      e: switch (e) {
        case z:
          return wn(n.children, l, o, t);
        case A:
          ((i = 8), (l |= 8));
          break;
        case Oe:
          return ((e = ht(12, n, t, l | 2)), (e.elementType = Oe), (e.lanes = o), e);
        case Ue:
          return ((e = ht(13, n, t, l)), (e.elementType = Ue), (e.lanes = o), e);
        case Xe:
          return ((e = ht(19, n, t, l)), (e.elementType = Xe), (e.lanes = o), e);
        case F:
          return Al(n, l, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case fe:
                i = 10;
                break e;
              case Et:
                i = 9;
                break e;
              case qe:
                i = 11;
                break e;
              case lt:
                i = 14;
                break e;
              case $e:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ''));
      }
    return ((t = ht(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
  }
  function wn(e, t, n, r) {
    return ((e = ht(7, e, r, t)), (e.lanes = n), e);
  }
  function Al(e, t, n, r) {
    return (
      (e = ht(22, e, r, t)),
      (e.elementType = F),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Qi(e, t, n) {
    return ((e = ht(6, e, null, t)), (e.lanes = n), e);
  }
  function Hi(e, t, n) {
    return (
      (t = ht(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function kf(e, t, n, r, l) {
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
  function Vi(e, t, n, r, l, o, i, u, f) {
    return (
      (e = new kf(e, t, n, u, f)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = ht(3, null, null, t)),
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
  function xf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: N,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function ba(e) {
    if (!e) return Kt;
    e = e._reactInternals;
    e: {
      if (sn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Je(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Je(n)) return ju(e, n, t);
    }
    return t;
  }
  function ec(e, t, n, r, l, o, i, u, f) {
    return (
      (e = Vi(n, r, !0, e, l, o, i, u, f)),
      (e.context = ba(null)),
      (n = e.current),
      (r = Ye()),
      (l = tn(n)),
      (o = Mt(r, l)),
      (o.callback = t ?? null),
      Zt(n, o, l),
      (e.current.lanes = l),
      er(e, l, r),
      tt(e, r),
      e
    );
  }
  function Bl(e, t, n, r) {
    var l = t.current,
      o = Ye(),
      i = tn(l);
    return (
      (n = ba(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Mt(o, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Zt(l, t, i)),
      e !== null && (xt(e, l, i, o), vl(e, l, i)),
      i
    );
  }
  function Ul(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function tc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Wi(e, t) {
    (tc(e, t), (e = e.alternate) && tc(e, t));
  }
  function Ef() {
    return null;
  }
  var nc =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Gi(e) {
    this._internalRoot = e;
  }
  (($l.prototype.render = Gi.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Bl(e, t, null, null);
    }),
    ($l.prototype.unmount = Gi.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (vn(function () {
            Bl(null, e, null, null);
          }),
            (t[Pt] = null));
        }
      }));
  function $l(e) {
    this._internalRoot = e;
  }
  $l.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Bs();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++);
      (Ht.splice(n, 0, e), n === 0 && Qs(e));
    }
  };
  function qi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ql(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function rc() {}
  function Cf(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var w = Ul(i);
          o.call(w);
        };
      }
      var i = ec(t, r, e, 0, null, !1, !1, '', rc);
      return (
        (e._reactRootContainer = i),
        (e[Pt] = i.current),
        mr(e.nodeType === 8 ? e.parentNode : e),
        vn(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var u = r;
      r = function () {
        var w = Ul(f);
        u.call(w);
      };
    }
    var f = Vi(e, 0, !1, null, null, !1, !1, '', rc);
    return (
      (e._reactRootContainer = f),
      (e[Pt] = f.current),
      mr(e.nodeType === 8 ? e.parentNode : e),
      vn(function () {
        Bl(t, f, n, r);
      }),
      f
    );
  }
  function Hl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == 'function') {
        var u = l;
        l = function () {
          var f = Ul(i);
          u.call(f);
        };
      }
      Bl(t, i, e, l);
    } else i = Cf(n, t, e, l, r);
    return Ul(i);
  }
  ((Fs = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = bn(t.pendingLanes);
          n !== 0 && (yo(t, n | 1), tt(t, Ne()), (se & 6) === 0 && ((Wn = Ne() + 500), Yt()));
        }
        break;
      case 13:
        (vn(function () {
          var r = zt(e, 1);
          if (r !== null) {
            var l = Ye();
            xt(r, e, 1, l);
          }
        }),
          Wi(e, 1));
    }
  }),
    (go = function (e) {
      if (e.tag === 13) {
        var t = zt(e, 134217728);
        if (t !== null) {
          var n = Ye();
          xt(t, e, 134217728, n);
        }
        Wi(e, 134217728);
      }
    }),
    (As = function (e) {
      if (e.tag === 13) {
        var t = tn(e),
          n = zt(e, t);
        if (n !== null) {
          var r = Ye();
          xt(n, e, t, r);
        }
        Wi(e, t);
      }
    }),
    (Bs = function () {
      return me;
    }),
    (Us = function (e, t) {
      var n = me;
      try {
        return ((me = e), t());
      } finally {
        me = n;
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
                var l = il(r);
                if (!l) throw Error(s(90));
                (cs(r), to(r, l));
              }
            }
          }
          break;
        case 'textarea':
          hs(e, n);
          break;
        case 'select':
          ((t = n.value), t != null && kn(e, !!n.multiple, t, !1));
      }
    }),
    (Es = Ai),
    (Cs = vn));
  var Nf = { usingClientEntryPoint: !1, Events: [yr, On, il, ks, xs, Ai] },
    Rr = {
      findFiberByHostInstance: un,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    jf = {
      bundleType: Rr.bundleType,
      version: Rr.version,
      rendererPackageName: Rr.rendererPackageName,
      rendererConfig: Rr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Y.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Ls(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Rr.findFiberByHostInstance || Ef,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vl.isDisabled && Vl.supportsFiber)
      try {
        (($r = Vl.inject(jf)), (Ct = Vl));
      } catch {}
  }
  return (
    (nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nf),
    (nt.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!qi(t)) throw Error(s(200));
      return xf(e, t, null, n);
    }),
    (nt.createRoot = function (e, t) {
      if (!qi(e)) throw Error(s(299));
      var n = !1,
        r = '',
        l = nc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Vi(e, 1, !1, null, null, n, !1, r, l)),
        (e[Pt] = t.current),
        mr(e.nodeType === 8 ? e.parentNode : e),
        new Gi(t)
      );
    }),
    (nt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(s(188))
          : ((e = Object.keys(e).join(',')), Error(s(268, e)));
      return ((e = Ls(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (nt.flushSync = function (e) {
      return vn(e);
    }),
    (nt.hydrate = function (e, t, n) {
      if (!Ql(t)) throw Error(s(200));
      return Hl(null, e, t, !0, n);
    }),
    (nt.hydrateRoot = function (e, t, n) {
      if (!qi(e)) throw Error(s(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        i = nc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = ec(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[Pt] = t.current),
        mr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new $l(t);
    }),
    (nt.render = function (e, t, n) {
      if (!Ql(t)) throw Error(s(200));
      return Hl(null, e, t, !1, n);
    }),
    (nt.unmountComponentAtNode = function (e) {
      if (!Ql(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (vn(function () {
            Hl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Pt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (nt.unstable_batchedUpdates = Ai),
    (nt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Ql(n)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Hl(e, t, n, !1, r);
    }),
    (nt.version = '18.3.1-next-f1338f8080-20240426'),
    nt
  );
}
var dc;
function Df() {
  if (dc) return Xi.exports;
  dc = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (a) {
        console.error(a);
      }
  }
  return (c(), (Xi.exports = Mf()), Xi.exports);
}
var fc;
function Ff() {
  if (fc) return Wl;
  fc = 1;
  var c = Df();
  return ((Wl.createRoot = c.createRoot), (Wl.hydrateRoot = c.hydrateRoot), Wl);
}
var Af = Ff();
const Bf = [
    {
      id: 'animal',
      worldviewDimension: {
        appliesWhen: 'helpsAnimals',
        applyAs: 'multiplier',
        options: { equal: 1, '10x': 0.1, '100x': 0.01 },
      },
      categoryLabel: 'Moral Weights',
      emoji: '🐾',
      previewText: 'Animal vs. Human welfare',
      heading: 'How do you value animal welfare relative to human welfare?',
      instructionsOptions:
        'Choose the view that best represents your position, or use "Custom Mix" to split your credence.',
      instructionsSliders:
        'Distribute your credence (confidence) across these views. Sliders auto-balance to 100%.',
      editPanelTitle: 'Animal Values',
      options: [
        {
          key: 'equal',
          label: 'Animals and humans matter equally',
          description: 'Equal weight to equivalent experiences',
          panelLabel: 'Equal weight',
          panelShort: 'Eq',
        },
        {
          key: '10x',
          label: 'Animals matter 10× less than humans',
          description: 'Moderate speciesist view',
          panelLabel: '10× less',
          panelShort: '10×',
        },
        {
          key: '100x',
          label: 'Animals matter 100× less than humans',
          description: 'Strong speciesist view',
          panelLabel: '100× less',
          panelShort: '100×',
        },
      ],
    },
    {
      id: 'future',
      worldviewDimension: {
        appliesWhen: 'helpsFutureHumans',
        applyAs: 'multiplier',
        options: { equal: 1, '10x': 0.1, '100x': 0.01 },
      },
      categoryLabel: 'Time Preference',
      emoji: '⏳',
      previewText: 'Current vs. Future generations',
      heading: 'How do you value future human welfare relative to current human welfare?',
      instructionsOptions:
        'Choose the view that best represents your position, or use "Custom Mix" to split your credence.',
      instructionsSliders:
        'Distribute your credence across these views. Sliders auto-balance to 100%.',
      editPanelTitle: 'Future Values',
      options: [
        {
          key: 'equal',
          label: 'Future and current humans matter equally',
          description: 'No time discounting',
          panelLabel: 'Equal weight',
          panelShort: 'Eq',
        },
        {
          key: '10x',
          label: 'Future humans matter 10× less',
          description: 'Moderate time preference',
          panelLabel: '10× less',
          panelShort: '10×',
        },
        {
          key: '100x',
          label: 'Future humans matter 100× less',
          description: 'Strong present focus',
          panelLabel: '100× less',
          panelShort: '100×',
        },
      ],
    },
    {
      id: 'intermission1',
      type: 'intermission',
      title: 'Halfway There',
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Based on your answers so far, we're calculating how your worldview might influence your giving priorities. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 'scale',
      worldviewDimension: {
        appliesTo: 'scaleFactor',
        applyAs: 'exponent',
        options: { equal: 0, '10x': 0.5, '100x': 1 },
      },
      categoryLabel: 'Scale Sensitivity',
      emoji: '📊',
      previewText: 'Helping one vs. helping millions',
      heading: 'How much does the scale of impact matter?',
      instructionsOptions:
        'Choose the view that best represents your position, or use "Custom Mix" to split your credence.',
      instructionsSliders:
        'Distribute your credence across these views. Sliders auto-balance to 100%.',
      editPanelTitle: 'Scale Sensitivity',
      options: [
        {
          key: 'equal',
          label: 'Helping one person matters as much as helping millions',
          description: "Numbers don't multiply moral value",
          panelLabel: 'Irrelevant',
          panelShort: 'Eq',
        },
        {
          key: '10x',
          label: 'Helping 10× more beings is significantly better',
          description: 'Scale matters, but not linearly',
          panelLabel: 'Matters',
          panelShort: '10×',
        },
        {
          key: '100x',
          label: 'Helping 10× more beings is 10× better',
          description: 'Full utilitarian aggregation',
          panelLabel: 'Dominates',
          panelShort: '100×',
        },
      ],
    },
    {
      id: 'certainty',
      worldviewDimension: {
        appliesWhen: 'isSpeculative',
        applyAs: 'multiplier',
        options: { equal: 1, '10x': 0.1, '100x': 0.01 },
      },
      categoryLabel: 'Evidence Preference',
      emoji: '🔬',
      previewText: 'Proven vs. speculative interventions',
      heading: 'How much do you value proven interventions over speculative ones?',
      instructionsOptions:
        'Choose the view that best represents your position, or use "Custom Mix" to split your credence.',
      instructionsSliders:
        'Distribute your credence across these views. Sliders auto-balance to 100%.',
      editPanelTitle: 'Evidence Preference',
      options: [
        {
          key: 'equal',
          label: 'Speculative and proven interventions matter equally',
          description: 'Expected value is all that matters',
          panelLabel: 'Equal weight',
          panelShort: 'Eq',
        },
        {
          key: '10x',
          label: 'Proven interventions are worth 10× more',
          description: 'Moderate certainty preference',
          panelLabel: '10× less',
          panelShort: '10×',
        },
        {
          key: '100x',
          label: 'Proven interventions are worth 100× more',
          description: 'Strong evidence focus',
          panelLabel: '100× less',
          panelShort: '100×',
        },
      ],
    },
  ],
  ss = { questions: Bf },
  Uf = 'sqrt',
  $f = {
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
  Qf = { equal: 33, '10x': 33, '100x': 34 },
  Kl = { diminishingReturns: Uf, causes: $f, defaultCredences: Qf },
  Hf = { resetButton: !1, sliderLock: !1 },
  Vf = {
    showMaxEV: !0,
    showParliament: !0,
    showMergedFavorites: !0,
    showMaximin: !0,
    sideBySideComparison: !0,
  },
  ql = { ui: Hf, calculations: Vf };
var bi = { exports: {} },
  pc;
function Wf() {
  return (
    pc ||
      ((pc = 1),
      (function (c) {
        var a = (function () {
          var s = String.fromCharCode,
            k = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            C = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
            x = {};
          function j(p, v) {
            if (!x[p]) {
              x[p] = {};
              for (var _ = 0; _ < p.length; _++) x[p][p.charAt(_)] = _;
            }
            return x[p][v];
          }
          var E = {
            compressToBase64: function (p) {
              if (p == null) return '';
              var v = E._compress(p, 6, function (_) {
                return k.charAt(_);
              });
              switch (v.length % 4) {
                default:
                case 0:
                  return v;
                case 1:
                  return v + '===';
                case 2:
                  return v + '==';
                case 3:
                  return v + '=';
              }
            },
            decompressFromBase64: function (p) {
              return p == null
                ? ''
                : p == ''
                  ? null
                  : E._decompress(p.length, 32, function (v) {
                      return j(k, p.charAt(v));
                    });
            },
            compressToUTF16: function (p) {
              return p == null
                ? ''
                : E._compress(p, 15, function (v) {
                    return s(v + 32);
                  }) + ' ';
            },
            decompressFromUTF16: function (p) {
              return p == null
                ? ''
                : p == ''
                  ? null
                  : E._decompress(p.length, 16384, function (v) {
                      return p.charCodeAt(v) - 32;
                    });
            },
            compressToUint8Array: function (p) {
              for (
                var v = E.compress(p), _ = new Uint8Array(v.length * 2), S = 0, T = v.length;
                S < T;
                S++
              ) {
                var $ = v.charCodeAt(S);
                ((_[S * 2] = $ >>> 8), (_[S * 2 + 1] = $ % 256));
              }
              return _;
            },
            decompressFromUint8Array: function (p) {
              if (p == null) return E.decompress(p);
              for (var v = new Array(p.length / 2), _ = 0, S = v.length; _ < S; _++)
                v[_] = p[_ * 2] * 256 + p[_ * 2 + 1];
              var T = [];
              return (
                v.forEach(function ($) {
                  T.push(s($));
                }),
                E.decompress(T.join(''))
              );
            },
            compressToEncodedURIComponent: function (p) {
              return p == null
                ? ''
                : E._compress(p, 6, function (v) {
                    return C.charAt(v);
                  });
            },
            decompressFromEncodedURIComponent: function (p) {
              return p == null
                ? ''
                : p == ''
                  ? null
                  : ((p = p.replace(/ /g, '+')),
                    E._decompress(p.length, 32, function (v) {
                      return j(C, p.charAt(v));
                    }));
            },
            compress: function (p) {
              return E._compress(p, 16, function (v) {
                return s(v);
              });
            },
            _compress: function (p, v, _) {
              if (p == null) return '';
              var S,
                T,
                $ = {},
                b = {},
                V = '',
                U = '',
                q = '',
                le = 2,
                ne = 3,
                Y = 2,
                J = [],
                N = 0,
                z = 0,
                A;
              for (A = 0; A < p.length; A += 1)
                if (
                  ((V = p.charAt(A)),
                  Object.prototype.hasOwnProperty.call($, V) || (($[V] = ne++), (b[V] = !0)),
                  (U = q + V),
                  Object.prototype.hasOwnProperty.call($, U))
                )
                  q = U;
                else {
                  if (Object.prototype.hasOwnProperty.call(b, q)) {
                    if (q.charCodeAt(0) < 256) {
                      for (S = 0; S < Y; S++)
                        ((N = N << 1), z == v - 1 ? ((z = 0), J.push(_(N)), (N = 0)) : z++);
                      for (T = q.charCodeAt(0), S = 0; S < 8; S++)
                        ((N = (N << 1) | (T & 1)),
                          z == v - 1 ? ((z = 0), J.push(_(N)), (N = 0)) : z++,
                          (T = T >> 1));
                    } else {
                      for (T = 1, S = 0; S < Y; S++)
                        ((N = (N << 1) | T),
                          z == v - 1 ? ((z = 0), J.push(_(N)), (N = 0)) : z++,
                          (T = 0));
                      for (T = q.charCodeAt(0), S = 0; S < 16; S++)
                        ((N = (N << 1) | (T & 1)),
                          z == v - 1 ? ((z = 0), J.push(_(N)), (N = 0)) : z++,
                          (T = T >> 1));
                    }
                    (le--, le == 0 && ((le = Math.pow(2, Y)), Y++), delete b[q]);
                  } else
                    for (T = $[q], S = 0; S < Y; S++)
                      ((N = (N << 1) | (T & 1)),
                        z == v - 1 ? ((z = 0), J.push(_(N)), (N = 0)) : z++,
                        (T = T >> 1));
                  (le--, le == 0 && ((le = Math.pow(2, Y)), Y++), ($[U] = ne++), (q = String(V)));
                }
              if (q !== '') {
                if (Object.prototype.hasOwnProperty.call(b, q)) {
                  if (q.charCodeAt(0) < 256) {
                    for (S = 0; S < Y; S++)
                      ((N = N << 1), z == v - 1 ? ((z = 0), J.push(_(N)), (N = 0)) : z++);
                    for (T = q.charCodeAt(0), S = 0; S < 8; S++)
                      ((N = (N << 1) | (T & 1)),
                        z == v - 1 ? ((z = 0), J.push(_(N)), (N = 0)) : z++,
                        (T = T >> 1));
                  } else {
                    for (T = 1, S = 0; S < Y; S++)
                      ((N = (N << 1) | T),
                        z == v - 1 ? ((z = 0), J.push(_(N)), (N = 0)) : z++,
                        (T = 0));
                    for (T = q.charCodeAt(0), S = 0; S < 16; S++)
                      ((N = (N << 1) | (T & 1)),
                        z == v - 1 ? ((z = 0), J.push(_(N)), (N = 0)) : z++,
                        (T = T >> 1));
                  }
                  (le--, le == 0 && ((le = Math.pow(2, Y)), Y++), delete b[q]);
                } else
                  for (T = $[q], S = 0; S < Y; S++)
                    ((N = (N << 1) | (T & 1)),
                      z == v - 1 ? ((z = 0), J.push(_(N)), (N = 0)) : z++,
                      (T = T >> 1));
                (le--, le == 0 && ((le = Math.pow(2, Y)), Y++));
              }
              for (T = 2, S = 0; S < Y; S++)
                ((N = (N << 1) | (T & 1)),
                  z == v - 1 ? ((z = 0), J.push(_(N)), (N = 0)) : z++,
                  (T = T >> 1));
              for (;;)
                if (((N = N << 1), z == v - 1)) {
                  J.push(_(N));
                  break;
                } else z++;
              return J.join('');
            },
            decompress: function (p) {
              return p == null
                ? ''
                : p == ''
                  ? null
                  : E._decompress(p.length, 32768, function (v) {
                      return p.charCodeAt(v);
                    });
            },
            _decompress: function (p, v, _) {
              var S = [],
                T = 4,
                $ = 4,
                b = 3,
                V = '',
                U = [],
                q,
                le,
                ne,
                Y,
                J,
                N,
                z,
                A = { val: _(0), position: v, index: 1 };
              for (q = 0; q < 3; q += 1) S[q] = q;
              for (ne = 0, J = Math.pow(2, 2), N = 1; N != J; )
                ((Y = A.val & A.position),
                  (A.position >>= 1),
                  A.position == 0 && ((A.position = v), (A.val = _(A.index++))),
                  (ne |= (Y > 0 ? 1 : 0) * N),
                  (N <<= 1));
              switch (ne) {
                case 0:
                  for (ne = 0, J = Math.pow(2, 8), N = 1; N != J; )
                    ((Y = A.val & A.position),
                      (A.position >>= 1),
                      A.position == 0 && ((A.position = v), (A.val = _(A.index++))),
                      (ne |= (Y > 0 ? 1 : 0) * N),
                      (N <<= 1));
                  z = s(ne);
                  break;
                case 1:
                  for (ne = 0, J = Math.pow(2, 16), N = 1; N != J; )
                    ((Y = A.val & A.position),
                      (A.position >>= 1),
                      A.position == 0 && ((A.position = v), (A.val = _(A.index++))),
                      (ne |= (Y > 0 ? 1 : 0) * N),
                      (N <<= 1));
                  z = s(ne);
                  break;
                case 2:
                  return '';
              }
              for (S[3] = z, le = z, U.push(z); ; ) {
                if (A.index > p) return '';
                for (ne = 0, J = Math.pow(2, b), N = 1; N != J; )
                  ((Y = A.val & A.position),
                    (A.position >>= 1),
                    A.position == 0 && ((A.position = v), (A.val = _(A.index++))),
                    (ne |= (Y > 0 ? 1 : 0) * N),
                    (N <<= 1));
                switch ((z = ne)) {
                  case 0:
                    for (ne = 0, J = Math.pow(2, 8), N = 1; N != J; )
                      ((Y = A.val & A.position),
                        (A.position >>= 1),
                        A.position == 0 && ((A.position = v), (A.val = _(A.index++))),
                        (ne |= (Y > 0 ? 1 : 0) * N),
                        (N <<= 1));
                    ((S[$++] = s(ne)), (z = $ - 1), T--);
                    break;
                  case 1:
                    for (ne = 0, J = Math.pow(2, 16), N = 1; N != J; )
                      ((Y = A.val & A.position),
                        (A.position >>= 1),
                        A.position == 0 && ((A.position = v), (A.val = _(A.index++))),
                        (ne |= (Y > 0 ? 1 : 0) * N),
                        (N <<= 1));
                    ((S[$++] = s(ne)), (z = $ - 1), T--);
                    break;
                  case 2:
                    return U.join('');
                }
                if ((T == 0 && ((T = Math.pow(2, b)), b++), S[z])) V = S[z];
                else if (z === $) V = le + le.charAt(0);
                else return null;
                (U.push(V),
                  (S[$++] = le + V.charAt(0)),
                  T--,
                  (le = V),
                  T == 0 && ((T = Math.pow(2, b)), b++));
              }
            },
          };
          return E;
        })();
        c != null
          ? (c.exports = a)
          : typeof angular < 'u' &&
            angular != null &&
            angular.module('LZString', []).factory('LZString', function () {
              return a;
            });
      })(bi)),
    bi.exports
  );
}
var Gf = Wf();
const yc = Lf(Gf),
  { questions: qf } = ss;
function Kf() {
  return qf
    .filter((c) => c.type !== 'intermission' && c.options)
    .map((c) => ({ id: c.id, optionKeys: c.options.map((a) => a.key) }));
}
function Yf(c) {
  const a = [];
  for (const [k, C] of Object.entries(c)) {
    const x = Object.entries(C),
      j = x.find(([, E]) => E === 100);
    if (j) a.push(`${k}:${j[0]}`);
    else {
      const E = x
        .filter(([, p]) => p > 0)
        .map(([p, v]) => `${p}=${v}`)
        .join(',');
      a.push(`${k}:${E}`);
    }
  }
  const s = a.join('|');
  return yc.compressToEncodedURIComponent(s);
}
function Xf(c) {
  try {
    const a = yc.decompressFromEncodedURIComponent(c);
    if (!a) return null;
    const s = {},
      k = a.split('|');
    for (const C of k) {
      const x = C.indexOf(':');
      if (x === -1) return null;
      const j = C.slice(0, x),
        E = C.slice(x + 1);
      if (E.includes('=')) {
        const p = E.split(',');
        s[j] = {};
        for (const v of p) {
          const [_, S] = v.split('=');
          if (!_ || S === void 0) return null;
          s[j][_] = parseInt(S, 10);
        }
      } else s[j] = { [E]: 100 };
    }
    return s;
  } catch {
    return null;
  }
}
function Zf(c) {
  if (!c || typeof c != 'object') return { valid: !1, message: 'Invalid data format' };
  const a = Kf(),
    s = new Set(a.map((E) => E.id));
  if (Object.keys(c).filter((E) => !s.has(E)).length > 0)
    return { valid: !1, message: 'Quiz has changed since this link was created' };
  if (a.filter((E) => !c[E.id]).length > 0)
    return { valid: !1, message: 'Quiz has changed since this link was created' };
  for (const E of a) {
    const p = c[E.id],
      v = new Set(E.optionKeys);
    if (Object.keys(p).some(($) => !v.has($)))
      return { valid: !1, message: 'Quiz has changed since this link was created' };
    const T = Object.values(p).reduce(($, b) => $ + b, 0);
    if (Math.abs(T - 100) > 1) return { valid: !1, message: 'Invalid credence values' };
  }
  const j = {};
  for (const E of a) {
    const p = c[E.id] || {};
    j[E.id] = {};
    for (const v of E.optionKeys) j[E.id][v] = p[v] || 0;
  }
  return { valid: !0, credences: j };
}
function Jf(c) {
  const a = Yf(c);
  return `${window.location.origin + window.location.pathname}#results=${a}`;
}
function bf() {
  const c = window.location.hash;
  if (!c.startsWith('#results=')) return null;
  const a = c.slice(9);
  if (!a) return null;
  const s = Xf(a);
  if (!s) return { error: "Couldn't restore your results from this link" };
  const k = Zf(s);
  return k.valid ? { credences: k.credences } : { error: k.message };
}
function mc() {
  window.location.hash &&
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
const hc = {
    default: ['#81B29A', '#98C1D9', '#E07A5F'],
    selection: ['#81B29A', '#98C1D9', '#E07A5F'],
    credence: ['#81B29A', '#98C1D9', '#E07A5F'],
  },
  ep = '#81B29A',
  tp = { OPTIONS: 'options' },
  rt = {
    DEFAULT: 'default',
    SELECTION: 'selection',
    CREDENCE: 'credence',
    INTERMISSION: 'intermission',
  },
  { causes: Yl } = Kl,
  ns = { none: 1, sqrt: 0.5, extreme: 0.1 };
function gc(c) {
  const a = (c == null ? void 0 : c.diminishingReturns) || Kl.diminishingReturns || 'sqrt';
  return ns[a] ?? 0.5;
}
function wc(c, a, s = 0.5) {
  if (s >= 1) {
    const j = Math.max(...c);
    if (j <= 0) return c.map(() => a / c.length);
    const E = c.map((p, v) => (p === j ? v : -1)).filter((p) => p >= 0);
    return c.map((p, v) => (E.includes(v) ? a / E.length : 0));
  }
  const k = 1 / (1 - s),
    C = c.map((j) => (j > 0 ? Math.pow(j, k) : 0)),
    x = C.reduce((j, E) => j + E, 0);
  return x === 0 ? c.map(() => a / c.length) : C.map((j) => (j / x) * a);
}
function _c(c = !1) {
  return Object.fromEntries(
    ss.questions
      .filter((a) => a.type !== 'intermission' && a.worldviewDimension)
      .map((a) => [
        a.id,
        c ? { ...a.worldviewDimension, name: a.editPanelTitle } : a.worldviewDimension,
      ])
  );
}
const Xl = _c();
function* Zl(c) {
  const a = Object.keys(c);
  if (a.length === 0) return;
  const s = Object.keys(c[a[0]]);
  function* k(C, x) {
    if (C === a.length) {
      let E = 1;
      for (const p of a) E *= c[p][x[p]] / 100;
      yield { options: x, probability: E };
      return;
    }
    const j = a[C];
    for (const E of s) yield* k(C + 1, { ...x, [j]: E });
  }
  yield* k(0, {});
}
function np(c, a, s) {
  let k = c.points;
  for (const [C, x] of Object.entries(s)) {
    const j = a[C],
      E = x.options[j];
    if (x.applyAs === 'multiplier') x.appliesWhen && c[x.appliesWhen] && (k *= E);
    else if (x.applyAs === 'exponent' && x.appliesTo) {
      const p = c[x.appliesTo] || 1;
      k *= Math.pow(p, E);
    }
  }
  return k;
}
function Jl(c, a, s) {
  const k = {};
  for (const [C, x] of Object.entries(a)) k[C] = np(x, c, s);
  return k;
}
function rp(c) {
  const a = Math.max(...Object.values(c));
  return Object.keys(c).filter((s) => Math.abs(c[s] - a) < 1e-4);
}
function us(c) {
  return Object.fromEntries(Object.keys(c).map((a) => [a, 0]));
}
function lp(c, a) {
  const s = (a == null ? void 0 : a.causes) || Yl,
    k = (a == null ? void 0 : a.dimensions) || Xl,
    C = gc(a),
    x = Object.keys(s),
    j = us(s);
  for (const { options: _, probability: S } of Zl(c)) {
    const T = Jl(_, s, k);
    for (const [$, b] of Object.entries(T)) j[$] += S * b;
  }
  const E = x.map((_) => j[_]),
    p = wc(E, 100, C),
    v = { evs: j };
  return (
    x.forEach((_, S) => {
      v[_] = p[S];
    }),
    v
  );
}
function op(c, a) {
  const s = (a == null ? void 0 : a.causes) || Yl,
    k = (a == null ? void 0 : a.dimensions) || Xl,
    C = us(s);
  for (const { options: j, probability: E } of Zl(c)) {
    const p = Jl(j, s, k),
      v = rp(p),
      _ = E / v.length;
    for (const S of v) C[S] += _;
  }
  const x = {};
  for (const j of Object.keys(s)) x[j] = C[j] * 100;
  return x;
}
function ip(c, a) {
  const s = (a == null ? void 0 : a.causes) || Yl,
    k = (a == null ? void 0 : a.dimensions) || Xl,
    C = gc(a),
    x = Object.keys(s),
    j = us(s);
  for (const { options: E, probability: p } of Zl(c)) {
    const v = Jl(E, s, k),
      _ = p * 100,
      S = x.map(($) => v[$]),
      T = wc(S, _, C);
    x.forEach(($, b) => {
      j[$] += T[b];
    });
  }
  return j;
}
function sp(c, a) {
  const s = (a == null ? void 0 : a.causes) || Yl,
    k = (a == null ? void 0 : a.dimensions) || Xl,
    C = Object.keys(s),
    x = up(C);
  let j = x[0],
    E = -1 / 0;
  for (const p of x) {
    let v = 1 / 0;
    for (const { options: _, probability: S } of Zl(c)) {
      if (S < 0.001) continue;
      const T = Jl(_, s, k);
      let $ = 0;
      for (const b of C) $ += T[b] * (p[b] / 100);
      v = Math.min(v, $);
    }
    v > E && ((E = v), (j = { ...p }));
  }
  return j;
}
function up(c) {
  const a = [],
    s = c.length,
    k = (p) => {
      const v = {};
      return (
        c.forEach((_, S) => {
          v[_] = p[S];
        }),
        v
      );
    };
  for (let p = 0; p < s; p++) {
    const v = new Array(s).fill(0);
    ((v[p] = 100), a.push(k(v)));
  }
  for (let p = 0; p < s; p++)
    for (let v = p + 1; v < s; v++) {
      const _ = new Array(s).fill(0);
      ((_[p] = 50), (_[v] = 50), a.push(k(_)));
    }
  const C = Math.floor(100 / s),
    x = 100 - C * s,
    j = new Array(s).fill(C);
  ((j[0] += x), a.push(k(j)));
  const E = [
    [60, 20, 20],
    [70, 15, 15],
    [80, 10, 10],
  ];
  for (const p of E)
    if (p.length === s)
      for (let v = 0; v < s; v++) {
        const _ = new Array(s).fill(0);
        _[v] = p[0];
        let S = 1;
        for (let T = 0; T < s; T++) T !== v && S < p.length && (_[T] = p[S++]);
        a.push(k(_));
      }
  return a;
}
function Sc(c, a, s, k = null, C = null) {
  const x = C ? s[C] : 0,
    j = 100 - x;
  a = Math.max(0, Math.min(j, a));
  const E = k || s,
    p = Object.keys(s).filter((T) => T !== c && T !== C),
    v = p.reduce((T, $) => T + E[$], 0),
    _ = 100 - a - x,
    S = { [c]: a };
  if ((C && (S[C] = s[C]), v === 0)) {
    const T = Math.floor(_ / p.length);
    let $ = _ - T * p.length;
    p.forEach((b, V) => {
      S[b] = T + (V < $ ? 1 : 0);
    });
  } else {
    let T = 0;
    p.forEach(($, b) => {
      if (b === p.length - 1) S[$] = Math.max(0, _ - T);
      else {
        const V = E[$] / v,
          U = _ * V;
        ((S[$] = Math.max(0, U)), (T += S[$]));
      }
    });
  }
  return S;
}
function kc(c) {
  const a = Object.keys(c),
    s = {};
  let k = 0;
  return (
    a.slice(0, -1).forEach((C) => {
      ((s[C] = Math.round(c[C])), (k += s[C]));
    }),
    (s[a[a.length - 1]] = 100 - k),
    s
  );
}
const { questions: ap } = ss,
  { causes: cp, defaultCredences: rs } = Kl;
function dp(c) {
  var a;
  return !((a = c.type) != null && a.startsWith('_'));
}
const De = ap.filter(dp);
function Bt(c) {
  return (c == null ? void 0 : c.type) === rt.INTERMISSION;
}
function es(c, a) {
  let s = 0;
  for (let k = 0; k < a; k++) Bt(c[k]) || s++;
  return s;
}
function fp(c) {
  {
    const a = c.type || rt.DEFAULT;
    return hc[a] || hc[rt.DEFAULT];
  }
}
const pp = De.filter((c) => !Bt(c)),
  ts = pp.length,
  vc = De.map((c) => {
    if (Bt(c)) return { ...c, type: rt.INTERMISSION };
    const a = fp(c);
    return {
      ...c,
      type: c.type || rt.DEFAULT,
      options: c.options.map((s, k) => ({ ...s, color: a[k] || a[0] })),
    };
  });
function xc() {
  return { credences: { ...rs }, originalCredences: null, inputMode: tp.OPTIONS, lockedKey: null };
}
function Ec() {
  return Object.fromEntries(De.filter((c) => !Bt(c)).map((c) => [c.id, xc()]));
}
const Cc = { currentStep: 'welcome', questions: Ec(), expandedPanel: null, debugConfig: null },
  Ge = {
    GO_TO_STEP: 'GO_TO_STEP',
    UPDATE_QUESTION: 'UPDATE_QUESTION',
    SET_EXPANDED_PANEL: 'SET_EXPANDED_PANEL',
    SAVE_ORIGINALS: 'SAVE_ORIGINALS',
    RESET_TO_ORIGINAL: 'RESET_TO_ORIGINAL',
    RESET_QUIZ: 'RESET_QUIZ',
    SET_DEBUG_CONFIG: 'SET_DEBUG_CONFIG',
    RESTORE_FROM_URL: 'RESTORE_FROM_URL',
  };
function mp(c, a, s) {
  return { ...c, questions: { ...c.questions, [a]: { ...c.questions[a], ...s } } };
}
function hp(c, a) {
  switch (a.type) {
    case Ge.GO_TO_STEP:
      return { ...c, currentStep: a.payload };
    case Ge.UPDATE_QUESTION:
      return mp(c, a.payload.questionId, a.payload.updates);
    case Ge.SET_EXPANDED_PANEL:
      return { ...c, expandedPanel: a.payload };
    case Ge.SAVE_ORIGINALS:
      return {
        ...c,
        questions: Object.fromEntries(
          Object.entries(c.questions).map(([s, k]) => [
            s,
            { ...k, originalCredences: k.originalCredences || { ...k.credences } },
          ])
        ),
      };
    case Ge.RESET_TO_ORIGINAL:
      return {
        ...c,
        questions: Object.fromEntries(
          Object.entries(c.questions).map(([s, k]) => [
            s,
            { ...k, credences: k.originalCredences ? { ...k.originalCredences } : k.credences },
          ])
        ),
      };
    case Ge.RESET_QUIZ:
      return { ...Cc, questions: Ec() };
    case Ge.RESTORE_FROM_URL: {
      const { credences: s } = a.payload,
        k = {};
      for (const [C, x] of Object.entries(s))
        k[C] = { ...xc(), credences: x, originalCredences: { ...x } };
      return { ...c, currentStep: 'results', questions: k };
    }
    case Ge.SET_DEBUG_CONFIG:
      return { ...c, debugConfig: a.payload };
    default:
      return c;
  }
}
const Nc = ee.createContext(null);
function vp({ children: c }) {
  const [a, s] = ee.useReducer(hp, Cc),
    [k, C] = ee.useState(null);
  ee.useEffect(() => {
    const F = bf();
    if (F) {
      if (F.error) {
        (C(F.error), mc(), window.setTimeout(() => C(null), 5e3));
        return;
      }
      F.credences && (s({ type: Ge.RESTORE_FROM_URL, payload: { credences: F.credences } }), mc());
    }
  }, []);
  const x = ee.useCallback((F) => {
      s({ type: Ge.GO_TO_STEP, payload: F });
    }, []),
    j = ee.useCallback((F, L) => {
      s({ type: Ge.UPDATE_QUESTION, payload: { questionId: F, updates: L } });
    }, []),
    E = ee.useCallback((F, L) => j(F, { credences: L }), [j]),
    p = ee.useCallback((F, L) => j(F, { inputMode: L }), [j]),
    v = ee.useCallback((F, L) => j(F, { lockedKey: L }), [j]),
    _ = ee.useCallback((F) => {
      s({ type: Ge.SET_EXPANDED_PANEL, payload: F });
    }, []),
    S = ee.useCallback(() => {
      s({ type: Ge.SAVE_ORIGINALS });
    }, []),
    T = ee.useCallback(() => {
      s({ type: Ge.RESET_TO_ORIGINAL });
    }, []),
    $ = ee.useCallback(() => {
      s({ type: Ge.RESET_QUIZ });
    }, []),
    b = ee.useCallback((F) => {
      s({ type: Ge.SET_DEBUG_CONFIG, payload: F });
    }, []),
    V = ee.useCallback((F) => De.findIndex((L) => L.id === F), []),
    U = ee.useCallback(
      (F) => {
        const L = V(F);
        return L === 0 ? 'welcome' : De[L - 1].id;
      },
      [V]
    ),
    q = ee.useCallback(
      (F) => {
        const L = V(F);
        return L === De.length - 1 ? 'results' : De[L + 1].id;
      },
      [V]
    ),
    le = ee.useCallback(() => {
      x(De[0].id);
    }, [x]),
    ne = ee.useCallback(() => {
      a.currentStep === 'results' ? x(De[De.length - 1].id) : x(U(a.currentStep));
    }, [a.currentStep, x, U]),
    Y = ee.useCallback(() => {
      const F = q(a.currentStep);
      (F === 'results' && S(), x(F));
    }, [a.currentStep, x, q, S]),
    J = ee.useCallback(
      (F) => {
        var h;
        const L = F === 'original' ? 'originalCredences' : 'credences',
          K = De.filter((P) => !Bt(P)),
          D = a.questions[(h = K[0]) == null ? void 0 : h.id];
        return F === 'original' && !(D != null && D.originalCredences)
          ? null
          : Object.fromEntries(
              K.map((P) => {
                var re;
                return [P.id, ((re = a.questions[P.id]) == null ? void 0 : re[L]) || rs];
              })
            );
      },
      [a.questions]
    ),
    N = ee.useCallback(
      (F, L) =>
        F
          ? { maxEV: lp(F, L), parliament: op(F, L), mergedFavorites: ip(F, L), maximin: sp(F, L) }
          : null,
      []
    ),
    z = ee.useMemo(() => N(J('current'), a.debugConfig), [J, N, a.debugConfig]),
    A = ee.useMemo(() => N(J('original'), a.debugConfig), [J, N, a.debugConfig]),
    Oe = ee.useMemo(
      () =>
        Object.values(a.questions).some(
          (F) =>
            F.originalCredences &&
            JSON.stringify(F.credences) !== JSON.stringify(F.originalCredences)
        ),
      [a.questions]
    ),
    fe = ee.useMemo(() => V(a.currentStep), [a.currentStep, V]),
    Et = ee.useMemo(() => (fe === -1 ? null : vc[fe]), [fe]),
    qe = ee.useMemo(() => {
      if (fe === -1) return -1;
      const F = De[fe],
        L = es(De, fe);
      return Bt(F) ? L : L + 1;
    }, [fe]),
    Ue = ee.useMemo(() => {
      if (fe === -1) return 0;
      const F = De[fe];
      return ((Bt(F) ? es(De, fe) : qe) / ts) * 100;
    }, [fe, qe]),
    Xe = ee.useMemo(() => {
      if (fe === -1) return '';
      const F = De[fe];
      return `Question ${Bt(F) ? es(De, fe) : qe} of ${ts}`;
    }, [fe, qe]),
    lt = ee.useMemo(() => {
      const F = {};
      return (
        De.filter((L) => !Bt(L)).forEach((L) => {
          const K = a.questions[L.id];
          K &&
            (F[L.id] = {
              credences: K.credences,
              setCredences: (D) => E(L.id, D),
              originalCredences: K.originalCredences,
              inputMode: K.inputMode,
              setInputMode: (D) => p(L.id, D),
              lockedKey: K.lockedKey,
              setLockedKey: (D) => v(L.id, D),
            });
        }),
        F
      );
    }, [a.questions, E, p, v]),
    $e = ee.useMemo(
      () => ({
        currentStep: a.currentStep,
        questions: a.questions,
        expandedPanel: a.expandedPanel,
        debugConfig: a.debugConfig,
        shareUrlError: k,
        questionsConfig: vc,
        causesConfig: cp,
        defaultCredences: rs,
        goToStep: x,
        setCredences: E,
        setInputMode: p,
        setLockedKey: v,
        setExpandedPanel: _,
        saveOriginals: S,
        resetToOriginal: T,
        resetQuiz: $,
        setDebugConfig: b,
        getQuestionIndex: V,
        getPrevStep: U,
        getNextStep: q,
        startQuiz: le,
        goBack: ne,
        goForward: Y,
        currentQuestion: Et,
        currentQuestionIndex: fe,
        totalQuestions: ts,
        progressPercentage: Ue,
        questionNumber: Xe,
        hasChanged: Oe,
        calculationResults: z,
        originalCalculationResults: A,
        stateMap: lt,
      }),
      [
        a.currentStep,
        a.questions,
        a.expandedPanel,
        a.debugConfig,
        k,
        x,
        E,
        p,
        v,
        _,
        S,
        T,
        $,
        b,
        V,
        U,
        q,
        le,
        ne,
        Y,
        Et,
        fe,
        Ue,
        Xe,
        Oe,
        z,
        A,
        lt,
      ]
    );
  return d.jsx(Nc.Provider, { value: $e, children: c });
}
const bl = ({ subtitle: c }) =>
  d.jsxs('header', {
    className: 'header',
    children: [
      d.jsxs('div', {
        className: 'header-brand',
        children: [
          d.jsx('img', {
            src: '/quiz-demo/prototypes/donor-compass-branding/NewLogoSVG.svg',
            alt: 'Rethink Priorities',
            height: '24',
          }),
          d.jsx('span', { className: 'header-title', children: 'Donor Compass' }),
        ],
      }),
      c && d.jsx('div', { className: 'header-subtitle', children: c }),
    ],
  });
function zr() {
  const c = ee.useContext(Nc);
  if (!c) throw new Error('useQuiz must be used within a QuizProvider');
  return c;
}
const yp = '_container_au1c0_3',
  gp = '_heading_au1c0_8',
  wp = '_headingEmphasis_au1c0_17',
  _p = '_intro_au1c0_29',
  Sp = '_infoBox_au1c0_37',
  kp = '_infoBoxLabel_au1c0_45',
  xp = '_infoBoxGrid_au1c0_52',
  Ep = '_infoBoxItem_au1c0_59',
  on = {
    container: yp,
    heading: gp,
    headingEmphasis: wp,
    intro: _p,
    infoBox: Sp,
    infoBoxLabel: kp,
    infoBoxGrid: xp,
    infoBoxItem: Ep,
  },
  Cp = {
    timeEstimate: '~3 minutes',
    headingLine1: 'Where Should Your',
    headingLine2: 'Giving Go?',
    intro:
      'Uncertain about your ethical views? This tool helps you allocate resources across different causes based on your moral credences—the probabilities you assign to different ethical perspectives.',
    startButton: 'Start Quiz →',
    previewLabel: "You'll be asked about:",
  },
  Np = { back: '← Back', continue: 'Continue →', backToQuiz: '← Back to Quiz' },
  jp = { modeToggle: { pickOne: 'Pick One', customMix: 'Custom Mix' } },
  Tp = {
    heading: 'Recommended Allocations',
    modifiedIndicator: '(modified)',
    adjustCredencesHeading: '🎛️ Adjust Your Credences',
    resetAllButton: 'Reset All',
    shareButton: 'Share Results',
    shareCopied: 'Link copied!',
    methods: {
      maxEV: {
        icon: '🎯',
        title: 'Max Expected Value',
        subtitle: '100% to highest EV',
        footerLabel: 'EVs:',
        footerText: null,
      },
      parliament: {
        icon: '🏛️',
        title: 'Variance Voting',
        subtitle: 'Weighted worldview votes',
        footerLabel: null,
        footerText: 'Each worldview votes for preferred cause',
      },
      mergedFavorites: {
        icon: '🤝',
        title: 'Merged Favorites',
        subtitle: 'Budget shares to favorites',
        footerLabel: null,
        footerText: 'Each worldview allocates its budget share',
      },
      maximin: {
        icon: '⚖️',
        title: 'Maximin (Egalitarian)',
        subtitle: 'Fairest to all worldviews',
        footerLabel: null,
        footerText: 'Maximizes minimum worldview utility',
      },
    },
  },
  Lp = {
    modifiedBadge: 'modified',
    sliderNote: 'Sliders auto-balance to 100%',
    resetButton: 'Reset',
  },
  Pp = { lockTooltip: 'Lock slider', unlockTooltip: 'Unlock slider' },
  he = { welcome: Cp, navigation: Np, questionScreen: jp, results: Tp, editPanel: Lp, sliders: Pp };
function Rp() {
  const { questionsConfig: c, startQuiz: a } = zr(),
    s = c.filter((k) => k.type !== rt.INTERMISSION);
  return d.jsxs('div', {
    className: 'screen',
    children: [
      d.jsx(bl, { subtitle: he.welcome.timeEstimate }),
      d.jsx('main', {
        className: 'screen-main',
        children: d.jsxs('div', {
          className: on.container,
          children: [
            d.jsxs('h1', {
              className: on.heading,
              children: [
                he.welcome.headingLine1,
                d.jsx('br', {}),
                d.jsx('span', { className: on.headingEmphasis, children: he.welcome.headingLine2 }),
              ],
            }),
            d.jsx('p', { className: on.intro, children: he.welcome.intro }),
            d.jsx('button', {
              onClick: a,
              className: 'btn btn-primary',
              children: he.welcome.startButton,
            }),
            d.jsxs('div', {
              className: on.infoBox,
              children: [
                d.jsx('div', { className: on.infoBoxLabel, children: he.welcome.previewLabel }),
                d.jsx('div', {
                  className: on.infoBoxGrid,
                  children: s.map((k) =>
                    d.jsxs(
                      'div',
                      { className: on.infoBoxItem, children: [k.emoji, ' ', k.previewText] },
                      k.id
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
const as = ({ percentage: c }) =>
  d.jsx('div', {
    className: 'progress-container',
    children: d.jsx('div', {
      className: 'progress-track',
      children: d.jsx('div', { className: 'progress-fill', style: { width: `${c}%` } }),
    }),
  });
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Op = (c) => c.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  jc = (...c) =>
    c
      .filter((a, s, k) => !!a && a.trim() !== '' && k.indexOf(a) === s)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ip = {
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
 */ const zp = ee.forwardRef(
  (
    {
      color: c = 'currentColor',
      size: a = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: k,
      className: C = '',
      children: x,
      iconNode: j,
      ...E
    },
    p
  ) =>
    ee.createElement(
      'svg',
      {
        ref: p,
        ...Ip,
        width: a,
        height: a,
        stroke: c,
        strokeWidth: k ? (Number(s) * 24) / Number(a) : s,
        className: jc('lucide', C),
        ...E,
      },
      [...j.map(([v, _]) => ee.createElement(v, _)), ...(Array.isArray(x) ? x : [x])]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sn = (c, a) => {
  const s = ee.forwardRef(({ className: k, ...C }, x) =>
    ee.createElement(zp, { ref: x, iconNode: a, className: jc(`lucide-${Op(c)}`, k), ...C })
  );
  return ((s.displayName = `${c}`), s);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tc = Sn('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mp = Sn('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dp = Sn('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lc = Sn('Lock', [
  ['rect', { width: '18', height: '11', x: '3', y: '11', rx: '2', ry: '2', key: '1w4ew1' }],
  ['path', { d: 'M7 11V7a5 5 0 0 1 10 0v4', key: 'fwvmzm' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ls = Sn('RotateCcw', [
  ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
  ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fp = Sn('Share2', [
  ['circle', { cx: '18', cy: '5', r: '3', key: 'gq8acd' }],
  ['circle', { cx: '6', cy: '12', r: '3', key: 'w7nqdw' }],
  ['circle', { cx: '18', cy: '19', r: '3', key: '1xt0gg' }],
  ['line', { x1: '8.59', x2: '15.42', y1: '13.51', y2: '17.49', key: '47mynk' }],
  ['line', { x1: '15.41', x2: '8.59', y1: '6.51', y2: '10.49', key: '1n3mei' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ap = Sn('SlidersVertical', [
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
  Bp = '_modeToggle_1eqly_3',
  Up = '_button_1eqly_10',
  $p = '_options_1eqly_23',
  Qp = '_active_1eqly_29',
  Hp = '_sliders_1eqly_35',
  _n = { modeToggle: Bp, button: Up, options: $p, active: Qp, sliders: Hp },
  Vp = ({ mode: c, setMode: a }) =>
    d.jsxs('div', {
      className: _n.modeToggle,
      children: [
        d.jsx('button', {
          onClick: () => a('options'),
          className: `${_n.button} ${_n.options} ${c === 'options' ? _n.active : ''}`,
          children: he.questionScreen.modeToggle.pickOne,
        }),
        d.jsxs('button', {
          onClick: () => a('sliders'),
          className: `${_n.button} ${_n.sliders} ${c === 'sliders' ? _n.active : ''}`,
          children: [d.jsx(Ap, { size: 14 }), he.questionScreen.modeToggle.customMix],
        }),
      ],
    }),
  Wp = '_optionButton_ms2pz_3',
  Gp = '_selected_ms2pz_20',
  qp = '_content_ms2pz_36',
  Kp = '_textContent_ms2pz_42',
  Yp = '_label_ms2pz_46',
  Xp = '_description_ms2pz_58',
  Zp = '_checkmark_ms2pz_64',
  At = {
    optionButton: Wp,
    default: '_default_ms2pz_15',
    selected: Gp,
    content: qp,
    textContent: Kp,
    label: Yp,
    description: Xp,
    checkmark: Zp,
  };
function Jp({
  label: c,
  description: a,
  optionKey: s,
  credences: k,
  setCredences: C,
  color: x,
  setInputMode: j,
}) {
  const E = k[s] === 100,
    p = () => {
      const v = Object.fromEntries(Object.keys(k).map((_) => [_, _ === s ? 100 : 0]));
      (C(v), j('options'));
    };
  return d.jsx('button', {
    onClick: p,
    className: `${At.optionButton} ${E ? At.selected : At.default}`,
    style: { '--option-color': x },
    children: d.jsxs('div', {
      className: At.content,
      children: [
        d.jsxs('div', {
          className: At.textContent,
          children: [
            d.jsx('div', { className: `${At.label} ${E ? At.selected : ''}`, children: c }),
            d.jsx('div', { className: At.description, children: a }),
          ],
        }),
        E && d.jsx('div', { className: At.checkmark, children: '✓' }),
      ],
    }),
  });
}
function Pc({ credences: c, isLocked: a, lockedKey: s, onChange: k }) {
  const [C, x] = ee.useState(null),
    [j, E] = ee.useState(!1),
    p = ee.useCallback(() => {
      a || (E(!0), x({ ...c }));
    }, [a, c]),
    v = ee.useCallback(
      (S) => {
        if (a || !j) return;
        E(!1);
        const T = parseFloat(S.target.value);
        (k(T, C, !0, s), x(null));
      },
      [a, j, C, s, k]
    ),
    _ = ee.useCallback(
      (S) => {
        if (a) return;
        const T = parseFloat(S.target.value);
        k(T, C, !1, s);
      },
      [a, C, s, k]
    );
  return {
    isDragging: j,
    dragHandlers: {
      onChange: _,
      onMouseDown: p,
      onMouseUp: v,
      onMouseLeave: v,
      onTouchStart: p,
      onTouchEnd: v,
    },
  };
}
function Rc({ sliderKey: c, lockedKey: a, credences: s }) {
  return ee.useMemo(() => {
    var p;
    const k = a === c,
      C = a && a !== c,
      x = C ? s[a] : 0,
      j = C ? 100 - x : 100,
      E = C ? `calc(${j}% + ${(50 - j) * 0.16}px)` : null;
    return {
      isLocked: k,
      hasLockedSibling: C,
      lockedValue: x,
      maxAllowed: j,
      thumbOffset: E,
      featureEnabled: ((p = ql.ui) == null ? void 0 : p.sliderLock) === !0,
    };
  }, [c, a, s]);
}
const bp = '_credenceSlider_yrqg7_4',
  em = '_header_yrqg7_8',
  tm = '_label_yrqg7_15',
  nm = '_description_yrqg7_22',
  rm = '_value_yrqg7_28',
  lm = '_sliderRow_yrqg7_35',
  om = '_sliderContainer_yrqg7_41',
  im = '_lockLimit_yrqg7_46',
  sm = '_lockButton_yrqg7_55',
  um = '_locked_yrqg7_73',
  am = '_compactSlider_yrqg7_91',
  cm = '_compactSelection_yrqg7_168',
  dm = '_selected_yrqg7_186',
  fm = '_selectionLabel_yrqg7_191',
  pm = '_selectionIndicator_yrqg7_202',
  Ee = {
    credenceSlider: bp,
    header: em,
    label: tm,
    description: nm,
    value: rm,
    sliderRow: lm,
    sliderContainer: om,
    lockLimit: im,
    lockButton: sm,
    locked: um,
    compactSlider: am,
    compactSelection: cm,
    selected: dm,
    selectionLabel: fm,
    selectionIndicator: pm,
  };
function mm({
  label: c,
  description: a,
  value: s,
  onChange: k,
  color: C,
  credences: x,
  sliderKey: j,
  lockedKey: E,
  setLockedKey: p,
}) {
  const {
      isLocked: v,
      hasLockedSibling: _,
      thumbOffset: S,
      featureEnabled: T,
    } = Rc({ sliderKey: j, lockedKey: E, credences: x }),
    { isDragging: $, dragHandlers: b } = Pc({
      credences: x,
      isLocked: v,
      lockedKey: E,
      onChange: k,
    }),
    V = () => {
      T && p(E === j ? null : j);
    },
    U = _
      ? `linear-gradient(to right, ${C} 0%, ${C} ${s}%, rgba(255,255,255,0.15) ${s}%, rgba(255,255,255,0.15) ${S}, rgba(255,255,255,0.08) ${S}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${C} 0%, ${C} ${s}%, rgba(255,255,255,0.15) ${s}%, rgba(255,255,255,0.15) 100%)`;
  return d.jsxs('div', {
    className: Ee.credenceSlider,
    children: [
      d.jsxs('div', {
        className: Ee.header,
        children: [
          d.jsxs('div', {
            children: [
              d.jsx('div', { className: Ee.label, children: c }),
              d.jsx('div', { className: Ee.description, children: a }),
            ],
          }),
          d.jsxs('div', {
            className: Ee.value,
            style: { color: C },
            children: [Math.round(s), '%'],
          }),
        ],
      }),
      d.jsxs('div', {
        className: Ee.sliderRow,
        children: [
          d.jsxs('div', {
            className: Ee.sliderContainer,
            children: [
              d.jsx('input', {
                type: 'range',
                min: '0',
                max: '100',
                step: 'any',
                value: s,
                ...b,
                'data-dragging': $,
                disabled: v,
                style: { background: U, cursor: v ? 'not-allowed' : 'pointer' },
              }),
              _ && d.jsx('div', { className: Ee.lockLimit, style: { left: S } }),
            ],
          }),
          T &&
            d.jsx('button', {
              className: `${Ee.lockButton} ${v ? Ee.locked : ''}`,
              onClick: V,
              title: v ? he.sliders.unlockTooltip : he.sliders.lockTooltip,
              type: 'button',
              children: d.jsx(Lc, { size: 16 }),
            }),
        ],
      }),
    ],
  });
}
const hm = '_container_9yo3m_3',
  vm = '_categoryLabel_9yo3m_8',
  ym = '_heading_9yo3m_16',
  gm = '_instructions_9yo3m_23',
  wm = '_buttonRow_9yo3m_30',
  Ir = { container: hm, categoryLabel: vm, heading: ym, instructions: gm, buttonRow: wm };
function _m(c, a, s) {
  return c === rt.SELECTION ? 'options' : c === rt.CREDENCE ? 'sliders' : a;
}
function Sm() {
  const {
    currentQuestion: c,
    stateMap: a,
    questionNumber: s,
    progressPercentage: k,
    goBack: C,
    goForward: x,
  } = zr();
  if (!c) return null;
  const j = a[c.id];
  if (!j) return null;
  const {
      credences: E,
      setCredences: p,
      inputMode: v,
      setInputMode: _,
      lockedKey: S,
      setLockedKey: T,
    } = j,
    $ = c.type || rt.DEFAULT,
    b = $ === rt.DEFAULT,
    V = _m($, v),
    U = V === 'options' ? c.instructionsOptions : c.instructionsSliders;
  return d.jsxs('div', {
    className: 'screen',
    children: [
      d.jsx(bl, { subtitle: s }),
      d.jsx(as, { percentage: k }),
      d.jsx('main', {
        className: 'screen-main',
        children: d.jsxs('div', {
          className: Ir.container,
          children: [
            d.jsx('div', {
              className: Ir.categoryLabel,
              style: { color: ep },
              children: c.categoryLabel,
            }),
            d.jsx('h2', { className: Ir.heading, children: c.heading }),
            d.jsx('p', { className: Ir.instructions, children: U }),
            b && d.jsx(Vp, { mode: v, setMode: _ }),
            d.jsx('div', {
              className: 'card',
              children:
                V === 'options'
                  ? c.options.map((q) =>
                      d.jsx(
                        Jp,
                        {
                          label: q.label,
                          description: q.description,
                          optionKey: q.key,
                          credences: E,
                          setCredences: p,
                          color: q.color,
                          setInputMode: _,
                        },
                        q.key
                      )
                    )
                  : c.options.map((q) =>
                      d.jsx(
                        mm,
                        {
                          label: q.label,
                          description: q.description,
                          value: E[q.key],
                          onChange: (le, ne, Y, J) => {
                            const N = Sc(q.key, le, E, ne, J);
                            p(Y ? kc(N) : N);
                          },
                          color: q.color,
                          credences: E,
                          sliderKey: q.key,
                          lockedKey: S,
                          setLockedKey: T,
                        },
                        q.key
                      )
                    ),
            }),
            d.jsxs('div', {
              className: Ir.buttonRow,
              children: [
                d.jsx('button', {
                  onClick: C,
                  className: 'btn btn-secondary',
                  children: he.navigation.back,
                }),
                d.jsx('button', {
                  onClick: x,
                  className: 'btn btn-primary',
                  children: he.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const km = '_causeBar_as0sb_3',
  xm = '_header_as0sb_7',
  Em = '_name_as0sb_15',
  Cm = '_percentage_as0sb_19',
  Nm = '_changeIndicator_as0sb_23',
  jm = '_up_as0sb_27',
  Tm = '_down_as0sb_31',
  Lm = '_barTrack_as0sb_35',
  Pm = '_barOriginal_as0sb_43',
  Rm = '_barFill_as0sb_49',
  Om = '_barLabel_as0sb_58',
  Im = '_compact_as0sb_65',
  vt = {
    causeBar: km,
    header: xm,
    name: Em,
    percentage: Cm,
    changeIndicator: Nm,
    up: jm,
    down: Tm,
    barTrack: Lm,
    barOriginal: Pm,
    barFill: Rm,
    barLabel: Om,
    compact: Im,
  },
  zm = ({
    name: c,
    percentage: a,
    color: s,
    originalPercentage: k = null,
    hasChanged: C = !1,
    simpleMode: x = !1,
  }) => {
    const j = !x && C && k !== null && a !== k,
      E = j && a > k;
    return d.jsxs('div', {
      className: `${vt.causeBar} ${x ? vt.compact : ''}`,
      children: [
        d.jsxs('div', {
          className: vt.header,
          children: [
            d.jsx('span', { className: vt.name, children: c }),
            d.jsxs('span', {
              className: vt.percentage,
              style: { color: s },
              children: [
                a.toFixed(0),
                '%',
                j &&
                  d.jsx('span', {
                    className: `${vt.changeIndicator} ${E ? vt.up : vt.down}`,
                    children: E ? '↑' : '↓',
                  }),
              ],
            }),
          ],
        }),
        d.jsxs('div', {
          className: vt.barTrack,
          children: [
            j &&
              d.jsx('div', { className: vt.barOriginal, style: { width: `${k}%`, background: s } }),
            d.jsx('div', {
              className: vt.barFill,
              style: { width: `${a}%`, background: s },
              children:
                a > 15 && d.jsxs('span', { className: vt.barLabel, children: [a.toFixed(0), '%'] }),
            }),
          ],
        }),
      ],
    });
  },
  Mm = '_resultsContainer_1nyet_3',
  Dm = '_inner_1nyet_11',
  Fm = '_resultsHeader_1nyet_16',
  Am = '_title_1nyet_21',
  Bm = '_modifiedIndicator_1nyet_27',
  Um = '_resultsGrid_1nyet_34',
  $m = '_comparisonContainer_1nyet_42',
  Qm = '_originalResults_1nyet_49',
  Hm = '_newResults_1nyet_50',
  Vm = '_slideInLeft_1nyet_1',
  Wm = '_slideInRight_1nyet_1',
  Gm = '_comparisonDivider_1nyet_85',
  qm = '_dividerLine_1nyet_94',
  Km = '_dividerArrow_1nyet_101',
  Ym = '_compactGrid_1nyet_108',
  Xm = '_compactCard_1nyet_114',
  Zm = '_cardHeader_1nyet_118',
  Jm = '_cardIcon_1nyet_122',
  bm = '_cardTitle_1nyet_128',
  eh = '_resultCard_1nyet_132',
  th = '_maxEV_1nyet_156',
  nh = '_parliament_1nyet_160',
  rh = '_cardSubtitle_1nyet_171',
  lh = '_cardFooter_1nyet_177',
  oh = '_adjustPanel_1nyet_185',
  ih = '_adjustHeader_1nyet_193',
  sh = '_adjustTitle_1nyet_200',
  uh = '_resetAllButton_1nyet_206',
  ah = '_panelList_1nyet_223',
  ch = '_backButtonContainer_1nyet_229',
  dh = '_copied_1nyet_237',
  fh = '_resetDanger_1nyet_244',
  de = {
    resultsContainer: Mm,
    inner: Dm,
    resultsHeader: Fm,
    title: Am,
    modifiedIndicator: Bm,
    resultsGrid: Um,
    comparisonContainer: $m,
    originalResults: Qm,
    newResults: Hm,
    slideInLeft: Vm,
    slideInRight: Wm,
    comparisonDivider: Gm,
    dividerLine: qm,
    dividerArrow: Km,
    compactGrid: Ym,
    compactCard: Xm,
    cardHeader: Zm,
    cardIcon: Jm,
    cardTitle: bm,
    resultCard: eh,
    maxEV: th,
    parliament: nh,
    cardSubtitle: rh,
    cardFooter: lh,
    adjustPanel: oh,
    adjustHeader: ih,
    adjustTitle: sh,
    resetAllButton: uh,
    panelList: ah,
    backButtonContainer: ch,
    copied: dh,
    resetDanger: fh,
  };
function os({
  methodKey: c,
  results: a,
  evs: s = null,
  originalResults: k = null,
  causeEntries: C,
  hasChanged: x = !1,
  simpleMode: j = !1,
}) {
  const E = he.results.methods[c],
    p = c === 'mergedFavorites' ? 'merged' : c,
    v = s
      ? `${E.footerLabel} ${C.map(([_, S]) => `${S.name.slice(0, 2)} ${s[_].toFixed(0)}`).join(' · ')}`
      : E.footerText;
  return d.jsxs('div', {
    className: `${de.resultCard} ${j ? de.compactCard : ''}`,
    children: [
      d.jsxs('div', {
        className: de.cardHeader,
        children: [
          d.jsx('div', { className: `${de.cardIcon} ${de[p]}`, children: E.icon }),
          d.jsxs('div', {
            children: [
              d.jsx('h3', { className: de.cardTitle, children: E.title }),
              !j && d.jsx('p', { className: de.cardSubtitle, children: E.subtitle }),
            ],
          }),
        ],
      }),
      C.map(([_, S]) =>
        d.jsx(
          zm,
          {
            name: S.name,
            percentage: a[_],
            originalPercentage: k == null ? void 0 : k[_],
            color: S.color,
            hasChanged: !j && x,
            simpleMode: j,
          },
          _
        )
      ),
      !j && d.jsx('div', { className: de.cardFooter, children: v }),
    ],
  });
}
const ph = '_container_1m8cr_3',
  mh = '_title_1m8cr_8',
  hh = '_body_1m8cr_16',
  vh = '_buttonRow_1m8cr_25',
  Gl = { container: ph, title: mh, body: hh, buttonRow: vh };
function yh() {
  const {
    currentQuestion: c,
    questionNumber: a,
    progressPercentage: s,
    calculationResults: k,
    causesConfig: C,
    goBack: x,
    goForward: j,
  } = zr();
  if (!c) return null;
  const E = Object.entries(C),
    v = [
      { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
      { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
      { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
      { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
    ].filter((_) => {
      var S;
      return ((S = ql.calculations) == null ? void 0 : S[_.flag]) === !0;
    });
  return d.jsxs('div', {
    className: 'screen',
    children: [
      d.jsx(bl, { subtitle: a }),
      d.jsx(as, { percentage: s }),
      d.jsx('main', {
        className: 'screen-main',
        children: d.jsxs('div', {
          className: Gl.container,
          children: [
            d.jsx('h2', { className: Gl.title, children: c.title }),
            d.jsx('p', { className: Gl.body, children: c.body }),
            d.jsx('div', {
              className: de.resultsGrid,
              children: v.map((_) =>
                d.jsx(
                  os,
                  {
                    methodKey: _.key,
                    results: k[_.key],
                    evs: _.hasEvs ? k[_.key].evs : null,
                    causeEntries: E,
                  },
                  _.key
                )
              ),
            }),
            d.jsxs('div', {
              className: Gl.buttonRow,
              children: [
                d.jsx('button', {
                  onClick: x,
                  className: 'btn btn-secondary',
                  children: he.navigation.back,
                }),
                d.jsx('button', {
                  onClick: j,
                  className: 'btn btn-primary',
                  children: he.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function gh({
  label: c,
  value: a,
  onChange: s,
  color: k,
  credences: C,
  sliderKey: x,
  lockedKey: j,
  setLockedKey: E,
}) {
  const {
      isLocked: p,
      hasLockedSibling: v,
      thumbOffset: _,
      featureEnabled: S,
    } = Rc({ sliderKey: x, lockedKey: j, credences: C }),
    { isDragging: T, dragHandlers: $ } = Pc({
      credences: C,
      isLocked: p,
      lockedKey: j,
      onChange: s,
    }),
    b = () => {
      S && E(j === x ? null : x);
    },
    V = v
      ? `linear-gradient(to right, ${k} 0%, ${k} ${a}%, rgba(255,255,255,0.15) ${a}%, rgba(255,255,255,0.15) ${_}, rgba(255,255,255,0.08) ${_}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${k} 0%, ${k} ${a}%, rgba(255,255,255,0.15) ${a}%, rgba(255,255,255,0.15) 100%)`;
  return d.jsxs('div', {
    className: Ee.compactSlider,
    children: [
      d.jsxs('div', {
        className: Ee.header,
        children: [
          d.jsx('span', { className: Ee.label, children: c }),
          d.jsxs('span', {
            className: Ee.value,
            style: { color: k },
            children: [Math.round(a), '%'],
          }),
        ],
      }),
      d.jsxs('div', {
        className: Ee.sliderRow,
        children: [
          d.jsxs('div', {
            className: Ee.sliderContainer,
            children: [
              d.jsx('input', {
                type: 'range',
                min: '0',
                max: '100',
                step: 'any',
                value: a,
                ...$,
                'data-dragging': T,
                disabled: p,
                style: { background: V, cursor: p ? 'not-allowed' : 'pointer' },
              }),
              v && d.jsx('div', { className: Ee.lockLimit, style: { left: _ } }),
            ],
          }),
          S &&
            d.jsx('button', {
              className: `${Ee.lockButton} ${p ? Ee.locked : ''}`,
              onClick: b,
              title: p ? he.sliders.unlockTooltip : he.sliders.lockTooltip,
              type: 'button',
              children: d.jsx(Lc, { size: 14 }),
            }),
        ],
      }),
    ],
  });
}
function wh({ label: c, color: a, isSelected: s, onSelect: k }) {
  return d.jsxs('button', {
    type: 'button',
    onClick: k,
    className: `${Ee.compactSelection} ${s ? Ee.selected : ''}`,
    style: { '--selection-color': a },
    children: [
      d.jsx('span', { className: Ee.selectionLabel, children: c }),
      d.jsx('span', {
        className: Ee.selectionIndicator,
        style: { borderColor: s ? a : void 0, backgroundColor: s ? a : void 0 },
        children: s && d.jsx(Tc, { size: 12, strokeWidth: 3 }),
      }),
    ],
  });
}
const _h = '_editPanel_1er15_3',
  Sh = '_expanded_1er15_11',
  kh = '_toggleButton_1er15_16',
  xh = '_buttonContent_1er15_33',
  Eh = '_icon_1er15_39',
  Ch = '_title_1er15_43',
  Nh = '_modifiedBadge_1er15_48',
  jh = '_preview_1er15_56',
  Th = '_chevron_1er15_62',
  Lh = '_content_1er15_66',
  Ph = '_footer_1er15_71',
  Rh = '_footerNote_1er15_78',
  Oh = '_resetButton_1er15_84',
  Ih = '_selectionRow_1er15_103',
  Be = {
    editPanel: _h,
    expanded: Sh,
    toggleButton: kh,
    buttonContent: xh,
    icon: Eh,
    title: Ch,
    modifiedBadge: Nh,
    preview: jh,
    chevron: Th,
    content: Lh,
    footer: Ph,
    footerNote: Rh,
    resetButton: Oh,
    selectionRow: Ih,
  };
function zh({
  title: c,
  icon: a,
  credences: s,
  setCredences: k,
  originalCredences: C,
  configs: x,
  isExpanded: j,
  onToggle: E,
  lockedKey: p,
  setLockedKey: v,
  questionType: _ = rt.DEFAULT,
}) {
  const S = C && JSON.stringify(s) !== JSON.stringify(C),
    T = _ === rt.SELECTION,
    $ = (U) => {
      const q = {};
      (x.forEach((le) => {
        q[le.key] = le.key === U ? 100 : 0;
      }),
        k(q));
    },
    b = (U) => {
      (U.stopPropagation(), k({ ...C }));
    },
    V = x.map((U) => `${U.short}:${s[U.key]}%`).join(' ');
  return d.jsxs('div', {
    className: `${Be.editPanel} ${j ? Be.expanded : ''}`,
    children: [
      d.jsxs('button', {
        onClick: E,
        className: Be.toggleButton,
        children: [
          d.jsxs('div', {
            className: Be.buttonContent,
            children: [
              d.jsx('span', { className: Be.icon, children: a }),
              d.jsx('span', { className: Be.title, children: c }),
              S &&
                d.jsx('span', {
                  className: Be.modifiedBadge,
                  children: he.editPanel.modifiedBadge,
                }),
              !j && d.jsx('span', { className: Be.preview, children: V }),
            ],
          }),
          d.jsx('span', {
            className: Be.chevron,
            children: j ? d.jsx(Dp, { size: 16 }) : d.jsx(Mp, { size: 16 }),
          }),
        ],
      }),
      j &&
        d.jsx('div', {
          className: Be.content,
          children: T
            ? d.jsxs(d.Fragment, {
                children: [
                  d.jsx('div', {
                    className: Be.selectionRow,
                    children: x.map((U) =>
                      d.jsx(
                        wh,
                        {
                          label: U.label,
                          color: U.color,
                          isSelected: s[U.key] === 100,
                          onSelect: () => $(U.key),
                        },
                        U.key
                      )
                    ),
                  }),
                  d.jsxs('div', {
                    className: Be.footer,
                    children: [
                      d.jsx('span', {
                        className: Be.footerNote,
                        children: he.editPanel.selectionNote || 'Pick one option',
                      }),
                      S &&
                        d.jsxs('button', {
                          onClick: b,
                          className: Be.resetButton,
                          children: [d.jsx(ls, { size: 10 }), ' ', he.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              })
            : d.jsxs(d.Fragment, {
                children: [
                  x.map((U) =>
                    d.jsx(
                      gh,
                      {
                        label: U.label,
                        value: s[U.key],
                        onChange: (q, le, ne, Y) => {
                          const J = Sc(U.key, q, s, le, Y);
                          k(ne ? kc(J) : J);
                        },
                        color: U.color,
                        credences: s,
                        sliderKey: U.key,
                        lockedKey: p,
                        setLockedKey: v,
                      },
                      U.key
                    )
                  ),
                  d.jsxs('div', {
                    className: Be.footer,
                    children: [
                      d.jsx('span', {
                        className: Be.footerNote,
                        children: he.editPanel.sliderNote,
                      }),
                      S &&
                        d.jsxs('button', {
                          onClick: b,
                          className: Be.resetButton,
                          children: [d.jsx(ls, { size: 10 }), ' ', he.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              }),
        }),
    ],
  });
}
function Mh() {
  var J;
  const {
      questionsConfig: c,
      causesConfig: a,
      stateMap: s,
      expandedPanel: k,
      setExpandedPanel: C,
      calculationResults: x,
      originalCalculationResults: j,
      hasChanged: E,
      resetToOriginal: p,
      resetQuiz: v,
      goBack: _,
    } = zr(),
    [S, T] = ee.useState(!1),
    $ = Object.entries(a),
    V = [
      { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
      { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
      { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
      { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
    ].filter((N) => {
      var z;
      return ((z = ql.calculations) == null ? void 0 : z[N.flag]) === !0;
    }),
    U = async () => {
      const N = Object.fromEntries(Object.entries(s).map(([Oe, fe]) => [Oe, fe.credences])),
        z = Jf(N),
        A = () => {
          (T(!0), window.setTimeout(() => T(!1), 2e3));
        };
      try {
        await navigator.clipboard.writeText(z);
      } catch {
        const Oe = document.createElement('textarea');
        ((Oe.value = z),
          document.body.appendChild(Oe),
          Oe.select(),
          document.execCommand('copy'),
          document.body.removeChild(Oe));
      }
      A();
    },
    q = (N) =>
      N.options.map((z) => ({
        key: z.key,
        label: z.panelLabel,
        short: z.panelShort,
        color: z.color,
      })),
    le = c.filter((N) => N.type !== rt.INTERMISSION),
    ne = (N) =>
      d.jsx('div', {
        className: `${de.resultsGrid} ${de.compactGrid}`,
        children: V.map((z) => {
          const A = N == null ? void 0 : N[z.key];
          return A
            ? d.jsx(
                os,
                {
                  methodKey: z.key,
                  results: A,
                  evs: z.hasEvs ? A.evs : null,
                  causeEntries: $,
                  simpleMode: !0,
                },
                z.key
              )
            : null;
        }),
      }),
    Y = () =>
      d.jsx('div', {
        className: de.resultsGrid,
        children: V.map((N) => {
          const z = x == null ? void 0 : x[N.key];
          return z
            ? d.jsx(
                os,
                {
                  methodKey: N.key,
                  results: z,
                  evs: N.hasEvs ? z.evs : null,
                  originalResults: j == null ? void 0 : j[N.key],
                  causeEntries: $,
                  hasChanged: E,
                },
                N.key
              )
            : null;
        }),
      });
  return d.jsxs('div', {
    className: de.resultsContainer,
    children: [
      d.jsx(bl, {}),
      d.jsx(as, { percentage: 100 }),
      d.jsxs('div', {
        className: de.inner,
        children: [
          d.jsx('div', {
            className: de.resultsHeader,
            children: d.jsxs('h1', {
              className: de.title,
              children: [
                he.results.heading,
                E &&
                  d.jsx('span', {
                    className: de.modifiedIndicator,
                    children: he.results.modifiedIndicator,
                  }),
              ],
            }),
          }),
          E
            ? d.jsxs('div', {
                className: de.comparisonContainer,
                children: [
                  d.jsx('div', { className: de.originalResults, children: ne(j) }),
                  d.jsxs('div', {
                    className: de.comparisonDivider,
                    children: [
                      d.jsx('div', { className: de.dividerLine }),
                      d.jsx('div', { className: de.dividerArrow, children: '→' }),
                      d.jsx('div', { className: de.dividerLine }),
                    ],
                  }),
                  d.jsx('div', { className: de.newResults, children: ne(x) }),
                ],
              })
            : Y(),
          d.jsxs('div', {
            className: de.adjustPanel,
            children: [
              d.jsxs('div', {
                className: de.adjustHeader,
                children: [
                  d.jsx('span', {
                    className: de.adjustTitle,
                    children: he.results.adjustCredencesHeading,
                  }),
                  E &&
                    d.jsxs('button', {
                      onClick: p,
                      className: de.resetAllButton,
                      children: [d.jsx(ls, { size: 10 }), ' ', he.results.resetAllButton],
                    }),
                ],
              }),
              d.jsx('div', {
                className: de.panelList,
                children: le.map((N) => {
                  const z = s[N.id];
                  return z
                    ? d.jsx(
                        zh,
                        {
                          title: N.editPanelTitle,
                          icon: N.emoji,
                          credences: z.credences,
                          setCredences: z.setCredences,
                          originalCredences: z.originalCredences,
                          configs: q(N),
                          isExpanded: k === N.id,
                          onToggle: () => C(k === N.id ? null : N.id),
                          lockedKey: z.lockedKey,
                          setLockedKey: z.setLockedKey,
                          questionType: N.type,
                        },
                        N.id
                      )
                    : null;
                }),
              }),
            ],
          }),
          d.jsxs('div', {
            className: de.backButtonContainer,
            children: [
              d.jsx('button', {
                onClick: _,
                className: 'btn btn-secondary',
                children: he.navigation.backToQuiz,
              }),
              d.jsxs('button', {
                onClick: U,
                className: `btn btn-secondary ${S ? de.copied : ''}`,
                children: [
                  S ? d.jsx(Tc, { size: 16 }) : d.jsx(Fp, { size: 16 }),
                  S ? he.results.shareCopied : he.results.shareButton,
                ],
              }),
              (J = ql.ui) == null ? void 0 : J.resetButton,
            ],
          }),
        ],
      }),
    ],
  });
}
const Dh = '_debugButton_1fvy0_4',
  Fh = '_overlay_1fvy0_22',
  Ah = '_modal_1fvy0_35',
  Bh = '_header_1fvy0_46',
  Uh = '_closeButton_1fvy0_60',
  $h = '_content_1fvy0_73',
  Qh = '_section_1fvy0_79',
  Hh = '_causeBlock_1fvy0_93',
  Vh = '_fieldRow_1fvy0_106',
  Wh = '_checkboxRow_1fvy0_130',
  Gh = '_multiplierGroup_1fvy0_149',
  qh = '_dimInfo_1fvy0_159',
  Kh = '_multiplierRow_1fvy0_166',
  Yh = '_footer_1fvy0_190',
  Xh = '_saveButton_1fvy0_197',
  Re = {
    debugButton: Dh,
    overlay: Fh,
    modal: Ah,
    header: Bh,
    closeButton: Uh,
    content: $h,
    section: Qh,
    causeBlock: Hh,
    fieldRow: Vh,
    checkboxRow: Wh,
    multiplierGroup: Gh,
    dimInfo: qh,
    multiplierRow: Kh,
    footer: Yh,
    saveButton: Xh,
  },
  { causes: Zh, diminishingReturns: Jh } = Kl,
  bh = _c(!0),
  ev = ({ onConfigChange: c }) => {
    const [a, s] = ee.useState(!1),
      [k, C] = ee.useState({
        causes: JSON.parse(JSON.stringify(Zh)),
        dimensions: JSON.parse(JSON.stringify(bh)),
        diminishingReturns: Jh,
      }),
      x = (p, v, _) => {
        C((S) => ({
          ...S,
          causes: {
            ...S.causes,
            [p]: {
              ...S.causes[p],
              [v]: v === 'name' || v === 'color' || typeof _ == 'boolean' ? _ : Number(_),
            },
          },
        }));
      },
      j = (p, v, _) => {
        C((S) => ({
          ...S,
          dimensions: {
            ...S.dimensions,
            [p]: { ...S.dimensions[p], options: { ...S.dimensions[p].options, [v]: Number(_) } },
          },
        }));
      },
      E = () => {
        (c(k), s(!1));
      };
    return d.jsxs(d.Fragment, {
      children: [
        d.jsx('button', {
          className: Re.debugButton,
          onClick: () => s(!0),
          title: 'Debug Settings',
          children: 'Settings',
        }),
        a &&
          d.jsx('div', {
            className: Re.overlay,
            onClick: () => s(!1),
            children: d.jsxs('div', {
              className: Re.modal,
              onClick: (p) => p.stopPropagation(),
              children: [
                d.jsxs('div', {
                  className: Re.header,
                  children: [
                    d.jsx('h2', { children: 'Calculation Debugger' }),
                    d.jsx('button', {
                      className: Re.closeButton,
                      onClick: () => s(!1),
                      children: 'x',
                    }),
                  ],
                }),
                d.jsxs('div', {
                  className: Re.content,
                  children: [
                    d.jsxs('section', {
                      className: Re.section,
                      children: [
                        d.jsx('h3', { children: 'DIMINISHING RETURNS' }),
                        d.jsx('div', {
                          className: Re.fieldRow,
                          children: d.jsxs('label', {
                            children: [
                              'Mode:',
                              d.jsx('select', {
                                value: k.diminishingReturns,
                                onChange: (p) =>
                                  C((v) => ({ ...v, diminishingReturns: p.target.value })),
                                children: Object.keys(ns).map((p) =>
                                  d.jsxs(
                                    'option',
                                    { value: p, children: [p, ' (power = ', ns[p], ')'] },
                                    p
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                        d.jsx('p', {
                          className: Re.dimInfo,
                          children:
                            'none = winner-take-all · sqrt = moderate spreading · extreme = near-equal',
                        }),
                      ],
                    }),
                    d.jsxs('section', {
                      className: Re.section,
                      children: [
                        d.jsx('h3', { children: 'CAUSES' }),
                        Object.entries(k.causes).map(([p, v]) =>
                          d.jsxs(
                            'div',
                            {
                              className: Re.causeBlock,
                              children: [
                                d.jsx('h4', { children: v.name }),
                                d.jsxs('div', {
                                  className: Re.fieldRow,
                                  children: [
                                    d.jsxs('label', {
                                      children: [
                                        'Points:',
                                        d.jsx('input', {
                                          type: 'number',
                                          value: v.points,
                                          onChange: (_) => x(p, 'points', _.target.value),
                                        }),
                                      ],
                                    }),
                                    d.jsxs('label', {
                                      children: [
                                        'Scale Factor:',
                                        d.jsx('input', {
                                          type: 'number',
                                          value: v.scaleFactor,
                                          onChange: (_) => x(p, 'scaleFactor', _.target.value),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                d.jsxs('div', {
                                  className: Re.checkboxRow,
                                  children: [
                                    d.jsxs('label', {
                                      children: [
                                        d.jsx('input', {
                                          type: 'checkbox',
                                          checked: v.helpsAnimals,
                                          onChange: (_) => x(p, 'helpsAnimals', _.target.checked),
                                        }),
                                        'Helps Animals',
                                      ],
                                    }),
                                    d.jsxs('label', {
                                      children: [
                                        d.jsx('input', {
                                          type: 'checkbox',
                                          checked: v.helpsFutureHumans,
                                          onChange: (_) =>
                                            x(p, 'helpsFutureHumans', _.target.checked),
                                        }),
                                        'Helps Future Humans',
                                      ],
                                    }),
                                    d.jsxs('label', {
                                      children: [
                                        d.jsx('input', {
                                          type: 'checkbox',
                                          checked: v.isSpeculative,
                                          onChange: (_) => x(p, 'isSpeculative', _.target.checked),
                                        }),
                                        'Is Speculative',
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            p
                          )
                        ),
                      ],
                    }),
                    d.jsxs('section', {
                      className: Re.section,
                      children: [
                        d.jsx('h3', { children: 'DIMENSIONS (from questions)' }),
                        Object.entries(k.dimensions).map(([p, v]) =>
                          d.jsxs(
                            'div',
                            {
                              className: Re.multiplierGroup,
                              children: [
                                d.jsx('h4', { children: v.name }),
                                d.jsx('p', {
                                  className: Re.dimInfo,
                                  children:
                                    v.applyAs === 'multiplier'
                                      ? `Multiplier when: ${v.appliesWhen}`
                                      : `Exponent on: ${v.appliesTo}`,
                                }),
                                d.jsx('div', {
                                  className: Re.multiplierRow,
                                  children: Object.entries(v.options).map(([_, S]) =>
                                    d.jsxs(
                                      'label',
                                      {
                                        children: [
                                          _,
                                          ':',
                                          d.jsx('input', {
                                            type: 'number',
                                            step: v.applyAs === 'exponent' ? '0.1' : '0.01',
                                            value: S,
                                            onChange: (T) => j(p, _, T.target.value),
                                          }),
                                        ],
                                      },
                                      _
                                    )
                                  ),
                                }),
                              ],
                            },
                            p
                          )
                        ),
                      ],
                    }),
                  ],
                }),
                d.jsx('div', {
                  className: Re.footer,
                  children: d.jsx('button', {
                    className: Re.saveButton,
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
  tv = {
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
function nv() {
  const { currentStep: c, currentQuestion: a, setDebugConfig: s, shareUrlError: k } = zr();
  function C() {
    return c === 'welcome'
      ? d.jsx(Rp, {})
      : c === 'results'
        ? d.jsx(Mh, {})
        : a
          ? a.type === rt.INTERMISSION
            ? d.jsx(yh, {})
            : d.jsx(Sm, {})
          : null;
  }
  return d.jsxs(d.Fragment, {
    children: [
      k && d.jsx('div', { style: tv, children: k }),
      C(),
      d.jsx(ev, { onConfigChange: s }),
    ],
  });
}
function rv() {
  return d.jsx(vp, { children: d.jsx(nv, {}) });
}
Af.createRoot(document.getElementById('root')).render(
  d.jsx(ee.StrictMode, { children: d.jsx(rv, {}) })
);
