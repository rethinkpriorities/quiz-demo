(function () {
  const a = document.createElement('link').relList;
  if (a && a.supports && a.supports('modulepreload')) return;
  for (const E of document.querySelectorAll('link[rel="modulepreload"]')) k(E);
  new MutationObserver((E) => {
    for (const x of E)
      if (x.type === 'childList')
        for (const N of x.addedNodes) N.tagName === 'LINK' && N.rel === 'modulepreload' && k(N);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(E) {
    const x = {};
    return (
      E.integrity && (x.integrity = E.integrity),
      E.referrerPolicy && (x.referrerPolicy = E.referrerPolicy),
      E.crossOrigin === 'use-credentials'
        ? (x.credentials = 'include')
        : E.crossOrigin === 'anonymous'
          ? (x.credentials = 'omit')
          : (x.credentials = 'same-origin'),
      x
    );
  }
  function k(E) {
    if (E.ep) return;
    E.ep = !0;
    const x = s(E);
    fetch(E.href, x);
  }
})();
function Lf(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, 'default') ? c.default : c;
}
var Ki = { exports: {} },
  Rr = {},
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
 */ var rc;
function Pf() {
  if (rc) return oe;
  rc = 1;
  var c = Symbol.for('react.element'),
    a = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    k = Symbol.for('react.strict_mode'),
    E = Symbol.for('react.profiler'),
    x = Symbol.for('react.provider'),
    N = Symbol.for('react.context'),
    C = Symbol.for('react.forward_ref'),
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
    G = {};
  function U(h, P, re) {
    ((this.props = h), (this.context = P), (this.refs = G), (this.updater = re || $));
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
  function K() {}
  K.prototype = U.prototype;
  function le(h, P, re) {
    ((this.props = h), (this.context = P), (this.refs = G), (this.updater = re || $));
  }
  var ne = (le.prototype = new K());
  ((ne.constructor = le), b(ne, U.prototype), (ne.isPureReactComponent = !0));
  var X = Array.isArray,
    F = Object.prototype.hasOwnProperty,
    j = { current: null },
    Q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(h, P, re) {
    var ie,
      ue = {},
      ae = null,
      he = null;
    if (P != null)
      for (ie in (P.ref !== void 0 && (he = P.ref), P.key !== void 0 && (ae = '' + P.key), P))
        F.call(P, ie) && !Q.hasOwnProperty(ie) && (ue[ie] = P[ie]);
    var de = arguments.length - 2;
    if (de === 1) ue.children = re;
    else if (1 < de) {
      for (var we = Array(de), ot = 0; ot < de; ot++) we[ot] = arguments[ot + 2];
      ue.children = we;
    }
    if (h && h.defaultProps)
      for (ie in ((de = h.defaultProps), de)) ue[ie] === void 0 && (ue[ie] = de[ie]);
    return { $$typeof: c, type: h, key: ae, ref: he, props: ue, _owner: j.current };
  }
  function rt(h, P) {
    return { $$typeof: c, type: h.type, key: P, ref: h.ref, props: h.props, _owner: h._owner };
  }
  function me(h) {
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
  var Ge = /\/+/g;
  function Be(h, P) {
    return typeof h == 'object' && h !== null && h.key != null ? Et('' + h.key) : P.toString(36);
  }
  function Ye(h, P, re, ie, ue) {
    var ae = typeof h;
    (ae === 'undefined' || ae === 'boolean') && (h = null);
    var he = !1;
    if (h === null) he = !0;
    else
      switch (ae) {
        case 'string':
        case 'number':
          he = !0;
          break;
        case 'object':
          switch (h.$$typeof) {
            case c:
            case a:
              he = !0;
          }
      }
    if (he)
      return (
        (he = h),
        (ue = ue(he)),
        (h = ie === '' ? '.' + Be(he, 0) : ie),
        X(ue)
          ? ((re = ''),
            h != null && (re = h.replace(Ge, '$&/') + '/'),
            Ye(ue, P, re, '', function (ot) {
              return ot;
            }))
          : ue != null &&
            (me(ue) &&
              (ue = rt(
                ue,
                re +
                  (!ue.key || (he && he.key === ue.key)
                    ? ''
                    : ('' + ue.key).replace(Ge, '$&/') + '/') +
                  h
              )),
            P.push(ue)),
        1
      );
    if (((he = 0), (ie = ie === '' ? '.' : ie + ':'), X(h)))
      for (var de = 0; de < h.length; de++) {
        ae = h[de];
        var we = ie + Be(ae, de);
        he += Ye(ae, P, re, we, ue);
      }
    else if (((we = T(h)), typeof we == 'function'))
      for (h = we.call(h), de = 0; !(ae = h.next()).done; )
        ((ae = ae.value), (we = ie + Be(ae, de++)), (he += Ye(ae, P, re, we, ue)));
    else if (ae === 'object')
      throw (
        (P = String(h)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (P === '[object Object]' ? 'object with keys {' + Object.keys(h).join(', ') + '}' : P) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return he;
  }
  function lt(h, P, re) {
    if (h == null) return h;
    var ie = [],
      ue = 0;
    return (
      Ye(h, ie, '', '', function (ae) {
        return P.call(re, ae, ue++);
      }),
      ie
    );
  }
  function Ue(h) {
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
  var D = { current: null },
    L = { transition: null },
    Y = { ReactCurrentDispatcher: D, ReactCurrentBatchConfig: L, ReactCurrentOwner: j };
  function M() {
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
        if (!me(h))
          throw Error('React.Children.only expected to receive a single React element child.');
        return h;
      },
    }),
    (oe.Component = U),
    (oe.Fragment = s),
    (oe.Profiler = E),
    (oe.PureComponent = le),
    (oe.StrictMode = k),
    (oe.Suspense = p),
    (oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y),
    (oe.act = M),
    (oe.cloneElement = function (h, P, re) {
      if (h == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + h + '.'
        );
      var ie = b({}, h.props),
        ue = h.key,
        ae = h.ref,
        he = h._owner;
      if (P != null) {
        if (
          (P.ref !== void 0 && ((ae = P.ref), (he = j.current)),
          P.key !== void 0 && (ue = '' + P.key),
          h.type && h.type.defaultProps)
        )
          var de = h.type.defaultProps;
        for (we in P)
          F.call(P, we) &&
            !Q.hasOwnProperty(we) &&
            (ie[we] = P[we] === void 0 && de !== void 0 ? de[we] : P[we]);
      }
      var we = arguments.length - 2;
      if (we === 1) ie.children = re;
      else if (1 < we) {
        de = Array(we);
        for (var ot = 0; ot < we; ot++) de[ot] = arguments[ot + 2];
        ie.children = de;
      }
      return { $$typeof: c, type: h.type, key: ue, ref: ae, props: ie, _owner: he };
    }),
    (oe.createContext = function (h) {
      return (
        (h = {
          $$typeof: N,
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
      return { $$typeof: C, render: h };
    }),
    (oe.isValidElement = me),
    (oe.lazy = function (h) {
      return { $$typeof: _, _payload: { _status: -1, _result: h }, _init: Ue };
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
    (oe.unstable_act = M),
    (oe.useCallback = function (h, P) {
      return D.current.useCallback(h, P);
    }),
    (oe.useContext = function (h) {
      return D.current.useContext(h);
    }),
    (oe.useDebugValue = function () {}),
    (oe.useDeferredValue = function (h) {
      return D.current.useDeferredValue(h);
    }),
    (oe.useEffect = function (h, P) {
      return D.current.useEffect(h, P);
    }),
    (oe.useId = function () {
      return D.current.useId();
    }),
    (oe.useImperativeHandle = function (h, P, re) {
      return D.current.useImperativeHandle(h, P, re);
    }),
    (oe.useInsertionEffect = function (h, P) {
      return D.current.useInsertionEffect(h, P);
    }),
    (oe.useLayoutEffect = function (h, P) {
      return D.current.useLayoutEffect(h, P);
    }),
    (oe.useMemo = function (h, P) {
      return D.current.useMemo(h, P);
    }),
    (oe.useReducer = function (h, P, re) {
      return D.current.useReducer(h, P, re);
    }),
    (oe.useRef = function (h) {
      return D.current.useRef(h);
    }),
    (oe.useState = function (h) {
      return D.current.useState(h);
    }),
    (oe.useSyncExternalStore = function (h, P, re) {
      return D.current.useSyncExternalStore(h, P, re);
    }),
    (oe.useTransition = function () {
      return D.current.useTransition();
    }),
    (oe.version = '18.3.1'),
    oe
  );
}
var lc;
function os() {
  return (lc || ((lc = 1), (Yi.exports = Pf())), Yi.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oc;
function Of() {
  if (oc) return Rr;
  oc = 1;
  var c = os(),
    a = Symbol.for('react.element'),
    s = Symbol.for('react.fragment'),
    k = Object.prototype.hasOwnProperty,
    E = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function N(C, p, v) {
    var _,
      S = {},
      T = null,
      $ = null;
    (v !== void 0 && (T = '' + v),
      p.key !== void 0 && (T = '' + p.key),
      p.ref !== void 0 && ($ = p.ref));
    for (_ in p) k.call(p, _) && !x.hasOwnProperty(_) && (S[_] = p[_]);
    if (C && C.defaultProps) for (_ in ((p = C.defaultProps), p)) S[_] === void 0 && (S[_] = p[_]);
    return { $$typeof: a, type: C, key: T, ref: $, props: S, _owner: E.current };
  }
  return ((Rr.Fragment = s), (Rr.jsx = N), (Rr.jsxs = N), Rr);
}
var ic;
function Rf() {
  return (ic || ((ic = 1), (Ki.exports = Of())), Ki.exports);
}
var f = Rf(),
  ee = os(),
  Wl = {},
  Xi = { exports: {} },
  tt = {},
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
 */ var sc;
function If() {
  return (
    sc ||
      ((sc = 1),
      (function (c) {
        function a(L, Y) {
          var M = L.length;
          L.push(Y);
          e: for (; 0 < M; ) {
            var h = (M - 1) >>> 1,
              P = L[h];
            if (0 < E(P, Y)) ((L[h] = Y), (L[M] = P), (M = h));
            else break e;
          }
        }
        function s(L) {
          return L.length === 0 ? null : L[0];
        }
        function k(L) {
          if (L.length === 0) return null;
          var Y = L[0],
            M = L.pop();
          if (M !== Y) {
            L[0] = M;
            e: for (var h = 0, P = L.length, re = P >>> 1; h < re; ) {
              var ie = 2 * (h + 1) - 1,
                ue = L[ie],
                ae = ie + 1,
                he = L[ae];
              if (0 > E(ue, M))
                ae < P && 0 > E(he, ue)
                  ? ((L[h] = he), (L[ae] = M), (h = ae))
                  : ((L[h] = ue), (L[ie] = M), (h = ie));
              else if (ae < P && 0 > E(he, M)) ((L[h] = he), (L[ae] = M), (h = ae));
              else break e;
            }
          }
          return Y;
        }
        function E(L, Y) {
          var M = L.sortIndex - Y.sortIndex;
          return M !== 0 ? M : L.id - Y.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var x = performance;
          c.unstable_now = function () {
            return x.now();
          };
        } else {
          var N = Date,
            C = N.now();
          c.unstable_now = function () {
            return N.now() - C;
          };
        }
        var p = [],
          v = [],
          _ = 1,
          S = null,
          T = 3,
          $ = !1,
          b = !1,
          G = !1,
          U = typeof setTimeout == 'function' ? setTimeout : null,
          K = typeof clearTimeout == 'function' ? clearTimeout : null,
          le = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function ne(L) {
          for (var Y = s(v); Y !== null; ) {
            if (Y.callback === null) k(v);
            else if (Y.startTime <= L) (k(v), (Y.sortIndex = Y.expirationTime), a(p, Y));
            else break;
            Y = s(v);
          }
        }
        function X(L) {
          if (((G = !1), ne(L), !b))
            if (s(p) !== null) ((b = !0), Ue(F));
            else {
              var Y = s(v);
              Y !== null && D(X, Y.startTime - L);
            }
        }
        function F(L, Y) {
          ((b = !1), G && ((G = !1), K(A), (A = -1)), ($ = !0));
          var M = T;
          try {
            for (ne(Y), S = s(p); S !== null && (!(S.expirationTime > Y) || (L && !Et())); ) {
              var h = S.callback;
              if (typeof h == 'function') {
                ((S.callback = null), (T = S.priorityLevel));
                var P = h(S.expirationTime <= Y);
                ((Y = c.unstable_now()),
                  typeof P == 'function' ? (S.callback = P) : S === s(p) && k(p),
                  ne(Y));
              } else k(p);
              S = s(p);
            }
            if (S !== null) var re = !0;
            else {
              var ie = s(v);
              (ie !== null && D(X, ie.startTime - Y), (re = !1));
            }
            return re;
          } finally {
            ((S = null), (T = M), ($ = !1));
          }
        }
        var j = !1,
          Q = null,
          A = -1,
          rt = 5,
          me = -1;
        function Et() {
          return !(c.unstable_now() - me < rt);
        }
        function Ge() {
          if (Q !== null) {
            var L = c.unstable_now();
            me = L;
            var Y = !0;
            try {
              Y = Q(!0, L);
            } finally {
              Y ? Be() : ((j = !1), (Q = null));
            }
          } else j = !1;
        }
        var Be;
        if (typeof le == 'function')
          Be = function () {
            le(Ge);
          };
        else if (typeof MessageChannel < 'u') {
          var Ye = new MessageChannel(),
            lt = Ye.port2;
          ((Ye.port1.onmessage = Ge),
            (Be = function () {
              lt.postMessage(null);
            }));
        } else
          Be = function () {
            U(Ge, 0);
          };
        function Ue(L) {
          ((Q = L), j || ((j = !0), Be()));
        }
        function D(L, Y) {
          A = U(function () {
            L(c.unstable_now());
          }, Y);
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
            b || $ || ((b = !0), Ue(F));
          }),
          (c.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (rt = 0 < L ? Math.floor(1e3 / L) : 5);
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
                var Y = 3;
                break;
              default:
                Y = T;
            }
            var M = T;
            T = Y;
            try {
              return L();
            } finally {
              T = M;
            }
          }),
          (c.unstable_pauseExecution = function () {}),
          (c.unstable_requestPaint = function () {}),
          (c.unstable_runWithPriority = function (L, Y) {
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
            var M = T;
            T = L;
            try {
              return Y();
            } finally {
              T = M;
            }
          }),
          (c.unstable_scheduleCallback = function (L, Y, M) {
            var h = c.unstable_now();
            switch (
              (typeof M == 'object' && M !== null
                ? ((M = M.delay), (M = typeof M == 'number' && 0 < M ? h + M : h))
                : (M = h),
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
              (P = M + P),
              (L = {
                id: _++,
                callback: Y,
                priorityLevel: L,
                startTime: M,
                expirationTime: P,
                sortIndex: -1,
              }),
              M > h
                ? ((L.sortIndex = M),
                  a(v, L),
                  s(p) === null && L === s(v) && (G ? (K(A), (A = -1)) : (G = !0), D(X, M - h)))
                : ((L.sortIndex = P), a(p, L), b || $ || ((b = !0), Ue(F))),
              L
            );
          }),
          (c.unstable_shouldYield = Et),
          (c.unstable_wrapCallback = function (L) {
            var Y = T;
            return function () {
              var M = T;
              T = Y;
              try {
                return L.apply(this, arguments);
              } finally {
                T = M;
              }
            };
          }));
      })(Ji)),
    Ji
  );
}
var uc;
function zf() {
  return (uc || ((uc = 1), (Zi.exports = If())), Zi.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ac;
function Mf() {
  if (ac) return tt;
  ac = 1;
  var c = os(),
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
    E = {};
  function x(e, t) {
    (N(e, t), N(e + 'Capture', t));
  }
  function N(e, t) {
    for (E[e] = t, e = 0; e < t.length; e++) k.add(t[e]);
  }
  var C = !(
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
  var U = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      U[e] = new G(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      U[t] = new G(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      U[e] = new G(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        U[e] = new G(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        U[e] = new G(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      U[e] = new G(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      U[e] = new G(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      U[e] = new G(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      U[e] = new G(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var K = /[\-:]([a-z])/g;
  function le(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(K, le);
      U[t] = new G(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(K, le);
        U[t] = new G(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(K, le);
      U[t] = new G(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      U[e] = new G(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (U.xlinkHref = new G('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      U[e] = new G(e, 1, !1, e.toLowerCase(), null, !0, !0);
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
  var X = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    F = Symbol.for('react.element'),
    j = Symbol.for('react.portal'),
    Q = Symbol.for('react.fragment'),
    A = Symbol.for('react.strict_mode'),
    rt = Symbol.for('react.profiler'),
    me = Symbol.for('react.provider'),
    Et = Symbol.for('react.context'),
    Ge = Symbol.for('react.forward_ref'),
    Be = Symbol.for('react.suspense'),
    Ye = Symbol.for('react.suspense_list'),
    lt = Symbol.for('react.memo'),
    Ue = Symbol.for('react.lazy'),
    D = Symbol.for('react.offscreen'),
    L = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (L && e[L]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var M = Object.assign,
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
                  var d =
                    `
` + l[i].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      d.includes('<anonymous>') &&
                      (d = d.replace('<anonymous>', e.displayName)),
                    d
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
      case Q:
        return 'Fragment';
      case j:
        return 'Portal';
      case rt:
        return 'Profiler';
      case A:
        return 'StrictMode';
      case Be:
        return 'Suspense';
      case Ye:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Et:
          return (e.displayName || 'Context') + '.Consumer';
        case me:
          return (e._context.displayName || 'Context') + '.Provider';
        case Ge:
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
        case Ue:
          ((t = e._payload), (e = e._init));
          try {
            return ae(e(t));
          } catch {}
      }
    return null;
  }
  function he(e) {
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
  function de(e) {
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
  function we(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function ot(e) {
    var t = we(e) ? 'checked' : 'value',
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
  function as(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = we(e) ? (e.checked ? 'true' : 'false') : e.value),
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
    return M({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function cs(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = de(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      }));
  }
  function ds(e, t) {
    ((t = t.checked), t != null && ne(e, 'checked', t, !1));
  }
  function to(e, t) {
    ds(e, t);
    var n = de(t.value),
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
      : t.hasOwnProperty('defaultValue') && no(e, t.type, de(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function fs(e, t, n) {
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
      for (n = '' + de(n), t = null, l = 0; l < e.length; l++) {
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
    return M({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function ps(e, t) {
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
    e._wrapperState = { initialValue: de(n) };
  }
  function ms(e, t) {
    var n = de(t.value),
      r = de(t.defaultValue);
    (n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r));
  }
  function hs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function vs(e) {
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
      ? vs(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var Fr,
    ys = (function (e) {
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
    Rc = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Yn).forEach(function (e) {
    Rc.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yn[t] = Yn[e]));
    });
  });
  function gs(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (Yn.hasOwnProperty(e) && Yn[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function ws(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = gs(n, t[n], r);
        (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Ic = M(
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
  function _s(e) {
    if ((e = yr(e))) {
      if (typeof ao != 'function') throw Error(s(280));
      var t = e.stateNode;
      t && ((t = il(t)), ao(e.stateNode, e.type, t));
    }
  }
  function Ss(e) {
    xn ? (En ? En.push(e) : (En = [e])) : (xn = e);
  }
  function ks() {
    if (xn) {
      var e = xn,
        t = En;
      if (((En = xn = null), _s(e), t)) for (e = 0; e < t.length; e++) _s(t[e]);
    }
  }
  function xs(e, t) {
    return e(t);
  }
  function Es() {}
  var co = !1;
  function Cs(e, t, n) {
    if (co) return e(t, n);
    co = !0;
    try {
      return xs(e, t, n);
    } finally {
      ((co = !1), (xn !== null || En !== null) && (Es(), ks()));
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
  if (C)
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
  function zc(e, t, n, r, l, o, i, u, d) {
    var w = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, w);
    } catch (R) {
      this.onError(R);
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
  function Dc(e, t, n, r, l, o, i, u, d) {
    ((Jn = !1), (Ar = null), zc.apply(Mc, arguments));
  }
  function Fc(e, t, n, r, l, o, i, u, d) {
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
  function Ns(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function js(e) {
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
          if (o === n) return (js(l), e);
          if (o === r) return (js(l), t);
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
  function Ts(e) {
    return ((e = Ac(e)), e !== null ? Ls(e) : null);
  }
  function Ls(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ls(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ps = a.unstable_scheduleCallback,
    Os = a.unstable_cancelCallback,
    Bc = a.unstable_shouldYield,
    Uc = a.unstable_requestPaint,
    Ne = a.unstable_now,
    $c = a.unstable_getCurrentPriorityLevel,
    mo = a.unstable_ImmediatePriority,
    Rs = a.unstable_UserBlockingPriority,
    Ur = a.unstable_NormalPriority,
    Qc = a.unstable_LowPriority,
    Is = a.unstable_IdlePriority,
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
        d = l[i];
      (d === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[i] = qc(u, t))
        : d <= t && (e.expiredLanes |= u),
        (o &= ~u));
    }
  }
  function ho(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function zs() {
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
  var fe = 0;
  function Ms(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Ds,
    go,
    Fs,
    As,
    Bs,
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
  function Us(e, t) {
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
  function $s(e) {
    var t = un(e.target);
    if (t !== null) {
      var n = sn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ns(n)), t !== null)) {
            ((e.blockedOn = t),
              Bs(e.priority, function () {
                Fs(n);
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
  function Qs(e, t, n) {
    Gr(e) && n.delete(t);
  }
  function Jc() {
    ((wo = !1),
      Ut !== null && Gr(Ut) && (Ut = null),
      $t !== null && Gr($t) && ($t = null),
      Qt !== null && Gr(Qt) && (Qt = null),
      tr.forEach(Qs),
      nr.forEach(Qs));
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
      ($s(n), n.blockedOn === null && Ht.shift());
  }
  var Cn = X.ReactCurrentBatchConfig,
    qr = !0;
  function bc(e, t, n, r) {
    var l = fe,
      o = Cn.transition;
    Cn.transition = null;
    try {
      ((fe = 1), _o(e, t, n, r));
    } finally {
      ((fe = l), (Cn.transition = o));
    }
  }
  function ed(e, t, n, r) {
    var l = fe,
      o = Cn.transition;
    Cn.transition = null;
    try {
      ((fe = 4), _o(e, t, n, r));
    } finally {
      ((fe = l), (Cn.transition = o));
    }
  }
  function _o(e, t, n, r) {
    if (qr) {
      var l = So(e, t, n, r);
      if (l === null) (Ao(e, t, r, Kr, n), Us(e, r));
      else if (Zc(l, e, t, n, r)) r.stopPropagation();
      else if ((Us(e, r), t & 4 && -1 < Xc.indexOf(e))) {
        for (; l !== null; ) {
          var o = yr(l);
          if (
            (o !== null && Ds(o), (o = So(e, t, n, r)), o === null && Ao(e, t, r, Kr, n), o === l)
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
        if (((e = Ns(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Kr = e), null);
  }
  function Hs(e) {
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
          case Rs:
            return 4;
          case Ur:
          case Qc:
            return 16;
          case Is:
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
  function Vs() {
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
  function Ws() {
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
          : Ws),
        (this.isPropagationStopped = Ws),
        this
      );
    }
    return (
      M(t.prototype, {
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
    ir = M({}, Nn, { view: 0, detail: 0 }),
    td = it(ir),
    Eo,
    Co,
    sr,
    Jr = M({}, ir, {
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
    Gs = it(Jr),
    nd = M({}, Jr, { dataTransfer: 0 }),
    rd = it(nd),
    ld = M({}, ir, { relatedTarget: 0 }),
    No = it(ld),
    od = M({}, Nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    id = it(od),
    sd = M({}, Nn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ud = it(sd),
    ad = M({}, Nn, { data: 0 }),
    qs = it(ad),
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
  var md = M({}, ir, {
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
    vd = M({}, Jr, {
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
    Ks = it(vd),
    yd = M({}, ir, {
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
    wd = M({}, Nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _d = it(wd),
    Sd = M({}, Jr, {
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
    To = C && 'CompositionEvent' in window,
    ur = null;
  C && 'documentMode' in document && (ur = document.documentMode);
  var Ed = C && 'TextEvent' in window && !ur,
    Ys = C && (!To || (ur && 8 < ur && 11 >= ur)),
    Xs = ' ',
    Zs = !1;
  function Js(e, t) {
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
  function bs(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var jn = !1;
  function Cd(e, t) {
    switch (e) {
      case 'compositionend':
        return bs(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Zs = !0), Xs);
      case 'textInput':
        return ((e = t.data), e === Xs && Zs ? null : e);
      default:
        return null;
    }
  }
  function Nd(e, t) {
    if (jn)
      return e === 'compositionend' || (!To && Js(e, t))
        ? ((e = Vs()), (Yr = ko = Vt = null), (jn = !1), e)
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
        return Ys && t.locale !== 'ko' ? null : t.data;
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
  function eu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!jd[e.type] : t === 'textarea';
  }
  function tu(e, t, n, r) {
    (Ss(r),
      (t = rl(t, 'onChange')),
      0 < t.length &&
        ((n = new xo('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
  }
  var ar = null,
    cr = null;
  function Td(e) {
    wu(e, 0);
  }
  function br(e) {
    var t = Rn(e);
    if (as(t)) return e;
  }
  function Ld(e, t) {
    if (e === 'change') return t;
  }
  var nu = !1;
  if (C) {
    var Lo;
    if (C) {
      var Po = 'oninput' in document;
      if (!Po) {
        var ru = document.createElement('div');
        (ru.setAttribute('oninput', 'return;'), (Po = typeof ru.oninput == 'function'));
      }
      Lo = Po;
    } else Lo = !1;
    nu = Lo && (!document.documentMode || 9 < document.documentMode);
  }
  function lu() {
    ar && (ar.detachEvent('onpropertychange', ou), (cr = ar = null));
  }
  function ou(e) {
    if (e.propertyName === 'value' && br(cr)) {
      var t = [];
      (tu(t, cr, e, uo(e)), Cs(Td, t));
    }
  }
  function Pd(e, t, n) {
    e === 'focusin'
      ? (lu(), (ar = t), (cr = n), ar.attachEvent('onpropertychange', ou))
      : e === 'focusout' && lu();
  }
  function Od(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return br(cr);
  }
  function Rd(e, t) {
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
  function iu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function su(e, t) {
    var n = iu(e);
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
      n = iu(n);
    }
  }
  function uu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? uu(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function au() {
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
  function Md(e) {
    var t = au(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && uu(n.ownerDocument.documentElement, n)) {
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
            (l = su(n, o)));
          var i = su(n, r);
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
  var Dd = C && 'documentMode' in document && 11 >= document.documentMode,
    Tn = null,
    Ro = null,
    fr = null,
    Io = !1;
  function cu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Io ||
      Tn == null ||
      Tn !== Dr(r) ||
      ((r = Tn),
      'selectionStart' in r && Oo(r)
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
        (r = rl(Ro, 'onSelect')),
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
    du = {};
  C &&
    ((du = document.createElement('div').style),
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
    for (n in t) if (t.hasOwnProperty(n) && n in du) return (zo[e] = t[n]);
    return e;
  }
  var fu = tl('animationend'),
    pu = tl('animationiteration'),
    mu = tl('animationstart'),
    hu = tl('transitionend'),
    vu = new Map(),
    yu =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Wt(e, t) {
    (vu.set(e, t), x(t, [e]));
  }
  for (var Mo = 0; Mo < yu.length; Mo++) {
    var Do = yu[Mo],
      Fd = Do.toLowerCase(),
      Ad = Do[0].toUpperCase() + Do.slice(1);
    Wt(Fd, 'on' + Ad);
  }
  (Wt(fu, 'onAnimationEnd'),
    Wt(pu, 'onAnimationIteration'),
    Wt(mu, 'onAnimationStart'),
    Wt('dblclick', 'onDoubleClick'),
    Wt('focusin', 'onFocus'),
    Wt('focusout', 'onBlur'),
    Wt(hu, 'onTransitionEnd'),
    N('onMouseEnter', ['mouseout', 'mouseover']),
    N('onMouseLeave', ['mouseout', 'mouseover']),
    N('onPointerEnter', ['pointerout', 'pointerover']),
    N('onPointerLeave', ['pointerout', 'pointerover']),
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
  function gu(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n), Fc(r, t, void 0, e), (e.currentTarget = null));
  }
  function wu(e, t) {
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
              d = u.instance,
              w = u.currentTarget;
            if (((u = u.listener), d !== o && l.isPropagationStopped())) break e;
            (gu(l, u, w), (o = d));
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((u = r[i]),
              (d = u.instance),
              (w = u.currentTarget),
              (u = u.listener),
              d !== o && l.isPropagationStopped())
            )
              break e;
            (gu(l, u, w), (o = d));
          }
      }
    }
    if (Br) throw ((e = po), (Br = !1), (po = null), e);
  }
  function ye(e, t) {
    var n = t[Vo];
    n === void 0 && (n = t[Vo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (_u(t, e, 2, !1), n.add(r));
  }
  function Fo(e, t, n) {
    var r = 0;
    (t && (r |= 4), _u(n, e, r, t));
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
  function _u(e, t, n, r) {
    switch (Hs(t)) {
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
              var d = i.tag;
              if (
                (d === 3 || d === 4) &&
                ((d = i.stateNode.containerInfo),
                d === l || (d.nodeType === 8 && d.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (((i = un(u)), i === null)) return;
            if (((d = i.tag), d === 5 || d === 6)) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    Cs(function () {
      var w = o,
        R = uo(n),
        I = [];
      e: {
        var O = vu.get(e);
        if (O !== void 0) {
          var B = xo,
            V = e;
          switch (e) {
            case 'keypress':
              if (Xr(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              B = hd;
              break;
            case 'focusin':
              ((V = 'focus'), (B = No));
              break;
            case 'focusout':
              ((V = 'blur'), (B = No));
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
              B = Gs;
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
            case fu:
            case pu:
            case mu:
              B = id;
              break;
            case hu:
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
              B = Ks;
          }
          var W = (t & 4) !== 0,
            je = !W && e === 'scroll',
            y = W ? (O !== null ? O + 'Capture' : null) : O;
          W = [];
          for (var m = w, g; m !== null; ) {
            g = m;
            var z = g.stateNode;
            if (
              (g.tag === 5 &&
                z !== null &&
                ((g = z), y !== null && ((z = Xn(m, y)), z != null && W.push(hr(m, z, g)))),
              je)
            )
              break;
            m = m.return;
          }
          0 < W.length && ((O = new B(O, V, null, n, R)), I.push({ event: O, listeners: W }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((O = e === 'mouseover' || e === 'pointerover'),
            (B = e === 'mouseout' || e === 'pointerout'),
            O && n !== so && (V = n.relatedTarget || n.fromElement) && (un(V) || V[Pt]))
          )
            break e;
          if (
            (B || O) &&
            ((O =
              R.window === R
                ? R
                : (O = R.ownerDocument)
                  ? O.defaultView || O.parentWindow
                  : window),
            B
              ? ((V = n.relatedTarget || n.toElement),
                (B = w),
                (V = V ? un(V) : null),
                V !== null &&
                  ((je = sn(V)), V !== je || (V.tag !== 5 && V.tag !== 6)) &&
                  (V = null))
              : ((B = null), (V = w)),
            B !== V)
          ) {
            if (
              ((W = Gs),
              (z = 'onMouseLeave'),
              (y = 'onMouseEnter'),
              (m = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((W = Ks), (z = 'onPointerLeave'), (y = 'onPointerEnter'), (m = 'pointer')),
              (je = B == null ? O : Rn(B)),
              (g = V == null ? O : Rn(V)),
              (O = new W(z, m + 'leave', B, n, R)),
              (O.target = je),
              (O.relatedTarget = g),
              (z = null),
              un(R) === w &&
                ((W = new W(y, m + 'enter', V, n, R)),
                (W.target = g),
                (W.relatedTarget = je),
                (z = W)),
              (je = z),
              B && V)
            )
              t: {
                for (W = B, y = V, m = 0, g = W; g; g = Pn(g)) m++;
                for (g = 0, z = y; z; z = Pn(z)) g++;
                for (; 0 < m - g; ) ((W = Pn(W)), m--);
                for (; 0 < g - m; ) ((y = Pn(y)), g--);
                for (; m--; ) {
                  if (W === y || (y !== null && W === y.alternate)) break t;
                  ((W = Pn(W)), (y = Pn(y)));
                }
                W = null;
              }
            else W = null;
            (B !== null && Su(I, O, B, W, !1), V !== null && je !== null && Su(I, je, V, W, !0));
          }
        }
        e: {
          if (
            ((O = w ? Rn(w) : window),
            (B = O.nodeName && O.nodeName.toLowerCase()),
            B === 'select' || (B === 'input' && O.type === 'file'))
          )
            var q = Ld;
          else if (eu(O))
            if (nu) q = Id;
            else {
              q = Od;
              var Z = Pd;
            }
          else
            (B = O.nodeName) &&
              B.toLowerCase() === 'input' &&
              (O.type === 'checkbox' || O.type === 'radio') &&
              (q = Rd);
          if (q && (q = q(e, w))) {
            tu(I, q, n, R);
            break e;
          }
          (Z && Z(e, O, w),
            e === 'focusout' &&
              (Z = O._wrapperState) &&
              Z.controlled &&
              O.type === 'number' &&
              no(O, 'number', O.value));
        }
        switch (((Z = w ? Rn(w) : window), e)) {
          case 'focusin':
            (eu(Z) || Z.contentEditable === 'true') && ((Tn = Z), (Ro = w), (fr = null));
            break;
          case 'focusout':
            fr = Ro = Tn = null;
            break;
          case 'mousedown':
            Io = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Io = !1), cu(I, n, R));
            break;
          case 'selectionchange':
            if (Dd) break;
          case 'keydown':
          case 'keyup':
            cu(I, n, R);
        }
        var J;
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
            ? Js(e, n) && (te = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (te = 'onCompositionStart');
        (te &&
          (Ys &&
            n.locale !== 'ko' &&
            (jn || te !== 'onCompositionStart'
              ? te === 'onCompositionEnd' && jn && (J = Vs())
              : ((Vt = R), (ko = 'value' in Vt ? Vt.value : Vt.textContent), (jn = !0))),
          (Z = rl(w, te)),
          0 < Z.length &&
            ((te = new qs(te, e, null, n, R)),
            I.push({ event: te, listeners: Z }),
            J ? (te.data = J) : ((J = bs(n)), J !== null && (te.data = J)))),
          (J = Ed ? Cd(e, n) : Nd(e, n)) &&
            ((w = rl(w, 'onBeforeInput')),
            0 < w.length &&
              ((R = new qs('onBeforeInput', 'beforeinput', null, n, R)),
              I.push({ event: R, listeners: w }),
              (R.data = J))));
      }
      wu(I, t);
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
  function Su(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n,
        d = u.alternate,
        w = u.stateNode;
      if (d !== null && d === r) break;
      (u.tag === 5 &&
        w !== null &&
        ((u = w),
        l
          ? ((d = Xn(n, o)), d != null && i.unshift(hr(n, d, u)))
          : l || ((d = Xn(n, o)), d != null && i.push(hr(n, d, u)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Ud = /\r\n?/g,
    $d = /\u0000|\uFFFD/g;
  function ku(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Ud,
        `
`
      )
      .replace($d, '');
  }
  function ll(e, t, n) {
    if (((t = ku(t)), ku(e) !== t && n)) throw Error(s(425));
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
    xu = typeof Promise == 'function' ? Promise : void 0,
    Hd =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof xu < 'u'
          ? function (e) {
              return xu.resolve(null).then(e).catch(Vd);
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
  function Eu(e) {
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
  var On = Math.random().toString(36).slice(2),
    Nt = '__reactFiber$' + On,
    vr = '__reactProps$' + On,
    Pt = '__reactContainer$' + On,
    Vo = '__reactEvents$' + On,
    Wd = '__reactListeners$' + On,
    Gd = '__reactHandles$' + On;
  function un(e) {
    var t = e[Nt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Pt] || n[Nt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Eu(e); e !== null; ) {
            if ((n = e[Nt])) return n;
            e = Eu(e);
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
  function Rn(e) {
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
  function ge(e) {
    0 > In || ((e.current = Wo[In]), (Wo[In] = null), In--);
  }
  function ve(e, t) {
    (In++, (Wo[In] = e.current), (e.current = t));
  }
  var Kt = {},
    $e = qt(Kt),
    Xe = qt(!1),
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
  function Ze(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function sl() {
    (ge(Xe), ge($e));
  }
  function Cu(e, t, n) {
    if ($e.current !== Kt) throw Error(s(168));
    (ve($e, t), ve(Xe, n));
  }
  function Nu(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(s(108, he(e) || 'Unknown', l));
    return M({}, n, r);
  }
  function ul(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Kt),
      (an = $e.current),
      ve($e, e),
      ve(Xe, Xe.current),
      !0
    );
  }
  function ju(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    (n
      ? ((e = Nu(e, t, an)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ge(Xe),
        ge($e),
        ve($e, e))
      : ge(Xe),
      ve(Xe, n));
  }
  var Ot = null,
    al = !1,
    Go = !1;
  function Tu(e) {
    Ot === null ? (Ot = [e]) : Ot.push(e);
  }
  function qd(e) {
    ((al = !0), Tu(e));
  }
  function Yt() {
    if (!Go && Ot !== null) {
      Go = !0;
      var e = 0,
        t = fe;
      try {
        var n = Ot;
        for (fe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Ot = null), (al = !1));
      } catch (l) {
        throw (Ot !== null && (Ot = Ot.slice(e + 1)), Ps(mo, Yt), l);
      } finally {
        ((fe = t), (Go = !1));
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
    Rt = 1,
    It = '';
  function dn(e, t) {
    ((Mn[Dn++] = dl), (Mn[Dn++] = cl), (cl = e), (dl = t));
  }
  function Lu(e, t, n) {
    ((ct[dt++] = Rt), (ct[dt++] = It), (ct[dt++] = cn), (cn = e));
    var r = Rt;
    e = It;
    var l = 32 - yt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var o = 32 - yt(t) + l;
    if (30 < o) {
      var i = l - (l % 5);
      ((o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (Rt = (1 << (32 - yt(t) + l)) | (n << l) | r),
        (It = o + e));
    } else ((Rt = (1 << o) | (n << l) | r), (It = e));
  }
  function qo(e) {
    e.return !== null && (dn(e, 1), Lu(e, 1, 0));
  }
  function Ko(e) {
    for (; e === cl; ) ((cl = Mn[--Dn]), (Mn[Dn] = null), (dl = Mn[--Dn]), (Mn[Dn] = null));
    for (; e === cn; )
      ((cn = ct[--dt]),
        (ct[dt] = null),
        (It = ct[--dt]),
        (ct[dt] = null),
        (Rt = ct[--dt]),
        (ct[dt] = null));
  }
  var st = null,
    ut = null,
    _e = !1,
    wt = null;
  function Pu(e, t) {
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
            ? ((n = cn !== null ? { id: Rt, overflow: It } : null),
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
    if (_e) {
      var t = ut;
      if (t) {
        var n = t;
        if (!Ou(e, t)) {
          if (Yo(e)) throw Error(s(418));
          t = Gt(n.nextSibling);
          var r = st;
          t && Ou(e, t) ? Pu(r, n) : ((e.flags = (e.flags & -4097) | 2), (_e = !1), (st = e));
        }
      } else {
        if (Yo(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (_e = !1), (st = e));
      }
    }
  }
  function Ru(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    st = e;
  }
  function fl(e) {
    if (e !== st) return !1;
    if (!_e) return (Ru(e), (_e = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !$o(e.type, e.memoizedProps))),
      t && (t = ut))
    ) {
      if (Yo(e)) throw (Iu(), Error(s(418)));
      for (; t; ) (Pu(e, t), (t = Gt(t.nextSibling)));
    }
    if ((Ru(e), e.tag === 13)) {
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
  function Iu() {
    for (var e = ut; e; ) e = Gt(e.nextSibling);
  }
  function Fn() {
    ((ut = st = null), (_e = !1));
  }
  function Zo(e) {
    wt === null ? (wt = [e]) : wt.push(e);
  }
  var Kd = X.ReactCurrentBatchConfig;
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
  function zu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Mu(e) {
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
    function u(y, m, g, z) {
      return m === null || m.tag !== 6
        ? ((m = Qi(g, y.mode, z)), (m.return = y), m)
        : ((m = l(m, g)), (m.return = y), m);
    }
    function d(y, m, g, z) {
      var q = g.type;
      return q === Q
        ? R(y, m, g.props.children, z, g.key)
        : m !== null &&
            (m.elementType === q ||
              (typeof q == 'object' && q !== null && q.$$typeof === Ue && zu(q) === m.type))
          ? ((z = l(m, g.props)), (z.ref = gr(y, m, g)), (z.return = y), z)
          : ((z = Fl(g.type, g.key, g.props, null, y.mode, z)),
            (z.ref = gr(y, m, g)),
            (z.return = y),
            z);
    }
    function w(y, m, g, z) {
      return m === null ||
        m.tag !== 4 ||
        m.stateNode.containerInfo !== g.containerInfo ||
        m.stateNode.implementation !== g.implementation
        ? ((m = Hi(g, y.mode, z)), (m.return = y), m)
        : ((m = l(m, g.children || [])), (m.return = y), m);
    }
    function R(y, m, g, z, q) {
      return m === null || m.tag !== 7
        ? ((m = wn(g, y.mode, z, q)), (m.return = y), m)
        : ((m = l(m, g)), (m.return = y), m);
    }
    function I(y, m, g) {
      if ((typeof m == 'string' && m !== '') || typeof m == 'number')
        return ((m = Qi('' + m, y.mode, g)), (m.return = y), m);
      if (typeof m == 'object' && m !== null) {
        switch (m.$$typeof) {
          case F:
            return (
              (g = Fl(m.type, m.key, m.props, null, y.mode, g)),
              (g.ref = gr(y, null, m)),
              (g.return = y),
              g
            );
          case j:
            return ((m = Hi(m, y.mode, g)), (m.return = y), m);
          case Ue:
            var z = m._init;
            return I(y, z(m._payload), g);
        }
        if (qn(m) || Y(m)) return ((m = wn(m, y.mode, g, null)), (m.return = y), m);
        pl(y, m);
      }
      return null;
    }
    function O(y, m, g, z) {
      var q = m !== null ? m.key : null;
      if ((typeof g == 'string' && g !== '') || typeof g == 'number')
        return q !== null ? null : u(y, m, '' + g, z);
      if (typeof g == 'object' && g !== null) {
        switch (g.$$typeof) {
          case F:
            return g.key === q ? d(y, m, g, z) : null;
          case j:
            return g.key === q ? w(y, m, g, z) : null;
          case Ue:
            return ((q = g._init), O(y, m, q(g._payload), z));
        }
        if (qn(g) || Y(g)) return q !== null ? null : R(y, m, g, z, null);
        pl(y, g);
      }
      return null;
    }
    function B(y, m, g, z, q) {
      if ((typeof z == 'string' && z !== '') || typeof z == 'number')
        return ((y = y.get(g) || null), u(m, y, '' + z, q));
      if (typeof z == 'object' && z !== null) {
        switch (z.$$typeof) {
          case F:
            return ((y = y.get(z.key === null ? g : z.key) || null), d(m, y, z, q));
          case j:
            return ((y = y.get(z.key === null ? g : z.key) || null), w(m, y, z, q));
          case Ue:
            var Z = z._init;
            return B(y, m, g, Z(z._payload), q);
        }
        if (qn(z) || Y(z)) return ((y = y.get(g) || null), R(m, y, z, q, null));
        pl(m, z);
      }
      return null;
    }
    function V(y, m, g, z) {
      for (
        var q = null, Z = null, J = m, te = (m = 0), ze = null;
        J !== null && te < g.length;
        te++
      ) {
        J.index > te ? ((ze = J), (J = null)) : (ze = J.sibling);
        var ce = O(y, J, g[te], z);
        if (ce === null) {
          J === null && (J = ze);
          break;
        }
        (e && J && ce.alternate === null && t(y, J),
          (m = o(ce, m, te)),
          Z === null ? (q = ce) : (Z.sibling = ce),
          (Z = ce),
          (J = ze));
      }
      if (te === g.length) return (n(y, J), _e && dn(y, te), q);
      if (J === null) {
        for (; te < g.length; te++)
          ((J = I(y, g[te], z)),
            J !== null && ((m = o(J, m, te)), Z === null ? (q = J) : (Z.sibling = J), (Z = J)));
        return (_e && dn(y, te), q);
      }
      for (J = r(y, J); te < g.length; te++)
        ((ze = B(J, y, te, g[te], z)),
          ze !== null &&
            (e && ze.alternate !== null && J.delete(ze.key === null ? te : ze.key),
            (m = o(ze, m, te)),
            Z === null ? (q = ze) : (Z.sibling = ze),
            (Z = ze)));
      return (
        e &&
          J.forEach(function (ln) {
            return t(y, ln);
          }),
        _e && dn(y, te),
        q
      );
    }
    function W(y, m, g, z) {
      var q = Y(g);
      if (typeof q != 'function') throw Error(s(150));
      if (((g = q.call(g)), g == null)) throw Error(s(151));
      for (
        var Z = (q = null), J = m, te = (m = 0), ze = null, ce = g.next();
        J !== null && !ce.done;
        te++, ce = g.next()
      ) {
        J.index > te ? ((ze = J), (J = null)) : (ze = J.sibling);
        var ln = O(y, J, ce.value, z);
        if (ln === null) {
          J === null && (J = ze);
          break;
        }
        (e && J && ln.alternate === null && t(y, J),
          (m = o(ln, m, te)),
          Z === null ? (q = ln) : (Z.sibling = ln),
          (Z = ln),
          (J = ze));
      }
      if (ce.done) return (n(y, J), _e && dn(y, te), q);
      if (J === null) {
        for (; !ce.done; te++, ce = g.next())
          ((ce = I(y, ce.value, z)),
            ce !== null &&
              ((m = o(ce, m, te)), Z === null ? (q = ce) : (Z.sibling = ce), (Z = ce)));
        return (_e && dn(y, te), q);
      }
      for (J = r(y, J); !ce.done; te++, ce = g.next())
        ((ce = B(J, y, te, ce.value, z)),
          ce !== null &&
            (e && ce.alternate !== null && J.delete(ce.key === null ? te : ce.key),
            (m = o(ce, m, te)),
            Z === null ? (q = ce) : (Z.sibling = ce),
            (Z = ce)));
      return (
        e &&
          J.forEach(function (Tf) {
            return t(y, Tf);
          }),
        _e && dn(y, te),
        q
      );
    }
    function je(y, m, g, z) {
      if (
        (typeof g == 'object' &&
          g !== null &&
          g.type === Q &&
          g.key === null &&
          (g = g.props.children),
        typeof g == 'object' && g !== null)
      ) {
        switch (g.$$typeof) {
          case F:
            e: {
              for (var q = g.key, Z = m; Z !== null; ) {
                if (Z.key === q) {
                  if (((q = g.type), q === Q)) {
                    if (Z.tag === 7) {
                      (n(y, Z.sibling), (m = l(Z, g.props.children)), (m.return = y), (y = m));
                      break e;
                    }
                  } else if (
                    Z.elementType === q ||
                    (typeof q == 'object' && q !== null && q.$$typeof === Ue && zu(q) === Z.type)
                  ) {
                    (n(y, Z.sibling),
                      (m = l(Z, g.props)),
                      (m.ref = gr(y, Z, g)),
                      (m.return = y),
                      (y = m));
                    break e;
                  }
                  n(y, Z);
                  break;
                } else t(y, Z);
                Z = Z.sibling;
              }
              g.type === Q
                ? ((m = wn(g.props.children, y.mode, z, g.key)), (m.return = y), (y = m))
                : ((z = Fl(g.type, g.key, g.props, null, y.mode, z)),
                  (z.ref = gr(y, m, g)),
                  (z.return = y),
                  (y = z));
            }
            return i(y);
          case j:
            e: {
              for (Z = g.key; m !== null; ) {
                if (m.key === Z)
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
              ((m = Hi(g, y.mode, z)), (m.return = y), (y = m));
            }
            return i(y);
          case Ue:
            return ((Z = g._init), je(y, m, Z(g._payload), z));
        }
        if (qn(g)) return V(y, m, g, z);
        if (Y(g)) return W(y, m, g, z);
        pl(y, g);
      }
      return (typeof g == 'string' && g !== '') || typeof g == 'number'
        ? ((g = '' + g),
          m !== null && m.tag === 6
            ? (n(y, m.sibling), (m = l(m, g)), (m.return = y), (y = m))
            : (n(y, m), (m = Qi(g, y.mode, z)), (m.return = y), (y = m)),
          i(y))
        : n(y, m);
    }
    return je;
  }
  var An = Mu(!0),
    Du = Mu(!1),
    ml = qt(null),
    hl = null,
    Bn = null,
    Jo = null;
  function bo() {
    Jo = Bn = hl = null;
  }
  function ei(e) {
    var t = ml.current;
    (ge(ml), (e._currentValue = t));
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
        ((e.lanes & t) !== 0 && (Je = !0), (e.firstContext = null)));
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
  function Fu(e, t, n, r) {
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
  function Au(e, t) {
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
  function Bu(e, t) {
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
      var d = u,
        w = d.next;
      ((d.next = null), i === null ? (o = w) : (i.next = w), (i = d));
      var R = e.alternate;
      R !== null &&
        ((R = R.updateQueue),
        (u = R.lastBaseUpdate),
        u !== i && (u === null ? (R.firstBaseUpdate = w) : (u.next = w), (R.lastBaseUpdate = d)));
    }
    if (o !== null) {
      var I = l.baseState;
      ((i = 0), (R = w = d = null), (u = o));
      do {
        var O = u.lane,
          B = u.eventTime;
        if ((r & O) === O) {
          R !== null &&
            (R = R.next =
              {
                eventTime: B,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var V = e,
              W = u;
            switch (((O = t), (B = n), W.tag)) {
              case 1:
                if (((V = W.payload), typeof V == 'function')) {
                  I = V.call(B, I, O);
                  break e;
                }
                I = V;
                break e;
              case 3:
                V.flags = (V.flags & -65537) | 128;
              case 0:
                if (
                  ((V = W.payload), (O = typeof V == 'function' ? V.call(B, I, O) : V), O == null)
                )
                  break e;
                I = M({}, I, O);
                break e;
              case 2:
                Xt = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64), (O = l.effects), O === null ? (l.effects = [u]) : O.push(u));
        } else
          ((B = {
            eventTime: B,
            lane: O,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            R === null ? ((w = R = B), (d = I)) : (R = R.next = B),
            (i |= O));
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          ((O = u),
            (u = O.next),
            (O.next = null),
            (l.lastBaseUpdate = O),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (R === null && (d = I),
        (l.baseState = d),
        (l.firstBaseUpdate = w),
        (l.lastBaseUpdate = R),
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
  function Uu(e, t, n) {
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
    switch ((ve(Sr, t), ve(_r, e), ve(jt, wr), (e = t.nodeType), e)) {
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
    (ge(jt), ve(jt, t));
  }
  function $n() {
    (ge(jt), ge(_r), ge(Sr));
  }
  function $u(e) {
    pn(Sr.current);
    var t = pn(jt.current),
      n = lo(t, e.type);
    t !== n && (ve(_r, e), ve(jt, n));
  }
  function oi(e) {
    _r.current === e && (ge(jt), ge(_r));
  }
  var Se = qt(0);
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
  var wl = X.ReactCurrentDispatcher,
    ui = X.ReactCurrentBatchConfig,
    mn = 0,
    ke = null,
    Le = null,
    Re = null,
    _l = !1,
    kr = !1,
    xr = 0,
    Yd = 0;
  function Qe() {
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
      (ke = t),
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
        ((o += 1), (Re = Le = null), (t.updateQueue = null), (wl.current = tf), (e = n(r, l)));
      } while (kr);
    }
    if (
      ((wl.current = xl),
      (t = Le !== null && Le.next !== null),
      (mn = 0),
      (Re = Le = ke = null),
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
    return (Re === null ? (ke.memoizedState = Re = e) : (Re = Re.next = e), Re);
  }
  function pt() {
    if (Le === null) {
      var e = ke.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = Re === null ? ke.memoizedState : Re.next;
    if (t !== null) ((Re = t), (Le = e));
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
        Re === null ? (ke.memoizedState = Re = e) : (Re = Re.next = e));
    }
    return Re;
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
        d = null,
        w = o;
      do {
        var R = w.lane;
        if ((mn & R) === R)
          (d !== null &&
            (d = d.next =
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
            lane: R,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null,
          };
          (d === null ? ((u = d = I), (i = r)) : (d = d.next = I), (ke.lanes |= R), (hn |= R));
        }
        w = w.next;
      } while (w !== null && w !== o);
      (d === null ? (i = r) : (d.next = u),
        gt(r, t.memoizedState) || (Je = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = d),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((o = l.lane), (ke.lanes |= o), (hn |= o), (l = l.next));
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
      (gt(o, t.memoizedState) || (Je = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, r];
  }
  function Qu() {}
  function Hu(e, t) {
    var n = ke,
      r = pt(),
      l = t(),
      o = !gt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Je = !0)),
      (r = r.queue),
      mi(Gu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Re !== null && Re.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Cr(9, Wu.bind(null, n, r, l, t), void 0, null), Ie === null))
        throw Error(s(349));
      (mn & 30) !== 0 || Vu(n, t, l);
    }
    return l;
  }
  function Vu(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ke.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (ke.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Wu(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), qu(t) && Ku(e));
  }
  function Gu(e, t, n) {
    return n(function () {
      qu(t) && Ku(e);
    });
  }
  function qu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !gt(e, n);
    } catch {
      return !0;
    }
  }
  function Ku(e) {
    var t = zt(e, 1);
    t !== null && xt(t, e, 1, -1);
  }
  function Yu(e) {
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
      (e = e.dispatch = Jd.bind(null, ke, e)),
      [t.memoizedState, e]
    );
  }
  function Cr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ke.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ke.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Xu() {
    return pt().memoizedState;
  }
  function Sl(e, t, n, r) {
    var l = Tt();
    ((ke.flags |= e), (l.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r)));
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
    ((ke.flags |= e), (l.memoizedState = Cr(1 | t, n, o, r)));
  }
  function Zu(e, t) {
    return Sl(8390656, 8, e, t);
  }
  function mi(e, t) {
    return kl(2048, 8, e, t);
  }
  function Ju(e, t) {
    return kl(4, 2, e, t);
  }
  function bu(e, t) {
    return kl(4, 4, e, t);
  }
  function ea(e, t) {
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
  function ta(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), kl(4, 4, ea.bind(null, t, e), n));
  }
  function hi() {}
  function na(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ai(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function ra(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ai(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function la(e, t, n) {
    return (mn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Je = !0)), (e.memoizedState = n))
      : (gt(n, t) || ((n = zs()), (ke.lanes |= n), (hn |= n), (e.baseState = !0)), t);
  }
  function Xd(e, t) {
    var n = fe;
    ((fe = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = ui.transition;
    ui.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((fe = n), (ui.transition = r));
    }
  }
  function oa() {
    return pt().memoizedState;
  }
  function Zd(e, t, n) {
    var r = tn(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), ia(e)))
      sa(t, n);
    else if (((n = Fu(e, t, n, r)), n !== null)) {
      var l = Ke();
      (xt(n, e, r, l), ua(n, t, r));
    }
  }
  function Jd(e, t, n) {
    var r = tn(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ia(e)) sa(t, l);
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
            var d = t.interleaved;
            (d === null ? ((l.next = l), ni(t)) : ((l.next = d.next), (d.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Fu(e, t, l, r)), n !== null && ((l = Ke()), xt(n, e, r, l), ua(n, t, r)));
    }
  }
  function ia(e) {
    var t = e.alternate;
    return e === ke || (t !== null && t === ke);
  }
  function sa(e, t) {
    kr = _l = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function ua(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), yo(e, n));
    }
  }
  var xl = {
      readContext: ft,
      useCallback: Qe,
      useContext: Qe,
      useEffect: Qe,
      useImperativeHandle: Qe,
      useInsertionEffect: Qe,
      useLayoutEffect: Qe,
      useMemo: Qe,
      useReducer: Qe,
      useRef: Qe,
      useState: Qe,
      useDebugValue: Qe,
      useDeferredValue: Qe,
      useTransition: Qe,
      useMutableSource: Qe,
      useSyncExternalStore: Qe,
      useId: Qe,
      unstable_isNewReconciler: !1,
    },
    bd = {
      readContext: ft,
      useCallback: function (e, t) {
        return ((Tt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ft,
      useEffect: Zu,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), Sl(4194308, 4, ea.bind(null, t, e), n));
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
          (e = e.dispatch = Zd.bind(null, ke, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Tt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Yu,
      useDebugValue: hi,
      useDeferredValue: function (e) {
        return (Tt().memoizedState = e);
      },
      useTransition: function () {
        var e = Yu(!1),
          t = e[0];
        return ((e = Xd.bind(null, e[1])), (Tt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ke,
          l = Tt();
        if (_e) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), Ie === null)) throw Error(s(349));
          (mn & 30) !== 0 || Vu(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Zu(Gu.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Cr(9, Wu.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Tt(),
          t = Ie.identifierPrefix;
        if (_e) {
          var n = It,
            r = Rt;
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
      useCallback: na,
      useContext: ft,
      useEffect: mi,
      useImperativeHandle: ta,
      useInsertionEffect: Ju,
      useLayoutEffect: bu,
      useMemo: ra,
      useReducer: fi,
      useRef: Xu,
      useState: function () {
        return fi(Er);
      },
      useDebugValue: hi,
      useDeferredValue: function (e) {
        var t = pt();
        return la(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = fi(Er)[0],
          t = pt().memoizedState;
        return [e, t];
      },
      useMutableSource: Qu,
      useSyncExternalStore: Hu,
      useId: oa,
      unstable_isNewReconciler: !1,
    },
    tf = {
      readContext: ft,
      useCallback: na,
      useContext: ft,
      useEffect: mi,
      useImperativeHandle: ta,
      useInsertionEffect: Ju,
      useLayoutEffect: bu,
      useMemo: ra,
      useReducer: pi,
      useRef: Xu,
      useState: function () {
        return pi(Er);
      },
      useDebugValue: hi,
      useDeferredValue: function (e) {
        var t = pt();
        return Le === null ? (t.memoizedState = e) : la(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = pi(Er)[0],
          t = pt().memoizedState;
        return [e, t];
      },
      useMutableSource: Qu,
      useSyncExternalStore: Hu,
      useId: oa,
      unstable_isNewReconciler: !1,
    };
  function _t(e, t) {
    if (e && e.defaultProps) {
      ((t = M({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function vi(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : M({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var El = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? sn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ke(),
        l = tn(e),
        o = Mt(r, l);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = Zt(e, o, l)),
        t !== null && (xt(t, e, l, r), vl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ke(),
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
      var n = Ke(),
        r = tn(e),
        l = Mt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Zt(e, l, r)),
        t !== null && (xt(t, e, r, n), vl(t, e, r)));
    },
  };
  function aa(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !dr(n, r) || !dr(l, o)
          : !0
    );
  }
  function ca(e, t, n) {
    var r = !1,
      l = Kt,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = ft(o))
        : ((l = Ze(t) ? an : $e.current),
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
  function da(e, t, n, r) {
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
      : ((o = Ze(t) ? an : $e.current), (l.context = zn(e, o))),
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
  function fa(e, t, n) {
    ((n = Mt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Ol || ((Ol = !0), (zi = r)), wi(e, t));
      }),
      n
    );
  }
  function pa(e, t, n) {
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
  function ma(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new nf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = yf.bind(null, e, t, n)), t.then(e, e));
  }
  function ha(e) {
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
  function va(e, t, n, r, l) {
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
  var rf = X.ReactCurrentOwner,
    Je = !1;
  function qe(e, t, n, r) {
    t.child = e === null ? Du(t, null, n, r) : An(t, e.child, n, r);
  }
  function ya(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Un(t, l),
      (r = ci(e, t, n, r, o, l)),
      (n = di()),
      e !== null && !Je
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Dt(e, t, l))
        : (_e && n && qo(t), (t.flags |= 1), qe(e, t, r, l), t.child)
    );
  }
  function ga(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' &&
        !$i(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), wa(e, t, o, r, l))
        : ((e = Fl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var i = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : dr), n(i, r) && e.ref === t.ref))
        return Dt(e, t, l);
    }
    return ((t.flags |= 1), (e = rn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function wa(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (dr(o, r) && e.ref === t.ref)
        if (((Je = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Je = !0);
        else return ((t.lanes = e.lanes), Dt(e, t, l));
    }
    return _i(e, t, n, r, l);
  }
  function _a(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          ve(Vn, at),
          (at |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            ve(Vn, at),
            (at |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = o !== null ? o.baseLanes : n),
          ve(Vn, at),
          (at |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ve(Vn, at),
        (at |= r));
    return (qe(e, t, l, n), t.child);
  }
  function Sa(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function _i(e, t, n, r, l) {
    var o = Ze(n) ? an : $e.current;
    return (
      (o = zn(t, o)),
      Un(t, l),
      (n = ci(e, t, n, r, o, l)),
      (r = di()),
      e !== null && !Je
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Dt(e, t, l))
        : (_e && r && qo(t), (t.flags |= 1), qe(e, t, n, l), t.child)
    );
  }
  function ka(e, t, n, r, l) {
    if (Ze(n)) {
      var o = !0;
      ul(t);
    } else o = !1;
    if ((Un(t, l), t.stateNode === null)) (Nl(e, t), ca(t, n, r), yi(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        u = t.memoizedProps;
      i.props = u;
      var d = i.context,
        w = n.contextType;
      typeof w == 'object' && w !== null
        ? (w = ft(w))
        : ((w = Ze(n) ? an : $e.current), (w = zn(t, w)));
      var R = n.getDerivedStateFromProps,
        I = typeof R == 'function' || typeof i.getSnapshotBeforeUpdate == 'function';
      (I ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== r || d !== w) && da(t, i, r, w)),
        (Xt = !1));
      var O = t.memoizedState;
      ((i.state = O),
        yl(t, r, i, l),
        (d = t.memoizedState),
        u !== r || O !== d || Xe.current || Xt
          ? (typeof R == 'function' && (vi(t, n, R, r), (d = t.memoizedState)),
            (u = Xt || aa(t, n, u, r, O, d, w))
              ? (I ||
                  (typeof i.UNSAFE_componentWillMount != 'function' &&
                    typeof i.componentWillMount != 'function') ||
                  (typeof i.componentWillMount == 'function' && i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == 'function' &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = d)),
            (i.props = r),
            (i.state = d),
            (i.context = w),
            (r = u))
          : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1)));
    } else {
      ((i = t.stateNode),
        Au(e, t),
        (u = t.memoizedProps),
        (w = t.type === t.elementType ? u : _t(t.type, u)),
        (i.props = w),
        (I = t.pendingProps),
        (O = i.context),
        (d = n.contextType),
        typeof d == 'object' && d !== null
          ? (d = ft(d))
          : ((d = Ze(n) ? an : $e.current), (d = zn(t, d))));
      var B = n.getDerivedStateFromProps;
      ((R = typeof B == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== I || O !== d) && da(t, i, r, d)),
        (Xt = !1),
        (O = t.memoizedState),
        (i.state = O),
        yl(t, r, i, l));
      var V = t.memoizedState;
      u !== I || O !== V || Xe.current || Xt
        ? (typeof B == 'function' && (vi(t, n, B, r), (V = t.memoizedState)),
          (w = Xt || aa(t, n, w, r, O, V, d) || !1)
            ? (R ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                  typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(r, V, d),
                typeof i.UNSAFE_componentWillUpdate == 'function' &&
                  i.UNSAFE_componentWillUpdate(r, V, d)),
              typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (u === e.memoizedProps && O === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (u === e.memoizedProps && O === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = V)),
          (i.props = r),
          (i.state = V),
          (i.context = d),
          (r = w))
        : (typeof i.componentDidUpdate != 'function' ||
            (u === e.memoizedProps && O === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != 'function' ||
            (u === e.memoizedProps && O === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Si(e, t, n, r, o, l);
  }
  function Si(e, t, n, r, l, o) {
    Sa(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && ju(t, n, !1), Dt(e, t, o));
    ((r = t.stateNode), (rf.current = t));
    var u = i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = An(t, e.child, null, o)), (t.child = An(t, null, u, o)))
        : qe(e, t, u, o),
      (t.memoizedState = r.state),
      l && ju(t, n, !0),
      t.child
    );
  }
  function xa(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Cu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Cu(e, t.context, !1),
      li(e, t.containerInfo));
  }
  function Ea(e, t, n, r, l) {
    return (Fn(), Zo(l), (t.flags |= 256), qe(e, t, n, r), t.child);
  }
  var ki = { dehydrated: null, treeContext: null, retryLane: 0 };
  function xi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ca(e, t, n) {
    var r = t.pendingProps,
      l = Se.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      ve(Se, l & 1),
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
      var d = { mode: 'hidden', children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = d), (t.deletions = null))
          : ((r = rn(l, d)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
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
    if (((u = (i & e.childLanes) !== 0), Je || u)) {
      if (((r = Ie), r !== null)) {
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
        (_e = !0),
        (wt = null),
        e !== null &&
          ((ct[dt++] = Rt),
          (ct[dt++] = It),
          (ct[dt++] = cn),
          (Rt = e.id),
          (It = e.overflow),
          (cn = t)),
        (t = Ei(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Na(e, t, n) {
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
  function ja(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((qe(e, t, r.children, n), (r = Se.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Na(e, n, t);
          else if (e.tag === 19) Na(e, n, t);
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
    if ((ve(Se, r), (t.mode & 1) === 0)) t.memoizedState = null;
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
        (xa(t), Fn());
        break;
      case 5:
        $u(t);
        break;
      case 1:
        Ze(t.type) && ul(t);
        break;
      case 4:
        li(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (ve(ml, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ve(Se, Se.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Ca(e, t, n)
              : (ve(Se, Se.current & 1), (e = Dt(e, t, n)), e !== null ? e.sibling : null);
        ve(Se, Se.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return ja(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ve(Se, Se.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), _a(e, t, n));
    }
    return Dt(e, t, n);
  }
  var Ta, Ni, La, Pa;
  ((Ta = function (e, t) {
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
    (La = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), pn(jt.current));
        var o = null;
        switch (n) {
          case 'input':
            ((l = eo(e, l)), (r = eo(e, r)), (o = []));
            break;
          case 'select':
            ((l = M({}, l, { value: void 0 })), (r = M({}, r, { value: void 0 })), (o = []));
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
                (E.hasOwnProperty(w) ? o || (o = []) : (o = o || []).push(w, null));
        for (w in r) {
          var d = r[w];
          if (
            ((u = l != null ? l[w] : void 0),
            r.hasOwnProperty(w) && d !== u && (d != null || u != null))
          )
            if (w === 'style')
              if (u) {
                for (i in u)
                  !u.hasOwnProperty(i) ||
                    (d && d.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ''));
                for (i in d) d.hasOwnProperty(i) && u[i] !== d[i] && (n || (n = {}), (n[i] = d[i]));
              } else (n || (o || (o = []), o.push(w, n)), (n = d));
            else
              w === 'dangerouslySetInnerHTML'
                ? ((d = d ? d.__html : void 0),
                  (u = u ? u.__html : void 0),
                  d != null && u !== d && (o = o || []).push(w, d))
                : w === 'children'
                  ? (typeof d != 'string' && typeof d != 'number') || (o = o || []).push(w, '' + d)
                  : w !== 'suppressContentEditableWarning' &&
                    w !== 'suppressHydrationWarning' &&
                    (E.hasOwnProperty(w)
                      ? (d != null && w === 'onScroll' && ye('scroll', e), o || u === d || (o = []))
                      : (o = o || []).push(w, d));
        }
        n && (o = o || []).push('style', n);
        var w = o;
        (t.updateQueue = w) && (t.flags |= 4);
      }
    }),
    (Pa = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function Nr(e, t) {
    if (!_e)
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
  function He(e) {
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
        return (He(t), null);
      case 1:
        return (Ze(t.type) && sl(), He(t), null);
      case 3:
        return (
          (r = t.stateNode),
          $n(),
          ge(Xe),
          ge($e),
          si(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (fl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), wt !== null && (Fi(wt), (wt = null)))),
          Ni(e, t),
          He(t),
          null
        );
      case 5:
        oi(t);
        var l = pn(Sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (La(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return (He(t), null);
          }
          if (((e = pn(jt.current)), fl(t))) {
            ((r = t.stateNode), (n = t.type));
            var o = t.memoizedProps;
            switch (((r[Nt] = t), (r[vr] = o), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                (ye('cancel', r), ye('close', r));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ye('load', r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < pr.length; l++) ye(pr[l], r);
                break;
              case 'source':
                ye('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                (ye('error', r), ye('load', r));
                break;
              case 'details':
                ye('toggle', r);
                break;
              case 'input':
                (cs(r, o), ye('invalid', r));
                break;
              case 'select':
                ((r._wrapperState = { wasMultiple: !!o.multiple }), ye('invalid', r));
                break;
              case 'textarea':
                (ps(r, o), ye('invalid', r));
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
                  : E.hasOwnProperty(i) && u != null && i === 'onScroll' && ye('scroll', r);
              }
            switch (n) {
              case 'input':
                (Mr(r), fs(r, o, !0));
                break;
              case 'textarea':
                (Mr(r), hs(r));
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
              e === 'http://www.w3.org/1999/xhtml' && (e = vs(n)),
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
              Ta(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = io(n, r)), n)) {
                case 'dialog':
                  (ye('cancel', e), ye('close', e), (l = r));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (ye('load', e), (l = r));
                  break;
                case 'video':
                case 'audio':
                  for (l = 0; l < pr.length; l++) ye(pr[l], e);
                  l = r;
                  break;
                case 'source':
                  (ye('error', e), (l = r));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (ye('error', e), ye('load', e), (l = r));
                  break;
                case 'details':
                  (ye('toggle', e), (l = r));
                  break;
                case 'input':
                  (cs(e, r), (l = eo(e, r)), ye('invalid', e));
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = M({}, r, { value: void 0 })),
                    ye('invalid', e));
                  break;
                case 'textarea':
                  (ps(e, r), (l = ro(e, r)), ye('invalid', e));
                  break;
                default:
                  l = r;
              }
              (oo(n, l), (u = l));
              for (o in u)
                if (u.hasOwnProperty(o)) {
                  var d = u[o];
                  o === 'style'
                    ? ws(e, d)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((d = d ? d.__html : void 0), d != null && ys(e, d))
                      : o === 'children'
                        ? typeof d == 'string'
                          ? (n !== 'textarea' || d !== '') && Kn(e, d)
                          : typeof d == 'number' && Kn(e, '' + d)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (E.hasOwnProperty(o)
                            ? d != null && o === 'onScroll' && ye('scroll', e)
                            : d != null && ne(e, o, d, i));
                }
              switch (n) {
                case 'input':
                  (Mr(e), fs(e, r, !1));
                  break;
                case 'textarea':
                  (Mr(e), hs(e));
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + de(r.value));
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
        return (He(t), null);
      case 6:
        if (e && t.stateNode != null) Pa(e, t, e.memoizedProps, r);
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
        return (He(t), null);
      case 13:
        if (
          (ge(Se),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (_e && ut !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Iu(), Fn(), (t.flags |= 98560), (o = !1));
          else if (((o = fl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(s(317));
              o[Nt] = t;
            } else (Fn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (He(t), (o = !1));
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
                (e === null || (Se.current & 1) !== 0 ? Pe === 0 && (Pe = 3) : Ui())),
            t.updateQueue !== null && (t.flags |= 4),
            He(t),
            null);
      case 4:
        return ($n(), Ni(e, t), e === null && mr(t.stateNode.containerInfo), He(t), null);
      case 10:
        return (ei(t.type._context), He(t), null);
      case 17:
        return (Ze(t.type) && sl(), He(t), null);
      case 19:
        if ((ge(Se), (o = t.memoizedState), o === null)) return (He(t), null);
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
                  return (ve(Se, (Se.current & 1) | 2), t.child);
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
                o.tail === null && o.tailMode === 'hidden' && !i.alternate && !_e)
              )
                return (He(t), null);
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
            (n = Se.current),
            ve(Se, r ? (n & 1) | 2 : n & 1),
            t)
          : (He(t), null);
      case 22:
      case 23:
        return (
          Bi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (at & 1073741824) !== 0 && (He(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : He(t),
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
          Ze(t.type) && sl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          $n(),
          ge(Xe),
          ge($e),
          si(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (oi(t), null);
      case 13:
        if ((ge(Se), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          Fn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (ge(Se), null);
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
    Ve = !1,
    af = typeof WeakSet == 'function' ? WeakSet : Set,
    H = null;
  function Hn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          Ee(e, t, r);
        }
      else n.current = null;
  }
  function ji(e, t, n) {
    try {
      n();
    } catch (r) {
      Ee(e, t, r);
    }
  }
  var Oa = !1;
  function cf(e, t) {
    if (((Bo = qr), (e = au()), Oo(e))) {
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
              d = -1,
              w = 0,
              R = 0,
              I = e,
              O = null;
            t: for (;;) {
              for (
                var B;
                I !== n || (l !== 0 && I.nodeType !== 3) || (u = i + l),
                  I !== o || (r !== 0 && I.nodeType !== 3) || (d = i + r),
                  I.nodeType === 3 && (i += I.nodeValue.length),
                  (B = I.firstChild) !== null;
              )
                ((O = I), (I = B));
              for (;;) {
                if (I === e) break t;
                if (
                  (O === n && ++w === l && (u = i),
                  O === o && ++R === r && (d = i),
                  (B = I.nextSibling) !== null)
                )
                  break;
                ((I = O), (O = I.parentNode));
              }
              I = B;
            }
            n = u === -1 || d === -1 ? null : { start: u, end: d };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Uo = { focusedElem: e, selectionRange: n }, qr = !1, H = t; H !== null; )
      if (((t = H), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (H = e));
      else
        for (; H !== null; ) {
          t = H;
          try {
            var V = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (V !== null) {
                    var W = V.memoizedProps,
                      je = V.memoizedState,
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
          } catch (z) {
            Ee(t, t.return, z);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (H = e));
            break;
          }
          H = t.return;
        }
    return ((V = Oa), (Oa = !1), V);
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
  function Ra(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Ra(t)),
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
  function Ia(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function za(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ia(e.return)) return null;
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
  var De = null,
    St = !1;
  function Jt(e, t, n) {
    for (n = n.child; n !== null; ) (Ma(e, t, n), (n = n.sibling));
  }
  function Ma(e, t, n) {
    if (Ct && typeof Ct.onCommitFiberUnmount == 'function')
      try {
        Ct.onCommitFiberUnmount($r, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ve || Hn(n, t);
      case 6:
        var r = De,
          l = St;
        ((De = null),
          Jt(e, t, n),
          (De = r),
          (St = l),
          De !== null &&
            (St
              ? ((e = De),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : De.removeChild(n.stateNode)));
        break;
      case 18:
        De !== null &&
          (St
            ? ((e = De),
              (n = n.stateNode),
              e.nodeType === 8 ? Ho(e.parentNode, n) : e.nodeType === 1 && Ho(e, n),
              or(e))
            : Ho(De, n.stateNode));
        break;
      case 4:
        ((r = De),
          (l = St),
          (De = n.stateNode.containerInfo),
          (St = !0),
          Jt(e, t, n),
          (De = r),
          (St = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ve && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
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
        if (!Ve && (Hn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (u) {
            Ee(n, t, u);
          }
        Jt(e, t, n);
        break;
      case 21:
        Jt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ve = (r = Ve) || n.memoizedState !== null), Jt(e, t, n), (Ve = r))
          : Jt(e, t, n);
        break;
      default:
        Jt(e, t, n);
    }
  }
  function Da(e) {
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
                ((De = u.stateNode), (St = !1));
                break e;
              case 3:
                ((De = u.stateNode.containerInfo), (St = !0));
                break e;
              case 4:
                ((De = u.stateNode.containerInfo), (St = !0));
                break e;
            }
            u = u.return;
          }
          if (De === null) throw Error(s(160));
          (Ma(o, i, l), (De = null), (St = !1));
          var d = l.alternate;
          (d !== null && (d.return = null), (l.return = null));
        } catch (w) {
          Ee(l, t, w);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Fa(t, e), (t = t.sibling));
  }
  function Fa(e, t) {
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
            Ee(e, e.return, W);
          }
          try {
            jr(5, e, e.return);
          } catch (W) {
            Ee(e, e.return, W);
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
            Ee(e, e.return, W);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = n !== null ? n.memoizedProps : o,
            u = e.type,
            d = e.updateQueue;
          if (((e.updateQueue = null), d !== null))
            try {
              (u === 'input' && o.type === 'radio' && o.name != null && ds(l, o), io(u, i));
              var w = io(u, o);
              for (i = 0; i < d.length; i += 2) {
                var R = d[i],
                  I = d[i + 1];
                R === 'style'
                  ? ws(l, I)
                  : R === 'dangerouslySetInnerHTML'
                    ? ys(l, I)
                    : R === 'children'
                      ? Kn(l, I)
                      : ne(l, R, I, w);
              }
              switch (u) {
                case 'input':
                  to(l, o);
                  break;
                case 'textarea':
                  ms(l, o);
                  break;
                case 'select':
                  var O = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var B = o.value;
                  B != null
                    ? kn(l, !!o.multiple, B, !1)
                    : O !== !!o.multiple &&
                      (o.defaultValue != null
                        ? kn(l, !!o.multiple, o.defaultValue, !0)
                        : kn(l, !!o.multiple, o.multiple ? [] : '', !1));
              }
              l[vr] = o;
            } catch (W) {
              Ee(e, e.return, W);
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
            Ee(e, e.return, W);
          }
        }
        break;
      case 3:
        if ((kt(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            or(t.containerInfo);
          } catch (W) {
            Ee(e, e.return, W);
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
          r & 4 && Da(e));
        break;
      case 22:
        if (
          ((R = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ve = (w = Ve) || R), kt(t, e), (Ve = w)) : kt(t, e),
          Lt(e),
          r & 8192)
        ) {
          if (
            ((w = e.memoizedState !== null), (e.stateNode.isHidden = w) && !R && (e.mode & 1) !== 0)
          )
            for (H = e, R = e.child; R !== null; ) {
              for (I = H = R; H !== null; ) {
                switch (((O = H), (B = O.child), O.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    jr(4, O, O.return);
                    break;
                  case 1:
                    Hn(O, O.return);
                    var V = O.stateNode;
                    if (typeof V.componentWillUnmount == 'function') {
                      ((r = O), (n = O.return));
                      try {
                        ((t = r),
                          (V.props = t.memoizedProps),
                          (V.state = t.memoizedState),
                          V.componentWillUnmount());
                      } catch (W) {
                        Ee(r, n, W);
                      }
                    }
                    break;
                  case 5:
                    Hn(O, O.return);
                    break;
                  case 22:
                    if (O.memoizedState !== null) {
                      Ua(I);
                      continue;
                    }
                }
                B !== null ? ((B.return = O), (H = B)) : Ua(I);
              }
              R = R.sibling;
            }
          e: for (R = null, I = e; ; ) {
            if (I.tag === 5) {
              if (R === null) {
                R = I;
                try {
                  ((l = I.stateNode),
                    w
                      ? ((o = l.style),
                        typeof o.setProperty == 'function'
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none'))
                      : ((u = I.stateNode),
                        (d = I.memoizedProps.style),
                        (i = d != null && d.hasOwnProperty('display') ? d.display : null),
                        (u.style.display = gs('display', i))));
                } catch (W) {
                  Ee(e, e.return, W);
                }
              }
            } else if (I.tag === 6) {
              if (R === null)
                try {
                  I.stateNode.nodeValue = w ? '' : I.memoizedProps;
                } catch (W) {
                  Ee(e, e.return, W);
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
              (R === I && (R = null), (I = I.return));
            }
            (R === I && (R = null), (I.sibling.return = I.return), (I = I.sibling));
          }
        }
        break;
      case 19:
        (kt(t, e), Lt(e), r & 4 && Da(e));
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
            if (Ia(n)) {
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
            var o = za(e);
            Pi(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              u = za(e);
            Li(e, u, i);
            break;
          default:
            throw Error(s(161));
        }
      } catch (d) {
        Ee(e, e.return, d);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function df(e, t, n) {
    ((H = e), Aa(e));
  }
  function Aa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; H !== null; ) {
      var l = H,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || jl;
        if (!i) {
          var u = l.alternate,
            d = (u !== null && u.memoizedState !== null) || Ve;
          u = jl;
          var w = Ve;
          if (((jl = i), (Ve = d) && !w))
            for (H = l; H !== null; )
              ((i = H),
                (d = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? $a(l)
                  : d !== null
                    ? ((d.return = i), (H = d))
                    : $a(l));
          for (; o !== null; ) ((H = o), Aa(o), (o = o.sibling));
          ((H = l), (jl = u), (Ve = w));
        }
        Ba(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), (H = o)) : Ba(e);
    }
  }
  function Ba(e) {
    for (; H !== null; ) {
      var t = H;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ve || Tl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ve)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : _t(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && Uu(t, o, r);
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
                  Uu(t, i, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
                  var d = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      d.autoFocus && n.focus();
                      break;
                    case 'img':
                      d.src && (n.src = d.src);
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
                    var R = w.memoizedState;
                    if (R !== null) {
                      var I = R.dehydrated;
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
          Ve || (t.flags & 512 && Ti(t));
        } catch (O) {
          Ee(t, t.return, O);
        }
      }
      if (t === e) {
        H = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (H = n));
        break;
      }
      H = t.return;
    }
  }
  function Ua(e) {
    for (; H !== null; ) {
      var t = H;
      if (t === e) {
        H = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (H = n));
        break;
      }
      H = t.return;
    }
  }
  function $a(e) {
    for (; H !== null; ) {
      var t = H;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Tl(4, t);
            } catch (d) {
              Ee(t, n, d);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (d) {
                Ee(t, l, d);
              }
            }
            var o = t.return;
            try {
              Ti(t);
            } catch (d) {
              Ee(t, o, d);
            }
            break;
          case 5:
            var i = t.return;
            try {
              Ti(t);
            } catch (d) {
              Ee(t, i, d);
            }
        }
      } catch (d) {
        Ee(t, t.return, d);
      }
      if (t === e) {
        H = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        ((u.return = t.return), (H = u));
        break;
      }
      H = t.return;
    }
  }
  var ff = Math.ceil,
    Ll = X.ReactCurrentDispatcher,
    Oi = X.ReactCurrentOwner,
    mt = X.ReactCurrentBatchConfig,
    se = 0,
    Ie = null,
    Te = null,
    Fe = 0,
    at = 0,
    Vn = qt(0),
    Pe = 0,
    Tr = null,
    hn = 0,
    Pl = 0,
    Ri = 0,
    Lr = null,
    be = null,
    Ii = 0,
    Wn = 1 / 0,
    Ft = null,
    Ol = !1,
    zi = null,
    bt = null,
    Rl = !1,
    en = null,
    Il = 0,
    Pr = 0,
    Mi = null,
    zl = -1,
    Ml = 0;
  function Ke() {
    return (se & 6) !== 0 ? Ne() : zl !== -1 ? zl : (zl = Ne());
  }
  function tn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (se & 2) !== 0 && Fe !== 0
        ? Fe & -Fe
        : Kd.transition !== null
          ? (Ml === 0 && (Ml = zs()), Ml)
          : ((e = fe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Hs(e.type))), e);
  }
  function xt(e, t, n, r) {
    if (50 < Pr) throw ((Pr = 0), (Mi = null), Error(s(185)));
    (er(e, n, r),
      ((se & 2) === 0 || e !== Ie) &&
        (e === Ie && ((se & 2) === 0 && (Pl |= n), Pe === 4 && nn(e, Fe)),
        et(e, r),
        n === 1 && se === 0 && (t.mode & 1) === 0 && ((Wn = Ne() + 500), al && Yt())));
  }
  function et(e, t) {
    var n = e.callbackNode;
    Kc(e, t);
    var r = Vr(e, e === Ie ? Fe : 0);
    if (r === 0) (n !== null && Os(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Os(n), t === 1))
        (e.tag === 0 ? qd(Ha.bind(null, e)) : Tu(Ha.bind(null, e)),
          Hd(function () {
            (se & 6) === 0 && Yt();
          }),
          (n = null));
      else {
        switch (Ms(r)) {
          case 1:
            n = mo;
            break;
          case 4:
            n = Rs;
            break;
          case 16:
            n = Ur;
            break;
          case 536870912:
            n = Is;
            break;
          default:
            n = Ur;
        }
        n = Za(n, Qa.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Qa(e, t) {
    if (((zl = -1), (Ml = 0), (se & 6) !== 0)) throw Error(s(327));
    var n = e.callbackNode;
    if (Gn() && e.callbackNode !== n) return null;
    var r = Vr(e, e === Ie ? Fe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Dl(e, r);
    else {
      t = r;
      var l = se;
      se |= 2;
      var o = Wa();
      (Ie !== e || Fe !== t) && ((Ft = null), (Wn = Ne() + 500), yn(e, t));
      do
        try {
          hf();
          break;
        } catch (u) {
          Va(e, u);
        }
      while (!0);
      (bo(), (Ll.current = o), (se = l), Te !== null ? (t = 0) : ((Ie = null), (Fe = 0), (t = Pe)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = ho(e)), l !== 0 && ((r = l), (t = Di(e, l)))), t === 1))
        throw ((n = Tr), yn(e, 0), nn(e, r), et(e, Ne()), n);
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
          throw ((n = Tr), yn(e, 0), nn(e, r), et(e, Ne()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            gn(e, be, Ft);
            break;
          case 3:
            if ((nn(e, r), (r & 130023424) === r && ((t = Ii + 500 - Ne()), 10 < t))) {
              if (Vr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Ke(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = Qo(gn.bind(null, e, be, Ft), t);
              break;
            }
            gn(e, be, Ft);
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
              e.timeoutHandle = Qo(gn.bind(null, e, be, Ft), r);
              break;
            }
            gn(e, be, Ft);
            break;
          case 5:
            gn(e, be, Ft);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (et(e, Ne()), e.callbackNode === n ? Qa.bind(null, e) : null);
  }
  function Di(e, t) {
    var n = Lr;
    return (
      e.current.memoizedState.isDehydrated && (yn(e, t).flags |= 256),
      (e = Dl(e, t)),
      e !== 2 && ((t = be), (be = n), t !== null && Fi(t)),
      e
    );
  }
  function Fi(e) {
    be === null ? (be = e) : be.push.apply(be, e);
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
      t &= ~Ri, t &= ~Pl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - yt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function Ha(e) {
    if ((se & 6) !== 0) throw Error(s(327));
    Gn();
    var t = Vr(e, 0);
    if ((t & 1) === 0) return (et(e, Ne()), null);
    var n = Dl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ho(e);
      r !== 0 && ((t = r), (n = Di(e, r)));
    }
    if (n === 1) throw ((n = Tr), yn(e, 0), nn(e, t), et(e, Ne()), n);
    if (n === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      gn(e, be, Ft),
      et(e, Ne()),
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
      r = fe;
    try {
      if (((mt.transition = null), (fe = 1), e)) return e();
    } finally {
      ((fe = r), (mt.transition = n), (se = t), (se & 6) === 0 && Yt());
    }
  }
  function Bi() {
    ((at = Vn.current), ge(Vn));
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
            ($n(), ge(Xe), ge($e), si());
            break;
          case 5:
            oi(r);
            break;
          case 4:
            $n();
            break;
          case 13:
            ge(Se);
            break;
          case 19:
            ge(Se);
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
      ((Ie = e),
      (Te = e = rn(e.current, null)),
      (Fe = at = t),
      (Pe = 0),
      (Tr = null),
      (Ri = Pl = hn = 0),
      (be = Lr = null),
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
  function Va(e, t) {
    do {
      var n = Te;
      try {
        if ((bo(), (wl.current = xl), _l)) {
          for (var r = ke.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          _l = !1;
        }
        if (
          ((mn = 0),
          (Re = Le = ke = null),
          (kr = !1),
          (xr = 0),
          (Oi.current = null),
          n === null || n.return === null)
        ) {
          ((Pe = 1), (Tr = t), (Te = null));
          break;
        }
        e: {
          var o = e,
            i = n.return,
            u = n,
            d = t;
          if (
            ((t = Fe),
            (u.flags |= 32768),
            d !== null && typeof d == 'object' && typeof d.then == 'function')
          ) {
            var w = d,
              R = u,
              I = R.tag;
            if ((R.mode & 1) === 0 && (I === 0 || I === 11 || I === 15)) {
              var O = R.alternate;
              O
                ? ((R.updateQueue = O.updateQueue),
                  (R.memoizedState = O.memoizedState),
                  (R.lanes = O.lanes))
                : ((R.updateQueue = null), (R.memoizedState = null));
            }
            var B = ha(i);
            if (B !== null) {
              ((B.flags &= -257), va(B, i, u, o, t), B.mode & 1 && ma(o, w, t), (t = B), (d = w));
              var V = t.updateQueue;
              if (V === null) {
                var W = new Set();
                (W.add(d), (t.updateQueue = W));
              } else V.add(d);
              break e;
            } else {
              if ((t & 1) === 0) {
                (ma(o, w, t), Ui());
                break e;
              }
              d = Error(s(426));
            }
          } else if (_e && u.mode & 1) {
            var je = ha(i);
            if (je !== null) {
              ((je.flags & 65536) === 0 && (je.flags |= 256), va(je, i, u, o, t), Zo(Qn(d, u)));
              break e;
            }
          }
          ((o = d = Qn(d, u)),
            Pe !== 4 && (Pe = 2),
            Lr === null ? (Lr = [o]) : Lr.push(o),
            (o = i));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var y = fa(o, d, t);
                Bu(o, y);
                break e;
              case 1:
                u = d;
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
                  var z = pa(o, u, t);
                  Bu(o, z);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        qa(n);
      } catch (q) {
        ((t = q), Te === n && n !== null && (Te = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Wa() {
    var e = Ll.current;
    return ((Ll.current = xl), e === null ? xl : e);
  }
  function Ui() {
    ((Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
      Ie === null || ((hn & 268435455) === 0 && (Pl & 268435455) === 0) || nn(Ie, Fe));
  }
  function Dl(e, t) {
    var n = se;
    se |= 2;
    var r = Wa();
    (Ie !== e || Fe !== t) && ((Ft = null), yn(e, t));
    do
      try {
        mf();
        break;
      } catch (l) {
        Va(e, l);
      }
    while (!0);
    if ((bo(), (se = n), (Ll.current = r), Te !== null)) throw Error(s(261));
    return ((Ie = null), (Fe = 0), Pe);
  }
  function mf() {
    for (; Te !== null; ) Ga(Te);
  }
  function hf() {
    for (; Te !== null && !Bc(); ) Ga(Te);
  }
  function Ga(e) {
    var t = Xa(e.alternate, e, at);
    ((e.memoizedProps = e.pendingProps), t === null ? qa(e) : (Te = t), (Oi.current = null));
  }
  function qa(e) {
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
    var r = fe,
      l = mt.transition;
    try {
      ((mt.transition = null), (fe = 1), vf(e, t, n, r));
    } finally {
      ((mt.transition = l), (fe = r));
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
      e === Ie && ((Te = Ie = null), (Fe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Rl ||
        ((Rl = !0),
        Za(Ur, function () {
          return (Gn(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = mt.transition), (mt.transition = null));
      var i = fe;
      fe = 1;
      var u = se;
      ((se |= 4),
        (Oi.current = null),
        cf(e, n),
        Fa(n, e),
        Md(Uo),
        (qr = !!Bo),
        (Uo = Bo = null),
        (e.current = n),
        df(n),
        Uc(),
        (se = u),
        (fe = i),
        (mt.transition = o));
    } else e.current = n;
    if (
      (Rl && ((Rl = !1), (en = e), (Il = l)),
      (o = e.pendingLanes),
      o === 0 && (bt = null),
      Hc(n.stateNode),
      et(e, Ne()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (Ol) throw ((Ol = !1), (e = zi), (zi = null), e);
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
      var e = Ms(Il),
        t = mt.transition,
        n = fe;
      try {
        if (((mt.transition = null), (fe = 16 > e ? 16 : e), en === null)) var r = !1;
        else {
          if (((e = en), (en = null), (Il = 0), (se & 6) !== 0)) throw Error(s(331));
          var l = se;
          for (se |= 4, H = e.current; H !== null; ) {
            var o = H,
              i = o.child;
            if ((H.flags & 16) !== 0) {
              var u = o.deletions;
              if (u !== null) {
                for (var d = 0; d < u.length; d++) {
                  var w = u[d];
                  for (H = w; H !== null; ) {
                    var R = H;
                    switch (R.tag) {
                      case 0:
                      case 11:
                      case 15:
                        jr(8, R, o);
                    }
                    var I = R.child;
                    if (I !== null) ((I.return = R), (H = I));
                    else
                      for (; H !== null; ) {
                        R = H;
                        var O = R.sibling,
                          B = R.return;
                        if ((Ra(R), R === w)) {
                          H = null;
                          break;
                        }
                        if (O !== null) {
                          ((O.return = B), (H = O));
                          break;
                        }
                        H = B;
                      }
                  }
                }
                var V = o.alternate;
                if (V !== null) {
                  var W = V.child;
                  if (W !== null) {
                    V.child = null;
                    do {
                      var je = W.sibling;
                      ((W.sibling = null), (W = je));
                    } while (W !== null);
                  }
                }
                H = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null) ((i.return = o), (H = i));
            else
              e: for (; H !== null; ) {
                if (((o = H), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jr(9, o, o.return);
                  }
                var y = o.sibling;
                if (y !== null) {
                  ((y.return = o.return), (H = y));
                  break e;
                }
                H = o.return;
              }
          }
          var m = e.current;
          for (H = m; H !== null; ) {
            i = H;
            var g = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && g !== null) ((g.return = i), (H = g));
            else
              e: for (i = m; H !== null; ) {
                if (((u = H), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Tl(9, u);
                    }
                  } catch (q) {
                    Ee(u, u.return, q);
                  }
                if (u === i) {
                  H = null;
                  break e;
                }
                var z = u.sibling;
                if (z !== null) {
                  ((z.return = u.return), (H = z));
                  break e;
                }
                H = u.return;
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
        ((fe = n), (mt.transition = t));
      }
    }
    return !1;
  }
  function Ka(e, t, n) {
    ((t = Qn(n, t)),
      (t = fa(e, t, 1)),
      (e = Zt(e, t, 1)),
      (t = Ke()),
      e !== null && (er(e, 1, t), et(e, t)));
  }
  function Ee(e, t, n) {
    if (e.tag === 3) Ka(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ka(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (bt === null || !bt.has(r)))
          ) {
            ((e = Qn(n, e)),
              (e = pa(t, e, 1)),
              (t = Zt(t, e, 1)),
              (e = Ke()),
              t !== null && (er(t, 1, e), et(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function yf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Ke()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ie === e &&
        (Fe & n) === n &&
        (Pe === 4 || (Pe === 3 && (Fe & 130023424) === Fe && 500 > Ne() - Ii)
          ? yn(e, 0)
          : (Ri |= n)),
      et(e, t));
  }
  function Ya(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Hr), (Hr <<= 1), (Hr & 130023424) === 0 && (Hr = 4194304)));
    var n = Ke();
    ((e = zt(e, t)), e !== null && (er(e, t, n), et(e, n)));
  }
  function gf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Ya(e, n));
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
    (r !== null && r.delete(t), Ya(e, n));
  }
  var Xa;
  Xa = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Xe.current) Je = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Je = !1), of(e, t, n));
        Je = (e.flags & 131072) !== 0;
      }
    else ((Je = !1), _e && (t.flags & 1048576) !== 0 && Lu(t, dl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Nl(e, t), (e = t.pendingProps));
        var l = zn(t, $e.current);
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
              Ze(r) ? ((o = !0), ul(t)) : (o = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              ri(t),
              (l.updater = El),
              (t.stateNode = l),
              (l._reactInternals = t),
              yi(t, r, e, n),
              (t = Si(null, t, r, !0, o, n)))
            : ((t.tag = 0), _e && o && qo(t), qe(null, t, l, n), (t = t.child)),
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
              t = ka(null, t, r, e, n);
              break e;
            case 11:
              t = ya(null, t, r, e, n);
              break e;
            case 14:
              t = ga(null, t, r, _t(r.type, e), n);
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
          ka(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((xa(t), e === null)) throw Error(s(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            Au(e, t),
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
              ((l = Qn(Error(s(423)), t)), (t = Ea(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Qn(Error(s(424)), t)), (t = Ea(e, t, r, n, l)));
              break e;
            } else
              for (
                ut = Gt(t.stateNode.containerInfo.firstChild),
                  st = t,
                  _e = !0,
                  wt = null,
                  n = Du(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Fn(), r === l)) {
              t = Dt(e, t, n);
              break e;
            }
            qe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          $u(t),
          e === null && Xo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          $o(r, l) ? (i = null) : o !== null && $o(r, o) && (t.flags |= 32),
          Sa(e, t),
          qe(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Xo(t), null);
      case 13:
        return Ca(e, t, n);
      case 4:
        return (
          li(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = An(t, null, r, n)) : qe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : _t(r, l)),
          ya(e, t, r, l, n)
        );
      case 7:
        return (qe(e, t, t.pendingProps, n), t.child);
      case 8:
        return (qe(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (qe(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (i = l.value),
            ve(ml, r._currentValue),
            (r._currentValue = i),
            o !== null)
          )
            if (gt(o.value, i)) {
              if (o.children === l.children && !Xe.current) {
                t = Dt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var u = o.dependencies;
                if (u !== null) {
                  i = o.child;
                  for (var d = u.firstContext; d !== null; ) {
                    if (d.context === r) {
                      if (o.tag === 1) {
                        ((d = Mt(-1, n & -n)), (d.tag = 2));
                        var w = o.updateQueue;
                        if (w !== null) {
                          w = w.shared;
                          var R = w.pending;
                          (R === null ? (d.next = d) : ((d.next = R.next), (R.next = d)),
                            (w.pending = d));
                        }
                      }
                      ((o.lanes |= n),
                        (d = o.alternate),
                        d !== null && (d.lanes |= n),
                        ti(o.return, n, t),
                        (u.lanes |= n));
                      break;
                    }
                    d = d.next;
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
          (qe(e, t, l.children, n), (t = t.child));
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
          qe(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = _t(r, t.pendingProps)), (l = _t(r.type, l)), ga(e, t, r, l, n));
      case 15:
        return wa(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : _t(r, l)),
          Nl(e, t),
          (t.tag = 1),
          Ze(r) ? ((e = !0), ul(t)) : (e = !1),
          Un(t, n),
          ca(t, r, l),
          yi(t, r, l, n),
          Si(null, t, r, !0, e, n)
        );
      case 19:
        return ja(e, t, n);
      case 22:
        return _a(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Za(e, t) {
    return Ps(e, t);
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
      if (((e = e.$$typeof), e === Ge)) return 11;
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
        case Q:
          return wn(n.children, l, o, t);
        case A:
          ((i = 8), (l |= 8));
          break;
        case rt:
          return ((e = ht(12, n, t, l | 2)), (e.elementType = rt), (e.lanes = o), e);
        case Be:
          return ((e = ht(13, n, t, l)), (e.elementType = Be), (e.lanes = o), e);
        case Ye:
          return ((e = ht(19, n, t, l)), (e.elementType = Ye), (e.lanes = o), e);
        case D:
          return Al(n, l, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case me:
                i = 10;
                break e;
              case Et:
                i = 9;
                break e;
              case Ge:
                i = 11;
                break e;
              case lt:
                i = 14;
                break e;
              case Ue:
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
      (e.elementType = D),
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
  function Vi(e, t, n, r, l, o, i, u, d) {
    return (
      (e = new kf(e, t, n, u, d)),
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
      $$typeof: j,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Ja(e) {
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
            if (Ze(t.type)) {
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
      if (Ze(n)) return Nu(e, n, t);
    }
    return t;
  }
  function ba(e, t, n, r, l, o, i, u, d) {
    return (
      (e = Vi(n, r, !0, e, l, o, i, u, d)),
      (e.context = Ja(null)),
      (n = e.current),
      (r = Ke()),
      (l = tn(n)),
      (o = Mt(r, l)),
      (o.callback = t ?? null),
      Zt(n, o, l),
      (e.current.lanes = l),
      er(e, l, r),
      et(e, r),
      e
    );
  }
  function Bl(e, t, n, r) {
    var l = t.current,
      o = Ke(),
      i = tn(l);
    return (
      (n = Ja(n)),
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
  function ec(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Wi(e, t) {
    (ec(e, t), (e = e.alternate) && ec(e, t));
  }
  function Ef() {
    return null;
  }
  var tc =
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
      var t = As();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++);
      (Ht.splice(n, 0, e), n === 0 && $s(e));
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
  function nc() {}
  function Cf(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var w = Ul(i);
          o.call(w);
        };
      }
      var i = ba(t, r, e, 0, null, !1, !1, '', nc);
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
        var w = Ul(d);
        u.call(w);
      };
    }
    var d = Vi(e, 0, !1, null, null, !1, !1, '', nc);
    return (
      (e._reactRootContainer = d),
      (e[Pt] = d.current),
      mr(e.nodeType === 8 ? e.parentNode : e),
      vn(function () {
        Bl(t, d, n, r);
      }),
      d
    );
  }
  function Hl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == 'function') {
        var u = l;
        l = function () {
          var d = Ul(i);
          u.call(d);
        };
      }
      Bl(t, i, e, l);
    } else i = Cf(n, t, e, l, r);
    return Ul(i);
  }
  ((Ds = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = bn(t.pendingLanes);
          n !== 0 && (yo(t, n | 1), et(t, Ne()), (se & 6) === 0 && ((Wn = Ne() + 500), Yt()));
        }
        break;
      case 13:
        (vn(function () {
          var r = zt(e, 1);
          if (r !== null) {
            var l = Ke();
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
          var n = Ke();
          xt(t, e, 134217728, n);
        }
        Wi(e, 134217728);
      }
    }),
    (Fs = function (e) {
      if (e.tag === 13) {
        var t = tn(e),
          n = zt(e, t);
        if (n !== null) {
          var r = Ke();
          xt(n, e, t, r);
        }
        Wi(e, t);
      }
    }),
    (As = function () {
      return fe;
    }),
    (Bs = function (e, t) {
      var n = fe;
      try {
        return ((fe = e), t());
      } finally {
        fe = n;
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
                (as(r), to(r, l));
              }
            }
          }
          break;
        case 'textarea':
          ms(e, n);
          break;
        case 'select':
          ((t = n.value), t != null && kn(e, !!n.multiple, t, !1));
      }
    }),
    (xs = Ai),
    (Es = vn));
  var Nf = { usingClientEntryPoint: !1, Events: [yr, Rn, il, Ss, ks, Ai] },
    Or = {
      findFiberByHostInstance: un,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    jf = {
      bundleType: Or.bundleType,
      version: Or.version,
      rendererPackageName: Or.rendererPackageName,
      rendererConfig: Or.rendererConfig,
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
        return ((e = Ts(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Or.findFiberByHostInstance || Ef,
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
    (tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nf),
    (tt.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!qi(t)) throw Error(s(200));
      return xf(e, t, null, n);
    }),
    (tt.createRoot = function (e, t) {
      if (!qi(e)) throw Error(s(299));
      var n = !1,
        r = '',
        l = tc;
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
    (tt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(s(188))
          : ((e = Object.keys(e).join(',')), Error(s(268, e)));
      return ((e = Ts(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (tt.flushSync = function (e) {
      return vn(e);
    }),
    (tt.hydrate = function (e, t, n) {
      if (!Ql(t)) throw Error(s(200));
      return Hl(null, e, t, !0, n);
    }),
    (tt.hydrateRoot = function (e, t, n) {
      if (!qi(e)) throw Error(s(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        i = tc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = ba(t, null, e, 1, n ?? null, l, !1, o, i)),
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
    (tt.render = function (e, t, n) {
      if (!Ql(t)) throw Error(s(200));
      return Hl(null, e, t, !1, n);
    }),
    (tt.unmountComponentAtNode = function (e) {
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
    (tt.unstable_batchedUpdates = Ai),
    (tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Ql(n)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Hl(e, t, n, !1, r);
    }),
    (tt.version = '18.3.1-next-f1338f8080-20240426'),
    tt
  );
}
var cc;
function Df() {
  if (cc) return Xi.exports;
  cc = 1;
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
var dc;
function Ff() {
  if (dc) return Wl;
  dc = 1;
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
  is = { questions: Bf },
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
  Hf = { resetButton: !1, sliderLock: !0 },
  Vf = {
    showMaxEV: !0,
    showParliament: !0,
    showMergedFavorites: !0,
    showMaximin: !0,
    sideBySideComparison: !1,
  },
  ql = { ui: Hf, calculations: Vf };
var bi = { exports: {} },
  fc;
function Wf() {
  return (
    fc ||
      ((fc = 1),
      (function (c) {
        var a = (function () {
          var s = String.fromCharCode,
            k = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            E = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
            x = {};
          function N(p, v) {
            if (!x[p]) {
              x[p] = {};
              for (var _ = 0; _ < p.length; _++) x[p][p.charAt(_)] = _;
            }
            return x[p][v];
          }
          var C = {
            compressToBase64: function (p) {
              if (p == null) return '';
              var v = C._compress(p, 6, function (_) {
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
                  : C._decompress(p.length, 32, function (v) {
                      return N(k, p.charAt(v));
                    });
            },
            compressToUTF16: function (p) {
              return p == null
                ? ''
                : C._compress(p, 15, function (v) {
                    return s(v + 32);
                  }) + ' ';
            },
            decompressFromUTF16: function (p) {
              return p == null
                ? ''
                : p == ''
                  ? null
                  : C._decompress(p.length, 16384, function (v) {
                      return p.charCodeAt(v) - 32;
                    });
            },
            compressToUint8Array: function (p) {
              for (
                var v = C.compress(p), _ = new Uint8Array(v.length * 2), S = 0, T = v.length;
                S < T;
                S++
              ) {
                var $ = v.charCodeAt(S);
                ((_[S * 2] = $ >>> 8), (_[S * 2 + 1] = $ % 256));
              }
              return _;
            },
            decompressFromUint8Array: function (p) {
              if (p == null) return C.decompress(p);
              for (var v = new Array(p.length / 2), _ = 0, S = v.length; _ < S; _++)
                v[_] = p[_ * 2] * 256 + p[_ * 2 + 1];
              var T = [];
              return (
                v.forEach(function ($) {
                  T.push(s($));
                }),
                C.decompress(T.join(''))
              );
            },
            compressToEncodedURIComponent: function (p) {
              return p == null
                ? ''
                : C._compress(p, 6, function (v) {
                    return E.charAt(v);
                  });
            },
            decompressFromEncodedURIComponent: function (p) {
              return p == null
                ? ''
                : p == ''
                  ? null
                  : ((p = p.replace(/ /g, '+')),
                    C._decompress(p.length, 32, function (v) {
                      return N(E, p.charAt(v));
                    }));
            },
            compress: function (p) {
              return C._compress(p, 16, function (v) {
                return s(v);
              });
            },
            _compress: function (p, v, _) {
              if (p == null) return '';
              var S,
                T,
                $ = {},
                b = {},
                G = '',
                U = '',
                K = '',
                le = 2,
                ne = 3,
                X = 2,
                F = [],
                j = 0,
                Q = 0,
                A;
              for (A = 0; A < p.length; A += 1)
                if (
                  ((G = p.charAt(A)),
                  Object.prototype.hasOwnProperty.call($, G) || (($[G] = ne++), (b[G] = !0)),
                  (U = K + G),
                  Object.prototype.hasOwnProperty.call($, U))
                )
                  K = U;
                else {
                  if (Object.prototype.hasOwnProperty.call(b, K)) {
                    if (K.charCodeAt(0) < 256) {
                      for (S = 0; S < X; S++)
                        ((j = j << 1), Q == v - 1 ? ((Q = 0), F.push(_(j)), (j = 0)) : Q++);
                      for (T = K.charCodeAt(0), S = 0; S < 8; S++)
                        ((j = (j << 1) | (T & 1)),
                          Q == v - 1 ? ((Q = 0), F.push(_(j)), (j = 0)) : Q++,
                          (T = T >> 1));
                    } else {
                      for (T = 1, S = 0; S < X; S++)
                        ((j = (j << 1) | T),
                          Q == v - 1 ? ((Q = 0), F.push(_(j)), (j = 0)) : Q++,
                          (T = 0));
                      for (T = K.charCodeAt(0), S = 0; S < 16; S++)
                        ((j = (j << 1) | (T & 1)),
                          Q == v - 1 ? ((Q = 0), F.push(_(j)), (j = 0)) : Q++,
                          (T = T >> 1));
                    }
                    (le--, le == 0 && ((le = Math.pow(2, X)), X++), delete b[K]);
                  } else
                    for (T = $[K], S = 0; S < X; S++)
                      ((j = (j << 1) | (T & 1)),
                        Q == v - 1 ? ((Q = 0), F.push(_(j)), (j = 0)) : Q++,
                        (T = T >> 1));
                  (le--, le == 0 && ((le = Math.pow(2, X)), X++), ($[U] = ne++), (K = String(G)));
                }
              if (K !== '') {
                if (Object.prototype.hasOwnProperty.call(b, K)) {
                  if (K.charCodeAt(0) < 256) {
                    for (S = 0; S < X; S++)
                      ((j = j << 1), Q == v - 1 ? ((Q = 0), F.push(_(j)), (j = 0)) : Q++);
                    for (T = K.charCodeAt(0), S = 0; S < 8; S++)
                      ((j = (j << 1) | (T & 1)),
                        Q == v - 1 ? ((Q = 0), F.push(_(j)), (j = 0)) : Q++,
                        (T = T >> 1));
                  } else {
                    for (T = 1, S = 0; S < X; S++)
                      ((j = (j << 1) | T),
                        Q == v - 1 ? ((Q = 0), F.push(_(j)), (j = 0)) : Q++,
                        (T = 0));
                    for (T = K.charCodeAt(0), S = 0; S < 16; S++)
                      ((j = (j << 1) | (T & 1)),
                        Q == v - 1 ? ((Q = 0), F.push(_(j)), (j = 0)) : Q++,
                        (T = T >> 1));
                  }
                  (le--, le == 0 && ((le = Math.pow(2, X)), X++), delete b[K]);
                } else
                  for (T = $[K], S = 0; S < X; S++)
                    ((j = (j << 1) | (T & 1)),
                      Q == v - 1 ? ((Q = 0), F.push(_(j)), (j = 0)) : Q++,
                      (T = T >> 1));
                (le--, le == 0 && ((le = Math.pow(2, X)), X++));
              }
              for (T = 2, S = 0; S < X; S++)
                ((j = (j << 1) | (T & 1)),
                  Q == v - 1 ? ((Q = 0), F.push(_(j)), (j = 0)) : Q++,
                  (T = T >> 1));
              for (;;)
                if (((j = j << 1), Q == v - 1)) {
                  F.push(_(j));
                  break;
                } else Q++;
              return F.join('');
            },
            decompress: function (p) {
              return p == null
                ? ''
                : p == ''
                  ? null
                  : C._decompress(p.length, 32768, function (v) {
                      return p.charCodeAt(v);
                    });
            },
            _decompress: function (p, v, _) {
              var S = [],
                T = 4,
                $ = 4,
                b = 3,
                G = '',
                U = [],
                K,
                le,
                ne,
                X,
                F,
                j,
                Q,
                A = { val: _(0), position: v, index: 1 };
              for (K = 0; K < 3; K += 1) S[K] = K;
              for (ne = 0, F = Math.pow(2, 2), j = 1; j != F; )
                ((X = A.val & A.position),
                  (A.position >>= 1),
                  A.position == 0 && ((A.position = v), (A.val = _(A.index++))),
                  (ne |= (X > 0 ? 1 : 0) * j),
                  (j <<= 1));
              switch (ne) {
                case 0:
                  for (ne = 0, F = Math.pow(2, 8), j = 1; j != F; )
                    ((X = A.val & A.position),
                      (A.position >>= 1),
                      A.position == 0 && ((A.position = v), (A.val = _(A.index++))),
                      (ne |= (X > 0 ? 1 : 0) * j),
                      (j <<= 1));
                  Q = s(ne);
                  break;
                case 1:
                  for (ne = 0, F = Math.pow(2, 16), j = 1; j != F; )
                    ((X = A.val & A.position),
                      (A.position >>= 1),
                      A.position == 0 && ((A.position = v), (A.val = _(A.index++))),
                      (ne |= (X > 0 ? 1 : 0) * j),
                      (j <<= 1));
                  Q = s(ne);
                  break;
                case 2:
                  return '';
              }
              for (S[3] = Q, le = Q, U.push(Q); ; ) {
                if (A.index > p) return '';
                for (ne = 0, F = Math.pow(2, b), j = 1; j != F; )
                  ((X = A.val & A.position),
                    (A.position >>= 1),
                    A.position == 0 && ((A.position = v), (A.val = _(A.index++))),
                    (ne |= (X > 0 ? 1 : 0) * j),
                    (j <<= 1));
                switch ((Q = ne)) {
                  case 0:
                    for (ne = 0, F = Math.pow(2, 8), j = 1; j != F; )
                      ((X = A.val & A.position),
                        (A.position >>= 1),
                        A.position == 0 && ((A.position = v), (A.val = _(A.index++))),
                        (ne |= (X > 0 ? 1 : 0) * j),
                        (j <<= 1));
                    ((S[$++] = s(ne)), (Q = $ - 1), T--);
                    break;
                  case 1:
                    for (ne = 0, F = Math.pow(2, 16), j = 1; j != F; )
                      ((X = A.val & A.position),
                        (A.position >>= 1),
                        A.position == 0 && ((A.position = v), (A.val = _(A.index++))),
                        (ne |= (X > 0 ? 1 : 0) * j),
                        (j <<= 1));
                    ((S[$++] = s(ne)), (Q = $ - 1), T--);
                    break;
                  case 2:
                    return U.join('');
                }
                if ((T == 0 && ((T = Math.pow(2, b)), b++), S[Q])) G = S[Q];
                else if (Q === $) G = le + le.charAt(0);
                else return null;
                (U.push(G),
                  (S[$++] = le + G.charAt(0)),
                  T--,
                  (le = G),
                  T == 0 && ((T = Math.pow(2, b)), b++));
              }
            },
          };
          return C;
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
const vc = Lf(Gf),
  { questions: qf } = is;
function Kf() {
  return qf
    .filter((c) => c.type !== 'intermission' && c.options)
    .map((c) => ({ id: c.id, optionKeys: c.options.map((a) => a.key) }));
}
function Yf(c) {
  const a = [];
  for (const [k, E] of Object.entries(c)) {
    const x = Object.entries(E),
      N = x.find(([, C]) => C === 100);
    if (N) a.push(`${k}:${N[0]}`);
    else {
      const C = x
        .filter(([, p]) => p > 0)
        .map(([p, v]) => `${p}=${v}`)
        .join(',');
      a.push(`${k}:${C}`);
    }
  }
  const s = a.join('|');
  return vc.compressToEncodedURIComponent(s);
}
function Xf(c) {
  try {
    const a = vc.decompressFromEncodedURIComponent(c);
    if (!a) return null;
    const s = {},
      k = a.split('|');
    for (const E of k) {
      const x = E.indexOf(':');
      if (x === -1) return null;
      const N = E.slice(0, x),
        C = E.slice(x + 1);
      if (C.includes('=')) {
        const p = C.split(',');
        s[N] = {};
        for (const v of p) {
          const [_, S] = v.split('=');
          if (!_ || S === void 0) return null;
          s[N][_] = parseInt(S, 10);
        }
      } else s[N] = { [C]: 100 };
    }
    return s;
  } catch {
    return null;
  }
}
function Zf(c) {
  if (!c || typeof c != 'object') return { valid: !1, message: 'Invalid data format' };
  const a = Kf(),
    s = new Set(a.map((C) => C.id));
  if (Object.keys(c).filter((C) => !s.has(C)).length > 0)
    return { valid: !1, message: 'Quiz has changed since this link was created' };
  if (a.filter((C) => !c[C.id]).length > 0)
    return { valid: !1, message: 'Quiz has changed since this link was created' };
  for (const C of a) {
    const p = c[C.id],
      v = new Set(C.optionKeys);
    if (Object.keys(p).some(($) => !v.has($)))
      return { valid: !1, message: 'Quiz has changed since this link was created' };
    const T = Object.values(p).reduce(($, b) => $ + b, 0);
    if (Math.abs(T - 100) > 1) return { valid: !1, message: 'Invalid credence values' };
  }
  const N = {};
  for (const C of a) {
    const p = c[C.id] || {};
    N[C.id] = {};
    for (const v of C.optionKeys) N[C.id][v] = p[v] || 0;
  }
  return { valid: !0, credences: N };
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
function pc() {
  window.location.hash &&
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
const mc = {
    default: ['#81B29A', '#98C1D9', '#E07A5F'],
    selection: ['#81B29A', '#98C1D9', '#E07A5F'],
    credence: ['#81B29A', '#98C1D9', '#E07A5F'],
  },
  ep = '#81B29A',
  tp = { OPTIONS: 'options' },
  nt = {
    DEFAULT: 'default',
    SELECTION: 'selection',
    CREDENCE: 'credence',
    INTERMISSION: 'intermission',
  },
  { causes: Yl } = Kl,
  ns = { none: 1, sqrt: 0.5, extreme: 0.1 };
function yc(c) {
  const a = (c == null ? void 0 : c.diminishingReturns) || Kl.diminishingReturns || 'sqrt';
  return ns[a] ?? 0.5;
}
function gc(c, a, s = 0.5) {
  if (s >= 1) {
    const N = Math.max(...c);
    if (N <= 0) return c.map(() => a / c.length);
    const C = c.map((p, v) => (p === N ? v : -1)).filter((p) => p >= 0);
    return c.map((p, v) => (C.includes(v) ? a / C.length : 0));
  }
  const k = 1 / (1 - s),
    E = c.map((N) => (N > 0 ? Math.pow(N, k) : 0)),
    x = E.reduce((N, C) => N + C, 0);
  return x === 0 ? c.map(() => a / c.length) : E.map((N) => (N / x) * a);
}
function wc(c = !1) {
  return Object.fromEntries(
    is.questions
      .filter((a) => a.type !== 'intermission' && a.worldviewDimension)
      .map((a) => [
        a.id,
        c ? { ...a.worldviewDimension, name: a.editPanelTitle } : a.worldviewDimension,
      ])
  );
}
const Xl = wc();
function* Zl(c) {
  const a = Object.keys(c);
  if (a.length === 0) return;
  const s = Object.keys(c[a[0]]);
  function* k(E, x) {
    if (E === a.length) {
      let C = 1;
      for (const p of a) C *= c[p][x[p]] / 100;
      yield { options: x, probability: C };
      return;
    }
    const N = a[E];
    for (const C of s) yield* k(E + 1, { ...x, [N]: C });
  }
  yield* k(0, {});
}
function np(c, a, s) {
  let k = c.points;
  for (const [E, x] of Object.entries(s)) {
    const N = a[E],
      C = x.options[N];
    if (x.applyAs === 'multiplier') x.appliesWhen && c[x.appliesWhen] && (k *= C);
    else if (x.applyAs === 'exponent' && x.appliesTo) {
      const p = c[x.appliesTo] || 1;
      k *= Math.pow(p, C);
    }
  }
  return k;
}
function Jl(c, a, s) {
  const k = {};
  for (const [E, x] of Object.entries(a)) k[E] = np(x, c, s);
  return k;
}
function rp(c) {
  const a = Math.max(...Object.values(c));
  return Object.keys(c).filter((s) => Math.abs(c[s] - a) < 1e-4);
}
function ss(c) {
  return Object.fromEntries(Object.keys(c).map((a) => [a, 0]));
}
function lp(c, a) {
  const s = (a == null ? void 0 : a.causes) || Yl,
    k = (a == null ? void 0 : a.dimensions) || Xl,
    E = yc(a),
    x = Object.keys(s),
    N = ss(s);
  for (const { options: _, probability: S } of Zl(c)) {
    const T = Jl(_, s, k);
    for (const [$, b] of Object.entries(T)) N[$] += S * b;
  }
  const C = x.map((_) => N[_]),
    p = gc(C, 100, E),
    v = { evs: N };
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
    E = ss(s);
  for (const { options: N, probability: C } of Zl(c)) {
    const p = Jl(N, s, k),
      v = rp(p),
      _ = C / v.length;
    for (const S of v) E[S] += _;
  }
  const x = {};
  for (const N of Object.keys(s)) x[N] = E[N] * 100;
  return x;
}
function ip(c, a) {
  const s = (a == null ? void 0 : a.causes) || Yl,
    k = (a == null ? void 0 : a.dimensions) || Xl,
    E = yc(a),
    x = Object.keys(s),
    N = ss(s);
  for (const { options: C, probability: p } of Zl(c)) {
    const v = Jl(C, s, k),
      _ = p * 100,
      S = x.map(($) => v[$]),
      T = gc(S, _, E);
    x.forEach(($, b) => {
      N[$] += T[b];
    });
  }
  return N;
}
function sp(c, a) {
  const s = (a == null ? void 0 : a.causes) || Yl,
    k = (a == null ? void 0 : a.dimensions) || Xl,
    E = Object.keys(s),
    x = up(E);
  let N = x[0],
    C = -1 / 0;
  for (const p of x) {
    let v = 1 / 0;
    for (const { options: _, probability: S } of Zl(c)) {
      if (S < 0.001) continue;
      const T = Jl(_, s, k);
      let $ = 0;
      for (const b of E) $ += T[b] * (p[b] / 100);
      v = Math.min(v, $);
    }
    v > C && ((C = v), (N = { ...p }));
  }
  return N;
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
  const E = Math.floor(100 / s),
    x = 100 - E * s,
    N = new Array(s).fill(E);
  ((N[0] += x), a.push(k(N)));
  const C = [
    [60, 20, 20],
    [70, 15, 15],
    [80, 10, 10],
  ];
  for (const p of C)
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
function _c(c, a, s, k = null, E = null) {
  const x = E ? s[E] : 0,
    N = 100 - x;
  a = Math.max(0, Math.min(N, a));
  const C = k || s,
    p = Object.keys(s).filter((T) => T !== c && T !== E),
    v = p.reduce((T, $) => T + C[$], 0),
    _ = 100 - a - x,
    S = { [c]: a };
  if ((E && (S[E] = s[E]), v === 0)) {
    const T = Math.floor(_ / p.length);
    let $ = _ - T * p.length;
    p.forEach((b, G) => {
      S[b] = T + (G < $ ? 1 : 0);
    });
  } else {
    let T = 0;
    p.forEach(($, b) => {
      if (b === p.length - 1) S[$] = Math.max(0, _ - T);
      else {
        const G = C[$] / v,
          U = _ * G;
        ((S[$] = Math.max(0, U)), (T += S[$]));
      }
    });
  }
  return S;
}
function Sc(c) {
  const a = Object.keys(c),
    s = {};
  let k = 0;
  return (
    a.slice(0, -1).forEach((E) => {
      ((s[E] = Math.round(c[E])), (k += s[E]));
    }),
    (s[a[a.length - 1]] = 100 - k),
    s
  );
}
const { questions: ap } = is,
  { causes: cp, defaultCredences: rs } = Kl;
function dp(c) {
  var a;
  return !((a = c.type) != null && a.startsWith('_'));
}
const Me = ap.filter(dp);
function Bt(c) {
  return (c == null ? void 0 : c.type) === nt.INTERMISSION;
}
function es(c, a) {
  let s = 0;
  for (let k = 0; k < a; k++) Bt(c[k]) || s++;
  return s;
}
function fp(c) {
  {
    const a = c.type || nt.DEFAULT;
    return mc[a] || mc[nt.DEFAULT];
  }
}
const pp = Me.filter((c) => !Bt(c)),
  ts = pp.length,
  hc = Me.map((c) => {
    if (Bt(c)) return { ...c, type: nt.INTERMISSION };
    const a = fp(c);
    return {
      ...c,
      type: c.type || nt.DEFAULT,
      options: c.options.map((s, k) => ({ ...s, color: a[k] || a[0] })),
    };
  });
function kc() {
  return { credences: { ...rs }, originalCredences: null, inputMode: tp.OPTIONS, lockedKey: null };
}
function xc() {
  return Object.fromEntries(Me.filter((c) => !Bt(c)).map((c) => [c.id, kc()]));
}
const Ec = { currentStep: 'welcome', questions: xc(), expandedPanel: null, debugConfig: null },
  We = {
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
    case We.GO_TO_STEP:
      return { ...c, currentStep: a.payload };
    case We.UPDATE_QUESTION:
      return mp(c, a.payload.questionId, a.payload.updates);
    case We.SET_EXPANDED_PANEL:
      return { ...c, expandedPanel: a.payload };
    case We.SAVE_ORIGINALS:
      return {
        ...c,
        questions: Object.fromEntries(
          Object.entries(c.questions).map(([s, k]) => [
            s,
            { ...k, originalCredences: k.originalCredences || { ...k.credences } },
          ])
        ),
      };
    case We.RESET_TO_ORIGINAL:
      return {
        ...c,
        questions: Object.fromEntries(
          Object.entries(c.questions).map(([s, k]) => [
            s,
            { ...k, credences: k.originalCredences ? { ...k.originalCredences } : k.credences },
          ])
        ),
      };
    case We.RESET_QUIZ:
      return { ...Ec, questions: xc() };
    case We.RESTORE_FROM_URL: {
      const { credences: s } = a.payload,
        k = {};
      for (const [E, x] of Object.entries(s))
        k[E] = { ...kc(), credences: x, originalCredences: { ...x } };
      return { ...c, currentStep: 'results', questions: k };
    }
    case We.SET_DEBUG_CONFIG:
      return { ...c, debugConfig: a.payload };
    default:
      return c;
  }
}
const Cc = ee.createContext(null);
function vp({ children: c }) {
  const [a, s] = ee.useReducer(hp, Ec),
    [k, E] = ee.useState(null);
  ee.useEffect(() => {
    const D = bf();
    if (D) {
      if (D.error) {
        (E(D.error), pc(), window.setTimeout(() => E(null), 5e3));
        return;
      }
      D.credences && (s({ type: We.RESTORE_FROM_URL, payload: { credences: D.credences } }), pc());
    }
  }, []);
  const x = ee.useCallback((D) => {
      s({ type: We.GO_TO_STEP, payload: D });
    }, []),
    N = ee.useCallback((D, L) => {
      s({ type: We.UPDATE_QUESTION, payload: { questionId: D, updates: L } });
    }, []),
    C = ee.useCallback((D, L) => N(D, { credences: L }), [N]),
    p = ee.useCallback((D, L) => N(D, { inputMode: L }), [N]),
    v = ee.useCallback((D, L) => N(D, { lockedKey: L }), [N]),
    _ = ee.useCallback((D) => {
      s({ type: We.SET_EXPANDED_PANEL, payload: D });
    }, []),
    S = ee.useCallback(() => {
      s({ type: We.SAVE_ORIGINALS });
    }, []),
    T = ee.useCallback(() => {
      s({ type: We.RESET_TO_ORIGINAL });
    }, []),
    $ = ee.useCallback(() => {
      s({ type: We.RESET_QUIZ });
    }, []),
    b = ee.useCallback((D) => {
      s({ type: We.SET_DEBUG_CONFIG, payload: D });
    }, []),
    G = ee.useCallback((D) => Me.findIndex((L) => L.id === D), []),
    U = ee.useCallback(
      (D) => {
        const L = G(D);
        return L === 0 ? 'welcome' : Me[L - 1].id;
      },
      [G]
    ),
    K = ee.useCallback(
      (D) => {
        const L = G(D);
        return L === Me.length - 1 ? 'results' : Me[L + 1].id;
      },
      [G]
    ),
    le = ee.useCallback(() => {
      x(Me[0].id);
    }, [x]),
    ne = ee.useCallback(() => {
      a.currentStep === 'results' ? x(Me[Me.length - 1].id) : x(U(a.currentStep));
    }, [a.currentStep, x, U]),
    X = ee.useCallback(() => {
      const D = K(a.currentStep);
      (D === 'results' && S(), x(D));
    }, [a.currentStep, x, K, S]),
    F = ee.useCallback(
      (D) => {
        var h;
        const L = D === 'original' ? 'originalCredences' : 'credences',
          Y = Me.filter((P) => !Bt(P)),
          M = a.questions[(h = Y[0]) == null ? void 0 : h.id];
        return D === 'original' && !(M != null && M.originalCredences)
          ? null
          : Object.fromEntries(
              Y.map((P) => {
                var re;
                return [P.id, ((re = a.questions[P.id]) == null ? void 0 : re[L]) || rs];
              })
            );
      },
      [a.questions]
    ),
    j = ee.useCallback(
      (D, L) =>
        D
          ? { maxEV: lp(D, L), parliament: op(D, L), mergedFavorites: ip(D, L), maximin: sp(D, L) }
          : null,
      []
    ),
    Q = ee.useMemo(() => j(F('current'), a.debugConfig), [F, j, a.debugConfig]),
    A = ee.useMemo(() => j(F('original'), a.debugConfig), [F, j, a.debugConfig]),
    rt = ee.useMemo(
      () =>
        Object.values(a.questions).some(
          (D) =>
            D.originalCredences &&
            JSON.stringify(D.credences) !== JSON.stringify(D.originalCredences)
        ),
      [a.questions]
    ),
    me = ee.useMemo(() => G(a.currentStep), [a.currentStep, G]),
    Et = ee.useMemo(() => (me === -1 ? null : hc[me]), [me]),
    Ge = ee.useMemo(() => {
      if (me === -1) return -1;
      const D = Me[me],
        L = es(Me, me);
      return Bt(D) ? L : L + 1;
    }, [me]),
    Be = ee.useMemo(() => {
      if (me === -1) return 0;
      const D = Me[me];
      return ((Bt(D) ? es(Me, me) : Ge) / ts) * 100;
    }, [me, Ge]),
    Ye = ee.useMemo(() => {
      if (me === -1) return '';
      const D = Me[me];
      return `Question ${Bt(D) ? es(Me, me) : Ge} of ${ts}`;
    }, [me, Ge]),
    lt = ee.useMemo(() => {
      const D = {};
      return (
        Me.filter((L) => !Bt(L)).forEach((L) => {
          const Y = a.questions[L.id];
          Y &&
            (D[L.id] = {
              credences: Y.credences,
              setCredences: (M) => C(L.id, M),
              originalCredences: Y.originalCredences,
              inputMode: Y.inputMode,
              setInputMode: (M) => p(L.id, M),
              lockedKey: Y.lockedKey,
              setLockedKey: (M) => v(L.id, M),
            });
        }),
        D
      );
    }, [a.questions, C, p, v]),
    Ue = ee.useMemo(
      () => ({
        currentStep: a.currentStep,
        questions: a.questions,
        expandedPanel: a.expandedPanel,
        debugConfig: a.debugConfig,
        shareUrlError: k,
        questionsConfig: hc,
        causesConfig: cp,
        defaultCredences: rs,
        goToStep: x,
        setCredences: C,
        setInputMode: p,
        setLockedKey: v,
        setExpandedPanel: _,
        saveOriginals: S,
        resetToOriginal: T,
        resetQuiz: $,
        setDebugConfig: b,
        getQuestionIndex: G,
        getPrevStep: U,
        getNextStep: K,
        startQuiz: le,
        goBack: ne,
        goForward: X,
        currentQuestion: Et,
        currentQuestionIndex: me,
        totalQuestions: ts,
        progressPercentage: Be,
        questionNumber: Ye,
        hasChanged: rt,
        calculationResults: Q,
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
        C,
        p,
        v,
        _,
        S,
        T,
        $,
        b,
        G,
        U,
        K,
        le,
        ne,
        X,
        Et,
        me,
        Be,
        Ye,
        rt,
        Q,
        A,
        lt,
      ]
    );
  return f.jsx(Cc.Provider, { value: Ue, children: c });
}
const bl = ({ subtitle: c }) =>
  f.jsxs('header', {
    className: 'header',
    children: [
      f.jsxs('div', {
        className: 'header-brand',
        children: [
          f.jsx('img', {
            src: '/quiz-demo/prototypes/donor-compass-branding/NewLogoSVG.svg',
            alt: 'Rethink Priorities',
            height: '24',
          }),
          f.jsx('span', { className: 'header-title', children: 'Donor Compass' }),
        ],
      }),
      c && f.jsx('div', { className: 'header-subtitle', children: c }),
    ],
  });
function zr() {
  const c = ee.useContext(Cc);
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
  pe = { welcome: Cp, navigation: Np, questionScreen: jp, results: Tp, editPanel: Lp, sliders: Pp };
function Op() {
  const { questionsConfig: c, startQuiz: a } = zr(),
    s = c.filter((k) => k.type !== nt.INTERMISSION);
  return f.jsxs('div', {
    className: 'screen',
    children: [
      f.jsx(bl, { subtitle: pe.welcome.timeEstimate }),
      f.jsx('main', {
        className: 'screen-main',
        children: f.jsxs('div', {
          className: on.container,
          children: [
            f.jsxs('h1', {
              className: on.heading,
              children: [
                pe.welcome.headingLine1,
                f.jsx('br', {}),
                f.jsx('span', { className: on.headingEmphasis, children: pe.welcome.headingLine2 }),
              ],
            }),
            f.jsx('p', { className: on.intro, children: pe.welcome.intro }),
            f.jsx('button', {
              onClick: a,
              className: 'btn btn-primary',
              children: pe.welcome.startButton,
            }),
            f.jsxs('div', {
              className: on.infoBox,
              children: [
                f.jsx('div', { className: on.infoBoxLabel, children: pe.welcome.previewLabel }),
                f.jsx('div', {
                  className: on.infoBoxGrid,
                  children: s.map((k) =>
                    f.jsxs(
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
const us = ({ percentage: c }) =>
  f.jsx('div', {
    className: 'progress-container',
    children: f.jsx('div', {
      className: 'progress-track',
      children: f.jsx('div', { className: 'progress-fill', style: { width: `${c}%` } }),
    }),
  });
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rp = (c) => c.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  Nc = (...c) =>
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
      className: E = '',
      children: x,
      iconNode: N,
      ...C
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
        className: Nc('lucide', E),
        ...C,
      },
      [...N.map(([v, _]) => ee.createElement(v, _)), ...(Array.isArray(x) ? x : [x])]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sn = (c, a) => {
  const s = ee.forwardRef(({ className: k, ...E }, x) =>
    ee.createElement(zp, { ref: x, iconNode: a, className: Nc(`lucide-${Rp(c)}`, k), ...E })
  );
  return ((s.displayName = `${c}`), s);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jc = Sn('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
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
 */ const Tc = Sn('Lock', [
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
    f.jsxs('div', {
      className: _n.modeToggle,
      children: [
        f.jsx('button', {
          onClick: () => a('options'),
          className: `${_n.button} ${_n.options} ${c === 'options' ? _n.active : ''}`,
          children: pe.questionScreen.modeToggle.pickOne,
        }),
        f.jsxs('button', {
          onClick: () => a('sliders'),
          className: `${_n.button} ${_n.sliders} ${c === 'sliders' ? _n.active : ''}`,
          children: [f.jsx(Ap, { size: 14 }), pe.questionScreen.modeToggle.customMix],
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
  setCredences: E,
  color: x,
  setInputMode: N,
}) {
  const C = k[s] === 100,
    p = () => {
      const v = Object.fromEntries(Object.keys(k).map((_) => [_, _ === s ? 100 : 0]));
      (E(v), N('options'));
    };
  return f.jsx('button', {
    onClick: p,
    className: `${At.optionButton} ${C ? At.selected : At.default}`,
    style: { '--option-color': x },
    children: f.jsxs('div', {
      className: At.content,
      children: [
        f.jsxs('div', {
          className: At.textContent,
          children: [
            f.jsx('div', { className: `${At.label} ${C ? At.selected : ''}`, children: c }),
            f.jsx('div', { className: At.description, children: a }),
          ],
        }),
        C && f.jsx('div', { className: At.checkmark, children: '✓' }),
      ],
    }),
  });
}
function Lc({ credences: c, isLocked: a, lockedKey: s, onChange: k }) {
  const [E, x] = ee.useState(null),
    [N, C] = ee.useState(!1),
    p = ee.useCallback(() => {
      a || (C(!0), x({ ...c }));
    }, [a, c]),
    v = ee.useCallback(
      (S) => {
        if (a || !N) return;
        C(!1);
        const T = parseFloat(S.target.value);
        (k(T, E, !0, s), x(null));
      },
      [a, N, E, s, k]
    ),
    _ = ee.useCallback(
      (S) => {
        if (a) return;
        const T = parseFloat(S.target.value);
        k(T, E, !1, s);
      },
      [a, E, s, k]
    );
  return {
    isDragging: N,
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
function Pc({ sliderKey: c, lockedKey: a, credences: s }) {
  return ee.useMemo(() => {
    var p;
    const k = a === c,
      E = a && a !== c,
      x = E ? s[a] : 0,
      N = E ? 100 - x : 100,
      C = E ? `calc(${N}% + ${(50 - N) * 0.16}px)` : null;
    return {
      isLocked: k,
      hasLockedSibling: E,
      lockedValue: x,
      maxAllowed: N,
      thumbOffset: C,
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
  xe = {
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
  color: E,
  credences: x,
  sliderKey: N,
  lockedKey: C,
  setLockedKey: p,
}) {
  const {
      isLocked: v,
      hasLockedSibling: _,
      thumbOffset: S,
      featureEnabled: T,
    } = Pc({ sliderKey: N, lockedKey: C, credences: x }),
    { isDragging: $, dragHandlers: b } = Lc({
      credences: x,
      isLocked: v,
      lockedKey: C,
      onChange: k,
    }),
    G = () => {
      T && p(C === N ? null : N);
    },
    U = _
      ? `linear-gradient(to right, ${E} 0%, ${E} ${s}%, rgba(255,255,255,0.15) ${s}%, rgba(255,255,255,0.15) ${S}, rgba(255,255,255,0.08) ${S}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${E} 0%, ${E} ${s}%, rgba(255,255,255,0.15) ${s}%, rgba(255,255,255,0.15) 100%)`;
  return f.jsxs('div', {
    className: xe.credenceSlider,
    children: [
      f.jsxs('div', {
        className: xe.header,
        children: [
          f.jsxs('div', {
            children: [
              f.jsx('div', { className: xe.label, children: c }),
              f.jsx('div', { className: xe.description, children: a }),
            ],
          }),
          f.jsxs('div', {
            className: xe.value,
            style: { color: E },
            children: [Math.round(s), '%'],
          }),
        ],
      }),
      f.jsxs('div', {
        className: xe.sliderRow,
        children: [
          f.jsxs('div', {
            className: xe.sliderContainer,
            children: [
              f.jsx('input', {
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
              _ && f.jsx('div', { className: xe.lockLimit, style: { left: S } }),
            ],
          }),
          T &&
            f.jsx('button', {
              className: `${xe.lockButton} ${v ? xe.locked : ''}`,
              onClick: G,
              title: v ? pe.sliders.unlockTooltip : pe.sliders.lockTooltip,
              type: 'button',
              children: f.jsx(Tc, { size: 16 }),
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
  return c === nt.SELECTION ? 'options' : c === nt.CREDENCE ? 'sliders' : a;
}
function Sm() {
  const {
    currentQuestion: c,
    stateMap: a,
    questionNumber: s,
    progressPercentage: k,
    goBack: E,
    goForward: x,
  } = zr();
  if (!c) return null;
  const N = a[c.id];
  if (!N) return null;
  const {
      credences: C,
      setCredences: p,
      inputMode: v,
      setInputMode: _,
      lockedKey: S,
      setLockedKey: T,
    } = N,
    $ = c.type || nt.DEFAULT,
    b = $ === nt.DEFAULT,
    G = _m($, v),
    U = G === 'options' ? c.instructionsOptions : c.instructionsSliders;
  return f.jsxs('div', {
    className: 'screen',
    children: [
      f.jsx(bl, { subtitle: s }),
      f.jsx(us, { percentage: k }),
      f.jsx('main', {
        className: 'screen-main',
        children: f.jsxs('div', {
          className: Ir.container,
          children: [
            f.jsx('div', {
              className: Ir.categoryLabel,
              style: { color: ep },
              children: c.categoryLabel,
            }),
            f.jsx('h2', { className: Ir.heading, children: c.heading }),
            f.jsx('p', { className: Ir.instructions, children: U }),
            b && f.jsx(Vp, { mode: v, setMode: _ }),
            f.jsx('div', {
              className: 'card',
              children:
                G === 'options'
                  ? c.options.map((K) =>
                      f.jsx(
                        Jp,
                        {
                          label: K.label,
                          description: K.description,
                          optionKey: K.key,
                          credences: C,
                          setCredences: p,
                          color: K.color,
                          setInputMode: _,
                        },
                        K.key
                      )
                    )
                  : c.options.map((K) =>
                      f.jsx(
                        mm,
                        {
                          label: K.label,
                          description: K.description,
                          value: C[K.key],
                          onChange: (le, ne, X, F) => {
                            const j = _c(K.key, le, C, ne, F);
                            p(X ? Sc(j) : j);
                          },
                          color: K.color,
                          credences: C,
                          sliderKey: K.key,
                          lockedKey: S,
                          setLockedKey: T,
                        },
                        K.key
                      )
                    ),
            }),
            f.jsxs('div', {
              className: Ir.buttonRow,
              children: [
                f.jsx('button', {
                  onClick: E,
                  className: 'btn btn-secondary',
                  children: pe.navigation.back,
                }),
                f.jsx('button', {
                  onClick: x,
                  className: 'btn btn-primary',
                  children: pe.navigation.continue,
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
  Om = '_barFill_as0sb_49',
  Rm = '_barLabel_as0sb_58',
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
    barFill: Om,
    barLabel: Rm,
    compact: Im,
  },
  zm = ({
    name: c,
    percentage: a,
    color: s,
    originalPercentage: k = null,
    hasChanged: E = !1,
    simpleMode: x = !1,
  }) => {
    const N = !x && E && k !== null && a !== k,
      C = N && a > k;
    return f.jsxs('div', {
      className: `${vt.causeBar} ${x ? vt.compact : ''}`,
      children: [
        f.jsxs('div', {
          className: vt.header,
          children: [
            f.jsx('span', { className: vt.name, children: c }),
            f.jsxs('span', {
              className: vt.percentage,
              style: { color: s },
              children: [
                a.toFixed(0),
                '%',
                N &&
                  f.jsx('span', {
                    className: `${vt.changeIndicator} ${C ? vt.up : vt.down}`,
                    children: C ? '↑' : '↓',
                  }),
              ],
            }),
          ],
        }),
        f.jsxs('div', {
          className: vt.barTrack,
          children: [
            N &&
              f.jsx('div', { className: vt.barOriginal, style: { width: `${k}%`, background: s } }),
            f.jsx('div', {
              className: vt.barFill,
              style: { width: `${a}%`, background: s },
              children:
                a > 15 && f.jsxs('span', { className: vt.barLabel, children: [a.toFixed(0), '%'] }),
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
  Ce = {
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
function Oc({
  methodKey: c,
  results: a,
  evs: s = null,
  originalResults: k = null,
  causeEntries: E,
  hasChanged: x = !1,
  simpleMode: N = !1,
}) {
  const C = pe.results.methods[c],
    p = c === 'mergedFavorites' ? 'merged' : c,
    v = s
      ? `${C.footerLabel} ${E.map(([_, S]) => `${S.name.slice(0, 2)} ${s[_].toFixed(0)}`).join(' · ')}`
      : C.footerText;
  return f.jsxs('div', {
    className: `${Ce.resultCard} ${N ? Ce.compactCard : ''}`,
    children: [
      f.jsxs('div', {
        className: Ce.cardHeader,
        children: [
          f.jsx('div', { className: `${Ce.cardIcon} ${Ce[p]}`, children: C.icon }),
          f.jsxs('div', {
            children: [
              f.jsx('h3', { className: Ce.cardTitle, children: C.title }),
              !N && f.jsx('p', { className: Ce.cardSubtitle, children: C.subtitle }),
            ],
          }),
        ],
      }),
      E.map(([_, S]) =>
        f.jsx(
          zm,
          {
            name: S.name,
            percentage: a[_],
            originalPercentage: k == null ? void 0 : k[_],
            color: S.color,
            hasChanged: !N && x,
            simpleMode: N,
          },
          _
        )
      ),
      !N && f.jsx('div', { className: Ce.cardFooter, children: v }),
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
    causesConfig: E,
    goBack: x,
    goForward: N,
  } = zr();
  if (!c) return null;
  const C = Object.entries(E),
    v = [
      { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
      { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
      { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
      { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
    ].filter((_) => {
      var S;
      return ((S = ql.calculations) == null ? void 0 : S[_.flag]) === !0;
    });
  return f.jsxs('div', {
    className: 'screen',
    children: [
      f.jsx(bl, { subtitle: a }),
      f.jsx(us, { percentage: s }),
      f.jsx('main', {
        className: 'screen-main',
        children: f.jsxs('div', {
          className: Gl.container,
          children: [
            f.jsx('h2', { className: Gl.title, children: c.title }),
            f.jsx('p', { className: Gl.body, children: c.body }),
            f.jsx('div', {
              className: Ce.resultsGrid,
              children: v.map((_) =>
                f.jsx(
                  Oc,
                  {
                    methodKey: _.key,
                    results: k[_.key],
                    evs: _.hasEvs ? k[_.key].evs : null,
                    causeEntries: C,
                  },
                  _.key
                )
              ),
            }),
            f.jsxs('div', {
              className: Gl.buttonRow,
              children: [
                f.jsx('button', {
                  onClick: x,
                  className: 'btn btn-secondary',
                  children: pe.navigation.back,
                }),
                f.jsx('button', {
                  onClick: N,
                  className: 'btn btn-primary',
                  children: pe.navigation.continue,
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
  credences: E,
  sliderKey: x,
  lockedKey: N,
  setLockedKey: C,
}) {
  const {
      isLocked: p,
      hasLockedSibling: v,
      thumbOffset: _,
      featureEnabled: S,
    } = Pc({ sliderKey: x, lockedKey: N, credences: E }),
    { isDragging: T, dragHandlers: $ } = Lc({
      credences: E,
      isLocked: p,
      lockedKey: N,
      onChange: s,
    }),
    b = () => {
      S && C(N === x ? null : x);
    },
    G = v
      ? `linear-gradient(to right, ${k} 0%, ${k} ${a}%, rgba(255,255,255,0.15) ${a}%, rgba(255,255,255,0.15) ${_}, rgba(255,255,255,0.08) ${_}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${k} 0%, ${k} ${a}%, rgba(255,255,255,0.15) ${a}%, rgba(255,255,255,0.15) 100%)`;
  return f.jsxs('div', {
    className: xe.compactSlider,
    children: [
      f.jsxs('div', {
        className: xe.header,
        children: [
          f.jsx('span', { className: xe.label, children: c }),
          f.jsxs('span', {
            className: xe.value,
            style: { color: k },
            children: [Math.round(a), '%'],
          }),
        ],
      }),
      f.jsxs('div', {
        className: xe.sliderRow,
        children: [
          f.jsxs('div', {
            className: xe.sliderContainer,
            children: [
              f.jsx('input', {
                type: 'range',
                min: '0',
                max: '100',
                step: 'any',
                value: a,
                ...$,
                'data-dragging': T,
                disabled: p,
                style: { background: G, cursor: p ? 'not-allowed' : 'pointer' },
              }),
              v && f.jsx('div', { className: xe.lockLimit, style: { left: _ } }),
            ],
          }),
          S &&
            f.jsx('button', {
              className: `${xe.lockButton} ${p ? xe.locked : ''}`,
              onClick: b,
              title: p ? pe.sliders.unlockTooltip : pe.sliders.lockTooltip,
              type: 'button',
              children: f.jsx(Tc, { size: 14 }),
            }),
        ],
      }),
    ],
  });
}
function wh({ label: c, color: a, isSelected: s, onSelect: k }) {
  return f.jsxs('button', {
    type: 'button',
    onClick: k,
    className: `${xe.compactSelection} ${s ? xe.selected : ''}`,
    style: { '--selection-color': a },
    children: [
      f.jsx('span', { className: xe.selectionLabel, children: c }),
      f.jsx('span', {
        className: xe.selectionIndicator,
        style: { borderColor: s ? a : void 0, backgroundColor: s ? a : void 0 },
        children: s && f.jsx(jc, { size: 12, strokeWidth: 3 }),
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
  Oh = '_footerNote_1er15_78',
  Rh = '_resetButton_1er15_84',
  Ih = '_selectionRow_1er15_103',
  Ae = {
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
    footerNote: Oh,
    resetButton: Rh,
    selectionRow: Ih,
  };
function zh({
  title: c,
  icon: a,
  credences: s,
  setCredences: k,
  originalCredences: E,
  configs: x,
  isExpanded: N,
  onToggle: C,
  lockedKey: p,
  setLockedKey: v,
  questionType: _ = nt.DEFAULT,
}) {
  const S = E && JSON.stringify(s) !== JSON.stringify(E),
    T = _ === nt.SELECTION,
    $ = (U) => {
      const K = {};
      (x.forEach((le) => {
        K[le.key] = le.key === U ? 100 : 0;
      }),
        k(K));
    },
    b = (U) => {
      (U.stopPropagation(), k({ ...E }));
    },
    G = x.map((U) => `${U.short}:${s[U.key]}%`).join(' ');
  return f.jsxs('div', {
    className: `${Ae.editPanel} ${N ? Ae.expanded : ''}`,
    children: [
      f.jsxs('button', {
        onClick: C,
        className: Ae.toggleButton,
        children: [
          f.jsxs('div', {
            className: Ae.buttonContent,
            children: [
              f.jsx('span', { className: Ae.icon, children: a }),
              f.jsx('span', { className: Ae.title, children: c }),
              S &&
                f.jsx('span', {
                  className: Ae.modifiedBadge,
                  children: pe.editPanel.modifiedBadge,
                }),
              !N && f.jsx('span', { className: Ae.preview, children: G }),
            ],
          }),
          f.jsx('span', {
            className: Ae.chevron,
            children: N ? f.jsx(Dp, { size: 16 }) : f.jsx(Mp, { size: 16 }),
          }),
        ],
      }),
      N &&
        f.jsx('div', {
          className: Ae.content,
          children: T
            ? f.jsxs(f.Fragment, {
                children: [
                  f.jsx('div', {
                    className: Ae.selectionRow,
                    children: x.map((U) =>
                      f.jsx(
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
                  f.jsxs('div', {
                    className: Ae.footer,
                    children: [
                      f.jsx('span', {
                        className: Ae.footerNote,
                        children: pe.editPanel.selectionNote || 'Pick one option',
                      }),
                      S &&
                        f.jsxs('button', {
                          onClick: b,
                          className: Ae.resetButton,
                          children: [f.jsx(ls, { size: 10 }), ' ', pe.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              })
            : f.jsxs(f.Fragment, {
                children: [
                  x.map((U) =>
                    f.jsx(
                      gh,
                      {
                        label: U.label,
                        value: s[U.key],
                        onChange: (K, le, ne, X) => {
                          const F = _c(U.key, K, s, le, X);
                          k(ne ? Sc(F) : F);
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
                  f.jsxs('div', {
                    className: Ae.footer,
                    children: [
                      f.jsx('span', {
                        className: Ae.footerNote,
                        children: pe.editPanel.sliderNote,
                      }),
                      S &&
                        f.jsxs('button', {
                          onClick: b,
                          className: Ae.resetButton,
                          children: [f.jsx(ls, { size: 10 }), ' ', pe.editPanel.resetButton],
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
  var X;
  const {
      questionsConfig: c,
      causesConfig: a,
      stateMap: s,
      expandedPanel: k,
      setExpandedPanel: E,
      calculationResults: x,
      originalCalculationResults: N,
      hasChanged: C,
      resetToOriginal: p,
      resetQuiz: v,
      goBack: _,
    } = zr(),
    [S, T] = ee.useState(!1),
    $ = Object.entries(a),
    G = [
      { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
      { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
      { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
      { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
    ].filter((F) => {
      var j;
      return ((j = ql.calculations) == null ? void 0 : j[F.flag]) === !0;
    }),
    U = async () => {
      const F = Object.fromEntries(Object.entries(s).map(([A, rt]) => [A, rt.credences])),
        j = Jf(F),
        Q = () => {
          (T(!0), window.setTimeout(() => T(!1), 2e3));
        };
      try {
        await navigator.clipboard.writeText(j);
      } catch {
        const A = document.createElement('textarea');
        ((A.value = j),
          document.body.appendChild(A),
          A.select(),
          document.execCommand('copy'),
          document.body.removeChild(A));
      }
      Q();
    },
    K = (F) =>
      F.options.map((j) => ({
        key: j.key,
        label: j.panelLabel,
        short: j.panelShort,
        color: j.color,
      })),
    le = c.filter((F) => F.type !== nt.INTERMISSION),
    ne = () =>
      f.jsx('div', {
        className: Ce.resultsGrid,
        children: G.map((F) => {
          const j = x == null ? void 0 : x[F.key];
          return j
            ? f.jsx(
                Oc,
                {
                  methodKey: F.key,
                  results: j,
                  evs: F.hasEvs ? j.evs : null,
                  originalResults: N == null ? void 0 : N[F.key],
                  causeEntries: $,
                  hasChanged: C,
                },
                F.key
              )
            : null;
        }),
      });
  return f.jsxs('div', {
    className: Ce.resultsContainer,
    children: [
      f.jsx(bl, {}),
      f.jsx(us, { percentage: 100 }),
      f.jsxs('div', {
        className: Ce.inner,
        children: [
          f.jsx('div', {
            className: Ce.resultsHeader,
            children: f.jsxs('h1', {
              className: Ce.title,
              children: [
                pe.results.heading,
                C &&
                  f.jsx('span', {
                    className: Ce.modifiedIndicator,
                    children: pe.results.modifiedIndicator,
                  }),
              ],
            }),
          }),
          ne(),
          f.jsxs('div', {
            className: Ce.adjustPanel,
            children: [
              f.jsxs('div', {
                className: Ce.adjustHeader,
                children: [
                  f.jsx('span', {
                    className: Ce.adjustTitle,
                    children: pe.results.adjustCredencesHeading,
                  }),
                  C &&
                    f.jsxs('button', {
                      onClick: p,
                      className: Ce.resetAllButton,
                      children: [f.jsx(ls, { size: 10 }), ' ', pe.results.resetAllButton],
                    }),
                ],
              }),
              f.jsx('div', {
                className: Ce.panelList,
                children: le.map((F) => {
                  const j = s[F.id];
                  return j
                    ? f.jsx(
                        zh,
                        {
                          title: F.editPanelTitle,
                          icon: F.emoji,
                          credences: j.credences,
                          setCredences: j.setCredences,
                          originalCredences: j.originalCredences,
                          configs: K(F),
                          isExpanded: k === F.id,
                          onToggle: () => E(k === F.id ? null : F.id),
                          lockedKey: j.lockedKey,
                          setLockedKey: j.setLockedKey,
                          questionType: F.type,
                        },
                        F.id
                      )
                    : null;
                }),
              }),
            ],
          }),
          f.jsxs('div', {
            className: Ce.backButtonContainer,
            children: [
              f.jsx('button', {
                onClick: _,
                className: 'btn btn-secondary',
                children: pe.navigation.backToQuiz,
              }),
              f.jsxs('button', {
                onClick: U,
                className: `btn btn-secondary ${S ? Ce.copied : ''}`,
                children: [
                  S ? f.jsx(jc, { size: 16 }) : f.jsx(Fp, { size: 16 }),
                  S ? pe.results.shareCopied : pe.results.shareButton,
                ],
              }),
              (X = ql.ui) == null ? void 0 : X.resetButton,
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
  Oe = {
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
  bh = wc(!0),
  ev = ({ onConfigChange: c }) => {
    const [a, s] = ee.useState(!1),
      [k, E] = ee.useState({
        causes: JSON.parse(JSON.stringify(Zh)),
        dimensions: JSON.parse(JSON.stringify(bh)),
        diminishingReturns: Jh,
      }),
      x = (p, v, _) => {
        E((S) => ({
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
      N = (p, v, _) => {
        E((S) => ({
          ...S,
          dimensions: {
            ...S.dimensions,
            [p]: { ...S.dimensions[p], options: { ...S.dimensions[p].options, [v]: Number(_) } },
          },
        }));
      },
      C = () => {
        (c(k), s(!1));
      };
    return f.jsxs(f.Fragment, {
      children: [
        f.jsx('button', {
          className: Oe.debugButton,
          onClick: () => s(!0),
          title: 'Debug Settings',
          children: 'Settings',
        }),
        a &&
          f.jsx('div', {
            className: Oe.overlay,
            onClick: () => s(!1),
            children: f.jsxs('div', {
              className: Oe.modal,
              onClick: (p) => p.stopPropagation(),
              children: [
                f.jsxs('div', {
                  className: Oe.header,
                  children: [
                    f.jsx('h2', { children: 'Calculation Debugger' }),
                    f.jsx('button', {
                      className: Oe.closeButton,
                      onClick: () => s(!1),
                      children: 'x',
                    }),
                  ],
                }),
                f.jsxs('div', {
                  className: Oe.content,
                  children: [
                    f.jsxs('section', {
                      className: Oe.section,
                      children: [
                        f.jsx('h3', { children: 'DIMINISHING RETURNS' }),
                        f.jsx('div', {
                          className: Oe.fieldRow,
                          children: f.jsxs('label', {
                            children: [
                              'Mode:',
                              f.jsx('select', {
                                value: k.diminishingReturns,
                                onChange: (p) =>
                                  E((v) => ({ ...v, diminishingReturns: p.target.value })),
                                children: Object.keys(ns).map((p) =>
                                  f.jsxs(
                                    'option',
                                    { value: p, children: [p, ' (power = ', ns[p], ')'] },
                                    p
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                        f.jsx('p', {
                          className: Oe.dimInfo,
                          children:
                            'none = winner-take-all · sqrt = moderate spreading · extreme = near-equal',
                        }),
                      ],
                    }),
                    f.jsxs('section', {
                      className: Oe.section,
                      children: [
                        f.jsx('h3', { children: 'CAUSES' }),
                        Object.entries(k.causes).map(([p, v]) =>
                          f.jsxs(
                            'div',
                            {
                              className: Oe.causeBlock,
                              children: [
                                f.jsx('h4', { children: v.name }),
                                f.jsxs('div', {
                                  className: Oe.fieldRow,
                                  children: [
                                    f.jsxs('label', {
                                      children: [
                                        'Points:',
                                        f.jsx('input', {
                                          type: 'number',
                                          value: v.points,
                                          onChange: (_) => x(p, 'points', _.target.value),
                                        }),
                                      ],
                                    }),
                                    f.jsxs('label', {
                                      children: [
                                        'Scale Factor:',
                                        f.jsx('input', {
                                          type: 'number',
                                          value: v.scaleFactor,
                                          onChange: (_) => x(p, 'scaleFactor', _.target.value),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                f.jsxs('div', {
                                  className: Oe.checkboxRow,
                                  children: [
                                    f.jsxs('label', {
                                      children: [
                                        f.jsx('input', {
                                          type: 'checkbox',
                                          checked: v.helpsAnimals,
                                          onChange: (_) => x(p, 'helpsAnimals', _.target.checked),
                                        }),
                                        'Helps Animals',
                                      ],
                                    }),
                                    f.jsxs('label', {
                                      children: [
                                        f.jsx('input', {
                                          type: 'checkbox',
                                          checked: v.helpsFutureHumans,
                                          onChange: (_) =>
                                            x(p, 'helpsFutureHumans', _.target.checked),
                                        }),
                                        'Helps Future Humans',
                                      ],
                                    }),
                                    f.jsxs('label', {
                                      children: [
                                        f.jsx('input', {
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
                    f.jsxs('section', {
                      className: Oe.section,
                      children: [
                        f.jsx('h3', { children: 'DIMENSIONS (from questions)' }),
                        Object.entries(k.dimensions).map(([p, v]) =>
                          f.jsxs(
                            'div',
                            {
                              className: Oe.multiplierGroup,
                              children: [
                                f.jsx('h4', { children: v.name }),
                                f.jsx('p', {
                                  className: Oe.dimInfo,
                                  children:
                                    v.applyAs === 'multiplier'
                                      ? `Multiplier when: ${v.appliesWhen}`
                                      : `Exponent on: ${v.appliesTo}`,
                                }),
                                f.jsx('div', {
                                  className: Oe.multiplierRow,
                                  children: Object.entries(v.options).map(([_, S]) =>
                                    f.jsxs(
                                      'label',
                                      {
                                        children: [
                                          _,
                                          ':',
                                          f.jsx('input', {
                                            type: 'number',
                                            step: v.applyAs === 'exponent' ? '0.1' : '0.01',
                                            value: S,
                                            onChange: (T) => N(p, _, T.target.value),
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
                f.jsx('div', {
                  className: Oe.footer,
                  children: f.jsx('button', {
                    className: Oe.saveButton,
                    onClick: C,
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
  function E() {
    return c === 'welcome'
      ? f.jsx(Op, {})
      : c === 'results'
        ? f.jsx(Mh, {})
        : a
          ? a.type === nt.INTERMISSION
            ? f.jsx(yh, {})
            : f.jsx(Sm, {})
          : null;
  }
  return f.jsxs(f.Fragment, {
    children: [
      k && f.jsx('div', { style: tv, children: k }),
      E(),
      f.jsx(ev, { onConfigChange: s }),
    ],
  });
}
function rv() {
  return f.jsx(vp, { children: f.jsx(nv, {}) });
}
Af.createRoot(document.getElementById('root')).render(
  f.jsx(ee.StrictMode, { children: f.jsx(rv, {}) })
);
