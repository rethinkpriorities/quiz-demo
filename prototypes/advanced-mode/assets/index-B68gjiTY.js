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
function sp(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
}
var da = { exports: {} },
  qi = {},
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
 */ var sf;
function sg() {
  if (sf) return je;
  sf = 1;
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
    w = Symbol.iterator;
  function x(N) {
    return N === null || typeof N != 'object'
      ? null
      : ((N = (w && N[w]) || N['@@iterator']), typeof N == 'function' ? N : null);
  }
  var k = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    I = Object.assign,
    T = {};
  function O(N, B, _) {
    ((this.props = N), (this.context = B), (this.refs = T), (this.updater = _ || k));
  }
  ((O.prototype.isReactComponent = {}),
    (O.prototype.setState = function (N, B) {
      if (typeof N != 'object' && typeof N != 'function' && N != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, N, B, 'setState');
    }),
    (O.prototype.forceUpdate = function (N) {
      this.updater.enqueueForceUpdate(this, N, 'forceUpdate');
    }));
  function P() {}
  P.prototype = O.prototype;
  function F(N, B, _) {
    ((this.props = N), (this.context = B), (this.refs = T), (this.updater = _ || k));
  }
  var M = (F.prototype = new P());
  ((M.constructor = F), I(M, O.prototype), (M.isPureReactComponent = !0));
  var te = Array.isArray,
    ne = Object.prototype.hasOwnProperty,
    A = { current: null },
    V = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ue(N, B, _) {
    var ge,
      ke = {},
      ye = null,
      Ee = null;
    if (B != null)
      for (ge in (B.ref !== void 0 && (Ee = B.ref), B.key !== void 0 && (ye = '' + B.key), B))
        ne.call(B, ge) && !V.hasOwnProperty(ge) && (ke[ge] = B[ge]);
    var be = arguments.length - 2;
    if (be === 1) ke.children = _;
    else if (1 < be) {
      for (var Ne = Array(be), qe = 0; qe < be; qe++) Ne[qe] = arguments[qe + 2];
      ke.children = Ne;
    }
    if (N && N.defaultProps)
      for (ge in ((be = N.defaultProps), be)) ke[ge] === void 0 && (ke[ge] = be[ge]);
    return { $$typeof: n, type: N, key: ye, ref: Ee, props: ke, _owner: A.current };
  }
  function ae(N, B) {
    return { $$typeof: n, type: N.type, key: B, ref: N.ref, props: N.props, _owner: N._owner };
  }
  function de(N) {
    return typeof N == 'object' && N !== null && N.$$typeof === n;
  }
  function Z(N) {
    var B = { '=': '=0', ':': '=2' };
    return (
      '$' +
      N.replace(/[=:]/g, function (_) {
        return B[_];
      })
    );
  }
  var W = /\/+/g;
  function pe(N, B) {
    return typeof N == 'object' && N !== null && N.key != null ? Z('' + N.key) : B.toString(36);
  }
  function H(N, B, _, ge, ke) {
    var ye = typeof N;
    (ye === 'undefined' || ye === 'boolean') && (N = null);
    var Ee = !1;
    if (N === null) Ee = !0;
    else
      switch (ye) {
        case 'string':
        case 'number':
          Ee = !0;
          break;
        case 'object':
          switch (N.$$typeof) {
            case n:
            case i:
              Ee = !0;
          }
      }
    if (Ee)
      return (
        (Ee = N),
        (ke = ke(Ee)),
        (N = ge === '' ? '.' + pe(Ee, 0) : ge),
        te(ke)
          ? ((_ = ''),
            N != null && (_ = N.replace(W, '$&/') + '/'),
            H(ke, B, _, '', function (qe) {
              return qe;
            }))
          : ke != null &&
            (de(ke) &&
              (ke = ae(
                ke,
                _ +
                  (!ke.key || (Ee && Ee.key === ke.key)
                    ? ''
                    : ('' + ke.key).replace(W, '$&/') + '/') +
                  N
              )),
            B.push(ke)),
        1
      );
    if (((Ee = 0), (ge = ge === '' ? '.' : ge + ':'), te(N)))
      for (var be = 0; be < N.length; be++) {
        ye = N[be];
        var Ne = ge + pe(ye, be);
        Ee += H(ye, B, _, Ne, ke);
      }
    else if (((Ne = x(N)), typeof Ne == 'function'))
      for (N = Ne.call(N), be = 0; !(ye = N.next()).done; )
        ((ye = ye.value), (Ne = ge + pe(ye, be++)), (Ee += H(ye, B, _, Ne, ke)));
    else if (ye === 'object')
      throw (
        (B = String(N)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (B === '[object Object]' ? 'object with keys {' + Object.keys(N).join(', ') + '}' : B) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return Ee;
  }
  function q(N, B, _) {
    if (N == null) return N;
    var ge = [],
      ke = 0;
    return (
      H(N, ge, '', '', function (ye) {
        return B.call(_, ye, ke++);
      }),
      ge
    );
  }
  function me(N) {
    if (N._status === -1) {
      var B = N._result;
      ((B = B()),
        B.then(
          function (_) {
            (N._status === 0 || N._status === -1) && ((N._status = 1), (N._result = _));
          },
          function (_) {
            (N._status === 0 || N._status === -1) && ((N._status = 2), (N._result = _));
          }
        ),
        N._status === -1 && ((N._status = 0), (N._result = B)));
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var fe = { current: null },
    G = { transition: null },
    ie = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: G, ReactCurrentOwner: A };
  function S() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (je.Children = {
      map: q,
      forEach: function (N, B, _) {
        q(
          N,
          function () {
            B.apply(this, arguments);
          },
          _
        );
      },
      count: function (N) {
        var B = 0;
        return (
          q(N, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (N) {
        return (
          q(N, function (B) {
            return B;
          }) || []
        );
      },
      only: function (N) {
        if (!de(N))
          throw Error('React.Children.only expected to receive a single React element child.');
        return N;
      },
    }),
    (je.Component = O),
    (je.Fragment = l),
    (je.Profiler = u),
    (je.PureComponent = F),
    (je.StrictMode = s),
    (je.Suspense = h),
    (je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ie),
    (je.act = S),
    (je.cloneElement = function (N, B, _) {
      if (N == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + N + '.'
        );
      var ge = I({}, N.props),
        ke = N.key,
        ye = N.ref,
        Ee = N._owner;
      if (B != null) {
        if (
          (B.ref !== void 0 && ((ye = B.ref), (Ee = A.current)),
          B.key !== void 0 && (ke = '' + B.key),
          N.type && N.type.defaultProps)
        )
          var be = N.type.defaultProps;
        for (Ne in B)
          ne.call(B, Ne) &&
            !V.hasOwnProperty(Ne) &&
            (ge[Ne] = B[Ne] === void 0 && be !== void 0 ? be[Ne] : B[Ne]);
      }
      var Ne = arguments.length - 2;
      if (Ne === 1) ge.children = _;
      else if (1 < Ne) {
        be = Array(Ne);
        for (var qe = 0; qe < Ne; qe++) be[qe] = arguments[qe + 2];
        ge.children = be;
      }
      return { $$typeof: n, type: N.type, key: ke, ref: ye, props: ge, _owner: Ee };
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
    (je.createElement = ue),
    (je.createFactory = function (N) {
      var B = ue.bind(null, N);
      return ((B.type = N), B);
    }),
    (je.createRef = function () {
      return { current: null };
    }),
    (je.forwardRef = function (N) {
      return { $$typeof: p, render: N };
    }),
    (je.isValidElement = de),
    (je.lazy = function (N) {
      return { $$typeof: g, _payload: { _status: -1, _result: N }, _init: me };
    }),
    (je.memo = function (N, B) {
      return { $$typeof: m, type: N, compare: B === void 0 ? null : B };
    }),
    (je.startTransition = function (N) {
      var B = G.transition;
      G.transition = {};
      try {
        N();
      } finally {
        G.transition = B;
      }
    }),
    (je.unstable_act = S),
    (je.useCallback = function (N, B) {
      return fe.current.useCallback(N, B);
    }),
    (je.useContext = function (N) {
      return fe.current.useContext(N);
    }),
    (je.useDebugValue = function () {}),
    (je.useDeferredValue = function (N) {
      return fe.current.useDeferredValue(N);
    }),
    (je.useEffect = function (N, B) {
      return fe.current.useEffect(N, B);
    }),
    (je.useId = function () {
      return fe.current.useId();
    }),
    (je.useImperativeHandle = function (N, B, _) {
      return fe.current.useImperativeHandle(N, B, _);
    }),
    (je.useInsertionEffect = function (N, B) {
      return fe.current.useInsertionEffect(N, B);
    }),
    (je.useLayoutEffect = function (N, B) {
      return fe.current.useLayoutEffect(N, B);
    }),
    (je.useMemo = function (N, B) {
      return fe.current.useMemo(N, B);
    }),
    (je.useReducer = function (N, B, _) {
      return fe.current.useReducer(N, B, _);
    }),
    (je.useRef = function (N) {
      return fe.current.useRef(N);
    }),
    (je.useState = function (N) {
      return fe.current.useState(N);
    }),
    (je.useSyncExternalStore = function (N, B, _) {
      return fe.current.useSyncExternalStore(N, B, _);
    }),
    (je.useTransition = function () {
      return fe.current.useTransition();
    }),
    (je.version = '18.3.1'),
    je
  );
}
var af;
function Xa() {
  return (af || ((af = 1), (fa.exports = sg())), fa.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uf;
function ag() {
  if (uf) return qi;
  uf = 1;
  var n = Xa(),
    i = Symbol.for('react.element'),
    l = Symbol.for('react.fragment'),
    s = Object.prototype.hasOwnProperty,
    u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(p, h, m) {
    var g,
      w = {},
      x = null,
      k = null;
    (m !== void 0 && (x = '' + m),
      h.key !== void 0 && (x = '' + h.key),
      h.ref !== void 0 && (k = h.ref));
    for (g in h) s.call(h, g) && !c.hasOwnProperty(g) && (w[g] = h[g]);
    if (p && p.defaultProps) for (g in ((h = p.defaultProps), h)) w[g] === void 0 && (w[g] = h[g]);
    return { $$typeof: i, type: p, key: x, ref: k, props: w, _owner: u.current };
  }
  return ((qi.Fragment = l), (qi.jsx = d), (qi.jsxs = d), qi);
}
var cf;
function ug() {
  return (cf || ((cf = 1), (da.exports = ag())), da.exports);
}
var v = ug(),
  U = Xa(),
  co = {},
  pa = { exports: {} },
  Pt = {},
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
 */ var df;
function cg() {
  return (
    df ||
      ((df = 1),
      (function (n) {
        function i(G, ie) {
          var S = G.length;
          G.push(ie);
          e: for (; 0 < S; ) {
            var N = (S - 1) >>> 1,
              B = G[N];
            if (0 < u(B, ie)) ((G[N] = ie), (G[S] = B), (S = N));
            else break e;
          }
        }
        function l(G) {
          return G.length === 0 ? null : G[0];
        }
        function s(G) {
          if (G.length === 0) return null;
          var ie = G[0],
            S = G.pop();
          if (S !== ie) {
            G[0] = S;
            e: for (var N = 0, B = G.length, _ = B >>> 1; N < _; ) {
              var ge = 2 * (N + 1) - 1,
                ke = G[ge],
                ye = ge + 1,
                Ee = G[ye];
              if (0 > u(ke, S))
                ye < B && 0 > u(Ee, ke)
                  ? ((G[N] = Ee), (G[ye] = S), (N = ye))
                  : ((G[N] = ke), (G[ge] = S), (N = ge));
              else if (ye < B && 0 > u(Ee, S)) ((G[N] = Ee), (G[ye] = S), (N = ye));
              else break e;
            }
          }
          return ie;
        }
        function u(G, ie) {
          var S = G.sortIndex - ie.sortIndex;
          return S !== 0 ? S : G.id - ie.id;
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
          w = null,
          x = 3,
          k = !1,
          I = !1,
          T = !1,
          O = typeof setTimeout == 'function' ? setTimeout : null,
          P = typeof clearTimeout == 'function' ? clearTimeout : null,
          F = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function M(G) {
          for (var ie = l(m); ie !== null; ) {
            if (ie.callback === null) s(m);
            else if (ie.startTime <= G) (s(m), (ie.sortIndex = ie.expirationTime), i(h, ie));
            else break;
            ie = l(m);
          }
        }
        function te(G) {
          if (((T = !1), M(G), !I))
            if (l(h) !== null) ((I = !0), me(ne));
            else {
              var ie = l(m);
              ie !== null && fe(te, ie.startTime - G);
            }
        }
        function ne(G, ie) {
          ((I = !1), T && ((T = !1), P(ue), (ue = -1)), (k = !0));
          var S = x;
          try {
            for (M(ie), w = l(h); w !== null && (!(w.expirationTime > ie) || (G && !Z())); ) {
              var N = w.callback;
              if (typeof N == 'function') {
                ((w.callback = null), (x = w.priorityLevel));
                var B = N(w.expirationTime <= ie);
                ((ie = n.unstable_now()),
                  typeof B == 'function' ? (w.callback = B) : w === l(h) && s(h),
                  M(ie));
              } else s(h);
              w = l(h);
            }
            if (w !== null) var _ = !0;
            else {
              var ge = l(m);
              (ge !== null && fe(te, ge.startTime - ie), (_ = !1));
            }
            return _;
          } finally {
            ((w = null), (x = S), (k = !1));
          }
        }
        var A = !1,
          V = null,
          ue = -1,
          ae = 5,
          de = -1;
        function Z() {
          return !(n.unstable_now() - de < ae);
        }
        function W() {
          if (V !== null) {
            var G = n.unstable_now();
            de = G;
            var ie = !0;
            try {
              ie = V(!0, G);
            } finally {
              ie ? pe() : ((A = !1), (V = null));
            }
          } else A = !1;
        }
        var pe;
        if (typeof F == 'function')
          pe = function () {
            F(W);
          };
        else if (typeof MessageChannel < 'u') {
          var H = new MessageChannel(),
            q = H.port2;
          ((H.port1.onmessage = W),
            (pe = function () {
              q.postMessage(null);
            }));
        } else
          pe = function () {
            O(W, 0);
          };
        function me(G) {
          ((V = G), A || ((A = !0), pe()));
        }
        function fe(G, ie) {
          ue = O(function () {
            G(n.unstable_now());
          }, ie);
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
            I || k || ((I = !0), me(ne));
          }),
          (n.unstable_forceFrameRate = function (G) {
            0 > G || 125 < G
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (ae = 0 < G ? Math.floor(1e3 / G) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return l(h);
          }),
          (n.unstable_next = function (G) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var ie = 3;
                break;
              default:
                ie = x;
            }
            var S = x;
            x = ie;
            try {
              return G();
            } finally {
              x = S;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (G, ie) {
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
            var S = x;
            x = G;
            try {
              return ie();
            } finally {
              x = S;
            }
          }),
          (n.unstable_scheduleCallback = function (G, ie, S) {
            var N = n.unstable_now();
            switch (
              (typeof S == 'object' && S !== null
                ? ((S = S.delay), (S = typeof S == 'number' && 0 < S ? N + S : N))
                : (S = N),
              G)
            ) {
              case 1:
                var B = -1;
                break;
              case 2:
                B = 250;
                break;
              case 5:
                B = 1073741823;
                break;
              case 4:
                B = 1e4;
                break;
              default:
                B = 5e3;
            }
            return (
              (B = S + B),
              (G = {
                id: g++,
                callback: ie,
                priorityLevel: G,
                startTime: S,
                expirationTime: B,
                sortIndex: -1,
              }),
              S > N
                ? ((G.sortIndex = S),
                  i(m, G),
                  l(h) === null && G === l(m) && (T ? (P(ue), (ue = -1)) : (T = !0), fe(te, S - N)))
                : ((G.sortIndex = B), i(h, G), I || k || ((I = !0), me(ne))),
              G
            );
          }),
          (n.unstable_shouldYield = Z),
          (n.unstable_wrapCallback = function (G) {
            var ie = x;
            return function () {
              var S = x;
              x = ie;
              try {
                return G.apply(this, arguments);
              } finally {
                x = S;
              }
            };
          }));
      })(ma)),
    ma
  );
}
var ff;
function dg() {
  return (ff || ((ff = 1), (ha.exports = cg())), ha.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pf;
function fg() {
  if (pf) return Pt;
  pf = 1;
  var n = Xa(),
    i = dg();
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
    w = {};
  function x(e) {
    return h.call(w, e) ? !0 : h.call(g, e) ? !1 : m.test(e) ? (w[e] = !0) : ((g[e] = !0), !1);
  }
  function k(e, t, r, o) {
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
  function I(e, t, r, o) {
    if (t === null || typeof t > 'u' || k(e, t, r, o)) return !0;
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
  function T(e, t, r, o, a, f, y) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = a),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = f),
      (this.removeEmptyString = y));
  }
  var O = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      O[e] = new T(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      O[t] = new T(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      O[e] = new T(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        O[e] = new T(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        O[e] = new T(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      O[e] = new T(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      O[e] = new T(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      O[e] = new T(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      O[e] = new T(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var P = /[\-:]([a-z])/g;
  function F(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(P, F);
      O[t] = new T(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(P, F);
        O[t] = new T(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(P, F);
      O[t] = new T(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      O[e] = new T(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (O.xlinkHref = new T('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      O[e] = new T(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function M(e, t, r, o) {
    var a = O.hasOwnProperty(t) ? O[t] : null;
    (a !== null
      ? a.type !== 0
      : o || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (I(t, r, a, o) && (r = null),
      o || a === null
        ? x(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
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
  var te = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ne = Symbol.for('react.element'),
    A = Symbol.for('react.portal'),
    V = Symbol.for('react.fragment'),
    ue = Symbol.for('react.strict_mode'),
    ae = Symbol.for('react.profiler'),
    de = Symbol.for('react.provider'),
    Z = Symbol.for('react.context'),
    W = Symbol.for('react.forward_ref'),
    pe = Symbol.for('react.suspense'),
    H = Symbol.for('react.suspense_list'),
    q = Symbol.for('react.memo'),
    me = Symbol.for('react.lazy'),
    fe = Symbol.for('react.offscreen'),
    G = Symbol.iterator;
  function ie(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (G && e[G]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var S = Object.assign,
    N;
  function B(e) {
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
  var _ = !1;
  function ge(e, t) {
    if (!e || _) return '';
    _ = !0;
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
          } catch (R) {
            var o = R;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (R) {
            o = R;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (R) {
          o = R;
        }
        e();
      }
    } catch (R) {
      if (R && o && typeof R.stack == 'string') {
        for (
          var a = R.stack.split(`
`),
            f = o.stack.split(`
`),
            y = a.length - 1,
            C = f.length - 1;
          1 <= y && 0 <= C && a[y] !== f[C];
        )
          C--;
        for (; 1 <= y && 0 <= C; y--, C--)
          if (a[y] !== f[C]) {
            if (y !== 1 || C !== 1)
              do
                if ((y--, C--, 0 > C || a[y] !== f[C])) {
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
              while (1 <= y && 0 <= C);
            break;
          }
      }
    } finally {
      ((_ = !1), (Error.prepareStackTrace = r));
    }
    return (e = e ? e.displayName || e.name : '') ? B(e) : '';
  }
  function ke(e) {
    switch (e.tag) {
      case 5:
        return B(e.type);
      case 16:
        return B('Lazy');
      case 13:
        return B('Suspense');
      case 19:
        return B('SuspenseList');
      case 0:
      case 2:
      case 15:
        return ((e = ge(e.type, !1)), e);
      case 11:
        return ((e = ge(e.type.render, !1)), e);
      case 1:
        return ((e = ge(e.type, !0)), e);
      default:
        return '';
    }
  }
  function ye(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case V:
        return 'Fragment';
      case A:
        return 'Portal';
      case ae:
        return 'Profiler';
      case ue:
        return 'StrictMode';
      case pe:
        return 'Suspense';
      case H:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Z:
          return (e.displayName || 'Context') + '.Consumer';
        case de:
          return (e._context.displayName || 'Context') + '.Provider';
        case W:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case q:
          return ((t = e.displayName || null), t !== null ? t : ye(e.type) || 'Memo');
        case me:
          ((t = e._payload), (e = e._init));
          try {
            return ye(e(t));
          } catch {}
      }
    return null;
  }
  function Ee(e) {
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
        return ye(t);
      case 8:
        return t === ue ? 'StrictMode' : 'Mode';
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
  function be(e) {
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
  function Ne(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function qe(e) {
    var t = Ne(e) ? 'checked' : 'value',
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
  function _t(e) {
    e._valueTracker || (e._valueTracker = qe(e));
  }
  function Wn(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      o = '';
    return (
      e && (o = Ne(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = o),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function on(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function He(e, t) {
    var r = t.checked;
    return S({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function mn(e, t) {
    var r = t.defaultValue == null ? '' : t.defaultValue,
      o = t.checked != null ? t.checked : t.defaultChecked;
    ((r = be(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: o,
        initialValue: r,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      }));
  }
  function bt(e, t) {
    ((t = t.checked), t != null && M(e, 'checked', t, !1));
  }
  function Dt(e, t) {
    bt(e, t);
    var r = be(t.value),
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
      ? Gt(e, t.type, r)
      : t.hasOwnProperty('defaultValue') && Gt(e, t.type, be(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function gn(e, t, r) {
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
  function Gt(e, t, r) {
    (t !== 'number' || on(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
  }
  var zt = Array.isArray;
  function D(e, t, r, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < r.length; a++) t['$' + r[a]] = !0;
      for (r = 0; r < e.length; r++)
        ((a = t.hasOwnProperty('$' + e[r].value)),
          e[r].selected !== a && (e[r].selected = a),
          a && o && (e[r].defaultSelected = !0));
    } else {
      for (r = '' + be(r), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === r) {
          ((e[a].selected = !0), o && (e[a].defaultSelected = !0));
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ee(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return S({}, t, {
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
        if (zt(r)) {
          if (1 < r.length) throw Error(l(93));
          r = r[0];
        }
        t = r;
      }
      (t == null && (t = ''), (r = t));
    }
    e._wrapperState = { initialValue: be(r) };
  }
  function We(e, t) {
    var r = be(t.value),
      o = be(t.defaultValue);
    (r != null &&
      ((r = '' + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      o != null && (e.defaultValue = '' + o));
  }
  function Yt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function z(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function J(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? z(t)
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
    bn = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(pt).forEach(function (e) {
    bn.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pt[t] = pt[e]));
    });
  });
  function Xt(e, t, r) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : r || typeof t != 'number' || t === 0 || (pt.hasOwnProperty(e) && pt[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function $n(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = r.indexOf('--') === 0,
          a = Xt(r, t[r], o);
        (r === 'float' && (r = 'cssFloat'), o ? e.setProperty(r, a) : (e[r] = a));
      }
  }
  var dr = S(
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
      if (dr[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function yn(e, t) {
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
  var Ft = null;
  function bo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var No = null,
    jr = null,
    Lr = null;
  function _u(e) {
    if ((e = ji(e))) {
      if (typeof No != 'function') throw Error(l(280));
      var t = e.stateNode;
      t && ((t = El(t)), No(e.stateNode, e.type, t));
    }
  }
  function Cu(e) {
    jr ? (Lr ? Lr.push(e) : (Lr = [e])) : (jr = e);
  }
  function Eu() {
    if (jr) {
      var e = jr,
        t = Lr;
      if (((Lr = jr = null), _u(e), t)) for (e = 0; e < t.length; e++) _u(t[e]);
    }
  }
  function bu(e, t) {
    return e(t);
  }
  function Nu() {}
  var Io = !1;
  function Iu(e, t, r) {
    if (Io) return e(t, r);
    Io = !0;
    try {
      return bu(e, t, r);
    } finally {
      ((Io = !1), (jr !== null || Lr !== null) && (Nu(), Eu()));
    }
  }
  function ui(e, t) {
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
      var ci = {};
      (Object.defineProperty(ci, 'passive', {
        get: function () {
          To = !0;
        },
      }),
        window.addEventListener('test', ci, ci),
        window.removeEventListener('test', ci, ci));
    } catch {
      To = !1;
    }
  function ph(e, t, r, o, a, f, y, C, E) {
    var R = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, R);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var di = !1,
    rl = null,
    il = !1,
    jo = null,
    hh = {
      onError: function (e) {
        ((di = !0), (rl = e));
      },
    };
  function mh(e, t, r, o, a, f, y, C, E) {
    ((di = !1), (rl = null), ph.apply(hh, arguments));
  }
  function gh(e, t, r, o, a, f, y, C, E) {
    if ((mh.apply(this, arguments), di)) {
      if (di) {
        var R = rl;
        ((di = !1), (rl = null));
      } else throw Error(l(198));
      il || ((il = !0), (jo = R));
    }
  }
  function fr(e) {
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
  function Tu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function ju(e) {
    if (fr(e) !== e) throw Error(l(188));
  }
  function yh(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = fr(e)), t === null)) throw Error(l(188));
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
          if (f === r) return (ju(a), e);
          if (f === o) return (ju(a), t);
          f = f.sibling;
        }
        throw Error(l(188));
      }
      if (r.return !== o.return) ((r = a), (o = f));
      else {
        for (var y = !1, C = a.child; C; ) {
          if (C === r) {
            ((y = !0), (r = a), (o = f));
            break;
          }
          if (C === o) {
            ((y = !0), (o = a), (r = f));
            break;
          }
          C = C.sibling;
        }
        if (!y) {
          for (C = f.child; C; ) {
            if (C === r) {
              ((y = !0), (r = f), (o = a));
              break;
            }
            if (C === o) {
              ((y = !0), (o = f), (r = a));
              break;
            }
            C = C.sibling;
          }
          if (!y) throw Error(l(189));
        }
      }
      if (r.alternate !== o) throw Error(l(190));
    }
    if (r.tag !== 3) throw Error(l(188));
    return r.stateNode.current === r ? e : t;
  }
  function Lu(e) {
    return ((e = yh(e)), e !== null ? Pu(e) : null);
  }
  function Pu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Pu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ou = i.unstable_scheduleCallback,
    Ru = i.unstable_cancelCallback,
    vh = i.unstable_shouldYield,
    wh = i.unstable_requestPaint,
    nt = i.unstable_now,
    kh = i.unstable_getCurrentPriorityLevel,
    Lo = i.unstable_ImmediatePriority,
    Au = i.unstable_UserBlockingPriority,
    ll = i.unstable_NormalPriority,
    xh = i.unstable_LowPriority,
    Mu = i.unstable_IdlePriority,
    ol = null,
    vn = null;
  function Sh(e) {
    if (vn && typeof vn.onCommitFiberRoot == 'function')
      try {
        vn.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var sn = Math.clz32 ? Math.clz32 : Eh,
    _h = Math.log,
    Ch = Math.LN2;
  function Eh(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((_h(e) / Ch) | 0)) | 0);
  }
  var sl = 64,
    al = 4194304;
  function fi(e) {
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
      var C = y & ~a;
      C !== 0 ? (o = fi(C)) : ((f &= y), f !== 0 && (o = fi(f)));
    } else ((y = r & ~a), y !== 0 ? (o = fi(y)) : f !== 0 && (o = fi(f)));
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
        ((r = 31 - sn(t)), (a = 1 << r), (o |= e[r]), (t &= ~a));
    return o;
  }
  function bh(e, t) {
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
  function Nh(e, t) {
    for (
      var r = e.suspendedLanes, o = e.pingedLanes, a = e.expirationTimes, f = e.pendingLanes;
      0 < f;
    ) {
      var y = 31 - sn(f),
        C = 1 << y,
        E = a[y];
      (E === -1
        ? ((C & r) === 0 || (C & o) !== 0) && (a[y] = bh(C, t))
        : E <= t && (e.expiredLanes |= C),
        (f &= ~C));
    }
  }
  function Po(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Du() {
    var e = sl;
    return ((sl <<= 1), (sl & 4194240) === 0 && (sl = 64), e);
  }
  function Oo(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function pi(e, t, r) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - sn(t)),
      (e[t] = r));
  }
  function Ih(e, t) {
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
      var a = 31 - sn(r),
        f = 1 << a;
      ((t[a] = 0), (o[a] = -1), (e[a] = -1), (r &= ~f));
    }
  }
  function Ro(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var o = 31 - sn(r),
        a = 1 << o;
      ((a & t) | (e[o] & t) && (e[o] |= t), (r &= ~a));
    }
  }
  var ze = 0;
  function zu(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Fu,
    Ao,
    Bu,
    Wu,
    $u,
    Mo = !1,
    cl = [],
    Un = null,
    Vn = null,
    qn = null,
    hi = new Map(),
    mi = new Map(),
    Hn = [],
    Th =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function Uu(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Un = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Vn = null;
        break;
      case 'mouseover':
      case 'mouseout':
        qn = null;
        break;
      case 'pointerover':
      case 'pointerout':
        hi.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        mi.delete(t.pointerId);
    }
  }
  function gi(e, t, r, o, a, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: o,
          nativeEvent: f,
          targetContainers: [a],
        }),
        t !== null && ((t = ji(t)), t !== null && Ao(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function jh(e, t, r, o, a) {
    switch (t) {
      case 'focusin':
        return ((Un = gi(Un, e, t, r, o, a)), !0);
      case 'dragenter':
        return ((Vn = gi(Vn, e, t, r, o, a)), !0);
      case 'mouseover':
        return ((qn = gi(qn, e, t, r, o, a)), !0);
      case 'pointerover':
        var f = a.pointerId;
        return (hi.set(f, gi(hi.get(f) || null, e, t, r, o, a)), !0);
      case 'gotpointercapture':
        return ((f = a.pointerId), mi.set(f, gi(mi.get(f) || null, e, t, r, o, a)), !0);
    }
    return !1;
  }
  function Vu(e) {
    var t = pr(e.target);
    if (t !== null) {
      var r = fr(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Tu(r)), t !== null)) {
            ((e.blockedOn = t),
              $u(e.priority, function () {
                Bu(r);
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
      var r = zo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        ((Ft = o), r.target.dispatchEvent(o), (Ft = null));
      } else return ((t = ji(r)), t !== null && Ao(t), (e.blockedOn = r), !1);
      t.shift();
    }
    return !0;
  }
  function qu(e, t, r) {
    dl(e) && r.delete(t);
  }
  function Lh() {
    ((Mo = !1),
      Un !== null && dl(Un) && (Un = null),
      Vn !== null && dl(Vn) && (Vn = null),
      qn !== null && dl(qn) && (qn = null),
      hi.forEach(qu),
      mi.forEach(qu));
  }
  function yi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Mo || ((Mo = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, Lh)));
  }
  function vi(e) {
    function t(a) {
      return yi(a, e);
    }
    if (0 < cl.length) {
      yi(cl[0], e);
      for (var r = 1; r < cl.length; r++) {
        var o = cl[r];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      Un !== null && yi(Un, e),
        Vn !== null && yi(Vn, e),
        qn !== null && yi(qn, e),
        hi.forEach(t),
        mi.forEach(t),
        r = 0;
      r < Hn.length;
      r++
    )
      ((o = Hn[r]), o.blockedOn === e && (o.blockedOn = null));
    for (; 0 < Hn.length && ((r = Hn[0]), r.blockedOn === null); )
      (Vu(r), r.blockedOn === null && Hn.shift());
  }
  var Pr = te.ReactCurrentBatchConfig,
    fl = !0;
  function Ph(e, t, r, o) {
    var a = ze,
      f = Pr.transition;
    Pr.transition = null;
    try {
      ((ze = 1), Do(e, t, r, o));
    } finally {
      ((ze = a), (Pr.transition = f));
    }
  }
  function Oh(e, t, r, o) {
    var a = ze,
      f = Pr.transition;
    Pr.transition = null;
    try {
      ((ze = 4), Do(e, t, r, o));
    } finally {
      ((ze = a), (Pr.transition = f));
    }
  }
  function Do(e, t, r, o) {
    if (fl) {
      var a = zo(e, t, r, o);
      if (a === null) (ts(e, t, o, pl, r), Uu(e, o));
      else if (jh(a, e, t, r, o)) o.stopPropagation();
      else if ((Uu(e, o), t & 4 && -1 < Th.indexOf(e))) {
        for (; a !== null; ) {
          var f = ji(a);
          if (
            (f !== null && Fu(f), (f = zo(e, t, r, o)), f === null && ts(e, t, o, pl, r), f === a)
          )
            break;
          a = f;
        }
        a !== null && o.stopPropagation();
      } else ts(e, t, o, null, r);
    }
  }
  var pl = null;
  function zo(e, t, r, o) {
    if (((pl = null), (e = bo(o)), (e = pr(e)), e !== null))
      if (((t = fr(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Tu(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((pl = e), null);
  }
  function Hu(e) {
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
        switch (kh()) {
          case Lo:
            return 1;
          case Au:
            return 4;
          case ll:
          case xh:
            return 16;
          case Mu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Qn = null,
    Fo = null,
    hl = null;
  function Qu() {
    if (hl) return hl;
    var e,
      t = Fo,
      r = t.length,
      o,
      a = 'value' in Qn ? Qn.value : Qn.textContent,
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
  function Ku() {
    return !1;
  }
  function Bt(e) {
    function t(r, o, a, f, y) {
      ((this._reactName = r),
        (this._targetInst = a),
        (this.type = o),
        (this.nativeEvent = f),
        (this.target = y),
        (this.currentTarget = null));
      for (var C in e) e.hasOwnProperty(C) && ((r = e[C]), (this[C] = r ? r(f) : f[C]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? gl
          : Ku),
        (this.isPropagationStopped = Ku),
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
  var Or = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Bo = Bt(Or),
    wi = S({}, Or, { view: 0, detail: 0 }),
    Rh = Bt(wi),
    Wo,
    $o,
    ki,
    yl = S({}, wi, {
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
          : (e !== ki &&
              (ki && e.type === 'mousemove'
                ? ((Wo = e.screenX - ki.screenX), ($o = e.screenY - ki.screenY))
                : ($o = Wo = 0),
              (ki = e)),
            Wo);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : $o;
      },
    }),
    Gu = Bt(yl),
    Ah = S({}, yl, { dataTransfer: 0 }),
    Mh = Bt(Ah),
    Dh = S({}, wi, { relatedTarget: 0 }),
    Uo = Bt(Dh),
    zh = S({}, Or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fh = Bt(zh),
    Bh = S({}, Or, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Wh = Bt(Bh),
    $h = S({}, Or, { data: 0 }),
    Yu = Bt($h),
    Uh = {
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
    Vh = {
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
    qh = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Hh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = qh[e]) ? !!t[e] : !1;
  }
  function Vo() {
    return Hh;
  }
  var Qh = S({}, wi, {
      key: function (e) {
        if (e.key) {
          var t = Uh[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = ml(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Vh[e.keyCode] || 'Unidentified'
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
    Kh = Bt(Qh),
    Gh = S({}, yl, {
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
    Xu = Bt(Gh),
    Yh = S({}, wi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Vo,
    }),
    Xh = Bt(Yh),
    Jh = S({}, Or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Zh = Bt(Jh),
    em = S({}, yl, {
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
    tm = Bt(em),
    nm = [9, 13, 27, 32],
    qo = p && 'CompositionEvent' in window,
    xi = null;
  p && 'documentMode' in document && (xi = document.documentMode);
  var rm = p && 'TextEvent' in window && !xi,
    Ju = p && (!qo || (xi && 8 < xi && 11 >= xi)),
    Zu = ' ',
    ec = !1;
  function tc(e, t) {
    switch (e) {
      case 'keyup':
        return nm.indexOf(t.keyCode) !== -1;
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
  function nc(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var Rr = !1;
  function im(e, t) {
    switch (e) {
      case 'compositionend':
        return nc(t);
      case 'keypress':
        return t.which !== 32 ? null : ((ec = !0), Zu);
      case 'textInput':
        return ((e = t.data), e === Zu && ec ? null : e);
      default:
        return null;
    }
  }
  function lm(e, t) {
    if (Rr)
      return e === 'compositionend' || (!qo && tc(e, t))
        ? ((e = Qu()), (hl = Fo = Qn = null), (Rr = !1), e)
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
        return Ju && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var om = {
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
  function rc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!om[e.type] : t === 'textarea';
  }
  function ic(e, t, r, o) {
    (Cu(o),
      (t = Sl(t, 'onChange')),
      0 < t.length &&
        ((r = new Bo('onChange', 'change', null, r, o)), e.push({ event: r, listeners: t })));
  }
  var Si = null,
    _i = null;
  function sm(e) {
    Sc(e, 0);
  }
  function vl(e) {
    var t = Fr(e);
    if (Wn(t)) return e;
  }
  function am(e, t) {
    if (e === 'change') return t;
  }
  var lc = !1;
  if (p) {
    var Ho;
    if (p) {
      var Qo = 'oninput' in document;
      if (!Qo) {
        var oc = document.createElement('div');
        (oc.setAttribute('oninput', 'return;'), (Qo = typeof oc.oninput == 'function'));
      }
      Ho = Qo;
    } else Ho = !1;
    lc = Ho && (!document.documentMode || 9 < document.documentMode);
  }
  function sc() {
    Si && (Si.detachEvent('onpropertychange', ac), (_i = Si = null));
  }
  function ac(e) {
    if (e.propertyName === 'value' && vl(_i)) {
      var t = [];
      (ic(t, _i, e, bo(e)), Iu(sm, t));
    }
  }
  function um(e, t, r) {
    e === 'focusin'
      ? (sc(), (Si = t), (_i = r), Si.attachEvent('onpropertychange', ac))
      : e === 'focusout' && sc();
  }
  function cm(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return vl(_i);
  }
  function dm(e, t) {
    if (e === 'click') return vl(t);
  }
  function fm(e, t) {
    if (e === 'input' || e === 'change') return vl(t);
  }
  function pm(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var an = typeof Object.is == 'function' ? Object.is : pm;
  function Ci(e, t) {
    if (an(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var r = Object.keys(e),
      o = Object.keys(t);
    if (r.length !== o.length) return !1;
    for (o = 0; o < r.length; o++) {
      var a = r[o];
      if (!h.call(t, a) || !an(e[a], t[a])) return !1;
    }
    return !0;
  }
  function uc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function cc(e, t) {
    var r = uc(e);
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
      r = uc(r);
    }
  }
  function dc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? dc(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function fc() {
    for (var e = window, t = on(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == 'string';
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = on(e.document);
    }
    return t;
  }
  function Ko(e) {
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
  function hm(e) {
    var t = fc(),
      r = e.focusedElem,
      o = e.selectionRange;
    if (t !== r && r && r.ownerDocument && dc(r.ownerDocument.documentElement, r)) {
      if (o !== null && Ko(r)) {
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
            (a = cc(r, f)));
          var y = cc(r, o);
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
  var mm = p && 'documentMode' in document && 11 >= document.documentMode,
    Ar = null,
    Go = null,
    Ei = null,
    Yo = !1;
  function pc(e, t, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Yo ||
      Ar == null ||
      Ar !== on(o) ||
      ((o = Ar),
      'selectionStart' in o && Ko(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Ei && Ci(Ei, o)) ||
        ((Ei = o),
        (o = Sl(Go, 'onSelect')),
        0 < o.length &&
          ((t = new Bo('onSelect', 'select', null, t, r)),
          e.push({ event: t, listeners: o }),
          (t.target = Ar))));
  }
  function wl(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r['Webkit' + e] = 'webkit' + t),
      (r['Moz' + e] = 'moz' + t),
      r
    );
  }
  var Mr = {
      animationend: wl('Animation', 'AnimationEnd'),
      animationiteration: wl('Animation', 'AnimationIteration'),
      animationstart: wl('Animation', 'AnimationStart'),
      transitionend: wl('Transition', 'TransitionEnd'),
    },
    Xo = {},
    hc = {};
  p &&
    ((hc = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Mr.animationend.animation,
      delete Mr.animationiteration.animation,
      delete Mr.animationstart.animation),
    'TransitionEvent' in window || delete Mr.transitionend.transition);
  function kl(e) {
    if (Xo[e]) return Xo[e];
    if (!Mr[e]) return e;
    var t = Mr[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in hc) return (Xo[e] = t[r]);
    return e;
  }
  var mc = kl('animationend'),
    gc = kl('animationiteration'),
    yc = kl('animationstart'),
    vc = kl('transitionend'),
    wc = new Map(),
    kc =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Kn(e, t) {
    (wc.set(e, t), c(t, [e]));
  }
  for (var Jo = 0; Jo < kc.length; Jo++) {
    var Zo = kc[Jo],
      gm = Zo.toLowerCase(),
      ym = Zo[0].toUpperCase() + Zo.slice(1);
    Kn(gm, 'on' + ym);
  }
  (Kn(mc, 'onAnimationEnd'),
    Kn(gc, 'onAnimationIteration'),
    Kn(yc, 'onAnimationStart'),
    Kn('dblclick', 'onDoubleClick'),
    Kn('focusin', 'onFocus'),
    Kn('focusout', 'onBlur'),
    Kn(vc, 'onTransitionEnd'),
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
  var bi =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    vm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(bi));
  function xc(e, t, r) {
    var o = e.type || 'unknown-event';
    ((e.currentTarget = r), gh(o, t, void 0, e), (e.currentTarget = null));
  }
  function Sc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var o = e[r],
        a = o.event;
      o = o.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var y = o.length - 1; 0 <= y; y--) {
            var C = o[y],
              E = C.instance,
              R = C.currentTarget;
            if (((C = C.listener), E !== f && a.isPropagationStopped())) break e;
            (xc(a, C, R), (f = E));
          }
        else
          for (y = 0; y < o.length; y++) {
            if (
              ((C = o[y]),
              (E = C.instance),
              (R = C.currentTarget),
              (C = C.listener),
              E !== f && a.isPropagationStopped())
            )
              break e;
            (xc(a, C, R), (f = E));
          }
      }
    }
    if (il) throw ((e = jo), (il = !1), (jo = null), e);
  }
  function Qe(e, t) {
    var r = t[ss];
    r === void 0 && (r = t[ss] = new Set());
    var o = e + '__bubble';
    r.has(o) || (_c(t, e, 2, !1), r.add(o));
  }
  function es(e, t, r) {
    var o = 0;
    (t && (o |= 4), _c(r, e, o, t));
  }
  var xl = '_reactListening' + Math.random().toString(36).slice(2);
  function Ni(e) {
    if (!e[xl]) {
      ((e[xl] = !0),
        s.forEach(function (r) {
          r !== 'selectionchange' && (vm.has(r) || es(r, !1, e), es(r, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[xl] || ((t[xl] = !0), es('selectionchange', !1, t));
    }
  }
  function _c(e, t, r, o) {
    switch (Hu(t)) {
      case 1:
        var a = Ph;
        break;
      case 4:
        a = Oh;
        break;
      default:
        a = Do;
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
          var C = o.stateNode.containerInfo;
          if (C === a || (C.nodeType === 8 && C.parentNode === a)) break;
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
          for (; C !== null; ) {
            if (((y = pr(C)), y === null)) return;
            if (((E = y.tag), E === 5 || E === 6)) {
              o = f = y;
              continue e;
            }
            C = C.parentNode;
          }
        }
        o = o.return;
      }
    Iu(function () {
      var R = f,
        Q = bo(r),
        K = [];
      e: {
        var $ = wc.get(e);
        if ($ !== void 0) {
          var re = Bo,
            oe = e;
          switch (e) {
            case 'keypress':
              if (ml(r) === 0) break e;
            case 'keydown':
            case 'keyup':
              re = Kh;
              break;
            case 'focusin':
              ((oe = 'focus'), (re = Uo));
              break;
            case 'focusout':
              ((oe = 'blur'), (re = Uo));
              break;
            case 'beforeblur':
            case 'afterblur':
              re = Uo;
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
              re = Gu;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              re = Mh;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              re = Xh;
              break;
            case mc:
            case gc:
            case yc:
              re = Fh;
              break;
            case vc:
              re = Zh;
              break;
            case 'scroll':
              re = Rh;
              break;
            case 'wheel':
              re = tm;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              re = Wh;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              re = Xu;
          }
          var ce = (t & 4) !== 0,
            rt = !ce && e === 'scroll',
            j = ce ? ($ !== null ? $ + 'Capture' : null) : $;
          ce = [];
          for (var b = R, L; b !== null; ) {
            L = b;
            var X = L.stateNode;
            if (
              (L.tag === 5 &&
                X !== null &&
                ((L = X), j !== null && ((X = ui(b, j)), X != null && ce.push(Ii(b, X, L)))),
              rt)
            )
              break;
            b = b.return;
          }
          0 < ce.length && (($ = new re($, oe, null, r, Q)), K.push({ event: $, listeners: ce }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            (($ = e === 'mouseover' || e === 'pointerover'),
            (re = e === 'mouseout' || e === 'pointerout'),
            $ && r !== Ft && (oe = r.relatedTarget || r.fromElement) && (pr(oe) || oe[Nn]))
          )
            break e;
          if (
            (re || $) &&
            (($ =
              Q.window === Q
                ? Q
                : ($ = Q.ownerDocument)
                  ? $.defaultView || $.parentWindow
                  : window),
            re
              ? ((oe = r.relatedTarget || r.toElement),
                (re = R),
                (oe = oe ? pr(oe) : null),
                oe !== null &&
                  ((rt = fr(oe)), oe !== rt || (oe.tag !== 5 && oe.tag !== 6)) &&
                  (oe = null))
              : ((re = null), (oe = R)),
            re !== oe)
          ) {
            if (
              ((ce = Gu),
              (X = 'onMouseLeave'),
              (j = 'onMouseEnter'),
              (b = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((ce = Xu), (X = 'onPointerLeave'), (j = 'onPointerEnter'), (b = 'pointer')),
              (rt = re == null ? $ : Fr(re)),
              (L = oe == null ? $ : Fr(oe)),
              ($ = new ce(X, b + 'leave', re, r, Q)),
              ($.target = rt),
              ($.relatedTarget = L),
              (X = null),
              pr(Q) === R &&
                ((ce = new ce(j, b + 'enter', oe, r, Q)),
                (ce.target = L),
                (ce.relatedTarget = rt),
                (X = ce)),
              (rt = X),
              re && oe)
            )
              t: {
                for (ce = re, j = oe, b = 0, L = ce; L; L = Dr(L)) b++;
                for (L = 0, X = j; X; X = Dr(X)) L++;
                for (; 0 < b - L; ) ((ce = Dr(ce)), b--);
                for (; 0 < L - b; ) ((j = Dr(j)), L--);
                for (; b--; ) {
                  if (ce === j || (j !== null && ce === j.alternate)) break t;
                  ((ce = Dr(ce)), (j = Dr(j)));
                }
                ce = null;
              }
            else ce = null;
            (re !== null && Cc(K, $, re, ce, !1),
              oe !== null && rt !== null && Cc(K, rt, oe, ce, !0));
          }
        }
        e: {
          if (
            (($ = R ? Fr(R) : window),
            (re = $.nodeName && $.nodeName.toLowerCase()),
            re === 'select' || (re === 'input' && $.type === 'file'))
          )
            var he = am;
          else if (rc($))
            if (lc) he = fm;
            else {
              he = cm;
              var ve = um;
            }
          else
            (re = $.nodeName) &&
              re.toLowerCase() === 'input' &&
              ($.type === 'checkbox' || $.type === 'radio') &&
              (he = dm);
          if (he && (he = he(e, R))) {
            ic(K, he, r, Q);
            break e;
          }
          (ve && ve(e, $, R),
            e === 'focusout' &&
              (ve = $._wrapperState) &&
              ve.controlled &&
              $.type === 'number' &&
              Gt($, 'number', $.value));
        }
        switch (((ve = R ? Fr(R) : window), e)) {
          case 'focusin':
            (rc(ve) || ve.contentEditable === 'true') && ((Ar = ve), (Go = R), (Ei = null));
            break;
          case 'focusout':
            Ei = Go = Ar = null;
            break;
          case 'mousedown':
            Yo = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Yo = !1), pc(K, r, Q));
            break;
          case 'selectionchange':
            if (mm) break;
          case 'keydown':
          case 'keyup':
            pc(K, r, Q);
        }
        var we;
        if (qo)
          e: {
            switch (e) {
              case 'compositionstart':
                var _e = 'onCompositionStart';
                break e;
              case 'compositionend':
                _e = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                _e = 'onCompositionUpdate';
                break e;
            }
            _e = void 0;
          }
        else
          Rr
            ? tc(e, r) && (_e = 'onCompositionEnd')
            : e === 'keydown' && r.keyCode === 229 && (_e = 'onCompositionStart');
        (_e &&
          (Ju &&
            r.locale !== 'ko' &&
            (Rr || _e !== 'onCompositionStart'
              ? _e === 'onCompositionEnd' && Rr && (we = Qu())
              : ((Qn = Q), (Fo = 'value' in Qn ? Qn.value : Qn.textContent), (Rr = !0))),
          (ve = Sl(R, _e)),
          0 < ve.length &&
            ((_e = new Yu(_e, e, null, r, Q)),
            K.push({ event: _e, listeners: ve }),
            we ? (_e.data = we) : ((we = nc(r)), we !== null && (_e.data = we)))),
          (we = rm ? im(e, r) : lm(e, r)) &&
            ((R = Sl(R, 'onBeforeInput')),
            0 < R.length &&
              ((Q = new Yu('onBeforeInput', 'beforeinput', null, r, Q)),
              K.push({ event: Q, listeners: R }),
              (Q.data = we))));
      }
      Sc(K, t);
    });
  }
  function Ii(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Sl(e, t) {
    for (var r = t + 'Capture', o = []; e !== null; ) {
      var a = e,
        f = a.stateNode;
      (a.tag === 5 &&
        f !== null &&
        ((a = f),
        (f = ui(e, r)),
        f != null && o.unshift(Ii(e, f, a)),
        (f = ui(e, t)),
        f != null && o.push(Ii(e, f, a))),
        (e = e.return));
    }
    return o;
  }
  function Dr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Cc(e, t, r, o, a) {
    for (var f = t._reactName, y = []; r !== null && r !== o; ) {
      var C = r,
        E = C.alternate,
        R = C.stateNode;
      if (E !== null && E === o) break;
      (C.tag === 5 &&
        R !== null &&
        ((C = R),
        a
          ? ((E = ui(r, f)), E != null && y.unshift(Ii(r, E, C)))
          : a || ((E = ui(r, f)), E != null && y.push(Ii(r, E, C)))),
        (r = r.return));
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var wm = /\r\n?/g,
    km = /\u0000|\uFFFD/g;
  function Ec(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        wm,
        `
`
      )
      .replace(km, '');
  }
  function _l(e, t, r) {
    if (((t = Ec(t)), Ec(e) !== t && r)) throw Error(l(425));
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
    xm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    bc = typeof Promise == 'function' ? Promise : void 0,
    Sm =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof bc < 'u'
          ? function (e) {
              return bc.resolve(null).then(e).catch(_m);
            }
          : ls;
  function _m(e) {
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
            (e.removeChild(a), vi(t));
            return;
          }
          o--;
        } else (r !== '$' && r !== '$?' && r !== '$!') || o++;
      r = a;
    } while (r);
    vi(t);
  }
  function Gn(e) {
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
  function Nc(e) {
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
  var zr = Math.random().toString(36).slice(2),
    wn = '__reactFiber$' + zr,
    Ti = '__reactProps$' + zr,
    Nn = '__reactContainer$' + zr,
    ss = '__reactEvents$' + zr,
    Cm = '__reactListeners$' + zr,
    Em = '__reactHandles$' + zr;
  function pr(e) {
    var t = e[wn];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[Nn] || r[wn])) {
        if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
          for (e = Nc(e); e !== null; ) {
            if ((r = e[wn])) return r;
            e = Nc(e);
          }
        return t;
      }
      ((e = r), (r = e.parentNode));
    }
    return null;
  }
  function ji(e) {
    return (
      (e = e[wn] || e[Nn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Fr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function El(e) {
    return e[Ti] || null;
  }
  var as = [],
    Br = -1;
  function Yn(e) {
    return { current: e };
  }
  function Ke(e) {
    0 > Br || ((e.current = as[Br]), (as[Br] = null), Br--);
  }
  function $e(e, t) {
    (Br++, (as[Br] = e.current), (e.current = t));
  }
  var Xn = {},
    yt = Yn(Xn),
    Nt = Yn(!1),
    hr = Xn;
  function Wr(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Xn;
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
  function It(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function bl() {
    (Ke(Nt), Ke(yt));
  }
  function Ic(e, t, r) {
    if (yt.current !== Xn) throw Error(l(168));
    ($e(yt, t), $e(Nt, r));
  }
  function Tc(e, t, r) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != 'function')) return r;
    o = o.getChildContext();
    for (var a in o) if (!(a in t)) throw Error(l(108, Ee(e) || 'Unknown', a));
    return S({}, r, o);
  }
  function Nl(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Xn),
      (hr = yt.current),
      $e(yt, e),
      $e(Nt, Nt.current),
      !0
    );
  }
  function jc(e, t, r) {
    var o = e.stateNode;
    if (!o) throw Error(l(169));
    (r
      ? ((e = Tc(e, t, hr)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        Ke(Nt),
        Ke(yt),
        $e(yt, e))
      : Ke(Nt),
      $e(Nt, r));
  }
  var In = null,
    Il = !1,
    us = !1;
  function Lc(e) {
    In === null ? (In = [e]) : In.push(e);
  }
  function bm(e) {
    ((Il = !0), Lc(e));
  }
  function Jn() {
    if (!us && In !== null) {
      us = !0;
      var e = 0,
        t = ze;
      try {
        var r = In;
        for (ze = 1; e < r.length; e++) {
          var o = r[e];
          do o = o(!0);
          while (o !== null);
        }
        ((In = null), (Il = !1));
      } catch (a) {
        throw (In !== null && (In = In.slice(e + 1)), Ou(Lo, Jn), a);
      } finally {
        ((ze = t), (us = !1));
      }
    }
    return null;
  }
  var $r = [],
    Ur = 0,
    Tl = null,
    jl = 0,
    Jt = [],
    Zt = 0,
    mr = null,
    Tn = 1,
    jn = '';
  function gr(e, t) {
    (($r[Ur++] = jl), ($r[Ur++] = Tl), (Tl = e), (jl = t));
  }
  function Pc(e, t, r) {
    ((Jt[Zt++] = Tn), (Jt[Zt++] = jn), (Jt[Zt++] = mr), (mr = e));
    var o = Tn;
    e = jn;
    var a = 32 - sn(o) - 1;
    ((o &= ~(1 << a)), (r += 1));
    var f = 32 - sn(t) + a;
    if (30 < f) {
      var y = a - (a % 5);
      ((f = (o & ((1 << y) - 1)).toString(32)),
        (o >>= y),
        (a -= y),
        (Tn = (1 << (32 - sn(t) + a)) | (r << a) | o),
        (jn = f + e));
    } else ((Tn = (1 << f) | (r << a) | o), (jn = e));
  }
  function cs(e) {
    e.return !== null && (gr(e, 1), Pc(e, 1, 0));
  }
  function ds(e) {
    for (; e === Tl; ) ((Tl = $r[--Ur]), ($r[Ur] = null), (jl = $r[--Ur]), ($r[Ur] = null));
    for (; e === mr; )
      ((mr = Jt[--Zt]),
        (Jt[Zt] = null),
        (jn = Jt[--Zt]),
        (Jt[Zt] = null),
        (Tn = Jt[--Zt]),
        (Jt[Zt] = null));
  }
  var Wt = null,
    $t = null,
    Ye = !1,
    un = null;
  function Oc(e, t) {
    var r = rn(5, null, null, 0);
    ((r.elementType = 'DELETED'),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
  }
  function Rc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (Wt = e), ($t = Gn(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Wt = e), ($t = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = mr !== null ? { id: Tn, overflow: jn } : null),
              (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
              (r = rn(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (Wt = e),
              ($t = null),
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
    if (Ye) {
      var t = $t;
      if (t) {
        var r = t;
        if (!Rc(e, t)) {
          if (fs(e)) throw Error(l(418));
          t = Gn(r.nextSibling);
          var o = Wt;
          t && Rc(e, t) ? Oc(o, r) : ((e.flags = (e.flags & -4097) | 2), (Ye = !1), (Wt = e));
        }
      } else {
        if (fs(e)) throw Error(l(418));
        ((e.flags = (e.flags & -4097) | 2), (Ye = !1), (Wt = e));
      }
    }
  }
  function Ac(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Wt = e;
  }
  function Ll(e) {
    if (e !== Wt) return !1;
    if (!Ye) return (Ac(e), (Ye = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !is(e.type, e.memoizedProps))),
      t && (t = $t))
    ) {
      if (fs(e)) throw (Mc(), Error(l(418)));
      for (; t; ) (Oc(e, t), (t = Gn(t.nextSibling)));
    }
    if ((Ac(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === '/$') {
              if (t === 0) {
                $t = Gn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        $t = null;
      }
    } else $t = Wt ? Gn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Mc() {
    for (var e = $t; e; ) e = Gn(e.nextSibling);
  }
  function Vr() {
    (($t = Wt = null), (Ye = !1));
  }
  function hs(e) {
    un === null ? (un = [e]) : un.push(e);
  }
  var Nm = te.ReactCurrentBatchConfig;
  function Li(e, t, r) {
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
              var C = a.refs;
              y === null ? delete C[f] : (C[f] = y);
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
  function Dc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function zc(e) {
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
      return ((j = or(j, b)), (j.index = 0), (j.sibling = null), j);
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
    function C(j, b, L, X) {
      return b === null || b.tag !== 6
        ? ((b = la(L, j.mode, X)), (b.return = j), b)
        : ((b = a(b, L)), (b.return = j), b);
    }
    function E(j, b, L, X) {
      var he = L.type;
      return he === V
        ? Q(j, b, L.props.children, X, L.key)
        : b !== null &&
            (b.elementType === he ||
              (typeof he == 'object' && he !== null && he.$$typeof === me && Dc(he) === b.type))
          ? ((X = a(b, L.props)), (X.ref = Li(j, b, L)), (X.return = j), X)
          : ((X = no(L.type, L.key, L.props, null, j.mode, X)),
            (X.ref = Li(j, b, L)),
            (X.return = j),
            X);
    }
    function R(j, b, L, X) {
      return b === null ||
        b.tag !== 4 ||
        b.stateNode.containerInfo !== L.containerInfo ||
        b.stateNode.implementation !== L.implementation
        ? ((b = oa(L, j.mode, X)), (b.return = j), b)
        : ((b = a(b, L.children || [])), (b.return = j), b);
    }
    function Q(j, b, L, X, he) {
      return b === null || b.tag !== 7
        ? ((b = Cr(L, j.mode, X, he)), (b.return = j), b)
        : ((b = a(b, L)), (b.return = j), b);
    }
    function K(j, b, L) {
      if ((typeof b == 'string' && b !== '') || typeof b == 'number')
        return ((b = la('' + b, j.mode, L)), (b.return = j), b);
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case ne:
            return (
              (L = no(b.type, b.key, b.props, null, j.mode, L)),
              (L.ref = Li(j, null, b)),
              (L.return = j),
              L
            );
          case A:
            return ((b = oa(b, j.mode, L)), (b.return = j), b);
          case me:
            var X = b._init;
            return K(j, X(b._payload), L);
        }
        if (zt(b) || ie(b)) return ((b = Cr(b, j.mode, L, null)), (b.return = j), b);
        Pl(j, b);
      }
      return null;
    }
    function $(j, b, L, X) {
      var he = b !== null ? b.key : null;
      if ((typeof L == 'string' && L !== '') || typeof L == 'number')
        return he !== null ? null : C(j, b, '' + L, X);
      if (typeof L == 'object' && L !== null) {
        switch (L.$$typeof) {
          case ne:
            return L.key === he ? E(j, b, L, X) : null;
          case A:
            return L.key === he ? R(j, b, L, X) : null;
          case me:
            return ((he = L._init), $(j, b, he(L._payload), X));
        }
        if (zt(L) || ie(L)) return he !== null ? null : Q(j, b, L, X, null);
        Pl(j, L);
      }
      return null;
    }
    function re(j, b, L, X, he) {
      if ((typeof X == 'string' && X !== '') || typeof X == 'number')
        return ((j = j.get(L) || null), C(b, j, '' + X, he));
      if (typeof X == 'object' && X !== null) {
        switch (X.$$typeof) {
          case ne:
            return ((j = j.get(X.key === null ? L : X.key) || null), E(b, j, X, he));
          case A:
            return ((j = j.get(X.key === null ? L : X.key) || null), R(b, j, X, he));
          case me:
            var ve = X._init;
            return re(j, b, L, ve(X._payload), he);
        }
        if (zt(X) || ie(X)) return ((j = j.get(L) || null), Q(b, j, X, he, null));
        Pl(b, X);
      }
      return null;
    }
    function oe(j, b, L, X) {
      for (
        var he = null, ve = null, we = b, _e = (b = 0), ft = null;
        we !== null && _e < L.length;
        _e++
      ) {
        we.index > _e ? ((ft = we), (we = null)) : (ft = we.sibling);
        var Re = $(j, we, L[_e], X);
        if (Re === null) {
          we === null && (we = ft);
          break;
        }
        (e && we && Re.alternate === null && t(j, we),
          (b = f(Re, b, _e)),
          ve === null ? (he = Re) : (ve.sibling = Re),
          (ve = Re),
          (we = ft));
      }
      if (_e === L.length) return (r(j, we), Ye && gr(j, _e), he);
      if (we === null) {
        for (; _e < L.length; _e++)
          ((we = K(j, L[_e], X)),
            we !== null &&
              ((b = f(we, b, _e)), ve === null ? (he = we) : (ve.sibling = we), (ve = we)));
        return (Ye && gr(j, _e), he);
      }
      for (we = o(j, we); _e < L.length; _e++)
        ((ft = re(we, j, _e, L[_e], X)),
          ft !== null &&
            (e && ft.alternate !== null && we.delete(ft.key === null ? _e : ft.key),
            (b = f(ft, b, _e)),
            ve === null ? (he = ft) : (ve.sibling = ft),
            (ve = ft)));
      return (
        e &&
          we.forEach(function (sr) {
            return t(j, sr);
          }),
        Ye && gr(j, _e),
        he
      );
    }
    function ce(j, b, L, X) {
      var he = ie(L);
      if (typeof he != 'function') throw Error(l(150));
      if (((L = he.call(L)), L == null)) throw Error(l(151));
      for (
        var ve = (he = null), we = b, _e = (b = 0), ft = null, Re = L.next();
        we !== null && !Re.done;
        _e++, Re = L.next()
      ) {
        we.index > _e ? ((ft = we), (we = null)) : (ft = we.sibling);
        var sr = $(j, we, Re.value, X);
        if (sr === null) {
          we === null && (we = ft);
          break;
        }
        (e && we && sr.alternate === null && t(j, we),
          (b = f(sr, b, _e)),
          ve === null ? (he = sr) : (ve.sibling = sr),
          (ve = sr),
          (we = ft));
      }
      if (Re.done) return (r(j, we), Ye && gr(j, _e), he);
      if (we === null) {
        for (; !Re.done; _e++, Re = L.next())
          ((Re = K(j, Re.value, X)),
            Re !== null &&
              ((b = f(Re, b, _e)), ve === null ? (he = Re) : (ve.sibling = Re), (ve = Re)));
        return (Ye && gr(j, _e), he);
      }
      for (we = o(j, we); !Re.done; _e++, Re = L.next())
        ((Re = re(we, j, _e, Re.value, X)),
          Re !== null &&
            (e && Re.alternate !== null && we.delete(Re.key === null ? _e : Re.key),
            (b = f(Re, b, _e)),
            ve === null ? (he = Re) : (ve.sibling = Re),
            (ve = Re)));
      return (
        e &&
          we.forEach(function (og) {
            return t(j, og);
          }),
        Ye && gr(j, _e),
        he
      );
    }
    function rt(j, b, L, X) {
      if (
        (typeof L == 'object' &&
          L !== null &&
          L.type === V &&
          L.key === null &&
          (L = L.props.children),
        typeof L == 'object' && L !== null)
      ) {
        switch (L.$$typeof) {
          case ne:
            e: {
              for (var he = L.key, ve = b; ve !== null; ) {
                if (ve.key === he) {
                  if (((he = L.type), he === V)) {
                    if (ve.tag === 7) {
                      (r(j, ve.sibling), (b = a(ve, L.props.children)), (b.return = j), (j = b));
                      break e;
                    }
                  } else if (
                    ve.elementType === he ||
                    (typeof he == 'object' &&
                      he !== null &&
                      he.$$typeof === me &&
                      Dc(he) === ve.type)
                  ) {
                    (r(j, ve.sibling),
                      (b = a(ve, L.props)),
                      (b.ref = Li(j, ve, L)),
                      (b.return = j),
                      (j = b));
                    break e;
                  }
                  r(j, ve);
                  break;
                } else t(j, ve);
                ve = ve.sibling;
              }
              L.type === V
                ? ((b = Cr(L.props.children, j.mode, X, L.key)), (b.return = j), (j = b))
                : ((X = no(L.type, L.key, L.props, null, j.mode, X)),
                  (X.ref = Li(j, b, L)),
                  (X.return = j),
                  (j = X));
            }
            return y(j);
          case A:
            e: {
              for (ve = L.key; b !== null; ) {
                if (b.key === ve)
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
              ((b = oa(L, j.mode, X)), (b.return = j), (j = b));
            }
            return y(j);
          case me:
            return ((ve = L._init), rt(j, b, ve(L._payload), X));
        }
        if (zt(L)) return oe(j, b, L, X);
        if (ie(L)) return ce(j, b, L, X);
        Pl(j, L);
      }
      return (typeof L == 'string' && L !== '') || typeof L == 'number'
        ? ((L = '' + L),
          b !== null && b.tag === 6
            ? (r(j, b.sibling), (b = a(b, L)), (b.return = j), (j = b))
            : (r(j, b), (b = la(L, j.mode, X)), (b.return = j), (j = b)),
          y(j))
        : r(j, b);
    }
    return rt;
  }
  var qr = zc(!0),
    Fc = zc(!1),
    Ol = Yn(null),
    Rl = null,
    Hr = null,
    ms = null;
  function gs() {
    ms = Hr = Rl = null;
  }
  function ys(e) {
    var t = Ol.current;
    (Ke(Ol), (e._currentValue = t));
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
  function Qr(e, t) {
    ((Rl = e),
      (ms = Hr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Tt = !0), (e.firstContext = null)));
  }
  function en(e) {
    var t = e._currentValue;
    if (ms !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Hr === null)) {
        if (Rl === null) throw Error(l(308));
        ((Hr = e), (Rl.dependencies = { lanes: 0, firstContext: e }));
      } else Hr = Hr.next = e;
    return t;
  }
  var yr = null;
  function ws(e) {
    yr === null ? (yr = [e]) : yr.push(e);
  }
  function Bc(e, t, r, o) {
    var a = t.interleaved;
    return (
      a === null ? ((r.next = r), ws(t)) : ((r.next = a.next), (a.next = r)),
      (t.interleaved = r),
      Ln(e, o)
    );
  }
  function Ln(e, t) {
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
  var Zn = !1;
  function ks(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Wc(e, t) {
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
  function Pn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function er(e, t, r) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (Oe & 2) !== 0)) {
      var a = o.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (o.pending = t),
        Ln(e, r)
      );
    }
    return (
      (a = o.interleaved),
      a === null ? ((t.next = t), ws(o)) : ((t.next = a.next), (a.next = t)),
      (o.interleaved = t),
      Ln(e, r)
    );
  }
  function Al(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), Ro(e, r));
    }
  }
  function $c(e, t) {
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
    Zn = !1;
    var f = a.firstBaseUpdate,
      y = a.lastBaseUpdate,
      C = a.shared.pending;
    if (C !== null) {
      a.shared.pending = null;
      var E = C,
        R = E.next;
      ((E.next = null), y === null ? (f = R) : (y.next = R), (y = E));
      var Q = e.alternate;
      Q !== null &&
        ((Q = Q.updateQueue),
        (C = Q.lastBaseUpdate),
        C !== y && (C === null ? (Q.firstBaseUpdate = R) : (C.next = R), (Q.lastBaseUpdate = E)));
    }
    if (f !== null) {
      var K = a.baseState;
      ((y = 0), (Q = R = E = null), (C = f));
      do {
        var $ = C.lane,
          re = C.eventTime;
        if ((o & $) === $) {
          Q !== null &&
            (Q = Q.next =
              {
                eventTime: re,
                lane: 0,
                tag: C.tag,
                payload: C.payload,
                callback: C.callback,
                next: null,
              });
          e: {
            var oe = e,
              ce = C;
            switch ((($ = t), (re = r), ce.tag)) {
              case 1:
                if (((oe = ce.payload), typeof oe == 'function')) {
                  K = oe.call(re, K, $);
                  break e;
                }
                K = oe;
                break e;
              case 3:
                oe.flags = (oe.flags & -65537) | 128;
              case 0:
                if (
                  ((oe = ce.payload),
                  ($ = typeof oe == 'function' ? oe.call(re, K, $) : oe),
                  $ == null)
                )
                  break e;
                K = S({}, K, $);
                break e;
              case 2:
                Zn = !0;
            }
          }
          C.callback !== null &&
            C.lane !== 0 &&
            ((e.flags |= 64), ($ = a.effects), $ === null ? (a.effects = [C]) : $.push(C));
        } else
          ((re = {
            eventTime: re,
            lane: $,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null,
          }),
            Q === null ? ((R = Q = re), (E = K)) : (Q = Q.next = re),
            (y |= $));
        if (((C = C.next), C === null)) {
          if (((C = a.shared.pending), C === null)) break;
          (($ = C),
            (C = $.next),
            ($.next = null),
            (a.lastBaseUpdate = $),
            (a.shared.pending = null));
        }
      } while (!0);
      if (
        (Q === null && (E = K),
        (a.baseState = E),
        (a.firstBaseUpdate = R),
        (a.lastBaseUpdate = Q),
        (t = a.shared.interleaved),
        t !== null)
      ) {
        a = t;
        do ((y |= a.lane), (a = a.next));
        while (a !== t);
      } else f === null && (a.shared.lanes = 0);
      ((kr |= y), (e.lanes = y), (e.memoizedState = K));
    }
  }
  function Uc(e, t, r) {
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
  var Pi = {},
    kn = Yn(Pi),
    Oi = Yn(Pi),
    Ri = Yn(Pi);
  function vr(e) {
    if (e === Pi) throw Error(l(174));
    return e;
  }
  function xs(e, t) {
    switch (($e(Ri, t), $e(Oi, e), $e(kn, Pi), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : J(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = J(t, e)));
    }
    (Ke(kn), $e(kn, t));
  }
  function Kr() {
    (Ke(kn), Ke(Oi), Ke(Ri));
  }
  function Vc(e) {
    vr(Ri.current);
    var t = vr(kn.current),
      r = J(t, e.type);
    t !== r && ($e(Oi, e), $e(kn, r));
  }
  function Ss(e) {
    Oi.current === e && (Ke(kn), Ke(Oi));
  }
  var Xe = Yn(0);
  function Dl(e) {
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
  var zl = te.ReactCurrentDispatcher,
    Es = te.ReactCurrentBatchConfig,
    wr = 0,
    Je = null,
    at = null,
    ct = null,
    Fl = !1,
    Ai = !1,
    Mi = 0,
    Im = 0;
  function vt() {
    throw Error(l(321));
  }
  function bs(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!an(e[r], t[r])) return !1;
    return !0;
  }
  function Ns(e, t, r, o, a, f) {
    if (
      ((wr = f),
      (Je = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (zl.current = e === null || e.memoizedState === null ? Pm : Om),
      (e = r(o, a)),
      Ai)
    ) {
      f = 0;
      do {
        if (((Ai = !1), (Mi = 0), 25 <= f)) throw Error(l(301));
        ((f += 1), (ct = at = null), (t.updateQueue = null), (zl.current = Rm), (e = r(o, a)));
      } while (Ai);
    }
    if (
      ((zl.current = $l),
      (t = at !== null && at.next !== null),
      (wr = 0),
      (ct = at = Je = null),
      (Fl = !1),
      t)
    )
      throw Error(l(300));
    return e;
  }
  function Is() {
    var e = Mi !== 0;
    return ((Mi = 0), e);
  }
  function xn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (ct === null ? (Je.memoizedState = ct = e) : (ct = ct.next = e), ct);
  }
  function tn() {
    if (at === null) {
      var e = Je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = at.next;
    var t = ct === null ? Je.memoizedState : ct.next;
    if (t !== null) ((ct = t), (at = e));
    else {
      if (e === null) throw Error(l(310));
      ((at = e),
        (e = {
          memoizedState: at.memoizedState,
          baseState: at.baseState,
          baseQueue: at.baseQueue,
          queue: at.queue,
          next: null,
        }),
        ct === null ? (Je.memoizedState = ct = e) : (ct = ct.next = e));
    }
    return ct;
  }
  function Di(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Ts(e) {
    var t = tn(),
      r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var o = at,
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
      var C = (y = null),
        E = null,
        R = f;
      do {
        var Q = R.lane;
        if ((wr & Q) === Q)
          (E !== null &&
            (E = E.next =
              {
                lane: 0,
                action: R.action,
                hasEagerState: R.hasEagerState,
                eagerState: R.eagerState,
                next: null,
              }),
            (o = R.hasEagerState ? R.eagerState : e(o, R.action)));
        else {
          var K = {
            lane: Q,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          };
          (E === null ? ((C = E = K), (y = o)) : (E = E.next = K), (Je.lanes |= Q), (kr |= Q));
        }
        R = R.next;
      } while (R !== null && R !== f);
      (E === null ? (y = o) : (E.next = C),
        an(o, t.memoizedState) || (Tt = !0),
        (t.memoizedState = o),
        (t.baseState = y),
        (t.baseQueue = E),
        (r.lastRenderedState = o));
    }
    if (((e = r.interleaved), e !== null)) {
      a = e;
      do ((f = a.lane), (Je.lanes |= f), (kr |= f), (a = a.next));
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function js(e) {
    var t = tn(),
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
      (an(f, t.memoizedState) || (Tt = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (r.lastRenderedState = f));
    }
    return [f, o];
  }
  function qc() {}
  function Hc(e, t) {
    var r = Je,
      o = tn(),
      a = t(),
      f = !an(o.memoizedState, a);
    if (
      (f && ((o.memoizedState = a), (Tt = !0)),
      (o = o.queue),
      Ls(Gc.bind(null, r, o, e), [e]),
      o.getSnapshot !== t || f || (ct !== null && ct.memoizedState.tag & 1))
    ) {
      if (((r.flags |= 2048), zi(9, Kc.bind(null, r, o, a, t), void 0, null), dt === null))
        throw Error(l(349));
      (wr & 30) !== 0 || Qc(r, t, a);
    }
    return a;
  }
  function Qc(e, t, r) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Je.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Je.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
  }
  function Kc(e, t, r, o) {
    ((t.value = r), (t.getSnapshot = o), Yc(t) && Xc(e));
  }
  function Gc(e, t, r) {
    return r(function () {
      Yc(t) && Xc(e);
    });
  }
  function Yc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !an(e, r);
    } catch {
      return !0;
    }
  }
  function Xc(e) {
    var t = Ln(e, 1);
    t !== null && pn(t, e, 1, -1);
  }
  function Jc(e) {
    var t = xn();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Di,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Lm.bind(null, Je, e)),
      [t.memoizedState, e]
    );
  }
  function zi(e, t, r, o) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: o, next: null }),
      (t = Je.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Je.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((o = r.next), (r.next = e), (e.next = o), (t.lastEffect = e))),
      e
    );
  }
  function Zc() {
    return tn().memoizedState;
  }
  function Bl(e, t, r, o) {
    var a = xn();
    ((Je.flags |= e), (a.memoizedState = zi(1 | t, r, void 0, o === void 0 ? null : o)));
  }
  function Wl(e, t, r, o) {
    var a = tn();
    o = o === void 0 ? null : o;
    var f = void 0;
    if (at !== null) {
      var y = at.memoizedState;
      if (((f = y.destroy), o !== null && bs(o, y.deps))) {
        a.memoizedState = zi(t, r, f, o);
        return;
      }
    }
    ((Je.flags |= e), (a.memoizedState = zi(1 | t, r, f, o)));
  }
  function ed(e, t) {
    return Bl(8390656, 8, e, t);
  }
  function Ls(e, t) {
    return Wl(2048, 8, e, t);
  }
  function td(e, t) {
    return Wl(4, 2, e, t);
  }
  function nd(e, t) {
    return Wl(4, 4, e, t);
  }
  function rd(e, t) {
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
  function id(e, t, r) {
    return ((r = r != null ? r.concat([e]) : null), Wl(4, 4, rd.bind(null, t, e), r));
  }
  function Ps() {}
  function ld(e, t) {
    var r = tn();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && bs(t, o[1]) ? o[0] : ((r.memoizedState = [e, t]), e);
  }
  function od(e, t) {
    var r = tn();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && bs(t, o[1])
      ? o[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function sd(e, t, r) {
    return (wr & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Tt = !0)), (e.memoizedState = r))
      : (an(r, t) || ((r = Du()), (Je.lanes |= r), (kr |= r), (e.baseState = !0)), t);
  }
  function Tm(e, t) {
    var r = ze;
    ((ze = r !== 0 && 4 > r ? r : 4), e(!0));
    var o = Es.transition;
    Es.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((ze = r), (Es.transition = o));
    }
  }
  function ad() {
    return tn().memoizedState;
  }
  function jm(e, t, r) {
    var o = ir(e);
    if (((r = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null }), ud(e)))
      cd(t, r);
    else if (((r = Bc(e, t, r, o)), r !== null)) {
      var a = Et();
      (pn(r, e, o, a), dd(r, t, o));
    }
  }
  function Lm(e, t, r) {
    var o = ir(e),
      a = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (ud(e)) cd(t, a);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var y = t.lastRenderedState,
            C = f(y, r);
          if (((a.hasEagerState = !0), (a.eagerState = C), an(C, y))) {
            var E = t.interleaved;
            (E === null ? ((a.next = a), ws(t)) : ((a.next = E.next), (E.next = a)),
              (t.interleaved = a));
            return;
          }
        } catch {
        } finally {
        }
      ((r = Bc(e, t, a, o)), r !== null && ((a = Et()), pn(r, e, o, a), dd(r, t, o)));
    }
  }
  function ud(e) {
    var t = e.alternate;
    return e === Je || (t !== null && t === Je);
  }
  function cd(e, t) {
    Ai = Fl = !0;
    var r = e.pending;
    (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t));
  }
  function dd(e, t, r) {
    if ((r & 4194240) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), Ro(e, r));
    }
  }
  var $l = {
      readContext: en,
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
    Pm = {
      readContext: en,
      useCallback: function (e, t) {
        return ((xn().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: en,
      useEffect: ed,
      useImperativeHandle: function (e, t, r) {
        return ((r = r != null ? r.concat([e]) : null), Bl(4194308, 4, rd.bind(null, t, e), r));
      },
      useLayoutEffect: function (e, t) {
        return Bl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Bl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = xn();
        return ((t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, r) {
        var o = xn();
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
          (e = e.dispatch = jm.bind(null, Je, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = xn();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Jc,
      useDebugValue: Ps,
      useDeferredValue: function (e) {
        return (xn().memoizedState = e);
      },
      useTransition: function () {
        var e = Jc(!1),
          t = e[0];
        return ((e = Tm.bind(null, e[1])), (xn().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var o = Je,
          a = xn();
        if (Ye) {
          if (r === void 0) throw Error(l(407));
          r = r();
        } else {
          if (((r = t()), dt === null)) throw Error(l(349));
          (wr & 30) !== 0 || Qc(o, t, r);
        }
        a.memoizedState = r;
        var f = { value: r, getSnapshot: t };
        return (
          (a.queue = f),
          ed(Gc.bind(null, o, f, e), [e]),
          (o.flags |= 2048),
          zi(9, Kc.bind(null, o, f, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = xn(),
          t = dt.identifierPrefix;
        if (Ye) {
          var r = jn,
            o = Tn;
          ((r = (o & ~(1 << (32 - sn(o) - 1))).toString(32) + r),
            (t = ':' + t + 'R' + r),
            (r = Mi++),
            0 < r && (t += 'H' + r.toString(32)),
            (t += ':'));
        } else ((r = Im++), (t = ':' + t + 'r' + r.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Om = {
      readContext: en,
      useCallback: ld,
      useContext: en,
      useEffect: Ls,
      useImperativeHandle: id,
      useInsertionEffect: td,
      useLayoutEffect: nd,
      useMemo: od,
      useReducer: Ts,
      useRef: Zc,
      useState: function () {
        return Ts(Di);
      },
      useDebugValue: Ps,
      useDeferredValue: function (e) {
        var t = tn();
        return sd(t, at.memoizedState, e);
      },
      useTransition: function () {
        var e = Ts(Di)[0],
          t = tn().memoizedState;
        return [e, t];
      },
      useMutableSource: qc,
      useSyncExternalStore: Hc,
      useId: ad,
      unstable_isNewReconciler: !1,
    },
    Rm = {
      readContext: en,
      useCallback: ld,
      useContext: en,
      useEffect: Ls,
      useImperativeHandle: id,
      useInsertionEffect: td,
      useLayoutEffect: nd,
      useMemo: od,
      useReducer: js,
      useRef: Zc,
      useState: function () {
        return js(Di);
      },
      useDebugValue: Ps,
      useDeferredValue: function (e) {
        var t = tn();
        return at === null ? (t.memoizedState = e) : sd(t, at.memoizedState, e);
      },
      useTransition: function () {
        var e = js(Di)[0],
          t = tn().memoizedState;
        return [e, t];
      },
      useMutableSource: qc,
      useSyncExternalStore: Hc,
      useId: ad,
      unstable_isNewReconciler: !1,
    };
  function cn(e, t) {
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
  var Ul = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? fr(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var o = Et(),
        a = ir(e),
        f = Pn(o, a);
      ((f.payload = t),
        r != null && (f.callback = r),
        (t = er(e, f, a)),
        t !== null && (pn(t, e, a, o), Al(t, e, a)));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var o = Et(),
        a = ir(e),
        f = Pn(o, a);
      ((f.tag = 1),
        (f.payload = t),
        r != null && (f.callback = r),
        (t = er(e, f, a)),
        t !== null && (pn(t, e, a, o), Al(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Et(),
        o = ir(e),
        a = Pn(r, o);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = er(e, a, o)),
        t !== null && (pn(t, e, o, r), Al(t, e, o)));
    },
  };
  function fd(e, t, r, o, a, f, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(o, f, y)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ci(r, o) || !Ci(a, f)
          : !0
    );
  }
  function pd(e, t, r) {
    var o = !1,
      a = Xn,
      f = t.contextType;
    return (
      typeof f == 'object' && f !== null
        ? (f = en(f))
        : ((a = It(t) ? hr : yt.current),
          (o = t.contextTypes),
          (f = (o = o != null) ? Wr(e, a) : Xn)),
      (t = new t(r, f)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ul),
      (e.stateNode = t),
      (t._reactInternals = e),
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = f)),
      t
    );
  }
  function hd(e, t, r, o) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, o),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(r, o),
      t.state !== e && Ul.enqueueReplaceState(t, t.state, null));
  }
  function Rs(e, t, r, o) {
    var a = e.stateNode;
    ((a.props = r), (a.state = e.memoizedState), (a.refs = {}), ks(e));
    var f = t.contextType;
    (typeof f == 'object' && f !== null
      ? (a.context = en(f))
      : ((f = It(t) ? hr : yt.current), (a.context = Wr(e, f))),
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
        t !== a.state && Ul.enqueueReplaceState(a, a.state, null),
        Ml(e, r, a, o),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function Gr(e, t) {
    try {
      var r = '',
        o = t;
      do ((r += ke(o)), (o = o.return));
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
  function As(e, t, r) {
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
  var Am = typeof WeakMap == 'function' ? WeakMap : Map;
  function md(e, t, r) {
    ((r = Pn(-1, r)), (r.tag = 3), (r.payload = { element: null }));
    var o = t.value;
    return (
      (r.callback = function () {
        (Yl || ((Yl = !0), (Xs = o)), Ms(e, t));
      }),
      r
    );
  }
  function gd(e, t, r) {
    ((r = Pn(-1, r)), (r.tag = 3));
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
            typeof o != 'function' && (nr === null ? (nr = new Set([this])) : nr.add(this)));
          var y = t.stack;
          this.componentDidCatch(t.value, { componentStack: y !== null ? y : '' });
        }),
      r
    );
  }
  function yd(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Am();
      var a = new Set();
      o.set(t, a);
    } else ((a = o.get(t)), a === void 0 && ((a = new Set()), o.set(t, a)));
    a.has(r) || (a.add(r), (e = Gm.bind(null, e, t, r)), t.then(e, e));
  }
  function vd(e) {
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
  function wd(e, t, r, o, a) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null ? (r.tag = 17) : ((t = Pn(-1, 1)), (t.tag = 2), er(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = a), e);
  }
  var Mm = te.ReactCurrentOwner,
    Tt = !1;
  function Ct(e, t, r, o) {
    t.child = e === null ? Fc(t, null, r, o) : qr(t, e.child, r, o);
  }
  function kd(e, t, r, o, a) {
    r = r.render;
    var f = t.ref;
    return (
      Qr(t, a),
      (o = Ns(e, t, r, o, f, a)),
      (r = Is()),
      e !== null && !Tt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), On(e, t, a))
        : (Ye && r && cs(t), (t.flags |= 1), Ct(e, t, o, a), t.child)
    );
  }
  function xd(e, t, r, o, a) {
    if (e === null) {
      var f = r.type;
      return typeof f == 'function' &&
        !ia(f) &&
        f.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = f), Sd(e, t, f, o, a))
        : ((e = no(r.type, null, o, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((f = e.child), (e.lanes & a) === 0)) {
      var y = f.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : Ci), r(y, o) && e.ref === t.ref))
        return On(e, t, a);
    }
    return ((t.flags |= 1), (e = or(f, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Sd(e, t, r, o, a) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Ci(f, o) && e.ref === t.ref)
        if (((Tt = !1), (t.pendingProps = o = f), (e.lanes & a) !== 0))
          (e.flags & 131072) !== 0 && (Tt = !0);
        else return ((t.lanes = e.lanes), On(e, t, a));
    }
    return Ds(e, t, r, o, a);
  }
  function _d(e, t, r) {
    var o = t.pendingProps,
      a = o.children,
      f = e !== null ? e.memoizedState : null;
    if (o.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          $e(Xr, Ut),
          (Ut |= r));
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = f !== null ? f.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            $e(Xr, Ut),
            (Ut |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (o = f !== null ? f.baseLanes : r),
          $e(Xr, Ut),
          (Ut |= o));
      }
    else
      (f !== null ? ((o = f.baseLanes | r), (t.memoizedState = null)) : (o = r),
        $e(Xr, Ut),
        (Ut |= o));
    return (Ct(e, t, a, r), t.child);
  }
  function Cd(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ds(e, t, r, o, a) {
    var f = It(r) ? hr : yt.current;
    return (
      (f = Wr(t, f)),
      Qr(t, a),
      (r = Ns(e, t, r, o, f, a)),
      (o = Is()),
      e !== null && !Tt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), On(e, t, a))
        : (Ye && o && cs(t), (t.flags |= 1), Ct(e, t, r, a), t.child)
    );
  }
  function Ed(e, t, r, o, a) {
    if (It(r)) {
      var f = !0;
      Nl(t);
    } else f = !1;
    if ((Qr(t, a), t.stateNode === null)) (ql(e, t), pd(t, r, o), Rs(t, r, o, a), (o = !0));
    else if (e === null) {
      var y = t.stateNode,
        C = t.memoizedProps;
      y.props = C;
      var E = y.context,
        R = r.contextType;
      typeof R == 'object' && R !== null
        ? (R = en(R))
        : ((R = It(r) ? hr : yt.current), (R = Wr(t, R)));
      var Q = r.getDerivedStateFromProps,
        K = typeof Q == 'function' || typeof y.getSnapshotBeforeUpdate == 'function';
      (K ||
        (typeof y.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof y.componentWillReceiveProps != 'function') ||
        ((C !== o || E !== R) && hd(t, y, o, R)),
        (Zn = !1));
      var $ = t.memoizedState;
      ((y.state = $),
        Ml(t, o, y, a),
        (E = t.memoizedState),
        C !== o || $ !== E || Nt.current || Zn
          ? (typeof Q == 'function' && (Os(t, r, Q, o), (E = t.memoizedState)),
            (C = Zn || fd(t, r, C, o, $, E, R))
              ? (K ||
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
            (y.context = R),
            (o = C))
          : (typeof y.componentDidMount == 'function' && (t.flags |= 4194308), (o = !1)));
    } else {
      ((y = t.stateNode),
        Wc(e, t),
        (C = t.memoizedProps),
        (R = t.type === t.elementType ? C : cn(t.type, C)),
        (y.props = R),
        (K = t.pendingProps),
        ($ = y.context),
        (E = r.contextType),
        typeof E == 'object' && E !== null
          ? (E = en(E))
          : ((E = It(r) ? hr : yt.current), (E = Wr(t, E))));
      var re = r.getDerivedStateFromProps;
      ((Q = typeof re == 'function' || typeof y.getSnapshotBeforeUpdate == 'function') ||
        (typeof y.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof y.componentWillReceiveProps != 'function') ||
        ((C !== K || $ !== E) && hd(t, y, o, E)),
        (Zn = !1),
        ($ = t.memoizedState),
        (y.state = $),
        Ml(t, o, y, a));
      var oe = t.memoizedState;
      C !== K || $ !== oe || Nt.current || Zn
        ? (typeof re == 'function' && (Os(t, r, re, o), (oe = t.memoizedState)),
          (R = Zn || fd(t, r, R, o, $, oe, E) || !1)
            ? (Q ||
                (typeof y.UNSAFE_componentWillUpdate != 'function' &&
                  typeof y.componentWillUpdate != 'function') ||
                (typeof y.componentWillUpdate == 'function' && y.componentWillUpdate(o, oe, E),
                typeof y.UNSAFE_componentWillUpdate == 'function' &&
                  y.UNSAFE_componentWillUpdate(o, oe, E)),
              typeof y.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof y.componentDidUpdate != 'function' ||
                (C === e.memoizedProps && $ === e.memoizedState) ||
                (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate != 'function' ||
                (C === e.memoizedProps && $ === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = oe)),
          (y.props = o),
          (y.state = oe),
          (y.context = E),
          (o = R))
        : (typeof y.componentDidUpdate != 'function' ||
            (C === e.memoizedProps && $ === e.memoizedState) ||
            (t.flags |= 4),
          typeof y.getSnapshotBeforeUpdate != 'function' ||
            (C === e.memoizedProps && $ === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return zs(e, t, r, o, f, a);
  }
  function zs(e, t, r, o, a, f) {
    Cd(e, t);
    var y = (t.flags & 128) !== 0;
    if (!o && !y) return (a && jc(t, r, !1), On(e, t, f));
    ((o = t.stateNode), (Mm.current = t));
    var C = y && typeof r.getDerivedStateFromError != 'function' ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && y
        ? ((t.child = qr(t, e.child, null, f)), (t.child = qr(t, null, C, f)))
        : Ct(e, t, C, f),
      (t.memoizedState = o.state),
      a && jc(t, r, !0),
      t.child
    );
  }
  function bd(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Ic(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ic(e, t.context, !1),
      xs(e, t.containerInfo));
  }
  function Nd(e, t, r, o, a) {
    return (Vr(), hs(a), (t.flags |= 256), Ct(e, t, r, o), t.child);
  }
  var Fs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Bs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Id(e, t, r) {
    var o = t.pendingProps,
      a = Xe.current,
      f = !1,
      y = (t.flags & 128) !== 0,
      C;
    if (
      ((C = y) || (C = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      C ? ((f = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (a |= 1),
      $e(Xe, a & 1),
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
                (e = Cr(e, o, r, null)),
                (f.return = t),
                (e.return = t),
                (f.sibling = e),
                (t.child = f),
                (t.child.memoizedState = Bs(r)),
                (t.memoizedState = Fs),
                e)
              : Ws(t, y))
      );
    if (((a = e.memoizedState), a !== null && ((C = a.dehydrated), C !== null)))
      return Dm(e, t, y, o, C, a, r);
    if (f) {
      ((f = o.fallback), (y = t.mode), (a = e.child), (C = a.sibling));
      var E = { mode: 'hidden', children: o.children };
      return (
        (y & 1) === 0 && t.child !== a
          ? ((o = t.child), (o.childLanes = 0), (o.pendingProps = E), (t.deletions = null))
          : ((o = or(a, E)), (o.subtreeFlags = a.subtreeFlags & 14680064)),
        C !== null ? (f = or(C, f)) : ((f = Cr(f, y, r, null)), (f.flags |= 2)),
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
      (o = or(f, { mode: 'visible', children: o.children })),
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
  function Ws(e, t) {
    return (
      (t = ro({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Vl(e, t, r, o) {
    return (
      o !== null && hs(o),
      qr(t, e.child, null, r),
      (e = Ws(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Dm(e, t, r, o, a, f, y) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (o = As(Error(l(422)))), Vl(e, t, y, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((f = o.fallback),
            (a = t.mode),
            (o = ro({ mode: 'visible', children: o.children }, a, 0, null)),
            (f = Cr(f, a, y, null)),
            (f.flags |= 2),
            (o.return = t),
            (f.return = t),
            (o.sibling = f),
            (t.child = o),
            (t.mode & 1) !== 0 && qr(t, e.child, null, y),
            (t.child.memoizedState = Bs(y)),
            (t.memoizedState = Fs),
            f);
    if ((t.mode & 1) === 0) return Vl(e, t, y, null);
    if (a.data === '$!') {
      if (((o = a.nextSibling && a.nextSibling.dataset), o)) var C = o.dgst;
      return ((o = C), (f = Error(l(419))), (o = As(f, o, void 0)), Vl(e, t, y, o));
    }
    if (((C = (y & e.childLanes) !== 0), Tt || C)) {
      if (((o = dt), o !== null)) {
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
          a !== 0 && a !== f.retryLane && ((f.retryLane = a), Ln(e, a), pn(o, e, a, -1)));
      }
      return (ra(), (o = As(Error(l(421)))), Vl(e, t, y, o));
    }
    return a.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Ym.bind(null, e)), (a._reactRetry = t), null)
      : ((e = f.treeContext),
        ($t = Gn(a.nextSibling)),
        (Wt = t),
        (Ye = !0),
        (un = null),
        e !== null &&
          ((Jt[Zt++] = Tn),
          (Jt[Zt++] = jn),
          (Jt[Zt++] = mr),
          (Tn = e.id),
          (jn = e.overflow),
          (mr = t)),
        (t = Ws(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function Td(e, t, r) {
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
  function jd(e, t, r) {
    var o = t.pendingProps,
      a = o.revealOrder,
      f = o.tail;
    if ((Ct(e, t, o.children, r), (o = Xe.current), (o & 2) !== 0))
      ((o = (o & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Td(e, r, t);
          else if (e.tag === 19) Td(e, r, t);
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
    if (($e(Xe, o), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (a) {
        case 'forwards':
          for (r = t.child, a = null; r !== null; )
            ((e = r.alternate), e !== null && Dl(e) === null && (a = r), (r = r.sibling));
          ((r = a),
            r === null ? ((a = t.child), (t.child = null)) : ((a = r.sibling), (r.sibling = null)),
            $s(t, !1, a, r, f));
          break;
        case 'backwards':
          for (r = null, a = t.child, t.child = null; a !== null; ) {
            if (((e = a.alternate), e !== null && Dl(e) === null)) {
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
  function ql(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function On(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (kr |= t.lanes), (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, r = or(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
        ((e = e.sibling), (r = r.sibling = or(e, e.pendingProps)), (r.return = t));
      r.sibling = null;
    }
    return t.child;
  }
  function zm(e, t, r) {
    switch (t.tag) {
      case 3:
        (bd(t), Vr());
        break;
      case 5:
        Vc(t);
        break;
      case 1:
        It(t.type) && Nl(t);
        break;
      case 4:
        xs(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          a = t.memoizedProps.value;
        ($e(Ol, o._currentValue), (o._currentValue = a));
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? ($e(Xe, Xe.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? Id(e, t, r)
              : ($e(Xe, Xe.current & 1), (e = On(e, t, r)), e !== null ? e.sibling : null);
        $e(Xe, Xe.current & 1);
        break;
      case 19:
        if (((o = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return jd(e, t, r);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          $e(Xe, Xe.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), _d(e, t, r));
    }
    return On(e, t, r);
  }
  var Ld, Us, Pd, Od;
  ((Ld = function (e, t) {
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
    (Us = function () {}),
    (Pd = function (e, t, r, o) {
      var a = e.memoizedProps;
      if (a !== o) {
        ((e = t.stateNode), vr(kn.current));
        var f = null;
        switch (r) {
          case 'input':
            ((a = He(e, a)), (o = He(e, o)), (f = []));
            break;
          case 'select':
            ((a = S({}, a, { value: void 0 })), (o = S({}, o, { value: void 0 })), (f = []));
            break;
          case 'textarea':
            ((a = ee(e, a)), (o = ee(e, o)), (f = []));
            break;
          default:
            typeof a.onClick != 'function' && typeof o.onClick == 'function' && (e.onclick = Cl);
        }
        ht(r, o);
        var y;
        r = null;
        for (R in a)
          if (!o.hasOwnProperty(R) && a.hasOwnProperty(R) && a[R] != null)
            if (R === 'style') {
              var C = a[R];
              for (y in C) C.hasOwnProperty(y) && (r || (r = {}), (r[y] = ''));
            } else
              R !== 'dangerouslySetInnerHTML' &&
                R !== 'children' &&
                R !== 'suppressContentEditableWarning' &&
                R !== 'suppressHydrationWarning' &&
                R !== 'autoFocus' &&
                (u.hasOwnProperty(R) ? f || (f = []) : (f = f || []).push(R, null));
        for (R in o) {
          var E = o[R];
          if (
            ((C = a != null ? a[R] : void 0),
            o.hasOwnProperty(R) && E !== C && (E != null || C != null))
          )
            if (R === 'style')
              if (C) {
                for (y in C)
                  !C.hasOwnProperty(y) ||
                    (E && E.hasOwnProperty(y)) ||
                    (r || (r = {}), (r[y] = ''));
                for (y in E) E.hasOwnProperty(y) && C[y] !== E[y] && (r || (r = {}), (r[y] = E[y]));
              } else (r || (f || (f = []), f.push(R, r)), (r = E));
            else
              R === 'dangerouslySetInnerHTML'
                ? ((E = E ? E.__html : void 0),
                  (C = C ? C.__html : void 0),
                  E != null && C !== E && (f = f || []).push(R, E))
                : R === 'children'
                  ? (typeof E != 'string' && typeof E != 'number') || (f = f || []).push(R, '' + E)
                  : R !== 'suppressContentEditableWarning' &&
                    R !== 'suppressHydrationWarning' &&
                    (u.hasOwnProperty(R)
                      ? (E != null && R === 'onScroll' && Qe('scroll', e), f || C === E || (f = []))
                      : (f = f || []).push(R, E));
        }
        r && (f = f || []).push('style', r);
        var R = f;
        (t.updateQueue = R) && (t.flags |= 4);
      }
    }),
    (Od = function (e, t, r, o) {
      r !== o && (t.flags |= 4);
    }));
  function Fi(e, t) {
    if (!Ye)
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
  function wt(e) {
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
  function Fm(e, t, r) {
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
        return (wt(t), null);
      case 1:
        return (It(t.type) && bl(), wt(t), null);
      case 3:
        return (
          (o = t.stateNode),
          Kr(),
          Ke(Nt),
          Ke(yt),
          Cs(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ll(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), un !== null && (ea(un), (un = null)))),
          Us(e, t),
          wt(t),
          null
        );
      case 5:
        Ss(t);
        var a = vr(Ri.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          (Pd(e, t, r, o, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(l(166));
            return (wt(t), null);
          }
          if (((e = vr(kn.current)), Ll(t))) {
            ((o = t.stateNode), (r = t.type));
            var f = t.memoizedProps;
            switch (((o[wn] = t), (o[Ti] = f), (e = (t.mode & 1) !== 0), r)) {
              case 'dialog':
                (Qe('cancel', o), Qe('close', o));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Qe('load', o);
                break;
              case 'video':
              case 'audio':
                for (a = 0; a < bi.length; a++) Qe(bi[a], o);
                break;
              case 'source':
                Qe('error', o);
                break;
              case 'img':
              case 'image':
              case 'link':
                (Qe('error', o), Qe('load', o));
                break;
              case 'details':
                Qe('toggle', o);
                break;
              case 'input':
                (mn(o, f), Qe('invalid', o));
                break;
              case 'select':
                ((o._wrapperState = { wasMultiple: !!f.multiple }), Qe('invalid', o));
                break;
              case 'textarea':
                (Ae(o, f), Qe('invalid', o));
            }
            (ht(r, f), (a = null));
            for (var y in f)
              if (f.hasOwnProperty(y)) {
                var C = f[y];
                y === 'children'
                  ? typeof C == 'string'
                    ? o.textContent !== C &&
                      (f.suppressHydrationWarning !== !0 && _l(o.textContent, C, e),
                      (a = ['children', C]))
                    : typeof C == 'number' &&
                      o.textContent !== '' + C &&
                      (f.suppressHydrationWarning !== !0 && _l(o.textContent, C, e),
                      (a = ['children', '' + C]))
                  : u.hasOwnProperty(y) && C != null && y === 'onScroll' && Qe('scroll', o);
              }
            switch (r) {
              case 'input':
                (_t(o), gn(o, f, !0));
                break;
              case 'textarea':
                (_t(o), Yt(o));
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
              e === 'http://www.w3.org/1999/xhtml' && (e = z(r)),
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
              (e[wn] = t),
              (e[Ti] = o),
              Ld(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((y = yn(r, o)), r)) {
                case 'dialog':
                  (Qe('cancel', e), Qe('close', e), (a = o));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (Qe('load', e), (a = o));
                  break;
                case 'video':
                case 'audio':
                  for (a = 0; a < bi.length; a++) Qe(bi[a], e);
                  a = o;
                  break;
                case 'source':
                  (Qe('error', e), (a = o));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (Qe('error', e), Qe('load', e), (a = o));
                  break;
                case 'details':
                  (Qe('toggle', e), (a = o));
                  break;
                case 'input':
                  (mn(e, o), (a = He(e, o)), Qe('invalid', e));
                  break;
                case 'option':
                  a = o;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!o.multiple }),
                    (a = S({}, o, { value: void 0 })),
                    Qe('invalid', e));
                  break;
                case 'textarea':
                  (Ae(e, o), (a = ee(e, o)), Qe('invalid', e));
                  break;
                default:
                  a = o;
              }
              (ht(r, a), (C = a));
              for (f in C)
                if (C.hasOwnProperty(f)) {
                  var E = C[f];
                  f === 'style'
                    ? $n(e, E)
                    : f === 'dangerouslySetInnerHTML'
                      ? ((E = E ? E.__html : void 0), E != null && Te(e, E))
                      : f === 'children'
                        ? typeof E == 'string'
                          ? (r !== 'textarea' || E !== '') && Pe(e, E)
                          : typeof E == 'number' && Pe(e, '' + E)
                        : f !== 'suppressContentEditableWarning' &&
                          f !== 'suppressHydrationWarning' &&
                          f !== 'autoFocus' &&
                          (u.hasOwnProperty(f)
                            ? E != null && f === 'onScroll' && Qe('scroll', e)
                            : E != null && M(e, f, E, y));
                }
              switch (r) {
                case 'input':
                  (_t(e), gn(e, o, !1));
                  break;
                case 'textarea':
                  (_t(e), Yt(e));
                  break;
                case 'option':
                  o.value != null && e.setAttribute('value', '' + be(o.value));
                  break;
                case 'select':
                  ((e.multiple = !!o.multiple),
                    (f = o.value),
                    f != null
                      ? D(e, !!o.multiple, f, !1)
                      : o.defaultValue != null && D(e, !!o.multiple, o.defaultValue, !0));
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
        return (wt(t), null);
      case 6:
        if (e && t.stateNode != null) Od(e, t, e.memoizedProps, o);
        else {
          if (typeof o != 'string' && t.stateNode === null) throw Error(l(166));
          if (((r = vr(Ri.current)), vr(kn.current), Ll(t))) {
            if (
              ((o = t.stateNode),
              (r = t.memoizedProps),
              (o[wn] = t),
              (f = o.nodeValue !== r) && ((e = Wt), e !== null))
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
              (o[wn] = t),
              (t.stateNode = o));
        }
        return (wt(t), null);
      case 13:
        if (
          (Ke(Xe),
          (o = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ye && $t !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Mc(), Vr(), (t.flags |= 98560), (f = !1));
          else if (((f = Ll(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(l(318));
              if (((f = t.memoizedState), (f = f !== null ? f.dehydrated : null), !f))
                throw Error(l(317));
              f[wn] = t;
            } else (Vr(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (wt(t), (f = !1));
          } else (un !== null && (ea(un), (un = null)), (f = !0));
          if (!f) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Xe.current & 1) !== 0 ? ut === 0 && (ut = 3) : ra())),
            t.updateQueue !== null && (t.flags |= 4),
            wt(t),
            null);
      case 4:
        return (Kr(), Us(e, t), e === null && Ni(t.stateNode.containerInfo), wt(t), null);
      case 10:
        return (ys(t.type._context), wt(t), null);
      case 17:
        return (It(t.type) && bl(), wt(t), null);
      case 19:
        if ((Ke(Xe), (f = t.memoizedState), f === null)) return (wt(t), null);
        if (((o = (t.flags & 128) !== 0), (y = f.rendering), y === null))
          if (o) Fi(f, !1);
          else {
            if (ut !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((y = Dl(e)), y !== null)) {
                  for (
                    t.flags |= 128,
                      Fi(f, !1),
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
                  return ($e(Xe, (Xe.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            f.tail !== null &&
              nt() > Jr &&
              ((t.flags |= 128), (o = !0), Fi(f, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = Dl(y)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                Fi(f, !0),
                f.tail === null && f.tailMode === 'hidden' && !y.alternate && !Ye)
              )
                return (wt(t), null);
            } else
              2 * nt() - f.renderingStartTime > Jr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (o = !0), Fi(f, !1), (t.lanes = 4194304));
          f.isBackwards
            ? ((y.sibling = t.child), (t.child = y))
            : ((r = f.last), r !== null ? (r.sibling = y) : (t.child = y), (f.last = y));
        }
        return f.tail !== null
          ? ((t = f.tail),
            (f.rendering = t),
            (f.tail = t.sibling),
            (f.renderingStartTime = nt()),
            (t.sibling = null),
            (r = Xe.current),
            $e(Xe, o ? (r & 1) | 2 : r & 1),
            t)
          : (wt(t), null);
      case 22:
      case 23:
        return (
          na(),
          (o = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
          o && (t.mode & 1) !== 0
            ? (Ut & 1073741824) !== 0 && (wt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : wt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Bm(e, t) {
    switch ((ds(t), t.tag)) {
      case 1:
        return (
          It(t.type) && bl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Kr(),
          Ke(Nt),
          Ke(yt),
          Cs(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Ss(t), null);
      case 13:
        if ((Ke(Xe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(l(340));
          Vr();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Ke(Xe), null);
      case 4:
        return (Kr(), null);
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
  var Hl = !1,
    kt = !1,
    Wm = typeof WeakSet == 'function' ? WeakSet : Set,
    le = null;
  function Yr(e, t) {
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
  var Rd = !1;
  function $m(e, t) {
    if (((ns = fl), (e = fc()), Ko(e))) {
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
              C = -1,
              E = -1,
              R = 0,
              Q = 0,
              K = e,
              $ = null;
            t: for (;;) {
              for (
                var re;
                K !== r || (a !== 0 && K.nodeType !== 3) || (C = y + a),
                  K !== f || (o !== 0 && K.nodeType !== 3) || (E = y + o),
                  K.nodeType === 3 && (y += K.nodeValue.length),
                  (re = K.firstChild) !== null;
              )
                (($ = K), (K = re));
              for (;;) {
                if (K === e) break t;
                if (
                  ($ === r && ++R === a && (C = y),
                  $ === f && ++Q === o && (E = y),
                  (re = K.nextSibling) !== null)
                )
                  break;
                ((K = $), ($ = K.parentNode));
              }
              K = re;
            }
            r = C === -1 || E === -1 ? null : { start: C, end: E };
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
                    var ce = oe.memoizedProps,
                      rt = oe.memoizedState,
                      j = t.stateNode,
                      b = j.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ce : cn(t.type, ce),
                        rt
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
          } catch (X) {
            Ze(t, t.return, X);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (le = e));
            break;
          }
          le = t.return;
        }
    return ((oe = Rd), (Rd = !1), oe);
  }
  function Bi(e, t, r) {
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
  function qs(e) {
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
  function Ad(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Ad(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[wn], delete t[Ti], delete t[ss], delete t[Cm], delete t[Em])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Md(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Dd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Md(e.return)) return null;
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
  function Hs(e, t, r) {
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
      for (Hs(e, t, r), e = e.sibling; e !== null; ) (Hs(e, t, r), (e = e.sibling));
  }
  function Qs(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6) ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Qs(e, t, r), e = e.sibling; e !== null; ) (Qs(e, t, r), (e = e.sibling));
  }
  var mt = null,
    dn = !1;
  function tr(e, t, r) {
    for (r = r.child; r !== null; ) (zd(e, t, r), (r = r.sibling));
  }
  function zd(e, t, r) {
    if (vn && typeof vn.onCommitFiberUnmount == 'function')
      try {
        vn.onCommitFiberUnmount(ol, r);
      } catch {}
    switch (r.tag) {
      case 5:
        kt || Yr(r, t);
      case 6:
        var o = mt,
          a = dn;
        ((mt = null),
          tr(e, t, r),
          (mt = o),
          (dn = a),
          mt !== null &&
            (dn
              ? ((e = mt),
                (r = r.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
              : mt.removeChild(r.stateNode)));
        break;
      case 18:
        mt !== null &&
          (dn
            ? ((e = mt),
              (r = r.stateNode),
              e.nodeType === 8 ? os(e.parentNode, r) : e.nodeType === 1 && os(e, r),
              vi(e))
            : os(mt, r.stateNode));
        break;
      case 4:
        ((o = mt),
          (a = dn),
          (mt = r.stateNode.containerInfo),
          (dn = !0),
          tr(e, t, r),
          (mt = o),
          (dn = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!kt && ((o = r.updateQueue), o !== null && ((o = o.lastEffect), o !== null))) {
          a = o = o.next;
          do {
            var f = a,
              y = f.destroy;
            ((f = f.tag),
              y !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && Vs(r, t, y),
              (a = a.next));
          } while (a !== o);
        }
        tr(e, t, r);
        break;
      case 1:
        if (!kt && (Yr(r, t), (o = r.stateNode), typeof o.componentWillUnmount == 'function'))
          try {
            ((o.props = r.memoizedProps), (o.state = r.memoizedState), o.componentWillUnmount());
          } catch (C) {
            Ze(r, t, C);
          }
        tr(e, t, r);
        break;
      case 21:
        tr(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((kt = (o = kt) || r.memoizedState !== null), tr(e, t, r), (kt = o))
          : tr(e, t, r);
        break;
      default:
        tr(e, t, r);
    }
  }
  function Fd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      (r === null && (r = e.stateNode = new Wm()),
        t.forEach(function (o) {
          var a = Xm.bind(null, e, o);
          r.has(o) || (r.add(o), o.then(a, a));
        }));
    }
  }
  function fn(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var o = 0; o < r.length; o++) {
        var a = r[o];
        try {
          var f = e,
            y = t,
            C = y;
          e: for (; C !== null; ) {
            switch (C.tag) {
              case 5:
                ((mt = C.stateNode), (dn = !1));
                break e;
              case 3:
                ((mt = C.stateNode.containerInfo), (dn = !0));
                break e;
              case 4:
                ((mt = C.stateNode.containerInfo), (dn = !0));
                break e;
            }
            C = C.return;
          }
          if (mt === null) throw Error(l(160));
          (zd(f, y, a), (mt = null), (dn = !1));
          var E = a.alternate;
          (E !== null && (E.return = null), (a.return = null));
        } catch (R) {
          Ze(a, t, R);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Bd(t, e), (t = t.sibling));
  }
  function Bd(e, t) {
    var r = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((fn(t, e), Sn(e), o & 4)) {
          try {
            (Bi(3, e, e.return), Ql(3, e));
          } catch (ce) {
            Ze(e, e.return, ce);
          }
          try {
            Bi(5, e, e.return);
          } catch (ce) {
            Ze(e, e.return, ce);
          }
        }
        break;
      case 1:
        (fn(t, e), Sn(e), o & 512 && r !== null && Yr(r, r.return));
        break;
      case 5:
        if ((fn(t, e), Sn(e), o & 512 && r !== null && Yr(r, r.return), e.flags & 32)) {
          var a = e.stateNode;
          try {
            Pe(a, '');
          } catch (ce) {
            Ze(e, e.return, ce);
          }
        }
        if (o & 4 && ((a = e.stateNode), a != null)) {
          var f = e.memoizedProps,
            y = r !== null ? r.memoizedProps : f,
            C = e.type,
            E = e.updateQueue;
          if (((e.updateQueue = null), E !== null))
            try {
              (C === 'input' && f.type === 'radio' && f.name != null && bt(a, f), yn(C, y));
              var R = yn(C, f);
              for (y = 0; y < E.length; y += 2) {
                var Q = E[y],
                  K = E[y + 1];
                Q === 'style'
                  ? $n(a, K)
                  : Q === 'dangerouslySetInnerHTML'
                    ? Te(a, K)
                    : Q === 'children'
                      ? Pe(a, K)
                      : M(a, Q, K, R);
              }
              switch (C) {
                case 'input':
                  Dt(a, f);
                  break;
                case 'textarea':
                  We(a, f);
                  break;
                case 'select':
                  var $ = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!f.multiple;
                  var re = f.value;
                  re != null
                    ? D(a, !!f.multiple, re, !1)
                    : $ !== !!f.multiple &&
                      (f.defaultValue != null
                        ? D(a, !!f.multiple, f.defaultValue, !0)
                        : D(a, !!f.multiple, f.multiple ? [] : '', !1));
              }
              a[Ti] = f;
            } catch (ce) {
              Ze(e, e.return, ce);
            }
        }
        break;
      case 6:
        if ((fn(t, e), Sn(e), o & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          ((a = e.stateNode), (f = e.memoizedProps));
          try {
            a.nodeValue = f;
          } catch (ce) {
            Ze(e, e.return, ce);
          }
        }
        break;
      case 3:
        if ((fn(t, e), Sn(e), o & 4 && r !== null && r.memoizedState.isDehydrated))
          try {
            vi(t.containerInfo);
          } catch (ce) {
            Ze(e, e.return, ce);
          }
        break;
      case 4:
        (fn(t, e), Sn(e));
        break;
      case 13:
        (fn(t, e),
          Sn(e),
          (a = e.child),
          a.flags & 8192 &&
            ((f = a.memoizedState !== null),
            (a.stateNode.isHidden = f),
            !f || (a.alternate !== null && a.alternate.memoizedState !== null) || (Ys = nt())),
          o & 4 && Fd(e));
        break;
      case 22:
        if (
          ((Q = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((kt = (R = kt) || Q), fn(t, e), (kt = R)) : fn(t, e),
          Sn(e),
          o & 8192)
        ) {
          if (
            ((R = e.memoizedState !== null), (e.stateNode.isHidden = R) && !Q && (e.mode & 1) !== 0)
          )
            for (le = e, Q = e.child; Q !== null; ) {
              for (K = le = Q; le !== null; ) {
                switch ((($ = le), (re = $.child), $.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Bi(4, $, $.return);
                    break;
                  case 1:
                    Yr($, $.return);
                    var oe = $.stateNode;
                    if (typeof oe.componentWillUnmount == 'function') {
                      ((o = $), (r = $.return));
                      try {
                        ((t = o),
                          (oe.props = t.memoizedProps),
                          (oe.state = t.memoizedState),
                          oe.componentWillUnmount());
                      } catch (ce) {
                        Ze(o, r, ce);
                      }
                    }
                    break;
                  case 5:
                    Yr($, $.return);
                    break;
                  case 22:
                    if ($.memoizedState !== null) {
                      Ud(K);
                      continue;
                    }
                }
                re !== null ? ((re.return = $), (le = re)) : Ud(K);
              }
              Q = Q.sibling;
            }
          e: for (Q = null, K = e; ; ) {
            if (K.tag === 5) {
              if (Q === null) {
                Q = K;
                try {
                  ((a = K.stateNode),
                    R
                      ? ((f = a.style),
                        typeof f.setProperty == 'function'
                          ? f.setProperty('display', 'none', 'important')
                          : (f.display = 'none'))
                      : ((C = K.stateNode),
                        (E = K.memoizedProps.style),
                        (y = E != null && E.hasOwnProperty('display') ? E.display : null),
                        (C.style.display = Xt('display', y))));
                } catch (ce) {
                  Ze(e, e.return, ce);
                }
              }
            } else if (K.tag === 6) {
              if (Q === null)
                try {
                  K.stateNode.nodeValue = R ? '' : K.memoizedProps;
                } catch (ce) {
                  Ze(e, e.return, ce);
                }
            } else if (
              ((K.tag !== 22 && K.tag !== 23) || K.memoizedState === null || K === e) &&
              K.child !== null
            ) {
              ((K.child.return = K), (K = K.child));
              continue;
            }
            if (K === e) break e;
            for (; K.sibling === null; ) {
              if (K.return === null || K.return === e) break e;
              (Q === K && (Q = null), (K = K.return));
            }
            (Q === K && (Q = null), (K.sibling.return = K.return), (K = K.sibling));
          }
        }
        break;
      case 19:
        (fn(t, e), Sn(e), o & 4 && Fd(e));
        break;
      case 21:
        break;
      default:
        (fn(t, e), Sn(e));
    }
  }
  function Sn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Md(r)) {
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
            o.flags & 32 && (Pe(a, ''), (o.flags &= -33));
            var f = Dd(e);
            Qs(e, f, a);
            break;
          case 3:
          case 4:
            var y = o.stateNode.containerInfo,
              C = Dd(e);
            Hs(e, C, y);
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
  function Um(e, t, r) {
    ((le = e), Wd(e));
  }
  function Wd(e, t, r) {
    for (var o = (e.mode & 1) !== 0; le !== null; ) {
      var a = le,
        f = a.child;
      if (a.tag === 22 && o) {
        var y = a.memoizedState !== null || Hl;
        if (!y) {
          var C = a.alternate,
            E = (C !== null && C.memoizedState !== null) || kt;
          C = Hl;
          var R = kt;
          if (((Hl = y), (kt = E) && !R))
            for (le = a; le !== null; )
              ((y = le),
                (E = y.child),
                y.tag === 22 && y.memoizedState !== null
                  ? Vd(a)
                  : E !== null
                    ? ((E.return = y), (le = E))
                    : Vd(a));
          for (; f !== null; ) ((le = f), Wd(f), (f = f.sibling));
          ((le = a), (Hl = C), (kt = R));
        }
        $d(e);
      } else (a.subtreeFlags & 8772) !== 0 && f !== null ? ((f.return = a), (le = f)) : $d(e);
    }
  }
  function $d(e) {
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
                kt || Ql(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !kt)
                  if (r === null) o.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type ? r.memoizedProps : cn(t.type, r.memoizedProps);
                    o.componentDidUpdate(a, r.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var f = t.updateQueue;
                f !== null && Uc(t, f, o);
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
                  Uc(t, y, r);
                }
                break;
              case 5:
                var C = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = C;
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
                  var R = t.alternate;
                  if (R !== null) {
                    var Q = R.memoizedState;
                    if (Q !== null) {
                      var K = Q.dehydrated;
                      K !== null && vi(K);
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
          kt || (t.flags & 512 && qs(t));
        } catch ($) {
          Ze(t, t.return, $);
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
  function Ud(e) {
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
  function Vd(e) {
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
              qs(t);
            } catch (E) {
              Ze(t, f, E);
            }
            break;
          case 5:
            var y = t.return;
            try {
              qs(t);
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
      var C = t.sibling;
      if (C !== null) {
        ((C.return = t.return), (le = C));
        break;
      }
      le = t.return;
    }
  }
  var Vm = Math.ceil,
    Kl = te.ReactCurrentDispatcher,
    Ks = te.ReactCurrentOwner,
    nn = te.ReactCurrentBatchConfig,
    Oe = 0,
    dt = null,
    lt = null,
    gt = 0,
    Ut = 0,
    Xr = Yn(0),
    ut = 0,
    Wi = null,
    kr = 0,
    Gl = 0,
    Gs = 0,
    $i = null,
    jt = null,
    Ys = 0,
    Jr = 1 / 0,
    Rn = null,
    Yl = !1,
    Xs = null,
    nr = null,
    Xl = !1,
    rr = null,
    Jl = 0,
    Ui = 0,
    Js = null,
    Zl = -1,
    eo = 0;
  function Et() {
    return (Oe & 6) !== 0 ? nt() : Zl !== -1 ? Zl : (Zl = nt());
  }
  function ir(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Oe & 2) !== 0 && gt !== 0
        ? gt & -gt
        : Nm.transition !== null
          ? (eo === 0 && (eo = Du()), eo)
          : ((e = ze), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Hu(e.type))), e);
  }
  function pn(e, t, r, o) {
    if (50 < Ui) throw ((Ui = 0), (Js = null), Error(l(185)));
    (pi(e, r, o),
      ((Oe & 2) === 0 || e !== dt) &&
        (e === dt && ((Oe & 2) === 0 && (Gl |= r), ut === 4 && lr(e, gt)),
        Lt(e, o),
        r === 1 && Oe === 0 && (t.mode & 1) === 0 && ((Jr = nt() + 500), Il && Jn())));
  }
  function Lt(e, t) {
    var r = e.callbackNode;
    Nh(e, t);
    var o = ul(e, e === dt ? gt : 0);
    if (o === 0) (r !== null && Ru(r), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((r != null && Ru(r), t === 1))
        (e.tag === 0 ? bm(Hd.bind(null, e)) : Lc(Hd.bind(null, e)),
          Sm(function () {
            (Oe & 6) === 0 && Jn();
          }),
          (r = null));
      else {
        switch (zu(o)) {
          case 1:
            r = Lo;
            break;
          case 4:
            r = Au;
            break;
          case 16:
            r = ll;
            break;
          case 536870912:
            r = Mu;
            break;
          default:
            r = ll;
        }
        r = ef(r, qd.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = r));
    }
  }
  function qd(e, t) {
    if (((Zl = -1), (eo = 0), (Oe & 6) !== 0)) throw Error(l(327));
    var r = e.callbackNode;
    if (Zr() && e.callbackNode !== r) return null;
    var o = ul(e, e === dt ? gt : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = to(e, o);
    else {
      t = o;
      var a = Oe;
      Oe |= 2;
      var f = Kd();
      (dt !== e || gt !== t) && ((Rn = null), (Jr = nt() + 500), Sr(e, t));
      do
        try {
          Qm();
          break;
        } catch (C) {
          Qd(e, C);
        }
      while (!0);
      (gs(), (Kl.current = f), (Oe = a), lt !== null ? (t = 0) : ((dt = null), (gt = 0), (t = ut)));
    }
    if (t !== 0) {
      if ((t === 2 && ((a = Po(e)), a !== 0 && ((o = a), (t = Zs(e, a)))), t === 1))
        throw ((r = Wi), Sr(e, 0), lr(e, o), Lt(e, nt()), r);
      if (t === 6) lr(e, o);
      else {
        if (
          ((a = e.current.alternate),
          (o & 30) === 0 &&
            !qm(a) &&
            ((t = to(e, o)),
            t === 2 && ((f = Po(e)), f !== 0 && ((o = f), (t = Zs(e, f)))),
            t === 1))
        )
          throw ((r = Wi), Sr(e, 0), lr(e, o), Lt(e, nt()), r);
        switch (((e.finishedWork = a), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            _r(e, jt, Rn);
            break;
          case 3:
            if ((lr(e, o), (o & 130023424) === o && ((t = Ys + 500 - nt()), 10 < t))) {
              if (ul(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & o) !== o)) {
                (Et(), (e.pingedLanes |= e.suspendedLanes & a));
                break;
              }
              e.timeoutHandle = ls(_r.bind(null, e, jt, Rn), t);
              break;
            }
            _r(e, jt, Rn);
            break;
          case 4:
            if ((lr(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, a = -1; 0 < o; ) {
              var y = 31 - sn(o);
              ((f = 1 << y), (y = t[y]), y > a && (a = y), (o &= ~f));
            }
            if (
              ((o = a),
              (o = nt() - o),
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
                            : 1960 * Vm(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = ls(_r.bind(null, e, jt, Rn), o);
              break;
            }
            _r(e, jt, Rn);
            break;
          case 5:
            _r(e, jt, Rn);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return (Lt(e, nt()), e.callbackNode === r ? qd.bind(null, e) : null);
  }
  function Zs(e, t) {
    var r = $i;
    return (
      e.current.memoizedState.isDehydrated && (Sr(e, t).flags |= 256),
      (e = to(e, t)),
      e !== 2 && ((t = jt), (jt = r), t !== null && ea(t)),
      e
    );
  }
  function ea(e) {
    jt === null ? (jt = e) : jt.push.apply(jt, e);
  }
  function qm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var o = 0; o < r.length; o++) {
            var a = r[o],
              f = a.getSnapshot;
            a = a.value;
            try {
              if (!an(f(), a)) return !1;
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
  function lr(e, t) {
    for (
      t &= ~Gs, t &= ~Gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var r = 31 - sn(t),
        o = 1 << r;
      ((e[r] = -1), (t &= ~o));
    }
  }
  function Hd(e) {
    if ((Oe & 6) !== 0) throw Error(l(327));
    Zr();
    var t = ul(e, 0);
    if ((t & 1) === 0) return (Lt(e, nt()), null);
    var r = to(e, t);
    if (e.tag !== 0 && r === 2) {
      var o = Po(e);
      o !== 0 && ((t = o), (r = Zs(e, o)));
    }
    if (r === 1) throw ((r = Wi), Sr(e, 0), lr(e, t), Lt(e, nt()), r);
    if (r === 6) throw Error(l(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      _r(e, jt, Rn),
      Lt(e, nt()),
      null
    );
  }
  function ta(e, t) {
    var r = Oe;
    Oe |= 1;
    try {
      return e(t);
    } finally {
      ((Oe = r), Oe === 0 && ((Jr = nt() + 500), Il && Jn()));
    }
  }
  function xr(e) {
    rr !== null && rr.tag === 0 && (Oe & 6) === 0 && Zr();
    var t = Oe;
    Oe |= 1;
    var r = nn.transition,
      o = ze;
    try {
      if (((nn.transition = null), (ze = 1), e)) return e();
    } finally {
      ((ze = o), (nn.transition = r), (Oe = t), (Oe & 6) === 0 && Jn());
    }
  }
  function na() {
    ((Ut = Xr.current), Ke(Xr));
  }
  function Sr(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), xm(r)), lt !== null))
      for (r = lt.return; r !== null; ) {
        var o = r;
        switch ((ds(o), o.tag)) {
          case 1:
            ((o = o.type.childContextTypes), o != null && bl());
            break;
          case 3:
            (Kr(), Ke(Nt), Ke(yt), Cs());
            break;
          case 5:
            Ss(o);
            break;
          case 4:
            Kr();
            break;
          case 13:
            Ke(Xe);
            break;
          case 19:
            Ke(Xe);
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
      ((dt = e),
      (lt = e = or(e.current, null)),
      (gt = Ut = t),
      (ut = 0),
      (Wi = null),
      (Gs = Gl = kr = 0),
      (jt = $i = null),
      yr !== null)
    ) {
      for (t = 0; t < yr.length; t++)
        if (((r = yr[t]), (o = r.interleaved), o !== null)) {
          r.interleaved = null;
          var a = o.next,
            f = r.pending;
          if (f !== null) {
            var y = f.next;
            ((f.next = a), (o.next = y));
          }
          r.pending = o;
        }
      yr = null;
    }
    return e;
  }
  function Qd(e, t) {
    do {
      var r = lt;
      try {
        if ((gs(), (zl.current = $l), Fl)) {
          for (var o = Je.memoizedState; o !== null; ) {
            var a = o.queue;
            (a !== null && (a.pending = null), (o = o.next));
          }
          Fl = !1;
        }
        if (
          ((wr = 0),
          (ct = at = Je = null),
          (Ai = !1),
          (Mi = 0),
          (Ks.current = null),
          r === null || r.return === null)
        ) {
          ((ut = 1), (Wi = t), (lt = null));
          break;
        }
        e: {
          var f = e,
            y = r.return,
            C = r,
            E = t;
          if (
            ((t = gt),
            (C.flags |= 32768),
            E !== null && typeof E == 'object' && typeof E.then == 'function')
          ) {
            var R = E,
              Q = C,
              K = Q.tag;
            if ((Q.mode & 1) === 0 && (K === 0 || K === 11 || K === 15)) {
              var $ = Q.alternate;
              $
                ? ((Q.updateQueue = $.updateQueue),
                  (Q.memoizedState = $.memoizedState),
                  (Q.lanes = $.lanes))
                : ((Q.updateQueue = null), (Q.memoizedState = null));
            }
            var re = vd(y);
            if (re !== null) {
              ((re.flags &= -257),
                wd(re, y, C, f, t),
                re.mode & 1 && yd(f, R, t),
                (t = re),
                (E = R));
              var oe = t.updateQueue;
              if (oe === null) {
                var ce = new Set();
                (ce.add(E), (t.updateQueue = ce));
              } else oe.add(E);
              break e;
            } else {
              if ((t & 1) === 0) {
                (yd(f, R, t), ra());
                break e;
              }
              E = Error(l(426));
            }
          } else if (Ye && C.mode & 1) {
            var rt = vd(y);
            if (rt !== null) {
              ((rt.flags & 65536) === 0 && (rt.flags |= 256), wd(rt, y, C, f, t), hs(Gr(E, C)));
              break e;
            }
          }
          ((f = E = Gr(E, C)),
            ut !== 4 && (ut = 2),
            $i === null ? ($i = [f]) : $i.push(f),
            (f = y));
          do {
            switch (f.tag) {
              case 3:
                ((f.flags |= 65536), (t &= -t), (f.lanes |= t));
                var j = md(f, E, t);
                $c(f, j);
                break e;
              case 1:
                C = E;
                var b = f.type,
                  L = f.stateNode;
                if (
                  (f.flags & 128) === 0 &&
                  (typeof b.getDerivedStateFromError == 'function' ||
                    (L !== null &&
                      typeof L.componentDidCatch == 'function' &&
                      (nr === null || !nr.has(L))))
                ) {
                  ((f.flags |= 65536), (t &= -t), (f.lanes |= t));
                  var X = gd(f, C, t);
                  $c(f, X);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        Yd(r);
      } catch (he) {
        ((t = he), lt === r && r !== null && (lt = r = r.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Kd() {
    var e = Kl.current;
    return ((Kl.current = $l), e === null ? $l : e);
  }
  function ra() {
    ((ut === 0 || ut === 3 || ut === 2) && (ut = 4),
      dt === null || ((kr & 268435455) === 0 && (Gl & 268435455) === 0) || lr(dt, gt));
  }
  function to(e, t) {
    var r = Oe;
    Oe |= 2;
    var o = Kd();
    (dt !== e || gt !== t) && ((Rn = null), Sr(e, t));
    do
      try {
        Hm();
        break;
      } catch (a) {
        Qd(e, a);
      }
    while (!0);
    if ((gs(), (Oe = r), (Kl.current = o), lt !== null)) throw Error(l(261));
    return ((dt = null), (gt = 0), ut);
  }
  function Hm() {
    for (; lt !== null; ) Gd(lt);
  }
  function Qm() {
    for (; lt !== null && !vh(); ) Gd(lt);
  }
  function Gd(e) {
    var t = Zd(e.alternate, e, Ut);
    ((e.memoizedProps = e.pendingProps), t === null ? Yd(e) : (lt = t), (Ks.current = null));
  }
  function Yd(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Fm(r, t, Ut)), r !== null)) {
          lt = r;
          return;
        }
      } else {
        if (((r = Bm(r, t)), r !== null)) {
          ((r.flags &= 32767), (lt = r));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((ut = 6), (lt = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        lt = t;
        return;
      }
      lt = t = e;
    } while (t !== null);
    ut === 0 && (ut = 5);
  }
  function _r(e, t, r) {
    var o = ze,
      a = nn.transition;
    try {
      ((nn.transition = null), (ze = 1), Km(e, t, r, o));
    } finally {
      ((nn.transition = a), (ze = o));
    }
    return null;
  }
  function Km(e, t, r, o) {
    do Zr();
    while (rr !== null);
    if ((Oe & 6) !== 0) throw Error(l(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(l(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var f = r.lanes | r.childLanes;
    if (
      (Ih(e, f),
      e === dt && ((lt = dt = null), (gt = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        Xl ||
        ((Xl = !0),
        ef(ll, function () {
          return (Zr(), null);
        })),
      (f = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || f)
    ) {
      ((f = nn.transition), (nn.transition = null));
      var y = ze;
      ze = 1;
      var C = Oe;
      ((Oe |= 4),
        (Ks.current = null),
        $m(e, r),
        Bd(r, e),
        hm(rs),
        (fl = !!ns),
        (rs = ns = null),
        (e.current = r),
        Um(r),
        wh(),
        (Oe = C),
        (ze = y),
        (nn.transition = f));
    } else e.current = r;
    if (
      (Xl && ((Xl = !1), (rr = e), (Jl = a)),
      (f = e.pendingLanes),
      f === 0 && (nr = null),
      Sh(r.stateNode),
      Lt(e, nt()),
      t !== null)
    )
      for (o = e.onRecoverableError, r = 0; r < t.length; r++)
        ((a = t[r]), o(a.value, { componentStack: a.stack, digest: a.digest }));
    if (Yl) throw ((Yl = !1), (e = Xs), (Xs = null), e);
    return (
      (Jl & 1) !== 0 && e.tag !== 0 && Zr(),
      (f = e.pendingLanes),
      (f & 1) !== 0 ? (e === Js ? Ui++ : ((Ui = 0), (Js = e))) : (Ui = 0),
      Jn(),
      null
    );
  }
  function Zr() {
    if (rr !== null) {
      var e = zu(Jl),
        t = nn.transition,
        r = ze;
      try {
        if (((nn.transition = null), (ze = 16 > e ? 16 : e), rr === null)) var o = !1;
        else {
          if (((e = rr), (rr = null), (Jl = 0), (Oe & 6) !== 0)) throw Error(l(331));
          var a = Oe;
          for (Oe |= 4, le = e.current; le !== null; ) {
            var f = le,
              y = f.child;
            if ((le.flags & 16) !== 0) {
              var C = f.deletions;
              if (C !== null) {
                for (var E = 0; E < C.length; E++) {
                  var R = C[E];
                  for (le = R; le !== null; ) {
                    var Q = le;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Bi(8, Q, f);
                    }
                    var K = Q.child;
                    if (K !== null) ((K.return = Q), (le = K));
                    else
                      for (; le !== null; ) {
                        Q = le;
                        var $ = Q.sibling,
                          re = Q.return;
                        if ((Ad(Q), Q === R)) {
                          le = null;
                          break;
                        }
                        if ($ !== null) {
                          (($.return = re), (le = $));
                          break;
                        }
                        le = re;
                      }
                  }
                }
                var oe = f.alternate;
                if (oe !== null) {
                  var ce = oe.child;
                  if (ce !== null) {
                    oe.child = null;
                    do {
                      var rt = ce.sibling;
                      ((ce.sibling = null), (ce = rt));
                    } while (ce !== null);
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
                      Bi(9, f, f.return);
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
                if (((C = le), (C.flags & 2048) !== 0))
                  try {
                    switch (C.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ql(9, C);
                    }
                  } catch (he) {
                    Ze(C, C.return, he);
                  }
                if (C === y) {
                  le = null;
                  break e;
                }
                var X = C.sibling;
                if (X !== null) {
                  ((X.return = C.return), (le = X));
                  break e;
                }
                le = C.return;
              }
          }
          if (((Oe = a), Jn(), vn && typeof vn.onPostCommitFiberRoot == 'function'))
            try {
              vn.onPostCommitFiberRoot(ol, e);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        ((ze = r), (nn.transition = t));
      }
    }
    return !1;
  }
  function Xd(e, t, r) {
    ((t = Gr(r, t)),
      (t = md(e, t, 1)),
      (e = er(e, t, 1)),
      (t = Et()),
      e !== null && (pi(e, 1, t), Lt(e, t)));
  }
  function Ze(e, t, r) {
    if (e.tag === 3) Xd(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Xd(t, e, r);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof o.componentDidCatch == 'function' && (nr === null || !nr.has(o)))
          ) {
            ((e = Gr(r, e)),
              (e = gd(t, e, 1)),
              (t = er(t, e, 1)),
              (e = Et()),
              t !== null && (pi(t, 1, e), Lt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Gm(e, t, r) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (t = Et()),
      (e.pingedLanes |= e.suspendedLanes & r),
      dt === e &&
        (gt & r) === r &&
        (ut === 4 || (ut === 3 && (gt & 130023424) === gt && 500 > nt() - Ys)
          ? Sr(e, 0)
          : (Gs |= r)),
      Lt(e, t));
  }
  function Jd(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = al), (al <<= 1), (al & 130023424) === 0 && (al = 4194304)));
    var r = Et();
    ((e = Ln(e, t)), e !== null && (pi(e, t, r), Lt(e, r)));
  }
  function Ym(e) {
    var t = e.memoizedState,
      r = 0;
    (t !== null && (r = t.retryLane), Jd(e, r));
  }
  function Xm(e, t) {
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
    (o !== null && o.delete(t), Jd(e, r));
  }
  var Zd;
  Zd = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Nt.current) Tt = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return ((Tt = !1), zm(e, t, r));
        Tt = (e.flags & 131072) !== 0;
      }
    else ((Tt = !1), Ye && (t.flags & 1048576) !== 0 && Pc(t, jl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        (ql(e, t), (e = t.pendingProps));
        var a = Wr(t, yt.current);
        (Qr(t, r), (a = Ns(null, t, o, e, a, r)));
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
              It(o) ? ((f = !0), Nl(t)) : (f = !1),
              (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
              ks(t),
              (a.updater = Ul),
              (t.stateNode = a),
              (a._reactInternals = t),
              Rs(t, o, e, r),
              (t = zs(null, t, o, !0, f, r)))
            : ((t.tag = 0), Ye && f && cs(t), Ct(null, t, a, r), (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
            (ql(e, t),
            (e = t.pendingProps),
            (a = o._init),
            (o = a(o._payload)),
            (t.type = o),
            (a = t.tag = Zm(o)),
            (e = cn(o, e)),
            a)
          ) {
            case 0:
              t = Ds(null, t, o, e, r);
              break e;
            case 1:
              t = Ed(null, t, o, e, r);
              break e;
            case 11:
              t = kd(null, t, o, e, r);
              break e;
            case 14:
              t = xd(null, t, o, cn(o.type, e), r);
              break e;
          }
          throw Error(l(306, o, ''));
        }
        return t;
      case 0:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : cn(o, a)),
          Ds(e, t, o, a, r)
        );
      case 1:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : cn(o, a)),
          Ed(e, t, o, a, r)
        );
      case 3:
        e: {
          if ((bd(t), e === null)) throw Error(l(387));
          ((o = t.pendingProps),
            (f = t.memoizedState),
            (a = f.element),
            Wc(e, t),
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
              ((a = Gr(Error(l(423)), t)), (t = Nd(e, t, o, r, a)));
              break e;
            } else if (o !== a) {
              ((a = Gr(Error(l(424)), t)), (t = Nd(e, t, o, r, a)));
              break e;
            } else
              for (
                $t = Gn(t.stateNode.containerInfo.firstChild),
                  Wt = t,
                  Ye = !0,
                  un = null,
                  r = Fc(t, null, o, r),
                  t.child = r;
                r;
              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
          else {
            if ((Vr(), o === a)) {
              t = On(e, t, r);
              break e;
            }
            Ct(e, t, o, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Vc(t),
          e === null && ps(t),
          (o = t.type),
          (a = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (y = a.children),
          is(o, a) ? (y = null) : f !== null && is(o, f) && (t.flags |= 32),
          Cd(e, t),
          Ct(e, t, y, r),
          t.child
        );
      case 6:
        return (e === null && ps(t), null);
      case 13:
        return Id(e, t, r);
      case 4:
        return (
          xs(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = qr(t, null, o, r)) : Ct(e, t, o, r),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : cn(o, a)),
          kd(e, t, o, a, r)
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
            $e(Ol, o._currentValue),
            (o._currentValue = y),
            f !== null)
          )
            if (an(f.value, y)) {
              if (f.children === a.children && !Nt.current) {
                t = On(e, t, r);
                break e;
              }
            } else
              for (f = t.child, f !== null && (f.return = t); f !== null; ) {
                var C = f.dependencies;
                if (C !== null) {
                  y = f.child;
                  for (var E = C.firstContext; E !== null; ) {
                    if (E.context === o) {
                      if (f.tag === 1) {
                        ((E = Pn(-1, r & -r)), (E.tag = 2));
                        var R = f.updateQueue;
                        if (R !== null) {
                          R = R.shared;
                          var Q = R.pending;
                          (Q === null ? (E.next = E) : ((E.next = Q.next), (Q.next = E)),
                            (R.pending = E));
                        }
                      }
                      ((f.lanes |= r),
                        (E = f.alternate),
                        E !== null && (E.lanes |= r),
                        vs(f.return, r, t),
                        (C.lanes |= r));
                      break;
                    }
                    E = E.next;
                  }
                } else if (f.tag === 10) y = f.type === t.type ? null : f.child;
                else if (f.tag === 18) {
                  if (((y = f.return), y === null)) throw Error(l(341));
                  ((y.lanes |= r),
                    (C = y.alternate),
                    C !== null && (C.lanes |= r),
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
          Qr(t, r),
          (a = en(a)),
          (o = o(a)),
          (t.flags |= 1),
          Ct(e, t, o, r),
          t.child
        );
      case 14:
        return ((o = t.type), (a = cn(o, t.pendingProps)), (a = cn(o.type, a)), xd(e, t, o, a, r));
      case 15:
        return Sd(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : cn(o, a)),
          ql(e, t),
          (t.tag = 1),
          It(o) ? ((e = !0), Nl(t)) : (e = !1),
          Qr(t, r),
          pd(t, o, a),
          Rs(t, o, a, r),
          zs(null, t, o, !0, e, r)
        );
      case 19:
        return jd(e, t, r);
      case 22:
        return _d(e, t, r);
    }
    throw Error(l(156, t.tag));
  };
  function ef(e, t) {
    return Ou(e, t);
  }
  function Jm(e, t, r, o) {
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
  function rn(e, t, r, o) {
    return new Jm(e, t, r, o);
  }
  function ia(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Zm(e) {
    if (typeof e == 'function') return ia(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === W)) return 11;
      if (e === q) return 14;
    }
    return 2;
  }
  function or(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = rn(e.tag, t, e.key, e.mode)),
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
        case V:
          return Cr(r.children, a, f, t);
        case ue:
          ((y = 8), (a |= 8));
          break;
        case ae:
          return ((e = rn(12, r, t, a | 2)), (e.elementType = ae), (e.lanes = f), e);
        case pe:
          return ((e = rn(13, r, t, a)), (e.elementType = pe), (e.lanes = f), e);
        case H:
          return ((e = rn(19, r, t, a)), (e.elementType = H), (e.lanes = f), e);
        case fe:
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
              case W:
                y = 11;
                break e;
              case q:
                y = 14;
                break e;
              case me:
                ((y = 16), (o = null));
                break e;
            }
          throw Error(l(130, e == null ? e : typeof e, ''));
      }
    return ((t = rn(y, r, t, a)), (t.elementType = e), (t.type = o), (t.lanes = f), t);
  }
  function Cr(e, t, r, o) {
    return ((e = rn(7, e, o, t)), (e.lanes = r), e);
  }
  function ro(e, t, r, o) {
    return (
      (e = rn(22, e, o, t)),
      (e.elementType = fe),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function la(e, t, r) {
    return ((e = rn(6, e, null, t)), (e.lanes = r), e);
  }
  function oa(e, t, r) {
    return (
      (t = rn(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function eg(e, t, r, o, a) {
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
  function sa(e, t, r, o, a, f, y, C, E) {
    return (
      (e = new eg(e, t, r, C, E)),
      t === 1 ? ((t = 1), f === !0 && (t |= 8)) : (t = 0),
      (f = rn(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (f.memoizedState = {
        element: o,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ks(f),
      e
    );
  }
  function tg(e, t, r) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: A,
      key: o == null ? null : '' + o,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function tf(e) {
    if (!e) return Xn;
    e = e._reactInternals;
    e: {
      if (fr(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (It(t.type)) {
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
      if (It(r)) return Tc(e, r, t);
    }
    return t;
  }
  function nf(e, t, r, o, a, f, y, C, E) {
    return (
      (e = sa(r, o, !0, e, a, f, y, C, E)),
      (e.context = tf(null)),
      (r = e.current),
      (o = Et()),
      (a = ir(r)),
      (f = Pn(o, a)),
      (f.callback = t ?? null),
      er(r, f, a),
      (e.current.lanes = a),
      pi(e, a, o),
      Lt(e, o),
      e
    );
  }
  function io(e, t, r, o) {
    var a = t.current,
      f = Et(),
      y = ir(a);
    return (
      (r = tf(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Pn(f, y)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = er(a, t, y)),
      e !== null && (pn(e, a, y, f), Al(e, a, y)),
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
  function rf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function aa(e, t) {
    (rf(e, t), (e = e.alternate) && rf(e, t));
  }
  function ng() {
    return null;
  }
  var lf =
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
          (xr(function () {
            io(null, e, null, null);
          }),
            (t[Nn] = null));
        }
      }));
  function oo(e) {
    this._internalRoot = e;
  }
  oo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Wu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Hn.length && t !== 0 && t < Hn[r].priority; r++);
      (Hn.splice(r, 0, e), r === 0 && Vu(e));
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
  function of() {}
  function rg(e, t, r, o, a) {
    if (a) {
      if (typeof o == 'function') {
        var f = o;
        o = function () {
          var R = lo(y);
          f.call(R);
        };
      }
      var y = nf(t, o, e, 0, null, !1, !1, '', of);
      return (
        (e._reactRootContainer = y),
        (e[Nn] = y.current),
        Ni(e.nodeType === 8 ? e.parentNode : e),
        xr(),
        y
      );
    }
    for (; (a = e.lastChild); ) e.removeChild(a);
    if (typeof o == 'function') {
      var C = o;
      o = function () {
        var R = lo(E);
        C.call(R);
      };
    }
    var E = sa(e, 0, !1, null, null, !1, !1, '', of);
    return (
      (e._reactRootContainer = E),
      (e[Nn] = E.current),
      Ni(e.nodeType === 8 ? e.parentNode : e),
      xr(function () {
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
        var C = a;
        a = function () {
          var E = lo(y);
          C.call(E);
        };
      }
      io(t, y, e, a);
    } else y = rg(r, t, e, a, o);
    return lo(y);
  }
  ((Fu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = fi(t.pendingLanes);
          r !== 0 && (Ro(t, r | 1), Lt(t, nt()), (Oe & 6) === 0 && ((Jr = nt() + 500), Jn()));
        }
        break;
      case 13:
        (xr(function () {
          var o = Ln(e, 1);
          if (o !== null) {
            var a = Et();
            pn(o, e, 1, a);
          }
        }),
          aa(e, 1));
    }
  }),
    (Ao = function (e) {
      if (e.tag === 13) {
        var t = Ln(e, 134217728);
        if (t !== null) {
          var r = Et();
          pn(t, e, 134217728, r);
        }
        aa(e, 134217728);
      }
    }),
    (Bu = function (e) {
      if (e.tag === 13) {
        var t = ir(e),
          r = Ln(e, t);
        if (r !== null) {
          var o = Et();
          pn(r, e, t, o);
        }
        aa(e, t);
      }
    }),
    (Wu = function () {
      return ze;
    }),
    ($u = function (e, t) {
      var r = ze;
      try {
        return ((ze = e), t());
      } finally {
        ze = r;
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
                (Wn(o), Dt(o, a));
              }
            }
          }
          break;
        case 'textarea':
          We(e, r);
          break;
        case 'select':
          ((t = r.value), t != null && D(e, !!r.multiple, t, !1));
      }
    }),
    (bu = ta),
    (Nu = xr));
  var ig = { usingClientEntryPoint: !1, Events: [ji, Fr, El, Cu, Eu, ta] },
    Vi = {
      findFiberByHostInstance: pr,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    lg = {
      bundleType: Vi.bundleType,
      version: Vi.version,
      rendererPackageName: Vi.rendererPackageName,
      rendererConfig: Vi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: te.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Lu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Vi.findFiberByHostInstance || ng,
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
        ((ol = uo.inject(lg)), (vn = uo));
      } catch {}
  }
  return (
    (Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ig),
    (Pt.createPortal = function (e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ca(t)) throw Error(l(200));
      return tg(e, t, null, r);
    }),
    (Pt.createRoot = function (e, t) {
      if (!ca(e)) throw Error(l(299));
      var r = !1,
        o = '',
        a = lf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = sa(e, 1, !1, null, null, r, !1, o, a)),
        (e[Nn] = t.current),
        Ni(e.nodeType === 8 ? e.parentNode : e),
        new ua(t)
      );
    }),
    (Pt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(l(188))
          : ((e = Object.keys(e).join(',')), Error(l(268, e)));
      return ((e = Lu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Pt.flushSync = function (e) {
      return xr(e);
    }),
    (Pt.hydrate = function (e, t, r) {
      if (!so(t)) throw Error(l(200));
      return ao(null, e, t, !0, r);
    }),
    (Pt.hydrateRoot = function (e, t, r) {
      if (!ca(e)) throw Error(l(405));
      var o = (r != null && r.hydratedSources) || null,
        a = !1,
        f = '',
        y = lf;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (f = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (y = r.onRecoverableError)),
        (t = nf(t, null, e, 1, r ?? null, a, !1, f, y)),
        (e[Nn] = t.current),
        Ni(e),
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
    (Pt.render = function (e, t, r) {
      if (!so(t)) throw Error(l(200));
      return ao(null, e, t, !1, r);
    }),
    (Pt.unmountComponentAtNode = function (e) {
      if (!so(e)) throw Error(l(40));
      return e._reactRootContainer
        ? (xr(function () {
            ao(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Nn] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Pt.unstable_batchedUpdates = ta),
    (Pt.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!so(r)) throw Error(l(200));
      if (e == null || e._reactInternals === void 0) throw Error(l(38));
      return ao(e, t, r, !1, o);
    }),
    (Pt.version = '18.3.1-next-f1338f8080-20240426'),
    Pt
  );
}
var hf;
function pg() {
  if (hf) return pa.exports;
  hf = 1;
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
  return (n(), (pa.exports = fg()), pa.exports);
}
var mf;
function hg() {
  if (mf) return co;
  mf = 1;
  var n = pg();
  return ((co.createRoot = n.createRoot), (co.hydrateRoot = n.hydrateRoot), co);
}
var mg = hg();
const gg = JSON.parse(
    `[{"id":"timeframes","type":"preset","presets":[{"id":"next-decade","name":"Focused on next decade (until 2035)","description":"Evaluates projects primarily by their effects over the next decade.","credences":{"equalAll":0,"prioritizeNearer":0,"discountDistant":25,"shortTermOnly":75}},{"id":"next-generations","name":"Focused on next generations (until 2100)","description":"Emphasizes effects on the next few generations, including individuals who do not currently exist.","credences":{"equalAll":20,"prioritizeNearer":50,"discountDistant":30,"shortTermOnly":0}},{"id":"longtermist","name":"Longtermist","description":"Concerned with the longterm future, valuing effects equally regardless of when they occur.","credences":{"equalAll":80,"prioritizeNearer":20,"discountDistant":0,"shortTermOnly":0}}],"worldviewDimension":{"appliesTo":"timeframe","applyAs":"multiplier","options":{"equalAll":{"short":1,"medium":1,"long":1},"prioritizeNearer":{"short":1,"medium":0.5,"long":0.2},"discountDistant":{"short":1,"medium":0.2,"long":0},"shortTermOnly":{"short":1,"medium":0,"long":0}}},"categoryLabel":"Time Preferences","icon":"clock","previewText":"Short vs. long-term effects","heading":"When evaluating projects, how much consideration do you give to projects' near-term, medium-term, or longer-term effects?","info":"A project's effects play out over different timelines. Some effects, like malaria treatments, might occur right away. Others, like investments in education or infrastructure, could take years to arise. Other effects will arise in the longer run future. When you are evaluating projects, do you give extra weight to effects that will happen sooner (in the next decade) rather than later (decades or even centuries in the future)?\\n\\nThere are several reasons why you might give extra weight to near-term effects. First, you might think it's more morally important to help individuals that currently exist or will exist very soon than it is to help individuals that will potentially exist in the future. Alternatively, even if you think all beings matter equally, regardless of time, you might be so uncertain about a project's long-term effects that you'd rather focus on the more predictable near future. Lastly, you might have beliefs about how the future will go (e.g. that AI will change everything in 10 years) that make you want to just focus on projects whose effects will happen soon.","context":"Consider the following timeframes:\\n\\n- **Short-term:** before 2035\\n- **Medium-term:** from 2035-2100\\n- **Long-term:** after 2100\\n\\nWhich of these positions best describes your view when evaluating the effects of different projects?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Time Preferences","options":[{"key":"shortTermOnly","label":"Short-term only","description":"I only care about effects in the short-term","info":"","panelLabel":"Short","panelShort":"ST"},{"key":"discountDistant","label":"Discount the distant future","description":"I do not care about the distant future. I care a bit about the medium-term, but I put more priority on the short-term","info":"","panelLabel":"Discount","panelShort":">>"},{"key":"prioritizeNearer","label":"Prioritize nearer term","description":"I care a bit about the long-term future, but I put more priority on the medium-term and even more priority on the short-term","info":"","panelLabel":"Nearer","panelShort":">"},{"key":"equalAll","label":"Equal across all timeframes","description":"I only care about how much good I could possibly do, and I don't care whether that good happens in the short-term, medium-term, or long-term","info":"","panelLabel":"Equal","panelShort":"="}]},{"id":"risk","type":"credence","worldviewDimension":{"appliesWhen":"isDummyRisk","applyAs":"multiplier","options":{"riskNeutral":1,"upsideSkepticism":1,"lossAversion":1,"both":1}},"categoryLabel":"Risk Attitudes","icon":"dice","previewText":"Attitudes toward risk","heading":"Are you averse to taking certain kinds of risks in your philanthropic giving?","info":"The expected value of a project is a weighted average of all the effects that the project might have. Two projects can have the same expected value but otherwise be very different. For example, a \\"safe\\" project may be almost guaranteed to do X amount of good, so its expected value is X. A \\"risky\\" project might have a 1/100 chance of delivering 100 x X amount of good and a 99/100 of doing nothing, so its expected value is also X. A different kind of \\"risky\\" project might have a 1/2 chance of backfiring, creating -X value, and a 1/2 chance of creating 3X value, so its expected value is also X.\\n\\nIf you only care about maximizing expected value, you will treat these projects the same way. However, if you are risk averse, you may dislike one or both of the risky projects. There are a few ways to be risk averse, including:\\n\\n- **Upside skepticism:** you are wary of spending your money on bets that have very small chances of success. You want to focus on what will probably happen, not what will happen in the most optimistic of outcomes.\\n- **Loss aversion:** you want to avoid situations where your money does nothing, and you are even more keen to avoid situations where your actions made things worse. You want to penalize projects that have decent chances of failure or backfire.\\n- **Both skeptical of upsides and averse to losses**","context":"Which of these best describes your perspective:","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Risk Attitudes","options":[{"key":"riskNeutral","label":"Risk neutral","description":"I prefer to invest in options that have the highest expected value, even if they have low success rates or risk of negative outcomes","info":"","panelLabel":"Neutral","panelShort":"EV"},{"key":"upsideSkepticism","label":"Skeptical of optimistic scenarios","description":"I am skeptical of projects' most optimistic scenarios and decide where to give based on scenarios that are more likely to occur","info":"","panelLabel":"Skeptical","panelShort":"S"},{"key":"lossAversion","label":"Avoid losses","description":"I want to avoid losses and am motivated to avoid projects that have significant chances of failure or backfire (even if those projects have high expected value)","info":"","panelLabel":"Loss averse","panelShort":"LA"},{"key":"both","label":"Both skeptical and loss averse","description":"I am both skeptical of projects' most optimistic scenarios and motivated to avoid losses","info":"","panelLabel":"Both","panelShort":"B"}]},{"id":"xrisk","type":"credence","worldviewDimension":{"appliesWhen":"isNonXRisk","applyAs":"multiplier","options":{"evaluateSame":1,"discount10":0.9,"discount50":0.5,"xriskOnly":0}},"categoryLabel":"Existential Risk","icon":"alert-triangle","previewText":"Existential risk priority","heading":"How much do you want to prioritize efforts to mitigate near-term existential risks that demand action in the next several years, compared to other kinds of projects you might fund?","info":"Some projects aim to reduce the chances of an event that poses existential or catastrophic risk (such as an engineered pandemic or AI takeover). If an event like this occurs, then it could severely mitigate the beneficial effects of other kinds of philanthropic projects (such as global health interventions). This can make it hard to compare the value of existential risk mitigation to the value of other projects.\\n\\nIf you think there is a high chance of a catastrophic risk in the near future (say, the next 10 years), then you may think that we need to act now to try to reduce these threats. You may care a lot about the longer-run future and what the world is like decades from now, but you want to prioritize actions now to ensure that humanity is around to enjoy that future.","context":"Do you want to treat near-term existential risk mitigation projects differently than other projects?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"X-Risk Priority","options":[{"key":"evaluateSame","label":"Evaluate the same way","description":"I want to evaluate near-term existential risk projects the same way that I evaluate all other projects (e.g. by calculating their expected effects over the timeline I care about)","info":"","panelLabel":"Same","panelShort":"="},{"key":"discount10","label":"Discount other projects somewhat","description":"I think there is about a 10% probability that an existential risk occurs in the next decade that renders other projects useless. Therefore, I want to discount the value of these other projects somewhat","info":"","panelLabel":"10% risk","panelShort":"10%"},{"key":"discount50","label":"Discount other projects greatly","description":"I think there is about a 50% probability that an existential risk occurs in the next decade that renders other projects useless. Therefore, I want to greatly discount the value of these other projects","info":"","panelLabel":"50% risk","panelShort":"50%"},{"key":"xriskOnly","label":"Only x-risk reduction","description":"I only care about reducing near-term existential risk","info":"","panelLabel":"X-risk only","panelShort":"X"}]},{"id":"animal","type":"preset","presets":[{"id":"animal-friendly","name":"Animal friendly view","description":"Emphasizes equal consideration for animal and human suffering.","credences":{"humanEqual":75,"human10x":25,"human100x":0,"human1000x":0,"noValue":0}},{"id":"rethink-priorities","name":"Rethink Priorities default","description":"Based on empirical research on animal welfare ranges, gives animals somewhat lower weight than humans.","credences":{"humanEqual":20,"human10x":50,"human100x":20,"human1000x":10,"noValue":0}},{"id":"animal-skeptic","name":"Animal skeptic view","description":"Gives strong priority to human welfare, based on their unique capacities or our special moral obligations to other humans.","credences":{"humanEqual":0,"human10x":10,"human100x":60,"human1000x":30,"noValue":0}}],"worldviewDimension":{"appliesWhen":"helpsAnimals","applyAs":"multiplier","options":{"humanEqual":0.0172,"human10x":0.00172,"human100x":0.000172,"human1000x":0.0000172,"noValue":0}},"categoryLabel":"Animal Welfare","icon":"paw","previewText":"Animal welfare","heading":"How much do you value reducing suffering in animals compared to reducing suffering in humans?","info":"It can be difficult to compare the value of helping humans versus helping animals. For now, let's consider animals that most people believe are capable of suffering (such as pigs, dogs, or cows) and use chickens as a test case.\\n\\nThere are some conditions that decrease chickens' quality of life, which we can measure in terms of chicken Disability Adjusted Life Years. For example, suppose living in hurtful pain for a year reduces a chicken's quality of life by 25%. Therefore, if we improve a chicken's living conditions to relieve this suffering, this would result in a gain of 0.25 chicken DALYs. Likewise, some human conditions reduce a human's quality of life by 25%, so relieving this for a year would result in 0.25 human DALYs.\\n\\nHow much do you value chicken DALYs versus human DALYs? In other words, how much do you care about a quality of life reduction in chickens compared to a similar proportional quality of life reduction in humans? Note that there are a few different reasons you might give chicken DALYs lower weight. Perhaps you think a 25% reduction in a chicken's quality of life involves less suffering (or loss of meaningful experiences) than a 25% reduction in a human's quality of life. Alternatively, you could think the amount of suffering is the same, but you think it is morally more important to alleviate human suffering.","context":"For this question, we'll focus on familiar farmed animals—chickens, pigs, and cows—that most people agree can experience pain and distress.\\n\\nWhich of these positions best describes your view?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Animal Welfare Weights","options":[{"key":"humanEqual","label":"Equal to humans","description":"I treat a year of disability in an animal the same as a year of disability in a human","info":"","panelLabel":"Equal","panelShort":"="},{"key":"human10x","label":"10x less than humans","description":"I value a human year of disability about 10x as much as a year of disability in an animal","info":"","panelLabel":"10x less","panelShort":"10x"},{"key":"human100x","label":"100x less than humans","description":"I value a human year of disability about 100x as much as a year of disability in an animal","info":"","panelLabel":"100x less","panelShort":"100x"},{"key":"human1000x","label":"1000x less than humans","description":"I value a human year of disability about 1000x as much as a year of disability in an animal","info":"","panelLabel":"1000x less","panelShort":"1kx"},{"key":"noValue","label":"No value","description":"I do not value animal welfare","info":"","panelLabel":"None","panelShort":"0"}]},{"id":"invertebrate","type":"preset","presets":[{"id":"invertebrate-friendly","name":"Invertebrate friendly view","description":"Emphasizes roughly equal consideration for invertebrate and human suffering, tempered by uncertainty about invertebrate sentience.","credences":{"humanEqual":40,"human100x":40,"human1000x":20,"human10000x":0,"noValue":0}},{"id":"rethink-priorities","name":"Rethink Priorities default","description":"Based on empirical research on animal welfare ranges and likelihoods of invertebrate sentience, gives animals significantly lower weight than humans.","credences":{"humanEqual":10,"human100x":40,"human1000x":30,"human10000x":10,"noValue":10}},{"id":"invertebrate-skeptic","name":"Invertebrate skeptic view","description":"Gives strong priority to human welfare, highly skeptical about invertebrates' capacity for welfare.","credences":{"humanEqual":0,"human100x":0,"human1000x":10,"human10000x":40,"noValue":50}}],"worldviewDimension":{"appliesWhen":"helpsInvertebrates","applyAs":"multiplier","options":{"humanEqual":0.0172,"human100x":0.000172,"human1000x":0.0000172,"human10000x":0.00000172,"noValue":0}},"categoryLabel":"Invertebrate Welfare","icon":"shell","previewText":"Invertebrate welfare","heading":"How much do you care about reducing the suffering of shrimp (or other small, less understood farmed invertebrates), compared to reducing the suffering of humans?","info":"It can be difficult to compare the value of helping humans versus helping animals. This is even more difficult when we are uncertain whether the animals even have conscious experiences or what their experiences are like. For now, let's consider farmed invertebrates (such as shrimp or insects) and use shrimp as a test case.\\n\\nShrimp may experience conditions that reduce their quality of life. Assuming they are sentient, we can characterize their loss of quality of life via a shrimp DALY. How much do you value shrimp DALYs versus human DALYs? Note that there are three different reasons you might give shrimp DALYs lower weight. Perhaps you think a 25% reduction in a shrimp's quality of life involves less suffering (or loss of meaningful experiences) than a 25% reduction in a human's quality of life. Alternatively, you could think the amount of suffering is the same, but you think it is morally more important to alleviate human suffering. Lastly, you could doubt that shrimp are sentient and therefore doubt that they can suffer.","context":"Which of these positions best describes your view?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Invertebrate Weights","options":[{"key":"humanEqual","label":"Equal to humans","description":"I treat a year of disability in shrimp the same as a year of disability in a human","info":"","panelLabel":"Equal","panelShort":"="},{"key":"human100x","label":"100x less than humans","description":"I value a human year of disability about 100x as much as a year of disability in a shrimp","info":"","panelLabel":"100x less","panelShort":"100x"},{"key":"human1000x","label":"1000x less than humans","description":"I value a human year of disability about 1000x as much as a year of disability in a shrimp","info":"","panelLabel":"1000x less","panelShort":"1kx"},{"key":"human10000x","label":"10,000x less than humans","description":"I value a human year of disability about 10,000x as much as a year of disability in a shrimp","info":"","panelLabel":"10kx less","panelShort":"10kx"},{"key":"noValue","label":"No value","description":"I do not value shrimp welfare","info":"","panelLabel":"None","panelShort":"0"}]},{"id":"disability","type":"preset","presets":[{"id":"prioritize-lives","name":"Prioritize saving lives","description":"Places more emphasis on preventing deaths than relieving suffering from non-fatal diseases and disabilities.","credences":{"livesOnly":25,"livesMore":75,"equal":0,"disabilityMore":0}},{"id":"equal-weight","name":"Equal weight","description":"Values saving lives the same as restoring quality of life lost to disability. Similar to GiveWell's moral weights.","credences":{"livesOnly":0,"livesMore":0,"equal":100,"disabilityMore":0}},{"id":"prioritize-quality","name":"Prioritize improving quality of life","description":"Places more emphasis on relieving suffering due to disease and disability, instead of saving lives.","credences":{"livesOnly":0,"livesMore":0,"equal":25,"disabilityMore":75}}],"worldviewDimension":{"appliesWhen":"preventsDisability","applyAs":"multiplier","options":{"livesOnly":0,"livesMore":0.003,"equal":0.0172,"disabilityMore":0.086}},"categoryLabel":"Disability Weights","icon":"heart-pulse","previewText":"Disability vs. saving lives","heading":"When you think about helping people, how do you weigh saving lives against making people's existing lives better by reducing disease or disability?","info":"Here's an example that may help you think through your options. Suppose that living with blindness reduces someone's quality of life by 25%. You could either choose to cure blindness in a group of people, restoring them to full health for some number of years. Or you could save a child's life, giving them 50 extra years to live. How many years of blindness would you need to relieve to make it as good as saving the one child's life?\\n\\nSome charitable projects save lives—preventing people from dying. Others relieve suffering from diseases or disabilities that aren't fatal but significantly reduce quality of life.\\n\\n**How we measure this:** We can estimate how much a disease or disability reduces someone's quality of life (estimates typically come from the [Global Burden of Disease](https://www.healthdata.org/research-analysis/gbd)). For example:\\n\\n- **Clubfoot** might reduce quality of life by 20%\\n- **Blindness** might reduce quality of life by 25%\\n- **Severe multiple sclerosis** might reduce quality of life by 75%\\n\\nIf a charity treats someone's blindness for 10 years, that's like restoring 2.5 \\"full-health years\\" (10 years × 25% improvement). If a charity corrects an infant's clubfeet and prevents them from suffering from 60 years of that condition, that's like restoring 12 full health years. We call these recovered years \\"disability-adjusted life years\\" or DALYs.","context":"Imagine you must choose between two projects:\\n\\n- **Project A:** Save one child's life, giving them 50 additional years to live\\n- **Project B:** Cure or treat a serious disability for multiple people, restoring some number of \\"full-health years\\"\\n\\nHow many years of disability would you need to relieve to make it as good as saving the one child's life?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Disability Weights","options":[{"key":"livesOnly","label":"Saving lives only","description":"I only care about saving years of life due to death","info":"","panelLabel":"Lives only","panelShort":"0"},{"key":"livesMore","label":"More weight on saving lives","description":"I put 5x as much value on saving a year of life lost to death than a year of life lost to disability","info":"I'd need to prevent 1000 years of blindness to equal saving 50 years of life.","panelLabel":"5x lives","panelShort":"5xL"},{"key":"equal","label":"Equal weight for saving lives and relieving disabilities","description":"I value a year of life lost equally, whether it is due to death or disability","info":"I'd need to prevent 200 years of blindness to equal saving 50 years of life. For comparison, this is the weight given to disability by GiveWell.","panelLabel":"Equal","panelShort":"="},{"key":"disabilityMore","label":"More weight on relieving disability","description":"I put 5x as much value on saving a year of life lost to disability than a year of life lost to death","info":"I'd need to prevent 40 years of blindness to equal saving 50 years of life.","panelLabel":"5x disability","panelShort":"5xD"}]},{"id":"income","type":"preset","presets":[{"id":"prioritize-lives","name":"Prioritize saving lives","description":"Places much more emphasis on preventing deaths than improving material conditions for people living in poverty.","credences":{"livesOnly":25,"lives10x":75,"lives2x":0,"equal":0}},{"id":"balanced","name":"Balanced","description":"Gives more weight to saving lives than improving incomes, but cares about both goals. Similar to GiveWell's moral weights.","credences":{"livesOnly":0,"lives10x":25,"lives2x":75,"equal":0}},{"id":"poverty-relief","name":"Poverty relief","description":"Prioritizes poverty relief as highly as saving lives.","credences":{"livesOnly":0,"lives10x":0,"lives2x":25,"equal":75}}],"worldviewDimension":{"appliesWhen":"increasesIncome","applyAs":"multiplier","options":{"livesOnly":0,"lives10x":0.0017,"lives2x":0.0086,"equal":0.0172}},"categoryLabel":"Income Weights","icon":"banknote","previewText":"Income vs. saving lives","heading":"When you think about helping people, how do you weigh saving lives against increasing people's income, allowing them to improve their material quality of life?","info":"Here's an example that might help you think through your options. Suppose that you could make direct cash transfers that would double incomes for a group of people for a year. The same amount of money would save one child's life, giving them an extra 50 years to live. How many people's incomes would you have to double to make that option as good as saving the one child's life?","context":"**Imagine this scenario:** You could either:\\n\\n- **Option A:** Add one year of life to someone who would otherwise die\\n- **Option B:** Double someone's income for one year, significantly improving their material circumstances\\n\\nHow much do you value doubling someone's income for a year compared to adding one year to someone's life?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Income Weights","options":[{"key":"livesOnly","label":"Saving lives only","description":"I only care about adding years of life","info":"","panelLabel":"Lives only","panelShort":"0"},{"key":"lives10x","label":"Much more weight on a year of life","description":"I put 10x as much value on a year of life compared to a year of doubled income","info":"I would need to double yearly income for 500 people to equal saving 50 years of life.","panelLabel":"10x lives","panelShort":"10x"},{"key":"lives2x","label":"Some more weight on a year of life","description":"I put 2x as much value on a year of life compared to a year of doubled income","info":"I would need to double yearly income for 100 people to equal saving 50 years of life. This is comparable to (but slightly higher than) the weight that GiveWell assigns to a year of income doubling compared to saving a year of life.","panelLabel":"2x lives","panelShort":"2x"},{"key":"equal","label":"Equal weight","description":"I put the same value on a year of life compared to a year of doubled income","info":"I would need to double yearly income for 50 people to equal saving 50 years of life.","panelLabel":"Equal","panelShort":"="}]}]`
  ),
  yg = { questions: gg },
  vg = [
    {
      id: 'timeframes',
      type: 'ratio',
      ratioConfig: {
        scale: 'linear',
        min: 0,
        max: 1,
        minLabel: 'Only short-term (before 2035)',
        maxLabel: 'Equal across all timeframes',
        defaultValue: 0.5,
      },
      worldviewDimension: {
        appliesWhen: 'isLongTerm',
        applyAs: 'multiplier',
        directMultiplier: !0,
      },
      categoryLabel: 'Time Preferences',
      icon: 'clock',
      previewText: 'Short vs. long-term effects',
      heading: 'How much weight do you give to long-term effects compared to short-term effects?',
      info: `A project's effects play out over different timelines. Some effects, like malaria treatments, might occur right away. Others, like investments in education or infrastructure, could take years to arise. Other effects will arise in the longer run future. When you are evaluating projects, do you give extra weight to effects that will happen sooner (in the next decade) rather than later (decades or even centuries in the future)?

There are several reasons why you might give extra weight to near-term effects. First, you might think it's more morally important to help individuals that currently exist or will exist very soon than it is to help individuals that will potentially exist in the future. Alternatively, even if you think all beings matter equally, regardless of time, you might be so uncertain about a project's long-term effects that you'd rather focus on the more predictable near future.`,
      context: `Consider the following timeframes:

- **Short-term:** before 2035
- **Medium-term:** from 2035-2100
- **Long-term:** after 2100

Move the slider to indicate how much you value long-term effects relative to short-term effects.`,
    },
    {
      id: 'risk',
      type: 'credence',
      worldviewDimension: {
        appliesWhen: 'isDummyRisk',
        applyAs: 'multiplier',
        options: { riskNeutral: 1, upsideSkepticism: 1, lossAversion: 1, both: 1 },
      },
      categoryLabel: 'Risk Attitudes',
      icon: 'dice',
      previewText: 'Attitudes toward risk',
      heading: 'Are you averse to taking certain kinds of risks in your philanthropic giving?',
      info: `The expected value of a project is a weighted average of all the effects that the project might have. Two projects can have the same expected value but otherwise be very different. For example, a "safe" project may be almost guaranteed to do X amount of good, so its expected value is X. A "risky" project might have a 1/100 chance of delivering 100 x X amount of good and a 99/100 of doing nothing, so its expected value is also X. A different kind of "risky" project might have a 1/2 chance of backfiring, creating -X value, and a 1/2 chance of creating 3X value, so its expected value is also X.

If you only care about maximizing expected value, you will treat these projects the same way. However, if you are risk averse, you may dislike one or both of the risky projects.`,
      context: 'Which of these best describes your perspective:',
      instructionsSliders:
        'Distribute your credence across these views. Sliders auto-balance to 100%.',
      editPanelTitle: 'Risk Attitudes',
      options: [
        {
          key: 'riskNeutral',
          label: 'Risk neutral',
          description:
            'I prefer to invest in options that have the highest expected value, even if they have low success rates or risk of negative outcomes',
          info: '',
          panelLabel: 'Neutral',
          panelShort: 'EV',
        },
        {
          key: 'upsideSkepticism',
          label: 'Skeptical of optimistic scenarios',
          description:
            "I am skeptical of projects' most optimistic scenarios and decide where to give based on scenarios that are more likely to occur",
          info: '',
          panelLabel: 'Skeptical',
          panelShort: 'S',
        },
        {
          key: 'lossAversion',
          label: 'Avoid losses',
          description:
            'I want to avoid losses and am motivated to avoid projects that have significant chances of failure or backfire',
          info: '',
          panelLabel: 'Loss averse',
          panelShort: 'LA',
        },
        {
          key: 'both',
          label: 'Both skeptical and loss averse',
          description:
            "I am both skeptical of projects' most optimistic scenarios and motivated to avoid losses",
          info: '',
          panelLabel: 'Both',
          panelShort: 'B',
        },
      ],
    },
    {
      id: 'xrisk',
      type: 'ratio',
      ratioConfig: {
        scale: 'linear',
        min: 0,
        max: 1,
        minLabel: 'Only x-risk reduction matters',
        maxLabel: 'Evaluate all projects the same',
        defaultValue: 0.5,
      },
      worldviewDimension: {
        appliesWhen: 'isNonXRisk',
        applyAs: 'multiplier',
        directMultiplier: !0,
      },
      categoryLabel: 'Existential Risk',
      icon: 'alert-triangle',
      previewText: 'Existential risk priority',
      heading:
        'How much do you want to prioritize efforts to mitigate existential risks compared to other projects?',
      info: `Some projects aim to reduce the chances of an event that poses existential or catastrophic risk (such as an engineered pandemic or AI takeover). If an event like this occurs, then it could severely mitigate the beneficial effects of other kinds of philanthropic projects (such as global health interventions). This can make it hard to compare the value of existential risk mitigation to the value of other projects.

If you think there is a high chance of a catastrophic risk in the near future (say, the next 10 years), then you may think that we need to act now to try to reduce these threats.`,
      context:
        'Move the slider to indicate how much you prioritize x-risk reduction projects relative to other projects.',
    },
    {
      id: 'animal',
      type: 'ratio',
      ratioConfig: {
        scale: 'logarithmic',
        min: 0.0172,
        max: 172e-7,
        minLabel: 'Equal to humans',
        maxLabel: '1000x less than humans',
        defaultValue: 0.5,
      },
      displayConfig: {
        scale: 'logarithmic',
        min: 1,
        max: 1e3,
        format: 'multiplier',
        suffix: ' less',
      },
      worldviewDimension: {
        appliesWhen: 'helpsAnimals',
        applyAs: 'multiplier',
        directMultiplier: !0,
      },
      categoryLabel: 'Animal Welfare',
      icon: 'paw',
      previewText: 'Animal welfare',
      heading:
        'How much do you value reducing suffering in familiar farmed animals compared to humans?',
      info: `It can be difficult to compare the value of helping humans versus helping animals. For now, let's consider animals that most people believe are capable of suffering (such as pigs, dogs, or cows) and use chickens as a test case.

There are some conditions that decrease chickens' quality of life, which we can measure in terms of chicken Disability Adjusted Life Years. How much do you value chicken DALYs versus human DALYs?`,
      context: `For this question, we'll focus on familiar farmed animals - chickens, pigs, and cows - that most people agree can experience pain and distress.

Move the slider to indicate how you weight animal suffering relative to human suffering.`,
    },
    {
      id: 'invertebrate',
      type: 'ratio',
      ratioConfig: {
        scale: 'logarithmic',
        min: 0.0172,
        max: 172e-8,
        minLabel: 'Equal to humans',
        maxLabel: '10,000x less than humans',
        defaultValue: 0.5,
      },
      displayConfig: {
        scale: 'logarithmic',
        min: 1,
        max: 1e4,
        format: 'multiplier',
        suffix: ' less',
      },
      worldviewDimension: {
        appliesWhen: 'helpsInvertebrates',
        applyAs: 'multiplier',
        directMultiplier: !0,
      },
      categoryLabel: 'Invertebrate Welfare',
      icon: 'shell',
      previewText: 'Invertebrate welfare',
      heading:
        'How much do you value reducing suffering in shrimp and other invertebrates compared to humans?',
      info: `It can be difficult to compare the value of helping humans versus helping animals. This is even more difficult when we are uncertain whether the animals even have conscious experiences or what their experiences are like. For now, let's consider farmed invertebrates (such as shrimp or insects) and use shrimp as a test case.

Shrimp may experience conditions that reduce their quality of life. Assuming they are sentient, we can characterize their loss of quality of life via a shrimp DALY. How much do you value shrimp DALYs versus human DALYs?`,
      context:
        'Move the slider to indicate how you weight invertebrate suffering relative to human suffering.',
    },
    {
      id: 'disability',
      type: 'ratio',
      ratioConfig: {
        scale: 'linear',
        min: 0.086,
        max: 0,
        minLabel: '5x weight on disability relief',
        maxLabel: '5x weight on saving lives',
        defaultValue: 0.5,
      },
      displayConfig: { scale: 'logarithmic', min: 0.2, max: 5, format: 'multiplier' },
      worldviewDimension: {
        appliesWhen: 'preventsDisability',
        applyAs: 'multiplier',
        directMultiplier: !0,
      },
      categoryLabel: 'Disability Weights',
      icon: 'heart-pulse',
      previewText: 'Disability vs. saving lives',
      heading: 'How do you weigh saving lives against relieving disability and disease?',
      info: `Some charitable projects save lives - preventing people from dying. Others relieve suffering from diseases or disabilities that aren't fatal but significantly reduce quality of life.

We can estimate how much a disease or disability reduces someone's quality of life. For example, blindness might reduce quality of life by 25%. If a charity treats someone's blindness for 10 years, that's like restoring 2.5 "full-health years" (10 years x 25% improvement).`,
      context: 'Move the slider to indicate how you weigh disability relief vs. saving lives.',
    },
    {
      id: 'income',
      type: 'ratio',
      ratioConfig: {
        scale: 'linear',
        min: 0.0172,
        max: 0,
        minLabel: 'Equal weight on income doubling',
        maxLabel: 'Only saving lives matters',
        defaultValue: 0.5,
      },
      displayConfig: { scale: 'logarithmic', min: 1, max: 100, format: 'multiplier' },
      worldviewDimension: {
        appliesWhen: 'increasesIncome',
        applyAs: 'multiplier',
        directMultiplier: !0,
      },
      categoryLabel: 'Income Weights',
      icon: 'banknote',
      previewText: 'Income vs. saving lives',
      heading: "How do you weigh saving lives against increasing people's income?",
      info: "Here's an example that might help you think through your options. Suppose that you could make direct cash transfers that would double incomes for a group of people for a year. The same amount of money would save one child's life, giving them an extra 50 years to live. How many people's incomes would you have to double to make that option as good as saving the one child's life?",
      context: 'Move the slider to indicate how you weigh income doubling vs. saving lives.',
    },
  ],
  wg = { questions: vg },
  kg = 'extreme',
  xg = {
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
  Sg = { livesOnly: 25, livesMore: 25, equal: 25, disabilityMore: 25 },
  So = { diminishingReturns: kg, causes: xg, defaultCredences: Sg },
  _g = !0,
  Cg = {
    resetButton: !1,
    sliderLock: !0,
    shareResults: !1,
    multipleWorldviews: !1,
    moralMarketplace: !1,
  },
  Eg = {
    order: ['mergedFavorites', 'maxEV', 'parliament', 'maximin'],
    showMergedFavorites: !0,
    showMaxEV: !0,
    showParliament: !1,
    showMaximin: !1,
    sideBySideComparison: !0,
  },
  bg = { calculationDebugger: !1 },
  Qt = { advanced: _g, ui: Cg, calculations: Eg, developer: bg },
  li = {
    SESSION_ID: 'quiz_session_id',
    QUIZ_STATE: 'quiz_state',
    SKIP_CONFLICT: 'quiz_skip_conflict',
  },
  ap = 7;
function up() {
  let n = sessionStorage.getItem(li.SESSION_ID);
  return (n || ((n = crypto.randomUUID()), sessionStorage.setItem(li.SESSION_ID, n)), n);
}
function Ng(n) {
  const {
      currentStep: i,
      worldviews: l,
      activeWorldviewId: s,
      selectedCalculations: u,
      worldviewNames: c,
      marketplaceBudget: d,
    } = n,
    p = {};
  for (const [m, g] of Object.entries(l)) {
    const w = {};
    for (const [x, k] of Object.entries(g.questions))
      w[x] = {
        credences: k.credences,
        originalCredences: k.originalCredences,
        inputMode: k.inputMode,
        lockedKeys: k.lockedKeys,
        selectedPreset: k.selectedPreset,
      };
    p[m] = { questions: w, completed: g.completed || !1 };
  }
  const h = {
    version: ap,
    state: {
      currentStep: i,
      worldviews: p,
      activeWorldviewId: s,
      selectedCalculations: u,
      worldviewNames: c,
      marketplaceBudget: d,
    },
  };
  sessionStorage.setItem(li.QUIZ_STATE, JSON.stringify(h));
}
function ga() {
  const n = sessionStorage.getItem(li.QUIZ_STATE);
  if (!n) return null;
  try {
    const i = JSON.parse(n);
    return i.version !== ap ? (wo(), null) : i.state;
  } catch {
    return (wo(), null);
  }
}
function wo() {
  sessionStorage.removeItem(li.QUIZ_STATE);
}
function Ig() {
  sessionStorage.setItem(li.SKIP_CONFLICT, 'true');
}
const Tg = '/api',
  jg = { share: `${Tg}/share` },
  Lg = 2;
async function Pg(n, i, l = {}) {
  const s = up(),
    { selectedCalculations: u, worldviewNames: c, marketplaceBudget: d } = l,
    p = {
      sessionId: s,
      quizVersion: Lg,
      worldviews: n,
      activeWorldviewId: i,
      ...(u && { selectedCalculations: u }),
      ...(c && { worldviewNames: c }),
      ...(d && { marketplaceBudget: d }),
    },
    h = await fetch(jg.share, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(p),
    });
  if (!h.ok) {
    const w = await h.json().catch(() => ({}));
    throw new Error(w.message || 'Failed to create share link');
  }
  const { id: m } = await h.json();
  return { url: `${window.location.origin + window.location.pathname}#s=${m}`, id: m };
}
function ya() {
  window.location.hash &&
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
const Ot = 'rgba(255, 255, 255, 0.8)',
  gf = {
    default: [Ot, Ot, Ot],
    selection: [Ot, Ot, Ot],
    credence: [Ot, Ot, Ot],
    preset: [Ot, Ot, Ot, Ot, Ot],
  },
  Ja = 'rgba(255, 255, 255, 0.7)',
  Ra = { OPTIONS: 'options' },
  tt = {
    DEFAULT: 'default',
    SELECTION: 'selection',
    CREDENCE: 'credence',
    INTERMISSION: 'intermission',
    PRESET: 'preset',
    RATIO: 'ratio',
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Og = (n) => n.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  cp = (...n) =>
    n
      .filter((i, l, s) => !!i && i.trim() !== '' && s.indexOf(i) === l)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Rg = {
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
 */ const Ag = U.forwardRef(
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
    U.createElement(
      'svg',
      {
        ref: h,
        ...Rg,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: s ? (Number(l) * 24) / Number(i) : l,
        className: cp('lucide', u),
        ...p,
      },
      [...d.map(([m, g]) => U.createElement(m, g)), ...(Array.isArray(c) ? c : [c])]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Be = (n, i) => {
  const l = U.forwardRef(({ className: s, ...u }, c) =>
    U.createElement(Ag, { ref: c, iconNode: i, className: cp(`lucide-${Og(n)}`, s), ...u })
  );
  return ((l.displayName = `${n}`), l);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mg = Be('Banknote', [
  ['rect', { width: '20', height: '12', x: '2', y: '6', rx: '2', key: '9lu3g6' }],
  ['circle', { cx: '12', cy: '12', r: '2', key: '1c9p78' }],
  ['path', { d: 'M6 12h.01M18 12h.01', key: '113zkx' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dg = Be('Bird', [
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
 */ const zg = Be('Building2', [
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
 */ const Fg = Be('ChartColumn', [
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
 */ const dp = Be('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bg = Be('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wg = Be('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fp = Be('CircleHelp', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $g = Be('Clock', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['polyline', { points: '12 6 12 12 16 14', key: '68esgv' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ug = Be('Dices', [
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
 */ const Vg = Be('ExternalLink', [
  ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
  ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
  ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qg = Be('Handshake', [
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
 */ const Hg = Be('HeartPulse', [
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
 */ const Qg = Be('Hourglass', [
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
 */ const Kg = Be('Info', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M12 16v-4', key: '1dtifu' }],
  ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pp = Be('Lock', [
  ['rect', { width: '18', height: '11', x: '3', y: '11', rx: '2', ry: '2', key: '1w4ew1' }],
  ['path', { d: 'M7 11V7a5 5 0 0 1 10 0v4', key: 'fwvmzm' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gg = Be('Microscope', [
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
 */ const Yg = Be('PawPrint', [
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
 */ const Xg = Be('Pencil', [
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
 */ const Jg = Be('Plus', [
  ['path', { d: 'M5 12h14', key: '1ays0h' }],
  ['path', { d: 'M12 5v14', key: 's699le' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Aa = Be('RotateCcw', [
  ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
  ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zg = Be('Scale', [
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
 */ const ey = Be('Shell', [
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
 */ const ty = Be('SlidersVertical', [
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
 */ const ny = Be('Target', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['circle', { cx: '12', cy: '12', r: '6', key: '1vlfrh' }],
  ['circle', { cx: '12', cy: '12', r: '2', key: '1c9p78' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ry = Be('TriangleAlert', [
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
 */ const iy = Be('X', [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ]),
  ly = '_overlay_13cvn_1',
  oy = '_modal_13cvn_12',
  sy = '_title_13cvn_21',
  ay = '_message_13cvn_29',
  uy = '_buttons_13cvn_36',
  cy = '_button_13cvn_36',
  dy = '_worldviewRow_13cvn_51',
  fy = '_worldviewButton_13cvn_57',
  py = '_editRow_13cvn_62',
  hy = '_editInput_13cvn_69',
  my = '_iconButton_13cvn_86',
  it = {
    overlay: ly,
    modal: oy,
    title: sy,
    message: ay,
    buttons: uy,
    button: cy,
    worldviewRow: dy,
    worldviewButton: fy,
    editRow: py,
    editInput: hy,
    iconButton: my,
  };
function gy({ onKeepMine: n, onLoadShared: i, onOpenNewTab: l }) {
  return v.jsx('div', {
    className: it.overlay,
    children: v.jsxs('div', {
      className: it.modal,
      children: [
        v.jsx('h2', { className: it.title, children: 'You have unsaved progress' }),
        v.jsx('p', {
          className: it.message,
          children:
            'Loading this shared link will replace your current quiz answers. What would you like to do?',
        }),
        v.jsxs('div', {
          className: it.buttons,
          children: [
            v.jsx('button', {
              onClick: n,
              className: `btn btn-secondary ${it.button}`,
              children: 'Keep my progress',
            }),
            v.jsx('button', {
              onClick: i,
              className: `btn btn-primary ${it.button}`,
              children: 'Load shared results',
            }),
            v.jsxs('button', {
              onClick: l,
              className: `btn btn-secondary ${it.button}`,
              children: [v.jsx(Vg, { size: 16 }), 'Open in new tab'],
            }),
          ],
        }),
      ],
    }),
  });
}
const { causes: zn } = So,
  hp = { none: 1, sqrt: 0.5, extreme: 0.1 };
function mp(n) {
  const i = (n == null ? void 0 : n.diminishingReturns) || So.diminishingReturns || 'sqrt';
  return hp[i] ?? 0.5;
}
function yy(n) {
  const i = JSON.stringify(n);
  let l = 0;
  for (let s = 0; s < i.length; s++) {
    const u = i.charCodeAt(s);
    ((l = (l << 5) - l + u), (l = l & l));
  }
  return Math.abs(l);
}
function vy(n) {
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
function Za(n, i, l = 0.5) {
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
function gp(n = !1) {
  return Object.fromEntries(
    yg.questions
      .filter((i) => i.type !== 'intermission' && i.worldviewDimension)
      .map((i) => [
        i.id,
        n ? { ...i.worldviewDimension, name: i.editPanelTitle } : i.worldviewDimension,
      ])
  );
}
const el = gp();
function* wy(n) {
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
function* ky(n, i = 2e3) {
  const l = Object.keys(n);
  if (l.length === 0) return;
  const s = yy(n),
    u = vy(s),
    c = {};
  for (const h of l) {
    const m = Object.entries(n[h]);
    let g = 0;
    c[h] = m.map(([w, x]) => ((g += x / 100), { key: w, cumsum: g }));
  }
  const d = (h, m) => {
      const g = c[h];
      for (const { key: w, cumsum: x } of g) if (m <= x) return w;
      return g[g.length - 1].key;
    },
    p = 1 / i;
  for (let h = 0; h < i; h++) {
    const m = {};
    for (const g of l) m[g] = d(g, u());
    yield { options: m, probability: p };
  }
}
function xy(n) {
  return Object.values(n).reduce((i, l) => i * Object.keys(l).length, 1);
}
function Sy(n) {
  for (const i of Object.values(n)) {
    const l = Object.values(i),
      s = l.filter((c) => c === 100).length === 1,
      u = l.filter((c) => c === 0).length === l.length - 1;
    if (!s || !u) return !1;
  }
  return !0;
}
function* _y(n) {
  const i = {};
  for (const [l, s] of Object.entries(n))
    for (const [u, c] of Object.entries(s))
      if (c === 100) {
        i[l] = u;
        break;
      }
  yield { options: i, probability: 1 };
}
function* eu(n, i = 500, l = 2e3) {
  if (Sy(n)) {
    yield* _y(n);
    return;
  }
  xy(n) <= i ? yield* wy(n) : yield* ky(n, l);
}
function Cy(n, i, l) {
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
function tu(n, i, l) {
  const s = {};
  for (const [u, c] of Object.entries(i)) s[u] = Cy(c, n, l);
  return s;
}
function Ey(n) {
  const i = Math.max(...Object.values(n));
  return Object.keys(n).filter((l) => Math.abs(n[l] - i) < 1e-4);
}
function yp(n) {
  return Object.fromEntries(Object.keys(n).map((i) => [i, 0]));
}
function nu(n, i, l) {
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
function by(n, i) {
  const l = (i == null ? void 0 : i.causes) || zn,
    s = (i == null ? void 0 : i.dimensions) || el,
    u = Object.keys(l),
    c = {};
  for (const m of u) {
    const g = l[m];
    let w = g.points;
    for (const [x, k] of Object.entries(s)) {
      const I = n[x];
      I && (w *= nu(g, k, I));
    }
    c[m] = w;
  }
  const d = u.map((m) => c[m]),
    p = Za(d, 100, 1),
    h = { evs: c };
  return (
    u.forEach((m, g) => {
      h[m] = p[g];
    }),
    h
  );
}
function Ny(n, i) {
  const l = (i == null ? void 0 : i.causes) || zn,
    s = (i == null ? void 0 : i.dimensions) || el,
    u = yp(l);
  for (const { options: d, probability: p } of eu(n)) {
    const h = tu(d, l, s),
      m = Ey(h),
      g = p / m.length;
    for (const w of m) u[w] += g;
  }
  const c = {};
  for (const d of Object.keys(l)) c[d] = u[d] * 100;
  return c;
}
function Iy(n, i) {
  const l = (i == null ? void 0 : i.causes) || zn,
    s = (i == null ? void 0 : i.dimensions) || el,
    u = mp(i),
    c = Object.keys(l),
    d = yp(l);
  for (const { options: p, probability: h } of eu(n)) {
    const m = tu(p, l, s),
      g = h * 100,
      w = c.map((k) => m[k]),
      x = Za(w, g, u);
    c.forEach((k, I) => {
      d[k] += x[I];
    });
  }
  return d;
}
function Ty(n, i) {
  const l = (i == null ? void 0 : i.causes) || zn,
    s = (i == null ? void 0 : i.dimensions) || el,
    u = Object.keys(l),
    c = jy(u),
    d = [...eu(n, 500, 1e3)];
  let p = c[0],
    h = -1 / 0;
  for (const m of c) {
    let g = 1 / 0;
    for (const { options: w, probability: x } of d) {
      if (x < 1e-4) continue;
      const k = tu(w, l, s);
      let I = 0;
      for (const T of u) I += k[T] * (m[T] / 100);
      g = Math.min(g, I);
    }
    g > h && ((h = g), (p = { ...m }));
  }
  return p;
}
function jy(n) {
  const i = [],
    l = n.length,
    s = (h) => {
      const m = {};
      return (
        n.forEach((g, w) => {
          m[g] = h[w];
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
        let w = 1;
        for (let x = 0; x < l; x++) x !== m && w < h.length && (g[x] = h[w++]);
        i.push(s(g));
      }
  return i;
}
function ru(n, i, l, s = null, u = null) {
  const c = Array.isArray(u) ? u : u ? [u] : [],
    d = c.reduce((k, I) => k + (l[I] || 0), 0),
    p = 100 - d;
  i = Math.max(0, Math.min(p, i));
  const h = s || l,
    m = Object.keys(l).filter((k) => k !== n && !c.includes(k)),
    g = m.reduce((k, I) => k + h[I], 0),
    w = 100 - i - d,
    x = { [n]: i };
  for (const k of c) x[k] = l[k];
  if (g === 0) {
    const k = Math.floor(w / m.length);
    let I = w - k * m.length;
    m.forEach((T, O) => {
      x[T] = k + (O < I ? 1 : 0);
    });
  } else {
    let k = 0;
    m.forEach((I, T) => {
      if (T === m.length - 1) x[I] = Math.max(0, w - k);
      else {
        const O = h[I] / g,
          P = w * O;
        ((x[I] = Math.max(0, P)), (k += x[I]));
      }
    });
  }
  return x;
}
function iu(n) {
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
function Ly(n, i) {
  const l = (i == null ? void 0 : i.causes) || zn,
    s = (i == null ? void 0 : i.dimensions) || el,
    u = Object.keys(l),
    c = {};
  for (const d of u) {
    const p = l[d];
    let h = p.points;
    for (const [m, g] of Object.entries(s)) {
      const w = n[m];
      w && (h *= nu(p, g, w));
    }
    c[d] = h;
  }
  return c;
}
function Py(n, i = {}) {
  const { budget: l = 100 } = i,
    s = i.power ?? mp(i);
  if (n.length === 0) throw new Error('At least one worldview is required');
  const u = Object.keys(n[0].evs),
    c = n.reduce((h, m) => h + (m.weight || 1), 0),
    d = {};
  for (const h of u) d[h] = 0;
  const p = [];
  for (const h of n) {
    const m = h.weight || 1,
      g = (m / c) * l,
      w = u.map((I) => h.evs[I] || 0),
      x = Za(w, g, s),
      k = {};
    (u.forEach((I, T) => {
      ((d[I] += x[T]), (k[I] = x[T]));
    }),
      p.push({ name: h.name, weight: m, share: g, allocation: k }));
  }
  return { allocation: d, worldviewAllocations: p, config: { power: s, budget: l } };
}
function vp(n, i) {
  const { scale: l, min: s, max: u } = i;
  return l === 'logarithmic' ? s * Math.pow(u / s, n) : s + n * (u - s);
}
function Oy(n, i) {
  return vp(n, i);
}
function Ry(n, i, l) {
  var d;
  const s = (l == null ? void 0 : l.causes) || zn,
    u = Object.keys(s),
    c = {};
  for (const p of u) {
    const h = s[p];
    let m = h.points;
    for (const g of i) {
      const w = n[g.id];
      if (!w || !g.worldviewDimension) continue;
      const x = g.worldviewDimension;
      if (g.type === 'ratio' && g.ratioConfig) {
        const k =
            ((d = w.credences) == null ? void 0 : d.value) ?? g.ratioConfig.defaultValue ?? 0.5,
          I = vp(k, g.ratioConfig);
        Ay(h, x) && (x.directMultiplier ? (m *= I) : (m *= 1 / I));
      } else if (w.credences) {
        const k = nu(h, x, w.credences);
        m *= k;
      }
    }
    c[p] = m;
  }
  return c;
}
function Ay(n, i) {
  return i.appliesTo ? n[i.appliesTo] !== void 0 : i.appliesWhen ? n[i.appliesWhen] === !0 : !1;
}
const My = Qt.advanced === !0,
  Dy = wg,
  { questions: zy } = Dy,
  { causes: Fy, defaultCredences: By } = So;
function Wy(n) {
  var i;
  return !((i = n.type) != null && i.startsWith('_'));
}
const ot = zy.filter(Wy);
function Dn(n) {
  return (n == null ? void 0 : n.type) === tt.INTERMISSION;
}
function va(n, i) {
  let l = 0;
  for (let s = 0; s < i; s++) Dn(n[s]) || l++;
  return l;
}
function $y(n) {
  {
    const i = n.type || tt.DEFAULT;
    return gf[i] || gf[tt.DEFAULT];
  }
}
const Uy = ot.filter((n) => !Dn(n)),
  wa = Uy.length,
  yf = ot.map((n) => {
    var l;
    if (Dn(n)) return { ...n, type: tt.INTERMISSION };
    if (n.type === tt.RATIO) return { ...n, type: tt.RATIO };
    const i = $y(n);
    return {
      ...n,
      type: n.type || tt.DEFAULT,
      options: (l = n.options) == null ? void 0 : l.map((s, u) => ({ ...s, color: i[u] || i[0] })),
    };
  });
function lu(n) {
  var u;
  if (n.type === tt.RATIO)
    return { value: ((u = n.ratioConfig) == null ? void 0 : u.defaultValue) ?? 0.5 };
  if (n.defaultCredences) return { ...n.defaultCredences };
  if (!n.options) return {};
  const i = n.options.map((c) => c.key),
    l = Math.floor(100 / i.length),
    s = 100 - l * i.length;
  return Object.fromEntries(i.map((c, d) => [c, l + (d === 0 ? s : 0)]));
}
function wp(n) {
  var i;
  return n.type === tt.RATIO
    ? {
        credences: { value: ((i = n.ratioConfig) == null ? void 0 : i.defaultValue) ?? 0.5 },
        originalCredences: null,
        inputMode: Ra.OPTIONS,
        lockedKeys: [],
        selectedPreset: null,
      }
    : {
        credences: lu(n),
        originalCredences: null,
        inputMode: Ra.OPTIONS,
        lockedKeys: [],
        selectedPreset: null,
      };
}
function Ma() {
  return Object.fromEntries(ot.filter((n) => !Dn(n)).map((n) => [n.id, wp(n)]));
}
const kp = 6,
  xp = ['1'];
function Da() {
  return Object.fromEntries(xp.map((n) => [n, { questions: Ma(), completed: !1 }]));
}
function Vy(n) {
  return n != null && n.questions
    ? Object.entries(n.questions).some(([i, l]) => {
        if (!l.credences) return !1;
        const s = ot.find((c) => c.id === i);
        if (!s) return !1;
        const u = lu(s);
        return Object.entries(l.credences).some(([c, d]) => d !== (u[c] ?? 0));
      })
    : !1;
}
function za() {
  return Object.fromEntries(xp.map((n) => [n, `Worldview ${n}`]));
}
const Fa = 1e7,
  Sp = () => 'disclaimer',
  _p = {
    currentStep: Sp(),
    worldviews: Da(),
    worldviewNames: za(),
    activeWorldviewId: '1',
    expandedPanel: null,
    debugConfig: null,
    selectedCalculations: { left: null, right: null },
    marketplaceBudget: Fa,
    justCompletedWorldview: null,
  },
  Le = {
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
function Ba(n) {
  return n.worldviews[n.activeWorldviewId].questions;
}
function qy(n, i, l) {
  const s = Ba(n),
    u = n.worldviews[n.activeWorldviewId];
  return {
    ...n,
    worldviews: {
      ...n.worldviews,
      [n.activeWorldviewId]: { ...u, questions: { ...s, [i]: { ...s[i], ...l } } },
    },
  };
}
function Hy(n, i) {
  switch (i.type) {
    case Le.GO_TO_STEP:
      return { ...n, currentStep: i.payload };
    case Le.UPDATE_QUESTION:
      return qy(n, i.payload.questionId, i.payload.updates);
    case Le.SET_EXPANDED_PANEL:
      return { ...n, expandedPanel: i.payload };
    case Le.SAVE_ORIGINALS: {
      const l = Ba(n),
        s = n.worldviews[n.activeWorldviewId];
      return {
        ...n,
        worldviews: {
          ...n.worldviews,
          [n.activeWorldviewId]: {
            ...s,
            questions: Object.fromEntries(
              Object.entries(l).map(([u, c]) => [
                u,
                { ...c, originalCredences: c.originalCredences || { ...c.credences } },
              ])
            ),
          },
        },
      };
    }
    case Le.RESET_TO_ORIGINAL: {
      const l = Ba(n),
        s = n.worldviews[n.activeWorldviewId];
      return {
        ...n,
        worldviews: {
          ...n.worldviews,
          [n.activeWorldviewId]: {
            ...s,
            questions: Object.fromEntries(
              Object.entries(l).map(([u, c]) => [
                u,
                { ...c, credences: c.originalCredences ? { ...c.originalCredences } : c.credences },
              ])
            ),
          },
        },
      };
    }
    case Le.RESET_QUIZ:
      return { ..._p, currentStep: Sp(), worldviews: Da(), worldviewNames: za() };
    case Le.SWITCH_WORLDVIEW:
      return n.worldviews[i.payload] ? { ...n, activeWorldviewId: i.payload } : n;
    case Le.SET_WORLDVIEW_NAME: {
      const { worldviewId: l, name: s } = i.payload;
      return n.worldviews[l] ? { ...n, worldviewNames: { ...n.worldviewNames, [l]: s } } : n;
    }
    case Le.SET_MARKETPLACE_BUDGET:
      return { ...n, marketplaceBudget: i.payload };
    case Le.MARK_WORLDVIEW_COMPLETED: {
      const l = i.payload;
      return n.worldviews[l]
        ? { ...n, worldviews: { ...n.worldviews, [l]: { ...n.worldviews[l], completed: !0 } } }
        : n;
    }
    case Le.ADD_WORLDVIEW: {
      const l = Object.keys(n.worldviews);
      if (
        l.length >= kp ||
        !l.every((d) => {
          var p;
          return (p = n.worldviews[d]) == null ? void 0 : p.completed;
        })
      )
        return n;
      const u = Math.max(...l.map((d) => parseInt(d, 10))),
        c = String(u + 1);
      return {
        ...n,
        worldviews: { ...n.worldviews, [c]: { questions: Ma(), completed: !1 } },
        worldviewNames: { ...n.worldviewNames, [c]: `Worldview ${c}` },
        activeWorldviewId: c,
        currentStep: ot[0].id,
      };
    }
    case Le.RESTORE_FROM_URL:
    case Le.RESTORE_FROM_SESSION: {
      const l = i.type === Le.RESTORE_FROM_URL,
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
        w = (T, O) => ({
          credences: T.credences,
          originalCredences: T.originalCredences
            ? { ...T.originalCredences }
            : O
              ? { ...T.credences }
              : null,
          inputMode: T.inputMode || Ra.OPTIONS,
          lockedKeys: T.lockedKeys || (T.lockedKey ? [T.lockedKey] : []),
          selectedPreset: T.selectedPreset || null,
        }),
        x = (T, O) => {
          const P = {};
          for (const [F, M] of Object.entries(T)) {
            const te = {};
            for (const [ne, A] of Object.entries(M.questions)) te[ne] = w(A, O);
            P[F] = { questions: te, completed: M.completed || !1 };
          }
          return (P[1] || (P[1] = { questions: Ma(), completed: !1 }), P);
        },
        k = (T, O) => {
          const P = {},
            F = Object.keys(O || {});
          F.includes('1') || F.push('1');
          for (const M of F) P[M] = (T == null ? void 0 : T[M]) || `Worldview ${M}`;
          return P;
        };
      if (s && c)
        return {
          ...n,
          currentStep: l ? 'hub' : h,
          worldviews: x(s, l),
          worldviewNames: k(u, s),
          activeWorldviewId: c,
          selectedCalculations: m || n.selectedCalculations,
          marketplaceBudget: g || Fa,
        };
      const I = {};
      if (d) for (const [T, O] of Object.entries(d)) I[T] = w(O, l);
      else if (p)
        for (const [T, O] of Object.entries(p))
          I[T] = { ...wp(), credences: O, originalCredences: l ? { ...O } : null };
      return {
        ...n,
        currentStep: l ? 'results' : h,
        worldviews: { ...Da(), 1: { questions: I, completed: !1 } },
        worldviewNames: za(),
        activeWorldviewId: '1',
        marketplaceBudget: Fa,
      };
    }
    case Le.SET_DEBUG_CONFIG:
      return { ...n, debugConfig: i.payload };
    case Le.SET_JUST_COMPLETED_WORLDVIEW:
      return { ...n, justCompletedWorldview: i.payload };
    case Le.CLEAR_JUST_COMPLETED_WORLDVIEW:
      return { ...n, justCompletedWorldview: null };
    case Le.SET_SELECTED_CALCULATIONS:
      return { ...n, selectedCalculations: { ...n.selectedCalculations, ...i.payload } };
    default:
      return n;
  }
}
const Cp = U.createContext(null);
function Qy({ children: n }) {
  const [i, l] = U.useReducer(Hy, _p),
    [s, u] = U.useState(null),
    [c, d] = U.useState(!0),
    [p, h] = U.useState(null),
    [m] = U.useState(() => up()),
    g = U.useRef(null);
  (U.useEffect(() => {
    {
      const D = ga();
      (D && l({ type: Le.RESTORE_FROM_SESSION, payload: D }), d(!1));
      return;
    }
  }, []),
    U.useEffect(() => {}, []));
  const w = U.useCallback(() => {
      const D = ga();
      (D && l({ type: Le.RESTORE_FROM_SESSION, payload: D }), ya(), h(null));
    }, []),
    x = U.useCallback(() => {
      (p != null && p.shareData && (l({ type: Le.RESTORE_FROM_URL, payload: p.shareData }), wo()),
        ya(),
        h(null));
    }, [p]),
    k = U.useCallback(() => {
      (Ig(), p != null && p.shareUrl && window.open(p.shareUrl, '_blank'));
      const D = ga();
      (D && l({ type: Le.RESTORE_FROM_SESSION, payload: D }), ya(), h(null));
    }, [p]);
  U.useEffect(() => {
    if (!(c || i.currentStep === 'welcome' || i.currentStep === 'disclaimer'))
      return (
        g.current && clearTimeout(g.current),
        (g.current = setTimeout(() => {
          Ng({
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
  const I = U.useCallback((D) => {
      (l({ type: Le.GO_TO_STEP, payload: D }), window.scrollTo(0, 0));
    }, []),
    T = U.useCallback((D, ee) => {
      l({ type: Le.UPDATE_QUESTION, payload: { questionId: D, updates: ee } });
    }, []),
    O = U.useCallback((D, ee) => T(D, { credences: ee }), [T]),
    P = U.useCallback((D, ee) => T(D, { inputMode: ee }), [T]),
    F = U.useCallback((D, ee) => T(D, { lockedKeys: ee }), [T]),
    M = U.useCallback((D, ee) => T(D, { selectedPreset: ee }), [T]),
    te = U.useCallback((D) => {
      l({ type: Le.SET_EXPANDED_PANEL, payload: D });
    }, []),
    ne = U.useCallback(() => {
      l({ type: Le.SAVE_ORIGINALS });
    }, []),
    A = U.useCallback(() => {
      l({ type: Le.RESET_TO_ORIGINAL });
    }, []),
    V = U.useCallback(() => {
      (l({ type: Le.RESET_QUIZ }), wo());
    }, []),
    ue = U.useCallback((D) => {
      l({ type: Le.SET_DEBUG_CONFIG, payload: D });
    }, []),
    ae = U.useCallback((D) => {
      l({ type: Le.SWITCH_WORLDVIEW, payload: D });
    }, []),
    de = U.useCallback((D) => {
      l({ type: Le.SET_SELECTED_CALCULATIONS, payload: D });
    }, []),
    Z = U.useCallback((D, ee) => {
      l({ type: Le.SET_WORLDVIEW_NAME, payload: { worldviewId: D, name: ee } });
    }, []),
    W = U.useCallback((D) => {
      l({ type: Le.SET_MARKETPLACE_BUDGET, payload: D });
    }, []),
    pe = U.useCallback((D) => {
      l({ type: Le.SET_JUST_COMPLETED_WORLDVIEW, payload: D });
    }, []),
    H = U.useCallback(() => {
      l({ type: Le.CLEAR_JUST_COMPLETED_WORLDVIEW });
    }, []),
    q = U.useCallback((D) => {
      l({ type: Le.MARK_WORLDVIEW_COMPLETED, payload: D });
    }, []),
    me = U.useCallback(() => {
      l({ type: Le.ADD_WORLDVIEW });
    }, []),
    fe = U.useCallback((D) => ot.findIndex((ee) => ee.id === D), []),
    G = U.useCallback(
      (D) => {
        const ee = fe(D);
        return ee === 0 ? 'hub' : ot[ee - 1].id;
      },
      [fe]
    ),
    ie = U.useCallback(
      (D) => {
        const ee = fe(D);
        return ee === ot.length - 1 ? 'hub' : ot[ee + 1].id;
      },
      [fe]
    ),
    S = U.useCallback(() => {
      I(ot[0].id);
    }, [I]),
    N = U.useCallback(() => {
      i.currentStep === 'results' ? I(ot[ot.length - 1].id) : I(G(i.currentStep));
    }, [i.currentStep, I, G]),
    B = U.useCallback(() => {
      const D = ie(i.currentStep);
      (D === 'results' && ne(),
        D === 'hub' && (q(i.activeWorldviewId), pe(i.activeWorldviewId)),
        I(D));
    }, [i.currentStep, i.activeWorldviewId, I, ie, ne, q, pe]),
    _ = U.useMemo(
      () => i.worldviews[i.activeWorldviewId].questions,
      [i.worldviews, i.activeWorldviewId]
    ),
    ge = U.useCallback(
      (D) => {
        var Yt;
        const ee = D === 'original' ? 'originalCredences' : 'credences',
          Ae = ot.filter((z) => !Dn(z)),
          We = _[(Yt = Ae[0]) == null ? void 0 : Yt.id];
        return D === 'original' && !(We != null && We.originalCredences)
          ? null
          : Object.fromEntries(
              Ae.map((z) => {
                var J;
                return [z.id, ((J = _[z.id]) == null ? void 0 : J[ee]) || lu(z)];
              })
            );
      },
      [_]
    ),
    ke = U.useCallback(
      (D, ee) =>
        D
          ? {
              maxEV: by(D, ee),
              parliament: Ny(D, ee),
              mergedFavorites: Iy(D, ee),
              maximin: Ty(D, ee),
            }
          : null,
      []
    ),
    ye = U.useMemo(() => ke(ge('current'), i.debugConfig), [ge, ke, i.debugConfig]),
    Ee = U.useMemo(() => ke(ge('original'), i.debugConfig), [ge, ke, i.debugConfig]),
    be = U.useMemo(
      () =>
        Object.values(_).some(
          (D) =>
            D.originalCredences &&
            JSON.stringify(D.credences) !== JSON.stringify(D.originalCredences)
        ),
      [_]
    ),
    Ne = U.useMemo(
      () => Object.keys(i.worldviews).sort((D, ee) => parseInt(D, 10) - parseInt(ee, 10)),
      [i.worldviews]
    ),
    qe = U.useMemo(
      () => Object.fromEntries(Ne.map((D) => [D, Vy(i.worldviews[D])])),
      [i.worldviews, Ne]
    ),
    _t = U.useMemo(
      () =>
        Object.fromEntries(
          Ne.map((D) => {
            var ee;
            return [D, ((ee = i.worldviews[D]) == null ? void 0 : ee.completed) === !0];
          })
        ),
      [i.worldviews, Ne]
    ),
    Wn = Ne.every((D) => _t[D]),
    on = Ne.length < kp && Wn,
    He = U.useMemo(() => fe(i.currentStep), [i.currentStep, fe]),
    mn = U.useMemo(() => (He === -1 ? null : yf[He]), [He]),
    bt = U.useMemo(() => {
      if (He === -1) return -1;
      const D = ot[He],
        ee = va(ot, He);
      return Dn(D) ? ee : ee + 1;
    }, [He]),
    Dt = U.useMemo(() => {
      if (He === -1) return 0;
      const D = ot[He];
      return ((Dn(D) ? va(ot, He) : bt) / wa) * 100;
    }, [He, bt]),
    gn = U.useMemo(() => {
      if (He === -1) return '';
      const D = ot[He];
      return `Question ${Dn(D) ? va(ot, He) : bt} of ${wa}`;
    }, [He, bt]),
    Gt = U.useMemo(() => {
      const D = {};
      return (
        ot
          .filter((ee) => !Dn(ee))
          .forEach((ee) => {
            const Ae = _[ee.id];
            Ae &&
              (D[ee.id] = {
                credences: Ae.credences,
                setCredences: (We) => O(ee.id, We),
                originalCredences: Ae.originalCredences,
                inputMode: Ae.inputMode,
                setInputMode: (We) => P(ee.id, We),
                lockedKeys: Ae.lockedKeys,
                setLockedKeys: (We) => F(ee.id, We),
                selectedPreset: Ae.selectedPreset,
                setSelectedPreset: (We) => M(ee.id, We),
              });
          }),
        D
      );
    }, [_, O, P, F, M]),
    zt = U.useMemo(
      () => ({
        currentStep: i.currentStep,
        questions: _,
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
        sessionId: m,
        isAdvancedMode: My,
        questionsConfig: yf,
        causesConfig: Fy,
        defaultCredences: By,
        worldviewIds: Ne,
        canAddWorldview: on,
        addWorldview: me,
        goToStep: I,
        setCredences: O,
        setInputMode: P,
        setLockedKeys: F,
        setSelectedPreset: M,
        setExpandedPanel: te,
        saveOriginals: ne,
        resetToOriginal: A,
        resetQuiz: V,
        setDebugConfig: ue,
        switchWorldview: ae,
        setSelectedCalculations: de,
        setWorldviewName: Z,
        setMarketplaceBudget: W,
        clearJustCompletedWorldview: H,
        getQuestionIndex: fe,
        getPrevStep: G,
        getNextStep: ie,
        startQuiz: S,
        goBack: N,
        goForward: B,
        currentQuestion: mn,
        currentQuestionIndex: He,
        totalQuestions: wa,
        progressPercentage: Dt,
        questionNumber: gn,
        hasChanged: be,
        hasProgressMap: qe,
        completedMap: _t,
        calculationResults: ye,
        originalCalculationResults: Ee,
        stateMap: Gt,
      }),
      [
        i.currentStep,
        _,
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
        m,
        I,
        O,
        P,
        F,
        M,
        te,
        ne,
        A,
        V,
        ue,
        ae,
        de,
        Z,
        W,
        H,
        fe,
        G,
        ie,
        S,
        N,
        B,
        mn,
        He,
        Dt,
        gn,
        be,
        qe,
        _t,
        ye,
        Ee,
        Gt,
        Ne,
        on,
        me,
      ]
    );
  return v.jsxs(Cp.Provider, {
    value: zt,
    children: [n, p && v.jsx(gy, { onKeepMine: w, onLoadShared: x, onOpenNewTab: k })],
  });
}
function Ky(n, i) {
  const l = {};
  return (n[n.length - 1] === '' ? [...n, ''] : n)
    .join((l.padRight ? ' ' : '') + ',' + (l.padLeft === !1 ? '' : ' '))
    .trim();
}
const Gy = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Yy = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Xy = {};
function vf(n, i) {
  return (Xy.jsx ? Yy : Gy).test(n);
}
const Jy = /[ \t\n\f\r]/g;
function Zy(n) {
  return typeof n == 'object' ? (n.type === 'text' ? wf(n.value) : !1) : wf(n);
}
function wf(n) {
  return n.replace(Jy, '') === '';
}
class tl {
  constructor(i, l, s) {
    ((this.normal = l), (this.property = i), s && (this.space = s));
  }
}
tl.prototype.normal = {};
tl.prototype.property = {};
tl.prototype.space = void 0;
function Ep(n, i) {
  const l = {},
    s = {};
  for (const u of n) (Object.assign(l, u.property), Object.assign(s, u.normal));
  return new tl(l, s, i);
}
function Wa(n) {
  return n.toLowerCase();
}
class Mt {
  constructor(i, l) {
    ((this.attribute = l), (this.property = i));
  }
}
Mt.prototype.attribute = '';
Mt.prototype.booleanish = !1;
Mt.prototype.boolean = !1;
Mt.prototype.commaOrSpaceSeparated = !1;
Mt.prototype.commaSeparated = !1;
Mt.prototype.defined = !1;
Mt.prototype.mustUseProperty = !1;
Mt.prototype.number = !1;
Mt.prototype.overloadedBoolean = !1;
Mt.prototype.property = '';
Mt.prototype.spaceSeparated = !1;
Mt.prototype.space = void 0;
let ev = 0;
const Ie = Ir(),
  st = Ir(),
  $a = Ir(),
  Y = Ir(),
  Ue = Ir(),
  ri = Ir(),
  Ht = Ir();
function Ir() {
  return 2 ** ++ev;
}
const Ua = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: Ie,
        booleanish: st,
        commaOrSpaceSeparated: Ht,
        commaSeparated: ri,
        number: Y,
        overloadedBoolean: $a,
        spaceSeparated: Ue,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  ka = Object.keys(Ua);
class ou extends Mt {
  constructor(i, l, s, u) {
    let c = -1;
    if ((super(i, l), kf(this, 'space', u), typeof s == 'number'))
      for (; ++c < ka.length; ) {
        const d = ka[c];
        kf(this, ka[c], (s & Ua[d]) === Ua[d]);
      }
  }
}
ou.prototype.defined = !0;
function kf(n, i, l) {
  l && (n[i] = l);
}
function oi(n) {
  const i = {},
    l = {};
  for (const [s, u] of Object.entries(n.properties)) {
    const c = new ou(s, n.transform(n.attributes || {}, s), u, n.space);
    (n.mustUseProperty && n.mustUseProperty.includes(s) && (c.mustUseProperty = !0),
      (i[s] = c),
      (l[Wa(s)] = s),
      (l[Wa(c.attribute)] = s));
  }
  return new tl(i, l, n.space);
}
const bp = oi({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: st,
    ariaAutoComplete: null,
    ariaBusy: st,
    ariaChecked: st,
    ariaColCount: Y,
    ariaColIndex: Y,
    ariaColSpan: Y,
    ariaControls: Ue,
    ariaCurrent: null,
    ariaDescribedBy: Ue,
    ariaDetails: null,
    ariaDisabled: st,
    ariaDropEffect: Ue,
    ariaErrorMessage: null,
    ariaExpanded: st,
    ariaFlowTo: Ue,
    ariaGrabbed: st,
    ariaHasPopup: null,
    ariaHidden: st,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Ue,
    ariaLevel: Y,
    ariaLive: null,
    ariaModal: st,
    ariaMultiLine: st,
    ariaMultiSelectable: st,
    ariaOrientation: null,
    ariaOwns: Ue,
    ariaPlaceholder: null,
    ariaPosInSet: Y,
    ariaPressed: st,
    ariaReadOnly: st,
    ariaRelevant: null,
    ariaRequired: st,
    ariaRoleDescription: Ue,
    ariaRowCount: Y,
    ariaRowIndex: Y,
    ariaRowSpan: Y,
    ariaSelected: st,
    ariaSetSize: Y,
    ariaSort: null,
    ariaValueMax: Y,
    ariaValueMin: Y,
    ariaValueNow: Y,
    ariaValueText: null,
    role: null,
  },
  transform(n, i) {
    return i === 'role' ? i : 'aria-' + i.slice(4).toLowerCase();
  },
});
function Np(n, i) {
  return i in n ? n[i] : i;
}
function Ip(n, i) {
  return Np(n, i.toLowerCase());
}
const tv = oi({
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv',
    },
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: ri,
      acceptCharset: Ue,
      accessKey: Ue,
      action: null,
      allow: null,
      allowFullScreen: Ie,
      allowPaymentRequest: Ie,
      allowUserMedia: Ie,
      alt: null,
      as: null,
      async: Ie,
      autoCapitalize: null,
      autoComplete: Ue,
      autoFocus: Ie,
      autoPlay: Ie,
      blocking: Ue,
      capture: null,
      charSet: null,
      checked: Ie,
      cite: null,
      className: Ue,
      cols: Y,
      colSpan: null,
      content: null,
      contentEditable: st,
      controls: Ie,
      controlsList: Ue,
      coords: Y | ri,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: Ie,
      defer: Ie,
      dir: null,
      dirName: null,
      disabled: Ie,
      download: $a,
      draggable: st,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: Ie,
      formTarget: null,
      headers: Ue,
      height: Y,
      hidden: $a,
      high: Y,
      href: null,
      hrefLang: null,
      htmlFor: Ue,
      httpEquiv: Ue,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: Ie,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: Ie,
      itemId: null,
      itemProp: Ue,
      itemRef: Ue,
      itemScope: Ie,
      itemType: Ue,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: Ie,
      low: Y,
      manifest: null,
      max: null,
      maxLength: Y,
      media: null,
      method: null,
      min: null,
      minLength: Y,
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
      optimum: Y,
      pattern: null,
      ping: Ue,
      placeholder: null,
      playsInline: Ie,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: Ie,
      referrerPolicy: null,
      rel: Ue,
      required: Ie,
      reversed: Ie,
      rows: Y,
      rowSpan: Y,
      sandbox: Ue,
      scope: null,
      scoped: Ie,
      seamless: Ie,
      selected: Ie,
      shadowRootClonable: Ie,
      shadowRootDelegatesFocus: Ie,
      shadowRootMode: null,
      shape: null,
      size: Y,
      sizes: null,
      slot: null,
      span: Y,
      spellCheck: st,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: Y,
      step: null,
      style: null,
      tabIndex: Y,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: Ie,
      useMap: null,
      value: st,
      width: Y,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: Ue,
      axis: null,
      background: null,
      bgColor: null,
      border: Y,
      borderColor: null,
      bottomMargin: Y,
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
      hSpace: Y,
      leftMargin: Y,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: Y,
      marginWidth: Y,
      noResize: Ie,
      noHref: Ie,
      noShade: Ie,
      noWrap: Ie,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: Y,
      rules: null,
      scheme: null,
      scrolling: st,
      standby: null,
      summary: null,
      text: null,
      topMargin: Y,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: Y,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: Ie,
      disableRemotePlayback: Ie,
      prefix: null,
      property: null,
      results: Y,
      security: null,
      unselectable: null,
    },
    space: 'html',
    transform: Ip,
  }),
  nv = oi({
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
      about: Ht,
      accentHeight: Y,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: Y,
      amplitude: Y,
      arabicForm: null,
      ascent: Y,
      attributeName: null,
      attributeType: null,
      azimuth: Y,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: Y,
      by: null,
      calcMode: null,
      capHeight: Y,
      className: Ue,
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
      descent: Y,
      diffuseConstant: Y,
      direction: null,
      display: null,
      dur: null,
      divisor: Y,
      dominantBaseline: null,
      download: Ie,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: Y,
      enableBackground: null,
      end: null,
      event: null,
      exponent: Y,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: Y,
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
      g1: ri,
      g2: ri,
      glyphName: ri,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: Y,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: Y,
      horizOriginX: Y,
      horizOriginY: Y,
      id: null,
      ideographic: Y,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: Y,
      k: Y,
      k1: Y,
      k2: Y,
      k3: Y,
      k4: Y,
      kernelMatrix: Ht,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: Y,
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
      mediaSize: Y,
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
      overlinePosition: Y,
      overlineThickness: Y,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: Y,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: Ue,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: Y,
      pointsAtY: Y,
      pointsAtZ: Y,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: Ht,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: Ht,
      rev: Ht,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: Ht,
      requiredFeatures: Ht,
      requiredFonts: Ht,
      requiredFormats: Ht,
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
      specularConstant: Y,
      specularExponent: Y,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: Y,
      strikethroughThickness: Y,
      string: null,
      stroke: null,
      strokeDashArray: Ht,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: Y,
      strokeOpacity: Y,
      strokeWidth: null,
      style: null,
      surfaceScale: Y,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: Ht,
      tabIndex: Y,
      tableValues: null,
      target: null,
      targetX: Y,
      targetY: Y,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: Ht,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: Y,
      underlineThickness: Y,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: Y,
      values: null,
      vAlphabetic: Y,
      vMathematical: Y,
      vectorEffect: null,
      vHanging: Y,
      vIdeographic: Y,
      version: null,
      vertAdvY: Y,
      vertOriginX: Y,
      vertOriginY: Y,
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
      xHeight: Y,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: 'svg',
    transform: Np,
  }),
  Tp = oi({
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
  jp = oi({
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    properties: { xmlnsXLink: null, xmlns: null },
    space: 'xmlns',
    transform: Ip,
  }),
  Lp = oi({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: 'xml',
    transform(n, i) {
      return 'xml:' + i.slice(3).toLowerCase();
    },
  }),
  rv = {
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
  iv = /[A-Z]/g,
  xf = /-[a-z]/g,
  lv = /^data[-\w.:]+$/i;
function ov(n, i) {
  const l = Wa(i);
  let s = i,
    u = Mt;
  if (l in n.normal) return n.property[n.normal[l]];
  if (l.length > 4 && l.slice(0, 4) === 'data' && lv.test(i)) {
    if (i.charAt(4) === '-') {
      const c = i.slice(5).replace(xf, av);
      s = 'data' + c.charAt(0).toUpperCase() + c.slice(1);
    } else {
      const c = i.slice(4);
      if (!xf.test(c)) {
        let d = c.replace(iv, sv);
        (d.charAt(0) !== '-' && (d = '-' + d), (i = 'data' + d));
      }
    }
    u = ou;
  }
  return new u(s, i);
}
function sv(n) {
  return '-' + n.toLowerCase();
}
function av(n) {
  return n.charAt(1).toUpperCase();
}
const uv = Ep([bp, tv, Tp, jp, Lp], 'html'),
  su = Ep([bp, nv, Tp, jp, Lp], 'svg');
function cv(n) {
  return n.join(' ').trim();
}
var ei = {},
  xa,
  Sf;
function dv() {
  if (Sf) return xa;
  Sf = 1;
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
    w = '',
    x = 'comment',
    k = 'declaration';
  function I(O, P) {
    if (typeof O != 'string') throw new TypeError('First argument must be a string');
    if (!O) return [];
    P = P || {};
    var F = 1,
      M = 1;
    function te(H) {
      var q = H.match(i);
      q && (F += q.length);
      var me = H.lastIndexOf(h);
      M = ~me ? H.length - me : M + H.length;
    }
    function ne() {
      var H = { line: F, column: M };
      return function (q) {
        return ((q.position = new A(H)), ae(), q);
      };
    }
    function A(H) {
      ((this.start = H), (this.end = { line: F, column: M }), (this.source = P.source));
    }
    A.prototype.content = O;
    function V(H) {
      var q = new Error(P.source + ':' + F + ':' + M + ': ' + H);
      if (
        ((q.reason = H),
        (q.filename = P.source),
        (q.line = F),
        (q.column = M),
        (q.source = O),
        !P.silent)
      )
        throw q;
    }
    function ue(H) {
      var q = H.exec(O);
      if (q) {
        var me = q[0];
        return (te(me), (O = O.slice(me.length)), q);
      }
    }
    function ae() {
      ue(l);
    }
    function de(H) {
      var q;
      for (H = H || []; (q = Z()); ) q !== !1 && H.push(q);
      return H;
    }
    function Z() {
      var H = ne();
      if (!(m != O.charAt(0) || g != O.charAt(1))) {
        for (var q = 2; w != O.charAt(q) && (g != O.charAt(q) || m != O.charAt(q + 1)); ) ++q;
        if (((q += 2), w === O.charAt(q - 1))) return V('End of comment missing');
        var me = O.slice(2, q - 2);
        return ((M += 2), te(me), (O = O.slice(q)), (M += 2), H({ type: x, comment: me }));
      }
    }
    function W() {
      var H = ne(),
        q = ue(s);
      if (q) {
        if ((Z(), !ue(u))) return V("property missing ':'");
        var me = ue(c),
          fe = H({
            type: k,
            property: T(q[0].replace(n, w)),
            value: me ? T(me[0].replace(n, w)) : w,
          });
        return (ue(d), fe);
      }
    }
    function pe() {
      var H = [];
      de(H);
      for (var q; (q = W()); ) q !== !1 && (H.push(q), de(H));
      return H;
    }
    return (ae(), pe());
  }
  function T(O) {
    return O ? O.replace(p, w) : w;
  }
  return ((xa = I), xa);
}
var _f;
function fv() {
  if (_f) return ei;
  _f = 1;
  var n =
    (ei && ei.__importDefault) ||
    function (s) {
      return s && s.__esModule ? s : { default: s };
    };
  (Object.defineProperty(ei, '__esModule', { value: !0 }), (ei.default = l));
  const i = n(dv());
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
  return ei;
}
var Hi = {},
  Cf;
function pv() {
  if (Cf) return Hi;
  ((Cf = 1), Object.defineProperty(Hi, '__esModule', { value: !0 }), (Hi.camelCase = void 0));
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
  return ((Hi.camelCase = h), Hi);
}
var Qi, Ef;
function hv() {
  if (Ef) return Qi;
  Ef = 1;
  var n =
      (Qi && Qi.__importDefault) ||
      function (u) {
        return u && u.__esModule ? u : { default: u };
      },
    i = n(fv()),
    l = pv();
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
  return ((s.default = s), (Qi = s), Qi);
}
var mv = hv();
const gv = sp(mv),
  Pp = Op('end'),
  au = Op('start');
function Op(n) {
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
function yv(n) {
  const i = au(n),
    l = Pp(n);
  if (i && l) return { start: i, end: l };
}
function Yi(n) {
  return !n || typeof n != 'object'
    ? ''
    : 'position' in n || 'type' in n
      ? bf(n.position)
      : 'start' in n || 'end' in n
        ? bf(n)
        : 'line' in n || 'column' in n
          ? Va(n)
          : '';
}
function Va(n) {
  return Nf(n && n.line) + ':' + Nf(n && n.column);
}
function bf(n) {
  return Va(n && n.start) + '-' + Va(n && n.end);
}
function Nf(n) {
  return n && typeof n == 'number' ? n : 1;
}
class St extends Error {
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
      (this.name = Yi(c.place) || '1:1'),
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
St.prototype.file = '';
St.prototype.name = '';
St.prototype.reason = '';
St.prototype.message = '';
St.prototype.stack = '';
St.prototype.column = void 0;
St.prototype.line = void 0;
St.prototype.ancestors = void 0;
St.prototype.cause = void 0;
St.prototype.fatal = void 0;
St.prototype.place = void 0;
St.prototype.ruleId = void 0;
St.prototype.source = void 0;
const uu = {}.hasOwnProperty,
  vv = new Map(),
  wv = /[A-Z]/g,
  kv = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr']),
  xv = new Set(['td', 'th']),
  Rp = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';
function Sv(n, i) {
  if (!i || i.Fragment === void 0) throw new TypeError('Expected `Fragment` in options');
  const l = i.filePath || void 0;
  let s;
  if (i.development) {
    if (typeof i.jsxDEV != 'function')
      throw new TypeError('Expected `jsxDEV` in options when `development: true`');
    s = jv(l, i.jsxDEV);
  } else {
    if (typeof i.jsx != 'function') throw new TypeError('Expected `jsx` in production options');
    if (typeof i.jsxs != 'function') throw new TypeError('Expected `jsxs` in production options');
    s = Tv(l, i.jsx, i.jsxs);
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
      schema: i.space === 'svg' ? su : uv,
      stylePropertyNameCase: i.stylePropertyNameCase || 'dom',
      tableCellAlignToStyle: i.tableCellAlignToStyle !== !1,
    },
    c = Ap(u, n, void 0);
  return c && typeof c != 'string' ? c : u.create(n, u.Fragment, { children: c || void 0 }, void 0);
}
function Ap(n, i, l) {
  if (i.type === 'element') return _v(n, i, l);
  if (i.type === 'mdxFlowExpression' || i.type === 'mdxTextExpression') return Cv(n, i);
  if (i.type === 'mdxJsxFlowElement' || i.type === 'mdxJsxTextElement') return bv(n, i, l);
  if (i.type === 'mdxjsEsm') return Ev(n, i);
  if (i.type === 'root') return Nv(n, i, l);
  if (i.type === 'text') return Iv(n, i);
}
function _v(n, i, l) {
  const s = n.schema;
  let u = s;
  (i.tagName.toLowerCase() === 'svg' && s.space === 'html' && ((u = su), (n.schema = u)),
    n.ancestors.push(i));
  const c = Dp(n, i.tagName, !1),
    d = Lv(n, i);
  let p = du(n, i);
  return (
    kv.has(i.tagName) &&
      (p = p.filter(function (h) {
        return typeof h == 'string' ? !Zy(h) : !0;
      })),
    Mp(n, d, c, i),
    cu(d, p),
    n.ancestors.pop(),
    (n.schema = s),
    n.create(i, c, d, l)
  );
}
function Cv(n, i) {
  if (i.data && i.data.estree && n.evaluater) {
    const s = i.data.estree.body[0];
    return (s.type, n.evaluater.evaluateExpression(s.expression));
  }
  Zi(n, i.position);
}
function Ev(n, i) {
  if (i.data && i.data.estree && n.evaluater) return n.evaluater.evaluateProgram(i.data.estree);
  Zi(n, i.position);
}
function bv(n, i, l) {
  const s = n.schema;
  let u = s;
  (i.name === 'svg' && s.space === 'html' && ((u = su), (n.schema = u)), n.ancestors.push(i));
  const c = i.name === null ? n.Fragment : Dp(n, i.name, !0),
    d = Pv(n, i),
    p = du(n, i);
  return (Mp(n, d, c, i), cu(d, p), n.ancestors.pop(), (n.schema = s), n.create(i, c, d, l));
}
function Nv(n, i, l) {
  const s = {};
  return (cu(s, du(n, i)), n.create(i, n.Fragment, s, l));
}
function Iv(n, i) {
  return i.value;
}
function Mp(n, i, l, s) {
  typeof l != 'string' && l !== n.Fragment && n.passNode && (i.node = s);
}
function cu(n, i) {
  if (i.length > 0) {
    const l = i.length > 1 ? i : i[0];
    l && (n.children = l);
  }
}
function Tv(n, i, l) {
  return s;
  function s(u, c, d, p) {
    const m = Array.isArray(d.children) ? l : i;
    return p ? m(c, d, p) : m(c, d);
  }
}
function jv(n, i) {
  return l;
  function l(s, u, c, d) {
    const p = Array.isArray(c.children),
      h = au(s);
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
function Lv(n, i) {
  const l = {};
  let s, u;
  for (u in i.properties)
    if (u !== 'children' && uu.call(i.properties, u)) {
      const c = Ov(n, u, i.properties[u]);
      if (c) {
        const [d, p] = c;
        n.tableCellAlignToStyle && d === 'align' && typeof p == 'string' && xv.has(i.tagName)
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
function Pv(n, i) {
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
      } else Zi(n, i.position);
    else {
      const u = s.name;
      let c;
      if (s.value && typeof s.value == 'object')
        if (s.value.data && s.value.data.estree && n.evaluater) {
          const p = s.value.data.estree.body[0];
          (p.type, (c = n.evaluater.evaluateExpression(p.expression)));
        } else Zi(n, i.position);
      else c = s.value === null ? !0 : s.value;
      l[u] = c;
    }
  return l;
}
function du(n, i) {
  const l = [];
  let s = -1;
  const u = n.passKeys ? new Map() : vv;
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
    const p = Ap(n, c, d);
    p !== void 0 && l.push(p);
  }
  return l;
}
function Ov(n, i, l) {
  const s = ov(n.schema, i);
  if (!(l == null || (typeof l == 'number' && Number.isNaN(l)))) {
    if ((Array.isArray(l) && (l = s.commaSeparated ? Ky(l) : cv(l)), s.property === 'style')) {
      let u = typeof l == 'object' ? l : Rv(n, String(l));
      return (n.stylePropertyNameCase === 'css' && (u = Av(u)), ['style', u]);
    }
    return [
      n.elementAttributeNameCase === 'react' && s.space
        ? rv[s.property] || s.property
        : s.attribute,
      l,
    ];
  }
}
function Rv(n, i) {
  try {
    return gv(i, { reactCompat: !0 });
  } catch (l) {
    if (n.ignoreInvalidStyle) return {};
    const s = l,
      u = new St('Cannot parse `style` attribute', {
        ancestors: n.ancestors,
        cause: s,
        ruleId: 'style',
        source: 'hast-util-to-jsx-runtime',
      });
    throw ((u.file = n.filePath || void 0), (u.url = Rp + '#cannot-parse-style-attribute'), u);
  }
}
function Dp(n, i, l) {
  let s;
  if (!l) s = { type: 'Literal', value: i };
  else if (i.includes('.')) {
    const u = i.split('.');
    let c = -1,
      d;
    for (; ++c < u.length; ) {
      const p = vf(u[c]) ? { type: 'Identifier', name: u[c] } : { type: 'Literal', value: u[c] };
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
      vf(i) && !/^[a-z]/.test(i) ? { type: 'Identifier', name: i } : { type: 'Literal', value: i };
  if (s.type === 'Literal') {
    const u = s.value;
    return uu.call(n.components, u) ? n.components[u] : u;
  }
  if (n.evaluater) return n.evaluater.evaluateExpression(s);
  Zi(n);
}
function Zi(n, i) {
  const l = new St('Cannot handle MDX estrees without `createEvaluater`', {
    ancestors: n.ancestors,
    place: i,
    ruleId: 'mdx-estree',
    source: 'hast-util-to-jsx-runtime',
  });
  throw (
    (l.file = n.filePath || void 0),
    (l.url = Rp + '#cannot-handle-mdx-estrees-without-createevaluater'),
    l
  );
}
function Av(n) {
  const i = {};
  let l;
  for (l in n) uu.call(n, l) && (i[Mv(l)] = n[l]);
  return i;
}
function Mv(n) {
  let i = n.replace(wv, Dv);
  return (i.slice(0, 3) === 'ms-' && (i = '-' + i), i);
}
function Dv(n) {
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
  zv = {};
function Fv(n, i) {
  const l = zv,
    s = typeof l.includeImageAlt == 'boolean' ? l.includeImageAlt : !0,
    u = typeof l.includeHtml == 'boolean' ? l.includeHtml : !0;
  return zp(n, s, u);
}
function zp(n, i, l) {
  if (Bv(n)) {
    if ('value' in n) return n.type === 'html' && !l ? '' : n.value;
    if (i && 'alt' in n && n.alt) return n.alt;
    if ('children' in n) return If(n.children, i, l);
  }
  return Array.isArray(n) ? If(n, i, l) : '';
}
function If(n, i, l) {
  const s = [];
  let u = -1;
  for (; ++u < n.length; ) s[u] = zp(n[u], i, l);
  return s.join('');
}
function Bv(n) {
  return !!(n && typeof n == 'object');
}
const Tf = document.createElement('i');
function fu(n) {
  const i = '&' + n + ';';
  Tf.innerHTML = i;
  const l = Tf.textContent;
  return (l.charCodeAt(l.length - 1) === 59 && n !== 'semi') || l === i ? !1 : l;
}
function En(n, i, l, s) {
  const u = n.length;
  let c = 0,
    d;
  if ((i < 0 ? (i = -i > u ? 0 : u + i) : (i = i > u ? u : i), (l = l > 0 ? l : 0), s.length < 1e4))
    ((d = Array.from(s)), d.unshift(i, l), n.splice(...d));
  else
    for (l && n.splice(i, l); c < s.length; )
      ((d = s.slice(c, c + 1e4)), d.unshift(i, 0), n.splice(...d), (c += 1e4), (i += 1e4));
}
function ln(n, i) {
  return n.length > 0 ? (En(n, n.length, 0, i), n) : i;
}
const jf = {}.hasOwnProperty;
function Wv(n) {
  const i = {};
  let l = -1;
  for (; ++l < n.length; ) $v(i, n[l]);
  return i;
}
function $v(n, i) {
  let l;
  for (l in i) {
    const u = (jf.call(n, l) ? n[l] : void 0) || (n[l] = {}),
      c = i[l];
    let d;
    if (c)
      for (d in c) {
        jf.call(u, d) || (u[d] = []);
        const p = c[d];
        Uv(u[d], Array.isArray(p) ? p : p ? [p] : []);
      }
  }
}
function Uv(n, i) {
  let l = -1;
  const s = [];
  for (; ++l < i.length; ) (i[l].add === 'after' ? n : s).push(i[l]);
  En(n, 0, 0, s);
}
function Fp(n, i) {
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
function ii(n) {
  return n
    .replace(/[\t\n\r ]+/g, ' ')
    .replace(/^ | $/g, '')
    .toLowerCase()
    .toUpperCase();
}
const Cn = cr(/[A-Za-z]/),
  Kt = cr(/[\dA-Za-z]/),
  Vv = cr(/[#-'*+\--9=?A-Z^-~]/);
function qa(n) {
  return n !== null && (n < 32 || n === 127);
}
const Ha = cr(/\d/),
  qv = cr(/[\dA-Fa-f]/),
  Hv = cr(/[!-/:-@[-`{-~]/);
function Ce(n) {
  return n !== null && n < -2;
}
function At(n) {
  return n !== null && (n < 0 || n === 32);
}
function Me(n) {
  return n === -2 || n === -1 || n === 32;
}
const Qv = cr(new RegExp('\\p{P}|\\p{S}', 'u')),
  Kv = cr(/\s/);
function cr(n) {
  return i;
  function i(l) {
    return l !== null && l > -1 && n.test(String.fromCharCode(l));
  }
}
function si(n) {
  const i = [];
  let l = -1,
    s = 0,
    u = 0;
  for (; ++l < n.length; ) {
    const c = n.charCodeAt(l);
    let d = '';
    if (c === 37 && Kt(n.charCodeAt(l + 1)) && Kt(n.charCodeAt(l + 2))) u = 2;
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
function Ve(n, i, l, s) {
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
const Gv = { tokenize: Yv };
function Yv(n) {
  const i = n.attempt(this.parser.constructs.contentInitial, s, u);
  let l;
  return i;
  function s(p) {
    if (p === null) {
      n.consume(p);
      return;
    }
    return (n.enter('lineEnding'), n.consume(p), n.exit('lineEnding'), Ve(n, i, 'linePrefix'));
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
    return Ce(p) ? (n.consume(p), n.exit('chunkText'), c) : (n.consume(p), d);
  }
}
const Xv = { tokenize: Jv },
  Lf = { tokenize: Zv };
function Jv(n) {
  const i = this,
    l = [];
  let s = 0,
    u,
    c,
    d;
  return p;
  function p(M) {
    if (s < l.length) {
      const te = l[s];
      return ((i.containerState = te[1]), n.attempt(te[0].continuation, h, m)(M));
    }
    return m(M);
  }
  function h(M) {
    if ((s++, i.containerState._closeFlow)) {
      ((i.containerState._closeFlow = void 0), u && F());
      const te = i.events.length;
      let ne = te,
        A;
      for (; ne--; )
        if (i.events[ne][0] === 'exit' && i.events[ne][1].type === 'chunkFlow') {
          A = i.events[ne][1].end;
          break;
        }
      P(s);
      let V = te;
      for (; V < i.events.length; ) ((i.events[V][1].end = { ...A }), V++);
      return (En(i.events, ne + 1, 0, i.events.slice(te)), (i.events.length = V), m(M));
    }
    return p(M);
  }
  function m(M) {
    if (s === l.length) {
      if (!u) return x(M);
      if (u.currentConstruct && u.currentConstruct.concrete) return I(M);
      i.interrupt = !!(u.currentConstruct && !u._gfmTableDynamicInterruptHack);
    }
    return ((i.containerState = {}), n.check(Lf, g, w)(M));
  }
  function g(M) {
    return (u && F(), P(s), x(M));
  }
  function w(M) {
    return ((i.parser.lazy[i.now().line] = s !== l.length), (d = i.now().offset), I(M));
  }
  function x(M) {
    return ((i.containerState = {}), n.attempt(Lf, k, I)(M));
  }
  function k(M) {
    return (s++, l.push([i.currentConstruct, i.containerState]), x(M));
  }
  function I(M) {
    if (M === null) {
      (u && F(), P(0), n.consume(M));
      return;
    }
    return (
      (u = u || i.parser.flow(i.now())),
      n.enter('chunkFlow', { _tokenizer: u, contentType: 'flow', previous: c }),
      T(M)
    );
  }
  function T(M) {
    if (M === null) {
      (O(n.exit('chunkFlow'), !0), P(0), n.consume(M));
      return;
    }
    return Ce(M)
      ? (n.consume(M), O(n.exit('chunkFlow')), (s = 0), (i.interrupt = void 0), p)
      : (n.consume(M), T);
  }
  function O(M, te) {
    const ne = i.sliceStream(M);
    if (
      (te && ne.push(null),
      (M.previous = c),
      c && (c.next = M),
      (c = M),
      u.defineSkip(M.start),
      u.write(ne),
      i.parser.lazy[M.start.line])
    ) {
      let A = u.events.length;
      for (; A--; )
        if (
          u.events[A][1].start.offset < d &&
          (!u.events[A][1].end || u.events[A][1].end.offset > d)
        )
          return;
      const V = i.events.length;
      let ue = V,
        ae,
        de;
      for (; ue--; )
        if (i.events[ue][0] === 'exit' && i.events[ue][1].type === 'chunkFlow') {
          if (ae) {
            de = i.events[ue][1].end;
            break;
          }
          ae = !0;
        }
      for (P(s), A = V; A < i.events.length; ) ((i.events[A][1].end = { ...de }), A++);
      (En(i.events, ue + 1, 0, i.events.slice(V)), (i.events.length = A));
    }
  }
  function P(M) {
    let te = l.length;
    for (; te-- > M; ) {
      const ne = l[te];
      ((i.containerState = ne[1]), ne[0].exit.call(i, n));
    }
    l.length = M;
  }
  function F() {
    (u.write([null]), (c = void 0), (u = void 0), (i.containerState._closeFlow = void 0));
  }
}
function Zv(n, i, l) {
  return Ve(
    n,
    n.attempt(this.parser.constructs.document, i, l),
    'linePrefix',
    this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
  );
}
function Pf(n) {
  if (n === null || At(n) || Kv(n)) return 1;
  if (Qv(n)) return 2;
}
function pu(n, i, l) {
  const s = [];
  let u = -1;
  for (; ++u < n.length; ) {
    const c = n[u].resolveAll;
    c && !s.includes(c) && ((i = c(i, l)), s.push(c));
  }
  return i;
}
const Qa = { name: 'attention', resolveAll: e1, tokenize: t1 };
function e1(n, i) {
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
          const w = { ...n[s][1].end },
            x = { ...n[l][1].start };
          (Of(w, -h),
            Of(x, h),
            (d = {
              type: h > 1 ? 'strongSequence' : 'emphasisSequence',
              start: w,
              end: { ...n[s][1].end },
            }),
            (p = {
              type: h > 1 ? 'strongSequence' : 'emphasisSequence',
              start: { ...n[l][1].start },
              end: x,
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
              (m = ln(m, [
                ['enter', n[s][1], i],
                ['exit', n[s][1], i],
              ])),
            (m = ln(m, [
              ['enter', u, i],
              ['enter', d, i],
              ['exit', d, i],
              ['enter', c, i],
            ])),
            (m = ln(m, pu(i.parser.constructs.insideSpan.null, n.slice(s + 1, l), i))),
            (m = ln(m, [
              ['exit', c, i],
              ['enter', p, i],
              ['exit', p, i],
              ['exit', u, i],
            ])),
            n[l][1].end.offset - n[l][1].start.offset
              ? ((g = 2),
                (m = ln(m, [
                  ['enter', n[l][1], i],
                  ['exit', n[l][1], i],
                ])))
              : (g = 0),
            En(n, s - 1, l - s + 3, m),
            (l = s + m.length - g - 2));
          break;
        }
    }
  for (l = -1; ++l < n.length; ) n[l][1].type === 'attentionSequence' && (n[l][1].type = 'data');
  return n;
}
function t1(n, i) {
  const l = this.parser.constructs.attentionMarkers.null,
    s = this.previous,
    u = Pf(s);
  let c;
  return d;
  function d(h) {
    return ((c = h), n.enter('attentionSequence'), p(h));
  }
  function p(h) {
    if (h === c) return (n.consume(h), p);
    const m = n.exit('attentionSequence'),
      g = Pf(h),
      w = !g || (g === 2 && u) || l.includes(h),
      x = !u || (u === 2 && g) || l.includes(s);
    return (
      (m._open = !!(c === 42 ? w : w && (u || !x))),
      (m._close = !!(c === 42 ? x : x && (g || !w))),
      i(h)
    );
  }
}
function Of(n, i) {
  ((n.column += i), (n.offset += i), (n._bufferIndex += i));
}
const n1 = { name: 'autolink', tokenize: r1 };
function r1(n, i, l) {
  let s = 0;
  return u;
  function u(k) {
    return (
      n.enter('autolink'),
      n.enter('autolinkMarker'),
      n.consume(k),
      n.exit('autolinkMarker'),
      n.enter('autolinkProtocol'),
      c
    );
  }
  function c(k) {
    return Cn(k) ? (n.consume(k), d) : k === 64 ? l(k) : m(k);
  }
  function d(k) {
    return k === 43 || k === 45 || k === 46 || Kt(k) ? ((s = 1), p(k)) : m(k);
  }
  function p(k) {
    return k === 58
      ? (n.consume(k), (s = 0), h)
      : (k === 43 || k === 45 || k === 46 || Kt(k)) && s++ < 32
        ? (n.consume(k), p)
        : ((s = 0), m(k));
  }
  function h(k) {
    return k === 62
      ? (n.exit('autolinkProtocol'),
        n.enter('autolinkMarker'),
        n.consume(k),
        n.exit('autolinkMarker'),
        n.exit('autolink'),
        i)
      : k === null || k === 32 || k === 60 || qa(k)
        ? l(k)
        : (n.consume(k), h);
  }
  function m(k) {
    return k === 64 ? (n.consume(k), g) : Vv(k) ? (n.consume(k), m) : l(k);
  }
  function g(k) {
    return Kt(k) ? w(k) : l(k);
  }
  function w(k) {
    return k === 46
      ? (n.consume(k), (s = 0), g)
      : k === 62
        ? ((n.exit('autolinkProtocol').type = 'autolinkEmail'),
          n.enter('autolinkMarker'),
          n.consume(k),
          n.exit('autolinkMarker'),
          n.exit('autolink'),
          i)
        : x(k);
  }
  function x(k) {
    if ((k === 45 || Kt(k)) && s++ < 63) {
      const I = k === 45 ? x : w;
      return (n.consume(k), I);
    }
    return l(k);
  }
}
const _o = { partial: !0, tokenize: i1 };
function i1(n, i, l) {
  return s;
  function s(c) {
    return Me(c) ? Ve(n, u, 'linePrefix')(c) : u(c);
  }
  function u(c) {
    return c === null || Ce(c) ? i(c) : l(c);
  }
}
const Bp = { continuation: { tokenize: o1 }, exit: s1, name: 'blockQuote', tokenize: l1 };
function l1(n, i, l) {
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
function o1(n, i, l) {
  const s = this;
  return u;
  function u(d) {
    return Me(d)
      ? Ve(
          n,
          c,
          'linePrefix',
          s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
        )(d)
      : c(d);
  }
  function c(d) {
    return n.attempt(Bp, i, l)(d);
  }
}
function s1(n) {
  n.exit('blockQuote');
}
const Wp = { name: 'characterEscape', tokenize: a1 };
function a1(n, i, l) {
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
    return Hv(c)
      ? (n.enter('characterEscapeValue'),
        n.consume(c),
        n.exit('characterEscapeValue'),
        n.exit('characterEscape'),
        i)
      : l(c);
  }
}
const $p = { name: 'characterReference', tokenize: u1 };
function u1(n, i, l) {
  const s = this;
  let u = 0,
    c,
    d;
  return p;
  function p(w) {
    return (
      n.enter('characterReference'),
      n.enter('characterReferenceMarker'),
      n.consume(w),
      n.exit('characterReferenceMarker'),
      h
    );
  }
  function h(w) {
    return w === 35
      ? (n.enter('characterReferenceMarkerNumeric'),
        n.consume(w),
        n.exit('characterReferenceMarkerNumeric'),
        m)
      : (n.enter('characterReferenceValue'), (c = 31), (d = Kt), g(w));
  }
  function m(w) {
    return w === 88 || w === 120
      ? (n.enter('characterReferenceMarkerHexadecimal'),
        n.consume(w),
        n.exit('characterReferenceMarkerHexadecimal'),
        n.enter('characterReferenceValue'),
        (c = 6),
        (d = qv),
        g)
      : (n.enter('characterReferenceValue'), (c = 7), (d = Ha), g(w));
  }
  function g(w) {
    if (w === 59 && u) {
      const x = n.exit('characterReferenceValue');
      return d === Kt && !fu(s.sliceSerialize(x))
        ? l(w)
        : (n.enter('characterReferenceMarker'),
          n.consume(w),
          n.exit('characterReferenceMarker'),
          n.exit('characterReference'),
          i);
    }
    return d(w) && u++ < c ? (n.consume(w), g) : l(w);
  }
}
const Rf = { partial: !0, tokenize: d1 },
  Af = { concrete: !0, name: 'codeFenced', tokenize: c1 };
function c1(n, i, l) {
  const s = this,
    u = { partial: !0, tokenize: ne };
  let c = 0,
    d = 0,
    p;
  return h;
  function h(A) {
    return m(A);
  }
  function m(A) {
    const V = s.events[s.events.length - 1];
    return (
      (c = V && V[1].type === 'linePrefix' ? V[2].sliceSerialize(V[1], !0).length : 0),
      (p = A),
      n.enter('codeFenced'),
      n.enter('codeFencedFence'),
      n.enter('codeFencedFenceSequence'),
      g(A)
    );
  }
  function g(A) {
    return A === p
      ? (d++, n.consume(A), g)
      : d < 3
        ? l(A)
        : (n.exit('codeFencedFenceSequence'), Me(A) ? Ve(n, w, 'whitespace')(A) : w(A));
  }
  function w(A) {
    return A === null || Ce(A)
      ? (n.exit('codeFencedFence'), s.interrupt ? i(A) : n.check(Rf, T, te)(A))
      : (n.enter('codeFencedFenceInfo'), n.enter('chunkString', { contentType: 'string' }), x(A));
  }
  function x(A) {
    return A === null || Ce(A)
      ? (n.exit('chunkString'), n.exit('codeFencedFenceInfo'), w(A))
      : Me(A)
        ? (n.exit('chunkString'), n.exit('codeFencedFenceInfo'), Ve(n, k, 'whitespace')(A))
        : A === 96 && A === p
          ? l(A)
          : (n.consume(A), x);
  }
  function k(A) {
    return A === null || Ce(A)
      ? w(A)
      : (n.enter('codeFencedFenceMeta'), n.enter('chunkString', { contentType: 'string' }), I(A));
  }
  function I(A) {
    return A === null || Ce(A)
      ? (n.exit('chunkString'), n.exit('codeFencedFenceMeta'), w(A))
      : A === 96 && A === p
        ? l(A)
        : (n.consume(A), I);
  }
  function T(A) {
    return n.attempt(u, te, O)(A);
  }
  function O(A) {
    return (n.enter('lineEnding'), n.consume(A), n.exit('lineEnding'), P);
  }
  function P(A) {
    return c > 0 && Me(A) ? Ve(n, F, 'linePrefix', c + 1)(A) : F(A);
  }
  function F(A) {
    return A === null || Ce(A) ? n.check(Rf, T, te)(A) : (n.enter('codeFlowValue'), M(A));
  }
  function M(A) {
    return A === null || Ce(A) ? (n.exit('codeFlowValue'), F(A)) : (n.consume(A), M);
  }
  function te(A) {
    return (n.exit('codeFenced'), i(A));
  }
  function ne(A, V, ue) {
    let ae = 0;
    return de;
    function de(q) {
      return (A.enter('lineEnding'), A.consume(q), A.exit('lineEnding'), Z);
    }
    function Z(q) {
      return (
        A.enter('codeFencedFence'),
        Me(q)
          ? Ve(
              A,
              W,
              'linePrefix',
              s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
            )(q)
          : W(q)
      );
    }
    function W(q) {
      return q === p ? (A.enter('codeFencedFenceSequence'), pe(q)) : ue(q);
    }
    function pe(q) {
      return q === p
        ? (ae++, A.consume(q), pe)
        : ae >= d
          ? (A.exit('codeFencedFenceSequence'), Me(q) ? Ve(A, H, 'whitespace')(q) : H(q))
          : ue(q);
    }
    function H(q) {
      return q === null || Ce(q) ? (A.exit('codeFencedFence'), V(q)) : ue(q);
    }
  }
}
function d1(n, i, l) {
  const s = this;
  return u;
  function u(d) {
    return d === null ? l(d) : (n.enter('lineEnding'), n.consume(d), n.exit('lineEnding'), c);
  }
  function c(d) {
    return s.parser.lazy[s.now().line] ? l(d) : i(d);
  }
}
const _a = { name: 'codeIndented', tokenize: p1 },
  f1 = { partial: !0, tokenize: h1 };
function p1(n, i, l) {
  const s = this;
  return u;
  function u(m) {
    return (n.enter('codeIndented'), Ve(n, c, 'linePrefix', 5)(m));
  }
  function c(m) {
    const g = s.events[s.events.length - 1];
    return g && g[1].type === 'linePrefix' && g[2].sliceSerialize(g[1], !0).length >= 4
      ? d(m)
      : l(m);
  }
  function d(m) {
    return m === null ? h(m) : Ce(m) ? n.attempt(f1, d, h)(m) : (n.enter('codeFlowValue'), p(m));
  }
  function p(m) {
    return m === null || Ce(m) ? (n.exit('codeFlowValue'), d(m)) : (n.consume(m), p);
  }
  function h(m) {
    return (n.exit('codeIndented'), i(m));
  }
}
function h1(n, i, l) {
  const s = this;
  return u;
  function u(d) {
    return s.parser.lazy[s.now().line]
      ? l(d)
      : Ce(d)
        ? (n.enter('lineEnding'), n.consume(d), n.exit('lineEnding'), u)
        : Ve(n, c, 'linePrefix', 5)(d);
  }
  function c(d) {
    const p = s.events[s.events.length - 1];
    return p && p[1].type === 'linePrefix' && p[2].sliceSerialize(p[1], !0).length >= 4
      ? i(d)
      : Ce(d)
        ? u(d)
        : l(d);
  }
}
const m1 = { name: 'codeText', previous: y1, resolve: g1, tokenize: v1 };
function g1(n) {
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
function y1(n) {
  return n !== 96 || this.events[this.events.length - 1][1].type === 'characterEscape';
}
function v1(n, i, l) {
  let s = 0,
    u,
    c;
  return d;
  function d(w) {
    return (n.enter('codeText'), n.enter('codeTextSequence'), p(w));
  }
  function p(w) {
    return w === 96 ? (n.consume(w), s++, p) : (n.exit('codeTextSequence'), h(w));
  }
  function h(w) {
    return w === null
      ? l(w)
      : w === 32
        ? (n.enter('space'), n.consume(w), n.exit('space'), h)
        : w === 96
          ? ((c = n.enter('codeTextSequence')), (u = 0), g(w))
          : Ce(w)
            ? (n.enter('lineEnding'), n.consume(w), n.exit('lineEnding'), h)
            : (n.enter('codeTextData'), m(w));
  }
  function m(w) {
    return w === null || w === 32 || w === 96 || Ce(w)
      ? (n.exit('codeTextData'), h(w))
      : (n.consume(w), m);
  }
  function g(w) {
    return w === 96
      ? (n.consume(w), u++, g)
      : u === s
        ? (n.exit('codeTextSequence'), n.exit('codeText'), i(w))
        : ((c.type = 'codeTextData'), m(w));
  }
}
class w1 {
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
    return (s && Ki(this.left, s), c.reverse());
  }
  pop() {
    return (this.setCursor(Number.POSITIVE_INFINITY), this.left.pop());
  }
  push(i) {
    (this.setCursor(Number.POSITIVE_INFINITY), this.left.push(i));
  }
  pushMany(i) {
    (this.setCursor(Number.POSITIVE_INFINITY), Ki(this.left, i));
  }
  unshift(i) {
    (this.setCursor(0), this.right.push(i));
  }
  unshiftMany(i) {
    (this.setCursor(0), Ki(this.right, i.reverse()));
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
        Ki(this.right, l.reverse());
      } else {
        const l = this.right.splice(
          this.left.length + this.right.length - i,
          Number.POSITIVE_INFINITY
        );
        Ki(this.left, l.reverse());
      }
  }
}
function Ki(n, i) {
  let l = 0;
  if (i.length < 1e4) n.push(...i);
  else for (; l < i.length; ) (n.push(...i.slice(l, l + 1e4)), (l += 1e4));
}
function Up(n) {
  const i = {};
  let l = -1,
    s,
    u,
    c,
    d,
    p,
    h,
    m;
  const g = new w1(n);
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
    if (s[0] === 'enter') s[1].contentType && (Object.assign(i, k1(g, l)), (l = i[l]), (m = !0));
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
  return (En(n, 0, Number.POSITIVE_INFINITY, g.slice(0)), !m);
}
function k1(n, i) {
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
    w,
    x = -1,
    k = l,
    I = 0,
    T = 0;
  const O = [T];
  for (; k; ) {
    for (; n.get(++u)[1] !== k; );
    (c.push(u),
      k._tokenizer ||
        ((g = s.sliceStream(k)),
        k.next || g.push(null),
        w && d.defineSkip(k.start),
        k._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = !0),
        d.write(g),
        k._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = void 0)),
      (w = k),
      (k = k.next));
  }
  for (k = l; ++x < p.length; )
    p[x][0] === 'exit' &&
      p[x - 1][0] === 'enter' &&
      p[x][1].type === p[x - 1][1].type &&
      p[x][1].start.line !== p[x][1].end.line &&
      ((T = x + 1), O.push(T), (k._tokenizer = void 0), (k.previous = void 0), (k = k.next));
  for (
    d.events = [], k ? ((k._tokenizer = void 0), (k.previous = void 0)) : O.pop(), x = O.length;
    x--;
  ) {
    const P = p.slice(O[x], O[x + 1]),
      F = c.pop();
    (h.push([F, F + P.length - 1]), n.splice(F, 2, P));
  }
  for (h.reverse(), x = -1; ++x < h.length; )
    ((m[I + h[x][0]] = I + h[x][1]), (I += h[x][1] - h[x][0] - 1));
  return m;
}
const x1 = { resolve: _1, tokenize: C1 },
  S1 = { partial: !0, tokenize: E1 };
function _1(n) {
  return (Up(n), n);
}
function C1(n, i) {
  let l;
  return s;
  function s(p) {
    return (n.enter('content'), (l = n.enter('chunkContent', { contentType: 'content' })), u(p));
  }
  function u(p) {
    return p === null ? c(p) : Ce(p) ? n.check(S1, d, c)(p) : (n.consume(p), u);
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
function E1(n, i, l) {
  const s = this;
  return u;
  function u(d) {
    return (
      n.exit('chunkContent'),
      n.enter('lineEnding'),
      n.consume(d),
      n.exit('lineEnding'),
      Ve(n, c, 'linePrefix')
    );
  }
  function c(d) {
    if (d === null || Ce(d)) return l(d);
    const p = s.events[s.events.length - 1];
    return !s.parser.constructs.disable.null.includes('codeIndented') &&
      p &&
      p[1].type === 'linePrefix' &&
      p[2].sliceSerialize(p[1], !0).length >= 4
      ? i(d)
      : n.interrupt(s.parser.constructs.flow, l, i)(d);
  }
}
function Vp(n, i, l, s, u, c, d, p, h) {
  const m = h || Number.POSITIVE_INFINITY;
  let g = 0;
  return w;
  function w(P) {
    return P === 60
      ? (n.enter(s), n.enter(u), n.enter(c), n.consume(P), n.exit(c), x)
      : P === null || P === 32 || P === 41 || qa(P)
        ? l(P)
        : (n.enter(s),
          n.enter(d),
          n.enter(p),
          n.enter('chunkString', { contentType: 'string' }),
          T(P));
  }
  function x(P) {
    return P === 62
      ? (n.enter(c), n.consume(P), n.exit(c), n.exit(u), n.exit(s), i)
      : (n.enter(p), n.enter('chunkString', { contentType: 'string' }), k(P));
  }
  function k(P) {
    return P === 62
      ? (n.exit('chunkString'), n.exit(p), x(P))
      : P === null || P === 60 || Ce(P)
        ? l(P)
        : (n.consume(P), P === 92 ? I : k);
  }
  function I(P) {
    return P === 60 || P === 62 || P === 92 ? (n.consume(P), k) : k(P);
  }
  function T(P) {
    return !g && (P === null || P === 41 || At(P))
      ? (n.exit('chunkString'), n.exit(p), n.exit(d), n.exit(s), i(P))
      : g < m && P === 40
        ? (n.consume(P), g++, T)
        : P === 41
          ? (n.consume(P), g--, T)
          : P === null || P === 32 || P === 40 || qa(P)
            ? l(P)
            : (n.consume(P), P === 92 ? O : T);
  }
  function O(P) {
    return P === 40 || P === 41 || P === 92 ? (n.consume(P), T) : T(P);
  }
}
function qp(n, i, l, s, u, c) {
  const d = this;
  let p = 0,
    h;
  return m;
  function m(k) {
    return (n.enter(s), n.enter(u), n.consume(k), n.exit(u), n.enter(c), g);
  }
  function g(k) {
    return p > 999 ||
      k === null ||
      k === 91 ||
      (k === 93 && !h) ||
      (k === 94 && !p && '_hiddenFootnoteSupport' in d.parser.constructs)
      ? l(k)
      : k === 93
        ? (n.exit(c), n.enter(u), n.consume(k), n.exit(u), n.exit(s), i)
        : Ce(k)
          ? (n.enter('lineEnding'), n.consume(k), n.exit('lineEnding'), g)
          : (n.enter('chunkString', { contentType: 'string' }), w(k));
  }
  function w(k) {
    return k === null || k === 91 || k === 93 || Ce(k) || p++ > 999
      ? (n.exit('chunkString'), g(k))
      : (n.consume(k), h || (h = !Me(k)), k === 92 ? x : w);
  }
  function x(k) {
    return k === 91 || k === 92 || k === 93 ? (n.consume(k), p++, w) : w(k);
  }
}
function Hp(n, i, l, s, u, c) {
  let d;
  return p;
  function p(x) {
    return x === 34 || x === 39 || x === 40
      ? (n.enter(s), n.enter(u), n.consume(x), n.exit(u), (d = x === 40 ? 41 : x), h)
      : l(x);
  }
  function h(x) {
    return x === d ? (n.enter(u), n.consume(x), n.exit(u), n.exit(s), i) : (n.enter(c), m(x));
  }
  function m(x) {
    return x === d
      ? (n.exit(c), h(d))
      : x === null
        ? l(x)
        : Ce(x)
          ? (n.enter('lineEnding'), n.consume(x), n.exit('lineEnding'), Ve(n, m, 'linePrefix'))
          : (n.enter('chunkString', { contentType: 'string' }), g(x));
  }
  function g(x) {
    return x === d || x === null || Ce(x)
      ? (n.exit('chunkString'), m(x))
      : (n.consume(x), x === 92 ? w : g);
  }
  function w(x) {
    return x === d || x === 92 ? (n.consume(x), g) : g(x);
  }
}
function Xi(n, i) {
  let l;
  return s;
  function s(u) {
    return Ce(u)
      ? (n.enter('lineEnding'), n.consume(u), n.exit('lineEnding'), (l = !0), s)
      : Me(u)
        ? Ve(n, s, l ? 'linePrefix' : 'lineSuffix')(u)
        : i(u);
  }
}
const b1 = { name: 'definition', tokenize: I1 },
  N1 = { partial: !0, tokenize: T1 };
function I1(n, i, l) {
  const s = this;
  let u;
  return c;
  function c(k) {
    return (n.enter('definition'), d(k));
  }
  function d(k) {
    return qp.call(
      s,
      n,
      p,
      l,
      'definitionLabel',
      'definitionLabelMarker',
      'definitionLabelString'
    )(k);
  }
  function p(k) {
    return (
      (u = ii(s.sliceSerialize(s.events[s.events.length - 1][1]).slice(1, -1))),
      k === 58 ? (n.enter('definitionMarker'), n.consume(k), n.exit('definitionMarker'), h) : l(k)
    );
  }
  function h(k) {
    return At(k) ? Xi(n, m)(k) : m(k);
  }
  function m(k) {
    return Vp(
      n,
      g,
      l,
      'definitionDestination',
      'definitionDestinationLiteral',
      'definitionDestinationLiteralMarker',
      'definitionDestinationRaw',
      'definitionDestinationString'
    )(k);
  }
  function g(k) {
    return n.attempt(N1, w, w)(k);
  }
  function w(k) {
    return Me(k) ? Ve(n, x, 'whitespace')(k) : x(k);
  }
  function x(k) {
    return k === null || Ce(k) ? (n.exit('definition'), s.parser.defined.push(u), i(k)) : l(k);
  }
}
function T1(n, i, l) {
  return s;
  function s(p) {
    return At(p) ? Xi(n, u)(p) : l(p);
  }
  function u(p) {
    return Hp(n, c, l, 'definitionTitle', 'definitionTitleMarker', 'definitionTitleString')(p);
  }
  function c(p) {
    return Me(p) ? Ve(n, d, 'whitespace')(p) : d(p);
  }
  function d(p) {
    return p === null || Ce(p) ? i(p) : l(p);
  }
}
const j1 = { name: 'hardBreakEscape', tokenize: L1 };
function L1(n, i, l) {
  return s;
  function s(c) {
    return (n.enter('hardBreakEscape'), n.consume(c), u);
  }
  function u(c) {
    return Ce(c) ? (n.exit('hardBreakEscape'), i(c)) : l(c);
  }
}
const P1 = { name: 'headingAtx', resolve: O1, tokenize: R1 };
function O1(n, i) {
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
      En(n, s, l - s + 1, [
        ['enter', u, i],
        ['enter', c, i],
        ['exit', c, i],
        ['exit', u, i],
      ])),
    n
  );
}
function R1(n, i, l) {
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
      : g === null || At(g)
        ? (n.exit('atxHeadingSequence'), p(g))
        : l(g);
  }
  function p(g) {
    return g === 35
      ? (n.enter('atxHeadingSequence'), h(g))
      : g === null || Ce(g)
        ? (n.exit('atxHeading'), i(g))
        : Me(g)
          ? Ve(n, p, 'whitespace')(g)
          : (n.enter('atxHeadingText'), m(g));
  }
  function h(g) {
    return g === 35 ? (n.consume(g), h) : (n.exit('atxHeadingSequence'), p(g));
  }
  function m(g) {
    return g === null || g === 35 || At(g) ? (n.exit('atxHeadingText'), p(g)) : (n.consume(g), m);
  }
}
const A1 = [
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
  Mf = ['pre', 'script', 'style', 'textarea'],
  M1 = { concrete: !0, name: 'htmlFlow', resolveTo: F1, tokenize: B1 },
  D1 = { partial: !0, tokenize: $1 },
  z1 = { partial: !0, tokenize: W1 };
function F1(n) {
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
function B1(n, i, l) {
  const s = this;
  let u, c, d, p, h;
  return m;
  function m(_) {
    return g(_);
  }
  function g(_) {
    return (n.enter('htmlFlow'), n.enter('htmlFlowData'), n.consume(_), w);
  }
  function w(_) {
    return _ === 33
      ? (n.consume(_), x)
      : _ === 47
        ? (n.consume(_), (c = !0), T)
        : _ === 63
          ? (n.consume(_), (u = 3), s.interrupt ? i : S)
          : Cn(_)
            ? (n.consume(_), (d = String.fromCharCode(_)), O)
            : l(_);
  }
  function x(_) {
    return _ === 45
      ? (n.consume(_), (u = 2), k)
      : _ === 91
        ? (n.consume(_), (u = 5), (p = 0), I)
        : Cn(_)
          ? (n.consume(_), (u = 4), s.interrupt ? i : S)
          : l(_);
  }
  function k(_) {
    return _ === 45 ? (n.consume(_), s.interrupt ? i : S) : l(_);
  }
  function I(_) {
    const ge = 'CDATA[';
    return _ === ge.charCodeAt(p++)
      ? (n.consume(_), p === ge.length ? (s.interrupt ? i : W) : I)
      : l(_);
  }
  function T(_) {
    return Cn(_) ? (n.consume(_), (d = String.fromCharCode(_)), O) : l(_);
  }
  function O(_) {
    if (_ === null || _ === 47 || _ === 62 || At(_)) {
      const ge = _ === 47,
        ke = d.toLowerCase();
      return !ge && !c && Mf.includes(ke)
        ? ((u = 1), s.interrupt ? i(_) : W(_))
        : A1.includes(d.toLowerCase())
          ? ((u = 6), ge ? (n.consume(_), P) : s.interrupt ? i(_) : W(_))
          : ((u = 7), s.interrupt && !s.parser.lazy[s.now().line] ? l(_) : c ? F(_) : M(_));
    }
    return _ === 45 || Kt(_) ? (n.consume(_), (d += String.fromCharCode(_)), O) : l(_);
  }
  function P(_) {
    return _ === 62 ? (n.consume(_), s.interrupt ? i : W) : l(_);
  }
  function F(_) {
    return Me(_) ? (n.consume(_), F) : de(_);
  }
  function M(_) {
    return _ === 47
      ? (n.consume(_), de)
      : _ === 58 || _ === 95 || Cn(_)
        ? (n.consume(_), te)
        : Me(_)
          ? (n.consume(_), M)
          : de(_);
  }
  function te(_) {
    return _ === 45 || _ === 46 || _ === 58 || _ === 95 || Kt(_) ? (n.consume(_), te) : ne(_);
  }
  function ne(_) {
    return _ === 61 ? (n.consume(_), A) : Me(_) ? (n.consume(_), ne) : M(_);
  }
  function A(_) {
    return _ === null || _ === 60 || _ === 61 || _ === 62 || _ === 96
      ? l(_)
      : _ === 34 || _ === 39
        ? (n.consume(_), (h = _), V)
        : Me(_)
          ? (n.consume(_), A)
          : ue(_);
  }
  function V(_) {
    return _ === h
      ? (n.consume(_), (h = null), ae)
      : _ === null || Ce(_)
        ? l(_)
        : (n.consume(_), V);
  }
  function ue(_) {
    return _ === null ||
      _ === 34 ||
      _ === 39 ||
      _ === 47 ||
      _ === 60 ||
      _ === 61 ||
      _ === 62 ||
      _ === 96 ||
      At(_)
      ? ne(_)
      : (n.consume(_), ue);
  }
  function ae(_) {
    return _ === 47 || _ === 62 || Me(_) ? M(_) : l(_);
  }
  function de(_) {
    return _ === 62 ? (n.consume(_), Z) : l(_);
  }
  function Z(_) {
    return _ === null || Ce(_) ? W(_) : Me(_) ? (n.consume(_), Z) : l(_);
  }
  function W(_) {
    return _ === 45 && u === 2
      ? (n.consume(_), me)
      : _ === 60 && u === 1
        ? (n.consume(_), fe)
        : _ === 62 && u === 4
          ? (n.consume(_), N)
          : _ === 63 && u === 3
            ? (n.consume(_), S)
            : _ === 93 && u === 5
              ? (n.consume(_), ie)
              : Ce(_) && (u === 6 || u === 7)
                ? (n.exit('htmlFlowData'), n.check(D1, B, pe)(_))
                : _ === null || Ce(_)
                  ? (n.exit('htmlFlowData'), pe(_))
                  : (n.consume(_), W);
  }
  function pe(_) {
    return n.check(z1, H, B)(_);
  }
  function H(_) {
    return (n.enter('lineEnding'), n.consume(_), n.exit('lineEnding'), q);
  }
  function q(_) {
    return _ === null || Ce(_) ? pe(_) : (n.enter('htmlFlowData'), W(_));
  }
  function me(_) {
    return _ === 45 ? (n.consume(_), S) : W(_);
  }
  function fe(_) {
    return _ === 47 ? (n.consume(_), (d = ''), G) : W(_);
  }
  function G(_) {
    if (_ === 62) {
      const ge = d.toLowerCase();
      return Mf.includes(ge) ? (n.consume(_), N) : W(_);
    }
    return Cn(_) && d.length < 8 ? (n.consume(_), (d += String.fromCharCode(_)), G) : W(_);
  }
  function ie(_) {
    return _ === 93 ? (n.consume(_), S) : W(_);
  }
  function S(_) {
    return _ === 62 ? (n.consume(_), N) : _ === 45 && u === 2 ? (n.consume(_), S) : W(_);
  }
  function N(_) {
    return _ === null || Ce(_) ? (n.exit('htmlFlowData'), B(_)) : (n.consume(_), N);
  }
  function B(_) {
    return (n.exit('htmlFlow'), i(_));
  }
}
function W1(n, i, l) {
  const s = this;
  return u;
  function u(d) {
    return Ce(d) ? (n.enter('lineEnding'), n.consume(d), n.exit('lineEnding'), c) : l(d);
  }
  function c(d) {
    return s.parser.lazy[s.now().line] ? l(d) : i(d);
  }
}
function $1(n, i, l) {
  return s;
  function s(u) {
    return (n.enter('lineEnding'), n.consume(u), n.exit('lineEnding'), n.attempt(_o, i, l));
  }
}
const U1 = { name: 'htmlText', tokenize: V1 };
function V1(n, i, l) {
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
        ? (n.consume(S), ne)
        : S === 63
          ? (n.consume(S), M)
          : Cn(S)
            ? (n.consume(S), ue)
            : l(S);
  }
  function m(S) {
    return S === 45
      ? (n.consume(S), g)
      : S === 91
        ? (n.consume(S), (c = 0), I)
        : Cn(S)
          ? (n.consume(S), F)
          : l(S);
  }
  function g(S) {
    return S === 45 ? (n.consume(S), k) : l(S);
  }
  function w(S) {
    return S === null
      ? l(S)
      : S === 45
        ? (n.consume(S), x)
        : Ce(S)
          ? ((d = w), fe(S))
          : (n.consume(S), w);
  }
  function x(S) {
    return S === 45 ? (n.consume(S), k) : w(S);
  }
  function k(S) {
    return S === 62 ? me(S) : S === 45 ? x(S) : w(S);
  }
  function I(S) {
    const N = 'CDATA[';
    return S === N.charCodeAt(c++) ? (n.consume(S), c === N.length ? T : I) : l(S);
  }
  function T(S) {
    return S === null
      ? l(S)
      : S === 93
        ? (n.consume(S), O)
        : Ce(S)
          ? ((d = T), fe(S))
          : (n.consume(S), T);
  }
  function O(S) {
    return S === 93 ? (n.consume(S), P) : T(S);
  }
  function P(S) {
    return S === 62 ? me(S) : S === 93 ? (n.consume(S), P) : T(S);
  }
  function F(S) {
    return S === null || S === 62 ? me(S) : Ce(S) ? ((d = F), fe(S)) : (n.consume(S), F);
  }
  function M(S) {
    return S === null
      ? l(S)
      : S === 63
        ? (n.consume(S), te)
        : Ce(S)
          ? ((d = M), fe(S))
          : (n.consume(S), M);
  }
  function te(S) {
    return S === 62 ? me(S) : M(S);
  }
  function ne(S) {
    return Cn(S) ? (n.consume(S), A) : l(S);
  }
  function A(S) {
    return S === 45 || Kt(S) ? (n.consume(S), A) : V(S);
  }
  function V(S) {
    return Ce(S) ? ((d = V), fe(S)) : Me(S) ? (n.consume(S), V) : me(S);
  }
  function ue(S) {
    return S === 45 || Kt(S) ? (n.consume(S), ue) : S === 47 || S === 62 || At(S) ? ae(S) : l(S);
  }
  function ae(S) {
    return S === 47
      ? (n.consume(S), me)
      : S === 58 || S === 95 || Cn(S)
        ? (n.consume(S), de)
        : Ce(S)
          ? ((d = ae), fe(S))
          : Me(S)
            ? (n.consume(S), ae)
            : me(S);
  }
  function de(S) {
    return S === 45 || S === 46 || S === 58 || S === 95 || Kt(S) ? (n.consume(S), de) : Z(S);
  }
  function Z(S) {
    return S === 61
      ? (n.consume(S), W)
      : Ce(S)
        ? ((d = Z), fe(S))
        : Me(S)
          ? (n.consume(S), Z)
          : ae(S);
  }
  function W(S) {
    return S === null || S === 60 || S === 61 || S === 62 || S === 96
      ? l(S)
      : S === 34 || S === 39
        ? (n.consume(S), (u = S), pe)
        : Ce(S)
          ? ((d = W), fe(S))
          : Me(S)
            ? (n.consume(S), W)
            : (n.consume(S), H);
  }
  function pe(S) {
    return S === u
      ? (n.consume(S), (u = void 0), q)
      : S === null
        ? l(S)
        : Ce(S)
          ? ((d = pe), fe(S))
          : (n.consume(S), pe);
  }
  function H(S) {
    return S === null || S === 34 || S === 39 || S === 60 || S === 61 || S === 96
      ? l(S)
      : S === 47 || S === 62 || At(S)
        ? ae(S)
        : (n.consume(S), H);
  }
  function q(S) {
    return S === 47 || S === 62 || At(S) ? ae(S) : l(S);
  }
  function me(S) {
    return S === 62 ? (n.consume(S), n.exit('htmlTextData'), n.exit('htmlText'), i) : l(S);
  }
  function fe(S) {
    return (n.exit('htmlTextData'), n.enter('lineEnding'), n.consume(S), n.exit('lineEnding'), G);
  }
  function G(S) {
    return Me(S)
      ? Ve(
          n,
          ie,
          'linePrefix',
          s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
        )(S)
      : ie(S);
  }
  function ie(S) {
    return (n.enter('htmlTextData'), d(S));
  }
}
const hu = { name: 'labelEnd', resolveAll: K1, resolveTo: G1, tokenize: Y1 },
  q1 = { tokenize: X1 },
  H1 = { tokenize: J1 },
  Q1 = { tokenize: Z1 };
function K1(n) {
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
  return (n.length !== l.length && En(n, 0, n.length, l), n);
}
function G1(n, i) {
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
    (p = ln(p, n.slice(c + 1, c + s + 3))),
    (p = ln(p, [['enter', g, i]])),
    (p = ln(p, pu(i.parser.constructs.insideSpan.null, n.slice(c + s + 4, d - 3), i))),
    (p = ln(p, [['exit', g, i], n[d - 2], n[d - 1], ['exit', m, i]])),
    (p = ln(p, n.slice(d + 1))),
    (p = ln(p, [['exit', h, i]])),
    En(n, c, n.length, p),
    n
  );
}
function Y1(n, i, l) {
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
  function p(x) {
    return c
      ? c._inactive
        ? w(x)
        : ((d = s.parser.defined.includes(ii(s.sliceSerialize({ start: c.end, end: s.now() })))),
          n.enter('labelEnd'),
          n.enter('labelMarker'),
          n.consume(x),
          n.exit('labelMarker'),
          n.exit('labelEnd'),
          h)
      : l(x);
  }
  function h(x) {
    return x === 40
      ? n.attempt(q1, g, d ? g : w)(x)
      : x === 91
        ? n.attempt(H1, g, d ? m : w)(x)
        : d
          ? g(x)
          : w(x);
  }
  function m(x) {
    return n.attempt(Q1, g, w)(x);
  }
  function g(x) {
    return i(x);
  }
  function w(x) {
    return ((c._balanced = !0), l(x));
  }
}
function X1(n, i, l) {
  return s;
  function s(w) {
    return (
      n.enter('resource'),
      n.enter('resourceMarker'),
      n.consume(w),
      n.exit('resourceMarker'),
      u
    );
  }
  function u(w) {
    return At(w) ? Xi(n, c)(w) : c(w);
  }
  function c(w) {
    return w === 41
      ? g(w)
      : Vp(
          n,
          d,
          p,
          'resourceDestination',
          'resourceDestinationLiteral',
          'resourceDestinationLiteralMarker',
          'resourceDestinationRaw',
          'resourceDestinationString',
          32
        )(w);
  }
  function d(w) {
    return At(w) ? Xi(n, h)(w) : g(w);
  }
  function p(w) {
    return l(w);
  }
  function h(w) {
    return w === 34 || w === 39 || w === 40
      ? Hp(n, m, l, 'resourceTitle', 'resourceTitleMarker', 'resourceTitleString')(w)
      : g(w);
  }
  function m(w) {
    return At(w) ? Xi(n, g)(w) : g(w);
  }
  function g(w) {
    return w === 41
      ? (n.enter('resourceMarker'), n.consume(w), n.exit('resourceMarker'), n.exit('resource'), i)
      : l(w);
  }
}
function J1(n, i, l) {
  const s = this;
  return u;
  function u(p) {
    return qp.call(s, n, c, d, 'reference', 'referenceMarker', 'referenceString')(p);
  }
  function c(p) {
    return s.parser.defined.includes(
      ii(s.sliceSerialize(s.events[s.events.length - 1][1]).slice(1, -1))
    )
      ? i(p)
      : l(p);
  }
  function d(p) {
    return l(p);
  }
}
function Z1(n, i, l) {
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
const e0 = { name: 'labelStartImage', resolveAll: hu.resolveAll, tokenize: t0 };
function t0(n, i, l) {
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
const n0 = { name: 'labelStartLink', resolveAll: hu.resolveAll, tokenize: r0 };
function r0(n, i, l) {
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
const Ca = { name: 'lineEnding', tokenize: i0 };
function i0(n, i) {
  return l;
  function l(s) {
    return (n.enter('lineEnding'), n.consume(s), n.exit('lineEnding'), Ve(n, i, 'linePrefix'));
  }
}
const vo = { name: 'thematicBreak', tokenize: l0 };
function l0(n, i, l) {
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
      : s >= 3 && (m === null || Ce(m))
        ? (n.exit('thematicBreak'), i(m))
        : l(m);
  }
  function h(m) {
    return m === u
      ? (n.consume(m), s++, h)
      : (n.exit('thematicBreakSequence'), Me(m) ? Ve(n, p, 'whitespace')(m) : p(m));
  }
}
const Rt = { continuation: { tokenize: u0 }, exit: d0, name: 'list', tokenize: a0 },
  o0 = { partial: !0, tokenize: f0 },
  s0 = { partial: !0, tokenize: c0 };
function a0(n, i, l) {
  const s = this,
    u = s.events[s.events.length - 1];
  let c = u && u[1].type === 'linePrefix' ? u[2].sliceSerialize(u[1], !0).length : 0,
    d = 0;
  return p;
  function p(k) {
    const I =
      s.containerState.type || (k === 42 || k === 43 || k === 45 ? 'listUnordered' : 'listOrdered');
    if (I === 'listUnordered' ? !s.containerState.marker || k === s.containerState.marker : Ha(k)) {
      if (
        (s.containerState.type || ((s.containerState.type = I), n.enter(I, { _container: !0 })),
        I === 'listUnordered')
      )
        return (n.enter('listItemPrefix'), k === 42 || k === 45 ? n.check(vo, l, m)(k) : m(k));
      if (!s.interrupt || k === 49)
        return (n.enter('listItemPrefix'), n.enter('listItemValue'), h(k));
    }
    return l(k);
  }
  function h(k) {
    return Ha(k) && ++d < 10
      ? (n.consume(k), h)
      : (!s.interrupt || d < 2) &&
          (s.containerState.marker ? k === s.containerState.marker : k === 41 || k === 46)
        ? (n.exit('listItemValue'), m(k))
        : l(k);
  }
  function m(k) {
    return (
      n.enter('listItemMarker'),
      n.consume(k),
      n.exit('listItemMarker'),
      (s.containerState.marker = s.containerState.marker || k),
      n.check(_o, s.interrupt ? l : g, n.attempt(o0, x, w))
    );
  }
  function g(k) {
    return ((s.containerState.initialBlankLine = !0), c++, x(k));
  }
  function w(k) {
    return Me(k)
      ? (n.enter('listItemPrefixWhitespace'), n.consume(k), n.exit('listItemPrefixWhitespace'), x)
      : l(k);
  }
  function x(k) {
    return (
      (s.containerState.size = c + s.sliceSerialize(n.exit('listItemPrefix'), !0).length),
      i(k)
    );
  }
}
function u0(n, i, l) {
  const s = this;
  return ((s.containerState._closeFlow = void 0), n.check(_o, u, c));
  function u(p) {
    return (
      (s.containerState.furtherBlankLines =
        s.containerState.furtherBlankLines || s.containerState.initialBlankLine),
      Ve(n, i, 'listItemIndent', s.containerState.size + 1)(p)
    );
  }
  function c(p) {
    return s.containerState.furtherBlankLines || !Me(p)
      ? ((s.containerState.furtherBlankLines = void 0),
        (s.containerState.initialBlankLine = void 0),
        d(p))
      : ((s.containerState.furtherBlankLines = void 0),
        (s.containerState.initialBlankLine = void 0),
        n.attempt(s0, i, d)(p));
  }
  function d(p) {
    return (
      (s.containerState._closeFlow = !0),
      (s.interrupt = void 0),
      Ve(
        n,
        n.attempt(Rt, i, l),
        'linePrefix',
        s.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
      )(p)
    );
  }
}
function c0(n, i, l) {
  const s = this;
  return Ve(n, u, 'listItemIndent', s.containerState.size + 1);
  function u(c) {
    const d = s.events[s.events.length - 1];
    return d &&
      d[1].type === 'listItemIndent' &&
      d[2].sliceSerialize(d[1], !0).length === s.containerState.size
      ? i(c)
      : l(c);
  }
}
function d0(n) {
  n.exit(this.containerState.type);
}
function f0(n, i, l) {
  const s = this;
  return Ve(
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
const Df = { name: 'setextUnderline', resolveTo: p0, tokenize: h0 };
function p0(n, i) {
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
function h0(n, i, l) {
  const s = this;
  let u;
  return c;
  function c(m) {
    let g = s.events.length,
      w;
    for (; g--; )
      if (
        s.events[g][1].type !== 'lineEnding' &&
        s.events[g][1].type !== 'linePrefix' &&
        s.events[g][1].type !== 'content'
      ) {
        w = s.events[g][1].type === 'paragraph';
        break;
      }
    return !s.parser.lazy[s.now().line] && (s.interrupt || w)
      ? (n.enter('setextHeadingLine'), (u = m), d(m))
      : l(m);
  }
  function d(m) {
    return (n.enter('setextHeadingLineSequence'), p(m));
  }
  function p(m) {
    return m === u
      ? (n.consume(m), p)
      : (n.exit('setextHeadingLineSequence'), Me(m) ? Ve(n, h, 'lineSuffix')(m) : h(m));
  }
  function h(m) {
    return m === null || Ce(m) ? (n.exit('setextHeadingLine'), i(m)) : l(m);
  }
}
const m0 = { tokenize: g0 };
function g0(n) {
  const i = this,
    l = n.attempt(
      _o,
      s,
      n.attempt(
        this.parser.constructs.flowInitial,
        u,
        Ve(n, n.attempt(this.parser.constructs.flow, u, n.attempt(x1, u)), 'linePrefix')
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
const y0 = { resolveAll: Kp() },
  v0 = Qp('string'),
  w0 = Qp('text');
function Qp(n) {
  return { resolveAll: Kp(n === 'text' ? k0 : void 0), tokenize: i };
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
      const w = u[g];
      let x = -1;
      if (w)
        for (; ++x < w.length; ) {
          const k = w[x];
          if (!k.previous || k.previous.call(s, s.previous)) return !0;
        }
      return !1;
    }
  }
}
function Kp(n) {
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
function k0(n, i) {
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
const x0 = {
    42: Rt,
    43: Rt,
    45: Rt,
    48: Rt,
    49: Rt,
    50: Rt,
    51: Rt,
    52: Rt,
    53: Rt,
    54: Rt,
    55: Rt,
    56: Rt,
    57: Rt,
    62: Bp,
  },
  S0 = { 91: b1 },
  _0 = { [-2]: _a, [-1]: _a, 32: _a },
  C0 = { 35: P1, 42: vo, 45: [Df, vo], 60: M1, 61: Df, 95: vo, 96: Af, 126: Af },
  E0 = { 38: $p, 92: Wp },
  b0 = {
    [-5]: Ca,
    [-4]: Ca,
    [-3]: Ca,
    33: e0,
    38: $p,
    42: Qa,
    60: [n1, U1],
    91: n0,
    92: [j1, Wp],
    93: hu,
    95: Qa,
    96: m1,
  },
  N0 = { null: [Qa, y0] },
  I0 = { null: [42, 95] },
  T0 = { null: [] },
  j0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: I0,
        contentInitial: S0,
        disable: T0,
        document: x0,
        flow: C0,
        flowInitial: _0,
        insideSpan: N0,
        string: E0,
        text: b0,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
function L0(n, i, l) {
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
      attempt: V(ne),
      check: V(A),
      consume: F,
      enter: M,
      exit: te,
      interrupt: V(A, { interrupt: !0 }),
    },
    m = {
      code: null,
      containerState: {},
      defineSkip: T,
      events: [],
      now: I,
      parser: n,
      previous: null,
      sliceSerialize: x,
      sliceStream: k,
      write: w,
    };
  let g = i.tokenize.call(m, h);
  return (i.resolveAll && c.push(i), m);
  function w(Z) {
    return (
      (d = ln(d, Z)),
      O(),
      d[d.length - 1] !== null ? [] : (ue(i, 0), (m.events = pu(c, m.events, m)), m.events)
    );
  }
  function x(Z, W) {
    return O0(k(Z), W);
  }
  function k(Z) {
    return P0(d, Z);
  }
  function I() {
    const { _bufferIndex: Z, _index: W, line: pe, column: H, offset: q } = s;
    return { _bufferIndex: Z, _index: W, line: pe, column: H, offset: q };
  }
  function T(Z) {
    ((u[Z.line] = Z.column), de());
  }
  function O() {
    let Z;
    for (; s._index < d.length; ) {
      const W = d[s._index];
      if (typeof W == 'string')
        for (
          Z = s._index, s._bufferIndex < 0 && (s._bufferIndex = 0);
          s._index === Z && s._bufferIndex < W.length;
        )
          P(W.charCodeAt(s._bufferIndex));
      else P(W);
    }
  }
  function P(Z) {
    g = g(Z);
  }
  function F(Z) {
    (Ce(Z)
      ? (s.line++, (s.column = 1), (s.offset += Z === -3 ? 2 : 1), de())
      : Z !== -1 && (s.column++, s.offset++),
      s._bufferIndex < 0
        ? s._index++
        : (s._bufferIndex++,
          s._bufferIndex === d[s._index].length && ((s._bufferIndex = -1), s._index++)),
      (m.previous = Z));
  }
  function M(Z, W) {
    const pe = W || {};
    return ((pe.type = Z), (pe.start = I()), m.events.push(['enter', pe, m]), p.push(pe), pe);
  }
  function te(Z) {
    const W = p.pop();
    return ((W.end = I()), m.events.push(['exit', W, m]), W);
  }
  function ne(Z, W) {
    ue(Z, W.from);
  }
  function A(Z, W) {
    W.restore();
  }
  function V(Z, W) {
    return pe;
    function pe(H, q, me) {
      let fe, G, ie, S;
      return Array.isArray(H) ? B(H) : 'tokenize' in H ? B([H]) : N(H);
      function N(ye) {
        return Ee;
        function Ee(be) {
          const Ne = be !== null && ye[be],
            qe = be !== null && ye.null,
            _t = [
              ...(Array.isArray(Ne) ? Ne : Ne ? [Ne] : []),
              ...(Array.isArray(qe) ? qe : qe ? [qe] : []),
            ];
          return B(_t)(be);
        }
      }
      function B(ye) {
        return ((fe = ye), (G = 0), ye.length === 0 ? me : _(ye[G]));
      }
      function _(ye) {
        return Ee;
        function Ee(be) {
          return (
            (S = ae()),
            (ie = ye),
            ye.partial || (m.currentConstruct = ye),
            ye.name && m.parser.constructs.disable.null.includes(ye.name)
              ? ke()
              : ye.tokenize.call(W ? Object.assign(Object.create(m), W) : m, h, ge, ke)(be)
          );
        }
      }
      function ge(ye) {
        return (Z(ie, S), q);
      }
      function ke(ye) {
        return (S.restore(), ++G < fe.length ? _(fe[G]) : me);
      }
    }
  }
  function ue(Z, W) {
    (Z.resolveAll && !c.includes(Z) && c.push(Z),
      Z.resolve && En(m.events, W, m.events.length - W, Z.resolve(m.events.slice(W), m)),
      Z.resolveTo && (m.events = Z.resolveTo(m.events, m)));
  }
  function ae() {
    const Z = I(),
      W = m.previous,
      pe = m.currentConstruct,
      H = m.events.length,
      q = Array.from(p);
    return { from: H, restore: me };
    function me() {
      ((s = Z), (m.previous = W), (m.currentConstruct = pe), (m.events.length = H), (p = q), de());
    }
  }
  function de() {
    s.line in u && s.column < 2 && ((s.column = u[s.line]), (s.offset += u[s.line] - 1));
  }
}
function P0(n, i) {
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
function O0(n, i) {
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
function R0(n) {
  const s = {
    constructs: Wv([j0, ...((n || {}).extensions || [])]),
    content: u(Gv),
    defined: [],
    document: u(Xv),
    flow: u(m0),
    lazy: {},
    string: u(v0),
    text: u(w0),
  };
  return s;
  function u(c) {
    return d;
    function d(p) {
      return L0(s, c, p);
    }
  }
}
function A0(n) {
  for (; !Up(n); );
  return n;
}
const zf = /[\0\t\n\r]/g;
function M0() {
  let n = 1,
    i = '',
    l = !0,
    s;
  return u;
  function u(c, d, p) {
    const h = [];
    let m, g, w, x, k;
    for (
      c = i + (typeof c == 'string' ? c.toString() : new TextDecoder(d || void 0).decode(c)),
        w = 0,
        i = '',
        l && (c.charCodeAt(0) === 65279 && w++, (l = void 0));
      w < c.length;
    ) {
      if (
        ((zf.lastIndex = w),
        (m = zf.exec(c)),
        (x = m && m.index !== void 0 ? m.index : c.length),
        (k = c.charCodeAt(x)),
        !m)
      ) {
        i = c.slice(w);
        break;
      }
      if (k === 10 && w === x && s) (h.push(-3), (s = void 0));
      else
        switch (
          (s && (h.push(-5), (s = void 0)), w < x && (h.push(c.slice(w, x)), (n += x - w)), k)
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
      w = x + 1;
    }
    return (p && (s && h.push(-5), i && h.push(i), h.push(null)), h);
  }
}
const D0 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function z0(n) {
  return n.replace(D0, F0);
}
function F0(n, i, l) {
  if (i) return i;
  if (l.charCodeAt(0) === 35) {
    const u = l.charCodeAt(1),
      c = u === 120 || u === 88;
    return Fp(l.slice(c ? 2 : 1), c ? 16 : 10);
  }
  return fu(l) || n;
}
const Gp = {}.hasOwnProperty;
function B0(n, i, l) {
  return (
    typeof i != 'string' && ((l = i), (i = void 0)),
    W0(l)(
      A0(
        R0(l)
          .document()
          .write(M0()(n, i, !0))
      )
    )
  );
}
function W0(n) {
  const i = {
    transforms: [],
    canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
    enter: {
      autolink: c(Gt),
      autolinkProtocol: ae,
      autolinkEmail: ae,
      atxHeading: c(mn),
      blockQuote: c(qe),
      characterEscape: ae,
      characterReference: ae,
      codeFenced: c(_t),
      codeFencedFenceInfo: d,
      codeFencedFenceMeta: d,
      codeIndented: c(_t, d),
      codeText: c(Wn, d),
      codeTextData: ae,
      data: ae,
      codeFlowValue: ae,
      definition: c(on),
      definitionDestinationString: d,
      definitionLabelString: d,
      definitionTitleString: d,
      emphasis: c(He),
      hardBreakEscape: c(bt),
      hardBreakTrailing: c(bt),
      htmlFlow: c(Dt, d),
      htmlFlowData: ae,
      htmlText: c(Dt, d),
      htmlTextData: ae,
      image: c(gn),
      label: d,
      link: c(Gt),
      listItem: c(D),
      listItemValue: x,
      listOrdered: c(zt, w),
      listUnordered: c(zt),
      paragraph: c(ee),
      reference: _,
      referenceString: d,
      resourceDestinationString: d,
      resourceTitleString: d,
      setextHeading: c(mn),
      strong: c(Ae),
      thematicBreak: c(Yt),
    },
    exit: {
      atxHeading: h(),
      atxHeadingSequence: ne,
      autolink: h(),
      autolinkEmail: Ne,
      autolinkProtocol: be,
      blockQuote: h(),
      characterEscapeValue: de,
      characterReferenceMarkerHexadecimal: ke,
      characterReferenceMarkerNumeric: ke,
      characterReferenceValue: ye,
      characterReference: Ee,
      codeFenced: h(O),
      codeFencedFence: T,
      codeFencedFenceInfo: k,
      codeFencedFenceMeta: I,
      codeFlowValue: de,
      codeIndented: h(P),
      codeText: h(q),
      codeTextData: de,
      data: de,
      definition: h(),
      definitionDestinationString: te,
      definitionLabelString: F,
      definitionTitleString: M,
      emphasis: h(),
      hardBreakEscape: h(W),
      hardBreakTrailing: h(W),
      htmlFlow: h(pe),
      htmlFlowData: de,
      htmlText: h(H),
      htmlTextData: de,
      image: h(fe),
      label: ie,
      labelText: G,
      lineEnding: Z,
      link: h(me),
      listItem: h(),
      listOrdered: h(),
      listUnordered: h(),
      paragraph: h(),
      referenceString: ge,
      resourceDestinationString: S,
      resourceTitleString: N,
      resource: B,
      setextHeading: h(ue),
      setextHeadingLineSequence: V,
      setextHeadingText: A,
      strong: h(),
      thematicBreak: h(),
    },
  };
  Yp(i, (n || {}).mdastExtensions || []);
  const l = {};
  return s;
  function s(z) {
    let J = { type: 'root', children: [] };
    const xe = {
        stack: [J],
        tokenStack: [],
        config: i,
        enter: p,
        exit: m,
        buffer: d,
        resume: g,
        data: l,
      },
      Te = [];
    let Pe = -1;
    for (; ++Pe < z.length; )
      if (z[Pe][1].type === 'listOrdered' || z[Pe][1].type === 'listUnordered')
        if (z[Pe][0] === 'enter') Te.push(Pe);
        else {
          const pt = Te.pop();
          Pe = u(z, pt, Pe);
        }
    for (Pe = -1; ++Pe < z.length; ) {
      const pt = i[z[Pe][0]];
      Gp.call(pt, z[Pe][1].type) &&
        pt[z[Pe][1].type].call(
          Object.assign({ sliceSerialize: z[Pe][2].sliceSerialize }, xe),
          z[Pe][1]
        );
    }
    if (xe.tokenStack.length > 0) {
      const pt = xe.tokenStack[xe.tokenStack.length - 1];
      (pt[1] || Ff).call(xe, void 0, pt[0]);
    }
    for (
      J.position = {
        start: ar(z.length > 0 ? z[0][1].start : { line: 1, column: 1, offset: 0 }),
        end: ar(z.length > 0 ? z[z.length - 2][1].end : { line: 1, column: 1, offset: 0 }),
      },
        Pe = -1;
      ++Pe < i.transforms.length;
    )
      J = i.transforms[Pe](J) || J;
    return J;
  }
  function u(z, J, xe) {
    let Te = J - 1,
      Pe = -1,
      pt = !1,
      bn,
      Xt,
      $n,
      dr;
    for (; ++Te <= xe; ) {
      const ht = z[Te];
      switch (ht[1].type) {
        case 'listUnordered':
        case 'listOrdered':
        case 'blockQuote': {
          (ht[0] === 'enter' ? Pe++ : Pe--, (dr = void 0));
          break;
        }
        case 'lineEndingBlank': {
          ht[0] === 'enter' && (bn && !dr && !Pe && !$n && ($n = Te), (dr = void 0));
          break;
        }
        case 'linePrefix':
        case 'listItemValue':
        case 'listItemMarker':
        case 'listItemPrefix':
        case 'listItemPrefixWhitespace':
          break;
        default:
          dr = void 0;
      }
      if (
        (!Pe && ht[0] === 'enter' && ht[1].type === 'listItemPrefix') ||
        (Pe === -1 &&
          ht[0] === 'exit' &&
          (ht[1].type === 'listUnordered' || ht[1].type === 'listOrdered'))
      ) {
        if (bn) {
          let yn = Te;
          for (Xt = void 0; yn--; ) {
            const Ft = z[yn];
            if (Ft[1].type === 'lineEnding' || Ft[1].type === 'lineEndingBlank') {
              if (Ft[0] === 'exit') continue;
              (Xt && ((z[Xt][1].type = 'lineEndingBlank'), (pt = !0)),
                (Ft[1].type = 'lineEnding'),
                (Xt = yn));
            } else if (
              !(
                Ft[1].type === 'linePrefix' ||
                Ft[1].type === 'blockQuotePrefix' ||
                Ft[1].type === 'blockQuotePrefixWhitespace' ||
                Ft[1].type === 'blockQuoteMarker' ||
                Ft[1].type === 'listItemIndent'
              )
            )
              break;
          }
          ($n && (!Xt || $n < Xt) && (bn._spread = !0),
            (bn.end = Object.assign({}, Xt ? z[Xt][1].start : ht[1].end)),
            z.splice(Xt || Te, 0, ['exit', bn, ht[2]]),
            Te++,
            xe++);
        }
        if (ht[1].type === 'listItemPrefix') {
          const yn = {
            type: 'listItem',
            _spread: !1,
            start: Object.assign({}, ht[1].start),
            end: void 0,
          };
          ((bn = yn), z.splice(Te, 0, ['enter', yn, ht[2]]), Te++, xe++, ($n = void 0), (dr = !0));
        }
      }
    }
    return ((z[J][1]._spread = pt), xe);
  }
  function c(z, J) {
    return xe;
    function xe(Te) {
      (p.call(this, z(Te), Te), J && J.call(this, Te));
    }
  }
  function d() {
    this.stack.push({ type: 'fragment', children: [] });
  }
  function p(z, J, xe) {
    (this.stack[this.stack.length - 1].children.push(z),
      this.stack.push(z),
      this.tokenStack.push([J, xe || void 0]),
      (z.position = { start: ar(J.start), end: void 0 }));
  }
  function h(z) {
    return J;
    function J(xe) {
      (z && z.call(this, xe), m.call(this, xe));
    }
  }
  function m(z, J) {
    const xe = this.stack.pop(),
      Te = this.tokenStack.pop();
    if (Te)
      Te[0].type !== z.type && (J ? J.call(this, z, Te[0]) : (Te[1] || Ff).call(this, z, Te[0]));
    else
      throw new Error(
        'Cannot close `' + z.type + '` (' + Yi({ start: z.start, end: z.end }) + '): it’s not open'
      );
    xe.position.end = ar(z.end);
  }
  function g() {
    return Fv(this.stack.pop());
  }
  function w() {
    this.data.expectingFirstListItemValue = !0;
  }
  function x(z) {
    if (this.data.expectingFirstListItemValue) {
      const J = this.stack[this.stack.length - 2];
      ((J.start = Number.parseInt(this.sliceSerialize(z), 10)),
        (this.data.expectingFirstListItemValue = void 0));
    }
  }
  function k() {
    const z = this.resume(),
      J = this.stack[this.stack.length - 1];
    J.lang = z;
  }
  function I() {
    const z = this.resume(),
      J = this.stack[this.stack.length - 1];
    J.meta = z;
  }
  function T() {
    this.data.flowCodeInside || (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function O() {
    const z = this.resume(),
      J = this.stack[this.stack.length - 1];
    ((J.value = z.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '')), (this.data.flowCodeInside = void 0));
  }
  function P() {
    const z = this.resume(),
      J = this.stack[this.stack.length - 1];
    J.value = z.replace(/(\r?\n|\r)$/g, '');
  }
  function F(z) {
    const J = this.resume(),
      xe = this.stack[this.stack.length - 1];
    ((xe.label = J), (xe.identifier = ii(this.sliceSerialize(z)).toLowerCase()));
  }
  function M() {
    const z = this.resume(),
      J = this.stack[this.stack.length - 1];
    J.title = z;
  }
  function te() {
    const z = this.resume(),
      J = this.stack[this.stack.length - 1];
    J.url = z;
  }
  function ne(z) {
    const J = this.stack[this.stack.length - 1];
    if (!J.depth) {
      const xe = this.sliceSerialize(z).length;
      J.depth = xe;
    }
  }
  function A() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function V(z) {
    const J = this.stack[this.stack.length - 1];
    J.depth = this.sliceSerialize(z).codePointAt(0) === 61 ? 1 : 2;
  }
  function ue() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function ae(z) {
    const xe = this.stack[this.stack.length - 1].children;
    let Te = xe[xe.length - 1];
    ((!Te || Te.type !== 'text') &&
      ((Te = We()), (Te.position = { start: ar(z.start), end: void 0 }), xe.push(Te)),
      this.stack.push(Te));
  }
  function de(z) {
    const J = this.stack.pop();
    ((J.value += this.sliceSerialize(z)), (J.position.end = ar(z.end)));
  }
  function Z(z) {
    const J = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const xe = J.children[J.children.length - 1];
      ((xe.position.end = ar(z.end)), (this.data.atHardBreak = void 0));
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      i.canContainEols.includes(J.type) &&
      (ae.call(this, z), de.call(this, z));
  }
  function W() {
    this.data.atHardBreak = !0;
  }
  function pe() {
    const z = this.resume(),
      J = this.stack[this.stack.length - 1];
    J.value = z;
  }
  function H() {
    const z = this.resume(),
      J = this.stack[this.stack.length - 1];
    J.value = z;
  }
  function q() {
    const z = this.resume(),
      J = this.stack[this.stack.length - 1];
    J.value = z;
  }
  function me() {
    const z = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const J = this.data.referenceType || 'shortcut';
      ((z.type += 'Reference'), (z.referenceType = J), delete z.url, delete z.title);
    } else (delete z.identifier, delete z.label);
    this.data.referenceType = void 0;
  }
  function fe() {
    const z = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const J = this.data.referenceType || 'shortcut';
      ((z.type += 'Reference'), (z.referenceType = J), delete z.url, delete z.title);
    } else (delete z.identifier, delete z.label);
    this.data.referenceType = void 0;
  }
  function G(z) {
    const J = this.sliceSerialize(z),
      xe = this.stack[this.stack.length - 2];
    ((xe.label = z0(J)), (xe.identifier = ii(J).toLowerCase()));
  }
  function ie() {
    const z = this.stack[this.stack.length - 1],
      J = this.resume(),
      xe = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), xe.type === 'link')) {
      const Te = z.children;
      xe.children = Te;
    } else xe.alt = J;
  }
  function S() {
    const z = this.resume(),
      J = this.stack[this.stack.length - 1];
    J.url = z;
  }
  function N() {
    const z = this.resume(),
      J = this.stack[this.stack.length - 1];
    J.title = z;
  }
  function B() {
    this.data.inReference = void 0;
  }
  function _() {
    this.data.referenceType = 'collapsed';
  }
  function ge(z) {
    const J = this.resume(),
      xe = this.stack[this.stack.length - 1];
    ((xe.label = J),
      (xe.identifier = ii(this.sliceSerialize(z)).toLowerCase()),
      (this.data.referenceType = 'full'));
  }
  function ke(z) {
    this.data.characterReferenceType = z.type;
  }
  function ye(z) {
    const J = this.sliceSerialize(z),
      xe = this.data.characterReferenceType;
    let Te;
    xe
      ? ((Te = Fp(J, xe === 'characterReferenceMarkerNumeric' ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (Te = fu(J));
    const Pe = this.stack[this.stack.length - 1];
    Pe.value += Te;
  }
  function Ee(z) {
    const J = this.stack.pop();
    J.position.end = ar(z.end);
  }
  function be(z) {
    de.call(this, z);
    const J = this.stack[this.stack.length - 1];
    J.url = this.sliceSerialize(z);
  }
  function Ne(z) {
    de.call(this, z);
    const J = this.stack[this.stack.length - 1];
    J.url = 'mailto:' + this.sliceSerialize(z);
  }
  function qe() {
    return { type: 'blockquote', children: [] };
  }
  function _t() {
    return { type: 'code', lang: null, meta: null, value: '' };
  }
  function Wn() {
    return { type: 'inlineCode', value: '' };
  }
  function on() {
    return { type: 'definition', identifier: '', label: null, title: null, url: '' };
  }
  function He() {
    return { type: 'emphasis', children: [] };
  }
  function mn() {
    return { type: 'heading', depth: 0, children: [] };
  }
  function bt() {
    return { type: 'break' };
  }
  function Dt() {
    return { type: 'html', value: '' };
  }
  function gn() {
    return { type: 'image', title: null, url: '', alt: null };
  }
  function Gt() {
    return { type: 'link', title: null, url: '', children: [] };
  }
  function zt(z) {
    return {
      type: 'list',
      ordered: z.type === 'listOrdered',
      start: null,
      spread: z._spread,
      children: [],
    };
  }
  function D(z) {
    return { type: 'listItem', spread: z._spread, checked: null, children: [] };
  }
  function ee() {
    return { type: 'paragraph', children: [] };
  }
  function Ae() {
    return { type: 'strong', children: [] };
  }
  function We() {
    return { type: 'text', value: '' };
  }
  function Yt() {
    return { type: 'thematicBreak' };
  }
}
function ar(n) {
  return { line: n.line, column: n.column, offset: n.offset };
}
function Yp(n, i) {
  let l = -1;
  for (; ++l < i.length; ) {
    const s = i[l];
    Array.isArray(s) ? Yp(n, s) : $0(n, s);
  }
}
function $0(n, i) {
  let l;
  for (l in i)
    if (Gp.call(i, l))
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
function Ff(n, i) {
  throw n
    ? new Error(
        'Cannot close `' +
          n.type +
          '` (' +
          Yi({ start: n.start, end: n.end }) +
          '): a different token (`' +
          i.type +
          '`, ' +
          Yi({ start: i.start, end: i.end }) +
          ') is open'
      )
    : new Error(
        'Cannot close document, a token (`' +
          i.type +
          '`, ' +
          Yi({ start: i.start, end: i.end }) +
          ') is still open'
      );
}
function U0(n) {
  const i = this;
  i.parser = l;
  function l(s) {
    return B0(s, {
      ...i.data('settings'),
      ...n,
      extensions: i.data('micromarkExtensions') || [],
      mdastExtensions: i.data('fromMarkdownExtensions') || [],
    });
  }
}
function V0(n, i) {
  const l = {
    type: 'element',
    tagName: 'blockquote',
    properties: {},
    children: n.wrap(n.all(i), !0),
  };
  return (n.patch(i, l), n.applyData(i, l));
}
function q0(n, i) {
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
function H0(n, i) {
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
function Q0(n, i) {
  const l = { type: 'element', tagName: 'del', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function K0(n, i) {
  const l = { type: 'element', tagName: 'em', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function G0(n, i) {
  const l = typeof n.options.clobberPrefix == 'string' ? n.options.clobberPrefix : 'user-content-',
    s = String(i.identifier).toUpperCase(),
    u = si(s.toLowerCase()),
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
function Y0(n, i) {
  const l = { type: 'element', tagName: 'h' + i.depth, properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function X0(n, i) {
  if (n.options.allowDangerousHtml) {
    const l = { type: 'raw', value: i.value };
    return (n.patch(i, l), n.applyData(i, l));
  }
}
function Xp(n, i) {
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
function J0(n, i) {
  const l = String(i.identifier).toUpperCase(),
    s = n.definitionById.get(l);
  if (!s) return Xp(n, i);
  const u = { src: si(s.url || ''), alt: i.alt };
  s.title !== null && s.title !== void 0 && (u.title = s.title);
  const c = { type: 'element', tagName: 'img', properties: u, children: [] };
  return (n.patch(i, c), n.applyData(i, c));
}
function Z0(n, i) {
  const l = { src: si(i.url) };
  (i.alt !== null && i.alt !== void 0 && (l.alt = i.alt),
    i.title !== null && i.title !== void 0 && (l.title = i.title));
  const s = { type: 'element', tagName: 'img', properties: l, children: [] };
  return (n.patch(i, s), n.applyData(i, s));
}
function ew(n, i) {
  const l = { type: 'text', value: i.value.replace(/\r?\n|\r/g, ' ') };
  n.patch(i, l);
  const s = { type: 'element', tagName: 'code', properties: {}, children: [l] };
  return (n.patch(i, s), n.applyData(i, s));
}
function tw(n, i) {
  const l = String(i.identifier).toUpperCase(),
    s = n.definitionById.get(l);
  if (!s) return Xp(n, i);
  const u = { href: si(s.url || '') };
  s.title !== null && s.title !== void 0 && (u.title = s.title);
  const c = { type: 'element', tagName: 'a', properties: u, children: n.all(i) };
  return (n.patch(i, c), n.applyData(i, c));
}
function nw(n, i) {
  const l = { href: si(i.url) };
  i.title !== null && i.title !== void 0 && (l.title = i.title);
  const s = { type: 'element', tagName: 'a', properties: l, children: n.all(i) };
  return (n.patch(i, s), n.applyData(i, s));
}
function rw(n, i, l) {
  const s = n.all(i),
    u = l ? iw(l) : Jp(i),
    c = {},
    d = [];
  if (typeof i.checked == 'boolean') {
    const g = s[0];
    let w;
    (g && g.type === 'element' && g.tagName === 'p'
      ? (w = g)
      : ((w = { type: 'element', tagName: 'p', properties: {}, children: [] }), s.unshift(w)),
      w.children.length > 0 && w.children.unshift({ type: 'text', value: ' ' }),
      w.children.unshift({
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
function iw(n) {
  let i = !1;
  if (n.type === 'list') {
    i = n.spread || !1;
    const l = n.children;
    let s = -1;
    for (; !i && ++s < l.length; ) i = Jp(l[s]);
  }
  return i;
}
function Jp(n) {
  const i = n.spread;
  return i ?? n.children.length > 1;
}
function lw(n, i) {
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
function ow(n, i) {
  const l = { type: 'element', tagName: 'p', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function sw(n, i) {
  const l = { type: 'root', children: n.wrap(n.all(i)) };
  return (n.patch(i, l), n.applyData(i, l));
}
function aw(n, i) {
  const l = { type: 'element', tagName: 'strong', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
function uw(n, i) {
  const l = n.all(i),
    s = l.shift(),
    u = [];
  if (s) {
    const d = { type: 'element', tagName: 'thead', properties: {}, children: n.wrap([s], !0) };
    (n.patch(i.children[0], d), u.push(d));
  }
  if (l.length > 0) {
    const d = { type: 'element', tagName: 'tbody', properties: {}, children: n.wrap(l, !0) },
      p = au(i.children[1]),
      h = Pp(i.children[i.children.length - 1]);
    (p && h && (d.position = { start: p, end: h }), u.push(d));
  }
  const c = { type: 'element', tagName: 'table', properties: {}, children: n.wrap(u, !0) };
  return (n.patch(i, c), n.applyData(i, c));
}
function cw(n, i, l) {
  const s = l ? l.children : void 0,
    c = (s ? s.indexOf(i) : 1) === 0 ? 'th' : 'td',
    d = l && l.type === 'table' ? l.align : void 0,
    p = d ? d.length : i.children.length;
  let h = -1;
  const m = [];
  for (; ++h < p; ) {
    const w = i.children[h],
      x = {},
      k = d ? d[h] : void 0;
    k && (x.align = k);
    let I = { type: 'element', tagName: c, properties: x, children: [] };
    (w && ((I.children = n.all(w)), n.patch(w, I), (I = n.applyData(w, I))), m.push(I));
  }
  const g = { type: 'element', tagName: 'tr', properties: {}, children: n.wrap(m, !0) };
  return (n.patch(i, g), n.applyData(i, g));
}
function dw(n, i) {
  const l = { type: 'element', tagName: 'td', properties: {}, children: n.all(i) };
  return (n.patch(i, l), n.applyData(i, l));
}
const Bf = 9,
  Wf = 32;
function fw(n) {
  const i = String(n),
    l = /\r?\n|\r/g;
  let s = l.exec(i),
    u = 0;
  const c = [];
  for (; s; )
    (c.push($f(i.slice(u, s.index), u > 0, !0), s[0]),
      (u = s.index + s[0].length),
      (s = l.exec(i)));
  return (c.push($f(i.slice(u), u > 0, !1)), c.join(''));
}
function $f(n, i, l) {
  let s = 0,
    u = n.length;
  if (i) {
    let c = n.codePointAt(s);
    for (; c === Bf || c === Wf; ) (s++, (c = n.codePointAt(s)));
  }
  if (l) {
    let c = n.codePointAt(u - 1);
    for (; c === Bf || c === Wf; ) (u--, (c = n.codePointAt(u - 1)));
  }
  return u > s ? n.slice(s, u) : '';
}
function pw(n, i) {
  const l = { type: 'text', value: fw(String(i.value)) };
  return (n.patch(i, l), n.applyData(i, l));
}
function hw(n, i) {
  const l = { type: 'element', tagName: 'hr', properties: {}, children: [] };
  return (n.patch(i, l), n.applyData(i, l));
}
const mw = {
  blockquote: V0,
  break: q0,
  code: H0,
  delete: Q0,
  emphasis: K0,
  footnoteReference: G0,
  heading: Y0,
  html: X0,
  imageReference: J0,
  image: Z0,
  inlineCode: ew,
  linkReference: tw,
  link: nw,
  listItem: rw,
  list: lw,
  paragraph: ow,
  root: sw,
  strong: aw,
  table: uw,
  tableCell: dw,
  tableRow: cw,
  text: pw,
  thematicBreak: hw,
  toml: fo,
  yaml: fo,
  definition: fo,
  footnoteDefinition: fo,
};
function fo() {}
const Zp = -1,
  Co = 0,
  Ji = 1,
  ko = 2,
  mu = 3,
  gu = 4,
  yu = 5,
  vu = 6,
  eh = 7,
  th = 8,
  Uf = typeof self == 'object' ? self : globalThis,
  gw = (n, i) => {
    const l = (u, c) => (n.set(c, u), u),
      s = (u) => {
        if (n.has(u)) return n.get(u);
        const [c, d] = i[u];
        switch (c) {
          case Co:
          case Zp:
            return l(d, u);
          case Ji: {
            const p = l([], u);
            for (const h of d) p.push(s(h));
            return p;
          }
          case ko: {
            const p = l({}, u);
            for (const [h, m] of d) p[s(h)] = s(m);
            return p;
          }
          case mu:
            return l(new Date(d), u);
          case gu: {
            const { source: p, flags: h } = d;
            return l(new RegExp(p, h), u);
          }
          case yu: {
            const p = l(new Map(), u);
            for (const [h, m] of d) p.set(s(h), s(m));
            return p;
          }
          case vu: {
            const p = l(new Set(), u);
            for (const h of d) p.add(s(h));
            return p;
          }
          case eh: {
            const { name: p, message: h } = d;
            return l(new Uf[p](h), u);
          }
          case th:
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
        return l(new Uf[c](d), u);
      };
    return s;
  },
  Vf = (n) => gw(new Map(), n)(0),
  ti = '',
  { toString: yw } = {},
  { keys: vw } = Object,
  Gi = (n) => {
    const i = typeof n;
    if (i !== 'object' || !n) return [Co, i];
    const l = yw.call(n).slice(8, -1);
    switch (l) {
      case 'Array':
        return [Ji, ti];
      case 'Object':
        return [ko, ti];
      case 'Date':
        return [mu, ti];
      case 'RegExp':
        return [gu, ti];
      case 'Map':
        return [yu, ti];
      case 'Set':
        return [vu, ti];
      case 'DataView':
        return [Ji, l];
    }
    return l.includes('Array') ? [Ji, l] : l.includes('Error') ? [eh, l] : [ko, l];
  },
  po = ([n, i]) => n === Co && (i === 'function' || i === 'symbol'),
  ww = (n, i, l, s) => {
    const u = (d, p) => {
        const h = s.push(d) - 1;
        return (l.set(p, h), h);
      },
      c = (d) => {
        if (l.has(d)) return l.get(d);
        let [p, h] = Gi(d);
        switch (p) {
          case Co: {
            let g = d;
            switch (h) {
              case 'bigint':
                ((p = th), (g = d.toString()));
                break;
              case 'function':
              case 'symbol':
                if (n) throw new TypeError('unable to serialize ' + h);
                g = null;
                break;
              case 'undefined':
                return u([Zp], d);
            }
            return u([p, g], d);
          }
          case Ji: {
            if (h) {
              let x = d;
              return (
                h === 'DataView'
                  ? (x = new Uint8Array(d.buffer))
                  : h === 'ArrayBuffer' && (x = new Uint8Array(d)),
                u([h, [...x]], d)
              );
            }
            const g = [],
              w = u([p, g], d);
            for (const x of d) g.push(c(x));
            return w;
          }
          case ko: {
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
              w = u([p, g], d);
            for (const x of vw(d)) (n || !po(Gi(d[x]))) && g.push([c(x), c(d[x])]);
            return w;
          }
          case mu:
            return u([p, d.toISOString()], d);
          case gu: {
            const { source: g, flags: w } = d;
            return u([p, { source: g, flags: w }], d);
          }
          case yu: {
            const g = [],
              w = u([p, g], d);
            for (const [x, k] of d) (n || !(po(Gi(x)) || po(Gi(k)))) && g.push([c(x), c(k)]);
            return w;
          }
          case vu: {
            const g = [],
              w = u([p, g], d);
            for (const x of d) (n || !po(Gi(x))) && g.push(c(x));
            return w;
          }
        }
        const { message: m } = d;
        return u([p, { name: h, message: m }], d);
      };
    return c;
  },
  qf = (n, { json: i, lossy: l } = {}) => {
    const s = [];
    return (ww(!(i || l), !!i, new Map(), s)(n), s);
  },
  xo =
    typeof structuredClone == 'function'
      ? (n, i) => (i && ('json' in i || 'lossy' in i) ? Vf(qf(n, i)) : structuredClone(n))
      : (n, i) => Vf(qf(n, i));
function kw(n, i) {
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
function xw(n, i) {
  return 'Back to reference ' + (n + 1) + (i > 1 ? '-' + i : '');
}
function Sw(n) {
  const i = typeof n.options.clobberPrefix == 'string' ? n.options.clobberPrefix : 'user-content-',
    l = n.options.footnoteBackContent || kw,
    s = n.options.footnoteBackLabel || xw,
    u = n.options.footnoteLabel || 'Footnotes',
    c = n.options.footnoteLabelTagName || 'h2',
    d = n.options.footnoteLabelProperties || { className: ['sr-only'] },
    p = [];
  let h = -1;
  for (; ++h < n.footnoteOrder.length; ) {
    const m = n.footnoteById.get(n.footnoteOrder[h]);
    if (!m) continue;
    const g = n.all(m),
      w = String(m.identifier).toUpperCase(),
      x = si(w.toLowerCase());
    let k = 0;
    const I = [],
      T = n.footnoteCounts.get(w);
    for (; T !== void 0 && ++k <= T; ) {
      I.length > 0 && I.push({ type: 'text', value: ' ' });
      let F = typeof l == 'string' ? l : l(h, k);
      (typeof F == 'string' && (F = { type: 'text', value: F }),
        I.push({
          type: 'element',
          tagName: 'a',
          properties: {
            href: '#' + i + 'fnref-' + x + (k > 1 ? '-' + k : ''),
            dataFootnoteBackref: '',
            ariaLabel: typeof s == 'string' ? s : s(h, k),
            className: ['data-footnote-backref'],
          },
          children: Array.isArray(F) ? F : [F],
        }));
    }
    const O = g[g.length - 1];
    if (O && O.type === 'element' && O.tagName === 'p') {
      const F = O.children[O.children.length - 1];
      (F && F.type === 'text' ? (F.value += ' ') : O.children.push({ type: 'text', value: ' ' }),
        O.children.push(...I));
    } else g.push(...I);
    const P = {
      type: 'element',
      tagName: 'li',
      properties: { id: i + 'fn-' + x },
      children: n.wrap(g, !0),
    };
    (n.patch(m, P), p.push(P));
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
          properties: { ...xo(d), id: 'footnote-label' },
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
const nh = function (n) {
  if (n == null) return bw;
  if (typeof n == 'function') return Eo(n);
  if (typeof n == 'object') return Array.isArray(n) ? _w(n) : Cw(n);
  if (typeof n == 'string') return Ew(n);
  throw new Error('Expected function, string, or object as test');
};
function _w(n) {
  const i = [];
  let l = -1;
  for (; ++l < n.length; ) i[l] = nh(n[l]);
  return Eo(s);
  function s(...u) {
    let c = -1;
    for (; ++c < i.length; ) if (i[c].apply(this, u)) return !0;
    return !1;
  }
}
function Cw(n) {
  const i = n;
  return Eo(l);
  function l(s) {
    const u = s;
    let c;
    for (c in n) if (u[c] !== i[c]) return !1;
    return !0;
  }
}
function Ew(n) {
  return Eo(i);
  function i(l) {
    return l && l.type === n;
  }
}
function Eo(n) {
  return i;
  function i(l, s, u) {
    return !!(Nw(l) && n.call(this, l, typeof s == 'number' ? s : void 0, u || void 0));
  }
}
function bw() {
  return !0;
}
function Nw(n) {
  return n !== null && typeof n == 'object' && 'type' in n;
}
const rh = [],
  Iw = !0,
  Hf = !1,
  Tw = 'skip';
function jw(n, i, l, s) {
  let u;
  typeof i == 'function' && typeof l != 'function' ? ((s = l), (l = i)) : (u = i);
  const c = nh(u),
    d = s ? -1 : 1;
  p(n, void 0, [])();
  function p(h, m, g) {
    const w = h && typeof h == 'object' ? h : {};
    if (typeof w.type == 'string') {
      const k =
        typeof w.tagName == 'string' ? w.tagName : typeof w.name == 'string' ? w.name : void 0;
      Object.defineProperty(x, 'name', {
        value: 'node (' + (h.type + (k ? '<' + k + '>' : '')) + ')',
      });
    }
    return x;
    function x() {
      let k = rh,
        I,
        T,
        O;
      if ((!i || c(h, m, g[g.length - 1] || void 0)) && ((k = Lw(l(h, g))), k[0] === Hf)) return k;
      if ('children' in h && h.children) {
        const P = h;
        if (P.children && k[0] !== Tw)
          for (
            T = (s ? P.children.length : -1) + d, O = g.concat(P);
            T > -1 && T < P.children.length;
          ) {
            const F = P.children[T];
            if (((I = p(F, T, O)()), I[0] === Hf)) return I;
            T = typeof I[1] == 'number' ? I[1] : T + d;
          }
      }
      return k;
    }
  }
}
function Lw(n) {
  return Array.isArray(n) ? n : typeof n == 'number' ? [Iw, n] : n == null ? rh : [n];
}
function ih(n, i, l, s) {
  let u, c, d;
  (typeof i == 'function' && typeof l != 'function'
    ? ((c = void 0), (d = i), (u = l))
    : ((c = i), (d = l), (u = s)),
    jw(n, c, p, u));
  function p(h, m) {
    const g = m[m.length - 1],
      w = g ? g.children.indexOf(h) : void 0;
    return d(h, w, g);
  }
}
const Ka = {}.hasOwnProperty,
  Pw = {};
function Ow(n, i) {
  const l = i || Pw,
    s = new Map(),
    u = new Map(),
    c = new Map(),
    d = { ...mw, ...l.handlers },
    p = {
      all: m,
      applyData: Aw,
      definitionById: s,
      footnoteById: u,
      footnoteCounts: c,
      footnoteOrder: [],
      handlers: d,
      one: h,
      options: l,
      patch: Rw,
      wrap: Dw,
    };
  return (
    ih(n, function (g) {
      if (g.type === 'definition' || g.type === 'footnoteDefinition') {
        const w = g.type === 'definition' ? s : u,
          x = String(g.identifier).toUpperCase();
        w.has(x) || w.set(x, g);
      }
    }),
    p
  );
  function h(g, w) {
    const x = g.type,
      k = p.handlers[x];
    if (Ka.call(p.handlers, x) && k) return k(p, g, w);
    if (p.options.passThrough && p.options.passThrough.includes(x)) {
      if ('children' in g) {
        const { children: T, ...O } = g,
          P = xo(O);
        return ((P.children = p.all(g)), P);
      }
      return xo(g);
    }
    return (p.options.unknownHandler || Mw)(p, g, w);
  }
  function m(g) {
    const w = [];
    if ('children' in g) {
      const x = g.children;
      let k = -1;
      for (; ++k < x.length; ) {
        const I = p.one(x[k], g);
        if (I) {
          if (
            k &&
            x[k - 1].type === 'break' &&
            (!Array.isArray(I) && I.type === 'text' && (I.value = Qf(I.value)),
            !Array.isArray(I) && I.type === 'element')
          ) {
            const T = I.children[0];
            T && T.type === 'text' && (T.value = Qf(T.value));
          }
          Array.isArray(I) ? w.push(...I) : w.push(I);
        }
      }
    }
    return w;
  }
}
function Rw(n, i) {
  n.position && (i.position = yv(n));
}
function Aw(n, i) {
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
    (l.type === 'element' && c && Object.assign(l.properties, xo(c)),
      'children' in l && l.children && u !== null && u !== void 0 && (l.children = u));
  }
  return l;
}
function Mw(n, i) {
  const l = i.data || {},
    s =
      'value' in i && !(Ka.call(l, 'hProperties') || Ka.call(l, 'hChildren'))
        ? { type: 'text', value: i.value }
        : { type: 'element', tagName: 'div', properties: {}, children: n.all(i) };
  return (n.patch(i, s), n.applyData(i, s));
}
function Dw(n, i) {
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
function Qf(n) {
  let i = 0,
    l = n.charCodeAt(i);
  for (; l === 9 || l === 32; ) (i++, (l = n.charCodeAt(i)));
  return n.slice(i);
}
function Kf(n, i) {
  const l = Ow(n, i),
    s = l.one(n, void 0),
    u = Sw(l),
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
function zw(n, i) {
  return n && 'run' in n
    ? async function (l, s) {
        const u = Kf(l, { file: s, ...i });
        await n.run(u, s);
      }
    : function (l, s) {
        return Kf(l, { file: s, ...(n || i) });
      };
}
function Gf(n) {
  if (n) throw n;
}
var Ea, Yf;
function Fw() {
  if (Yf) return Ea;
  Yf = 1;
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
        w =
          m.constructor &&
          m.constructor.prototype &&
          n.call(m.constructor.prototype, 'isPrototypeOf');
      if (m.constructor && !g && !w) return !1;
      var x;
      for (x in m);
      return typeof x > 'u' || n.call(m, x);
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
        w,
        x,
        k,
        I,
        T = arguments[0],
        O = 1,
        P = arguments.length,
        F = !1;
      for (
        typeof T == 'boolean' && ((F = T), (T = arguments[1] || {}), (O = 2)),
          (T == null || (typeof T != 'object' && typeof T != 'function')) && (T = {});
        O < P;
        ++O
      )
        if (((m = arguments[O]), m != null))
          for (g in m)
            ((w = p(T, g)),
              (x = p(m, g)),
              T !== x &&
                (F && x && (c(x) || (k = u(x)))
                  ? (k ? ((k = !1), (I = w && u(w) ? w : [])) : (I = w && c(w) ? w : {}),
                    d(T, { name: g, newValue: h(F, I, x) }))
                  : typeof x < 'u' && d(T, { name: g, newValue: x })));
      return T;
    }),
    Ea
  );
}
var Bw = Fw();
const ba = sp(Bw);
function Ga(n) {
  if (typeof n != 'object' || n === null) return !1;
  const i = Object.getPrototypeOf(n);
  return (
    (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) &&
    !(Symbol.toStringTag in n) &&
    !(Symbol.iterator in n)
  );
}
function Ww() {
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
      let w = -1;
      if (h) {
        d(h);
        return;
      }
      for (; ++w < u.length; ) (m[w] === null || m[w] === void 0) && (m[w] = u[w]);
      ((u = m), g ? $w(g, p)(...m) : d(null, ...m));
    }
  }
  function s(u) {
    if (typeof u != 'function')
      throw new TypeError('Expected `middelware` to be a function, not ' + u);
    return (n.push(u), i);
  }
}
function $w(n, i) {
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
const _n = { basename: Uw, dirname: Vw, extname: qw, join: Hw, sep: '/' };
function Uw(n, i) {
  if (i !== void 0 && typeof i != 'string') throw new TypeError('"ext" argument must be a string');
  nl(n);
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
function Vw(n) {
  if ((nl(n), n.length === 0)) return '.';
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
function qw(n) {
  nl(n);
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
function Hw(...n) {
  let i = -1,
    l;
  for (; ++i < n.length; ) (nl(n[i]), n[i] && (l = l === void 0 ? n[i] : l + '/' + n[i]));
  return l === void 0 ? '.' : Qw(l);
}
function Qw(n) {
  nl(n);
  const i = n.codePointAt(0) === 47;
  let l = Kw(n, !i);
  return (
    l.length === 0 && !i && (l = '.'),
    l.length > 0 && n.codePointAt(n.length - 1) === 47 && (l += '/'),
    i ? '/' + l : l
  );
}
function Kw(n, i) {
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
function nl(n) {
  if (typeof n != 'string')
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(n));
}
const Gw = { cwd: Yw };
function Yw() {
  return '/';
}
function Ya(n) {
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
function Xw(n) {
  if (typeof n == 'string') n = new URL(n);
  else if (!Ya(n)) {
    const i = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + n + '`'
    );
    throw ((i.code = 'ERR_INVALID_ARG_TYPE'), i);
  }
  if (n.protocol !== 'file:') {
    const i = new TypeError('The URL must be of scheme file');
    throw ((i.code = 'ERR_INVALID_URL_SCHEME'), i);
  }
  return Jw(n);
}
function Jw(n) {
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
class lh {
  constructor(i) {
    let l;
    (i
      ? Ya(i)
        ? (l = { path: i })
        : typeof i == 'string' || Zw(i)
          ? (l = { value: i })
          : (l = i)
      : (l = {}),
      (this.cwd = 'cwd' in l ? '' : Gw.cwd()),
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
    return typeof this.path == 'string' ? _n.basename(this.path) : void 0;
  }
  set basename(i) {
    (Ta(i, 'basename'), Ia(i, 'basename'), (this.path = _n.join(this.dirname || '', i)));
  }
  get dirname() {
    return typeof this.path == 'string' ? _n.dirname(this.path) : void 0;
  }
  set dirname(i) {
    (Xf(this.basename, 'dirname'), (this.path = _n.join(i || '', this.basename)));
  }
  get extname() {
    return typeof this.path == 'string' ? _n.extname(this.path) : void 0;
  }
  set extname(i) {
    if ((Ia(i, 'extname'), Xf(this.dirname, 'extname'), i)) {
      if (i.codePointAt(0) !== 46) throw new Error('`extname` must start with `.`');
      if (i.includes('.', 1)) throw new Error('`extname` cannot contain multiple dots');
    }
    this.path = _n.join(this.dirname, this.stem + (i || ''));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(i) {
    (Ya(i) && (i = Xw(i)), Ta(i, 'path'), this.path !== i && this.history.push(i));
  }
  get stem() {
    return typeof this.path == 'string' ? _n.basename(this.path, this.extname) : void 0;
  }
  set stem(i) {
    (Ta(i, 'stem'),
      Ia(i, 'stem'),
      (this.path = _n.join(this.dirname || '', i + (this.extname || ''))));
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
    const u = new St(i, l, s);
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
  if (n && n.includes(_n.sep))
    throw new Error('`' + i + '` cannot be a path: did not expect `' + _n.sep + '`');
}
function Ta(n, i) {
  if (!n) throw new Error('`' + i + '` cannot be empty');
}
function Xf(n, i) {
  if (!n) throw new Error('Setting `' + i + '` requires `path` to be set too');
}
function Zw(n) {
  return !!(n && typeof n == 'object' && 'byteLength' in n && 'byteOffset' in n);
}
const ek = function (n) {
    const s = this.constructor.prototype,
      u = s[n],
      c = function () {
        return u.apply(c, arguments);
      };
    return (Object.setPrototypeOf(c, s), c);
  },
  tk = {}.hasOwnProperty;
class wu extends ek {
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
      (this.transformers = Ww()));
  }
  copy() {
    const i = new wu();
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
        : (tk.call(this.namespace, i) && this.namespace[i]) || void 0
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
      s.run(h, p, function (g, w, x) {
        if (g || !w || !x) return m(g);
        const k = w,
          I = s.stringify(k, x);
        (ik(I) ? (x.value = I) : (x.result = I), m(g, x));
      });
      function m(g, w) {
        g || !w ? d(g) : c ? c(w) : l(void 0, w);
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
      Zf('processSync', 'process', l),
      s
    );
    function u(c, d) {
      ((l = !0), Gf(c), (s = d));
    }
  }
  run(i, l, s) {
    (Jf(i), this.freeze());
    const u = this.transformers;
    return (
      !s && typeof l == 'function' && ((s = l), (l = void 0)),
      s ? c(void 0, s) : new Promise(c)
    );
    function c(d, p) {
      const h = ho(l);
      u.run(i, h, m);
      function m(g, w, x) {
        const k = w || i;
        g ? p(g) : d ? d(k) : s(void 0, k, x);
      }
    }
  }
  runSync(i, l) {
    let s = !1,
      u;
    return (this.run(i, l, c), Zf('runSync', 'run', s), u);
    function c(d, p) {
      (Gf(d), (u = p), (s = !0));
    }
  }
  stringify(i, l) {
    this.freeze();
    const s = ho(l),
      u = this.compiler || this.Compiler;
    return (La('stringify', u), Jf(i), u(i, s));
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
          const [g, ...w] = m;
          h(g, w);
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
            const w = m[g];
            c(w);
          }
        else throw new TypeError('Expected a list of plugins, not `' + m + '`');
    }
    function h(m, g) {
      let w = -1,
        x = -1;
      for (; ++w < s.length; )
        if (s[w][0] === m) {
          x = w;
          break;
        }
      if (x === -1) s.push([m, ...g]);
      else if (g.length > 0) {
        let [k, ...I] = g;
        const T = s[x][1];
        (Ga(T) && Ga(k) && (k = ba(!0, T, k)), (s[x] = [m, k, ...I]));
      }
    }
  }
}
const nk = new wu().freeze();
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
function Jf(n) {
  if (!Ga(n) || typeof n.type != 'string') throw new TypeError('Expected node, got `' + n + '`');
}
function Zf(n, i, l) {
  if (!l) throw new Error('`' + n + '` finished async. Use `' + i + '` instead');
}
function ho(n) {
  return rk(n) ? n : new lh(n);
}
function rk(n) {
  return !!(n && typeof n == 'object' && 'message' in n && 'messages' in n);
}
function ik(n) {
  return typeof n == 'string' || lk(n);
}
function lk(n) {
  return !!(n && typeof n == 'object' && 'byteLength' in n && 'byteOffset' in n);
}
const ok = 'https://github.com/remarkjs/react-markdown/blob/main/changelog.md',
  ep = [],
  tp = { allowDangerousHtml: !0 },
  sk = /^(https?|ircs?|mailto|xmpp)$/i,
  ak = [
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
function Tr(n) {
  const i = uk(n),
    l = ck(n);
  return dk(i.runSync(i.parse(l), l), n);
}
function uk(n) {
  const i = n.rehypePlugins || ep,
    l = n.remarkPlugins || ep,
    s = n.remarkRehypeOptions ? { ...n.remarkRehypeOptions, ...tp } : tp;
  return nk().use(U0).use(l).use(zw, s).use(i);
}
function ck(n) {
  const i = n.children || '',
    l = new lh();
  return (typeof i == 'string' && (l.value = i), l);
}
function dk(n, i) {
  const l = i.allowedElements,
    s = i.allowElement,
    u = i.components,
    c = i.disallowedElements,
    d = i.skipHtml,
    p = i.unwrapDisallowed,
    h = i.urlTransform || fk;
  for (const g of ak)
    Object.hasOwn(i, g.from) &&
      ('' + g.from + (g.to ? 'use `' + g.to + '` instead' : 'remove it') + ok + g.id, void 0);
  return (
    ih(n, m),
    Sv(n, {
      Fragment: v.Fragment,
      components: u,
      ignoreInvalidStyle: !0,
      jsx: v.jsx,
      jsxs: v.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function m(g, w, x) {
    if (g.type === 'raw' && x && typeof w == 'number')
      return (d ? x.children.splice(w, 1) : (x.children[w] = { type: 'text', value: g.value }), w);
    if (g.type === 'element') {
      let k;
      for (k in Sa)
        if (Object.hasOwn(Sa, k) && Object.hasOwn(g.properties, k)) {
          const I = g.properties[k],
            T = Sa[k];
          (T === null || T.includes(g.tagName)) && (g.properties[k] = h(String(I || ''), k, g));
        }
    }
    if (g.type === 'element') {
      let k = l ? !l.includes(g.tagName) : c ? c.includes(g.tagName) : !1;
      if ((!k && s && typeof w == 'number' && (k = !s(g, w, x)), k && x && typeof w == 'number'))
        return (
          p && g.children ? x.children.splice(w, 1, ...g.children) : x.children.splice(w, 1),
          w
        );
    }
  }
}
function fk(n) {
  const i = n.indexOf(':'),
    l = n.indexOf('?'),
    s = n.indexOf('#'),
    u = n.indexOf('/');
  return i === -1 ||
    (u !== -1 && i > u) ||
    (l !== -1 && i > l) ||
    (s !== -1 && i > s) ||
    sk.test(n.slice(0, i))
    ? n
    : '';
}
const Bn = ({ subtitle: n }) =>
  v.jsxs('header', {
    className: `header${n ? ' header-with-subtitle' : ''}`,
    children: [
      v.jsxs('div', {
        className: 'header-brand',
        children: [
          v.jsx('img', {
            src: '/quiz-demo/prototypes/advanced-mode/NewLogoSVG.svg',
            alt: 'Rethink Priorities',
            height: '24',
          }),
          v.jsx('span', { className: 'header-title', children: 'Donor Compass' }),
        ],
      }),
      n && v.jsx('div', { className: 'header-subtitle', children: n }),
    ],
  });
function hn() {
  const n = U.useContext(Cp);
  if (!n) throw new Error('useQuiz must be used within a QuizProvider');
  return n;
}
function ku(n) {
  const [i, l] = U.useState(!1),
    [s, u, c] = n || [],
    d = s ? `${s}@${u}.${c}` : null,
    p = U.useCallback(
      (h) => {
        (h.preventDefault(),
          d && (navigator.clipboard.writeText(d), l(!0), setTimeout(() => l(!1), 2e3)));
      },
      [d]
    );
  return { email: d, copied: i, handleEmailClick: p };
}
function xu(n, i, l) {
  return !i || !n ? n : n.replace('{{EMAIL}}', `[${l ? 'Copied!' : i}](#copy-email)`);
}
function Su(n, i) {
  return function ({ href: s, children: u }) {
    return s === '#copy-email'
      ? v.jsx('span', { onClick: n, className: i, children: u })
      : v.jsx('a', { href: s, target: '_blank', rel: 'noopener noreferrer', children: u });
  };
}
const pk = '_container_hmsrd_3',
  hk = '_heading_hmsrd_8',
  mk = '_content_hmsrd_16',
  gk = '_emailCopy_hmsrd_60',
  mo = { container: pk, heading: hk, content: mk, emailCopy: gk },
  yk = {
    heading: "This is a prototype of Rethink Priorities's Donor Compass",
    content: `**This version is a prototype. The funds, underlying data, and calculations in this version are placeholders meant to illustrate the type of behavior you can expect from the tool. All of these will change in future versions.** 

 **Donor Compass helps you find a distribution of donations across funds that fits your personal values.** The tool asks for your personal preferences about things that matter when assessing different charitable projects (like how much you weigh animal suffering or effects on the distant future) and then calculates which funds best match those preferences. Importantly, future versions will account for diminishing returns, so recommendations will update as large amounts of money go into specific funds.

 **What we're seeking feedback on:** The types of inputs and questions we ask, the general workflow and layout, and what changes would make this tool more useful for your decision making.

 **Future iterations will include:**
- A usable version ready in early March 2026, including the GiveWell Top Charities Fund, EA Animal Welfare Fund, Longview Philanthropy Fund, and others
- Detailed cost-effectiveness estimates for included funds
- Detailed explanations of all calculations that account for diminishing returns
- Different methods for aggregating your inputs into recommended allocations
- A power user version that is more freely configurable 
- A fund, guided by the most recent research and funding insights, that distributes across cause areas  
- Potentially: an LLM interface that helps you interpret the calculations and results.

**Share your feedback:** Please share any thoughts, however brief, in [this form](https://rethinkpriorities.qualtrics.com/jfe/form/SV_9mJlFv7Tch8qMMC) or by email to {{EMAIL}}. If you’d like to talk to Marcus A. Davis (cofounder) in San Francisco you can [book a coffee chat with him using this link](https://calendar.app.google/rS74siwccp8mScvR7) for Thursday February 5th or 13th-15th. You can also [book an online call](https://calendly.com/hayley-clatterbuck/30min) with Hayley Clatterbuck.

**Sign up** [**here**](https://mailchi.mp/4da0acddedce/rethink-priorities-donor-compass) if you'd like to get an email when the next version of this tool is ready.`,
    email: ['carmen', 'rethinkpriorities', 'org'],
    continueButton: 'Continue →',
  },
  vk = {
    timeEstimate: '5-20 minutes',
    headingLine1: 'Where Should Your',
    headingLine2: 'Giving Go?',
    intro:
      'Uncertain about your ethical views? This tool helps you allocate resources across different causes based on your moral credences—the probabilities you assign to different ethical perspectives.',
    startButton: 'Start Quiz →',
    previewLabel: "You'll be asked about:",
  },
  wk = { back: '← Back', continue: 'Continue →', backToQuiz: '← Back to Quiz' },
  kk = { modeToggle: { pickOne: 'Pick One', customMix: 'Custom Mix' } },
  xk = {
    heading: 'Recommended Allocations',
    prototypeDisclaimer:
      'This version is a prototype. The funds, underlying data, and calculations in this version are placeholders meant to illustrate the type of behavior you can expect from the tool. All of these will change in future versions.',
    budgetLabel: 'Total Budget',
    budgetInfo:
      'Future diminishing returns calculations will change depending on total money spent, not in this prototype',
    feedbackCard: `**Share your feedback:** Please share any thoughts, however brief, in [this form](https://rethinkpriorities.qualtrics.com/jfe/form/SV_9mJlFv7Tch8qMMC) or by email to {{EMAIL}}. If you’d like to talk to Marcus A. Davis (cofounder) in San Francisco you can [book a coffee chat with him using this link](https://calendar.app.google/rS74siwccp8mScvR7) for Thursday February 5th or 13th-15th. You can also [book an online call](https://calendly.com/hayley-clatterbuck/30min) with Hayley Clatterbuck. You can also help us by clicking the share button above, it will save the results to a database we can read (and copy a link to your clipboard that will take you back to these results).

**Future iterations will include:**
- A usable version ready in early March 2026, including the GiveWell Top Charities Fund, EA Animal Welfare Fund, Longview Philanthropy Fund, and others
- Detailed cost-effectiveness estimates for included funds
- Detailed explanations of all calculations that account for diminishing returns
- Different methods for aggregating your inputs into recommended allocations
- A power user version that is more freely configurable 
- A fund, guided by the most recent research and funding insights, that distributes across cause areas  
- Potentially: an LLM interface that helps you interpret the calculations and results.



**Sign up** [**here**](https://mailchi.mp/4da0acddedce/rethink-priorities-donor-compass) if you'd like to get an email when the next version of this tool is ready.`,
    feedbackEmail: ['carmen', 'rethinkpriorities', 'org'],
    modifiedIndicator: '(modified)',
    adjustCredencesHeading: 'Adjust Your Credences',
    resetAllButton: 'Reset All',
    calculationSelectTooltip:
      'There are different ways to advise allocations based on your inputs. The next version of the tool will let you compare different methods and explain clearly what is happening behind the scenes for each of these options. The current calculations are placeholders.',
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
  Sk = {
    modifiedBadge: 'modified',
    sliderNote: 'Sliders auto-balance to 100%',
    resetButton: 'Reset',
  },
  _k = { lockTooltip: 'Lock slider', unlockTooltip: 'Unlock slider' },
  Ck = {
    title: 'Your Credences',
    tooltip:
      "These questions don't have obvious right answers, so we're asking for your credences—how much you believe in each possible answer. You can select multiple options and split your belief between them. If you're certain about one answer, give it 100%. If you're split, you might put 80% on one and 20% on another, or 50/50 if you're truly torn.",
  },
  Ek = {
    heading: 'Recommended Allocations',
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
  bk = {
    title: 'Switch Worldview',
    description:
      'Each worldview stores a separate set of quiz answers. Select a worldview to view or edit.',
    emptyLabel: '(empty)',
    currentLabel: '(current)',
    defaultName: 'Worldview',
  },
  Nk = {
    heading: 'Your Worldviews',
    subtitle:
      'Define different perspectives, then see how they combine into Recommended Allocations.',
    marketplaceButton: 'View Recommended Allocations',
    marketplaceHint: 'Complete at least 2 worldviews to unlock',
    addWorldview: 'Add another worldview',
    backButton: '← Back to Hub',
  },
  se = {
    disclaimer: yk,
    welcome: vk,
    navigation: wk,
    questionScreen: kk,
    results: xk,
    editPanel: Sk,
    sliders: _k,
    credences: Ck,
    marketplace: Ek,
    worldviewModal: bk,
    hub: Nk,
  };
function Ik() {
  var p;
  const { goToStep: n, isAdvancedMode: i } = hn(),
    {
      email: l,
      copied: s,
      handleEmailClick: u,
    } = ku((p = se.disclaimer) == null ? void 0 : p.email),
    c = () => {
      n(i ? 'hub' : 'welcome');
    },
    d = xu(se.disclaimer.content, l, s);
  return v.jsxs('div', {
    className: 'screen',
    children: [
      v.jsx(Bn, {}),
      v.jsx('main', {
        className: 'screen-main',
        children: v.jsxs('div', {
          className: mo.container,
          children: [
            v.jsx('h1', { className: mo.heading, children: se.disclaimer.heading }),
            v.jsx('div', {
              className: mo.content,
              children: v.jsx(Tr, { components: { a: Su(u, mo.emailCopy) }, children: d }),
            }),
            v.jsx('button', {
              onClick: c,
              className: 'btn btn-primary',
              children: se.disclaimer.continueButton,
            }),
          ],
        }),
      }),
    ],
  });
}
const Tk = {
  paw: Yg,
  hourglass: Qg,
  'bar-chart': Fg,
  microscope: Gg,
  'heart-pulse': Hg,
  banknote: Mg,
  bird: Dg,
  shell: ey,
  clock: $g,
  dice: Ug,
  'alert-triangle': ry,
};
function oh({ name: n, size: i = 16, className: l = '' }) {
  const s = Tk[n] || fp;
  return v.jsx(s, { size: i, className: l });
}
const jk = '_container_1eq83_3',
  Lk = '_heading_1eq83_8',
  Pk = '_headingEmphasis_1eq83_17',
  Ok = '_intro_1eq83_22',
  Rk = '_infoBox_1eq83_30',
  Ak = '_infoBoxLabel_1eq83_38',
  Mk = '_infoBoxGrid_1eq83_45',
  Dk = '_infoBoxItem_1eq83_52',
  ur = {
    container: jk,
    heading: Lk,
    headingEmphasis: Pk,
    intro: Ok,
    infoBox: Rk,
    infoBoxLabel: Ak,
    infoBoxGrid: Mk,
    infoBoxItem: Dk,
  };
function zk() {
  const { questionsConfig: n, startQuiz: i } = hn(),
    l = n.filter((s) => s.type !== tt.INTERMISSION);
  return v.jsxs('div', {
    className: 'screen',
    children: [
      v.jsx(Bn, { subtitle: se.welcome.timeEstimate }),
      v.jsx('main', {
        className: 'screen-main',
        children: v.jsxs('div', {
          className: ur.container,
          children: [
            v.jsxs('h1', {
              className: ur.heading,
              children: [
                se.welcome.headingLine1,
                v.jsx('br', {}),
                v.jsx('span', { className: ur.headingEmphasis, children: se.welcome.headingLine2 }),
              ],
            }),
            v.jsx('p', { className: ur.intro, children: se.welcome.intro }),
            v.jsx('button', {
              onClick: i,
              className: 'btn btn-primary',
              children: se.welcome.startButton,
            }),
            v.jsxs('div', {
              className: ur.infoBox,
              children: [
                v.jsx('div', { className: ur.infoBoxLabel, children: se.welcome.previewLabel }),
                v.jsx('div', {
                  className: ur.infoBoxGrid,
                  children: l.map((s) =>
                    v.jsxs(
                      'div',
                      {
                        className: ur.infoBoxItem,
                        children: [v.jsx(oh, { name: s.icon, size: 16 }), ' ', s.previewText],
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
const Fk = '_overlay_3gvjz_1',
  Bk = '_modal_3gvjz_12',
  Wk = '_title_3gvjz_21',
  $k = '_buttons_3gvjz_35',
  Uk = '_button_3gvjz_35',
  Vk = '_nameSection_3gvjz_50',
  qk = '_nameLabel_3gvjz_54',
  Hk = '_nameInput_3gvjz_61',
  An = {
    overlay: Fk,
    modal: Bk,
    title: Wk,
    buttons: $k,
    button: Uk,
    nameSection: Vk,
    nameLabel: qk,
    nameInput: Hk,
  };
function Qk({ worldviewId: n, worldviewName: i, onEditAnswers: l, onClose: s }) {
  const { setWorldviewName: u } = hn(),
    [c, d] = U.useState(i),
    p = (g) => {
      d(g.target.value);
    },
    h = () => {
      c.trim() && c !== i && u(n, c.trim());
    },
    m = (g) => {
      g.key === 'Enter' && g.target.blur();
    };
  return v.jsx('div', {
    className: An.overlay,
    onClick: s,
    children: v.jsxs('div', {
      className: An.modal,
      onClick: (g) => g.stopPropagation(),
      children: [
        v.jsx('h2', { className: An.title, children: 'Edit Worldview' }),
        v.jsxs('div', {
          className: An.nameSection,
          children: [
            v.jsx('label', { className: An.nameLabel, children: 'Name' }),
            v.jsx('input', {
              type: 'text',
              value: c,
              onChange: p,
              onBlur: h,
              onKeyDown: m,
              className: An.nameInput,
              placeholder: 'Enter worldview name',
            }),
          ],
        }),
        v.jsxs('div', {
          className: An.buttons,
          children: [
            v.jsx('button', {
              onClick: l,
              className: `btn btn-primary ${An.button}`,
              children: 'Edit Answers',
            }),
            v.jsx('button', {
              onClick: s,
              className: `btn btn-secondary ${An.button}`,
              children: 'Cancel',
            }),
          ],
        }),
      ],
    }),
  });
}
function Kk(n) {
  const i = document.createElement('textarea');
  ((i.value = n),
    document.body.appendChild(i),
    i.select(),
    document.execCommand('copy'),
    document.body.removeChild(i));
}
function sh({
  worldviews: n,
  activeWorldviewId: i,
  selectedCalculations: l,
  worldviewNames: s,
  marketplaceBudget: u,
}) {
  const [c, d] = U.useState(!1),
    [p, h] = U.useState(!1),
    [m, g] = U.useState(null),
    w = U.useCallback(async () => {
      var T;
      g(null);
      const x = {};
      for (const [O, P] of Object.entries(n)) {
        const F = {};
        for (const [M, te] of Object.entries(P.questions))
          F[M] = {
            credences: te.credences,
            inputMode: te.inputMode,
            lockedKeys: te.lockedKeys,
            originalCredences: te.originalCredences,
          };
        x[O] = { questions: F, completed: P.completed || !1 };
      }
      h(!0);
      const I = Pg(x, i, { selectedCalculations: l, worldviewNames: s, marketplaceBudget: u }).then(
        ({ url: O }) => O
      );
      try {
        if ((T = navigator.clipboard) != null && T.write && typeof ClipboardItem < 'u') {
          const O = I.then((P) => new Blob([P], { type: 'text/plain' }));
          await navigator.clipboard.write([new ClipboardItem({ 'text/plain': O })]);
        } else {
          const O = await I;
          try {
            await navigator.clipboard.writeText(O);
          } catch {
            Kk(O);
          }
        }
        (d(!0), window.setTimeout(() => d(!1), 2e3));
      } catch (O) {
        (g(O.message || 'Failed to create share link'), window.setTimeout(() => g(null), 5e3));
      } finally {
        h(!1);
      }
    }, [n, i, l, s, u]);
  return { copied: c, loading: p, error: m, handleShare: w };
}
const Gk = '_container_iqh3p_3',
  Yk = '_heading_iqh3p_9',
  Xk = '_subtitle_iqh3p_17',
  Jk = '_alert_iqh3p_26',
  Zk = '_slotsGrid_iqh3p_53',
  ex = '_slotCard_iqh3p_69',
  tx = '_slotCardEmpty_iqh3p_90',
  nx = '_slotCardFilled_iqh3p_94',
  rx = '_slotNumber_iqh3p_104',
  ix = '_slotName_iqh3p_112',
  lx = '_slotStatus_iqh3p_117',
  ox = '_slotStatusEmpty_iqh3p_123',
  sx = '_slotStatusFilled_iqh3p_127',
  ax = '_slotCheckmark_iqh3p_132',
  ux = '_slotCardAdd_iqh3p_139',
  cx = '_addIcon_iqh3p_152',
  dx = '_addLabel_iqh3p_156',
  fx = '_marketplaceSection_iqh3p_163',
  px = '_marketplaceButton_iqh3p_172',
  hx = '_marketplaceHint_iqh3p_183',
  et = {
    container: Gk,
    heading: Yk,
    subtitle: Xk,
    alert: Jk,
    slotsGrid: Zk,
    slotCard: ex,
    slotCardEmpty: tx,
    slotCardFilled: nx,
    slotNumber: rx,
    slotName: ix,
    slotStatus: lx,
    slotStatusEmpty: ox,
    slotStatusFilled: sx,
    slotCheckmark: ax,
    slotCardAdd: ux,
    addIcon: cx,
    addLabel: dx,
    marketplaceSection: fx,
    marketplaceButton: px,
    marketplaceHint: hx,
  };
function mx() {
  var ue, ae, de, Z, W, pe;
  const {
      worldviewIds: n,
      worldviewNames: i,
      completedMap: l,
      switchWorldview: s,
      startQuiz: u,
      goToStep: c,
      justCompletedWorldview: d,
      clearJustCompletedWorldview: p,
      worldviews: h,
      activeWorldviewId: m,
      selectedCalculations: g,
      marketplaceBudget: w,
      canAddWorldview: x,
      addWorldview: k,
    } = hn(),
    [I, T] = U.useState(null);
  sh({
    worldviews: h,
    activeWorldviewId: m,
    selectedCalculations: g,
    worldviewNames: i,
    marketplaceBudget: w,
  });
  const O = !!d,
    P = d ? `${i[d] || `Worldview ${d}`} completed!` : '';
  U.useEffect(() => {
    if (d) {
      const H = setTimeout(() => p(), 3e3);
      return () => clearTimeout(H);
    }
  }, [d, p]);
  const M = n.filter((H) => l[H]).length >= 2,
    te = (H) => {
      l[H] ? T(H) : (s(H), u());
    },
    ne = () => {
      (I && (s(I), u()), T(null));
    },
    A = () => {
      T(null);
    },
    V = () => {
      c('marketplace');
    };
  return v.jsxs('div', {
    className: 'screen',
    children: [
      v.jsx(Bn, {}),
      O && v.jsx('div', { className: et.alert, children: P }),
      v.jsx('main', {
        className: 'screen-main',
        children: v.jsxs('div', {
          className: et.container,
          children: [
            v.jsx('h1', {
              className: et.heading,
              children: (ue = se.hub) == null ? void 0 : ue.heading,
            }),
            v.jsx('p', {
              className: et.subtitle,
              children: (ae = se.hub) == null ? void 0 : ae.subtitle,
            }),
            v.jsxs('div', {
              className: et.slotsGrid,
              children: [
                n.map((H) => {
                  const q = l[H],
                    me = i[H] || `Worldview ${H}`;
                  return v.jsxs(
                    'div',
                    {
                      className: `${et.slotCard} ${q ? et.slotCardFilled : et.slotCardEmpty}`,
                      onClick: () => te(H),
                      role: 'button',
                      tabIndex: 0,
                      onKeyDown: (fe) => {
                        (fe.key === 'Enter' || fe.key === ' ') && te(H);
                      },
                      children: [
                        v.jsxs('span', { className: et.slotNumber, children: ['Slot ', H] }),
                        v.jsx('span', { className: et.slotName, children: me }),
                        q
                          ? v.jsxs(v.Fragment, {
                              children: [
                                v.jsx('span', { className: et.slotCheckmark, children: '✓' }),
                                v.jsx('span', {
                                  className: `${et.slotStatus} ${et.slotStatusFilled}`,
                                  children: 'Click to edit',
                                }),
                              ],
                            })
                          : v.jsx('span', {
                              className: `${et.slotStatus} ${et.slotStatusEmpty}`,
                              children: 'Click to define',
                            }),
                      ],
                    },
                    H
                  );
                }),
                x &&
                  v.jsxs('div', {
                    className: `${et.slotCard} ${et.slotCardAdd}`,
                    onClick: k,
                    role: 'button',
                    tabIndex: 0,
                    onKeyDown: (H) => {
                      (H.key === 'Enter' || H.key === ' ') && k();
                    },
                    children: [
                      v.jsx(Jg, { size: 32, className: et.addIcon }),
                      v.jsx('span', {
                        className: et.addLabel,
                        children: (de = se.hub) == null ? void 0 : de.addWorldview,
                      }),
                    ],
                  }),
              ],
            }),
            v.jsxs('div', {
              className: et.marketplaceSection,
              children: [
                v.jsx('button', {
                  className: `btn btn-primary ${et.marketplaceButton}`,
                  onClick: V,
                  disabled: !M,
                  children: (Z = se.hub) == null ? void 0 : Z.marketplaceButton,
                }),
                !M &&
                  v.jsx('p', {
                    className: et.marketplaceHint,
                    children: (W = se.hub) == null ? void 0 : W.marketplaceHint,
                  }),
                (pe = Qt.ui) == null ? void 0 : pe.shareResults,
              ],
            }),
          ],
        }),
      }),
      I &&
        v.jsx(Qk, {
          worldviewId: I,
          worldviewName: i[I] || `Worldview ${I}`,
          onEditAnswers: ne,
          onClose: A,
        }),
    ],
  });
}
const ai = ({ percentage: n }) =>
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
  wx = '_active_yn8i0_29',
  kx = '_sliders_yn8i0_35',
  Er = { modeToggle: gx, button: yx, options: vx, active: wx, sliders: kx },
  xx = ({ mode: n, setMode: i }) =>
    v.jsxs('div', {
      className: Er.modeToggle,
      children: [
        v.jsx('button', {
          onClick: () => i('options'),
          className: `${Er.button} ${Er.options} ${n === 'options' ? Er.active : ''}`,
          children: se.questionScreen.modeToggle.pickOne,
        }),
        v.jsxs('button', {
          onClick: () => i('sliders'),
          className: `${Er.button} ${Er.sliders} ${n === 'sliders' ? Er.active : ''}`,
          children: [v.jsx(ty, { size: 14 }), se.questionScreen.modeToggle.customMix],
        }),
      ],
    }),
  Sx = '_wrapper_h2uk9_1',
  _x = '_trigger_h2uk9_7',
  Cx = '_popover_h2uk9_27',
  Ex = '_popoverVisible_h2uk9_62',
  go = { wrapper: Sx, trigger: _x, popover: Cx, popoverVisible: Ex };
function Fn({ content: n, size: i = 14 }) {
  const [l, s] = U.useState(!1),
    [u, c] = U.useState({ top: 0, left: 0 }),
    d = U.useRef(null),
    p = U.useRef(null),
    h = U.useRef(null),
    m = U.useCallback(() => {
      var F;
      if (!d.current) return;
      const x = d.current.getBoundingClientRect(),
        k = ((F = p.current) == null ? void 0 : F.offsetWidth) || 400,
        I = window.innerWidth,
        T = 16;
      let O = x.left + x.width / 2 - k / 2;
      const P = x.bottom + 8;
      (O < T ? (O = T) : O + k > I - T && (O = I - k - T), c({ top: P, left: O }));
    }, []);
  (U.useEffect(() => {
    if (!l) return;
    const x = (k) => {
      h.current && !h.current.contains(k.target) && s(!1);
    };
    return (
      document.addEventListener('mousedown', x),
      document.addEventListener('touchstart', x),
      () => {
        (document.removeEventListener('mousedown', x),
          document.removeEventListener('touchstart', x));
      }
    );
  }, [l]),
    U.useEffect(() => {
      l && m();
    }, [l, m]));
  const g = U.useCallback(() => {
      m();
    }, [m]),
    w = U.useCallback(
      (x) => {
        (x.preventDefault(), x.stopPropagation(), m(), s((k) => !k));
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
            onTouchStart: w,
            'aria-label': 'More information',
            children: v.jsx(Kg, { size: i }),
          }),
          v.jsx('span', {
            ref: p,
            className: `${go.popover} ${l ? go.popoverVisible : ''}`,
            style: { top: u.top, left: u.left },
            children: v.jsx(Tr, {
              components: {
                a: ({ href: x, children: k }) =>
                  v.jsx('a', {
                    href: x,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    children: k,
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
  Mn = {
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
      const w = Object.fromEntries(Object.keys(u).map((x) => [x, x === s ? 100 : 0]));
      (c(w), p('options'), h && h([]));
    };
  return v.jsx('button', {
    onClick: g,
    className: `${Mn.optionButton} ${m ? Mn.selected : Mn.default}`,
    style: { '--option-color': d },
    children: v.jsxs('div', {
      className: Mn.content,
      children: [
        v.jsxs('div', {
          className: Mn.textContent,
          children: [
            v.jsxs('div', {
              className: `${Mn.label} ${m ? Mn.selected : ''}`,
              children: [n, v.jsx(Fn, { content: l })],
            }),
            v.jsx('div', { className: Mn.description, children: i }),
          ],
        }),
        m && v.jsx('div', { className: Mn.checkmark, children: '✓' }),
      ],
    }),
  });
}
function ah({ credences: n, isLocked: i, lockedKeys: l, onChange: s }) {
  const [u, c] = U.useState(null),
    [d, p] = U.useState(!1),
    h = U.useCallback(() => {
      i || (p(!0), c({ ...n }));
    }, [i, n]),
    m = U.useCallback(
      (w) => {
        if (i || !d) return;
        p(!1);
        const x = parseFloat(w.target.value);
        (s(x, u, !0, l), c(null));
      },
      [i, d, u, l, s]
    ),
    g = U.useCallback(
      (w) => {
        if (i) return;
        const x = parseFloat(w.target.value);
        s(x, u, !1, l);
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
function uh({ sliderKey: n, lockedKeys: i = [], credences: l }) {
  return U.useMemo(() => {
    var x;
    const s = Array.isArray(i) ? i : i ? [i] : [],
      u = s.includes(n),
      c = s.length > 0 && !u,
      d = c ? s.reduce((k, I) => k + (l[I] || 0), 0) : 0,
      p = c ? 100 - d : 100,
      h = c ? `calc(${p}% + ${(50 - p) * 0.16}px)` : null,
      w = Object.keys(l).length - s.length > 2;
    return {
      isLocked: u,
      hasLockedSibling: c,
      lockedValue: d,
      maxAllowed: p,
      thumbOffset: h,
      canLockMore: w,
      featureEnabled: ((x = Qt.ui) == null ? void 0 : x.sliderLock) === !0,
    };
  }, [n, i, l]);
}
const Rx = '_credenceSlider_1cwrq_4',
  Ax = '_header_1cwrq_8',
  Mx = '_label_1cwrq_15',
  Dx = '_description_1cwrq_22',
  zx = '_value_1cwrq_28',
  Fx = '_sliderRow_1cwrq_35',
  Bx = '_sliderContainer_1cwrq_41',
  Wx = '_lockLimit_1cwrq_46',
  $x = '_lockButton_1cwrq_55',
  Ux = '_locked_1cwrq_73',
  Vx = '_lockDisabled_1cwrq_78',
  qx = '_compactSlider_1cwrq_100',
  Hx = '_compactSelection_1cwrq_186',
  Qx = '_selected_1cwrq_204',
  Kx = '_selectionLabel_1cwrq_209',
  Gx = '_selectionIndicator_1cwrq_220',
  Ge = {
    credenceSlider: Rx,
    header: Ax,
    label: Mx,
    description: Dx,
    value: zx,
    sliderRow: Fx,
    sliderContainer: Bx,
    lockLimit: Wx,
    lockButton: $x,
    locked: Ux,
    lockDisabled: Vx,
    compactSlider: qx,
    compactSelection: Hx,
    selected: Qx,
    selectionLabel: Kx,
    selectionIndicator: Gx,
  };
function ch({
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
      hasLockedSibling: w,
      thumbOffset: x,
      canLockMore: k,
      featureEnabled: I,
    } = uh({ sliderKey: p, lockedKeys: h, credences: d }),
    { isDragging: T, dragHandlers: O } = ah({
      credences: d,
      isLocked: g,
      lockedKeys: h,
      onChange: u,
    }),
    P = () => {
      I && (g ? m(h.filter((M) => M !== p)) : k && m([...h, p]));
    },
    F = w
      ? `linear-gradient(to right, ${c} 0%, ${c} ${s}%, rgba(255,255,255,0.15) ${s}%, rgba(255,255,255,0.15) ${x}, rgba(255,255,255,0.08) ${x}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${c} 0%, ${c} ${s}%, rgba(255,255,255,0.15) ${s}%, rgba(255,255,255,0.15) 100%)`;
  return v.jsxs('div', {
    className: Ge.credenceSlider,
    children: [
      v.jsxs('div', {
        className: Ge.header,
        children: [
          v.jsxs('div', {
            children: [
              v.jsxs('div', { className: Ge.label, children: [n, v.jsx(Fn, { content: l })] }),
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
                ...O,
                'data-dragging': T,
                disabled: g,
                style: { background: F, cursor: g ? 'not-allowed' : 'pointer' },
              }),
              w && v.jsx('div', { className: Ge.lockLimit, style: { left: x } }),
            ],
          }),
          I &&
            v.jsx('button', {
              className: `${Ge.lockButton} ${g ? Ge.locked : ''} ${!g && !k ? Ge.lockDisabled : ''}`,
              onClick: P,
              title: g ? se.sliders.unlockTooltip : se.sliders.lockTooltip,
              type: 'button',
              disabled: !g && !k,
              children: v.jsx(pp, { size: 16 }),
            }),
        ],
      }),
    ],
  });
}
const Yx = '_container_g2rou_3',
  Xx = '_categoryLabel_g2rou_8',
  Jx = '_heading_g2rou_16',
  Zx = '_context_g2rou_23',
  eS = '_instructions_g2rou_52',
  tS = '_twoColumnLayout_g2rou_60',
  nS = '_presetCard_g2rou_66',
  rS = '_sliderCard_g2rou_67',
  iS = '_cardTitle_g2rou_74',
  lS = '_presetOption_g2rou_84',
  oS = '_selected_g2rou_101',
  sS = '_presetContent_g2rou_111',
  aS = '_presetTextContent_g2rou_117',
  uS = '_presetName_g2rou_121',
  cS = '_presetDescription_g2rou_133',
  dS = '_presetCheckmark_g2rou_139',
  fS = '_customSeparator_g2rou_154',
  pS = '_customSeparatorText_g2rou_169',
  hS = '_sliderList_g2rou_177',
  mS = '_sliderDisabled_g2rou_183',
  gS = '_sliderReadOnlyNote_g2rou_191',
  yS = '_buttonRow_g2rou_200',
  De = {
    container: Yx,
    categoryLabel: Xx,
    heading: Jx,
    context: Zx,
    instructions: eS,
    twoColumnLayout: tS,
    presetCard: nS,
    sliderCard: rS,
    cardTitle: iS,
    presetOption: lS,
    selected: oS,
    presetContent: sS,
    presetTextContent: aS,
    presetName: uS,
    presetDescription: cS,
    presetCheckmark: dS,
    customSeparator: fS,
    customSeparatorText: pS,
    sliderList: hS,
    sliderDisabled: mS,
    sliderReadOnlyNote: gS,
    buttonRow: yS,
  },
  br = 'custom',
  vS = 300,
  Oa = 8;
function wS() {
  const {
      currentQuestion: n,
      stateMap: i,
      questionNumber: l,
      progressPercentage: s,
      goBack: u,
      goForward: c,
    } = hn(),
    d = n ? i[n.id] : null,
    [p, h] = U.useState(null),
    m = U.useRef(null),
    g = U.useRef(null);
  if (
    (U.useEffect(
      () => () => {
        (m.current && clearTimeout(m.current), g.current && clearTimeout(g.current));
      },
      []
    ),
    !n || !d)
  )
    return null;
  const {
      credences: w,
      setCredences: x,
      lockedKeys: k,
      setLockedKeys: I,
      selectedPreset: T,
      setSelectedPreset: O,
    } = d,
    P = p || w,
    F = n.presets || [],
    M = T && T !== br,
    te = (V) => {
      (m.current && clearTimeout(m.current), g.current && clearTimeout(g.current));
      const ue = { ...w },
        ae = vS / Oa;
      let de = 0;
      const Z = () => {
        de++;
        const W = de / Oa,
          pe = 1 - Math.pow(1 - W, 3),
          H = {};
        for (const q of Object.keys(V)) {
          const me = ue[q] || 0,
            fe = V[q] || 0;
          H[q] = Math.round(me + (fe - me) * pe);
        }
        de < Oa
          ? (h(H), (m.current = setTimeout(Z, ae)))
          : (h({ ...V }), x({ ...V }), (g.current = setTimeout(() => h(null), 50)));
      };
      (h(ue), (m.current = setTimeout(Z, ae)));
    },
    ne = (V) => {
      if ((O(V), V !== br)) {
        const ue = F.find((ae) => ae.id === V);
        ue && te(ue.credences);
      }
      I && I([]);
    },
    A = (V, ue, ae, de, Z) => {
      if (M) return;
      T !== br && O(br);
      const pe = ru(V, ue, ae || p || w, ae, Z),
        H = de ? iu(pe) : pe;
      (h(H),
        g.current && clearTimeout(g.current),
        de
          ? (x(H), (g.current = setTimeout(() => h(null), 50)))
          : (g.current = setTimeout(() => {
              x(H);
            }, 100)));
    };
  return v.jsxs('div', {
    className: 'screen',
    children: [
      v.jsx(Bn, { subtitle: l }),
      v.jsx(ai, { percentage: s }),
      v.jsx('main', {
        className: 'screen-main',
        children: v.jsxs('div', {
          className: De.container,
          children: [
            v.jsx('div', {
              className: De.categoryLabel,
              style: { color: Ja },
              children: n.categoryLabel,
            }),
            v.jsxs('h2', {
              className: De.heading,
              children: [n.heading, v.jsx(Fn, { content: n.info })],
            }),
            n.context &&
              v.jsx('div', { className: De.context, children: v.jsx(Tr, { children: n.context }) }),
            v.jsx('p', {
              className: De.instructions,
              children:
                n.instructionsPreset ||
                'Select a preset or choose Custom to set your own credences.',
            }),
            v.jsxs('div', {
              className: De.twoColumnLayout,
              children: [
                v.jsxs('div', {
                  className: De.presetCard,
                  children: [
                    v.jsx('div', { className: De.cardTitle, children: 'Presets' }),
                    F.map((V) =>
                      v.jsx(
                        'button',
                        {
                          onClick: () => ne(V.id),
                          className: `${De.presetOption} ${T === V.id ? De.selected : ''}`,
                          children: v.jsxs('div', {
                            className: De.presetContent,
                            children: [
                              v.jsxs('div', {
                                className: De.presetTextContent,
                                children: [
                                  v.jsx('div', { className: De.presetName, children: V.name }),
                                  v.jsx('div', {
                                    className: De.presetDescription,
                                    children: V.description,
                                  }),
                                ],
                              }),
                              T === V.id &&
                                v.jsx('div', { className: De.presetCheckmark, children: '✓' }),
                            ],
                          }),
                        },
                        V.id
                      )
                    ),
                    v.jsx('div', {
                      className: De.customSeparator,
                      children: v.jsx('span', {
                        className: De.customSeparatorText,
                        children: 'or',
                      }),
                    }),
                    v.jsx('button', {
                      onClick: () => ne(br),
                      className: `${De.presetOption} ${T === br ? De.selected : ''}`,
                      children: v.jsxs('div', {
                        className: De.presetContent,
                        children: [
                          v.jsxs('div', {
                            className: De.presetTextContent,
                            children: [
                              v.jsx('div', { className: De.presetName, children: 'Custom' }),
                              v.jsx('div', {
                                className: De.presetDescription,
                                children: 'Set your own credences using the sliders',
                              }),
                            ],
                          }),
                          T === br &&
                            v.jsx('div', { className: De.presetCheckmark, children: '✓' }),
                        ],
                      }),
                    }),
                  ],
                }),
                v.jsxs('div', {
                  className: De.sliderCard,
                  children: [
                    v.jsxs('div', {
                      className: De.cardTitle,
                      children: [se.credences.title, v.jsx(Fn, { content: se.credences.tooltip })],
                    }),
                    v.jsx('div', {
                      className: `${De.sliderList} ${M ? De.sliderDisabled : ''}`,
                      children: n.options.map((V) =>
                        v.jsx(
                          ch,
                          {
                            label: V.label,
                            description: V.description,
                            info: V.info,
                            value: P[V.key],
                            onChange: (ue, ae, de, Z) => {
                              A(V.key, ue, ae, de, Z);
                            },
                            color: V.color,
                            credences: P,
                            sliderKey: V.key,
                            lockedKeys: k,
                            setLockedKeys: M ? () => {} : I,
                          },
                          V.key
                        )
                      ),
                    }),
                    M &&
                      v.jsx('div', {
                        className: De.sliderReadOnlyNote,
                        children: 'Select "Custom" to adjust sliders manually',
                      }),
                  ],
                }),
              ],
            }),
            v.jsxs('div', {
              className: De.buttonRow,
              children: [
                v.jsx('button', {
                  onClick: u,
                  className: 'btn btn-secondary',
                  children: se.navigation.back,
                }),
                v.jsx('button', {
                  onClick: c,
                  className: 'btn btn-primary',
                  children: se.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const kS = '_container_kq5as_3',
  xS = '_categoryLabel_kq5as_8',
  SS = '_heading_kq5as_16',
  _S = '_context_kq5as_23',
  CS = '_instructions_kq5as_52',
  ES = '_credencesHeader_kq5as_59',
  bS = '_buttonRow_kq5as_68',
  Nr = {
    container: kS,
    categoryLabel: xS,
    heading: SS,
    context: _S,
    instructions: CS,
    credencesHeader: ES,
    buttonRow: bS,
  };
function NS(n, i, l) {
  return n === tt.SELECTION ? 'options' : n === tt.CREDENCE ? 'sliders' : i;
}
function IS() {
  const {
    currentQuestion: n,
    stateMap: i,
    questionNumber: l,
    progressPercentage: s,
    goBack: u,
    goForward: c,
  } = hn();
  if (!n) return null;
  if (n.type === tt.PRESET) return v.jsx(wS, {});
  const d = i[n.id];
  if (!d) return null;
  const {
      credences: p,
      setCredences: h,
      inputMode: m,
      setInputMode: g,
      lockedKeys: w,
      setLockedKeys: x,
    } = d,
    k = n.type || tt.DEFAULT,
    I = k === tt.DEFAULT,
    T = NS(k, m),
    P =
      k === tt.SELECTION
        ? n.instructionsSelection || 'Choose the option that best represents your position.'
        : T === 'options'
          ? n.instructionsOptions
          : n.instructionsSliders;
  return v.jsxs('div', {
    className: 'screen',
    children: [
      v.jsx(Bn, { subtitle: l }),
      v.jsx(ai, { percentage: s }),
      v.jsx('main', {
        className: 'screen-main',
        children: v.jsxs('div', {
          className: Nr.container,
          children: [
            v.jsx('div', {
              className: Nr.categoryLabel,
              style: { color: Ja },
              children: n.categoryLabel,
            }),
            v.jsxs('h2', {
              className: Nr.heading,
              children: [n.heading, v.jsx(Fn, { content: n.info })],
            }),
            n.context &&
              v.jsx('div', { className: Nr.context, children: v.jsx(Tr, { children: n.context }) }),
            v.jsx('p', { className: Nr.instructions, children: P }),
            I && v.jsx(xx, { mode: m, setMode: g }),
            v.jsxs('div', {
              className: 'card',
              children: [
                T === 'sliders' &&
                  k === tt.CREDENCE &&
                  v.jsxs('div', {
                    className: Nr.credencesHeader,
                    children: [se.credences.title, v.jsx(Fn, { content: se.credences.tooltip })],
                  }),
                T === 'options'
                  ? n.options.map((F) =>
                      v.jsx(
                        Ox,
                        {
                          label: F.label,
                          description: F.description,
                          info: F.info,
                          optionKey: F.key,
                          credences: p,
                          setCredences: h,
                          color: F.color,
                          setInputMode: g,
                          setLockedKeys: x,
                        },
                        F.key
                      )
                    )
                  : n.options.map((F) =>
                      v.jsx(
                        ch,
                        {
                          label: F.label,
                          description: F.description,
                          info: F.info,
                          value: p[F.key],
                          onChange: (M, te, ne, A) => {
                            const V = ru(F.key, M, p, te, A);
                            h(ne ? iu(V) : V);
                          },
                          color: F.color,
                          credences: p,
                          sliderKey: F.key,
                          lockedKeys: w,
                          setLockedKeys: x,
                        },
                        F.key
                      )
                    ),
              ],
            }),
            v.jsxs('div', {
              className: Nr.buttonRow,
              children: [
                v.jsx('button', {
                  onClick: u,
                  className: 'btn btn-secondary',
                  children: se.navigation.back,
                }),
                v.jsx('button', {
                  onClick: c,
                  className: 'btn btn-primary',
                  children: se.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const TS = '_container_1aw1l_3',
  jS = '_categoryLabel_1aw1l_8',
  LS = '_heading_1aw1l_18',
  PS = '_context_1aw1l_28',
  OS = '_sliderCard_1aw1l_52',
  RS = '_sliderLabels_1aw1l_56',
  AS = '_sliderLabelLeft_1aw1l_64',
  MS = '_sliderLabelRight_1aw1l_70',
  DS = '_sliderContainer_1aw1l_76',
  zS = '_slider_1aw1l_52',
  FS = '_valueDisplay_1aw1l_149',
  BS = '_valueNumber_1aw1l_157',
  WS = '_buttonRow_1aw1l_163',
  Vt = {
    container: TS,
    categoryLabel: jS,
    heading: LS,
    context: PS,
    sliderCard: OS,
    sliderLabels: RS,
    sliderLabelLeft: AS,
    sliderLabelRight: MS,
    sliderContainer: DS,
    slider: zS,
    valueDisplay: FS,
    valueNumber: BS,
    buttonRow: WS,
  };
function $S() {
  var P;
  const {
    currentQuestion: n,
    stateMap: i,
    questionNumber: l,
    progressPercentage: s,
    goBack: u,
    goForward: c,
  } = hn();
  if (!n) return null;
  const d = i[n.id];
  if (!d) return null;
  const { credences: p, setCredences: h } = d,
    m =
      (p == null ? void 0 : p.value) ??
      ((P = n.ratioConfig) == null ? void 0 : P.defaultValue) ??
      0.5,
    { minLabel: g, maxLabel: w } = n.ratioConfig || {},
    x = (F) => {
      const M = parseFloat(F.target.value);
      h({ value: M });
    },
    k = n.displayConfig || n.ratioConfig,
    I = Oy(m, k),
    T = US(I, k.scale, k.min, k.max, k.format, k.suffix),
    O = m * 100;
  return v.jsxs('div', {
    className: 'screen',
    children: [
      v.jsx(Bn, { subtitle: l }),
      v.jsx(ai, { percentage: s }),
      v.jsx('main', {
        className: 'screen-main',
        children: v.jsxs('div', {
          className: Vt.container,
          children: [
            v.jsx('div', {
              className: Vt.categoryLabel,
              style: { color: Ja },
              children: n.categoryLabel,
            }),
            v.jsxs('h2', {
              className: Vt.heading,
              children: [n.heading, v.jsx(Fn, { content: n.info })],
            }),
            n.context &&
              v.jsx('div', { className: Vt.context, children: v.jsx(Tr, { children: n.context }) }),
            v.jsxs('div', {
              className: `card ${Vt.sliderCard}`,
              children: [
                v.jsxs('div', {
                  className: Vt.sliderLabels,
                  children: [
                    v.jsx('span', { className: Vt.sliderLabelLeft, children: g }),
                    v.jsx('span', { className: Vt.sliderLabelRight, children: w }),
                  ],
                }),
                v.jsx('div', {
                  className: Vt.sliderContainer,
                  children: v.jsx('input', {
                    type: 'range',
                    min: '0',
                    max: '1',
                    step: '0.01',
                    value: m,
                    onChange: x,
                    className: Vt.slider,
                    style: { '--slider-progress': `${O}%` },
                  }),
                }),
                v.jsxs('div', {
                  className: Vt.valueDisplay,
                  children: [
                    'Current value: ',
                    v.jsx('span', { className: Vt.valueNumber, children: T }),
                  ],
                }),
              ],
            }),
            v.jsxs('div', {
              className: Vt.buttonRow,
              children: [
                v.jsx('button', {
                  onClick: u,
                  className: 'btn btn-secondary',
                  children: se.navigation.back,
                }),
                v.jsx('button', {
                  onClick: c,
                  className: 'btn btn-primary',
                  children: se.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function US(n, i, l, s, u, c = '') {
  if (u === 'percentage') return `${(n * 100).toFixed(0)}%${c}`;
  if (u === 'multiplier' || i === 'logarithmic') {
    let d;
    return (
      n >= 1e3
        ? (d = `${(n / 1e3).toFixed(1)}k×`)
        : n >= 100
          ? (d = `${Math.round(n)}×`)
          : n >= 10
            ? (d = `${n.toFixed(1)}×`)
            : n >= 1
              ? (d = `${n.toFixed(1)}×`)
              : (d = `${n.toFixed(2)}×`),
      `${d}${c}`
    );
  }
  return l === 0 && s === 1 ? `${(n * 100).toFixed(0)}%${c}` : `${n.toFixed(2)}${c}`;
}
const VS = '_causeBar_1pclx_3',
  qS = '_header_1pclx_7',
  HS = '_name_1pclx_15',
  QS = '_dollarAmount_1pclx_19',
  KS = '_percentage_1pclx_24',
  GS = '_changeIndicator_1pclx_28',
  YS = '_up_1pclx_32',
  XS = '_down_1pclx_36',
  JS = '_barTrack_1pclx_40',
  ZS = '_barOriginal_1pclx_48',
  e_ = '_barFill_1pclx_54',
  t_ = '_barLabel_1pclx_63',
  n_ = '_compact_1pclx_70',
  qt = {
    causeBar: VS,
    header: qS,
    name: HS,
    dollarAmount: QS,
    percentage: KS,
    changeIndicator: GS,
    up: YS,
    down: XS,
    barTrack: JS,
    barOriginal: ZS,
    barFill: e_,
    barLabel: t_,
    compact: n_,
  };
function r_(n) {
  if (n >= 1e6) {
    const i = n / 1e6;
    return `$${i % 1 === 0 ? i.toFixed(0) : i.toFixed(1)}M`;
  }
  return `$${n.toLocaleString()}`;
}
function i_(n, i) {
  const l = i * 0.005;
  return Math.round(n / l) * l;
}
const dh = ({
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
      m = d ? r_(i_((i / 100) * d, d)) : null;
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
  l_ = { target: ny, parliament: zg, handshake: qg, scale: Zg };
function o_({ name: n, size: i = 18, className: l = '' }) {
  const s = l_[n] || fp;
  return v.jsx(s, { size: i, className: l });
}
const s_ = '_resultsContainer_13qwl_3',
  a_ = '_inner_13qwl_11',
  u_ = '_resultsHeader_13qwl_16',
  c_ = '_title_13qwl_21',
  d_ = '_modifiedIndicator_13qwl_27',
  f_ = '_prototypeDisclaimer_13qwl_38',
  p_ = '_budgetRow_13qwl_46',
  h_ = '_resultsGrid_13qwl_52',
  m_ = '_comparisonContainer_13qwl_60',
  g_ = '_originalResults_13qwl_67',
  y_ = '_newResults_13qwl_68',
  v_ = '_comparisonDivider_13qwl_103',
  w_ = '_dividerLine_13qwl_112',
  k_ = '_dividerArrow_13qwl_119',
  x_ = '_compactCard_13qwl_132',
  S_ = '_cardHeader_13qwl_136',
  __ = '_cardIcon_13qwl_140',
  C_ = '_cardTitle_13qwl_146',
  E_ = '_resultCard_13qwl_150',
  b_ = '_cardSubtitle_13qwl_182',
  N_ = '_cardFooter_13qwl_188',
  I_ = '_adjustPanel_13qwl_196',
  T_ = '_adjustHeader_13qwl_204',
  j_ = '_adjustTitle_13qwl_211',
  L_ = '_resetAllButton_13qwl_217',
  P_ = '_panelList_13qwl_234',
  O_ = '_backButtonContainer_13qwl_240',
  R_ = '_calculationSelect_13qwl_286',
  A_ = '_calculationSelectWrapper_13qwl_318',
  M_ = '_calculationSelectContainer_13qwl_331',
  D_ = '_singleResultCard_13qwl_336',
  z_ = '_sideLabel_13qwl_347',
  F_ = '_feedbackCard_13qwl_363',
  B_ = '_emailCopy_13qwl_407',
  Se = {
    resultsContainer: s_,
    inner: a_,
    resultsHeader: u_,
    title: c_,
    modifiedIndicator: d_,
    prototypeDisclaimer: f_,
    budgetRow: p_,
    resultsGrid: h_,
    comparisonContainer: m_,
    originalResults: g_,
    newResults: y_,
    comparisonDivider: v_,
    dividerLine: w_,
    dividerArrow: k_,
    compactCard: x_,
    cardHeader: S_,
    cardIcon: __,
    cardTitle: C_,
    resultCard: E_,
    cardSubtitle: b_,
    cardFooter: N_,
    adjustPanel: I_,
    adjustHeader: T_,
    adjustTitle: j_,
    resetAllButton: L_,
    panelList: P_,
    backButtonContainer: O_,
    calculationSelect: R_,
    calculationSelectWrapper: A_,
    calculationSelectContainer: M_,
    singleResultCard: D_,
    sideLabel: z_,
    feedbackCard: F_,
    emailCopy: B_,
  };
function fh({
  methodKey: n,
  results: i,
  evs: l = null,
  originalResults: s = null,
  causeEntries: u,
  hasChanged: c = !1,
  simpleMode: d = !1,
  budget: p = null,
}) {
  const h = se.results.methods[n],
    m = l
      ? `${h.footerLabel} ${u.map(([g, w]) => `${w.name.slice(0, 2)} ${l[g].toFixed(0)}`).join(' · ')}`
      : h.footerText;
  return v.jsxs('div', {
    className: `${Se.resultCard} ${d ? Se.compactCard : ''}`,
    children: [
      v.jsxs('div', {
        className: Se.cardHeader,
        children: [
          v.jsx('div', { className: Se.cardIcon, children: v.jsx(o_, { name: h.icon, size: 18 }) }),
          v.jsxs('div', {
            children: [
              v.jsx('h3', { className: Se.cardTitle, children: h.title }),
              !d && v.jsx('p', { className: Se.cardSubtitle, children: h.subtitle }),
            ],
          }),
        ],
      }),
      u.map(([g, w]) =>
        v.jsx(
          dh,
          {
            name: w.name,
            percentage: i[g],
            originalPercentage: s == null ? void 0 : s[g],
            color: w.color,
            hasChanged: !d && c,
            simpleMode: d,
            budget: p,
          },
          g
        )
      ),
      !d && v.jsx('div', { className: Se.cardFooter, children: m }),
    ],
  });
}
const W_ = '_container_1tjs1_3',
  $_ = '_title_1tjs1_8',
  U_ = '_body_1tjs1_16',
  V_ = '_buttonRow_1tjs1_25',
  yo = { container: W_, title: $_, body: U_, buttonRow: V_ };
function q_() {
  var k;
  const {
    currentQuestion: n,
    questionNumber: i,
    progressPercentage: l,
    calculationResults: s,
    causesConfig: u,
    goBack: c,
    goForward: d,
    marketplaceBudget: p,
  } = hn();
  if (!n) return null;
  const h = Object.entries(u),
    m = [
      { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
      { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
      { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
      { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
    ],
    g = ((k = Qt.calculations) == null ? void 0 : k.order) || [],
    x = [...m]
      .sort((I, T) => {
        const O = g.indexOf(I.key),
          P = g.indexOf(T.key);
        return O === -1 && P === -1 ? 0 : O === -1 ? 1 : P === -1 ? -1 : O - P;
      })
      .filter((I) => {
        var T;
        return ((T = Qt.calculations) == null ? void 0 : T[I.flag]) === !0;
      });
  return v.jsxs('div', {
    className: 'screen',
    children: [
      v.jsx(Bn, { subtitle: i }),
      v.jsx(ai, { percentage: l }),
      v.jsx('main', {
        className: 'screen-main',
        children: v.jsxs('div', {
          className: yo.container,
          children: [
            v.jsx('h2', { className: yo.title, children: n.title }),
            v.jsx('p', { className: yo.body, children: n.body }),
            v.jsx('div', {
              className: Se.resultsGrid,
              children: x.map((I) =>
                v.jsx(
                  fh,
                  {
                    methodKey: I.key,
                    results: s[I.key],
                    evs: I.hasEvs ? s[I.key].evs : null,
                    causeEntries: h,
                    budget: p,
                  },
                  I.key
                )
              ),
            }),
            v.jsxs('div', {
              className: yo.buttonRow,
              children: [
                v.jsx('button', {
                  onClick: c,
                  className: 'btn btn-secondary',
                  children: se.navigation.back,
                }),
                v.jsx('button', {
                  onClick: d,
                  className: 'btn btn-primary',
                  children: se.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function H_({
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
      canLockMore: w,
      featureEnabled: x,
    } = uh({ sliderKey: c, lockedKeys: d, credences: u }),
    { isDragging: k, dragHandlers: I } = ah({
      credences: u,
      isLocked: h,
      lockedKeys: d,
      onChange: l,
    }),
    T = () => {
      x && (h ? p(d.filter((P) => P !== c)) : w && p([...d, c]));
    },
    O = m
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
                ...I,
                'data-dragging': k,
                disabled: h,
                style: { background: O, cursor: h ? 'not-allowed' : 'pointer' },
              }),
              m && v.jsx('div', { className: Ge.lockLimit, style: { left: g } }),
            ],
          }),
          x &&
            v.jsx('button', {
              className: `${Ge.lockButton} ${h ? Ge.locked : ''} ${!h && !w ? Ge.lockDisabled : ''}`,
              onClick: T,
              title: h ? se.sliders.unlockTooltip : se.sliders.lockTooltip,
              type: 'button',
              disabled: !h && !w,
              children: v.jsx(pp, { size: 14 }),
            }),
        ],
      }),
    ],
  });
}
function Q_({ label: n, color: i, isSelected: l, onSelect: s }) {
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
        children: l && v.jsx(dp, { size: 12, strokeWidth: 3 }),
      }),
    ],
  });
}
const K_ = '_editPanel_ln2er_3',
  G_ = '_expanded_ln2er_11',
  Y_ = '_toggleButton_ln2er_16',
  X_ = '_buttonContent_ln2er_33',
  J_ = '_icon_ln2er_39',
  Z_ = '_title_ln2er_44',
  eC = '_modifiedBadge_ln2er_49',
  tC = '_chevron_ln2er_63',
  nC = '_content_ln2er_67',
  rC = '_footer_ln2er_72',
  iC = '_footerNote_ln2er_79',
  lC = '_resetButton_ln2er_85',
  oC = '_selectionRow_ln2er_104',
  xt = {
    editPanel: K_,
    expanded: G_,
    toggleButton: Y_,
    buttonContent: X_,
    icon: J_,
    title: Z_,
    modifiedBadge: eC,
    chevron: tC,
    content: nC,
    footer: rC,
    footerNote: iC,
    resetButton: lC,
    selectionRow: oC,
  },
  np = 'custom';
function sC({
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
  questionType: g = tt.DEFAULT,
  selectedPreset: w,
  setSelectedPreset: x,
}) {
  const [k, I] = U.useState(null),
    T = U.useRef(null);
  U.useEffect(
    () => () => {
      T.current && clearTimeout(T.current);
    },
    []
  );
  const O = k || l,
    P = u && JSON.stringify(l) !== JSON.stringify(u),
    F = g === tt.SELECTION,
    M = (ne) => {
      const A = {};
      (c.forEach((V) => {
        A[V.key] = V.key === ne ? 100 : 0;
      }),
        s(A));
    },
    te = (ne) => {
      (ne.stopPropagation(), s({ ...u }));
    };
  return v.jsxs('div', {
    className: `${xt.editPanel} ${d ? xt.expanded : ''}`,
    children: [
      v.jsxs('button', {
        onClick: p,
        className: xt.toggleButton,
        children: [
          v.jsxs('div', {
            className: xt.buttonContent,
            children: [
              v.jsx('span', { className: xt.icon, children: i }),
              v.jsx('span', { className: xt.title, children: n }),
              P &&
                v.jsx('span', {
                  className: xt.modifiedBadge,
                  children: se.editPanel.modifiedBadge,
                }),
            ],
          }),
          v.jsx('span', {
            className: xt.chevron,
            children: d ? v.jsx(Wg, { size: 16 }) : v.jsx(Bg, { size: 16 }),
          }),
        ],
      }),
      d &&
        v.jsx('div', {
          className: xt.content,
          children: F
            ? v.jsxs(v.Fragment, {
                children: [
                  v.jsx('div', {
                    className: xt.selectionRow,
                    children: c.map((ne) =>
                      v.jsx(
                        Q_,
                        {
                          label: ne.label,
                          color: ne.color,
                          isSelected: l[ne.key] === 100,
                          onSelect: () => M(ne.key),
                        },
                        ne.key
                      )
                    ),
                  }),
                  v.jsxs('div', {
                    className: xt.footer,
                    children: [
                      v.jsx('span', {
                        className: xt.footerNote,
                        children: se.editPanel.selectionNote || 'Pick one option',
                      }),
                      P &&
                        v.jsxs('button', {
                          onClick: te,
                          className: xt.resetButton,
                          children: [v.jsx(Aa, { size: 10 }), ' ', se.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              })
            : v.jsxs(v.Fragment, {
                children: [
                  c.map((ne) =>
                    v.jsx(
                      H_,
                      {
                        label: ne.label,
                        value: O[ne.key],
                        onChange: (A, V, ue, ae) => {
                          const de = V || k || l,
                            Z = ru(ne.key, A, de, V, ae),
                            W = ue ? iu(Z) : Z;
                          (I(W),
                            x && w !== np && x(np),
                            T.current && clearTimeout(T.current),
                            ue
                              ? (s(W), (T.current = setTimeout(() => I(null), 50)))
                              : (T.current = setTimeout(() => {
                                  s(W);
                                }, 100)));
                        },
                        color: ne.color,
                        credences: O,
                        sliderKey: ne.key,
                        lockedKeys: h,
                        setLockedKeys: m,
                      },
                      ne.key
                    )
                  ),
                  v.jsxs('div', {
                    className: xt.footer,
                    children: [
                      v.jsx('span', {
                        className: xt.footerNote,
                        children: se.editPanel.sliderNote,
                      }),
                      P &&
                        v.jsxs('button', {
                          onClick: te,
                          className: xt.resetButton,
                          children: [v.jsx(Aa, { size: 10 }), ' ', se.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              }),
        }),
    ],
  });
}
var lp;
const aC = ((lp = Qt.ui) == null ? void 0 : lp.moralMarketplace) === !0,
  ni = se.worldviewModal;
function uC({
  worldviewIds: n,
  activeWorldviewId: i,
  hasProgressMap: l,
  worldviewNames: s,
  onSwitch: u,
  onClose: c,
  onMarketplace: d,
  onRename: p,
}) {
  const [h, m] = U.useState(null),
    [g, w] = U.useState('');
  Object.values(l).filter(Boolean).length;
  const x = aC,
    k = (F, M) => {
      (M.stopPropagation(), m(F), w((s == null ? void 0 : s[F]) || `${ni.defaultName} ${F}`));
    },
    I = (F, M) => {
      M.stopPropagation();
      const te = g.trim();
      (te && p && p(F, te), m(null), w(''));
    },
    T = (F) => {
      (F.stopPropagation(), m(null), w(''));
    },
    O = (F, M) => {
      M.key === 'Enter' ? I(F, M) : M.key === 'Escape' && T(M);
    },
    P = (F) => (s == null ? void 0 : s[F]) || `${ni.defaultName} ${F}`;
  return v.jsx('div', {
    className: it.overlay,
    onClick: c,
    children: v.jsxs('div', {
      className: it.modal,
      onClick: (F) => F.stopPropagation(),
      children: [
        v.jsx('h2', { className: it.title, children: ni.title }),
        v.jsx('p', { className: it.message, children: ni.description }),
        v.jsxs('div', {
          className: it.buttons,
          children: [
            n.map((F) => {
              const M = F === i,
                te = l[F],
                ne = h === F,
                A = P(F);
              return v.jsx(
                'div',
                {
                  className: it.worldviewRow,
                  children: ne
                    ? v.jsxs('div', {
                        className: it.editRow,
                        onClick: (V) => V.stopPropagation(),
                        children: [
                          v.jsx('input', {
                            type: 'text',
                            value: g,
                            onChange: (V) => w(V.target.value),
                            onKeyDown: (V) => O(F, V),
                            className: it.editInput,
                            autoFocus: !0,
                            maxLength: 30,
                          }),
                          v.jsx('button', {
                            onClick: (V) => I(F, V),
                            className: it.iconButton,
                            title: 'Save',
                            children: v.jsx(dp, { size: 16 }),
                          }),
                          v.jsx('button', {
                            onClick: T,
                            className: it.iconButton,
                            title: 'Cancel',
                            children: v.jsx(iy, { size: 16 }),
                          }),
                        ],
                      })
                    : v.jsxs(v.Fragment, {
                        children: [
                          v.jsxs('button', {
                            onClick: () => u(F),
                            className: `btn ${M ? 'btn-primary' : 'btn-secondary'} ${it.button} ${it.worldviewButton}`,
                            disabled: M,
                            children: [A, !te && ` ${ni.emptyLabel}`, M && ` ${ni.currentLabel}`],
                          }),
                          te &&
                            p &&
                            v.jsx('button', {
                              onClick: (V) => k(F, V),
                              className: it.iconButton,
                              title: 'Rename',
                              children: v.jsx(Xg, { size: 14 }),
                            }),
                        ],
                      }),
                },
                F
              );
            }),
            x,
          ],
        }),
      ],
    }),
  });
}
const cC = '_description_bffzu_3',
  dC = '_emptyState_bffzu_9',
  fC = '_settingsRow_bffzu_17',
  pC = '_settingsLabel_bffzu_25',
  hC = '_budgetInputWrapper_bffzu_35',
  mC = '_currencyPrefix_bffzu_48',
  gC = '_budgetInput_bffzu_35',
  yC = '_settingsSelect_bffzu_68',
  vC = '_mainCard_bffzu_98',
  wC = '_allocationItem_bffzu_103',
  kC = '_allocationHeader_bffzu_107',
  xC = '_causeName_bffzu_114',
  SC = '_dollarAmount_bffzu_120',
  _C = '_barTrack_bffzu_128',
  CC = '_barFill_bffzu_135',
  EC = '_barLabel_bffzu_144',
  bC = '_breakdownSection_bffzu_150',
  NC = '_breakdownHeading_bffzu_154',
  IC = '_breakdownGrid_bffzu_161',
  TC = '_worldviewCard_bffzu_167',
  jC = '_worldviewHeader_bffzu_174',
  LC = '_worldviewName_bffzu_183',
  PC = '_worldviewShare_bffzu_188',
  Fe = {
    description: cC,
    emptyState: dC,
    settingsRow: fC,
    settingsLabel: pC,
    budgetInputWrapper: hC,
    currencyPrefix: mC,
    budgetInput: gC,
    settingsSelect: yC,
    mainCard: vC,
    allocationItem: wC,
    allocationHeader: kC,
    causeName: xC,
    dollarAmount: SC,
    barTrack: _C,
    barFill: CC,
    barLabel: EC,
    breakdownSection: bC,
    breakdownHeading: NC,
    breakdownGrid: IC,
    worldviewCard: TC,
    worldviewHeader: jC,
    worldviewName: LC,
    worldviewShare: PC,
  };
var op;
const rp = ((op = Qt.ui) == null ? void 0 : op.multipleWorldviews) === !0;
function OC() {
  var gn, Gt, zt;
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
      goToStep: w,
      worldviews: x,
      worldviewNames: k,
      activeWorldviewId: I,
      switchWorldview: T,
      worldviewIds: O,
      hasProgressMap: P,
      startQuiz: F,
      selectedCalculations: M,
      setSelectedCalculations: te,
      setWorldviewName: ne,
      marketplaceBudget: A,
      setMarketplaceBudget: V,
    } = hn(),
    ae = A ?? 1e7,
    [de, Z] = U.useState(ae.toLocaleString()),
    [W, pe] = U.useState(!1),
    [H, q] = U.useState(!1),
    [me, fe] = U.useState(null),
    [G, ie] = U.useState(!1),
    { email: S, copied: N, handleEmailClick: B } = ku(se.results.feedbackEmail),
    _ = Object.entries(i),
    ge = [
      { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
      { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
      { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
      { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
    ],
    ke = ((gn = Qt.calculations) == null ? void 0 : gn.order) || [],
    Ee = [...ge]
      .sort((D, ee) => {
        const Ae = ke.indexOf(D.key),
          We = ke.indexOf(ee.key);
        return Ae === -1 && We === -1 ? 0 : Ae === -1 ? 1 : We === -1 ? -1 : Ae - We;
      })
      .filter((D) => {
        var ee;
        return ((ee = Qt.calculations) == null ? void 0 : ee[D.flag]) === !0;
      });
  U.useEffect(() => {
    if (Ee.length === 0) return;
    const D = Ee[0].key,
      ee = M.left && Ee.some((We) => We.key === M.left),
      Ae = M.right && Ee.some((We) => We.key === M.right);
    (!ee || !Ae) && te({ left: ee ? M.left : D, right: Ae ? M.right : D });
  }, [Ee, M.left, M.right, te]);
  const be = (D, ee) => {
      te({ [D]: ee });
    },
    Ne = (D) => {
      Z(D.target.value);
    },
    qe = () => {
      const D = parseInt(de.replace(/[^0-9]/g, ''), 10);
      !isNaN(D) && D > 0 ? (V(D), Z(D.toLocaleString())) : Z(ae.toLocaleString());
    },
    _t = (D) => {
      D.key === 'Enter' && D.target.blur();
    },
    Wn = (D) => {
      (ie(!1), T(D), P[D] || F());
    },
    on = () => {
      (ie(!1), w('marketplace'));
    },
    He = (D) =>
      D.options.map((ee) => ({
        key: ee.key,
        label: ee.panelLabel,
        short: ee.panelShort,
        color: ee.color,
      })),
    mn = n.filter((D) => D.type !== tt.INTERMISSION),
    bt = (D, ee = !1) =>
      v.jsxs('div', {
        className: Se.calculationSelectWrapper,
        children: [
          v.jsx('select', {
            className: Se.calculationSelect,
            value: M[D] || '',
            onChange: (Ae) => be(D, Ae.target.value),
            children: Ee.map((Ae) =>
              v.jsx('option', { value: Ae.key, children: se.results.methods[Ae.key].title }, Ae.key)
            ),
          }),
          ee && v.jsx(Fn, { content: se.results.calculationSelectTooltip }),
        ],
      }),
    Dt = (D, ee, Ae = !0) => {
      const We = M[ee],
        Yt = Ee.find((J) => J.key === We);
      if (!Yt) return null;
      const z = D == null ? void 0 : D[Yt.key];
      return z
        ? v.jsx(fh, {
            methodKey: Yt.key,
            results: z,
            evs: Yt.hasEvs ? z.evs : null,
            causeEntries: _,
            simpleMode: Ae,
            budget: ae,
          })
        : null;
    };
  return v.jsxs('div', {
    className: Se.resultsContainer,
    children: [
      v.jsx(Bn, {}),
      v.jsx(ai, { percentage: 100 }),
      v.jsxs('div', {
        className: Se.inner,
        children: [
          v.jsxs('div', {
            className: Se.resultsHeader,
            children: [
              v.jsxs('h1', {
                className: Se.title,
                children: [
                  se.results.heading,
                  rp,
                  p &&
                    v.jsx('span', {
                      className: Se.modifiedIndicator,
                      children: se.results.modifiedIndicator,
                    }),
                ],
              }),
              v.jsx('p', {
                className: Se.prototypeDisclaimer,
                children: se.results.prototypeDisclaimer,
              }),
            ],
          }),
          v.jsx('div', {
            className: Se.budgetRow,
            children: v.jsxs('label', {
              className: Fe.settingsLabel,
              children: [
                se.results.budgetLabel,
                v.jsx(Fn, { content: se.results.budgetInfo }),
                v.jsxs('div', {
                  className: Fe.budgetInputWrapper,
                  children: [
                    v.jsx('span', { className: Fe.currencyPrefix, children: '$' }),
                    v.jsx('input', {
                      type: 'text',
                      value: de,
                      onChange: Ne,
                      onBlur: qe,
                      onKeyDown: _t,
                      className: Fe.budgetInput,
                    }),
                  ],
                }),
              ],
            }),
          }),
          v.jsx('div', {
            className: Se.calculationSelectContainer,
            children: p
              ? v.jsxs('div', {
                  className: Se.comparisonContainer,
                  children: [
                    v.jsxs('div', {
                      className: Se.originalResults,
                      children: [
                        v.jsx('div', { className: Se.sideLabel, children: 'Original' }),
                        bt('left', !0),
                        Dt(d, 'left'),
                      ],
                    }),
                    v.jsxs('div', {
                      className: Se.comparisonDivider,
                      children: [
                        v.jsx('div', { className: Se.dividerLine }),
                        v.jsx('div', { className: Se.dividerArrow, children: '→' }),
                        v.jsx('div', { className: Se.dividerLine }),
                      ],
                    }),
                    v.jsxs('div', {
                      className: Se.newResults,
                      children: [
                        v.jsx('div', { className: Se.sideLabel, children: 'Modified' }),
                        bt('right'),
                        Dt(c, 'right'),
                      ],
                    }),
                  ],
                })
              : v.jsxs(v.Fragment, {
                  children: [
                    bt('left', !0),
                    v.jsx('div', { className: Se.singleResultCard, children: Dt(d || c, 'left') }),
                  ],
                }),
          }),
          v.jsxs('div', {
            className: Se.adjustPanel,
            children: [
              v.jsxs('div', {
                className: Se.adjustHeader,
                children: [
                  v.jsx('span', {
                    className: Se.adjustTitle,
                    children: se.results.adjustCredencesHeading,
                  }),
                  p &&
                    v.jsxs('button', {
                      onClick: h,
                      className: Se.resetAllButton,
                      children: [v.jsx(Aa, { size: 10 }), ' ', se.results.resetAllButton],
                    }),
                ],
              }),
              v.jsx('div', {
                className: Se.panelList,
                children: mn.map((D) => {
                  const ee = l[D.id];
                  return ee
                    ? v.jsx(
                        sC,
                        {
                          title: D.editPanelTitle,
                          icon: v.jsx(oh, { name: D.icon, size: 16 }),
                          credences: ee.credences,
                          setCredences: ee.setCredences,
                          originalCredences: ee.originalCredences,
                          configs: He(D),
                          isExpanded: s === D.id,
                          onToggle: () => u(s === D.id ? null : D.id),
                          lockedKeys: ee.lockedKeys,
                          setLockedKeys: ee.setLockedKeys,
                          questionType: D.type,
                          selectedPreset: ee.selectedPreset,
                          setSelectedPreset: ee.setSelectedPreset,
                        },
                        D.id
                      )
                    : null;
                }),
              }),
            ],
          }),
          v.jsxs('div', {
            className: Se.backButtonContainer,
            children: [
              v.jsx('button', {
                onClick: g,
                className: 'btn btn-secondary',
                children: se.navigation.backToQuiz,
              }),
              rp,
              (Gt = Qt.ui) == null ? void 0 : Gt.shareResults,
              (zt = Qt.ui) == null ? void 0 : zt.resetButton,
            ],
          }),
          v.jsx('div', {
            className: Se.feedbackCard,
            children: v.jsx(Tr, {
              components: { a: Su(B, Se.emailCopy) },
              children: xu(se.results.feedbackCard, S, N),
            }),
          }),
        ],
      }),
      G &&
        v.jsx(uC, {
          worldviewIds: O,
          activeWorldviewId: I,
          hasProgressMap: P,
          worldviewNames: k,
          onSwitch: Wn,
          onClose: () => ie(!1),
          onMarketplace: on,
          onRename: ne,
        }),
    ],
  });
}
const RC = So.diminishingReturns;
function ip(n) {
  if (n >= 1e6) {
    const i = n / 1e6;
    return `$${i % 1 === 0 ? i.toFixed(0) : i.toFixed(1)}M`;
  }
  return `$${n.toLocaleString()}`;
}
function AC(n, i) {
  const l = i * 0.005;
  return Math.round(n / l) * l;
}
function MC() {
  var de, Z;
  const {
      worldviews: n,
      worldviewNames: i,
      worldviewIds: l,
      completedMap: s,
      goToStep: u,
      questionsConfig: c,
      marketplaceBudget: d,
      setMarketplaceBudget: p,
      isAdvancedMode: h,
      activeWorldviewId: m,
      selectedCalculations: g,
    } = hn(),
    [w, x] = U.useState(RC),
    [k, I] = U.useState(d.toLocaleString());
  sh({
    worldviews: n,
    activeWorldviewId: m,
    selectedCalculations: g,
    worldviewNames: i,
    marketplaceBudget: d,
  });
  const { email: T, copied: O, handleEmailClick: P } = ku(se.results.feedbackEmail),
    F = Object.entries(zn),
    M = (W) => {
      I(W.target.value);
    },
    te = () => {
      const W = parseInt(k.replace(/[^0-9]/g, ''), 10);
      !isNaN(W) && W > 0 ? (p(W), I(W.toLocaleString())) : I(d.toLocaleString());
    },
    ne = (W) => {
      W.key === 'Enter' && W.target.blur();
    },
    A = l
      .filter((W) => s[W])
      .map((W) => {
        const pe = n[W],
          H = {};
        for (const [me, fe] of Object.entries(pe.questions)) H[me] = fe;
        let q;
        if (h) q = Ry(H, c, { causes: zn });
        else {
          const me = {};
          for (const [fe, G] of Object.entries(pe.questions)) me[fe] = G.credences;
          q = Ly(me, { causes: zn, dimensions: DC(c) });
        }
        return { id: W, name: (i == null ? void 0 : i[W]) || `Worldview ${W}`, evs: q };
      }),
    V = A.length >= 2,
    ue = V ? Py(A, { diminishingReturns: w }) : null,
    ae = () => {
      u(h ? 'hub' : 'results');
    };
  return v.jsxs('div', {
    className: Se.resultsContainer,
    children: [
      v.jsx(Bn, {}),
      v.jsx(ai, { percentage: 100 }),
      v.jsxs('div', {
        className: Se.inner,
        children: [
          v.jsxs('div', {
            className: Se.resultsHeader,
            children: [
              v.jsx('h1', { className: Se.title, children: se.marketplace.heading }),
              v.jsx('p', {
                className: Se.prototypeDisclaimer,
                children: se.results.prototypeDisclaimer,
              }),
              v.jsx('p', { className: Fe.description, children: se.marketplace.description }),
            ],
          }),
          V
            ? v.jsxs(v.Fragment, {
                children: [
                  v.jsxs('div', {
                    className: Fe.settingsRow,
                    children: [
                      v.jsxs('label', {
                        className: Fe.settingsLabel,
                        children: [
                          se.marketplace.budgetLabel,
                          v.jsxs('div', {
                            className: Fe.budgetInputWrapper,
                            children: [
                              v.jsx('span', { className: Fe.currencyPrefix, children: '$' }),
                              v.jsx('input', {
                                type: 'text',
                                value: k,
                                onChange: M,
                                onBlur: te,
                                onKeyDown: ne,
                                className: Fe.budgetInput,
                              }),
                            ],
                          }),
                        ],
                      }),
                      v.jsxs('label', {
                        className: Fe.settingsLabel,
                        children: [
                          se.marketplace.settingsLabel,
                          v.jsx('select', {
                            value: w,
                            onChange: (W) => x(W.target.value),
                            className: Fe.settingsSelect,
                            children: Object.keys(hp).map((W) =>
                              v.jsx(
                                'option',
                                { value: W, children: se.marketplace.diminishingReturns[W] },
                                W
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  v.jsxs('div', {
                    className: `${Se.resultCard} ${Fe.mainCard}`,
                    children: [
                      v.jsx('div', {
                        className: Se.cardHeader,
                        children: v.jsxs('div', {
                          children: [
                            v.jsx('h3', {
                              className: Se.cardTitle,
                              children: 'Combined Allocation',
                            }),
                            v.jsxs('p', {
                              className: Se.cardSubtitle,
                              children: [
                                'Based on ',
                                A.length,
                                ' worldviews •',
                                ' ',
                                ip(d),
                                ' total',
                              ],
                            }),
                          ],
                        }),
                      }),
                      F.map(([W, pe]) => {
                        const H = ue.allocation[W],
                          q = AC((H / 100) * d, d);
                        return v.jsxs(
                          'div',
                          {
                            className: Fe.allocationItem,
                            children: [
                              v.jsxs('div', {
                                className: Fe.allocationHeader,
                                children: [
                                  v.jsx('span', { className: Fe.causeName, children: pe.name }),
                                  v.jsx('span', { className: Fe.dollarAmount, children: ip(q) }),
                                ],
                              }),
                              v.jsx('div', {
                                className: Fe.barTrack,
                                children: v.jsx('div', {
                                  className: Fe.barFill,
                                  style: { width: `${H}%`, background: pe.color },
                                  children:
                                    H > 15 &&
                                    v.jsxs('span', {
                                      className: Fe.barLabel,
                                      children: [H.toFixed(0), '%'],
                                    }),
                                }),
                              }),
                            ],
                          },
                          W
                        );
                      }),
                    ],
                  }),
                  v.jsxs('div', {
                    className: Fe.breakdownSection,
                    children: [
                      v.jsx('h2', {
                        className: Fe.breakdownHeading,
                        children: se.marketplace.worldviewBreakdownHeading,
                      }),
                      v.jsx('div', {
                        className: Fe.breakdownGrid,
                        children: ue.worldviewAllocations.map((W, pe) =>
                          v.jsxs(
                            'div',
                            {
                              className: Fe.worldviewCard,
                              children: [
                                v.jsxs('div', {
                                  className: Fe.worldviewHeader,
                                  children: [
                                    v.jsx('span', {
                                      className: Fe.worldviewName,
                                      children: W.name,
                                    }),
                                    v.jsxs('span', {
                                      className: Fe.worldviewShare,
                                      children: [W.share.toFixed(0), '% budget'],
                                    }),
                                  ],
                                }),
                                F.map(([H, q]) => {
                                  const me = W.share > 0 ? (W.allocation[H] / W.share) * 100 : 0;
                                  return v.jsx(
                                    dh,
                                    {
                                      name: q.name,
                                      percentage: me,
                                      color: q.color,
                                      simpleMode: !0,
                                    },
                                    H
                                  );
                                }),
                              ],
                            },
                            A[pe].id
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              })
            : v.jsx('div', {
                className: Fe.emptyState,
                children: v.jsx('p', { children: se.marketplace.emptyState }),
              }),
          v.jsxs('div', {
            className: Se.backButtonContainer,
            children: [
              v.jsx('button', {
                onClick: ae,
                className: 'btn btn-secondary',
                children: h
                  ? (de = se.hub) == null
                    ? void 0
                    : de.backButton
                  : se.marketplace.backButton,
              }),
              (Z = Qt.ui) == null ? void 0 : Z.shareResults,
            ],
          }),
          v.jsx('div', {
            className: Se.feedbackCard,
            children: v.jsx(Tr, {
              components: { a: Su(P, Se.emailCopy) },
              children: xu(se.results.feedbackCard, T, O),
            }),
          }),
        ],
      }),
    ],
  });
}
function DC(n) {
  return Object.fromEntries(
    n
      .filter((i) => i.type !== 'intermission' && i.worldviewDimension)
      .map((i) => [i.id, i.worldviewDimension])
  );
}
gp(!0);
const zC = {
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
function FC() {
  var d;
  const {
    currentStep: n,
    currentQuestion: i,
    setDebugConfig: l,
    shareUrlError: s,
    isHydrating: u,
  } = hn();
  if (u) return null;
  function c() {
    return n === 'disclaimer'
      ? v.jsx(Ik, {})
      : n === 'welcome'
        ? v.jsx(zk, {})
        : n === 'hub'
          ? v.jsx(mx, {})
          : n === 'results'
            ? v.jsx(OC, {})
            : n === 'marketplace'
              ? v.jsx(MC, {})
              : i
                ? i.type === tt.RATIO
                  ? v.jsx($S, {})
                  : i.type === tt.INTERMISSION
                    ? v.jsx(q_, {})
                    : v.jsx(IS, {})
                : null;
  }
  return v.jsxs(v.Fragment, {
    children: [
      s && v.jsx('div', { style: zC, children: s }),
      c(),
      (d = Qt.developer) == null ? void 0 : d.calculationDebugger,
    ],
  });
}
function BC() {
  return v.jsx(Qy, { children: v.jsx(FC, {}) });
}
mg.createRoot(document.getElementById('root')).render(
  v.jsx(U.StrictMode, { children: v.jsx(BC, {}) })
);
