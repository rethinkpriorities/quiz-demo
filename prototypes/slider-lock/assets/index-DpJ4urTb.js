(function () {
  const _ = document.createElement('link').relList;
  if (_ && _.supports && _.supports('modulepreload')) return;
  for (const S of document.querySelectorAll('link[rel="modulepreload"]')) R(S);
  new MutationObserver((S) => {
    for (const C of S)
      if (C.type === 'childList')
        for (const L of C.addedNodes) L.tagName === 'LINK' && L.rel === 'modulepreload' && R(L);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(S) {
    const C = {};
    return (
      S.integrity && (C.integrity = S.integrity),
      S.referrerPolicy && (C.referrerPolicy = S.referrerPolicy),
      S.crossOrigin === 'use-credentials'
        ? (C.credentials = 'include')
        : S.crossOrigin === 'anonymous'
          ? (C.credentials = 'omit')
          : (C.credentials = 'same-origin'),
      C
    );
  }
  function R(S) {
    if (S.ep) return;
    S.ep = !0;
    const C = c(S);
    fetch(S.href, C);
  }
})();
var Gi = { exports: {} },
  Tr = {},
  Ki = { exports: {} },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ga;
function ud() {
  if (Ga) return ee;
  Ga = 1;
  var g = Symbol.for('react.element'),
    _ = Symbol.for('react.portal'),
    c = Symbol.for('react.fragment'),
    R = Symbol.for('react.strict_mode'),
    S = Symbol.for('react.profiler'),
    C = Symbol.for('react.provider'),
    L = Symbol.for('react.context'),
    M = Symbol.for('react.forward_ref'),
    j = Symbol.for('react.suspense'),
    G = Symbol.for('react.memo'),
    D = Symbol.for('react.lazy'),
    B = Symbol.iterator;
  function E(f) {
    return f === null || typeof f != 'object'
      ? null
      : ((f = (B && f[B]) || f['@@iterator']), typeof f == 'function' ? f : null);
  }
  var H = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Y = Object.assign,
    Q = {};
  function A(f, v, J) {
    ((this.props = f), (this.context = v), (this.refs = Q), (this.updater = J || H));
  }
  ((A.prototype.isReactComponent = {}),
    (A.prototype.setState = function (f, v) {
      if (typeof f != 'object' && typeof f != 'function' && f != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, f, v, 'setState');
    }),
    (A.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, 'forceUpdate');
    }));
  function q() {}
  q.prototype = A.prototype;
  function te(f, v, J) {
    ((this.props = f), (this.context = v), (this.refs = Q), (this.updater = J || H));
  }
  var ie = (te.prototype = new q());
  ((ie.constructor = te), Y(ie, A.prototype), (ie.isPureReactComponent = !0));
  var X = Array.isArray,
    ne = Object.prototype.hasOwnProperty,
    W = { current: null },
    se = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Le(f, v, J) {
    var b,
      re = {},
      le = null,
      pe = null;
    if (v != null)
      for (b in (v.ref !== void 0 && (pe = v.ref), v.key !== void 0 && (le = '' + v.key), v))
        ne.call(v, b) && !se.hasOwnProperty(b) && (re[b] = v[b]);
    var ae = arguments.length - 2;
    if (ae === 1) re.children = J;
    else if (1 < ae) {
      for (var ve = Array(ae), Ke = 0; Ke < ae; Ke++) ve[Ke] = arguments[Ke + 2];
      re.children = ve;
    }
    if (f && f.defaultProps)
      for (b in ((ae = f.defaultProps), ae)) re[b] === void 0 && (re[b] = ae[b]);
    return { $$typeof: g, type: f, key: le, ref: pe, props: re, _owner: W.current };
  }
  function Be(f, v) {
    return { $$typeof: g, type: f.type, key: v, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function Ee(f) {
    return typeof f == 'object' && f !== null && f.$$typeof === g;
  }
  function Pe(f) {
    var v = { '=': '=0', ':': '=2' };
    return (
      '$' +
      f.replace(/[=:]/g, function (J) {
        return v[J];
      })
    );
  }
  var ke = /\/+/g;
  function he(f, v) {
    return typeof f == 'object' && f !== null && f.key != null ? Pe('' + f.key) : v.toString(36);
  }
  function ce(f, v, J, b, re) {
    var le = typeof f;
    (le === 'undefined' || le === 'boolean') && (f = null);
    var pe = !1;
    if (f === null) pe = !0;
    else
      switch (le) {
        case 'string':
        case 'number':
          pe = !0;
          break;
        case 'object':
          switch (f.$$typeof) {
            case g:
            case _:
              pe = !0;
          }
      }
    if (pe)
      return (
        (pe = f),
        (re = re(pe)),
        (f = b === '' ? '.' + he(pe, 0) : b),
        X(re)
          ? ((J = ''),
            f != null && (J = f.replace(ke, '$&/') + '/'),
            ce(re, v, J, '', function (Ke) {
              return Ke;
            }))
          : re != null &&
            (Ee(re) &&
              (re = Be(
                re,
                J +
                  (!re.key || (pe && pe.key === re.key)
                    ? ''
                    : ('' + re.key).replace(ke, '$&/') + '/') +
                  f
              )),
            v.push(re)),
        1
      );
    if (((pe = 0), (b = b === '' ? '.' : b + ':'), X(f)))
      for (var ae = 0; ae < f.length; ae++) {
        le = f[ae];
        var ve = b + he(le, ae);
        pe += ce(le, v, J, ve, re);
      }
    else if (((ve = E(f)), typeof ve == 'function'))
      for (f = ve.call(f), ae = 0; !(le = f.next()).done; )
        ((le = le.value), (ve = b + he(le, ae++)), (pe += ce(le, v, J, ve, re)));
    else if (le === 'object')
      throw (
        (v = String(f)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (v === '[object Object]' ? 'object with keys {' + Object.keys(f).join(', ') + '}' : v) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return pe;
  }
  function We(f, v, J) {
    if (f == null) return f;
    var b = [],
      re = 0;
    return (
      ce(f, b, '', '', function (le) {
        return v.call(J, le, re++);
      }),
      b
    );
  }
  function Ie(f) {
    if (f._status === -1) {
      var v = f._result;
      ((v = v()),
        v.then(
          function (J) {
            (f._status === 0 || f._status === -1) && ((f._status = 1), (f._result = J));
          },
          function (J) {
            (f._status === 0 || f._status === -1) && ((f._status = 2), (f._result = J));
          }
        ),
        f._status === -1 && ((f._status = 0), (f._result = v)));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var de = { current: null },
    N = { transition: null },
    U = { ReactCurrentDispatcher: de, ReactCurrentBatchConfig: N, ReactCurrentOwner: W };
  function T() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (ee.Children = {
      map: We,
      forEach: function (f, v, J) {
        We(
          f,
          function () {
            v.apply(this, arguments);
          },
          J
        );
      },
      count: function (f) {
        var v = 0;
        return (
          We(f, function () {
            v++;
          }),
          v
        );
      },
      toArray: function (f) {
        return (
          We(f, function (v) {
            return v;
          }) || []
        );
      },
      only: function (f) {
        if (!Ee(f))
          throw Error('React.Children.only expected to receive a single React element child.');
        return f;
      },
    }),
    (ee.Component = A),
    (ee.Fragment = c),
    (ee.Profiler = S),
    (ee.PureComponent = te),
    (ee.StrictMode = R),
    (ee.Suspense = j),
    (ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U),
    (ee.act = T),
    (ee.cloneElement = function (f, v, J) {
      if (f == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + f + '.'
        );
      var b = Y({}, f.props),
        re = f.key,
        le = f.ref,
        pe = f._owner;
      if (v != null) {
        if (
          (v.ref !== void 0 && ((le = v.ref), (pe = W.current)),
          v.key !== void 0 && (re = '' + v.key),
          f.type && f.type.defaultProps)
        )
          var ae = f.type.defaultProps;
        for (ve in v)
          ne.call(v, ve) &&
            !se.hasOwnProperty(ve) &&
            (b[ve] = v[ve] === void 0 && ae !== void 0 ? ae[ve] : v[ve]);
      }
      var ve = arguments.length - 2;
      if (ve === 1) b.children = J;
      else if (1 < ve) {
        ae = Array(ve);
        for (var Ke = 0; Ke < ve; Ke++) ae[Ke] = arguments[Ke + 2];
        b.children = ae;
      }
      return { $$typeof: g, type: f.type, key: re, ref: le, props: b, _owner: pe };
    }),
    (ee.createContext = function (f) {
      return (
        (f = {
          $$typeof: L,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (f.Provider = { $$typeof: C, _context: f }),
        (f.Consumer = f)
      );
    }),
    (ee.createElement = Le),
    (ee.createFactory = function (f) {
      var v = Le.bind(null, f);
      return ((v.type = f), v);
    }),
    (ee.createRef = function () {
      return { current: null };
    }),
    (ee.forwardRef = function (f) {
      return { $$typeof: M, render: f };
    }),
    (ee.isValidElement = Ee),
    (ee.lazy = function (f) {
      return { $$typeof: D, _payload: { _status: -1, _result: f }, _init: Ie };
    }),
    (ee.memo = function (f, v) {
      return { $$typeof: G, type: f, compare: v === void 0 ? null : v };
    }),
    (ee.startTransition = function (f) {
      var v = N.transition;
      N.transition = {};
      try {
        f();
      } finally {
        N.transition = v;
      }
    }),
    (ee.unstable_act = T),
    (ee.useCallback = function (f, v) {
      return de.current.useCallback(f, v);
    }),
    (ee.useContext = function (f) {
      return de.current.useContext(f);
    }),
    (ee.useDebugValue = function () {}),
    (ee.useDeferredValue = function (f) {
      return de.current.useDeferredValue(f);
    }),
    (ee.useEffect = function (f, v) {
      return de.current.useEffect(f, v);
    }),
    (ee.useId = function () {
      return de.current.useId();
    }),
    (ee.useImperativeHandle = function (f, v, J) {
      return de.current.useImperativeHandle(f, v, J);
    }),
    (ee.useInsertionEffect = function (f, v) {
      return de.current.useInsertionEffect(f, v);
    }),
    (ee.useLayoutEffect = function (f, v) {
      return de.current.useLayoutEffect(f, v);
    }),
    (ee.useMemo = function (f, v) {
      return de.current.useMemo(f, v);
    }),
    (ee.useReducer = function (f, v, J) {
      return de.current.useReducer(f, v, J);
    }),
    (ee.useRef = function (f) {
      return de.current.useRef(f);
    }),
    (ee.useState = function (f) {
      return de.current.useState(f);
    }),
    (ee.useSyncExternalStore = function (f, v, J) {
      return de.current.useSyncExternalStore(f, v, J);
    }),
    (ee.useTransition = function () {
      return de.current.useTransition();
    }),
    (ee.version = '18.3.1'),
    ee
  );
}
var Ka;
function Ji() {
  return (Ka || ((Ka = 1), (Ki.exports = ud())), Ki.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ya;
function sd() {
  if (Ya) return Tr;
  Ya = 1;
  var g = Ji(),
    _ = Symbol.for('react.element'),
    c = Symbol.for('react.fragment'),
    R = Object.prototype.hasOwnProperty,
    S = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(M, j, G) {
    var D,
      B = {},
      E = null,
      H = null;
    (G !== void 0 && (E = '' + G),
      j.key !== void 0 && (E = '' + j.key),
      j.ref !== void 0 && (H = j.ref));
    for (D in j) R.call(j, D) && !C.hasOwnProperty(D) && (B[D] = j[D]);
    if (M && M.defaultProps) for (D in ((j = M.defaultProps), j)) B[D] === void 0 && (B[D] = j[D]);
    return { $$typeof: _, type: M, key: E, ref: H, props: B, _owner: S.current };
  }
  return ((Tr.Fragment = c), (Tr.jsx = L), (Tr.jsxs = L), Tr);
}
var qa;
function ad() {
  return (qa || ((qa = 1), (Gi.exports = sd())), Gi.exports);
}
var p = ad(),
  me = Ji(),
  $l = {},
  Yi = { exports: {} },
  tt = {},
  qi = { exports: {} },
  Xi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xa;
function cd() {
  return (
    Xa ||
      ((Xa = 1),
      (function (g) {
        function _(N, U) {
          var T = N.length;
          N.push(U);
          e: for (; 0 < T; ) {
            var f = (T - 1) >>> 1,
              v = N[f];
            if (0 < S(v, U)) ((N[f] = U), (N[T] = v), (T = f));
            else break e;
          }
        }
        function c(N) {
          return N.length === 0 ? null : N[0];
        }
        function R(N) {
          if (N.length === 0) return null;
          var U = N[0],
            T = N.pop();
          if (T !== U) {
            N[0] = T;
            e: for (var f = 0, v = N.length, J = v >>> 1; f < J; ) {
              var b = 2 * (f + 1) - 1,
                re = N[b],
                le = b + 1,
                pe = N[le];
              if (0 > S(re, T))
                le < v && 0 > S(pe, re)
                  ? ((N[f] = pe), (N[le] = T), (f = le))
                  : ((N[f] = re), (N[b] = T), (f = b));
              else if (le < v && 0 > S(pe, T)) ((N[f] = pe), (N[le] = T), (f = le));
              else break e;
            }
          }
          return U;
        }
        function S(N, U) {
          var T = N.sortIndex - U.sortIndex;
          return T !== 0 ? T : N.id - U.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var C = performance;
          g.unstable_now = function () {
            return C.now();
          };
        } else {
          var L = Date,
            M = L.now();
          g.unstable_now = function () {
            return L.now() - M;
          };
        }
        var j = [],
          G = [],
          D = 1,
          B = null,
          E = 3,
          H = !1,
          Y = !1,
          Q = !1,
          A = typeof setTimeout == 'function' ? setTimeout : null,
          q = typeof clearTimeout == 'function' ? clearTimeout : null,
          te = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function ie(N) {
          for (var U = c(G); U !== null; ) {
            if (U.callback === null) R(G);
            else if (U.startTime <= N) (R(G), (U.sortIndex = U.expirationTime), _(j, U));
            else break;
            U = c(G);
          }
        }
        function X(N) {
          if (((Q = !1), ie(N), !Y))
            if (c(j) !== null) ((Y = !0), Ie(ne));
            else {
              var U = c(G);
              U !== null && de(X, U.startTime - N);
            }
        }
        function ne(N, U) {
          ((Y = !1), Q && ((Q = !1), q(Le), (Le = -1)), (H = !0));
          var T = E;
          try {
            for (ie(U), B = c(j); B !== null && (!(B.expirationTime > U) || (N && !Pe())); ) {
              var f = B.callback;
              if (typeof f == 'function') {
                ((B.callback = null), (E = B.priorityLevel));
                var v = f(B.expirationTime <= U);
                ((U = g.unstable_now()),
                  typeof v == 'function' ? (B.callback = v) : B === c(j) && R(j),
                  ie(U));
              } else R(j);
              B = c(j);
            }
            if (B !== null) var J = !0;
            else {
              var b = c(G);
              (b !== null && de(X, b.startTime - U), (J = !1));
            }
            return J;
          } finally {
            ((B = null), (E = T), (H = !1));
          }
        }
        var W = !1,
          se = null,
          Le = -1,
          Be = 5,
          Ee = -1;
        function Pe() {
          return !(g.unstable_now() - Ee < Be);
        }
        function ke() {
          if (se !== null) {
            var N = g.unstable_now();
            Ee = N;
            var U = !0;
            try {
              U = se(!0, N);
            } finally {
              U ? he() : ((W = !1), (se = null));
            }
          } else W = !1;
        }
        var he;
        if (typeof te == 'function')
          he = function () {
            te(ke);
          };
        else if (typeof MessageChannel < 'u') {
          var ce = new MessageChannel(),
            We = ce.port2;
          ((ce.port1.onmessage = ke),
            (he = function () {
              We.postMessage(null);
            }));
        } else
          he = function () {
            A(ke, 0);
          };
        function Ie(N) {
          ((se = N), W || ((W = !0), he()));
        }
        function de(N, U) {
          Le = A(function () {
            N(g.unstable_now());
          }, U);
        }
        ((g.unstable_IdlePriority = 5),
          (g.unstable_ImmediatePriority = 1),
          (g.unstable_LowPriority = 4),
          (g.unstable_NormalPriority = 3),
          (g.unstable_Profiling = null),
          (g.unstable_UserBlockingPriority = 2),
          (g.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (g.unstable_continueExecution = function () {
            Y || H || ((Y = !0), Ie(ne));
          }),
          (g.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Be = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (g.unstable_getCurrentPriorityLevel = function () {
            return E;
          }),
          (g.unstable_getFirstCallbackNode = function () {
            return c(j);
          }),
          (g.unstable_next = function (N) {
            switch (E) {
              case 1:
              case 2:
              case 3:
                var U = 3;
                break;
              default:
                U = E;
            }
            var T = E;
            E = U;
            try {
              return N();
            } finally {
              E = T;
            }
          }),
          (g.unstable_pauseExecution = function () {}),
          (g.unstable_requestPaint = function () {}),
          (g.unstable_runWithPriority = function (N, U) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var T = E;
            E = N;
            try {
              return U();
            } finally {
              E = T;
            }
          }),
          (g.unstable_scheduleCallback = function (N, U, T) {
            var f = g.unstable_now();
            switch (
              (typeof T == 'object' && T !== null
                ? ((T = T.delay), (T = typeof T == 'number' && 0 < T ? f + T : f))
                : (T = f),
              N)
            ) {
              case 1:
                var v = -1;
                break;
              case 2:
                v = 250;
                break;
              case 5:
                v = 1073741823;
                break;
              case 4:
                v = 1e4;
                break;
              default:
                v = 5e3;
            }
            return (
              (v = T + v),
              (N = {
                id: D++,
                callback: U,
                priorityLevel: N,
                startTime: T,
                expirationTime: v,
                sortIndex: -1,
              }),
              T > f
                ? ((N.sortIndex = T),
                  _(G, N),
                  c(j) === null && N === c(G) && (Q ? (q(Le), (Le = -1)) : (Q = !0), de(X, T - f)))
                : ((N.sortIndex = v), _(j, N), Y || H || ((Y = !0), Ie(ne))),
              N
            );
          }),
          (g.unstable_shouldYield = Pe),
          (g.unstable_wrapCallback = function (N) {
            var U = E;
            return function () {
              var T = E;
              E = U;
              try {
                return N.apply(this, arguments);
              } finally {
                E = T;
              }
            };
          }));
      })(Xi)),
    Xi
  );
}
var Ja;
function fd() {
  return (Ja || ((Ja = 1), (qi.exports = cd())), qi.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Za;
function dd() {
  if (Za) return tt;
  Za = 1;
  var g = Ji(),
    _ = fd();
  function c(e) {
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
  var R = new Set(),
    S = {};
  function C(e, t) {
    (L(e, t), L(e + 'Capture', t));
  }
  function L(e, t) {
    for (S[e] = t, e = 0; e < t.length; e++) R.add(t[e]);
  }
  var M = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    j = Object.prototype.hasOwnProperty,
    G =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    D = {},
    B = {};
  function E(e) {
    return j.call(B, e) ? !0 : j.call(D, e) ? !1 : G.test(e) ? (B[e] = !0) : ((D[e] = !0), !1);
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
  function Y(e, t, n, r) {
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
  function Q(e, t, n, r, l, o, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i));
  }
  var A = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      A[e] = new Q(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      A[t] = new Q(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      A[e] = new Q(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        A[e] = new Q(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        A[e] = new Q(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      A[e] = new Q(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      A[e] = new Q(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      A[e] = new Q(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      A[e] = new Q(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var q = /[\-:]([a-z])/g;
  function te(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(q, te);
      A[t] = new Q(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(q, te);
        A[t] = new Q(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(q, te);
      A[t] = new Q(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      A[e] = new Q(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (A.xlinkHref = new Q('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      A[e] = new Q(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function ie(e, t, n, r) {
    var l = A.hasOwnProperty(t) ? A[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (Y(t, n, l, r) && (n = null),
      r || l === null
        ? E(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
    W = Symbol.for('react.portal'),
    se = Symbol.for('react.fragment'),
    Le = Symbol.for('react.strict_mode'),
    Be = Symbol.for('react.profiler'),
    Ee = Symbol.for('react.provider'),
    Pe = Symbol.for('react.context'),
    ke = Symbol.for('react.forward_ref'),
    he = Symbol.for('react.suspense'),
    ce = Symbol.for('react.suspense_list'),
    We = Symbol.for('react.memo'),
    Ie = Symbol.for('react.lazy'),
    de = Symbol.for('react.offscreen'),
    N = Symbol.iterator;
  function U(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (N && e[N]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var T = Object.assign,
    f;
  function v(e) {
    if (f === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        f = (t && t[1]) || '';
      }
    return (
      `
` +
      f +
      e
    );
  }
  var J = !1;
  function b(e, t) {
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
                  var s =
                    `
` + l[i].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      s.includes('<anonymous>') &&
                      (s = s.replace('<anonymous>', e.displayName)),
                    s
                  );
                }
              while (1 <= i && 0 <= u);
            break;
          }
      }
    } finally {
      ((J = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? v(e) : '';
  }
  function re(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v('Lazy');
      case 13:
        return v('Suspense');
      case 19:
        return v('SuspenseList');
      case 0:
      case 2:
      case 15:
        return ((e = b(e.type, !1)), e);
      case 11:
        return ((e = b(e.type.render, !1)), e);
      case 1:
        return ((e = b(e.type, !0)), e);
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
      case W:
        return 'Portal';
      case Be:
        return 'Profiler';
      case Le:
        return 'StrictMode';
      case he:
        return 'Suspense';
      case ce:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Pe:
          return (e.displayName || 'Context') + '.Consumer';
        case Ee:
          return (e._context.displayName || 'Context') + '.Provider';
        case ke:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case We:
          return ((t = e.displayName || null), t !== null ? t : le(e.type) || 'Memo');
        case Ie:
          ((t = e._payload), (e = e._init));
          try {
            return le(e(t));
          } catch {}
      }
    return null;
  }
  function pe(e) {
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
        return t === Le ? 'StrictMode' : 'Mode';
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
  function ae(e) {
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
  function ve(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Ke(e) {
    var t = ve(e) ? 'checked' : 'value',
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
    e._valueTracker || (e._valueTracker = Ke(e));
  }
  function Zi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = ve(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ir(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Zl(e, t) {
    var n = t.checked;
    return T({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function bi(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = ae(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      }));
  }
  function eu(e, t) {
    ((t = t.checked), t != null && ie(e, 'checked', t, !1));
  }
  function bl(e, t) {
    eu(e, t);
    var n = ae(t.value),
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
      ? eo(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && eo(e, t.type, ae(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function tu(e, t, n) {
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
  function eo(e, t, n) {
    (t !== 'number' || Ir(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var Qn = Array.isArray;
  function Sn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + ae(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function to(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(c(91));
    return T({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function nu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(c(92));
        if (Qn(n)) {
          if (1 < n.length) throw Error(c(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: ae(n) };
  }
  function ru(e, t) {
    var n = ae(t.value),
      r = ae(t.defaultValue);
    (n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r));
  }
  function lu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function ou(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function no(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? ou(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var Mr,
    iu = (function (e) {
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
          Mr = Mr || document.createElement('div'),
            Mr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = Mr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Gn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Kn = {
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
    cc = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Kn).forEach(function (e) {
    cc.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Kn[t] = Kn[e]));
    });
  });
  function uu(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (Kn.hasOwnProperty(e) && Kn[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function su(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = uu(n, t[n], r);
        (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var fc = T(
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
  function ro(e, t) {
    if (t) {
      if (fc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(c(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(c(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(c(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(c(62));
    }
  }
  function lo(e, t) {
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
  var oo = null;
  function io(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var uo = null,
    kn = null,
    _n = null;
  function au(e) {
    if ((e = hr(e))) {
      if (typeof uo != 'function') throw Error(c(280));
      var t = e.stateNode;
      t && ((t = ll(t)), uo(e.stateNode, e.type, t));
    }
  }
  function cu(e) {
    kn ? (_n ? _n.push(e) : (_n = [e])) : (kn = e);
  }
  function fu() {
    if (kn) {
      var e = kn,
        t = _n;
      if (((_n = kn = null), au(e), t)) for (e = 0; e < t.length; e++) au(t[e]);
    }
  }
  function du(e, t) {
    return e(t);
  }
  function pu() {}
  var so = !1;
  function mu(e, t, n) {
    if (so) return e(t, n);
    so = !0;
    try {
      return du(e, t, n);
    } finally {
      ((so = !1), (kn !== null || _n !== null) && (pu(), fu()));
    }
  }
  function Yn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ll(n);
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
    if (n && typeof n != 'function') throw Error(c(231, t, typeof n));
    return n;
  }
  var ao = !1;
  if (M)
    try {
      var qn = {};
      (Object.defineProperty(qn, 'passive', {
        get: function () {
          ao = !0;
        },
      }),
        window.addEventListener('test', qn, qn),
        window.removeEventListener('test', qn, qn));
    } catch {
      ao = !1;
    }
  function dc(e, t, n, r, l, o, i, u, s) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (w) {
      this.onError(w);
    }
  }
  var Xn = !1,
    Fr = null,
    Dr = !1,
    co = null,
    pc = {
      onError: function (e) {
        ((Xn = !0), (Fr = e));
      },
    };
  function mc(e, t, n, r, l, o, i, u, s) {
    ((Xn = !1), (Fr = null), dc.apply(pc, arguments));
  }
  function hc(e, t, n, r, l, o, i, u, s) {
    if ((mc.apply(this, arguments), Xn)) {
      if (Xn) {
        var h = Fr;
        ((Xn = !1), (Fr = null));
      } else throw Error(c(198));
      Dr || ((Dr = !0), (co = h));
    }
  }
  function ln(e) {
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
  function hu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function vu(e) {
    if (ln(e) !== e) throw Error(c(188));
  }
  function vc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ln(e)), t === null)) throw Error(c(188));
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
          if (o === n) return (vu(l), e);
          if (o === r) return (vu(l), t);
          o = o.sibling;
        }
        throw Error(c(188));
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
          if (!i) throw Error(c(189));
        }
      }
      if (n.alternate !== r) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function yu(e) {
    return ((e = vc(e)), e !== null ? gu(e) : null);
  }
  function gu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = gu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var wu = _.unstable_scheduleCallback,
    Su = _.unstable_cancelCallback,
    yc = _.unstable_shouldYield,
    gc = _.unstable_requestPaint,
    Ne = _.unstable_now,
    wc = _.unstable_getCurrentPriorityLevel,
    fo = _.unstable_ImmediatePriority,
    ku = _.unstable_UserBlockingPriority,
    Ar = _.unstable_NormalPriority,
    Sc = _.unstable_LowPriority,
    _u = _.unstable_IdlePriority,
    Br = null,
    _t = null;
  function kc(e) {
    if (_t && typeof _t.onCommitFiberRoot == 'function')
      try {
        _t.onCommitFiberRoot(Br, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var mt = Math.clz32 ? Math.clz32 : Cc,
    _c = Math.log,
    xc = Math.LN2;
  function Cc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((_c(e) / xc) | 0)) | 0);
  }
  var Ur = 64,
    Hr = 4194304;
  function Jn(e) {
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
  function Wr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? (r = Jn(u)) : ((o &= i), o !== 0 && (r = Jn(o)));
    } else ((i = n & ~l), i !== 0 ? (r = Jn(i)) : o !== 0 && (r = Jn(o)));
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
        ((n = 31 - mt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function Ec(e, t) {
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
  function Nc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes;
      0 < o;
    ) {
      var i = 31 - mt(o),
        u = 1 << i,
        s = l[i];
      (s === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[i] = Ec(u, t))
        : s <= t && (e.expiredLanes |= u),
        (o &= ~u));
    }
  }
  function po(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function xu() {
    var e = Ur;
    return ((Ur <<= 1), (Ur & 4194240) === 0 && (Ur = 64), e);
  }
  function mo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Zn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - mt(t)),
      (e[t] = n));
  }
  function jc(e, t) {
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
      var l = 31 - mt(n),
        o = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o));
    }
  }
  function ho(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - mt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var fe = 0;
  function Cu(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Eu,
    vo,
    Nu,
    ju,
    Lu,
    yo = !1,
    $r = [],
    Dt = null,
    At = null,
    Bt = null,
    bn = new Map(),
    er = new Map(),
    Ut = [],
    Lc =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function Pu(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Dt = null;
        break;
      case 'dragenter':
      case 'dragleave':
        At = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Bt = null;
        break;
      case 'pointerover':
      case 'pointerout':
        bn.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        er.delete(t.pointerId);
    }
  }
  function tr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = hr(t)), t !== null && vo(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Pc(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return ((Dt = tr(Dt, e, t, n, r, l)), !0);
      case 'dragenter':
        return ((At = tr(At, e, t, n, r, l)), !0);
      case 'mouseover':
        return ((Bt = tr(Bt, e, t, n, r, l)), !0);
      case 'pointerover':
        var o = l.pointerId;
        return (bn.set(o, tr(bn.get(o) || null, e, t, n, r, l)), !0);
      case 'gotpointercapture':
        return ((o = l.pointerId), er.set(o, tr(er.get(o) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function Tu(e) {
    var t = on(e.target);
    if (t !== null) {
      var n = ln(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = hu(n)), t !== null)) {
            ((e.blockedOn = t),
              Lu(e.priority, function () {
                Nu(n);
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
  function Vr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = wo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((oo = r), n.target.dispatchEvent(r), (oo = null));
      } else return ((t = hr(n)), t !== null && vo(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Ou(e, t, n) {
    Vr(e) && n.delete(t);
  }
  function Tc() {
    ((yo = !1),
      Dt !== null && Vr(Dt) && (Dt = null),
      At !== null && Vr(At) && (At = null),
      Bt !== null && Vr(Bt) && (Bt = null),
      bn.forEach(Ou),
      er.forEach(Ou));
  }
  function nr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      yo || ((yo = !0), _.unstable_scheduleCallback(_.unstable_NormalPriority, Tc)));
  }
  function rr(e) {
    function t(l) {
      return nr(l, e);
    }
    if (0 < $r.length) {
      nr($r[0], e);
      for (var n = 1; n < $r.length; n++) {
        var r = $r[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Dt !== null && nr(Dt, e),
        At !== null && nr(At, e),
        Bt !== null && nr(Bt, e),
        bn.forEach(t),
        er.forEach(t),
        n = 0;
      n < Ut.length;
      n++
    )
      ((r = Ut[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Ut.length && ((n = Ut[0]), n.blockedOn === null); )
      (Tu(n), n.blockedOn === null && Ut.shift());
  }
  var xn = X.ReactCurrentBatchConfig,
    Qr = !0;
  function Oc(e, t, n, r) {
    var l = fe,
      o = xn.transition;
    xn.transition = null;
    try {
      ((fe = 1), go(e, t, n, r));
    } finally {
      ((fe = l), (xn.transition = o));
    }
  }
  function zc(e, t, n, r) {
    var l = fe,
      o = xn.transition;
    xn.transition = null;
    try {
      ((fe = 4), go(e, t, n, r));
    } finally {
      ((fe = l), (xn.transition = o));
    }
  }
  function go(e, t, n, r) {
    if (Qr) {
      var l = wo(e, t, n, r);
      if (l === null) (Fo(e, t, r, Gr, n), Pu(e, r));
      else if (Pc(l, e, t, n, r)) r.stopPropagation();
      else if ((Pu(e, r), t & 4 && -1 < Lc.indexOf(e))) {
        for (; l !== null; ) {
          var o = hr(l);
          if (
            (o !== null && Eu(o), (o = wo(e, t, n, r)), o === null && Fo(e, t, r, Gr, n), o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Fo(e, t, r, null, n);
    }
  }
  var Gr = null;
  function wo(e, t, n, r) {
    if (((Gr = null), (e = io(r)), (e = on(e)), e !== null))
      if (((t = ln(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = hu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Gr = e), null);
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
        switch (wc()) {
          case fo:
            return 1;
          case ku:
            return 4;
          case Ar:
          case Sc:
            return 16;
          case _u:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ht = null,
    So = null,
    Kr = null;
  function Ru() {
    if (Kr) return Kr;
    var e,
      t = So,
      n = t.length,
      r,
      l = 'value' in Ht ? Ht.value : Ht.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (Kr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Yr(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function qr() {
    return !0;
  }
  function Iu() {
    return !1;
  }
  function nt(e) {
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
          ? qr
          : Iu),
        (this.isPropagationStopped = Iu),
        this
      );
    }
    return (
      T(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = qr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = qr));
        },
        persist: function () {},
        isPersistent: qr,
      }),
      t
    );
  }
  var Cn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ko = nt(Cn),
    lr = T({}, Cn, { view: 0, detail: 0 }),
    Rc = nt(lr),
    _o,
    xo,
    or,
    Xr = T({}, lr, {
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
      getModifierState: Eo,
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
          : (e !== or &&
              (or && e.type === 'mousemove'
                ? ((_o = e.screenX - or.screenX), (xo = e.screenY - or.screenY))
                : (xo = _o = 0),
              (or = e)),
            _o);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : xo;
      },
    }),
    Mu = nt(Xr),
    Ic = T({}, Xr, { dataTransfer: 0 }),
    Mc = nt(Ic),
    Fc = T({}, lr, { relatedTarget: 0 }),
    Co = nt(Fc),
    Dc = T({}, Cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ac = nt(Dc),
    Bc = T({}, Cn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Uc = nt(Bc),
    Hc = T({}, Cn, { data: 0 }),
    Fu = nt(Hc),
    Wc = {
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
    $c = {
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
    Vc = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Qc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Vc[e]) ? !!t[e] : !1;
  }
  function Eo() {
    return Qc;
  }
  var Gc = T({}, lr, {
      key: function (e) {
        if (e.key) {
          var t = Wc[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Yr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? $c[e.keyCode] || 'Unidentified'
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
      getModifierState: Eo,
      charCode: function (e) {
        return e.type === 'keypress' ? Yr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Yr(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Kc = nt(Gc),
    Yc = T({}, Xr, {
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
    Du = nt(Yc),
    qc = T({}, lr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Eo,
    }),
    Xc = nt(qc),
    Jc = T({}, Cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Zc = nt(Jc),
    bc = T({}, Xr, {
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
    ef = nt(bc),
    tf = [9, 13, 27, 32],
    No = M && 'CompositionEvent' in window,
    ir = null;
  M && 'documentMode' in document && (ir = document.documentMode);
  var nf = M && 'TextEvent' in window && !ir,
    Au = M && (!No || (ir && 8 < ir && 11 >= ir)),
    Bu = ' ',
    Uu = !1;
  function Hu(e, t) {
    switch (e) {
      case 'keyup':
        return tf.indexOf(t.keyCode) !== -1;
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
  function Wu(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var En = !1;
  function rf(e, t) {
    switch (e) {
      case 'compositionend':
        return Wu(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Uu = !0), Bu);
      case 'textInput':
        return ((e = t.data), e === Bu && Uu ? null : e);
      default:
        return null;
    }
  }
  function lf(e, t) {
    if (En)
      return e === 'compositionend' || (!No && Hu(e, t))
        ? ((e = Ru()), (Kr = So = Ht = null), (En = !1), e)
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
        return Au && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var of = {
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
  function $u(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!of[e.type] : t === 'textarea';
  }
  function Vu(e, t, n, r) {
    (cu(r),
      (t = tl(t, 'onChange')),
      0 < t.length &&
        ((n = new ko('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
  }
  var ur = null,
    sr = null;
  function uf(e) {
    ss(e, 0);
  }
  function Jr(e) {
    var t = Tn(e);
    if (Zi(t)) return e;
  }
  function sf(e, t) {
    if (e === 'change') return t;
  }
  var Qu = !1;
  if (M) {
    var jo;
    if (M) {
      var Lo = 'oninput' in document;
      if (!Lo) {
        var Gu = document.createElement('div');
        (Gu.setAttribute('oninput', 'return;'), (Lo = typeof Gu.oninput == 'function'));
      }
      jo = Lo;
    } else jo = !1;
    Qu = jo && (!document.documentMode || 9 < document.documentMode);
  }
  function Ku() {
    ur && (ur.detachEvent('onpropertychange', Yu), (sr = ur = null));
  }
  function Yu(e) {
    if (e.propertyName === 'value' && Jr(sr)) {
      var t = [];
      (Vu(t, sr, e, io(e)), mu(uf, t));
    }
  }
  function af(e, t, n) {
    e === 'focusin'
      ? (Ku(), (ur = t), (sr = n), ur.attachEvent('onpropertychange', Yu))
      : e === 'focusout' && Ku();
  }
  function cf(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Jr(sr);
  }
  function ff(e, t) {
    if (e === 'click') return Jr(t);
  }
  function df(e, t) {
    if (e === 'input' || e === 'change') return Jr(t);
  }
  function pf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ht = typeof Object.is == 'function' ? Object.is : pf;
  function ar(e, t) {
    if (ht(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!j.call(t, l) || !ht(e[l], t[l])) return !1;
    }
    return !0;
  }
  function qu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Xu(e, t) {
    var n = qu(e);
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
      n = qu(n);
    }
  }
  function Ju(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Ju(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Zu() {
    for (var e = window, t = Ir(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ir(e.document);
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
  function mf(e) {
    var t = Zu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ju(n.ownerDocument.documentElement, n)) {
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
            (l = Xu(n, o)));
          var i = Xu(n, r);
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
  var hf = M && 'documentMode' in document && 11 >= document.documentMode,
    Nn = null,
    To = null,
    cr = null,
    Oo = !1;
  function bu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Oo ||
      Nn == null ||
      Nn !== Ir(r) ||
      ((r = Nn),
      'selectionStart' in r && Po(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (cr && ar(cr, r)) ||
        ((cr = r),
        (r = tl(To, 'onSelect')),
        0 < r.length &&
          ((t = new ko('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Nn))));
  }
  function Zr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var jn = {
      animationend: Zr('Animation', 'AnimationEnd'),
      animationiteration: Zr('Animation', 'AnimationIteration'),
      animationstart: Zr('Animation', 'AnimationStart'),
      transitionend: Zr('Transition', 'TransitionEnd'),
    },
    zo = {},
    es = {};
  M &&
    ((es = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete jn.animationend.animation,
      delete jn.animationiteration.animation,
      delete jn.animationstart.animation),
    'TransitionEvent' in window || delete jn.transitionend.transition);
  function br(e) {
    if (zo[e]) return zo[e];
    if (!jn[e]) return e;
    var t = jn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in es) return (zo[e] = t[n]);
    return e;
  }
  var ts = br('animationend'),
    ns = br('animationiteration'),
    rs = br('animationstart'),
    ls = br('transitionend'),
    os = new Map(),
    is =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Wt(e, t) {
    (os.set(e, t), C(t, [e]));
  }
  for (var Ro = 0; Ro < is.length; Ro++) {
    var Io = is[Ro],
      vf = Io.toLowerCase(),
      yf = Io[0].toUpperCase() + Io.slice(1);
    Wt(vf, 'on' + yf);
  }
  (Wt(ts, 'onAnimationEnd'),
    Wt(ns, 'onAnimationIteration'),
    Wt(rs, 'onAnimationStart'),
    Wt('dblclick', 'onDoubleClick'),
    Wt('focusin', 'onFocus'),
    Wt('focusout', 'onBlur'),
    Wt(ls, 'onTransitionEnd'),
    L('onMouseEnter', ['mouseout', 'mouseover']),
    L('onMouseLeave', ['mouseout', 'mouseover']),
    L('onPointerEnter', ['pointerout', 'pointerover']),
    L('onPointerLeave', ['pointerout', 'pointerover']),
    C('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    C(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    C('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    C('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    C(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    C(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var fr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    gf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(fr));
  function us(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n), hc(r, t, void 0, e), (e.currentTarget = null));
  }
  function ss(e, t) {
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
              s = u.instance,
              h = u.currentTarget;
            if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
            (us(l, u, h), (o = s));
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((u = r[i]),
              (s = u.instance),
              (h = u.currentTarget),
              (u = u.listener),
              s !== o && l.isPropagationStopped())
            )
              break e;
            (us(l, u, h), (o = s));
          }
      }
    }
    if (Dr) throw ((e = co), (Dr = !1), (co = null), e);
  }
  function ge(e, t) {
    var n = t[Wo];
    n === void 0 && (n = t[Wo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (as(t, e, 2, !1), n.add(r));
  }
  function Mo(e, t, n) {
    var r = 0;
    (t && (r |= 4), as(n, e, r, t));
  }
  var el = '_reactListening' + Math.random().toString(36).slice(2);
  function dr(e) {
    if (!e[el]) {
      ((e[el] = !0),
        R.forEach(function (n) {
          n !== 'selectionchange' && (gf.has(n) || Mo(n, !1, e), Mo(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[el] || ((t[el] = !0), Mo('selectionchange', !1, t));
    }
  }
  function as(e, t, n, r) {
    switch (zu(t)) {
      case 1:
        var l = Oc;
        break;
      case 4:
        l = zc;
        break;
      default:
        l = go;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !ao || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
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
              var s = i.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = i.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (((i = on(u)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6)) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    mu(function () {
      var h = o,
        w = io(n),
        k = [];
      e: {
        var y = os.get(e);
        if (y !== void 0) {
          var P = ko,
            z = e;
          switch (e) {
            case 'keypress':
              if (Yr(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              P = Kc;
              break;
            case 'focusin':
              ((z = 'focus'), (P = Co));
              break;
            case 'focusout':
              ((z = 'blur'), (P = Co));
              break;
            case 'beforeblur':
            case 'afterblur':
              P = Co;
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
              P = Mu;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              P = Mc;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              P = Xc;
              break;
            case ts:
            case ns:
            case rs:
              P = Ac;
              break;
            case ls:
              P = Zc;
              break;
            case 'scroll':
              P = Rc;
              break;
            case 'wheel':
              P = ef;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              P = Uc;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              P = Du;
          }
          var I = (t & 4) !== 0,
            je = !I && e === 'scroll',
            d = I ? (y !== null ? y + 'Capture' : null) : y;
          I = [];
          for (var a = h, m; a !== null; ) {
            m = a;
            var x = m.stateNode;
            if (
              (m.tag === 5 &&
                x !== null &&
                ((m = x), d !== null && ((x = Yn(a, d)), x != null && I.push(pr(a, x, m)))),
              je)
            )
              break;
            a = a.return;
          }
          0 < I.length && ((y = new P(y, z, null, n, w)), k.push({ event: y, listeners: I }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((y = e === 'mouseover' || e === 'pointerover'),
            (P = e === 'mouseout' || e === 'pointerout'),
            y && n !== oo && (z = n.relatedTarget || n.fromElement) && (on(z) || z[jt]))
          )
            break e;
          if (
            (P || y) &&
            ((y =
              w.window === w
                ? w
                : (y = w.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            P
              ? ((z = n.relatedTarget || n.toElement),
                (P = h),
                (z = z ? on(z) : null),
                z !== null &&
                  ((je = ln(z)), z !== je || (z.tag !== 5 && z.tag !== 6)) &&
                  (z = null))
              : ((P = null), (z = h)),
            P !== z)
          ) {
            if (
              ((I = Mu),
              (x = 'onMouseLeave'),
              (d = 'onMouseEnter'),
              (a = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((I = Du), (x = 'onPointerLeave'), (d = 'onPointerEnter'), (a = 'pointer')),
              (je = P == null ? y : Tn(P)),
              (m = z == null ? y : Tn(z)),
              (y = new I(x, a + 'leave', P, n, w)),
              (y.target = je),
              (y.relatedTarget = m),
              (x = null),
              on(w) === h &&
                ((I = new I(d, a + 'enter', z, n, w)),
                (I.target = m),
                (I.relatedTarget = je),
                (x = I)),
              (je = x),
              P && z)
            )
              t: {
                for (I = P, d = z, a = 0, m = I; m; m = Ln(m)) a++;
                for (m = 0, x = d; x; x = Ln(x)) m++;
                for (; 0 < a - m; ) ((I = Ln(I)), a--);
                for (; 0 < m - a; ) ((d = Ln(d)), m--);
                for (; a--; ) {
                  if (I === d || (d !== null && I === d.alternate)) break t;
                  ((I = Ln(I)), (d = Ln(d)));
                }
                I = null;
              }
            else I = null;
            (P !== null && cs(k, y, P, I, !1), z !== null && je !== null && cs(k, je, z, I, !0));
          }
        }
        e: {
          if (
            ((y = h ? Tn(h) : window),
            (P = y.nodeName && y.nodeName.toLowerCase()),
            P === 'select' || (P === 'input' && y.type === 'file'))
          )
            var F = sf;
          else if ($u(y))
            if (Qu) F = df;
            else {
              F = cf;
              var $ = af;
            }
          else
            (P = y.nodeName) &&
              P.toLowerCase() === 'input' &&
              (y.type === 'checkbox' || y.type === 'radio') &&
              (F = ff);
          if (F && (F = F(e, h))) {
            Vu(k, F, n, w);
            break e;
          }
          ($ && $(e, y, h),
            e === 'focusout' &&
              ($ = y._wrapperState) &&
              $.controlled &&
              y.type === 'number' &&
              eo(y, 'number', y.value));
        }
        switch ((($ = h ? Tn(h) : window), e)) {
          case 'focusin':
            ($u($) || $.contentEditable === 'true') && ((Nn = $), (To = h), (cr = null));
            break;
          case 'focusout':
            cr = To = Nn = null;
            break;
          case 'mousedown':
            Oo = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Oo = !1), bu(k, n, w));
            break;
          case 'selectionchange':
            if (hf) break;
          case 'keydown':
          case 'keyup':
            bu(k, n, w);
        }
        var V;
        if (No)
          e: {
            switch (e) {
              case 'compositionstart':
                var K = 'onCompositionStart';
                break e;
              case 'compositionend':
                K = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                K = 'onCompositionUpdate';
                break e;
            }
            K = void 0;
          }
        else
          En
            ? Hu(e, n) && (K = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (K = 'onCompositionStart');
        (K &&
          (Au &&
            n.locale !== 'ko' &&
            (En || K !== 'onCompositionStart'
              ? K === 'onCompositionEnd' && En && (V = Ru())
              : ((Ht = w), (So = 'value' in Ht ? Ht.value : Ht.textContent), (En = !0))),
          ($ = tl(h, K)),
          0 < $.length &&
            ((K = new Fu(K, e, null, n, w)),
            k.push({ event: K, listeners: $ }),
            V ? (K.data = V) : ((V = Wu(n)), V !== null && (K.data = V)))),
          (V = nf ? rf(e, n) : lf(e, n)) &&
            ((h = tl(h, 'onBeforeInput')),
            0 < h.length &&
              ((w = new Fu('onBeforeInput', 'beforeinput', null, n, w)),
              k.push({ event: w, listeners: h }),
              (w.data = V))));
      }
      ss(k, t);
    });
  }
  function pr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function tl(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      (l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Yn(e, n)),
        o != null && r.unshift(pr(e, o, l)),
        (o = Yn(e, t)),
        o != null && r.push(pr(e, o, l))),
        (e = e.return));
    }
    return r;
  }
  function Ln(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function cs(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n,
        s = u.alternate,
        h = u.stateNode;
      if (s !== null && s === r) break;
      (u.tag === 5 &&
        h !== null &&
        ((u = h),
        l
          ? ((s = Yn(n, o)), s != null && i.unshift(pr(n, s, u)))
          : l || ((s = Yn(n, o)), s != null && i.push(pr(n, s, u)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var wf = /\r\n?/g,
    Sf = /\u0000|\uFFFD/g;
  function fs(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        wf,
        `
`
      )
      .replace(Sf, '');
  }
  function nl(e, t, n) {
    if (((t = fs(t)), fs(e) !== t && n)) throw Error(c(425));
  }
  function rl() {}
  var Do = null,
    Ao = null;
  function Bo(e, t) {
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
  var Uo = typeof setTimeout == 'function' ? setTimeout : void 0,
    kf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    ds = typeof Promise == 'function' ? Promise : void 0,
    _f =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof ds < 'u'
          ? function (e) {
              return ds.resolve(null).then(e).catch(xf);
            }
          : Uo;
  function xf(e) {
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
            (e.removeChild(l), rr(t));
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = l;
    } while (n);
    rr(t);
  }
  function $t(e) {
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
  function ps(e) {
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
  var Pn = Math.random().toString(36).slice(2),
    xt = '__reactFiber$' + Pn,
    mr = '__reactProps$' + Pn,
    jt = '__reactContainer$' + Pn,
    Wo = '__reactEvents$' + Pn,
    Cf = '__reactListeners$' + Pn,
    Ef = '__reactHandles$' + Pn;
  function on(e) {
    var t = e[xt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[jt] || n[xt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = ps(e); e !== null; ) {
            if ((n = e[xt])) return n;
            e = ps(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function hr(e) {
    return (
      (e = e[xt] || e[jt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Tn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(c(33));
  }
  function ll(e) {
    return e[mr] || null;
  }
  var $o = [],
    On = -1;
  function Vt(e) {
    return { current: e };
  }
  function we(e) {
    0 > On || ((e.current = $o[On]), ($o[On] = null), On--);
  }
  function ye(e, t) {
    (On++, ($o[On] = e.current), (e.current = t));
  }
  var Qt = {},
    $e = Vt(Qt),
    Xe = Vt(!1),
    un = Qt;
  function zn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Qt;
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
  function ol() {
    (we(Xe), we($e));
  }
  function ms(e, t, n) {
    if ($e.current !== Qt) throw Error(c(168));
    (ye($e, t), ye(Xe, n));
  }
  function hs(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(c(108, pe(e) || 'Unknown', l));
    return T({}, n, r);
  }
  function il(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Qt),
      (un = $e.current),
      ye($e, e),
      ye(Xe, Xe.current),
      !0
    );
  }
  function vs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(c(169));
    (n
      ? ((e = hs(e, t, un)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        we(Xe),
        we($e),
        ye($e, e))
      : we(Xe),
      ye(Xe, n));
  }
  var Lt = null,
    ul = !1,
    Vo = !1;
  function ys(e) {
    Lt === null ? (Lt = [e]) : Lt.push(e);
  }
  function Nf(e) {
    ((ul = !0), ys(e));
  }
  function Gt() {
    if (!Vo && Lt !== null) {
      Vo = !0;
      var e = 0,
        t = fe;
      try {
        var n = Lt;
        for (fe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Lt = null), (ul = !1));
      } catch (l) {
        throw (Lt !== null && (Lt = Lt.slice(e + 1)), wu(fo, Gt), l);
      } finally {
        ((fe = t), (Vo = !1));
      }
    }
    return null;
  }
  var Rn = [],
    In = 0,
    sl = null,
    al = 0,
    ut = [],
    st = 0,
    sn = null,
    Pt = 1,
    Tt = '';
  function an(e, t) {
    ((Rn[In++] = al), (Rn[In++] = sl), (sl = e), (al = t));
  }
  function gs(e, t, n) {
    ((ut[st++] = Pt), (ut[st++] = Tt), (ut[st++] = sn), (sn = e));
    var r = Pt;
    e = Tt;
    var l = 32 - mt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var o = 32 - mt(t) + l;
    if (30 < o) {
      var i = l - (l % 5);
      ((o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (Pt = (1 << (32 - mt(t) + l)) | (n << l) | r),
        (Tt = o + e));
    } else ((Pt = (1 << o) | (n << l) | r), (Tt = e));
  }
  function Qo(e) {
    e.return !== null && (an(e, 1), gs(e, 1, 0));
  }
  function Go(e) {
    for (; e === sl; ) ((sl = Rn[--In]), (Rn[In] = null), (al = Rn[--In]), (Rn[In] = null));
    for (; e === sn; )
      ((sn = ut[--st]),
        (ut[st] = null),
        (Tt = ut[--st]),
        (ut[st] = null),
        (Pt = ut[--st]),
        (ut[st] = null));
  }
  var rt = null,
    lt = null,
    Se = !1,
    vt = null;
  function ws(e, t) {
    var n = dt(5, null, null, 0);
    ((n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Ss(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (rt = e), (lt = $t(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (rt = e), (lt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = sn !== null ? { id: Pt, overflow: Tt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = dt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (rt = e),
              (lt = null),
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
    if (Se) {
      var t = lt;
      if (t) {
        var n = t;
        if (!Ss(e, t)) {
          if (Ko(e)) throw Error(c(418));
          t = $t(n.nextSibling);
          var r = rt;
          t && Ss(e, t) ? ws(r, n) : ((e.flags = (e.flags & -4097) | 2), (Se = !1), (rt = e));
        }
      } else {
        if (Ko(e)) throw Error(c(418));
        ((e.flags = (e.flags & -4097) | 2), (Se = !1), (rt = e));
      }
    }
  }
  function ks(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    rt = e;
  }
  function cl(e) {
    if (e !== rt) return !1;
    if (!Se) return (ks(e), (Se = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !Bo(e.type, e.memoizedProps))),
      t && (t = lt))
    ) {
      if (Ko(e)) throw (_s(), Error(c(418)));
      for (; t; ) (ws(e, t), (t = $t(t.nextSibling)));
    }
    if ((ks(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(c(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                lt = $t(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        lt = null;
      }
    } else lt = rt ? $t(e.stateNode.nextSibling) : null;
    return !0;
  }
  function _s() {
    for (var e = lt; e; ) e = $t(e.nextSibling);
  }
  function Mn() {
    ((lt = rt = null), (Se = !1));
  }
  function qo(e) {
    vt === null ? (vt = [e]) : vt.push(e);
  }
  var jf = X.ReactCurrentBatchConfig;
  function vr(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(c(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(c(147, e));
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
      if (typeof e != 'string') throw Error(c(284));
      if (!n._owner) throw Error(c(290, e));
    }
    return e;
  }
  function fl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        c(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      )
    );
  }
  function xs(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Cs(e) {
    function t(d, a) {
      if (e) {
        var m = d.deletions;
        m === null ? ((d.deletions = [a]), (d.flags |= 16)) : m.push(a);
      }
    }
    function n(d, a) {
      if (!e) return null;
      for (; a !== null; ) (t(d, a), (a = a.sibling));
      return null;
    }
    function r(d, a) {
      for (d = new Map(); a !== null; )
        (a.key !== null ? d.set(a.key, a) : d.set(a.index, a), (a = a.sibling));
      return d;
    }
    function l(d, a) {
      return ((d = en(d, a)), (d.index = 0), (d.sibling = null), d);
    }
    function o(d, a, m) {
      return (
        (d.index = m),
        e
          ? ((m = d.alternate),
            m !== null ? ((m = m.index), m < a ? ((d.flags |= 2), a) : m) : ((d.flags |= 2), a))
          : ((d.flags |= 1048576), a)
      );
    }
    function i(d) {
      return (e && d.alternate === null && (d.flags |= 2), d);
    }
    function u(d, a, m, x) {
      return a === null || a.tag !== 6
        ? ((a = Ui(m, d.mode, x)), (a.return = d), a)
        : ((a = l(a, m)), (a.return = d), a);
    }
    function s(d, a, m, x) {
      var F = m.type;
      return F === se
        ? w(d, a, m.props.children, x, m.key)
        : a !== null &&
            (a.elementType === F ||
              (typeof F == 'object' && F !== null && F.$$typeof === Ie && xs(F) === a.type))
          ? ((x = l(a, m.props)), (x.ref = vr(d, a, m)), (x.return = d), x)
          : ((x = Ml(m.type, m.key, m.props, null, d.mode, x)),
            (x.ref = vr(d, a, m)),
            (x.return = d),
            x);
    }
    function h(d, a, m, x) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== m.containerInfo ||
        a.stateNode.implementation !== m.implementation
        ? ((a = Hi(m, d.mode, x)), (a.return = d), a)
        : ((a = l(a, m.children || [])), (a.return = d), a);
    }
    function w(d, a, m, x, F) {
      return a === null || a.tag !== 7
        ? ((a = yn(m, d.mode, x, F)), (a.return = d), a)
        : ((a = l(a, m)), (a.return = d), a);
    }
    function k(d, a, m) {
      if ((typeof a == 'string' && a !== '') || typeof a == 'number')
        return ((a = Ui('' + a, d.mode, m)), (a.return = d), a);
      if (typeof a == 'object' && a !== null) {
        switch (a.$$typeof) {
          case ne:
            return (
              (m = Ml(a.type, a.key, a.props, null, d.mode, m)),
              (m.ref = vr(d, null, a)),
              (m.return = d),
              m
            );
          case W:
            return ((a = Hi(a, d.mode, m)), (a.return = d), a);
          case Ie:
            var x = a._init;
            return k(d, x(a._payload), m);
        }
        if (Qn(a) || U(a)) return ((a = yn(a, d.mode, m, null)), (a.return = d), a);
        fl(d, a);
      }
      return null;
    }
    function y(d, a, m, x) {
      var F = a !== null ? a.key : null;
      if ((typeof m == 'string' && m !== '') || typeof m == 'number')
        return F !== null ? null : u(d, a, '' + m, x);
      if (typeof m == 'object' && m !== null) {
        switch (m.$$typeof) {
          case ne:
            return m.key === F ? s(d, a, m, x) : null;
          case W:
            return m.key === F ? h(d, a, m, x) : null;
          case Ie:
            return ((F = m._init), y(d, a, F(m._payload), x));
        }
        if (Qn(m) || U(m)) return F !== null ? null : w(d, a, m, x, null);
        fl(d, m);
      }
      return null;
    }
    function P(d, a, m, x, F) {
      if ((typeof x == 'string' && x !== '') || typeof x == 'number')
        return ((d = d.get(m) || null), u(a, d, '' + x, F));
      if (typeof x == 'object' && x !== null) {
        switch (x.$$typeof) {
          case ne:
            return ((d = d.get(x.key === null ? m : x.key) || null), s(a, d, x, F));
          case W:
            return ((d = d.get(x.key === null ? m : x.key) || null), h(a, d, x, F));
          case Ie:
            var $ = x._init;
            return P(d, a, m, $(x._payload), F);
        }
        if (Qn(x) || U(x)) return ((d = d.get(m) || null), w(a, d, x, F, null));
        fl(a, x);
      }
      return null;
    }
    function z(d, a, m, x) {
      for (var F = null, $ = null, V = a, K = (a = 0), De = null; V !== null && K < m.length; K++) {
        V.index > K ? ((De = V), (V = null)) : (De = V.sibling);
        var ue = y(d, V, m[K], x);
        if (ue === null) {
          V === null && (V = De);
          break;
        }
        (e && V && ue.alternate === null && t(d, V),
          (a = o(ue, a, K)),
          $ === null ? (F = ue) : ($.sibling = ue),
          ($ = ue),
          (V = De));
      }
      if (K === m.length) return (n(d, V), Se && an(d, K), F);
      if (V === null) {
        for (; K < m.length; K++)
          ((V = k(d, m[K], x)),
            V !== null && ((a = o(V, a, K)), $ === null ? (F = V) : ($.sibling = V), ($ = V)));
        return (Se && an(d, K), F);
      }
      for (V = r(d, V); K < m.length; K++)
        ((De = P(V, d, K, m[K], x)),
          De !== null &&
            (e && De.alternate !== null && V.delete(De.key === null ? K : De.key),
            (a = o(De, a, K)),
            $ === null ? (F = De) : ($.sibling = De),
            ($ = De)));
      return (
        e &&
          V.forEach(function (tn) {
            return t(d, tn);
          }),
        Se && an(d, K),
        F
      );
    }
    function I(d, a, m, x) {
      var F = U(m);
      if (typeof F != 'function') throw Error(c(150));
      if (((m = F.call(m)), m == null)) throw Error(c(151));
      for (
        var $ = (F = null), V = a, K = (a = 0), De = null, ue = m.next();
        V !== null && !ue.done;
        K++, ue = m.next()
      ) {
        V.index > K ? ((De = V), (V = null)) : (De = V.sibling);
        var tn = y(d, V, ue.value, x);
        if (tn === null) {
          V === null && (V = De);
          break;
        }
        (e && V && tn.alternate === null && t(d, V),
          (a = o(tn, a, K)),
          $ === null ? (F = tn) : ($.sibling = tn),
          ($ = tn),
          (V = De));
      }
      if (ue.done) return (n(d, V), Se && an(d, K), F);
      if (V === null) {
        for (; !ue.done; K++, ue = m.next())
          ((ue = k(d, ue.value, x)),
            ue !== null && ((a = o(ue, a, K)), $ === null ? (F = ue) : ($.sibling = ue), ($ = ue)));
        return (Se && an(d, K), F);
      }
      for (V = r(d, V); !ue.done; K++, ue = m.next())
        ((ue = P(V, d, K, ue.value, x)),
          ue !== null &&
            (e && ue.alternate !== null && V.delete(ue.key === null ? K : ue.key),
            (a = o(ue, a, K)),
            $ === null ? (F = ue) : ($.sibling = ue),
            ($ = ue)));
      return (
        e &&
          V.forEach(function (id) {
            return t(d, id);
          }),
        Se && an(d, K),
        F
      );
    }
    function je(d, a, m, x) {
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
              for (var F = m.key, $ = a; $ !== null; ) {
                if ($.key === F) {
                  if (((F = m.type), F === se)) {
                    if ($.tag === 7) {
                      (n(d, $.sibling), (a = l($, m.props.children)), (a.return = d), (d = a));
                      break e;
                    }
                  } else if (
                    $.elementType === F ||
                    (typeof F == 'object' && F !== null && F.$$typeof === Ie && xs(F) === $.type)
                  ) {
                    (n(d, $.sibling),
                      (a = l($, m.props)),
                      (a.ref = vr(d, $, m)),
                      (a.return = d),
                      (d = a));
                    break e;
                  }
                  n(d, $);
                  break;
                } else t(d, $);
                $ = $.sibling;
              }
              m.type === se
                ? ((a = yn(m.props.children, d.mode, x, m.key)), (a.return = d), (d = a))
                : ((x = Ml(m.type, m.key, m.props, null, d.mode, x)),
                  (x.ref = vr(d, a, m)),
                  (x.return = d),
                  (d = x));
            }
            return i(d);
          case W:
            e: {
              for ($ = m.key; a !== null; ) {
                if (a.key === $)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === m.containerInfo &&
                    a.stateNode.implementation === m.implementation
                  ) {
                    (n(d, a.sibling), (a = l(a, m.children || [])), (a.return = d), (d = a));
                    break e;
                  } else {
                    n(d, a);
                    break;
                  }
                else t(d, a);
                a = a.sibling;
              }
              ((a = Hi(m, d.mode, x)), (a.return = d), (d = a));
            }
            return i(d);
          case Ie:
            return (($ = m._init), je(d, a, $(m._payload), x));
        }
        if (Qn(m)) return z(d, a, m, x);
        if (U(m)) return I(d, a, m, x);
        fl(d, m);
      }
      return (typeof m == 'string' && m !== '') || typeof m == 'number'
        ? ((m = '' + m),
          a !== null && a.tag === 6
            ? (n(d, a.sibling), (a = l(a, m)), (a.return = d), (d = a))
            : (n(d, a), (a = Ui(m, d.mode, x)), (a.return = d), (d = a)),
          i(d))
        : n(d, a);
    }
    return je;
  }
  var Fn = Cs(!0),
    Es = Cs(!1),
    dl = Vt(null),
    pl = null,
    Dn = null,
    Xo = null;
  function Jo() {
    Xo = Dn = pl = null;
  }
  function Zo(e) {
    var t = dl.current;
    (we(dl), (e._currentValue = t));
  }
  function bo(e, t, n) {
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
  function An(e, t) {
    ((pl = e),
      (Xo = Dn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ze = !0), (e.firstContext = null)));
  }
  function at(e) {
    var t = e._currentValue;
    if (Xo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Dn === null)) {
        if (pl === null) throw Error(c(308));
        ((Dn = e), (pl.dependencies = { lanes: 0, firstContext: e }));
      } else Dn = Dn.next = e;
    return t;
  }
  var cn = null;
  function ei(e) {
    cn === null ? (cn = [e]) : cn.push(e);
  }
  function Ns(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), ei(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Ot(e, r)
    );
  }
  function Ot(e, t) {
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
  var Kt = !1;
  function ti(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function js(e, t) {
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
  function Yt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (oe & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Ot(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), ei(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Ot(e, n)
    );
  }
  function ml(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ho(e, n));
    }
  }
  function Ls(e, t) {
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
  function hl(e, t, n, r) {
    var l = e.updateQueue;
    Kt = !1;
    var o = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u,
        h = s.next;
      ((s.next = null), i === null ? (o = h) : (i.next = h), (i = s));
      var w = e.alternate;
      w !== null &&
        ((w = w.updateQueue),
        (u = w.lastBaseUpdate),
        u !== i && (u === null ? (w.firstBaseUpdate = h) : (u.next = h), (w.lastBaseUpdate = s)));
    }
    if (o !== null) {
      var k = l.baseState;
      ((i = 0), (w = h = s = null), (u = o));
      do {
        var y = u.lane,
          P = u.eventTime;
        if ((r & y) === y) {
          w !== null &&
            (w = w.next =
              {
                eventTime: P,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var z = e,
              I = u;
            switch (((y = t), (P = n), I.tag)) {
              case 1:
                if (((z = I.payload), typeof z == 'function')) {
                  k = z.call(P, k, y);
                  break e;
                }
                k = z;
                break e;
              case 3:
                z.flags = (z.flags & -65537) | 128;
              case 0:
                if (
                  ((z = I.payload), (y = typeof z == 'function' ? z.call(P, k, y) : z), y == null)
                )
                  break e;
                k = T({}, k, y);
                break e;
              case 2:
                Kt = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64), (y = l.effects), y === null ? (l.effects = [u]) : y.push(u));
        } else
          ((P = {
            eventTime: P,
            lane: y,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            w === null ? ((h = w = P), (s = k)) : (w = w.next = P),
            (i |= y));
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          ((y = u),
            (u = y.next),
            (y.next = null),
            (l.lastBaseUpdate = y),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (w === null && (s = k),
        (l.baseState = s),
        (l.firstBaseUpdate = h),
        (l.lastBaseUpdate = w),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((i |= l.lane), (l = l.next));
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      ((pn |= i), (e.lanes = i), (e.memoizedState = k));
    }
  }
  function Ps(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != 'function')) throw Error(c(191, l));
          l.call(r);
        }
      }
  }
  var yr = {},
    Ct = Vt(yr),
    gr = Vt(yr),
    wr = Vt(yr);
  function fn(e) {
    if (e === yr) throw Error(c(174));
    return e;
  }
  function ni(e, t) {
    switch ((ye(wr, t), ye(gr, e), ye(Ct, yr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : no(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = no(t, e)));
    }
    (we(Ct), ye(Ct, t));
  }
  function Bn() {
    (we(Ct), we(gr), we(wr));
  }
  function Ts(e) {
    fn(wr.current);
    var t = fn(Ct.current),
      n = no(t, e.type);
    t !== n && (ye(gr, e), ye(Ct, n));
  }
  function ri(e) {
    gr.current === e && (we(Ct), we(gr));
  }
  var _e = Vt(0);
  function vl(e) {
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
  var li = [];
  function oi() {
    for (var e = 0; e < li.length; e++) li[e]._workInProgressVersionPrimary = null;
    li.length = 0;
  }
  var yl = X.ReactCurrentDispatcher,
    ii = X.ReactCurrentBatchConfig,
    dn = 0,
    xe = null,
    Oe = null,
    Me = null,
    gl = !1,
    Sr = !1,
    kr = 0,
    Lf = 0;
  function Ve() {
    throw Error(c(321));
  }
  function ui(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ht(e[n], t[n])) return !1;
    return !0;
  }
  function si(e, t, n, r, l, o) {
    if (
      ((dn = o),
      (xe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (yl.current = e === null || e.memoizedState === null ? zf : Rf),
      (e = n(r, l)),
      Sr)
    ) {
      o = 0;
      do {
        if (((Sr = !1), (kr = 0), 25 <= o)) throw Error(c(301));
        ((o += 1), (Me = Oe = null), (t.updateQueue = null), (yl.current = If), (e = n(r, l)));
      } while (Sr);
    }
    if (
      ((yl.current = kl),
      (t = Oe !== null && Oe.next !== null),
      (dn = 0),
      (Me = Oe = xe = null),
      (gl = !1),
      t)
    )
      throw Error(c(300));
    return e;
  }
  function ai() {
    var e = kr !== 0;
    return ((kr = 0), e);
  }
  function Et() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Me === null ? (xe.memoizedState = Me = e) : (Me = Me.next = e), Me);
  }
  function ct() {
    if (Oe === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Oe.next;
    var t = Me === null ? xe.memoizedState : Me.next;
    if (t !== null) ((Me = t), (Oe = e));
    else {
      if (e === null) throw Error(c(310));
      ((Oe = e),
        (e = {
          memoizedState: Oe.memoizedState,
          baseState: Oe.baseState,
          baseQueue: Oe.baseQueue,
          queue: Oe.queue,
          next: null,
        }),
        Me === null ? (xe.memoizedState = Me = e) : (Me = Me.next = e));
    }
    return Me;
  }
  function _r(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function ci(e) {
    var t = ct(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var r = Oe,
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
        s = null,
        h = o;
      do {
        var w = h.lane;
        if ((dn & w) === w)
          (s !== null &&
            (s = s.next =
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
          (s === null ? ((u = s = k), (i = r)) : (s = s.next = k), (xe.lanes |= w), (pn |= w));
        }
        h = h.next;
      } while (h !== null && h !== o);
      (s === null ? (i = r) : (s.next = u),
        ht(r, t.memoizedState) || (Ze = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((o = l.lane), (xe.lanes |= o), (pn |= o), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function fi(e) {
    var t = ct(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = (l = l.next);
      do ((o = e(o, i.action)), (i = i.next));
      while (i !== l);
      (ht(o, t.memoizedState) || (Ze = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, r];
  }
  function Os() {}
  function zs(e, t) {
    var n = xe,
      r = ct(),
      l = t(),
      o = !ht(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Ze = !0)),
      (r = r.queue),
      di(Ms.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Me !== null && Me.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), xr(9, Is.bind(null, n, r, l, t), void 0, null), Fe === null))
        throw Error(c(349));
      (dn & 30) !== 0 || Rs(n, t, l);
    }
    return l;
  }
  function Rs(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = xe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (xe.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Is(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Fs(t) && Ds(e));
  }
  function Ms(e, t, n) {
    return n(function () {
      Fs(t) && Ds(e);
    });
  }
  function Fs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ht(e, n);
    } catch {
      return !0;
    }
  }
  function Ds(e) {
    var t = Ot(e, 1);
    t !== null && St(t, e, 1, -1);
  }
  function As(e) {
    var t = Et();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _r,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Of.bind(null, xe, e)),
      [t.memoizedState, e]
    );
  }
  function xr(e, t, n, r) {
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
  function Bs() {
    return ct().memoizedState;
  }
  function wl(e, t, n, r) {
    var l = Et();
    ((xe.flags |= e), (l.memoizedState = xr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function Sl(e, t, n, r) {
    var l = ct();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Oe !== null) {
      var i = Oe.memoizedState;
      if (((o = i.destroy), r !== null && ui(r, i.deps))) {
        l.memoizedState = xr(t, n, o, r);
        return;
      }
    }
    ((xe.flags |= e), (l.memoizedState = xr(1 | t, n, o, r)));
  }
  function Us(e, t) {
    return wl(8390656, 8, e, t);
  }
  function di(e, t) {
    return Sl(2048, 8, e, t);
  }
  function Hs(e, t) {
    return Sl(4, 2, e, t);
  }
  function Ws(e, t) {
    return Sl(4, 4, e, t);
  }
  function $s(e, t) {
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
  function Vs(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), Sl(4, 4, $s.bind(null, t, e), n));
  }
  function pi() {}
  function Qs(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ui(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Gs(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ui(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ks(e, t, n) {
    return (dn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n))
      : (ht(n, t) || ((n = xu()), (xe.lanes |= n), (pn |= n), (e.baseState = !0)), t);
  }
  function Pf(e, t) {
    var n = fe;
    ((fe = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = ii.transition;
    ii.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((fe = n), (ii.transition = r));
    }
  }
  function Ys() {
    return ct().memoizedState;
  }
  function Tf(e, t, n) {
    var r = Zt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), qs(e)))
      Xs(t, n);
    else if (((n = Ns(e, t, n, r)), n !== null)) {
      var l = qe();
      (St(n, e, r, l), Js(n, t, r));
    }
  }
  function Of(e, t, n) {
    var r = Zt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (qs(e)) Xs(t, l);
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
          if (((l.hasEagerState = !0), (l.eagerState = u), ht(u, i))) {
            var s = t.interleaved;
            (s === null ? ((l.next = l), ei(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Ns(e, t, l, r)), n !== null && ((l = qe()), St(n, e, r, l), Js(n, t, r)));
    }
  }
  function qs(e) {
    var t = e.alternate;
    return e === xe || (t !== null && t === xe);
  }
  function Xs(e, t) {
    Sr = gl = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Js(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ho(e, n));
    }
  }
  var kl = {
      readContext: at,
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
    zf = {
      readContext: at,
      useCallback: function (e, t) {
        return ((Et().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: at,
      useEffect: Us,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), wl(4194308, 4, $s.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return wl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return wl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Et();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var r = Et();
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
          (e = e.dispatch = Tf.bind(null, xe, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Et();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: As,
      useDebugValue: pi,
      useDeferredValue: function (e) {
        return (Et().memoizedState = e);
      },
      useTransition: function () {
        var e = As(!1),
          t = e[0];
        return ((e = Pf.bind(null, e[1])), (Et().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = xe,
          l = Et();
        if (Se) {
          if (n === void 0) throw Error(c(407));
          n = n();
        } else {
          if (((n = t()), Fe === null)) throw Error(c(349));
          (dn & 30) !== 0 || Rs(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Us(Ms.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          xr(9, Is.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Et(),
          t = Fe.identifierPrefix;
        if (Se) {
          var n = Tt,
            r = Pt;
          ((n = (r & ~(1 << (32 - mt(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = kr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':'));
        } else ((n = Lf++), (t = ':' + t + 'r' + n.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Rf = {
      readContext: at,
      useCallback: Qs,
      useContext: at,
      useEffect: di,
      useImperativeHandle: Vs,
      useInsertionEffect: Hs,
      useLayoutEffect: Ws,
      useMemo: Gs,
      useReducer: ci,
      useRef: Bs,
      useState: function () {
        return ci(_r);
      },
      useDebugValue: pi,
      useDeferredValue: function (e) {
        var t = ct();
        return Ks(t, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = ci(_r)[0],
          t = ct().memoizedState;
        return [e, t];
      },
      useMutableSource: Os,
      useSyncExternalStore: zs,
      useId: Ys,
      unstable_isNewReconciler: !1,
    },
    If = {
      readContext: at,
      useCallback: Qs,
      useContext: at,
      useEffect: di,
      useImperativeHandle: Vs,
      useInsertionEffect: Hs,
      useLayoutEffect: Ws,
      useMemo: Gs,
      useReducer: fi,
      useRef: Bs,
      useState: function () {
        return fi(_r);
      },
      useDebugValue: pi,
      useDeferredValue: function (e) {
        var t = ct();
        return Oe === null ? (t.memoizedState = e) : Ks(t, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = fi(_r)[0],
          t = ct().memoizedState;
        return [e, t];
      },
      useMutableSource: Os,
      useSyncExternalStore: zs,
      useId: Ys,
      unstable_isNewReconciler: !1,
    };
  function yt(e, t) {
    if (e && e.defaultProps) {
      ((t = T({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function mi(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : T({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var _l = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ln(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = qe(),
        l = Zt(e),
        o = zt(r, l);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = Yt(e, o, l)),
        t !== null && (St(t, e, l, r), ml(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = qe(),
        l = Zt(e),
        o = zt(r, l);
      ((o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Yt(e, o, l)),
        t !== null && (St(t, e, l, r), ml(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = qe(),
        r = Zt(e),
        l = zt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Yt(e, l, r)),
        t !== null && (St(t, e, r, n), ml(t, e, r)));
    },
  };
  function Zs(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ar(n, r) || !ar(l, o)
          : !0
    );
  }
  function bs(e, t, n) {
    var r = !1,
      l = Qt,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = at(o))
        : ((l = Je(t) ? un : $e.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? zn(e, l) : Qt)),
      (t = new t(n, o)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = _l),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function ea(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && _l.enqueueReplaceState(t, t.state, null));
  }
  function hi(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), ti(e));
    var o = t.contextType;
    (typeof o == 'object' && o !== null
      ? (l.context = at(o))
      : ((o = Je(t) ? un : $e.current), (l.context = zn(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == 'function' && (mi(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((t = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount(),
        t !== l.state && _l.enqueueReplaceState(l, l.state, null),
        hl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function Un(e, t) {
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
  function vi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function yi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Mf = typeof WeakMap == 'function' ? WeakMap : Map;
  function ta(e, t, n) {
    ((n = zt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Pl || ((Pl = !0), (zi = r)), yi(e, t));
      }),
      n
    );
  }
  function na(e, t, n) {
    ((n = zt(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          yi(e, t);
        }));
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == 'function' &&
        (n.callback = function () {
          (yi(e, t),
            typeof r != 'function' && (Xt === null ? (Xt = new Set([this])) : Xt.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' });
        }),
      n
    );
  }
  function ra(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Mf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = qf.bind(null, e, t, n)), t.then(e, e));
  }
  function la(e) {
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
  function oa(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = zt(-1, 1)), (t.tag = 2), Yt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Ff = X.ReactCurrentOwner,
    Ze = !1;
  function Ye(e, t, n, r) {
    t.child = e === null ? Es(t, null, n, r) : Fn(t, e.child, n, r);
  }
  function ia(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      An(t, l),
      (r = si(e, t, n, r, o, l)),
      (n = ai()),
      e !== null && !Ze
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Rt(e, t, l))
        : (Se && n && Qo(t), (t.flags |= 1), Ye(e, t, r, l), t.child)
    );
  }
  function ua(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' &&
        !Bi(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), sa(e, t, o, r, l))
        : ((e = Ml(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var i = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : ar), n(i, r) && e.ref === t.ref))
        return Rt(e, t, l);
    }
    return ((t.flags |= 1), (e = en(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function sa(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (ar(o, r) && e.ref === t.ref)
        if (((Ze = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ze = !0);
        else return ((t.lanes = e.lanes), Rt(e, t, l));
    }
    return gi(e, t, n, r, l);
  }
  function aa(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          ye(Wn, ot),
          (ot |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            ye(Wn, ot),
            (ot |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = o !== null ? o.baseLanes : n),
          ye(Wn, ot),
          (ot |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ye(Wn, ot),
        (ot |= r));
    return (Ye(e, t, l, n), t.child);
  }
  function ca(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function gi(e, t, n, r, l) {
    var o = Je(n) ? un : $e.current;
    return (
      (o = zn(t, o)),
      An(t, l),
      (n = si(e, t, n, r, o, l)),
      (r = ai()),
      e !== null && !Ze
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Rt(e, t, l))
        : (Se && r && Qo(t), (t.flags |= 1), Ye(e, t, n, l), t.child)
    );
  }
  function fa(e, t, n, r, l) {
    if (Je(n)) {
      var o = !0;
      il(t);
    } else o = !1;
    if ((An(t, l), t.stateNode === null)) (Cl(e, t), bs(t, n, r), hi(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        u = t.memoizedProps;
      i.props = u;
      var s = i.context,
        h = n.contextType;
      typeof h == 'object' && h !== null
        ? (h = at(h))
        : ((h = Je(n) ? un : $e.current), (h = zn(t, h)));
      var w = n.getDerivedStateFromProps,
        k = typeof w == 'function' || typeof i.getSnapshotBeforeUpdate == 'function';
      (k ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== r || s !== h) && ea(t, i, r, h)),
        (Kt = !1));
      var y = t.memoizedState;
      ((i.state = y),
        hl(t, r, i, l),
        (s = t.memoizedState),
        u !== r || y !== s || Xe.current || Kt
          ? (typeof w == 'function' && (mi(t, n, w, r), (s = t.memoizedState)),
            (u = Kt || Zs(t, n, u, r, y, s, h))
              ? (k ||
                  (typeof i.UNSAFE_componentWillMount != 'function' &&
                    typeof i.componentWillMount != 'function') ||
                  (typeof i.componentWillMount == 'function' && i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == 'function' &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (i.props = r),
            (i.state = s),
            (i.context = h),
            (r = u))
          : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1)));
    } else {
      ((i = t.stateNode),
        js(e, t),
        (u = t.memoizedProps),
        (h = t.type === t.elementType ? u : yt(t.type, u)),
        (i.props = h),
        (k = t.pendingProps),
        (y = i.context),
        (s = n.contextType),
        typeof s == 'object' && s !== null
          ? (s = at(s))
          : ((s = Je(n) ? un : $e.current), (s = zn(t, s))));
      var P = n.getDerivedStateFromProps;
      ((w = typeof P == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== k || y !== s) && ea(t, i, r, s)),
        (Kt = !1),
        (y = t.memoizedState),
        (i.state = y),
        hl(t, r, i, l));
      var z = t.memoizedState;
      u !== k || y !== z || Xe.current || Kt
        ? (typeof P == 'function' && (mi(t, n, P, r), (z = t.memoizedState)),
          (h = Kt || Zs(t, n, h, r, y, z, s) || !1)
            ? (w ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                  typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(r, z, s),
                typeof i.UNSAFE_componentWillUpdate == 'function' &&
                  i.UNSAFE_componentWillUpdate(r, z, s)),
              typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (u === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (u === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = z)),
          (i.props = r),
          (i.state = z),
          (i.context = s),
          (r = h))
        : (typeof i.componentDidUpdate != 'function' ||
            (u === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != 'function' ||
            (u === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return wi(e, t, n, r, o, l);
  }
  function wi(e, t, n, r, l, o) {
    ca(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && vs(t, n, !1), Rt(e, t, o));
    ((r = t.stateNode), (Ff.current = t));
    var u = i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Fn(t, e.child, null, o)), (t.child = Fn(t, null, u, o)))
        : Ye(e, t, u, o),
      (t.memoizedState = r.state),
      l && vs(t, n, !0),
      t.child
    );
  }
  function da(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? ms(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && ms(e, t.context, !1),
      ni(e, t.containerInfo));
  }
  function pa(e, t, n, r, l) {
    return (Mn(), qo(l), (t.flags |= 256), Ye(e, t, n, r), t.child);
  }
  var Si = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ki(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ma(e, t, n) {
    var r = t.pendingProps,
      l = _e.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      ye(_e, l & 1),
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
                  : (o = Fl(i, r, 0, null)),
                (e = yn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = ki(n)),
                (t.memoizedState = Si),
                e)
              : _i(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return Df(e, t, i, r, u, l, n);
    if (o) {
      ((o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling));
      var s = { mode: 'hidden', children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
          : ((r = en(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (o = en(u, o)) : ((o = yn(o, i, n, null)), (o.flags |= 2)),
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
      (r = en(o, { mode: 'visible', children: r.children })),
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
  function _i(e, t) {
    return (
      (t = Fl({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function xl(e, t, n, r) {
    return (
      r !== null && qo(r),
      Fn(t, e.child, null, n),
      (e = _i(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Df(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = vi(Error(c(422)))), xl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = Fl({ mode: 'visible', children: r.children }, l, 0, null)),
            (o = yn(o, l, i, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && Fn(t, e.child, null, i),
            (t.child.memoizedState = ki(i)),
            (t.memoizedState = Si),
            o);
    if ((t.mode & 1) === 0) return xl(e, t, i, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return ((r = u), (o = Error(c(419))), (r = vi(o, r, void 0)), xl(e, t, i, r));
    }
    if (((u = (i & e.childLanes) !== 0), Ze || u)) {
      if (((r = Fe), r !== null)) {
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
          l !== 0 && l !== o.retryLane && ((o.retryLane = l), Ot(e, l), St(r, e, l, -1)));
      }
      return (Ai(), (r = vi(Error(c(421)))), xl(e, t, i, r));
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Xf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = o.treeContext),
        (lt = $t(l.nextSibling)),
        (rt = t),
        (Se = !0),
        (vt = null),
        e !== null &&
          ((ut[st++] = Pt),
          (ut[st++] = Tt),
          (ut[st++] = sn),
          (Pt = e.id),
          (Tt = e.overflow),
          (sn = t)),
        (t = _i(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function ha(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), bo(e.return, t, n));
  }
  function xi(e, t, n, r, l) {
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
  function va(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Ye(e, t, r.children, n), (r = _e.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && ha(e, n, t);
          else if (e.tag === 19) ha(e, n, t);
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
    if ((ye(_e, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate), e !== null && vl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            xi(t, !1, l, n, o));
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && vl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          xi(t, !0, n, null, o);
          break;
        case 'together':
          xi(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Cl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Rt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (pn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = en(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Af(e, t, n) {
    switch (t.tag) {
      case 3:
        (da(t), Mn());
        break;
      case 5:
        Ts(t);
        break;
      case 1:
        Je(t.type) && il(t);
        break;
      case 4:
        ni(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (ye(dl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ye(_e, _e.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? ma(e, t, n)
              : (ye(_e, _e.current & 1), (e = Rt(e, t, n)), e !== null ? e.sibling : null);
        ye(_e, _e.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return va(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ye(_e, _e.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), aa(e, t, n));
    }
    return Rt(e, t, n);
  }
  var ya, Ci, ga, wa;
  ((ya = function (e, t) {
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
    (ga = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), fn(Ct.current));
        var o = null;
        switch (n) {
          case 'input':
            ((l = Zl(e, l)), (r = Zl(e, r)), (o = []));
            break;
          case 'select':
            ((l = T({}, l, { value: void 0 })), (r = T({}, r, { value: void 0 })), (o = []));
            break;
          case 'textarea':
            ((l = to(e, l)), (r = to(e, r)), (o = []));
            break;
          default:
            typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = rl);
        }
        ro(n, r);
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
                (S.hasOwnProperty(h) ? o || (o = []) : (o = o || []).push(h, null));
        for (h in r) {
          var s = r[h];
          if (
            ((u = l != null ? l[h] : void 0),
            r.hasOwnProperty(h) && s !== u && (s != null || u != null))
          )
            if (h === 'style')
              if (u) {
                for (i in u)
                  !u.hasOwnProperty(i) ||
                    (s && s.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ''));
                for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), (n[i] = s[i]));
              } else (n || (o || (o = []), o.push(h, n)), (n = s));
            else
              h === 'dangerouslySetInnerHTML'
                ? ((s = s ? s.__html : void 0),
                  (u = u ? u.__html : void 0),
                  s != null && u !== s && (o = o || []).push(h, s))
                : h === 'children'
                  ? (typeof s != 'string' && typeof s != 'number') || (o = o || []).push(h, '' + s)
                  : h !== 'suppressContentEditableWarning' &&
                    h !== 'suppressHydrationWarning' &&
                    (S.hasOwnProperty(h)
                      ? (s != null && h === 'onScroll' && ge('scroll', e), o || u === s || (o = []))
                      : (o = o || []).push(h, s));
        }
        n && (o = o || []).push('style', n);
        var h = o;
        (t.updateQueue = h) && (t.flags |= 4);
      }
    }),
    (wa = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function Cr(e, t) {
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
  function Bf(e, t, n) {
    var r = t.pendingProps;
    switch ((Go(t), t.tag)) {
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
        return (Je(t.type) && ol(), Qe(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Bn(),
          we(Xe),
          we($e),
          oi(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (cl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), vt !== null && (Mi(vt), (vt = null)))),
          Ci(e, t),
          Qe(t),
          null
        );
      case 5:
        ri(t);
        var l = fn(wr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (ga(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(c(166));
            return (Qe(t), null);
          }
          if (((e = fn(Ct.current)), cl(t))) {
            ((r = t.stateNode), (n = t.type));
            var o = t.memoizedProps;
            switch (((r[xt] = t), (r[mr] = o), (e = (t.mode & 1) !== 0), n)) {
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
                for (l = 0; l < fr.length; l++) ge(fr[l], r);
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
                (bi(r, o), ge('invalid', r));
                break;
              case 'select':
                ((r._wrapperState = { wasMultiple: !!o.multiple }), ge('invalid', r));
                break;
              case 'textarea':
                (nu(r, o), ge('invalid', r));
            }
            (ro(n, o), (l = null));
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var u = o[i];
                i === 'children'
                  ? typeof u == 'string'
                    ? r.textContent !== u &&
                      (o.suppressHydrationWarning !== !0 && nl(r.textContent, u, e),
                      (l = ['children', u]))
                    : typeof u == 'number' &&
                      r.textContent !== '' + u &&
                      (o.suppressHydrationWarning !== !0 && nl(r.textContent, u, e),
                      (l = ['children', '' + u]))
                  : S.hasOwnProperty(i) && u != null && i === 'onScroll' && ge('scroll', r);
              }
            switch (n) {
              case 'input':
                (wn(r), tu(r, o, !0));
                break;
              case 'textarea':
                (wn(r), lu(r));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof o.onClick == 'function' && (r.onclick = rl);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = ou(n)),
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
              (e[xt] = t),
              (e[mr] = r),
              ya(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = lo(n, r)), n)) {
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
                  for (l = 0; l < fr.length; l++) ge(fr[l], e);
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
                  (bi(e, r), (l = Zl(e, r)), ge('invalid', e));
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = T({}, r, { value: void 0 })),
                    ge('invalid', e));
                  break;
                case 'textarea':
                  (nu(e, r), (l = to(e, r)), ge('invalid', e));
                  break;
                default:
                  l = r;
              }
              (ro(n, l), (u = l));
              for (o in u)
                if (u.hasOwnProperty(o)) {
                  var s = u[o];
                  o === 'style'
                    ? su(e, s)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((s = s ? s.__html : void 0), s != null && iu(e, s))
                      : o === 'children'
                        ? typeof s == 'string'
                          ? (n !== 'textarea' || s !== '') && Gn(e, s)
                          : typeof s == 'number' && Gn(e, '' + s)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (S.hasOwnProperty(o)
                            ? s != null && o === 'onScroll' && ge('scroll', e)
                            : s != null && ie(e, o, s, i));
                }
              switch (n) {
                case 'input':
                  (wn(e), tu(e, r, !1));
                  break;
                case 'textarea':
                  (wn(e), lu(e));
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + ae(r.value));
                  break;
                case 'select':
                  ((e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? Sn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null && Sn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = rl);
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
          if (typeof r != 'string' && t.stateNode === null) throw Error(c(166));
          if (((n = fn(wr.current)), fn(Ct.current), cl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[xt] = t),
              (o = r.nodeValue !== n) && ((e = rt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  nl(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    nl(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[xt] = t),
              (t.stateNode = r));
        }
        return (Qe(t), null);
      case 13:
        if (
          (we(_e),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Se && lt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (_s(), Mn(), (t.flags |= 98560), (o = !1));
          else if (((o = cl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(c(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(c(317));
              o[xt] = t;
            } else (Mn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Qe(t), (o = !1));
          } else (vt !== null && (Mi(vt), (vt = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (_e.current & 1) !== 0 ? ze === 0 && (ze = 3) : Ai())),
            t.updateQueue !== null && (t.flags |= 4),
            Qe(t),
            null);
      case 4:
        return (Bn(), Ci(e, t), e === null && dr(t.stateNode.containerInfo), Qe(t), null);
      case 10:
        return (Zo(t.type._context), Qe(t), null);
      case 17:
        return (Je(t.type) && ol(), Qe(t), null);
      case 19:
        if ((we(_e), (o = t.memoizedState), o === null)) return (Qe(t), null);
        if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) Cr(o, !1);
          else {
            if (ze !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = vl(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      Cr(o, !1),
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
                  return (ye(_e, (_e.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Ne() > $n &&
              ((t.flags |= 128), (r = !0), Cr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = vl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Cr(o, !0),
                o.tail === null && o.tailMode === 'hidden' && !i.alternate && !Se)
              )
                return (Qe(t), null);
            } else
              2 * Ne() - o.renderingStartTime > $n &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Cr(o, !1), (t.lanes = 4194304));
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
            (n = _e.current),
            ye(_e, r ? (n & 1) | 2 : n & 1),
            t)
          : (Qe(t), null);
      case 22:
      case 23:
        return (
          Di(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (ot & 1073741824) !== 0 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Qe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Uf(e, t) {
    switch ((Go(t), t.tag)) {
      case 1:
        return (
          Je(t.type) && ol(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Bn(),
          we(Xe),
          we($e),
          oi(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (ri(t), null);
      case 13:
        if ((we(_e), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(c(340));
          Mn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (we(_e), null);
      case 4:
        return (Bn(), null);
      case 10:
        return (Zo(t.type._context), null);
      case 22:
      case 23:
        return (Di(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var El = !1,
    Ge = !1,
    Hf = typeof WeakSet == 'function' ? WeakSet : Set,
    O = null;
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
  function Ei(e, t, n) {
    try {
      n();
    } catch (r) {
      Ce(e, t, r);
    }
  }
  var Sa = !1;
  function Wf(e, t) {
    if (((Do = Qr), (e = Zu()), Po(e))) {
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
              s = -1,
              h = 0,
              w = 0,
              k = e,
              y = null;
            t: for (;;) {
              for (
                var P;
                k !== n || (l !== 0 && k.nodeType !== 3) || (u = i + l),
                  k !== o || (r !== 0 && k.nodeType !== 3) || (s = i + r),
                  k.nodeType === 3 && (i += k.nodeValue.length),
                  (P = k.firstChild) !== null;
              )
                ((y = k), (k = P));
              for (;;) {
                if (k === e) break t;
                if (
                  (y === n && ++h === l && (u = i),
                  y === o && ++w === r && (s = i),
                  (P = k.nextSibling) !== null)
                )
                  break;
                ((k = y), (y = k.parentNode));
              }
              k = P;
            }
            n = u === -1 || s === -1 ? null : { start: u, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ao = { focusedElem: e, selectionRange: n }, Qr = !1, O = t; O !== null; )
      if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (O = e));
      else
        for (; O !== null; ) {
          t = O;
          try {
            var z = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (z !== null) {
                    var I = z.memoizedProps,
                      je = z.memoizedState,
                      d = t.stateNode,
                      a = d.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? I : yt(t.type, I),
                        je
                      );
                    d.__reactInternalSnapshotBeforeUpdate = a;
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
                  throw Error(c(163));
              }
          } catch (x) {
            Ce(t, t.return, x);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (O = e));
            break;
          }
          O = t.return;
        }
    return ((z = Sa), (Sa = !1), z);
  }
  function Er(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          ((l.destroy = void 0), o !== void 0 && Ei(t, n, o));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Nl(e, t) {
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
  function Ni(e) {
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
        t !== null && (delete t[xt], delete t[mr], delete t[Wo], delete t[Cf], delete t[Ef])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function _a(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function xa(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || _a(e.return)) return null;
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
  function ji(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = rl)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ji(e, t, n), e = e.sibling; e !== null; ) (ji(e, t, n), (e = e.sibling));
  }
  function Li(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Li(e, t, n), e = e.sibling; e !== null; ) (Li(e, t, n), (e = e.sibling));
  }
  var Ue = null,
    gt = !1;
  function qt(e, t, n) {
    for (n = n.child; n !== null; ) (Ca(e, t, n), (n = n.sibling));
  }
  function Ca(e, t, n) {
    if (_t && typeof _t.onCommitFiberUnmount == 'function')
      try {
        _t.onCommitFiberUnmount(Br, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ge || Hn(n, t);
      case 6:
        var r = Ue,
          l = gt;
        ((Ue = null),
          qt(e, t, n),
          (Ue = r),
          (gt = l),
          Ue !== null &&
            (gt
              ? ((e = Ue),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : Ue.removeChild(n.stateNode)));
        break;
      case 18:
        Ue !== null &&
          (gt
            ? ((e = Ue),
              (n = n.stateNode),
              e.nodeType === 8 ? Ho(e.parentNode, n) : e.nodeType === 1 && Ho(e, n),
              rr(e))
            : Ho(Ue, n.stateNode));
        break;
      case 4:
        ((r = Ue),
          (l = gt),
          (Ue = n.stateNode.containerInfo),
          (gt = !0),
          qt(e, t, n),
          (Ue = r),
          (gt = l));
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
              i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Ei(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        qt(e, t, n);
        break;
      case 1:
        if (!Ge && (Hn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (u) {
            Ce(n, t, u);
          }
        qt(e, t, n);
        break;
      case 21:
        qt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ge = (r = Ge) || n.memoizedState !== null), qt(e, t, n), (Ge = r))
          : qt(e, t, n);
        break;
      default:
        qt(e, t, n);
    }
  }
  function Ea(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Hf()),
        t.forEach(function (r) {
          var l = Jf.bind(null, e, r);
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
                ((Ue = u.stateNode), (gt = !1));
                break e;
              case 3:
                ((Ue = u.stateNode.containerInfo), (gt = !0));
                break e;
              case 4:
                ((Ue = u.stateNode.containerInfo), (gt = !0));
                break e;
            }
            u = u.return;
          }
          if (Ue === null) throw Error(c(160));
          (Ca(o, i, l), (Ue = null), (gt = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (h) {
          Ce(l, t, h);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Na(t, e), (t = t.sibling));
  }
  function Na(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((wt(t, e), Nt(e), r & 4)) {
          try {
            (Er(3, e, e.return), Nl(3, e));
          } catch (I) {
            Ce(e, e.return, I);
          }
          try {
            Er(5, e, e.return);
          } catch (I) {
            Ce(e, e.return, I);
          }
        }
        break;
      case 1:
        (wt(t, e), Nt(e), r & 512 && n !== null && Hn(n, n.return));
        break;
      case 5:
        if ((wt(t, e), Nt(e), r & 512 && n !== null && Hn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Gn(l, '');
          } catch (I) {
            Ce(e, e.return, I);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = n !== null ? n.memoizedProps : o,
            u = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (u === 'input' && o.type === 'radio' && o.name != null && eu(l, o), lo(u, i));
              var h = lo(u, o);
              for (i = 0; i < s.length; i += 2) {
                var w = s[i],
                  k = s[i + 1];
                w === 'style'
                  ? su(l, k)
                  : w === 'dangerouslySetInnerHTML'
                    ? iu(l, k)
                    : w === 'children'
                      ? Gn(l, k)
                      : ie(l, w, k, h);
              }
              switch (u) {
                case 'input':
                  bl(l, o);
                  break;
                case 'textarea':
                  ru(l, o);
                  break;
                case 'select':
                  var y = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var P = o.value;
                  P != null
                    ? Sn(l, !!o.multiple, P, !1)
                    : y !== !!o.multiple &&
                      (o.defaultValue != null
                        ? Sn(l, !!o.multiple, o.defaultValue, !0)
                        : Sn(l, !!o.multiple, o.multiple ? [] : '', !1));
              }
              l[mr] = o;
            } catch (I) {
              Ce(e, e.return, I);
            }
        }
        break;
      case 6:
        if ((wt(t, e), Nt(e), r & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          ((l = e.stateNode), (o = e.memoizedProps));
          try {
            l.nodeValue = o;
          } catch (I) {
            Ce(e, e.return, I);
          }
        }
        break;
      case 3:
        if ((wt(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            rr(t.containerInfo);
          } catch (I) {
            Ce(e, e.return, I);
          }
        break;
      case 4:
        (wt(t, e), Nt(e));
        break;
      case 13:
        (wt(t, e),
          Nt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (Oi = Ne())),
          r & 4 && Ea(e));
        break;
      case 22:
        if (
          ((w = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ge = (h = Ge) || w), wt(t, e), (Ge = h)) : wt(t, e),
          Nt(e),
          r & 8192)
        ) {
          if (
            ((h = e.memoizedState !== null), (e.stateNode.isHidden = h) && !w && (e.mode & 1) !== 0)
          )
            for (O = e, w = e.child; w !== null; ) {
              for (k = O = w; O !== null; ) {
                switch (((y = O), (P = y.child), y.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Er(4, y, y.return);
                    break;
                  case 1:
                    Hn(y, y.return);
                    var z = y.stateNode;
                    if (typeof z.componentWillUnmount == 'function') {
                      ((r = y), (n = y.return));
                      try {
                        ((t = r),
                          (z.props = t.memoizedProps),
                          (z.state = t.memoizedState),
                          z.componentWillUnmount());
                      } catch (I) {
                        Ce(r, n, I);
                      }
                    }
                    break;
                  case 5:
                    Hn(y, y.return);
                    break;
                  case 22:
                    if (y.memoizedState !== null) {
                      Pa(k);
                      continue;
                    }
                }
                P !== null ? ((P.return = y), (O = P)) : Pa(k);
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
                        (s = k.memoizedProps.style),
                        (i = s != null && s.hasOwnProperty('display') ? s.display : null),
                        (u.style.display = uu('display', i))));
                } catch (I) {
                  Ce(e, e.return, I);
                }
              }
            } else if (k.tag === 6) {
              if (w === null)
                try {
                  k.stateNode.nodeValue = h ? '' : k.memoizedProps;
                } catch (I) {
                  Ce(e, e.return, I);
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
        (wt(t, e), Nt(e), r & 4 && Ea(e));
        break;
      case 21:
        break;
      default:
        (wt(t, e), Nt(e));
    }
  }
  function Nt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (_a(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(c(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Gn(l, ''), (r.flags &= -33));
            var o = xa(e);
            Li(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              u = xa(e);
            ji(e, u, i);
            break;
          default:
            throw Error(c(161));
        }
      } catch (s) {
        Ce(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function $f(e, t, n) {
    ((O = e), ja(e));
  }
  function ja(e, t, n) {
    for (var r = (e.mode & 1) !== 0; O !== null; ) {
      var l = O,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || El;
        if (!i) {
          var u = l.alternate,
            s = (u !== null && u.memoizedState !== null) || Ge;
          u = El;
          var h = Ge;
          if (((El = i), (Ge = s) && !h))
            for (O = l; O !== null; )
              ((i = O),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? Ta(l)
                  : s !== null
                    ? ((s.return = i), (O = s))
                    : Ta(l));
          for (; o !== null; ) ((O = o), ja(o), (o = o.sibling));
          ((O = l), (El = u), (Ge = h));
        }
        La(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), (O = o)) : La(e);
    }
  }
  function La(e) {
    for (; O !== null; ) {
      var t = O;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ge || Nl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ge)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : yt(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && Ps(t, o, r);
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
                  Ps(t, i, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
                  var s = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      s.autoFocus && n.focus();
                      break;
                    case 'img':
                      s.src && (n.src = s.src);
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
                      k !== null && rr(k);
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
                throw Error(c(163));
            }
          Ge || (t.flags & 512 && Ni(t));
        } catch (y) {
          Ce(t, t.return, y);
        }
      }
      if (t === e) {
        O = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (O = n));
        break;
      }
      O = t.return;
    }
  }
  function Pa(e) {
    for (; O !== null; ) {
      var t = O;
      if (t === e) {
        O = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (O = n));
        break;
      }
      O = t.return;
    }
  }
  function Ta(e) {
    for (; O !== null; ) {
      var t = O;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Nl(4, t);
            } catch (s) {
              Ce(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                Ce(t, l, s);
              }
            }
            var o = t.return;
            try {
              Ni(t);
            } catch (s) {
              Ce(t, o, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              Ni(t);
            } catch (s) {
              Ce(t, i, s);
            }
        }
      } catch (s) {
        Ce(t, t.return, s);
      }
      if (t === e) {
        O = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        ((u.return = t.return), (O = u));
        break;
      }
      O = t.return;
    }
  }
  var Vf = Math.ceil,
    jl = X.ReactCurrentDispatcher,
    Pi = X.ReactCurrentOwner,
    ft = X.ReactCurrentBatchConfig,
    oe = 0,
    Fe = null,
    Te = null,
    He = 0,
    ot = 0,
    Wn = Vt(0),
    ze = 0,
    Nr = null,
    pn = 0,
    Ll = 0,
    Ti = 0,
    jr = null,
    be = null,
    Oi = 0,
    $n = 1 / 0,
    It = null,
    Pl = !1,
    zi = null,
    Xt = null,
    Tl = !1,
    Jt = null,
    Ol = 0,
    Lr = 0,
    Ri = null,
    zl = -1,
    Rl = 0;
  function qe() {
    return (oe & 6) !== 0 ? Ne() : zl !== -1 ? zl : (zl = Ne());
  }
  function Zt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (oe & 2) !== 0 && He !== 0
        ? He & -He
        : jf.transition !== null
          ? (Rl === 0 && (Rl = xu()), Rl)
          : ((e = fe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : zu(e.type))), e);
  }
  function St(e, t, n, r) {
    if (50 < Lr) throw ((Lr = 0), (Ri = null), Error(c(185)));
    (Zn(e, n, r),
      ((oe & 2) === 0 || e !== Fe) &&
        (e === Fe && ((oe & 2) === 0 && (Ll |= n), ze === 4 && bt(e, He)),
        et(e, r),
        n === 1 && oe === 0 && (t.mode & 1) === 0 && (($n = Ne() + 500), ul && Gt())));
  }
  function et(e, t) {
    var n = e.callbackNode;
    Nc(e, t);
    var r = Wr(e, e === Fe ? He : 0);
    if (r === 0) (n !== null && Su(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Su(n), t === 1))
        (e.tag === 0 ? Nf(za.bind(null, e)) : ys(za.bind(null, e)),
          _f(function () {
            (oe & 6) === 0 && Gt();
          }),
          (n = null));
      else {
        switch (Cu(r)) {
          case 1:
            n = fo;
            break;
          case 4:
            n = ku;
            break;
          case 16:
            n = Ar;
            break;
          case 536870912:
            n = _u;
            break;
          default:
            n = Ar;
        }
        n = Ua(n, Oa.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Oa(e, t) {
    if (((zl = -1), (Rl = 0), (oe & 6) !== 0)) throw Error(c(327));
    var n = e.callbackNode;
    if (Vn() && e.callbackNode !== n) return null;
    var r = Wr(e, e === Fe ? He : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Il(e, r);
    else {
      t = r;
      var l = oe;
      oe |= 2;
      var o = Ia();
      (Fe !== e || He !== t) && ((It = null), ($n = Ne() + 500), hn(e, t));
      do
        try {
          Kf();
          break;
        } catch (u) {
          Ra(e, u);
        }
      while (!0);
      (Jo(), (jl.current = o), (oe = l), Te !== null ? (t = 0) : ((Fe = null), (He = 0), (t = ze)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = po(e)), l !== 0 && ((r = l), (t = Ii(e, l)))), t === 1))
        throw ((n = Nr), hn(e, 0), bt(e, r), et(e, Ne()), n);
      if (t === 6) bt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Qf(l) &&
            ((t = Il(e, r)),
            t === 2 && ((o = po(e)), o !== 0 && ((r = o), (t = Ii(e, o)))),
            t === 1))
        )
          throw ((n = Nr), hn(e, 0), bt(e, r), et(e, Ne()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            vn(e, be, It);
            break;
          case 3:
            if ((bt(e, r), (r & 130023424) === r && ((t = Oi + 500 - Ne()), 10 < t))) {
              if (Wr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (qe(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = Uo(vn.bind(null, e, be, It), t);
              break;
            }
            vn(e, be, It);
            break;
          case 4:
            if ((bt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - mt(r);
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
                            : 1960 * Vf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Uo(vn.bind(null, e, be, It), r);
              break;
            }
            vn(e, be, It);
            break;
          case 5:
            vn(e, be, It);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return (et(e, Ne()), e.callbackNode === n ? Oa.bind(null, e) : null);
  }
  function Ii(e, t) {
    var n = jr;
    return (
      e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
      (e = Il(e, t)),
      e !== 2 && ((t = be), (be = n), t !== null && Mi(t)),
      e
    );
  }
  function Mi(e) {
    be === null ? (be = e) : be.push.apply(be, e);
  }
  function Qf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!ht(o(), l)) return !1;
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
  function bt(e, t) {
    for (
      t &= ~Ti, t &= ~Ll, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - mt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function za(e) {
    if ((oe & 6) !== 0) throw Error(c(327));
    Vn();
    var t = Wr(e, 0);
    if ((t & 1) === 0) return (et(e, Ne()), null);
    var n = Il(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = po(e);
      r !== 0 && ((t = r), (n = Ii(e, r)));
    }
    if (n === 1) throw ((n = Nr), hn(e, 0), bt(e, t), et(e, Ne()), n);
    if (n === 6) throw Error(c(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      vn(e, be, It),
      et(e, Ne()),
      null
    );
  }
  function Fi(e, t) {
    var n = oe;
    oe |= 1;
    try {
      return e(t);
    } finally {
      ((oe = n), oe === 0 && (($n = Ne() + 500), ul && Gt()));
    }
  }
  function mn(e) {
    Jt !== null && Jt.tag === 0 && (oe & 6) === 0 && Vn();
    var t = oe;
    oe |= 1;
    var n = ft.transition,
      r = fe;
    try {
      if (((ft.transition = null), (fe = 1), e)) return e();
    } finally {
      ((fe = r), (ft.transition = n), (oe = t), (oe & 6) === 0 && Gt());
    }
  }
  function Di() {
    ((ot = Wn.current), we(Wn));
  }
  function hn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), kf(n)), Te !== null))
      for (n = Te.return; n !== null; ) {
        var r = n;
        switch ((Go(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && ol());
            break;
          case 3:
            (Bn(), we(Xe), we($e), oi());
            break;
          case 5:
            ri(r);
            break;
          case 4:
            Bn();
            break;
          case 13:
            we(_e);
            break;
          case 19:
            we(_e);
            break;
          case 10:
            Zo(r.type._context);
            break;
          case 22:
          case 23:
            Di();
        }
        n = n.return;
      }
    if (
      ((Fe = e),
      (Te = e = en(e.current, null)),
      (He = ot = t),
      (ze = 0),
      (Nr = null),
      (Ti = Ll = pn = 0),
      (be = jr = null),
      cn !== null)
    ) {
      for (t = 0; t < cn.length; t++)
        if (((n = cn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var i = o.next;
            ((o.next = l), (r.next = i));
          }
          n.pending = r;
        }
      cn = null;
    }
    return e;
  }
  function Ra(e, t) {
    do {
      var n = Te;
      try {
        if ((Jo(), (yl.current = kl), gl)) {
          for (var r = xe.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          gl = !1;
        }
        if (
          ((dn = 0),
          (Me = Oe = xe = null),
          (Sr = !1),
          (kr = 0),
          (Pi.current = null),
          n === null || n.return === null)
        ) {
          ((ze = 1), (Nr = t), (Te = null));
          break;
        }
        e: {
          var o = e,
            i = n.return,
            u = n,
            s = t;
          if (
            ((t = He),
            (u.flags |= 32768),
            s !== null && typeof s == 'object' && typeof s.then == 'function')
          ) {
            var h = s,
              w = u,
              k = w.tag;
            if ((w.mode & 1) === 0 && (k === 0 || k === 11 || k === 15)) {
              var y = w.alternate;
              y
                ? ((w.updateQueue = y.updateQueue),
                  (w.memoizedState = y.memoizedState),
                  (w.lanes = y.lanes))
                : ((w.updateQueue = null), (w.memoizedState = null));
            }
            var P = la(i);
            if (P !== null) {
              ((P.flags &= -257), oa(P, i, u, o, t), P.mode & 1 && ra(o, h, t), (t = P), (s = h));
              var z = t.updateQueue;
              if (z === null) {
                var I = new Set();
                (I.add(s), (t.updateQueue = I));
              } else z.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (ra(o, h, t), Ai());
                break e;
              }
              s = Error(c(426));
            }
          } else if (Se && u.mode & 1) {
            var je = la(i);
            if (je !== null) {
              ((je.flags & 65536) === 0 && (je.flags |= 256), oa(je, i, u, o, t), qo(Un(s, u)));
              break e;
            }
          }
          ((o = s = Un(s, u)),
            ze !== 4 && (ze = 2),
            jr === null ? (jr = [o]) : jr.push(o),
            (o = i));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var d = ta(o, s, t);
                Ls(o, d);
                break e;
              case 1:
                u = s;
                var a = o.type,
                  m = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof a.getDerivedStateFromError == 'function' ||
                    (m !== null &&
                      typeof m.componentDidCatch == 'function' &&
                      (Xt === null || !Xt.has(m))))
                ) {
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var x = na(o, u, t);
                  Ls(o, x);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Fa(n);
      } catch (F) {
        ((t = F), Te === n && n !== null && (Te = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Ia() {
    var e = jl.current;
    return ((jl.current = kl), e === null ? kl : e);
  }
  function Ai() {
    ((ze === 0 || ze === 3 || ze === 2) && (ze = 4),
      Fe === null || ((pn & 268435455) === 0 && (Ll & 268435455) === 0) || bt(Fe, He));
  }
  function Il(e, t) {
    var n = oe;
    oe |= 2;
    var r = Ia();
    (Fe !== e || He !== t) && ((It = null), hn(e, t));
    do
      try {
        Gf();
        break;
      } catch (l) {
        Ra(e, l);
      }
    while (!0);
    if ((Jo(), (oe = n), (jl.current = r), Te !== null)) throw Error(c(261));
    return ((Fe = null), (He = 0), ze);
  }
  function Gf() {
    for (; Te !== null; ) Ma(Te);
  }
  function Kf() {
    for (; Te !== null && !yc(); ) Ma(Te);
  }
  function Ma(e) {
    var t = Ba(e.alternate, e, ot);
    ((e.memoizedProps = e.pendingProps), t === null ? Fa(e) : (Te = t), (Pi.current = null));
  }
  function Fa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Bf(n, t, ot)), n !== null)) {
          Te = n;
          return;
        }
      } else {
        if (((n = Uf(n, t)), n !== null)) {
          ((n.flags &= 32767), (Te = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((ze = 6), (Te = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Te = t;
        return;
      }
      Te = t = e;
    } while (t !== null);
    ze === 0 && (ze = 5);
  }
  function vn(e, t, n) {
    var r = fe,
      l = ft.transition;
    try {
      ((ft.transition = null), (fe = 1), Yf(e, t, n, r));
    } finally {
      ((ft.transition = l), (fe = r));
    }
    return null;
  }
  function Yf(e, t, n, r) {
    do Vn();
    while (Jt !== null);
    if ((oe & 6) !== 0) throw Error(c(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(c(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = n.lanes | n.childLanes;
    if (
      (jc(e, o),
      e === Fe && ((Te = Fe = null), (He = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Tl ||
        ((Tl = !0),
        Ua(Ar, function () {
          return (Vn(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = ft.transition), (ft.transition = null));
      var i = fe;
      fe = 1;
      var u = oe;
      ((oe |= 4),
        (Pi.current = null),
        Wf(e, n),
        Na(n, e),
        mf(Ao),
        (Qr = !!Do),
        (Ao = Do = null),
        (e.current = n),
        $f(n),
        gc(),
        (oe = u),
        (fe = i),
        (ft.transition = o));
    } else e.current = n;
    if (
      (Tl && ((Tl = !1), (Jt = e), (Ol = l)),
      (o = e.pendingLanes),
      o === 0 && (Xt = null),
      kc(n.stateNode),
      et(e, Ne()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (Pl) throw ((Pl = !1), (e = zi), (zi = null), e);
    return (
      (Ol & 1) !== 0 && e.tag !== 0 && Vn(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === Ri ? Lr++ : ((Lr = 0), (Ri = e))) : (Lr = 0),
      Gt(),
      null
    );
  }
  function Vn() {
    if (Jt !== null) {
      var e = Cu(Ol),
        t = ft.transition,
        n = fe;
      try {
        if (((ft.transition = null), (fe = 16 > e ? 16 : e), Jt === null)) var r = !1;
        else {
          if (((e = Jt), (Jt = null), (Ol = 0), (oe & 6) !== 0)) throw Error(c(331));
          var l = oe;
          for (oe |= 4, O = e.current; O !== null; ) {
            var o = O,
              i = o.child;
            if ((O.flags & 16) !== 0) {
              var u = o.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var h = u[s];
                  for (O = h; O !== null; ) {
                    var w = O;
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Er(8, w, o);
                    }
                    var k = w.child;
                    if (k !== null) ((k.return = w), (O = k));
                    else
                      for (; O !== null; ) {
                        w = O;
                        var y = w.sibling,
                          P = w.return;
                        if ((ka(w), w === h)) {
                          O = null;
                          break;
                        }
                        if (y !== null) {
                          ((y.return = P), (O = y));
                          break;
                        }
                        O = P;
                      }
                  }
                }
                var z = o.alternate;
                if (z !== null) {
                  var I = z.child;
                  if (I !== null) {
                    z.child = null;
                    do {
                      var je = I.sibling;
                      ((I.sibling = null), (I = je));
                    } while (I !== null);
                  }
                }
                O = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null) ((i.return = o), (O = i));
            else
              e: for (; O !== null; ) {
                if (((o = O), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(9, o, o.return);
                  }
                var d = o.sibling;
                if (d !== null) {
                  ((d.return = o.return), (O = d));
                  break e;
                }
                O = o.return;
              }
          }
          var a = e.current;
          for (O = a; O !== null; ) {
            i = O;
            var m = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && m !== null) ((m.return = i), (O = m));
            else
              e: for (i = a; O !== null; ) {
                if (((u = O), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Nl(9, u);
                    }
                  } catch (F) {
                    Ce(u, u.return, F);
                  }
                if (u === i) {
                  O = null;
                  break e;
                }
                var x = u.sibling;
                if (x !== null) {
                  ((x.return = u.return), (O = x));
                  break e;
                }
                O = u.return;
              }
          }
          if (((oe = l), Gt(), _t && typeof _t.onPostCommitFiberRoot == 'function'))
            try {
              _t.onPostCommitFiberRoot(Br, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((fe = n), (ft.transition = t));
      }
    }
    return !1;
  }
  function Da(e, t, n) {
    ((t = Un(n, t)),
      (t = ta(e, t, 1)),
      (e = Yt(e, t, 1)),
      (t = qe()),
      e !== null && (Zn(e, 1, t), et(e, t)));
  }
  function Ce(e, t, n) {
    if (e.tag === 3) Da(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Da(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (Xt === null || !Xt.has(r)))
          ) {
            ((e = Un(n, e)),
              (e = na(t, e, 1)),
              (t = Yt(t, e, 1)),
              (e = qe()),
              t !== null && (Zn(t, 1, e), et(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function qf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = qe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Fe === e &&
        (He & n) === n &&
        (ze === 4 || (ze === 3 && (He & 130023424) === He && 500 > Ne() - Oi)
          ? hn(e, 0)
          : (Ti |= n)),
      et(e, t));
  }
  function Aa(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Hr), (Hr <<= 1), (Hr & 130023424) === 0 && (Hr = 4194304)));
    var n = qe();
    ((e = Ot(e, t)), e !== null && (Zn(e, t, n), et(e, n)));
  }
  function Xf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Aa(e, n));
  }
  function Jf(e, t) {
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
        throw Error(c(314));
    }
    (r !== null && r.delete(t), Aa(e, n));
  }
  var Ba;
  Ba = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Xe.current) Ze = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Ze = !1), Af(e, t, n));
        Ze = (e.flags & 131072) !== 0;
      }
    else ((Ze = !1), Se && (t.flags & 1048576) !== 0 && gs(t, al, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Cl(e, t), (e = t.pendingProps));
        var l = zn(t, $e.current);
        (An(t, n), (l = si(null, t, r, e, l, n)));
        var o = ai();
        return (
          (t.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Je(r) ? ((o = !0), il(t)) : (o = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              ti(t),
              (l.updater = _l),
              (t.stateNode = l),
              (l._reactInternals = t),
              hi(t, r, e, n),
              (t = wi(null, t, r, !0, o, n)))
            : ((t.tag = 0), Se && o && Qo(t), Ye(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Cl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = bf(r)),
            (e = yt(r, e)),
            l)
          ) {
            case 0:
              t = gi(null, t, r, e, n);
              break e;
            case 1:
              t = fa(null, t, r, e, n);
              break e;
            case 11:
              t = ia(null, t, r, e, n);
              break e;
            case 14:
              t = ua(null, t, r, yt(r.type, e), n);
              break e;
          }
          throw Error(c(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : yt(r, l)),
          gi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : yt(r, l)),
          fa(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((da(t), e === null)) throw Error(c(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            js(e, t),
            hl(t, r, null, n));
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
              ((l = Un(Error(c(423)), t)), (t = pa(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Un(Error(c(424)), t)), (t = pa(e, t, r, n, l)));
              break e;
            } else
              for (
                lt = $t(t.stateNode.containerInfo.firstChild),
                  rt = t,
                  Se = !0,
                  vt = null,
                  n = Es(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Mn(), r === l)) {
              t = Rt(e, t, n);
              break e;
            }
            Ye(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ts(t),
          e === null && Yo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          Bo(r, l) ? (i = null) : o !== null && Bo(r, o) && (t.flags |= 32),
          ca(e, t),
          Ye(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Yo(t), null);
      case 13:
        return ma(e, t, n);
      case 4:
        return (
          ni(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Fn(t, null, r, n)) : Ye(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : yt(r, l)),
          ia(e, t, r, l, n)
        );
      case 7:
        return (Ye(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Ye(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Ye(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (i = l.value),
            ye(dl, r._currentValue),
            (r._currentValue = i),
            o !== null)
          )
            if (ht(o.value, i)) {
              if (o.children === l.children && !Xe.current) {
                t = Rt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var u = o.dependencies;
                if (u !== null) {
                  i = o.child;
                  for (var s = u.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (o.tag === 1) {
                        ((s = zt(-1, n & -n)), (s.tag = 2));
                        var h = o.updateQueue;
                        if (h !== null) {
                          h = h.shared;
                          var w = h.pending;
                          (w === null ? (s.next = s) : ((s.next = w.next), (w.next = s)),
                            (h.pending = s));
                        }
                      }
                      ((o.lanes |= n),
                        (s = o.alternate),
                        s !== null && (s.lanes |= n),
                        bo(o.return, n, t),
                        (u.lanes |= n));
                      break;
                    }
                    s = s.next;
                  }
                } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((i = o.return), i === null)) throw Error(c(341));
                  ((i.lanes |= n),
                    (u = i.alternate),
                    u !== null && (u.lanes |= n),
                    bo(i, n, t),
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
          (Ye(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          An(t, n),
          (l = at(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ye(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = yt(r, t.pendingProps)), (l = yt(r.type, l)), ua(e, t, r, l, n));
      case 15:
        return sa(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : yt(r, l)),
          Cl(e, t),
          (t.tag = 1),
          Je(r) ? ((e = !0), il(t)) : (e = !1),
          An(t, n),
          bs(t, r, l),
          hi(t, r, l, n),
          wi(null, t, r, !0, e, n)
        );
      case 19:
        return va(e, t, n);
      case 22:
        return aa(e, t, n);
    }
    throw Error(c(156, t.tag));
  };
  function Ua(e, t) {
    return wu(e, t);
  }
  function Zf(e, t, n, r) {
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
  function dt(e, t, n, r) {
    return new Zf(e, t, n, r);
  }
  function Bi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function bf(e) {
    if (typeof e == 'function') return Bi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ke)) return 11;
      if (e === We) return 14;
    }
    return 2;
  }
  function en(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = dt(e.tag, t, e.key, e.mode)),
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
  function Ml(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == 'function')) Bi(e) && (i = 1);
    else if (typeof e == 'string') i = 5;
    else
      e: switch (e) {
        case se:
          return yn(n.children, l, o, t);
        case Le:
          ((i = 8), (l |= 8));
          break;
        case Be:
          return ((e = dt(12, n, t, l | 2)), (e.elementType = Be), (e.lanes = o), e);
        case he:
          return ((e = dt(13, n, t, l)), (e.elementType = he), (e.lanes = o), e);
        case ce:
          return ((e = dt(19, n, t, l)), (e.elementType = ce), (e.lanes = o), e);
        case de:
          return Fl(n, l, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Ee:
                i = 10;
                break e;
              case Pe:
                i = 9;
                break e;
              case ke:
                i = 11;
                break e;
              case We:
                i = 14;
                break e;
              case Ie:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(c(130, e == null ? e : typeof e, ''));
      }
    return ((t = dt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
  }
  function yn(e, t, n, r) {
    return ((e = dt(7, e, r, t)), (e.lanes = n), e);
  }
  function Fl(e, t, n, r) {
    return (
      (e = dt(22, e, r, t)),
      (e.elementType = de),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ui(e, t, n) {
    return ((e = dt(6, e, null, t)), (e.lanes = n), e);
  }
  function Hi(e, t, n) {
    return (
      (t = dt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function ed(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = mo(0)),
      (this.expirationTimes = mo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = mo(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Wi(e, t, n, r, l, o, i, u, s) {
    return (
      (e = new ed(e, t, n, u, s)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = dt(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ti(o),
      e
    );
  }
  function td(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: W,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Ha(e) {
    if (!e) return Qt;
    e = e._reactInternals;
    e: {
      if (ln(e) !== e || e.tag !== 1) throw Error(c(170));
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
      throw Error(c(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Je(n)) return hs(e, n, t);
    }
    return t;
  }
  function Wa(e, t, n, r, l, o, i, u, s) {
    return (
      (e = Wi(n, r, !0, e, l, o, i, u, s)),
      (e.context = Ha(null)),
      (n = e.current),
      (r = qe()),
      (l = Zt(n)),
      (o = zt(r, l)),
      (o.callback = t ?? null),
      Yt(n, o, l),
      (e.current.lanes = l),
      Zn(e, l, r),
      et(e, r),
      e
    );
  }
  function Dl(e, t, n, r) {
    var l = t.current,
      o = qe(),
      i = Zt(l);
    return (
      (n = Ha(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = zt(o, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Yt(l, t, i)),
      e !== null && (St(e, l, i, o), ml(e, l, i)),
      i
    );
  }
  function Al(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function $a(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function $i(e, t) {
    ($a(e, t), (e = e.alternate) && $a(e, t));
  }
  function nd() {
    return null;
  }
  var Va =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Vi(e) {
    this._internalRoot = e;
  }
  ((Bl.prototype.render = Vi.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      Dl(e, t, null, null);
    }),
    (Bl.prototype.unmount = Vi.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (mn(function () {
            Dl(null, e, null, null);
          }),
            (t[jt] = null));
        }
      }));
  function Bl(e) {
    this._internalRoot = e;
  }
  Bl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ju();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++);
      (Ut.splice(n, 0, e), n === 0 && Tu(e));
    }
  };
  function Qi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ul(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Qa() {}
  function rd(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var h = Al(i);
          o.call(h);
        };
      }
      var i = Wa(t, r, e, 0, null, !1, !1, '', Qa);
      return (
        (e._reactRootContainer = i),
        (e[jt] = i.current),
        dr(e.nodeType === 8 ? e.parentNode : e),
        mn(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var u = r;
      r = function () {
        var h = Al(s);
        u.call(h);
      };
    }
    var s = Wi(e, 0, !1, null, null, !1, !1, '', Qa);
    return (
      (e._reactRootContainer = s),
      (e[jt] = s.current),
      dr(e.nodeType === 8 ? e.parentNode : e),
      mn(function () {
        Dl(t, s, n, r);
      }),
      s
    );
  }
  function Hl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == 'function') {
        var u = l;
        l = function () {
          var s = Al(i);
          u.call(s);
        };
      }
      Dl(t, i, e, l);
    } else i = rd(n, t, e, l, r);
    return Al(i);
  }
  ((Eu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Jn(t.pendingLanes);
          n !== 0 && (ho(t, n | 1), et(t, Ne()), (oe & 6) === 0 && (($n = Ne() + 500), Gt()));
        }
        break;
      case 13:
        (mn(function () {
          var r = Ot(e, 1);
          if (r !== null) {
            var l = qe();
            St(r, e, 1, l);
          }
        }),
          $i(e, 1));
    }
  }),
    (vo = function (e) {
      if (e.tag === 13) {
        var t = Ot(e, 134217728);
        if (t !== null) {
          var n = qe();
          St(t, e, 134217728, n);
        }
        $i(e, 134217728);
      }
    }),
    (Nu = function (e) {
      if (e.tag === 13) {
        var t = Zt(e),
          n = Ot(e, t);
        if (n !== null) {
          var r = qe();
          St(n, e, t, r);
        }
        $i(e, t);
      }
    }),
    (ju = function () {
      return fe;
    }),
    (Lu = function (e, t) {
      var n = fe;
      try {
        return ((fe = e), t());
      } finally {
        fe = n;
      }
    }),
    (uo = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((bl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = ll(r);
                if (!l) throw Error(c(90));
                (Zi(r), bl(r, l));
              }
            }
          }
          break;
        case 'textarea':
          ru(e, n);
          break;
        case 'select':
          ((t = n.value), t != null && Sn(e, !!n.multiple, t, !1));
      }
    }),
    (du = Fi),
    (pu = mn));
  var ld = { usingClientEntryPoint: !1, Events: [hr, Tn, ll, cu, fu, Fi] },
    Pr = {
      findFiberByHostInstance: on,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    od = {
      bundleType: Pr.bundleType,
      version: Pr.version,
      rendererPackageName: Pr.rendererPackageName,
      rendererConfig: Pr.rendererConfig,
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
        return ((e = yu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Pr.findFiberByHostInstance || nd,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wl.isDisabled && Wl.supportsFiber)
      try {
        ((Br = Wl.inject(od)), (_t = Wl));
      } catch {}
  }
  return (
    (tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ld),
    (tt.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Qi(t)) throw Error(c(200));
      return td(e, t, null, n);
    }),
    (tt.createRoot = function (e, t) {
      if (!Qi(e)) throw Error(c(299));
      var n = !1,
        r = '',
        l = Va;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Wi(e, 1, !1, null, null, n, !1, r, l)),
        (e[jt] = t.current),
        dr(e.nodeType === 8 ? e.parentNode : e),
        new Vi(t)
      );
    }),
    (tt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(c(188))
          : ((e = Object.keys(e).join(',')), Error(c(268, e)));
      return ((e = yu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (tt.flushSync = function (e) {
      return mn(e);
    }),
    (tt.hydrate = function (e, t, n) {
      if (!Ul(t)) throw Error(c(200));
      return Hl(null, e, t, !0, n);
    }),
    (tt.hydrateRoot = function (e, t, n) {
      if (!Qi(e)) throw Error(c(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        i = Va;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Wa(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[jt] = t.current),
        dr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Bl(t);
    }),
    (tt.render = function (e, t, n) {
      if (!Ul(t)) throw Error(c(200));
      return Hl(null, e, t, !1, n);
    }),
    (tt.unmountComponentAtNode = function (e) {
      if (!Ul(e)) throw Error(c(40));
      return e._reactRootContainer
        ? (mn(function () {
            Hl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[jt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (tt.unstable_batchedUpdates = Fi),
    (tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Ul(n)) throw Error(c(200));
      if (e == null || e._reactInternals === void 0) throw Error(c(38));
      return Hl(e, t, n, !1, r);
    }),
    (tt.version = '18.3.1-next-f1338f8080-20240426'),
    tt
  );
}
var ba;
function pd() {
  if (ba) return Yi.exports;
  ba = 1;
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
  return (g(), (Yi.exports = dd()), Yi.exports);
}
var ec;
function md() {
  if (ec) return $l;
  ec = 1;
  var g = pd();
  return (($l.createRoot = g.createRoot), ($l.hydrateRoot = g.hydrateRoot), $l);
}
var hd = md();
const oc = ({ subtitle: g }) =>
    p.jsxs('header', {
      className: 'header',
      children: [
        p.jsx('div', { className: 'header-title', children: 'Moral Parliament' }),
        g && p.jsx('div', { className: 'header-subtitle', children: g }),
      ],
    }),
  vd = '_container_11wow_3',
  yd = '_heading_11wow_8',
  gd = '_headingEmphasis_11wow_16',
  wd = '_intro_11wow_24',
  Sd = '_infoBox_11wow_32',
  kd = '_infoBoxLabel_11wow_40',
  _d = '_infoBoxGrid_11wow_47',
  xd = '_infoBoxItem_11wow_54',
  Mt = {
    container: vd,
    heading: yd,
    headingEmphasis: gd,
    intro: wd,
    infoBox: Sd,
    infoBoxLabel: kd,
    infoBoxGrid: _d,
    infoBoxItem: xd,
  },
  Cd = ({ onStart: g }) =>
    p.jsxs('div', {
      className: 'screen',
      children: [
        p.jsx(oc, { subtitle: '~3 minutes' }),
        p.jsx('main', {
          className: 'screen-main',
          children: p.jsxs('div', {
            className: Mt.container,
            children: [
              p.jsxs('h1', {
                className: Mt.heading,
                children: [
                  'Where Should Your',
                  p.jsx('br', {}),
                  p.jsx('span', { className: Mt.headingEmphasis, children: 'Giving Go?' }),
                ],
              }),
              p.jsx('p', {
                className: Mt.intro,
                children:
                  'Uncertain about your ethical views? This tool helps you allocate resources across different causes based on your moral credences—the probabilities you assign to different ethical perspectives.',
              }),
              p.jsx('button', {
                onClick: g,
                className: 'btn btn-primary',
                children: 'Start Quiz →',
              }),
              p.jsxs('div', {
                className: Mt.infoBox,
                children: [
                  p.jsx('div', { className: Mt.infoBoxLabel, children: "You'll be asked about:" }),
                  p.jsxs('div', {
                    className: Mt.infoBoxGrid,
                    children: [
                      p.jsx('div', {
                        className: Mt.infoBoxItem,
                        children: '🐾 Animal vs. Human welfare',
                      }),
                      p.jsx('div', {
                        className: Mt.infoBoxItem,
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
  Ed = ({ percentage: g }) =>
    p.jsx('div', {
      className: 'progress-container',
      children: p.jsx('div', {
        className: 'progress-track',
        children: p.jsx('div', { className: 'progress-fill', style: { width: `${g}%` } }),
      }),
    });
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nd = (g) => g.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  ic = (...g) =>
    g
      .filter((_, c, R) => !!_ && _.trim() !== '' && R.indexOf(_) === c)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var jd = {
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
 */ const Ld = me.forwardRef(
  (
    {
      color: g = 'currentColor',
      size: _ = 24,
      strokeWidth: c = 2,
      absoluteStrokeWidth: R,
      className: S = '',
      children: C,
      iconNode: L,
      ...M
    },
    j
  ) =>
    me.createElement(
      'svg',
      {
        ref: j,
        ...jd,
        width: _,
        height: _,
        stroke: g,
        strokeWidth: R ? (Number(c) * 24) / Number(_) : c,
        className: ic('lucide', S),
        ...M,
      },
      [...L.map(([G, D]) => me.createElement(G, D)), ...(Array.isArray(C) ? C : [C])]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rr = (g, _) => {
  const c = me.forwardRef(({ className: R, ...S }, C) =>
    me.createElement(Ld, { ref: C, iconNode: _, className: ic(`lucide-${Nd(g)}`, R), ...S })
  );
  return ((c.displayName = `${g}`), c);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pd = Rr('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Td = Rr('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uc = Rr('Lock', [
  ['rect', { width: '18', height: '11', x: '3', y: '11', rx: '2', ry: '2', key: '1w4ew1' }],
  ['path', { d: 'M7 11V7a5 5 0 0 1 10 0v4', key: 'fwvmzm' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sc = Rr('RotateCcw', [
  ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
  ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Od = Rr('SlidersVertical', [
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
  zd = '_modeToggle_modhv_3',
  Rd = '_button_modhv_10',
  Id = '_options_modhv_23',
  Md = '_active_modhv_29',
  Fd = '_sliders_modhv_35',
  gn = { modeToggle: zd, button: Rd, options: Id, active: Md, sliders: Fd },
  Dd = ({ mode: g, setMode: _ }) =>
    p.jsxs('div', {
      className: gn.modeToggle,
      children: [
        p.jsx('button', {
          onClick: () => _('options'),
          className: `${gn.button} ${gn.options} ${g === 'options' ? gn.active : ''}`,
          children: 'Pick One',
        }),
        p.jsxs('button', {
          onClick: () => _('sliders'),
          className: `${gn.button} ${gn.sliders} ${g === 'sliders' ? gn.active : ''}`,
          children: [p.jsx(Od, { size: 14 }), 'Custom Mix'],
        }),
      ],
    }),
  Ad = '_optionButton_xv4xt_3',
  Bd = '_selected_xv4xt_20',
  Ud = '_content_xv4xt_34',
  Hd = '_textContent_xv4xt_40',
  Wd = '_label_xv4xt_44',
  $d = '_description_xv4xt_56',
  Vd = '_checkmark_xv4xt_62',
  Ft = {
    optionButton: Ad,
    default: '_default_xv4xt_15',
    selected: Bd,
    content: Ud,
    textContent: Hd,
    label: Wd,
    description: $d,
    checkmark: Vd,
  },
  Qd = ({
    label: g,
    description: _,
    optionKey: c,
    credences: R,
    setCredences: S,
    color: C,
    setInputMode: L,
  }) => {
    const M = R[c] === 100,
      j = () => {
        const G = { equal: 0, '10x': 0, '100x': 0 };
        ((G[c] = 100), S(G), L('options'));
      };
    return p.jsx('button', {
      onClick: j,
      className: `${Ft.optionButton} ${M ? Ft.selected : Ft.default}`,
      style: { '--option-color': C },
      children: p.jsxs('div', {
        className: Ft.content,
        children: [
          p.jsxs('div', {
            className: Ft.textContent,
            children: [
              p.jsx('div', { className: `${Ft.label} ${M ? Ft.selected : ''}`, children: g }),
              p.jsx('div', { className: Ft.description, children: _ }),
            ],
          }),
          M && p.jsx('div', { className: Ft.checkmark, children: '✓' }),
        ],
      }),
    });
  },
  Gd = '_credenceSlider_1qobm_4',
  Kd = '_header_1qobm_8',
  Yd = '_label_1qobm_15',
  qd = '_description_1qobm_22',
  Xd = '_value_1qobm_28',
  Jd = '_sliderRow_1qobm_35',
  Zd = '_sliderContainer_1qobm_41',
  bd = '_lockLimit_1qobm_46',
  ep = '_lockButton_1qobm_55',
  tp = '_locked_1qobm_73',
  np = '_compactSlider_1qobm_91',
  Re = {
    credenceSlider: Gd,
    header: Kd,
    label: Yd,
    description: qd,
    value: Xd,
    sliderRow: Jd,
    sliderContainer: Zd,
    lockLimit: bd,
    lockButton: ep,
    locked: tp,
    compactSlider: np,
  },
  rp = { resetButton: !1 },
  lp = { ui: rp },
  op = ({
    label: g,
    description: _,
    value: c,
    onChange: R,
    color: S,
    credences: C,
    sliderKey: L,
    lockedKey: M,
    setLockedKey: j,
  }) => {
    const [G, D] = me.useState(null),
      [B, E] = me.useState(!1),
      H = M === L,
      Y = M && M !== L,
      Q = Y ? C[M] : 0,
      A = Y ? 100 - Q : 100,
      q = Y ? `calc(${A}% + ${(50 - A) * 0.16}px)` : null,
      te = () => {
        H || (E(!0), D({ ...C }));
      },
      ie = (W) => {
        if (H) return;
        E(!1);
        const se = parseFloat(W.target.value);
        (R(se, G, !0, M), D(null));
      },
      X = (W) => {
        if (H) return;
        const se = parseFloat(W.target.value);
        R(se, G, !1, M);
      },
      ne = () => {
        j(M === L ? null : L);
      };
    return p.jsxs('div', {
      className: Re.credenceSlider,
      children: [
        p.jsxs('div', {
          className: Re.header,
          children: [
            p.jsxs('div', {
              children: [
                p.jsx('div', { className: Re.label, children: g }),
                p.jsx('div', { className: Re.description, children: _ }),
              ],
            }),
            p.jsxs('div', {
              className: Re.value,
              style: { color: S },
              children: [Math.round(c), '%'],
            }),
          ],
        }),
        p.jsxs('div', {
          className: Re.sliderRow,
          children: [
            p.jsxs('div', {
              className: Re.sliderContainer,
              children: [
                p.jsx('input', {
                  type: 'range',
                  min: '0',
                  max: '100',
                  step: 'any',
                  value: c,
                  onChange: X,
                  onMouseDown: te,
                  onMouseUp: ie,
                  onMouseLeave: ie,
                  onTouchStart: te,
                  onTouchEnd: ie,
                  'data-dragging': B,
                  disabled: H,
                  style: {
                    background: Y
                      ? `linear-gradient(to right, ${S} 0%, ${S} ${c}%, rgba(255,255,255,0.15) ${c}%, rgba(255,255,255,0.15) ${q}, rgba(255,255,255,0.08) ${q}, rgba(255,255,255,0.08) 100%)`
                      : `linear-gradient(to right, ${S} 0%, ${S} ${c}%, rgba(255,255,255,0.15) ${c}%, rgba(255,255,255,0.15) 100%)`,
                    cursor: H ? 'not-allowed' : 'pointer',
                  },
                }),
                Y && p.jsx('div', { className: Re.lockLimit, style: { left: q } }),
              ],
            }),
            p.jsx('button', {
              className: `${Re.lockButton} ${H ? Re.locked : ''}`,
              onClick: ne,
              title: H ? 'Unlock slider' : 'Lock slider',
              type: 'button',
              children: p.jsx(uc, { size: 16 }),
            }),
          ],
        }),
      ],
    });
  },
  Gl = {
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
  Kl = { equal: 1, '10x': 0.1, '100x': 0.01 },
  Yl = { equal: 1, '10x': 0.1, '100x': 0.01 },
  ql = { equal: 0, '10x': 0.5, '100x': 1 },
  Xl = { equal: 1, '10x': 0.1, '100x': 0.01 },
  ip = [
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
  up = [
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
  sp = [
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
  ap = [
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
  cp = [
    { key: 'equal', label: 'Equal weight', short: 'Eq', color: '#81B29A' },
    { key: '10x', label: '10× less', short: '10×', color: '#98C1D9' },
    { key: '100x', label: '100× less', short: '100×', color: '#E07A5F' },
  ],
  fp = [
    { key: 'equal', label: 'Equal weight', short: 'Eq', color: '#81B29A' },
    { key: '10x', label: '10× less', short: '10×', color: '#98C1D9' },
    { key: '100x', label: '100× less', short: '100×', color: '#E07A5F' },
  ],
  dp = [
    { key: 'equal', label: 'Irrelevant', short: 'Eq', color: '#81B29A' },
    { key: '10x', label: 'Matters', short: '10×', color: '#98C1D9' },
    { key: '100x', label: 'Dominates', short: '100×', color: '#E07A5F' },
  ],
  pp = [
    { key: 'equal', label: 'Equal weight', short: 'Eq', color: '#81B29A' },
    { key: '10x', label: '10× less', short: '10×', color: '#98C1D9' },
    { key: '100x', label: '100× less', short: '100×', color: '#E07A5F' },
  ],
  nn = { equal: 33, '10x': 33, '100x': 34 },
  Ae = {
    WELCOME: 'welcome',
    ANIMALS: 'animals',
    FUTURE: 'future',
    SCALE: 'scale',
    CERTAINTY: 'certainty',
    RESULTS: 'results',
  },
  rn = { OPTIONS: 'options' },
  Jl = (g, _, c, R, S) => {
    let C = g.points;
    return (
      g.helpsAnimals && (C *= _),
      g.helpsFutureHumans && (C *= c),
      (C *= Math.pow(g.scaleFactor, R)),
      g.isSpeculative && (C *= S),
      C
    );
  },
  tc = (g, _, c, R) => {
    const S = {};
    Object.entries(Gl).forEach(([L, M]) => {
      let j = 0;
      (Object.entries(g).forEach(([G, D]) => {
        Object.entries(_).forEach(([B, E]) => {
          Object.entries(c).forEach(([H, Y]) => {
            Object.entries(R).forEach(([Q, A]) => {
              const q = Kl[G],
                te = Yl[B],
                ie = ql[H],
                X = Xl[Q],
                ne = (D / 100) * (E / 100) * (Y / 100) * (A / 100),
                W = Jl(M, q, te, ie, X);
              j += ne * W;
            });
          });
        });
      }),
        (S[L] = j));
    });
    const C = Object.keys(S).reduce((L, M) => (S[L] > S[M] ? L : M));
    return {
      globalHealth: C === 'globalHealth' ? 100 : 0,
      animalWelfare: C === 'animalWelfare' ? 100 : 0,
      gcr: C === 'gcr' ? 100 : 0,
      evs: S,
    };
  },
  nc = (g, _, c, R) => {
    const S = { globalHealth: 0, animalWelfare: 0, gcr: 0 };
    return (
      Object.entries(g).forEach(([C, L]) => {
        Object.entries(_).forEach(([M, j]) => {
          Object.entries(c).forEach(([G, D]) => {
            Object.entries(R).forEach(([B, E]) => {
              const H = (L / 100) * (j / 100) * (D / 100) * (E / 100),
                Y = Kl[C],
                Q = Yl[M],
                A = ql[G],
                q = Xl[B],
                te = {};
              Object.entries(Gl).forEach(([W, se]) => {
                te[W] = Jl(se, Y, Q, A, q);
              });
              const ie = Math.max(...Object.values(te)),
                X = Object.keys(te).filter((W) => Math.abs(te[W] - ie) < 1e-4),
                ne = H / X.length;
              X.forEach((W) => {
                S[W] += ne;
              });
            });
          });
        });
      }),
      { globalHealth: S.globalHealth * 100, animalWelfare: S.animalWelfare * 100, gcr: S.gcr * 100 }
    );
  },
  rc = (g, _, c, R) => {
    const S = { globalHealth: 0, animalWelfare: 0, gcr: 0 };
    return (
      Object.entries(g).forEach(([C, L]) => {
        Object.entries(_).forEach(([M, j]) => {
          Object.entries(c).forEach(([G, D]) => {
            Object.entries(R).forEach(([B, E]) => {
              const H = (L / 100) * (j / 100) * (D / 100) * (E / 100),
                Y = Kl[C],
                Q = Yl[M],
                A = ql[G],
                q = Xl[B],
                te = {};
              Object.entries(Gl).forEach(([W, se]) => {
                te[W] = Jl(se, Y, Q, A, q);
              });
              const ie = Math.max(...Object.values(te)),
                X = Object.keys(te).filter((W) => Math.abs(te[W] - ie) < 1e-4),
                ne = (H * 100) / X.length;
              X.forEach((W) => {
                S[W] += ne;
              });
            });
          });
        });
      }),
      { globalHealth: S.globalHealth, animalWelfare: S.animalWelfare, gcr: S.gcr }
    );
  },
  lc = (g, _, c, R) => {
    const S = [
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
    let C = S[0],
      L = -1 / 0;
    for (const M of S) {
      let j = 1 / 0;
      (Object.entries(g).forEach(([G, D]) => {
        Object.entries(_).forEach(([B, E]) => {
          Object.entries(c).forEach(([H, Y]) => {
            Object.entries(R).forEach(([Q, A]) => {
              if ((D / 100) * (E / 100) * (Y / 100) * (A / 100) < 0.001) return;
              const te = Kl[G],
                ie = Yl[B],
                X = ql[H],
                ne = Xl[Q];
              let W = 0;
              (Object.entries(Gl).forEach(([se, Le]) => {
                const Be = Jl(Le, te, ie, X, ne);
                W += Be * (M[se] / 100);
              }),
                (j = Math.min(j, W)));
            });
          });
        });
      }),
        j > L && ((L = j), (C = { ...M })));
    }
    return { globalHealth: C.globalHealth, animalWelfare: C.animalWelfare, gcr: C.gcr };
  },
  zr = (g, _, c, R = null, S = null) => {
    const C = S ? c[S] : 0,
      L = 100 - C;
    _ = Math.max(0, Math.min(L, _));
    const M = R || c,
      j = Object.keys(c).filter((E) => E !== g && E !== S),
      G = j.reduce((E, H) => E + M[H], 0),
      D = 100 - _ - C,
      B = { [g]: _ };
    if ((S && (B[S] = c[S]), G === 0)) {
      const E = Math.floor(D / j.length);
      let H = D - E * j.length;
      j.forEach((Y, Q) => {
        B[Y] = E + (Q < H ? 1 : 0);
      });
    } else {
      let E = 0;
      j.forEach((H, Y) => {
        if (Y === j.length - 1) B[H] = Math.max(0, D - E);
        else {
          const Q = M[H] / G,
            A = D * Q;
          ((B[H] = Math.max(0, A)), (E += B[H]));
        }
      });
    }
    return B;
  },
  ac = (g) => {
    const _ = Object.keys(g),
      c = {};
    let R = 0;
    return (
      _.slice(0, -1).forEach((S) => {
        ((c[S] = Math.round(g[S])), (R += c[S]));
      }),
      (c[_[_.length - 1]] = 100 - R),
      c
    );
  },
  mp = '_container_9yo3m_3',
  hp = '_categoryLabel_9yo3m_8',
  vp = '_heading_9yo3m_16',
  yp = '_instructions_9yo3m_23',
  gp = '_buttonRow_9yo3m_30',
  Or = { container: mp, categoryLabel: hp, heading: vp, instructions: yp, buttonRow: gp },
  Vl = ({
    categoryLabel: g,
    categoryColor: _,
    questionNumber: c,
    progressPercentage: R,
    heading: S,
    instructionsOptions: C,
    instructionsSliders: L,
    options: M,
    credences: j,
    setCredences: G,
    inputMode: D,
    setInputMode: B,
    lockedKey: E,
    setLockedKey: H,
    onBack: Y,
    onContinue: Q,
    adjustCredences: A,
  }) =>
    p.jsxs('div', {
      className: 'screen',
      children: [
        p.jsx(oc, { subtitle: c }),
        p.jsx(Ed, { percentage: R }),
        p.jsx('main', {
          className: 'screen-main',
          children: p.jsxs('div', {
            className: Or.container,
            children: [
              p.jsx('div', { className: Or.categoryLabel, style: { color: _ }, children: g }),
              p.jsx('h2', { className: Or.heading, children: S }),
              p.jsx('p', { className: Or.instructions, children: D === 'options' ? C : L }),
              p.jsx(Dd, { mode: D, setMode: B }),
              p.jsx('div', {
                className: 'card',
                children:
                  D === 'options'
                    ? p.jsx(p.Fragment, {
                        children: M.map((q) =>
                          p.jsx(
                            Qd,
                            {
                              label: q.label,
                              description: q.description,
                              optionKey: q.key,
                              credences: j,
                              setCredences: G,
                              color: q.color,
                              setInputMode: B,
                            },
                            q.key
                          )
                        ),
                      })
                    : p.jsx(p.Fragment, {
                        children: M.map((q) =>
                          p.jsx(
                            op,
                            {
                              label: q.label,
                              description: q.description,
                              value: j[q.key],
                              onChange: (te, ie, X, ne) => {
                                const W = A(q.key, te, j, ie, ne);
                                G(X ? ac(W) : W);
                              },
                              color: q.color,
                              credences: j,
                              sliderKey: q.key,
                              lockedKey: E,
                              setLockedKey: H,
                            },
                            q.key
                          )
                        ),
                      }),
              }),
              p.jsxs('div', {
                className: Or.buttonRow,
                children: [
                  p.jsx('button', {
                    onClick: Y,
                    className: 'btn btn-secondary',
                    children: '← Back',
                  }),
                  p.jsx('button', {
                    onClick: Q,
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
  wp = '_causeBar_aav23_3',
  Sp = '_header_aav23_7',
  kp = '_name_aav23_15',
  _p = '_percentage_aav23_19',
  xp = '_changeIndicator_aav23_23',
  Cp = '_up_aav23_27',
  Ep = '_down_aav23_31',
  Np = '_barTrack_aav23_35',
  jp = '_barOriginal_aav23_43',
  Lp = '_barFill_aav23_49',
  Pp = '_barLabel_aav23_58',
  kt = {
    causeBar: wp,
    header: Sp,
    name: kp,
    percentage: _p,
    changeIndicator: xp,
    up: Cp,
    down: Ep,
    barTrack: Np,
    barOriginal: jp,
    barFill: Lp,
    barLabel: Pp,
  },
  pt = ({ name: g, percentage: _, color: c, originalPercentage: R = null, hasChanged: S = !1 }) => {
    const C = S && R !== null && _ !== R,
      L = C && _ > R;
    return p.jsxs('div', {
      className: kt.causeBar,
      children: [
        p.jsxs('div', {
          className: kt.header,
          children: [
            p.jsx('span', { className: kt.name, children: g }),
            p.jsxs('span', {
              className: kt.percentage,
              style: { color: c },
              children: [
                _.toFixed(0),
                '%',
                C &&
                  p.jsx('span', {
                    className: `${kt.changeIndicator} ${L ? kt.up : kt.down}`,
                    children: L ? '↑' : '↓',
                  }),
              ],
            }),
          ],
        }),
        p.jsxs('div', {
          className: kt.barTrack,
          children: [
            C &&
              p.jsx('div', { className: kt.barOriginal, style: { width: `${R}%`, background: c } }),
            p.jsx('div', {
              className: kt.barFill,
              style: { width: `${_}%`, background: c },
              children:
                _ > 15 && p.jsxs('span', { className: kt.barLabel, children: [_.toFixed(0), '%'] }),
            }),
          ],
        }),
      ],
    });
  },
  Tp = ({
    label: g,
    value: _,
    onChange: c,
    color: R,
    credences: S,
    sliderKey: C,
    lockedKey: L,
    setLockedKey: M,
  }) => {
    const [j, G] = me.useState(null),
      [D, B] = me.useState(!1),
      E = L === C,
      H = L && L !== C,
      Y = H ? S[L] : 0,
      Q = H ? 100 - Y : 100,
      A = H ? `calc(${Q}% + ${(50 - Q) * 0.16}px)` : null,
      q = () => {
        E || (B(!0), G({ ...S }));
      },
      te = (ne) => {
        if (E) return;
        B(!1);
        const W = parseFloat(ne.target.value);
        (c(W, j, !0, L), G(null));
      },
      ie = (ne) => {
        if (E) return;
        const W = parseFloat(ne.target.value);
        c(W, j, !1, L);
      },
      X = () => {
        M(L === C ? null : C);
      };
    return p.jsxs('div', {
      className: Re.compactSlider,
      children: [
        p.jsxs('div', {
          className: Re.header,
          children: [
            p.jsx('span', { className: Re.label, children: g }),
            p.jsxs('span', {
              className: Re.value,
              style: { color: R },
              children: [Math.round(_), '%'],
            }),
          ],
        }),
        p.jsxs('div', {
          className: Re.sliderRow,
          children: [
            p.jsxs('div', {
              className: Re.sliderContainer,
              children: [
                p.jsx('input', {
                  type: 'range',
                  min: '0',
                  max: '100',
                  step: 'any',
                  value: _,
                  onChange: ie,
                  onMouseDown: q,
                  onMouseUp: te,
                  onMouseLeave: te,
                  onTouchStart: q,
                  onTouchEnd: te,
                  'data-dragging': D,
                  disabled: E,
                  style: {
                    background: H
                      ? `linear-gradient(to right, ${R} 0%, ${R} ${_}%, rgb(51,65,85) ${_}%, rgb(51,65,85) ${A}, rgb(30,41,59) ${A}, rgb(30,41,59) 100%)`
                      : `linear-gradient(to right, ${R} 0%, ${R} ${_}%, rgb(51,65,85) ${_}%, rgb(51,65,85) 100%)`,
                    cursor: E ? 'not-allowed' : 'pointer',
                  },
                }),
                H && p.jsx('div', { className: Re.lockLimit, style: { left: A } }),
              ],
            }),
            p.jsx('button', {
              className: `${Re.lockButton} ${E ? Re.locked : ''}`,
              onClick: X,
              title: E ? 'Unlock slider' : 'Lock slider',
              type: 'button',
              children: p.jsx(uc, { size: 14 }),
            }),
          ],
        }),
      ],
    });
  },
  Op = '_editPanel_aogsc_3',
  zp = '_expanded_aogsc_11',
  Rp = '_toggleButton_aogsc_16',
  Ip = '_buttonContent_aogsc_33',
  Mp = '_icon_aogsc_39',
  Fp = '_title_aogsc_43',
  Dp = '_modifiedBadge_aogsc_48',
  Ap = '_preview_aogsc_56',
  Bp = '_chevron_aogsc_62',
  Up = '_content_aogsc_66',
  Hp = '_footer_aogsc_71',
  Wp = '_footerNote_aogsc_78',
  $p = '_resetButton_aogsc_84',
  it = {
    editPanel: Op,
    expanded: zp,
    toggleButton: Rp,
    buttonContent: Ip,
    icon: Mp,
    title: Fp,
    modifiedBadge: Dp,
    preview: Ap,
    chevron: Bp,
    content: Up,
    footer: Hp,
    footerNote: Wp,
    resetButton: $p,
  },
  Ql = ({
    title: g,
    icon: _,
    credences: c,
    setCredences: R,
    originalCredences: S,
    configs: C,
    isExpanded: L,
    onToggle: M,
    lockedKey: j,
    setLockedKey: G,
  }) => {
    const D = S && JSON.stringify(c) !== JSON.stringify(S),
      B = (E) => {
        (E.stopPropagation(), R({ ...S }));
      };
    return p.jsxs('div', {
      className: `${it.editPanel} ${L ? it.expanded : ''}`,
      children: [
        p.jsxs('button', {
          onClick: M,
          className: it.toggleButton,
          children: [
            p.jsxs('div', {
              className: it.buttonContent,
              children: [
                p.jsx('span', { className: it.icon, children: _ }),
                p.jsx('span', { className: it.title, children: g }),
                D && p.jsx('span', { className: it.modifiedBadge, children: 'modified' }),
                !L &&
                  p.jsx('span', {
                    className: it.preview,
                    children: C.map((E) => `${E.short}:${c[E.key]}%`).join(' '),
                  }),
              ],
            }),
            p.jsx('span', {
              className: it.chevron,
              children: L ? p.jsx(Td, { size: 16 }) : p.jsx(Pd, { size: 16 }),
            }),
          ],
        }),
        L &&
          p.jsxs('div', {
            className: it.content,
            children: [
              C.map((E) =>
                p.jsx(
                  Tp,
                  {
                    label: E.label,
                    value: c[E.key],
                    onChange: (H, Y, Q, A) => {
                      const q = zr(E.key, H, c, Y, A);
                      R(Q ? ac(q) : q);
                    },
                    color: E.color,
                    credences: c,
                    sliderKey: E.key,
                    lockedKey: j,
                    setLockedKey: G,
                  },
                  E.key
                )
              ),
              p.jsxs('div', {
                className: it.footer,
                children: [
                  p.jsx('span', {
                    className: it.footerNote,
                    children: 'Sliders auto-balance to 100%',
                  }),
                  D &&
                    p.jsxs('button', {
                      onClick: B,
                      className: it.resetButton,
                      children: [p.jsx(sc, { size: 10 }), ' Reset'],
                    }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  Vp = '_resultsContainer_7ijf6_3',
  Qp = '_inner_7ijf6_11',
  Gp = '_header_7ijf6_16',
  Kp = '_title_7ijf6_21',
  Yp = '_modifiedIndicator_7ijf6_27',
  qp = '_resultsGrid_7ijf6_34',
  Xp = '_resultCard_7ijf6_41',
  Jp = '_cardHeader_7ijf6_48',
  Zp = '_cardIcon_7ijf6_55',
  bp = '_maxEV_7ijf6_65',
  em = '_parliament_7ijf6_69',
  tm = '_cardTitle_7ijf6_73',
  nm = '_cardSubtitle_7ijf6_80',
  rm = '_cardFooter_7ijf6_86',
  lm = '_adjustPanel_7ijf6_94',
  om = '_adjustHeader_7ijf6_102',
  im = '_adjustTitle_7ijf6_109',
  um = '_resetAllButton_7ijf6_115',
  sm = '_panelList_7ijf6_132',
  am = '_backButtonContainer_7ijf6_138',
  cm = '_backButton_7ijf6_138',
  Z = {
    resultsContainer: Vp,
    inner: Qp,
    header: Gp,
    title: Kp,
    modifiedIndicator: Yp,
    resultsGrid: qp,
    resultCard: Xp,
    cardHeader: Jp,
    cardIcon: Zp,
    maxEV: bp,
    parliament: em,
    cardTitle: tm,
    cardSubtitle: nm,
    cardFooter: rm,
    adjustPanel: lm,
    adjustHeader: om,
    adjustTitle: im,
    resetAllButton: um,
    panelList: sm,
    backButtonContainer: am,
    backButton: cm,
  },
  fm = ({
    animalCredences: g,
    setAnimalCredences: _,
    futureCredences: c,
    setFutureCredences: R,
    scaleCredences: S,
    setScaleCredences: C,
    certaintyCredences: L,
    setCertaintyCredences: M,
    originalAnimalCredences: j,
    originalFutureCredences: G,
    originalScaleCredences: D,
    originalCertaintyCredences: B,
    animalLockedKey: E,
    setAnimalLockedKey: H,
    futureLockedKey: Y,
    setFutureLockedKey: Q,
    scaleLockedKey: A,
    setScaleLockedKey: q,
    certaintyLockedKey: te,
    setCertaintyLockedKey: ie,
    expandedPanel: X,
    setExpandedPanel: ne,
    maxEVResults: W,
    parliamentResults: se,
    mergedFavoritesResults: Le,
    maximinResults: Be,
    originalMaxEV: Ee,
    originalParliament: Pe,
    originalMergedFavorites: ke,
    originalMaximin: he,
    hasChanged: ce,
    onResetAll: We,
    onResetQuiz: Ie,
    onBack: de,
  }) => {
    var N;
    return p.jsx('div', {
      className: Z.resultsContainer,
      children: p.jsxs('div', {
        className: Z.inner,
        children: [
          p.jsx('div', {
            className: Z.header,
            children: p.jsxs('h1', {
              className: Z.title,
              children: [
                'Recommended Allocations',
                ce && p.jsx('span', { className: Z.modifiedIndicator, children: '(modified)' }),
              ],
            }),
          }),
          p.jsxs('div', {
            className: Z.resultsGrid,
            children: [
              p.jsxs('div', {
                className: Z.resultCard,
                children: [
                  p.jsxs('div', {
                    className: Z.cardHeader,
                    children: [
                      p.jsx('div', { className: `${Z.cardIcon} ${Z.maxEV}`, children: '🎯' }),
                      p.jsxs('div', {
                        children: [
                          p.jsx('h3', { className: Z.cardTitle, children: 'Max Expected Value' }),
                          p.jsx('p', { className: Z.cardSubtitle, children: '100% to highest EV' }),
                        ],
                      }),
                    ],
                  }),
                  p.jsx(pt, {
                    name: 'Global Health',
                    percentage: W.globalHealth,
                    originalPercentage: Ee == null ? void 0 : Ee.globalHealth,
                    color: 'var(--color-global-health)',
                    hasChanged: ce,
                  }),
                  p.jsx(pt, {
                    name: 'Animal Welfare',
                    percentage: W.animalWelfare,
                    originalPercentage: Ee == null ? void 0 : Ee.animalWelfare,
                    color: 'var(--color-animal-welfare)',
                    hasChanged: ce,
                  }),
                  p.jsx(pt, {
                    name: 'GCR (Future)',
                    percentage: W.gcr,
                    originalPercentage: Ee == null ? void 0 : Ee.gcr,
                    color: 'var(--color-gcr)',
                    hasChanged: ce,
                  }),
                  p.jsxs('div', {
                    className: Z.cardFooter,
                    children: [
                      'EVs: GH ',
                      W.evs.globalHealth.toFixed(0),
                      ' · AW',
                      ' ',
                      W.evs.animalWelfare.toFixed(0),
                      ' · GCR ',
                      W.evs.gcr.toFixed(0),
                    ],
                  }),
                ],
              }),
              p.jsxs('div', {
                className: Z.resultCard,
                children: [
                  p.jsxs('div', {
                    className: Z.cardHeader,
                    children: [
                      p.jsx('div', { className: `${Z.cardIcon} ${Z.parliament}`, children: '🏛️' }),
                      p.jsxs('div', {
                        children: [
                          p.jsx('h3', { className: Z.cardTitle, children: 'Variance Voting' }),
                          p.jsx('p', {
                            className: Z.cardSubtitle,
                            children: 'Weighted worldview votes',
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsx(pt, {
                    name: 'Global Health',
                    percentage: se.globalHealth,
                    originalPercentage: Pe == null ? void 0 : Pe.globalHealth,
                    color: 'var(--color-global-health)',
                    hasChanged: ce,
                  }),
                  p.jsx(pt, {
                    name: 'Animal Welfare',
                    percentage: se.animalWelfare,
                    originalPercentage: Pe == null ? void 0 : Pe.animalWelfare,
                    color: 'var(--color-animal-welfare)',
                    hasChanged: ce,
                  }),
                  p.jsx(pt, {
                    name: 'GCR (Future)',
                    percentage: se.gcr,
                    originalPercentage: Pe == null ? void 0 : Pe.gcr,
                    color: 'var(--color-gcr)',
                    hasChanged: ce,
                  }),
                  p.jsx('div', {
                    className: Z.cardFooter,
                    children: '81 worldviews vote for preferred cause',
                  }),
                ],
              }),
              p.jsxs('div', {
                className: Z.resultCard,
                children: [
                  p.jsxs('div', {
                    className: Z.cardHeader,
                    children: [
                      p.jsx('div', { className: `${Z.cardIcon} ${Z.merged}`, children: '🤝' }),
                      p.jsxs('div', {
                        children: [
                          p.jsx('h3', { className: Z.cardTitle, children: 'Merged Favorites' }),
                          p.jsx('p', {
                            className: Z.cardSubtitle,
                            children: 'Budget shares to favorites',
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsx(pt, {
                    name: 'Global Health',
                    percentage: Le.globalHealth,
                    originalPercentage: ke == null ? void 0 : ke.globalHealth,
                    color: 'var(--color-global-health)',
                    hasChanged: ce,
                  }),
                  p.jsx(pt, {
                    name: 'Animal Welfare',
                    percentage: Le.animalWelfare,
                    originalPercentage: ke == null ? void 0 : ke.animalWelfare,
                    color: 'var(--color-animal-welfare)',
                    hasChanged: ce,
                  }),
                  p.jsx(pt, {
                    name: 'GCR (Future)',
                    percentage: Le.gcr,
                    originalPercentage: ke == null ? void 0 : ke.gcr,
                    color: 'var(--color-gcr)',
                    hasChanged: ce,
                  }),
                  p.jsx('div', {
                    className: Z.cardFooter,
                    children: 'Each worldview allocates its budget share',
                  }),
                ],
              }),
              p.jsxs('div', {
                className: Z.resultCard,
                children: [
                  p.jsxs('div', {
                    className: Z.cardHeader,
                    children: [
                      p.jsx('div', { className: `${Z.cardIcon} ${Z.maximin}`, children: '⚖️' }),
                      p.jsxs('div', {
                        children: [
                          p.jsx('h3', {
                            className: Z.cardTitle,
                            children: 'Maximin (Egalitarian)',
                          }),
                          p.jsx('p', {
                            className: Z.cardSubtitle,
                            children: 'Fairest to all worldviews',
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsx(pt, {
                    name: 'Global Health',
                    percentage: Be.globalHealth,
                    originalPercentage: he == null ? void 0 : he.globalHealth,
                    color: 'var(--color-global-health)',
                    hasChanged: ce,
                  }),
                  p.jsx(pt, {
                    name: 'Animal Welfare',
                    percentage: Be.animalWelfare,
                    originalPercentage: he == null ? void 0 : he.animalWelfare,
                    color: 'var(--color-animal-welfare)',
                    hasChanged: ce,
                  }),
                  p.jsx(pt, {
                    name: 'GCR (Future)',
                    percentage: Be.gcr,
                    originalPercentage: he == null ? void 0 : he.gcr,
                    color: 'var(--color-gcr)',
                    hasChanged: ce,
                  }),
                  p.jsx('div', {
                    className: Z.cardFooter,
                    children: 'Maximizes minimum worldview utility',
                  }),
                ],
              }),
            ],
          }),
          p.jsxs('div', {
            className: Z.adjustPanel,
            children: [
              p.jsxs('div', {
                className: Z.adjustHeader,
                children: [
                  p.jsx('span', { className: Z.adjustTitle, children: '🎛️ Adjust Your Credences' }),
                  ce &&
                    p.jsxs('button', {
                      onClick: We,
                      className: Z.resetAllButton,
                      children: [p.jsx(sc, { size: 10 }), ' Reset All'],
                    }),
                ],
              }),
              p.jsxs('div', {
                className: Z.panelList,
                children: [
                  p.jsx(Ql, {
                    title: 'Animal Values',
                    icon: '🐾',
                    credences: g,
                    setCredences: _,
                    originalCredences: j,
                    configs: cp,
                    isExpanded: X === 'animals',
                    onToggle: () => ne(X === 'animals' ? null : 'animals'),
                    lockedKey: E,
                    setLockedKey: H,
                  }),
                  p.jsx(Ql, {
                    title: 'Future Values',
                    icon: '⏳',
                    credences: c,
                    setCredences: R,
                    originalCredences: G,
                    configs: fp,
                    isExpanded: X === 'future',
                    onToggle: () => ne(X === 'future' ? null : 'future'),
                    lockedKey: Y,
                    setLockedKey: Q,
                  }),
                  p.jsx(Ql, {
                    title: 'Scale Sensitivity',
                    icon: '📊',
                    credences: S,
                    setCredences: C,
                    originalCredences: D,
                    configs: dp,
                    isExpanded: X === 'scale',
                    onToggle: () => ne(X === 'scale' ? null : 'scale'),
                    lockedKey: A,
                    setLockedKey: q,
                  }),
                  p.jsx(Ql, {
                    title: 'Evidence Preference',
                    icon: '🔬',
                    credences: L,
                    setCredences: M,
                    originalCredences: B,
                    configs: pp,
                    isExpanded: X === 'certainty',
                    onToggle: () => ne(X === 'certainty' ? null : 'certainty'),
                    lockedKey: te,
                    setLockedKey: ie,
                  }),
                ],
              }),
            ],
          }),
          p.jsxs('div', {
            className: Z.backButtonContainer,
            children: [
              p.jsx('button', { onClick: de, className: Z.backButton, children: '← Back to Quiz' }),
              (N = lp.ui) == null ? void 0 : N.resetButton,
            ],
          }),
        ],
      }),
    });
  },
  dm = () => {
    const [g, _] = me.useState(Ae.WELCOME),
      [c, R] = me.useState({ ...nn }),
      [S, C] = me.useState({ ...nn }),
      [L, M] = me.useState({ ...nn }),
      [j, G] = me.useState({ ...nn }),
      [D, B] = me.useState(null),
      [E, H] = me.useState(null),
      [Y, Q] = me.useState(null),
      [A, q] = me.useState(null),
      [te, ie] = me.useState(null),
      [X, ne] = me.useState(rn.OPTIONS),
      [W, se] = me.useState(rn.OPTIONS),
      [Le, Be] = me.useState(rn.OPTIONS),
      [Ee, Pe] = me.useState(rn.OPTIONS),
      [ke, he] = me.useState(null),
      [ce, We] = me.useState(null),
      [Ie, de] = me.useState(null),
      [N, U] = me.useState(null),
      T = tc(c, S, L, j),
      f = nc(c, S, L, j),
      v = rc(c, S, L, j),
      J = lc(c, S, L, j),
      b = D ? tc(D, E, Y, A) : null,
      re = D ? nc(D, E, Y, A) : null,
      le = D ? rc(D, E, Y, A) : null,
      pe = D ? lc(D, E, Y, A) : null,
      ae =
        D &&
        (JSON.stringify(c) !== JSON.stringify(D) ||
          JSON.stringify(S) !== JSON.stringify(E) ||
          JSON.stringify(L) !== JSON.stringify(Y) ||
          JSON.stringify(j) !== JSON.stringify(A)),
      ve = () => {
        (R({ ...D }), C({ ...E }), M({ ...Y }), G({ ...A }));
      },
      Ke = () => {
        (R({ ...nn }),
          C({ ...nn }),
          M({ ...nn }),
          G({ ...nn }),
          B(null),
          H(null),
          Q(null),
          q(null),
          ne(rn.OPTIONS),
          se(rn.OPTIONS),
          Be(rn.OPTIONS),
          Pe(rn.OPTIONS),
          he(null),
          We(null),
          de(null),
          U(null),
          ie(null),
          _(Ae.WELCOME));
      },
      wn = () => {
        (D || (B({ ...c }), H({ ...S }), Q({ ...L }), q({ ...j })), _(Ae.RESULTS));
      };
    return g === Ae.WELCOME
      ? p.jsx(Cd, { onStart: () => _(Ae.ANIMALS) })
      : g === Ae.ANIMALS
        ? p.jsx(Vl, {
            categoryLabel: 'Moral Weights',
            categoryColor: '#81B29A',
            questionNumber: 'Question 1 of 4',
            progressPercentage: 25,
            heading: 'How do you value animal welfare relative to human welfare?',
            instructionsOptions:
              'Choose the view that best represents your position, or use "Custom Mix" to split your credence.',
            instructionsSliders:
              'Distribute your credence (confidence) across these views. Sliders auto-balance to 100%.',
            options: ip,
            credences: c,
            setCredences: R,
            inputMode: X,
            setInputMode: ne,
            lockedKey: ke,
            setLockedKey: he,
            onBack: () => _(Ae.WELCOME),
            onContinue: () => _(Ae.FUTURE),
            adjustCredences: zr,
          })
        : g === Ae.FUTURE
          ? p.jsx(Vl, {
              categoryLabel: 'Time Preference',
              categoryColor: '#81B29A',
              questionNumber: 'Question 2 of 4',
              progressPercentage: 50,
              heading: 'How do you value future human welfare relative to current human welfare?',
              instructionsOptions:
                'Choose the view that best represents your position, or use "Custom Mix" to split your credence.',
              instructionsSliders:
                'Distribute your credence across these views. Sliders auto-balance to 100%.',
              options: up,
              credences: S,
              setCredences: C,
              inputMode: W,
              setInputMode: se,
              lockedKey: ce,
              setLockedKey: We,
              onBack: () => _(Ae.ANIMALS),
              onContinue: () => _(Ae.SCALE),
              adjustCredences: zr,
            })
          : g === Ae.SCALE
            ? p.jsx(Vl, {
                categoryLabel: 'Scale Sensitivity',
                categoryColor: '#98C1D9',
                questionNumber: 'Question 3 of 4',
                progressPercentage: 75,
                heading: 'How much does the scale of impact matter?',
                instructionsOptions:
                  'Choose the view that best represents your position, or use "Custom Mix" to split your credence.',
                instructionsSliders:
                  'Distribute your credence across these views. Sliders auto-balance to 100%.',
                options: sp,
                credences: L,
                setCredences: M,
                inputMode: Le,
                setInputMode: Be,
                lockedKey: Ie,
                setLockedKey: de,
                onBack: () => _(Ae.FUTURE),
                onContinue: () => _(Ae.CERTAINTY),
                adjustCredences: zr,
              })
            : g === Ae.CERTAINTY
              ? p.jsx(Vl, {
                  categoryLabel: 'Evidence Preference',
                  categoryColor: '#E07A5F',
                  questionNumber: 'Question 4 of 4',
                  progressPercentage: 100,
                  heading: 'How much do you value proven interventions over speculative ones?',
                  instructionsOptions:
                    'Choose the view that best represents your position, or use "Custom Mix" to split your credence.',
                  instructionsSliders:
                    'Distribute your credence across these views. Sliders auto-balance to 100%.',
                  options: ap,
                  credences: j,
                  setCredences: G,
                  inputMode: Ee,
                  setInputMode: Pe,
                  lockedKey: N,
                  setLockedKey: U,
                  onBack: () => _(Ae.SCALE),
                  onContinue: wn,
                  adjustCredences: zr,
                })
              : g === Ae.RESULTS
                ? p.jsx(fm, {
                    animalCredences: c,
                    setAnimalCredences: R,
                    futureCredences: S,
                    setFutureCredences: C,
                    scaleCredences: L,
                    setScaleCredences: M,
                    certaintyCredences: j,
                    setCertaintyCredences: G,
                    originalAnimalCredences: D,
                    originalFutureCredences: E,
                    originalScaleCredences: Y,
                    originalCertaintyCredences: A,
                    animalLockedKey: ke,
                    setAnimalLockedKey: he,
                    futureLockedKey: ce,
                    setFutureLockedKey: We,
                    scaleLockedKey: Ie,
                    setScaleLockedKey: de,
                    certaintyLockedKey: N,
                    setCertaintyLockedKey: U,
                    expandedPanel: te,
                    setExpandedPanel: ie,
                    maxEVResults: T,
                    parliamentResults: f,
                    mergedFavoritesResults: v,
                    maximinResults: J,
                    originalMaxEV: b,
                    originalParliament: re,
                    originalMergedFavorites: le,
                    originalMaximin: pe,
                    hasChanged: ae,
                    onResetAll: ve,
                    onResetQuiz: Ke,
                    onBack: () => _(Ae.CERTAINTY),
                  })
                : null;
  };
function pm() {
  return p.jsx(dm, {});
}
hd.createRoot(document.getElementById('root')).render(
  p.jsx(me.StrictMode, { children: p.jsx(pm, {}) })
);
