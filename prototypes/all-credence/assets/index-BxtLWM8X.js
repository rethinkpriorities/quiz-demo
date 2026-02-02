(function () {
  const i = document.createElement('link').relList;
  if (i && i.supports && i.supports('modulepreload')) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) s(u);
  new MutationObserver((u) => {
    for (const c of u)
      if (c.type === 'childList')
        for (const d of c.addedNodes) d.tagName === 'LINK' && d.rel === 'modulepreload' && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(u) {
    const c = {};
    return (
      u.integrity && (c.integrity = u.integrity),
      u.referrerPolicy && (c.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === 'use-credentials'
        ? (c.credentials = 'include')
        : u.crossOrigin === 'anonymous'
          ? (c.credentials = 'omit')
          : (c.credentials = 'same-origin'),
      c
    );
  }
  function s(u) {
    if (u.ep) return;
    u.ep = !0;
    const c = l(u);
    fetch(u.href, c);
  }
})();
function ep(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
}
var da = { exports: {} },
  Ui = {},
  fa = { exports: {} },
  je = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jd;
function ng() {
  if (Jd) return je;
  Jd = 1;
  var n = Symbol.for('react.element'),
    i = Symbol.for('react.portal'),
    l = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    u = Symbol.for('react.profiler'),
    c = Symbol.for('react.provider'),
    d = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    m = Symbol.for('react.memo'),
    g = Symbol.for('react.lazy'),
    k = Symbol.iterator;
  function w(N) {
    return N === null || typeof N != 'object'
      ? null
      : ((N = (k && N[k]) || N['@@iterator']), typeof N == 'function' ? N : null);
  }
  var x = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    I = {};
  function z(N, F, C) {
    ((this.props = N), (this.context = F), (this.refs = I), (this.updater = C || x));
  }
  ((z.prototype.isReactComponent = {}),
    (z.prototype.setState = function (N, F) {
      if (typeof N != 'object' && typeof N != 'function' && N != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, N, F, 'setState');
    }),
    (z.prototype.forceUpdate = function (N) {
      this.updater.enqueueForceUpdate(this, N, 'forceUpdate');
    }));
  function O() {}
  O.prototype = z.prototype;
  function A(N, F, C) {
    ((this.props = N), (this.context = F), (this.refs = I), (this.updater = C || x));
  }
  var D = (A.prototype = new O());
  ((D.constructor = A), T(D, z.prototype), (D.isPureReactComponent = !0));
  var H = Array.isArray,
    X = Object.prototype.hasOwnProperty,
    R = { current: null },
    B = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ae(N, F, C) {
    var pe,
      Ce = {},
      ie = null,
      be = null;
    if (F != null)
      for (pe in (F.ref !== void 0 && (be = F.ref), F.key !== void 0 && (ie = '' + F.key), F))
        X.call(F, pe) && !B.hasOwnProperty(pe) && (Ce[pe] = F[pe]);
    var Ee = arguments.length - 2;
    if (Ee === 1) Ce.children = C;
    else if (1 < Ee) {
      for (var Pe = Array(Ee), We = 0; We < Ee; We++) Pe[We] = arguments[We + 2];
      Ce.children = Pe;
    }
    if (N && N.defaultProps)
      for (pe in ((Ee = N.defaultProps), Ee)) Ce[pe] === void 0 && (Ce[pe] = Ee[pe]);
    return { $$typeof: n, type: N, key: ie, ref: be, props: Ce, _owner: R.current };
  }
  function ue(N, F) {
    return { $$typeof: n, type: N.type, key: F, ref: N.ref, props: N.props, _owner: N._owner };
  }
  function de(N) {
    return typeof N == 'object' && N !== null && N.$$typeof === n;
  }
  function Z(N) {
    var F = { '=': '=0', ':': '=2' };
    return (
      '$' +
      N.replace(/[=:]/g, function (C) {
        return F[C];
      })
    );
  }
  var J = /\/+/g;
  function fe(N, F) {
    return typeof N == 'object' && N !== null && N.key != null ? Z('' + N.key) : F.toString(36);
  }
  function te(N, F, C, pe, Ce) {
    var ie = typeof N;
    (ie === 'undefined' || ie === 'boolean') && (N = null);
    var be = !1;
    if (N === null) be = !0;
    else
      switch (ie) {
        case 'string':
        case 'number':
          be = !0;
          break;
        case 'object':
          switch (N.$$typeof) {
            case n:
            case i:
              be = !0;
          }
      }
    if (be)
      return (
        (be = N),
        (Ce = Ce(be)),
        (N = pe === '' ? '.' + fe(be, 0) : pe),
        H(Ce)
          ? ((C = ''),
            N != null && (C = N.replace(J, '$&/') + '/'),
            te(Ce, F, C, '', function (We) {
              return We;
            }))
          : Ce != null &&
            (de(Ce) &&
              (Ce = ue(
                Ce,
                C +
                  (!Ce.key || (be && be.key === Ce.key)
                    ? ''
                    : ('' + Ce.key).replace(J, '$&/') + '/') +
                  N
              )),
            F.push(Ce)),
        1
      );
    if (((be = 0), (pe = pe === '' ? '.' : pe + ':'), H(N)))
      for (var Ee = 0; Ee < N.length; Ee++) {
        ie = N[Ee];
        var Pe = pe + fe(ie, Ee);
        be += te(ie, F, C, Pe, Ce);
      }
    else if (((Pe = w(N)), typeof Pe == 'function'))
      for (N = Pe.call(N), Ee = 0; !(ie = N.next()).done; )
        ((ie = ie.value), (Pe = pe + fe(ie, Ee++)), (be += te(ie, F, C, Pe, Ce)));
    else if (ie === 'object')
      throw (
        (F = String(N)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (F === '[object Object]' ? 'object with keys {' + Object.keys(N).join(', ') + '}' : F) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return be;
  }
  function q(N, F, C) {
    if (N == null) return N;
    var pe = [],
      Ce = 0;
    return (
      te(N, pe, '', '', function (ie) {
        return F.call(C, ie, Ce++);
      }),
      pe
    );
  }
  function ye(N) {
    if (N._status === -1) {
      var F = N._result;
      ((F = F()),
        F.then(
          function (C) {
            (N._status === 0 || N._status === -1) && ((N._status = 1), (N._result = C));
          },
          function (C) {
            (N._status === 0 || N._status === -1) && ((N._status = 2), (N._result = C));
          }
        ),
        N._status === -1 && ((N._status = 0), (N._result = F)));
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var ve = { current: null },
    G = { transition: null },
    ne = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: G, ReactCurrentOwner: R };
  function S() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (je.Children = {
      map: q,
      forEach: function (N, F, C) {
        q(
          N,
          function () {
            F.apply(this, arguments);
          },
          C
        );
      },
      count: function (N) {
        var F = 0;
        return (
          q(N, function () {
            F++;
          }),
          F
        );
      },
      toArray: function (N) {
        return (
          q(N, function (F) {
            return F;
          }) || []
        );
      },
      only: function (N) {
        if (!de(N))
          throw Error('React.Children.only expected to receive a single React element child.');
        return N;
      },
    }),
    (je.Component = z),
    (je.Fragment = l),
    (je.Profiler = u),
    (je.PureComponent = A),
    (je.StrictMode = s),
    (je.Suspense = h),
    (je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne),
    (je.act = S),
    (je.cloneElement = function (N, F, C) {
      if (N == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + N + '.'
        );
      var pe = T({}, N.props),
        Ce = N.key,
        ie = N.ref,
        be = N._owner;
      if (F != null) {
        if (
          (F.ref !== void 0 && ((ie = F.ref), (be = R.current)),
          F.key !== void 0 && (Ce = '' + F.key),
          N.type && N.type.defaultProps)
        )
          var Ee = N.type.defaultProps;
        for (Pe in F)
          X.call(F, Pe) &&
            !B.hasOwnProperty(Pe) &&
            (pe[Pe] = F[Pe] === void 0 && Ee !== void 0 ? Ee[Pe] : F[Pe]);
      }
      var Pe = arguments.length - 2;
      if (Pe === 1) pe.children = C;
      else if (1 < Pe) {
        Ee = Array(Pe);
        for (var We = 0; We < Pe; We++) Ee[We] = arguments[We + 2];
        pe.children = Ee;
      }
      return { $$typeof: n, type: N.type, key: Ce, ref: ie, props: pe, _owner: be };
    }),
    (je.createContext = function (N) {
      return (
        (N = {
          $$typeof: d,
          _currentValue: N,
          _currentValue2: N,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (N.Provider = { $$typeof: c, _context: N }),
        (N.Consumer = N)
      );
    }),
    (je.createElement = ae),
    (je.createFactory = function (N) {
      var F = ae.bind(null, N);
      return ((F.type = N), F);
    }),
    (je.createRef = function () {
      return { current: null };
    }),
    (je.forwardRef = function (N) {
      return { $$typeof: p, render: N };
    }),
    (je.isValidElement = de),
    (je.lazy = function (N) {
      return { $$typeof: g, _payload: { _status: -1, _result: N }, _init: ye };
    }),
    (je.memo = function (N, F) {
      return { $$typeof: m, type: N, compare: F === void 0 ? null : F };
    }),
    (je.startTransition = function (N) {
      var F = G.transition;
      G.transition = {};
      try {
        N();
      } finally {
        G.transition = F;
      }
    }),
    (je.unstable_act = S),
    (je.useCallback = function (N, F) {
      return ve.current.useCallback(N, F);
    }),
    (je.useContext = function (N) {
      return ve.current.useContext(N);
    }),
    (je.useDebugValue = function () {}),
    (je.useDeferredValue = function (N) {
      return ve.current.useDeferredValue(N);
    }),
    (je.useEffect = function (N, F) {
      return ve.current.useEffect(N, F);
    }),
    (je.useId = function () {
      return ve.current.useId();
    }),
    (je.useImperativeHandle = function (N, F, C) {
      return ve.current.useImperativeHandle(N, F, C);
    }),
    (je.useInsertionEffect = function (N, F) {
      return ve.current.useInsertionEffect(N, F);
    }),
    (je.useLayoutEffect = function (N, F) {
      return ve.current.useLayoutEffect(N, F);
    }),
    (je.useMemo = function (N, F) {
      return ve.current.useMemo(N, F);
    }),
    (je.useReducer = function (N, F, C) {
      return ve.current.useReducer(N, F, C);
    }),
    (je.useRef = function (N) {
      return ve.current.useRef(N);
    }),
    (je.useState = function (N) {
      return ve.current.useState(N);
    }),
    (je.useSyncExternalStore = function (N, F, C) {
      return ve.current.useSyncExternalStore(N, F, C);
    }),
    (je.useTransition = function () {
      return ve.current.useTransition();
    }),
    (je.version = '18.3.1'),
    je
  );
}
var ef;
function Ka() {
  return (ef || ((ef = 1), (fa.exports = ng())), fa.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tf;
function rg() {
  if (tf) return Ui;
  tf = 1;
  var n = Ka(),
    i = Symbol.for('react.element'),
    l = Symbol.for('react.fragment'),
    s = Object.prototype.hasOwnProperty,
    u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(p, h, m) {
    var g,
      k = {},
      w = null,
      x = null;
    (m !== void 0 && (w = '' + m),
      h.key !== void 0 && (w = '' + h.key),
      h.ref !== void 0 && (x = h.ref));
    for (g in h) s.call(h, g) && !c.hasOwnProperty(g) && (k[g] = h[g]);
    if (p && p.defaultProps) for (g in ((h = p.defaultProps), h)) k[g] === void 0 && (k[g] = h[g]);
    return { $$typeof: i, type: p, key: w, ref: x, props: k, _owner: u.current };
  }
  return ((Ui.Fragment = l), (Ui.jsx = d), (Ui.jsxs = d), Ui);
}
var nf;
function ig() {
  return (nf || ((nf = 1), (da.exports = rg())), da.exports);
}
var v = ig(),
  W = Ka(),
  co = {},
  pa = { exports: {} },
  Ot = {},
  ha = { exports: {} },
  ma = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rf;
function lg() {
  return (
    rf ||
      ((rf = 1),
      (function (n) {
        function i(G, ne) {
          var S = G.length;
          G.push(ne);
          e: for (; 0 < S; ) {
            var N = (S - 1) >>> 1,
              F = G[N];
            if (0 < u(F, ne)) ((G[N] = ne), (G[S] = F), (S = N));
            else break e;
          }
        }
        function l(G) {
          return G.length === 0 ? null : G[0];
        }
        function s(G) {
          if (G.length === 0) return null;
          var ne = G[0],
            S = G.pop();
          if (S !== ne) {
            G[0] = S;
            e: for (var N = 0, F = G.length, C = F >>> 1; N < C; ) {
              var pe = 2 * (N + 1) - 1,
                Ce = G[pe],
                ie = pe + 1,
                be = G[ie];
              if (0 > u(Ce, S))
                ie < F && 0 > u(be, Ce)
                  ? ((G[N] = be), (G[ie] = S), (N = ie))
                  : ((G[N] = Ce), (G[pe] = S), (N = pe));
              else if (ie < F && 0 > u(be, S)) ((G[N] = be), (G[ie] = S), (N = ie));
              else break e;
            }
          }
          return ne;
        }
        function u(G, ne) {
          var S = G.sortIndex - ne.sortIndex;
          return S !== 0 ? S : G.id - ne.id;
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
        var h = [],
          m = [],
          g = 1,
          k = null,
          w = 3,
          x = !1,
          T = !1,
          I = !1,
          z = typeof setTimeout == 'function' ? setTimeout : null,
          O = typeof clearTimeout == 'function' ? clearTimeout : null,
          A = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function D(G) {
          for (var ne = l(m); ne !== null; ) {
            if (ne.callback === null) s(m);
            else if (ne.startTime <= G) (s(m), (ne.sortIndex = ne.expirationTime), i(h, ne));
            else break;
            ne = l(m);
          }
        }
        function H(G) {
          if (((I = !1), D(G), !T))
            if (l(h) !== null) ((T = !0), ye(X));
            else {
              var ne = l(m);
              ne !== null && ve(H, ne.startTime - G);
            }
        }
        function X(G, ne) {
          ((T = !1), I && ((I = !1), O(ae), (ae = -1)), (x = !0));
          var S = w;
          try {
            for (D(ne), k = l(h); k !== null && (!(k.expirationTime > ne) || (G && !Z())); ) {
              var N = k.callback;
              if (typeof N == 'function') {
                ((k.callback = null), (w = k.priorityLevel));
                var F = N(k.expirationTime <= ne);
                ((ne = n.unstable_now()),
                  typeof F == 'function' ? (k.callback = F) : k === l(h) && s(h),
                  D(ne));
              } else s(h);
              k = l(h);
            }
            if (k !== null) var C = !0;
            else {
              var pe = l(m);
              (pe !== null && ve(H, pe.startTime - ne), (C = !1));
            }
            return C;
          } finally {
            ((k = null), (w = S), (x = !1));
          }
        }
        var R = !1,
          B = null,
          ae = -1,
          ue = 5,
          de = -1;
        function Z() {
          return !(n.unstable_now() - de < ue);
        }
        function J() {
          if (B !== null) {
            var G = n.unstable_now();
            de = G;
            var ne = !0;
            try {
              ne = B(!0, G);
            } finally {
              ne ? fe() : ((R = !1), (B = null));
            }
          } else R = !1;
        }
        var fe;
        if (typeof A == 'function')
          fe = function () {
            A(J);
          };
        else if (typeof MessageChannel < 'u') {
          var te = new MessageChannel(),
            q = te.port2;
          ((te.port1.onmessage = J),
            (fe = function () {
              q.postMessage(null);
            }));
        } else
          fe = function () {
            z(J, 0);
          };
        function ye(G) {
          ((B = G), R || ((R = !0), fe()));
        }
        function ve(G, ne) {
          ae = z(function () {
            G(n.unstable_now());
          }, ne);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (G) {
            G.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            T || x || ((T = !0), ye(X));
          }),
          (n.unstable_forceFrameRate = function (G) {
            0 > G || 125 < G
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (ue = 0 < G ? Math.floor(1e3 / G) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return l(h);
          }),
          (n.unstable_next = function (G) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var ne = 3;
                break;
              default:
                ne = w;
            }
            var S = w;
            w = ne;
            try {
              return G();
            } finally {
              w = S;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (G, ne) {
            switch (G) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                G = 3;
            }
            var S = w;
            w = G;
            try {
              return ne();
            } finally {
              w = S;
            }
          }),
          (n.unstable_scheduleCallback = function (G, ne, S) {
            var N = n.unstable_now();
            switch (
              (typeof S == 'object' && S !== null
                ? ((S = S.delay), (S = typeof S == 'number' && 0 < S ? N + S : N))
                : (S = N),
              G)
            ) {
              case 1:
                var F = -1;
                break;
              case 2:
                F = 250;
                break;
              case 5:
                F = 1073741823;
                break;
              case 4:
                F = 1e4;
                break;
              default:
                F = 5e3;
            }
            return (
              (F = S + F),
              (G = {
                id: g++,
                callback: ne,
                priorityLevel: G,
                startTime: S,
                expirationTime: F,
                sortIndex: -1,
              }),
              S > N
                ? ((G.sortIndex = S),
                  i(m, G),
                  l(h) === null && G === l(m) && (I ? (O(ae), (ae = -1)) : (I = !0), ve(H, S - N)))
                : ((G.sortIndex = F), i(h, G), T || x || ((T = !0), ye(X))),
              G
            );
          }),
          (n.unstable_shouldYield = Z),
          (n.unstable_wrapCallback = function (G) {
            var ne = w;
            return function () {
              var S = w;
              w = ne;
              try {
                return G.apply(this, arguments);
              } finally {
                w = S;
              }
            };
          }));
      })(ma)),
    ma
  );
}
var lf;
function og() {
  return (lf || ((lf = 1), (ha.exports = lg())), ha.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var of;
function sg() {
  if (of) return Ot;
  of = 1;
  var n = Ka(),
    i = og();
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
    u = {};
  function c(e, t) {
    (d(e, t), d(e + 'Capture', t));
  }
  function d(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var p = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    h = Object.prototype.hasOwnProperty,
    m =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    k = {};
  function w(e) {
    return h.call(k, e) ? !0 : h.call(g, e) ? !1 : m.test(e) ? (k[e] = !0) : ((g[e] = !0), !1);
  }
  function x(e, t, r, o) {
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
  function T(e, t, r, o) {
    if (t === null || typeof t > 'u' || x(e, t, r, o)) return !0;
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
  function I(e, t, r, o, a, f, y) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = a),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = f),
      (this.removeEmptyString = y));
  }
  var z = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      z[e] = new I(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      z[t] = new I(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      z[e] = new I(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        z[e] = new I(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        z[e] = new I(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      z[e] = new I(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      z[e] = new I(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      z[e] = new I(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      z[e] = new I(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var O = /[\-:]([a-z])/g;
  function A(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(O, A);
      z[t] = new I(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(O, A);
        z[t] = new I(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(O, A);
      z[t] = new I(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      z[e] = new I(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (z.xlinkHref = new I('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      z[e] = new I(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function D(e, t, r, o) {
    var a = z.hasOwnProperty(t) ? z[t] : null;
    (a !== null
      ? a.type !== 0
      : o || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (T(t, r, a, o) && (r = null),
      o || a === null
        ? w(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
        : a.mustUseProperty
          ? (e[a.propertyName] = r === null ? (a.type === 3 ? !1 : '') : r)
          : ((t = a.attributeName),
            (o = a.attributeNamespace),
            r === null
              ? e.removeAttribute(t)
              : ((a = a.type),
                (r = a === 3 || (a === 4 && r === !0) ? '' : '' + r),
                o ? e.setAttributeNS(o, t, r) : e.setAttribute(t, r))));
  }
  var H = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    X = Symbol.for('react.element'),
    R = Symbol.for('react.portal'),
    B = Symbol.for('react.fragment'),
    ae = Symbol.for('react.strict_mode'),
    ue = Symbol.for('react.profiler'),
    de = Symbol.for('react.provider'),
    Z = Symbol.for('react.context'),
    J = Symbol.for('react.forward_ref'),
    fe = Symbol.for('react.suspense'),
    te = Symbol.for('react.suspense_list'),
    q = Symbol.for('react.memo'),
    ye = Symbol.for('react.lazy'),
    ve = Symbol.for('react.offscreen'),
    G = Symbol.iterator;
  function ne(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (G && e[G]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var S = Object.assign,
    N;
  function F(e) {
    if (N === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        N = (t && t[1]) || '';
      }
    return (
      `
` +
      N +
      e
    );
  }
  var C = !1;
  function pe(e, t) {
    if (!e || C) return '';
    C = !0;
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
          } catch (P) {
            var o = P;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (P) {
            o = P;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (P) {
          o = P;
        }
        e();
      }
    } catch (P) {
      if (P && o && typeof P.stack == 'string') {
        for (
          var a = P.stack.split(`
`),
            f = o.stack.split(`
`),
            y = a.length - 1,
            _ = f.length - 1;
          1 <= y && 0 <= _ && a[y] !== f[_];
        )
          _--;
        for (; 1 <= y && 0 <= _; y--, _--)
          if (a[y] !== f[_]) {
            if (y !== 1 || _ !== 1)
              do
                if ((y--, _--, 0 > _ || a[y] !== f[_])) {
                  var E =
                    `
` + a[y].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      E.includes('<anonymous>') &&
                      (E = E.replace('<anonymous>', e.displayName)),
                    E
                  );
                }
              while (1 <= y && 0 <= _);
            break;
          }
      }
    } finally {
      ((C = !1), (Error.prepareStackTrace = r));
    }
    return (e = e ? e.displayName || e.name : '') ? F(e) : '';
  }
  function Ce(e) {
    switch (e.tag) {
      case 5:
        return F(e.type);
      case 16:
        return F('Lazy');
      case 13:
        return F('Suspense');
      case 19:
        return F('SuspenseList');
      case 0:
      case 2:
      case 15:
        return ((e = pe(e.type, !1)), e);
      case 11:
        return ((e = pe(e.type.render, !1)), e);
      case 1:
        return ((e = pe(e.type, !0)), e);
      default:
        return '';
    }
  }
  function ie(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case B:
        return 'Fragment';
      case R:
        return 'Portal';
      case ue:
        return 'Profiler';
      case ae:
        return 'StrictMode';
      case fe:
        return 'Suspense';
      case te:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Z:
          return (e.displayName || 'Context') + '.Consumer';
        case de:
          return (e._context.displayName || 'Context') + '.Provider';
        case J:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case q:
          return ((t = e.displayName || null), t !== null ? t : ie(e.type) || 'Memo');
        case ye:
          ((t = e._payload), (e = e._init));
          try {
            return ie(e(t));
          } catch {}
      }
    return null;
  }
  function be(e) {
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
  function Ee(e) {
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
  function Pe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function We(e) {
    var t = Pe(e) ? 'checked' : 'value',
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      o = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < 'u' &&
      typeof r.get == 'function' &&
      typeof r.set == 'function'
    ) {
      var a = r.get,
        f = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (y) {
            ((o = '' + y), f.call(this, y));
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (y) {
            o = '' + y;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function bt(e) {
    e._valueTracker || (e._valueTracker = We(e));
  }
  function zn(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      o = '';
    return (
      e && (o = Pe(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = o),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function ee(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ke(e, t) {
    var r = t.checked;
    return S({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function ft(e, t) {
    var r = t.defaultValue == null ? '' : t.defaultValue,
      o = t.checked != null ? t.checked : t.defaultChecked;
    ((r = Ee(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: o,
        initialValue: r,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      }));
  }
  function Je(e, t) {
    ((t = t.checked), t != null && D(e, 'checked', t, !1));
  }
  function Dt(e, t) {
    Je(e, t);
    var r = Ee(t.value),
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
      ? Kt(e, t.type, r)
      : t.hasOwnProperty('defaultValue') && Kt(e, t.type, Ee(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Ft(e, t, r) {
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
  function Kt(e, t, r) {
    (t !== 'number' || ee(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
  }
  var ln = Array.isArray;
  function ge(e, t, r, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < r.length; a++) t['$' + r[a]] = !0;
      for (r = 0; r < e.length; r++)
        ((a = t.hasOwnProperty('$' + e[r].value)),
          e[r].selected !== a && (e[r].selected = a),
          a && o && (e[r].defaultSelected = !0));
    } else {
      for (r = '' + Ee(r), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === r) {
          ((e[a].selected = !0), o && (e[a].defaultSelected = !0));
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Le(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return S({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Bt(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(l(92));
        if (ln(r)) {
          if (1 < r.length) throw Error(l(93));
          r = r[0];
        }
        t = r;
      }
      (t == null && (t = ''), (r = t));
    }
    e._wrapperState = { initialValue: Ee(r) };
  }
  function Nt(e, t) {
    var r = Ee(t.value),
      o = Ee(t.defaultValue);
    (r != null &&
      ((r = '' + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      o != null && (e.defaultValue = '' + o));
  }
  function Sn(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function M(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Y(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? M(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var xe,
    Te = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, r, o, a) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, o, a);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
      else {
        for (
          xe = xe || document.createElement('div'),
            xe.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = xe.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Oe(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var pt = {
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
    _n = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(pt).forEach(function (e) {
    _n.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pt[t] = pt[e]));
    });
  });
  function Yt(e, t, r) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : r || typeof t != 'number' || t === 0 || (pt.hasOwnProperty(e) && pt[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function Mn(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = r.indexOf('--') === 0,
          a = Yt(r, t[r], o);
        (r === 'float' && (r = 'cssFloat'), o ? e.setProperty(r, a) : (e[r] = a));
      }
  }
  var sr = S(
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
  function ht(e, t) {
    if (t) {
      if (sr[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function pn(e, t) {
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
  var Ut = null;
  function bo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var No = null,
    br = null,
    Nr = null;
  function gu(e) {
    if ((e = bi(e))) {
      if (typeof No != 'function') throw Error(l(280));
      var t = e.stateNode;
      t && ((t = El(t)), No(e.stateNode, e.type, t));
    }
  }
  function yu(e) {
    br ? (Nr ? Nr.push(e) : (Nr = [e])) : (br = e);
  }
  function vu() {
    if (br) {
      var e = br,
        t = Nr;
      if (((Nr = br = null), gu(e), t)) for (e = 0; e < t.length; e++) gu(t[e]);
    }
  }
  function ku(e, t) {
    return e(t);
  }
  function xu() {}
  var Io = !1;
  function wu(e, t, r) {
    if (Io) return e(t, r);
    Io = !0;
    try {
      return ku(e, t, r);
    } finally {
      ((Io = !1), (br !== null || Nr !== null) && (xu(), vu()));
    }
  }
  function li(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var o = El(r);
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
  var To = !1;
  if (p)
    try {
      var oi = {};
      (Object.defineProperty(oi, 'passive', {
        get: function () {
          To = !0;
        },
      }),
        window.addEventListener('test', oi, oi),
        window.removeEventListener('test', oi, oi));
    } catch {
      To = !1;
    }
  function ah(e, t, r, o, a, f, y, _, E) {
    var P = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, P);
    } catch ($) {
      this.onError($);
    }
  }
  var si = !1,
    rl = null,
    il = !1,
    jo = null,
    uh = {
      onError: function (e) {
        ((si = !0), (rl = e));
      },
    };
  function ch(e, t, r, o, a, f, y, _, E) {
    ((si = !1), (rl = null), ah.apply(uh, arguments));
  }
  function dh(e, t, r, o, a, f, y, _, E) {
    if ((ch.apply(this, arguments), si)) {
      if (si) {
        var P = rl;
        ((si = !1), (rl = null));
      } else throw Error(l(198));
      il || ((il = !0), (jo = P));
    }
  }
  function ar(e) {
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
  function Su(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function _u(e) {
    if (ar(e) !== e) throw Error(l(188));
  }
  function fh(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ar(e)), t === null)) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var r = e, o = t; ; ) {
      var a = r.return;
      if (a === null) break;
      var f = a.alternate;
      if (f === null) {
        if (((o = a.return), o !== null)) {
          r = o;
          continue;
        }
        break;
      }
      if (a.child === f.child) {
        for (f = a.child; f; ) {
          if (f === r) return (_u(a), e);
          if (f === o) return (_u(a), t);
          f = f.sibling;
        }
        throw Error(l(188));
      }
      if (r.return !== o.return) ((r = a), (o = f));
      else {
        for (var y = !1, _ = a.child; _; ) {
          if (_ === r) {
            ((y = !0), (r = a), (o = f));
            break;
          }
          if (_ === o) {
            ((y = !0), (o = a), (r = f));
            break;
          }
          _ = _.sibling;
        }
        if (!y) {
          for (_ = f.child; _; ) {
            if (_ === r) {
              ((y = !0), (r = f), (o = a));
              break;
            }
            if (_ === o) {
              ((y = !0), (o = f), (r = a));
              break;
            }
            _ = _.sibling;
          }
          if (!y) throw Error(l(189));
        }
      }
      if (r.alternate !== o) throw Error(l(190));
    }
    if (r.tag !== 3) throw Error(l(188));
    return r.stateNode.current === r ? e : t;
  }
  function Cu(e) {
    return ((e = fh(e)), e !== null ? Eu(e) : null);
  }
  function Eu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Eu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var bu = i.unstable_scheduleCallback,
    Nu = i.unstable_cancelCallback,
    ph = i.unstable_shouldYield,
    hh = i.unstable_requestPaint,
    et = i.unstable_now,
    mh = i.unstable_getCurrentPriorityLevel,
    Lo = i.unstable_ImmediatePriority,
    Iu = i.unstable_UserBlockingPriority,
    ll = i.unstable_NormalPriority,
    gh = i.unstable_LowPriority,
    Tu = i.unstable_IdlePriority,
    ol = null,
    hn = null;
  function yh(e) {
    if (hn && typeof hn.onCommitFiberRoot == 'function')
      try {
        hn.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var on = Math.clz32 ? Math.clz32 : xh,
    vh = Math.log,
    kh = Math.LN2;
  function xh(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((vh(e) / kh) | 0)) | 0);
  }
  var sl = 64,
    al = 4194304;
  function ai(e) {
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
  function ul(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var o = 0,
      a = e.suspendedLanes,
      f = e.pingedLanes,
      y = r & 268435455;
    if (y !== 0) {
      var _ = y & ~a;
      _ !== 0 ? (o = ai(_)) : ((f &= y), f !== 0 && (o = ai(f)));
    } else ((y = r & ~a), y !== 0 ? (o = ai(y)) : f !== 0 && (o = ai(f)));
    if (o === 0) return 0;
    if (
      t !== 0 &&
      t !== o &&
      (t & a) === 0 &&
      ((a = o & -o), (f = t & -t), a >= f || (a === 16 && (f & 4194240) !== 0))
    )
      return t;
    if (((o & 4) !== 0 && (o |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= o; 0 < t; )
        ((r = 31 - on(t)), (a = 1 << r), (o |= e[r]), (t &= ~a));
    return o;
  }
  function wh(e, t) {
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
  function Sh(e, t) {
    for (
      var r = e.suspendedLanes, o = e.pingedLanes, a = e.expirationTimes, f = e.pendingLanes;
      0 < f;
    ) {
      var y = 31 - on(f),
        _ = 1 << y,
        E = a[y];
      (E === -1
        ? ((_ & r) === 0 || (_ & o) !== 0) && (a[y] = wh(_, t))
        : E <= t && (e.expiredLanes |= _),
        (f &= ~_));
    }
  }
  function Po(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function ju() {
    var e = sl;
    return ((sl <<= 1), (sl & 4194240) === 0 && (sl = 64), e);
  }
  function Oo(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function ui(e, t, r) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - on(t)),
      (e[t] = r));
  }
  function _h(e, t) {
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
      var a = 31 - on(r),
        f = 1 << a;
      ((t[a] = 0), (o[a] = -1), (e[a] = -1), (r &= ~f));
    }
  }
  function Ro(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var o = 31 - on(r),
        a = 1 << o;
      ((a & t) | (e[o] & t) && (e[o] |= t), (r &= ~a));
    }
  }
  var De = 0;
  function Lu(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Pu,
    zo,
    Ou,
    Ru,
    zu,
    Mo = !1,
    cl = [],
    An = null,
    Dn = null,
    Fn = null,
    ci = new Map(),
    di = new Map(),
    Bn = [],
    Ch =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function Mu(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        An = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Dn = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Fn = null;
        break;
      case 'pointerover':
      case 'pointerout':
        ci.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        di.delete(t.pointerId);
    }
  }
  function fi(e, t, r, o, a, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: o,
          nativeEvent: f,
          targetContainers: [a],
        }),
        t !== null && ((t = bi(t)), t !== null && zo(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function Eh(e, t, r, o, a) {
    switch (t) {
      case 'focusin':
        return ((An = fi(An, e, t, r, o, a)), !0);
      case 'dragenter':
        return ((Dn = fi(Dn, e, t, r, o, a)), !0);
      case 'mouseover':
        return ((Fn = fi(Fn, e, t, r, o, a)), !0);
      case 'pointerover':
        var f = a.pointerId;
        return (ci.set(f, fi(ci.get(f) || null, e, t, r, o, a)), !0);
      case 'gotpointercapture':
        return ((f = a.pointerId), di.set(f, fi(di.get(f) || null, e, t, r, o, a)), !0);
    }
    return !1;
  }
  function Au(e) {
    var t = ur(e.target);
    if (t !== null) {
      var r = ar(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Su(r)), t !== null)) {
            ((e.blockedOn = t),
              zu(e.priority, function () {
                Ou(r);
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
  function dl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Do(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        ((Ut = o), r.target.dispatchEvent(o), (Ut = null));
      } else return ((t = bi(r)), t !== null && zo(t), (e.blockedOn = r), !1);
      t.shift();
    }
    return !0;
  }
  function Du(e, t, r) {
    dl(e) && r.delete(t);
  }
  function bh() {
    ((Mo = !1),
      An !== null && dl(An) && (An = null),
      Dn !== null && dl(Dn) && (Dn = null),
      Fn !== null && dl(Fn) && (Fn = null),
      ci.forEach(Du),
      di.forEach(Du));
  }
  function pi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Mo || ((Mo = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, bh)));
  }
  function hi(e) {
    function t(a) {
      return pi(a, e);
    }
    if (0 < cl.length) {
      pi(cl[0], e);
      for (var r = 1; r < cl.length; r++) {
        var o = cl[r];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      An !== null && pi(An, e),
        Dn !== null && pi(Dn, e),
        Fn !== null && pi(Fn, e),
        ci.forEach(t),
        di.forEach(t),
        r = 0;
      r < Bn.length;
      r++
    )
      ((o = Bn[r]), o.blockedOn === e && (o.blockedOn = null));
    for (; 0 < Bn.length && ((r = Bn[0]), r.blockedOn === null); )
      (Au(r), r.blockedOn === null && Bn.shift());
  }
  var Ir = H.ReactCurrentBatchConfig,
    fl = !0;
  function Nh(e, t, r, o) {
    var a = De,
      f = Ir.transition;
    Ir.transition = null;
    try {
      ((De = 1), Ao(e, t, r, o));
    } finally {
      ((De = a), (Ir.transition = f));
    }
  }
  function Ih(e, t, r, o) {
    var a = De,
      f = Ir.transition;
    Ir.transition = null;
    try {
      ((De = 4), Ao(e, t, r, o));
    } finally {
      ((De = a), (Ir.transition = f));
    }
  }
  function Ao(e, t, r, o) {
    if (fl) {
      var a = Do(e, t, r, o);
      if (a === null) (ts(e, t, o, pl, r), Mu(e, o));
      else if (Eh(a, e, t, r, o)) o.stopPropagation();
      else if ((Mu(e, o), t & 4 && -1 < Ch.indexOf(e))) {
        for (; a !== null; ) {
          var f = bi(a);
          if (
            (f !== null && Pu(f), (f = Do(e, t, r, o)), f === null && ts(e, t, o, pl, r), f === a)
          )
            break;
          a = f;
        }
        a !== null && o.stopPropagation();
      } else ts(e, t, o, null, r);
    }
  }
  var pl = null;
  function Do(e, t, r, o) {
    if (((pl = null), (e = bo(o)), (e = ur(e)), e !== null))
      if (((t = ar(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Su(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((pl = e), null);
  }
  function Fu(e) {
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
        switch (mh()) {
          case Lo:
            return 1;
          case Iu:
            return 4;
          case ll:
          case gh:
            return 16;
          case Tu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Un = null,
    Fo = null,
    hl = null;
  function Bu() {
    if (hl) return hl;
    var e,
      t = Fo,
      r = t.length,
      o,
      a = 'value' in Un ? Un.value : Un.textContent,
      f = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++);
    var y = r - e;
    for (o = 1; o <= y && t[r - o] === a[f - o]; o++);
    return (hl = a.slice(e, 1 < o ? 1 - o : void 0));
  }
  function ml(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function gl() {
    return !0;
  }
  function Uu() {
    return !1;
  }
  function $t(e) {
    function t(r, o, a, f, y) {
      ((this._reactName = r),
        (this._targetInst = a),
        (this.type = o),
        (this.nativeEvent = f),
        (this.target = y),
        (this.currentTarget = null));
      for (var _ in e) e.hasOwnProperty(_) && ((r = e[_]), (this[_] = r ? r(f) : f[_]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? gl
          : Uu),
        (this.isPropagationStopped = Uu),
        this
      );
    }
    return (
      S(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
            (this.isDefaultPrevented = gl));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
            (this.isPropagationStopped = gl));
        },
        persist: function () {},
        isPersistent: gl,
      }),
      t
    );
  }
  var Tr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Bo = $t(Tr),
    mi = S({}, Tr, { view: 0, detail: 0 }),
    Th = $t(mi),
    Uo,
    $o,
    gi,
    yl = S({}, mi, {
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
      getModifierState: Vo,
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
          : (e !== gi &&
              (gi && e.type === 'mousemove'
                ? ((Uo = e.screenX - gi.screenX), ($o = e.screenY - gi.screenY))
                : ($o = Uo = 0),
              (gi = e)),
            Uo);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : $o;
      },
    }),
    $u = $t(yl),
    jh = S({}, yl, { dataTransfer: 0 }),
    Lh = $t(jh),
    Ph = S({}, mi, { relatedTarget: 0 }),
    Ho = $t(Ph),
    Oh = S({}, Tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Rh = $t(Oh),
    zh = S({}, Tr, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Mh = $t(zh),
    Ah = S({}, Tr, { data: 0 }),
    Hu = $t(Ah),
    Dh = {
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
    Fh = {
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
    Bh = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Uh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Bh[e]) ? !!t[e] : !1;
  }
  function Vo() {
    return Uh;
  }
  var $h = S({}, mi, {
      key: function (e) {
        if (e.key) {
          var t = Dh[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = ml(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Fh[e.keyCode] || 'Unidentified'
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
      getModifierState: Vo,
      charCode: function (e) {
        return e.type === 'keypress' ? ml(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? ml(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Hh = $t($h),
    Vh = S({}, yl, {
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
    Vu = $t(Vh),
    Wh = S({}, mi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Vo,
    }),
    qh = $t(Wh),
    Qh = S({}, Tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Gh = $t(Qh),
    Kh = S({}, yl, {
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
    Yh = $t(Kh),
    Xh = [9, 13, 27, 32],
    Wo = p && 'CompositionEvent' in window,
    yi = null;
  p && 'documentMode' in document && (yi = document.documentMode);
  var Zh = p && 'TextEvent' in window && !yi,
    Wu = p && (!Wo || (yi && 8 < yi && 11 >= yi)),
    qu = ' ',
    Qu = !1;
  function Gu(e, t) {
    switch (e) {
      case 'keyup':
        return Xh.indexOf(t.keyCode) !== -1;
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
  function Ku(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var jr = !1;
  function Jh(e, t) {
    switch (e) {
      case 'compositionend':
        return Ku(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Qu = !0), qu);
      case 'textInput':
        return ((e = t.data), e === qu && Qu ? null : e);
      default:
        return null;
    }
  }
  function em(e, t) {
    if (jr)
      return e === 'compositionend' || (!Wo && Gu(e, t))
        ? ((e = Bu()), (hl = Fo = Un = null), (jr = !1), e)
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
        return Wu && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var tm = {
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
  function Yu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!tm[e.type] : t === 'textarea';
  }
  function Xu(e, t, r, o) {
    (yu(o),
      (t = Sl(t, 'onChange')),
      0 < t.length &&
        ((r = new Bo('onChange', 'change', null, r, o)), e.push({ event: r, listeners: t })));
  }
  var vi = null,
    ki = null;
  function nm(e) {
    mc(e, 0);
  }
  function vl(e) {
    var t = zr(e);
    if (zn(t)) return e;
  }
  function rm(e, t) {
    if (e === 'change') return t;
  }
  var Zu = !1;
  if (p) {
    var qo;
    if (p) {
      var Qo = 'oninput' in document;
      if (!Qo) {
        var Ju = document.createElement('div');
        (Ju.setAttribute('oninput', 'return;'), (Qo = typeof Ju.oninput == 'function'));
      }
      qo = Qo;
    } else qo = !1;
    Zu = qo && (!document.documentMode || 9 < document.documentMode);
  }
  function ec() {
    vi && (vi.detachEvent('onpropertychange', tc), (ki = vi = null));
  }
  function tc(e) {
    if (e.propertyName === 'value' && vl(ki)) {
      var t = [];
      (Xu(t, ki, e, bo(e)), wu(nm, t));
    }
  }
  function im(e, t, r) {
    e === 'focusin'
      ? (ec(), (vi = t), (ki = r), vi.attachEvent('onpropertychange', tc))
      : e === 'focusout' && ec();
  }
  function lm(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return vl(ki);
  }
  function om(e, t) {
    if (e === 'click') return vl(t);
  }
  function sm(e, t) {
    if (e === 'input' || e === 'change') return vl(t);
  }
  function am(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var sn = typeof Object.is == 'function' ? Object.is : am;
  function xi(e, t) {
    if (sn(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var r = Object.keys(e),
      o = Object.keys(t);
    if (r.length !== o.length) return !1;
    for (o = 0; o < r.length; o++) {
      var a = r[o];
      if (!h.call(t, a) || !sn(e[a], t[a])) return !1;
    }
    return !0;
  }
  function nc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function rc(e, t) {
    var r = nc(e);
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
      r = nc(r);
    }
  }
  function ic(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? ic(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function lc() {
    for (var e = window, t = ee(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == 'string';
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = ee(e.document);
    }
    return t;
  }
  function Go(e) {
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
  function um(e) {
    var t = lc(),
      r = e.focusedElem,
      o = e.selectionRange;
    if (t !== r && r && r.ownerDocument && ic(r.ownerDocument.documentElement, r)) {
      if (o !== null && Go(r)) {
        if (((t = o.start), (e = o.end), e === void 0 && (e = t), 'selectionStart' in r))
          ((r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length)));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var a = r.textContent.length,
            f = Math.min(o.start, a);
          ((o = o.end === void 0 ? f : Math.min(o.end, a)),
            !e.extend && f > o && ((a = o), (o = f), (f = a)),
            (a = rc(r, f)));
          var y = rc(r, o);
          a &&
            y &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== y.node ||
              e.focusOffset !== y.offset) &&
            ((t = t.createRange()),
            t.setStart(a.node, a.offset),
            e.removeAllRanges(),
            f > o
              ? (e.addRange(t), e.extend(y.node, y.offset))
              : (t.setEnd(y.node, y.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
        ((e = t[r]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var cm = p && 'documentMode' in document && 11 >= document.documentMode,
    Lr = null,
    Ko = null,
    wi = null,
    Yo = !1;
  function oc(e, t, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Yo ||
      Lr == null ||
      Lr !== ee(o) ||
      ((o = Lr),
      'selectionStart' in o && Go(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (wi && xi(wi, o)) ||
        ((wi = o),
        (o = Sl(Ko, 'onSelect')),
        0 < o.length &&
          ((t = new Bo('onSelect', 'select', null, t, r)),
          e.push({ event: t, listeners: o }),
          (t.target = Lr))));
  }
  function kl(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r['Webkit' + e] = 'webkit' + t),
      (r['Moz' + e] = 'moz' + t),
      r
    );
  }
  var Pr = {
      animationend: kl('Animation', 'AnimationEnd'),
      animationiteration: kl('Animation', 'AnimationIteration'),
      animationstart: kl('Animation', 'AnimationStart'),
      transitionend: kl('Transition', 'TransitionEnd'),
    },
    Xo = {},
    sc = {};
  p &&
    ((sc = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Pr.animationend.animation,
      delete Pr.animationiteration.animation,
      delete Pr.animationstart.animation),
    'TransitionEvent' in window || delete Pr.transitionend.transition);
  function xl(e) {
    if (Xo[e]) return Xo[e];
    if (!Pr[e]) return e;
    var t = Pr[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in sc) return (Xo[e] = t[r]);
    return e;
  }
  var ac = xl('animationend'),
    uc = xl('animationiteration'),
    cc = xl('animationstart'),
    dc = xl('transitionend'),
    fc = new Map(),
    pc =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function $n(e, t) {
    (fc.set(e, t), c(t, [e]));
  }
  for (var Zo = 0; Zo < pc.length; Zo++) {
    var Jo = pc[Zo],
      dm = Jo.toLowerCase(),
      fm = Jo[0].toUpperCase() + Jo.slice(1);
    $n(dm, 'on' + fm);
  }
  ($n(ac, 'onAnimationEnd'),
    $n(uc, 'onAnimationIteration'),
    $n(cc, 'onAnimationStart'),
    $n('dblclick', 'onDoubleClick'),
    $n('focusin', 'onFocus'),
    $n('focusout', 'onBlur'),
    $n(dc, 'onTransitionEnd'),
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
  var Si =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    pm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Si));
  function hc(e, t, r) {
    var o = e.type || 'unknown-event';
    ((e.currentTarget = r), dh(o, t, void 0, e), (e.currentTarget = null));
  }
  function mc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var o = e[r],
        a = o.event;
      o = o.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var y = o.length - 1; 0 <= y; y--) {
            var _ = o[y],
              E = _.instance,
              P = _.currentTarget;
            if (((_ = _.listener), E !== f && a.isPropagationStopped())) break e;
            (hc(a, _, P), (f = E));
          }
        else
          for (y = 0; y < o.length; y++) {
            if (
              ((_ = o[y]),
              (E = _.instance),
              (P = _.currentTarget),
              (_ = _.listener),
              E !== f && a.isPropagationStopped())
            )
              break e;
            (hc(a, _, P), (f = E));
          }
      }
    }
    if (il) throw ((e = jo), (il = !1), (jo = null), e);
  }
  function qe(e, t) {
    var r = t[ss];
    r === void 0 && (r = t[ss] = new Set());
    var o = e + '__bubble';
    r.has(o) || (gc(t, e, 2, !1), r.add(o));
  }
  function es(e, t, r) {
    var o = 0;
    (t && (o |= 4), gc(r, e, o, t));
  }
  var wl = '_reactListening' + Math.random().toString(36).slice(2);
  function _i(e) {
    if (!e[wl]) {
      ((e[wl] = !0),
        s.forEach(function (r) {
          r !== 'selectionchange' && (pm.has(r) || es(r, !1, e), es(r, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[wl] || ((t[wl] = !0), es('selectionchange', !1, t));
    }
  }
  function gc(e, t, r, o) {
    switch (Fu(t)) {
      case 1:
        var a = Nh;
        break;
      case 4:
        a = Ih;
        break;
      default:
        a = Ao;
    }
    ((r = a.bind(null, t, r, e)),
      (a = void 0),
      !To || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (a = !0),
      o
        ? a !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: a })
          : e.addEventListener(t, r, !0)
        : a !== void 0
          ? e.addEventListener(t, r, { passive: a })
          : e.addEventListener(t, r, !1));
  }
  function ts(e, t, r, o, a) {
    var f = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var y = o.tag;
        if (y === 3 || y === 4) {
          var _ = o.stateNode.containerInfo;
          if (_ === a || (_.nodeType === 8 && _.parentNode === a)) break;
          if (y === 4)
            for (y = o.return; y !== null; ) {
              var E = y.tag;
              if (
                (E === 3 || E === 4) &&
                ((E = y.stateNode.containerInfo),
                E === a || (E.nodeType === 8 && E.parentNode === a))
              )
                return;
              y = y.return;
            }
          for (; _ !== null; ) {
            if (((y = ur(_)), y === null)) return;
            if (((E = y.tag), E === 5 || E === 6)) {
              o = f = y;
              continue e;
            }
            _ = _.parentNode;
          }
        }
        o = o.return;
      }
    wu(function () {
      var P = f,
        $ = bo(r),
        V = [];
      e: {
        var U = fc.get(e);
        if (U !== void 0) {
          var re = Bo,
            oe = e;
          switch (e) {
            case 'keypress':
              if (ml(r) === 0) break e;
            case 'keydown':
            case 'keyup':
              re = Hh;
              break;
            case 'focusin':
              ((oe = 'focus'), (re = Ho));
              break;
            case 'focusout':
              ((oe = 'blur'), (re = Ho));
              break;
            case 'beforeblur':
            case 'afterblur':
              re = Ho;
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
              re = $u;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              re = Lh;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              re = qh;
              break;
            case ac:
            case uc:
            case cc:
              re = Rh;
              break;
            case dc:
              re = Gh;
              break;
            case 'scroll':
              re = Th;
              break;
            case 'wheel':
              re = Yh;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              re = Mh;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              re = Vu;
          }
          var se = (t & 4) !== 0,
            tt = !se && e === 'scroll',
            j = se ? (U !== null ? U + 'Capture' : null) : U;
          se = [];
          for (var b = P, L; b !== null; ) {
            L = b;
            var K = L.stateNode;
            if (
              (L.tag === 5 &&
                K !== null &&
                ((L = K), j !== null && ((K = li(b, j)), K != null && se.push(Ci(b, K, L)))),
              tt)
            )
              break;
            b = b.return;
          }
          0 < se.length && ((U = new re(U, oe, null, r, $)), V.push({ event: U, listeners: se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((U = e === 'mouseover' || e === 'pointerover'),
            (re = e === 'mouseout' || e === 'pointerout'),
            U && r !== Ut && (oe = r.relatedTarget || r.fromElement) && (ur(oe) || oe[Cn]))
          )
            break e;
          if (
            (re || U) &&
            ((U =
              $.window === $
                ? $
                : (U = $.ownerDocument)
                  ? U.defaultView || U.parentWindow
                  : window),
            re
              ? ((oe = r.relatedTarget || r.toElement),
                (re = P),
                (oe = oe ? ur(oe) : null),
                oe !== null &&
                  ((tt = ar(oe)), oe !== tt || (oe.tag !== 5 && oe.tag !== 6)) &&
                  (oe = null))
              : ((re = null), (oe = P)),
            re !== oe)
          ) {
            if (
              ((se = $u),
              (K = 'onMouseLeave'),
              (j = 'onMouseEnter'),
              (b = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((se = Vu), (K = 'onPointerLeave'), (j = 'onPointerEnter'), (b = 'pointer')),
              (tt = re == null ? U : zr(re)),
              (L = oe == null ? U : zr(oe)),
              (U = new se(K, b + 'leave', re, r, $)),
              (U.target = tt),
              (U.relatedTarget = L),
              (K = null),
              ur($) === P &&
                ((se = new se(j, b + 'enter', oe, r, $)),
                (se.target = L),
                (se.relatedTarget = tt),
                (K = se)),
              (tt = K),
              re && oe)
            )
              t: {
                for (se = re, j = oe, b = 0, L = se; L; L = Or(L)) b++;
                for (L = 0, K = j; K; K = Or(K)) L++;
                for (; 0 < b - L; ) ((se = Or(se)), b--);
                for (; 0 < L - b; ) ((j = Or(j)), L--);
                for (; b--; ) {
                  if (se === j || (j !== null && se === j.alternate)) break t;
                  ((se = Or(se)), (j = Or(j)));
                }
                se = null;
              }
            else se = null;
            (re !== null && yc(V, U, re, se, !1),
              oe !== null && tt !== null && yc(V, tt, oe, se, !0));
          }
        }
        e: {
          if (
            ((U = P ? zr(P) : window),
            (re = U.nodeName && U.nodeName.toLowerCase()),
            re === 'select' || (re === 'input' && U.type === 'file'))
          )
            var ce = rm;
          else if (Yu(U))
            if (Zu) ce = sm;
            else {
              ce = lm;
              var he = im;
            }
          else
            (re = U.nodeName) &&
              re.toLowerCase() === 'input' &&
              (U.type === 'checkbox' || U.type === 'radio') &&
              (ce = om);
          if (ce && (ce = ce(e, P))) {
            Xu(V, ce, r, $);
            break e;
          }
          (he && he(e, U, P),
            e === 'focusout' &&
              (he = U._wrapperState) &&
              he.controlled &&
              U.type === 'number' &&
              Kt(U, 'number', U.value));
        }
        switch (((he = P ? zr(P) : window), e)) {
          case 'focusin':
            (Yu(he) || he.contentEditable === 'true') && ((Lr = he), (Ko = P), (wi = null));
            break;
          case 'focusout':
            wi = Ko = Lr = null;
            break;
          case 'mousedown':
            Yo = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Yo = !1), oc(V, r, $));
            break;
          case 'selectionchange':
            if (cm) break;
          case 'keydown':
          case 'keyup':
            oc(V, r, $);
        }
        var me;
        if (Wo)
          e: {
            switch (e) {
              case 'compositionstart':
                var we = 'onCompositionStart';
                break e;
              case 'compositionend':
                we = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                we = 'onCompositionUpdate';
                break e;
            }
            we = void 0;
          }
        else
          jr
            ? Gu(e, r) && (we = 'onCompositionEnd')
            : e === 'keydown' && r.keyCode === 229 && (we = 'onCompositionStart');
        (we &&
          (Wu &&
            r.locale !== 'ko' &&
            (jr || we !== 'onCompositionStart'
              ? we === 'onCompositionEnd' && jr && (me = Bu())
              : ((Un = $), (Fo = 'value' in Un ? Un.value : Un.textContent), (jr = !0))),
          (he = Sl(P, we)),
          0 < he.length &&
            ((we = new Hu(we, e, null, r, $)),
            V.push({ event: we, listeners: he }),
            me ? (we.data = me) : ((me = Ku(r)), me !== null && (we.data = me)))),
          (me = Zh ? Jh(e, r) : em(e, r)) &&
            ((P = Sl(P, 'onBeforeInput')),
            0 < P.length &&
              (($ = new Hu('onBeforeInput', 'beforeinput', null, r, $)),
              V.push({ event: $, listeners: P }),
              ($.data = me))));
      }
      mc(V, t);
    });
  }
  function Ci(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Sl(e, t) {
    for (var r = t + 'Capture', o = []; e !== null; ) {
      var a = e,
        f = a.stateNode;
      (a.tag === 5 &&
        f !== null &&
        ((a = f),
        (f = li(e, r)),
        f != null && o.unshift(Ci(e, f, a)),
        (f = li(e, t)),
        f != null && o.push(Ci(e, f, a))),
        (e = e.return));
    }
    return o;
  }
  function Or(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function yc(e, t, r, o, a) {
    for (var f = t._reactName, y = []; r !== null && r !== o; ) {
      var _ = r,
        E = _.alternate,
        P = _.stateNode;
      if (E !== null && E === o) break;
      (_.tag === 5 &&
        P !== null &&
        ((_ = P),
        a
          ? ((E = li(r, f)), E != null && y.unshift(Ci(r, E, _)))
          : a || ((E = li(r, f)), E != null && y.push(Ci(r, E, _)))),
        (r = r.return));
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var hm = /\r\n?/g,
    mm = /\u0000|\uFFFD/g;
  function vc(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        hm,
        `
`
      )
      .replace(mm, '');
  }
  function _l(e, t, r) {
    if (((t = vc(t)), vc(e) !== t && r)) throw Error(l(425));
  }
  function Cl() {}
  var ns = null,
    rs = null;
  function is(e, t) {
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
  var ls = typeof setTimeout == 'function' ? setTimeout : void 0,
    gm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    kc = typeof Promise == 'function' ? Promise : void 0,
    ym =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof kc < 'u'
          ? function (e) {
              return kc.resolve(null).then(e).catch(vm);
            }
          : ls;
  function vm(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function os(e, t) {
    var r = t,
      o = 0;
    do {
      var a = r.nextSibling;
      if ((e.removeChild(r), a && a.nodeType === 8))
        if (((r = a.data), r === '/$')) {
          if (o === 0) {
            (e.removeChild(a), hi(t));
            return;
          }
          o--;
        } else (r !== '$' && r !== '$?' && r !== '$!') || o++;
      r = a;
    } while (r);
    hi(t);
  }
  function Hn(e) {
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
  function xc(e) {
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
  var Rr = Math.random().toString(36).slice(2),
    mn = '__reactFiber$' + Rr,
    Ei = '__reactProps$' + Rr,
    Cn = '__reactContainer$' + Rr,
    ss = '__reactEvents$' + Rr,
    km = '__reactListeners$' + Rr,
    xm = '__reactHandles$' + Rr;
  function ur(e) {
    var t = e[mn];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[Cn] || r[mn])) {
        if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
          for (e = xc(e); e !== null; ) {
            if ((r = e[mn])) return r;
            e = xc(e);
          }
        return t;
      }
      ((e = r), (r = e.parentNode));
    }
    return null;
  }
  function bi(e) {
    return (
      (e = e[mn] || e[Cn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function zr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function El(e) {
    return e[Ei] || null;
  }
  var as = [],
    Mr = -1;
  function Vn(e) {
    return { current: e };
  }
  function Qe(e) {
    0 > Mr || ((e.current = as[Mr]), (as[Mr] = null), Mr--);
  }
  function Ue(e, t) {
    (Mr++, (as[Mr] = e.current), (e.current = t));
  }
  var Wn = {},
    yt = Vn(Wn),
    It = Vn(!1),
    cr = Wn;
  function Ar(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Wn;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
      return o.__reactInternalMemoizedMaskedChildContext;
    var a = {},
      f;
    for (f in r) a[f] = t[f];
    return (
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      a
    );
  }
  function Tt(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function bl() {
    (Qe(It), Qe(yt));
  }
  function wc(e, t, r) {
    if (yt.current !== Wn) throw Error(l(168));
    (Ue(yt, t), Ue(It, r));
  }
  function Sc(e, t, r) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != 'function')) return r;
    o = o.getChildContext();
    for (var a in o) if (!(a in t)) throw Error(l(108, be(e) || 'Unknown', a));
    return S({}, r, o);
  }
  function Nl(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Wn),
      (cr = yt.current),
      Ue(yt, e),
      Ue(It, It.current),
      !0
    );
  }
  function _c(e, t, r) {
    var o = e.stateNode;
    if (!o) throw Error(l(169));
    (r
      ? ((e = Sc(e, t, cr)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        Qe(It),
        Qe(yt),
        Ue(yt, e))
      : Qe(It),
      Ue(It, r));
  }
  var En = null,
    Il = !1,
    us = !1;
  function Cc(e) {
    En === null ? (En = [e]) : En.push(e);
  }
  function wm(e) {
    ((Il = !0), Cc(e));
  }
  function qn() {
    if (!us && En !== null) {
      us = !0;
      var e = 0,
        t = De;
      try {
        var r = En;
        for (De = 1; e < r.length; e++) {
          var o = r[e];
          do o = o(!0);
          while (o !== null);
        }
        ((En = null), (Il = !1));
      } catch (a) {
        throw (En !== null && (En = En.slice(e + 1)), bu(Lo, qn), a);
      } finally {
        ((De = t), (us = !1));
      }
    }
    return null;
  }
  var Dr = [],
    Fr = 0,
    Tl = null,
    jl = 0,
    Xt = [],
    Zt = 0,
    dr = null,
    bn = 1,
    Nn = '';
  function fr(e, t) {
    ((Dr[Fr++] = jl), (Dr[Fr++] = Tl), (Tl = e), (jl = t));
  }
  function Ec(e, t, r) {
    ((Xt[Zt++] = bn), (Xt[Zt++] = Nn), (Xt[Zt++] = dr), (dr = e));
    var o = bn;
    e = Nn;
    var a = 32 - on(o) - 1;
    ((o &= ~(1 << a)), (r += 1));
    var f = 32 - on(t) + a;
    if (30 < f) {
      var y = a - (a % 5);
      ((f = (o & ((1 << y) - 1)).toString(32)),
        (o >>= y),
        (a -= y),
        (bn = (1 << (32 - on(t) + a)) | (r << a) | o),
        (Nn = f + e));
    } else ((bn = (1 << f) | (r << a) | o), (Nn = e));
  }
  function cs(e) {
    e.return !== null && (fr(e, 1), Ec(e, 1, 0));
  }
  function ds(e) {
    for (; e === Tl; ) ((Tl = Dr[--Fr]), (Dr[Fr] = null), (jl = Dr[--Fr]), (Dr[Fr] = null));
    for (; e === dr; )
      ((dr = Xt[--Zt]),
        (Xt[Zt] = null),
        (Nn = Xt[--Zt]),
        (Xt[Zt] = null),
        (bn = Xt[--Zt]),
        (Xt[Zt] = null));
  }
  var Ht = null,
    Vt = null,
    Ke = !1,
    an = null;
  function bc(e, t) {
    var r = nn(5, null, null, 0);
    ((r.elementType = 'DELETED'),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
  }
  function Nc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (Ht = e), (Vt = Hn(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ht = e), (Vt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = dr !== null ? { id: bn, overflow: Nn } : null),
              (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
              (r = nn(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (Ht = e),
              (Vt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function fs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ps(e) {
    if (Ke) {
      var t = Vt;
      if (t) {
        var r = t;
        if (!Nc(e, t)) {
          if (fs(e)) throw Error(l(418));
          t = Hn(r.nextSibling);
          var o = Ht;
          t && Nc(e, t) ? bc(o, r) : ((e.flags = (e.flags & -4097) | 2), (Ke = !1), (Ht = e));
        }
      } else {
        if (fs(e)) throw Error(l(418));
        ((e.flags = (e.flags & -4097) | 2), (Ke = !1), (Ht = e));
      }
    }
  }
  function Ic(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ht = e;
  }
  function Ll(e) {
    if (e !== Ht) return !1;
    if (!Ke) return (Ic(e), (Ke = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !is(e.type, e.memoizedProps))),
      t && (t = Vt))
    ) {
      if (fs(e)) throw (Tc(), Error(l(418)));
      for (; t; ) (bc(e, t), (t = Hn(t.nextSibling)));
    }
    if ((Ic(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === '/$') {
              if (t === 0) {
                Vt = Hn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        Vt = null;
      }
    } else Vt = Ht ? Hn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Tc() {
    for (var e = Vt; e; ) e = Hn(e.nextSibling);
  }
  function Br() {
    ((Vt = Ht = null), (Ke = !1));
  }
  function hs(e) {
    an === null ? (an = [e]) : an.push(e);
  }
  var Sm = H.ReactCurrentBatchConfig;
  function Ni(e, t, r) {
    if (((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(l(309));
          var o = r.stateNode;
        }
        if (!o) throw Error(l(147, e));
        var a = o,
          f = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === f
          ? t.ref
          : ((t = function (y) {
              var _ = a.refs;
              y === null ? delete _[f] : (_[f] = y);
            }),
            (t._stringRef = f),
            t);
      }
      if (typeof e != 'string') throw Error(l(284));
      if (!r._owner) throw Error(l(290, e));
    }
    return e;
  }
  function Pl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        l(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      )
    );
  }
  function jc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Lc(e) {
    function t(j, b) {
      if (e) {
        var L = j.deletions;
        L === null ? ((j.deletions = [b]), (j.flags |= 16)) : L.push(b);
      }
    }
    function r(j, b) {
      if (!e) return null;
      for (; b !== null; ) (t(j, b), (b = b.sibling));
      return null;
    }
    function o(j, b) {
      for (j = new Map(); b !== null; )
        (b.key !== null ? j.set(b.key, b) : j.set(b.index, b), (b = b.sibling));
      return j;
    }
    function a(j, b) {
      return ((j = er(j, b)), (j.index = 0), (j.sibling = null), j);
    }
    function f(j, b, L) {
      return (
        (j.index = L),
        e
          ? ((L = j.alternate),
            L !== null ? ((L = L.index), L < b ? ((j.flags |= 2), b) : L) : ((j.flags |= 2), b))
          : ((j.flags |= 1048576), b)
      );
    }
    function y(j) {
      return (e && j.alternate === null && (j.flags |= 2), j);
    }
    function _(j, b, L, K) {
      return b === null || b.tag !== 6
        ? ((b = la(L, j.mode, K)), (b.return = j), b)
        : ((b = a(b, L)), (b.return = j), b);
    }
    function E(j, b, L, K) {
      var ce = L.type;
      return ce === B
        ? $(j, b, L.props.children, K, L.key)
        : b !== null &&
            (b.elementType === ce ||
              (typeof ce == 'object' && ce !== null && ce.$$typeof === ye && jc(ce) === b.type))
          ? ((K = a(b, L.props)), (K.ref = Ni(j, b, L)), (K.return = j), K)
          : ((K = no(L.type, L.key, L.props, null, j.mode, K)),
            (K.ref = Ni(j, b, L)),
            (K.return = j),
            K);
    }
    function P(j, b, L, K) {
      return b === null ||
        b.tag !== 4 ||
        b.stateNode.containerInfo !== L.containerInfo ||
        b.stateNode.implementation !== L.implementation
        ? ((b = oa(L, j.mode, K)), (b.return = j), b)
        : ((b = a(b, L.children || [])), (b.return = j), b);
    }
    function $(j, b, L, K, ce) {
      return b === null || b.tag !== 7
        ? ((b = xr(L, j.mode, K, ce)), (b.return = j), b)
        : ((b = a(b, L)), (b.return = j), b);
    }
    function V(j, b, L) {
      if ((typeof b == 'string' && b !== '') || typeof b == 'number')
        return ((b = la('' + b, j.mode, L)), (b.return = j), b);
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case X:
            return (
              (L = no(b.type, b.key, b.props, null, j.mode, L)),
              (L.ref = Ni(j, null, b)),
              (L.return = j),
              L
            );
          case R:
            return ((b = oa(b, j.mode, L)), (b.return = j), b);
          case ye:
            var K = b._init;
            return V(j, K(b._payload), L);
        }
        if (ln(b) || ne(b)) return ((b = xr(b, j.mode, L, null)), (b.return = j), b);
        Pl(j, b);
      }
      return null;
    }
    function U(j, b, L, K) {
      var ce = b !== null ? b.key : null;
      if ((typeof L == 'string' && L !== '') || typeof L == 'number')
        return ce !== null ? null : _(j, b, '' + L, K);
      if (typeof L == 'object' && L !== null) {
        switch (L.$$typeof) {
          case X:
            return L.key === ce ? E(j, b, L, K) : null;
          case R:
            return L.key === ce ? P(j, b, L, K) : null;
          case ye:
            return ((ce = L._init), U(j, b, ce(L._payload), K));
        }
        if (ln(L) || ne(L)) return ce !== null ? null : $(j, b, L, K, null);
        Pl(j, L);
      }
      return null;
    }
    function re(j, b, L, K, ce) {
      if ((typeof K == 'string' && K !== '') || typeof K == 'number')
        return ((j = j.get(L) || null), _(b, j, '' + K, ce));
      if (typeof K == 'object' && K !== null) {
        switch (K.$$typeof) {
          case X:
            return ((j = j.get(K.key === null ? L : K.key) || null), E(b, j, K, ce));
          case R:
            return ((j = j.get(K.key === null ? L : K.key) || null), P(b, j, K, ce));
          case ye:
            var he = K._init;
            return re(j, b, L, he(K._payload), ce);
        }
        if (ln(K) || ne(K)) return ((j = j.get(L) || null), $(b, j, K, ce, null));
        Pl(b, K);
      }
      return null;
    }
    function oe(j, b, L, K) {
      for (
        var ce = null, he = null, me = b, we = (b = 0), dt = null;
        me !== null && we < L.length;
        we++
      ) {
        me.index > we ? ((dt = me), (me = null)) : (dt = me.sibling);
        var ze = U(j, me, L[we], K);
        if (ze === null) {
          me === null && (me = dt);
          break;
        }
        (e && me && ze.alternate === null && t(j, me),
          (b = f(ze, b, we)),
          he === null ? (ce = ze) : (he.sibling = ze),
          (he = ze),
          (me = dt));
      }
      if (we === L.length) return (r(j, me), Ke && fr(j, we), ce);
      if (me === null) {
        for (; we < L.length; we++)
          ((me = V(j, L[we], K)),
            me !== null &&
              ((b = f(me, b, we)), he === null ? (ce = me) : (he.sibling = me), (he = me)));
        return (Ke && fr(j, we), ce);
      }
      for (me = o(j, me); we < L.length; we++)
        ((dt = re(me, j, we, L[we], K)),
          dt !== null &&
            (e && dt.alternate !== null && me.delete(dt.key === null ? we : dt.key),
            (b = f(dt, b, we)),
            he === null ? (ce = dt) : (he.sibling = dt),
            (he = dt)));
      return (
        e &&
          me.forEach(function (tr) {
            return t(j, tr);
          }),
        Ke && fr(j, we),
        ce
      );
    }
    function se(j, b, L, K) {
      var ce = ne(L);
      if (typeof ce != 'function') throw Error(l(150));
      if (((L = ce.call(L)), L == null)) throw Error(l(151));
      for (
        var he = (ce = null), me = b, we = (b = 0), dt = null, ze = L.next();
        me !== null && !ze.done;
        we++, ze = L.next()
      ) {
        me.index > we ? ((dt = me), (me = null)) : (dt = me.sibling);
        var tr = U(j, me, ze.value, K);
        if (tr === null) {
          me === null && (me = dt);
          break;
        }
        (e && me && tr.alternate === null && t(j, me),
          (b = f(tr, b, we)),
          he === null ? (ce = tr) : (he.sibling = tr),
          (he = tr),
          (me = dt));
      }
      if (ze.done) return (r(j, me), Ke && fr(j, we), ce);
      if (me === null) {
        for (; !ze.done; we++, ze = L.next())
          ((ze = V(j, ze.value, K)),
            ze !== null &&
              ((b = f(ze, b, we)), he === null ? (ce = ze) : (he.sibling = ze), (he = ze)));
        return (Ke && fr(j, we), ce);
      }
      for (me = o(j, me); !ze.done; we++, ze = L.next())
        ((ze = re(me, j, we, ze.value, K)),
          ze !== null &&
            (e && ze.alternate !== null && me.delete(ze.key === null ? we : ze.key),
            (b = f(ze, b, we)),
            he === null ? (ce = ze) : (he.sibling = ze),
            (he = ze)));
      return (
        e &&
          me.forEach(function (tg) {
            return t(j, tg);
          }),
        Ke && fr(j, we),
        ce
      );
    }
    function tt(j, b, L, K) {
      if (
        (typeof L == 'object' &&
          L !== null &&
          L.type === B &&
          L.key === null &&
          (L = L.props.children),
        typeof L == 'object' && L !== null)
      ) {
        switch (L.$$typeof) {
          case X:
            e: {
              for (var ce = L.key, he = b; he !== null; ) {
                if (he.key === ce) {
                  if (((ce = L.type), ce === B)) {
                    if (he.tag === 7) {
                      (r(j, he.sibling), (b = a(he, L.props.children)), (b.return = j), (j = b));
                      break e;
                    }
                  } else if (
                    he.elementType === ce ||
                    (typeof ce == 'object' &&
                      ce !== null &&
                      ce.$$typeof === ye &&
                      jc(ce) === he.type)
                  ) {
                    (r(j, he.sibling),
                      (b = a(he, L.props)),
                      (b.ref = Ni(j, he, L)),
                      (b.return = j),
                      (j = b));
                    break e;
                  }
                  r(j, he);
                  break;
                } else t(j, he);
                he = he.sibling;
              }
              L.type === B
                ? ((b = xr(L.props.children, j.mode, K, L.key)), (b.return = j), (j = b))
                : ((K = no(L.type, L.key, L.props, null, j.mode, K)),
                  (K.ref = Ni(j, b, L)),
                  (K.return = j),
                  (j = K));
            }
            return y(j);
          case R:
            e: {
              for (he = L.key; b !== null; ) {
                if (b.key === he)
                  if (
                    b.tag === 4 &&
                    b.stateNode.containerInfo === L.containerInfo &&
                    b.stateNode.implementation === L.implementation
                  ) {
                    (r(j, b.sibling), (b = a(b, L.children || [])), (b.return = j), (j = b));
                    break e;
                  } else {
                    r(j, b);
                    break;
                  }
                else t(j, b);
                b = b.sibling;
              }
              ((b = oa(L, j.mode, K)), (b.return = j), (j = b));
            }
            return y(j);
          case ye:
            return ((he = L._init), tt(j, b, he(L._payload), K));
        }
        if (ln(L)) return oe(j, b, L, K);
        if (ne(L)) return se(j, b, L, K);
        Pl(j, L);
      }
      return (typeof L == 'string' && L !== '') || typeof L == 'number'
        ? ((L = '' + L),
          b !== null && b.tag === 6
            ? (r(j, b.sibling), (b = a(b, L)), (b.return = j), (j = b))
            : (r(j, b), (b = la(L, j.mode, K)), (b.return = j), (j = b)),
          y(j))
        : r(j, b);
    }
    return tt;
  }
  var Ur = Lc(!0),
    Pc = Lc(!1),
    Ol = Vn(null),
    Rl = null,
    $r = null,
    ms = null;
  function gs() {
    ms = $r = Rl = null;
  }
  function ys(e) {
    var t = Ol.current;
    (Qe(Ol), (e._currentValue = t));
  }
  function vs(e, t, r) {
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
  function Hr(e, t) {
    ((Rl = e),
      (ms = $r = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (jt = !0), (e.firstContext = null)));
  }
  function Jt(e) {
    var t = e._currentValue;
    if (ms !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), $r === null)) {
        if (Rl === null) throw Error(l(308));
        (($r = e), (Rl.dependencies = { lanes: 0, firstContext: e }));
      } else $r = $r.next = e;
    return t;
  }
  var pr = null;
  function ks(e) {
    pr === null ? (pr = [e]) : pr.push(e);
  }
  function Oc(e, t, r, o) {
    var a = t.interleaved;
    return (
      a === null ? ((r.next = r), ks(t)) : ((r.next = a.next), (a.next = r)),
      (t.interleaved = r),
      In(e, o)
    );
  }
  function In(e, t) {
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
  var Qn = !1;
  function xs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Rc(e, t) {
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
  function Tn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Gn(e, t, r) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (Re & 2) !== 0)) {
      var a = o.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (o.pending = t),
        In(e, r)
      );
    }
    return (
      (a = o.interleaved),
      a === null ? ((t.next = t), ks(o)) : ((t.next = a.next), (a.next = t)),
      (o.interleaved = t),
      In(e, r)
    );
  }
  function zl(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), Ro(e, r));
    }
  }
  function zc(e, t) {
    var r = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), r === o)) {
      var a = null,
        f = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var y = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          (f === null ? (a = f = y) : (f = f.next = y), (r = r.next));
        } while (r !== null);
        f === null ? (a = f = t) : (f = f.next = t);
      } else a = f = t;
      ((r = {
        baseState: o.baseState,
        firstBaseUpdate: a,
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
  function Ml(e, t, r, o) {
    var a = e.updateQueue;
    Qn = !1;
    var f = a.firstBaseUpdate,
      y = a.lastBaseUpdate,
      _ = a.shared.pending;
    if (_ !== null) {
      a.shared.pending = null;
      var E = _,
        P = E.next;
      ((E.next = null), y === null ? (f = P) : (y.next = P), (y = E));
      var $ = e.alternate;
      $ !== null &&
        (($ = $.updateQueue),
        (_ = $.lastBaseUpdate),
        _ !== y && (_ === null ? ($.firstBaseUpdate = P) : (_.next = P), ($.lastBaseUpdate = E)));
    }
    if (f !== null) {
      var V = a.baseState;
      ((y = 0), ($ = P = E = null), (_ = f));
      do {
        var U = _.lane,
          re = _.eventTime;
        if ((o & U) === U) {
          $ !== null &&
            ($ = $.next =
              {
                eventTime: re,
                lane: 0,
                tag: _.tag,
                payload: _.payload,
                callback: _.callback,
                next: null,
              });
          e: {
            var oe = e,
              se = _;
            switch (((U = t), (re = r), se.tag)) {
              case 1:
                if (((oe = se.payload), typeof oe == 'function')) {
                  V = oe.call(re, V, U);
                  break e;
                }
                V = oe;
                break e;
              case 3:
                oe.flags = (oe.flags & -65537) | 128;
              case 0:
                if (
                  ((oe = se.payload),
                  (U = typeof oe == 'function' ? oe.call(re, V, U) : oe),
                  U == null)
                )
                  break e;
                V = S({}, V, U);
                break e;
              case 2:
                Qn = !0;
            }
          }
          _.callback !== null &&
            _.lane !== 0 &&
            ((e.flags |= 64), (U = a.effects), U === null ? (a.effects = [_]) : U.push(_));
        } else
          ((re = {
            eventTime: re,
            lane: U,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null,
          }),
            $ === null ? ((P = $ = re), (E = V)) : ($ = $.next = re),
            (y |= U));
        if (((_ = _.next), _ === null)) {
          if (((_ = a.shared.pending), _ === null)) break;
          ((U = _),
            (_ = U.next),
            (U.next = null),
            (a.lastBaseUpdate = U),
            (a.shared.pending = null));
        }
      } while (!0);
      if (
        ($ === null && (E = V),
        (a.baseState = E),
        (a.firstBaseUpdate = P),
        (a.lastBaseUpdate = $),
        (t = a.shared.interleaved),
        t !== null)
      ) {
        a = t;
        do ((y |= a.lane), (a = a.next));
        while (a !== t);
      } else f === null && (a.shared.lanes = 0);
      ((gr |= y), (e.lanes = y), (e.memoizedState = V));
    }
  }
  function Mc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var o = e[t],
          a = o.callback;
        if (a !== null) {
          if (((o.callback = null), (o = r), typeof a != 'function')) throw Error(l(191, a));
          a.call(o);
        }
      }
  }
  var Ii = {},
    gn = Vn(Ii),
    Ti = Vn(Ii),
    ji = Vn(Ii);
  function hr(e) {
    if (e === Ii) throw Error(l(174));
    return e;
  }
  function ws(e, t) {
    switch ((Ue(ji, t), Ue(Ti, e), Ue(gn, Ii), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Y(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Y(t, e)));
    }
    (Qe(gn), Ue(gn, t));
  }
  function Vr() {
    (Qe(gn), Qe(Ti), Qe(ji));
  }
  function Ac(e) {
    hr(ji.current);
    var t = hr(gn.current),
      r = Y(t, e.type);
    t !== r && (Ue(Ti, e), Ue(gn, r));
  }
  function Ss(e) {
    Ti.current === e && (Qe(gn), Qe(Ti));
  }
  var Ye = Vn(0);
  function Al(e) {
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
  var _s = [];
  function Cs() {
    for (var e = 0; e < _s.length; e++) _s[e]._workInProgressVersionPrimary = null;
    _s.length = 0;
  }
  var Dl = H.ReactCurrentDispatcher,
    Es = H.ReactCurrentBatchConfig,
    mr = 0,
    Xe = null,
    ot = null,
    ut = null,
    Fl = !1,
    Li = !1,
    Pi = 0,
    _m = 0;
  function vt() {
    throw Error(l(321));
  }
  function bs(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!sn(e[r], t[r])) return !1;
    return !0;
  }
  function Ns(e, t, r, o, a, f) {
    if (
      ((mr = f),
      (Xe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Dl.current = e === null || e.memoizedState === null ? Nm : Im),
      (e = r(o, a)),
      Li)
    ) {
      f = 0;
      do {
        if (((Li = !1), (Pi = 0), 25 <= f)) throw Error(l(301));
        ((f += 1), (ut = ot = null), (t.updateQueue = null), (Dl.current = Tm), (e = r(o, a)));
      } while (Li);
    }
    if (
      ((Dl.current = $l),
      (t = ot !== null && ot.next !== null),
      (mr = 0),
      (ut = ot = Xe = null),
      (Fl = !1),
      t)
    )
      throw Error(l(300));
    return e;
  }
  function Is() {
    var e = Pi !== 0;
    return ((Pi = 0), e);
  }
  function yn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (ut === null ? (Xe.memoizedState = ut = e) : (ut = ut.next = e), ut);
  }
  function en() {
    if (ot === null) {
      var e = Xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ot.next;
    var t = ut === null ? Xe.memoizedState : ut.next;
    if (t !== null) ((ut = t), (ot = e));
    else {
      if (e === null) throw Error(l(310));
      ((ot = e),
        (e = {
          memoizedState: ot.memoizedState,
          baseState: ot.baseState,
          baseQueue: ot.baseQueue,
          queue: ot.queue,
          next: null,
        }),
        ut === null ? (Xe.memoizedState = ut = e) : (ut = ut.next = e));
    }
    return ut;
  }
  function Oi(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Ts(e) {
    var t = en(),
      r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var o = ot,
      a = o.baseQueue,
      f = r.pending;
    if (f !== null) {
      if (a !== null) {
        var y = a.next;
        ((a.next = f.next), (f.next = y));
      }
      ((o.baseQueue = a = f), (r.pending = null));
    }
    if (a !== null) {
      ((f = a.next), (o = o.baseState));
      var _ = (y = null),
        E = null,
        P = f;
      do {
        var $ = P.lane;
        if ((mr & $) === $)
          (E !== null &&
            (E = E.next =
              {
                lane: 0,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null,
              }),
            (o = P.hasEagerState ? P.eagerState : e(o, P.action)));
        else {
          var V = {
            lane: $,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null,
          };
          (E === null ? ((_ = E = V), (y = o)) : (E = E.next = V), (Xe.lanes |= $), (gr |= $));
        }
        P = P.next;
      } while (P !== null && P !== f);
      (E === null ? (y = o) : (E.next = _),
        sn(o, t.memoizedState) || (jt = !0),
        (t.memoizedState = o),
        (t.baseState = y),
        (t.baseQueue = E),
        (r.lastRenderedState = o));
    }
    if (((e = r.interleaved), e !== null)) {
      a = e;
      do ((f = a.lane), (Xe.lanes |= f), (gr |= f), (a = a.next));
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function js(e) {
    var t = en(),
      r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var o = r.dispatch,
      a = r.pending,
      f = t.memoizedState;
    if (a !== null) {
      r.pending = null;
      var y = (a = a.next);
      do ((f = e(f, y.action)), (y = y.next));
      while (y !== a);
      (sn(f, t.memoizedState) || (jt = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (r.lastRenderedState = f));
    }
    return [f, o];
  }
  function Dc() {}
  function Fc(e, t) {
    var r = Xe,
      o = en(),
      a = t(),
      f = !sn(o.memoizedState, a);
    if (
      (f && ((o.memoizedState = a), (jt = !0)),
      (o = o.queue),
      Ls($c.bind(null, r, o, e), [e]),
      o.getSnapshot !== t || f || (ut !== null && ut.memoizedState.tag & 1))
    ) {
      if (((r.flags |= 2048), Ri(9, Uc.bind(null, r, o, a, t), void 0, null), ct === null))
        throw Error(l(349));
      (mr & 30) !== 0 || Bc(r, t, a);
    }
    return a;
  }
  function Bc(e, t, r) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Xe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Xe.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
  }
  function Uc(e, t, r, o) {
    ((t.value = r), (t.getSnapshot = o), Hc(t) && Vc(e));
  }
  function $c(e, t, r) {
    return r(function () {
      Hc(t) && Vc(e);
    });
  }
  function Hc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !sn(e, r);
    } catch {
      return !0;
    }
  }
  function Vc(e) {
    var t = In(e, 1);
    t !== null && fn(t, e, 1, -1);
  }
  function Wc(e) {
    var t = yn();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Oi,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = bm.bind(null, Xe, e)),
      [t.memoizedState, e]
    );
  }
  function Ri(e, t, r, o) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: o, next: null }),
      (t = Xe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Xe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((o = r.next), (r.next = e), (e.next = o), (t.lastEffect = e))),
      e
    );
  }
  function qc() {
    return en().memoizedState;
  }
  function Bl(e, t, r, o) {
    var a = yn();
    ((Xe.flags |= e), (a.memoizedState = Ri(1 | t, r, void 0, o === void 0 ? null : o)));
  }
  function Ul(e, t, r, o) {
    var a = en();
    o = o === void 0 ? null : o;
    var f = void 0;
    if (ot !== null) {
      var y = ot.memoizedState;
      if (((f = y.destroy), o !== null && bs(o, y.deps))) {
        a.memoizedState = Ri(t, r, f, o);
        return;
      }
    }
    ((Xe.flags |= e), (a.memoizedState = Ri(1 | t, r, f, o)));
  }
  function Qc(e, t) {
    return Bl(8390656, 8, e, t);
  }
  function Ls(e, t) {
    return Ul(2048, 8, e, t);
  }
  function Gc(e, t) {
    return Ul(4, 2, e, t);
  }
  function Kc(e, t) {
    return Ul(4, 4, e, t);
  }
  function Yc(e, t) {
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
  function Xc(e, t, r) {
    return ((r = r != null ? r.concat([e]) : null), Ul(4, 4, Yc.bind(null, t, e), r));
  }
  function Ps() {}
  function Zc(e, t) {
    var r = en();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && bs(t, o[1]) ? o[0] : ((r.memoizedState = [e, t]), e);
  }
  function Jc(e, t) {
    var r = en();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && bs(t, o[1])
      ? o[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function ed(e, t, r) {
    return (mr & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (jt = !0)), (e.memoizedState = r))
      : (sn(r, t) || ((r = ju()), (Xe.lanes |= r), (gr |= r), (e.baseState = !0)), t);
  }
  function Cm(e, t) {
    var r = De;
    ((De = r !== 0 && 4 > r ? r : 4), e(!0));
    var o = Es.transition;
    Es.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((De = r), (Es.transition = o));
    }
  }
  function td() {
    return en().memoizedState;
  }
  function Em(e, t, r) {
    var o = Zn(e);
    if (((r = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null }), nd(e)))
      rd(t, r);
    else if (((r = Oc(e, t, r, o)), r !== null)) {
      var a = Et();
      (fn(r, e, o, a), id(r, t, o));
    }
  }
  function bm(e, t, r) {
    var o = Zn(e),
      a = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (nd(e)) rd(t, a);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var y = t.lastRenderedState,
            _ = f(y, r);
          if (((a.hasEagerState = !0), (a.eagerState = _), sn(_, y))) {
            var E = t.interleaved;
            (E === null ? ((a.next = a), ks(t)) : ((a.next = E.next), (E.next = a)),
              (t.interleaved = a));
            return;
          }
        } catch {
        } finally {
        }
      ((r = Oc(e, t, a, o)), r !== null && ((a = Et()), fn(r, e, o, a), id(r, t, o)));
    }
  }
  function nd(e) {
    var t = e.alternate;
    return e === Xe || (t !== null && t === Xe);
  }
  function rd(e, t) {
    Li = Fl = !0;
    var r = e.pending;
    (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t));
  }
  function id(e, t, r) {
    if ((r & 4194240) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), Ro(e, r));
    }
  }
  var $l = {
      readContext: Jt,
      useCallback: vt,
      useContext: vt,
      useEffect: vt,
      useImperativeHandle: vt,
      useInsertionEffect: vt,
      useLayoutEffect: vt,
      useMemo: vt,
      useReducer: vt,
      useRef: vt,
      useState: vt,
      useDebugValue: vt,
      useDeferredValue: vt,
      useTransition: vt,
      useMutableSource: vt,
      useSyncExternalStore: vt,
      useId: vt,
      unstable_isNewReconciler: !1,
    },
    Nm = {
      readContext: Jt,
      useCallback: function (e, t) {
        return ((yn().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Jt,
      useEffect: Qc,
      useImperativeHandle: function (e, t, r) {
        return ((r = r != null ? r.concat([e]) : null), Bl(4194308, 4, Yc.bind(null, t, e), r));
      },
      useLayoutEffect: function (e, t) {
        return Bl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Bl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = yn();
        return ((t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, r) {
        var o = yn();
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
          (e = e.dispatch = Em.bind(null, Xe, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = yn();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Wc,
      useDebugValue: Ps,
      useDeferredValue: function (e) {
        return (yn().memoizedState = e);
      },
      useTransition: function () {
        var e = Wc(!1),
          t = e[0];
        return ((e = Cm.bind(null, e[1])), (yn().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var o = Xe,
          a = yn();
        if (Ke) {
          if (r === void 0) throw Error(l(407));
          r = r();
        } else {
          if (((r = t()), ct === null)) throw Error(l(349));
          (mr & 30) !== 0 || Bc(o, t, r);
        }
        a.memoizedState = r;
        var f = { value: r, getSnapshot: t };
        return (
          (a.queue = f),
          Qc($c.bind(null, o, f, e), [e]),
          (o.flags |= 2048),
          Ri(9, Uc.bind(null, o, f, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = yn(),
          t = ct.identifierPrefix;
        if (Ke) {
          var r = Nn,
            o = bn;
          ((r = (o & ~(1 << (32 - on(o) - 1))).toString(32) + r),
            (t = ':' + t + 'R' + r),
            (r = Pi++),
            0 < r && (t += 'H' + r.toString(32)),
            (t += ':'));
        } else ((r = _m++), (t = ':' + t + 'r' + r.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Im = {
      readContext: Jt,
      useCallback: Zc,
      useContext: Jt,
      useEffect: Ls,
      useImperativeHandle: Xc,
      useInsertionEffect: Gc,
      useLayoutEffect: Kc,
      useMemo: Jc,
      useReducer: Ts,
      useRef: qc,
      useState: function () {
        return Ts(Oi);
      },
      useDebugValue: Ps,
      useDeferredValue: function (e) {
        var t = en();
        return ed(t, ot.memoizedState, e);
      },
      useTransition: function () {
        var e = Ts(Oi)[0],
          t = en().memoizedState;
        return [e, t];
      },
      useMutableSource: Dc,
      useSyncExternalStore: Fc,
      useId: td,
      unstable_isNewReconciler: !1,
    },
    Tm = {
      readContext: Jt,
      useCallback: Zc,
      useContext: Jt,
      useEffect: Ls,
      useImperativeHandle: Xc,
      useInsertionEffect: Gc,
      useLayoutEffect: Kc,
      useMemo: Jc,
      useReducer: js,
      useRef: qc,
      useState: function () {
        return js(Oi);
      },
      useDebugValue: Ps,
      useDeferredValue: function (e) {
        var t = en();
        return ot === null ? (t.memoizedState = e) : ed(t, ot.memoizedState, e);
      },
      useTransition: function () {
        var e = js(Oi)[0],
          t = en().memoizedState;
        return [e, t];
      },
      useMutableSource: Dc,
      useSyncExternalStore: Fc,
      useId: td,
      unstable_isNewReconciler: !1,
    };
  function un(e, t) {
    if (e && e.defaultProps) {
      ((t = S({}, t)), (e = e.defaultProps));
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function Os(e, t, r, o) {
    ((t = e.memoizedState),
      (r = r(o, t)),
      (r = r == null ? t : S({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r));
  }
  var Hl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ar(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var o = Et(),
        a = Zn(e),
        f = Tn(o, a);
      ((f.payload = t),
        r != null && (f.callback = r),
        (t = Gn(e, f, a)),
        t !== null && (fn(t, e, a, o), zl(t, e, a)));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var o = Et(),
        a = Zn(e),
        f = Tn(o, a);
      ((f.tag = 1),
        (f.payload = t),
        r != null && (f.callback = r),
        (t = Gn(e, f, a)),
        t !== null && (fn(t, e, a, o), zl(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Et(),
        o = Zn(e),
        a = Tn(r, o);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = Gn(e, a, o)),
        t !== null && (fn(t, e, o, r), zl(t, e, o)));
    },
  };
  function ld(e, t, r, o, a, f, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(o, f, y)
        : t.prototype && t.prototype.isPureReactComponent
          ? !xi(r, o) || !xi(a, f)
          : !0
    );
  }
  function od(e, t, r) {
    var o = !1,
      a = Wn,
      f = t.contextType;
    return (
      typeof f == 'object' && f !== null
        ? (f = Jt(f))
        : ((a = Tt(t) ? cr : yt.current),
          (o = t.contextTypes),
          (f = (o = o != null) ? Ar(e, a) : Wn)),
      (t = new t(r, f)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Hl),
      (e.stateNode = t),
      (t._reactInternals = e),
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = f)),
      t
    );
  }
  function sd(e, t, r, o) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, o),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(r, o),
      t.state !== e && Hl.enqueueReplaceState(t, t.state, null));
  }
  function Rs(e, t, r, o) {
    var a = e.stateNode;
    ((a.props = r), (a.state = e.memoizedState), (a.refs = {}), xs(e));
    var f = t.contextType;
    (typeof f == 'object' && f !== null
      ? (a.context = Jt(f))
      : ((f = Tt(t) ? cr : yt.current), (a.context = Ar(e, f))),
      (a.state = e.memoizedState),
      (f = t.getDerivedStateFromProps),
      typeof f == 'function' && (Os(e, t, f, r), (a.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function' ||
        (typeof a.UNSAFE_componentWillMount != 'function' &&
          typeof a.componentWillMount != 'function') ||
        ((t = a.state),
        typeof a.componentWillMount == 'function' && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == 'function' && a.UNSAFE_componentWillMount(),
        t !== a.state && Hl.enqueueReplaceState(a, a.state, null),
        Ml(e, r, a, o),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function Wr(e, t) {
    try {
      var r = '',
        o = t;
      do ((r += Ce(o)), (o = o.return));
      while (o);
      var a = r;
    } catch (f) {
      a =
        `
Error generating stack: ` +
        f.message +
        `
` +
        f.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function zs(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function Ms(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var jm = typeof WeakMap == 'function' ? WeakMap : Map;
  function ad(e, t, r) {
    ((r = Tn(-1, r)), (r.tag = 3), (r.payload = { element: null }));
    var o = t.value;
    return (
      (r.callback = function () {
        (Yl || ((Yl = !0), (Xs = o)), Ms(e, t));
      }),
      r
    );
  }
  function ud(e, t, r) {
    ((r = Tn(-1, r)), (r.tag = 3));
    var o = e.type.getDerivedStateFromError;
    if (typeof o == 'function') {
      var a = t.value;
      ((r.payload = function () {
        return o(a);
      }),
        (r.callback = function () {
          Ms(e, t);
        }));
    }
    var f = e.stateNode;
    return (
      f !== null &&
        typeof f.componentDidCatch == 'function' &&
        (r.callback = function () {
          (Ms(e, t),
            typeof o != 'function' && (Yn === null ? (Yn = new Set([this])) : Yn.add(this)));
          var y = t.stack;
          this.componentDidCatch(t.value, { componentStack: y !== null ? y : '' });
        }),
      r
    );
  }
  function cd(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new jm();
      var a = new Set();
      o.set(t, a);
    } else ((a = o.get(t)), a === void 0 && ((a = new Set()), o.set(t, a)));
    a.has(r) || (a.add(r), (e = Vm.bind(null, e, t, r)), t.then(e, e));
  }
  function dd(e) {
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
  function fd(e, t, r, o, a) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null ? (r.tag = 17) : ((t = Tn(-1, 1)), (t.tag = 2), Gn(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = a), e);
  }
  var Lm = H.ReactCurrentOwner,
    jt = !1;
  function Ct(e, t, r, o) {
    t.child = e === null ? Pc(t, null, r, o) : Ur(t, e.child, r, o);
  }
  function pd(e, t, r, o, a) {
    r = r.render;
    var f = t.ref;
    return (
      Hr(t, a),
      (o = Ns(e, t, r, o, f, a)),
      (r = Is()),
      e !== null && !jt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), jn(e, t, a))
        : (Ke && r && cs(t), (t.flags |= 1), Ct(e, t, o, a), t.child)
    );
  }
  function hd(e, t, r, o, a) {
    if (e === null) {
      var f = r.type;
      return typeof f == 'function' &&
        !ia(f) &&
        f.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = f), md(e, t, f, o, a))
        : ((e = no(r.type, null, o, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((f = e.child), (e.lanes & a) === 0)) {
      var y = f.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : xi), r(y, o) && e.ref === t.ref))
        return jn(e, t, a);
    }
    return ((t.flags |= 1), (e = er(f, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function md(e, t, r, o, a) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (xi(f, o) && e.ref === t.ref)
        if (((jt = !1), (t.pendingProps = o = f), (e.lanes & a) !== 0))
          (e.flags & 131072) !== 0 && (jt = !0);
        else return ((t.lanes = e.lanes), jn(e, t, a));
    }
    return As(e, t, r, o, a);
  }
  function gd(e, t, r) {
    var o = t.pendingProps,
      a = o.children,
      f = e !== null ? e.memoizedState : null;
    if (o.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          Ue(Qr, Wt),
          (Wt |= r));
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = f !== null ? f.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            Ue(Qr, Wt),
            (Wt |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (o = f !== null ? f.baseLanes : r),
          Ue(Qr, Wt),
          (Wt |= o));
      }
    else
      (f !== null ? ((o = f.baseLanes | r), (t.memoizedState = null)) : (o = r),
        Ue(Qr, Wt),
        (Wt |= o));
    return (Ct(e, t, a, r), t.child);
  }
  function yd(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function As(e, t, r, o, a) {
    var f = Tt(r) ? cr : yt.current;
    return (
      (f = Ar(t, f)),
      Hr(t, a),
      (r = Ns(e, t, r, o, f, a)),
      (o = Is()),
      e !== null && !jt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), jn(e, t, a))
        : (Ke && o && cs(t), (t.flags |= 1), Ct(e, t, r, a), t.child)
    );
  }
  function vd(e, t, r, o, a) {
    if (Tt(r)) {
      var f = !0;
      Nl(t);
    } else f = !1;
    if ((Hr(t, a), t.stateNode === null)) (Wl(e, t), od(t, r, o), Rs(t, r, o, a), (o = !0));
    else if (e === null) {
      var y = t.stateNode,
        _ = t.memoizedProps;
      y.props = _;
      var E = y.context,
        P = r.contextType;
      typeof P == 'object' && P !== null
        ? (P = Jt(P))
        : ((P = Tt(r) ? cr : yt.current), (P = Ar(t, P)));
      var $ = r.getDerivedStateFromProps,
        V = typeof $ == 'function' || typeof y.getSnapshotBeforeUpdate == 'function';
      (V ||
        (typeof y.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof y.componentWillReceiveProps != 'function') ||
        ((_ !== o || E !== P) && sd(t, y, o, P)),
        (Qn = !1));
      var U = t.memoizedState;
      ((y.state = U),
        Ml(t, o, y, a),
        (E = t.memoizedState),
        _ !== o || U !== E || It.current || Qn
          ? (typeof $ == 'function' && (Os(t, r, $, o), (E = t.memoizedState)),
            (_ = Qn || ld(t, r, _, o, U, E, P))
              ? (V ||
                  (typeof y.UNSAFE_componentWillMount != 'function' &&
                    typeof y.componentWillMount != 'function') ||
                  (typeof y.componentWillMount == 'function' && y.componentWillMount(),
                  typeof y.UNSAFE_componentWillMount == 'function' &&
                    y.UNSAFE_componentWillMount()),
                typeof y.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof y.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = E)),
            (y.props = o),
            (y.state = E),
            (y.context = P),
            (o = _))
          : (typeof y.componentDidMount == 'function' && (t.flags |= 4194308), (o = !1)));
    } else {
      ((y = t.stateNode),
        Rc(e, t),
        (_ = t.memoizedProps),
        (P = t.type === t.elementType ? _ : un(t.type, _)),
        (y.props = P),
        (V = t.pendingProps),
        (U = y.context),
        (E = r.contextType),
        typeof E == 'object' && E !== null
          ? (E = Jt(E))
          : ((E = Tt(r) ? cr : yt.current), (E = Ar(t, E))));
      var re = r.getDerivedStateFromProps;
      (($ = typeof re == 'function' || typeof y.getSnapshotBeforeUpdate == 'function') ||
        (typeof y.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof y.componentWillReceiveProps != 'function') ||
        ((_ !== V || U !== E) && sd(t, y, o, E)),
        (Qn = !1),
        (U = t.memoizedState),
        (y.state = U),
        Ml(t, o, y, a));
      var oe = t.memoizedState;
      _ !== V || U !== oe || It.current || Qn
        ? (typeof re == 'function' && (Os(t, r, re, o), (oe = t.memoizedState)),
          (P = Qn || ld(t, r, P, o, U, oe, E) || !1)
            ? ($ ||
                (typeof y.UNSAFE_componentWillUpdate != 'function' &&
                  typeof y.componentWillUpdate != 'function') ||
                (typeof y.componentWillUpdate == 'function' && y.componentWillUpdate(o, oe, E),
                typeof y.UNSAFE_componentWillUpdate == 'function' &&
                  y.UNSAFE_componentWillUpdate(o, oe, E)),
              typeof y.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof y.componentDidUpdate != 'function' ||
                (_ === e.memoizedProps && U === e.memoizedState) ||
                (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate != 'function' ||
                (_ === e.memoizedProps && U === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = oe)),
          (y.props = o),
          (y.state = oe),
          (y.context = E),
          (o = P))
        : (typeof y.componentDidUpdate != 'function' ||
            (_ === e.memoizedProps && U === e.memoizedState) ||
            (t.flags |= 4),
          typeof y.getSnapshotBeforeUpdate != 'function' ||
            (_ === e.memoizedProps && U === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return Ds(e, t, r, o, f, a);
  }
  function Ds(e, t, r, o, a, f) {
    yd(e, t);
    var y = (t.flags & 128) !== 0;
    if (!o && !y) return (a && _c(t, r, !1), jn(e, t, f));
    ((o = t.stateNode), (Lm.current = t));
    var _ = y && typeof r.getDerivedStateFromError != 'function' ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && y
        ? ((t.child = Ur(t, e.child, null, f)), (t.child = Ur(t, null, _, f)))
        : Ct(e, t, _, f),
      (t.memoizedState = o.state),
      a && _c(t, r, !0),
      t.child
    );
  }
  function kd(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? wc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && wc(e, t.context, !1),
      ws(e, t.containerInfo));
  }
  function xd(e, t, r, o, a) {
    return (Br(), hs(a), (t.flags |= 256), Ct(e, t, r, o), t.child);
  }
  var Fs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Bs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function wd(e, t, r) {
    var o = t.pendingProps,
      a = Ye.current,
      f = !1,
      y = (t.flags & 128) !== 0,
      _;
    if (
      ((_ = y) || (_ = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      _ ? ((f = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (a |= 1),
      Ue(Ye, a & 1),
      e === null)
    )
      return (
        ps(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((y = o.children),
            (e = o.fallback),
            f
              ? ((o = t.mode),
                (f = t.child),
                (y = { mode: 'hidden', children: y }),
                (o & 1) === 0 && f !== null
                  ? ((f.childLanes = 0), (f.pendingProps = y))
                  : (f = ro(y, o, 0, null)),
                (e = xr(e, o, r, null)),
                (f.return = t),
                (e.return = t),
                (f.sibling = e),
                (t.child = f),
                (t.child.memoizedState = Bs(r)),
                (t.memoizedState = Fs),
                e)
              : Us(t, y))
      );
    if (((a = e.memoizedState), a !== null && ((_ = a.dehydrated), _ !== null)))
      return Pm(e, t, y, o, _, a, r);
    if (f) {
      ((f = o.fallback), (y = t.mode), (a = e.child), (_ = a.sibling));
      var E = { mode: 'hidden', children: o.children };
      return (
        (y & 1) === 0 && t.child !== a
          ? ((o = t.child), (o.childLanes = 0), (o.pendingProps = E), (t.deletions = null))
          : ((o = er(a, E)), (o.subtreeFlags = a.subtreeFlags & 14680064)),
        _ !== null ? (f = er(_, f)) : ((f = xr(f, y, r, null)), (f.flags |= 2)),
        (f.return = t),
        (o.return = t),
        (o.sibling = f),
        (t.child = o),
        (o = f),
        (f = t.child),
        (y = e.child.memoizedState),
        (y =
          y === null
            ? Bs(r)
            : { baseLanes: y.baseLanes | r, cachePool: null, transitions: y.transitions }),
        (f.memoizedState = y),
        (f.childLanes = e.childLanes & ~r),
        (t.memoizedState = Fs),
        o
      );
    }
    return (
      (f = e.child),
      (e = f.sibling),
      (o = er(f, { mode: 'visible', children: o.children })),
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
  function Us(e, t) {
    return (
      (t = ro({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Vl(e, t, r, o) {
    return (
      o !== null && hs(o),
      Ur(t, e.child, null, r),
      (e = Us(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Pm(e, t, r, o, a, f, y) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (o = zs(Error(l(422)))), Vl(e, t, y, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((f = o.fallback),
            (a = t.mode),
            (o = ro({ mode: 'visible', children: o.children }, a, 0, null)),
            (f = xr(f, a, y, null)),
            (f.flags |= 2),
            (o.return = t),
            (f.return = t),
            (o.sibling = f),
            (t.child = o),
            (t.mode & 1) !== 0 && Ur(t, e.child, null, y),
            (t.child.memoizedState = Bs(y)),
            (t.memoizedState = Fs),
            f);
    if ((t.mode & 1) === 0) return Vl(e, t, y, null);
    if (a.data === '$!') {
      if (((o = a.nextSibling && a.nextSibling.dataset), o)) var _ = o.dgst;
      return ((o = _), (f = Error(l(419))), (o = zs(f, o, void 0)), Vl(e, t, y, o));
    }
    if (((_ = (y & e.childLanes) !== 0), jt || _)) {
      if (((o = ct), o !== null)) {
        switch (y & -y) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
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
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        ((a = (a & (o.suspendedLanes | y)) !== 0 ? 0 : a),
          a !== 0 && a !== f.retryLane && ((f.retryLane = a), In(e, a), fn(o, e, a, -1)));
      }
      return (ra(), (o = zs(Error(l(421)))), Vl(e, t, y, o));
    }
    return a.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Wm.bind(null, e)), (a._reactRetry = t), null)
      : ((e = f.treeContext),
        (Vt = Hn(a.nextSibling)),
        (Ht = t),
        (Ke = !0),
        (an = null),
        e !== null &&
          ((Xt[Zt++] = bn),
          (Xt[Zt++] = Nn),
          (Xt[Zt++] = dr),
          (bn = e.id),
          (Nn = e.overflow),
          (dr = t)),
        (t = Us(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function Sd(e, t, r) {
    e.lanes |= t;
    var o = e.alternate;
    (o !== null && (o.lanes |= t), vs(e.return, t, r));
  }
  function $s(e, t, r, o, a) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: r,
          tailMode: a,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = o),
        (f.tail = r),
        (f.tailMode = a));
  }
  function _d(e, t, r) {
    var o = t.pendingProps,
      a = o.revealOrder,
      f = o.tail;
    if ((Ct(e, t, o.children, r), (o = Ye.current), (o & 2) !== 0))
      ((o = (o & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Sd(e, r, t);
          else if (e.tag === 19) Sd(e, r, t);
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
    if ((Ue(Ye, o), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (a) {
        case 'forwards':
          for (r = t.child, a = null; r !== null; )
            ((e = r.alternate), e !== null && Al(e) === null && (a = r), (r = r.sibling));
          ((r = a),
            r === null ? ((a = t.child), (t.child = null)) : ((a = r.sibling), (r.sibling = null)),
            $s(t, !1, a, r, f));
          break;
        case 'backwards':
          for (r = null, a = t.child, t.child = null; a !== null; ) {
            if (((e = a.alternate), e !== null && Al(e) === null)) {
              t.child = a;
              break;
            }
            ((e = a.sibling), (a.sibling = r), (r = a), (a = e));
          }
          $s(t, !0, r, null, f);
          break;
        case 'together':
          $s(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Wl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function jn(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (gr |= t.lanes), (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, r = er(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
        ((e = e.sibling), (r = r.sibling = er(e, e.pendingProps)), (r.return = t));
      r.sibling = null;
    }
    return t.child;
  }
  function Om(e, t, r) {
    switch (t.tag) {
      case 3:
        (kd(t), Br());
        break;
      case 5:
        Ac(t);
        break;
      case 1:
        Tt(t.type) && Nl(t);
        break;
      case 4:
        ws(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          a = t.memoizedProps.value;
        (Ue(Ol, o._currentValue), (o._currentValue = a));
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (Ue(Ye, Ye.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? wd(e, t, r)
              : (Ue(Ye, Ye.current & 1), (e = jn(e, t, r)), e !== null ? e.sibling : null);
        Ue(Ye, Ye.current & 1);
        break;
      case 19:
        if (((o = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return _d(e, t, r);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          Ue(Ye, Ye.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), gd(e, t, r));
    }
    return jn(e, t, r);
  }
  var Cd, Hs, Ed, bd;
  ((Cd = function (e, t) {
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
    (Hs = function () {}),
    (Ed = function (e, t, r, o) {
      var a = e.memoizedProps;
      if (a !== o) {
        ((e = t.stateNode), hr(gn.current));
        var f = null;
        switch (r) {
          case 'input':
            ((a = ke(e, a)), (o = ke(e, o)), (f = []));
            break;
          case 'select':
            ((a = S({}, a, { value: void 0 })), (o = S({}, o, { value: void 0 })), (f = []));
            break;
          case 'textarea':
            ((a = Le(e, a)), (o = Le(e, o)), (f = []));
            break;
          default:
            typeof a.onClick != 'function' && typeof o.onClick == 'function' && (e.onclick = Cl);
        }
        ht(r, o);
        var y;
        r = null;
        for (P in a)
          if (!o.hasOwnProperty(P) && a.hasOwnProperty(P) && a[P] != null)
            if (P === 'style') {
              var _ = a[P];
              for (y in _) _.hasOwnProperty(y) && (r || (r = {}), (r[y] = ''));
            } else
              P !== 'dangerouslySetInnerHTML' &&
                P !== 'children' &&
                P !== 'suppressContentEditableWarning' &&
                P !== 'suppressHydrationWarning' &&
                P !== 'autoFocus' &&
                (u.hasOwnProperty(P) ? f || (f = []) : (f = f || []).push(P, null));
        for (P in o) {
          var E = o[P];
          if (
            ((_ = a != null ? a[P] : void 0),
            o.hasOwnProperty(P) && E !== _ && (E != null || _ != null))
          )
            if (P === 'style')
              if (_) {
                for (y in _)
                  !_.hasOwnProperty(y) ||
                    (E && E.hasOwnProperty(y)) ||
                    (r || (r = {}), (r[y] = ''));
                for (y in E) E.hasOwnProperty(y) && _[y] !== E[y] && (r || (r = {}), (r[y] = E[y]));
              } else (r || (f || (f = []), f.push(P, r)), (r = E));
            else
              P === 'dangerouslySetInnerHTML'
                ? ((E = E ? E.__html : void 0),
                  (_ = _ ? _.__html : void 0),
                  E != null && _ !== E && (f = f || []).push(P, E))
                : P === 'children'
                  ? (typeof E != 'string' && typeof E != 'number') || (f = f || []).push(P, '' + E)
                  : P !== 'suppressContentEditableWarning' &&
                    P !== 'suppressHydrationWarning' &&
                    (u.hasOwnProperty(P)
                      ? (E != null && P === 'onScroll' && qe('scroll', e), f || _ === E || (f = []))
                      : (f = f || []).push(P, E));
        }
        r && (f = f || []).push('style', r);
        var P = f;
        (t.updateQueue = P) && (t.flags |= 4);
      }
    }),
    (bd = function (e, t, r, o) {
      r !== o && (t.flags |= 4);
    }));
  function zi(e, t) {
    if (!Ke)
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
  function kt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      o = 0;
    if (t)
      for (var a = e.child; a !== null; )
        ((r |= a.lanes | a.childLanes),
          (o |= a.subtreeFlags & 14680064),
          (o |= a.flags & 14680064),
          (a.return = e),
          (a = a.sibling));
    else
      for (a = e.child; a !== null; )
        ((r |= a.lanes | a.childLanes),
          (o |= a.subtreeFlags),
          (o |= a.flags),
          (a.return = e),
          (a = a.sibling));
    return ((e.subtreeFlags |= o), (e.childLanes = r), t);
  }
  function Rm(e, t, r) {
    var o = t.pendingProps;
    switch ((ds(t), t.tag)) {
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
        return (kt(t), null);
      case 1:
        return (Tt(t.type) && bl(), kt(t), null);
      case 3:
        return (
          (o = t.stateNode),
          Vr(),
          Qe(It),
          Qe(yt),
          Cs(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ll(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), an !== null && (ea(an), (an = null)))),
          Hs(e, t),
          kt(t),
          null
        );
      case 5:
        Ss(t);
        var a = hr(ji.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          (Ed(e, t, r, o, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(l(166));
            return (kt(t), null);
          }
          if (((e = hr(gn.current)), Ll(t))) {
            ((o = t.stateNode), (r = t.type));
            var f = t.memoizedProps;
            switch (((o[mn] = t), (o[Ei] = f), (e = (t.mode & 1) !== 0), r)) {
              case 'dialog':
                (qe('cancel', o), qe('close', o));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                qe('load', o);
                break;
              case 'video':
              case 'audio':
                for (a = 0; a < Si.length; a++) qe(Si[a], o);
                break;
              case 'source':
                qe('error', o);
                break;
              case 'img':
              case 'image':
              case 'link':
                (qe('error', o), qe('load', o));
                break;
              case 'details':
                qe('toggle', o);
                break;
              case 'input':
                (ft(o, f), qe('invalid', o));
                break;
              case 'select':
                ((o._wrapperState = { wasMultiple: !!f.multiple }), qe('invalid', o));
                break;
              case 'textarea':
                (Bt(o, f), qe('invalid', o));
            }
            (ht(r, f), (a = null));
            for (var y in f)
              if (f.hasOwnProperty(y)) {
                var _ = f[y];
                y === 'children'
                  ? typeof _ == 'string'
                    ? o.textContent !== _ &&
                      (f.suppressHydrationWarning !== !0 && _l(o.textContent, _, e),
                      (a = ['children', _]))
                    : typeof _ == 'number' &&
                      o.textContent !== '' + _ &&
                      (f.suppressHydrationWarning !== !0 && _l(o.textContent, _, e),
                      (a = ['children', '' + _]))
                  : u.hasOwnProperty(y) && _ != null && y === 'onScroll' && qe('scroll', o);
              }
            switch (r) {
              case 'input':
                (bt(o), Ft(o, f, !0));
                break;
              case 'textarea':
                (bt(o), Sn(o));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof f.onClick == 'function' && (o.onclick = Cl);
            }
            ((o = a), (t.updateQueue = o), o !== null && (t.flags |= 4));
          } else {
            ((y = a.nodeType === 9 ? a : a.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = M(r)),
              e === 'http://www.w3.org/1999/xhtml'
                ? r === 'script'
                  ? ((e = y.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof o.is == 'string'
                    ? (e = y.createElement(r, { is: o.is }))
                    : ((e = y.createElement(r)),
                      r === 'select' &&
                        ((y = e), o.multiple ? (y.multiple = !0) : o.size && (y.size = o.size)))
                : (e = y.createElementNS(e, r)),
              (e[mn] = t),
              (e[Ei] = o),
              Cd(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((y = pn(r, o)), r)) {
                case 'dialog':
                  (qe('cancel', e), qe('close', e), (a = o));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (qe('load', e), (a = o));
                  break;
                case 'video':
                case 'audio':
                  for (a = 0; a < Si.length; a++) qe(Si[a], e);
                  a = o;
                  break;
                case 'source':
                  (qe('error', e), (a = o));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (qe('error', e), qe('load', e), (a = o));
                  break;
                case 'details':
                  (qe('toggle', e), (a = o));
                  break;
                case 'input':
                  (ft(e, o), (a = ke(e, o)), qe('invalid', e));
                  break;
                case 'option':
                  a = o;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!o.multiple }),
                    (a = S({}, o, { value: void 0 })),
                    qe('invalid', e));
                  break;
                case 'textarea':
                  (Bt(e, o), (a = Le(e, o)), qe('invalid', e));
                  break;
                default:
                  a = o;
              }
              (ht(r, a), (_ = a));
              for (f in _)
                if (_.hasOwnProperty(f)) {
                  var E = _[f];
                  f === 'style'
                    ? Mn(e, E)
                    : f === 'dangerouslySetInnerHTML'
                      ? ((E = E ? E.__html : void 0), E != null && Te(e, E))
                      : f === 'children'
                        ? typeof E == 'string'
                          ? (r !== 'textarea' || E !== '') && Oe(e, E)
                          : typeof E == 'number' && Oe(e, '' + E)
                        : f !== 'suppressContentEditableWarning' &&
                          f !== 'suppressHydrationWarning' &&
                          f !== 'autoFocus' &&
                          (u.hasOwnProperty(f)
                            ? E != null && f === 'onScroll' && qe('scroll', e)
                            : E != null && D(e, f, E, y));
                }
              switch (r) {
                case 'input':
                  (bt(e), Ft(e, o, !1));
                  break;
                case 'textarea':
                  (bt(e), Sn(e));
                  break;
                case 'option':
                  o.value != null && e.setAttribute('value', '' + Ee(o.value));
                  break;
                case 'select':
                  ((e.multiple = !!o.multiple),
                    (f = o.value),
                    f != null
                      ? ge(e, !!o.multiple, f, !1)
                      : o.defaultValue != null && ge(e, !!o.multiple, o.defaultValue, !0));
                  break;
                default:
                  typeof a.onClick == 'function' && (e.onclick = Cl);
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
        return (kt(t), null);
      case 6:
        if (e && t.stateNode != null) bd(e, t, e.memoizedProps, o);
        else {
          if (typeof o != 'string' && t.stateNode === null) throw Error(l(166));
          if (((r = hr(ji.current)), hr(gn.current), Ll(t))) {
            if (
              ((o = t.stateNode),
              (r = t.memoizedProps),
              (o[mn] = t),
              (f = o.nodeValue !== r) && ((e = Ht), e !== null))
            )
              switch (e.tag) {
                case 3:
                  _l(o.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    _l(o.nodeValue, r, (e.mode & 1) !== 0);
              }
            f && (t.flags |= 4);
          } else
            ((o = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(o)),
              (o[mn] = t),
              (t.stateNode = o));
        }
        return (kt(t), null);
      case 13:
        if (
          (Qe(Ye),
          (o = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ke && Vt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Tc(), Br(), (t.flags |= 98560), (f = !1));
          else if (((f = Ll(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(l(318));
              if (((f = t.memoizedState), (f = f !== null ? f.dehydrated : null), !f))
                throw Error(l(317));
              f[mn] = t;
            } else (Br(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (kt(t), (f = !1));
          } else (an !== null && (ea(an), (an = null)), (f = !0));
          if (!f) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Ye.current & 1) !== 0 ? st === 0 && (st = 3) : ra())),
            t.updateQueue !== null && (t.flags |= 4),
            kt(t),
            null);
      case 4:
        return (Vr(), Hs(e, t), e === null && _i(t.stateNode.containerInfo), kt(t), null);
      case 10:
        return (ys(t.type._context), kt(t), null);
      case 17:
        return (Tt(t.type) && bl(), kt(t), null);
      case 19:
        if ((Qe(Ye), (f = t.memoizedState), f === null)) return (kt(t), null);
        if (((o = (t.flags & 128) !== 0), (y = f.rendering), y === null))
          if (o) zi(f, !1);
          else {
            if (st !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((y = Al(e)), y !== null)) {
                  for (
                    t.flags |= 128,
                      zi(f, !1),
                      o = y.updateQueue,
                      o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      o = r,
                      r = t.child;
                    r !== null;
                  )
                    ((f = r),
                      (e = o),
                      (f.flags &= 14680066),
                      (y = f.alternate),
                      y === null
                        ? ((f.childLanes = 0),
                          (f.lanes = e),
                          (f.child = null),
                          (f.subtreeFlags = 0),
                          (f.memoizedProps = null),
                          (f.memoizedState = null),
                          (f.updateQueue = null),
                          (f.dependencies = null),
                          (f.stateNode = null))
                        : ((f.childLanes = y.childLanes),
                          (f.lanes = y.lanes),
                          (f.child = y.child),
                          (f.subtreeFlags = 0),
                          (f.deletions = null),
                          (f.memoizedProps = y.memoizedProps),
                          (f.memoizedState = y.memoizedState),
                          (f.updateQueue = y.updateQueue),
                          (f.type = y.type),
                          (e = y.dependencies),
                          (f.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (r = r.sibling));
                  return (Ue(Ye, (Ye.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            f.tail !== null &&
              et() > Gr &&
              ((t.flags |= 128), (o = !0), zi(f, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = Al(y)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                zi(f, !0),
                f.tail === null && f.tailMode === 'hidden' && !y.alternate && !Ke)
              )
                return (kt(t), null);
            } else
              2 * et() - f.renderingStartTime > Gr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (o = !0), zi(f, !1), (t.lanes = 4194304));
          f.isBackwards
            ? ((y.sibling = t.child), (t.child = y))
            : ((r = f.last), r !== null ? (r.sibling = y) : (t.child = y), (f.last = y));
        }
        return f.tail !== null
          ? ((t = f.tail),
            (f.rendering = t),
            (f.tail = t.sibling),
            (f.renderingStartTime = et()),
            (t.sibling = null),
            (r = Ye.current),
            Ue(Ye, o ? (r & 1) | 2 : r & 1),
            t)
          : (kt(t), null);
      case 22:
      case 23:
        return (
          na(),
          (o = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
          o && (t.mode & 1) !== 0
            ? (Wt & 1073741824) !== 0 && (kt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : kt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function zm(e, t) {
    switch ((ds(t), t.tag)) {
      case 1:
        return (
          Tt(t.type) && bl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Vr(),
          Qe(It),
          Qe(yt),
          Cs(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Ss(t), null);
      case 13:
        if ((Qe(Ye), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(l(340));
          Br();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Qe(Ye), null);
      case 4:
        return (Vr(), null);
      case 10:
        return (ys(t.type._context), null);
      case 22:
      case 23:
        return (na(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ql = !1,
    xt = !1,
    Mm = typeof WeakSet == 'function' ? WeakSet : Set,
    le = null;
  function qr(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == 'function')
        try {
          r(null);
        } catch (o) {
          Ze(e, t, o);
        }
      else r.current = null;
  }
  function Vs(e, t, r) {
    try {
      r();
    } catch (o) {
      Ze(e, t, o);
    }
  }
  var Nd = !1;
  function Am(e, t) {
    if (((ns = fl), (e = lc()), Go(e))) {
      if ('selectionStart' in e) var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var o = r.getSelection && r.getSelection();
          if (o && o.rangeCount !== 0) {
            r = o.anchorNode;
            var a = o.anchorOffset,
              f = o.focusNode;
            o = o.focusOffset;
            try {
              (r.nodeType, f.nodeType);
            } catch {
              r = null;
              break e;
            }
            var y = 0,
              _ = -1,
              E = -1,
              P = 0,
              $ = 0,
              V = e,
              U = null;
            t: for (;;) {
              for (
                var re;
                V !== r || (a !== 0 && V.nodeType !== 3) || (_ = y + a),
                  V !== f || (o !== 0 && V.nodeType !== 3) || (E = y + o),
                  V.nodeType === 3 && (y += V.nodeValue.length),
                  (re = V.firstChild) !== null;
              )
                ((U = V), (V = re));
              for (;;) {
                if (V === e) break t;
                if (
                  (U === r && ++P === a && (_ = y),
                  U === f && ++$ === o && (E = y),
                  (re = V.nextSibling) !== null)
                )
                  break;
                ((V = U), (U = V.parentNode));
              }
              V = re;
            }
            r = _ === -1 || E === -1 ? null : { start: _, end: E };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (rs = { focusedElem: e, selectionRange: r }, fl = !1, le = t; le !== null; )
      if (((t = le), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (le = e));
      else
        for (; le !== null; ) {
          t = le;
          try {
            var oe = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (oe !== null) {
                    var se = oe.memoizedProps,
                      tt = oe.memoizedState,
                      j = t.stateNode,
                      b = j.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? se : un(t.type, se),
                        tt
                      );
                    j.__reactInternalSnapshotBeforeUpdate = b;
                  }
                  break;
                case 3:
                  var L = t.stateNode.containerInfo;
                  L.nodeType === 1
                    ? (L.textContent = '')
                    : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(l(163));
              }
          } catch (K) {
            Ze(t, t.return, K);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (le = e));
            break;
          }
          le = t.return;
        }
    return ((oe = Nd), (Nd = !1), oe);
  }
  function Mi(e, t, r) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var a = (o = o.next);
      do {
        if ((a.tag & e) === e) {
          var f = a.destroy;
          ((a.destroy = void 0), f !== void 0 && Vs(t, r, f));
        }
        a = a.next;
      } while (a !== o);
    }
  }
  function Ql(e, t) {
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
  function Ws(e) {
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
  function Id(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Id(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[mn], delete t[Ei], delete t[ss], delete t[km], delete t[xm])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Td(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function jd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Td(e.return)) return null;
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
  function qs(e, t, r) {
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
            r != null || t.onclick !== null || (t.onclick = Cl)));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (qs(e, t, r), e = e.sibling; e !== null; ) (qs(e, t, r), (e = e.sibling));
  }
  function Qs(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6) ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Qs(e, t, r), e = e.sibling; e !== null; ) (Qs(e, t, r), (e = e.sibling));
  }
  var mt = null,
    cn = !1;
  function Kn(e, t, r) {
    for (r = r.child; r !== null; ) (Ld(e, t, r), (r = r.sibling));
  }
  function Ld(e, t, r) {
    if (hn && typeof hn.onCommitFiberUnmount == 'function')
      try {
        hn.onCommitFiberUnmount(ol, r);
      } catch {}
    switch (r.tag) {
      case 5:
        xt || qr(r, t);
      case 6:
        var o = mt,
          a = cn;
        ((mt = null),
          Kn(e, t, r),
          (mt = o),
          (cn = a),
          mt !== null &&
            (cn
              ? ((e = mt),
                (r = r.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
              : mt.removeChild(r.stateNode)));
        break;
      case 18:
        mt !== null &&
          (cn
            ? ((e = mt),
              (r = r.stateNode),
              e.nodeType === 8 ? os(e.parentNode, r) : e.nodeType === 1 && os(e, r),
              hi(e))
            : os(mt, r.stateNode));
        break;
      case 4:
        ((o = mt),
          (a = cn),
          (mt = r.stateNode.containerInfo),
          (cn = !0),
          Kn(e, t, r),
          (mt = o),
          (cn = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!xt && ((o = r.updateQueue), o !== null && ((o = o.lastEffect), o !== null))) {
          a = o = o.next;
          do {
            var f = a,
              y = f.destroy;
            ((f = f.tag),
              y !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && Vs(r, t, y),
              (a = a.next));
          } while (a !== o);
        }
        Kn(e, t, r);
        break;
      case 1:
        if (!xt && (qr(r, t), (o = r.stateNode), typeof o.componentWillUnmount == 'function'))
          try {
            ((o.props = r.memoizedProps), (o.state = r.memoizedState), o.componentWillUnmount());
          } catch (_) {
            Ze(r, t, _);
          }
        Kn(e, t, r);
        break;
      case 21:
        Kn(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((xt = (o = xt) || r.memoizedState !== null), Kn(e, t, r), (xt = o))
          : Kn(e, t, r);
        break;
      default:
        Kn(e, t, r);
    }
  }
  function Pd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      (r === null && (r = e.stateNode = new Mm()),
        t.forEach(function (o) {
          var a = qm.bind(null, e, o);
          r.has(o) || (r.add(o), o.then(a, a));
        }));
    }
  }
  function dn(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var o = 0; o < r.length; o++) {
        var a = r[o];
        try {
          var f = e,
            y = t,
            _ = y;
          e: for (; _ !== null; ) {
            switch (_.tag) {
              case 5:
                ((mt = _.stateNode), (cn = !1));
                break e;
              case 3:
                ((mt = _.stateNode.containerInfo), (cn = !0));
                break e;
              case 4:
                ((mt = _.stateNode.containerInfo), (cn = !0));
                break e;
            }
            _ = _.return;
          }
          if (mt === null) throw Error(l(160));
          (Ld(f, y, a), (mt = null), (cn = !1));
          var E = a.alternate;
          (E !== null && (E.return = null), (a.return = null));
        } catch (P) {
          Ze(a, t, P);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Od(t, e), (t = t.sibling));
  }
  function Od(e, t) {
    var r = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((dn(t, e), vn(e), o & 4)) {
          try {
            (Mi(3, e, e.return), Ql(3, e));
          } catch (se) {
            Ze(e, e.return, se);
          }
          try {
            Mi(5, e, e.return);
          } catch (se) {
            Ze(e, e.return, se);
          }
        }
        break;
      case 1:
        (dn(t, e), vn(e), o & 512 && r !== null && qr(r, r.return));
        break;
      case 5:
        if ((dn(t, e), vn(e), o & 512 && r !== null && qr(r, r.return), e.flags & 32)) {
          var a = e.stateNode;
          try {
            Oe(a, '');
          } catch (se) {
            Ze(e, e.return, se);
          }
        }
        if (o & 4 && ((a = e.stateNode), a != null)) {
          var f = e.memoizedProps,
            y = r !== null ? r.memoizedProps : f,
            _ = e.type,
            E = e.updateQueue;
          if (((e.updateQueue = null), E !== null))
            try {
              (_ === 'input' && f.type === 'radio' && f.name != null && Je(a, f), pn(_, y));
              var P = pn(_, f);
              for (y = 0; y < E.length; y += 2) {
                var $ = E[y],
                  V = E[y + 1];
                $ === 'style'
                  ? Mn(a, V)
                  : $ === 'dangerouslySetInnerHTML'
                    ? Te(a, V)
                    : $ === 'children'
                      ? Oe(a, V)
                      : D(a, $, V, P);
              }
              switch (_) {
                case 'input':
                  Dt(a, f);
                  break;
                case 'textarea':
                  Nt(a, f);
                  break;
                case 'select':
                  var U = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!f.multiple;
                  var re = f.value;
                  re != null
                    ? ge(a, !!f.multiple, re, !1)
                    : U !== !!f.multiple &&
                      (f.defaultValue != null
                        ? ge(a, !!f.multiple, f.defaultValue, !0)
                        : ge(a, !!f.multiple, f.multiple ? [] : '', !1));
              }
              a[Ei] = f;
            } catch (se) {
              Ze(e, e.return, se);
            }
        }
        break;
      case 6:
        if ((dn(t, e), vn(e), o & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          ((a = e.stateNode), (f = e.memoizedProps));
          try {
            a.nodeValue = f;
          } catch (se) {
            Ze(e, e.return, se);
          }
        }
        break;
      case 3:
        if ((dn(t, e), vn(e), o & 4 && r !== null && r.memoizedState.isDehydrated))
          try {
            hi(t.containerInfo);
          } catch (se) {
            Ze(e, e.return, se);
          }
        break;
      case 4:
        (dn(t, e), vn(e));
        break;
      case 13:
        (dn(t, e),
          vn(e),
          (a = e.child),
          a.flags & 8192 &&
            ((f = a.memoizedState !== null),
            (a.stateNode.isHidden = f),
            !f || (a.alternate !== null && a.alternate.memoizedState !== null) || (Ys = et())),
          o & 4 && Pd(e));
        break;
      case 22:
        if (
          (($ = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((xt = (P = xt) || $), dn(t, e), (xt = P)) : dn(t, e),
          vn(e),
          o & 8192)
        ) {
          if (
            ((P = e.memoizedState !== null), (e.stateNode.isHidden = P) && !$ && (e.mode & 1) !== 0)
          )
            for (le = e, $ = e.child; $ !== null; ) {
              for (V = le = $; le !== null; ) {
                switch (((U = le), (re = U.child), U.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Mi(4, U, U.return);
                    break;
                  case 1:
                    qr(U, U.return);
                    var oe = U.stateNode;
                    if (typeof oe.componentWillUnmount == 'function') {
                      ((o = U), (r = U.return));
                      try {
                        ((t = o),
                          (oe.props = t.memoizedProps),
                          (oe.state = t.memoizedState),
                          oe.componentWillUnmount());
                      } catch (se) {
                        Ze(o, r, se);
                      }
                    }
                    break;
                  case 5:
                    qr(U, U.return);
                    break;
                  case 22:
                    if (U.memoizedState !== null) {
                      Md(V);
                      continue;
                    }
                }
                re !== null ? ((re.return = U), (le = re)) : Md(V);
              }
              $ = $.sibling;
            }
          e: for ($ = null, V = e; ; ) {
            if (V.tag === 5) {
              if ($ === null) {
                $ = V;
                try {
                  ((a = V.stateNode),
                    P
                      ? ((f = a.style),
                        typeof f.setProperty == 'function'
                          ? f.setProperty('display', 'none', 'important')
                          : (f.display = 'none'))
                      : ((_ = V.stateNode),
                        (E = V.memoizedProps.style),
                        (y = E != null && E.hasOwnProperty('display') ? E.display : null),
                        (_.style.display = Yt('display', y))));
                } catch (se) {
                  Ze(e, e.return, se);
                }
              }
            } else if (V.tag === 6) {
              if ($ === null)
                try {
                  V.stateNode.nodeValue = P ? '' : V.memoizedProps;
                } catch (se) {
                  Ze(e, e.return, se);
                }
            } else if (
              ((V.tag !== 22 && V.tag !== 23) || V.memoizedState === null || V === e) &&
              V.child !== null
            ) {
              ((V.child.return = V), (V = V.child));
              continue;
            }
            if (V === e) break e;
            for (; V.sibling === null; ) {
              if (V.return === null || V.return === e) break e;
              ($ === V && ($ = null), (V = V.return));
            }
            ($ === V && ($ = null), (V.sibling.return = V.return), (V = V.sibling));
          }
        }
        break;
      case 19:
        (dn(t, e), vn(e), o & 4 && Pd(e));
        break;
      case 21:
        break;
      default:
        (dn(t, e), vn(e));
    }
  }
  function vn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Td(r)) {
              var o = r;
              break e;
            }
            r = r.return;
          }
          throw Error(l(160));
        }
        switch (o.tag) {
          case 5:
            var a = o.stateNode;
            o.flags & 32 && (Oe(a, ''), (o.flags &= -33));
            var f = jd(e);
            Qs(e, f, a);
            break;
          case 3:
          case 4:
            var y = o.stateNode.containerInfo,
              _ = jd(e);
            qs(e, _, y);
            break;
          default:
            throw Error(l(161));
        }
      } catch (E) {
        Ze(e, e.return, E);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Dm(e, t, r) {
    ((le = e), Rd(e));
  }
  function Rd(e, t, r) {
    for (var o = (e.mode & 1) !== 0; le !== null; ) {
      var a = le,
        f = a.child;
      if (a.tag === 22 && o) {
        var y = a.memoizedState !== null || ql;
        if (!y) {
          var _ = a.alternate,
            E = (_ !== null && _.memoizedState !== null) || xt;
          _ = ql;
          var P = xt;
          if (((ql = y), (xt = E) && !P))
            for (le = a; le !== null; )
              ((y = le),
                (E = y.child),
                y.tag === 22 && y.memoizedState !== null
                  ? Ad(a)
                  : E !== null
                    ? ((E.return = y), (le = E))
                    : Ad(a));
          for (; f !== null; ) ((le = f), Rd(f), (f = f.sibling));
          ((le = a), (ql = _), (xt = P));
        }
        zd(e);
      } else (a.subtreeFlags & 8772) !== 0 && f !== null ? ((f.return = a), (le = f)) : zd(e);
    }
  }
  function zd(e) {
    for (; le !== null; ) {
      var t = le;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                xt || Ql(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !xt)
                  if (r === null) o.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type ? r.memoizedProps : un(t.type, r.memoizedProps);
                    o.componentDidUpdate(a, r.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var f = t.updateQueue;
                f !== null && Mc(t, f, o);
                break;
              case 3:
                var y = t.updateQueue;
                if (y !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  Mc(t, y, r);
                }
                break;
              case 5:
                var _ = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = _;
                  var E = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      E.autoFocus && r.focus();
                      break;
                    case 'img':
                      E.src && (r.src = E.src);
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
                  var P = t.alternate;
                  if (P !== null) {
                    var $ = P.memoizedState;
                    if ($ !== null) {
                      var V = $.dehydrated;
                      V !== null && hi(V);
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
          xt || (t.flags & 512 && Ws(t));
        } catch (U) {
          Ze(t, t.return, U);
        }
      }
      if (t === e) {
        le = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        ((r.return = t.return), (le = r));
        break;
      }
      le = t.return;
    }
  }
  function Md(e) {
    for (; le !== null; ) {
      var t = le;
      if (t === e) {
        le = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        ((r.return = t.return), (le = r));
        break;
      }
      le = t.return;
    }
  }
  function Ad(e) {
    for (; le !== null; ) {
      var t = le;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              Ql(4, t);
            } catch (E) {
              Ze(t, r, E);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == 'function') {
              var a = t.return;
              try {
                o.componentDidMount();
              } catch (E) {
                Ze(t, a, E);
              }
            }
            var f = t.return;
            try {
              Ws(t);
            } catch (E) {
              Ze(t, f, E);
            }
            break;
          case 5:
            var y = t.return;
            try {
              Ws(t);
            } catch (E) {
              Ze(t, y, E);
            }
        }
      } catch (E) {
        Ze(t, t.return, E);
      }
      if (t === e) {
        le = null;
        break;
      }
      var _ = t.sibling;
      if (_ !== null) {
        ((_.return = t.return), (le = _));
        break;
      }
      le = t.return;
    }
  }
  var Fm = Math.ceil,
    Gl = H.ReactCurrentDispatcher,
    Gs = H.ReactCurrentOwner,
    tn = H.ReactCurrentBatchConfig,
    Re = 0,
    ct = null,
    rt = null,
    gt = 0,
    Wt = 0,
    Qr = Vn(0),
    st = 0,
    Ai = null,
    gr = 0,
    Kl = 0,
    Ks = 0,
    Di = null,
    Lt = null,
    Ys = 0,
    Gr = 1 / 0,
    Ln = null,
    Yl = !1,
    Xs = null,
    Yn = null,
    Xl = !1,
    Xn = null,
    Zl = 0,
    Fi = 0,
    Zs = null,
    Jl = -1,
    eo = 0;
  function Et() {
    return (Re & 6) !== 0 ? et() : Jl !== -1 ? Jl : (Jl = et());
  }
  function Zn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Re & 2) !== 0 && gt !== 0
        ? gt & -gt
        : Sm.transition !== null
          ? (eo === 0 && (eo = ju()), eo)
          : ((e = De), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Fu(e.type))), e);
  }
  function fn(e, t, r, o) {
    if (50 < Fi) throw ((Fi = 0), (Zs = null), Error(l(185)));
    (ui(e, r, o),
      ((Re & 2) === 0 || e !== ct) &&
        (e === ct && ((Re & 2) === 0 && (Kl |= r), st === 4 && Jn(e, gt)),
        Pt(e, o),
        r === 1 && Re === 0 && (t.mode & 1) === 0 && ((Gr = et() + 500), Il && qn())));
  }
  function Pt(e, t) {
    var r = e.callbackNode;
    Sh(e, t);
    var o = ul(e, e === ct ? gt : 0);
    if (o === 0) (r !== null && Nu(r), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((r != null && Nu(r), t === 1))
        (e.tag === 0 ? wm(Fd.bind(null, e)) : Cc(Fd.bind(null, e)),
          ym(function () {
            (Re & 6) === 0 && qn();
          }),
          (r = null));
      else {
        switch (Lu(o)) {
          case 1:
            r = Lo;
            break;
          case 4:
            r = Iu;
            break;
          case 16:
            r = ll;
            break;
          case 536870912:
            r = Tu;
            break;
          default:
            r = ll;
        }
        r = Qd(r, Dd.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = r));
    }
  }
  function Dd(e, t) {
    if (((Jl = -1), (eo = 0), (Re & 6) !== 0)) throw Error(l(327));
    var r = e.callbackNode;
    if (Kr() && e.callbackNode !== r) return null;
    var o = ul(e, e === ct ? gt : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = to(e, o);
    else {
      t = o;
      var a = Re;
      Re |= 2;
      var f = Ud();
      (ct !== e || gt !== t) && ((Ln = null), (Gr = et() + 500), vr(e, t));
      do
        try {
          $m();
          break;
        } catch (_) {
          Bd(e, _);
        }
      while (!0);
      (gs(), (Gl.current = f), (Re = a), rt !== null ? (t = 0) : ((ct = null), (gt = 0), (t = st)));
    }
    if (t !== 0) {
      if ((t === 2 && ((a = Po(e)), a !== 0 && ((o = a), (t = Js(e, a)))), t === 1))
        throw ((r = Ai), vr(e, 0), Jn(e, o), Pt(e, et()), r);
      if (t === 6) Jn(e, o);
      else {
        if (
          ((a = e.current.alternate),
          (o & 30) === 0 &&
            !Bm(a) &&
            ((t = to(e, o)),
            t === 2 && ((f = Po(e)), f !== 0 && ((o = f), (t = Js(e, f)))),
            t === 1))
        )
          throw ((r = Ai), vr(e, 0), Jn(e, o), Pt(e, et()), r);
        switch (((e.finishedWork = a), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            kr(e, Lt, Ln);
            break;
          case 3:
            if ((Jn(e, o), (o & 130023424) === o && ((t = Ys + 500 - et()), 10 < t))) {
              if (ul(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & o) !== o)) {
                (Et(), (e.pingedLanes |= e.suspendedLanes & a));
                break;
              }
              e.timeoutHandle = ls(kr.bind(null, e, Lt, Ln), t);
              break;
            }
            kr(e, Lt, Ln);
            break;
          case 4:
            if ((Jn(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, a = -1; 0 < o; ) {
              var y = 31 - on(o);
              ((f = 1 << y), (y = t[y]), y > a && (a = y), (o &= ~f));
            }
            if (
              ((o = a),
              (o = et() - o),
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
                            : 1960 * Fm(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = ls(kr.bind(null, e, Lt, Ln), o);
              break;
            }
            kr(e, Lt, Ln);
            break;
          case 5:
            kr(e, Lt, Ln);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return (Pt(e, et()), e.callbackNode === r ? Dd.bind(null, e) : null);
  }
  function Js(e, t) {
    var r = Di;
    return (
      e.current.memoizedState.isDehydrated && (vr(e, t).flags |= 256),
      (e = to(e, t)),
      e !== 2 && ((t = Lt), (Lt = r), t !== null && ea(t)),
      e
    );
  }
  function ea(e) {
    Lt === null ? (Lt = e) : Lt.push.apply(Lt, e);
  }
  function Bm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var o = 0; o < r.length; o++) {
            var a = r[o],
              f = a.getSnapshot;
            a = a.value;
            try {
              if (!sn(f(), a)) return !1;
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
  function Jn(e, t) {
    for (
      t &= ~Ks, t &= ~Kl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var r = 31 - on(t),
        o = 1 << r;
      ((e[r] = -1), (t &= ~o));
    }
  }
  function Fd(e) {
    if ((Re & 6) !== 0) throw Error(l(327));
    Kr();
    var t = ul(e, 0);
    if ((t & 1) === 0) return (Pt(e, et()), null);
    var r = to(e, t);
    if (e.tag !== 0 && r === 2) {
      var o = Po(e);
      o !== 0 && ((t = o), (r = Js(e, o)));
    }
    if (r === 1) throw ((r = Ai), vr(e, 0), Jn(e, t), Pt(e, et()), r);
    if (r === 6) throw Error(l(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      kr(e, Lt, Ln),
      Pt(e, et()),
      null
    );
  }
  function ta(e, t) {
    var r = Re;
    Re |= 1;
    try {
      return e(t);
    } finally {
      ((Re = r), Re === 0 && ((Gr = et() + 500), Il && qn()));
    }
  }
  function yr(e) {
    Xn !== null && Xn.tag === 0 && (Re & 6) === 0 && Kr();
    var t = Re;
    Re |= 1;
    var r = tn.transition,
      o = De;
    try {
      if (((tn.transition = null), (De = 1), e)) return e();
    } finally {
      ((De = o), (tn.transition = r), (Re = t), (Re & 6) === 0 && qn());
    }
  }
  function na() {
    ((Wt = Qr.current), Qe(Qr));
  }
  function vr(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), gm(r)), rt !== null))
      for (r = rt.return; r !== null; ) {
        var o = r;
        switch ((ds(o), o.tag)) {
          case 1:
            ((o = o.type.childContextTypes), o != null && bl());
            break;
          case 3:
            (Vr(), Qe(It), Qe(yt), Cs());
            break;
          case 5:
            Ss(o);
            break;
          case 4:
            Vr();
            break;
          case 13:
            Qe(Ye);
            break;
          case 19:
            Qe(Ye);
            break;
          case 10:
            ys(o.type._context);
            break;
          case 22:
          case 23:
            na();
        }
        r = r.return;
      }
    if (
      ((ct = e),
      (rt = e = er(e.current, null)),
      (gt = Wt = t),
      (st = 0),
      (Ai = null),
      (Ks = Kl = gr = 0),
      (Lt = Di = null),
      pr !== null)
    ) {
      for (t = 0; t < pr.length; t++)
        if (((r = pr[t]), (o = r.interleaved), o !== null)) {
          r.interleaved = null;
          var a = o.next,
            f = r.pending;
          if (f !== null) {
            var y = f.next;
            ((f.next = a), (o.next = y));
          }
          r.pending = o;
        }
      pr = null;
    }
    return e;
  }
  function Bd(e, t) {
    do {
      var r = rt;
      try {
        if ((gs(), (Dl.current = $l), Fl)) {
          for (var o = Xe.memoizedState; o !== null; ) {
            var a = o.queue;
            (a !== null && (a.pending = null), (o = o.next));
          }
          Fl = !1;
        }
        if (
          ((mr = 0),
          (ut = ot = Xe = null),
          (Li = !1),
          (Pi = 0),
          (Gs.current = null),
          r === null || r.return === null)
        ) {
          ((st = 1), (Ai = t), (rt = null));
          break;
        }
        e: {
          var f = e,
            y = r.return,
            _ = r,
            E = t;
          if (
            ((t = gt),
            (_.flags |= 32768),
            E !== null && typeof E == 'object' && typeof E.then == 'function')
          ) {
            var P = E,
              $ = _,
              V = $.tag;
            if (($.mode & 1) === 0 && (V === 0 || V === 11 || V === 15)) {
              var U = $.alternate;
              U
                ? (($.updateQueue = U.updateQueue),
                  ($.memoizedState = U.memoizedState),
                  ($.lanes = U.lanes))
                : (($.updateQueue = null), ($.memoizedState = null));
            }
            var re = dd(y);
            if (re !== null) {
              ((re.flags &= -257),
                fd(re, y, _, f, t),
                re.mode & 1 && cd(f, P, t),
                (t = re),
                (E = P));
              var oe = t.updateQueue;
              if (oe === null) {
                var se = new Set();
                (se.add(E), (t.updateQueue = se));
              } else oe.add(E);
              break e;
            } else {
              if ((t & 1) === 0) {
                (cd(f, P, t), ra());
                break e;
              }
              E = Error(l(426));
            }
          } else if (Ke && _.mode & 1) {
            var tt = dd(y);
            if (tt !== null) {
              ((tt.flags & 65536) === 0 && (tt.flags |= 256), fd(tt, y, _, f, t), hs(Wr(E, _)));
              break e;
            }
          }
          ((f = E = Wr(E, _)),
            st !== 4 && (st = 2),
            Di === null ? (Di = [f]) : Di.push(f),
            (f = y));
          do {
            switch (f.tag) {
              case 3:
                ((f.flags |= 65536), (t &= -t), (f.lanes |= t));
                var j = ad(f, E, t);
                zc(f, j);
                break e;
              case 1:
                _ = E;
                var b = f.type,
                  L = f.stateNode;
                if (
                  (f.flags & 128) === 0 &&
                  (typeof b.getDerivedStateFromError == 'function' ||
                    (L !== null &&
                      typeof L.componentDidCatch == 'function' &&
                      (Yn === null || !Yn.has(L))))
                ) {
                  ((f.flags |= 65536), (t &= -t), (f.lanes |= t));
                  var K = ud(f, _, t);
                  zc(f, K);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        Hd(r);
      } catch (ce) {
        ((t = ce), rt === r && r !== null && (rt = r = r.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Ud() {
    var e = Gl.current;
    return ((Gl.current = $l), e === null ? $l : e);
  }
  function ra() {
    ((st === 0 || st === 3 || st === 2) && (st = 4),
      ct === null || ((gr & 268435455) === 0 && (Kl & 268435455) === 0) || Jn(ct, gt));
  }
  function to(e, t) {
    var r = Re;
    Re |= 2;
    var o = Ud();
    (ct !== e || gt !== t) && ((Ln = null), vr(e, t));
    do
      try {
        Um();
        break;
      } catch (a) {
        Bd(e, a);
      }
    while (!0);
    if ((gs(), (Re = r), (Gl.current = o), rt !== null)) throw Error(l(261));
    return ((ct = null), (gt = 0), st);
  }
  function Um() {
    for (; rt !== null; ) $d(rt);
  }
  function $m() {
    for (; rt !== null && !ph(); ) $d(rt);
  }
  function $d(e) {
    var t = qd(e.alternate, e, Wt);
    ((e.memoizedProps = e.pendingProps), t === null ? Hd(e) : (rt = t), (Gs.current = null));
  }
  function Hd(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Rm(r, t, Wt)), r !== null)) {
          rt = r;
          return;
        }
      } else {
        if (((r = zm(r, t)), r !== null)) {
          ((r.flags &= 32767), (rt = r));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((st = 6), (rt = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        rt = t;
        return;
      }
      rt = t = e;
    } while (t !== null);
    st === 0 && (st = 5);
  }
  function kr(e, t, r) {
    var o = De,
      a = tn.transition;
    try {
      ((tn.transition = null), (De = 1), Hm(e, t, r, o));
    } finally {
      ((tn.transition = a), (De = o));
    }
    return null;
  }
  function Hm(e, t, r, o) {
    do Kr();
    while (Xn !== null);
    if ((Re & 6) !== 0) throw Error(l(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(l(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var f = r.lanes | r.childLanes;
    if (
      (_h(e, f),
      e === ct && ((rt = ct = null), (gt = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        Xl ||
        ((Xl = !0),
        Qd(ll, function () {
          return (Kr(), null);
        })),
      (f = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || f)
    ) {
      ((f = tn.transition), (tn.transition = null));
      var y = De;
      De = 1;
      var _ = Re;
      ((Re |= 4),
        (Gs.current = null),
        Am(e, r),
        Od(r, e),
        um(rs),
        (fl = !!ns),
        (rs = ns = null),
        (e.current = r),
        Dm(r),
        hh(),
        (Re = _),
        (De = y),
        (tn.transition = f));
    } else e.current = r;
    if (
      (Xl && ((Xl = !1), (Xn = e), (Zl = a)),
      (f = e.pendingLanes),
      f === 0 && (Yn = null),
      yh(r.stateNode),
      Pt(e, et()),
      t !== null)
    )
      for (o = e.onRecoverableError, r = 0; r < t.length; r++)
        ((a = t[r]), o(a.value, { componentStack: a.stack, digest: a.digest }));
    if (Yl) throw ((Yl = !1), (e = Xs), (Xs = null), e);
    return (
      (Zl & 1) !== 0 && e.tag !== 0 && Kr(),
      (f = e.pendingLanes),
      (f & 1) !== 0 ? (e === Zs ? Fi++ : ((Fi = 0), (Zs = e))) : (Fi = 0),
      qn(),
      null
    );
  }
  function Kr() {
    if (Xn !== null) {
      var e = Lu(Zl),
        t = tn.transition,
        r = De;
      try {
        if (((tn.transition = null), (De = 16 > e ? 16 : e), Xn === null)) var o = !1;
        else {
          if (((e = Xn), (Xn = null), (Zl = 0), (Re & 6) !== 0)) throw Error(l(331));
          var a = Re;
          for (Re |= 4, le = e.current; le !== null; ) {
            var f = le,
              y = f.child;
            if ((le.flags & 16) !== 0) {
              var _ = f.deletions;
              if (_ !== null) {
                for (var E = 0; E < _.length; E++) {
                  var P = _[E];
                  for (le = P; le !== null; ) {
                    var $ = le;
                    switch ($.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mi(8, $, f);
                    }
                    var V = $.child;
                    if (V !== null) ((V.return = $), (le = V));
                    else
                      for (; le !== null; ) {
                        $ = le;
                        var U = $.sibling,
                          re = $.return;
                        if ((Id($), $ === P)) {
                          le = null;
                          break;
                        }
                        if (U !== null) {
                          ((U.return = re), (le = U));
                          break;
                        }
                        le = re;
                      }
                  }
                }
                var oe = f.alternate;
                if (oe !== null) {
                  var se = oe.child;
                  if (se !== null) {
                    oe.child = null;
                    do {
                      var tt = se.sibling;
                      ((se.sibling = null), (se = tt));
                    } while (se !== null);
                  }
                }
                le = f;
              }
            }
            if ((f.subtreeFlags & 2064) !== 0 && y !== null) ((y.return = f), (le = y));
            else
              e: for (; le !== null; ) {
                if (((f = le), (f.flags & 2048) !== 0))
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mi(9, f, f.return);
                  }
                var j = f.sibling;
                if (j !== null) {
                  ((j.return = f.return), (le = j));
                  break e;
                }
                le = f.return;
              }
          }
          var b = e.current;
          for (le = b; le !== null; ) {
            y = le;
            var L = y.child;
            if ((y.subtreeFlags & 2064) !== 0 && L !== null) ((L.return = y), (le = L));
            else
              e: for (y = b; le !== null; ) {
                if (((_ = le), (_.flags & 2048) !== 0))
                  try {
                    switch (_.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ql(9, _);
                    }
                  } catch (ce) {
                    Ze(_, _.return, ce);
                  }
                if (_ === y) {
                  le = null;
                  break e;
                }
                var K = _.sibling;
                if (K !== null) {
                  ((K.return = _.return), (le = K));
                  break e;
                }
                le = _.return;
              }
          }
          if (((Re = a), qn(), hn && typeof hn.onPostCommitFiberRoot == 'function'))
            try {
              hn.onPostCommitFiberRoot(ol, e);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        ((De = r), (tn.transition = t));
      }
    }
    return !1;
  }
  function Vd(e, t, r) {
    ((t = Wr(r, t)),
      (t = ad(e, t, 1)),
      (e = Gn(e, t, 1)),
      (t = Et()),
      e !== null && (ui(e, 1, t), Pt(e, t)));
  }
  function Ze(e, t, r) {
    if (e.tag === 3) Vd(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Vd(t, e, r);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof o.componentDidCatch == 'function' && (Yn === null || !Yn.has(o)))
          ) {
            ((e = Wr(r, e)),
              (e = ud(t, e, 1)),
              (t = Gn(t, e, 1)),
              (e = Et()),
              t !== null && (ui(t, 1, e), Pt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Vm(e, t, r) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (t = Et()),
      (e.pingedLanes |= e.suspendedLanes & r),
      ct === e &&
        (gt & r) === r &&
        (st === 4 || (st === 3 && (gt & 130023424) === gt && 500 > et() - Ys)
          ? vr(e, 0)
          : (Ks |= r)),
      Pt(e, t));
  }
  function Wd(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = al), (al <<= 1), (al & 130023424) === 0 && (al = 4194304)));
    var r = Et();
    ((e = In(e, t)), e !== null && (ui(e, t, r), Pt(e, r)));
  }
  function Wm(e) {
    var t = e.memoizedState,
      r = 0;
    (t !== null && (r = t.retryLane), Wd(e, r));
  }
  function qm(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          a = e.memoizedState;
        a !== null && (r = a.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    (o !== null && o.delete(t), Wd(e, r));
  }
  var qd;
  qd = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || It.current) jt = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return ((jt = !1), Om(e, t, r));
        jt = (e.flags & 131072) !== 0;
      }
    else ((jt = !1), Ke && (t.flags & 1048576) !== 0 && Ec(t, jl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        (Wl(e, t), (e = t.pendingProps));
        var a = Ar(t, yt.current);
        (Hr(t, r), (a = Ns(null, t, o, e, a, r)));
        var f = Is();
        return (
          (t.flags |= 1),
          typeof a == 'object' &&
          a !== null &&
          typeof a.render == 'function' &&
          a.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Tt(o) ? ((f = !0), Nl(t)) : (f = !1),
              (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
              xs(t),
              (a.updater = Hl),
              (t.stateNode = a),
              (a._reactInternals = t),
              Rs(t, o, e, r),
              (t = Ds(null, t, o, !0, f, r)))
            : ((t.tag = 0), Ke && f && cs(t), Ct(null, t, a, r), (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
            (Wl(e, t),
            (e = t.pendingProps),
            (a = o._init),
            (o = a(o._payload)),
            (t.type = o),
            (a = t.tag = Gm(o)),
            (e = un(o, e)),
            a)
          ) {
            case 0:
              t = As(null, t, o, e, r);
              break e;
            case 1:
              t = vd(null, t, o, e, r);
              break e;
            case 11:
              t = pd(null, t, o, e, r);
              break e;
            case 14:
              t = hd(null, t, o, un(o.type, e), r);
              break e;
          }
          throw Error(l(306, o, ''));
        }
        return t;
      case 0:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : un(o, a)),
          As(e, t, o, a, r)
        );
      case 1:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : un(o, a)),
          vd(e, t, o, a, r)
        );
      case 3:
        e: {
          if ((kd(t), e === null)) throw Error(l(387));
          ((o = t.pendingProps),
            (f = t.memoizedState),
            (a = f.element),
            Rc(e, t),
            Ml(t, o, null, r));
          var y = t.memoizedState;
          if (((o = y.element), f.isDehydrated))
            if (
              ((f = {
                element: o,
                isDehydrated: !1,
                cache: y.cache,
                pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
                transitions: y.transitions,
              }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              ((a = Wr(Error(l(423)), t)), (t = xd(e, t, o, r, a)));
              break e;
            } else if (o !== a) {
              ((a = Wr(Error(l(424)), t)), (t = xd(e, t, o, r, a)));
              break e;
            } else
              for (
                Vt = Hn(t.stateNode.containerInfo.firstChild),
                  Ht = t,
                  Ke = !0,
                  an = null,
                  r = Pc(t, null, o, r),
                  t.child = r;
                r;
              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
          else {
            if ((Br(), o === a)) {
              t = jn(e, t, r);
              break e;
            }
            Ct(e, t, o, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ac(t),
          e === null && ps(t),
          (o = t.type),
          (a = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (y = a.children),
          is(o, a) ? (y = null) : f !== null && is(o, f) && (t.flags |= 32),
          yd(e, t),
          Ct(e, t, y, r),
          t.child
        );
      case 6:
        return (e === null && ps(t), null);
      case 13:
        return wd(e, t, r);
      case 4:
        return (
          ws(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = Ur(t, null, o, r)) : Ct(e, t, o, r),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : un(o, a)),
          pd(e, t, o, a, r)
        );
      case 7:
        return (Ct(e, t, t.pendingProps, r), t.child);
      case 8:
        return (Ct(e, t, t.pendingProps.children, r), t.child);
      case 12:
        return (Ct(e, t, t.pendingProps.children, r), t.child);
      case 10:
        e: {
          if (
            ((o = t.type._context),
            (a = t.pendingProps),
            (f = t.memoizedProps),
            (y = a.value),
            Ue(Ol, o._currentValue),
            (o._currentValue = y),
            f !== null)
          )
            if (sn(f.value, y)) {
              if (f.children === a.children && !It.current) {
                t = jn(e, t, r);
                break e;
              }
            } else
              for (f = t.child, f !== null && (f.return = t); f !== null; ) {
                var _ = f.dependencies;
                if (_ !== null) {
                  y = f.child;
                  for (var E = _.firstContext; E !== null; ) {
                    if (E.context === o) {
                      if (f.tag === 1) {
                        ((E = Tn(-1, r & -r)), (E.tag = 2));
                        var P = f.updateQueue;
                        if (P !== null) {
                          P = P.shared;
                          var $ = P.pending;
                          ($ === null ? (E.next = E) : ((E.next = $.next), ($.next = E)),
                            (P.pending = E));
                        }
                      }
                      ((f.lanes |= r),
                        (E = f.alternate),
                        E !== null && (E.lanes |= r),
                        vs(f.return, r, t),
                        (_.lanes |= r));
                      break;
                    }
                    E = E.next;
                  }
                } else if (f.tag === 10) y = f.type === t.type ? null : f.child;
                else if (f.tag === 18) {
                  if (((y = f.return), y === null)) throw Error(l(341));
                  ((y.lanes |= r),
                    (_ = y.alternate),
                    _ !== null && (_.lanes |= r),
                    vs(y, r, t),
                    (y = f.sibling));
                } else y = f.child;
                if (y !== null) y.return = f;
                else
                  for (y = f; y !== null; ) {
                    if (y === t) {
                      y = null;
                      break;
                    }
                    if (((f = y.sibling), f !== null)) {
                      ((f.return = y.return), (y = f));
                      break;
                    }
                    y = y.return;
                  }
                f = y;
              }
          (Ct(e, t, a.children, r), (t = t.child));
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (o = t.pendingProps.children),
          Hr(t, r),
          (a = Jt(a)),
          (o = o(a)),
          (t.flags |= 1),
          Ct(e, t, o, r),
          t.child
        );
      case 14:
        return ((o = t.type), (a = un(o, t.pendingProps)), (a = un(o.type, a)), hd(e, t, o, a, r));
      case 15:
        return md(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : un(o, a)),
          Wl(e, t),
          (t.tag = 1),
          Tt(o) ? ((e = !0), Nl(t)) : (e = !1),
          Hr(t, r),
          od(t, o, a),
          Rs(t, o, a, r),
          Ds(null, t, o, !0, e, r)
        );
      case 19:
        return _d(e, t, r);
      case 22:
        return gd(e, t, r);
    }
    throw Error(l(156, t.tag));
  };
  function Qd(e, t) {
    return bu(e, t);
  }
  function Qm(e, t, r, o) {
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
  function nn(e, t, r, o) {
    return new Qm(e, t, r, o);
  }
  function ia(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Gm(e) {
    if (typeof e == 'function') return ia(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === J)) return 11;
      if (e === q) return 14;
    }
    return 2;
  }
  function er(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = nn(e.tag, t, e.key, e.mode)),
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
  function no(e, t, r, o, a, f) {
    var y = 2;
    if (((o = e), typeof e == 'function')) ia(e) && (y = 1);
    else if (typeof e == 'string') y = 5;
    else
      e: switch (e) {
        case B:
          return xr(r.children, a, f, t);
        case ae:
          ((y = 8), (a |= 8));
          break;
        case ue:
          return ((e = nn(12, r, t, a | 2)), (e.elementType = ue), (e.lanes = f), e);
        case fe:
          return ((e = nn(13, r, t, a)), (e.elementType = fe), (e.lanes = f), e);
        case te:
          return ((e = nn(19, r, t, a)), (e.elementType = te), (e.lanes = f), e);
        case ve:
          return ro(r, a, f, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case de:
                y = 10;
                break e;
              case Z:
                y = 9;
                break e;
              case J:
                y = 11;
                break e;
              case q:
                y = 14;
                break e;
              case ye:
                ((y = 16), (o = null));
                break e;
            }
          throw Error(l(130, e == null ? e : typeof e, ''));
      }
    return ((t = nn(y, r, t, a)), (t.elementType = e), (t.type = o), (t.lanes = f), t);
  }
  function xr(e, t, r, o) {
    return ((e = nn(7, e, o, t)), (e.lanes = r), e);
  }
  function ro(e, t, r, o) {
    return (
      (e = nn(22, e, o, t)),
      (e.elementType = ve),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function la(e, t, r) {
    return ((e = nn(6, e, null, t)), (e.lanes = r), e);
  }
  function oa(e, t, r) {
    return (
      (t = nn(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Km(e, t, r, o, a) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Oo(0)),
      (this.expirationTimes = Oo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Oo(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null));
  }
  function sa(e, t, r, o, a, f, y, _, E) {
    return (
      (e = new Km(e, t, r, _, E)),
      t === 1 ? ((t = 1), f === !0 && (t |= 8)) : (t = 0),
      (f = nn(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (f.memoizedState = {
        element: o,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      xs(f),
      e
    );
  }
  function Ym(e, t, r) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: R,
      key: o == null ? null : '' + o,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function Gd(e) {
    if (!e) return Wn;
    e = e._reactInternals;
    e: {
      if (ar(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Tt(t.type)) {
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
      if (Tt(r)) return Sc(e, r, t);
    }
    return t;
  }
  function Kd(e, t, r, o, a, f, y, _, E) {
    return (
      (e = sa(r, o, !0, e, a, f, y, _, E)),
      (e.context = Gd(null)),
      (r = e.current),
      (o = Et()),
      (a = Zn(r)),
      (f = Tn(o, a)),
      (f.callback = t ?? null),
      Gn(r, f, a),
      (e.current.lanes = a),
      ui(e, a, o),
      Pt(e, o),
      e
    );
  }
  function io(e, t, r, o) {
    var a = t.current,
      f = Et(),
      y = Zn(a);
    return (
      (r = Gd(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Tn(f, y)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = Gn(a, t, y)),
      e !== null && (fn(e, a, y, f), zl(e, a, y)),
      y
    );
  }
  function lo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Yd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function aa(e, t) {
    (Yd(e, t), (e = e.alternate) && Yd(e, t));
  }
  function Xm() {
    return null;
  }
  var Xd =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ua(e) {
    this._internalRoot = e;
  }
  ((oo.prototype.render = ua.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(l(409));
      io(e, t, null, null);
    }),
    (oo.prototype.unmount = ua.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (yr(function () {
            io(null, e, null, null);
          }),
            (t[Cn] = null));
        }
      }));
  function oo(e) {
    this._internalRoot = e;
  }
  oo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ru();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Bn.length && t !== 0 && t < Bn[r].priority; r++);
      (Bn.splice(r, 0, e), r === 0 && Au(e));
    }
  };
  function ca(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function so(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Zd() {}
  function Zm(e, t, r, o, a) {
    if (a) {
      if (typeof o == 'function') {
        var f = o;
        o = function () {
          var P = lo(y);
          f.call(P);
        };
      }
      var y = Kd(t, o, e, 0, null, !1, !1, '', Zd);
      return (
        (e._reactRootContainer = y),
        (e[Cn] = y.current),
        _i(e.nodeType === 8 ? e.parentNode : e),
        yr(),
        y
      );
    }
    for (; (a = e.lastChild); ) e.removeChild(a);
    if (typeof o == 'function') {
      var _ = o;
      o = function () {
        var P = lo(E);
        _.call(P);
      };
    }
    var E = sa(e, 0, !1, null, null, !1, !1, '', Zd);
    return (
      (e._reactRootContainer = E),
      (e[Cn] = E.current),
      _i(e.nodeType === 8 ? e.parentNode : e),
      yr(function () {
        io(t, E, r, o);
      }),
      E
    );
  }
  function ao(e, t, r, o, a) {
    var f = r._reactRootContainer;
    if (f) {
      var y = f;
      if (typeof a == 'function') {
        var _ = a;
        a = function () {
          var E = lo(y);
          _.call(E);
        };
      }
      io(t, y, e, a);
    } else y = Zm(r, t, e, a, o);
    return lo(y);
  }
  ((Pu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = ai(t.pendingLanes);
          r !== 0 && (Ro(t, r | 1), Pt(t, et()), (Re & 6) === 0 && ((Gr = et() + 500), qn()));
        }
        break;
      case 13:
        (yr(function () {
          var o = In(e, 1);
          if (o !== null) {
            var a = Et();
            fn(o, e, 1, a);
          }
        }),
          aa(e, 1));
    }
  }),
    (zo = function (e) {
      if (e.tag === 13) {
        var t = In(e, 134217728);
        if (t !== null) {
          var r = Et();
          fn(t, e, 134217728, r);
        }
        aa(e, 134217728);
      }
    }),
    (Ou = function (e) {
      if (e.tag === 13) {
        var t = Zn(e),
          r = In(e, t);
        if (r !== null) {
          var o = Et();
          fn(r, e, t, o);
        }
        aa(e, t);
      }
    }),
    (Ru = function () {
      return De;
    }),
    (zu = function (e, t) {
      var r = De;
      try {
        return ((De = e), t());
      } finally {
        De = r;
      }
    }),
    (No = function (e, t, r) {
      switch (t) {
        case 'input':
          if ((Dt(e, r), (t = r.name), r.type === 'radio' && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
                t = 0;
              t < r.length;
              t++
            ) {
              var o = r[t];
              if (o !== e && o.form === e.form) {
                var a = El(o);
                if (!a) throw Error(l(90));
                (zn(o), Dt(o, a));
              }
            }
          }
          break;
        case 'textarea':
          Nt(e, r);
          break;
        case 'select':
          ((t = r.value), t != null && ge(e, !!r.multiple, t, !1));
      }
    }),
    (ku = ta),
    (xu = yr));
  var Jm = { usingClientEntryPoint: !1, Events: [bi, zr, El, yu, vu, ta] },
    Bi = {
      findFiberByHostInstance: ur,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    eg = {
      bundleType: Bi.bundleType,
      version: Bi.version,
      rendererPackageName: Bi.rendererPackageName,
      rendererConfig: Bi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: H.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Cu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Bi.findFiberByHostInstance || Xm,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var uo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!uo.isDisabled && uo.supportsFiber)
      try {
        ((ol = uo.inject(eg)), (hn = uo));
      } catch {}
  }
  return (
    (Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jm),
    (Ot.createPortal = function (e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ca(t)) throw Error(l(200));
      return Ym(e, t, null, r);
    }),
    (Ot.createRoot = function (e, t) {
      if (!ca(e)) throw Error(l(299));
      var r = !1,
        o = '',
        a = Xd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = sa(e, 1, !1, null, null, r, !1, o, a)),
        (e[Cn] = t.current),
        _i(e.nodeType === 8 ? e.parentNode : e),
        new ua(t)
      );
    }),
    (Ot.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(l(188))
          : ((e = Object.keys(e).join(',')), Error(l(268, e)));
      return ((e = Cu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Ot.flushSync = function (e) {
      return yr(e);
    }),
    (Ot.hydrate = function (e, t, r) {
      if (!so(t)) throw Error(l(200));
      return ao(null, e, t, !0, r);
    }),
    (Ot.hydrateRoot = function (e, t, r) {
      if (!ca(e)) throw Error(l(405));
      var o = (r != null && r.hydratedSources) || null,
        a = !1,
        f = '',
        y = Xd;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (f = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (y = r.onRecoverableError)),
        (t = Kd(t, null, e, 1, r ?? null, a, !1, f, y)),
        (e[Cn] = t.current),
        _i(e),
        o)
      )
        for (e = 0; e < o.length; e++)
          ((r = o[e]),
            (a = r._getVersion),
            (a = a(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, a])
              : t.mutableSourceEagerHydrationData.push(r, a));
      return new oo(t);
    }),
    (Ot.render = function (e, t, r) {
      if (!so(t)) throw Error(l(200));
      return ao(null, e, t, !1, r);
    }),
    (Ot.unmountComponentAtNode = function (e) {
      if (!so(e)) throw Error(l(40));
      return e._reactRootContainer
        ? (yr(function () {
            ao(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Cn] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Ot.unstable_batchedUpdates = ta),
    (Ot.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!so(r)) throw Error(l(200));
      if (e == null || e._reactInternals === void 0) throw Error(l(38));
      return ao(e, t, r, !1, o);
    }),
    (Ot.version = '18.3.1-next-f1338f8080-20240426'),
    Ot
  );
}
var sf;
function ag() {
  if (sf) return pa.exports;
  sf = 1;
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
  return (n(), (pa.exports = sg()), pa.exports);
}
var af;
function ug() {
  if (af) return co;
  af = 1;
  var n = ag();
  return ((co.createRoot = n.createRoot), (co.hydrateRoot = n.hydrateRoot), co);
}
var cg = ug();
const dg = JSON.parse(
    `[{"id":"timeframes","type":"preset","presets":[{"id":"next-decade","name":"Focused on next decade (until 2035)","description":"Evaluates projects primarily by their effects over the next decade.","credences":{"equalAll":0,"prioritizeNearer":0,"discountDistant":25,"shortTermOnly":75}},{"id":"next-generations","name":"Focused on next generations (until 2100)","description":"Emphasizes effects on the next few generations, including individuals who do not currently exist.","credences":{"equalAll":20,"prioritizeNearer":50,"discountDistant":30,"shortTermOnly":0}},{"id":"longtermist","name":"Longtermist","description":"Concerned with the longterm future, valuing effects equally regardless of when they occur.","credences":{"equalAll":80,"prioritizeNearer":20,"discountDistant":0,"shortTermOnly":0}}],"worldviewDimension":{"appliesTo":"timeframe","applyAs":"multiplier","options":{"equalAll":{"short":1,"medium":1,"long":1},"prioritizeNearer":{"short":1,"medium":0.5,"long":0.2},"discountDistant":{"short":1,"medium":0.2,"long":0},"shortTermOnly":{"short":1,"medium":0,"long":0}}},"categoryLabel":"Time Preferences","icon":"clock","previewText":"Short vs. long-term effects","heading":"When evaluating projects, how much consideration do you give to projects' near-term, medium-term, or longer-term effects?","info":"A project's effects play out over different timelines. Some effects, like malaria treatments, might occur right away. Others, like investments in education or infrastructure, could take years to arise. Other effects will arise in the longer run future. When you are evaluating projects, do you give extra weight to effects that will happen sooner (in the next decade) rather than later (decades or even centuries in the future)?\\n\\nThere are several reasons why you might give extra weight to near-term effects. First, you might think it's more morally important to help individuals that currently exist or will exist very soon than it is to help individuals that will potentially exist in the future. Alternatively, even if you think all beings matter equally, regardless of time, you might be so uncertain about a project's long-term effects that you'd rather focus on the more predictable near future. Lastly, you might have beliefs about how the future will go (e.g. that AI will change everything in 10 years) that make you want to just focus on projects whose effects will happen soon.","context":"Consider the following timeframes:\\n\\n- **Short-term:** before 2035\\n- **Medium-term:** from 2035-2100\\n- **Long-term:** after 2100\\n\\nWhich of these positions best describes your view when evaluating the effects of different projects?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Time Preferences","options":[{"key":"equalAll","label":"Equal across all timeframes","description":"I only care about how much good I could possibly do, and I don't care whether that good happens in the short-term, medium-term, or long-term","info":"","panelLabel":"Equal","panelShort":"="},{"key":"prioritizeNearer","label":"Prioritize nearer term","description":"I care a bit about the long-term future, but I put more priority on the medium-term and even more priority on the short-term","info":"","panelLabel":"Nearer","panelShort":">"},{"key":"discountDistant","label":"Discount the distant future","description":"I do not care about the distant future. I care a bit about the medium-term, but I put more priority on the short-term","info":"","panelLabel":"Discount","panelShort":">>"},{"key":"shortTermOnly","label":"Short-term only","description":"I only care about effects in the short-term","info":"","panelLabel":"Short","panelShort":"ST"}]},{"id":"risk","type":"credence","worldviewDimension":{"appliesWhen":"isDummyRisk","applyAs":"multiplier","options":{"riskNeutral":1,"upsideSkepticism":1,"lossAversion":1,"both":1}},"categoryLabel":"Risk Attitudes","icon":"dice","previewText":"Attitudes toward risk","heading":"Are you averse to taking certain kinds of risks in your philanthropic giving?","info":"The expected value of a project is a weighted average of all the effects that the project might have. Two projects can have the same expected value but otherwise be very different. For example, a \\"safe\\" project may be almost guaranteed to do X amount of good, so its expected value is X. A \\"risky\\" project might have a 1/100 chance of delivering 100 x X amount of good and a 99/100 of doing nothing, so its expected value is also X. A different kind of \\"risky\\" project might have a 1/2 chance of backfiring, creating -X value, and a 1/2 chance of creating 3X value, so its expected value is also X.\\n\\nIf you only care about maximizing expected value, you will treat these projects the same way. However, if you are risk averse, you may dislike one or both of the risky projects. There are a few ways to be risk averse, including:\\n\\n- **Upside skepticism:** you are wary of spending your money on bets that have very small chances of success. You want to focus on what will probably happen, not what will happen in the most optimistic of outcomes.\\n- **Loss aversion:** you want to avoid situations where your money does nothing, and you are even more keen to avoid situations where your actions made things worse. You want to penalize projects that have decent chances of failure or backfire.\\n- **Both skeptical of upsides and averse to losses**","context":"Which of these best describes your perspective:","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Risk Attitudes","options":[{"key":"riskNeutral","label":"Risk neutral","description":"I prefer to invest in options that have the highest expected value","info":"","panelLabel":"Neutral","panelShort":"EV"},{"key":"upsideSkepticism","label":"Skeptical of optimistic scenarios","description":"I am skeptical of projects' most optimistic scenarios and decide where to give based on scenarios that are more likely to occur","info":"","panelLabel":"Skeptical","panelShort":"S"},{"key":"lossAversion","label":"Avoid losses","description":"I want to avoid losses and am motivated to avoid projects that have significant chances of failure or backfire (even if those projects have high expected value)","info":"","panelLabel":"Loss averse","panelShort":"LA"},{"key":"both","label":"Both skeptical and loss averse","description":"I am both skeptical of projects' most optimistic scenarios and motivated to avoid losses","info":"","panelLabel":"Both","panelShort":"B"}]},{"id":"xrisk","type":"credence","worldviewDimension":{"appliesWhen":"isNonXRisk","applyAs":"multiplier","options":{"evaluateSame":1,"discount10":0.9,"discount50":0.5,"xriskOnly":0}},"categoryLabel":"Existential Risk","icon":"alert-triangle","previewText":"Existential risk priority","heading":"How much do you want to prioritize efforts to mitigate near-term existential risks which demand action in the next several years, compared to other kinds of projects you might fund?","info":"Some projects aim to reduce the chances of an event that poses existential or catastrophic risk (such as an engineered pandemic or AI takeover). If an event like this occurs, then it could severely mitigate the beneficial effects of other kinds of philanthropic projects (such as global health interventions). This can make it hard to compare the value of existential risk mitigation to the value of other projects.\\n\\nIf you think there is a high chance of a catastrophic risk in the near future (say, the next 10 years), then you may think that we need to act now to try to reduce these threats. You may care a lot about the longer-run future and what the world is like decades from now, but you want to prioritize actions now to ensure that humanity is around to enjoy that future.","context":"Do you want to treat near-term existential risk mitigation projects differently than other projects?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"X-Risk Priority","options":[{"key":"evaluateSame","label":"Evaluate the same way","description":"I want to evaluate near-term existential risk projects the same way that I evaluate all other projects (e.g. by calculating their expected effects over the timeline I care about)","info":"","panelLabel":"Same","panelShort":"="},{"key":"discount10","label":"Discount other projects somewhat","description":"I think there is about a 10% probability that an existential risk occurs in the next decade that renders other projects useless. Therefore, I want to discount the value of these other projects somewhat","info":"","panelLabel":"10% risk","panelShort":"10%"},{"key":"discount50","label":"Discount other projects greatly","description":"I think there is about a 50% probability that an existential risk occurs in the next decade that renders other projects useless. Therefore, I want to greatly discount the value of these other projects","info":"","panelLabel":"50% risk","panelShort":"50%"},{"key":"xriskOnly","label":"Only x-risk reduction","description":"I only care about reducing near-term existential risk","info":"","panelLabel":"X-risk only","panelShort":"X"}]},{"id":"animal","type":"preset","presets":[{"id":"animal-friendly","name":"Animal friendly view","description":"Emphasizes equal consideration for animal and human suffering.","credences":{"humanEqual":75,"human10x":25,"human100x":0,"human1000x":0,"noValue":0}},{"id":"rethink-priorities","name":"Rethink Priorities default","description":"Based on empirical research on animal welfare ranges, gives animals somewhat lower weight than humans.","credences":{"humanEqual":20,"human10x":50,"human100x":20,"human1000x":10,"noValue":0}},{"id":"animal-skeptic","name":"Animal skeptic view","description":"Gives strong priority to human welfare, based on their unique capacities or our special moral obligations to other humans.","credences":{"humanEqual":0,"human10x":10,"human100x":60,"human1000x":30,"noValue":0}}],"worldviewDimension":{"appliesWhen":"helpsAnimals","applyAs":"multiplier","options":{"humanEqual":0.0172,"human10x":0.00172,"human100x":0.000172,"human1000x":0.0000172,"noValue":0}},"categoryLabel":"Animal Welfare","icon":"paw","previewText":"Animal welfare","heading":"How much do you value reducing suffering in animals compared to reducing suffering in humans?","info":"It can be difficult to compare the value of helping humans versus helping animals. For now, let's consider animals that most people believe are capable of suffering (such as pigs, dogs, or cows) and use chickens as a test case.\\n\\nThere are some conditions that decrease chickens' quality of life, which we can measure in terms of chicken Disability Adjusted Life Years. For example, suppose living in hurtful pain for a year reduces a chicken's quality of life by 25%. Therefore, if we improve a chicken's living conditions to relieve this suffering, this would result in a gain of 0.25 chicken DALYs. Likewise, some human conditions reduce a human's quality of life by 25%, so relieving this for a year would result in 0.25 human DALYs.\\n\\nHow much do you value chicken DALYs versus human DALYs? In other words, how much do you care about a quality of life reduction in chickens compared to a similar proportional quality of life reduction in humans? Note that there are a few different reasons you might give chicken DALYs lower weight. Perhaps you think a 25% reduction in a chicken's quality of life involves less suffering (or loss of meaningful experiences) than a 25% reduction in a human's quality of life. Alternatively, you could think the amount of suffering is the same, but you think it is morally more important to alleviate human suffering.","context":"For this question, we'll focus on familiar farmed animals—chickens, pigs, and cows—that most people agree can experience pain and distress.\\n\\nWhich of these positions best describes your view?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Animal Welfare Weights","options":[{"key":"humanEqual","label":"Equal to humans","description":"I treat a year of disability in an animal the same as a year of disability in a human","info":"","panelLabel":"Equal","panelShort":"="},{"key":"human10x","label":"10x less than humans","description":"I value a human year of disability about 10x as much as a year of disability in an animal","info":"","panelLabel":"10x less","panelShort":"10x"},{"key":"human100x","label":"100x less than humans","description":"I value a human year of disability about 100x as much as a year of disability in an animal","info":"","panelLabel":"100x less","panelShort":"100x"},{"key":"human1000x","label":"1000x less than humans","description":"I value a human year of disability about 1000x as much as a year of disability in an animal","info":"","panelLabel":"1000x less","panelShort":"1kx"},{"key":"noValue","label":"No value","description":"I do not value animal welfare","info":"","panelLabel":"None","panelShort":"0"}]},{"id":"invertebrate","type":"preset","presets":[{"id":"invertebrate-friendly","name":"Invertebrate friendly view","description":"Emphasizes roughly equal consideration for invertebrate and human suffering, tempered by uncertainty about invertebrate sentience.","credences":{"humanEqual":40,"human100x":40,"human1000x":20,"human10000x":0,"noValue":0}},{"id":"rethink-priorities","name":"Rethink Priorities default","description":"Based on empirical research on animal welfare ranges and likelihoods of invertebrate sentience, gives animals significantly lower weight than humans.","credences":{"humanEqual":10,"human100x":40,"human1000x":30,"human10000x":10,"noValue":10}},{"id":"invertebrate-skeptic","name":"Invertebrate skeptic view","description":"Gives strong priority to human welfare, highly skeptical about invertebrates' capacity for welfare.","credences":{"humanEqual":0,"human100x":0,"human1000x":10,"human10000x":40,"noValue":50}}],"worldviewDimension":{"appliesWhen":"helpsInvertebrates","applyAs":"multiplier","options":{"humanEqual":0.0172,"human100x":0.000172,"human1000x":0.0000172,"human10000x":0.00000172,"noValue":0}},"categoryLabel":"Invertebrate Welfare","icon":"shell","previewText":"Invertebrate welfare","heading":"How much do you care about reducing the suffering of shrimp (or other small, less understood farmed invertebrates), compared to reducing the suffering of humans?","info":"It can be difficult to compare the value of helping humans versus helping animals. This is even more difficult when we are uncertain whether the animals even have conscious experiences or what their experiences are like. For now, let's consider farmed invertebrates (such as shrimp or insects) and use shrimp as a test case.\\n\\nShrimp may experience conditions that reduce their quality of life. Assuming they are sentient, we can characterize their loss of quality of life via a shrimp DALY. How much do you value shrimp DALYs versus human DALYs? Note that there are three different reasons you might give shrimp DALYs lower weight. Perhaps you think a 25% reduction in a shrimp's quality of life involves less suffering (or loss of meaningful experiences) than a 25% reduction in a human's quality of life. Alternatively, you could think the amount of suffering is the same, but you think it is morally more important to alleviate human suffering. Lastly, you could doubt that shrimp are sentient and therefore doubt that they can suffer.","context":"Which of these positions best describes your view?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Invertebrate Weights","options":[{"key":"humanEqual","label":"Equal to humans","description":"I treat a year of disability in shrimp the same as a year of disability in a human","info":"","panelLabel":"Equal","panelShort":"="},{"key":"human100x","label":"100x less than humans","description":"I value a human year of disability about 100x as much as a year of disability in a shrimp","info":"","panelLabel":"100x less","panelShort":"100x"},{"key":"human1000x","label":"1000x less than humans","description":"I value a human year of disability about 1000x as much as a year of disability in a shrimp","info":"","panelLabel":"1000x less","panelShort":"1kx"},{"key":"human10000x","label":"10,000x less than humans","description":"I value a human year of disability about 10,000x as much as a year of disability in a shrimp","info":"","panelLabel":"10kx less","panelShort":"10kx"},{"key":"noValue","label":"No value","description":"I do not value shrimp welfare","info":"","panelLabel":"None","panelShort":"0"}]},{"id":"disability","type":"preset","presets":[{"id":"prioritize-lives","name":"Prioritize saving lives","description":"Places more emphasis on preventing deaths than relieving suffering from non-fatal diseases and disabilities.","credences":{"livesOnly":25,"livesMore":75,"equal":0,"disabilityMore":0}},{"id":"equal-weight","name":"Equal weight","description":"Values saving lives the same as restoring quality of life lost to disability. Similar to GiveWell's moral weights.","credences":{"livesOnly":0,"livesMore":0,"equal":100,"disabilityMore":0}},{"id":"prioritize-quality","name":"Prioritize improving quality of life","description":"Places more emphasis on relieving suffering due to disease and disability, instead of saving lives.","credences":{"livesOnly":0,"livesMore":0,"equal":25,"disabilityMore":75}}],"worldviewDimension":{"appliesWhen":"preventsDisability","applyAs":"multiplier","options":{"livesOnly":0,"livesMore":0.003,"equal":0.0172,"disabilityMore":0.086}},"categoryLabel":"Disability Weights","icon":"heart-pulse","previewText":"Disability vs. saving lives","heading":"When you think about helping people, how do you weigh saving lives against making people's existing lives better by reducing disease or disability?","info":"Here's an example that may help you think through your options. Suppose that living with blindness reduces someone's quality of life by 25%. You could either choose to cure blindness in a group of people, restoring them to full health for some number of years. Or you could save a child's life, giving them 50 extra years to live. How many years of blindness would you need to relieve to make it as good as saving the one child's life?\\n\\nSome charitable projects save lives—preventing people from dying. Others relieve suffering from diseases or disabilities that aren't fatal but significantly reduce quality of life.\\n\\n**How we measure this:** We can estimate how much a disease or disability reduces someone's quality of life (estimates typically come from the [Global Burden of Disease](https://www.healthdata.org/research-analysis/gbd)). For example:\\n\\n- **Clubfoot** might reduce quality of life by 20%\\n- **Blindness** might reduce quality of life by 25%\\n- **Severe multiple sclerosis** might reduce quality of life by 75%\\n\\nIf a charity treats someone's blindness for 10 years, that's like restoring 2.5 \\"full-health years\\" (10 years × 25% improvement). If a charity corrects an infant's clubfeet and prevents them from suffering from 60 years of that condition, that's like restoring 12 full health years. We call these recovered years \\"disability-adjusted life years\\" or DALYs.","context":"Imagine you must choose between two projects:\\n\\n- **Project A:** Save one child's life, giving them 50 additional years to live\\n- **Project B:** Cure or treat a serious disability for multiple people, restoring some number of \\"full-health years\\"\\n\\nHow many years of disability would you need to relieve to make it as good as saving the one child's life?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Disability Weights","options":[{"key":"livesOnly","label":"Saving lives only","description":"I only care about saving years of life due to death","info":"","panelLabel":"Lives only","panelShort":"0"},{"key":"livesMore","label":"More weight on saving lives","description":"I put 5x as much value on saving a year of life lost to death than a year of life lost to disability","info":"I'd need to prevent 1000 years of blindness to equal saving 50 years of life.","panelLabel":"5x lives","panelShort":"5xL"},{"key":"equal","label":"Equal weight for saving lives and relieving disabilities","description":"I value a year of life lost equally, whether it is due to death or disability","info":"I'd need to prevent 200 years of blindness to equal saving 50 years of life. For comparison, this is the weight given to disability by GiveWell.","panelLabel":"Equal","panelShort":"="},{"key":"disabilityMore","label":"More weight on relieving disability","description":"I put 5x as much value on saving a year of life lost to disability than a year of life lost to death","info":"I'd need to prevent 40 years of blindness to equal saving 50 years of life.","panelLabel":"5x disability","panelShort":"5xD"}]},{"id":"income","type":"preset","presets":[{"id":"prioritize-lives","name":"Prioritize saving lives","description":"Places much more emphasis on preventing deaths than improving material conditions for people living in poverty.","credences":{"livesOnly":25,"lives10x":75,"lives2x":0,"equal":0}},{"id":"balanced","name":"Balanced","description":"Gives more weight to saving lives than improving incomes, but cares about both goals. Similar to GiveWell's moral weights.","credences":{"livesOnly":0,"lives10x":25,"lives2x":75,"equal":0}},{"id":"poverty-relief","name":"Poverty relief","description":"Prioritizes poverty relief as highly as saving lives.","credences":{"livesOnly":0,"lives10x":0,"lives2x":25,"equal":75}}],"worldviewDimension":{"appliesWhen":"increasesIncome","applyAs":"multiplier","options":{"livesOnly":0,"lives10x":0.0017,"lives2x":0.0086,"equal":0.0172}},"categoryLabel":"Income Weights","icon":"banknote","previewText":"Income vs. saving lives","heading":"When you think about helping people, how do you weigh saving lives against increasing people's income, allowing them to improve their material quality of life?","info":"Here's an example that might help you think through your options. Suppose that you could make direct cash transfers that would double incomes for a group of people for a year. The same amount of money would save one child's life, giving them an extra 50 years to live. How many people's incomes would you have to double to make that option as good as saving the one child's life?","context":"**Imagine this scenario:** You could either:\\n\\n- **Option A:** Add one year of life to someone who would otherwise die\\n- **Option B:** Double someone's income for one year, significantly improving their material circumstances\\n\\nHow much do you value doubling someone's income for a year compared to adding one year to someone's life?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Income Weights","options":[{"key":"livesOnly","label":"Saving lives only","description":"I only care about adding years of life","info":"","panelLabel":"Lives only","panelShort":"0"},{"key":"lives10x","label":"Much more weight on a year of life","description":"I put 10x as much value on a year of life compared to a year of doubled income","info":"I would need to double yearly income for 500 people to equal saving 50 years of life.","panelLabel":"10x lives","panelShort":"10x"},{"key":"lives2x","label":"Some more weight on a year of life","description":"I put 2x as much value on a year of life compared to a year of doubled income","info":"I would need to double yearly income for 100 people to equal saving 50 years of life. This is comparable to (but slightly higher than) the weight that GiveWell assigns to a year of income doubling compared to saving a year of life.","panelLabel":"2x lives","panelShort":"2x"},{"key":"equal","label":"Equal weight","description":"I put the same value on a year of life compared to a year of doubled income","info":"I would need to double yearly income for 50 people to equal saving 50 years of life.","panelLabel":"Equal","panelShort":"="}]}]`
  ),
  tp = { questions: dg },
  fg = 'extreme',
  pg = {
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
    directCashTransfers: {
      name: 'Direct Cash Transfers',
      color: '#81b29a',
      points: 100,
      scaleFactor: 1,
      preventsDisability: !1,
      increasesIncome: !0,
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
      color: '#f4a261',
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
      isNonXRisk: !1,
      isDummyRisk: !0,
    },
    bioriskPandemic: {
      name: 'Biorisk and Pandemic Prevention Fund',
      color: '#00b4d8',
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
  hg = { livesOnly: 25, livesMore: 25, equal: 25, disabilityMore: 25 },
  Yi = { diminishingReturns: fg, causes: pg, defaultCredences: hg },
  mg = {
    resetButton: !1,
    sliderLock: !0,
    shareResults: !1,
    multipleWorldviews: !1,
    moralMarketplace: !1,
  },
  gg = {
    order: ['mergedFavorites', 'maxEV', 'parliament', 'maximin'],
    showMergedFavorites: !0,
    showMaxEV: !0,
    showParliament: !1,
    showMaximin: !1,
    sideBySideComparison: !0,
  },
  Rn = { ui: mg, calculations: gg },
  ni = {
    SESSION_ID: 'quiz_session_id',
    QUIZ_STATE: 'quiz_state',
    SKIP_CONFLICT: 'quiz_skip_conflict',
  },
  np = 6;
function yg() {
  let n = sessionStorage.getItem(ni.SESSION_ID);
  return (n || ((n = crypto.randomUUID()), sessionStorage.setItem(ni.SESSION_ID, n)), n);
}
function vg(n) {
  const { currentStep: i, worldviews: l, activeWorldviewId: s, selectedCalculations: u } = n,
    c = {};
  for (const [p, h] of Object.entries(l)) {
    const m = {};
    for (const [g, k] of Object.entries(h.questions))
      m[g] = {
        credences: k.credences,
        originalCredences: k.originalCredences,
        inputMode: k.inputMode,
        lockedKeys: k.lockedKeys,
        selectedPreset: k.selectedPreset,
      };
    c[p] = { questions: m };
  }
  const d = {
    version: np,
    state: { currentStep: i, worldviews: c, activeWorldviewId: s, selectedCalculations: u },
  };
  sessionStorage.setItem(ni.QUIZ_STATE, JSON.stringify(d));
}
function ga() {
  const n = sessionStorage.getItem(ni.QUIZ_STATE);
  if (!n) return null;
  try {
    const i = JSON.parse(n);
    return i.version !== np ? (ko(), null) : i.state;
  } catch {
    return (ko(), null);
  }
}
function ko() {
  sessionStorage.removeItem(ni.QUIZ_STATE);
}
function kg() {
  sessionStorage.setItem(ni.SKIP_CONFLICT, 'true');
}
function ya() {
  window.location.hash &&
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
const Rt = 'rgba(255, 255, 255, 0.8)',
  uf = {
    default: [Rt, Rt, Rt],
    selection: [Rt, Rt, Rt],
    credence: [Rt, Rt, Rt],
    preset: [Rt, Rt, Rt, Rt, Rt],
  },
  rp = 'rgba(255, 255, 255, 0.7)',
  ip = { OPTIONS: 'options' },
  St = {
    DEFAULT: 'default',
    SELECTION: 'selection',
    CREDENCE: 'credence',
    INTERMISSION: 'intermission',
    PRESET: 'preset',
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xg = (n) => n.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  lp = (...n) =>
    n
      .filter((i, l, s) => !!i && i.trim() !== '' && s.indexOf(i) === l)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var wg = {
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
 */ const Sg = W.forwardRef(
  (
    {
      color: n = 'currentColor',
      size: i = 24,
      strokeWidth: l = 2,
      absoluteStrokeWidth: s,
      className: u = '',
      children: c,
      iconNode: d,
      ...p
    },
    h
  ) =>
    W.createElement(
      'svg',
      {
        ref: h,
        ...wg,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: s ? (Number(l) * 24) / Number(i) : l,
        className: lp('lucide', u),
        ...p,
      },
      [...d.map(([m, g]) => W.createElement(m, g)), ...(Array.isArray(c) ? c : [c])]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ve = (n, i) => {
  const l = W.forwardRef(({ className: s, ...u }, c) =>
    W.createElement(Sg, { ref: c, iconNode: i, className: lp(`lucide-${xg(n)}`, s), ...u })
  );
  return ((l.displayName = `${n}`), l);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _g = Ve('Banknote', [
  ['rect', { width: '20', height: '12', x: '2', y: '6', rx: '2', key: '9lu3g6' }],
  ['circle', { cx: '12', cy: '12', r: '2', key: '1c9p78' }],
  ['path', { d: 'M6 12h.01M18 12h.01', key: '113zkx' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cg = Ve('Bird', [
  ['path', { d: 'M16 7h.01', key: '1kdx03' }],
  ['path', { d: 'M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20', key: 'oj1oa8' }],
  ['path', { d: 'm20 7 2 .5-2 .5', key: '12nv4d' }],
  ['path', { d: 'M10 18v3', key: '1yea0a' }],
  ['path', { d: 'M14 17.75V21', key: '1pymcb' }],
  ['path', { d: 'M7 18a6 6 0 0 0 3.84-10.61', key: '1npnn0' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Eg = Ve('Building2', [
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
 */ const bg = Ve('ChartColumn', [
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
 */ const op = Ve('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ng = Ve('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ig = Ve('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sp = Ve('CircleHelp', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tg = Ve('Clock', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['polyline', { points: '12 6 12 12 16 14', key: '68esgv' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jg = Ve('Dices', [
  ['rect', { width: '12', height: '12', x: '2', y: '10', rx: '2', ry: '2', key: '6agr2n' }],
  [
    'path',
    { d: 'm17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6', key: '1o487t' },
  ],
  ['path', { d: 'M6 18h.01', key: 'uhywen' }],
  ['path', { d: 'M10 14h.01', key: 'ssrbsk' }],
  ['path', { d: 'M15 6h.01', key: 'cblpky' }],
  ['path', { d: 'M18 9h.01', key: '2061c0' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lg = Ve('ExternalLink', [
  ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
  ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
  ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pg = Ve('Handshake', [
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
 */ const Og = Ve('HeartPulse', [
  [
    'path',
    {
      d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z',
      key: 'c3ymky',
    },
  ],
  ['path', { d: 'M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27', key: '1uw2ng' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rg = Ve('Hourglass', [
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
 */ const zg = Ve('Info', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M12 16v-4', key: '1dtifu' }],
  ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ap = Ve('Lock', [
  ['rect', { width: '18', height: '11', x: '3', y: '11', rx: '2', ry: '2', key: '1w4ew1' }],
  ['path', { d: 'M7 11V7a5 5 0 0 1 10 0v4', key: 'fwvmzm' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mg = Ve('Microscope', [
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
 */ const Ag = Ve('PawPrint', [
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
 */ const Dg = Ve('Pencil', [
  [
    'path',
    {
      d: 'M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z',
      key: '1a8usu',
    },
  ],
  ['path', { d: 'm15 5 4 4', key: '1mk7zo' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ra = Ve('RotateCcw', [
  ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
  ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fg = Ve('Scale', [
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
 */ const Bg = Ve('Shell', [
  [
    'path',
    {
      d: 'M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44',
      key: '1cn552',
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ug = Ve('SlidersVertical', [
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
 */ const $g = Ve('Target', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['circle', { cx: '12', cy: '12', r: '6', key: '1vlfrh' }],
  ['circle', { cx: '12', cy: '12', r: '2', key: '1c9p78' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hg = Ve('TriangleAlert', [
  [
    'path',
    {
      d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3',
      key: 'wmoenq',
    },
  ],
  ['path', { d: 'M12 9v4', key: 'juzpu7' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vg = Ve('X', [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ]),
  Wg = '_overlay_13cvn_1',
  qg = '_modal_13cvn_12',
  Qg = '_title_13cvn_21',
  Gg = '_message_13cvn_29',
  Kg = '_buttons_13cvn_36',
  Yg = '_button_13cvn_36',
  Xg = '_worldviewRow_13cvn_51',
  Zg = '_worldviewButton_13cvn_57',
  Jg = '_editRow_13cvn_62',
  ey = '_editInput_13cvn_69',
  ty = '_iconButton_13cvn_86',
  nt = {
    overlay: Wg,
    modal: qg,
    title: Qg,
    message: Gg,
    buttons: Kg,
    button: Yg,
    worldviewRow: Xg,
    worldviewButton: Zg,
    editRow: Jg,
    editInput: ey,
    iconButton: ty,
  };
function ny({ onKeepMine: n, onLoadShared: i, onOpenNewTab: l }) {
  return v.jsx('div', {
    className: nt.overlay,
    children: v.jsxs('div', {
      className: nt.modal,
      children: [
        v.jsx('h2', { className: nt.title, children: 'You have unsaved progress' }),
        v.jsx('p', {
          className: nt.message,
          children:
            'Loading this shared link will replace your current quiz answers. What would you like to do?',
        }),
        v.jsxs('div', {
          className: nt.buttons,
          children: [
            v.jsx('button', {
              onClick: n,
              className: `btn btn-secondary ${nt.button}`,
              children: 'Keep my progress',
            }),
            v.jsx('button', {
              onClick: i,
              className: `btn btn-primary ${nt.button}`,
              children: 'Load shared results',
            }),
            v.jsxs('button', {
              onClick: l,
              className: `btn btn-secondary ${nt.button}`,
              children: [v.jsx(Lg, { size: 16 }), 'Open in new tab'],
            }),
          ],
        }),
      ],
    }),
  });
}
const { causes: _r } = Yi,
  xo = { none: 1, sqrt: 0.5, extreme: 0.1 };
function up(n) {
  const i = (n == null ? void 0 : n.diminishingReturns) || Yi.diminishingReturns || 'sqrt';
  return xo[i] ?? 0.5;
}
function Ya(n, i, l = 0.5) {
  if (l >= 1) {
    const d = Math.max(...n);
    if (d <= 0) return n.map(() => i / n.length);
    const p = n.map((h, m) => (h === d ? m : -1)).filter((h) => h >= 0);
    return n.map((h, m) => (p.includes(m) ? i / p.length : 0));
  }
  const s = 1 / (1 - l),
    u = n.map((d) => (d > 0 ? Math.pow(d, s) : 0)),
    c = u.reduce((d, p) => d + p, 0);
  return c === 0 ? n.map(() => i / n.length) : u.map((d) => (d / c) * i);
}
function cp(n = !1) {
  return Object.fromEntries(
    tp.questions
      .filter((i) => i.type !== 'intermission' && i.worldviewDimension)
      .map((i) => [
        i.id,
        n ? { ...i.worldviewDimension, name: i.editPanelTitle } : i.worldviewDimension,
      ])
  );
}
const Xi = cp();
function* ry(n) {
  const i = Object.keys(n);
  if (i.length === 0) return;
  function* l(s, u) {
    if (s === i.length) {
      let p = 1;
      for (const h of i) p *= n[h][u[h]] / 100;
      yield { options: u, probability: p };
      return;
    }
    const c = i[s],
      d = Object.keys(n[c]);
    for (const p of d) yield* l(s + 1, { ...u, [c]: p });
  }
  yield* l(0, {});
}
function* iy(n, i = 2e3) {
  const l = Object.keys(n);
  if (l.length === 0) return;
  const s = {};
  for (const d of l) {
    const p = Object.entries(n[d]);
    let h = 0;
    s[d] = p.map(([m, g]) => ((h += g / 100), { key: m, cumsum: h }));
  }
  const u = (d, p) => {
      const h = s[d];
      for (const { key: m, cumsum: g } of h) if (p <= g) return m;
      return h[h.length - 1].key;
    },
    c = 1 / i;
  for (let d = 0; d < i; d++) {
    const p = {};
    for (const h of l) p[h] = u(h, Math.random());
    yield { options: p, probability: c };
  }
}
function ly(n) {
  return Object.values(n).reduce((i, l) => i * Object.keys(l).length, 1);
}
function oy(n) {
  for (const i of Object.values(n)) {
    const l = Object.values(i),
      s = l.filter((c) => c === 100).length === 1,
      u = l.filter((c) => c === 0).length === l.length - 1;
    if (!s || !u) return !1;
  }
  return !0;
}
function* sy(n) {
  const i = {};
  for (const [l, s] of Object.entries(n))
    for (const [u, c] of Object.entries(s))
      if (c === 100) {
        i[l] = u;
        break;
      }
  yield { options: i, probability: 1 };
}
function* Xa(n, i = 500, l = 2e3) {
  if (oy(n)) {
    yield* sy(n);
    return;
  }
  ly(n) <= i ? yield* ry(n) : yield* iy(n, l);
}
function ay(n, i, l) {
  let s = n.points;
  for (const [u, c] of Object.entries(l)) {
    const d = i[u],
      p = c.options[d];
    if (c.applyAs === 'multiplier')
      if (c.appliesTo) {
        const h = n[c.appliesTo];
        if (h && typeof p == 'object') {
          const m = p[h];
          m !== void 0 && (s *= m);
        }
      } else c.appliesWhen && n[c.appliesWhen] && (s *= p);
    else if (c.applyAs === 'exponent' && c.appliesTo) {
      const h = n[c.appliesTo] || 1;
      s *= Math.pow(h, p);
    }
  }
  return s;
}
function Za(n, i, l) {
  const s = {};
  for (const [u, c] of Object.entries(i)) s[u] = ay(c, n, l);
  return s;
}
function uy(n) {
  const i = Math.max(...Object.values(n));
  return Object.keys(n).filter((l) => Math.abs(n[l] - i) < 1e-4);
}
function dp(n) {
  return Object.fromEntries(Object.keys(n).map((i) => [i, 0]));
}
function fp(n, i, l) {
  if (i.applyAs === 'multiplier') {
    if (i.appliesTo) {
      const u = n[i.appliesTo];
      if (!u) return 1;
      let c = 0;
      for (const [d, p] of Object.entries(l)) {
        const h = i.options[d],
          m = typeof h == 'object' ? (h[u] ?? 1) : (h ?? 1);
        c += (p / 100) * m;
      }
      return c;
    }
    if (!i.appliesWhen || !n[i.appliesWhen]) return 1;
    let s = 0;
    for (const [u, c] of Object.entries(l)) {
      const d = i.options[u] ?? 1;
      s += (c / 100) * d;
    }
    return s;
  }
  return 1;
}
function cy(n, i) {
  const l = (i == null ? void 0 : i.causes) || _r,
    s = (i == null ? void 0 : i.dimensions) || Xi,
    u = Object.keys(l),
    c = {};
  for (const m of u) {
    const g = l[m];
    let k = g.points;
    for (const [w, x] of Object.entries(s)) {
      const T = n[w];
      T && (k *= fp(g, x, T));
    }
    c[m] = k;
  }
  const d = u.map((m) => c[m]),
    p = Ya(d, 100, 1),
    h = { evs: c };
  return (
    u.forEach((m, g) => {
      h[m] = p[g];
    }),
    h
  );
}
function dy(n, i) {
  const l = (i == null ? void 0 : i.causes) || _r,
    s = (i == null ? void 0 : i.dimensions) || Xi,
    u = dp(l);
  for (const { options: d, probability: p } of Xa(n)) {
    const h = Za(d, l, s),
      m = uy(h),
      g = p / m.length;
    for (const k of m) u[k] += g;
  }
  const c = {};
  for (const d of Object.keys(l)) c[d] = u[d] * 100;
  return c;
}
function fy(n, i) {
  const l = (i == null ? void 0 : i.causes) || _r,
    s = (i == null ? void 0 : i.dimensions) || Xi,
    u = up(i),
    c = Object.keys(l),
    d = dp(l);
  for (const { options: p, probability: h } of Xa(n)) {
    const m = Za(p, l, s),
      g = h * 100,
      k = c.map((x) => m[x]),
      w = Ya(k, g, u);
    c.forEach((x, T) => {
      d[x] += w[T];
    });
  }
  return d;
}
function py(n, i) {
  const l = (i == null ? void 0 : i.causes) || _r,
    s = (i == null ? void 0 : i.dimensions) || Xi,
    u = Object.keys(l),
    c = hy(u),
    d = [...Xa(n, 500, 1e3)];
  let p = c[0],
    h = -1 / 0;
  for (const m of c) {
    let g = 1 / 0;
    for (const { options: k, probability: w } of d) {
      if (w < 1e-4) continue;
      const x = Za(k, l, s);
      let T = 0;
      for (const I of u) T += x[I] * (m[I] / 100);
      g = Math.min(g, T);
    }
    g > h && ((h = g), (p = { ...m }));
  }
  return p;
}
function hy(n) {
  const i = [],
    l = n.length,
    s = (h) => {
      const m = {};
      return (
        n.forEach((g, k) => {
          m[g] = h[k];
        }),
        m
      );
    };
  for (let h = 0; h < l; h++) {
    const m = new Array(l).fill(0);
    ((m[h] = 100), i.push(s(m)));
  }
  for (let h = 0; h < l; h++)
    for (let m = h + 1; m < l; m++) {
      const g = new Array(l).fill(0);
      ((g[h] = 50), (g[m] = 50), i.push(s(g)));
    }
  const u = Math.floor(100 / l),
    c = 100 - u * l,
    d = new Array(l).fill(u);
  ((d[0] += c), i.push(s(d)));
  const p = [
    [60, 20, 20],
    [70, 15, 15],
    [80, 10, 10],
  ];
  for (const h of p)
    if (h.length === l)
      for (let m = 0; m < l; m++) {
        const g = new Array(l).fill(0);
        g[m] = h[0];
        let k = 1;
        for (let w = 0; w < l; w++) w !== m && k < h.length && (g[w] = h[k++]);
        i.push(s(g));
      }
  return i;
}
function Ja(n, i, l, s = null, u = null) {
  const c = Array.isArray(u) ? u : u ? [u] : [],
    d = c.reduce((x, T) => x + (l[T] || 0), 0),
    p = 100 - d;
  i = Math.max(0, Math.min(p, i));
  const h = s || l,
    m = Object.keys(l).filter((x) => x !== n && !c.includes(x)),
    g = m.reduce((x, T) => x + h[T], 0),
    k = 100 - i - d,
    w = { [n]: i };
  for (const x of c) w[x] = l[x];
  if (g === 0) {
    const x = Math.floor(k / m.length);
    let T = k - x * m.length;
    m.forEach((I, z) => {
      w[I] = x + (z < T ? 1 : 0);
    });
  } else {
    let x = 0;
    m.forEach((T, I) => {
      if (I === m.length - 1) w[T] = Math.max(0, k - x);
      else {
        const z = h[T] / g,
          O = k * z;
        ((w[T] = Math.max(0, O)), (x += w[T]));
      }
    });
  }
  return w;
}
function eu(n) {
  const i = Object.keys(n),
    l = {};
  let s = 0;
  return (
    i.slice(0, -1).forEach((u) => {
      ((l[u] = Math.round(n[u])), (s += l[u]));
    }),
    (l[i[i.length - 1]] = 100 - s),
    l
  );
}
function my(n, i) {
  const l = (i == null ? void 0 : i.causes) || _r,
    s = (i == null ? void 0 : i.dimensions) || Xi,
    u = Object.keys(l),
    c = {};
  for (const d of u) {
    const p = l[d];
    let h = p.points;
    for (const [m, g] of Object.entries(s)) {
      const k = n[m];
      k && (h *= fp(p, g, k));
    }
    c[d] = h;
  }
  return c;
}
function gy(n, i = {}) {
  const { budget: l = 100 } = i,
    s = i.power ?? up(i);
  if (n.length === 0) throw new Error('At least one worldview is required');
  const u = Object.keys(n[0].evs),
    c = n.reduce((h, m) => h + (m.weight || 1), 0),
    d = {};
  for (const h of u) d[h] = 0;
  const p = [];
  for (const h of n) {
    const m = h.weight || 1,
      g = (m / c) * l,
      k = u.map((T) => h.evs[T] || 0),
      w = Ya(k, g, s),
      x = {};
    (u.forEach((T, I) => {
      ((d[T] += w[I]), (x[T] = w[I]));
    }),
      p.push({ name: h.name, weight: m, share: g, allocation: x }));
  }
  return { allocation: d, worldviewAllocations: p, config: { power: s, budget: l } };
}
const { questions: yy } = tp,
  { causes: vy, defaultCredences: ky } = Yi;
function xy(n) {
  var i;
  return !((i = n.type) != null && i.startsWith('_'));
}
const at = yy.filter(xy);
function On(n) {
  return (n == null ? void 0 : n.type) === St.INTERMISSION;
}
function va(n, i) {
  let l = 0;
  for (let s = 0; s < i; s++) On(n[s]) || l++;
  return l;
}
function wy(n) {
  {
    const i = n.type || St.DEFAULT;
    return uf[i] || uf[St.DEFAULT];
  }
}
const Sy = at.filter((n) => !On(n)),
  ka = Sy.length,
  cf = at.map((n) => {
    if (On(n)) return { ...n, type: St.INTERMISSION };
    const i = wy(n);
    return {
      ...n,
      type: n.type || St.DEFAULT,
      options: n.options.map((l, s) => ({ ...l, color: i[s] || i[0] })),
    };
  });
function tu(n) {
  if (n.defaultCredences) return { ...n.defaultCredences };
  const i = n.options.map((u) => u.key),
    l = Math.floor(100 / i.length),
    s = 100 - l * i.length;
  return Object.fromEntries(i.map((u, c) => [u, l + (c === 0 ? s : 0)]));
}
function pp(n) {
  return {
    credences: tu(n),
    originalCredences: null,
    inputMode: ip.OPTIONS,
    lockedKeys: [],
    selectedPreset: null,
  };
}
function hp() {
  return Object.fromEntries(at.filter((n) => !On(n)).map((n) => [n.id, pp(n)]));
}
const ir = ['1', '2', '3'];
function za() {
  return Object.fromEntries(ir.map((n) => [n, { questions: hp() }]));
}
function _y(n) {
  return n != null && n.questions
    ? Object.entries(n.questions).some(([i, l]) => {
        if (!l.credences) return !1;
        const s = at.find((c) => c.id === i);
        if (!s) return !1;
        const u = tu(s);
        return Object.entries(l.credences).some(([c, d]) => d !== (u[c] ?? 0));
      })
    : !1;
}
function Ma() {
  return Object.fromEntries(ir.map((n) => [n, `Worldview ${n}`]));
}
const Aa = 1e7,
  mp = () => 'disclaimer',
  gp = {
    currentStep: mp(),
    worldviews: za(),
    worldviewNames: Ma(),
    activeWorldviewId: '1',
    expandedPanel: null,
    debugConfig: null,
    selectedCalculations: { left: null, right: null },
    marketplaceBudget: Aa,
  },
  Fe = {
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
  };
function Da(n) {
  return n.worldviews[n.activeWorldviewId].questions;
}
function Cy(n, i, l) {
  const s = Da(n);
  return {
    ...n,
    worldviews: {
      ...n.worldviews,
      [n.activeWorldviewId]: { questions: { ...s, [i]: { ...s[i], ...l } } },
    },
  };
}
function Ey(n, i) {
  switch (i.type) {
    case Fe.GO_TO_STEP:
      return { ...n, currentStep: i.payload };
    case Fe.UPDATE_QUESTION:
      return Cy(n, i.payload.questionId, i.payload.updates);
    case Fe.SET_EXPANDED_PANEL:
      return { ...n, expandedPanel: i.payload };
    case Fe.SAVE_ORIGINALS: {
      const l = Da(n);
      return {
        ...n,
        worldviews: {
          ...n.worldviews,
          [n.activeWorldviewId]: {
            questions: Object.fromEntries(
              Object.entries(l).map(([s, u]) => [
                s,
                { ...u, originalCredences: u.originalCredences || { ...u.credences } },
              ])
            ),
          },
        },
      };
    }
    case Fe.RESET_TO_ORIGINAL: {
      const l = Da(n);
      return {
        ...n,
        worldviews: {
          ...n.worldviews,
          [n.activeWorldviewId]: {
            questions: Object.fromEntries(
              Object.entries(l).map(([s, u]) => [
                s,
                { ...u, credences: u.originalCredences ? { ...u.originalCredences } : u.credences },
              ])
            ),
          },
        },
      };
    }
    case Fe.RESET_QUIZ:
      return { ...gp, currentStep: mp(), worldviews: za(), worldviewNames: Ma() };
    case Fe.SWITCH_WORLDVIEW:
      return ir.includes(i.payload) ? { ...n, activeWorldviewId: i.payload } : n;
    case Fe.SET_WORLDVIEW_NAME: {
      const { worldviewId: l, name: s } = i.payload;
      return ir.includes(l) ? { ...n, worldviewNames: { ...n.worldviewNames, [l]: s } } : n;
    }
    case Fe.SET_MARKETPLACE_BUDGET:
      return { ...n, marketplaceBudget: i.payload };
    case Fe.RESTORE_FROM_URL:
    case Fe.RESTORE_FROM_SESSION: {
      const l = i.type === Fe.RESTORE_FROM_URL,
        {
          worldviews: s,
          worldviewNames: u,
          activeWorldviewId: c,
          questions: d,
          credences: p,
          currentStep: h,
          selectedCalculations: m,
          marketplaceBudget: g,
        } = i.payload,
        k = (I, z) => ({
          credences: I.credences,
          originalCredences: I.originalCredences
            ? { ...I.originalCredences }
            : z
              ? { ...I.credences }
              : null,
          inputMode: I.inputMode || ip.OPTIONS,
          lockedKeys: I.lockedKeys || (I.lockedKey ? [I.lockedKey] : []),
          selectedPreset: I.selectedPreset || null,
        }),
        w = (I, z) => {
          const O = {};
          for (const [A, D] of Object.entries(I)) {
            const H = {};
            for (const [X, R] of Object.entries(D.questions)) H[X] = k(R, z);
            O[A] = { questions: H };
          }
          for (const A of ir) O[A] || (O[A] = { questions: hp() });
          return O;
        },
        x = (I) => {
          const z = {};
          for (const O of ir) z[O] = (I == null ? void 0 : I[O]) || `Worldview ${O}`;
          return z;
        };
      if (s && c)
        return {
          ...n,
          currentStep: l ? 'results' : h,
          worldviews: w(s, l),
          worldviewNames: x(u),
          activeWorldviewId: c,
          selectedCalculations: m || n.selectedCalculations,
          marketplaceBudget: g || Aa,
        };
      const T = {};
      if (d) for (const [I, z] of Object.entries(d)) T[I] = k(z, l);
      else if (p)
        for (const [I, z] of Object.entries(p))
          T[I] = { ...pp(), credences: z, originalCredences: l ? { ...z } : null };
      return {
        ...n,
        currentStep: l ? 'results' : h,
        worldviews: { ...za(), 1: { questions: T } },
        worldviewNames: Ma(),
        activeWorldviewId: '1',
        marketplaceBudget: Aa,
      };
    }
    case Fe.SET_DEBUG_CONFIG:
      return { ...n, debugConfig: i.payload };
    case Fe.SET_SELECTED_CALCULATIONS:
      return { ...n, selectedCalculations: { ...n.selectedCalculations, ...i.payload } };
    default:
      return n;
  }
}
const yp = W.createContext(null);
function by({ children: n }) {
  const [i, l] = W.useReducer(Ey, gp),
    [s, u] = W.useState(null),
    [c, d] = W.useState(!0),
    [p, h] = W.useState(null),
    [m] = W.useState(() => yg()),
    g = W.useRef(null);
  (W.useEffect(() => {
    {
      const ee = ga();
      (ee && l({ type: Fe.RESTORE_FROM_SESSION, payload: ee }), d(!1));
      return;
    }
  }, []),
    W.useEffect(() => {}, []));
  const k = W.useCallback(() => {
      const ee = ga();
      (ee && l({ type: Fe.RESTORE_FROM_SESSION, payload: ee }), ya(), h(null));
    }, []),
    w = W.useCallback(() => {
      (p != null && p.shareData && (l({ type: Fe.RESTORE_FROM_URL, payload: p.shareData }), ko()),
        ya(),
        h(null));
    }, [p]),
    x = W.useCallback(() => {
      (kg(), p != null && p.shareUrl && window.open(p.shareUrl, '_blank'));
      const ee = ga();
      (ee && l({ type: Fe.RESTORE_FROM_SESSION, payload: ee }), ya(), h(null));
    }, [p]);
  W.useEffect(() => {
    if (!(c || i.currentStep === 'welcome' || i.currentStep === 'disclaimer'))
      return (
        g.current && clearTimeout(g.current),
        (g.current = setTimeout(() => {
          vg({
            currentStep: i.currentStep,
            worldviews: i.worldviews,
            worldviewNames: i.worldviewNames,
            activeWorldviewId: i.activeWorldviewId,
            selectedCalculations: i.selectedCalculations,
            marketplaceBudget: i.marketplaceBudget,
          });
        }, 300)),
        () => {
          g.current && clearTimeout(g.current);
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
  const T = W.useCallback((ee) => {
      (l({ type: Fe.GO_TO_STEP, payload: ee }), window.scrollTo(0, 0));
    }, []),
    I = W.useCallback((ee, ke) => {
      l({ type: Fe.UPDATE_QUESTION, payload: { questionId: ee, updates: ke } });
    }, []),
    z = W.useCallback((ee, ke) => I(ee, { credences: ke }), [I]),
    O = W.useCallback((ee, ke) => I(ee, { inputMode: ke }), [I]),
    A = W.useCallback((ee, ke) => I(ee, { lockedKeys: ke }), [I]),
    D = W.useCallback((ee, ke) => I(ee, { selectedPreset: ke }), [I]),
    H = W.useCallback((ee) => {
      l({ type: Fe.SET_EXPANDED_PANEL, payload: ee });
    }, []),
    X = W.useCallback(() => {
      l({ type: Fe.SAVE_ORIGINALS });
    }, []),
    R = W.useCallback(() => {
      l({ type: Fe.RESET_TO_ORIGINAL });
    }, []),
    B = W.useCallback(() => {
      (l({ type: Fe.RESET_QUIZ }), ko());
    }, []),
    ae = W.useCallback((ee) => {
      l({ type: Fe.SET_DEBUG_CONFIG, payload: ee });
    }, []),
    ue = W.useCallback((ee) => {
      l({ type: Fe.SWITCH_WORLDVIEW, payload: ee });
    }, []),
    de = W.useCallback((ee) => {
      l({ type: Fe.SET_SELECTED_CALCULATIONS, payload: ee });
    }, []),
    Z = W.useCallback((ee, ke) => {
      l({ type: Fe.SET_WORLDVIEW_NAME, payload: { worldviewId: ee, name: ke } });
    }, []),
    J = W.useCallback((ee) => {
      l({ type: Fe.SET_MARKETPLACE_BUDGET, payload: ee });
    }, []),
    fe = W.useCallback((ee) => at.findIndex((ke) => ke.id === ee), []),
    te = W.useCallback(
      (ee) => {
        const ke = fe(ee);
        return ke === 0 ? 'welcome' : at[ke - 1].id;
      },
      [fe]
    ),
    q = W.useCallback(
      (ee) => {
        const ke = fe(ee);
        return ke === at.length - 1 ? 'results' : at[ke + 1].id;
      },
      [fe]
    ),
    ye = W.useCallback(() => {
      T(at[0].id);
    }, [T]),
    ve = W.useCallback(() => {
      i.currentStep === 'results' ? T(at[at.length - 1].id) : T(te(i.currentStep));
    }, [i.currentStep, T, te]),
    G = W.useCallback(() => {
      const ee = q(i.currentStep);
      (ee === 'results' && X(), T(ee));
    }, [i.currentStep, T, q, X]),
    ne = W.useMemo(
      () => i.worldviews[i.activeWorldviewId].questions,
      [i.worldviews, i.activeWorldviewId]
    ),
    S = W.useCallback(
      (ee) => {
        var Dt;
        const ke = ee === 'original' ? 'originalCredences' : 'credences',
          ft = at.filter((Ft) => !On(Ft)),
          Je = ne[(Dt = ft[0]) == null ? void 0 : Dt.id];
        return ee === 'original' && !(Je != null && Je.originalCredences)
          ? null
          : Object.fromEntries(
              ft.map((Ft) => {
                var Kt;
                return [Ft.id, ((Kt = ne[Ft.id]) == null ? void 0 : Kt[ke]) || tu(Ft)];
              })
            );
      },
      [ne]
    ),
    N = W.useCallback(
      (ee, ke) =>
        ee
          ? {
              maxEV: cy(ee, ke),
              parliament: dy(ee, ke),
              mergedFavorites: fy(ee, ke),
              maximin: py(ee, ke),
            }
          : null,
      []
    ),
    F = W.useMemo(() => N(S('current'), i.debugConfig), [S, N, i.debugConfig]),
    C = W.useMemo(() => N(S('original'), i.debugConfig), [S, N, i.debugConfig]),
    pe = W.useMemo(
      () =>
        Object.values(ne).some(
          (ee) =>
            ee.originalCredences &&
            JSON.stringify(ee.credences) !== JSON.stringify(ee.originalCredences)
        ),
      [ne]
    ),
    Ce = W.useMemo(
      () => Object.fromEntries(ir.map((ee) => [ee, _y(i.worldviews[ee])])),
      [i.worldviews]
    ),
    ie = W.useMemo(() => fe(i.currentStep), [i.currentStep, fe]),
    be = W.useMemo(() => (ie === -1 ? null : cf[ie]), [ie]),
    Ee = W.useMemo(() => {
      if (ie === -1) return -1;
      const ee = at[ie],
        ke = va(at, ie);
      return On(ee) ? ke : ke + 1;
    }, [ie]),
    Pe = W.useMemo(() => {
      if (ie === -1) return 0;
      const ee = at[ie];
      return ((On(ee) ? va(at, ie) : Ee) / ka) * 100;
    }, [ie, Ee]),
    We = W.useMemo(() => {
      if (ie === -1) return '';
      const ee = at[ie];
      return `Question ${On(ee) ? va(at, ie) : Ee} of ${ka}`;
    }, [ie, Ee]),
    bt = W.useMemo(() => {
      const ee = {};
      return (
        at
          .filter((ke) => !On(ke))
          .forEach((ke) => {
            const ft = ne[ke.id];
            ft &&
              (ee[ke.id] = {
                credences: ft.credences,
                setCredences: (Je) => z(ke.id, Je),
                originalCredences: ft.originalCredences,
                inputMode: ft.inputMode,
                setInputMode: (Je) => O(ke.id, Je),
                lockedKeys: ft.lockedKeys,
                setLockedKeys: (Je) => A(ke.id, Je),
                selectedPreset: ft.selectedPreset,
                setSelectedPreset: (Je) => D(ke.id, Je),
              });
          }),
        ee
      );
    }, [ne, z, O, A, D]),
    zn = W.useMemo(
      () => ({
        currentStep: i.currentStep,
        questions: ne,
        worldviews: i.worldviews,
        worldviewNames: i.worldviewNames,
        activeWorldviewId: i.activeWorldviewId,
        expandedPanel: i.expandedPanel,
        debugConfig: i.debugConfig,
        selectedCalculations: i.selectedCalculations,
        marketplaceBudget: i.marketplaceBudget,
        shareUrlError: s,
        isHydrating: c,
        sessionId: m,
        questionsConfig: cf,
        causesConfig: vy,
        defaultCredences: ky,
        worldviewIds: ir,
        goToStep: T,
        setCredences: z,
        setInputMode: O,
        setLockedKeys: A,
        setSelectedPreset: D,
        setExpandedPanel: H,
        saveOriginals: X,
        resetToOriginal: R,
        resetQuiz: B,
        setDebugConfig: ae,
        switchWorldview: ue,
        setSelectedCalculations: de,
        setWorldviewName: Z,
        setMarketplaceBudget: J,
        getQuestionIndex: fe,
        getPrevStep: te,
        getNextStep: q,
        startQuiz: ye,
        goBack: ve,
        goForward: G,
        currentQuestion: be,
        currentQuestionIndex: ie,
        totalQuestions: ka,
        progressPercentage: Pe,
        questionNumber: We,
        hasChanged: pe,
        hasProgressMap: Ce,
        calculationResults: F,
        originalCalculationResults: C,
        stateMap: bt,
      }),
      [
        i.currentStep,
        ne,
        i.worldviews,
        i.worldviewNames,
        i.activeWorldviewId,
        i.expandedPanel,
        i.debugConfig,
        i.selectedCalculations,
        i.marketplaceBudget,
        s,
        c,
        m,
        T,
        z,
        O,
        A,
        D,
        H,
        X,
        R,
        B,
        ae,
        ue,
        de,
        Z,
        J,
        fe,
        te,
        q,
        ye,
        ve,
        G,
        be,
        ie,
        Pe,
        We,
        pe,
        Ce,
        F,
        C,
        bt,
      ]
    );
  return v.jsxs(yp.Provider, {
    value: zn,
    children: [n, p && v.jsx(ny, { onKeepMine: k, onLoadShared: w, onOpenNewTab: x })],
  });
}
function Ny(n, i) {
  const l = {};
  return (n[n.length - 1] === '' ? [...n, ''] : n)
    .join((l.padRight ? ' ' : '') + ',' + (l.padLeft === !1 ? '' : ' '))
    .trim();
}
const Iy = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Ty = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  jy = {};
function df(n, i) {
  return (jy.jsx ? Ty : Iy).test(n);
}
const Ly = /[ \t\n\f\r]/g;
function Py(n) {
  return typeof n == 'object' ? (n.type === 'text' ? ff(n.value) : !1) : ff(n);
}
function ff(n) {
  return n.replace(Ly, '') === '';
}
class Zi {
  constructor(i, l, s) {
    ((this.normal = l), (this.property = i), s && (this.space = s));
  }
}
Zi.prototype.normal = {};
Zi.prototype.property = {};
Zi.prototype.space = void 0;
function vp(n, i) {
  const l = {},
    s = {};
  for (const u of n) (Object.assign(l, u.property), Object.assign(s, u.normal));
  return new Zi(l, s, i);
}
function Fa(n) {
  return n.toLowerCase();
}
class At {
  constructor(i, l) {
    ((this.attribute = l), (this.property = i));
  }
}
At.prototype.attribute = '';
At.prototype.booleanish = !1;
At.prototype.boolean = !1;
At.prototype.commaOrSpaceSeparated = !1;
At.prototype.commaSeparated = !1;
At.prototype.defined = !1;
At.prototype.mustUseProperty = !1;
At.prototype.number = !1;
At.prototype.overloadedBoolean = !1;
At.prototype.property = '';
At.prototype.spaceSeparated = !1;
At.prototype.space = void 0;
let Oy = 0;
const Ie = Cr(),
  lt = Cr(),
  Ba = Cr(),
  Q = Cr(),
  $e = Cr(),
  ei = Cr(),
  Qt = Cr();
function Cr() {
  return 2 ** ++Oy;
}
const Ua = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: Ie,
        booleanish: lt,
        commaOrSpaceSeparated: Qt,
        commaSeparated: ei,
        number: Q,
        overloadedBoolean: Ba,
        spaceSeparated: $e,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  xa = Object.keys(Ua);
class nu extends At {
  constructor(i, l, s, u) {
    let c = -1;
    if ((super(i, l), pf(this, 'space', u), typeof s == 'number'))
      for (; ++c < xa.length; ) {
        const d = xa[c];
        pf(this, xa[c], (s & Ua[d]) === Ua[d]);
      }
  }
}
nu.prototype.defined = !0;
function pf(n, i, l) {
  l && (n[i] = l);
}
function ri(n) {
  const i = {},
    l = {};
  for (const [s, u] of Object.entries(n.properties)) {
    const c = new nu(s, n.transform(n.attributes || {}, s), u, n.space);
    (n.mustUseProperty && n.mustUseProperty.includes(s) && (c.mustUseProperty = !0),
      (i[s] = c),
      (l[Fa(s)] = s),
      (l[Fa(c.attribute)] = s));
  }
  return new Zi(i, l, n.space);
}
const kp = ri({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: lt,
    ariaAutoComplete: null,
    ariaBusy: lt,
    ariaChecked: lt,
    ariaColCount: Q,
    ariaColIndex: Q,
    ariaColSpan: Q,
    ariaControls: $e,
    ariaCurrent: null,
    ariaDescribedBy: $e,
    ariaDetails: null,
    ariaDisabled: lt,
    ariaDropEffect: $e,
    ariaErrorMessage: null,
    ariaExpanded: lt,
    ariaFlowTo: $e,
    ariaGrabbed: lt,
    ariaHasPopup: null,
    ariaHidden: lt,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: $e,
    ariaLevel: Q,
    ariaLive: null,
    ariaModal: lt,
    ariaMultiLine: lt,
    ariaMultiSelectable: lt,
    ariaOrientation: null,
    ariaOwns: $e,
    ariaPlaceholder: null,
    ariaPosInSet: Q,
    ariaPressed: lt,
    ariaReadOnly: lt,
    ariaRelevant: null,
    ariaRequired: lt,
    ariaRoleDescription: $e,
    ariaRowCount: Q,
    ariaRowIndex: Q,
    ariaRowSpan: Q,
    ariaSelected: lt,
    ariaSetSize: Q,
    ariaSort: null,
    ariaValueMax: Q,
    ariaValueMin: Q,
    ariaValueNow: Q,
    ariaValueText: null,
    role: null,
  },
  transform(n, i) {
    return i === 'role' ? i : 'aria-' + i.slice(4).toLowerCase();
  },
});
function xp(n, i) {
  return i in n ? n[i] : i;
}
function wp(n, i) {
  return xp(n, i.toLowerCase());
}
const Ry = ri({
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv',
    },
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: ei,
      acceptCharset: $e,
      accessKey: $e,
      action: null,
      allow: null,
      allowFullScreen: Ie,
      allowPaymentRequest: Ie,
      allowUserMedia: Ie,
      alt: null,
      as: null,
      async: Ie,
      autoCapitalize: null,
      autoComplete: $e,
      autoFocus: Ie,
      autoPlay: Ie,
      blocking: $e,
      capture: null,
      charSet: null,
      checked: Ie,
      cite: null,
      className: $e,
      cols: Q,
      colSpan: null,
      content: null,
      contentEditable: lt,
      controls: Ie,
      controlsList: $e,
      coords: Q | ei,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: Ie,
      defer: Ie,
      dir: null,
      dirName: null,
      disabled: Ie,
      download: Ba,
      draggable: lt,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: Ie,
      formTarget: null,
      headers: $e,
      height: Q,
      hidden: Ba,
      high: Q,
      href: null,
      hrefLang: null,
      htmlFor: $e,
      httpEquiv: $e,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: Ie,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: Ie,
      itemId: null,
      itemProp: $e,
      itemRef: $e,
      itemScope: Ie,
      itemType: $e,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: Ie,
      low: Q,
      manifest: null,
      max: null,
      maxLength: Q,
      media: null,
      method: null,
      min: null,
      minLength: Q,
      multiple: Ie,
      muted: Ie,
      name: null,
      nonce: null,
      noModule: Ie,
      noValidate: Ie,
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
      open: Ie,
      optimum: Q,
      pattern: null,
      ping: $e,
      placeholder: null,
      playsInline: Ie,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: Ie,
      referrerPolicy: null,
      rel: $e,
      required: Ie,
      reversed: Ie,
      rows: Q,
      rowSpan: Q,
      sandbox: $e,
      scope: null,
      scoped: Ie,
      seamless: Ie,
      selected: Ie,
      shadowRootClonable: Ie,
      shadowRootDelegatesFocus: Ie,
      shadowRootMode: null,
      shape: null,
      size: Q,
      sizes: null,
      slot: null,
      span: Q,
      spellCheck: lt,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: Q,
      step: null,
      style: null,
      tabIndex: Q,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: Ie,
      useMap: null,
      value: lt,
      width: Q,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: $e,
      axis: null,
      background: null,
      bgColor: null,
      border: Q,
      borderColor: null,
      bottomMargin: Q,
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
      compact: Ie,
      declare: Ie,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: Q,
      leftMargin: Q,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: Q,
      marginWidth: Q,
      noResize: Ie,
      noHref: Ie,
      noShade: Ie,
      noWrap: Ie,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: Q,
      rules: null,
      scheme: null,
      scrolling: lt,
      standby: null,
      summary: null,
      text: null,
      topMargin: Q,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: Q,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: Ie,
      disableRemotePlayback: Ie,
      prefix: null,
      property: null,
      results: Q,
      security: null,
      unselectable: null,
    },
    space: 'html',
    transform: wp,
  }),
  zy = ri({
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
      about: Qt,
      accentHeight: Q,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: Q,
      amplitude: Q,
      arabicForm: null,
      ascent: Q,
      attributeName: null,
      attributeType: null,
      azimuth: Q,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: Q,
      by: null,
      calcMode: null,
      capHeight: Q,
      className: $e,
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
      descent: Q,
      diffuseConstant: Q,
      direction: null,
      display: null,
      dur: null,
      divisor: Q,
      dominantBaseline: null,
      download: Ie,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: Q,
      enableBackground: null,
      end: null,
      event: null,
      exponent: Q,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: Q,
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
      g1: ei,
      g2: ei,
      glyphName: ei,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: Q,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: Q,
      horizOriginX: Q,
      horizOriginY: Q,
      id: null,
      ideographic: Q,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: Q,
      k: Q,
      k1: Q,
      k2: Q,
      k3: Q,
      k4: Q,
      kernelMatrix: Qt,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: Q,
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
      mediaSize: Q,
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
      overlinePosition: Q,
      overlineThickness: Q,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: Q,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: $e,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: Q,
      pointsAtY: Q,
      pointsAtZ: Q,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: Qt,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: Qt,
      rev: Qt,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: Qt,
      requiredFeatures: Qt,
      requiredFonts: Qt,
      requiredFormats: Qt,
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
      specularConstant: Q,
      specularExponent: Q,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: Q,
      strikethroughThickness: Q,
      string: null,
      stroke: null,
      strokeDashArray: Qt,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: Q,
      strokeOpacity: Q,
      strokeWidth: null,
      style: null,
      surfaceScale: Q,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: Qt,
      tabIndex: Q,
      tableValues: null,
      target: null,
      targetX: Q,
      targetY: Q,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: Qt,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: Q,
      underlineThickness: Q,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: Q,
      values: null,
      vAlphabetic: Q,
      vMathematical: Q,
      vectorEffect: null,
      vHanging: Q,
      vIdeographic: Q,
      version: null,
      vertAdvY: Q,
      vertOriginX: Q,
      vertOriginY: Q,
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
      xHeight: Q,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: 'svg',
    transform: xp,
  }),
  Sp = ri({
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
  _p = ri({
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    properties: { xmlnsXLink: null, xmlns: null },
    space: 'xmlns',
    transform: wp,
  }),
  Cp = ri({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: 'xml',
    transform(n, i) {
      return 'xml:' + i.slice(3).toLowerCase();
    },
  }),
  My = {
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
  Ay = /[A-Z]/g,
  hf = /-[a-z]/g,
  Dy = /^data[-\w.:]+$/i;
function Fy(n, i) {
  const l = Fa(i);
  let s = i,
    u = At;
  if (l in n.normal) return n.property[n.normal[l]];
  if (l.length > 4 && l.slice(0, 4) === 'data' && Dy.test(i)) {
    if (i.charAt(4) === '-') {
      const c = i.slice(5).replace(hf, Uy);
      s = 'data' + c.charAt(0).toUpperCase() + c.slice(1);
    } else {
      const c = i.slice(4);
      if (!hf.test(c)) {
        let d = c.replace(Ay, By);
        (d.charAt(0) !== '-' && (d = '-' + d), (i = 'data' + d));
      }
    }
    u = nu;
  }
  return new u(s, i);
}
function By(n) {
  return '-' + n.toLowerCase();
}
function Uy(n) {
  return n.charAt(1).toUpperCase();
}
const $y = vp([kp, Ry, Sp, _p, Cp], 'html'),
  ru = vp([kp, zy, Sp, _p, Cp], 'svg');
function Hy(n) {
  return n.join(' ').trim();
}
var Yr = {},
  wa,
  mf;
function Vy() {
  if (mf) return wa;
  mf = 1;
  var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    i = /\n/g,
    l = /^\s*/,
    s = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    u = /^:\s*/,
    c = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    d = /^[;\s]*/,
    p = /^\s+|\s+$/g,
    h = `
`,
    m = '/',
    g = '*',
    k = '',
    w = 'comment',
    x = 'declaration';
  function T(z, O) {
    if (typeof z != 'string') throw new TypeError('First argument must be a string');
    if (!z) return [];
    O = O || {};
    var A = 1,
      D = 1;
    function H(te) {
      var q = te.match(i);
      q && (A += q.length);
      var ye = te.lastIndexOf(h);
      D = ~ye ? te.length - ye : D + te.length;
    }
    function X() {
      var te = { line: A, column: D };
      return function (q) {
        return ((q.position = new R(te)), ue(), q);
      };
    }
    function R(te) {
      ((this.start = te), (this.end = { line: A, column: D }), (this.source = O.source));
    }
    R.prototype.content = z;
    function B(te) {
      var q = new Error(O.source + ':' + A + ':' + D + ': ' + te);
      if (
        ((q.reason = te),
        (q.filename = O.source),
        (q.line = A),
        (q.column = D),
        (q.source = z),
        !O.silent)
      )
        throw q;
    }
    function ae(te) {
      var q = te.exec(z);
      if (q) {
        var ye = q[0];
        return (H(ye), (z = z.slice(ye.length)), q);
      }
    }
    function ue() {
      ae(l);
    }
    function de(te) {
      var q;
      for (te = te || []; (q = Z()); ) q !== !1 && te.push(q);
      return te;
    }
    function Z() {
      var te = X();
      if (!(m != z.charAt(0) || g != z.charAt(1))) {
        for (var q = 2; k != z.charAt(q) && (g != z.charAt(q) || m != z.charAt(q + 1)); ) ++q;
        if (((q += 2), k === z.charAt(q - 1))) return B('End of comment missing');
        var ye = z.slice(2, q - 2);
        return ((D += 2), H(ye), (z = z.slice(q)), (D += 2), te({ type: w, comment: ye }));
      }
    }
    function J() {
      var te = X(),
        q = ae(s);
      if (q) {
        if ((Z(), !ae(u))) return B("property missing ':'");
        var ye = ae(c),
          ve = te({
            type: x,
            property: I(q[0].replace(n, k)),
            value: ye ? I(ye[0].replace(n, k)) : k,
          });
        return (ae(d), ve);
      }
    }
    function fe() {
      var te = [];
      de(te);
      for (var q; (q = J()); ) q !== !1 && (te.push(q), de(te));
      return te;
    }
    return (ue(), fe());
  }
  function I(z) {
    return z ? z.replace(p, k) : k;
  }
  return ((wa = T), wa);
}
var gf;
function Wy() {
  if (gf) return Yr;
  gf = 1;
  var n =
    (Yr && Yr.__importDefault) ||
    function (s) {
      return s && s.__esModule ? s : { default: s };
    };
  (Object.defineProperty(Yr, '__esModule', { value: !0 }), (Yr.default = l));
  const i = n(Vy());
  function l(s, u) {
    let c = null;
    if (!s || typeof s != 'string') return c;
    const d = (0, i.default)(s),
      p = typeof u == 'function';
    return (
      d.forEach((h) => {
        if (h.type !== 'declaration') return;
        const { property: m, value: g } = h;
        p ? u(m, g, h) : g && ((c = c || {}), (c[m] = g));
      }),
      c
    );
  }
  return Yr;
}
var $i = {},
  yf;
function qy() {
  if (yf) return $i;
  ((yf = 1), Object.defineProperty($i, '__esModule', { value: !0 }), ($i.camelCase = void 0));
  var n = /^--[a-zA-Z0-9_-]+$/,
    i = /-([a-z])/g,
    l = /^[^-]+$/,
    s = /^-(webkit|moz|ms|o|khtml)-/,
    u = /^-(ms)-/,
    c = function (m) {
      return !m || l.test(m) || n.test(m);
    },
    d = function (m, g) {
      return g.toUpperCase();
    },
    p = function (m, g) {
      return ''.concat(g, '-');
    },
    h = function (m, g) {
      return (
        g === void 0 && (g = {}),
        c(m)
          ? m
          : ((m = m.toLowerCase()),
            g.reactCompat ? (m = m.replace(u, p)) : (m = m.replace(s, p)),
            m.replace(i, d))
      );
    };
  return (($i.camelCase = h), $i);
}
var Hi, vf;
function Qy() {
  if (vf) return Hi;
  vf = 1;
  var n =
      (Hi && Hi.__importDefault) ||
      function (u) {
        return u && u.__esModule ? u : { default: u };
      },
    i = n(Wy()),
    l = qy();
  function s(u, c) {
    var d = {};
    return (
      !u ||
        typeof u != 'string' ||
        (0, i.default)(u, function (p, h) {
          p && h && (d[(0, l.camelCase)(p, c)] = h);
        }),
      d
    );
  }
  return ((s.default = s), (Hi = s), Hi);
}
var Gy = Qy();
const Ky = ep(Gy),
  Ep = bp('end'),
  iu = bp('start');
function bp(n) {
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
function Yy(n) {
  const i = iu(n),
    l = Ep(n);
  if (i && l) return { start: i, end: l };
}
function qi(n) {
  return !n || typeof n != 'object'
    ? ''
    : 'position' in n || 'type' in n
      ? kf(n.position)
      : 'start' in n || 'end' in n
        ? kf(n)
        : 'line' in n || 'column' in n
          ? $a(n)
          : '';
}
function $a(n) {
  return xf(n && n.line) + ':' + xf(n && n.column);
}
function kf(n) {
  return $a(n && n.start) + '-' + $a(n && n.end);
}
function xf(n) {
  return n && typeof n == 'number' ? n : 1;
}
class _t extends Error {
  constructor(i, l, s) {
    (super(), typeof l == 'string' && ((s = l), (l = void 0)));
    let u = '',
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
      typeof i == 'string' ? (u = i) : !c.cause && i && ((d = !0), (u = i.message), (c.cause = i)),
      !c.ruleId && !c.source && typeof s == 'string')
    ) {
      const h = s.indexOf(':');
      h === -1 ? (c.ruleId = s) : ((c.source = s.slice(0, h)), (c.ruleId = s.slice(h + 1)));
    }
    if (!c.place && c.ancestors && c.ancestors) {
      const h = c.ancestors[c.ancestors.length - 1];
      h && (c.place = h.position);
    }
    const p = c.place && 'start' in c.place ? c.place.start : c.place;
    ((this.ancestors = c.ancestors || void 0),
      (this.cause = c.cause || void 0),
      (this.column = p ? p.column : void 0),
      (this.fatal = void 0),
      (this.file = ''),
      (this.message = u),
      (this.line = p ? p.line : void 0),
      (this.name = qi(c.place) || '1:1'),
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
_t.prototype.file = '';
_t.prototype.name = '';
_t.prototype.reason = '';
_t.prototype.message = '';
_t.prototype.stack = '';
_t.prototype.column = void 0;
_t.prototype.line = void 0;
_t.prototype.ancestors = void 0;
_t.prototype.cause = void 0;
_t.prototype.fatal = void 0;
_t.prototype.place = void 0;
_t.prototype.ruleId = void 0;
_t.prototype.source = void 0;
const lu = {}.hasOwnProperty,
  Xy = new Map(),
  Zy = /[A-Z]/g,
  Jy = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr']),
  e1 = new Set(['td', 'th']),
  Np = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';
function t1(n, i) {
  if (!i || i.Fragment === void 0) throw new TypeError('Expected `Fragment` in options');
  const l = i.filePath || void 0;
  let s;
  if (i.development) {
    if (typeof i.jsxDEV != 'function')
      throw new TypeError('Expected `jsxDEV` in options when `development: true`');
    s = u1(l, i.jsxDEV);
  } else {
    if (typeof i.jsx != 'function') throw new TypeError('Expected `jsx` in production options');
    if (typeof i.jsxs != 'function') throw new TypeError('Expected `jsxs` in production options');
    s = a1(l, i.jsx, i.jsxs);
  }
  const u = {
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
      schema: i.space === 'svg' ? ru : $y,
      stylePropertyNameCase: i.stylePropertyNameCase || 'dom',
      tableCellAlignToStyle: i.tableCellAlignToStyle !== !1,
    },
    c = Ip(u, n, void 0);
  return c && typeof c != 'string' ? c : u.create(n, u.Fragment, { children: c || void 0 }, void 0);
}
function Ip(n, i, l) {
  if (i.type === 'element') return n1(n, i, l);
  if (i.type === 'mdxFlowExpression' || i.type === 'mdxTextExpression') return r1(n, i);
  if (i.type === 'mdxJsxFlowElement' || i.type === 'mdxJsxTextElement') return l1(n, i, l);
  if (i.type === 'mdxjsEsm') return i1(n, i);
  if (i.type === 'root') return o1(n, i, l);
  if (i.type === 'text') return s1(n, i);
}
function n1(n, i, l) {
  const s = n.schema;
  let u = s;
  (i.tagName.toLowerCase() === 'svg' && s.space === 'html' && ((u = ru), (n.schema = u)),
    n.ancestors.push(i));
  const c = jp(n, i.tagName, !1),
    d = c1(n, i);
  let p = su(n, i);
  return (
    Jy.has(i.tagName) &&
      (p = p.filter(function (h) {
        return typeof h == 'string' ? !Py(h) : !0;
      })),
    Tp(n, d, c, i),
    ou(d, p),
    n.ancestors.pop(),
    (n.schema = s),
    n.create(i, c, d, l)
  );
}
function r1(n, i) {
  if (i.data && i.data.estree && n.evaluater) {
    const s = i.data.estree.body[0];
    return (s.type, n.evaluater.evaluateExpression(s.expression));
  }
  Ki(n, i.position);
}
function i1(n, i) {
  if (i.data && i.data.estree && n.evaluater) return n.evaluater.evaluateProgram(i.data.estree);
  Ki(n, i.position);
}
function l1(n, i, l) {
  const s = n.schema;
  let u = s;
  (i.name === 'svg' && s.space === 'html' && ((u = ru), (n.schema = u)), n.ancestors.push(i));
  const c = i.name === null ? n.Fragment : jp(n, i.name, !0),
    d = d1(n, i),
    p = su(n, i);
  return (Tp(n, d, c, i), ou(d, p), n.ancestors.pop(), (n.schema = s), n.create(i, c, d, l));
}
function o1(n, i, l) {
  const s = {};
  return (ou(s, su(n, i)), n.create(i, n.Fragment, s, l));
}
function s1(n, i) {
  return i.value;
}
function Tp(n, i, l, s) {
  typeof l != 'string' && l !== n.Fragment && n.passNode && (i.node = s);
}
function ou(n, i) {
  if (i.length > 0) {
    const l = i.length > 1 ? i : i[0];
    l && (n.children = l);
  }
}
function a1(n, i, l) {
  return s;
  function s(u, c, d, p) {
    const m = Array.isArray(d.children) ? l : i;
    return p ? m(c, d, p) : m(c, d);
  }
}
function u1(n, i) {
  return l;
  function l(s, u, c, d) {
    const p = Array.isArray(c.children),
      h = iu(s);
    return i(
      u,
      c,
      d,
      p,
      { columnNumber: h ? h.column - 1 : void 0, fileName: n, lineNumber: h ? h.line : void 0 },
      void 0
    );
  }
}
function c1(n, i) {
  const l = {};
  let s, u;
  for (u in i.properties)
    if (u !== 'children' && lu.call(i.properties, u)) {
      const c = f1(n, u, i.properties[u]);
      if (c) {
        const [d, p] = c;
        n.tableCellAlignToStyle && d === 'align' && typeof p == 'string' && e1.has(i.tagName)
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
function d1(n, i) {
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
      } else Ki(n, i.position);
    else {
      const u = s.name;
      let c;
      if (s.value && typeof s.value == 'object')
        if (s.value.data && s.value.data.estree && n.evaluater) {
          const p = s.value.data.estree.body[0];
          (p.type, (c = n.evaluater.evaluateExpression(p.expression)));
        } else Ki(n, i.position);
      else c = s.value === null ? !0 : s.value;
      l[u] = c;
    }
  return l;
}
function su(n, i) {
  const l = [];
  let s = -1;
  const u = n.passKeys ? new Map() : Xy;
  for (; ++s < i.children.length; ) {
    const c = i.children[s];
    let d;
    if (n.passKeys) {
      const h =
        c.type === 'element'
          ? c.tagName
          : c.type === 'mdxJsxFlowElement' || c.type === 'mdxJsxTextElement'
            ? c.name
            : void 0;
      if (h) {
        const m = u.get(h) || 0;
        ((d = h + '-' + m), u.set(h, m + 1));
      }
    }
    const p = Ip(n, c, d);
    p !== void 0 && l.push(p);
  }
  return l;
}
function f1(n, i, l) {
  const s = Fy(n.schema, i);
  if (!(l == null || (typeof l == 'number' && Number.isNaN(l)))) {
    if ((Array.isArray(l) && (l = s.commaSeparated ? Ny(l) : Hy(l)), s.property === 'style')) {
      let u = typeof l == 'object' ? l : p1(n, String(l));
      return (n.stylePropertyNameCase === 'css' && (u = h1(u)), ['style', u]);
    }
    return [
      n.elementAttributeNameCase === 'react' && s.space
        ? My[s.property] || s.property
        : s.attribute,
      l,
    ];
  }
}
function p1(n, i) {
  try {
    return Ky(i, { reactCompat: !0 });
  } catch (l) {
    if (n.ignoreInvalidStyle) return {};
    const s = l,
      u = new _t('Cannot parse `style` attribute', {
        ancestors: n.ancestors,
        cause: s,
        ruleId: 'style',
        source: 'hast-util-to-jsx-runtime',
      });
    throw ((u.file = n.filePath || void 0), (u.url = Np + '#cannot-parse-style-attribute'), u);
  }
}
function jp(n, i, l) {
  let s;
  if (!l) s = { type: 'Literal', value: i };
  else if (i.includes('.')) {
    const u = i.split('.');
    let c = -1,
      d;
    for (; ++c < u.length; ) {
      const p = df(u[c]) ? { type: 'Identifier', name: u[c] } : { type: 'Literal', value: u[c] };
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
      df(i) && !/^[a-z]/.test(i) ? { type: 'Identifier', name: i } : { type: 'Literal', value: i };
  if (s.type === 'Literal') {
    const u = s.value;
    return lu.call(n.components, u) ? n.components[u] : u;
  }
  if (n.evaluater) return n.evaluater.evaluateExpression(s);
  Ki(n);
}
function Ki(n, i) {
  const l = new _t('Cannot handle MDX estrees without `createEvaluater`', {
    ancestors: n.ancestors,
    place: i,
    ruleId: 'mdx-estree',
    source: 'hast-util-to-jsx-runtime',
  });
  throw (
    (l.file = n.filePath || void 0),
    (l.url = Np + '#cannot-handle-mdx-estrees-without-createevaluater'),
    l
  );
}
function h1(n) {
  const i = {};
  let l;
  for (l in n) lu.call(n, l) && (i[m1(l)] = n[l]);
  return i;
}
function m1(n) {
  let i = n.replace(Zy, g1);
  return (i.slice(0, 3) === 'ms-' && (i = '-' + i), i);
}
function g1(n) {
  return '-' + n.toLowerCase();
}
const Sa = {
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
  y1 = {};
function v1(n, i) {
  const l = y1,
    s = typeof l.includeImageAlt == 'boolean' ? l.includeImageAlt : !0,
    u = typeof l.includeHtml == 'boolean' ? l.includeHtml : !0;
  return Lp(n, s, u);
}
function Lp(n, i, l) {
  if (k1(n)) {
    if ('value' in n) return n.type === 'html' && !l ? '' : n.value;
    if (i && 'alt' in n && n.alt) return n.alt;
    if ('children' in n) return wf(n.children, i, l);
  }
  return Array.isArray(n) ? wf(n, i, l) : '';
}
function wf(n, i, l) {
  const s = [];
  let u = -1;
  for (; ++u < n.length; ) s[u] = Lp(n[u], i, l);
  return s.join('');
}
function k1(n) {
  return !!(n && typeof n == 'object');
}
const Sf = document.createElement('i');
function au(n) {
  const i = '&' + n + ';';
  Sf.innerHTML = i;
  const l = Sf.textContent;
  return (l.charCodeAt(l.length - 1) === 59 && n !== 'semi') || l === i ? !1 : l;
}
function wn(n, i, l, s) {
  const u = n.length;
  let c = 0,
    d;
  if ((i < 0 ? (i = -i > u ? 0 : u + i) : (i = i > u ? u : i), (l = l > 0 ? l : 0), s.length < 1e4))
    ((d = Array.from(s)), d.unshift(i, l), n.splice(...d));
  else
    for (l && n.splice(i, l); c < s.length; )
      ((d = s.slice(c, c + 1e4)), d.unshift(i, 0), n.splice(...d), (c += 1e4), (i += 1e4));
}
function rn(n, i) {
  return n.length > 0 ? (wn(n, n.length, 0, i), n) : i;
}
const _f = {}.hasOwnProperty;
function x1(n) {
  const i = {};
  let l = -1;
  for (; ++l < n.length; ) w1(i, n[l]);
  return i;
}
function w1(n, i) {
  let l;
  for (l in i) {
    const u = (_f.call(n, l) ? n[l] : void 0) || (n[l] = {}),
      c = i[l];
    let d;
    if (c)
      for (d in c) {
        _f.call(u, d) || (u[d] = []);
        const p = c[d];
        S1(u[d], Array.isArray(p) ? p : p ? [p] : []);
      }
  }
}
function S1(n, i) {
  let l = -1;
  const s = [];
  for (; ++l < i.length; ) (i[l].add === 'after' ? n : s).push(i[l]);
  wn(n, 0, 0, s);
}
function Pp(n, i) {
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
function ti(n) {
  return n
    .replace(/[\t\n\r ]+/g, ' ')
    .replace(/^ | $/g, '')
    .toLowerCase()
    .toUpperCase();
}
const xn = lr(/[A-Za-z]/),
  Gt = lr(/[\dA-Za-z]/),
  _1 = lr(/[#-'*+\--9=?A-Z^-~]/);
function Ha(n) {
  return n !== null && (n < 32 || n === 127);
}
const Va = lr(/\d/),
  C1 = lr(/[\dA-Fa-f]/),
  E1 = lr(/[!-/:-@[-`{-~]/);
function _e(n) {
  return n !== null && n < -2;
}
function Mt(n) {
  return n !== null && (n < 0 || n === 32);
}
function Me(n) {
  return n === -2 || n === -1 || n === 32;
}
const b1 = lr(new RegExp('\\p{P}|\\p{S}', 'u')),
  N1 = lr(/\s/);
function lr(n) {
  return i;
  function i(l) {
    return l !== null && l > -1 && n.test(String.fromCharCode(l));
  }
}
function ii(n) {
  const i = [];
  let l = -1,
    s = 0,
    u = 0;
  for (; ++l < n.length; ) {
    const c = n.charCodeAt(l);
    let d = '';
    if (c === 37 && Gt(n.charCodeAt(l + 1)) && Gt(n.charCodeAt(l + 2))) u = 2;
    else if (c < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c)) || (d = String.fromCharCode(c));
    else if (c > 55295 && c < 57344) {
      const p = n.charCodeAt(l + 1);
      c < 56320 && p > 56319 && p < 57344 ? ((d = String.fromCharCode(c, p)), (u = 1)) : (d = '�');
    } else d = String.fromCharCode(c);
    (d && (i.push(n.slice(s, l), encodeURIComponent(d)), (s = l + u + 1), (d = '')),
      u && ((l += u), (u = 0)));
  }
  return i.join('') + n.slice(s);
}
function He(n, i, l, s) {
  const u = s ? s - 1 : Number.POSITIVE_INFINITY;
  let c = 0;
  return d;
  function d(h) {
    return Me(h) ? (n.enter(l), p(h)) : i(h);
  }
  function p(h) {
    return Me(h) && c++ < u ? (n.consume(h), p) : (n.exit(l), i(h));
  }
}
const I1 = { tokenize: T1 };
function T1(n) {
  const i = n.attempt(this.parser.constructs.contentInitial, s, u);
  let l;
  return i;
  function s(p) {
    if (p === null) {
      n.consume(p);
      return;
    }
    return (n.enter('lineEnding'), n.consume(p), n.exit('lineEnding'), He(n, i, 'linePrefix'));
  }
  function u(p) {
    return (n.enter('paragraph'), c(p));
  }
  function c(p) {
    const h = n.enter('chunkText', { contentType: 'text', previous: l });
    return (l && (l.next = h), (l = h), d(p));
  }
  function d(p) {
    if (p === null) {
      (n.exit('chunkText'), n.exit('paragraph'), n.consume(p));
      return;
    }
    return _e(p) ? (n.consume(p), n.exit('chunkText'), c) : (n.consume(p), d);
  }
}
const j1 = { tokenize: L1 },
  Cf = { tokenize: P1 };
function L1(n) {
  const i = this,
    l = [];
  let s = 0,
    u,
    c,
    d;
  return p;
  function p(D) {
    if (s < l.length) {
      const H = l[s];
      return ((i.containerState = H[1]), n.attempt(H[0].continuation, h, m)(D));
    }
    return m(D);
  }
  function h(D) {
    if ((s++, i.containerState._closeFlow)) {
      ((i.containerState._closeFlow = void 0), u && A());
      const H = i.events.length;
      let X = H,
        R;
      for (; X--; )
        if (i.events[X][0] === 'exit' && i.events[X][1].type === 'chunkFlow') {
          R = i.events[X][1].end;
          break;
        }
      O(s);
      let B = H;
      for (; B < i.events.length; ) ((i.events[B][1].end = { ...R }), B++);
      return (wn(i.events, X + 1, 0, i.events.slice(H)), (i.events.length = B), m(D));
    }
    return p(D);
  }
  function m(D) {
    if (s === l.length) {
      if (!u) return w(D);
      if (u.currentConstruct && u.currentConstruct.concrete) return T(D);
      i.interrupt = !!(u.currentConstruct && !u._gfmTableDynamicInterruptHack);
    }
    return ((i.containerState = {}), n.check(Cf, g, k)(D));
  }
  function g(D) {
    return (u && A(), O(s), w(D));
  }
  function k(D) {
    return ((i.parser.lazy[i.now().line] = s !== l.length), (d = i.now().offset), T(D));
  }
  function w(D) {
    return ((i.containerState = {}), n.attempt(Cf, x, T)(D));
  }
  function x(D) {
    return (s++, l.push([i.currentConstruct, i.containerState]), w(D));
  }
  function T(D) {
    if (D === null) {
      (u && A(), O(0), n.consume(D));
      return;
    }
    return (
      (u = u || i.parser.flow(i.now())),
      n.enter('chunkFlow', { _tokenizer: u, contentType: 'flow', previous: c }),
      I(D)
    );
  }
  function I(D) {
    if (D === null) {
      (z(n.exit('chunkFlow'), !0), O(0), n.consume(D));
      return;
    }
    return _e(D)
      ? (n.consume(D), z(n.exit('chunkFlow')), (s = 0), (i.interrupt = void 0), p)
      : (n.consume(D), I);
  }
  function z(D, H) {
    const X = i.sliceStream(D);
    if (
      (H && X.push(null),
      (D.previous = c),
      c && (c.next = D),
      (c = D),
      u.defineSkip(D.start),
      u.write(X),
      i.parser.lazy[D.start.line])
    ) {
      let R = u.events.length;
      for (; R--; )
        if (
          u.events[R][1].start.offset < d &&
          (!u.events[R][1].end || u.events[R][1].end.offset > d)
        )
          return;
      const B = i.events.length;
      let ae = B,
        ue,
        de;
      for (; ae--; )
        if (i.events[ae][0] === 'exit' && i.events[ae][1].type === 'chunkFlow') {
          if (ue) {
            de = i.events[ae][1].end;
            break;
          }
          ue = !0;
        }
      for (O(s), R = B; R < i.events.length; ) ((i.events[R][1].end = { ...de }), R++);
      (wn(i.events, ae + 1, 0, i.events.slice(B)), (i.events.length = R));
    }
  }
  function O(D) {
    let H = l.length;
    for (; H-- > D; ) {
      const X = l[H];
      ((i.containerState = X[1]), X[0].exit.call(i, n));
    }
    l.length = D;
  }
  function A() {
    (u.write([null]), (c = void 0), (u = void 0), (i.containerState._closeFlow = void 0));
  }
}
function P1(n, i, l) {
  return He(
    n,
    n.attempt(this.parser.constructs.document, i, l),
    'linePrefix',
    this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
  );
}
function Ef(n) {
  if (n === null || Mt(n) || N1(n)) return 1;
  if (b1(n)) return 2;
}
function uu(n, i, l) {
  const s = [];
  let u = -1;
  for (; ++u < n.length; ) {
    const c = n[u].resolveAll;
    c && !s.includes(c) && ((i = c(i, l)), s.push(c));
  }
  return i;
}
const Wa = { name: 'attention', resolveAll: O1, tokenize: R1 };
function O1(n, i) {
  let l = -1,
    s,
    u,
    c,
    d,
    p,
    h,
    m,
    g;
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
          h =
            n[s][1].end.offset - n[s][1].start.offset > 1 &&
            n[l][1].end.offset - n[l][1].start.offset > 1
              ? 2
              : 1;
          const k = { ...n[s][1].end },
            w = { ...n[l][1].start };
          (bf(k, -h),
            bf(w, h),
            (d = {
              type: h > 1 ? 'strongSequence' : 'emphasisSequence',
              start: k,
              end: { ...n[s][1].end },
            }),
            (p = {
              type: h > 1 ? 'strongSequence' : 'emphasisSequence',
              start: { ...n[l][1].start },
              end: w,
            }),
            (c = {
              type: h > 1 ? 'strongText' : 'emphasisText',
              start: { ...n[s][1].end },
              end: { ...n[l][1].start },
            }),
            (u = { type: h > 1 ? 'strong' : 'emphasis', start: { ...d.start }, end: { ...p.end } }),
            (n[s][1].end = { ...d.start }),
            (n[l][1].start = { ...p.end }),
            (m = []),
            n[s][1].end.offset - n[s][1].start.offset &&
              (m = rn(m, [
                ['enter', n[s][1], i],
                ['exit', n[s][1], i],
              ])),
            (m = rn(m, [
              ['enter', u, i],
              ['enter', d, i],
              ['exit', d, i],
              ['enter', c, i],
            ])),
            (m = rn(m, uu(i.parser.constructs.insideSpan.null, n.slice(s + 1, l), i))),
            (m = rn(m, [
              ['exit', c, i],
              ['enter', p, i],
              ['exit', p, i],
              ['exit', u, i],
            ])),
            n[l][1].end.offset - n[l][1].start.offset
              ? ((g = 2),
                (m = rn(m, [
                  ['enter', n[l][1], i],
                  ['exit', n[l][1], i],
                ])))
              : (g = 0),
            wn(n, s - 1, l - s + 3, m),
            (l = s + m.length - g - 2));
          break;
        }
    }
  for (l = -1; ++l < n.length; ) n[l][1].type === 'attentionSequence' && (n[l][1].type = 'data');
  return n;
}
function R1(n, i) {
  const l = this.parser.constructs.attentionMarkers.null,
    s = this.previous,
    u = Ef(s);
  let c;
  return d;
  function d(h) {
    return ((c = h), n.enter('attentionSequence'), p(h));
  }
  function p(h) {
    if (h === c) return (n.consume(h), p);
    const m = n.exit('attentionSequence'),
      g = Ef(h),
      k = !g || (g === 2 && u) || l.includes(h),
      w = !u || (u === 2 && g) || l.includes(s);
    return (
      (m._open = !!(c === 42 ? k : k && (u || !w))),
      (m._close = !!(c === 42 ? w : w && (g || !k))),
      i(h)
    );
  }
}
function bf(n, i) {
  ((n.column += i), (n.offset += i), (n._bufferIndex += i));
}
const z1 = { name: 'autolink', tokenize: M1 };
function M1(n, i, l) {
  let s = 0;
  return u;
  function u(x) {
    return (
      n.enter('autolink'),
      n.enter('autolinkMarker'),
      n.consume(x),
      n.exit('autolinkMarker'),
      n.enter('autolinkProtocol'),
      c
    );
  }
  function c(x) {
    return xn(x) ? (n.consume(x), d) : x === 64 ? l(x) : m(x);
  }
  function d(x) {
    return x === 43 || x === 45 || x === 46 || Gt(x) ? ((s = 1), p(x)) : m(x);
  }
  function p(x) {
    return x === 58
      ? (n.consume(x), (s = 0), h)
      : (x === 43 || x === 45 || x === 46 || Gt(x)) && s++ < 32
        ? (n.consume(x), p)
        : ((s = 0), m(x));
  }
  function h(x) {
    return x === 62
      ? (n.exit('autolinkProtocol'),
        n.enter('autolinkMarker'),
        n.consume(x),
        n.exit('autolinkMarker'),
        n.exit('autolink'),
        i)
      : x === null || x === 32 || x === 60 || Ha(x)
        ? l(x)
        : (n.consume(x), h);
  }
  function m(x) {
    return x === 64 ? (n.consume(x), g) : _1(x) ? (n.consume(x), m) : l(x);
  }
  function g(x) {
    return Gt(x) ? k(x) : l(x);
  }
  function k(x) {
    return x === 46
      ? (n.consume(x), (s = 0), g)
      : x === 62
        ? ((n.exit('autolinkProtocol').type = 'autolinkEmail'),
          n.enter('autolinkMarker'),
          n.consume(x),
          n.exit('autolinkMarker'),
          n.exit('autolink'),
          i)
        : w(x);
  }
  function w(x) {
    if ((x === 45 || Gt(x)) && s++ < 63) {
      const T = x === 45 ? w : k;
      return (n.consume(x), T);
    }
    return l(x);
  }
}
const _o = { partial: !0, tokenize: A1 };
function A1(n, i, l) {
  return s;
  function s(c) {
    return Me(c) ? He(n, u, 'linePrefix')(c) : u(c);
  }
  function u(c) {
    return c === null || _e(c) ? i(c) : l(c);
  }
}
const Op = { continuation: { tokenize: F1 }, exit: B1, name: 'blockQuote', tokenize: D1 };
function D1(n, i, l) {
  const s = this;
  return u;
  function u(d) {
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
    return Me(d)
      ? (n.enter('blockQuotePrefixWhitespace'),
        n.consume(d),
        n.exit('blockQuotePrefixWhitespace'),
        n.exit('blockQuotePrefix'),
        i)
      : (n.exit('blockQuotePrefix'), i(d));
  }
}
function F1(n, i, l) {
  const s = this;
  return u;
  function u(d) {
    return Me(d)
      ? He(
          n,
          c,
          'linePrefix',
          s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
        )(d)
      : c(d);
  }
  function c(d) {
    return n.attempt(Op, i, l)(d);
  }
}
function B1(n) {
  n.exit('blockQuote');
}
const Rp = { name: 'characterEscape', tokenize: U1 };
function U1(n, i, l) {
  return s;
  function s(c) {
    return (
      n.enter('characterEscape'),
      n.enter('escapeMarker'),
      n.consume(c),
      n.exit('escapeMarker'),
      u
    );
  }
  function u(c) {
    return E1(c)
      ? (n.enter('characterEscapeValue'),
        n.consume(c),
        n.exit('characterEscapeValue'),
        n.exit('characterEscape'),
        i)
      : l(c);
  }
}
const zp = { name: 'characterReference', tokenize: $1 };
function $1(n, i, l) {
  const s = this;
  let u = 0,
    c,
    d;
  return p;
  function p(k) {
    return (
      n.enter('characterReference'),
      n.enter('characterReferenceMarker'),
      n.consume(k),
      n.exit('characterReferenceMarker'),
      h
    );
  }
  function h(k) {
    return k === 35
      ? (n.enter('characterReferenceMarkerNumeric'),
        n.consume(k),
        n.exit('characterReferenceMarkerNumeric'),
        m)
      : (n.enter('characterReferenceValue'), (c = 31), (d = Gt), g(k));
  }
  function m(k) {
    return k === 88 || k === 120
      ? (n.enter('characterReferenceMarkerHexadecimal'),
        n.consume(k),
        n.exit('characterReferenceMarkerHexadecimal'),
        n.enter('characterReferenceValue'),
        (c = 6),
        (d = C1),
        g)
      : (n.enter('characterReferenceValue'), (c = 7), (d = Va), g(k));
  }
  function g(k) {
    if (k === 59 && u) {
      const w = n.exit('characterReferenceValue');
      return d === Gt && !au(s.sliceSerialize(w))
        ? l(k)
        : (n.enter('characterReferenceMarker'),
          n.consume(k),
          n.exit('characterReferenceMarker'),
          n.exit('characterReference'),
          i);
    }
    return d(k) && u++ < c ? (n.consume(k), g) : l(k);
  }
}
const Nf = { partial: !0, tokenize: V1 },
  If = { concrete: !0, name: 'codeFenced', tokenize: H1 };
function H1(n, i, l) {
  const s = this,
    u = { partial: !0, tokenize: X };
  let c = 0,
    d = 0,
    p;
  return h;
  function h(R) {
    return m(R);
  }
  function m(R) {
    const B = s.events[s.events.length - 1];
    return (
      (c = B && B[1].type === 'linePrefix' ? B[2].sliceSerialize(B[1], !0).length : 0),
      (p = R),
      n.enter('codeFenced'),
      n.enter('codeFencedFence'),
      n.enter('codeFencedFenceSequence'),
      g(R)
    );
  }
  function g(R) {
    return R === p
      ? (d++, n.consume(R), g)
      : d < 3
        ? l(R)
        : (n.exit('codeFencedFenceSequence'), Me(R) ? He(n, k, 'whitespace')(R) : k(R));
  }
  function k(R) {
    return R === null || _e(R)
      ? (n.exit('codeFencedFence'), s.interrupt ? i(R) : n.check(Nf, I, H)(R))
      : (n.enter('codeFencedFenceInfo'), n.enter('chunkString', { contentType: 'string' }), w(R));
  }
  function w(R) {
    return R === null || _e(R)
      ? (n.exit('chunkString'), n.exit('codeFencedFenceInfo'), k(R))
      : Me(R)
        ? (n.exit('chunkString'), n.exit('codeFencedFenceInfo'), He(n, x, 'whitespace')(R))
        : R === 96 && R === p
          ? l(R)
          : (n.consume(R), w);
  }
  function x(R) {
    return R === null || _e(R)
      ? k(R)
      : (n.enter('codeFencedFenceMeta'), n.enter('chunkString', { contentType: 'string' }), T(R));
  }
  function T(R) {
    return R === null || _e(R)
      ? (n.exit('chunkString'), n.exit('codeFencedFenceMeta'), k(R))
      : R === 96 && R === p
        ? l(R)
        : (n.consume(R), T);
  }
  function I(R) {
    return n.attempt(u, H, z)(R);
  }
  function z(R) {
    return (n.enter('lineEnding'), n.consume(R), n.exit('lineEnding'), O);
  }
  function O(R) {
    return c > 0 && Me(R) ? He(n, A, 'linePrefix', c + 1)(R) : A(R);
  }
  function A(R) {
    return R === null || _e(R) ? n.check(Nf, I, H)(R) : (n.enter('codeFlowValue'), D(R));
  }
  function D(R) {
    return R === null || _e(R) ? (n.exit('codeFlowValue'), A(R)) : (n.consume(R), D);
  }
  function H(R) {
    return (n.exit('codeFenced'), i(R));
  }
  function X(R, B, ae) {
    let ue = 0;
    return de;
    function de(q) {
      return (R.enter('lineEnding'), R.consume(q), R.exit('lineEnding'), Z);
    }
    function Z(q) {
      return (
        R.enter('codeFencedFence'),
        Me(q)
          ? He(
              R,
              J,
              'linePrefix',
              s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
            )(q)
          : J(q)
      );
    }
    function J(q) {
      return q === p ? (R.enter('codeFencedFenceSequence'), fe(q)) : ae(q);
    }
    function fe(q) {
      return q === p
        ? (ue++, R.consume(q), fe)
        : ue >= d
          ? (R.exit('codeFencedFenceSequence'), Me(q) ? He(R, te, 'whitespace')(q) : te(q))
          : ae(q);
    }
    function te(q) {
      return q === null || _e(q) ? (R.exit('codeFencedFence'), B(q)) : ae(q);
    }
  }
}
function V1(n, i, l) {
  const s = this;
  return u;
  function u(d) {
    return d === null ? l(d) : (n.enter('lineEnding'), n.consume(d), n.exit('lineEnding'), c);
  }
  function c(d) {
    return s.parser.lazy[s.now().line] ? l(d) : i(d);
  }
}
const _a = { name: 'codeIndented', tokenize: q1 },
  W1 = { partial: !0, tokenize: Q1 };
function q1(n, i, l) {
  const s = this;
  return u;
  function u(m) {
    return (n.enter('codeIndented'), He(n, c, 'linePrefix', 5)(m));
  }
  function c(m) {
    const g = s.events[s.events.length - 1];
    return g && g[1].type === 'linePrefix' && g[2].sliceSerialize(g[1], !0).length >= 4
      ? d(m)
      : l(m);
  }
  function d(m) {
    return m === null ? h(m) : _e(m) ? n.attempt(W1, d, h)(m) : (n.enter('codeFlowValue'), p(m));
  }
  function p(m) {
    return m === null || _e(m) ? (n.exit('codeFlowValue'), d(m)) : (n.consume(m), p);
  }
  function h(m) {
    return (n.exit('codeIndented'), i(m));
  }
}
function Q1(n, i, l) {
  const s = this;
  return u;
  function u(d) {
    return s.parser.lazy[s.now().line]
      ? l(d)
      : _e(d)
        ? (n.enter('lineEnding'), n.consume(d), n.exit('lineEnding'), u)
        : He(n, c, 'linePrefix', 5)(d);
  }
  function c(d) {
    const p = s.events[s.events.length - 1];
    return p && p[1].type === 'linePrefix' && p[2].sliceSerialize(p[1], !0).length >= 4
      ? i(d)
      : _e(d)
        ? u(d)
        : l(d);
  }
}
const G1 = { name: 'codeText', previous: Y1, resolve: K1, tokenize: X1 };
function K1(n) {
  let i = n.length - 4,
    l = 3,
    s,
    u;
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
    u === void 0
      ? s !== i && n[s][1].type !== 'lineEnding' && (u = s)
      : (s === i || n[s][1].type === 'lineEnding') &&
        ((n[u][1].type = 'codeTextData'),
        s !== u + 2 &&
          ((n[u][1].end = n[s - 1][1].end),
          n.splice(u + 2, s - u - 2),
          (i -= s - u - 2),
          (s = u + 2)),
        (u = void 0));
  return n;
}
function Y1(n) {
  return n !== 96 || this.events[this.events.length - 1][1].type === 'characterEscape';
}
function X1(n, i, l) {
  let s = 0,
    u,
    c;
  return d;
  function d(k) {
    return (n.enter('codeText'), n.enter('codeTextSequence'), p(k));
  }
  function p(k) {
    return k === 96 ? (n.consume(k), s++, p) : (n.exit('codeTextSequence'), h(k));
  }
  function h(k) {
    return k === null
      ? l(k)
      : k === 32
        ? (n.enter('space'), n.consume(k), n.exit('space'), h)
        : k === 96
          ? ((c = n.enter('codeTextSequence')), (u = 0), g(k))
          : _e(k)
            ? (n.enter('lineEnding'), n.consume(k), n.exit('lineEnding'), h)
            : (n.enter('codeTextData'), m(k));
  }
  function m(k) {
    return k === null || k === 32 || k === 96 || _e(k)
      ? (n.exit('codeTextData'), h(k))
      : (n.consume(k), m);
  }
  function g(k) {
    return k === 96
      ? (n.consume(k), u++, g)
      : u === s
        ? (n.exit('codeTextSequence'), n.exit('codeText'), i(k))
        : ((c.type = 'codeTextData'), m(k));
  }
}
class Z1 {
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
    const u = l || 0;
    this.setCursor(Math.trunc(i));
    const c = this.right.splice(this.right.length - u, Number.POSITIVE_INFINITY);
    return (s && Vi(this.left, s), c.reverse());
  }
  pop() {
    return (this.setCursor(Number.POSITIVE_INFINITY), this.left.pop());
  }
  push(i) {
    (this.setCursor(Number.POSITIVE_INFINITY), this.left.push(i));
  }
  pushMany(i) {
    (this.setCursor(Number.POSITIVE_INFINITY), Vi(this.left, i));
  }
  unshift(i) {
    (this.setCursor(0), this.right.push(i));
  }
  unshiftMany(i) {
    (this.setCursor(0), Vi(this.right, i.reverse()));
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
        Vi(this.right, l.reverse());
      } else {
        const l = this.right.splice(
          this.left.length + this.right.length - i,
          Number.POSITIVE_INFINITY
        );
        Vi(this.left, l.reverse());
      }
  }
}
function Vi(n, i) {
  let l = 0;
  if (i.length < 1e4) n.push(...i);
  else for (; l < i.length; ) (n.push(...i.slice(l, l + 1e4)), (l += 1e4));
}
function Mp(n) {
  const i = {};
  let l = -1,
    s,
    u,
    c,
    d,
    p,
    h,
    m;
  const g = new Z1(n);
  for (; ++l < g.length; ) {
    for (; l in i; ) l = i[l];
    if (
      ((s = g.get(l)),
      l &&
        s[1].type === 'chunkFlow' &&
        g.get(l - 1)[1].type === 'listItemPrefix' &&
        ((h = s[1]._tokenizer.events),
        (c = 0),
        c < h.length && h[c][1].type === 'lineEndingBlank' && (c += 2),
        c < h.length && h[c][1].type === 'content'))
    )
      for (; ++c < h.length && h[c][1].type !== 'content'; )
        h[c][1].type === 'chunkText' && ((h[c][1]._isInFirstContentOfListItem = !0), c++);
    if (s[0] === 'enter') s[1].contentType && (Object.assign(i, J1(g, l)), (l = i[l]), (m = !0));
    else if (s[1]._container) {
      for (c = l, u = void 0; c--; )
        if (((d = g.get(c)), d[1].type === 'lineEnding' || d[1].type === 'lineEndingBlank'))
          d[0] === 'enter' &&
            (u && (g.get(u)[1].type = 'lineEndingBlank'), (d[1].type = 'lineEnding'), (u = c));
        else if (!(d[1].type === 'linePrefix' || d[1].type === 'listItemIndent')) break;
      u &&
        ((s[1].end = { ...g.get(u)[1].start }),
        (p = g.slice(u, l)),
        p.unshift(s),
        g.splice(u, l - u + 1, p));
    }
  }
  return (wn(n, 0, Number.POSITIVE_INFINITY, g.slice(0)), !m);
}
function J1(n, i) {
  const l = n.get(i)[1],
    s = n.get(i)[2];
  let u = i - 1;
  const c = [];
  let d = l._tokenizer;
  d ||
    ((d = s.parser[l.contentType](l.start)),
    l._contentTypeTextTrailing && (d._contentTypeTextTrailing = !0));
  const p = d.events,
    h = [],
    m = {};
  let g,
    k,
    w = -1,
    x = l,
    T = 0,
    I = 0;
  const z = [I];
  for (; x; ) {
    for (; n.get(++u)[1] !== x; );
    (c.push(u),
      x._tokenizer ||
        ((g = s.sliceStream(x)),
        x.next || g.push(null),
        k && d.defineSkip(x.start),
        x._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = !0),
        d.write(g),
        x._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = void 0)),
      (k = x),
      (x = x.next));
  }
  for (x = l; ++w < p.length; )
    p[w][0] === 'exit' &&
      p[w - 1][0] === 'enter' &&
      p[w][1].type === p[w - 1][1].type &&
      p[w][1].start.line !== p[w][1].end.line &&
      ((I = w + 1), z.push(I), (x._tokenizer = void 0), (x.previous = void 0), (x = x.next));
  for (
    d.events = [], x ? ((x._tokenizer = void 0), (x.previous = void 0)) : z.pop(), w = z.length;
    w--;
  ) {
    const O = p.slice(z[w], z[w + 1]),
      A = c.pop();
    (h.push([A, A + O.length - 1]), n.splice(A, 2, O));
  }
  for (h.reverse(), w = -1; ++w < h.length; )
    ((m[T + h[w][0]] = T + h[w][1]), (T += h[w][1] - h[w][0] - 1));
  return m;
}
const ev = { resolve: nv, tokenize: rv },
  tv = { partial: !0, tokenize: iv };
function nv(n) {
  return (Mp(n), n);
}
function rv(n, i) {
  let l;
  return s;
  function s(p) {
    return (n.enter('content'), (l = n.enter('chunkContent', { contentType: 'content' })), u(p));
  }
  function u(p) {
    return p === null ? c(p) : _e(p) ? n.check(tv, d, c)(p) : (n.consume(p), u);
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
      u
    );
  }
}
function iv(n, i, l) {
  const s = this;
  return u;
  function u(d) {
    return (
      n.exit('chunkContent'),
      n.enter('lineEnding'),
      n.consume(d),
      n.exit('lineEnding'),
      He(n, c, 'linePrefix')
    );
  }
  function c(d) {
    if (d === null || _e(d)) return l(d);
    const p = s.events[s.events.length - 1];
    return !s.parser.constructs.disable.null.includes('codeIndented') &&
      p &&
      p[1].type === 'linePrefix' &&
      p[2].sliceSerialize(p[1], !0).length >= 4
      ? i(d)
      : n.interrupt(s.parser.constructs.flow, l, i)(d);
  }
}
function Ap(n, i, l, s, u, c, d, p, h) {
  const m = h || Number.POSITIVE_INFINITY;
  let g = 0;
  return k;
  function k(O) {
    return O === 60
      ? (n.enter(s), n.enter(u), n.enter(c), n.consume(O), n.exit(c), w)
      : O === null || O === 32 || O === 41 || Ha(O)
        ? l(O)
        : (n.enter(s),
          n.enter(d),
          n.enter(p),
          n.enter('chunkString', { contentType: 'string' }),
          I(O));
  }
  function w(O) {
    return O === 62
      ? (n.enter(c), n.consume(O), n.exit(c), n.exit(u), n.exit(s), i)
      : (n.enter(p), n.enter('chunkString', { contentType: 'string' }), x(O));
  }
  function x(O) {
    return O === 62
      ? (n.exit('chunkString'), n.exit(p), w(O))
      : O === null || O === 60 || _e(O)
        ? l(O)
        : (n.consume(O), O === 92 ? T : x);
  }
  function T(O) {
    return O === 60 || O === 62 || O === 92 ? (n.consume(O), x) : x(O);
  }
  function I(O) {
    return !g && (O === null || O === 41 || Mt(O))
      ? (n.exit('chunkString'), n.exit(p), n.exit(d), n.exit(s), i(O))
      : g < m && O === 40
        ? (n.consume(O), g++, I)
        : O === 41
          ? (n.consume(O), g--, I)
          : O === null || O === 32 || O === 40 || Ha(O)
            ? l(O)
            : (n.consume(O), O === 92 ? z : I);
  }
  function z(O) {
    return O === 40 || O === 41 || O === 92 ? (n.consume(O), I) : I(O);
  }
}
function Dp(n, i, l, s, u, c) {
  const d = this;
  let p = 0,
    h;
  return m;
  function m(x) {
    return (n.enter(s), n.enter(u), n.consume(x), n.exit(u), n.enter(c), g);
  }
  function g(x) {
    return p > 999 ||
      x === null ||
      x === 91 ||
      (x === 93 && !h) ||
      (x === 94 && !p && '_hiddenFootnoteSupport' in d.parser.constructs)
      ? l(x)
      : x === 93
        ? (n.exit(c), n.enter(u), n.consume(x), n.exit(u), n.exit(s), i)
        : _e(x)
          ? (n.enter('lineEnding'), n.consume(x), n.exit('lineEnding'), g)
          : (n.enter('chunkString', { contentType: 'string' }), k(x));
  }
  function k(x) {
    return x === null || x === 91 || x === 93 || _e(x) || p++ > 999
      ? (n.exit('chunkString'), g(x))
      : (n.consume(x), h || (h = !Me(x)), x === 92 ? w : k);
  }
  function w(x) {
    return x === 91 || x === 92 || x === 93 ? (n.consume(x), p++, k) : k(x);
  }
}
function Fp(n, i, l, s, u, c) {
  let d;
  return p;
  function p(w) {
    return w === 34 || w === 39 || w === 40
      ? (n.enter(s), n.enter(u), n.consume(w), n.exit(u), (d = w === 40 ? 41 : w), h)
      : l(w);
  }
  function h(w) {
    return w === d ? (n.enter(u), n.consume(w), n.exit(u), n.exit(s), i) : (n.enter(c), m(w));
  }
  function m(w) {
    return w === d
      ? (n.exit(c), h(d))
      : w === null
        ? l(w)
        : _e(w)
          ? (n.enter('lineEnding'), n.consume(w), n.exit('lineEnding'), He(n, m, 'linePrefix'))
          : (n.enter('chunkString', { contentType: 'string' }), g(w));
  }
  function g(w) {
    return w === d || w === null || _e(w)
      ? (n.exit('chunkString'), m(w))
      : (n.consume(w), w === 92 ? k : g);
  }
  function k(w) {
    return w === d || w === 92 ? (n.consume(w), g) : g(w);
  }
}
function Qi(n, i) {
  let l;
  return s;
  function s(u) {
    return _e(u)
      ? (n.enter('lineEnding'), n.consume(u), n.exit('lineEnding'), (l = !0), s)
      : Me(u)
        ? He(n, s, l ? 'linePrefix' : 'lineSuffix')(u)
        : i(u);
  }
}
const lv = { name: 'definition', tokenize: sv },
  ov = { partial: !0, tokenize: av };
function sv(n, i, l) {
  const s = this;
  let u;
  return c;
  function c(x) {
    return (n.enter('definition'), d(x));
  }
  function d(x) {
    return Dp.call(
      s,
      n,
      p,
      l,
      'definitionLabel',
      'definitionLabelMarker',
      'definitionLabelString'
    )(x);
  }
  function p(x) {
    return (
      (u = ti(s.sliceSerialize(s.events[s.events.length - 1][1]).slice(1, -1))),
      x === 58 ? (n.enter('definitionMarker'), n.consume(x), n.exit('definitionMarker'), h) : l(x)
    );
  }
  function h(x) {
    return Mt(x) ? Qi(n, m)(x) : m(x);
  }
  function m(x) {
    return Ap(
      n,
      g,
      l,
      'definitionDestination',
      'definitionDestinationLiteral',
      'definitionDestinationLiteralMarker',
      'definitionDestinationRaw',
      'definitionDestinationString'
    )(x);
  }
  function g(x) {
    return n.attempt(ov, k, k)(x);
  }
  function k(x) {
    return Me(x) ? He(n, w, 'whitespace')(x) : w(x);
  }
  function w(x) {
    return x === null || _e(x) ? (n.exit('definition'), s.parser.defined.push(u), i(x)) : l(x);
  }
}
function av(n, i, l) {
  return s;
  function s(p) {
    return Mt(p) ? Qi(n, u)(p) : l(p);
  }
  function u(p) {
    return Fp(n, c, l, 'definitionTitle', 'definitionTitleMarker', 'definitionTitleString')(p);
  }
  function c(p) {
    return Me(p) ? He(n, d, 'whitespace')(p) : d(p);
  }
  function d(p) {
    return p === null || _e(p) ? i(p) : l(p);
  }
}
const uv = { name: 'hardBreakEscape', tokenize: cv };
function cv(n, i, l) {
  return s;
  function s(c) {
    return (n.enter('hardBreakEscape'), n.consume(c), u);
  }
  function u(c) {
    return _e(c) ? (n.exit('hardBreakEscape'), i(c)) : l(c);
  }
}
const dv = { name: 'headingAtx', resolve: fv, tokenize: pv };
function fv(n, i) {
  let l = n.length - 2,
    s = 3,
    u,
    c;
  return (
    n[s][1].type === 'whitespace' && (s += 2),
    l - 2 > s && n[l][1].type === 'whitespace' && (l -= 2),
    n[l][1].type === 'atxHeadingSequence' &&
      (s === l - 1 || (l - 4 > s && n[l - 2][1].type === 'whitespace')) &&
      (l -= s + 1 === l ? 2 : 4),
    l > s &&
      ((u = { type: 'atxHeadingText', start: n[s][1].start, end: n[l][1].end }),
      (c = { type: 'chunkText', start: n[s][1].start, end: n[l][1].end, contentType: 'text' }),
      wn(n, s, l - s + 1, [
        ['enter', u, i],
        ['enter', c, i],
        ['exit', c, i],
        ['exit', u, i],
      ])),
    n
  );
}
function pv(n, i, l) {
  let s = 0;
  return u;
  function u(g) {
    return (n.enter('atxHeading'), c(g));
  }
  function c(g) {
    return (n.enter('atxHeadingSequence'), d(g));
  }
  function d(g) {
    return g === 35 && s++ < 6
      ? (n.consume(g), d)
      : g === null || Mt(g)
        ? (n.exit('atxHeadingSequence'), p(g))
        : l(g);
  }
  function p(g) {
    return g === 35
      ? (n.enter('atxHeadingSequence'), h(g))
      : g === null || _e(g)
        ? (n.exit('atxHeading'), i(g))
        : Me(g)
          ? He(n, p, 'whitespace')(g)
          : (n.enter('atxHeadingText'), m(g));
  }
  function h(g) {
    return g === 35 ? (n.consume(g), h) : (n.exit('atxHeadingSequence'), p(g));
  }
  function m(g) {
    return g === null || g === 35 || Mt(g) ? (n.exit('atxHeadingText'), p(g)) : (n.consume(g), m);
  }
}
const hv = [
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
  Tf = ['pre', 'script', 'style', 'textarea'],
  mv = { concrete: !0, name: 'htmlFlow', resolveTo: vv, tokenize: kv },
  gv = { partial: !0, tokenize: wv },
  yv = { partial: !0, tokenize: xv };
function vv(n) {
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
function kv(n, i, l) {
  const s = this;
  let u, c, d, p, h;
  return m;
  function m(C) {
    return g(C);
  }
  function g(C) {
    return (n.enter('htmlFlow'), n.enter('htmlFlowData'), n.consume(C), k);
  }
  function k(C) {
    return C === 33
      ? (n.consume(C), w)
      : C === 47
        ? (n.consume(C), (c = !0), I)
        : C === 63
          ? (n.consume(C), (u = 3), s.interrupt ? i : S)
          : xn(C)
            ? (n.consume(C), (d = String.fromCharCode(C)), z)
            : l(C);
  }
  function w(C) {
    return C === 45
      ? (n.consume(C), (u = 2), x)
      : C === 91
        ? (n.consume(C), (u = 5), (p = 0), T)
        : xn(C)
          ? (n.consume(C), (u = 4), s.interrupt ? i : S)
          : l(C);
  }
  function x(C) {
    return C === 45 ? (n.consume(C), s.interrupt ? i : S) : l(C);
  }
  function T(C) {
    const pe = 'CDATA[';
    return C === pe.charCodeAt(p++)
      ? (n.consume(C), p === pe.length ? (s.interrupt ? i : J) : T)
      : l(C);
  }
  function I(C) {
    return xn(C) ? (n.consume(C), (d = String.fromCharCode(C)), z) : l(C);
  }
  function z(C) {
    if (C === null || C === 47 || C === 62 || Mt(C)) {
      const pe = C === 47,
        Ce = d.toLowerCase();
      return !pe && !c && Tf.includes(Ce)
        ? ((u = 1), s.interrupt ? i(C) : J(C))
        : hv.includes(d.toLowerCase())
          ? ((u = 6), pe ? (n.consume(C), O) : s.interrupt ? i(C) : J(C))
          : ((u = 7), s.interrupt && !s.parser.lazy[s.now().line] ? l(C) : c ? A(C) : D(C));
    }
    return C === 45 || Gt(C) ? (n.consume(C), (d += String.fromCharCode(C)), z) : l(C);
  }
  function O(C) {
    return C === 62 ? (n.consume(C), s.interrupt ? i : J) : l(C);
  }
  function A(C) {
    return Me(C) ? (n.consume(C), A) : de(C);
  }
  function D(C) {
    return C === 47
      ? (n.consume(C), de)
      : C === 58 || C === 95 || xn(C)
        ? (n.consume(C), H)
        : Me(C)
          ? (n.consume(C), D)
          : de(C);
  }
  function H(C) {
    return C === 45 || C === 46 || C === 58 || C === 95 || Gt(C) ? (n.consume(C), H) : X(C);
  }
  function X(C) {
    return C === 61 ? (n.consume(C), R) : Me(C) ? (n.consume(C), X) : D(C);
  }
  function R(C) {
    return C === null || C === 60 || C === 61 || C === 62 || C === 96
      ? l(C)
      : C === 34 || C === 39
        ? (n.consume(C), (h = C), B)
        : Me(C)
          ? (n.consume(C), R)
          : ae(C);
  }
  function B(C) {
    return C === h
      ? (n.consume(C), (h = null), ue)
      : C === null || _e(C)
        ? l(C)
        : (n.consume(C), B);
  }
  function ae(C) {
    return C === null ||
      C === 34 ||
      C === 39 ||
      C === 47 ||
      C === 60 ||
      C === 61 ||
      C === 62 ||
      C === 96 ||
      Mt(C)
      ? X(C)
      : (n.consume(C), ae);
  }
  function ue(C) {
    return C === 47 || C === 62 || Me(C) ? D(C) : l(C);
  }
  function de(C) {
    return C === 62 ? (n.consume(C), Z) : l(C);
  }
  function Z(C) {
    return C === null || _e(C) ? J(C) : Me(C) ? (n.consume(C), Z) : l(C);
  }
  function J(C) {
    return C === 45 && u === 2
      ? (n.consume(C), ye)
      : C === 60 && u === 1
        ? (n.consume(C), ve)
        : C === 62 && u === 4
          ? (n.consume(C), N)
          : C === 63 && u === 3
            ? (n.consume(C), S)
            : C === 93 && u === 5
              ? (n.consume(C), ne)
              : _e(C) && (u === 6 || u === 7)
                ? (n.exit('htmlFlowData'), n.check(gv, F, fe)(C))
                : C === null || _e(C)
                  ? (n.exit('htmlFlowData'), fe(C))
                  : (n.consume(C), J);
  }
  function fe(C) {
    return n.check(yv, te, F)(C);
  }
  function te(C) {
    return (n.enter('lineEnding'), n.consume(C), n.exit('lineEnding'), q);
  }
  function q(C) {
    return C === null || _e(C) ? fe(C) : (n.enter('htmlFlowData'), J(C));
  }
  function ye(C) {
    return C === 45 ? (n.consume(C), S) : J(C);
  }
  function ve(C) {
    return C === 47 ? (n.consume(C), (d = ''), G) : J(C);
  }
  function G(C) {
    if (C === 62) {
      const pe = d.toLowerCase();
      return Tf.includes(pe) ? (n.consume(C), N) : J(C);
    }
    return xn(C) && d.length < 8 ? (n.consume(C), (d += String.fromCharCode(C)), G) : J(C);
  }
  function ne(C) {
    return C === 93 ? (n.consume(C), S) : J(C);
  }
  function S(C) {
    return C === 62 ? (n.consume(C), N) : C === 45 && u === 2 ? (n.consume(C), S) : J(C);
  }
  function N(C) {
    return C === null || _e(C) ? (n.exit('htmlFlowData'), F(C)) : (n.consume(C), N);
  }
  function F(C) {
    return (n.exit('htmlFlow'), i(C));
  }
}
function xv(n, i, l) {
  const s = this;
  return u;
  function u(d) {
    return _e(d) ? (n.enter('lineEnding'), n.consume(d), n.exit('lineEnding'), c) : l(d);
  }
  function c(d) {
    return s.parser.lazy[s.now().line] ? l(d) : i(d);
  }
}
function wv(n, i, l) {
  return s;
  function s(u) {
    return (n.enter('lineEnding'), n.consume(u), n.exit('lineEnding'), n.attempt(_o, i, l));
  }
}
const Sv = { name: 'htmlText', tokenize: _v };
function _v(n, i, l) {
  const s = this;
  let u, c, d;
  return p;
  function p(S) {
    return (n.enter('htmlText'), n.enter('htmlTextData'), n.consume(S), h);
  }
  function h(S) {
    return S === 33
      ? (n.consume(S), m)
      : S === 47
        ? (n.consume(S), X)
        : S === 63
          ? (n.consume(S), D)
          : xn(S)
            ? (n.consume(S), ae)
            : l(S);
  }
  function m(S) {
    return S === 45
      ? (n.consume(S), g)
      : S === 91
        ? (n.consume(S), (c = 0), T)
        : xn(S)
          ? (n.consume(S), A)
          : l(S);
  }
  function g(S) {
    return S === 45 ? (n.consume(S), x) : l(S);
  }
  function k(S) {
    return S === null
      ? l(S)
      : S === 45
        ? (n.consume(S), w)
        : _e(S)
          ? ((d = k), ve(S))
          : (n.consume(S), k);
  }
  function w(S) {
    return S === 45 ? (n.consume(S), x) : k(S);
  }
  function x(S) {
    return S === 62 ? ye(S) : S === 45 ? w(S) : k(S);
  }
  function T(S) {
    const N = 'CDATA[';
    return S === N.charCodeAt(c++) ? (n.consume(S), c === N.length ? I : T) : l(S);
  }
  function I(S) {
    return S === null
      ? l(S)
      : S === 93
        ? (n.consume(S), z)
        : _e(S)
          ? ((d = I), ve(S))
          : (n.consume(S), I);
  }
  function z(S) {
    return S === 93 ? (n.consume(S), O) : I(S);
  }
  function O(S) {
    return S === 62 ? ye(S) : S === 93 ? (n.consume(S), O) : I(S);
  }
  function A(S) {
    return S === null || S === 62 ? ye(S) : _e(S) ? ((d = A), ve(S)) : (n.consume(S), A);
  }
  function D(S) {
    return S === null
      ? l(S)
      : S === 63
        ? (n.consume(S), H)
        : _e(S)
          ? ((d = D), ve(S))
          : (n.consume(S), D);
  }
  function H(S) {
    return S === 62 ? ye(S) : D(S);
  }
  function X(S) {
    return xn(S) ? (n.consume(S), R) : l(S);
  }
  function R(S) {
    return S === 45 || Gt(S) ? (n.consume(S), R) : B(S);
  }
  function B(S) {
    return _e(S) ? ((d = B), ve(S)) : Me(S) ? (n.consume(S), B) : ye(S);
  }
  function ae(S) {
    return S === 45 || Gt(S) ? (n.consume(S), ae) : S === 47 || S === 62 || Mt(S) ? ue(S) : l(S);
  }
  function ue(S) {
    return S === 47
      ? (n.consume(S), ye)
      : S === 58 || S === 95 || xn(S)
        ? (n.consume(S), de)
        : _e(S)
          ? ((d = ue), ve(S))
          : Me(S)
            ? (n.consume(S), ue)
            : ye(S);
  }
  function de(S) {
    return S === 45 || S === 46 || S === 58 || S === 95 || Gt(S) ? (n.consume(S), de) : Z(S);
  }
  function Z(S) {
    return S === 61
      ? (n.consume(S), J)
      : _e(S)
        ? ((d = Z), ve(S))
        : Me(S)
          ? (n.consume(S), Z)
          : ue(S);
  }
  function J(S) {
    return S === null || S === 60 || S === 61 || S === 62 || S === 96
      ? l(S)
      : S === 34 || S === 39
        ? (n.consume(S), (u = S), fe)
        : _e(S)
          ? ((d = J), ve(S))
          : Me(S)
            ? (n.consume(S), J)
            : (n.consume(S), te);
  }
  function fe(S) {
    return S === u
      ? (n.consume(S), (u = void 0), q)
      : S === null
        ? l(S)
        : _e(S)
          ? ((d = fe), ve(S))
          : (n.consume(S), fe);
  }
  function te(S) {
    return S === null || S === 34 || S === 39 || S === 60 || S === 61 || S === 96
      ? l(S)
      : S === 47 || S === 62 || Mt(S)
        ? ue(S)
        : (n.consume(S), te);
  }
  function q(S) {
    return S === 47 || S === 62 || Mt(S) ? ue(S) : l(S);
  }
  function ye(S) {
    return S === 62 ? (n.consume(S), n.exit('htmlTextData'), n.exit('htmlText'), i) : l(S);
  }
  function ve(S) {
    return (n.exit('htmlTextData'), n.enter('lineEnding'), n.consume(S), n.exit('lineEnding'), G);
  }
  function G(S) {
    return Me(S)
      ? He(
          n,
          ne,
          'linePrefix',
          s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
        )(S)
      : ne(S);
  }
  function ne(S) {
    return (n.enter('htmlTextData'), d(S));
  }
}
const cu = { name: 'labelEnd', resolveAll: Nv, resolveTo: Iv, tokenize: Tv },
  Cv = { tokenize: jv },
  Ev = { tokenize: Lv },
  bv = { tokenize: Pv };
function Nv(n) {
  let i = -1;
  const l = [];
  for (; ++i < n.length; ) {
    const s = n[i][1];
    if (
      (l.push(n[i]), s.type === 'labelImage' || s.type === 'labelLink' || s.type === 'labelEnd')
    ) {
      const u = s.type === 'labelImage' ? 4 : 2;
      ((s.type = 'data'), (i += u));
    }
  }
  return (n.length !== l.length && wn(n, 0, n.length, l), n);
}
function Iv(n, i) {
  let l = n.length,
    s = 0,
    u,
    c,
    d,
    p;
  for (; l--; )
    if (((u = n[l][1]), c)) {
      if (u.type === 'link' || (u.type === 'labelLink' && u._inactive)) break;
      n[l][0] === 'enter' && u.type === 'labelLink' && (u._inactive = !0);
    } else if (d) {
      if (
        n[l][0] === 'enter' &&
        (u.type === 'labelImage' || u.type === 'labelLink') &&
        !u._balanced &&
        ((c = l), u.type !== 'labelLink')
      ) {
        s = 2;
        break;
      }
    } else u.type === 'labelEnd' && (d = l);
  const h = {
      type: n[c][1].type === 'labelLink' ? 'link' : 'image',
      start: { ...n[c][1].start },
      end: { ...n[n.length - 1][1].end },
    },
    m = { type: 'label', start: { ...n[c][1].start }, end: { ...n[d][1].end } },
    g = { type: 'labelText', start: { ...n[c + s + 2][1].end }, end: { ...n[d - 2][1].start } };
  return (
    (p = [
      ['enter', h, i],
      ['enter', m, i],
    ]),
    (p = rn(p, n.slice(c + 1, c + s + 3))),
    (p = rn(p, [['enter', g, i]])),
    (p = rn(p, uu(i.parser.constructs.insideSpan.null, n.slice(c + s + 4, d - 3), i))),
    (p = rn(p, [['exit', g, i], n[d - 2], n[d - 1], ['exit', m, i]])),
    (p = rn(p, n.slice(d + 1))),
    (p = rn(p, [['exit', h, i]])),
    wn(n, c, n.length, p),
    n
  );
}
function Tv(n, i, l) {
  const s = this;
  let u = s.events.length,
    c,
    d;
  for (; u--; )
    if (
      (s.events[u][1].type === 'labelImage' || s.events[u][1].type === 'labelLink') &&
      !s.events[u][1]._balanced
    ) {
      c = s.events[u][1];
      break;
    }
  return p;
  function p(w) {
    return c
      ? c._inactive
        ? k(w)
        : ((d = s.parser.defined.includes(ti(s.sliceSerialize({ start: c.end, end: s.now() })))),
          n.enter('labelEnd'),
          n.enter('labelMarker'),
          n.consume(w),
          n.exit('labelMarker'),
          n.exit('labelEnd'),
          h)
      : l(w);
  }
  function h(w) {
    return w === 40
      ? n.attempt(Cv, g, d ? g : k)(w)
      : w === 91
        ? n.attempt(Ev, g, d ? m : k)(w)
        : d
          ? g(w)
          : k(w);
  }
  function m(w) {
    return n.attempt(bv, g, k)(w);
  }
  function g(w) {
    return i(w);
  }
  function k(w) {
    return ((c._balanced = !0), l(w));
  }
}
function jv(n, i, l) {
  return s;
  function s(k) {
    return (
      n.enter('resource'),
      n.enter('resourceMarker'),
      n.consume(k),
      n.exit('resourceMarker'),
      u
    );
  }
  function u(k) {
    return Mt(k) ? Qi(n, c)(k) : c(k);
  }
  function c(k) {
    return k === 41
      ? g(k)
      : Ap(
          n,
          d,
          p,
          'resourceDestination',
          'resourceDestinationLiteral',
          'resourceDestinationLiteralMarker',
          'resourceDestinationRaw',
          'resourceDestinationString',
          32
        )(k);
  }
  function d(k) {
    return Mt(k) ? Qi(n, h)(k) : g(k);
  }
  function p(k) {
    return l(k);
  }
  function h(k) {
    return k === 34 || k === 39 || k === 40
      ? Fp(n, m, l, 'resourceTitle', 'resourceTitleMarker', 'resourceTitleString')(k)
      : g(k);
  }
  function m(k) {
    return Mt(k) ? Qi(n, g)(k) : g(k);
  }
  function g(k) {
    return k === 41
      ? (n.enter('resourceMarker'), n.consume(k), n.exit('resourceMarker'), n.exit('resource'), i)
      : l(k);
  }
}
function Lv(n, i, l) {
  const s = this;
  return u;
  function u(p) {
    return Dp.call(s, n, c, d, 'reference', 'referenceMarker', 'referenceString')(p);
  }
  function c(p) {
    return s.parser.defined.includes(
      ti(s.sliceSerialize(s.events[s.events.length - 1][1]).slice(1, -1))
    )
      ? i(p)
      : l(p);
  }
  function d(p) {
    return l(p);
  }
}
function Pv(n, i, l) {
  return s;
  function s(c) {
    return (
      n.enter('reference'),
      n.enter('referenceMarker'),
      n.consume(c),
      n.exit('referenceMarker'),
      u
    );
  }
  function u(c) {
    return c === 93
      ? (n.enter('referenceMarker'),
        n.consume(c),
        n.exit('referenceMarker'),
        n.exit('reference'),
        i)
      : l(c);
  }
}
const Ov = { name: 'labelStartImage', resolveAll: cu.resolveAll, tokenize: Rv };
function Rv(n, i, l) {
  const s = this;
  return u;
  function u(p) {
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
const zv = { name: 'labelStartLink', resolveAll: cu.resolveAll, tokenize: Mv };
function Mv(n, i, l) {
  const s = this;
  return u;
  function u(d) {
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
const Ca = { name: 'lineEnding', tokenize: Av };
function Av(n, i) {
  return l;
  function l(s) {
    return (n.enter('lineEnding'), n.consume(s), n.exit('lineEnding'), He(n, i, 'linePrefix'));
  }
}
const vo = { name: 'thematicBreak', tokenize: Dv };
function Dv(n, i, l) {
  let s = 0,
    u;
  return c;
  function c(m) {
    return (n.enter('thematicBreak'), d(m));
  }
  function d(m) {
    return ((u = m), p(m));
  }
  function p(m) {
    return m === u
      ? (n.enter('thematicBreakSequence'), h(m))
      : s >= 3 && (m === null || _e(m))
        ? (n.exit('thematicBreak'), i(m))
        : l(m);
  }
  function h(m) {
    return m === u
      ? (n.consume(m), s++, h)
      : (n.exit('thematicBreakSequence'), Me(m) ? He(n, p, 'whitespace')(m) : p(m));
  }
}
const zt = { continuation: { tokenize: $v }, exit: Vv, name: 'list', tokenize: Uv },
  Fv = { partial: !0, tokenize: Wv },
  Bv = { partial: !0, tokenize: Hv };
function Uv(n, i, l) {
  const s = this,
    u = s.events[s.events.length - 1];
  let c = u && u[1].type === 'linePrefix' ? u[2].sliceSerialize(u[1], !0).length : 0,
    d = 0;
  return p;
  function p(x) {
    const T =
      s.containerState.type || (x === 42 || x === 43 || x === 45 ? 'listUnordered' : 'listOrdered');
    if (T === 'listUnordered' ? !s.containerState.marker || x === s.containerState.marker : Va(x)) {
      if (
        (s.containerState.type || ((s.containerState.type = T), n.enter(T, { _container: !0 })),
        T === 'listUnordered')
      )
        return (n.enter('listItemPrefix'), x === 42 || x === 45 ? n.check(vo, l, m)(x) : m(x));
      if (!s.interrupt || x === 49)
        return (n.enter('listItemPrefix'), n.enter('listItemValue'), h(x));
    }
    return l(x);
  }
  function h(x) {
    return Va(x) && ++d < 10
      ? (n.consume(x), h)
      : (!s.interrupt || d < 2) &&
          (s.containerState.marker ? x === s.containerState.marker : x === 41 || x === 46)
        ? (n.exit('listItemValue'), m(x))
        : l(x);
  }
  function m(x) {
    return (
      n.enter('listItemMarker'),
      n.consume(x),
      n.exit('listItemMarker'),
      (s.containerState.marker = s.containerState.marker || x),
      n.check(_o, s.interrupt ? l : g, n.attempt(Fv, w, k))
    );
  }
  function g(x) {
    return ((s.containerState.initialBlankLine = !0), c++, w(x));
  }
  function k(x) {
    return Me(x)
      ? (n.enter('listItemPrefixWhitespace'), n.consume(x), n.exit('listItemPrefixWhitespace'), w)
      : l(x);
  }
  function w(x) {
    return (
      (s.containerState.size = c + s.sliceSerialize(n.exit('listItemPrefix'), !0).length),
      i(x)
    );
  }
}
function $v(n, i, l) {
  const s = this;
  return ((s.containerState._closeFlow = void 0), n.check(_o, u, c));
  function u(p) {
    return (
      (s.containerState.furtherBlankLines =
        s.containerState.furtherBlankLines || s.containerState.initialBlankLine),
      He(n, i, 'listItemIndent', s.containerState.size + 1)(p)
    );
  }
  function c(p) {
    return s.containerState.furtherBlankLines || !Me(p)
      ? ((s.containerState.furtherBlankLines = void 0),
        (s.containerState.initialBlankLine = void 0),
        d(p))
      : ((s.containerState.furtherBlankLines = void 0),
        (s.containerState.initialBlankLine = void 0),
        n.attempt(Bv, i, d)(p));
  }
  function d(p) {
    return (
      (s.containerState._closeFlow = !0),
      (s.interrupt = void 0),
      He(
        n,
        n.attempt(zt, i, l),
        'linePrefix',
        s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
      )(p)
    );
  }
}
function Hv(n, i, l) {
  const s = this;
  return He(n, u, 'listItemIndent', s.containerState.size + 1);
  function u(c) {
    const d = s.events[s.events.length - 1];
    return d &&
      d[1].type === 'listItemIndent' &&
      d[2].sliceSerialize(d[1], !0).length === s.containerState.size
      ? i(c)
      : l(c);
  }
}
function Vv(n) {
  n.exit(this.containerState.type);
}
function Wv(n, i, l) {
  const s = this;
  return He(
    n,
    u,
    'listItemPrefixWhitespace',
    s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 5
  );
  function u(c) {
    const d = s.events[s.events.length - 1];
    return !Me(c) && d && d[1].type === 'listItemPrefixWhitespace' ? i(c) : l(c);
  }
}
const jf = { name: 'setextUnderline', resolveTo: qv, tokenize: Qv };
function qv(n, i) {
  let l = n.length,
    s,
    u,
    c;
  for (; l--; )
    if (n[l][0] === 'enter') {
      if (n[l][1].type === 'content') {
        s = l;
        break;
      }
      n[l][1].type === 'paragraph' && (u = l);
    } else
      (n[l][1].type === 'content' && n.splice(l, 1),
        !c && n[l][1].type === 'definition' && (c = l));
  const d = {
    type: 'setextHeading',
    start: { ...n[s][1].start },
    end: { ...n[n.length - 1][1].end },
  };
  return (
    (n[u][1].type = 'setextHeadingText'),
    c
      ? (n.splice(u, 0, ['enter', d, i]),
        n.splice(c + 1, 0, ['exit', n[s][1], i]),
        (n[s][1].end = { ...n[c][1].end }))
      : (n[s][1] = d),
    n.push(['exit', d, i]),
    n
  );
}
function Qv(n, i, l) {
  const s = this;
  let u;
  return c;
  function c(m) {
    let g = s.events.length,
      k;
    for (; g--; )
      if (
        s.events[g][1].type !== 'lineEnding' &&
        s.events[g][1].type !== 'linePrefix' &&
        s.events[g][1].type !== 'content'
      ) {
        k = s.events[g][1].type === 'paragraph';
        break;
      }
    return !s.parser.lazy[s.now().line] && (s.interrupt || k)
      ? (n.enter('setextHeadingLine'), (u = m), d(m))
      : l(m);
  }
  function d(m) {
    return (n.enter('setextHeadingLineSequence'), p(m));
  }
  function p(m) {
    return m === u
      ? (n.consume(m), p)
      : (n.exit('setextHeadingLineSequence'), Me(m) ? He(n, h, 'lineSuffix')(m) : h(m));
  }
  function h(m) {
    return m === null || _e(m) ? (n.exit('setextHeadingLine'), i(m)) : l(m);
  }
}
const Gv = { tokenize: Kv };
function Kv(n) {
  const i = this,
    l = n.attempt(
      _o,
      s,
      n.attempt(
        this.parser.constructs.flowInitial,
        u,
        He(n, n.attempt(this.parser.constructs.flow, u, n.attempt(ev, u)), 'linePrefix')
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
  function u(c) {
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
const Yv = { resolveAll: Up() },
  Xv = Bp('string'),
  Zv = Bp('text');
function Bp(n) {
  return { resolveAll: Up(n === 'text' ? Jv : void 0), tokenize: i };
  function i(l) {
    const s = this,
      u = this.parser.constructs[n],
      c = l.attempt(u, d, p);
    return d;
    function d(g) {
      return m(g) ? c(g) : p(g);
    }
    function p(g) {
      if (g === null) {
        l.consume(g);
        return;
      }
      return (l.enter('data'), l.consume(g), h);
    }
    function h(g) {
      return m(g) ? (l.exit('data'), c(g)) : (l.consume(g), h);
    }
    function m(g) {
      if (g === null) return !0;
      const k = u[g];
      let w = -1;
      if (k)
        for (; ++w < k.length; ) {
          const x = k[w];
          if (!x.previous || x.previous.call(s, s.previous)) return !0;
        }
      return !1;
    }
  }
}
function Up(n) {
  return i;
  function i(l, s) {
    let u = -1,
      c;
    for (; ++u <= l.length; )
      c === void 0
        ? l[u] && l[u][1].type === 'data' && ((c = u), u++)
        : (!l[u] || l[u][1].type !== 'data') &&
          (u !== c + 2 &&
            ((l[c][1].end = l[u - 1][1].end), l.splice(c + 2, u - c - 2), (u = c + 2)),
          (c = void 0));
    return n ? n(l, s) : l;
  }
}
function Jv(n, i) {
  let l = 0;
  for (; ++l <= n.length; )
    if ((l === n.length || n[l][1].type === 'lineEnding') && n[l - 1][1].type === 'data') {
      const s = n[l - 1][1],
        u = i.sliceStream(s);
      let c = u.length,
        d = -1,
        p = 0,
        h;
      for (; c--; ) {
        const m = u[c];
        if (typeof m == 'string') {
          for (d = m.length; m.charCodeAt(d - 1) === 32; ) (p++, d--);
          if (d) break;
          d = -1;
        } else if (m === -2) ((h = !0), p++);
        else if (m !== -1) {
          c++;
          break;
        }
      }
      if ((i._contentTypeTextTrailing && l === n.length && (p = 0), p)) {
        const m = {
          type: l === n.length || h || p < 2 ? 'lineSuffix' : 'hardBreakTrailing',
          start: {
            _bufferIndex: c ? d : s.start._bufferIndex + d,
            _index: s.start._index + c,
            line: s.end.line,
            column: s.end.column - p,
            offset: s.end.offset - p,
          },
          end: { ...s.end },
        };
        ((s.end = { ...m.start }),
          s.start.offset === s.end.offset
            ? Object.assign(s, m)
            : (n.splice(l, 0, ['enter', m, i], ['exit', m, i]), (l += 2)));
      }
      l++;
    }
  return n;
}
const e0 = {
    42: zt,
    43: zt,
    45: zt,
    48: zt,
    49: zt,
    50: zt,
    51: zt,
    52: zt,
    53: zt,
    54: zt,
    55: zt,
    56: zt,
    57: zt,
    62: Op,
  },
  t0 = { 91: lv },
  n0 = { [-2]: _a, [-1]: _a, 32: _a },
  r0 = { 35: dv, 42: vo, 45: [jf, vo], 60: mv, 61: jf, 95: vo, 96: If, 126: If },
  i0 = { 38: zp, 92: Rp },
  l0 = {
    [-5]: Ca,
    [-4]: Ca,
    [-3]: Ca,
    33: Ov,
    38: zp,
    42: Wa,
    60: [z1, Sv],
    91: zv,
    92: [uv, Rp],
    93: cu,
    95: Wa,
    96: G1,
  },
  o0 = { null: [Wa, Yv] },
  s0 = { null: [42, 95] },
  a0 = { null: [] },
  u0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: s0,
        contentInitial: t0,
        disable: a0,
        document: e0,
        flow: r0,
        flowInitial: n0,
        insideSpan: o0,
        string: i0,
        text: l0,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
function c0(n, i, l) {
  let s = {
    _bufferIndex: -1,
    _index: 0,
    line: (l && l.line) || 1,
    column: (l && l.column) || 1,
    offset: (l && l.offset) || 0,
  };
  const u = {},
    c = [];
  let d = [],
    p = [];
  const h = {
      attempt: B(X),
      check: B(R),
      consume: A,
      enter: D,
      exit: H,
      interrupt: B(R, { interrupt: !0 }),
    },
    m = {
      code: null,
      containerState: {},
      defineSkip: I,
      events: [],
      now: T,
      parser: n,
      previous: null,
      sliceSerialize: w,
      sliceStream: x,
      write: k,
    };
  let g = i.tokenize.call(m, h);
  return (i.resolveAll && c.push(i), m);
  function k(Z) {
    return (
      (d = rn(d, Z)),
      z(),
      d[d.length - 1] !== null ? [] : (ae(i, 0), (m.events = uu(c, m.events, m)), m.events)
    );
  }
  function w(Z, J) {
    return f0(x(Z), J);
  }
  function x(Z) {
    return d0(d, Z);
  }
  function T() {
    const { _bufferIndex: Z, _index: J, line: fe, column: te, offset: q } = s;
    return { _bufferIndex: Z, _index: J, line: fe, column: te, offset: q };
  }
  function I(Z) {
    ((u[Z.line] = Z.column), de());
  }
  function z() {
    let Z;
    for (; s._index < d.length; ) {
      const J = d[s._index];
      if (typeof J == 'string')
        for (
          Z = s._index, s._bufferIndex < 0 && (s._bufferIndex = 0);
          s._index === Z && s._bufferIndex < J.length;
        )
          O(J.charCodeAt(s._bufferIndex));
      else O(J);
    }
  }
  function O(Z) {
    g = g(Z);
  }
  function A(Z) {
    (_e(Z)
      ? (s.line++, (s.column = 1), (s.offset += Z === -3 ? 2 : 1), de())
      : Z !== -1 && (s.column++, s.offset++),
      s._bufferIndex < 0
        ? s._index++
        : (s._bufferIndex++,
          s._bufferIndex === d[s._index].length && ((s._bufferIndex = -1), s._index++)),
      (m.previous = Z));
  }
  function D(Z, J) {
    const fe = J || {};
    return ((fe.type = Z), (fe.start = T()), m.events.push(['enter', fe, m]), p.push(fe), fe);
  }
  function H(Z) {
    const J = p.pop();
    return ((J.end = T()), m.events.push(['exit', J, m]), J);
  }
  function X(Z, J) {
    ae(Z, J.from);
  }
  function R(Z, J) {
    J.restore();
  }
  function B(Z, J) {
    return fe;
    function fe(te, q, ye) {
      let ve, G, ne, S;
      return Array.isArray(te) ? F(te) : 'tokenize' in te ? F([te]) : N(te);
      function N(ie) {
        return be;
        function be(Ee) {
          const Pe = Ee !== null && ie[Ee],
            We = Ee !== null && ie.null,
            bt = [
              ...(Array.isArray(Pe) ? Pe : Pe ? [Pe] : []),
              ...(Array.isArray(We) ? We : We ? [We] : []),
            ];
          return F(bt)(Ee);
        }
      }
      function F(ie) {
        return ((ve = ie), (G = 0), ie.length === 0 ? ye : C(ie[G]));
      }
      function C(ie) {
        return be;
        function be(Ee) {
          return (
            (S = ue()),
            (ne = ie),
            ie.partial || (m.currentConstruct = ie),
            ie.name && m.parser.constructs.disable.null.includes(ie.name)
              ? Ce()
              : ie.tokenize.call(J ? Object.assign(Object.create(m), J) : m, h, pe, Ce)(Ee)
          );
        }
      }
      function pe(ie) {
        return (Z(ne, S), q);
      }
      function Ce(ie) {
        return (S.restore(), ++G < ve.length ? C(ve[G]) : ye);
      }
    }
  }
  function ae(Z, J) {
    (Z.resolveAll && !c.includes(Z) && c.push(Z),
      Z.resolve && wn(m.events, J, m.events.length - J, Z.resolve(m.events.slice(J), m)),
      Z.resolveTo && (m.events = Z.resolveTo(m.events, m)));
  }
  function ue() {
    const Z = T(),
      J = m.previous,
      fe = m.currentConstruct,
      te = m.events.length,
      q = Array.from(p);
    return { from: te, restore: ye };
    function ye() {
      ((s = Z), (m.previous = J), (m.currentConstruct = fe), (m.events.length = te), (p = q), de());
    }
  }
  function de() {
    s.line in u && s.column < 2 && ((s.column = u[s.line]), (s.offset += u[s.line] - 1));
  }
}
function d0(n, i) {
  const l = i.start._index,
    s = i.start._bufferIndex,
    u = i.end._index,
    c = i.end._bufferIndex;
  let d;
  if (l === u) d = [n[l].slice(s, c)];
  else {
    if (((d = n.slice(l, u)), s > -1)) {
      const p = d[0];
      typeof p == 'string' ? (d[0] = p.slice(s)) : d.shift();
    }
    c > 0 && d.push(n[u].slice(0, c));
  }
  return d;
}
function f0(n, i) {
  let l = -1;
  const s = [];
  let u;
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
          if (!i && u) continue;
          d = ' ';
          break;
        }
        default:
          d = String.fromCharCode(c);
      }
    ((u = c === -2), s.push(d));
  }
  return s.join('');
}
function p0(n) {
  const s = {
    constructs: x1([u0, ...((n || {}).extensions || [])]),
    content: u(I1),
    defined: [],
    document: u(j1),
    flow: u(Gv),
    lazy: {},
    string: u(Xv),
    text: u(Zv),
  };
  return s;
  function u(c) {
    return d;
    function d(p) {
      return c0(s, c, p);
    }
  }
}
function h0(n) {
  for (; !Mp(n); );
  return n;
}
const Lf = /[\0\t\n\r]/g;
function m0() {
  let n = 1,
    i = '',
    l = !0,
    s;
  return u;
  function u(c, d, p) {
    const h = [];
    let m, g, k, w, x;
    for (
      c = i + (typeof c == 'string' ? c.toString() : new TextDecoder(d || void 0).decode(c)),
        k = 0,
        i = '',
        l && (c.charCodeAt(0) === 65279 && k++, (l = void 0));
      k < c.length;
    ) {
      if (
        ((Lf.lastIndex = k),
        (m = Lf.exec(c)),
        (w = m && m.index !== void 0 ? m.index : c.length),
        (x = c.charCodeAt(w)),
        !m)
      ) {
        i = c.slice(k);
        break;
      }
      if (x === 10 && k === w && s) (h.push(-3), (s = void 0));
      else
        switch (
          (s && (h.push(-5), (s = void 0)), k < w && (h.push(c.slice(k, w)), (n += w - k)), x)
        ) {
          case 0: {
            (h.push(65533), n++);
            break;
          }
          case 9: {
            for (g = Math.ceil(n / 4) * 4, h.push(-2); n++ < g; ) h.push(-1);
            break;
          }
          case 10: {
            (h.push(-4), (n = 1));
            break;
          }
          default:
            ((s = !0), (n = 1));
        }
      k = w + 1;
    }
    return (p && (s && h.push(-5), i && h.push(i), h.push(null)), h);
  }
}
const g0 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function y0(n) {
  return n.replace(g0, v0);
}
function v0(n, i, l) {
  if (i) return i;
  if (l.charCodeAt(0) === 35) {
    const u = l.charCodeAt(1),
      c = u === 120 || u === 88;
    return Pp(l.slice(c ? 2 : 1), c ? 16 : 10);
  }
  return au(l) || n;
}
const $p = {}.hasOwnProperty;
function k0(n, i, l) {
  return (
    typeof i != 'string' && ((l = i), (i = void 0)),
    x0(l)(
      h0(
        p0(l)
          .document()
          .write(m0()(n, i, !0))
      )
    )
  );
}
function x0(n) {
  const i = {
    transforms: [],
    canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
    enter: {
      autolink: c(Kt),
      autolinkProtocol: ue,
      autolinkEmail: ue,
      atxHeading: c(ft),
      blockQuote: c(We),
      characterEscape: ue,
      characterReference: ue,
      codeFenced: c(bt),
      codeFencedFenceInfo: d,
      codeFencedFenceMeta: d,
      codeIndented: c(bt, d),
      codeText: c(zn, d),
      codeTextData: ue,
      data: ue,
      codeFlowValue: ue,
      definition: c(ee),
      definitionDestinationString: d,
      definitionLabelString: d,
      definitionTitleString: d,
      emphasis: c(ke),
      hardBreakEscape: c(Je),
      hardBreakTrailing: c(Je),
      htmlFlow: c(Dt, d),
      htmlFlowData: ue,
      htmlText: c(Dt, d),
      htmlTextData: ue,
      image: c(Ft),
      label: d,
      link: c(Kt),
      listItem: c(ge),
      listItemValue: w,
      listOrdered: c(ln, k),
      listUnordered: c(ln),
      paragraph: c(Le),
      reference: C,
      referenceString: d,
      resourceDestinationString: d,
      resourceTitleString: d,
      setextHeading: c(ft),
      strong: c(Bt),
      thematicBreak: c(Sn),
    },
    exit: {
      atxHeading: h(),
      atxHeadingSequence: X,
      autolink: h(),
      autolinkEmail: Pe,
      autolinkProtocol: Ee,
      blockQuote: h(),
      characterEscapeValue: de,
      characterReferenceMarkerHexadecimal: Ce,
      characterReferenceMarkerNumeric: Ce,
      characterReferenceValue: ie,
      characterReference: be,
      codeFenced: h(z),
      codeFencedFence: I,
      codeFencedFenceInfo: x,
      codeFencedFenceMeta: T,
      codeFlowValue: de,
      codeIndented: h(O),
      codeText: h(q),
      codeTextData: de,
      data: de,
      definition: h(),
      definitionDestinationString: H,
      definitionLabelString: A,
      definitionTitleString: D,
      emphasis: h(),
      hardBreakEscape: h(J),
      hardBreakTrailing: h(J),
      htmlFlow: h(fe),
      htmlFlowData: de,
      htmlText: h(te),
      htmlTextData: de,
      image: h(ve),
      label: ne,
      labelText: G,
      lineEnding: Z,
      link: h(ye),
      listItem: h(),
      listOrdered: h(),
      listUnordered: h(),
      paragraph: h(),
      referenceString: pe,
      resourceDestinationString: S,
      resourceTitleString: N,
      resource: F,
      setextHeading: h(ae),
      setextHeadingLineSequence: B,
      setextHeadingText: R,
      strong: h(),
      thematicBreak: h(),
    },
  };
  Hp(i, (n || {}).mdastExtensions || []);
  const l = {};
  return s;
  function s(M) {
    let Y = { type: 'root', children: [] };
    const xe = {
        stack: [Y],
        tokenStack: [],
        config: i,
        enter: p,
        exit: m,
        buffer: d,
        resume: g,
        data: l,
      },
      Te = [];
    let Oe = -1;
    for (; ++Oe < M.length; )
      if (M[Oe][1].type === 'listOrdered' || M[Oe][1].type === 'listUnordered')
        if (M[Oe][0] === 'enter') Te.push(Oe);
        else {
          const pt = Te.pop();
          Oe = u(M, pt, Oe);
        }
    for (Oe = -1; ++Oe < M.length; ) {
      const pt = i[M[Oe][0]];
      $p.call(pt, M[Oe][1].type) &&
        pt[M[Oe][1].type].call(
          Object.assign({ sliceSerialize: M[Oe][2].sliceSerialize }, xe),
          M[Oe][1]
        );
    }
    if (xe.tokenStack.length > 0) {
      const pt = xe.tokenStack[xe.tokenStack.length - 1];
      (pt[1] || Pf).call(xe, void 0, pt[0]);
    }
    for (
      Y.position = {
        start: nr(M.length > 0 ? M[0][1].start : { line: 1, column: 1, offset: 0 }),
        end: nr(M.length > 0 ? M[M.length - 2][1].end : { line: 1, column: 1, offset: 0 }),
      },
        Oe = -1;
      ++Oe < i.transforms.length;
    )
      Y = i.transforms[Oe](Y) || Y;
    return Y;
  }
  function u(M, Y, xe) {
    let Te = Y - 1,
      Oe = -1,
      pt = !1,
      _n,
      Yt,
      Mn,
      sr;
    for (; ++Te <= xe; ) {
      const ht = M[Te];
      switch (ht[1].type) {
        case 'listUnordered':
        case 'listOrdered':
        case 'blockQuote': {
          (ht[0] === 'enter' ? Oe++ : Oe--, (sr = void 0));
          break;
        }
        case 'lineEndingBlank': {
          ht[0] === 'enter' && (_n && !sr && !Oe && !Mn && (Mn = Te), (sr = void 0));
          break;
        }
        case 'linePrefix':
        case 'listItemValue':
        case 'listItemMarker':
        case 'listItemPrefix':
        case 'listItemPrefixWhitespace':
          break;
        default:
          sr = void 0;
      }
      if (
        (!Oe && ht[0] === 'enter' && ht[1].type === 'listItemPrefix') ||
        (Oe === -1 &&
          ht[0] === 'exit' &&
          (ht[1].type === 'listUnordered' || ht[1].type === 'listOrdered'))
      ) {
        if (_n) {
          let pn = Te;
          for (Yt = void 0; pn--; ) {
            const Ut = M[pn];
            if (Ut[1].type === 'lineEnding' || Ut[1].type === 'lineEndingBlank') {
              if (Ut[0] === 'exit') continue;
              (Yt && ((M[Yt][1].type = 'lineEndingBlank'), (pt = !0)),
                (Ut[1].type = 'lineEnding'),
                (Yt = pn));
            } else if (
              !(
                Ut[1].type === 'linePrefix' ||
                Ut[1].type === 'blockQuotePrefix' ||
                Ut[1].type === 'blockQuotePrefixWhitespace' ||
                Ut[1].type === 'blockQuoteMarker' ||
                Ut[1].type === 'listItemIndent'
              )
            )
              break;
          }
          (Mn && (!Yt || Mn < Yt) && (_n._spread = !0),
            (_n.end = Object.assign({}, Yt ? M[Yt][1].start : ht[1].end)),
            M.splice(Yt || Te, 0, ['exit', _n, ht[2]]),
            Te++,
            xe++);
        }
        if (ht[1].type === 'listItemPrefix') {
          const pn = {
            type: 'listItem',
            _spread: !1,
            start: Object.assign({}, ht[1].start),
            end: void 0,
          };
          ((_n = pn), M.splice(Te, 0, ['enter', pn, ht[2]]), Te++, xe++, (Mn = void 0), (sr = !0));
        }
      }
    }
    return ((M[Y][1]._spread = pt), xe);
  }
  function c(M, Y) {
    return xe;
    function xe(Te) {
      (p.call(this, M(Te), Te), Y && Y.call(this, Te));
    }
  }
  function d() {
    this.stack.push({ type: 'fragment', children: [] });
  }
  function p(M, Y, xe) {
    (this.stack[this.stack.length - 1].children.push(M),
      this.stack.push(M),
      this.tokenStack.push([Y, xe || void 0]),
      (M.position = { start: nr(Y.start), end: void 0 }));
  }
  function h(M) {
    return Y;
    function Y(xe) {
      (M && M.call(this, xe), m.call(this, xe));
    }
  }
  function m(M, Y) {
    const xe = this.stack.pop(),
      Te = this.tokenStack.pop();
    if (Te)
      Te[0].type !== M.type && (Y ? Y.call(this, M, Te[0]) : (Te[1] || Pf).call(this, M, Te[0]));
    else
      throw new Error(
        'Cannot close `' + M.type + '` (' + qi({ start: M.start, end: M.end }) + '): it’s not open'
      );
    xe.position.end = nr(M.end);
  }
  function g() {
    return v1(this.stack.pop());
  }
  function k() {
    this.data.expectingFirstListItemValue = !0;
  }
  function w(M) {
    if (this.data.expectingFirstListItemValue) {
      const Y = this.stack[this.stack.length - 2];
      ((Y.start = Number.parseInt(this.sliceSerialize(M), 10)),
        (this.data.expectingFirstListItemValue = void 0));
    }
  }
  function x() {
    const M = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.lang = M;
  }
  function T() {
    const M = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.meta = M;
  }
  function I() {
    this.data.flowCodeInside || (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function z() {
    const M = this.resume(),
      Y = this.stack[this.stack.length - 1];
    ((Y.value = M.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '')), (this.data.flowCodeInside = void 0));
  }
  function O() {
    const M = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.value = M.replace(/(\r?\n|\r)$/g, '');
  }
  function A(M) {
    const Y = this.resume(),
      xe = this.stack[this.stack.length - 1];
    ((xe.label = Y), (xe.identifier = ti(this.sliceSerialize(M)).toLowerCase()));
  }
  function D() {
    const M = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.title = M;
  }
  function H() {
    const M = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.url = M;
  }
  function X(M) {
    const Y = this.stack[this.stack.length - 1];
    if (!Y.depth) {
      const xe = this.sliceSerialize(M).length;
      Y.depth = xe;
    }
  }
  function R() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function B(M) {
    const Y = this.stack[this.stack.length - 1];
    Y.depth = this.sliceSerialize(M).codePointAt(0) === 61 ? 1 : 2;
  }
  function ae() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function ue(M) {
    const xe = this.stack[this.stack.length - 1].children;
    let Te = xe[xe.length - 1];
    ((!Te || Te.type !== 'text') &&
      ((Te = Nt()), (Te.position = { start: nr(M.start), end: void 0 }), xe.push(Te)),
      this.stack.push(Te));
  }
  function de(M) {
    const Y = this.stack.pop();
    ((Y.value += this.sliceSerialize(M)), (Y.position.end = nr(M.end)));
  }
  function Z(M) {
    const Y = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const xe = Y.children[Y.children.length - 1];
      ((xe.position.end = nr(M.end)), (this.data.atHardBreak = void 0));
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      i.canContainEols.includes(Y.type) &&
      (ue.call(this, M), de.call(this, M));
  }
  function J() {
    this.data.atHardBreak = !0;
  }
  function fe() {
    const M = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.value = M;
  }
  function te() {
    const M = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.value = M;
  }
  function q() {
    const M = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.value = M;
  }
  function ye() {
    const M = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const Y = this.data.referenceType || 'shortcut';
      ((M.type += 'Reference'), (M.referenceType = Y), delete M.url, delete M.title);
    } else (delete M.identifier, delete M.label);
    this.data.referenceType = void 0;
  }
  function ve() {
    const M = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const Y = this.data.referenceType || 'shortcut';
      ((M.type += 'Reference'), (M.referenceType = Y), delete M.url, delete M.title);
    } else (delete M.identifier, delete M.label);
    this.data.referenceType = void 0;
  }
  function G(M) {
    const Y = this.sliceSerialize(M),
      xe = this.stack[this.stack.length - 2];
    ((xe.label = y0(Y)), (xe.identifier = ti(Y).toLowerCase()));
  }
  function ne() {
    const M = this.stack[this.stack.length - 1],
      Y = this.resume(),
      xe = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), xe.type === 'link')) {
      const Te = M.children;
      xe.children = Te;
    } else xe.alt = Y;
  }
  function S() {
    const M = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.url = M;
  }
  function N() {
    const M = this.resume(),
      Y = this.stack[this.stack.length - 1];
    Y.title = M;
  }
  function F() {
    this.data.inReference = void 0;
  }
  function C() {
    this.data.referenceType = 'collapsed';
  }
  function pe(M) {
    const Y = this.resume(),
      xe = this.stack[this.stack.length - 1];
    ((xe.label = Y),
      (xe.identifier = ti(this.sliceSerialize(M)).toLowerCase()),
      (this.data.referenceType = 'full'));
  }
  function Ce(M) {
    this.data.characterReferenceType = M.type;
  }
  function ie(M) {
    const Y = this.sliceSerialize(M),
      xe = this.data.characterReferenceType;
    let Te;
    xe
      ? ((Te = Pp(Y, xe === 'characterReferenceMarkerNumeric' ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (Te = au(Y));
    const Oe = this.stack[this.stack.length - 1];
    Oe.value += Te;
  }
  function be(M) {
    const Y = this.stack.pop();
    Y.position.end = nr(M.end);
  }
  function Ee(M) {
    de.call(this, M);
    const Y = this.stack[this.stack.length - 1];
    Y.url = this.sliceSerialize(M);
  }
  function Pe(M) {
    de.call(this, M);
    const Y = this.stack[this.stack.length - 1];
    Y.url = 'mailto:' + this.sliceSerialize(M);
  }
  function We() {
    return { type: 'blockquote', children: [] };
  }
  function bt() {
    return { type: 'code', lang: null, meta: null, value: '' };
  }
  function zn() {
    return { type: 'inlineCode', value: '' };
  }
  function ee() {
    return { type: 'definition', identifier: '', label: null, title: null, url: '' };
  }
  function ke() {
    return { type: 'emphasis', children: [] };
  }
  function ft() {
    return { type: 'heading', depth: 0, children: [] };
  }
  function Je() {
    return { type: 'break' };
  }
  function Dt() {
    return { type: 'html', value: '' };
  }
  function Ft() {
    return { type: 'image', title: null, url: '', alt: null };
  }
  function Kt() {
    return { type: 'link', title: null, url: '', children: [] };
  }
  function ln(M) {
    return {
      type: 'list',
      ordered: M.type === 'listOrdered',
      start: null,
      spread: M._spread,
      children: [],
    };
  }
  function ge(M) {
    return { type: 'listItem', spread: M._spread, checked: null, children: [] };
  }
  function Le() {
    return { type: 'paragraph', children: [] };
  }
  function Bt() {
    return { type: 'strong', children: [] };
  }
  function Nt() {
    return { type: 'text', value: '' };
  }
  function Sn() {
    return { type: 'thematicBreak' };
  }
}
function nr(n) {
  return { line: n.line, column: n.column, offset: n.offset };
}
function Hp(n, i) {
  let l = -1;
  for (; ++l < i.length; ) {
    const s = i[l];
    Array.isArray(s) ? Hp(n, s) : w0(n, s);
  }
}
function w0(n, i) {
  let l;
  for (l in i)
    if ($p.call(i, l))
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
function Pf(n, i) {
  throw n
    ? new Error(
        'Cannot close `' +
          n.type +
          '` (' +
          qi({ start: n.start, end: n.end }) +
          '): a different token (`' +
          i.type +
          '`, ' +
          qi({ start: i.start, end: i.end }) +
          ') is open'
      )
    : new Error(
        'Cannot close document, a token (`' +
          i.type +
          '`, ' +
          qi({ start: i.start, end: i.end }) +
          ') is still open'
      );
}
function S0(n) {
  const i = this;
  i.parser = l;
  function l(s) {
    return k0(s, {
      ...i.data('settings'),
      ...n,
      extensions: i.data('micromarkExtensions') || [],
      mdastExtensions: i.data('fromMarkdownExtensions') || [],
    });
  }
}
function _0(n, i) {
  const l = {
    type: 'element',
    tagName: 'blockquote',
    properties: {},
    children: n.wrap(n.all(i), !0),
  };
  return (n.patch(i, l), n.applyData(i, l));
}
function C0(n, i) {
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
function E0(n, i) {
  const l = i.value
      ? i.value +
        `
`
      : '',
    s = {},
    u = i.lang ? i.lang.split(/\s+/) : [];
  u.length > 0 && (s.className = ['language-' + u[0]]);
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
function b0(n, i) {
  const l = { type: 'element', tagName: 'del', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function N0(n, i) {
  const l = { type: 'element', tagName: 'em', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function I0(n, i) {
  const l = typeof n.options.clobberPrefix == 'string' ? n.options.clobberPrefix : 'user-content-',
    s = String(i.identifier).toUpperCase(),
    u = ii(s.toLowerCase()),
    c = n.footnoteOrder.indexOf(s);
  let d,
    p = n.footnoteCounts.get(s);
  (p === void 0 ? ((p = 0), n.footnoteOrder.push(s), (d = n.footnoteOrder.length)) : (d = c + 1),
    (p += 1),
    n.footnoteCounts.set(s, p));
  const h = {
    type: 'element',
    tagName: 'a',
    properties: {
      href: '#' + l + 'fn-' + u,
      id: l + 'fnref-' + u + (p > 1 ? '-' + p : ''),
      dataFootnoteRef: !0,
      ariaDescribedBy: ['footnote-label'],
    },
    children: [{ type: 'text', value: String(d) }],
  };
  n.patch(i, h);
  const m = { type: 'element', tagName: 'sup', properties: {}, children: [h] };
  return (n.patch(i, m), n.applyData(i, m));
}
function T0(n, i) {
  const l = { type: 'element', tagName: 'h' + i.depth, properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function j0(n, i) {
  if (n.options.allowDangerousHtml) {
    const l = { type: 'raw', value: i.value };
    return (n.patch(i, l), n.applyData(i, l));
  }
}
function Vp(n, i) {
  const l = i.referenceType;
  let s = ']';
  if (
    (l === 'collapsed' ? (s += '[]') : l === 'full' && (s += '[' + (i.label || i.identifier) + ']'),
    i.type === 'imageReference')
  )
    return [{ type: 'text', value: '![' + i.alt + s }];
  const u = n.all(i),
    c = u[0];
  c && c.type === 'text' ? (c.value = '[' + c.value) : u.unshift({ type: 'text', value: '[' });
  const d = u[u.length - 1];
  return (d && d.type === 'text' ? (d.value += s) : u.push({ type: 'text', value: s }), u);
}
function L0(n, i) {
  const l = String(i.identifier).toUpperCase(),
    s = n.definitionById.get(l);
  if (!s) return Vp(n, i);
  const u = { src: ii(s.url || ''), alt: i.alt };
  s.title !== null && s.title !== void 0 && (u.title = s.title);
  const c = { type: 'element', tagName: 'img', properties: u, children: [] };
  return (n.patch(i, c), n.applyData(i, c));
}
function P0(n, i) {
  const l = { src: ii(i.url) };
  (i.alt !== null && i.alt !== void 0 && (l.alt = i.alt),
    i.title !== null && i.title !== void 0 && (l.title = i.title));
  const s = { type: 'element', tagName: 'img', properties: l, children: [] };
  return (n.patch(i, s), n.applyData(i, s));
}
function O0(n, i) {
  const l = { type: 'text', value: i.value.replace(/\r?\n|\r/g, ' ') };
  n.patch(i, l);
  const s = { type: 'element', tagName: 'code', properties: {}, children: [l] };
  return (n.patch(i, s), n.applyData(i, s));
}
function R0(n, i) {
  const l = String(i.identifier).toUpperCase(),
    s = n.definitionById.get(l);
  if (!s) return Vp(n, i);
  const u = { href: ii(s.url || '') };
  s.title !== null && s.title !== void 0 && (u.title = s.title);
  const c = { type: 'element', tagName: 'a', properties: u, children: n.all(i) };
  return (n.patch(i, c), n.applyData(i, c));
}
function z0(n, i) {
  const l = { href: ii(i.url) };
  i.title !== null && i.title !== void 0 && (l.title = i.title);
  const s = { type: 'element', tagName: 'a', properties: l, children: n.all(i) };
  return (n.patch(i, s), n.applyData(i, s));
}
function M0(n, i, l) {
  const s = n.all(i),
    u = l ? A0(l) : Wp(i),
    c = {},
    d = [];
  if (typeof i.checked == 'boolean') {
    const g = s[0];
    let k;
    (g && g.type === 'element' && g.tagName === 'p'
      ? (k = g)
      : ((k = { type: 'element', tagName: 'p', properties: {}, children: [] }), s.unshift(k)),
      k.children.length > 0 && k.children.unshift({ type: 'text', value: ' ' }),
      k.children.unshift({
        type: 'element',
        tagName: 'input',
        properties: { type: 'checkbox', checked: i.checked, disabled: !0 },
        children: [],
      }),
      (c.className = ['task-list-item']));
  }
  let p = -1;
  for (; ++p < s.length; ) {
    const g = s[p];
    ((u || p !== 0 || g.type !== 'element' || g.tagName !== 'p') &&
      d.push({
        type: 'text',
        value: `
`,
      }),
      g.type === 'element' && g.tagName === 'p' && !u ? d.push(...g.children) : d.push(g));
  }
  const h = s[s.length - 1];
  h &&
    (u || h.type !== 'element' || h.tagName !== 'p') &&
    d.push({
      type: 'text',
      value: `
`,
    });
  const m = { type: 'element', tagName: 'li', properties: c, children: d };
  return (n.patch(i, m), n.applyData(i, m));
}
function A0(n) {
  let i = !1;
  if (n.type === 'list') {
    i = n.spread || !1;
    const l = n.children;
    let s = -1;
    for (; !i && ++s < l.length; ) i = Wp(l[s]);
  }
  return i;
}
function Wp(n) {
  const i = n.spread;
  return i ?? n.children.length > 1;
}
function D0(n, i) {
  const l = {},
    s = n.all(i);
  let u = -1;
  for (typeof i.start == 'number' && i.start !== 1 && (l.start = i.start); ++u < s.length; ) {
    const d = s[u];
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
function F0(n, i) {
  const l = { type: 'element', tagName: 'p', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function B0(n, i) {
  const l = { type: 'root', children: n.wrap(n.all(i)) };
  return (n.patch(i, l), n.applyData(i, l));
}
function U0(n, i) {
  const l = { type: 'element', tagName: 'strong', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function $0(n, i) {
  const l = n.all(i),
    s = l.shift(),
    u = [];
  if (s) {
    const d = { type: 'element', tagName: 'thead', properties: {}, children: n.wrap([s], !0) };
    (n.patch(i.children[0], d), u.push(d));
  }
  if (l.length > 0) {
    const d = { type: 'element', tagName: 'tbody', properties: {}, children: n.wrap(l, !0) },
      p = iu(i.children[1]),
      h = Ep(i.children[i.children.length - 1]);
    (p && h && (d.position = { start: p, end: h }), u.push(d));
  }
  const c = { type: 'element', tagName: 'table', properties: {}, children: n.wrap(u, !0) };
  return (n.patch(i, c), n.applyData(i, c));
}
function H0(n, i, l) {
  const s = l ? l.children : void 0,
    c = (s ? s.indexOf(i) : 1) === 0 ? 'th' : 'td',
    d = l && l.type === 'table' ? l.align : void 0,
    p = d ? d.length : i.children.length;
  let h = -1;
  const m = [];
  for (; ++h < p; ) {
    const k = i.children[h],
      w = {},
      x = d ? d[h] : void 0;
    x && (w.align = x);
    let T = { type: 'element', tagName: c, properties: w, children: [] };
    (k && ((T.children = n.all(k)), n.patch(k, T), (T = n.applyData(k, T))), m.push(T));
  }
  const g = { type: 'element', tagName: 'tr', properties: {}, children: n.wrap(m, !0) };
  return (n.patch(i, g), n.applyData(i, g));
}
function V0(n, i) {
  const l = { type: 'element', tagName: 'td', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
const Of = 9,
  Rf = 32;
function W0(n) {
  const i = String(n),
    l = /\r?\n|\r/g;
  let s = l.exec(i),
    u = 0;
  const c = [];
  for (; s; )
    (c.push(zf(i.slice(u, s.index), u > 0, !0), s[0]),
      (u = s.index + s[0].length),
      (s = l.exec(i)));
  return (c.push(zf(i.slice(u), u > 0, !1)), c.join(''));
}
function zf(n, i, l) {
  let s = 0,
    u = n.length;
  if (i) {
    let c = n.codePointAt(s);
    for (; c === Of || c === Rf; ) (s++, (c = n.codePointAt(s)));
  }
  if (l) {
    let c = n.codePointAt(u - 1);
    for (; c === Of || c === Rf; ) (u--, (c = n.codePointAt(u - 1)));
  }
  return u > s ? n.slice(s, u) : '';
}
function q0(n, i) {
  const l = { type: 'text', value: W0(String(i.value)) };
  return (n.patch(i, l), n.applyData(i, l));
}
function Q0(n, i) {
  const l = { type: 'element', tagName: 'hr', properties: {}, children: [] };
  return (n.patch(i, l), n.applyData(i, l));
}
const G0 = {
  blockquote: _0,
  break: C0,
  code: E0,
  delete: b0,
  emphasis: N0,
  footnoteReference: I0,
  heading: T0,
  html: j0,
  imageReference: L0,
  image: P0,
  inlineCode: O0,
  linkReference: R0,
  link: z0,
  listItem: M0,
  list: D0,
  paragraph: F0,
  root: B0,
  strong: U0,
  table: $0,
  tableCell: V0,
  tableRow: H0,
  text: q0,
  thematicBreak: Q0,
  toml: fo,
  yaml: fo,
  definition: fo,
  footnoteDefinition: fo,
};
function fo() {}
const qp = -1,
  Co = 0,
  Gi = 1,
  wo = 2,
  du = 3,
  fu = 4,
  pu = 5,
  hu = 6,
  Qp = 7,
  Gp = 8,
  Mf = typeof self == 'object' ? self : globalThis,
  K0 = (n, i) => {
    const l = (u, c) => (n.set(c, u), u),
      s = (u) => {
        if (n.has(u)) return n.get(u);
        const [c, d] = i[u];
        switch (c) {
          case Co:
          case qp:
            return l(d, u);
          case Gi: {
            const p = l([], u);
            for (const h of d) p.push(s(h));
            return p;
          }
          case wo: {
            const p = l({}, u);
            for (const [h, m] of d) p[s(h)] = s(m);
            return p;
          }
          case du:
            return l(new Date(d), u);
          case fu: {
            const { source: p, flags: h } = d;
            return l(new RegExp(p, h), u);
          }
          case pu: {
            const p = l(new Map(), u);
            for (const [h, m] of d) p.set(s(h), s(m));
            return p;
          }
          case hu: {
            const p = l(new Set(), u);
            for (const h of d) p.add(s(h));
            return p;
          }
          case Qp: {
            const { name: p, message: h } = d;
            return l(new Mf[p](h), u);
          }
          case Gp:
            return l(BigInt(d), u);
          case 'BigInt':
            return l(Object(BigInt(d)), u);
          case 'ArrayBuffer':
            return l(new Uint8Array(d).buffer, d);
          case 'DataView': {
            const { buffer: p } = new Uint8Array(d);
            return l(new DataView(p), d);
          }
        }
        return l(new Mf[c](d), u);
      };
    return s;
  },
  Af = (n) => K0(new Map(), n)(0),
  Xr = '',
  { toString: Y0 } = {},
  { keys: X0 } = Object,
  Wi = (n) => {
    const i = typeof n;
    if (i !== 'object' || !n) return [Co, i];
    const l = Y0.call(n).slice(8, -1);
    switch (l) {
      case 'Array':
        return [Gi, Xr];
      case 'Object':
        return [wo, Xr];
      case 'Date':
        return [du, Xr];
      case 'RegExp':
        return [fu, Xr];
      case 'Map':
        return [pu, Xr];
      case 'Set':
        return [hu, Xr];
      case 'DataView':
        return [Gi, l];
    }
    return l.includes('Array') ? [Gi, l] : l.includes('Error') ? [Qp, l] : [wo, l];
  },
  po = ([n, i]) => n === Co && (i === 'function' || i === 'symbol'),
  Z0 = (n, i, l, s) => {
    const u = (d, p) => {
        const h = s.push(d) - 1;
        return (l.set(p, h), h);
      },
      c = (d) => {
        if (l.has(d)) return l.get(d);
        let [p, h] = Wi(d);
        switch (p) {
          case Co: {
            let g = d;
            switch (h) {
              case 'bigint':
                ((p = Gp), (g = d.toString()));
                break;
              case 'function':
              case 'symbol':
                if (n) throw new TypeError('unable to serialize ' + h);
                g = null;
                break;
              case 'undefined':
                return u([qp], d);
            }
            return u([p, g], d);
          }
          case Gi: {
            if (h) {
              let w = d;
              return (
                h === 'DataView'
                  ? (w = new Uint8Array(d.buffer))
                  : h === 'ArrayBuffer' && (w = new Uint8Array(d)),
                u([h, [...w]], d)
              );
            }
            const g = [],
              k = u([p, g], d);
            for (const w of d) g.push(c(w));
            return k;
          }
          case wo: {
            if (h)
              switch (h) {
                case 'BigInt':
                  return u([h, d.toString()], d);
                case 'Boolean':
                case 'Number':
                case 'String':
                  return u([h, d.valueOf()], d);
              }
            if (i && 'toJSON' in d) return c(d.toJSON());
            const g = [],
              k = u([p, g], d);
            for (const w of X0(d)) (n || !po(Wi(d[w]))) && g.push([c(w), c(d[w])]);
            return k;
          }
          case du:
            return u([p, d.toISOString()], d);
          case fu: {
            const { source: g, flags: k } = d;
            return u([p, { source: g, flags: k }], d);
          }
          case pu: {
            const g = [],
              k = u([p, g], d);
            for (const [w, x] of d) (n || !(po(Wi(w)) || po(Wi(x)))) && g.push([c(w), c(x)]);
            return k;
          }
          case hu: {
            const g = [],
              k = u([p, g], d);
            for (const w of d) (n || !po(Wi(w))) && g.push(c(w));
            return k;
          }
        }
        const { message: m } = d;
        return u([p, { name: h, message: m }], d);
      };
    return c;
  },
  Df = (n, { json: i, lossy: l } = {}) => {
    const s = [];
    return (Z0(!(i || l), !!i, new Map(), s)(n), s);
  },
  So =
    typeof structuredClone == 'function'
      ? (n, i) => (i && ('json' in i || 'lossy' in i) ? Af(Df(n, i)) : structuredClone(n))
      : (n, i) => Af(Df(n, i));
function J0(n, i) {
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
function ek(n, i) {
  return 'Back to reference ' + (n + 1) + (i > 1 ? '-' + i : '');
}
function tk(n) {
  const i = typeof n.options.clobberPrefix == 'string' ? n.options.clobberPrefix : 'user-content-',
    l = n.options.footnoteBackContent || J0,
    s = n.options.footnoteBackLabel || ek,
    u = n.options.footnoteLabel || 'Footnotes',
    c = n.options.footnoteLabelTagName || 'h2',
    d = n.options.footnoteLabelProperties || { className: ['sr-only'] },
    p = [];
  let h = -1;
  for (; ++h < n.footnoteOrder.length; ) {
    const m = n.footnoteById.get(n.footnoteOrder[h]);
    if (!m) continue;
    const g = n.all(m),
      k = String(m.identifier).toUpperCase(),
      w = ii(k.toLowerCase());
    let x = 0;
    const T = [],
      I = n.footnoteCounts.get(k);
    for (; I !== void 0 && ++x <= I; ) {
      T.length > 0 && T.push({ type: 'text', value: ' ' });
      let A = typeof l == 'string' ? l : l(h, x);
      (typeof A == 'string' && (A = { type: 'text', value: A }),
        T.push({
          type: 'element',
          tagName: 'a',
          properties: {
            href: '#' + i + 'fnref-' + w + (x > 1 ? '-' + x : ''),
            dataFootnoteBackref: '',
            ariaLabel: typeof s == 'string' ? s : s(h, x),
            className: ['data-footnote-backref'],
          },
          children: Array.isArray(A) ? A : [A],
        }));
    }
    const z = g[g.length - 1];
    if (z && z.type === 'element' && z.tagName === 'p') {
      const A = z.children[z.children.length - 1];
      (A && A.type === 'text' ? (A.value += ' ') : z.children.push({ type: 'text', value: ' ' }),
        z.children.push(...T));
    } else g.push(...T);
    const O = {
      type: 'element',
      tagName: 'li',
      properties: { id: i + 'fn-' + w },
      children: n.wrap(g, !0),
    };
    (n.patch(m, O), p.push(O));
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
          properties: { ...So(d), id: 'footnote-label' },
          children: [{ type: 'text', value: u }],
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
const Kp = function (n) {
  if (n == null) return lk;
  if (typeof n == 'function') return Eo(n);
  if (typeof n == 'object') return Array.isArray(n) ? nk(n) : rk(n);
  if (typeof n == 'string') return ik(n);
  throw new Error('Expected function, string, or object as test');
};
function nk(n) {
  const i = [];
  let l = -1;
  for (; ++l < n.length; ) i[l] = Kp(n[l]);
  return Eo(s);
  function s(...u) {
    let c = -1;
    for (; ++c < i.length; ) if (i[c].apply(this, u)) return !0;
    return !1;
  }
}
function rk(n) {
  const i = n;
  return Eo(l);
  function l(s) {
    const u = s;
    let c;
    for (c in n) if (u[c] !== i[c]) return !1;
    return !0;
  }
}
function ik(n) {
  return Eo(i);
  function i(l) {
    return l && l.type === n;
  }
}
function Eo(n) {
  return i;
  function i(l, s, u) {
    return !!(ok(l) && n.call(this, l, typeof s == 'number' ? s : void 0, u || void 0));
  }
}
function lk() {
  return !0;
}
function ok(n) {
  return n !== null && typeof n == 'object' && 'type' in n;
}
const Yp = [],
  sk = !0,
  Ff = !1,
  ak = 'skip';
function uk(n, i, l, s) {
  let u;
  typeof i == 'function' && typeof l != 'function' ? ((s = l), (l = i)) : (u = i);
  const c = Kp(u),
    d = s ? -1 : 1;
  p(n, void 0, [])();
  function p(h, m, g) {
    const k = h && typeof h == 'object' ? h : {};
    if (typeof k.type == 'string') {
      const x =
        typeof k.tagName == 'string' ? k.tagName : typeof k.name == 'string' ? k.name : void 0;
      Object.defineProperty(w, 'name', {
        value: 'node (' + (h.type + (x ? '<' + x + '>' : '')) + ')',
      });
    }
    return w;
    function w() {
      let x = Yp,
        T,
        I,
        z;
      if ((!i || c(h, m, g[g.length - 1] || void 0)) && ((x = ck(l(h, g))), x[0] === Ff)) return x;
      if ('children' in h && h.children) {
        const O = h;
        if (O.children && x[0] !== ak)
          for (
            I = (s ? O.children.length : -1) + d, z = g.concat(O);
            I > -1 && I < O.children.length;
          ) {
            const A = O.children[I];
            if (((T = p(A, I, z)()), T[0] === Ff)) return T;
            I = typeof T[1] == 'number' ? T[1] : I + d;
          }
      }
      return x;
    }
  }
}
function ck(n) {
  return Array.isArray(n) ? n : typeof n == 'number' ? [sk, n] : n == null ? Yp : [n];
}
function Xp(n, i, l, s) {
  let u, c, d;
  (typeof i == 'function' && typeof l != 'function'
    ? ((c = void 0), (d = i), (u = l))
    : ((c = i), (d = l), (u = s)),
    uk(n, c, p, u));
  function p(h, m) {
    const g = m[m.length - 1],
      k = g ? g.children.indexOf(h) : void 0;
    return d(h, k, g);
  }
}
const qa = {}.hasOwnProperty,
  dk = {};
function fk(n, i) {
  const l = i || dk,
    s = new Map(),
    u = new Map(),
    c = new Map(),
    d = { ...G0, ...l.handlers },
    p = {
      all: m,
      applyData: hk,
      definitionById: s,
      footnoteById: u,
      footnoteCounts: c,
      footnoteOrder: [],
      handlers: d,
      one: h,
      options: l,
      patch: pk,
      wrap: gk,
    };
  return (
    Xp(n, function (g) {
      if (g.type === 'definition' || g.type === 'footnoteDefinition') {
        const k = g.type === 'definition' ? s : u,
          w = String(g.identifier).toUpperCase();
        k.has(w) || k.set(w, g);
      }
    }),
    p
  );
  function h(g, k) {
    const w = g.type,
      x = p.handlers[w];
    if (qa.call(p.handlers, w) && x) return x(p, g, k);
    if (p.options.passThrough && p.options.passThrough.includes(w)) {
      if ('children' in g) {
        const { children: I, ...z } = g,
          O = So(z);
        return ((O.children = p.all(g)), O);
      }
      return So(g);
    }
    return (p.options.unknownHandler || mk)(p, g, k);
  }
  function m(g) {
    const k = [];
    if ('children' in g) {
      const w = g.children;
      let x = -1;
      for (; ++x < w.length; ) {
        const T = p.one(w[x], g);
        if (T) {
          if (
            x &&
            w[x - 1].type === 'break' &&
            (!Array.isArray(T) && T.type === 'text' && (T.value = Bf(T.value)),
            !Array.isArray(T) && T.type === 'element')
          ) {
            const I = T.children[0];
            I && I.type === 'text' && (I.value = Bf(I.value));
          }
          Array.isArray(T) ? k.push(...T) : k.push(T);
        }
      }
    }
    return k;
  }
}
function pk(n, i) {
  n.position && (i.position = Yy(n));
}
function hk(n, i) {
  let l = i;
  if (n && n.data) {
    const s = n.data.hName,
      u = n.data.hChildren,
      c = n.data.hProperties;
    if (typeof s == 'string')
      if (l.type === 'element') l.tagName = s;
      else {
        const d = 'children' in l ? l.children : [l];
        l = { type: 'element', tagName: s, properties: {}, children: d };
      }
    (l.type === 'element' && c && Object.assign(l.properties, So(c)),
      'children' in l && l.children && u !== null && u !== void 0 && (l.children = u));
  }
  return l;
}
function mk(n, i) {
  const l = i.data || {},
    s =
      'value' in i && !(qa.call(l, 'hProperties') || qa.call(l, 'hChildren'))
        ? { type: 'text', value: i.value }
        : { type: 'element', tagName: 'div', properties: {}, children: n.all(i) };
  return (n.patch(i, s), n.applyData(i, s));
}
function gk(n, i) {
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
function Bf(n) {
  let i = 0,
    l = n.charCodeAt(i);
  for (; l === 9 || l === 32; ) (i++, (l = n.charCodeAt(i)));
  return n.slice(i);
}
function Uf(n, i) {
  const l = fk(n, i),
    s = l.one(n, void 0),
    u = tk(l),
    c = Array.isArray(s) ? { type: 'root', children: s } : s || { type: 'root', children: [] };
  return (
    u &&
      c.children.push(
        {
          type: 'text',
          value: `
`,
        },
        u
      ),
    c
  );
}
function yk(n, i) {
  return n && 'run' in n
    ? async function (l, s) {
        const u = Uf(l, { file: s, ...i });
        await n.run(u, s);
      }
    : function (l, s) {
        return Uf(l, { file: s, ...(n || i) });
      };
}
function $f(n) {
  if (n) throw n;
}
var Ea, Hf;
function vk() {
  if (Hf) return Ea;
  Hf = 1;
  var n = Object.prototype.hasOwnProperty,
    i = Object.prototype.toString,
    l = Object.defineProperty,
    s = Object.getOwnPropertyDescriptor,
    u = function (m) {
      return typeof Array.isArray == 'function' ? Array.isArray(m) : i.call(m) === '[object Array]';
    },
    c = function (m) {
      if (!m || i.call(m) !== '[object Object]') return !1;
      var g = n.call(m, 'constructor'),
        k =
          m.constructor &&
          m.constructor.prototype &&
          n.call(m.constructor.prototype, 'isPrototypeOf');
      if (m.constructor && !g && !k) return !1;
      var w;
      for (w in m);
      return typeof w > 'u' || n.call(m, w);
    },
    d = function (m, g) {
      l && g.name === '__proto__'
        ? l(m, g.name, { enumerable: !0, configurable: !0, value: g.newValue, writable: !0 })
        : (m[g.name] = g.newValue);
    },
    p = function (m, g) {
      if (g === '__proto__')
        if (n.call(m, g)) {
          if (s) return s(m, g).value;
        } else return;
      return m[g];
    };
  return (
    (Ea = function h() {
      var m,
        g,
        k,
        w,
        x,
        T,
        I = arguments[0],
        z = 1,
        O = arguments.length,
        A = !1;
      for (
        typeof I == 'boolean' && ((A = I), (I = arguments[1] || {}), (z = 2)),
          (I == null || (typeof I != 'object' && typeof I != 'function')) && (I = {});
        z < O;
        ++z
      )
        if (((m = arguments[z]), m != null))
          for (g in m)
            ((k = p(I, g)),
              (w = p(m, g)),
              I !== w &&
                (A && w && (c(w) || (x = u(w)))
                  ? (x ? ((x = !1), (T = k && u(k) ? k : [])) : (T = k && c(k) ? k : {}),
                    d(I, { name: g, newValue: h(A, T, w) }))
                  : typeof w < 'u' && d(I, { name: g, newValue: w })));
      return I;
    }),
    Ea
  );
}
var kk = vk();
const ba = ep(kk);
function Qa(n) {
  if (typeof n != 'object' || n === null) return !1;
  const i = Object.getPrototypeOf(n);
  return (
    (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) &&
    !(Symbol.toStringTag in n) &&
    !(Symbol.iterator in n)
  );
}
function xk() {
  const n = [],
    i = { run: l, use: s };
  return i;
  function l(...u) {
    let c = -1;
    const d = u.pop();
    if (typeof d != 'function') throw new TypeError('Expected function as last argument, not ' + d);
    p(null, ...u);
    function p(h, ...m) {
      const g = n[++c];
      let k = -1;
      if (h) {
        d(h);
        return;
      }
      for (; ++k < u.length; ) (m[k] === null || m[k] === void 0) && (m[k] = u[k]);
      ((u = m), g ? wk(g, p)(...m) : d(null, ...m));
    }
  }
  function s(u) {
    if (typeof u != 'function')
      throw new TypeError('Expected `middelware` to be a function, not ' + u);
    return (n.push(u), i);
  }
}
function wk(n, i) {
  let l;
  return s;
  function s(...d) {
    const p = n.length > d.length;
    let h;
    p && d.push(u);
    try {
      h = n.apply(this, d);
    } catch (m) {
      const g = m;
      if (p && l) throw g;
      return u(g);
    }
    p ||
      (h && h.then && typeof h.then == 'function'
        ? h.then(c, u)
        : h instanceof Error
          ? u(h)
          : c(h));
  }
  function u(d, ...p) {
    l || ((l = !0), i(d, ...p));
  }
  function c(d) {
    u(null, d);
  }
}
const kn = { basename: Sk, dirname: _k, extname: Ck, join: Ek, sep: '/' };
function Sk(n, i) {
  if (i !== void 0 && typeof i != 'string') throw new TypeError('"ext" argument must be a string');
  Ji(n);
  let l = 0,
    s = -1,
    u = n.length,
    c;
  if (i === void 0 || i.length === 0 || i.length > n.length) {
    for (; u--; )
      if (n.codePointAt(u) === 47) {
        if (c) {
          l = u + 1;
          break;
        }
      } else s < 0 && ((c = !0), (s = u + 1));
    return s < 0 ? '' : n.slice(l, s);
  }
  if (i === n) return '';
  let d = -1,
    p = i.length - 1;
  for (; u--; )
    if (n.codePointAt(u) === 47) {
      if (c) {
        l = u + 1;
        break;
      }
    } else
      (d < 0 && ((c = !0), (d = u + 1)),
        p > -1 &&
          (n.codePointAt(u) === i.codePointAt(p--) ? p < 0 && (s = u) : ((p = -1), (s = d))));
  return (l === s ? (s = d) : s < 0 && (s = n.length), n.slice(l, s));
}
function _k(n) {
  if ((Ji(n), n.length === 0)) return '.';
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
function Ck(n) {
  Ji(n);
  let i = n.length,
    l = -1,
    s = 0,
    u = -1,
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
      p === 46 ? (u < 0 ? (u = i) : c !== 1 && (c = 1)) : u > -1 && (c = -1));
  }
  return u < 0 || l < 0 || c === 0 || (c === 1 && u === l - 1 && u === s + 1) ? '' : n.slice(u, l);
}
function Ek(...n) {
  let i = -1,
    l;
  for (; ++i < n.length; ) (Ji(n[i]), n[i] && (l = l === void 0 ? n[i] : l + '/' + n[i]));
  return l === void 0 ? '.' : bk(l);
}
function bk(n) {
  Ji(n);
  const i = n.codePointAt(0) === 47;
  let l = Nk(n, !i);
  return (
    l.length === 0 && !i && (l = '.'),
    l.length > 0 && n.codePointAt(n.length - 1) === 47 && (l += '/'),
    i ? '/' + l : l
  );
}
function Nk(n, i) {
  let l = '',
    s = 0,
    u = -1,
    c = 0,
    d = -1,
    p,
    h;
  for (; ++d <= n.length; ) {
    if (d < n.length) p = n.codePointAt(d);
    else {
      if (p === 47) break;
      p = 47;
    }
    if (p === 47) {
      if (!(u === d - 1 || c === 1))
        if (u !== d - 1 && c === 2) {
          if (
            l.length < 2 ||
            s !== 2 ||
            l.codePointAt(l.length - 1) !== 46 ||
            l.codePointAt(l.length - 2) !== 46
          ) {
            if (l.length > 2) {
              if (((h = l.lastIndexOf('/')), h !== l.length - 1)) {
                (h < 0
                  ? ((l = ''), (s = 0))
                  : ((l = l.slice(0, h)), (s = l.length - 1 - l.lastIndexOf('/'))),
                  (u = d),
                  (c = 0));
                continue;
              }
            } else if (l.length > 0) {
              ((l = ''), (s = 0), (u = d), (c = 0));
              continue;
            }
          }
          i && ((l = l.length > 0 ? l + '/..' : '..'), (s = 2));
        } else
          (l.length > 0 ? (l += '/' + n.slice(u + 1, d)) : (l = n.slice(u + 1, d)),
            (s = d - u - 1));
      ((u = d), (c = 0));
    } else p === 46 && c > -1 ? c++ : (c = -1);
  }
  return l;
}
function Ji(n) {
  if (typeof n != 'string')
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(n));
}
const Ik = { cwd: Tk };
function Tk() {
  return '/';
}
function Ga(n) {
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
function jk(n) {
  if (typeof n == 'string') n = new URL(n);
  else if (!Ga(n)) {
    const i = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + n + '`'
    );
    throw ((i.code = 'ERR_INVALID_ARG_TYPE'), i);
  }
  if (n.protocol !== 'file:') {
    const i = new TypeError('The URL must be of scheme file');
    throw ((i.code = 'ERR_INVALID_URL_SCHEME'), i);
  }
  return Lk(n);
}
function Lk(n) {
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
        const u = new TypeError('File URL path must not include encoded / characters');
        throw ((u.code = 'ERR_INVALID_FILE_URL_PATH'), u);
      }
    }
  return decodeURIComponent(i);
}
const Na = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
class Zp {
  constructor(i) {
    let l;
    (i
      ? Ga(i)
        ? (l = { path: i })
        : typeof i == 'string' || Pk(i)
          ? (l = { value: i })
          : (l = i)
      : (l = {}),
      (this.cwd = 'cwd' in l ? '' : Ik.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored);
    let s = -1;
    for (; ++s < Na.length; ) {
      const c = Na[s];
      c in l && l[c] !== void 0 && l[c] !== null && (this[c] = c === 'history' ? [...l[c]] : l[c]);
    }
    let u;
    for (u in l) Na.includes(u) || (this[u] = l[u]);
  }
  get basename() {
    return typeof this.path == 'string' ? kn.basename(this.path) : void 0;
  }
  set basename(i) {
    (Ta(i, 'basename'), Ia(i, 'basename'), (this.path = kn.join(this.dirname || '', i)));
  }
  get dirname() {
    return typeof this.path == 'string' ? kn.dirname(this.path) : void 0;
  }
  set dirname(i) {
    (Vf(this.basename, 'dirname'), (this.path = kn.join(i || '', this.basename)));
  }
  get extname() {
    return typeof this.path == 'string' ? kn.extname(this.path) : void 0;
  }
  set extname(i) {
    if ((Ia(i, 'extname'), Vf(this.dirname, 'extname'), i)) {
      if (i.codePointAt(0) !== 46) throw new Error('`extname` must start with `.`');
      if (i.includes('.', 1)) throw new Error('`extname` cannot contain multiple dots');
    }
    this.path = kn.join(this.dirname, this.stem + (i || ''));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(i) {
    (Ga(i) && (i = jk(i)), Ta(i, 'path'), this.path !== i && this.history.push(i));
  }
  get stem() {
    return typeof this.path == 'string' ? kn.basename(this.path, this.extname) : void 0;
  }
  set stem(i) {
    (Ta(i, 'stem'),
      Ia(i, 'stem'),
      (this.path = kn.join(this.dirname || '', i + (this.extname || ''))));
  }
  fail(i, l, s) {
    const u = this.message(i, l, s);
    throw ((u.fatal = !0), u);
  }
  info(i, l, s) {
    const u = this.message(i, l, s);
    return ((u.fatal = void 0), u);
  }
  message(i, l, s) {
    const u = new _t(i, l, s);
    return (
      this.path && ((u.name = this.path + ':' + u.name), (u.file = this.path)),
      (u.fatal = !1),
      this.messages.push(u),
      u
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
function Ia(n, i) {
  if (n && n.includes(kn.sep))
    throw new Error('`' + i + '` cannot be a path: did not expect `' + kn.sep + '`');
}
function Ta(n, i) {
  if (!n) throw new Error('`' + i + '` cannot be empty');
}
function Vf(n, i) {
  if (!n) throw new Error('Setting `' + i + '` requires `path` to be set too');
}
function Pk(n) {
  return !!(n && typeof n == 'object' && 'byteLength' in n && 'byteOffset' in n);
}
const Ok = function (n) {
    const s = this.constructor.prototype,
      u = s[n],
      c = function () {
        return u.apply(c, arguments);
      };
    return (Object.setPrototypeOf(c, s), c);
  },
  Rk = {}.hasOwnProperty;
class mu extends Ok {
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
      (this.transformers = xk()));
  }
  copy() {
    const i = new mu();
    let l = -1;
    for (; ++l < this.attachers.length; ) {
      const s = this.attachers[l];
      i.use(...s);
    }
    return (i.data(ba(!0, {}, this.namespace)), i);
  }
  data(i, l) {
    return typeof i == 'string'
      ? arguments.length === 2
        ? (Pa('data', this.frozen), (this.namespace[i] = l), this)
        : (Rk.call(this.namespace, i) && this.namespace[i]) || void 0
      : i
        ? (Pa('data', this.frozen), (this.namespace = i), this)
        : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const i = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [l, ...s] = this.attachers[this.freezeIndex];
      if (s[0] === !1) continue;
      s[0] === !0 && (s[0] = void 0);
      const u = l.call(i, ...s);
      typeof u == 'function' && this.transformers.use(u);
    }
    return ((this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this);
  }
  parse(i) {
    this.freeze();
    const l = ho(i),
      s = this.parser || this.Parser;
    return (ja('parse', s), s(String(l), l));
  }
  process(i, l) {
    const s = this;
    return (
      this.freeze(),
      ja('process', this.parser || this.Parser),
      La('process', this.compiler || this.Compiler),
      l ? u(void 0, l) : new Promise(u)
    );
    function u(c, d) {
      const p = ho(i),
        h = s.parse(p);
      s.run(h, p, function (g, k, w) {
        if (g || !k || !w) return m(g);
        const x = k,
          T = s.stringify(x, w);
        (Ak(T) ? (w.value = T) : (w.result = T), m(g, w));
      });
      function m(g, k) {
        g || !k ? d(g) : c ? c(k) : l(void 0, k);
      }
    }
  }
  processSync(i) {
    let l = !1,
      s;
    return (
      this.freeze(),
      ja('processSync', this.parser || this.Parser),
      La('processSync', this.compiler || this.Compiler),
      this.process(i, u),
      qf('processSync', 'process', l),
      s
    );
    function u(c, d) {
      ((l = !0), $f(c), (s = d));
    }
  }
  run(i, l, s) {
    (Wf(i), this.freeze());
    const u = this.transformers;
    return (
      !s && typeof l == 'function' && ((s = l), (l = void 0)),
      s ? c(void 0, s) : new Promise(c)
    );
    function c(d, p) {
      const h = ho(l);
      u.run(i, h, m);
      function m(g, k, w) {
        const x = k || i;
        g ? p(g) : d ? d(x) : s(void 0, x, w);
      }
    }
  }
  runSync(i, l) {
    let s = !1,
      u;
    return (this.run(i, l, c), qf('runSync', 'run', s), u);
    function c(d, p) {
      ($f(d), (u = p), (s = !0));
    }
  }
  stringify(i, l) {
    this.freeze();
    const s = ho(l),
      u = this.compiler || this.Compiler;
    return (La('stringify', u), Wf(i), u(i, s));
  }
  use(i, ...l) {
    const s = this.attachers,
      u = this.namespace;
    if ((Pa('use', this.frozen), i != null))
      if (typeof i == 'function') h(i, l);
      else if (typeof i == 'object') Array.isArray(i) ? p(i) : d(i);
      else throw new TypeError('Expected usable value, not `' + i + '`');
    return this;
    function c(m) {
      if (typeof m == 'function') h(m, []);
      else if (typeof m == 'object')
        if (Array.isArray(m)) {
          const [g, ...k] = m;
          h(g, k);
        } else d(m);
      else throw new TypeError('Expected usable value, not `' + m + '`');
    }
    function d(m) {
      if (!('plugins' in m) && !('settings' in m))
        throw new Error(
          'Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither'
        );
      (p(m.plugins), m.settings && (u.settings = ba(!0, u.settings, m.settings)));
    }
    function p(m) {
      let g = -1;
      if (m != null)
        if (Array.isArray(m))
          for (; ++g < m.length; ) {
            const k = m[g];
            c(k);
          }
        else throw new TypeError('Expected a list of plugins, not `' + m + '`');
    }
    function h(m, g) {
      let k = -1,
        w = -1;
      for (; ++k < s.length; )
        if (s[k][0] === m) {
          w = k;
          break;
        }
      if (w === -1) s.push([m, ...g]);
      else if (g.length > 0) {
        let [x, ...T] = g;
        const I = s[w][1];
        (Qa(I) && Qa(x) && (x = ba(!0, I, x)), (s[w] = [m, x, ...T]));
      }
    }
  }
}
const zk = new mu().freeze();
function ja(n, i) {
  if (typeof i != 'function') throw new TypeError('Cannot `' + n + '` without `parser`');
}
function La(n, i) {
  if (typeof i != 'function') throw new TypeError('Cannot `' + n + '` without `compiler`');
}
function Pa(n, i) {
  if (i)
    throw new Error(
      'Cannot call `' +
        n +
        '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.'
    );
}
function Wf(n) {
  if (!Qa(n) || typeof n.type != 'string') throw new TypeError('Expected node, got `' + n + '`');
}
function qf(n, i, l) {
  if (!l) throw new Error('`' + n + '` finished async. Use `' + i + '` instead');
}
function ho(n) {
  return Mk(n) ? n : new Zp(n);
}
function Mk(n) {
  return !!(n && typeof n == 'object' && 'message' in n && 'messages' in n);
}
function Ak(n) {
  return typeof n == 'string' || Dk(n);
}
function Dk(n) {
  return !!(n && typeof n == 'object' && 'byteLength' in n && 'byteOffset' in n);
}
const Fk = 'https://github.com/remarkjs/react-markdown/blob/main/changelog.md',
  Qf = [],
  Gf = { allowDangerousHtml: !0 },
  Bk = /^(https?|ircs?|mailto|xmpp)$/i,
  Uk = [
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
function el(n) {
  const i = $k(n),
    l = Hk(n);
  return Vk(i.runSync(i.parse(l), l), n);
}
function $k(n) {
  const i = n.rehypePlugins || Qf,
    l = n.remarkPlugins || Qf,
    s = n.remarkRehypeOptions ? { ...n.remarkRehypeOptions, ...Gf } : Gf;
  return zk().use(S0).use(l).use(yk, s).use(i);
}
function Hk(n) {
  const i = n.children || '',
    l = new Zp();
  return (typeof i == 'string' && (l.value = i), l);
}
function Vk(n, i) {
  const l = i.allowedElements,
    s = i.allowElement,
    u = i.components,
    c = i.disallowedElements,
    d = i.skipHtml,
    p = i.unwrapDisallowed,
    h = i.urlTransform || Wk;
  for (const g of Uk)
    Object.hasOwn(i, g.from) &&
      ('' + g.from + (g.to ? 'use `' + g.to + '` instead' : 'remove it') + Fk + g.id, void 0);
  return (
    Xp(n, m),
    t1(n, {
      Fragment: v.Fragment,
      components: u,
      ignoreInvalidStyle: !0,
      jsx: v.jsx,
      jsxs: v.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function m(g, k, w) {
    if (g.type === 'raw' && w && typeof k == 'number')
      return (d ? w.children.splice(k, 1) : (w.children[k] = { type: 'text', value: g.value }), k);
    if (g.type === 'element') {
      let x;
      for (x in Sa)
        if (Object.hasOwn(Sa, x) && Object.hasOwn(g.properties, x)) {
          const T = g.properties[x],
            I = Sa[x];
          (I === null || I.includes(g.tagName)) && (g.properties[x] = h(String(T || ''), x, g));
        }
    }
    if (g.type === 'element') {
      let x = l ? !l.includes(g.tagName) : c ? c.includes(g.tagName) : !1;
      if ((!x && s && typeof k == 'number' && (x = !s(g, k, w)), x && w && typeof k == 'number'))
        return (
          p && g.children ? w.children.splice(k, 1, ...g.children) : w.children.splice(k, 1),
          k
        );
    }
  }
}
function Wk(n) {
  const i = n.indexOf(':'),
    l = n.indexOf('?'),
    s = n.indexOf('#'),
    u = n.indexOf('/');
  return i === -1 ||
    (u !== -1 && i > u) ||
    (l !== -1 && i > l) ||
    (s !== -1 && i > s) ||
    Bk.test(n.slice(0, i))
    ? n
    : '';
}
const Er = ({ subtitle: n }) =>
  v.jsxs('header', {
    className: `header${n ? ' header-with-subtitle' : ''}`,
    children: [
      v.jsxs('div', {
        className: 'header-brand',
        children: [
          v.jsx('img', {
            src: '/quiz-demo/prototypes/all-credence/NewLogoSVG.svg',
            alt: 'Rethink Priorities',
            height: '24',
          }),
          v.jsx('span', { className: 'header-title', children: 'Donor Compass' }),
        ],
      }),
      n && v.jsx('div', { className: 'header-subtitle', children: n }),
    ],
  });
function or() {
  const n = W.useContext(yp);
  if (!n) throw new Error('useQuiz must be used within a QuizProvider');
  return n;
}
function Jp(n) {
  const [i, l] = W.useState(!1),
    [s, u, c] = n || [],
    d = s ? `${s}@${u}.${c}` : null,
    p = W.useCallback(
      (h) => {
        (h.preventDefault(),
          d && (navigator.clipboard.writeText(d), l(!0), setTimeout(() => l(!1), 2e3)));
      },
      [d]
    );
  return { email: d, copied: i, handleEmailClick: p };
}
function eh(n, i, l) {
  return !i || !n ? n : n.replace('{{EMAIL}}', `[${l ? 'Copied!' : i}](#copy-email)`);
}
function th(n, i) {
  return function ({ href: s, children: u }) {
    return s === '#copy-email'
      ? v.jsx('span', { onClick: n, className: i, children: u })
      : v.jsx('a', { href: s, target: '_blank', rel: 'noopener noreferrer', children: u });
  };
}
const qk = '_container_1ci9q_3',
  Qk = '_heading_1ci9q_8',
  Gk = '_content_1ci9q_16',
  Kk = '_emailCopy_1ci9q_56',
  mo = { container: qk, heading: Qk, content: Gk, emailCopy: Kk },
  Yk = {
    heading: "This is a prototype of Rethink Priorities's Donor Compass",
    content: `**Donor Compass helps you find the optimal distribution of donations across funds based on your values.** The tool asks for your personal preferences about things that matter when assessing different charitable projects – things like how much you weigh animal suffering or effects on the distant future – then calculates which funds best match those preferences. Importantly, it accounts for diminishing returns, so recommendations update as large amounts of money go into specific funds.

**This version is a prototype.** The funds, underlying data, and calculations in this version are placeholders meant to illustrate the type of behavior you can expect from the tool. All of these will change in future versions.

**What we're seeking feedback on:** The types of inputs and questions we ask, the general workflow and layout, and what changes would make this tool more useful for your decision making.

**Future iterations will include:**
- A usable version ready in early February 2026, including funds such as GiveWell Top Charities Fund, EA Animal Welfare Fund, and Longview Philanthropy Fund
- Detailed cost-effectiveness estimates for included funds
- Detailed explanations of all calculations
- Different methods for aggregating your inputs into recommended allocations
- A power user version that is more freely configurable

**Share your feedback:** Please email any thoughts, however brief, to {{EMAIL}}, [book a call](https://calendly.com/hayley-clatterbuck/30min) with Hayley Clatterbuck, or fill in [this form](https://forms.gle/kJmEqdGFaoKdPcKB7).

**Sign up** [**here**](https://mailchi.mp/4da0acddedce/rethink-priorities-donor-compass) if you'd like to get an email when the next version of this tool is ready.`,
    email: ['carmen', 'rethinkpriorities', 'org'],
    continueButton: 'Continue →',
  },
  Xk = {
    timeEstimate: '~3 minutes',
    headingLine1: 'Where Should Your',
    headingLine2: 'Giving Go?',
    intro:
      'Uncertain about your ethical views? This tool helps you allocate resources across different causes based on your moral credences—the probabilities you assign to different ethical perspectives.',
    startButton: 'Start Quiz →',
    previewLabel: "You'll be asked about:",
  },
  Zk = { back: '← Back', continue: 'Continue →', backToQuiz: '← Back to Quiz' },
  Jk = { modeToggle: { pickOne: 'Pick One', customMix: 'Custom Mix' } },
  ex = {
    heading: 'Recommended Allocations',
    budgetLabel: 'Total Budget',
    budgetInfo:
      'Future diminishing returns calculations will change depending on total money spent, not in this prototype',
    feedbackCard: `**Share your feedback:** Please email any thoughts, however brief, to {{EMAIL}}, [book a call](https://calendly.com/hayley-clatterbuck/30min) with Hayley Clatterbuck, or fill in [this form](https://forms.gle/kJmEqdGFaoKdPcKB7).

**Sign up** [**here**](https://mailchi.mp/4da0acddedce/rethink-priorities-donor-compass) if you'd like to get an email when the next version of this tool is ready.`,
    feedbackEmail: ['carmen', 'rethinkpriorities', 'org'],
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
  tx = {
    modifiedBadge: 'modified',
    sliderNote: 'Sliders auto-balance to 100%',
    resetButton: 'Reset',
  },
  nx = { lockTooltip: 'Lock slider', unlockTooltip: 'Unlock slider' },
  rx = {
    heading: 'Moral Marketplace',
    description: 'Combined allocation based on your worldviews',
    backButton: '← Back to Results',
    worldviewBreakdownHeading: 'Worldview Contributions',
    emptyState: 'Complete at least two worldviews to see combined results.',
    budgetLabel: 'Total Budget',
    settingsLabel: 'Allocation Mode',
    diminishingReturns: {
      none: 'Winner-take-all',
      sqrt: 'Balanced (default)',
      extreme: 'Near-equal',
    },
  },
  ix = {
    title: 'Switch Worldview',
    description:
      'Each worldview stores a separate set of quiz answers. Select a worldview to view or edit.',
    emptyLabel: '(empty)',
    currentLabel: '(current)',
    defaultName: 'Worldview',
  },
  Se = {
    disclaimer: Yk,
    welcome: Xk,
    navigation: Zk,
    questionScreen: Jk,
    results: ex,
    editPanel: tx,
    sliders: nx,
    marketplace: rx,
    worldviewModal: ix,
  };
function lx() {
  var d;
  const { goToStep: n } = or(),
    {
      email: i,
      copied: l,
      handleEmailClick: s,
    } = Jp((d = Se.disclaimer) == null ? void 0 : d.email),
    u = () => {
      n('welcome');
    },
    c = eh(Se.disclaimer.content, i, l);
  return v.jsxs('div', {
    className: 'screen',
    children: [
      v.jsx(Er, {}),
      v.jsx('main', {
        className: 'screen-main',
        children: v.jsxs('div', {
          className: mo.container,
          children: [
            v.jsx('h1', { className: mo.heading, children: Se.disclaimer.heading }),
            v.jsx('div', {
              className: mo.content,
              children: v.jsx(el, { components: { a: th(s, mo.emailCopy) }, children: c }),
            }),
            v.jsx('button', {
              onClick: u,
              className: 'btn btn-primary',
              children: Se.disclaimer.continueButton,
            }),
          ],
        }),
      }),
    ],
  });
}
const ox = {
  paw: Ag,
  hourglass: Rg,
  'bar-chart': bg,
  microscope: Mg,
  'heart-pulse': Og,
  banknote: _g,
  bird: Cg,
  shell: Bg,
  clock: Tg,
  dice: jg,
  'alert-triangle': Hg,
};
function nh({ name: n, size: i = 16, className: l = '' }) {
  const s = ox[n] || sp;
  return v.jsx(s, { size: i, className: l });
}
const sx = '_container_1eq83_3',
  ax = '_heading_1eq83_8',
  ux = '_headingEmphasis_1eq83_17',
  cx = '_intro_1eq83_22',
  dx = '_infoBox_1eq83_30',
  fx = '_infoBoxLabel_1eq83_38',
  px = '_infoBoxGrid_1eq83_45',
  hx = '_infoBoxItem_1eq83_52',
  rr = {
    container: sx,
    heading: ax,
    headingEmphasis: ux,
    intro: cx,
    infoBox: dx,
    infoBoxLabel: fx,
    infoBoxGrid: px,
    infoBoxItem: hx,
  };
function mx() {
  const { questionsConfig: n, startQuiz: i } = or(),
    l = n.filter((s) => s.type !== St.INTERMISSION);
  return v.jsxs('div', {
    className: 'screen',
    children: [
      v.jsx(Er, { subtitle: Se.welcome.timeEstimate }),
      v.jsx('main', {
        className: 'screen-main',
        children: v.jsxs('div', {
          className: rr.container,
          children: [
            v.jsxs('h1', {
              className: rr.heading,
              children: [
                Se.welcome.headingLine1,
                v.jsx('br', {}),
                v.jsx('span', { className: rr.headingEmphasis, children: Se.welcome.headingLine2 }),
              ],
            }),
            v.jsx('p', { className: rr.intro, children: Se.welcome.intro }),
            v.jsx('button', {
              onClick: i,
              className: 'btn btn-primary',
              children: Se.welcome.startButton,
            }),
            v.jsxs('div', {
              className: rr.infoBox,
              children: [
                v.jsx('div', { className: rr.infoBoxLabel, children: Se.welcome.previewLabel }),
                v.jsx('div', {
                  className: rr.infoBoxGrid,
                  children: l.map((s) =>
                    v.jsxs(
                      'div',
                      {
                        className: rr.infoBoxItem,
                        children: [v.jsx(nh, { name: s.icon, size: 16 }), ' ', s.previewText],
                      },
                      s.id
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
const tl = ({ percentage: n }) =>
    v.jsx('div', {
      className: 'progress-container',
      children: v.jsx('div', {
        className: 'progress-track',
        children: v.jsx('div', { className: 'progress-fill', style: { width: `${n}%` } }),
      }),
    }),
  gx = '_modeToggle_yn8i0_3',
  yx = '_button_yn8i0_10',
  vx = '_options_yn8i0_23',
  kx = '_active_yn8i0_29',
  xx = '_sliders_yn8i0_35',
  wr = { modeToggle: gx, button: yx, options: vx, active: kx, sliders: xx },
  wx = ({ mode: n, setMode: i }) =>
    v.jsxs('div', {
      className: wr.modeToggle,
      children: [
        v.jsx('button', {
          onClick: () => i('options'),
          className: `${wr.button} ${wr.options} ${n === 'options' ? wr.active : ''}`,
          children: Se.questionScreen.modeToggle.pickOne,
        }),
        v.jsxs('button', {
          onClick: () => i('sliders'),
          className: `${wr.button} ${wr.sliders} ${n === 'sliders' ? wr.active : ''}`,
          children: [v.jsx(Ug, { size: 14 }), Se.questionScreen.modeToggle.customMix],
        }),
      ],
    }),
  Sx = '_wrapper_hchpx_1',
  _x = '_trigger_hchpx_7',
  Cx = '_popover_hchpx_26',
  Ex = '_popoverVisible_hchpx_58',
  go = { wrapper: Sx, trigger: _x, popover: Cx, popoverVisible: Ex };
function nl({ content: n, size: i = 14 }) {
  const [l, s] = W.useState(!1),
    [u, c] = W.useState({ top: 0, left: 0 }),
    d = W.useRef(null),
    p = W.useRef(null),
    h = W.useRef(null),
    m = W.useCallback(() => {
      var A;
      if (!d.current) return;
      const w = d.current.getBoundingClientRect(),
        x = ((A = p.current) == null ? void 0 : A.offsetWidth) || 400,
        T = window.innerWidth,
        I = 16;
      let z = w.left + w.width / 2 - x / 2;
      const O = w.bottom + 8;
      (z < I ? (z = I) : z + x > T - I && (z = T - x - I), c({ top: O, left: z }));
    }, []);
  (W.useEffect(() => {
    if (!l) return;
    const w = (x) => {
      h.current && !h.current.contains(x.target) && s(!1);
    };
    return (
      document.addEventListener('mousedown', w),
      document.addEventListener('touchstart', w),
      () => {
        (document.removeEventListener('mousedown', w),
          document.removeEventListener('touchstart', w));
      }
    );
  }, [l]),
    W.useEffect(() => {
      l && m();
    }, [l, m]));
  const g = W.useCallback(() => {
      m();
    }, [m]),
    k = W.useCallback(
      (w) => {
        (w.preventDefault(), w.stopPropagation(), m(), s((x) => !x));
      },
      [m]
    );
  return n
    ? v.jsxs('span', {
        ref: h,
        className: go.wrapper,
        children: [
          v.jsx('button', {
            ref: d,
            type: 'button',
            className: go.trigger,
            onMouseEnter: g,
            onTouchStart: k,
            'aria-label': 'More information',
            children: v.jsx(zg, { size: i }),
          }),
          v.jsx('span', {
            ref: p,
            className: `${go.popover} ${l ? go.popoverVisible : ''}`,
            style: { top: u.top, left: u.left },
            children: v.jsx(el, {
              components: {
                a: ({ href: w, children: x }) =>
                  v.jsx('a', {
                    href: w,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    children: x,
                  }),
              },
              children: n,
            }),
          }),
        ],
      })
    : null;
}
const bx = '_optionButton_z7tsl_3',
  Nx = '_selected_z7tsl_20',
  Ix = '_content_z7tsl_36',
  Tx = '_textContent_z7tsl_42',
  jx = '_label_z7tsl_46',
  Lx = '_description_z7tsl_58',
  Px = '_checkmark_z7tsl_64',
  Pn = {
    optionButton: bx,
    default: '_default_z7tsl_15',
    selected: Nx,
    content: Ix,
    textContent: Tx,
    label: jx,
    description: Lx,
    checkmark: Px,
  };
function Ox({
  label: n,
  description: i,
  info: l,
  optionKey: s,
  credences: u,
  setCredences: c,
  color: d,
  setInputMode: p,
  setLockedKeys: h,
}) {
  const m = u[s] === 100,
    g = () => {
      const k = Object.fromEntries(Object.keys(u).map((w) => [w, w === s ? 100 : 0]));
      (c(k), p('options'), h && h([]));
    };
  return v.jsx('button', {
    onClick: g,
    className: `${Pn.optionButton} ${m ? Pn.selected : Pn.default}`,
    style: { '--option-color': d },
    children: v.jsxs('div', {
      className: Pn.content,
      children: [
        v.jsxs('div', {
          className: Pn.textContent,
          children: [
            v.jsxs('div', {
              className: `${Pn.label} ${m ? Pn.selected : ''}`,
              children: [n, v.jsx(nl, { content: l })],
            }),
            v.jsx('div', { className: Pn.description, children: i }),
          ],
        }),
        m && v.jsx('div', { className: Pn.checkmark, children: '✓' }),
      ],
    }),
  });
}
function rh({ credences: n, isLocked: i, lockedKeys: l, onChange: s }) {
  const [u, c] = W.useState(null),
    [d, p] = W.useState(!1),
    h = W.useCallback(() => {
      i || (p(!0), c({ ...n }));
    }, [i, n]),
    m = W.useCallback(
      (k) => {
        if (i || !d) return;
        p(!1);
        const w = parseFloat(k.target.value);
        (s(w, u, !0, l), c(null));
      },
      [i, d, u, l, s]
    ),
    g = W.useCallback(
      (k) => {
        if (i) return;
        const w = parseFloat(k.target.value);
        s(w, u, !1, l);
      },
      [i, u, l, s]
    );
  return {
    isDragging: d,
    dragHandlers: {
      onChange: g,
      onMouseDown: h,
      onMouseUp: m,
      onMouseLeave: m,
      onTouchStart: h,
      onTouchEnd: m,
    },
  };
}
function ih({ sliderKey: n, lockedKeys: i = [], credences: l }) {
  return W.useMemo(() => {
    var w;
    const s = Array.isArray(i) ? i : i ? [i] : [],
      u = s.includes(n),
      c = s.length > 0 && !u,
      d = c ? s.reduce((x, T) => x + (l[T] || 0), 0) : 0,
      p = c ? 100 - d : 100,
      h = c ? `calc(${p}% + ${(50 - p) * 0.16}px)` : null,
      k = Object.keys(l).length - s.length > 2;
    return {
      isLocked: u,
      hasLockedSibling: c,
      lockedValue: d,
      maxAllowed: p,
      thumbOffset: h,
      canLockMore: k,
      featureEnabled: ((w = Rn.ui) == null ? void 0 : w.sliderLock) === !0,
    };
  }, [n, i, l]);
}
const Rx = '_credenceSlider_1cwrq_4',
  zx = '_header_1cwrq_8',
  Mx = '_label_1cwrq_15',
  Ax = '_description_1cwrq_22',
  Dx = '_value_1cwrq_28',
  Fx = '_sliderRow_1cwrq_35',
  Bx = '_sliderContainer_1cwrq_41',
  Ux = '_lockLimit_1cwrq_46',
  $x = '_lockButton_1cwrq_55',
  Hx = '_locked_1cwrq_73',
  Vx = '_lockDisabled_1cwrq_78',
  Wx = '_compactSlider_1cwrq_100',
  qx = '_compactSelection_1cwrq_186',
  Qx = '_selected_1cwrq_204',
  Gx = '_selectionLabel_1cwrq_209',
  Kx = '_selectionIndicator_1cwrq_220',
  Ge = {
    credenceSlider: Rx,
    header: zx,
    label: Mx,
    description: Ax,
    value: Dx,
    sliderRow: Fx,
    sliderContainer: Bx,
    lockLimit: Ux,
    lockButton: $x,
    locked: Hx,
    lockDisabled: Vx,
    compactSlider: Wx,
    compactSelection: qx,
    selected: Qx,
    selectionLabel: Gx,
    selectionIndicator: Kx,
  };
function lh({
  label: n,
  description: i,
  info: l,
  value: s,
  onChange: u,
  color: c,
  credences: d,
  sliderKey: p,
  lockedKeys: h = [],
  setLockedKeys: m,
}) {
  const {
      isLocked: g,
      hasLockedSibling: k,
      thumbOffset: w,
      canLockMore: x,
      featureEnabled: T,
    } = ih({ sliderKey: p, lockedKeys: h, credences: d }),
    { isDragging: I, dragHandlers: z } = rh({
      credences: d,
      isLocked: g,
      lockedKeys: h,
      onChange: u,
    }),
    O = () => {
      T && (g ? m(h.filter((D) => D !== p)) : x && m([...h, p]));
    },
    A = k
      ? `linear-gradient(to right, ${c} 0%, ${c} ${s}%, rgba(255,255,255,0.15) ${s}%, rgba(255,255,255,0.15) ${w}, rgba(255,255,255,0.08) ${w}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${c} 0%, ${c} ${s}%, rgba(255,255,255,0.15) ${s}%, rgba(255,255,255,0.15) 100%)`;
  return v.jsxs('div', {
    className: Ge.credenceSlider,
    children: [
      v.jsxs('div', {
        className: Ge.header,
        children: [
          v.jsxs('div', {
            children: [
              v.jsxs('div', { className: Ge.label, children: [n, v.jsx(nl, { content: l })] }),
              v.jsx('div', { className: Ge.description, children: i }),
            ],
          }),
          v.jsxs('div', {
            className: Ge.value,
            style: { color: c },
            children: [Math.round(s), '%'],
          }),
        ],
      }),
      v.jsxs('div', {
        className: Ge.sliderRow,
        children: [
          v.jsxs('div', {
            className: Ge.sliderContainer,
            children: [
              v.jsx('input', {
                type: 'range',
                min: '0',
                max: '100',
                step: 'any',
                value: s,
                ...z,
                'data-dragging': I,
                disabled: g,
                style: { background: A, cursor: g ? 'not-allowed' : 'pointer' },
              }),
              k && v.jsx('div', { className: Ge.lockLimit, style: { left: w } }),
            ],
          }),
          T &&
            v.jsx('button', {
              className: `${Ge.lockButton} ${g ? Ge.locked : ''} ${!g && !x ? Ge.lockDisabled : ''}`,
              onClick: O,
              title: g ? Se.sliders.unlockTooltip : Se.sliders.lockTooltip,
              type: 'button',
              disabled: !g && !x,
              children: v.jsx(ap, { size: 16 }),
            }),
        ],
      }),
    ],
  });
}
const Yx = '_container_1dqc2_3',
  Xx = '_categoryLabel_1dqc2_8',
  Zx = '_heading_1dqc2_16',
  Jx = '_context_1dqc2_23',
  ew = '_instructions_1dqc2_52',
  tw = '_twoColumnLayout_1dqc2_60',
  nw = '_presetCard_1dqc2_66',
  rw = '_sliderCard_1dqc2_67',
  iw = '_cardTitle_1dqc2_74',
  lw = '_presetOption_1dqc2_84',
  ow = '_selected_1dqc2_101',
  sw = '_presetContent_1dqc2_111',
  aw = '_presetTextContent_1dqc2_117',
  uw = '_presetName_1dqc2_121',
  cw = '_presetDescription_1dqc2_133',
  dw = '_presetCheckmark_1dqc2_139',
  fw = '_customSeparator_1dqc2_154',
  pw = '_customSeparatorText_1dqc2_169',
  hw = '_sliderList_1dqc2_177',
  mw = '_sliderDisabled_1dqc2_183',
  gw = '_sliderReadOnlyNote_1dqc2_188',
  yw = '_buttonRow_1dqc2_197',
  Ae = {
    container: Yx,
    categoryLabel: Xx,
    heading: Zx,
    context: Jx,
    instructions: ew,
    twoColumnLayout: tw,
    presetCard: nw,
    sliderCard: rw,
    cardTitle: iw,
    presetOption: lw,
    selected: ow,
    presetContent: sw,
    presetTextContent: aw,
    presetName: uw,
    presetDescription: cw,
    presetCheckmark: dw,
    customSeparator: fw,
    customSeparatorText: pw,
    sliderList: hw,
    sliderDisabled: mw,
    sliderReadOnlyNote: gw,
    buttonRow: yw,
  },
  Sr = 'custom',
  vw = 300,
  Oa = 8;
function kw() {
  const {
      currentQuestion: n,
      stateMap: i,
      questionNumber: l,
      progressPercentage: s,
      goBack: u,
      goForward: c,
    } = or(),
    d = n ? i[n.id] : null,
    [p, h] = W.useState(null),
    m = W.useRef(null),
    g = W.useRef(null);
  if (
    (W.useEffect(
      () => () => {
        (m.current && clearTimeout(m.current), g.current && clearTimeout(g.current));
      },
      []
    ),
    !n || !d)
  )
    return null;
  const {
      credences: k,
      setCredences: w,
      lockedKeys: x,
      setLockedKeys: T,
      selectedPreset: I,
      setSelectedPreset: z,
    } = d,
    O = p || k,
    A = n.presets || [],
    D = I && I !== Sr,
    H = (B) => {
      (m.current && clearTimeout(m.current), g.current && clearTimeout(g.current));
      const ae = { ...k },
        ue = vw / Oa;
      let de = 0;
      const Z = () => {
        de++;
        const J = de / Oa,
          fe = 1 - Math.pow(1 - J, 3),
          te = {};
        for (const q of Object.keys(B)) {
          const ye = ae[q] || 0,
            ve = B[q] || 0;
          te[q] = Math.round(ye + (ve - ye) * fe);
        }
        de < Oa
          ? (h(te), (m.current = setTimeout(Z, ue)))
          : (h({ ...B }), w({ ...B }), (g.current = setTimeout(() => h(null), 50)));
      };
      (h(ae), (m.current = setTimeout(Z, ue)));
    },
    X = (B) => {
      if ((z(B), B !== Sr)) {
        const ae = A.find((ue) => ue.id === B);
        ae && H(ae.credences);
      }
      T && T([]);
    },
    R = (B, ae, ue, de, Z) => {
      if (D) return;
      I !== Sr && z(Sr);
      const fe = Ja(B, ae, ue || p || k, ue, Z),
        te = de ? eu(fe) : fe;
      (h(te),
        g.current && clearTimeout(g.current),
        de
          ? (w(te), (g.current = setTimeout(() => h(null), 50)))
          : (g.current = setTimeout(() => {
              w(te);
            }, 100)));
    };
  return v.jsxs('div', {
    className: 'screen',
    children: [
      v.jsx(Er, { subtitle: l }),
      v.jsx(tl, { percentage: s }),
      v.jsx('main', {
        className: 'screen-main',
        children: v.jsxs('div', {
          className: Ae.container,
          children: [
            v.jsx('div', {
              className: Ae.categoryLabel,
              style: { color: rp },
              children: n.categoryLabel,
            }),
            v.jsxs('h2', {
              className: Ae.heading,
              children: [n.heading, v.jsx(nl, { content: n.info })],
            }),
            n.context &&
              v.jsx('div', { className: Ae.context, children: v.jsx(el, { children: n.context }) }),
            v.jsx('p', {
              className: Ae.instructions,
              children:
                n.instructionsPreset ||
                'Select a preset or choose Custom to set your own credences.',
            }),
            v.jsxs('div', {
              className: Ae.twoColumnLayout,
              children: [
                v.jsxs('div', {
                  className: Ae.presetCard,
                  children: [
                    v.jsx('div', { className: Ae.cardTitle, children: 'Presets' }),
                    A.map((B) =>
                      v.jsx(
                        'button',
                        {
                          onClick: () => X(B.id),
                          className: `${Ae.presetOption} ${I === B.id ? Ae.selected : ''}`,
                          children: v.jsxs('div', {
                            className: Ae.presetContent,
                            children: [
                              v.jsxs('div', {
                                className: Ae.presetTextContent,
                                children: [
                                  v.jsx('div', { className: Ae.presetName, children: B.name }),
                                  v.jsx('div', {
                                    className: Ae.presetDescription,
                                    children: B.description,
                                  }),
                                ],
                              }),
                              I === B.id &&
                                v.jsx('div', { className: Ae.presetCheckmark, children: '✓' }),
                            ],
                          }),
                        },
                        B.id
                      )
                    ),
                    v.jsx('div', {
                      className: Ae.customSeparator,
                      children: v.jsx('span', {
                        className: Ae.customSeparatorText,
                        children: 'or',
                      }),
                    }),
                    v.jsx('button', {
                      onClick: () => X(Sr),
                      className: `${Ae.presetOption} ${I === Sr ? Ae.selected : ''}`,
                      children: v.jsxs('div', {
                        className: Ae.presetContent,
                        children: [
                          v.jsxs('div', {
                            className: Ae.presetTextContent,
                            children: [
                              v.jsx('div', { className: Ae.presetName, children: 'Custom' }),
                              v.jsx('div', {
                                className: Ae.presetDescription,
                                children: 'Set your own credences using the sliders',
                              }),
                            ],
                          }),
                          I === Sr &&
                            v.jsx('div', { className: Ae.presetCheckmark, children: '✓' }),
                        ],
                      }),
                    }),
                  ],
                }),
                v.jsxs('div', {
                  className: Ae.sliderCard,
                  children: [
                    v.jsx('div', { className: Ae.cardTitle, children: 'Your Credences' }),
                    v.jsx('div', {
                      className: `${Ae.sliderList} ${D ? Ae.sliderDisabled : ''}`,
                      children: n.options.map((B) =>
                        v.jsx(
                          lh,
                          {
                            label: B.label,
                            description: B.description,
                            info: B.info,
                            value: O[B.key],
                            onChange: (ae, ue, de, Z) => {
                              R(B.key, ae, ue, de, Z);
                            },
                            color: B.color,
                            credences: O,
                            sliderKey: B.key,
                            lockedKeys: x,
                            setLockedKeys: D ? () => {} : T,
                          },
                          B.key
                        )
                      ),
                    }),
                    D &&
                      v.jsx('div', {
                        className: Ae.sliderReadOnlyNote,
                        children: 'Select "Custom" to adjust sliders manually',
                      }),
                  ],
                }),
              ],
            }),
            v.jsxs('div', {
              className: Ae.buttonRow,
              children: [
                v.jsx('button', {
                  onClick: u,
                  className: 'btn btn-secondary',
                  children: Se.navigation.back,
                }),
                v.jsx('button', {
                  onClick: c,
                  className: 'btn btn-primary',
                  children: Se.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const xw = '_container_104c5_3',
  ww = '_categoryLabel_104c5_8',
  Sw = '_heading_104c5_16',
  _w = '_context_104c5_23',
  Cw = '_instructions_104c5_52',
  Ew = '_buttonRow_104c5_59',
  Zr = {
    container: xw,
    categoryLabel: ww,
    heading: Sw,
    context: _w,
    instructions: Cw,
    buttonRow: Ew,
  };
function bw(n, i, l) {
  return n === St.SELECTION ? 'options' : n === St.CREDENCE ? 'sliders' : i;
}
function Nw() {
  const {
    currentQuestion: n,
    stateMap: i,
    questionNumber: l,
    progressPercentage: s,
    goBack: u,
    goForward: c,
  } = or();
  if (!n) return null;
  if (n.type === St.PRESET) return v.jsx(kw, {});
  const d = i[n.id];
  if (!d) return null;
  const {
      credences: p,
      setCredences: h,
      inputMode: m,
      setInputMode: g,
      lockedKeys: k,
      setLockedKeys: w,
    } = d,
    x = n.type || St.DEFAULT,
    T = x === St.DEFAULT,
    I = bw(x, m),
    O =
      x === St.SELECTION
        ? n.instructionsSelection || 'Choose the option that best represents your position.'
        : I === 'options'
          ? n.instructionsOptions
          : n.instructionsSliders;
  return v.jsxs('div', {
    className: 'screen',
    children: [
      v.jsx(Er, { subtitle: l }),
      v.jsx(tl, { percentage: s }),
      v.jsx('main', {
        className: 'screen-main',
        children: v.jsxs('div', {
          className: Zr.container,
          children: [
            v.jsx('div', {
              className: Zr.categoryLabel,
              style: { color: rp },
              children: n.categoryLabel,
            }),
            v.jsxs('h2', {
              className: Zr.heading,
              children: [n.heading, v.jsx(nl, { content: n.info })],
            }),
            n.context &&
              v.jsx('div', { className: Zr.context, children: v.jsx(el, { children: n.context }) }),
            v.jsx('p', { className: Zr.instructions, children: O }),
            T && v.jsx(wx, { mode: m, setMode: g }),
            v.jsx('div', {
              className: 'card',
              children:
                I === 'options'
                  ? n.options.map((A) =>
                      v.jsx(
                        Ox,
                        {
                          label: A.label,
                          description: A.description,
                          info: A.info,
                          optionKey: A.key,
                          credences: p,
                          setCredences: h,
                          color: A.color,
                          setInputMode: g,
                          setLockedKeys: w,
                        },
                        A.key
                      )
                    )
                  : n.options.map((A) =>
                      v.jsx(
                        lh,
                        {
                          label: A.label,
                          description: A.description,
                          info: A.info,
                          value: p[A.key],
                          onChange: (D, H, X, R) => {
                            const B = Ja(A.key, D, p, H, R);
                            h(X ? eu(B) : B);
                          },
                          color: A.color,
                          credences: p,
                          sliderKey: A.key,
                          lockedKeys: k,
                          setLockedKeys: w,
                        },
                        A.key
                      )
                    ),
            }),
            v.jsxs('div', {
              className: Zr.buttonRow,
              children: [
                v.jsx('button', {
                  onClick: u,
                  className: 'btn btn-secondary',
                  children: Se.navigation.back,
                }),
                v.jsx('button', {
                  onClick: c,
                  className: 'btn btn-primary',
                  children: Se.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const Iw = '_causeBar_1pclx_3',
  Tw = '_header_1pclx_7',
  jw = '_name_1pclx_15',
  Lw = '_dollarAmount_1pclx_19',
  Pw = '_percentage_1pclx_24',
  Ow = '_changeIndicator_1pclx_28',
  Rw = '_up_1pclx_32',
  zw = '_down_1pclx_36',
  Mw = '_barTrack_1pclx_40',
  Aw = '_barOriginal_1pclx_48',
  Dw = '_barFill_1pclx_54',
  Fw = '_barLabel_1pclx_63',
  Bw = '_compact_1pclx_70',
  qt = {
    causeBar: Iw,
    header: Tw,
    name: jw,
    dollarAmount: Lw,
    percentage: Pw,
    changeIndicator: Ow,
    up: Rw,
    down: zw,
    barTrack: Mw,
    barOriginal: Aw,
    barFill: Dw,
    barLabel: Fw,
    compact: Bw,
  };
function Uw(n) {
  if (n >= 1e6) {
    const i = n / 1e6;
    return `$${i % 1 === 0 ? i.toFixed(0) : i.toFixed(1)}M`;
  }
  return `$${n.toLocaleString()}`;
}
function $w(n, i) {
  const l = i * 0.005;
  return Math.round(n / l) * l;
}
const oh = ({
    name: n,
    percentage: i,
    color: l,
    originalPercentage: s = null,
    hasChanged: u = !1,
    simpleMode: c = !1,
    budget: d = null,
  }) => {
    const p = !c && u && s !== null && i !== s,
      h = p && i > s,
      m = d ? Uw($w((i / 100) * d, d)) : null;
    return v.jsxs('div', {
      className: `${qt.causeBar} ${c ? qt.compact : ''}`,
      children: [
        v.jsxs('div', {
          className: qt.header,
          children: [
            v.jsx('span', { className: qt.name, children: n }),
            m
              ? v.jsx('span', { className: qt.dollarAmount, children: m })
              : v.jsxs('span', {
                  className: qt.percentage,
                  style: { color: l },
                  children: [
                    i.toFixed(0),
                    '%',
                    p &&
                      v.jsx('span', {
                        className: `${qt.changeIndicator} ${h ? qt.up : qt.down}`,
                        children: h ? '↑' : '↓',
                      }),
                  ],
                }),
          ],
        }),
        v.jsxs('div', {
          className: qt.barTrack,
          children: [
            p &&
              v.jsx('div', { className: qt.barOriginal, style: { width: `${s}%`, background: l } }),
            v.jsx('div', {
              className: qt.barFill,
              style: { width: `${i}%`, background: l },
              children:
                i > 15 && v.jsxs('span', { className: qt.barLabel, children: [i.toFixed(0), '%'] }),
            }),
          ],
        }),
      ],
    });
  },
  Hw = { target: $g, parliament: Eg, handshake: Pg, scale: Fg };
function Vw({ name: n, size: i = 18, className: l = '' }) {
  const s = Hw[n] || sp;
  return v.jsx(s, { size: i, className: l });
}
const Ww = '_resultsContainer_jp7u2_3',
  qw = '_inner_jp7u2_11',
  Qw = '_resultsHeader_jp7u2_16',
  Gw = '_title_jp7u2_21',
  Kw = '_modifiedIndicator_jp7u2_27',
  Yw = '_budgetRow_jp7u2_38',
  Xw = '_resultsGrid_jp7u2_44',
  Zw = '_comparisonContainer_jp7u2_52',
  Jw = '_originalResults_jp7u2_59',
  eS = '_newResults_jp7u2_60',
  tS = '_comparisonDivider_jp7u2_95',
  nS = '_dividerLine_jp7u2_104',
  rS = '_dividerArrow_jp7u2_111',
  iS = '_compactCard_jp7u2_124',
  lS = '_cardHeader_jp7u2_128',
  oS = '_cardIcon_jp7u2_132',
  sS = '_cardTitle_jp7u2_138',
  aS = '_resultCard_jp7u2_142',
  uS = '_cardSubtitle_jp7u2_174',
  cS = '_cardFooter_jp7u2_180',
  dS = '_adjustPanel_jp7u2_188',
  fS = '_adjustHeader_jp7u2_196',
  pS = '_adjustTitle_jp7u2_203',
  hS = '_resetAllButton_jp7u2_209',
  mS = '_panelList_jp7u2_226',
  gS = '_backButtonContainer_jp7u2_232',
  yS = '_calculationSelect_jp7u2_278',
  vS = '_calculationSelectContainer_jp7u2_311',
  kS = '_singleResultCard_jp7u2_322',
  xS = '_sideLabel_jp7u2_333',
  wS = '_feedbackCard_jp7u2_349',
  SS = '_emailCopy_jp7u2_379',
  Ne = {
    resultsContainer: Ww,
    inner: qw,
    resultsHeader: Qw,
    title: Gw,
    modifiedIndicator: Kw,
    budgetRow: Yw,
    resultsGrid: Xw,
    comparisonContainer: Zw,
    originalResults: Jw,
    newResults: eS,
    comparisonDivider: tS,
    dividerLine: nS,
    dividerArrow: rS,
    compactCard: iS,
    cardHeader: lS,
    cardIcon: oS,
    cardTitle: sS,
    resultCard: aS,
    cardSubtitle: uS,
    cardFooter: cS,
    adjustPanel: dS,
    adjustHeader: fS,
    adjustTitle: pS,
    resetAllButton: hS,
    panelList: mS,
    backButtonContainer: gS,
    calculationSelect: yS,
    calculationSelectContainer: vS,
    singleResultCard: kS,
    sideLabel: xS,
    feedbackCard: wS,
    emailCopy: SS,
  };
function sh({
  methodKey: n,
  results: i,
  evs: l = null,
  originalResults: s = null,
  causeEntries: u,
  hasChanged: c = !1,
  simpleMode: d = !1,
  budget: p = null,
}) {
  const h = Se.results.methods[n],
    m = l
      ? `${h.footerLabel} ${u.map(([g, k]) => `${k.name.slice(0, 2)} ${l[g].toFixed(0)}`).join(' · ')}`
      : h.footerText;
  return v.jsxs('div', {
    className: `${Ne.resultCard} ${d ? Ne.compactCard : ''}`,
    children: [
      v.jsxs('div', {
        className: Ne.cardHeader,
        children: [
          v.jsx('div', { className: Ne.cardIcon, children: v.jsx(Vw, { name: h.icon, size: 18 }) }),
          v.jsxs('div', {
            children: [
              v.jsx('h3', { className: Ne.cardTitle, children: h.title }),
              !d && v.jsx('p', { className: Ne.cardSubtitle, children: h.subtitle }),
            ],
          }),
        ],
      }),
      u.map(([g, k]) =>
        v.jsx(
          oh,
          {
            name: k.name,
            percentage: i[g],
            originalPercentage: s == null ? void 0 : s[g],
            color: k.color,
            hasChanged: !d && c,
            simpleMode: d,
            budget: p,
          },
          g
        )
      ),
      !d && v.jsx('div', { className: Ne.cardFooter, children: m }),
    ],
  });
}
const _S = '_container_1tjs1_3',
  CS = '_title_1tjs1_8',
  ES = '_body_1tjs1_16',
  bS = '_buttonRow_1tjs1_25',
  yo = { container: _S, title: CS, body: ES, buttonRow: bS };
function NS() {
  var x;
  const {
    currentQuestion: n,
    questionNumber: i,
    progressPercentage: l,
    calculationResults: s,
    causesConfig: u,
    goBack: c,
    goForward: d,
    marketplaceBudget: p,
  } = or();
  if (!n) return null;
  const h = Object.entries(u),
    m = [
      { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
      { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
      { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
      { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
    ],
    g = ((x = Rn.calculations) == null ? void 0 : x.order) || [],
    w = [...m]
      .sort((T, I) => {
        const z = g.indexOf(T.key),
          O = g.indexOf(I.key);
        return z === -1 && O === -1 ? 0 : z === -1 ? 1 : O === -1 ? -1 : z - O;
      })
      .filter((T) => {
        var I;
        return ((I = Rn.calculations) == null ? void 0 : I[T.flag]) === !0;
      });
  return v.jsxs('div', {
    className: 'screen',
    children: [
      v.jsx(Er, { subtitle: i }),
      v.jsx(tl, { percentage: l }),
      v.jsx('main', {
        className: 'screen-main',
        children: v.jsxs('div', {
          className: yo.container,
          children: [
            v.jsx('h2', { className: yo.title, children: n.title }),
            v.jsx('p', { className: yo.body, children: n.body }),
            v.jsx('div', {
              className: Ne.resultsGrid,
              children: w.map((T) =>
                v.jsx(
                  sh,
                  {
                    methodKey: T.key,
                    results: s[T.key],
                    evs: T.hasEvs ? s[T.key].evs : null,
                    causeEntries: h,
                    budget: p,
                  },
                  T.key
                )
              ),
            }),
            v.jsxs('div', {
              className: yo.buttonRow,
              children: [
                v.jsx('button', {
                  onClick: c,
                  className: 'btn btn-secondary',
                  children: Se.navigation.back,
                }),
                v.jsx('button', {
                  onClick: d,
                  className: 'btn btn-primary',
                  children: Se.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function IS({
  label: n,
  value: i,
  onChange: l,
  color: s,
  credences: u,
  sliderKey: c,
  lockedKeys: d = [],
  setLockedKeys: p,
}) {
  const {
      isLocked: h,
      hasLockedSibling: m,
      thumbOffset: g,
      canLockMore: k,
      featureEnabled: w,
    } = ih({ sliderKey: c, lockedKeys: d, credences: u }),
    { isDragging: x, dragHandlers: T } = rh({
      credences: u,
      isLocked: h,
      lockedKeys: d,
      onChange: l,
    }),
    I = () => {
      w && (h ? p(d.filter((O) => O !== c)) : k && p([...d, c]));
    },
    z = m
      ? `linear-gradient(to right, ${s} 0%, ${s} ${i}%, rgba(255,255,255,0.15) ${i}%, rgba(255,255,255,0.15) ${g}, rgba(255,255,255,0.08) ${g}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${s} 0%, ${s} ${i}%, rgba(255,255,255,0.15) ${i}%, rgba(255,255,255,0.15) 100%)`;
  return v.jsxs('div', {
    className: Ge.compactSlider,
    children: [
      v.jsxs('div', {
        className: Ge.header,
        children: [
          v.jsx('span', { className: Ge.label, children: n }),
          v.jsxs('span', {
            className: Ge.value,
            style: { color: s },
            children: [Math.round(i), '%'],
          }),
        ],
      }),
      v.jsxs('div', {
        className: Ge.sliderRow,
        children: [
          v.jsxs('div', {
            className: Ge.sliderContainer,
            children: [
              v.jsx('input', {
                type: 'range',
                min: '0',
                max: '100',
                step: 'any',
                value: i,
                ...T,
                'data-dragging': x,
                disabled: h,
                style: { background: z, cursor: h ? 'not-allowed' : 'pointer' },
              }),
              m && v.jsx('div', { className: Ge.lockLimit, style: { left: g } }),
            ],
          }),
          w &&
            v.jsx('button', {
              className: `${Ge.lockButton} ${h ? Ge.locked : ''} ${!h && !k ? Ge.lockDisabled : ''}`,
              onClick: I,
              title: h ? Se.sliders.unlockTooltip : Se.sliders.lockTooltip,
              type: 'button',
              disabled: !h && !k,
              children: v.jsx(ap, { size: 14 }),
            }),
        ],
      }),
    ],
  });
}
function TS({ label: n, color: i, isSelected: l, onSelect: s }) {
  return v.jsxs('button', {
    type: 'button',
    onClick: s,
    className: `${Ge.compactSelection} ${l ? Ge.selected : ''}`,
    style: { '--selection-color': i },
    children: [
      v.jsx('span', { className: Ge.selectionLabel, children: n }),
      v.jsx('span', {
        className: Ge.selectionIndicator,
        style: { borderColor: l ? i : void 0, backgroundColor: l ? i : void 0 },
        children: l && v.jsx(op, { size: 12, strokeWidth: 3 }),
      }),
    ],
  });
}
const jS = '_editPanel_ln2er_3',
  LS = '_expanded_ln2er_11',
  PS = '_toggleButton_ln2er_16',
  OS = '_buttonContent_ln2er_33',
  RS = '_icon_ln2er_39',
  zS = '_title_ln2er_44',
  MS = '_modifiedBadge_ln2er_49',
  AS = '_chevron_ln2er_63',
  DS = '_content_ln2er_67',
  FS = '_footer_ln2er_72',
  BS = '_footerNote_ln2er_79',
  US = '_resetButton_ln2er_85',
  $S = '_selectionRow_ln2er_104',
  wt = {
    editPanel: jS,
    expanded: LS,
    toggleButton: PS,
    buttonContent: OS,
    icon: RS,
    title: zS,
    modifiedBadge: MS,
    chevron: AS,
    content: DS,
    footer: FS,
    footerNote: BS,
    resetButton: US,
    selectionRow: $S,
  },
  Kf = 'custom';
function HS({
  title: n,
  icon: i,
  credences: l,
  setCredences: s,
  originalCredences: u,
  configs: c,
  isExpanded: d,
  onToggle: p,
  lockedKeys: h = [],
  setLockedKeys: m,
  questionType: g = St.DEFAULT,
  selectedPreset: k,
  setSelectedPreset: w,
}) {
  const [x, T] = W.useState(null),
    I = W.useRef(null);
  W.useEffect(
    () => () => {
      I.current && clearTimeout(I.current);
    },
    []
  );
  const z = x || l,
    O = u && JSON.stringify(l) !== JSON.stringify(u),
    A = g === St.SELECTION,
    D = (X) => {
      const R = {};
      (c.forEach((B) => {
        R[B.key] = B.key === X ? 100 : 0;
      }),
        s(R));
    },
    H = (X) => {
      (X.stopPropagation(), s({ ...u }));
    };
  return v.jsxs('div', {
    className: `${wt.editPanel} ${d ? wt.expanded : ''}`,
    children: [
      v.jsxs('button', {
        onClick: p,
        className: wt.toggleButton,
        children: [
          v.jsxs('div', {
            className: wt.buttonContent,
            children: [
              v.jsx('span', { className: wt.icon, children: i }),
              v.jsx('span', { className: wt.title, children: n }),
              O &&
                v.jsx('span', {
                  className: wt.modifiedBadge,
                  children: Se.editPanel.modifiedBadge,
                }),
            ],
          }),
          v.jsx('span', {
            className: wt.chevron,
            children: d ? v.jsx(Ig, { size: 16 }) : v.jsx(Ng, { size: 16 }),
          }),
        ],
      }),
      d &&
        v.jsx('div', {
          className: wt.content,
          children: A
            ? v.jsxs(v.Fragment, {
                children: [
                  v.jsx('div', {
                    className: wt.selectionRow,
                    children: c.map((X) =>
                      v.jsx(
                        TS,
                        {
                          label: X.label,
                          color: X.color,
                          isSelected: l[X.key] === 100,
                          onSelect: () => D(X.key),
                        },
                        X.key
                      )
                    ),
                  }),
                  v.jsxs('div', {
                    className: wt.footer,
                    children: [
                      v.jsx('span', {
                        className: wt.footerNote,
                        children: Se.editPanel.selectionNote || 'Pick one option',
                      }),
                      O &&
                        v.jsxs('button', {
                          onClick: H,
                          className: wt.resetButton,
                          children: [v.jsx(Ra, { size: 10 }), ' ', Se.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              })
            : v.jsxs(v.Fragment, {
                children: [
                  c.map((X) =>
                    v.jsx(
                      IS,
                      {
                        label: X.label,
                        value: z[X.key],
                        onChange: (R, B, ae, ue) => {
                          const de = B || x || l,
                            Z = Ja(X.key, R, de, B, ue),
                            J = ae ? eu(Z) : Z;
                          (T(J),
                            w && k !== Kf && w(Kf),
                            I.current && clearTimeout(I.current),
                            ae
                              ? (s(J), (I.current = setTimeout(() => T(null), 50)))
                              : (I.current = setTimeout(() => {
                                  s(J);
                                }, 100)));
                        },
                        color: X.color,
                        credences: z,
                        sliderKey: X.key,
                        lockedKeys: h,
                        setLockedKeys: m,
                      },
                      X.key
                    )
                  ),
                  v.jsxs('div', {
                    className: wt.footer,
                    children: [
                      v.jsx('span', {
                        className: wt.footerNote,
                        children: Se.editPanel.sliderNote,
                      }),
                      O &&
                        v.jsxs('button', {
                          onClick: H,
                          className: wt.resetButton,
                          children: [v.jsx(Ra, { size: 10 }), ' ', Se.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              }),
        }),
    ],
  });
}
var Zf;
const VS = ((Zf = Rn.ui) == null ? void 0 : Zf.moralMarketplace) === !0,
  Jr = Se.worldviewModal;
function WS({
  worldviewIds: n,
  activeWorldviewId: i,
  hasProgressMap: l,
  worldviewNames: s,
  onSwitch: u,
  onClose: c,
  onMarketplace: d,
  onRename: p,
}) {
  const [h, m] = W.useState(null),
    [g, k] = W.useState('');
  Object.values(l).filter(Boolean).length;
  const w = VS,
    x = (A, D) => {
      (D.stopPropagation(), m(A), k((s == null ? void 0 : s[A]) || `${Jr.defaultName} ${A}`));
    },
    T = (A, D) => {
      D.stopPropagation();
      const H = g.trim();
      (H && p && p(A, H), m(null), k(''));
    },
    I = (A) => {
      (A.stopPropagation(), m(null), k(''));
    },
    z = (A, D) => {
      D.key === 'Enter' ? T(A, D) : D.key === 'Escape' && I(D);
    },
    O = (A) => (s == null ? void 0 : s[A]) || `${Jr.defaultName} ${A}`;
  return v.jsx('div', {
    className: nt.overlay,
    onClick: c,
    children: v.jsxs('div', {
      className: nt.modal,
      onClick: (A) => A.stopPropagation(),
      children: [
        v.jsx('h2', { className: nt.title, children: Jr.title }),
        v.jsx('p', { className: nt.message, children: Jr.description }),
        v.jsxs('div', {
          className: nt.buttons,
          children: [
            n.map((A) => {
              const D = A === i,
                H = l[A],
                X = h === A,
                R = O(A);
              return v.jsx(
                'div',
                {
                  className: nt.worldviewRow,
                  children: X
                    ? v.jsxs('div', {
                        className: nt.editRow,
                        onClick: (B) => B.stopPropagation(),
                        children: [
                          v.jsx('input', {
                            type: 'text',
                            value: g,
                            onChange: (B) => k(B.target.value),
                            onKeyDown: (B) => z(A, B),
                            className: nt.editInput,
                            autoFocus: !0,
                            maxLength: 30,
                          }),
                          v.jsx('button', {
                            onClick: (B) => T(A, B),
                            className: nt.iconButton,
                            title: 'Save',
                            children: v.jsx(op, { size: 16 }),
                          }),
                          v.jsx('button', {
                            onClick: I,
                            className: nt.iconButton,
                            title: 'Cancel',
                            children: v.jsx(Vg, { size: 16 }),
                          }),
                        ],
                      })
                    : v.jsxs(v.Fragment, {
                        children: [
                          v.jsxs('button', {
                            onClick: () => u(A),
                            className: `btn ${D ? 'btn-primary' : 'btn-secondary'} ${nt.button} ${nt.worldviewButton}`,
                            disabled: D,
                            children: [R, !H && ` ${Jr.emptyLabel}`, D && ` ${Jr.currentLabel}`],
                          }),
                          H &&
                            p &&
                            v.jsx('button', {
                              onClick: (B) => x(A, B),
                              className: nt.iconButton,
                              title: 'Rename',
                              children: v.jsx(Dg, { size: 14 }),
                            }),
                        ],
                      }),
                },
                A
              );
            }),
            w,
          ],
        }),
      ],
    }),
  });
}
const qS = '_description_bffzu_3',
  QS = '_emptyState_bffzu_9',
  GS = '_settingsRow_bffzu_17',
  KS = '_settingsLabel_bffzu_25',
  YS = '_budgetInputWrapper_bffzu_35',
  XS = '_currencyPrefix_bffzu_48',
  ZS = '_budgetInput_bffzu_35',
  JS = '_settingsSelect_bffzu_68',
  e_ = '_mainCard_bffzu_98',
  t_ = '_allocationItem_bffzu_103',
  n_ = '_allocationHeader_bffzu_107',
  r_ = '_causeName_bffzu_114',
  i_ = '_dollarAmount_bffzu_120',
  l_ = '_barTrack_bffzu_128',
  o_ = '_barFill_bffzu_135',
  s_ = '_barLabel_bffzu_144',
  a_ = '_breakdownSection_bffzu_150',
  u_ = '_breakdownHeading_bffzu_154',
  c_ = '_breakdownGrid_bffzu_161',
  d_ = '_worldviewCard_bffzu_167',
  f_ = '_worldviewHeader_bffzu_174',
  p_ = '_worldviewName_bffzu_183',
  h_ = '_worldviewShare_bffzu_188',
  Be = {
    description: qS,
    emptyState: QS,
    settingsRow: GS,
    settingsLabel: KS,
    budgetInputWrapper: YS,
    currencyPrefix: XS,
    budgetInput: ZS,
    settingsSelect: JS,
    mainCard: e_,
    allocationItem: t_,
    allocationHeader: n_,
    causeName: r_,
    dollarAmount: i_,
    barTrack: l_,
    barFill: o_,
    barLabel: s_,
    breakdownSection: a_,
    breakdownHeading: u_,
    breakdownGrid: c_,
    worldviewCard: d_,
    worldviewHeader: f_,
    worldviewName: p_,
    worldviewShare: h_,
  };
var Jf;
const Yf = ((Jf = Rn.ui) == null ? void 0 : Jf.multipleWorldviews) === !0;
function m_() {
  var Ft, Kt, ln;
  const {
      questionsConfig: n,
      causesConfig: i,
      stateMap: l,
      expandedPanel: s,
      setExpandedPanel: u,
      calculationResults: c,
      originalCalculationResults: d,
      hasChanged: p,
      resetToOriginal: h,
      resetQuiz: m,
      goBack: g,
      goToStep: k,
      worldviews: w,
      worldviewNames: x,
      activeWorldviewId: T,
      switchWorldview: I,
      worldviewIds: z,
      hasProgressMap: O,
      startQuiz: A,
      selectedCalculations: D,
      setSelectedCalculations: H,
      setWorldviewName: X,
      marketplaceBudget: R,
      setMarketplaceBudget: B,
    } = or(),
    ue = R ?? 1e7,
    [de, Z] = W.useState(ue.toLocaleString()),
    [J, fe] = W.useState(!1),
    [te, q] = W.useState(!1),
    [ye, ve] = W.useState(null),
    [G, ne] = W.useState(!1),
    { email: S, copied: N, handleEmailClick: F } = Jp(Se.results.feedbackEmail),
    C = Object.entries(i),
    pe = [
      { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
      { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
      { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
      { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
    ],
    Ce = ((Ft = Rn.calculations) == null ? void 0 : Ft.order) || [],
    be = [...pe]
      .sort((ge, Le) => {
        const Bt = Ce.indexOf(ge.key),
          Nt = Ce.indexOf(Le.key);
        return Bt === -1 && Nt === -1 ? 0 : Bt === -1 ? 1 : Nt === -1 ? -1 : Bt - Nt;
      })
      .filter((ge) => {
        var Le;
        return ((Le = Rn.calculations) == null ? void 0 : Le[ge.flag]) === !0;
      });
  W.useEffect(() => {
    if (be.length === 0) return;
    const ge = be[0].key,
      Le = D.left && be.some((Nt) => Nt.key === D.left),
      Bt = D.right && be.some((Nt) => Nt.key === D.right);
    (!Le || !Bt) && H({ left: Le ? D.left : ge, right: Bt ? D.right : ge });
  }, [be, D.left, D.right, H]);
  const Ee = (ge, Le) => {
      H({ [ge]: Le });
    },
    Pe = (ge) => {
      Z(ge.target.value);
    },
    We = () => {
      const ge = parseInt(de.replace(/[^0-9]/g, ''), 10);
      !isNaN(ge) && ge > 0 ? (B(ge), Z(ge.toLocaleString())) : Z(ue.toLocaleString());
    },
    bt = (ge) => {
      ge.key === 'Enter' && ge.target.blur();
    },
    zn = (ge) => {
      (ne(!1), I(ge), O[ge] || A());
    },
    ee = () => {
      (ne(!1), k('marketplace'));
    },
    ke = (ge) =>
      ge.options.map((Le) => ({
        key: Le.key,
        label: Le.panelLabel,
        short: Le.panelShort,
        color: Le.color,
      })),
    ft = n.filter((ge) => ge.type !== St.INTERMISSION),
    Je = (ge) =>
      v.jsx('select', {
        className: Ne.calculationSelect,
        value: D[ge] || '',
        onChange: (Le) => Ee(ge, Le.target.value),
        children: be.map((Le) =>
          v.jsx('option', { value: Le.key, children: Se.results.methods[Le.key].title }, Le.key)
        ),
      }),
    Dt = (ge, Le, Bt = !0) => {
      const Nt = D[Le],
        Sn = be.find((Y) => Y.key === Nt);
      if (!Sn) return null;
      const M = ge == null ? void 0 : ge[Sn.key];
      return M
        ? v.jsx(sh, {
            methodKey: Sn.key,
            results: M,
            evs: Sn.hasEvs ? M.evs : null,
            causeEntries: C,
            simpleMode: Bt,
            budget: ue,
          })
        : null;
    };
  return v.jsxs('div', {
    className: Ne.resultsContainer,
    children: [
      v.jsx(Er, {}),
      v.jsx(tl, { percentage: 100 }),
      v.jsxs('div', {
        className: Ne.inner,
        children: [
          v.jsx('div', {
            className: Ne.resultsHeader,
            children: v.jsxs('h1', {
              className: Ne.title,
              children: [
                Se.results.heading,
                Yf,
                p &&
                  v.jsx('span', {
                    className: Ne.modifiedIndicator,
                    children: Se.results.modifiedIndicator,
                  }),
              ],
            }),
          }),
          v.jsx('div', {
            className: Ne.budgetRow,
            children: v.jsxs('label', {
              className: Be.settingsLabel,
              children: [
                Se.results.budgetLabel,
                v.jsx(nl, { content: Se.results.budgetInfo }),
                v.jsxs('div', {
                  className: Be.budgetInputWrapper,
                  children: [
                    v.jsx('span', { className: Be.currencyPrefix, children: '$' }),
                    v.jsx('input', {
                      type: 'text',
                      value: de,
                      onChange: Pe,
                      onBlur: We,
                      onKeyDown: bt,
                      className: Be.budgetInput,
                    }),
                  ],
                }),
              ],
            }),
          }),
          v.jsx('div', {
            className: Ne.calculationSelectContainer,
            children: p
              ? v.jsxs('div', {
                  className: Ne.comparisonContainer,
                  children: [
                    v.jsxs('div', {
                      className: Ne.originalResults,
                      children: [
                        v.jsx('div', { className: Ne.sideLabel, children: 'Original' }),
                        Je('left'),
                        Dt(d, 'left'),
                      ],
                    }),
                    v.jsxs('div', {
                      className: Ne.comparisonDivider,
                      children: [
                        v.jsx('div', { className: Ne.dividerLine }),
                        v.jsx('div', { className: Ne.dividerArrow, children: '→' }),
                        v.jsx('div', { className: Ne.dividerLine }),
                      ],
                    }),
                    v.jsxs('div', {
                      className: Ne.newResults,
                      children: [
                        v.jsx('div', { className: Ne.sideLabel, children: 'Modified' }),
                        Je('right'),
                        Dt(c, 'right'),
                      ],
                    }),
                  ],
                })
              : v.jsxs(v.Fragment, {
                  children: [
                    Je('left'),
                    v.jsx('div', { className: Ne.singleResultCard, children: Dt(d || c, 'left') }),
                  ],
                }),
          }),
          v.jsxs('div', {
            className: Ne.adjustPanel,
            children: [
              v.jsxs('div', {
                className: Ne.adjustHeader,
                children: [
                  v.jsx('span', {
                    className: Ne.adjustTitle,
                    children: Se.results.adjustCredencesHeading,
                  }),
                  p &&
                    v.jsxs('button', {
                      onClick: h,
                      className: Ne.resetAllButton,
                      children: [v.jsx(Ra, { size: 10 }), ' ', Se.results.resetAllButton],
                    }),
                ],
              }),
              v.jsx('div', {
                className: Ne.panelList,
                children: ft.map((ge) => {
                  const Le = l[ge.id];
                  return Le
                    ? v.jsx(
                        HS,
                        {
                          title: ge.editPanelTitle,
                          icon: v.jsx(nh, { name: ge.icon, size: 16 }),
                          credences: Le.credences,
                          setCredences: Le.setCredences,
                          originalCredences: Le.originalCredences,
                          configs: ke(ge),
                          isExpanded: s === ge.id,
                          onToggle: () => u(s === ge.id ? null : ge.id),
                          lockedKeys: Le.lockedKeys,
                          setLockedKeys: Le.setLockedKeys,
                          questionType: ge.type,
                          selectedPreset: Le.selectedPreset,
                          setSelectedPreset: Le.setSelectedPreset,
                        },
                        ge.id
                      )
                    : null;
                }),
              }),
            ],
          }),
          v.jsxs('div', {
            className: Ne.backButtonContainer,
            children: [
              v.jsx('button', {
                onClick: g,
                className: 'btn btn-secondary',
                children: Se.navigation.backToQuiz,
              }),
              Yf,
              (Kt = Rn.ui) == null ? void 0 : Kt.shareResults,
              (ln = Rn.ui) == null ? void 0 : ln.resetButton,
            ],
          }),
          v.jsx('div', {
            className: Ne.feedbackCard,
            children: v.jsx(el, {
              components: { a: th(F, Ne.emailCopy) },
              children: eh(Se.results.feedbackCard, S, N),
            }),
          }),
        ],
      }),
      G &&
        v.jsx(WS, {
          worldviewIds: z,
          activeWorldviewId: T,
          hasProgressMap: O,
          worldviewNames: x,
          onSwitch: zn,
          onClose: () => ne(!1),
          onMarketplace: ee,
          onRename: X,
        }),
    ],
  });
}
const g_ = Yi.diminishingReturns;
function Xf(n) {
  if (n >= 1e6) {
    const i = n / 1e6;
    return `$${i % 1 === 0 ? i.toFixed(0) : i.toFixed(1)}M`;
  }
  return `$${n.toLocaleString()}`;
}
function y_(n, i) {
  const l = i * 0.005;
  return Math.round(n / l) * l;
}
function v_() {
  const {
      worldviews: n,
      worldviewNames: i,
      worldviewIds: l,
      hasProgressMap: s,
      goToStep: u,
      questionsConfig: c,
      marketplaceBudget: d,
      setMarketplaceBudget: p,
    } = or(),
    [h, m] = W.useState(g_),
    [g, k] = W.useState(d.toLocaleString()),
    w = Object.entries(_r),
    x = (H) => {
      k(H.target.value);
    },
    T = () => {
      const H = parseInt(g.replace(/[^0-9]/g, ''), 10);
      !isNaN(H) && H > 0 ? (p(H), k(H.toLocaleString())) : k(d.toLocaleString());
    },
    I = (H) => {
      H.key === 'Enter' && H.target.blur();
    },
    z = l
      .filter((H) => s[H])
      .map((H) => {
        const X = n[H],
          R = {};
        for (const [ae, ue] of Object.entries(X.questions)) R[ae] = ue.credences;
        const B = my(R, { causes: _r, dimensions: k_(c) });
        return { id: H, name: (i == null ? void 0 : i[H]) || `Worldview ${H}`, evs: B };
      }),
    O = z.length >= 2,
    A = O ? gy(z, { diminishingReturns: h }) : null,
    D = () => {
      u('results');
    };
  return v.jsxs('div', {
    className: Ne.resultsContainer,
    children: [
      v.jsx(Er, {}),
      v.jsx(tl, { percentage: 100 }),
      v.jsxs('div', {
        className: Ne.inner,
        children: [
          v.jsxs('div', {
            className: Ne.resultsHeader,
            children: [
              v.jsx('h1', { className: Ne.title, children: Se.marketplace.heading }),
              v.jsx('p', { className: Be.description, children: Se.marketplace.description }),
            ],
          }),
          O
            ? v.jsxs(v.Fragment, {
                children: [
                  v.jsxs('div', {
                    className: Be.settingsRow,
                    children: [
                      v.jsxs('label', {
                        className: Be.settingsLabel,
                        children: [
                          Se.marketplace.budgetLabel,
                          v.jsxs('div', {
                            className: Be.budgetInputWrapper,
                            children: [
                              v.jsx('span', { className: Be.currencyPrefix, children: '$' }),
                              v.jsx('input', {
                                type: 'text',
                                value: g,
                                onChange: x,
                                onBlur: T,
                                onKeyDown: I,
                                className: Be.budgetInput,
                              }),
                            ],
                          }),
                        ],
                      }),
                      v.jsxs('label', {
                        className: Be.settingsLabel,
                        children: [
                          Se.marketplace.settingsLabel,
                          v.jsx('select', {
                            value: h,
                            onChange: (H) => m(H.target.value),
                            className: Be.settingsSelect,
                            children: Object.keys(xo).map((H) =>
                              v.jsx(
                                'option',
                                { value: H, children: Se.marketplace.diminishingReturns[H] },
                                H
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  v.jsxs('div', {
                    className: `${Ne.resultCard} ${Be.mainCard}`,
                    children: [
                      v.jsx('div', {
                        className: Ne.cardHeader,
                        children: v.jsxs('div', {
                          children: [
                            v.jsx('h3', {
                              className: Ne.cardTitle,
                              children: 'Combined Allocation',
                            }),
                            v.jsxs('p', {
                              className: Ne.cardSubtitle,
                              children: [
                                'Based on ',
                                z.length,
                                ' worldviews •',
                                ' ',
                                Xf(d),
                                ' total',
                              ],
                            }),
                          ],
                        }),
                      }),
                      w.map(([H, X]) => {
                        const R = A.allocation[H],
                          B = y_((R / 100) * d, d);
                        return v.jsxs(
                          'div',
                          {
                            className: Be.allocationItem,
                            children: [
                              v.jsxs('div', {
                                className: Be.allocationHeader,
                                children: [
                                  v.jsx('span', { className: Be.causeName, children: X.name }),
                                  v.jsx('span', { className: Be.dollarAmount, children: Xf(B) }),
                                ],
                              }),
                              v.jsx('div', {
                                className: Be.barTrack,
                                children: v.jsx('div', {
                                  className: Be.barFill,
                                  style: { width: `${R}%`, background: X.color },
                                  children:
                                    R > 15 &&
                                    v.jsxs('span', {
                                      className: Be.barLabel,
                                      children: [R.toFixed(0), '%'],
                                    }),
                                }),
                              }),
                            ],
                          },
                          H
                        );
                      }),
                    ],
                  }),
                  v.jsxs('div', {
                    className: Be.breakdownSection,
                    children: [
                      v.jsx('h2', {
                        className: Be.breakdownHeading,
                        children: Se.marketplace.worldviewBreakdownHeading,
                      }),
                      v.jsx('div', {
                        className: Be.breakdownGrid,
                        children: A.worldviewAllocations.map((H, X) =>
                          v.jsxs(
                            'div',
                            {
                              className: Be.worldviewCard,
                              children: [
                                v.jsxs('div', {
                                  className: Be.worldviewHeader,
                                  children: [
                                    v.jsx('span', {
                                      className: Be.worldviewName,
                                      children: H.name,
                                    }),
                                    v.jsxs('span', {
                                      className: Be.worldviewShare,
                                      children: [H.share.toFixed(0), '% budget'],
                                    }),
                                  ],
                                }),
                                w.map(([R, B]) => {
                                  const ae = H.share > 0 ? (H.allocation[R] / H.share) * 100 : 0;
                                  return v.jsx(
                                    oh,
                                    {
                                      name: B.name,
                                      percentage: ae,
                                      color: B.color,
                                      simpleMode: !0,
                                    },
                                    R
                                  );
                                }),
                              ],
                            },
                            z[X].id
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              })
            : v.jsx('div', {
                className: Be.emptyState,
                children: v.jsx('p', { children: Se.marketplace.emptyState }),
              }),
          v.jsx('div', {
            className: Ne.backButtonContainer,
            children: v.jsx('button', {
              onClick: D,
              className: 'btn btn-secondary',
              children: Se.marketplace.backButton,
            }),
          }),
        ],
      }),
    ],
  });
}
function k_(n) {
  return Object.fromEntries(
    n
      .filter((i) => i.type !== 'intermission' && i.worldviewDimension)
      .map((i) => [i.id, i.worldviewDimension])
  );
}
const x_ = '_debugButton_1d82z_4',
  w_ = '_overlay_1d82z_28',
  S_ = '_modal_1d82z_41',
  __ = '_header_1d82z_52',
  C_ = '_warning_1d82z_66',
  E_ = '_closeButton_1d82z_72',
  b_ = '_content_1d82z_85',
  N_ = '_section_1d82z_91',
  I_ = '_causeBlock_1d82z_105',
  T_ = '_fieldRow_1d82z_118',
  j_ = '_checkboxRow_1d82z_142',
  L_ = '_multiplierGroup_1d82z_161',
  P_ = '_dimInfo_1d82z_171',
  O_ = '_multiplierRow_1d82z_178',
  R_ = '_footer_1d82z_202',
  z_ = '_saveButton_1d82z_209',
  it = {
    debugButton: x_,
    overlay: w_,
    modal: S_,
    header: __,
    warning: C_,
    closeButton: E_,
    content: b_,
    section: N_,
    causeBlock: I_,
    fieldRow: T_,
    checkboxRow: j_,
    multiplierGroup: L_,
    dimInfo: P_,
    multiplierRow: O_,
    footer: R_,
    saveButton: z_,
  },
  { causes: M_, diminishingReturns: A_ } = Yi,
  D_ = cp(!0),
  F_ = ({ onConfigChange: n }) => {
    const [i, l] = W.useState(!1),
      [s, u] = W.useState({
        causes: JSON.parse(JSON.stringify(M_)),
        dimensions: JSON.parse(JSON.stringify(D_)),
        diminishingReturns: A_,
      }),
      c = (h, m, g) => {
        u((k) => ({
          ...k,
          causes: {
            ...k.causes,
            [h]: {
              ...k.causes[h],
              [m]: m === 'name' || m === 'color' || typeof g == 'boolean' ? g : Number(g),
            },
          },
        }));
      },
      d = (h, m, g) => {
        u((k) => ({
          ...k,
          dimensions: {
            ...k.dimensions,
            [h]: { ...k.dimensions[h], options: { ...k.dimensions[h].options, [m]: Number(g) } },
          },
        }));
      },
      p = () => {
        (n(s), l(!1));
      };
    return v.jsxs(v.Fragment, {
      children: [
        v.jsx('button', {
          className: it.debugButton,
          onClick: () => l(!0),
          title: 'Debug Settings',
          children: 'Settings',
        }),
        i &&
          v.jsx('div', {
            className: it.overlay,
            onClick: () => l(!1),
            children: v.jsxs('div', {
              className: it.modal,
              onClick: (h) => h.stopPropagation(),
              children: [
                v.jsxs('div', {
                  className: it.header,
                  children: [
                    v.jsxs('div', {
                      children: [
                        v.jsx('h2', { children: 'Calculation Debugger' }),
                        v.jsx('p', {
                          className: it.warning,
                          children: 'For advanced users only, may break webapp',
                        }),
                      ],
                    }),
                    v.jsx('button', {
                      className: it.closeButton,
                      onClick: () => l(!1),
                      children: 'x',
                    }),
                  ],
                }),
                v.jsxs('div', {
                  className: it.content,
                  children: [
                    v.jsxs('section', {
                      className: it.section,
                      children: [
                        v.jsx('h3', { children: 'DIMINISHING RETURNS' }),
                        v.jsx('div', {
                          className: it.fieldRow,
                          children: v.jsxs('label', {
                            children: [
                              'Mode:',
                              v.jsx('select', {
                                value: s.diminishingReturns,
                                onChange: (h) =>
                                  u((m) => ({ ...m, diminishingReturns: h.target.value })),
                                children: Object.keys(xo).map((h) =>
                                  v.jsxs(
                                    'option',
                                    { value: h, children: [h, ' (power = ', xo[h], ')'] },
                                    h
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                        v.jsx('p', {
                          className: it.dimInfo,
                          children:
                            'none = winner-take-all · sqrt = moderate spreading · extreme = near-equal',
                        }),
                      ],
                    }),
                    v.jsxs('section', {
                      className: it.section,
                      children: [
                        v.jsx('h3', { children: 'CAUSES' }),
                        Object.entries(s.causes).map(([h, m]) =>
                          v.jsxs(
                            'div',
                            {
                              className: it.causeBlock,
                              children: [
                                v.jsx('h4', { children: m.name }),
                                v.jsxs('div', {
                                  className: it.fieldRow,
                                  children: [
                                    v.jsxs('label', {
                                      children: [
                                        'Points:',
                                        v.jsx('input', {
                                          type: 'number',
                                          value: m.points,
                                          onChange: (g) => c(h, 'points', g.target.value),
                                        }),
                                      ],
                                    }),
                                    v.jsxs('label', {
                                      children: [
                                        'Scale Factor:',
                                        v.jsx('input', {
                                          type: 'number',
                                          value: m.scaleFactor,
                                          onChange: (g) => c(h, 'scaleFactor', g.target.value),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                v.jsxs('div', {
                                  className: it.checkboxRow,
                                  children: [
                                    v.jsxs('label', {
                                      children: [
                                        v.jsx('input', {
                                          type: 'checkbox',
                                          checked: m.helpsAnimals,
                                          onChange: (g) => c(h, 'helpsAnimals', g.target.checked),
                                        }),
                                        'Helps Animals',
                                      ],
                                    }),
                                    v.jsxs('label', {
                                      children: [
                                        v.jsx('input', {
                                          type: 'checkbox',
                                          checked: m.helpsFutureHumans,
                                          onChange: (g) =>
                                            c(h, 'helpsFutureHumans', g.target.checked),
                                        }),
                                        'Helps Future Humans',
                                      ],
                                    }),
                                    v.jsxs('label', {
                                      children: [
                                        v.jsx('input', {
                                          type: 'checkbox',
                                          checked: m.isSpeculative,
                                          onChange: (g) => c(h, 'isSpeculative', g.target.checked),
                                        }),
                                        'Is Speculative',
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            h
                          )
                        ),
                      ],
                    }),
                    v.jsxs('section', {
                      className: it.section,
                      children: [
                        v.jsx('h3', { children: 'DIMENSIONS (from questions)' }),
                        Object.entries(s.dimensions).map(([h, m]) =>
                          v.jsxs(
                            'div',
                            {
                              className: it.multiplierGroup,
                              children: [
                                v.jsx('h4', { children: m.name }),
                                v.jsx('p', {
                                  className: it.dimInfo,
                                  children:
                                    m.applyAs === 'multiplier'
                                      ? `Multiplier when: ${m.appliesWhen}`
                                      : `Exponent on: ${m.appliesTo}`,
                                }),
                                v.jsx('div', {
                                  className: it.multiplierRow,
                                  children: Object.entries(m.options).map(([g, k]) =>
                                    v.jsxs(
                                      'label',
                                      {
                                        children: [
                                          g,
                                          ':',
                                          v.jsx('input', {
                                            type: 'number',
                                            step: m.applyAs === 'exponent' ? '0.1' : '0.01',
                                            value: k,
                                            onChange: (w) => d(h, g, w.target.value),
                                          }),
                                        ],
                                      },
                                      g
                                    )
                                  ),
                                }),
                              ],
                            },
                            h
                          )
                        ),
                      ],
                    }),
                  ],
                }),
                v.jsx('div', {
                  className: it.footer,
                  children: v.jsx('button', {
                    className: it.saveButton,
                    onClick: p,
                    children: 'Save',
                  }),
                }),
              ],
            }),
          }),
      ],
    });
  },
  B_ = {
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
function U_() {
  const {
    currentStep: n,
    currentQuestion: i,
    setDebugConfig: l,
    shareUrlError: s,
    isHydrating: u,
  } = or();
  if (u) return null;
  function c() {
    return n === 'disclaimer'
      ? v.jsx(lx, {})
      : n === 'welcome'
        ? v.jsx(mx, {})
        : n === 'results'
          ? v.jsx(m_, {})
          : n === 'marketplace'
            ? v.jsx(v_, {})
            : i
              ? i.type === St.INTERMISSION
                ? v.jsx(NS, {})
                : v.jsx(Nw, {})
              : null;
  }
  return v.jsxs(v.Fragment, {
    children: [
      s && v.jsx('div', { style: B_, children: s }),
      c(),
      v.jsx(F_, { onConfigChange: l }),
    ],
  });
}
function $_() {
  return v.jsx(by, { children: v.jsx(U_, {}) });
}
cg.createRoot(document.getElementById('root')).render(
  v.jsx(W.StrictMode, { children: v.jsx($_, {}) })
);
