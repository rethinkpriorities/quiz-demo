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
var qi = { exports: {} },
  Rr = {},
  Ki = { exports: {} },
  oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nc;
function Pf() {
  if (nc) return oe;
  nc = 1;
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
    var fe = arguments.length - 2;
    if (fe === 1) ue.children = re;
    else if (1 < fe) {
      for (var we = Array(fe), ot = 0; ot < fe; ot++) we[ot] = arguments[ot + 2];
      ue.children = we;
    }
    if (h && h.defaultProps)
      for (ie in ((fe = h.defaultProps), fe)) ue[ie] === void 0 && (ue[ie] = fe[ie]);
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
      for (var fe = 0; fe < h.length; fe++) {
        ae = h[fe];
        var we = ie + Be(ae, fe);
        he += Ye(ae, P, re, we, ue);
      }
    else if (((we = T(h)), typeof we == 'function'))
      for (h = we.call(h), fe = 0; !(ae = h.next()).done; )
        ((ae = ae.value), (we = ie + Be(ae, fe++)), (he += Ye(ae, P, re, we, ue)));
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
          var fe = h.type.defaultProps;
        for (we in P)
          F.call(P, we) &&
            !Q.hasOwnProperty(we) &&
            (ie[we] = P[we] === void 0 && fe !== void 0 ? fe[we] : P[we]);
      }
      var we = arguments.length - 2;
      if (we === 1) ie.children = re;
      else if (1 < we) {
        fe = Array(we);
        for (var ot = 0; ot < we; ot++) fe[ot] = arguments[ot + 2];
        ie.children = fe;
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
var rc;
function ls() {
  return (rc || ((rc = 1), (Ki.exports = Pf())), Ki.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lc;
function Of() {
  if (lc) return Rr;
  lc = 1;
  var c = ls(),
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
var oc;
function Rf() {
  return (oc || ((oc = 1), (qi.exports = Of())), qi.exports);
}
var f = Rf(),
  ee = ls(),
  Wl = {},
  Yi = { exports: {} },
  tt = {},
  Xi = { exports: {} },
  Zi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ic;
function If() {
  return (
    ic ||
      ((ic = 1),
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
      })(Zi)),
    Zi
  );
}
var sc;
function zf() {
  return (sc || ((sc = 1), (Xi.exports = If())), Xi.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uc;
function Mf() {
  if (uc) return tt;
  uc = 1;
  var c = ls(),
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
  function fe(e) {
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
  function us(e) {
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
  function bl(e, t) {
    var n = t.checked;
    return M({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function as(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = fe(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      }));
  }
  function cs(e, t) {
    ((t = t.checked), t != null && ne(e, 'checked', t, !1));
  }
  function eo(e, t) {
    cs(e, t);
    var n = fe(t.value),
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
      ? to(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && to(e, t.type, fe(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function ds(e, t, n) {
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
  function to(e, t, n) {
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
      for (n = '' + fe(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function no(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return M({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function fs(e, t) {
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
    e._wrapperState = { initialValue: fe(n) };
  }
  function ps(e, t) {
    var n = fe(t.value),
      r = fe(t.defaultValue);
    (n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r));
  }
  function ms(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function hs(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function ro(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? hs(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var Fr,
    vs = (function (e) {
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
  function ys(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (Yn.hasOwnProperty(e) && Yn[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function gs(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = ys(n, t[n], r);
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
  function lo(e, t) {
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
  function oo(e, t) {
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
  var io = null;
  function so(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var uo = null,
    xn = null,
    En = null;
  function ws(e) {
    if ((e = yr(e))) {
      if (typeof uo != 'function') throw Error(s(280));
      var t = e.stateNode;
      t && ((t = il(t)), uo(e.stateNode, e.type, t));
    }
  }
  function _s(e) {
    xn ? (En ? En.push(e) : (En = [e])) : (xn = e);
  }
  function Ss() {
    if (xn) {
      var e = xn,
        t = En;
      if (((En = xn = null), ws(e), t)) for (e = 0; e < t.length; e++) ws(t[e]);
    }
  }
  function ks(e, t) {
    return e(t);
  }
  function xs() {}
  var ao = !1;
  function Es(e, t, n) {
    if (ao) return e(t, n);
    ao = !0;
    try {
      return ks(e, t, n);
    } finally {
      ((ao = !1), (xn !== null || En !== null) && (xs(), Ss()));
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
  var co = !1;
  if (C)
    try {
      var Zn = {};
      (Object.defineProperty(Zn, 'passive', {
        get: function () {
          co = !0;
        },
      }),
        window.addEventListener('test', Zn, Zn),
        window.removeEventListener('test', Zn, Zn));
    } catch {
      co = !1;
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
    fo = null,
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
      Br || ((Br = !0), (fo = w));
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
  function Cs(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Ns(e) {
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
          if (o === n) return (Ns(l), e);
          if (o === r) return (Ns(l), t);
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
  function js(e) {
    return ((e = Ac(e)), e !== null ? Ts(e) : null);
  }
  function Ts(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ts(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ls = a.unstable_scheduleCallback,
    Ps = a.unstable_cancelCallback,
    Bc = a.unstable_shouldYield,
    Uc = a.unstable_requestPaint,
    Ne = a.unstable_now,
    $c = a.unstable_getCurrentPriorityLevel,
    po = a.unstable_ImmediatePriority,
    Os = a.unstable_UserBlockingPriority,
    Ur = a.unstable_NormalPriority,
    Qc = a.unstable_LowPriority,
    Rs = a.unstable_IdlePriority,
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
  function mo(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Is() {
    var e = Qr;
    return ((Qr <<= 1), (Qr & 4194240) === 0 && (Qr = 64), e);
  }
  function ho(e) {
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
  function vo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - yt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var pe = 0;
  function zs(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Ms,
    yo,
    Ds,
    Fs,
    As,
    go = !1,
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
  function Bs(e, t) {
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
        t !== null && ((t = yr(t)), t !== null && yo(t)),
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
  function Us(e) {
    var t = un(e.target);
    if (t !== null) {
      var n = sn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Cs(n)), t !== null)) {
            ((e.blockedOn = t),
              As(e.priority, function () {
                Ds(n);
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
      var n = _o(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((io = r), n.target.dispatchEvent(r), (io = null));
      } else return ((t = yr(n)), t !== null && yo(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function $s(e, t, n) {
    Gr(e) && n.delete(t);
  }
  function Jc() {
    ((go = !1),
      Ut !== null && Gr(Ut) && (Ut = null),
      $t !== null && Gr($t) && ($t = null),
      Qt !== null && Gr(Qt) && (Qt = null),
      tr.forEach($s),
      nr.forEach($s));
  }
  function lr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      go || ((go = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, Jc)));
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
      (Us(n), n.blockedOn === null && Ht.shift());
  }
  var Cn = X.ReactCurrentBatchConfig,
    qr = !0;
  function bc(e, t, n, r) {
    var l = pe,
      o = Cn.transition;
    Cn.transition = null;
    try {
      ((pe = 1), wo(e, t, n, r));
    } finally {
      ((pe = l), (Cn.transition = o));
    }
  }
  function ed(e, t, n, r) {
    var l = pe,
      o = Cn.transition;
    Cn.transition = null;
    try {
      ((pe = 4), wo(e, t, n, r));
    } finally {
      ((pe = l), (Cn.transition = o));
    }
  }
  function wo(e, t, n, r) {
    if (qr) {
      var l = _o(e, t, n, r);
      if (l === null) (Fo(e, t, r, Kr, n), Bs(e, r));
      else if (Zc(l, e, t, n, r)) r.stopPropagation();
      else if ((Bs(e, r), t & 4 && -1 < Xc.indexOf(e))) {
        for (; l !== null; ) {
          var o = yr(l);
          if (
            (o !== null && Ms(o), (o = _o(e, t, n, r)), o === null && Fo(e, t, r, Kr, n), o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Fo(e, t, r, null, n);
    }
  }
  var Kr = null;
  function _o(e, t, n, r) {
    if (((Kr = null), (e = so(r)), (e = un(e)), e !== null))
      if (((t = sn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Cs(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Kr = e), null);
  }
  function Qs(e) {
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
          case po:
            return 1;
          case Os:
            return 4;
          case Ur:
          case Qc:
            return 16;
          case Rs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Vt = null,
    So = null,
    Yr = null;
  function Hs() {
    if (Yr) return Yr;
    var e,
      t = So,
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
  function Vs() {
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
          : Vs),
        (this.isPropagationStopped = Vs),
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
    ko = it(Nn),
    ir = M({}, Nn, { view: 0, detail: 0 }),
    td = it(ir),
    xo,
    Eo,
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
      getModifierState: No,
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
                ? ((xo = e.screenX - sr.screenX), (Eo = e.screenY - sr.screenY))
                : (Eo = xo = 0),
              (sr = e)),
            xo);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Eo;
      },
    }),
    Ws = it(Jr),
    nd = M({}, Jr, { dataTransfer: 0 }),
    rd = it(nd),
    ld = M({}, ir, { relatedTarget: 0 }),
    Co = it(ld),
    od = M({}, Nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    id = it(od),
    sd = M({}, Nn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ud = it(sd),
    ad = M({}, Nn, { data: 0 }),
    Gs = it(ad),
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
  function No() {
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
      getModifierState: No,
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
    qs = it(vd),
    yd = M({}, ir, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: No,
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
    jo = C && 'CompositionEvent' in window,
    ur = null;
  C && 'documentMode' in document && (ur = document.documentMode);
  var Ed = C && 'TextEvent' in window && !ur,
    Ks = C && (!jo || (ur && 8 < ur && 11 >= ur)),
    Ys = ' ',
    Xs = !1;
  function Zs(e, t) {
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
  function Js(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var jn = !1;
  function Cd(e, t) {
    switch (e) {
      case 'compositionend':
        return Js(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Xs = !0), Ys);
      case 'textInput':
        return ((e = t.data), e === Ys && Xs ? null : e);
      default:
        return null;
    }
  }
  function Nd(e, t) {
    if (jn)
      return e === 'compositionend' || (!jo && Zs(e, t))
        ? ((e = Hs()), (Yr = So = Vt = null), (jn = !1), e)
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
        return Ks && t.locale !== 'ko' ? null : t.data;
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
  function bs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!jd[e.type] : t === 'textarea';
  }
  function eu(e, t, n, r) {
    (_s(r),
      (t = rl(t, 'onChange')),
      0 < t.length &&
        ((n = new ko('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
  }
  var ar = null,
    cr = null;
  function Td(e) {
    gu(e, 0);
  }
  function br(e) {
    var t = Rn(e);
    if (us(t)) return e;
  }
  function Ld(e, t) {
    if (e === 'change') return t;
  }
  var tu = !1;
  if (C) {
    var To;
    if (C) {
      var Lo = 'oninput' in document;
      if (!Lo) {
        var nu = document.createElement('div');
        (nu.setAttribute('oninput', 'return;'), (Lo = typeof nu.oninput == 'function'));
      }
      To = Lo;
    } else To = !1;
    tu = To && (!document.documentMode || 9 < document.documentMode);
  }
  function ru() {
    ar && (ar.detachEvent('onpropertychange', lu), (cr = ar = null));
  }
  function lu(e) {
    if (e.propertyName === 'value' && br(cr)) {
      var t = [];
      (eu(t, cr, e, so(e)), Es(Td, t));
    }
  }
  function Pd(e, t, n) {
    e === 'focusin'
      ? (ru(), (ar = t), (cr = n), ar.attachEvent('onpropertychange', lu))
      : e === 'focusout' && ru();
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
  function ou(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function iu(e, t) {
    var n = ou(e);
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
      n = ou(n);
    }
  }
  function su(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? su(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function uu() {
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
  function Po(e) {
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
    var t = uu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && su(n.ownerDocument.documentElement, n)) {
      if (r !== null && Po(n)) {
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
            (l = iu(n, o)));
          var i = iu(n, r);
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
    Oo = null,
    fr = null,
    Ro = !1;
  function au(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ro ||
      Tn == null ||
      Tn !== Dr(r) ||
      ((r = Tn),
      'selectionStart' in r && Po(r)
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
          ((t = new ko('onSelect', 'select', null, t, n)),
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
    Io = {},
    cu = {};
  C &&
    ((cu = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Ln.animationend.animation,
      delete Ln.animationiteration.animation,
      delete Ln.animationstart.animation),
    'TransitionEvent' in window || delete Ln.transitionend.transition);
  function tl(e) {
    if (Io[e]) return Io[e];
    if (!Ln[e]) return e;
    var t = Ln[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in cu) return (Io[e] = t[n]);
    return e;
  }
  var du = tl('animationend'),
    fu = tl('animationiteration'),
    pu = tl('animationstart'),
    mu = tl('transitionend'),
    hu = new Map(),
    vu =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Wt(e, t) {
    (hu.set(e, t), x(t, [e]));
  }
  for (var zo = 0; zo < vu.length; zo++) {
    var Mo = vu[zo],
      Fd = Mo.toLowerCase(),
      Ad = Mo[0].toUpperCase() + Mo.slice(1);
    Wt(Fd, 'on' + Ad);
  }
  (Wt(du, 'onAnimationEnd'),
    Wt(fu, 'onAnimationIteration'),
    Wt(pu, 'onAnimationStart'),
    Wt('dblclick', 'onDoubleClick'),
    Wt('focusin', 'onFocus'),
    Wt('focusout', 'onBlur'),
    Wt(mu, 'onTransitionEnd'),
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
  function yu(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n), Fc(r, t, void 0, e), (e.currentTarget = null));
  }
  function gu(e, t) {
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
            (yu(l, u, w), (o = d));
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
            (yu(l, u, w), (o = d));
          }
      }
    }
    if (Br) throw ((e = fo), (Br = !1), (fo = null), e);
  }
  function ye(e, t) {
    var n = t[Ho];
    n === void 0 && (n = t[Ho] = new Set());
    var r = e + '__bubble';
    n.has(r) || (wu(t, e, 2, !1), n.add(r));
  }
  function Do(e, t, n) {
    var r = 0;
    (t && (r |= 4), wu(n, e, r, t));
  }
  var nl = '_reactListening' + Math.random().toString(36).slice(2);
  function mr(e) {
    if (!e[nl]) {
      ((e[nl] = !0),
        k.forEach(function (n) {
          n !== 'selectionchange' && (Bd.has(n) || Do(n, !1, e), Do(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[nl] || ((t[nl] = !0), Do('selectionchange', !1, t));
    }
  }
  function wu(e, t, n, r) {
    switch (Qs(t)) {
      case 1:
        var l = bc;
        break;
      case 4:
        l = ed;
        break;
      default:
        l = wo;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !co || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function Fo(e, t, n, r, l) {
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
    Es(function () {
      var w = o,
        R = so(n),
        I = [];
      e: {
        var O = hu.get(e);
        if (O !== void 0) {
          var B = ko,
            V = e;
          switch (e) {
            case 'keypress':
              if (Xr(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              B = hd;
              break;
            case 'focusin':
              ((V = 'focus'), (B = Co));
              break;
            case 'focusout':
              ((V = 'blur'), (B = Co));
              break;
            case 'beforeblur':
            case 'afterblur':
              B = Co;
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
              B = Ws;
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
            case du:
            case fu:
            case pu:
              B = id;
              break;
            case mu:
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
              B = qs;
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
            O && n !== io && (V = n.relatedTarget || n.fromElement) && (un(V) || V[Pt]))
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
              ((W = Ws),
              (z = 'onMouseLeave'),
              (y = 'onMouseEnter'),
              (m = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((W = qs), (z = 'onPointerLeave'), (y = 'onPointerEnter'), (m = 'pointer')),
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
            (B !== null && _u(I, O, B, W, !1), V !== null && je !== null && _u(I, je, V, W, !0));
          }
        }
        e: {
          if (
            ((O = w ? Rn(w) : window),
            (B = O.nodeName && O.nodeName.toLowerCase()),
            B === 'select' || (B === 'input' && O.type === 'file'))
          )
            var q = Ld;
          else if (bs(O))
            if (tu) q = Id;
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
            eu(I, q, n, R);
            break e;
          }
          (Z && Z(e, O, w),
            e === 'focusout' &&
              (Z = O._wrapperState) &&
              Z.controlled &&
              O.type === 'number' &&
              to(O, 'number', O.value));
        }
        switch (((Z = w ? Rn(w) : window), e)) {
          case 'focusin':
            (bs(Z) || Z.contentEditable === 'true') && ((Tn = Z), (Oo = w), (fr = null));
            break;
          case 'focusout':
            fr = Oo = Tn = null;
            break;
          case 'mousedown':
            Ro = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Ro = !1), au(I, n, R));
            break;
          case 'selectionchange':
            if (Dd) break;
          case 'keydown':
          case 'keyup':
            au(I, n, R);
        }
        var J;
        if (jo)
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
            ? Zs(e, n) && (te = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (te = 'onCompositionStart');
        (te &&
          (Ks &&
            n.locale !== 'ko' &&
            (jn || te !== 'onCompositionStart'
              ? te === 'onCompositionEnd' && jn && (J = Hs())
              : ((Vt = R), (So = 'value' in Vt ? Vt.value : Vt.textContent), (jn = !0))),
          (Z = rl(w, te)),
          0 < Z.length &&
            ((te = new Gs(te, e, null, n, R)),
            I.push({ event: te, listeners: Z }),
            J ? (te.data = J) : ((J = Js(n)), J !== null && (te.data = J)))),
          (J = Ed ? Cd(e, n) : Nd(e, n)) &&
            ((w = rl(w, 'onBeforeInput')),
            0 < w.length &&
              ((R = new Gs('onBeforeInput', 'beforeinput', null, n, R)),
              I.push({ event: R, listeners: w }),
              (R.data = J))));
      }
      gu(I, t);
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
  function _u(e, t, n, r, l) {
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
  function Su(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Ud,
        `
`
      )
      .replace($d, '');
  }
  function ll(e, t, n) {
    if (((t = Su(t)), Su(e) !== t && n)) throw Error(s(425));
  }
  function ol() {}
  var Ao = null,
    Bo = null;
  function Uo(e, t) {
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
  var $o = typeof setTimeout == 'function' ? setTimeout : void 0,
    Qd = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    ku = typeof Promise == 'function' ? Promise : void 0,
    Hd =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof ku < 'u'
          ? function (e) {
              return ku.resolve(null).then(e).catch(Vd);
            }
          : $o;
  function Vd(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Qo(e, t) {
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
  function xu(e) {
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
    Ho = '__reactEvents$' + On,
    Wd = '__reactListeners$' + On,
    Gd = '__reactHandles$' + On;
  function un(e) {
    var t = e[Nt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Pt] || n[Nt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = xu(e); e !== null; ) {
            if ((n = e[Nt])) return n;
            e = xu(e);
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
  var Vo = [],
    In = -1;
  function qt(e) {
    return { current: e };
  }
  function ge(e) {
    0 > In || ((e.current = Vo[In]), (Vo[In] = null), In--);
  }
  function ve(e, t) {
    (In++, (Vo[In] = e.current), (e.current = t));
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
  function Eu(e, t, n) {
    if ($e.current !== Kt) throw Error(s(168));
    (ve($e, t), ve(Xe, n));
  }
  function Cu(e, t, n) {
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
  function Nu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    (n
      ? ((e = Cu(e, t, an)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ge(Xe),
        ge($e),
        ve($e, e))
      : ge(Xe),
      ve(Xe, n));
  }
  var Ot = null,
    al = !1,
    Wo = !1;
  function ju(e) {
    Ot === null ? (Ot = [e]) : Ot.push(e);
  }
  function qd(e) {
    ((al = !0), ju(e));
  }
  function Yt() {
    if (!Wo && Ot !== null) {
      Wo = !0;
      var e = 0,
        t = pe;
      try {
        var n = Ot;
        for (pe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Ot = null), (al = !1));
      } catch (l) {
        throw (Ot !== null && (Ot = Ot.slice(e + 1)), Ls(po, Yt), l);
      } finally {
        ((pe = t), (Wo = !1));
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
  function Tu(e, t, n) {
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
  function Go(e) {
    e.return !== null && (dn(e, 1), Tu(e, 1, 0));
  }
  function qo(e) {
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
  function Lu(e, t) {
    var n = ht(5, null, null, 0);
    ((n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Pu(e, t) {
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
  function Ko(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Yo(e) {
    if (_e) {
      var t = ut;
      if (t) {
        var n = t;
        if (!Pu(e, t)) {
          if (Ko(e)) throw Error(s(418));
          t = Gt(n.nextSibling);
          var r = st;
          t && Pu(e, t) ? Lu(r, n) : ((e.flags = (e.flags & -4097) | 2), (_e = !1), (st = e));
        }
      } else {
        if (Ko(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (_e = !1), (st = e));
      }
    }
  }
  function Ou(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    st = e;
  }
  function fl(e) {
    if (e !== st) return !1;
    if (!_e) return (Ou(e), (_e = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !Uo(e.type, e.memoizedProps))),
      t && (t = ut))
    ) {
      if (Ko(e)) throw (Ru(), Error(s(418)));
      for (; t; ) (Lu(e, t), (t = Gt(t.nextSibling)));
    }
    if ((Ou(e), e.tag === 13)) {
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
  function Ru() {
    for (var e = ut; e; ) e = Gt(e.nextSibling);
  }
  function Fn() {
    ((ut = st = null), (_e = !1));
  }
  function Xo(e) {
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
  function Iu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function zu(e) {
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
        ? ((m = $i(g, y.mode, z)), (m.return = y), m)
        : ((m = l(m, g)), (m.return = y), m);
    }
    function d(y, m, g, z) {
      var q = g.type;
      return q === Q
        ? R(y, m, g.props.children, z, g.key)
        : m !== null &&
            (m.elementType === q ||
              (typeof q == 'object' && q !== null && q.$$typeof === Ue && Iu(q) === m.type))
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
        ? ((m = Qi(g, y.mode, z)), (m.return = y), m)
        : ((m = l(m, g.children || [])), (m.return = y), m);
    }
    function R(y, m, g, z, q) {
      return m === null || m.tag !== 7
        ? ((m = wn(g, y.mode, z, q)), (m.return = y), m)
        : ((m = l(m, g)), (m.return = y), m);
    }
    function I(y, m, g) {
      if ((typeof m == 'string' && m !== '') || typeof m == 'number')
        return ((m = $i('' + m, y.mode, g)), (m.return = y), m);
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
            return ((m = Qi(m, y.mode, g)), (m.return = y), m);
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
                    (typeof q == 'object' && q !== null && q.$$typeof === Ue && Iu(q) === Z.type)
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
              ((m = Qi(g, y.mode, z)), (m.return = y), (y = m));
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
            : (n(y, m), (m = $i(g, y.mode, z)), (m.return = y), (y = m)),
          i(y))
        : n(y, m);
    }
    return je;
  }
  var An = zu(!0),
    Mu = zu(!1),
    ml = qt(null),
    hl = null,
    Bn = null,
    Zo = null;
  function Jo() {
    Zo = Bn = hl = null;
  }
  function bo(e) {
    var t = ml.current;
    (ge(ml), (e._currentValue = t));
  }
  function ei(e, t, n) {
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
      (Zo = Bn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Je = !0), (e.firstContext = null)));
  }
  function ft(e) {
    var t = e._currentValue;
    if (Zo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Bn === null)) {
        if (hl === null) throw Error(s(308));
        ((Bn = e), (hl.dependencies = { lanes: 0, firstContext: e }));
      } else Bn = Bn.next = e;
    return t;
  }
  var fn = null;
  function ti(e) {
    fn === null ? (fn = [e]) : fn.push(e);
  }
  function Du(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), ti(t)) : ((n.next = l.next), (l.next = n)),
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
  function ni(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Fu(e, t) {
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
      l === null ? ((t.next = t), ti(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      zt(e, n)
    );
  }
  function vl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), vo(e, n));
    }
  }
  function Au(e, t) {
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
  function Bu(e, t, n) {
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
  function ri(e, t) {
    switch ((ve(Sr, t), ve(_r, e), ve(jt, wr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ro(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = ro(t, e)));
    }
    (ge(jt), ve(jt, t));
  }
  function $n() {
    (ge(jt), ge(_r), ge(Sr));
  }
  function Uu(e) {
    pn(Sr.current);
    var t = pn(jt.current),
      n = ro(t, e.type);
    t !== n && (ve(_r, e), ve(jt, n));
  }
  function li(e) {
    _r.current === e && (ge(jt), ge(_r));
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
  var oi = [];
  function ii() {
    for (var e = 0; e < oi.length; e++) oi[e]._workInProgressVersionPrimary = null;
    oi.length = 0;
  }
  var wl = X.ReactCurrentDispatcher,
    si = X.ReactCurrentBatchConfig,
    mn = 0,
    xe = null,
    Le = null,
    Re = null,
    _l = !1,
    kr = !1,
    xr = 0,
    Yd = 0;
  function Qe() {
    throw Error(s(321));
  }
  function ui(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!gt(e[n], t[n])) return !1;
    return !0;
  }
  function ai(e, t, n, r, l, o) {
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
        ((o += 1), (Re = Le = null), (t.updateQueue = null), (wl.current = tf), (e = n(r, l)));
      } while (kr);
    }
    if (
      ((wl.current = xl),
      (t = Le !== null && Le.next !== null),
      (mn = 0),
      (Re = Le = xe = null),
      (_l = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function ci() {
    var e = xr !== 0;
    return ((xr = 0), e);
  }
  function Tt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Re === null ? (xe.memoizedState = Re = e) : (Re = Re.next = e), Re);
  }
  function pt() {
    if (Le === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = Re === null ? xe.memoizedState : Re.next;
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
        Re === null ? (xe.memoizedState = Re = e) : (Re = Re.next = e));
    }
    return Re;
  }
  function Er(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function di(e) {
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
          (d === null ? ((u = d = I), (i = r)) : (d = d.next = I), (xe.lanes |= R), (hn |= R));
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
      do ((o = l.lane), (xe.lanes |= o), (hn |= o), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function fi(e) {
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
  function $u() {}
  function Qu(e, t) {
    var n = xe,
      r = pt(),
      l = t(),
      o = !gt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Je = !0)),
      (r = r.queue),
      pi(Wu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Re !== null && Re.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Cr(9, Vu.bind(null, n, r, l, t), void 0, null), Ie === null))
        throw Error(s(349));
      (mn & 30) !== 0 || Hu(n, t, l);
    }
    return l;
  }
  function Hu(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = xe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (xe.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Vu(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Gu(t) && qu(e));
  }
  function Wu(e, t, n) {
    return n(function () {
      Gu(t) && qu(e);
    });
  }
  function Gu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !gt(e, n);
    } catch {
      return !0;
    }
  }
  function qu(e) {
    var t = zt(e, 1);
    t !== null && xt(t, e, 1, -1);
  }
  function Ku(e) {
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
  function Yu() {
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
      if (((o = i.destroy), r !== null && ui(r, i.deps))) {
        l.memoizedState = Cr(t, n, o, r);
        return;
      }
    }
    ((xe.flags |= e), (l.memoizedState = Cr(1 | t, n, o, r)));
  }
  function Xu(e, t) {
    return Sl(8390656, 8, e, t);
  }
  function pi(e, t) {
    return kl(2048, 8, e, t);
  }
  function Zu(e, t) {
    return kl(4, 2, e, t);
  }
  function Ju(e, t) {
    return kl(4, 4, e, t);
  }
  function bu(e, t) {
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
  function ea(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), kl(4, 4, bu.bind(null, t, e), n));
  }
  function mi() {}
  function ta(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ui(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function na(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ui(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function ra(e, t, n) {
    return (mn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Je = !0)), (e.memoizedState = n))
      : (gt(n, t) || ((n = Is()), (xe.lanes |= n), (hn |= n), (e.baseState = !0)), t);
  }
  function Xd(e, t) {
    var n = pe;
    ((pe = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = si.transition;
    si.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((pe = n), (si.transition = r));
    }
  }
  function la() {
    return pt().memoizedState;
  }
  function Zd(e, t, n) {
    var r = tn(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), oa(e)))
      ia(t, n);
    else if (((n = Du(e, t, n, r)), n !== null)) {
      var l = Ke();
      (xt(n, e, r, l), sa(n, t, r));
    }
  }
  function Jd(e, t, n) {
    var r = tn(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (oa(e)) ia(t, l);
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
            (d === null ? ((l.next = l), ti(t)) : ((l.next = d.next), (d.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Du(e, t, l, r)), n !== null && ((l = Ke()), xt(n, e, r, l), sa(n, t, r)));
    }
  }
  function oa(e) {
    var t = e.alternate;
    return e === xe || (t !== null && t === xe);
  }
  function ia(e, t) {
    kr = _l = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function sa(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), vo(e, n));
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
      useEffect: Xu,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), Sl(4194308, 4, bu.bind(null, t, e), n));
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
      useState: Ku,
      useDebugValue: mi,
      useDeferredValue: function (e) {
        return (Tt().memoizedState = e);
      },
      useTransition: function () {
        var e = Ku(!1),
          t = e[0];
        return ((e = Xd.bind(null, e[1])), (Tt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = xe,
          l = Tt();
        if (_e) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), Ie === null)) throw Error(s(349));
          (mn & 30) !== 0 || Hu(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Xu(Wu.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Cr(9, Vu.bind(null, r, o, n, t), void 0, null),
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
      useCallback: ta,
      useContext: ft,
      useEffect: pi,
      useImperativeHandle: ea,
      useInsertionEffect: Zu,
      useLayoutEffect: Ju,
      useMemo: na,
      useReducer: di,
      useRef: Yu,
      useState: function () {
        return di(Er);
      },
      useDebugValue: mi,
      useDeferredValue: function (e) {
        var t = pt();
        return ra(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = di(Er)[0],
          t = pt().memoizedState;
        return [e, t];
      },
      useMutableSource: $u,
      useSyncExternalStore: Qu,
      useId: la,
      unstable_isNewReconciler: !1,
    },
    tf = {
      readContext: ft,
      useCallback: ta,
      useContext: ft,
      useEffect: pi,
      useImperativeHandle: ea,
      useInsertionEffect: Zu,
      useLayoutEffect: Ju,
      useMemo: na,
      useReducer: fi,
      useRef: Yu,
      useState: function () {
        return fi(Er);
      },
      useDebugValue: mi,
      useDeferredValue: function (e) {
        var t = pt();
        return Le === null ? (t.memoizedState = e) : ra(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = fi(Er)[0],
          t = pt().memoizedState;
        return [e, t];
      },
      useMutableSource: $u,
      useSyncExternalStore: Qu,
      useId: la,
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
  function hi(e, t, n, r) {
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
  function ua(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !dr(n, r) || !dr(l, o)
          : !0
    );
  }
  function aa(e, t, n) {
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
  function ca(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && El.enqueueReplaceState(t, t.state, null));
  }
  function vi(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), ni(e));
    var o = t.contextType;
    (typeof o == 'object' && o !== null
      ? (l.context = ft(o))
      : ((o = Ze(t) ? an : $e.current), (l.context = zn(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == 'function' && (hi(e, t, o, n), (l.state = e.memoizedState)),
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
  function yi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function gi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var nf = typeof WeakMap == 'function' ? WeakMap : Map;
  function da(e, t, n) {
    ((n = Mt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Ol || ((Ol = !0), (Ii = r)), gi(e, t));
      }),
      n
    );
  }
  function fa(e, t, n) {
    ((n = Mt(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          gi(e, t);
        }));
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == 'function' &&
        (n.callback = function () {
          (gi(e, t),
            typeof r != 'function' && (bt === null ? (bt = new Set([this])) : bt.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' });
        }),
      n
    );
  }
  function pa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new nf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = yf.bind(null, e, t, n)), t.then(e, e));
  }
  function ma(e) {
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
  function ha(e, t, n, r, l) {
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
    t.child = e === null ? Mu(t, null, n, r) : An(t, e.child, n, r);
  }
  function va(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Un(t, l),
      (r = ai(e, t, n, r, o, l)),
      (n = ci()),
      e !== null && !Je
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Dt(e, t, l))
        : (_e && n && Go(t), (t.flags |= 1), qe(e, t, r, l), t.child)
    );
  }
  function ya(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' &&
        !Ui(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), ga(e, t, o, r, l))
        : ((e = Fl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var i = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : dr), n(i, r) && e.ref === t.ref))
        return Dt(e, t, l);
    }
    return ((t.flags |= 1), (e = rn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function ga(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (dr(o, r) && e.ref === t.ref)
        if (((Je = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Je = !0);
        else return ((t.lanes = e.lanes), Dt(e, t, l));
    }
    return wi(e, t, n, r, l);
  }
  function wa(e, t, n) {
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
  function _a(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function wi(e, t, n, r, l) {
    var o = Ze(n) ? an : $e.current;
    return (
      (o = zn(t, o)),
      Un(t, l),
      (n = ai(e, t, n, r, o, l)),
      (r = ci()),
      e !== null && !Je
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Dt(e, t, l))
        : (_e && r && Go(t), (t.flags |= 1), qe(e, t, n, l), t.child)
    );
  }
  function Sa(e, t, n, r, l) {
    if (Ze(n)) {
      var o = !0;
      ul(t);
    } else o = !1;
    if ((Un(t, l), t.stateNode === null)) (Nl(e, t), aa(t, n, r), vi(t, n, r, l), (r = !0));
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
        ((u !== r || d !== w) && ca(t, i, r, w)),
        (Xt = !1));
      var O = t.memoizedState;
      ((i.state = O),
        yl(t, r, i, l),
        (d = t.memoizedState),
        u !== r || O !== d || Xe.current || Xt
          ? (typeof R == 'function' && (hi(t, n, R, r), (d = t.memoizedState)),
            (u = Xt || ua(t, n, u, r, O, d, w))
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
        Fu(e, t),
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
        ((u !== I || O !== d) && ca(t, i, r, d)),
        (Xt = !1),
        (O = t.memoizedState),
        (i.state = O),
        yl(t, r, i, l));
      var V = t.memoizedState;
      u !== I || O !== V || Xe.current || Xt
        ? (typeof B == 'function' && (hi(t, n, B, r), (V = t.memoizedState)),
          (w = Xt || ua(t, n, w, r, O, V, d) || !1)
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
    return _i(e, t, n, r, o, l);
  }
  function _i(e, t, n, r, l, o) {
    _a(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && Nu(t, n, !1), Dt(e, t, o));
    ((r = t.stateNode), (rf.current = t));
    var u = i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = An(t, e.child, null, o)), (t.child = An(t, null, u, o)))
        : qe(e, t, u, o),
      (t.memoizedState = r.state),
      l && Nu(t, n, !0),
      t.child
    );
  }
  function ka(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Eu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Eu(e, t.context, !1),
      ri(e, t.containerInfo));
  }
  function xa(e, t, n, r, l) {
    return (Fn(), Xo(l), (t.flags |= 256), qe(e, t, n, r), t.child);
  }
  var Si = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ki(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ea(e, t, n) {
    var r = t.pendingProps,
      l = ke.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      ve(ke, l & 1),
      e === null)
    )
      return (
        Yo(t),
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
                (t.child.memoizedState = ki(n)),
                (t.memoizedState = Si),
                e)
              : xi(t, i))
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
            ? ki(n)
            : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
        (o.memoizedState = i),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = Si),
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
  function xi(e, t) {
    return (
      (t = Al({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Cl(e, t, n, r) {
    return (
      r !== null && Xo(r),
      An(t, e.child, null, n),
      (e = xi(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function lf(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = yi(Error(s(422)))), Cl(e, t, i, r))
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
            (t.child.memoizedState = ki(i)),
            (t.memoizedState = Si),
            o);
    if ((t.mode & 1) === 0) return Cl(e, t, i, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return ((r = u), (o = Error(s(419))), (r = yi(o, r, void 0)), Cl(e, t, i, r));
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
      return (Bi(), (r = yi(Error(s(421)))), Cl(e, t, i, r));
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
        (t = xi(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Ca(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), ei(e.return, t, n));
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
  function Na(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((qe(e, t, r.children, n), (r = ke.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ca(e, n, t);
          else if (e.tag === 19) Ca(e, n, t);
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
    if ((ve(ke, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate), e !== null && gl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            Ei(t, !1, l, n, o));
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && gl(e) === null)) {
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
        (ka(t), Fn());
        break;
      case 5:
        Uu(t);
        break;
      case 1:
        Ze(t.type) && ul(t);
        break;
      case 4:
        ri(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (ve(ml, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ve(ke, ke.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Ea(e, t, n)
              : (ve(ke, ke.current & 1), (e = Dt(e, t, n)), e !== null ? e.sibling : null);
        ve(ke, ke.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Na(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ve(ke, ke.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), wa(e, t, n));
    }
    return Dt(e, t, n);
  }
  var ja, Ci, Ta, La;
  ((ja = function (e, t) {
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
    (Ci = function () {}),
    (Ta = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), pn(jt.current));
        var o = null;
        switch (n) {
          case 'input':
            ((l = bl(e, l)), (r = bl(e, r)), (o = []));
            break;
          case 'select':
            ((l = M({}, l, { value: void 0 })), (r = M({}, r, { value: void 0 })), (o = []));
            break;
          case 'textarea':
            ((l = no(e, l)), (r = no(e, r)), (o = []));
            break;
          default:
            typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = ol);
        }
        lo(n, r);
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
    (La = function (e, t, n, r) {
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
    switch ((qo(t), t.tag)) {
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
          ii(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (fl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), wt !== null && (Di(wt), (wt = null)))),
          Ci(e, t),
          He(t),
          null
        );
      case 5:
        li(t);
        var l = pn(Sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Ta(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
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
                (as(r, o), ye('invalid', r));
                break;
              case 'select':
                ((r._wrapperState = { wasMultiple: !!o.multiple }), ye('invalid', r));
                break;
              case 'textarea':
                (fs(r, o), ye('invalid', r));
            }
            (lo(n, o), (l = null));
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
                (Mr(r), ds(r, o, !0));
                break;
              case 'textarea':
                (Mr(r), ms(r));
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
              e === 'http://www.w3.org/1999/xhtml' && (e = hs(n)),
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
              ja(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = oo(n, r)), n)) {
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
                  (as(e, r), (l = bl(e, r)), ye('invalid', e));
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
                  (fs(e, r), (l = no(e, r)), ye('invalid', e));
                  break;
                default:
                  l = r;
              }
              (lo(n, l), (u = l));
              for (o in u)
                if (u.hasOwnProperty(o)) {
                  var d = u[o];
                  o === 'style'
                    ? gs(e, d)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((d = d ? d.__html : void 0), d != null && vs(e, d))
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
                  (Mr(e), ds(e, r, !1));
                  break;
                case 'textarea':
                  (Mr(e), ms(e));
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + fe(r.value));
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
        if (e && t.stateNode != null) La(e, t, e.memoizedProps, r);
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
          (ge(ke),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (_e && ut !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Ru(), Fn(), (t.flags |= 98560), (o = !1));
          else if (((o = fl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(s(317));
              o[Nt] = t;
            } else (Fn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (He(t), (o = !1));
          } else (wt !== null && (Di(wt), (wt = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ke.current & 1) !== 0 ? Pe === 0 && (Pe = 3) : Bi())),
            t.updateQueue !== null && (t.flags |= 4),
            He(t),
            null);
      case 4:
        return ($n(), Ci(e, t), e === null && mr(t.stateNode.containerInfo), He(t), null);
      case 10:
        return (bo(t.type._context), He(t), null);
      case 17:
        return (Ze(t.type) && sl(), He(t), null);
      case 19:
        if ((ge(ke), (o = t.memoizedState), o === null)) return (He(t), null);
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
                  return (ve(ke, (ke.current & 1) | 2), t.child);
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
            (n = ke.current),
            ve(ke, r ? (n & 1) | 2 : n & 1),
            t)
          : (He(t), null);
      case 22:
      case 23:
        return (
          Ai(),
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
    switch ((qo(t), t.tag)) {
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
          ii(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (li(t), null);
      case 13:
        if ((ge(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          Fn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (ge(ke), null);
      case 4:
        return ($n(), null);
      case 10:
        return (bo(t.type._context), null);
      case 22:
      case 23:
        return (Ai(), null);
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
          Ce(e, t, r);
        }
      else n.current = null;
  }
  function Ni(e, t, n) {
    try {
      n();
    } catch (r) {
      Ce(e, t, r);
    }
  }
  var Pa = !1;
  function cf(e, t) {
    if (((Ao = qr), (e = uu()), Po(e))) {
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
    for (Bo = { focusedElem: e, selectionRange: n }, qr = !1, H = t; H !== null; )
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
            Ce(t, t.return, z);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (H = e));
            break;
          }
          H = t.return;
        }
    return ((V = Pa), (Pa = !1), V);
  }
  function jr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          ((l.destroy = void 0), o !== void 0 && Ni(t, n, o));
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
  function ji(e) {
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
  function Oa(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Oa(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Nt], delete t[vr], delete t[Ho], delete t[Wd], delete t[Gd])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Ra(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ia(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ra(e.return)) return null;
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
  function Ti(e, t, n) {
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
      for (Ti(e, t, n), e = e.sibling; e !== null; ) (Ti(e, t, n), (e = e.sibling));
  }
  function Li(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Li(e, t, n), e = e.sibling; e !== null; ) (Li(e, t, n), (e = e.sibling));
  }
  var De = null,
    St = !1;
  function Jt(e, t, n) {
    for (n = n.child; n !== null; ) (za(e, t, n), (n = n.sibling));
  }
  function za(e, t, n) {
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
              e.nodeType === 8 ? Qo(e.parentNode, n) : e.nodeType === 1 && Qo(e, n),
              or(e))
            : Qo(De, n.stateNode));
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
              i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Ni(n, t, i),
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
            Ce(n, t, u);
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
  function Ma(e) {
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
          (za(o, i, l), (De = null), (St = !1));
          var d = l.alternate;
          (d !== null && (d.return = null), (l.return = null));
        } catch (w) {
          Ce(l, t, w);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Da(t, e), (t = t.sibling));
  }
  function Da(e, t) {
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
            d = e.updateQueue;
          if (((e.updateQueue = null), d !== null))
            try {
              (u === 'input' && o.type === 'radio' && o.name != null && cs(l, o), oo(u, i));
              var w = oo(u, o);
              for (i = 0; i < d.length; i += 2) {
                var R = d[i],
                  I = d[i + 1];
                R === 'style'
                  ? gs(l, I)
                  : R === 'dangerouslySetInnerHTML'
                    ? vs(l, I)
                    : R === 'children'
                      ? Kn(l, I)
                      : ne(l, R, I, w);
              }
              switch (u) {
                case 'input':
                  eo(l, o);
                  break;
                case 'textarea':
                  ps(l, o);
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
            !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (Ri = Ne())),
          r & 4 && Ma(e));
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
                        Ce(r, n, W);
                      }
                    }
                    break;
                  case 5:
                    Hn(O, O.return);
                    break;
                  case 22:
                    if (O.memoizedState !== null) {
                      Ba(I);
                      continue;
                    }
                }
                B !== null ? ((B.return = O), (H = B)) : Ba(I);
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
                        (u.style.display = ys('display', i))));
                } catch (W) {
                  Ce(e, e.return, W);
                }
              }
            } else if (I.tag === 6) {
              if (R === null)
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
              (R === I && (R = null), (I = I.return));
            }
            (R === I && (R = null), (I.sibling.return = I.return), (I = I.sibling));
          }
        }
        break;
      case 19:
        (kt(t, e), Lt(e), r & 4 && Ma(e));
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
            if (Ra(n)) {
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
            var o = Ia(e);
            Li(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              u = Ia(e);
            Ti(e, u, i);
            break;
          default:
            throw Error(s(161));
        }
      } catch (d) {
        Ce(e, e.return, d);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function df(e, t, n) {
    ((H = e), Fa(e));
  }
  function Fa(e, t, n) {
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
                  ? Ua(l)
                  : d !== null
                    ? ((d.return = i), (H = d))
                    : Ua(l));
          for (; o !== null; ) ((H = o), Fa(o), (o = o.sibling));
          ((H = l), (jl = u), (Ve = w));
        }
        Aa(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), (H = o)) : Aa(e);
    }
  }
  function Aa(e) {
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
                o !== null && Bu(t, o, r);
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
                  Bu(t, i, n);
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
          Ve || (t.flags & 512 && ji(t));
        } catch (O) {
          Ce(t, t.return, O);
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
  function Ba(e) {
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
  function Ua(e) {
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
              Ce(t, n, d);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (d) {
                Ce(t, l, d);
              }
            }
            var o = t.return;
            try {
              ji(t);
            } catch (d) {
              Ce(t, o, d);
            }
            break;
          case 5:
            var i = t.return;
            try {
              ji(t);
            } catch (d) {
              Ce(t, i, d);
            }
        }
      } catch (d) {
        Ce(t, t.return, d);
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
    Pi = X.ReactCurrentOwner,
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
    Oi = 0,
    Lr = null,
    be = null,
    Ri = 0,
    Wn = 1 / 0,
    Ft = null,
    Ol = !1,
    Ii = null,
    bt = null,
    Rl = !1,
    en = null,
    Il = 0,
    Pr = 0,
    zi = null,
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
          ? (Ml === 0 && (Ml = Is()), Ml)
          : ((e = pe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qs(e.type))), e);
  }
  function xt(e, t, n, r) {
    if (50 < Pr) throw ((Pr = 0), (zi = null), Error(s(185)));
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
    if (r === 0) (n !== null && Ps(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Ps(n), t === 1))
        (e.tag === 0 ? qd(Qa.bind(null, e)) : ju(Qa.bind(null, e)),
          Hd(function () {
            (se & 6) === 0 && Yt();
          }),
          (n = null));
      else {
        switch (zs(r)) {
          case 1:
            n = po;
            break;
          case 4:
            n = Os;
            break;
          case 16:
            n = Ur;
            break;
          case 536870912:
            n = Rs;
            break;
          default:
            n = Ur;
        }
        n = Xa(n, $a.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function $a(e, t) {
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
      var o = Va();
      (Ie !== e || Fe !== t) && ((Ft = null), (Wn = Ne() + 500), yn(e, t));
      do
        try {
          hf();
          break;
        } catch (u) {
          Ha(e, u);
        }
      while (!0);
      (Jo(), (Ll.current = o), (se = l), Te !== null ? (t = 0) : ((Ie = null), (Fe = 0), (t = Pe)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = mo(e)), l !== 0 && ((r = l), (t = Mi(e, l)))), t === 1))
        throw ((n = Tr), yn(e, 0), nn(e, r), et(e, Ne()), n);
      if (t === 6) nn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !pf(l) &&
            ((t = Dl(e, r)),
            t === 2 && ((o = mo(e)), o !== 0 && ((r = o), (t = Mi(e, o)))),
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
            if ((nn(e, r), (r & 130023424) === r && ((t = Ri + 500 - Ne()), 10 < t))) {
              if (Vr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Ke(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = $o(gn.bind(null, e, be, Ft), t);
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
              e.timeoutHandle = $o(gn.bind(null, e, be, Ft), r);
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
    return (et(e, Ne()), e.callbackNode === n ? $a.bind(null, e) : null);
  }
  function Mi(e, t) {
    var n = Lr;
    return (
      e.current.memoizedState.isDehydrated && (yn(e, t).flags |= 256),
      (e = Dl(e, t)),
      e !== 2 && ((t = be), (be = n), t !== null && Di(t)),
      e
    );
  }
  function Di(e) {
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
      t &= ~Oi, t &= ~Pl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - yt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function Qa(e) {
    if ((se & 6) !== 0) throw Error(s(327));
    Gn();
    var t = Vr(e, 0);
    if ((t & 1) === 0) return (et(e, Ne()), null);
    var n = Dl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = mo(e);
      r !== 0 && ((t = r), (n = Mi(e, r)));
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
  function Fi(e, t) {
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
      r = pe;
    try {
      if (((mt.transition = null), (pe = 1), e)) return e();
    } finally {
      ((pe = r), (mt.transition = n), (se = t), (se & 6) === 0 && Yt());
    }
  }
  function Ai() {
    ((at = Vn.current), ge(Vn));
  }
  function yn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Qd(n)), Te !== null))
      for (n = Te.return; n !== null; ) {
        var r = n;
        switch ((qo(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && sl());
            break;
          case 3:
            ($n(), ge(Xe), ge($e), ii());
            break;
          case 5:
            li(r);
            break;
          case 4:
            $n();
            break;
          case 13:
            ge(ke);
            break;
          case 19:
            ge(ke);
            break;
          case 10:
            bo(r.type._context);
            break;
          case 22:
          case 23:
            Ai();
        }
        n = n.return;
      }
    if (
      ((Ie = e),
      (Te = e = rn(e.current, null)),
      (Fe = at = t),
      (Pe = 0),
      (Tr = null),
      (Oi = Pl = hn = 0),
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
  function Ha(e, t) {
    do {
      var n = Te;
      try {
        if ((Jo(), (wl.current = xl), _l)) {
          for (var r = xe.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          _l = !1;
        }
        if (
          ((mn = 0),
          (Re = Le = xe = null),
          (kr = !1),
          (xr = 0),
          (Pi.current = null),
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
            var B = ma(i);
            if (B !== null) {
              ((B.flags &= -257), ha(B, i, u, o, t), B.mode & 1 && pa(o, w, t), (t = B), (d = w));
              var V = t.updateQueue;
              if (V === null) {
                var W = new Set();
                (W.add(d), (t.updateQueue = W));
              } else V.add(d);
              break e;
            } else {
              if ((t & 1) === 0) {
                (pa(o, w, t), Bi());
                break e;
              }
              d = Error(s(426));
            }
          } else if (_e && u.mode & 1) {
            var je = ma(i);
            if (je !== null) {
              ((je.flags & 65536) === 0 && (je.flags |= 256), ha(je, i, u, o, t), Xo(Qn(d, u)));
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
                var y = da(o, d, t);
                Au(o, y);
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
                  var z = fa(o, u, t);
                  Au(o, z);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Ga(n);
      } catch (q) {
        ((t = q), Te === n && n !== null && (Te = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Va() {
    var e = Ll.current;
    return ((Ll.current = xl), e === null ? xl : e);
  }
  function Bi() {
    ((Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
      Ie === null || ((hn & 268435455) === 0 && (Pl & 268435455) === 0) || nn(Ie, Fe));
  }
  function Dl(e, t) {
    var n = se;
    se |= 2;
    var r = Va();
    (Ie !== e || Fe !== t) && ((Ft = null), yn(e, t));
    do
      try {
        mf();
        break;
      } catch (l) {
        Ha(e, l);
      }
    while (!0);
    if ((Jo(), (se = n), (Ll.current = r), Te !== null)) throw Error(s(261));
    return ((Ie = null), (Fe = 0), Pe);
  }
  function mf() {
    for (; Te !== null; ) Wa(Te);
  }
  function hf() {
    for (; Te !== null && !Bc(); ) Wa(Te);
  }
  function Wa(e) {
    var t = Ya(e.alternate, e, at);
    ((e.memoizedProps = e.pendingProps), t === null ? Ga(e) : (Te = t), (Pi.current = null));
  }
  function Ga(e) {
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
    var r = pe,
      l = mt.transition;
    try {
      ((mt.transition = null), (pe = 1), vf(e, t, n, r));
    } finally {
      ((mt.transition = l), (pe = r));
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
        Xa(Ur, function () {
          return (Gn(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = mt.transition), (mt.transition = null));
      var i = pe;
      pe = 1;
      var u = se;
      ((se |= 4),
        (Pi.current = null),
        cf(e, n),
        Da(n, e),
        Md(Bo),
        (qr = !!Ao),
        (Bo = Ao = null),
        (e.current = n),
        df(n),
        Uc(),
        (se = u),
        (pe = i),
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
    if (Ol) throw ((Ol = !1), (e = Ii), (Ii = null), e);
    return (
      (Il & 1) !== 0 && e.tag !== 0 && Gn(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === zi ? Pr++ : ((Pr = 0), (zi = e))) : (Pr = 0),
      Yt(),
      null
    );
  }
  function Gn() {
    if (en !== null) {
      var e = zs(Il),
        t = mt.transition,
        n = pe;
      try {
        if (((mt.transition = null), (pe = 16 > e ? 16 : e), en === null)) var r = !1;
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
                        if ((Oa(R), R === w)) {
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
                    Ce(u, u.return, q);
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
        ((pe = n), (mt.transition = t));
      }
    }
    return !1;
  }
  function qa(e, t, n) {
    ((t = Qn(n, t)),
      (t = da(e, t, 1)),
      (e = Zt(e, t, 1)),
      (t = Ke()),
      e !== null && (er(e, 1, t), et(e, t)));
  }
  function Ce(e, t, n) {
    if (e.tag === 3) qa(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          qa(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (bt === null || !bt.has(r)))
          ) {
            ((e = Qn(n, e)),
              (e = fa(t, e, 1)),
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
        (Pe === 4 || (Pe === 3 && (Fe & 130023424) === Fe && 500 > Ne() - Ri)
          ? yn(e, 0)
          : (Oi |= n)),
      et(e, t));
  }
  function Ka(e, t) {
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
    (t !== null && (n = t.retryLane), Ka(e, n));
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
    (r !== null && r.delete(t), Ka(e, n));
  }
  var Ya;
  Ya = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Xe.current) Je = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Je = !1), of(e, t, n));
        Je = (e.flags & 131072) !== 0;
      }
    else ((Je = !1), _e && (t.flags & 1048576) !== 0 && Tu(t, dl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Nl(e, t), (e = t.pendingProps));
        var l = zn(t, $e.current);
        (Un(t, n), (l = ai(null, t, r, e, l, n)));
        var o = ci();
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
              ni(t),
              (l.updater = El),
              (t.stateNode = l),
              (l._reactInternals = t),
              vi(t, r, e, n),
              (t = _i(null, t, r, !0, o, n)))
            : ((t.tag = 0), _e && o && Go(t), qe(null, t, l, n), (t = t.child)),
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
              t = wi(null, t, r, e, n);
              break e;
            case 1:
              t = Sa(null, t, r, e, n);
              break e;
            case 11:
              t = va(null, t, r, e, n);
              break e;
            case 14:
              t = ya(null, t, r, _t(r.type, e), n);
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
          wi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : _t(r, l)),
          Sa(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((ka(t), e === null)) throw Error(s(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            Fu(e, t),
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
              ((l = Qn(Error(s(423)), t)), (t = xa(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Qn(Error(s(424)), t)), (t = xa(e, t, r, n, l)));
              break e;
            } else
              for (
                ut = Gt(t.stateNode.containerInfo.firstChild),
                  st = t,
                  _e = !0,
                  wt = null,
                  n = Mu(t, null, r, n),
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
          Uu(t),
          e === null && Yo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          Uo(r, l) ? (i = null) : o !== null && Uo(r, o) && (t.flags |= 32),
          _a(e, t),
          qe(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Yo(t), null);
      case 13:
        return Ea(e, t, n);
      case 4:
        return (
          ri(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = An(t, null, r, n)) : qe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : _t(r, l)),
          va(e, t, r, l, n)
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
                        ei(o.return, n, t),
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
                    ei(i, n, t),
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
        return ((r = t.type), (l = _t(r, t.pendingProps)), (l = _t(r.type, l)), ya(e, t, r, l, n));
      case 15:
        return ga(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : _t(r, l)),
          Nl(e, t),
          (t.tag = 1),
          Ze(r) ? ((e = !0), ul(t)) : (e = !1),
          Un(t, n),
          aa(t, r, l),
          vi(t, r, l, n),
          _i(null, t, r, !0, e, n)
        );
      case 19:
        return Na(e, t, n);
      case 22:
        return wa(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Xa(e, t) {
    return Ls(e, t);
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
  function Ui(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Sf(e) {
    if (typeof e == 'function') return Ui(e) ? 1 : 0;
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
    if (((r = e), typeof e == 'function')) Ui(e) && (i = 1);
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
  function $i(e, t, n) {
    return ((e = ht(6, e, null, t)), (e.lanes = n), e);
  }
  function Qi(e, t, n) {
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
      (this.eventTimes = ho(0)),
      (this.expirationTimes = ho(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ho(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Hi(e, t, n, r, l, o, i, u, d) {
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
      ni(o),
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
  function Za(e) {
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
      if (Ze(n)) return Cu(e, n, t);
    }
    return t;
  }
  function Ja(e, t, n, r, l, o, i, u, d) {
    return (
      (e = Hi(n, r, !0, e, l, o, i, u, d)),
      (e.context = Za(null)),
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
      (n = Za(n)),
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
  function ba(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Vi(e, t) {
    (ba(e, t), (e = e.alternate) && ba(e, t));
  }
  function Ef() {
    return null;
  }
  var ec =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Wi(e) {
    this._internalRoot = e;
  }
  (($l.prototype.render = Wi.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Bl(e, t, null, null);
    }),
    ($l.prototype.unmount = Wi.prototype.unmount =
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
      var t = Fs();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++);
      (Ht.splice(n, 0, e), n === 0 && Us(e));
    }
  };
  function Gi(e) {
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
  function tc() {}
  function Cf(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var w = Ul(i);
          o.call(w);
        };
      }
      var i = Ja(t, r, e, 0, null, !1, !1, '', tc);
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
    var d = Hi(e, 0, !1, null, null, !1, !1, '', tc);
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
  ((Ms = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = bn(t.pendingLanes);
          n !== 0 && (vo(t, n | 1), et(t, Ne()), (se & 6) === 0 && ((Wn = Ne() + 500), Yt()));
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
          Vi(e, 1));
    }
  }),
    (yo = function (e) {
      if (e.tag === 13) {
        var t = zt(e, 134217728);
        if (t !== null) {
          var n = Ke();
          xt(t, e, 134217728, n);
        }
        Vi(e, 134217728);
      }
    }),
    (Ds = function (e) {
      if (e.tag === 13) {
        var t = tn(e),
          n = zt(e, t);
        if (n !== null) {
          var r = Ke();
          xt(n, e, t, r);
        }
        Vi(e, t);
      }
    }),
    (Fs = function () {
      return pe;
    }),
    (As = function (e, t) {
      var n = pe;
      try {
        return ((pe = e), t());
      } finally {
        pe = n;
      }
    }),
    (uo = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((eo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
                (us(r), eo(r, l));
              }
            }
          }
          break;
        case 'textarea':
          ps(e, n);
          break;
        case 'select':
          ((t = n.value), t != null && kn(e, !!n.multiple, t, !1));
      }
    }),
    (ks = Fi),
    (xs = vn));
  var Nf = { usingClientEntryPoint: !1, Events: [yr, Rn, il, _s, Ss, Fi] },
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
        return ((e = js(e)), e === null ? null : e.stateNode);
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
      if (!Gi(t)) throw Error(s(200));
      return xf(e, t, null, n);
    }),
    (tt.createRoot = function (e, t) {
      if (!Gi(e)) throw Error(s(299));
      var n = !1,
        r = '',
        l = ec;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Hi(e, 1, !1, null, null, n, !1, r, l)),
        (e[Pt] = t.current),
        mr(e.nodeType === 8 ? e.parentNode : e),
        new Wi(t)
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
      return ((e = js(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (tt.flushSync = function (e) {
      return vn(e);
    }),
    (tt.hydrate = function (e, t, n) {
      if (!Ql(t)) throw Error(s(200));
      return Hl(null, e, t, !0, n);
    }),
    (tt.hydrateRoot = function (e, t, n) {
      if (!Gi(e)) throw Error(s(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        i = ec;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Ja(t, null, e, 1, n ?? null, l, !1, o, i)),
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
    (tt.unstable_batchedUpdates = Fi),
    (tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Ql(n)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Hl(e, t, n, !1, r);
    }),
    (tt.version = '18.3.1-next-f1338f8080-20240426'),
    tt
  );
}
var ac;
function Df() {
  if (ac) return Yi.exports;
  ac = 1;
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
  return (c(), (Yi.exports = Mf()), Yi.exports);
}
var cc;
function Ff() {
  if (cc) return Wl;
  cc = 1;
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
  os = { questions: Bf },
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
    sideBySideComparison: !1,
  },
  ql = { ui: Hf, calculations: Vf };
var Ji = { exports: {} },
  dc;
function Wf() {
  return (
    dc ||
      ((dc = 1),
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
      })(Ji)),
    Ji.exports
  );
}
var Gf = Wf();
const hc = Lf(Gf),
  { questions: qf } = os;
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
  return hc.compressToEncodedURIComponent(s);
}
function Xf(c) {
  try {
    const a = hc.decompressFromEncodedURIComponent(c);
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
function fc() {
  window.location.hash &&
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
const pc = {
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
  ts = { none: 1, sqrt: 0.5, extreme: 0.1 };
function vc(c) {
  const a = (c == null ? void 0 : c.diminishingReturns) || Kl.diminishingReturns || 'sqrt';
  return ts[a] ?? 0.5;
}
function yc(c, a, s = 0.5) {
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
function gc(c = !1) {
  return Object.fromEntries(
    os.questions
      .filter((a) => a.type !== 'intermission' && a.worldviewDimension)
      .map((a) => [
        a.id,
        c ? { ...a.worldviewDimension, name: a.editPanelTitle } : a.worldviewDimension,
      ])
  );
}
const Xl = gc();
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
function is(c) {
  return Object.fromEntries(Object.keys(c).map((a) => [a, 0]));
}
function lp(c, a) {
  const s = (a == null ? void 0 : a.causes) || Yl,
    k = (a == null ? void 0 : a.dimensions) || Xl,
    E = vc(a),
    x = Object.keys(s),
    N = is(s);
  for (const { options: _, probability: S } of Zl(c)) {
    const T = Jl(_, s, k);
    for (const [$, b] of Object.entries(T)) N[$] += S * b;
  }
  const C = x.map((_) => N[_]),
    p = yc(C, 100, E),
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
    E = is(s);
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
    E = vc(a),
    x = Object.keys(s),
    N = is(s);
  for (const { options: C, probability: p } of Zl(c)) {
    const v = Jl(C, s, k),
      _ = p * 100,
      S = x.map(($) => v[$]),
      T = yc(S, _, E);
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
function wc(c, a, s, k = null, E = null) {
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
function _c(c) {
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
const { questions: ap } = os,
  { causes: cp, defaultCredences: ns } = Kl;
function dp(c) {
  var a;
  return !((a = c.type) != null && a.startsWith('_'));
}
const Me = ap.filter(dp);
function Bt(c) {
  return (c == null ? void 0 : c.type) === nt.INTERMISSION;
}
function bi(c, a) {
  let s = 0;
  for (let k = 0; k < a; k++) Bt(c[k]) || s++;
  return s;
}
function fp(c) {
  {
    const a = c.type || nt.DEFAULT;
    return pc[a] || pc[nt.DEFAULT];
  }
}
const pp = Me.filter((c) => !Bt(c)),
  es = pp.length,
  mc = Me.map((c) => {
    if (Bt(c)) return { ...c, type: nt.INTERMISSION };
    const a = fp(c);
    return {
      ...c,
      type: c.type || nt.DEFAULT,
      options: c.options.map((s, k) => ({ ...s, color: a[k] || a[0] })),
    };
  });
function Sc() {
  return { credences: { ...ns }, originalCredences: null, inputMode: tp.OPTIONS, lockedKey: null };
}
function kc() {
  return Object.fromEntries(Me.filter((c) => !Bt(c)).map((c) => [c.id, Sc()]));
}
const xc = { currentStep: 'welcome', questions: kc(), expandedPanel: null, debugConfig: null },
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
      return { ...xc, questions: kc() };
    case We.RESTORE_FROM_URL: {
      const { credences: s } = a.payload,
        k = {};
      for (const [E, x] of Object.entries(s))
        k[E] = { ...Sc(), credences: x, originalCredences: { ...x } };
      return { ...c, currentStep: 'results', questions: k };
    }
    case We.SET_DEBUG_CONFIG:
      return { ...c, debugConfig: a.payload };
    default:
      return c;
  }
}
const Ec = ee.createContext(null);
function vp({ children: c }) {
  const [a, s] = ee.useReducer(hp, xc),
    [k, E] = ee.useState(null);
  ee.useEffect(() => {
    const D = bf();
    if (D) {
      if (D.error) {
        (E(D.error), fc(), window.setTimeout(() => E(null), 5e3));
        return;
      }
      D.credences && (s({ type: We.RESTORE_FROM_URL, payload: { credences: D.credences } }), fc());
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
                return [P.id, ((re = a.questions[P.id]) == null ? void 0 : re[L]) || ns];
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
    Et = ee.useMemo(() => (me === -1 ? null : mc[me]), [me]),
    Ge = ee.useMemo(() => {
      if (me === -1) return -1;
      const D = Me[me],
        L = bi(Me, me);
      return Bt(D) ? L : L + 1;
    }, [me]),
    Be = ee.useMemo(() => {
      if (me === -1) return 0;
      const D = Me[me];
      return ((Bt(D) ? bi(Me, me) : Ge) / es) * 100;
    }, [me, Ge]),
    Ye = ee.useMemo(() => {
      if (me === -1) return '';
      const D = Me[me];
      return `Question ${Bt(D) ? bi(Me, me) : Ge} of ${es}`;
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
        questionsConfig: mc,
        causesConfig: cp,
        defaultCredences: ns,
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
        totalQuestions: es,
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
  return f.jsx(Ec.Provider, { value: Ue, children: c });
}
const yp = { title: 'Moral Parliament' },
  gp = {
    timeEstimate: '~3 minutes',
    headingLine1: 'Where Should Your',
    headingLine2: 'Giving Go?',
    intro:
      'Uncertain about your ethical views? This tool helps you allocate resources across different causes based on your moral credences—the probabilities you assign to different ethical perspectives.',
    startButton: 'Start Quiz →',
    previewLabel: "You'll be asked about:",
  },
  wp = { back: '← Back', continue: 'Continue →', backToQuiz: '← Back to Quiz' },
  _p = { modeToggle: { pickOne: 'Pick One', customMix: 'Custom Mix' } },
  Sp = {
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
  kp = {
    modifiedBadge: 'modified',
    sliderNote: 'Sliders auto-balance to 100%',
    resetButton: 'Reset',
  },
  xp = { lockTooltip: 'Lock slider', unlockTooltip: 'Unlock slider' },
  de = {
    branding: yp,
    welcome: gp,
    navigation: wp,
    questionScreen: _p,
    results: Sp,
    editPanel: kp,
    sliders: xp,
  },
  ss = ({ subtitle: c }) =>
    f.jsxs('header', {
      className: 'header',
      children: [
        f.jsx('div', { className: 'header-title', children: de.branding.title }),
        c && f.jsx('div', { className: 'header-subtitle', children: c }),
      ],
    });
function zr() {
  const c = ee.useContext(Ec);
  if (!c) throw new Error('useQuiz must be used within a QuizProvider');
  return c;
}
const Ep = '_container_11wow_3',
  Cp = '_heading_11wow_8',
  Np = '_headingEmphasis_11wow_16',
  jp = '_intro_11wow_24',
  Tp = '_infoBox_11wow_32',
  Lp = '_infoBoxLabel_11wow_40',
  Pp = '_infoBoxGrid_11wow_47',
  Op = '_infoBoxItem_11wow_54',
  on = {
    container: Ep,
    heading: Cp,
    headingEmphasis: Np,
    intro: jp,
    infoBox: Tp,
    infoBoxLabel: Lp,
    infoBoxGrid: Pp,
    infoBoxItem: Op,
  };
function Rp() {
  const { questionsConfig: c, startQuiz: a } = zr(),
    s = c.filter((k) => k.type !== nt.INTERMISSION);
  return f.jsxs('div', {
    className: 'screen',
    children: [
      f.jsx(ss, { subtitle: de.welcome.timeEstimate }),
      f.jsx('main', {
        className: 'screen-main',
        children: f.jsxs('div', {
          className: on.container,
          children: [
            f.jsxs('h1', {
              className: on.heading,
              children: [
                de.welcome.headingLine1,
                f.jsx('br', {}),
                f.jsx('span', { className: on.headingEmphasis, children: de.welcome.headingLine2 }),
              ],
            }),
            f.jsx('p', { className: on.intro, children: de.welcome.intro }),
            f.jsx('button', {
              onClick: a,
              className: 'btn btn-primary',
              children: de.welcome.startButton,
            }),
            f.jsxs('div', {
              className: on.infoBox,
              children: [
                f.jsx('div', { className: on.infoBoxLabel, children: de.welcome.previewLabel }),
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
const Cc = ({ percentage: c }) =>
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
 */ const Ip = (c) => c.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
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
 */ var zp = {
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
 */ const Mp = ee.forwardRef(
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
        ...zp,
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
    ee.createElement(Mp, { ref: x, iconNode: a, className: Nc(`lucide-${Ip(c)}`, k), ...E })
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
 */ const Dp = Sn('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fp = Sn('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
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
 */ const rs = Sn('RotateCcw', [
  ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
  ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ap = Sn('Share2', [
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
 */ const Bp = Sn('SlidersVertical', [
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
  Up = '_modeToggle_modhv_3',
  $p = '_button_modhv_10',
  Qp = '_options_modhv_23',
  Hp = '_active_modhv_29',
  Vp = '_sliders_modhv_35',
  _n = { modeToggle: Up, button: $p, options: Qp, active: Hp, sliders: Vp },
  Wp = ({ mode: c, setMode: a }) =>
    f.jsxs('div', {
      className: _n.modeToggle,
      children: [
        f.jsx('button', {
          onClick: () => a('options'),
          className: `${_n.button} ${_n.options} ${c === 'options' ? _n.active : ''}`,
          children: de.questionScreen.modeToggle.pickOne,
        }),
        f.jsxs('button', {
          onClick: () => a('sliders'),
          className: `${_n.button} ${_n.sliders} ${c === 'sliders' ? _n.active : ''}`,
          children: [f.jsx(Bp, { size: 14 }), de.questionScreen.modeToggle.customMix],
        }),
      ],
    }),
  Gp = '_optionButton_xv4xt_3',
  qp = '_selected_xv4xt_20',
  Kp = '_content_xv4xt_34',
  Yp = '_textContent_xv4xt_40',
  Xp = '_label_xv4xt_44',
  Zp = '_description_xv4xt_56',
  Jp = '_checkmark_xv4xt_62',
  At = {
    optionButton: Gp,
    default: '_default_xv4xt_15',
    selected: qp,
    content: Kp,
    textContent: Yp,
    label: Xp,
    description: Zp,
    checkmark: Jp,
  };
function bp({
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
const em = '_credenceSlider_yrqg7_4',
  tm = '_header_yrqg7_8',
  nm = '_label_yrqg7_15',
  rm = '_description_yrqg7_22',
  lm = '_value_yrqg7_28',
  om = '_sliderRow_yrqg7_35',
  im = '_sliderContainer_yrqg7_41',
  sm = '_lockLimit_yrqg7_46',
  um = '_lockButton_yrqg7_55',
  am = '_locked_yrqg7_73',
  cm = '_compactSlider_yrqg7_91',
  dm = '_compactSelection_yrqg7_168',
  fm = '_selected_yrqg7_186',
  pm = '_selectionLabel_yrqg7_191',
  mm = '_selectionIndicator_yrqg7_202',
  Ee = {
    credenceSlider: em,
    header: tm,
    label: nm,
    description: rm,
    value: lm,
    sliderRow: om,
    sliderContainer: im,
    lockLimit: sm,
    lockButton: um,
    locked: am,
    compactSlider: cm,
    compactSelection: dm,
    selected: fm,
    selectionLabel: pm,
    selectionIndicator: mm,
  };
function hm({
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
    className: Ee.credenceSlider,
    children: [
      f.jsxs('div', {
        className: Ee.header,
        children: [
          f.jsxs('div', {
            children: [
              f.jsx('div', { className: Ee.label, children: c }),
              f.jsx('div', { className: Ee.description, children: a }),
            ],
          }),
          f.jsxs('div', {
            className: Ee.value,
            style: { color: E },
            children: [Math.round(s), '%'],
          }),
        ],
      }),
      f.jsxs('div', {
        className: Ee.sliderRow,
        children: [
          f.jsxs('div', {
            className: Ee.sliderContainer,
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
              _ && f.jsx('div', { className: Ee.lockLimit, style: { left: S } }),
            ],
          }),
          T &&
            f.jsx('button', {
              className: `${Ee.lockButton} ${v ? Ee.locked : ''}`,
              onClick: G,
              title: v ? de.sliders.unlockTooltip : de.sliders.lockTooltip,
              type: 'button',
              children: f.jsx(Tc, { size: 16 }),
            }),
        ],
      }),
    ],
  });
}
const vm = '_container_9yo3m_3',
  ym = '_categoryLabel_9yo3m_8',
  gm = '_heading_9yo3m_16',
  wm = '_instructions_9yo3m_23',
  _m = '_buttonRow_9yo3m_30',
  Ir = { container: vm, categoryLabel: ym, heading: gm, instructions: wm, buttonRow: _m };
function Sm(c, a, s) {
  return c === nt.SELECTION ? 'options' : c === nt.CREDENCE ? 'sliders' : a;
}
function km() {
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
    G = Sm($, v),
    U = G === 'options' ? c.instructionsOptions : c.instructionsSliders;
  return f.jsxs('div', {
    className: 'screen',
    children: [
      f.jsx(ss, { subtitle: s }),
      f.jsx(Cc, { percentage: k }),
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
            b && f.jsx(Wp, { mode: v, setMode: _ }),
            f.jsx('div', {
              className: 'card',
              children:
                G === 'options'
                  ? c.options.map((K) =>
                      f.jsx(
                        bp,
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
                        hm,
                        {
                          label: K.label,
                          description: K.description,
                          value: C[K.key],
                          onChange: (le, ne, X, F) => {
                            const j = wc(K.key, le, C, ne, F);
                            p(X ? _c(j) : j);
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
                  children: de.navigation.back,
                }),
                f.jsx('button', {
                  onClick: x,
                  className: 'btn btn-primary',
                  children: de.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const xm = '_causeBar_1uovs_3',
  Em = '_header_1uovs_7',
  Cm = '_name_1uovs_15',
  Nm = '_percentage_1uovs_19',
  jm = '_changeIndicator_1uovs_23',
  Tm = '_up_1uovs_27',
  Lm = '_down_1uovs_31',
  Pm = '_barTrack_1uovs_35',
  Om = '_barOriginal_1uovs_43',
  Rm = '_barFill_1uovs_49',
  Im = '_barLabel_1uovs_58',
  zm = '_compact_1uovs_65',
  vt = {
    causeBar: xm,
    header: Em,
    name: Cm,
    percentage: Nm,
    changeIndicator: jm,
    up: Tm,
    down: Lm,
    barTrack: Pm,
    barOriginal: Om,
    barFill: Rm,
    barLabel: Im,
    compact: zm,
  },
  Mm = ({
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
  Dm = '_resultsContainer_4lp8i_3',
  Fm = '_inner_4lp8i_11',
  Am = '_header_4lp8i_16',
  Bm = '_title_4lp8i_21',
  Um = '_modifiedIndicator_4lp8i_27',
  $m = '_resultsGrid_4lp8i_34',
  Qm = '_comparisonContainer_4lp8i_42',
  Hm = '_originalResults_4lp8i_49',
  Vm = '_newResults_4lp8i_50',
  Wm = '_slideInLeft_4lp8i_1',
  Gm = '_slideInRight_4lp8i_1',
  qm = '_comparisonDivider_4lp8i_85',
  Km = '_dividerLine_4lp8i_94',
  Ym = '_dividerArrow_4lp8i_101',
  Xm = '_compactGrid_4lp8i_108',
  Zm = '_compactCard_4lp8i_114',
  Jm = '_cardHeader_4lp8i_118',
  bm = '_cardIcon_4lp8i_122',
  eh = '_cardTitle_4lp8i_128',
  th = '_resultCard_4lp8i_132',
  nh = '_maxEV_4lp8i_156',
  rh = '_parliament_4lp8i_160',
  lh = '_cardSubtitle_4lp8i_171',
  oh = '_cardFooter_4lp8i_177',
  ih = '_adjustPanel_4lp8i_185',
  sh = '_adjustHeader_4lp8i_193',
  uh = '_adjustTitle_4lp8i_200',
  ah = '_resetAllButton_4lp8i_206',
  ch = '_panelList_4lp8i_223',
  dh = '_backButtonContainer_4lp8i_229',
  fh = '_backButton_4lp8i_229',
  ph = '_resetButton_4lp8i_254',
  mh = '_shareButton_4lp8i_272',
  hh = '_copied_4lp8i_293',
  Se = {
    resultsContainer: Dm,
    inner: Fm,
    header: Am,
    title: Bm,
    modifiedIndicator: Um,
    resultsGrid: $m,
    comparisonContainer: Qm,
    originalResults: Hm,
    newResults: Vm,
    slideInLeft: Wm,
    slideInRight: Gm,
    comparisonDivider: qm,
    dividerLine: Km,
    dividerArrow: Ym,
    compactGrid: Xm,
    compactCard: Zm,
    cardHeader: Jm,
    cardIcon: bm,
    cardTitle: eh,
    resultCard: th,
    maxEV: nh,
    parliament: rh,
    cardSubtitle: lh,
    cardFooter: oh,
    adjustPanel: ih,
    adjustHeader: sh,
    adjustTitle: uh,
    resetAllButton: ah,
    panelList: ch,
    backButtonContainer: dh,
    backButton: fh,
    resetButton: ph,
    shareButton: mh,
    copied: hh,
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
  const C = de.results.methods[c],
    p = c === 'mergedFavorites' ? 'merged' : c,
    v = s
      ? `${C.footerLabel} ${E.map(([_, S]) => `${S.name.slice(0, 2)} ${s[_].toFixed(0)}`).join(' · ')}`
      : C.footerText;
  return f.jsxs('div', {
    className: `${Se.resultCard} ${N ? Se.compactCard : ''}`,
    children: [
      f.jsxs('div', {
        className: Se.cardHeader,
        children: [
          f.jsx('div', { className: `${Se.cardIcon} ${Se[p]}`, children: C.icon }),
          f.jsxs('div', {
            children: [
              f.jsx('h3', { className: Se.cardTitle, children: C.title }),
              !N && f.jsx('p', { className: Se.cardSubtitle, children: C.subtitle }),
            ],
          }),
        ],
      }),
      E.map(([_, S]) =>
        f.jsx(
          Mm,
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
      !N && f.jsx('div', { className: Se.cardFooter, children: v }),
    ],
  });
}
const vh = '_container_1m8cr_3',
  yh = '_title_1m8cr_8',
  gh = '_body_1m8cr_16',
  wh = '_buttonRow_1m8cr_25',
  Gl = { container: vh, title: yh, body: gh, buttonRow: wh };
function _h() {
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
      f.jsx(ss, { subtitle: a }),
      f.jsx(Cc, { percentage: s }),
      f.jsx('main', {
        className: 'screen-main',
        children: f.jsxs('div', {
          className: Gl.container,
          children: [
            f.jsx('h2', { className: Gl.title, children: c.title }),
            f.jsx('p', { className: Gl.body, children: c.body }),
            f.jsx('div', {
              className: Se.resultsGrid,
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
                  children: de.navigation.back,
                }),
                f.jsx('button', {
                  onClick: N,
                  className: 'btn btn-primary',
                  children: de.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Sh({
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
      ? `linear-gradient(to right, ${k} 0%, ${k} ${a}%, rgb(51,65,85) ${a}%, rgb(51,65,85) ${_}, rgb(30,41,59) ${_}, rgb(30,41,59) 100%)`
      : `linear-gradient(to right, ${k} 0%, ${k} ${a}%, rgb(51,65,85) ${a}%, rgb(51,65,85) 100%)`;
  return f.jsxs('div', {
    className: Ee.compactSlider,
    children: [
      f.jsxs('div', {
        className: Ee.header,
        children: [
          f.jsx('span', { className: Ee.label, children: c }),
          f.jsxs('span', {
            className: Ee.value,
            style: { color: k },
            children: [Math.round(a), '%'],
          }),
        ],
      }),
      f.jsxs('div', {
        className: Ee.sliderRow,
        children: [
          f.jsxs('div', {
            className: Ee.sliderContainer,
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
              v && f.jsx('div', { className: Ee.lockLimit, style: { left: _ } }),
            ],
          }),
          S &&
            f.jsx('button', {
              className: `${Ee.lockButton} ${p ? Ee.locked : ''}`,
              onClick: b,
              title: p ? de.sliders.unlockTooltip : de.sliders.lockTooltip,
              type: 'button',
              children: f.jsx(Tc, { size: 14 }),
            }),
        ],
      }),
    ],
  });
}
function kh({ label: c, color: a, isSelected: s, onSelect: k }) {
  return f.jsxs('button', {
    type: 'button',
    onClick: k,
    className: `${Ee.compactSelection} ${s ? Ee.selected : ''}`,
    style: { '--selection-color': a },
    children: [
      f.jsx('span', { className: Ee.selectionLabel, children: c }),
      f.jsx('span', {
        className: Ee.selectionIndicator,
        style: { borderColor: s ? a : void 0, backgroundColor: s ? a : void 0 },
        children: s && f.jsx(jc, { size: 12, strokeWidth: 3 }),
      }),
    ],
  });
}
const xh = '_editPanel_9crrd_3',
  Eh = '_expanded_9crrd_11',
  Ch = '_toggleButton_9crrd_16',
  Nh = '_buttonContent_9crrd_33',
  jh = '_icon_9crrd_39',
  Th = '_title_9crrd_43',
  Lh = '_modifiedBadge_9crrd_48',
  Ph = '_preview_9crrd_56',
  Oh = '_chevron_9crrd_62',
  Rh = '_content_9crrd_66',
  Ih = '_footer_9crrd_71',
  zh = '_footerNote_9crrd_78',
  Mh = '_resetButton_9crrd_84',
  Dh = '_selectionRow_9crrd_103',
  Ae = {
    editPanel: xh,
    expanded: Eh,
    toggleButton: Ch,
    buttonContent: Nh,
    icon: jh,
    title: Th,
    modifiedBadge: Lh,
    preview: Ph,
    chevron: Oh,
    content: Rh,
    footer: Ih,
    footerNote: zh,
    resetButton: Mh,
    selectionRow: Dh,
  };
function Fh({
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
                  children: de.editPanel.modifiedBadge,
                }),
              !N && f.jsx('span', { className: Ae.preview, children: G }),
            ],
          }),
          f.jsx('span', {
            className: Ae.chevron,
            children: N ? f.jsx(Fp, { size: 16 }) : f.jsx(Dp, { size: 16 }),
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
                        kh,
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
                        children: de.editPanel.selectionNote || 'Pick one option',
                      }),
                      S &&
                        f.jsxs('button', {
                          onClick: b,
                          className: Ae.resetButton,
                          children: [f.jsx(rs, { size: 10 }), ' ', de.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              })
            : f.jsxs(f.Fragment, {
                children: [
                  x.map((U) =>
                    f.jsx(
                      Sh,
                      {
                        label: U.label,
                        value: s[U.key],
                        onChange: (K, le, ne, X) => {
                          const F = wc(U.key, K, s, le, X);
                          k(ne ? _c(F) : F);
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
                        children: de.editPanel.sliderNote,
                      }),
                      S &&
                        f.jsxs('button', {
                          onClick: b,
                          className: Ae.resetButton,
                          children: [f.jsx(rs, { size: 10 }), ' ', de.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              }),
        }),
    ],
  });
}
function Ah() {
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
        className: Se.resultsGrid,
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
  return f.jsx('div', {
    className: Se.resultsContainer,
    children: f.jsxs('div', {
      className: Se.inner,
      children: [
        f.jsx('div', {
          className: Se.header,
          children: f.jsxs('h1', {
            className: Se.title,
            children: [
              de.results.heading,
              C &&
                f.jsx('span', {
                  className: Se.modifiedIndicator,
                  children: de.results.modifiedIndicator,
                }),
            ],
          }),
        }),
        ne(),
        f.jsxs('div', {
          className: Se.adjustPanel,
          children: [
            f.jsxs('div', {
              className: Se.adjustHeader,
              children: [
                f.jsx('span', {
                  className: Se.adjustTitle,
                  children: de.results.adjustCredencesHeading,
                }),
                C &&
                  f.jsxs('button', {
                    onClick: p,
                    className: Se.resetAllButton,
                    children: [f.jsx(rs, { size: 10 }), ' ', de.results.resetAllButton],
                  }),
              ],
            }),
            f.jsx('div', {
              className: Se.panelList,
              children: le.map((F) => {
                const j = s[F.id];
                return j
                  ? f.jsx(
                      Fh,
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
          className: Se.backButtonContainer,
          children: [
            f.jsx('button', {
              onClick: _,
              className: Se.backButton,
              children: de.navigation.backToQuiz,
            }),
            f.jsxs('button', {
              onClick: U,
              className: `${Se.shareButton} ${S ? Se.copied : ''}`,
              children: [
                S ? f.jsx(jc, { size: 16 }) : f.jsx(Ap, { size: 16 }),
                S ? de.results.shareCopied : de.results.shareButton,
              ],
            }),
            (X = ql.ui) == null ? void 0 : X.resetButton,
          ],
        }),
      ],
    }),
  });
}
const Bh = '_debugButton_1fvy0_4',
  Uh = '_overlay_1fvy0_22',
  $h = '_modal_1fvy0_35',
  Qh = '_header_1fvy0_46',
  Hh = '_closeButton_1fvy0_60',
  Vh = '_content_1fvy0_73',
  Wh = '_section_1fvy0_79',
  Gh = '_causeBlock_1fvy0_93',
  qh = '_fieldRow_1fvy0_106',
  Kh = '_checkboxRow_1fvy0_130',
  Yh = '_multiplierGroup_1fvy0_149',
  Xh = '_dimInfo_1fvy0_159',
  Zh = '_multiplierRow_1fvy0_166',
  Jh = '_footer_1fvy0_190',
  bh = '_saveButton_1fvy0_197',
  Oe = {
    debugButton: Bh,
    overlay: Uh,
    modal: $h,
    header: Qh,
    closeButton: Hh,
    content: Vh,
    section: Wh,
    causeBlock: Gh,
    fieldRow: qh,
    checkboxRow: Kh,
    multiplierGroup: Yh,
    dimInfo: Xh,
    multiplierRow: Zh,
    footer: Jh,
    saveButton: bh,
  },
  { causes: ev, diminishingReturns: tv } = Kl,
  nv = gc(!0),
  rv = ({ onConfigChange: c }) => {
    const [a, s] = ee.useState(!1),
      [k, E] = ee.useState({
        causes: JSON.parse(JSON.stringify(ev)),
        dimensions: JSON.parse(JSON.stringify(nv)),
        diminishingReturns: tv,
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
                                children: Object.keys(ts).map((p) =>
                                  f.jsxs(
                                    'option',
                                    { value: p, children: [p, ' (power = ', ts[p], ')'] },
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
  lv = {
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
function ov() {
  const { currentStep: c, currentQuestion: a, setDebugConfig: s, shareUrlError: k } = zr();
  function E() {
    return c === 'welcome'
      ? f.jsx(Rp, {})
      : c === 'results'
        ? f.jsx(Ah, {})
        : a
          ? a.type === nt.INTERMISSION
            ? f.jsx(_h, {})
            : f.jsx(km, {})
          : null;
  }
  return f.jsxs(f.Fragment, {
    children: [
      k && f.jsx('div', { style: lv, children: k }),
      E(),
      f.jsx(rv, { onConfigChange: s }),
    ],
  });
}
function iv() {
  return f.jsx(vp, { children: f.jsx(ov, {}) });
}
Af.createRoot(document.getElementById('root')).render(
  f.jsx(ee.StrictMode, { children: f.jsx(iv, {}) })
);
