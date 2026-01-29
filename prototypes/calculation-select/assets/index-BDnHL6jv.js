(function () {
  const u = document.createElement('link').relList;
  if (u && u.supports && u.supports('modulepreload')) return;
  for (const k of document.querySelectorAll('link[rel="modulepreload"]')) g(k);
  new MutationObserver((k) => {
    for (const _ of k)
      if (_.type === 'childList')
        for (const E of _.addedNodes) E.tagName === 'LINK' && E.rel === 'modulepreload' && g(E);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(k) {
    const _ = {};
    return (
      k.integrity && (_.integrity = k.integrity),
      k.referrerPolicy && (_.referrerPolicy = k.referrerPolicy),
      k.crossOrigin === 'use-credentials'
        ? (_.credentials = 'include')
        : k.crossOrigin === 'anonymous'
          ? (_.credentials = 'omit')
          : (_.credentials = 'same-origin'),
      _
    );
  }
  function g(k) {
    if (k.ep) return;
    k.ep = !0;
    const _ = s(k);
    fetch(k.href, _);
  }
})();
var ls = { exports: {} },
  $r = {},
  is = { exports: {} },
  ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fc;
function Uf() {
  if (fc) return ne;
  fc = 1;
  var d = Symbol.for('react.element'),
    u = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    g = Symbol.for('react.strict_mode'),
    k = Symbol.for('react.profiler'),
    _ = Symbol.for('react.provider'),
    E = Symbol.for('react.context'),
    N = Symbol.for('react.forward_ref'),
    w = Symbol.for('react.suspense'),
    x = Symbol.for('react.memo'),
    C = Symbol.for('react.lazy'),
    R = Symbol.iterator;
  function L(m) {
    return m === null || typeof m != 'object'
      ? null
      : ((m = (R && m[R]) || m['@@iterator']), typeof m == 'function' ? m : null);
  }
  var W = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    K = Object.assign,
    Q = {};
  function U(m, S, O) {
    ((this.props = m), (this.context = S), (this.refs = Q), (this.updater = O || W));
  }
  ((U.prototype.isReactComponent = {}),
    (U.prototype.setState = function (m, S) {
      if (typeof m != 'object' && typeof m != 'function' && m != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, m, S, 'setState');
    }),
    (U.prototype.forceUpdate = function (m) {
      this.updater.enqueueForceUpdate(this, m, 'forceUpdate');
    }));
  function G() {}
  G.prototype = U.prototype;
  function ue(m, S, O) {
    ((this.props = m), (this.context = S), (this.refs = Q), (this.updater = O || W));
  }
  var je = (ue.prototype = new G());
  ((je.constructor = ue), K(je, U.prototype), (je.isPureReactComponent = !0));
  var fe = Array.isArray,
    Ie = Object.prototype.hasOwnProperty,
    Ce = { current: null },
    ze = { key: !0, ref: !0, __self: !0, __source: !0 };
  function He(m, S, O) {
    var J,
      b = {},
      ee = null,
      le = null;
    if (S != null)
      for (J in (S.ref !== void 0 && (le = S.ref), S.key !== void 0 && (ee = '' + S.key), S))
        Ie.call(S, J) && !ze.hasOwnProperty(J) && (b[J] = S[J]);
    var re = arguments.length - 2;
    if (re === 1) b.children = O;
    else if (1 < re) {
      for (var me = Array(re), D = 0; D < re; D++) me[D] = arguments[D + 2];
      b.children = me;
    }
    if (m && m.defaultProps)
      for (J in ((re = m.defaultProps), re)) b[J] === void 0 && (b[J] = re[J]);
    return { $$typeof: d, type: m, key: ee, ref: le, props: b, _owner: Ce.current };
  }
  function ct(m, S) {
    return { $$typeof: d, type: m.type, key: S, ref: m.ref, props: m.props, _owner: m._owner };
  }
  function Ee(m) {
    return typeof m == 'object' && m !== null && m.$$typeof === d;
  }
  function et(m) {
    var S = { '=': '=0', ':': '=2' };
    return (
      '$' +
      m.replace(/[=:]/g, function (O) {
        return S[O];
      })
    );
  }
  var Qe = /\/+/g;
  function we(m, S) {
    return typeof m == 'object' && m !== null && m.key != null ? et('' + m.key) : S.toString(36);
  }
  function qe(m, S, O, J, b) {
    var ee = typeof m;
    (ee === 'undefined' || ee === 'boolean') && (m = null);
    var le = !1;
    if (m === null) le = !0;
    else
      switch (ee) {
        case 'string':
        case 'number':
          le = !0;
          break;
        case 'object':
          switch (m.$$typeof) {
            case d:
            case u:
              le = !0;
          }
      }
    if (le)
      return (
        (le = m),
        (b = b(le)),
        (m = J === '' ? '.' + we(le, 0) : J),
        fe(b)
          ? ((O = ''),
            m != null && (O = m.replace(Qe, '$&/') + '/'),
            qe(b, S, O, '', function (D) {
              return D;
            }))
          : b != null &&
            (Ee(b) &&
              (b = ct(
                b,
                O +
                  (!b.key || (le && le.key === b.key)
                    ? ''
                    : ('' + b.key).replace(Qe, '$&/') + '/') +
                  m
              )),
            S.push(b)),
        1
      );
    if (((le = 0), (J = J === '' ? '.' : J + ':'), fe(m)))
      for (var re = 0; re < m.length; re++) {
        ee = m[re];
        var me = J + we(ee, re);
        le += qe(ee, S, O, me, b);
      }
    else if (((me = L(m)), typeof me == 'function'))
      for (m = me.call(m), re = 0; !(ee = m.next()).done; )
        ((ee = ee.value), (me = J + we(ee, re++)), (le += qe(ee, S, O, me, b)));
    else if (ee === 'object')
      throw (
        (S = String(m)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (S === '[object Object]' ? 'object with keys {' + Object.keys(m).join(', ') + '}' : S) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return le;
  }
  function Ze(m, S, O) {
    if (m == null) return m;
    var J = [],
      b = 0;
    return (
      qe(m, J, '', '', function (ee) {
        return S.call(O, ee, b++);
      }),
      J
    );
  }
  function pe(m) {
    if (m._status === -1) {
      var S = m._result;
      ((S = S()),
        S.then(
          function (O) {
            (m._status === 0 || m._status === -1) && ((m._status = 1), (m._result = O));
          },
          function (O) {
            (m._status === 0 || m._status === -1) && ((m._status = 2), (m._result = O));
          }
        ),
        m._status === -1 && ((m._status = 0), (m._result = S)));
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var ae = { current: null },
    M = { transition: null },
    q = { ReactCurrentDispatcher: ae, ReactCurrentBatchConfig: M, ReactCurrentOwner: Ce };
  function F() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (ne.Children = {
      map: Ze,
      forEach: function (m, S, O) {
        Ze(
          m,
          function () {
            S.apply(this, arguments);
          },
          O
        );
      },
      count: function (m) {
        var S = 0;
        return (
          Ze(m, function () {
            S++;
          }),
          S
        );
      },
      toArray: function (m) {
        return (
          Ze(m, function (S) {
            return S;
          }) || []
        );
      },
      only: function (m) {
        if (!Ee(m))
          throw Error('React.Children.only expected to receive a single React element child.');
        return m;
      },
    }),
    (ne.Component = U),
    (ne.Fragment = s),
    (ne.Profiler = k),
    (ne.PureComponent = ue),
    (ne.StrictMode = g),
    (ne.Suspense = w),
    (ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q),
    (ne.act = F),
    (ne.cloneElement = function (m, S, O) {
      if (m == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + m + '.'
        );
      var J = K({}, m.props),
        b = m.key,
        ee = m.ref,
        le = m._owner;
      if (S != null) {
        if (
          (S.ref !== void 0 && ((ee = S.ref), (le = Ce.current)),
          S.key !== void 0 && (b = '' + S.key),
          m.type && m.type.defaultProps)
        )
          var re = m.type.defaultProps;
        for (me in S)
          Ie.call(S, me) &&
            !ze.hasOwnProperty(me) &&
            (J[me] = S[me] === void 0 && re !== void 0 ? re[me] : S[me]);
      }
      var me = arguments.length - 2;
      if (me === 1) J.children = O;
      else if (1 < me) {
        re = Array(me);
        for (var D = 0; D < me; D++) re[D] = arguments[D + 2];
        J.children = re;
      }
      return { $$typeof: d, type: m.type, key: b, ref: ee, props: J, _owner: le };
    }),
    (ne.createContext = function (m) {
      return (
        (m = {
          $$typeof: E,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (m.Provider = { $$typeof: _, _context: m }),
        (m.Consumer = m)
      );
    }),
    (ne.createElement = He),
    (ne.createFactory = function (m) {
      var S = He.bind(null, m);
      return ((S.type = m), S);
    }),
    (ne.createRef = function () {
      return { current: null };
    }),
    (ne.forwardRef = function (m) {
      return { $$typeof: N, render: m };
    }),
    (ne.isValidElement = Ee),
    (ne.lazy = function (m) {
      return { $$typeof: C, _payload: { _status: -1, _result: m }, _init: pe };
    }),
    (ne.memo = function (m, S) {
      return { $$typeof: x, type: m, compare: S === void 0 ? null : S };
    }),
    (ne.startTransition = function (m) {
      var S = M.transition;
      M.transition = {};
      try {
        m();
      } finally {
        M.transition = S;
      }
    }),
    (ne.unstable_act = F),
    (ne.useCallback = function (m, S) {
      return ae.current.useCallback(m, S);
    }),
    (ne.useContext = function (m) {
      return ae.current.useContext(m);
    }),
    (ne.useDebugValue = function () {}),
    (ne.useDeferredValue = function (m) {
      return ae.current.useDeferredValue(m);
    }),
    (ne.useEffect = function (m, S) {
      return ae.current.useEffect(m, S);
    }),
    (ne.useId = function () {
      return ae.current.useId();
    }),
    (ne.useImperativeHandle = function (m, S, O) {
      return ae.current.useImperativeHandle(m, S, O);
    }),
    (ne.useInsertionEffect = function (m, S) {
      return ae.current.useInsertionEffect(m, S);
    }),
    (ne.useLayoutEffect = function (m, S) {
      return ae.current.useLayoutEffect(m, S);
    }),
    (ne.useMemo = function (m, S) {
      return ae.current.useMemo(m, S);
    }),
    (ne.useReducer = function (m, S, O) {
      return ae.current.useReducer(m, S, O);
    }),
    (ne.useRef = function (m) {
      return ae.current.useRef(m);
    }),
    (ne.useState = function (m) {
      return ae.current.useState(m);
    }),
    (ne.useSyncExternalStore = function (m, S, O) {
      return ae.current.useSyncExternalStore(m, S, O);
    }),
    (ne.useTransition = function () {
      return ae.current.useTransition();
    }),
    (ne.version = '18.3.1'),
    ne
  );
}
var pc;
function ys() {
  return (pc || ((pc = 1), (is.exports = Uf())), is.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mc;
function Bf() {
  if (mc) return $r;
  mc = 1;
  var d = ys(),
    u = Symbol.for('react.element'),
    s = Symbol.for('react.fragment'),
    g = Object.prototype.hasOwnProperty,
    k = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(N, w, x) {
    var C,
      R = {},
      L = null,
      W = null;
    (x !== void 0 && (L = '' + x),
      w.key !== void 0 && (L = '' + w.key),
      w.ref !== void 0 && (W = w.ref));
    for (C in w) g.call(w, C) && !_.hasOwnProperty(C) && (R[C] = w[C]);
    if (N && N.defaultProps) for (C in ((w = N.defaultProps), w)) R[C] === void 0 && (R[C] = w[C]);
    return { $$typeof: u, type: N, key: L, ref: W, props: R, _owner: k.current };
  }
  return (($r.Fragment = s), ($r.jsx = E), ($r.jsxs = E), $r);
}
var hc;
function $f() {
  return (hc || ((hc = 1), (ls.exports = Bf())), ls.exports);
}
var c = $f(),
  z = ys(),
  ei = {},
  os = { exports: {} },
  st = {},
  ss = { exports: {} },
  us = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vc;
function Vf() {
  return (
    vc ||
      ((vc = 1),
      (function (d) {
        function u(M, q) {
          var F = M.length;
          M.push(q);
          e: for (; 0 < F; ) {
            var m = (F - 1) >>> 1,
              S = M[m];
            if (0 < k(S, q)) ((M[m] = q), (M[F] = S), (F = m));
            else break e;
          }
        }
        function s(M) {
          return M.length === 0 ? null : M[0];
        }
        function g(M) {
          if (M.length === 0) return null;
          var q = M[0],
            F = M.pop();
          if (F !== q) {
            M[0] = F;
            e: for (var m = 0, S = M.length, O = S >>> 1; m < O; ) {
              var J = 2 * (m + 1) - 1,
                b = M[J],
                ee = J + 1,
                le = M[ee];
              if (0 > k(b, F))
                ee < S && 0 > k(le, b)
                  ? ((M[m] = le), (M[ee] = F), (m = ee))
                  : ((M[m] = b), (M[J] = F), (m = J));
              else if (ee < S && 0 > k(le, F)) ((M[m] = le), (M[ee] = F), (m = ee));
              else break e;
            }
          }
          return q;
        }
        function k(M, q) {
          var F = M.sortIndex - q.sortIndex;
          return F !== 0 ? F : M.id - q.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var _ = performance;
          d.unstable_now = function () {
            return _.now();
          };
        } else {
          var E = Date,
            N = E.now();
          d.unstable_now = function () {
            return E.now() - N;
          };
        }
        var w = [],
          x = [],
          C = 1,
          R = null,
          L = 3,
          W = !1,
          K = !1,
          Q = !1,
          U = typeof setTimeout == 'function' ? setTimeout : null,
          G = typeof clearTimeout == 'function' ? clearTimeout : null,
          ue = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function je(M) {
          for (var q = s(x); q !== null; ) {
            if (q.callback === null) g(x);
            else if (q.startTime <= M) (g(x), (q.sortIndex = q.expirationTime), u(w, q));
            else break;
            q = s(x);
          }
        }
        function fe(M) {
          if (((Q = !1), je(M), !K))
            if (s(w) !== null) ((K = !0), pe(Ie));
            else {
              var q = s(x);
              q !== null && ae(fe, q.startTime - M);
            }
        }
        function Ie(M, q) {
          ((K = !1), Q && ((Q = !1), G(He), (He = -1)), (W = !0));
          var F = L;
          try {
            for (je(q), R = s(w); R !== null && (!(R.expirationTime > q) || (M && !et())); ) {
              var m = R.callback;
              if (typeof m == 'function') {
                ((R.callback = null), (L = R.priorityLevel));
                var S = m(R.expirationTime <= q);
                ((q = d.unstable_now()),
                  typeof S == 'function' ? (R.callback = S) : R === s(w) && g(w),
                  je(q));
              } else g(w);
              R = s(w);
            }
            if (R !== null) var O = !0;
            else {
              var J = s(x);
              (J !== null && ae(fe, J.startTime - q), (O = !1));
            }
            return O;
          } finally {
            ((R = null), (L = F), (W = !1));
          }
        }
        var Ce = !1,
          ze = null,
          He = -1,
          ct = 5,
          Ee = -1;
        function et() {
          return !(d.unstable_now() - Ee < ct);
        }
        function Qe() {
          if (ze !== null) {
            var M = d.unstable_now();
            Ee = M;
            var q = !0;
            try {
              q = ze(!0, M);
            } finally {
              q ? we() : ((Ce = !1), (ze = null));
            }
          } else Ce = !1;
        }
        var we;
        if (typeof ue == 'function')
          we = function () {
            ue(Qe);
          };
        else if (typeof MessageChannel < 'u') {
          var qe = new MessageChannel(),
            Ze = qe.port2;
          ((qe.port1.onmessage = Qe),
            (we = function () {
              Ze.postMessage(null);
            }));
        } else
          we = function () {
            U(Qe, 0);
          };
        function pe(M) {
          ((ze = M), Ce || ((Ce = !0), we()));
        }
        function ae(M, q) {
          He = U(function () {
            M(d.unstable_now());
          }, q);
        }
        ((d.unstable_IdlePriority = 5),
          (d.unstable_ImmediatePriority = 1),
          (d.unstable_LowPriority = 4),
          (d.unstable_NormalPriority = 3),
          (d.unstable_Profiling = null),
          (d.unstable_UserBlockingPriority = 2),
          (d.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (d.unstable_continueExecution = function () {
            K || W || ((K = !0), pe(Ie));
          }),
          (d.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (ct = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (d.unstable_getCurrentPriorityLevel = function () {
            return L;
          }),
          (d.unstable_getFirstCallbackNode = function () {
            return s(w);
          }),
          (d.unstable_next = function (M) {
            switch (L) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = L;
            }
            var F = L;
            L = q;
            try {
              return M();
            } finally {
              L = F;
            }
          }),
          (d.unstable_pauseExecution = function () {}),
          (d.unstable_requestPaint = function () {}),
          (d.unstable_runWithPriority = function (M, q) {
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
            var F = L;
            L = M;
            try {
              return q();
            } finally {
              L = F;
            }
          }),
          (d.unstable_scheduleCallback = function (M, q, F) {
            var m = d.unstable_now();
            switch (
              (typeof F == 'object' && F !== null
                ? ((F = F.delay), (F = typeof F == 'number' && 0 < F ? m + F : m))
                : (F = m),
              M)
            ) {
              case 1:
                var S = -1;
                break;
              case 2:
                S = 250;
                break;
              case 5:
                S = 1073741823;
                break;
              case 4:
                S = 1e4;
                break;
              default:
                S = 5e3;
            }
            return (
              (S = F + S),
              (M = {
                id: C++,
                callback: q,
                priorityLevel: M,
                startTime: F,
                expirationTime: S,
                sortIndex: -1,
              }),
              F > m
                ? ((M.sortIndex = F),
                  u(x, M),
                  s(w) === null && M === s(x) && (Q ? (G(He), (He = -1)) : (Q = !0), ae(fe, F - m)))
                : ((M.sortIndex = S), u(w, M), K || W || ((K = !0), pe(Ie))),
              M
            );
          }),
          (d.unstable_shouldYield = et),
          (d.unstable_wrapCallback = function (M) {
            var q = L;
            return function () {
              var F = L;
              L = q;
              try {
                return M.apply(this, arguments);
              } finally {
                L = F;
              }
            };
          }));
      })(us)),
    us
  );
}
var yc;
function Wf() {
  return (yc || ((yc = 1), (ss.exports = Vf())), ss.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gc;
function Hf() {
  if (gc) return st;
  gc = 1;
  var d = ys(),
    u = Wf();
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
  var g = new Set(),
    k = {};
  function _(e, t) {
    (E(e, t), E(e + 'Capture', t));
  }
  function E(e, t) {
    for (k[e] = t, e = 0; e < t.length; e++) g.add(t[e]);
  }
  var N = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    w = Object.prototype.hasOwnProperty,
    x =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    C = {},
    R = {};
  function L(e) {
    return w.call(R, e) ? !0 : w.call(C, e) ? !1 : x.test(e) ? (R[e] = !0) : ((C[e] = !0), !1);
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
  function K(e, t, n, r) {
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
  function Q(e, t, n, r, l, i, o) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o));
  }
  var U = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      U[e] = new Q(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      U[t] = new Q(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      U[e] = new Q(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        U[e] = new Q(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        U[e] = new Q(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      U[e] = new Q(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      U[e] = new Q(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      U[e] = new Q(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      U[e] = new Q(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var G = /[\-:]([a-z])/g;
  function ue(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(G, ue);
      U[t] = new Q(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(G, ue);
        U[t] = new Q(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(G, ue);
      U[t] = new Q(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      U[e] = new Q(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (U.xlinkHref = new Q('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      U[e] = new Q(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function je(e, t, n, r) {
    var l = U.hasOwnProperty(t) ? U[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (K(t, n, l, r) && (n = null),
      r || l === null
        ? L(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
  var fe = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ie = Symbol.for('react.element'),
    Ce = Symbol.for('react.portal'),
    ze = Symbol.for('react.fragment'),
    He = Symbol.for('react.strict_mode'),
    ct = Symbol.for('react.profiler'),
    Ee = Symbol.for('react.provider'),
    et = Symbol.for('react.context'),
    Qe = Symbol.for('react.forward_ref'),
    we = Symbol.for('react.suspense'),
    qe = Symbol.for('react.suspense_list'),
    Ze = Symbol.for('react.memo'),
    pe = Symbol.for('react.lazy'),
    ae = Symbol.for('react.offscreen'),
    M = Symbol.iterator;
  function q(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (M && e[M]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var F = Object.assign,
    m;
  function S(e) {
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
  var O = !1;
  function J(e, t) {
    if (!e || O) return '';
    O = !0;
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
          } catch (y) {
            var r = y;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (y) {
            r = y;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (y) {
          r = y;
        }
        e();
      }
    } catch (y) {
      if (y && r && typeof y.stack == 'string') {
        for (
          var l = y.stack.split(`
`),
            i = r.stack.split(`
`),
            o = l.length - 1,
            a = i.length - 1;
          1 <= o && 0 <= a && l[o] !== i[a];
        )
          a--;
        for (; 1 <= o && 0 <= a; o--, a--)
          if (l[o] !== i[a]) {
            if (o !== 1 || a !== 1)
              do
                if ((o--, a--, 0 > a || l[o] !== i[a])) {
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
              while (1 <= o && 0 <= a);
            break;
          }
      }
    } finally {
      ((O = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? S(e) : '';
  }
  function b(e) {
    switch (e.tag) {
      case 5:
        return S(e.type);
      case 16:
        return S('Lazy');
      case 13:
        return S('Suspense');
      case 19:
        return S('SuspenseList');
      case 0:
      case 2:
      case 15:
        return ((e = J(e.type, !1)), e);
      case 11:
        return ((e = J(e.type.render, !1)), e);
      case 1:
        return ((e = J(e.type, !0)), e);
      default:
        return '';
    }
  }
  function ee(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case ze:
        return 'Fragment';
      case Ce:
        return 'Portal';
      case ct:
        return 'Profiler';
      case He:
        return 'StrictMode';
      case we:
        return 'Suspense';
      case qe:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case et:
          return (e.displayName || 'Context') + '.Consumer';
        case Ee:
          return (e._context.displayName || 'Context') + '.Provider';
        case Qe:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case Ze:
          return ((t = e.displayName || null), t !== null ? t : ee(e.type) || 'Memo');
        case pe:
          ((t = e._payload), (e = e._init));
          try {
            return ee(e(t));
          } catch {}
      }
    return null;
  }
  function le(e) {
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
        return ee(t);
      case 8:
        return t === He ? 'StrictMode' : 'Mode';
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
  function re(e) {
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
  function D(e) {
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
  function te(e) {
    e._valueTracker || (e._valueTracker = D(e));
  }
  function kt(e) {
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
  function tt(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Tn(e, t) {
    var n = t.checked;
    return F({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function pn(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = re(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      }));
  }
  function tr(e, t) {
    ((t = t.checked), t != null && je(e, 'checked', t, !1));
  }
  function di(e, t) {
    tr(e, t);
    var n = re(t.value),
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
      ? fi(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && fi(e, t.type, re(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function _s(e, t, n) {
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
  function fi(e, t, n) {
    (t !== 'number' || tt(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var nr = Array.isArray;
  function Ln(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + re(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function pi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return F({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function ks(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(s(92));
        if (nr(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: re(n) };
  }
  function xs(e, t) {
    var n = re(t.value),
      r = re(t.defaultValue);
    (n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r));
  }
  function Cs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function Es(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function mi(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? Es(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var qr,
    Ns = (function (e) {
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
          qr = qr || document.createElement('div'),
            qr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = qr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function rr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var lr = {
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
    Vc = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(lr).forEach(function (e) {
    Vc.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (lr[t] = lr[e]));
    });
  });
  function js(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (lr.hasOwnProperty(e) && lr[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function Ts(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = js(n, t[n], r);
        (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Wc = F(
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
  function hi(e, t) {
    if (t) {
      if (Wc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function vi(e, t) {
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
  var yi = null;
  function gi(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var wi = null,
    In = null,
    Rn = null;
  function Ls(e) {
    if ((e = Nr(e))) {
      if (typeof wi != 'function') throw Error(s(280));
      var t = e.stateNode;
      t && ((t = hl(t)), wi(e.stateNode, e.type, t));
    }
  }
  function Is(e) {
    In ? (Rn ? Rn.push(e) : (Rn = [e])) : (In = e);
  }
  function Rs() {
    if (In) {
      var e = In,
        t = Rn;
      if (((Rn = In = null), Ls(e), t)) for (e = 0; e < t.length; e++) Ls(t[e]);
    }
  }
  function Ps(e, t) {
    return e(t);
  }
  function Os() {}
  var Si = !1;
  function Ms(e, t, n) {
    if (Si) return e(t, n);
    Si = !0;
    try {
      return Ps(e, t, n);
    } finally {
      ((Si = !1), (In !== null || Rn !== null) && (Os(), Rs()));
    }
  }
  function ir(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = hl(n);
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
  var _i = !1;
  if (N)
    try {
      var or = {};
      (Object.defineProperty(or, 'passive', {
        get: function () {
          _i = !0;
        },
      }),
        window.addEventListener('test', or, or),
        window.removeEventListener('test', or, or));
    } catch {
      _i = !1;
    }
  function Hc(e, t, n, r, l, i, o, a, f) {
    var y = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, y);
    } catch (T) {
      this.onError(T);
    }
  }
  var sr = !1,
    Gr = null,
    Kr = !1,
    ki = null,
    Qc = {
      onError: function (e) {
        ((sr = !0), (Gr = e));
      },
    };
  function qc(e, t, n, r, l, i, o, a, f) {
    ((sr = !1), (Gr = null), Hc.apply(Qc, arguments));
  }
  function Gc(e, t, n, r, l, i, o, a, f) {
    if ((qc.apply(this, arguments), sr)) {
      if (sr) {
        var y = Gr;
        ((sr = !1), (Gr = null));
      } else throw Error(s(198));
      Kr || ((Kr = !0), (ki = y));
    }
  }
  function mn(e) {
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
  function zs(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Ds(e) {
    if (mn(e) !== e) throw Error(s(188));
  }
  function Kc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = mn(e)), t === null)) throw Error(s(188));
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
          if (i === n) return (Ds(l), e);
          if (i === r) return (Ds(l), t);
          i = i.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) ((n = l), (r = i));
      else {
        for (var o = !1, a = l.child; a; ) {
          if (a === n) {
            ((o = !0), (n = l), (r = i));
            break;
          }
          if (a === r) {
            ((o = !0), (r = l), (n = i));
            break;
          }
          a = a.sibling;
        }
        if (!o) {
          for (a = i.child; a; ) {
            if (a === n) {
              ((o = !0), (n = i), (r = l));
              break;
            }
            if (a === r) {
              ((o = !0), (r = i), (n = l));
              break;
            }
            a = a.sibling;
          }
          if (!o) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function Fs(e) {
    return ((e = Kc(e)), e !== null ? As(e) : null);
  }
  function As(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = As(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Us = u.unstable_scheduleCallback,
    Bs = u.unstable_cancelCallback,
    Yc = u.unstable_shouldYield,
    Xc = u.unstable_requestPaint,
    Te = u.unstable_now,
    Zc = u.unstable_getCurrentPriorityLevel,
    xi = u.unstable_ImmediatePriority,
    $s = u.unstable_UserBlockingPriority,
    Yr = u.unstable_NormalPriority,
    Jc = u.unstable_LowPriority,
    Vs = u.unstable_IdlePriority,
    Xr = null,
    It = null;
  function bc(e) {
    if (It && typeof It.onCommitFiberRoot == 'function')
      try {
        It.onCommitFiberRoot(Xr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var xt = Math.clz32 ? Math.clz32 : nd,
    ed = Math.log,
    td = Math.LN2;
  function nd(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((ed(e) / td) | 0)) | 0);
  }
  var Zr = 64,
    Jr = 4194304;
  function ur(e) {
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
  function br(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var a = o & ~l;
      a !== 0 ? (r = ur(a)) : ((i &= o), i !== 0 && (r = ur(i)));
    } else ((o = n & ~l), o !== 0 ? (r = ur(o)) : i !== 0 && (r = ur(i)));
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
        ((n = 31 - xt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function rd(e, t) {
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
  function ld(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes;
      0 < i;
    ) {
      var o = 31 - xt(i),
        a = 1 << o,
        f = l[o];
      (f === -1
        ? ((a & n) === 0 || (a & r) !== 0) && (l[o] = rd(a, t))
        : f <= t && (e.expiredLanes |= a),
        (i &= ~a));
    }
  }
  function Ci(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Ws() {
    var e = Zr;
    return ((Zr <<= 1), (Zr & 4194240) === 0 && (Zr = 64), e);
  }
  function Ei(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ar(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - xt(t)),
      (e[t] = n));
  }
  function id(e, t) {
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
      var l = 31 - xt(n),
        i = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
    }
  }
  function Ni(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - xt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var ce = 0;
  function Hs(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Qs,
    ji,
    qs,
    Gs,
    Ks,
    Ti = !1,
    el = [],
    qt = null,
    Gt = null,
    Kt = null,
    cr = new Map(),
    dr = new Map(),
    Yt = [],
    od =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function Ys(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        qt = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Gt = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Kt = null;
        break;
      case 'pointerover':
      case 'pointerout':
        cr.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        dr.delete(t.pointerId);
    }
  }
  function fr(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = Nr(t)), t !== null && ji(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function sd(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return ((qt = fr(qt, e, t, n, r, l)), !0);
      case 'dragenter':
        return ((Gt = fr(Gt, e, t, n, r, l)), !0);
      case 'mouseover':
        return ((Kt = fr(Kt, e, t, n, r, l)), !0);
      case 'pointerover':
        var i = l.pointerId;
        return (cr.set(i, fr(cr.get(i) || null, e, t, n, r, l)), !0);
      case 'gotpointercapture':
        return ((i = l.pointerId), dr.set(i, fr(dr.get(i) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function Xs(e) {
    var t = hn(e.target);
    if (t !== null) {
      var n = mn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = zs(n)), t !== null)) {
            ((e.blockedOn = t),
              Ks(e.priority, function () {
                qs(n);
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
  function tl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ii(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((yi = r), n.target.dispatchEvent(r), (yi = null));
      } else return ((t = Nr(n)), t !== null && ji(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Zs(e, t, n) {
    tl(e) && n.delete(t);
  }
  function ud() {
    ((Ti = !1),
      qt !== null && tl(qt) && (qt = null),
      Gt !== null && tl(Gt) && (Gt = null),
      Kt !== null && tl(Kt) && (Kt = null),
      cr.forEach(Zs),
      dr.forEach(Zs));
  }
  function pr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ti || ((Ti = !0), u.unstable_scheduleCallback(u.unstable_NormalPriority, ud)));
  }
  function mr(e) {
    function t(l) {
      return pr(l, e);
    }
    if (0 < el.length) {
      pr(el[0], e);
      for (var n = 1; n < el.length; n++) {
        var r = el[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      qt !== null && pr(qt, e),
        Gt !== null && pr(Gt, e),
        Kt !== null && pr(Kt, e),
        cr.forEach(t),
        dr.forEach(t),
        n = 0;
      n < Yt.length;
      n++
    )
      ((r = Yt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Yt.length && ((n = Yt[0]), n.blockedOn === null); )
      (Xs(n), n.blockedOn === null && Yt.shift());
  }
  var Pn = fe.ReactCurrentBatchConfig,
    nl = !0;
  function ad(e, t, n, r) {
    var l = ce,
      i = Pn.transition;
    Pn.transition = null;
    try {
      ((ce = 1), Li(e, t, n, r));
    } finally {
      ((ce = l), (Pn.transition = i));
    }
  }
  function cd(e, t, n, r) {
    var l = ce,
      i = Pn.transition;
    Pn.transition = null;
    try {
      ((ce = 4), Li(e, t, n, r));
    } finally {
      ((ce = l), (Pn.transition = i));
    }
  }
  function Li(e, t, n, r) {
    if (nl) {
      var l = Ii(e, t, n, r);
      if (l === null) (Gi(e, t, r, rl, n), Ys(e, r));
      else if (sd(l, e, t, n, r)) r.stopPropagation();
      else if ((Ys(e, r), t & 4 && -1 < od.indexOf(e))) {
        for (; l !== null; ) {
          var i = Nr(l);
          if (
            (i !== null && Qs(i), (i = Ii(e, t, n, r)), i === null && Gi(e, t, r, rl, n), i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else Gi(e, t, r, null, n);
    }
  }
  var rl = null;
  function Ii(e, t, n, r) {
    if (((rl = null), (e = gi(r)), (e = hn(e)), e !== null))
      if (((t = mn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = zs(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((rl = e), null);
  }
  function Js(e) {
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
        switch (Zc()) {
          case xi:
            return 1;
          case $s:
            return 4;
          case Yr:
          case Jc:
            return 16;
          case Vs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Xt = null,
    Ri = null,
    ll = null;
  function bs() {
    if (ll) return ll;
    var e,
      t = Ri,
      n = t.length,
      r,
      l = 'value' in Xt ? Xt.value : Xt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (ll = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function il(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ol() {
    return !0;
  }
  function eu() {
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
      for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? ol
          : eu),
        (this.isPropagationStopped = eu),
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
            (this.isDefaultPrevented = ol));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = ol));
        },
        persist: function () {},
        isPersistent: ol,
      }),
      t
    );
  }
  var On = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Pi = dt(On),
    hr = F({}, On, { view: 0, detail: 0 }),
    dd = dt(hr),
    Oi,
    Mi,
    vr,
    sl = F({}, hr, {
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
      getModifierState: Di,
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
          : (e !== vr &&
              (vr && e.type === 'mousemove'
                ? ((Oi = e.screenX - vr.screenX), (Mi = e.screenY - vr.screenY))
                : (Mi = Oi = 0),
              (vr = e)),
            Oi);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Mi;
      },
    }),
    tu = dt(sl),
    fd = F({}, sl, { dataTransfer: 0 }),
    pd = dt(fd),
    md = F({}, hr, { relatedTarget: 0 }),
    zi = dt(md),
    hd = F({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    vd = dt(hd),
    yd = F({}, On, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    gd = dt(yd),
    wd = F({}, On, { data: 0 }),
    nu = dt(wd),
    Sd = {
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
    _d = {
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
    kd = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function xd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = kd[e]) ? !!t[e] : !1;
  }
  function Di() {
    return xd;
  }
  var Cd = F({}, hr, {
      key: function (e) {
        if (e.key) {
          var t = Sd[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = il(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? _d[e.keyCode] || 'Unidentified'
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
      getModifierState: Di,
      charCode: function (e) {
        return e.type === 'keypress' ? il(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? il(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Ed = dt(Cd),
    Nd = F({}, sl, {
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
    ru = dt(Nd),
    jd = F({}, hr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Di,
    }),
    Td = dt(jd),
    Ld = F({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Id = dt(Ld),
    Rd = F({}, sl, {
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
    Pd = dt(Rd),
    Od = [9, 13, 27, 32],
    Fi = N && 'CompositionEvent' in window,
    yr = null;
  N && 'documentMode' in document && (yr = document.documentMode);
  var Md = N && 'TextEvent' in window && !yr,
    lu = N && (!Fi || (yr && 8 < yr && 11 >= yr)),
    iu = ' ',
    ou = !1;
  function su(e, t) {
    switch (e) {
      case 'keyup':
        return Od.indexOf(t.keyCode) !== -1;
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
  function uu(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var Mn = !1;
  function zd(e, t) {
    switch (e) {
      case 'compositionend':
        return uu(t);
      case 'keypress':
        return t.which !== 32 ? null : ((ou = !0), iu);
      case 'textInput':
        return ((e = t.data), e === iu && ou ? null : e);
      default:
        return null;
    }
  }
  function Dd(e, t) {
    if (Mn)
      return e === 'compositionend' || (!Fi && su(e, t))
        ? ((e = bs()), (ll = Ri = Xt = null), (Mn = !1), e)
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
        return lu && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Fd = {
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
  function au(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Fd[e.type] : t === 'textarea';
  }
  function cu(e, t, n, r) {
    (Is(r),
      (t = fl(t, 'onChange')),
      0 < t.length &&
        ((n = new Pi('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
  }
  var gr = null,
    wr = null;
  function Ad(e) {
    Tu(e, 0);
  }
  function ul(e) {
    var t = Un(e);
    if (kt(t)) return e;
  }
  function Ud(e, t) {
    if (e === 'change') return t;
  }
  var du = !1;
  if (N) {
    var Ai;
    if (N) {
      var Ui = 'oninput' in document;
      if (!Ui) {
        var fu = document.createElement('div');
        (fu.setAttribute('oninput', 'return;'), (Ui = typeof fu.oninput == 'function'));
      }
      Ai = Ui;
    } else Ai = !1;
    du = Ai && (!document.documentMode || 9 < document.documentMode);
  }
  function pu() {
    gr && (gr.detachEvent('onpropertychange', mu), (wr = gr = null));
  }
  function mu(e) {
    if (e.propertyName === 'value' && ul(wr)) {
      var t = [];
      (cu(t, wr, e, gi(e)), Ms(Ad, t));
    }
  }
  function Bd(e, t, n) {
    e === 'focusin'
      ? (pu(), (gr = t), (wr = n), gr.attachEvent('onpropertychange', mu))
      : e === 'focusout' && pu();
  }
  function $d(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return ul(wr);
  }
  function Vd(e, t) {
    if (e === 'click') return ul(t);
  }
  function Wd(e, t) {
    if (e === 'input' || e === 'change') return ul(t);
  }
  function Hd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ct = typeof Object.is == 'function' ? Object.is : Hd;
  function Sr(e, t) {
    if (Ct(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!w.call(t, l) || !Ct(e[l], t[l])) return !1;
    }
    return !0;
  }
  function hu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function vu(e, t) {
    var n = hu(e);
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
      n = hu(n);
    }
  }
  function yu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? yu(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function gu() {
    for (var e = window, t = tt(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = tt(e.document);
    }
    return t;
  }
  function Bi(e) {
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
  function Qd(e) {
    var t = gu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && yu(n.ownerDocument.documentElement, n)) {
      if (r !== null && Bi(n)) {
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
            (l = vu(n, i)));
          var o = vu(n, r);
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
  var qd = N && 'documentMode' in document && 11 >= document.documentMode,
    zn = null,
    $i = null,
    _r = null,
    Vi = !1;
  function wu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Vi ||
      zn == null ||
      zn !== tt(r) ||
      ((r = zn),
      'selectionStart' in r && Bi(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (_r && Sr(_r, r)) ||
        ((_r = r),
        (r = fl($i, 'onSelect')),
        0 < r.length &&
          ((t = new Pi('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = zn))));
  }
  function al(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var Dn = {
      animationend: al('Animation', 'AnimationEnd'),
      animationiteration: al('Animation', 'AnimationIteration'),
      animationstart: al('Animation', 'AnimationStart'),
      transitionend: al('Transition', 'TransitionEnd'),
    },
    Wi = {},
    Su = {};
  N &&
    ((Su = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Dn.animationend.animation,
      delete Dn.animationiteration.animation,
      delete Dn.animationstart.animation),
    'TransitionEvent' in window || delete Dn.transitionend.transition);
  function cl(e) {
    if (Wi[e]) return Wi[e];
    if (!Dn[e]) return e;
    var t = Dn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Su) return (Wi[e] = t[n]);
    return e;
  }
  var _u = cl('animationend'),
    ku = cl('animationiteration'),
    xu = cl('animationstart'),
    Cu = cl('transitionend'),
    Eu = new Map(),
    Nu =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Zt(e, t) {
    (Eu.set(e, t), _(t, [e]));
  }
  for (var Hi = 0; Hi < Nu.length; Hi++) {
    var Qi = Nu[Hi],
      Gd = Qi.toLowerCase(),
      Kd = Qi[0].toUpperCase() + Qi.slice(1);
    Zt(Gd, 'on' + Kd);
  }
  (Zt(_u, 'onAnimationEnd'),
    Zt(ku, 'onAnimationIteration'),
    Zt(xu, 'onAnimationStart'),
    Zt('dblclick', 'onDoubleClick'),
    Zt('focusin', 'onFocus'),
    Zt('focusout', 'onBlur'),
    Zt(Cu, 'onTransitionEnd'),
    E('onMouseEnter', ['mouseout', 'mouseover']),
    E('onMouseLeave', ['mouseout', 'mouseover']),
    E('onPointerEnter', ['pointerout', 'pointerover']),
    E('onPointerLeave', ['pointerout', 'pointerover']),
    _('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    _(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    _('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    _('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    _(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    _(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var kr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Yd = new Set('cancel close invalid load scroll toggle'.split(' ').concat(kr));
  function ju(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n), Gc(r, t, void 0, e), (e.currentTarget = null));
  }
  function Tu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var a = r[o],
              f = a.instance,
              y = a.currentTarget;
            if (((a = a.listener), f !== i && l.isPropagationStopped())) break e;
            (ju(l, a, y), (i = f));
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((a = r[o]),
              (f = a.instance),
              (y = a.currentTarget),
              (a = a.listener),
              f !== i && l.isPropagationStopped())
            )
              break e;
            (ju(l, a, y), (i = f));
          }
      }
    }
    if (Kr) throw ((e = ki), (Kr = !1), (ki = null), e);
  }
  function ve(e, t) {
    var n = t[bi];
    n === void 0 && (n = t[bi] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Lu(t, e, 2, !1), n.add(r));
  }
  function qi(e, t, n) {
    var r = 0;
    (t && (r |= 4), Lu(n, e, r, t));
  }
  var dl = '_reactListening' + Math.random().toString(36).slice(2);
  function xr(e) {
    if (!e[dl]) {
      ((e[dl] = !0),
        g.forEach(function (n) {
          n !== 'selectionchange' && (Yd.has(n) || qi(n, !1, e), qi(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[dl] || ((t[dl] = !0), qi('selectionchange', !1, t));
    }
  }
  function Lu(e, t, n, r) {
    switch (Js(t)) {
      case 1:
        var l = ad;
        break;
      case 4:
        l = cd;
        break;
      default:
        l = Li;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !_i || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function Gi(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var a = r.stateNode.containerInfo;
          if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
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
          for (; a !== null; ) {
            if (((o = hn(a)), o === null)) return;
            if (((f = o.tag), f === 5 || f === 6)) {
              r = i = o;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
    Ms(function () {
      var y = i,
        T = gi(n),
        I = [];
      e: {
        var j = Eu.get(e);
        if (j !== void 0) {
          var A = Pi,
            $ = e;
          switch (e) {
            case 'keypress':
              if (il(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              A = Ed;
              break;
            case 'focusin':
              (($ = 'focus'), (A = zi));
              break;
            case 'focusout':
              (($ = 'blur'), (A = zi));
              break;
            case 'beforeblur':
            case 'afterblur':
              A = zi;
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
              A = tu;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              A = pd;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              A = Td;
              break;
            case _u:
            case ku:
            case xu:
              A = vd;
              break;
            case Cu:
              A = Id;
              break;
            case 'scroll':
              A = dd;
              break;
            case 'wheel':
              A = Pd;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              A = gd;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              A = ru;
          }
          var V = (t & 4) !== 0,
            Le = !V && e === 'scroll',
            h = V ? (j !== null ? j + 'Capture' : null) : j;
          V = [];
          for (var p = y, v; p !== null; ) {
            v = p;
            var P = v.stateNode;
            if (
              (v.tag === 5 &&
                P !== null &&
                ((v = P), h !== null && ((P = ir(p, h)), P != null && V.push(Cr(p, P, v)))),
              Le)
            )
              break;
            p = p.return;
          }
          0 < V.length && ((j = new A(j, $, null, n, T)), I.push({ event: j, listeners: V }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((j = e === 'mouseover' || e === 'pointerover'),
            (A = e === 'mouseout' || e === 'pointerout'),
            j && n !== yi && ($ = n.relatedTarget || n.fromElement) && (hn($) || $[zt]))
          )
            break e;
          if (
            (A || j) &&
            ((j =
              T.window === T
                ? T
                : (j = T.ownerDocument)
                  ? j.defaultView || j.parentWindow
                  : window),
            A
              ? (($ = n.relatedTarget || n.toElement),
                (A = y),
                ($ = $ ? hn($) : null),
                $ !== null &&
                  ((Le = mn($)), $ !== Le || ($.tag !== 5 && $.tag !== 6)) &&
                  ($ = null))
              : ((A = null), ($ = y)),
            A !== $)
          ) {
            if (
              ((V = tu),
              (P = 'onMouseLeave'),
              (h = 'onMouseEnter'),
              (p = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((V = ru), (P = 'onPointerLeave'), (h = 'onPointerEnter'), (p = 'pointer')),
              (Le = A == null ? j : Un(A)),
              (v = $ == null ? j : Un($)),
              (j = new V(P, p + 'leave', A, n, T)),
              (j.target = Le),
              (j.relatedTarget = v),
              (P = null),
              hn(T) === y &&
                ((V = new V(h, p + 'enter', $, n, T)),
                (V.target = v),
                (V.relatedTarget = Le),
                (P = V)),
              (Le = P),
              A && $)
            )
              t: {
                for (V = A, h = $, p = 0, v = V; v; v = Fn(v)) p++;
                for (v = 0, P = h; P; P = Fn(P)) v++;
                for (; 0 < p - v; ) ((V = Fn(V)), p--);
                for (; 0 < v - p; ) ((h = Fn(h)), v--);
                for (; p--; ) {
                  if (V === h || (h !== null && V === h.alternate)) break t;
                  ((V = Fn(V)), (h = Fn(h)));
                }
                V = null;
              }
            else V = null;
            (A !== null && Iu(I, j, A, V, !1), $ !== null && Le !== null && Iu(I, Le, $, V, !0));
          }
        }
        e: {
          if (
            ((j = y ? Un(y) : window),
            (A = j.nodeName && j.nodeName.toLowerCase()),
            A === 'select' || (A === 'input' && j.type === 'file'))
          )
            var H = Ud;
          else if (au(j))
            if (du) H = Wd;
            else {
              H = $d;
              var Y = Bd;
            }
          else
            (A = j.nodeName) &&
              A.toLowerCase() === 'input' &&
              (j.type === 'checkbox' || j.type === 'radio') &&
              (H = Vd);
          if (H && (H = H(e, y))) {
            cu(I, H, n, T);
            break e;
          }
          (Y && Y(e, j, y),
            e === 'focusout' &&
              (Y = j._wrapperState) &&
              Y.controlled &&
              j.type === 'number' &&
              fi(j, 'number', j.value));
        }
        switch (((Y = y ? Un(y) : window), e)) {
          case 'focusin':
            (au(Y) || Y.contentEditable === 'true') && ((zn = Y), ($i = y), (_r = null));
            break;
          case 'focusout':
            _r = $i = zn = null;
            break;
          case 'mousedown':
            Vi = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Vi = !1), wu(I, n, T));
            break;
          case 'selectionchange':
            if (qd) break;
          case 'keydown':
          case 'keyup':
            wu(I, n, T);
        }
        var X;
        if (Fi)
          e: {
            switch (e) {
              case 'compositionstart':
                var Z = 'onCompositionStart';
                break e;
              case 'compositionend':
                Z = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Z = 'onCompositionUpdate';
                break e;
            }
            Z = void 0;
          }
        else
          Mn
            ? su(e, n) && (Z = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (Z = 'onCompositionStart');
        (Z &&
          (lu &&
            n.locale !== 'ko' &&
            (Mn || Z !== 'onCompositionStart'
              ? Z === 'onCompositionEnd' && Mn && (X = bs())
              : ((Xt = T), (Ri = 'value' in Xt ? Xt.value : Xt.textContent), (Mn = !0))),
          (Y = fl(y, Z)),
          0 < Y.length &&
            ((Z = new nu(Z, e, null, n, T)),
            I.push({ event: Z, listeners: Y }),
            X ? (Z.data = X) : ((X = uu(n)), X !== null && (Z.data = X)))),
          (X = Md ? zd(e, n) : Dd(e, n)) &&
            ((y = fl(y, 'onBeforeInput')),
            0 < y.length &&
              ((T = new nu('onBeforeInput', 'beforeinput', null, n, T)),
              I.push({ event: T, listeners: y }),
              (T.data = X))));
      }
      Tu(I, t);
    });
  }
  function Cr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function fl(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      (l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = ir(e, n)),
        i != null && r.unshift(Cr(e, i, l)),
        (i = ir(e, t)),
        i != null && r.push(Cr(e, i, l))),
        (e = e.return));
    }
    return r;
  }
  function Fn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Iu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var a = n,
        f = a.alternate,
        y = a.stateNode;
      if (f !== null && f === r) break;
      (a.tag === 5 &&
        y !== null &&
        ((a = y),
        l
          ? ((f = ir(n, i)), f != null && o.unshift(Cr(n, f, a)))
          : l || ((f = ir(n, i)), f != null && o.push(Cr(n, f, a)))),
        (n = n.return));
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Xd = /\r\n?/g,
    Zd = /\u0000|\uFFFD/g;
  function Ru(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Xd,
        `
`
      )
      .replace(Zd, '');
  }
  function pl(e, t, n) {
    if (((t = Ru(t)), Ru(e) !== t && n)) throw Error(s(425));
  }
  function ml() {}
  var Ki = null,
    Yi = null;
  function Xi(e, t) {
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
  var Zi = typeof setTimeout == 'function' ? setTimeout : void 0,
    Jd = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Pu = typeof Promise == 'function' ? Promise : void 0,
    bd =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Pu < 'u'
          ? function (e) {
              return Pu.resolve(null).then(e).catch(ef);
            }
          : Zi;
  function ef(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ji(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$')) {
          if (r === 0) {
            (e.removeChild(l), mr(t));
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = l;
    } while (n);
    mr(t);
  }
  function Jt(e) {
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
  function Ou(e) {
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
  var An = Math.random().toString(36).slice(2),
    Rt = '__reactFiber$' + An,
    Er = '__reactProps$' + An,
    zt = '__reactContainer$' + An,
    bi = '__reactEvents$' + An,
    tf = '__reactListeners$' + An,
    nf = '__reactHandles$' + An;
  function hn(e) {
    var t = e[Rt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[zt] || n[Rt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Ou(e); e !== null; ) {
            if ((n = e[Rt])) return n;
            e = Ou(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Nr(e) {
    return (
      (e = e[Rt] || e[zt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Un(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function hl(e) {
    return e[Er] || null;
  }
  var eo = [],
    Bn = -1;
  function bt(e) {
    return { current: e };
  }
  function ye(e) {
    0 > Bn || ((e.current = eo[Bn]), (eo[Bn] = null), Bn--);
  }
  function he(e, t) {
    (Bn++, (eo[Bn] = e.current), (e.current = t));
  }
  var en = {},
    Ge = bt(en),
    nt = bt(!1),
    vn = en;
  function $n(e, t) {
    var n = e.type.contextTypes;
    if (!n) return en;
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
  function rt(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function vl() {
    (ye(nt), ye(Ge));
  }
  function Mu(e, t, n) {
    if (Ge.current !== en) throw Error(s(168));
    (he(Ge, t), he(nt, n));
  }
  function zu(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(s(108, le(e) || 'Unknown', l));
    return F({}, n, r);
  }
  function yl(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || en),
      (vn = Ge.current),
      he(Ge, e),
      he(nt, nt.current),
      !0
    );
  }
  function Du(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    (n
      ? ((e = zu(e, t, vn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ye(nt),
        ye(Ge),
        he(Ge, e))
      : ye(nt),
      he(nt, n));
  }
  var Dt = null,
    gl = !1,
    to = !1;
  function Fu(e) {
    Dt === null ? (Dt = [e]) : Dt.push(e);
  }
  function rf(e) {
    ((gl = !0), Fu(e));
  }
  function tn() {
    if (!to && Dt !== null) {
      to = !0;
      var e = 0,
        t = ce;
      try {
        var n = Dt;
        for (ce = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Dt = null), (gl = !1));
      } catch (l) {
        throw (Dt !== null && (Dt = Dt.slice(e + 1)), Us(xi, tn), l);
      } finally {
        ((ce = t), (to = !1));
      }
    }
    return null;
  }
  var Vn = [],
    Wn = 0,
    wl = null,
    Sl = 0,
    ht = [],
    vt = 0,
    yn = null,
    Ft = 1,
    At = '';
  function gn(e, t) {
    ((Vn[Wn++] = Sl), (Vn[Wn++] = wl), (wl = e), (Sl = t));
  }
  function Au(e, t, n) {
    ((ht[vt++] = Ft), (ht[vt++] = At), (ht[vt++] = yn), (yn = e));
    var r = Ft;
    e = At;
    var l = 32 - xt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var i = 32 - xt(t) + l;
    if (30 < i) {
      var o = l - (l % 5);
      ((i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (Ft = (1 << (32 - xt(t) + l)) | (n << l) | r),
        (At = i + e));
    } else ((Ft = (1 << i) | (n << l) | r), (At = e));
  }
  function no(e) {
    e.return !== null && (gn(e, 1), Au(e, 1, 0));
  }
  function ro(e) {
    for (; e === wl; ) ((wl = Vn[--Wn]), (Vn[Wn] = null), (Sl = Vn[--Wn]), (Vn[Wn] = null));
    for (; e === yn; )
      ((yn = ht[--vt]),
        (ht[vt] = null),
        (At = ht[--vt]),
        (ht[vt] = null),
        (Ft = ht[--vt]),
        (ht[vt] = null));
  }
  var ft = null,
    pt = null,
    Se = !1,
    Et = null;
  function Uu(e, t) {
    var n = St(5, null, null, 0);
    ((n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Bu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (ft = e), (pt = Jt(t.firstChild)), !0) : !1
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
            ? ((n = yn !== null ? { id: Ft, overflow: At } : null),
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
  function lo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function io(e) {
    if (Se) {
      var t = pt;
      if (t) {
        var n = t;
        if (!Bu(e, t)) {
          if (lo(e)) throw Error(s(418));
          t = Jt(n.nextSibling);
          var r = ft;
          t && Bu(e, t) ? Uu(r, n) : ((e.flags = (e.flags & -4097) | 2), (Se = !1), (ft = e));
        }
      } else {
        if (lo(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (Se = !1), (ft = e));
      }
    }
  }
  function $u(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ft = e;
  }
  function _l(e) {
    if (e !== ft) return !1;
    if (!Se) return ($u(e), (Se = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !Xi(e.type, e.memoizedProps))),
      t && (t = pt))
    ) {
      if (lo(e)) throw (Vu(), Error(s(418)));
      for (; t; ) (Uu(e, t), (t = Jt(t.nextSibling)));
    }
    if (($u(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                pt = Jt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        pt = null;
      }
    } else pt = ft ? Jt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Vu() {
    for (var e = pt; e; ) e = Jt(e.nextSibling);
  }
  function Hn() {
    ((pt = ft = null), (Se = !1));
  }
  function oo(e) {
    Et === null ? (Et = [e]) : Et.push(e);
  }
  var lf = fe.ReactCurrentBatchConfig;
  function jr(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var l = r,
          i = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
          ? t.ref
          : ((t = function (o) {
              var a = l.refs;
              o === null ? delete a[i] : (a[i] = o);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != 'string') throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function kl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        s(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      )
    );
  }
  function Wu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Hu(e) {
    function t(h, p) {
      if (e) {
        var v = h.deletions;
        v === null ? ((h.deletions = [p]), (h.flags |= 16)) : v.push(p);
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
      return ((h = cn(h, p)), (h.index = 0), (h.sibling = null), h);
    }
    function i(h, p, v) {
      return (
        (h.index = v),
        e
          ? ((v = h.alternate),
            v !== null ? ((v = v.index), v < p ? ((h.flags |= 2), p) : v) : ((h.flags |= 2), p))
          : ((h.flags |= 1048576), p)
      );
    }
    function o(h) {
      return (e && h.alternate === null && (h.flags |= 2), h);
    }
    function a(h, p, v, P) {
      return p === null || p.tag !== 6
        ? ((p = Jo(v, h.mode, P)), (p.return = h), p)
        : ((p = l(p, v)), (p.return = h), p);
    }
    function f(h, p, v, P) {
      var H = v.type;
      return H === ze
        ? T(h, p, v.props.children, P, v.key)
        : p !== null &&
            (p.elementType === H ||
              (typeof H == 'object' && H !== null && H.$$typeof === pe && Wu(H) === p.type))
          ? ((P = l(p, v.props)), (P.ref = jr(h, p, v)), (P.return = h), P)
          : ((P = ql(v.type, v.key, v.props, null, h.mode, P)),
            (P.ref = jr(h, p, v)),
            (P.return = h),
            P);
    }
    function y(h, p, v, P) {
      return p === null ||
        p.tag !== 4 ||
        p.stateNode.containerInfo !== v.containerInfo ||
        p.stateNode.implementation !== v.implementation
        ? ((p = bo(v, h.mode, P)), (p.return = h), p)
        : ((p = l(p, v.children || [])), (p.return = h), p);
    }
    function T(h, p, v, P, H) {
      return p === null || p.tag !== 7
        ? ((p = Nn(v, h.mode, P, H)), (p.return = h), p)
        : ((p = l(p, v)), (p.return = h), p);
    }
    function I(h, p, v) {
      if ((typeof p == 'string' && p !== '') || typeof p == 'number')
        return ((p = Jo('' + p, h.mode, v)), (p.return = h), p);
      if (typeof p == 'object' && p !== null) {
        switch (p.$$typeof) {
          case Ie:
            return (
              (v = ql(p.type, p.key, p.props, null, h.mode, v)),
              (v.ref = jr(h, null, p)),
              (v.return = h),
              v
            );
          case Ce:
            return ((p = bo(p, h.mode, v)), (p.return = h), p);
          case pe:
            var P = p._init;
            return I(h, P(p._payload), v);
        }
        if (nr(p) || q(p)) return ((p = Nn(p, h.mode, v, null)), (p.return = h), p);
        kl(h, p);
      }
      return null;
    }
    function j(h, p, v, P) {
      var H = p !== null ? p.key : null;
      if ((typeof v == 'string' && v !== '') || typeof v == 'number')
        return H !== null ? null : a(h, p, '' + v, P);
      if (typeof v == 'object' && v !== null) {
        switch (v.$$typeof) {
          case Ie:
            return v.key === H ? f(h, p, v, P) : null;
          case Ce:
            return v.key === H ? y(h, p, v, P) : null;
          case pe:
            return ((H = v._init), j(h, p, H(v._payload), P));
        }
        if (nr(v) || q(v)) return H !== null ? null : T(h, p, v, P, null);
        kl(h, v);
      }
      return null;
    }
    function A(h, p, v, P, H) {
      if ((typeof P == 'string' && P !== '') || typeof P == 'number')
        return ((h = h.get(v) || null), a(p, h, '' + P, H));
      if (typeof P == 'object' && P !== null) {
        switch (P.$$typeof) {
          case Ie:
            return ((h = h.get(P.key === null ? v : P.key) || null), f(p, h, P, H));
          case Ce:
            return ((h = h.get(P.key === null ? v : P.key) || null), y(p, h, P, H));
          case pe:
            var Y = P._init;
            return A(h, p, v, Y(P._payload), H);
        }
        if (nr(P) || q(P)) return ((h = h.get(v) || null), T(p, h, P, H, null));
        kl(p, P);
      }
      return null;
    }
    function $(h, p, v, P) {
      for (var H = null, Y = null, X = p, Z = (p = 0), Ae = null; X !== null && Z < v.length; Z++) {
        X.index > Z ? ((Ae = X), (X = null)) : (Ae = X.sibling);
        var oe = j(h, X, v[Z], P);
        if (oe === null) {
          X === null && (X = Ae);
          break;
        }
        (e && X && oe.alternate === null && t(h, X),
          (p = i(oe, p, Z)),
          Y === null ? (H = oe) : (Y.sibling = oe),
          (Y = oe),
          (X = Ae));
      }
      if (Z === v.length) return (n(h, X), Se && gn(h, Z), H);
      if (X === null) {
        for (; Z < v.length; Z++)
          ((X = I(h, v[Z], P)),
            X !== null && ((p = i(X, p, Z)), Y === null ? (H = X) : (Y.sibling = X), (Y = X)));
        return (Se && gn(h, Z), H);
      }
      for (X = r(h, X); Z < v.length; Z++)
        ((Ae = A(X, h, Z, v[Z], P)),
          Ae !== null &&
            (e && Ae.alternate !== null && X.delete(Ae.key === null ? Z : Ae.key),
            (p = i(Ae, p, Z)),
            Y === null ? (H = Ae) : (Y.sibling = Ae),
            (Y = Ae)));
      return (
        e &&
          X.forEach(function (dn) {
            return t(h, dn);
          }),
        Se && gn(h, Z),
        H
      );
    }
    function V(h, p, v, P) {
      var H = q(v);
      if (typeof H != 'function') throw Error(s(150));
      if (((v = H.call(v)), v == null)) throw Error(s(151));
      for (
        var Y = (H = null), X = p, Z = (p = 0), Ae = null, oe = v.next();
        X !== null && !oe.done;
        Z++, oe = v.next()
      ) {
        X.index > Z ? ((Ae = X), (X = null)) : (Ae = X.sibling);
        var dn = j(h, X, oe.value, P);
        if (dn === null) {
          X === null && (X = Ae);
          break;
        }
        (e && X && dn.alternate === null && t(h, X),
          (p = i(dn, p, Z)),
          Y === null ? (H = dn) : (Y.sibling = dn),
          (Y = dn),
          (X = Ae));
      }
      if (oe.done) return (n(h, X), Se && gn(h, Z), H);
      if (X === null) {
        for (; !oe.done; Z++, oe = v.next())
          ((oe = I(h, oe.value, P)),
            oe !== null && ((p = i(oe, p, Z)), Y === null ? (H = oe) : (Y.sibling = oe), (Y = oe)));
        return (Se && gn(h, Z), H);
      }
      for (X = r(h, X); !oe.done; Z++, oe = v.next())
        ((oe = A(X, h, Z, oe.value, P)),
          oe !== null &&
            (e && oe.alternate !== null && X.delete(oe.key === null ? Z : oe.key),
            (p = i(oe, p, Z)),
            Y === null ? (H = oe) : (Y.sibling = oe),
            (Y = oe)));
      return (
        e &&
          X.forEach(function (Af) {
            return t(h, Af);
          }),
        Se && gn(h, Z),
        H
      );
    }
    function Le(h, p, v, P) {
      if (
        (typeof v == 'object' &&
          v !== null &&
          v.type === ze &&
          v.key === null &&
          (v = v.props.children),
        typeof v == 'object' && v !== null)
      ) {
        switch (v.$$typeof) {
          case Ie:
            e: {
              for (var H = v.key, Y = p; Y !== null; ) {
                if (Y.key === H) {
                  if (((H = v.type), H === ze)) {
                    if (Y.tag === 7) {
                      (n(h, Y.sibling), (p = l(Y, v.props.children)), (p.return = h), (h = p));
                      break e;
                    }
                  } else if (
                    Y.elementType === H ||
                    (typeof H == 'object' && H !== null && H.$$typeof === pe && Wu(H) === Y.type)
                  ) {
                    (n(h, Y.sibling),
                      (p = l(Y, v.props)),
                      (p.ref = jr(h, Y, v)),
                      (p.return = h),
                      (h = p));
                    break e;
                  }
                  n(h, Y);
                  break;
                } else t(h, Y);
                Y = Y.sibling;
              }
              v.type === ze
                ? ((p = Nn(v.props.children, h.mode, P, v.key)), (p.return = h), (h = p))
                : ((P = ql(v.type, v.key, v.props, null, h.mode, P)),
                  (P.ref = jr(h, p, v)),
                  (P.return = h),
                  (h = P));
            }
            return o(h);
          case Ce:
            e: {
              for (Y = v.key; p !== null; ) {
                if (p.key === Y)
                  if (
                    p.tag === 4 &&
                    p.stateNode.containerInfo === v.containerInfo &&
                    p.stateNode.implementation === v.implementation
                  ) {
                    (n(h, p.sibling), (p = l(p, v.children || [])), (p.return = h), (h = p));
                    break e;
                  } else {
                    n(h, p);
                    break;
                  }
                else t(h, p);
                p = p.sibling;
              }
              ((p = bo(v, h.mode, P)), (p.return = h), (h = p));
            }
            return o(h);
          case pe:
            return ((Y = v._init), Le(h, p, Y(v._payload), P));
        }
        if (nr(v)) return $(h, p, v, P);
        if (q(v)) return V(h, p, v, P);
        kl(h, v);
      }
      return (typeof v == 'string' && v !== '') || typeof v == 'number'
        ? ((v = '' + v),
          p !== null && p.tag === 6
            ? (n(h, p.sibling), (p = l(p, v)), (p.return = h), (h = p))
            : (n(h, p), (p = Jo(v, h.mode, P)), (p.return = h), (h = p)),
          o(h))
        : n(h, p);
    }
    return Le;
  }
  var Qn = Hu(!0),
    Qu = Hu(!1),
    xl = bt(null),
    Cl = null,
    qn = null,
    so = null;
  function uo() {
    so = qn = Cl = null;
  }
  function ao(e) {
    var t = xl.current;
    (ye(xl), (e._currentValue = t));
  }
  function co(e, t, n) {
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
  function Gn(e, t) {
    ((Cl = e),
      (so = qn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (lt = !0), (e.firstContext = null)));
  }
  function yt(e) {
    var t = e._currentValue;
    if (so !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), qn === null)) {
        if (Cl === null) throw Error(s(308));
        ((qn = e), (Cl.dependencies = { lanes: 0, firstContext: e }));
      } else qn = qn.next = e;
    return t;
  }
  var wn = null;
  function fo(e) {
    wn === null ? (wn = [e]) : wn.push(e);
  }
  function qu(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), fo(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Ut(e, r)
    );
  }
  function Ut(e, t) {
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
  var nn = !1;
  function po(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Gu(e, t) {
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
  function rn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (ie & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Ut(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), fo(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Ut(e, n)
    );
  }
  function El(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ni(e, n));
    }
  }
  function Ku(e, t) {
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
  function Nl(e, t, n, r) {
    var l = e.updateQueue;
    nn = !1;
    var i = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      a = l.shared.pending;
    if (a !== null) {
      l.shared.pending = null;
      var f = a,
        y = f.next;
      ((f.next = null), o === null ? (i = y) : (o.next = y), (o = f));
      var T = e.alternate;
      T !== null &&
        ((T = T.updateQueue),
        (a = T.lastBaseUpdate),
        a !== o && (a === null ? (T.firstBaseUpdate = y) : (a.next = y), (T.lastBaseUpdate = f)));
    }
    if (i !== null) {
      var I = l.baseState;
      ((o = 0), (T = y = f = null), (a = i));
      do {
        var j = a.lane,
          A = a.eventTime;
        if ((r & j) === j) {
          T !== null &&
            (T = T.next =
              {
                eventTime: A,
                lane: 0,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null,
              });
          e: {
            var $ = e,
              V = a;
            switch (((j = t), (A = n), V.tag)) {
              case 1:
                if ((($ = V.payload), typeof $ == 'function')) {
                  I = $.call(A, I, j);
                  break e;
                }
                I = $;
                break e;
              case 3:
                $.flags = ($.flags & -65537) | 128;
              case 0:
                if (
                  (($ = V.payload), (j = typeof $ == 'function' ? $.call(A, I, j) : $), j == null)
                )
                  break e;
                I = F({}, I, j);
                break e;
              case 2:
                nn = !0;
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((e.flags |= 64), (j = l.effects), j === null ? (l.effects = [a]) : j.push(a));
        } else
          ((A = {
            eventTime: A,
            lane: j,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          }),
            T === null ? ((y = T = A), (f = I)) : (T = T.next = A),
            (o |= j));
        if (((a = a.next), a === null)) {
          if (((a = l.shared.pending), a === null)) break;
          ((j = a),
            (a = j.next),
            (j.next = null),
            (l.lastBaseUpdate = j),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (T === null && (f = I),
        (l.baseState = f),
        (l.firstBaseUpdate = y),
        (l.lastBaseUpdate = T),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((o |= l.lane), (l = l.next));
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      ((kn |= o), (e.lanes = o), (e.memoizedState = I));
    }
  }
  function Yu(e, t, n) {
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
  var Tr = {},
    Pt = bt(Tr),
    Lr = bt(Tr),
    Ir = bt(Tr);
  function Sn(e) {
    if (e === Tr) throw Error(s(174));
    return e;
  }
  function mo(e, t) {
    switch ((he(Ir, t), he(Lr, e), he(Pt, Tr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : mi(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = mi(t, e)));
    }
    (ye(Pt), he(Pt, t));
  }
  function Kn() {
    (ye(Pt), ye(Lr), ye(Ir));
  }
  function Xu(e) {
    Sn(Ir.current);
    var t = Sn(Pt.current),
      n = mi(t, e.type);
    t !== n && (he(Lr, e), he(Pt, n));
  }
  function ho(e) {
    Lr.current === e && (ye(Pt), ye(Lr));
  }
  var _e = bt(0);
  function jl(e) {
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
  var vo = [];
  function yo() {
    for (var e = 0; e < vo.length; e++) vo[e]._workInProgressVersionPrimary = null;
    vo.length = 0;
  }
  var Tl = fe.ReactCurrentDispatcher,
    go = fe.ReactCurrentBatchConfig,
    _n = 0,
    ke = null,
    Pe = null,
    De = null,
    Ll = !1,
    Rr = !1,
    Pr = 0,
    of = 0;
  function Ke() {
    throw Error(s(321));
  }
  function wo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ct(e[n], t[n])) return !1;
    return !0;
  }
  function So(e, t, n, r, l, i) {
    if (
      ((_n = i),
      (ke = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Tl.current = e === null || e.memoizedState === null ? cf : df),
      (e = n(r, l)),
      Rr)
    ) {
      i = 0;
      do {
        if (((Rr = !1), (Pr = 0), 25 <= i)) throw Error(s(301));
        ((i += 1), (De = Pe = null), (t.updateQueue = null), (Tl.current = ff), (e = n(r, l)));
      } while (Rr);
    }
    if (
      ((Tl.current = Pl),
      (t = Pe !== null && Pe.next !== null),
      (_n = 0),
      (De = Pe = ke = null),
      (Ll = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function _o() {
    var e = Pr !== 0;
    return ((Pr = 0), e);
  }
  function Ot() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (De === null ? (ke.memoizedState = De = e) : (De = De.next = e), De);
  }
  function gt() {
    if (Pe === null) {
      var e = ke.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Pe.next;
    var t = De === null ? ke.memoizedState : De.next;
    if (t !== null) ((De = t), (Pe = e));
    else {
      if (e === null) throw Error(s(310));
      ((Pe = e),
        (e = {
          memoizedState: Pe.memoizedState,
          baseState: Pe.baseState,
          baseQueue: Pe.baseQueue,
          queue: Pe.queue,
          next: null,
        }),
        De === null ? (ke.memoizedState = De = e) : (De = De.next = e));
    }
    return De;
  }
  function Or(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function ko(e) {
    var t = gt(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Pe,
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
      var a = (o = null),
        f = null,
        y = i;
      do {
        var T = y.lane;
        if ((_n & T) === T)
          (f !== null &&
            (f = f.next =
              {
                lane: 0,
                action: y.action,
                hasEagerState: y.hasEagerState,
                eagerState: y.eagerState,
                next: null,
              }),
            (r = y.hasEagerState ? y.eagerState : e(r, y.action)));
        else {
          var I = {
            lane: T,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          };
          (f === null ? ((a = f = I), (o = r)) : (f = f.next = I), (ke.lanes |= T), (kn |= T));
        }
        y = y.next;
      } while (y !== null && y !== i);
      (f === null ? (o = r) : (f.next = a),
        Ct(r, t.memoizedState) || (lt = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = f),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((i = l.lane), (ke.lanes |= i), (kn |= i), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function xo(e) {
    var t = gt(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = (l = l.next);
      do ((i = e(i, o.action)), (o = o.next));
      while (o !== l);
      (Ct(i, t.memoizedState) || (lt = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function Zu() {}
  function Ju(e, t) {
    var n = ke,
      r = gt(),
      l = t(),
      i = !Ct(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (lt = !0)),
      (r = r.queue),
      Co(ta.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (De !== null && De.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Mr(9, ea.bind(null, n, r, l, t), void 0, null), Fe === null))
        throw Error(s(349));
      (_n & 30) !== 0 || bu(n, t, l);
    }
    return l;
  }
  function bu(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ke.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (ke.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ea(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), na(t) && ra(e));
  }
  function ta(e, t, n) {
    return n(function () {
      na(t) && ra(e);
    });
  }
  function na(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ct(e, n);
    } catch {
      return !0;
    }
  }
  function ra(e) {
    var t = Ut(e, 1);
    t !== null && Lt(t, e, 1, -1);
  }
  function la(e) {
    var t = Ot();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Or,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = af.bind(null, ke, e)),
      [t.memoizedState, e]
    );
  }
  function Mr(e, t, n, r) {
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
  function ia() {
    return gt().memoizedState;
  }
  function Il(e, t, n, r) {
    var l = Ot();
    ((ke.flags |= e), (l.memoizedState = Mr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function Rl(e, t, n, r) {
    var l = gt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Pe !== null) {
      var o = Pe.memoizedState;
      if (((i = o.destroy), r !== null && wo(r, o.deps))) {
        l.memoizedState = Mr(t, n, i, r);
        return;
      }
    }
    ((ke.flags |= e), (l.memoizedState = Mr(1 | t, n, i, r)));
  }
  function oa(e, t) {
    return Il(8390656, 8, e, t);
  }
  function Co(e, t) {
    return Rl(2048, 8, e, t);
  }
  function sa(e, t) {
    return Rl(4, 2, e, t);
  }
  function ua(e, t) {
    return Rl(4, 4, e, t);
  }
  function aa(e, t) {
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
  function ca(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), Rl(4, 4, aa.bind(null, t, e), n));
  }
  function Eo() {}
  function da(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function fa(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wo(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function pa(e, t, n) {
    return (_n & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (lt = !0)), (e.memoizedState = n))
      : (Ct(n, t) || ((n = Ws()), (ke.lanes |= n), (kn |= n), (e.baseState = !0)), t);
  }
  function sf(e, t) {
    var n = ce;
    ((ce = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = go.transition;
    go.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((ce = n), (go.transition = r));
    }
  }
  function ma() {
    return gt().memoizedState;
  }
  function uf(e, t, n) {
    var r = un(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), ha(e)))
      va(t, n);
    else if (((n = qu(e, t, n, r)), n !== null)) {
      var l = be();
      (Lt(n, e, r, l), ya(n, t, r));
    }
  }
  function af(e, t, n) {
    var r = un(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ha(e)) va(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var o = t.lastRenderedState,
            a = i(o, n);
          if (((l.hasEagerState = !0), (l.eagerState = a), Ct(a, o))) {
            var f = t.interleaved;
            (f === null ? ((l.next = l), fo(t)) : ((l.next = f.next), (f.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = qu(e, t, l, r)), n !== null && ((l = be()), Lt(n, e, r, l), ya(n, t, r)));
    }
  }
  function ha(e) {
    var t = e.alternate;
    return e === ke || (t !== null && t === ke);
  }
  function va(e, t) {
    Rr = Ll = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function ya(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ni(e, n));
    }
  }
  var Pl = {
      readContext: yt,
      useCallback: Ke,
      useContext: Ke,
      useEffect: Ke,
      useImperativeHandle: Ke,
      useInsertionEffect: Ke,
      useLayoutEffect: Ke,
      useMemo: Ke,
      useReducer: Ke,
      useRef: Ke,
      useState: Ke,
      useDebugValue: Ke,
      useDeferredValue: Ke,
      useTransition: Ke,
      useMutableSource: Ke,
      useSyncExternalStore: Ke,
      useId: Ke,
      unstable_isNewReconciler: !1,
    },
    cf = {
      readContext: yt,
      useCallback: function (e, t) {
        return ((Ot().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: yt,
      useEffect: oa,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), Il(4194308, 4, aa.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Il(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Il(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Ot();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var r = Ot();
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
          (e = e.dispatch = uf.bind(null, ke, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ot();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: la,
      useDebugValue: Eo,
      useDeferredValue: function (e) {
        return (Ot().memoizedState = e);
      },
      useTransition: function () {
        var e = la(!1),
          t = e[0];
        return ((e = sf.bind(null, e[1])), (Ot().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ke,
          l = Ot();
        if (Se) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), Fe === null)) throw Error(s(349));
          (_n & 30) !== 0 || bu(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          oa(ta.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          Mr(9, ea.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Ot(),
          t = Fe.identifierPrefix;
        if (Se) {
          var n = At,
            r = Ft;
          ((n = (r & ~(1 << (32 - xt(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = Pr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':'));
        } else ((n = of++), (t = ':' + t + 'r' + n.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    df = {
      readContext: yt,
      useCallback: da,
      useContext: yt,
      useEffect: Co,
      useImperativeHandle: ca,
      useInsertionEffect: sa,
      useLayoutEffect: ua,
      useMemo: fa,
      useReducer: ko,
      useRef: ia,
      useState: function () {
        return ko(Or);
      },
      useDebugValue: Eo,
      useDeferredValue: function (e) {
        var t = gt();
        return pa(t, Pe.memoizedState, e);
      },
      useTransition: function () {
        var e = ko(Or)[0],
          t = gt().memoizedState;
        return [e, t];
      },
      useMutableSource: Zu,
      useSyncExternalStore: Ju,
      useId: ma,
      unstable_isNewReconciler: !1,
    },
    ff = {
      readContext: yt,
      useCallback: da,
      useContext: yt,
      useEffect: Co,
      useImperativeHandle: ca,
      useInsertionEffect: sa,
      useLayoutEffect: ua,
      useMemo: fa,
      useReducer: xo,
      useRef: ia,
      useState: function () {
        return xo(Or);
      },
      useDebugValue: Eo,
      useDeferredValue: function (e) {
        var t = gt();
        return Pe === null ? (t.memoizedState = e) : pa(t, Pe.memoizedState, e);
      },
      useTransition: function () {
        var e = xo(Or)[0],
          t = gt().memoizedState;
        return [e, t];
      },
      useMutableSource: Zu,
      useSyncExternalStore: Ju,
      useId: ma,
      unstable_isNewReconciler: !1,
    };
  function Nt(e, t) {
    if (e && e.defaultProps) {
      ((t = F({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function No(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : F({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Ol = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? mn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = be(),
        l = un(e),
        i = Bt(r, l);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = rn(e, i, l)),
        t !== null && (Lt(t, e, l, r), El(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = be(),
        l = un(e),
        i = Bt(r, l);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = rn(e, i, l)),
        t !== null && (Lt(t, e, l, r), El(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = be(),
        r = un(e),
        l = Bt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = rn(e, l, r)),
        t !== null && (Lt(t, e, r, n), El(t, e, r)));
    },
  };
  function ga(e, t, n, r, l, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, i, o)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Sr(n, r) || !Sr(l, i)
          : !0
    );
  }
  function wa(e, t, n) {
    var r = !1,
      l = en,
      i = t.contextType;
    return (
      typeof i == 'object' && i !== null
        ? (i = yt(i))
        : ((l = rt(t) ? vn : Ge.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? $n(e, l) : en)),
      (t = new t(n, i)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ol),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Sa(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Ol.enqueueReplaceState(t, t.state, null));
  }
  function jo(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), po(e));
    var i = t.contextType;
    (typeof i == 'object' && i !== null
      ? (l.context = yt(i))
      : ((i = rt(t) ? vn : Ge.current), (l.context = $n(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == 'function' && (No(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((t = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount(),
        t !== l.state && Ol.enqueueReplaceState(l, l.state, null),
        Nl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function Yn(e, t) {
    try {
      var n = '',
        r = t;
      do ((n += b(r)), (r = r.return));
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
  function To(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Lo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var pf = typeof WeakMap == 'function' ? WeakMap : Map;
  function _a(e, t, n) {
    ((n = Bt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Bl || ((Bl = !0), (Ho = r)), Lo(e, t));
      }),
      n
    );
  }
  function ka(e, t, n) {
    ((n = Bt(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Lo(e, t);
        }));
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == 'function' &&
        (n.callback = function () {
          (Lo(e, t),
            typeof r != 'function' && (on === null ? (on = new Set([this])) : on.add(this)));
          var o = t.stack;
          this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' });
        }),
      n
    );
  }
  function xa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new pf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = jf.bind(null, e, t, n)), t.then(e, e));
  }
  function Ca(e) {
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
  function Ea(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = Bt(-1, 1)), (t.tag = 2), rn(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var mf = fe.ReactCurrentOwner,
    lt = !1;
  function Je(e, t, n, r) {
    t.child = e === null ? Qu(t, null, n, r) : Qn(t, e.child, n, r);
  }
  function Na(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      Gn(t, l),
      (r = So(e, t, n, r, i, l)),
      (n = _o()),
      e !== null && !lt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), $t(e, t, l))
        : (Se && n && no(t), (t.flags |= 1), Je(e, t, r, l), t.child)
    );
  }
  function ja(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == 'function' &&
        !Zo(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Ta(e, t, i, r, l))
        : ((e = ql(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var o = i.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Sr), n(o, r) && e.ref === t.ref))
        return $t(e, t, l);
    }
    return ((t.flags |= 1), (e = cn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Ta(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Sr(i, r) && e.ref === t.ref)
        if (((lt = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (lt = !0);
        else return ((t.lanes = e.lanes), $t(e, t, l));
    }
    return Io(e, t, n, r, l);
  }
  function La(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          he(Zn, mt),
          (mt |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            he(Zn, mt),
            (mt |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = i !== null ? i.baseLanes : n),
          he(Zn, mt),
          (mt |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        he(Zn, mt),
        (mt |= r));
    return (Je(e, t, l, n), t.child);
  }
  function Ia(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Io(e, t, n, r, l) {
    var i = rt(n) ? vn : Ge.current;
    return (
      (i = $n(t, i)),
      Gn(t, l),
      (n = So(e, t, n, r, i, l)),
      (r = _o()),
      e !== null && !lt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), $t(e, t, l))
        : (Se && r && no(t), (t.flags |= 1), Je(e, t, n, l), t.child)
    );
  }
  function Ra(e, t, n, r, l) {
    if (rt(n)) {
      var i = !0;
      yl(t);
    } else i = !1;
    if ((Gn(t, l), t.stateNode === null)) (zl(e, t), wa(t, n, r), jo(t, n, r, l), (r = !0));
    else if (e === null) {
      var o = t.stateNode,
        a = t.memoizedProps;
      o.props = a;
      var f = o.context,
        y = n.contextType;
      typeof y == 'object' && y !== null
        ? (y = yt(y))
        : ((y = rt(n) ? vn : Ge.current), (y = $n(t, y)));
      var T = n.getDerivedStateFromProps,
        I = typeof T == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
      (I ||
        (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof o.componentWillReceiveProps != 'function') ||
        ((a !== r || f !== y) && Sa(t, o, r, y)),
        (nn = !1));
      var j = t.memoizedState;
      ((o.state = j),
        Nl(t, r, o, l),
        (f = t.memoizedState),
        a !== r || j !== f || nt.current || nn
          ? (typeof T == 'function' && (No(t, n, T, r), (f = t.memoizedState)),
            (a = nn || ga(t, n, a, r, j, f, y))
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
            (o.context = y),
            (r = a))
          : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1)));
    } else {
      ((o = t.stateNode),
        Gu(e, t),
        (a = t.memoizedProps),
        (y = t.type === t.elementType ? a : Nt(t.type, a)),
        (o.props = y),
        (I = t.pendingProps),
        (j = o.context),
        (f = n.contextType),
        typeof f == 'object' && f !== null
          ? (f = yt(f))
          : ((f = rt(n) ? vn : Ge.current), (f = $n(t, f))));
      var A = n.getDerivedStateFromProps;
      ((T = typeof A == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
        (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof o.componentWillReceiveProps != 'function') ||
        ((a !== I || j !== f) && Sa(t, o, r, f)),
        (nn = !1),
        (j = t.memoizedState),
        (o.state = j),
        Nl(t, r, o, l));
      var $ = t.memoizedState;
      a !== I || j !== $ || nt.current || nn
        ? (typeof A == 'function' && (No(t, n, A, r), ($ = t.memoizedState)),
          (y = nn || ga(t, n, y, r, j, $, f) || !1)
            ? (T ||
                (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                  typeof o.componentWillUpdate != 'function') ||
                (typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(r, $, f),
                typeof o.UNSAFE_componentWillUpdate == 'function' &&
                  o.UNSAFE_componentWillUpdate(r, $, f)),
              typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof o.componentDidUpdate != 'function' ||
                (a === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != 'function' ||
                (a === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = $)),
          (o.props = r),
          (o.state = $),
          (o.context = f),
          (r = y))
        : (typeof o.componentDidUpdate != 'function' ||
            (a === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != 'function' ||
            (a === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Ro(e, t, n, r, i, l);
  }
  function Ro(e, t, n, r, l, i) {
    Ia(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return (l && Du(t, n, !1), $t(e, t, i));
    ((r = t.stateNode), (mf.current = t));
    var a = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = Qn(t, e.child, null, i)), (t.child = Qn(t, null, a, i)))
        : Je(e, t, a, i),
      (t.memoizedState = r.state),
      l && Du(t, n, !0),
      t.child
    );
  }
  function Pa(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Mu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Mu(e, t.context, !1),
      mo(e, t.containerInfo));
  }
  function Oa(e, t, n, r, l) {
    return (Hn(), oo(l), (t.flags |= 256), Je(e, t, n, r), t.child);
  }
  var Po = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Oo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ma(e, t, n) {
    var r = t.pendingProps,
      l = _e.current,
      i = !1,
      o = (t.flags & 128) !== 0,
      a;
    if (
      ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      a ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      he(_e, l & 1),
      e === null)
    )
      return (
        io(t),
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
                  : (i = Gl(o, r, 0, null)),
                (e = Nn(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = Oo(n)),
                (t.memoizedState = Po),
                e)
              : Mo(t, o))
      );
    if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
      return hf(e, t, o, r, a, l, n);
    if (i) {
      ((i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling));
      var f = { mode: 'hidden', children: r.children };
      return (
        (o & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = f), (t.deletions = null))
          : ((r = cn(l, f)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        a !== null ? (i = cn(a, i)) : ((i = Nn(i, o, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? Oo(n)
            : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
        (i.memoizedState = o),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = Po),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = cn(i, { mode: 'visible', children: r.children })),
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
  function Mo(e, t) {
    return (
      (t = Gl({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ml(e, t, n, r) {
    return (
      r !== null && oo(r),
      Qn(t, e.child, null, n),
      (e = Mo(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function hf(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = To(Error(s(422)))), Ml(e, t, o, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (l = t.mode),
            (r = Gl({ mode: 'visible', children: r.children }, l, 0, null)),
            (i = Nn(i, l, o, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && Qn(t, e.child, null, o),
            (t.child.memoizedState = Oo(o)),
            (t.memoizedState = Po),
            i);
    if ((t.mode & 1) === 0) return Ml(e, t, o, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
      return ((r = a), (i = Error(s(419))), (r = To(i, r, void 0)), Ml(e, t, o, r));
    }
    if (((a = (o & e.childLanes) !== 0), lt || a)) {
      if (((r = Fe), r !== null)) {
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
          l !== 0 && l !== i.retryLane && ((i.retryLane = l), Ut(e, l), Lt(r, e, l, -1)));
      }
      return (Xo(), (r = To(Error(s(421)))), Ml(e, t, o, r));
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Tf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = i.treeContext),
        (pt = Jt(l.nextSibling)),
        (ft = t),
        (Se = !0),
        (Et = null),
        e !== null &&
          ((ht[vt++] = Ft),
          (ht[vt++] = At),
          (ht[vt++] = yn),
          (Ft = e.id),
          (At = e.overflow),
          (yn = t)),
        (t = Mo(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function za(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), co(e.return, t, n));
  }
  function zo(e, t, n, r, l) {
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
  function Da(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((Je(e, t, r.children, n), (r = _e.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && za(e, n, t);
          else if (e.tag === 19) za(e, n, t);
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
    if ((he(_e, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate), e !== null && jl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            zo(t, !1, l, n, i));
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && jl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          zo(t, !0, n, null, i);
          break;
        case 'together':
          zo(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function zl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function $t(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (kn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = cn(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function vf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Pa(t), Hn());
        break;
      case 5:
        Xu(t);
        break;
      case 1:
        rt(t.type) && yl(t);
        break;
      case 4:
        mo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (he(xl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (he(_e, _e.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Ma(e, t, n)
              : (he(_e, _e.current & 1), (e = $t(e, t, n)), e !== null ? e.sibling : null);
        he(_e, _e.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Da(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          he(_e, _e.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), La(e, t, n));
    }
    return $t(e, t, n);
  }
  var Fa, Do, Aa, Ua;
  ((Fa = function (e, t) {
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
    (Do = function () {}),
    (Aa = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), Sn(Pt.current));
        var i = null;
        switch (n) {
          case 'input':
            ((l = Tn(e, l)), (r = Tn(e, r)), (i = []));
            break;
          case 'select':
            ((l = F({}, l, { value: void 0 })), (r = F({}, r, { value: void 0 })), (i = []));
            break;
          case 'textarea':
            ((l = pi(e, l)), (r = pi(e, r)), (i = []));
            break;
          default:
            typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = ml);
        }
        hi(n, r);
        var o;
        n = null;
        for (y in l)
          if (!r.hasOwnProperty(y) && l.hasOwnProperty(y) && l[y] != null)
            if (y === 'style') {
              var a = l[y];
              for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
            } else
              y !== 'dangerouslySetInnerHTML' &&
                y !== 'children' &&
                y !== 'suppressContentEditableWarning' &&
                y !== 'suppressHydrationWarning' &&
                y !== 'autoFocus' &&
                (k.hasOwnProperty(y) ? i || (i = []) : (i = i || []).push(y, null));
        for (y in r) {
          var f = r[y];
          if (
            ((a = l != null ? l[y] : void 0),
            r.hasOwnProperty(y) && f !== a && (f != null || a != null))
          )
            if (y === 'style')
              if (a) {
                for (o in a)
                  !a.hasOwnProperty(o) ||
                    (f && f.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ''));
                for (o in f) f.hasOwnProperty(o) && a[o] !== f[o] && (n || (n = {}), (n[o] = f[o]));
              } else (n || (i || (i = []), i.push(y, n)), (n = f));
            else
              y === 'dangerouslySetInnerHTML'
                ? ((f = f ? f.__html : void 0),
                  (a = a ? a.__html : void 0),
                  f != null && a !== f && (i = i || []).push(y, f))
                : y === 'children'
                  ? (typeof f != 'string' && typeof f != 'number') || (i = i || []).push(y, '' + f)
                  : y !== 'suppressContentEditableWarning' &&
                    y !== 'suppressHydrationWarning' &&
                    (k.hasOwnProperty(y)
                      ? (f != null && y === 'onScroll' && ve('scroll', e), i || a === f || (i = []))
                      : (i = i || []).push(y, f));
        }
        n && (i = i || []).push('style', n);
        var y = i;
        (t.updateQueue = y) && (t.flags |= 4);
      }
    }),
    (Ua = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function zr(e, t) {
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
  function Ye(e) {
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
  function yf(e, t, n) {
    var r = t.pendingProps;
    switch ((ro(t), t.tag)) {
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
        return (Ye(t), null);
      case 1:
        return (rt(t.type) && vl(), Ye(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Kn(),
          ye(nt),
          ye(Ge),
          yo(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (_l(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Et !== null && (Go(Et), (Et = null)))),
          Do(e, t),
          Ye(t),
          null
        );
      case 5:
        ho(t);
        var l = Sn(Ir.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Aa(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return (Ye(t), null);
          }
          if (((e = Sn(Pt.current)), _l(t))) {
            ((r = t.stateNode), (n = t.type));
            var i = t.memoizedProps;
            switch (((r[Rt] = t), (r[Er] = i), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                (ve('cancel', r), ve('close', r));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ve('load', r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < kr.length; l++) ve(kr[l], r);
                break;
              case 'source':
                ve('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                (ve('error', r), ve('load', r));
                break;
              case 'details':
                ve('toggle', r);
                break;
              case 'input':
                (pn(r, i), ve('invalid', r));
                break;
              case 'select':
                ((r._wrapperState = { wasMultiple: !!i.multiple }), ve('invalid', r));
                break;
              case 'textarea':
                (ks(r, i), ve('invalid', r));
            }
            (hi(n, i), (l = null));
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var a = i[o];
                o === 'children'
                  ? typeof a == 'string'
                    ? r.textContent !== a &&
                      (i.suppressHydrationWarning !== !0 && pl(r.textContent, a, e),
                      (l = ['children', a]))
                    : typeof a == 'number' &&
                      r.textContent !== '' + a &&
                      (i.suppressHydrationWarning !== !0 && pl(r.textContent, a, e),
                      (l = ['children', '' + a]))
                  : k.hasOwnProperty(o) && a != null && o === 'onScroll' && ve('scroll', r);
              }
            switch (n) {
              case 'input':
                (te(r), _s(r, i, !0));
                break;
              case 'textarea':
                (te(r), Cs(r));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof i.onClick == 'function' && (r.onclick = ml);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((o = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Es(n)),
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
              (e[Rt] = t),
              (e[Er] = r),
              Fa(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((o = vi(n, r)), n)) {
                case 'dialog':
                  (ve('cancel', e), ve('close', e), (l = r));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (ve('load', e), (l = r));
                  break;
                case 'video':
                case 'audio':
                  for (l = 0; l < kr.length; l++) ve(kr[l], e);
                  l = r;
                  break;
                case 'source':
                  (ve('error', e), (l = r));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (ve('error', e), ve('load', e), (l = r));
                  break;
                case 'details':
                  (ve('toggle', e), (l = r));
                  break;
                case 'input':
                  (pn(e, r), (l = Tn(e, r)), ve('invalid', e));
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = F({}, r, { value: void 0 })),
                    ve('invalid', e));
                  break;
                case 'textarea':
                  (ks(e, r), (l = pi(e, r)), ve('invalid', e));
                  break;
                default:
                  l = r;
              }
              (hi(n, l), (a = l));
              for (i in a)
                if (a.hasOwnProperty(i)) {
                  var f = a[i];
                  i === 'style'
                    ? Ts(e, f)
                    : i === 'dangerouslySetInnerHTML'
                      ? ((f = f ? f.__html : void 0), f != null && Ns(e, f))
                      : i === 'children'
                        ? typeof f == 'string'
                          ? (n !== 'textarea' || f !== '') && rr(e, f)
                          : typeof f == 'number' && rr(e, '' + f)
                        : i !== 'suppressContentEditableWarning' &&
                          i !== 'suppressHydrationWarning' &&
                          i !== 'autoFocus' &&
                          (k.hasOwnProperty(i)
                            ? f != null && i === 'onScroll' && ve('scroll', e)
                            : f != null && je(e, i, f, o));
                }
              switch (n) {
                case 'input':
                  (te(e), _s(e, r, !1));
                  break;
                case 'textarea':
                  (te(e), Cs(e));
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + re(r.value));
                  break;
                case 'select':
                  ((e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? Ln(e, !!r.multiple, i, !1)
                      : r.defaultValue != null && Ln(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = ml);
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
        return (Ye(t), null);
      case 6:
        if (e && t.stateNode != null) Ua(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(s(166));
          if (((n = Sn(Ir.current)), Sn(Pt.current), _l(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Rt] = t),
              (i = r.nodeValue !== n) && ((e = ft), e !== null))
            )
              switch (e.tag) {
                case 3:
                  pl(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    pl(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Rt] = t),
              (t.stateNode = r));
        }
        return (Ye(t), null);
      case 13:
        if (
          (ye(_e),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Se && pt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Vu(), Hn(), (t.flags |= 98560), (i = !1));
          else if (((i = _l(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(s(318));
              if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
                throw Error(s(317));
              i[Rt] = t;
            } else (Hn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ye(t), (i = !1));
          } else (Et !== null && (Go(Et), (Et = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (_e.current & 1) !== 0 ? Oe === 0 && (Oe = 3) : Xo())),
            t.updateQueue !== null && (t.flags |= 4),
            Ye(t),
            null);
      case 4:
        return (Kn(), Do(e, t), e === null && xr(t.stateNode.containerInfo), Ye(t), null);
      case 10:
        return (ao(t.type._context), Ye(t), null);
      case 17:
        return (rt(t.type) && vl(), Ye(t), null);
      case 19:
        if ((ye(_e), (i = t.memoizedState), i === null)) return (Ye(t), null);
        if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) zr(i, !1);
          else {
            if (Oe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = jl(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      zr(i, !1),
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
                  return (he(_e, (_e.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Te() > Jn &&
              ((t.flags |= 128), (r = !0), zr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = jl(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                zr(i, !0),
                i.tail === null && i.tailMode === 'hidden' && !o.alternate && !Se)
              )
                return (Ye(t), null);
            } else
              2 * Te() - i.renderingStartTime > Jn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), zr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = i.last), n !== null ? (n.sibling = o) : (t.child = o), (i.last = o));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Te()),
            (t.sibling = null),
            (n = _e.current),
            he(_e, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ye(t), null);
      case 22:
      case 23:
        return (
          Yo(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (mt & 1073741824) !== 0 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ye(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function gf(e, t) {
    switch ((ro(t), t.tag)) {
      case 1:
        return (
          rt(t.type) && vl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Kn(),
          ye(nt),
          ye(Ge),
          yo(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (ho(t), null);
      case 13:
        if ((ye(_e), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          Hn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (ye(_e), null);
      case 4:
        return (Kn(), null);
      case 10:
        return (ao(t.type._context), null);
      case 22:
      case 23:
        return (Yo(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Dl = !1,
    Xe = !1,
    wf = typeof WeakSet == 'function' ? WeakSet : Set,
    B = null;
  function Xn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          Ne(e, t, r);
        }
      else n.current = null;
  }
  function Fo(e, t, n) {
    try {
      n();
    } catch (r) {
      Ne(e, t, r);
    }
  }
  var Ba = !1;
  function Sf(e, t) {
    if (((Ki = nl), (e = gu()), Bi(e))) {
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
              a = -1,
              f = -1,
              y = 0,
              T = 0,
              I = e,
              j = null;
            t: for (;;) {
              for (
                var A;
                I !== n || (l !== 0 && I.nodeType !== 3) || (a = o + l),
                  I !== i || (r !== 0 && I.nodeType !== 3) || (f = o + r),
                  I.nodeType === 3 && (o += I.nodeValue.length),
                  (A = I.firstChild) !== null;
              )
                ((j = I), (I = A));
              for (;;) {
                if (I === e) break t;
                if (
                  (j === n && ++y === l && (a = o),
                  j === i && ++T === r && (f = o),
                  (A = I.nextSibling) !== null)
                )
                  break;
                ((I = j), (j = I.parentNode));
              }
              I = A;
            }
            n = a === -1 || f === -1 ? null : { start: a, end: f };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Yi = { focusedElem: e, selectionRange: n }, nl = !1, B = t; B !== null; )
      if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (B = e));
      else
        for (; B !== null; ) {
          t = B;
          try {
            var $ = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if ($ !== null) {
                    var V = $.memoizedProps,
                      Le = $.memoizedState,
                      h = t.stateNode,
                      p = h.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? V : Nt(t.type, V),
                        Le
                      );
                    h.__reactInternalSnapshotBeforeUpdate = p;
                  }
                  break;
                case 3:
                  var v = t.stateNode.containerInfo;
                  v.nodeType === 1
                    ? (v.textContent = '')
                    : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (P) {
            Ne(t, t.return, P);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (B = e));
            break;
          }
          B = t.return;
        }
    return (($ = Ba), (Ba = !1), $);
  }
  function Dr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          ((l.destroy = void 0), i !== void 0 && Fo(t, n, i));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Fl(e, t) {
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
  function Ao(e) {
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
  function $a(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), $a(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Rt], delete t[Er], delete t[bi], delete t[tf], delete t[nf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Va(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Wa(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Va(e.return)) return null;
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
  function Uo(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = ml)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Uo(e, t, n), e = e.sibling; e !== null; ) (Uo(e, t, n), (e = e.sibling));
  }
  function Bo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Bo(e, t, n), e = e.sibling; e !== null; ) (Bo(e, t, n), (e = e.sibling));
  }
  var $e = null,
    jt = !1;
  function ln(e, t, n) {
    for (n = n.child; n !== null; ) (Ha(e, t, n), (n = n.sibling));
  }
  function Ha(e, t, n) {
    if (It && typeof It.onCommitFiberUnmount == 'function')
      try {
        It.onCommitFiberUnmount(Xr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Xe || Xn(n, t);
      case 6:
        var r = $e,
          l = jt;
        (($e = null),
          ln(e, t, n),
          ($e = r),
          (jt = l),
          $e !== null &&
            (jt
              ? ((e = $e),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : $e.removeChild(n.stateNode)));
        break;
      case 18:
        $e !== null &&
          (jt
            ? ((e = $e),
              (n = n.stateNode),
              e.nodeType === 8 ? Ji(e.parentNode, n) : e.nodeType === 1 && Ji(e, n),
              mr(e))
            : Ji($e, n.stateNode));
        break;
      case 4:
        ((r = $e),
          (l = jt),
          ($e = n.stateNode.containerInfo),
          (jt = !0),
          ln(e, t, n),
          ($e = r),
          (jt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Xe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var i = l,
              o = i.destroy;
            ((i = i.tag),
              o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Fo(n, t, o),
              (l = l.next));
          } while (l !== r);
        }
        ln(e, t, n);
        break;
      case 1:
        if (!Xe && (Xn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (a) {
            Ne(n, t, a);
          }
        ln(e, t, n);
        break;
      case 21:
        ln(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Xe = (r = Xe) || n.memoizedState !== null), ln(e, t, n), (Xe = r))
          : ln(e, t, n);
        break;
      default:
        ln(e, t, n);
    }
  }
  function Qa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new wf()),
        t.forEach(function (r) {
          var l = Lf.bind(null, e, r);
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
          var i = e,
            o = t,
            a = o;
          e: for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                (($e = a.stateNode), (jt = !1));
                break e;
              case 3:
                (($e = a.stateNode.containerInfo), (jt = !0));
                break e;
              case 4:
                (($e = a.stateNode.containerInfo), (jt = !0));
                break e;
            }
            a = a.return;
          }
          if ($e === null) throw Error(s(160));
          (Ha(i, o, l), ($e = null), (jt = !1));
          var f = l.alternate;
          (f !== null && (f.return = null), (l.return = null));
        } catch (y) {
          Ne(l, t, y);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (qa(t, e), (t = t.sibling));
  }
  function qa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Tt(t, e), Mt(e), r & 4)) {
          try {
            (Dr(3, e, e.return), Fl(3, e));
          } catch (V) {
            Ne(e, e.return, V);
          }
          try {
            Dr(5, e, e.return);
          } catch (V) {
            Ne(e, e.return, V);
          }
        }
        break;
      case 1:
        (Tt(t, e), Mt(e), r & 512 && n !== null && Xn(n, n.return));
        break;
      case 5:
        if ((Tt(t, e), Mt(e), r & 512 && n !== null && Xn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            rr(l, '');
          } catch (V) {
            Ne(e, e.return, V);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            o = n !== null ? n.memoizedProps : i,
            a = e.type,
            f = e.updateQueue;
          if (((e.updateQueue = null), f !== null))
            try {
              (a === 'input' && i.type === 'radio' && i.name != null && tr(l, i), vi(a, o));
              var y = vi(a, i);
              for (o = 0; o < f.length; o += 2) {
                var T = f[o],
                  I = f[o + 1];
                T === 'style'
                  ? Ts(l, I)
                  : T === 'dangerouslySetInnerHTML'
                    ? Ns(l, I)
                    : T === 'children'
                      ? rr(l, I)
                      : je(l, T, I, y);
              }
              switch (a) {
                case 'input':
                  di(l, i);
                  break;
                case 'textarea':
                  xs(l, i);
                  break;
                case 'select':
                  var j = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var A = i.value;
                  A != null
                    ? Ln(l, !!i.multiple, A, !1)
                    : j !== !!i.multiple &&
                      (i.defaultValue != null
                        ? Ln(l, !!i.multiple, i.defaultValue, !0)
                        : Ln(l, !!i.multiple, i.multiple ? [] : '', !1));
              }
              l[Er] = i;
            } catch (V) {
              Ne(e, e.return, V);
            }
        }
        break;
      case 6:
        if ((Tt(t, e), Mt(e), r & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((l = e.stateNode), (i = e.memoizedProps));
          try {
            l.nodeValue = i;
          } catch (V) {
            Ne(e, e.return, V);
          }
        }
        break;
      case 3:
        if ((Tt(t, e), Mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            mr(t.containerInfo);
          } catch (V) {
            Ne(e, e.return, V);
          }
        break;
      case 4:
        (Tt(t, e), Mt(e));
        break;
      case 13:
        (Tt(t, e),
          Mt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (Wo = Te())),
          r & 4 && Qa(e));
        break;
      case 22:
        if (
          ((T = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Xe = (y = Xe) || T), Tt(t, e), (Xe = y)) : Tt(t, e),
          Mt(e),
          r & 8192)
        ) {
          if (
            ((y = e.memoizedState !== null), (e.stateNode.isHidden = y) && !T && (e.mode & 1) !== 0)
          )
            for (B = e, T = e.child; T !== null; ) {
              for (I = B = T; B !== null; ) {
                switch (((j = B), (A = j.child), j.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Dr(4, j, j.return);
                    break;
                  case 1:
                    Xn(j, j.return);
                    var $ = j.stateNode;
                    if (typeof $.componentWillUnmount == 'function') {
                      ((r = j), (n = j.return));
                      try {
                        ((t = r),
                          ($.props = t.memoizedProps),
                          ($.state = t.memoizedState),
                          $.componentWillUnmount());
                      } catch (V) {
                        Ne(r, n, V);
                      }
                    }
                    break;
                  case 5:
                    Xn(j, j.return);
                    break;
                  case 22:
                    if (j.memoizedState !== null) {
                      Ya(I);
                      continue;
                    }
                }
                A !== null ? ((A.return = j), (B = A)) : Ya(I);
              }
              T = T.sibling;
            }
          e: for (T = null, I = e; ; ) {
            if (I.tag === 5) {
              if (T === null) {
                T = I;
                try {
                  ((l = I.stateNode),
                    y
                      ? ((i = l.style),
                        typeof i.setProperty == 'function'
                          ? i.setProperty('display', 'none', 'important')
                          : (i.display = 'none'))
                      : ((a = I.stateNode),
                        (f = I.memoizedProps.style),
                        (o = f != null && f.hasOwnProperty('display') ? f.display : null),
                        (a.style.display = js('display', o))));
                } catch (V) {
                  Ne(e, e.return, V);
                }
              }
            } else if (I.tag === 6) {
              if (T === null)
                try {
                  I.stateNode.nodeValue = y ? '' : I.memoizedProps;
                } catch (V) {
                  Ne(e, e.return, V);
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
              (T === I && (T = null), (I = I.return));
            }
            (T === I && (T = null), (I.sibling.return = I.return), (I = I.sibling));
          }
        }
        break;
      case 19:
        (Tt(t, e), Mt(e), r & 4 && Qa(e));
        break;
      case 21:
        break;
      default:
        (Tt(t, e), Mt(e));
    }
  }
  function Mt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Va(n)) {
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
            r.flags & 32 && (rr(l, ''), (r.flags &= -33));
            var i = Wa(e);
            Bo(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              a = Wa(e);
            Uo(e, a, o);
            break;
          default:
            throw Error(s(161));
        }
      } catch (f) {
        Ne(e, e.return, f);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function _f(e, t, n) {
    ((B = e), Ga(e));
  }
  function Ga(e, t, n) {
    for (var r = (e.mode & 1) !== 0; B !== null; ) {
      var l = B,
        i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || Dl;
        if (!o) {
          var a = l.alternate,
            f = (a !== null && a.memoizedState !== null) || Xe;
          a = Dl;
          var y = Xe;
          if (((Dl = o), (Xe = f) && !y))
            for (B = l; B !== null; )
              ((o = B),
                (f = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? Xa(l)
                  : f !== null
                    ? ((f.return = o), (B = f))
                    : Xa(l));
          for (; i !== null; ) ((B = i), Ga(i), (i = i.sibling));
          ((B = l), (Dl = a), (Xe = y));
        }
        Ka(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? ((i.return = l), (B = i)) : Ka(e);
    }
  }
  function Ka(e) {
    for (; B !== null; ) {
      var t = B;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Xe || Fl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Xe)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : Nt(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var i = t.updateQueue;
                i !== null && Yu(t, i, r);
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
                  Yu(t, o, n);
                }
                break;
              case 5:
                var a = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = a;
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
                  var y = t.alternate;
                  if (y !== null) {
                    var T = y.memoizedState;
                    if (T !== null) {
                      var I = T.dehydrated;
                      I !== null && mr(I);
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
          Xe || (t.flags & 512 && Ao(t));
        } catch (j) {
          Ne(t, t.return, j);
        }
      }
      if (t === e) {
        B = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (B = n));
        break;
      }
      B = t.return;
    }
  }
  function Ya(e) {
    for (; B !== null; ) {
      var t = B;
      if (t === e) {
        B = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (B = n));
        break;
      }
      B = t.return;
    }
  }
  function Xa(e) {
    for (; B !== null; ) {
      var t = B;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Fl(4, t);
            } catch (f) {
              Ne(t, n, f);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (f) {
                Ne(t, l, f);
              }
            }
            var i = t.return;
            try {
              Ao(t);
            } catch (f) {
              Ne(t, i, f);
            }
            break;
          case 5:
            var o = t.return;
            try {
              Ao(t);
            } catch (f) {
              Ne(t, o, f);
            }
        }
      } catch (f) {
        Ne(t, t.return, f);
      }
      if (t === e) {
        B = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        ((a.return = t.return), (B = a));
        break;
      }
      B = t.return;
    }
  }
  var kf = Math.ceil,
    Al = fe.ReactCurrentDispatcher,
    $o = fe.ReactCurrentOwner,
    wt = fe.ReactCurrentBatchConfig,
    ie = 0,
    Fe = null,
    Re = null,
    Ve = 0,
    mt = 0,
    Zn = bt(0),
    Oe = 0,
    Fr = null,
    kn = 0,
    Ul = 0,
    Vo = 0,
    Ar = null,
    it = null,
    Wo = 0,
    Jn = 1 / 0,
    Vt = null,
    Bl = !1,
    Ho = null,
    on = null,
    $l = !1,
    sn = null,
    Vl = 0,
    Ur = 0,
    Qo = null,
    Wl = -1,
    Hl = 0;
  function be() {
    return (ie & 6) !== 0 ? Te() : Wl !== -1 ? Wl : (Wl = Te());
  }
  function un(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ie & 2) !== 0 && Ve !== 0
        ? Ve & -Ve
        : lf.transition !== null
          ? (Hl === 0 && (Hl = Ws()), Hl)
          : ((e = ce), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Js(e.type))), e);
  }
  function Lt(e, t, n, r) {
    if (50 < Ur) throw ((Ur = 0), (Qo = null), Error(s(185)));
    (ar(e, n, r),
      ((ie & 2) === 0 || e !== Fe) &&
        (e === Fe && ((ie & 2) === 0 && (Ul |= n), Oe === 4 && an(e, Ve)),
        ot(e, r),
        n === 1 && ie === 0 && (t.mode & 1) === 0 && ((Jn = Te() + 500), gl && tn())));
  }
  function ot(e, t) {
    var n = e.callbackNode;
    ld(e, t);
    var r = br(e, e === Fe ? Ve : 0);
    if (r === 0) (n !== null && Bs(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Bs(n), t === 1))
        (e.tag === 0 ? rf(Ja.bind(null, e)) : Fu(Ja.bind(null, e)),
          bd(function () {
            (ie & 6) === 0 && tn();
          }),
          (n = null));
      else {
        switch (Hs(r)) {
          case 1:
            n = xi;
            break;
          case 4:
            n = $s;
            break;
          case 16:
            n = Yr;
            break;
          case 536870912:
            n = Vs;
            break;
          default:
            n = Yr;
        }
        n = oc(n, Za.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Za(e, t) {
    if (((Wl = -1), (Hl = 0), (ie & 6) !== 0)) throw Error(s(327));
    var n = e.callbackNode;
    if (bn() && e.callbackNode !== n) return null;
    var r = br(e, e === Fe ? Ve : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Ql(e, r);
    else {
      t = r;
      var l = ie;
      ie |= 2;
      var i = ec();
      (Fe !== e || Ve !== t) && ((Vt = null), (Jn = Te() + 500), Cn(e, t));
      do
        try {
          Ef();
          break;
        } catch (a) {
          ba(e, a);
        }
      while (!0);
      (uo(), (Al.current = i), (ie = l), Re !== null ? (t = 0) : ((Fe = null), (Ve = 0), (t = Oe)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Ci(e)), l !== 0 && ((r = l), (t = qo(e, l)))), t === 1))
        throw ((n = Fr), Cn(e, 0), an(e, r), ot(e, Te()), n);
      if (t === 6) an(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !xf(l) &&
            ((t = Ql(e, r)),
            t === 2 && ((i = Ci(e)), i !== 0 && ((r = i), (t = qo(e, i)))),
            t === 1))
        )
          throw ((n = Fr), Cn(e, 0), an(e, r), ot(e, Te()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            En(e, it, Vt);
            break;
          case 3:
            if ((an(e, r), (r & 130023424) === r && ((t = Wo + 500 - Te()), 10 < t))) {
              if (br(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (be(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = Zi(En.bind(null, e, it, Vt), t);
              break;
            }
            En(e, it, Vt);
            break;
          case 4:
            if ((an(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - xt(r);
              ((i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i));
            }
            if (
              ((r = l),
              (r = Te() - r),
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
                            : 1960 * kf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Zi(En.bind(null, e, it, Vt), r);
              break;
            }
            En(e, it, Vt);
            break;
          case 5:
            En(e, it, Vt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (ot(e, Te()), e.callbackNode === n ? Za.bind(null, e) : null);
  }
  function qo(e, t) {
    var n = Ar;
    return (
      e.current.memoizedState.isDehydrated && (Cn(e, t).flags |= 256),
      (e = Ql(e, t)),
      e !== 2 && ((t = it), (it = n), t !== null && Go(t)),
      e
    );
  }
  function Go(e) {
    it === null ? (it = e) : it.push.apply(it, e);
  }
  function xf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!Ct(i(), l)) return !1;
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
  function an(e, t) {
    for (
      t &= ~Vo, t &= ~Ul, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - xt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function Ja(e) {
    if ((ie & 6) !== 0) throw Error(s(327));
    bn();
    var t = br(e, 0);
    if ((t & 1) === 0) return (ot(e, Te()), null);
    var n = Ql(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ci(e);
      r !== 0 && ((t = r), (n = qo(e, r)));
    }
    if (n === 1) throw ((n = Fr), Cn(e, 0), an(e, t), ot(e, Te()), n);
    if (n === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      En(e, it, Vt),
      ot(e, Te()),
      null
    );
  }
  function Ko(e, t) {
    var n = ie;
    ie |= 1;
    try {
      return e(t);
    } finally {
      ((ie = n), ie === 0 && ((Jn = Te() + 500), gl && tn()));
    }
  }
  function xn(e) {
    sn !== null && sn.tag === 0 && (ie & 6) === 0 && bn();
    var t = ie;
    ie |= 1;
    var n = wt.transition,
      r = ce;
    try {
      if (((wt.transition = null), (ce = 1), e)) return e();
    } finally {
      ((ce = r), (wt.transition = n), (ie = t), (ie & 6) === 0 && tn());
    }
  }
  function Yo() {
    ((mt = Zn.current), ye(Zn));
  }
  function Cn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Jd(n)), Re !== null))
      for (n = Re.return; n !== null; ) {
        var r = n;
        switch ((ro(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && vl());
            break;
          case 3:
            (Kn(), ye(nt), ye(Ge), yo());
            break;
          case 5:
            ho(r);
            break;
          case 4:
            Kn();
            break;
          case 13:
            ye(_e);
            break;
          case 19:
            ye(_e);
            break;
          case 10:
            ao(r.type._context);
            break;
          case 22:
          case 23:
            Yo();
        }
        n = n.return;
      }
    if (
      ((Fe = e),
      (Re = e = cn(e.current, null)),
      (Ve = mt = t),
      (Oe = 0),
      (Fr = null),
      (Vo = Ul = kn = 0),
      (it = Ar = null),
      wn !== null)
    ) {
      for (t = 0; t < wn.length; t++)
        if (((n = wn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var o = i.next;
            ((i.next = l), (r.next = o));
          }
          n.pending = r;
        }
      wn = null;
    }
    return e;
  }
  function ba(e, t) {
    do {
      var n = Re;
      try {
        if ((uo(), (Tl.current = Pl), Ll)) {
          for (var r = ke.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          Ll = !1;
        }
        if (
          ((_n = 0),
          (De = Pe = ke = null),
          (Rr = !1),
          (Pr = 0),
          ($o.current = null),
          n === null || n.return === null)
        ) {
          ((Oe = 1), (Fr = t), (Re = null));
          break;
        }
        e: {
          var i = e,
            o = n.return,
            a = n,
            f = t;
          if (
            ((t = Ve),
            (a.flags |= 32768),
            f !== null && typeof f == 'object' && typeof f.then == 'function')
          ) {
            var y = f,
              T = a,
              I = T.tag;
            if ((T.mode & 1) === 0 && (I === 0 || I === 11 || I === 15)) {
              var j = T.alternate;
              j
                ? ((T.updateQueue = j.updateQueue),
                  (T.memoizedState = j.memoizedState),
                  (T.lanes = j.lanes))
                : ((T.updateQueue = null), (T.memoizedState = null));
            }
            var A = Ca(o);
            if (A !== null) {
              ((A.flags &= -257), Ea(A, o, a, i, t), A.mode & 1 && xa(i, y, t), (t = A), (f = y));
              var $ = t.updateQueue;
              if ($ === null) {
                var V = new Set();
                (V.add(f), (t.updateQueue = V));
              } else $.add(f);
              break e;
            } else {
              if ((t & 1) === 0) {
                (xa(i, y, t), Xo());
                break e;
              }
              f = Error(s(426));
            }
          } else if (Se && a.mode & 1) {
            var Le = Ca(o);
            if (Le !== null) {
              ((Le.flags & 65536) === 0 && (Le.flags |= 256), Ea(Le, o, a, i, t), oo(Yn(f, a)));
              break e;
            }
          }
          ((i = f = Yn(f, a)),
            Oe !== 4 && (Oe = 2),
            Ar === null ? (Ar = [i]) : Ar.push(i),
            (i = o));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var h = _a(i, f, t);
                Ku(i, h);
                break e;
              case 1:
                a = f;
                var p = i.type,
                  v = i.stateNode;
                if (
                  (i.flags & 128) === 0 &&
                  (typeof p.getDerivedStateFromError == 'function' ||
                    (v !== null &&
                      typeof v.componentDidCatch == 'function' &&
                      (on === null || !on.has(v))))
                ) {
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var P = ka(i, a, t);
                  Ku(i, P);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        nc(n);
      } catch (H) {
        ((t = H), Re === n && n !== null && (Re = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ec() {
    var e = Al.current;
    return ((Al.current = Pl), e === null ? Pl : e);
  }
  function Xo() {
    ((Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4),
      Fe === null || ((kn & 268435455) === 0 && (Ul & 268435455) === 0) || an(Fe, Ve));
  }
  function Ql(e, t) {
    var n = ie;
    ie |= 2;
    var r = ec();
    (Fe !== e || Ve !== t) && ((Vt = null), Cn(e, t));
    do
      try {
        Cf();
        break;
      } catch (l) {
        ba(e, l);
      }
    while (!0);
    if ((uo(), (ie = n), (Al.current = r), Re !== null)) throw Error(s(261));
    return ((Fe = null), (Ve = 0), Oe);
  }
  function Cf() {
    for (; Re !== null; ) tc(Re);
  }
  function Ef() {
    for (; Re !== null && !Yc(); ) tc(Re);
  }
  function tc(e) {
    var t = ic(e.alternate, e, mt);
    ((e.memoizedProps = e.pendingProps), t === null ? nc(e) : (Re = t), ($o.current = null));
  }
  function nc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = yf(n, t, mt)), n !== null)) {
          Re = n;
          return;
        }
      } else {
        if (((n = gf(n, t)), n !== null)) {
          ((n.flags &= 32767), (Re = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Oe = 6), (Re = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Re = t;
        return;
      }
      Re = t = e;
    } while (t !== null);
    Oe === 0 && (Oe = 5);
  }
  function En(e, t, n) {
    var r = ce,
      l = wt.transition;
    try {
      ((wt.transition = null), (ce = 1), Nf(e, t, n, r));
    } finally {
      ((wt.transition = l), (ce = r));
    }
    return null;
  }
  function Nf(e, t, n, r) {
    do bn();
    while (sn !== null);
    if ((ie & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (id(e, i),
      e === Fe && ((Re = Fe = null), (Ve = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        $l ||
        (($l = !0),
        oc(Yr, function () {
          return (bn(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ((i = wt.transition), (wt.transition = null));
      var o = ce;
      ce = 1;
      var a = ie;
      ((ie |= 4),
        ($o.current = null),
        Sf(e, n),
        qa(n, e),
        Qd(Yi),
        (nl = !!Ki),
        (Yi = Ki = null),
        (e.current = n),
        _f(n),
        Xc(),
        (ie = a),
        (ce = o),
        (wt.transition = i));
    } else e.current = n;
    if (
      ($l && (($l = !1), (sn = e), (Vl = l)),
      (i = e.pendingLanes),
      i === 0 && (on = null),
      bc(n.stateNode),
      ot(e, Te()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (Bl) throw ((Bl = !1), (e = Ho), (Ho = null), e);
    return (
      (Vl & 1) !== 0 && e.tag !== 0 && bn(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === Qo ? Ur++ : ((Ur = 0), (Qo = e))) : (Ur = 0),
      tn(),
      null
    );
  }
  function bn() {
    if (sn !== null) {
      var e = Hs(Vl),
        t = wt.transition,
        n = ce;
      try {
        if (((wt.transition = null), (ce = 16 > e ? 16 : e), sn === null)) var r = !1;
        else {
          if (((e = sn), (sn = null), (Vl = 0), (ie & 6) !== 0)) throw Error(s(331));
          var l = ie;
          for (ie |= 4, B = e.current; B !== null; ) {
            var i = B,
              o = i.child;
            if ((B.flags & 16) !== 0) {
              var a = i.deletions;
              if (a !== null) {
                for (var f = 0; f < a.length; f++) {
                  var y = a[f];
                  for (B = y; B !== null; ) {
                    var T = B;
                    switch (T.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Dr(8, T, i);
                    }
                    var I = T.child;
                    if (I !== null) ((I.return = T), (B = I));
                    else
                      for (; B !== null; ) {
                        T = B;
                        var j = T.sibling,
                          A = T.return;
                        if (($a(T), T === y)) {
                          B = null;
                          break;
                        }
                        if (j !== null) {
                          ((j.return = A), (B = j));
                          break;
                        }
                        B = A;
                      }
                  }
                }
                var $ = i.alternate;
                if ($ !== null) {
                  var V = $.child;
                  if (V !== null) {
                    $.child = null;
                    do {
                      var Le = V.sibling;
                      ((V.sibling = null), (V = Le));
                    } while (V !== null);
                  }
                }
                B = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null) ((o.return = i), (B = o));
            else
              e: for (; B !== null; ) {
                if (((i = B), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dr(9, i, i.return);
                  }
                var h = i.sibling;
                if (h !== null) {
                  ((h.return = i.return), (B = h));
                  break e;
                }
                B = i.return;
              }
          }
          var p = e.current;
          for (B = p; B !== null; ) {
            o = B;
            var v = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && v !== null) ((v.return = o), (B = v));
            else
              e: for (o = p; B !== null; ) {
                if (((a = B), (a.flags & 2048) !== 0))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Fl(9, a);
                    }
                  } catch (H) {
                    Ne(a, a.return, H);
                  }
                if (a === o) {
                  B = null;
                  break e;
                }
                var P = a.sibling;
                if (P !== null) {
                  ((P.return = a.return), (B = P));
                  break e;
                }
                B = a.return;
              }
          }
          if (((ie = l), tn(), It && typeof It.onPostCommitFiberRoot == 'function'))
            try {
              It.onPostCommitFiberRoot(Xr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((ce = n), (wt.transition = t));
      }
    }
    return !1;
  }
  function rc(e, t, n) {
    ((t = Yn(n, t)),
      (t = _a(e, t, 1)),
      (e = rn(e, t, 1)),
      (t = be()),
      e !== null && (ar(e, 1, t), ot(e, t)));
  }
  function Ne(e, t, n) {
    if (e.tag === 3) rc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          rc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (on === null || !on.has(r)))
          ) {
            ((e = Yn(n, e)),
              (e = ka(t, e, 1)),
              (t = rn(t, e, 1)),
              (e = be()),
              t !== null && (ar(t, 1, e), ot(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function jf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = be()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Fe === e &&
        (Ve & n) === n &&
        (Oe === 4 || (Oe === 3 && (Ve & 130023424) === Ve && 500 > Te() - Wo)
          ? Cn(e, 0)
          : (Vo |= n)),
      ot(e, t));
  }
  function lc(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Jr), (Jr <<= 1), (Jr & 130023424) === 0 && (Jr = 4194304)));
    var n = be();
    ((e = Ut(e, t)), e !== null && (ar(e, t, n), ot(e, n)));
  }
  function Tf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), lc(e, n));
  }
  function Lf(e, t) {
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
    (r !== null && r.delete(t), lc(e, n));
  }
  var ic;
  ic = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || nt.current) lt = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((lt = !1), vf(e, t, n));
        lt = (e.flags & 131072) !== 0;
      }
    else ((lt = !1), Se && (t.flags & 1048576) !== 0 && Au(t, Sl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (zl(e, t), (e = t.pendingProps));
        var l = $n(t, Ge.current);
        (Gn(t, n), (l = So(null, t, r, e, l, n)));
        var i = _o();
        return (
          (t.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              rt(r) ? ((i = !0), yl(t)) : (i = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              po(t),
              (l.updater = Ol),
              (t.stateNode = l),
              (l._reactInternals = t),
              jo(t, r, e, n),
              (t = Ro(null, t, r, !0, i, n)))
            : ((t.tag = 0), Se && i && no(t), Je(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (zl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Rf(r)),
            (e = Nt(r, e)),
            l)
          ) {
            case 0:
              t = Io(null, t, r, e, n);
              break e;
            case 1:
              t = Ra(null, t, r, e, n);
              break e;
            case 11:
              t = Na(null, t, r, e, n);
              break e;
            case 14:
              t = ja(null, t, r, Nt(r.type, e), n);
              break e;
          }
          throw Error(s(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Nt(r, l)),
          Io(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Nt(r, l)),
          Ra(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Pa(t), e === null)) throw Error(s(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            Gu(e, t),
            Nl(t, r, null, n));
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
              ((l = Yn(Error(s(423)), t)), (t = Oa(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Yn(Error(s(424)), t)), (t = Oa(e, t, r, n, l)));
              break e;
            } else
              for (
                pt = Jt(t.stateNode.containerInfo.firstChild),
                  ft = t,
                  Se = !0,
                  Et = null,
                  n = Qu(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Hn(), r === l)) {
              t = $t(e, t, n);
              break e;
            }
            Je(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Xu(t),
          e === null && io(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          Xi(r, l) ? (o = null) : i !== null && Xi(r, i) && (t.flags |= 32),
          Ia(e, t),
          Je(e, t, o, n),
          t.child
        );
      case 6:
        return (e === null && io(t), null);
      case 13:
        return Ma(e, t, n);
      case 4:
        return (
          mo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Qn(t, null, r, n)) : Je(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Nt(r, l)),
          Na(e, t, r, l, n)
        );
      case 7:
        return (Je(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Je(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Je(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (o = l.value),
            he(xl, r._currentValue),
            (r._currentValue = o),
            i !== null)
          )
            if (Ct(i.value, o)) {
              if (i.children === l.children && !nt.current) {
                t = $t(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var a = i.dependencies;
                if (a !== null) {
                  o = i.child;
                  for (var f = a.firstContext; f !== null; ) {
                    if (f.context === r) {
                      if (i.tag === 1) {
                        ((f = Bt(-1, n & -n)), (f.tag = 2));
                        var y = i.updateQueue;
                        if (y !== null) {
                          y = y.shared;
                          var T = y.pending;
                          (T === null ? (f.next = f) : ((f.next = T.next), (T.next = f)),
                            (y.pending = f));
                        }
                      }
                      ((i.lanes |= n),
                        (f = i.alternate),
                        f !== null && (f.lanes |= n),
                        co(i.return, n, t),
                        (a.lanes |= n));
                      break;
                    }
                    f = f.next;
                  }
                } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((o = i.return), o === null)) throw Error(s(341));
                  ((o.lanes |= n),
                    (a = o.alternate),
                    a !== null && (a.lanes |= n),
                    co(o, n, t),
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
          (Je(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Gn(t, n),
          (l = yt(l)),
          (r = r(l)),
          (t.flags |= 1),
          Je(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = Nt(r, t.pendingProps)), (l = Nt(r.type, l)), ja(e, t, r, l, n));
      case 15:
        return Ta(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Nt(r, l)),
          zl(e, t),
          (t.tag = 1),
          rt(r) ? ((e = !0), yl(t)) : (e = !1),
          Gn(t, n),
          wa(t, r, l),
          jo(t, r, l, n),
          Ro(null, t, r, !0, e, n)
        );
      case 19:
        return Da(e, t, n);
      case 22:
        return La(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function oc(e, t) {
    return Us(e, t);
  }
  function If(e, t, n, r) {
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
    return new If(e, t, n, r);
  }
  function Zo(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Rf(e) {
    if (typeof e == 'function') return Zo(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Qe)) return 11;
      if (e === Ze) return 14;
    }
    return 2;
  }
  function cn(e, t) {
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
  function ql(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == 'function')) Zo(e) && (o = 1);
    else if (typeof e == 'string') o = 5;
    else
      e: switch (e) {
        case ze:
          return Nn(n.children, l, i, t);
        case He:
          ((o = 8), (l |= 8));
          break;
        case ct:
          return ((e = St(12, n, t, l | 2)), (e.elementType = ct), (e.lanes = i), e);
        case we:
          return ((e = St(13, n, t, l)), (e.elementType = we), (e.lanes = i), e);
        case qe:
          return ((e = St(19, n, t, l)), (e.elementType = qe), (e.lanes = i), e);
        case ae:
          return Gl(n, l, i, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Ee:
                o = 10;
                break e;
              case et:
                o = 9;
                break e;
              case Qe:
                o = 11;
                break e;
              case Ze:
                o = 14;
                break e;
              case pe:
                ((o = 16), (r = null));
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ''));
      }
    return ((t = St(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t);
  }
  function Nn(e, t, n, r) {
    return ((e = St(7, e, r, t)), (e.lanes = n), e);
  }
  function Gl(e, t, n, r) {
    return (
      (e = St(22, e, r, t)),
      (e.elementType = ae),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Jo(e, t, n) {
    return ((e = St(6, e, null, t)), (e.lanes = n), e);
  }
  function bo(e, t, n) {
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
  function Pf(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ei(0)),
      (this.expirationTimes = Ei(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ei(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function es(e, t, n, r, l, i, o, a, f) {
    return (
      (e = new Pf(e, t, n, a, f)),
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
      po(i),
      e
    );
  }
  function Of(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ce,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function sc(e) {
    if (!e) return en;
    e = e._reactInternals;
    e: {
      if (mn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (rt(t.type)) {
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
      if (rt(n)) return zu(e, n, t);
    }
    return t;
  }
  function uc(e, t, n, r, l, i, o, a, f) {
    return (
      (e = es(n, r, !0, e, l, i, o, a, f)),
      (e.context = sc(null)),
      (n = e.current),
      (r = be()),
      (l = un(n)),
      (i = Bt(r, l)),
      (i.callback = t ?? null),
      rn(n, i, l),
      (e.current.lanes = l),
      ar(e, l, r),
      ot(e, r),
      e
    );
  }
  function Kl(e, t, n, r) {
    var l = t.current,
      i = be(),
      o = un(l);
    return (
      (n = sc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Bt(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = rn(l, t, o)),
      e !== null && (Lt(e, l, o, i), El(e, l, o)),
      o
    );
  }
  function Yl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ac(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ts(e, t) {
    (ac(e, t), (e = e.alternate) && ac(e, t));
  }
  function Mf() {
    return null;
  }
  var cc =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ns(e) {
    this._internalRoot = e;
  }
  ((Xl.prototype.render = ns.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Kl(e, t, null, null);
    }),
    (Xl.prototype.unmount = ns.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (xn(function () {
            Kl(null, e, null, null);
          }),
            (t[zt] = null));
        }
      }));
  function Xl(e) {
    this._internalRoot = e;
  }
  Xl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Gs();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++);
      (Yt.splice(n, 0, e), n === 0 && Xs(e));
    }
  };
  function rs(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Zl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function dc() {}
  function zf(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var i = r;
        r = function () {
          var y = Yl(o);
          i.call(y);
        };
      }
      var o = uc(t, r, e, 0, null, !1, !1, '', dc);
      return (
        (e._reactRootContainer = o),
        (e[zt] = o.current),
        xr(e.nodeType === 8 ? e.parentNode : e),
        xn(),
        o
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var a = r;
      r = function () {
        var y = Yl(f);
        a.call(y);
      };
    }
    var f = es(e, 0, !1, null, null, !1, !1, '', dc);
    return (
      (e._reactRootContainer = f),
      (e[zt] = f.current),
      xr(e.nodeType === 8 ? e.parentNode : e),
      xn(function () {
        Kl(t, f, n, r);
      }),
      f
    );
  }
  function Jl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == 'function') {
        var a = l;
        l = function () {
          var f = Yl(o);
          a.call(f);
        };
      }
      Kl(t, o, e, l);
    } else o = zf(n, t, e, l, r);
    return Yl(o);
  }
  ((Qs = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ur(t.pendingLanes);
          n !== 0 && (Ni(t, n | 1), ot(t, Te()), (ie & 6) === 0 && ((Jn = Te() + 500), tn()));
        }
        break;
      case 13:
        (xn(function () {
          var r = Ut(e, 1);
          if (r !== null) {
            var l = be();
            Lt(r, e, 1, l);
          }
        }),
          ts(e, 1));
    }
  }),
    (ji = function (e) {
      if (e.tag === 13) {
        var t = Ut(e, 134217728);
        if (t !== null) {
          var n = be();
          Lt(t, e, 134217728, n);
        }
        ts(e, 134217728);
      }
    }),
    (qs = function (e) {
      if (e.tag === 13) {
        var t = un(e),
          n = Ut(e, t);
        if (n !== null) {
          var r = be();
          Lt(n, e, t, r);
        }
        ts(e, t);
      }
    }),
    (Gs = function () {
      return ce;
    }),
    (Ks = function (e, t) {
      var n = ce;
      try {
        return ((ce = e), t());
      } finally {
        ce = n;
      }
    }),
    (wi = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((di(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = hl(r);
                if (!l) throw Error(s(90));
                (kt(r), di(r, l));
              }
            }
          }
          break;
        case 'textarea':
          xs(e, n);
          break;
        case 'select':
          ((t = n.value), t != null && Ln(e, !!n.multiple, t, !1));
      }
    }),
    (Ps = Ko),
    (Os = xn));
  var Df = { usingClientEntryPoint: !1, Events: [Nr, Un, hl, Is, Rs, Ko] },
    Br = {
      findFiberByHostInstance: hn,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    Ff = {
      bundleType: Br.bundleType,
      version: Br.version,
      rendererPackageName: Br.rendererPackageName,
      rendererConfig: Br.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: fe.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Fs(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Br.findFiberByHostInstance || Mf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var bl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bl.isDisabled && bl.supportsFiber)
      try {
        ((Xr = bl.inject(Ff)), (It = bl));
      } catch {}
  }
  return (
    (st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Df),
    (st.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!rs(t)) throw Error(s(200));
      return Of(e, t, null, n);
    }),
    (st.createRoot = function (e, t) {
      if (!rs(e)) throw Error(s(299));
      var n = !1,
        r = '',
        l = cc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = es(e, 1, !1, null, null, n, !1, r, l)),
        (e[zt] = t.current),
        xr(e.nodeType === 8 ? e.parentNode : e),
        new ns(t)
      );
    }),
    (st.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(s(188))
          : ((e = Object.keys(e).join(',')), Error(s(268, e)));
      return ((e = Fs(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (st.flushSync = function (e) {
      return xn(e);
    }),
    (st.hydrate = function (e, t, n) {
      if (!Zl(t)) throw Error(s(200));
      return Jl(null, e, t, !0, n);
    }),
    (st.hydrateRoot = function (e, t, n) {
      if (!rs(e)) throw Error(s(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = '',
        o = cc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = uc(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[zt] = t.current),
        xr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Xl(t);
    }),
    (st.render = function (e, t, n) {
      if (!Zl(t)) throw Error(s(200));
      return Jl(null, e, t, !1, n);
    }),
    (st.unmountComponentAtNode = function (e) {
      if (!Zl(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (xn(function () {
            Jl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[zt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (st.unstable_batchedUpdates = Ko),
    (st.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Zl(n)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Jl(e, t, n, !1, r);
    }),
    (st.version = '18.3.1-next-f1338f8080-20240426'),
    st
  );
}
var wc;
function Qf() {
  if (wc) return os.exports;
  wc = 1;
  function d() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (u) {
        console.error(u);
      }
  }
  return (d(), (os.exports = Hf()), os.exports);
}
var Sc;
function qf() {
  if (Sc) return ei;
  Sc = 1;
  var d = Qf();
  return ((ei.createRoot = d.createRoot), (ei.hydrateRoot = d.hydrateRoot), ei);
}
var Gf = qf();
const Kf = JSON.parse(
    `[{"id":"animal","worldviewDimension":{"appliesWhen":"helpsAnimals","applyAs":"multiplier","options":{"equal":1,"10x":0.1,"100x":0.01}},"categoryLabel":"Moral Weights","icon":"paw","previewText":"Animal vs. Human welfare","heading":"How do you value animal welfare relative to human welfare?","info":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Excepteur sint occaecat cupidatat non proident sunt in culpa.","instructionsOptions":"Choose the view that best represents your position, or use \\"Custom Mix\\" to split your credence.","instructionsSliders":"Distribute your credence (confidence) across these views. Sliders auto-balance to 100%.","editPanelTitle":"Animal Values","options":[{"key":"equal","label":"Animals and humans matter equally","description":"Equal weight to equivalent experiences","info":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","panelLabel":"Equal weight","panelShort":"Eq"},{"key":"10x","label":"Animals matter 10× less than humans","description":"Moderate speciesist view","info":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.","panelLabel":"10× less","panelShort":"10×"},{"key":"100x","label":"Animals matter 100× less than humans","description":"Strong speciesist view","info":"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.","panelLabel":"100× less","panelShort":"100×"}]},{"id":"future","worldviewDimension":{"appliesWhen":"helpsFutureHumans","applyAs":"multiplier","options":{"equal":1,"10x":0.1,"100x":0.01}},"categoryLabel":"Time Preference","icon":"hourglass","previewText":"Current vs. Future generations","heading":"How do you value future human welfare relative to current human welfare?","info":"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet. Ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores. Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit.","instructionsOptions":"Choose the view that best represents your position, or use \\"Custom Mix\\" to split your credence.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Future Values","options":[{"key":"equal","label":"Future and current humans matter equally","description":"No time discounting","info":"Et harum quidem rerum facilis est et expedita distinctio, nam libero tempore soluta nobis eligendi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim donec pede justo fringilla vel aliquet.","panelLabel":"Equal weight","panelShort":"Eq"},{"key":"10x","label":"Future humans matter 10× less","description":"Moderate time preference","info":"Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim aliquam lorem ante dapibus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae justo nullam dictum felis eu pede. Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet. Adipiscing ante aenean commodo ligula eget dolor massa sociis natoque penatibus.","panelLabel":"10× less","panelShort":"10×"},{"key":"100x","label":"Future humans matter 100× less","description":"Strong present focus","info":"Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus donec quam felis. Ultricies nec pellentesque eu pretium quis sem nulla consequat massa quis enim. Donec pede justo fringilla vel aliquet nec vulputate eget arcu in enim justo rhoncus ut. Imperdiet a venenatis vitae justo nullam dictum felis eu pede mollis pretium.","panelLabel":"100× less","panelShort":"100×"}]},{"id":"intermission1","type":"_intermission","title":"Halfway There","body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Based on your answers so far, we're calculating how your worldview might influence your giving priorities. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"id":"scale","worldviewDimension":{"appliesTo":"scaleFactor","applyAs":"exponent","options":{"equal":0,"10x":0.5,"100x":1}},"categoryLabel":"Scale Sensitivity","icon":"bar-chart","previewText":"Helping one vs. helping millions","heading":"How much does the scale of impact matter?","info":"Maecenas nec odio et ante tincidunt tempus donec vitae sapien ut libero venenatis faucibus. Nullam quis ante etiam sit amet orci eget eros faucibus tincidunt duis leo. Sed fringilla mauris sit amet nibh donec sodales sagittis magna sed consequat leo. Aenean massa cum sociis natoque penatibus et magnis dis parturient montes nascetur.","instructionsOptions":"Choose the view that best represents your position, or use \\"Custom Mix\\" to split your credence.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Scale Sensitivity","options":[{"key":"equal","label":"Helping one person matters as much as helping millions","description":"Numbers don't multiply moral value","info":"Fusce vulputate eleifend sapien vestibulum purus quam scelerisque ut mollis sed nonummy id metus. Nullam accumsan lorem in dui cras ultricies mi eu turpis hendrerit fringilla vestibulum ante ipsum. Primis in faucibus orci luctus et ultrices posuere cubilia curae in ac dui quis mi. Consectetuer lacinia vitae elementum semper rutrum tellus pellentesque eu tincidunt.","panelLabel":"Irrelevant","panelShort":"Eq"},{"key":"10x","label":"Helping 10× more beings is significantly better","description":"Scale matters, but not linearly","info":"Phasellus viverra nulla ut metus varius laoreet quisque rutrum aenean imperdiet etiam ultricies nisi vel. Augue curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus tellus. Eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum. Nam quam nunc blandit vel luctus pulvinar hendrerit id lorem maecenas nec.","panelLabel":"Matters","panelShort":"10×"},{"key":"100x","label":"Helping 10× more beings is 10× better","description":"Full utilitarian aggregation","info":"Proin sapien ipsum porta a auctor quis euismod ac felis donec posuere vulputate arcu phasellus. Accumsan cursus velit morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam. Lacus morbi quis tortor id nulla ut metus molestie placerat vivamus dapibus fermentum. Nullam vel sem praesent libero sed cursus ante dapibus diam sed nisi.","panelLabel":"Dominates","panelShort":"100×"}]},{"id":"certainty","worldviewDimension":{"appliesWhen":"isSpeculative","applyAs":"multiplier","options":{"equal":1,"10x":0.1,"100x":0.01}},"categoryLabel":"Evidence Preference","icon":"microscope","previewText":"Proven vs. speculative interventions","heading":"How much do you value proven interventions over speculative ones?","info":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae sed aliquam. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus. Turpis in eu mi bibendum neque egestas congue quisque egestas diam.","instructionsOptions":"Choose the view that best represents your position, or use \\"Custom Mix\\" to split your credence.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Evidence Preference","options":[{"key":"equal","label":"Speculative and proven interventions matter equally","description":"Expected value is all that matters","info":"Mauris blandit aliquet elit eget tincidunt nibh pulvinar a pellentesque sit amet porttitor eget dolor. Morbi tristique senectus et netus et malesuada fames ac turpis egestas proin eget tortor risus. Praesent sapien massa convallis a pellentesque nec egestas non nisi cras ultricies ligula sed. Magna dictum porta lorem ipsum dolor sit amet consectetur adipiscing elit.","panelLabel":"Equal weight","panelShort":"Eq"},{"key":"10x","label":"Proven interventions are worth 10× more","description":"Moderate certainty preference","info":"Donec sollicitudin molestie malesuada vivamus magna justo lacinia eget consectetur sed convallis at tellus. Curabitur arcu erat accumsan id imperdiet et porttitor at sem nulla at venenatis diam. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit non mi porta gravida.","panelLabel":"10× less","panelShort":"10×"},{"key":"100x","label":"Proven interventions are worth 100× more","description":"Strong evidence focus","info":"Praesent commodo cursus magna vel scelerisque nisl consectetur et morbi leo risus porta ac consectetur. Vestibulum id ligula porta felis euismod semper fusce dapibus tellus ac cursus commodo. Maecenas sed diam eget risus varius blandit sit amet non magna aenean lacinia bibendum nulla. Sed consectetur cras mattis consectetur purus sit amet fermentum donec ullamcorper nulla non.","panelLabel":"100× less","panelShort":"100×"}]}]`
  ),
  xc = { questions: Kf },
  Yf = 'sqrt',
  Xf = {
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
  Zf = { equal: 33, '10x': 33, '100x': 34 },
  ii = { diminishingReturns: Yf, causes: Xf, defaultCredences: Zf },
  Jf = { resetButton: !1, sliderLock: !0, shareResults: !1 },
  bf = {
    showMaxEV: !0,
    showParliament: !0,
    showMergedFavorites: !0,
    showMaximin: !0,
    sideBySideComparison: !0,
  },
  Wr = { ui: Jf, calculations: bf },
  er = {
    SESSION_ID: 'quiz_session_id',
    QUIZ_STATE: 'quiz_state',
    SKIP_CONFLICT: 'quiz_skip_conflict',
  },
  Cc = 3;
function ep() {
  let d = sessionStorage.getItem(er.SESSION_ID);
  return (d || ((d = crypto.randomUUID()), sessionStorage.setItem(er.SESSION_ID, d)), d);
}
function tp(d) {
  const { currentStep: u, worldviews: s, activeWorldviewId: g, selectedCalculations: k } = d,
    _ = {};
  for (const [N, w] of Object.entries(s)) {
    const x = {};
    for (const [C, R] of Object.entries(w.questions))
      x[C] = {
        credences: R.credences,
        originalCredences: R.originalCredences,
        inputMode: R.inputMode,
        lockedKey: R.lockedKey,
      };
    _[N] = { questions: x };
  }
  const E = {
    version: Cc,
    state: { currentStep: u, worldviews: _, activeWorldviewId: g, selectedCalculations: k },
  };
  sessionStorage.setItem(er.QUIZ_STATE, JSON.stringify(E));
}
function as() {
  const d = sessionStorage.getItem(er.QUIZ_STATE);
  if (!d) return null;
  try {
    const u = JSON.parse(d);
    return u.version !== Cc ? (ri(), null) : u.state;
  } catch {
    return (ri(), null);
  }
}
function ri() {
  sessionStorage.removeItem(er.QUIZ_STATE);
}
function np() {
  sessionStorage.setItem(er.SKIP_CONFLICT, 'true');
}
function cs() {
  window.location.hash &&
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
const Wt = 'rgba(255, 255, 255, 0.8)',
  _c = { default: [Wt, Wt, Wt], selection: [Wt, Wt, Wt], credence: [Wt, Wt, Wt] },
  rp = 'rgba(255, 255, 255, 0.7)',
  Ec = { OPTIONS: 'options' },
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
 */ const lp = (d) => d.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  Nc = (...d) =>
    d
      .filter((u, s, g) => !!u && u.trim() !== '' && g.indexOf(u) === s)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ip = {
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
 */ const op = z.forwardRef(
  (
    {
      color: d = 'currentColor',
      size: u = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: g,
      className: k = '',
      children: _,
      iconNode: E,
      ...N
    },
    w
  ) =>
    z.createElement(
      'svg',
      {
        ref: w,
        ...ip,
        width: u,
        height: u,
        stroke: d,
        strokeWidth: g ? (Number(s) * 24) / Number(u) : s,
        className: Nc('lucide', k),
        ...N,
      },
      [...E.map(([x, C]) => z.createElement(x, C)), ...(Array.isArray(_) ? _ : [_])]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Be = (d, u) => {
  const s = z.forwardRef(({ className: g, ...k }, _) =>
    z.createElement(op, { ref: _, iconNode: u, className: Nc(`lucide-${lp(d)}`, g), ...k })
  );
  return ((s.displayName = `${d}`), s);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sp = Be('Building2', [
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
 */ const up = Be('ChartColumn', [
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
 */ const ap = Be('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cp = Be('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dp = Be('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jc = Be('CircleHelp', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fp = Be('ExternalLink', [
  ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
  ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
  ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pp = Be('Handshake', [
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
 */ const mp = Be('Hourglass', [
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
 */ const hp = Be('Info', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M12 16v-4', key: '1dtifu' }],
  ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vp = Be('Layers', [
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
 */ const Tc = Be('Lock', [
  ['rect', { width: '18', height: '11', x: '3', y: '11', rx: '2', ry: '2', key: '1w4ew1' }],
  ['path', { d: 'M7 11V7a5 5 0 0 1 10 0v4', key: 'fwvmzm' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yp = Be('Microscope', [
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
 */ const gp = Be('PawPrint', [
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
 */ const ps = Be('RotateCcw', [
  ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
  ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wp = Be('Scale', [
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
 */ const Sp = Be('SlidersVertical', [
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
 */ const _p = Be('Target', [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['circle', { cx: '12', cy: '12', r: '6', key: '1vlfrh' }],
    ['circle', { cx: '12', cy: '12', r: '2', key: '1c9p78' }],
  ]),
  kp = '_overlay_1wun3_1',
  xp = '_modal_1wun3_12',
  Cp = '_title_1wun3_21',
  Ep = '_message_1wun3_29',
  Np = '_buttons_1wun3_36',
  jp = '_button_1wun3_36',
  ut = { overlay: kp, modal: xp, title: Cp, message: Ep, buttons: Np, button: jp };
function Tp({ onKeepMine: d, onLoadShared: u, onOpenNewTab: s }) {
  return c.jsx('div', {
    className: ut.overlay,
    children: c.jsxs('div', {
      className: ut.modal,
      children: [
        c.jsx('h2', { className: ut.title, children: 'You have unsaved progress' }),
        c.jsx('p', {
          className: ut.message,
          children:
            'Loading this shared link will replace your current quiz answers. What would you like to do?',
        }),
        c.jsxs('div', {
          className: ut.buttons,
          children: [
            c.jsx('button', {
              onClick: d,
              className: `btn btn-secondary ${ut.button}`,
              children: 'Keep my progress',
            }),
            c.jsx('button', {
              onClick: u,
              className: `btn btn-primary ${ut.button}`,
              children: 'Load shared results',
            }),
            c.jsxs('button', {
              onClick: s,
              className: `btn btn-secondary ${ut.button}`,
              children: [c.jsx(fp, { size: 16 }), 'Open in new tab'],
            }),
          ],
        }),
      ],
    }),
  });
}
const { causes: oi } = ii,
  ms = { none: 1, sqrt: 0.5, extreme: 0.1 };
function Lc(d) {
  const u = (d == null ? void 0 : d.diminishingReturns) || ii.diminishingReturns || 'sqrt';
  return ms[u] ?? 0.5;
}
function Ic(d, u, s = 0.5) {
  if (s >= 1) {
    const E = Math.max(...d);
    if (E <= 0) return d.map(() => u / d.length);
    const N = d.map((w, x) => (w === E ? x : -1)).filter((w) => w >= 0);
    return d.map((w, x) => (N.includes(x) ? u / N.length : 0));
  }
  const g = 1 / (1 - s),
    k = d.map((E) => (E > 0 ? Math.pow(E, g) : 0)),
    _ = k.reduce((E, N) => E + N, 0);
  return _ === 0 ? d.map(() => u / d.length) : k.map((E) => (E / _) * u);
}
function Rc(d = !1) {
  return Object.fromEntries(
    xc.questions
      .filter((u) => u.type !== 'intermission' && u.worldviewDimension)
      .map((u) => [
        u.id,
        d ? { ...u.worldviewDimension, name: u.editPanelTitle } : u.worldviewDimension,
      ])
  );
}
const si = Rc();
function* ui(d) {
  const u = Object.keys(d);
  if (u.length === 0) return;
  const s = Object.keys(d[u[0]]);
  function* g(k, _) {
    if (k === u.length) {
      let N = 1;
      for (const w of u) N *= d[w][_[w]] / 100;
      yield { options: _, probability: N };
      return;
    }
    const E = u[k];
    for (const N of s) yield* g(k + 1, { ..._, [E]: N });
  }
  yield* g(0, {});
}
function Lp(d, u, s) {
  let g = d.points;
  for (const [k, _] of Object.entries(s)) {
    const E = u[k],
      N = _.options[E];
    if (_.applyAs === 'multiplier') _.appliesWhen && d[_.appliesWhen] && (g *= N);
    else if (_.applyAs === 'exponent' && _.appliesTo) {
      const w = d[_.appliesTo] || 1;
      g *= Math.pow(w, N);
    }
  }
  return g;
}
function ai(d, u, s) {
  const g = {};
  for (const [k, _] of Object.entries(u)) g[k] = Lp(_, d, s);
  return g;
}
function Ip(d) {
  const u = Math.max(...Object.values(d));
  return Object.keys(d).filter((s) => Math.abs(d[s] - u) < 1e-4);
}
function gs(d) {
  return Object.fromEntries(Object.keys(d).map((u) => [u, 0]));
}
function Rp(d, u) {
  const s = (u == null ? void 0 : u.causes) || oi,
    g = (u == null ? void 0 : u.dimensions) || si,
    k = Lc(u),
    _ = Object.keys(s),
    E = gs(s);
  for (const { options: C, probability: R } of ui(d)) {
    const L = ai(C, s, g);
    for (const [W, K] of Object.entries(L)) E[W] += R * K;
  }
  const N = _.map((C) => E[C]),
    w = Ic(N, 100, k),
    x = { evs: E };
  return (
    _.forEach((C, R) => {
      x[C] = w[R];
    }),
    x
  );
}
function Pp(d, u) {
  const s = (u == null ? void 0 : u.causes) || oi,
    g = (u == null ? void 0 : u.dimensions) || si,
    k = gs(s);
  for (const { options: E, probability: N } of ui(d)) {
    const w = ai(E, s, g),
      x = Ip(w),
      C = N / x.length;
    for (const R of x) k[R] += C;
  }
  const _ = {};
  for (const E of Object.keys(s)) _[E] = k[E] * 100;
  return _;
}
function Op(d, u) {
  const s = (u == null ? void 0 : u.causes) || oi,
    g = (u == null ? void 0 : u.dimensions) || si,
    k = Lc(u),
    _ = Object.keys(s),
    E = gs(s);
  for (const { options: N, probability: w } of ui(d)) {
    const x = ai(N, s, g),
      C = w * 100,
      R = _.map((W) => x[W]),
      L = Ic(R, C, k);
    _.forEach((W, K) => {
      E[W] += L[K];
    });
  }
  return E;
}
function Mp(d, u) {
  const s = (u == null ? void 0 : u.causes) || oi,
    g = (u == null ? void 0 : u.dimensions) || si,
    k = Object.keys(s),
    _ = zp(k);
  let E = _[0],
    N = -1 / 0;
  for (const w of _) {
    let x = 1 / 0;
    for (const { options: C, probability: R } of ui(d)) {
      if (R < 0.001) continue;
      const L = ai(C, s, g);
      let W = 0;
      for (const K of k) W += L[K] * (w[K] / 100);
      x = Math.min(x, W);
    }
    x > N && ((N = x), (E = { ...w }));
  }
  return E;
}
function zp(d) {
  const u = [],
    s = d.length,
    g = (w) => {
      const x = {};
      return (
        d.forEach((C, R) => {
          x[C] = w[R];
        }),
        x
      );
    };
  for (let w = 0; w < s; w++) {
    const x = new Array(s).fill(0);
    ((x[w] = 100), u.push(g(x)));
  }
  for (let w = 0; w < s; w++)
    for (let x = w + 1; x < s; x++) {
      const C = new Array(s).fill(0);
      ((C[w] = 50), (C[x] = 50), u.push(g(C)));
    }
  const k = Math.floor(100 / s),
    _ = 100 - k * s,
    E = new Array(s).fill(k);
  ((E[0] += _), u.push(g(E)));
  const N = [
    [60, 20, 20],
    [70, 15, 15],
    [80, 10, 10],
  ];
  for (const w of N)
    if (w.length === s)
      for (let x = 0; x < s; x++) {
        const C = new Array(s).fill(0);
        C[x] = w[0];
        let R = 1;
        for (let L = 0; L < s; L++) L !== x && R < w.length && (C[L] = w[R++]);
        u.push(g(C));
      }
  return u;
}
function Pc(d, u, s, g = null, k = null) {
  const _ = k ? s[k] : 0,
    E = 100 - _;
  u = Math.max(0, Math.min(E, u));
  const N = g || s,
    w = Object.keys(s).filter((L) => L !== d && L !== k),
    x = w.reduce((L, W) => L + N[W], 0),
    C = 100 - u - _,
    R = { [d]: u };
  if ((k && (R[k] = s[k]), x === 0)) {
    const L = Math.floor(C / w.length);
    let W = C - L * w.length;
    w.forEach((K, Q) => {
      R[K] = L + (Q < W ? 1 : 0);
    });
  } else {
    let L = 0;
    w.forEach((W, K) => {
      if (K === w.length - 1) R[W] = Math.max(0, C - L);
      else {
        const Q = N[W] / x,
          U = C * Q;
        ((R[W] = Math.max(0, U)), (L += R[W]));
      }
    });
  }
  return R;
}
function Oc(d) {
  const u = Object.keys(d),
    s = {};
  let g = 0;
  return (
    u.slice(0, -1).forEach((k) => {
      ((s[k] = Math.round(d[k])), (g += s[k]));
    }),
    (s[u[u.length - 1]] = 100 - g),
    s
  );
}
const { questions: Dp } = xc,
  { causes: Fp, defaultCredences: li } = ii;
function Ap(d) {
  var u;
  return !((u = d.type) != null && u.startsWith('_'));
}
const Ue = Dp.filter(Ap);
function Qt(d) {
  return (d == null ? void 0 : d.type) === at.INTERMISSION;
}
function ds(d, u) {
  let s = 0;
  for (let g = 0; g < u; g++) Qt(d[g]) || s++;
  return s;
}
function Up(d) {
  {
    const u = d.type || at.DEFAULT;
    return _c[u] || _c[at.DEFAULT];
  }
}
const Bp = Ue.filter((d) => !Qt(d)),
  fs = Bp.length,
  kc = Ue.map((d) => {
    if (Qt(d)) return { ...d, type: at.INTERMISSION };
    const u = Up(d);
    return {
      ...d,
      type: d.type || at.DEFAULT,
      options: d.options.map((s, g) => ({ ...s, color: u[g] || u[0] })),
    };
  });
function Mc() {
  return { credences: { ...li }, originalCredences: null, inputMode: Ec.OPTIONS, lockedKey: null };
}
function zc() {
  return Object.fromEntries(Ue.filter((d) => !Qt(d)).map((d) => [d.id, Mc()]));
}
const Hr = ['1', '2', '3'];
function hs() {
  return Object.fromEntries(Hr.map((d) => [d, { questions: zc() }]));
}
function $p(d) {
  return d != null && d.questions
    ? Object.values(d.questions).some((u) =>
        u.credences ? Object.entries(u.credences).some(([s, g]) => g !== (li[s] ?? 0)) : !1
      )
    : !1;
}
const Dc = {
    currentStep: 'welcome',
    worldviews: hs(),
    activeWorldviewId: '1',
    expandedPanel: null,
    debugConfig: null,
    selectedCalculations: { left: null, right: null },
  },
  ge = {
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
  };
function vs(d) {
  return d.worldviews[d.activeWorldviewId].questions;
}
function Vp(d, u, s) {
  const g = vs(d);
  return {
    ...d,
    worldviews: {
      ...d.worldviews,
      [d.activeWorldviewId]: { questions: { ...g, [u]: { ...g[u], ...s } } },
    },
  };
}
function Wp(d, u) {
  switch (u.type) {
    case ge.GO_TO_STEP:
      return { ...d, currentStep: u.payload };
    case ge.UPDATE_QUESTION:
      return Vp(d, u.payload.questionId, u.payload.updates);
    case ge.SET_EXPANDED_PANEL:
      return { ...d, expandedPanel: u.payload };
    case ge.SAVE_ORIGINALS: {
      const s = vs(d);
      return {
        ...d,
        worldviews: {
          ...d.worldviews,
          [d.activeWorldviewId]: {
            questions: Object.fromEntries(
              Object.entries(s).map(([g, k]) => [
                g,
                { ...k, originalCredences: k.originalCredences || { ...k.credences } },
              ])
            ),
          },
        },
      };
    }
    case ge.RESET_TO_ORIGINAL: {
      const s = vs(d);
      return {
        ...d,
        worldviews: {
          ...d.worldviews,
          [d.activeWorldviewId]: {
            questions: Object.fromEntries(
              Object.entries(s).map(([g, k]) => [
                g,
                { ...k, credences: k.originalCredences ? { ...k.originalCredences } : k.credences },
              ])
            ),
          },
        },
      };
    }
    case ge.RESET_QUIZ:
      return { ...Dc, worldviews: hs() };
    case ge.SWITCH_WORLDVIEW:
      return Hr.includes(u.payload) ? { ...d, activeWorldviewId: u.payload } : d;
    case ge.RESTORE_FROM_URL:
    case ge.RESTORE_FROM_SESSION: {
      const s = u.type === ge.RESTORE_FROM_URL,
        {
          worldviews: g,
          activeWorldviewId: k,
          questions: _,
          credences: E,
          currentStep: N,
          selectedCalculations: w,
        } = u.payload,
        x = (L, W) => ({
          credences: L.credences,
          originalCredences: W
            ? { ...L.credences }
            : L.originalCredences
              ? { ...L.originalCredences }
              : null,
          inputMode: L.inputMode || Ec.OPTIONS,
          lockedKey: L.lockedKey || null,
        }),
        C = (L, W) => {
          const K = {};
          for (const [Q, U] of Object.entries(L)) {
            const G = {};
            for (const [ue, je] of Object.entries(U.questions)) G[ue] = x(je, W);
            K[Q] = { questions: G };
          }
          for (const Q of Hr) K[Q] || (K[Q] = { questions: zc() });
          return K;
        };
      if (g && k)
        return {
          ...d,
          currentStep: s ? 'results' : N,
          worldviews: C(g, s),
          activeWorldviewId: k,
          selectedCalculations: w || d.selectedCalculations,
        };
      const R = {};
      if (_) for (const [L, W] of Object.entries(_)) R[L] = x(W, s);
      else if (E)
        for (const [L, W] of Object.entries(E))
          R[L] = { ...Mc(), credences: W, originalCredences: s ? { ...W } : null };
      return {
        ...d,
        currentStep: s ? 'results' : N,
        worldviews: { ...hs(), 1: { questions: R } },
        activeWorldviewId: '1',
      };
    }
    case ge.SET_DEBUG_CONFIG:
      return { ...d, debugConfig: u.payload };
    case ge.SET_SELECTED_CALCULATIONS:
      return { ...d, selectedCalculations: { ...d.selectedCalculations, ...u.payload } };
    default:
      return d;
  }
}
const Fc = z.createContext(null);
function Hp({ children: d }) {
  const [u, s] = z.useReducer(Wp, Dc),
    [g, k] = z.useState(null),
    [_, E] = z.useState(!0),
    [N, w] = z.useState(null),
    [x] = z.useState(() => ep()),
    C = z.useRef(null);
  (z.useEffect(() => {
    {
      const D = as();
      (D && s({ type: ge.RESTORE_FROM_SESSION, payload: D }), E(!1));
      return;
    }
  }, []),
    z.useEffect(() => {}, []));
  const R = z.useCallback(() => {
      const D = as();
      (D && s({ type: ge.RESTORE_FROM_SESSION, payload: D }), cs(), w(null));
    }, []),
    L = z.useCallback(() => {
      (N != null && N.shareData && (s({ type: ge.RESTORE_FROM_URL, payload: N.shareData }), ri()),
        cs(),
        w(null));
    }, [N]),
    W = z.useCallback(() => {
      (np(), N != null && N.shareUrl && window.open(N.shareUrl, '_blank'));
      const D = as();
      (D && s({ type: ge.RESTORE_FROM_SESSION, payload: D }), cs(), w(null));
    }, [N]);
  z.useEffect(() => {
    if (!(_ || u.currentStep === 'welcome'))
      return (
        C.current && clearTimeout(C.current),
        (C.current = setTimeout(() => {
          tp({
            currentStep: u.currentStep,
            worldviews: u.worldviews,
            activeWorldviewId: u.activeWorldviewId,
            selectedCalculations: u.selectedCalculations,
          });
        }, 300)),
        () => {
          C.current && clearTimeout(C.current);
        }
      );
  }, [u.currentStep, u.worldviews, u.activeWorldviewId, u.selectedCalculations, _]);
  const K = z.useCallback((D) => {
      s({ type: ge.GO_TO_STEP, payload: D });
    }, []),
    Q = z.useCallback((D, te) => {
      s({ type: ge.UPDATE_QUESTION, payload: { questionId: D, updates: te } });
    }, []),
    U = z.useCallback((D, te) => Q(D, { credences: te }), [Q]),
    G = z.useCallback((D, te) => Q(D, { inputMode: te }), [Q]),
    ue = z.useCallback((D, te) => Q(D, { lockedKey: te }), [Q]),
    je = z.useCallback((D) => {
      s({ type: ge.SET_EXPANDED_PANEL, payload: D });
    }, []),
    fe = z.useCallback(() => {
      s({ type: ge.SAVE_ORIGINALS });
    }, []),
    Ie = z.useCallback(() => {
      s({ type: ge.RESET_TO_ORIGINAL });
    }, []),
    Ce = z.useCallback(() => {
      (s({ type: ge.RESET_QUIZ }), ri());
    }, []),
    ze = z.useCallback((D) => {
      s({ type: ge.SET_DEBUG_CONFIG, payload: D });
    }, []),
    He = z.useCallback((D) => {
      s({ type: ge.SWITCH_WORLDVIEW, payload: D });
    }, []),
    ct = z.useCallback((D) => {
      s({ type: ge.SET_SELECTED_CALCULATIONS, payload: D });
    }, []),
    Ee = z.useCallback((D) => Ue.findIndex((te) => te.id === D), []),
    et = z.useCallback(
      (D) => {
        const te = Ee(D);
        return te === 0 ? 'welcome' : Ue[te - 1].id;
      },
      [Ee]
    ),
    Qe = z.useCallback(
      (D) => {
        const te = Ee(D);
        return te === Ue.length - 1 ? 'results' : Ue[te + 1].id;
      },
      [Ee]
    ),
    we = z.useCallback(() => {
      K(Ue[0].id);
    }, [K]),
    qe = z.useCallback(() => {
      u.currentStep === 'results' ? K(Ue[Ue.length - 1].id) : K(et(u.currentStep));
    }, [u.currentStep, K, et]),
    Ze = z.useCallback(() => {
      const D = Qe(u.currentStep);
      (D === 'results' && fe(), K(D));
    }, [u.currentStep, K, Qe, fe]),
    pe = z.useMemo(
      () => u.worldviews[u.activeWorldviewId].questions,
      [u.worldviews, u.activeWorldviewId]
    ),
    ae = z.useCallback(
      (D) => {
        var Tn;
        const te = D === 'original' ? 'originalCredences' : 'credences',
          kt = Ue.filter((pn) => !Qt(pn)),
          tt = pe[(Tn = kt[0]) == null ? void 0 : Tn.id];
        return D === 'original' && !(tt != null && tt.originalCredences)
          ? null
          : Object.fromEntries(
              kt.map((pn) => {
                var tr;
                return [pn.id, ((tr = pe[pn.id]) == null ? void 0 : tr[te]) || li];
              })
            );
      },
      [pe]
    ),
    M = z.useCallback(
      (D, te) =>
        D
          ? {
              maxEV: Rp(D, te),
              parliament: Pp(D, te),
              mergedFavorites: Op(D, te),
              maximin: Mp(D, te),
            }
          : null,
      []
    ),
    q = z.useMemo(() => M(ae('current'), u.debugConfig), [ae, M, u.debugConfig]),
    F = z.useMemo(() => M(ae('original'), u.debugConfig), [ae, M, u.debugConfig]),
    m = z.useMemo(
      () =>
        Object.values(pe).some(
          (D) =>
            D.originalCredences &&
            JSON.stringify(D.credences) !== JSON.stringify(D.originalCredences)
        ),
      [pe]
    ),
    S = z.useMemo(
      () => Object.fromEntries(Hr.map((D) => [D, $p(u.worldviews[D])])),
      [u.worldviews]
    ),
    O = z.useMemo(() => Ee(u.currentStep), [u.currentStep, Ee]),
    J = z.useMemo(() => (O === -1 ? null : kc[O]), [O]),
    b = z.useMemo(() => {
      if (O === -1) return -1;
      const D = Ue[O],
        te = ds(Ue, O);
      return Qt(D) ? te : te + 1;
    }, [O]),
    ee = z.useMemo(() => {
      if (O === -1) return 0;
      const D = Ue[O];
      return ((Qt(D) ? ds(Ue, O) : b) / fs) * 100;
    }, [O, b]),
    le = z.useMemo(() => {
      if (O === -1) return '';
      const D = Ue[O];
      return `Question ${Qt(D) ? ds(Ue, O) : b} of ${fs}`;
    }, [O, b]),
    re = z.useMemo(() => {
      const D = {};
      return (
        Ue.filter((te) => !Qt(te)).forEach((te) => {
          const kt = pe[te.id];
          kt &&
            (D[te.id] = {
              credences: kt.credences,
              setCredences: (tt) => U(te.id, tt),
              originalCredences: kt.originalCredences,
              inputMode: kt.inputMode,
              setInputMode: (tt) => G(te.id, tt),
              lockedKey: kt.lockedKey,
              setLockedKey: (tt) => ue(te.id, tt),
            });
        }),
        D
      );
    }, [pe, U, G, ue]),
    me = z.useMemo(
      () => ({
        currentStep: u.currentStep,
        questions: pe,
        worldviews: u.worldviews,
        activeWorldviewId: u.activeWorldviewId,
        expandedPanel: u.expandedPanel,
        debugConfig: u.debugConfig,
        selectedCalculations: u.selectedCalculations,
        shareUrlError: g,
        isHydrating: _,
        sessionId: x,
        questionsConfig: kc,
        causesConfig: Fp,
        defaultCredences: li,
        worldviewIds: Hr,
        goToStep: K,
        setCredences: U,
        setInputMode: G,
        setLockedKey: ue,
        setExpandedPanel: je,
        saveOriginals: fe,
        resetToOriginal: Ie,
        resetQuiz: Ce,
        setDebugConfig: ze,
        switchWorldview: He,
        setSelectedCalculations: ct,
        getQuestionIndex: Ee,
        getPrevStep: et,
        getNextStep: Qe,
        startQuiz: we,
        goBack: qe,
        goForward: Ze,
        currentQuestion: J,
        currentQuestionIndex: O,
        totalQuestions: fs,
        progressPercentage: ee,
        questionNumber: le,
        hasChanged: m,
        hasProgressMap: S,
        calculationResults: q,
        originalCalculationResults: F,
        stateMap: re,
      }),
      [
        u.currentStep,
        pe,
        u.worldviews,
        u.activeWorldviewId,
        u.expandedPanel,
        u.debugConfig,
        u.selectedCalculations,
        g,
        _,
        x,
        K,
        U,
        G,
        ue,
        je,
        fe,
        Ie,
        Ce,
        ze,
        He,
        ct,
        Ee,
        et,
        Qe,
        we,
        qe,
        Ze,
        J,
        O,
        ee,
        le,
        m,
        S,
        q,
        F,
        re,
      ]
    );
  return c.jsxs(Fc.Provider, {
    value: me,
    children: [d, N && c.jsx(Tp, { onKeepMine: R, onLoadShared: L, onOpenNewTab: W })],
  });
}
const ci = ({ subtitle: d }) =>
    c.jsxs('header', {
      className: `header${d ? ' header-with-subtitle' : ''}`,
      children: [
        c.jsxs('div', {
          className: 'header-brand',
          children: [
            c.jsx('img', {
              src: '/quiz-demo/prototypes/calculation-select/NewLogoSVG.svg',
              alt: 'Rethink Priorities',
              height: '24',
            }),
            c.jsx('span', { className: 'header-title', children: 'Donor Compass' }),
          ],
        }),
        d && c.jsx('div', { className: 'header-subtitle', children: d }),
      ],
    }),
  Qp = { paw: gp, hourglass: mp, 'bar-chart': up, microscope: yp };
function Ac({ name: d, size: u = 16, className: s = '' }) {
  const g = Qp[d] || jc;
  return c.jsx(g, { size: u, className: s });
}
function Qr() {
  const d = z.useContext(Fc);
  if (!d) throw new Error('useQuiz must be used within a QuizProvider');
  return d;
}
const qp = '_container_1tu9j_3',
  Gp = '_heading_1tu9j_8',
  Kp = '_headingEmphasis_1tu9j_17',
  Yp = '_intro_1tu9j_22',
  Xp = '_infoBox_1tu9j_30',
  Zp = '_infoBoxLabel_1tu9j_38',
  Jp = '_infoBoxGrid_1tu9j_45',
  bp = '_infoBoxItem_1tu9j_52',
  fn = {
    container: qp,
    heading: Gp,
    headingEmphasis: Kp,
    intro: Yp,
    infoBox: Xp,
    infoBoxLabel: Zp,
    infoBoxGrid: Jp,
    infoBoxItem: bp,
  },
  em = {
    timeEstimate: '~3 minutes',
    headingLine1: 'Where Should Your',
    headingLine2: 'Giving Go?',
    intro:
      'Uncertain about your ethical views? This tool helps you allocate resources across different causes based on your moral credences—the probabilities you assign to different ethical perspectives.',
    startButton: 'Start Quiz →',
    previewLabel: "You'll be asked about:",
  },
  tm = { back: '← Back', continue: 'Continue →', backToQuiz: '← Back to Quiz' },
  nm = { modeToggle: { pickOne: 'Pick One', customMix: 'Custom Mix' } },
  rm = {
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
  lm = {
    modifiedBadge: 'modified',
    sliderNote: 'Sliders auto-balance to 100%',
    resetButton: 'Reset',
  },
  im = { lockTooltip: 'Lock slider', unlockTooltip: 'Unlock slider' },
  de = { welcome: em, navigation: tm, questionScreen: nm, results: rm, editPanel: lm, sliders: im };
function om() {
  const { questionsConfig: d, startQuiz: u } = Qr(),
    s = d.filter((g) => g.type !== at.INTERMISSION);
  return c.jsxs('div', {
    className: 'screen',
    children: [
      c.jsx(ci, { subtitle: de.welcome.timeEstimate }),
      c.jsx('main', {
        className: 'screen-main',
        children: c.jsxs('div', {
          className: fn.container,
          children: [
            c.jsxs('h1', {
              className: fn.heading,
              children: [
                de.welcome.headingLine1,
                c.jsx('br', {}),
                c.jsx('span', { className: fn.headingEmphasis, children: de.welcome.headingLine2 }),
              ],
            }),
            c.jsx('p', { className: fn.intro, children: de.welcome.intro }),
            c.jsx('button', {
              onClick: u,
              className: 'btn btn-primary',
              children: de.welcome.startButton,
            }),
            c.jsxs('div', {
              className: fn.infoBox,
              children: [
                c.jsx('div', { className: fn.infoBoxLabel, children: de.welcome.previewLabel }),
                c.jsx('div', {
                  className: fn.infoBoxGrid,
                  children: s.map((g) =>
                    c.jsxs(
                      'div',
                      {
                        className: fn.infoBoxItem,
                        children: [c.jsx(Ac, { name: g.icon, size: 16 }), ' ', g.previewText],
                      },
                      g.id
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
const ws = ({ percentage: d }) =>
    c.jsx('div', {
      className: 'progress-container',
      children: c.jsx('div', {
        className: 'progress-track',
        children: c.jsx('div', { className: 'progress-fill', style: { width: `${d}%` } }),
      }),
    }),
  sm = '_modeToggle_yn8i0_3',
  um = '_button_yn8i0_10',
  am = '_options_yn8i0_23',
  cm = '_active_yn8i0_29',
  dm = '_sliders_yn8i0_35',
  jn = { modeToggle: sm, button: um, options: am, active: cm, sliders: dm },
  fm = ({ mode: d, setMode: u }) =>
    c.jsxs('div', {
      className: jn.modeToggle,
      children: [
        c.jsx('button', {
          onClick: () => u('options'),
          className: `${jn.button} ${jn.options} ${d === 'options' ? jn.active : ''}`,
          children: de.questionScreen.modeToggle.pickOne,
        }),
        c.jsxs('button', {
          onClick: () => u('sliders'),
          className: `${jn.button} ${jn.sliders} ${d === 'sliders' ? jn.active : ''}`,
          children: [c.jsx(Sp, { size: 14 }), de.questionScreen.modeToggle.customMix],
        }),
      ],
    }),
  pm = '_wrapper_1674a_1',
  mm = '_trigger_1674a_7',
  hm = '_popover_1674a_26',
  vm = '_popoverVisible_1674a_58',
  ti = { wrapper: pm, trigger: mm, popover: hm, popoverVisible: vm };
function Ss({ content: d, size: u = 14 }) {
  const [s, g] = z.useState(!1),
    [k, _] = z.useState({ top: 0, left: 0 }),
    E = z.useRef(null),
    N = z.useRef(null),
    w = z.useRef(null),
    x = z.useCallback(() => {
      var ue;
      if (!E.current) return;
      const L = E.current.getBoundingClientRect(),
        W = ((ue = N.current) == null ? void 0 : ue.offsetWidth) || 400,
        K = window.innerWidth,
        Q = 16;
      let U = L.left + L.width / 2 - W / 2;
      const G = L.bottom + 8;
      (U < Q ? (U = Q) : U + W > K - Q && (U = K - W - Q), _({ top: G, left: U }));
    }, []);
  (z.useEffect(() => {
    if (!s) return;
    const L = (W) => {
      w.current && !w.current.contains(W.target) && g(!1);
    };
    return (
      document.addEventListener('mousedown', L),
      document.addEventListener('touchstart', L),
      () => {
        (document.removeEventListener('mousedown', L),
          document.removeEventListener('touchstart', L));
      }
    );
  }, [s]),
    z.useEffect(() => {
      s && x();
    }, [s, x]));
  const C = z.useCallback(() => {
      x();
    }, [x]),
    R = z.useCallback(
      (L) => {
        (L.preventDefault(), L.stopPropagation(), x(), g((W) => !W));
      },
      [x]
    );
  return d
    ? c.jsxs('span', {
        ref: w,
        className: ti.wrapper,
        children: [
          c.jsx('button', {
            ref: E,
            type: 'button',
            className: ti.trigger,
            onMouseEnter: C,
            onTouchStart: R,
            'aria-label': 'More information',
            children: c.jsx(hp, { size: u }),
          }),
          c.jsx('span', {
            ref: N,
            className: `${ti.popover} ${s ? ti.popoverVisible : ''}`,
            style: { top: k.top, left: k.left },
            children: d,
          }),
        ],
      })
    : null;
}
const ym = '_optionButton_z7tsl_3',
  gm = '_selected_z7tsl_20',
  wm = '_content_z7tsl_36',
  Sm = '_textContent_z7tsl_42',
  _m = '_label_z7tsl_46',
  km = '_description_z7tsl_58',
  xm = '_checkmark_z7tsl_64',
  Ht = {
    optionButton: ym,
    default: '_default_z7tsl_15',
    selected: gm,
    content: wm,
    textContent: Sm,
    label: _m,
    description: km,
    checkmark: xm,
  };
function Cm({
  label: d,
  description: u,
  info: s,
  optionKey: g,
  credences: k,
  setCredences: _,
  color: E,
  setInputMode: N,
  setLockedKey: w,
}) {
  const x = k[g] === 100,
    C = () => {
      const R = Object.fromEntries(Object.keys(k).map((L) => [L, L === g ? 100 : 0]));
      (_(R), N('options'), w && w(null));
    };
  return c.jsx('button', {
    onClick: C,
    className: `${Ht.optionButton} ${x ? Ht.selected : Ht.default}`,
    style: { '--option-color': E },
    children: c.jsxs('div', {
      className: Ht.content,
      children: [
        c.jsxs('div', {
          className: Ht.textContent,
          children: [
            c.jsxs('div', {
              className: `${Ht.label} ${x ? Ht.selected : ''}`,
              children: [d, c.jsx(Ss, { content: s })],
            }),
            c.jsx('div', { className: Ht.description, children: u }),
          ],
        }),
        x && c.jsx('div', { className: Ht.checkmark, children: '✓' }),
      ],
    }),
  });
}
function Uc({ credences: d, isLocked: u, lockedKey: s, onChange: g }) {
  const [k, _] = z.useState(null),
    [E, N] = z.useState(!1),
    w = z.useCallback(() => {
      u || (N(!0), _({ ...d }));
    }, [u, d]),
    x = z.useCallback(
      (R) => {
        if (u || !E) return;
        N(!1);
        const L = parseFloat(R.target.value);
        (g(L, k, !0, s), _(null));
      },
      [u, E, k, s, g]
    ),
    C = z.useCallback(
      (R) => {
        if (u) return;
        const L = parseFloat(R.target.value);
        g(L, k, !1, s);
      },
      [u, k, s, g]
    );
  return {
    isDragging: E,
    dragHandlers: {
      onChange: C,
      onMouseDown: w,
      onMouseUp: x,
      onMouseLeave: x,
      onTouchStart: w,
      onTouchEnd: x,
    },
  };
}
function Bc({ sliderKey: d, lockedKey: u, credences: s }) {
  return z.useMemo(() => {
    var w;
    const g = u === d,
      k = u && u !== d,
      _ = k ? s[u] : 0,
      E = k ? 100 - _ : 100,
      N = k ? `calc(${E}% + ${(50 - E) * 0.16}px)` : null;
    return {
      isLocked: g,
      hasLockedSibling: k,
      lockedValue: _,
      maxAllowed: E,
      thumbOffset: N,
      featureEnabled: ((w = Wr.ui) == null ? void 0 : w.sliderLock) === !0,
    };
  }, [d, u, s]);
}
const Em = '_credenceSlider_yrqg7_4',
  Nm = '_header_yrqg7_8',
  jm = '_label_yrqg7_15',
  Tm = '_description_yrqg7_22',
  Lm = '_value_yrqg7_28',
  Im = '_sliderRow_yrqg7_35',
  Rm = '_sliderContainer_yrqg7_41',
  Pm = '_lockLimit_yrqg7_46',
  Om = '_lockButton_yrqg7_55',
  Mm = '_locked_yrqg7_73',
  zm = '_compactSlider_yrqg7_91',
  Dm = '_compactSelection_yrqg7_168',
  Fm = '_selected_yrqg7_186',
  Am = '_selectionLabel_yrqg7_191',
  Um = '_selectionIndicator_yrqg7_202',
  xe = {
    credenceSlider: Em,
    header: Nm,
    label: jm,
    description: Tm,
    value: Lm,
    sliderRow: Im,
    sliderContainer: Rm,
    lockLimit: Pm,
    lockButton: Om,
    locked: Mm,
    compactSlider: zm,
    compactSelection: Dm,
    selected: Fm,
    selectionLabel: Am,
    selectionIndicator: Um,
  };
function Bm({
  label: d,
  description: u,
  info: s,
  value: g,
  onChange: k,
  color: _,
  credences: E,
  sliderKey: N,
  lockedKey: w,
  setLockedKey: x,
}) {
  const {
      isLocked: C,
      hasLockedSibling: R,
      thumbOffset: L,
      featureEnabled: W,
    } = Bc({ sliderKey: N, lockedKey: w, credences: E }),
    { isDragging: K, dragHandlers: Q } = Uc({
      credences: E,
      isLocked: C,
      lockedKey: w,
      onChange: k,
    }),
    U = () => {
      W && x(w === N ? null : N);
    },
    G = R
      ? `linear-gradient(to right, ${_} 0%, ${_} ${g}%, rgba(255,255,255,0.15) ${g}%, rgba(255,255,255,0.15) ${L}, rgba(255,255,255,0.08) ${L}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${_} 0%, ${_} ${g}%, rgba(255,255,255,0.15) ${g}%, rgba(255,255,255,0.15) 100%)`;
  return c.jsxs('div', {
    className: xe.credenceSlider,
    children: [
      c.jsxs('div', {
        className: xe.header,
        children: [
          c.jsxs('div', {
            children: [
              c.jsxs('div', { className: xe.label, children: [d, c.jsx(Ss, { content: s })] }),
              c.jsx('div', { className: xe.description, children: u }),
            ],
          }),
          c.jsxs('div', {
            className: xe.value,
            style: { color: _ },
            children: [Math.round(g), '%'],
          }),
        ],
      }),
      c.jsxs('div', {
        className: xe.sliderRow,
        children: [
          c.jsxs('div', {
            className: xe.sliderContainer,
            children: [
              c.jsx('input', {
                type: 'range',
                min: '0',
                max: '100',
                step: 'any',
                value: g,
                ...Q,
                'data-dragging': K,
                disabled: C,
                style: { background: G, cursor: C ? 'not-allowed' : 'pointer' },
              }),
              R && c.jsx('div', { className: xe.lockLimit, style: { left: L } }),
            ],
          }),
          W &&
            c.jsx('button', {
              className: `${xe.lockButton} ${C ? xe.locked : ''}`,
              onClick: U,
              title: C ? de.sliders.unlockTooltip : de.sliders.lockTooltip,
              type: 'button',
              children: c.jsx(Tc, { size: 16 }),
            }),
        ],
      }),
    ],
  });
}
const $m = '_container_9yo3m_3',
  Vm = '_categoryLabel_9yo3m_8',
  Wm = '_heading_9yo3m_16',
  Hm = '_instructions_9yo3m_23',
  Qm = '_buttonRow_9yo3m_30',
  Vr = { container: $m, categoryLabel: Vm, heading: Wm, instructions: Hm, buttonRow: Qm };
function qm(d, u, s) {
  return d === at.SELECTION ? 'options' : d === at.CREDENCE ? 'sliders' : u;
}
function Gm() {
  const {
    currentQuestion: d,
    stateMap: u,
    questionNumber: s,
    progressPercentage: g,
    goBack: k,
    goForward: _,
  } = Qr();
  if (!d) return null;
  const E = u[d.id];
  if (!E) return null;
  const {
      credences: N,
      setCredences: w,
      inputMode: x,
      setInputMode: C,
      lockedKey: R,
      setLockedKey: L,
    } = E,
    W = d.type || at.DEFAULT,
    K = W === at.DEFAULT,
    Q = qm(W, x),
    U = Q === 'options' ? d.instructionsOptions : d.instructionsSliders;
  return c.jsxs('div', {
    className: 'screen',
    children: [
      c.jsx(ci, { subtitle: s }),
      c.jsx(ws, { percentage: g }),
      c.jsx('main', {
        className: 'screen-main',
        children: c.jsxs('div', {
          className: Vr.container,
          children: [
            c.jsx('div', {
              className: Vr.categoryLabel,
              style: { color: rp },
              children: d.categoryLabel,
            }),
            c.jsxs('h2', {
              className: Vr.heading,
              children: [d.heading, c.jsx(Ss, { content: d.info })],
            }),
            c.jsx('p', { className: Vr.instructions, children: U }),
            K && c.jsx(fm, { mode: x, setMode: C }),
            c.jsx('div', {
              className: 'card',
              children:
                Q === 'options'
                  ? d.options.map((G) =>
                      c.jsx(
                        Cm,
                        {
                          label: G.label,
                          description: G.description,
                          info: G.info,
                          optionKey: G.key,
                          credences: N,
                          setCredences: w,
                          color: G.color,
                          setInputMode: C,
                          setLockedKey: L,
                        },
                        G.key
                      )
                    )
                  : d.options.map((G) =>
                      c.jsx(
                        Bm,
                        {
                          label: G.label,
                          description: G.description,
                          info: G.info,
                          value: N[G.key],
                          onChange: (ue, je, fe, Ie) => {
                            const Ce = Pc(G.key, ue, N, je, Ie);
                            w(fe ? Oc(Ce) : Ce);
                          },
                          color: G.color,
                          credences: N,
                          sliderKey: G.key,
                          lockedKey: R,
                          setLockedKey: L,
                        },
                        G.key
                      )
                    ),
            }),
            c.jsxs('div', {
              className: Vr.buttonRow,
              children: [
                c.jsx('button', {
                  onClick: k,
                  className: 'btn btn-secondary',
                  children: de.navigation.back,
                }),
                c.jsx('button', {
                  onClick: _,
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
const Km = '_causeBar_as0sb_3',
  Ym = '_header_as0sb_7',
  Xm = '_name_as0sb_15',
  Zm = '_percentage_as0sb_19',
  Jm = '_changeIndicator_as0sb_23',
  bm = '_up_as0sb_27',
  eh = '_down_as0sb_31',
  th = '_barTrack_as0sb_35',
  nh = '_barOriginal_as0sb_43',
  rh = '_barFill_as0sb_49',
  lh = '_barLabel_as0sb_58',
  ih = '_compact_as0sb_65',
  _t = {
    causeBar: Km,
    header: Ym,
    name: Xm,
    percentage: Zm,
    changeIndicator: Jm,
    up: bm,
    down: eh,
    barTrack: th,
    barOriginal: nh,
    barFill: rh,
    barLabel: lh,
    compact: ih,
  },
  oh = ({
    name: d,
    percentage: u,
    color: s,
    originalPercentage: g = null,
    hasChanged: k = !1,
    simpleMode: _ = !1,
  }) => {
    const E = !_ && k && g !== null && u !== g,
      N = E && u > g;
    return c.jsxs('div', {
      className: `${_t.causeBar} ${_ ? _t.compact : ''}`,
      children: [
        c.jsxs('div', {
          className: _t.header,
          children: [
            c.jsx('span', { className: _t.name, children: d }),
            c.jsxs('span', {
              className: _t.percentage,
              style: { color: s },
              children: [
                u.toFixed(0),
                '%',
                E &&
                  c.jsx('span', {
                    className: `${_t.changeIndicator} ${N ? _t.up : _t.down}`,
                    children: N ? '↑' : '↓',
                  }),
              ],
            }),
          ],
        }),
        c.jsxs('div', {
          className: _t.barTrack,
          children: [
            E &&
              c.jsx('div', { className: _t.barOriginal, style: { width: `${g}%`, background: s } }),
            c.jsx('div', {
              className: _t.barFill,
              style: { width: `${u}%`, background: s },
              children:
                u > 15 && c.jsxs('span', { className: _t.barLabel, children: [u.toFixed(0), '%'] }),
            }),
          ],
        }),
      ],
    });
  },
  sh = { target: _p, parliament: sp, handshake: pp, scale: wp };
function uh({ name: d, size: u = 18, className: s = '' }) {
  const g = sh[d] || jc;
  return c.jsx(g, { size: u, className: s });
}
const ah = '_resultsContainer_jokrc_3',
  ch = '_inner_jokrc_11',
  dh = '_resultsHeader_jokrc_16',
  fh = '_title_jokrc_21',
  ph = '_modifiedIndicator_jokrc_27',
  mh = '_worldviewLabel_jokrc_34',
  hh = '_resultsGrid_jokrc_38',
  vh = '_comparisonContainer_jokrc_46',
  yh = '_originalResults_jokrc_53',
  gh = '_newResults_jokrc_54',
  wh = '_comparisonDivider_jokrc_89',
  Sh = '_dividerLine_jokrc_98',
  _h = '_dividerArrow_jokrc_105',
  kh = '_compactCard_jokrc_118',
  xh = '_cardHeader_jokrc_122',
  Ch = '_cardIcon_jokrc_126',
  Eh = '_cardTitle_jokrc_132',
  Nh = '_resultCard_jokrc_136',
  jh = '_cardSubtitle_jokrc_168',
  Th = '_cardFooter_jokrc_174',
  Lh = '_adjustPanel_jokrc_182',
  Ih = '_adjustHeader_jokrc_190',
  Rh = '_adjustTitle_jokrc_197',
  Ph = '_resetAllButton_jokrc_203',
  Oh = '_panelList_jokrc_220',
  Mh = '_backButtonContainer_jokrc_226',
  zh = '_calculationSelect_jokrc_272',
  Dh = '_calculationSelectContainer_jokrc_305',
  Fh = '_singleResultCard_jokrc_316',
  Ah = '_sideLabel_jokrc_327',
  se = {
    resultsContainer: ah,
    inner: ch,
    resultsHeader: dh,
    title: fh,
    modifiedIndicator: ph,
    worldviewLabel: mh,
    resultsGrid: hh,
    comparisonContainer: vh,
    originalResults: yh,
    newResults: gh,
    comparisonDivider: wh,
    dividerLine: Sh,
    dividerArrow: _h,
    compactCard: kh,
    cardHeader: xh,
    cardIcon: Ch,
    cardTitle: Eh,
    resultCard: Nh,
    cardSubtitle: jh,
    cardFooter: Th,
    adjustPanel: Lh,
    adjustHeader: Ih,
    adjustTitle: Rh,
    resetAllButton: Ph,
    panelList: Oh,
    backButtonContainer: Mh,
    calculationSelect: zh,
    calculationSelectContainer: Dh,
    singleResultCard: Fh,
    sideLabel: Ah,
  };
function $c({
  methodKey: d,
  results: u,
  evs: s = null,
  originalResults: g = null,
  causeEntries: k,
  hasChanged: _ = !1,
  simpleMode: E = !1,
}) {
  const N = de.results.methods[d],
    w = s
      ? `${N.footerLabel} ${k.map(([x, C]) => `${C.name.slice(0, 2)} ${s[x].toFixed(0)}`).join(' · ')}`
      : N.footerText;
  return c.jsxs('div', {
    className: `${se.resultCard} ${E ? se.compactCard : ''}`,
    children: [
      c.jsxs('div', {
        className: se.cardHeader,
        children: [
          c.jsx('div', { className: se.cardIcon, children: c.jsx(uh, { name: N.icon, size: 18 }) }),
          c.jsxs('div', {
            children: [
              c.jsx('h3', { className: se.cardTitle, children: N.title }),
              !E && c.jsx('p', { className: se.cardSubtitle, children: N.subtitle }),
            ],
          }),
        ],
      }),
      k.map(([x, C]) =>
        c.jsx(
          oh,
          {
            name: C.name,
            percentage: u[x],
            originalPercentage: g == null ? void 0 : g[x],
            color: C.color,
            hasChanged: !E && _,
            simpleMode: E,
          },
          x
        )
      ),
      !E && c.jsx('div', { className: se.cardFooter, children: w }),
    ],
  });
}
const Uh = '_container_1m8cr_3',
  Bh = '_title_1m8cr_8',
  $h = '_body_1m8cr_16',
  Vh = '_buttonRow_1m8cr_25',
  ni = { container: Uh, title: Bh, body: $h, buttonRow: Vh };
function Wh() {
  const {
    currentQuestion: d,
    questionNumber: u,
    progressPercentage: s,
    calculationResults: g,
    causesConfig: k,
    goBack: _,
    goForward: E,
  } = Qr();
  if (!d) return null;
  const N = Object.entries(k),
    x = [
      { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
      { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
      { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
      { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
    ].filter((C) => {
      var R;
      return ((R = Wr.calculations) == null ? void 0 : R[C.flag]) === !0;
    });
  return c.jsxs('div', {
    className: 'screen',
    children: [
      c.jsx(ci, { subtitle: u }),
      c.jsx(ws, { percentage: s }),
      c.jsx('main', {
        className: 'screen-main',
        children: c.jsxs('div', {
          className: ni.container,
          children: [
            c.jsx('h2', { className: ni.title, children: d.title }),
            c.jsx('p', { className: ni.body, children: d.body }),
            c.jsx('div', {
              className: se.resultsGrid,
              children: x.map((C) =>
                c.jsx(
                  $c,
                  {
                    methodKey: C.key,
                    results: g[C.key],
                    evs: C.hasEvs ? g[C.key].evs : null,
                    causeEntries: N,
                  },
                  C.key
                )
              ),
            }),
            c.jsxs('div', {
              className: ni.buttonRow,
              children: [
                c.jsx('button', {
                  onClick: _,
                  className: 'btn btn-secondary',
                  children: de.navigation.back,
                }),
                c.jsx('button', {
                  onClick: E,
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
function Hh({
  label: d,
  value: u,
  onChange: s,
  color: g,
  credences: k,
  sliderKey: _,
  lockedKey: E,
  setLockedKey: N,
}) {
  const {
      isLocked: w,
      hasLockedSibling: x,
      thumbOffset: C,
      featureEnabled: R,
    } = Bc({ sliderKey: _, lockedKey: E, credences: k }),
    { isDragging: L, dragHandlers: W } = Uc({
      credences: k,
      isLocked: w,
      lockedKey: E,
      onChange: s,
    }),
    K = () => {
      R && N(E === _ ? null : _);
    },
    Q = x
      ? `linear-gradient(to right, ${g} 0%, ${g} ${u}%, rgba(255,255,255,0.15) ${u}%, rgba(255,255,255,0.15) ${C}, rgba(255,255,255,0.08) ${C}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${g} 0%, ${g} ${u}%, rgba(255,255,255,0.15) ${u}%, rgba(255,255,255,0.15) 100%)`;
  return c.jsxs('div', {
    className: xe.compactSlider,
    children: [
      c.jsxs('div', {
        className: xe.header,
        children: [
          c.jsx('span', { className: xe.label, children: d }),
          c.jsxs('span', {
            className: xe.value,
            style: { color: g },
            children: [Math.round(u), '%'],
          }),
        ],
      }),
      c.jsxs('div', {
        className: xe.sliderRow,
        children: [
          c.jsxs('div', {
            className: xe.sliderContainer,
            children: [
              c.jsx('input', {
                type: 'range',
                min: '0',
                max: '100',
                step: 'any',
                value: u,
                ...W,
                'data-dragging': L,
                disabled: w,
                style: { background: Q, cursor: w ? 'not-allowed' : 'pointer' },
              }),
              x && c.jsx('div', { className: xe.lockLimit, style: { left: C } }),
            ],
          }),
          R &&
            c.jsx('button', {
              className: `${xe.lockButton} ${w ? xe.locked : ''}`,
              onClick: K,
              title: w ? de.sliders.unlockTooltip : de.sliders.lockTooltip,
              type: 'button',
              children: c.jsx(Tc, { size: 14 }),
            }),
        ],
      }),
    ],
  });
}
function Qh({ label: d, color: u, isSelected: s, onSelect: g }) {
  return c.jsxs('button', {
    type: 'button',
    onClick: g,
    className: `${xe.compactSelection} ${s ? xe.selected : ''}`,
    style: { '--selection-color': u },
    children: [
      c.jsx('span', { className: xe.selectionLabel, children: d }),
      c.jsx('span', {
        className: xe.selectionIndicator,
        style: { borderColor: s ? u : void 0, backgroundColor: s ? u : void 0 },
        children: s && c.jsx(ap, { size: 12, strokeWidth: 3 }),
      }),
    ],
  });
}
const qh = '_editPanel_1er15_3',
  Gh = '_expanded_1er15_11',
  Kh = '_toggleButton_1er15_16',
  Yh = '_buttonContent_1er15_33',
  Xh = '_icon_1er15_39',
  Zh = '_title_1er15_43',
  Jh = '_modifiedBadge_1er15_48',
  bh = '_preview_1er15_56',
  ev = '_chevron_1er15_62',
  tv = '_content_1er15_66',
  nv = '_footer_1er15_71',
  rv = '_footerNote_1er15_78',
  lv = '_resetButton_1er15_84',
  iv = '_selectionRow_1er15_103',
  We = {
    editPanel: qh,
    expanded: Gh,
    toggleButton: Kh,
    buttonContent: Yh,
    icon: Xh,
    title: Zh,
    modifiedBadge: Jh,
    preview: bh,
    chevron: ev,
    content: tv,
    footer: nv,
    footerNote: rv,
    resetButton: lv,
    selectionRow: iv,
  };
function ov({
  title: d,
  icon: u,
  credences: s,
  setCredences: g,
  originalCredences: k,
  configs: _,
  isExpanded: E,
  onToggle: N,
  lockedKey: w,
  setLockedKey: x,
  questionType: C = at.DEFAULT,
}) {
  const R = k && JSON.stringify(s) !== JSON.stringify(k),
    L = C === at.SELECTION,
    W = (U) => {
      const G = {};
      (_.forEach((ue) => {
        G[ue.key] = ue.key === U ? 100 : 0;
      }),
        g(G));
    },
    K = (U) => {
      (U.stopPropagation(), g({ ...k }));
    },
    Q = _.map((U) => `${U.short}:${s[U.key]}%`).join(' ');
  return c.jsxs('div', {
    className: `${We.editPanel} ${E ? We.expanded : ''}`,
    children: [
      c.jsxs('button', {
        onClick: N,
        className: We.toggleButton,
        children: [
          c.jsxs('div', {
            className: We.buttonContent,
            children: [
              c.jsx('span', { className: We.icon, children: u }),
              c.jsx('span', { className: We.title, children: d }),
              R &&
                c.jsx('span', {
                  className: We.modifiedBadge,
                  children: de.editPanel.modifiedBadge,
                }),
              !E && c.jsx('span', { className: We.preview, children: Q }),
            ],
          }),
          c.jsx('span', {
            className: We.chevron,
            children: E ? c.jsx(dp, { size: 16 }) : c.jsx(cp, { size: 16 }),
          }),
        ],
      }),
      E &&
        c.jsx('div', {
          className: We.content,
          children: L
            ? c.jsxs(c.Fragment, {
                children: [
                  c.jsx('div', {
                    className: We.selectionRow,
                    children: _.map((U) =>
                      c.jsx(
                        Qh,
                        {
                          label: U.label,
                          color: U.color,
                          isSelected: s[U.key] === 100,
                          onSelect: () => W(U.key),
                        },
                        U.key
                      )
                    ),
                  }),
                  c.jsxs('div', {
                    className: We.footer,
                    children: [
                      c.jsx('span', {
                        className: We.footerNote,
                        children: de.editPanel.selectionNote || 'Pick one option',
                      }),
                      R &&
                        c.jsxs('button', {
                          onClick: K,
                          className: We.resetButton,
                          children: [c.jsx(ps, { size: 10 }), ' ', de.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              })
            : c.jsxs(c.Fragment, {
                children: [
                  _.map((U) =>
                    c.jsx(
                      Hh,
                      {
                        label: U.label,
                        value: s[U.key],
                        onChange: (G, ue, je, fe) => {
                          const Ie = Pc(U.key, G, s, ue, fe);
                          g(je ? Oc(Ie) : Ie);
                        },
                        color: U.color,
                        credences: s,
                        sliderKey: U.key,
                        lockedKey: w,
                        setLockedKey: x,
                      },
                      U.key
                    )
                  ),
                  c.jsxs('div', {
                    className: We.footer,
                    children: [
                      c.jsx('span', {
                        className: We.footerNote,
                        children: de.editPanel.sliderNote,
                      }),
                      R &&
                        c.jsxs('button', {
                          onClick: K,
                          className: We.resetButton,
                          children: [c.jsx(ps, { size: 10 }), ' ', de.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              }),
        }),
    ],
  });
}
function sv({ worldviewIds: d, activeWorldviewId: u, hasProgressMap: s, onSwitch: g, onClose: k }) {
  return c.jsx('div', {
    className: ut.overlay,
    onClick: k,
    children: c.jsxs('div', {
      className: ut.modal,
      onClick: (_) => _.stopPropagation(),
      children: [
        c.jsx('h2', { className: ut.title, children: 'Switch Worldview' }),
        c.jsx('p', {
          className: ut.message,
          children:
            'Each worldview stores a separate set of quiz answers. Select a worldview to view or edit.',
        }),
        c.jsx('div', {
          className: ut.buttons,
          children: d.map((_) => {
            const E = _ === u,
              w = s[_] ? `Worldview ${_}` : `Worldview ${_} (empty)`;
            return c.jsxs(
              'button',
              {
                onClick: () => g(_),
                className: `btn ${E ? 'btn-primary' : 'btn-secondary'} ${ut.button}`,
                disabled: E,
                children: [w, E && ' (current)'],
              },
              _
            );
          }),
        }),
      ],
    }),
  });
}
function uv() {
  var F, m;
  const {
      questionsConfig: d,
      causesConfig: u,
      stateMap: s,
      expandedPanel: g,
      setExpandedPanel: k,
      calculationResults: _,
      originalCalculationResults: E,
      hasChanged: N,
      resetToOriginal: w,
      resetQuiz: x,
      goBack: C,
      worldviews: R,
      activeWorldviewId: L,
      switchWorldview: W,
      worldviewIds: K,
      hasProgressMap: Q,
      startQuiz: U,
      selectedCalculations: G,
      setSelectedCalculations: ue,
    } = Qr(),
    [je, fe] = z.useState(!1),
    [Ie, Ce] = z.useState(!1),
    [ze, He] = z.useState(null),
    [ct, Ee] = z.useState(!1),
    et = Object.entries(u),
    we = [
      { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
      { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
      { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
      { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
    ].filter((S) => {
      var O;
      return ((O = Wr.calculations) == null ? void 0 : O[S.flag]) === !0;
    });
  z.useEffect(() => {
    if (we.length === 0) return;
    const S = we[0].key,
      O = G.left && we.some((b) => b.key === G.left),
      J = G.right && we.some((b) => b.key === G.right);
    (!O || !J) && ue({ left: O ? G.left : S, right: J ? G.right : S });
  }, [we, G.left, G.right, ue]);
  const qe = (S, O) => {
      ue({ [S]: O });
    },
    Ze = (S) => {
      (Ee(!1), W(S), Q[S] || U());
    },
    pe = (S) =>
      S.options.map((O) => ({
        key: O.key,
        label: O.panelLabel,
        short: O.panelShort,
        color: O.color,
      })),
    ae = d.filter((S) => S.type !== at.INTERMISSION),
    M = (S) =>
      c.jsx('select', {
        className: se.calculationSelect,
        value: G[S] || '',
        onChange: (O) => qe(S, O.target.value),
        children: we.map((O) =>
          c.jsx('option', { value: O.key, children: de.results.methods[O.key].title }, O.key)
        ),
      }),
    q = (S, O, J = !0) => {
      const b = G[O],
        ee = we.find((re) => re.key === b);
      if (!ee) return null;
      const le = S == null ? void 0 : S[ee.key];
      return le
        ? c.jsx($c, {
            methodKey: ee.key,
            results: le,
            evs: ee.hasEvs ? le.evs : null,
            causeEntries: et,
            simpleMode: J,
          })
        : null;
    };
  return c.jsxs('div', {
    className: se.resultsContainer,
    children: [
      c.jsx(ci, {}),
      c.jsx(ws, { percentage: 100 }),
      c.jsxs('div', {
        className: se.inner,
        children: [
          c.jsx('div', {
            className: se.resultsHeader,
            children: c.jsxs('h1', {
              className: se.title,
              children: [
                de.results.heading,
                c.jsxs('span', {
                  className: se.worldviewLabel,
                  children: [' (Worldview ', L, ')'],
                }),
                N &&
                  c.jsx('span', {
                    className: se.modifiedIndicator,
                    children: de.results.modifiedIndicator,
                  }),
              ],
            }),
          }),
          c.jsx('div', {
            className: se.calculationSelectContainer,
            children: N
              ? c.jsxs('div', {
                  className: se.comparisonContainer,
                  children: [
                    c.jsxs('div', {
                      className: se.originalResults,
                      children: [
                        c.jsx('div', { className: se.sideLabel, children: 'Original' }),
                        M('left'),
                        q(E, 'left'),
                      ],
                    }),
                    c.jsxs('div', {
                      className: se.comparisonDivider,
                      children: [
                        c.jsx('div', { className: se.dividerLine }),
                        c.jsx('div', { className: se.dividerArrow, children: '→' }),
                        c.jsx('div', { className: se.dividerLine }),
                      ],
                    }),
                    c.jsxs('div', {
                      className: se.newResults,
                      children: [
                        c.jsx('div', { className: se.sideLabel, children: 'Modified' }),
                        M('right'),
                        q(_, 'right'),
                      ],
                    }),
                  ],
                })
              : c.jsxs(c.Fragment, {
                  children: [
                    M('left'),
                    c.jsx('div', { className: se.singleResultCard, children: q(E || _, 'left') }),
                  ],
                }),
          }),
          c.jsxs('div', {
            className: se.adjustPanel,
            children: [
              c.jsxs('div', {
                className: se.adjustHeader,
                children: [
                  c.jsx('span', {
                    className: se.adjustTitle,
                    children: de.results.adjustCredencesHeading,
                  }),
                  N &&
                    c.jsxs('button', {
                      onClick: w,
                      className: se.resetAllButton,
                      children: [c.jsx(ps, { size: 10 }), ' ', de.results.resetAllButton],
                    }),
                ],
              }),
              c.jsx('div', {
                className: se.panelList,
                children: ae.map((S) => {
                  const O = s[S.id];
                  return O
                    ? c.jsx(
                        ov,
                        {
                          title: S.editPanelTitle,
                          icon: c.jsx(Ac, { name: S.icon, size: 16 }),
                          credences: O.credences,
                          setCredences: O.setCredences,
                          originalCredences: O.originalCredences,
                          configs: pe(S),
                          isExpanded: g === S.id,
                          onToggle: () => k(g === S.id ? null : S.id),
                          lockedKey: O.lockedKey,
                          setLockedKey: O.setLockedKey,
                          questionType: S.type,
                        },
                        S.id
                      )
                    : null;
                }),
              }),
            ],
          }),
          c.jsxs('div', {
            className: se.backButtonContainer,
            children: [
              c.jsx('button', {
                onClick: C,
                className: 'btn btn-secondary',
                children: de.navigation.backToQuiz,
              }),
              c.jsxs('button', {
                onClick: () => Ee(!0),
                className: 'btn btn-secondary',
                children: [c.jsx(vp, { size: 16 }), 'Switch Worldview'],
              }),
              (F = Wr.ui) == null ? void 0 : F.shareResults,
              (m = Wr.ui) == null ? void 0 : m.resetButton,
            ],
          }),
        ],
      }),
      ct &&
        c.jsx(sv, {
          worldviewIds: K,
          activeWorldviewId: L,
          hasProgressMap: Q,
          onSwitch: Ze,
          onClose: () => Ee(!1),
        }),
    ],
  });
}
const av = '_debugButton_1xuzz_4',
  cv = '_overlay_1xuzz_28',
  dv = '_modal_1xuzz_41',
  fv = '_header_1xuzz_52',
  pv = '_closeButton_1xuzz_66',
  mv = '_content_1xuzz_79',
  hv = '_section_1xuzz_85',
  vv = '_causeBlock_1xuzz_99',
  yv = '_fieldRow_1xuzz_112',
  gv = '_checkboxRow_1xuzz_136',
  wv = '_multiplierGroup_1xuzz_155',
  Sv = '_dimInfo_1xuzz_165',
  _v = '_multiplierRow_1xuzz_172',
  kv = '_footer_1xuzz_196',
  xv = '_saveButton_1xuzz_203',
  Me = {
    debugButton: av,
    overlay: cv,
    modal: dv,
    header: fv,
    closeButton: pv,
    content: mv,
    section: hv,
    causeBlock: vv,
    fieldRow: yv,
    checkboxRow: gv,
    multiplierGroup: wv,
    dimInfo: Sv,
    multiplierRow: _v,
    footer: kv,
    saveButton: xv,
  },
  { causes: Cv, diminishingReturns: Ev } = ii,
  Nv = Rc(!0),
  jv = ({ onConfigChange: d }) => {
    const [u, s] = z.useState(!1),
      [g, k] = z.useState({
        causes: JSON.parse(JSON.stringify(Cv)),
        dimensions: JSON.parse(JSON.stringify(Nv)),
        diminishingReturns: Ev,
      }),
      _ = (w, x, C) => {
        k((R) => ({
          ...R,
          causes: {
            ...R.causes,
            [w]: {
              ...R.causes[w],
              [x]: x === 'name' || x === 'color' || typeof C == 'boolean' ? C : Number(C),
            },
          },
        }));
      },
      E = (w, x, C) => {
        k((R) => ({
          ...R,
          dimensions: {
            ...R.dimensions,
            [w]: { ...R.dimensions[w], options: { ...R.dimensions[w].options, [x]: Number(C) } },
          },
        }));
      },
      N = () => {
        (d(g), s(!1));
      };
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx('button', {
          className: Me.debugButton,
          onClick: () => s(!0),
          title: 'Debug Settings',
          children: 'Settings',
        }),
        u &&
          c.jsx('div', {
            className: Me.overlay,
            onClick: () => s(!1),
            children: c.jsxs('div', {
              className: Me.modal,
              onClick: (w) => w.stopPropagation(),
              children: [
                c.jsxs('div', {
                  className: Me.header,
                  children: [
                    c.jsx('h2', { children: 'Calculation Debugger' }),
                    c.jsx('button', {
                      className: Me.closeButton,
                      onClick: () => s(!1),
                      children: 'x',
                    }),
                  ],
                }),
                c.jsxs('div', {
                  className: Me.content,
                  children: [
                    c.jsxs('section', {
                      className: Me.section,
                      children: [
                        c.jsx('h3', { children: 'DIMINISHING RETURNS' }),
                        c.jsx('div', {
                          className: Me.fieldRow,
                          children: c.jsxs('label', {
                            children: [
                              'Mode:',
                              c.jsx('select', {
                                value: g.diminishingReturns,
                                onChange: (w) =>
                                  k((x) => ({ ...x, diminishingReturns: w.target.value })),
                                children: Object.keys(ms).map((w) =>
                                  c.jsxs(
                                    'option',
                                    { value: w, children: [w, ' (power = ', ms[w], ')'] },
                                    w
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                        c.jsx('p', {
                          className: Me.dimInfo,
                          children:
                            'none = winner-take-all · sqrt = moderate spreading · extreme = near-equal',
                        }),
                      ],
                    }),
                    c.jsxs('section', {
                      className: Me.section,
                      children: [
                        c.jsx('h3', { children: 'CAUSES' }),
                        Object.entries(g.causes).map(([w, x]) =>
                          c.jsxs(
                            'div',
                            {
                              className: Me.causeBlock,
                              children: [
                                c.jsx('h4', { children: x.name }),
                                c.jsxs('div', {
                                  className: Me.fieldRow,
                                  children: [
                                    c.jsxs('label', {
                                      children: [
                                        'Points:',
                                        c.jsx('input', {
                                          type: 'number',
                                          value: x.points,
                                          onChange: (C) => _(w, 'points', C.target.value),
                                        }),
                                      ],
                                    }),
                                    c.jsxs('label', {
                                      children: [
                                        'Scale Factor:',
                                        c.jsx('input', {
                                          type: 'number',
                                          value: x.scaleFactor,
                                          onChange: (C) => _(w, 'scaleFactor', C.target.value),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                c.jsxs('div', {
                                  className: Me.checkboxRow,
                                  children: [
                                    c.jsxs('label', {
                                      children: [
                                        c.jsx('input', {
                                          type: 'checkbox',
                                          checked: x.helpsAnimals,
                                          onChange: (C) => _(w, 'helpsAnimals', C.target.checked),
                                        }),
                                        'Helps Animals',
                                      ],
                                    }),
                                    c.jsxs('label', {
                                      children: [
                                        c.jsx('input', {
                                          type: 'checkbox',
                                          checked: x.helpsFutureHumans,
                                          onChange: (C) =>
                                            _(w, 'helpsFutureHumans', C.target.checked),
                                        }),
                                        'Helps Future Humans',
                                      ],
                                    }),
                                    c.jsxs('label', {
                                      children: [
                                        c.jsx('input', {
                                          type: 'checkbox',
                                          checked: x.isSpeculative,
                                          onChange: (C) => _(w, 'isSpeculative', C.target.checked),
                                        }),
                                        'Is Speculative',
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            w
                          )
                        ),
                      ],
                    }),
                    c.jsxs('section', {
                      className: Me.section,
                      children: [
                        c.jsx('h3', { children: 'DIMENSIONS (from questions)' }),
                        Object.entries(g.dimensions).map(([w, x]) =>
                          c.jsxs(
                            'div',
                            {
                              className: Me.multiplierGroup,
                              children: [
                                c.jsx('h4', { children: x.name }),
                                c.jsx('p', {
                                  className: Me.dimInfo,
                                  children:
                                    x.applyAs === 'multiplier'
                                      ? `Multiplier when: ${x.appliesWhen}`
                                      : `Exponent on: ${x.appliesTo}`,
                                }),
                                c.jsx('div', {
                                  className: Me.multiplierRow,
                                  children: Object.entries(x.options).map(([C, R]) =>
                                    c.jsxs(
                                      'label',
                                      {
                                        children: [
                                          C,
                                          ':',
                                          c.jsx('input', {
                                            type: 'number',
                                            step: x.applyAs === 'exponent' ? '0.1' : '0.01',
                                            value: R,
                                            onChange: (L) => E(w, C, L.target.value),
                                          }),
                                        ],
                                      },
                                      C
                                    )
                                  ),
                                }),
                              ],
                            },
                            w
                          )
                        ),
                      ],
                    }),
                  ],
                }),
                c.jsx('div', {
                  className: Me.footer,
                  children: c.jsx('button', {
                    className: Me.saveButton,
                    onClick: N,
                    children: 'Save',
                  }),
                }),
              ],
            }),
          }),
      ],
    });
  },
  Tv = {
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
function Lv() {
  const {
    currentStep: d,
    currentQuestion: u,
    setDebugConfig: s,
    shareUrlError: g,
    isHydrating: k,
  } = Qr();
  if (k) return null;
  function _() {
    return d === 'welcome'
      ? c.jsx(om, {})
      : d === 'results'
        ? c.jsx(uv, {})
        : u
          ? u.type === at.INTERMISSION
            ? c.jsx(Wh, {})
            : c.jsx(Gm, {})
          : null;
  }
  return c.jsxs(c.Fragment, {
    children: [
      g && c.jsx('div', { style: Tv, children: g }),
      _(),
      c.jsx(jv, { onConfigChange: s }),
    ],
  });
}
function Iv() {
  return c.jsx(Hp, { children: c.jsx(Lv, {}) });
}
Gf.createRoot(document.getElementById('root')).render(
  c.jsx(z.StrictMode, { children: c.jsx(Iv, {}) })
);
