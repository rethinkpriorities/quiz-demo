(function () {
  const d = document.createElement('link').relList;
  if (d && d.supports && d.supports('modulepreload')) return;
  for (const S of document.querySelectorAll('link[rel="modulepreload"]')) g(S);
  new MutationObserver((S) => {
    for (const E of S)
      if (E.type === 'childList')
        for (const L of E.addedNodes) L.tagName === 'LINK' && L.rel === 'modulepreload' && g(L);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(S) {
    const E = {};
    return (
      S.integrity && (E.integrity = S.integrity),
      S.referrerPolicy && (E.referrerPolicy = S.referrerPolicy),
      S.crossOrigin === 'use-credentials'
        ? (E.credentials = 'include')
        : S.crossOrigin === 'anonymous'
          ? (E.credentials = 'omit')
          : (E.credentials = 'same-origin'),
      E
    );
  }
  function g(S) {
    if (S.ep) return;
    S.ep = !0;
    const E = u(S);
    fetch(S.href, E);
  }
})();
var Qi = { exports: {} },
  Lr = {},
  Hi = { exports: {} },
  te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ya;
function ff() {
  if (Ya) return te;
  Ya = 1;
  var v = Symbol.for('react.element'),
    d = Symbol.for('react.portal'),
    u = Symbol.for('react.fragment'),
    g = Symbol.for('react.strict_mode'),
    S = Symbol.for('react.profiler'),
    E = Symbol.for('react.provider'),
    L = Symbol.for('react.context'),
    P = Symbol.for('react.forward_ref'),
    _ = Symbol.for('react.suspense'),
    j = Symbol.for('react.memo'),
    O = Symbol.for('react.lazy'),
    R = Symbol.iterator;
  function A(p) {
    return p === null || typeof p != 'object'
      ? null
      : ((p = (R && p[R]) || p['@@iterator']), typeof p == 'function' ? p : null);
  }
  var $ = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ee = Object.assign,
    M = {};
  function G(p, k, b) {
    ((this.props = p), (this.context = k), (this.refs = M), (this.updater = b || $));
  }
  ((G.prototype.isReactComponent = {}),
    (G.prototype.setState = function (p, k) {
      if (typeof p != 'object' && typeof p != 'function' && p != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, p, k, 'setState');
    }),
    (G.prototype.forceUpdate = function (p) {
      this.updater.enqueueForceUpdate(this, p, 'forceUpdate');
    }));
  function J() {}
  J.prototype = G.prototype;
  function pe(p, k, b) {
    ((this.props = p), (this.context = k), (this.refs = M), (this.updater = b || $));
  }
  var fe = (pe.prototype = new J());
  ((fe.constructor = pe), ee(fe, G.prototype), (fe.isPureReactComponent = !0));
  var re = Array.isArray,
    Z = Object.prototype.hasOwnProperty,
    q = { current: null },
    me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ae(p, k, b) {
    var ne,
      oe = {},
      ie = null,
      he = null;
    if (k != null)
      for (ne in (k.ref !== void 0 && (he = k.ref), k.key !== void 0 && (ie = '' + k.key), k))
        Z.call(k, ne) && !me.hasOwnProperty(ne) && (oe[ne] = k[ne]);
    var ce = arguments.length - 2;
    if (ce === 1) oe.children = b;
    else if (1 < ce) {
      for (var _e = Array(ce), rt = 0; rt < ce; rt++) _e[rt] = arguments[rt + 2];
      oe.children = _e;
    }
    if (p && p.defaultProps)
      for (ne in ((ce = p.defaultProps), ce)) oe[ne] === void 0 && (oe[ne] = ce[ne]);
    return { $$typeof: v, type: p, key: ie, ref: he, props: oe, _owner: q.current };
  }
  function Le(p, k) {
    return { $$typeof: v, type: p.type, key: k, ref: p.ref, props: p.props, _owner: p._owner };
  }
  function xe(p) {
    return typeof p == 'object' && p !== null && p.$$typeof === v;
  }
  function at(p) {
    var k = { '=': '=0', ':': '=2' };
    return (
      '$' +
      p.replace(/[=:]/g, function (b) {
        return k[b];
      })
    );
  }
  var Ge = /\/+/g;
  function Ie(p, k) {
    return typeof p == 'object' && p !== null && p.key != null ? at('' + p.key) : k.toString(36);
  }
  function nt(p, k, b, ne, oe) {
    var ie = typeof p;
    (ie === 'undefined' || ie === 'boolean') && (p = null);
    var he = !1;
    if (p === null) he = !0;
    else
      switch (ie) {
        case 'string':
        case 'number':
          he = !0;
          break;
        case 'object':
          switch (p.$$typeof) {
            case v:
            case d:
              he = !0;
          }
      }
    if (he)
      return (
        (he = p),
        (oe = oe(he)),
        (p = ne === '' ? '.' + Ie(he, 0) : ne),
        re(oe)
          ? ((b = ''),
            p != null && (b = p.replace(Ge, '$&/') + '/'),
            nt(oe, k, b, '', function (rt) {
              return rt;
            }))
          : oe != null &&
            (xe(oe) &&
              (oe = Le(
                oe,
                b +
                  (!oe.key || (he && he.key === oe.key)
                    ? ''
                    : ('' + oe.key).replace(Ge, '$&/') + '/') +
                  p
              )),
            k.push(oe)),
        1
      );
    if (((he = 0), (ne = ne === '' ? '.' : ne + ':'), re(p)))
      for (var ce = 0; ce < p.length; ce++) {
        ie = p[ce];
        var _e = ne + Ie(ie, ce);
        he += nt(ie, k, b, _e, oe);
      }
    else if (((_e = A(p)), typeof _e == 'function'))
      for (p = _e.call(p), ce = 0; !(ie = p.next()).done; )
        ((ie = ie.value), (_e = ne + Ie(ie, ce++)), (he += nt(ie, k, b, _e, oe)));
    else if (ie === 'object')
      throw (
        (k = String(p)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (k === '[object Object]' ? 'object with keys {' + Object.keys(p).join(', ') + '}' : k) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return he;
  }
  function W(p, k, b) {
    if (p == null) return p;
    var ne = [],
      oe = 0;
    return (
      nt(p, ne, '', '', function (ie) {
        return k.call(b, ie, oe++);
      }),
      ne
    );
  }
  function K(p) {
    if (p._status === -1) {
      var k = p._result;
      ((k = k()),
        k.then(
          function (b) {
            (p._status === 0 || p._status === -1) && ((p._status = 1), (p._result = b));
          },
          function (b) {
            (p._status === 0 || p._status === -1) && ((p._status = 2), (p._result = b));
          }
        ),
        p._status === -1 && ((p._status = 0), (p._result = k)));
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var ue = { current: null },
    T = { transition: null },
    V = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: T, ReactCurrentOwner: q };
  function I() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (te.Children = {
      map: W,
      forEach: function (p, k, b) {
        W(
          p,
          function () {
            k.apply(this, arguments);
          },
          b
        );
      },
      count: function (p) {
        var k = 0;
        return (
          W(p, function () {
            k++;
          }),
          k
        );
      },
      toArray: function (p) {
        return (
          W(p, function (k) {
            return k;
          }) || []
        );
      },
      only: function (p) {
        if (!xe(p))
          throw Error('React.Children.only expected to receive a single React element child.');
        return p;
      },
    }),
    (te.Component = G),
    (te.Fragment = u),
    (te.Profiler = S),
    (te.PureComponent = pe),
    (te.StrictMode = g),
    (te.Suspense = _),
    (te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V),
    (te.act = I),
    (te.cloneElement = function (p, k, b) {
      if (p == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + p + '.'
        );
      var ne = ee({}, p.props),
        oe = p.key,
        ie = p.ref,
        he = p._owner;
      if (k != null) {
        if (
          (k.ref !== void 0 && ((ie = k.ref), (he = q.current)),
          k.key !== void 0 && (oe = '' + k.key),
          p.type && p.type.defaultProps)
        )
          var ce = p.type.defaultProps;
        for (_e in k)
          Z.call(k, _e) &&
            !me.hasOwnProperty(_e) &&
            (ne[_e] = k[_e] === void 0 && ce !== void 0 ? ce[_e] : k[_e]);
      }
      var _e = arguments.length - 2;
      if (_e === 1) ne.children = b;
      else if (1 < _e) {
        ce = Array(_e);
        for (var rt = 0; rt < _e; rt++) ce[rt] = arguments[rt + 2];
        ne.children = ce;
      }
      return { $$typeof: v, type: p.type, key: oe, ref: ie, props: ne, _owner: he };
    }),
    (te.createContext = function (p) {
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
        (p.Provider = { $$typeof: E, _context: p }),
        (p.Consumer = p)
      );
    }),
    (te.createElement = ae),
    (te.createFactory = function (p) {
      var k = ae.bind(null, p);
      return ((k.type = p), k);
    }),
    (te.createRef = function () {
      return { current: null };
    }),
    (te.forwardRef = function (p) {
      return { $$typeof: P, render: p };
    }),
    (te.isValidElement = xe),
    (te.lazy = function (p) {
      return { $$typeof: O, _payload: { _status: -1, _result: p }, _init: K };
    }),
    (te.memo = function (p, k) {
      return { $$typeof: j, type: p, compare: k === void 0 ? null : k };
    }),
    (te.startTransition = function (p) {
      var k = T.transition;
      T.transition = {};
      try {
        p();
      } finally {
        T.transition = k;
      }
    }),
    (te.unstable_act = I),
    (te.useCallback = function (p, k) {
      return ue.current.useCallback(p, k);
    }),
    (te.useContext = function (p) {
      return ue.current.useContext(p);
    }),
    (te.useDebugValue = function () {}),
    (te.useDeferredValue = function (p) {
      return ue.current.useDeferredValue(p);
    }),
    (te.useEffect = function (p, k) {
      return ue.current.useEffect(p, k);
    }),
    (te.useId = function () {
      return ue.current.useId();
    }),
    (te.useImperativeHandle = function (p, k, b) {
      return ue.current.useImperativeHandle(p, k, b);
    }),
    (te.useInsertionEffect = function (p, k) {
      return ue.current.useInsertionEffect(p, k);
    }),
    (te.useLayoutEffect = function (p, k) {
      return ue.current.useLayoutEffect(p, k);
    }),
    (te.useMemo = function (p, k) {
      return ue.current.useMemo(p, k);
    }),
    (te.useReducer = function (p, k, b) {
      return ue.current.useReducer(p, k, b);
    }),
    (te.useRef = function (p) {
      return ue.current.useRef(p);
    }),
    (te.useState = function (p) {
      return ue.current.useState(p);
    }),
    (te.useSyncExternalStore = function (p, k, b) {
      return ue.current.useSyncExternalStore(p, k, b);
    }),
    (te.useTransition = function () {
      return ue.current.useTransition();
    }),
    (te.version = '18.3.1'),
    te
  );
}
var Ka;
function Xi() {
  return (Ka || ((Ka = 1), (Hi.exports = ff())), Hi.exports);
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
function pf() {
  if (Xa) return Lr;
  Xa = 1;
  var v = Xi(),
    d = Symbol.for('react.element'),
    u = Symbol.for('react.fragment'),
    g = Object.prototype.hasOwnProperty,
    S = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(P, _, j) {
    var O,
      R = {},
      A = null,
      $ = null;
    (j !== void 0 && (A = '' + j),
      _.key !== void 0 && (A = '' + _.key),
      _.ref !== void 0 && ($ = _.ref));
    for (O in _) g.call(_, O) && !E.hasOwnProperty(O) && (R[O] = _[O]);
    if (P && P.defaultProps) for (O in ((_ = P.defaultProps), _)) R[O] === void 0 && (R[O] = _[O]);
    return { $$typeof: d, type: P, key: A, ref: $, props: R, _owner: S.current };
  }
  return ((Lr.Fragment = u), (Lr.jsx = L), (Lr.jsxs = L), Lr);
}
var Za;
function mf() {
  return (Za || ((Za = 1), (Qi.exports = pf())), Qi.exports);
}
var f = mf(),
  X = Xi(),
  Ql = {},
  Wi = { exports: {} },
  et = {},
  Gi = { exports: {} },
  qi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ja;
function hf() {
  return (
    Ja ||
      ((Ja = 1),
      (function (v) {
        function d(T, V) {
          var I = T.length;
          T.push(V);
          e: for (; 0 < I; ) {
            var p = (I - 1) >>> 1,
              k = T[p];
            if (0 < S(k, V)) ((T[p] = V), (T[I] = k), (I = p));
            else break e;
          }
        }
        function u(T) {
          return T.length === 0 ? null : T[0];
        }
        function g(T) {
          if (T.length === 0) return null;
          var V = T[0],
            I = T.pop();
          if (I !== V) {
            T[0] = I;
            e: for (var p = 0, k = T.length, b = k >>> 1; p < b; ) {
              var ne = 2 * (p + 1) - 1,
                oe = T[ne],
                ie = ne + 1,
                he = T[ie];
              if (0 > S(oe, I))
                ie < k && 0 > S(he, oe)
                  ? ((T[p] = he), (T[ie] = I), (p = ie))
                  : ((T[p] = oe), (T[ne] = I), (p = ne));
              else if (ie < k && 0 > S(he, I)) ((T[p] = he), (T[ie] = I), (p = ie));
              else break e;
            }
          }
          return V;
        }
        function S(T, V) {
          var I = T.sortIndex - V.sortIndex;
          return I !== 0 ? I : T.id - V.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var E = performance;
          v.unstable_now = function () {
            return E.now();
          };
        } else {
          var L = Date,
            P = L.now();
          v.unstable_now = function () {
            return L.now() - P;
          };
        }
        var _ = [],
          j = [],
          O = 1,
          R = null,
          A = 3,
          $ = !1,
          ee = !1,
          M = !1,
          G = typeof setTimeout == 'function' ? setTimeout : null,
          J = typeof clearTimeout == 'function' ? clearTimeout : null,
          pe = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function fe(T) {
          for (var V = u(j); V !== null; ) {
            if (V.callback === null) g(j);
            else if (V.startTime <= T) (g(j), (V.sortIndex = V.expirationTime), d(_, V));
            else break;
            V = u(j);
          }
        }
        function re(T) {
          if (((M = !1), fe(T), !ee))
            if (u(_) !== null) ((ee = !0), K(Z));
            else {
              var V = u(j);
              V !== null && ue(re, V.startTime - T);
            }
        }
        function Z(T, V) {
          ((ee = !1), M && ((M = !1), J(ae), (ae = -1)), ($ = !0));
          var I = A;
          try {
            for (fe(V), R = u(_); R !== null && (!(R.expirationTime > V) || (T && !at())); ) {
              var p = R.callback;
              if (typeof p == 'function') {
                ((R.callback = null), (A = R.priorityLevel));
                var k = p(R.expirationTime <= V);
                ((V = v.unstable_now()),
                  typeof k == 'function' ? (R.callback = k) : R === u(_) && g(_),
                  fe(V));
              } else g(_);
              R = u(_);
            }
            if (R !== null) var b = !0;
            else {
              var ne = u(j);
              (ne !== null && ue(re, ne.startTime - V), (b = !1));
            }
            return b;
          } finally {
            ((R = null), (A = I), ($ = !1));
          }
        }
        var q = !1,
          me = null,
          ae = -1,
          Le = 5,
          xe = -1;
        function at() {
          return !(v.unstable_now() - xe < Le);
        }
        function Ge() {
          if (me !== null) {
            var T = v.unstable_now();
            xe = T;
            var V = !0;
            try {
              V = me(!0, T);
            } finally {
              V ? Ie() : ((q = !1), (me = null));
            }
          } else q = !1;
        }
        var Ie;
        if (typeof pe == 'function')
          Ie = function () {
            pe(Ge);
          };
        else if (typeof MessageChannel < 'u') {
          var nt = new MessageChannel(),
            W = nt.port2;
          ((nt.port1.onmessage = Ge),
            (Ie = function () {
              W.postMessage(null);
            }));
        } else
          Ie = function () {
            G(Ge, 0);
          };
        function K(T) {
          ((me = T), q || ((q = !0), Ie()));
        }
        function ue(T, V) {
          ae = G(function () {
            T(v.unstable_now());
          }, V);
        }
        ((v.unstable_IdlePriority = 5),
          (v.unstable_ImmediatePriority = 1),
          (v.unstable_LowPriority = 4),
          (v.unstable_NormalPriority = 3),
          (v.unstable_Profiling = null),
          (v.unstable_UserBlockingPriority = 2),
          (v.unstable_cancelCallback = function (T) {
            T.callback = null;
          }),
          (v.unstable_continueExecution = function () {
            ee || $ || ((ee = !0), K(Z));
          }),
          (v.unstable_forceFrameRate = function (T) {
            0 > T || 125 < T
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Le = 0 < T ? Math.floor(1e3 / T) : 5);
          }),
          (v.unstable_getCurrentPriorityLevel = function () {
            return A;
          }),
          (v.unstable_getFirstCallbackNode = function () {
            return u(_);
          }),
          (v.unstable_next = function (T) {
            switch (A) {
              case 1:
              case 2:
              case 3:
                var V = 3;
                break;
              default:
                V = A;
            }
            var I = A;
            A = V;
            try {
              return T();
            } finally {
              A = I;
            }
          }),
          (v.unstable_pauseExecution = function () {}),
          (v.unstable_requestPaint = function () {}),
          (v.unstable_runWithPriority = function (T, V) {
            switch (T) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                T = 3;
            }
            var I = A;
            A = T;
            try {
              return V();
            } finally {
              A = I;
            }
          }),
          (v.unstable_scheduleCallback = function (T, V, I) {
            var p = v.unstable_now();
            switch (
              (typeof I == 'object' && I !== null
                ? ((I = I.delay), (I = typeof I == 'number' && 0 < I ? p + I : p))
                : (I = p),
              T)
            ) {
              case 1:
                var k = -1;
                break;
              case 2:
                k = 250;
                break;
              case 5:
                k = 1073741823;
                break;
              case 4:
                k = 1e4;
                break;
              default:
                k = 5e3;
            }
            return (
              (k = I + k),
              (T = {
                id: O++,
                callback: V,
                priorityLevel: T,
                startTime: I,
                expirationTime: k,
                sortIndex: -1,
              }),
              I > p
                ? ((T.sortIndex = I),
                  d(j, T),
                  u(_) === null && T === u(j) && (M ? (J(ae), (ae = -1)) : (M = !0), ue(re, I - p)))
                : ((T.sortIndex = k), d(_, T), ee || $ || ((ee = !0), K(Z))),
              T
            );
          }),
          (v.unstable_shouldYield = at),
          (v.unstable_wrapCallback = function (T) {
            var V = A;
            return function () {
              var I = A;
              A = V;
              try {
                return T.apply(this, arguments);
              } finally {
                A = I;
              }
            };
          }));
      })(qi)),
    qi
  );
}
var ba;
function vf() {
  return (ba || ((ba = 1), (Gi.exports = hf())), Gi.exports);
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
function yf() {
  if (ec) return et;
  ec = 1;
  var v = Xi(),
    d = vf();
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
  function E(e, t) {
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
    _ = Object.prototype.hasOwnProperty,
    j =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    O = {},
    R = {};
  function A(e) {
    return _.call(R, e) ? !0 : _.call(O, e) ? !1 : j.test(e) ? (R[e] = !0) : ((O[e] = !0), !1);
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
  function ee(e, t, n, r) {
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
  function M(e, t, n, r, l, o, i) {
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
      G[e] = new M(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      G[t] = new M(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      G[e] = new M(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        G[e] = new M(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        G[e] = new M(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      G[e] = new M(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      G[e] = new M(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      G[e] = new M(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      G[e] = new M(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var J = /[\-:]([a-z])/g;
  function pe(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(J, pe);
      G[t] = new M(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(J, pe);
        G[t] = new M(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(J, pe);
      G[t] = new M(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      G[e] = new M(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (G.xlinkHref = new M('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      G[e] = new M(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function fe(e, t, n, r) {
    var l = G.hasOwnProperty(t) ? G[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (ee(t, n, l, r) && (n = null),
      r || l === null
        ? A(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
  var re = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Z = Symbol.for('react.element'),
    q = Symbol.for('react.portal'),
    me = Symbol.for('react.fragment'),
    ae = Symbol.for('react.strict_mode'),
    Le = Symbol.for('react.profiler'),
    xe = Symbol.for('react.provider'),
    at = Symbol.for('react.context'),
    Ge = Symbol.for('react.forward_ref'),
    Ie = Symbol.for('react.suspense'),
    nt = Symbol.for('react.suspense_list'),
    W = Symbol.for('react.memo'),
    K = Symbol.for('react.lazy'),
    ue = Symbol.for('react.offscreen'),
    T = Symbol.iterator;
  function V(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (T && e[T]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var I = Object.assign,
    p;
  function k(e) {
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
  var b = !1;
  function ne(e, t) {
    if (!e || b) return '';
    b = !0;
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
      ((b = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? k(e) : '';
  }
  function oe(e) {
    switch (e.tag) {
      case 5:
        return k(e.type);
      case 16:
        return k('Lazy');
      case 13:
        return k('Suspense');
      case 19:
        return k('SuspenseList');
      case 0:
      case 2:
      case 15:
        return ((e = ne(e.type, !1)), e);
      case 11:
        return ((e = ne(e.type.render, !1)), e);
      case 1:
        return ((e = ne(e.type, !0)), e);
      default:
        return '';
    }
  }
  function ie(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case me:
        return 'Fragment';
      case q:
        return 'Portal';
      case Le:
        return 'Profiler';
      case ae:
        return 'StrictMode';
      case Ie:
        return 'Suspense';
      case nt:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case at:
          return (e.displayName || 'Context') + '.Consumer';
        case xe:
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
        case W:
          return ((t = e.displayName || null), t !== null ? t : ie(e.type) || 'Memo');
        case K:
          ((t = e._payload), (e = e._init));
          try {
            return ie(e(t));
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
        return ie(t);
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
  function ce(e) {
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
  function rt(e) {
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
  function zr(e) {
    e._valueTracker || (e._valueTracker = rt(e));
  }
  function es(e) {
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
  function Ir(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Kl(e, t) {
    var n = t.checked;
    return I({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function ts(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = ce(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      }));
  }
  function ns(e, t) {
    ((t = t.checked), t != null && fe(e, 'checked', t, !1));
  }
  function Xl(e, t) {
    ns(e, t);
    var n = ce(t.value),
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
      ? Zl(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && Zl(e, t.type, ce(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function rs(e, t, n) {
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
  function Zl(e, t, n) {
    (t !== 'number' || Ir(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var Wn = Array.isArray;
  function wn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + ce(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Jl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return I({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function ls(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(u(92));
        if (Wn(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: ce(n) };
  }
  function os(e, t) {
    var n = ce(t.value),
      r = ce(t.defaultValue);
    (n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r));
  }
  function is(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function ss(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function bl(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? ss(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var Mr,
    us = (function (e) {
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
  var qn = {
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
    hc = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(qn).forEach(function (e) {
    hc.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qn[t] = qn[e]));
    });
  });
  function as(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (qn.hasOwnProperty(e) && qn[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function cs(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = as(n, t[n], r);
        (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var vc = I(
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
  function eo(e, t) {
    if (t) {
      if (vc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function to(e, t) {
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
  var no = null;
  function ro(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var lo = null,
    Sn = null,
    kn = null;
  function ds(e) {
    if ((e = hr(e))) {
      if (typeof lo != 'function') throw Error(u(280));
      var t = e.stateNode;
      t && ((t = ll(t)), lo(e.stateNode, e.type, t));
    }
  }
  function fs(e) {
    Sn ? (kn ? kn.push(e) : (kn = [e])) : (Sn = e);
  }
  function ps() {
    if (Sn) {
      var e = Sn,
        t = kn;
      if (((kn = Sn = null), ds(e), t)) for (e = 0; e < t.length; e++) ds(t[e]);
    }
  }
  function ms(e, t) {
    return e(t);
  }
  function hs() {}
  var oo = !1;
  function vs(e, t, n) {
    if (oo) return e(t, n);
    oo = !0;
    try {
      return ms(e, t, n);
    } finally {
      ((oo = !1), (Sn !== null || kn !== null) && (hs(), ps()));
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
    if (n && typeof n != 'function') throw Error(u(231, t, typeof n));
    return n;
  }
  var io = !1;
  if (P)
    try {
      var Kn = {};
      (Object.defineProperty(Kn, 'passive', {
        get: function () {
          io = !0;
        },
      }),
        window.addEventListener('test', Kn, Kn),
        window.removeEventListener('test', Kn, Kn));
    } catch {
      io = !1;
    }
  function yc(e, t, n, r, l, o, i, s, a) {
    var y = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, y);
    } catch (x) {
      this.onError(x);
    }
  }
  var Xn = !1,
    Dr = null,
    Fr = !1,
    so = null,
    gc = {
      onError: function (e) {
        ((Xn = !0), (Dr = e));
      },
    };
  function _c(e, t, n, r, l, o, i, s, a) {
    ((Xn = !1), (Dr = null), yc.apply(gc, arguments));
  }
  function wc(e, t, n, r, l, o, i, s, a) {
    if ((_c.apply(this, arguments), Xn)) {
      if (Xn) {
        var y = Dr;
        ((Xn = !1), (Dr = null));
      } else throw Error(u(198));
      Fr || ((Fr = !0), (so = y));
    }
  }
  function on(e) {
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
  function ys(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function gs(e) {
    if (on(e) !== e) throw Error(u(188));
  }
  function Sc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = on(e)), t === null)) throw Error(u(188));
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
          if (o === n) return (gs(l), e);
          if (o === r) return (gs(l), t);
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
  function _s(e) {
    return ((e = Sc(e)), e !== null ? ws(e) : null);
  }
  function ws(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ws(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ss = d.unstable_scheduleCallback,
    ks = d.unstable_cancelCallback,
    kc = d.unstable_shouldYield,
    xc = d.unstable_requestPaint,
    Ne = d.unstable_now,
    Cc = d.unstable_getCurrentPriorityLevel,
    uo = d.unstable_ImmediatePriority,
    xs = d.unstable_UserBlockingPriority,
    Br = d.unstable_NormalPriority,
    Ec = d.unstable_LowPriority,
    Cs = d.unstable_IdlePriority,
    Ar = null,
    Ct = null;
  function Nc(e) {
    if (Ct && typeof Ct.onCommitFiberRoot == 'function')
      try {
        Ct.onCommitFiberRoot(Ar, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var yt = Math.clz32 ? Math.clz32 : Tc,
    jc = Math.log,
    Pc = Math.LN2;
  function Tc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((jc(e) / Pc) | 0)) | 0);
  }
  var Ur = 64,
    $r = 4194304;
  function Zn(e) {
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
      var s = i & ~l;
      s !== 0 ? (r = Zn(s)) : ((o &= i), o !== 0 && (r = Zn(o)));
    } else ((i = n & ~l), i !== 0 ? (r = Zn(i)) : o !== 0 && (r = Zn(o)));
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
  function Lc(e, t) {
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
  function Oc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes;
      0 < o;
    ) {
      var i = 31 - yt(o),
        s = 1 << i,
        a = l[i];
      (a === -1
        ? ((s & n) === 0 || (s & r) !== 0) && (l[i] = Lc(s, t))
        : a <= t && (e.expiredLanes |= s),
        (o &= ~s));
    }
  }
  function ao(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Es() {
    var e = Ur;
    return ((Ur <<= 1), (Ur & 4194240) === 0 && (Ur = 64), e);
  }
  function co(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Jn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - yt(t)),
      (e[t] = n));
  }
  function Rc(e, t) {
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
  function fo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - yt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var de = 0;
  function Ns(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var js,
    po,
    Ps,
    Ts,
    Ls,
    mo = !1,
    Qr = [],
    At = null,
    Ut = null,
    $t = null,
    bn = new Map(),
    er = new Map(),
    Vt = [],
    zc =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function Os(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        At = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Ut = null;
        break;
      case 'mouseover':
      case 'mouseout':
        $t = null;
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
        t !== null && ((t = hr(t)), t !== null && po(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Ic(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return ((At = tr(At, e, t, n, r, l)), !0);
      case 'dragenter':
        return ((Ut = tr(Ut, e, t, n, r, l)), !0);
      case 'mouseover':
        return (($t = tr($t, e, t, n, r, l)), !0);
      case 'pointerover':
        var o = l.pointerId;
        return (bn.set(o, tr(bn.get(o) || null, e, t, n, r, l)), !0);
      case 'gotpointercapture':
        return ((o = l.pointerId), er.set(o, tr(er.get(o) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function Rs(e) {
    var t = sn(e.target);
    if (t !== null) {
      var n = on(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = ys(n)), t !== null)) {
            ((e.blockedOn = t),
              Ls(e.priority, function () {
                Ps(n);
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
  function Hr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = vo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((no = r), n.target.dispatchEvent(r), (no = null));
      } else return ((t = hr(n)), t !== null && po(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function zs(e, t, n) {
    Hr(e) && n.delete(t);
  }
  function Mc() {
    ((mo = !1),
      At !== null && Hr(At) && (At = null),
      Ut !== null && Hr(Ut) && (Ut = null),
      $t !== null && Hr($t) && ($t = null),
      bn.forEach(zs),
      er.forEach(zs));
  }
  function nr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      mo || ((mo = !0), d.unstable_scheduleCallback(d.unstable_NormalPriority, Mc)));
  }
  function rr(e) {
    function t(l) {
      return nr(l, e);
    }
    if (0 < Qr.length) {
      nr(Qr[0], e);
      for (var n = 1; n < Qr.length; n++) {
        var r = Qr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      At !== null && nr(At, e),
        Ut !== null && nr(Ut, e),
        $t !== null && nr($t, e),
        bn.forEach(t),
        er.forEach(t),
        n = 0;
      n < Vt.length;
      n++
    )
      ((r = Vt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); )
      (Rs(n), n.blockedOn === null && Vt.shift());
  }
  var xn = re.ReactCurrentBatchConfig,
    Wr = !0;
  function Dc(e, t, n, r) {
    var l = de,
      o = xn.transition;
    xn.transition = null;
    try {
      ((de = 1), ho(e, t, n, r));
    } finally {
      ((de = l), (xn.transition = o));
    }
  }
  function Fc(e, t, n, r) {
    var l = de,
      o = xn.transition;
    xn.transition = null;
    try {
      ((de = 4), ho(e, t, n, r));
    } finally {
      ((de = l), (xn.transition = o));
    }
  }
  function ho(e, t, n, r) {
    if (Wr) {
      var l = vo(e, t, n, r);
      if (l === null) (zo(e, t, r, Gr, n), Os(e, r));
      else if (Ic(l, e, t, n, r)) r.stopPropagation();
      else if ((Os(e, r), t & 4 && -1 < zc.indexOf(e))) {
        for (; l !== null; ) {
          var o = hr(l);
          if (
            (o !== null && js(o), (o = vo(e, t, n, r)), o === null && zo(e, t, r, Gr, n), o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else zo(e, t, r, null, n);
    }
  }
  var Gr = null;
  function vo(e, t, n, r) {
    if (((Gr = null), (e = ro(r)), (e = sn(e)), e !== null))
      if (((t = on(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = ys(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Gr = e), null);
  }
  function Is(e) {
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
        switch (Cc()) {
          case uo:
            return 1;
          case xs:
            return 4;
          case Br:
          case Ec:
            return 16;
          case Cs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Qt = null,
    yo = null,
    qr = null;
  function Ms() {
    if (qr) return qr;
    var e,
      t = yo,
      n = t.length,
      r,
      l = 'value' in Qt ? Qt.value : Qt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (qr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Yr(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Kr() {
    return !0;
  }
  function Ds() {
    return !1;
  }
  function lt(e) {
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
          ? Kr
          : Ds),
        (this.isPropagationStopped = Ds),
        this
      );
    }
    return (
      I(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = Kr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Kr));
        },
        persist: function () {},
        isPersistent: Kr,
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
    go = lt(Cn),
    lr = I({}, Cn, { view: 0, detail: 0 }),
    Bc = lt(lr),
    _o,
    wo,
    or,
    Xr = I({}, lr, {
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
      getModifierState: ko,
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
                ? ((_o = e.screenX - or.screenX), (wo = e.screenY - or.screenY))
                : (wo = _o = 0),
              (or = e)),
            _o);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : wo;
      },
    }),
    Fs = lt(Xr),
    Ac = I({}, Xr, { dataTransfer: 0 }),
    Uc = lt(Ac),
    $c = I({}, lr, { relatedTarget: 0 }),
    So = lt($c),
    Vc = I({}, Cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qc = lt(Vc),
    Hc = I({}, Cn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Wc = lt(Hc),
    Gc = I({}, Cn, { data: 0 }),
    Bs = lt(Gc),
    qc = {
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
    Yc = {
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
    Kc = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Xc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Kc[e]) ? !!t[e] : !1;
  }
  function ko() {
    return Xc;
  }
  var Zc = I({}, lr, {
      key: function (e) {
        if (e.key) {
          var t = qc[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Yr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Yc[e.keyCode] || 'Unidentified'
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
      getModifierState: ko,
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
    Jc = lt(Zc),
    bc = I({}, Xr, {
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
    As = lt(bc),
    ed = I({}, lr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ko,
    }),
    td = lt(ed),
    nd = I({}, Cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    rd = lt(nd),
    ld = I({}, Xr, {
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
    od = lt(ld),
    id = [9, 13, 27, 32],
    xo = P && 'CompositionEvent' in window,
    ir = null;
  P && 'documentMode' in document && (ir = document.documentMode);
  var sd = P && 'TextEvent' in window && !ir,
    Us = P && (!xo || (ir && 8 < ir && 11 >= ir)),
    $s = ' ',
    Vs = !1;
  function Qs(e, t) {
    switch (e) {
      case 'keyup':
        return id.indexOf(t.keyCode) !== -1;
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
  function Hs(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var En = !1;
  function ud(e, t) {
    switch (e) {
      case 'compositionend':
        return Hs(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Vs = !0), $s);
      case 'textInput':
        return ((e = t.data), e === $s && Vs ? null : e);
      default:
        return null;
    }
  }
  function ad(e, t) {
    if (En)
      return e === 'compositionend' || (!xo && Qs(e, t))
        ? ((e = Ms()), (qr = yo = Qt = null), (En = !1), e)
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
        return Us && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var cd = {
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
  function Ws(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!cd[e.type] : t === 'textarea';
  }
  function Gs(e, t, n, r) {
    (fs(r),
      (t = tl(t, 'onChange')),
      0 < t.length &&
        ((n = new go('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
  }
  var sr = null,
    ur = null;
  function dd(e) {
    cu(e, 0);
  }
  function Zr(e) {
    var t = Ln(e);
    if (es(t)) return e;
  }
  function fd(e, t) {
    if (e === 'change') return t;
  }
  var qs = !1;
  if (P) {
    var Co;
    if (P) {
      var Eo = 'oninput' in document;
      if (!Eo) {
        var Ys = document.createElement('div');
        (Ys.setAttribute('oninput', 'return;'), (Eo = typeof Ys.oninput == 'function'));
      }
      Co = Eo;
    } else Co = !1;
    qs = Co && (!document.documentMode || 9 < document.documentMode);
  }
  function Ks() {
    sr && (sr.detachEvent('onpropertychange', Xs), (ur = sr = null));
  }
  function Xs(e) {
    if (e.propertyName === 'value' && Zr(ur)) {
      var t = [];
      (Gs(t, ur, e, ro(e)), vs(dd, t));
    }
  }
  function pd(e, t, n) {
    e === 'focusin'
      ? (Ks(), (sr = t), (ur = n), sr.attachEvent('onpropertychange', Xs))
      : e === 'focusout' && Ks();
  }
  function md(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Zr(ur);
  }
  function hd(e, t) {
    if (e === 'click') return Zr(t);
  }
  function vd(e, t) {
    if (e === 'input' || e === 'change') return Zr(t);
  }
  function yd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var gt = typeof Object.is == 'function' ? Object.is : yd;
  function ar(e, t) {
    if (gt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!_.call(t, l) || !gt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Zs(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Js(e, t) {
    var n = Zs(e);
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
      n = Zs(n);
    }
  }
  function bs(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? bs(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function eu() {
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
  function No(e) {
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
  function gd(e) {
    var t = eu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && bs(n.ownerDocument.documentElement, n)) {
      if (r !== null && No(n)) {
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
            (l = Js(n, o)));
          var i = Js(n, r);
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
  var _d = P && 'documentMode' in document && 11 >= document.documentMode,
    Nn = null,
    jo = null,
    cr = null,
    Po = !1;
  function tu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Po ||
      Nn == null ||
      Nn !== Ir(r) ||
      ((r = Nn),
      'selectionStart' in r && No(r)
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
        (r = tl(jo, 'onSelect')),
        0 < r.length &&
          ((t = new go('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Nn))));
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
  var jn = {
      animationend: Jr('Animation', 'AnimationEnd'),
      animationiteration: Jr('Animation', 'AnimationIteration'),
      animationstart: Jr('Animation', 'AnimationStart'),
      transitionend: Jr('Transition', 'TransitionEnd'),
    },
    To = {},
    nu = {};
  P &&
    ((nu = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete jn.animationend.animation,
      delete jn.animationiteration.animation,
      delete jn.animationstart.animation),
    'TransitionEvent' in window || delete jn.transitionend.transition);
  function br(e) {
    if (To[e]) return To[e];
    if (!jn[e]) return e;
    var t = jn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in nu) return (To[e] = t[n]);
    return e;
  }
  var ru = br('animationend'),
    lu = br('animationiteration'),
    ou = br('animationstart'),
    iu = br('transitionend'),
    su = new Map(),
    uu =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Ht(e, t) {
    (su.set(e, t), E(t, [e]));
  }
  for (var Lo = 0; Lo < uu.length; Lo++) {
    var Oo = uu[Lo],
      wd = Oo.toLowerCase(),
      Sd = Oo[0].toUpperCase() + Oo.slice(1);
    Ht(wd, 'on' + Sd);
  }
  (Ht(ru, 'onAnimationEnd'),
    Ht(lu, 'onAnimationIteration'),
    Ht(ou, 'onAnimationStart'),
    Ht('dblclick', 'onDoubleClick'),
    Ht('focusin', 'onFocus'),
    Ht('focusout', 'onBlur'),
    Ht(iu, 'onTransitionEnd'),
    L('onMouseEnter', ['mouseout', 'mouseover']),
    L('onMouseLeave', ['mouseout', 'mouseover']),
    L('onPointerEnter', ['pointerout', 'pointerover']),
    L('onPointerLeave', ['pointerout', 'pointerover']),
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
  var dr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    kd = new Set('cancel close invalid load scroll toggle'.split(' ').concat(dr));
  function au(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n), wc(r, t, void 0, e), (e.currentTarget = null));
  }
  function cu(e, t) {
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
            (au(l, s, y), (o = a));
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
            (au(l, s, y), (o = a));
          }
      }
    }
    if (Fr) throw ((e = so), (Fr = !1), (so = null), e);
  }
  function ye(e, t) {
    var n = t[Ao];
    n === void 0 && (n = t[Ao] = new Set());
    var r = e + '__bubble';
    n.has(r) || (du(t, e, 2, !1), n.add(r));
  }
  function Ro(e, t, n) {
    var r = 0;
    (t && (r |= 4), du(n, e, r, t));
  }
  var el = '_reactListening' + Math.random().toString(36).slice(2);
  function fr(e) {
    if (!e[el]) {
      ((e[el] = !0),
        g.forEach(function (n) {
          n !== 'selectionchange' && (kd.has(n) || Ro(n, !1, e), Ro(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[el] || ((t[el] = !0), Ro('selectionchange', !1, t));
    }
  }
  function du(e, t, n, r) {
    switch (Is(t)) {
      case 1:
        var l = Dc;
        break;
      case 4:
        l = Fc;
        break;
      default:
        l = ho;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !io || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function zo(e, t, n, r, l) {
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
            if (((i = sn(s)), i === null)) return;
            if (((a = i.tag), a === 5 || a === 6)) {
              r = o = i;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
    vs(function () {
      var y = o,
        x = ro(n),
        C = [];
      e: {
        var w = su.get(e);
        if (w !== void 0) {
          var z = go,
            F = e;
          switch (e) {
            case 'keypress':
              if (Yr(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              z = Jc;
              break;
            case 'focusin':
              ((F = 'focus'), (z = So));
              break;
            case 'focusout':
              ((F = 'blur'), (z = So));
              break;
            case 'beforeblur':
            case 'afterblur':
              z = So;
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
              z = Fs;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              z = Uc;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              z = td;
              break;
            case ru:
            case lu:
            case ou:
              z = Qc;
              break;
            case iu:
              z = rd;
              break;
            case 'scroll':
              z = Bc;
              break;
            case 'wheel':
              z = od;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              z = Wc;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              z = As;
          }
          var B = (t & 4) !== 0,
            je = !B && e === 'scroll',
            m = B ? (w !== null ? w + 'Capture' : null) : w;
          B = [];
          for (var c = y, h; c !== null; ) {
            h = c;
            var N = h.stateNode;
            if (
              (h.tag === 5 &&
                N !== null &&
                ((h = N), m !== null && ((N = Yn(c, m)), N != null && B.push(pr(c, N, h)))),
              je)
            )
              break;
            c = c.return;
          }
          0 < B.length && ((w = new z(w, F, null, n, x)), C.push({ event: w, listeners: B }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((w = e === 'mouseover' || e === 'pointerover'),
            (z = e === 'mouseout' || e === 'pointerout'),
            w && n !== no && (F = n.relatedTarget || n.fromElement) && (sn(F) || F[Tt]))
          )
            break e;
          if (
            (z || w) &&
            ((w =
              x.window === x
                ? x
                : (w = x.ownerDocument)
                  ? w.defaultView || w.parentWindow
                  : window),
            z
              ? ((F = n.relatedTarget || n.toElement),
                (z = y),
                (F = F ? sn(F) : null),
                F !== null &&
                  ((je = on(F)), F !== je || (F.tag !== 5 && F.tag !== 6)) &&
                  (F = null))
              : ((z = null), (F = y)),
            z !== F)
          ) {
            if (
              ((B = Fs),
              (N = 'onMouseLeave'),
              (m = 'onMouseEnter'),
              (c = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((B = As), (N = 'onPointerLeave'), (m = 'onPointerEnter'), (c = 'pointer')),
              (je = z == null ? w : Ln(z)),
              (h = F == null ? w : Ln(F)),
              (w = new B(N, c + 'leave', z, n, x)),
              (w.target = je),
              (w.relatedTarget = h),
              (N = null),
              sn(x) === y &&
                ((B = new B(m, c + 'enter', F, n, x)),
                (B.target = h),
                (B.relatedTarget = je),
                (N = B)),
              (je = N),
              z && F)
            )
              t: {
                for (B = z, m = F, c = 0, h = B; h; h = Pn(h)) c++;
                for (h = 0, N = m; N; N = Pn(N)) h++;
                for (; 0 < c - h; ) ((B = Pn(B)), c--);
                for (; 0 < h - c; ) ((m = Pn(m)), h--);
                for (; c--; ) {
                  if (B === m || (m !== null && B === m.alternate)) break t;
                  ((B = Pn(B)), (m = Pn(m)));
                }
                B = null;
              }
            else B = null;
            (z !== null && fu(C, w, z, B, !1), F !== null && je !== null && fu(C, je, F, B, !0));
          }
        }
        e: {
          if (
            ((w = y ? Ln(y) : window),
            (z = w.nodeName && w.nodeName.toLowerCase()),
            z === 'select' || (z === 'input' && w.type === 'file'))
          )
            var U = fd;
          else if (Ws(w))
            if (qs) U = vd;
            else {
              U = md;
              var Q = pd;
            }
          else
            (z = w.nodeName) &&
              z.toLowerCase() === 'input' &&
              (w.type === 'checkbox' || w.type === 'radio') &&
              (U = hd);
          if (U && (U = U(e, y))) {
            Gs(C, U, n, x);
            break e;
          }
          (Q && Q(e, w, y),
            e === 'focusout' &&
              (Q = w._wrapperState) &&
              Q.controlled &&
              w.type === 'number' &&
              Zl(w, 'number', w.value));
        }
        switch (((Q = y ? Ln(y) : window), e)) {
          case 'focusin':
            (Ws(Q) || Q.contentEditable === 'true') && ((Nn = Q), (jo = y), (cr = null));
            break;
          case 'focusout':
            cr = jo = Nn = null;
            break;
          case 'mousedown':
            Po = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Po = !1), tu(C, n, x));
            break;
          case 'selectionchange':
            if (_d) break;
          case 'keydown':
          case 'keyup':
            tu(C, n, x);
        }
        var H;
        if (xo)
          e: {
            switch (e) {
              case 'compositionstart':
                var Y = 'onCompositionStart';
                break e;
              case 'compositionend':
                Y = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Y = 'onCompositionUpdate';
                break e;
            }
            Y = void 0;
          }
        else
          En
            ? Qs(e, n) && (Y = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (Y = 'onCompositionStart');
        (Y &&
          (Us &&
            n.locale !== 'ko' &&
            (En || Y !== 'onCompositionStart'
              ? Y === 'onCompositionEnd' && En && (H = Ms())
              : ((Qt = x), (yo = 'value' in Qt ? Qt.value : Qt.textContent), (En = !0))),
          (Q = tl(y, Y)),
          0 < Q.length &&
            ((Y = new Bs(Y, e, null, n, x)),
            C.push({ event: Y, listeners: Q }),
            H ? (Y.data = H) : ((H = Hs(n)), H !== null && (Y.data = H)))),
          (H = sd ? ud(e, n) : ad(e, n)) &&
            ((y = tl(y, 'onBeforeInput')),
            0 < y.length &&
              ((x = new Bs('onBeforeInput', 'beforeinput', null, n, x)),
              C.push({ event: x, listeners: y }),
              (x.data = H))));
      }
      cu(C, t);
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
  function Pn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function fu(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var s = n,
        a = s.alternate,
        y = s.stateNode;
      if (a !== null && a === r) break;
      (s.tag === 5 &&
        y !== null &&
        ((s = y),
        l
          ? ((a = Yn(n, o)), a != null && i.unshift(pr(n, a, s)))
          : l || ((a = Yn(n, o)), a != null && i.push(pr(n, a, s)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var xd = /\r\n?/g,
    Cd = /\u0000|\uFFFD/g;
  function pu(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        xd,
        `
`
      )
      .replace(Cd, '');
  }
  function nl(e, t, n) {
    if (((t = pu(t)), pu(e) !== t && n)) throw Error(u(425));
  }
  function rl() {}
  var Io = null,
    Mo = null;
  function Do(e, t) {
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
  var Fo = typeof setTimeout == 'function' ? setTimeout : void 0,
    Ed = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    mu = typeof Promise == 'function' ? Promise : void 0,
    Nd =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof mu < 'u'
          ? function (e) {
              return mu.resolve(null).then(e).catch(jd);
            }
          : Fo;
  function jd(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Bo(e, t) {
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
  function Wt(e) {
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
  function hu(e) {
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
  var Tn = Math.random().toString(36).slice(2),
    Et = '__reactFiber$' + Tn,
    mr = '__reactProps$' + Tn,
    Tt = '__reactContainer$' + Tn,
    Ao = '__reactEvents$' + Tn,
    Pd = '__reactListeners$' + Tn,
    Td = '__reactHandles$' + Tn;
  function sn(e) {
    var t = e[Et];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Tt] || n[Et])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = hu(e); e !== null; ) {
            if ((n = e[Et])) return n;
            e = hu(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function hr(e) {
    return (
      (e = e[Et] || e[Tt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Ln(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function ll(e) {
    return e[mr] || null;
  }
  var Uo = [],
    On = -1;
  function Gt(e) {
    return { current: e };
  }
  function ge(e) {
    0 > On || ((e.current = Uo[On]), (Uo[On] = null), On--);
  }
  function ve(e, t) {
    (On++, (Uo[On] = e.current), (e.current = t));
  }
  var qt = {},
    $e = Gt(qt),
    Ke = Gt(!1),
    un = qt;
  function Rn(e, t) {
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
  function Xe(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function ol() {
    (ge(Ke), ge($e));
  }
  function vu(e, t, n) {
    if ($e.current !== qt) throw Error(u(168));
    (ve($e, t), ve(Ke, n));
  }
  function yu(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(u(108, he(e) || 'Unknown', l));
    return I({}, n, r);
  }
  function il(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || qt),
      (un = $e.current),
      ve($e, e),
      ve(Ke, Ke.current),
      !0
    );
  }
  function gu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    (n
      ? ((e = yu(e, t, un)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ge(Ke),
        ge($e),
        ve($e, e))
      : ge(Ke),
      ve(Ke, n));
  }
  var Lt = null,
    sl = !1,
    $o = !1;
  function _u(e) {
    Lt === null ? (Lt = [e]) : Lt.push(e);
  }
  function Ld(e) {
    ((sl = !0), _u(e));
  }
  function Yt() {
    if (!$o && Lt !== null) {
      $o = !0;
      var e = 0,
        t = de;
      try {
        var n = Lt;
        for (de = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Lt = null), (sl = !1));
      } catch (l) {
        throw (Lt !== null && (Lt = Lt.slice(e + 1)), Ss(uo, Yt), l);
      } finally {
        ((de = t), ($o = !1));
      }
    }
    return null;
  }
  var zn = [],
    In = 0,
    ul = null,
    al = 0,
    ct = [],
    dt = 0,
    an = null,
    Ot = 1,
    Rt = '';
  function cn(e, t) {
    ((zn[In++] = al), (zn[In++] = ul), (ul = e), (al = t));
  }
  function wu(e, t, n) {
    ((ct[dt++] = Ot), (ct[dt++] = Rt), (ct[dt++] = an), (an = e));
    var r = Ot;
    e = Rt;
    var l = 32 - yt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var o = 32 - yt(t) + l;
    if (30 < o) {
      var i = l - (l % 5);
      ((o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (Ot = (1 << (32 - yt(t) + l)) | (n << l) | r),
        (Rt = o + e));
    } else ((Ot = (1 << o) | (n << l) | r), (Rt = e));
  }
  function Vo(e) {
    e.return !== null && (cn(e, 1), wu(e, 1, 0));
  }
  function Qo(e) {
    for (; e === ul; ) ((ul = zn[--In]), (zn[In] = null), (al = zn[--In]), (zn[In] = null));
    for (; e === an; )
      ((an = ct[--dt]),
        (ct[dt] = null),
        (Rt = ct[--dt]),
        (ct[dt] = null),
        (Ot = ct[--dt]),
        (ct[dt] = null));
  }
  var ot = null,
    it = null,
    we = !1,
    _t = null;
  function Su(e, t) {
    var n = ht(5, null, null, 0);
    ((n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function ku(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (ot = e), (it = Wt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ot = e), (it = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = an !== null ? { id: Ot, overflow: Rt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = ht(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (ot = e),
              (it = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ho(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Wo(e) {
    if (we) {
      var t = it;
      if (t) {
        var n = t;
        if (!ku(e, t)) {
          if (Ho(e)) throw Error(u(418));
          t = Wt(n.nextSibling);
          var r = ot;
          t && ku(e, t) ? Su(r, n) : ((e.flags = (e.flags & -4097) | 2), (we = !1), (ot = e));
        }
      } else {
        if (Ho(e)) throw Error(u(418));
        ((e.flags = (e.flags & -4097) | 2), (we = !1), (ot = e));
      }
    }
  }
  function xu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ot = e;
  }
  function cl(e) {
    if (e !== ot) return !1;
    if (!we) return (xu(e), (we = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !Do(e.type, e.memoizedProps))),
      t && (t = it))
    ) {
      if (Ho(e)) throw (Cu(), Error(u(418)));
      for (; t; ) (Su(e, t), (t = Wt(t.nextSibling)));
    }
    if ((xu(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                it = Wt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        it = null;
      }
    } else it = ot ? Wt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Cu() {
    for (var e = it; e; ) e = Wt(e.nextSibling);
  }
  function Mn() {
    ((it = ot = null), (we = !1));
  }
  function Go(e) {
    _t === null ? (_t = [e]) : _t.push(e);
  }
  var Od = re.ReactCurrentBatchConfig;
  function vr(e, t, n) {
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
  function dl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        u(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      )
    );
  }
  function Eu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Nu(e) {
    function t(m, c) {
      if (e) {
        var h = m.deletions;
        h === null ? ((m.deletions = [c]), (m.flags |= 16)) : h.push(c);
      }
    }
    function n(m, c) {
      if (!e) return null;
      for (; c !== null; ) (t(m, c), (c = c.sibling));
      return null;
    }
    function r(m, c) {
      for (m = new Map(); c !== null; )
        (c.key !== null ? m.set(c.key, c) : m.set(c.index, c), (c = c.sibling));
      return m;
    }
    function l(m, c) {
      return ((m = nn(m, c)), (m.index = 0), (m.sibling = null), m);
    }
    function o(m, c, h) {
      return (
        (m.index = h),
        e
          ? ((h = m.alternate),
            h !== null ? ((h = h.index), h < c ? ((m.flags |= 2), c) : h) : ((m.flags |= 2), c))
          : ((m.flags |= 1048576), c)
      );
    }
    function i(m) {
      return (e && m.alternate === null && (m.flags |= 2), m);
    }
    function s(m, c, h, N) {
      return c === null || c.tag !== 6
        ? ((c = Fi(h, m.mode, N)), (c.return = m), c)
        : ((c = l(c, h)), (c.return = m), c);
    }
    function a(m, c, h, N) {
      var U = h.type;
      return U === me
        ? x(m, c, h.props.children, N, h.key)
        : c !== null &&
            (c.elementType === U ||
              (typeof U == 'object' && U !== null && U.$$typeof === K && Eu(U) === c.type))
          ? ((N = l(c, h.props)), (N.ref = vr(m, c, h)), (N.return = m), N)
          : ((N = Ml(h.type, h.key, h.props, null, m.mode, N)),
            (N.ref = vr(m, c, h)),
            (N.return = m),
            N);
    }
    function y(m, c, h, N) {
      return c === null ||
        c.tag !== 4 ||
        c.stateNode.containerInfo !== h.containerInfo ||
        c.stateNode.implementation !== h.implementation
        ? ((c = Bi(h, m.mode, N)), (c.return = m), c)
        : ((c = l(c, h.children || [])), (c.return = m), c);
    }
    function x(m, c, h, N, U) {
      return c === null || c.tag !== 7
        ? ((c = gn(h, m.mode, N, U)), (c.return = m), c)
        : ((c = l(c, h)), (c.return = m), c);
    }
    function C(m, c, h) {
      if ((typeof c == 'string' && c !== '') || typeof c == 'number')
        return ((c = Fi('' + c, m.mode, h)), (c.return = m), c);
      if (typeof c == 'object' && c !== null) {
        switch (c.$$typeof) {
          case Z:
            return (
              (h = Ml(c.type, c.key, c.props, null, m.mode, h)),
              (h.ref = vr(m, null, c)),
              (h.return = m),
              h
            );
          case q:
            return ((c = Bi(c, m.mode, h)), (c.return = m), c);
          case K:
            var N = c._init;
            return C(m, N(c._payload), h);
        }
        if (Wn(c) || V(c)) return ((c = gn(c, m.mode, h, null)), (c.return = m), c);
        dl(m, c);
      }
      return null;
    }
    function w(m, c, h, N) {
      var U = c !== null ? c.key : null;
      if ((typeof h == 'string' && h !== '') || typeof h == 'number')
        return U !== null ? null : s(m, c, '' + h, N);
      if (typeof h == 'object' && h !== null) {
        switch (h.$$typeof) {
          case Z:
            return h.key === U ? a(m, c, h, N) : null;
          case q:
            return h.key === U ? y(m, c, h, N) : null;
          case K:
            return ((U = h._init), w(m, c, U(h._payload), N));
        }
        if (Wn(h) || V(h)) return U !== null ? null : x(m, c, h, N, null);
        dl(m, h);
      }
      return null;
    }
    function z(m, c, h, N, U) {
      if ((typeof N == 'string' && N !== '') || typeof N == 'number')
        return ((m = m.get(h) || null), s(c, m, '' + N, U));
      if (typeof N == 'object' && N !== null) {
        switch (N.$$typeof) {
          case Z:
            return ((m = m.get(N.key === null ? h : N.key) || null), a(c, m, N, U));
          case q:
            return ((m = m.get(N.key === null ? h : N.key) || null), y(c, m, N, U));
          case K:
            var Q = N._init;
            return z(m, c, h, Q(N._payload), U);
        }
        if (Wn(N) || V(N)) return ((m = m.get(h) || null), x(c, m, N, U, null));
        dl(c, N);
      }
      return null;
    }
    function F(m, c, h, N) {
      for (var U = null, Q = null, H = c, Y = (c = 0), Fe = null; H !== null && Y < h.length; Y++) {
        H.index > Y ? ((Fe = H), (H = null)) : (Fe = H.sibling);
        var se = w(m, H, h[Y], N);
        if (se === null) {
          H === null && (H = Fe);
          break;
        }
        (e && H && se.alternate === null && t(m, H),
          (c = o(se, c, Y)),
          Q === null ? (U = se) : (Q.sibling = se),
          (Q = se),
          (H = Fe));
      }
      if (Y === h.length) return (n(m, H), we && cn(m, Y), U);
      if (H === null) {
        for (; Y < h.length; Y++)
          ((H = C(m, h[Y], N)),
            H !== null && ((c = o(H, c, Y)), Q === null ? (U = H) : (Q.sibling = H), (Q = H)));
        return (we && cn(m, Y), U);
      }
      for (H = r(m, H); Y < h.length; Y++)
        ((Fe = z(H, m, Y, h[Y], N)),
          Fe !== null &&
            (e && Fe.alternate !== null && H.delete(Fe.key === null ? Y : Fe.key),
            (c = o(Fe, c, Y)),
            Q === null ? (U = Fe) : (Q.sibling = Fe),
            (Q = Fe)));
      return (
        e &&
          H.forEach(function (rn) {
            return t(m, rn);
          }),
        we && cn(m, Y),
        U
      );
    }
    function B(m, c, h, N) {
      var U = V(h);
      if (typeof U != 'function') throw Error(u(150));
      if (((h = U.call(h)), h == null)) throw Error(u(151));
      for (
        var Q = (U = null), H = c, Y = (c = 0), Fe = null, se = h.next();
        H !== null && !se.done;
        Y++, se = h.next()
      ) {
        H.index > Y ? ((Fe = H), (H = null)) : (Fe = H.sibling);
        var rn = w(m, H, se.value, N);
        if (rn === null) {
          H === null && (H = Fe);
          break;
        }
        (e && H && rn.alternate === null && t(m, H),
          (c = o(rn, c, Y)),
          Q === null ? (U = rn) : (Q.sibling = rn),
          (Q = rn),
          (H = Fe));
      }
      if (se.done) return (n(m, H), we && cn(m, Y), U);
      if (H === null) {
        for (; !se.done; Y++, se = h.next())
          ((se = C(m, se.value, N)),
            se !== null && ((c = o(se, c, Y)), Q === null ? (U = se) : (Q.sibling = se), (Q = se)));
        return (we && cn(m, Y), U);
      }
      for (H = r(m, H); !se.done; Y++, se = h.next())
        ((se = z(H, m, Y, se.value, N)),
          se !== null &&
            (e && se.alternate !== null && H.delete(se.key === null ? Y : se.key),
            (c = o(se, c, Y)),
            Q === null ? (U = se) : (Q.sibling = se),
            (Q = se)));
      return (
        e &&
          H.forEach(function (df) {
            return t(m, df);
          }),
        we && cn(m, Y),
        U
      );
    }
    function je(m, c, h, N) {
      if (
        (typeof h == 'object' &&
          h !== null &&
          h.type === me &&
          h.key === null &&
          (h = h.props.children),
        typeof h == 'object' && h !== null)
      ) {
        switch (h.$$typeof) {
          case Z:
            e: {
              for (var U = h.key, Q = c; Q !== null; ) {
                if (Q.key === U) {
                  if (((U = h.type), U === me)) {
                    if (Q.tag === 7) {
                      (n(m, Q.sibling), (c = l(Q, h.props.children)), (c.return = m), (m = c));
                      break e;
                    }
                  } else if (
                    Q.elementType === U ||
                    (typeof U == 'object' && U !== null && U.$$typeof === K && Eu(U) === Q.type)
                  ) {
                    (n(m, Q.sibling),
                      (c = l(Q, h.props)),
                      (c.ref = vr(m, Q, h)),
                      (c.return = m),
                      (m = c));
                    break e;
                  }
                  n(m, Q);
                  break;
                } else t(m, Q);
                Q = Q.sibling;
              }
              h.type === me
                ? ((c = gn(h.props.children, m.mode, N, h.key)), (c.return = m), (m = c))
                : ((N = Ml(h.type, h.key, h.props, null, m.mode, N)),
                  (N.ref = vr(m, c, h)),
                  (N.return = m),
                  (m = N));
            }
            return i(m);
          case q:
            e: {
              for (Q = h.key; c !== null; ) {
                if (c.key === Q)
                  if (
                    c.tag === 4 &&
                    c.stateNode.containerInfo === h.containerInfo &&
                    c.stateNode.implementation === h.implementation
                  ) {
                    (n(m, c.sibling), (c = l(c, h.children || [])), (c.return = m), (m = c));
                    break e;
                  } else {
                    n(m, c);
                    break;
                  }
                else t(m, c);
                c = c.sibling;
              }
              ((c = Bi(h, m.mode, N)), (c.return = m), (m = c));
            }
            return i(m);
          case K:
            return ((Q = h._init), je(m, c, Q(h._payload), N));
        }
        if (Wn(h)) return F(m, c, h, N);
        if (V(h)) return B(m, c, h, N);
        dl(m, h);
      }
      return (typeof h == 'string' && h !== '') || typeof h == 'number'
        ? ((h = '' + h),
          c !== null && c.tag === 6
            ? (n(m, c.sibling), (c = l(c, h)), (c.return = m), (m = c))
            : (n(m, c), (c = Fi(h, m.mode, N)), (c.return = m), (m = c)),
          i(m))
        : n(m, c);
    }
    return je;
  }
  var Dn = Nu(!0),
    ju = Nu(!1),
    fl = Gt(null),
    pl = null,
    Fn = null,
    qo = null;
  function Yo() {
    qo = Fn = pl = null;
  }
  function Ko(e) {
    var t = fl.current;
    (ge(fl), (e._currentValue = t));
  }
  function Xo(e, t, n) {
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
  function Bn(e, t) {
    ((pl = e),
      (qo = Fn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ze = !0), (e.firstContext = null)));
  }
  function ft(e) {
    var t = e._currentValue;
    if (qo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Fn === null)) {
        if (pl === null) throw Error(u(308));
        ((Fn = e), (pl.dependencies = { lanes: 0, firstContext: e }));
      } else Fn = Fn.next = e;
    return t;
  }
  var dn = null;
  function Zo(e) {
    dn === null ? (dn = [e]) : dn.push(e);
  }
  function Pu(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Zo(t)) : ((n.next = l.next), (l.next = n)),
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
  var Kt = !1;
  function Jo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Tu(e, t) {
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
  function It(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Xt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (le & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        zt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Zo(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      zt(e, n)
    );
  }
  function ml(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), fo(e, n));
    }
  }
  function Lu(e, t) {
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
      s = l.shared.pending;
    if (s !== null) {
      l.shared.pending = null;
      var a = s,
        y = a.next;
      ((a.next = null), i === null ? (o = y) : (i.next = y), (i = a));
      var x = e.alternate;
      x !== null &&
        ((x = x.updateQueue),
        (s = x.lastBaseUpdate),
        s !== i && (s === null ? (x.firstBaseUpdate = y) : (s.next = y), (x.lastBaseUpdate = a)));
    }
    if (o !== null) {
      var C = l.baseState;
      ((i = 0), (x = y = a = null), (s = o));
      do {
        var w = s.lane,
          z = s.eventTime;
        if ((r & w) === w) {
          x !== null &&
            (x = x.next =
              {
                eventTime: z,
                lane: 0,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null,
              });
          e: {
            var F = e,
              B = s;
            switch (((w = t), (z = n), B.tag)) {
              case 1:
                if (((F = B.payload), typeof F == 'function')) {
                  C = F.call(z, C, w);
                  break e;
                }
                C = F;
                break e;
              case 3:
                F.flags = (F.flags & -65537) | 128;
              case 0:
                if (
                  ((F = B.payload), (w = typeof F == 'function' ? F.call(z, C, w) : F), w == null)
                )
                  break e;
                C = I({}, C, w);
                break e;
              case 2:
                Kt = !0;
            }
          }
          s.callback !== null &&
            s.lane !== 0 &&
            ((e.flags |= 64), (w = l.effects), w === null ? (l.effects = [s]) : w.push(s));
        } else
          ((z = {
            eventTime: z,
            lane: w,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            x === null ? ((y = x = z), (a = C)) : (x = x.next = z),
            (i |= w));
        if (((s = s.next), s === null)) {
          if (((s = l.shared.pending), s === null)) break;
          ((w = s),
            (s = w.next),
            (w.next = null),
            (l.lastBaseUpdate = w),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (x === null && (a = C),
        (l.baseState = a),
        (l.firstBaseUpdate = y),
        (l.lastBaseUpdate = x),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((i |= l.lane), (l = l.next));
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      ((mn |= i), (e.lanes = i), (e.memoizedState = C));
    }
  }
  function Ou(e, t, n) {
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
  var yr = {},
    Nt = Gt(yr),
    gr = Gt(yr),
    _r = Gt(yr);
  function fn(e) {
    if (e === yr) throw Error(u(174));
    return e;
  }
  function bo(e, t) {
    switch ((ve(_r, t), ve(gr, e), ve(Nt, yr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : bl(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = bl(t, e)));
    }
    (ge(Nt), ve(Nt, t));
  }
  function An() {
    (ge(Nt), ge(gr), ge(_r));
  }
  function Ru(e) {
    fn(_r.current);
    var t = fn(Nt.current),
      n = bl(t, e.type);
    t !== n && (ve(gr, e), ve(Nt, n));
  }
  function ei(e) {
    gr.current === e && (ge(Nt), ge(gr));
  }
  var Se = Gt(0);
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
  var ti = [];
  function ni() {
    for (var e = 0; e < ti.length; e++) ti[e]._workInProgressVersionPrimary = null;
    ti.length = 0;
  }
  var yl = re.ReactCurrentDispatcher,
    ri = re.ReactCurrentBatchConfig,
    pn = 0,
    ke = null,
    Oe = null,
    Me = null,
    gl = !1,
    wr = !1,
    Sr = 0,
    Rd = 0;
  function Ve() {
    throw Error(u(321));
  }
  function li(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!gt(e[n], t[n])) return !1;
    return !0;
  }
  function oi(e, t, n, r, l, o) {
    if (
      ((pn = o),
      (ke = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (yl.current = e === null || e.memoizedState === null ? Dd : Fd),
      (e = n(r, l)),
      wr)
    ) {
      o = 0;
      do {
        if (((wr = !1), (Sr = 0), 25 <= o)) throw Error(u(301));
        ((o += 1), (Me = Oe = null), (t.updateQueue = null), (yl.current = Bd), (e = n(r, l)));
      } while (wr);
    }
    if (
      ((yl.current = Sl),
      (t = Oe !== null && Oe.next !== null),
      (pn = 0),
      (Me = Oe = ke = null),
      (gl = !1),
      t)
    )
      throw Error(u(300));
    return e;
  }
  function ii() {
    var e = Sr !== 0;
    return ((Sr = 0), e);
  }
  function jt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Me === null ? (ke.memoizedState = Me = e) : (Me = Me.next = e), Me);
  }
  function pt() {
    if (Oe === null) {
      var e = ke.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Oe.next;
    var t = Me === null ? ke.memoizedState : Me.next;
    if (t !== null) ((Me = t), (Oe = e));
    else {
      if (e === null) throw Error(u(310));
      ((Oe = e),
        (e = {
          memoizedState: Oe.memoizedState,
          baseState: Oe.baseState,
          baseQueue: Oe.baseQueue,
          queue: Oe.queue,
          next: null,
        }),
        Me === null ? (ke.memoizedState = Me = e) : (Me = Me.next = e));
    }
    return Me;
  }
  function kr(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function si(e) {
    var t = pt(),
      n = t.queue;
    if (n === null) throw Error(u(311));
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
      var s = (i = null),
        a = null,
        y = o;
      do {
        var x = y.lane;
        if ((pn & x) === x)
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
          var C = {
            lane: x,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          };
          (a === null ? ((s = a = C), (i = r)) : (a = a.next = C), (ke.lanes |= x), (mn |= x));
        }
        y = y.next;
      } while (y !== null && y !== o);
      (a === null ? (i = r) : (a.next = s),
        gt(r, t.memoizedState) || (Ze = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = a),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((o = l.lane), (ke.lanes |= o), (mn |= o), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ui(e) {
    var t = pt(),
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
      (gt(o, t.memoizedState) || (Ze = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, r];
  }
  function zu() {}
  function Iu(e, t) {
    var n = ke,
      r = pt(),
      l = t(),
      o = !gt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Ze = !0)),
      (r = r.queue),
      ai(Fu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Me !== null && Me.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), xr(9, Du.bind(null, n, r, l, t), void 0, null), De === null))
        throw Error(u(349));
      (pn & 30) !== 0 || Mu(n, t, l);
    }
    return l;
  }
  function Mu(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ke.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (ke.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Du(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Bu(t) && Au(e));
  }
  function Fu(e, t, n) {
    return n(function () {
      Bu(t) && Au(e);
    });
  }
  function Bu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !gt(e, n);
    } catch {
      return !0;
    }
  }
  function Au(e) {
    var t = zt(e, 1);
    t !== null && xt(t, e, 1, -1);
  }
  function Uu(e) {
    var t = jt();
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
      (e = e.dispatch = Md.bind(null, ke, e)),
      [t.memoizedState, e]
    );
  }
  function xr(e, t, n, r) {
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
  function $u() {
    return pt().memoizedState;
  }
  function _l(e, t, n, r) {
    var l = jt();
    ((ke.flags |= e), (l.memoizedState = xr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function wl(e, t, n, r) {
    var l = pt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Oe !== null) {
      var i = Oe.memoizedState;
      if (((o = i.destroy), r !== null && li(r, i.deps))) {
        l.memoizedState = xr(t, n, o, r);
        return;
      }
    }
    ((ke.flags |= e), (l.memoizedState = xr(1 | t, n, o, r)));
  }
  function Vu(e, t) {
    return _l(8390656, 8, e, t);
  }
  function ai(e, t) {
    return wl(2048, 8, e, t);
  }
  function Qu(e, t) {
    return wl(4, 2, e, t);
  }
  function Hu(e, t) {
    return wl(4, 4, e, t);
  }
  function Wu(e, t) {
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
  function Gu(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), wl(4, 4, Wu.bind(null, t, e), n));
  }
  function ci() {}
  function qu(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && li(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Yu(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && li(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ku(e, t, n) {
    return (pn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n))
      : (gt(n, t) || ((n = Es()), (ke.lanes |= n), (mn |= n), (e.baseState = !0)), t);
  }
  function zd(e, t) {
    var n = de;
    ((de = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = ri.transition;
    ri.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((de = n), (ri.transition = r));
    }
  }
  function Xu() {
    return pt().memoizedState;
  }
  function Id(e, t, n) {
    var r = en(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Zu(e)))
      Ju(t, n);
    else if (((n = Pu(e, t, n, r)), n !== null)) {
      var l = Ye();
      (xt(n, e, r, l), bu(n, t, r));
    }
  }
  function Md(e, t, n) {
    var r = en(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Zu(e)) Ju(t, l);
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
            (a === null ? ((l.next = l), Zo(t)) : ((l.next = a.next), (a.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Pu(e, t, l, r)), n !== null && ((l = Ye()), xt(n, e, r, l), bu(n, t, r)));
    }
  }
  function Zu(e) {
    var t = e.alternate;
    return e === ke || (t !== null && t === ke);
  }
  function Ju(e, t) {
    wr = gl = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function bu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), fo(e, n));
    }
  }
  var Sl = {
      readContext: ft,
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
    Dd = {
      readContext: ft,
      useCallback: function (e, t) {
        return ((jt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ft,
      useEffect: Vu,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), _l(4194308, 4, Wu.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return _l(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return _l(4, 2, e, t);
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
          (e = e.dispatch = Id.bind(null, ke, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = jt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Uu,
      useDebugValue: ci,
      useDeferredValue: function (e) {
        return (jt().memoizedState = e);
      },
      useTransition: function () {
        var e = Uu(!1),
          t = e[0];
        return ((e = zd.bind(null, e[1])), (jt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ke,
          l = jt();
        if (we) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = t()), De === null)) throw Error(u(349));
          (pn & 30) !== 0 || Mu(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Vu(Fu.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          xr(9, Du.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = jt(),
          t = De.identifierPrefix;
        if (we) {
          var n = Rt,
            r = Ot;
          ((n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = Sr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':'));
        } else ((n = Rd++), (t = ':' + t + 'r' + n.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Fd = {
      readContext: ft,
      useCallback: qu,
      useContext: ft,
      useEffect: ai,
      useImperativeHandle: Gu,
      useInsertionEffect: Qu,
      useLayoutEffect: Hu,
      useMemo: Yu,
      useReducer: si,
      useRef: $u,
      useState: function () {
        return si(kr);
      },
      useDebugValue: ci,
      useDeferredValue: function (e) {
        var t = pt();
        return Ku(t, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = si(kr)[0],
          t = pt().memoizedState;
        return [e, t];
      },
      useMutableSource: zu,
      useSyncExternalStore: Iu,
      useId: Xu,
      unstable_isNewReconciler: !1,
    },
    Bd = {
      readContext: ft,
      useCallback: qu,
      useContext: ft,
      useEffect: ai,
      useImperativeHandle: Gu,
      useInsertionEffect: Qu,
      useLayoutEffect: Hu,
      useMemo: Yu,
      useReducer: ui,
      useRef: $u,
      useState: function () {
        return ui(kr);
      },
      useDebugValue: ci,
      useDeferredValue: function (e) {
        var t = pt();
        return Oe === null ? (t.memoizedState = e) : Ku(t, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = ui(kr)[0],
          t = pt().memoizedState;
        return [e, t];
      },
      useMutableSource: zu,
      useSyncExternalStore: Iu,
      useId: Xu,
      unstable_isNewReconciler: !1,
    };
  function wt(e, t) {
    if (e && e.defaultProps) {
      ((t = I({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function di(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : I({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var kl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? on(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        l = en(e),
        o = It(r, l);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = Xt(e, o, l)),
        t !== null && (xt(t, e, l, r), ml(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        l = en(e),
        o = It(r, l);
      ((o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Xt(e, o, l)),
        t !== null && (xt(t, e, l, r), ml(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ye(),
        r = en(e),
        l = It(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Xt(e, l, r)),
        t !== null && (xt(t, e, r, n), ml(t, e, r)));
    },
  };
  function ea(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ar(n, r) || !ar(l, o)
          : !0
    );
  }
  function ta(e, t, n) {
    var r = !1,
      l = qt,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = ft(o))
        : ((l = Xe(t) ? un : $e.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Rn(e, l) : qt)),
      (t = new t(n, o)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = kl),
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
      t.state !== e && kl.enqueueReplaceState(t, t.state, null));
  }
  function fi(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Jo(e));
    var o = t.contextType;
    (typeof o == 'object' && o !== null
      ? (l.context = ft(o))
      : ((o = Xe(t) ? un : $e.current), (l.context = Rn(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == 'function' && (di(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((t = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount(),
        t !== l.state && kl.enqueueReplaceState(l, l.state, null),
        hl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function Un(e, t) {
    try {
      var n = '',
        r = t;
      do ((n += oe(r)), (r = r.return));
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
  function pi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function mi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Ad = typeof WeakMap == 'function' ? WeakMap : Map;
  function ra(e, t, n) {
    ((n = It(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Tl || ((Tl = !0), (Ti = r)), mi(e, t));
      }),
      n
    );
  }
  function la(e, t, n) {
    ((n = It(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          mi(e, t);
        }));
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == 'function' &&
        (n.callback = function () {
          (mi(e, t),
            typeof r != 'function' && (Jt === null ? (Jt = new Set([this])) : Jt.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' });
        }),
      n
    );
  }
  function oa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Ad();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = bd.bind(null, e, t, n)), t.then(e, e));
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
  function sa(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = It(-1, 1)), (t.tag = 2), Xt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Ud = re.ReactCurrentOwner,
    Ze = !1;
  function qe(e, t, n, r) {
    t.child = e === null ? ju(t, null, n, r) : Dn(t, e.child, n, r);
  }
  function ua(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Bn(t, l),
      (r = oi(e, t, n, r, o, l)),
      (n = ii()),
      e !== null && !Ze
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Mt(e, t, l))
        : (we && n && Vo(t), (t.flags |= 1), qe(e, t, r, l), t.child)
    );
  }
  function aa(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' &&
        !Di(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), ca(e, t, o, r, l))
        : ((e = Ml(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var i = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : ar), n(i, r) && e.ref === t.ref))
        return Mt(e, t, l);
    }
    return ((t.flags |= 1), (e = nn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function ca(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (ar(o, r) && e.ref === t.ref)
        if (((Ze = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ze = !0);
        else return ((t.lanes = e.lanes), Mt(e, t, l));
    }
    return hi(e, t, n, r, l);
  }
  function da(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          ve(Vn, st),
          (st |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            ve(Vn, st),
            (st |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = o !== null ? o.baseLanes : n),
          ve(Vn, st),
          (st |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ve(Vn, st),
        (st |= r));
    return (qe(e, t, l, n), t.child);
  }
  function fa(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function hi(e, t, n, r, l) {
    var o = Xe(n) ? un : $e.current;
    return (
      (o = Rn(t, o)),
      Bn(t, l),
      (n = oi(e, t, n, r, o, l)),
      (r = ii()),
      e !== null && !Ze
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Mt(e, t, l))
        : (we && r && Vo(t), (t.flags |= 1), qe(e, t, n, l), t.child)
    );
  }
  function pa(e, t, n, r, l) {
    if (Xe(n)) {
      var o = !0;
      il(t);
    } else o = !1;
    if ((Bn(t, l), t.stateNode === null)) (Cl(e, t), ta(t, n, r), fi(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        s = t.memoizedProps;
      i.props = s;
      var a = i.context,
        y = n.contextType;
      typeof y == 'object' && y !== null
        ? (y = ft(y))
        : ((y = Xe(n) ? un : $e.current), (y = Rn(t, y)));
      var x = n.getDerivedStateFromProps,
        C = typeof x == 'function' || typeof i.getSnapshotBeforeUpdate == 'function';
      (C ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((s !== r || a !== y) && na(t, i, r, y)),
        (Kt = !1));
      var w = t.memoizedState;
      ((i.state = w),
        hl(t, r, i, l),
        (a = t.memoizedState),
        s !== r || w !== a || Ke.current || Kt
          ? (typeof x == 'function' && (di(t, n, x, r), (a = t.memoizedState)),
            (s = Kt || ea(t, n, s, r, w, a, y))
              ? (C ||
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
        Tu(e, t),
        (s = t.memoizedProps),
        (y = t.type === t.elementType ? s : wt(t.type, s)),
        (i.props = y),
        (C = t.pendingProps),
        (w = i.context),
        (a = n.contextType),
        typeof a == 'object' && a !== null
          ? (a = ft(a))
          : ((a = Xe(n) ? un : $e.current), (a = Rn(t, a))));
      var z = n.getDerivedStateFromProps;
      ((x = typeof z == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((s !== C || w !== a) && na(t, i, r, a)),
        (Kt = !1),
        (w = t.memoizedState),
        (i.state = w),
        hl(t, r, i, l));
      var F = t.memoizedState;
      s !== C || w !== F || Ke.current || Kt
        ? (typeof z == 'function' && (di(t, n, z, r), (F = t.memoizedState)),
          (y = Kt || ea(t, n, y, r, w, F, a) || !1)
            ? (x ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                  typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(r, F, a),
                typeof i.UNSAFE_componentWillUpdate == 'function' &&
                  i.UNSAFE_componentWillUpdate(r, F, a)),
              typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (s === e.memoizedProps && w === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (s === e.memoizedProps && w === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = F)),
          (i.props = r),
          (i.state = F),
          (i.context = a),
          (r = y))
        : (typeof i.componentDidUpdate != 'function' ||
            (s === e.memoizedProps && w === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != 'function' ||
            (s === e.memoizedProps && w === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return vi(e, t, n, r, o, l);
  }
  function vi(e, t, n, r, l, o) {
    fa(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && gu(t, n, !1), Mt(e, t, o));
    ((r = t.stateNode), (Ud.current = t));
    var s = i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Dn(t, e.child, null, o)), (t.child = Dn(t, null, s, o)))
        : qe(e, t, s, o),
      (t.memoizedState = r.state),
      l && gu(t, n, !0),
      t.child
    );
  }
  function ma(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? vu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && vu(e, t.context, !1),
      bo(e, t.containerInfo));
  }
  function ha(e, t, n, r, l) {
    return (Mn(), Go(l), (t.flags |= 256), qe(e, t, n, r), t.child);
  }
  var yi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function gi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function va(e, t, n) {
    var r = t.pendingProps,
      l = Se.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      s;
    if (
      ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      s ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      ve(Se, l & 1),
      e === null)
    )
      return (
        Wo(t),
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
                  : (o = Dl(i, r, 0, null)),
                (e = gn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = gi(n)),
                (t.memoizedState = yi),
                e)
              : _i(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
      return $d(e, t, i, r, s, l, n);
    if (o) {
      ((o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling));
      var a = { mode: 'hidden', children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
          : ((r = nn(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        s !== null ? (o = nn(s, o)) : ((o = gn(o, i, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? gi(n)
            : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
        (o.memoizedState = i),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = yi),
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
  function _i(e, t) {
    return (
      (t = Dl({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function xl(e, t, n, r) {
    return (
      r !== null && Go(r),
      Dn(t, e.child, null, n),
      (e = _i(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function $d(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = pi(Error(u(422)))), xl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = Dl({ mode: 'visible', children: r.children }, l, 0, null)),
            (o = gn(o, l, i, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && Dn(t, e.child, null, i),
            (t.child.memoizedState = gi(i)),
            (t.memoizedState = yi),
            o);
    if ((t.mode & 1) === 0) return xl(e, t, i, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
      return ((r = s), (o = Error(u(419))), (r = pi(o, r, void 0)), xl(e, t, i, r));
    }
    if (((s = (i & e.childLanes) !== 0), Ze || s)) {
      if (((r = De), r !== null)) {
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
      return (Mi(), (r = pi(Error(u(421)))), xl(e, t, i, r));
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = ef.bind(null, e)), (l._reactRetry = t), null)
      : ((e = o.treeContext),
        (it = Wt(l.nextSibling)),
        (ot = t),
        (we = !0),
        (_t = null),
        e !== null &&
          ((ct[dt++] = Ot),
          (ct[dt++] = Rt),
          (ct[dt++] = an),
          (Ot = e.id),
          (Rt = e.overflow),
          (an = t)),
        (t = _i(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function ya(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Xo(e.return, t, n));
  }
  function wi(e, t, n, r, l) {
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
    if ((qe(e, t, r.children, n), (r = Se.current), (r & 2) !== 0))
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
    if ((ve(Se, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate), e !== null && vl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            wi(t, !1, l, n, o));
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && vl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          wi(t, !0, n, null, o);
          break;
        case 'together':
          wi(t, !1, null, null, void 0);
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
  function Mt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (mn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = nn(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Vd(e, t, n) {
    switch (t.tag) {
      case 3:
        (ma(t), Mn());
        break;
      case 5:
        Ru(t);
        break;
      case 1:
        Xe(t.type) && il(t);
        break;
      case 4:
        bo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (ve(fl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ve(Se, Se.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? va(e, t, n)
              : (ve(Se, Se.current & 1), (e = Mt(e, t, n)), e !== null ? e.sibling : null);
        ve(Se, Se.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return ga(e, t, n);
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
        return ((t.lanes = 0), da(e, t, n));
    }
    return Mt(e, t, n);
  }
  var _a, Si, wa, Sa;
  ((_a = function (e, t) {
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
    (Si = function () {}),
    (wa = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), fn(Nt.current));
        var o = null;
        switch (n) {
          case 'input':
            ((l = Kl(e, l)), (r = Kl(e, r)), (o = []));
            break;
          case 'select':
            ((l = I({}, l, { value: void 0 })), (r = I({}, r, { value: void 0 })), (o = []));
            break;
          case 'textarea':
            ((l = Jl(e, l)), (r = Jl(e, r)), (o = []));
            break;
          default:
            typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = rl);
        }
        eo(n, r);
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
                      ? (a != null && y === 'onScroll' && ye('scroll', e), o || s === a || (o = []))
                      : (o = o || []).push(y, a));
        }
        n && (o = o || []).push('style', n);
        var y = o;
        (t.updateQueue = y) && (t.flags |= 4);
      }
    }),
    (Sa = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function Cr(e, t) {
    if (!we)
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
  function Qd(e, t, n) {
    var r = t.pendingProps;
    switch ((Qo(t), t.tag)) {
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
        return (Xe(t.type) && ol(), Qe(t), null);
      case 3:
        return (
          (r = t.stateNode),
          An(),
          ge(Ke),
          ge($e),
          ni(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (cl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), _t !== null && (Ri(_t), (_t = null)))),
          Si(e, t),
          Qe(t),
          null
        );
      case 5:
        ei(t);
        var l = fn(_r.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (wa(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return (Qe(t), null);
          }
          if (((e = fn(Nt.current)), cl(t))) {
            ((r = t.stateNode), (n = t.type));
            var o = t.memoizedProps;
            switch (((r[Et] = t), (r[mr] = o), (e = (t.mode & 1) !== 0), n)) {
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
                for (l = 0; l < dr.length; l++) ye(dr[l], r);
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
                (ts(r, o), ye('invalid', r));
                break;
              case 'select':
                ((r._wrapperState = { wasMultiple: !!o.multiple }), ye('invalid', r));
                break;
              case 'textarea':
                (ls(r, o), ye('invalid', r));
            }
            (eo(n, o), (l = null));
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var s = o[i];
                i === 'children'
                  ? typeof s == 'string'
                    ? r.textContent !== s &&
                      (o.suppressHydrationWarning !== !0 && nl(r.textContent, s, e),
                      (l = ['children', s]))
                    : typeof s == 'number' &&
                      r.textContent !== '' + s &&
                      (o.suppressHydrationWarning !== !0 && nl(r.textContent, s, e),
                      (l = ['children', '' + s]))
                  : S.hasOwnProperty(i) && s != null && i === 'onScroll' && ye('scroll', r);
              }
            switch (n) {
              case 'input':
                (zr(r), rs(r, o, !0));
                break;
              case 'textarea':
                (zr(r), is(r));
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
              e === 'http://www.w3.org/1999/xhtml' && (e = ss(n)),
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
              (e[mr] = r),
              _a(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = to(n, r)), n)) {
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
                  for (l = 0; l < dr.length; l++) ye(dr[l], e);
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
                  (ts(e, r), (l = Kl(e, r)), ye('invalid', e));
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = I({}, r, { value: void 0 })),
                    ye('invalid', e));
                  break;
                case 'textarea':
                  (ls(e, r), (l = Jl(e, r)), ye('invalid', e));
                  break;
                default:
                  l = r;
              }
              (eo(n, l), (s = l));
              for (o in s)
                if (s.hasOwnProperty(o)) {
                  var a = s[o];
                  o === 'style'
                    ? cs(e, a)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((a = a ? a.__html : void 0), a != null && us(e, a))
                      : o === 'children'
                        ? typeof a == 'string'
                          ? (n !== 'textarea' || a !== '') && Gn(e, a)
                          : typeof a == 'number' && Gn(e, '' + a)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (S.hasOwnProperty(o)
                            ? a != null && o === 'onScroll' && ye('scroll', e)
                            : a != null && fe(e, o, a, i));
                }
              switch (n) {
                case 'input':
                  (zr(e), rs(e, r, !1));
                  break;
                case 'textarea':
                  (zr(e), is(e));
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + ce(r.value));
                  break;
                case 'select':
                  ((e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? wn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null && wn(e, !!r.multiple, r.defaultValue, !0));
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
        if (e && t.stateNode != null) Sa(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(u(166));
          if (((n = fn(_r.current)), fn(Nt.current), cl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Et] = t),
              (o = r.nodeValue !== n) && ((e = ot), e !== null))
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
              (r[Et] = t),
              (t.stateNode = r));
        }
        return (Qe(t), null);
      case 13:
        if (
          (ge(Se),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (we && it !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Cu(), Mn(), (t.flags |= 98560), (o = !1));
          else if (((o = cl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(u(317));
              o[Et] = t;
            } else (Mn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Qe(t), (o = !1));
          } else (_t !== null && (Ri(_t), (_t = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Se.current & 1) !== 0 ? Re === 0 && (Re = 3) : Mi())),
            t.updateQueue !== null && (t.flags |= 4),
            Qe(t),
            null);
      case 4:
        return (An(), Si(e, t), e === null && fr(t.stateNode.containerInfo), Qe(t), null);
      case 10:
        return (Ko(t.type._context), Qe(t), null);
      case 17:
        return (Xe(t.type) && ol(), Qe(t), null);
      case 19:
        if ((ge(Se), (o = t.memoizedState), o === null)) return (Qe(t), null);
        if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) Cr(o, !1);
          else {
            if (Re !== 0 || (e !== null && (e.flags & 128) !== 0))
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
                  return (ve(Se, (Se.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Ne() > Qn &&
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
                o.tail === null && o.tailMode === 'hidden' && !i.alternate && !we)
              )
                return (Qe(t), null);
            } else
              2 * Ne() - o.renderingStartTime > Qn &&
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
            (n = Se.current),
            ve(Se, r ? (n & 1) | 2 : n & 1),
            t)
          : (Qe(t), null);
      case 22:
      case 23:
        return (
          Ii(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (st & 1073741824) !== 0 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Qe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Hd(e, t) {
    switch ((Qo(t), t.tag)) {
      case 1:
        return (
          Xe(t.type) && ol(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          An(),
          ge(Ke),
          ge($e),
          ni(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (ei(t), null);
      case 13:
        if ((ge(Se), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(u(340));
          Mn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (ge(Se), null);
      case 4:
        return (An(), null);
      case 10:
        return (Ko(t.type._context), null);
      case 22:
      case 23:
        return (Ii(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var El = !1,
    He = !1,
    Wd = typeof WeakSet == 'function' ? WeakSet : Set,
    D = null;
  function $n(e, t) {
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
  function ki(e, t, n) {
    try {
      n();
    } catch (r) {
      Ce(e, t, r);
    }
  }
  var ka = !1;
  function Gd(e, t) {
    if (((Io = Wr), (e = eu()), No(e))) {
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
              x = 0,
              C = e,
              w = null;
            t: for (;;) {
              for (
                var z;
                C !== n || (l !== 0 && C.nodeType !== 3) || (s = i + l),
                  C !== o || (r !== 0 && C.nodeType !== 3) || (a = i + r),
                  C.nodeType === 3 && (i += C.nodeValue.length),
                  (z = C.firstChild) !== null;
              )
                ((w = C), (C = z));
              for (;;) {
                if (C === e) break t;
                if (
                  (w === n && ++y === l && (s = i),
                  w === o && ++x === r && (a = i),
                  (z = C.nextSibling) !== null)
                )
                  break;
                ((C = w), (w = C.parentNode));
              }
              C = z;
            }
            n = s === -1 || a === -1 ? null : { start: s, end: a };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Mo = { focusedElem: e, selectionRange: n }, Wr = !1, D = t; D !== null; )
      if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (D = e));
      else
        for (; D !== null; ) {
          t = D;
          try {
            var F = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (F !== null) {
                    var B = F.memoizedProps,
                      je = F.memoizedState,
                      m = t.stateNode,
                      c = m.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? B : wt(t.type, B),
                        je
                      );
                    m.__reactInternalSnapshotBeforeUpdate = c;
                  }
                  break;
                case 3:
                  var h = t.stateNode.containerInfo;
                  h.nodeType === 1
                    ? (h.textContent = '')
                    : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(u(163));
              }
          } catch (N) {
            Ce(t, t.return, N);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (D = e));
            break;
          }
          D = t.return;
        }
    return ((F = ka), (ka = !1), F);
  }
  function Er(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          ((l.destroy = void 0), o !== void 0 && ki(t, n, o));
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
  function xi(e) {
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
  function xa(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), xa(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Et], delete t[mr], delete t[Ao], delete t[Pd], delete t[Td])),
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
  function Ci(e, t, n) {
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
      for (Ci(e, t, n), e = e.sibling; e !== null; ) (Ci(e, t, n), (e = e.sibling));
  }
  function Ei(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ei(e, t, n), e = e.sibling; e !== null; ) (Ei(e, t, n), (e = e.sibling));
  }
  var Be = null,
    St = !1;
  function Zt(e, t, n) {
    for (n = n.child; n !== null; ) (Na(e, t, n), (n = n.sibling));
  }
  function Na(e, t, n) {
    if (Ct && typeof Ct.onCommitFiberUnmount == 'function')
      try {
        Ct.onCommitFiberUnmount(Ar, n);
      } catch {}
    switch (n.tag) {
      case 5:
        He || $n(n, t);
      case 6:
        var r = Be,
          l = St;
        ((Be = null),
          Zt(e, t, n),
          (Be = r),
          (St = l),
          Be !== null &&
            (St
              ? ((e = Be),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : Be.removeChild(n.stateNode)));
        break;
      case 18:
        Be !== null &&
          (St
            ? ((e = Be),
              (n = n.stateNode),
              e.nodeType === 8 ? Bo(e.parentNode, n) : e.nodeType === 1 && Bo(e, n),
              rr(e))
            : Bo(Be, n.stateNode));
        break;
      case 4:
        ((r = Be),
          (l = St),
          (Be = n.stateNode.containerInfo),
          (St = !0),
          Zt(e, t, n),
          (Be = r),
          (St = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!He && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var o = l,
              i = o.destroy;
            ((o = o.tag),
              i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && ki(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        Zt(e, t, n);
        break;
      case 1:
        if (!He && ($n(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (s) {
            Ce(n, t, s);
          }
        Zt(e, t, n);
        break;
      case 21:
        Zt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((He = (r = He) || n.memoizedState !== null), Zt(e, t, n), (He = r))
          : Zt(e, t, n);
        break;
      default:
        Zt(e, t, n);
    }
  }
  function ja(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Wd()),
        t.forEach(function (r) {
          var l = tf.bind(null, e, r);
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
            s = i;
          e: for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                ((Be = s.stateNode), (St = !1));
                break e;
              case 3:
                ((Be = s.stateNode.containerInfo), (St = !0));
                break e;
              case 4:
                ((Be = s.stateNode.containerInfo), (St = !0));
                break e;
            }
            s = s.return;
          }
          if (Be === null) throw Error(u(160));
          (Na(o, i, l), (Be = null), (St = !1));
          var a = l.alternate;
          (a !== null && (a.return = null), (l.return = null));
        } catch (y) {
          Ce(l, t, y);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Pa(t, e), (t = t.sibling));
  }
  function Pa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((kt(t, e), Pt(e), r & 4)) {
          try {
            (Er(3, e, e.return), Nl(3, e));
          } catch (B) {
            Ce(e, e.return, B);
          }
          try {
            Er(5, e, e.return);
          } catch (B) {
            Ce(e, e.return, B);
          }
        }
        break;
      case 1:
        (kt(t, e), Pt(e), r & 512 && n !== null && $n(n, n.return));
        break;
      case 5:
        if ((kt(t, e), Pt(e), r & 512 && n !== null && $n(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Gn(l, '');
          } catch (B) {
            Ce(e, e.return, B);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = n !== null ? n.memoizedProps : o,
            s = e.type,
            a = e.updateQueue;
          if (((e.updateQueue = null), a !== null))
            try {
              (s === 'input' && o.type === 'radio' && o.name != null && ns(l, o), to(s, i));
              var y = to(s, o);
              for (i = 0; i < a.length; i += 2) {
                var x = a[i],
                  C = a[i + 1];
                x === 'style'
                  ? cs(l, C)
                  : x === 'dangerouslySetInnerHTML'
                    ? us(l, C)
                    : x === 'children'
                      ? Gn(l, C)
                      : fe(l, x, C, y);
              }
              switch (s) {
                case 'input':
                  Xl(l, o);
                  break;
                case 'textarea':
                  os(l, o);
                  break;
                case 'select':
                  var w = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var z = o.value;
                  z != null
                    ? wn(l, !!o.multiple, z, !1)
                    : w !== !!o.multiple &&
                      (o.defaultValue != null
                        ? wn(l, !!o.multiple, o.defaultValue, !0)
                        : wn(l, !!o.multiple, o.multiple ? [] : '', !1));
              }
              l[mr] = o;
            } catch (B) {
              Ce(e, e.return, B);
            }
        }
        break;
      case 6:
        if ((kt(t, e), Pt(e), r & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          ((l = e.stateNode), (o = e.memoizedProps));
          try {
            l.nodeValue = o;
          } catch (B) {
            Ce(e, e.return, B);
          }
        }
        break;
      case 3:
        if ((kt(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            rr(t.containerInfo);
          } catch (B) {
            Ce(e, e.return, B);
          }
        break;
      case 4:
        (kt(t, e), Pt(e));
        break;
      case 13:
        (kt(t, e),
          Pt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (Pi = Ne())),
          r & 4 && ja(e));
        break;
      case 22:
        if (
          ((x = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((He = (y = He) || x), kt(t, e), (He = y)) : kt(t, e),
          Pt(e),
          r & 8192)
        ) {
          if (
            ((y = e.memoizedState !== null), (e.stateNode.isHidden = y) && !x && (e.mode & 1) !== 0)
          )
            for (D = e, x = e.child; x !== null; ) {
              for (C = D = x; D !== null; ) {
                switch (((w = D), (z = w.child), w.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Er(4, w, w.return);
                    break;
                  case 1:
                    $n(w, w.return);
                    var F = w.stateNode;
                    if (typeof F.componentWillUnmount == 'function') {
                      ((r = w), (n = w.return));
                      try {
                        ((t = r),
                          (F.props = t.memoizedProps),
                          (F.state = t.memoizedState),
                          F.componentWillUnmount());
                      } catch (B) {
                        Ce(r, n, B);
                      }
                    }
                    break;
                  case 5:
                    $n(w, w.return);
                    break;
                  case 22:
                    if (w.memoizedState !== null) {
                      Oa(C);
                      continue;
                    }
                }
                z !== null ? ((z.return = w), (D = z)) : Oa(C);
              }
              x = x.sibling;
            }
          e: for (x = null, C = e; ; ) {
            if (C.tag === 5) {
              if (x === null) {
                x = C;
                try {
                  ((l = C.stateNode),
                    y
                      ? ((o = l.style),
                        typeof o.setProperty == 'function'
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none'))
                      : ((s = C.stateNode),
                        (a = C.memoizedProps.style),
                        (i = a != null && a.hasOwnProperty('display') ? a.display : null),
                        (s.style.display = as('display', i))));
                } catch (B) {
                  Ce(e, e.return, B);
                }
              }
            } else if (C.tag === 6) {
              if (x === null)
                try {
                  C.stateNode.nodeValue = y ? '' : C.memoizedProps;
                } catch (B) {
                  Ce(e, e.return, B);
                }
            } else if (
              ((C.tag !== 22 && C.tag !== 23) || C.memoizedState === null || C === e) &&
              C.child !== null
            ) {
              ((C.child.return = C), (C = C.child));
              continue;
            }
            if (C === e) break e;
            for (; C.sibling === null; ) {
              if (C.return === null || C.return === e) break e;
              (x === C && (x = null), (C = C.return));
            }
            (x === C && (x = null), (C.sibling.return = C.return), (C = C.sibling));
          }
        }
        break;
      case 19:
        (kt(t, e), Pt(e), r & 4 && ja(e));
        break;
      case 21:
        break;
      default:
        (kt(t, e), Pt(e));
    }
  }
  function Pt(e) {
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
          throw Error(u(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Gn(l, ''), (r.flags &= -33));
            var o = Ea(e);
            Ei(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              s = Ea(e);
            Ci(e, s, i);
            break;
          default:
            throw Error(u(161));
        }
      } catch (a) {
        Ce(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function qd(e, t, n) {
    ((D = e), Ta(e));
  }
  function Ta(e, t, n) {
    for (var r = (e.mode & 1) !== 0; D !== null; ) {
      var l = D,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || El;
        if (!i) {
          var s = l.alternate,
            a = (s !== null && s.memoizedState !== null) || He;
          s = El;
          var y = He;
          if (((El = i), (He = a) && !y))
            for (D = l; D !== null; )
              ((i = D),
                (a = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? Ra(l)
                  : a !== null
                    ? ((a.return = i), (D = a))
                    : Ra(l));
          for (; o !== null; ) ((D = o), Ta(o), (o = o.sibling));
          ((D = l), (El = s), (He = y));
        }
        La(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), (D = o)) : La(e);
    }
  }
  function La(e) {
    for (; D !== null; ) {
      var t = D;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                He || Nl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !He)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : wt(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && Ou(t, o, r);
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
                  Ou(t, i, n);
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
                    var x = y.memoizedState;
                    if (x !== null) {
                      var C = x.dehydrated;
                      C !== null && rr(C);
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
          He || (t.flags & 512 && xi(t));
        } catch (w) {
          Ce(t, t.return, w);
        }
      }
      if (t === e) {
        D = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (D = n));
        break;
      }
      D = t.return;
    }
  }
  function Oa(e) {
    for (; D !== null; ) {
      var t = D;
      if (t === e) {
        D = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (D = n));
        break;
      }
      D = t.return;
    }
  }
  function Ra(e) {
    for (; D !== null; ) {
      var t = D;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Nl(4, t);
            } catch (a) {
              Ce(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                Ce(t, l, a);
              }
            }
            var o = t.return;
            try {
              xi(t);
            } catch (a) {
              Ce(t, o, a);
            }
            break;
          case 5:
            var i = t.return;
            try {
              xi(t);
            } catch (a) {
              Ce(t, i, a);
            }
        }
      } catch (a) {
        Ce(t, t.return, a);
      }
      if (t === e) {
        D = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        ((s.return = t.return), (D = s));
        break;
      }
      D = t.return;
    }
  }
  var Yd = Math.ceil,
    jl = re.ReactCurrentDispatcher,
    Ni = re.ReactCurrentOwner,
    mt = re.ReactCurrentBatchConfig,
    le = 0,
    De = null,
    Te = null,
    Ae = 0,
    st = 0,
    Vn = Gt(0),
    Re = 0,
    Nr = null,
    mn = 0,
    Pl = 0,
    ji = 0,
    jr = null,
    Je = null,
    Pi = 0,
    Qn = 1 / 0,
    Dt = null,
    Tl = !1,
    Ti = null,
    Jt = null,
    Ll = !1,
    bt = null,
    Ol = 0,
    Pr = 0,
    Li = null,
    Rl = -1,
    zl = 0;
  function Ye() {
    return (le & 6) !== 0 ? Ne() : Rl !== -1 ? Rl : (Rl = Ne());
  }
  function en(e) {
    return (e.mode & 1) === 0
      ? 1
      : (le & 2) !== 0 && Ae !== 0
        ? Ae & -Ae
        : Od.transition !== null
          ? (zl === 0 && (zl = Es()), zl)
          : ((e = de), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Is(e.type))), e);
  }
  function xt(e, t, n, r) {
    if (50 < Pr) throw ((Pr = 0), (Li = null), Error(u(185)));
    (Jn(e, n, r),
      ((le & 2) === 0 || e !== De) &&
        (e === De && ((le & 2) === 0 && (Pl |= n), Re === 4 && tn(e, Ae)),
        be(e, r),
        n === 1 && le === 0 && (t.mode & 1) === 0 && ((Qn = Ne() + 500), sl && Yt())));
  }
  function be(e, t) {
    var n = e.callbackNode;
    Oc(e, t);
    var r = Vr(e, e === De ? Ae : 0);
    if (r === 0) (n !== null && ks(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && ks(n), t === 1))
        (e.tag === 0 ? Ld(Ia.bind(null, e)) : _u(Ia.bind(null, e)),
          Nd(function () {
            (le & 6) === 0 && Yt();
          }),
          (n = null));
      else {
        switch (Ns(r)) {
          case 1:
            n = uo;
            break;
          case 4:
            n = xs;
            break;
          case 16:
            n = Br;
            break;
          case 536870912:
            n = Cs;
            break;
          default:
            n = Br;
        }
        n = Va(n, za.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function za(e, t) {
    if (((Rl = -1), (zl = 0), (le & 6) !== 0)) throw Error(u(327));
    var n = e.callbackNode;
    if (Hn() && e.callbackNode !== n) return null;
    var r = Vr(e, e === De ? Ae : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Il(e, r);
    else {
      t = r;
      var l = le;
      le |= 2;
      var o = Da();
      (De !== e || Ae !== t) && ((Dt = null), (Qn = Ne() + 500), vn(e, t));
      do
        try {
          Zd();
          break;
        } catch (s) {
          Ma(e, s);
        }
      while (!0);
      (Yo(), (jl.current = o), (le = l), Te !== null ? (t = 0) : ((De = null), (Ae = 0), (t = Re)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = ao(e)), l !== 0 && ((r = l), (t = Oi(e, l)))), t === 1))
        throw ((n = Nr), vn(e, 0), tn(e, r), be(e, Ne()), n);
      if (t === 6) tn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Kd(l) &&
            ((t = Il(e, r)),
            t === 2 && ((o = ao(e)), o !== 0 && ((r = o), (t = Oi(e, o)))),
            t === 1))
        )
          throw ((n = Nr), vn(e, 0), tn(e, r), be(e, Ne()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            yn(e, Je, Dt);
            break;
          case 3:
            if ((tn(e, r), (r & 130023424) === r && ((t = Pi + 500 - Ne()), 10 < t))) {
              if (Vr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Ye(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = Fo(yn.bind(null, e, Je, Dt), t);
              break;
            }
            yn(e, Je, Dt);
            break;
          case 4:
            if ((tn(e, r), (r & 4194240) === r)) break;
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
                            : 1960 * Yd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Fo(yn.bind(null, e, Je, Dt), r);
              break;
            }
            yn(e, Je, Dt);
            break;
          case 5:
            yn(e, Je, Dt);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return (be(e, Ne()), e.callbackNode === n ? za.bind(null, e) : null);
  }
  function Oi(e, t) {
    var n = jr;
    return (
      e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256),
      (e = Il(e, t)),
      e !== 2 && ((t = Je), (Je = n), t !== null && Ri(t)),
      e
    );
  }
  function Ri(e) {
    Je === null ? (Je = e) : Je.push.apply(Je, e);
  }
  function Kd(e) {
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
  function tn(e, t) {
    for (
      t &= ~ji, t &= ~Pl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - yt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function Ia(e) {
    if ((le & 6) !== 0) throw Error(u(327));
    Hn();
    var t = Vr(e, 0);
    if ((t & 1) === 0) return (be(e, Ne()), null);
    var n = Il(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ao(e);
      r !== 0 && ((t = r), (n = Oi(e, r)));
    }
    if (n === 1) throw ((n = Nr), vn(e, 0), tn(e, t), be(e, Ne()), n);
    if (n === 6) throw Error(u(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      yn(e, Je, Dt),
      be(e, Ne()),
      null
    );
  }
  function zi(e, t) {
    var n = le;
    le |= 1;
    try {
      return e(t);
    } finally {
      ((le = n), le === 0 && ((Qn = Ne() + 500), sl && Yt()));
    }
  }
  function hn(e) {
    bt !== null && bt.tag === 0 && (le & 6) === 0 && Hn();
    var t = le;
    le |= 1;
    var n = mt.transition,
      r = de;
    try {
      if (((mt.transition = null), (de = 1), e)) return e();
    } finally {
      ((de = r), (mt.transition = n), (le = t), (le & 6) === 0 && Yt());
    }
  }
  function Ii() {
    ((st = Vn.current), ge(Vn));
  }
  function vn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Ed(n)), Te !== null))
      for (n = Te.return; n !== null; ) {
        var r = n;
        switch ((Qo(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && ol());
            break;
          case 3:
            (An(), ge(Ke), ge($e), ni());
            break;
          case 5:
            ei(r);
            break;
          case 4:
            An();
            break;
          case 13:
            ge(Se);
            break;
          case 19:
            ge(Se);
            break;
          case 10:
            Ko(r.type._context);
            break;
          case 22:
          case 23:
            Ii();
        }
        n = n.return;
      }
    if (
      ((De = e),
      (Te = e = nn(e.current, null)),
      (Ae = st = t),
      (Re = 0),
      (Nr = null),
      (ji = Pl = mn = 0),
      (Je = jr = null),
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
  function Ma(e, t) {
    do {
      var n = Te;
      try {
        if ((Yo(), (yl.current = Sl), gl)) {
          for (var r = ke.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          gl = !1;
        }
        if (
          ((pn = 0),
          (Me = Oe = ke = null),
          (wr = !1),
          (Sr = 0),
          (Ni.current = null),
          n === null || n.return === null)
        ) {
          ((Re = 1), (Nr = t), (Te = null));
          break;
        }
        e: {
          var o = e,
            i = n.return,
            s = n,
            a = t;
          if (
            ((t = Ae),
            (s.flags |= 32768),
            a !== null && typeof a == 'object' && typeof a.then == 'function')
          ) {
            var y = a,
              x = s,
              C = x.tag;
            if ((x.mode & 1) === 0 && (C === 0 || C === 11 || C === 15)) {
              var w = x.alternate;
              w
                ? ((x.updateQueue = w.updateQueue),
                  (x.memoizedState = w.memoizedState),
                  (x.lanes = w.lanes))
                : ((x.updateQueue = null), (x.memoizedState = null));
            }
            var z = ia(i);
            if (z !== null) {
              ((z.flags &= -257), sa(z, i, s, o, t), z.mode & 1 && oa(o, y, t), (t = z), (a = y));
              var F = t.updateQueue;
              if (F === null) {
                var B = new Set();
                (B.add(a), (t.updateQueue = B));
              } else F.add(a);
              break e;
            } else {
              if ((t & 1) === 0) {
                (oa(o, y, t), Mi());
                break e;
              }
              a = Error(u(426));
            }
          } else if (we && s.mode & 1) {
            var je = ia(i);
            if (je !== null) {
              ((je.flags & 65536) === 0 && (je.flags |= 256), sa(je, i, s, o, t), Go(Un(a, s)));
              break e;
            }
          }
          ((o = a = Un(a, s)),
            Re !== 4 && (Re = 2),
            jr === null ? (jr = [o]) : jr.push(o),
            (o = i));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var m = ra(o, a, t);
                Lu(o, m);
                break e;
              case 1:
                s = a;
                var c = o.type,
                  h = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof c.getDerivedStateFromError == 'function' ||
                    (h !== null &&
                      typeof h.componentDidCatch == 'function' &&
                      (Jt === null || !Jt.has(h))))
                ) {
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var N = la(o, s, t);
                  Lu(o, N);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Ba(n);
      } catch (U) {
        ((t = U), Te === n && n !== null && (Te = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Da() {
    var e = jl.current;
    return ((jl.current = Sl), e === null ? Sl : e);
  }
  function Mi() {
    ((Re === 0 || Re === 3 || Re === 2) && (Re = 4),
      De === null || ((mn & 268435455) === 0 && (Pl & 268435455) === 0) || tn(De, Ae));
  }
  function Il(e, t) {
    var n = le;
    le |= 2;
    var r = Da();
    (De !== e || Ae !== t) && ((Dt = null), vn(e, t));
    do
      try {
        Xd();
        break;
      } catch (l) {
        Ma(e, l);
      }
    while (!0);
    if ((Yo(), (le = n), (jl.current = r), Te !== null)) throw Error(u(261));
    return ((De = null), (Ae = 0), Re);
  }
  function Xd() {
    for (; Te !== null; ) Fa(Te);
  }
  function Zd() {
    for (; Te !== null && !kc(); ) Fa(Te);
  }
  function Fa(e) {
    var t = $a(e.alternate, e, st);
    ((e.memoizedProps = e.pendingProps), t === null ? Ba(e) : (Te = t), (Ni.current = null));
  }
  function Ba(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Qd(n, t, st)), n !== null)) {
          Te = n;
          return;
        }
      } else {
        if (((n = Hd(n, t)), n !== null)) {
          ((n.flags &= 32767), (Te = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Re = 6), (Te = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Te = t;
        return;
      }
      Te = t = e;
    } while (t !== null);
    Re === 0 && (Re = 5);
  }
  function yn(e, t, n) {
    var r = de,
      l = mt.transition;
    try {
      ((mt.transition = null), (de = 1), Jd(e, t, n, r));
    } finally {
      ((mt.transition = l), (de = r));
    }
    return null;
  }
  function Jd(e, t, n, r) {
    do Hn();
    while (bt !== null);
    if ((le & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(u(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = n.lanes | n.childLanes;
    if (
      (Rc(e, o),
      e === De && ((Te = De = null), (Ae = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Ll ||
        ((Ll = !0),
        Va(Br, function () {
          return (Hn(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = mt.transition), (mt.transition = null));
      var i = de;
      de = 1;
      var s = le;
      ((le |= 4),
        (Ni.current = null),
        Gd(e, n),
        Pa(n, e),
        gd(Mo),
        (Wr = !!Io),
        (Mo = Io = null),
        (e.current = n),
        qd(n),
        xc(),
        (le = s),
        (de = i),
        (mt.transition = o));
    } else e.current = n;
    if (
      (Ll && ((Ll = !1), (bt = e), (Ol = l)),
      (o = e.pendingLanes),
      o === 0 && (Jt = null),
      Nc(n.stateNode),
      be(e, Ne()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (Tl) throw ((Tl = !1), (e = Ti), (Ti = null), e);
    return (
      (Ol & 1) !== 0 && e.tag !== 0 && Hn(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === Li ? Pr++ : ((Pr = 0), (Li = e))) : (Pr = 0),
      Yt(),
      null
    );
  }
  function Hn() {
    if (bt !== null) {
      var e = Ns(Ol),
        t = mt.transition,
        n = de;
      try {
        if (((mt.transition = null), (de = 16 > e ? 16 : e), bt === null)) var r = !1;
        else {
          if (((e = bt), (bt = null), (Ol = 0), (le & 6) !== 0)) throw Error(u(331));
          var l = le;
          for (le |= 4, D = e.current; D !== null; ) {
            var o = D,
              i = o.child;
            if ((D.flags & 16) !== 0) {
              var s = o.deletions;
              if (s !== null) {
                for (var a = 0; a < s.length; a++) {
                  var y = s[a];
                  for (D = y; D !== null; ) {
                    var x = D;
                    switch (x.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Er(8, x, o);
                    }
                    var C = x.child;
                    if (C !== null) ((C.return = x), (D = C));
                    else
                      for (; D !== null; ) {
                        x = D;
                        var w = x.sibling,
                          z = x.return;
                        if ((xa(x), x === y)) {
                          D = null;
                          break;
                        }
                        if (w !== null) {
                          ((w.return = z), (D = w));
                          break;
                        }
                        D = z;
                      }
                  }
                }
                var F = o.alternate;
                if (F !== null) {
                  var B = F.child;
                  if (B !== null) {
                    F.child = null;
                    do {
                      var je = B.sibling;
                      ((B.sibling = null), (B = je));
                    } while (B !== null);
                  }
                }
                D = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null) ((i.return = o), (D = i));
            else
              e: for (; D !== null; ) {
                if (((o = D), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(9, o, o.return);
                  }
                var m = o.sibling;
                if (m !== null) {
                  ((m.return = o.return), (D = m));
                  break e;
                }
                D = o.return;
              }
          }
          var c = e.current;
          for (D = c; D !== null; ) {
            i = D;
            var h = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && h !== null) ((h.return = i), (D = h));
            else
              e: for (i = c; D !== null; ) {
                if (((s = D), (s.flags & 2048) !== 0))
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Nl(9, s);
                    }
                  } catch (U) {
                    Ce(s, s.return, U);
                  }
                if (s === i) {
                  D = null;
                  break e;
                }
                var N = s.sibling;
                if (N !== null) {
                  ((N.return = s.return), (D = N));
                  break e;
                }
                D = s.return;
              }
          }
          if (((le = l), Yt(), Ct && typeof Ct.onPostCommitFiberRoot == 'function'))
            try {
              Ct.onPostCommitFiberRoot(Ar, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((de = n), (mt.transition = t));
      }
    }
    return !1;
  }
  function Aa(e, t, n) {
    ((t = Un(n, t)),
      (t = ra(e, t, 1)),
      (e = Xt(e, t, 1)),
      (t = Ye()),
      e !== null && (Jn(e, 1, t), be(e, t)));
  }
  function Ce(e, t, n) {
    if (e.tag === 3) Aa(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Aa(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (Jt === null || !Jt.has(r)))
          ) {
            ((e = Un(n, e)),
              (e = la(t, e, 1)),
              (t = Xt(t, e, 1)),
              (e = Ye()),
              t !== null && (Jn(t, 1, e), be(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function bd(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Ye()),
      (e.pingedLanes |= e.suspendedLanes & n),
      De === e &&
        (Ae & n) === n &&
        (Re === 4 || (Re === 3 && (Ae & 130023424) === Ae && 500 > Ne() - Pi)
          ? vn(e, 0)
          : (ji |= n)),
      be(e, t));
  }
  function Ua(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = $r), ($r <<= 1), ($r & 130023424) === 0 && ($r = 4194304)));
    var n = Ye();
    ((e = zt(e, t)), e !== null && (Jn(e, t, n), be(e, n)));
  }
  function ef(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Ua(e, n));
  }
  function tf(e, t) {
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
    (r !== null && r.delete(t), Ua(e, n));
  }
  var $a;
  $a = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ke.current) Ze = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Ze = !1), Vd(e, t, n));
        Ze = (e.flags & 131072) !== 0;
      }
    else ((Ze = !1), we && (t.flags & 1048576) !== 0 && wu(t, al, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Cl(e, t), (e = t.pendingProps));
        var l = Rn(t, $e.current);
        (Bn(t, n), (l = oi(null, t, r, e, l, n)));
        var o = ii();
        return (
          (t.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Xe(r) ? ((o = !0), il(t)) : (o = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Jo(t),
              (l.updater = kl),
              (t.stateNode = l),
              (l._reactInternals = t),
              fi(t, r, e, n),
              (t = vi(null, t, r, !0, o, n)))
            : ((t.tag = 0), we && o && Vo(t), qe(null, t, l, n), (t = t.child)),
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
            (l = t.tag = rf(r)),
            (e = wt(r, e)),
            l)
          ) {
            case 0:
              t = hi(null, t, r, e, n);
              break e;
            case 1:
              t = pa(null, t, r, e, n);
              break e;
            case 11:
              t = ua(null, t, r, e, n);
              break e;
            case 14:
              t = aa(null, t, r, wt(r.type, e), n);
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
          hi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : wt(r, l)),
          pa(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((ma(t), e === null)) throw Error(u(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            Tu(e, t),
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
              ((l = Un(Error(u(423)), t)), (t = ha(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Un(Error(u(424)), t)), (t = ha(e, t, r, n, l)));
              break e;
            } else
              for (
                it = Wt(t.stateNode.containerInfo.firstChild),
                  ot = t,
                  we = !0,
                  _t = null,
                  n = ju(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Mn(), r === l)) {
              t = Mt(e, t, n);
              break e;
            }
            qe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ru(t),
          e === null && Wo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          Do(r, l) ? (i = null) : o !== null && Do(r, o) && (t.flags |= 32),
          fa(e, t),
          qe(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Wo(t), null);
      case 13:
        return va(e, t, n);
      case 4:
        return (
          bo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Dn(t, null, r, n)) : qe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : wt(r, l)),
          ua(e, t, r, l, n)
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
            ve(fl, r._currentValue),
            (r._currentValue = i),
            o !== null)
          )
            if (gt(o.value, i)) {
              if (o.children === l.children && !Ke.current) {
                t = Mt(e, t, n);
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
                        ((a = It(-1, n & -n)), (a.tag = 2));
                        var y = o.updateQueue;
                        if (y !== null) {
                          y = y.shared;
                          var x = y.pending;
                          (x === null ? (a.next = a) : ((a.next = x.next), (x.next = a)),
                            (y.pending = a));
                        }
                      }
                      ((o.lanes |= n),
                        (a = o.alternate),
                        a !== null && (a.lanes |= n),
                        Xo(o.return, n, t),
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
                    Xo(i, n, t),
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
          Bn(t, n),
          (l = ft(l)),
          (r = r(l)),
          (t.flags |= 1),
          qe(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = wt(r, t.pendingProps)), (l = wt(r.type, l)), aa(e, t, r, l, n));
      case 15:
        return ca(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : wt(r, l)),
          Cl(e, t),
          (t.tag = 1),
          Xe(r) ? ((e = !0), il(t)) : (e = !1),
          Bn(t, n),
          ta(t, r, l),
          fi(t, r, l, n),
          vi(null, t, r, !0, e, n)
        );
      case 19:
        return ga(e, t, n);
      case 22:
        return da(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function Va(e, t) {
    return Ss(e, t);
  }
  function nf(e, t, n, r) {
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
    return new nf(e, t, n, r);
  }
  function Di(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function rf(e) {
    if (typeof e == 'function') return Di(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Ge)) return 11;
      if (e === W) return 14;
    }
    return 2;
  }
  function nn(e, t) {
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
  function Ml(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == 'function')) Di(e) && (i = 1);
    else if (typeof e == 'string') i = 5;
    else
      e: switch (e) {
        case me:
          return gn(n.children, l, o, t);
        case ae:
          ((i = 8), (l |= 8));
          break;
        case Le:
          return ((e = ht(12, n, t, l | 2)), (e.elementType = Le), (e.lanes = o), e);
        case Ie:
          return ((e = ht(13, n, t, l)), (e.elementType = Ie), (e.lanes = o), e);
        case nt:
          return ((e = ht(19, n, t, l)), (e.elementType = nt), (e.lanes = o), e);
        case ue:
          return Dl(n, l, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case xe:
                i = 10;
                break e;
              case at:
                i = 9;
                break e;
              case Ge:
                i = 11;
                break e;
              case W:
                i = 14;
                break e;
              case K:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(u(130, e == null ? e : typeof e, ''));
      }
    return ((t = ht(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
  }
  function gn(e, t, n, r) {
    return ((e = ht(7, e, r, t)), (e.lanes = n), e);
  }
  function Dl(e, t, n, r) {
    return (
      (e = ht(22, e, r, t)),
      (e.elementType = ue),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Fi(e, t, n) {
    return ((e = ht(6, e, null, t)), (e.lanes = n), e);
  }
  function Bi(e, t, n) {
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
  function lf(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = co(0)),
      (this.expirationTimes = co(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = co(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Ai(e, t, n, r, l, o, i, s, a) {
    return (
      (e = new lf(e, t, n, s, a)),
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
      Jo(o),
      e
    );
  }
  function of(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: q,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Qa(e) {
    if (!e) return qt;
    e = e._reactInternals;
    e: {
      if (on(e) !== e || e.tag !== 1) throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Xe(t.type)) {
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
      if (Xe(n)) return yu(e, n, t);
    }
    return t;
  }
  function Ha(e, t, n, r, l, o, i, s, a) {
    return (
      (e = Ai(n, r, !0, e, l, o, i, s, a)),
      (e.context = Qa(null)),
      (n = e.current),
      (r = Ye()),
      (l = en(n)),
      (o = It(r, l)),
      (o.callback = t ?? null),
      Xt(n, o, l),
      (e.current.lanes = l),
      Jn(e, l, r),
      be(e, r),
      e
    );
  }
  function Fl(e, t, n, r) {
    var l = t.current,
      o = Ye(),
      i = en(l);
    return (
      (n = Qa(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = It(o, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Xt(l, t, i)),
      e !== null && (xt(e, l, i, o), ml(e, l, i)),
      i
    );
  }
  function Bl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Wa(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ui(e, t) {
    (Wa(e, t), (e = e.alternate) && Wa(e, t));
  }
  function sf() {
    return null;
  }
  var Ga =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function $i(e) {
    this._internalRoot = e;
  }
  ((Al.prototype.render = $i.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      Fl(e, t, null, null);
    }),
    (Al.prototype.unmount = $i.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (hn(function () {
            Fl(null, e, null, null);
          }),
            (t[Tt] = null));
        }
      }));
  function Al(e) {
    this._internalRoot = e;
  }
  Al.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ts();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
      (Vt.splice(n, 0, e), n === 0 && Rs(e));
    }
  };
  function Vi(e) {
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
  function qa() {}
  function uf(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var y = Bl(i);
          o.call(y);
        };
      }
      var i = Ha(t, r, e, 0, null, !1, !1, '', qa);
      return (
        (e._reactRootContainer = i),
        (e[Tt] = i.current),
        fr(e.nodeType === 8 ? e.parentNode : e),
        hn(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var s = r;
      r = function () {
        var y = Bl(a);
        s.call(y);
      };
    }
    var a = Ai(e, 0, !1, null, null, !1, !1, '', qa);
    return (
      (e._reactRootContainer = a),
      (e[Tt] = a.current),
      fr(e.nodeType === 8 ? e.parentNode : e),
      hn(function () {
        Fl(t, a, n, r);
      }),
      a
    );
  }
  function $l(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == 'function') {
        var s = l;
        l = function () {
          var a = Bl(i);
          s.call(a);
        };
      }
      Fl(t, i, e, l);
    } else i = uf(n, t, e, l, r);
    return Bl(i);
  }
  ((js = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Zn(t.pendingLanes);
          n !== 0 && (fo(t, n | 1), be(t, Ne()), (le & 6) === 0 && ((Qn = Ne() + 500), Yt()));
        }
        break;
      case 13:
        (hn(function () {
          var r = zt(e, 1);
          if (r !== null) {
            var l = Ye();
            xt(r, e, 1, l);
          }
        }),
          Ui(e, 1));
    }
  }),
    (po = function (e) {
      if (e.tag === 13) {
        var t = zt(e, 134217728);
        if (t !== null) {
          var n = Ye();
          xt(t, e, 134217728, n);
        }
        Ui(e, 134217728);
      }
    }),
    (Ps = function (e) {
      if (e.tag === 13) {
        var t = en(e),
          n = zt(e, t);
        if (n !== null) {
          var r = Ye();
          xt(n, e, t, r);
        }
        Ui(e, t);
      }
    }),
    (Ts = function () {
      return de;
    }),
    (Ls = function (e, t) {
      var n = de;
      try {
        return ((de = e), t());
      } finally {
        de = n;
      }
    }),
    (lo = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((Xl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
                if (!l) throw Error(u(90));
                (es(r), Xl(r, l));
              }
            }
          }
          break;
        case 'textarea':
          os(e, n);
          break;
        case 'select':
          ((t = n.value), t != null && wn(e, !!n.multiple, t, !1));
      }
    }),
    (ms = zi),
    (hs = hn));
  var af = { usingClientEntryPoint: !1, Events: [hr, Ln, ll, fs, ps, zi] },
    Tr = {
      findFiberByHostInstance: sn,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    cf = {
      bundleType: Tr.bundleType,
      version: Tr.version,
      rendererPackageName: Tr.rendererPackageName,
      rendererConfig: Tr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: re.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = _s(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Tr.findFiberByHostInstance || sf,
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
        ((Ar = Vl.inject(cf)), (Ct = Vl));
      } catch {}
  }
  return (
    (et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = af),
    (et.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Vi(t)) throw Error(u(200));
      return of(e, t, null, n);
    }),
    (et.createRoot = function (e, t) {
      if (!Vi(e)) throw Error(u(299));
      var n = !1,
        r = '',
        l = Ga;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Ai(e, 1, !1, null, null, n, !1, r, l)),
        (e[Tt] = t.current),
        fr(e.nodeType === 8 ? e.parentNode : e),
        new $i(t)
      );
    }),
    (et.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(u(188))
          : ((e = Object.keys(e).join(',')), Error(u(268, e)));
      return ((e = _s(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (et.flushSync = function (e) {
      return hn(e);
    }),
    (et.hydrate = function (e, t, n) {
      if (!Ul(t)) throw Error(u(200));
      return $l(null, e, t, !0, n);
    }),
    (et.hydrateRoot = function (e, t, n) {
      if (!Vi(e)) throw Error(u(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        i = Ga;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Ha(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[Tt] = t.current),
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
    (et.render = function (e, t, n) {
      if (!Ul(t)) throw Error(u(200));
      return $l(null, e, t, !1, n);
    }),
    (et.unmountComponentAtNode = function (e) {
      if (!Ul(e)) throw Error(u(40));
      return e._reactRootContainer
        ? (hn(function () {
            $l(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Tt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (et.unstable_batchedUpdates = zi),
    (et.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Ul(n)) throw Error(u(200));
      if (e == null || e._reactInternals === void 0) throw Error(u(38));
      return $l(e, t, n, !1, r);
    }),
    (et.version = '18.3.1-next-f1338f8080-20240426'),
    et
  );
}
var tc;
function gf() {
  if (tc) return Wi.exports;
  tc = 1;
  function v() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (d) {
        console.error(d);
      }
  }
  return (v(), (Wi.exports = yf()), Wi.exports);
}
var nc;
function _f() {
  if (nc) return Ql;
  nc = 1;
  var v = gf();
  return ((Ql.createRoot = v.createRoot), (Ql.hydrateRoot = v.hydrateRoot), Ql);
}
var wf = _f();
const Sf = [
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
  oc = { questions: Sf },
  kf = {
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
  xf = { equal: 33, '10x': 33, '100x': 34 },
  Zi = { causes: kf, defaultCredences: xf },
  Cf = { resetButton: !1, sliderLock: !1 },
  Ji = { ui: Cf },
  rc = {
    default: ['#81B29A', '#98C1D9', '#E07A5F'],
    selection: ['#81B29A', '#98C1D9', '#E07A5F'],
    credence: ['#81B29A', '#98C1D9', '#E07A5F'],
  },
  Ef = '#81B29A',
  Nf = { OPTIONS: 'options' },
  Bt = { DEFAULT: 'default', SELECTION: 'selection', CREDENCE: 'credence' },
  { causes: Hl } = Zi;
function ic(v = !1) {
  return Object.fromEntries(
    oc.questions.map((d) => [
      d.id,
      v ? { ...d.worldviewDimension, name: d.editPanelTitle } : d.worldviewDimension,
    ])
  );
}
const Wl = ic();
function* Gl(v) {
  const d = Object.keys(v);
  if (d.length === 0) return;
  const u = Object.keys(v[d[0]]);
  function* g(S, E) {
    if (S === d.length) {
      let P = 1;
      for (const _ of d) P *= v[_][E[_]] / 100;
      yield { options: E, probability: P };
      return;
    }
    const L = d[S];
    for (const P of u) yield* g(S + 1, { ...E, [L]: P });
  }
  yield* g(0, {});
}
function jf(v, d, u) {
  let g = v.points;
  for (const [S, E] of Object.entries(u)) {
    const L = d[S],
      P = E.options[L];
    if (E.applyAs === 'multiplier') E.appliesWhen && v[E.appliesWhen] && (g *= P);
    else if (E.applyAs === 'exponent' && E.appliesTo) {
      const _ = v[E.appliesTo] || 1;
      g *= Math.pow(_, P);
    }
  }
  return g;
}
function ql(v, d, u) {
  const g = {};
  for (const [S, E] of Object.entries(d)) g[S] = jf(E, v, u);
  return g;
}
function sc(v) {
  const d = Math.max(...Object.values(v));
  return Object.keys(v).filter((u) => Math.abs(v[u] - d) < 1e-4);
}
function bi(v) {
  return Object.fromEntries(Object.keys(v).map((d) => [d, 0]));
}
function Pf(v, d) {
  const u = (d == null ? void 0 : d.causes) || Hl,
    g = (d == null ? void 0 : d.dimensions) || Wl,
    S = bi(u);
  for (const { options: P, probability: _ } of Gl(v)) {
    const j = ql(P, u, g);
    for (const [O, R] of Object.entries(j)) S[O] += _ * R;
  }
  const E = Object.keys(S).reduce((P, _) => (S[P] > S[_] ? P : _)),
    L = { evs: S };
  for (const P of Object.keys(u)) L[P] = P === E ? 100 : 0;
  return L;
}
function Tf(v, d) {
  const u = (d == null ? void 0 : d.causes) || Hl,
    g = (d == null ? void 0 : d.dimensions) || Wl,
    S = bi(u);
  for (const { options: L, probability: P } of Gl(v)) {
    const _ = ql(L, u, g),
      j = sc(_),
      O = P / j.length;
    for (const R of j) S[R] += O;
  }
  const E = {};
  for (const L of Object.keys(u)) E[L] = S[L] * 100;
  return E;
}
function Lf(v, d) {
  const u = (d == null ? void 0 : d.causes) || Hl,
    g = (d == null ? void 0 : d.dimensions) || Wl,
    S = bi(u);
  for (const { options: E, probability: L } of Gl(v)) {
    const P = ql(E, u, g),
      _ = sc(P),
      j = (L * 100) / _.length;
    for (const O of _) S[O] += j;
  }
  return S;
}
function Of(v, d) {
  const u = (d == null ? void 0 : d.causes) || Hl,
    g = (d == null ? void 0 : d.dimensions) || Wl,
    S = Object.keys(u),
    E = Rf(S);
  let L = E[0],
    P = -1 / 0;
  for (const _ of E) {
    let j = 1 / 0;
    for (const { options: O, probability: R } of Gl(v)) {
      if (R < 0.001) continue;
      const A = ql(O, u, g);
      let $ = 0;
      for (const ee of S) $ += A[ee] * (_[ee] / 100);
      j = Math.min(j, $);
    }
    j > P && ((P = j), (L = { ..._ }));
  }
  return L;
}
function Rf(v) {
  const d = [],
    u = v.length,
    g = (_) => {
      const j = {};
      return (
        v.forEach((O, R) => {
          j[O] = _[R];
        }),
        j
      );
    };
  for (let _ = 0; _ < u; _++) {
    const j = new Array(u).fill(0);
    ((j[_] = 100), d.push(g(j)));
  }
  for (let _ = 0; _ < u; _++)
    for (let j = _ + 1; j < u; j++) {
      const O = new Array(u).fill(0);
      ((O[_] = 50), (O[j] = 50), d.push(g(O)));
    }
  const S = Math.floor(100 / u),
    E = 100 - S * u,
    L = new Array(u).fill(S);
  ((L[0] += E), d.push(g(L)));
  const P = [
    [60, 20, 20],
    [70, 15, 15],
    [80, 10, 10],
  ];
  for (const _ of P)
    if (_.length === u)
      for (let j = 0; j < u; j++) {
        const O = new Array(u).fill(0);
        O[j] = _[0];
        let R = 1;
        for (let A = 0; A < u; A++) A !== j && R < _.length && (O[A] = _[R++]);
        d.push(g(O));
      }
  return d;
}
function uc(v, d, u, g = null, S = null) {
  const E = S ? u[S] : 0,
    L = 100 - E;
  d = Math.max(0, Math.min(L, d));
  const P = g || u,
    _ = Object.keys(u).filter((A) => A !== v && A !== S),
    j = _.reduce((A, $) => A + P[$], 0),
    O = 100 - d - E,
    R = { [v]: d };
  if ((S && (R[S] = u[S]), j === 0)) {
    const A = Math.floor(O / _.length);
    let $ = O - A * _.length;
    _.forEach((ee, M) => {
      R[ee] = A + (M < $ ? 1 : 0);
    });
  } else {
    let A = 0;
    _.forEach(($, ee) => {
      if (ee === _.length - 1) R[$] = Math.max(0, O - A);
      else {
        const M = P[$] / j,
          G = O * M;
        ((R[$] = Math.max(0, G)), (A += R[$]));
      }
    });
  }
  return R;
}
function ac(v) {
  const d = Object.keys(v),
    u = {};
  let g = 0;
  return (
    d.slice(0, -1).forEach((S) => {
      ((u[S] = Math.round(v[S])), (g += u[S]));
    }),
    (u[d[d.length - 1]] = 100 - g),
    u
  );
}
const { questions: ut } = oc,
  { causes: zf, defaultCredences: Yi } = Zi;
function If(v) {
  {
    const d = v.type || Bt.DEFAULT;
    return rc[d] || rc[Bt.DEFAULT];
  }
}
const lc = ut.map((v) => {
  const d = If(v);
  return {
    ...v,
    type: v.type || Bt.DEFAULT,
    options: v.options.map((u, g) => ({ ...u, color: d[g] || d[0] })),
  };
});
function Mf() {
  return { credences: { ...Yi }, originalCredences: null, inputMode: Nf.OPTIONS, lockedKey: null };
}
function cc() {
  return Object.fromEntries(ut.map((v) => [v.id, Mf()]));
}
const dc = { currentStep: 'welcome', questions: cc(), expandedPanel: null, debugConfig: null },
  tt = {
    GO_TO_STEP: 'GO_TO_STEP',
    UPDATE_QUESTION: 'UPDATE_QUESTION',
    SET_EXPANDED_PANEL: 'SET_EXPANDED_PANEL',
    SAVE_ORIGINALS: 'SAVE_ORIGINALS',
    RESET_TO_ORIGINAL: 'RESET_TO_ORIGINAL',
    RESET_QUIZ: 'RESET_QUIZ',
    SET_DEBUG_CONFIG: 'SET_DEBUG_CONFIG',
  };
function Df(v, d, u) {
  return { ...v, questions: { ...v.questions, [d]: { ...v.questions[d], ...u } } };
}
function Ff(v, d) {
  switch (d.type) {
    case tt.GO_TO_STEP:
      return { ...v, currentStep: d.payload };
    case tt.UPDATE_QUESTION:
      return Df(v, d.payload.questionId, d.payload.updates);
    case tt.SET_EXPANDED_PANEL:
      return { ...v, expandedPanel: d.payload };
    case tt.SAVE_ORIGINALS:
      return {
        ...v,
        questions: Object.fromEntries(
          Object.entries(v.questions).map(([u, g]) => [
            u,
            { ...g, originalCredences: g.originalCredences || { ...g.credences } },
          ])
        ),
      };
    case tt.RESET_TO_ORIGINAL:
      return {
        ...v,
        questions: Object.fromEntries(
          Object.entries(v.questions).map(([u, g]) => [
            u,
            { ...g, credences: g.originalCredences ? { ...g.originalCredences } : g.credences },
          ])
        ),
      };
    case tt.RESET_QUIZ:
      return { ...dc, questions: cc() };
    case tt.SET_DEBUG_CONFIG:
      return { ...v, debugConfig: d.payload };
    default:
      return v;
  }
}
const fc = X.createContext(null);
function Bf({ children: v }) {
  const [d, u] = X.useReducer(Ff, dc),
    g = X.useCallback((W) => {
      u({ type: tt.GO_TO_STEP, payload: W });
    }, []),
    S = X.useCallback((W, K) => {
      u({ type: tt.UPDATE_QUESTION, payload: { questionId: W, updates: K } });
    }, []),
    E = X.useCallback((W, K) => S(W, { credences: K }), [S]),
    L = X.useCallback((W, K) => S(W, { inputMode: K }), [S]),
    P = X.useCallback((W, K) => S(W, { lockedKey: K }), [S]),
    _ = X.useCallback((W) => {
      u({ type: tt.SET_EXPANDED_PANEL, payload: W });
    }, []),
    j = X.useCallback(() => {
      u({ type: tt.SAVE_ORIGINALS });
    }, []),
    O = X.useCallback(() => {
      u({ type: tt.RESET_TO_ORIGINAL });
    }, []),
    R = X.useCallback(() => {
      u({ type: tt.RESET_QUIZ });
    }, []),
    A = X.useCallback((W) => {
      u({ type: tt.SET_DEBUG_CONFIG, payload: W });
    }, []),
    $ = X.useCallback((W) => ut.findIndex((K) => K.id === W), []),
    ee = X.useCallback(
      (W) => {
        const K = $(W);
        return K === 0 ? 'welcome' : ut[K - 1].id;
      },
      [$]
    ),
    M = X.useCallback(
      (W) => {
        const K = $(W);
        return K === ut.length - 1 ? 'results' : ut[K + 1].id;
      },
      [$]
    ),
    G = X.useCallback(() => {
      g(ut[0].id);
    }, [g]),
    J = X.useCallback(() => {
      if (d.currentStep === 'results') g(ut[ut.length - 1].id);
      else {
        const W = ee(d.currentStep);
        g(W);
      }
    }, [d.currentStep, g, ee]),
    pe = X.useCallback(() => {
      const W = M(d.currentStep);
      (W === 'results' && j(), g(W));
    }, [d.currentStep, g, M, j]),
    fe = X.useCallback(
      (W) => {
        var T;
        const K = W === 'original' ? 'originalCredences' : 'credences',
          ue = d.questions[(T = ut[0]) == null ? void 0 : T.id];
        return W === 'original' && !(ue != null && ue.originalCredences)
          ? null
          : Object.fromEntries(
              ut.map((V) => {
                var I;
                return [V.id, ((I = d.questions[V.id]) == null ? void 0 : I[K]) || Yi];
              })
            );
      },
      [d.questions]
    ),
    re = X.useCallback(
      (W, K) =>
        W
          ? { maxEV: Pf(W, K), parliament: Tf(W, K), mergedFavorites: Lf(W, K), maximin: Of(W, K) }
          : null,
      []
    ),
    Z = X.useMemo(() => re(fe('current'), d.debugConfig), [fe, re, d.debugConfig]),
    q = X.useMemo(() => re(fe('original'), d.debugConfig), [fe, re, d.debugConfig]),
    me = X.useMemo(
      () =>
        Object.values(d.questions).some(
          (W) =>
            W.originalCredences &&
            JSON.stringify(W.credences) !== JSON.stringify(W.originalCredences)
        ),
      [d.questions]
    ),
    ae = X.useMemo(() => $(d.currentStep), [d.currentStep, $]),
    Le = X.useMemo(() => (ae === -1 ? null : lc[ae]), [ae]),
    xe = ut.length,
    at = X.useMemo(() => (ae === -1 ? 0 : ((ae + 1) / xe) * 100), [ae, xe]),
    Ge = X.useMemo(() => (ae === -1 ? '' : `Question ${ae + 1} of ${xe}`), [ae, xe]),
    Ie = X.useMemo(() => {
      const W = {};
      return (
        ut.forEach((K) => {
          const ue = d.questions[K.id];
          W[K.id] = {
            credences: ue.credences,
            setCredences: (T) => E(K.id, T),
            originalCredences: ue.originalCredences,
            inputMode: ue.inputMode,
            setInputMode: (T) => L(K.id, T),
            lockedKey: ue.lockedKey,
            setLockedKey: (T) => P(K.id, T),
          };
        }),
        W
      );
    }, [d.questions, E, L, P]),
    nt = X.useMemo(
      () => ({
        currentStep: d.currentStep,
        questions: d.questions,
        expandedPanel: d.expandedPanel,
        debugConfig: d.debugConfig,
        questionsConfig: lc,
        causesConfig: zf,
        defaultCredences: Yi,
        goToStep: g,
        setCredences: E,
        setInputMode: L,
        setLockedKey: P,
        setExpandedPanel: _,
        saveOriginals: j,
        resetToOriginal: O,
        resetQuiz: R,
        setDebugConfig: A,
        getQuestionIndex: $,
        getPrevStep: ee,
        getNextStep: M,
        startQuiz: G,
        goBack: J,
        goForward: pe,
        currentQuestion: Le,
        currentQuestionIndex: ae,
        totalQuestions: xe,
        progressPercentage: at,
        questionNumber: Ge,
        hasChanged: me,
        calculationResults: Z,
        originalCalculationResults: q,
        stateMap: Ie,
      }),
      [
        d.currentStep,
        d.questions,
        d.expandedPanel,
        d.debugConfig,
        g,
        E,
        L,
        P,
        _,
        j,
        O,
        R,
        A,
        $,
        ee,
        M,
        G,
        J,
        pe,
        Le,
        ae,
        xe,
        at,
        Ge,
        me,
        Z,
        q,
        Ie,
      ]
    );
  return f.jsx(fc.Provider, { value: nt, children: v });
}
const Af = { title: 'Moral Parliament' },
  Uf = {
    timeEstimate: '~3 minutes',
    headingLine1: 'Where Should Your',
    headingLine2: 'Giving Go?',
    intro:
      'Uncertain about your ethical views? This tool helps you allocate resources across different causes based on your moral credences—the probabilities you assign to different ethical perspectives.',
    startButton: 'Start Quiz →',
    previewLabel: "You'll be asked about:",
  },
  $f = { back: '← Back', continue: 'Continue →', backToQuiz: '← Back to Quiz' },
  Vf = { modeToggle: { pickOne: 'Pick One', customMix: 'Custom Mix' } },
  Qf = {
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
  Hf = {
    modifiedBadge: 'modified',
    sliderNote: 'Sliders auto-balance to 100%',
    resetButton: 'Reset',
  },
  Ee = {
    branding: Af,
    welcome: Uf,
    navigation: $f,
    questionScreen: Vf,
    results: Qf,
    editPanel: Hf,
  },
  pc = ({ subtitle: v }) =>
    f.jsxs('header', {
      className: 'header',
      children: [
        f.jsx('div', { className: 'header-title', children: Ee.branding.title }),
        v && f.jsx('div', { className: 'header-subtitle', children: v }),
      ],
    });
function Yl() {
  const v = X.useContext(fc);
  if (!v) throw new Error('useQuiz must be used within a QuizProvider');
  return v;
}
const Wf = '_container_11wow_3',
  Gf = '_heading_11wow_8',
  qf = '_headingEmphasis_11wow_16',
  Yf = '_intro_11wow_24',
  Kf = '_infoBox_11wow_32',
  Xf = '_infoBoxLabel_11wow_40',
  Zf = '_infoBoxGrid_11wow_47',
  Jf = '_infoBoxItem_11wow_54',
  ln = {
    container: Wf,
    heading: Gf,
    headingEmphasis: qf,
    intro: Yf,
    infoBox: Kf,
    infoBoxLabel: Xf,
    infoBoxGrid: Zf,
    infoBoxItem: Jf,
  },
  bf = () => {
    const { questionsConfig: v, startQuiz: d } = Yl();
    return f.jsxs('div', {
      className: 'screen',
      children: [
        f.jsx(pc, { subtitle: Ee.welcome.timeEstimate }),
        f.jsx('main', {
          className: 'screen-main',
          children: f.jsxs('div', {
            className: ln.container,
            children: [
              f.jsxs('h1', {
                className: ln.heading,
                children: [
                  Ee.welcome.headingLine1,
                  f.jsx('br', {}),
                  f.jsx('span', {
                    className: ln.headingEmphasis,
                    children: Ee.welcome.headingLine2,
                  }),
                ],
              }),
              f.jsx('p', { className: ln.intro, children: Ee.welcome.intro }),
              f.jsx('button', {
                onClick: d,
                className: 'btn btn-primary',
                children: Ee.welcome.startButton,
              }),
              f.jsxs('div', {
                className: ln.infoBox,
                children: [
                  f.jsx('div', { className: ln.infoBoxLabel, children: Ee.welcome.previewLabel }),
                  f.jsx('div', {
                    className: ln.infoBoxGrid,
                    children: v.map((u) =>
                      f.jsxs(
                        'div',
                        { className: ln.infoBoxItem, children: [u.emoji, ' ', u.previewText] },
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
  ep = ({ percentage: v }) =>
    f.jsx('div', {
      className: 'progress-container',
      children: f.jsx('div', {
        className: 'progress-track',
        children: f.jsx('div', { className: 'progress-fill', style: { width: `${v}%` } }),
      }),
    });
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tp = (v) => v.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  mc = (...v) =>
    v
      .filter((d, u, g) => !!d && d.trim() !== '' && g.indexOf(d) === u)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var np = {
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
 */ const rp = X.forwardRef(
  (
    {
      color: v = 'currentColor',
      size: d = 24,
      strokeWidth: u = 2,
      absoluteStrokeWidth: g,
      className: S = '',
      children: E,
      iconNode: L,
      ...P
    },
    _
  ) =>
    X.createElement(
      'svg',
      {
        ref: _,
        ...np,
        width: d,
        height: d,
        stroke: v,
        strokeWidth: g ? (Number(u) * 24) / Number(d) : u,
        className: mc('lucide', S),
        ...P,
      },
      [...L.map(([j, O]) => X.createElement(j, O)), ...(Array.isArray(E) ? E : [E])]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rr = (v, d) => {
  const u = X.forwardRef(({ className: g, ...S }, E) =>
    X.createElement(rp, { ref: E, iconNode: d, className: mc(`lucide-${tp(v)}`, g), ...S })
  );
  return ((u.displayName = `${v}`), u);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lp = Rr('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const op = Rr('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ip = Rr('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ki = Rr('RotateCcw', [
  ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
  ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sp = Rr('SlidersVertical', [
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
  up = '_modeToggle_modhv_3',
  ap = '_button_modhv_10',
  cp = '_options_modhv_23',
  dp = '_active_modhv_29',
  fp = '_sliders_modhv_35',
  _n = { modeToggle: up, button: ap, options: cp, active: dp, sliders: fp },
  pp = ({ mode: v, setMode: d }) =>
    f.jsxs('div', {
      className: _n.modeToggle,
      children: [
        f.jsx('button', {
          onClick: () => d('options'),
          className: `${_n.button} ${_n.options} ${v === 'options' ? _n.active : ''}`,
          children: Ee.questionScreen.modeToggle.pickOne,
        }),
        f.jsxs('button', {
          onClick: () => d('sliders'),
          className: `${_n.button} ${_n.sliders} ${v === 'sliders' ? _n.active : ''}`,
          children: [f.jsx(sp, { size: 14 }), Ee.questionScreen.modeToggle.customMix],
        }),
      ],
    }),
  mp = '_optionButton_xv4xt_3',
  hp = '_selected_xv4xt_20',
  vp = '_content_xv4xt_34',
  yp = '_textContent_xv4xt_40',
  gp = '_label_xv4xt_44',
  _p = '_description_xv4xt_56',
  wp = '_checkmark_xv4xt_62',
  Ft = {
    optionButton: mp,
    default: '_default_xv4xt_15',
    selected: hp,
    content: vp,
    textContent: yp,
    label: gp,
    description: _p,
    checkmark: wp,
  },
  Sp = ({
    label: v,
    description: d,
    optionKey: u,
    credences: g,
    setCredences: S,
    color: E,
    setInputMode: L,
  }) => {
    const P = g[u] === 100,
      _ = () => {
        const j = { equal: 0, '10x': 0, '100x': 0 };
        ((j[u] = 100), S(j), L('options'));
      };
    return f.jsx('button', {
      onClick: _,
      className: `${Ft.optionButton} ${P ? Ft.selected : Ft.default}`,
      style: { '--option-color': E },
      children: f.jsxs('div', {
        className: Ft.content,
        children: [
          f.jsxs('div', {
            className: Ft.textContent,
            children: [
              f.jsx('div', { className: `${Ft.label} ${P ? Ft.selected : ''}`, children: v }),
              f.jsx('div', { className: Ft.description, children: d }),
            ],
          }),
          P && f.jsx('div', { className: Ft.checkmark, children: '✓' }),
        ],
      }),
    });
  },
  kp = '_credenceSlider_yrqg7_4',
  xp = '_header_yrqg7_8',
  Cp = '_label_yrqg7_15',
  Ep = '_description_yrqg7_22',
  Np = '_value_yrqg7_28',
  jp = '_sliderRow_yrqg7_35',
  Pp = '_sliderContainer_yrqg7_41',
  Tp = '_lockLimit_yrqg7_46',
  Lp = '_compactSlider_yrqg7_91',
  Op = '_compactSelection_yrqg7_168',
  Rp = '_selected_yrqg7_186',
  zp = '_selectionLabel_yrqg7_191',
  Ip = '_selectionIndicator_yrqg7_202',
  ze = {
    credenceSlider: kp,
    header: xp,
    label: Cp,
    description: Ep,
    value: Np,
    sliderRow: jp,
    sliderContainer: Pp,
    lockLimit: Tp,
    compactSlider: Lp,
    compactSelection: Op,
    selected: Rp,
    selectionLabel: zp,
    selectionIndicator: Ip,
  },
  Mp = ({
    label: v,
    description: d,
    value: u,
    onChange: g,
    color: S,
    credences: E,
    sliderKey: L,
    lockedKey: P,
    setLockedKey: _,
  }) => {
    var Z;
    const [j, O] = X.useState(null),
      [R, A] = X.useState(!1),
      $ = P === L,
      ee = P && P !== L,
      M = ee ? E[P] : 0,
      G = ee ? 100 - M : 100,
      J = ee ? `calc(${G}% + ${(50 - G) * 0.16}px)` : null,
      pe = () => {
        $ || (A(!0), O({ ...E }));
      },
      fe = (q) => {
        if ($ || !R) return;
        A(!1);
        const me = parseFloat(q.target.value);
        (g(me, j, !0, P), O(null));
      },
      re = (q) => {
        if ($) return;
        const me = parseFloat(q.target.value);
        g(me, j, !1, P);
      };
    return f.jsxs('div', {
      className: ze.credenceSlider,
      children: [
        f.jsxs('div', {
          className: ze.header,
          children: [
            f.jsxs('div', {
              children: [
                f.jsx('div', { className: ze.label, children: v }),
                f.jsx('div', { className: ze.description, children: d }),
              ],
            }),
            f.jsxs('div', {
              className: ze.value,
              style: { color: S },
              children: [Math.round(u), '%'],
            }),
          ],
        }),
        f.jsxs('div', {
          className: ze.sliderRow,
          children: [
            f.jsxs('div', {
              className: ze.sliderContainer,
              children: [
                f.jsx('input', {
                  type: 'range',
                  min: '0',
                  max: '100',
                  step: 'any',
                  value: u,
                  onChange: re,
                  onMouseDown: pe,
                  onMouseUp: fe,
                  onMouseLeave: fe,
                  onTouchStart: pe,
                  onTouchEnd: fe,
                  'data-dragging': R,
                  disabled: $,
                  style: {
                    background: ee
                      ? `linear-gradient(to right, ${S} 0%, ${S} ${u}%, rgba(255,255,255,0.15) ${u}%, rgba(255,255,255,0.15) ${J}, rgba(255,255,255,0.08) ${J}, rgba(255,255,255,0.08) 100%)`
                      : `linear-gradient(to right, ${S} 0%, ${S} ${u}%, rgba(255,255,255,0.15) ${u}%, rgba(255,255,255,0.15) 100%)`,
                    cursor: $ ? 'not-allowed' : 'pointer',
                  },
                }),
                ee && f.jsx('div', { className: ze.lockLimit, style: { left: J } }),
              ],
            }),
            (Z = Ji.ui) == null ? void 0 : Z.sliderLock,
          ],
        }),
      ],
    });
  },
  Dp = '_container_9yo3m_3',
  Fp = '_categoryLabel_9yo3m_8',
  Bp = '_heading_9yo3m_16',
  Ap = '_instructions_9yo3m_23',
  Up = '_buttonRow_9yo3m_30',
  Or = { container: Dp, categoryLabel: Fp, heading: Bp, instructions: Ap, buttonRow: Up },
  $p = () => {
    const {
      currentQuestion: v,
      stateMap: d,
      questionNumber: u,
      progressPercentage: g,
      goBack: S,
      goForward: E,
    } = Yl();
    if (!v) return null;
    const L = d[v.id];
    if (!L) return null;
    const {
        credences: P,
        setCredences: _,
        inputMode: j,
        setInputMode: O,
        lockedKey: R,
        setLockedKey: A,
      } = L,
      $ = v.type || Bt.DEFAULT,
      ee = $ === Bt.DEFAULT;
    let M = j;
    $ === Bt.SELECTION ? (M = 'options') : $ === Bt.CREDENCE && (M = 'sliders');
    const G = M === 'options' ? v.instructionsOptions : v.instructionsSliders;
    return f.jsxs('div', {
      className: 'screen',
      children: [
        f.jsx(pc, { subtitle: u }),
        f.jsx(ep, { percentage: g }),
        f.jsx('main', {
          className: 'screen-main',
          children: f.jsxs('div', {
            className: Or.container,
            children: [
              f.jsx('div', {
                className: Or.categoryLabel,
                style: { color: Ef },
                children: v.categoryLabel,
              }),
              f.jsx('h2', { className: Or.heading, children: v.heading }),
              f.jsx('p', { className: Or.instructions, children: G }),
              ee && f.jsx(pp, { mode: j, setMode: O }),
              f.jsx('div', {
                className: 'card',
                children:
                  M === 'options'
                    ? f.jsx(f.Fragment, {
                        children: v.options.map((J) =>
                          f.jsx(
                            Sp,
                            {
                              label: J.label,
                              description: J.description,
                              optionKey: J.key,
                              credences: P,
                              setCredences: _,
                              color: J.color,
                              setInputMode: O,
                            },
                            J.key
                          )
                        ),
                      })
                    : f.jsx(f.Fragment, {
                        children: v.options.map((J) =>
                          f.jsx(
                            Mp,
                            {
                              label: J.label,
                              description: J.description,
                              value: P[J.key],
                              onChange: (pe, fe, re, Z) => {
                                const q = uc(J.key, pe, P, fe, Z);
                                _(re ? ac(q) : q);
                              },
                              color: J.color,
                              credences: P,
                              sliderKey: J.key,
                              lockedKey: R,
                              setLockedKey: A,
                            },
                            J.key
                          )
                        ),
                      }),
              }),
              f.jsxs('div', {
                className: Or.buttonRow,
                children: [
                  f.jsx('button', {
                    onClick: S,
                    className: 'btn btn-secondary',
                    children: Ee.navigation.back,
                  }),
                  f.jsx('button', {
                    onClick: E,
                    className: 'btn btn-primary',
                    children: Ee.navigation.continue,
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Vp = '_causeBar_1uovs_3',
  Qp = '_header_1uovs_7',
  Hp = '_name_1uovs_15',
  Wp = '_percentage_1uovs_19',
  Gp = '_changeIndicator_1uovs_23',
  qp = '_up_1uovs_27',
  Yp = '_down_1uovs_31',
  Kp = '_barTrack_1uovs_35',
  Xp = '_barOriginal_1uovs_43',
  Zp = '_barFill_1uovs_49',
  Jp = '_barLabel_1uovs_58',
  bp = '_compact_1uovs_65',
  vt = {
    causeBar: Vp,
    header: Qp,
    name: Hp,
    percentage: Wp,
    changeIndicator: Gp,
    up: qp,
    down: Yp,
    barTrack: Kp,
    barOriginal: Xp,
    barFill: Zp,
    barLabel: Jp,
    compact: bp,
  },
  em = ({
    name: v,
    percentage: d,
    color: u,
    originalPercentage: g = null,
    hasChanged: S = !1,
    simpleMode: E = !1,
  }) => {
    const L = !E && S && g !== null && d !== g,
      P = L && d > g;
    return f.jsxs('div', {
      className: `${vt.causeBar} ${E ? vt.compact : ''}`,
      children: [
        f.jsxs('div', {
          className: vt.header,
          children: [
            f.jsx('span', { className: vt.name, children: v }),
            f.jsxs('span', {
              className: vt.percentage,
              style: { color: u },
              children: [
                d.toFixed(0),
                '%',
                L &&
                  f.jsx('span', {
                    className: `${vt.changeIndicator} ${P ? vt.up : vt.down}`,
                    children: P ? '↑' : '↓',
                  }),
              ],
            }),
          ],
        }),
        f.jsxs('div', {
          className: vt.barTrack,
          children: [
            L &&
              f.jsx('div', { className: vt.barOriginal, style: { width: `${g}%`, background: u } }),
            f.jsx('div', {
              className: vt.barFill,
              style: { width: `${d}%`, background: u },
              children:
                d > 15 && f.jsxs('span', { className: vt.barLabel, children: [d.toFixed(0), '%'] }),
            }),
          ],
        }),
      ],
    });
  },
  tm = ({
    label: v,
    value: d,
    onChange: u,
    color: g,
    credences: S,
    sliderKey: E,
    lockedKey: L,
    setLockedKey: P,
  }) => {
    var re;
    const [_, j] = X.useState(null),
      [O, R] = X.useState(!1),
      A = L === E,
      $ = L && L !== E,
      ee = $ ? S[L] : 0,
      M = $ ? 100 - ee : 100,
      G = $ ? `calc(${M}% + ${(50 - M) * 0.16}px)` : null,
      J = () => {
        A || (R(!0), j({ ...S }));
      },
      pe = (Z) => {
        if (A || !O) return;
        R(!1);
        const q = parseFloat(Z.target.value);
        (u(q, _, !0, L), j(null));
      },
      fe = (Z) => {
        if (A) return;
        const q = parseFloat(Z.target.value);
        u(q, _, !1, L);
      };
    return f.jsxs('div', {
      className: ze.compactSlider,
      children: [
        f.jsxs('div', {
          className: ze.header,
          children: [
            f.jsx('span', { className: ze.label, children: v }),
            f.jsxs('span', {
              className: ze.value,
              style: { color: g },
              children: [Math.round(d), '%'],
            }),
          ],
        }),
        f.jsxs('div', {
          className: ze.sliderRow,
          children: [
            f.jsxs('div', {
              className: ze.sliderContainer,
              children: [
                f.jsx('input', {
                  type: 'range',
                  min: '0',
                  max: '100',
                  step: 'any',
                  value: d,
                  onChange: fe,
                  onMouseDown: J,
                  onMouseUp: pe,
                  onMouseLeave: pe,
                  onTouchStart: J,
                  onTouchEnd: pe,
                  'data-dragging': O,
                  disabled: A,
                  style: {
                    background: $
                      ? `linear-gradient(to right, ${g} 0%, ${g} ${d}%, rgb(51,65,85) ${d}%, rgb(51,65,85) ${G}, rgb(30,41,59) ${G}, rgb(30,41,59) 100%)`
                      : `linear-gradient(to right, ${g} 0%, ${g} ${d}%, rgb(51,65,85) ${d}%, rgb(51,65,85) 100%)`,
                    cursor: A ? 'not-allowed' : 'pointer',
                  },
                }),
                $ && f.jsx('div', { className: ze.lockLimit, style: { left: G } }),
              ],
            }),
            (re = Ji.ui) == null ? void 0 : re.sliderLock,
          ],
        }),
      ],
    });
  },
  nm = ({ label: v, color: d, isSelected: u, onSelect: g }) =>
    f.jsxs('button', {
      type: 'button',
      onClick: g,
      className: `${ze.compactSelection} ${u ? ze.selected : ''}`,
      style: { '--selection-color': d },
      children: [
        f.jsx('span', { className: ze.selectionLabel, children: v }),
        f.jsx('span', {
          className: ze.selectionIndicator,
          style: { borderColor: u ? d : void 0, backgroundColor: u ? d : void 0 },
          children: u && f.jsx(lp, { size: 12, strokeWidth: 3 }),
        }),
      ],
    }),
  rm = '_editPanel_9crrd_3',
  lm = '_expanded_9crrd_11',
  om = '_toggleButton_9crrd_16',
  im = '_buttonContent_9crrd_33',
  sm = '_icon_9crrd_39',
  um = '_title_9crrd_43',
  am = '_modifiedBadge_9crrd_48',
  cm = '_preview_9crrd_56',
  dm = '_chevron_9crrd_62',
  fm = '_content_9crrd_66',
  pm = '_footer_9crrd_71',
  mm = '_footerNote_9crrd_78',
  hm = '_resetButton_9crrd_84',
  vm = '_selectionRow_9crrd_103',
  Ue = {
    editPanel: rm,
    expanded: lm,
    toggleButton: om,
    buttonContent: im,
    icon: sm,
    title: um,
    modifiedBadge: am,
    preview: cm,
    chevron: dm,
    content: fm,
    footer: pm,
    footerNote: mm,
    resetButton: hm,
    selectionRow: vm,
  },
  ym = ({
    title: v,
    icon: d,
    credences: u,
    setCredences: g,
    originalCredences: S,
    configs: E,
    isExpanded: L,
    onToggle: P,
    lockedKey: _,
    setLockedKey: j,
    questionType: O = Bt.DEFAULT,
  }) => {
    const R = S && JSON.stringify(u) !== JSON.stringify(S),
      A = O === Bt.SELECTION,
      $ = (M) => {
        const G = {};
        (E.forEach((J) => {
          G[J.key] = J.key === M ? 100 : 0;
        }),
          g(G));
      },
      ee = (M) => {
        (M.stopPropagation(), g({ ...S }));
      };
    return f.jsxs('div', {
      className: `${Ue.editPanel} ${L ? Ue.expanded : ''}`,
      children: [
        f.jsxs('button', {
          onClick: P,
          className: Ue.toggleButton,
          children: [
            f.jsxs('div', {
              className: Ue.buttonContent,
              children: [
                f.jsx('span', { className: Ue.icon, children: d }),
                f.jsx('span', { className: Ue.title, children: v }),
                R &&
                  f.jsx('span', {
                    className: Ue.modifiedBadge,
                    children: Ee.editPanel.modifiedBadge,
                  }),
                !L &&
                  f.jsx('span', {
                    className: Ue.preview,
                    children: E.map((M) => `${M.short}:${u[M.key]}%`).join(' '),
                  }),
              ],
            }),
            f.jsx('span', {
              className: Ue.chevron,
              children: L ? f.jsx(ip, { size: 16 }) : f.jsx(op, { size: 16 }),
            }),
          ],
        }),
        L &&
          f.jsx('div', {
            className: Ue.content,
            children: A
              ? f.jsxs(f.Fragment, {
                  children: [
                    f.jsx('div', {
                      className: Ue.selectionRow,
                      children: E.map((M) =>
                        f.jsx(
                          nm,
                          {
                            label: M.label,
                            color: M.color,
                            isSelected: u[M.key] === 100,
                            onSelect: () => $(M.key),
                          },
                          M.key
                        )
                      ),
                    }),
                    f.jsxs('div', {
                      className: Ue.footer,
                      children: [
                        f.jsx('span', {
                          className: Ue.footerNote,
                          children: Ee.editPanel.selectionNote || 'Pick one option',
                        }),
                        R &&
                          f.jsxs('button', {
                            onClick: ee,
                            className: Ue.resetButton,
                            children: [f.jsx(Ki, { size: 10 }), ' ', Ee.editPanel.resetButton],
                          }),
                      ],
                    }),
                  ],
                })
              : f.jsxs(f.Fragment, {
                  children: [
                    E.map((M) =>
                      f.jsx(
                        tm,
                        {
                          label: M.label,
                          value: u[M.key],
                          onChange: (G, J, pe, fe) => {
                            const re = uc(M.key, G, u, J, fe);
                            g(pe ? ac(re) : re);
                          },
                          color: M.color,
                          credences: u,
                          sliderKey: M.key,
                          lockedKey: _,
                          setLockedKey: j,
                        },
                        M.key
                      )
                    ),
                    f.jsxs('div', {
                      className: Ue.footer,
                      children: [
                        f.jsx('span', {
                          className: Ue.footerNote,
                          children: Ee.editPanel.sliderNote,
                        }),
                        R &&
                          f.jsxs('button', {
                            onClick: ee,
                            className: Ue.resetButton,
                            children: [f.jsx(Ki, { size: 10 }), ' ', Ee.editPanel.resetButton],
                          }),
                      ],
                    }),
                  ],
                }),
          }),
      ],
    });
  },
  gm = '_resultsContainer_13dv0_3',
  _m = '_inner_13dv0_11',
  wm = '_header_13dv0_16',
  Sm = '_title_13dv0_21',
  km = '_modifiedIndicator_13dv0_27',
  xm = '_resultsGrid_13dv0_34',
  Cm = '_comparisonContainer_13dv0_42',
  Em = '_originalResults_13dv0_49',
  Nm = '_newResults_13dv0_50',
  jm = '_slideInLeft_13dv0_1',
  Pm = '_slideInRight_13dv0_1',
  Tm = '_comparisonDivider_13dv0_85',
  Lm = '_dividerLine_13dv0_94',
  Om = '_dividerArrow_13dv0_101',
  Rm = '_compactGrid_13dv0_108',
  zm = '_compactCard_13dv0_114',
  Im = '_cardHeader_13dv0_118',
  Mm = '_cardIcon_13dv0_122',
  Dm = '_cardTitle_13dv0_128',
  Fm = '_resultCard_13dv0_132',
  Bm = '_maxEV_13dv0_156',
  Am = '_parliament_13dv0_160',
  Um = '_cardSubtitle_13dv0_171',
  $m = '_cardFooter_13dv0_177',
  Vm = '_adjustPanel_13dv0_185',
  Qm = '_adjustHeader_13dv0_193',
  Hm = '_adjustTitle_13dv0_200',
  Wm = '_resetAllButton_13dv0_206',
  Gm = '_panelList_13dv0_223',
  qm = '_backButtonContainer_13dv0_229',
  Ym = '_backButton_13dv0_229',
  Km = '_resetButton_13dv0_254',
  Pe = {
    resultsContainer: gm,
    inner: _m,
    header: wm,
    title: Sm,
    modifiedIndicator: km,
    resultsGrid: xm,
    comparisonContainer: Cm,
    originalResults: Em,
    newResults: Nm,
    slideInLeft: jm,
    slideInRight: Pm,
    comparisonDivider: Tm,
    dividerLine: Lm,
    dividerArrow: Om,
    compactGrid: Rm,
    compactCard: zm,
    cardHeader: Im,
    cardIcon: Mm,
    cardTitle: Dm,
    resultCard: Fm,
    maxEV: Bm,
    parliament: Am,
    cardSubtitle: Um,
    cardFooter: $m,
    adjustPanel: Vm,
    adjustHeader: Qm,
    adjustTitle: Hm,
    resetAllButton: Wm,
    panelList: Gm,
    backButtonContainer: qm,
    backButton: Ym,
    resetButton: Km,
  },
  Xm = () => {
    var re;
    const {
        questionsConfig: v,
        causesConfig: d,
        stateMap: u,
        expandedPanel: g,
        setExpandedPanel: S,
        calculationResults: E,
        originalCalculationResults: L,
        hasChanged: P,
        resetToOriginal: _,
        resetQuiz: j,
        goBack: O,
      } = Yl(),
      { maxEV: R, parliament: A, mergedFavorites: $, maximin: ee } = E,
      M = Object.entries(d),
      G = (Z) =>
        Z.options.map((q) => ({
          key: q.key,
          label: q.panelLabel,
          short: q.panelShort,
          color: q.color,
        })),
      J = (Z, q = null, me = !1) =>
        M.map(([ae, Le]) =>
          f.jsx(
            em,
            {
              name: Le.name,
              percentage: Z[ae],
              originalPercentage: q == null ? void 0 : q[ae],
              color: Le.color,
              hasChanged: !me && P,
              simpleMode: me,
            },
            ae
          )
        ),
      pe = (Z, q, me = null, ae = null, Le = !1) => {
        const xe = Ee.results.methods[Z],
          at = Z === 'mergedFavorites' ? 'merged' : Z;
        return f.jsxs('div', {
          className: `${Pe.resultCard} ${Le ? Pe.compactCard : ''}`,
          children: [
            f.jsxs('div', {
              className: Pe.cardHeader,
              children: [
                f.jsx('div', { className: `${Pe.cardIcon} ${Pe[at]}`, children: xe.icon }),
                f.jsxs('div', {
                  children: [
                    f.jsx('h3', { className: Pe.cardTitle, children: xe.title }),
                    !Le && f.jsx('p', { className: Pe.cardSubtitle, children: xe.subtitle }),
                  ],
                }),
              ],
            }),
            J(q, ae, Le),
            !Le &&
              f.jsx('div', {
                className: Pe.cardFooter,
                children: me
                  ? `${xe.footerLabel} ${M.map(([Ge, Ie]) => `${Ie.name.slice(0, 2)} ${me[Ge].toFixed(0)}`).join(' · ')}`
                  : xe.footerText,
              }),
          ],
        });
      },
      fe = () =>
        f.jsxs('div', {
          className: Pe.resultsGrid,
          children: [
            pe('maxEV', R, R.evs, L == null ? void 0 : L.maxEV),
            pe('mergedFavorites', $, null, L == null ? void 0 : L.mergedFavorites),
          ],
        });
    return f.jsx('div', {
      className: Pe.resultsContainer,
      children: f.jsxs('div', {
        className: Pe.inner,
        children: [
          f.jsx('div', {
            className: Pe.header,
            children: f.jsxs('h1', {
              className: Pe.title,
              children: [
                Ee.results.heading,
                P &&
                  f.jsx('span', {
                    className: Pe.modifiedIndicator,
                    children: Ee.results.modifiedIndicator,
                  }),
              ],
            }),
          }),
          fe(),
          f.jsxs('div', {
            className: Pe.adjustPanel,
            children: [
              f.jsxs('div', {
                className: Pe.adjustHeader,
                children: [
                  f.jsx('span', {
                    className: Pe.adjustTitle,
                    children: Ee.results.adjustCredencesHeading,
                  }),
                  P &&
                    f.jsxs('button', {
                      onClick: _,
                      className: Pe.resetAllButton,
                      children: [f.jsx(Ki, { size: 10 }), ' ', Ee.results.resetAllButton],
                    }),
                ],
              }),
              f.jsx('div', {
                className: Pe.panelList,
                children: v.map((Z) => {
                  const q = u[Z.id];
                  return q
                    ? f.jsx(
                        ym,
                        {
                          title: Z.editPanelTitle,
                          icon: Z.emoji,
                          credences: q.credences,
                          setCredences: q.setCredences,
                          originalCredences: q.originalCredences,
                          configs: G(Z),
                          isExpanded: g === Z.id,
                          onToggle: () => S(g === Z.id ? null : Z.id),
                          lockedKey: q.lockedKey,
                          setLockedKey: q.setLockedKey,
                          questionType: Z.type,
                        },
                        Z.id
                      )
                    : null;
                }),
              }),
            ],
          }),
          f.jsxs('div', {
            className: Pe.backButtonContainer,
            children: [
              f.jsx('button', {
                onClick: O,
                className: Pe.backButton,
                children: Ee.navigation.backToQuiz,
              }),
              (re = Ji.ui) == null ? void 0 : re.resetButton,
            ],
          }),
        ],
      }),
    });
  },
  Zm = '_debugButton_1fvy0_4',
  Jm = '_overlay_1fvy0_22',
  bm = '_modal_1fvy0_35',
  eh = '_header_1fvy0_46',
  th = '_closeButton_1fvy0_60',
  nh = '_content_1fvy0_73',
  rh = '_section_1fvy0_79',
  lh = '_causeBlock_1fvy0_93',
  oh = '_fieldRow_1fvy0_106',
  ih = '_checkboxRow_1fvy0_130',
  sh = '_multiplierGroup_1fvy0_149',
  uh = '_dimInfo_1fvy0_159',
  ah = '_multiplierRow_1fvy0_166',
  ch = '_footer_1fvy0_190',
  dh = '_saveButton_1fvy0_197',
  We = {
    debugButton: Zm,
    overlay: Jm,
    modal: bm,
    header: eh,
    closeButton: th,
    content: nh,
    section: rh,
    causeBlock: lh,
    fieldRow: oh,
    checkboxRow: ih,
    multiplierGroup: sh,
    dimInfo: uh,
    multiplierRow: ah,
    footer: ch,
    saveButton: dh,
  },
  { causes: fh } = Zi,
  ph = ic(!0),
  mh = ({ onConfigChange: v }) => {
    const [d, u] = X.useState(!1),
      [g, S] = X.useState({
        causes: JSON.parse(JSON.stringify(fh)),
        dimensions: JSON.parse(JSON.stringify(ph)),
      }),
      E = (_, j, O) => {
        S((R) => ({
          ...R,
          causes: {
            ...R.causes,
            [_]: {
              ...R.causes[_],
              [j]: j === 'name' || j === 'color' || typeof O == 'boolean' ? O : Number(O),
            },
          },
        }));
      },
      L = (_, j, O) => {
        S((R) => ({
          ...R,
          dimensions: {
            ...R.dimensions,
            [_]: { ...R.dimensions[_], options: { ...R.dimensions[_].options, [j]: Number(O) } },
          },
        }));
      },
      P = () => {
        (v(g), u(!1));
      };
    return f.jsxs(f.Fragment, {
      children: [
        f.jsx('button', {
          className: We.debugButton,
          onClick: () => u(!0),
          title: 'Debug Settings',
          children: 'Settings',
        }),
        d &&
          f.jsx('div', {
            className: We.overlay,
            onClick: () => u(!1),
            children: f.jsxs('div', {
              className: We.modal,
              onClick: (_) => _.stopPropagation(),
              children: [
                f.jsxs('div', {
                  className: We.header,
                  children: [
                    f.jsx('h2', { children: 'Calculation Debugger' }),
                    f.jsx('button', {
                      className: We.closeButton,
                      onClick: () => u(!1),
                      children: 'x',
                    }),
                  ],
                }),
                f.jsxs('div', {
                  className: We.content,
                  children: [
                    f.jsxs('section', {
                      className: We.section,
                      children: [
                        f.jsx('h3', { children: 'CAUSES' }),
                        Object.entries(g.causes).map(([_, j]) =>
                          f.jsxs(
                            'div',
                            {
                              className: We.causeBlock,
                              children: [
                                f.jsx('h4', { children: j.name }),
                                f.jsxs('div', {
                                  className: We.fieldRow,
                                  children: [
                                    f.jsxs('label', {
                                      children: [
                                        'Points:',
                                        f.jsx('input', {
                                          type: 'number',
                                          value: j.points,
                                          onChange: (O) => E(_, 'points', O.target.value),
                                        }),
                                      ],
                                    }),
                                    f.jsxs('label', {
                                      children: [
                                        'Scale Factor:',
                                        f.jsx('input', {
                                          type: 'number',
                                          value: j.scaleFactor,
                                          onChange: (O) => E(_, 'scaleFactor', O.target.value),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                f.jsxs('div', {
                                  className: We.checkboxRow,
                                  children: [
                                    f.jsxs('label', {
                                      children: [
                                        f.jsx('input', {
                                          type: 'checkbox',
                                          checked: j.helpsAnimals,
                                          onChange: (O) => E(_, 'helpsAnimals', O.target.checked),
                                        }),
                                        'Helps Animals',
                                      ],
                                    }),
                                    f.jsxs('label', {
                                      children: [
                                        f.jsx('input', {
                                          type: 'checkbox',
                                          checked: j.helpsFutureHumans,
                                          onChange: (O) =>
                                            E(_, 'helpsFutureHumans', O.target.checked),
                                        }),
                                        'Helps Future Humans',
                                      ],
                                    }),
                                    f.jsxs('label', {
                                      children: [
                                        f.jsx('input', {
                                          type: 'checkbox',
                                          checked: j.isSpeculative,
                                          onChange: (O) => E(_, 'isSpeculative', O.target.checked),
                                        }),
                                        'Is Speculative',
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            _
                          )
                        ),
                      ],
                    }),
                    f.jsxs('section', {
                      className: We.section,
                      children: [
                        f.jsx('h3', { children: 'DIMENSIONS (from questions)' }),
                        Object.entries(g.dimensions).map(([_, j]) =>
                          f.jsxs(
                            'div',
                            {
                              className: We.multiplierGroup,
                              children: [
                                f.jsx('h4', { children: j.name }),
                                f.jsx('p', {
                                  className: We.dimInfo,
                                  children:
                                    j.applyAs === 'multiplier'
                                      ? `Multiplier when: ${j.appliesWhen}`
                                      : `Exponent on: ${j.appliesTo}`,
                                }),
                                f.jsx('div', {
                                  className: We.multiplierRow,
                                  children: Object.entries(j.options).map(([O, R]) =>
                                    f.jsxs(
                                      'label',
                                      {
                                        children: [
                                          O,
                                          ':',
                                          f.jsx('input', {
                                            type: 'number',
                                            step: j.applyAs === 'exponent' ? '0.1' : '0.01',
                                            value: R,
                                            onChange: (A) => L(_, O, A.target.value),
                                          }),
                                        ],
                                      },
                                      O
                                    )
                                  ),
                                }),
                              ],
                            },
                            _
                          )
                        ),
                      ],
                    }),
                  ],
                }),
                f.jsx('div', {
                  className: We.footer,
                  children: f.jsx('button', {
                    className: We.saveButton,
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
  hh = () => {
    const { currentStep: v, currentQuestion: d, setDebugConfig: u } = Yl();
    let g = null;
    return (
      v === 'welcome'
        ? (g = f.jsx(bf, {}))
        : v === 'results'
          ? (g = f.jsx(Xm, {}))
          : d && (g = f.jsx($p, {})),
      f.jsxs(f.Fragment, { children: [g, f.jsx(mh, { onConfigChange: u })] })
    );
  };
function vh() {
  return f.jsx(Bf, { children: f.jsx(hh, {}) });
}
wf.createRoot(document.getElementById('root')).render(
  f.jsx(X.StrictMode, { children: f.jsx(vh, {}) })
);
