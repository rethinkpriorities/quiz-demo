(function () {
  const a = document.createElement('link').relList;
  if (a && a.supports && a.supports('modulepreload')) return;
  for (const C of document.querySelectorAll('link[rel="modulepreload"]')) S(C);
  new MutationObserver((C) => {
    for (const E of C)
      if (E.type === 'childList')
        for (const T of E.addedNodes) T.tagName === 'LINK' && T.rel === 'modulepreload' && S(T);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(C) {
    const E = {};
    return (
      C.integrity && (E.integrity = C.integrity),
      C.referrerPolicy && (E.referrerPolicy = C.referrerPolicy),
      C.crossOrigin === 'use-credentials'
        ? (E.credentials = 'include')
        : C.crossOrigin === 'anonymous'
          ? (E.credentials = 'omit')
          : (E.credentials = 'same-origin'),
      E
    );
  }
  function S(C) {
    if (C.ep) return;
    C.ep = !0;
    const E = s(C);
    fetch(C.href, E);
  }
})();
function Tf(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, 'default') ? c.default : c;
}
var Gi = { exports: {} },
  Rr = {},
  qi = { exports: {} },
  oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tc;
function Lf() {
  if (tc) return oe;
  tc = 1;
  var c = Symbol.for('react.element'),
    a = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    S = Symbol.for('react.strict_mode'),
    C = Symbol.for('react.profiler'),
    E = Symbol.for('react.provider'),
    T = Symbol.for('react.context'),
    x = Symbol.for('react.forward_ref'),
    m = Symbol.for('react.suspense'),
    y = Symbol.for('react.memo'),
    k = Symbol.for('react.lazy'),
    _ = Symbol.iterator;
  function N(h) {
    return h === null || typeof h != 'object'
      ? null
      : ((h = (_ && h[_]) || h['@@iterator']), typeof h == 'function' ? h : null);
  }
  var H = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ee = Object.assign,
    W = {};
  function B(h, P, re) {
    ((this.props = h), (this.context = P), (this.refs = W), (this.updater = re || H));
  }
  ((B.prototype.isReactComponent = {}),
    (B.prototype.setState = function (h, P) {
      if (typeof h != 'object' && typeof h != 'function' && h != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, h, P, 'setState');
    }),
    (B.prototype.forceUpdate = function (h) {
      this.updater.enqueueForceUpdate(this, h, 'forceUpdate');
    }));
  function K() {}
  K.prototype = B.prototype;
  function le(h, P, re) {
    ((this.props = h), (this.context = P), (this.refs = W), (this.updater = re || H));
  }
  var ne = (le.prototype = new K());
  ((ne.constructor = le), ee(ne, B.prototype), (ne.isPureReactComponent = !0));
  var X = Array.isArray,
    Q = Object.prototype.hasOwnProperty,
    j = { current: null },
    U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(h, P, re) {
    var ie,
      ue = {},
      ae = null,
      he = null;
    if (P != null)
      for (ie in (P.ref !== void 0 && (he = P.ref), P.key !== void 0 && (ae = '' + P.key), P))
        Q.call(P, ie) && !U.hasOwnProperty(ie) && (ue[ie] = P[ie]);
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
  function Ct(h) {
    var P = { '=': '=0', ':': '=2' };
    return (
      '$' +
      h.replace(/[=:]/g, function (re) {
        return P[re];
      })
    );
  }
  var Ge = /\/+/g;
  function Ae(h, P) {
    return typeof h == 'object' && h !== null && h.key != null ? Ct('' + h.key) : P.toString(36);
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
        (h = ie === '' ? '.' + Ae(he, 0) : ie),
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
        var we = ie + Ae(ae, fe);
        he += Ye(ae, P, re, we, ue);
      }
    else if (((we = N(h)), typeof we == 'function'))
      for (h = we.call(h), fe = 0; !(ae = h.next()).done; )
        ((ae = ae.value), (we = ie + Ae(ae, fe++)), (he += Ye(ae, P, re, we, ue)));
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
  function Be(h) {
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
    (oe.Component = B),
    (oe.Fragment = s),
    (oe.Profiler = C),
    (oe.PureComponent = le),
    (oe.StrictMode = S),
    (oe.Suspense = m),
    (oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y),
    (oe.act = M),
    (oe.cloneElement = function (h, P, re) {
      if (h == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + h + '.'
        );
      var ie = ee({}, h.props),
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
          Q.call(P, we) &&
            !U.hasOwnProperty(we) &&
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
          $$typeof: T,
          _currentValue: h,
          _currentValue2: h,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (h.Provider = { $$typeof: E, _context: h }),
        (h.Consumer = h)
      );
    }),
    (oe.createElement = F),
    (oe.createFactory = function (h) {
      var P = F.bind(null, h);
      return ((P.type = h), P);
    }),
    (oe.createRef = function () {
      return { current: null };
    }),
    (oe.forwardRef = function (h) {
      return { $$typeof: x, render: h };
    }),
    (oe.isValidElement = me),
    (oe.lazy = function (h) {
      return { $$typeof: k, _payload: { _status: -1, _result: h }, _init: Be };
    }),
    (oe.memo = function (h, P) {
      return { $$typeof: y, type: h, compare: P === void 0 ? null : P };
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
var nc;
function ns() {
  return (nc || ((nc = 1), (qi.exports = Lf())), qi.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rc;
function Pf() {
  if (rc) return Rr;
  rc = 1;
  var c = ns(),
    a = Symbol.for('react.element'),
    s = Symbol.for('react.fragment'),
    S = Object.prototype.hasOwnProperty,
    C = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(x, m, y) {
    var k,
      _ = {},
      N = null,
      H = null;
    (y !== void 0 && (N = '' + y),
      m.key !== void 0 && (N = '' + m.key),
      m.ref !== void 0 && (H = m.ref));
    for (k in m) S.call(m, k) && !E.hasOwnProperty(k) && (_[k] = m[k]);
    if (x && x.defaultProps) for (k in ((m = x.defaultProps), m)) _[k] === void 0 && (_[k] = m[k]);
    return { $$typeof: a, type: x, key: N, ref: H, props: _, _owner: C.current };
  }
  return ((Rr.Fragment = s), (Rr.jsx = T), (Rr.jsxs = T), Rr);
}
var lc;
function Of() {
  return (lc || ((lc = 1), (Gi.exports = Pf())), Gi.exports);
}
var f = Of(),
  b = ns(),
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
 */ var oc;
function Rf() {
  return (
    oc ||
      ((oc = 1),
      (function (c) {
        function a(L, Y) {
          var M = L.length;
          L.push(Y);
          e: for (; 0 < M; ) {
            var h = (M - 1) >>> 1,
              P = L[h];
            if (0 < C(P, Y)) ((L[h] = Y), (L[M] = P), (M = h));
            else break e;
          }
        }
        function s(L) {
          return L.length === 0 ? null : L[0];
        }
        function S(L) {
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
              if (0 > C(ue, M))
                ae < P && 0 > C(he, ue)
                  ? ((L[h] = he), (L[ae] = M), (h = ae))
                  : ((L[h] = ue), (L[ie] = M), (h = ie));
              else if (ae < P && 0 > C(he, M)) ((L[h] = he), (L[ae] = M), (h = ae));
              else break e;
            }
          }
          return Y;
        }
        function C(L, Y) {
          var M = L.sortIndex - Y.sortIndex;
          return M !== 0 ? M : L.id - Y.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var E = performance;
          c.unstable_now = function () {
            return E.now();
          };
        } else {
          var T = Date,
            x = T.now();
          c.unstable_now = function () {
            return T.now() - x;
          };
        }
        var m = [],
          y = [],
          k = 1,
          _ = null,
          N = 3,
          H = !1,
          ee = !1,
          W = !1,
          B = typeof setTimeout == 'function' ? setTimeout : null,
          K = typeof clearTimeout == 'function' ? clearTimeout : null,
          le = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function ne(L) {
          for (var Y = s(y); Y !== null; ) {
            if (Y.callback === null) S(y);
            else if (Y.startTime <= L) (S(y), (Y.sortIndex = Y.expirationTime), a(m, Y));
            else break;
            Y = s(y);
          }
        }
        function X(L) {
          if (((W = !1), ne(L), !ee))
            if (s(m) !== null) ((ee = !0), Be(Q));
            else {
              var Y = s(y);
              Y !== null && D(X, Y.startTime - L);
            }
        }
        function Q(L, Y) {
          ((ee = !1), W && ((W = !1), K(F), (F = -1)), (H = !0));
          var M = N;
          try {
            for (ne(Y), _ = s(m); _ !== null && (!(_.expirationTime > Y) || (L && !Ct())); ) {
              var h = _.callback;
              if (typeof h == 'function') {
                ((_.callback = null), (N = _.priorityLevel));
                var P = h(_.expirationTime <= Y);
                ((Y = c.unstable_now()),
                  typeof P == 'function' ? (_.callback = P) : _ === s(m) && S(m),
                  ne(Y));
              } else S(m);
              _ = s(m);
            }
            if (_ !== null) var re = !0;
            else {
              var ie = s(y);
              (ie !== null && D(X, ie.startTime - Y), (re = !1));
            }
            return re;
          } finally {
            ((_ = null), (N = M), (H = !1));
          }
        }
        var j = !1,
          U = null,
          F = -1,
          rt = 5,
          me = -1;
        function Ct() {
          return !(c.unstable_now() - me < rt);
        }
        function Ge() {
          if (U !== null) {
            var L = c.unstable_now();
            me = L;
            var Y = !0;
            try {
              Y = U(!0, L);
            } finally {
              Y ? Ae() : ((j = !1), (U = null));
            }
          } else j = !1;
        }
        var Ae;
        if (typeof le == 'function')
          Ae = function () {
            le(Ge);
          };
        else if (typeof MessageChannel < 'u') {
          var Ye = new MessageChannel(),
            lt = Ye.port2;
          ((Ye.port1.onmessage = Ge),
            (Ae = function () {
              lt.postMessage(null);
            }));
        } else
          Ae = function () {
            B(Ge, 0);
          };
        function Be(L) {
          ((U = L), j || ((j = !0), Ae()));
        }
        function D(L, Y) {
          F = B(function () {
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
            ee || H || ((ee = !0), Be(Q));
          }),
          (c.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (rt = 0 < L ? Math.floor(1e3 / L) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return N;
          }),
          (c.unstable_getFirstCallbackNode = function () {
            return s(m);
          }),
          (c.unstable_next = function (L) {
            switch (N) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = N;
            }
            var M = N;
            N = Y;
            try {
              return L();
            } finally {
              N = M;
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
            var M = N;
            N = L;
            try {
              return Y();
            } finally {
              N = M;
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
                id: k++,
                callback: Y,
                priorityLevel: L,
                startTime: M,
                expirationTime: P,
                sortIndex: -1,
              }),
              M > h
                ? ((L.sortIndex = M),
                  a(y, L),
                  s(m) === null && L === s(y) && (W ? (K(F), (F = -1)) : (W = !0), D(X, M - h)))
                : ((L.sortIndex = P), a(m, L), ee || H || ((ee = !0), Be(Q))),
              L
            );
          }),
          (c.unstable_shouldYield = Ct),
          (c.unstable_wrapCallback = function (L) {
            var Y = N;
            return function () {
              var M = N;
              N = Y;
              try {
                return L.apply(this, arguments);
              } finally {
                N = M;
              }
            };
          }));
      })(Xi)),
    Xi
  );
}
var ic;
function If() {
  return (ic || ((ic = 1), (Yi.exports = Rf())), Yi.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sc;
function zf() {
  if (sc) return tt;
  sc = 1;
  var c = ns(),
    a = If();
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
  var S = new Set(),
    C = {};
  function E(e, t) {
    (T(e, t), T(e + 'Capture', t));
  }
  function T(e, t) {
    for (C[e] = t, e = 0; e < t.length; e++) S.add(t[e]);
  }
  var x = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    m = Object.prototype.hasOwnProperty,
    y =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    k = {},
    _ = {};
  function N(e) {
    return m.call(_, e) ? !0 : m.call(k, e) ? !1 : y.test(e) ? (_[e] = !0) : ((k[e] = !0), !1);
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
  function ee(e, t, n, r) {
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
  function W(e, t, n, r, l, o, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i));
  }
  var B = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      B[e] = new W(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      B[t] = new W(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      B[e] = new W(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        B[e] = new W(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        B[e] = new W(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      B[e] = new W(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      B[e] = new W(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      B[e] = new W(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      B[e] = new W(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var K = /[\-:]([a-z])/g;
  function le(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(K, le);
      B[t] = new W(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(K, le);
        B[t] = new W(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(K, le);
      B[t] = new W(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      B[e] = new W(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (B.xlinkHref = new W('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      B[e] = new W(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function ne(e, t, n, r) {
    var l = B.hasOwnProperty(t) ? B[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (ee(t, n, l, r) && (n = null),
      r || l === null
        ? N(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
    Q = Symbol.for('react.element'),
    j = Symbol.for('react.portal'),
    U = Symbol.for('react.fragment'),
    F = Symbol.for('react.strict_mode'),
    rt = Symbol.for('react.profiler'),
    me = Symbol.for('react.provider'),
    Ct = Symbol.for('react.context'),
    Ge = Symbol.for('react.forward_ref'),
    Ae = Symbol.for('react.suspense'),
    Ye = Symbol.for('react.suspense_list'),
    lt = Symbol.for('react.memo'),
    Be = Symbol.for('react.lazy'),
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
      case U:
        return 'Fragment';
      case j:
        return 'Portal';
      case rt:
        return 'Profiler';
      case F:
        return 'StrictMode';
      case Ae:
        return 'Suspense';
      case Ye:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Ct:
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
        case Be:
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
        return t === F ? 'StrictMode' : 'Mode';
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
  function ss(e) {
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
  function Jl(e, t) {
    var n = t.checked;
    return M({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function us(e, t) {
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
  function as(e, t) {
    ((t = t.checked), t != null && ne(e, 'checked', t, !1));
  }
  function bl(e, t) {
    as(e, t);
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
      ? eo(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && eo(e, t.type, fe(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function cs(e, t, n) {
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
  function to(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return M({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function ds(e, t) {
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
  function fs(e, t) {
    var n = fe(t.value),
      r = fe(t.defaultValue);
    (n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r));
  }
  function ps(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function ms(e) {
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
      ? ms(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var Fr,
    hs = (function (e) {
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
  function vs(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (Yn.hasOwnProperty(e) && Yn[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function ys(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = vs(n, t[n], r);
        (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Rc = M(
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
      if (Rc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
    Cn = null;
  function gs(e) {
    if ((e = yr(e))) {
      if (typeof so != 'function') throw Error(s(280));
      var t = e.stateNode;
      t && ((t = il(t)), so(e.stateNode, e.type, t));
    }
  }
  function ws(e) {
    xn ? (Cn ? Cn.push(e) : (Cn = [e])) : (xn = e);
  }
  function _s() {
    if (xn) {
      var e = xn,
        t = Cn;
      if (((Cn = xn = null), gs(e), t)) for (e = 0; e < t.length; e++) gs(t[e]);
    }
  }
  function Ss(e, t) {
    return e(t);
  }
  function ks() {}
  var uo = !1;
  function xs(e, t, n) {
    if (uo) return e(t, n);
    uo = !0;
    try {
      return Ss(e, t, n);
    } finally {
      ((uo = !1), (xn !== null || Cn !== null) && (ks(), _s()));
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
  var ao = !1;
  if (x)
    try {
      var Zn = {};
      (Object.defineProperty(Zn, 'passive', {
        get: function () {
          ao = !0;
        },
      }),
        window.addEventListener('test', Zn, Zn),
        window.removeEventListener('test', Zn, Zn));
    } catch {
      ao = !1;
    }
  function Ic(e, t, n, r, l, o, i, u, d) {
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
    co = null,
    zc = {
      onError: function (e) {
        ((Jn = !0), (Ar = e));
      },
    };
  function Mc(e, t, n, r, l, o, i, u, d) {
    ((Jn = !1), (Ar = null), Ic.apply(zc, arguments));
  }
  function Dc(e, t, n, r, l, o, i, u, d) {
    if ((Mc.apply(this, arguments), Jn)) {
      if (Jn) {
        var w = Ar;
        ((Jn = !1), (Ar = null));
      } else throw Error(s(198));
      Br || ((Br = !0), (co = w));
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
  function Es(e) {
    if (sn(e) !== e) throw Error(s(188));
  }
  function Fc(e) {
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
          if (o === n) return (Es(l), e);
          if (o === r) return (Es(l), t);
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
  function Ns(e) {
    return ((e = Fc(e)), e !== null ? js(e) : null);
  }
  function js(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = js(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ts = a.unstable_scheduleCallback,
    Ls = a.unstable_cancelCallback,
    Ac = a.unstable_shouldYield,
    Bc = a.unstable_requestPaint,
    Ne = a.unstable_now,
    Uc = a.unstable_getCurrentPriorityLevel,
    fo = a.unstable_ImmediatePriority,
    Ps = a.unstable_UserBlockingPriority,
    Ur = a.unstable_NormalPriority,
    $c = a.unstable_LowPriority,
    Os = a.unstable_IdlePriority,
    $r = null,
    Et = null;
  function Qc(e) {
    if (Et && typeof Et.onCommitFiberRoot == 'function')
      try {
        Et.onCommitFiberRoot($r, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var yt = Math.clz32 ? Math.clz32 : Wc,
    Vc = Math.log,
    Hc = Math.LN2;
  function Wc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Vc(e) / Hc) | 0)) | 0);
  }
  var Qr = 64,
    Vr = 4194304;
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
  function Hr(e, t) {
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
  function Gc(e, t) {
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
  function qc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes;
      0 < o;
    ) {
      var i = 31 - yt(o),
        u = 1 << i,
        d = l[i];
      (d === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[i] = Gc(u, t))
        : d <= t && (e.expiredLanes |= u),
        (o &= ~u));
    }
  }
  function po(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Rs() {
    var e = Qr;
    return ((Qr <<= 1), (Qr & 4194240) === 0 && (Qr = 64), e);
  }
  function mo(e) {
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
  function Kc(e, t) {
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
  var pe = 0;
  function Is(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var zs,
    vo,
    Ms,
    Ds,
    Fs,
    yo = !1,
    Wr = [],
    Ut = null,
    $t = null,
    Qt = null,
    tr = new Map(),
    nr = new Map(),
    Vt = [],
    Yc =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function As(e, t) {
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
        t !== null && ((t = yr(t)), t !== null && vo(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Xc(e, t, n, r, l) {
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
  function Bs(e) {
    var t = un(e.target);
    if (t !== null) {
      var n = sn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Cs(n)), t !== null)) {
            ((e.blockedOn = t),
              Fs(e.priority, function () {
                Ms(n);
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
      var n = wo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((oo = r), n.target.dispatchEvent(r), (oo = null));
      } else return ((t = yr(n)), t !== null && vo(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Us(e, t, n) {
    Gr(e) && n.delete(t);
  }
  function Zc() {
    ((yo = !1),
      Ut !== null && Gr(Ut) && (Ut = null),
      $t !== null && Gr($t) && ($t = null),
      Qt !== null && Gr(Qt) && (Qt = null),
      tr.forEach(Us),
      nr.forEach(Us));
  }
  function lr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      yo || ((yo = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, Zc)));
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
      n < Vt.length;
      n++
    )
      ((r = Vt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); )
      (Bs(n), n.blockedOn === null && Vt.shift());
  }
  var En = X.ReactCurrentBatchConfig,
    qr = !0;
  function Jc(e, t, n, r) {
    var l = pe,
      o = En.transition;
    En.transition = null;
    try {
      ((pe = 1), go(e, t, n, r));
    } finally {
      ((pe = l), (En.transition = o));
    }
  }
  function bc(e, t, n, r) {
    var l = pe,
      o = En.transition;
    En.transition = null;
    try {
      ((pe = 4), go(e, t, n, r));
    } finally {
      ((pe = l), (En.transition = o));
    }
  }
  function go(e, t, n, r) {
    if (qr) {
      var l = wo(e, t, n, r);
      if (l === null) (Do(e, t, r, Kr, n), As(e, r));
      else if (Xc(l, e, t, n, r)) r.stopPropagation();
      else if ((As(e, r), t & 4 && -1 < Yc.indexOf(e))) {
        for (; l !== null; ) {
          var o = yr(l);
          if (
            (o !== null && zs(o), (o = wo(e, t, n, r)), o === null && Do(e, t, r, Kr, n), o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Do(e, t, r, null, n);
    }
  }
  var Kr = null;
  function wo(e, t, n, r) {
    if (((Kr = null), (e = io(r)), (e = un(e)), e !== null))
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
  function $s(e) {
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
        switch (Uc()) {
          case fo:
            return 1;
          case Ps:
            return 4;
          case Ur:
          case $c:
            return 16;
          case Os:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ht = null,
    _o = null,
    Yr = null;
  function Qs() {
    if (Yr) return Yr;
    var e,
      t = _o,
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
    So = it(Nn),
    ir = M({}, Nn, { view: 0, detail: 0 }),
    ed = it(ir),
    ko,
    xo,
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
          : (e !== sr &&
              (sr && e.type === 'mousemove'
                ? ((ko = e.screenX - sr.screenX), (xo = e.screenY - sr.screenY))
                : (xo = ko = 0),
              (sr = e)),
            ko);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : xo;
      },
    }),
    Hs = it(Jr),
    td = M({}, Jr, { dataTransfer: 0 }),
    nd = it(td),
    rd = M({}, ir, { relatedTarget: 0 }),
    Co = it(rd),
    ld = M({}, Nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    od = it(ld),
    id = M({}, Nn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    sd = it(id),
    ud = M({}, Nn, { data: 0 }),
    Ws = it(ud),
    ad = {
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
    cd = {
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
    dd = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function fd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = dd[e]) ? !!t[e] : !1;
  }
  function Eo() {
    return fd;
  }
  var pd = M({}, ir, {
      key: function (e) {
        if (e.key) {
          var t = ad[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Xr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? cd[e.keyCode] || 'Unidentified'
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
    md = it(pd),
    hd = M({}, Jr, {
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
    Gs = it(hd),
    vd = M({}, ir, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Eo,
    }),
    yd = it(vd),
    gd = M({}, Nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    wd = it(gd),
    _d = M({}, Jr, {
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
    Sd = it(_d),
    kd = [9, 13, 27, 32],
    No = x && 'CompositionEvent' in window,
    ur = null;
  x && 'documentMode' in document && (ur = document.documentMode);
  var xd = x && 'TextEvent' in window && !ur,
    qs = x && (!No || (ur && 8 < ur && 11 >= ur)),
    Ks = ' ',
    Ys = !1;
  function Xs(e, t) {
    switch (e) {
      case 'keyup':
        return kd.indexOf(t.keyCode) !== -1;
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
  function Zs(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var jn = !1;
  function Cd(e, t) {
    switch (e) {
      case 'compositionend':
        return Zs(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Ys = !0), Ks);
      case 'textInput':
        return ((e = t.data), e === Ks && Ys ? null : e);
      default:
        return null;
    }
  }
  function Ed(e, t) {
    if (jn)
      return e === 'compositionend' || (!No && Xs(e, t))
        ? ((e = Qs()), (Yr = _o = Ht = null), (jn = !1), e)
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
        return qs && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Nd = {
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
  function Js(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Nd[e.type] : t === 'textarea';
  }
  function bs(e, t, n, r) {
    (ws(r),
      (t = rl(t, 'onChange')),
      0 < t.length &&
        ((n = new So('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
  }
  var ar = null,
    cr = null;
  function jd(e) {
    yu(e, 0);
  }
  function br(e) {
    var t = Rn(e);
    if (ss(t)) return e;
  }
  function Td(e, t) {
    if (e === 'change') return t;
  }
  var eu = !1;
  if (x) {
    var jo;
    if (x) {
      var To = 'oninput' in document;
      if (!To) {
        var tu = document.createElement('div');
        (tu.setAttribute('oninput', 'return;'), (To = typeof tu.oninput == 'function'));
      }
      jo = To;
    } else jo = !1;
    eu = jo && (!document.documentMode || 9 < document.documentMode);
  }
  function nu() {
    ar && (ar.detachEvent('onpropertychange', ru), (cr = ar = null));
  }
  function ru(e) {
    if (e.propertyName === 'value' && br(cr)) {
      var t = [];
      (bs(t, cr, e, io(e)), xs(jd, t));
    }
  }
  function Ld(e, t, n) {
    e === 'focusin'
      ? (nu(), (ar = t), (cr = n), ar.attachEvent('onpropertychange', ru))
      : e === 'focusout' && nu();
  }
  function Pd(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return br(cr);
  }
  function Od(e, t) {
    if (e === 'click') return br(t);
  }
  function Rd(e, t) {
    if (e === 'input' || e === 'change') return br(t);
  }
  function Id(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var gt = typeof Object.is == 'function' ? Object.is : Id;
  function dr(e, t) {
    if (gt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!m.call(t, l) || !gt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function lu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ou(e, t) {
    var n = lu(e);
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
      n = lu(n);
    }
  }
  function iu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? iu(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function su() {
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
  function Lo(e) {
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
  function zd(e) {
    var t = su(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && iu(n.ownerDocument.documentElement, n)) {
      if (r !== null && Lo(n)) {
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
            (l = ou(n, o)));
          var i = ou(n, r);
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
  var Md = x && 'documentMode' in document && 11 >= document.documentMode,
    Tn = null,
    Po = null,
    fr = null,
    Oo = !1;
  function uu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Oo ||
      Tn == null ||
      Tn !== Dr(r) ||
      ((r = Tn),
      'selectionStart' in r && Lo(r)
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
        (r = rl(Po, 'onSelect')),
        0 < r.length &&
          ((t = new So('onSelect', 'select', null, t, n)),
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
    Ro = {},
    au = {};
  x &&
    ((au = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Ln.animationend.animation,
      delete Ln.animationiteration.animation,
      delete Ln.animationstart.animation),
    'TransitionEvent' in window || delete Ln.transitionend.transition);
  function tl(e) {
    if (Ro[e]) return Ro[e];
    if (!Ln[e]) return e;
    var t = Ln[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in au) return (Ro[e] = t[n]);
    return e;
  }
  var cu = tl('animationend'),
    du = tl('animationiteration'),
    fu = tl('animationstart'),
    pu = tl('transitionend'),
    mu = new Map(),
    hu =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Wt(e, t) {
    (mu.set(e, t), E(t, [e]));
  }
  for (var Io = 0; Io < hu.length; Io++) {
    var zo = hu[Io],
      Dd = zo.toLowerCase(),
      Fd = zo[0].toUpperCase() + zo.slice(1);
    Wt(Dd, 'on' + Fd);
  }
  (Wt(cu, 'onAnimationEnd'),
    Wt(du, 'onAnimationIteration'),
    Wt(fu, 'onAnimationStart'),
    Wt('dblclick', 'onDoubleClick'),
    Wt('focusin', 'onFocus'),
    Wt('focusout', 'onBlur'),
    Wt(pu, 'onTransitionEnd'),
    T('onMouseEnter', ['mouseout', 'mouseover']),
    T('onMouseLeave', ['mouseout', 'mouseover']),
    T('onPointerEnter', ['pointerout', 'pointerover']),
    T('onPointerLeave', ['pointerout', 'pointerover']),
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
  var pr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Ad = new Set('cancel close invalid load scroll toggle'.split(' ').concat(pr));
  function vu(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n), Dc(r, t, void 0, e), (e.currentTarget = null));
  }
  function yu(e, t) {
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
            (vu(l, u, w), (o = d));
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
            (vu(l, u, w), (o = d));
          }
      }
    }
    if (Br) throw ((e = co), (Br = !1), (co = null), e);
  }
  function ye(e, t) {
    var n = t[Qo];
    n === void 0 && (n = t[Qo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (gu(t, e, 2, !1), n.add(r));
  }
  function Mo(e, t, n) {
    var r = 0;
    (t && (r |= 4), gu(n, e, r, t));
  }
  var nl = '_reactListening' + Math.random().toString(36).slice(2);
  function mr(e) {
    if (!e[nl]) {
      ((e[nl] = !0),
        S.forEach(function (n) {
          n !== 'selectionchange' && (Ad.has(n) || Mo(n, !1, e), Mo(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[nl] || ((t[nl] = !0), Mo('selectionchange', !1, t));
    }
  }
  function gu(e, t, n, r) {
    switch ($s(t)) {
      case 1:
        var l = Jc;
        break;
      case 4:
        l = bc;
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
    xs(function () {
      var w = o,
        R = io(n),
        I = [];
      e: {
        var O = mu.get(e);
        if (O !== void 0) {
          var A = So,
            V = e;
          switch (e) {
            case 'keypress':
              if (Xr(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              A = md;
              break;
            case 'focusin':
              ((V = 'focus'), (A = Co));
              break;
            case 'focusout':
              ((V = 'blur'), (A = Co));
              break;
            case 'beforeblur':
            case 'afterblur':
              A = Co;
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
              A = Hs;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              A = nd;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              A = yd;
              break;
            case cu:
            case du:
            case fu:
              A = od;
              break;
            case pu:
              A = wd;
              break;
            case 'scroll':
              A = ed;
              break;
            case 'wheel':
              A = Sd;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              A = sd;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              A = Gs;
          }
          var G = (t & 4) !== 0,
            je = !G && e === 'scroll',
            v = G ? (O !== null ? O + 'Capture' : null) : O;
          G = [];
          for (var p = w, g; p !== null; ) {
            g = p;
            var z = g.stateNode;
            if (
              (g.tag === 5 &&
                z !== null &&
                ((g = z), v !== null && ((z = Xn(p, v)), z != null && G.push(hr(p, z, g)))),
              je)
            )
              break;
            p = p.return;
          }
          0 < G.length && ((O = new A(O, V, null, n, R)), I.push({ event: O, listeners: G }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((O = e === 'mouseover' || e === 'pointerover'),
            (A = e === 'mouseout' || e === 'pointerout'),
            O && n !== oo && (V = n.relatedTarget || n.fromElement) && (un(V) || V[Pt]))
          )
            break e;
          if (
            (A || O) &&
            ((O =
              R.window === R
                ? R
                : (O = R.ownerDocument)
                  ? O.defaultView || O.parentWindow
                  : window),
            A
              ? ((V = n.relatedTarget || n.toElement),
                (A = w),
                (V = V ? un(V) : null),
                V !== null &&
                  ((je = sn(V)), V !== je || (V.tag !== 5 && V.tag !== 6)) &&
                  (V = null))
              : ((A = null), (V = w)),
            A !== V)
          ) {
            if (
              ((G = Hs),
              (z = 'onMouseLeave'),
              (v = 'onMouseEnter'),
              (p = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((G = Gs), (z = 'onPointerLeave'), (v = 'onPointerEnter'), (p = 'pointer')),
              (je = A == null ? O : Rn(A)),
              (g = V == null ? O : Rn(V)),
              (O = new G(z, p + 'leave', A, n, R)),
              (O.target = je),
              (O.relatedTarget = g),
              (z = null),
              un(R) === w &&
                ((G = new G(v, p + 'enter', V, n, R)),
                (G.target = g),
                (G.relatedTarget = je),
                (z = G)),
              (je = z),
              A && V)
            )
              t: {
                for (G = A, v = V, p = 0, g = G; g; g = Pn(g)) p++;
                for (g = 0, z = v; z; z = Pn(z)) g++;
                for (; 0 < p - g; ) ((G = Pn(G)), p--);
                for (; 0 < g - p; ) ((v = Pn(v)), g--);
                for (; p--; ) {
                  if (G === v || (v !== null && G === v.alternate)) break t;
                  ((G = Pn(G)), (v = Pn(v)));
                }
                G = null;
              }
            else G = null;
            (A !== null && wu(I, O, A, G, !1), V !== null && je !== null && wu(I, je, V, G, !0));
          }
        }
        e: {
          if (
            ((O = w ? Rn(w) : window),
            (A = O.nodeName && O.nodeName.toLowerCase()),
            A === 'select' || (A === 'input' && O.type === 'file'))
          )
            var q = Td;
          else if (Js(O))
            if (eu) q = Rd;
            else {
              q = Pd;
              var Z = Ld;
            }
          else
            (A = O.nodeName) &&
              A.toLowerCase() === 'input' &&
              (O.type === 'checkbox' || O.type === 'radio') &&
              (q = Od);
          if (q && (q = q(e, w))) {
            bs(I, q, n, R);
            break e;
          }
          (Z && Z(e, O, w),
            e === 'focusout' &&
              (Z = O._wrapperState) &&
              Z.controlled &&
              O.type === 'number' &&
              eo(O, 'number', O.value));
        }
        switch (((Z = w ? Rn(w) : window), e)) {
          case 'focusin':
            (Js(Z) || Z.contentEditable === 'true') && ((Tn = Z), (Po = w), (fr = null));
            break;
          case 'focusout':
            fr = Po = Tn = null;
            break;
          case 'mousedown':
            Oo = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Oo = !1), uu(I, n, R));
            break;
          case 'selectionchange':
            if (Md) break;
          case 'keydown':
          case 'keyup':
            uu(I, n, R);
        }
        var J;
        if (No)
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
            ? Xs(e, n) && (te = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (te = 'onCompositionStart');
        (te &&
          (qs &&
            n.locale !== 'ko' &&
            (jn || te !== 'onCompositionStart'
              ? te === 'onCompositionEnd' && jn && (J = Qs())
              : ((Ht = R), (_o = 'value' in Ht ? Ht.value : Ht.textContent), (jn = !0))),
          (Z = rl(w, te)),
          0 < Z.length &&
            ((te = new Ws(te, e, null, n, R)),
            I.push({ event: te, listeners: Z }),
            J ? (te.data = J) : ((J = Zs(n)), J !== null && (te.data = J)))),
          (J = xd ? Cd(e, n) : Ed(e, n)) &&
            ((w = rl(w, 'onBeforeInput')),
            0 < w.length &&
              ((R = new Ws('onBeforeInput', 'beforeinput', null, n, R)),
              I.push({ event: R, listeners: w }),
              (R.data = J))));
      }
      yu(I, t);
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
  function wu(e, t, n, r, l) {
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
  var Bd = /\r\n?/g,
    Ud = /\u0000|\uFFFD/g;
  function _u(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Bd,
        `
`
      )
      .replace(Ud, '');
  }
  function ll(e, t, n) {
    if (((t = _u(t)), _u(e) !== t && n)) throw Error(s(425));
  }
  function ol() {}
  var Fo = null,
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
    $d = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Su = typeof Promise == 'function' ? Promise : void 0,
    Qd =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Su < 'u'
          ? function (e) {
              return Su.resolve(null).then(e).catch(Vd);
            }
          : Uo;
  function Vd(e) {
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
  function ku(e) {
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
    Qo = '__reactEvents$' + On,
    Hd = '__reactListeners$' + On,
    Wd = '__reactHandles$' + On;
  function un(e) {
    var t = e[Nt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Pt] || n[Nt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = ku(e); e !== null; ) {
            if ((n = e[Nt])) return n;
            e = ku(e);
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
    Ue = qt(Kt),
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
    (ge(Xe), ge(Ue));
  }
  function xu(e, t, n) {
    if (Ue.current !== Kt) throw Error(s(168));
    (ve(Ue, t), ve(Xe, n));
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
      (an = Ue.current),
      ve(Ue, e),
      ve(Xe, Xe.current),
      !0
    );
  }
  function Eu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    (n
      ? ((e = Cu(e, t, an)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ge(Xe),
        ge(Ue),
        ve(Ue, e))
      : ge(Xe),
      ve(Xe, n));
  }
  var Ot = null,
    al = !1,
    Ho = !1;
  function Nu(e) {
    Ot === null ? (Ot = [e]) : Ot.push(e);
  }
  function Gd(e) {
    ((al = !0), Nu(e));
  }
  function Yt() {
    if (!Ho && Ot !== null) {
      Ho = !0;
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
        throw (Ot !== null && (Ot = Ot.slice(e + 1)), Ts(fo, Yt), l);
      } finally {
        ((pe = t), (Ho = !1));
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
  function ju(e, t, n) {
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
  function Wo(e) {
    e.return !== null && (dn(e, 1), ju(e, 1, 0));
  }
  function Go(e) {
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
  function Tu(e, t) {
    var n = ht(5, null, null, 0);
    ((n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Lu(e, t) {
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
  function qo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ko(e) {
    if (_e) {
      var t = ut;
      if (t) {
        var n = t;
        if (!Lu(e, t)) {
          if (qo(e)) throw Error(s(418));
          t = Gt(n.nextSibling);
          var r = st;
          t && Lu(e, t) ? Tu(r, n) : ((e.flags = (e.flags & -4097) | 2), (_e = !1), (st = e));
        }
      } else {
        if (qo(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (_e = !1), (st = e));
      }
    }
  }
  function Pu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    st = e;
  }
  function fl(e) {
    if (e !== st) return !1;
    if (!_e) return (Pu(e), (_e = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !Bo(e.type, e.memoizedProps))),
      t && (t = ut))
    ) {
      if (qo(e)) throw (Ou(), Error(s(418)));
      for (; t; ) (Tu(e, t), (t = Gt(t.nextSibling)));
    }
    if ((Pu(e), e.tag === 13)) {
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
  function Ou() {
    for (var e = ut; e; ) e = Gt(e.nextSibling);
  }
  function Fn() {
    ((ut = st = null), (_e = !1));
  }
  function Yo(e) {
    wt === null ? (wt = [e]) : wt.push(e);
  }
  var qd = X.ReactCurrentBatchConfig;
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
  function Ru(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Iu(e) {
    function t(v, p) {
      if (e) {
        var g = v.deletions;
        g === null ? ((v.deletions = [p]), (v.flags |= 16)) : g.push(p);
      }
    }
    function n(v, p) {
      if (!e) return null;
      for (; p !== null; ) (t(v, p), (p = p.sibling));
      return null;
    }
    function r(v, p) {
      for (v = new Map(); p !== null; )
        (p.key !== null ? v.set(p.key, p) : v.set(p.index, p), (p = p.sibling));
      return v;
    }
    function l(v, p) {
      return ((v = rn(v, p)), (v.index = 0), (v.sibling = null), v);
    }
    function o(v, p, g) {
      return (
        (v.index = g),
        e
          ? ((g = v.alternate),
            g !== null ? ((g = g.index), g < p ? ((v.flags |= 2), p) : g) : ((v.flags |= 2), p))
          : ((v.flags |= 1048576), p)
      );
    }
    function i(v) {
      return (e && v.alternate === null && (v.flags |= 2), v);
    }
    function u(v, p, g, z) {
      return p === null || p.tag !== 6
        ? ((p = Ui(g, v.mode, z)), (p.return = v), p)
        : ((p = l(p, g)), (p.return = v), p);
    }
    function d(v, p, g, z) {
      var q = g.type;
      return q === U
        ? R(v, p, g.props.children, z, g.key)
        : p !== null &&
            (p.elementType === q ||
              (typeof q == 'object' && q !== null && q.$$typeof === Be && Ru(q) === p.type))
          ? ((z = l(p, g.props)), (z.ref = gr(v, p, g)), (z.return = v), z)
          : ((z = Fl(g.type, g.key, g.props, null, v.mode, z)),
            (z.ref = gr(v, p, g)),
            (z.return = v),
            z);
    }
    function w(v, p, g, z) {
      return p === null ||
        p.tag !== 4 ||
        p.stateNode.containerInfo !== g.containerInfo ||
        p.stateNode.implementation !== g.implementation
        ? ((p = $i(g, v.mode, z)), (p.return = v), p)
        : ((p = l(p, g.children || [])), (p.return = v), p);
    }
    function R(v, p, g, z, q) {
      return p === null || p.tag !== 7
        ? ((p = wn(g, v.mode, z, q)), (p.return = v), p)
        : ((p = l(p, g)), (p.return = v), p);
    }
    function I(v, p, g) {
      if ((typeof p == 'string' && p !== '') || typeof p == 'number')
        return ((p = Ui('' + p, v.mode, g)), (p.return = v), p);
      if (typeof p == 'object' && p !== null) {
        switch (p.$$typeof) {
          case Q:
            return (
              (g = Fl(p.type, p.key, p.props, null, v.mode, g)),
              (g.ref = gr(v, null, p)),
              (g.return = v),
              g
            );
          case j:
            return ((p = $i(p, v.mode, g)), (p.return = v), p);
          case Be:
            var z = p._init;
            return I(v, z(p._payload), g);
        }
        if (qn(p) || Y(p)) return ((p = wn(p, v.mode, g, null)), (p.return = v), p);
        pl(v, p);
      }
      return null;
    }
    function O(v, p, g, z) {
      var q = p !== null ? p.key : null;
      if ((typeof g == 'string' && g !== '') || typeof g == 'number')
        return q !== null ? null : u(v, p, '' + g, z);
      if (typeof g == 'object' && g !== null) {
        switch (g.$$typeof) {
          case Q:
            return g.key === q ? d(v, p, g, z) : null;
          case j:
            return g.key === q ? w(v, p, g, z) : null;
          case Be:
            return ((q = g._init), O(v, p, q(g._payload), z));
        }
        if (qn(g) || Y(g)) return q !== null ? null : R(v, p, g, z, null);
        pl(v, g);
      }
      return null;
    }
    function A(v, p, g, z, q) {
      if ((typeof z == 'string' && z !== '') || typeof z == 'number')
        return ((v = v.get(g) || null), u(p, v, '' + z, q));
      if (typeof z == 'object' && z !== null) {
        switch (z.$$typeof) {
          case Q:
            return ((v = v.get(z.key === null ? g : z.key) || null), d(p, v, z, q));
          case j:
            return ((v = v.get(z.key === null ? g : z.key) || null), w(p, v, z, q));
          case Be:
            var Z = z._init;
            return A(v, p, g, Z(z._payload), q);
        }
        if (qn(z) || Y(z)) return ((v = v.get(g) || null), R(p, v, z, q, null));
        pl(p, z);
      }
      return null;
    }
    function V(v, p, g, z) {
      for (
        var q = null, Z = null, J = p, te = (p = 0), Ie = null;
        J !== null && te < g.length;
        te++
      ) {
        J.index > te ? ((Ie = J), (J = null)) : (Ie = J.sibling);
        var ce = O(v, J, g[te], z);
        if (ce === null) {
          J === null && (J = Ie);
          break;
        }
        (e && J && ce.alternate === null && t(v, J),
          (p = o(ce, p, te)),
          Z === null ? (q = ce) : (Z.sibling = ce),
          (Z = ce),
          (J = Ie));
      }
      if (te === g.length) return (n(v, J), _e && dn(v, te), q);
      if (J === null) {
        for (; te < g.length; te++)
          ((J = I(v, g[te], z)),
            J !== null && ((p = o(J, p, te)), Z === null ? (q = J) : (Z.sibling = J), (Z = J)));
        return (_e && dn(v, te), q);
      }
      for (J = r(v, J); te < g.length; te++)
        ((Ie = A(J, v, te, g[te], z)),
          Ie !== null &&
            (e && Ie.alternate !== null && J.delete(Ie.key === null ? te : Ie.key),
            (p = o(Ie, p, te)),
            Z === null ? (q = Ie) : (Z.sibling = Ie),
            (Z = Ie)));
      return (
        e &&
          J.forEach(function (ln) {
            return t(v, ln);
          }),
        _e && dn(v, te),
        q
      );
    }
    function G(v, p, g, z) {
      var q = Y(g);
      if (typeof q != 'function') throw Error(s(150));
      if (((g = q.call(g)), g == null)) throw Error(s(151));
      for (
        var Z = (q = null), J = p, te = (p = 0), Ie = null, ce = g.next();
        J !== null && !ce.done;
        te++, ce = g.next()
      ) {
        J.index > te ? ((Ie = J), (J = null)) : (Ie = J.sibling);
        var ln = O(v, J, ce.value, z);
        if (ln === null) {
          J === null && (J = Ie);
          break;
        }
        (e && J && ln.alternate === null && t(v, J),
          (p = o(ln, p, te)),
          Z === null ? (q = ln) : (Z.sibling = ln),
          (Z = ln),
          (J = Ie));
      }
      if (ce.done) return (n(v, J), _e && dn(v, te), q);
      if (J === null) {
        for (; !ce.done; te++, ce = g.next())
          ((ce = I(v, ce.value, z)),
            ce !== null &&
              ((p = o(ce, p, te)), Z === null ? (q = ce) : (Z.sibling = ce), (Z = ce)));
        return (_e && dn(v, te), q);
      }
      for (J = r(v, J); !ce.done; te++, ce = g.next())
        ((ce = A(J, v, te, ce.value, z)),
          ce !== null &&
            (e && ce.alternate !== null && J.delete(ce.key === null ? te : ce.key),
            (p = o(ce, p, te)),
            Z === null ? (q = ce) : (Z.sibling = ce),
            (Z = ce)));
      return (
        e &&
          J.forEach(function (jf) {
            return t(v, jf);
          }),
        _e && dn(v, te),
        q
      );
    }
    function je(v, p, g, z) {
      if (
        (typeof g == 'object' &&
          g !== null &&
          g.type === U &&
          g.key === null &&
          (g = g.props.children),
        typeof g == 'object' && g !== null)
      ) {
        switch (g.$$typeof) {
          case Q:
            e: {
              for (var q = g.key, Z = p; Z !== null; ) {
                if (Z.key === q) {
                  if (((q = g.type), q === U)) {
                    if (Z.tag === 7) {
                      (n(v, Z.sibling), (p = l(Z, g.props.children)), (p.return = v), (v = p));
                      break e;
                    }
                  } else if (
                    Z.elementType === q ||
                    (typeof q == 'object' && q !== null && q.$$typeof === Be && Ru(q) === Z.type)
                  ) {
                    (n(v, Z.sibling),
                      (p = l(Z, g.props)),
                      (p.ref = gr(v, Z, g)),
                      (p.return = v),
                      (v = p));
                    break e;
                  }
                  n(v, Z);
                  break;
                } else t(v, Z);
                Z = Z.sibling;
              }
              g.type === U
                ? ((p = wn(g.props.children, v.mode, z, g.key)), (p.return = v), (v = p))
                : ((z = Fl(g.type, g.key, g.props, null, v.mode, z)),
                  (z.ref = gr(v, p, g)),
                  (z.return = v),
                  (v = z));
            }
            return i(v);
          case j:
            e: {
              for (Z = g.key; p !== null; ) {
                if (p.key === Z)
                  if (
                    p.tag === 4 &&
                    p.stateNode.containerInfo === g.containerInfo &&
                    p.stateNode.implementation === g.implementation
                  ) {
                    (n(v, p.sibling), (p = l(p, g.children || [])), (p.return = v), (v = p));
                    break e;
                  } else {
                    n(v, p);
                    break;
                  }
                else t(v, p);
                p = p.sibling;
              }
              ((p = $i(g, v.mode, z)), (p.return = v), (v = p));
            }
            return i(v);
          case Be:
            return ((Z = g._init), je(v, p, Z(g._payload), z));
        }
        if (qn(g)) return V(v, p, g, z);
        if (Y(g)) return G(v, p, g, z);
        pl(v, g);
      }
      return (typeof g == 'string' && g !== '') || typeof g == 'number'
        ? ((g = '' + g),
          p !== null && p.tag === 6
            ? (n(v, p.sibling), (p = l(p, g)), (p.return = v), (v = p))
            : (n(v, p), (p = Ui(g, v.mode, z)), (p.return = v), (v = p)),
          i(v))
        : n(v, p);
    }
    return je;
  }
  var An = Iu(!0),
    zu = Iu(!1),
    ml = qt(null),
    hl = null,
    Bn = null,
    Xo = null;
  function Zo() {
    Xo = Bn = hl = null;
  }
  function Jo(e) {
    var t = ml.current;
    (ge(ml), (e._currentValue = t));
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
  function Un(e, t) {
    ((hl = e),
      (Xo = Bn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Je = !0), (e.firstContext = null)));
  }
  function ft(e) {
    var t = e._currentValue;
    if (Xo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Bn === null)) {
        if (hl === null) throw Error(s(308));
        ((Bn = e), (hl.dependencies = { lanes: 0, firstContext: e }));
      } else Bn = Bn.next = e;
    return t;
  }
  var fn = null;
  function ei(e) {
    fn === null ? (fn = [e]) : fn.push(e);
  }
  function Mu(e, t, n, r) {
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
  function Du(e, t) {
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
  function Fu(e, t) {
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
          A = u.eventTime;
        if ((r & O) === O) {
          R !== null &&
            (R = R.next =
              {
                eventTime: A,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var V = e,
              G = u;
            switch (((O = t), (A = n), G.tag)) {
              case 1:
                if (((V = G.payload), typeof V == 'function')) {
                  I = V.call(A, I, O);
                  break e;
                }
                I = V;
                break e;
              case 3:
                V.flags = (V.flags & -65537) | 128;
              case 0:
                if (
                  ((V = G.payload), (O = typeof V == 'function' ? V.call(A, I, O) : V), O == null)
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
          ((A = {
            eventTime: A,
            lane: O,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            R === null ? ((w = R = A), (d = I)) : (R = R.next = A),
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
  function Au(e, t, n) {
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
  function ni(e, t) {
    switch ((ve(Sr, t), ve(_r, e), ve(jt, wr), (e = t.nodeType), e)) {
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
    (ge(jt), ve(jt, t));
  }
  function $n() {
    (ge(jt), ge(_r), ge(Sr));
  }
  function Bu(e) {
    pn(Sr.current);
    var t = pn(jt.current),
      n = no(t, e.type);
    t !== n && (ve(_r, e), ve(jt, n));
  }
  function ri(e) {
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
  var li = [];
  function oi() {
    for (var e = 0; e < li.length; e++) li[e]._workInProgressVersionPrimary = null;
    li.length = 0;
  }
  var wl = X.ReactCurrentDispatcher,
    ii = X.ReactCurrentBatchConfig,
    mn = 0,
    xe = null,
    Le = null,
    Oe = null,
    _l = !1,
    kr = !1,
    xr = 0,
    Kd = 0;
  function $e() {
    throw Error(s(321));
  }
  function si(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!gt(e[n], t[n])) return !1;
    return !0;
  }
  function ui(e, t, n, r, l, o) {
    if (
      ((mn = o),
      (xe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (wl.current = e === null || e.memoizedState === null ? Jd : bd),
      (e = n(r, l)),
      kr)
    ) {
      o = 0;
      do {
        if (((kr = !1), (xr = 0), 25 <= o)) throw Error(s(301));
        ((o += 1), (Oe = Le = null), (t.updateQueue = null), (wl.current = ef), (e = n(r, l)));
      } while (kr);
    }
    if (
      ((wl.current = xl),
      (t = Le !== null && Le.next !== null),
      (mn = 0),
      (Oe = Le = xe = null),
      (_l = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function ai() {
    var e = xr !== 0;
    return ((xr = 0), e);
  }
  function Tt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Oe === null ? (xe.memoizedState = Oe = e) : (Oe = Oe.next = e), Oe);
  }
  function pt() {
    if (Le === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = Oe === null ? xe.memoizedState : Oe.next;
    if (t !== null) ((Oe = t), (Le = e));
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
        Oe === null ? (xe.memoizedState = Oe = e) : (Oe = Oe.next = e));
    }
    return Oe;
  }
  function Cr(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function ci(e) {
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
  function di(e) {
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
  function Uu() {}
  function $u(e, t) {
    var n = xe,
      r = pt(),
      l = t(),
      o = !gt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Je = !0)),
      (r = r.queue),
      fi(Hu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Oe !== null && Oe.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Er(9, Vu.bind(null, n, r, l, t), void 0, null), Re === null))
        throw Error(s(349));
      (mn & 30) !== 0 || Qu(n, t, l);
    }
    return l;
  }
  function Qu(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = xe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (xe.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Vu(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Wu(t) && Gu(e));
  }
  function Hu(e, t, n) {
    return n(function () {
      Wu(t) && Gu(e);
    });
  }
  function Wu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !gt(e, n);
    } catch {
      return !0;
    }
  }
  function Gu(e) {
    var t = zt(e, 1);
    t !== null && xt(t, e, 1, -1);
  }
  function qu(e) {
    var t = Tt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Cr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Zd.bind(null, xe, e)),
      [t.memoizedState, e]
    );
  }
  function Er(e, t, n, r) {
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
  function Ku() {
    return pt().memoizedState;
  }
  function Sl(e, t, n, r) {
    var l = Tt();
    ((xe.flags |= e), (l.memoizedState = Er(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function kl(e, t, n, r) {
    var l = pt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Le !== null) {
      var i = Le.memoizedState;
      if (((o = i.destroy), r !== null && si(r, i.deps))) {
        l.memoizedState = Er(t, n, o, r);
        return;
      }
    }
    ((xe.flags |= e), (l.memoizedState = Er(1 | t, n, o, r)));
  }
  function Yu(e, t) {
    return Sl(8390656, 8, e, t);
  }
  function fi(e, t) {
    return kl(2048, 8, e, t);
  }
  function Xu(e, t) {
    return kl(4, 2, e, t);
  }
  function Zu(e, t) {
    return kl(4, 4, e, t);
  }
  function Ju(e, t) {
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
  function bu(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), kl(4, 4, Ju.bind(null, t, e), n));
  }
  function pi() {}
  function ea(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && si(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function ta(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && si(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function na(e, t, n) {
    return (mn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Je = !0)), (e.memoizedState = n))
      : (gt(n, t) || ((n = Rs()), (xe.lanes |= n), (hn |= n), (e.baseState = !0)), t);
  }
  function Yd(e, t) {
    var n = pe;
    ((pe = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = ii.transition;
    ii.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((pe = n), (ii.transition = r));
    }
  }
  function ra() {
    return pt().memoizedState;
  }
  function Xd(e, t, n) {
    var r = tn(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), la(e)))
      oa(t, n);
    else if (((n = Mu(e, t, n, r)), n !== null)) {
      var l = Ke();
      (xt(n, e, r, l), ia(n, t, r));
    }
  }
  function Zd(e, t, n) {
    var r = tn(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (la(e)) oa(t, l);
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
            (d === null ? ((l.next = l), ei(t)) : ((l.next = d.next), (d.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Mu(e, t, l, r)), n !== null && ((l = Ke()), xt(n, e, r, l), ia(n, t, r)));
    }
  }
  function la(e) {
    var t = e.alternate;
    return e === xe || (t !== null && t === xe);
  }
  function oa(e, t) {
    kr = _l = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function ia(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ho(e, n));
    }
  }
  var xl = {
      readContext: ft,
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
    Jd = {
      readContext: ft,
      useCallback: function (e, t) {
        return ((Tt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ft,
      useEffect: Yu,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), Sl(4194308, 4, Ju.bind(null, t, e), n));
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
          (e = e.dispatch = Xd.bind(null, xe, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Tt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: qu,
      useDebugValue: pi,
      useDeferredValue: function (e) {
        return (Tt().memoizedState = e);
      },
      useTransition: function () {
        var e = qu(!1),
          t = e[0];
        return ((e = Yd.bind(null, e[1])), (Tt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = xe,
          l = Tt();
        if (_e) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), Re === null)) throw Error(s(349));
          (mn & 30) !== 0 || Qu(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Yu(Hu.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Er(9, Vu.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Tt(),
          t = Re.identifierPrefix;
        if (_e) {
          var n = It,
            r = Rt;
          ((n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = xr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':'));
        } else ((n = Kd++), (t = ':' + t + 'r' + n.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    bd = {
      readContext: ft,
      useCallback: ea,
      useContext: ft,
      useEffect: fi,
      useImperativeHandle: bu,
      useInsertionEffect: Xu,
      useLayoutEffect: Zu,
      useMemo: ta,
      useReducer: ci,
      useRef: Ku,
      useState: function () {
        return ci(Cr);
      },
      useDebugValue: pi,
      useDeferredValue: function (e) {
        var t = pt();
        return na(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = ci(Cr)[0],
          t = pt().memoizedState;
        return [e, t];
      },
      useMutableSource: Uu,
      useSyncExternalStore: $u,
      useId: ra,
      unstable_isNewReconciler: !1,
    },
    ef = {
      readContext: ft,
      useCallback: ea,
      useContext: ft,
      useEffect: fi,
      useImperativeHandle: bu,
      useInsertionEffect: Xu,
      useLayoutEffect: Zu,
      useMemo: ta,
      useReducer: di,
      useRef: Ku,
      useState: function () {
        return di(Cr);
      },
      useDebugValue: pi,
      useDeferredValue: function (e) {
        var t = pt();
        return Le === null ? (t.memoizedState = e) : na(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = di(Cr)[0],
          t = pt().memoizedState;
        return [e, t];
      },
      useMutableSource: Uu,
      useSyncExternalStore: $u,
      useId: ra,
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
  function mi(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : M({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Cl = {
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
  function sa(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !dr(n, r) || !dr(l, o)
          : !0
    );
  }
  function ua(e, t, n) {
    var r = !1,
      l = Kt,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = ft(o))
        : ((l = Ze(t) ? an : Ue.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? zn(e, l) : Kt)),
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
  function aa(e, t, n, r) {
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
      ? (l.context = ft(o))
      : ((o = Ze(t) ? an : Ue.current), (l.context = zn(e, o))),
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
  var tf = typeof WeakMap == 'function' ? WeakMap : Map;
  function ca(e, t, n) {
    ((n = Mt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Ol || ((Ol = !0), (Ri = r)), yi(e, t));
      }),
      n
    );
  }
  function da(e, t, n) {
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
  function fa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new tf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = vf.bind(null, e, t, n)), t.then(e, e));
  }
  function pa(e) {
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
  function ma(e, t, n, r, l) {
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
  var nf = X.ReactCurrentOwner,
    Je = !1;
  function qe(e, t, n, r) {
    t.child = e === null ? zu(t, null, n, r) : An(t, e.child, n, r);
  }
  function ha(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Un(t, l),
      (r = ui(e, t, n, r, o, l)),
      (n = ai()),
      e !== null && !Je
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Dt(e, t, l))
        : (_e && n && Wo(t), (t.flags |= 1), qe(e, t, r, l), t.child)
    );
  }
  function va(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' &&
        !Bi(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), ya(e, t, o, r, l))
        : ((e = Fl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var i = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : dr), n(i, r) && e.ref === t.ref))
        return Dt(e, t, l);
    }
    return ((t.flags |= 1), (e = rn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function ya(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (dr(o, r) && e.ref === t.ref)
        if (((Je = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Je = !0);
        else return ((t.lanes = e.lanes), Dt(e, t, l));
    }
    return gi(e, t, n, r, l);
  }
  function ga(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          ve(Hn, at),
          (at |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            ve(Hn, at),
            (at |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = o !== null ? o.baseLanes : n),
          ve(Hn, at),
          (at |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ve(Hn, at),
        (at |= r));
    return (qe(e, t, l, n), t.child);
  }
  function wa(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function gi(e, t, n, r, l) {
    var o = Ze(n) ? an : Ue.current;
    return (
      (o = zn(t, o)),
      Un(t, l),
      (n = ui(e, t, n, r, o, l)),
      (r = ai()),
      e !== null && !Je
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Dt(e, t, l))
        : (_e && r && Wo(t), (t.flags |= 1), qe(e, t, n, l), t.child)
    );
  }
  function _a(e, t, n, r, l) {
    if (Ze(n)) {
      var o = !0;
      ul(t);
    } else o = !1;
    if ((Un(t, l), t.stateNode === null)) (Nl(e, t), ua(t, n, r), hi(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        u = t.memoizedProps;
      i.props = u;
      var d = i.context,
        w = n.contextType;
      typeof w == 'object' && w !== null
        ? (w = ft(w))
        : ((w = Ze(n) ? an : Ue.current), (w = zn(t, w)));
      var R = n.getDerivedStateFromProps,
        I = typeof R == 'function' || typeof i.getSnapshotBeforeUpdate == 'function';
      (I ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== r || d !== w) && aa(t, i, r, w)),
        (Xt = !1));
      var O = t.memoizedState;
      ((i.state = O),
        yl(t, r, i, l),
        (d = t.memoizedState),
        u !== r || O !== d || Xe.current || Xt
          ? (typeof R == 'function' && (mi(t, n, R, r), (d = t.memoizedState)),
            (u = Xt || sa(t, n, u, r, O, d, w))
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
        Du(e, t),
        (u = t.memoizedProps),
        (w = t.type === t.elementType ? u : _t(t.type, u)),
        (i.props = w),
        (I = t.pendingProps),
        (O = i.context),
        (d = n.contextType),
        typeof d == 'object' && d !== null
          ? (d = ft(d))
          : ((d = Ze(n) ? an : Ue.current), (d = zn(t, d))));
      var A = n.getDerivedStateFromProps;
      ((R = typeof A == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== I || O !== d) && aa(t, i, r, d)),
        (Xt = !1),
        (O = t.memoizedState),
        (i.state = O),
        yl(t, r, i, l));
      var V = t.memoizedState;
      u !== I || O !== V || Xe.current || Xt
        ? (typeof A == 'function' && (mi(t, n, A, r), (V = t.memoizedState)),
          (w = Xt || sa(t, n, w, r, O, V, d) || !1)
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
    return wi(e, t, n, r, o, l);
  }
  function wi(e, t, n, r, l, o) {
    wa(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && Eu(t, n, !1), Dt(e, t, o));
    ((r = t.stateNode), (nf.current = t));
    var u = i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = An(t, e.child, null, o)), (t.child = An(t, null, u, o)))
        : qe(e, t, u, o),
      (t.memoizedState = r.state),
      l && Eu(t, n, !0),
      t.child
    );
  }
  function Sa(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? xu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && xu(e, t.context, !1),
      ni(e, t.containerInfo));
  }
  function ka(e, t, n, r, l) {
    return (Fn(), Yo(l), (t.flags |= 256), qe(e, t, n, r), t.child);
  }
  var _i = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Si(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function xa(e, t, n) {
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
                  : (o = Al(i, r, 0, null)),
                (e = wn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = Si(n)),
                (t.memoizedState = _i),
                e)
              : ki(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return rf(e, t, i, r, u, l, n);
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
            ? Si(n)
            : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
        (o.memoizedState = i),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = _i),
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
  function ki(e, t) {
    return (
      (t = Al({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function El(e, t, n, r) {
    return (
      r !== null && Yo(r),
      An(t, e.child, null, n),
      (e = ki(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function rf(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = vi(Error(s(422)))), El(e, t, i, r))
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
            (t.child.memoizedState = Si(i)),
            (t.memoizedState = _i),
            o);
    if ((t.mode & 1) === 0) return El(e, t, i, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return ((r = u), (o = Error(s(419))), (r = vi(o, r, void 0)), El(e, t, i, r));
    }
    if (((u = (i & e.childLanes) !== 0), Je || u)) {
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
          l !== 0 && l !== o.retryLane && ((o.retryLane = l), zt(e, l), xt(r, e, l, -1)));
      }
      return (Ai(), (r = vi(Error(s(421)))), El(e, t, i, r));
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = yf.bind(null, e)), (l._reactRetry = t), null)
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
        (t = ki(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Ca(e, t, n) {
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
  function Ea(e, t, n) {
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
            xi(t, !1, l, n, o));
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && gl(e) === null)) {
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
  function lf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Sa(t), Fn());
        break;
      case 5:
        Bu(t);
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
        (ve(ml, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ve(ke, ke.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? xa(e, t, n)
              : (ve(ke, ke.current & 1), (e = Dt(e, t, n)), e !== null ? e.sibling : null);
        ve(ke, ke.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Ea(e, t, n);
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
        return ((t.lanes = 0), ga(e, t, n));
    }
    return Dt(e, t, n);
  }
  var Na, Ci, ja, Ta;
  ((Na = function (e, t) {
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
    (ja = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), pn(jt.current));
        var o = null;
        switch (n) {
          case 'input':
            ((l = Jl(e, l)), (r = Jl(e, r)), (o = []));
            break;
          case 'select':
            ((l = M({}, l, { value: void 0 })), (r = M({}, r, { value: void 0 })), (o = []));
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
                    (C.hasOwnProperty(w)
                      ? (d != null && w === 'onScroll' && ye('scroll', e), o || u === d || (o = []))
                      : (o = o || []).push(w, d));
        }
        n && (o = o || []).push('style', n);
        var w = o;
        (t.updateQueue = w) && (t.flags |= 4);
      }
    }),
    (Ta = function (e, t, n, r) {
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
  function of(e, t, n) {
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
        return (Ze(t.type) && sl(), Qe(t), null);
      case 3:
        return (
          (r = t.stateNode),
          $n(),
          ge(Xe),
          ge(Ue),
          oi(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (fl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), wt !== null && (Mi(wt), (wt = null)))),
          Ci(e, t),
          Qe(t),
          null
        );
      case 5:
        ri(t);
        var l = pn(Sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (ja(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return (Qe(t), null);
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
                (us(r, o), ye('invalid', r));
                break;
              case 'select':
                ((r._wrapperState = { wasMultiple: !!o.multiple }), ye('invalid', r));
                break;
              case 'textarea':
                (ds(r, o), ye('invalid', r));
            }
            (ro(n, o), (l = null));
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
                  : C.hasOwnProperty(i) && u != null && i === 'onScroll' && ye('scroll', r);
              }
            switch (n) {
              case 'input':
                (Mr(r), cs(r, o, !0));
                break;
              case 'textarea':
                (Mr(r), ps(r));
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
              e === 'http://www.w3.org/1999/xhtml' && (e = ms(n)),
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
              Na(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = lo(n, r)), n)) {
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
                  (us(e, r), (l = Jl(e, r)), ye('invalid', e));
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
                  (ds(e, r), (l = to(e, r)), ye('invalid', e));
                  break;
                default:
                  l = r;
              }
              (ro(n, l), (u = l));
              for (o in u)
                if (u.hasOwnProperty(o)) {
                  var d = u[o];
                  o === 'style'
                    ? ys(e, d)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((d = d ? d.__html : void 0), d != null && hs(e, d))
                      : o === 'children'
                        ? typeof d == 'string'
                          ? (n !== 'textarea' || d !== '') && Kn(e, d)
                          : typeof d == 'number' && Kn(e, '' + d)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (C.hasOwnProperty(o)
                            ? d != null && o === 'onScroll' && ye('scroll', e)
                            : d != null && ne(e, o, d, i));
                }
              switch (n) {
                case 'input':
                  (Mr(e), cs(e, r, !1));
                  break;
                case 'textarea':
                  (Mr(e), ps(e));
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
        return (Qe(t), null);
      case 6:
        if (e && t.stateNode != null) Ta(e, t, e.memoizedProps, r);
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
        return (Qe(t), null);
      case 13:
        if (
          (ge(ke),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (_e && ut !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Ou(), Fn(), (t.flags |= 98560), (o = !1));
          else if (((o = fl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(s(317));
              o[Nt] = t;
            } else (Fn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Qe(t), (o = !1));
          } else (wt !== null && (Mi(wt), (wt = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ke.current & 1) !== 0 ? Pe === 0 && (Pe = 3) : Ai())),
            t.updateQueue !== null && (t.flags |= 4),
            Qe(t),
            null);
      case 4:
        return ($n(), Ci(e, t), e === null && mr(t.stateNode.containerInfo), Qe(t), null);
      case 10:
        return (Jo(t.type._context), Qe(t), null);
      case 17:
        return (Ze(t.type) && sl(), Qe(t), null);
      case 19:
        if ((ge(ke), (o = t.memoizedState), o === null)) return (Qe(t), null);
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
                return (Qe(t), null);
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
          : (Qe(t), null);
      case 22:
      case 23:
        return (
          Fi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (at & 1073741824) !== 0 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Qe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function sf(e, t) {
    switch ((Go(t), t.tag)) {
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
          ge(Ue),
          oi(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (ri(t), null);
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
    Ve = !1,
    uf = typeof WeakSet == 'function' ? WeakSet : Set,
    $ = null;
  function Vn(e, t) {
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
  function Ei(e, t, n) {
    try {
      n();
    } catch (r) {
      Ee(e, t, r);
    }
  }
  var La = !1;
  function af(e, t) {
    if (((Fo = qr), (e = su()), Lo(e))) {
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
                var A;
                I !== n || (l !== 0 && I.nodeType !== 3) || (u = i + l),
                  I !== o || (r !== 0 && I.nodeType !== 3) || (d = i + r),
                  I.nodeType === 3 && (i += I.nodeValue.length),
                  (A = I.firstChild) !== null;
              )
                ((O = I), (I = A));
              for (;;) {
                if (I === e) break t;
                if (
                  (O === n && ++w === l && (u = i),
                  O === o && ++R === r && (d = i),
                  (A = I.nextSibling) !== null)
                )
                  break;
                ((I = O), (O = I.parentNode));
              }
              I = A;
            }
            n = u === -1 || d === -1 ? null : { start: u, end: d };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ao = { focusedElem: e, selectionRange: n }, qr = !1, $ = t; $ !== null; )
      if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), ($ = e));
      else
        for (; $ !== null; ) {
          t = $;
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
                    var G = V.memoizedProps,
                      je = V.memoizedState,
                      v = t.stateNode,
                      p = v.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? G : _t(t.type, G),
                        je
                      );
                    v.__reactInternalSnapshotBeforeUpdate = p;
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
            ((e.return = t.return), ($ = e));
            break;
          }
          $ = t.return;
        }
    return ((V = La), (La = !1), V);
  }
  function jr(e, t, n) {
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
  function Pa(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Pa(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Nt], delete t[vr], delete t[Qo], delete t[Hd], delete t[Wd])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Oa(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ra(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Oa(e.return)) return null;
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
  function Ti(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ti(e, t, n), e = e.sibling; e !== null; ) (Ti(e, t, n), (e = e.sibling));
  }
  var ze = null,
    St = !1;
  function Jt(e, t, n) {
    for (n = n.child; n !== null; ) (Ia(e, t, n), (n = n.sibling));
  }
  function Ia(e, t, n) {
    if (Et && typeof Et.onCommitFiberUnmount == 'function')
      try {
        Et.onCommitFiberUnmount($r, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ve || Vn(n, t);
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
              or(e))
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
        if (!Ve && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
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
        if (!Ve && (Vn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
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
  function za(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new uf()),
        t.forEach(function (r) {
          var l = gf.bind(null, e, r);
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
                ((ze = u.stateNode), (St = !1));
                break e;
              case 3:
                ((ze = u.stateNode.containerInfo), (St = !0));
                break e;
              case 4:
                ((ze = u.stateNode.containerInfo), (St = !0));
                break e;
            }
            u = u.return;
          }
          if (ze === null) throw Error(s(160));
          (Ia(o, i, l), (ze = null), (St = !1));
          var d = l.alternate;
          (d !== null && (d.return = null), (l.return = null));
        } catch (w) {
          Ee(l, t, w);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Ma(t, e), (t = t.sibling));
  }
  function Ma(e, t) {
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
          } catch (G) {
            Ee(e, e.return, G);
          }
          try {
            jr(5, e, e.return);
          } catch (G) {
            Ee(e, e.return, G);
          }
        }
        break;
      case 1:
        (kt(t, e), Lt(e), r & 512 && n !== null && Vn(n, n.return));
        break;
      case 5:
        if ((kt(t, e), Lt(e), r & 512 && n !== null && Vn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Kn(l, '');
          } catch (G) {
            Ee(e, e.return, G);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = n !== null ? n.memoizedProps : o,
            u = e.type,
            d = e.updateQueue;
          if (((e.updateQueue = null), d !== null))
            try {
              (u === 'input' && o.type === 'radio' && o.name != null && as(l, o), lo(u, i));
              var w = lo(u, o);
              for (i = 0; i < d.length; i += 2) {
                var R = d[i],
                  I = d[i + 1];
                R === 'style'
                  ? ys(l, I)
                  : R === 'dangerouslySetInnerHTML'
                    ? hs(l, I)
                    : R === 'children'
                      ? Kn(l, I)
                      : ne(l, R, I, w);
              }
              switch (u) {
                case 'input':
                  bl(l, o);
                  break;
                case 'textarea':
                  fs(l, o);
                  break;
                case 'select':
                  var O = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var A = o.value;
                  A != null
                    ? kn(l, !!o.multiple, A, !1)
                    : O !== !!o.multiple &&
                      (o.defaultValue != null
                        ? kn(l, !!o.multiple, o.defaultValue, !0)
                        : kn(l, !!o.multiple, o.multiple ? [] : '', !1));
              }
              l[vr] = o;
            } catch (G) {
              Ee(e, e.return, G);
            }
        }
        break;
      case 6:
        if ((kt(t, e), Lt(e), r & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((l = e.stateNode), (o = e.memoizedProps));
          try {
            l.nodeValue = o;
          } catch (G) {
            Ee(e, e.return, G);
          }
        }
        break;
      case 3:
        if ((kt(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            or(t.containerInfo);
          } catch (G) {
            Ee(e, e.return, G);
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
            !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (Oi = Ne())),
          r & 4 && za(e));
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
            for ($ = e, R = e.child; R !== null; ) {
              for (I = $ = R; $ !== null; ) {
                switch (((O = $), (A = O.child), O.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    jr(4, O, O.return);
                    break;
                  case 1:
                    Vn(O, O.return);
                    var V = O.stateNode;
                    if (typeof V.componentWillUnmount == 'function') {
                      ((r = O), (n = O.return));
                      try {
                        ((t = r),
                          (V.props = t.memoizedProps),
                          (V.state = t.memoizedState),
                          V.componentWillUnmount());
                      } catch (G) {
                        Ee(r, n, G);
                      }
                    }
                    break;
                  case 5:
                    Vn(O, O.return);
                    break;
                  case 22:
                    if (O.memoizedState !== null) {
                      Aa(I);
                      continue;
                    }
                }
                A !== null ? ((A.return = O), ($ = A)) : Aa(I);
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
                        (u.style.display = vs('display', i))));
                } catch (G) {
                  Ee(e, e.return, G);
                }
              }
            } else if (I.tag === 6) {
              if (R === null)
                try {
                  I.stateNode.nodeValue = w ? '' : I.memoizedProps;
                } catch (G) {
                  Ee(e, e.return, G);
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
        (kt(t, e), Lt(e), r & 4 && za(e));
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
            if (Oa(n)) {
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
            var o = Ra(e);
            Ti(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              u = Ra(e);
            ji(e, u, i);
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
  function cf(e, t, n) {
    (($ = e), Da(e));
  }
  function Da(e, t, n) {
    for (var r = (e.mode & 1) !== 0; $ !== null; ) {
      var l = $,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || jl;
        if (!i) {
          var u = l.alternate,
            d = (u !== null && u.memoizedState !== null) || Ve;
          u = jl;
          var w = Ve;
          if (((jl = i), (Ve = d) && !w))
            for ($ = l; $ !== null; )
              ((i = $),
                (d = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? Ba(l)
                  : d !== null
                    ? ((d.return = i), ($ = d))
                    : Ba(l));
          for (; o !== null; ) (($ = o), Da(o), (o = o.sibling));
          (($ = l), (jl = u), (Ve = w));
        }
        Fa(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), ($ = o)) : Fa(e);
    }
  }
  function Fa(e) {
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
                o !== null && Au(t, o, r);
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
                  Au(t, i, n);
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
          Ve || (t.flags & 512 && Ni(t));
        } catch (O) {
          Ee(t, t.return, O);
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
  function Aa(e) {
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
  function Ba(e) {
    for (; $ !== null; ) {
      var t = $;
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
              Ni(t);
            } catch (d) {
              Ee(t, o, d);
            }
            break;
          case 5:
            var i = t.return;
            try {
              Ni(t);
            } catch (d) {
              Ee(t, i, d);
            }
        }
      } catch (d) {
        Ee(t, t.return, d);
      }
      if (t === e) {
        $ = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        ((u.return = t.return), ($ = u));
        break;
      }
      $ = t.return;
    }
  }
  var df = Math.ceil,
    Ll = X.ReactCurrentDispatcher,
    Li = X.ReactCurrentOwner,
    mt = X.ReactCurrentBatchConfig,
    se = 0,
    Re = null,
    Te = null,
    Me = 0,
    at = 0,
    Hn = qt(0),
    Pe = 0,
    Tr = null,
    hn = 0,
    Pl = 0,
    Pi = 0,
    Lr = null,
    be = null,
    Oi = 0,
    Wn = 1 / 0,
    Ft = null,
    Ol = !1,
    Ri = null,
    bt = null,
    Rl = !1,
    en = null,
    Il = 0,
    Pr = 0,
    Ii = null,
    zl = -1,
    Ml = 0;
  function Ke() {
    return (se & 6) !== 0 ? Ne() : zl !== -1 ? zl : (zl = Ne());
  }
  function tn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (se & 2) !== 0 && Me !== 0
        ? Me & -Me
        : qd.transition !== null
          ? (Ml === 0 && (Ml = Rs()), Ml)
          : ((e = pe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $s(e.type))), e);
  }
  function xt(e, t, n, r) {
    if (50 < Pr) throw ((Pr = 0), (Ii = null), Error(s(185)));
    (er(e, n, r),
      ((se & 2) === 0 || e !== Re) &&
        (e === Re && ((se & 2) === 0 && (Pl |= n), Pe === 4 && nn(e, Me)),
        et(e, r),
        n === 1 && se === 0 && (t.mode & 1) === 0 && ((Wn = Ne() + 500), al && Yt())));
  }
  function et(e, t) {
    var n = e.callbackNode;
    qc(e, t);
    var r = Hr(e, e === Re ? Me : 0);
    if (r === 0) (n !== null && Ls(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Ls(n), t === 1))
        (e.tag === 0 ? Gd($a.bind(null, e)) : Nu($a.bind(null, e)),
          Qd(function () {
            (se & 6) === 0 && Yt();
          }),
          (n = null));
      else {
        switch (Is(r)) {
          case 1:
            n = fo;
            break;
          case 4:
            n = Ps;
            break;
          case 16:
            n = Ur;
            break;
          case 536870912:
            n = Os;
            break;
          default:
            n = Ur;
        }
        n = Ya(n, Ua.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Ua(e, t) {
    if (((zl = -1), (Ml = 0), (se & 6) !== 0)) throw Error(s(327));
    var n = e.callbackNode;
    if (Gn() && e.callbackNode !== n) return null;
    var r = Hr(e, e === Re ? Me : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Dl(e, r);
    else {
      t = r;
      var l = se;
      se |= 2;
      var o = Va();
      (Re !== e || Me !== t) && ((Ft = null), (Wn = Ne() + 500), yn(e, t));
      do
        try {
          mf();
          break;
        } catch (u) {
          Qa(e, u);
        }
      while (!0);
      (Zo(), (Ll.current = o), (se = l), Te !== null ? (t = 0) : ((Re = null), (Me = 0), (t = Pe)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = po(e)), l !== 0 && ((r = l), (t = zi(e, l)))), t === 1))
        throw ((n = Tr), yn(e, 0), nn(e, r), et(e, Ne()), n);
      if (t === 6) nn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !ff(l) &&
            ((t = Dl(e, r)),
            t === 2 && ((o = po(e)), o !== 0 && ((r = o), (t = zi(e, o)))),
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
            if ((nn(e, r), (r & 130023424) === r && ((t = Oi + 500 - Ne()), 10 < t))) {
              if (Hr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Ke(), (e.pingedLanes |= e.suspendedLanes & l));
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
                            : 1960 * df(r / 1960)) - r),
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
            throw Error(s(329));
        }
      }
    }
    return (et(e, Ne()), e.callbackNode === n ? Ua.bind(null, e) : null);
  }
  function zi(e, t) {
    var n = Lr;
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
  function ff(e) {
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
      t &= ~Pi, t &= ~Pl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - yt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function $a(e) {
    if ((se & 6) !== 0) throw Error(s(327));
    Gn();
    var t = Hr(e, 0);
    if ((t & 1) === 0) return (et(e, Ne()), null);
    var n = Dl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = po(e);
      r !== 0 && ((t = r), (n = zi(e, r)));
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
  function Di(e, t) {
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
  function Fi() {
    ((at = Hn.current), ge(Hn));
  }
  function yn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), $d(n)), Te !== null))
      for (n = Te.return; n !== null; ) {
        var r = n;
        switch ((Go(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && sl());
            break;
          case 3:
            ($n(), ge(Xe), ge(Ue), oi());
            break;
          case 5:
            ri(r);
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
      (Te = e = rn(e.current, null)),
      (Me = at = t),
      (Pe = 0),
      (Tr = null),
      (Pi = Pl = hn = 0),
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
  function Qa(e, t) {
    do {
      var n = Te;
      try {
        if ((Zo(), (wl.current = xl), _l)) {
          for (var r = xe.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          _l = !1;
        }
        if (
          ((mn = 0),
          (Oe = Le = xe = null),
          (kr = !1),
          (xr = 0),
          (Li.current = null),
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
            ((t = Me),
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
            var A = pa(i);
            if (A !== null) {
              ((A.flags &= -257), ma(A, i, u, o, t), A.mode & 1 && fa(o, w, t), (t = A), (d = w));
              var V = t.updateQueue;
              if (V === null) {
                var G = new Set();
                (G.add(d), (t.updateQueue = G));
              } else V.add(d);
              break e;
            } else {
              if ((t & 1) === 0) {
                (fa(o, w, t), Ai());
                break e;
              }
              d = Error(s(426));
            }
          } else if (_e && u.mode & 1) {
            var je = pa(i);
            if (je !== null) {
              ((je.flags & 65536) === 0 && (je.flags |= 256), ma(je, i, u, o, t), Yo(Qn(d, u)));
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
                var v = ca(o, d, t);
                Fu(o, v);
                break e;
              case 1:
                u = d;
                var p = o.type,
                  g = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof p.getDerivedStateFromError == 'function' ||
                    (g !== null &&
                      typeof g.componentDidCatch == 'function' &&
                      (bt === null || !bt.has(g))))
                ) {
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var z = da(o, u, t);
                  Fu(o, z);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Wa(n);
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
  function Ai() {
    ((Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
      Re === null || ((hn & 268435455) === 0 && (Pl & 268435455) === 0) || nn(Re, Me));
  }
  function Dl(e, t) {
    var n = se;
    se |= 2;
    var r = Va();
    (Re !== e || Me !== t) && ((Ft = null), yn(e, t));
    do
      try {
        pf();
        break;
      } catch (l) {
        Qa(e, l);
      }
    while (!0);
    if ((Zo(), (se = n), (Ll.current = r), Te !== null)) throw Error(s(261));
    return ((Re = null), (Me = 0), Pe);
  }
  function pf() {
    for (; Te !== null; ) Ha(Te);
  }
  function mf() {
    for (; Te !== null && !Ac(); ) Ha(Te);
  }
  function Ha(e) {
    var t = Ka(e.alternate, e, at);
    ((e.memoizedProps = e.pendingProps), t === null ? Wa(e) : (Te = t), (Li.current = null));
  }
  function Wa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = of(n, t, at)), n !== null)) {
          Te = n;
          return;
        }
      } else {
        if (((n = sf(n, t)), n !== null)) {
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
      ((mt.transition = null), (pe = 1), hf(e, t, n, r));
    } finally {
      ((mt.transition = l), (pe = r));
    }
    return null;
  }
  function hf(e, t, n, r) {
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
      (Kc(e, o),
      e === Re && ((Te = Re = null), (Me = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Rl ||
        ((Rl = !0),
        Ya(Ur, function () {
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
        (Li.current = null),
        af(e, n),
        Ma(n, e),
        zd(Ao),
        (qr = !!Fo),
        (Ao = Fo = null),
        (e.current = n),
        cf(n),
        Bc(),
        (se = u),
        (pe = i),
        (mt.transition = o));
    } else e.current = n;
    if (
      (Rl && ((Rl = !1), (en = e), (Il = l)),
      (o = e.pendingLanes),
      o === 0 && (bt = null),
      Qc(n.stateNode),
      et(e, Ne()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (Ol) throw ((Ol = !1), (e = Ri), (Ri = null), e);
    return (
      (Il & 1) !== 0 && e.tag !== 0 && Gn(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === Ii ? Pr++ : ((Pr = 0), (Ii = e))) : (Pr = 0),
      Yt(),
      null
    );
  }
  function Gn() {
    if (en !== null) {
      var e = Is(Il),
        t = mt.transition,
        n = pe;
      try {
        if (((mt.transition = null), (pe = 16 > e ? 16 : e), en === null)) var r = !1;
        else {
          if (((e = en), (en = null), (Il = 0), (se & 6) !== 0)) throw Error(s(331));
          var l = se;
          for (se |= 4, $ = e.current; $ !== null; ) {
            var o = $,
              i = o.child;
            if (($.flags & 16) !== 0) {
              var u = o.deletions;
              if (u !== null) {
                for (var d = 0; d < u.length; d++) {
                  var w = u[d];
                  for ($ = w; $ !== null; ) {
                    var R = $;
                    switch (R.tag) {
                      case 0:
                      case 11:
                      case 15:
                        jr(8, R, o);
                    }
                    var I = R.child;
                    if (I !== null) ((I.return = R), ($ = I));
                    else
                      for (; $ !== null; ) {
                        R = $;
                        var O = R.sibling,
                          A = R.return;
                        if ((Pa(R), R === w)) {
                          $ = null;
                          break;
                        }
                        if (O !== null) {
                          ((O.return = A), ($ = O));
                          break;
                        }
                        $ = A;
                      }
                  }
                }
                var V = o.alternate;
                if (V !== null) {
                  var G = V.child;
                  if (G !== null) {
                    V.child = null;
                    do {
                      var je = G.sibling;
                      ((G.sibling = null), (G = je));
                    } while (G !== null);
                  }
                }
                $ = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null) ((i.return = o), ($ = i));
            else
              e: for (; $ !== null; ) {
                if (((o = $), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jr(9, o, o.return);
                  }
                var v = o.sibling;
                if (v !== null) {
                  ((v.return = o.return), ($ = v));
                  break e;
                }
                $ = o.return;
              }
          }
          var p = e.current;
          for ($ = p; $ !== null; ) {
            i = $;
            var g = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && g !== null) ((g.return = i), ($ = g));
            else
              e: for (i = p; $ !== null; ) {
                if (((u = $), (u.flags & 2048) !== 0))
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
                  $ = null;
                  break e;
                }
                var z = u.sibling;
                if (z !== null) {
                  ((z.return = u.return), ($ = z));
                  break e;
                }
                $ = u.return;
              }
          }
          if (((se = l), Yt(), Et && typeof Et.onPostCommitFiberRoot == 'function'))
            try {
              Et.onPostCommitFiberRoot($r, e);
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
  function Ga(e, t, n) {
    ((t = Qn(n, t)),
      (t = ca(e, t, 1)),
      (e = Zt(e, t, 1)),
      (t = Ke()),
      e !== null && (er(e, 1, t), et(e, t)));
  }
  function Ee(e, t, n) {
    if (e.tag === 3) Ga(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ga(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (bt === null || !bt.has(r)))
          ) {
            ((e = Qn(n, e)),
              (e = da(t, e, 1)),
              (t = Zt(t, e, 1)),
              (e = Ke()),
              t !== null && (er(t, 1, e), et(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function vf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Ke()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Re === e &&
        (Me & n) === n &&
        (Pe === 4 || (Pe === 3 && (Me & 130023424) === Me && 500 > Ne() - Oi)
          ? yn(e, 0)
          : (Pi |= n)),
      et(e, t));
  }
  function qa(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Vr), (Vr <<= 1), (Vr & 130023424) === 0 && (Vr = 4194304)));
    var n = Ke();
    ((e = zt(e, t)), e !== null && (er(e, t, n), et(e, n)));
  }
  function yf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), qa(e, n));
  }
  function gf(e, t) {
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
    (r !== null && r.delete(t), qa(e, n));
  }
  var Ka;
  Ka = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Xe.current) Je = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Je = !1), lf(e, t, n));
        Je = (e.flags & 131072) !== 0;
      }
    else ((Je = !1), _e && (t.flags & 1048576) !== 0 && ju(t, dl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Nl(e, t), (e = t.pendingProps));
        var l = zn(t, Ue.current);
        (Un(t, n), (l = ui(null, t, r, e, l, n)));
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
              (t = wi(null, t, r, !0, o, n)))
            : ((t.tag = 0), _e && o && Wo(t), qe(null, t, l, n), (t = t.child)),
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
            (l = t.tag = _f(r)),
            (e = _t(r, e)),
            l)
          ) {
            case 0:
              t = gi(null, t, r, e, n);
              break e;
            case 1:
              t = _a(null, t, r, e, n);
              break e;
            case 11:
              t = ha(null, t, r, e, n);
              break e;
            case 14:
              t = va(null, t, r, _t(r.type, e), n);
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
          gi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : _t(r, l)),
          _a(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Sa(t), e === null)) throw Error(s(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            Du(e, t),
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
              ((l = Qn(Error(s(423)), t)), (t = ka(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Qn(Error(s(424)), t)), (t = ka(e, t, r, n, l)));
              break e;
            } else
              for (
                ut = Gt(t.stateNode.containerInfo.firstChild),
                  st = t,
                  _e = !0,
                  wt = null,
                  n = zu(t, null, r, n),
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
          Bu(t),
          e === null && Ko(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          Bo(r, l) ? (i = null) : o !== null && Bo(r, o) && (t.flags |= 32),
          wa(e, t),
          qe(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Ko(t), null);
      case 13:
        return xa(e, t, n);
      case 4:
        return (
          ni(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = An(t, null, r, n)) : qe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : _t(r, l)),
          ha(e, t, r, l, n)
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
                        bo(o.return, n, t),
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
        return ((r = t.type), (l = _t(r, t.pendingProps)), (l = _t(r.type, l)), va(e, t, r, l, n));
      case 15:
        return ya(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : _t(r, l)),
          Nl(e, t),
          (t.tag = 1),
          Ze(r) ? ((e = !0), ul(t)) : (e = !1),
          Un(t, n),
          ua(t, r, l),
          hi(t, r, l, n),
          wi(null, t, r, !0, e, n)
        );
      case 19:
        return Ea(e, t, n);
      case 22:
        return ga(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Ya(e, t) {
    return Ts(e, t);
  }
  function wf(e, t, n, r) {
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
    return new wf(e, t, n, r);
  }
  function Bi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function _f(e) {
    if (typeof e == 'function') return Bi(e) ? 1 : 0;
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
    if (((r = e), typeof e == 'function')) Bi(e) && (i = 1);
    else if (typeof e == 'string') i = 5;
    else
      e: switch (e) {
        case U:
          return wn(n.children, l, o, t);
        case F:
          ((i = 8), (l |= 8));
          break;
        case rt:
          return ((e = ht(12, n, t, l | 2)), (e.elementType = rt), (e.lanes = o), e);
        case Ae:
          return ((e = ht(13, n, t, l)), (e.elementType = Ae), (e.lanes = o), e);
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
              case Ct:
                i = 9;
                break e;
              case Ge:
                i = 11;
                break e;
              case lt:
                i = 14;
                break e;
              case Be:
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
  function Ui(e, t, n) {
    return ((e = ht(6, e, null, t)), (e.lanes = n), e);
  }
  function $i(e, t, n) {
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
  function Sf(e, t, n, r, l) {
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
  function Qi(e, t, n, r, l, o, i, u, d) {
    return (
      (e = new Sf(e, t, n, u, d)),
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
      ti(o),
      e
    );
  }
  function kf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: j,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Xa(e) {
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
  function Za(e, t, n, r, l, o, i, u, d) {
    return (
      (e = Qi(n, r, !0, e, l, o, i, u, d)),
      (e.context = Xa(null)),
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
      (n = Xa(n)),
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
  function Ja(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Vi(e, t) {
    (Ja(e, t), (e = e.alternate) && Ja(e, t));
  }
  function xf() {
    return null;
  }
  var ba =
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
      if (t === null) throw Error(s(409));
      Bl(e, t, null, null);
    }),
    ($l.prototype.unmount = Hi.prototype.unmount =
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
      var t = Ds();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
      (Vt.splice(n, 0, e), n === 0 && Bs(e));
    }
  };
  function Wi(e) {
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
  function ec() {}
  function Cf(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var w = Ul(i);
          o.call(w);
        };
      }
      var i = Za(t, r, e, 0, null, !1, !1, '', ec);
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
    var d = Qi(e, 0, !1, null, null, !1, !1, '', ec);
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
  function Vl(e, t, n, r, l) {
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
  ((zs = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = bn(t.pendingLanes);
          n !== 0 && (ho(t, n | 1), et(t, Ne()), (se & 6) === 0 && ((Wn = Ne() + 500), Yt()));
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
    (vo = function (e) {
      if (e.tag === 13) {
        var t = zt(e, 134217728);
        if (t !== null) {
          var n = Ke();
          xt(t, e, 134217728, n);
        }
        Vi(e, 134217728);
      }
    }),
    (Ms = function (e) {
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
    (Ds = function () {
      return pe;
    }),
    (Fs = function (e, t) {
      var n = pe;
      try {
        return ((pe = e), t());
      } finally {
        pe = n;
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
                if (!l) throw Error(s(90));
                (ss(r), bl(r, l));
              }
            }
          }
          break;
        case 'textarea':
          fs(e, n);
          break;
        case 'select':
          ((t = n.value), t != null && kn(e, !!n.multiple, t, !1));
      }
    }),
    (Ss = Di),
    (ks = vn));
  var Ef = { usingClientEntryPoint: !1, Events: [yr, Rn, il, ws, _s, Di] },
    Or = {
      findFiberByHostInstance: un,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    Nf = {
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
        return ((e = Ns(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Or.findFiberByHostInstance || xf,
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
        (($r = Hl.inject(Nf)), (Et = Hl));
      } catch {}
  }
  return (
    (tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ef),
    (tt.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Wi(t)) throw Error(s(200));
      return kf(e, t, null, n);
    }),
    (tt.createRoot = function (e, t) {
      if (!Wi(e)) throw Error(s(299));
      var n = !1,
        r = '',
        l = ba;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Qi(e, 1, !1, null, null, n, !1, r, l)),
        (e[Pt] = t.current),
        mr(e.nodeType === 8 ? e.parentNode : e),
        new Hi(t)
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
      return ((e = Ns(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (tt.flushSync = function (e) {
      return vn(e);
    }),
    (tt.hydrate = function (e, t, n) {
      if (!Ql(t)) throw Error(s(200));
      return Vl(null, e, t, !0, n);
    }),
    (tt.hydrateRoot = function (e, t, n) {
      if (!Wi(e)) throw Error(s(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        i = ba;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Za(t, null, e, 1, n ?? null, l, !1, o, i)),
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
      return Vl(null, e, t, !1, n);
    }),
    (tt.unmountComponentAtNode = function (e) {
      if (!Ql(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (vn(function () {
            Vl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Pt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (tt.unstable_batchedUpdates = Di),
    (tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Ql(n)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Vl(e, t, n, !1, r);
    }),
    (tt.version = '18.3.1-next-f1338f8080-20240426'),
    tt
  );
}
var uc;
function Mf() {
  if (uc) return Ki.exports;
  uc = 1;
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
  return (c(), (Ki.exports = zf()), Ki.exports);
}
var ac;
function Df() {
  if (ac) return Wl;
  ac = 1;
  var c = Mf();
  return ((Wl.createRoot = c.createRoot), (Wl.hydrateRoot = c.hydrateRoot), Wl);
}
var Ff = Df();
const Af = [
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
  rs = { questions: Af },
  Bf = {
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
  Uf = { equal: 33, '10x': 33, '100x': 34 },
  ls = { causes: Bf, defaultCredences: Uf },
  $f = { resetButton: !1, sliderLock: !1 },
  mc = { ui: $f };
var Zi = { exports: {} },
  cc;
function Qf() {
  return (
    cc ||
      ((cc = 1),
      (function (c) {
        var a = (function () {
          var s = String.fromCharCode,
            S = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            C = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
            E = {};
          function T(m, y) {
            if (!E[m]) {
              E[m] = {};
              for (var k = 0; k < m.length; k++) E[m][m.charAt(k)] = k;
            }
            return E[m][y];
          }
          var x = {
            compressToBase64: function (m) {
              if (m == null) return '';
              var y = x._compress(m, 6, function (k) {
                return S.charAt(k);
              });
              switch (y.length % 4) {
                default:
                case 0:
                  return y;
                case 1:
                  return y + '===';
                case 2:
                  return y + '==';
                case 3:
                  return y + '=';
              }
            },
            decompressFromBase64: function (m) {
              return m == null
                ? ''
                : m == ''
                  ? null
                  : x._decompress(m.length, 32, function (y) {
                      return T(S, m.charAt(y));
                    });
            },
            compressToUTF16: function (m) {
              return m == null
                ? ''
                : x._compress(m, 15, function (y) {
                    return s(y + 32);
                  }) + ' ';
            },
            decompressFromUTF16: function (m) {
              return m == null
                ? ''
                : m == ''
                  ? null
                  : x._decompress(m.length, 16384, function (y) {
                      return m.charCodeAt(y) - 32;
                    });
            },
            compressToUint8Array: function (m) {
              for (
                var y = x.compress(m), k = new Uint8Array(y.length * 2), _ = 0, N = y.length;
                _ < N;
                _++
              ) {
                var H = y.charCodeAt(_);
                ((k[_ * 2] = H >>> 8), (k[_ * 2 + 1] = H % 256));
              }
              return k;
            },
            decompressFromUint8Array: function (m) {
              if (m == null) return x.decompress(m);
              for (var y = new Array(m.length / 2), k = 0, _ = y.length; k < _; k++)
                y[k] = m[k * 2] * 256 + m[k * 2 + 1];
              var N = [];
              return (
                y.forEach(function (H) {
                  N.push(s(H));
                }),
                x.decompress(N.join(''))
              );
            },
            compressToEncodedURIComponent: function (m) {
              return m == null
                ? ''
                : x._compress(m, 6, function (y) {
                    return C.charAt(y);
                  });
            },
            decompressFromEncodedURIComponent: function (m) {
              return m == null
                ? ''
                : m == ''
                  ? null
                  : ((m = m.replace(/ /g, '+')),
                    x._decompress(m.length, 32, function (y) {
                      return T(C, m.charAt(y));
                    }));
            },
            compress: function (m) {
              return x._compress(m, 16, function (y) {
                return s(y);
              });
            },
            _compress: function (m, y, k) {
              if (m == null) return '';
              var _,
                N,
                H = {},
                ee = {},
                W = '',
                B = '',
                K = '',
                le = 2,
                ne = 3,
                X = 2,
                Q = [],
                j = 0,
                U = 0,
                F;
              for (F = 0; F < m.length; F += 1)
                if (
                  ((W = m.charAt(F)),
                  Object.prototype.hasOwnProperty.call(H, W) || ((H[W] = ne++), (ee[W] = !0)),
                  (B = K + W),
                  Object.prototype.hasOwnProperty.call(H, B))
                )
                  K = B;
                else {
                  if (Object.prototype.hasOwnProperty.call(ee, K)) {
                    if (K.charCodeAt(0) < 256) {
                      for (_ = 0; _ < X; _++)
                        ((j = j << 1), U == y - 1 ? ((U = 0), Q.push(k(j)), (j = 0)) : U++);
                      for (N = K.charCodeAt(0), _ = 0; _ < 8; _++)
                        ((j = (j << 1) | (N & 1)),
                          U == y - 1 ? ((U = 0), Q.push(k(j)), (j = 0)) : U++,
                          (N = N >> 1));
                    } else {
                      for (N = 1, _ = 0; _ < X; _++)
                        ((j = (j << 1) | N),
                          U == y - 1 ? ((U = 0), Q.push(k(j)), (j = 0)) : U++,
                          (N = 0));
                      for (N = K.charCodeAt(0), _ = 0; _ < 16; _++)
                        ((j = (j << 1) | (N & 1)),
                          U == y - 1 ? ((U = 0), Q.push(k(j)), (j = 0)) : U++,
                          (N = N >> 1));
                    }
                    (le--, le == 0 && ((le = Math.pow(2, X)), X++), delete ee[K]);
                  } else
                    for (N = H[K], _ = 0; _ < X; _++)
                      ((j = (j << 1) | (N & 1)),
                        U == y - 1 ? ((U = 0), Q.push(k(j)), (j = 0)) : U++,
                        (N = N >> 1));
                  (le--, le == 0 && ((le = Math.pow(2, X)), X++), (H[B] = ne++), (K = String(W)));
                }
              if (K !== '') {
                if (Object.prototype.hasOwnProperty.call(ee, K)) {
                  if (K.charCodeAt(0) < 256) {
                    for (_ = 0; _ < X; _++)
                      ((j = j << 1), U == y - 1 ? ((U = 0), Q.push(k(j)), (j = 0)) : U++);
                    for (N = K.charCodeAt(0), _ = 0; _ < 8; _++)
                      ((j = (j << 1) | (N & 1)),
                        U == y - 1 ? ((U = 0), Q.push(k(j)), (j = 0)) : U++,
                        (N = N >> 1));
                  } else {
                    for (N = 1, _ = 0; _ < X; _++)
                      ((j = (j << 1) | N),
                        U == y - 1 ? ((U = 0), Q.push(k(j)), (j = 0)) : U++,
                        (N = 0));
                    for (N = K.charCodeAt(0), _ = 0; _ < 16; _++)
                      ((j = (j << 1) | (N & 1)),
                        U == y - 1 ? ((U = 0), Q.push(k(j)), (j = 0)) : U++,
                        (N = N >> 1));
                  }
                  (le--, le == 0 && ((le = Math.pow(2, X)), X++), delete ee[K]);
                } else
                  for (N = H[K], _ = 0; _ < X; _++)
                    ((j = (j << 1) | (N & 1)),
                      U == y - 1 ? ((U = 0), Q.push(k(j)), (j = 0)) : U++,
                      (N = N >> 1));
                (le--, le == 0 && ((le = Math.pow(2, X)), X++));
              }
              for (N = 2, _ = 0; _ < X; _++)
                ((j = (j << 1) | (N & 1)),
                  U == y - 1 ? ((U = 0), Q.push(k(j)), (j = 0)) : U++,
                  (N = N >> 1));
              for (;;)
                if (((j = j << 1), U == y - 1)) {
                  Q.push(k(j));
                  break;
                } else U++;
              return Q.join('');
            },
            decompress: function (m) {
              return m == null
                ? ''
                : m == ''
                  ? null
                  : x._decompress(m.length, 32768, function (y) {
                      return m.charCodeAt(y);
                    });
            },
            _decompress: function (m, y, k) {
              var _ = [],
                N = 4,
                H = 4,
                ee = 3,
                W = '',
                B = [],
                K,
                le,
                ne,
                X,
                Q,
                j,
                U,
                F = { val: k(0), position: y, index: 1 };
              for (K = 0; K < 3; K += 1) _[K] = K;
              for (ne = 0, Q = Math.pow(2, 2), j = 1; j != Q; )
                ((X = F.val & F.position),
                  (F.position >>= 1),
                  F.position == 0 && ((F.position = y), (F.val = k(F.index++))),
                  (ne |= (X > 0 ? 1 : 0) * j),
                  (j <<= 1));
              switch (ne) {
                case 0:
                  for (ne = 0, Q = Math.pow(2, 8), j = 1; j != Q; )
                    ((X = F.val & F.position),
                      (F.position >>= 1),
                      F.position == 0 && ((F.position = y), (F.val = k(F.index++))),
                      (ne |= (X > 0 ? 1 : 0) * j),
                      (j <<= 1));
                  U = s(ne);
                  break;
                case 1:
                  for (ne = 0, Q = Math.pow(2, 16), j = 1; j != Q; )
                    ((X = F.val & F.position),
                      (F.position >>= 1),
                      F.position == 0 && ((F.position = y), (F.val = k(F.index++))),
                      (ne |= (X > 0 ? 1 : 0) * j),
                      (j <<= 1));
                  U = s(ne);
                  break;
                case 2:
                  return '';
              }
              for (_[3] = U, le = U, B.push(U); ; ) {
                if (F.index > m) return '';
                for (ne = 0, Q = Math.pow(2, ee), j = 1; j != Q; )
                  ((X = F.val & F.position),
                    (F.position >>= 1),
                    F.position == 0 && ((F.position = y), (F.val = k(F.index++))),
                    (ne |= (X > 0 ? 1 : 0) * j),
                    (j <<= 1));
                switch ((U = ne)) {
                  case 0:
                    for (ne = 0, Q = Math.pow(2, 8), j = 1; j != Q; )
                      ((X = F.val & F.position),
                        (F.position >>= 1),
                        F.position == 0 && ((F.position = y), (F.val = k(F.index++))),
                        (ne |= (X > 0 ? 1 : 0) * j),
                        (j <<= 1));
                    ((_[H++] = s(ne)), (U = H - 1), N--);
                    break;
                  case 1:
                    for (ne = 0, Q = Math.pow(2, 16), j = 1; j != Q; )
                      ((X = F.val & F.position),
                        (F.position >>= 1),
                        F.position == 0 && ((F.position = y), (F.val = k(F.index++))),
                        (ne |= (X > 0 ? 1 : 0) * j),
                        (j <<= 1));
                    ((_[H++] = s(ne)), (U = H - 1), N--);
                    break;
                  case 2:
                    return B.join('');
                }
                if ((N == 0 && ((N = Math.pow(2, ee)), ee++), _[U])) W = _[U];
                else if (U === H) W = le + le.charAt(0);
                else return null;
                (B.push(W),
                  (_[H++] = le + W.charAt(0)),
                  N--,
                  (le = W),
                  N == 0 && ((N = Math.pow(2, ee)), ee++));
              }
            },
          };
          return x;
        })();
        c != null
          ? (c.exports = a)
          : typeof angular < 'u' &&
            angular != null &&
            angular.module('LZString', []).factory('LZString', function () {
              return a;
            });
      })(Zi)),
    Zi.exports
  );
}
var Vf = Qf();
const hc = Tf(Vf),
  { questions: Hf } = rs;
function Wf() {
  return Hf.filter((c) => c.type !== 'intermission' && c.options).map((c) => ({
    id: c.id,
    optionKeys: c.options.map((a) => a.key),
  }));
}
function Gf(c) {
  const a = [];
  for (const [S, C] of Object.entries(c)) {
    const E = Object.entries(C),
      T = E.find(([, x]) => x === 100);
    if (T) a.push(`${S}:${T[0]}`);
    else {
      const x = E.filter(([, m]) => m > 0)
        .map(([m, y]) => `${m}=${y}`)
        .join(',');
      a.push(`${S}:${x}`);
    }
  }
  const s = a.join('|');
  return hc.compressToEncodedURIComponent(s);
}
function qf(c) {
  try {
    const a = hc.decompressFromEncodedURIComponent(c);
    if (!a) return null;
    const s = {},
      S = a.split('|');
    for (const C of S) {
      const E = C.indexOf(':');
      if (E === -1) return null;
      const T = C.slice(0, E),
        x = C.slice(E + 1);
      if (x.includes('=')) {
        const m = x.split(',');
        s[T] = {};
        for (const y of m) {
          const [k, _] = y.split('=');
          if (!k || _ === void 0) return null;
          s[T][k] = parseInt(_, 10);
        }
      } else s[T] = { [x]: 100 };
    }
    return s;
  } catch {
    return null;
  }
}
function Kf(c) {
  if (!c || typeof c != 'object') return { valid: !1, message: 'Invalid data format' };
  const a = Wf(),
    s = new Set(a.map((x) => x.id));
  if (Object.keys(c).filter((x) => !s.has(x)).length > 0)
    return { valid: !1, message: 'Quiz has changed since this link was created' };
  if (a.filter((x) => !c[x.id]).length > 0)
    return { valid: !1, message: 'Quiz has changed since this link was created' };
  for (const x of a) {
    const m = c[x.id],
      y = new Set(x.optionKeys);
    if (Object.keys(m).some((H) => !y.has(H)))
      return { valid: !1, message: 'Quiz has changed since this link was created' };
    const N = Object.values(m).reduce((H, ee) => H + ee, 0);
    if (Math.abs(N - 100) > 1) return { valid: !1, message: 'Invalid credence values' };
  }
  const T = {};
  for (const x of a) {
    const m = c[x.id] || {};
    T[x.id] = {};
    for (const y of x.optionKeys) T[x.id][y] = m[y] || 0;
  }
  return { valid: !0, credences: T };
}
function Yf(c) {
  const a = Gf(c);
  return `${window.location.origin + window.location.pathname}#results=${a}`;
}
function Xf() {
  const c = window.location.hash;
  if (!c.startsWith('#results=')) return null;
  const a = c.slice(9);
  if (!a) return null;
  const s = qf(a);
  if (!s) return { error: "Couldn't restore your results from this link" };
  const S = Kf(s);
  return S.valid ? { credences: S.credences } : { error: S.message };
}
function dc() {
  window.location.hash &&
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
const fc = {
    default: ['#81B29A', '#98C1D9', '#E07A5F'],
    selection: ['#81B29A', '#98C1D9', '#E07A5F'],
    credence: ['#81B29A', '#98C1D9', '#E07A5F'],
  },
  Zf = '#81B29A',
  Jf = { OPTIONS: 'options' },
  nt = {
    DEFAULT: 'default',
    SELECTION: 'selection',
    CREDENCE: 'credence',
    INTERMISSION: 'intermission',
  },
  { causes: Kl } = ls;
function vc(c = !1) {
  return Object.fromEntries(
    rs.questions
      .filter((a) => a.type !== 'intermission' && a.worldviewDimension)
      .map((a) => [
        a.id,
        c ? { ...a.worldviewDimension, name: a.editPanelTitle } : a.worldviewDimension,
      ])
  );
}
const Yl = vc();
function* Xl(c) {
  const a = Object.keys(c);
  if (a.length === 0) return;
  const s = Object.keys(c[a[0]]);
  function* S(C, E) {
    if (C === a.length) {
      let x = 1;
      for (const m of a) x *= c[m][E[m]] / 100;
      yield { options: E, probability: x };
      return;
    }
    const T = a[C];
    for (const x of s) yield* S(C + 1, { ...E, [T]: x });
  }
  yield* S(0, {});
}
function bf(c, a, s) {
  let S = c.points;
  for (const [C, E] of Object.entries(s)) {
    const T = a[C],
      x = E.options[T];
    if (E.applyAs === 'multiplier') E.appliesWhen && c[E.appliesWhen] && (S *= x);
    else if (E.applyAs === 'exponent' && E.appliesTo) {
      const m = c[E.appliesTo] || 1;
      S *= Math.pow(m, x);
    }
  }
  return S;
}
function Zl(c, a, s) {
  const S = {};
  for (const [C, E] of Object.entries(a)) S[C] = bf(E, c, s);
  return S;
}
function yc(c) {
  const a = Math.max(...Object.values(c));
  return Object.keys(c).filter((s) => Math.abs(c[s] - a) < 1e-4);
}
function os(c) {
  return Object.fromEntries(Object.keys(c).map((a) => [a, 0]));
}
function ep(c, a) {
  const s = (a == null ? void 0 : a.causes) || Kl,
    S = (a == null ? void 0 : a.dimensions) || Yl,
    C = os(s);
  for (const { options: x, probability: m } of Xl(c)) {
    const y = Zl(x, s, S);
    for (const [k, _] of Object.entries(y)) C[k] += m * _;
  }
  const E = Object.keys(C).reduce((x, m) => (C[x] > C[m] ? x : m)),
    T = { evs: C };
  for (const x of Object.keys(s)) T[x] = x === E ? 100 : 0;
  return T;
}
function tp(c, a) {
  const s = (a == null ? void 0 : a.causes) || Kl,
    S = (a == null ? void 0 : a.dimensions) || Yl,
    C = os(s);
  for (const { options: T, probability: x } of Xl(c)) {
    const m = Zl(T, s, S),
      y = yc(m),
      k = x / y.length;
    for (const _ of y) C[_] += k;
  }
  const E = {};
  for (const T of Object.keys(s)) E[T] = C[T] * 100;
  return E;
}
function np(c, a) {
  const s = (a == null ? void 0 : a.causes) || Kl,
    S = (a == null ? void 0 : a.dimensions) || Yl,
    C = os(s);
  for (const { options: E, probability: T } of Xl(c)) {
    const x = Zl(E, s, S),
      m = yc(x),
      y = (T * 100) / m.length;
    for (const k of m) C[k] += y;
  }
  return C;
}
function rp(c, a) {
  const s = (a == null ? void 0 : a.causes) || Kl,
    S = (a == null ? void 0 : a.dimensions) || Yl,
    C = Object.keys(s),
    E = lp(C);
  let T = E[0],
    x = -1 / 0;
  for (const m of E) {
    let y = 1 / 0;
    for (const { options: k, probability: _ } of Xl(c)) {
      if (_ < 0.001) continue;
      const N = Zl(k, s, S);
      let H = 0;
      for (const ee of C) H += N[ee] * (m[ee] / 100);
      y = Math.min(y, H);
    }
    y > x && ((x = y), (T = { ...m }));
  }
  return T;
}
function lp(c) {
  const a = [],
    s = c.length,
    S = (m) => {
      const y = {};
      return (
        c.forEach((k, _) => {
          y[k] = m[_];
        }),
        y
      );
    };
  for (let m = 0; m < s; m++) {
    const y = new Array(s).fill(0);
    ((y[m] = 100), a.push(S(y)));
  }
  for (let m = 0; m < s; m++)
    for (let y = m + 1; y < s; y++) {
      const k = new Array(s).fill(0);
      ((k[m] = 50), (k[y] = 50), a.push(S(k)));
    }
  const C = Math.floor(100 / s),
    E = 100 - C * s,
    T = new Array(s).fill(C);
  ((T[0] += E), a.push(S(T)));
  const x = [
    [60, 20, 20],
    [70, 15, 15],
    [80, 10, 10],
  ];
  for (const m of x)
    if (m.length === s)
      for (let y = 0; y < s; y++) {
        const k = new Array(s).fill(0);
        k[y] = m[0];
        let _ = 1;
        for (let N = 0; N < s; N++) N !== y && _ < m.length && (k[N] = m[_++]);
        a.push(S(k));
      }
  return a;
}
function gc(c, a, s, S = null, C = null) {
  const E = C ? s[C] : 0,
    T = 100 - E;
  a = Math.max(0, Math.min(T, a));
  const x = S || s,
    m = Object.keys(s).filter((N) => N !== c && N !== C),
    y = m.reduce((N, H) => N + x[H], 0),
    k = 100 - a - E,
    _ = { [c]: a };
  if ((C && (_[C] = s[C]), y === 0)) {
    const N = Math.floor(k / m.length);
    let H = k - N * m.length;
    m.forEach((ee, W) => {
      _[ee] = N + (W < H ? 1 : 0);
    });
  } else {
    let N = 0;
    m.forEach((H, ee) => {
      if (ee === m.length - 1) _[H] = Math.max(0, k - N);
      else {
        const W = x[H] / y,
          B = k * W;
        ((_[H] = Math.max(0, B)), (N += _[H]));
      }
    });
  }
  return _;
}
function wc(c) {
  const a = Object.keys(c),
    s = {};
  let S = 0;
  return (
    a.slice(0, -1).forEach((C) => {
      ((s[C] = Math.round(c[C])), (S += s[C]));
    }),
    (s[a[a.length - 1]] = 100 - S),
    s
  );
}
const { questions: _c } = rs,
  { causes: op, defaultCredences: es } = ls,
  Fe = _c;
function Bt(c) {
  return (c == null ? void 0 : c.type) === nt.INTERMISSION;
}
function Ji(c, a) {
  let s = 0;
  for (let S = 0; S < a; S++) Bt(c[S]) || s++;
  return s;
}
function ip(c) {
  {
    const a = c.type || nt.DEFAULT;
    return fc[a] || fc[nt.DEFAULT];
  }
}
const sp = _c.filter((c) => !Bt(c)),
  bi = sp.length,
  pc = Fe.map((c) => {
    if (Bt(c)) return { ...c, type: nt.INTERMISSION };
    const a = ip(c);
    return {
      ...c,
      type: c.type || nt.DEFAULT,
      options: c.options.map((s, S) => ({ ...s, color: a[S] || a[0] })),
    };
  });
function Sc() {
  return { credences: { ...es }, originalCredences: null, inputMode: Jf.OPTIONS, lockedKey: null };
}
function kc() {
  return Object.fromEntries(Fe.filter((c) => !Bt(c)).map((c) => [c.id, Sc()]));
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
function up(c, a, s) {
  return { ...c, questions: { ...c.questions, [a]: { ...c.questions[a], ...s } } };
}
function ap(c, a) {
  switch (a.type) {
    case We.GO_TO_STEP:
      return { ...c, currentStep: a.payload };
    case We.UPDATE_QUESTION:
      return up(c, a.payload.questionId, a.payload.updates);
    case We.SET_EXPANDED_PANEL:
      return { ...c, expandedPanel: a.payload };
    case We.SAVE_ORIGINALS:
      return {
        ...c,
        questions: Object.fromEntries(
          Object.entries(c.questions).map(([s, S]) => [
            s,
            { ...S, originalCredences: S.originalCredences || { ...S.credences } },
          ])
        ),
      };
    case We.RESET_TO_ORIGINAL:
      return {
        ...c,
        questions: Object.fromEntries(
          Object.entries(c.questions).map(([s, S]) => [
            s,
            { ...S, credences: S.originalCredences ? { ...S.originalCredences } : S.credences },
          ])
        ),
      };
    case We.RESET_QUIZ:
      return { ...xc, questions: kc() };
    case We.RESTORE_FROM_URL: {
      const { credences: s } = a.payload,
        S = {};
      for (const [C, E] of Object.entries(s))
        S[C] = { ...Sc(), credences: E, originalCredences: { ...E } };
      return { ...c, currentStep: 'results', questions: S };
    }
    case We.SET_DEBUG_CONFIG:
      return { ...c, debugConfig: a.payload };
    default:
      return c;
  }
}
const Cc = b.createContext(null);
function cp({ children: c }) {
  const [a, s] = b.useReducer(ap, xc),
    [S, C] = b.useState(null);
  b.useEffect(() => {
    const D = Xf();
    if (D) {
      if (D.error) {
        (C(D.error), dc(), window.setTimeout(() => C(null), 5e3));
        return;
      }
      D.credences && (s({ type: We.RESTORE_FROM_URL, payload: { credences: D.credences } }), dc());
    }
  }, []);
  const E = b.useCallback((D) => {
      s({ type: We.GO_TO_STEP, payload: D });
    }, []),
    T = b.useCallback((D, L) => {
      s({ type: We.UPDATE_QUESTION, payload: { questionId: D, updates: L } });
    }, []),
    x = b.useCallback((D, L) => T(D, { credences: L }), [T]),
    m = b.useCallback((D, L) => T(D, { inputMode: L }), [T]),
    y = b.useCallback((D, L) => T(D, { lockedKey: L }), [T]),
    k = b.useCallback((D) => {
      s({ type: We.SET_EXPANDED_PANEL, payload: D });
    }, []),
    _ = b.useCallback(() => {
      s({ type: We.SAVE_ORIGINALS });
    }, []),
    N = b.useCallback(() => {
      s({ type: We.RESET_TO_ORIGINAL });
    }, []),
    H = b.useCallback(() => {
      s({ type: We.RESET_QUIZ });
    }, []),
    ee = b.useCallback((D) => {
      s({ type: We.SET_DEBUG_CONFIG, payload: D });
    }, []),
    W = b.useCallback((D) => Fe.findIndex((L) => L.id === D), []),
    B = b.useCallback(
      (D) => {
        const L = W(D);
        return L === 0 ? 'welcome' : Fe[L - 1].id;
      },
      [W]
    ),
    K = b.useCallback(
      (D) => {
        const L = W(D);
        return L === Fe.length - 1 ? 'results' : Fe[L + 1].id;
      },
      [W]
    ),
    le = b.useCallback(() => {
      E(Fe[0].id);
    }, [E]),
    ne = b.useCallback(() => {
      a.currentStep === 'results' ? E(Fe[Fe.length - 1].id) : E(B(a.currentStep));
    }, [a.currentStep, E, B]),
    X = b.useCallback(() => {
      const D = K(a.currentStep);
      (D === 'results' && _(), E(D));
    }, [a.currentStep, E, K, _]),
    Q = b.useCallback(
      (D) => {
        var h;
        const L = D === 'original' ? 'originalCredences' : 'credences',
          Y = Fe.filter((P) => !Bt(P)),
          M = a.questions[(h = Y[0]) == null ? void 0 : h.id];
        return D === 'original' && !(M != null && M.originalCredences)
          ? null
          : Object.fromEntries(
              Y.map((P) => {
                var re;
                return [P.id, ((re = a.questions[P.id]) == null ? void 0 : re[L]) || es];
              })
            );
      },
      [a.questions]
    ),
    j = b.useCallback(
      (D, L) =>
        D
          ? { maxEV: ep(D, L), parliament: tp(D, L), mergedFavorites: np(D, L), maximin: rp(D, L) }
          : null,
      []
    ),
    U = b.useMemo(() => j(Q('current'), a.debugConfig), [Q, j, a.debugConfig]),
    F = b.useMemo(() => j(Q('original'), a.debugConfig), [Q, j, a.debugConfig]),
    rt = b.useMemo(
      () =>
        Object.values(a.questions).some(
          (D) =>
            D.originalCredences &&
            JSON.stringify(D.credences) !== JSON.stringify(D.originalCredences)
        ),
      [a.questions]
    ),
    me = b.useMemo(() => W(a.currentStep), [a.currentStep, W]),
    Ct = b.useMemo(() => (me === -1 ? null : pc[me]), [me]),
    Ge = b.useMemo(() => {
      if (me === -1) return -1;
      const D = Fe[me],
        L = Ji(Fe, me);
      return Bt(D) ? L : L + 1;
    }, [me]),
    Ae = b.useMemo(() => {
      if (me === -1) return 0;
      const D = Fe[me];
      return ((Bt(D) ? Ji(Fe, me) : Ge) / bi) * 100;
    }, [me, Ge]),
    Ye = b.useMemo(() => {
      if (me === -1) return '';
      const D = Fe[me];
      return `Question ${Bt(D) ? Ji(Fe, me) : Ge} of ${bi}`;
    }, [me, Ge]),
    lt = b.useMemo(() => {
      const D = {};
      return (
        Fe.filter((L) => !Bt(L)).forEach((L) => {
          const Y = a.questions[L.id];
          Y &&
            (D[L.id] = {
              credences: Y.credences,
              setCredences: (M) => x(L.id, M),
              originalCredences: Y.originalCredences,
              inputMode: Y.inputMode,
              setInputMode: (M) => m(L.id, M),
              lockedKey: Y.lockedKey,
              setLockedKey: (M) => y(L.id, M),
            });
        }),
        D
      );
    }, [a.questions, x, m, y]),
    Be = b.useMemo(
      () => ({
        currentStep: a.currentStep,
        questions: a.questions,
        expandedPanel: a.expandedPanel,
        debugConfig: a.debugConfig,
        shareUrlError: S,
        questionsConfig: pc,
        causesConfig: op,
        defaultCredences: es,
        goToStep: E,
        setCredences: x,
        setInputMode: m,
        setLockedKey: y,
        setExpandedPanel: k,
        saveOriginals: _,
        resetToOriginal: N,
        resetQuiz: H,
        setDebugConfig: ee,
        getQuestionIndex: W,
        getPrevStep: B,
        getNextStep: K,
        startQuiz: le,
        goBack: ne,
        goForward: X,
        currentQuestion: Ct,
        currentQuestionIndex: me,
        totalQuestions: bi,
        progressPercentage: Ae,
        questionNumber: Ye,
        hasChanged: rt,
        calculationResults: U,
        originalCalculationResults: F,
        stateMap: lt,
      }),
      [
        a.currentStep,
        a.questions,
        a.expandedPanel,
        a.debugConfig,
        S,
        E,
        x,
        m,
        y,
        k,
        _,
        N,
        H,
        ee,
        W,
        B,
        K,
        le,
        ne,
        X,
        Ct,
        me,
        Ae,
        Ye,
        rt,
        U,
        F,
        lt,
      ]
    );
  return f.jsx(Cc.Provider, { value: Be, children: c });
}
const dp = { title: 'Moral Parliament' },
  fp = {
    timeEstimate: '~3 minutes',
    headingLine1: 'Where Should Your',
    headingLine2: 'Giving Go?',
    intro:
      'Uncertain about your ethical views? This tool helps you allocate resources across different causes based on your moral credences—the probabilities you assign to different ethical perspectives.',
    startButton: 'Start Quiz →',
    previewLabel: "You'll be asked about:",
  },
  pp = { back: '← Back', continue: 'Continue →', backToQuiz: '← Back to Quiz' },
  mp = { modeToggle: { pickOne: 'Pick One', customMix: 'Custom Mix' } },
  hp = {
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
  vp = {
    modifiedBadge: 'modified',
    sliderNote: 'Sliders auto-balance to 100%',
    resetButton: 'Reset',
  },
  yp = { lockTooltip: 'Lock slider', unlockTooltip: 'Unlock slider' },
  de = {
    branding: dp,
    welcome: fp,
    navigation: pp,
    questionScreen: mp,
    results: hp,
    editPanel: vp,
    sliders: yp,
  },
  is = ({ subtitle: c }) =>
    f.jsxs('header', {
      className: 'header',
      children: [
        f.jsx('div', { className: 'header-title', children: de.branding.title }),
        c && f.jsx('div', { className: 'header-subtitle', children: c }),
      ],
    });
function zr() {
  const c = b.useContext(Cc);
  if (!c) throw new Error('useQuiz must be used within a QuizProvider');
  return c;
}
const gp = '_container_11wow_3',
  wp = '_heading_11wow_8',
  _p = '_headingEmphasis_11wow_16',
  Sp = '_intro_11wow_24',
  kp = '_infoBox_11wow_32',
  xp = '_infoBoxLabel_11wow_40',
  Cp = '_infoBoxGrid_11wow_47',
  Ep = '_infoBoxItem_11wow_54',
  on = {
    container: gp,
    heading: wp,
    headingEmphasis: _p,
    intro: Sp,
    infoBox: kp,
    infoBoxLabel: xp,
    infoBoxGrid: Cp,
    infoBoxItem: Ep,
  };
function Np() {
  const { questionsConfig: c, startQuiz: a } = zr(),
    s = c.filter((S) => S.type !== nt.INTERMISSION);
  return f.jsxs('div', {
    className: 'screen',
    children: [
      f.jsx(is, { subtitle: de.welcome.timeEstimate }),
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
                  children: s.map((S) =>
                    f.jsxs(
                      'div',
                      { className: on.infoBoxItem, children: [S.emoji, ' ', S.previewText] },
                      S.id
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
const Ec = ({ percentage: c }) =>
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
 */ const jp = (c) => c.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  Nc = (...c) =>
    c
      .filter((a, s, S) => !!a && a.trim() !== '' && S.indexOf(a) === s)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Tp = {
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
 */ const Lp = b.forwardRef(
  (
    {
      color: c = 'currentColor',
      size: a = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: S,
      className: C = '',
      children: E,
      iconNode: T,
      ...x
    },
    m
  ) =>
    b.createElement(
      'svg',
      {
        ref: m,
        ...Tp,
        width: a,
        height: a,
        stroke: c,
        strokeWidth: S ? (Number(s) * 24) / Number(a) : s,
        className: Nc('lucide', C),
        ...x,
      },
      [...T.map(([y, k]) => b.createElement(y, k)), ...(Array.isArray(E) ? E : [E])]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sn = (c, a) => {
  const s = b.forwardRef(({ className: S, ...C }, E) =>
    b.createElement(Lp, { ref: E, iconNode: a, className: Nc(`lucide-${jp(c)}`, S), ...C })
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
 */ const Pp = Sn('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Op = Sn('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
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
 */ const ts = Sn('RotateCcw', [
  ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
  ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rp = Sn('Share2', [
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
 */ const Ip = Sn('SlidersVertical', [
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
  zp = '_modeToggle_modhv_3',
  Mp = '_button_modhv_10',
  Dp = '_options_modhv_23',
  Fp = '_active_modhv_29',
  Ap = '_sliders_modhv_35',
  _n = { modeToggle: zp, button: Mp, options: Dp, active: Fp, sliders: Ap },
  Bp = ({ mode: c, setMode: a }) =>
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
          children: [f.jsx(Ip, { size: 14 }), de.questionScreen.modeToggle.customMix],
        }),
      ],
    }),
  Up = '_optionButton_xv4xt_3',
  $p = '_selected_xv4xt_20',
  Qp = '_content_xv4xt_34',
  Vp = '_textContent_xv4xt_40',
  Hp = '_label_xv4xt_44',
  Wp = '_description_xv4xt_56',
  Gp = '_checkmark_xv4xt_62',
  At = {
    optionButton: Up,
    default: '_default_xv4xt_15',
    selected: $p,
    content: Qp,
    textContent: Vp,
    label: Hp,
    description: Wp,
    checkmark: Gp,
  };
function qp({
  label: c,
  description: a,
  optionKey: s,
  credences: S,
  setCredences: C,
  color: E,
  setInputMode: T,
}) {
  const x = S[s] === 100,
    m = () => {
      const y = Object.fromEntries(Object.keys(S).map((k) => [k, k === s ? 100 : 0]));
      (C(y), T('options'));
    };
  return f.jsx('button', {
    onClick: m,
    className: `${At.optionButton} ${x ? At.selected : At.default}`,
    style: { '--option-color': E },
    children: f.jsxs('div', {
      className: At.content,
      children: [
        f.jsxs('div', {
          className: At.textContent,
          children: [
            f.jsx('div', { className: `${At.label} ${x ? At.selected : ''}`, children: c }),
            f.jsx('div', { className: At.description, children: a }),
          ],
        }),
        x && f.jsx('div', { className: At.checkmark, children: '✓' }),
      ],
    }),
  });
}
function Lc({ credences: c, isLocked: a, lockedKey: s, onChange: S }) {
  const [C, E] = b.useState(null),
    [T, x] = b.useState(!1),
    m = b.useCallback(() => {
      a || (x(!0), E({ ...c }));
    }, [a, c]),
    y = b.useCallback(
      (_) => {
        if (a || !T) return;
        x(!1);
        const N = parseFloat(_.target.value);
        (S(N, C, !0, s), E(null));
      },
      [a, T, C, s, S]
    ),
    k = b.useCallback(
      (_) => {
        if (a) return;
        const N = parseFloat(_.target.value);
        S(N, C, !1, s);
      },
      [a, C, s, S]
    );
  return {
    isDragging: T,
    dragHandlers: {
      onChange: k,
      onMouseDown: m,
      onMouseUp: y,
      onMouseLeave: y,
      onTouchStart: m,
      onTouchEnd: y,
    },
  };
}
function Pc({ sliderKey: c, lockedKey: a, credences: s }) {
  return b.useMemo(() => {
    var m;
    const S = a === c,
      C = a && a !== c,
      E = C ? s[a] : 0,
      T = C ? 100 - E : 100,
      x = C ? `calc(${T}% + ${(50 - T) * 0.16}px)` : null;
    return {
      isLocked: S,
      hasLockedSibling: C,
      lockedValue: E,
      maxAllowed: T,
      thumbOffset: x,
      featureEnabled: ((m = mc.ui) == null ? void 0 : m.sliderLock) === !0,
    };
  }, [c, a, s]);
}
const Kp = '_credenceSlider_yrqg7_4',
  Yp = '_header_yrqg7_8',
  Xp = '_label_yrqg7_15',
  Zp = '_description_yrqg7_22',
  Jp = '_value_yrqg7_28',
  bp = '_sliderRow_yrqg7_35',
  em = '_sliderContainer_yrqg7_41',
  tm = '_lockLimit_yrqg7_46',
  nm = '_lockButton_yrqg7_55',
  rm = '_locked_yrqg7_73',
  lm = '_compactSlider_yrqg7_91',
  om = '_compactSelection_yrqg7_168',
  im = '_selected_yrqg7_186',
  sm = '_selectionLabel_yrqg7_191',
  um = '_selectionIndicator_yrqg7_202',
  Ce = {
    credenceSlider: Kp,
    header: Yp,
    label: Xp,
    description: Zp,
    value: Jp,
    sliderRow: bp,
    sliderContainer: em,
    lockLimit: tm,
    lockButton: nm,
    locked: rm,
    compactSlider: lm,
    compactSelection: om,
    selected: im,
    selectionLabel: sm,
    selectionIndicator: um,
  };
function am({
  label: c,
  description: a,
  value: s,
  onChange: S,
  color: C,
  credences: E,
  sliderKey: T,
  lockedKey: x,
  setLockedKey: m,
}) {
  const {
      isLocked: y,
      hasLockedSibling: k,
      thumbOffset: _,
      featureEnabled: N,
    } = Pc({ sliderKey: T, lockedKey: x, credences: E }),
    { isDragging: H, dragHandlers: ee } = Lc({
      credences: E,
      isLocked: y,
      lockedKey: x,
      onChange: S,
    }),
    W = () => {
      N && m(x === T ? null : T);
    },
    B = k
      ? `linear-gradient(to right, ${C} 0%, ${C} ${s}%, rgba(255,255,255,0.15) ${s}%, rgba(255,255,255,0.15) ${_}, rgba(255,255,255,0.08) ${_}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${C} 0%, ${C} ${s}%, rgba(255,255,255,0.15) ${s}%, rgba(255,255,255,0.15) 100%)`;
  return f.jsxs('div', {
    className: Ce.credenceSlider,
    children: [
      f.jsxs('div', {
        className: Ce.header,
        children: [
          f.jsxs('div', {
            children: [
              f.jsx('div', { className: Ce.label, children: c }),
              f.jsx('div', { className: Ce.description, children: a }),
            ],
          }),
          f.jsxs('div', {
            className: Ce.value,
            style: { color: C },
            children: [Math.round(s), '%'],
          }),
        ],
      }),
      f.jsxs('div', {
        className: Ce.sliderRow,
        children: [
          f.jsxs('div', {
            className: Ce.sliderContainer,
            children: [
              f.jsx('input', {
                type: 'range',
                min: '0',
                max: '100',
                step: 'any',
                value: s,
                ...ee,
                'data-dragging': H,
                disabled: y,
                style: { background: B, cursor: y ? 'not-allowed' : 'pointer' },
              }),
              k && f.jsx('div', { className: Ce.lockLimit, style: { left: _ } }),
            ],
          }),
          N &&
            f.jsx('button', {
              className: `${Ce.lockButton} ${y ? Ce.locked : ''}`,
              onClick: W,
              title: y ? de.sliders.unlockTooltip : de.sliders.lockTooltip,
              type: 'button',
              children: f.jsx(Tc, { size: 16 }),
            }),
        ],
      }),
    ],
  });
}
const cm = '_container_9yo3m_3',
  dm = '_categoryLabel_9yo3m_8',
  fm = '_heading_9yo3m_16',
  pm = '_instructions_9yo3m_23',
  mm = '_buttonRow_9yo3m_30',
  Ir = { container: cm, categoryLabel: dm, heading: fm, instructions: pm, buttonRow: mm };
function hm(c, a, s) {
  return c === nt.SELECTION ? 'options' : c === nt.CREDENCE ? 'sliders' : a;
}
function vm() {
  const {
    currentQuestion: c,
    stateMap: a,
    questionNumber: s,
    progressPercentage: S,
    goBack: C,
    goForward: E,
  } = zr();
  if (!c) return null;
  const T = a[c.id];
  if (!T) return null;
  const {
      credences: x,
      setCredences: m,
      inputMode: y,
      setInputMode: k,
      lockedKey: _,
      setLockedKey: N,
    } = T,
    H = c.type || nt.DEFAULT,
    ee = H === nt.DEFAULT,
    W = hm(H, y),
    B = W === 'options' ? c.instructionsOptions : c.instructionsSliders;
  return f.jsxs('div', {
    className: 'screen',
    children: [
      f.jsx(is, { subtitle: s }),
      f.jsx(Ec, { percentage: S }),
      f.jsx('main', {
        className: 'screen-main',
        children: f.jsxs('div', {
          className: Ir.container,
          children: [
            f.jsx('div', {
              className: Ir.categoryLabel,
              style: { color: Zf },
              children: c.categoryLabel,
            }),
            f.jsx('h2', { className: Ir.heading, children: c.heading }),
            f.jsx('p', { className: Ir.instructions, children: B }),
            ee && f.jsx(Bp, { mode: y, setMode: k }),
            f.jsx('div', {
              className: 'card',
              children:
                W === 'options'
                  ? c.options.map((K) =>
                      f.jsx(
                        qp,
                        {
                          label: K.label,
                          description: K.description,
                          optionKey: K.key,
                          credences: x,
                          setCredences: m,
                          color: K.color,
                          setInputMode: k,
                        },
                        K.key
                      )
                    )
                  : c.options.map((K) =>
                      f.jsx(
                        am,
                        {
                          label: K.label,
                          description: K.description,
                          value: x[K.key],
                          onChange: (le, ne, X, Q) => {
                            const j = gc(K.key, le, x, ne, Q);
                            m(X ? wc(j) : j);
                          },
                          color: K.color,
                          credences: x,
                          sliderKey: K.key,
                          lockedKey: _,
                          setLockedKey: N,
                        },
                        K.key
                      )
                    ),
            }),
            f.jsxs('div', {
              className: Ir.buttonRow,
              children: [
                f.jsx('button', {
                  onClick: C,
                  className: 'btn btn-secondary',
                  children: de.navigation.back,
                }),
                f.jsx('button', {
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
const ym = '_causeBar_1uovs_3',
  gm = '_header_1uovs_7',
  wm = '_name_1uovs_15',
  _m = '_percentage_1uovs_19',
  Sm = '_changeIndicator_1uovs_23',
  km = '_up_1uovs_27',
  xm = '_down_1uovs_31',
  Cm = '_barTrack_1uovs_35',
  Em = '_barOriginal_1uovs_43',
  Nm = '_barFill_1uovs_49',
  jm = '_barLabel_1uovs_58',
  Tm = '_compact_1uovs_65',
  vt = {
    causeBar: ym,
    header: gm,
    name: wm,
    percentage: _m,
    changeIndicator: Sm,
    up: km,
    down: xm,
    barTrack: Cm,
    barOriginal: Em,
    barFill: Nm,
    barLabel: jm,
    compact: Tm,
  },
  Lm = ({
    name: c,
    percentage: a,
    color: s,
    originalPercentage: S = null,
    hasChanged: C = !1,
    simpleMode: E = !1,
  }) => {
    const T = !E && C && S !== null && a !== S,
      x = T && a > S;
    return f.jsxs('div', {
      className: `${vt.causeBar} ${E ? vt.compact : ''}`,
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
                T &&
                  f.jsx('span', {
                    className: `${vt.changeIndicator} ${x ? vt.up : vt.down}`,
                    children: x ? '↑' : '↓',
                  }),
              ],
            }),
          ],
        }),
        f.jsxs('div', {
          className: vt.barTrack,
          children: [
            T &&
              f.jsx('div', { className: vt.barOriginal, style: { width: `${S}%`, background: s } }),
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
  Pm = '_resultsContainer_4lp8i_3',
  Om = '_inner_4lp8i_11',
  Rm = '_header_4lp8i_16',
  Im = '_title_4lp8i_21',
  zm = '_modifiedIndicator_4lp8i_27',
  Mm = '_resultsGrid_4lp8i_34',
  Dm = '_comparisonContainer_4lp8i_42',
  Fm = '_originalResults_4lp8i_49',
  Am = '_newResults_4lp8i_50',
  Bm = '_slideInLeft_4lp8i_1',
  Um = '_slideInRight_4lp8i_1',
  $m = '_comparisonDivider_4lp8i_85',
  Qm = '_dividerLine_4lp8i_94',
  Vm = '_dividerArrow_4lp8i_101',
  Hm = '_compactGrid_4lp8i_108',
  Wm = '_compactCard_4lp8i_114',
  Gm = '_cardHeader_4lp8i_118',
  qm = '_cardIcon_4lp8i_122',
  Km = '_cardTitle_4lp8i_128',
  Ym = '_resultCard_4lp8i_132',
  Xm = '_maxEV_4lp8i_156',
  Zm = '_parliament_4lp8i_160',
  Jm = '_cardSubtitle_4lp8i_171',
  bm = '_cardFooter_4lp8i_177',
  eh = '_adjustPanel_4lp8i_185',
  th = '_adjustHeader_4lp8i_193',
  nh = '_adjustTitle_4lp8i_200',
  rh = '_resetAllButton_4lp8i_206',
  lh = '_panelList_4lp8i_223',
  oh = '_backButtonContainer_4lp8i_229',
  ih = '_backButton_4lp8i_229',
  sh = '_resetButton_4lp8i_254',
  uh = '_shareButton_4lp8i_272',
  ah = '_copied_4lp8i_293',
  Se = {
    resultsContainer: Pm,
    inner: Om,
    header: Rm,
    title: Im,
    modifiedIndicator: zm,
    resultsGrid: Mm,
    comparisonContainer: Dm,
    originalResults: Fm,
    newResults: Am,
    slideInLeft: Bm,
    slideInRight: Um,
    comparisonDivider: $m,
    dividerLine: Qm,
    dividerArrow: Vm,
    compactGrid: Hm,
    compactCard: Wm,
    cardHeader: Gm,
    cardIcon: qm,
    cardTitle: Km,
    resultCard: Ym,
    maxEV: Xm,
    parliament: Zm,
    cardSubtitle: Jm,
    cardFooter: bm,
    adjustPanel: eh,
    adjustHeader: th,
    adjustTitle: nh,
    resetAllButton: rh,
    panelList: lh,
    backButtonContainer: oh,
    backButton: ih,
    resetButton: sh,
    shareButton: uh,
    copied: ah,
  };
function ql({
  methodKey: c,
  results: a,
  evs: s = null,
  originalResults: S = null,
  causeEntries: C,
  hasChanged: E = !1,
  simpleMode: T = !1,
}) {
  const x = de.results.methods[c],
    m = c === 'mergedFavorites' ? 'merged' : c,
    y = s
      ? `${x.footerLabel} ${C.map(([k, _]) => `${_.name.slice(0, 2)} ${s[k].toFixed(0)}`).join(' · ')}`
      : x.footerText;
  return f.jsxs('div', {
    className: `${Se.resultCard} ${T ? Se.compactCard : ''}`,
    children: [
      f.jsxs('div', {
        className: Se.cardHeader,
        children: [
          f.jsx('div', { className: `${Se.cardIcon} ${Se[m]}`, children: x.icon }),
          f.jsxs('div', {
            children: [
              f.jsx('h3', { className: Se.cardTitle, children: x.title }),
              !T && f.jsx('p', { className: Se.cardSubtitle, children: x.subtitle }),
            ],
          }),
        ],
      }),
      C.map(([k, _]) =>
        f.jsx(
          Lm,
          {
            name: _.name,
            percentage: a[k],
            originalPercentage: S == null ? void 0 : S[k],
            color: _.color,
            hasChanged: !T && E,
            simpleMode: T,
          },
          k
        )
      ),
      !T && f.jsx('div', { className: Se.cardFooter, children: y }),
    ],
  });
}
const ch = '_container_1m8cr_3',
  dh = '_title_1m8cr_8',
  fh = '_body_1m8cr_16',
  ph = '_buttonRow_1m8cr_25',
  Gl = { container: ch, title: dh, body: fh, buttonRow: ph };
function mh() {
  const {
    currentQuestion: c,
    questionNumber: a,
    progressPercentage: s,
    calculationResults: S,
    causesConfig: C,
    goBack: E,
    goForward: T,
  } = zr();
  if (!c) return null;
  const { maxEV: x, mergedFavorites: m } = S,
    y = Object.entries(C);
  return f.jsxs('div', {
    className: 'screen',
    children: [
      f.jsx(is, { subtitle: a }),
      f.jsx(Ec, { percentage: s }),
      f.jsx('main', {
        className: 'screen-main',
        children: f.jsxs('div', {
          className: Gl.container,
          children: [
            f.jsx('h2', { className: Gl.title, children: c.title }),
            f.jsx('p', { className: Gl.body, children: c.body }),
            f.jsxs('div', {
              className: Se.resultsGrid,
              children: [
                f.jsx(ql, { methodKey: 'maxEV', results: x, evs: x.evs, causeEntries: y }),
                f.jsx(ql, { methodKey: 'mergedFavorites', results: m, causeEntries: y }),
              ],
            }),
            f.jsxs('div', {
              className: Gl.buttonRow,
              children: [
                f.jsx('button', {
                  onClick: E,
                  className: 'btn btn-secondary',
                  children: de.navigation.back,
                }),
                f.jsx('button', {
                  onClick: T,
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
function hh({
  label: c,
  value: a,
  onChange: s,
  color: S,
  credences: C,
  sliderKey: E,
  lockedKey: T,
  setLockedKey: x,
}) {
  const {
      isLocked: m,
      hasLockedSibling: y,
      thumbOffset: k,
      featureEnabled: _,
    } = Pc({ sliderKey: E, lockedKey: T, credences: C }),
    { isDragging: N, dragHandlers: H } = Lc({
      credences: C,
      isLocked: m,
      lockedKey: T,
      onChange: s,
    }),
    ee = () => {
      _ && x(T === E ? null : E);
    },
    W = y
      ? `linear-gradient(to right, ${S} 0%, ${S} ${a}%, rgb(51,65,85) ${a}%, rgb(51,65,85) ${k}, rgb(30,41,59) ${k}, rgb(30,41,59) 100%)`
      : `linear-gradient(to right, ${S} 0%, ${S} ${a}%, rgb(51,65,85) ${a}%, rgb(51,65,85) 100%)`;
  return f.jsxs('div', {
    className: Ce.compactSlider,
    children: [
      f.jsxs('div', {
        className: Ce.header,
        children: [
          f.jsx('span', { className: Ce.label, children: c }),
          f.jsxs('span', {
            className: Ce.value,
            style: { color: S },
            children: [Math.round(a), '%'],
          }),
        ],
      }),
      f.jsxs('div', {
        className: Ce.sliderRow,
        children: [
          f.jsxs('div', {
            className: Ce.sliderContainer,
            children: [
              f.jsx('input', {
                type: 'range',
                min: '0',
                max: '100',
                step: 'any',
                value: a,
                ...H,
                'data-dragging': N,
                disabled: m,
                style: { background: W, cursor: m ? 'not-allowed' : 'pointer' },
              }),
              y && f.jsx('div', { className: Ce.lockLimit, style: { left: k } }),
            ],
          }),
          _ &&
            f.jsx('button', {
              className: `${Ce.lockButton} ${m ? Ce.locked : ''}`,
              onClick: ee,
              title: m ? de.sliders.unlockTooltip : de.sliders.lockTooltip,
              type: 'button',
              children: f.jsx(Tc, { size: 14 }),
            }),
        ],
      }),
    ],
  });
}
function vh({ label: c, color: a, isSelected: s, onSelect: S }) {
  return f.jsxs('button', {
    type: 'button',
    onClick: S,
    className: `${Ce.compactSelection} ${s ? Ce.selected : ''}`,
    style: { '--selection-color': a },
    children: [
      f.jsx('span', { className: Ce.selectionLabel, children: c }),
      f.jsx('span', {
        className: Ce.selectionIndicator,
        style: { borderColor: s ? a : void 0, backgroundColor: s ? a : void 0 },
        children: s && f.jsx(jc, { size: 12, strokeWidth: 3 }),
      }),
    ],
  });
}
const yh = '_editPanel_9crrd_3',
  gh = '_expanded_9crrd_11',
  wh = '_toggleButton_9crrd_16',
  _h = '_buttonContent_9crrd_33',
  Sh = '_icon_9crrd_39',
  kh = '_title_9crrd_43',
  xh = '_modifiedBadge_9crrd_48',
  Ch = '_preview_9crrd_56',
  Eh = '_chevron_9crrd_62',
  Nh = '_content_9crrd_66',
  jh = '_footer_9crrd_71',
  Th = '_footerNote_9crrd_78',
  Lh = '_resetButton_9crrd_84',
  Ph = '_selectionRow_9crrd_103',
  De = {
    editPanel: yh,
    expanded: gh,
    toggleButton: wh,
    buttonContent: _h,
    icon: Sh,
    title: kh,
    modifiedBadge: xh,
    preview: Ch,
    chevron: Eh,
    content: Nh,
    footer: jh,
    footerNote: Th,
    resetButton: Lh,
    selectionRow: Ph,
  };
function Oh({
  title: c,
  icon: a,
  credences: s,
  setCredences: S,
  originalCredences: C,
  configs: E,
  isExpanded: T,
  onToggle: x,
  lockedKey: m,
  setLockedKey: y,
  questionType: k = nt.DEFAULT,
}) {
  const _ = C && JSON.stringify(s) !== JSON.stringify(C),
    N = k === nt.SELECTION,
    H = (B) => {
      const K = {};
      (E.forEach((le) => {
        K[le.key] = le.key === B ? 100 : 0;
      }),
        S(K));
    },
    ee = (B) => {
      (B.stopPropagation(), S({ ...C }));
    },
    W = E.map((B) => `${B.short}:${s[B.key]}%`).join(' ');
  return f.jsxs('div', {
    className: `${De.editPanel} ${T ? De.expanded : ''}`,
    children: [
      f.jsxs('button', {
        onClick: x,
        className: De.toggleButton,
        children: [
          f.jsxs('div', {
            className: De.buttonContent,
            children: [
              f.jsx('span', { className: De.icon, children: a }),
              f.jsx('span', { className: De.title, children: c }),
              _ &&
                f.jsx('span', {
                  className: De.modifiedBadge,
                  children: de.editPanel.modifiedBadge,
                }),
              !T && f.jsx('span', { className: De.preview, children: W }),
            ],
          }),
          f.jsx('span', {
            className: De.chevron,
            children: T ? f.jsx(Op, { size: 16 }) : f.jsx(Pp, { size: 16 }),
          }),
        ],
      }),
      T &&
        f.jsx('div', {
          className: De.content,
          children: N
            ? f.jsxs(f.Fragment, {
                children: [
                  f.jsx('div', {
                    className: De.selectionRow,
                    children: E.map((B) =>
                      f.jsx(
                        vh,
                        {
                          label: B.label,
                          color: B.color,
                          isSelected: s[B.key] === 100,
                          onSelect: () => H(B.key),
                        },
                        B.key
                      )
                    ),
                  }),
                  f.jsxs('div', {
                    className: De.footer,
                    children: [
                      f.jsx('span', {
                        className: De.footerNote,
                        children: de.editPanel.selectionNote || 'Pick one option',
                      }),
                      _ &&
                        f.jsxs('button', {
                          onClick: ee,
                          className: De.resetButton,
                          children: [f.jsx(ts, { size: 10 }), ' ', de.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              })
            : f.jsxs(f.Fragment, {
                children: [
                  E.map((B) =>
                    f.jsx(
                      hh,
                      {
                        label: B.label,
                        value: s[B.key],
                        onChange: (K, le, ne, X) => {
                          const Q = gc(B.key, K, s, le, X);
                          S(ne ? wc(Q) : Q);
                        },
                        color: B.color,
                        credences: s,
                        sliderKey: B.key,
                        lockedKey: m,
                        setLockedKey: y,
                      },
                      B.key
                    )
                  ),
                  f.jsxs('div', {
                    className: De.footer,
                    children: [
                      f.jsx('span', {
                        className: De.footerNote,
                        children: de.editPanel.sliderNote,
                      }),
                      _ &&
                        f.jsxs('button', {
                          onClick: ee,
                          className: De.resetButton,
                          children: [f.jsx(ts, { size: 10 }), ' ', de.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              }),
        }),
    ],
  });
}
function Rh() {
  var X;
  const {
      questionsConfig: c,
      causesConfig: a,
      stateMap: s,
      expandedPanel: S,
      setExpandedPanel: C,
      calculationResults: E,
      originalCalculationResults: T,
      hasChanged: x,
      resetToOriginal: m,
      resetQuiz: y,
      goBack: k,
    } = zr(),
    [_, N] = b.useState(!1),
    { maxEV: H, mergedFavorites: ee } = E,
    W = Object.entries(a),
    B = async () => {
      const Q = Object.fromEntries(Object.entries(s).map(([F, rt]) => [F, rt.credences])),
        j = Yf(Q),
        U = () => {
          (N(!0), window.setTimeout(() => N(!1), 2e3));
        };
      try {
        await navigator.clipboard.writeText(j);
      } catch {
        const F = document.createElement('textarea');
        ((F.value = j),
          document.body.appendChild(F),
          F.select(),
          document.execCommand('copy'),
          document.body.removeChild(F));
      }
      U();
    },
    K = (Q) =>
      Q.options.map((j) => ({
        key: j.key,
        label: j.panelLabel,
        short: j.panelShort,
        color: j.color,
      })),
    le = c.filter((Q) => Q.type !== nt.INTERMISSION),
    ne = () =>
      f.jsxs('div', {
        className: Se.resultsGrid,
        children: [
          f.jsx(ql, {
            methodKey: 'maxEV',
            results: H,
            evs: H.evs,
            originalResults: T == null ? void 0 : T.maxEV,
            causeEntries: W,
            hasChanged: x,
          }),
          f.jsx(ql, {
            methodKey: 'mergedFavorites',
            results: ee,
            originalResults: T == null ? void 0 : T.mergedFavorites,
            causeEntries: W,
            hasChanged: x,
          }),
        ],
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
              x &&
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
                x &&
                  f.jsxs('button', {
                    onClick: m,
                    className: Se.resetAllButton,
                    children: [f.jsx(ts, { size: 10 }), ' ', de.results.resetAllButton],
                  }),
              ],
            }),
            f.jsx('div', {
              className: Se.panelList,
              children: le.map((Q) => {
                const j = s[Q.id];
                return j
                  ? f.jsx(
                      Oh,
                      {
                        title: Q.editPanelTitle,
                        icon: Q.emoji,
                        credences: j.credences,
                        setCredences: j.setCredences,
                        originalCredences: j.originalCredences,
                        configs: K(Q),
                        isExpanded: S === Q.id,
                        onToggle: () => C(S === Q.id ? null : Q.id),
                        lockedKey: j.lockedKey,
                        setLockedKey: j.setLockedKey,
                        questionType: Q.type,
                      },
                      Q.id
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
              onClick: k,
              className: Se.backButton,
              children: de.navigation.backToQuiz,
            }),
            f.jsxs('button', {
              onClick: B,
              className: `${Se.shareButton} ${_ ? Se.copied : ''}`,
              children: [
                _ ? f.jsx(jc, { size: 16 }) : f.jsx(Rp, { size: 16 }),
                _ ? de.results.shareCopied : de.results.shareButton,
              ],
            }),
            (X = mc.ui) == null ? void 0 : X.resetButton,
          ],
        }),
      ],
    }),
  });
}
const Ih = '_debugButton_1fvy0_4',
  zh = '_overlay_1fvy0_22',
  Mh = '_modal_1fvy0_35',
  Dh = '_header_1fvy0_46',
  Fh = '_closeButton_1fvy0_60',
  Ah = '_content_1fvy0_73',
  Bh = '_section_1fvy0_79',
  Uh = '_causeBlock_1fvy0_93',
  $h = '_fieldRow_1fvy0_106',
  Qh = '_checkboxRow_1fvy0_130',
  Vh = '_multiplierGroup_1fvy0_149',
  Hh = '_dimInfo_1fvy0_159',
  Wh = '_multiplierRow_1fvy0_166',
  Gh = '_footer_1fvy0_190',
  qh = '_saveButton_1fvy0_197',
  He = {
    debugButton: Ih,
    overlay: zh,
    modal: Mh,
    header: Dh,
    closeButton: Fh,
    content: Ah,
    section: Bh,
    causeBlock: Uh,
    fieldRow: $h,
    checkboxRow: Qh,
    multiplierGroup: Vh,
    dimInfo: Hh,
    multiplierRow: Wh,
    footer: Gh,
    saveButton: qh,
  },
  { causes: Kh } = ls,
  Yh = vc(!0),
  Xh = ({ onConfigChange: c }) => {
    const [a, s] = b.useState(!1),
      [S, C] = b.useState({
        causes: JSON.parse(JSON.stringify(Kh)),
        dimensions: JSON.parse(JSON.stringify(Yh)),
      }),
      E = (m, y, k) => {
        C((_) => ({
          ..._,
          causes: {
            ..._.causes,
            [m]: {
              ..._.causes[m],
              [y]: y === 'name' || y === 'color' || typeof k == 'boolean' ? k : Number(k),
            },
          },
        }));
      },
      T = (m, y, k) => {
        C((_) => ({
          ..._,
          dimensions: {
            ..._.dimensions,
            [m]: { ..._.dimensions[m], options: { ..._.dimensions[m].options, [y]: Number(k) } },
          },
        }));
      },
      x = () => {
        (c(S), s(!1));
      };
    return f.jsxs(f.Fragment, {
      children: [
        f.jsx('button', {
          className: He.debugButton,
          onClick: () => s(!0),
          title: 'Debug Settings',
          children: 'Settings',
        }),
        a &&
          f.jsx('div', {
            className: He.overlay,
            onClick: () => s(!1),
            children: f.jsxs('div', {
              className: He.modal,
              onClick: (m) => m.stopPropagation(),
              children: [
                f.jsxs('div', {
                  className: He.header,
                  children: [
                    f.jsx('h2', { children: 'Calculation Debugger' }),
                    f.jsx('button', {
                      className: He.closeButton,
                      onClick: () => s(!1),
                      children: 'x',
                    }),
                  ],
                }),
                f.jsxs('div', {
                  className: He.content,
                  children: [
                    f.jsxs('section', {
                      className: He.section,
                      children: [
                        f.jsx('h3', { children: 'CAUSES' }),
                        Object.entries(S.causes).map(([m, y]) =>
                          f.jsxs(
                            'div',
                            {
                              className: He.causeBlock,
                              children: [
                                f.jsx('h4', { children: y.name }),
                                f.jsxs('div', {
                                  className: He.fieldRow,
                                  children: [
                                    f.jsxs('label', {
                                      children: [
                                        'Points:',
                                        f.jsx('input', {
                                          type: 'number',
                                          value: y.points,
                                          onChange: (k) => E(m, 'points', k.target.value),
                                        }),
                                      ],
                                    }),
                                    f.jsxs('label', {
                                      children: [
                                        'Scale Factor:',
                                        f.jsx('input', {
                                          type: 'number',
                                          value: y.scaleFactor,
                                          onChange: (k) => E(m, 'scaleFactor', k.target.value),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                f.jsxs('div', {
                                  className: He.checkboxRow,
                                  children: [
                                    f.jsxs('label', {
                                      children: [
                                        f.jsx('input', {
                                          type: 'checkbox',
                                          checked: y.helpsAnimals,
                                          onChange: (k) => E(m, 'helpsAnimals', k.target.checked),
                                        }),
                                        'Helps Animals',
                                      ],
                                    }),
                                    f.jsxs('label', {
                                      children: [
                                        f.jsx('input', {
                                          type: 'checkbox',
                                          checked: y.helpsFutureHumans,
                                          onChange: (k) =>
                                            E(m, 'helpsFutureHumans', k.target.checked),
                                        }),
                                        'Helps Future Humans',
                                      ],
                                    }),
                                    f.jsxs('label', {
                                      children: [
                                        f.jsx('input', {
                                          type: 'checkbox',
                                          checked: y.isSpeculative,
                                          onChange: (k) => E(m, 'isSpeculative', k.target.checked),
                                        }),
                                        'Is Speculative',
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            m
                          )
                        ),
                      ],
                    }),
                    f.jsxs('section', {
                      className: He.section,
                      children: [
                        f.jsx('h3', { children: 'DIMENSIONS (from questions)' }),
                        Object.entries(S.dimensions).map(([m, y]) =>
                          f.jsxs(
                            'div',
                            {
                              className: He.multiplierGroup,
                              children: [
                                f.jsx('h4', { children: y.name }),
                                f.jsx('p', {
                                  className: He.dimInfo,
                                  children:
                                    y.applyAs === 'multiplier'
                                      ? `Multiplier when: ${y.appliesWhen}`
                                      : `Exponent on: ${y.appliesTo}`,
                                }),
                                f.jsx('div', {
                                  className: He.multiplierRow,
                                  children: Object.entries(y.options).map(([k, _]) =>
                                    f.jsxs(
                                      'label',
                                      {
                                        children: [
                                          k,
                                          ':',
                                          f.jsx('input', {
                                            type: 'number',
                                            step: y.applyAs === 'exponent' ? '0.1' : '0.01',
                                            value: _,
                                            onChange: (N) => T(m, k, N.target.value),
                                          }),
                                        ],
                                      },
                                      k
                                    )
                                  ),
                                }),
                              ],
                            },
                            m
                          )
                        ),
                      ],
                    }),
                  ],
                }),
                f.jsx('div', {
                  className: He.footer,
                  children: f.jsx('button', {
                    className: He.saveButton,
                    onClick: x,
                    children: 'Save',
                  }),
                }),
              ],
            }),
          }),
      ],
    });
  },
  Zh = {
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
function Jh() {
  const { currentStep: c, currentQuestion: a, setDebugConfig: s, shareUrlError: S } = zr();
  function C() {
    return c === 'welcome'
      ? f.jsx(Np, {})
      : c === 'results'
        ? f.jsx(Rh, {})
        : a
          ? a.type === nt.INTERMISSION
            ? f.jsx(mh, {})
            : f.jsx(vm, {})
          : null;
  }
  return f.jsxs(f.Fragment, {
    children: [
      S && f.jsx('div', { style: Zh, children: S }),
      C(),
      f.jsx(Xh, { onConfigChange: s }),
    ],
  });
}
function bh() {
  return f.jsx(cp, { children: f.jsx(Jh, {}) });
}
Ff.createRoot(document.getElementById('root')).render(
  f.jsx(b.StrictMode, { children: f.jsx(bh, {}) })
);
