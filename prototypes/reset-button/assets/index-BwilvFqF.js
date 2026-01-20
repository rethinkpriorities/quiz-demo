(function () {
  const _ = document.createElement('link').relList;
  if (_ && _.supports && _.supports('modulepreload')) return;
  for (const k of document.querySelectorAll('link[rel="modulepreload"]')) M(k);
  new MutationObserver((k) => {
    for (const E of k)
      if (E.type === 'childList')
        for (const O of E.addedNodes) O.tagName === 'LINK' && O.rel === 'modulepreload' && M(O);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(k) {
    const E = {};
    return (
      k.integrity && (E.integrity = k.integrity),
      k.referrerPolicy && (E.referrerPolicy = k.referrerPolicy),
      k.crossOrigin === 'use-credentials'
        ? (E.credentials = 'include')
        : k.crossOrigin === 'anonymous'
          ? (E.credentials = 'omit')
          : (E.credentials = 'same-origin'),
      E
    );
  }
  function M(k) {
    if (k.ep) return;
    k.ep = !0;
    const E = c(k);
    fetch(k.href, E);
  }
})();
var Gi = { exports: {} },
  Tr = {},
  Ki = { exports: {} },
  b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ga;
function id() {
  if (Ga) return b;
  Ga = 1;
  var g = Symbol.for('react.element'),
    _ = Symbol.for('react.portal'),
    c = Symbol.for('react.fragment'),
    M = Symbol.for('react.strict_mode'),
    k = Symbol.for('react.profiler'),
    E = Symbol.for('react.provider'),
    O = Symbol.for('react.context'),
    D = Symbol.for('react.forward_ref'),
    N = Symbol.for('react.suspense'),
    A = Symbol.for('react.memo'),
    j = Symbol.for('react.lazy'),
    W = Symbol.iterator;
  function R(f) {
    return f === null || typeof f != 'object'
      ? null
      : ((f = (W && f[W]) || f['@@iterator']), typeof f == 'function' ? f : null);
  }
  var Y = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    K = Object.assign,
    B = {};
  function V(f, v, X) {
    ((this.props = f), (this.context = v), (this.refs = B), (this.updater = X || Y));
  }
  ((V.prototype.isReactComponent = {}),
    (V.prototype.setState = function (f, v) {
      if (typeof f != 'object' && typeof f != 'function' && f != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, f, v, 'setState');
    }),
    (V.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, 'forceUpdate');
    }));
  function fe() {}
  fe.prototype = V.prototype;
  function J(f, v, X) {
    ((this.props = f), (this.context = v), (this.refs = B), (this.updater = X || Y));
  }
  var te = (J.prototype = new fe());
  ((te.constructor = J), K(te, V.prototype), (te.isPureReactComponent = !0));
  var Z = Array.isArray,
    re = Object.prototype.hasOwnProperty,
    Q = { current: null },
    de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function je(f, v, X) {
    var ee,
      le = {},
      oe = null,
      ae = null;
    if (v != null)
      for (ee in (v.ref !== void 0 && (ae = v.ref), v.key !== void 0 && (oe = '' + v.key), v))
        re.call(v, ee) && !de.hasOwnProperty(ee) && (le[ee] = v[ee]);
    var ue = arguments.length - 2;
    if (ue === 1) le.children = X;
    else if (1 < ue) {
      for (var ve = Array(ue), Je = 0; Je < ue; Je++) ve[Je] = arguments[Je + 2];
      le.children = ve;
    }
    if (f && f.defaultProps)
      for (ee in ((ue = f.defaultProps), ue)) le[ee] === void 0 && (le[ee] = ue[ee]);
    return { $$typeof: g, type: f, key: oe, ref: ae, props: le, _owner: Q.current };
  }
  function Be(f, v) {
    return { $$typeof: g, type: f.type, key: v, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function qe(f) {
    return typeof f == 'object' && f !== null && f.$$typeof === g;
  }
  function St(f) {
    var v = { '=': '=0', ':': '=2' };
    return (
      '$' +
      f.replace(/[=:]/g, function (X) {
        return v[X];
      })
    );
  }
  var rt = /\/+/g;
  function Ue(f, v) {
    return typeof f == 'object' && f !== null && f.key != null ? St('' + f.key) : v.toString(36);
  }
  function Xe(f, v, X, ee, le) {
    var oe = typeof f;
    (oe === 'undefined' || oe === 'boolean') && (f = null);
    var ae = !1;
    if (f === null) ae = !0;
    else
      switch (oe) {
        case 'string':
        case 'number':
          ae = !0;
          break;
        case 'object':
          switch (f.$$typeof) {
            case g:
            case _:
              ae = !0;
          }
      }
    if (ae)
      return (
        (ae = f),
        (le = le(ae)),
        (f = ee === '' ? '.' + Ue(ae, 0) : ee),
        Z(le)
          ? ((X = ''),
            f != null && (X = f.replace(rt, '$&/') + '/'),
            Xe(le, v, X, '', function (Je) {
              return Je;
            }))
          : le != null &&
            (qe(le) &&
              (le = Be(
                le,
                X +
                  (!le.key || (ae && ae.key === le.key)
                    ? ''
                    : ('' + le.key).replace(rt, '$&/') + '/') +
                  f
              )),
            v.push(le)),
        1
      );
    if (((ae = 0), (ee = ee === '' ? '.' : ee + ':'), Z(f)))
      for (var ue = 0; ue < f.length; ue++) {
        oe = f[ue];
        var ve = ee + Ue(oe, ue);
        ae += Xe(oe, v, X, ve, le);
      }
    else if (((ve = R(f)), typeof ve == 'function'))
      for (f = ve.call(f), ue = 0; !(oe = f.next()).done; )
        ((oe = oe.value), (ve = ee + Ue(oe, ue++)), (ae += Xe(oe, v, X, ve, le)));
    else if (oe === 'object')
      throw (
        (v = String(f)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (v === '[object Object]' ? 'object with keys {' + Object.keys(f).join(', ') + '}' : v) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return ae;
  }
  function lt(f, v, X) {
    if (f == null) return f;
    var ee = [],
      le = 0;
    return (
      Xe(f, ee, '', '', function (oe) {
        return v.call(X, oe, le++);
      }),
      ee
    );
  }
  function Ie(f) {
    if (f._status === -1) {
      var v = f._result;
      ((v = v()),
        v.then(
          function (X) {
            (f._status === 0 || f._status === -1) && ((f._status = 1), (f._result = X));
          },
          function (X) {
            (f._status === 0 || f._status === -1) && ((f._status = 2), (f._result = X));
          }
        ),
        f._status === -1 && ((f._status = 0), (f._result = v)));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var he = { current: null },
    C = { transition: null },
    $ = { ReactCurrentDispatcher: he, ReactCurrentBatchConfig: C, ReactCurrentOwner: Q };
  function T() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (b.Children = {
      map: lt,
      forEach: function (f, v, X) {
        lt(
          f,
          function () {
            v.apply(this, arguments);
          },
          X
        );
      },
      count: function (f) {
        var v = 0;
        return (
          lt(f, function () {
            v++;
          }),
          v
        );
      },
      toArray: function (f) {
        return (
          lt(f, function (v) {
            return v;
          }) || []
        );
      },
      only: function (f) {
        if (!qe(f))
          throw Error('React.Children.only expected to receive a single React element child.');
        return f;
      },
    }),
    (b.Component = V),
    (b.Fragment = c),
    (b.Profiler = k),
    (b.PureComponent = J),
    (b.StrictMode = M),
    (b.Suspense = N),
    (b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $),
    (b.act = T),
    (b.cloneElement = function (f, v, X) {
      if (f == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + f + '.'
        );
      var ee = K({}, f.props),
        le = f.key,
        oe = f.ref,
        ae = f._owner;
      if (v != null) {
        if (
          (v.ref !== void 0 && ((oe = v.ref), (ae = Q.current)),
          v.key !== void 0 && (le = '' + v.key),
          f.type && f.type.defaultProps)
        )
          var ue = f.type.defaultProps;
        for (ve in v)
          re.call(v, ve) &&
            !de.hasOwnProperty(ve) &&
            (ee[ve] = v[ve] === void 0 && ue !== void 0 ? ue[ve] : v[ve]);
      }
      var ve = arguments.length - 2;
      if (ve === 1) ee.children = X;
      else if (1 < ve) {
        ue = Array(ve);
        for (var Je = 0; Je < ve; Je++) ue[Je] = arguments[Je + 2];
        ee.children = ue;
      }
      return { $$typeof: g, type: f.type, key: le, ref: oe, props: ee, _owner: ae };
    }),
    (b.createContext = function (f) {
      return (
        (f = {
          $$typeof: O,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (f.Provider = { $$typeof: E, _context: f }),
        (f.Consumer = f)
      );
    }),
    (b.createElement = je),
    (b.createFactory = function (f) {
      var v = je.bind(null, f);
      return ((v.type = f), v);
    }),
    (b.createRef = function () {
      return { current: null };
    }),
    (b.forwardRef = function (f) {
      return { $$typeof: D, render: f };
    }),
    (b.isValidElement = qe),
    (b.lazy = function (f) {
      return { $$typeof: j, _payload: { _status: -1, _result: f }, _init: Ie };
    }),
    (b.memo = function (f, v) {
      return { $$typeof: A, type: f, compare: v === void 0 ? null : v };
    }),
    (b.startTransition = function (f) {
      var v = C.transition;
      C.transition = {};
      try {
        f();
      } finally {
        C.transition = v;
      }
    }),
    (b.unstable_act = T),
    (b.useCallback = function (f, v) {
      return he.current.useCallback(f, v);
    }),
    (b.useContext = function (f) {
      return he.current.useContext(f);
    }),
    (b.useDebugValue = function () {}),
    (b.useDeferredValue = function (f) {
      return he.current.useDeferredValue(f);
    }),
    (b.useEffect = function (f, v) {
      return he.current.useEffect(f, v);
    }),
    (b.useId = function () {
      return he.current.useId();
    }),
    (b.useImperativeHandle = function (f, v, X) {
      return he.current.useImperativeHandle(f, v, X);
    }),
    (b.useInsertionEffect = function (f, v) {
      return he.current.useInsertionEffect(f, v);
    }),
    (b.useLayoutEffect = function (f, v) {
      return he.current.useLayoutEffect(f, v);
    }),
    (b.useMemo = function (f, v) {
      return he.current.useMemo(f, v);
    }),
    (b.useReducer = function (f, v, X) {
      return he.current.useReducer(f, v, X);
    }),
    (b.useRef = function (f) {
      return he.current.useRef(f);
    }),
    (b.useState = function (f) {
      return he.current.useState(f);
    }),
    (b.useSyncExternalStore = function (f, v, X) {
      return he.current.useSyncExternalStore(f, v, X);
    }),
    (b.useTransition = function () {
      return he.current.useTransition();
    }),
    (b.version = '18.3.1'),
    b
  );
}
var Ka;
function Ji() {
  return (Ka || ((Ka = 1), (Ki.exports = id())), Ki.exports);
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
function ud() {
  if (Ya) return Tr;
  Ya = 1;
  var g = Ji(),
    _ = Symbol.for('react.element'),
    c = Symbol.for('react.fragment'),
    M = Object.prototype.hasOwnProperty,
    k = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(D, N, A) {
    var j,
      W = {},
      R = null,
      Y = null;
    (A !== void 0 && (R = '' + A),
      N.key !== void 0 && (R = '' + N.key),
      N.ref !== void 0 && (Y = N.ref));
    for (j in N) M.call(N, j) && !E.hasOwnProperty(j) && (W[j] = N[j]);
    if (D && D.defaultProps) for (j in ((N = D.defaultProps), N)) W[j] === void 0 && (W[j] = N[j]);
    return { $$typeof: _, type: D, key: R, ref: Y, props: W, _owner: k.current };
  }
  return ((Tr.Fragment = c), (Tr.jsx = O), (Tr.jsxs = O), Tr);
}
var qa;
function sd() {
  return (qa || ((qa = 1), (Gi.exports = ud())), Gi.exports);
}
var m = sd(),
  ge = Ji(),
  Wl = {},
  Yi = { exports: {} },
  Ye = {},
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
function ad() {
  return (
    Xa ||
      ((Xa = 1),
      (function (g) {
        function _(C, $) {
          var T = C.length;
          C.push($);
          e: for (; 0 < T; ) {
            var f = (T - 1) >>> 1,
              v = C[f];
            if (0 < k(v, $)) ((C[f] = $), (C[T] = v), (T = f));
            else break e;
          }
        }
        function c(C) {
          return C.length === 0 ? null : C[0];
        }
        function M(C) {
          if (C.length === 0) return null;
          var $ = C[0],
            T = C.pop();
          if (T !== $) {
            C[0] = T;
            e: for (var f = 0, v = C.length, X = v >>> 1; f < X; ) {
              var ee = 2 * (f + 1) - 1,
                le = C[ee],
                oe = ee + 1,
                ae = C[oe];
              if (0 > k(le, T))
                oe < v && 0 > k(ae, le)
                  ? ((C[f] = ae), (C[oe] = T), (f = oe))
                  : ((C[f] = le), (C[ee] = T), (f = ee));
              else if (oe < v && 0 > k(ae, T)) ((C[f] = ae), (C[oe] = T), (f = oe));
              else break e;
            }
          }
          return $;
        }
        function k(C, $) {
          var T = C.sortIndex - $.sortIndex;
          return T !== 0 ? T : C.id - $.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var E = performance;
          g.unstable_now = function () {
            return E.now();
          };
        } else {
          var O = Date,
            D = O.now();
          g.unstable_now = function () {
            return O.now() - D;
          };
        }
        var N = [],
          A = [],
          j = 1,
          W = null,
          R = 3,
          Y = !1,
          K = !1,
          B = !1,
          V = typeof setTimeout == 'function' ? setTimeout : null,
          fe = typeof clearTimeout == 'function' ? clearTimeout : null,
          J = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function te(C) {
          for (var $ = c(A); $ !== null; ) {
            if ($.callback === null) M(A);
            else if ($.startTime <= C) (M(A), ($.sortIndex = $.expirationTime), _(N, $));
            else break;
            $ = c(A);
          }
        }
        function Z(C) {
          if (((B = !1), te(C), !K))
            if (c(N) !== null) ((K = !0), Ie(re));
            else {
              var $ = c(A);
              $ !== null && he(Z, $.startTime - C);
            }
        }
        function re(C, $) {
          ((K = !1), B && ((B = !1), fe(je), (je = -1)), (Y = !0));
          var T = R;
          try {
            for (te($), W = c(N); W !== null && (!(W.expirationTime > $) || (C && !St())); ) {
              var f = W.callback;
              if (typeof f == 'function') {
                ((W.callback = null), (R = W.priorityLevel));
                var v = f(W.expirationTime <= $);
                (($ = g.unstable_now()),
                  typeof v == 'function' ? (W.callback = v) : W === c(N) && M(N),
                  te($));
              } else M(N);
              W = c(N);
            }
            if (W !== null) var X = !0;
            else {
              var ee = c(A);
              (ee !== null && he(Z, ee.startTime - $), (X = !1));
            }
            return X;
          } finally {
            ((W = null), (R = T), (Y = !1));
          }
        }
        var Q = !1,
          de = null,
          je = -1,
          Be = 5,
          qe = -1;
        function St() {
          return !(g.unstable_now() - qe < Be);
        }
        function rt() {
          if (de !== null) {
            var C = g.unstable_now();
            qe = C;
            var $ = !0;
            try {
              $ = de(!0, C);
            } finally {
              $ ? Ue() : ((Q = !1), (de = null));
            }
          } else Q = !1;
        }
        var Ue;
        if (typeof J == 'function')
          Ue = function () {
            J(rt);
          };
        else if (typeof MessageChannel < 'u') {
          var Xe = new MessageChannel(),
            lt = Xe.port2;
          ((Xe.port1.onmessage = rt),
            (Ue = function () {
              lt.postMessage(null);
            }));
        } else
          Ue = function () {
            V(rt, 0);
          };
        function Ie(C) {
          ((de = C), Q || ((Q = !0), Ue()));
        }
        function he(C, $) {
          je = V(function () {
            C(g.unstable_now());
          }, $);
        }
        ((g.unstable_IdlePriority = 5),
          (g.unstable_ImmediatePriority = 1),
          (g.unstable_LowPriority = 4),
          (g.unstable_NormalPriority = 3),
          (g.unstable_Profiling = null),
          (g.unstable_UserBlockingPriority = 2),
          (g.unstable_cancelCallback = function (C) {
            C.callback = null;
          }),
          (g.unstable_continueExecution = function () {
            K || Y || ((K = !0), Ie(re));
          }),
          (g.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Be = 0 < C ? Math.floor(1e3 / C) : 5);
          }),
          (g.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (g.unstable_getFirstCallbackNode = function () {
            return c(N);
          }),
          (g.unstable_next = function (C) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var $ = 3;
                break;
              default:
                $ = R;
            }
            var T = R;
            R = $;
            try {
              return C();
            } finally {
              R = T;
            }
          }),
          (g.unstable_pauseExecution = function () {}),
          (g.unstable_requestPaint = function () {}),
          (g.unstable_runWithPriority = function (C, $) {
            switch (C) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                C = 3;
            }
            var T = R;
            R = C;
            try {
              return $();
            } finally {
              R = T;
            }
          }),
          (g.unstable_scheduleCallback = function (C, $, T) {
            var f = g.unstable_now();
            switch (
              (typeof T == 'object' && T !== null
                ? ((T = T.delay), (T = typeof T == 'number' && 0 < T ? f + T : f))
                : (T = f),
              C)
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
              (C = {
                id: j++,
                callback: $,
                priorityLevel: C,
                startTime: T,
                expirationTime: v,
                sortIndex: -1,
              }),
              T > f
                ? ((C.sortIndex = T),
                  _(A, C),
                  c(N) === null && C === c(A) && (B ? (fe(je), (je = -1)) : (B = !0), he(Z, T - f)))
                : ((C.sortIndex = v), _(N, C), K || Y || ((K = !0), Ie(re))),
              C
            );
          }),
          (g.unstable_shouldYield = St),
          (g.unstable_wrapCallback = function (C) {
            var $ = R;
            return function () {
              var T = R;
              R = $;
              try {
                return C.apply(this, arguments);
              } finally {
                R = T;
              }
            };
          }));
      })(Xi)),
    Xi
  );
}
var Ja;
function cd() {
  return (Ja || ((Ja = 1), (qi.exports = ad())), qi.exports);
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
function fd() {
  if (Za) return Ye;
  Za = 1;
  var g = Ji(),
    _ = cd();
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
  var M = new Set(),
    k = {};
  function E(e, t) {
    (O(e, t), O(e + 'Capture', t));
  }
  function O(e, t) {
    for (k[e] = t, e = 0; e < t.length; e++) M.add(t[e]);
  }
  var D = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    N = Object.prototype.hasOwnProperty,
    A =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    j = {},
    W = {};
  function R(e) {
    return N.call(W, e) ? !0 : N.call(j, e) ? !1 : A.test(e) ? (W[e] = !0) : ((j[e] = !0), !1);
  }
  function Y(e, t, n, r) {
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
  function K(e, t, n, r) {
    if (t === null || typeof t > 'u' || Y(e, t, n, r)) return !0;
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
  function B(e, t, n, r, l, o, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i));
  }
  var V = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      V[e] = new B(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      V[t] = new B(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      V[e] = new B(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        V[e] = new B(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        V[e] = new B(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      V[e] = new B(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      V[e] = new B(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      V[e] = new B(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      V[e] = new B(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var fe = /[\-:]([a-z])/g;
  function J(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(fe, J);
      V[t] = new B(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(fe, J);
        V[t] = new B(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(fe, J);
      V[t] = new B(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      V[e] = new B(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (V.xlinkHref = new B('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      V[e] = new B(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function te(e, t, n, r) {
    var l = V.hasOwnProperty(t) ? V[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (K(t, n, l, r) && (n = null),
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
  var Z = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    re = Symbol.for('react.element'),
    Q = Symbol.for('react.portal'),
    de = Symbol.for('react.fragment'),
    je = Symbol.for('react.strict_mode'),
    Be = Symbol.for('react.profiler'),
    qe = Symbol.for('react.provider'),
    St = Symbol.for('react.context'),
    rt = Symbol.for('react.forward_ref'),
    Ue = Symbol.for('react.suspense'),
    Xe = Symbol.for('react.suspense_list'),
    lt = Symbol.for('react.memo'),
    Ie = Symbol.for('react.lazy'),
    he = Symbol.for('react.offscreen'),
    C = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (C && e[C]) || e['@@iterator']), typeof e == 'function' ? e : null);
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
  var X = !1;
  function ee(e, t) {
    if (!e || X) return '';
    X = !0;
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
      ((X = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? v(e) : '';
  }
  function le(e) {
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
        return ((e = ee(e.type, !1)), e);
      case 11:
        return ((e = ee(e.type.render, !1)), e);
      case 1:
        return ((e = ee(e.type, !0)), e);
      default:
        return '';
    }
  }
  function oe(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case de:
        return 'Fragment';
      case Q:
        return 'Portal';
      case Be:
        return 'Profiler';
      case je:
        return 'StrictMode';
      case Ue:
        return 'Suspense';
      case Xe:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case St:
          return (e.displayName || 'Context') + '.Consumer';
        case qe:
          return (e._context.displayName || 'Context') + '.Provider';
        case rt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case lt:
          return ((t = e.displayName || null), t !== null ? t : oe(e.type) || 'Memo');
        case Ie:
          ((t = e._payload), (e = e._init));
          try {
            return oe(e(t));
          } catch {}
      }
    return null;
  }
  function ae(e) {
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
        return t === je ? 'StrictMode' : 'Mode';
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
  function ue(e) {
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
  function Je(e) {
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
  function zr(e) {
    e._valueTracker || (e._valueTracker = Je(e));
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
  function Rr(e) {
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
    ((n = ue(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      }));
  }
  function eu(e, t) {
    ((t = t.checked), t != null && te(e, 'checked', t, !1));
  }
  function bl(e, t) {
    eu(e, t);
    var n = ue(t.value),
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
      : t.hasOwnProperty('defaultValue') && eo(e, t.type, ue(t.defaultValue)),
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
    (t !== 'number' || Rr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var Vn = Array.isArray;
  function wn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + ue(n), t = null, l = 0; l < e.length; l++) {
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
        if (Vn(n)) {
          if (1 < n.length) throw Error(c(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: ue(n) };
  }
  function ru(e, t) {
    var n = ue(t.value),
      r = ue(t.defaultValue);
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
  var Ir,
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
          Ir = Ir || document.createElement('div'),
            Ir.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = Ir.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Qn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Gn = {
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
    ac = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Gn).forEach(function (e) {
    ac.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gn[t] = Gn[e]));
    });
  });
  function uu(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (Gn.hasOwnProperty(e) && Gn[e])
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
  var cc = T(
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
      if (cc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
    Sn = null,
    _n = null;
  function au(e) {
    if ((e = mr(e))) {
      if (typeof uo != 'function') throw Error(c(280));
      var t = e.stateNode;
      t && ((t = rl(t)), uo(e.stateNode, e.type, t));
    }
  }
  function cu(e) {
    Sn ? (_n ? _n.push(e) : (_n = [e])) : (Sn = e);
  }
  function fu() {
    if (Sn) {
      var e = Sn,
        t = _n;
      if (((_n = Sn = null), au(e), t)) for (e = 0; e < t.length; e++) au(t[e]);
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
      ((so = !1), (Sn !== null || _n !== null) && (pu(), fu()));
    }
  }
  function Kn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = rl(n);
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
  if (D)
    try {
      var Yn = {};
      (Object.defineProperty(Yn, 'passive', {
        get: function () {
          ao = !0;
        },
      }),
        window.addEventListener('test', Yn, Yn),
        window.removeEventListener('test', Yn, Yn));
    } catch {
      ao = !1;
    }
  function fc(e, t, n, r, l, o, i, u, s) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (w) {
      this.onError(w);
    }
  }
  var qn = !1,
    Mr = null,
    Fr = !1,
    co = null,
    dc = {
      onError: function (e) {
        ((qn = !0), (Mr = e));
      },
    };
  function pc(e, t, n, r, l, o, i, u, s) {
    ((qn = !1), (Mr = null), fc.apply(dc, arguments));
  }
  function mc(e, t, n, r, l, o, i, u, s) {
    if ((pc.apply(this, arguments), qn)) {
      if (qn) {
        var h = Mr;
        ((qn = !1), (Mr = null));
      } else throw Error(c(198));
      Fr || ((Fr = !0), (co = h));
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
  function hc(e) {
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
    return ((e = hc(e)), e !== null ? gu(e) : null);
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
    vc = _.unstable_shouldYield,
    yc = _.unstable_requestPaint,
    ke = _.unstable_now,
    gc = _.unstable_getCurrentPriorityLevel,
    fo = _.unstable_ImmediatePriority,
    _u = _.unstable_UserBlockingPriority,
    Dr = _.unstable_NormalPriority,
    wc = _.unstable_LowPriority,
    ku = _.unstable_IdlePriority,
    Ar = null,
    _t = null;
  function Sc(e) {
    if (_t && typeof _t.onCommitFiberRoot == 'function')
      try {
        _t.onCommitFiberRoot(Ar, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var dt = Math.clz32 ? Math.clz32 : xc,
    _c = Math.log,
    kc = Math.LN2;
  function xc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((_c(e) / kc) | 0)) | 0);
  }
  var Br = 64,
    Ur = 4194304;
  function Xn(e) {
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
  function Hr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? (r = Xn(u)) : ((o &= i), o !== 0 && (r = Xn(o)));
    } else ((i = n & ~l), i !== 0 ? (r = Xn(i)) : o !== 0 && (r = Xn(o)));
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
        ((n = 31 - dt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
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
  function Cc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes;
      0 < o;
    ) {
      var i = 31 - dt(o),
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
    var e = Br;
    return ((Br <<= 1), (Br & 4194240) === 0 && (Br = 64), e);
  }
  function mo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Jn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - dt(t)),
      (e[t] = n));
  }
  function Nc(e, t) {
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
      var l = 31 - dt(n),
        o = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o));
    }
  }
  function ho(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - dt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var se = 0;
  function Eu(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Cu,
    vo,
    Nu,
    ju,
    Pu,
    yo = !1,
    Wr = [],
    Dt = null,
    At = null,
    Bt = null,
    Zn = new Map(),
    bn = new Map(),
    Ut = [],
    jc =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function Tu(e, t) {
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
        Zn.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        bn.delete(t.pointerId);
    }
  }
  function er(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = mr(t)), t !== null && vo(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Pc(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return ((Dt = er(Dt, e, t, n, r, l)), !0);
      case 'dragenter':
        return ((At = er(At, e, t, n, r, l)), !0);
      case 'mouseover':
        return ((Bt = er(Bt, e, t, n, r, l)), !0);
      case 'pointerover':
        var o = l.pointerId;
        return (Zn.set(o, er(Zn.get(o) || null, e, t, n, r, l)), !0);
      case 'gotpointercapture':
        return ((o = l.pointerId), bn.set(o, er(bn.get(o) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function Lu(e) {
    var t = on(e.target);
    if (t !== null) {
      var n = ln(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = hu(n)), t !== null)) {
            ((e.blockedOn = t),
              Pu(e.priority, function () {
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
  function $r(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = wo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((oo = r), n.target.dispatchEvent(r), (oo = null));
      } else return ((t = mr(n)), t !== null && vo(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Ou(e, t, n) {
    $r(e) && n.delete(t);
  }
  function Tc() {
    ((yo = !1),
      Dt !== null && $r(Dt) && (Dt = null),
      At !== null && $r(At) && (At = null),
      Bt !== null && $r(Bt) && (Bt = null),
      Zn.forEach(Ou),
      bn.forEach(Ou));
  }
  function tr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      yo || ((yo = !0), _.unstable_scheduleCallback(_.unstable_NormalPriority, Tc)));
  }
  function nr(e) {
    function t(l) {
      return tr(l, e);
    }
    if (0 < Wr.length) {
      tr(Wr[0], e);
      for (var n = 1; n < Wr.length; n++) {
        var r = Wr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Dt !== null && tr(Dt, e),
        At !== null && tr(At, e),
        Bt !== null && tr(Bt, e),
        Zn.forEach(t),
        bn.forEach(t),
        n = 0;
      n < Ut.length;
      n++
    )
      ((r = Ut[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Ut.length && ((n = Ut[0]), n.blockedOn === null); )
      (Lu(n), n.blockedOn === null && Ut.shift());
  }
  var kn = Z.ReactCurrentBatchConfig,
    Vr = !0;
  function Lc(e, t, n, r) {
    var l = se,
      o = kn.transition;
    kn.transition = null;
    try {
      ((se = 1), go(e, t, n, r));
    } finally {
      ((se = l), (kn.transition = o));
    }
  }
  function Oc(e, t, n, r) {
    var l = se,
      o = kn.transition;
    kn.transition = null;
    try {
      ((se = 4), go(e, t, n, r));
    } finally {
      ((se = l), (kn.transition = o));
    }
  }
  function go(e, t, n, r) {
    if (Vr) {
      var l = wo(e, t, n, r);
      if (l === null) (Fo(e, t, r, Qr, n), Tu(e, r));
      else if (Pc(l, e, t, n, r)) r.stopPropagation();
      else if ((Tu(e, r), t & 4 && -1 < jc.indexOf(e))) {
        for (; l !== null; ) {
          var o = mr(l);
          if (
            (o !== null && Cu(o), (o = wo(e, t, n, r)), o === null && Fo(e, t, r, Qr, n), o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Fo(e, t, r, null, n);
    }
  }
  var Qr = null;
  function wo(e, t, n, r) {
    if (((Qr = null), (e = io(r)), (e = on(e)), e !== null))
      if (((t = ln(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = hu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Qr = e), null);
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
        switch (gc()) {
          case fo:
            return 1;
          case _u:
            return 4;
          case Dr:
          case wc:
            return 16;
          case ku:
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
    Gr = null;
  function Ru() {
    if (Gr) return Gr;
    var e,
      t = So,
      n = t.length,
      r,
      l = 'value' in Ht ? Ht.value : Ht.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (Gr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Kr(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Yr() {
    return !0;
  }
  function Iu() {
    return !1;
  }
  function Ze(e) {
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
          ? Yr
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
            (this.isDefaultPrevented = Yr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Yr));
        },
        persist: function () {},
        isPersistent: Yr,
      }),
      t
    );
  }
  var xn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    _o = Ze(xn),
    rr = T({}, xn, { view: 0, detail: 0 }),
    zc = Ze(rr),
    ko,
    xo,
    lr,
    qr = T({}, rr, {
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
      getModifierState: Co,
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
          : (e !== lr &&
              (lr && e.type === 'mousemove'
                ? ((ko = e.screenX - lr.screenX), (xo = e.screenY - lr.screenY))
                : (xo = ko = 0),
              (lr = e)),
            ko);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : xo;
      },
    }),
    Mu = Ze(qr),
    Rc = T({}, qr, { dataTransfer: 0 }),
    Ic = Ze(Rc),
    Mc = T({}, rr, { relatedTarget: 0 }),
    Eo = Ze(Mc),
    Fc = T({}, xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Dc = Ze(Fc),
    Ac = T({}, xn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Bc = Ze(Ac),
    Uc = T({}, xn, { data: 0 }),
    Fu = Ze(Uc),
    Hc = {
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
    Wc = {
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
    $c = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Vc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = $c[e]) ? !!t[e] : !1;
  }
  function Co() {
    return Vc;
  }
  var Qc = T({}, rr, {
      key: function (e) {
        if (e.key) {
          var t = Hc[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Kr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Wc[e.keyCode] || 'Unidentified'
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
      getModifierState: Co,
      charCode: function (e) {
        return e.type === 'keypress' ? Kr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Kr(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Gc = Ze(Qc),
    Kc = T({}, qr, {
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
    Du = Ze(Kc),
    Yc = T({}, rr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Co,
    }),
    qc = Ze(Yc),
    Xc = T({}, xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Jc = Ze(Xc),
    Zc = T({}, qr, {
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
    bc = Ze(Zc),
    ef = [9, 13, 27, 32],
    No = D && 'CompositionEvent' in window,
    or = null;
  D && 'documentMode' in document && (or = document.documentMode);
  var tf = D && 'TextEvent' in window && !or,
    Au = D && (!No || (or && 8 < or && 11 >= or)),
    Bu = ' ',
    Uu = !1;
  function Hu(e, t) {
    switch (e) {
      case 'keyup':
        return ef.indexOf(t.keyCode) !== -1;
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
  function nf(e, t) {
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
  function rf(e, t) {
    if (En)
      return e === 'compositionend' || (!No && Hu(e, t))
        ? ((e = Ru()), (Gr = So = Ht = null), (En = !1), e)
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
  var lf = {
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
    return t === 'input' ? !!lf[e.type] : t === 'textarea';
  }
  function Vu(e, t, n, r) {
    (cu(r),
      (t = el(t, 'onChange')),
      0 < t.length &&
        ((n = new _o('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
  }
  var ir = null,
    ur = null;
  function of(e) {
    ss(e, 0);
  }
  function Xr(e) {
    var t = Tn(e);
    if (Zi(t)) return e;
  }
  function uf(e, t) {
    if (e === 'change') return t;
  }
  var Qu = !1;
  if (D) {
    var jo;
    if (D) {
      var Po = 'oninput' in document;
      if (!Po) {
        var Gu = document.createElement('div');
        (Gu.setAttribute('oninput', 'return;'), (Po = typeof Gu.oninput == 'function'));
      }
      jo = Po;
    } else jo = !1;
    Qu = jo && (!document.documentMode || 9 < document.documentMode);
  }
  function Ku() {
    ir && (ir.detachEvent('onpropertychange', Yu), (ur = ir = null));
  }
  function Yu(e) {
    if (e.propertyName === 'value' && Xr(ur)) {
      var t = [];
      (Vu(t, ur, e, io(e)), mu(of, t));
    }
  }
  function sf(e, t, n) {
    e === 'focusin'
      ? (Ku(), (ir = t), (ur = n), ir.attachEvent('onpropertychange', Yu))
      : e === 'focusout' && Ku();
  }
  function af(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Xr(ur);
  }
  function cf(e, t) {
    if (e === 'click') return Xr(t);
  }
  function ff(e, t) {
    if (e === 'input' || e === 'change') return Xr(t);
  }
  function df(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var pt = typeof Object.is == 'function' ? Object.is : df;
  function sr(e, t) {
    if (pt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!N.call(t, l) || !pt(e[l], t[l])) return !1;
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
    for (var e = window, t = Rr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Rr(e.document);
    }
    return t;
  }
  function To(e) {
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
  function pf(e) {
    var t = Zu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ju(n.ownerDocument.documentElement, n)) {
      if (r !== null && To(n)) {
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
  var mf = D && 'documentMode' in document && 11 >= document.documentMode,
    Cn = null,
    Lo = null,
    ar = null,
    Oo = !1;
  function bu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Oo ||
      Cn == null ||
      Cn !== Rr(r) ||
      ((r = Cn),
      'selectionStart' in r && To(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (ar && sr(ar, r)) ||
        ((ar = r),
        (r = el(Lo, 'onSelect')),
        0 < r.length &&
          ((t = new _o('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Cn))));
  }
  function Jr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var Nn = {
      animationend: Jr('Animation', 'AnimationEnd'),
      animationiteration: Jr('Animation', 'AnimationIteration'),
      animationstart: Jr('Animation', 'AnimationStart'),
      transitionend: Jr('Transition', 'TransitionEnd'),
    },
    zo = {},
    es = {};
  D &&
    ((es = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Nn.animationend.animation,
      delete Nn.animationiteration.animation,
      delete Nn.animationstart.animation),
    'TransitionEvent' in window || delete Nn.transitionend.transition);
  function Zr(e) {
    if (zo[e]) return zo[e];
    if (!Nn[e]) return e;
    var t = Nn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in es) return (zo[e] = t[n]);
    return e;
  }
  var ts = Zr('animationend'),
    ns = Zr('animationiteration'),
    rs = Zr('animationstart'),
    ls = Zr('transitionend'),
    os = new Map(),
    is =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Wt(e, t) {
    (os.set(e, t), E(t, [e]));
  }
  for (var Ro = 0; Ro < is.length; Ro++) {
    var Io = is[Ro],
      hf = Io.toLowerCase(),
      vf = Io[0].toUpperCase() + Io.slice(1);
    Wt(hf, 'on' + vf);
  }
  (Wt(ts, 'onAnimationEnd'),
    Wt(ns, 'onAnimationIteration'),
    Wt(rs, 'onAnimationStart'),
    Wt('dblclick', 'onDoubleClick'),
    Wt('focusin', 'onFocus'),
    Wt('focusout', 'onBlur'),
    Wt(ls, 'onTransitionEnd'),
    O('onMouseEnter', ['mouseout', 'mouseover']),
    O('onMouseLeave', ['mouseout', 'mouseover']),
    O('onPointerEnter', ['pointerout', 'pointerover']),
    O('onPointerLeave', ['pointerout', 'pointerover']),
    E('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    E(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    E('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    E('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    E(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    E(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var cr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    yf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(cr));
  function us(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n), mc(r, t, void 0, e), (e.currentTarget = null));
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
    if (Fr) throw ((e = co), (Fr = !1), (co = null), e);
  }
  function pe(e, t) {
    var n = t[Wo];
    n === void 0 && (n = t[Wo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (as(t, e, 2, !1), n.add(r));
  }
  function Mo(e, t, n) {
    var r = 0;
    (t && (r |= 4), as(n, e, r, t));
  }
  var br = '_reactListening' + Math.random().toString(36).slice(2);
  function fr(e) {
    if (!e[br]) {
      ((e[br] = !0),
        M.forEach(function (n) {
          n !== 'selectionchange' && (yf.has(n) || Mo(n, !1, e), Mo(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[br] || ((t[br] = !0), Mo('selectionchange', !1, t));
    }
  }
  function as(e, t, n, r) {
    switch (zu(t)) {
      case 1:
        var l = Lc;
        break;
      case 4:
        l = Oc;
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
        S = [];
      e: {
        var y = os.get(e);
        if (y !== void 0) {
          var P = _o,
            z = e;
          switch (e) {
            case 'keypress':
              if (Kr(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              P = Gc;
              break;
            case 'focusin':
              ((z = 'focus'), (P = Eo));
              break;
            case 'focusout':
              ((z = 'blur'), (P = Eo));
              break;
            case 'beforeblur':
            case 'afterblur':
              P = Eo;
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
              P = Ic;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              P = qc;
              break;
            case ts:
            case ns:
            case rs:
              P = Dc;
              break;
            case ls:
              P = Jc;
              break;
            case 'scroll':
              P = zc;
              break;
            case 'wheel':
              P = bc;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              P = Bc;
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
            xe = !I && e === 'scroll',
            d = I ? (y !== null ? y + 'Capture' : null) : y;
          I = [];
          for (var a = h, p; a !== null; ) {
            p = a;
            var x = p.stateNode;
            if (
              (p.tag === 5 &&
                x !== null &&
                ((p = x), d !== null && ((x = Kn(a, d)), x != null && I.push(dr(a, x, p)))),
              xe)
            )
              break;
            a = a.return;
          }
          0 < I.length && ((y = new P(y, z, null, n, w)), S.push({ event: y, listeners: I }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((y = e === 'mouseover' || e === 'pointerover'),
            (P = e === 'mouseout' || e === 'pointerout'),
            y && n !== oo && (z = n.relatedTarget || n.fromElement) && (on(z) || z[Nt]))
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
                  ((xe = ln(z)), z !== xe || (z.tag !== 5 && z.tag !== 6)) &&
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
              (xe = P == null ? y : Tn(P)),
              (p = z == null ? y : Tn(z)),
              (y = new I(x, a + 'leave', P, n, w)),
              (y.target = xe),
              (y.relatedTarget = p),
              (x = null),
              on(w) === h &&
                ((I = new I(d, a + 'enter', z, n, w)),
                (I.target = p),
                (I.relatedTarget = xe),
                (x = I)),
              (xe = x),
              P && z)
            )
              t: {
                for (I = P, d = z, a = 0, p = I; p; p = jn(p)) a++;
                for (p = 0, x = d; x; x = jn(x)) p++;
                for (; 0 < a - p; ) ((I = jn(I)), a--);
                for (; 0 < p - a; ) ((d = jn(d)), p--);
                for (; a--; ) {
                  if (I === d || (d !== null && I === d.alternate)) break t;
                  ((I = jn(I)), (d = jn(d)));
                }
                I = null;
              }
            else I = null;
            (P !== null && cs(S, y, P, I, !1), z !== null && xe !== null && cs(S, xe, z, I, !0));
          }
        }
        e: {
          if (
            ((y = h ? Tn(h) : window),
            (P = y.nodeName && y.nodeName.toLowerCase()),
            P === 'select' || (P === 'input' && y.type === 'file'))
          )
            var F = uf;
          else if ($u(y))
            if (Qu) F = ff;
            else {
              F = af;
              var U = sf;
            }
          else
            (P = y.nodeName) &&
              P.toLowerCase() === 'input' &&
              (y.type === 'checkbox' || y.type === 'radio') &&
              (F = cf);
          if (F && (F = F(e, h))) {
            Vu(S, F, n, w);
            break e;
          }
          (U && U(e, y, h),
            e === 'focusout' &&
              (U = y._wrapperState) &&
              U.controlled &&
              y.type === 'number' &&
              eo(y, 'number', y.value));
        }
        switch (((U = h ? Tn(h) : window), e)) {
          case 'focusin':
            ($u(U) || U.contentEditable === 'true') && ((Cn = U), (Lo = h), (ar = null));
            break;
          case 'focusout':
            ar = Lo = Cn = null;
            break;
          case 'mousedown':
            Oo = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Oo = !1), bu(S, n, w));
            break;
          case 'selectionchange':
            if (mf) break;
          case 'keydown':
          case 'keyup':
            bu(S, n, w);
        }
        var H;
        if (No)
          e: {
            switch (e) {
              case 'compositionstart':
                var G = 'onCompositionStart';
                break e;
              case 'compositionend':
                G = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                G = 'onCompositionUpdate';
                break e;
            }
            G = void 0;
          }
        else
          En
            ? Hu(e, n) && (G = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (G = 'onCompositionStart');
        (G &&
          (Au &&
            n.locale !== 'ko' &&
            (En || G !== 'onCompositionStart'
              ? G === 'onCompositionEnd' && En && (H = Ru())
              : ((Ht = w), (So = 'value' in Ht ? Ht.value : Ht.textContent), (En = !0))),
          (U = el(h, G)),
          0 < U.length &&
            ((G = new Fu(G, e, null, n, w)),
            S.push({ event: G, listeners: U }),
            H ? (G.data = H) : ((H = Wu(n)), H !== null && (G.data = H)))),
          (H = tf ? nf(e, n) : rf(e, n)) &&
            ((h = el(h, 'onBeforeInput')),
            0 < h.length &&
              ((w = new Fu('onBeforeInput', 'beforeinput', null, n, w)),
              S.push({ event: w, listeners: h }),
              (w.data = H))));
      }
      ss(S, t);
    });
  }
  function dr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function el(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      (l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Kn(e, n)),
        o != null && r.unshift(dr(e, o, l)),
        (o = Kn(e, t)),
        o != null && r.push(dr(e, o, l))),
        (e = e.return));
    }
    return r;
  }
  function jn(e) {
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
          ? ((s = Kn(n, o)), s != null && i.unshift(dr(n, s, u)))
          : l || ((s = Kn(n, o)), s != null && i.push(dr(n, s, u)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var gf = /\r\n?/g,
    wf = /\u0000|\uFFFD/g;
  function fs(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        gf,
        `
`
      )
      .replace(wf, '');
  }
  function tl(e, t, n) {
    if (((t = fs(t)), fs(e) !== t && n)) throw Error(c(425));
  }
  function nl() {}
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
    Sf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    ds = typeof Promise == 'function' ? Promise : void 0,
    _f =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof ds < 'u'
          ? function (e) {
              return ds.resolve(null).then(e).catch(kf);
            }
          : Uo;
  function kf(e) {
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
            (e.removeChild(l), nr(t));
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = l;
    } while (n);
    nr(t);
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
    kt = '__reactFiber$' + Pn,
    pr = '__reactProps$' + Pn,
    Nt = '__reactContainer$' + Pn,
    Wo = '__reactEvents$' + Pn,
    xf = '__reactListeners$' + Pn,
    Ef = '__reactHandles$' + Pn;
  function on(e) {
    var t = e[kt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Nt] || n[kt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = ps(e); e !== null; ) {
            if ((n = e[kt])) return n;
            e = ps(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function mr(e) {
    return (
      (e = e[kt] || e[Nt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Tn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(c(33));
  }
  function rl(e) {
    return e[pr] || null;
  }
  var $o = [],
    Ln = -1;
  function Vt(e) {
    return { current: e };
  }
  function me(e) {
    0 > Ln || ((e.current = $o[Ln]), ($o[Ln] = null), Ln--);
  }
  function ce(e, t) {
    (Ln++, ($o[Ln] = e.current), (e.current = t));
  }
  var Qt = {},
    Me = Vt(Qt),
    $e = Vt(!1),
    un = Qt;
  function On(e, t) {
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
  function Ve(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function ll() {
    (me($e), me(Me));
  }
  function ms(e, t, n) {
    if (Me.current !== Qt) throw Error(c(168));
    (ce(Me, t), ce($e, n));
  }
  function hs(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(c(108, ae(e) || 'Unknown', l));
    return T({}, n, r);
  }
  function ol(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Qt),
      (un = Me.current),
      ce(Me, e),
      ce($e, $e.current),
      !0
    );
  }
  function vs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(c(169));
    (n
      ? ((e = hs(e, t, un)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        me($e),
        me(Me),
        ce(Me, e))
      : me($e),
      ce($e, n));
  }
  var jt = null,
    il = !1,
    Vo = !1;
  function ys(e) {
    jt === null ? (jt = [e]) : jt.push(e);
  }
  function Cf(e) {
    ((il = !0), ys(e));
  }
  function Gt() {
    if (!Vo && jt !== null) {
      Vo = !0;
      var e = 0,
        t = se;
      try {
        var n = jt;
        for (se = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((jt = null), (il = !1));
      } catch (l) {
        throw (jt !== null && (jt = jt.slice(e + 1)), wu(fo, Gt), l);
      } finally {
        ((se = t), (Vo = !1));
      }
    }
    return null;
  }
  var zn = [],
    Rn = 0,
    ul = null,
    sl = 0,
    ot = [],
    it = 0,
    sn = null,
    Pt = 1,
    Tt = '';
  function an(e, t) {
    ((zn[Rn++] = sl), (zn[Rn++] = ul), (ul = e), (sl = t));
  }
  function gs(e, t, n) {
    ((ot[it++] = Pt), (ot[it++] = Tt), (ot[it++] = sn), (sn = e));
    var r = Pt;
    e = Tt;
    var l = 32 - dt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var o = 32 - dt(t) + l;
    if (30 < o) {
      var i = l - (l % 5);
      ((o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (Pt = (1 << (32 - dt(t) + l)) | (n << l) | r),
        (Tt = o + e));
    } else ((Pt = (1 << o) | (n << l) | r), (Tt = e));
  }
  function Qo(e) {
    e.return !== null && (an(e, 1), gs(e, 1, 0));
  }
  function Go(e) {
    for (; e === ul; ) ((ul = zn[--Rn]), (zn[Rn] = null), (sl = zn[--Rn]), (zn[Rn] = null));
    for (; e === sn; )
      ((sn = ot[--it]),
        (ot[it] = null),
        (Tt = ot[--it]),
        (ot[it] = null),
        (Pt = ot[--it]),
        (ot[it] = null));
  }
  var be = null,
    et = null,
    ye = !1,
    mt = null;
  function ws(e, t) {
    var n = ct(5, null, null, 0);
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
          t !== null ? ((e.stateNode = t), (be = e), (et = $t(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (be = e), (et = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = sn !== null ? { id: Pt, overflow: Tt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = ct(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (be = e),
              (et = null),
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
    if (ye) {
      var t = et;
      if (t) {
        var n = t;
        if (!Ss(e, t)) {
          if (Ko(e)) throw Error(c(418));
          t = $t(n.nextSibling);
          var r = be;
          t && Ss(e, t) ? ws(r, n) : ((e.flags = (e.flags & -4097) | 2), (ye = !1), (be = e));
        }
      } else {
        if (Ko(e)) throw Error(c(418));
        ((e.flags = (e.flags & -4097) | 2), (ye = !1), (be = e));
      }
    }
  }
  function _s(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    be = e;
  }
  function al(e) {
    if (e !== be) return !1;
    if (!ye) return (_s(e), (ye = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !Bo(e.type, e.memoizedProps))),
      t && (t = et))
    ) {
      if (Ko(e)) throw (ks(), Error(c(418)));
      for (; t; ) (ws(e, t), (t = $t(t.nextSibling)));
    }
    if ((_s(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(c(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                et = $t(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        et = null;
      }
    } else et = be ? $t(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ks() {
    for (var e = et; e; ) e = $t(e.nextSibling);
  }
  function In() {
    ((et = be = null), (ye = !1));
  }
  function qo(e) {
    mt === null ? (mt = [e]) : mt.push(e);
  }
  var Nf = Z.ReactCurrentBatchConfig;
  function hr(e, t, n) {
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
  function cl(e, t) {
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
  function Es(e) {
    function t(d, a) {
      if (e) {
        var p = d.deletions;
        p === null ? ((d.deletions = [a]), (d.flags |= 16)) : p.push(a);
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
    function o(d, a, p) {
      return (
        (d.index = p),
        e
          ? ((p = d.alternate),
            p !== null ? ((p = p.index), p < a ? ((d.flags |= 2), a) : p) : ((d.flags |= 2), a))
          : ((d.flags |= 1048576), a)
      );
    }
    function i(d) {
      return (e && d.alternate === null && (d.flags |= 2), d);
    }
    function u(d, a, p, x) {
      return a === null || a.tag !== 6
        ? ((a = Ui(p, d.mode, x)), (a.return = d), a)
        : ((a = l(a, p)), (a.return = d), a);
    }
    function s(d, a, p, x) {
      var F = p.type;
      return F === de
        ? w(d, a, p.props.children, x, p.key)
        : a !== null &&
            (a.elementType === F ||
              (typeof F == 'object' && F !== null && F.$$typeof === Ie && xs(F) === a.type))
          ? ((x = l(a, p.props)), (x.ref = hr(d, a, p)), (x.return = d), x)
          : ((x = Il(p.type, p.key, p.props, null, d.mode, x)),
            (x.ref = hr(d, a, p)),
            (x.return = d),
            x);
    }
    function h(d, a, p, x) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== p.containerInfo ||
        a.stateNode.implementation !== p.implementation
        ? ((a = Hi(p, d.mode, x)), (a.return = d), a)
        : ((a = l(a, p.children || [])), (a.return = d), a);
    }
    function w(d, a, p, x, F) {
      return a === null || a.tag !== 7
        ? ((a = yn(p, d.mode, x, F)), (a.return = d), a)
        : ((a = l(a, p)), (a.return = d), a);
    }
    function S(d, a, p) {
      if ((typeof a == 'string' && a !== '') || typeof a == 'number')
        return ((a = Ui('' + a, d.mode, p)), (a.return = d), a);
      if (typeof a == 'object' && a !== null) {
        switch (a.$$typeof) {
          case re:
            return (
              (p = Il(a.type, a.key, a.props, null, d.mode, p)),
              (p.ref = hr(d, null, a)),
              (p.return = d),
              p
            );
          case Q:
            return ((a = Hi(a, d.mode, p)), (a.return = d), a);
          case Ie:
            var x = a._init;
            return S(d, x(a._payload), p);
        }
        if (Vn(a) || $(a)) return ((a = yn(a, d.mode, p, null)), (a.return = d), a);
        cl(d, a);
      }
      return null;
    }
    function y(d, a, p, x) {
      var F = a !== null ? a.key : null;
      if ((typeof p == 'string' && p !== '') || typeof p == 'number')
        return F !== null ? null : u(d, a, '' + p, x);
      if (typeof p == 'object' && p !== null) {
        switch (p.$$typeof) {
          case re:
            return p.key === F ? s(d, a, p, x) : null;
          case Q:
            return p.key === F ? h(d, a, p, x) : null;
          case Ie:
            return ((F = p._init), y(d, a, F(p._payload), x));
        }
        if (Vn(p) || $(p)) return F !== null ? null : w(d, a, p, x, null);
        cl(d, p);
      }
      return null;
    }
    function P(d, a, p, x, F) {
      if ((typeof x == 'string' && x !== '') || typeof x == 'number')
        return ((d = d.get(p) || null), u(a, d, '' + x, F));
      if (typeof x == 'object' && x !== null) {
        switch (x.$$typeof) {
          case re:
            return ((d = d.get(x.key === null ? p : x.key) || null), s(a, d, x, F));
          case Q:
            return ((d = d.get(x.key === null ? p : x.key) || null), h(a, d, x, F));
          case Ie:
            var U = x._init;
            return P(d, a, p, U(x._payload), F);
        }
        if (Vn(x) || $(x)) return ((d = d.get(p) || null), w(a, d, x, F, null));
        cl(a, x);
      }
      return null;
    }
    function z(d, a, p, x) {
      for (var F = null, U = null, H = a, G = (a = 0), Le = null; H !== null && G < p.length; G++) {
        H.index > G ? ((Le = H), (H = null)) : (Le = H.sibling);
        var ie = y(d, H, p[G], x);
        if (ie === null) {
          H === null && (H = Le);
          break;
        }
        (e && H && ie.alternate === null && t(d, H),
          (a = o(ie, a, G)),
          U === null ? (F = ie) : (U.sibling = ie),
          (U = ie),
          (H = Le));
      }
      if (G === p.length) return (n(d, H), ye && an(d, G), F);
      if (H === null) {
        for (; G < p.length; G++)
          ((H = S(d, p[G], x)),
            H !== null && ((a = o(H, a, G)), U === null ? (F = H) : (U.sibling = H), (U = H)));
        return (ye && an(d, G), F);
      }
      for (H = r(d, H); G < p.length; G++)
        ((Le = P(H, d, G, p[G], x)),
          Le !== null &&
            (e && Le.alternate !== null && H.delete(Le.key === null ? G : Le.key),
            (a = o(Le, a, G)),
            U === null ? (F = Le) : (U.sibling = Le),
            (U = Le)));
      return (
        e &&
          H.forEach(function (tn) {
            return t(d, tn);
          }),
        ye && an(d, G),
        F
      );
    }
    function I(d, a, p, x) {
      var F = $(p);
      if (typeof F != 'function') throw Error(c(150));
      if (((p = F.call(p)), p == null)) throw Error(c(151));
      for (
        var U = (F = null), H = a, G = (a = 0), Le = null, ie = p.next();
        H !== null && !ie.done;
        G++, ie = p.next()
      ) {
        H.index > G ? ((Le = H), (H = null)) : (Le = H.sibling);
        var tn = y(d, H, ie.value, x);
        if (tn === null) {
          H === null && (H = Le);
          break;
        }
        (e && H && tn.alternate === null && t(d, H),
          (a = o(tn, a, G)),
          U === null ? (F = tn) : (U.sibling = tn),
          (U = tn),
          (H = Le));
      }
      if (ie.done) return (n(d, H), ye && an(d, G), F);
      if (H === null) {
        for (; !ie.done; G++, ie = p.next())
          ((ie = S(d, ie.value, x)),
            ie !== null && ((a = o(ie, a, G)), U === null ? (F = ie) : (U.sibling = ie), (U = ie)));
        return (ye && an(d, G), F);
      }
      for (H = r(d, H); !ie.done; G++, ie = p.next())
        ((ie = P(H, d, G, ie.value, x)),
          ie !== null &&
            (e && ie.alternate !== null && H.delete(ie.key === null ? G : ie.key),
            (a = o(ie, a, G)),
            U === null ? (F = ie) : (U.sibling = ie),
            (U = ie)));
      return (
        e &&
          H.forEach(function (od) {
            return t(d, od);
          }),
        ye && an(d, G),
        F
      );
    }
    function xe(d, a, p, x) {
      if (
        (typeof p == 'object' &&
          p !== null &&
          p.type === de &&
          p.key === null &&
          (p = p.props.children),
        typeof p == 'object' && p !== null)
      ) {
        switch (p.$$typeof) {
          case re:
            e: {
              for (var F = p.key, U = a; U !== null; ) {
                if (U.key === F) {
                  if (((F = p.type), F === de)) {
                    if (U.tag === 7) {
                      (n(d, U.sibling), (a = l(U, p.props.children)), (a.return = d), (d = a));
                      break e;
                    }
                  } else if (
                    U.elementType === F ||
                    (typeof F == 'object' && F !== null && F.$$typeof === Ie && xs(F) === U.type)
                  ) {
                    (n(d, U.sibling),
                      (a = l(U, p.props)),
                      (a.ref = hr(d, U, p)),
                      (a.return = d),
                      (d = a));
                    break e;
                  }
                  n(d, U);
                  break;
                } else t(d, U);
                U = U.sibling;
              }
              p.type === de
                ? ((a = yn(p.props.children, d.mode, x, p.key)), (a.return = d), (d = a))
                : ((x = Il(p.type, p.key, p.props, null, d.mode, x)),
                  (x.ref = hr(d, a, p)),
                  (x.return = d),
                  (d = x));
            }
            return i(d);
          case Q:
            e: {
              for (U = p.key; a !== null; ) {
                if (a.key === U)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === p.containerInfo &&
                    a.stateNode.implementation === p.implementation
                  ) {
                    (n(d, a.sibling), (a = l(a, p.children || [])), (a.return = d), (d = a));
                    break e;
                  } else {
                    n(d, a);
                    break;
                  }
                else t(d, a);
                a = a.sibling;
              }
              ((a = Hi(p, d.mode, x)), (a.return = d), (d = a));
            }
            return i(d);
          case Ie:
            return ((U = p._init), xe(d, a, U(p._payload), x));
        }
        if (Vn(p)) return z(d, a, p, x);
        if ($(p)) return I(d, a, p, x);
        cl(d, p);
      }
      return (typeof p == 'string' && p !== '') || typeof p == 'number'
        ? ((p = '' + p),
          a !== null && a.tag === 6
            ? (n(d, a.sibling), (a = l(a, p)), (a.return = d), (d = a))
            : (n(d, a), (a = Ui(p, d.mode, x)), (a.return = d), (d = a)),
          i(d))
        : n(d, a);
    }
    return xe;
  }
  var Mn = Es(!0),
    Cs = Es(!1),
    fl = Vt(null),
    dl = null,
    Fn = null,
    Xo = null;
  function Jo() {
    Xo = Fn = dl = null;
  }
  function Zo(e) {
    var t = fl.current;
    (me(fl), (e._currentValue = t));
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
  function Dn(e, t) {
    ((dl = e),
      (Xo = Fn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Qe = !0), (e.firstContext = null)));
  }
  function ut(e) {
    var t = e._currentValue;
    if (Xo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Fn === null)) {
        if (dl === null) throw Error(c(308));
        ((Fn = e), (dl.dependencies = { lanes: 0, firstContext: e }));
      } else Fn = Fn.next = e;
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
      Lt(e, r)
    );
  }
  function Lt(e, t) {
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
  function Ot(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Yt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (ne & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Lt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), ei(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Lt(e, n)
    );
  }
  function pl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ho(e, n));
    }
  }
  function Ps(e, t) {
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
  function ml(e, t, n, r) {
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
      var S = l.baseState;
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
                  S = z.call(P, S, y);
                  break e;
                }
                S = z;
                break e;
              case 3:
                z.flags = (z.flags & -65537) | 128;
              case 0:
                if (
                  ((z = I.payload), (y = typeof z == 'function' ? z.call(P, S, y) : z), y == null)
                )
                  break e;
                S = T({}, S, y);
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
            w === null ? ((h = w = P), (s = S)) : (w = w.next = P),
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
        (w === null && (s = S),
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
      ((pn |= i), (e.lanes = i), (e.memoizedState = S));
    }
  }
  function Ts(e, t, n) {
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
  var vr = {},
    xt = Vt(vr),
    yr = Vt(vr),
    gr = Vt(vr);
  function fn(e) {
    if (e === vr) throw Error(c(174));
    return e;
  }
  function ni(e, t) {
    switch ((ce(gr, t), ce(yr, e), ce(xt, vr), (e = t.nodeType), e)) {
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
    (me(xt), ce(xt, t));
  }
  function An() {
    (me(xt), me(yr), me(gr));
  }
  function Ls(e) {
    fn(gr.current);
    var t = fn(xt.current),
      n = no(t, e.type);
    t !== n && (ce(yr, e), ce(xt, n));
  }
  function ri(e) {
    yr.current === e && (me(xt), me(yr));
  }
  var we = Vt(0);
  function hl(e) {
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
  var vl = Z.ReactCurrentDispatcher,
    ii = Z.ReactCurrentBatchConfig,
    dn = 0,
    Se = null,
    Ce = null,
    Pe = null,
    yl = !1,
    wr = !1,
    Sr = 0,
    jf = 0;
  function Fe() {
    throw Error(c(321));
  }
  function ui(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!pt(e[n], t[n])) return !1;
    return !0;
  }
  function si(e, t, n, r, l, o) {
    if (
      ((dn = o),
      (Se = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (vl.current = e === null || e.memoizedState === null ? Of : zf),
      (e = n(r, l)),
      wr)
    ) {
      o = 0;
      do {
        if (((wr = !1), (Sr = 0), 25 <= o)) throw Error(c(301));
        ((o += 1), (Pe = Ce = null), (t.updateQueue = null), (vl.current = Rf), (e = n(r, l)));
      } while (wr);
    }
    if (
      ((vl.current = Sl),
      (t = Ce !== null && Ce.next !== null),
      (dn = 0),
      (Pe = Ce = Se = null),
      (yl = !1),
      t)
    )
      throw Error(c(300));
    return e;
  }
  function ai() {
    var e = Sr !== 0;
    return ((Sr = 0), e);
  }
  function Et() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Pe === null ? (Se.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe);
  }
  function st() {
    if (Ce === null) {
      var e = Se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ce.next;
    var t = Pe === null ? Se.memoizedState : Pe.next;
    if (t !== null) ((Pe = t), (Ce = e));
    else {
      if (e === null) throw Error(c(310));
      ((Ce = e),
        (e = {
          memoizedState: Ce.memoizedState,
          baseState: Ce.baseState,
          baseQueue: Ce.baseQueue,
          queue: Ce.queue,
          next: null,
        }),
        Pe === null ? (Se.memoizedState = Pe = e) : (Pe = Pe.next = e));
    }
    return Pe;
  }
  function _r(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function ci(e) {
    var t = st(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var r = Ce,
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
          var S = {
            lane: w,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          };
          (s === null ? ((u = s = S), (i = r)) : (s = s.next = S), (Se.lanes |= w), (pn |= w));
        }
        h = h.next;
      } while (h !== null && h !== o);
      (s === null ? (i = r) : (s.next = u),
        pt(r, t.memoizedState) || (Qe = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((o = l.lane), (Se.lanes |= o), (pn |= o), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function fi(e) {
    var t = st(),
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
      (pt(o, t.memoizedState) || (Qe = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, r];
  }
  function Os() {}
  function zs(e, t) {
    var n = Se,
      r = st(),
      l = t(),
      o = !pt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Qe = !0)),
      (r = r.queue),
      di(Ms.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Pe !== null && Pe.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), kr(9, Is.bind(null, n, r, l, t), void 0, null), Te === null))
        throw Error(c(349));
      (dn & 30) !== 0 || Rs(n, t, l);
    }
    return l;
  }
  function Rs(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Se.updateQueue = t), (t.stores = [e]))
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
      return !pt(e, n);
    } catch {
      return !0;
    }
  }
  function Ds(e) {
    var t = Lt(e, 1);
    t !== null && gt(t, e, 1, -1);
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
      (e = e.dispatch = Lf.bind(null, Se, e)),
      [t.memoizedState, e]
    );
  }
  function kr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Se.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Bs() {
    return st().memoizedState;
  }
  function gl(e, t, n, r) {
    var l = Et();
    ((Se.flags |= e), (l.memoizedState = kr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function wl(e, t, n, r) {
    var l = st();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ce !== null) {
      var i = Ce.memoizedState;
      if (((o = i.destroy), r !== null && ui(r, i.deps))) {
        l.memoizedState = kr(t, n, o, r);
        return;
      }
    }
    ((Se.flags |= e), (l.memoizedState = kr(1 | t, n, o, r)));
  }
  function Us(e, t) {
    return gl(8390656, 8, e, t);
  }
  function di(e, t) {
    return wl(2048, 8, e, t);
  }
  function Hs(e, t) {
    return wl(4, 2, e, t);
  }
  function Ws(e, t) {
    return wl(4, 4, e, t);
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
    return ((n = n != null ? n.concat([e]) : null), wl(4, 4, $s.bind(null, t, e), n));
  }
  function pi() {}
  function Qs(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ui(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Gs(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ui(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ks(e, t, n) {
    return (dn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Qe = !0)), (e.memoizedState = n))
      : (pt(n, t) || ((n = xu()), (Se.lanes |= n), (pn |= n), (e.baseState = !0)), t);
  }
  function Pf(e, t) {
    var n = se;
    ((se = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = ii.transition;
    ii.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((se = n), (ii.transition = r));
    }
  }
  function Ys() {
    return st().memoizedState;
  }
  function Tf(e, t, n) {
    var r = Zt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), qs(e)))
      Xs(t, n);
    else if (((n = Ns(e, t, n, r)), n !== null)) {
      var l = We();
      (gt(n, e, r, l), Js(n, t, r));
    }
  }
  function Lf(e, t, n) {
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
          if (((l.hasEagerState = !0), (l.eagerState = u), pt(u, i))) {
            var s = t.interleaved;
            (s === null ? ((l.next = l), ei(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Ns(e, t, l, r)), n !== null && ((l = We()), gt(n, e, r, l), Js(n, t, r)));
    }
  }
  function qs(e) {
    var t = e.alternate;
    return e === Se || (t !== null && t === Se);
  }
  function Xs(e, t) {
    wr = yl = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Js(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ho(e, n));
    }
  }
  var Sl = {
      readContext: ut,
      useCallback: Fe,
      useContext: Fe,
      useEffect: Fe,
      useImperativeHandle: Fe,
      useInsertionEffect: Fe,
      useLayoutEffect: Fe,
      useMemo: Fe,
      useReducer: Fe,
      useRef: Fe,
      useState: Fe,
      useDebugValue: Fe,
      useDeferredValue: Fe,
      useTransition: Fe,
      useMutableSource: Fe,
      useSyncExternalStore: Fe,
      useId: Fe,
      unstable_isNewReconciler: !1,
    },
    Of = {
      readContext: ut,
      useCallback: function (e, t) {
        return ((Et().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ut,
      useEffect: Us,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), gl(4194308, 4, $s.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return gl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return gl(4, 2, e, t);
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
          (e = e.dispatch = Tf.bind(null, Se, e)),
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
        var r = Se,
          l = Et();
        if (ye) {
          if (n === void 0) throw Error(c(407));
          n = n();
        } else {
          if (((n = t()), Te === null)) throw Error(c(349));
          (dn & 30) !== 0 || Rs(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Us(Ms.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          kr(9, Is.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Et(),
          t = Te.identifierPrefix;
        if (ye) {
          var n = Tt,
            r = Pt;
          ((n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = Sr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':'));
        } else ((n = jf++), (t = ':' + t + 'r' + n.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    zf = {
      readContext: ut,
      useCallback: Qs,
      useContext: ut,
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
        var t = st();
        return Ks(t, Ce.memoizedState, e);
      },
      useTransition: function () {
        var e = ci(_r)[0],
          t = st().memoizedState;
        return [e, t];
      },
      useMutableSource: Os,
      useSyncExternalStore: zs,
      useId: Ys,
      unstable_isNewReconciler: !1,
    },
    Rf = {
      readContext: ut,
      useCallback: Qs,
      useContext: ut,
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
        var t = st();
        return Ce === null ? (t.memoizedState = e) : Ks(t, Ce.memoizedState, e);
      },
      useTransition: function () {
        var e = fi(_r)[0],
          t = st().memoizedState;
        return [e, t];
      },
      useMutableSource: Os,
      useSyncExternalStore: zs,
      useId: Ys,
      unstable_isNewReconciler: !1,
    };
  function ht(e, t) {
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
      var r = We(),
        l = Zt(e),
        o = Ot(r, l);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = Yt(e, o, l)),
        t !== null && (gt(t, e, l, r), pl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = We(),
        l = Zt(e),
        o = Ot(r, l);
      ((o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Yt(e, o, l)),
        t !== null && (gt(t, e, l, r), pl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = We(),
        r = Zt(e),
        l = Ot(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Yt(e, l, r)),
        t !== null && (gt(t, e, r, n), pl(t, e, r)));
    },
  };
  function Zs(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !sr(n, r) || !sr(l, o)
          : !0
    );
  }
  function bs(e, t, n) {
    var r = !1,
      l = Qt,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = ut(o))
        : ((l = Ve(t) ? un : Me.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? On(e, l) : Qt)),
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
      ? (l.context = ut(o))
      : ((o = Ve(t) ? un : Me.current), (l.context = On(e, o))),
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
        ml(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function Bn(e, t) {
    try {
      var n = '',
        r = t;
      do ((n += le(r)), (r = r.return));
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
  var If = typeof WeakMap == 'function' ? WeakMap : Map;
  function ta(e, t, n) {
    ((n = Ot(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Pl || ((Pl = !0), (zi = r)), yi(e, t));
      }),
      n
    );
  }
  function na(e, t, n) {
    ((n = Ot(-1, n)), (n.tag = 3));
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
      r = e.pingCache = new If();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Yf.bind(null, e, t, n)), t.then(e, e));
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
              (n.alternate === null ? (n.tag = 17) : ((t = Ot(-1, 1)), (t.tag = 2), Yt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Mf = Z.ReactCurrentOwner,
    Qe = !1;
  function He(e, t, n, r) {
    t.child = e === null ? Cs(t, null, n, r) : Mn(t, e.child, n, r);
  }
  function ia(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Dn(t, l),
      (r = si(e, t, n, r, o, l)),
      (n = ai()),
      e !== null && !Qe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), zt(e, t, l))
        : (ye && n && Qo(t), (t.flags |= 1), He(e, t, r, l), t.child)
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
        : ((e = Il(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var i = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : sr), n(i, r) && e.ref === t.ref))
        return zt(e, t, l);
    }
    return ((t.flags |= 1), (e = en(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function sa(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (sr(o, r) && e.ref === t.ref)
        if (((Qe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Qe = !0);
        else return ((t.lanes = e.lanes), zt(e, t, l));
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
          ce(Hn, tt),
          (tt |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            ce(Hn, tt),
            (tt |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = o !== null ? o.baseLanes : n),
          ce(Hn, tt),
          (tt |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ce(Hn, tt),
        (tt |= r));
    return (He(e, t, l, n), t.child);
  }
  function ca(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function gi(e, t, n, r, l) {
    var o = Ve(n) ? un : Me.current;
    return (
      (o = On(t, o)),
      Dn(t, l),
      (n = si(e, t, n, r, o, l)),
      (r = ai()),
      e !== null && !Qe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), zt(e, t, l))
        : (ye && r && Qo(t), (t.flags |= 1), He(e, t, n, l), t.child)
    );
  }
  function fa(e, t, n, r, l) {
    if (Ve(n)) {
      var o = !0;
      ol(t);
    } else o = !1;
    if ((Dn(t, l), t.stateNode === null)) (xl(e, t), bs(t, n, r), hi(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        u = t.memoizedProps;
      i.props = u;
      var s = i.context,
        h = n.contextType;
      typeof h == 'object' && h !== null
        ? (h = ut(h))
        : ((h = Ve(n) ? un : Me.current), (h = On(t, h)));
      var w = n.getDerivedStateFromProps,
        S = typeof w == 'function' || typeof i.getSnapshotBeforeUpdate == 'function';
      (S ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== r || s !== h) && ea(t, i, r, h)),
        (Kt = !1));
      var y = t.memoizedState;
      ((i.state = y),
        ml(t, r, i, l),
        (s = t.memoizedState),
        u !== r || y !== s || $e.current || Kt
          ? (typeof w == 'function' && (mi(t, n, w, r), (s = t.memoizedState)),
            (u = Kt || Zs(t, n, u, r, y, s, h))
              ? (S ||
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
        (h = t.type === t.elementType ? u : ht(t.type, u)),
        (i.props = h),
        (S = t.pendingProps),
        (y = i.context),
        (s = n.contextType),
        typeof s == 'object' && s !== null
          ? (s = ut(s))
          : ((s = Ve(n) ? un : Me.current), (s = On(t, s))));
      var P = n.getDerivedStateFromProps;
      ((w = typeof P == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== S || y !== s) && ea(t, i, r, s)),
        (Kt = !1),
        (y = t.memoizedState),
        (i.state = y),
        ml(t, r, i, l));
      var z = t.memoizedState;
      u !== S || y !== z || $e.current || Kt
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
    if (!r && !i) return (l && vs(t, n, !1), zt(e, t, o));
    ((r = t.stateNode), (Mf.current = t));
    var u = i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Mn(t, e.child, null, o)), (t.child = Mn(t, null, u, o)))
        : He(e, t, u, o),
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
    return (In(), qo(l), (t.flags |= 256), He(e, t, n, r), t.child);
  }
  var Si = { dehydrated: null, treeContext: null, retryLane: 0 };
  function _i(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ma(e, t, n) {
    var r = t.pendingProps,
      l = we.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      ce(we, l & 1),
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
                  : (o = Ml(i, r, 0, null)),
                (e = yn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = _i(n)),
                (t.memoizedState = Si),
                e)
              : ki(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return Ff(e, t, i, r, u, l, n);
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
            ? _i(n)
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
  function ki(e, t) {
    return (
      (t = Ml({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function kl(e, t, n, r) {
    return (
      r !== null && qo(r),
      Mn(t, e.child, null, n),
      (e = ki(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ff(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = vi(Error(c(422)))), kl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = Ml({ mode: 'visible', children: r.children }, l, 0, null)),
            (o = yn(o, l, i, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && Mn(t, e.child, null, i),
            (t.child.memoizedState = _i(i)),
            (t.memoizedState = Si),
            o);
    if ((t.mode & 1) === 0) return kl(e, t, i, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return ((r = u), (o = Error(c(419))), (r = vi(o, r, void 0)), kl(e, t, i, r));
    }
    if (((u = (i & e.childLanes) !== 0), Qe || u)) {
      if (((r = Te), r !== null)) {
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
          l !== 0 && l !== o.retryLane && ((o.retryLane = l), Lt(e, l), gt(r, e, l, -1)));
      }
      return (Ai(), (r = vi(Error(c(421)))), kl(e, t, i, r));
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = qf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = o.treeContext),
        (et = $t(l.nextSibling)),
        (be = t),
        (ye = !0),
        (mt = null),
        e !== null &&
          ((ot[it++] = Pt),
          (ot[it++] = Tt),
          (ot[it++] = sn),
          (Pt = e.id),
          (Tt = e.overflow),
          (sn = t)),
        (t = ki(t, r.children)),
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
    if ((He(e, t, r.children, n), (r = we.current), (r & 2) !== 0))
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
    if ((ce(we, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate), e !== null && hl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            xi(t, !1, l, n, o));
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && hl(e) === null)) {
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
  function xl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function zt(e, t, n) {
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
  function Df(e, t, n) {
    switch (t.tag) {
      case 3:
        (da(t), In());
        break;
      case 5:
        Ls(t);
        break;
      case 1:
        Ve(t.type) && ol(t);
        break;
      case 4:
        ni(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (ce(fl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ce(we, we.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? ma(e, t, n)
              : (ce(we, we.current & 1), (e = zt(e, t, n)), e !== null ? e.sibling : null);
        ce(we, we.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return va(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ce(we, we.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), aa(e, t, n));
    }
    return zt(e, t, n);
  }
  var ya, Ei, ga, wa;
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
    (Ei = function () {}),
    (ga = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), fn(xt.current));
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
            typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = nl);
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
                (k.hasOwnProperty(h) ? o || (o = []) : (o = o || []).push(h, null));
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
                    (k.hasOwnProperty(h)
                      ? (s != null && h === 'onScroll' && pe('scroll', e), o || u === s || (o = []))
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
  function xr(e, t) {
    if (!ye)
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
  function De(e) {
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
  function Af(e, t, n) {
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
        return (De(t), null);
      case 1:
        return (Ve(t.type) && ll(), De(t), null);
      case 3:
        return (
          (r = t.stateNode),
          An(),
          me($e),
          me(Me),
          oi(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (al(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), mt !== null && (Mi(mt), (mt = null)))),
          Ei(e, t),
          De(t),
          null
        );
      case 5:
        ri(t);
        var l = fn(gr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (ga(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(c(166));
            return (De(t), null);
          }
          if (((e = fn(xt.current)), al(t))) {
            ((r = t.stateNode), (n = t.type));
            var o = t.memoizedProps;
            switch (((r[kt] = t), (r[pr] = o), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                (pe('cancel', r), pe('close', r));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                pe('load', r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < cr.length; l++) pe(cr[l], r);
                break;
              case 'source':
                pe('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                (pe('error', r), pe('load', r));
                break;
              case 'details':
                pe('toggle', r);
                break;
              case 'input':
                (bi(r, o), pe('invalid', r));
                break;
              case 'select':
                ((r._wrapperState = { wasMultiple: !!o.multiple }), pe('invalid', r));
                break;
              case 'textarea':
                (nu(r, o), pe('invalid', r));
            }
            (ro(n, o), (l = null));
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var u = o[i];
                i === 'children'
                  ? typeof u == 'string'
                    ? r.textContent !== u &&
                      (o.suppressHydrationWarning !== !0 && tl(r.textContent, u, e),
                      (l = ['children', u]))
                    : typeof u == 'number' &&
                      r.textContent !== '' + u &&
                      (o.suppressHydrationWarning !== !0 && tl(r.textContent, u, e),
                      (l = ['children', '' + u]))
                  : k.hasOwnProperty(i) && u != null && i === 'onScroll' && pe('scroll', r);
              }
            switch (n) {
              case 'input':
                (zr(r), tu(r, o, !0));
                break;
              case 'textarea':
                (zr(r), lu(r));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof o.onClick == 'function' && (r.onclick = nl);
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
              (e[kt] = t),
              (e[pr] = r),
              ya(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = lo(n, r)), n)) {
                case 'dialog':
                  (pe('cancel', e), pe('close', e), (l = r));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (pe('load', e), (l = r));
                  break;
                case 'video':
                case 'audio':
                  for (l = 0; l < cr.length; l++) pe(cr[l], e);
                  l = r;
                  break;
                case 'source':
                  (pe('error', e), (l = r));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (pe('error', e), pe('load', e), (l = r));
                  break;
                case 'details':
                  (pe('toggle', e), (l = r));
                  break;
                case 'input':
                  (bi(e, r), (l = Zl(e, r)), pe('invalid', e));
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = T({}, r, { value: void 0 })),
                    pe('invalid', e));
                  break;
                case 'textarea':
                  (nu(e, r), (l = to(e, r)), pe('invalid', e));
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
                          ? (n !== 'textarea' || s !== '') && Qn(e, s)
                          : typeof s == 'number' && Qn(e, '' + s)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (k.hasOwnProperty(o)
                            ? s != null && o === 'onScroll' && pe('scroll', e)
                            : s != null && te(e, o, s, i));
                }
              switch (n) {
                case 'input':
                  (zr(e), tu(e, r, !1));
                  break;
                case 'textarea':
                  (zr(e), lu(e));
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + ue(r.value));
                  break;
                case 'select':
                  ((e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? wn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null && wn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = nl);
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
        return (De(t), null);
      case 6:
        if (e && t.stateNode != null) wa(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(c(166));
          if (((n = fn(gr.current)), fn(xt.current), al(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[kt] = t),
              (o = r.nodeValue !== n) && ((e = be), e !== null))
            )
              switch (e.tag) {
                case 3:
                  tl(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    tl(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[kt] = t),
              (t.stateNode = r));
        }
        return (De(t), null);
      case 13:
        if (
          (me(we),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ye && et !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (ks(), In(), (t.flags |= 98560), (o = !1));
          else if (((o = al(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(c(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(c(317));
              o[kt] = t;
            } else (In(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (De(t), (o = !1));
          } else (mt !== null && (Mi(mt), (mt = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (we.current & 1) !== 0 ? Ne === 0 && (Ne = 3) : Ai())),
            t.updateQueue !== null && (t.flags |= 4),
            De(t),
            null);
      case 4:
        return (An(), Ei(e, t), e === null && fr(t.stateNode.containerInfo), De(t), null);
      case 10:
        return (Zo(t.type._context), De(t), null);
      case 17:
        return (Ve(t.type) && ll(), De(t), null);
      case 19:
        if ((me(we), (o = t.memoizedState), o === null)) return (De(t), null);
        if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) xr(o, !1);
          else {
            if (Ne !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = hl(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      xr(o, !1),
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
                  return (ce(we, (we.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              ke() > Wn &&
              ((t.flags |= 128), (r = !0), xr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = hl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                xr(o, !0),
                o.tail === null && o.tailMode === 'hidden' && !i.alternate && !ye)
              )
                return (De(t), null);
            } else
              2 * ke() - o.renderingStartTime > Wn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), xr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = o.last), n !== null ? (n.sibling = i) : (t.child = i), (o.last = i));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = ke()),
            (t.sibling = null),
            (n = we.current),
            ce(we, r ? (n & 1) | 2 : n & 1),
            t)
          : (De(t), null);
      case 22:
      case 23:
        return (
          Di(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (tt & 1073741824) !== 0 && (De(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : De(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Bf(e, t) {
    switch ((Go(t), t.tag)) {
      case 1:
        return (
          Ve(t.type) && ll(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          An(),
          me($e),
          me(Me),
          oi(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (ri(t), null);
      case 13:
        if ((me(we), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(c(340));
          In();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (me(we), null);
      case 4:
        return (An(), null);
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
    Ae = !1,
    Uf = typeof WeakSet == 'function' ? WeakSet : Set,
    L = null;
  function Un(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          _e(e, t, r);
        }
      else n.current = null;
  }
  function Ci(e, t, n) {
    try {
      n();
    } catch (r) {
      _e(e, t, r);
    }
  }
  var Sa = !1;
  function Hf(e, t) {
    if (((Do = Vr), (e = Zu()), To(e))) {
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
              S = e,
              y = null;
            t: for (;;) {
              for (
                var P;
                S !== n || (l !== 0 && S.nodeType !== 3) || (u = i + l),
                  S !== o || (r !== 0 && S.nodeType !== 3) || (s = i + r),
                  S.nodeType === 3 && (i += S.nodeValue.length),
                  (P = S.firstChild) !== null;
              )
                ((y = S), (S = P));
              for (;;) {
                if (S === e) break t;
                if (
                  (y === n && ++h === l && (u = i),
                  y === o && ++w === r && (s = i),
                  (P = S.nextSibling) !== null)
                )
                  break;
                ((S = y), (y = S.parentNode));
              }
              S = P;
            }
            n = u === -1 || s === -1 ? null : { start: u, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ao = { focusedElem: e, selectionRange: n }, Vr = !1, L = t; L !== null; )
      if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (L = e));
      else
        for (; L !== null; ) {
          t = L;
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
                      xe = z.memoizedState,
                      d = t.stateNode,
                      a = d.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? I : ht(t.type, I),
                        xe
                      );
                    d.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var p = t.stateNode.containerInfo;
                  p.nodeType === 1
                    ? (p.textContent = '')
                    : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
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
            _e(t, t.return, x);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (L = e));
            break;
          }
          L = t.return;
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
          ((l.destroy = void 0), o !== void 0 && Ci(t, n, o));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Cl(e, t) {
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
  function _a(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), _a(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[kt], delete t[pr], delete t[Wo], delete t[xf], delete t[Ef])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function ka(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function xa(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ka(e.return)) return null;
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
            n != null || t.onclick !== null || (t.onclick = nl)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ji(e, t, n), e = e.sibling; e !== null; ) (ji(e, t, n), (e = e.sibling));
  }
  function Pi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Pi(e, t, n), e = e.sibling; e !== null; ) (Pi(e, t, n), (e = e.sibling));
  }
  var ze = null,
    vt = !1;
  function qt(e, t, n) {
    for (n = n.child; n !== null; ) (Ea(e, t, n), (n = n.sibling));
  }
  function Ea(e, t, n) {
    if (_t && typeof _t.onCommitFiberUnmount == 'function')
      try {
        _t.onCommitFiberUnmount(Ar, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ae || Un(n, t);
      case 6:
        var r = ze,
          l = vt;
        ((ze = null),
          qt(e, t, n),
          (ze = r),
          (vt = l),
          ze !== null &&
            (vt
              ? ((e = ze),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : ze.removeChild(n.stateNode)));
        break;
      case 18:
        ze !== null &&
          (vt
            ? ((e = ze),
              (n = n.stateNode),
              e.nodeType === 8 ? Ho(e.parentNode, n) : e.nodeType === 1 && Ho(e, n),
              nr(e))
            : Ho(ze, n.stateNode));
        break;
      case 4:
        ((r = ze),
          (l = vt),
          (ze = n.stateNode.containerInfo),
          (vt = !0),
          qt(e, t, n),
          (ze = r),
          (vt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ae && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var o = l,
              i = o.destroy;
            ((o = o.tag),
              i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Ci(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        qt(e, t, n);
        break;
      case 1:
        if (!Ae && (Un(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (u) {
            _e(n, t, u);
          }
        qt(e, t, n);
        break;
      case 21:
        qt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ae = (r = Ae) || n.memoizedState !== null), qt(e, t, n), (Ae = r))
          : qt(e, t, n);
        break;
      default:
        qt(e, t, n);
    }
  }
  function Ca(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Uf()),
        t.forEach(function (r) {
          var l = Xf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function yt(e, t) {
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
                ((ze = u.stateNode), (vt = !1));
                break e;
              case 3:
                ((ze = u.stateNode.containerInfo), (vt = !0));
                break e;
              case 4:
                ((ze = u.stateNode.containerInfo), (vt = !0));
                break e;
            }
            u = u.return;
          }
          if (ze === null) throw Error(c(160));
          (Ea(o, i, l), (ze = null), (vt = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (h) {
          _e(l, t, h);
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
        if ((yt(t, e), Ct(e), r & 4)) {
          try {
            (Er(3, e, e.return), Cl(3, e));
          } catch (I) {
            _e(e, e.return, I);
          }
          try {
            Er(5, e, e.return);
          } catch (I) {
            _e(e, e.return, I);
          }
        }
        break;
      case 1:
        (yt(t, e), Ct(e), r & 512 && n !== null && Un(n, n.return));
        break;
      case 5:
        if ((yt(t, e), Ct(e), r & 512 && n !== null && Un(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Qn(l, '');
          } catch (I) {
            _e(e, e.return, I);
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
                  S = s[i + 1];
                w === 'style'
                  ? su(l, S)
                  : w === 'dangerouslySetInnerHTML'
                    ? iu(l, S)
                    : w === 'children'
                      ? Qn(l, S)
                      : te(l, w, S, h);
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
                    ? wn(l, !!o.multiple, P, !1)
                    : y !== !!o.multiple &&
                      (o.defaultValue != null
                        ? wn(l, !!o.multiple, o.defaultValue, !0)
                        : wn(l, !!o.multiple, o.multiple ? [] : '', !1));
              }
              l[pr] = o;
            } catch (I) {
              _e(e, e.return, I);
            }
        }
        break;
      case 6:
        if ((yt(t, e), Ct(e), r & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          ((l = e.stateNode), (o = e.memoizedProps));
          try {
            l.nodeValue = o;
          } catch (I) {
            _e(e, e.return, I);
          }
        }
        break;
      case 3:
        if ((yt(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            nr(t.containerInfo);
          } catch (I) {
            _e(e, e.return, I);
          }
        break;
      case 4:
        (yt(t, e), Ct(e));
        break;
      case 13:
        (yt(t, e),
          Ct(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (Oi = ke())),
          r & 4 && Ca(e));
        break;
      case 22:
        if (
          ((w = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ae = (h = Ae) || w), yt(t, e), (Ae = h)) : yt(t, e),
          Ct(e),
          r & 8192)
        ) {
          if (
            ((h = e.memoizedState !== null), (e.stateNode.isHidden = h) && !w && (e.mode & 1) !== 0)
          )
            for (L = e, w = e.child; w !== null; ) {
              for (S = L = w; L !== null; ) {
                switch (((y = L), (P = y.child), y.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Er(4, y, y.return);
                    break;
                  case 1:
                    Un(y, y.return);
                    var z = y.stateNode;
                    if (typeof z.componentWillUnmount == 'function') {
                      ((r = y), (n = y.return));
                      try {
                        ((t = r),
                          (z.props = t.memoizedProps),
                          (z.state = t.memoizedState),
                          z.componentWillUnmount());
                      } catch (I) {
                        _e(r, n, I);
                      }
                    }
                    break;
                  case 5:
                    Un(y, y.return);
                    break;
                  case 22:
                    if (y.memoizedState !== null) {
                      Ta(S);
                      continue;
                    }
                }
                P !== null ? ((P.return = y), (L = P)) : Ta(S);
              }
              w = w.sibling;
            }
          e: for (w = null, S = e; ; ) {
            if (S.tag === 5) {
              if (w === null) {
                w = S;
                try {
                  ((l = S.stateNode),
                    h
                      ? ((o = l.style),
                        typeof o.setProperty == 'function'
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none'))
                      : ((u = S.stateNode),
                        (s = S.memoizedProps.style),
                        (i = s != null && s.hasOwnProperty('display') ? s.display : null),
                        (u.style.display = uu('display', i))));
                } catch (I) {
                  _e(e, e.return, I);
                }
              }
            } else if (S.tag === 6) {
              if (w === null)
                try {
                  S.stateNode.nodeValue = h ? '' : S.memoizedProps;
                } catch (I) {
                  _e(e, e.return, I);
                }
            } else if (
              ((S.tag !== 22 && S.tag !== 23) || S.memoizedState === null || S === e) &&
              S.child !== null
            ) {
              ((S.child.return = S), (S = S.child));
              continue;
            }
            if (S === e) break e;
            for (; S.sibling === null; ) {
              if (S.return === null || S.return === e) break e;
              (w === S && (w = null), (S = S.return));
            }
            (w === S && (w = null), (S.sibling.return = S.return), (S = S.sibling));
          }
        }
        break;
      case 19:
        (yt(t, e), Ct(e), r & 4 && Ca(e));
        break;
      case 21:
        break;
      default:
        (yt(t, e), Ct(e));
    }
  }
  function Ct(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ka(n)) {
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
            r.flags & 32 && (Qn(l, ''), (r.flags &= -33));
            var o = xa(e);
            Pi(e, o, l);
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
        _e(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Wf(e, t, n) {
    ((L = e), ja(e));
  }
  function ja(e, t, n) {
    for (var r = (e.mode & 1) !== 0; L !== null; ) {
      var l = L,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || El;
        if (!i) {
          var u = l.alternate,
            s = (u !== null && u.memoizedState !== null) || Ae;
          u = El;
          var h = Ae;
          if (((El = i), (Ae = s) && !h))
            for (L = l; L !== null; )
              ((i = L),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? La(l)
                  : s !== null
                    ? ((s.return = i), (L = s))
                    : La(l));
          for (; o !== null; ) ((L = o), ja(o), (o = o.sibling));
          ((L = l), (El = u), (Ae = h));
        }
        Pa(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), (L = o)) : Pa(e);
    }
  }
  function Pa(e) {
    for (; L !== null; ) {
      var t = L;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ae || Cl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ae)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : ht(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && Ts(t, o, r);
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
                  Ts(t, i, n);
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
                      var S = w.dehydrated;
                      S !== null && nr(S);
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
          Ae || (t.flags & 512 && Ni(t));
        } catch (y) {
          _e(t, t.return, y);
        }
      }
      if (t === e) {
        L = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (L = n));
        break;
      }
      L = t.return;
    }
  }
  function Ta(e) {
    for (; L !== null; ) {
      var t = L;
      if (t === e) {
        L = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (L = n));
        break;
      }
      L = t.return;
    }
  }
  function La(e) {
    for (; L !== null; ) {
      var t = L;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Cl(4, t);
            } catch (s) {
              _e(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                _e(t, l, s);
              }
            }
            var o = t.return;
            try {
              Ni(t);
            } catch (s) {
              _e(t, o, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              Ni(t);
            } catch (s) {
              _e(t, i, s);
            }
        }
      } catch (s) {
        _e(t, t.return, s);
      }
      if (t === e) {
        L = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        ((u.return = t.return), (L = u));
        break;
      }
      L = t.return;
    }
  }
  var $f = Math.ceil,
    Nl = Z.ReactCurrentDispatcher,
    Ti = Z.ReactCurrentOwner,
    at = Z.ReactCurrentBatchConfig,
    ne = 0,
    Te = null,
    Ee = null,
    Re = 0,
    tt = 0,
    Hn = Vt(0),
    Ne = 0,
    Cr = null,
    pn = 0,
    jl = 0,
    Li = 0,
    Nr = null,
    Ge = null,
    Oi = 0,
    Wn = 1 / 0,
    Rt = null,
    Pl = !1,
    zi = null,
    Xt = null,
    Tl = !1,
    Jt = null,
    Ll = 0,
    jr = 0,
    Ri = null,
    Ol = -1,
    zl = 0;
  function We() {
    return (ne & 6) !== 0 ? ke() : Ol !== -1 ? Ol : (Ol = ke());
  }
  function Zt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ne & 2) !== 0 && Re !== 0
        ? Re & -Re
        : Nf.transition !== null
          ? (zl === 0 && (zl = xu()), zl)
          : ((e = se), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : zu(e.type))), e);
  }
  function gt(e, t, n, r) {
    if (50 < jr) throw ((jr = 0), (Ri = null), Error(c(185)));
    (Jn(e, n, r),
      ((ne & 2) === 0 || e !== Te) &&
        (e === Te && ((ne & 2) === 0 && (jl |= n), Ne === 4 && bt(e, Re)),
        Ke(e, r),
        n === 1 && ne === 0 && (t.mode & 1) === 0 && ((Wn = ke() + 500), il && Gt())));
  }
  function Ke(e, t) {
    var n = e.callbackNode;
    Cc(e, t);
    var r = Hr(e, e === Te ? Re : 0);
    if (r === 0) (n !== null && Su(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Su(n), t === 1))
        (e.tag === 0 ? Cf(za.bind(null, e)) : ys(za.bind(null, e)),
          _f(function () {
            (ne & 6) === 0 && Gt();
          }),
          (n = null));
      else {
        switch (Eu(r)) {
          case 1:
            n = fo;
            break;
          case 4:
            n = _u;
            break;
          case 16:
            n = Dr;
            break;
          case 536870912:
            n = ku;
            break;
          default:
            n = Dr;
        }
        n = Ua(n, Oa.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Oa(e, t) {
    if (((Ol = -1), (zl = 0), (ne & 6) !== 0)) throw Error(c(327));
    var n = e.callbackNode;
    if ($n() && e.callbackNode !== n) return null;
    var r = Hr(e, e === Te ? Re : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Rl(e, r);
    else {
      t = r;
      var l = ne;
      ne |= 2;
      var o = Ia();
      (Te !== e || Re !== t) && ((Rt = null), (Wn = ke() + 500), hn(e, t));
      do
        try {
          Gf();
          break;
        } catch (u) {
          Ra(e, u);
        }
      while (!0);
      (Jo(), (Nl.current = o), (ne = l), Ee !== null ? (t = 0) : ((Te = null), (Re = 0), (t = Ne)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = po(e)), l !== 0 && ((r = l), (t = Ii(e, l)))), t === 1))
        throw ((n = Cr), hn(e, 0), bt(e, r), Ke(e, ke()), n);
      if (t === 6) bt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Vf(l) &&
            ((t = Rl(e, r)),
            t === 2 && ((o = po(e)), o !== 0 && ((r = o), (t = Ii(e, o)))),
            t === 1))
        )
          throw ((n = Cr), hn(e, 0), bt(e, r), Ke(e, ke()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            vn(e, Ge, Rt);
            break;
          case 3:
            if ((bt(e, r), (r & 130023424) === r && ((t = Oi + 500 - ke()), 10 < t))) {
              if (Hr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (We(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = Uo(vn.bind(null, e, Ge, Rt), t);
              break;
            }
            vn(e, Ge, Rt);
            break;
          case 4:
            if ((bt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - dt(r);
              ((o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o));
            }
            if (
              ((r = l),
              (r = ke() - r),
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
                            : 1960 * $f(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Uo(vn.bind(null, e, Ge, Rt), r);
              break;
            }
            vn(e, Ge, Rt);
            break;
          case 5:
            vn(e, Ge, Rt);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return (Ke(e, ke()), e.callbackNode === n ? Oa.bind(null, e) : null);
  }
  function Ii(e, t) {
    var n = Nr;
    return (
      e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
      (e = Rl(e, t)),
      e !== 2 && ((t = Ge), (Ge = n), t !== null && Mi(t)),
      e
    );
  }
  function Mi(e) {
    Ge === null ? (Ge = e) : Ge.push.apply(Ge, e);
  }
  function Vf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!pt(o(), l)) return !1;
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
      t &= ~Li, t &= ~jl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - dt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function za(e) {
    if ((ne & 6) !== 0) throw Error(c(327));
    $n();
    var t = Hr(e, 0);
    if ((t & 1) === 0) return (Ke(e, ke()), null);
    var n = Rl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = po(e);
      r !== 0 && ((t = r), (n = Ii(e, r)));
    }
    if (n === 1) throw ((n = Cr), hn(e, 0), bt(e, t), Ke(e, ke()), n);
    if (n === 6) throw Error(c(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      vn(e, Ge, Rt),
      Ke(e, ke()),
      null
    );
  }
  function Fi(e, t) {
    var n = ne;
    ne |= 1;
    try {
      return e(t);
    } finally {
      ((ne = n), ne === 0 && ((Wn = ke() + 500), il && Gt()));
    }
  }
  function mn(e) {
    Jt !== null && Jt.tag === 0 && (ne & 6) === 0 && $n();
    var t = ne;
    ne |= 1;
    var n = at.transition,
      r = se;
    try {
      if (((at.transition = null), (se = 1), e)) return e();
    } finally {
      ((se = r), (at.transition = n), (ne = t), (ne & 6) === 0 && Gt());
    }
  }
  function Di() {
    ((tt = Hn.current), me(Hn));
  }
  function hn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Sf(n)), Ee !== null))
      for (n = Ee.return; n !== null; ) {
        var r = n;
        switch ((Go(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && ll());
            break;
          case 3:
            (An(), me($e), me(Me), oi());
            break;
          case 5:
            ri(r);
            break;
          case 4:
            An();
            break;
          case 13:
            me(we);
            break;
          case 19:
            me(we);
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
      ((Te = e),
      (Ee = e = en(e.current, null)),
      (Re = tt = t),
      (Ne = 0),
      (Cr = null),
      (Li = jl = pn = 0),
      (Ge = Nr = null),
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
      var n = Ee;
      try {
        if ((Jo(), (vl.current = Sl), yl)) {
          for (var r = Se.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          yl = !1;
        }
        if (
          ((dn = 0),
          (Pe = Ce = Se = null),
          (wr = !1),
          (Sr = 0),
          (Ti.current = null),
          n === null || n.return === null)
        ) {
          ((Ne = 1), (Cr = t), (Ee = null));
          break;
        }
        e: {
          var o = e,
            i = n.return,
            u = n,
            s = t;
          if (
            ((t = Re),
            (u.flags |= 32768),
            s !== null && typeof s == 'object' && typeof s.then == 'function')
          ) {
            var h = s,
              w = u,
              S = w.tag;
            if ((w.mode & 1) === 0 && (S === 0 || S === 11 || S === 15)) {
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
          } else if (ye && u.mode & 1) {
            var xe = la(i);
            if (xe !== null) {
              ((xe.flags & 65536) === 0 && (xe.flags |= 256), oa(xe, i, u, o, t), qo(Bn(s, u)));
              break e;
            }
          }
          ((o = s = Bn(s, u)),
            Ne !== 4 && (Ne = 2),
            Nr === null ? (Nr = [o]) : Nr.push(o),
            (o = i));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var d = ta(o, s, t);
                Ps(o, d);
                break e;
              case 1:
                u = s;
                var a = o.type,
                  p = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof a.getDerivedStateFromError == 'function' ||
                    (p !== null &&
                      typeof p.componentDidCatch == 'function' &&
                      (Xt === null || !Xt.has(p))))
                ) {
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var x = na(o, u, t);
                  Ps(o, x);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Fa(n);
      } catch (F) {
        ((t = F), Ee === n && n !== null && (Ee = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Ia() {
    var e = Nl.current;
    return ((Nl.current = Sl), e === null ? Sl : e);
  }
  function Ai() {
    ((Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4),
      Te === null || ((pn & 268435455) === 0 && (jl & 268435455) === 0) || bt(Te, Re));
  }
  function Rl(e, t) {
    var n = ne;
    ne |= 2;
    var r = Ia();
    (Te !== e || Re !== t) && ((Rt = null), hn(e, t));
    do
      try {
        Qf();
        break;
      } catch (l) {
        Ra(e, l);
      }
    while (!0);
    if ((Jo(), (ne = n), (Nl.current = r), Ee !== null)) throw Error(c(261));
    return ((Te = null), (Re = 0), Ne);
  }
  function Qf() {
    for (; Ee !== null; ) Ma(Ee);
  }
  function Gf() {
    for (; Ee !== null && !vc(); ) Ma(Ee);
  }
  function Ma(e) {
    var t = Ba(e.alternate, e, tt);
    ((e.memoizedProps = e.pendingProps), t === null ? Fa(e) : (Ee = t), (Ti.current = null));
  }
  function Fa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Af(n, t, tt)), n !== null)) {
          Ee = n;
          return;
        }
      } else {
        if (((n = Bf(n, t)), n !== null)) {
          ((n.flags &= 32767), (Ee = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Ne = 6), (Ee = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ee = t;
        return;
      }
      Ee = t = e;
    } while (t !== null);
    Ne === 0 && (Ne = 5);
  }
  function vn(e, t, n) {
    var r = se,
      l = at.transition;
    try {
      ((at.transition = null), (se = 1), Kf(e, t, n, r));
    } finally {
      ((at.transition = l), (se = r));
    }
    return null;
  }
  function Kf(e, t, n, r) {
    do $n();
    while (Jt !== null);
    if ((ne & 6) !== 0) throw Error(c(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(c(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = n.lanes | n.childLanes;
    if (
      (Nc(e, o),
      e === Te && ((Ee = Te = null), (Re = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Tl ||
        ((Tl = !0),
        Ua(Dr, function () {
          return ($n(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = at.transition), (at.transition = null));
      var i = se;
      se = 1;
      var u = ne;
      ((ne |= 4),
        (Ti.current = null),
        Hf(e, n),
        Na(n, e),
        pf(Ao),
        (Vr = !!Do),
        (Ao = Do = null),
        (e.current = n),
        Wf(n),
        yc(),
        (ne = u),
        (se = i),
        (at.transition = o));
    } else e.current = n;
    if (
      (Tl && ((Tl = !1), (Jt = e), (Ll = l)),
      (o = e.pendingLanes),
      o === 0 && (Xt = null),
      Sc(n.stateNode),
      Ke(e, ke()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (Pl) throw ((Pl = !1), (e = zi), (zi = null), e);
    return (
      (Ll & 1) !== 0 && e.tag !== 0 && $n(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === Ri ? jr++ : ((jr = 0), (Ri = e))) : (jr = 0),
      Gt(),
      null
    );
  }
  function $n() {
    if (Jt !== null) {
      var e = Eu(Ll),
        t = at.transition,
        n = se;
      try {
        if (((at.transition = null), (se = 16 > e ? 16 : e), Jt === null)) var r = !1;
        else {
          if (((e = Jt), (Jt = null), (Ll = 0), (ne & 6) !== 0)) throw Error(c(331));
          var l = ne;
          for (ne |= 4, L = e.current; L !== null; ) {
            var o = L,
              i = o.child;
            if ((L.flags & 16) !== 0) {
              var u = o.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var h = u[s];
                  for (L = h; L !== null; ) {
                    var w = L;
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Er(8, w, o);
                    }
                    var S = w.child;
                    if (S !== null) ((S.return = w), (L = S));
                    else
                      for (; L !== null; ) {
                        w = L;
                        var y = w.sibling,
                          P = w.return;
                        if ((_a(w), w === h)) {
                          L = null;
                          break;
                        }
                        if (y !== null) {
                          ((y.return = P), (L = y));
                          break;
                        }
                        L = P;
                      }
                  }
                }
                var z = o.alternate;
                if (z !== null) {
                  var I = z.child;
                  if (I !== null) {
                    z.child = null;
                    do {
                      var xe = I.sibling;
                      ((I.sibling = null), (I = xe));
                    } while (I !== null);
                  }
                }
                L = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null) ((i.return = o), (L = i));
            else
              e: for (; L !== null; ) {
                if (((o = L), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(9, o, o.return);
                  }
                var d = o.sibling;
                if (d !== null) {
                  ((d.return = o.return), (L = d));
                  break e;
                }
                L = o.return;
              }
          }
          var a = e.current;
          for (L = a; L !== null; ) {
            i = L;
            var p = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && p !== null) ((p.return = i), (L = p));
            else
              e: for (i = a; L !== null; ) {
                if (((u = L), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Cl(9, u);
                    }
                  } catch (F) {
                    _e(u, u.return, F);
                  }
                if (u === i) {
                  L = null;
                  break e;
                }
                var x = u.sibling;
                if (x !== null) {
                  ((x.return = u.return), (L = x));
                  break e;
                }
                L = u.return;
              }
          }
          if (((ne = l), Gt(), _t && typeof _t.onPostCommitFiberRoot == 'function'))
            try {
              _t.onPostCommitFiberRoot(Ar, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((se = n), (at.transition = t));
      }
    }
    return !1;
  }
  function Da(e, t, n) {
    ((t = Bn(n, t)),
      (t = ta(e, t, 1)),
      (e = Yt(e, t, 1)),
      (t = We()),
      e !== null && (Jn(e, 1, t), Ke(e, t)));
  }
  function _e(e, t, n) {
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
            ((e = Bn(n, e)),
              (e = na(t, e, 1)),
              (t = Yt(t, e, 1)),
              (e = We()),
              t !== null && (Jn(t, 1, e), Ke(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Yf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = We()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Te === e &&
        (Re & n) === n &&
        (Ne === 4 || (Ne === 3 && (Re & 130023424) === Re && 500 > ke() - Oi)
          ? hn(e, 0)
          : (Li |= n)),
      Ke(e, t));
  }
  function Aa(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Ur), (Ur <<= 1), (Ur & 130023424) === 0 && (Ur = 4194304)));
    var n = We();
    ((e = Lt(e, t)), e !== null && (Jn(e, t, n), Ke(e, n)));
  }
  function qf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Aa(e, n));
  }
  function Xf(e, t) {
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
      if (e.memoizedProps !== t.pendingProps || $e.current) Qe = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Qe = !1), Df(e, t, n));
        Qe = (e.flags & 131072) !== 0;
      }
    else ((Qe = !1), ye && (t.flags & 1048576) !== 0 && gs(t, sl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (xl(e, t), (e = t.pendingProps));
        var l = On(t, Me.current);
        (Dn(t, n), (l = si(null, t, r, e, l, n)));
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
              Ve(r) ? ((o = !0), ol(t)) : (o = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              ti(t),
              (l.updater = _l),
              (t.stateNode = l),
              (l._reactInternals = t),
              hi(t, r, e, n),
              (t = wi(null, t, r, !0, o, n)))
            : ((t.tag = 0), ye && o && Qo(t), He(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (xl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Zf(r)),
            (e = ht(r, e)),
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
              t = ua(null, t, r, ht(r.type, e), n);
              break e;
          }
          throw Error(c(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ht(r, l)),
          gi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ht(r, l)),
          fa(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((da(t), e === null)) throw Error(c(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            js(e, t),
            ml(t, r, null, n));
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
              ((l = Bn(Error(c(423)), t)), (t = pa(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Bn(Error(c(424)), t)), (t = pa(e, t, r, n, l)));
              break e;
            } else
              for (
                et = $t(t.stateNode.containerInfo.firstChild),
                  be = t,
                  ye = !0,
                  mt = null,
                  n = Cs(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((In(), r === l)) {
              t = zt(e, t, n);
              break e;
            }
            He(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ls(t),
          e === null && Yo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          Bo(r, l) ? (i = null) : o !== null && Bo(r, o) && (t.flags |= 32),
          ca(e, t),
          He(e, t, i, n),
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
          e === null ? (t.child = Mn(t, null, r, n)) : He(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ht(r, l)),
          ia(e, t, r, l, n)
        );
      case 7:
        return (He(e, t, t.pendingProps, n), t.child);
      case 8:
        return (He(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (He(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (i = l.value),
            ce(fl, r._currentValue),
            (r._currentValue = i),
            o !== null)
          )
            if (pt(o.value, i)) {
              if (o.children === l.children && !$e.current) {
                t = zt(e, t, n);
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
                        ((s = Ot(-1, n & -n)), (s.tag = 2));
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
          (He(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Dn(t, n),
          (l = ut(l)),
          (r = r(l)),
          (t.flags |= 1),
          He(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = ht(r, t.pendingProps)), (l = ht(r.type, l)), ua(e, t, r, l, n));
      case 15:
        return sa(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ht(r, l)),
          xl(e, t),
          (t.tag = 1),
          Ve(r) ? ((e = !0), ol(t)) : (e = !1),
          Dn(t, n),
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
  function Jf(e, t, n, r) {
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
  function ct(e, t, n, r) {
    return new Jf(e, t, n, r);
  }
  function Bi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Zf(e) {
    if (typeof e == 'function') return Bi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === rt)) return 11;
      if (e === lt) return 14;
    }
    return 2;
  }
  function en(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ct(e.tag, t, e.key, e.mode)),
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
  function Il(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == 'function')) Bi(e) && (i = 1);
    else if (typeof e == 'string') i = 5;
    else
      e: switch (e) {
        case de:
          return yn(n.children, l, o, t);
        case je:
          ((i = 8), (l |= 8));
          break;
        case Be:
          return ((e = ct(12, n, t, l | 2)), (e.elementType = Be), (e.lanes = o), e);
        case Ue:
          return ((e = ct(13, n, t, l)), (e.elementType = Ue), (e.lanes = o), e);
        case Xe:
          return ((e = ct(19, n, t, l)), (e.elementType = Xe), (e.lanes = o), e);
        case he:
          return Ml(n, l, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case qe:
                i = 10;
                break e;
              case St:
                i = 9;
                break e;
              case rt:
                i = 11;
                break e;
              case lt:
                i = 14;
                break e;
              case Ie:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(c(130, e == null ? e : typeof e, ''));
      }
    return ((t = ct(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
  }
  function yn(e, t, n, r) {
    return ((e = ct(7, e, r, t)), (e.lanes = n), e);
  }
  function Ml(e, t, n, r) {
    return (
      (e = ct(22, e, r, t)),
      (e.elementType = he),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ui(e, t, n) {
    return ((e = ct(6, e, null, t)), (e.lanes = n), e);
  }
  function Hi(e, t, n) {
    return (
      (t = ct(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function bf(e, t, n, r, l) {
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
      (e = new bf(e, t, n, u, s)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = ct(3, null, null, t)),
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
  function ed(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Q,
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
            if (Ve(t.type)) {
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
      if (Ve(n)) return hs(e, n, t);
    }
    return t;
  }
  function Wa(e, t, n, r, l, o, i, u, s) {
    return (
      (e = Wi(n, r, !0, e, l, o, i, u, s)),
      (e.context = Ha(null)),
      (n = e.current),
      (r = We()),
      (l = Zt(n)),
      (o = Ot(r, l)),
      (o.callback = t ?? null),
      Yt(n, o, l),
      (e.current.lanes = l),
      Jn(e, l, r),
      Ke(e, r),
      e
    );
  }
  function Fl(e, t, n, r) {
    var l = t.current,
      o = We(),
      i = Zt(l);
    return (
      (n = Ha(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ot(o, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Yt(l, t, i)),
      e !== null && (gt(e, l, i, o), pl(e, l, i)),
      i
    );
  }
  function Dl(e) {
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
  function td() {
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
  ((Al.prototype.render = Vi.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      Fl(e, t, null, null);
    }),
    (Al.prototype.unmount = Vi.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (mn(function () {
            Fl(null, e, null, null);
          }),
            (t[Nt] = null));
        }
      }));
  function Al(e) {
    this._internalRoot = e;
  }
  Al.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ju();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++);
      (Ut.splice(n, 0, e), n === 0 && Lu(e));
    }
  };
  function Qi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Bl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Qa() {}
  function nd(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var h = Dl(i);
          o.call(h);
        };
      }
      var i = Wa(t, r, e, 0, null, !1, !1, '', Qa);
      return (
        (e._reactRootContainer = i),
        (e[Nt] = i.current),
        fr(e.nodeType === 8 ? e.parentNode : e),
        mn(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var u = r;
      r = function () {
        var h = Dl(s);
        u.call(h);
      };
    }
    var s = Wi(e, 0, !1, null, null, !1, !1, '', Qa);
    return (
      (e._reactRootContainer = s),
      (e[Nt] = s.current),
      fr(e.nodeType === 8 ? e.parentNode : e),
      mn(function () {
        Fl(t, s, n, r);
      }),
      s
    );
  }
  function Ul(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == 'function') {
        var u = l;
        l = function () {
          var s = Dl(i);
          u.call(s);
        };
      }
      Fl(t, i, e, l);
    } else i = nd(n, t, e, l, r);
    return Dl(i);
  }
  ((Cu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Xn(t.pendingLanes);
          n !== 0 && (ho(t, n | 1), Ke(t, ke()), (ne & 6) === 0 && ((Wn = ke() + 500), Gt()));
        }
        break;
      case 13:
        (mn(function () {
          var r = Lt(e, 1);
          if (r !== null) {
            var l = We();
            gt(r, e, 1, l);
          }
        }),
          $i(e, 1));
    }
  }),
    (vo = function (e) {
      if (e.tag === 13) {
        var t = Lt(e, 134217728);
        if (t !== null) {
          var n = We();
          gt(t, e, 134217728, n);
        }
        $i(e, 134217728);
      }
    }),
    (Nu = function (e) {
      if (e.tag === 13) {
        var t = Zt(e),
          n = Lt(e, t);
        if (n !== null) {
          var r = We();
          gt(n, e, t, r);
        }
        $i(e, t);
      }
    }),
    (ju = function () {
      return se;
    }),
    (Pu = function (e, t) {
      var n = se;
      try {
        return ((se = e), t());
      } finally {
        se = n;
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
                var l = rl(r);
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
          ((t = n.value), t != null && wn(e, !!n.multiple, t, !1));
      }
    }),
    (du = Fi),
    (pu = mn));
  var rd = { usingClientEntryPoint: !1, Events: [mr, Tn, rl, cu, fu, Fi] },
    Pr = {
      findFiberByHostInstance: on,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    ld = {
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
      currentDispatcherRef: Z.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = yu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Pr.findFiberByHostInstance || td,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Hl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hl.isDisabled && Hl.supportsFiber)
      try {
        ((Ar = Hl.inject(ld)), (_t = Hl));
      } catch {}
  }
  return (
    (Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rd),
    (Ye.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Qi(t)) throw Error(c(200));
      return ed(e, t, null, n);
    }),
    (Ye.createRoot = function (e, t) {
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
        (e[Nt] = t.current),
        fr(e.nodeType === 8 ? e.parentNode : e),
        new Vi(t)
      );
    }),
    (Ye.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(c(188))
          : ((e = Object.keys(e).join(',')), Error(c(268, e)));
      return ((e = yu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Ye.flushSync = function (e) {
      return mn(e);
    }),
    (Ye.hydrate = function (e, t, n) {
      if (!Bl(t)) throw Error(c(200));
      return Ul(null, e, t, !0, n);
    }),
    (Ye.hydrateRoot = function (e, t, n) {
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
        (e[Nt] = t.current),
        fr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Al(t);
    }),
    (Ye.render = function (e, t, n) {
      if (!Bl(t)) throw Error(c(200));
      return Ul(null, e, t, !1, n);
    }),
    (Ye.unmountComponentAtNode = function (e) {
      if (!Bl(e)) throw Error(c(40));
      return e._reactRootContainer
        ? (mn(function () {
            Ul(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Nt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Ye.unstable_batchedUpdates = Fi),
    (Ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Bl(n)) throw Error(c(200));
      if (e == null || e._reactInternals === void 0) throw Error(c(38));
      return Ul(e, t, n, !1, r);
    }),
    (Ye.version = '18.3.1-next-f1338f8080-20240426'),
    Ye
  );
}
var ba;
function dd() {
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
  return (g(), (Yi.exports = fd()), Yi.exports);
}
var ec;
function pd() {
  if (ec) return Wl;
  ec = 1;
  var g = dd();
  return ((Wl.createRoot = g.createRoot), (Wl.hydrateRoot = g.hydrateRoot), Wl);
}
var md = pd();
const oc = ({ subtitle: g }) =>
    m.jsxs('header', {
      className: 'header',
      children: [
        m.jsx('div', { className: 'header-title', children: 'Moral Parliament' }),
        g && m.jsx('div', { className: 'header-subtitle', children: g }),
      ],
    }),
  hd = '_container_11wow_3',
  vd = '_heading_11wow_8',
  yd = '_headingEmphasis_11wow_16',
  gd = '_intro_11wow_24',
  wd = '_infoBox_11wow_32',
  Sd = '_infoBoxLabel_11wow_40',
  _d = '_infoBoxGrid_11wow_47',
  kd = '_infoBoxItem_11wow_54',
  It = {
    container: hd,
    heading: vd,
    headingEmphasis: yd,
    intro: gd,
    infoBox: wd,
    infoBoxLabel: Sd,
    infoBoxGrid: _d,
    infoBoxItem: kd,
  },
  xd = ({ onStart: g }) =>
    m.jsxs('div', {
      className: 'screen',
      children: [
        m.jsx(oc, { subtitle: '~3 minutes' }),
        m.jsx('main', {
          className: 'screen-main',
          children: m.jsxs('div', {
            className: It.container,
            children: [
              m.jsxs('h1', {
                className: It.heading,
                children: [
                  'Where Should Your',
                  m.jsx('br', {}),
                  m.jsx('span', { className: It.headingEmphasis, children: 'Giving Go?' }),
                ],
              }),
              m.jsx('p', {
                className: It.intro,
                children:
                  'Uncertain about your ethical views? This tool helps you allocate resources across different causes based on your moral credences—the probabilities you assign to different ethical perspectives.',
              }),
              m.jsx('button', {
                onClick: g,
                className: 'btn btn-primary',
                children: 'Start Quiz →',
              }),
              m.jsxs('div', {
                className: It.infoBox,
                children: [
                  m.jsx('div', { className: It.infoBoxLabel, children: "You'll be asked about:" }),
                  m.jsxs('div', {
                    className: It.infoBoxGrid,
                    children: [
                      m.jsx('div', {
                        className: It.infoBoxItem,
                        children: '🐾 Animal vs. Human welfare',
                      }),
                      m.jsx('div', {
                        className: It.infoBoxItem,
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
    m.jsx('div', {
      className: 'progress-container',
      children: m.jsx('div', {
        className: 'progress-track',
        children: m.jsx('div', { className: 'progress-fill', style: { width: `${g}%` } }),
      }),
    });
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cd = (g) => g.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  ic = (...g) =>
    g
      .filter((_, c, M) => !!_ && _.trim() !== '' && M.indexOf(_) === c)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Nd = {
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
 */ const jd = ge.forwardRef(
  (
    {
      color: g = 'currentColor',
      size: _ = 24,
      strokeWidth: c = 2,
      absoluteStrokeWidth: M,
      className: k = '',
      children: E,
      iconNode: O,
      ...D
    },
    N
  ) =>
    ge.createElement(
      'svg',
      {
        ref: N,
        ...Nd,
        width: _,
        height: _,
        stroke: g,
        strokeWidth: M ? (Number(c) * 24) / Number(_) : c,
        className: ic('lucide', k),
        ...D,
      },
      [...O.map(([A, j]) => ge.createElement(A, j)), ...(Array.isArray(E) ? E : [E])]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ql = (g, _) => {
  const c = ge.forwardRef(({ className: M, ...k }, E) =>
    ge.createElement(jd, { ref: E, iconNode: _, className: ic(`lucide-${Cd(g)}`, M), ...k })
  );
  return ((c.displayName = `${g}`), c);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pd = Ql('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Td = Ql('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uc = Ql('RotateCcw', [
  ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
  ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ld = Ql('SlidersVertical', [
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
  Od = '_modeToggle_modhv_3',
  zd = '_button_modhv_10',
  Rd = '_options_modhv_23',
  Id = '_active_modhv_29',
  Md = '_sliders_modhv_35',
  gn = { modeToggle: Od, button: zd, options: Rd, active: Id, sliders: Md },
  Fd = ({ mode: g, setMode: _ }) =>
    m.jsxs('div', {
      className: gn.modeToggle,
      children: [
        m.jsx('button', {
          onClick: () => _('options'),
          className: `${gn.button} ${gn.options} ${g === 'options' ? gn.active : ''}`,
          children: 'Pick One',
        }),
        m.jsxs('button', {
          onClick: () => _('sliders'),
          className: `${gn.button} ${gn.sliders} ${g === 'sliders' ? gn.active : ''}`,
          children: [m.jsx(Ld, { size: 14 }), 'Custom Mix'],
        }),
      ],
    }),
  Dd = '_optionButton_xv4xt_3',
  Ad = '_selected_xv4xt_20',
  Bd = '_content_xv4xt_34',
  Ud = '_textContent_xv4xt_40',
  Hd = '_label_xv4xt_44',
  Wd = '_description_xv4xt_56',
  $d = '_checkmark_xv4xt_62',
  Mt = {
    optionButton: Dd,
    default: '_default_xv4xt_15',
    selected: Ad,
    content: Bd,
    textContent: Ud,
    label: Hd,
    description: Wd,
    checkmark: $d,
  },
  Vd = ({
    label: g,
    description: _,
    optionKey: c,
    credences: M,
    setCredences: k,
    color: E,
    setInputMode: O,
  }) => {
    const D = M[c] === 100,
      N = () => {
        const A = { equal: 0, '10x': 0, '100x': 0 };
        ((A[c] = 100), k(A), O('options'));
      };
    return m.jsx('button', {
      onClick: N,
      className: `${Mt.optionButton} ${D ? Mt.selected : Mt.default}`,
      style: { '--option-color': E },
      children: m.jsxs('div', {
        className: Mt.content,
        children: [
          m.jsxs('div', {
            className: Mt.textContent,
            children: [
              m.jsx('div', { className: `${Mt.label} ${D ? Mt.selected : ''}`, children: g }),
              m.jsx('div', { className: Mt.description, children: _ }),
            ],
          }),
          D && m.jsx('div', { className: Mt.checkmark, children: '✓' }),
        ],
      }),
    });
  },
  Qd = '_credenceSlider_a2d02_4',
  Gd = '_header_a2d02_8',
  Kd = '_label_a2d02_15',
  Yd = '_description_a2d02_22',
  qd = '_value_a2d02_28',
  Xd = '_compactSlider_a2d02_48',
  Ft = { credenceSlider: Qd, header: Gd, label: Kd, description: Yd, value: qd, compactSlider: Xd },
  Jd = ({ label: g, description: _, value: c, onChange: M, color: k, credences: E }) => {
    const [O, D] = ge.useState(null),
      [N, A] = ge.useState(!1),
      j = () => {
        (A(!0), D({ ...E }));
      },
      W = (Y) => {
        A(!1);
        const K = parseFloat(Y.target.value);
        (M(K, O, !0), D(null));
      },
      R = (Y) => {
        const K = parseFloat(Y.target.value);
        M(K, O);
      };
    return m.jsxs('div', {
      className: Ft.credenceSlider,
      children: [
        m.jsxs('div', {
          className: Ft.header,
          children: [
            m.jsxs('div', {
              children: [
                m.jsx('div', { className: Ft.label, children: g }),
                m.jsx('div', { className: Ft.description, children: _ }),
              ],
            }),
            m.jsxs('div', {
              className: Ft.value,
              style: { color: k },
              children: [Math.round(c), '%'],
            }),
          ],
        }),
        m.jsx('input', {
          type: 'range',
          min: '0',
          max: '100',
          step: 'any',
          value: c,
          onChange: R,
          onMouseDown: j,
          onMouseUp: W,
          onMouseLeave: W,
          onTouchStart: j,
          onTouchEnd: W,
          'data-dragging': N,
          style: {
            background: `linear-gradient(to right, ${k} 0%, ${k} ${c}%, rgba(255,255,255,0.15) ${c}%, rgba(255,255,255,0.15) 100%)`,
          },
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
  Zd = [
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
  bd = [
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
  ep = [
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
  tp = [
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
  np = [
    { key: 'equal', label: 'Equal weight', short: 'Eq', color: '#81B29A' },
    { key: '10x', label: '10× less', short: '10×', color: '#98C1D9' },
    { key: '100x', label: '100× less', short: '100×', color: '#E07A5F' },
  ],
  rp = [
    { key: 'equal', label: 'Equal weight', short: 'Eq', color: '#81B29A' },
    { key: '10x', label: '10× less', short: '10×', color: '#98C1D9' },
    { key: '100x', label: '100× less', short: '100×', color: '#E07A5F' },
  ],
  lp = [
    { key: 'equal', label: 'Irrelevant', short: 'Eq', color: '#81B29A' },
    { key: '10x', label: 'Matters', short: '10×', color: '#98C1D9' },
    { key: '100x', label: 'Dominates', short: '100×', color: '#E07A5F' },
  ],
  op = [
    { key: 'equal', label: 'Equal weight', short: 'Eq', color: '#81B29A' },
    { key: '10x', label: '10× less', short: '10×', color: '#98C1D9' },
    { key: '100x', label: '100× less', short: '100×', color: '#E07A5F' },
  ],
  nn = { equal: 33, '10x': 33, '100x': 34 },
  Oe = {
    WELCOME: 'welcome',
    ANIMALS: 'animals',
    FUTURE: 'future',
    SCALE: 'scale',
    CERTAINTY: 'certainty',
    RESULTS: 'results',
  },
  rn = { OPTIONS: 'options' },
  Jl = (g, _, c, M, k) => {
    let E = g.points;
    return (
      g.helpsAnimals && (E *= _),
      g.helpsFutureHumans && (E *= c),
      (E *= Math.pow(g.scaleFactor, M)),
      g.isSpeculative && (E *= k),
      E
    );
  },
  tc = (g, _, c, M) => {
    const k = {};
    Object.entries(Gl).forEach(([O, D]) => {
      let N = 0;
      (Object.entries(g).forEach(([A, j]) => {
        Object.entries(_).forEach(([W, R]) => {
          Object.entries(c).forEach(([Y, K]) => {
            Object.entries(M).forEach(([B, V]) => {
              const fe = Kl[A],
                J = Yl[W],
                te = ql[Y],
                Z = Xl[B],
                re = (j / 100) * (R / 100) * (K / 100) * (V / 100),
                Q = Jl(D, fe, J, te, Z);
              N += re * Q;
            });
          });
        });
      }),
        (k[O] = N));
    });
    const E = Object.keys(k).reduce((O, D) => (k[O] > k[D] ? O : D));
    return {
      globalHealth: E === 'globalHealth' ? 100 : 0,
      animalWelfare: E === 'animalWelfare' ? 100 : 0,
      gcr: E === 'gcr' ? 100 : 0,
      evs: k,
    };
  },
  nc = (g, _, c, M) => {
    const k = { globalHealth: 0, animalWelfare: 0, gcr: 0 };
    return (
      Object.entries(g).forEach(([E, O]) => {
        Object.entries(_).forEach(([D, N]) => {
          Object.entries(c).forEach(([A, j]) => {
            Object.entries(M).forEach(([W, R]) => {
              const Y = (O / 100) * (N / 100) * (j / 100) * (R / 100),
                K = Kl[E],
                B = Yl[D],
                V = ql[A],
                fe = Xl[W],
                J = {};
              Object.entries(Gl).forEach(([Q, de]) => {
                J[Q] = Jl(de, K, B, V, fe);
              });
              const te = Math.max(...Object.values(J)),
                Z = Object.keys(J).filter((Q) => Math.abs(J[Q] - te) < 1e-4),
                re = Y / Z.length;
              Z.forEach((Q) => {
                k[Q] += re;
              });
            });
          });
        });
      }),
      { globalHealth: k.globalHealth * 100, animalWelfare: k.animalWelfare * 100, gcr: k.gcr * 100 }
    );
  },
  rc = (g, _, c, M) => {
    const k = { globalHealth: 0, animalWelfare: 0, gcr: 0 };
    return (
      Object.entries(g).forEach(([E, O]) => {
        Object.entries(_).forEach(([D, N]) => {
          Object.entries(c).forEach(([A, j]) => {
            Object.entries(M).forEach(([W, R]) => {
              const Y = (O / 100) * (N / 100) * (j / 100) * (R / 100),
                K = Kl[E],
                B = Yl[D],
                V = ql[A],
                fe = Xl[W],
                J = {};
              Object.entries(Gl).forEach(([Q, de]) => {
                J[Q] = Jl(de, K, B, V, fe);
              });
              const te = Math.max(...Object.values(J)),
                Z = Object.keys(J).filter((Q) => Math.abs(J[Q] - te) < 1e-4),
                re = (Y * 100) / Z.length;
              Z.forEach((Q) => {
                k[Q] += re;
              });
            });
          });
        });
      }),
      { globalHealth: k.globalHealth, animalWelfare: k.animalWelfare, gcr: k.gcr }
    );
  },
  lc = (g, _, c, M) => {
    const k = [
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
    let E = k[0],
      O = -1 / 0;
    for (const D of k) {
      let N = 1 / 0;
      (Object.entries(g).forEach(([A, j]) => {
        Object.entries(_).forEach(([W, R]) => {
          Object.entries(c).forEach(([Y, K]) => {
            Object.entries(M).forEach(([B, V]) => {
              if ((j / 100) * (R / 100) * (K / 100) * (V / 100) < 0.001) return;
              const J = Kl[A],
                te = Yl[W],
                Z = ql[Y],
                re = Xl[B];
              let Q = 0;
              (Object.entries(Gl).forEach(([de, je]) => {
                const Be = Jl(je, J, te, Z, re);
                Q += Be * (D[de] / 100);
              }),
                (N = Math.min(N, Q)));
            });
          });
        });
      }),
        N > O && ((O = N), (E = { ...D })));
    }
    return { globalHealth: E.globalHealth, animalWelfare: E.animalWelfare, gcr: E.gcr };
  },
  Or = (g, _, c, M = null) => {
    _ = Math.max(0, Math.min(100, _));
    const k = M || c,
      E = Object.keys(c).filter((A) => A !== g),
      O = E.reduce((A, j) => A + k[j], 0),
      D = 100 - _,
      N = { [g]: _ };
    if (O === 0) {
      const A = Math.floor(D / E.length);
      let j = D - A * E.length;
      E.forEach((W, R) => {
        N[W] = A + (R < j ? 1 : 0);
      });
    } else {
      let A = 0;
      E.forEach((j, W) => {
        if (W === E.length - 1) N[j] = Math.max(0, D - A);
        else {
          const R = k[j] / O,
            Y = D * R;
          ((N[j] = Math.max(0, Y)), (A += N[j]));
        }
      });
    }
    return N;
  },
  sc = (g) => {
    const _ = Object.keys(g),
      c = {};
    let M = 0;
    return (
      _.slice(0, -1).forEach((k) => {
        ((c[k] = Math.round(g[k])), (M += c[k]));
      }),
      (c[_[_.length - 1]] = 100 - M),
      c
    );
  },
  ip = '_container_9yo3m_3',
  up = '_categoryLabel_9yo3m_8',
  sp = '_heading_9yo3m_16',
  ap = '_instructions_9yo3m_23',
  cp = '_buttonRow_9yo3m_30',
  Lr = { container: ip, categoryLabel: up, heading: sp, instructions: ap, buttonRow: cp },
  $l = ({
    categoryLabel: g,
    categoryColor: _,
    questionNumber: c,
    progressPercentage: M,
    heading: k,
    instructionsOptions: E,
    instructionsSliders: O,
    options: D,
    credences: N,
    setCredences: A,
    inputMode: j,
    setInputMode: W,
    onBack: R,
    onContinue: Y,
    adjustCredences: K,
  }) =>
    m.jsxs('div', {
      className: 'screen',
      children: [
        m.jsx(oc, { subtitle: c }),
        m.jsx(Ed, { percentage: M }),
        m.jsx('main', {
          className: 'screen-main',
          children: m.jsxs('div', {
            className: Lr.container,
            children: [
              m.jsx('div', { className: Lr.categoryLabel, style: { color: _ }, children: g }),
              m.jsx('h2', { className: Lr.heading, children: k }),
              m.jsx('p', { className: Lr.instructions, children: j === 'options' ? E : O }),
              m.jsx(Fd, { mode: j, setMode: W }),
              m.jsx('div', {
                className: 'card',
                children:
                  j === 'options'
                    ? m.jsx(m.Fragment, {
                        children: D.map((B) =>
                          m.jsx(
                            Vd,
                            {
                              label: B.label,
                              description: B.description,
                              optionKey: B.key,
                              credences: N,
                              setCredences: A,
                              color: B.color,
                              setInputMode: W,
                            },
                            B.key
                          )
                        ),
                      })
                    : m.jsx(m.Fragment, {
                        children: D.map((B) =>
                          m.jsx(
                            Jd,
                            {
                              label: B.label,
                              description: B.description,
                              value: N[B.key],
                              onChange: (V, fe, J) => {
                                const te = K(B.key, V, N, fe);
                                A(J ? sc(te) : te);
                              },
                              color: B.color,
                              credences: N,
                            },
                            B.key
                          )
                        ),
                      }),
              }),
              m.jsxs('div', {
                className: Lr.buttonRow,
                children: [
                  m.jsx('button', {
                    onClick: R,
                    className: 'btn btn-secondary',
                    children: '← Back',
                  }),
                  m.jsx('button', {
                    onClick: Y,
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
  fp = '_causeBar_aav23_3',
  dp = '_header_aav23_7',
  pp = '_name_aav23_15',
  mp = '_percentage_aav23_19',
  hp = '_changeIndicator_aav23_23',
  vp = '_up_aav23_27',
  yp = '_down_aav23_31',
  gp = '_barTrack_aav23_35',
  wp = '_barOriginal_aav23_43',
  Sp = '_barFill_aav23_49',
  _p = '_barLabel_aav23_58',
  wt = {
    causeBar: fp,
    header: dp,
    name: pp,
    percentage: mp,
    changeIndicator: hp,
    up: vp,
    down: yp,
    barTrack: gp,
    barOriginal: wp,
    barFill: Sp,
    barLabel: _p,
  },
  ft = ({ name: g, percentage: _, color: c, originalPercentage: M = null, hasChanged: k = !1 }) => {
    const E = k && M !== null && _ !== M,
      O = E && _ > M;
    return m.jsxs('div', {
      className: wt.causeBar,
      children: [
        m.jsxs('div', {
          className: wt.header,
          children: [
            m.jsx('span', { className: wt.name, children: g }),
            m.jsxs('span', {
              className: wt.percentage,
              style: { color: c },
              children: [
                _.toFixed(0),
                '%',
                E &&
                  m.jsx('span', {
                    className: `${wt.changeIndicator} ${O ? wt.up : wt.down}`,
                    children: O ? '↑' : '↓',
                  }),
              ],
            }),
          ],
        }),
        m.jsxs('div', {
          className: wt.barTrack,
          children: [
            E &&
              m.jsx('div', { className: wt.barOriginal, style: { width: `${M}%`, background: c } }),
            m.jsx('div', {
              className: wt.barFill,
              style: { width: `${_}%`, background: c },
              children:
                _ > 15 && m.jsxs('span', { className: wt.barLabel, children: [_.toFixed(0), '%'] }),
            }),
          ],
        }),
      ],
    });
  },
  kp = ({ label: g, value: _, onChange: c, color: M, credences: k }) => {
    const [E, O] = ge.useState(null),
      [D, N] = ge.useState(!1),
      A = () => {
        (N(!0), O({ ...k }));
      },
      j = (R) => {
        N(!1);
        const Y = parseFloat(R.target.value);
        (c(Y, E, !0), O(null));
      },
      W = (R) => {
        const Y = parseFloat(R.target.value);
        c(Y, E);
      };
    return m.jsxs('div', {
      className: Ft.compactSlider,
      children: [
        m.jsxs('div', {
          className: Ft.header,
          children: [
            m.jsx('span', { className: Ft.label, children: g }),
            m.jsxs('span', {
              className: Ft.value,
              style: { color: M },
              children: [Math.round(_), '%'],
            }),
          ],
        }),
        m.jsx('input', {
          type: 'range',
          min: '0',
          max: '100',
          step: 'any',
          value: _,
          onChange: W,
          onMouseDown: A,
          onMouseUp: j,
          onMouseLeave: j,
          onTouchStart: A,
          onTouchEnd: j,
          'data-dragging': D,
          style: {
            background: `linear-gradient(to right, ${M} 0%, ${M} ${_}%, rgb(51,65,85) ${_}%, rgb(51,65,85) 100%)`,
          },
        }),
      ],
    });
  },
  xp = '_editPanel_aogsc_3',
  Ep = '_expanded_aogsc_11',
  Cp = '_toggleButton_aogsc_16',
  Np = '_buttonContent_aogsc_33',
  jp = '_icon_aogsc_39',
  Pp = '_title_aogsc_43',
  Tp = '_modifiedBadge_aogsc_48',
  Lp = '_preview_aogsc_56',
  Op = '_chevron_aogsc_62',
  zp = '_content_aogsc_66',
  Rp = '_footer_aogsc_71',
  Ip = '_footerNote_aogsc_78',
  Mp = '_resetButton_aogsc_84',
  nt = {
    editPanel: xp,
    expanded: Ep,
    toggleButton: Cp,
    buttonContent: Np,
    icon: jp,
    title: Pp,
    modifiedBadge: Tp,
    preview: Lp,
    chevron: Op,
    content: zp,
    footer: Rp,
    footerNote: Ip,
    resetButton: Mp,
  },
  Vl = ({
    title: g,
    icon: _,
    credences: c,
    setCredences: M,
    originalCredences: k,
    configs: E,
    isExpanded: O,
    onToggle: D,
  }) => {
    const N = k && JSON.stringify(c) !== JSON.stringify(k),
      A = (j) => {
        (j.stopPropagation(), M({ ...k }));
      };
    return m.jsxs('div', {
      className: `${nt.editPanel} ${O ? nt.expanded : ''}`,
      children: [
        m.jsxs('button', {
          onClick: D,
          className: nt.toggleButton,
          children: [
            m.jsxs('div', {
              className: nt.buttonContent,
              children: [
                m.jsx('span', { className: nt.icon, children: _ }),
                m.jsx('span', { className: nt.title, children: g }),
                N && m.jsx('span', { className: nt.modifiedBadge, children: 'modified' }),
                !O &&
                  m.jsx('span', {
                    className: nt.preview,
                    children: E.map((j) => `${j.short}:${c[j.key]}%`).join(' '),
                  }),
              ],
            }),
            m.jsx('span', {
              className: nt.chevron,
              children: O ? m.jsx(Td, { size: 16 }) : m.jsx(Pd, { size: 16 }),
            }),
          ],
        }),
        O &&
          m.jsxs('div', {
            className: nt.content,
            children: [
              E.map((j) =>
                m.jsx(
                  kp,
                  {
                    label: j.label,
                    value: c[j.key],
                    onChange: (W, R, Y) => {
                      const K = Or(j.key, W, c, R);
                      M(Y ? sc(K) : K);
                    },
                    color: j.color,
                    credences: c,
                  },
                  j.key
                )
              ),
              m.jsxs('div', {
                className: nt.footer,
                children: [
                  m.jsx('span', {
                    className: nt.footerNote,
                    children: 'Sliders auto-balance to 100%',
                  }),
                  N &&
                    m.jsxs('button', {
                      onClick: A,
                      className: nt.resetButton,
                      children: [m.jsx(uc, { size: 10 }), ' Reset'],
                    }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  Fp = '_resultsContainer_7ijf6_3',
  Dp = '_inner_7ijf6_11',
  Ap = '_header_7ijf6_16',
  Bp = '_title_7ijf6_21',
  Up = '_modifiedIndicator_7ijf6_27',
  Hp = '_resultsGrid_7ijf6_34',
  Wp = '_resultCard_7ijf6_41',
  $p = '_cardHeader_7ijf6_48',
  Vp = '_cardIcon_7ijf6_55',
  Qp = '_maxEV_7ijf6_65',
  Gp = '_parliament_7ijf6_69',
  Kp = '_cardTitle_7ijf6_73',
  Yp = '_cardSubtitle_7ijf6_80',
  qp = '_cardFooter_7ijf6_86',
  Xp = '_adjustPanel_7ijf6_94',
  Jp = '_adjustHeader_7ijf6_102',
  Zp = '_adjustTitle_7ijf6_109',
  bp = '_resetAllButton_7ijf6_115',
  em = '_panelList_7ijf6_132',
  tm = '_backButtonContainer_7ijf6_138',
  nm = '_backButton_7ijf6_138',
  rm = '_resetButton_7ijf6_163',
  q = {
    resultsContainer: Fp,
    inner: Dp,
    header: Ap,
    title: Bp,
    modifiedIndicator: Up,
    resultsGrid: Hp,
    resultCard: Wp,
    cardHeader: $p,
    cardIcon: Vp,
    maxEV: Qp,
    parliament: Gp,
    cardTitle: Kp,
    cardSubtitle: Yp,
    cardFooter: qp,
    adjustPanel: Xp,
    adjustHeader: Jp,
    adjustTitle: Zp,
    resetAllButton: bp,
    panelList: em,
    backButtonContainer: tm,
    backButton: nm,
    resetButton: rm,
  },
  lm = ({
    animalCredences: g,
    setAnimalCredences: _,
    futureCredences: c,
    setFutureCredences: M,
    scaleCredences: k,
    setScaleCredences: E,
    certaintyCredences: O,
    setCertaintyCredences: D,
    originalAnimalCredences: N,
    originalFutureCredences: A,
    originalScaleCredences: j,
    originalCertaintyCredences: W,
    expandedPanel: R,
    setExpandedPanel: Y,
    maxEVResults: K,
    parliamentResults: B,
    mergedFavoritesResults: V,
    maximinResults: fe,
    originalMaxEV: J,
    originalParliament: te,
    originalMergedFavorites: Z,
    originalMaximin: re,
    hasChanged: Q,
    onResetAll: de,
    onResetQuiz: je,
    onBack: Be,
  }) => {
    const qe = () => {
      window.confirm(
        'Are you sure? This will clear all your answers and return to the beginning.'
      ) && je();
    };
    return m.jsx('div', {
      className: q.resultsContainer,
      children: m.jsxs('div', {
        className: q.inner,
        children: [
          m.jsx('div', {
            className: q.header,
            children: m.jsxs('h1', {
              className: q.title,
              children: [
                'Recommended Allocations',
                Q && m.jsx('span', { className: q.modifiedIndicator, children: '(modified)' }),
              ],
            }),
          }),
          m.jsxs('div', {
            className: q.resultsGrid,
            children: [
              m.jsxs('div', {
                className: q.resultCard,
                children: [
                  m.jsxs('div', {
                    className: q.cardHeader,
                    children: [
                      m.jsx('div', { className: `${q.cardIcon} ${q.maxEV}`, children: '🎯' }),
                      m.jsxs('div', {
                        children: [
                          m.jsx('h3', { className: q.cardTitle, children: 'Max Expected Value' }),
                          m.jsx('p', { className: q.cardSubtitle, children: '100% to highest EV' }),
                        ],
                      }),
                    ],
                  }),
                  m.jsx(ft, {
                    name: 'Global Health',
                    percentage: K.globalHealth,
                    originalPercentage: J == null ? void 0 : J.globalHealth,
                    color: 'var(--color-global-health)',
                    hasChanged: Q,
                  }),
                  m.jsx(ft, {
                    name: 'Animal Welfare',
                    percentage: K.animalWelfare,
                    originalPercentage: J == null ? void 0 : J.animalWelfare,
                    color: 'var(--color-animal-welfare)',
                    hasChanged: Q,
                  }),
                  m.jsx(ft, {
                    name: 'GCR (Future)',
                    percentage: K.gcr,
                    originalPercentage: J == null ? void 0 : J.gcr,
                    color: 'var(--color-gcr)',
                    hasChanged: Q,
                  }),
                  m.jsxs('div', {
                    className: q.cardFooter,
                    children: [
                      'EVs: GH ',
                      K.evs.globalHealth.toFixed(0),
                      ' · AW',
                      ' ',
                      K.evs.animalWelfare.toFixed(0),
                      ' · GCR ',
                      K.evs.gcr.toFixed(0),
                    ],
                  }),
                ],
              }),
              m.jsxs('div', {
                className: q.resultCard,
                children: [
                  m.jsxs('div', {
                    className: q.cardHeader,
                    children: [
                      m.jsx('div', { className: `${q.cardIcon} ${q.parliament}`, children: '🏛️' }),
                      m.jsxs('div', {
                        children: [
                          m.jsx('h3', { className: q.cardTitle, children: 'Variance Voting' }),
                          m.jsx('p', {
                            className: q.cardSubtitle,
                            children: 'Weighted worldview votes',
                          }),
                        ],
                      }),
                    ],
                  }),
                  m.jsx(ft, {
                    name: 'Global Health',
                    percentage: B.globalHealth,
                    originalPercentage: te == null ? void 0 : te.globalHealth,
                    color: 'var(--color-global-health)',
                    hasChanged: Q,
                  }),
                  m.jsx(ft, {
                    name: 'Animal Welfare',
                    percentage: B.animalWelfare,
                    originalPercentage: te == null ? void 0 : te.animalWelfare,
                    color: 'var(--color-animal-welfare)',
                    hasChanged: Q,
                  }),
                  m.jsx(ft, {
                    name: 'GCR (Future)',
                    percentage: B.gcr,
                    originalPercentage: te == null ? void 0 : te.gcr,
                    color: 'var(--color-gcr)',
                    hasChanged: Q,
                  }),
                  m.jsx('div', {
                    className: q.cardFooter,
                    children: '81 worldviews vote for preferred cause',
                  }),
                ],
              }),
              m.jsxs('div', {
                className: q.resultCard,
                children: [
                  m.jsxs('div', {
                    className: q.cardHeader,
                    children: [
                      m.jsx('div', { className: `${q.cardIcon} ${q.merged}`, children: '🤝' }),
                      m.jsxs('div', {
                        children: [
                          m.jsx('h3', { className: q.cardTitle, children: 'Merged Favorites' }),
                          m.jsx('p', {
                            className: q.cardSubtitle,
                            children: 'Budget shares to favorites',
                          }),
                        ],
                      }),
                    ],
                  }),
                  m.jsx(ft, {
                    name: 'Global Health',
                    percentage: V.globalHealth,
                    originalPercentage: Z == null ? void 0 : Z.globalHealth,
                    color: 'var(--color-global-health)',
                    hasChanged: Q,
                  }),
                  m.jsx(ft, {
                    name: 'Animal Welfare',
                    percentage: V.animalWelfare,
                    originalPercentage: Z == null ? void 0 : Z.animalWelfare,
                    color: 'var(--color-animal-welfare)',
                    hasChanged: Q,
                  }),
                  m.jsx(ft, {
                    name: 'GCR (Future)',
                    percentage: V.gcr,
                    originalPercentage: Z == null ? void 0 : Z.gcr,
                    color: 'var(--color-gcr)',
                    hasChanged: Q,
                  }),
                  m.jsx('div', {
                    className: q.cardFooter,
                    children: 'Each worldview allocates its budget share',
                  }),
                ],
              }),
              m.jsxs('div', {
                className: q.resultCard,
                children: [
                  m.jsxs('div', {
                    className: q.cardHeader,
                    children: [
                      m.jsx('div', { className: `${q.cardIcon} ${q.maximin}`, children: '⚖️' }),
                      m.jsxs('div', {
                        children: [
                          m.jsx('h3', {
                            className: q.cardTitle,
                            children: 'Maximin (Egalitarian)',
                          }),
                          m.jsx('p', {
                            className: q.cardSubtitle,
                            children: 'Fairest to all worldviews',
                          }),
                        ],
                      }),
                    ],
                  }),
                  m.jsx(ft, {
                    name: 'Global Health',
                    percentage: fe.globalHealth,
                    originalPercentage: re == null ? void 0 : re.globalHealth,
                    color: 'var(--color-global-health)',
                    hasChanged: Q,
                  }),
                  m.jsx(ft, {
                    name: 'Animal Welfare',
                    percentage: fe.animalWelfare,
                    originalPercentage: re == null ? void 0 : re.animalWelfare,
                    color: 'var(--color-animal-welfare)',
                    hasChanged: Q,
                  }),
                  m.jsx(ft, {
                    name: 'GCR (Future)',
                    percentage: fe.gcr,
                    originalPercentage: re == null ? void 0 : re.gcr,
                    color: 'var(--color-gcr)',
                    hasChanged: Q,
                  }),
                  m.jsx('div', {
                    className: q.cardFooter,
                    children: 'Maximizes minimum worldview utility',
                  }),
                ],
              }),
            ],
          }),
          m.jsxs('div', {
            className: q.adjustPanel,
            children: [
              m.jsxs('div', {
                className: q.adjustHeader,
                children: [
                  m.jsx('span', { className: q.adjustTitle, children: '🎛️ Adjust Your Credences' }),
                  Q &&
                    m.jsxs('button', {
                      onClick: de,
                      className: q.resetAllButton,
                      children: [m.jsx(uc, { size: 10 }), ' Reset All'],
                    }),
                ],
              }),
              m.jsxs('div', {
                className: q.panelList,
                children: [
                  m.jsx(Vl, {
                    title: 'Animal Values',
                    icon: '🐾',
                    credences: g,
                    setCredences: _,
                    originalCredences: N,
                    configs: np,
                    isExpanded: R === 'animals',
                    onToggle: () => Y(R === 'animals' ? null : 'animals'),
                  }),
                  m.jsx(Vl, {
                    title: 'Future Values',
                    icon: '⏳',
                    credences: c,
                    setCredences: M,
                    originalCredences: A,
                    configs: rp,
                    isExpanded: R === 'future',
                    onToggle: () => Y(R === 'future' ? null : 'future'),
                  }),
                  m.jsx(Vl, {
                    title: 'Scale Sensitivity',
                    icon: '📊',
                    credences: k,
                    setCredences: E,
                    originalCredences: j,
                    configs: lp,
                    isExpanded: R === 'scale',
                    onToggle: () => Y(R === 'scale' ? null : 'scale'),
                  }),
                  m.jsx(Vl, {
                    title: 'Evidence Preference',
                    icon: '🔬',
                    credences: O,
                    setCredences: D,
                    originalCredences: W,
                    configs: op,
                    isExpanded: R === 'certainty',
                    onToggle: () => Y(R === 'certainty' ? null : 'certainty'),
                  }),
                ],
              }),
            ],
          }),
          m.jsxs('div', {
            className: q.backButtonContainer,
            children: [
              m.jsx('button', { onClick: Be, className: q.backButton, children: '← Back to Quiz' }),
              m.jsx('button', { onClick: qe, className: q.resetButton, children: 'Start Over' }),
            ],
          }),
        ],
      }),
    });
  },
  om = () => {
    const [g, _] = ge.useState(Oe.WELCOME),
      [c, M] = ge.useState({ ...nn }),
      [k, E] = ge.useState({ ...nn }),
      [O, D] = ge.useState({ ...nn }),
      [N, A] = ge.useState({ ...nn }),
      [j, W] = ge.useState(null),
      [R, Y] = ge.useState(null),
      [K, B] = ge.useState(null),
      [V, fe] = ge.useState(null),
      [J, te] = ge.useState(null),
      [Z, re] = ge.useState(rn.OPTIONS),
      [Q, de] = ge.useState(rn.OPTIONS),
      [je, Be] = ge.useState(rn.OPTIONS),
      [qe, St] = ge.useState(rn.OPTIONS),
      rt = tc(c, k, O, N),
      Ue = nc(c, k, O, N),
      Xe = rc(c, k, O, N),
      lt = lc(c, k, O, N),
      Ie = j ? tc(j, R, K, V) : null,
      he = j ? nc(j, R, K, V) : null,
      C = j ? rc(j, R, K, V) : null,
      $ = j ? lc(j, R, K, V) : null,
      T =
        j &&
        (JSON.stringify(c) !== JSON.stringify(j) ||
          JSON.stringify(k) !== JSON.stringify(R) ||
          JSON.stringify(O) !== JSON.stringify(K) ||
          JSON.stringify(N) !== JSON.stringify(V)),
      f = () => {
        (M({ ...j }), E({ ...R }), D({ ...K }), A({ ...V }));
      },
      v = () => {
        (M({ ...nn }),
          E({ ...nn }),
          D({ ...nn }),
          A({ ...nn }),
          W(null),
          Y(null),
          B(null),
          fe(null),
          re(rn.OPTIONS),
          de(rn.OPTIONS),
          Be(rn.OPTIONS),
          St(rn.OPTIONS),
          te(null),
          _(Oe.WELCOME));
      },
      X = () => {
        (j || (W({ ...c }), Y({ ...k }), B({ ...O }), fe({ ...N })), _(Oe.RESULTS));
      };
    return g === Oe.WELCOME
      ? m.jsx(xd, { onStart: () => _(Oe.ANIMALS) })
      : g === Oe.ANIMALS
        ? m.jsx($l, {
            categoryLabel: 'Moral Weights',
            categoryColor: '#81B29A',
            questionNumber: 'Question 1 of 4',
            progressPercentage: 25,
            heading: 'How do you value animal welfare relative to human welfare?',
            instructionsOptions:
              'Choose the view that best represents your position, or use "Custom Mix" to split your credence.',
            instructionsSliders:
              'Distribute your credence (confidence) across these views. Sliders auto-balance to 100%.',
            options: Zd,
            credences: c,
            setCredences: M,
            inputMode: Z,
            setInputMode: re,
            onBack: () => _(Oe.WELCOME),
            onContinue: () => _(Oe.FUTURE),
            adjustCredences: Or,
          })
        : g === Oe.FUTURE
          ? m.jsx($l, {
              categoryLabel: 'Time Preference',
              categoryColor: '#81B29A',
              questionNumber: 'Question 2 of 4',
              progressPercentage: 50,
              heading: 'How do you value future human welfare relative to current human welfare?',
              instructionsOptions:
                'Choose the view that best represents your position, or use "Custom Mix" to split your credence.',
              instructionsSliders:
                'Distribute your credence across these views. Sliders auto-balance to 100%.',
              options: bd,
              credences: k,
              setCredences: E,
              inputMode: Q,
              setInputMode: de,
              onBack: () => _(Oe.ANIMALS),
              onContinue: () => _(Oe.SCALE),
              adjustCredences: Or,
            })
          : g === Oe.SCALE
            ? m.jsx($l, {
                categoryLabel: 'Scale Sensitivity',
                categoryColor: '#98C1D9',
                questionNumber: 'Question 3 of 4',
                progressPercentage: 75,
                heading: 'How much does the scale of impact matter?',
                instructionsOptions:
                  'Choose the view that best represents your position, or use "Custom Mix" to split your credence.',
                instructionsSliders:
                  'Distribute your credence across these views. Sliders auto-balance to 100%.',
                options: ep,
                credences: O,
                setCredences: D,
                inputMode: je,
                setInputMode: Be,
                onBack: () => _(Oe.FUTURE),
                onContinue: () => _(Oe.CERTAINTY),
                adjustCredences: Or,
              })
            : g === Oe.CERTAINTY
              ? m.jsx($l, {
                  categoryLabel: 'Evidence Preference',
                  categoryColor: '#E07A5F',
                  questionNumber: 'Question 4 of 4',
                  progressPercentage: 100,
                  heading: 'How much do you value proven interventions over speculative ones?',
                  instructionsOptions:
                    'Choose the view that best represents your position, or use "Custom Mix" to split your credence.',
                  instructionsSliders:
                    'Distribute your credence across these views. Sliders auto-balance to 100%.',
                  options: tp,
                  credences: N,
                  setCredences: A,
                  inputMode: qe,
                  setInputMode: St,
                  onBack: () => _(Oe.SCALE),
                  onContinue: X,
                  adjustCredences: Or,
                })
              : g === Oe.RESULTS
                ? m.jsx(lm, {
                    animalCredences: c,
                    setAnimalCredences: M,
                    futureCredences: k,
                    setFutureCredences: E,
                    scaleCredences: O,
                    setScaleCredences: D,
                    certaintyCredences: N,
                    setCertaintyCredences: A,
                    originalAnimalCredences: j,
                    originalFutureCredences: R,
                    originalScaleCredences: K,
                    originalCertaintyCredences: V,
                    expandedPanel: J,
                    setExpandedPanel: te,
                    maxEVResults: rt,
                    parliamentResults: Ue,
                    mergedFavoritesResults: Xe,
                    maximinResults: lt,
                    originalMaxEV: Ie,
                    originalParliament: he,
                    originalMergedFavorites: C,
                    originalMaximin: $,
                    hasChanged: T,
                    onResetAll: f,
                    onResetQuiz: v,
                    onBack: () => _(Oe.CERTAINTY),
                  })
                : null;
  };
function im() {
  return m.jsx(om, {});
}
md.createRoot(document.getElementById('root')).render(
  m.jsx(ge.StrictMode, { children: m.jsx(im, {}) })
);
