(function () {
  const i = document.createElement('link').relList;
  if (i && i.supports && i.supports('modulepreload')) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) s(a);
  new MutationObserver((a) => {
    for (const c of a)
      if (c.type === 'childList')
        for (const d of c.addedNodes) d.tagName === 'LINK' && d.rel === 'modulepreload' && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(a) {
    const c = {};
    return (
      a.integrity && (c.integrity = a.integrity),
      a.referrerPolicy && (c.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === 'use-credentials'
        ? (c.credentials = 'include')
        : a.crossOrigin === 'anonymous'
          ? (c.credentials = 'omit')
          : (c.credentials = 'same-origin'),
      c
    );
  }
  function s(a) {
    if (a.ep) return;
    a.ep = !0;
    const c = l(a);
    fetch(a.href, c);
  }
})();
function zd(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
}
var Gs = { exports: {} },
  Ni = {},
  Ys = { exports: {} },
  Le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mf;
function Em() {
  if (Mf) return Le;
  Mf = 1;
  var n = Symbol.for('react.element'),
    i = Symbol.for('react.portal'),
    l = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    a = Symbol.for('react.profiler'),
    c = Symbol.for('react.provider'),
    d = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    m = Symbol.for('react.suspense'),
    h = Symbol.for('react.memo'),
    y = Symbol.for('react.lazy'),
    v = Symbol.iterator;
  function k(I) {
    return I === null || typeof I != 'object'
      ? null
      : ((I = (v && I[v]) || I['@@iterator']), typeof I == 'function' ? I : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    L = Object.assign,
    P = {};
  function R(I, M, S) {
    ((this.props = I), (this.context = M), (this.refs = P), (this.updater = S || w));
  }
  ((R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (I, M) {
      if (typeof I != 'object' && typeof I != 'function' && I != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, I, M, 'setState');
    }),
    (R.prototype.forceUpdate = function (I) {
      this.updater.enqueueForceUpdate(this, I, 'forceUpdate');
    }));
  function A() {}
  A.prototype = R.prototype;
  function K(I, M, S) {
    ((this.props = I), (this.context = M), (this.refs = P), (this.updater = S || w));
  }
  var U = (K.prototype = new A());
  ((U.constructor = K), L(U, R.prototype), (U.isPureReactComponent = !0));
  var de = Array.isArray,
    ye = Object.prototype.hasOwnProperty,
    z = { current: null },
    me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function xe(I, M, S) {
    var ae,
      ke = {},
      fe = null,
      Oe = null;
    if (M != null)
      for (ae in (M.ref !== void 0 && (Oe = M.ref), M.key !== void 0 && (fe = '' + M.key), M))
        ye.call(M, ae) && !me.hasOwnProperty(ae) && (ke[ae] = M[ae]);
    var Ce = arguments.length - 2;
    if (Ce === 1) ke.children = S;
    else if (1 < Ce) {
      for (var Te = Array(Ce), qe = 0; qe < Ce; qe++) Te[qe] = arguments[qe + 2];
      ke.children = Te;
    }
    if (I && I.defaultProps)
      for (ae in ((Ce = I.defaultProps), Ce)) ke[ae] === void 0 && (ke[ae] = Ce[ae]);
    return { $$typeof: n, type: I, key: fe, ref: Oe, props: ke, _owner: z.current };
  }
  function Se(I, M) {
    return { $$typeof: n, type: I.type, key: M, ref: I.ref, props: I.props, _owner: I._owner };
  }
  function Ee(I) {
    return typeof I == 'object' && I !== null && I.$$typeof === n;
  }
  function ne(I) {
    var M = { '=': '=0', ':': '=2' };
    return (
      '$' +
      I.replace(/[=:]/g, function (S) {
        return M[S];
      })
    );
  }
  var D = /\/+/g;
  function J(I, M) {
    return typeof I == 'object' && I !== null && I.key != null ? ne('' + I.key) : M.toString(36);
  }
  function X(I, M, S, ae, ke) {
    var fe = typeof I;
    (fe === 'undefined' || fe === 'boolean') && (I = null);
    var Oe = !1;
    if (I === null) Oe = !0;
    else
      switch (fe) {
        case 'string':
        case 'number':
          Oe = !0;
          break;
        case 'object':
          switch (I.$$typeof) {
            case n:
            case i:
              Oe = !0;
          }
      }
    if (Oe)
      return (
        (Oe = I),
        (ke = ke(Oe)),
        (I = ae === '' ? '.' + J(Oe, 0) : ae),
        de(ke)
          ? ((S = ''),
            I != null && (S = I.replace(D, '$&/') + '/'),
            X(ke, M, S, '', function (qe) {
              return qe;
            }))
          : ke != null &&
            (Ee(ke) &&
              (ke = Se(
                ke,
                S +
                  (!ke.key || (Oe && Oe.key === ke.key)
                    ? ''
                    : ('' + ke.key).replace(D, '$&/') + '/') +
                  I
              )),
            M.push(ke)),
        1
      );
    if (((Oe = 0), (ae = ae === '' ? '.' : ae + ':'), de(I)))
      for (var Ce = 0; Ce < I.length; Ce++) {
        fe = I[Ce];
        var Te = ae + J(fe, Ce);
        Oe += X(fe, M, S, Te, ke);
      }
    else if (((Te = k(I)), typeof Te == 'function'))
      for (I = Te.call(I), Ce = 0; !(fe = I.next()).done; )
        ((fe = fe.value), (Te = ae + J(fe, Ce++)), (Oe += X(fe, M, S, Te, ke)));
    else if (fe === 'object')
      throw (
        (M = String(I)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (M === '[object Object]' ? 'object with keys {' + Object.keys(I).join(', ') + '}' : M) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return Oe;
  }
  function V(I, M, S) {
    if (I == null) return I;
    var ae = [],
      ke = 0;
    return (
      X(I, ae, '', '', function (fe) {
        return M.call(S, fe, ke++);
      }),
      ae
    );
  }
  function ue(I) {
    if (I._status === -1) {
      var M = I._result;
      ((M = M()),
        M.then(
          function (S) {
            (I._status === 0 || I._status === -1) && ((I._status = 1), (I._result = S));
          },
          function (S) {
            (I._status === 0 || I._status === -1) && ((I._status = 2), (I._result = S));
          }
        ),
        I._status === -1 && ((I._status = 0), (I._result = M)));
    }
    if (I._status === 1) return I._result.default;
    throw I._result;
  }
  var se = { current: null },
    q = { transition: null },
    ee = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: q, ReactCurrentOwner: z };
  function x() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (Le.Children = {
      map: V,
      forEach: function (I, M, S) {
        V(
          I,
          function () {
            M.apply(this, arguments);
          },
          S
        );
      },
      count: function (I) {
        var M = 0;
        return (
          V(I, function () {
            M++;
          }),
          M
        );
      },
      toArray: function (I) {
        return (
          V(I, function (M) {
            return M;
          }) || []
        );
      },
      only: function (I) {
        if (!Ee(I))
          throw Error('React.Children.only expected to receive a single React element child.');
        return I;
      },
    }),
    (Le.Component = R),
    (Le.Fragment = l),
    (Le.Profiler = a),
    (Le.PureComponent = K),
    (Le.StrictMode = s),
    (Le.Suspense = m),
    (Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ee),
    (Le.act = x),
    (Le.cloneElement = function (I, M, S) {
      if (I == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + I + '.'
        );
      var ae = L({}, I.props),
        ke = I.key,
        fe = I.ref,
        Oe = I._owner;
      if (M != null) {
        if (
          (M.ref !== void 0 && ((fe = M.ref), (Oe = z.current)),
          M.key !== void 0 && (ke = '' + M.key),
          I.type && I.type.defaultProps)
        )
          var Ce = I.type.defaultProps;
        for (Te in M)
          ye.call(M, Te) &&
            !me.hasOwnProperty(Te) &&
            (ae[Te] = M[Te] === void 0 && Ce !== void 0 ? Ce[Te] : M[Te]);
      }
      var Te = arguments.length - 2;
      if (Te === 1) ae.children = S;
      else if (1 < Te) {
        Ce = Array(Te);
        for (var qe = 0; qe < Te; qe++) Ce[qe] = arguments[qe + 2];
        ae.children = Ce;
      }
      return { $$typeof: n, type: I.type, key: ke, ref: fe, props: ae, _owner: Oe };
    }),
    (Le.createContext = function (I) {
      return (
        (I = {
          $$typeof: d,
          _currentValue: I,
          _currentValue2: I,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (I.Provider = { $$typeof: c, _context: I }),
        (I.Consumer = I)
      );
    }),
    (Le.createElement = xe),
    (Le.createFactory = function (I) {
      var M = xe.bind(null, I);
      return ((M.type = I), M);
    }),
    (Le.createRef = function () {
      return { current: null };
    }),
    (Le.forwardRef = function (I) {
      return { $$typeof: p, render: I };
    }),
    (Le.isValidElement = Ee),
    (Le.lazy = function (I) {
      return { $$typeof: y, _payload: { _status: -1, _result: I }, _init: ue };
    }),
    (Le.memo = function (I, M) {
      return { $$typeof: h, type: I, compare: M === void 0 ? null : M };
    }),
    (Le.startTransition = function (I) {
      var M = q.transition;
      q.transition = {};
      try {
        I();
      } finally {
        q.transition = M;
      }
    }),
    (Le.unstable_act = x),
    (Le.useCallback = function (I, M) {
      return se.current.useCallback(I, M);
    }),
    (Le.useContext = function (I) {
      return se.current.useContext(I);
    }),
    (Le.useDebugValue = function () {}),
    (Le.useDeferredValue = function (I) {
      return se.current.useDeferredValue(I);
    }),
    (Le.useEffect = function (I, M) {
      return se.current.useEffect(I, M);
    }),
    (Le.useId = function () {
      return se.current.useId();
    }),
    (Le.useImperativeHandle = function (I, M, S) {
      return se.current.useImperativeHandle(I, M, S);
    }),
    (Le.useInsertionEffect = function (I, M) {
      return se.current.useInsertionEffect(I, M);
    }),
    (Le.useLayoutEffect = function (I, M) {
      return se.current.useLayoutEffect(I, M);
    }),
    (Le.useMemo = function (I, M) {
      return se.current.useMemo(I, M);
    }),
    (Le.useReducer = function (I, M, S) {
      return se.current.useReducer(I, M, S);
    }),
    (Le.useRef = function (I) {
      return se.current.useRef(I);
    }),
    (Le.useState = function (I) {
      return se.current.useState(I);
    }),
    (Le.useSyncExternalStore = function (I, M, S) {
      return se.current.useSyncExternalStore(I, M, S);
    }),
    (Le.useTransition = function () {
      return se.current.useTransition();
    }),
    (Le.version = '18.3.1'),
    Le
  );
}
var jf;
function Ru() {
  return (jf || ((jf = 1), (Ys.exports = Em())), Ys.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ff;
function Cm() {
  if (Ff) return Ni;
  Ff = 1;
  var n = Ru(),
    i = Symbol.for('react.element'),
    l = Symbol.for('react.fragment'),
    s = Object.prototype.hasOwnProperty,
    a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(p, m, h) {
    var y,
      v = {},
      k = null,
      w = null;
    (h !== void 0 && (k = '' + h),
      m.key !== void 0 && (k = '' + m.key),
      m.ref !== void 0 && (w = m.ref));
    for (y in m) s.call(m, y) && !c.hasOwnProperty(y) && (v[y] = m[y]);
    if (p && p.defaultProps) for (y in ((m = p.defaultProps), m)) v[y] === void 0 && (v[y] = m[y]);
    return { $$typeof: i, type: p, key: k, ref: w, props: v, _owner: a.current };
  }
  return ((Ni.Fragment = l), (Ni.jsx = d), (Ni.jsxs = d), Ni);
}
var Bf;
function _m() {
  return (Bf || ((Bf = 1), (Gs.exports = Cm())), Gs.exports);
}
var j = _m(),
  Y = Ru(),
  Ql = {},
  Xs = { exports: {} },
  xt = {},
  Ks = { exports: {} },
  Js = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uf;
function Im() {
  return (
    Uf ||
      ((Uf = 1),
      (function (n) {
        function i(q, ee) {
          var x = q.length;
          q.push(ee);
          e: for (; 0 < x; ) {
            var I = (x - 1) >>> 1,
              M = q[I];
            if (0 < a(M, ee)) ((q[I] = ee), (q[x] = M), (x = I));
            else break e;
          }
        }
        function l(q) {
          return q.length === 0 ? null : q[0];
        }
        function s(q) {
          if (q.length === 0) return null;
          var ee = q[0],
            x = q.pop();
          if (x !== ee) {
            q[0] = x;
            e: for (var I = 0, M = q.length, S = M >>> 1; I < S; ) {
              var ae = 2 * (I + 1) - 1,
                ke = q[ae],
                fe = ae + 1,
                Oe = q[fe];
              if (0 > a(ke, x))
                fe < M && 0 > a(Oe, ke)
                  ? ((q[I] = Oe), (q[fe] = x), (I = fe))
                  : ((q[I] = ke), (q[ae] = x), (I = ae));
              else if (fe < M && 0 > a(Oe, x)) ((q[I] = Oe), (q[fe] = x), (I = fe));
              else break e;
            }
          }
          return ee;
        }
        function a(q, ee) {
          var x = q.sortIndex - ee.sortIndex;
          return x !== 0 ? x : q.id - ee.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var c = performance;
          n.unstable_now = function () {
            return c.now();
          };
        } else {
          var d = Date,
            p = d.now();
          n.unstable_now = function () {
            return d.now() - p;
          };
        }
        var m = [],
          h = [],
          y = 1,
          v = null,
          k = 3,
          w = !1,
          L = !1,
          P = !1,
          R = typeof setTimeout == 'function' ? setTimeout : null,
          A = typeof clearTimeout == 'function' ? clearTimeout : null,
          K = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function U(q) {
          for (var ee = l(h); ee !== null; ) {
            if (ee.callback === null) s(h);
            else if (ee.startTime <= q) (s(h), (ee.sortIndex = ee.expirationTime), i(m, ee));
            else break;
            ee = l(h);
          }
        }
        function de(q) {
          if (((P = !1), U(q), !L))
            if (l(m) !== null) ((L = !0), ue(ye));
            else {
              var ee = l(h);
              ee !== null && se(de, ee.startTime - q);
            }
        }
        function ye(q, ee) {
          ((L = !1), P && ((P = !1), A(xe), (xe = -1)), (w = !0));
          var x = k;
          try {
            for (U(ee), v = l(m); v !== null && (!(v.expirationTime > ee) || (q && !ne())); ) {
              var I = v.callback;
              if (typeof I == 'function') {
                ((v.callback = null), (k = v.priorityLevel));
                var M = I(v.expirationTime <= ee);
                ((ee = n.unstable_now()),
                  typeof M == 'function' ? (v.callback = M) : v === l(m) && s(m),
                  U(ee));
              } else s(m);
              v = l(m);
            }
            if (v !== null) var S = !0;
            else {
              var ae = l(h);
              (ae !== null && se(de, ae.startTime - ee), (S = !1));
            }
            return S;
          } finally {
            ((v = null), (k = x), (w = !1));
          }
        }
        var z = !1,
          me = null,
          xe = -1,
          Se = 5,
          Ee = -1;
        function ne() {
          return !(n.unstable_now() - Ee < Se);
        }
        function D() {
          if (me !== null) {
            var q = n.unstable_now();
            Ee = q;
            var ee = !0;
            try {
              ee = me(!0, q);
            } finally {
              ee ? J() : ((z = !1), (me = null));
            }
          } else z = !1;
        }
        var J;
        if (typeof K == 'function')
          J = function () {
            K(D);
          };
        else if (typeof MessageChannel < 'u') {
          var X = new MessageChannel(),
            V = X.port2;
          ((X.port1.onmessage = D),
            (J = function () {
              V.postMessage(null);
            }));
        } else
          J = function () {
            R(D, 0);
          };
        function ue(q) {
          ((me = q), z || ((z = !0), J()));
        }
        function se(q, ee) {
          xe = R(function () {
            q(n.unstable_now());
          }, ee);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (q) {
            q.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            L || w || ((L = !0), ue(ye));
          }),
          (n.unstable_forceFrameRate = function (q) {
            0 > q || 125 < q
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Se = 0 < q ? Math.floor(1e3 / q) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return k;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return l(m);
          }),
          (n.unstable_next = function (q) {
            switch (k) {
              case 1:
              case 2:
              case 3:
                var ee = 3;
                break;
              default:
                ee = k;
            }
            var x = k;
            k = ee;
            try {
              return q();
            } finally {
              k = x;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (q, ee) {
            switch (q) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                q = 3;
            }
            var x = k;
            k = q;
            try {
              return ee();
            } finally {
              k = x;
            }
          }),
          (n.unstable_scheduleCallback = function (q, ee, x) {
            var I = n.unstable_now();
            switch (
              (typeof x == 'object' && x !== null
                ? ((x = x.delay), (x = typeof x == 'number' && 0 < x ? I + x : I))
                : (x = I),
              q)
            ) {
              case 1:
                var M = -1;
                break;
              case 2:
                M = 250;
                break;
              case 5:
                M = 1073741823;
                break;
              case 4:
                M = 1e4;
                break;
              default:
                M = 5e3;
            }
            return (
              (M = x + M),
              (q = {
                id: y++,
                callback: ee,
                priorityLevel: q,
                startTime: x,
                expirationTime: M,
                sortIndex: -1,
              }),
              x > I
                ? ((q.sortIndex = x),
                  i(h, q),
                  l(m) === null && q === l(h) && (P ? (A(xe), (xe = -1)) : (P = !0), se(de, x - I)))
                : ((q.sortIndex = M), i(m, q), L || w || ((L = !0), ue(ye))),
              q
            );
          }),
          (n.unstable_shouldYield = ne),
          (n.unstable_wrapCallback = function (q) {
            var ee = k;
            return function () {
              var x = k;
              k = ee;
              try {
                return q.apply(this, arguments);
              } finally {
                k = x;
              }
            };
          }));
      })(Js)),
    Js
  );
}
var Wf;
function Tm() {
  return (Wf || ((Wf = 1), (Ks.exports = Im())), Ks.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vf;
function Nm() {
  if (Vf) return xt;
  Vf = 1;
  var n = Ru(),
    i = Tm();
  function l(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1;
      r < arguments.length;
      r++
    )
      t += '&args[]=' + encodeURIComponent(arguments[r]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var s = new Set(),
    a = {};
  function c(e, t) {
    (d(e, t), d(e + 'Capture', t));
  }
  function d(e, t) {
    for (a[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var p = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    m = Object.prototype.hasOwnProperty,
    h =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    y = {},
    v = {};
  function k(e) {
    return m.call(v, e) ? !0 : m.call(y, e) ? !1 : h.test(e) ? (v[e] = !0) : ((y[e] = !0), !1);
  }
  function w(e, t, r, o) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return o
          ? !1
          : r !== null
            ? !r.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function L(e, t, r, o) {
    if (t === null || typeof t > 'u' || w(e, t, r, o)) return !0;
    if (o) return !1;
    if (r !== null)
      switch (r.type) {
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
  function P(e, t, r, o, u, f, g) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = u),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = f),
      (this.removeEmptyString = g));
  }
  var R = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      R[e] = new P(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      R[t] = new P(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      R[e] = new P(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        R[e] = new P(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        R[e] = new P(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      R[e] = new P(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      R[e] = new P(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      R[e] = new P(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      R[e] = new P(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var A = /[\-:]([a-z])/g;
  function K(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(A, K);
      R[t] = new P(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(A, K);
        R[t] = new P(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(A, K);
      R[t] = new P(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      R[e] = new P(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (R.xlinkHref = new P('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      R[e] = new P(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function U(e, t, r, o) {
    var u = R.hasOwnProperty(t) ? R[t] : null;
    (u !== null
      ? u.type !== 0
      : o || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (L(t, r, u, o) && (r = null),
      o || u === null
        ? k(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
        : u.mustUseProperty
          ? (e[u.propertyName] = r === null ? (u.type === 3 ? !1 : '') : r)
          : ((t = u.attributeName),
            (o = u.attributeNamespace),
            r === null
              ? e.removeAttribute(t)
              : ((u = u.type),
                (r = u === 3 || (u === 4 && r === !0) ? '' : '' + r),
                o ? e.setAttributeNS(o, t, r) : e.setAttribute(t, r))));
  }
  var de = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ye = Symbol.for('react.element'),
    z = Symbol.for('react.portal'),
    me = Symbol.for('react.fragment'),
    xe = Symbol.for('react.strict_mode'),
    Se = Symbol.for('react.profiler'),
    Ee = Symbol.for('react.provider'),
    ne = Symbol.for('react.context'),
    D = Symbol.for('react.forward_ref'),
    J = Symbol.for('react.suspense'),
    X = Symbol.for('react.suspense_list'),
    V = Symbol.for('react.memo'),
    ue = Symbol.for('react.lazy'),
    se = Symbol.for('react.offscreen'),
    q = Symbol.iterator;
  function ee(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (q && e[q]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var x = Object.assign,
    I;
  function M(e) {
    if (I === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        I = (t && t[1]) || '';
      }
    return (
      `
` +
      I +
      e
    );
  }
  var S = !1;
  function ae(e, t) {
    if (!e || S) return '';
    S = !0;
    var r = Error.prepareStackTrace;
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
          } catch (O) {
            var o = O;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (O) {
            o = O;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (O) {
          o = O;
        }
        e();
      }
    } catch (O) {
      if (O && o && typeof O.stack == 'string') {
        for (
          var u = O.stack.split(`
`),
            f = o.stack.split(`
`),
            g = u.length - 1,
            E = f.length - 1;
          1 <= g && 0 <= E && u[g] !== f[E];
        )
          E--;
        for (; 1 <= g && 0 <= E; g--, E--)
          if (u[g] !== f[E]) {
            if (g !== 1 || E !== 1)
              do
                if ((g--, E--, 0 > E || u[g] !== f[E])) {
                  var C =
                    `
` + u[g].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      C.includes('<anonymous>') &&
                      (C = C.replace('<anonymous>', e.displayName)),
                    C
                  );
                }
              while (1 <= g && 0 <= E);
            break;
          }
      }
    } finally {
      ((S = !1), (Error.prepareStackTrace = r));
    }
    return (e = e ? e.displayName || e.name : '') ? M(e) : '';
  }
  function ke(e) {
    switch (e.tag) {
      case 5:
        return M(e.type);
      case 16:
        return M('Lazy');
      case 13:
        return M('Suspense');
      case 19:
        return M('SuspenseList');
      case 0:
      case 2:
      case 15:
        return ((e = ae(e.type, !1)), e);
      case 11:
        return ((e = ae(e.type.render, !1)), e);
      case 1:
        return ((e = ae(e.type, !0)), e);
      default:
        return '';
    }
  }
  function fe(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case me:
        return 'Fragment';
      case z:
        return 'Portal';
      case Se:
        return 'Profiler';
      case xe:
        return 'StrictMode';
      case J:
        return 'Suspense';
      case X:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case ne:
          return (e.displayName || 'Context') + '.Consumer';
        case Ee:
          return (e._context.displayName || 'Context') + '.Provider';
        case D:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case V:
          return ((t = e.displayName || null), t !== null ? t : fe(e.type) || 'Memo');
        case ue:
          ((t = e._payload), (e = e._init));
          try {
            return fe(e(t));
          } catch {}
      }
    return null;
  }
  function Oe(e) {
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
        return fe(t);
      case 8:
        return t === xe ? 'StrictMode' : 'Mode';
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
  function Ce(e) {
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
  function Te(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function qe(e) {
    var t = Te(e) ? 'checked' : 'value',
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      o = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < 'u' &&
      typeof r.get == 'function' &&
      typeof r.set == 'function'
    ) {
      var u = r.get,
        f = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (g) {
            ((o = '' + g), f.call(this, g));
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (g) {
            o = '' + g;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function It(e) {
    e._valueTracker || (e._valueTracker = qe(e));
  }
  function hr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      o = '';
    return (
      e && (o = Te(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = o),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function cn(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function He(e, t) {
    var r = t.checked;
    return x({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function Cn(e, t) {
    var r = t.defaultValue == null ? '' : t.defaultValue,
      o = t.checked != null ? t.checked : t.defaultChecked;
    ((r = Ce(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: o,
        initialValue: r,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      }));
  }
  function Jt(e, t) {
    ((t = t.checked), t != null && U(e, 'checked', t, !1));
  }
  function fn(e, t) {
    Jt(e, t);
    var r = Ce(t.value),
      o = t.type;
    if (r != null)
      o === 'number'
        ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
        : e.value !== '' + r && (e.value = '' + r);
    else if (o === 'submit' || o === 'reset') {
      e.removeAttribute('value');
      return;
    }
    (t.hasOwnProperty('value')
      ? dn(e, t.type, r)
      : t.hasOwnProperty('defaultValue') && dn(e, t.type, Ce(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Xn(e, t, r) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var o = t.type;
      if (!((o !== 'submit' && o !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
      ((t = '' + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((r = e.name),
      r !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== '' && (e.name = r));
  }
  function dn(e, t, r) {
    (t !== 'number' || cn(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
  }
  var Zt = Array.isArray;
  function Q(e, t, r, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < r.length; u++) t['$' + r[u]] = !0;
      for (r = 0; r < e.length; r++)
        ((u = t.hasOwnProperty('$' + e[r].value)),
          e[r].selected !== u && (e[r].selected = u),
          u && o && (e[r].defaultSelected = !0));
    } else {
      for (r = '' + Ce(r), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === r) {
          ((e[u].selected = !0), o && (e[u].defaultSelected = !0));
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ce(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return x({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Ae(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(l(92));
        if (Zt(r)) {
          if (1 < r.length) throw Error(l(93));
          r = r[0];
        }
        t = r;
      }
      (t == null && (t = ''), (r = t));
    }
    e._wrapperState = { initialValue: Ce(r) };
  }
  function We(e, t) {
    var r = Ce(t.value),
      o = Ce(t.defaultValue);
    (r != null &&
      ((r = '' + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      o != null && (e.defaultValue = '' + o));
  }
  function Vt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function b(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function G(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? b(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var ge,
    Ne = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, r, o, u) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, o, u);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
      else {
        for (
          ge = ge || document.createElement('div'),
            ge.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = ge.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Pe(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var lt = {
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
    pn = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(lt).forEach(function (e) {
    pn.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (lt[t] = lt[e]));
    });
  });
  function At(e, t, r) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : r || typeof t != 'number' || t === 0 || (lt.hasOwnProperty(e) && lt[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function _n(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = r.indexOf('--') === 0,
          u = At(r, t[r], o);
        (r === 'float' && (r = 'cssFloat'), o ? e.setProperty(r, u) : (e[r] = u));
      }
  }
  var Kn = x(
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
  function ot(e, t) {
    if (t) {
      if (Kn[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(l(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(l(62));
    }
  }
  function en(e, t) {
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
  var Tt = null;
  function uo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ao = null,
    mr = null,
    gr = null;
  function Zu(e) {
    if ((e = pi(e))) {
      if (typeof ao != 'function') throw Error(l(280));
      var t = e.stateNode;
      t && ((t = ul(t)), ao(e.stateNode, e.type, t));
    }
  }
  function ea(e) {
    mr ? (gr ? gr.push(e) : (gr = [e])) : (mr = e);
  }
  function ta() {
    if (mr) {
      var e = mr,
        t = gr;
      if (((gr = mr = null), Zu(e), t)) for (e = 0; e < t.length; e++) Zu(t[e]);
    }
  }
  function na(e, t) {
    return e(t);
  }
  function ra() {}
  var co = !1;
  function ia(e, t, r) {
    if (co) return e(t, r);
    co = !0;
    try {
      return na(e, t, r);
    } finally {
      ((co = !1), (mr !== null || gr !== null) && (ra(), ta()));
    }
  }
  function $r(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var o = ul(r);
    if (o === null) return null;
    r = o[t];
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
        ((o = !o.disabled) ||
          ((e = e.type),
          (o = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !o));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != 'function') throw Error(l(231, t, typeof r));
    return r;
  }
  var fo = !1;
  if (p)
    try {
      var Qr = {};
      (Object.defineProperty(Qr, 'passive', {
        get: function () {
          fo = !0;
        },
      }),
        window.addEventListener('test', Qr, Qr),
        window.removeEventListener('test', Qr, Qr));
    } catch {
      fo = !1;
    }
  function Lp(e, t, r, o, u, f, g, E, C) {
    var O = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, O);
    } catch (B) {
      this.onError(B);
    }
  }
  var Gr = !1,
    Bi = null,
    Ui = !1,
    po = null,
    Op = {
      onError: function (e) {
        ((Gr = !0), (Bi = e));
      },
    };
  function Pp(e, t, r, o, u, f, g, E, C) {
    ((Gr = !1), (Bi = null), Lp.apply(Op, arguments));
  }
  function bp(e, t, r, o, u, f, g, E, C) {
    if ((Pp.apply(this, arguments), Gr)) {
      if (Gr) {
        var O = Bi;
        ((Gr = !1), (Bi = null));
      } else throw Error(l(198));
      Ui || ((Ui = !0), (po = O));
    }
  }
  function Jn(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function la(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function oa(e) {
    if (Jn(e) !== e) throw Error(l(188));
  }
  function Rp(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Jn(e)), t === null)) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var r = e, o = t; ; ) {
      var u = r.return;
      if (u === null) break;
      var f = u.alternate;
      if (f === null) {
        if (((o = u.return), o !== null)) {
          r = o;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (f = u.child; f; ) {
          if (f === r) return (oa(u), e);
          if (f === o) return (oa(u), t);
          f = f.sibling;
        }
        throw Error(l(188));
      }
      if (r.return !== o.return) ((r = u), (o = f));
      else {
        for (var g = !1, E = u.child; E; ) {
          if (E === r) {
            ((g = !0), (r = u), (o = f));
            break;
          }
          if (E === o) {
            ((g = !0), (o = u), (r = f));
            break;
          }
          E = E.sibling;
        }
        if (!g) {
          for (E = f.child; E; ) {
            if (E === r) {
              ((g = !0), (r = f), (o = u));
              break;
            }
            if (E === o) {
              ((g = !0), (o = f), (r = u));
              break;
            }
            E = E.sibling;
          }
          if (!g) throw Error(l(189));
        }
      }
      if (r.alternate !== o) throw Error(l(190));
    }
    if (r.tag !== 3) throw Error(l(188));
    return r.stateNode.current === r ? e : t;
  }
  function sa(e) {
    return ((e = Rp(e)), e !== null ? ua(e) : null);
  }
  function ua(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ua(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var aa = i.unstable_scheduleCallback,
    ca = i.unstable_cancelCallback,
    Dp = i.unstable_shouldYield,
    Ap = i.unstable_requestPaint,
    Ye = i.unstable_now,
    zp = i.unstable_getCurrentPriorityLevel,
    ho = i.unstable_ImmediatePriority,
    fa = i.unstable_UserBlockingPriority,
    Wi = i.unstable_NormalPriority,
    Mp = i.unstable_LowPriority,
    da = i.unstable_IdlePriority,
    Vi = null,
    tn = null;
  function jp(e) {
    if (tn && typeof tn.onCommitFiberRoot == 'function')
      try {
        tn.onCommitFiberRoot(Vi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var qt = Math.clz32 ? Math.clz32 : Up,
    Fp = Math.log,
    Bp = Math.LN2;
  function Up(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Fp(e) / Bp) | 0)) | 0);
  }
  var qi = 64,
    Hi = 4194304;
  function Yr(e) {
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
  function $i(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var o = 0,
      u = e.suspendedLanes,
      f = e.pingedLanes,
      g = r & 268435455;
    if (g !== 0) {
      var E = g & ~u;
      E !== 0 ? (o = Yr(E)) : ((f &= g), f !== 0 && (o = Yr(f)));
    } else ((g = r & ~u), g !== 0 ? (o = Yr(g)) : f !== 0 && (o = Yr(f)));
    if (o === 0) return 0;
    if (
      t !== 0 &&
      t !== o &&
      (t & u) === 0 &&
      ((u = o & -o), (f = t & -t), u >= f || (u === 16 && (f & 4194240) !== 0))
    )
      return t;
    if (((o & 4) !== 0 && (o |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= o; 0 < t; )
        ((r = 31 - qt(t)), (u = 1 << r), (o |= e[r]), (t &= ~u));
    return o;
  }
  function Wp(e, t) {
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
  function Vp(e, t) {
    for (
      var r = e.suspendedLanes, o = e.pingedLanes, u = e.expirationTimes, f = e.pendingLanes;
      0 < f;
    ) {
      var g = 31 - qt(f),
        E = 1 << g,
        C = u[g];
      (C === -1
        ? ((E & r) === 0 || (E & o) !== 0) && (u[g] = Wp(E, t))
        : C <= t && (e.expiredLanes |= E),
        (f &= ~E));
    }
  }
  function mo(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function pa() {
    var e = qi;
    return ((qi <<= 1), (qi & 4194240) === 0 && (qi = 64), e);
  }
  function go(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Xr(e, t, r) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - qt(t)),
      (e[t] = r));
  }
  function qp(e, t) {
    var r = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var u = 31 - qt(r),
        f = 1 << u;
      ((t[u] = 0), (o[u] = -1), (e[u] = -1), (r &= ~f));
    }
  }
  function yo(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var o = 31 - qt(r),
        u = 1 << o;
      ((u & t) | (e[o] & t) && (e[o] |= t), (r &= ~u));
    }
  }
  var ze = 0;
  function ha(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var ma,
    vo,
    ga,
    ya,
    va,
    wo = !1,
    Qi = [],
    In = null,
    Tn = null,
    Nn = null,
    Kr = new Map(),
    Jr = new Map(),
    Ln = [],
    Hp =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function wa(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        In = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Tn = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Nn = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Kr.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Jr.delete(t.pointerId);
    }
  }
  function Zr(e, t, r, o, u, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: o,
          nativeEvent: f,
          targetContainers: [u],
        }),
        t !== null && ((t = pi(t)), t !== null && vo(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function $p(e, t, r, o, u) {
    switch (t) {
      case 'focusin':
        return ((In = Zr(In, e, t, r, o, u)), !0);
      case 'dragenter':
        return ((Tn = Zr(Tn, e, t, r, o, u)), !0);
      case 'mouseover':
        return ((Nn = Zr(Nn, e, t, r, o, u)), !0);
      case 'pointerover':
        var f = u.pointerId;
        return (Kr.set(f, Zr(Kr.get(f) || null, e, t, r, o, u)), !0);
      case 'gotpointercapture':
        return ((f = u.pointerId), Jr.set(f, Zr(Jr.get(f) || null, e, t, r, o, u)), !0);
    }
    return !1;
  }
  function ka(e) {
    var t = Zn(e.target);
    if (t !== null) {
      var r = Jn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = la(r)), t !== null)) {
            ((e.blockedOn = t),
              va(e.priority, function () {
                ga(r);
              }));
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Gi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = xo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        ((Tt = o), r.target.dispatchEvent(o), (Tt = null));
      } else return ((t = pi(r)), t !== null && vo(t), (e.blockedOn = r), !1);
      t.shift();
    }
    return !0;
  }
  function xa(e, t, r) {
    Gi(e) && r.delete(t);
  }
  function Qp() {
    ((wo = !1),
      In !== null && Gi(In) && (In = null),
      Tn !== null && Gi(Tn) && (Tn = null),
      Nn !== null && Gi(Nn) && (Nn = null),
      Kr.forEach(xa),
      Jr.forEach(xa));
  }
  function ei(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      wo || ((wo = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, Qp)));
  }
  function ti(e) {
    function t(u) {
      return ei(u, e);
    }
    if (0 < Qi.length) {
      ei(Qi[0], e);
      for (var r = 1; r < Qi.length; r++) {
        var o = Qi[r];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      In !== null && ei(In, e),
        Tn !== null && ei(Tn, e),
        Nn !== null && ei(Nn, e),
        Kr.forEach(t),
        Jr.forEach(t),
        r = 0;
      r < Ln.length;
      r++
    )
      ((o = Ln[r]), o.blockedOn === e && (o.blockedOn = null));
    for (; 0 < Ln.length && ((r = Ln[0]), r.blockedOn === null); )
      (ka(r), r.blockedOn === null && Ln.shift());
  }
  var yr = de.ReactCurrentBatchConfig,
    Yi = !0;
  function Gp(e, t, r, o) {
    var u = ze,
      f = yr.transition;
    yr.transition = null;
    try {
      ((ze = 1), ko(e, t, r, o));
    } finally {
      ((ze = u), (yr.transition = f));
    }
  }
  function Yp(e, t, r, o) {
    var u = ze,
      f = yr.transition;
    yr.transition = null;
    try {
      ((ze = 4), ko(e, t, r, o));
    } finally {
      ((ze = u), (yr.transition = f));
    }
  }
  function ko(e, t, r, o) {
    if (Yi) {
      var u = xo(e, t, r, o);
      if (u === null) (jo(e, t, o, Xi, r), wa(e, o));
      else if ($p(u, e, t, r, o)) o.stopPropagation();
      else if ((wa(e, o), t & 4 && -1 < Hp.indexOf(e))) {
        for (; u !== null; ) {
          var f = pi(u);
          if (
            (f !== null && ma(f), (f = xo(e, t, r, o)), f === null && jo(e, t, o, Xi, r), f === u)
          )
            break;
          u = f;
        }
        u !== null && o.stopPropagation();
      } else jo(e, t, o, null, r);
    }
  }
  var Xi = null;
  function xo(e, t, r, o) {
    if (((Xi = null), (e = uo(o)), (e = Zn(e)), e !== null))
      if (((t = Jn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = la(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Xi = e), null);
  }
  function Sa(e) {
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
        switch (zp()) {
          case ho:
            return 1;
          case fa:
            return 4;
          case Wi:
          case Mp:
            return 16;
          case da:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var On = null,
    So = null,
    Ki = null;
  function Ea() {
    if (Ki) return Ki;
    var e,
      t = So,
      r = t.length,
      o,
      u = 'value' in On ? On.value : On.textContent,
      f = u.length;
    for (e = 0; e < r && t[e] === u[e]; e++);
    var g = r - e;
    for (o = 1; o <= g && t[r - o] === u[f - o]; o++);
    return (Ki = u.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Ji(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Zi() {
    return !0;
  }
  function Ca() {
    return !1;
  }
  function Nt(e) {
    function t(r, o, u, f, g) {
      ((this._reactName = r),
        (this._targetInst = u),
        (this.type = o),
        (this.nativeEvent = f),
        (this.target = g),
        (this.currentTarget = null));
      for (var E in e) e.hasOwnProperty(E) && ((r = e[E]), (this[E] = r ? r(f) : f[E]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? Zi
          : Ca),
        (this.isPropagationStopped = Ca),
        this
      );
    }
    return (
      x(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
            (this.isDefaultPrevented = Zi));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
            (this.isPropagationStopped = Zi));
        },
        persist: function () {},
        isPersistent: Zi,
      }),
      t
    );
  }
  var vr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Eo = Nt(vr),
    ni = x({}, vr, { view: 0, detail: 0 }),
    Xp = Nt(ni),
    Co,
    _o,
    ri,
    el = x({}, ni, {
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
      getModifierState: To,
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
          : (e !== ri &&
              (ri && e.type === 'mousemove'
                ? ((Co = e.screenX - ri.screenX), (_o = e.screenY - ri.screenY))
                : (_o = Co = 0),
              (ri = e)),
            Co);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : _o;
      },
    }),
    _a = Nt(el),
    Kp = x({}, el, { dataTransfer: 0 }),
    Jp = Nt(Kp),
    Zp = x({}, ni, { relatedTarget: 0 }),
    Io = Nt(Zp),
    eh = x({}, vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    th = Nt(eh),
    nh = x({}, vr, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    rh = Nt(nh),
    ih = x({}, vr, { data: 0 }),
    Ia = Nt(ih),
    lh = {
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
    oh = {
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
    sh = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function uh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = sh[e]) ? !!t[e] : !1;
  }
  function To() {
    return uh;
  }
  var ah = x({}, ni, {
      key: function (e) {
        if (e.key) {
          var t = lh[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Ji(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? oh[e.keyCode] || 'Unidentified'
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
      getModifierState: To,
      charCode: function (e) {
        return e.type === 'keypress' ? Ji(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Ji(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    ch = Nt(ah),
    fh = x({}, el, {
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
    Ta = Nt(fh),
    dh = x({}, ni, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: To,
    }),
    ph = Nt(dh),
    hh = x({}, vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    mh = Nt(hh),
    gh = x({}, el, {
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
    yh = Nt(gh),
    vh = [9, 13, 27, 32],
    No = p && 'CompositionEvent' in window,
    ii = null;
  p && 'documentMode' in document && (ii = document.documentMode);
  var wh = p && 'TextEvent' in window && !ii,
    Na = p && (!No || (ii && 8 < ii && 11 >= ii)),
    La = ' ',
    Oa = !1;
  function Pa(e, t) {
    switch (e) {
      case 'keyup':
        return vh.indexOf(t.keyCode) !== -1;
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
  function ba(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var wr = !1;
  function kh(e, t) {
    switch (e) {
      case 'compositionend':
        return ba(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Oa = !0), La);
      case 'textInput':
        return ((e = t.data), e === La && Oa ? null : e);
      default:
        return null;
    }
  }
  function xh(e, t) {
    if (wr)
      return e === 'compositionend' || (!No && Pa(e, t))
        ? ((e = Ea()), (Ki = So = On = null), (wr = !1), e)
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
        return Na && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Sh = {
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
  function Ra(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Sh[e.type] : t === 'textarea';
  }
  function Da(e, t, r, o) {
    (ea(o),
      (t = ll(t, 'onChange')),
      0 < t.length &&
        ((r = new Eo('onChange', 'change', null, r, o)), e.push({ event: r, listeners: t })));
  }
  var li = null,
    oi = null;
  function Eh(e) {
    Ja(e, 0);
  }
  function tl(e) {
    var t = Cr(e);
    if (hr(t)) return e;
  }
  function Ch(e, t) {
    if (e === 'change') return t;
  }
  var Aa = !1;
  if (p) {
    var Lo;
    if (p) {
      var Oo = 'oninput' in document;
      if (!Oo) {
        var za = document.createElement('div');
        (za.setAttribute('oninput', 'return;'), (Oo = typeof za.oninput == 'function'));
      }
      Lo = Oo;
    } else Lo = !1;
    Aa = Lo && (!document.documentMode || 9 < document.documentMode);
  }
  function Ma() {
    li && (li.detachEvent('onpropertychange', ja), (oi = li = null));
  }
  function ja(e) {
    if (e.propertyName === 'value' && tl(oi)) {
      var t = [];
      (Da(t, oi, e, uo(e)), ia(Eh, t));
    }
  }
  function _h(e, t, r) {
    e === 'focusin'
      ? (Ma(), (li = t), (oi = r), li.attachEvent('onpropertychange', ja))
      : e === 'focusout' && Ma();
  }
  function Ih(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return tl(oi);
  }
  function Th(e, t) {
    if (e === 'click') return tl(t);
  }
  function Nh(e, t) {
    if (e === 'input' || e === 'change') return tl(t);
  }
  function Lh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ht = typeof Object.is == 'function' ? Object.is : Lh;
  function si(e, t) {
    if (Ht(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var r = Object.keys(e),
      o = Object.keys(t);
    if (r.length !== o.length) return !1;
    for (o = 0; o < r.length; o++) {
      var u = r[o];
      if (!m.call(t, u) || !Ht(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Fa(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ba(e, t) {
    var r = Fa(e);
    e = 0;
    for (var o; r; ) {
      if (r.nodeType === 3) {
        if (((o = e + r.textContent.length), e <= t && o >= t)) return { node: r, offset: t - e };
        e = o;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Fa(r);
    }
  }
  function Ua(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Ua(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Wa() {
    for (var e = window, t = cn(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == 'string';
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = cn(e.document);
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
  function Oh(e) {
    var t = Wa(),
      r = e.focusedElem,
      o = e.selectionRange;
    if (t !== r && r && r.ownerDocument && Ua(r.ownerDocument.documentElement, r)) {
      if (o !== null && Po(r)) {
        if (((t = o.start), (e = o.end), e === void 0 && (e = t), 'selectionStart' in r))
          ((r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length)));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var u = r.textContent.length,
            f = Math.min(o.start, u);
          ((o = o.end === void 0 ? f : Math.min(o.end, u)),
            !e.extend && f > o && ((u = o), (o = f), (f = u)),
            (u = Ba(r, f)));
          var g = Ba(r, o);
          u &&
            g &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== g.node ||
              e.focusOffset !== g.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            e.removeAllRanges(),
            f > o
              ? (e.addRange(t), e.extend(g.node, g.offset))
              : (t.setEnd(g.node, g.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
        ((e = t[r]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var Ph = p && 'documentMode' in document && 11 >= document.documentMode,
    kr = null,
    bo = null,
    ui = null,
    Ro = !1;
  function Va(e, t, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Ro ||
      kr == null ||
      kr !== cn(o) ||
      ((o = kr),
      'selectionStart' in o && Po(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (ui && si(ui, o)) ||
        ((ui = o),
        (o = ll(bo, 'onSelect')),
        0 < o.length &&
          ((t = new Eo('onSelect', 'select', null, t, r)),
          e.push({ event: t, listeners: o }),
          (t.target = kr))));
  }
  function nl(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r['Webkit' + e] = 'webkit' + t),
      (r['Moz' + e] = 'moz' + t),
      r
    );
  }
  var xr = {
      animationend: nl('Animation', 'AnimationEnd'),
      animationiteration: nl('Animation', 'AnimationIteration'),
      animationstart: nl('Animation', 'AnimationStart'),
      transitionend: nl('Transition', 'TransitionEnd'),
    },
    Do = {},
    qa = {};
  p &&
    ((qa = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete xr.animationend.animation,
      delete xr.animationiteration.animation,
      delete xr.animationstart.animation),
    'TransitionEvent' in window || delete xr.transitionend.transition);
  function rl(e) {
    if (Do[e]) return Do[e];
    if (!xr[e]) return e;
    var t = xr[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in qa) return (Do[e] = t[r]);
    return e;
  }
  var Ha = rl('animationend'),
    $a = rl('animationiteration'),
    Qa = rl('animationstart'),
    Ga = rl('transitionend'),
    Ya = new Map(),
    Xa =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Pn(e, t) {
    (Ya.set(e, t), c(t, [e]));
  }
  for (var Ao = 0; Ao < Xa.length; Ao++) {
    var zo = Xa[Ao],
      bh = zo.toLowerCase(),
      Rh = zo[0].toUpperCase() + zo.slice(1);
    Pn(bh, 'on' + Rh);
  }
  (Pn(Ha, 'onAnimationEnd'),
    Pn($a, 'onAnimationIteration'),
    Pn(Qa, 'onAnimationStart'),
    Pn('dblclick', 'onDoubleClick'),
    Pn('focusin', 'onFocus'),
    Pn('focusout', 'onBlur'),
    Pn(Ga, 'onTransitionEnd'),
    d('onMouseEnter', ['mouseout', 'mouseover']),
    d('onMouseLeave', ['mouseout', 'mouseover']),
    d('onPointerEnter', ['pointerout', 'pointerover']),
    d('onPointerLeave', ['pointerout', 'pointerover']),
    c('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    c(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    c('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    c('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    c(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    c(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var ai =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Dh = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ai));
  function Ka(e, t, r) {
    var o = e.type || 'unknown-event';
    ((e.currentTarget = r), bp(o, t, void 0, e), (e.currentTarget = null));
  }
  function Ja(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var o = e[r],
        u = o.event;
      o = o.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var g = o.length - 1; 0 <= g; g--) {
            var E = o[g],
              C = E.instance,
              O = E.currentTarget;
            if (((E = E.listener), C !== f && u.isPropagationStopped())) break e;
            (Ka(u, E, O), (f = C));
          }
        else
          for (g = 0; g < o.length; g++) {
            if (
              ((E = o[g]),
              (C = E.instance),
              (O = E.currentTarget),
              (E = E.listener),
              C !== f && u.isPropagationStopped())
            )
              break e;
            (Ka(u, E, O), (f = C));
          }
      }
    }
    if (Ui) throw ((e = po), (Ui = !1), (po = null), e);
  }
  function Be(e, t) {
    var r = t[qo];
    r === void 0 && (r = t[qo] = new Set());
    var o = e + '__bubble';
    r.has(o) || (Za(t, e, 2, !1), r.add(o));
  }
  function Mo(e, t, r) {
    var o = 0;
    (t && (o |= 4), Za(r, e, o, t));
  }
  var il = '_reactListening' + Math.random().toString(36).slice(2);
  function ci(e) {
    if (!e[il]) {
      ((e[il] = !0),
        s.forEach(function (r) {
          r !== 'selectionchange' && (Dh.has(r) || Mo(r, !1, e), Mo(r, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[il] || ((t[il] = !0), Mo('selectionchange', !1, t));
    }
  }
  function Za(e, t, r, o) {
    switch (Sa(t)) {
      case 1:
        var u = Gp;
        break;
      case 4:
        u = Yp;
        break;
      default:
        u = ko;
    }
    ((r = u.bind(null, t, r, e)),
      (u = void 0),
      !fo || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (u = !0),
      o
        ? u !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: u })
          : e.addEventListener(t, r, !0)
        : u !== void 0
          ? e.addEventListener(t, r, { passive: u })
          : e.addEventListener(t, r, !1));
  }
  function jo(e, t, r, o, u) {
    var f = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var g = o.tag;
        if (g === 3 || g === 4) {
          var E = o.stateNode.containerInfo;
          if (E === u || (E.nodeType === 8 && E.parentNode === u)) break;
          if (g === 4)
            for (g = o.return; g !== null; ) {
              var C = g.tag;
              if (
                (C === 3 || C === 4) &&
                ((C = g.stateNode.containerInfo),
                C === u || (C.nodeType === 8 && C.parentNode === u))
              )
                return;
              g = g.return;
            }
          for (; E !== null; ) {
            if (((g = Zn(E)), g === null)) return;
            if (((C = g.tag), C === 5 || C === 6)) {
              o = f = g;
              continue e;
            }
            E = E.parentNode;
          }
        }
        o = o.return;
      }
    ia(function () {
      var O = f,
        B = uo(r),
        W = [];
      e: {
        var F = Ya.get(e);
        if (F !== void 0) {
          var Z = Eo,
            re = e;
          switch (e) {
            case 'keypress':
              if (Ji(r) === 0) break e;
            case 'keydown':
            case 'keyup':
              Z = ch;
              break;
            case 'focusin':
              ((re = 'focus'), (Z = Io));
              break;
            case 'focusout':
              ((re = 'blur'), (Z = Io));
              break;
            case 'beforeblur':
            case 'afterblur':
              Z = Io;
              break;
            case 'click':
              if (r.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              Z = _a;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              Z = Jp;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              Z = ph;
              break;
            case Ha:
            case $a:
            case Qa:
              Z = th;
              break;
            case Ga:
              Z = mh;
              break;
            case 'scroll':
              Z = Xp;
              break;
            case 'wheel':
              Z = yh;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              Z = rh;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              Z = Ta;
          }
          var ie = (t & 4) !== 0,
            Xe = !ie && e === 'scroll',
            T = ie ? (F !== null ? F + 'Capture' : null) : F;
          ie = [];
          for (var _ = O, N; _ !== null; ) {
            N = _;
            var $ = N.stateNode;
            if (
              (N.tag === 5 &&
                $ !== null &&
                ((N = $), T !== null && (($ = $r(_, T)), $ != null && ie.push(fi(_, $, N)))),
              Xe)
            )
              break;
            _ = _.return;
          }
          0 < ie.length && ((F = new Z(F, re, null, r, B)), W.push({ event: F, listeners: ie }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((F = e === 'mouseover' || e === 'pointerover'),
            (Z = e === 'mouseout' || e === 'pointerout'),
            F && r !== Tt && (re = r.relatedTarget || r.fromElement) && (Zn(re) || re[hn]))
          )
            break e;
          if (
            (Z || F) &&
            ((F =
              B.window === B
                ? B
                : (F = B.ownerDocument)
                  ? F.defaultView || F.parentWindow
                  : window),
            Z
              ? ((re = r.relatedTarget || r.toElement),
                (Z = O),
                (re = re ? Zn(re) : null),
                re !== null &&
                  ((Xe = Jn(re)), re !== Xe || (re.tag !== 5 && re.tag !== 6)) &&
                  (re = null))
              : ((Z = null), (re = O)),
            Z !== re)
          ) {
            if (
              ((ie = _a),
              ($ = 'onMouseLeave'),
              (T = 'onMouseEnter'),
              (_ = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((ie = Ta), ($ = 'onPointerLeave'), (T = 'onPointerEnter'), (_ = 'pointer')),
              (Xe = Z == null ? F : Cr(Z)),
              (N = re == null ? F : Cr(re)),
              (F = new ie($, _ + 'leave', Z, r, B)),
              (F.target = Xe),
              (F.relatedTarget = N),
              ($ = null),
              Zn(B) === O &&
                ((ie = new ie(T, _ + 'enter', re, r, B)),
                (ie.target = N),
                (ie.relatedTarget = Xe),
                ($ = ie)),
              (Xe = $),
              Z && re)
            )
              t: {
                for (ie = Z, T = re, _ = 0, N = ie; N; N = Sr(N)) _++;
                for (N = 0, $ = T; $; $ = Sr($)) N++;
                for (; 0 < _ - N; ) ((ie = Sr(ie)), _--);
                for (; 0 < N - _; ) ((T = Sr(T)), N--);
                for (; _--; ) {
                  if (ie === T || (T !== null && ie === T.alternate)) break t;
                  ((ie = Sr(ie)), (T = Sr(T)));
                }
                ie = null;
              }
            else ie = null;
            (Z !== null && ec(W, F, Z, ie, !1),
              re !== null && Xe !== null && ec(W, Xe, re, ie, !0));
          }
        }
        e: {
          if (
            ((F = O ? Cr(O) : window),
            (Z = F.nodeName && F.nodeName.toLowerCase()),
            Z === 'select' || (Z === 'input' && F.type === 'file'))
          )
            var oe = Ch;
          else if (Ra(F))
            if (Aa) oe = Nh;
            else {
              oe = Ih;
              var pe = _h;
            }
          else
            (Z = F.nodeName) &&
              Z.toLowerCase() === 'input' &&
              (F.type === 'checkbox' || F.type === 'radio') &&
              (oe = Th);
          if (oe && (oe = oe(e, O))) {
            Da(W, oe, r, B);
            break e;
          }
          (pe && pe(e, F, O),
            e === 'focusout' &&
              (pe = F._wrapperState) &&
              pe.controlled &&
              F.type === 'number' &&
              dn(F, 'number', F.value));
        }
        switch (((pe = O ? Cr(O) : window), e)) {
          case 'focusin':
            (Ra(pe) || pe.contentEditable === 'true') && ((kr = pe), (bo = O), (ui = null));
            break;
          case 'focusout':
            ui = bo = kr = null;
            break;
          case 'mousedown':
            Ro = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Ro = !1), Va(W, r, B));
            break;
          case 'selectionchange':
            if (Ph) break;
          case 'keydown':
          case 'keyup':
            Va(W, r, B);
        }
        var he;
        if (No)
          e: {
            switch (e) {
              case 'compositionstart':
                var ve = 'onCompositionStart';
                break e;
              case 'compositionend':
                ve = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                ve = 'onCompositionUpdate';
                break e;
            }
            ve = void 0;
          }
        else
          wr
            ? Pa(e, r) && (ve = 'onCompositionEnd')
            : e === 'keydown' && r.keyCode === 229 && (ve = 'onCompositionStart');
        (ve &&
          (Na &&
            r.locale !== 'ko' &&
            (wr || ve !== 'onCompositionStart'
              ? ve === 'onCompositionEnd' && wr && (he = Ea())
              : ((On = B), (So = 'value' in On ? On.value : On.textContent), (wr = !0))),
          (pe = ll(O, ve)),
          0 < pe.length &&
            ((ve = new Ia(ve, e, null, r, B)),
            W.push({ event: ve, listeners: pe }),
            he ? (ve.data = he) : ((he = ba(r)), he !== null && (ve.data = he)))),
          (he = wh ? kh(e, r) : xh(e, r)) &&
            ((O = ll(O, 'onBeforeInput')),
            0 < O.length &&
              ((B = new Ia('onBeforeInput', 'beforeinput', null, r, B)),
              W.push({ event: B, listeners: O }),
              (B.data = he))));
      }
      Ja(W, t);
    });
  }
  function fi(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function ll(e, t) {
    for (var r = t + 'Capture', o = []; e !== null; ) {
      var u = e,
        f = u.stateNode;
      (u.tag === 5 &&
        f !== null &&
        ((u = f),
        (f = $r(e, r)),
        f != null && o.unshift(fi(e, f, u)),
        (f = $r(e, t)),
        f != null && o.push(fi(e, f, u))),
        (e = e.return));
    }
    return o;
  }
  function Sr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ec(e, t, r, o, u) {
    for (var f = t._reactName, g = []; r !== null && r !== o; ) {
      var E = r,
        C = E.alternate,
        O = E.stateNode;
      if (C !== null && C === o) break;
      (E.tag === 5 &&
        O !== null &&
        ((E = O),
        u
          ? ((C = $r(r, f)), C != null && g.unshift(fi(r, C, E)))
          : u || ((C = $r(r, f)), C != null && g.push(fi(r, C, E)))),
        (r = r.return));
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var Ah = /\r\n?/g,
    zh = /\u0000|\uFFFD/g;
  function tc(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Ah,
        `
`
      )
      .replace(zh, '');
  }
  function ol(e, t, r) {
    if (((t = tc(t)), tc(e) !== t && r)) throw Error(l(425));
  }
  function sl() {}
  var Fo = null,
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
  var Wo = typeof setTimeout == 'function' ? setTimeout : void 0,
    Mh = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    nc = typeof Promise == 'function' ? Promise : void 0,
    jh =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof nc < 'u'
          ? function (e) {
              return nc.resolve(null).then(e).catch(Fh);
            }
          : Wo;
  function Fh(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Vo(e, t) {
    var r = t,
      o = 0;
    do {
      var u = r.nextSibling;
      if ((e.removeChild(r), u && u.nodeType === 8))
        if (((r = u.data), r === '/$')) {
          if (o === 0) {
            (e.removeChild(u), ti(t));
            return;
          }
          o--;
        } else (r !== '$' && r !== '$?' && r !== '$!') || o++;
      r = u;
    } while (r);
    ti(t);
  }
  function bn(e) {
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
  function rc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === '$' || r === '$!' || r === '$?') {
          if (t === 0) return e;
          t--;
        } else r === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Er = Math.random().toString(36).slice(2),
    nn = '__reactFiber$' + Er,
    di = '__reactProps$' + Er,
    hn = '__reactContainer$' + Er,
    qo = '__reactEvents$' + Er,
    Bh = '__reactListeners$' + Er,
    Uh = '__reactHandles$' + Er;
  function Zn(e) {
    var t = e[nn];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[hn] || r[nn])) {
        if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
          for (e = rc(e); e !== null; ) {
            if ((r = e[nn])) return r;
            e = rc(e);
          }
        return t;
      }
      ((e = r), (r = e.parentNode));
    }
    return null;
  }
  function pi(e) {
    return (
      (e = e[nn] || e[hn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Cr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function ul(e) {
    return e[di] || null;
  }
  var Ho = [],
    _r = -1;
  function Rn(e) {
    return { current: e };
  }
  function Ue(e) {
    0 > _r || ((e.current = Ho[_r]), (Ho[_r] = null), _r--);
  }
  function Me(e, t) {
    (_r++, (Ho[_r] = e.current), (e.current = t));
  }
  var Dn = {},
    at = Rn(Dn),
    gt = Rn(!1),
    er = Dn;
  function Ir(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Dn;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
      return o.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      f;
    for (f in r) u[f] = t[f];
    return (
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function yt(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function al() {
    (Ue(gt), Ue(at));
  }
  function ic(e, t, r) {
    if (at.current !== Dn) throw Error(l(168));
    (Me(at, t), Me(gt, r));
  }
  function lc(e, t, r) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != 'function')) return r;
    o = o.getChildContext();
    for (var u in o) if (!(u in t)) throw Error(l(108, Oe(e) || 'Unknown', u));
    return x({}, r, o);
  }
  function cl(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dn),
      (er = at.current),
      Me(at, e),
      Me(gt, gt.current),
      !0
    );
  }
  function oc(e, t, r) {
    var o = e.stateNode;
    if (!o) throw Error(l(169));
    (r
      ? ((e = lc(e, t, er)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        Ue(gt),
        Ue(at),
        Me(at, e))
      : Ue(gt),
      Me(gt, r));
  }
  var mn = null,
    fl = !1,
    $o = !1;
  function sc(e) {
    mn === null ? (mn = [e]) : mn.push(e);
  }
  function Wh(e) {
    ((fl = !0), sc(e));
  }
  function An() {
    if (!$o && mn !== null) {
      $o = !0;
      var e = 0,
        t = ze;
      try {
        var r = mn;
        for (ze = 1; e < r.length; e++) {
          var o = r[e];
          do o = o(!0);
          while (o !== null);
        }
        ((mn = null), (fl = !1));
      } catch (u) {
        throw (mn !== null && (mn = mn.slice(e + 1)), aa(ho, An), u);
      } finally {
        ((ze = t), ($o = !1));
      }
    }
    return null;
  }
  var Tr = [],
    Nr = 0,
    dl = null,
    pl = 0,
    zt = [],
    Mt = 0,
    tr = null,
    gn = 1,
    yn = '';
  function nr(e, t) {
    ((Tr[Nr++] = pl), (Tr[Nr++] = dl), (dl = e), (pl = t));
  }
  function uc(e, t, r) {
    ((zt[Mt++] = gn), (zt[Mt++] = yn), (zt[Mt++] = tr), (tr = e));
    var o = gn;
    e = yn;
    var u = 32 - qt(o) - 1;
    ((o &= ~(1 << u)), (r += 1));
    var f = 32 - qt(t) + u;
    if (30 < f) {
      var g = u - (u % 5);
      ((f = (o & ((1 << g) - 1)).toString(32)),
        (o >>= g),
        (u -= g),
        (gn = (1 << (32 - qt(t) + u)) | (r << u) | o),
        (yn = f + e));
    } else ((gn = (1 << f) | (r << u) | o), (yn = e));
  }
  function Qo(e) {
    e.return !== null && (nr(e, 1), uc(e, 1, 0));
  }
  function Go(e) {
    for (; e === dl; ) ((dl = Tr[--Nr]), (Tr[Nr] = null), (pl = Tr[--Nr]), (Tr[Nr] = null));
    for (; e === tr; )
      ((tr = zt[--Mt]),
        (zt[Mt] = null),
        (yn = zt[--Mt]),
        (zt[Mt] = null),
        (gn = zt[--Mt]),
        (zt[Mt] = null));
  }
  var Lt = null,
    Ot = null,
    Ve = !1,
    $t = null;
  function ac(e, t) {
    var r = Ut(5, null, null, 0);
    ((r.elementType = 'DELETED'),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
  }
  function cc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (Lt = e), (Ot = bn(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Lt = e), (Ot = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = tr !== null ? { id: gn, overflow: yn } : null),
              (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
              (r = Ut(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (Lt = e),
              (Ot = null),
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
    if (Ve) {
      var t = Ot;
      if (t) {
        var r = t;
        if (!cc(e, t)) {
          if (Yo(e)) throw Error(l(418));
          t = bn(r.nextSibling);
          var o = Lt;
          t && cc(e, t) ? ac(o, r) : ((e.flags = (e.flags & -4097) | 2), (Ve = !1), (Lt = e));
        }
      } else {
        if (Yo(e)) throw Error(l(418));
        ((e.flags = (e.flags & -4097) | 2), (Ve = !1), (Lt = e));
      }
    }
  }
  function fc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Lt = e;
  }
  function hl(e) {
    if (e !== Lt) return !1;
    if (!Ve) return (fc(e), (Ve = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !Uo(e.type, e.memoizedProps))),
      t && (t = Ot))
    ) {
      if (Yo(e)) throw (dc(), Error(l(418)));
      for (; t; ) (ac(e, t), (t = bn(t.nextSibling)));
    }
    if ((fc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === '/$') {
              if (t === 0) {
                Ot = bn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        Ot = null;
      }
    } else Ot = Lt ? bn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function dc() {
    for (var e = Ot; e; ) e = bn(e.nextSibling);
  }
  function Lr() {
    ((Ot = Lt = null), (Ve = !1));
  }
  function Ko(e) {
    $t === null ? ($t = [e]) : $t.push(e);
  }
  var Vh = de.ReactCurrentBatchConfig;
  function hi(e, t, r) {
    if (((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(l(309));
          var o = r.stateNode;
        }
        if (!o) throw Error(l(147, e));
        var u = o,
          f = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === f
          ? t.ref
          : ((t = function (g) {
              var E = u.refs;
              g === null ? delete E[f] : (E[f] = g);
            }),
            (t._stringRef = f),
            t);
      }
      if (typeof e != 'string') throw Error(l(284));
      if (!r._owner) throw Error(l(290, e));
    }
    return e;
  }
  function ml(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        l(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      )
    );
  }
  function pc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function hc(e) {
    function t(T, _) {
      if (e) {
        var N = T.deletions;
        N === null ? ((T.deletions = [_]), (T.flags |= 16)) : N.push(_);
      }
    }
    function r(T, _) {
      if (!e) return null;
      for (; _ !== null; ) (t(T, _), (_ = _.sibling));
      return null;
    }
    function o(T, _) {
      for (T = new Map(); _ !== null; )
        (_.key !== null ? T.set(_.key, _) : T.set(_.index, _), (_ = _.sibling));
      return T;
    }
    function u(T, _) {
      return ((T = Vn(T, _)), (T.index = 0), (T.sibling = null), T);
    }
    function f(T, _, N) {
      return (
        (T.index = N),
        e
          ? ((N = T.alternate),
            N !== null ? ((N = N.index), N < _ ? ((T.flags |= 2), _) : N) : ((T.flags |= 2), _))
          : ((T.flags |= 1048576), _)
      );
    }
    function g(T) {
      return (e && T.alternate === null && (T.flags |= 2), T);
    }
    function E(T, _, N, $) {
      return _ === null || _.tag !== 6
        ? ((_ = Ws(N, T.mode, $)), (_.return = T), _)
        : ((_ = u(_, N)), (_.return = T), _);
    }
    function C(T, _, N, $) {
      var oe = N.type;
      return oe === me
        ? B(T, _, N.props.children, $, N.key)
        : _ !== null &&
            (_.elementType === oe ||
              (typeof oe == 'object' && oe !== null && oe.$$typeof === ue && pc(oe) === _.type))
          ? (($ = u(_, N.props)), ($.ref = hi(T, _, N)), ($.return = T), $)
          : (($ = Fl(N.type, N.key, N.props, null, T.mode, $)),
            ($.ref = hi(T, _, N)),
            ($.return = T),
            $);
    }
    function O(T, _, N, $) {
      return _ === null ||
        _.tag !== 4 ||
        _.stateNode.containerInfo !== N.containerInfo ||
        _.stateNode.implementation !== N.implementation
        ? ((_ = Vs(N, T.mode, $)), (_.return = T), _)
        : ((_ = u(_, N.children || [])), (_.return = T), _);
    }
    function B(T, _, N, $, oe) {
      return _ === null || _.tag !== 7
        ? ((_ = cr(N, T.mode, $, oe)), (_.return = T), _)
        : ((_ = u(_, N)), (_.return = T), _);
    }
    function W(T, _, N) {
      if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
        return ((_ = Ws('' + _, T.mode, N)), (_.return = T), _);
      if (typeof _ == 'object' && _ !== null) {
        switch (_.$$typeof) {
          case ye:
            return (
              (N = Fl(_.type, _.key, _.props, null, T.mode, N)),
              (N.ref = hi(T, null, _)),
              (N.return = T),
              N
            );
          case z:
            return ((_ = Vs(_, T.mode, N)), (_.return = T), _);
          case ue:
            var $ = _._init;
            return W(T, $(_._payload), N);
        }
        if (Zt(_) || ee(_)) return ((_ = cr(_, T.mode, N, null)), (_.return = T), _);
        ml(T, _);
      }
      return null;
    }
    function F(T, _, N, $) {
      var oe = _ !== null ? _.key : null;
      if ((typeof N == 'string' && N !== '') || typeof N == 'number')
        return oe !== null ? null : E(T, _, '' + N, $);
      if (typeof N == 'object' && N !== null) {
        switch (N.$$typeof) {
          case ye:
            return N.key === oe ? C(T, _, N, $) : null;
          case z:
            return N.key === oe ? O(T, _, N, $) : null;
          case ue:
            return ((oe = N._init), F(T, _, oe(N._payload), $));
        }
        if (Zt(N) || ee(N)) return oe !== null ? null : B(T, _, N, $, null);
        ml(T, N);
      }
      return null;
    }
    function Z(T, _, N, $, oe) {
      if ((typeof $ == 'string' && $ !== '') || typeof $ == 'number')
        return ((T = T.get(N) || null), E(_, T, '' + $, oe));
      if (typeof $ == 'object' && $ !== null) {
        switch ($.$$typeof) {
          case ye:
            return ((T = T.get($.key === null ? N : $.key) || null), C(_, T, $, oe));
          case z:
            return ((T = T.get($.key === null ? N : $.key) || null), O(_, T, $, oe));
          case ue:
            var pe = $._init;
            return Z(T, _, N, pe($._payload), oe);
        }
        if (Zt($) || ee($)) return ((T = T.get(N) || null), B(_, T, $, oe, null));
        ml(_, $);
      }
      return null;
    }
    function re(T, _, N, $) {
      for (
        var oe = null, pe = null, he = _, ve = (_ = 0), it = null;
        he !== null && ve < N.length;
        ve++
      ) {
        he.index > ve ? ((it = he), (he = null)) : (it = he.sibling);
        var Re = F(T, he, N[ve], $);
        if (Re === null) {
          he === null && (he = it);
          break;
        }
        (e && he && Re.alternate === null && t(T, he),
          (_ = f(Re, _, ve)),
          pe === null ? (oe = Re) : (pe.sibling = Re),
          (pe = Re),
          (he = it));
      }
      if (ve === N.length) return (r(T, he), Ve && nr(T, ve), oe);
      if (he === null) {
        for (; ve < N.length; ve++)
          ((he = W(T, N[ve], $)),
            he !== null &&
              ((_ = f(he, _, ve)), pe === null ? (oe = he) : (pe.sibling = he), (pe = he)));
        return (Ve && nr(T, ve), oe);
      }
      for (he = o(T, he); ve < N.length; ve++)
        ((it = Z(he, T, ve, N[ve], $)),
          it !== null &&
            (e && it.alternate !== null && he.delete(it.key === null ? ve : it.key),
            (_ = f(it, _, ve)),
            pe === null ? (oe = it) : (pe.sibling = it),
            (pe = it)));
      return (
        e &&
          he.forEach(function (qn) {
            return t(T, qn);
          }),
        Ve && nr(T, ve),
        oe
      );
    }
    function ie(T, _, N, $) {
      var oe = ee(N);
      if (typeof oe != 'function') throw Error(l(150));
      if (((N = oe.call(N)), N == null)) throw Error(l(151));
      for (
        var pe = (oe = null), he = _, ve = (_ = 0), it = null, Re = N.next();
        he !== null && !Re.done;
        ve++, Re = N.next()
      ) {
        he.index > ve ? ((it = he), (he = null)) : (it = he.sibling);
        var qn = F(T, he, Re.value, $);
        if (qn === null) {
          he === null && (he = it);
          break;
        }
        (e && he && qn.alternate === null && t(T, he),
          (_ = f(qn, _, ve)),
          pe === null ? (oe = qn) : (pe.sibling = qn),
          (pe = qn),
          (he = it));
      }
      if (Re.done) return (r(T, he), Ve && nr(T, ve), oe);
      if (he === null) {
        for (; !Re.done; ve++, Re = N.next())
          ((Re = W(T, Re.value, $)),
            Re !== null &&
              ((_ = f(Re, _, ve)), pe === null ? (oe = Re) : (pe.sibling = Re), (pe = Re)));
        return (Ve && nr(T, ve), oe);
      }
      for (he = o(T, he); !Re.done; ve++, Re = N.next())
        ((Re = Z(he, T, ve, Re.value, $)),
          Re !== null &&
            (e && Re.alternate !== null && he.delete(Re.key === null ? ve : Re.key),
            (_ = f(Re, _, ve)),
            pe === null ? (oe = Re) : (pe.sibling = Re),
            (pe = Re)));
      return (
        e &&
          he.forEach(function (Sm) {
            return t(T, Sm);
          }),
        Ve && nr(T, ve),
        oe
      );
    }
    function Xe(T, _, N, $) {
      if (
        (typeof N == 'object' &&
          N !== null &&
          N.type === me &&
          N.key === null &&
          (N = N.props.children),
        typeof N == 'object' && N !== null)
      ) {
        switch (N.$$typeof) {
          case ye:
            e: {
              for (var oe = N.key, pe = _; pe !== null; ) {
                if (pe.key === oe) {
                  if (((oe = N.type), oe === me)) {
                    if (pe.tag === 7) {
                      (r(T, pe.sibling), (_ = u(pe, N.props.children)), (_.return = T), (T = _));
                      break e;
                    }
                  } else if (
                    pe.elementType === oe ||
                    (typeof oe == 'object' &&
                      oe !== null &&
                      oe.$$typeof === ue &&
                      pc(oe) === pe.type)
                  ) {
                    (r(T, pe.sibling),
                      (_ = u(pe, N.props)),
                      (_.ref = hi(T, pe, N)),
                      (_.return = T),
                      (T = _));
                    break e;
                  }
                  r(T, pe);
                  break;
                } else t(T, pe);
                pe = pe.sibling;
              }
              N.type === me
                ? ((_ = cr(N.props.children, T.mode, $, N.key)), (_.return = T), (T = _))
                : (($ = Fl(N.type, N.key, N.props, null, T.mode, $)),
                  ($.ref = hi(T, _, N)),
                  ($.return = T),
                  (T = $));
            }
            return g(T);
          case z:
            e: {
              for (pe = N.key; _ !== null; ) {
                if (_.key === pe)
                  if (
                    _.tag === 4 &&
                    _.stateNode.containerInfo === N.containerInfo &&
                    _.stateNode.implementation === N.implementation
                  ) {
                    (r(T, _.sibling), (_ = u(_, N.children || [])), (_.return = T), (T = _));
                    break e;
                  } else {
                    r(T, _);
                    break;
                  }
                else t(T, _);
                _ = _.sibling;
              }
              ((_ = Vs(N, T.mode, $)), (_.return = T), (T = _));
            }
            return g(T);
          case ue:
            return ((pe = N._init), Xe(T, _, pe(N._payload), $));
        }
        if (Zt(N)) return re(T, _, N, $);
        if (ee(N)) return ie(T, _, N, $);
        ml(T, N);
      }
      return (typeof N == 'string' && N !== '') || typeof N == 'number'
        ? ((N = '' + N),
          _ !== null && _.tag === 6
            ? (r(T, _.sibling), (_ = u(_, N)), (_.return = T), (T = _))
            : (r(T, _), (_ = Ws(N, T.mode, $)), (_.return = T), (T = _)),
          g(T))
        : r(T, _);
    }
    return Xe;
  }
  var Or = hc(!0),
    mc = hc(!1),
    gl = Rn(null),
    yl = null,
    Pr = null,
    Jo = null;
  function Zo() {
    Jo = Pr = yl = null;
  }
  function es(e) {
    var t = gl.current;
    (Ue(gl), (e._currentValue = t));
  }
  function ts(e, t, r) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
          : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function br(e, t) {
    ((yl = e),
      (Jo = Pr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (vt = !0), (e.firstContext = null)));
  }
  function jt(e) {
    var t = e._currentValue;
    if (Jo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Pr === null)) {
        if (yl === null) throw Error(l(308));
        ((Pr = e), (yl.dependencies = { lanes: 0, firstContext: e }));
      } else Pr = Pr.next = e;
    return t;
  }
  var rr = null;
  function ns(e) {
    rr === null ? (rr = [e]) : rr.push(e);
  }
  function gc(e, t, r, o) {
    var u = t.interleaved;
    return (
      u === null ? ((r.next = r), ns(t)) : ((r.next = u.next), (u.next = r)),
      (t.interleaved = r),
      vn(e, o)
    );
  }
  function vn(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return));
    return r.tag === 3 ? r.stateNode : null;
  }
  var zn = !1;
  function rs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function yc(e, t) {
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
  function wn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Mn(e, t, r) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (be & 2) !== 0)) {
      var u = o.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (o.pending = t),
        vn(e, r)
      );
    }
    return (
      (u = o.interleaved),
      u === null ? ((t.next = t), ns(o)) : ((t.next = u.next), (u.next = t)),
      (o.interleaved = t),
      vn(e, r)
    );
  }
  function vl(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), yo(e, r));
    }
  }
  function vc(e, t) {
    var r = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), r === o)) {
      var u = null,
        f = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var g = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          (f === null ? (u = f = g) : (f = f.next = g), (r = r.next));
        } while (r !== null);
        f === null ? (u = f = t) : (f = f.next = t);
      } else u = f = t;
      ((r = {
        baseState: o.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: f,
        shared: o.shared,
        effects: o.effects,
      }),
        (e.updateQueue = r));
      return;
    }
    ((e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t));
  }
  function wl(e, t, r, o) {
    var u = e.updateQueue;
    zn = !1;
    var f = u.firstBaseUpdate,
      g = u.lastBaseUpdate,
      E = u.shared.pending;
    if (E !== null) {
      u.shared.pending = null;
      var C = E,
        O = C.next;
      ((C.next = null), g === null ? (f = O) : (g.next = O), (g = C));
      var B = e.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (E = B.lastBaseUpdate),
        E !== g && (E === null ? (B.firstBaseUpdate = O) : (E.next = O), (B.lastBaseUpdate = C)));
    }
    if (f !== null) {
      var W = u.baseState;
      ((g = 0), (B = O = C = null), (E = f));
      do {
        var F = E.lane,
          Z = E.eventTime;
        if ((o & F) === F) {
          B !== null &&
            (B = B.next =
              {
                eventTime: Z,
                lane: 0,
                tag: E.tag,
                payload: E.payload,
                callback: E.callback,
                next: null,
              });
          e: {
            var re = e,
              ie = E;
            switch (((F = t), (Z = r), ie.tag)) {
              case 1:
                if (((re = ie.payload), typeof re == 'function')) {
                  W = re.call(Z, W, F);
                  break e;
                }
                W = re;
                break e;
              case 3:
                re.flags = (re.flags & -65537) | 128;
              case 0:
                if (
                  ((re = ie.payload),
                  (F = typeof re == 'function' ? re.call(Z, W, F) : re),
                  F == null)
                )
                  break e;
                W = x({}, W, F);
                break e;
              case 2:
                zn = !0;
            }
          }
          E.callback !== null &&
            E.lane !== 0 &&
            ((e.flags |= 64), (F = u.effects), F === null ? (u.effects = [E]) : F.push(E));
        } else
          ((Z = {
            eventTime: Z,
            lane: F,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null,
          }),
            B === null ? ((O = B = Z), (C = W)) : (B = B.next = Z),
            (g |= F));
        if (((E = E.next), E === null)) {
          if (((E = u.shared.pending), E === null)) break;
          ((F = E),
            (E = F.next),
            (F.next = null),
            (u.lastBaseUpdate = F),
            (u.shared.pending = null));
        }
      } while (!0);
      if (
        (B === null && (C = W),
        (u.baseState = C),
        (u.firstBaseUpdate = O),
        (u.lastBaseUpdate = B),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t;
        do ((g |= u.lane), (u = u.next));
        while (u !== t);
      } else f === null && (u.shared.lanes = 0);
      ((or |= g), (e.lanes = g), (e.memoizedState = W));
    }
  }
  function wc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var o = e[t],
          u = o.callback;
        if (u !== null) {
          if (((o.callback = null), (o = r), typeof u != 'function')) throw Error(l(191, u));
          u.call(o);
        }
      }
  }
  var mi = {},
    rn = Rn(mi),
    gi = Rn(mi),
    yi = Rn(mi);
  function ir(e) {
    if (e === mi) throw Error(l(174));
    return e;
  }
  function is(e, t) {
    switch ((Me(yi, t), Me(gi, e), Me(rn, mi), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : G(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = G(t, e)));
    }
    (Ue(rn), Me(rn, t));
  }
  function Rr() {
    (Ue(rn), Ue(gi), Ue(yi));
  }
  function kc(e) {
    ir(yi.current);
    var t = ir(rn.current),
      r = G(t, e.type);
    t !== r && (Me(gi, e), Me(rn, r));
  }
  function ls(e) {
    gi.current === e && (Ue(rn), Ue(gi));
  }
  var $e = Rn(0);
  function kl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!'))
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
  var os = [];
  function ss() {
    for (var e = 0; e < os.length; e++) os[e]._workInProgressVersionPrimary = null;
    os.length = 0;
  }
  var xl = de.ReactCurrentDispatcher,
    us = de.ReactCurrentBatchConfig,
    lr = 0,
    Qe = null,
    et = null,
    nt = null,
    Sl = !1,
    vi = !1,
    wi = 0,
    qh = 0;
  function ct() {
    throw Error(l(321));
  }
  function as(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Ht(e[r], t[r])) return !1;
    return !0;
  }
  function cs(e, t, r, o, u, f) {
    if (
      ((lr = f),
      (Qe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (xl.current = e === null || e.memoizedState === null ? Gh : Yh),
      (e = r(o, u)),
      vi)
    ) {
      f = 0;
      do {
        if (((vi = !1), (wi = 0), 25 <= f)) throw Error(l(301));
        ((f += 1), (nt = et = null), (t.updateQueue = null), (xl.current = Xh), (e = r(o, u)));
      } while (vi);
    }
    if (
      ((xl.current = _l),
      (t = et !== null && et.next !== null),
      (lr = 0),
      (nt = et = Qe = null),
      (Sl = !1),
      t)
    )
      throw Error(l(300));
    return e;
  }
  function fs() {
    var e = wi !== 0;
    return ((wi = 0), e);
  }
  function ln() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (nt === null ? (Qe.memoizedState = nt = e) : (nt = nt.next = e), nt);
  }
  function Ft() {
    if (et === null) {
      var e = Qe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = et.next;
    var t = nt === null ? Qe.memoizedState : nt.next;
    if (t !== null) ((nt = t), (et = e));
    else {
      if (e === null) throw Error(l(310));
      ((et = e),
        (e = {
          memoizedState: et.memoizedState,
          baseState: et.baseState,
          baseQueue: et.baseQueue,
          queue: et.queue,
          next: null,
        }),
        nt === null ? (Qe.memoizedState = nt = e) : (nt = nt.next = e));
    }
    return nt;
  }
  function ki(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function ds(e) {
    var t = Ft(),
      r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var o = et,
      u = o.baseQueue,
      f = r.pending;
    if (f !== null) {
      if (u !== null) {
        var g = u.next;
        ((u.next = f.next), (f.next = g));
      }
      ((o.baseQueue = u = f), (r.pending = null));
    }
    if (u !== null) {
      ((f = u.next), (o = o.baseState));
      var E = (g = null),
        C = null,
        O = f;
      do {
        var B = O.lane;
        if ((lr & B) === B)
          (C !== null &&
            (C = C.next =
              {
                lane: 0,
                action: O.action,
                hasEagerState: O.hasEagerState,
                eagerState: O.eagerState,
                next: null,
              }),
            (o = O.hasEagerState ? O.eagerState : e(o, O.action)));
        else {
          var W = {
            lane: B,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null,
          };
          (C === null ? ((E = C = W), (g = o)) : (C = C.next = W), (Qe.lanes |= B), (or |= B));
        }
        O = O.next;
      } while (O !== null && O !== f);
      (C === null ? (g = o) : (C.next = E),
        Ht(o, t.memoizedState) || (vt = !0),
        (t.memoizedState = o),
        (t.baseState = g),
        (t.baseQueue = C),
        (r.lastRenderedState = o));
    }
    if (((e = r.interleaved), e !== null)) {
      u = e;
      do ((f = u.lane), (Qe.lanes |= f), (or |= f), (u = u.next));
      while (u !== e);
    } else u === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function ps(e) {
    var t = Ft(),
      r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var o = r.dispatch,
      u = r.pending,
      f = t.memoizedState;
    if (u !== null) {
      r.pending = null;
      var g = (u = u.next);
      do ((f = e(f, g.action)), (g = g.next));
      while (g !== u);
      (Ht(f, t.memoizedState) || (vt = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (r.lastRenderedState = f));
    }
    return [f, o];
  }
  function xc() {}
  function Sc(e, t) {
    var r = Qe,
      o = Ft(),
      u = t(),
      f = !Ht(o.memoizedState, u);
    if (
      (f && ((o.memoizedState = u), (vt = !0)),
      (o = o.queue),
      hs(_c.bind(null, r, o, e), [e]),
      o.getSnapshot !== t || f || (nt !== null && nt.memoizedState.tag & 1))
    ) {
      if (((r.flags |= 2048), xi(9, Cc.bind(null, r, o, u, t), void 0, null), rt === null))
        throw Error(l(349));
      (lr & 30) !== 0 || Ec(r, t, u);
    }
    return u;
  }
  function Ec(e, t, r) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Qe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Qe.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
  }
  function Cc(e, t, r, o) {
    ((t.value = r), (t.getSnapshot = o), Ic(t) && Tc(e));
  }
  function _c(e, t, r) {
    return r(function () {
      Ic(t) && Tc(e);
    });
  }
  function Ic(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Ht(e, r);
    } catch {
      return !0;
    }
  }
  function Tc(e) {
    var t = vn(e, 1);
    t !== null && Xt(t, e, 1, -1);
  }
  function Nc(e) {
    var t = ln();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ki,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Qh.bind(null, Qe, e)),
      [t.memoizedState, e]
    );
  }
  function xi(e, t, r, o) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: o, next: null }),
      (t = Qe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Qe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((o = r.next), (r.next = e), (e.next = o), (t.lastEffect = e))),
      e
    );
  }
  function Lc() {
    return Ft().memoizedState;
  }
  function El(e, t, r, o) {
    var u = ln();
    ((Qe.flags |= e), (u.memoizedState = xi(1 | t, r, void 0, o === void 0 ? null : o)));
  }
  function Cl(e, t, r, o) {
    var u = Ft();
    o = o === void 0 ? null : o;
    var f = void 0;
    if (et !== null) {
      var g = et.memoizedState;
      if (((f = g.destroy), o !== null && as(o, g.deps))) {
        u.memoizedState = xi(t, r, f, o);
        return;
      }
    }
    ((Qe.flags |= e), (u.memoizedState = xi(1 | t, r, f, o)));
  }
  function Oc(e, t) {
    return El(8390656, 8, e, t);
  }
  function hs(e, t) {
    return Cl(2048, 8, e, t);
  }
  function Pc(e, t) {
    return Cl(4, 2, e, t);
  }
  function bc(e, t) {
    return Cl(4, 4, e, t);
  }
  function Rc(e, t) {
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
  function Dc(e, t, r) {
    return ((r = r != null ? r.concat([e]) : null), Cl(4, 4, Rc.bind(null, t, e), r));
  }
  function ms() {}
  function Ac(e, t) {
    var r = Ft();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && as(t, o[1]) ? o[0] : ((r.memoizedState = [e, t]), e);
  }
  function zc(e, t) {
    var r = Ft();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && as(t, o[1])
      ? o[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function Mc(e, t, r) {
    return (lr & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (vt = !0)), (e.memoizedState = r))
      : (Ht(r, t) || ((r = pa()), (Qe.lanes |= r), (or |= r), (e.baseState = !0)), t);
  }
  function Hh(e, t) {
    var r = ze;
    ((ze = r !== 0 && 4 > r ? r : 4), e(!0));
    var o = us.transition;
    us.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((ze = r), (us.transition = o));
    }
  }
  function jc() {
    return Ft().memoizedState;
  }
  function $h(e, t, r) {
    var o = Un(e);
    if (((r = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null }), Fc(e)))
      Bc(t, r);
    else if (((r = gc(e, t, r, o)), r !== null)) {
      var u = mt();
      (Xt(r, e, o, u), Uc(r, t, o));
    }
  }
  function Qh(e, t, r) {
    var o = Un(e),
      u = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (Fc(e)) Bc(t, u);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var g = t.lastRenderedState,
            E = f(g, r);
          if (((u.hasEagerState = !0), (u.eagerState = E), Ht(E, g))) {
            var C = t.interleaved;
            (C === null ? ((u.next = u), ns(t)) : ((u.next = C.next), (C.next = u)),
              (t.interleaved = u));
            return;
          }
        } catch {
        } finally {
        }
      ((r = gc(e, t, u, o)), r !== null && ((u = mt()), Xt(r, e, o, u), Uc(r, t, o)));
    }
  }
  function Fc(e) {
    var t = e.alternate;
    return e === Qe || (t !== null && t === Qe);
  }
  function Bc(e, t) {
    vi = Sl = !0;
    var r = e.pending;
    (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t));
  }
  function Uc(e, t, r) {
    if ((r & 4194240) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), yo(e, r));
    }
  }
  var _l = {
      readContext: jt,
      useCallback: ct,
      useContext: ct,
      useEffect: ct,
      useImperativeHandle: ct,
      useInsertionEffect: ct,
      useLayoutEffect: ct,
      useMemo: ct,
      useReducer: ct,
      useRef: ct,
      useState: ct,
      useDebugValue: ct,
      useDeferredValue: ct,
      useTransition: ct,
      useMutableSource: ct,
      useSyncExternalStore: ct,
      useId: ct,
      unstable_isNewReconciler: !1,
    },
    Gh = {
      readContext: jt,
      useCallback: function (e, t) {
        return ((ln().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: jt,
      useEffect: Oc,
      useImperativeHandle: function (e, t, r) {
        return ((r = r != null ? r.concat([e]) : null), El(4194308, 4, Rc.bind(null, t, e), r));
      },
      useLayoutEffect: function (e, t) {
        return El(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return El(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = ln();
        return ((t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, r) {
        var o = ln();
        return (
          (t = r !== void 0 ? r(t) : t),
          (o.memoizedState = o.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (o.queue = e),
          (e = e.dispatch = $h.bind(null, Qe, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ln();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Nc,
      useDebugValue: ms,
      useDeferredValue: function (e) {
        return (ln().memoizedState = e);
      },
      useTransition: function () {
        var e = Nc(!1),
          t = e[0];
        return ((e = Hh.bind(null, e[1])), (ln().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var o = Qe,
          u = ln();
        if (Ve) {
          if (r === void 0) throw Error(l(407));
          r = r();
        } else {
          if (((r = t()), rt === null)) throw Error(l(349));
          (lr & 30) !== 0 || Ec(o, t, r);
        }
        u.memoizedState = r;
        var f = { value: r, getSnapshot: t };
        return (
          (u.queue = f),
          Oc(_c.bind(null, o, f, e), [e]),
          (o.flags |= 2048),
          xi(9, Cc.bind(null, o, f, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = ln(),
          t = rt.identifierPrefix;
        if (Ve) {
          var r = yn,
            o = gn;
          ((r = (o & ~(1 << (32 - qt(o) - 1))).toString(32) + r),
            (t = ':' + t + 'R' + r),
            (r = wi++),
            0 < r && (t += 'H' + r.toString(32)),
            (t += ':'));
        } else ((r = qh++), (t = ':' + t + 'r' + r.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Yh = {
      readContext: jt,
      useCallback: Ac,
      useContext: jt,
      useEffect: hs,
      useImperativeHandle: Dc,
      useInsertionEffect: Pc,
      useLayoutEffect: bc,
      useMemo: zc,
      useReducer: ds,
      useRef: Lc,
      useState: function () {
        return ds(ki);
      },
      useDebugValue: ms,
      useDeferredValue: function (e) {
        var t = Ft();
        return Mc(t, et.memoizedState, e);
      },
      useTransition: function () {
        var e = ds(ki)[0],
          t = Ft().memoizedState;
        return [e, t];
      },
      useMutableSource: xc,
      useSyncExternalStore: Sc,
      useId: jc,
      unstable_isNewReconciler: !1,
    },
    Xh = {
      readContext: jt,
      useCallback: Ac,
      useContext: jt,
      useEffect: hs,
      useImperativeHandle: Dc,
      useInsertionEffect: Pc,
      useLayoutEffect: bc,
      useMemo: zc,
      useReducer: ps,
      useRef: Lc,
      useState: function () {
        return ps(ki);
      },
      useDebugValue: ms,
      useDeferredValue: function (e) {
        var t = Ft();
        return et === null ? (t.memoizedState = e) : Mc(t, et.memoizedState, e);
      },
      useTransition: function () {
        var e = ps(ki)[0],
          t = Ft().memoizedState;
        return [e, t];
      },
      useMutableSource: xc,
      useSyncExternalStore: Sc,
      useId: jc,
      unstable_isNewReconciler: !1,
    };
  function Qt(e, t) {
    if (e && e.defaultProps) {
      ((t = x({}, t)), (e = e.defaultProps));
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function gs(e, t, r, o) {
    ((t = e.memoizedState),
      (r = r(o, t)),
      (r = r == null ? t : x({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r));
  }
  var Il = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Jn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var o = mt(),
        u = Un(e),
        f = wn(o, u);
      ((f.payload = t),
        r != null && (f.callback = r),
        (t = Mn(e, f, u)),
        t !== null && (Xt(t, e, u, o), vl(t, e, u)));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var o = mt(),
        u = Un(e),
        f = wn(o, u);
      ((f.tag = 1),
        (f.payload = t),
        r != null && (f.callback = r),
        (t = Mn(e, f, u)),
        t !== null && (Xt(t, e, u, o), vl(t, e, u)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = mt(),
        o = Un(e),
        u = wn(r, o);
      ((u.tag = 2),
        t != null && (u.callback = t),
        (t = Mn(e, u, o)),
        t !== null && (Xt(t, e, o, r), vl(t, e, o)));
    },
  };
  function Wc(e, t, r, o, u, f, g) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(o, f, g)
        : t.prototype && t.prototype.isPureReactComponent
          ? !si(r, o) || !si(u, f)
          : !0
    );
  }
  function Vc(e, t, r) {
    var o = !1,
      u = Dn,
      f = t.contextType;
    return (
      typeof f == 'object' && f !== null
        ? (f = jt(f))
        : ((u = yt(t) ? er : at.current),
          (o = t.contextTypes),
          (f = (o = o != null) ? Ir(e, u) : Dn)),
      (t = new t(r, f)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Il),
      (e.stateNode = t),
      (t._reactInternals = e),
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = f)),
      t
    );
  }
  function qc(e, t, r, o) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, o),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(r, o),
      t.state !== e && Il.enqueueReplaceState(t, t.state, null));
  }
  function ys(e, t, r, o) {
    var u = e.stateNode;
    ((u.props = r), (u.state = e.memoizedState), (u.refs = {}), rs(e));
    var f = t.contextType;
    (typeof f == 'object' && f !== null
      ? (u.context = jt(f))
      : ((f = yt(t) ? er : at.current), (u.context = Ir(e, f))),
      (u.state = e.memoizedState),
      (f = t.getDerivedStateFromProps),
      typeof f == 'function' && (gs(e, t, f, r), (u.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function' ||
        (typeof u.UNSAFE_componentWillMount != 'function' &&
          typeof u.componentWillMount != 'function') ||
        ((t = u.state),
        typeof u.componentWillMount == 'function' && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
        t !== u.state && Il.enqueueReplaceState(u, u.state, null),
        wl(e, r, u, o),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function Dr(e, t) {
    try {
      var r = '',
        o = t;
      do ((r += ke(o)), (o = o.return));
      while (o);
      var u = r;
    } catch (f) {
      u =
        `
Error generating stack: ` +
        f.message +
        `
` +
        f.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function vs(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function ws(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var Kh = typeof WeakMap == 'function' ? WeakMap : Map;
  function Hc(e, t, r) {
    ((r = wn(-1, r)), (r.tag = 3), (r.payload = { element: null }));
    var o = t.value;
    return (
      (r.callback = function () {
        (Rl || ((Rl = !0), (Ds = o)), ws(e, t));
      }),
      r
    );
  }
  function $c(e, t, r) {
    ((r = wn(-1, r)), (r.tag = 3));
    var o = e.type.getDerivedStateFromError;
    if (typeof o == 'function') {
      var u = t.value;
      ((r.payload = function () {
        return o(u);
      }),
        (r.callback = function () {
          ws(e, t);
        }));
    }
    var f = e.stateNode;
    return (
      f !== null &&
        typeof f.componentDidCatch == 'function' &&
        (r.callback = function () {
          (ws(e, t),
            typeof o != 'function' && (Fn === null ? (Fn = new Set([this])) : Fn.add(this)));
          var g = t.stack;
          this.componentDidCatch(t.value, { componentStack: g !== null ? g : '' });
        }),
      r
    );
  }
  function Qc(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Kh();
      var u = new Set();
      o.set(t, u);
    } else ((u = o.get(t)), u === void 0 && ((u = new Set()), o.set(t, u)));
    u.has(r) || (u.add(r), (e = fm.bind(null, e, t, r)), t.then(e, e));
  }
  function Gc(e) {
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
  function Yc(e, t, r, o, u) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null ? (r.tag = 17) : ((t = wn(-1, 1)), (t.tag = 2), Mn(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = u), e);
  }
  var Jh = de.ReactCurrentOwner,
    vt = !1;
  function ht(e, t, r, o) {
    t.child = e === null ? mc(t, null, r, o) : Or(t, e.child, r, o);
  }
  function Xc(e, t, r, o, u) {
    r = r.render;
    var f = t.ref;
    return (
      br(t, u),
      (o = cs(e, t, r, o, f, u)),
      (r = fs()),
      e !== null && !vt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~u), kn(e, t, u))
        : (Ve && r && Qo(t), (t.flags |= 1), ht(e, t, o, u), t.child)
    );
  }
  function Kc(e, t, r, o, u) {
    if (e === null) {
      var f = r.type;
      return typeof f == 'function' &&
        !Us(f) &&
        f.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = f), Jc(e, t, f, o, u))
        : ((e = Fl(r.type, null, o, t, t.mode, u)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((f = e.child), (e.lanes & u) === 0)) {
      var g = f.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : si), r(g, o) && e.ref === t.ref))
        return kn(e, t, u);
    }
    return ((t.flags |= 1), (e = Vn(f, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Jc(e, t, r, o, u) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (si(f, o) && e.ref === t.ref)
        if (((vt = !1), (t.pendingProps = o = f), (e.lanes & u) !== 0))
          (e.flags & 131072) !== 0 && (vt = !0);
        else return ((t.lanes = e.lanes), kn(e, t, u));
    }
    return ks(e, t, r, o, u);
  }
  function Zc(e, t, r) {
    var o = t.pendingProps,
      u = o.children,
      f = e !== null ? e.memoizedState : null;
    if (o.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          Me(zr, Pt),
          (Pt |= r));
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = f !== null ? f.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            Me(zr, Pt),
            (Pt |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (o = f !== null ? f.baseLanes : r),
          Me(zr, Pt),
          (Pt |= o));
      }
    else
      (f !== null ? ((o = f.baseLanes | r), (t.memoizedState = null)) : (o = r),
        Me(zr, Pt),
        (Pt |= o));
    return (ht(e, t, u, r), t.child);
  }
  function ef(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ks(e, t, r, o, u) {
    var f = yt(r) ? er : at.current;
    return (
      (f = Ir(t, f)),
      br(t, u),
      (r = cs(e, t, r, o, f, u)),
      (o = fs()),
      e !== null && !vt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~u), kn(e, t, u))
        : (Ve && o && Qo(t), (t.flags |= 1), ht(e, t, r, u), t.child)
    );
  }
  function tf(e, t, r, o, u) {
    if (yt(r)) {
      var f = !0;
      cl(t);
    } else f = !1;
    if ((br(t, u), t.stateNode === null)) (Nl(e, t), Vc(t, r, o), ys(t, r, o, u), (o = !0));
    else if (e === null) {
      var g = t.stateNode,
        E = t.memoizedProps;
      g.props = E;
      var C = g.context,
        O = r.contextType;
      typeof O == 'object' && O !== null
        ? (O = jt(O))
        : ((O = yt(r) ? er : at.current), (O = Ir(t, O)));
      var B = r.getDerivedStateFromProps,
        W = typeof B == 'function' || typeof g.getSnapshotBeforeUpdate == 'function';
      (W ||
        (typeof g.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof g.componentWillReceiveProps != 'function') ||
        ((E !== o || C !== O) && qc(t, g, o, O)),
        (zn = !1));
      var F = t.memoizedState;
      ((g.state = F),
        wl(t, o, g, u),
        (C = t.memoizedState),
        E !== o || F !== C || gt.current || zn
          ? (typeof B == 'function' && (gs(t, r, B, o), (C = t.memoizedState)),
            (E = zn || Wc(t, r, E, o, F, C, O))
              ? (W ||
                  (typeof g.UNSAFE_componentWillMount != 'function' &&
                    typeof g.componentWillMount != 'function') ||
                  (typeof g.componentWillMount == 'function' && g.componentWillMount(),
                  typeof g.UNSAFE_componentWillMount == 'function' &&
                    g.UNSAFE_componentWillMount()),
                typeof g.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof g.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = C)),
            (g.props = o),
            (g.state = C),
            (g.context = O),
            (o = E))
          : (typeof g.componentDidMount == 'function' && (t.flags |= 4194308), (o = !1)));
    } else {
      ((g = t.stateNode),
        yc(e, t),
        (E = t.memoizedProps),
        (O = t.type === t.elementType ? E : Qt(t.type, E)),
        (g.props = O),
        (W = t.pendingProps),
        (F = g.context),
        (C = r.contextType),
        typeof C == 'object' && C !== null
          ? (C = jt(C))
          : ((C = yt(r) ? er : at.current), (C = Ir(t, C))));
      var Z = r.getDerivedStateFromProps;
      ((B = typeof Z == 'function' || typeof g.getSnapshotBeforeUpdate == 'function') ||
        (typeof g.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof g.componentWillReceiveProps != 'function') ||
        ((E !== W || F !== C) && qc(t, g, o, C)),
        (zn = !1),
        (F = t.memoizedState),
        (g.state = F),
        wl(t, o, g, u));
      var re = t.memoizedState;
      E !== W || F !== re || gt.current || zn
        ? (typeof Z == 'function' && (gs(t, r, Z, o), (re = t.memoizedState)),
          (O = zn || Wc(t, r, O, o, F, re, C) || !1)
            ? (B ||
                (typeof g.UNSAFE_componentWillUpdate != 'function' &&
                  typeof g.componentWillUpdate != 'function') ||
                (typeof g.componentWillUpdate == 'function' && g.componentWillUpdate(o, re, C),
                typeof g.UNSAFE_componentWillUpdate == 'function' &&
                  g.UNSAFE_componentWillUpdate(o, re, C)),
              typeof g.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof g.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof g.componentDidUpdate != 'function' ||
                (E === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 4),
              typeof g.getSnapshotBeforeUpdate != 'function' ||
                (E === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = re)),
          (g.props = o),
          (g.state = re),
          (g.context = C),
          (o = O))
        : (typeof g.componentDidUpdate != 'function' ||
            (E === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 4),
          typeof g.getSnapshotBeforeUpdate != 'function' ||
            (E === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return xs(e, t, r, o, f, u);
  }
  function xs(e, t, r, o, u, f) {
    ef(e, t);
    var g = (t.flags & 128) !== 0;
    if (!o && !g) return (u && oc(t, r, !1), kn(e, t, f));
    ((o = t.stateNode), (Jh.current = t));
    var E = g && typeof r.getDerivedStateFromError != 'function' ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && g
        ? ((t.child = Or(t, e.child, null, f)), (t.child = Or(t, null, E, f)))
        : ht(e, t, E, f),
      (t.memoizedState = o.state),
      u && oc(t, r, !0),
      t.child
    );
  }
  function nf(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? ic(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && ic(e, t.context, !1),
      is(e, t.containerInfo));
  }
  function rf(e, t, r, o, u) {
    return (Lr(), Ko(u), (t.flags |= 256), ht(e, t, r, o), t.child);
  }
  var Ss = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Es(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function lf(e, t, r) {
    var o = t.pendingProps,
      u = $e.current,
      f = !1,
      g = (t.flags & 128) !== 0,
      E;
    if (
      ((E = g) || (E = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      E ? ((f = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (u |= 1),
      Me($e, u & 1),
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
          : ((g = o.children),
            (e = o.fallback),
            f
              ? ((o = t.mode),
                (f = t.child),
                (g = { mode: 'hidden', children: g }),
                (o & 1) === 0 && f !== null
                  ? ((f.childLanes = 0), (f.pendingProps = g))
                  : (f = Bl(g, o, 0, null)),
                (e = cr(e, o, r, null)),
                (f.return = t),
                (e.return = t),
                (f.sibling = e),
                (t.child = f),
                (t.child.memoizedState = Es(r)),
                (t.memoizedState = Ss),
                e)
              : Cs(t, g))
      );
    if (((u = e.memoizedState), u !== null && ((E = u.dehydrated), E !== null)))
      return Zh(e, t, g, o, E, u, r);
    if (f) {
      ((f = o.fallback), (g = t.mode), (u = e.child), (E = u.sibling));
      var C = { mode: 'hidden', children: o.children };
      return (
        (g & 1) === 0 && t.child !== u
          ? ((o = t.child), (o.childLanes = 0), (o.pendingProps = C), (t.deletions = null))
          : ((o = Vn(u, C)), (o.subtreeFlags = u.subtreeFlags & 14680064)),
        E !== null ? (f = Vn(E, f)) : ((f = cr(f, g, r, null)), (f.flags |= 2)),
        (f.return = t),
        (o.return = t),
        (o.sibling = f),
        (t.child = o),
        (o = f),
        (f = t.child),
        (g = e.child.memoizedState),
        (g =
          g === null
            ? Es(r)
            : { baseLanes: g.baseLanes | r, cachePool: null, transitions: g.transitions }),
        (f.memoizedState = g),
        (f.childLanes = e.childLanes & ~r),
        (t.memoizedState = Ss),
        o
      );
    }
    return (
      (f = e.child),
      (e = f.sibling),
      (o = Vn(f, { mode: 'visible', children: o.children })),
      (t.mode & 1) === 0 && (o.lanes = r),
      (o.return = t),
      (o.sibling = null),
      e !== null &&
        ((r = t.deletions), r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = o),
      (t.memoizedState = null),
      o
    );
  }
  function Cs(e, t) {
    return (
      (t = Bl({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Tl(e, t, r, o) {
    return (
      o !== null && Ko(o),
      Or(t, e.child, null, r),
      (e = Cs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Zh(e, t, r, o, u, f, g) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (o = vs(Error(l(422)))), Tl(e, t, g, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((f = o.fallback),
            (u = t.mode),
            (o = Bl({ mode: 'visible', children: o.children }, u, 0, null)),
            (f = cr(f, u, g, null)),
            (f.flags |= 2),
            (o.return = t),
            (f.return = t),
            (o.sibling = f),
            (t.child = o),
            (t.mode & 1) !== 0 && Or(t, e.child, null, g),
            (t.child.memoizedState = Es(g)),
            (t.memoizedState = Ss),
            f);
    if ((t.mode & 1) === 0) return Tl(e, t, g, null);
    if (u.data === '$!') {
      if (((o = u.nextSibling && u.nextSibling.dataset), o)) var E = o.dgst;
      return ((o = E), (f = Error(l(419))), (o = vs(f, o, void 0)), Tl(e, t, g, o));
    }
    if (((E = (g & e.childLanes) !== 0), vt || E)) {
      if (((o = rt), o !== null)) {
        switch (g & -g) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
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
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        ((u = (u & (o.suspendedLanes | g)) !== 0 ? 0 : u),
          u !== 0 && u !== f.retryLane && ((f.retryLane = u), vn(e, u), Xt(o, e, u, -1)));
      }
      return (Bs(), (o = vs(Error(l(421)))), Tl(e, t, g, o));
    }
    return u.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = dm.bind(null, e)), (u._reactRetry = t), null)
      : ((e = f.treeContext),
        (Ot = bn(u.nextSibling)),
        (Lt = t),
        (Ve = !0),
        ($t = null),
        e !== null &&
          ((zt[Mt++] = gn),
          (zt[Mt++] = yn),
          (zt[Mt++] = tr),
          (gn = e.id),
          (yn = e.overflow),
          (tr = t)),
        (t = Cs(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function of(e, t, r) {
    e.lanes |= t;
    var o = e.alternate;
    (o !== null && (o.lanes |= t), ts(e.return, t, r));
  }
  function _s(e, t, r, o, u) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: r,
          tailMode: u,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = o),
        (f.tail = r),
        (f.tailMode = u));
  }
  function sf(e, t, r) {
    var o = t.pendingProps,
      u = o.revealOrder,
      f = o.tail;
    if ((ht(e, t, o.children, r), (o = $e.current), (o & 2) !== 0))
      ((o = (o & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && of(e, r, t);
          else if (e.tag === 19) of(e, r, t);
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
      o &= 1;
    }
    if ((Me($e, o), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (u) {
        case 'forwards':
          for (r = t.child, u = null; r !== null; )
            ((e = r.alternate), e !== null && kl(e) === null && (u = r), (r = r.sibling));
          ((r = u),
            r === null ? ((u = t.child), (t.child = null)) : ((u = r.sibling), (r.sibling = null)),
            _s(t, !1, u, r, f));
          break;
        case 'backwards':
          for (r = null, u = t.child, t.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && kl(e) === null)) {
              t.child = u;
              break;
            }
            ((e = u.sibling), (u.sibling = r), (r = u), (u = e));
          }
          _s(t, !0, r, null, f);
          break;
        case 'together':
          _s(t, !1, null, null, void 0);
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
  function kn(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (or |= t.lanes), (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, r = Vn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
        ((e = e.sibling), (r = r.sibling = Vn(e, e.pendingProps)), (r.return = t));
      r.sibling = null;
    }
    return t.child;
  }
  function em(e, t, r) {
    switch (t.tag) {
      case 3:
        (nf(t), Lr());
        break;
      case 5:
        kc(t);
        break;
      case 1:
        yt(t.type) && cl(t);
        break;
      case 4:
        is(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          u = t.memoizedProps.value;
        (Me(gl, o._currentValue), (o._currentValue = u));
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (Me($e, $e.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? lf(e, t, r)
              : (Me($e, $e.current & 1), (e = kn(e, t, r)), e !== null ? e.sibling : null);
        Me($e, $e.current & 1);
        break;
      case 19:
        if (((o = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return sf(e, t, r);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Me($e, $e.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Zc(e, t, r));
    }
    return kn(e, t, r);
  }
  var uf, Is, af, cf;
  ((uf = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        ((r.child.return = r), (r = r.child));
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      ((r.sibling.return = r.return), (r = r.sibling));
    }
  }),
    (Is = function () {}),
    (af = function (e, t, r, o) {
      var u = e.memoizedProps;
      if (u !== o) {
        ((e = t.stateNode), ir(rn.current));
        var f = null;
        switch (r) {
          case 'input':
            ((u = He(e, u)), (o = He(e, o)), (f = []));
            break;
          case 'select':
            ((u = x({}, u, { value: void 0 })), (o = x({}, o, { value: void 0 })), (f = []));
            break;
          case 'textarea':
            ((u = ce(e, u)), (o = ce(e, o)), (f = []));
            break;
          default:
            typeof u.onClick != 'function' && typeof o.onClick == 'function' && (e.onclick = sl);
        }
        ot(r, o);
        var g;
        r = null;
        for (O in u)
          if (!o.hasOwnProperty(O) && u.hasOwnProperty(O) && u[O] != null)
            if (O === 'style') {
              var E = u[O];
              for (g in E) E.hasOwnProperty(g) && (r || (r = {}), (r[g] = ''));
            } else
              O !== 'dangerouslySetInnerHTML' &&
                O !== 'children' &&
                O !== 'suppressContentEditableWarning' &&
                O !== 'suppressHydrationWarning' &&
                O !== 'autoFocus' &&
                (a.hasOwnProperty(O) ? f || (f = []) : (f = f || []).push(O, null));
        for (O in o) {
          var C = o[O];
          if (
            ((E = u != null ? u[O] : void 0),
            o.hasOwnProperty(O) && C !== E && (C != null || E != null))
          )
            if (O === 'style')
              if (E) {
                for (g in E)
                  !E.hasOwnProperty(g) ||
                    (C && C.hasOwnProperty(g)) ||
                    (r || (r = {}), (r[g] = ''));
                for (g in C) C.hasOwnProperty(g) && E[g] !== C[g] && (r || (r = {}), (r[g] = C[g]));
              } else (r || (f || (f = []), f.push(O, r)), (r = C));
            else
              O === 'dangerouslySetInnerHTML'
                ? ((C = C ? C.__html : void 0),
                  (E = E ? E.__html : void 0),
                  C != null && E !== C && (f = f || []).push(O, C))
                : O === 'children'
                  ? (typeof C != 'string' && typeof C != 'number') || (f = f || []).push(O, '' + C)
                  : O !== 'suppressContentEditableWarning' &&
                    O !== 'suppressHydrationWarning' &&
                    (a.hasOwnProperty(O)
                      ? (C != null && O === 'onScroll' && Be('scroll', e), f || E === C || (f = []))
                      : (f = f || []).push(O, C));
        }
        r && (f = f || []).push('style', r);
        var O = f;
        (t.updateQueue = O) && (t.flags |= 4);
      }
    }),
    (cf = function (e, t, r, o) {
      r !== o && (t.flags |= 4);
    }));
  function Si(e, t) {
    if (!Ve)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var r = null; t !== null; ) (t.alternate !== null && (r = t), (t = t.sibling));
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case 'collapsed':
          r = e.tail;
          for (var o = null; r !== null; ) (r.alternate !== null && (o = r), (r = r.sibling));
          o === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function ft(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      o = 0;
    if (t)
      for (var u = e.child; u !== null; )
        ((r |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags & 14680064),
          (o |= u.flags & 14680064),
          (u.return = e),
          (u = u.sibling));
    else
      for (u = e.child; u !== null; )
        ((r |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags),
          (o |= u.flags),
          (u.return = e),
          (u = u.sibling));
    return ((e.subtreeFlags |= o), (e.childLanes = r), t);
  }
  function tm(e, t, r) {
    var o = t.pendingProps;
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
        return (ft(t), null);
      case 1:
        return (yt(t.type) && al(), ft(t), null);
      case 3:
        return (
          (o = t.stateNode),
          Rr(),
          Ue(gt),
          Ue(at),
          ss(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (hl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), $t !== null && (Ms($t), ($t = null)))),
          Is(e, t),
          ft(t),
          null
        );
      case 5:
        ls(t);
        var u = ir(yi.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          (af(e, t, r, o, u), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(l(166));
            return (ft(t), null);
          }
          if (((e = ir(rn.current)), hl(t))) {
            ((o = t.stateNode), (r = t.type));
            var f = t.memoizedProps;
            switch (((o[nn] = t), (o[di] = f), (e = (t.mode & 1) !== 0), r)) {
              case 'dialog':
                (Be('cancel', o), Be('close', o));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Be('load', o);
                break;
              case 'video':
              case 'audio':
                for (u = 0; u < ai.length; u++) Be(ai[u], o);
                break;
              case 'source':
                Be('error', o);
                break;
              case 'img':
              case 'image':
              case 'link':
                (Be('error', o), Be('load', o));
                break;
              case 'details':
                Be('toggle', o);
                break;
              case 'input':
                (Cn(o, f), Be('invalid', o));
                break;
              case 'select':
                ((o._wrapperState = { wasMultiple: !!f.multiple }), Be('invalid', o));
                break;
              case 'textarea':
                (Ae(o, f), Be('invalid', o));
            }
            (ot(r, f), (u = null));
            for (var g in f)
              if (f.hasOwnProperty(g)) {
                var E = f[g];
                g === 'children'
                  ? typeof E == 'string'
                    ? o.textContent !== E &&
                      (f.suppressHydrationWarning !== !0 && ol(o.textContent, E, e),
                      (u = ['children', E]))
                    : typeof E == 'number' &&
                      o.textContent !== '' + E &&
                      (f.suppressHydrationWarning !== !0 && ol(o.textContent, E, e),
                      (u = ['children', '' + E]))
                  : a.hasOwnProperty(g) && E != null && g === 'onScroll' && Be('scroll', o);
              }
            switch (r) {
              case 'input':
                (It(o), Xn(o, f, !0));
                break;
              case 'textarea':
                (It(o), Vt(o));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof f.onClick == 'function' && (o.onclick = sl);
            }
            ((o = u), (t.updateQueue = o), o !== null && (t.flags |= 4));
          } else {
            ((g = u.nodeType === 9 ? u : u.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = b(r)),
              e === 'http://www.w3.org/1999/xhtml'
                ? r === 'script'
                  ? ((e = g.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof o.is == 'string'
                    ? (e = g.createElement(r, { is: o.is }))
                    : ((e = g.createElement(r)),
                      r === 'select' &&
                        ((g = e), o.multiple ? (g.multiple = !0) : o.size && (g.size = o.size)))
                : (e = g.createElementNS(e, r)),
              (e[nn] = t),
              (e[di] = o),
              uf(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((g = en(r, o)), r)) {
                case 'dialog':
                  (Be('cancel', e), Be('close', e), (u = o));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (Be('load', e), (u = o));
                  break;
                case 'video':
                case 'audio':
                  for (u = 0; u < ai.length; u++) Be(ai[u], e);
                  u = o;
                  break;
                case 'source':
                  (Be('error', e), (u = o));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (Be('error', e), Be('load', e), (u = o));
                  break;
                case 'details':
                  (Be('toggle', e), (u = o));
                  break;
                case 'input':
                  (Cn(e, o), (u = He(e, o)), Be('invalid', e));
                  break;
                case 'option':
                  u = o;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!o.multiple }),
                    (u = x({}, o, { value: void 0 })),
                    Be('invalid', e));
                  break;
                case 'textarea':
                  (Ae(e, o), (u = ce(e, o)), Be('invalid', e));
                  break;
                default:
                  u = o;
              }
              (ot(r, u), (E = u));
              for (f in E)
                if (E.hasOwnProperty(f)) {
                  var C = E[f];
                  f === 'style'
                    ? _n(e, C)
                    : f === 'dangerouslySetInnerHTML'
                      ? ((C = C ? C.__html : void 0), C != null && Ne(e, C))
                      : f === 'children'
                        ? typeof C == 'string'
                          ? (r !== 'textarea' || C !== '') && Pe(e, C)
                          : typeof C == 'number' && Pe(e, '' + C)
                        : f !== 'suppressContentEditableWarning' &&
                          f !== 'suppressHydrationWarning' &&
                          f !== 'autoFocus' &&
                          (a.hasOwnProperty(f)
                            ? C != null && f === 'onScroll' && Be('scroll', e)
                            : C != null && U(e, f, C, g));
                }
              switch (r) {
                case 'input':
                  (It(e), Xn(e, o, !1));
                  break;
                case 'textarea':
                  (It(e), Vt(e));
                  break;
                case 'option':
                  o.value != null && e.setAttribute('value', '' + Ce(o.value));
                  break;
                case 'select':
                  ((e.multiple = !!o.multiple),
                    (f = o.value),
                    f != null
                      ? Q(e, !!o.multiple, f, !1)
                      : o.defaultValue != null && Q(e, !!o.multiple, o.defaultValue, !0));
                  break;
                default:
                  typeof u.onClick == 'function' && (e.onclick = sl);
              }
              switch (r) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  o = !!o.autoFocus;
                  break e;
                case 'img':
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (ft(t), null);
      case 6:
        if (e && t.stateNode != null) cf(e, t, e.memoizedProps, o);
        else {
          if (typeof o != 'string' && t.stateNode === null) throw Error(l(166));
          if (((r = ir(yi.current)), ir(rn.current), hl(t))) {
            if (
              ((o = t.stateNode),
              (r = t.memoizedProps),
              (o[nn] = t),
              (f = o.nodeValue !== r) && ((e = Lt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ol(o.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ol(o.nodeValue, r, (e.mode & 1) !== 0);
              }
            f && (t.flags |= 4);
          } else
            ((o = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(o)),
              (o[nn] = t),
              (t.stateNode = o));
        }
        return (ft(t), null);
      case 13:
        if (
          (Ue($e),
          (o = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ve && Ot !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (dc(), Lr(), (t.flags |= 98560), (f = !1));
          else if (((f = hl(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(l(318));
              if (((f = t.memoizedState), (f = f !== null ? f.dehydrated : null), !f))
                throw Error(l(317));
              f[nn] = t;
            } else (Lr(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (ft(t), (f = !1));
          } else ($t !== null && (Ms($t), ($t = null)), (f = !0));
          if (!f) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || ($e.current & 1) !== 0 ? tt === 0 && (tt = 3) : Bs())),
            t.updateQueue !== null && (t.flags |= 4),
            ft(t),
            null);
      case 4:
        return (Rr(), Is(e, t), e === null && ci(t.stateNode.containerInfo), ft(t), null);
      case 10:
        return (es(t.type._context), ft(t), null);
      case 17:
        return (yt(t.type) && al(), ft(t), null);
      case 19:
        if ((Ue($e), (f = t.memoizedState), f === null)) return (ft(t), null);
        if (((o = (t.flags & 128) !== 0), (g = f.rendering), g === null))
          if (o) Si(f, !1);
          else {
            if (tt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((g = kl(e)), g !== null)) {
                  for (
                    t.flags |= 128,
                      Si(f, !1),
                      o = g.updateQueue,
                      o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      o = r,
                      r = t.child;
                    r !== null;
                  )
                    ((f = r),
                      (e = o),
                      (f.flags &= 14680066),
                      (g = f.alternate),
                      g === null
                        ? ((f.childLanes = 0),
                          (f.lanes = e),
                          (f.child = null),
                          (f.subtreeFlags = 0),
                          (f.memoizedProps = null),
                          (f.memoizedState = null),
                          (f.updateQueue = null),
                          (f.dependencies = null),
                          (f.stateNode = null))
                        : ((f.childLanes = g.childLanes),
                          (f.lanes = g.lanes),
                          (f.child = g.child),
                          (f.subtreeFlags = 0),
                          (f.deletions = null),
                          (f.memoizedProps = g.memoizedProps),
                          (f.memoizedState = g.memoizedState),
                          (f.updateQueue = g.updateQueue),
                          (f.type = g.type),
                          (e = g.dependencies),
                          (f.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (r = r.sibling));
                  return (Me($e, ($e.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            f.tail !== null &&
              Ye() > Mr &&
              ((t.flags |= 128), (o = !0), Si(f, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = kl(g)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                Si(f, !0),
                f.tail === null && f.tailMode === 'hidden' && !g.alternate && !Ve)
              )
                return (ft(t), null);
            } else
              2 * Ye() - f.renderingStartTime > Mr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (o = !0), Si(f, !1), (t.lanes = 4194304));
          f.isBackwards
            ? ((g.sibling = t.child), (t.child = g))
            : ((r = f.last), r !== null ? (r.sibling = g) : (t.child = g), (f.last = g));
        }
        return f.tail !== null
          ? ((t = f.tail),
            (f.rendering = t),
            (f.tail = t.sibling),
            (f.renderingStartTime = Ye()),
            (t.sibling = null),
            (r = $e.current),
            Me($e, o ? (r & 1) | 2 : r & 1),
            t)
          : (ft(t), null);
      case 22:
      case 23:
        return (
          Fs(),
          (o = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
          o && (t.mode & 1) !== 0
            ? (Pt & 1073741824) !== 0 && (ft(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ft(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function nm(e, t) {
    switch ((Go(t), t.tag)) {
      case 1:
        return (
          yt(t.type) && al(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Rr(),
          Ue(gt),
          Ue(at),
          ss(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (ls(t), null);
      case 13:
        if ((Ue($e), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(l(340));
          Lr();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Ue($e), null);
      case 4:
        return (Rr(), null);
      case 10:
        return (es(t.type._context), null);
      case 22:
      case 23:
        return (Fs(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ll = !1,
    dt = !1,
    rm = typeof WeakSet == 'function' ? WeakSet : Set,
    te = null;
  function Ar(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == 'function')
        try {
          r(null);
        } catch (o) {
          Ge(e, t, o);
        }
      else r.current = null;
  }
  function Ts(e, t, r) {
    try {
      r();
    } catch (o) {
      Ge(e, t, o);
    }
  }
  var ff = !1;
  function im(e, t) {
    if (((Fo = Yi), (e = Wa()), Po(e))) {
      if ('selectionStart' in e) var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var o = r.getSelection && r.getSelection();
          if (o && o.rangeCount !== 0) {
            r = o.anchorNode;
            var u = o.anchorOffset,
              f = o.focusNode;
            o = o.focusOffset;
            try {
              (r.nodeType, f.nodeType);
            } catch {
              r = null;
              break e;
            }
            var g = 0,
              E = -1,
              C = -1,
              O = 0,
              B = 0,
              W = e,
              F = null;
            t: for (;;) {
              for (
                var Z;
                W !== r || (u !== 0 && W.nodeType !== 3) || (E = g + u),
                  W !== f || (o !== 0 && W.nodeType !== 3) || (C = g + o),
                  W.nodeType === 3 && (g += W.nodeValue.length),
                  (Z = W.firstChild) !== null;
              )
                ((F = W), (W = Z));
              for (;;) {
                if (W === e) break t;
                if (
                  (F === r && ++O === u && (E = g),
                  F === f && ++B === o && (C = g),
                  (Z = W.nextSibling) !== null)
                )
                  break;
                ((W = F), (F = W.parentNode));
              }
              W = Z;
            }
            r = E === -1 || C === -1 ? null : { start: E, end: C };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Bo = { focusedElem: e, selectionRange: r }, Yi = !1, te = t; te !== null; )
      if (((t = te), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (te = e));
      else
        for (; te !== null; ) {
          t = te;
          try {
            var re = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (re !== null) {
                    var ie = re.memoizedProps,
                      Xe = re.memoizedState,
                      T = t.stateNode,
                      _ = T.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ie : Qt(t.type, ie),
                        Xe
                      );
                    T.__reactInternalSnapshotBeforeUpdate = _;
                  }
                  break;
                case 3:
                  var N = t.stateNode.containerInfo;
                  N.nodeType === 1
                    ? (N.textContent = '')
                    : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(l(163));
              }
          } catch ($) {
            Ge(t, t.return, $);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (te = e));
            break;
          }
          te = t.return;
        }
    return ((re = ff), (ff = !1), re);
  }
  function Ei(e, t, r) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var u = (o = o.next);
      do {
        if ((u.tag & e) === e) {
          var f = u.destroy;
          ((u.destroy = void 0), f !== void 0 && Ts(t, r, f));
        }
        u = u.next;
      } while (u !== o);
    }
  }
  function Ol(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var o = r.create;
          r.destroy = o();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Ns(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function df(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), df(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[nn], delete t[di], delete t[qo], delete t[Bh], delete t[Uh])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function pf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function hf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || pf(e.return)) return null;
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
  function Ls(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6)
      ((e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = sl)));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Ls(e, t, r), e = e.sibling; e !== null; ) (Ls(e, t, r), (e = e.sibling));
  }
  function Os(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6) ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Os(e, t, r), e = e.sibling; e !== null; ) (Os(e, t, r), (e = e.sibling));
  }
  var st = null,
    Gt = !1;
  function jn(e, t, r) {
    for (r = r.child; r !== null; ) (mf(e, t, r), (r = r.sibling));
  }
  function mf(e, t, r) {
    if (tn && typeof tn.onCommitFiberUnmount == 'function')
      try {
        tn.onCommitFiberUnmount(Vi, r);
      } catch {}
    switch (r.tag) {
      case 5:
        dt || Ar(r, t);
      case 6:
        var o = st,
          u = Gt;
        ((st = null),
          jn(e, t, r),
          (st = o),
          (Gt = u),
          st !== null &&
            (Gt
              ? ((e = st),
                (r = r.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
              : st.removeChild(r.stateNode)));
        break;
      case 18:
        st !== null &&
          (Gt
            ? ((e = st),
              (r = r.stateNode),
              e.nodeType === 8 ? Vo(e.parentNode, r) : e.nodeType === 1 && Vo(e, r),
              ti(e))
            : Vo(st, r.stateNode));
        break;
      case 4:
        ((o = st),
          (u = Gt),
          (st = r.stateNode.containerInfo),
          (Gt = !0),
          jn(e, t, r),
          (st = o),
          (Gt = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!dt && ((o = r.updateQueue), o !== null && ((o = o.lastEffect), o !== null))) {
          u = o = o.next;
          do {
            var f = u,
              g = f.destroy;
            ((f = f.tag),
              g !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && Ts(r, t, g),
              (u = u.next));
          } while (u !== o);
        }
        jn(e, t, r);
        break;
      case 1:
        if (!dt && (Ar(r, t), (o = r.stateNode), typeof o.componentWillUnmount == 'function'))
          try {
            ((o.props = r.memoizedProps), (o.state = r.memoizedState), o.componentWillUnmount());
          } catch (E) {
            Ge(r, t, E);
          }
        jn(e, t, r);
        break;
      case 21:
        jn(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((dt = (o = dt) || r.memoizedState !== null), jn(e, t, r), (dt = o))
          : jn(e, t, r);
        break;
      default:
        jn(e, t, r);
    }
  }
  function gf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      (r === null && (r = e.stateNode = new rm()),
        t.forEach(function (o) {
          var u = pm.bind(null, e, o);
          r.has(o) || (r.add(o), o.then(u, u));
        }));
    }
  }
  function Yt(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var o = 0; o < r.length; o++) {
        var u = r[o];
        try {
          var f = e,
            g = t,
            E = g;
          e: for (; E !== null; ) {
            switch (E.tag) {
              case 5:
                ((st = E.stateNode), (Gt = !1));
                break e;
              case 3:
                ((st = E.stateNode.containerInfo), (Gt = !0));
                break e;
              case 4:
                ((st = E.stateNode.containerInfo), (Gt = !0));
                break e;
            }
            E = E.return;
          }
          if (st === null) throw Error(l(160));
          (mf(f, g, u), (st = null), (Gt = !1));
          var C = u.alternate;
          (C !== null && (C.return = null), (u.return = null));
        } catch (O) {
          Ge(u, t, O);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (yf(t, e), (t = t.sibling));
  }
  function yf(e, t) {
    var r = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Yt(t, e), on(e), o & 4)) {
          try {
            (Ei(3, e, e.return), Ol(3, e));
          } catch (ie) {
            Ge(e, e.return, ie);
          }
          try {
            Ei(5, e, e.return);
          } catch (ie) {
            Ge(e, e.return, ie);
          }
        }
        break;
      case 1:
        (Yt(t, e), on(e), o & 512 && r !== null && Ar(r, r.return));
        break;
      case 5:
        if ((Yt(t, e), on(e), o & 512 && r !== null && Ar(r, r.return), e.flags & 32)) {
          var u = e.stateNode;
          try {
            Pe(u, '');
          } catch (ie) {
            Ge(e, e.return, ie);
          }
        }
        if (o & 4 && ((u = e.stateNode), u != null)) {
          var f = e.memoizedProps,
            g = r !== null ? r.memoizedProps : f,
            E = e.type,
            C = e.updateQueue;
          if (((e.updateQueue = null), C !== null))
            try {
              (E === 'input' && f.type === 'radio' && f.name != null && Jt(u, f), en(E, g));
              var O = en(E, f);
              for (g = 0; g < C.length; g += 2) {
                var B = C[g],
                  W = C[g + 1];
                B === 'style'
                  ? _n(u, W)
                  : B === 'dangerouslySetInnerHTML'
                    ? Ne(u, W)
                    : B === 'children'
                      ? Pe(u, W)
                      : U(u, B, W, O);
              }
              switch (E) {
                case 'input':
                  fn(u, f);
                  break;
                case 'textarea':
                  We(u, f);
                  break;
                case 'select':
                  var F = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!f.multiple;
                  var Z = f.value;
                  Z != null
                    ? Q(u, !!f.multiple, Z, !1)
                    : F !== !!f.multiple &&
                      (f.defaultValue != null
                        ? Q(u, !!f.multiple, f.defaultValue, !0)
                        : Q(u, !!f.multiple, f.multiple ? [] : '', !1));
              }
              u[di] = f;
            } catch (ie) {
              Ge(e, e.return, ie);
            }
        }
        break;
      case 6:
        if ((Yt(t, e), on(e), o & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          ((u = e.stateNode), (f = e.memoizedProps));
          try {
            u.nodeValue = f;
          } catch (ie) {
            Ge(e, e.return, ie);
          }
        }
        break;
      case 3:
        if ((Yt(t, e), on(e), o & 4 && r !== null && r.memoizedState.isDehydrated))
          try {
            ti(t.containerInfo);
          } catch (ie) {
            Ge(e, e.return, ie);
          }
        break;
      case 4:
        (Yt(t, e), on(e));
        break;
      case 13:
        (Yt(t, e),
          on(e),
          (u = e.child),
          u.flags & 8192 &&
            ((f = u.memoizedState !== null),
            (u.stateNode.isHidden = f),
            !f || (u.alternate !== null && u.alternate.memoizedState !== null) || (Rs = Ye())),
          o & 4 && gf(e));
        break;
      case 22:
        if (
          ((B = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((dt = (O = dt) || B), Yt(t, e), (dt = O)) : Yt(t, e),
          on(e),
          o & 8192)
        ) {
          if (
            ((O = e.memoizedState !== null), (e.stateNode.isHidden = O) && !B && (e.mode & 1) !== 0)
          )
            for (te = e, B = e.child; B !== null; ) {
              for (W = te = B; te !== null; ) {
                switch (((F = te), (Z = F.child), F.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ei(4, F, F.return);
                    break;
                  case 1:
                    Ar(F, F.return);
                    var re = F.stateNode;
                    if (typeof re.componentWillUnmount == 'function') {
                      ((o = F), (r = F.return));
                      try {
                        ((t = o),
                          (re.props = t.memoizedProps),
                          (re.state = t.memoizedState),
                          re.componentWillUnmount());
                      } catch (ie) {
                        Ge(o, r, ie);
                      }
                    }
                    break;
                  case 5:
                    Ar(F, F.return);
                    break;
                  case 22:
                    if (F.memoizedState !== null) {
                      kf(W);
                      continue;
                    }
                }
                Z !== null ? ((Z.return = F), (te = Z)) : kf(W);
              }
              B = B.sibling;
            }
          e: for (B = null, W = e; ; ) {
            if (W.tag === 5) {
              if (B === null) {
                B = W;
                try {
                  ((u = W.stateNode),
                    O
                      ? ((f = u.style),
                        typeof f.setProperty == 'function'
                          ? f.setProperty('display', 'none', 'important')
                          : (f.display = 'none'))
                      : ((E = W.stateNode),
                        (C = W.memoizedProps.style),
                        (g = C != null && C.hasOwnProperty('display') ? C.display : null),
                        (E.style.display = At('display', g))));
                } catch (ie) {
                  Ge(e, e.return, ie);
                }
              }
            } else if (W.tag === 6) {
              if (B === null)
                try {
                  W.stateNode.nodeValue = O ? '' : W.memoizedProps;
                } catch (ie) {
                  Ge(e, e.return, ie);
                }
            } else if (
              ((W.tag !== 22 && W.tag !== 23) || W.memoizedState === null || W === e) &&
              W.child !== null
            ) {
              ((W.child.return = W), (W = W.child));
              continue;
            }
            if (W === e) break e;
            for (; W.sibling === null; ) {
              if (W.return === null || W.return === e) break e;
              (B === W && (B = null), (W = W.return));
            }
            (B === W && (B = null), (W.sibling.return = W.return), (W = W.sibling));
          }
        }
        break;
      case 19:
        (Yt(t, e), on(e), o & 4 && gf(e));
        break;
      case 21:
        break;
      default:
        (Yt(t, e), on(e));
    }
  }
  function on(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (pf(r)) {
              var o = r;
              break e;
            }
            r = r.return;
          }
          throw Error(l(160));
        }
        switch (o.tag) {
          case 5:
            var u = o.stateNode;
            o.flags & 32 && (Pe(u, ''), (o.flags &= -33));
            var f = hf(e);
            Os(e, f, u);
            break;
          case 3:
          case 4:
            var g = o.stateNode.containerInfo,
              E = hf(e);
            Ls(e, E, g);
            break;
          default:
            throw Error(l(161));
        }
      } catch (C) {
        Ge(e, e.return, C);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function lm(e, t, r) {
    ((te = e), vf(e));
  }
  function vf(e, t, r) {
    for (var o = (e.mode & 1) !== 0; te !== null; ) {
      var u = te,
        f = u.child;
      if (u.tag === 22 && o) {
        var g = u.memoizedState !== null || Ll;
        if (!g) {
          var E = u.alternate,
            C = (E !== null && E.memoizedState !== null) || dt;
          E = Ll;
          var O = dt;
          if (((Ll = g), (dt = C) && !O))
            for (te = u; te !== null; )
              ((g = te),
                (C = g.child),
                g.tag === 22 && g.memoizedState !== null
                  ? xf(u)
                  : C !== null
                    ? ((C.return = g), (te = C))
                    : xf(u));
          for (; f !== null; ) ((te = f), vf(f), (f = f.sibling));
          ((te = u), (Ll = E), (dt = O));
        }
        wf(e);
      } else (u.subtreeFlags & 8772) !== 0 && f !== null ? ((f.return = u), (te = f)) : wf(e);
    }
  }
  function wf(e) {
    for (; te !== null; ) {
      var t = te;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                dt || Ol(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !dt)
                  if (r === null) o.componentDidMount();
                  else {
                    var u =
                      t.elementType === t.type ? r.memoizedProps : Qt(t.type, r.memoizedProps);
                    o.componentDidUpdate(u, r.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var f = t.updateQueue;
                f !== null && wc(t, f, o);
                break;
              case 3:
                var g = t.updateQueue;
                if (g !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  wc(t, g, r);
                }
                break;
              case 5:
                var E = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = E;
                  var C = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      C.autoFocus && r.focus();
                      break;
                    case 'img':
                      C.src && (r.src = C.src);
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
                  var O = t.alternate;
                  if (O !== null) {
                    var B = O.memoizedState;
                    if (B !== null) {
                      var W = B.dehydrated;
                      W !== null && ti(W);
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
                throw Error(l(163));
            }
          dt || (t.flags & 512 && Ns(t));
        } catch (F) {
          Ge(t, t.return, F);
        }
      }
      if (t === e) {
        te = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        ((r.return = t.return), (te = r));
        break;
      }
      te = t.return;
    }
  }
  function kf(e) {
    for (; te !== null; ) {
      var t = te;
      if (t === e) {
        te = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        ((r.return = t.return), (te = r));
        break;
      }
      te = t.return;
    }
  }
  function xf(e) {
    for (; te !== null; ) {
      var t = te;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              Ol(4, t);
            } catch (C) {
              Ge(t, r, C);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == 'function') {
              var u = t.return;
              try {
                o.componentDidMount();
              } catch (C) {
                Ge(t, u, C);
              }
            }
            var f = t.return;
            try {
              Ns(t);
            } catch (C) {
              Ge(t, f, C);
            }
            break;
          case 5:
            var g = t.return;
            try {
              Ns(t);
            } catch (C) {
              Ge(t, g, C);
            }
        }
      } catch (C) {
        Ge(t, t.return, C);
      }
      if (t === e) {
        te = null;
        break;
      }
      var E = t.sibling;
      if (E !== null) {
        ((E.return = t.return), (te = E));
        break;
      }
      te = t.return;
    }
  }
  var om = Math.ceil,
    Pl = de.ReactCurrentDispatcher,
    Ps = de.ReactCurrentOwner,
    Bt = de.ReactCurrentBatchConfig,
    be = 0,
    rt = null,
    Ke = null,
    ut = 0,
    Pt = 0,
    zr = Rn(0),
    tt = 0,
    Ci = null,
    or = 0,
    bl = 0,
    bs = 0,
    _i = null,
    wt = null,
    Rs = 0,
    Mr = 1 / 0,
    xn = null,
    Rl = !1,
    Ds = null,
    Fn = null,
    Dl = !1,
    Bn = null,
    Al = 0,
    Ii = 0,
    As = null,
    zl = -1,
    Ml = 0;
  function mt() {
    return (be & 6) !== 0 ? Ye() : zl !== -1 ? zl : (zl = Ye());
  }
  function Un(e) {
    return (e.mode & 1) === 0
      ? 1
      : (be & 2) !== 0 && ut !== 0
        ? ut & -ut
        : Vh.transition !== null
          ? (Ml === 0 && (Ml = pa()), Ml)
          : ((e = ze), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Sa(e.type))), e);
  }
  function Xt(e, t, r, o) {
    if (50 < Ii) throw ((Ii = 0), (As = null), Error(l(185)));
    (Xr(e, r, o),
      ((be & 2) === 0 || e !== rt) &&
        (e === rt && ((be & 2) === 0 && (bl |= r), tt === 4 && Wn(e, ut)),
        kt(e, o),
        r === 1 && be === 0 && (t.mode & 1) === 0 && ((Mr = Ye() + 500), fl && An())));
  }
  function kt(e, t) {
    var r = e.callbackNode;
    Vp(e, t);
    var o = $i(e, e === rt ? ut : 0);
    if (o === 0) (r !== null && ca(r), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((r != null && ca(r), t === 1))
        (e.tag === 0 ? Wh(Ef.bind(null, e)) : sc(Ef.bind(null, e)),
          jh(function () {
            (be & 6) === 0 && An();
          }),
          (r = null));
      else {
        switch (ha(o)) {
          case 1:
            r = ho;
            break;
          case 4:
            r = fa;
            break;
          case 16:
            r = Wi;
            break;
          case 536870912:
            r = da;
            break;
          default:
            r = Wi;
        }
        r = Pf(r, Sf.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = r));
    }
  }
  function Sf(e, t) {
    if (((zl = -1), (Ml = 0), (be & 6) !== 0)) throw Error(l(327));
    var r = e.callbackNode;
    if (jr() && e.callbackNode !== r) return null;
    var o = $i(e, e === rt ? ut : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = jl(e, o);
    else {
      t = o;
      var u = be;
      be |= 2;
      var f = _f();
      (rt !== e || ut !== t) && ((xn = null), (Mr = Ye() + 500), ur(e, t));
      do
        try {
          am();
          break;
        } catch (E) {
          Cf(e, E);
        }
      while (!0);
      (Zo(), (Pl.current = f), (be = u), Ke !== null ? (t = 0) : ((rt = null), (ut = 0), (t = tt)));
    }
    if (t !== 0) {
      if ((t === 2 && ((u = mo(e)), u !== 0 && ((o = u), (t = zs(e, u)))), t === 1))
        throw ((r = Ci), ur(e, 0), Wn(e, o), kt(e, Ye()), r);
      if (t === 6) Wn(e, o);
      else {
        if (
          ((u = e.current.alternate),
          (o & 30) === 0 &&
            !sm(u) &&
            ((t = jl(e, o)),
            t === 2 && ((f = mo(e)), f !== 0 && ((o = f), (t = zs(e, f)))),
            t === 1))
        )
          throw ((r = Ci), ur(e, 0), Wn(e, o), kt(e, Ye()), r);
        switch (((e.finishedWork = u), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            ar(e, wt, xn);
            break;
          case 3:
            if ((Wn(e, o), (o & 130023424) === o && ((t = Rs + 500 - Ye()), 10 < t))) {
              if ($i(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & o) !== o)) {
                (mt(), (e.pingedLanes |= e.suspendedLanes & u));
                break;
              }
              e.timeoutHandle = Wo(ar.bind(null, e, wt, xn), t);
              break;
            }
            ar(e, wt, xn);
            break;
          case 4:
            if ((Wn(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, u = -1; 0 < o; ) {
              var g = 31 - qt(o);
              ((f = 1 << g), (g = t[g]), g > u && (u = g), (o &= ~f));
            }
            if (
              ((o = u),
              (o = Ye() - o),
              (o =
                (120 > o
                  ? 120
                  : 480 > o
                    ? 480
                    : 1080 > o
                      ? 1080
                      : 1920 > o
                        ? 1920
                        : 3e3 > o
                          ? 3e3
                          : 4320 > o
                            ? 4320
                            : 1960 * om(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = Wo(ar.bind(null, e, wt, xn), o);
              break;
            }
            ar(e, wt, xn);
            break;
          case 5:
            ar(e, wt, xn);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return (kt(e, Ye()), e.callbackNode === r ? Sf.bind(null, e) : null);
  }
  function zs(e, t) {
    var r = _i;
    return (
      e.current.memoizedState.isDehydrated && (ur(e, t).flags |= 256),
      (e = jl(e, t)),
      e !== 2 && ((t = wt), (wt = r), t !== null && Ms(t)),
      e
    );
  }
  function Ms(e) {
    wt === null ? (wt = e) : wt.push.apply(wt, e);
  }
  function sm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var o = 0; o < r.length; o++) {
            var u = r[o],
              f = u.getSnapshot;
            u = u.value;
            try {
              if (!Ht(f(), u)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null)) ((r.return = t), (t = r));
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
  function Wn(e, t) {
    for (
      t &= ~bs, t &= ~bl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var r = 31 - qt(t),
        o = 1 << r;
      ((e[r] = -1), (t &= ~o));
    }
  }
  function Ef(e) {
    if ((be & 6) !== 0) throw Error(l(327));
    jr();
    var t = $i(e, 0);
    if ((t & 1) === 0) return (kt(e, Ye()), null);
    var r = jl(e, t);
    if (e.tag !== 0 && r === 2) {
      var o = mo(e);
      o !== 0 && ((t = o), (r = zs(e, o)));
    }
    if (r === 1) throw ((r = Ci), ur(e, 0), Wn(e, t), kt(e, Ye()), r);
    if (r === 6) throw Error(l(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      ar(e, wt, xn),
      kt(e, Ye()),
      null
    );
  }
  function js(e, t) {
    var r = be;
    be |= 1;
    try {
      return e(t);
    } finally {
      ((be = r), be === 0 && ((Mr = Ye() + 500), fl && An()));
    }
  }
  function sr(e) {
    Bn !== null && Bn.tag === 0 && (be & 6) === 0 && jr();
    var t = be;
    be |= 1;
    var r = Bt.transition,
      o = ze;
    try {
      if (((Bt.transition = null), (ze = 1), e)) return e();
    } finally {
      ((ze = o), (Bt.transition = r), (be = t), (be & 6) === 0 && An());
    }
  }
  function Fs() {
    ((Pt = zr.current), Ue(zr));
  }
  function ur(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), Mh(r)), Ke !== null))
      for (r = Ke.return; r !== null; ) {
        var o = r;
        switch ((Go(o), o.tag)) {
          case 1:
            ((o = o.type.childContextTypes), o != null && al());
            break;
          case 3:
            (Rr(), Ue(gt), Ue(at), ss());
            break;
          case 5:
            ls(o);
            break;
          case 4:
            Rr();
            break;
          case 13:
            Ue($e);
            break;
          case 19:
            Ue($e);
            break;
          case 10:
            es(o.type._context);
            break;
          case 22:
          case 23:
            Fs();
        }
        r = r.return;
      }
    if (
      ((rt = e),
      (Ke = e = Vn(e.current, null)),
      (ut = Pt = t),
      (tt = 0),
      (Ci = null),
      (bs = bl = or = 0),
      (wt = _i = null),
      rr !== null)
    ) {
      for (t = 0; t < rr.length; t++)
        if (((r = rr[t]), (o = r.interleaved), o !== null)) {
          r.interleaved = null;
          var u = o.next,
            f = r.pending;
          if (f !== null) {
            var g = f.next;
            ((f.next = u), (o.next = g));
          }
          r.pending = o;
        }
      rr = null;
    }
    return e;
  }
  function Cf(e, t) {
    do {
      var r = Ke;
      try {
        if ((Zo(), (xl.current = _l), Sl)) {
          for (var o = Qe.memoizedState; o !== null; ) {
            var u = o.queue;
            (u !== null && (u.pending = null), (o = o.next));
          }
          Sl = !1;
        }
        if (
          ((lr = 0),
          (nt = et = Qe = null),
          (vi = !1),
          (wi = 0),
          (Ps.current = null),
          r === null || r.return === null)
        ) {
          ((tt = 1), (Ci = t), (Ke = null));
          break;
        }
        e: {
          var f = e,
            g = r.return,
            E = r,
            C = t;
          if (
            ((t = ut),
            (E.flags |= 32768),
            C !== null && typeof C == 'object' && typeof C.then == 'function')
          ) {
            var O = C,
              B = E,
              W = B.tag;
            if ((B.mode & 1) === 0 && (W === 0 || W === 11 || W === 15)) {
              var F = B.alternate;
              F
                ? ((B.updateQueue = F.updateQueue),
                  (B.memoizedState = F.memoizedState),
                  (B.lanes = F.lanes))
                : ((B.updateQueue = null), (B.memoizedState = null));
            }
            var Z = Gc(g);
            if (Z !== null) {
              ((Z.flags &= -257), Yc(Z, g, E, f, t), Z.mode & 1 && Qc(f, O, t), (t = Z), (C = O));
              var re = t.updateQueue;
              if (re === null) {
                var ie = new Set();
                (ie.add(C), (t.updateQueue = ie));
              } else re.add(C);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Qc(f, O, t), Bs());
                break e;
              }
              C = Error(l(426));
            }
          } else if (Ve && E.mode & 1) {
            var Xe = Gc(g);
            if (Xe !== null) {
              ((Xe.flags & 65536) === 0 && (Xe.flags |= 256), Yc(Xe, g, E, f, t), Ko(Dr(C, E)));
              break e;
            }
          }
          ((f = C = Dr(C, E)),
            tt !== 4 && (tt = 2),
            _i === null ? (_i = [f]) : _i.push(f),
            (f = g));
          do {
            switch (f.tag) {
              case 3:
                ((f.flags |= 65536), (t &= -t), (f.lanes |= t));
                var T = Hc(f, C, t);
                vc(f, T);
                break e;
              case 1:
                E = C;
                var _ = f.type,
                  N = f.stateNode;
                if (
                  (f.flags & 128) === 0 &&
                  (typeof _.getDerivedStateFromError == 'function' ||
                    (N !== null &&
                      typeof N.componentDidCatch == 'function' &&
                      (Fn === null || !Fn.has(N))))
                ) {
                  ((f.flags |= 65536), (t &= -t), (f.lanes |= t));
                  var $ = $c(f, E, t);
                  vc(f, $);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        Tf(r);
      } catch (oe) {
        ((t = oe), Ke === r && r !== null && (Ke = r = r.return));
        continue;
      }
      break;
    } while (!0);
  }
  function _f() {
    var e = Pl.current;
    return ((Pl.current = _l), e === null ? _l : e);
  }
  function Bs() {
    ((tt === 0 || tt === 3 || tt === 2) && (tt = 4),
      rt === null || ((or & 268435455) === 0 && (bl & 268435455) === 0) || Wn(rt, ut));
  }
  function jl(e, t) {
    var r = be;
    be |= 2;
    var o = _f();
    (rt !== e || ut !== t) && ((xn = null), ur(e, t));
    do
      try {
        um();
        break;
      } catch (u) {
        Cf(e, u);
      }
    while (!0);
    if ((Zo(), (be = r), (Pl.current = o), Ke !== null)) throw Error(l(261));
    return ((rt = null), (ut = 0), tt);
  }
  function um() {
    for (; Ke !== null; ) If(Ke);
  }
  function am() {
    for (; Ke !== null && !Dp(); ) If(Ke);
  }
  function If(e) {
    var t = Of(e.alternate, e, Pt);
    ((e.memoizedProps = e.pendingProps), t === null ? Tf(e) : (Ke = t), (Ps.current = null));
  }
  function Tf(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = tm(r, t, Pt)), r !== null)) {
          Ke = r;
          return;
        }
      } else {
        if (((r = nm(r, t)), r !== null)) {
          ((r.flags &= 32767), (Ke = r));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((tt = 6), (Ke = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ke = t;
        return;
      }
      Ke = t = e;
    } while (t !== null);
    tt === 0 && (tt = 5);
  }
  function ar(e, t, r) {
    var o = ze,
      u = Bt.transition;
    try {
      ((Bt.transition = null), (ze = 1), cm(e, t, r, o));
    } finally {
      ((Bt.transition = u), (ze = o));
    }
    return null;
  }
  function cm(e, t, r, o) {
    do jr();
    while (Bn !== null);
    if ((be & 6) !== 0) throw Error(l(327));
    r = e.finishedWork;
    var u = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(l(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var f = r.lanes | r.childLanes;
    if (
      (qp(e, f),
      e === rt && ((Ke = rt = null), (ut = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        Dl ||
        ((Dl = !0),
        Pf(Wi, function () {
          return (jr(), null);
        })),
      (f = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || f)
    ) {
      ((f = Bt.transition), (Bt.transition = null));
      var g = ze;
      ze = 1;
      var E = be;
      ((be |= 4),
        (Ps.current = null),
        im(e, r),
        yf(r, e),
        Oh(Bo),
        (Yi = !!Fo),
        (Bo = Fo = null),
        (e.current = r),
        lm(r),
        Ap(),
        (be = E),
        (ze = g),
        (Bt.transition = f));
    } else e.current = r;
    if (
      (Dl && ((Dl = !1), (Bn = e), (Al = u)),
      (f = e.pendingLanes),
      f === 0 && (Fn = null),
      jp(r.stateNode),
      kt(e, Ye()),
      t !== null)
    )
      for (o = e.onRecoverableError, r = 0; r < t.length; r++)
        ((u = t[r]), o(u.value, { componentStack: u.stack, digest: u.digest }));
    if (Rl) throw ((Rl = !1), (e = Ds), (Ds = null), e);
    return (
      (Al & 1) !== 0 && e.tag !== 0 && jr(),
      (f = e.pendingLanes),
      (f & 1) !== 0 ? (e === As ? Ii++ : ((Ii = 0), (As = e))) : (Ii = 0),
      An(),
      null
    );
  }
  function jr() {
    if (Bn !== null) {
      var e = ha(Al),
        t = Bt.transition,
        r = ze;
      try {
        if (((Bt.transition = null), (ze = 16 > e ? 16 : e), Bn === null)) var o = !1;
        else {
          if (((e = Bn), (Bn = null), (Al = 0), (be & 6) !== 0)) throw Error(l(331));
          var u = be;
          for (be |= 4, te = e.current; te !== null; ) {
            var f = te,
              g = f.child;
            if ((te.flags & 16) !== 0) {
              var E = f.deletions;
              if (E !== null) {
                for (var C = 0; C < E.length; C++) {
                  var O = E[C];
                  for (te = O; te !== null; ) {
                    var B = te;
                    switch (B.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ei(8, B, f);
                    }
                    var W = B.child;
                    if (W !== null) ((W.return = B), (te = W));
                    else
                      for (; te !== null; ) {
                        B = te;
                        var F = B.sibling,
                          Z = B.return;
                        if ((df(B), B === O)) {
                          te = null;
                          break;
                        }
                        if (F !== null) {
                          ((F.return = Z), (te = F));
                          break;
                        }
                        te = Z;
                      }
                  }
                }
                var re = f.alternate;
                if (re !== null) {
                  var ie = re.child;
                  if (ie !== null) {
                    re.child = null;
                    do {
                      var Xe = ie.sibling;
                      ((ie.sibling = null), (ie = Xe));
                    } while (ie !== null);
                  }
                }
                te = f;
              }
            }
            if ((f.subtreeFlags & 2064) !== 0 && g !== null) ((g.return = f), (te = g));
            else
              e: for (; te !== null; ) {
                if (((f = te), (f.flags & 2048) !== 0))
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ei(9, f, f.return);
                  }
                var T = f.sibling;
                if (T !== null) {
                  ((T.return = f.return), (te = T));
                  break e;
                }
                te = f.return;
              }
          }
          var _ = e.current;
          for (te = _; te !== null; ) {
            g = te;
            var N = g.child;
            if ((g.subtreeFlags & 2064) !== 0 && N !== null) ((N.return = g), (te = N));
            else
              e: for (g = _; te !== null; ) {
                if (((E = te), (E.flags & 2048) !== 0))
                  try {
                    switch (E.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ol(9, E);
                    }
                  } catch (oe) {
                    Ge(E, E.return, oe);
                  }
                if (E === g) {
                  te = null;
                  break e;
                }
                var $ = E.sibling;
                if ($ !== null) {
                  (($.return = E.return), (te = $));
                  break e;
                }
                te = E.return;
              }
          }
          if (((be = u), An(), tn && typeof tn.onPostCommitFiberRoot == 'function'))
            try {
              tn.onPostCommitFiberRoot(Vi, e);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        ((ze = r), (Bt.transition = t));
      }
    }
    return !1;
  }
  function Nf(e, t, r) {
    ((t = Dr(r, t)),
      (t = Hc(e, t, 1)),
      (e = Mn(e, t, 1)),
      (t = mt()),
      e !== null && (Xr(e, 1, t), kt(e, t)));
  }
  function Ge(e, t, r) {
    if (e.tag === 3) Nf(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Nf(t, e, r);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof o.componentDidCatch == 'function' && (Fn === null || !Fn.has(o)))
          ) {
            ((e = Dr(r, e)),
              (e = $c(t, e, 1)),
              (t = Mn(t, e, 1)),
              (e = mt()),
              t !== null && (Xr(t, 1, e), kt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function fm(e, t, r) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (t = mt()),
      (e.pingedLanes |= e.suspendedLanes & r),
      rt === e &&
        (ut & r) === r &&
        (tt === 4 || (tt === 3 && (ut & 130023424) === ut && 500 > Ye() - Rs)
          ? ur(e, 0)
          : (bs |= r)),
      kt(e, t));
  }
  function Lf(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Hi), (Hi <<= 1), (Hi & 130023424) === 0 && (Hi = 4194304)));
    var r = mt();
    ((e = vn(e, t)), e !== null && (Xr(e, t, r), kt(e, r)));
  }
  function dm(e) {
    var t = e.memoizedState,
      r = 0;
    (t !== null && (r = t.retryLane), Lf(e, r));
  }
  function pm(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          u = e.memoizedState;
        u !== null && (r = u.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    (o !== null && o.delete(t), Lf(e, r));
  }
  var Of;
  Of = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || gt.current) vt = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return ((vt = !1), em(e, t, r));
        vt = (e.flags & 131072) !== 0;
      }
    else ((vt = !1), Ve && (t.flags & 1048576) !== 0 && uc(t, pl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        (Nl(e, t), (e = t.pendingProps));
        var u = Ir(t, at.current);
        (br(t, r), (u = cs(null, t, o, e, u, r)));
        var f = fs();
        return (
          (t.flags |= 1),
          typeof u == 'object' &&
          u !== null &&
          typeof u.render == 'function' &&
          u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              yt(o) ? ((f = !0), cl(t)) : (f = !1),
              (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
              rs(t),
              (u.updater = Il),
              (t.stateNode = u),
              (u._reactInternals = t),
              ys(t, o, e, r),
              (t = xs(null, t, o, !0, f, r)))
            : ((t.tag = 0), Ve && f && Qo(t), ht(null, t, u, r), (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
            (Nl(e, t),
            (e = t.pendingProps),
            (u = o._init),
            (o = u(o._payload)),
            (t.type = o),
            (u = t.tag = mm(o)),
            (e = Qt(o, e)),
            u)
          ) {
            case 0:
              t = ks(null, t, o, e, r);
              break e;
            case 1:
              t = tf(null, t, o, e, r);
              break e;
            case 11:
              t = Xc(null, t, o, e, r);
              break e;
            case 14:
              t = Kc(null, t, o, Qt(o.type, e), r);
              break e;
          }
          throw Error(l(306, o, ''));
        }
        return t;
      case 0:
        return (
          (o = t.type),
          (u = t.pendingProps),
          (u = t.elementType === o ? u : Qt(o, u)),
          ks(e, t, o, u, r)
        );
      case 1:
        return (
          (o = t.type),
          (u = t.pendingProps),
          (u = t.elementType === o ? u : Qt(o, u)),
          tf(e, t, o, u, r)
        );
      case 3:
        e: {
          if ((nf(t), e === null)) throw Error(l(387));
          ((o = t.pendingProps),
            (f = t.memoizedState),
            (u = f.element),
            yc(e, t),
            wl(t, o, null, r));
          var g = t.memoizedState;
          if (((o = g.element), f.isDehydrated))
            if (
              ((f = {
                element: o,
                isDehydrated: !1,
                cache: g.cache,
                pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                transitions: g.transitions,
              }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              ((u = Dr(Error(l(423)), t)), (t = rf(e, t, o, r, u)));
              break e;
            } else if (o !== u) {
              ((u = Dr(Error(l(424)), t)), (t = rf(e, t, o, r, u)));
              break e;
            } else
              for (
                Ot = bn(t.stateNode.containerInfo.firstChild),
                  Lt = t,
                  Ve = !0,
                  $t = null,
                  r = mc(t, null, o, r),
                  t.child = r;
                r;
              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
          else {
            if ((Lr(), o === u)) {
              t = kn(e, t, r);
              break e;
            }
            ht(e, t, o, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          kc(t),
          e === null && Xo(t),
          (o = t.type),
          (u = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (g = u.children),
          Uo(o, u) ? (g = null) : f !== null && Uo(o, f) && (t.flags |= 32),
          ef(e, t),
          ht(e, t, g, r),
          t.child
        );
      case 6:
        return (e === null && Xo(t), null);
      case 13:
        return lf(e, t, r);
      case 4:
        return (
          is(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = Or(t, null, o, r)) : ht(e, t, o, r),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (u = t.pendingProps),
          (u = t.elementType === o ? u : Qt(o, u)),
          Xc(e, t, o, u, r)
        );
      case 7:
        return (ht(e, t, t.pendingProps, r), t.child);
      case 8:
        return (ht(e, t, t.pendingProps.children, r), t.child);
      case 12:
        return (ht(e, t, t.pendingProps.children, r), t.child);
      case 10:
        e: {
          if (
            ((o = t.type._context),
            (u = t.pendingProps),
            (f = t.memoizedProps),
            (g = u.value),
            Me(gl, o._currentValue),
            (o._currentValue = g),
            f !== null)
          )
            if (Ht(f.value, g)) {
              if (f.children === u.children && !gt.current) {
                t = kn(e, t, r);
                break e;
              }
            } else
              for (f = t.child, f !== null && (f.return = t); f !== null; ) {
                var E = f.dependencies;
                if (E !== null) {
                  g = f.child;
                  for (var C = E.firstContext; C !== null; ) {
                    if (C.context === o) {
                      if (f.tag === 1) {
                        ((C = wn(-1, r & -r)), (C.tag = 2));
                        var O = f.updateQueue;
                        if (O !== null) {
                          O = O.shared;
                          var B = O.pending;
                          (B === null ? (C.next = C) : ((C.next = B.next), (B.next = C)),
                            (O.pending = C));
                        }
                      }
                      ((f.lanes |= r),
                        (C = f.alternate),
                        C !== null && (C.lanes |= r),
                        ts(f.return, r, t),
                        (E.lanes |= r));
                      break;
                    }
                    C = C.next;
                  }
                } else if (f.tag === 10) g = f.type === t.type ? null : f.child;
                else if (f.tag === 18) {
                  if (((g = f.return), g === null)) throw Error(l(341));
                  ((g.lanes |= r),
                    (E = g.alternate),
                    E !== null && (E.lanes |= r),
                    ts(g, r, t),
                    (g = f.sibling));
                } else g = f.child;
                if (g !== null) g.return = f;
                else
                  for (g = f; g !== null; ) {
                    if (g === t) {
                      g = null;
                      break;
                    }
                    if (((f = g.sibling), f !== null)) {
                      ((f.return = g.return), (g = f));
                      break;
                    }
                    g = g.return;
                  }
                f = g;
              }
          (ht(e, t, u.children, r), (t = t.child));
        }
        return t;
      case 9:
        return (
          (u = t.type),
          (o = t.pendingProps.children),
          br(t, r),
          (u = jt(u)),
          (o = o(u)),
          (t.flags |= 1),
          ht(e, t, o, r),
          t.child
        );
      case 14:
        return ((o = t.type), (u = Qt(o, t.pendingProps)), (u = Qt(o.type, u)), Kc(e, t, o, u, r));
      case 15:
        return Jc(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (o = t.type),
          (u = t.pendingProps),
          (u = t.elementType === o ? u : Qt(o, u)),
          Nl(e, t),
          (t.tag = 1),
          yt(o) ? ((e = !0), cl(t)) : (e = !1),
          br(t, r),
          Vc(t, o, u),
          ys(t, o, u, r),
          xs(null, t, o, !0, e, r)
        );
      case 19:
        return sf(e, t, r);
      case 22:
        return Zc(e, t, r);
    }
    throw Error(l(156, t.tag));
  };
  function Pf(e, t) {
    return aa(e, t);
  }
  function hm(e, t, r, o) {
    ((this.tag = e),
      (this.key = r),
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
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Ut(e, t, r, o) {
    return new hm(e, t, r, o);
  }
  function Us(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function mm(e) {
    if (typeof e == 'function') return Us(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === D)) return 11;
      if (e === V) return 14;
    }
    return 2;
  }
  function Vn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = Ut(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function Fl(e, t, r, o, u, f) {
    var g = 2;
    if (((o = e), typeof e == 'function')) Us(e) && (g = 1);
    else if (typeof e == 'string') g = 5;
    else
      e: switch (e) {
        case me:
          return cr(r.children, u, f, t);
        case xe:
          ((g = 8), (u |= 8));
          break;
        case Se:
          return ((e = Ut(12, r, t, u | 2)), (e.elementType = Se), (e.lanes = f), e);
        case J:
          return ((e = Ut(13, r, t, u)), (e.elementType = J), (e.lanes = f), e);
        case X:
          return ((e = Ut(19, r, t, u)), (e.elementType = X), (e.lanes = f), e);
        case se:
          return Bl(r, u, f, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Ee:
                g = 10;
                break e;
              case ne:
                g = 9;
                break e;
              case D:
                g = 11;
                break e;
              case V:
                g = 14;
                break e;
              case ue:
                ((g = 16), (o = null));
                break e;
            }
          throw Error(l(130, e == null ? e : typeof e, ''));
      }
    return ((t = Ut(g, r, t, u)), (t.elementType = e), (t.type = o), (t.lanes = f), t);
  }
  function cr(e, t, r, o) {
    return ((e = Ut(7, e, o, t)), (e.lanes = r), e);
  }
  function Bl(e, t, r, o) {
    return (
      (e = Ut(22, e, o, t)),
      (e.elementType = se),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ws(e, t, r) {
    return ((e = Ut(6, e, null, t)), (e.lanes = r), e);
  }
  function Vs(e, t, r) {
    return (
      (t = Ut(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function gm(e, t, r, o, u) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = go(0)),
      (this.expirationTimes = go(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = go(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null));
  }
  function qs(e, t, r, o, u, f, g, E, C) {
    return (
      (e = new gm(e, t, r, E, C)),
      t === 1 ? ((t = 1), f === !0 && (t |= 8)) : (t = 0),
      (f = Ut(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (f.memoizedState = {
        element: o,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      rs(f),
      e
    );
  }
  function ym(e, t, r) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: z,
      key: o == null ? null : '' + o,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function bf(e) {
    if (!e) return Dn;
    e = e._reactInternals;
    e: {
      if (Jn(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (yt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (yt(r)) return lc(e, r, t);
    }
    return t;
  }
  function Rf(e, t, r, o, u, f, g, E, C) {
    return (
      (e = qs(r, o, !0, e, u, f, g, E, C)),
      (e.context = bf(null)),
      (r = e.current),
      (o = mt()),
      (u = Un(r)),
      (f = wn(o, u)),
      (f.callback = t ?? null),
      Mn(r, f, u),
      (e.current.lanes = u),
      Xr(e, u, o),
      kt(e, o),
      e
    );
  }
  function Ul(e, t, r, o) {
    var u = t.current,
      f = mt(),
      g = Un(u);
    return (
      (r = bf(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = wn(f, g)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = Mn(u, t, g)),
      e !== null && (Xt(e, u, g, f), vl(e, u, g)),
      g
    );
  }
  function Wl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Df(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Hs(e, t) {
    (Df(e, t), (e = e.alternate) && Df(e, t));
  }
  function vm() {
    return null;
  }
  var Af =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function $s(e) {
    this._internalRoot = e;
  }
  ((Vl.prototype.render = $s.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(l(409));
      Ul(e, t, null, null);
    }),
    (Vl.prototype.unmount = $s.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (sr(function () {
            Ul(null, e, null, null);
          }),
            (t[hn] = null));
        }
      }));
  function Vl(e) {
    this._internalRoot = e;
  }
  Vl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ya();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Ln.length && t !== 0 && t < Ln[r].priority; r++);
      (Ln.splice(r, 0, e), r === 0 && ka(e));
    }
  };
  function Qs(e) {
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
  function zf() {}
  function wm(e, t, r, o, u) {
    if (u) {
      if (typeof o == 'function') {
        var f = o;
        o = function () {
          var O = Wl(g);
          f.call(O);
        };
      }
      var g = Rf(t, o, e, 0, null, !1, !1, '', zf);
      return (
        (e._reactRootContainer = g),
        (e[hn] = g.current),
        ci(e.nodeType === 8 ? e.parentNode : e),
        sr(),
        g
      );
    }
    for (; (u = e.lastChild); ) e.removeChild(u);
    if (typeof o == 'function') {
      var E = o;
      o = function () {
        var O = Wl(C);
        E.call(O);
      };
    }
    var C = qs(e, 0, !1, null, null, !1, !1, '', zf);
    return (
      (e._reactRootContainer = C),
      (e[hn] = C.current),
      ci(e.nodeType === 8 ? e.parentNode : e),
      sr(function () {
        Ul(t, C, r, o);
      }),
      C
    );
  }
  function Hl(e, t, r, o, u) {
    var f = r._reactRootContainer;
    if (f) {
      var g = f;
      if (typeof u == 'function') {
        var E = u;
        u = function () {
          var C = Wl(g);
          E.call(C);
        };
      }
      Ul(t, g, e, u);
    } else g = wm(r, t, e, u, o);
    return Wl(g);
  }
  ((ma = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Yr(t.pendingLanes);
          r !== 0 && (yo(t, r | 1), kt(t, Ye()), (be & 6) === 0 && ((Mr = Ye() + 500), An()));
        }
        break;
      case 13:
        (sr(function () {
          var o = vn(e, 1);
          if (o !== null) {
            var u = mt();
            Xt(o, e, 1, u);
          }
        }),
          Hs(e, 1));
    }
  }),
    (vo = function (e) {
      if (e.tag === 13) {
        var t = vn(e, 134217728);
        if (t !== null) {
          var r = mt();
          Xt(t, e, 134217728, r);
        }
        Hs(e, 134217728);
      }
    }),
    (ga = function (e) {
      if (e.tag === 13) {
        var t = Un(e),
          r = vn(e, t);
        if (r !== null) {
          var o = mt();
          Xt(r, e, t, o);
        }
        Hs(e, t);
      }
    }),
    (ya = function () {
      return ze;
    }),
    (va = function (e, t) {
      var r = ze;
      try {
        return ((ze = e), t());
      } finally {
        ze = r;
      }
    }),
    (ao = function (e, t, r) {
      switch (t) {
        case 'input':
          if ((fn(e, r), (t = r.name), r.type === 'radio' && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
                t = 0;
              t < r.length;
              t++
            ) {
              var o = r[t];
              if (o !== e && o.form === e.form) {
                var u = ul(o);
                if (!u) throw Error(l(90));
                (hr(o), fn(o, u));
              }
            }
          }
          break;
        case 'textarea':
          We(e, r);
          break;
        case 'select':
          ((t = r.value), t != null && Q(e, !!r.multiple, t, !1));
      }
    }),
    (na = js),
    (ra = sr));
  var km = { usingClientEntryPoint: !1, Events: [pi, Cr, ul, ea, ta, js] },
    Ti = {
      findFiberByHostInstance: Zn,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    xm = {
      bundleType: Ti.bundleType,
      version: Ti.version,
      rendererPackageName: Ti.rendererPackageName,
      rendererConfig: Ti.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: de.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = sa(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Ti.findFiberByHostInstance || vm,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var $l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$l.isDisabled && $l.supportsFiber)
      try {
        ((Vi = $l.inject(xm)), (tn = $l));
      } catch {}
  }
  return (
    (xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = km),
    (xt.createPortal = function (e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Qs(t)) throw Error(l(200));
      return ym(e, t, null, r);
    }),
    (xt.createRoot = function (e, t) {
      if (!Qs(e)) throw Error(l(299));
      var r = !1,
        o = '',
        u = Af;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = qs(e, 1, !1, null, null, r, !1, o, u)),
        (e[hn] = t.current),
        ci(e.nodeType === 8 ? e.parentNode : e),
        new $s(t)
      );
    }),
    (xt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(l(188))
          : ((e = Object.keys(e).join(',')), Error(l(268, e)));
      return ((e = sa(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (xt.flushSync = function (e) {
      return sr(e);
    }),
    (xt.hydrate = function (e, t, r) {
      if (!ql(t)) throw Error(l(200));
      return Hl(null, e, t, !0, r);
    }),
    (xt.hydrateRoot = function (e, t, r) {
      if (!Qs(e)) throw Error(l(405));
      var o = (r != null && r.hydratedSources) || null,
        u = !1,
        f = '',
        g = Af;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (u = !0),
          r.identifierPrefix !== void 0 && (f = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (g = r.onRecoverableError)),
        (t = Rf(t, null, e, 1, r ?? null, u, !1, f, g)),
        (e[hn] = t.current),
        ci(e),
        o)
      )
        for (e = 0; e < o.length; e++)
          ((r = o[e]),
            (u = r._getVersion),
            (u = u(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, u])
              : t.mutableSourceEagerHydrationData.push(r, u));
      return new Vl(t);
    }),
    (xt.render = function (e, t, r) {
      if (!ql(t)) throw Error(l(200));
      return Hl(null, e, t, !1, r);
    }),
    (xt.unmountComponentAtNode = function (e) {
      if (!ql(e)) throw Error(l(40));
      return e._reactRootContainer
        ? (sr(function () {
            Hl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[hn] = null));
            });
          }),
          !0)
        : !1;
    }),
    (xt.unstable_batchedUpdates = js),
    (xt.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!ql(r)) throw Error(l(200));
      if (e == null || e._reactInternals === void 0) throw Error(l(38));
      return Hl(e, t, r, !1, o);
    }),
    (xt.version = '18.3.1-next-f1338f8080-20240426'),
    xt
  );
}
var qf;
function Lm() {
  if (qf) return Xs.exports;
  qf = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return (n(), (Xs.exports = Nm()), Xs.exports);
}
var Hf;
function Om() {
  if (Hf) return Ql;
  Hf = 1;
  var n = Lm();
  return ((Ql.createRoot = n.createRoot), (Ql.hydrateRoot = n.hydrateRoot), Ql);
}
var Pm = Om();
const bm = JSON.parse(
    `[{"id":"timeframes","type":"preset","presets":[{"id":"next-decade","name":"Focused on next decade (until 2035)","description":"Evaluates projects primarily by their effects over the next decade.","credences":{"equalAll":0,"prioritizeNearer":0,"discountDistant":25,"shortTermOnly":75}},{"id":"next-generations","name":"Focused on next generations (until 2100)","description":"Emphasizes effects on the next few generations, including individuals who do not currently exist.","credences":{"equalAll":20,"prioritizeNearer":50,"discountDistant":30,"shortTermOnly":0}},{"id":"longtermist","name":"Longtermist","description":"Concerned with the longterm future, valuing effects equally regardless of when they occur.","credences":{"equalAll":80,"prioritizeNearer":20,"discountDistant":0,"shortTermOnly":0}}],"worldviewDimension":{"appliesTo":"timeframe","applyAs":"multiplier","options":{"equalAll":{"short":1,"medium":1,"long":1},"prioritizeNearer":{"short":1,"medium":0.5,"long":0.2},"discountDistant":{"short":1,"medium":0.2,"long":0},"shortTermOnly":{"short":1,"medium":0,"long":0}}},"categoryLabel":"Time Preferences","icon":"clock","previewText":"Short vs. long-term effects","heading":"When evaluating projects, how much consideration do you give to projects' near-term, medium-term, or longer-term effects?","info":"A project's effects play out over different timelines. Some effects, like malaria treatments, might occur right away. Others, like investments in education or infrastructure, could take years to arise. Other effects will arise in the longer run future. When you are evaluating projects, do you give extra weight to effects that will happen sooner (in the next decade) rather than later (decades or even centuries in the future)?\\n\\nThere are several reasons why you might give extra weight to near-term effects. First, you might think it's more morally important to help individuals that currently exist or will exist very soon than it is to help individuals that will potentially exist in the future. Alternatively, even if you think all beings matter equally, regardless of time, you might be so uncertain about a project's long-term effects that you'd rather focus on the more predictable near future. Lastly, you might have beliefs about how the future will go (e.g. that AI will change everything in 10 years) that make you want to just focus on projects whose effects will happen soon.","context":"Consider the following timeframes:\\n\\n- **Short-term:** before 2035\\n- **Medium-term:** from 2035-2100\\n- **Long-term:** after 2100\\n\\nWhich of these positions best describes your view when evaluating the effects of different projects?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Time Preferences","options":[{"key":"shortTermOnly","label":"Short-term only","description":"I only care about effects in the short-term","info":"","panelLabel":"Short","panelShort":"ST"},{"key":"discountDistant","label":"Discount the distant future","description":"I do not care about the distant future. I care a bit about the medium-term, but I put more priority on the short-term","info":"","panelLabel":"Discount","panelShort":">>"},{"key":"prioritizeNearer","label":"Prioritize nearer term","description":"I care a bit about the long-term future, but I put more priority on the medium-term and even more priority on the short-term","info":"","panelLabel":"Nearer","panelShort":">"},{"key":"equalAll","label":"Equal across all timeframes","description":"I only care about how much good I could possibly do, and I don't care whether that good happens in the short-term, medium-term, or long-term","info":"","panelLabel":"Equal","panelShort":"="}]},{"id":"risk","type":"credence","worldviewDimension":{"appliesWhen":"isDummyRisk","applyAs":"multiplier","options":{"riskNeutral":1,"upsideSkepticism":1,"lossAversion":1,"both":1}},"categoryLabel":"Risk Attitudes","icon":"dice","previewText":"Attitudes toward risk","heading":"Are you averse to taking certain kinds of risks in your philanthropic giving?","info":"The expected value of a project is a weighted average of all the effects that the project might have. Two projects can have the same expected value but otherwise be very different. For example, a \\"safe\\" project may be almost guaranteed to do X amount of good, so its expected value is X. A \\"risky\\" project might have a 1/100 chance of delivering 100 x X amount of good and a 99/100 of doing nothing, so its expected value is also X. A different kind of \\"risky\\" project might have a 1/2 chance of backfiring, creating -X value, and a 1/2 chance of creating 3X value, so its expected value is also X.\\n\\nIf you only care about maximizing expected value, you will treat these projects the same way. However, if you are risk averse, you may dislike one or both of the risky projects. There are a few ways to be risk averse, including:\\n\\n- **Upside skepticism:** you are wary of spending your money on bets that have very small chances of success. You want to focus on what will probably happen, not what will happen in the most optimistic of outcomes.\\n- **Loss aversion:** you want to avoid situations where your money does nothing, and you are even more keen to avoid situations where your actions made things worse. You want to penalize projects that have decent chances of failure or backfire.\\n- **Both skeptical of upsides and averse to losses**","context":"Which of these best describes your perspective:","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Risk Attitudes","options":[{"key":"riskNeutral","label":"Risk neutral","description":"I prefer to invest in options that have the highest expected value, even if they have low success rates or risk of negative outcomes","info":"","panelLabel":"Neutral","panelShort":"EV"},{"key":"upsideSkepticism","label":"Skeptical of optimistic scenarios","description":"I am skeptical of projects' most optimistic scenarios and decide where to give based on scenarios that are more likely to occur","info":"","panelLabel":"Skeptical","panelShort":"S"},{"key":"lossAversion","label":"Avoid losses","description":"I want to avoid losses and am motivated to avoid projects that have significant chances of failure or backfire (even if those projects have high expected value)","info":"","panelLabel":"Loss averse","panelShort":"LA"},{"key":"both","label":"Both skeptical and loss averse","description":"I am both skeptical of projects' most optimistic scenarios and motivated to avoid losses","info":"","panelLabel":"Both","panelShort":"B"}]},{"id":"xrisk","type":"credence","worldviewDimension":{"appliesWhen":"isNonXRisk","applyAs":"multiplier","options":{"evaluateSame":1,"discount10":0.9,"discount50":0.5,"xriskOnly":0}},"categoryLabel":"Existential Risk","icon":"alert-triangle","previewText":"Existential risk priority","heading":"How much do you want to prioritize efforts to mitigate near-term existential risks that demand action in the next several years, compared to other kinds of projects you might fund?","info":"Some projects aim to reduce the chances of an event that poses existential or catastrophic risk (such as an engineered pandemic or AI takeover). If an event like this occurs, then it could severely mitigate the beneficial effects of other kinds of philanthropic projects (such as global health interventions). This can make it hard to compare the value of existential risk mitigation to the value of other projects.\\n\\nIf you think there is a high chance of a catastrophic risk in the near future (say, the next 10 years), then you may think that we need to act now to try to reduce these threats. You may care a lot about the longer-run future and what the world is like decades from now, but you want to prioritize actions now to ensure that humanity is around to enjoy that future.","context":"Do you want to treat near-term existential risk mitigation projects differently than other projects?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"X-Risk Priority","options":[{"key":"evaluateSame","label":"Evaluate the same way","description":"I want to evaluate near-term existential risk projects the same way that I evaluate all other projects (e.g. by calculating their expected effects over the timeline I care about)","info":"","panelLabel":"Same","panelShort":"="},{"key":"discount10","label":"Discount other projects somewhat","description":"I think there is about a 10% probability that an existential risk occurs in the next decade that renders other projects useless. Therefore, I want to discount the value of these other projects somewhat","info":"","panelLabel":"10% risk","panelShort":"10%"},{"key":"discount50","label":"Discount other projects greatly","description":"I think there is about a 50% probability that an existential risk occurs in the next decade that renders other projects useless. Therefore, I want to greatly discount the value of these other projects","info":"","panelLabel":"50% risk","panelShort":"50%"},{"key":"xriskOnly","label":"Only x-risk reduction","description":"I only care about reducing near-term existential risk","info":"","panelLabel":"X-risk only","panelShort":"X"}]},{"id":"animal","type":"preset","presets":[{"id":"animal-friendly","name":"Animal friendly view","description":"Emphasizes equal consideration for animal and human suffering.","credences":{"humanEqual":75,"human10x":25,"human100x":0,"human1000x":0,"noValue":0}},{"id":"rethink-priorities","name":"Rethink Priorities default","description":"Based on empirical research on animal welfare ranges, gives animals somewhat lower weight than humans.","credences":{"humanEqual":20,"human10x":50,"human100x":20,"human1000x":10,"noValue":0}},{"id":"animal-skeptic","name":"Animal skeptic view","description":"Gives strong priority to human welfare, based on their unique capacities or our special moral obligations to other humans.","credences":{"humanEqual":0,"human10x":10,"human100x":60,"human1000x":30,"noValue":0}}],"worldviewDimension":{"appliesWhen":"helpsAnimals","applyAs":"multiplier","options":{"humanEqual":0.0172,"human10x":0.00172,"human100x":0.000172,"human1000x":0.0000172,"noValue":0}},"categoryLabel":"Animal Welfare","icon":"paw","previewText":"Animal welfare","heading":"How much do you value reducing suffering in animals compared to reducing suffering in humans?","info":"It can be difficult to compare the value of helping humans versus helping animals. For now, let's consider animals that most people believe are capable of suffering (such as pigs, dogs, or cows) and use chickens as a test case.\\n\\nThere are some conditions that decrease chickens' quality of life, which we can measure in terms of chicken Disability Adjusted Life Years. For example, suppose living in hurtful pain for a year reduces a chicken's quality of life by 25%. Therefore, if we improve a chicken's living conditions to relieve this suffering, this would result in a gain of 0.25 chicken DALYs. Likewise, some human conditions reduce a human's quality of life by 25%, so relieving this for a year would result in 0.25 human DALYs.\\n\\nHow much do you value chicken DALYs versus human DALYs? In other words, how much do you care about a quality of life reduction in chickens compared to a similar proportional quality of life reduction in humans? Note that there are a few different reasons you might give chicken DALYs lower weight. Perhaps you think a 25% reduction in a chicken's quality of life involves less suffering (or loss of meaningful experiences) than a 25% reduction in a human's quality of life. Alternatively, you could think the amount of suffering is the same, but you think it is morally more important to alleviate human suffering.","context":"For this question, we'll focus on familiar farmed animals—chickens, pigs, and cows—that most people agree can experience pain and distress.\\n\\nWhich of these positions best describes your view?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Animal Welfare Weights","options":[{"key":"humanEqual","label":"Equal to humans","description":"I treat a year of disability in an animal the same as a year of disability in a human","info":"","panelLabel":"Equal","panelShort":"="},{"key":"human10x","label":"10x less than humans","description":"I value a human year of disability about 10x as much as a year of disability in an animal","info":"","panelLabel":"10x less","panelShort":"10x"},{"key":"human100x","label":"100x less than humans","description":"I value a human year of disability about 100x as much as a year of disability in an animal","info":"","panelLabel":"100x less","panelShort":"100x"},{"key":"human1000x","label":"1000x less than humans","description":"I value a human year of disability about 1000x as much as a year of disability in an animal","info":"","panelLabel":"1000x less","panelShort":"1kx"},{"key":"noValue","label":"No value","description":"I do not value animal welfare","info":"","panelLabel":"None","panelShort":"0"}]},{"id":"invertebrate","type":"preset","presets":[{"id":"invertebrate-friendly","name":"Invertebrate friendly view","description":"Emphasizes roughly equal consideration for invertebrate and human suffering, tempered by uncertainty about invertebrate sentience.","credences":{"humanEqual":40,"human100x":40,"human1000x":20,"human10000x":0,"noValue":0}},{"id":"rethink-priorities","name":"Rethink Priorities default","description":"Based on empirical research on animal welfare ranges and likelihoods of invertebrate sentience, gives animals significantly lower weight than humans.","credences":{"humanEqual":10,"human100x":40,"human1000x":30,"human10000x":10,"noValue":10}},{"id":"invertebrate-skeptic","name":"Invertebrate skeptic view","description":"Gives strong priority to human welfare, highly skeptical about invertebrates' capacity for welfare.","credences":{"humanEqual":0,"human100x":0,"human1000x":10,"human10000x":40,"noValue":50}}],"worldviewDimension":{"appliesWhen":"helpsInvertebrates","applyAs":"multiplier","options":{"humanEqual":0.0172,"human100x":0.000172,"human1000x":0.0000172,"human10000x":0.00000172,"noValue":0}},"categoryLabel":"Invertebrate Welfare","icon":"shell","previewText":"Invertebrate welfare","heading":"How much do you care about reducing the suffering of shrimp (or other small, less understood farmed invertebrates), compared to reducing the suffering of humans?","info":"It can be difficult to compare the value of helping humans versus helping animals. This is even more difficult when we are uncertain whether the animals even have conscious experiences or what their experiences are like. For now, let's consider farmed invertebrates (such as shrimp or insects) and use shrimp as a test case.\\n\\nShrimp may experience conditions that reduce their quality of life. Assuming they are sentient, we can characterize their loss of quality of life via a shrimp DALY. How much do you value shrimp DALYs versus human DALYs? Note that there are three different reasons you might give shrimp DALYs lower weight. Perhaps you think a 25% reduction in a shrimp's quality of life involves less suffering (or loss of meaningful experiences) than a 25% reduction in a human's quality of life. Alternatively, you could think the amount of suffering is the same, but you think it is morally more important to alleviate human suffering. Lastly, you could doubt that shrimp are sentient and therefore doubt that they can suffer.","context":"Which of these positions best describes your view?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Invertebrate Weights","options":[{"key":"humanEqual","label":"Equal to humans","description":"I treat a year of disability in shrimp the same as a year of disability in a human","info":"","panelLabel":"Equal","panelShort":"="},{"key":"human100x","label":"100x less than humans","description":"I value a human year of disability about 100x as much as a year of disability in a shrimp","info":"","panelLabel":"100x less","panelShort":"100x"},{"key":"human1000x","label":"1000x less than humans","description":"I value a human year of disability about 1000x as much as a year of disability in a shrimp","info":"","panelLabel":"1000x less","panelShort":"1kx"},{"key":"human10000x","label":"10,000x less than humans","description":"I value a human year of disability about 10,000x as much as a year of disability in a shrimp","info":"","panelLabel":"10kx less","panelShort":"10kx"},{"key":"noValue","label":"No value","description":"I do not value shrimp welfare","info":"","panelLabel":"None","panelShort":"0"}]},{"id":"disability","type":"preset","presets":[{"id":"prioritize-lives","name":"Prioritize saving lives","description":"Places more emphasis on preventing deaths than relieving suffering from non-fatal diseases and disabilities.","credences":{"livesOnly":25,"livesMore":75,"equal":0,"disabilityMore":0}},{"id":"equal-weight","name":"Equal weight","description":"Values saving lives the same as restoring quality of life lost to disability. Similar to GiveWell's moral weights.","credences":{"livesOnly":0,"livesMore":0,"equal":100,"disabilityMore":0}},{"id":"prioritize-quality","name":"Prioritize improving quality of life","description":"Places more emphasis on relieving suffering due to disease and disability, instead of saving lives.","credences":{"livesOnly":0,"livesMore":0,"equal":25,"disabilityMore":75}}],"worldviewDimension":{"appliesWhen":"preventsDisability","applyAs":"multiplier","options":{"livesOnly":0,"livesMore":0.003,"equal":0.0172,"disabilityMore":0.086}},"categoryLabel":"Disability Weights","icon":"heart-pulse","previewText":"Disability vs. saving lives","heading":"When you think about helping people, how do you weigh saving lives against making people's existing lives better by reducing disease or disability?","info":"Here's an example that may help you think through your options. Suppose that living with blindness reduces someone's quality of life by 25%. You could either choose to cure blindness in a group of people, restoring them to full health for some number of years. Or you could save a child's life, giving them 50 extra years to live. How many years of blindness would you need to relieve to make it as good as saving the one child's life?\\n\\nSome charitable projects save lives—preventing people from dying. Others relieve suffering from diseases or disabilities that aren't fatal but significantly reduce quality of life.\\n\\n**How we measure this:** We can estimate how much a disease or disability reduces someone's quality of life (estimates typically come from the [Global Burden of Disease](https://www.healthdata.org/research-analysis/gbd)). For example:\\n\\n- **Clubfoot** might reduce quality of life by 20%\\n- **Blindness** might reduce quality of life by 25%\\n- **Severe multiple sclerosis** might reduce quality of life by 75%\\n\\nIf a charity treats someone's blindness for 10 years, that's like restoring 2.5 \\"full-health years\\" (10 years × 25% improvement). If a charity corrects an infant's clubfeet and prevents them from suffering from 60 years of that condition, that's like restoring 12 full health years. We call these recovered years \\"disability-adjusted life years\\" or DALYs.","context":"Imagine you must choose between two projects:\\n\\n- **Project A:** Save one child's life, giving them 50 additional years to live\\n- **Project B:** Cure or treat a serious disability for multiple people, restoring some number of \\"full-health years\\"\\n\\nHow many years of disability would you need to relieve to make it as good as saving the one child's life?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Disability Weights","options":[{"key":"livesOnly","label":"Saving lives only","description":"I only care about saving years of life due to death","info":"","panelLabel":"Lives only","panelShort":"0"},{"key":"livesMore","label":"More weight on saving lives","description":"I put 5x as much value on saving a year of life lost to death than a year of life lost to disability","info":"I'd need to prevent 1000 years of blindness to equal saving 50 years of life.","panelLabel":"5x lives","panelShort":"5xL"},{"key":"equal","label":"Equal weight for saving lives and relieving disabilities","description":"I value a year of life lost equally, whether it is due to death or disability","info":"I'd need to prevent 200 years of blindness to equal saving 50 years of life. For comparison, this is the weight given to disability by GiveWell.","panelLabel":"Equal","panelShort":"="},{"key":"disabilityMore","label":"More weight on relieving disability","description":"I put 5x as much value on saving a year of life lost to disability than a year of life lost to death","info":"I'd need to prevent 40 years of blindness to equal saving 50 years of life.","panelLabel":"5x disability","panelShort":"5xD"}]},{"id":"income","type":"preset","presets":[{"id":"prioritize-lives","name":"Prioritize saving lives","description":"Places much more emphasis on preventing deaths than improving material conditions for people living in poverty.","credences":{"livesOnly":25,"lives10x":75,"lives2x":0,"equal":0}},{"id":"balanced","name":"Balanced","description":"Gives more weight to saving lives than improving incomes, but cares about both goals. Similar to GiveWell's moral weights.","credences":{"livesOnly":0,"lives10x":25,"lives2x":75,"equal":0}},{"id":"poverty-relief","name":"Poverty relief","description":"Prioritizes poverty relief as highly as saving lives.","credences":{"livesOnly":0,"lives10x":0,"lives2x":25,"equal":75}}],"worldviewDimension":{"appliesWhen":"increasesIncome","applyAs":"multiplier","options":{"livesOnly":0,"lives10x":0.0017,"lives2x":0.0086,"equal":0.0172}},"categoryLabel":"Income Weights","icon":"banknote","previewText":"Income vs. saving lives","heading":"When you think about helping people, how do you weigh saving lives against increasing people's income, allowing them to improve their material quality of life?","info":"Here's an example that might help you think through your options. Suppose that you could make direct cash transfers that would double incomes for a group of people for a year. The same amount of money would save one child's life, giving them an extra 50 years to live. How many people's incomes would you have to double to make that option as good as saving the one child's life?","context":"**Imagine this scenario:** You could either:\\n\\n- **Option A:** Add one year of life to someone who would otherwise die\\n- **Option B:** Double someone's income for one year, significantly improving their material circumstances\\n\\nHow much do you value doubling someone's income for a year compared to adding one year to someone's life?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Income Weights","options":[{"key":"livesOnly","label":"Saving lives only","description":"I only care about adding years of life","info":"","panelLabel":"Lives only","panelShort":"0"},{"key":"lives10x","label":"Much more weight on a year of life","description":"I put 10x as much value on a year of life compared to a year of doubled income","info":"I would need to double yearly income for 500 people to equal saving 50 years of life.","panelLabel":"10x lives","panelShort":"10x"},{"key":"lives2x","label":"Some more weight on a year of life","description":"I put 2x as much value on a year of life compared to a year of doubled income","info":"I would need to double yearly income for 100 people to equal saving 50 years of life. This is comparable to (but slightly higher than) the weight that GiveWell assigns to a year of income doubling compared to saving a year of life.","panelLabel":"2x lives","panelShort":"2x"},{"key":"equal","label":"Equal weight","description":"I put the same value on a year of life compared to a year of doubled income","info":"I would need to double yearly income for 50 people to equal saving 50 years of life.","panelLabel":"Equal","panelShort":"="}]}]`
  ),
  Du = { questions: bm },
  Rm = 'extreme',
  Dm = {
    globalHealthDisease: {
      name: 'Global Health Disease Relief Fund',
      color: '#5eb3d4',
      points: 100,
      scaleFactor: 1,
      preventsDisability: !0,
      increasesIncome: !1,
      helpsAnimals: !1,
      helpsInvertebrates: !1,
      timeframe: 'short',
      isNonXRisk: !0,
      isDummyRisk: !0,
    },
    givewellPortfolio: {
      name: 'GiveWell-Style Global Health Portfolio',
      color: '#d4a25e',
      points: 100,
      scaleFactor: 1,
      preventsDisability: !0,
      increasesIncome: !1,
      helpsAnimals: !1,
      helpsInvertebrates: !1,
      timeframe: 'short',
      isNonXRisk: !0,
      isDummyRisk: !0,
    },
    animalWelfare: {
      name: 'EA Animal Welfare-Style Fund',
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
    invertebrateWelfare: {
      name: 'Invertebrate Welfare Fund',
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
    aiSafety: {
      name: 'AI Safety Research Fund',
      color: '#9b5de5',
      points: 1,
      scaleFactor: 0.9,
      preventsDisability: !1,
      increasesIncome: !1,
      helpsAnimals: !1,
      helpsInvertebrates: !1,
      timeframe: 'long',
      isLongTerm: !0,
      isNonXRisk: !1,
      isDummyRisk: !0,
    },
    bioriskPandemic: {
      name: 'Biorisk and Pandemic Prevention Fund',
      color: '#27ae60',
      points: 1,
      scaleFactor: 0.8,
      preventsDisability: !1,
      increasesIncome: !1,
      helpsAnimals: !1,
      helpsInvertebrates: !1,
      timeframe: 'short',
      isNonXRisk: !1,
      isDummyRisk: !0,
    },
  },
  Am = { livesOnly: 25, livesMore: 25, equal: 25, disabilityMore: 25 },
  zi = { diminishingReturns: Rm, causes: Dm, defaultCredences: Am },
  zm = !1,
  Mm = { sliderLock: !0 },
  jm = {
    order: ['mergedFavorites', 'maxEV', 'parliament', 'maximin'],
    showMergedFavorites: !0,
    showMaxEV: !0,
    showParliament: !1,
    showMaximin: !1,
    sideBySideComparison: !0,
  },
  eo = { advanced: zm, ui: Mm, calculations: jm },
  En = {
    SESSION_ID: 'quiz_session_id',
    QUIZ_STATE: 'quiz_state',
    SKIP_CONFLICT: 'quiz_skip_conflict',
  },
  Md = 7;
function Fm() {
  let n = sessionStorage.getItem(En.SESSION_ID);
  return (n || ((n = crypto.randomUUID()), sessionStorage.setItem(En.SESSION_ID, n)), n);
}
function Bm(n) {
  const {
      currentStep: i,
      worldviews: l,
      activeWorldviewId: s,
      selectedCalculations: a,
      worldviewNames: c,
      marketplaceBudget: d,
    } = n,
    p = {};
  for (const [h, y] of Object.entries(l)) {
    const v = {};
    for (const [k, w] of Object.entries(y.questions))
      v[k] = {
        credences: w.credences,
        originalCredences: w.originalCredences,
        inputMode: w.inputMode,
        lockedKeys: w.lockedKeys,
        selectedPreset: w.selectedPreset,
      };
    p[h] = { questions: v, completed: y.completed || !1 };
  }
  const m = {
    version: Md,
    state: {
      currentStep: i,
      worldviews: p,
      activeWorldviewId: s,
      selectedCalculations: a,
      worldviewNames: c,
      marketplaceBudget: d,
    },
  };
  sessionStorage.setItem(En.QUIZ_STATE, JSON.stringify(m));
}
function fr() {
  const n = sessionStorage.getItem(En.QUIZ_STATE);
  if (!n) return null;
  try {
    const i = JSON.parse(n);
    return i.version !== Md ? (Ur(), null) : i.state;
  } catch {
    return (Ur(), null);
  }
}
function $f() {
  return sessionStorage.getItem(En.QUIZ_STATE) !== null;
}
function Ur() {
  sessionStorage.removeItem(En.QUIZ_STATE);
}
function Um() {
  sessionStorage.setItem(En.SKIP_CONFLICT, 'true');
}
function Qf() {
  const n = sessionStorage.getItem(En.SKIP_CONFLICT) === 'true';
  return (n && sessionStorage.removeItem(En.SKIP_CONFLICT), n);
}
const Wm = '/api',
  Vm = { share: `${Wm}/share` },
  { questions: qm } = Du;
function Hm() {
  return qm
    .filter((n) => n.type !== 'intermission' && n.options)
    .map((n) => ({ id: n.id, optionKeys: n.options.map((i) => i.key) }));
}
function Gf(n) {
  const i = Hm(),
    l = new Set(i.map((d) => d.id)),
    a = Object.keys(n).filter((d) => !l.has(d)),
    c = i.filter((d) => !n[d.id]);
  return a.length > 0 || c.length > 0
    ? { valid: !1, error: 'Quiz has changed since this link was created' }
    : { valid: !0 };
}
async function $m(n) {
  try {
    const i = await fetch(`${Vm.share}?id=${encodeURIComponent(n)}`);
    if (!i.ok) {
      if (i.status === 404) return null;
      throw new Error('Failed to fetch share data');
    }
    return await i.json();
  } catch {
    return null;
  }
}
function hu() {
  const n = window.location.hash;
  if (n.startsWith('#s=')) {
    const i = n.slice(3);
    return i ? { hasShare: !0, id: i } : { hasShare: !1 };
  }
  return { hasShare: !1 };
}
function Qm(n) {
  const i = {};
  for (const [l, s] of Object.entries(n))
    i[l] = { credences: s, inputMode: 'options', lockedKeys: [] };
  return i;
}
async function Yf() {
  const n = hu();
  if (!n.hasShare) return null;
  const i = await $m(n.id);
  if (!i) return { error: 'This share link has expired or no longer exists' };
  if (i.worldviews && i.activeWorldviewId) {
    for (const a of Object.values(i.worldviews))
      if (a.questions) {
        const c = Gf(a.questions);
        if (!c.valid) return { error: c.error };
      }
    return {
      worldviews: i.worldviews,
      activeWorldviewId: i.activeWorldviewId,
      selectedCalculations: i.selectedCalculations || null,
      worldviewNames: i.worldviewNames || null,
      marketplaceBudget: i.marketplaceBudget || null,
    };
  }
  const l = i.questions || (i.credences && Qm(i.credences));
  if (!l) return { error: 'Invalid share data format' };
  const s = Gf(l);
  return s.valid ? { questions: l } : { error: s.error };
}
function Hn() {
  window.location.hash &&
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
const St = 'rgba(255, 255, 255, 0.8)',
  Xf = {
    default: [St, St, St],
    selection: [St, St, St],
    credence: [St, St, St],
    preset: [St, St, St, St, St],
  },
  mu = { OPTIONS: 'options' },
  Kt = { DEFAULT: 'default', SELECTION: 'selection', INTERMISSION: 'intermission', RATIO: 'ratio' };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gm = (n) => n.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  jd = (...n) =>
    n
      .filter((i, l, s) => !!i && i.trim() !== '' && s.indexOf(i) === l)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ym = {
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
 */ const Xm = Y.forwardRef(
  (
    {
      color: n = 'currentColor',
      size: i = 24,
      strokeWidth: l = 2,
      absoluteStrokeWidth: s,
      className: a = '',
      children: c,
      iconNode: d,
      ...p
    },
    m
  ) =>
    Y.createElement(
      'svg',
      {
        ref: m,
        ...Ym,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: s ? (Number(l) * 24) / Number(i) : l,
        className: jd('lucide', a),
        ...p,
      },
      [...d.map(([h, y]) => Y.createElement(h, y)), ...(Array.isArray(c) ? c : [c])]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gn = (n, i) => {
  const l = Y.forwardRef(({ className: s, ...a }, c) =>
    Y.createElement(Xm, { ref: c, iconNode: i, className: jd(`lucide-${Gm(n)}`, s), ...a })
  );
  return ((l.displayName = `${n}`), l);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Km = Gn('Building2', [
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
 */ const Jm = Gn('CircleHelp', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zm = Gn('ExternalLink', [
  ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
  ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
  ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eg = Gn('Handshake', [
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
 */ const tg = Gn('Info', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M12 16v-4', key: '1dtifu' }],
  ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ng = Gn('Lock', [
  ['rect', { width: '18', height: '11', x: '3', y: '11', rx: '2', ry: '2', key: '1w4ew1' }],
  ['path', { d: 'M7 11V7a5 5 0 0 1 10 0v4', key: 'fwvmzm' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rg = Gn('Scale', [
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
 */ const ig = Gn('Target', [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['circle', { cx: '12', cy: '12', r: '6', key: '1vlfrh' }],
    ['circle', { cx: '12', cy: '12', r: '2', key: '1c9p78' }],
  ]),
  lg = '_overlay_13cvn_1',
  og = '_modal_13cvn_12',
  sg = '_title_13cvn_21',
  ug = '_message_13cvn_29',
  ag = '_buttons_13cvn_36',
  cg = '_button_13cvn_36',
  $n = { overlay: lg, modal: og, title: sg, message: ug, buttons: ag, button: cg };
function fg({ onKeepMine: n, onLoadShared: i, onOpenNewTab: l }) {
  return j.jsx('div', {
    className: $n.overlay,
    children: j.jsxs('div', {
      className: $n.modal,
      children: [
        j.jsx('h2', { className: $n.title, children: 'You have unsaved progress' }),
        j.jsx('p', {
          className: $n.message,
          children:
            'Loading this shared link will replace your current quiz answers. What would you like to do?',
        }),
        j.jsxs('div', {
          className: $n.buttons,
          children: [
            j.jsx('button', {
              onClick: n,
              className: `btn btn-secondary ${$n.button}`,
              children: 'Keep my progress',
            }),
            j.jsx('button', {
              onClick: i,
              className: `btn btn-primary ${$n.button}`,
              children: 'Load shared results',
            }),
            j.jsxs('button', {
              onClick: l,
              className: `btn btn-secondary ${$n.button}`,
              children: [j.jsx(Zm, { size: 16 }), 'Open in new tab'],
            }),
          ],
        }),
      ],
    }),
  });
}
const { causes: ro } = zi,
  gu = { none: 1, sqrt: 0.5, extreme: 0.1 };
function dg(n) {
  const i = (n == null ? void 0 : n.diminishingReturns) || zi.diminishingReturns;
  return gu[i] ?? 0.5;
}
function pg(n) {
  const i = JSON.stringify(n);
  let l = 0;
  for (let s = 0; s < i.length; s++) {
    const a = i.charCodeAt(s);
    ((l = (l << 5) - l + a), (l = l & l));
  }
  return Math.abs(l);
}
function hg(n) {
  let i = n;
  return function () {
    ((i |= 0), (i = (i + 1831565813) | 0));
    let l = Math.imul(i ^ (i >>> 15), 1 | i);
    return (
      (l = (l + Math.imul(l ^ (l >>> 7), 61 | l)) ^ l),
      ((l ^ (l >>> 14)) >>> 0) / 4294967296
    );
  };
}
function Fd(n, i, l = 0.5) {
  if (l >= 1) {
    const d = Math.max(...n);
    if (d <= 0) return n.map(() => i / n.length);
    const p = n.map((m, h) => (m === d ? h : -1)).filter((m) => m >= 0);
    return n.map((m, h) => (p.includes(h) ? i / p.length : 0));
  }
  const s = 1 / (1 - l),
    a = n.map((d) => (d > 0 ? Math.pow(d, s) : 0)),
    c = a.reduce((d, p) => d + p, 0);
  return c === 0 ? n.map(() => i / n.length) : a.map((d) => (d / c) * i);
}
function Au(n = !1) {
  return Object.fromEntries(
    Du.questions
      .filter((i) => i.type !== 'intermission' && i.worldviewDimension)
      .map((i) => [
        i.id,
        n ? { ...i.worldviewDimension, name: i.editPanelTitle } : i.worldviewDimension,
      ])
  );
}
const io = Au();
function* mg(n) {
  const i = Object.keys(n);
  if (i.length === 0) return;
  function* l(s, a) {
    if (s === i.length) {
      let p = 1;
      for (const m of i) p *= n[m][a[m]] / 100;
      yield { options: a, probability: p };
      return;
    }
    const c = i[s],
      d = Object.keys(n[c]);
    for (const p of d) yield* l(s + 1, { ...a, [c]: p });
  }
  yield* l(0, {});
}
function* gg(n, i = 2e3) {
  const l = Object.keys(n);
  if (l.length === 0) return;
  const s = pg(n),
    a = hg(s),
    c = {};
  for (const m of l) {
    const h = Object.entries(n[m]);
    let y = 0;
    c[m] = h.map(([v, k]) => ((y += k / 100), { key: v, cumsum: y }));
  }
  const d = (m, h) => {
      const y = c[m];
      for (const { key: v, cumsum: k } of y) if (h <= k) return v;
      return y[y.length - 1].key;
    },
    p = 1 / i;
  for (let m = 0; m < i; m++) {
    const h = {};
    for (const y of l) h[y] = d(y, a());
    yield { options: h, probability: p };
  }
}
function yg(n) {
  return Object.values(n).reduce((i, l) => i * Object.keys(l).length, 1);
}
function vg(n) {
  for (const i of Object.values(n)) {
    const l = Object.values(i),
      s = l.filter((c) => c === 100).length === 1,
      a = l.filter((c) => c === 0).length === l.length - 1;
    if (!s || !a) return !1;
  }
  return !0;
}
function* wg(n) {
  const i = {};
  for (const [l, s] of Object.entries(n))
    for (const [a, c] of Object.entries(s))
      if (c === 100) {
        i[l] = a;
        break;
      }
  yield { options: i, probability: 1 };
}
function* zu(n, i = 500, l = 2e3) {
  if (vg(n)) {
    yield* wg(n);
    return;
  }
  yg(n) <= i ? yield* mg(n) : yield* gg(n, l);
}
function kg(n, i, l) {
  let s = n.points;
  for (const [a, c] of Object.entries(l)) {
    const d = i[a],
      p = c.options[d];
    if (c.applyAs === 'multiplier')
      if (c.appliesTo) {
        const m = n[c.appliesTo];
        if (m && typeof p == 'object') {
          const h = p[m];
          h !== void 0 && (s *= h);
        }
      } else c.appliesWhen && n[c.appliesWhen] && (s *= p);
    else if (c.applyAs === 'exponent' && c.appliesTo) {
      const m = n[c.appliesTo] || 1;
      s *= Math.pow(m, p);
    }
  }
  return s;
}
function Mu(n, i, l) {
  const s = {};
  for (const [a, c] of Object.entries(i)) s[a] = kg(c, n, l);
  return s;
}
function xg(n) {
  const i = Math.max(...Object.values(n));
  return Object.keys(n).filter((l) => Math.abs(n[l] - i) < 1e-4);
}
function Bd(n) {
  return Object.fromEntries(Object.keys(n).map((i) => [i, 0]));
}
function Sg(n, i, l) {
  if (i.applyAs === 'multiplier') {
    if (i.appliesTo) {
      const a = n[i.appliesTo];
      if (!a) return 1;
      let c = 0;
      for (const [d, p] of Object.entries(l)) {
        const m = i.options[d],
          h = typeof m == 'object' ? (m[a] ?? 1) : (m ?? 1);
        c += (p / 100) * h;
      }
      return c;
    }
    if (!i.appliesWhen || !n[i.appliesWhen]) return 1;
    let s = 0;
    for (const [a, c] of Object.entries(l)) {
      const d = i.options[a] ?? 1;
      s += (c / 100) * d;
    }
    return s;
  }
  return 1;
}
function Eg(n, i) {
  const l = (i == null ? void 0 : i.causes) || ro,
    s = (i == null ? void 0 : i.dimensions) || io,
    a = Object.keys(l),
    c = {};
  for (const h of a) {
    const y = l[h];
    let v = y.points;
    for (const [k, w] of Object.entries(s)) {
      const L = n[k];
      L && (v *= Sg(y, w, L));
    }
    c[h] = v;
  }
  const d = a.map((h) => c[h]),
    p = Fd(d, 100, 1),
    m = { evs: c };
  return (
    a.forEach((h, y) => {
      m[h] = p[y];
    }),
    m
  );
}
function Cg(n, i) {
  const l = (i == null ? void 0 : i.causes) || ro,
    s = (i == null ? void 0 : i.dimensions) || io,
    a = Bd(l);
  for (const { options: d, probability: p } of zu(n)) {
    const m = Mu(d, l, s),
      h = xg(m),
      y = p / h.length;
    for (const v of h) a[v] += y;
  }
  const c = {};
  for (const d of Object.keys(l)) c[d] = a[d] * 100;
  return c;
}
function _g(n, i) {
  const l = (i == null ? void 0 : i.causes) || ro,
    s = (i == null ? void 0 : i.dimensions) || io,
    a = dg(i),
    c = Object.keys(l),
    d = Bd(l);
  for (const { options: p, probability: m } of zu(n)) {
    const h = Mu(p, l, s),
      y = m * 100,
      v = c.map((w) => h[w]),
      k = Fd(v, y, a);
    c.forEach((w, L) => {
      d[w] += k[L];
    });
  }
  return d;
}
function Ig(n, i) {
  const l = (i == null ? void 0 : i.causes) || ro,
    s = (i == null ? void 0 : i.dimensions) || io,
    a = Object.keys(l),
    c = Tg(a),
    d = [...zu(n, 500, 1e3)];
  let p = c[0],
    m = -1 / 0;
  for (const h of c) {
    let y = 1 / 0;
    for (const { options: v, probability: k } of d) {
      if (k < 1e-4) continue;
      const w = Mu(v, l, s);
      let L = 0;
      for (const P of a) L += w[P] * (h[P] / 100);
      y = Math.min(y, L);
    }
    y > m && ((m = y), (p = { ...h }));
  }
  return p;
}
function Tg(n) {
  const i = [],
    l = n.length,
    s = (m) => {
      const h = {};
      return (
        n.forEach((y, v) => {
          h[y] = m[v];
        }),
        h
      );
    };
  for (let m = 0; m < l; m++) {
    const h = new Array(l).fill(0);
    ((h[m] = 100), i.push(s(h)));
  }
  for (let m = 0; m < l; m++)
    for (let h = m + 1; h < l; h++) {
      const y = new Array(l).fill(0);
      ((y[m] = 50), (y[h] = 50), i.push(s(y)));
    }
  const a = Math.floor(100 / l),
    c = 100 - a * l,
    d = new Array(l).fill(a);
  ((d[0] += c), i.push(s(d)));
  const p = [
    [60, 20, 20],
    [70, 15, 15],
    [80, 10, 10],
  ];
  for (const m of p)
    if (m.length === l)
      for (let h = 0; h < l; h++) {
        const y = new Array(l).fill(0);
        y[h] = m[0];
        let v = 1;
        for (let k = 0; k < l; k++) k !== h && v < m.length && (y[k] = m[v++]);
        i.push(s(y));
      }
  return i;
}
function Ng(n, i, l, s = null, a = null) {
  const c = Array.isArray(a) ? a : a ? [a] : [],
    d = c.reduce((w, L) => w + (l[L] || 0), 0),
    p = 100 - d;
  i = Math.max(0, Math.min(p, i));
  const m = s || l,
    h = Object.keys(l).filter((w) => w !== n && !c.includes(w)),
    y = h.reduce((w, L) => w + m[L], 0),
    v = 100 - i - d,
    k = { [n]: i };
  for (const w of c) k[w] = l[w];
  if (y === 0) {
    const w = Math.floor(v / h.length);
    let L = v - w * h.length;
    h.forEach((P, R) => {
      k[P] = w + (R < L ? 1 : 0);
    });
  } else {
    let w = 0;
    h.forEach((L, P) => {
      if (P === h.length - 1) k[L] = Math.max(0, v - w);
      else {
        const R = m[L] / y,
          A = v * R;
        ((k[L] = Math.max(0, A)), (w += k[L]));
      }
    });
  }
  return k;
}
function Lg(n) {
  const i = Object.keys(n),
    l = {};
  let s = 0;
  return (
    i.slice(0, -1).forEach((a) => {
      ((l[a] = Math.round(n[a])), (s += l[a]));
    }),
    (l[i[i.length - 1]] = 100 - s),
    l
  );
}
const Og = eo.advanced === !0,
  Pg = Du,
  { questions: bg } = Pg,
  { causes: Rg, defaultCredences: Dg } = zi;
function Ag(n) {
  var i;
  return !((i = n.type) != null && i.startsWith('_'));
}
const Je = bg.filter(Ag);
function Sn(n) {
  return (n == null ? void 0 : n.type) === Kt.INTERMISSION;
}
function Zs(n, i) {
  let l = 0;
  for (let s = 0; s < i; s++) Sn(n[s]) || l++;
  return l;
}
function zg(n) {
  {
    const i = n.type || Kt.DEFAULT;
    return Xf[i] || Xf[Kt.DEFAULT];
  }
}
const Mg = Je.filter((n) => !Sn(n)),
  eu = Mg.length,
  Kf = Je.map((n) => {
    var l;
    if (Sn(n)) return { ...n, type: Kt.INTERMISSION };
    if (n.type === Kt.RATIO) return { ...n, type: Kt.RATIO };
    const i = zg(n);
    return {
      ...n,
      type: n.type || Kt.DEFAULT,
      options: (l = n.options) == null ? void 0 : l.map((s, a) => ({ ...s, color: i[a] || i[0] })),
    };
  });
function ju(n) {
  var a;
  if (n.type === Kt.RATIO)
    return { value: ((a = n.ratioConfig) == null ? void 0 : a.defaultValue) ?? 0.5 };
  if (n.defaultCredences) return { ...n.defaultCredences };
  if (!n.options) return {};
  const i = n.options.map((c) => c.key),
    l = Math.floor(100 / i.length),
    s = 100 - l * i.length;
  return Object.fromEntries(i.map((c, d) => [c, l + (d === 0 ? s : 0)]));
}
function Ud(n) {
  var i;
  return n.type === Kt.RATIO
    ? {
        credences: { value: ((i = n.ratioConfig) == null ? void 0 : i.defaultValue) ?? 0.5 },
        originalCredences: null,
        inputMode: mu.OPTIONS,
        lockedKeys: [],
        selectedPreset: null,
      }
    : {
        credences: ju(n),
        originalCredences: null,
        inputMode: mu.OPTIONS,
        lockedKeys: [],
        selectedPreset: null,
      };
}
function yu() {
  return Object.fromEntries(Je.filter((n) => !Sn(n)).map((n) => [n.id, Ud(n)]));
}
const Wd = 6,
  Vd = ['1', '2', '3'];
function vu() {
  return Object.fromEntries(Vd.map((n) => [n, { questions: yu(), completed: !1 }]));
}
function jg(n) {
  return n != null && n.questions
    ? Object.entries(n.questions).some(([i, l]) => {
        if (!l.credences) return !1;
        const s = Je.find((c) => c.id === i);
        if (!s) return !1;
        const a = ju(s);
        return Object.entries(l.credences).some(([c, d]) => d !== (a[c] ?? 0));
      })
    : !1;
}
function wu() {
  return Object.fromEntries(Vd.map((n) => [n, `Worldview ${n}`]));
}
const ku = 1e7,
  qd = () => 'welcome',
  Hd = {
    currentStep: qd(),
    worldviews: vu(),
    worldviewNames: wu(),
    activeWorldviewId: '1',
    expandedPanel: null,
    debugConfig: null,
    selectedCalculations: { left: null, right: null },
    marketplaceBudget: ku,
    justCompletedWorldview: null,
  },
  Ie = {
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
function xu(n) {
  return n.worldviews[n.activeWorldviewId].questions;
}
function Fg(n, i, l) {
  const s = xu(n),
    a = n.worldviews[n.activeWorldviewId];
  return {
    ...n,
    worldviews: {
      ...n.worldviews,
      [n.activeWorldviewId]: { ...a, questions: { ...s, [i]: { ...s[i], ...l } } },
    },
  };
}
function Bg(n, i) {
  switch (i.type) {
    case Ie.GO_TO_STEP:
      return { ...n, currentStep: i.payload };
    case Ie.UPDATE_QUESTION:
      return Fg(n, i.payload.questionId, i.payload.updates);
    case Ie.SET_EXPANDED_PANEL:
      return { ...n, expandedPanel: i.payload };
    case Ie.SAVE_ORIGINALS: {
      const l = xu(n),
        s = n.worldviews[n.activeWorldviewId];
      return {
        ...n,
        worldviews: {
          ...n.worldviews,
          [n.activeWorldviewId]: {
            ...s,
            questions: Object.fromEntries(
              Object.entries(l).map(([a, c]) => [
                a,
                { ...c, originalCredences: c.originalCredences || { ...c.credences } },
              ])
            ),
          },
        },
      };
    }
    case Ie.RESET_TO_ORIGINAL: {
      const l = xu(n),
        s = n.worldviews[n.activeWorldviewId];
      return {
        ...n,
        worldviews: {
          ...n.worldviews,
          [n.activeWorldviewId]: {
            ...s,
            questions: Object.fromEntries(
              Object.entries(l).map(([a, c]) => [
                a,
                { ...c, credences: c.originalCredences ? { ...c.originalCredences } : c.credences },
              ])
            ),
          },
        },
      };
    }
    case Ie.RESET_QUIZ:
      return { ...Hd, currentStep: qd(), worldviews: vu(), worldviewNames: wu() };
    case Ie.SWITCH_WORLDVIEW:
      return n.worldviews[i.payload] ? { ...n, activeWorldviewId: i.payload } : n;
    case Ie.SET_WORLDVIEW_NAME: {
      const { worldviewId: l, name: s } = i.payload;
      return n.worldviews[l] ? { ...n, worldviewNames: { ...n.worldviewNames, [l]: s } } : n;
    }
    case Ie.SET_MARKETPLACE_BUDGET:
      return { ...n, marketplaceBudget: i.payload };
    case Ie.MARK_WORLDVIEW_COMPLETED: {
      const l = i.payload;
      return n.worldviews[l]
        ? { ...n, worldviews: { ...n.worldviews, [l]: { ...n.worldviews[l], completed: !0 } } }
        : n;
    }
    case Ie.ADD_WORLDVIEW: {
      const l = Object.keys(n.worldviews);
      if (
        l.length >= Wd ||
        !l.every((d) => {
          var p;
          return (p = n.worldviews[d]) == null ? void 0 : p.completed;
        })
      )
        return n;
      const a = Math.max(...l.map((d) => parseInt(d, 10))),
        c = String(a + 1);
      return {
        ...n,
        worldviews: { ...n.worldviews, [c]: { questions: yu(), completed: !1 } },
        worldviewNames: { ...n.worldviewNames, [c]: `Worldview ${c}` },
        activeWorldviewId: c,
        currentStep: Je[0].id,
      };
    }
    case Ie.RESTORE_FROM_URL:
    case Ie.RESTORE_FROM_SESSION: {
      const l = i.type === Ie.RESTORE_FROM_URL,
        {
          worldviews: s,
          worldviewNames: a,
          activeWorldviewId: c,
          questions: d,
          credences: p,
          currentStep: m,
          selectedCalculations: h,
          marketplaceBudget: y,
        } = i.payload,
        v = (P, R) => ({
          credences: P.credences,
          originalCredences: P.originalCredences
            ? { ...P.originalCredences }
            : R
              ? { ...P.credences }
              : null,
          inputMode: P.inputMode || mu.OPTIONS,
          lockedKeys: P.lockedKeys || (P.lockedKey ? [P.lockedKey] : []),
          selectedPreset: P.selectedPreset || null,
        }),
        k = (P, R) => {
          const A = {};
          for (const [K, U] of Object.entries(P)) {
            const de = {};
            for (const [ye, z] of Object.entries(U.questions)) de[ye] = v(z, R);
            A[K] = { questions: de, completed: U.completed || !1 };
          }
          return (A[1] || (A[1] = { questions: yu(), completed: !1 }), A);
        },
        w = (P, R) => {
          const A = {},
            K = Object.keys(R || {});
          K.includes('1') || K.push('1');
          for (const U of K) A[U] = (P == null ? void 0 : P[U]) || `Worldview ${U}`;
          return A;
        };
      if (s && c)
        return {
          ...n,
          currentStep: l ? 'results' : m,
          worldviews: k(s, l),
          worldviewNames: w(a, s),
          activeWorldviewId: c,
          selectedCalculations: h || n.selectedCalculations,
          marketplaceBudget: y || ku,
        };
      const L = {};
      if (d) for (const [P, R] of Object.entries(d)) L[P] = v(R, l);
      else if (p)
        for (const [P, R] of Object.entries(p))
          L[P] = { ...Ud(), credences: R, originalCredences: l ? { ...R } : null };
      return {
        ...n,
        currentStep: l ? 'results' : m,
        worldviews: { ...vu(), 1: { questions: L, completed: !1 } },
        worldviewNames: wu(),
        activeWorldviewId: '1',
        marketplaceBudget: ku,
      };
    }
    case Ie.SET_DEBUG_CONFIG:
      return { ...n, debugConfig: i.payload };
    case Ie.SET_JUST_COMPLETED_WORLDVIEW:
      return { ...n, justCompletedWorldview: i.payload };
    case Ie.CLEAR_JUST_COMPLETED_WORLDVIEW:
      return { ...n, justCompletedWorldview: null };
    case Ie.SET_SELECTED_CALCULATIONS:
      return { ...n, selectedCalculations: { ...n.selectedCalculations, ...i.payload } };
    default:
      return n;
  }
}
const $d = Y.createContext(null);
function Ug({ children: n }) {
  const [i, l] = Y.useReducer(Bg, Hd),
    [s, a] = Y.useState(null),
    [c, d] = Y.useState(!0),
    [p, m] = Y.useState(null),
    [h] = Y.useState(() => Fm()),
    y = Y.useRef(null);
  (Y.useEffect(() => {
    (async () => {
      const ce = hu(),
        Ae = $f();
      if (!ce.hasShare) {
        if (Ae) {
          const b = fr();
          b && l({ type: Ie.RESTORE_FROM_SESSION, payload: b });
        }
        d(!1);
        return;
      }
      const We = await Yf();
      if (!We) {
        if ((Hn(), Ae)) {
          const b = fr();
          b && l({ type: Ie.RESTORE_FROM_SESSION, payload: b });
        }
        d(!1);
        return;
      }
      if (We.error) {
        if ((a(We.error), Hn(), window.setTimeout(() => a(null), 5e3), Ae)) {
          const b = fr();
          b && l({ type: Ie.RESTORE_FROM_SESSION, payload: b });
        }
        d(!1);
        return;
      }
      const Vt = Qf();
      if (Ae && !Vt) {
        const b = fr();
        if (b && b.currentStep !== 'welcome') {
          (m({ shareData: We, shareUrl: window.location.href }), d(!1));
          return;
        }
      }
      (l({ type: Ie.RESTORE_FROM_URL, payload: We }), Hn(), Ur(), d(!1));
    })();
  }, []),
    Y.useEffect(() => {
      const Q = async () => {
        if (!hu().hasShare) return;
        const Ae = await Yf();
        if (!Ae || Ae.error) {
          (Ae != null && Ae.error && (a(Ae.error), window.setTimeout(() => a(null), 5e3)), Hn());
          return;
        }
        const We = $f(),
          Vt = Qf();
        if (We && !Vt) {
          const b = fr();
          if (b && b.currentStep !== 'welcome') {
            m({ shareData: Ae, shareUrl: window.location.href });
            return;
          }
        }
        (l({ type: Ie.RESTORE_FROM_URL, payload: Ae }), Hn(), Ur());
      };
      return (
        window.addEventListener('hashchange', Q),
        () => window.removeEventListener('hashchange', Q)
      );
    }, []));
  const v = Y.useCallback(() => {
      const Q = fr();
      (Q && l({ type: Ie.RESTORE_FROM_SESSION, payload: Q }), Hn(), m(null));
    }, []),
    k = Y.useCallback(() => {
      (p != null && p.shareData && (l({ type: Ie.RESTORE_FROM_URL, payload: p.shareData }), Ur()),
        Hn(),
        m(null));
    }, [p]),
    w = Y.useCallback(() => {
      (Um(), p != null && p.shareUrl && window.open(p.shareUrl, '_blank'));
      const Q = fr();
      (Q && l({ type: Ie.RESTORE_FROM_SESSION, payload: Q }), Hn(), m(null));
    }, [p]);
  Y.useEffect(() => {
    if (!c)
      return (
        y.current && clearTimeout(y.current),
        (y.current = setTimeout(() => {
          Bm({
            currentStep: i.currentStep,
            worldviews: i.worldviews,
            worldviewNames: i.worldviewNames,
            activeWorldviewId: i.activeWorldviewId,
            selectedCalculations: i.selectedCalculations,
            marketplaceBudget: i.marketplaceBudget,
          });
        }, 300)),
        () => {
          y.current && clearTimeout(y.current);
        }
      );
  }, [
    i.currentStep,
    i.worldviews,
    i.worldviewNames,
    i.activeWorldviewId,
    i.selectedCalculations,
    i.marketplaceBudget,
    c,
  ]);
  const L = Y.useCallback((Q) => {
      (l({ type: Ie.GO_TO_STEP, payload: Q }), window.scrollTo(0, 0));
    }, []),
    P = Y.useCallback((Q, ce) => {
      l({ type: Ie.UPDATE_QUESTION, payload: { questionId: Q, updates: ce } });
    }, []),
    R = Y.useCallback((Q, ce) => P(Q, { credences: ce }), [P]),
    A = Y.useCallback((Q, ce) => P(Q, { inputMode: ce }), [P]),
    K = Y.useCallback((Q, ce) => P(Q, { lockedKeys: ce }), [P]),
    U = Y.useCallback((Q, ce) => P(Q, { selectedPreset: ce }), [P]),
    de = Y.useCallback((Q) => {
      l({ type: Ie.SET_EXPANDED_PANEL, payload: Q });
    }, []),
    ye = Y.useCallback(() => {
      l({ type: Ie.SAVE_ORIGINALS });
    }, []),
    z = Y.useCallback(() => {
      l({ type: Ie.RESET_TO_ORIGINAL });
    }, []),
    me = Y.useCallback(() => {
      (l({ type: Ie.RESET_QUIZ }), Ur());
    }, []),
    xe = Y.useCallback((Q) => {
      l({ type: Ie.SET_DEBUG_CONFIG, payload: Q });
    }, []),
    Se = Y.useCallback((Q) => {
      l({ type: Ie.SWITCH_WORLDVIEW, payload: Q });
    }, []),
    Ee = Y.useCallback((Q) => {
      l({ type: Ie.SET_SELECTED_CALCULATIONS, payload: Q });
    }, []),
    ne = Y.useCallback((Q, ce) => {
      l({ type: Ie.SET_WORLDVIEW_NAME, payload: { worldviewId: Q, name: ce } });
    }, []),
    D = Y.useCallback((Q) => {
      l({ type: Ie.SET_MARKETPLACE_BUDGET, payload: Q });
    }, []),
    J = Y.useCallback((Q) => {
      l({ type: Ie.SET_JUST_COMPLETED_WORLDVIEW, payload: Q });
    }, []),
    X = Y.useCallback(() => {
      l({ type: Ie.CLEAR_JUST_COMPLETED_WORLDVIEW });
    }, []),
    V = Y.useCallback((Q) => {
      l({ type: Ie.MARK_WORLDVIEW_COMPLETED, payload: Q });
    }, []),
    ue = Y.useCallback(() => {
      l({ type: Ie.ADD_WORLDVIEW });
    }, []),
    se = Y.useCallback((Q) => Je.findIndex((ce) => ce.id === Q), []),
    q = Y.useCallback(
      (Q) => {
        const ce = se(Q);
        return ce === 0 ? 'welcome' : Je[ce - 1].id;
      },
      [se]
    ),
    ee = Y.useCallback(
      (Q) => {
        const ce = se(Q);
        return ce === Je.length - 1 ? 'results' : Je[ce + 1].id;
      },
      [se]
    ),
    x = Y.useCallback(() => {
      L(Je[0].id);
    }, [L]),
    I = Y.useCallback(() => {
      i.currentStep === 'results' ? L(Je[Je.length - 1].id) : L(q(i.currentStep));
    }, [i.currentStep, L, q]),
    M = Y.useCallback(() => {
      const Q = ee(i.currentStep);
      (Q === 'results' && ye(), L(Q));
    }, [i.currentStep, i.activeWorldviewId, L, ee, ye, V, J]),
    S = Y.useMemo(
      () => i.worldviews[i.activeWorldviewId].questions,
      [i.worldviews, i.activeWorldviewId]
    ),
    ae = Y.useCallback(
      (Q) => {
        var Vt;
        const ce = Q === 'original' ? 'originalCredences' : 'credences',
          Ae = Je.filter((b) => !Sn(b)),
          We = S[(Vt = Ae[0]) == null ? void 0 : Vt.id];
        return Q === 'original' && !(We != null && We.originalCredences)
          ? null
          : Object.fromEntries(
              Ae.map((b) => {
                var G;
                return [b.id, ((G = S[b.id]) == null ? void 0 : G[ce]) || ju(b)];
              })
            );
      },
      [S]
    ),
    ke = Y.useCallback(
      (Q, ce) =>
        Q
          ? {
              maxEV: Eg(Q, ce),
              parliament: Cg(Q, ce),
              mergedFavorites: _g(Q, ce),
              maximin: Ig(Q, ce),
            }
          : null,
      []
    ),
    fe = Y.useMemo(() => ke(ae('current'), i.debugConfig), [ae, ke, i.debugConfig]),
    Oe = Y.useMemo(() => ke(ae('original'), i.debugConfig), [ae, ke, i.debugConfig]),
    Ce = Y.useMemo(
      () =>
        Object.values(S).some(
          (Q) =>
            Q.originalCredences &&
            JSON.stringify(Q.credences) !== JSON.stringify(Q.originalCredences)
        ),
      [S]
    ),
    Te = Y.useMemo(
      () => Object.keys(i.worldviews).sort((Q, ce) => parseInt(Q, 10) - parseInt(ce, 10)),
      [i.worldviews]
    ),
    qe = Y.useMemo(
      () => Object.fromEntries(Te.map((Q) => [Q, jg(i.worldviews[Q])])),
      [i.worldviews, Te]
    ),
    It = Y.useMemo(
      () =>
        Object.fromEntries(
          Te.map((Q) => {
            var ce;
            return [Q, ((ce = i.worldviews[Q]) == null ? void 0 : ce.completed) === !0];
          })
        ),
      [i.worldviews, Te]
    ),
    hr = Te.every((Q) => It[Q]),
    cn = Te.length < Wd && hr,
    He = Y.useMemo(() => se(i.currentStep), [i.currentStep, se]),
    Cn = Y.useMemo(() => (He === -1 ? null : Kf[He]), [He]),
    Jt = Y.useMemo(() => {
      if (He === -1) return -1;
      const Q = Je[He],
        ce = Zs(Je, He);
      return Sn(Q) ? ce : ce + 1;
    }, [He]),
    fn = Y.useMemo(() => {
      if (He === -1) return 0;
      const Q = Je[He];
      return ((Sn(Q) ? Zs(Je, He) : Jt) / eu) * 100;
    }, [He, Jt]),
    Xn = Y.useMemo(() => {
      if (He === -1) return '';
      const Q = Je[He];
      return `Question ${Sn(Q) ? Zs(Je, He) : Jt} of ${eu}`;
    }, [He, Jt]),
    dn = Y.useMemo(() => {
      const Q = {};
      return (
        Je.filter((ce) => !Sn(ce)).forEach((ce) => {
          const Ae = S[ce.id];
          Ae &&
            (Q[ce.id] = {
              credences: Ae.credences,
              setCredences: (We) => R(ce.id, We),
              originalCredences: Ae.originalCredences,
              inputMode: Ae.inputMode,
              setInputMode: (We) => A(ce.id, We),
              lockedKeys: Ae.lockedKeys,
              setLockedKeys: (We) => K(ce.id, We),
              selectedPreset: Ae.selectedPreset,
              setSelectedPreset: (We) => U(ce.id, We),
            });
        }),
        Q
      );
    }, [S, R, A, K, U]),
    Zt = Y.useMemo(
      () => ({
        currentStep: i.currentStep,
        questions: S,
        worldviews: i.worldviews,
        worldviewNames: i.worldviewNames,
        activeWorldviewId: i.activeWorldviewId,
        expandedPanel: i.expandedPanel,
        debugConfig: i.debugConfig,
        selectedCalculations: i.selectedCalculations,
        marketplaceBudget: i.marketplaceBudget,
        justCompletedWorldview: i.justCompletedWorldview,
        shareUrlError: s,
        isHydrating: c,
        sessionId: h,
        isAdvancedMode: Og,
        questionsConfig: Kf,
        causesConfig: Rg,
        defaultCredences: Dg,
        worldviewIds: Te,
        canAddWorldview: cn,
        addWorldview: ue,
        goToStep: L,
        setCredences: R,
        setInputMode: A,
        setLockedKeys: K,
        setSelectedPreset: U,
        setExpandedPanel: de,
        saveOriginals: ye,
        resetToOriginal: z,
        resetQuiz: me,
        setDebugConfig: xe,
        switchWorldview: Se,
        setSelectedCalculations: Ee,
        setWorldviewName: ne,
        setMarketplaceBudget: D,
        clearJustCompletedWorldview: X,
        getQuestionIndex: se,
        getPrevStep: q,
        getNextStep: ee,
        startQuiz: x,
        goBack: I,
        goForward: M,
        currentQuestion: Cn,
        currentQuestionIndex: He,
        totalQuestions: eu,
        progressPercentage: fn,
        questionNumber: Xn,
        hasChanged: Ce,
        hasProgressMap: qe,
        completedMap: It,
        calculationResults: fe,
        originalCalculationResults: Oe,
        stateMap: dn,
      }),
      [
        i.currentStep,
        S,
        i.worldviews,
        i.worldviewNames,
        i.activeWorldviewId,
        i.expandedPanel,
        i.debugConfig,
        i.selectedCalculations,
        i.marketplaceBudget,
        i.justCompletedWorldview,
        s,
        c,
        h,
        L,
        R,
        A,
        K,
        U,
        de,
        ye,
        z,
        me,
        xe,
        Se,
        Ee,
        ne,
        D,
        X,
        se,
        q,
        ee,
        x,
        I,
        M,
        Cn,
        He,
        fn,
        Xn,
        Ce,
        qe,
        It,
        fe,
        Oe,
        dn,
        Te,
        cn,
        ue,
      ]
    );
  return j.jsxs($d.Provider, {
    value: Zt,
    children: [n, p && j.jsx(fg, { onKeepMine: v, onLoadShared: k, onOpenNewTab: w })],
  });
}
function Wg(n, i) {
  const l = {};
  return (n[n.length - 1] === '' ? [...n, ''] : n)
    .join((l.padRight ? ' ' : '') + ',' + (l.padLeft === !1 ? '' : ' '))
    .trim();
}
const Vg = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  qg = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Hg = {};
function Jf(n, i) {
  return (Hg.jsx ? qg : Vg).test(n);
}
const $g = /[ \t\n\f\r]/g;
function Qg(n) {
  return typeof n == 'object' ? (n.type === 'text' ? Zf(n.value) : !1) : Zf(n);
}
function Zf(n) {
  return n.replace($g, '') === '';
}
class ji {
  constructor(i, l, s) {
    ((this.normal = l), (this.property = i), s && (this.space = s));
  }
}
ji.prototype.normal = {};
ji.prototype.property = {};
ji.prototype.space = void 0;
function Qd(n, i) {
  const l = {},
    s = {};
  for (const a of n) (Object.assign(l, a.property), Object.assign(s, a.normal));
  return new ji(l, s, i);
}
function Su(n) {
  return n.toLowerCase();
}
class _t {
  constructor(i, l) {
    ((this.attribute = l), (this.property = i));
  }
}
_t.prototype.attribute = '';
_t.prototype.booleanish = !1;
_t.prototype.boolean = !1;
_t.prototype.commaOrSpaceSeparated = !1;
_t.prototype.commaSeparated = !1;
_t.prototype.defined = !1;
_t.prototype.mustUseProperty = !1;
_t.prototype.number = !1;
_t.prototype.overloadedBoolean = !1;
_t.prototype.property = '';
_t.prototype.spaceSeparated = !1;
_t.prototype.space = void 0;
let Gg = 0;
const _e = pr(),
  Ze = pr(),
  Eu = pr(),
  H = pr(),
  je = pr(),
  Wr = pr(),
  Rt = pr();
function pr() {
  return 2 ** ++Gg;
}
const Cu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: _e,
        booleanish: Ze,
        commaOrSpaceSeparated: Rt,
        commaSeparated: Wr,
        number: H,
        overloadedBoolean: Eu,
        spaceSeparated: je,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  tu = Object.keys(Cu);
class Fu extends _t {
  constructor(i, l, s, a) {
    let c = -1;
    if ((super(i, l), ed(this, 'space', a), typeof s == 'number'))
      for (; ++c < tu.length; ) {
        const d = tu[c];
        ed(this, tu[c], (s & Cu[d]) === Cu[d]);
      }
  }
}
Fu.prototype.defined = !0;
function ed(n, i, l) {
  l && (n[i] = l);
}
function qr(n) {
  const i = {},
    l = {};
  for (const [s, a] of Object.entries(n.properties)) {
    const c = new Fu(s, n.transform(n.attributes || {}, s), a, n.space);
    (n.mustUseProperty && n.mustUseProperty.includes(s) && (c.mustUseProperty = !0),
      (i[s] = c),
      (l[Su(s)] = s),
      (l[Su(c.attribute)] = s));
  }
  return new ji(i, l, n.space);
}
const Gd = qr({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Ze,
    ariaAutoComplete: null,
    ariaBusy: Ze,
    ariaChecked: Ze,
    ariaColCount: H,
    ariaColIndex: H,
    ariaColSpan: H,
    ariaControls: je,
    ariaCurrent: null,
    ariaDescribedBy: je,
    ariaDetails: null,
    ariaDisabled: Ze,
    ariaDropEffect: je,
    ariaErrorMessage: null,
    ariaExpanded: Ze,
    ariaFlowTo: je,
    ariaGrabbed: Ze,
    ariaHasPopup: null,
    ariaHidden: Ze,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: je,
    ariaLevel: H,
    ariaLive: null,
    ariaModal: Ze,
    ariaMultiLine: Ze,
    ariaMultiSelectable: Ze,
    ariaOrientation: null,
    ariaOwns: je,
    ariaPlaceholder: null,
    ariaPosInSet: H,
    ariaPressed: Ze,
    ariaReadOnly: Ze,
    ariaRelevant: null,
    ariaRequired: Ze,
    ariaRoleDescription: je,
    ariaRowCount: H,
    ariaRowIndex: H,
    ariaRowSpan: H,
    ariaSelected: Ze,
    ariaSetSize: H,
    ariaSort: null,
    ariaValueMax: H,
    ariaValueMin: H,
    ariaValueNow: H,
    ariaValueText: null,
    role: null,
  },
  transform(n, i) {
    return i === 'role' ? i : 'aria-' + i.slice(4).toLowerCase();
  },
});
function Yd(n, i) {
  return i in n ? n[i] : i;
}
function Xd(n, i) {
  return Yd(n, i.toLowerCase());
}
const Yg = qr({
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv',
    },
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: Wr,
      acceptCharset: je,
      accessKey: je,
      action: null,
      allow: null,
      allowFullScreen: _e,
      allowPaymentRequest: _e,
      allowUserMedia: _e,
      alt: null,
      as: null,
      async: _e,
      autoCapitalize: null,
      autoComplete: je,
      autoFocus: _e,
      autoPlay: _e,
      blocking: je,
      capture: null,
      charSet: null,
      checked: _e,
      cite: null,
      className: je,
      cols: H,
      colSpan: null,
      content: null,
      contentEditable: Ze,
      controls: _e,
      controlsList: je,
      coords: H | Wr,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: _e,
      defer: _e,
      dir: null,
      dirName: null,
      disabled: _e,
      download: Eu,
      draggable: Ze,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: _e,
      formTarget: null,
      headers: je,
      height: H,
      hidden: Eu,
      high: H,
      href: null,
      hrefLang: null,
      htmlFor: je,
      httpEquiv: je,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: _e,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: _e,
      itemId: null,
      itemProp: je,
      itemRef: je,
      itemScope: _e,
      itemType: je,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: _e,
      low: H,
      manifest: null,
      max: null,
      maxLength: H,
      media: null,
      method: null,
      min: null,
      minLength: H,
      multiple: _e,
      muted: _e,
      name: null,
      nonce: null,
      noModule: _e,
      noValidate: _e,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: _e,
      optimum: H,
      pattern: null,
      ping: je,
      placeholder: null,
      playsInline: _e,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: _e,
      referrerPolicy: null,
      rel: je,
      required: _e,
      reversed: _e,
      rows: H,
      rowSpan: H,
      sandbox: je,
      scope: null,
      scoped: _e,
      seamless: _e,
      selected: _e,
      shadowRootClonable: _e,
      shadowRootDelegatesFocus: _e,
      shadowRootMode: null,
      shape: null,
      size: H,
      sizes: null,
      slot: null,
      span: H,
      spellCheck: Ze,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: H,
      step: null,
      style: null,
      tabIndex: H,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: _e,
      useMap: null,
      value: Ze,
      width: H,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: je,
      axis: null,
      background: null,
      bgColor: null,
      border: H,
      borderColor: null,
      bottomMargin: H,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: _e,
      declare: _e,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: H,
      leftMargin: H,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: H,
      marginWidth: H,
      noResize: _e,
      noHref: _e,
      noShade: _e,
      noWrap: _e,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: H,
      rules: null,
      scheme: null,
      scrolling: Ze,
      standby: null,
      summary: null,
      text: null,
      topMargin: H,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: H,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: _e,
      disableRemotePlayback: _e,
      prefix: null,
      property: null,
      results: H,
      security: null,
      unselectable: null,
    },
    space: 'html',
    transform: Xd,
  }),
  Xg = qr({
    attributes: {
      accentHeight: 'accent-height',
      alignmentBaseline: 'alignment-baseline',
      arabicForm: 'arabic-form',
      baselineShift: 'baseline-shift',
      capHeight: 'cap-height',
      className: 'class',
      clipPath: 'clip-path',
      clipRule: 'clip-rule',
      colorInterpolation: 'color-interpolation',
      colorInterpolationFilters: 'color-interpolation-filters',
      colorProfile: 'color-profile',
      colorRendering: 'color-rendering',
      crossOrigin: 'crossorigin',
      dataType: 'datatype',
      dominantBaseline: 'dominant-baseline',
      enableBackground: 'enable-background',
      fillOpacity: 'fill-opacity',
      fillRule: 'fill-rule',
      floodColor: 'flood-color',
      floodOpacity: 'flood-opacity',
      fontFamily: 'font-family',
      fontSize: 'font-size',
      fontSizeAdjust: 'font-size-adjust',
      fontStretch: 'font-stretch',
      fontStyle: 'font-style',
      fontVariant: 'font-variant',
      fontWeight: 'font-weight',
      glyphName: 'glyph-name',
      glyphOrientationHorizontal: 'glyph-orientation-horizontal',
      glyphOrientationVertical: 'glyph-orientation-vertical',
      hrefLang: 'hreflang',
      horizAdvX: 'horiz-adv-x',
      horizOriginX: 'horiz-origin-x',
      horizOriginY: 'horiz-origin-y',
      imageRendering: 'image-rendering',
      letterSpacing: 'letter-spacing',
      lightingColor: 'lighting-color',
      markerEnd: 'marker-end',
      markerMid: 'marker-mid',
      markerStart: 'marker-start',
      navDown: 'nav-down',
      navDownLeft: 'nav-down-left',
      navDownRight: 'nav-down-right',
      navLeft: 'nav-left',
      navNext: 'nav-next',
      navPrev: 'nav-prev',
      navRight: 'nav-right',
      navUp: 'nav-up',
      navUpLeft: 'nav-up-left',
      navUpRight: 'nav-up-right',
      onAbort: 'onabort',
      onActivate: 'onactivate',
      onAfterPrint: 'onafterprint',
      onBeforePrint: 'onbeforeprint',
      onBegin: 'onbegin',
      onCancel: 'oncancel',
      onCanPlay: 'oncanplay',
      onCanPlayThrough: 'oncanplaythrough',
      onChange: 'onchange',
      onClick: 'onclick',
      onClose: 'onclose',
      onCopy: 'oncopy',
      onCueChange: 'oncuechange',
      onCut: 'oncut',
      onDblClick: 'ondblclick',
      onDrag: 'ondrag',
      onDragEnd: 'ondragend',
      onDragEnter: 'ondragenter',
      onDragExit: 'ondragexit',
      onDragLeave: 'ondragleave',
      onDragOver: 'ondragover',
      onDragStart: 'ondragstart',
      onDrop: 'ondrop',
      onDurationChange: 'ondurationchange',
      onEmptied: 'onemptied',
      onEnd: 'onend',
      onEnded: 'onended',
      onError: 'onerror',
      onFocus: 'onfocus',
      onFocusIn: 'onfocusin',
      onFocusOut: 'onfocusout',
      onHashChange: 'onhashchange',
      onInput: 'oninput',
      onInvalid: 'oninvalid',
      onKeyDown: 'onkeydown',
      onKeyPress: 'onkeypress',
      onKeyUp: 'onkeyup',
      onLoad: 'onload',
      onLoadedData: 'onloadeddata',
      onLoadedMetadata: 'onloadedmetadata',
      onLoadStart: 'onloadstart',
      onMessage: 'onmessage',
      onMouseDown: 'onmousedown',
      onMouseEnter: 'onmouseenter',
      onMouseLeave: 'onmouseleave',
      onMouseMove: 'onmousemove',
      onMouseOut: 'onmouseout',
      onMouseOver: 'onmouseover',
      onMouseUp: 'onmouseup',
      onMouseWheel: 'onmousewheel',
      onOffline: 'onoffline',
      onOnline: 'ononline',
      onPageHide: 'onpagehide',
      onPageShow: 'onpageshow',
      onPaste: 'onpaste',
      onPause: 'onpause',
      onPlay: 'onplay',
      onPlaying: 'onplaying',
      onPopState: 'onpopstate',
      onProgress: 'onprogress',
      onRateChange: 'onratechange',
      onRepeat: 'onrepeat',
      onReset: 'onreset',
      onResize: 'onresize',
      onScroll: 'onscroll',
      onSeeked: 'onseeked',
      onSeeking: 'onseeking',
      onSelect: 'onselect',
      onShow: 'onshow',
      onStalled: 'onstalled',
      onStorage: 'onstorage',
      onSubmit: 'onsubmit',
      onSuspend: 'onsuspend',
      onTimeUpdate: 'ontimeupdate',
      onToggle: 'ontoggle',
      onUnload: 'onunload',
      onVolumeChange: 'onvolumechange',
      onWaiting: 'onwaiting',
      onZoom: 'onzoom',
      overlinePosition: 'overline-position',
      overlineThickness: 'overline-thickness',
      paintOrder: 'paint-order',
      panose1: 'panose-1',
      pointerEvents: 'pointer-events',
      referrerPolicy: 'referrerpolicy',
      renderingIntent: 'rendering-intent',
      shapeRendering: 'shape-rendering',
      stopColor: 'stop-color',
      stopOpacity: 'stop-opacity',
      strikethroughPosition: 'strikethrough-position',
      strikethroughThickness: 'strikethrough-thickness',
      strokeDashArray: 'stroke-dasharray',
      strokeDashOffset: 'stroke-dashoffset',
      strokeLineCap: 'stroke-linecap',
      strokeLineJoin: 'stroke-linejoin',
      strokeMiterLimit: 'stroke-miterlimit',
      strokeOpacity: 'stroke-opacity',
      strokeWidth: 'stroke-width',
      tabIndex: 'tabindex',
      textAnchor: 'text-anchor',
      textDecoration: 'text-decoration',
      textRendering: 'text-rendering',
      transformOrigin: 'transform-origin',
      typeOf: 'typeof',
      underlinePosition: 'underline-position',
      underlineThickness: 'underline-thickness',
      unicodeBidi: 'unicode-bidi',
      unicodeRange: 'unicode-range',
      unitsPerEm: 'units-per-em',
      vAlphabetic: 'v-alphabetic',
      vHanging: 'v-hanging',
      vIdeographic: 'v-ideographic',
      vMathematical: 'v-mathematical',
      vectorEffect: 'vector-effect',
      vertAdvY: 'vert-adv-y',
      vertOriginX: 'vert-origin-x',
      vertOriginY: 'vert-origin-y',
      wordSpacing: 'word-spacing',
      writingMode: 'writing-mode',
      xHeight: 'x-height',
      playbackOrder: 'playbackorder',
      timelineBegin: 'timelinebegin',
    },
    properties: {
      about: Rt,
      accentHeight: H,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: H,
      amplitude: H,
      arabicForm: null,
      ascent: H,
      attributeName: null,
      attributeType: null,
      azimuth: H,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: H,
      by: null,
      calcMode: null,
      capHeight: H,
      className: je,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: H,
      diffuseConstant: H,
      direction: null,
      display: null,
      dur: null,
      divisor: H,
      dominantBaseline: null,
      download: _e,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: H,
      enableBackground: null,
      end: null,
      event: null,
      exponent: H,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: H,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: Wr,
      g2: Wr,
      glyphName: Wr,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: H,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: H,
      horizOriginX: H,
      horizOriginY: H,
      id: null,
      ideographic: H,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: H,
      k: H,
      k1: H,
      k2: H,
      k3: H,
      k4: H,
      kernelMatrix: Rt,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: H,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: H,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: H,
      overlineThickness: H,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: H,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: je,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: H,
      pointsAtY: H,
      pointsAtZ: H,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: Rt,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: Rt,
      rev: Rt,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: Rt,
      requiredFeatures: Rt,
      requiredFonts: Rt,
      requiredFormats: Rt,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: H,
      specularExponent: H,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: H,
      strikethroughThickness: H,
      string: null,
      stroke: null,
      strokeDashArray: Rt,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: H,
      strokeOpacity: H,
      strokeWidth: null,
      style: null,
      surfaceScale: H,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: Rt,
      tabIndex: H,
      tableValues: null,
      target: null,
      targetX: H,
      targetY: H,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: Rt,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: H,
      underlineThickness: H,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: H,
      values: null,
      vAlphabetic: H,
      vMathematical: H,
      vectorEffect: null,
      vHanging: H,
      vIdeographic: H,
      version: null,
      vertAdvY: H,
      vertOriginX: H,
      vertOriginY: H,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: H,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: 'svg',
    transform: Yd,
  }),
  Kd = qr({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
    space: 'xlink',
    transform(n, i) {
      return 'xlink:' + i.slice(5).toLowerCase();
    },
  }),
  Jd = qr({
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    properties: { xmlnsXLink: null, xmlns: null },
    space: 'xmlns',
    transform: Xd,
  }),
  Zd = qr({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: 'xml',
    transform(n, i) {
      return 'xml:' + i.slice(3).toLowerCase();
    },
  }),
  Kg = {
    classId: 'classID',
    dataType: 'datatype',
    itemId: 'itemID',
    strokeDashArray: 'strokeDasharray',
    strokeDashOffset: 'strokeDashoffset',
    strokeLineCap: 'strokeLinecap',
    strokeLineJoin: 'strokeLinejoin',
    strokeMiterLimit: 'strokeMiterlimit',
    typeOf: 'typeof',
    xLinkActuate: 'xlinkActuate',
    xLinkArcRole: 'xlinkArcrole',
    xLinkHref: 'xlinkHref',
    xLinkRole: 'xlinkRole',
    xLinkShow: 'xlinkShow',
    xLinkTitle: 'xlinkTitle',
    xLinkType: 'xlinkType',
    xmlnsXLink: 'xmlnsXlink',
  },
  Jg = /[A-Z]/g,
  td = /-[a-z]/g,
  Zg = /^data[-\w.:]+$/i;
function ey(n, i) {
  const l = Su(i);
  let s = i,
    a = _t;
  if (l in n.normal) return n.property[n.normal[l]];
  if (l.length > 4 && l.slice(0, 4) === 'data' && Zg.test(i)) {
    if (i.charAt(4) === '-') {
      const c = i.slice(5).replace(td, ny);
      s = 'data' + c.charAt(0).toUpperCase() + c.slice(1);
    } else {
      const c = i.slice(4);
      if (!td.test(c)) {
        let d = c.replace(Jg, ty);
        (d.charAt(0) !== '-' && (d = '-' + d), (i = 'data' + d));
      }
    }
    a = Fu;
  }
  return new a(s, i);
}
function ty(n) {
  return '-' + n.toLowerCase();
}
function ny(n) {
  return n.charAt(1).toUpperCase();
}
const ry = Qd([Gd, Yg, Kd, Jd, Zd], 'html'),
  Bu = Qd([Gd, Xg, Kd, Jd, Zd], 'svg');
function iy(n) {
  return n.join(' ').trim();
}
var Fr = {},
  nu,
  nd;
function ly() {
  if (nd) return nu;
  nd = 1;
  var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    i = /\n/g,
    l = /^\s*/,
    s = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    a = /^:\s*/,
    c = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    d = /^[;\s]*/,
    p = /^\s+|\s+$/g,
    m = `
`,
    h = '/',
    y = '*',
    v = '',
    k = 'comment',
    w = 'declaration';
  function L(R, A) {
    if (typeof R != 'string') throw new TypeError('First argument must be a string');
    if (!R) return [];
    A = A || {};
    var K = 1,
      U = 1;
    function de(X) {
      var V = X.match(i);
      V && (K += V.length);
      var ue = X.lastIndexOf(m);
      U = ~ue ? X.length - ue : U + X.length;
    }
    function ye() {
      var X = { line: K, column: U };
      return function (V) {
        return ((V.position = new z(X)), Se(), V);
      };
    }
    function z(X) {
      ((this.start = X), (this.end = { line: K, column: U }), (this.source = A.source));
    }
    z.prototype.content = R;
    function me(X) {
      var V = new Error(A.source + ':' + K + ':' + U + ': ' + X);
      if (
        ((V.reason = X),
        (V.filename = A.source),
        (V.line = K),
        (V.column = U),
        (V.source = R),
        !A.silent)
      )
        throw V;
    }
    function xe(X) {
      var V = X.exec(R);
      if (V) {
        var ue = V[0];
        return (de(ue), (R = R.slice(ue.length)), V);
      }
    }
    function Se() {
      xe(l);
    }
    function Ee(X) {
      var V;
      for (X = X || []; (V = ne()); ) V !== !1 && X.push(V);
      return X;
    }
    function ne() {
      var X = ye();
      if (!(h != R.charAt(0) || y != R.charAt(1))) {
        for (var V = 2; v != R.charAt(V) && (y != R.charAt(V) || h != R.charAt(V + 1)); ) ++V;
        if (((V += 2), v === R.charAt(V - 1))) return me('End of comment missing');
        var ue = R.slice(2, V - 2);
        return ((U += 2), de(ue), (R = R.slice(V)), (U += 2), X({ type: k, comment: ue }));
      }
    }
    function D() {
      var X = ye(),
        V = xe(s);
      if (V) {
        if ((ne(), !xe(a))) return me("property missing ':'");
        var ue = xe(c),
          se = X({
            type: w,
            property: P(V[0].replace(n, v)),
            value: ue ? P(ue[0].replace(n, v)) : v,
          });
        return (xe(d), se);
      }
    }
    function J() {
      var X = [];
      Ee(X);
      for (var V; (V = D()); ) V !== !1 && (X.push(V), Ee(X));
      return X;
    }
    return (Se(), J());
  }
  function P(R) {
    return R ? R.replace(p, v) : v;
  }
  return ((nu = L), nu);
}
var rd;
function oy() {
  if (rd) return Fr;
  rd = 1;
  var n =
    (Fr && Fr.__importDefault) ||
    function (s) {
      return s && s.__esModule ? s : { default: s };
    };
  (Object.defineProperty(Fr, '__esModule', { value: !0 }), (Fr.default = l));
  const i = n(ly());
  function l(s, a) {
    let c = null;
    if (!s || typeof s != 'string') return c;
    const d = (0, i.default)(s),
      p = typeof a == 'function';
    return (
      d.forEach((m) => {
        if (m.type !== 'declaration') return;
        const { property: h, value: y } = m;
        p ? a(h, y, m) : y && ((c = c || {}), (c[h] = y));
      }),
      c
    );
  }
  return Fr;
}
var Li = {},
  id;
function sy() {
  if (id) return Li;
  ((id = 1), Object.defineProperty(Li, '__esModule', { value: !0 }), (Li.camelCase = void 0));
  var n = /^--[a-zA-Z0-9_-]+$/,
    i = /-([a-z])/g,
    l = /^[^-]+$/,
    s = /^-(webkit|moz|ms|o|khtml)-/,
    a = /^-(ms)-/,
    c = function (h) {
      return !h || l.test(h) || n.test(h);
    },
    d = function (h, y) {
      return y.toUpperCase();
    },
    p = function (h, y) {
      return ''.concat(y, '-');
    },
    m = function (h, y) {
      return (
        y === void 0 && (y = {}),
        c(h)
          ? h
          : ((h = h.toLowerCase()),
            y.reactCompat ? (h = h.replace(a, p)) : (h = h.replace(s, p)),
            h.replace(i, d))
      );
    };
  return ((Li.camelCase = m), Li);
}
var Oi, ld;
function uy() {
  if (ld) return Oi;
  ld = 1;
  var n =
      (Oi && Oi.__importDefault) ||
      function (a) {
        return a && a.__esModule ? a : { default: a };
      },
    i = n(oy()),
    l = sy();
  function s(a, c) {
    var d = {};
    return (
      !a ||
        typeof a != 'string' ||
        (0, i.default)(a, function (p, m) {
          p && m && (d[(0, l.camelCase)(p, c)] = m);
        }),
      d
    );
  }
  return ((s.default = s), (Oi = s), Oi);
}
var ay = uy();
const cy = zd(ay),
  ep = tp('end'),
  Uu = tp('start');
function tp(n) {
  return i;
  function i(l) {
    const s = (l && l.position && l.position[n]) || {};
    if (typeof s.line == 'number' && s.line > 0 && typeof s.column == 'number' && s.column > 0)
      return {
        line: s.line,
        column: s.column,
        offset: typeof s.offset == 'number' && s.offset > -1 ? s.offset : void 0,
      };
  }
}
function fy(n) {
  const i = Uu(n),
    l = ep(n);
  if (i && l) return { start: i, end: l };
}
function Ri(n) {
  return !n || typeof n != 'object'
    ? ''
    : 'position' in n || 'type' in n
      ? od(n.position)
      : 'start' in n || 'end' in n
        ? od(n)
        : 'line' in n || 'column' in n
          ? _u(n)
          : '';
}
function _u(n) {
  return sd(n && n.line) + ':' + sd(n && n.column);
}
function od(n) {
  return _u(n && n.start) + '-' + _u(n && n.end);
}
function sd(n) {
  return n && typeof n == 'number' ? n : 1;
}
class pt extends Error {
  constructor(i, l, s) {
    (super(), typeof l == 'string' && ((s = l), (l = void 0)));
    let a = '',
      c = {},
      d = !1;
    if (
      (l &&
        ('line' in l && 'column' in l
          ? (c = { place: l })
          : 'start' in l && 'end' in l
            ? (c = { place: l })
            : 'type' in l
              ? (c = { ancestors: [l], place: l.position })
              : (c = { ...l })),
      typeof i == 'string' ? (a = i) : !c.cause && i && ((d = !0), (a = i.message), (c.cause = i)),
      !c.ruleId && !c.source && typeof s == 'string')
    ) {
      const m = s.indexOf(':');
      m === -1 ? (c.ruleId = s) : ((c.source = s.slice(0, m)), (c.ruleId = s.slice(m + 1)));
    }
    if (!c.place && c.ancestors && c.ancestors) {
      const m = c.ancestors[c.ancestors.length - 1];
      m && (c.place = m.position);
    }
    const p = c.place && 'start' in c.place ? c.place.start : c.place;
    ((this.ancestors = c.ancestors || void 0),
      (this.cause = c.cause || void 0),
      (this.column = p ? p.column : void 0),
      (this.fatal = void 0),
      (this.file = ''),
      (this.message = a),
      (this.line = p ? p.line : void 0),
      (this.name = Ri(c.place) || '1:1'),
      (this.place = c.place || void 0),
      (this.reason = this.message),
      (this.ruleId = c.ruleId || void 0),
      (this.source = c.source || void 0),
      (this.stack = d && c.cause && typeof c.cause.stack == 'string' ? c.cause.stack : ''),
      (this.actual = void 0),
      (this.expected = void 0),
      (this.note = void 0),
      (this.url = void 0));
  }
}
pt.prototype.file = '';
pt.prototype.name = '';
pt.prototype.reason = '';
pt.prototype.message = '';
pt.prototype.stack = '';
pt.prototype.column = void 0;
pt.prototype.line = void 0;
pt.prototype.ancestors = void 0;
pt.prototype.cause = void 0;
pt.prototype.fatal = void 0;
pt.prototype.place = void 0;
pt.prototype.ruleId = void 0;
pt.prototype.source = void 0;
const Wu = {}.hasOwnProperty,
  dy = new Map(),
  py = /[A-Z]/g,
  hy = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr']),
  my = new Set(['td', 'th']),
  np = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';
function gy(n, i) {
  if (!i || i.Fragment === void 0) throw new TypeError('Expected `Fragment` in options');
  const l = i.filePath || void 0;
  let s;
  if (i.development) {
    if (typeof i.jsxDEV != 'function')
      throw new TypeError('Expected `jsxDEV` in options when `development: true`');
    s = Cy(l, i.jsxDEV);
  } else {
    if (typeof i.jsx != 'function') throw new TypeError('Expected `jsx` in production options');
    if (typeof i.jsxs != 'function') throw new TypeError('Expected `jsxs` in production options');
    s = Ey(l, i.jsx, i.jsxs);
  }
  const a = {
      Fragment: i.Fragment,
      ancestors: [],
      components: i.components || {},
      create: s,
      elementAttributeNameCase: i.elementAttributeNameCase || 'react',
      evaluater: i.createEvaluater ? i.createEvaluater() : void 0,
      filePath: l,
      ignoreInvalidStyle: i.ignoreInvalidStyle || !1,
      passKeys: i.passKeys !== !1,
      passNode: i.passNode || !1,
      schema: i.space === 'svg' ? Bu : ry,
      stylePropertyNameCase: i.stylePropertyNameCase || 'dom',
      tableCellAlignToStyle: i.tableCellAlignToStyle !== !1,
    },
    c = rp(a, n, void 0);
  return c && typeof c != 'string' ? c : a.create(n, a.Fragment, { children: c || void 0 }, void 0);
}
function rp(n, i, l) {
  if (i.type === 'element') return yy(n, i, l);
  if (i.type === 'mdxFlowExpression' || i.type === 'mdxTextExpression') return vy(n, i);
  if (i.type === 'mdxJsxFlowElement' || i.type === 'mdxJsxTextElement') return ky(n, i, l);
  if (i.type === 'mdxjsEsm') return wy(n, i);
  if (i.type === 'root') return xy(n, i, l);
  if (i.type === 'text') return Sy(n, i);
}
function yy(n, i, l) {
  const s = n.schema;
  let a = s;
  (i.tagName.toLowerCase() === 'svg' && s.space === 'html' && ((a = Bu), (n.schema = a)),
    n.ancestors.push(i));
  const c = lp(n, i.tagName, !1),
    d = _y(n, i);
  let p = qu(n, i);
  return (
    hy.has(i.tagName) &&
      (p = p.filter(function (m) {
        return typeof m == 'string' ? !Qg(m) : !0;
      })),
    ip(n, d, c, i),
    Vu(d, p),
    n.ancestors.pop(),
    (n.schema = s),
    n.create(i, c, d, l)
  );
}
function vy(n, i) {
  if (i.data && i.data.estree && n.evaluater) {
    const s = i.data.estree.body[0];
    return (s.type, n.evaluater.evaluateExpression(s.expression));
  }
  Mi(n, i.position);
}
function wy(n, i) {
  if (i.data && i.data.estree && n.evaluater) return n.evaluater.evaluateProgram(i.data.estree);
  Mi(n, i.position);
}
function ky(n, i, l) {
  const s = n.schema;
  let a = s;
  (i.name === 'svg' && s.space === 'html' && ((a = Bu), (n.schema = a)), n.ancestors.push(i));
  const c = i.name === null ? n.Fragment : lp(n, i.name, !0),
    d = Iy(n, i),
    p = qu(n, i);
  return (ip(n, d, c, i), Vu(d, p), n.ancestors.pop(), (n.schema = s), n.create(i, c, d, l));
}
function xy(n, i, l) {
  const s = {};
  return (Vu(s, qu(n, i)), n.create(i, n.Fragment, s, l));
}
function Sy(n, i) {
  return i.value;
}
function ip(n, i, l, s) {
  typeof l != 'string' && l !== n.Fragment && n.passNode && (i.node = s);
}
function Vu(n, i) {
  if (i.length > 0) {
    const l = i.length > 1 ? i : i[0];
    l && (n.children = l);
  }
}
function Ey(n, i, l) {
  return s;
  function s(a, c, d, p) {
    const h = Array.isArray(d.children) ? l : i;
    return p ? h(c, d, p) : h(c, d);
  }
}
function Cy(n, i) {
  return l;
  function l(s, a, c, d) {
    const p = Array.isArray(c.children),
      m = Uu(s);
    return i(
      a,
      c,
      d,
      p,
      { columnNumber: m ? m.column - 1 : void 0, fileName: n, lineNumber: m ? m.line : void 0 },
      void 0
    );
  }
}
function _y(n, i) {
  const l = {};
  let s, a;
  for (a in i.properties)
    if (a !== 'children' && Wu.call(i.properties, a)) {
      const c = Ty(n, a, i.properties[a]);
      if (c) {
        const [d, p] = c;
        n.tableCellAlignToStyle && d === 'align' && typeof p == 'string' && my.has(i.tagName)
          ? (s = p)
          : (l[d] = p);
      }
    }
  if (s) {
    const c = l.style || (l.style = {});
    c[n.stylePropertyNameCase === 'css' ? 'text-align' : 'textAlign'] = s;
  }
  return l;
}
function Iy(n, i) {
  const l = {};
  for (const s of i.attributes)
    if (s.type === 'mdxJsxExpressionAttribute')
      if (s.data && s.data.estree && n.evaluater) {
        const c = s.data.estree.body[0];
        c.type;
        const d = c.expression;
        d.type;
        const p = d.properties[0];
        (p.type, Object.assign(l, n.evaluater.evaluateExpression(p.argument)));
      } else Mi(n, i.position);
    else {
      const a = s.name;
      let c;
      if (s.value && typeof s.value == 'object')
        if (s.value.data && s.value.data.estree && n.evaluater) {
          const p = s.value.data.estree.body[0];
          (p.type, (c = n.evaluater.evaluateExpression(p.expression)));
        } else Mi(n, i.position);
      else c = s.value === null ? !0 : s.value;
      l[a] = c;
    }
  return l;
}
function qu(n, i) {
  const l = [];
  let s = -1;
  const a = n.passKeys ? new Map() : dy;
  for (; ++s < i.children.length; ) {
    const c = i.children[s];
    let d;
    if (n.passKeys) {
      const m =
        c.type === 'element'
          ? c.tagName
          : c.type === 'mdxJsxFlowElement' || c.type === 'mdxJsxTextElement'
            ? c.name
            : void 0;
      if (m) {
        const h = a.get(m) || 0;
        ((d = m + '-' + h), a.set(m, h + 1));
      }
    }
    const p = rp(n, c, d);
    p !== void 0 && l.push(p);
  }
  return l;
}
function Ty(n, i, l) {
  const s = ey(n.schema, i);
  if (!(l == null || (typeof l == 'number' && Number.isNaN(l)))) {
    if ((Array.isArray(l) && (l = s.commaSeparated ? Wg(l) : iy(l)), s.property === 'style')) {
      let a = typeof l == 'object' ? l : Ny(n, String(l));
      return (n.stylePropertyNameCase === 'css' && (a = Ly(a)), ['style', a]);
    }
    return [
      n.elementAttributeNameCase === 'react' && s.space
        ? Kg[s.property] || s.property
        : s.attribute,
      l,
    ];
  }
}
function Ny(n, i) {
  try {
    return cy(i, { reactCompat: !0 });
  } catch (l) {
    if (n.ignoreInvalidStyle) return {};
    const s = l,
      a = new pt('Cannot parse `style` attribute', {
        ancestors: n.ancestors,
        cause: s,
        ruleId: 'style',
        source: 'hast-util-to-jsx-runtime',
      });
    throw ((a.file = n.filePath || void 0), (a.url = np + '#cannot-parse-style-attribute'), a);
  }
}
function lp(n, i, l) {
  let s;
  if (!l) s = { type: 'Literal', value: i };
  else if (i.includes('.')) {
    const a = i.split('.');
    let c = -1,
      d;
    for (; ++c < a.length; ) {
      const p = Jf(a[c]) ? { type: 'Identifier', name: a[c] } : { type: 'Literal', value: a[c] };
      d = d
        ? {
            type: 'MemberExpression',
            object: d,
            property: p,
            computed: !!(c && p.type === 'Literal'),
            optional: !1,
          }
        : p;
    }
    s = d;
  } else
    s =
      Jf(i) && !/^[a-z]/.test(i) ? { type: 'Identifier', name: i } : { type: 'Literal', value: i };
  if (s.type === 'Literal') {
    const a = s.value;
    return Wu.call(n.components, a) ? n.components[a] : a;
  }
  if (n.evaluater) return n.evaluater.evaluateExpression(s);
  Mi(n);
}
function Mi(n, i) {
  const l = new pt('Cannot handle MDX estrees without `createEvaluater`', {
    ancestors: n.ancestors,
    place: i,
    ruleId: 'mdx-estree',
    source: 'hast-util-to-jsx-runtime',
  });
  throw (
    (l.file = n.filePath || void 0),
    (l.url = np + '#cannot-handle-mdx-estrees-without-createevaluater'),
    l
  );
}
function Ly(n) {
  const i = {};
  let l;
  for (l in n) Wu.call(n, l) && (i[Oy(l)] = n[l]);
  return i;
}
function Oy(n) {
  let i = n.replace(py, Py);
  return (i.slice(0, 3) === 'ms-' && (i = '-' + i), i);
}
function Py(n) {
  return '-' + n.toLowerCase();
}
const ru = {
    action: ['form'],
    cite: ['blockquote', 'del', 'ins', 'q'],
    data: ['object'],
    formAction: ['button', 'input'],
    href: ['a', 'area', 'base', 'link'],
    icon: ['menuitem'],
    itemId: null,
    manifest: ['html'],
    ping: ['a', 'area'],
    poster: ['video'],
    src: ['audio', 'embed', 'iframe', 'img', 'input', 'script', 'source', 'track', 'video'],
  },
  by = {};
function Ry(n, i) {
  const l = by,
    s = typeof l.includeImageAlt == 'boolean' ? l.includeImageAlt : !0,
    a = typeof l.includeHtml == 'boolean' ? l.includeHtml : !0;
  return op(n, s, a);
}
function op(n, i, l) {
  if (Dy(n)) {
    if ('value' in n) return n.type === 'html' && !l ? '' : n.value;
    if (i && 'alt' in n && n.alt) return n.alt;
    if ('children' in n) return ud(n.children, i, l);
  }
  return Array.isArray(n) ? ud(n, i, l) : '';
}
function ud(n, i, l) {
  const s = [];
  let a = -1;
  for (; ++a < n.length; ) s[a] = op(n[a], i, l);
  return s.join('');
}
function Dy(n) {
  return !!(n && typeof n == 'object');
}
const ad = document.createElement('i');
function Hu(n) {
  const i = '&' + n + ';';
  ad.innerHTML = i;
  const l = ad.textContent;
  return (l.charCodeAt(l.length - 1) === 59 && n !== 'semi') || l === i ? !1 : l;
}
function an(n, i, l, s) {
  const a = n.length;
  let c = 0,
    d;
  if ((i < 0 ? (i = -i > a ? 0 : a + i) : (i = i > a ? a : i), (l = l > 0 ? l : 0), s.length < 1e4))
    ((d = Array.from(s)), d.unshift(i, l), n.splice(...d));
  else
    for (l && n.splice(i, l); c < s.length; )
      ((d = s.slice(c, c + 1e4)), d.unshift(i, 0), n.splice(...d), (c += 1e4), (i += 1e4));
}
function Wt(n, i) {
  return n.length > 0 ? (an(n, n.length, 0, i), n) : i;
}
const cd = {}.hasOwnProperty;
function Ay(n) {
  const i = {};
  let l = -1;
  for (; ++l < n.length; ) zy(i, n[l]);
  return i;
}
function zy(n, i) {
  let l;
  for (l in i) {
    const a = (cd.call(n, l) ? n[l] : void 0) || (n[l] = {}),
      c = i[l];
    let d;
    if (c)
      for (d in c) {
        cd.call(a, d) || (a[d] = []);
        const p = c[d];
        My(a[d], Array.isArray(p) ? p : p ? [p] : []);
      }
  }
}
function My(n, i) {
  let l = -1;
  const s = [];
  for (; ++l < i.length; ) (i[l].add === 'after' ? n : s).push(i[l]);
  an(n, 0, 0, s);
}
function sp(n, i) {
  const l = Number.parseInt(n, i);
  return l < 9 ||
    l === 11 ||
    (l > 13 && l < 32) ||
    (l > 126 && l < 160) ||
    (l > 55295 && l < 57344) ||
    (l > 64975 && l < 65008) ||
    (l & 65535) === 65535 ||
    (l & 65535) === 65534 ||
    l > 1114111
    ? '�'
    : String.fromCodePoint(l);
}
function Vr(n) {
  return n
    .replace(/[\t\n\r ]+/g, ' ')
    .replace(/^ | $/g, '')
    .toLowerCase()
    .toUpperCase();
}
const un = Yn(/[A-Za-z]/),
  Dt = Yn(/[\dA-Za-z]/),
  jy = Yn(/[#-'*+\--9=?A-Z^-~]/);
function Iu(n) {
  return n !== null && (n < 32 || n === 127);
}
const Tu = Yn(/\d/),
  Fy = Yn(/[\dA-Fa-f]/),
  By = Yn(/[!-/:-@[-`{-~]/);
function we(n) {
  return n !== null && n < -2;
}
function Ct(n) {
  return n !== null && (n < 0 || n === 32);
}
function De(n) {
  return n === -2 || n === -1 || n === 32;
}
const Uy = Yn(new RegExp('\\p{P}|\\p{S}', 'u')),
  Wy = Yn(/\s/);
function Yn(n) {
  return i;
  function i(l) {
    return l !== null && l > -1 && n.test(String.fromCharCode(l));
  }
}
function Hr(n) {
  const i = [];
  let l = -1,
    s = 0,
    a = 0;
  for (; ++l < n.length; ) {
    const c = n.charCodeAt(l);
    let d = '';
    if (c === 37 && Dt(n.charCodeAt(l + 1)) && Dt(n.charCodeAt(l + 2))) a = 2;
    else if (c < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c)) || (d = String.fromCharCode(c));
    else if (c > 55295 && c < 57344) {
      const p = n.charCodeAt(l + 1);
      c < 56320 && p > 56319 && p < 57344 ? ((d = String.fromCharCode(c, p)), (a = 1)) : (d = '�');
    } else d = String.fromCharCode(c);
    (d && (i.push(n.slice(s, l), encodeURIComponent(d)), (s = l + a + 1), (d = '')),
      a && ((l += a), (a = 0)));
  }
  return i.join('') + n.slice(s);
}
function Fe(n, i, l, s) {
  const a = s ? s - 1 : Number.POSITIVE_INFINITY;
  let c = 0;
  return d;
  function d(m) {
    return De(m) ? (n.enter(l), p(m)) : i(m);
  }
  function p(m) {
    return De(m) && c++ < a ? (n.consume(m), p) : (n.exit(l), i(m));
  }
}
const Vy = { tokenize: qy };
function qy(n) {
  const i = n.attempt(this.parser.constructs.contentInitial, s, a);
  let l;
  return i;
  function s(p) {
    if (p === null) {
      n.consume(p);
      return;
    }
    return (n.enter('lineEnding'), n.consume(p), n.exit('lineEnding'), Fe(n, i, 'linePrefix'));
  }
  function a(p) {
    return (n.enter('paragraph'), c(p));
  }
  function c(p) {
    const m = n.enter('chunkText', { contentType: 'text', previous: l });
    return (l && (l.next = m), (l = m), d(p));
  }
  function d(p) {
    if (p === null) {
      (n.exit('chunkText'), n.exit('paragraph'), n.consume(p));
      return;
    }
    return we(p) ? (n.consume(p), n.exit('chunkText'), c) : (n.consume(p), d);
  }
}
const Hy = { tokenize: $y },
  fd = { tokenize: Qy };
function $y(n) {
  const i = this,
    l = [];
  let s = 0,
    a,
    c,
    d;
  return p;
  function p(U) {
    if (s < l.length) {
      const de = l[s];
      return ((i.containerState = de[1]), n.attempt(de[0].continuation, m, h)(U));
    }
    return h(U);
  }
  function m(U) {
    if ((s++, i.containerState._closeFlow)) {
      ((i.containerState._closeFlow = void 0), a && K());
      const de = i.events.length;
      let ye = de,
        z;
      for (; ye--; )
        if (i.events[ye][0] === 'exit' && i.events[ye][1].type === 'chunkFlow') {
          z = i.events[ye][1].end;
          break;
        }
      A(s);
      let me = de;
      for (; me < i.events.length; ) ((i.events[me][1].end = { ...z }), me++);
      return (an(i.events, ye + 1, 0, i.events.slice(de)), (i.events.length = me), h(U));
    }
    return p(U);
  }
  function h(U) {
    if (s === l.length) {
      if (!a) return k(U);
      if (a.currentConstruct && a.currentConstruct.concrete) return L(U);
      i.interrupt = !!(a.currentConstruct && !a._gfmTableDynamicInterruptHack);
    }
    return ((i.containerState = {}), n.check(fd, y, v)(U));
  }
  function y(U) {
    return (a && K(), A(s), k(U));
  }
  function v(U) {
    return ((i.parser.lazy[i.now().line] = s !== l.length), (d = i.now().offset), L(U));
  }
  function k(U) {
    return ((i.containerState = {}), n.attempt(fd, w, L)(U));
  }
  function w(U) {
    return (s++, l.push([i.currentConstruct, i.containerState]), k(U));
  }
  function L(U) {
    if (U === null) {
      (a && K(), A(0), n.consume(U));
      return;
    }
    return (
      (a = a || i.parser.flow(i.now())),
      n.enter('chunkFlow', { _tokenizer: a, contentType: 'flow', previous: c }),
      P(U)
    );
  }
  function P(U) {
    if (U === null) {
      (R(n.exit('chunkFlow'), !0), A(0), n.consume(U));
      return;
    }
    return we(U)
      ? (n.consume(U), R(n.exit('chunkFlow')), (s = 0), (i.interrupt = void 0), p)
      : (n.consume(U), P);
  }
  function R(U, de) {
    const ye = i.sliceStream(U);
    if (
      (de && ye.push(null),
      (U.previous = c),
      c && (c.next = U),
      (c = U),
      a.defineSkip(U.start),
      a.write(ye),
      i.parser.lazy[U.start.line])
    ) {
      let z = a.events.length;
      for (; z--; )
        if (
          a.events[z][1].start.offset < d &&
          (!a.events[z][1].end || a.events[z][1].end.offset > d)
        )
          return;
      const me = i.events.length;
      let xe = me,
        Se,
        Ee;
      for (; xe--; )
        if (i.events[xe][0] === 'exit' && i.events[xe][1].type === 'chunkFlow') {
          if (Se) {
            Ee = i.events[xe][1].end;
            break;
          }
          Se = !0;
        }
      for (A(s), z = me; z < i.events.length; ) ((i.events[z][1].end = { ...Ee }), z++);
      (an(i.events, xe + 1, 0, i.events.slice(me)), (i.events.length = z));
    }
  }
  function A(U) {
    let de = l.length;
    for (; de-- > U; ) {
      const ye = l[de];
      ((i.containerState = ye[1]), ye[0].exit.call(i, n));
    }
    l.length = U;
  }
  function K() {
    (a.write([null]), (c = void 0), (a = void 0), (i.containerState._closeFlow = void 0));
  }
}
function Qy(n, i, l) {
  return Fe(
    n,
    n.attempt(this.parser.constructs.document, i, l),
    'linePrefix',
    this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
  );
}
function dd(n) {
  if (n === null || Ct(n) || Wy(n)) return 1;
  if (Uy(n)) return 2;
}
function $u(n, i, l) {
  const s = [];
  let a = -1;
  for (; ++a < n.length; ) {
    const c = n[a].resolveAll;
    c && !s.includes(c) && ((i = c(i, l)), s.push(c));
  }
  return i;
}
const Nu = { name: 'attention', resolveAll: Gy, tokenize: Yy };
function Gy(n, i) {
  let l = -1,
    s,
    a,
    c,
    d,
    p,
    m,
    h,
    y;
  for (; ++l < n.length; )
    if (n[l][0] === 'enter' && n[l][1].type === 'attentionSequence' && n[l][1]._close) {
      for (s = l; s--; )
        if (
          n[s][0] === 'exit' &&
          n[s][1].type === 'attentionSequence' &&
          n[s][1]._open &&
          i.sliceSerialize(n[s][1]).charCodeAt(0) === i.sliceSerialize(n[l][1]).charCodeAt(0)
        ) {
          if (
            (n[s][1]._close || n[l][1]._open) &&
            (n[l][1].end.offset - n[l][1].start.offset) % 3 &&
            !(
              (n[s][1].end.offset -
                n[s][1].start.offset +
                n[l][1].end.offset -
                n[l][1].start.offset) %
              3
            )
          )
            continue;
          m =
            n[s][1].end.offset - n[s][1].start.offset > 1 &&
            n[l][1].end.offset - n[l][1].start.offset > 1
              ? 2
              : 1;
          const v = { ...n[s][1].end },
            k = { ...n[l][1].start };
          (pd(v, -m),
            pd(k, m),
            (d = {
              type: m > 1 ? 'strongSequence' : 'emphasisSequence',
              start: v,
              end: { ...n[s][1].end },
            }),
            (p = {
              type: m > 1 ? 'strongSequence' : 'emphasisSequence',
              start: { ...n[l][1].start },
              end: k,
            }),
            (c = {
              type: m > 1 ? 'strongText' : 'emphasisText',
              start: { ...n[s][1].end },
              end: { ...n[l][1].start },
            }),
            (a = { type: m > 1 ? 'strong' : 'emphasis', start: { ...d.start }, end: { ...p.end } }),
            (n[s][1].end = { ...d.start }),
            (n[l][1].start = { ...p.end }),
            (h = []),
            n[s][1].end.offset - n[s][1].start.offset &&
              (h = Wt(h, [
                ['enter', n[s][1], i],
                ['exit', n[s][1], i],
              ])),
            (h = Wt(h, [
              ['enter', a, i],
              ['enter', d, i],
              ['exit', d, i],
              ['enter', c, i],
            ])),
            (h = Wt(h, $u(i.parser.constructs.insideSpan.null, n.slice(s + 1, l), i))),
            (h = Wt(h, [
              ['exit', c, i],
              ['enter', p, i],
              ['exit', p, i],
              ['exit', a, i],
            ])),
            n[l][1].end.offset - n[l][1].start.offset
              ? ((y = 2),
                (h = Wt(h, [
                  ['enter', n[l][1], i],
                  ['exit', n[l][1], i],
                ])))
              : (y = 0),
            an(n, s - 1, l - s + 3, h),
            (l = s + h.length - y - 2));
          break;
        }
    }
  for (l = -1; ++l < n.length; ) n[l][1].type === 'attentionSequence' && (n[l][1].type = 'data');
  return n;
}
function Yy(n, i) {
  const l = this.parser.constructs.attentionMarkers.null,
    s = this.previous,
    a = dd(s);
  let c;
  return d;
  function d(m) {
    return ((c = m), n.enter('attentionSequence'), p(m));
  }
  function p(m) {
    if (m === c) return (n.consume(m), p);
    const h = n.exit('attentionSequence'),
      y = dd(m),
      v = !y || (y === 2 && a) || l.includes(m),
      k = !a || (a === 2 && y) || l.includes(s);
    return (
      (h._open = !!(c === 42 ? v : v && (a || !k))),
      (h._close = !!(c === 42 ? k : k && (y || !v))),
      i(m)
    );
  }
}
function pd(n, i) {
  ((n.column += i), (n.offset += i), (n._bufferIndex += i));
}
const Xy = { name: 'autolink', tokenize: Ky };
function Ky(n, i, l) {
  let s = 0;
  return a;
  function a(w) {
    return (
      n.enter('autolink'),
      n.enter('autolinkMarker'),
      n.consume(w),
      n.exit('autolinkMarker'),
      n.enter('autolinkProtocol'),
      c
    );
  }
  function c(w) {
    return un(w) ? (n.consume(w), d) : w === 64 ? l(w) : h(w);
  }
  function d(w) {
    return w === 43 || w === 45 || w === 46 || Dt(w) ? ((s = 1), p(w)) : h(w);
  }
  function p(w) {
    return w === 58
      ? (n.consume(w), (s = 0), m)
      : (w === 43 || w === 45 || w === 46 || Dt(w)) && s++ < 32
        ? (n.consume(w), p)
        : ((s = 0), h(w));
  }
  function m(w) {
    return w === 62
      ? (n.exit('autolinkProtocol'),
        n.enter('autolinkMarker'),
        n.consume(w),
        n.exit('autolinkMarker'),
        n.exit('autolink'),
        i)
      : w === null || w === 32 || w === 60 || Iu(w)
        ? l(w)
        : (n.consume(w), m);
  }
  function h(w) {
    return w === 64 ? (n.consume(w), y) : jy(w) ? (n.consume(w), h) : l(w);
  }
  function y(w) {
    return Dt(w) ? v(w) : l(w);
  }
  function v(w) {
    return w === 46
      ? (n.consume(w), (s = 0), y)
      : w === 62
        ? ((n.exit('autolinkProtocol').type = 'autolinkEmail'),
          n.enter('autolinkMarker'),
          n.consume(w),
          n.exit('autolinkMarker'),
          n.exit('autolink'),
          i)
        : k(w);
  }
  function k(w) {
    if ((w === 45 || Dt(w)) && s++ < 63) {
      const L = w === 45 ? k : v;
      return (n.consume(w), L);
    }
    return l(w);
  }
}
const lo = { partial: !0, tokenize: Jy };
function Jy(n, i, l) {
  return s;
  function s(c) {
    return De(c) ? Fe(n, a, 'linePrefix')(c) : a(c);
  }
  function a(c) {
    return c === null || we(c) ? i(c) : l(c);
  }
}
const up = { continuation: { tokenize: ev }, exit: tv, name: 'blockQuote', tokenize: Zy };
function Zy(n, i, l) {
  const s = this;
  return a;
  function a(d) {
    if (d === 62) {
      const p = s.containerState;
      return (
        p.open || (n.enter('blockQuote', { _container: !0 }), (p.open = !0)),
        n.enter('blockQuotePrefix'),
        n.enter('blockQuoteMarker'),
        n.consume(d),
        n.exit('blockQuoteMarker'),
        c
      );
    }
    return l(d);
  }
  function c(d) {
    return De(d)
      ? (n.enter('blockQuotePrefixWhitespace'),
        n.consume(d),
        n.exit('blockQuotePrefixWhitespace'),
        n.exit('blockQuotePrefix'),
        i)
      : (n.exit('blockQuotePrefix'), i(d));
  }
}
function ev(n, i, l) {
  const s = this;
  return a;
  function a(d) {
    return De(d)
      ? Fe(
          n,
          c,
          'linePrefix',
          s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
        )(d)
      : c(d);
  }
  function c(d) {
    return n.attempt(up, i, l)(d);
  }
}
function tv(n) {
  n.exit('blockQuote');
}
const ap = { name: 'characterEscape', tokenize: nv };
function nv(n, i, l) {
  return s;
  function s(c) {
    return (
      n.enter('characterEscape'),
      n.enter('escapeMarker'),
      n.consume(c),
      n.exit('escapeMarker'),
      a
    );
  }
  function a(c) {
    return By(c)
      ? (n.enter('characterEscapeValue'),
        n.consume(c),
        n.exit('characterEscapeValue'),
        n.exit('characterEscape'),
        i)
      : l(c);
  }
}
const cp = { name: 'characterReference', tokenize: rv };
function rv(n, i, l) {
  const s = this;
  let a = 0,
    c,
    d;
  return p;
  function p(v) {
    return (
      n.enter('characterReference'),
      n.enter('characterReferenceMarker'),
      n.consume(v),
      n.exit('characterReferenceMarker'),
      m
    );
  }
  function m(v) {
    return v === 35
      ? (n.enter('characterReferenceMarkerNumeric'),
        n.consume(v),
        n.exit('characterReferenceMarkerNumeric'),
        h)
      : (n.enter('characterReferenceValue'), (c = 31), (d = Dt), y(v));
  }
  function h(v) {
    return v === 88 || v === 120
      ? (n.enter('characterReferenceMarkerHexadecimal'),
        n.consume(v),
        n.exit('characterReferenceMarkerHexadecimal'),
        n.enter('characterReferenceValue'),
        (c = 6),
        (d = Fy),
        y)
      : (n.enter('characterReferenceValue'), (c = 7), (d = Tu), y(v));
  }
  function y(v) {
    if (v === 59 && a) {
      const k = n.exit('characterReferenceValue');
      return d === Dt && !Hu(s.sliceSerialize(k))
        ? l(v)
        : (n.enter('characterReferenceMarker'),
          n.consume(v),
          n.exit('characterReferenceMarker'),
          n.exit('characterReference'),
          i);
    }
    return d(v) && a++ < c ? (n.consume(v), y) : l(v);
  }
}
const hd = { partial: !0, tokenize: lv },
  md = { concrete: !0, name: 'codeFenced', tokenize: iv };
function iv(n, i, l) {
  const s = this,
    a = { partial: !0, tokenize: ye };
  let c = 0,
    d = 0,
    p;
  return m;
  function m(z) {
    return h(z);
  }
  function h(z) {
    const me = s.events[s.events.length - 1];
    return (
      (c = me && me[1].type === 'linePrefix' ? me[2].sliceSerialize(me[1], !0).length : 0),
      (p = z),
      n.enter('codeFenced'),
      n.enter('codeFencedFence'),
      n.enter('codeFencedFenceSequence'),
      y(z)
    );
  }
  function y(z) {
    return z === p
      ? (d++, n.consume(z), y)
      : d < 3
        ? l(z)
        : (n.exit('codeFencedFenceSequence'), De(z) ? Fe(n, v, 'whitespace')(z) : v(z));
  }
  function v(z) {
    return z === null || we(z)
      ? (n.exit('codeFencedFence'), s.interrupt ? i(z) : n.check(hd, P, de)(z))
      : (n.enter('codeFencedFenceInfo'), n.enter('chunkString', { contentType: 'string' }), k(z));
  }
  function k(z) {
    return z === null || we(z)
      ? (n.exit('chunkString'), n.exit('codeFencedFenceInfo'), v(z))
      : De(z)
        ? (n.exit('chunkString'), n.exit('codeFencedFenceInfo'), Fe(n, w, 'whitespace')(z))
        : z === 96 && z === p
          ? l(z)
          : (n.consume(z), k);
  }
  function w(z) {
    return z === null || we(z)
      ? v(z)
      : (n.enter('codeFencedFenceMeta'), n.enter('chunkString', { contentType: 'string' }), L(z));
  }
  function L(z) {
    return z === null || we(z)
      ? (n.exit('chunkString'), n.exit('codeFencedFenceMeta'), v(z))
      : z === 96 && z === p
        ? l(z)
        : (n.consume(z), L);
  }
  function P(z) {
    return n.attempt(a, de, R)(z);
  }
  function R(z) {
    return (n.enter('lineEnding'), n.consume(z), n.exit('lineEnding'), A);
  }
  function A(z) {
    return c > 0 && De(z) ? Fe(n, K, 'linePrefix', c + 1)(z) : K(z);
  }
  function K(z) {
    return z === null || we(z) ? n.check(hd, P, de)(z) : (n.enter('codeFlowValue'), U(z));
  }
  function U(z) {
    return z === null || we(z) ? (n.exit('codeFlowValue'), K(z)) : (n.consume(z), U);
  }
  function de(z) {
    return (n.exit('codeFenced'), i(z));
  }
  function ye(z, me, xe) {
    let Se = 0;
    return Ee;
    function Ee(V) {
      return (z.enter('lineEnding'), z.consume(V), z.exit('lineEnding'), ne);
    }
    function ne(V) {
      return (
        z.enter('codeFencedFence'),
        De(V)
          ? Fe(
              z,
              D,
              'linePrefix',
              s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
            )(V)
          : D(V)
      );
    }
    function D(V) {
      return V === p ? (z.enter('codeFencedFenceSequence'), J(V)) : xe(V);
    }
    function J(V) {
      return V === p
        ? (Se++, z.consume(V), J)
        : Se >= d
          ? (z.exit('codeFencedFenceSequence'), De(V) ? Fe(z, X, 'whitespace')(V) : X(V))
          : xe(V);
    }
    function X(V) {
      return V === null || we(V) ? (z.exit('codeFencedFence'), me(V)) : xe(V);
    }
  }
}
function lv(n, i, l) {
  const s = this;
  return a;
  function a(d) {
    return d === null ? l(d) : (n.enter('lineEnding'), n.consume(d), n.exit('lineEnding'), c);
  }
  function c(d) {
    return s.parser.lazy[s.now().line] ? l(d) : i(d);
  }
}
const iu = { name: 'codeIndented', tokenize: sv },
  ov = { partial: !0, tokenize: uv };
function sv(n, i, l) {
  const s = this;
  return a;
  function a(h) {
    return (n.enter('codeIndented'), Fe(n, c, 'linePrefix', 5)(h));
  }
  function c(h) {
    const y = s.events[s.events.length - 1];
    return y && y[1].type === 'linePrefix' && y[2].sliceSerialize(y[1], !0).length >= 4
      ? d(h)
      : l(h);
  }
  function d(h) {
    return h === null ? m(h) : we(h) ? n.attempt(ov, d, m)(h) : (n.enter('codeFlowValue'), p(h));
  }
  function p(h) {
    return h === null || we(h) ? (n.exit('codeFlowValue'), d(h)) : (n.consume(h), p);
  }
  function m(h) {
    return (n.exit('codeIndented'), i(h));
  }
}
function uv(n, i, l) {
  const s = this;
  return a;
  function a(d) {
    return s.parser.lazy[s.now().line]
      ? l(d)
      : we(d)
        ? (n.enter('lineEnding'), n.consume(d), n.exit('lineEnding'), a)
        : Fe(n, c, 'linePrefix', 5)(d);
  }
  function c(d) {
    const p = s.events[s.events.length - 1];
    return p && p[1].type === 'linePrefix' && p[2].sliceSerialize(p[1], !0).length >= 4
      ? i(d)
      : we(d)
        ? a(d)
        : l(d);
  }
}
const av = { name: 'codeText', previous: fv, resolve: cv, tokenize: dv };
function cv(n) {
  let i = n.length - 4,
    l = 3,
    s,
    a;
  if (
    (n[l][1].type === 'lineEnding' || n[l][1].type === 'space') &&
    (n[i][1].type === 'lineEnding' || n[i][1].type === 'space')
  ) {
    for (s = l; ++s < i; )
      if (n[s][1].type === 'codeTextData') {
        ((n[l][1].type = 'codeTextPadding'),
          (n[i][1].type = 'codeTextPadding'),
          (l += 2),
          (i -= 2));
        break;
      }
  }
  for (s = l - 1, i++; ++s <= i; )
    a === void 0
      ? s !== i && n[s][1].type !== 'lineEnding' && (a = s)
      : (s === i || n[s][1].type === 'lineEnding') &&
        ((n[a][1].type = 'codeTextData'),
        s !== a + 2 &&
          ((n[a][1].end = n[s - 1][1].end),
          n.splice(a + 2, s - a - 2),
          (i -= s - a - 2),
          (s = a + 2)),
        (a = void 0));
  return n;
}
function fv(n) {
  return n !== 96 || this.events[this.events.length - 1][1].type === 'characterEscape';
}
function dv(n, i, l) {
  let s = 0,
    a,
    c;
  return d;
  function d(v) {
    return (n.enter('codeText'), n.enter('codeTextSequence'), p(v));
  }
  function p(v) {
    return v === 96 ? (n.consume(v), s++, p) : (n.exit('codeTextSequence'), m(v));
  }
  function m(v) {
    return v === null
      ? l(v)
      : v === 32
        ? (n.enter('space'), n.consume(v), n.exit('space'), m)
        : v === 96
          ? ((c = n.enter('codeTextSequence')), (a = 0), y(v))
          : we(v)
            ? (n.enter('lineEnding'), n.consume(v), n.exit('lineEnding'), m)
            : (n.enter('codeTextData'), h(v));
  }
  function h(v) {
    return v === null || v === 32 || v === 96 || we(v)
      ? (n.exit('codeTextData'), m(v))
      : (n.consume(v), h);
  }
  function y(v) {
    return v === 96
      ? (n.consume(v), a++, y)
      : a === s
        ? (n.exit('codeTextSequence'), n.exit('codeText'), i(v))
        : ((c.type = 'codeTextData'), h(v));
  }
}
class pv {
  constructor(i) {
    ((this.left = i ? [...i] : []), (this.right = []));
  }
  get(i) {
    if (i < 0 || i >= this.left.length + this.right.length)
      throw new RangeError(
        'Cannot access index `' +
          i +
          '` in a splice buffer of size `' +
          (this.left.length + this.right.length) +
          '`'
      );
    return i < this.left.length
      ? this.left[i]
      : this.right[this.right.length - i + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return (this.setCursor(0), this.right.pop());
  }
  slice(i, l) {
    const s = l ?? Number.POSITIVE_INFINITY;
    return s < this.left.length
      ? this.left.slice(i, s)
      : i > this.left.length
        ? this.right
            .slice(
              this.right.length - s + this.left.length,
              this.right.length - i + this.left.length
            )
            .reverse()
        : this.left
            .slice(i)
            .concat(this.right.slice(this.right.length - s + this.left.length).reverse());
  }
  splice(i, l, s) {
    const a = l || 0;
    this.setCursor(Math.trunc(i));
    const c = this.right.splice(this.right.length - a, Number.POSITIVE_INFINITY);
    return (s && Pi(this.left, s), c.reverse());
  }
  pop() {
    return (this.setCursor(Number.POSITIVE_INFINITY), this.left.pop());
  }
  push(i) {
    (this.setCursor(Number.POSITIVE_INFINITY), this.left.push(i));
  }
  pushMany(i) {
    (this.setCursor(Number.POSITIVE_INFINITY), Pi(this.left, i));
  }
  unshift(i) {
    (this.setCursor(0), this.right.push(i));
  }
  unshiftMany(i) {
    (this.setCursor(0), Pi(this.right, i.reverse()));
  }
  setCursor(i) {
    if (
      !(
        i === this.left.length ||
        (i > this.left.length && this.right.length === 0) ||
        (i < 0 && this.left.length === 0)
      )
    )
      if (i < this.left.length) {
        const l = this.left.splice(i, Number.POSITIVE_INFINITY);
        Pi(this.right, l.reverse());
      } else {
        const l = this.right.splice(
          this.left.length + this.right.length - i,
          Number.POSITIVE_INFINITY
        );
        Pi(this.left, l.reverse());
      }
  }
}
function Pi(n, i) {
  let l = 0;
  if (i.length < 1e4) n.push(...i);
  else for (; l < i.length; ) (n.push(...i.slice(l, l + 1e4)), (l += 1e4));
}
function fp(n) {
  const i = {};
  let l = -1,
    s,
    a,
    c,
    d,
    p,
    m,
    h;
  const y = new pv(n);
  for (; ++l < y.length; ) {
    for (; l in i; ) l = i[l];
    if (
      ((s = y.get(l)),
      l &&
        s[1].type === 'chunkFlow' &&
        y.get(l - 1)[1].type === 'listItemPrefix' &&
        ((m = s[1]._tokenizer.events),
        (c = 0),
        c < m.length && m[c][1].type === 'lineEndingBlank' && (c += 2),
        c < m.length && m[c][1].type === 'content'))
    )
      for (; ++c < m.length && m[c][1].type !== 'content'; )
        m[c][1].type === 'chunkText' && ((m[c][1]._isInFirstContentOfListItem = !0), c++);
    if (s[0] === 'enter') s[1].contentType && (Object.assign(i, hv(y, l)), (l = i[l]), (h = !0));
    else if (s[1]._container) {
      for (c = l, a = void 0; c--; )
        if (((d = y.get(c)), d[1].type === 'lineEnding' || d[1].type === 'lineEndingBlank'))
          d[0] === 'enter' &&
            (a && (y.get(a)[1].type = 'lineEndingBlank'), (d[1].type = 'lineEnding'), (a = c));
        else if (!(d[1].type === 'linePrefix' || d[1].type === 'listItemIndent')) break;
      a &&
        ((s[1].end = { ...y.get(a)[1].start }),
        (p = y.slice(a, l)),
        p.unshift(s),
        y.splice(a, l - a + 1, p));
    }
  }
  return (an(n, 0, Number.POSITIVE_INFINITY, y.slice(0)), !h);
}
function hv(n, i) {
  const l = n.get(i)[1],
    s = n.get(i)[2];
  let a = i - 1;
  const c = [];
  let d = l._tokenizer;
  d ||
    ((d = s.parser[l.contentType](l.start)),
    l._contentTypeTextTrailing && (d._contentTypeTextTrailing = !0));
  const p = d.events,
    m = [],
    h = {};
  let y,
    v,
    k = -1,
    w = l,
    L = 0,
    P = 0;
  const R = [P];
  for (; w; ) {
    for (; n.get(++a)[1] !== w; );
    (c.push(a),
      w._tokenizer ||
        ((y = s.sliceStream(w)),
        w.next || y.push(null),
        v && d.defineSkip(w.start),
        w._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = !0),
        d.write(y),
        w._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = void 0)),
      (v = w),
      (w = w.next));
  }
  for (w = l; ++k < p.length; )
    p[k][0] === 'exit' &&
      p[k - 1][0] === 'enter' &&
      p[k][1].type === p[k - 1][1].type &&
      p[k][1].start.line !== p[k][1].end.line &&
      ((P = k + 1), R.push(P), (w._tokenizer = void 0), (w.previous = void 0), (w = w.next));
  for (
    d.events = [], w ? ((w._tokenizer = void 0), (w.previous = void 0)) : R.pop(), k = R.length;
    k--;
  ) {
    const A = p.slice(R[k], R[k + 1]),
      K = c.pop();
    (m.push([K, K + A.length - 1]), n.splice(K, 2, A));
  }
  for (m.reverse(), k = -1; ++k < m.length; )
    ((h[L + m[k][0]] = L + m[k][1]), (L += m[k][1] - m[k][0] - 1));
  return h;
}
const mv = { resolve: yv, tokenize: vv },
  gv = { partial: !0, tokenize: wv };
function yv(n) {
  return (fp(n), n);
}
function vv(n, i) {
  let l;
  return s;
  function s(p) {
    return (n.enter('content'), (l = n.enter('chunkContent', { contentType: 'content' })), a(p));
  }
  function a(p) {
    return p === null ? c(p) : we(p) ? n.check(gv, d, c)(p) : (n.consume(p), a);
  }
  function c(p) {
    return (n.exit('chunkContent'), n.exit('content'), i(p));
  }
  function d(p) {
    return (
      n.consume(p),
      n.exit('chunkContent'),
      (l.next = n.enter('chunkContent', { contentType: 'content', previous: l })),
      (l = l.next),
      a
    );
  }
}
function wv(n, i, l) {
  const s = this;
  return a;
  function a(d) {
    return (
      n.exit('chunkContent'),
      n.enter('lineEnding'),
      n.consume(d),
      n.exit('lineEnding'),
      Fe(n, c, 'linePrefix')
    );
  }
  function c(d) {
    if (d === null || we(d)) return l(d);
    const p = s.events[s.events.length - 1];
    return !s.parser.constructs.disable.null.includes('codeIndented') &&
      p &&
      p[1].type === 'linePrefix' &&
      p[2].sliceSerialize(p[1], !0).length >= 4
      ? i(d)
      : n.interrupt(s.parser.constructs.flow, l, i)(d);
  }
}
function dp(n, i, l, s, a, c, d, p, m) {
  const h = m || Number.POSITIVE_INFINITY;
  let y = 0;
  return v;
  function v(A) {
    return A === 60
      ? (n.enter(s), n.enter(a), n.enter(c), n.consume(A), n.exit(c), k)
      : A === null || A === 32 || A === 41 || Iu(A)
        ? l(A)
        : (n.enter(s),
          n.enter(d),
          n.enter(p),
          n.enter('chunkString', { contentType: 'string' }),
          P(A));
  }
  function k(A) {
    return A === 62
      ? (n.enter(c), n.consume(A), n.exit(c), n.exit(a), n.exit(s), i)
      : (n.enter(p), n.enter('chunkString', { contentType: 'string' }), w(A));
  }
  function w(A) {
    return A === 62
      ? (n.exit('chunkString'), n.exit(p), k(A))
      : A === null || A === 60 || we(A)
        ? l(A)
        : (n.consume(A), A === 92 ? L : w);
  }
  function L(A) {
    return A === 60 || A === 62 || A === 92 ? (n.consume(A), w) : w(A);
  }
  function P(A) {
    return !y && (A === null || A === 41 || Ct(A))
      ? (n.exit('chunkString'), n.exit(p), n.exit(d), n.exit(s), i(A))
      : y < h && A === 40
        ? (n.consume(A), y++, P)
        : A === 41
          ? (n.consume(A), y--, P)
          : A === null || A === 32 || A === 40 || Iu(A)
            ? l(A)
            : (n.consume(A), A === 92 ? R : P);
  }
  function R(A) {
    return A === 40 || A === 41 || A === 92 ? (n.consume(A), P) : P(A);
  }
}
function pp(n, i, l, s, a, c) {
  const d = this;
  let p = 0,
    m;
  return h;
  function h(w) {
    return (n.enter(s), n.enter(a), n.consume(w), n.exit(a), n.enter(c), y);
  }
  function y(w) {
    return p > 999 ||
      w === null ||
      w === 91 ||
      (w === 93 && !m) ||
      (w === 94 && !p && '_hiddenFootnoteSupport' in d.parser.constructs)
      ? l(w)
      : w === 93
        ? (n.exit(c), n.enter(a), n.consume(w), n.exit(a), n.exit(s), i)
        : we(w)
          ? (n.enter('lineEnding'), n.consume(w), n.exit('lineEnding'), y)
          : (n.enter('chunkString', { contentType: 'string' }), v(w));
  }
  function v(w) {
    return w === null || w === 91 || w === 93 || we(w) || p++ > 999
      ? (n.exit('chunkString'), y(w))
      : (n.consume(w), m || (m = !De(w)), w === 92 ? k : v);
  }
  function k(w) {
    return w === 91 || w === 92 || w === 93 ? (n.consume(w), p++, v) : v(w);
  }
}
function hp(n, i, l, s, a, c) {
  let d;
  return p;
  function p(k) {
    return k === 34 || k === 39 || k === 40
      ? (n.enter(s), n.enter(a), n.consume(k), n.exit(a), (d = k === 40 ? 41 : k), m)
      : l(k);
  }
  function m(k) {
    return k === d ? (n.enter(a), n.consume(k), n.exit(a), n.exit(s), i) : (n.enter(c), h(k));
  }
  function h(k) {
    return k === d
      ? (n.exit(c), m(d))
      : k === null
        ? l(k)
        : we(k)
          ? (n.enter('lineEnding'), n.consume(k), n.exit('lineEnding'), Fe(n, h, 'linePrefix'))
          : (n.enter('chunkString', { contentType: 'string' }), y(k));
  }
  function y(k) {
    return k === d || k === null || we(k)
      ? (n.exit('chunkString'), h(k))
      : (n.consume(k), k === 92 ? v : y);
  }
  function v(k) {
    return k === d || k === 92 ? (n.consume(k), y) : y(k);
  }
}
function Di(n, i) {
  let l;
  return s;
  function s(a) {
    return we(a)
      ? (n.enter('lineEnding'), n.consume(a), n.exit('lineEnding'), (l = !0), s)
      : De(a)
        ? Fe(n, s, l ? 'linePrefix' : 'lineSuffix')(a)
        : i(a);
  }
}
const kv = { name: 'definition', tokenize: Sv },
  xv = { partial: !0, tokenize: Ev };
function Sv(n, i, l) {
  const s = this;
  let a;
  return c;
  function c(w) {
    return (n.enter('definition'), d(w));
  }
  function d(w) {
    return pp.call(
      s,
      n,
      p,
      l,
      'definitionLabel',
      'definitionLabelMarker',
      'definitionLabelString'
    )(w);
  }
  function p(w) {
    return (
      (a = Vr(s.sliceSerialize(s.events[s.events.length - 1][1]).slice(1, -1))),
      w === 58 ? (n.enter('definitionMarker'), n.consume(w), n.exit('definitionMarker'), m) : l(w)
    );
  }
  function m(w) {
    return Ct(w) ? Di(n, h)(w) : h(w);
  }
  function h(w) {
    return dp(
      n,
      y,
      l,
      'definitionDestination',
      'definitionDestinationLiteral',
      'definitionDestinationLiteralMarker',
      'definitionDestinationRaw',
      'definitionDestinationString'
    )(w);
  }
  function y(w) {
    return n.attempt(xv, v, v)(w);
  }
  function v(w) {
    return De(w) ? Fe(n, k, 'whitespace')(w) : k(w);
  }
  function k(w) {
    return w === null || we(w) ? (n.exit('definition'), s.parser.defined.push(a), i(w)) : l(w);
  }
}
function Ev(n, i, l) {
  return s;
  function s(p) {
    return Ct(p) ? Di(n, a)(p) : l(p);
  }
  function a(p) {
    return hp(n, c, l, 'definitionTitle', 'definitionTitleMarker', 'definitionTitleString')(p);
  }
  function c(p) {
    return De(p) ? Fe(n, d, 'whitespace')(p) : d(p);
  }
  function d(p) {
    return p === null || we(p) ? i(p) : l(p);
  }
}
const Cv = { name: 'hardBreakEscape', tokenize: _v };
function _v(n, i, l) {
  return s;
  function s(c) {
    return (n.enter('hardBreakEscape'), n.consume(c), a);
  }
  function a(c) {
    return we(c) ? (n.exit('hardBreakEscape'), i(c)) : l(c);
  }
}
const Iv = { name: 'headingAtx', resolve: Tv, tokenize: Nv };
function Tv(n, i) {
  let l = n.length - 2,
    s = 3,
    a,
    c;
  return (
    n[s][1].type === 'whitespace' && (s += 2),
    l - 2 > s && n[l][1].type === 'whitespace' && (l -= 2),
    n[l][1].type === 'atxHeadingSequence' &&
      (s === l - 1 || (l - 4 > s && n[l - 2][1].type === 'whitespace')) &&
      (l -= s + 1 === l ? 2 : 4),
    l > s &&
      ((a = { type: 'atxHeadingText', start: n[s][1].start, end: n[l][1].end }),
      (c = { type: 'chunkText', start: n[s][1].start, end: n[l][1].end, contentType: 'text' }),
      an(n, s, l - s + 1, [
        ['enter', a, i],
        ['enter', c, i],
        ['exit', c, i],
        ['exit', a, i],
      ])),
    n
  );
}
function Nv(n, i, l) {
  let s = 0;
  return a;
  function a(y) {
    return (n.enter('atxHeading'), c(y));
  }
  function c(y) {
    return (n.enter('atxHeadingSequence'), d(y));
  }
  function d(y) {
    return y === 35 && s++ < 6
      ? (n.consume(y), d)
      : y === null || Ct(y)
        ? (n.exit('atxHeadingSequence'), p(y))
        : l(y);
  }
  function p(y) {
    return y === 35
      ? (n.enter('atxHeadingSequence'), m(y))
      : y === null || we(y)
        ? (n.exit('atxHeading'), i(y))
        : De(y)
          ? Fe(n, p, 'whitespace')(y)
          : (n.enter('atxHeadingText'), h(y));
  }
  function m(y) {
    return y === 35 ? (n.consume(y), m) : (n.exit('atxHeadingSequence'), p(y));
  }
  function h(y) {
    return y === null || y === 35 || Ct(y) ? (n.exit('atxHeadingText'), p(y)) : (n.consume(y), h);
  }
}
const Lv = [
    'address',
    'article',
    'aside',
    'base',
    'basefont',
    'blockquote',
    'body',
    'caption',
    'center',
    'col',
    'colgroup',
    'dd',
    'details',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hr',
    'html',
    'iframe',
    'legend',
    'li',
    'link',
    'main',
    'menu',
    'menuitem',
    'nav',
    'noframes',
    'ol',
    'optgroup',
    'option',
    'p',
    'param',
    'search',
    'section',
    'summary',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'title',
    'tr',
    'track',
    'ul',
  ],
  gd = ['pre', 'script', 'style', 'textarea'],
  Ov = { concrete: !0, name: 'htmlFlow', resolveTo: Rv, tokenize: Dv },
  Pv = { partial: !0, tokenize: zv },
  bv = { partial: !0, tokenize: Av };
function Rv(n) {
  let i = n.length;
  for (; i-- && !(n[i][0] === 'enter' && n[i][1].type === 'htmlFlow'); );
  return (
    i > 1 &&
      n[i - 2][1].type === 'linePrefix' &&
      ((n[i][1].start = n[i - 2][1].start),
      (n[i + 1][1].start = n[i - 2][1].start),
      n.splice(i - 2, 2)),
    n
  );
}
function Dv(n, i, l) {
  const s = this;
  let a, c, d, p, m;
  return h;
  function h(S) {
    return y(S);
  }
  function y(S) {
    return (n.enter('htmlFlow'), n.enter('htmlFlowData'), n.consume(S), v);
  }
  function v(S) {
    return S === 33
      ? (n.consume(S), k)
      : S === 47
        ? (n.consume(S), (c = !0), P)
        : S === 63
          ? (n.consume(S), (a = 3), s.interrupt ? i : x)
          : un(S)
            ? (n.consume(S), (d = String.fromCharCode(S)), R)
            : l(S);
  }
  function k(S) {
    return S === 45
      ? (n.consume(S), (a = 2), w)
      : S === 91
        ? (n.consume(S), (a = 5), (p = 0), L)
        : un(S)
          ? (n.consume(S), (a = 4), s.interrupt ? i : x)
          : l(S);
  }
  function w(S) {
    return S === 45 ? (n.consume(S), s.interrupt ? i : x) : l(S);
  }
  function L(S) {
    const ae = 'CDATA[';
    return S === ae.charCodeAt(p++)
      ? (n.consume(S), p === ae.length ? (s.interrupt ? i : D) : L)
      : l(S);
  }
  function P(S) {
    return un(S) ? (n.consume(S), (d = String.fromCharCode(S)), R) : l(S);
  }
  function R(S) {
    if (S === null || S === 47 || S === 62 || Ct(S)) {
      const ae = S === 47,
        ke = d.toLowerCase();
      return !ae && !c && gd.includes(ke)
        ? ((a = 1), s.interrupt ? i(S) : D(S))
        : Lv.includes(d.toLowerCase())
          ? ((a = 6), ae ? (n.consume(S), A) : s.interrupt ? i(S) : D(S))
          : ((a = 7), s.interrupt && !s.parser.lazy[s.now().line] ? l(S) : c ? K(S) : U(S));
    }
    return S === 45 || Dt(S) ? (n.consume(S), (d += String.fromCharCode(S)), R) : l(S);
  }
  function A(S) {
    return S === 62 ? (n.consume(S), s.interrupt ? i : D) : l(S);
  }
  function K(S) {
    return De(S) ? (n.consume(S), K) : Ee(S);
  }
  function U(S) {
    return S === 47
      ? (n.consume(S), Ee)
      : S === 58 || S === 95 || un(S)
        ? (n.consume(S), de)
        : De(S)
          ? (n.consume(S), U)
          : Ee(S);
  }
  function de(S) {
    return S === 45 || S === 46 || S === 58 || S === 95 || Dt(S) ? (n.consume(S), de) : ye(S);
  }
  function ye(S) {
    return S === 61 ? (n.consume(S), z) : De(S) ? (n.consume(S), ye) : U(S);
  }
  function z(S) {
    return S === null || S === 60 || S === 61 || S === 62 || S === 96
      ? l(S)
      : S === 34 || S === 39
        ? (n.consume(S), (m = S), me)
        : De(S)
          ? (n.consume(S), z)
          : xe(S);
  }
  function me(S) {
    return S === m
      ? (n.consume(S), (m = null), Se)
      : S === null || we(S)
        ? l(S)
        : (n.consume(S), me);
  }
  function xe(S) {
    return S === null ||
      S === 34 ||
      S === 39 ||
      S === 47 ||
      S === 60 ||
      S === 61 ||
      S === 62 ||
      S === 96 ||
      Ct(S)
      ? ye(S)
      : (n.consume(S), xe);
  }
  function Se(S) {
    return S === 47 || S === 62 || De(S) ? U(S) : l(S);
  }
  function Ee(S) {
    return S === 62 ? (n.consume(S), ne) : l(S);
  }
  function ne(S) {
    return S === null || we(S) ? D(S) : De(S) ? (n.consume(S), ne) : l(S);
  }
  function D(S) {
    return S === 45 && a === 2
      ? (n.consume(S), ue)
      : S === 60 && a === 1
        ? (n.consume(S), se)
        : S === 62 && a === 4
          ? (n.consume(S), I)
          : S === 63 && a === 3
            ? (n.consume(S), x)
            : S === 93 && a === 5
              ? (n.consume(S), ee)
              : we(S) && (a === 6 || a === 7)
                ? (n.exit('htmlFlowData'), n.check(Pv, M, J)(S))
                : S === null || we(S)
                  ? (n.exit('htmlFlowData'), J(S))
                  : (n.consume(S), D);
  }
  function J(S) {
    return n.check(bv, X, M)(S);
  }
  function X(S) {
    return (n.enter('lineEnding'), n.consume(S), n.exit('lineEnding'), V);
  }
  function V(S) {
    return S === null || we(S) ? J(S) : (n.enter('htmlFlowData'), D(S));
  }
  function ue(S) {
    return S === 45 ? (n.consume(S), x) : D(S);
  }
  function se(S) {
    return S === 47 ? (n.consume(S), (d = ''), q) : D(S);
  }
  function q(S) {
    if (S === 62) {
      const ae = d.toLowerCase();
      return gd.includes(ae) ? (n.consume(S), I) : D(S);
    }
    return un(S) && d.length < 8 ? (n.consume(S), (d += String.fromCharCode(S)), q) : D(S);
  }
  function ee(S) {
    return S === 93 ? (n.consume(S), x) : D(S);
  }
  function x(S) {
    return S === 62 ? (n.consume(S), I) : S === 45 && a === 2 ? (n.consume(S), x) : D(S);
  }
  function I(S) {
    return S === null || we(S) ? (n.exit('htmlFlowData'), M(S)) : (n.consume(S), I);
  }
  function M(S) {
    return (n.exit('htmlFlow'), i(S));
  }
}
function Av(n, i, l) {
  const s = this;
  return a;
  function a(d) {
    return we(d) ? (n.enter('lineEnding'), n.consume(d), n.exit('lineEnding'), c) : l(d);
  }
  function c(d) {
    return s.parser.lazy[s.now().line] ? l(d) : i(d);
  }
}
function zv(n, i, l) {
  return s;
  function s(a) {
    return (n.enter('lineEnding'), n.consume(a), n.exit('lineEnding'), n.attempt(lo, i, l));
  }
}
const Mv = { name: 'htmlText', tokenize: jv };
function jv(n, i, l) {
  const s = this;
  let a, c, d;
  return p;
  function p(x) {
    return (n.enter('htmlText'), n.enter('htmlTextData'), n.consume(x), m);
  }
  function m(x) {
    return x === 33
      ? (n.consume(x), h)
      : x === 47
        ? (n.consume(x), ye)
        : x === 63
          ? (n.consume(x), U)
          : un(x)
            ? (n.consume(x), xe)
            : l(x);
  }
  function h(x) {
    return x === 45
      ? (n.consume(x), y)
      : x === 91
        ? (n.consume(x), (c = 0), L)
        : un(x)
          ? (n.consume(x), K)
          : l(x);
  }
  function y(x) {
    return x === 45 ? (n.consume(x), w) : l(x);
  }
  function v(x) {
    return x === null
      ? l(x)
      : x === 45
        ? (n.consume(x), k)
        : we(x)
          ? ((d = v), se(x))
          : (n.consume(x), v);
  }
  function k(x) {
    return x === 45 ? (n.consume(x), w) : v(x);
  }
  function w(x) {
    return x === 62 ? ue(x) : x === 45 ? k(x) : v(x);
  }
  function L(x) {
    const I = 'CDATA[';
    return x === I.charCodeAt(c++) ? (n.consume(x), c === I.length ? P : L) : l(x);
  }
  function P(x) {
    return x === null
      ? l(x)
      : x === 93
        ? (n.consume(x), R)
        : we(x)
          ? ((d = P), se(x))
          : (n.consume(x), P);
  }
  function R(x) {
    return x === 93 ? (n.consume(x), A) : P(x);
  }
  function A(x) {
    return x === 62 ? ue(x) : x === 93 ? (n.consume(x), A) : P(x);
  }
  function K(x) {
    return x === null || x === 62 ? ue(x) : we(x) ? ((d = K), se(x)) : (n.consume(x), K);
  }
  function U(x) {
    return x === null
      ? l(x)
      : x === 63
        ? (n.consume(x), de)
        : we(x)
          ? ((d = U), se(x))
          : (n.consume(x), U);
  }
  function de(x) {
    return x === 62 ? ue(x) : U(x);
  }
  function ye(x) {
    return un(x) ? (n.consume(x), z) : l(x);
  }
  function z(x) {
    return x === 45 || Dt(x) ? (n.consume(x), z) : me(x);
  }
  function me(x) {
    return we(x) ? ((d = me), se(x)) : De(x) ? (n.consume(x), me) : ue(x);
  }
  function xe(x) {
    return x === 45 || Dt(x) ? (n.consume(x), xe) : x === 47 || x === 62 || Ct(x) ? Se(x) : l(x);
  }
  function Se(x) {
    return x === 47
      ? (n.consume(x), ue)
      : x === 58 || x === 95 || un(x)
        ? (n.consume(x), Ee)
        : we(x)
          ? ((d = Se), se(x))
          : De(x)
            ? (n.consume(x), Se)
            : ue(x);
  }
  function Ee(x) {
    return x === 45 || x === 46 || x === 58 || x === 95 || Dt(x) ? (n.consume(x), Ee) : ne(x);
  }
  function ne(x) {
    return x === 61
      ? (n.consume(x), D)
      : we(x)
        ? ((d = ne), se(x))
        : De(x)
          ? (n.consume(x), ne)
          : Se(x);
  }
  function D(x) {
    return x === null || x === 60 || x === 61 || x === 62 || x === 96
      ? l(x)
      : x === 34 || x === 39
        ? (n.consume(x), (a = x), J)
        : we(x)
          ? ((d = D), se(x))
          : De(x)
            ? (n.consume(x), D)
            : (n.consume(x), X);
  }
  function J(x) {
    return x === a
      ? (n.consume(x), (a = void 0), V)
      : x === null
        ? l(x)
        : we(x)
          ? ((d = J), se(x))
          : (n.consume(x), J);
  }
  function X(x) {
    return x === null || x === 34 || x === 39 || x === 60 || x === 61 || x === 96
      ? l(x)
      : x === 47 || x === 62 || Ct(x)
        ? Se(x)
        : (n.consume(x), X);
  }
  function V(x) {
    return x === 47 || x === 62 || Ct(x) ? Se(x) : l(x);
  }
  function ue(x) {
    return x === 62 ? (n.consume(x), n.exit('htmlTextData'), n.exit('htmlText'), i) : l(x);
  }
  function se(x) {
    return (n.exit('htmlTextData'), n.enter('lineEnding'), n.consume(x), n.exit('lineEnding'), q);
  }
  function q(x) {
    return De(x)
      ? Fe(
          n,
          ee,
          'linePrefix',
          s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
        )(x)
      : ee(x);
  }
  function ee(x) {
    return (n.enter('htmlTextData'), d(x));
  }
}
const Qu = { name: 'labelEnd', resolveAll: Wv, resolveTo: Vv, tokenize: qv },
  Fv = { tokenize: Hv },
  Bv = { tokenize: $v },
  Uv = { tokenize: Qv };
function Wv(n) {
  let i = -1;
  const l = [];
  for (; ++i < n.length; ) {
    const s = n[i][1];
    if (
      (l.push(n[i]), s.type === 'labelImage' || s.type === 'labelLink' || s.type === 'labelEnd')
    ) {
      const a = s.type === 'labelImage' ? 4 : 2;
      ((s.type = 'data'), (i += a));
    }
  }
  return (n.length !== l.length && an(n, 0, n.length, l), n);
}
function Vv(n, i) {
  let l = n.length,
    s = 0,
    a,
    c,
    d,
    p;
  for (; l--; )
    if (((a = n[l][1]), c)) {
      if (a.type === 'link' || (a.type === 'labelLink' && a._inactive)) break;
      n[l][0] === 'enter' && a.type === 'labelLink' && (a._inactive = !0);
    } else if (d) {
      if (
        n[l][0] === 'enter' &&
        (a.type === 'labelImage' || a.type === 'labelLink') &&
        !a._balanced &&
        ((c = l), a.type !== 'labelLink')
      ) {
        s = 2;
        break;
      }
    } else a.type === 'labelEnd' && (d = l);
  const m = {
      type: n[c][1].type === 'labelLink' ? 'link' : 'image',
      start: { ...n[c][1].start },
      end: { ...n[n.length - 1][1].end },
    },
    h = { type: 'label', start: { ...n[c][1].start }, end: { ...n[d][1].end } },
    y = { type: 'labelText', start: { ...n[c + s + 2][1].end }, end: { ...n[d - 2][1].start } };
  return (
    (p = [
      ['enter', m, i],
      ['enter', h, i],
    ]),
    (p = Wt(p, n.slice(c + 1, c + s + 3))),
    (p = Wt(p, [['enter', y, i]])),
    (p = Wt(p, $u(i.parser.constructs.insideSpan.null, n.slice(c + s + 4, d - 3), i))),
    (p = Wt(p, [['exit', y, i], n[d - 2], n[d - 1], ['exit', h, i]])),
    (p = Wt(p, n.slice(d + 1))),
    (p = Wt(p, [['exit', m, i]])),
    an(n, c, n.length, p),
    n
  );
}
function qv(n, i, l) {
  const s = this;
  let a = s.events.length,
    c,
    d;
  for (; a--; )
    if (
      (s.events[a][1].type === 'labelImage' || s.events[a][1].type === 'labelLink') &&
      !s.events[a][1]._balanced
    ) {
      c = s.events[a][1];
      break;
    }
  return p;
  function p(k) {
    return c
      ? c._inactive
        ? v(k)
        : ((d = s.parser.defined.includes(Vr(s.sliceSerialize({ start: c.end, end: s.now() })))),
          n.enter('labelEnd'),
          n.enter('labelMarker'),
          n.consume(k),
          n.exit('labelMarker'),
          n.exit('labelEnd'),
          m)
      : l(k);
  }
  function m(k) {
    return k === 40
      ? n.attempt(Fv, y, d ? y : v)(k)
      : k === 91
        ? n.attempt(Bv, y, d ? h : v)(k)
        : d
          ? y(k)
          : v(k);
  }
  function h(k) {
    return n.attempt(Uv, y, v)(k);
  }
  function y(k) {
    return i(k);
  }
  function v(k) {
    return ((c._balanced = !0), l(k));
  }
}
function Hv(n, i, l) {
  return s;
  function s(v) {
    return (
      n.enter('resource'),
      n.enter('resourceMarker'),
      n.consume(v),
      n.exit('resourceMarker'),
      a
    );
  }
  function a(v) {
    return Ct(v) ? Di(n, c)(v) : c(v);
  }
  function c(v) {
    return v === 41
      ? y(v)
      : dp(
          n,
          d,
          p,
          'resourceDestination',
          'resourceDestinationLiteral',
          'resourceDestinationLiteralMarker',
          'resourceDestinationRaw',
          'resourceDestinationString',
          32
        )(v);
  }
  function d(v) {
    return Ct(v) ? Di(n, m)(v) : y(v);
  }
  function p(v) {
    return l(v);
  }
  function m(v) {
    return v === 34 || v === 39 || v === 40
      ? hp(n, h, l, 'resourceTitle', 'resourceTitleMarker', 'resourceTitleString')(v)
      : y(v);
  }
  function h(v) {
    return Ct(v) ? Di(n, y)(v) : y(v);
  }
  function y(v) {
    return v === 41
      ? (n.enter('resourceMarker'), n.consume(v), n.exit('resourceMarker'), n.exit('resource'), i)
      : l(v);
  }
}
function $v(n, i, l) {
  const s = this;
  return a;
  function a(p) {
    return pp.call(s, n, c, d, 'reference', 'referenceMarker', 'referenceString')(p);
  }
  function c(p) {
    return s.parser.defined.includes(
      Vr(s.sliceSerialize(s.events[s.events.length - 1][1]).slice(1, -1))
    )
      ? i(p)
      : l(p);
  }
  function d(p) {
    return l(p);
  }
}
function Qv(n, i, l) {
  return s;
  function s(c) {
    return (
      n.enter('reference'),
      n.enter('referenceMarker'),
      n.consume(c),
      n.exit('referenceMarker'),
      a
    );
  }
  function a(c) {
    return c === 93
      ? (n.enter('referenceMarker'),
        n.consume(c),
        n.exit('referenceMarker'),
        n.exit('reference'),
        i)
      : l(c);
  }
}
const Gv = { name: 'labelStartImage', resolveAll: Qu.resolveAll, tokenize: Yv };
function Yv(n, i, l) {
  const s = this;
  return a;
  function a(p) {
    return (
      n.enter('labelImage'),
      n.enter('labelImageMarker'),
      n.consume(p),
      n.exit('labelImageMarker'),
      c
    );
  }
  function c(p) {
    return p === 91
      ? (n.enter('labelMarker'), n.consume(p), n.exit('labelMarker'), n.exit('labelImage'), d)
      : l(p);
  }
  function d(p) {
    return p === 94 && '_hiddenFootnoteSupport' in s.parser.constructs ? l(p) : i(p);
  }
}
const Xv = { name: 'labelStartLink', resolveAll: Qu.resolveAll, tokenize: Kv };
function Kv(n, i, l) {
  const s = this;
  return a;
  function a(d) {
    return (
      n.enter('labelLink'),
      n.enter('labelMarker'),
      n.consume(d),
      n.exit('labelMarker'),
      n.exit('labelLink'),
      c
    );
  }
  function c(d) {
    return d === 94 && '_hiddenFootnoteSupport' in s.parser.constructs ? l(d) : i(d);
  }
}
const lu = { name: 'lineEnding', tokenize: Jv };
function Jv(n, i) {
  return l;
  function l(s) {
    return (n.enter('lineEnding'), n.consume(s), n.exit('lineEnding'), Fe(n, i, 'linePrefix'));
  }
}
const Zl = { name: 'thematicBreak', tokenize: Zv };
function Zv(n, i, l) {
  let s = 0,
    a;
  return c;
  function c(h) {
    return (n.enter('thematicBreak'), d(h));
  }
  function d(h) {
    return ((a = h), p(h));
  }
  function p(h) {
    return h === a
      ? (n.enter('thematicBreakSequence'), m(h))
      : s >= 3 && (h === null || we(h))
        ? (n.exit('thematicBreak'), i(h))
        : l(h);
  }
  function m(h) {
    return h === a
      ? (n.consume(h), s++, m)
      : (n.exit('thematicBreakSequence'), De(h) ? Fe(n, p, 'whitespace')(h) : p(h));
  }
}
const Et = { continuation: { tokenize: r1 }, exit: l1, name: 'list', tokenize: n1 },
  e1 = { partial: !0, tokenize: o1 },
  t1 = { partial: !0, tokenize: i1 };
function n1(n, i, l) {
  const s = this,
    a = s.events[s.events.length - 1];
  let c = a && a[1].type === 'linePrefix' ? a[2].sliceSerialize(a[1], !0).length : 0,
    d = 0;
  return p;
  function p(w) {
    const L =
      s.containerState.type || (w === 42 || w === 43 || w === 45 ? 'listUnordered' : 'listOrdered');
    if (L === 'listUnordered' ? !s.containerState.marker || w === s.containerState.marker : Tu(w)) {
      if (
        (s.containerState.type || ((s.containerState.type = L), n.enter(L, { _container: !0 })),
        L === 'listUnordered')
      )
        return (n.enter('listItemPrefix'), w === 42 || w === 45 ? n.check(Zl, l, h)(w) : h(w));
      if (!s.interrupt || w === 49)
        return (n.enter('listItemPrefix'), n.enter('listItemValue'), m(w));
    }
    return l(w);
  }
  function m(w) {
    return Tu(w) && ++d < 10
      ? (n.consume(w), m)
      : (!s.interrupt || d < 2) &&
          (s.containerState.marker ? w === s.containerState.marker : w === 41 || w === 46)
        ? (n.exit('listItemValue'), h(w))
        : l(w);
  }
  function h(w) {
    return (
      n.enter('listItemMarker'),
      n.consume(w),
      n.exit('listItemMarker'),
      (s.containerState.marker = s.containerState.marker || w),
      n.check(lo, s.interrupt ? l : y, n.attempt(e1, k, v))
    );
  }
  function y(w) {
    return ((s.containerState.initialBlankLine = !0), c++, k(w));
  }
  function v(w) {
    return De(w)
      ? (n.enter('listItemPrefixWhitespace'), n.consume(w), n.exit('listItemPrefixWhitespace'), k)
      : l(w);
  }
  function k(w) {
    return (
      (s.containerState.size = c + s.sliceSerialize(n.exit('listItemPrefix'), !0).length),
      i(w)
    );
  }
}
function r1(n, i, l) {
  const s = this;
  return ((s.containerState._closeFlow = void 0), n.check(lo, a, c));
  function a(p) {
    return (
      (s.containerState.furtherBlankLines =
        s.containerState.furtherBlankLines || s.containerState.initialBlankLine),
      Fe(n, i, 'listItemIndent', s.containerState.size + 1)(p)
    );
  }
  function c(p) {
    return s.containerState.furtherBlankLines || !De(p)
      ? ((s.containerState.furtherBlankLines = void 0),
        (s.containerState.initialBlankLine = void 0),
        d(p))
      : ((s.containerState.furtherBlankLines = void 0),
        (s.containerState.initialBlankLine = void 0),
        n.attempt(t1, i, d)(p));
  }
  function d(p) {
    return (
      (s.containerState._closeFlow = !0),
      (s.interrupt = void 0),
      Fe(
        n,
        n.attempt(Et, i, l),
        'linePrefix',
        s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
      )(p)
    );
  }
}
function i1(n, i, l) {
  const s = this;
  return Fe(n, a, 'listItemIndent', s.containerState.size + 1);
  function a(c) {
    const d = s.events[s.events.length - 1];
    return d &&
      d[1].type === 'listItemIndent' &&
      d[2].sliceSerialize(d[1], !0).length === s.containerState.size
      ? i(c)
      : l(c);
  }
}
function l1(n) {
  n.exit(this.containerState.type);
}
function o1(n, i, l) {
  const s = this;
  return Fe(
    n,
    a,
    'listItemPrefixWhitespace',
    s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 5
  );
  function a(c) {
    const d = s.events[s.events.length - 1];
    return !De(c) && d && d[1].type === 'listItemPrefixWhitespace' ? i(c) : l(c);
  }
}
const yd = { name: 'setextUnderline', resolveTo: s1, tokenize: u1 };
function s1(n, i) {
  let l = n.length,
    s,
    a,
    c;
  for (; l--; )
    if (n[l][0] === 'enter') {
      if (n[l][1].type === 'content') {
        s = l;
        break;
      }
      n[l][1].type === 'paragraph' && (a = l);
    } else
      (n[l][1].type === 'content' && n.splice(l, 1),
        !c && n[l][1].type === 'definition' && (c = l));
  const d = {
    type: 'setextHeading',
    start: { ...n[s][1].start },
    end: { ...n[n.length - 1][1].end },
  };
  return (
    (n[a][1].type = 'setextHeadingText'),
    c
      ? (n.splice(a, 0, ['enter', d, i]),
        n.splice(c + 1, 0, ['exit', n[s][1], i]),
        (n[s][1].end = { ...n[c][1].end }))
      : (n[s][1] = d),
    n.push(['exit', d, i]),
    n
  );
}
function u1(n, i, l) {
  const s = this;
  let a;
  return c;
  function c(h) {
    let y = s.events.length,
      v;
    for (; y--; )
      if (
        s.events[y][1].type !== 'lineEnding' &&
        s.events[y][1].type !== 'linePrefix' &&
        s.events[y][1].type !== 'content'
      ) {
        v = s.events[y][1].type === 'paragraph';
        break;
      }
    return !s.parser.lazy[s.now().line] && (s.interrupt || v)
      ? (n.enter('setextHeadingLine'), (a = h), d(h))
      : l(h);
  }
  function d(h) {
    return (n.enter('setextHeadingLineSequence'), p(h));
  }
  function p(h) {
    return h === a
      ? (n.consume(h), p)
      : (n.exit('setextHeadingLineSequence'), De(h) ? Fe(n, m, 'lineSuffix')(h) : m(h));
  }
  function m(h) {
    return h === null || we(h) ? (n.exit('setextHeadingLine'), i(h)) : l(h);
  }
}
const a1 = { tokenize: c1 };
function c1(n) {
  const i = this,
    l = n.attempt(
      lo,
      s,
      n.attempt(
        this.parser.constructs.flowInitial,
        a,
        Fe(n, n.attempt(this.parser.constructs.flow, a, n.attempt(mv, a)), 'linePrefix')
      )
    );
  return l;
  function s(c) {
    if (c === null) {
      n.consume(c);
      return;
    }
    return (
      n.enter('lineEndingBlank'),
      n.consume(c),
      n.exit('lineEndingBlank'),
      (i.currentConstruct = void 0),
      l
    );
  }
  function a(c) {
    if (c === null) {
      n.consume(c);
      return;
    }
    return (
      n.enter('lineEnding'),
      n.consume(c),
      n.exit('lineEnding'),
      (i.currentConstruct = void 0),
      l
    );
  }
}
const f1 = { resolveAll: gp() },
  d1 = mp('string'),
  p1 = mp('text');
function mp(n) {
  return { resolveAll: gp(n === 'text' ? h1 : void 0), tokenize: i };
  function i(l) {
    const s = this,
      a = this.parser.constructs[n],
      c = l.attempt(a, d, p);
    return d;
    function d(y) {
      return h(y) ? c(y) : p(y);
    }
    function p(y) {
      if (y === null) {
        l.consume(y);
        return;
      }
      return (l.enter('data'), l.consume(y), m);
    }
    function m(y) {
      return h(y) ? (l.exit('data'), c(y)) : (l.consume(y), m);
    }
    function h(y) {
      if (y === null) return !0;
      const v = a[y];
      let k = -1;
      if (v)
        for (; ++k < v.length; ) {
          const w = v[k];
          if (!w.previous || w.previous.call(s, s.previous)) return !0;
        }
      return !1;
    }
  }
}
function gp(n) {
  return i;
  function i(l, s) {
    let a = -1,
      c;
    for (; ++a <= l.length; )
      c === void 0
        ? l[a] && l[a][1].type === 'data' && ((c = a), a++)
        : (!l[a] || l[a][1].type !== 'data') &&
          (a !== c + 2 &&
            ((l[c][1].end = l[a - 1][1].end), l.splice(c + 2, a - c - 2), (a = c + 2)),
          (c = void 0));
    return n ? n(l, s) : l;
  }
}
function h1(n, i) {
  let l = 0;
  for (; ++l <= n.length; )
    if ((l === n.length || n[l][1].type === 'lineEnding') && n[l - 1][1].type === 'data') {
      const s = n[l - 1][1],
        a = i.sliceStream(s);
      let c = a.length,
        d = -1,
        p = 0,
        m;
      for (; c--; ) {
        const h = a[c];
        if (typeof h == 'string') {
          for (d = h.length; h.charCodeAt(d - 1) === 32; ) (p++, d--);
          if (d) break;
          d = -1;
        } else if (h === -2) ((m = !0), p++);
        else if (h !== -1) {
          c++;
          break;
        }
      }
      if ((i._contentTypeTextTrailing && l === n.length && (p = 0), p)) {
        const h = {
          type: l === n.length || m || p < 2 ? 'lineSuffix' : 'hardBreakTrailing',
          start: {
            _bufferIndex: c ? d : s.start._bufferIndex + d,
            _index: s.start._index + c,
            line: s.end.line,
            column: s.end.column - p,
            offset: s.end.offset - p,
          },
          end: { ...s.end },
        };
        ((s.end = { ...h.start }),
          s.start.offset === s.end.offset
            ? Object.assign(s, h)
            : (n.splice(l, 0, ['enter', h, i], ['exit', h, i]), (l += 2)));
      }
      l++;
    }
  return n;
}
const m1 = {
    42: Et,
    43: Et,
    45: Et,
    48: Et,
    49: Et,
    50: Et,
    51: Et,
    52: Et,
    53: Et,
    54: Et,
    55: Et,
    56: Et,
    57: Et,
    62: up,
  },
  g1 = { 91: kv },
  y1 = { [-2]: iu, [-1]: iu, 32: iu },
  v1 = { 35: Iv, 42: Zl, 45: [yd, Zl], 60: Ov, 61: yd, 95: Zl, 96: md, 126: md },
  w1 = { 38: cp, 92: ap },
  k1 = {
    [-5]: lu,
    [-4]: lu,
    [-3]: lu,
    33: Gv,
    38: cp,
    42: Nu,
    60: [Xy, Mv],
    91: Xv,
    92: [Cv, ap],
    93: Qu,
    95: Nu,
    96: av,
  },
  x1 = { null: [Nu, f1] },
  S1 = { null: [42, 95] },
  E1 = { null: [] },
  C1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: S1,
        contentInitial: g1,
        disable: E1,
        document: m1,
        flow: v1,
        flowInitial: y1,
        insideSpan: x1,
        string: w1,
        text: k1,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
function _1(n, i, l) {
  let s = {
    _bufferIndex: -1,
    _index: 0,
    line: (l && l.line) || 1,
    column: (l && l.column) || 1,
    offset: (l && l.offset) || 0,
  };
  const a = {},
    c = [];
  let d = [],
    p = [];
  const m = {
      attempt: me(ye),
      check: me(z),
      consume: K,
      enter: U,
      exit: de,
      interrupt: me(z, { interrupt: !0 }),
    },
    h = {
      code: null,
      containerState: {},
      defineSkip: P,
      events: [],
      now: L,
      parser: n,
      previous: null,
      sliceSerialize: k,
      sliceStream: w,
      write: v,
    };
  let y = i.tokenize.call(h, m);
  return (i.resolveAll && c.push(i), h);
  function v(ne) {
    return (
      (d = Wt(d, ne)),
      R(),
      d[d.length - 1] !== null ? [] : (xe(i, 0), (h.events = $u(c, h.events, h)), h.events)
    );
  }
  function k(ne, D) {
    return T1(w(ne), D);
  }
  function w(ne) {
    return I1(d, ne);
  }
  function L() {
    const { _bufferIndex: ne, _index: D, line: J, column: X, offset: V } = s;
    return { _bufferIndex: ne, _index: D, line: J, column: X, offset: V };
  }
  function P(ne) {
    ((a[ne.line] = ne.column), Ee());
  }
  function R() {
    let ne;
    for (; s._index < d.length; ) {
      const D = d[s._index];
      if (typeof D == 'string')
        for (
          ne = s._index, s._bufferIndex < 0 && (s._bufferIndex = 0);
          s._index === ne && s._bufferIndex < D.length;
        )
          A(D.charCodeAt(s._bufferIndex));
      else A(D);
    }
  }
  function A(ne) {
    y = y(ne);
  }
  function K(ne) {
    (we(ne)
      ? (s.line++, (s.column = 1), (s.offset += ne === -3 ? 2 : 1), Ee())
      : ne !== -1 && (s.column++, s.offset++),
      s._bufferIndex < 0
        ? s._index++
        : (s._bufferIndex++,
          s._bufferIndex === d[s._index].length && ((s._bufferIndex = -1), s._index++)),
      (h.previous = ne));
  }
  function U(ne, D) {
    const J = D || {};
    return ((J.type = ne), (J.start = L()), h.events.push(['enter', J, h]), p.push(J), J);
  }
  function de(ne) {
    const D = p.pop();
    return ((D.end = L()), h.events.push(['exit', D, h]), D);
  }
  function ye(ne, D) {
    xe(ne, D.from);
  }
  function z(ne, D) {
    D.restore();
  }
  function me(ne, D) {
    return J;
    function J(X, V, ue) {
      let se, q, ee, x;
      return Array.isArray(X) ? M(X) : 'tokenize' in X ? M([X]) : I(X);
      function I(fe) {
        return Oe;
        function Oe(Ce) {
          const Te = Ce !== null && fe[Ce],
            qe = Ce !== null && fe.null,
            It = [
              ...(Array.isArray(Te) ? Te : Te ? [Te] : []),
              ...(Array.isArray(qe) ? qe : qe ? [qe] : []),
            ];
          return M(It)(Ce);
        }
      }
      function M(fe) {
        return ((se = fe), (q = 0), fe.length === 0 ? ue : S(fe[q]));
      }
      function S(fe) {
        return Oe;
        function Oe(Ce) {
          return (
            (x = Se()),
            (ee = fe),
            fe.partial || (h.currentConstruct = fe),
            fe.name && h.parser.constructs.disable.null.includes(fe.name)
              ? ke()
              : fe.tokenize.call(D ? Object.assign(Object.create(h), D) : h, m, ae, ke)(Ce)
          );
        }
      }
      function ae(fe) {
        return (ne(ee, x), V);
      }
      function ke(fe) {
        return (x.restore(), ++q < se.length ? S(se[q]) : ue);
      }
    }
  }
  function xe(ne, D) {
    (ne.resolveAll && !c.includes(ne) && c.push(ne),
      ne.resolve && an(h.events, D, h.events.length - D, ne.resolve(h.events.slice(D), h)),
      ne.resolveTo && (h.events = ne.resolveTo(h.events, h)));
  }
  function Se() {
    const ne = L(),
      D = h.previous,
      J = h.currentConstruct,
      X = h.events.length,
      V = Array.from(p);
    return { from: X, restore: ue };
    function ue() {
      ((s = ne), (h.previous = D), (h.currentConstruct = J), (h.events.length = X), (p = V), Ee());
    }
  }
  function Ee() {
    s.line in a && s.column < 2 && ((s.column = a[s.line]), (s.offset += a[s.line] - 1));
  }
}
function I1(n, i) {
  const l = i.start._index,
    s = i.start._bufferIndex,
    a = i.end._index,
    c = i.end._bufferIndex;
  let d;
  if (l === a) d = [n[l].slice(s, c)];
  else {
    if (((d = n.slice(l, a)), s > -1)) {
      const p = d[0];
      typeof p == 'string' ? (d[0] = p.slice(s)) : d.shift();
    }
    c > 0 && d.push(n[a].slice(0, c));
  }
  return d;
}
function T1(n, i) {
  let l = -1;
  const s = [];
  let a;
  for (; ++l < n.length; ) {
    const c = n[l];
    let d;
    if (typeof c == 'string') d = c;
    else
      switch (c) {
        case -5: {
          d = '\r';
          break;
        }
        case -4: {
          d = `
`;
          break;
        }
        case -3: {
          d = `\r
`;
          break;
        }
        case -2: {
          d = i ? ' ' : '	';
          break;
        }
        case -1: {
          if (!i && a) continue;
          d = ' ';
          break;
        }
        default:
          d = String.fromCharCode(c);
      }
    ((a = c === -2), s.push(d));
  }
  return s.join('');
}
function N1(n) {
  const s = {
    constructs: Ay([C1, ...((n || {}).extensions || [])]),
    content: a(Vy),
    defined: [],
    document: a(Hy),
    flow: a(a1),
    lazy: {},
    string: a(d1),
    text: a(p1),
  };
  return s;
  function a(c) {
    return d;
    function d(p) {
      return _1(s, c, p);
    }
  }
}
function L1(n) {
  for (; !fp(n); );
  return n;
}
const vd = /[\0\t\n\r]/g;
function O1() {
  let n = 1,
    i = '',
    l = !0,
    s;
  return a;
  function a(c, d, p) {
    const m = [];
    let h, y, v, k, w;
    for (
      c = i + (typeof c == 'string' ? c.toString() : new TextDecoder(d || void 0).decode(c)),
        v = 0,
        i = '',
        l && (c.charCodeAt(0) === 65279 && v++, (l = void 0));
      v < c.length;
    ) {
      if (
        ((vd.lastIndex = v),
        (h = vd.exec(c)),
        (k = h && h.index !== void 0 ? h.index : c.length),
        (w = c.charCodeAt(k)),
        !h)
      ) {
        i = c.slice(v);
        break;
      }
      if (w === 10 && v === k && s) (m.push(-3), (s = void 0));
      else
        switch (
          (s && (m.push(-5), (s = void 0)), v < k && (m.push(c.slice(v, k)), (n += k - v)), w)
        ) {
          case 0: {
            (m.push(65533), n++);
            break;
          }
          case 9: {
            for (y = Math.ceil(n / 4) * 4, m.push(-2); n++ < y; ) m.push(-1);
            break;
          }
          case 10: {
            (m.push(-4), (n = 1));
            break;
          }
          default:
            ((s = !0), (n = 1));
        }
      v = k + 1;
    }
    return (p && (s && m.push(-5), i && m.push(i), m.push(null)), m);
  }
}
const P1 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function b1(n) {
  return n.replace(P1, R1);
}
function R1(n, i, l) {
  if (i) return i;
  if (l.charCodeAt(0) === 35) {
    const a = l.charCodeAt(1),
      c = a === 120 || a === 88;
    return sp(l.slice(c ? 2 : 1), c ? 16 : 10);
  }
  return Hu(l) || n;
}
const yp = {}.hasOwnProperty;
function D1(n, i, l) {
  return (
    typeof i != 'string' && ((l = i), (i = void 0)),
    A1(l)(
      L1(
        N1(l)
          .document()
          .write(O1()(n, i, !0))
      )
    )
  );
}
function A1(n) {
  const i = {
    transforms: [],
    canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
    enter: {
      autolink: c(dn),
      autolinkProtocol: Se,
      autolinkEmail: Se,
      atxHeading: c(Cn),
      blockQuote: c(qe),
      characterEscape: Se,
      characterReference: Se,
      codeFenced: c(It),
      codeFencedFenceInfo: d,
      codeFencedFenceMeta: d,
      codeIndented: c(It, d),
      codeText: c(hr, d),
      codeTextData: Se,
      data: Se,
      codeFlowValue: Se,
      definition: c(cn),
      definitionDestinationString: d,
      definitionLabelString: d,
      definitionTitleString: d,
      emphasis: c(He),
      hardBreakEscape: c(Jt),
      hardBreakTrailing: c(Jt),
      htmlFlow: c(fn, d),
      htmlFlowData: Se,
      htmlText: c(fn, d),
      htmlTextData: Se,
      image: c(Xn),
      label: d,
      link: c(dn),
      listItem: c(Q),
      listItemValue: k,
      listOrdered: c(Zt, v),
      listUnordered: c(Zt),
      paragraph: c(ce),
      reference: S,
      referenceString: d,
      resourceDestinationString: d,
      resourceTitleString: d,
      setextHeading: c(Cn),
      strong: c(Ae),
      thematicBreak: c(Vt),
    },
    exit: {
      atxHeading: m(),
      atxHeadingSequence: ye,
      autolink: m(),
      autolinkEmail: Te,
      autolinkProtocol: Ce,
      blockQuote: m(),
      characterEscapeValue: Ee,
      characterReferenceMarkerHexadecimal: ke,
      characterReferenceMarkerNumeric: ke,
      characterReferenceValue: fe,
      characterReference: Oe,
      codeFenced: m(R),
      codeFencedFence: P,
      codeFencedFenceInfo: w,
      codeFencedFenceMeta: L,
      codeFlowValue: Ee,
      codeIndented: m(A),
      codeText: m(V),
      codeTextData: Ee,
      data: Ee,
      definition: m(),
      definitionDestinationString: de,
      definitionLabelString: K,
      definitionTitleString: U,
      emphasis: m(),
      hardBreakEscape: m(D),
      hardBreakTrailing: m(D),
      htmlFlow: m(J),
      htmlFlowData: Ee,
      htmlText: m(X),
      htmlTextData: Ee,
      image: m(se),
      label: ee,
      labelText: q,
      lineEnding: ne,
      link: m(ue),
      listItem: m(),
      listOrdered: m(),
      listUnordered: m(),
      paragraph: m(),
      referenceString: ae,
      resourceDestinationString: x,
      resourceTitleString: I,
      resource: M,
      setextHeading: m(xe),
      setextHeadingLineSequence: me,
      setextHeadingText: z,
      strong: m(),
      thematicBreak: m(),
    },
  };
  vp(i, (n || {}).mdastExtensions || []);
  const l = {};
  return s;
  function s(b) {
    let G = { type: 'root', children: [] };
    const ge = {
        stack: [G],
        tokenStack: [],
        config: i,
        enter: p,
        exit: h,
        buffer: d,
        resume: y,
        data: l,
      },
      Ne = [];
    let Pe = -1;
    for (; ++Pe < b.length; )
      if (b[Pe][1].type === 'listOrdered' || b[Pe][1].type === 'listUnordered')
        if (b[Pe][0] === 'enter') Ne.push(Pe);
        else {
          const lt = Ne.pop();
          Pe = a(b, lt, Pe);
        }
    for (Pe = -1; ++Pe < b.length; ) {
      const lt = i[b[Pe][0]];
      yp.call(lt, b[Pe][1].type) &&
        lt[b[Pe][1].type].call(
          Object.assign({ sliceSerialize: b[Pe][2].sliceSerialize }, ge),
          b[Pe][1]
        );
    }
    if (ge.tokenStack.length > 0) {
      const lt = ge.tokenStack[ge.tokenStack.length - 1];
      (lt[1] || wd).call(ge, void 0, lt[0]);
    }
    for (
      G.position = {
        start: Qn(b.length > 0 ? b[0][1].start : { line: 1, column: 1, offset: 0 }),
        end: Qn(b.length > 0 ? b[b.length - 2][1].end : { line: 1, column: 1, offset: 0 }),
      },
        Pe = -1;
      ++Pe < i.transforms.length;
    )
      G = i.transforms[Pe](G) || G;
    return G;
  }
  function a(b, G, ge) {
    let Ne = G - 1,
      Pe = -1,
      lt = !1,
      pn,
      At,
      _n,
      Kn;
    for (; ++Ne <= ge; ) {
      const ot = b[Ne];
      switch (ot[1].type) {
        case 'listUnordered':
        case 'listOrdered':
        case 'blockQuote': {
          (ot[0] === 'enter' ? Pe++ : Pe--, (Kn = void 0));
          break;
        }
        case 'lineEndingBlank': {
          ot[0] === 'enter' && (pn && !Kn && !Pe && !_n && (_n = Ne), (Kn = void 0));
          break;
        }
        case 'linePrefix':
        case 'listItemValue':
        case 'listItemMarker':
        case 'listItemPrefix':
        case 'listItemPrefixWhitespace':
          break;
        default:
          Kn = void 0;
      }
      if (
        (!Pe && ot[0] === 'enter' && ot[1].type === 'listItemPrefix') ||
        (Pe === -1 &&
          ot[0] === 'exit' &&
          (ot[1].type === 'listUnordered' || ot[1].type === 'listOrdered'))
      ) {
        if (pn) {
          let en = Ne;
          for (At = void 0; en--; ) {
            const Tt = b[en];
            if (Tt[1].type === 'lineEnding' || Tt[1].type === 'lineEndingBlank') {
              if (Tt[0] === 'exit') continue;
              (At && ((b[At][1].type = 'lineEndingBlank'), (lt = !0)),
                (Tt[1].type = 'lineEnding'),
                (At = en));
            } else if (
              !(
                Tt[1].type === 'linePrefix' ||
                Tt[1].type === 'blockQuotePrefix' ||
                Tt[1].type === 'blockQuotePrefixWhitespace' ||
                Tt[1].type === 'blockQuoteMarker' ||
                Tt[1].type === 'listItemIndent'
              )
            )
              break;
          }
          (_n && (!At || _n < At) && (pn._spread = !0),
            (pn.end = Object.assign({}, At ? b[At][1].start : ot[1].end)),
            b.splice(At || Ne, 0, ['exit', pn, ot[2]]),
            Ne++,
            ge++);
        }
        if (ot[1].type === 'listItemPrefix') {
          const en = {
            type: 'listItem',
            _spread: !1,
            start: Object.assign({}, ot[1].start),
            end: void 0,
          };
          ((pn = en), b.splice(Ne, 0, ['enter', en, ot[2]]), Ne++, ge++, (_n = void 0), (Kn = !0));
        }
      }
    }
    return ((b[G][1]._spread = lt), ge);
  }
  function c(b, G) {
    return ge;
    function ge(Ne) {
      (p.call(this, b(Ne), Ne), G && G.call(this, Ne));
    }
  }
  function d() {
    this.stack.push({ type: 'fragment', children: [] });
  }
  function p(b, G, ge) {
    (this.stack[this.stack.length - 1].children.push(b),
      this.stack.push(b),
      this.tokenStack.push([G, ge || void 0]),
      (b.position = { start: Qn(G.start), end: void 0 }));
  }
  function m(b) {
    return G;
    function G(ge) {
      (b && b.call(this, ge), h.call(this, ge));
    }
  }
  function h(b, G) {
    const ge = this.stack.pop(),
      Ne = this.tokenStack.pop();
    if (Ne)
      Ne[0].type !== b.type && (G ? G.call(this, b, Ne[0]) : (Ne[1] || wd).call(this, b, Ne[0]));
    else
      throw new Error(
        'Cannot close `' + b.type + '` (' + Ri({ start: b.start, end: b.end }) + '): it’s not open'
      );
    ge.position.end = Qn(b.end);
  }
  function y() {
    return Ry(this.stack.pop());
  }
  function v() {
    this.data.expectingFirstListItemValue = !0;
  }
  function k(b) {
    if (this.data.expectingFirstListItemValue) {
      const G = this.stack[this.stack.length - 2];
      ((G.start = Number.parseInt(this.sliceSerialize(b), 10)),
        (this.data.expectingFirstListItemValue = void 0));
    }
  }
  function w() {
    const b = this.resume(),
      G = this.stack[this.stack.length - 1];
    G.lang = b;
  }
  function L() {
    const b = this.resume(),
      G = this.stack[this.stack.length - 1];
    G.meta = b;
  }
  function P() {
    this.data.flowCodeInside || (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function R() {
    const b = this.resume(),
      G = this.stack[this.stack.length - 1];
    ((G.value = b.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '')), (this.data.flowCodeInside = void 0));
  }
  function A() {
    const b = this.resume(),
      G = this.stack[this.stack.length - 1];
    G.value = b.replace(/(\r?\n|\r)$/g, '');
  }
  function K(b) {
    const G = this.resume(),
      ge = this.stack[this.stack.length - 1];
    ((ge.label = G), (ge.identifier = Vr(this.sliceSerialize(b)).toLowerCase()));
  }
  function U() {
    const b = this.resume(),
      G = this.stack[this.stack.length - 1];
    G.title = b;
  }
  function de() {
    const b = this.resume(),
      G = this.stack[this.stack.length - 1];
    G.url = b;
  }
  function ye(b) {
    const G = this.stack[this.stack.length - 1];
    if (!G.depth) {
      const ge = this.sliceSerialize(b).length;
      G.depth = ge;
    }
  }
  function z() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function me(b) {
    const G = this.stack[this.stack.length - 1];
    G.depth = this.sliceSerialize(b).codePointAt(0) === 61 ? 1 : 2;
  }
  function xe() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function Se(b) {
    const ge = this.stack[this.stack.length - 1].children;
    let Ne = ge[ge.length - 1];
    ((!Ne || Ne.type !== 'text') &&
      ((Ne = We()), (Ne.position = { start: Qn(b.start), end: void 0 }), ge.push(Ne)),
      this.stack.push(Ne));
  }
  function Ee(b) {
    const G = this.stack.pop();
    ((G.value += this.sliceSerialize(b)), (G.position.end = Qn(b.end)));
  }
  function ne(b) {
    const G = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const ge = G.children[G.children.length - 1];
      ((ge.position.end = Qn(b.end)), (this.data.atHardBreak = void 0));
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      i.canContainEols.includes(G.type) &&
      (Se.call(this, b), Ee.call(this, b));
  }
  function D() {
    this.data.atHardBreak = !0;
  }
  function J() {
    const b = this.resume(),
      G = this.stack[this.stack.length - 1];
    G.value = b;
  }
  function X() {
    const b = this.resume(),
      G = this.stack[this.stack.length - 1];
    G.value = b;
  }
  function V() {
    const b = this.resume(),
      G = this.stack[this.stack.length - 1];
    G.value = b;
  }
  function ue() {
    const b = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const G = this.data.referenceType || 'shortcut';
      ((b.type += 'Reference'), (b.referenceType = G), delete b.url, delete b.title);
    } else (delete b.identifier, delete b.label);
    this.data.referenceType = void 0;
  }
  function se() {
    const b = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const G = this.data.referenceType || 'shortcut';
      ((b.type += 'Reference'), (b.referenceType = G), delete b.url, delete b.title);
    } else (delete b.identifier, delete b.label);
    this.data.referenceType = void 0;
  }
  function q(b) {
    const G = this.sliceSerialize(b),
      ge = this.stack[this.stack.length - 2];
    ((ge.label = b1(G)), (ge.identifier = Vr(G).toLowerCase()));
  }
  function ee() {
    const b = this.stack[this.stack.length - 1],
      G = this.resume(),
      ge = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), ge.type === 'link')) {
      const Ne = b.children;
      ge.children = Ne;
    } else ge.alt = G;
  }
  function x() {
    const b = this.resume(),
      G = this.stack[this.stack.length - 1];
    G.url = b;
  }
  function I() {
    const b = this.resume(),
      G = this.stack[this.stack.length - 1];
    G.title = b;
  }
  function M() {
    this.data.inReference = void 0;
  }
  function S() {
    this.data.referenceType = 'collapsed';
  }
  function ae(b) {
    const G = this.resume(),
      ge = this.stack[this.stack.length - 1];
    ((ge.label = G),
      (ge.identifier = Vr(this.sliceSerialize(b)).toLowerCase()),
      (this.data.referenceType = 'full'));
  }
  function ke(b) {
    this.data.characterReferenceType = b.type;
  }
  function fe(b) {
    const G = this.sliceSerialize(b),
      ge = this.data.characterReferenceType;
    let Ne;
    ge
      ? ((Ne = sp(G, ge === 'characterReferenceMarkerNumeric' ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (Ne = Hu(G));
    const Pe = this.stack[this.stack.length - 1];
    Pe.value += Ne;
  }
  function Oe(b) {
    const G = this.stack.pop();
    G.position.end = Qn(b.end);
  }
  function Ce(b) {
    Ee.call(this, b);
    const G = this.stack[this.stack.length - 1];
    G.url = this.sliceSerialize(b);
  }
  function Te(b) {
    Ee.call(this, b);
    const G = this.stack[this.stack.length - 1];
    G.url = 'mailto:' + this.sliceSerialize(b);
  }
  function qe() {
    return { type: 'blockquote', children: [] };
  }
  function It() {
    return { type: 'code', lang: null, meta: null, value: '' };
  }
  function hr() {
    return { type: 'inlineCode', value: '' };
  }
  function cn() {
    return { type: 'definition', identifier: '', label: null, title: null, url: '' };
  }
  function He() {
    return { type: 'emphasis', children: [] };
  }
  function Cn() {
    return { type: 'heading', depth: 0, children: [] };
  }
  function Jt() {
    return { type: 'break' };
  }
  function fn() {
    return { type: 'html', value: '' };
  }
  function Xn() {
    return { type: 'image', title: null, url: '', alt: null };
  }
  function dn() {
    return { type: 'link', title: null, url: '', children: [] };
  }
  function Zt(b) {
    return {
      type: 'list',
      ordered: b.type === 'listOrdered',
      start: null,
      spread: b._spread,
      children: [],
    };
  }
  function Q(b) {
    return { type: 'listItem', spread: b._spread, checked: null, children: [] };
  }
  function ce() {
    return { type: 'paragraph', children: [] };
  }
  function Ae() {
    return { type: 'strong', children: [] };
  }
  function We() {
    return { type: 'text', value: '' };
  }
  function Vt() {
    return { type: 'thematicBreak' };
  }
}
function Qn(n) {
  return { line: n.line, column: n.column, offset: n.offset };
}
function vp(n, i) {
  let l = -1;
  for (; ++l < i.length; ) {
    const s = i[l];
    Array.isArray(s) ? vp(n, s) : z1(n, s);
  }
}
function z1(n, i) {
  let l;
  for (l in i)
    if (yp.call(i, l))
      switch (l) {
        case 'canContainEols': {
          const s = i[l];
          s && n[l].push(...s);
          break;
        }
        case 'transforms': {
          const s = i[l];
          s && n[l].push(...s);
          break;
        }
        case 'enter':
        case 'exit': {
          const s = i[l];
          s && Object.assign(n[l], s);
          break;
        }
      }
}
function wd(n, i) {
  throw n
    ? new Error(
        'Cannot close `' +
          n.type +
          '` (' +
          Ri({ start: n.start, end: n.end }) +
          '): a different token (`' +
          i.type +
          '`, ' +
          Ri({ start: i.start, end: i.end }) +
          ') is open'
      )
    : new Error(
        'Cannot close document, a token (`' +
          i.type +
          '`, ' +
          Ri({ start: i.start, end: i.end }) +
          ') is still open'
      );
}
function M1(n) {
  const i = this;
  i.parser = l;
  function l(s) {
    return D1(s, {
      ...i.data('settings'),
      ...n,
      extensions: i.data('micromarkExtensions') || [],
      mdastExtensions: i.data('fromMarkdownExtensions') || [],
    });
  }
}
function j1(n, i) {
  const l = {
    type: 'element',
    tagName: 'blockquote',
    properties: {},
    children: n.wrap(n.all(i), !0),
  };
  return (n.patch(i, l), n.applyData(i, l));
}
function F1(n, i) {
  const l = { type: 'element', tagName: 'br', properties: {}, children: [] };
  return (
    n.patch(i, l),
    [
      n.applyData(i, l),
      {
        type: 'text',
        value: `
`,
      },
    ]
  );
}
function B1(n, i) {
  const l = i.value
      ? i.value +
        `
`
      : '',
    s = {},
    a = i.lang ? i.lang.split(/\s+/) : [];
  a.length > 0 && (s.className = ['language-' + a[0]]);
  let c = {
    type: 'element',
    tagName: 'code',
    properties: s,
    children: [{ type: 'text', value: l }],
  };
  return (
    i.meta && (c.data = { meta: i.meta }),
    n.patch(i, c),
    (c = n.applyData(i, c)),
    (c = { type: 'element', tagName: 'pre', properties: {}, children: [c] }),
    n.patch(i, c),
    c
  );
}
function U1(n, i) {
  const l = { type: 'element', tagName: 'del', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function W1(n, i) {
  const l = { type: 'element', tagName: 'em', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function V1(n, i) {
  const l = typeof n.options.clobberPrefix == 'string' ? n.options.clobberPrefix : 'user-content-',
    s = String(i.identifier).toUpperCase(),
    a = Hr(s.toLowerCase()),
    c = n.footnoteOrder.indexOf(s);
  let d,
    p = n.footnoteCounts.get(s);
  (p === void 0 ? ((p = 0), n.footnoteOrder.push(s), (d = n.footnoteOrder.length)) : (d = c + 1),
    (p += 1),
    n.footnoteCounts.set(s, p));
  const m = {
    type: 'element',
    tagName: 'a',
    properties: {
      href: '#' + l + 'fn-' + a,
      id: l + 'fnref-' + a + (p > 1 ? '-' + p : ''),
      dataFootnoteRef: !0,
      ariaDescribedBy: ['footnote-label'],
    },
    children: [{ type: 'text', value: String(d) }],
  };
  n.patch(i, m);
  const h = { type: 'element', tagName: 'sup', properties: {}, children: [m] };
  return (n.patch(i, h), n.applyData(i, h));
}
function q1(n, i) {
  const l = { type: 'element', tagName: 'h' + i.depth, properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function H1(n, i) {
  if (n.options.allowDangerousHtml) {
    const l = { type: 'raw', value: i.value };
    return (n.patch(i, l), n.applyData(i, l));
  }
}
function wp(n, i) {
  const l = i.referenceType;
  let s = ']';
  if (
    (l === 'collapsed' ? (s += '[]') : l === 'full' && (s += '[' + (i.label || i.identifier) + ']'),
    i.type === 'imageReference')
  )
    return [{ type: 'text', value: '![' + i.alt + s }];
  const a = n.all(i),
    c = a[0];
  c && c.type === 'text' ? (c.value = '[' + c.value) : a.unshift({ type: 'text', value: '[' });
  const d = a[a.length - 1];
  return (d && d.type === 'text' ? (d.value += s) : a.push({ type: 'text', value: s }), a);
}
function $1(n, i) {
  const l = String(i.identifier).toUpperCase(),
    s = n.definitionById.get(l);
  if (!s) return wp(n, i);
  const a = { src: Hr(s.url || ''), alt: i.alt };
  s.title !== null && s.title !== void 0 && (a.title = s.title);
  const c = { type: 'element', tagName: 'img', properties: a, children: [] };
  return (n.patch(i, c), n.applyData(i, c));
}
function Q1(n, i) {
  const l = { src: Hr(i.url) };
  (i.alt !== null && i.alt !== void 0 && (l.alt = i.alt),
    i.title !== null && i.title !== void 0 && (l.title = i.title));
  const s = { type: 'element', tagName: 'img', properties: l, children: [] };
  return (n.patch(i, s), n.applyData(i, s));
}
function G1(n, i) {
  const l = { type: 'text', value: i.value.replace(/\r?\n|\r/g, ' ') };
  n.patch(i, l);
  const s = { type: 'element', tagName: 'code', properties: {}, children: [l] };
  return (n.patch(i, s), n.applyData(i, s));
}
function Y1(n, i) {
  const l = String(i.identifier).toUpperCase(),
    s = n.definitionById.get(l);
  if (!s) return wp(n, i);
  const a = { href: Hr(s.url || '') };
  s.title !== null && s.title !== void 0 && (a.title = s.title);
  const c = { type: 'element', tagName: 'a', properties: a, children: n.all(i) };
  return (n.patch(i, c), n.applyData(i, c));
}
function X1(n, i) {
  const l = { href: Hr(i.url) };
  i.title !== null && i.title !== void 0 && (l.title = i.title);
  const s = { type: 'element', tagName: 'a', properties: l, children: n.all(i) };
  return (n.patch(i, s), n.applyData(i, s));
}
function K1(n, i, l) {
  const s = n.all(i),
    a = l ? J1(l) : kp(i),
    c = {},
    d = [];
  if (typeof i.checked == 'boolean') {
    const y = s[0];
    let v;
    (y && y.type === 'element' && y.tagName === 'p'
      ? (v = y)
      : ((v = { type: 'element', tagName: 'p', properties: {}, children: [] }), s.unshift(v)),
      v.children.length > 0 && v.children.unshift({ type: 'text', value: ' ' }),
      v.children.unshift({
        type: 'element',
        tagName: 'input',
        properties: { type: 'checkbox', checked: i.checked, disabled: !0 },
        children: [],
      }),
      (c.className = ['task-list-item']));
  }
  let p = -1;
  for (; ++p < s.length; ) {
    const y = s[p];
    ((a || p !== 0 || y.type !== 'element' || y.tagName !== 'p') &&
      d.push({
        type: 'text',
        value: `
`,
      }),
      y.type === 'element' && y.tagName === 'p' && !a ? d.push(...y.children) : d.push(y));
  }
  const m = s[s.length - 1];
  m &&
    (a || m.type !== 'element' || m.tagName !== 'p') &&
    d.push({
      type: 'text',
      value: `
`,
    });
  const h = { type: 'element', tagName: 'li', properties: c, children: d };
  return (n.patch(i, h), n.applyData(i, h));
}
function J1(n) {
  let i = !1;
  if (n.type === 'list') {
    i = n.spread || !1;
    const l = n.children;
    let s = -1;
    for (; !i && ++s < l.length; ) i = kp(l[s]);
  }
  return i;
}
function kp(n) {
  const i = n.spread;
  return i ?? n.children.length > 1;
}
function Z1(n, i) {
  const l = {},
    s = n.all(i);
  let a = -1;
  for (typeof i.start == 'number' && i.start !== 1 && (l.start = i.start); ++a < s.length; ) {
    const d = s[a];
    if (
      d.type === 'element' &&
      d.tagName === 'li' &&
      d.properties &&
      Array.isArray(d.properties.className) &&
      d.properties.className.includes('task-list-item')
    ) {
      l.className = ['contains-task-list'];
      break;
    }
  }
  const c = {
    type: 'element',
    tagName: i.ordered ? 'ol' : 'ul',
    properties: l,
    children: n.wrap(s, !0),
  };
  return (n.patch(i, c), n.applyData(i, c));
}
function e0(n, i) {
  const l = { type: 'element', tagName: 'p', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function t0(n, i) {
  const l = { type: 'root', children: n.wrap(n.all(i)) };
  return (n.patch(i, l), n.applyData(i, l));
}
function n0(n, i) {
  const l = { type: 'element', tagName: 'strong', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function r0(n, i) {
  const l = n.all(i),
    s = l.shift(),
    a = [];
  if (s) {
    const d = { type: 'element', tagName: 'thead', properties: {}, children: n.wrap([s], !0) };
    (n.patch(i.children[0], d), a.push(d));
  }
  if (l.length > 0) {
    const d = { type: 'element', tagName: 'tbody', properties: {}, children: n.wrap(l, !0) },
      p = Uu(i.children[1]),
      m = ep(i.children[i.children.length - 1]);
    (p && m && (d.position = { start: p, end: m }), a.push(d));
  }
  const c = { type: 'element', tagName: 'table', properties: {}, children: n.wrap(a, !0) };
  return (n.patch(i, c), n.applyData(i, c));
}
function i0(n, i, l) {
  const s = l ? l.children : void 0,
    c = (s ? s.indexOf(i) : 1) === 0 ? 'th' : 'td',
    d = l && l.type === 'table' ? l.align : void 0,
    p = d ? d.length : i.children.length;
  let m = -1;
  const h = [];
  for (; ++m < p; ) {
    const v = i.children[m],
      k = {},
      w = d ? d[m] : void 0;
    w && (k.align = w);
    let L = { type: 'element', tagName: c, properties: k, children: [] };
    (v && ((L.children = n.all(v)), n.patch(v, L), (L = n.applyData(v, L))), h.push(L));
  }
  const y = { type: 'element', tagName: 'tr', properties: {}, children: n.wrap(h, !0) };
  return (n.patch(i, y), n.applyData(i, y));
}
function l0(n, i) {
  const l = { type: 'element', tagName: 'td', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
const kd = 9,
  xd = 32;
function o0(n) {
  const i = String(n),
    l = /\r?\n|\r/g;
  let s = l.exec(i),
    a = 0;
  const c = [];
  for (; s; )
    (c.push(Sd(i.slice(a, s.index), a > 0, !0), s[0]),
      (a = s.index + s[0].length),
      (s = l.exec(i)));
  return (c.push(Sd(i.slice(a), a > 0, !1)), c.join(''));
}
function Sd(n, i, l) {
  let s = 0,
    a = n.length;
  if (i) {
    let c = n.codePointAt(s);
    for (; c === kd || c === xd; ) (s++, (c = n.codePointAt(s)));
  }
  if (l) {
    let c = n.codePointAt(a - 1);
    for (; c === kd || c === xd; ) (a--, (c = n.codePointAt(a - 1)));
  }
  return a > s ? n.slice(s, a) : '';
}
function s0(n, i) {
  const l = { type: 'text', value: o0(String(i.value)) };
  return (n.patch(i, l), n.applyData(i, l));
}
function u0(n, i) {
  const l = { type: 'element', tagName: 'hr', properties: {}, children: [] };
  return (n.patch(i, l), n.applyData(i, l));
}
const a0 = {
  blockquote: j1,
  break: F1,
  code: B1,
  delete: U1,
  emphasis: W1,
  footnoteReference: V1,
  heading: q1,
  html: H1,
  imageReference: $1,
  image: Q1,
  inlineCode: G1,
  linkReference: Y1,
  link: X1,
  listItem: K1,
  list: Z1,
  paragraph: e0,
  root: t0,
  strong: n0,
  table: r0,
  tableCell: l0,
  tableRow: i0,
  text: s0,
  thematicBreak: u0,
  toml: Gl,
  yaml: Gl,
  definition: Gl,
  footnoteDefinition: Gl,
};
function Gl() {}
const xp = -1,
  oo = 0,
  Ai = 1,
  to = 2,
  Gu = 3,
  Yu = 4,
  Xu = 5,
  Ku = 6,
  Sp = 7,
  Ep = 8,
  Ed = typeof self == 'object' ? self : globalThis,
  c0 = (n, i) => {
    const l = (a, c) => (n.set(c, a), a),
      s = (a) => {
        if (n.has(a)) return n.get(a);
        const [c, d] = i[a];
        switch (c) {
          case oo:
          case xp:
            return l(d, a);
          case Ai: {
            const p = l([], a);
            for (const m of d) p.push(s(m));
            return p;
          }
          case to: {
            const p = l({}, a);
            for (const [m, h] of d) p[s(m)] = s(h);
            return p;
          }
          case Gu:
            return l(new Date(d), a);
          case Yu: {
            const { source: p, flags: m } = d;
            return l(new RegExp(p, m), a);
          }
          case Xu: {
            const p = l(new Map(), a);
            for (const [m, h] of d) p.set(s(m), s(h));
            return p;
          }
          case Ku: {
            const p = l(new Set(), a);
            for (const m of d) p.add(s(m));
            return p;
          }
          case Sp: {
            const { name: p, message: m } = d;
            return l(new Ed[p](m), a);
          }
          case Ep:
            return l(BigInt(d), a);
          case 'BigInt':
            return l(Object(BigInt(d)), a);
          case 'ArrayBuffer':
            return l(new Uint8Array(d).buffer, d);
          case 'DataView': {
            const { buffer: p } = new Uint8Array(d);
            return l(new DataView(p), d);
          }
        }
        return l(new Ed[c](d), a);
      };
    return s;
  },
  Cd = (n) => c0(new Map(), n)(0),
  Br = '',
  { toString: f0 } = {},
  { keys: d0 } = Object,
  bi = (n) => {
    const i = typeof n;
    if (i !== 'object' || !n) return [oo, i];
    const l = f0.call(n).slice(8, -1);
    switch (l) {
      case 'Array':
        return [Ai, Br];
      case 'Object':
        return [to, Br];
      case 'Date':
        return [Gu, Br];
      case 'RegExp':
        return [Yu, Br];
      case 'Map':
        return [Xu, Br];
      case 'Set':
        return [Ku, Br];
      case 'DataView':
        return [Ai, l];
    }
    return l.includes('Array') ? [Ai, l] : l.includes('Error') ? [Sp, l] : [to, l];
  },
  Yl = ([n, i]) => n === oo && (i === 'function' || i === 'symbol'),
  p0 = (n, i, l, s) => {
    const a = (d, p) => {
        const m = s.push(d) - 1;
        return (l.set(p, m), m);
      },
      c = (d) => {
        if (l.has(d)) return l.get(d);
        let [p, m] = bi(d);
        switch (p) {
          case oo: {
            let y = d;
            switch (m) {
              case 'bigint':
                ((p = Ep), (y = d.toString()));
                break;
              case 'function':
              case 'symbol':
                if (n) throw new TypeError('unable to serialize ' + m);
                y = null;
                break;
              case 'undefined':
                return a([xp], d);
            }
            return a([p, y], d);
          }
          case Ai: {
            if (m) {
              let k = d;
              return (
                m === 'DataView'
                  ? (k = new Uint8Array(d.buffer))
                  : m === 'ArrayBuffer' && (k = new Uint8Array(d)),
                a([m, [...k]], d)
              );
            }
            const y = [],
              v = a([p, y], d);
            for (const k of d) y.push(c(k));
            return v;
          }
          case to: {
            if (m)
              switch (m) {
                case 'BigInt':
                  return a([m, d.toString()], d);
                case 'Boolean':
                case 'Number':
                case 'String':
                  return a([m, d.valueOf()], d);
              }
            if (i && 'toJSON' in d) return c(d.toJSON());
            const y = [],
              v = a([p, y], d);
            for (const k of d0(d)) (n || !Yl(bi(d[k]))) && y.push([c(k), c(d[k])]);
            return v;
          }
          case Gu:
            return a([p, d.toISOString()], d);
          case Yu: {
            const { source: y, flags: v } = d;
            return a([p, { source: y, flags: v }], d);
          }
          case Xu: {
            const y = [],
              v = a([p, y], d);
            for (const [k, w] of d) (n || !(Yl(bi(k)) || Yl(bi(w)))) && y.push([c(k), c(w)]);
            return v;
          }
          case Ku: {
            const y = [],
              v = a([p, y], d);
            for (const k of d) (n || !Yl(bi(k))) && y.push(c(k));
            return v;
          }
        }
        const { message: h } = d;
        return a([p, { name: m, message: h }], d);
      };
    return c;
  },
  _d = (n, { json: i, lossy: l } = {}) => {
    const s = [];
    return (p0(!(i || l), !!i, new Map(), s)(n), s);
  },
  no =
    typeof structuredClone == 'function'
      ? (n, i) => (i && ('json' in i || 'lossy' in i) ? Cd(_d(n, i)) : structuredClone(n))
      : (n, i) => Cd(_d(n, i));
function h0(n, i) {
  const l = [{ type: 'text', value: '↩' }];
  return (
    i > 1 &&
      l.push({
        type: 'element',
        tagName: 'sup',
        properties: {},
        children: [{ type: 'text', value: String(i) }],
      }),
    l
  );
}
function m0(n, i) {
  return 'Back to reference ' + (n + 1) + (i > 1 ? '-' + i : '');
}
function g0(n) {
  const i = typeof n.options.clobberPrefix == 'string' ? n.options.clobberPrefix : 'user-content-',
    l = n.options.footnoteBackContent || h0,
    s = n.options.footnoteBackLabel || m0,
    a = n.options.footnoteLabel || 'Footnotes',
    c = n.options.footnoteLabelTagName || 'h2',
    d = n.options.footnoteLabelProperties || { className: ['sr-only'] },
    p = [];
  let m = -1;
  for (; ++m < n.footnoteOrder.length; ) {
    const h = n.footnoteById.get(n.footnoteOrder[m]);
    if (!h) continue;
    const y = n.all(h),
      v = String(h.identifier).toUpperCase(),
      k = Hr(v.toLowerCase());
    let w = 0;
    const L = [],
      P = n.footnoteCounts.get(v);
    for (; P !== void 0 && ++w <= P; ) {
      L.length > 0 && L.push({ type: 'text', value: ' ' });
      let K = typeof l == 'string' ? l : l(m, w);
      (typeof K == 'string' && (K = { type: 'text', value: K }),
        L.push({
          type: 'element',
          tagName: 'a',
          properties: {
            href: '#' + i + 'fnref-' + k + (w > 1 ? '-' + w : ''),
            dataFootnoteBackref: '',
            ariaLabel: typeof s == 'string' ? s : s(m, w),
            className: ['data-footnote-backref'],
          },
          children: Array.isArray(K) ? K : [K],
        }));
    }
    const R = y[y.length - 1];
    if (R && R.type === 'element' && R.tagName === 'p') {
      const K = R.children[R.children.length - 1];
      (K && K.type === 'text' ? (K.value += ' ') : R.children.push({ type: 'text', value: ' ' }),
        R.children.push(...L));
    } else y.push(...L);
    const A = {
      type: 'element',
      tagName: 'li',
      properties: { id: i + 'fn-' + k },
      children: n.wrap(y, !0),
    };
    (n.patch(h, A), p.push(A));
  }
  if (p.length !== 0)
    return {
      type: 'element',
      tagName: 'section',
      properties: { dataFootnotes: !0, className: ['footnotes'] },
      children: [
        {
          type: 'element',
          tagName: c,
          properties: { ...no(d), id: 'footnote-label' },
          children: [{ type: 'text', value: a }],
        },
        {
          type: 'text',
          value: `
`,
        },
        { type: 'element', tagName: 'ol', properties: {}, children: n.wrap(p, !0) },
        {
          type: 'text',
          value: `
`,
        },
      ],
    };
}
const Cp = function (n) {
  if (n == null) return k0;
  if (typeof n == 'function') return so(n);
  if (typeof n == 'object') return Array.isArray(n) ? y0(n) : v0(n);
  if (typeof n == 'string') return w0(n);
  throw new Error('Expected function, string, or object as test');
};
function y0(n) {
  const i = [];
  let l = -1;
  for (; ++l < n.length; ) i[l] = Cp(n[l]);
  return so(s);
  function s(...a) {
    let c = -1;
    for (; ++c < i.length; ) if (i[c].apply(this, a)) return !0;
    return !1;
  }
}
function v0(n) {
  const i = n;
  return so(l);
  function l(s) {
    const a = s;
    let c;
    for (c in n) if (a[c] !== i[c]) return !1;
    return !0;
  }
}
function w0(n) {
  return so(i);
  function i(l) {
    return l && l.type === n;
  }
}
function so(n) {
  return i;
  function i(l, s, a) {
    return !!(x0(l) && n.call(this, l, typeof s == 'number' ? s : void 0, a || void 0));
  }
}
function k0() {
  return !0;
}
function x0(n) {
  return n !== null && typeof n == 'object' && 'type' in n;
}
const _p = [],
  S0 = !0,
  Id = !1,
  E0 = 'skip';
function C0(n, i, l, s) {
  let a;
  typeof i == 'function' && typeof l != 'function' ? ((s = l), (l = i)) : (a = i);
  const c = Cp(a),
    d = s ? -1 : 1;
  p(n, void 0, [])();
  function p(m, h, y) {
    const v = m && typeof m == 'object' ? m : {};
    if (typeof v.type == 'string') {
      const w =
        typeof v.tagName == 'string' ? v.tagName : typeof v.name == 'string' ? v.name : void 0;
      Object.defineProperty(k, 'name', {
        value: 'node (' + (m.type + (w ? '<' + w + '>' : '')) + ')',
      });
    }
    return k;
    function k() {
      let w = _p,
        L,
        P,
        R;
      if ((!i || c(m, h, y[y.length - 1] || void 0)) && ((w = _0(l(m, y))), w[0] === Id)) return w;
      if ('children' in m && m.children) {
        const A = m;
        if (A.children && w[0] !== E0)
          for (
            P = (s ? A.children.length : -1) + d, R = y.concat(A);
            P > -1 && P < A.children.length;
          ) {
            const K = A.children[P];
            if (((L = p(K, P, R)()), L[0] === Id)) return L;
            P = typeof L[1] == 'number' ? L[1] : P + d;
          }
      }
      return w;
    }
  }
}
function _0(n) {
  return Array.isArray(n) ? n : typeof n == 'number' ? [S0, n] : n == null ? _p : [n];
}
function Ip(n, i, l, s) {
  let a, c, d;
  (typeof i == 'function' && typeof l != 'function'
    ? ((c = void 0), (d = i), (a = l))
    : ((c = i), (d = l), (a = s)),
    C0(n, c, p, a));
  function p(m, h) {
    const y = h[h.length - 1],
      v = y ? y.children.indexOf(m) : void 0;
    return d(m, v, y);
  }
}
const Lu = {}.hasOwnProperty,
  I0 = {};
function T0(n, i) {
  const l = i || I0,
    s = new Map(),
    a = new Map(),
    c = new Map(),
    d = { ...a0, ...l.handlers },
    p = {
      all: h,
      applyData: L0,
      definitionById: s,
      footnoteById: a,
      footnoteCounts: c,
      footnoteOrder: [],
      handlers: d,
      one: m,
      options: l,
      patch: N0,
      wrap: P0,
    };
  return (
    Ip(n, function (y) {
      if (y.type === 'definition' || y.type === 'footnoteDefinition') {
        const v = y.type === 'definition' ? s : a,
          k = String(y.identifier).toUpperCase();
        v.has(k) || v.set(k, y);
      }
    }),
    p
  );
  function m(y, v) {
    const k = y.type,
      w = p.handlers[k];
    if (Lu.call(p.handlers, k) && w) return w(p, y, v);
    if (p.options.passThrough && p.options.passThrough.includes(k)) {
      if ('children' in y) {
        const { children: P, ...R } = y,
          A = no(R);
        return ((A.children = p.all(y)), A);
      }
      return no(y);
    }
    return (p.options.unknownHandler || O0)(p, y, v);
  }
  function h(y) {
    const v = [];
    if ('children' in y) {
      const k = y.children;
      let w = -1;
      for (; ++w < k.length; ) {
        const L = p.one(k[w], y);
        if (L) {
          if (
            w &&
            k[w - 1].type === 'break' &&
            (!Array.isArray(L) && L.type === 'text' && (L.value = Td(L.value)),
            !Array.isArray(L) && L.type === 'element')
          ) {
            const P = L.children[0];
            P && P.type === 'text' && (P.value = Td(P.value));
          }
          Array.isArray(L) ? v.push(...L) : v.push(L);
        }
      }
    }
    return v;
  }
}
function N0(n, i) {
  n.position && (i.position = fy(n));
}
function L0(n, i) {
  let l = i;
  if (n && n.data) {
    const s = n.data.hName,
      a = n.data.hChildren,
      c = n.data.hProperties;
    if (typeof s == 'string')
      if (l.type === 'element') l.tagName = s;
      else {
        const d = 'children' in l ? l.children : [l];
        l = { type: 'element', tagName: s, properties: {}, children: d };
      }
    (l.type === 'element' && c && Object.assign(l.properties, no(c)),
      'children' in l && l.children && a !== null && a !== void 0 && (l.children = a));
  }
  return l;
}
function O0(n, i) {
  const l = i.data || {},
    s =
      'value' in i && !(Lu.call(l, 'hProperties') || Lu.call(l, 'hChildren'))
        ? { type: 'text', value: i.value }
        : { type: 'element', tagName: 'div', properties: {}, children: n.all(i) };
  return (n.patch(i, s), n.applyData(i, s));
}
function P0(n, i) {
  const l = [];
  let s = -1;
  for (
    i &&
    l.push({
      type: 'text',
      value: `
`,
    });
    ++s < n.length;
  )
    (s &&
      l.push({
        type: 'text',
        value: `
`,
      }),
      l.push(n[s]));
  return (
    i &&
      n.length > 0 &&
      l.push({
        type: 'text',
        value: `
`,
      }),
    l
  );
}
function Td(n) {
  let i = 0,
    l = n.charCodeAt(i);
  for (; l === 9 || l === 32; ) (i++, (l = n.charCodeAt(i)));
  return n.slice(i);
}
function Nd(n, i) {
  const l = T0(n, i),
    s = l.one(n, void 0),
    a = g0(l),
    c = Array.isArray(s) ? { type: 'root', children: s } : s || { type: 'root', children: [] };
  return (
    a &&
      c.children.push(
        {
          type: 'text',
          value: `
`,
        },
        a
      ),
    c
  );
}
function b0(n, i) {
  return n && 'run' in n
    ? async function (l, s) {
        const a = Nd(l, { file: s, ...i });
        await n.run(a, s);
      }
    : function (l, s) {
        return Nd(l, { file: s, ...(n || i) });
      };
}
function Ld(n) {
  if (n) throw n;
}
var ou, Od;
function R0() {
  if (Od) return ou;
  Od = 1;
  var n = Object.prototype.hasOwnProperty,
    i = Object.prototype.toString,
    l = Object.defineProperty,
    s = Object.getOwnPropertyDescriptor,
    a = function (h) {
      return typeof Array.isArray == 'function' ? Array.isArray(h) : i.call(h) === '[object Array]';
    },
    c = function (h) {
      if (!h || i.call(h) !== '[object Object]') return !1;
      var y = n.call(h, 'constructor'),
        v =
          h.constructor &&
          h.constructor.prototype &&
          n.call(h.constructor.prototype, 'isPrototypeOf');
      if (h.constructor && !y && !v) return !1;
      var k;
      for (k in h);
      return typeof k > 'u' || n.call(h, k);
    },
    d = function (h, y) {
      l && y.name === '__proto__'
        ? l(h, y.name, { enumerable: !0, configurable: !0, value: y.newValue, writable: !0 })
        : (h[y.name] = y.newValue);
    },
    p = function (h, y) {
      if (y === '__proto__')
        if (n.call(h, y)) {
          if (s) return s(h, y).value;
        } else return;
      return h[y];
    };
  return (
    (ou = function m() {
      var h,
        y,
        v,
        k,
        w,
        L,
        P = arguments[0],
        R = 1,
        A = arguments.length,
        K = !1;
      for (
        typeof P == 'boolean' && ((K = P), (P = arguments[1] || {}), (R = 2)),
          (P == null || (typeof P != 'object' && typeof P != 'function')) && (P = {});
        R < A;
        ++R
      )
        if (((h = arguments[R]), h != null))
          for (y in h)
            ((v = p(P, y)),
              (k = p(h, y)),
              P !== k &&
                (K && k && (c(k) || (w = a(k)))
                  ? (w ? ((w = !1), (L = v && a(v) ? v : [])) : (L = v && c(v) ? v : {}),
                    d(P, { name: y, newValue: m(K, L, k) }))
                  : typeof k < 'u' && d(P, { name: y, newValue: k })));
      return P;
    }),
    ou
  );
}
var D0 = R0();
const su = zd(D0);
function Ou(n) {
  if (typeof n != 'object' || n === null) return !1;
  const i = Object.getPrototypeOf(n);
  return (
    (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) &&
    !(Symbol.toStringTag in n) &&
    !(Symbol.iterator in n)
  );
}
function A0() {
  const n = [],
    i = { run: l, use: s };
  return i;
  function l(...a) {
    let c = -1;
    const d = a.pop();
    if (typeof d != 'function') throw new TypeError('Expected function as last argument, not ' + d);
    p(null, ...a);
    function p(m, ...h) {
      const y = n[++c];
      let v = -1;
      if (m) {
        d(m);
        return;
      }
      for (; ++v < a.length; ) (h[v] === null || h[v] === void 0) && (h[v] = a[v]);
      ((a = h), y ? z0(y, p)(...h) : d(null, ...h));
    }
  }
  function s(a) {
    if (typeof a != 'function')
      throw new TypeError('Expected `middelware` to be a function, not ' + a);
    return (n.push(a), i);
  }
}
function z0(n, i) {
  let l;
  return s;
  function s(...d) {
    const p = n.length > d.length;
    let m;
    p && d.push(a);
    try {
      m = n.apply(this, d);
    } catch (h) {
      const y = h;
      if (p && l) throw y;
      return a(y);
    }
    p ||
      (m && m.then && typeof m.then == 'function'
        ? m.then(c, a)
        : m instanceof Error
          ? a(m)
          : c(m));
  }
  function a(d, ...p) {
    l || ((l = !0), i(d, ...p));
  }
  function c(d) {
    a(null, d);
  }
}
const sn = { basename: M0, dirname: j0, extname: F0, join: B0, sep: '/' };
function M0(n, i) {
  if (i !== void 0 && typeof i != 'string') throw new TypeError('"ext" argument must be a string');
  Fi(n);
  let l = 0,
    s = -1,
    a = n.length,
    c;
  if (i === void 0 || i.length === 0 || i.length > n.length) {
    for (; a--; )
      if (n.codePointAt(a) === 47) {
        if (c) {
          l = a + 1;
          break;
        }
      } else s < 0 && ((c = !0), (s = a + 1));
    return s < 0 ? '' : n.slice(l, s);
  }
  if (i === n) return '';
  let d = -1,
    p = i.length - 1;
  for (; a--; )
    if (n.codePointAt(a) === 47) {
      if (c) {
        l = a + 1;
        break;
      }
    } else
      (d < 0 && ((c = !0), (d = a + 1)),
        p > -1 &&
          (n.codePointAt(a) === i.codePointAt(p--) ? p < 0 && (s = a) : ((p = -1), (s = d))));
  return (l === s ? (s = d) : s < 0 && (s = n.length), n.slice(l, s));
}
function j0(n) {
  if ((Fi(n), n.length === 0)) return '.';
  let i = -1,
    l = n.length,
    s;
  for (; --l; )
    if (n.codePointAt(l) === 47) {
      if (s) {
        i = l;
        break;
      }
    } else s || (s = !0);
  return i < 0
    ? n.codePointAt(0) === 47
      ? '/'
      : '.'
    : i === 1 && n.codePointAt(0) === 47
      ? '//'
      : n.slice(0, i);
}
function F0(n) {
  Fi(n);
  let i = n.length,
    l = -1,
    s = 0,
    a = -1,
    c = 0,
    d;
  for (; i--; ) {
    const p = n.codePointAt(i);
    if (p === 47) {
      if (d) {
        s = i + 1;
        break;
      }
      continue;
    }
    (l < 0 && ((d = !0), (l = i + 1)),
      p === 46 ? (a < 0 ? (a = i) : c !== 1 && (c = 1)) : a > -1 && (c = -1));
  }
  return a < 0 || l < 0 || c === 0 || (c === 1 && a === l - 1 && a === s + 1) ? '' : n.slice(a, l);
}
function B0(...n) {
  let i = -1,
    l;
  for (; ++i < n.length; ) (Fi(n[i]), n[i] && (l = l === void 0 ? n[i] : l + '/' + n[i]));
  return l === void 0 ? '.' : U0(l);
}
function U0(n) {
  Fi(n);
  const i = n.codePointAt(0) === 47;
  let l = W0(n, !i);
  return (
    l.length === 0 && !i && (l = '.'),
    l.length > 0 && n.codePointAt(n.length - 1) === 47 && (l += '/'),
    i ? '/' + l : l
  );
}
function W0(n, i) {
  let l = '',
    s = 0,
    a = -1,
    c = 0,
    d = -1,
    p,
    m;
  for (; ++d <= n.length; ) {
    if (d < n.length) p = n.codePointAt(d);
    else {
      if (p === 47) break;
      p = 47;
    }
    if (p === 47) {
      if (!(a === d - 1 || c === 1))
        if (a !== d - 1 && c === 2) {
          if (
            l.length < 2 ||
            s !== 2 ||
            l.codePointAt(l.length - 1) !== 46 ||
            l.codePointAt(l.length - 2) !== 46
          ) {
            if (l.length > 2) {
              if (((m = l.lastIndexOf('/')), m !== l.length - 1)) {
                (m < 0
                  ? ((l = ''), (s = 0))
                  : ((l = l.slice(0, m)), (s = l.length - 1 - l.lastIndexOf('/'))),
                  (a = d),
                  (c = 0));
                continue;
              }
            } else if (l.length > 0) {
              ((l = ''), (s = 0), (a = d), (c = 0));
              continue;
            }
          }
          i && ((l = l.length > 0 ? l + '/..' : '..'), (s = 2));
        } else
          (l.length > 0 ? (l += '/' + n.slice(a + 1, d)) : (l = n.slice(a + 1, d)),
            (s = d - a - 1));
      ((a = d), (c = 0));
    } else p === 46 && c > -1 ? c++ : (c = -1);
  }
  return l;
}
function Fi(n) {
  if (typeof n != 'string')
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(n));
}
const V0 = { cwd: q0 };
function q0() {
  return '/';
}
function Pu(n) {
  return !!(
    n !== null &&
    typeof n == 'object' &&
    'href' in n &&
    n.href &&
    'protocol' in n &&
    n.protocol &&
    n.auth === void 0
  );
}
function H0(n) {
  if (typeof n == 'string') n = new URL(n);
  else if (!Pu(n)) {
    const i = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + n + '`'
    );
    throw ((i.code = 'ERR_INVALID_ARG_TYPE'), i);
  }
  if (n.protocol !== 'file:') {
    const i = new TypeError('The URL must be of scheme file');
    throw ((i.code = 'ERR_INVALID_URL_SCHEME'), i);
  }
  return $0(n);
}
function $0(n) {
  if (n.hostname !== '') {
    const s = new TypeError('File URL host must be "localhost" or empty on darwin');
    throw ((s.code = 'ERR_INVALID_FILE_URL_HOST'), s);
  }
  const i = n.pathname;
  let l = -1;
  for (; ++l < i.length; )
    if (i.codePointAt(l) === 37 && i.codePointAt(l + 1) === 50) {
      const s = i.codePointAt(l + 2);
      if (s === 70 || s === 102) {
        const a = new TypeError('File URL path must not include encoded / characters');
        throw ((a.code = 'ERR_INVALID_FILE_URL_PATH'), a);
      }
    }
  return decodeURIComponent(i);
}
const uu = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
class Tp {
  constructor(i) {
    let l;
    (i
      ? Pu(i)
        ? (l = { path: i })
        : typeof i == 'string' || Q0(i)
          ? (l = { value: i })
          : (l = i)
      : (l = {}),
      (this.cwd = 'cwd' in l ? '' : V0.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored);
    let s = -1;
    for (; ++s < uu.length; ) {
      const c = uu[s];
      c in l && l[c] !== void 0 && l[c] !== null && (this[c] = c === 'history' ? [...l[c]] : l[c]);
    }
    let a;
    for (a in l) uu.includes(a) || (this[a] = l[a]);
  }
  get basename() {
    return typeof this.path == 'string' ? sn.basename(this.path) : void 0;
  }
  set basename(i) {
    (cu(i, 'basename'), au(i, 'basename'), (this.path = sn.join(this.dirname || '', i)));
  }
  get dirname() {
    return typeof this.path == 'string' ? sn.dirname(this.path) : void 0;
  }
  set dirname(i) {
    (Pd(this.basename, 'dirname'), (this.path = sn.join(i || '', this.basename)));
  }
  get extname() {
    return typeof this.path == 'string' ? sn.extname(this.path) : void 0;
  }
  set extname(i) {
    if ((au(i, 'extname'), Pd(this.dirname, 'extname'), i)) {
      if (i.codePointAt(0) !== 46) throw new Error('`extname` must start with `.`');
      if (i.includes('.', 1)) throw new Error('`extname` cannot contain multiple dots');
    }
    this.path = sn.join(this.dirname, this.stem + (i || ''));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(i) {
    (Pu(i) && (i = H0(i)), cu(i, 'path'), this.path !== i && this.history.push(i));
  }
  get stem() {
    return typeof this.path == 'string' ? sn.basename(this.path, this.extname) : void 0;
  }
  set stem(i) {
    (cu(i, 'stem'),
      au(i, 'stem'),
      (this.path = sn.join(this.dirname || '', i + (this.extname || ''))));
  }
  fail(i, l, s) {
    const a = this.message(i, l, s);
    throw ((a.fatal = !0), a);
  }
  info(i, l, s) {
    const a = this.message(i, l, s);
    return ((a.fatal = void 0), a);
  }
  message(i, l, s) {
    const a = new pt(i, l, s);
    return (
      this.path && ((a.name = this.path + ':' + a.name), (a.file = this.path)),
      (a.fatal = !1),
      this.messages.push(a),
      a
    );
  }
  toString(i) {
    return this.value === void 0
      ? ''
      : typeof this.value == 'string'
        ? this.value
        : new TextDecoder(i || void 0).decode(this.value);
  }
}
function au(n, i) {
  if (n && n.includes(sn.sep))
    throw new Error('`' + i + '` cannot be a path: did not expect `' + sn.sep + '`');
}
function cu(n, i) {
  if (!n) throw new Error('`' + i + '` cannot be empty');
}
function Pd(n, i) {
  if (!n) throw new Error('Setting `' + i + '` requires `path` to be set too');
}
function Q0(n) {
  return !!(n && typeof n == 'object' && 'byteLength' in n && 'byteOffset' in n);
}
const G0 = function (n) {
    const s = this.constructor.prototype,
      a = s[n],
      c = function () {
        return a.apply(c, arguments);
      };
    return (Object.setPrototypeOf(c, s), c);
  },
  Y0 = {}.hasOwnProperty;
class Ju extends G0 {
  constructor() {
    (super('copy'),
      (this.Compiler = void 0),
      (this.Parser = void 0),
      (this.attachers = []),
      (this.compiler = void 0),
      (this.freezeIndex = -1),
      (this.frozen = void 0),
      (this.namespace = {}),
      (this.parser = void 0),
      (this.transformers = A0()));
  }
  copy() {
    const i = new Ju();
    let l = -1;
    for (; ++l < this.attachers.length; ) {
      const s = this.attachers[l];
      i.use(...s);
    }
    return (i.data(su(!0, {}, this.namespace)), i);
  }
  data(i, l) {
    return typeof i == 'string'
      ? arguments.length === 2
        ? (pu('data', this.frozen), (this.namespace[i] = l), this)
        : (Y0.call(this.namespace, i) && this.namespace[i]) || void 0
      : i
        ? (pu('data', this.frozen), (this.namespace = i), this)
        : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const i = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [l, ...s] = this.attachers[this.freezeIndex];
      if (s[0] === !1) continue;
      s[0] === !0 && (s[0] = void 0);
      const a = l.call(i, ...s);
      typeof a == 'function' && this.transformers.use(a);
    }
    return ((this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this);
  }
  parse(i) {
    this.freeze();
    const l = Xl(i),
      s = this.parser || this.Parser;
    return (fu('parse', s), s(String(l), l));
  }
  process(i, l) {
    const s = this;
    return (
      this.freeze(),
      fu('process', this.parser || this.Parser),
      du('process', this.compiler || this.Compiler),
      l ? a(void 0, l) : new Promise(a)
    );
    function a(c, d) {
      const p = Xl(i),
        m = s.parse(p);
      s.run(m, p, function (y, v, k) {
        if (y || !v || !k) return h(y);
        const w = v,
          L = s.stringify(w, k);
        (J0(L) ? (k.value = L) : (k.result = L), h(y, k));
      });
      function h(y, v) {
        y || !v ? d(y) : c ? c(v) : l(void 0, v);
      }
    }
  }
  processSync(i) {
    let l = !1,
      s;
    return (
      this.freeze(),
      fu('processSync', this.parser || this.Parser),
      du('processSync', this.compiler || this.Compiler),
      this.process(i, a),
      Rd('processSync', 'process', l),
      s
    );
    function a(c, d) {
      ((l = !0), Ld(c), (s = d));
    }
  }
  run(i, l, s) {
    (bd(i), this.freeze());
    const a = this.transformers;
    return (
      !s && typeof l == 'function' && ((s = l), (l = void 0)),
      s ? c(void 0, s) : new Promise(c)
    );
    function c(d, p) {
      const m = Xl(l);
      a.run(i, m, h);
      function h(y, v, k) {
        const w = v || i;
        y ? p(y) : d ? d(w) : s(void 0, w, k);
      }
    }
  }
  runSync(i, l) {
    let s = !1,
      a;
    return (this.run(i, l, c), Rd('runSync', 'run', s), a);
    function c(d, p) {
      (Ld(d), (a = p), (s = !0));
    }
  }
  stringify(i, l) {
    this.freeze();
    const s = Xl(l),
      a = this.compiler || this.Compiler;
    return (du('stringify', a), bd(i), a(i, s));
  }
  use(i, ...l) {
    const s = this.attachers,
      a = this.namespace;
    if ((pu('use', this.frozen), i != null))
      if (typeof i == 'function') m(i, l);
      else if (typeof i == 'object') Array.isArray(i) ? p(i) : d(i);
      else throw new TypeError('Expected usable value, not `' + i + '`');
    return this;
    function c(h) {
      if (typeof h == 'function') m(h, []);
      else if (typeof h == 'object')
        if (Array.isArray(h)) {
          const [y, ...v] = h;
          m(y, v);
        } else d(h);
      else throw new TypeError('Expected usable value, not `' + h + '`');
    }
    function d(h) {
      if (!('plugins' in h) && !('settings' in h))
        throw new Error(
          'Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither'
        );
      (p(h.plugins), h.settings && (a.settings = su(!0, a.settings, h.settings)));
    }
    function p(h) {
      let y = -1;
      if (h != null)
        if (Array.isArray(h))
          for (; ++y < h.length; ) {
            const v = h[y];
            c(v);
          }
        else throw new TypeError('Expected a list of plugins, not `' + h + '`');
    }
    function m(h, y) {
      let v = -1,
        k = -1;
      for (; ++v < s.length; )
        if (s[v][0] === h) {
          k = v;
          break;
        }
      if (k === -1) s.push([h, ...y]);
      else if (y.length > 0) {
        let [w, ...L] = y;
        const P = s[k][1];
        (Ou(P) && Ou(w) && (w = su(!0, P, w)), (s[k] = [h, w, ...L]));
      }
    }
  }
}
const X0 = new Ju().freeze();
function fu(n, i) {
  if (typeof i != 'function') throw new TypeError('Cannot `' + n + '` without `parser`');
}
function du(n, i) {
  if (typeof i != 'function') throw new TypeError('Cannot `' + n + '` without `compiler`');
}
function pu(n, i) {
  if (i)
    throw new Error(
      'Cannot call `' +
        n +
        '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.'
    );
}
function bd(n) {
  if (!Ou(n) || typeof n.type != 'string') throw new TypeError('Expected node, got `' + n + '`');
}
function Rd(n, i, l) {
  if (!l) throw new Error('`' + n + '` finished async. Use `' + i + '` instead');
}
function Xl(n) {
  return K0(n) ? n : new Tp(n);
}
function K0(n) {
  return !!(n && typeof n == 'object' && 'message' in n && 'messages' in n);
}
function J0(n) {
  return typeof n == 'string' || Z0(n);
}
function Z0(n) {
  return !!(n && typeof n == 'object' && 'byteLength' in n && 'byteOffset' in n);
}
const ew = 'https://github.com/remarkjs/react-markdown/blob/main/changelog.md',
  Dd = [],
  Ad = { allowDangerousHtml: !0 },
  tw = /^(https?|ircs?|mailto|xmpp)$/i,
  nw = [
    { from: 'astPlugins', id: 'remove-buggy-html-in-markdown-parser' },
    { from: 'allowDangerousHtml', id: 'remove-buggy-html-in-markdown-parser' },
    {
      from: 'allowNode',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'allowElement',
    },
    {
      from: 'allowedTypes',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'allowedElements',
    },
    { from: 'className', id: 'remove-classname' },
    {
      from: 'disallowedTypes',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'disallowedElements',
    },
    { from: 'escapeHtml', id: 'remove-buggy-html-in-markdown-parser' },
    { from: 'includeElementIndex', id: '#remove-includeelementindex' },
    { from: 'includeNodeIndex', id: 'change-includenodeindex-to-includeelementindex' },
    { from: 'linkTarget', id: 'remove-linktarget' },
    { from: 'plugins', id: 'change-plugins-to-remarkplugins', to: 'remarkPlugins' },
    { from: 'rawSourcePos', id: '#remove-rawsourcepos' },
    { from: 'renderers', id: 'change-renderers-to-components', to: 'components' },
    { from: 'source', id: 'change-source-to-children', to: 'children' },
    { from: 'sourcePos', id: '#remove-sourcepos' },
    { from: 'transformImageUri', id: '#add-urltransform', to: 'urlTransform' },
    { from: 'transformLinkUri', id: '#add-urltransform', to: 'urlTransform' },
  ];
function rw(n) {
  const i = iw(n),
    l = lw(n);
  return ow(i.runSync(i.parse(l), l), n);
}
function iw(n) {
  const i = n.rehypePlugins || Dd,
    l = n.remarkPlugins || Dd,
    s = n.remarkRehypeOptions ? { ...n.remarkRehypeOptions, ...Ad } : Ad;
  return X0().use(M1).use(l).use(b0, s).use(i);
}
function lw(n) {
  const i = n.children || '',
    l = new Tp();
  return (typeof i == 'string' && (l.value = i), l);
}
function ow(n, i) {
  const l = i.allowedElements,
    s = i.allowElement,
    a = i.components,
    c = i.disallowedElements,
    d = i.skipHtml,
    p = i.unwrapDisallowed,
    m = i.urlTransform || sw;
  for (const y of nw)
    Object.hasOwn(i, y.from) &&
      ('' + y.from + (y.to ? 'use `' + y.to + '` instead' : 'remove it') + ew + y.id, void 0);
  return (
    Ip(n, h),
    gy(n, {
      Fragment: j.Fragment,
      components: a,
      ignoreInvalidStyle: !0,
      jsx: j.jsx,
      jsxs: j.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function h(y, v, k) {
    if (y.type === 'raw' && k && typeof v == 'number')
      return (d ? k.children.splice(v, 1) : (k.children[v] = { type: 'text', value: y.value }), v);
    if (y.type === 'element') {
      let w;
      for (w in ru)
        if (Object.hasOwn(ru, w) && Object.hasOwn(y.properties, w)) {
          const L = y.properties[w],
            P = ru[w];
          (P === null || P.includes(y.tagName)) && (y.properties[w] = m(String(L || ''), w, y));
        }
    }
    if (y.type === 'element') {
      let w = l ? !l.includes(y.tagName) : c ? c.includes(y.tagName) : !1;
      if ((!w && s && typeof v == 'number' && (w = !s(y, v, k)), w && k && typeof v == 'number'))
        return (
          p && y.children ? k.children.splice(v, 1, ...y.children) : k.children.splice(v, 1),
          v
        );
    }
  }
}
function sw(n) {
  const i = n.indexOf(':'),
    l = n.indexOf('?'),
    s = n.indexOf('#'),
    a = n.indexOf('/');
  return i === -1 ||
    (a !== -1 && i > a) ||
    (l !== -1 && i > l) ||
    (s !== -1 && i > s) ||
    tw.test(n.slice(0, i))
    ? n
    : '';
}
function Np() {
  const n = Y.useContext($d);
  if (!n) throw new Error('useQuiz must be used within a QuizProvider');
  return n;
}
const uw = {
    budgetLabel: 'Total Budget',
    budgetInfo:
      'Future diminishing returns calculations will change depending on total money spent, not in this prototype',
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
        title: 'Proportional Allocation',
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
  bu = { results: uw },
  aw = '_wrapper_h2uk9_1',
  cw = '_trigger_h2uk9_7',
  fw = '_popover_h2uk9_27',
  dw = '_popoverVisible_h2uk9_62',
  Kl = { wrapper: aw, trigger: cw, popover: fw, popoverVisible: dw };
function pw({ content: n, size: i = 14 }) {
  const [l, s] = Y.useState(!1),
    [a, c] = Y.useState({ top: 0, left: 0 }),
    d = Y.useRef(null),
    p = Y.useRef(null),
    m = Y.useRef(null),
    h = Y.useCallback(() => {
      var K;
      if (!d.current) return;
      const k = d.current.getBoundingClientRect(),
        w = ((K = p.current) == null ? void 0 : K.offsetWidth) || 400,
        L = window.innerWidth,
        P = 16;
      let R = k.left + k.width / 2 - w / 2;
      const A = k.bottom + 8;
      (R < P ? (R = P) : R + w > L - P && (R = L - w - P), c({ top: A, left: R }));
    }, []);
  (Y.useEffect(() => {
    if (!l) return;
    const k = (w) => {
      m.current && !m.current.contains(w.target) && s(!1);
    };
    return (
      document.addEventListener('mousedown', k),
      document.addEventListener('touchstart', k),
      () => {
        (document.removeEventListener('mousedown', k),
          document.removeEventListener('touchstart', k));
      }
    );
  }, [l]),
    Y.useEffect(() => {
      l && h();
    }, [l, h]));
  const y = Y.useCallback(() => {
      h();
    }, [h]),
    v = Y.useCallback(
      (k) => {
        (k.preventDefault(), k.stopPropagation(), h(), s((w) => !w));
      },
      [h]
    );
  return n
    ? j.jsxs('span', {
        ref: m,
        className: Kl.wrapper,
        children: [
          j.jsx('button', {
            ref: d,
            type: 'button',
            className: Kl.trigger,
            onMouseEnter: y,
            onTouchStart: v,
            'aria-label': 'More information',
            children: j.jsx(tg, { size: i }),
          }),
          j.jsx('span', {
            ref: p,
            className: `${Kl.popover} ${l ? Kl.popoverVisible : ''}`,
            style: { top: a.top, left: a.left },
            children: j.jsx(rw, {
              components: {
                a: ({ href: k, children: w }) =>
                  j.jsx('a', {
                    href: k,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    children: w,
                  }),
              },
              children: n,
            }),
          }),
        ],
      })
    : null;
}
function hw({ credences: n, isLocked: i, lockedKeys: l, onChange: s }) {
  const [a, c] = Y.useState(null),
    [d, p] = Y.useState(!1),
    m = Y.useCallback(() => {
      i || (p(!0), c({ ...n }));
    }, [i, n]),
    h = Y.useCallback(
      (v) => {
        if (i || !d) return;
        p(!1);
        const k = parseFloat(v.target.value);
        (s(k, a, !0, l), c(null));
      },
      [i, d, a, l, s]
    ),
    y = Y.useCallback(
      (v) => {
        if (i) return;
        const k = parseFloat(v.target.value);
        s(k, a, !1, l);
      },
      [i, a, l, s]
    );
  return {
    isDragging: d,
    dragHandlers: {
      onChange: y,
      onMouseDown: m,
      onMouseUp: h,
      onMouseLeave: h,
      onTouchStart: m,
      onTouchEnd: h,
    },
  };
}
function mw({ sliderKey: n, lockedKeys: i = [], credences: l }) {
  return Y.useMemo(() => {
    var k;
    const s = Array.isArray(i) ? i : i ? [i] : [],
      a = s.includes(n),
      c = s.length > 0 && !a,
      d = c ? s.reduce((w, L) => w + (l[L] || 0), 0) : 0,
      p = c ? 100 - d : 100,
      m = c ? `calc(${p}% + ${(50 - p) * 0.16}px)` : null,
      v = Object.keys(l).length - s.length > 2;
    return {
      isLocked: a,
      hasLockedSibling: c,
      lockedValue: d,
      maxAllowed: p,
      thumbOffset: m,
      canLockMore: v,
      featureEnabled: ((k = eo.ui) == null ? void 0 : k.sliderLock) === !0,
    };
  }, [n, i, l]);
}
const gw = '_causeBar_1pclx_3',
  yw = '_header_1pclx_7',
  vw = '_name_1pclx_15',
  ww = '_dollarAmount_1pclx_19',
  kw = '_percentage_1pclx_24',
  xw = '_changeIndicator_1pclx_28',
  Sw = '_up_1pclx_32',
  Ew = '_down_1pclx_36',
  Cw = '_barTrack_1pclx_40',
  _w = '_barOriginal_1pclx_48',
  Iw = '_barFill_1pclx_54',
  Tw = '_barLabel_1pclx_63',
  Nw = '_compact_1pclx_70',
  bt = {
    causeBar: gw,
    header: yw,
    name: vw,
    dollarAmount: ww,
    percentage: kw,
    changeIndicator: xw,
    up: Sw,
    down: Ew,
    barTrack: Cw,
    barOriginal: _w,
    barFill: Iw,
    barLabel: Tw,
    compact: Nw,
  };
function Lw(n) {
  if (n >= 1e6) {
    const i = n / 1e6;
    return `$${i % 1 === 0 ? i.toFixed(0) : i.toFixed(1)}M`;
  }
  return `$${n.toLocaleString()}`;
}
function Ow(n, i) {
  const l = i * 0.005;
  return Math.round(n / l) * l;
}
const Pw = ({
    name: n,
    percentage: i,
    color: l,
    originalPercentage: s = null,
    hasChanged: a = !1,
    simpleMode: c = !1,
    budget: d = null,
  }) => {
    const p = !c && a && s !== null && i !== s,
      m = p && i > s,
      h = d ? Lw(Ow((i / 100) * d, d)) : null;
    return j.jsxs('div', {
      className: `${bt.causeBar} ${c ? bt.compact : ''}`,
      children: [
        j.jsxs('div', {
          className: bt.header,
          children: [
            j.jsx('span', { className: bt.name, children: n }),
            h
              ? j.jsx('span', { className: bt.dollarAmount, children: h })
              : j.jsxs('span', {
                  className: bt.percentage,
                  style: { color: l },
                  children: [
                    i.toFixed(0),
                    '%',
                    p &&
                      j.jsx('span', {
                        className: `${bt.changeIndicator} ${m ? bt.up : bt.down}`,
                        children: m ? '↑' : '↓',
                      }),
                  ],
                }),
          ],
        }),
        j.jsxs('div', {
          className: bt.barTrack,
          children: [
            p &&
              j.jsx('div', { className: bt.barOriginal, style: { width: `${s}%`, background: l } }),
            j.jsx('div', {
              className: bt.barFill,
              style: { width: `${i}%`, background: l },
              children:
                i > 15 && j.jsxs('span', { className: bt.barLabel, children: [i.toFixed(0), '%'] }),
            }),
          ],
        }),
      ],
    });
  },
  bw = { target: ig, parliament: Km, handshake: eg, scale: rg };
function Rw({ name: n, size: i = 18, className: l = '' }) {
  const s = bw[n] || Jm;
  return j.jsx(s, { size: i, className: l });
}
const Dw = '_compactCard_13qwl_132',
  Aw = '_cardHeader_13qwl_136',
  zw = '_cardIcon_13qwl_140',
  Mw = '_cardTitle_13qwl_146',
  jw = '_resultCard_13qwl_150',
  Fw = '_cardSubtitle_13qwl_182',
  Bw = '_cardFooter_13qwl_188',
  dr = {
    compactCard: Dw,
    cardHeader: Aw,
    cardIcon: zw,
    cardTitle: Mw,
    resultCard: jw,
    cardSubtitle: Fw,
    cardFooter: Bw,
  };
function Uw({
  methodKey: n,
  results: i,
  evs: l = null,
  originalResults: s = null,
  causeEntries: a,
  hasChanged: c = !1,
  simpleMode: d = !1,
  budget: p = null,
}) {
  const m = bu.results.methods[n],
    h = l
      ? `${m.footerLabel} ${a.map(([y, v]) => `${v.name.slice(0, 2)} ${l[y].toFixed(0)}`).join(' · ')}`
      : m.footerText;
  return j.jsxs('div', {
    className: `${dr.resultCard} ${d ? dr.compactCard : ''}`,
    children: [
      j.jsxs('div', {
        className: dr.cardHeader,
        children: [
          j.jsx('div', { className: dr.cardIcon, children: j.jsx(Rw, { name: m.icon, size: 18 }) }),
          j.jsxs('div', {
            children: [
              j.jsx('h3', { className: dr.cardTitle, children: m.title }),
              !d && j.jsx('p', { className: dr.cardSubtitle, children: m.subtitle }),
            ],
          }),
        ],
      }),
      a.map(([y, v]) =>
        j.jsx(
          Pw,
          {
            name: v.name,
            percentage: i[y],
            originalPercentage: s == null ? void 0 : s[y],
            color: v.color,
            hasChanged: !d && c,
            simpleMode: d,
            budget: p,
          },
          y
        )
      ),
      !d && j.jsx('div', { className: dr.cardFooter, children: h }),
    ],
  });
}
const Ww = [
  { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
  { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
  { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
  { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
];
function Vw() {
  var l;
  const n = ((l = eo.calculations) == null ? void 0 : l.order) || [];
  return [...Ww]
    .sort((s, a) => {
      const c = n.indexOf(s.key),
        d = n.indexOf(a.key);
      return c === -1 && d === -1 ? 0 : c === -1 ? 1 : d === -1 ? -1 : c - d;
    })
    .filter((s) => {
      var a;
      return ((a = eo.calculations) == null ? void 0 : a[s.flag]) === !0;
    });
}
const qw = '_settingsLabel_bffzu_25',
  Hw = '_budgetInputWrapper_bffzu_35',
  $w = '_currencyPrefix_bffzu_48',
  Qw = '_budgetInput_bffzu_35',
  Jl = { settingsLabel: qw, budgetInputWrapper: Hw, currencyPrefix: $w, budgetInput: Qw },
  Gw = '_container_1v1qc_3',
  Yw = '_layout_1v1qc_11',
  Xw = '_inputsColumn_1v1qc_21',
  Kw = '_resultsColumn_1v1qc_28',
  Jw = '_questionSection_1v1qc_37',
  Zw = '_expanded_1v1qc_44',
  ek = '_questionHeader_1v1qc_48',
  tk = '_questionTitle_1v1qc_65',
  nk = '_questionSummary_1v1qc_74',
  rk = '_chevron_1v1qc_84',
  ik = '_questionContent_1v1qc_92',
  lk = '_sliderRow_1v1qc_97',
  ok = '_sliderLabel_1v1qc_109',
  sk = '_sliderTrack_1v1qc_116',
  uk = '_sliderValue_1v1qc_134',
  ak = '_lockButton_1v1qc_142',
  ck = '_locked_1v1qc_161',
  fk = '_lockDisabled_1v1qc_166',
  dk = '_lockLimit_1v1qc_171',
  pk = '_selectionRow_1v1qc_181',
  hk = '_selectionButton_1v1qc_187',
  mk = '_selected_1v1qc_206',
  gk = '_settingsDivider_1v1qc_214',
  yk = '_settingsRow_1v1qc_225',
  vk = '_settingsGrid_1v1qc_231',
  wk = '_fieldLabel_1v1qc_237',
  kk = '_fieldInput_1v1qc_245',
  xk = '_subField_1v1qc_261',
  Sk = '_subFieldLabel_1v1qc_267',
  Ek = '_checkboxRow_1v1qc_277',
  Ck = '_checkboxLabel_1v1qc_284',
  _k = '_resultsGrid_1v1qc_299',
  Ik = '_budgetRow_1v1qc_305',
  le = {
    container: Gw,
    layout: Yw,
    inputsColumn: Xw,
    resultsColumn: Kw,
    questionSection: Jw,
    expanded: Zw,
    questionHeader: ek,
    questionTitle: tk,
    questionSummary: nk,
    chevron: rk,
    questionContent: ik,
    sliderRow: lk,
    sliderLabel: ok,
    sliderTrack: sk,
    sliderValue: uk,
    lockButton: ak,
    locked: ck,
    lockDisabled: fk,
    lockLimit: dk,
    selectionRow: pk,
    selectionButton: hk,
    selected: mk,
    settingsDivider: gk,
    settingsRow: yk,
    settingsGrid: vk,
    fieldLabel: wk,
    fieldInput: kk,
    subField: xk,
    subFieldLabel: Sk,
    checkboxRow: Ek,
    checkboxLabel: Ck,
    resultsGrid: _k,
    budgetRow: Ik,
  };
function Tk() {
  const {
      questionsConfig: n,
      causesConfig: i,
      stateMap: l,
      calculationResults: s,
      marketplaceBudget: a,
      setMarketplaceBudget: c,
      setDebugConfig: d,
      debugConfig: p,
    } = Np(),
    h = a ?? 1e7,
    [y, v] = Y.useState(h.toLocaleString()),
    [k, w] = Y.useState(null),
    [L, P] = Y.useState(() => ({
      causes: JSON.parse(JSON.stringify(zi.causes)),
      dimensions: Au(!0),
      diminishingReturns: (p == null ? void 0 : p.diminishingReturns) || zi.diminishingReturns,
    })),
    [R, A] = Y.useState(null),
    K = (D) => {
      A(R === D ? null : D);
    },
    U = (D) => {
      (P(D), d(D));
    },
    de = Object.entries(i),
    ye = Vw(),
    z = n.filter((D) => D.type !== Kt.INTERMISSION),
    me = (D) => v(D.target.value),
    xe = () => {
      const D = parseInt(y.replace(/[^0-9]/g, ''), 10);
      !isNaN(D) && D > 0 ? (c(D), v(D.toLocaleString())) : v(h.toLocaleString());
    },
    Se = (D) => {
      D.key === 'Enter' && D.target.blur();
    },
    Ee = (D) =>
      D.options.map((J) => ({
        key: J.key,
        label: J.panelLabel || J.label,
        short: J.panelShort || J.panelLabel || J.label,
        color: J.color,
      })),
    ne = (D) => {
      w(k === D ? null : D);
    };
  return j.jsx('div', {
    className: le.container,
    children: j.jsxs('div', {
      className: le.layout,
      children: [
        j.jsxs('div', {
          className: le.inputsColumn,
          children: [
            z.map((D) => {
              const J = l[D.id];
              if (!J) return null;
              const X = D.type === Kt.SELECTION;
              return j.jsx(
                Ok,
                {
                  question: D,
                  state: J,
                  isSelectionType: X,
                  configs: Ee(D),
                  isExpanded: k === D.id,
                  onToggle: () => ne(D.id),
                },
                D.id
              );
            }),
            j.jsx('div', { className: le.settingsDivider, children: 'Settings' }),
            j.jsxs('div', {
              className: `${le.questionSection} ${R === 'dr' ? le.expanded : ''}`,
              children: [
                j.jsxs('button', {
                  type: 'button',
                  className: le.questionHeader,
                  onClick: () => K('dr'),
                  children: [
                    j.jsx('span', { className: le.questionTitle, children: 'Diminishing Returns' }),
                    R !== 'dr' &&
                      j.jsx('span', {
                        className: le.questionSummary,
                        children: L.diminishingReturns,
                      }),
                    j.jsx('span', { className: le.chevron, children: R === 'dr' ? '−' : '+' }),
                  ],
                }),
                R === 'dr' &&
                  j.jsx('div', {
                    className: le.questionContent,
                    children: j.jsx('div', {
                      className: le.settingsRow,
                      children: Object.keys(gu).map((D) =>
                        j.jsxs(
                          'button',
                          {
                            type: 'button',
                            className: `${le.selectionButton} ${L.diminishingReturns === D ? le.selected : ''}`,
                            onClick: () => U({ ...L, diminishingReturns: D }),
                            children: [D, ' (', gu[D], ')'],
                          },
                          D
                        )
                      ),
                    }),
                  }),
              ],
            }),
            Object.entries(L.causes).map(([D, J]) =>
              j.jsxs(
                'div',
                {
                  className: `${le.questionSection} ${R === D ? le.expanded : ''}`,
                  children: [
                    j.jsxs('button', {
                      type: 'button',
                      className: le.questionHeader,
                      onClick: () => K(D),
                      children: [
                        j.jsx('span', { className: le.questionTitle, children: J.name }),
                        R !== D &&
                          j.jsxs('span', {
                            className: le.questionSummary,
                            children: ['pts:', J.points, ' sf:', J.scaleFactor],
                          }),
                        j.jsx('span', { className: le.chevron, children: R === D ? '−' : '+' }),
                      ],
                    }),
                    R === D &&
                      j.jsxs('div', {
                        className: le.questionContent,
                        children: [
                          j.jsxs('div', {
                            className: le.settingsGrid,
                            children: [
                              j.jsxs('label', {
                                className: le.fieldLabel,
                                children: [
                                  'Points',
                                  j.jsx('input', {
                                    type: 'number',
                                    className: le.fieldInput,
                                    value: J.points,
                                    onChange: (X) => {
                                      const V = {
                                        ...L,
                                        causes: {
                                          ...L.causes,
                                          [D]: { ...J, points: Number(X.target.value) },
                                        },
                                      };
                                      U(V);
                                    },
                                  }),
                                ],
                              }),
                              j.jsxs('label', {
                                className: le.fieldLabel,
                                children: [
                                  'Scale',
                                  j.jsx('input', {
                                    type: 'number',
                                    className: le.fieldInput,
                                    value: J.scaleFactor,
                                    onChange: (X) => {
                                      const V = {
                                        ...L,
                                        causes: {
                                          ...L.causes,
                                          [D]: { ...J, scaleFactor: Number(X.target.value) },
                                        },
                                      };
                                      U(V);
                                    },
                                  }),
                                ],
                              }),
                            ],
                          }),
                          j.jsx('div', {
                            className: le.checkboxRow,
                            children: [
                              'preventsDisability',
                              'increasesIncome',
                              'helpsAnimals',
                              'helpsInvertebrates',
                              'isNonXRisk',
                              'isDummyRisk',
                            ].map(
                              (X) =>
                                J[X] !== void 0 &&
                                j.jsxs(
                                  'label',
                                  {
                                    className: le.checkboxLabel,
                                    children: [
                                      j.jsx('input', {
                                        type: 'checkbox',
                                        checked: !!J[X],
                                        onChange: (V) => {
                                          const ue = {
                                            ...L,
                                            causes: {
                                              ...L.causes,
                                              [D]: { ...J, [X]: V.target.checked },
                                            },
                                          };
                                          U(ue);
                                        },
                                      }),
                                      X,
                                    ],
                                  },
                                  X
                                )
                            ),
                          }),
                        ],
                      }),
                  ],
                },
                D
              )
            ),
            Object.entries(L.dimensions).map(([D, J]) =>
              j.jsxs(
                'div',
                {
                  className: `${le.questionSection} ${R === `dim-${D}` ? le.expanded : ''}`,
                  children: [
                    j.jsxs('button', {
                      type: 'button',
                      className: le.questionHeader,
                      onClick: () => K(`dim-${D}`),
                      children: [
                        j.jsx('span', { className: le.questionTitle, children: J.name }),
                        R !== `dim-${D}` &&
                          j.jsx('span', {
                            className: le.questionSummary,
                            children: J.appliesWhen || J.appliesTo,
                          }),
                        j.jsx('span', {
                          className: le.chevron,
                          children: R === `dim-${D}` ? '−' : '+',
                        }),
                      ],
                    }),
                    R === `dim-${D}` &&
                      j.jsx('div', {
                        className: le.questionContent,
                        children: j.jsx('div', {
                          className: le.settingsGrid,
                          children: Object.entries(J.options).map(([X, V]) =>
                            j.jsxs(
                              'label',
                              {
                                className: le.fieldLabel,
                                children: [
                                  X,
                                  typeof V == 'object'
                                    ? Object.entries(V).map(([ue, se]) =>
                                        j.jsxs(
                                          'div',
                                          {
                                            className: le.subField,
                                            children: [
                                              j.jsx('span', {
                                                className: le.subFieldLabel,
                                                children: ue,
                                              }),
                                              j.jsx('input', {
                                                type: 'number',
                                                step: '0.01',
                                                className: le.fieldInput,
                                                value: se,
                                                onChange: (q) => {
                                                  const ee = {
                                                      ...J.options,
                                                      [X]: { ...V, [ue]: Number(q.target.value) },
                                                    },
                                                    x = {
                                                      ...L,
                                                      dimensions: {
                                                        ...L.dimensions,
                                                        [D]: { ...J, options: ee },
                                                      },
                                                    };
                                                  U(x);
                                                },
                                              }),
                                            ],
                                          },
                                          ue
                                        )
                                      )
                                    : j.jsx('input', {
                                        type: 'number',
                                        step: '0.01',
                                        className: le.fieldInput,
                                        value: V,
                                        onChange: (ue) => {
                                          const se = { ...J.options, [X]: Number(ue.target.value) },
                                            q = {
                                              ...L,
                                              dimensions: {
                                                ...L.dimensions,
                                                [D]: { ...J, options: se },
                                              },
                                            };
                                          U(q);
                                        },
                                      }),
                                ],
                              },
                              X
                            )
                          ),
                        }),
                      }),
                  ],
                },
                D
              )
            ),
          ],
        }),
        j.jsxs('div', {
          className: le.resultsColumn,
          children: [
            j.jsx('div', {
              className: le.budgetRow,
              children: j.jsxs('label', {
                className: Jl.settingsLabel,
                children: [
                  bu.results.budgetLabel,
                  j.jsx(pw, { content: bu.results.budgetInfo }),
                  j.jsxs('div', {
                    className: Jl.budgetInputWrapper,
                    children: [
                      j.jsx('span', { className: Jl.currencyPrefix, children: '$' }),
                      j.jsx('input', {
                        type: 'text',
                        value: y,
                        onChange: me,
                        onBlur: xe,
                        onKeyDown: Se,
                        className: Jl.budgetInput,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            j.jsx('div', {
              className: le.resultsGrid,
              children: ye.map((D) => {
                const J = s == null ? void 0 : s[D.key];
                return J
                  ? j.jsx(
                      Uw,
                      {
                        methodKey: D.key,
                        results: J,
                        evs: D.hasEvs ? J.evs : null,
                        causeEntries: de,
                        budget: h,
                      },
                      D.key
                    )
                  : null;
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function Nk({
  label: n,
  value: i,
  onChange: l,
  color: s,
  credences: a,
  sliderKey: c,
  lockedKeys: d,
  setLockedKeys: p,
}) {
  const {
      isLocked: m,
      hasLockedSibling: h,
      thumbOffset: y,
      canLockMore: v,
      featureEnabled: k,
    } = mw({ sliderKey: c, lockedKeys: d, credences: a }),
    { isDragging: w, dragHandlers: L } = hw({
      credences: a,
      isLocked: m,
      lockedKeys: d,
      onChange: l,
    }),
    P = () => {
      k && (m ? p(d.filter((A) => A !== c)) : v && p([...d, c]));
    },
    R = h
      ? `linear-gradient(to right, ${s} 0%, ${s} ${i}%, rgba(255,255,255,0.15) ${i}%, rgba(255,255,255,0.15) ${y}, rgba(255,255,255,0.06) ${y}, rgba(255,255,255,0.06) 100%)`
      : `linear-gradient(to right, ${s} 0%, ${s} ${i}%, rgba(255,255,255,0.1) ${i}%, rgba(255,255,255,0.1) 100%)`;
  return j.jsxs('div', {
    className: le.sliderRow,
    children: [
      j.jsx('span', { className: le.sliderLabel, children: n }),
      j.jsxs('div', {
        className: le.sliderTrack,
        children: [
          j.jsx('input', {
            type: 'range',
            min: '0',
            max: '100',
            step: 'any',
            value: i,
            ...L,
            'data-dragging': w,
            disabled: m,
            style: { background: R, cursor: m ? 'not-allowed' : 'pointer' },
          }),
          h && j.jsx('div', { className: le.lockLimit, style: { left: y } }),
        ],
      }),
      j.jsxs('span', {
        className: le.sliderValue,
        style: { color: s },
        children: [Math.round(i), '%'],
      }),
      k &&
        j.jsx('button', {
          className: `${le.lockButton} ${m ? le.locked : ''} ${!m && !v ? le.lockDisabled : ''}`,
          onClick: P,
          type: 'button',
          disabled: !m && !v,
          children: j.jsx(ng, { size: 12 }),
        }),
    ],
  });
}
function Lk(n, i, l) {
  if (l) {
    const s = i.find((a) => n.credences[a.key] === 100);
    return s ? s.label : '';
  }
  return i
    .filter((s) => Math.round(n.credences[s.key]) > 0)
    .map((s) => `${s.short} ${Math.round(n.credences[s.key])}%`)
    .join(' · ');
}
function Ok({ question: n, state: i, isSelectionType: l, configs: s, isExpanded: a, onToggle: c }) {
  const [d, p] = Y.useState(null),
    m = Y.useRef(null);
  Y.useEffect(
    () => () => {
      m.current && clearTimeout(m.current);
    },
    []
  );
  const h = d || i.credences,
    y = (k) => {
      const w = {};
      (s.forEach((L) => {
        w[L.key] = L.key === k ? 100 : 0;
      }),
        i.setCredences(w));
    },
    v = Lk(i, s, l);
  return j.jsxs('div', {
    className: `${le.questionSection} ${a ? le.expanded : ''}`,
    children: [
      j.jsxs('button', {
        type: 'button',
        className: le.questionHeader,
        onClick: c,
        children: [
          j.jsx('span', { className: le.questionTitle, children: n.editPanelTitle }),
          !a && j.jsx('span', { className: le.questionSummary, children: v }),
          j.jsx('span', { className: le.chevron, children: a ? '−' : '+' }),
        ],
      }),
      a &&
        j.jsx('div', {
          className: le.questionContent,
          children: l
            ? j.jsx('div', {
                className: le.selectionRow,
                children: s.map((k) =>
                  j.jsx(
                    'button',
                    {
                      type: 'button',
                      className: `${le.selectionButton} ${i.credences[k.key] === 100 ? le.selected : ''}`,
                      onClick: () => y(k.key),
                      children: k.label,
                    },
                    k.key
                  )
                ),
              })
            : s.map((k) =>
                j.jsx(
                  Nk,
                  {
                    label: k.label,
                    value: h[k.key],
                    onChange: (w, L, P, R) => {
                      const A = L || d || i.credences,
                        K = Ng(k.key, w, A, L, R),
                        U = P ? Lg(K) : K;
                      (p(U),
                        m.current && clearTimeout(m.current),
                        P
                          ? (i.setCredences(U), (m.current = setTimeout(() => p(null), 50)))
                          : (m.current = setTimeout(() => {
                              i.setCredences(U);
                            }, 100)));
                    },
                    color: k.color,
                    credences: h,
                    sliderKey: k.key,
                    lockedKeys: i.lockedKeys,
                    setLockedKeys: i.setLockedKeys,
                  },
                  k.key
                )
              ),
        }),
    ],
  });
}
Au(!0);
function Pk() {
  const {
    currentStep: n,
    currentQuestion: i,
    setDebugConfig: l,
    shareUrlError: s,
    isHydrating: a,
  } = Np();
  return a ? null : j.jsx(Tk, {});
}
function bk() {
  return j.jsx(Ug, { children: j.jsx(Pk, {}) });
}
Pm.createRoot(document.getElementById('root')).render(
  j.jsx(Y.StrictMode, { children: j.jsx(bk, {}) })
);
