(function () {
  const f = document.createElement('link').relList;
  if (f && f.supports && f.supports('modulepreload')) return;
  for (const S of document.querySelectorAll('link[rel="modulepreload"]')) g(S);
  new MutationObserver((S) => {
    for (const j of S)
      if (j.type === 'childList')
        for (const L of j.addedNodes) L.tagName === 'LINK' && L.rel === 'modulepreload' && g(L);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(S) {
    const j = {};
    return (
      S.integrity && (j.integrity = S.integrity),
      S.referrerPolicy && (j.referrerPolicy = S.referrerPolicy),
      S.crossOrigin === 'use-credentials'
        ? (j.credentials = 'include')
        : S.crossOrigin === 'anonymous'
          ? (j.credentials = 'omit')
          : (j.credentials = 'same-origin'),
      j
    );
  }
  function g(S) {
    if (S.ep) return;
    S.ep = !0;
    const j = u(S);
    fetch(S.href, j);
  }
})();
var Gi = { exports: {} },
  Or = {},
  qi = { exports: {} },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ja;
function yf() {
  if (Ja) return ee;
  Ja = 1;
  var m = Symbol.for('react.element'),
    f = Symbol.for('react.portal'),
    u = Symbol.for('react.fragment'),
    g = Symbol.for('react.strict_mode'),
    S = Symbol.for('react.profiler'),
    j = Symbol.for('react.provider'),
    L = Symbol.for('react.context'),
    P = Symbol.for('react.forward_ref'),
    w = Symbol.for('react.suspense'),
    E = Symbol.for('react.memo'),
    O = Symbol.for('react.lazy'),
    I = Symbol.iterator;
  function $(p) {
    return p === null || typeof p != 'object'
      ? null
      : ((p = (I && p[I]) || p['@@iterator']), typeof p == 'function' ? p : null);
  }
  var Q = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    b = Object.assign,
    F = {};
  function G(p, x, X) {
    ((this.props = p), (this.context = x), (this.refs = F), (this.updater = X || Q));
  }
  ((G.prototype.isReactComponent = {}),
    (G.prototype.setState = function (p, x) {
      if (typeof p != 'object' && typeof p != 'function' && p != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, p, x, 'setState');
    }),
    (G.prototype.forceUpdate = function (p) {
      this.updater.enqueueForceUpdate(this, p, 'forceUpdate');
    }));
  function Z() {}
  Z.prototype = G.prototype;
  function ae(p, x, X) {
    ((this.props = p), (this.context = x), (this.refs = F), (this.updater = X || Q));
  }
  var J = (ae.prototype = new Z());
  ((J.constructor = ae), b(J, G.prototype), (J.isPureReactComponent = !0));
  var Y = Array.isArray,
    ge = Object.prototype.hasOwnProperty,
    ie = { current: null },
    ke = { key: !0, ref: !0, __self: !0, __source: !0 };
  function fe(p, x, X) {
    var te,
      re = {},
      le = null,
      ce = null;
    if (x != null)
      for (te in (x.ref !== void 0 && (ce = x.ref), x.key !== void 0 && (le = '' + x.key), x))
        ge.call(x, te) && !ke.hasOwnProperty(te) && (re[te] = x[te]);
    var se = arguments.length - 2;
    if (se === 1) re.children = X;
    else if (1 < se) {
      for (var he = Array(se), lt = 0; lt < se; lt++) he[lt] = arguments[lt + 2];
      re.children = he;
    }
    if (p && p.defaultProps)
      for (te in ((se = p.defaultProps), se)) re[te] === void 0 && (re[te] = se[te]);
    return { $$typeof: m, type: p, key: le, ref: ce, props: re, _owner: ie.current };
  }
  function vt(p, x) {
    return { $$typeof: m, type: p.type, key: x, ref: p.ref, props: p.props, _owner: p._owner };
  }
  function Le(p) {
    return typeof p == 'object' && p !== null && p.$$typeof === m;
  }
  function Ct(p) {
    var x = { '=': '=0', ':': '=2' };
    return (
      '$' +
      p.replace(/[=:]/g, function (X) {
        return x[X];
      })
    );
  }
  var Fe = /\/+/g;
  function Be(p, x) {
    return typeof p == 'object' && p !== null && p.key != null ? Ct('' + p.key) : x.toString(36);
  }
  function Ye(p, x, X, te, re) {
    var le = typeof p;
    (le === 'undefined' || le === 'boolean') && (p = null);
    var ce = !1;
    if (p === null) ce = !0;
    else
      switch (le) {
        case 'string':
        case 'number':
          ce = !0;
          break;
        case 'object':
          switch (p.$$typeof) {
            case m:
            case f:
              ce = !0;
          }
      }
    if (ce)
      return (
        (ce = p),
        (re = re(ce)),
        (p = te === '' ? '.' + Be(ce, 0) : te),
        Y(re)
          ? ((X = ''),
            p != null && (X = p.replace(Fe, '$&/') + '/'),
            Ye(re, x, X, '', function (lt) {
              return lt;
            }))
          : re != null &&
            (Le(re) &&
              (re = vt(
                re,
                X +
                  (!re.key || (ce && ce.key === re.key)
                    ? ''
                    : ('' + re.key).replace(Fe, '$&/') + '/') +
                  p
              )),
            x.push(re)),
        1
      );
    if (((ce = 0), (te = te === '' ? '.' : te + ':'), Y(p)))
      for (var se = 0; se < p.length; se++) {
        le = p[se];
        var he = te + Be(le, se);
        ce += Ye(le, x, X, he, re);
      }
    else if (((he = $(p)), typeof he == 'function'))
      for (p = he.call(p), se = 0; !(le = p.next()).done; )
        ((le = le.value), (he = te + Be(le, se++)), (ce += Ye(le, x, X, he, re)));
    else if (le === 'object')
      throw (
        (x = String(p)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (x === '[object Object]' ? 'object with keys {' + Object.keys(p).join(', ') + '}' : x) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return ce;
  }
  function rt(p, x, X) {
    if (p == null) return p;
    var te = [],
      re = 0;
    return (
      Ye(p, te, '', '', function (le) {
        return x.call(X, le, re++);
      }),
      te
    );
  }
  function Ae(p) {
    if (p._status === -1) {
      var x = p._result;
      ((x = x()),
        x.then(
          function (X) {
            (p._status === 0 || p._status === -1) && ((p._status = 1), (p._result = X));
          },
          function (X) {
            (p._status === 0 || p._status === -1) && ((p._status = 2), (p._result = X));
          }
        ),
        p._status === -1 && ((p._status = 0), (p._result = x)));
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var M = { current: null },
    _ = { transition: null },
    D = { ReactCurrentDispatcher: M, ReactCurrentBatchConfig: _, ReactCurrentOwner: ie };
  function R() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (ee.Children = {
      map: rt,
      forEach: function (p, x, X) {
        rt(
          p,
          function () {
            x.apply(this, arguments);
          },
          X
        );
      },
      count: function (p) {
        var x = 0;
        return (
          rt(p, function () {
            x++;
          }),
          x
        );
      },
      toArray: function (p) {
        return (
          rt(p, function (x) {
            return x;
          }) || []
        );
      },
      only: function (p) {
        if (!Le(p))
          throw Error('React.Children.only expected to receive a single React element child.');
        return p;
      },
    }),
    (ee.Component = G),
    (ee.Fragment = u),
    (ee.Profiler = S),
    (ee.PureComponent = ae),
    (ee.StrictMode = g),
    (ee.Suspense = w),
    (ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
    (ee.act = R),
    (ee.cloneElement = function (p, x, X) {
      if (p == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + p + '.'
        );
      var te = b({}, p.props),
        re = p.key,
        le = p.ref,
        ce = p._owner;
      if (x != null) {
        if (
          (x.ref !== void 0 && ((le = x.ref), (ce = ie.current)),
          x.key !== void 0 && (re = '' + x.key),
          p.type && p.type.defaultProps)
        )
          var se = p.type.defaultProps;
        for (he in x)
          ge.call(x, he) &&
            !ke.hasOwnProperty(he) &&
            (te[he] = x[he] === void 0 && se !== void 0 ? se[he] : x[he]);
      }
      var he = arguments.length - 2;
      if (he === 1) te.children = X;
      else if (1 < he) {
        se = Array(he);
        for (var lt = 0; lt < he; lt++) se[lt] = arguments[lt + 2];
        te.children = se;
      }
      return { $$typeof: m, type: p.type, key: re, ref: le, props: te, _owner: ce };
    }),
    (ee.createContext = function (p) {
      return (
        (p = {
          $$typeof: L,
          _currentValue: p,
          _currentValue2: p,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (p.Provider = { $$typeof: j, _context: p }),
        (p.Consumer = p)
      );
    }),
    (ee.createElement = fe),
    (ee.createFactory = function (p) {
      var x = fe.bind(null, p);
      return ((x.type = p), x);
    }),
    (ee.createRef = function () {
      return { current: null };
    }),
    (ee.forwardRef = function (p) {
      return { $$typeof: P, render: p };
    }),
    (ee.isValidElement = Le),
    (ee.lazy = function (p) {
      return { $$typeof: O, _payload: { _status: -1, _result: p }, _init: Ae };
    }),
    (ee.memo = function (p, x) {
      return { $$typeof: E, type: p, compare: x === void 0 ? null : x };
    }),
    (ee.startTransition = function (p) {
      var x = _.transition;
      _.transition = {};
      try {
        p();
      } finally {
        _.transition = x;
      }
    }),
    (ee.unstable_act = R),
    (ee.useCallback = function (p, x) {
      return M.current.useCallback(p, x);
    }),
    (ee.useContext = function (p) {
      return M.current.useContext(p);
    }),
    (ee.useDebugValue = function () {}),
    (ee.useDeferredValue = function (p) {
      return M.current.useDeferredValue(p);
    }),
    (ee.useEffect = function (p, x) {
      return M.current.useEffect(p, x);
    }),
    (ee.useId = function () {
      return M.current.useId();
    }),
    (ee.useImperativeHandle = function (p, x, X) {
      return M.current.useImperativeHandle(p, x, X);
    }),
    (ee.useInsertionEffect = function (p, x) {
      return M.current.useInsertionEffect(p, x);
    }),
    (ee.useLayoutEffect = function (p, x) {
      return M.current.useLayoutEffect(p, x);
    }),
    (ee.useMemo = function (p, x) {
      return M.current.useMemo(p, x);
    }),
    (ee.useReducer = function (p, x, X) {
      return M.current.useReducer(p, x, X);
    }),
    (ee.useRef = function (p) {
      return M.current.useRef(p);
    }),
    (ee.useState = function (p) {
      return M.current.useState(p);
    }),
    (ee.useSyncExternalStore = function (p, x, X) {
      return M.current.useSyncExternalStore(p, x, X);
    }),
    (ee.useTransition = function () {
      return M.current.useTransition();
    }),
    (ee.version = '18.3.1'),
    ee
  );
}
var ba;
function bi() {
  return (ba || ((ba = 1), (qi.exports = yf())), qi.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ec;
function gf() {
  if (ec) return Or;
  ec = 1;
  var m = bi(),
    f = Symbol.for('react.element'),
    u = Symbol.for('react.fragment'),
    g = Object.prototype.hasOwnProperty,
    S = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(P, w, E) {
    var O,
      I = {},
      $ = null,
      Q = null;
    (E !== void 0 && ($ = '' + E),
      w.key !== void 0 && ($ = '' + w.key),
      w.ref !== void 0 && (Q = w.ref));
    for (O in w) g.call(w, O) && !j.hasOwnProperty(O) && (I[O] = w[O]);
    if (P && P.defaultProps) for (O in ((w = P.defaultProps), w)) I[O] === void 0 && (I[O] = w[O]);
    return { $$typeof: f, type: P, key: $, ref: Q, props: I, _owner: S.current };
  }
  return ((Or.Fragment = u), (Or.jsx = L), (Or.jsxs = L), Or);
}
var tc;
function _f() {
  return (tc || ((tc = 1), (Gi.exports = gf())), Gi.exports);
}
var d = _f(),
  K = bi(),
  Wl = {},
  Ki = { exports: {} },
  tt = {},
  Yi = { exports: {} },
  Xi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nc;
function wf() {
  return (
    nc ||
      ((nc = 1),
      (function (m) {
        function f(_, D) {
          var R = _.length;
          _.push(D);
          e: for (; 0 < R; ) {
            var p = (R - 1) >>> 1,
              x = _[p];
            if (0 < S(x, D)) ((_[p] = D), (_[R] = x), (R = p));
            else break e;
          }
        }
        function u(_) {
          return _.length === 0 ? null : _[0];
        }
        function g(_) {
          if (_.length === 0) return null;
          var D = _[0],
            R = _.pop();
          if (R !== D) {
            _[0] = R;
            e: for (var p = 0, x = _.length, X = x >>> 1; p < X; ) {
              var te = 2 * (p + 1) - 1,
                re = _[te],
                le = te + 1,
                ce = _[le];
              if (0 > S(re, R))
                le < x && 0 > S(ce, re)
                  ? ((_[p] = ce), (_[le] = R), (p = le))
                  : ((_[p] = re), (_[te] = R), (p = te));
              else if (le < x && 0 > S(ce, R)) ((_[p] = ce), (_[le] = R), (p = le));
              else break e;
            }
          }
          return D;
        }
        function S(_, D) {
          var R = _.sortIndex - D.sortIndex;
          return R !== 0 ? R : _.id - D.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var j = performance;
          m.unstable_now = function () {
            return j.now();
          };
        } else {
          var L = Date,
            P = L.now();
          m.unstable_now = function () {
            return L.now() - P;
          };
        }
        var w = [],
          E = [],
          O = 1,
          I = null,
          $ = 3,
          Q = !1,
          b = !1,
          F = !1,
          G = typeof setTimeout == 'function' ? setTimeout : null,
          Z = typeof clearTimeout == 'function' ? clearTimeout : null,
          ae = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function J(_) {
          for (var D = u(E); D !== null; ) {
            if (D.callback === null) g(E);
            else if (D.startTime <= _) (g(E), (D.sortIndex = D.expirationTime), f(w, D));
            else break;
            D = u(E);
          }
        }
        function Y(_) {
          if (((F = !1), J(_), !b))
            if (u(w) !== null) ((b = !0), Ae(ge));
            else {
              var D = u(E);
              D !== null && M(Y, D.startTime - _);
            }
        }
        function ge(_, D) {
          ((b = !1), F && ((F = !1), Z(fe), (fe = -1)), (Q = !0));
          var R = $;
          try {
            for (J(D), I = u(w); I !== null && (!(I.expirationTime > D) || (_ && !Ct())); ) {
              var p = I.callback;
              if (typeof p == 'function') {
                ((I.callback = null), ($ = I.priorityLevel));
                var x = p(I.expirationTime <= D);
                ((D = m.unstable_now()),
                  typeof x == 'function' ? (I.callback = x) : I === u(w) && g(w),
                  J(D));
              } else g(w);
              I = u(w);
            }
            if (I !== null) var X = !0;
            else {
              var te = u(E);
              (te !== null && M(Y, te.startTime - D), (X = !1));
            }
            return X;
          } finally {
            ((I = null), ($ = R), (Q = !1));
          }
        }
        var ie = !1,
          ke = null,
          fe = -1,
          vt = 5,
          Le = -1;
        function Ct() {
          return !(m.unstable_now() - Le < vt);
        }
        function Fe() {
          if (ke !== null) {
            var _ = m.unstable_now();
            Le = _;
            var D = !0;
            try {
              D = ke(!0, _);
            } finally {
              D ? Be() : ((ie = !1), (ke = null));
            }
          } else ie = !1;
        }
        var Be;
        if (typeof ae == 'function')
          Be = function () {
            ae(Fe);
          };
        else if (typeof MessageChannel < 'u') {
          var Ye = new MessageChannel(),
            rt = Ye.port2;
          ((Ye.port1.onmessage = Fe),
            (Be = function () {
              rt.postMessage(null);
            }));
        } else
          Be = function () {
            G(Fe, 0);
          };
        function Ae(_) {
          ((ke = _), ie || ((ie = !0), Be()));
        }
        function M(_, D) {
          fe = G(function () {
            _(m.unstable_now());
          }, D);
        }
        ((m.unstable_IdlePriority = 5),
          (m.unstable_ImmediatePriority = 1),
          (m.unstable_LowPriority = 4),
          (m.unstable_NormalPriority = 3),
          (m.unstable_Profiling = null),
          (m.unstable_UserBlockingPriority = 2),
          (m.unstable_cancelCallback = function (_) {
            _.callback = null;
          }),
          (m.unstable_continueExecution = function () {
            b || Q || ((b = !0), Ae(ge));
          }),
          (m.unstable_forceFrameRate = function (_) {
            0 > _ || 125 < _
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (vt = 0 < _ ? Math.floor(1e3 / _) : 5);
          }),
          (m.unstable_getCurrentPriorityLevel = function () {
            return $;
          }),
          (m.unstable_getFirstCallbackNode = function () {
            return u(w);
          }),
          (m.unstable_next = function (_) {
            switch ($) {
              case 1:
              case 2:
              case 3:
                var D = 3;
                break;
              default:
                D = $;
            }
            var R = $;
            $ = D;
            try {
              return _();
            } finally {
              $ = R;
            }
          }),
          (m.unstable_pauseExecution = function () {}),
          (m.unstable_requestPaint = function () {}),
          (m.unstable_runWithPriority = function (_, D) {
            switch (_) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                _ = 3;
            }
            var R = $;
            $ = _;
            try {
              return D();
            } finally {
              $ = R;
            }
          }),
          (m.unstable_scheduleCallback = function (_, D, R) {
            var p = m.unstable_now();
            switch (
              (typeof R == 'object' && R !== null
                ? ((R = R.delay), (R = typeof R == 'number' && 0 < R ? p + R : p))
                : (R = p),
              _)
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
              (x = R + x),
              (_ = {
                id: O++,
                callback: D,
                priorityLevel: _,
                startTime: R,
                expirationTime: x,
                sortIndex: -1,
              }),
              R > p
                ? ((_.sortIndex = R),
                  f(E, _),
                  u(w) === null && _ === u(E) && (F ? (Z(fe), (fe = -1)) : (F = !0), M(Y, R - p)))
                : ((_.sortIndex = x), f(w, _), b || Q || ((b = !0), Ae(ge))),
              _
            );
          }),
          (m.unstable_shouldYield = Ct),
          (m.unstable_wrapCallback = function (_) {
            var D = $;
            return function () {
              var R = $;
              $ = D;
              try {
                return _.apply(this, arguments);
              } finally {
                $ = R;
              }
            };
          }));
      })(Xi)),
    Xi
  );
}
var rc;
function Sf() {
  return (rc || ((rc = 1), (Yi.exports = wf())), Yi.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lc;
function xf() {
  if (lc) return tt;
  lc = 1;
  var m = bi(),
    f = Sf();
  function u(e) {
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
    S = {};
  function j(e, t) {
    (L(e, t), L(e + 'Capture', t));
  }
  function L(e, t) {
    for (S[e] = t, e = 0; e < t.length; e++) g.add(t[e]);
  }
  var P = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    w = Object.prototype.hasOwnProperty,
    E =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    O = {},
    I = {};
  function $(e) {
    return w.call(I, e) ? !0 : w.call(O, e) ? !1 : E.test(e) ? (I[e] = !0) : ((O[e] = !0), !1);
  }
  function Q(e, t, n, r) {
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
    if (t === null || typeof t > 'u' || Q(e, t, n, r)) return !0;
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
  function F(e, t, n, r, l, o, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i));
  }
  var G = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      G[e] = new F(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      G[t] = new F(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      G[e] = new F(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        G[e] = new F(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        G[e] = new F(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      G[e] = new F(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      G[e] = new F(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      G[e] = new F(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      G[e] = new F(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var Z = /[\-:]([a-z])/g;
  function ae(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(Z, ae);
      G[t] = new F(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(Z, ae);
        G[t] = new F(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(Z, ae);
      G[t] = new F(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      G[e] = new F(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (G.xlinkHref = new F('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      G[e] = new F(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function J(e, t, n, r) {
    var l = G.hasOwnProperty(t) ? G[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (b(t, n, l, r) && (n = null),
      r || l === null
        ? $(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
  var Y = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ge = Symbol.for('react.element'),
    ie = Symbol.for('react.portal'),
    ke = Symbol.for('react.fragment'),
    fe = Symbol.for('react.strict_mode'),
    vt = Symbol.for('react.profiler'),
    Le = Symbol.for('react.provider'),
    Ct = Symbol.for('react.context'),
    Fe = Symbol.for('react.forward_ref'),
    Be = Symbol.for('react.suspense'),
    Ye = Symbol.for('react.suspense_list'),
    rt = Symbol.for('react.memo'),
    Ae = Symbol.for('react.lazy'),
    M = Symbol.for('react.offscreen'),
    _ = Symbol.iterator;
  function D(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (_ && e[_]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var R = Object.assign,
    p;
  function x(e) {
    if (p === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        p = (t && t[1]) || '';
      }
    return (
      `
` +
      p +
      e
    );
  }
  var X = !1;
  function te(e, t) {
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
            o = r.stack.split(`
`),
            i = l.length - 1,
            s = o.length - 1;
          1 <= i && 0 <= s && l[i] !== o[s];
        )
          s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (l[i] !== o[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || l[i] !== o[s])) {
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
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      ((X = !1), (Error.prepareStackTrace = n));
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
        return ((e = te(e.type, !1)), e);
      case 11:
        return ((e = te(e.type.render, !1)), e);
      case 1:
        return ((e = te(e.type, !0)), e);
      default:
        return '';
    }
  }
  function le(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case ke:
        return 'Fragment';
      case ie:
        return 'Portal';
      case vt:
        return 'Profiler';
      case fe:
        return 'StrictMode';
      case Be:
        return 'Suspense';
      case Ye:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Ct:
          return (e.displayName || 'Context') + '.Consumer';
        case Le:
          return (e._context.displayName || 'Context') + '.Provider';
        case Fe:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case rt:
          return ((t = e.displayName || null), t !== null ? t : le(e.type) || 'Memo');
        case Ae:
          ((t = e._payload), (e = e._init));
          try {
            return le(e(t));
          } catch {}
      }
    return null;
  }
  function ce(e) {
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
        return t === fe ? 'StrictMode' : 'Mode';
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
  function se(e) {
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
  function he(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function lt(e) {
    var t = he(e) ? 'checked' : 'value',
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
    e._valueTracker || (e._valueTracker = lt(e));
  }
  function ls(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = he(e) ? (e.checked ? 'true' : 'false') : e.value),
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
  function Jl(e, t) {
    var n = t.checked;
    return R({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function os(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = se(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      }));
  }
  function is(e, t) {
    ((t = t.checked), t != null && J(e, 'checked', t, !1));
  }
  function bl(e, t) {
    is(e, t);
    var n = se(t.value),
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
      : t.hasOwnProperty('defaultValue') && eo(e, t.type, se(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function ss(e, t, n) {
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
    (t !== 'number' || Dr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var Gn = Array.isArray;
  function Sn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + se(n), t = null, l = 0; l < e.length; l++) {
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
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return R({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function us(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(u(92));
        if (Gn(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: se(n) };
  }
  function as(e, t) {
    var n = se(t.value),
      r = se(t.defaultValue);
    (n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r));
  }
  function cs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function ds(e) {
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
      ? ds(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var Fr,
    fs = (function (e) {
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
  function qn(e, t) {
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
    wc = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Kn).forEach(function (e) {
    wc.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Kn[t] = Kn[e]));
    });
  });
  function ps(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (Kn.hasOwnProperty(e) && Kn[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function ms(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = ps(n, t[n], r);
        (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Sc = R(
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
      if (Sc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(u(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(u(62));
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
  var so = null,
    xn = null,
    kn = null;
  function hs(e) {
    if ((e = vr(e))) {
      if (typeof so != 'function') throw Error(u(280));
      var t = e.stateNode;
      t && ((t = il(t)), so(e.stateNode, e.type, t));
    }
  }
  function vs(e) {
    xn ? (kn ? kn.push(e) : (kn = [e])) : (xn = e);
  }
  function ys() {
    if (xn) {
      var e = xn,
        t = kn;
      if (((kn = xn = null), hs(e), t)) for (e = 0; e < t.length; e++) hs(t[e]);
    }
  }
  function gs(e, t) {
    return e(t);
  }
  function _s() {}
  var uo = !1;
  function ws(e, t, n) {
    if (uo) return e(t, n);
    uo = !0;
    try {
      return gs(e, t, n);
    } finally {
      ((uo = !1), (xn !== null || kn !== null) && (_s(), ys()));
    }
  }
  function Yn(e, t) {
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
    if (n && typeof n != 'function') throw Error(u(231, t, typeof n));
    return n;
  }
  var ao = !1;
  if (P)
    try {
      var Xn = {};
      (Object.defineProperty(Xn, 'passive', {
        get: function () {
          ao = !0;
        },
      }),
        window.addEventListener('test', Xn, Xn),
        window.removeEventListener('test', Xn, Xn));
    } catch {
      ao = !1;
    }
  function xc(e, t, n, r, l, o, i, s, a) {
    var y = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, y);
    } catch (C) {
      this.onError(C);
    }
  }
  var Zn = !1,
    Br = null,
    Ar = !1,
    co = null,
    kc = {
      onError: function (e) {
        ((Zn = !0), (Br = e));
      },
    };
  function Cc(e, t, n, r, l, o, i, s, a) {
    ((Zn = !1), (Br = null), xc.apply(kc, arguments));
  }
  function Ec(e, t, n, r, l, o, i, s, a) {
    if ((Cc.apply(this, arguments), Zn)) {
      if (Zn) {
        var y = Br;
        ((Zn = !1), (Br = null));
      } else throw Error(u(198));
      Ar || ((Ar = !0), (co = y));
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
  function Ss(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function xs(e) {
    if (sn(e) !== e) throw Error(u(188));
  }
  function Nc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = sn(e)), t === null)) throw Error(u(188));
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
          if (o === n) return (xs(l), e);
          if (o === r) return (xs(l), t);
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) ((n = l), (r = o));
      else {
        for (var i = !1, s = l.child; s; ) {
          if (s === n) {
            ((i = !0), (n = l), (r = o));
            break;
          }
          if (s === r) {
            ((i = !0), (r = l), (n = o));
            break;
          }
          s = s.sibling;
        }
        if (!i) {
          for (s = o.child; s; ) {
            if (s === n) {
              ((i = !0), (n = o), (r = l));
              break;
            }
            if (s === r) {
              ((i = !0), (r = o), (n = l));
              break;
            }
            s = s.sibling;
          }
          if (!i) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function ks(e) {
    return ((e = Nc(e)), e !== null ? Cs(e) : null);
  }
  function Cs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Cs(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Es = f.unstable_scheduleCallback,
    Ns = f.unstable_cancelCallback,
    jc = f.unstable_shouldYield,
    Pc = f.unstable_requestPaint,
    Ce = f.unstable_now,
    Tc = f.unstable_getCurrentPriorityLevel,
    fo = f.unstable_ImmediatePriority,
    js = f.unstable_UserBlockingPriority,
    Ur = f.unstable_NormalPriority,
    Lc = f.unstable_LowPriority,
    Ps = f.unstable_IdlePriority,
    $r = null,
    Et = null;
  function Oc(e) {
    if (Et && typeof Et.onCommitFiberRoot == 'function')
      try {
        Et.onCommitFiberRoot($r, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var yt = Math.clz32 ? Math.clz32 : zc,
    Rc = Math.log,
    Ic = Math.LN2;
  function zc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Rc(e) / Ic) | 0)) | 0);
  }
  var Vr = 64,
    Qr = 4194304;
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
  function Hr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var s = i & ~l;
      s !== 0 ? (r = Jn(s)) : ((o &= i), o !== 0 && (r = Jn(o)));
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
        ((n = 31 - yt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function Mc(e, t) {
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
  function Dc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes;
      0 < o;
    ) {
      var i = 31 - yt(o),
        s = 1 << i,
        a = l[i];
      (a === -1
        ? ((s & n) === 0 || (s & r) !== 0) && (l[i] = Mc(s, t))
        : a <= t && (e.expiredLanes |= s),
        (o &= ~s));
    }
  }
  function po(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Ts() {
    var e = Vr;
    return ((Vr <<= 1), (Vr & 4194240) === 0 && (Vr = 64), e);
  }
  function mo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function bn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - yt(t)),
      (e[t] = n));
  }
  function Fc(e, t) {
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
  function ho(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - yt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var ue = 0;
  function Ls(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Os,
    vo,
    Rs,
    Is,
    zs,
    yo = !1,
    Wr = [],
    Ut = null,
    $t = null,
    Vt = null,
    er = new Map(),
    tr = new Map(),
    Qt = [],
    Bc =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function Ms(e, t) {
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
        Vt = null;
        break;
      case 'pointerover':
      case 'pointerout':
        er.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        tr.delete(t.pointerId);
    }
  }
  function nr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = vr(t)), t !== null && vo(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Ac(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return ((Ut = nr(Ut, e, t, n, r, l)), !0);
      case 'dragenter':
        return (($t = nr($t, e, t, n, r, l)), !0);
      case 'mouseover':
        return ((Vt = nr(Vt, e, t, n, r, l)), !0);
      case 'pointerover':
        var o = l.pointerId;
        return (er.set(o, nr(er.get(o) || null, e, t, n, r, l)), !0);
      case 'gotpointercapture':
        return ((o = l.pointerId), tr.set(o, nr(tr.get(o) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function Ds(e) {
    var t = un(e.target);
    if (t !== null) {
      var n = sn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ss(n)), t !== null)) {
            ((e.blockedOn = t),
              zs(e.priority, function () {
                Rs(n);
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
        ((oo = r), n.target.dispatchEvent(r), (oo = null));
      } else return ((t = vr(n)), t !== null && vo(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Fs(e, t, n) {
    Gr(e) && n.delete(t);
  }
  function Uc() {
    ((yo = !1),
      Ut !== null && Gr(Ut) && (Ut = null),
      $t !== null && Gr($t) && ($t = null),
      Vt !== null && Gr(Vt) && (Vt = null),
      er.forEach(Fs),
      tr.forEach(Fs));
  }
  function rr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      yo || ((yo = !0), f.unstable_scheduleCallback(f.unstable_NormalPriority, Uc)));
  }
  function lr(e) {
    function t(l) {
      return rr(l, e);
    }
    if (0 < Wr.length) {
      rr(Wr[0], e);
      for (var n = 1; n < Wr.length; n++) {
        var r = Wr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Ut !== null && rr(Ut, e),
        $t !== null && rr($t, e),
        Vt !== null && rr(Vt, e),
        er.forEach(t),
        tr.forEach(t),
        n = 0;
      n < Qt.length;
      n++
    )
      ((r = Qt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Qt.length && ((n = Qt[0]), n.blockedOn === null); )
      (Ds(n), n.blockedOn === null && Qt.shift());
  }
  var Cn = Y.ReactCurrentBatchConfig,
    qr = !0;
  function $c(e, t, n, r) {
    var l = ue,
      o = Cn.transition;
    Cn.transition = null;
    try {
      ((ue = 1), go(e, t, n, r));
    } finally {
      ((ue = l), (Cn.transition = o));
    }
  }
  function Vc(e, t, n, r) {
    var l = ue,
      o = Cn.transition;
    Cn.transition = null;
    try {
      ((ue = 4), go(e, t, n, r));
    } finally {
      ((ue = l), (Cn.transition = o));
    }
  }
  function go(e, t, n, r) {
    if (qr) {
      var l = _o(e, t, n, r);
      if (l === null) (Do(e, t, r, Kr, n), Ms(e, r));
      else if (Ac(l, e, t, n, r)) r.stopPropagation();
      else if ((Ms(e, r), t & 4 && -1 < Bc.indexOf(e))) {
        for (; l !== null; ) {
          var o = vr(l);
          if (
            (o !== null && Os(o), (o = _o(e, t, n, r)), o === null && Do(e, t, r, Kr, n), o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Do(e, t, r, null, n);
    }
  }
  var Kr = null;
  function _o(e, t, n, r) {
    if (((Kr = null), (e = io(r)), (e = un(e)), e !== null))
      if (((t = sn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ss(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Kr = e), null);
  }
  function Bs(e) {
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
        switch (Tc()) {
          case fo:
            return 1;
          case js:
            return 4;
          case Ur:
          case Lc:
            return 16;
          case Ps:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ht = null,
    wo = null,
    Yr = null;
  function As() {
    if (Yr) return Yr;
    var e,
      t = wo,
      n = t.length,
      r,
      l = 'value' in Ht ? Ht.value : Ht.textContent,
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
  function Us() {
    return !1;
  }
  function ot(e) {
    function t(n, r, l, o, i) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = i),
        (this.currentTarget = null));
      for (var s in e) e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Zr
          : Us),
        (this.isPropagationStopped = Us),
        this
      );
    }
    return (
      R(t.prototype, {
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
  var En = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    So = ot(En),
    or = R({}, En, { view: 0, detail: 0 }),
    Qc = ot(or),
    xo,
    ko,
    ir,
    Jr = R({}, or, {
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
          : (e !== ir &&
              (ir && e.type === 'mousemove'
                ? ((xo = e.screenX - ir.screenX), (ko = e.screenY - ir.screenY))
                : (ko = xo = 0),
              (ir = e)),
            xo);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : ko;
      },
    }),
    $s = ot(Jr),
    Hc = R({}, Jr, { dataTransfer: 0 }),
    Wc = ot(Hc),
    Gc = R({}, or, { relatedTarget: 0 }),
    Co = ot(Gc),
    qc = R({}, En, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Kc = ot(qc),
    Yc = R({}, En, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Xc = ot(Yc),
    Zc = R({}, En, { data: 0 }),
    Vs = ot(Zc),
    Jc = {
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
    bc = {
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
    ed = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function td(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ed[e]) ? !!t[e] : !1;
  }
  function Eo() {
    return td;
  }
  var nd = R({}, or, {
      key: function (e) {
        if (e.key) {
          var t = Jc[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Xr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? bc[e.keyCode] || 'Unidentified'
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
    rd = ot(nd),
    ld = R({}, Jr, {
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
    Qs = ot(ld),
    od = R({}, or, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Eo,
    }),
    id = ot(od),
    sd = R({}, En, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ud = ot(sd),
    ad = R({}, Jr, {
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
    cd = ot(ad),
    dd = [9, 13, 27, 32],
    No = P && 'CompositionEvent' in window,
    sr = null;
  P && 'documentMode' in document && (sr = document.documentMode);
  var fd = P && 'TextEvent' in window && !sr,
    Hs = P && (!No || (sr && 8 < sr && 11 >= sr)),
    Ws = ' ',
    Gs = !1;
  function qs(e, t) {
    switch (e) {
      case 'keyup':
        return dd.indexOf(t.keyCode) !== -1;
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
  function Ks(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var Nn = !1;
  function pd(e, t) {
    switch (e) {
      case 'compositionend':
        return Ks(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Gs = !0), Ws);
      case 'textInput':
        return ((e = t.data), e === Ws && Gs ? null : e);
      default:
        return null;
    }
  }
  function md(e, t) {
    if (Nn)
      return e === 'compositionend' || (!No && qs(e, t))
        ? ((e = As()), (Yr = wo = Ht = null), (Nn = !1), e)
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
        return Hs && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var hd = {
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
  function Ys(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!hd[e.type] : t === 'textarea';
  }
  function Xs(e, t, n, r) {
    (vs(r),
      (t = rl(t, 'onChange')),
      0 < t.length &&
        ((n = new So('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
  }
  var ur = null,
    ar = null;
  function vd(e) {
    mu(e, 0);
  }
  function br(e) {
    var t = On(e);
    if (ls(t)) return e;
  }
  function yd(e, t) {
    if (e === 'change') return t;
  }
  var Zs = !1;
  if (P) {
    var jo;
    if (P) {
      var Po = 'oninput' in document;
      if (!Po) {
        var Js = document.createElement('div');
        (Js.setAttribute('oninput', 'return;'), (Po = typeof Js.oninput == 'function'));
      }
      jo = Po;
    } else jo = !1;
    Zs = jo && (!document.documentMode || 9 < document.documentMode);
  }
  function bs() {
    ur && (ur.detachEvent('onpropertychange', eu), (ar = ur = null));
  }
  function eu(e) {
    if (e.propertyName === 'value' && br(ar)) {
      var t = [];
      (Xs(t, ar, e, io(e)), ws(vd, t));
    }
  }
  function gd(e, t, n) {
    e === 'focusin'
      ? (bs(), (ur = t), (ar = n), ur.attachEvent('onpropertychange', eu))
      : e === 'focusout' && bs();
  }
  function _d(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return br(ar);
  }
  function wd(e, t) {
    if (e === 'click') return br(t);
  }
  function Sd(e, t) {
    if (e === 'input' || e === 'change') return br(t);
  }
  function xd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var gt = typeof Object.is == 'function' ? Object.is : xd;
  function cr(e, t) {
    if (gt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!w.call(t, l) || !gt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function tu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function nu(e, t) {
    var n = tu(e);
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
      n = tu(n);
    }
  }
  function ru(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? ru(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function lu() {
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
  function kd(e) {
    var t = lu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ru(n.ownerDocument.documentElement, n)) {
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
            (l = nu(n, o)));
          var i = nu(n, r);
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
  var Cd = P && 'documentMode' in document && 11 >= document.documentMode,
    jn = null,
    Lo = null,
    dr = null,
    Oo = !1;
  function ou(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Oo ||
      jn == null ||
      jn !== Dr(r) ||
      ((r = jn),
      'selectionStart' in r && To(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (dr && cr(dr, r)) ||
        ((dr = r),
        (r = rl(Lo, 'onSelect')),
        0 < r.length &&
          ((t = new So('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = jn))));
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
  var Pn = {
      animationend: el('Animation', 'AnimationEnd'),
      animationiteration: el('Animation', 'AnimationIteration'),
      animationstart: el('Animation', 'AnimationStart'),
      transitionend: el('Transition', 'TransitionEnd'),
    },
    Ro = {},
    iu = {};
  P &&
    ((iu = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Pn.animationend.animation,
      delete Pn.animationiteration.animation,
      delete Pn.animationstart.animation),
    'TransitionEvent' in window || delete Pn.transitionend.transition);
  function tl(e) {
    if (Ro[e]) return Ro[e];
    if (!Pn[e]) return e;
    var t = Pn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in iu) return (Ro[e] = t[n]);
    return e;
  }
  var su = tl('animationend'),
    uu = tl('animationiteration'),
    au = tl('animationstart'),
    cu = tl('transitionend'),
    du = new Map(),
    fu =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Wt(e, t) {
    (du.set(e, t), j(t, [e]));
  }
  for (var Io = 0; Io < fu.length; Io++) {
    var zo = fu[Io],
      Ed = zo.toLowerCase(),
      Nd = zo[0].toUpperCase() + zo.slice(1);
    Wt(Ed, 'on' + Nd);
  }
  (Wt(su, 'onAnimationEnd'),
    Wt(uu, 'onAnimationIteration'),
    Wt(au, 'onAnimationStart'),
    Wt('dblclick', 'onDoubleClick'),
    Wt('focusin', 'onFocus'),
    Wt('focusout', 'onBlur'),
    Wt(cu, 'onTransitionEnd'),
    L('onMouseEnter', ['mouseout', 'mouseover']),
    L('onMouseLeave', ['mouseout', 'mouseover']),
    L('onPointerEnter', ['pointerout', 'pointerover']),
    L('onPointerLeave', ['pointerout', 'pointerover']),
    j('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    j(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    j('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    j('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    j(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    j(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var fr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    jd = new Set('cancel close invalid load scroll toggle'.split(' ').concat(fr));
  function pu(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n), Ec(r, t, void 0, e), (e.currentTarget = null));
  }
  function mu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var i = r.length - 1; 0 <= i; i--) {
            var s = r[i],
              a = s.instance,
              y = s.currentTarget;
            if (((s = s.listener), a !== o && l.isPropagationStopped())) break e;
            (pu(l, s, y), (o = a));
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((s = r[i]),
              (a = s.instance),
              (y = s.currentTarget),
              (s = s.listener),
              a !== o && l.isPropagationStopped())
            )
              break e;
            (pu(l, s, y), (o = a));
          }
      }
    }
    if (Ar) throw ((e = co), (Ar = !1), (co = null), e);
  }
  function pe(e, t) {
    var n = t[Vo];
    n === void 0 && (n = t[Vo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (hu(t, e, 2, !1), n.add(r));
  }
  function Mo(e, t, n) {
    var r = 0;
    (t && (r |= 4), hu(n, e, r, t));
  }
  var nl = '_reactListening' + Math.random().toString(36).slice(2);
  function pr(e) {
    if (!e[nl]) {
      ((e[nl] = !0),
        g.forEach(function (n) {
          n !== 'selectionchange' && (jd.has(n) || Mo(n, !1, e), Mo(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[nl] || ((t[nl] = !0), Mo('selectionchange', !1, t));
    }
  }
  function hu(e, t, n, r) {
    switch (Bs(t)) {
      case 1:
        var l = $c;
        break;
      case 4:
        l = Vc;
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
  function Do(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var s = r.stateNode.containerInfo;
          if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
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
          for (; s !== null; ) {
            if (((i = un(s)), i === null)) return;
            if (((a = i.tag), a === 5 || a === 6)) {
              r = o = i;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
    ws(function () {
      var y = o,
        C = io(n),
        N = [];
      e: {
        var k = du.get(e);
        if (k !== void 0) {
          var z = So,
            A = e;
          switch (e) {
            case 'keypress':
              if (Xr(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              z = rd;
              break;
            case 'focusin':
              ((A = 'focus'), (z = Co));
              break;
            case 'focusout':
              ((A = 'blur'), (z = Co));
              break;
            case 'beforeblur':
            case 'afterblur':
              z = Co;
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
              z = $s;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              z = Wc;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              z = id;
              break;
            case su:
            case uu:
            case au:
              z = Kc;
              break;
            case cu:
              z = ud;
              break;
            case 'scroll':
              z = Qc;
              break;
            case 'wheel':
              z = cd;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              z = Xc;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              z = Qs;
          }
          var U = (t & 4) !== 0,
            Ee = !U && e === 'scroll',
            h = U ? (k !== null ? k + 'Capture' : null) : k;
          U = [];
          for (var c = y, v; c !== null; ) {
            v = c;
            var T = v.stateNode;
            if (
              (v.tag === 5 &&
                T !== null &&
                ((v = T), h !== null && ((T = Yn(c, h)), T != null && U.push(mr(c, T, v)))),
              Ee)
            )
              break;
            c = c.return;
          }
          0 < U.length && ((k = new z(k, A, null, n, C)), N.push({ event: k, listeners: U }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((k = e === 'mouseover' || e === 'pointerover'),
            (z = e === 'mouseout' || e === 'pointerout'),
            k && n !== oo && (A = n.relatedTarget || n.fromElement) && (un(A) || A[Lt]))
          )
            break e;
          if (
            (z || k) &&
            ((k =
              C.window === C
                ? C
                : (k = C.ownerDocument)
                  ? k.defaultView || k.parentWindow
                  : window),
            z
              ? ((A = n.relatedTarget || n.toElement),
                (z = y),
                (A = A ? un(A) : null),
                A !== null &&
                  ((Ee = sn(A)), A !== Ee || (A.tag !== 5 && A.tag !== 6)) &&
                  (A = null))
              : ((z = null), (A = y)),
            z !== A)
          ) {
            if (
              ((U = $s),
              (T = 'onMouseLeave'),
              (h = 'onMouseEnter'),
              (c = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((U = Qs), (T = 'onPointerLeave'), (h = 'onPointerEnter'), (c = 'pointer')),
              (Ee = z == null ? k : On(z)),
              (v = A == null ? k : On(A)),
              (k = new U(T, c + 'leave', z, n, C)),
              (k.target = Ee),
              (k.relatedTarget = v),
              (T = null),
              un(C) === y &&
                ((U = new U(h, c + 'enter', A, n, C)),
                (U.target = v),
                (U.relatedTarget = Ee),
                (T = U)),
              (Ee = T),
              z && A)
            )
              t: {
                for (U = z, h = A, c = 0, v = U; v; v = Tn(v)) c++;
                for (v = 0, T = h; T; T = Tn(T)) v++;
                for (; 0 < c - v; ) ((U = Tn(U)), c--);
                for (; 0 < v - c; ) ((h = Tn(h)), v--);
                for (; c--; ) {
                  if (U === h || (h !== null && U === h.alternate)) break t;
                  ((U = Tn(U)), (h = Tn(h)));
                }
                U = null;
              }
            else U = null;
            (z !== null && vu(N, k, z, U, !1), A !== null && Ee !== null && vu(N, Ee, A, U, !0));
          }
        }
        e: {
          if (
            ((k = y ? On(y) : window),
            (z = k.nodeName && k.nodeName.toLowerCase()),
            z === 'select' || (z === 'input' && k.type === 'file'))
          )
            var V = yd;
          else if (Ys(k))
            if (Zs) V = Sd;
            else {
              V = _d;
              var H = gd;
            }
          else
            (z = k.nodeName) &&
              z.toLowerCase() === 'input' &&
              (k.type === 'checkbox' || k.type === 'radio') &&
              (V = wd);
          if (V && (V = V(e, y))) {
            Xs(N, V, n, C);
            break e;
          }
          (H && H(e, k, y),
            e === 'focusout' &&
              (H = k._wrapperState) &&
              H.controlled &&
              k.type === 'number' &&
              eo(k, 'number', k.value));
        }
        switch (((H = y ? On(y) : window), e)) {
          case 'focusin':
            (Ys(H) || H.contentEditable === 'true') && ((jn = H), (Lo = y), (dr = null));
            break;
          case 'focusout':
            dr = Lo = jn = null;
            break;
          case 'mousedown':
            Oo = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Oo = !1), ou(N, n, C));
            break;
          case 'selectionchange':
            if (Cd) break;
          case 'keydown':
          case 'keyup':
            ou(N, n, C);
        }
        var W;
        if (No)
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
          Nn
            ? qs(e, n) && (q = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (q = 'onCompositionStart');
        (q &&
          (Hs &&
            n.locale !== 'ko' &&
            (Nn || q !== 'onCompositionStart'
              ? q === 'onCompositionEnd' && Nn && (W = As())
              : ((Ht = C), (wo = 'value' in Ht ? Ht.value : Ht.textContent), (Nn = !0))),
          (H = rl(y, q)),
          0 < H.length &&
            ((q = new Vs(q, e, null, n, C)),
            N.push({ event: q, listeners: H }),
            W ? (q.data = W) : ((W = Ks(n)), W !== null && (q.data = W)))),
          (W = fd ? pd(e, n) : md(e, n)) &&
            ((y = rl(y, 'onBeforeInput')),
            0 < y.length &&
              ((C = new Vs('onBeforeInput', 'beforeinput', null, n, C)),
              N.push({ event: C, listeners: y }),
              (C.data = W))));
      }
      mu(N, t);
    });
  }
  function mr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function rl(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      (l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Yn(e, n)),
        o != null && r.unshift(mr(e, o, l)),
        (o = Yn(e, t)),
        o != null && r.push(mr(e, o, l))),
        (e = e.return));
    }
    return r;
  }
  function Tn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function vu(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var s = n,
        a = s.alternate,
        y = s.stateNode;
      if (a !== null && a === r) break;
      (s.tag === 5 &&
        y !== null &&
        ((s = y),
        l
          ? ((a = Yn(n, o)), a != null && i.unshift(mr(n, a, s)))
          : l || ((a = Yn(n, o)), a != null && i.push(mr(n, a, s)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Pd = /\r\n?/g,
    Td = /\u0000|\uFFFD/g;
  function yu(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Pd,
        `
`
      )
      .replace(Td, '');
  }
  function ll(e, t, n) {
    if (((t = yu(t)), yu(e) !== t && n)) throw Error(u(425));
  }
  function ol() {}
  var Fo = null,
    Bo = null;
  function Ao(e, t) {
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
    Ld = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    gu = typeof Promise == 'function' ? Promise : void 0,
    Od =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof gu < 'u'
          ? function (e) {
              return gu.resolve(null).then(e).catch(Rd);
            }
          : Uo;
  function Rd(e) {
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
            (e.removeChild(l), lr(t));
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = l;
    } while (n);
    lr(t);
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
  function _u(e) {
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
  var Ln = Math.random().toString(36).slice(2),
    Nt = '__reactFiber$' + Ln,
    hr = '__reactProps$' + Ln,
    Lt = '__reactContainer$' + Ln,
    Vo = '__reactEvents$' + Ln,
    Id = '__reactListeners$' + Ln,
    zd = '__reactHandles$' + Ln;
  function un(e) {
    var t = e[Nt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Lt] || n[Nt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = _u(e); e !== null; ) {
            if ((n = e[Nt])) return n;
            e = _u(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function vr(e) {
    return (
      (e = e[Nt] || e[Lt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function On(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function il(e) {
    return e[hr] || null;
  }
  var Qo = [],
    Rn = -1;
  function qt(e) {
    return { current: e };
  }
  function me(e) {
    0 > Rn || ((e.current = Qo[Rn]), (Qo[Rn] = null), Rn--);
  }
  function de(e, t) {
    (Rn++, (Qo[Rn] = e.current), (e.current = t));
  }
  var Kt = {},
    Ue = qt(Kt),
    Xe = qt(!1),
    an = Kt;
  function In(e, t) {
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
    (me(Xe), me(Ue));
  }
  function wu(e, t, n) {
    if (Ue.current !== Kt) throw Error(u(168));
    (de(Ue, t), de(Xe, n));
  }
  function Su(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(u(108, ce(e) || 'Unknown', l));
    return R({}, n, r);
  }
  function ul(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Kt),
      (an = Ue.current),
      de(Ue, e),
      de(Xe, Xe.current),
      !0
    );
  }
  function xu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    (n
      ? ((e = Su(e, t, an)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        me(Xe),
        me(Ue),
        de(Ue, e))
      : me(Xe),
      de(Xe, n));
  }
  var Ot = null,
    al = !1,
    Ho = !1;
  function ku(e) {
    Ot === null ? (Ot = [e]) : Ot.push(e);
  }
  function Md(e) {
    ((al = !0), ku(e));
  }
  function Yt() {
    if (!Ho && Ot !== null) {
      Ho = !0;
      var e = 0,
        t = ue;
      try {
        var n = Ot;
        for (ue = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Ot = null), (al = !1));
      } catch (l) {
        throw (Ot !== null && (Ot = Ot.slice(e + 1)), Es(fo, Yt), l);
      } finally {
        ((ue = t), (Ho = !1));
      }
    }
    return null;
  }
  var zn = [],
    Mn = 0,
    cl = null,
    dl = 0,
    at = [],
    ct = 0,
    cn = null,
    Rt = 1,
    It = '';
  function dn(e, t) {
    ((zn[Mn++] = dl), (zn[Mn++] = cl), (cl = e), (dl = t));
  }
  function Cu(e, t, n) {
    ((at[ct++] = Rt), (at[ct++] = It), (at[ct++] = cn), (cn = e));
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
  function Wo(e) {
    e.return !== null && (dn(e, 1), Cu(e, 1, 0));
  }
  function Go(e) {
    for (; e === cl; ) ((cl = zn[--Mn]), (zn[Mn] = null), (dl = zn[--Mn]), (zn[Mn] = null));
    for (; e === cn; )
      ((cn = at[--ct]),
        (at[ct] = null),
        (It = at[--ct]),
        (at[ct] = null),
        (Rt = at[--ct]),
        (at[ct] = null));
  }
  var it = null,
    st = null,
    ve = !1,
    _t = null;
  function Eu(e, t) {
    var n = mt(5, null, null, 0);
    ((n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Nu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (it = e), (st = Gt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (it = e), (st = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = cn !== null ? { id: Rt, overflow: It } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = mt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (it = e),
              (st = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function qo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ko(e) {
    if (ve) {
      var t = st;
      if (t) {
        var n = t;
        if (!Nu(e, t)) {
          if (qo(e)) throw Error(u(418));
          t = Gt(n.nextSibling);
          var r = it;
          t && Nu(e, t) ? Eu(r, n) : ((e.flags = (e.flags & -4097) | 2), (ve = !1), (it = e));
        }
      } else {
        if (qo(e)) throw Error(u(418));
        ((e.flags = (e.flags & -4097) | 2), (ve = !1), (it = e));
      }
    }
  }
  function ju(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    it = e;
  }
  function fl(e) {
    if (e !== it) return !1;
    if (!ve) return (ju(e), (ve = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !Ao(e.type, e.memoizedProps))),
      t && (t = st))
    ) {
      if (qo(e)) throw (Pu(), Error(u(418)));
      for (; t; ) (Eu(e, t), (t = Gt(t.nextSibling)));
    }
    if ((ju(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                st = Gt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        st = null;
      }
    } else st = it ? Gt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Pu() {
    for (var e = st; e; ) e = Gt(e.nextSibling);
  }
  function Dn() {
    ((st = it = null), (ve = !1));
  }
  function Yo(e) {
    _t === null ? (_t = [e]) : _t.push(e);
  }
  var Dd = Y.ReactCurrentBatchConfig;
  function yr(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(u(147, e));
        var l = r,
          o = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === o
          ? t.ref
          : ((t = function (i) {
              var s = l.refs;
              i === null ? delete s[o] : (s[o] = i);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != 'string') throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function pl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        u(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      )
    );
  }
  function Tu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Lu(e) {
    function t(h, c) {
      if (e) {
        var v = h.deletions;
        v === null ? ((h.deletions = [c]), (h.flags |= 16)) : v.push(c);
      }
    }
    function n(h, c) {
      if (!e) return null;
      for (; c !== null; ) (t(h, c), (c = c.sibling));
      return null;
    }
    function r(h, c) {
      for (h = new Map(); c !== null; )
        (c.key !== null ? h.set(c.key, c) : h.set(c.index, c), (c = c.sibling));
      return h;
    }
    function l(h, c) {
      return ((h = rn(h, c)), (h.index = 0), (h.sibling = null), h);
    }
    function o(h, c, v) {
      return (
        (h.index = v),
        e
          ? ((v = h.alternate),
            v !== null ? ((v = v.index), v < c ? ((h.flags |= 2), c) : v) : ((h.flags |= 2), c))
          : ((h.flags |= 1048576), c)
      );
    }
    function i(h) {
      return (e && h.alternate === null && (h.flags |= 2), h);
    }
    function s(h, c, v, T) {
      return c === null || c.tag !== 6
        ? ((c = Ui(v, h.mode, T)), (c.return = h), c)
        : ((c = l(c, v)), (c.return = h), c);
    }
    function a(h, c, v, T) {
      var V = v.type;
      return V === ke
        ? C(h, c, v.props.children, T, v.key)
        : c !== null &&
            (c.elementType === V ||
              (typeof V == 'object' && V !== null && V.$$typeof === Ae && Tu(V) === c.type))
          ? ((T = l(c, v.props)), (T.ref = yr(h, c, v)), (T.return = h), T)
          : ((T = Fl(v.type, v.key, v.props, null, h.mode, T)),
            (T.ref = yr(h, c, v)),
            (T.return = h),
            T);
    }
    function y(h, c, v, T) {
      return c === null ||
        c.tag !== 4 ||
        c.stateNode.containerInfo !== v.containerInfo ||
        c.stateNode.implementation !== v.implementation
        ? ((c = $i(v, h.mode, T)), (c.return = h), c)
        : ((c = l(c, v.children || [])), (c.return = h), c);
    }
    function C(h, c, v, T, V) {
      return c === null || c.tag !== 7
        ? ((c = _n(v, h.mode, T, V)), (c.return = h), c)
        : ((c = l(c, v)), (c.return = h), c);
    }
    function N(h, c, v) {
      if ((typeof c == 'string' && c !== '') || typeof c == 'number')
        return ((c = Ui('' + c, h.mode, v)), (c.return = h), c);
      if (typeof c == 'object' && c !== null) {
        switch (c.$$typeof) {
          case ge:
            return (
              (v = Fl(c.type, c.key, c.props, null, h.mode, v)),
              (v.ref = yr(h, null, c)),
              (v.return = h),
              v
            );
          case ie:
            return ((c = $i(c, h.mode, v)), (c.return = h), c);
          case Ae:
            var T = c._init;
            return N(h, T(c._payload), v);
        }
        if (Gn(c) || D(c)) return ((c = _n(c, h.mode, v, null)), (c.return = h), c);
        pl(h, c);
      }
      return null;
    }
    function k(h, c, v, T) {
      var V = c !== null ? c.key : null;
      if ((typeof v == 'string' && v !== '') || typeof v == 'number')
        return V !== null ? null : s(h, c, '' + v, T);
      if (typeof v == 'object' && v !== null) {
        switch (v.$$typeof) {
          case ge:
            return v.key === V ? a(h, c, v, T) : null;
          case ie:
            return v.key === V ? y(h, c, v, T) : null;
          case Ae:
            return ((V = v._init), k(h, c, V(v._payload), T));
        }
        if (Gn(v) || D(v)) return V !== null ? null : C(h, c, v, T, null);
        pl(h, v);
      }
      return null;
    }
    function z(h, c, v, T, V) {
      if ((typeof T == 'string' && T !== '') || typeof T == 'number')
        return ((h = h.get(v) || null), s(c, h, '' + T, V));
      if (typeof T == 'object' && T !== null) {
        switch (T.$$typeof) {
          case ge:
            return ((h = h.get(T.key === null ? v : T.key) || null), a(c, h, T, V));
          case ie:
            return ((h = h.get(T.key === null ? v : T.key) || null), y(c, h, T, V));
          case Ae:
            var H = T._init;
            return z(h, c, v, H(T._payload), V);
        }
        if (Gn(T) || D(T)) return ((h = h.get(v) || null), C(c, h, T, V, null));
        pl(c, T);
      }
      return null;
    }
    function A(h, c, v, T) {
      for (var V = null, H = null, W = c, q = (c = 0), Ie = null; W !== null && q < v.length; q++) {
        W.index > q ? ((Ie = W), (W = null)) : (Ie = W.sibling);
        var oe = k(h, W, v[q], T);
        if (oe === null) {
          W === null && (W = Ie);
          break;
        }
        (e && W && oe.alternate === null && t(h, W),
          (c = o(oe, c, q)),
          H === null ? (V = oe) : (H.sibling = oe),
          (H = oe),
          (W = Ie));
      }
      if (q === v.length) return (n(h, W), ve && dn(h, q), V);
      if (W === null) {
        for (; q < v.length; q++)
          ((W = N(h, v[q], T)),
            W !== null && ((c = o(W, c, q)), H === null ? (V = W) : (H.sibling = W), (H = W)));
        return (ve && dn(h, q), V);
      }
      for (W = r(h, W); q < v.length; q++)
        ((Ie = z(W, h, q, v[q], T)),
          Ie !== null &&
            (e && Ie.alternate !== null && W.delete(Ie.key === null ? q : Ie.key),
            (c = o(Ie, c, q)),
            H === null ? (V = Ie) : (H.sibling = Ie),
            (H = Ie)));
      return (
        e &&
          W.forEach(function (ln) {
            return t(h, ln);
          }),
        ve && dn(h, q),
        V
      );
    }
    function U(h, c, v, T) {
      var V = D(v);
      if (typeof V != 'function') throw Error(u(150));
      if (((v = V.call(v)), v == null)) throw Error(u(151));
      for (
        var H = (V = null), W = c, q = (c = 0), Ie = null, oe = v.next();
        W !== null && !oe.done;
        q++, oe = v.next()
      ) {
        W.index > q ? ((Ie = W), (W = null)) : (Ie = W.sibling);
        var ln = k(h, W, oe.value, T);
        if (ln === null) {
          W === null && (W = Ie);
          break;
        }
        (e && W && ln.alternate === null && t(h, W),
          (c = o(ln, c, q)),
          H === null ? (V = ln) : (H.sibling = ln),
          (H = ln),
          (W = Ie));
      }
      if (oe.done) return (n(h, W), ve && dn(h, q), V);
      if (W === null) {
        for (; !oe.done; q++, oe = v.next())
          ((oe = N(h, oe.value, T)),
            oe !== null && ((c = o(oe, c, q)), H === null ? (V = oe) : (H.sibling = oe), (H = oe)));
        return (ve && dn(h, q), V);
      }
      for (W = r(h, W); !oe.done; q++, oe = v.next())
        ((oe = z(W, h, q, oe.value, T)),
          oe !== null &&
            (e && oe.alternate !== null && W.delete(oe.key === null ? q : oe.key),
            (c = o(oe, c, q)),
            H === null ? (V = oe) : (H.sibling = oe),
            (H = oe)));
      return (
        e &&
          W.forEach(function (vf) {
            return t(h, vf);
          }),
        ve && dn(h, q),
        V
      );
    }
    function Ee(h, c, v, T) {
      if (
        (typeof v == 'object' &&
          v !== null &&
          v.type === ke &&
          v.key === null &&
          (v = v.props.children),
        typeof v == 'object' && v !== null)
      ) {
        switch (v.$$typeof) {
          case ge:
            e: {
              for (var V = v.key, H = c; H !== null; ) {
                if (H.key === V) {
                  if (((V = v.type), V === ke)) {
                    if (H.tag === 7) {
                      (n(h, H.sibling), (c = l(H, v.props.children)), (c.return = h), (h = c));
                      break e;
                    }
                  } else if (
                    H.elementType === V ||
                    (typeof V == 'object' && V !== null && V.$$typeof === Ae && Tu(V) === H.type)
                  ) {
                    (n(h, H.sibling),
                      (c = l(H, v.props)),
                      (c.ref = yr(h, H, v)),
                      (c.return = h),
                      (h = c));
                    break e;
                  }
                  n(h, H);
                  break;
                } else t(h, H);
                H = H.sibling;
              }
              v.type === ke
                ? ((c = _n(v.props.children, h.mode, T, v.key)), (c.return = h), (h = c))
                : ((T = Fl(v.type, v.key, v.props, null, h.mode, T)),
                  (T.ref = yr(h, c, v)),
                  (T.return = h),
                  (h = T));
            }
            return i(h);
          case ie:
            e: {
              for (H = v.key; c !== null; ) {
                if (c.key === H)
                  if (
                    c.tag === 4 &&
                    c.stateNode.containerInfo === v.containerInfo &&
                    c.stateNode.implementation === v.implementation
                  ) {
                    (n(h, c.sibling), (c = l(c, v.children || [])), (c.return = h), (h = c));
                    break e;
                  } else {
                    n(h, c);
                    break;
                  }
                else t(h, c);
                c = c.sibling;
              }
              ((c = $i(v, h.mode, T)), (c.return = h), (h = c));
            }
            return i(h);
          case Ae:
            return ((H = v._init), Ee(h, c, H(v._payload), T));
        }
        if (Gn(v)) return A(h, c, v, T);
        if (D(v)) return U(h, c, v, T);
        pl(h, v);
      }
      return (typeof v == 'string' && v !== '') || typeof v == 'number'
        ? ((v = '' + v),
          c !== null && c.tag === 6
            ? (n(h, c.sibling), (c = l(c, v)), (c.return = h), (h = c))
            : (n(h, c), (c = Ui(v, h.mode, T)), (c.return = h), (h = c)),
          i(h))
        : n(h, c);
    }
    return Ee;
  }
  var Fn = Lu(!0),
    Ou = Lu(!1),
    ml = qt(null),
    hl = null,
    Bn = null,
    Xo = null;
  function Zo() {
    Xo = Bn = hl = null;
  }
  function Jo(e) {
    var t = ml.current;
    (me(ml), (e._currentValue = t));
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
    ((hl = e),
      (Xo = Bn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Je = !0), (e.firstContext = null)));
  }
  function dt(e) {
    var t = e._currentValue;
    if (Xo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Bn === null)) {
        if (hl === null) throw Error(u(308));
        ((Bn = e), (hl.dependencies = { lanes: 0, firstContext: e }));
      } else Bn = Bn.next = e;
    return t;
  }
  var fn = null;
  function ei(e) {
    fn === null ? (fn = [e]) : fn.push(e);
  }
  function Ru(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), ei(t)) : ((n.next = l.next), (l.next = n)),
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
  function ti(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Iu(e, t) {
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
    if (((r = r.shared), (ne & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        zt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), ei(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      zt(e, n)
    );
  }
  function vl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ho(e, n));
    }
  }
  function zu(e, t) {
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
      s = l.shared.pending;
    if (s !== null) {
      l.shared.pending = null;
      var a = s,
        y = a.next;
      ((a.next = null), i === null ? (o = y) : (i.next = y), (i = a));
      var C = e.alternate;
      C !== null &&
        ((C = C.updateQueue),
        (s = C.lastBaseUpdate),
        s !== i && (s === null ? (C.firstBaseUpdate = y) : (s.next = y), (C.lastBaseUpdate = a)));
    }
    if (o !== null) {
      var N = l.baseState;
      ((i = 0), (C = y = a = null), (s = o));
      do {
        var k = s.lane,
          z = s.eventTime;
        if ((r & k) === k) {
          C !== null &&
            (C = C.next =
              {
                eventTime: z,
                lane: 0,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null,
              });
          e: {
            var A = e,
              U = s;
            switch (((k = t), (z = n), U.tag)) {
              case 1:
                if (((A = U.payload), typeof A == 'function')) {
                  N = A.call(z, N, k);
                  break e;
                }
                N = A;
                break e;
              case 3:
                A.flags = (A.flags & -65537) | 128;
              case 0:
                if (
                  ((A = U.payload), (k = typeof A == 'function' ? A.call(z, N, k) : A), k == null)
                )
                  break e;
                N = R({}, N, k);
                break e;
              case 2:
                Xt = !0;
            }
          }
          s.callback !== null &&
            s.lane !== 0 &&
            ((e.flags |= 64), (k = l.effects), k === null ? (l.effects = [s]) : k.push(s));
        } else
          ((z = {
            eventTime: z,
            lane: k,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            C === null ? ((y = C = z), (a = N)) : (C = C.next = z),
            (i |= k));
        if (((s = s.next), s === null)) {
          if (((s = l.shared.pending), s === null)) break;
          ((k = s),
            (s = k.next),
            (k.next = null),
            (l.lastBaseUpdate = k),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (C === null && (a = N),
        (l.baseState = a),
        (l.firstBaseUpdate = y),
        (l.lastBaseUpdate = C),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((i |= l.lane), (l = l.next));
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      ((hn |= i), (e.lanes = i), (e.memoizedState = N));
    }
  }
  function Mu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != 'function')) throw Error(u(191, l));
          l.call(r);
        }
      }
  }
  var gr = {},
    jt = qt(gr),
    _r = qt(gr),
    wr = qt(gr);
  function pn(e) {
    if (e === gr) throw Error(u(174));
    return e;
  }
  function ni(e, t) {
    switch ((de(wr, t), de(_r, e), de(jt, gr), (e = t.nodeType), e)) {
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
    (me(jt), de(jt, t));
  }
  function Un() {
    (me(jt), me(_r), me(wr));
  }
  function Du(e) {
    pn(wr.current);
    var t = pn(jt.current),
      n = no(t, e.type);
    t !== n && (de(_r, e), de(jt, n));
  }
  function ri(e) {
    _r.current === e && (me(jt), me(_r));
  }
  var _e = qt(0);
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
  var li = [];
  function oi() {
    for (var e = 0; e < li.length; e++) li[e]._workInProgressVersionPrimary = null;
    li.length = 0;
  }
  var _l = Y.ReactCurrentDispatcher,
    ii = Y.ReactCurrentBatchConfig,
    mn = 0,
    we = null,
    je = null,
    Oe = null,
    wl = !1,
    Sr = !1,
    xr = 0,
    Fd = 0;
  function $e() {
    throw Error(u(321));
  }
  function si(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!gt(e[n], t[n])) return !1;
    return !0;
  }
  function ui(e, t, n, r, l, o) {
    if (
      ((mn = o),
      (we = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (_l.current = e === null || e.memoizedState === null ? $d : Vd),
      (e = n(r, l)),
      Sr)
    ) {
      o = 0;
      do {
        if (((Sr = !1), (xr = 0), 25 <= o)) throw Error(u(301));
        ((o += 1), (Oe = je = null), (t.updateQueue = null), (_l.current = Qd), (e = n(r, l)));
      } while (Sr);
    }
    if (
      ((_l.current = kl),
      (t = je !== null && je.next !== null),
      (mn = 0),
      (Oe = je = we = null),
      (wl = !1),
      t)
    )
      throw Error(u(300));
    return e;
  }
  function ai() {
    var e = xr !== 0;
    return ((xr = 0), e);
  }
  function Pt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Oe === null ? (we.memoizedState = Oe = e) : (Oe = Oe.next = e), Oe);
  }
  function ft() {
    if (je === null) {
      var e = we.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = je.next;
    var t = Oe === null ? we.memoizedState : Oe.next;
    if (t !== null) ((Oe = t), (je = e));
    else {
      if (e === null) throw Error(u(310));
      ((je = e),
        (e = {
          memoizedState: je.memoizedState,
          baseState: je.baseState,
          baseQueue: je.baseQueue,
          queue: je.queue,
          next: null,
        }),
        Oe === null ? (we.memoizedState = Oe = e) : (Oe = Oe.next = e));
    }
    return Oe;
  }
  function kr(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function ci(e) {
    var t = ft(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = je,
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
      var s = (i = null),
        a = null,
        y = o;
      do {
        var C = y.lane;
        if ((mn & C) === C)
          (a !== null &&
            (a = a.next =
              {
                lane: 0,
                action: y.action,
                hasEagerState: y.hasEagerState,
                eagerState: y.eagerState,
                next: null,
              }),
            (r = y.hasEagerState ? y.eagerState : e(r, y.action)));
        else {
          var N = {
            lane: C,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          };
          (a === null ? ((s = a = N), (i = r)) : (a = a.next = N), (we.lanes |= C), (hn |= C));
        }
        y = y.next;
      } while (y !== null && y !== o);
      (a === null ? (i = r) : (a.next = s),
        gt(r, t.memoizedState) || (Je = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = a),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((o = l.lane), (we.lanes |= o), (hn |= o), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function di(e) {
    var t = ft(),
      n = t.queue;
    if (n === null) throw Error(u(311));
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
  function Fu() {}
  function Bu(e, t) {
    var n = we,
      r = ft(),
      l = t(),
      o = !gt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Je = !0)),
      (r = r.queue),
      fi($u.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Oe !== null && Oe.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Cr(9, Uu.bind(null, n, r, l, t), void 0, null), Re === null))
        throw Error(u(349));
      (mn & 30) !== 0 || Au(n, t, l);
    }
    return l;
  }
  function Au(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = we.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (we.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Uu(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Vu(t) && Qu(e));
  }
  function $u(e, t, n) {
    return n(function () {
      Vu(t) && Qu(e);
    });
  }
  function Vu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !gt(e, n);
    } catch {
      return !0;
    }
  }
  function Qu(e) {
    var t = zt(e, 1);
    t !== null && kt(t, e, 1, -1);
  }
  function Hu(e) {
    var t = Pt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Ud.bind(null, we, e)),
      [t.memoizedState, e]
    );
  }
  function Cr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = we.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (we.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Wu() {
    return ft().memoizedState;
  }
  function Sl(e, t, n, r) {
    var l = Pt();
    ((we.flags |= e), (l.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function xl(e, t, n, r) {
    var l = ft();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (je !== null) {
      var i = je.memoizedState;
      if (((o = i.destroy), r !== null && si(r, i.deps))) {
        l.memoizedState = Cr(t, n, o, r);
        return;
      }
    }
    ((we.flags |= e), (l.memoizedState = Cr(1 | t, n, o, r)));
  }
  function Gu(e, t) {
    return Sl(8390656, 8, e, t);
  }
  function fi(e, t) {
    return xl(2048, 8, e, t);
  }
  function qu(e, t) {
    return xl(4, 2, e, t);
  }
  function Ku(e, t) {
    return xl(4, 4, e, t);
  }
  function Yu(e, t) {
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
  function Xu(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), xl(4, 4, Yu.bind(null, t, e), n));
  }
  function pi() {}
  function Zu(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && si(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Ju(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && si(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function bu(e, t, n) {
    return (mn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Je = !0)), (e.memoizedState = n))
      : (gt(n, t) || ((n = Ts()), (we.lanes |= n), (hn |= n), (e.baseState = !0)), t);
  }
  function Bd(e, t) {
    var n = ue;
    ((ue = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = ii.transition;
    ii.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((ue = n), (ii.transition = r));
    }
  }
  function ea() {
    return ft().memoizedState;
  }
  function Ad(e, t, n) {
    var r = tn(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), ta(e)))
      na(t, n);
    else if (((n = Ru(e, t, n, r)), n !== null)) {
      var l = qe();
      (kt(n, e, r, l), ra(n, t, r));
    }
  }
  function Ud(e, t, n) {
    var r = tn(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ta(e)) na(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var i = t.lastRenderedState,
            s = o(i, n);
          if (((l.hasEagerState = !0), (l.eagerState = s), gt(s, i))) {
            var a = t.interleaved;
            (a === null ? ((l.next = l), ei(t)) : ((l.next = a.next), (a.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Ru(e, t, l, r)), n !== null && ((l = qe()), kt(n, e, r, l), ra(n, t, r)));
    }
  }
  function ta(e) {
    var t = e.alternate;
    return e === we || (t !== null && t === we);
  }
  function na(e, t) {
    Sr = wl = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function ra(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ho(e, n));
    }
  }
  var kl = {
      readContext: dt,
      useCallback: $e,
      useContext: $e,
      useEffect: $e,
      useImperativeHandle: $e,
      useInsertionEffect: $e,
      useLayoutEffect: $e,
      useMemo: $e,
      useReducer: $e,
      useRef: $e,
      useState: $e,
      useDebugValue: $e,
      useDeferredValue: $e,
      useTransition: $e,
      useMutableSource: $e,
      useSyncExternalStore: $e,
      useId: $e,
      unstable_isNewReconciler: !1,
    },
    $d = {
      readContext: dt,
      useCallback: function (e, t) {
        return ((Pt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: dt,
      useEffect: Gu,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), Sl(4194308, 4, Yu.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Sl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Sl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Pt();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var r = Pt();
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
          (e = e.dispatch = Ad.bind(null, we, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Pt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Hu,
      useDebugValue: pi,
      useDeferredValue: function (e) {
        return (Pt().memoizedState = e);
      },
      useTransition: function () {
        var e = Hu(!1),
          t = e[0];
        return ((e = Bd.bind(null, e[1])), (Pt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = we,
          l = Pt();
        if (ve) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = t()), Re === null)) throw Error(u(349));
          (mn & 30) !== 0 || Au(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Gu($u.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Cr(9, Uu.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Pt(),
          t = Re.identifierPrefix;
        if (ve) {
          var n = It,
            r = Rt;
          ((n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = xr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':'));
        } else ((n = Fd++), (t = ':' + t + 'r' + n.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Vd = {
      readContext: dt,
      useCallback: Zu,
      useContext: dt,
      useEffect: fi,
      useImperativeHandle: Xu,
      useInsertionEffect: qu,
      useLayoutEffect: Ku,
      useMemo: Ju,
      useReducer: ci,
      useRef: Wu,
      useState: function () {
        return ci(kr);
      },
      useDebugValue: pi,
      useDeferredValue: function (e) {
        var t = ft();
        return bu(t, je.memoizedState, e);
      },
      useTransition: function () {
        var e = ci(kr)[0],
          t = ft().memoizedState;
        return [e, t];
      },
      useMutableSource: Fu,
      useSyncExternalStore: Bu,
      useId: ea,
      unstable_isNewReconciler: !1,
    },
    Qd = {
      readContext: dt,
      useCallback: Zu,
      useContext: dt,
      useEffect: fi,
      useImperativeHandle: Xu,
      useInsertionEffect: qu,
      useLayoutEffect: Ku,
      useMemo: Ju,
      useReducer: di,
      useRef: Wu,
      useState: function () {
        return di(kr);
      },
      useDebugValue: pi,
      useDeferredValue: function (e) {
        var t = ft();
        return je === null ? (t.memoizedState = e) : bu(t, je.memoizedState, e);
      },
      useTransition: function () {
        var e = di(kr)[0],
          t = ft().memoizedState;
        return [e, t];
      },
      useMutableSource: Fu,
      useSyncExternalStore: Bu,
      useId: ea,
      unstable_isNewReconciler: !1,
    };
  function wt(e, t) {
    if (e && e.defaultProps) {
      ((t = R({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function mi(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : R({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Cl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? sn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = qe(),
        l = tn(e),
        o = Mt(r, l);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = Zt(e, o, l)),
        t !== null && (kt(t, e, l, r), vl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = qe(),
        l = tn(e),
        o = Mt(r, l);
      ((o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Zt(e, o, l)),
        t !== null && (kt(t, e, l, r), vl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = qe(),
        r = tn(e),
        l = Mt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Zt(e, l, r)),
        t !== null && (kt(t, e, r, n), vl(t, e, r)));
    },
  };
  function la(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !cr(n, r) || !cr(l, o)
          : !0
    );
  }
  function oa(e, t, n) {
    var r = !1,
      l = Kt,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = dt(o))
        : ((l = Ze(t) ? an : Ue.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? In(e, l) : Kt)),
      (t = new t(n, o)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Cl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function ia(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Cl.enqueueReplaceState(t, t.state, null));
  }
  function hi(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), ti(e));
    var o = t.contextType;
    (typeof o == 'object' && o !== null
      ? (l.context = dt(o))
      : ((o = Ze(t) ? an : Ue.current), (l.context = In(e, o))),
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
        t !== l.state && Cl.enqueueReplaceState(l, l.state, null),
        yl(e, n, l, r),
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
  var Hd = typeof WeakMap == 'function' ? WeakMap : Map;
  function sa(e, t, n) {
    ((n = Mt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Ol || ((Ol = !0), (Ri = r)), yi(e, t));
      }),
      n
    );
  }
  function ua(e, t, n) {
    ((n = Mt(-1, n)), (n.tag = 3));
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
            typeof r != 'function' && (bt === null ? (bt = new Set([this])) : bt.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' });
        }),
      n
    );
  }
  function aa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Hd();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = lf.bind(null, e, t, n)), t.then(e, e));
  }
  function ca(e) {
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
  function da(e, t, n, r, l) {
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
  var Wd = Y.ReactCurrentOwner,
    Je = !1;
  function Ge(e, t, n, r) {
    t.child = e === null ? Ou(t, null, n, r) : Fn(t, e.child, n, r);
  }
  function fa(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      An(t, l),
      (r = ui(e, t, n, r, o, l)),
      (n = ai()),
      e !== null && !Je
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Dt(e, t, l))
        : (ve && n && Wo(t), (t.flags |= 1), Ge(e, t, r, l), t.child)
    );
  }
  function pa(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' &&
        !Ai(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), ma(e, t, o, r, l))
        : ((e = Fl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var i = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : cr), n(i, r) && e.ref === t.ref))
        return Dt(e, t, l);
    }
    return ((t.flags |= 1), (e = rn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function ma(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (cr(o, r) && e.ref === t.ref)
        if (((Je = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Je = !0);
        else return ((t.lanes = e.lanes), Dt(e, t, l));
    }
    return gi(e, t, n, r, l);
  }
  function ha(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          de(Qn, ut),
          (ut |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            de(Qn, ut),
            (ut |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = o !== null ? o.baseLanes : n),
          de(Qn, ut),
          (ut |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        de(Qn, ut),
        (ut |= r));
    return (Ge(e, t, l, n), t.child);
  }
  function va(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function gi(e, t, n, r, l) {
    var o = Ze(n) ? an : Ue.current;
    return (
      (o = In(t, o)),
      An(t, l),
      (n = ui(e, t, n, r, o, l)),
      (r = ai()),
      e !== null && !Je
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Dt(e, t, l))
        : (ve && r && Wo(t), (t.flags |= 1), Ge(e, t, n, l), t.child)
    );
  }
  function ya(e, t, n, r, l) {
    if (Ze(n)) {
      var o = !0;
      ul(t);
    } else o = !1;
    if ((An(t, l), t.stateNode === null)) (Nl(e, t), oa(t, n, r), hi(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        s = t.memoizedProps;
      i.props = s;
      var a = i.context,
        y = n.contextType;
      typeof y == 'object' && y !== null
        ? (y = dt(y))
        : ((y = Ze(n) ? an : Ue.current), (y = In(t, y)));
      var C = n.getDerivedStateFromProps,
        N = typeof C == 'function' || typeof i.getSnapshotBeforeUpdate == 'function';
      (N ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((s !== r || a !== y) && ia(t, i, r, y)),
        (Xt = !1));
      var k = t.memoizedState;
      ((i.state = k),
        yl(t, r, i, l),
        (a = t.memoizedState),
        s !== r || k !== a || Xe.current || Xt
          ? (typeof C == 'function' && (mi(t, n, C, r), (a = t.memoizedState)),
            (s = Xt || la(t, n, s, r, k, a, y))
              ? (N ||
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
            (i.context = y),
            (r = s))
          : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1)));
    } else {
      ((i = t.stateNode),
        Iu(e, t),
        (s = t.memoizedProps),
        (y = t.type === t.elementType ? s : wt(t.type, s)),
        (i.props = y),
        (N = t.pendingProps),
        (k = i.context),
        (a = n.contextType),
        typeof a == 'object' && a !== null
          ? (a = dt(a))
          : ((a = Ze(n) ? an : Ue.current), (a = In(t, a))));
      var z = n.getDerivedStateFromProps;
      ((C = typeof z == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((s !== N || k !== a) && ia(t, i, r, a)),
        (Xt = !1),
        (k = t.memoizedState),
        (i.state = k),
        yl(t, r, i, l));
      var A = t.memoizedState;
      s !== N || k !== A || Xe.current || Xt
        ? (typeof z == 'function' && (mi(t, n, z, r), (A = t.memoizedState)),
          (y = Xt || la(t, n, y, r, k, A, a) || !1)
            ? (C ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                  typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(r, A, a),
                typeof i.UNSAFE_componentWillUpdate == 'function' &&
                  i.UNSAFE_componentWillUpdate(r, A, a)),
              typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (s === e.memoizedProps && k === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (s === e.memoizedProps && k === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = A)),
          (i.props = r),
          (i.state = A),
          (i.context = a),
          (r = y))
        : (typeof i.componentDidUpdate != 'function' ||
            (s === e.memoizedProps && k === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != 'function' ||
            (s === e.memoizedProps && k === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return _i(e, t, n, r, o, l);
  }
  function _i(e, t, n, r, l, o) {
    va(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && xu(t, n, !1), Dt(e, t, o));
    ((r = t.stateNode), (Wd.current = t));
    var s = i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Fn(t, e.child, null, o)), (t.child = Fn(t, null, s, o)))
        : Ge(e, t, s, o),
      (t.memoizedState = r.state),
      l && xu(t, n, !0),
      t.child
    );
  }
  function ga(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? wu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && wu(e, t.context, !1),
      ni(e, t.containerInfo));
  }
  function _a(e, t, n, r, l) {
    return (Dn(), Yo(l), (t.flags |= 256), Ge(e, t, n, r), t.child);
  }
  var wi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Si(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function wa(e, t, n) {
    var r = t.pendingProps,
      l = _e.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      s;
    if (
      ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      s ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      de(_e, l & 1),
      e === null)
    )
      return (
        Ko(t),
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
                  : (o = Bl(i, r, 0, null)),
                (e = _n(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = Si(n)),
                (t.memoizedState = wi),
                e)
              : xi(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
      return Gd(e, t, i, r, s, l, n);
    if (o) {
      ((o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling));
      var a = { mode: 'hidden', children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
          : ((r = rn(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        s !== null ? (o = rn(s, o)) : ((o = _n(o, i, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? Si(n)
            : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
        (o.memoizedState = i),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = wi),
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
      (t = Bl({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function El(e, t, n, r) {
    return (
      r !== null && Yo(r),
      Fn(t, e.child, null, n),
      (e = xi(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Gd(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = vi(Error(u(422)))), El(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = Bl({ mode: 'visible', children: r.children }, l, 0, null)),
            (o = _n(o, l, i, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && Fn(t, e.child, null, i),
            (t.child.memoizedState = Si(i)),
            (t.memoizedState = wi),
            o);
    if ((t.mode & 1) === 0) return El(e, t, i, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
      return ((r = s), (o = Error(u(419))), (r = vi(o, r, void 0)), El(e, t, i, r));
    }
    if (((s = (i & e.childLanes) !== 0), Je || s)) {
      if (((r = Re), r !== null)) {
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
          l !== 0 && l !== o.retryLane && ((o.retryLane = l), zt(e, l), kt(r, e, l, -1)));
      }
      return (Bi(), (r = vi(Error(u(421)))), El(e, t, i, r));
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = of.bind(null, e)), (l._reactRetry = t), null)
      : ((e = o.treeContext),
        (st = Gt(l.nextSibling)),
        (it = t),
        (ve = !0),
        (_t = null),
        e !== null &&
          ((at[ct++] = Rt),
          (at[ct++] = It),
          (at[ct++] = cn),
          (Rt = e.id),
          (It = e.overflow),
          (cn = t)),
        (t = xi(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Sa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), bo(e.return, t, n));
  }
  function ki(e, t, n, r, l) {
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
  function xa(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Ge(e, t, r.children, n), (r = _e.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Sa(e, n, t);
          else if (e.tag === 19) Sa(e, n, t);
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
    if ((de(_e, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate), e !== null && gl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            ki(t, !1, l, n, o));
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && gl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          ki(t, !0, n, null, o);
          break;
        case 'together':
          ki(t, !1, null, null, void 0);
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
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = rn(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function qd(e, t, n) {
    switch (t.tag) {
      case 3:
        (ga(t), Dn());
        break;
      case 5:
        Du(t);
        break;
      case 1:
        Ze(t.type) && ul(t);
        break;
      case 4:
        ni(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (de(ml, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (de(_e, _e.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? wa(e, t, n)
              : (de(_e, _e.current & 1), (e = Dt(e, t, n)), e !== null ? e.sibling : null);
        de(_e, _e.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return xa(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          de(_e, _e.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), ha(e, t, n));
    }
    return Dt(e, t, n);
  }
  var ka, Ci, Ca, Ea;
  ((ka = function (e, t) {
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
    (Ca = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), pn(jt.current));
        var o = null;
        switch (n) {
          case 'input':
            ((l = Jl(e, l)), (r = Jl(e, r)), (o = []));
            break;
          case 'select':
            ((l = R({}, l, { value: void 0 })), (r = R({}, r, { value: void 0 })), (o = []));
            break;
          case 'textarea':
            ((l = to(e, l)), (r = to(e, r)), (o = []));
            break;
          default:
            typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = ol);
        }
        ro(n, r);
        var i;
        n = null;
        for (y in l)
          if (!r.hasOwnProperty(y) && l.hasOwnProperty(y) && l[y] != null)
            if (y === 'style') {
              var s = l[y];
              for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
            } else
              y !== 'dangerouslySetInnerHTML' &&
                y !== 'children' &&
                y !== 'suppressContentEditableWarning' &&
                y !== 'suppressHydrationWarning' &&
                y !== 'autoFocus' &&
                (S.hasOwnProperty(y) ? o || (o = []) : (o = o || []).push(y, null));
        for (y in r) {
          var a = r[y];
          if (
            ((s = l != null ? l[y] : void 0),
            r.hasOwnProperty(y) && a !== s && (a != null || s != null))
          )
            if (y === 'style')
              if (s) {
                for (i in s)
                  !s.hasOwnProperty(i) ||
                    (a && a.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ''));
                for (i in a) a.hasOwnProperty(i) && s[i] !== a[i] && (n || (n = {}), (n[i] = a[i]));
              } else (n || (o || (o = []), o.push(y, n)), (n = a));
            else
              y === 'dangerouslySetInnerHTML'
                ? ((a = a ? a.__html : void 0),
                  (s = s ? s.__html : void 0),
                  a != null && s !== a && (o = o || []).push(y, a))
                : y === 'children'
                  ? (typeof a != 'string' && typeof a != 'number') || (o = o || []).push(y, '' + a)
                  : y !== 'suppressContentEditableWarning' &&
                    y !== 'suppressHydrationWarning' &&
                    (S.hasOwnProperty(y)
                      ? (a != null && y === 'onScroll' && pe('scroll', e), o || s === a || (o = []))
                      : (o = o || []).push(y, a));
        }
        n && (o = o || []).push('style', n);
        var y = o;
        (t.updateQueue = y) && (t.flags |= 4);
      }
    }),
    (Ea = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function Er(e, t) {
    if (!ve)
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
  function Kd(e, t, n) {
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
        return (Ve(t), null);
      case 1:
        return (Ze(t.type) && sl(), Ve(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Un(),
          me(Xe),
          me(Ue),
          oi(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (fl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), _t !== null && (Mi(_t), (_t = null)))),
          Ci(e, t),
          Ve(t),
          null
        );
      case 5:
        ri(t);
        var l = pn(wr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Ca(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return (Ve(t), null);
          }
          if (((e = pn(jt.current)), fl(t))) {
            ((r = t.stateNode), (n = t.type));
            var o = t.memoizedProps;
            switch (((r[Nt] = t), (r[hr] = o), (e = (t.mode & 1) !== 0), n)) {
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
                for (l = 0; l < fr.length; l++) pe(fr[l], r);
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
                (os(r, o), pe('invalid', r));
                break;
              case 'select':
                ((r._wrapperState = { wasMultiple: !!o.multiple }), pe('invalid', r));
                break;
              case 'textarea':
                (us(r, o), pe('invalid', r));
            }
            (ro(n, o), (l = null));
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var s = o[i];
                i === 'children'
                  ? typeof s == 'string'
                    ? r.textContent !== s &&
                      (o.suppressHydrationWarning !== !0 && ll(r.textContent, s, e),
                      (l = ['children', s]))
                    : typeof s == 'number' &&
                      r.textContent !== '' + s &&
                      (o.suppressHydrationWarning !== !0 && ll(r.textContent, s, e),
                      (l = ['children', '' + s]))
                  : S.hasOwnProperty(i) && s != null && i === 'onScroll' && pe('scroll', r);
              }
            switch (n) {
              case 'input':
                (Mr(r), ss(r, o, !0));
                break;
              case 'textarea':
                (Mr(r), cs(r));
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
              e === 'http://www.w3.org/1999/xhtml' && (e = ds(n)),
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
              (e[hr] = r),
              ka(e, t, !1, !1),
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
                  for (l = 0; l < fr.length; l++) pe(fr[l], e);
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
                  (os(e, r), (l = Jl(e, r)), pe('invalid', e));
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = R({}, r, { value: void 0 })),
                    pe('invalid', e));
                  break;
                case 'textarea':
                  (us(e, r), (l = to(e, r)), pe('invalid', e));
                  break;
                default:
                  l = r;
              }
              (ro(n, l), (s = l));
              for (o in s)
                if (s.hasOwnProperty(o)) {
                  var a = s[o];
                  o === 'style'
                    ? ms(e, a)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((a = a ? a.__html : void 0), a != null && fs(e, a))
                      : o === 'children'
                        ? typeof a == 'string'
                          ? (n !== 'textarea' || a !== '') && qn(e, a)
                          : typeof a == 'number' && qn(e, '' + a)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (S.hasOwnProperty(o)
                            ? a != null && o === 'onScroll' && pe('scroll', e)
                            : a != null && J(e, o, a, i));
                }
              switch (n) {
                case 'input':
                  (Mr(e), ss(e, r, !1));
                  break;
                case 'textarea':
                  (Mr(e), cs(e));
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + se(r.value));
                  break;
                case 'select':
                  ((e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? Sn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null && Sn(e, !!r.multiple, r.defaultValue, !0));
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
        if (e && t.stateNode != null) Ea(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(u(166));
          if (((n = pn(wr.current)), pn(jt.current), fl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Nt] = t),
              (o = r.nodeValue !== n) && ((e = it), e !== null))
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
          (me(_e),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ve && st !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Pu(), Dn(), (t.flags |= 98560), (o = !1));
          else if (((o = fl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(u(317));
              o[Nt] = t;
            } else (Dn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ve(t), (o = !1));
          } else (_t !== null && (Mi(_t), (_t = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (_e.current & 1) !== 0 ? Pe === 0 && (Pe = 3) : Bi())),
            t.updateQueue !== null && (t.flags |= 4),
            Ve(t),
            null);
      case 4:
        return (Un(), Ci(e, t), e === null && pr(t.stateNode.containerInfo), Ve(t), null);
      case 10:
        return (Jo(t.type._context), Ve(t), null);
      case 17:
        return (Ze(t.type) && sl(), Ve(t), null);
      case 19:
        if ((me(_e), (o = t.memoizedState), o === null)) return (Ve(t), null);
        if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) Er(o, !1);
          else {
            if (Pe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = gl(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      Er(o, !1),
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
                  return (de(_e, (_e.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Ce() > Hn &&
              ((t.flags |= 128), (r = !0), Er(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = gl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Er(o, !0),
                o.tail === null && o.tailMode === 'hidden' && !i.alternate && !ve)
              )
                return (Ve(t), null);
            } else
              2 * Ce() - o.renderingStartTime > Hn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Er(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = o.last), n !== null ? (n.sibling = i) : (t.child = i), (o.last = i));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Ce()),
            (t.sibling = null),
            (n = _e.current),
            de(_e, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ve(t), null);
      case 22:
      case 23:
        return (
          Fi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (ut & 1073741824) !== 0 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ve(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Yd(e, t) {
    switch ((Go(t), t.tag)) {
      case 1:
        return (
          Ze(t.type) && sl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Un(),
          me(Xe),
          me(Ue),
          oi(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (ri(t), null);
      case 13:
        if ((me(_e), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(u(340));
          Dn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (me(_e), null);
      case 4:
        return (Un(), null);
      case 10:
        return (Jo(t.type._context), null);
      case 22:
      case 23:
        return (Fi(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var jl = !1,
    Qe = !1,
    Xd = typeof WeakSet == 'function' ? WeakSet : Set,
    B = null;
  function Vn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          Se(e, t, r);
        }
      else n.current = null;
  }
  function Ei(e, t, n) {
    try {
      n();
    } catch (r) {
      Se(e, t, r);
    }
  }
  var Na = !1;
  function Zd(e, t) {
    if (((Fo = qr), (e = lu()), To(e))) {
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
              s = -1,
              a = -1,
              y = 0,
              C = 0,
              N = e,
              k = null;
            t: for (;;) {
              for (
                var z;
                N !== n || (l !== 0 && N.nodeType !== 3) || (s = i + l),
                  N !== o || (r !== 0 && N.nodeType !== 3) || (a = i + r),
                  N.nodeType === 3 && (i += N.nodeValue.length),
                  (z = N.firstChild) !== null;
              )
                ((k = N), (N = z));
              for (;;) {
                if (N === e) break t;
                if (
                  (k === n && ++y === l && (s = i),
                  k === o && ++C === r && (a = i),
                  (z = N.nextSibling) !== null)
                )
                  break;
                ((N = k), (k = N.parentNode));
              }
              N = z;
            }
            n = s === -1 || a === -1 ? null : { start: s, end: a };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Bo = { focusedElem: e, selectionRange: n }, qr = !1, B = t; B !== null; )
      if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (B = e));
      else
        for (; B !== null; ) {
          t = B;
          try {
            var A = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (A !== null) {
                    var U = A.memoizedProps,
                      Ee = A.memoizedState,
                      h = t.stateNode,
                      c = h.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? U : wt(t.type, U),
                        Ee
                      );
                    h.__reactInternalSnapshotBeforeUpdate = c;
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
                  throw Error(u(163));
              }
          } catch (T) {
            Se(t, t.return, T);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (B = e));
            break;
          }
          B = t.return;
        }
    return ((A = Na), (Na = !1), A);
  }
  function Nr(e, t, n) {
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
  function Pl(e, t) {
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
  function ja(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), ja(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Nt], delete t[hr], delete t[Vo], delete t[Id], delete t[zd])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Pa(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ta(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Pa(e.return)) return null;
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
            n != null || t.onclick !== null || (t.onclick = ol)));
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
    St = !1;
  function Jt(e, t, n) {
    for (n = n.child; n !== null; ) (La(e, t, n), (n = n.sibling));
  }
  function La(e, t, n) {
    if (Et && typeof Et.onCommitFiberUnmount == 'function')
      try {
        Et.onCommitFiberUnmount($r, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Qe || Vn(n, t);
      case 6:
        var r = ze,
          l = St;
        ((ze = null),
          Jt(e, t, n),
          (ze = r),
          (St = l),
          ze !== null &&
            (St
              ? ((e = ze),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : ze.removeChild(n.stateNode)));
        break;
      case 18:
        ze !== null &&
          (St
            ? ((e = ze),
              (n = n.stateNode),
              e.nodeType === 8 ? $o(e.parentNode, n) : e.nodeType === 1 && $o(e, n),
              lr(e))
            : $o(ze, n.stateNode));
        break;
      case 4:
        ((r = ze),
          (l = St),
          (ze = n.stateNode.containerInfo),
          (St = !0),
          Jt(e, t, n),
          (ze = r),
          (St = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Qe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var o = l,
              i = o.destroy;
            ((o = o.tag),
              i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Ei(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        Jt(e, t, n);
        break;
      case 1:
        if (!Qe && (Vn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (s) {
            Se(n, t, s);
          }
        Jt(e, t, n);
        break;
      case 21:
        Jt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Qe = (r = Qe) || n.memoizedState !== null), Jt(e, t, n), (Qe = r))
          : Jt(e, t, n);
        break;
      default:
        Jt(e, t, n);
    }
  }
  function Oa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Xd()),
        t.forEach(function (r) {
          var l = sf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function xt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            i = t,
            s = i;
          e: for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                ((ze = s.stateNode), (St = !1));
                break e;
              case 3:
                ((ze = s.stateNode.containerInfo), (St = !0));
                break e;
              case 4:
                ((ze = s.stateNode.containerInfo), (St = !0));
                break e;
            }
            s = s.return;
          }
          if (ze === null) throw Error(u(160));
          (La(o, i, l), (ze = null), (St = !1));
          var a = l.alternate;
          (a !== null && (a.return = null), (l.return = null));
        } catch (y) {
          Se(l, t, y);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Ra(t, e), (t = t.sibling));
  }
  function Ra(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((xt(t, e), Tt(e), r & 4)) {
          try {
            (Nr(3, e, e.return), Pl(3, e));
          } catch (U) {
            Se(e, e.return, U);
          }
          try {
            Nr(5, e, e.return);
          } catch (U) {
            Se(e, e.return, U);
          }
        }
        break;
      case 1:
        (xt(t, e), Tt(e), r & 512 && n !== null && Vn(n, n.return));
        break;
      case 5:
        if ((xt(t, e), Tt(e), r & 512 && n !== null && Vn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            qn(l, '');
          } catch (U) {
            Se(e, e.return, U);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = n !== null ? n.memoizedProps : o,
            s = e.type,
            a = e.updateQueue;
          if (((e.updateQueue = null), a !== null))
            try {
              (s === 'input' && o.type === 'radio' && o.name != null && is(l, o), lo(s, i));
              var y = lo(s, o);
              for (i = 0; i < a.length; i += 2) {
                var C = a[i],
                  N = a[i + 1];
                C === 'style'
                  ? ms(l, N)
                  : C === 'dangerouslySetInnerHTML'
                    ? fs(l, N)
                    : C === 'children'
                      ? qn(l, N)
                      : J(l, C, N, y);
              }
              switch (s) {
                case 'input':
                  bl(l, o);
                  break;
                case 'textarea':
                  as(l, o);
                  break;
                case 'select':
                  var k = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var z = o.value;
                  z != null
                    ? Sn(l, !!o.multiple, z, !1)
                    : k !== !!o.multiple &&
                      (o.defaultValue != null
                        ? Sn(l, !!o.multiple, o.defaultValue, !0)
                        : Sn(l, !!o.multiple, o.multiple ? [] : '', !1));
              }
              l[hr] = o;
            } catch (U) {
              Se(e, e.return, U);
            }
        }
        break;
      case 6:
        if ((xt(t, e), Tt(e), r & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          ((l = e.stateNode), (o = e.memoizedProps));
          try {
            l.nodeValue = o;
          } catch (U) {
            Se(e, e.return, U);
          }
        }
        break;
      case 3:
        if ((xt(t, e), Tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            lr(t.containerInfo);
          } catch (U) {
            Se(e, e.return, U);
          }
        break;
      case 4:
        (xt(t, e), Tt(e));
        break;
      case 13:
        (xt(t, e),
          Tt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (Oi = Ce())),
          r & 4 && Oa(e));
        break;
      case 22:
        if (
          ((C = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Qe = (y = Qe) || C), xt(t, e), (Qe = y)) : xt(t, e),
          Tt(e),
          r & 8192)
        ) {
          if (
            ((y = e.memoizedState !== null), (e.stateNode.isHidden = y) && !C && (e.mode & 1) !== 0)
          )
            for (B = e, C = e.child; C !== null; ) {
              for (N = B = C; B !== null; ) {
                switch (((k = B), (z = k.child), k.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Nr(4, k, k.return);
                    break;
                  case 1:
                    Vn(k, k.return);
                    var A = k.stateNode;
                    if (typeof A.componentWillUnmount == 'function') {
                      ((r = k), (n = k.return));
                      try {
                        ((t = r),
                          (A.props = t.memoizedProps),
                          (A.state = t.memoizedState),
                          A.componentWillUnmount());
                      } catch (U) {
                        Se(r, n, U);
                      }
                    }
                    break;
                  case 5:
                    Vn(k, k.return);
                    break;
                  case 22:
                    if (k.memoizedState !== null) {
                      Ma(N);
                      continue;
                    }
                }
                z !== null ? ((z.return = k), (B = z)) : Ma(N);
              }
              C = C.sibling;
            }
          e: for (C = null, N = e; ; ) {
            if (N.tag === 5) {
              if (C === null) {
                C = N;
                try {
                  ((l = N.stateNode),
                    y
                      ? ((o = l.style),
                        typeof o.setProperty == 'function'
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none'))
                      : ((s = N.stateNode),
                        (a = N.memoizedProps.style),
                        (i = a != null && a.hasOwnProperty('display') ? a.display : null),
                        (s.style.display = ps('display', i))));
                } catch (U) {
                  Se(e, e.return, U);
                }
              }
            } else if (N.tag === 6) {
              if (C === null)
                try {
                  N.stateNode.nodeValue = y ? '' : N.memoizedProps;
                } catch (U) {
                  Se(e, e.return, U);
                }
            } else if (
              ((N.tag !== 22 && N.tag !== 23) || N.memoizedState === null || N === e) &&
              N.child !== null
            ) {
              ((N.child.return = N), (N = N.child));
              continue;
            }
            if (N === e) break e;
            for (; N.sibling === null; ) {
              if (N.return === null || N.return === e) break e;
              (C === N && (C = null), (N = N.return));
            }
            (C === N && (C = null), (N.sibling.return = N.return), (N = N.sibling));
          }
        }
        break;
      case 19:
        (xt(t, e), Tt(e), r & 4 && Oa(e));
        break;
      case 21:
        break;
      default:
        (xt(t, e), Tt(e));
    }
  }
  function Tt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Pa(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (qn(l, ''), (r.flags &= -33));
            var o = Ta(e);
            Pi(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              s = Ta(e);
            ji(e, s, i);
            break;
          default:
            throw Error(u(161));
        }
      } catch (a) {
        Se(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Jd(e, t, n) {
    ((B = e), Ia(e));
  }
  function Ia(e, t, n) {
    for (var r = (e.mode & 1) !== 0; B !== null; ) {
      var l = B,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || jl;
        if (!i) {
          var s = l.alternate,
            a = (s !== null && s.memoizedState !== null) || Qe;
          s = jl;
          var y = Qe;
          if (((jl = i), (Qe = a) && !y))
            for (B = l; B !== null; )
              ((i = B),
                (a = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? Da(l)
                  : a !== null
                    ? ((a.return = i), (B = a))
                    : Da(l));
          for (; o !== null; ) ((B = o), Ia(o), (o = o.sibling));
          ((B = l), (jl = s), (Qe = y));
        }
        za(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), (B = o)) : za(e);
    }
  }
  function za(e) {
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
                Qe || Pl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Qe)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : wt(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && Mu(t, o, r);
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
                  Mu(t, i, n);
                }
                break;
              case 5:
                var s = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = s;
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
                  var y = t.alternate;
                  if (y !== null) {
                    var C = y.memoizedState;
                    if (C !== null) {
                      var N = C.dehydrated;
                      N !== null && lr(N);
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
                throw Error(u(163));
            }
          Qe || (t.flags & 512 && Ni(t));
        } catch (k) {
          Se(t, t.return, k);
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
  function Ma(e) {
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
  function Da(e) {
    for (; B !== null; ) {
      var t = B;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Pl(4, t);
            } catch (a) {
              Se(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                Se(t, l, a);
              }
            }
            var o = t.return;
            try {
              Ni(t);
            } catch (a) {
              Se(t, o, a);
            }
            break;
          case 5:
            var i = t.return;
            try {
              Ni(t);
            } catch (a) {
              Se(t, i, a);
            }
        }
      } catch (a) {
        Se(t, t.return, a);
      }
      if (t === e) {
        B = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        ((s.return = t.return), (B = s));
        break;
      }
      B = t.return;
    }
  }
  var bd = Math.ceil,
    Tl = Y.ReactCurrentDispatcher,
    Ti = Y.ReactCurrentOwner,
    pt = Y.ReactCurrentBatchConfig,
    ne = 0,
    Re = null,
    Ne = null,
    Me = 0,
    ut = 0,
    Qn = qt(0),
    Pe = 0,
    jr = null,
    hn = 0,
    Ll = 0,
    Li = 0,
    Pr = null,
    be = null,
    Oi = 0,
    Hn = 1 / 0,
    Ft = null,
    Ol = !1,
    Ri = null,
    bt = null,
    Rl = !1,
    en = null,
    Il = 0,
    Tr = 0,
    Ii = null,
    zl = -1,
    Ml = 0;
  function qe() {
    return (ne & 6) !== 0 ? Ce() : zl !== -1 ? zl : (zl = Ce());
  }
  function tn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ne & 2) !== 0 && Me !== 0
        ? Me & -Me
        : Dd.transition !== null
          ? (Ml === 0 && (Ml = Ts()), Ml)
          : ((e = ue), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Bs(e.type))), e);
  }
  function kt(e, t, n, r) {
    if (50 < Tr) throw ((Tr = 0), (Ii = null), Error(u(185)));
    (bn(e, n, r),
      ((ne & 2) === 0 || e !== Re) &&
        (e === Re && ((ne & 2) === 0 && (Ll |= n), Pe === 4 && nn(e, Me)),
        et(e, r),
        n === 1 && ne === 0 && (t.mode & 1) === 0 && ((Hn = Ce() + 500), al && Yt())));
  }
  function et(e, t) {
    var n = e.callbackNode;
    Dc(e, t);
    var r = Hr(e, e === Re ? Me : 0);
    if (r === 0) (n !== null && Ns(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Ns(n), t === 1))
        (e.tag === 0 ? Md(Ba.bind(null, e)) : ku(Ba.bind(null, e)),
          Od(function () {
            (ne & 6) === 0 && Yt();
          }),
          (n = null));
      else {
        switch (Ls(r)) {
          case 1:
            n = fo;
            break;
          case 4:
            n = js;
            break;
          case 16:
            n = Ur;
            break;
          case 536870912:
            n = Ps;
            break;
          default:
            n = Ur;
        }
        n = Ga(n, Fa.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Fa(e, t) {
    if (((zl = -1), (Ml = 0), (ne & 6) !== 0)) throw Error(u(327));
    var n = e.callbackNode;
    if (Wn() && e.callbackNode !== n) return null;
    var r = Hr(e, e === Re ? Me : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Dl(e, r);
    else {
      t = r;
      var l = ne;
      ne |= 2;
      var o = Ua();
      (Re !== e || Me !== t) && ((Ft = null), (Hn = Ce() + 500), yn(e, t));
      do
        try {
          nf();
          break;
        } catch (s) {
          Aa(e, s);
        }
      while (!0);
      (Zo(), (Tl.current = o), (ne = l), Ne !== null ? (t = 0) : ((Re = null), (Me = 0), (t = Pe)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = po(e)), l !== 0 && ((r = l), (t = zi(e, l)))), t === 1))
        throw ((n = jr), yn(e, 0), nn(e, r), et(e, Ce()), n);
      if (t === 6) nn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !ef(l) &&
            ((t = Dl(e, r)),
            t === 2 && ((o = po(e)), o !== 0 && ((r = o), (t = zi(e, o)))),
            t === 1))
        )
          throw ((n = jr), yn(e, 0), nn(e, r), et(e, Ce()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            gn(e, be, Ft);
            break;
          case 3:
            if ((nn(e, r), (r & 130023424) === r && ((t = Oi + 500 - Ce()), 10 < t))) {
              if (Hr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (qe(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = Uo(gn.bind(null, e, be, Ft), t);
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
              (r = Ce() - r),
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
                            : 1960 * bd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Uo(gn.bind(null, e, be, Ft), r);
              break;
            }
            gn(e, be, Ft);
            break;
          case 5:
            gn(e, be, Ft);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return (et(e, Ce()), e.callbackNode === n ? Fa.bind(null, e) : null);
  }
  function zi(e, t) {
    var n = Pr;
    return (
      e.current.memoizedState.isDehydrated && (yn(e, t).flags |= 256),
      (e = Dl(e, t)),
      e !== 2 && ((t = be), (be = n), t !== null && Mi(t)),
      e
    );
  }
  function Mi(e) {
    be === null ? (be = e) : be.push.apply(be, e);
  }
  function ef(e) {
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
      t &= ~Li, t &= ~Ll, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - yt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function Ba(e) {
    if ((ne & 6) !== 0) throw Error(u(327));
    Wn();
    var t = Hr(e, 0);
    if ((t & 1) === 0) return (et(e, Ce()), null);
    var n = Dl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = po(e);
      r !== 0 && ((t = r), (n = zi(e, r)));
    }
    if (n === 1) throw ((n = jr), yn(e, 0), nn(e, t), et(e, Ce()), n);
    if (n === 6) throw Error(u(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      gn(e, be, Ft),
      et(e, Ce()),
      null
    );
  }
  function Di(e, t) {
    var n = ne;
    ne |= 1;
    try {
      return e(t);
    } finally {
      ((ne = n), ne === 0 && ((Hn = Ce() + 500), al && Yt()));
    }
  }
  function vn(e) {
    en !== null && en.tag === 0 && (ne & 6) === 0 && Wn();
    var t = ne;
    ne |= 1;
    var n = pt.transition,
      r = ue;
    try {
      if (((pt.transition = null), (ue = 1), e)) return e();
    } finally {
      ((ue = r), (pt.transition = n), (ne = t), (ne & 6) === 0 && Yt());
    }
  }
  function Fi() {
    ((ut = Qn.current), me(Qn));
  }
  function yn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Ld(n)), Ne !== null))
      for (n = Ne.return; n !== null; ) {
        var r = n;
        switch ((Go(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && sl());
            break;
          case 3:
            (Un(), me(Xe), me(Ue), oi());
            break;
          case 5:
            ri(r);
            break;
          case 4:
            Un();
            break;
          case 13:
            me(_e);
            break;
          case 19:
            me(_e);
            break;
          case 10:
            Jo(r.type._context);
            break;
          case 22:
          case 23:
            Fi();
        }
        n = n.return;
      }
    if (
      ((Re = e),
      (Ne = e = rn(e.current, null)),
      (Me = ut = t),
      (Pe = 0),
      (jr = null),
      (Li = Ll = hn = 0),
      (be = Pr = null),
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
  function Aa(e, t) {
    do {
      var n = Ne;
      try {
        if ((Zo(), (_l.current = kl), wl)) {
          for (var r = we.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          wl = !1;
        }
        if (
          ((mn = 0),
          (Oe = je = we = null),
          (Sr = !1),
          (xr = 0),
          (Ti.current = null),
          n === null || n.return === null)
        ) {
          ((Pe = 1), (jr = t), (Ne = null));
          break;
        }
        e: {
          var o = e,
            i = n.return,
            s = n,
            a = t;
          if (
            ((t = Me),
            (s.flags |= 32768),
            a !== null && typeof a == 'object' && typeof a.then == 'function')
          ) {
            var y = a,
              C = s,
              N = C.tag;
            if ((C.mode & 1) === 0 && (N === 0 || N === 11 || N === 15)) {
              var k = C.alternate;
              k
                ? ((C.updateQueue = k.updateQueue),
                  (C.memoizedState = k.memoizedState),
                  (C.lanes = k.lanes))
                : ((C.updateQueue = null), (C.memoizedState = null));
            }
            var z = ca(i);
            if (z !== null) {
              ((z.flags &= -257), da(z, i, s, o, t), z.mode & 1 && aa(o, y, t), (t = z), (a = y));
              var A = t.updateQueue;
              if (A === null) {
                var U = new Set();
                (U.add(a), (t.updateQueue = U));
              } else A.add(a);
              break e;
            } else {
              if ((t & 1) === 0) {
                (aa(o, y, t), Bi());
                break e;
              }
              a = Error(u(426));
            }
          } else if (ve && s.mode & 1) {
            var Ee = ca(i);
            if (Ee !== null) {
              ((Ee.flags & 65536) === 0 && (Ee.flags |= 256), da(Ee, i, s, o, t), Yo($n(a, s)));
              break e;
            }
          }
          ((o = a = $n(a, s)),
            Pe !== 4 && (Pe = 2),
            Pr === null ? (Pr = [o]) : Pr.push(o),
            (o = i));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var h = sa(o, a, t);
                zu(o, h);
                break e;
              case 1:
                s = a;
                var c = o.type,
                  v = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof c.getDerivedStateFromError == 'function' ||
                    (v !== null &&
                      typeof v.componentDidCatch == 'function' &&
                      (bt === null || !bt.has(v))))
                ) {
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var T = ua(o, s, t);
                  zu(o, T);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Va(n);
      } catch (V) {
        ((t = V), Ne === n && n !== null && (Ne = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Ua() {
    var e = Tl.current;
    return ((Tl.current = kl), e === null ? kl : e);
  }
  function Bi() {
    ((Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
      Re === null || ((hn & 268435455) === 0 && (Ll & 268435455) === 0) || nn(Re, Me));
  }
  function Dl(e, t) {
    var n = ne;
    ne |= 2;
    var r = Ua();
    (Re !== e || Me !== t) && ((Ft = null), yn(e, t));
    do
      try {
        tf();
        break;
      } catch (l) {
        Aa(e, l);
      }
    while (!0);
    if ((Zo(), (ne = n), (Tl.current = r), Ne !== null)) throw Error(u(261));
    return ((Re = null), (Me = 0), Pe);
  }
  function tf() {
    for (; Ne !== null; ) $a(Ne);
  }
  function nf() {
    for (; Ne !== null && !jc(); ) $a(Ne);
  }
  function $a(e) {
    var t = Wa(e.alternate, e, ut);
    ((e.memoizedProps = e.pendingProps), t === null ? Va(e) : (Ne = t), (Ti.current = null));
  }
  function Va(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Kd(n, t, ut)), n !== null)) {
          Ne = n;
          return;
        }
      } else {
        if (((n = Yd(n, t)), n !== null)) {
          ((n.flags &= 32767), (Ne = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Pe = 6), (Ne = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ne = t;
        return;
      }
      Ne = t = e;
    } while (t !== null);
    Pe === 0 && (Pe = 5);
  }
  function gn(e, t, n) {
    var r = ue,
      l = pt.transition;
    try {
      ((pt.transition = null), (ue = 1), rf(e, t, n, r));
    } finally {
      ((pt.transition = l), (ue = r));
    }
    return null;
  }
  function rf(e, t, n, r) {
    do Wn();
    while (en !== null);
    if ((ne & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(u(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = n.lanes | n.childLanes;
    if (
      (Fc(e, o),
      e === Re && ((Ne = Re = null), (Me = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Rl ||
        ((Rl = !0),
        Ga(Ur, function () {
          return (Wn(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = pt.transition), (pt.transition = null));
      var i = ue;
      ue = 1;
      var s = ne;
      ((ne |= 4),
        (Ti.current = null),
        Zd(e, n),
        Ra(n, e),
        kd(Bo),
        (qr = !!Fo),
        (Bo = Fo = null),
        (e.current = n),
        Jd(n),
        Pc(),
        (ne = s),
        (ue = i),
        (pt.transition = o));
    } else e.current = n;
    if (
      (Rl && ((Rl = !1), (en = e), (Il = l)),
      (o = e.pendingLanes),
      o === 0 && (bt = null),
      Oc(n.stateNode),
      et(e, Ce()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (Ol) throw ((Ol = !1), (e = Ri), (Ri = null), e);
    return (
      (Il & 1) !== 0 && e.tag !== 0 && Wn(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === Ii ? Tr++ : ((Tr = 0), (Ii = e))) : (Tr = 0),
      Yt(),
      null
    );
  }
  function Wn() {
    if (en !== null) {
      var e = Ls(Il),
        t = pt.transition,
        n = ue;
      try {
        if (((pt.transition = null), (ue = 16 > e ? 16 : e), en === null)) var r = !1;
        else {
          if (((e = en), (en = null), (Il = 0), (ne & 6) !== 0)) throw Error(u(331));
          var l = ne;
          for (ne |= 4, B = e.current; B !== null; ) {
            var o = B,
              i = o.child;
            if ((B.flags & 16) !== 0) {
              var s = o.deletions;
              if (s !== null) {
                for (var a = 0; a < s.length; a++) {
                  var y = s[a];
                  for (B = y; B !== null; ) {
                    var C = B;
                    switch (C.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Nr(8, C, o);
                    }
                    var N = C.child;
                    if (N !== null) ((N.return = C), (B = N));
                    else
                      for (; B !== null; ) {
                        C = B;
                        var k = C.sibling,
                          z = C.return;
                        if ((ja(C), C === y)) {
                          B = null;
                          break;
                        }
                        if (k !== null) {
                          ((k.return = z), (B = k));
                          break;
                        }
                        B = z;
                      }
                  }
                }
                var A = o.alternate;
                if (A !== null) {
                  var U = A.child;
                  if (U !== null) {
                    A.child = null;
                    do {
                      var Ee = U.sibling;
                      ((U.sibling = null), (U = Ee));
                    } while (U !== null);
                  }
                }
                B = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null) ((i.return = o), (B = i));
            else
              e: for (; B !== null; ) {
                if (((o = B), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nr(9, o, o.return);
                  }
                var h = o.sibling;
                if (h !== null) {
                  ((h.return = o.return), (B = h));
                  break e;
                }
                B = o.return;
              }
          }
          var c = e.current;
          for (B = c; B !== null; ) {
            i = B;
            var v = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && v !== null) ((v.return = i), (B = v));
            else
              e: for (i = c; B !== null; ) {
                if (((s = B), (s.flags & 2048) !== 0))
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pl(9, s);
                    }
                  } catch (V) {
                    Se(s, s.return, V);
                  }
                if (s === i) {
                  B = null;
                  break e;
                }
                var T = s.sibling;
                if (T !== null) {
                  ((T.return = s.return), (B = T));
                  break e;
                }
                B = s.return;
              }
          }
          if (((ne = l), Yt(), Et && typeof Et.onPostCommitFiberRoot == 'function'))
            try {
              Et.onPostCommitFiberRoot($r, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((ue = n), (pt.transition = t));
      }
    }
    return !1;
  }
  function Qa(e, t, n) {
    ((t = $n(n, t)),
      (t = sa(e, t, 1)),
      (e = Zt(e, t, 1)),
      (t = qe()),
      e !== null && (bn(e, 1, t), et(e, t)));
  }
  function Se(e, t, n) {
    if (e.tag === 3) Qa(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Qa(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (bt === null || !bt.has(r)))
          ) {
            ((e = $n(n, e)),
              (e = ua(t, e, 1)),
              (t = Zt(t, e, 1)),
              (e = qe()),
              t !== null && (bn(t, 1, e), et(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function lf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = qe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Re === e &&
        (Me & n) === n &&
        (Pe === 4 || (Pe === 3 && (Me & 130023424) === Me && 500 > Ce() - Oi)
          ? yn(e, 0)
          : (Li |= n)),
      et(e, t));
  }
  function Ha(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Qr), (Qr <<= 1), (Qr & 130023424) === 0 && (Qr = 4194304)));
    var n = qe();
    ((e = zt(e, t)), e !== null && (bn(e, t, n), et(e, n)));
  }
  function of(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Ha(e, n));
  }
  function sf(e, t) {
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
        throw Error(u(314));
    }
    (r !== null && r.delete(t), Ha(e, n));
  }
  var Wa;
  Wa = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Xe.current) Je = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Je = !1), qd(e, t, n));
        Je = (e.flags & 131072) !== 0;
      }
    else ((Je = !1), ve && (t.flags & 1048576) !== 0 && Cu(t, dl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Nl(e, t), (e = t.pendingProps));
        var l = In(t, Ue.current);
        (An(t, n), (l = ui(null, t, r, e, l, n)));
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
              Ze(r) ? ((o = !0), ul(t)) : (o = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              ti(t),
              (l.updater = Cl),
              (t.stateNode = l),
              (l._reactInternals = t),
              hi(t, r, e, n),
              (t = _i(null, t, r, !0, o, n)))
            : ((t.tag = 0), ve && o && Wo(t), Ge(null, t, l, n), (t = t.child)),
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
            (l = t.tag = af(r)),
            (e = wt(r, e)),
            l)
          ) {
            case 0:
              t = gi(null, t, r, e, n);
              break e;
            case 1:
              t = ya(null, t, r, e, n);
              break e;
            case 11:
              t = fa(null, t, r, e, n);
              break e;
            case 14:
              t = pa(null, t, r, wt(r.type, e), n);
              break e;
          }
          throw Error(u(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : wt(r, l)),
          gi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : wt(r, l)),
          ya(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((ga(t), e === null)) throw Error(u(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            Iu(e, t),
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
              ((l = $n(Error(u(423)), t)), (t = _a(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = $n(Error(u(424)), t)), (t = _a(e, t, r, n, l)));
              break e;
            } else
              for (
                st = Gt(t.stateNode.containerInfo.firstChild),
                  it = t,
                  ve = !0,
                  _t = null,
                  n = Ou(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Dn(), r === l)) {
              t = Dt(e, t, n);
              break e;
            }
            Ge(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Du(t),
          e === null && Ko(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          Ao(r, l) ? (i = null) : o !== null && Ao(r, o) && (t.flags |= 32),
          va(e, t),
          Ge(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Ko(t), null);
      case 13:
        return wa(e, t, n);
      case 4:
        return (
          ni(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Fn(t, null, r, n)) : Ge(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : wt(r, l)),
          fa(e, t, r, l, n)
        );
      case 7:
        return (Ge(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Ge(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Ge(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (i = l.value),
            de(ml, r._currentValue),
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
                var s = o.dependencies;
                if (s !== null) {
                  i = o.child;
                  for (var a = s.firstContext; a !== null; ) {
                    if (a.context === r) {
                      if (o.tag === 1) {
                        ((a = Mt(-1, n & -n)), (a.tag = 2));
                        var y = o.updateQueue;
                        if (y !== null) {
                          y = y.shared;
                          var C = y.pending;
                          (C === null ? (a.next = a) : ((a.next = C.next), (C.next = a)),
                            (y.pending = a));
                        }
                      }
                      ((o.lanes |= n),
                        (a = o.alternate),
                        a !== null && (a.lanes |= n),
                        bo(o.return, n, t),
                        (s.lanes |= n));
                      break;
                    }
                    a = a.next;
                  }
                } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((i = o.return), i === null)) throw Error(u(341));
                  ((i.lanes |= n),
                    (s = i.alternate),
                    s !== null && (s.lanes |= n),
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
          (Ge(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          An(t, n),
          (l = dt(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ge(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = wt(r, t.pendingProps)), (l = wt(r.type, l)), pa(e, t, r, l, n));
      case 15:
        return ma(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : wt(r, l)),
          Nl(e, t),
          (t.tag = 1),
          Ze(r) ? ((e = !0), ul(t)) : (e = !1),
          An(t, n),
          oa(t, r, l),
          hi(t, r, l, n),
          _i(null, t, r, !0, e, n)
        );
      case 19:
        return xa(e, t, n);
      case 22:
        return ha(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function Ga(e, t) {
    return Es(e, t);
  }
  function uf(e, t, n, r) {
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
  function mt(e, t, n, r) {
    return new uf(e, t, n, r);
  }
  function Ai(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function af(e) {
    if (typeof e == 'function') return Ai(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Fe)) return 11;
      if (e === rt) return 14;
    }
    return 2;
  }
  function rn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = mt(e.tag, t, e.key, e.mode)),
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
    if (((r = e), typeof e == 'function')) Ai(e) && (i = 1);
    else if (typeof e == 'string') i = 5;
    else
      e: switch (e) {
        case ke:
          return _n(n.children, l, o, t);
        case fe:
          ((i = 8), (l |= 8));
          break;
        case vt:
          return ((e = mt(12, n, t, l | 2)), (e.elementType = vt), (e.lanes = o), e);
        case Be:
          return ((e = mt(13, n, t, l)), (e.elementType = Be), (e.lanes = o), e);
        case Ye:
          return ((e = mt(19, n, t, l)), (e.elementType = Ye), (e.lanes = o), e);
        case M:
          return Bl(n, l, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Le:
                i = 10;
                break e;
              case Ct:
                i = 9;
                break e;
              case Fe:
                i = 11;
                break e;
              case rt:
                i = 14;
                break e;
              case Ae:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(u(130, e == null ? e : typeof e, ''));
      }
    return ((t = mt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
  }
  function _n(e, t, n, r) {
    return ((e = mt(7, e, r, t)), (e.lanes = n), e);
  }
  function Bl(e, t, n, r) {
    return (
      (e = mt(22, e, r, t)),
      (e.elementType = M),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ui(e, t, n) {
    return ((e = mt(6, e, null, t)), (e.lanes = n), e);
  }
  function $i(e, t, n) {
    return (
      (t = mt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function cf(e, t, n, r, l) {
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
  function Vi(e, t, n, r, l, o, i, s, a) {
    return (
      (e = new cf(e, t, n, s, a)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = mt(3, null, null, t)),
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
  function df(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ie,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function qa(e) {
    if (!e) return Kt;
    e = e._reactInternals;
    e: {
      if (sn(e) !== e || e.tag !== 1) throw Error(u(170));
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
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ze(n)) return Su(e, n, t);
    }
    return t;
  }
  function Ka(e, t, n, r, l, o, i, s, a) {
    return (
      (e = Vi(n, r, !0, e, l, o, i, s, a)),
      (e.context = qa(null)),
      (n = e.current),
      (r = qe()),
      (l = tn(n)),
      (o = Mt(r, l)),
      (o.callback = t ?? null),
      Zt(n, o, l),
      (e.current.lanes = l),
      bn(e, l, r),
      et(e, r),
      e
    );
  }
  function Al(e, t, n, r) {
    var l = t.current,
      o = qe(),
      i = tn(l);
    return (
      (n = qa(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Mt(o, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Zt(l, t, i)),
      e !== null && (kt(e, l, i, o), vl(e, l, i)),
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
  function Ya(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Qi(e, t) {
    (Ya(e, t), (e = e.alternate) && Ya(e, t));
  }
  function ff() {
    return null;
  }
  var Xa =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Hi(e) {
    this._internalRoot = e;
  }
  (($l.prototype.render = Hi.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      Al(e, t, null, null);
    }),
    ($l.prototype.unmount = Hi.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (vn(function () {
            Al(null, e, null, null);
          }),
            (t[Lt] = null));
        }
      }));
  function $l(e) {
    this._internalRoot = e;
  }
  $l.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Is();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
      (Qt.splice(n, 0, e), n === 0 && Ds(e));
    }
  };
  function Wi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Vl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Za() {}
  function pf(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var y = Ul(i);
          o.call(y);
        };
      }
      var i = Ka(t, r, e, 0, null, !1, !1, '', Za);
      return (
        (e._reactRootContainer = i),
        (e[Lt] = i.current),
        pr(e.nodeType === 8 ? e.parentNode : e),
        vn(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var s = r;
      r = function () {
        var y = Ul(a);
        s.call(y);
      };
    }
    var a = Vi(e, 0, !1, null, null, !1, !1, '', Za);
    return (
      (e._reactRootContainer = a),
      (e[Lt] = a.current),
      pr(e.nodeType === 8 ? e.parentNode : e),
      vn(function () {
        Al(t, a, n, r);
      }),
      a
    );
  }
  function Ql(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == 'function') {
        var s = l;
        l = function () {
          var a = Ul(i);
          s.call(a);
        };
      }
      Al(t, i, e, l);
    } else i = pf(n, t, e, l, r);
    return Ul(i);
  }
  ((Os = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Jn(t.pendingLanes);
          n !== 0 && (ho(t, n | 1), et(t, Ce()), (ne & 6) === 0 && ((Hn = Ce() + 500), Yt()));
        }
        break;
      case 13:
        (vn(function () {
          var r = zt(e, 1);
          if (r !== null) {
            var l = qe();
            kt(r, e, 1, l);
          }
        }),
          Qi(e, 1));
    }
  }),
    (vo = function (e) {
      if (e.tag === 13) {
        var t = zt(e, 134217728);
        if (t !== null) {
          var n = qe();
          kt(t, e, 134217728, n);
        }
        Qi(e, 134217728);
      }
    }),
    (Rs = function (e) {
      if (e.tag === 13) {
        var t = tn(e),
          n = zt(e, t);
        if (n !== null) {
          var r = qe();
          kt(n, e, t, r);
        }
        Qi(e, t);
      }
    }),
    (Is = function () {
      return ue;
    }),
    (zs = function (e, t) {
      var n = ue;
      try {
        return ((ue = e), t());
      } finally {
        ue = n;
      }
    }),
    (so = function (e, t, n) {
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
                var l = il(r);
                if (!l) throw Error(u(90));
                (ls(r), bl(r, l));
              }
            }
          }
          break;
        case 'textarea':
          as(e, n);
          break;
        case 'select':
          ((t = n.value), t != null && Sn(e, !!n.multiple, t, !1));
      }
    }),
    (gs = Di),
    (_s = vn));
  var mf = { usingClientEntryPoint: !1, Events: [vr, On, il, vs, ys, Di] },
    Lr = {
      findFiberByHostInstance: un,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    hf = {
      bundleType: Lr.bundleType,
      version: Lr.version,
      rendererPackageName: Lr.rendererPackageName,
      rendererConfig: Lr.rendererConfig,
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
        return ((e = ks(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Lr.findFiberByHostInstance || ff,
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
        (($r = Hl.inject(hf)), (Et = Hl));
      } catch {}
  }
  return (
    (tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mf),
    (tt.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Wi(t)) throw Error(u(200));
      return df(e, t, null, n);
    }),
    (tt.createRoot = function (e, t) {
      if (!Wi(e)) throw Error(u(299));
      var n = !1,
        r = '',
        l = Xa;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Vi(e, 1, !1, null, null, n, !1, r, l)),
        (e[Lt] = t.current),
        pr(e.nodeType === 8 ? e.parentNode : e),
        new Hi(t)
      );
    }),
    (tt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(u(188))
          : ((e = Object.keys(e).join(',')), Error(u(268, e)));
      return ((e = ks(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (tt.flushSync = function (e) {
      return vn(e);
    }),
    (tt.hydrate = function (e, t, n) {
      if (!Vl(t)) throw Error(u(200));
      return Ql(null, e, t, !0, n);
    }),
    (tt.hydrateRoot = function (e, t, n) {
      if (!Wi(e)) throw Error(u(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        i = Xa;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Ka(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[Lt] = t.current),
        pr(e),
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
      if (!Vl(t)) throw Error(u(200));
      return Ql(null, e, t, !1, n);
    }),
    (tt.unmountComponentAtNode = function (e) {
      if (!Vl(e)) throw Error(u(40));
      return e._reactRootContainer
        ? (vn(function () {
            Ql(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Lt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (tt.unstable_batchedUpdates = Di),
    (tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Vl(n)) throw Error(u(200));
      if (e == null || e._reactInternals === void 0) throw Error(u(38));
      return Ql(e, t, n, !1, r);
    }),
    (tt.version = '18.3.1-next-f1338f8080-20240426'),
    tt
  );
}
var oc;
function kf() {
  if (oc) return Ki.exports;
  oc = 1;
  function m() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
      } catch (f) {
        console.error(f);
      }
  }
  return (m(), (Ki.exports = xf()), Ki.exports);
}
var ic;
function Cf() {
  if (ic) return Wl;
  ic = 1;
  var m = kf();
  return ((Wl.createRoot = m.createRoot), (Wl.hydrateRoot = m.hydrateRoot), Wl);
}
var Ef = Cf();
const Nf = [
    {
      id: 'animal',
      type: 'selection',
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
      type: 'credence',
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
  ac = { questions: Nf },
  jf = {
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
  Pf = { equal: 33, '10x': 33, '100x': 34 },
  es = { causes: jf, defaultCredences: Pf },
  Tf = { resetButton: !1, sliderLock: !1 },
  ts = { ui: Tf },
  sc = {
    default: ['#81B29A', '#98C1D9', '#E07A5F'],
    selection: ['#81B29A', '#98C1D9', '#E07A5F'],
    credence: ['#81B29A', '#98C1D9', '#E07A5F'],
  },
  Lf = '#81B29A',
  Of = { OPTIONS: 'options' },
  Ke = {
    DEFAULT: 'default',
    SELECTION: 'selection',
    CREDENCE: 'credence',
    INTERMISSION: 'intermission',
  },
  { causes: Kl } = es;
function cc(m = !1) {
  return Object.fromEntries(
    ac.questions
      .filter((f) => f.type !== 'intermission' && f.worldviewDimension)
      .map((f) => [
        f.id,
        m ? { ...f.worldviewDimension, name: f.editPanelTitle } : f.worldviewDimension,
      ])
  );
}
const Yl = cc();
function* Xl(m) {
  const f = Object.keys(m);
  if (f.length === 0) return;
  const u = Object.keys(m[f[0]]);
  function* g(S, j) {
    if (S === f.length) {
      let P = 1;
      for (const w of f) P *= m[w][j[w]] / 100;
      yield { options: j, probability: P };
      return;
    }
    const L = f[S];
    for (const P of u) yield* g(S + 1, { ...j, [L]: P });
  }
  yield* g(0, {});
}
function Rf(m, f, u) {
  let g = m.points;
  for (const [S, j] of Object.entries(u)) {
    const L = f[S],
      P = j.options[L];
    if (j.applyAs === 'multiplier') j.appliesWhen && m[j.appliesWhen] && (g *= P);
    else if (j.applyAs === 'exponent' && j.appliesTo) {
      const w = m[j.appliesTo] || 1;
      g *= Math.pow(w, P);
    }
  }
  return g;
}
function Zl(m, f, u) {
  const g = {};
  for (const [S, j] of Object.entries(f)) g[S] = Rf(j, m, u);
  return g;
}
function dc(m) {
  const f = Math.max(...Object.values(m));
  return Object.keys(m).filter((u) => Math.abs(m[u] - f) < 1e-4);
}
function ns(m) {
  return Object.fromEntries(Object.keys(m).map((f) => [f, 0]));
}
function If(m, f) {
  const u = (f == null ? void 0 : f.causes) || Kl,
    g = (f == null ? void 0 : f.dimensions) || Yl,
    S = ns(u);
  for (const { options: P, probability: w } of Xl(m)) {
    const E = Zl(P, u, g);
    for (const [O, I] of Object.entries(E)) S[O] += w * I;
  }
  const j = Object.keys(S).reduce((P, w) => (S[P] > S[w] ? P : w)),
    L = { evs: S };
  for (const P of Object.keys(u)) L[P] = P === j ? 100 : 0;
  return L;
}
function zf(m, f) {
  const u = (f == null ? void 0 : f.causes) || Kl,
    g = (f == null ? void 0 : f.dimensions) || Yl,
    S = ns(u);
  for (const { options: L, probability: P } of Xl(m)) {
    const w = Zl(L, u, g),
      E = dc(w),
      O = P / E.length;
    for (const I of E) S[I] += O;
  }
  const j = {};
  for (const L of Object.keys(u)) j[L] = S[L] * 100;
  return j;
}
function Mf(m, f) {
  const u = (f == null ? void 0 : f.causes) || Kl,
    g = (f == null ? void 0 : f.dimensions) || Yl,
    S = ns(u);
  for (const { options: j, probability: L } of Xl(m)) {
    const P = Zl(j, u, g),
      w = dc(P),
      E = (L * 100) / w.length;
    for (const O of w) S[O] += E;
  }
  return S;
}
function Df(m, f) {
  const u = (f == null ? void 0 : f.causes) || Kl,
    g = (f == null ? void 0 : f.dimensions) || Yl,
    S = Object.keys(u),
    j = Ff(S);
  let L = j[0],
    P = -1 / 0;
  for (const w of j) {
    let E = 1 / 0;
    for (const { options: O, probability: I } of Xl(m)) {
      if (I < 0.001) continue;
      const $ = Zl(O, u, g);
      let Q = 0;
      for (const b of S) Q += $[b] * (w[b] / 100);
      E = Math.min(E, Q);
    }
    E > P && ((P = E), (L = { ...w }));
  }
  return L;
}
function Ff(m) {
  const f = [],
    u = m.length,
    g = (w) => {
      const E = {};
      return (
        m.forEach((O, I) => {
          E[O] = w[I];
        }),
        E
      );
    };
  for (let w = 0; w < u; w++) {
    const E = new Array(u).fill(0);
    ((E[w] = 100), f.push(g(E)));
  }
  for (let w = 0; w < u; w++)
    for (let E = w + 1; E < u; E++) {
      const O = new Array(u).fill(0);
      ((O[w] = 50), (O[E] = 50), f.push(g(O)));
    }
  const S = Math.floor(100 / u),
    j = 100 - S * u,
    L = new Array(u).fill(S);
  ((L[0] += j), f.push(g(L)));
  const P = [
    [60, 20, 20],
    [70, 15, 15],
    [80, 10, 10],
  ];
  for (const w of P)
    if (w.length === u)
      for (let E = 0; E < u; E++) {
        const O = new Array(u).fill(0);
        O[E] = w[0];
        let I = 1;
        for (let $ = 0; $ < u; $++) $ !== E && I < w.length && (O[$] = w[I++]);
        f.push(g(O));
      }
  return f;
}
function fc(m, f, u, g = null, S = null) {
  const j = S ? u[S] : 0,
    L = 100 - j;
  f = Math.max(0, Math.min(L, f));
  const P = g || u,
    w = Object.keys(u).filter(($) => $ !== m && $ !== S),
    E = w.reduce(($, Q) => $ + P[Q], 0),
    O = 100 - f - j,
    I = { [m]: f };
  if ((S && (I[S] = u[S]), E === 0)) {
    const $ = Math.floor(O / w.length);
    let Q = O - $ * w.length;
    w.forEach((b, F) => {
      I[b] = $ + (F < Q ? 1 : 0);
    });
  } else {
    let $ = 0;
    w.forEach((Q, b) => {
      if (b === w.length - 1) I[Q] = Math.max(0, O - $);
      else {
        const F = P[Q] / E,
          G = O * F;
        ((I[Q] = Math.max(0, G)), ($ += I[Q]));
      }
    });
  }
  return I;
}
function pc(m) {
  const f = Object.keys(m),
    u = {};
  let g = 0;
  return (
    f.slice(0, -1).forEach((S) => {
      ((u[S] = Math.round(m[S])), (g += u[S]));
    }),
    (u[f[f.length - 1]] = 100 - g),
    u
  );
}
const { questions: mc } = ac,
  { causes: Bf, defaultCredences: Zi } = es,
  We = mc,
  Af = mc.filter((m) => m.type !== Ke.INTERMISSION);
function At(m) {
  return (m == null ? void 0 : m.type) === Ke.INTERMISSION;
}
function Uf(m) {
  {
    const f = m.type || Ke.DEFAULT;
    return sc[f] || sc[Ke.DEFAULT];
  }
}
const uc = We.map((m) => {
  if (At(m)) return { ...m, type: Ke.INTERMISSION };
  const f = Uf(m);
  return {
    ...m,
    type: m.type || Ke.DEFAULT,
    options: m.options.map((u, g) => ({ ...u, color: f[g] || f[0] })),
  };
});
function $f() {
  return { credences: { ...Zi }, originalCredences: null, inputMode: Of.OPTIONS, lockedKey: null };
}
function hc() {
  return Object.fromEntries(We.filter((m) => !At(m)).map((m) => [m.id, $f()]));
}
const vc = { currentStep: 'welcome', questions: hc(), expandedPanel: null, debugConfig: null },
  nt = {
    GO_TO_STEP: 'GO_TO_STEP',
    UPDATE_QUESTION: 'UPDATE_QUESTION',
    SET_EXPANDED_PANEL: 'SET_EXPANDED_PANEL',
    SAVE_ORIGINALS: 'SAVE_ORIGINALS',
    RESET_TO_ORIGINAL: 'RESET_TO_ORIGINAL',
    RESET_QUIZ: 'RESET_QUIZ',
    SET_DEBUG_CONFIG: 'SET_DEBUG_CONFIG',
  };
function Vf(m, f, u) {
  return { ...m, questions: { ...m.questions, [f]: { ...m.questions[f], ...u } } };
}
function Qf(m, f) {
  switch (f.type) {
    case nt.GO_TO_STEP:
      return { ...m, currentStep: f.payload };
    case nt.UPDATE_QUESTION:
      return Vf(m, f.payload.questionId, f.payload.updates);
    case nt.SET_EXPANDED_PANEL:
      return { ...m, expandedPanel: f.payload };
    case nt.SAVE_ORIGINALS:
      return {
        ...m,
        questions: Object.fromEntries(
          Object.entries(m.questions).map(([u, g]) => [
            u,
            { ...g, originalCredences: g.originalCredences || { ...g.credences } },
          ])
        ),
      };
    case nt.RESET_TO_ORIGINAL:
      return {
        ...m,
        questions: Object.fromEntries(
          Object.entries(m.questions).map(([u, g]) => [
            u,
            { ...g, credences: g.originalCredences ? { ...g.originalCredences } : g.credences },
          ])
        ),
      };
    case nt.RESET_QUIZ:
      return { ...vc, questions: hc() };
    case nt.SET_DEBUG_CONFIG:
      return { ...m, debugConfig: f.payload };
    default:
      return m;
  }
}
const yc = K.createContext(null);
function Hf({ children: m }) {
  const [f, u] = K.useReducer(Qf, vc),
    g = K.useCallback((M) => {
      u({ type: nt.GO_TO_STEP, payload: M });
    }, []),
    S = K.useCallback((M, _) => {
      u({ type: nt.UPDATE_QUESTION, payload: { questionId: M, updates: _ } });
    }, []),
    j = K.useCallback((M, _) => S(M, { credences: _ }), [S]),
    L = K.useCallback((M, _) => S(M, { inputMode: _ }), [S]),
    P = K.useCallback((M, _) => S(M, { lockedKey: _ }), [S]),
    w = K.useCallback((M) => {
      u({ type: nt.SET_EXPANDED_PANEL, payload: M });
    }, []),
    E = K.useCallback(() => {
      u({ type: nt.SAVE_ORIGINALS });
    }, []),
    O = K.useCallback(() => {
      u({ type: nt.RESET_TO_ORIGINAL });
    }, []),
    I = K.useCallback(() => {
      u({ type: nt.RESET_QUIZ });
    }, []),
    $ = K.useCallback((M) => {
      u({ type: nt.SET_DEBUG_CONFIG, payload: M });
    }, []),
    Q = K.useCallback((M) => We.findIndex((_) => _.id === M), []),
    b = K.useCallback(
      (M) => {
        const _ = Q(M);
        return _ === 0 ? 'welcome' : We[_ - 1].id;
      },
      [Q]
    ),
    F = K.useCallback(
      (M) => {
        const _ = Q(M);
        return _ === We.length - 1 ? 'results' : We[_ + 1].id;
      },
      [Q]
    ),
    G = K.useCallback(() => {
      g(We[0].id);
    }, [g]),
    Z = K.useCallback(() => {
      if (f.currentStep === 'results') g(We[We.length - 1].id);
      else {
        const M = b(f.currentStep);
        g(M);
      }
    }, [f.currentStep, g, b]),
    ae = K.useCallback(() => {
      const M = F(f.currentStep);
      (M === 'results' && E(), g(M));
    }, [f.currentStep, g, F, E]),
    J = K.useCallback(
      (M) => {
        var p;
        const _ = M === 'original' ? 'originalCredences' : 'credences',
          D = We.filter((x) => !At(x)),
          R = f.questions[(p = D[0]) == null ? void 0 : p.id];
        return M === 'original' && !(R != null && R.originalCredences)
          ? null
          : Object.fromEntries(
              D.map((x) => {
                var X;
                return [x.id, ((X = f.questions[x.id]) == null ? void 0 : X[_]) || Zi];
              })
            );
      },
      [f.questions]
    ),
    Y = K.useCallback(
      (M, _) =>
        M
          ? { maxEV: If(M, _), parliament: zf(M, _), mergedFavorites: Mf(M, _), maximin: Df(M, _) }
          : null,
      []
    ),
    ge = K.useMemo(() => Y(J('current'), f.debugConfig), [J, Y, f.debugConfig]),
    ie = K.useMemo(() => Y(J('original'), f.debugConfig), [J, Y, f.debugConfig]),
    ke = K.useMemo(
      () =>
        Object.values(f.questions).some(
          (M) =>
            M.originalCredences &&
            JSON.stringify(M.credences) !== JSON.stringify(M.originalCredences)
        ),
      [f.questions]
    ),
    fe = K.useMemo(() => Q(f.currentStep), [f.currentStep, Q]),
    vt = K.useMemo(() => (fe === -1 ? null : uc[fe]), [fe]),
    Le = Af.length,
    Ct = K.useCallback(
      (M) => {
        const _ = Q(M);
        if (_ === -1) return -1;
        let D = 0;
        for (let R = 0; R <= _; R++) At(We[R]) || D++;
        return D;
      },
      [Q]
    ),
    Fe = K.useMemo(() => Ct(f.currentStep), [f.currentStep, Ct]),
    Be = K.useMemo(() => {
      if (Fe === -1) return 0;
      const M = We[fe];
      if (At(M)) {
        let _ = 0;
        for (let D = 0; D < fe; D++) At(We[D]) || _++;
        return (_ / Le) * 100;
      }
      return (Fe / Le) * 100;
    }, [Fe, fe, Le]),
    Ye = K.useMemo(() => {
      if (fe === -1) return '';
      const M = We[fe];
      if (At(M)) {
        let _ = 0;
        for (let D = 0; D < fe; D++) At(We[D]) || _++;
        return `Question ${_} of ${Le}`;
      }
      return `Question ${Fe} of ${Le}`;
    }, [fe, Fe, Le]),
    rt = K.useMemo(() => {
      const M = {};
      return (
        We.filter((_) => !At(_)).forEach((_) => {
          const D = f.questions[_.id];
          D &&
            (M[_.id] = {
              credences: D.credences,
              setCredences: (R) => j(_.id, R),
              originalCredences: D.originalCredences,
              inputMode: D.inputMode,
              setInputMode: (R) => L(_.id, R),
              lockedKey: D.lockedKey,
              setLockedKey: (R) => P(_.id, R),
            });
        }),
        M
      );
    }, [f.questions, j, L, P]),
    Ae = K.useMemo(
      () => ({
        currentStep: f.currentStep,
        questions: f.questions,
        expandedPanel: f.expandedPanel,
        debugConfig: f.debugConfig,
        questionsConfig: uc,
        causesConfig: Bf,
        defaultCredences: Zi,
        goToStep: g,
        setCredences: j,
        setInputMode: L,
        setLockedKey: P,
        setExpandedPanel: w,
        saveOriginals: E,
        resetToOriginal: O,
        resetQuiz: I,
        setDebugConfig: $,
        getQuestionIndex: Q,
        getPrevStep: b,
        getNextStep: F,
        startQuiz: G,
        goBack: Z,
        goForward: ae,
        currentQuestion: vt,
        currentQuestionIndex: fe,
        totalQuestions: Le,
        progressPercentage: Be,
        questionNumber: Ye,
        hasChanged: ke,
        calculationResults: ge,
        originalCalculationResults: ie,
        stateMap: rt,
      }),
      [
        f.currentStep,
        f.questions,
        f.expandedPanel,
        f.debugConfig,
        g,
        j,
        L,
        P,
        w,
        E,
        O,
        I,
        $,
        Q,
        b,
        F,
        G,
        Z,
        ae,
        vt,
        fe,
        Le,
        Be,
        Ye,
        ke,
        ge,
        ie,
        rt,
      ]
    );
  return d.jsx(yc.Provider, { value: Ae, children: m });
}
const Wf = { title: 'Moral Parliament' },
  Gf = {
    timeEstimate: '~3 minutes',
    headingLine1: 'Where Should Your',
    headingLine2: 'Giving Go?',
    intro:
      'Uncertain about your ethical views? This tool helps you allocate resources across different causes based on your moral credences—the probabilities you assign to different ethical perspectives.',
    startButton: 'Start Quiz →',
    previewLabel: "You'll be asked about:",
  },
  qf = { back: '← Back', continue: 'Continue →', backToQuiz: '← Back to Quiz' },
  Kf = { modeToggle: { pickOne: 'Pick One', customMix: 'Custom Mix' } },
  Yf = {
    heading: 'Recommended Allocations',
    modifiedIndicator: '(modified)',
    adjustCredencesHeading: '🎛️ Adjust Your Credences',
    resetAllButton: 'Reset All',
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
  Xf = {
    modifiedBadge: 'modified',
    sliderNote: 'Sliders auto-balance to 100%',
    resetButton: 'Reset',
  },
  ye = {
    branding: Wf,
    welcome: Gf,
    navigation: qf,
    questionScreen: Kf,
    results: Yf,
    editPanel: Xf,
  },
  rs = ({ subtitle: m }) =>
    d.jsxs('header', {
      className: 'header',
      children: [
        d.jsx('div', { className: 'header-title', children: ye.branding.title }),
        m && d.jsx('div', { className: 'header-subtitle', children: m }),
      ],
    });
function Ir() {
  const m = K.useContext(yc);
  if (!m) throw new Error('useQuiz must be used within a QuizProvider');
  return m;
}
const Zf = '_container_11wow_3',
  Jf = '_heading_11wow_8',
  bf = '_headingEmphasis_11wow_16',
  ep = '_intro_11wow_24',
  tp = '_infoBox_11wow_32',
  np = '_infoBoxLabel_11wow_40',
  rp = '_infoBoxGrid_11wow_47',
  lp = '_infoBoxItem_11wow_54',
  on = {
    container: Zf,
    heading: Jf,
    headingEmphasis: bf,
    intro: ep,
    infoBox: tp,
    infoBoxLabel: np,
    infoBoxGrid: rp,
    infoBoxItem: lp,
  },
  op = () => {
    const { questionsConfig: m, startQuiz: f } = Ir();
    return d.jsxs('div', {
      className: 'screen',
      children: [
        d.jsx(rs, { subtitle: ye.welcome.timeEstimate }),
        d.jsx('main', {
          className: 'screen-main',
          children: d.jsxs('div', {
            className: on.container,
            children: [
              d.jsxs('h1', {
                className: on.heading,
                children: [
                  ye.welcome.headingLine1,
                  d.jsx('br', {}),
                  d.jsx('span', {
                    className: on.headingEmphasis,
                    children: ye.welcome.headingLine2,
                  }),
                ],
              }),
              d.jsx('p', { className: on.intro, children: ye.welcome.intro }),
              d.jsx('button', {
                onClick: f,
                className: 'btn btn-primary',
                children: ye.welcome.startButton,
              }),
              d.jsxs('div', {
                className: on.infoBox,
                children: [
                  d.jsx('div', { className: on.infoBoxLabel, children: ye.welcome.previewLabel }),
                  d.jsx('div', {
                    className: on.infoBoxGrid,
                    children: m
                      .filter((u) => u.type !== Ke.INTERMISSION)
                      .map((u) =>
                        d.jsxs(
                          'div',
                          { className: on.infoBoxItem, children: [u.emoji, ' ', u.previewText] },
                          u.id
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
  },
  gc = ({ percentage: m }) =>
    d.jsx('div', {
      className: 'progress-container',
      children: d.jsx('div', {
        className: 'progress-track',
        children: d.jsx('div', { className: 'progress-fill', style: { width: `${m}%` } }),
      }),
    });
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ip = (m) => m.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  _c = (...m) =>
    m
      .filter((f, u, g) => !!f && f.trim() !== '' && g.indexOf(f) === u)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var sp = {
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
 */ const up = K.forwardRef(
  (
    {
      color: m = 'currentColor',
      size: f = 24,
      strokeWidth: u = 2,
      absoluteStrokeWidth: g,
      className: S = '',
      children: j,
      iconNode: L,
      ...P
    },
    w
  ) =>
    K.createElement(
      'svg',
      {
        ref: w,
        ...sp,
        width: f,
        height: f,
        stroke: m,
        strokeWidth: g ? (Number(u) * 24) / Number(f) : u,
        className: _c('lucide', S),
        ...P,
      },
      [...L.map(([E, O]) => K.createElement(E, O)), ...(Array.isArray(j) ? j : [j])]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zr = (m, f) => {
  const u = K.forwardRef(({ className: g, ...S }, j) =>
    K.createElement(up, { ref: j, iconNode: f, className: _c(`lucide-${ip(m)}`, g), ...S })
  );
  return ((u.displayName = `${m}`), u);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ap = zr('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cp = zr('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dp = zr('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ji = zr('RotateCcw', [
  ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
  ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fp = zr('SlidersVertical', [
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
  pp = '_modeToggle_modhv_3',
  mp = '_button_modhv_10',
  hp = '_options_modhv_23',
  vp = '_active_modhv_29',
  yp = '_sliders_modhv_35',
  wn = { modeToggle: pp, button: mp, options: hp, active: vp, sliders: yp },
  gp = ({ mode: m, setMode: f }) =>
    d.jsxs('div', {
      className: wn.modeToggle,
      children: [
        d.jsx('button', {
          onClick: () => f('options'),
          className: `${wn.button} ${wn.options} ${m === 'options' ? wn.active : ''}`,
          children: ye.questionScreen.modeToggle.pickOne,
        }),
        d.jsxs('button', {
          onClick: () => f('sliders'),
          className: `${wn.button} ${wn.sliders} ${m === 'sliders' ? wn.active : ''}`,
          children: [d.jsx(fp, { size: 14 }), ye.questionScreen.modeToggle.customMix],
        }),
      ],
    }),
  _p = '_optionButton_xv4xt_3',
  wp = '_selected_xv4xt_20',
  Sp = '_content_xv4xt_34',
  xp = '_textContent_xv4xt_40',
  kp = '_label_xv4xt_44',
  Cp = '_description_xv4xt_56',
  Ep = '_checkmark_xv4xt_62',
  Bt = {
    optionButton: _p,
    default: '_default_xv4xt_15',
    selected: wp,
    content: Sp,
    textContent: xp,
    label: kp,
    description: Cp,
    checkmark: Ep,
  },
  Np = ({
    label: m,
    description: f,
    optionKey: u,
    credences: g,
    setCredences: S,
    color: j,
    setInputMode: L,
  }) => {
    const P = g[u] === 100,
      w = () => {
        const E = { equal: 0, '10x': 0, '100x': 0 };
        ((E[u] = 100), S(E), L('options'));
      };
    return d.jsx('button', {
      onClick: w,
      className: `${Bt.optionButton} ${P ? Bt.selected : Bt.default}`,
      style: { '--option-color': j },
      children: d.jsxs('div', {
        className: Bt.content,
        children: [
          d.jsxs('div', {
            className: Bt.textContent,
            children: [
              d.jsx('div', { className: `${Bt.label} ${P ? Bt.selected : ''}`, children: m }),
              d.jsx('div', { className: Bt.description, children: f }),
            ],
          }),
          P && d.jsx('div', { className: Bt.checkmark, children: '✓' }),
        ],
      }),
    });
  },
  jp = '_credenceSlider_yrqg7_4',
  Pp = '_header_yrqg7_8',
  Tp = '_label_yrqg7_15',
  Lp = '_description_yrqg7_22',
  Op = '_value_yrqg7_28',
  Rp = '_sliderRow_yrqg7_35',
  Ip = '_sliderContainer_yrqg7_41',
  zp = '_lockLimit_yrqg7_46',
  Mp = '_compactSlider_yrqg7_91',
  Dp = '_compactSelection_yrqg7_168',
  Fp = '_selected_yrqg7_186',
  Bp = '_selectionLabel_yrqg7_191',
  Ap = '_selectionIndicator_yrqg7_202',
  Te = {
    credenceSlider: jp,
    header: Pp,
    label: Tp,
    description: Lp,
    value: Op,
    sliderRow: Rp,
    sliderContainer: Ip,
    lockLimit: zp,
    compactSlider: Mp,
    compactSelection: Dp,
    selected: Fp,
    selectionLabel: Bp,
    selectionIndicator: Ap,
  },
  Up = ({
    label: m,
    description: f,
    value: u,
    onChange: g,
    color: S,
    credences: j,
    sliderKey: L,
    lockedKey: P,
    setLockedKey: w,
  }) => {
    var ge;
    const [E, O] = K.useState(null),
      [I, $] = K.useState(!1),
      Q = P === L,
      b = P && P !== L,
      F = b ? j[P] : 0,
      G = b ? 100 - F : 100,
      Z = b ? `calc(${G}% + ${(50 - G) * 0.16}px)` : null,
      ae = () => {
        Q || ($(!0), O({ ...j }));
      },
      J = (ie) => {
        if (Q || !I) return;
        $(!1);
        const ke = parseFloat(ie.target.value);
        (g(ke, E, !0, P), O(null));
      },
      Y = (ie) => {
        if (Q) return;
        const ke = parseFloat(ie.target.value);
        g(ke, E, !1, P);
      };
    return d.jsxs('div', {
      className: Te.credenceSlider,
      children: [
        d.jsxs('div', {
          className: Te.header,
          children: [
            d.jsxs('div', {
              children: [
                d.jsx('div', { className: Te.label, children: m }),
                d.jsx('div', { className: Te.description, children: f }),
              ],
            }),
            d.jsxs('div', {
              className: Te.value,
              style: { color: S },
              children: [Math.round(u), '%'],
            }),
          ],
        }),
        d.jsxs('div', {
          className: Te.sliderRow,
          children: [
            d.jsxs('div', {
              className: Te.sliderContainer,
              children: [
                d.jsx('input', {
                  type: 'range',
                  min: '0',
                  max: '100',
                  step: 'any',
                  value: u,
                  onChange: Y,
                  onMouseDown: ae,
                  onMouseUp: J,
                  onMouseLeave: J,
                  onTouchStart: ae,
                  onTouchEnd: J,
                  'data-dragging': I,
                  disabled: Q,
                  style: {
                    background: b
                      ? `linear-gradient(to right, ${S} 0%, ${S} ${u}%, rgba(255,255,255,0.15) ${u}%, rgba(255,255,255,0.15) ${Z}, rgba(255,255,255,0.08) ${Z}, rgba(255,255,255,0.08) 100%)`
                      : `linear-gradient(to right, ${S} 0%, ${S} ${u}%, rgba(255,255,255,0.15) ${u}%, rgba(255,255,255,0.15) 100%)`,
                    cursor: Q ? 'not-allowed' : 'pointer',
                  },
                }),
                b && d.jsx('div', { className: Te.lockLimit, style: { left: Z } }),
              ],
            }),
            (ge = ts.ui) == null ? void 0 : ge.sliderLock,
          ],
        }),
      ],
    });
  },
  $p = '_container_9yo3m_3',
  Vp = '_categoryLabel_9yo3m_8',
  Qp = '_heading_9yo3m_16',
  Hp = '_instructions_9yo3m_23',
  Wp = '_buttonRow_9yo3m_30',
  Rr = { container: $p, categoryLabel: Vp, heading: Qp, instructions: Hp, buttonRow: Wp },
  Gp = () => {
    const {
      currentQuestion: m,
      stateMap: f,
      questionNumber: u,
      progressPercentage: g,
      goBack: S,
      goForward: j,
    } = Ir();
    if (!m) return null;
    const L = f[m.id];
    if (!L) return null;
    const {
        credences: P,
        setCredences: w,
        inputMode: E,
        setInputMode: O,
        lockedKey: I,
        setLockedKey: $,
      } = L,
      Q = m.type || Ke.DEFAULT,
      b = Q === Ke.DEFAULT;
    let F = E;
    Q === Ke.SELECTION ? (F = 'options') : Q === Ke.CREDENCE && (F = 'sliders');
    const G = F === 'options' ? m.instructionsOptions : m.instructionsSliders;
    return d.jsxs('div', {
      className: 'screen',
      children: [
        d.jsx(rs, { subtitle: u }),
        d.jsx(gc, { percentage: g }),
        d.jsx('main', {
          className: 'screen-main',
          children: d.jsxs('div', {
            className: Rr.container,
            children: [
              d.jsx('div', {
                className: Rr.categoryLabel,
                style: { color: Lf },
                children: m.categoryLabel,
              }),
              d.jsx('h2', { className: Rr.heading, children: m.heading }),
              d.jsx('p', { className: Rr.instructions, children: G }),
              b && d.jsx(gp, { mode: E, setMode: O }),
              d.jsx('div', {
                className: 'card',
                children:
                  F === 'options'
                    ? d.jsx(d.Fragment, {
                        children: m.options.map((Z) =>
                          d.jsx(
                            Np,
                            {
                              label: Z.label,
                              description: Z.description,
                              optionKey: Z.key,
                              credences: P,
                              setCredences: w,
                              color: Z.color,
                              setInputMode: O,
                            },
                            Z.key
                          )
                        ),
                      })
                    : d.jsx(d.Fragment, {
                        children: m.options.map((Z) =>
                          d.jsx(
                            Up,
                            {
                              label: Z.label,
                              description: Z.description,
                              value: P[Z.key],
                              onChange: (ae, J, Y, ge) => {
                                const ie = fc(Z.key, ae, P, J, ge);
                                w(Y ? pc(ie) : ie);
                              },
                              color: Z.color,
                              credences: P,
                              sliderKey: Z.key,
                              lockedKey: I,
                              setLockedKey: $,
                            },
                            Z.key
                          )
                        ),
                      }),
              }),
              d.jsxs('div', {
                className: Rr.buttonRow,
                children: [
                  d.jsx('button', {
                    onClick: S,
                    className: 'btn btn-secondary',
                    children: ye.navigation.back,
                  }),
                  d.jsx('button', {
                    onClick: j,
                    className: 'btn btn-primary',
                    children: ye.navigation.continue,
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  qp = '_causeBar_1uovs_3',
  Kp = '_header_1uovs_7',
  Yp = '_name_1uovs_15',
  Xp = '_percentage_1uovs_19',
  Zp = '_changeIndicator_1uovs_23',
  Jp = '_up_1uovs_27',
  bp = '_down_1uovs_31',
  em = '_barTrack_1uovs_35',
  tm = '_barOriginal_1uovs_43',
  nm = '_barFill_1uovs_49',
  rm = '_barLabel_1uovs_58',
  lm = '_compact_1uovs_65',
  ht = {
    causeBar: qp,
    header: Kp,
    name: Yp,
    percentage: Xp,
    changeIndicator: Zp,
    up: Jp,
    down: bp,
    barTrack: em,
    barOriginal: tm,
    barFill: nm,
    barLabel: rm,
    compact: lm,
  },
  om = ({
    name: m,
    percentage: f,
    color: u,
    originalPercentage: g = null,
    hasChanged: S = !1,
    simpleMode: j = !1,
  }) => {
    const L = !j && S && g !== null && f !== g,
      P = L && f > g;
    return d.jsxs('div', {
      className: `${ht.causeBar} ${j ? ht.compact : ''}`,
      children: [
        d.jsxs('div', {
          className: ht.header,
          children: [
            d.jsx('span', { className: ht.name, children: m }),
            d.jsxs('span', {
              className: ht.percentage,
              style: { color: u },
              children: [
                f.toFixed(0),
                '%',
                L &&
                  d.jsx('span', {
                    className: `${ht.changeIndicator} ${P ? ht.up : ht.down}`,
                    children: P ? '↑' : '↓',
                  }),
              ],
            }),
          ],
        }),
        d.jsxs('div', {
          className: ht.barTrack,
          children: [
            L &&
              d.jsx('div', { className: ht.barOriginal, style: { width: `${g}%`, background: u } }),
            d.jsx('div', {
              className: ht.barFill,
              style: { width: `${f}%`, background: u },
              children:
                f > 15 && d.jsxs('span', { className: ht.barLabel, children: [f.toFixed(0), '%'] }),
            }),
          ],
        }),
      ],
    });
  },
  im = '_resultsContainer_13dv0_3',
  sm = '_inner_13dv0_11',
  um = '_header_13dv0_16',
  am = '_title_13dv0_21',
  cm = '_modifiedIndicator_13dv0_27',
  dm = '_resultsGrid_13dv0_34',
  fm = '_comparisonContainer_13dv0_42',
  pm = '_originalResults_13dv0_49',
  mm = '_newResults_13dv0_50',
  hm = '_slideInLeft_13dv0_1',
  vm = '_slideInRight_13dv0_1',
  ym = '_comparisonDivider_13dv0_85',
  gm = '_dividerLine_13dv0_94',
  _m = '_dividerArrow_13dv0_101',
  wm = '_compactGrid_13dv0_108',
  Sm = '_compactCard_13dv0_114',
  xm = '_cardHeader_13dv0_118',
  km = '_cardIcon_13dv0_122',
  Cm = '_cardTitle_13dv0_128',
  Em = '_resultCard_13dv0_132',
  Nm = '_maxEV_13dv0_156',
  jm = '_parliament_13dv0_160',
  Pm = '_cardSubtitle_13dv0_171',
  Tm = '_cardFooter_13dv0_177',
  Lm = '_adjustPanel_13dv0_185',
  Om = '_adjustHeader_13dv0_193',
  Rm = '_adjustTitle_13dv0_200',
  Im = '_resetAllButton_13dv0_206',
  zm = '_panelList_13dv0_223',
  Mm = '_backButtonContainer_13dv0_229',
  Dm = '_backButton_13dv0_229',
  Fm = '_resetButton_13dv0_254',
  xe = {
    resultsContainer: im,
    inner: sm,
    header: um,
    title: am,
    modifiedIndicator: cm,
    resultsGrid: dm,
    comparisonContainer: fm,
    originalResults: pm,
    newResults: mm,
    slideInLeft: hm,
    slideInRight: vm,
    comparisonDivider: ym,
    dividerLine: gm,
    dividerArrow: _m,
    compactGrid: wm,
    compactCard: Sm,
    cardHeader: xm,
    cardIcon: km,
    cardTitle: Cm,
    resultCard: Em,
    maxEV: Nm,
    parliament: jm,
    cardSubtitle: Pm,
    cardFooter: Tm,
    adjustPanel: Lm,
    adjustHeader: Om,
    adjustTitle: Rm,
    resetAllButton: Im,
    panelList: zm,
    backButtonContainer: Mm,
    backButton: Dm,
    resetButton: Fm,
  },
  ql = ({
    methodKey: m,
    results: f,
    evs: u = null,
    originalResults: g = null,
    causeEntries: S,
    hasChanged: j = !1,
    simpleMode: L = !1,
  }) => {
    const P = ye.results.methods[m],
      w = m === 'mergedFavorites' ? 'merged' : m;
    return d.jsxs('div', {
      className: `${xe.resultCard} ${L ? xe.compactCard : ''}`,
      children: [
        d.jsxs('div', {
          className: xe.cardHeader,
          children: [
            d.jsx('div', { className: `${xe.cardIcon} ${xe[w]}`, children: P.icon }),
            d.jsxs('div', {
              children: [
                d.jsx('h3', { className: xe.cardTitle, children: P.title }),
                !L && d.jsx('p', { className: xe.cardSubtitle, children: P.subtitle }),
              ],
            }),
          ],
        }),
        S.map(([E, O]) =>
          d.jsx(
            om,
            {
              name: O.name,
              percentage: f[E],
              originalPercentage: g == null ? void 0 : g[E],
              color: O.color,
              hasChanged: !L && j,
              simpleMode: L,
            },
            E
          )
        ),
        !L &&
          d.jsx('div', {
            className: xe.cardFooter,
            children: u
              ? `${P.footerLabel} ${S.map(([E, O]) => `${O.name.slice(0, 2)} ${u[E].toFixed(0)}`).join(' · ')}`
              : P.footerText,
          }),
      ],
    });
  },
  Bm = '_container_1m8cr_3',
  Am = '_title_1m8cr_8',
  Um = '_body_1m8cr_16',
  $m = '_buttonRow_1m8cr_25',
  Gl = { container: Bm, title: Am, body: Um, buttonRow: $m },
  Vm = () => {
    const {
      currentQuestion: m,
      questionNumber: f,
      progressPercentage: u,
      calculationResults: g,
      causesConfig: S,
      goBack: j,
      goForward: L,
    } = Ir();
    if (!m) return null;
    const { maxEV: P, mergedFavorites: w } = g,
      E = Object.entries(S);
    return d.jsxs('div', {
      className: 'screen',
      children: [
        d.jsx(rs, { subtitle: f }),
        d.jsx(gc, { percentage: u }),
        d.jsx('main', {
          className: 'screen-main',
          children: d.jsxs('div', {
            className: Gl.container,
            children: [
              d.jsx('h2', { className: Gl.title, children: m.title }),
              d.jsx('p', { className: Gl.body, children: m.body }),
              d.jsxs('div', {
                className: xe.resultsGrid,
                children: [
                  d.jsx(ql, { methodKey: 'maxEV', results: P, evs: P.evs, causeEntries: E }),
                  d.jsx(ql, { methodKey: 'mergedFavorites', results: w, causeEntries: E }),
                ],
              }),
              d.jsxs('div', {
                className: Gl.buttonRow,
                children: [
                  d.jsx('button', {
                    onClick: j,
                    className: 'btn btn-secondary',
                    children: ye.navigation.back,
                  }),
                  d.jsx('button', {
                    onClick: L,
                    className: 'btn btn-primary',
                    children: ye.navigation.continue,
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Qm = ({
    label: m,
    value: f,
    onChange: u,
    color: g,
    credences: S,
    sliderKey: j,
    lockedKey: L,
    setLockedKey: P,
  }) => {
    var Y;
    const [w, E] = K.useState(null),
      [O, I] = K.useState(!1),
      $ = L === j,
      Q = L && L !== j,
      b = Q ? S[L] : 0,
      F = Q ? 100 - b : 100,
      G = Q ? `calc(${F}% + ${(50 - F) * 0.16}px)` : null,
      Z = () => {
        $ || (I(!0), E({ ...S }));
      },
      ae = (ge) => {
        if ($ || !O) return;
        I(!1);
        const ie = parseFloat(ge.target.value);
        (u(ie, w, !0, L), E(null));
      },
      J = (ge) => {
        if ($) return;
        const ie = parseFloat(ge.target.value);
        u(ie, w, !1, L);
      };
    return d.jsxs('div', {
      className: Te.compactSlider,
      children: [
        d.jsxs('div', {
          className: Te.header,
          children: [
            d.jsx('span', { className: Te.label, children: m }),
            d.jsxs('span', {
              className: Te.value,
              style: { color: g },
              children: [Math.round(f), '%'],
            }),
          ],
        }),
        d.jsxs('div', {
          className: Te.sliderRow,
          children: [
            d.jsxs('div', {
              className: Te.sliderContainer,
              children: [
                d.jsx('input', {
                  type: 'range',
                  min: '0',
                  max: '100',
                  step: 'any',
                  value: f,
                  onChange: J,
                  onMouseDown: Z,
                  onMouseUp: ae,
                  onMouseLeave: ae,
                  onTouchStart: Z,
                  onTouchEnd: ae,
                  'data-dragging': O,
                  disabled: $,
                  style: {
                    background: Q
                      ? `linear-gradient(to right, ${g} 0%, ${g} ${f}%, rgb(51,65,85) ${f}%, rgb(51,65,85) ${G}, rgb(30,41,59) ${G}, rgb(30,41,59) 100%)`
                      : `linear-gradient(to right, ${g} 0%, ${g} ${f}%, rgb(51,65,85) ${f}%, rgb(51,65,85) 100%)`,
                    cursor: $ ? 'not-allowed' : 'pointer',
                  },
                }),
                Q && d.jsx('div', { className: Te.lockLimit, style: { left: G } }),
              ],
            }),
            (Y = ts.ui) == null ? void 0 : Y.sliderLock,
          ],
        }),
      ],
    });
  },
  Hm = ({ label: m, color: f, isSelected: u, onSelect: g }) =>
    d.jsxs('button', {
      type: 'button',
      onClick: g,
      className: `${Te.compactSelection} ${u ? Te.selected : ''}`,
      style: { '--selection-color': f },
      children: [
        d.jsx('span', { className: Te.selectionLabel, children: m }),
        d.jsx('span', {
          className: Te.selectionIndicator,
          style: { borderColor: u ? f : void 0, backgroundColor: u ? f : void 0 },
          children: u && d.jsx(ap, { size: 12, strokeWidth: 3 }),
        }),
      ],
    }),
  Wm = '_editPanel_9crrd_3',
  Gm = '_expanded_9crrd_11',
  qm = '_toggleButton_9crrd_16',
  Km = '_buttonContent_9crrd_33',
  Ym = '_icon_9crrd_39',
  Xm = '_title_9crrd_43',
  Zm = '_modifiedBadge_9crrd_48',
  Jm = '_preview_9crrd_56',
  bm = '_chevron_9crrd_62',
  eh = '_content_9crrd_66',
  th = '_footer_9crrd_71',
  nh = '_footerNote_9crrd_78',
  rh = '_resetButton_9crrd_84',
  lh = '_selectionRow_9crrd_103',
  De = {
    editPanel: Wm,
    expanded: Gm,
    toggleButton: qm,
    buttonContent: Km,
    icon: Ym,
    title: Xm,
    modifiedBadge: Zm,
    preview: Jm,
    chevron: bm,
    content: eh,
    footer: th,
    footerNote: nh,
    resetButton: rh,
    selectionRow: lh,
  },
  oh = ({
    title: m,
    icon: f,
    credences: u,
    setCredences: g,
    originalCredences: S,
    configs: j,
    isExpanded: L,
    onToggle: P,
    lockedKey: w,
    setLockedKey: E,
    questionType: O = Ke.DEFAULT,
  }) => {
    const I = S && JSON.stringify(u) !== JSON.stringify(S),
      $ = O === Ke.SELECTION,
      Q = (F) => {
        const G = {};
        (j.forEach((Z) => {
          G[Z.key] = Z.key === F ? 100 : 0;
        }),
          g(G));
      },
      b = (F) => {
        (F.stopPropagation(), g({ ...S }));
      };
    return d.jsxs('div', {
      className: `${De.editPanel} ${L ? De.expanded : ''}`,
      children: [
        d.jsxs('button', {
          onClick: P,
          className: De.toggleButton,
          children: [
            d.jsxs('div', {
              className: De.buttonContent,
              children: [
                d.jsx('span', { className: De.icon, children: f }),
                d.jsx('span', { className: De.title, children: m }),
                I &&
                  d.jsx('span', {
                    className: De.modifiedBadge,
                    children: ye.editPanel.modifiedBadge,
                  }),
                !L &&
                  d.jsx('span', {
                    className: De.preview,
                    children: j.map((F) => `${F.short}:${u[F.key]}%`).join(' '),
                  }),
              ],
            }),
            d.jsx('span', {
              className: De.chevron,
              children: L ? d.jsx(dp, { size: 16 }) : d.jsx(cp, { size: 16 }),
            }),
          ],
        }),
        L &&
          d.jsx('div', {
            className: De.content,
            children: $
              ? d.jsxs(d.Fragment, {
                  children: [
                    d.jsx('div', {
                      className: De.selectionRow,
                      children: j.map((F) =>
                        d.jsx(
                          Hm,
                          {
                            label: F.label,
                            color: F.color,
                            isSelected: u[F.key] === 100,
                            onSelect: () => Q(F.key),
                          },
                          F.key
                        )
                      ),
                    }),
                    d.jsxs('div', {
                      className: De.footer,
                      children: [
                        d.jsx('span', {
                          className: De.footerNote,
                          children: ye.editPanel.selectionNote || 'Pick one option',
                        }),
                        I &&
                          d.jsxs('button', {
                            onClick: b,
                            className: De.resetButton,
                            children: [d.jsx(Ji, { size: 10 }), ' ', ye.editPanel.resetButton],
                          }),
                      ],
                    }),
                  ],
                })
              : d.jsxs(d.Fragment, {
                  children: [
                    j.map((F) =>
                      d.jsx(
                        Qm,
                        {
                          label: F.label,
                          value: u[F.key],
                          onChange: (G, Z, ae, J) => {
                            const Y = fc(F.key, G, u, Z, J);
                            g(ae ? pc(Y) : Y);
                          },
                          color: F.color,
                          credences: u,
                          sliderKey: F.key,
                          lockedKey: w,
                          setLockedKey: E,
                        },
                        F.key
                      )
                    ),
                    d.jsxs('div', {
                      className: De.footer,
                      children: [
                        d.jsx('span', {
                          className: De.footerNote,
                          children: ye.editPanel.sliderNote,
                        }),
                        I &&
                          d.jsxs('button', {
                            onClick: b,
                            className: De.resetButton,
                            children: [d.jsx(Ji, { size: 10 }), ' ', ye.editPanel.resetButton],
                          }),
                      ],
                    }),
                  ],
                }),
          }),
      ],
    });
  },
  ih = () => {
    var ae;
    const {
        questionsConfig: m,
        causesConfig: f,
        stateMap: u,
        expandedPanel: g,
        setExpandedPanel: S,
        calculationResults: j,
        originalCalculationResults: L,
        hasChanged: P,
        resetToOriginal: w,
        resetQuiz: E,
        goBack: O,
      } = Ir(),
      { maxEV: I, parliament: $, mergedFavorites: Q, maximin: b } = j,
      F = Object.entries(f),
      G = (J) =>
        J.options.map((Y) => ({
          key: Y.key,
          label: Y.panelLabel,
          short: Y.panelShort,
          color: Y.color,
        })),
      Z = () =>
        d.jsxs('div', {
          className: xe.resultsGrid,
          children: [
            d.jsx(ql, {
              methodKey: 'maxEV',
              results: I,
              evs: I.evs,
              originalResults: L == null ? void 0 : L.maxEV,
              causeEntries: F,
              hasChanged: P,
            }),
            d.jsx(ql, {
              methodKey: 'mergedFavorites',
              results: Q,
              originalResults: L == null ? void 0 : L.mergedFavorites,
              causeEntries: F,
              hasChanged: P,
            }),
          ],
        });
    return d.jsx('div', {
      className: xe.resultsContainer,
      children: d.jsxs('div', {
        className: xe.inner,
        children: [
          d.jsx('div', {
            className: xe.header,
            children: d.jsxs('h1', {
              className: xe.title,
              children: [
                ye.results.heading,
                P &&
                  d.jsx('span', {
                    className: xe.modifiedIndicator,
                    children: ye.results.modifiedIndicator,
                  }),
              ],
            }),
          }),
          Z(),
          d.jsxs('div', {
            className: xe.adjustPanel,
            children: [
              d.jsxs('div', {
                className: xe.adjustHeader,
                children: [
                  d.jsx('span', {
                    className: xe.adjustTitle,
                    children: ye.results.adjustCredencesHeading,
                  }),
                  P &&
                    d.jsxs('button', {
                      onClick: w,
                      className: xe.resetAllButton,
                      children: [d.jsx(Ji, { size: 10 }), ' ', ye.results.resetAllButton],
                    }),
                ],
              }),
              d.jsx('div', {
                className: xe.panelList,
                children: m
                  .filter((J) => J.type !== Ke.INTERMISSION)
                  .map((J) => {
                    const Y = u[J.id];
                    return Y
                      ? d.jsx(
                          oh,
                          {
                            title: J.editPanelTitle,
                            icon: J.emoji,
                            credences: Y.credences,
                            setCredences: Y.setCredences,
                            originalCredences: Y.originalCredences,
                            configs: G(J),
                            isExpanded: g === J.id,
                            onToggle: () => S(g === J.id ? null : J.id),
                            lockedKey: Y.lockedKey,
                            setLockedKey: Y.setLockedKey,
                            questionType: J.type,
                          },
                          J.id
                        )
                      : null;
                  }),
              }),
            ],
          }),
          d.jsxs('div', {
            className: xe.backButtonContainer,
            children: [
              d.jsx('button', {
                onClick: O,
                className: xe.backButton,
                children: ye.navigation.backToQuiz,
              }),
              (ae = ts.ui) == null ? void 0 : ae.resetButton,
            ],
          }),
        ],
      }),
    });
  },
  sh = '_debugButton_1fvy0_4',
  uh = '_overlay_1fvy0_22',
  ah = '_modal_1fvy0_35',
  ch = '_header_1fvy0_46',
  dh = '_closeButton_1fvy0_60',
  fh = '_content_1fvy0_73',
  ph = '_section_1fvy0_79',
  mh = '_causeBlock_1fvy0_93',
  hh = '_fieldRow_1fvy0_106',
  vh = '_checkboxRow_1fvy0_130',
  yh = '_multiplierGroup_1fvy0_149',
  gh = '_dimInfo_1fvy0_159',
  _h = '_multiplierRow_1fvy0_166',
  wh = '_footer_1fvy0_190',
  Sh = '_saveButton_1fvy0_197',
  He = {
    debugButton: sh,
    overlay: uh,
    modal: ah,
    header: ch,
    closeButton: dh,
    content: fh,
    section: ph,
    causeBlock: mh,
    fieldRow: hh,
    checkboxRow: vh,
    multiplierGroup: yh,
    dimInfo: gh,
    multiplierRow: _h,
    footer: wh,
    saveButton: Sh,
  },
  { causes: xh } = es,
  kh = cc(!0),
  Ch = ({ onConfigChange: m }) => {
    const [f, u] = K.useState(!1),
      [g, S] = K.useState({
        causes: JSON.parse(JSON.stringify(xh)),
        dimensions: JSON.parse(JSON.stringify(kh)),
      }),
      j = (w, E, O) => {
        S((I) => ({
          ...I,
          causes: {
            ...I.causes,
            [w]: {
              ...I.causes[w],
              [E]: E === 'name' || E === 'color' || typeof O == 'boolean' ? O : Number(O),
            },
          },
        }));
      },
      L = (w, E, O) => {
        S((I) => ({
          ...I,
          dimensions: {
            ...I.dimensions,
            [w]: { ...I.dimensions[w], options: { ...I.dimensions[w].options, [E]: Number(O) } },
          },
        }));
      },
      P = () => {
        (m(g), u(!1));
      };
    return d.jsxs(d.Fragment, {
      children: [
        d.jsx('button', {
          className: He.debugButton,
          onClick: () => u(!0),
          title: 'Debug Settings',
          children: 'Settings',
        }),
        f &&
          d.jsx('div', {
            className: He.overlay,
            onClick: () => u(!1),
            children: d.jsxs('div', {
              className: He.modal,
              onClick: (w) => w.stopPropagation(),
              children: [
                d.jsxs('div', {
                  className: He.header,
                  children: [
                    d.jsx('h2', { children: 'Calculation Debugger' }),
                    d.jsx('button', {
                      className: He.closeButton,
                      onClick: () => u(!1),
                      children: 'x',
                    }),
                  ],
                }),
                d.jsxs('div', {
                  className: He.content,
                  children: [
                    d.jsxs('section', {
                      className: He.section,
                      children: [
                        d.jsx('h3', { children: 'CAUSES' }),
                        Object.entries(g.causes).map(([w, E]) =>
                          d.jsxs(
                            'div',
                            {
                              className: He.causeBlock,
                              children: [
                                d.jsx('h4', { children: E.name }),
                                d.jsxs('div', {
                                  className: He.fieldRow,
                                  children: [
                                    d.jsxs('label', {
                                      children: [
                                        'Points:',
                                        d.jsx('input', {
                                          type: 'number',
                                          value: E.points,
                                          onChange: (O) => j(w, 'points', O.target.value),
                                        }),
                                      ],
                                    }),
                                    d.jsxs('label', {
                                      children: [
                                        'Scale Factor:',
                                        d.jsx('input', {
                                          type: 'number',
                                          value: E.scaleFactor,
                                          onChange: (O) => j(w, 'scaleFactor', O.target.value),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                d.jsxs('div', {
                                  className: He.checkboxRow,
                                  children: [
                                    d.jsxs('label', {
                                      children: [
                                        d.jsx('input', {
                                          type: 'checkbox',
                                          checked: E.helpsAnimals,
                                          onChange: (O) => j(w, 'helpsAnimals', O.target.checked),
                                        }),
                                        'Helps Animals',
                                      ],
                                    }),
                                    d.jsxs('label', {
                                      children: [
                                        d.jsx('input', {
                                          type: 'checkbox',
                                          checked: E.helpsFutureHumans,
                                          onChange: (O) =>
                                            j(w, 'helpsFutureHumans', O.target.checked),
                                        }),
                                        'Helps Future Humans',
                                      ],
                                    }),
                                    d.jsxs('label', {
                                      children: [
                                        d.jsx('input', {
                                          type: 'checkbox',
                                          checked: E.isSpeculative,
                                          onChange: (O) => j(w, 'isSpeculative', O.target.checked),
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
                    d.jsxs('section', {
                      className: He.section,
                      children: [
                        d.jsx('h3', { children: 'DIMENSIONS (from questions)' }),
                        Object.entries(g.dimensions).map(([w, E]) =>
                          d.jsxs(
                            'div',
                            {
                              className: He.multiplierGroup,
                              children: [
                                d.jsx('h4', { children: E.name }),
                                d.jsx('p', {
                                  className: He.dimInfo,
                                  children:
                                    E.applyAs === 'multiplier'
                                      ? `Multiplier when: ${E.appliesWhen}`
                                      : `Exponent on: ${E.appliesTo}`,
                                }),
                                d.jsx('div', {
                                  className: He.multiplierRow,
                                  children: Object.entries(E.options).map(([O, I]) =>
                                    d.jsxs(
                                      'label',
                                      {
                                        children: [
                                          O,
                                          ':',
                                          d.jsx('input', {
                                            type: 'number',
                                            step: E.applyAs === 'exponent' ? '0.1' : '0.01',
                                            value: I,
                                            onChange: ($) => L(w, O, $.target.value),
                                          }),
                                        ],
                                      },
                                      O
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
                d.jsx('div', {
                  className: He.footer,
                  children: d.jsx('button', {
                    className: He.saveButton,
                    onClick: P,
                    children: 'Save',
                  }),
                }),
              ],
            }),
          }),
      ],
    });
  },
  Eh = () => {
    const { currentStep: m, currentQuestion: f, setDebugConfig: u } = Ir();
    let g = null;
    return (
      m === 'welcome'
        ? (g = d.jsx(op, {}))
        : m === 'results'
          ? (g = d.jsx(ih, {}))
          : f && (f.type === Ke.INTERMISSION ? (g = d.jsx(Vm, {})) : (g = d.jsx(Gp, {}))),
      d.jsxs(d.Fragment, { children: [g, d.jsx(Ch, { onConfigChange: u })] })
    );
  };
function Nh() {
  return d.jsx(Hf, { children: d.jsx(Eh, {}) });
}
Ef.createRoot(document.getElementById('root')).render(
  d.jsx(K.StrictMode, { children: d.jsx(Nh, {}) })
);
