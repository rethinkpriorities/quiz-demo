(function () {
  const a = document.createElement('link').relList;
  if (a && a.supports && a.supports('modulepreload')) return;
  for (const x of document.querySelectorAll('link[rel="modulepreload"]')) k(x);
  new MutationObserver((x) => {
    for (const E of x)
      if (E.type === 'childList')
        for (const T of E.addedNodes) T.tagName === 'LINK' && T.rel === 'modulepreload' && k(T);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(x) {
    const E = {};
    return (
      x.integrity && (E.integrity = x.integrity),
      x.referrerPolicy && (E.referrerPolicy = x.referrerPolicy),
      x.crossOrigin === 'use-credentials'
        ? (E.credentials = 'include')
        : x.crossOrigin === 'anonymous'
          ? (E.credentials = 'omit')
          : (E.credentials = 'same-origin'),
      E
    );
  }
  function k(x) {
    if (x.ep) return;
    x.ep = !0;
    const E = s(x);
    fetch(x.href, E);
  }
})();
var ts = { exports: {} },
  Br = {},
  ns = { exports: {} },
  se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cc;
function Df() {
  if (cc) return se;
  cc = 1;
  var c = Symbol.for('react.element'),
    a = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    k = Symbol.for('react.strict_mode'),
    x = Symbol.for('react.profiler'),
    E = Symbol.for('react.provider'),
    T = Symbol.for('react.context'),
    j = Symbol.for('react.forward_ref'),
    m = Symbol.for('react.suspense'),
    y = Symbol.for('react.memo'),
    w = Symbol.for('react.lazy'),
    _ = Symbol.iterator;
  function C(h) {
    return h === null || typeof h != 'object'
      ? null
      : ((h = (_ && h[_]) || h['@@iterator']), typeof h == 'function' ? h : null);
  }
  var $ = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Y = Object.assign,
    G = {};
  function D(h, N, le) {
    ((this.props = h), (this.context = N), (this.refs = G), (this.updater = le || $));
  }
  ((D.prototype.isReactComponent = {}),
    (D.prototype.setState = function (h, N) {
      if (typeof h != 'object' && typeof h != 'function' && h != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, h, N, 'setState');
    }),
    (D.prototype.forceUpdate = function (h) {
      this.updater.enqueueForceUpdate(this, h, 'forceUpdate');
    }));
  function X() {}
  X.prototype = D.prototype;
  function re(h, N, le) {
    ((this.props = h), (this.context = N), (this.refs = G), (this.updater = le || $));
  }
  var ie = (re.prototype = new X());
  ((ie.constructor = re), Y(ie, D.prototype), (ie.isPureReactComponent = !0));
  var Z = Array.isArray,
    te = Object.prototype.hasOwnProperty,
    P = { current: null },
    W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(h, N, le) {
    var oe,
      ue = {},
      ae = null,
      me = null;
    if (N != null)
      for (oe in (N.ref !== void 0 && (me = N.ref), N.key !== void 0 && (ae = '' + N.key), N))
        te.call(N, oe) && !W.hasOwnProperty(oe) && (ue[oe] = N[oe]);
    var fe = arguments.length - 2;
    if (fe === 1) ue.children = le;
    else if (1 < fe) {
      for (var z = Array(fe), ee = 0; ee < fe; ee++) z[ee] = arguments[ee + 2];
      ue.children = z;
    }
    if (h && h.defaultProps)
      for (oe in ((fe = h.defaultProps), fe)) ue[oe] === void 0 && (ue[oe] = fe[oe]);
    return { $$typeof: c, type: h, key: ae, ref: me, props: ue, _owner: P.current };
  }
  function Re(h, N) {
    return { $$typeof: c, type: h.type, key: N, ref: h.ref, props: h.props, _owner: h._owner };
  }
  function Ke(h) {
    return typeof h == 'object' && h !== null && h.$$typeof === c;
  }
  function be(h) {
    var N = { '=': '=0', ':': '=2' };
    return (
      '$' +
      h.replace(/[=:]/g, function (le) {
        return N[le];
      })
    );
  }
  var Xe = /\/+/g;
  function De(h, N) {
    return typeof h == 'object' && h !== null && h.key != null ? be('' + h.key) : N.toString(36);
  }
  function He(h, N, le, oe, ue) {
    var ae = typeof h;
    (ae === 'undefined' || ae === 'boolean') && (h = null);
    var me = !1;
    if (h === null) me = !0;
    else
      switch (ae) {
        case 'string':
        case 'number':
          me = !0;
          break;
        case 'object':
          switch (h.$$typeof) {
            case c:
            case a:
              me = !0;
          }
      }
    if (me)
      return (
        (me = h),
        (ue = ue(me)),
        (h = oe === '' ? '.' + De(me, 0) : oe),
        Z(ue)
          ? ((le = ''),
            h != null && (le = h.replace(Xe, '$&/') + '/'),
            He(ue, N, le, '', function (ee) {
              return ee;
            }))
          : ue != null &&
            (Ke(ue) &&
              (ue = Re(
                ue,
                le +
                  (!ue.key || (me && me.key === ue.key)
                    ? ''
                    : ('' + ue.key).replace(Xe, '$&/') + '/') +
                  h
              )),
            N.push(ue)),
        1
      );
    if (((me = 0), (oe = oe === '' ? '.' : oe + ':'), Z(h)))
      for (var fe = 0; fe < h.length; fe++) {
        ae = h[fe];
        var z = oe + De(ae, fe);
        me += He(ae, N, le, z, ue);
      }
    else if (((z = C(h)), typeof z == 'function'))
      for (h = z.call(h), fe = 0; !(ae = h.next()).done; )
        ((ae = ae.value), (z = oe + De(ae, fe++)), (me += He(ae, N, le, z, ue)));
    else if (ae === 'object')
      throw (
        (N = String(h)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (N === '[object Object]' ? 'object with keys {' + Object.keys(h).join(', ') + '}' : N) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return me;
  }
  function Ce(h, N, le) {
    if (h == null) return h;
    var oe = [],
      ue = 0;
    return (
      He(h, oe, '', '', function (ae) {
        return N.call(le, ae, ue++);
      }),
      oe
    );
  }
  function Ne(h) {
    if (h._status === -1) {
      var N = h._result;
      ((N = N()),
        N.then(
          function (le) {
            (h._status === 0 || h._status === -1) && ((h._status = 1), (h._result = le));
          },
          function (le) {
            (h._status === 0 || h._status === -1) && ((h._status = 2), (h._result = le));
          }
        ),
        h._status === -1 && ((h._status = 0), (h._result = N)));
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var pe = { current: null },
    I = { transition: null },
    F = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: I, ReactCurrentOwner: P };
  function U() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (se.Children = {
      map: Ce,
      forEach: function (h, N, le) {
        Ce(
          h,
          function () {
            N.apply(this, arguments);
          },
          le
        );
      },
      count: function (h) {
        var N = 0;
        return (
          Ce(h, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (h) {
        return (
          Ce(h, function (N) {
            return N;
          }) || []
        );
      },
      only: function (h) {
        if (!Ke(h))
          throw Error('React.Children.only expected to receive a single React element child.');
        return h;
      },
    }),
    (se.Component = D),
    (se.Fragment = s),
    (se.Profiler = x),
    (se.PureComponent = re),
    (se.StrictMode = k),
    (se.Suspense = m),
    (se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
    (se.act = U),
    (se.cloneElement = function (h, N, le) {
      if (h == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + h + '.'
        );
      var oe = Y({}, h.props),
        ue = h.key,
        ae = h.ref,
        me = h._owner;
      if (N != null) {
        if (
          (N.ref !== void 0 && ((ae = N.ref), (me = P.current)),
          N.key !== void 0 && (ue = '' + N.key),
          h.type && h.type.defaultProps)
        )
          var fe = h.type.defaultProps;
        for (z in N)
          te.call(N, z) &&
            !W.hasOwnProperty(z) &&
            (oe[z] = N[z] === void 0 && fe !== void 0 ? fe[z] : N[z]);
      }
      var z = arguments.length - 2;
      if (z === 1) oe.children = le;
      else if (1 < z) {
        fe = Array(z);
        for (var ee = 0; ee < z; ee++) fe[ee] = arguments[ee + 2];
        oe.children = fe;
      }
      return { $$typeof: c, type: h.type, key: ue, ref: ae, props: oe, _owner: me };
    }),
    (se.createContext = function (h) {
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
    (se.createElement = B),
    (se.createFactory = function (h) {
      var N = B.bind(null, h);
      return ((N.type = h), N);
    }),
    (se.createRef = function () {
      return { current: null };
    }),
    (se.forwardRef = function (h) {
      return { $$typeof: j, render: h };
    }),
    (se.isValidElement = Ke),
    (se.lazy = function (h) {
      return { $$typeof: w, _payload: { _status: -1, _result: h }, _init: Ne };
    }),
    (se.memo = function (h, N) {
      return { $$typeof: y, type: h, compare: N === void 0 ? null : N };
    }),
    (se.startTransition = function (h) {
      var N = I.transition;
      I.transition = {};
      try {
        h();
      } finally {
        I.transition = N;
      }
    }),
    (se.unstable_act = U),
    (se.useCallback = function (h, N) {
      return pe.current.useCallback(h, N);
    }),
    (se.useContext = function (h) {
      return pe.current.useContext(h);
    }),
    (se.useDebugValue = function () {}),
    (se.useDeferredValue = function (h) {
      return pe.current.useDeferredValue(h);
    }),
    (se.useEffect = function (h, N) {
      return pe.current.useEffect(h, N);
    }),
    (se.useId = function () {
      return pe.current.useId();
    }),
    (se.useImperativeHandle = function (h, N, le) {
      return pe.current.useImperativeHandle(h, N, le);
    }),
    (se.useInsertionEffect = function (h, N) {
      return pe.current.useInsertionEffect(h, N);
    }),
    (se.useLayoutEffect = function (h, N) {
      return pe.current.useLayoutEffect(h, N);
    }),
    (se.useMemo = function (h, N) {
      return pe.current.useMemo(h, N);
    }),
    (se.useReducer = function (h, N, le) {
      return pe.current.useReducer(h, N, le);
    }),
    (se.useRef = function (h) {
      return pe.current.useRef(h);
    }),
    (se.useState = function (h) {
      return pe.current.useState(h);
    }),
    (se.useSyncExternalStore = function (h, N, le) {
      return pe.current.useSyncExternalStore(h, N, le);
    }),
    (se.useTransition = function () {
      return pe.current.useTransition();
    }),
    (se.version = '18.3.1'),
    se
  );
}
var dc;
function hs() {
  return (dc || ((dc = 1), (ns.exports = Df())), ns.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fc;
function Ff() {
  if (fc) return Br;
  fc = 1;
  var c = hs(),
    a = Symbol.for('react.element'),
    s = Symbol.for('react.fragment'),
    k = Object.prototype.hasOwnProperty,
    x = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(j, m, y) {
    var w,
      _ = {},
      C = null,
      $ = null;
    (y !== void 0 && (C = '' + y),
      m.key !== void 0 && (C = '' + m.key),
      m.ref !== void 0 && ($ = m.ref));
    for (w in m) k.call(m, w) && !E.hasOwnProperty(w) && (_[w] = m[w]);
    if (j && j.defaultProps) for (w in ((m = j.defaultProps), m)) _[w] === void 0 && (_[w] = m[w]);
    return { $$typeof: a, type: j, key: C, ref: $, props: _, _owner: x.current };
  }
  return ((Br.Fragment = s), (Br.jsx = T), (Br.jsxs = T), Br);
}
var pc;
function Af() {
  return (pc || ((pc = 1), (ts.exports = Ff())), ts.exports);
}
var d = Af(),
  V = hs(),
  Jl = {},
  rs = { exports: {} },
  ot = {},
  ls = { exports: {} },
  os = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mc;
function Bf() {
  return (
    mc ||
      ((mc = 1),
      (function (c) {
        function a(I, F) {
          var U = I.length;
          I.push(F);
          e: for (; 0 < U; ) {
            var h = (U - 1) >>> 1,
              N = I[h];
            if (0 < x(N, F)) ((I[h] = F), (I[U] = N), (U = h));
            else break e;
          }
        }
        function s(I) {
          return I.length === 0 ? null : I[0];
        }
        function k(I) {
          if (I.length === 0) return null;
          var F = I[0],
            U = I.pop();
          if (U !== F) {
            I[0] = U;
            e: for (var h = 0, N = I.length, le = N >>> 1; h < le; ) {
              var oe = 2 * (h + 1) - 1,
                ue = I[oe],
                ae = oe + 1,
                me = I[ae];
              if (0 > x(ue, U))
                ae < N && 0 > x(me, ue)
                  ? ((I[h] = me), (I[ae] = U), (h = ae))
                  : ((I[h] = ue), (I[oe] = U), (h = oe));
              else if (ae < N && 0 > x(me, U)) ((I[h] = me), (I[ae] = U), (h = ae));
              else break e;
            }
          }
          return F;
        }
        function x(I, F) {
          var U = I.sortIndex - F.sortIndex;
          return U !== 0 ? U : I.id - F.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var E = performance;
          c.unstable_now = function () {
            return E.now();
          };
        } else {
          var T = Date,
            j = T.now();
          c.unstable_now = function () {
            return T.now() - j;
          };
        }
        var m = [],
          y = [],
          w = 1,
          _ = null,
          C = 3,
          $ = !1,
          Y = !1,
          G = !1,
          D = typeof setTimeout == 'function' ? setTimeout : null,
          X = typeof clearTimeout == 'function' ? clearTimeout : null,
          re = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function ie(I) {
          for (var F = s(y); F !== null; ) {
            if (F.callback === null) k(y);
            else if (F.startTime <= I) (k(y), (F.sortIndex = F.expirationTime), a(m, F));
            else break;
            F = s(y);
          }
        }
        function Z(I) {
          if (((G = !1), ie(I), !Y))
            if (s(m) !== null) ((Y = !0), Ne(te));
            else {
              var F = s(y);
              F !== null && pe(Z, F.startTime - I);
            }
        }
        function te(I, F) {
          ((Y = !1), G && ((G = !1), X(B), (B = -1)), ($ = !0));
          var U = C;
          try {
            for (ie(F), _ = s(m); _ !== null && (!(_.expirationTime > F) || (I && !be())); ) {
              var h = _.callback;
              if (typeof h == 'function') {
                ((_.callback = null), (C = _.priorityLevel));
                var N = h(_.expirationTime <= F);
                ((F = c.unstable_now()),
                  typeof N == 'function' ? (_.callback = N) : _ === s(m) && k(m),
                  ie(F));
              } else k(m);
              _ = s(m);
            }
            if (_ !== null) var le = !0;
            else {
              var oe = s(y);
              (oe !== null && pe(Z, oe.startTime - F), (le = !1));
            }
            return le;
          } finally {
            ((_ = null), (C = U), ($ = !1));
          }
        }
        var P = !1,
          W = null,
          B = -1,
          Re = 5,
          Ke = -1;
        function be() {
          return !(c.unstable_now() - Ke < Re);
        }
        function Xe() {
          if (W !== null) {
            var I = c.unstable_now();
            Ke = I;
            var F = !0;
            try {
              F = W(!0, I);
            } finally {
              F ? De() : ((P = !1), (W = null));
            }
          } else P = !1;
        }
        var De;
        if (typeof re == 'function')
          De = function () {
            re(Xe);
          };
        else if (typeof MessageChannel < 'u') {
          var He = new MessageChannel(),
            Ce = He.port2;
          ((He.port1.onmessage = Xe),
            (De = function () {
              Ce.postMessage(null);
            }));
        } else
          De = function () {
            D(Xe, 0);
          };
        function Ne(I) {
          ((W = I), P || ((P = !0), De()));
        }
        function pe(I, F) {
          B = D(function () {
            I(c.unstable_now());
          }, F);
        }
        ((c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (I) {
            I.callback = null;
          }),
          (c.unstable_continueExecution = function () {
            Y || $ || ((Y = !0), Ne(te));
          }),
          (c.unstable_forceFrameRate = function (I) {
            0 > I || 125 < I
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Re = 0 < I ? Math.floor(1e3 / I) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return C;
          }),
          (c.unstable_getFirstCallbackNode = function () {
            return s(m);
          }),
          (c.unstable_next = function (I) {
            switch (C) {
              case 1:
              case 2:
              case 3:
                var F = 3;
                break;
              default:
                F = C;
            }
            var U = C;
            C = F;
            try {
              return I();
            } finally {
              C = U;
            }
          }),
          (c.unstable_pauseExecution = function () {}),
          (c.unstable_requestPaint = function () {}),
          (c.unstable_runWithPriority = function (I, F) {
            switch (I) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                I = 3;
            }
            var U = C;
            C = I;
            try {
              return F();
            } finally {
              C = U;
            }
          }),
          (c.unstable_scheduleCallback = function (I, F, U) {
            var h = c.unstable_now();
            switch (
              (typeof U == 'object' && U !== null
                ? ((U = U.delay), (U = typeof U == 'number' && 0 < U ? h + U : h))
                : (U = h),
              I)
            ) {
              case 1:
                var N = -1;
                break;
              case 2:
                N = 250;
                break;
              case 5:
                N = 1073741823;
                break;
              case 4:
                N = 1e4;
                break;
              default:
                N = 5e3;
            }
            return (
              (N = U + N),
              (I = {
                id: w++,
                callback: F,
                priorityLevel: I,
                startTime: U,
                expirationTime: N,
                sortIndex: -1,
              }),
              U > h
                ? ((I.sortIndex = U),
                  a(y, I),
                  s(m) === null && I === s(y) && (G ? (X(B), (B = -1)) : (G = !0), pe(Z, U - h)))
                : ((I.sortIndex = N), a(m, I), Y || $ || ((Y = !0), Ne(te))),
              I
            );
          }),
          (c.unstable_shouldYield = be),
          (c.unstable_wrapCallback = function (I) {
            var F = C;
            return function () {
              var U = C;
              C = F;
              try {
                return I.apply(this, arguments);
              } finally {
                C = U;
              }
            };
          }));
      })(os)),
    os
  );
}
var hc;
function Uf() {
  return (hc || ((hc = 1), (ls.exports = Bf())), ls.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vc;
function $f() {
  if (vc) return ot;
  vc = 1;
  var c = hs(),
    a = Uf();
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
    x = {};
  function E(e, t) {
    (T(e, t), T(e + 'Capture', t));
  }
  function T(e, t) {
    for (x[e] = t, e = 0; e < t.length; e++) k.add(t[e]);
  }
  var j = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    m = Object.prototype.hasOwnProperty,
    y =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    w = {},
    _ = {};
  function C(e) {
    return m.call(_, e) ? !0 : m.call(w, e) ? !1 : y.test(e) ? (_[e] = !0) : ((w[e] = !0), !1);
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
  function Y(e, t, n, r) {
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
  var D = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      D[e] = new G(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      D[t] = new G(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      D[e] = new G(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        D[e] = new G(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        D[e] = new G(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      D[e] = new G(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      D[e] = new G(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      D[e] = new G(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      D[e] = new G(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var X = /[\-:]([a-z])/g;
  function re(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(X, re);
      D[t] = new G(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(X, re);
        D[t] = new G(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(X, re);
      D[t] = new G(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      D[e] = new G(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (D.xlinkHref = new G('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      D[e] = new G(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function ie(e, t, n, r) {
    var l = D.hasOwnProperty(t) ? D[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (Y(t, n, l, r) && (n = null),
      r || l === null
        ? C(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
  var Z = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    te = Symbol.for('react.element'),
    P = Symbol.for('react.portal'),
    W = Symbol.for('react.fragment'),
    B = Symbol.for('react.strict_mode'),
    Re = Symbol.for('react.profiler'),
    Ke = Symbol.for('react.provider'),
    be = Symbol.for('react.context'),
    Xe = Symbol.for('react.forward_ref'),
    De = Symbol.for('react.suspense'),
    He = Symbol.for('react.suspense_list'),
    Ce = Symbol.for('react.memo'),
    Ne = Symbol.for('react.lazy'),
    pe = Symbol.for('react.offscreen'),
    I = Symbol.iterator;
  function F(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (I && e[I]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var U = Object.assign,
    h;
  function N(e) {
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
  var le = !1;
  function oe(e, t) {
    if (!e || le) return '';
    le = !0;
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
          } catch (S) {
            var r = S;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (S) {
            r = S;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (S) {
          r = S;
        }
        e();
      }
    } catch (S) {
      if (S && r && typeof S.stack == 'string') {
        for (
          var l = S.stack.split(`
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
                  var f =
                    `
` + l[i].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      f.includes('<anonymous>') &&
                      (f = f.replace('<anonymous>', e.displayName)),
                    f
                  );
                }
              while (1 <= i && 0 <= u);
            break;
          }
      }
    } finally {
      ((le = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? N(e) : '';
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return N(e.type);
      case 16:
        return N('Lazy');
      case 13:
        return N('Suspense');
      case 19:
        return N('SuspenseList');
      case 0:
      case 2:
      case 15:
        return ((e = oe(e.type, !1)), e);
      case 11:
        return ((e = oe(e.type.render, !1)), e);
      case 1:
        return ((e = oe(e.type, !0)), e);
      default:
        return '';
    }
  }
  function ae(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case W:
        return 'Fragment';
      case P:
        return 'Portal';
      case Re:
        return 'Profiler';
      case B:
        return 'StrictMode';
      case De:
        return 'Suspense';
      case He:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case be:
          return (e.displayName || 'Context') + '.Consumer';
        case Ke:
          return (e._context.displayName || 'Context') + '.Provider';
        case Xe:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case Ce:
          return ((t = e.displayName || null), t !== null ? t : ae(e.type) || 'Memo');
        case Ne:
          ((t = e._payload), (e = e._init));
          try {
            return ae(e(t));
          } catch {}
      }
    return null;
  }
  function me(e) {
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
        return t === B ? 'StrictMode' : 'Mode';
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
  function z(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function ee(e) {
    var t = z(e) ? 'checked' : 'value',
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
  function ut(e) {
    e._valueTracker || (e._valueTracker = ee(e));
  }
  function pt(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = z(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function fn(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Qt(e, t) {
    var n = t.checked;
    return U({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function bn(e, t) {
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
  function gs(e, t) {
    ((t = t.checked), t != null && ie(e, 'checked', t, !1));
  }
  function uo(e, t) {
    gs(e, t);
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
      ? ao(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && ao(e, t.type, fe(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function ws(e, t, n) {
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
  function ao(e, t, n) {
    (t !== 'number' || fn(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var er = Array.isArray;
  function jn(e, t, n, r) {
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
  function co(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return U({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function _s(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(s(92));
        if (er(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: fe(n) };
  }
  function Ss(e, t) {
    var n = fe(t.value),
      r = fe(t.defaultValue);
    (n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r));
  }
  function ks(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function xs(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function fo(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? xs(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var Hr,
    Es = (function (e) {
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
          Hr = Hr || document.createElement('div'),
            Hr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = Hr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function tr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var nr = {
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
    Bc = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(nr).forEach(function (e) {
    Bc.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (nr[t] = nr[e]));
    });
  });
  function Cs(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (nr.hasOwnProperty(e) && nr[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function Ns(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = Cs(n, t[n], r);
        (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Uc = U(
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
  function po(e, t) {
    if (t) {
      if (Uc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function mo(e, t) {
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
  var ho = null;
  function vo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var yo = null,
    Tn = null,
    On = null;
  function js(e) {
    if ((e = Er(e))) {
      if (typeof yo != 'function') throw Error(s(280));
      var t = e.stateNode;
      t && ((t = pl(t)), yo(e.stateNode, e.type, t));
    }
  }
  function Ts(e) {
    Tn ? (On ? On.push(e) : (On = [e])) : (Tn = e);
  }
  function Os() {
    if (Tn) {
      var e = Tn,
        t = On;
      if (((On = Tn = null), js(e), t)) for (e = 0; e < t.length; e++) js(t[e]);
    }
  }
  function Ls(e, t) {
    return e(t);
  }
  function Is() {}
  var go = !1;
  function Rs(e, t, n) {
    if (go) return e(t, n);
    go = !0;
    try {
      return Ls(e, t, n);
    } finally {
      ((go = !1), (Tn !== null || On !== null) && (Is(), Os()));
    }
  }
  function rr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = pl(n);
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
  var wo = !1;
  if (j)
    try {
      var lr = {};
      (Object.defineProperty(lr, 'passive', {
        get: function () {
          wo = !0;
        },
      }),
        window.addEventListener('test', lr, lr),
        window.removeEventListener('test', lr, lr));
    } catch {
      wo = !1;
    }
  function $c(e, t, n, r, l, o, i, u, f) {
    var S = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, S);
    } catch (L) {
      this.onError(L);
    }
  }
  var or = !1,
    Vr = null,
    Gr = !1,
    _o = null,
    Wc = {
      onError: function (e) {
        ((or = !0), (Vr = e));
      },
    };
  function Qc(e, t, n, r, l, o, i, u, f) {
    ((or = !1), (Vr = null), $c.apply(Wc, arguments));
  }
  function Hc(e, t, n, r, l, o, i, u, f) {
    if ((Qc.apply(this, arguments), or)) {
      if (or) {
        var S = Vr;
        ((or = !1), (Vr = null));
      } else throw Error(s(198));
      Gr || ((Gr = !0), (_o = S));
    }
  }
  function pn(e) {
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
  function Ps(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Ms(e) {
    if (pn(e) !== e) throw Error(s(188));
  }
  function Vc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = pn(e)), t === null)) throw Error(s(188));
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
          if (o === n) return (Ms(l), e);
          if (o === r) return (Ms(l), t);
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
  function zs(e) {
    return ((e = Vc(e)), e !== null ? Ds(e) : null);
  }
  function Ds(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ds(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Fs = a.unstable_scheduleCallback,
    As = a.unstable_cancelCallback,
    Gc = a.unstable_shouldYield,
    qc = a.unstable_requestPaint,
    Te = a.unstable_now,
    Yc = a.unstable_getCurrentPriorityLevel,
    So = a.unstable_ImmediatePriority,
    Bs = a.unstable_UserBlockingPriority,
    qr = a.unstable_NormalPriority,
    Kc = a.unstable_LowPriority,
    Us = a.unstable_IdlePriority,
    Yr = null,
    Tt = null;
  function Xc(e) {
    if (Tt && typeof Tt.onCommitFiberRoot == 'function')
      try {
        Tt.onCommitFiberRoot(Yr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var St = Math.clz32 ? Math.clz32 : bc,
    Zc = Math.log,
    Jc = Math.LN2;
  function bc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Zc(e) / Jc) | 0)) | 0);
  }
  var Kr = 64,
    Xr = 4194304;
  function ir(e) {
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
  function Zr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? (r = ir(u)) : ((o &= i), o !== 0 && (r = ir(o)));
    } else ((i = n & ~l), i !== 0 ? (r = ir(i)) : o !== 0 && (r = ir(o)));
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
        ((n = 31 - St(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function ed(e, t) {
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
  function td(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes;
      0 < o;
    ) {
      var i = 31 - St(o),
        u = 1 << i,
        f = l[i];
      (f === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[i] = ed(u, t))
        : f <= t && (e.expiredLanes |= u),
        (o &= ~u));
    }
  }
  function ko(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function $s() {
    var e = Kr;
    return ((Kr <<= 1), (Kr & 4194240) === 0 && (Kr = 64), e);
  }
  function xo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function sr(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - St(t)),
      (e[t] = n));
  }
  function nd(e, t) {
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
      var l = 31 - St(n),
        o = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o));
    }
  }
  function Eo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - St(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var he = 0;
  function Ws(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Qs,
    Co,
    Hs,
    Vs,
    Gs,
    No = !1,
    Jr = [],
    Ht = null,
    Vt = null,
    Gt = null,
    ur = new Map(),
    ar = new Map(),
    qt = [],
    rd =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function qs(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Ht = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Vt = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Gt = null;
        break;
      case 'pointerover':
      case 'pointerout':
        ur.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        ar.delete(t.pointerId);
    }
  }
  function cr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = Er(t)), t !== null && Co(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function ld(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return ((Ht = cr(Ht, e, t, n, r, l)), !0);
      case 'dragenter':
        return ((Vt = cr(Vt, e, t, n, r, l)), !0);
      case 'mouseover':
        return ((Gt = cr(Gt, e, t, n, r, l)), !0);
      case 'pointerover':
        var o = l.pointerId;
        return (ur.set(o, cr(ur.get(o) || null, e, t, n, r, l)), !0);
      case 'gotpointercapture':
        return ((o = l.pointerId), ar.set(o, cr(ar.get(o) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function Ys(e) {
    var t = mn(e.target);
    if (t !== null) {
      var n = pn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ps(n)), t !== null)) {
            ((e.blockedOn = t),
              Gs(e.priority, function () {
                Hs(n);
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
  function br(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = To(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((ho = r), n.target.dispatchEvent(r), (ho = null));
      } else return ((t = Er(n)), t !== null && Co(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Ks(e, t, n) {
    br(e) && n.delete(t);
  }
  function od() {
    ((No = !1),
      Ht !== null && br(Ht) && (Ht = null),
      Vt !== null && br(Vt) && (Vt = null),
      Gt !== null && br(Gt) && (Gt = null),
      ur.forEach(Ks),
      ar.forEach(Ks));
  }
  function dr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      No || ((No = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, od)));
  }
  function fr(e) {
    function t(l) {
      return dr(l, e);
    }
    if (0 < Jr.length) {
      dr(Jr[0], e);
      for (var n = 1; n < Jr.length; n++) {
        var r = Jr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Ht !== null && dr(Ht, e),
        Vt !== null && dr(Vt, e),
        Gt !== null && dr(Gt, e),
        ur.forEach(t),
        ar.forEach(t),
        n = 0;
      n < qt.length;
      n++
    )
      ((r = qt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < qt.length && ((n = qt[0]), n.blockedOn === null); )
      (Ys(n), n.blockedOn === null && qt.shift());
  }
  var Ln = Z.ReactCurrentBatchConfig,
    el = !0;
  function id(e, t, n, r) {
    var l = he,
      o = Ln.transition;
    Ln.transition = null;
    try {
      ((he = 1), jo(e, t, n, r));
    } finally {
      ((he = l), (Ln.transition = o));
    }
  }
  function sd(e, t, n, r) {
    var l = he,
      o = Ln.transition;
    Ln.transition = null;
    try {
      ((he = 4), jo(e, t, n, r));
    } finally {
      ((he = l), (Ln.transition = o));
    }
  }
  function jo(e, t, n, r) {
    if (el) {
      var l = To(e, t, n, r);
      if (l === null) (Vo(e, t, r, tl, n), qs(e, r));
      else if (ld(l, e, t, n, r)) r.stopPropagation();
      else if ((qs(e, r), t & 4 && -1 < rd.indexOf(e))) {
        for (; l !== null; ) {
          var o = Er(l);
          if (
            (o !== null && Qs(o), (o = To(e, t, n, r)), o === null && Vo(e, t, r, tl, n), o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Vo(e, t, r, null, n);
    }
  }
  var tl = null;
  function To(e, t, n, r) {
    if (((tl = null), (e = vo(r)), (e = mn(e)), e !== null))
      if (((t = pn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ps(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((tl = e), null);
  }
  function Xs(e) {
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
        switch (Yc()) {
          case So:
            return 1;
          case Bs:
            return 4;
          case qr:
          case Kc:
            return 16;
          case Us:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Yt = null,
    Oo = null,
    nl = null;
  function Zs() {
    if (nl) return nl;
    var e,
      t = Oo,
      n = t.length,
      r,
      l = 'value' in Yt ? Yt.value : Yt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (nl = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function rl(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ll() {
    return !0;
  }
  function Js() {
    return !1;
  }
  function at(e) {
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
          ? ll
          : Js),
        (this.isPropagationStopped = Js),
        this
      );
    }
    return (
      U(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = ll));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = ll));
        },
        persist: function () {},
        isPersistent: ll,
      }),
      t
    );
  }
  var In = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Lo = at(In),
    pr = U({}, In, { view: 0, detail: 0 }),
    ud = at(pr),
    Io,
    Ro,
    mr,
    ol = U({}, pr, {
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
      getModifierState: Mo,
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
          : (e !== mr &&
              (mr && e.type === 'mousemove'
                ? ((Io = e.screenX - mr.screenX), (Ro = e.screenY - mr.screenY))
                : (Ro = Io = 0),
              (mr = e)),
            Io);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Ro;
      },
    }),
    bs = at(ol),
    ad = U({}, ol, { dataTransfer: 0 }),
    cd = at(ad),
    dd = U({}, pr, { relatedTarget: 0 }),
    Po = at(dd),
    fd = U({}, In, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    pd = at(fd),
    md = U({}, In, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    hd = at(md),
    vd = U({}, In, { data: 0 }),
    eu = at(vd),
    yd = {
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
    gd = {
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
    wd = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function _d(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = wd[e]) ? !!t[e] : !1;
  }
  function Mo() {
    return _d;
  }
  var Sd = U({}, pr, {
      key: function (e) {
        if (e.key) {
          var t = yd[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = rl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? gd[e.keyCode] || 'Unidentified'
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
      getModifierState: Mo,
      charCode: function (e) {
        return e.type === 'keypress' ? rl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? rl(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    kd = at(Sd),
    xd = U({}, ol, {
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
    tu = at(xd),
    Ed = U({}, pr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Mo,
    }),
    Cd = at(Ed),
    Nd = U({}, In, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    jd = at(Nd),
    Td = U({}, ol, {
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
    Od = at(Td),
    Ld = [9, 13, 27, 32],
    zo = j && 'CompositionEvent' in window,
    hr = null;
  j && 'documentMode' in document && (hr = document.documentMode);
  var Id = j && 'TextEvent' in window && !hr,
    nu = j && (!zo || (hr && 8 < hr && 11 >= hr)),
    ru = ' ',
    lu = !1;
  function ou(e, t) {
    switch (e) {
      case 'keyup':
        return Ld.indexOf(t.keyCode) !== -1;
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
  function iu(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var Rn = !1;
  function Rd(e, t) {
    switch (e) {
      case 'compositionend':
        return iu(t);
      case 'keypress':
        return t.which !== 32 ? null : ((lu = !0), ru);
      case 'textInput':
        return ((e = t.data), e === ru && lu ? null : e);
      default:
        return null;
    }
  }
  function Pd(e, t) {
    if (Rn)
      return e === 'compositionend' || (!zo && ou(e, t))
        ? ((e = Zs()), (nl = Oo = Yt = null), (Rn = !1), e)
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
        return nu && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Md = {
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
  function su(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Md[e.type] : t === 'textarea';
  }
  function uu(e, t, n, r) {
    (Ts(r),
      (t = cl(t, 'onChange')),
      0 < t.length &&
        ((n = new Lo('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
  }
  var vr = null,
    yr = null;
  function zd(e) {
    Nu(e, 0);
  }
  function il(e) {
    var t = Fn(e);
    if (pt(t)) return e;
  }
  function Dd(e, t) {
    if (e === 'change') return t;
  }
  var au = !1;
  if (j) {
    var Do;
    if (j) {
      var Fo = 'oninput' in document;
      if (!Fo) {
        var cu = document.createElement('div');
        (cu.setAttribute('oninput', 'return;'), (Fo = typeof cu.oninput == 'function'));
      }
      Do = Fo;
    } else Do = !1;
    au = Do && (!document.documentMode || 9 < document.documentMode);
  }
  function du() {
    vr && (vr.detachEvent('onpropertychange', fu), (yr = vr = null));
  }
  function fu(e) {
    if (e.propertyName === 'value' && il(yr)) {
      var t = [];
      (uu(t, yr, e, vo(e)), Rs(zd, t));
    }
  }
  function Fd(e, t, n) {
    e === 'focusin'
      ? (du(), (vr = t), (yr = n), vr.attachEvent('onpropertychange', fu))
      : e === 'focusout' && du();
  }
  function Ad(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return il(yr);
  }
  function Bd(e, t) {
    if (e === 'click') return il(t);
  }
  function Ud(e, t) {
    if (e === 'input' || e === 'change') return il(t);
  }
  function $d(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var kt = typeof Object.is == 'function' ? Object.is : $d;
  function gr(e, t) {
    if (kt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!m.call(t, l) || !kt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function pu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function mu(e, t) {
    var n = pu(e);
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
      n = pu(n);
    }
  }
  function hu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? hu(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function vu() {
    for (var e = window, t = fn(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = fn(e.document);
    }
    return t;
  }
  function Ao(e) {
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
  function Wd(e) {
    var t = vu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && hu(n.ownerDocument.documentElement, n)) {
      if (r !== null && Ao(n)) {
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
            (l = mu(n, o)));
          var i = mu(n, r);
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
  var Qd = j && 'documentMode' in document && 11 >= document.documentMode,
    Pn = null,
    Bo = null,
    wr = null,
    Uo = !1;
  function yu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Uo ||
      Pn == null ||
      Pn !== fn(r) ||
      ((r = Pn),
      'selectionStart' in r && Ao(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (wr && gr(wr, r)) ||
        ((wr = r),
        (r = cl(Bo, 'onSelect')),
        0 < r.length &&
          ((t = new Lo('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Pn))));
  }
  function sl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var Mn = {
      animationend: sl('Animation', 'AnimationEnd'),
      animationiteration: sl('Animation', 'AnimationIteration'),
      animationstart: sl('Animation', 'AnimationStart'),
      transitionend: sl('Transition', 'TransitionEnd'),
    },
    $o = {},
    gu = {};
  j &&
    ((gu = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Mn.animationend.animation,
      delete Mn.animationiteration.animation,
      delete Mn.animationstart.animation),
    'TransitionEvent' in window || delete Mn.transitionend.transition);
  function ul(e) {
    if ($o[e]) return $o[e];
    if (!Mn[e]) return e;
    var t = Mn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in gu) return ($o[e] = t[n]);
    return e;
  }
  var wu = ul('animationend'),
    _u = ul('animationiteration'),
    Su = ul('animationstart'),
    ku = ul('transitionend'),
    xu = new Map(),
    Eu =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Kt(e, t) {
    (xu.set(e, t), E(t, [e]));
  }
  for (var Wo = 0; Wo < Eu.length; Wo++) {
    var Qo = Eu[Wo],
      Hd = Qo.toLowerCase(),
      Vd = Qo[0].toUpperCase() + Qo.slice(1);
    Kt(Hd, 'on' + Vd);
  }
  (Kt(wu, 'onAnimationEnd'),
    Kt(_u, 'onAnimationIteration'),
    Kt(Su, 'onAnimationStart'),
    Kt('dblclick', 'onDoubleClick'),
    Kt('focusin', 'onFocus'),
    Kt('focusout', 'onBlur'),
    Kt(ku, 'onTransitionEnd'),
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
  var _r =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Gd = new Set('cancel close invalid load scroll toggle'.split(' ').concat(_r));
  function Cu(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n), Hc(r, t, void 0, e), (e.currentTarget = null));
  }
  function Nu(e, t) {
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
              f = u.instance,
              S = u.currentTarget;
            if (((u = u.listener), f !== o && l.isPropagationStopped())) break e;
            (Cu(l, u, S), (o = f));
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((u = r[i]),
              (f = u.instance),
              (S = u.currentTarget),
              (u = u.listener),
              f !== o && l.isPropagationStopped())
            )
              break e;
            (Cu(l, u, S), (o = f));
          }
      }
    }
    if (Gr) throw ((e = _o), (Gr = !1), (_o = null), e);
  }
  function ge(e, t) {
    var n = t[Zo];
    n === void 0 && (n = t[Zo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (ju(t, e, 2, !1), n.add(r));
  }
  function Ho(e, t, n) {
    var r = 0;
    (t && (r |= 4), ju(n, e, r, t));
  }
  var al = '_reactListening' + Math.random().toString(36).slice(2);
  function Sr(e) {
    if (!e[al]) {
      ((e[al] = !0),
        k.forEach(function (n) {
          n !== 'selectionchange' && (Gd.has(n) || Ho(n, !1, e), Ho(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[al] || ((t[al] = !0), Ho('selectionchange', !1, t));
    }
  }
  function ju(e, t, n, r) {
    switch (Xs(t)) {
      case 1:
        var l = id;
        break;
      case 4:
        l = sd;
        break;
      default:
        l = jo;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !wo || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function Vo(e, t, n, r, l) {
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
              var f = i.tag;
              if (
                (f === 3 || f === 4) &&
                ((f = i.stateNode.containerInfo),
                f === l || (f.nodeType === 8 && f.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (((i = mn(u)), i === null)) return;
            if (((f = i.tag), f === 5 || f === 6)) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    Rs(function () {
      var S = o,
        L = vo(n),
        R = [];
      e: {
        var O = xu.get(e);
        if (O !== void 0) {
          var A = Lo,
            H = e;
          switch (e) {
            case 'keypress':
              if (rl(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              A = kd;
              break;
            case 'focusin':
              ((H = 'focus'), (A = Po));
              break;
            case 'focusout':
              ((H = 'blur'), (A = Po));
              break;
            case 'beforeblur':
            case 'afterblur':
              A = Po;
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
              A = bs;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              A = cd;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              A = Cd;
              break;
            case wu:
            case _u:
            case Su:
              A = pd;
              break;
            case ku:
              A = jd;
              break;
            case 'scroll':
              A = ud;
              break;
            case 'wheel':
              A = Od;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              A = hd;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              A = tu;
          }
          var q = (t & 4) !== 0,
            Oe = !q && e === 'scroll',
            v = q ? (O !== null ? O + 'Capture' : null) : O;
          q = [];
          for (var p = S, g; p !== null; ) {
            g = p;
            var M = g.stateNode;
            if (
              (g.tag === 5 &&
                M !== null &&
                ((g = M), v !== null && ((M = rr(p, v)), M != null && q.push(kr(p, M, g)))),
              Oe)
            )
              break;
            p = p.return;
          }
          0 < q.length && ((O = new A(O, H, null, n, L)), R.push({ event: O, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((O = e === 'mouseover' || e === 'pointerover'),
            (A = e === 'mouseout' || e === 'pointerout'),
            O && n !== ho && (H = n.relatedTarget || n.fromElement) && (mn(H) || H[Pt]))
          )
            break e;
          if (
            (A || O) &&
            ((O =
              L.window === L
                ? L
                : (O = L.ownerDocument)
                  ? O.defaultView || O.parentWindow
                  : window),
            A
              ? ((H = n.relatedTarget || n.toElement),
                (A = S),
                (H = H ? mn(H) : null),
                H !== null &&
                  ((Oe = pn(H)), H !== Oe || (H.tag !== 5 && H.tag !== 6)) &&
                  (H = null))
              : ((A = null), (H = S)),
            A !== H)
          ) {
            if (
              ((q = bs),
              (M = 'onMouseLeave'),
              (v = 'onMouseEnter'),
              (p = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((q = tu), (M = 'onPointerLeave'), (v = 'onPointerEnter'), (p = 'pointer')),
              (Oe = A == null ? O : Fn(A)),
              (g = H == null ? O : Fn(H)),
              (O = new q(M, p + 'leave', A, n, L)),
              (O.target = Oe),
              (O.relatedTarget = g),
              (M = null),
              mn(L) === S &&
                ((q = new q(v, p + 'enter', H, n, L)),
                (q.target = g),
                (q.relatedTarget = Oe),
                (M = q)),
              (Oe = M),
              A && H)
            )
              t: {
                for (q = A, v = H, p = 0, g = q; g; g = zn(g)) p++;
                for (g = 0, M = v; M; M = zn(M)) g++;
                for (; 0 < p - g; ) ((q = zn(q)), p--);
                for (; 0 < g - p; ) ((v = zn(v)), g--);
                for (; p--; ) {
                  if (q === v || (v !== null && q === v.alternate)) break t;
                  ((q = zn(q)), (v = zn(v)));
                }
                q = null;
              }
            else q = null;
            (A !== null && Tu(R, O, A, q, !1), H !== null && Oe !== null && Tu(R, Oe, H, q, !0));
          }
        }
        e: {
          if (
            ((O = S ? Fn(S) : window),
            (A = O.nodeName && O.nodeName.toLowerCase()),
            A === 'select' || (A === 'input' && O.type === 'file'))
          )
            var K = Dd;
          else if (su(O))
            if (au) K = Ud;
            else {
              K = Ad;
              var J = Fd;
            }
          else
            (A = O.nodeName) &&
              A.toLowerCase() === 'input' &&
              (O.type === 'checkbox' || O.type === 'radio') &&
              (K = Bd);
          if (K && (K = K(e, S))) {
            uu(R, K, n, L);
            break e;
          }
          (J && J(e, O, S),
            e === 'focusout' &&
              (J = O._wrapperState) &&
              J.controlled &&
              O.type === 'number' &&
              ao(O, 'number', O.value));
        }
        switch (((J = S ? Fn(S) : window), e)) {
          case 'focusin':
            (su(J) || J.contentEditable === 'true') && ((Pn = J), (Bo = S), (wr = null));
            break;
          case 'focusout':
            wr = Bo = Pn = null;
            break;
          case 'mousedown':
            Uo = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Uo = !1), yu(R, n, L));
            break;
          case 'selectionchange':
            if (Qd) break;
          case 'keydown':
          case 'keyup':
            yu(R, n, L);
        }
        var b;
        if (zo)
          e: {
            switch (e) {
              case 'compositionstart':
                var ne = 'onCompositionStart';
                break e;
              case 'compositionend':
                ne = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                ne = 'onCompositionUpdate';
                break e;
            }
            ne = void 0;
          }
        else
          Rn
            ? ou(e, n) && (ne = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (ne = 'onCompositionStart');
        (ne &&
          (nu &&
            n.locale !== 'ko' &&
            (Rn || ne !== 'onCompositionStart'
              ? ne === 'onCompositionEnd' && Rn && (b = Zs())
              : ((Yt = L), (Oo = 'value' in Yt ? Yt.value : Yt.textContent), (Rn = !0))),
          (J = cl(S, ne)),
          0 < J.length &&
            ((ne = new eu(ne, e, null, n, L)),
            R.push({ event: ne, listeners: J }),
            b ? (ne.data = b) : ((b = iu(n)), b !== null && (ne.data = b)))),
          (b = Id ? Rd(e, n) : Pd(e, n)) &&
            ((S = cl(S, 'onBeforeInput')),
            0 < S.length &&
              ((L = new eu('onBeforeInput', 'beforeinput', null, n, L)),
              R.push({ event: L, listeners: S }),
              (L.data = b))));
      }
      Nu(R, t);
    });
  }
  function kr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function cl(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      (l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = rr(e, n)),
        o != null && r.unshift(kr(e, o, l)),
        (o = rr(e, t)),
        o != null && r.push(kr(e, o, l))),
        (e = e.return));
    }
    return r;
  }
  function zn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Tu(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n,
        f = u.alternate,
        S = u.stateNode;
      if (f !== null && f === r) break;
      (u.tag === 5 &&
        S !== null &&
        ((u = S),
        l
          ? ((f = rr(n, o)), f != null && i.unshift(kr(n, f, u)))
          : l || ((f = rr(n, o)), f != null && i.push(kr(n, f, u)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var qd = /\r\n?/g,
    Yd = /\u0000|\uFFFD/g;
  function Ou(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        qd,
        `
`
      )
      .replace(Yd, '');
  }
  function dl(e, t, n) {
    if (((t = Ou(t)), Ou(e) !== t && n)) throw Error(s(425));
  }
  function fl() {}
  var Go = null,
    qo = null;
  function Yo(e, t) {
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
  var Ko = typeof setTimeout == 'function' ? setTimeout : void 0,
    Kd = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Lu = typeof Promise == 'function' ? Promise : void 0,
    Xd =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Lu < 'u'
          ? function (e) {
              return Lu.resolve(null).then(e).catch(Zd);
            }
          : Ko;
  function Zd(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Xo(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$')) {
          if (r === 0) {
            (e.removeChild(l), fr(t));
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = l;
    } while (n);
    fr(t);
  }
  function Xt(e) {
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
  function Iu(e) {
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
  var Dn = Math.random().toString(36).slice(2),
    Ot = '__reactFiber$' + Dn,
    xr = '__reactProps$' + Dn,
    Pt = '__reactContainer$' + Dn,
    Zo = '__reactEvents$' + Dn,
    Jd = '__reactListeners$' + Dn,
    bd = '__reactHandles$' + Dn;
  function mn(e) {
    var t = e[Ot];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Pt] || n[Ot])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Iu(e); e !== null; ) {
            if ((n = e[Ot])) return n;
            e = Iu(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Er(e) {
    return (
      (e = e[Ot] || e[Pt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Fn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function pl(e) {
    return e[xr] || null;
  }
  var Jo = [],
    An = -1;
  function Zt(e) {
    return { current: e };
  }
  function we(e) {
    0 > An || ((e.current = Jo[An]), (Jo[An] = null), An--);
  }
  function ye(e, t) {
    (An++, (Jo[An] = e.current), (e.current = t));
  }
  var Jt = {},
    Ve = Zt(Jt),
    et = Zt(!1),
    hn = Jt;
  function Bn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Jt;
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
  function tt(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function ml() {
    (we(et), we(Ve));
  }
  function Ru(e, t, n) {
    if (Ve.current !== Jt) throw Error(s(168));
    (ye(Ve, t), ye(et, n));
  }
  function Pu(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(s(108, me(e) || 'Unknown', l));
    return U({}, n, r);
  }
  function hl(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jt),
      (hn = Ve.current),
      ye(Ve, e),
      ye(et, et.current),
      !0
    );
  }
  function Mu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    (n
      ? ((e = Pu(e, t, hn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        we(et),
        we(Ve),
        ye(Ve, e))
      : we(et),
      ye(et, n));
  }
  var Mt = null,
    vl = !1,
    bo = !1;
  function zu(e) {
    Mt === null ? (Mt = [e]) : Mt.push(e);
  }
  function ef(e) {
    ((vl = !0), zu(e));
  }
  function bt() {
    if (!bo && Mt !== null) {
      bo = !0;
      var e = 0,
        t = he;
      try {
        var n = Mt;
        for (he = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Mt = null), (vl = !1));
      } catch (l) {
        throw (Mt !== null && (Mt = Mt.slice(e + 1)), Fs(So, bt), l);
      } finally {
        ((he = t), (bo = !1));
      }
    }
    return null;
  }
  var Un = [],
    $n = 0,
    yl = null,
    gl = 0,
    mt = [],
    ht = 0,
    vn = null,
    zt = 1,
    Dt = '';
  function yn(e, t) {
    ((Un[$n++] = gl), (Un[$n++] = yl), (yl = e), (gl = t));
  }
  function Du(e, t, n) {
    ((mt[ht++] = zt), (mt[ht++] = Dt), (mt[ht++] = vn), (vn = e));
    var r = zt;
    e = Dt;
    var l = 32 - St(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var o = 32 - St(t) + l;
    if (30 < o) {
      var i = l - (l % 5);
      ((o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (zt = (1 << (32 - St(t) + l)) | (n << l) | r),
        (Dt = o + e));
    } else ((zt = (1 << o) | (n << l) | r), (Dt = e));
  }
  function ei(e) {
    e.return !== null && (yn(e, 1), Du(e, 1, 0));
  }
  function ti(e) {
    for (; e === yl; ) ((yl = Un[--$n]), (Un[$n] = null), (gl = Un[--$n]), (Un[$n] = null));
    for (; e === vn; )
      ((vn = mt[--ht]),
        (mt[ht] = null),
        (Dt = mt[--ht]),
        (mt[ht] = null),
        (zt = mt[--ht]),
        (mt[ht] = null));
  }
  var ct = null,
    dt = null,
    _e = !1,
    xt = null;
  function Fu(e, t) {
    var n = wt(5, null, null, 0);
    ((n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Au(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (ct = e), (dt = Xt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ct = e), (dt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = vn !== null ? { id: zt, overflow: Dt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = wt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (ct = e),
              (dt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ni(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ri(e) {
    if (_e) {
      var t = dt;
      if (t) {
        var n = t;
        if (!Au(e, t)) {
          if (ni(e)) throw Error(s(418));
          t = Xt(n.nextSibling);
          var r = ct;
          t && Au(e, t) ? Fu(r, n) : ((e.flags = (e.flags & -4097) | 2), (_e = !1), (ct = e));
        }
      } else {
        if (ni(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (_e = !1), (ct = e));
      }
    }
  }
  function Bu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ct = e;
  }
  function wl(e) {
    if (e !== ct) return !1;
    if (!_e) return (Bu(e), (_e = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !Yo(e.type, e.memoizedProps))),
      t && (t = dt))
    ) {
      if (ni(e)) throw (Uu(), Error(s(418)));
      for (; t; ) (Fu(e, t), (t = Xt(t.nextSibling)));
    }
    if ((Bu(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                dt = Xt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        dt = null;
      }
    } else dt = ct ? Xt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Uu() {
    for (var e = dt; e; ) e = Xt(e.nextSibling);
  }
  function Wn() {
    ((dt = ct = null), (_e = !1));
  }
  function li(e) {
    xt === null ? (xt = [e]) : xt.push(e);
  }
  var tf = Z.ReactCurrentBatchConfig;
  function Cr(e, t, n) {
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
  function _l(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        s(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      )
    );
  }
  function $u(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Wu(e) {
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
      return ((v = un(v, p)), (v.index = 0), (v.sibling = null), v);
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
    function u(v, p, g, M) {
      return p === null || p.tag !== 6
        ? ((p = Ki(g, v.mode, M)), (p.return = v), p)
        : ((p = l(p, g)), (p.return = v), p);
    }
    function f(v, p, g, M) {
      var K = g.type;
      return K === W
        ? L(v, p, g.props.children, M, g.key)
        : p !== null &&
            (p.elementType === K ||
              (typeof K == 'object' && K !== null && K.$$typeof === Ne && $u(K) === p.type))
          ? ((M = l(p, g.props)), (M.ref = Cr(v, p, g)), (M.return = v), M)
          : ((M = Hl(g.type, g.key, g.props, null, v.mode, M)),
            (M.ref = Cr(v, p, g)),
            (M.return = v),
            M);
    }
    function S(v, p, g, M) {
      return p === null ||
        p.tag !== 4 ||
        p.stateNode.containerInfo !== g.containerInfo ||
        p.stateNode.implementation !== g.implementation
        ? ((p = Xi(g, v.mode, M)), (p.return = v), p)
        : ((p = l(p, g.children || [])), (p.return = v), p);
    }
    function L(v, p, g, M, K) {
      return p === null || p.tag !== 7
        ? ((p = Cn(g, v.mode, M, K)), (p.return = v), p)
        : ((p = l(p, g)), (p.return = v), p);
    }
    function R(v, p, g) {
      if ((typeof p == 'string' && p !== '') || typeof p == 'number')
        return ((p = Ki('' + p, v.mode, g)), (p.return = v), p);
      if (typeof p == 'object' && p !== null) {
        switch (p.$$typeof) {
          case te:
            return (
              (g = Hl(p.type, p.key, p.props, null, v.mode, g)),
              (g.ref = Cr(v, null, p)),
              (g.return = v),
              g
            );
          case P:
            return ((p = Xi(p, v.mode, g)), (p.return = v), p);
          case Ne:
            var M = p._init;
            return R(v, M(p._payload), g);
        }
        if (er(p) || F(p)) return ((p = Cn(p, v.mode, g, null)), (p.return = v), p);
        _l(v, p);
      }
      return null;
    }
    function O(v, p, g, M) {
      var K = p !== null ? p.key : null;
      if ((typeof g == 'string' && g !== '') || typeof g == 'number')
        return K !== null ? null : u(v, p, '' + g, M);
      if (typeof g == 'object' && g !== null) {
        switch (g.$$typeof) {
          case te:
            return g.key === K ? f(v, p, g, M) : null;
          case P:
            return g.key === K ? S(v, p, g, M) : null;
          case Ne:
            return ((K = g._init), O(v, p, K(g._payload), M));
        }
        if (er(g) || F(g)) return K !== null ? null : L(v, p, g, M, null);
        _l(v, g);
      }
      return null;
    }
    function A(v, p, g, M, K) {
      if ((typeof M == 'string' && M !== '') || typeof M == 'number')
        return ((v = v.get(g) || null), u(p, v, '' + M, K));
      if (typeof M == 'object' && M !== null) {
        switch (M.$$typeof) {
          case te:
            return ((v = v.get(M.key === null ? g : M.key) || null), f(p, v, M, K));
          case P:
            return ((v = v.get(M.key === null ? g : M.key) || null), S(p, v, M, K));
          case Ne:
            var J = M._init;
            return A(v, p, g, J(M._payload), K);
        }
        if (er(M) || F(M)) return ((v = v.get(g) || null), L(p, v, M, K, null));
        _l(p, M);
      }
      return null;
    }
    function H(v, p, g, M) {
      for (
        var K = null, J = null, b = p, ne = (p = 0), Be = null;
        b !== null && ne < g.length;
        ne++
      ) {
        b.index > ne ? ((Be = b), (b = null)) : (Be = b.sibling);
        var de = O(v, b, g[ne], M);
        if (de === null) {
          b === null && (b = Be);
          break;
        }
        (e && b && de.alternate === null && t(v, b),
          (p = o(de, p, ne)),
          J === null ? (K = de) : (J.sibling = de),
          (J = de),
          (b = Be));
      }
      if (ne === g.length) return (n(v, b), _e && yn(v, ne), K);
      if (b === null) {
        for (; ne < g.length; ne++)
          ((b = R(v, g[ne], M)),
            b !== null && ((p = o(b, p, ne)), J === null ? (K = b) : (J.sibling = b), (J = b)));
        return (_e && yn(v, ne), K);
      }
      for (b = r(v, b); ne < g.length; ne++)
        ((Be = A(b, v, ne, g[ne], M)),
          Be !== null &&
            (e && Be.alternate !== null && b.delete(Be.key === null ? ne : Be.key),
            (p = o(Be, p, ne)),
            J === null ? (K = Be) : (J.sibling = Be),
            (J = Be)));
      return (
        e &&
          b.forEach(function (an) {
            return t(v, an);
          }),
        _e && yn(v, ne),
        K
      );
    }
    function q(v, p, g, M) {
      var K = F(g);
      if (typeof K != 'function') throw Error(s(150));
      if (((g = K.call(g)), g == null)) throw Error(s(151));
      for (
        var J = (K = null), b = p, ne = (p = 0), Be = null, de = g.next();
        b !== null && !de.done;
        ne++, de = g.next()
      ) {
        b.index > ne ? ((Be = b), (b = null)) : (Be = b.sibling);
        var an = O(v, b, de.value, M);
        if (an === null) {
          b === null && (b = Be);
          break;
        }
        (e && b && an.alternate === null && t(v, b),
          (p = o(an, p, ne)),
          J === null ? (K = an) : (J.sibling = an),
          (J = an),
          (b = Be));
      }
      if (de.done) return (n(v, b), _e && yn(v, ne), K);
      if (b === null) {
        for (; !de.done; ne++, de = g.next())
          ((de = R(v, de.value, M)),
            de !== null &&
              ((p = o(de, p, ne)), J === null ? (K = de) : (J.sibling = de), (J = de)));
        return (_e && yn(v, ne), K);
      }
      for (b = r(v, b); !de.done; ne++, de = g.next())
        ((de = A(b, v, ne, de.value, M)),
          de !== null &&
            (e && de.alternate !== null && b.delete(de.key === null ? ne : de.key),
            (p = o(de, p, ne)),
            J === null ? (K = de) : (J.sibling = de),
            (J = de)));
      return (
        e &&
          b.forEach(function (zf) {
            return t(v, zf);
          }),
        _e && yn(v, ne),
        K
      );
    }
    function Oe(v, p, g, M) {
      if (
        (typeof g == 'object' &&
          g !== null &&
          g.type === W &&
          g.key === null &&
          (g = g.props.children),
        typeof g == 'object' && g !== null)
      ) {
        switch (g.$$typeof) {
          case te:
            e: {
              for (var K = g.key, J = p; J !== null; ) {
                if (J.key === K) {
                  if (((K = g.type), K === W)) {
                    if (J.tag === 7) {
                      (n(v, J.sibling), (p = l(J, g.props.children)), (p.return = v), (v = p));
                      break e;
                    }
                  } else if (
                    J.elementType === K ||
                    (typeof K == 'object' && K !== null && K.$$typeof === Ne && $u(K) === J.type)
                  ) {
                    (n(v, J.sibling),
                      (p = l(J, g.props)),
                      (p.ref = Cr(v, J, g)),
                      (p.return = v),
                      (v = p));
                    break e;
                  }
                  n(v, J);
                  break;
                } else t(v, J);
                J = J.sibling;
              }
              g.type === W
                ? ((p = Cn(g.props.children, v.mode, M, g.key)), (p.return = v), (v = p))
                : ((M = Hl(g.type, g.key, g.props, null, v.mode, M)),
                  (M.ref = Cr(v, p, g)),
                  (M.return = v),
                  (v = M));
            }
            return i(v);
          case P:
            e: {
              for (J = g.key; p !== null; ) {
                if (p.key === J)
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
              ((p = Xi(g, v.mode, M)), (p.return = v), (v = p));
            }
            return i(v);
          case Ne:
            return ((J = g._init), Oe(v, p, J(g._payload), M));
        }
        if (er(g)) return H(v, p, g, M);
        if (F(g)) return q(v, p, g, M);
        _l(v, g);
      }
      return (typeof g == 'string' && g !== '') || typeof g == 'number'
        ? ((g = '' + g),
          p !== null && p.tag === 6
            ? (n(v, p.sibling), (p = l(p, g)), (p.return = v), (v = p))
            : (n(v, p), (p = Ki(g, v.mode, M)), (p.return = v), (v = p)),
          i(v))
        : n(v, p);
    }
    return Oe;
  }
  var Qn = Wu(!0),
    Qu = Wu(!1),
    Sl = Zt(null),
    kl = null,
    Hn = null,
    oi = null;
  function ii() {
    oi = Hn = kl = null;
  }
  function si(e) {
    var t = Sl.current;
    (we(Sl), (e._currentValue = t));
  }
  function ui(e, t, n) {
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
  function Vn(e, t) {
    ((kl = e),
      (oi = Hn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (nt = !0), (e.firstContext = null)));
  }
  function vt(e) {
    var t = e._currentValue;
    if (oi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Hn === null)) {
        if (kl === null) throw Error(s(308));
        ((Hn = e), (kl.dependencies = { lanes: 0, firstContext: e }));
      } else Hn = Hn.next = e;
    return t;
  }
  var gn = null;
  function ai(e) {
    gn === null ? (gn = [e]) : gn.push(e);
  }
  function Hu(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), ai(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Ft(e, r)
    );
  }
  function Ft(e, t) {
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
  var en = !1;
  function ci(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Vu(e, t) {
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
  function At(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function tn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (ce & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Ft(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), ai(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Ft(e, n)
    );
  }
  function xl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Eo(e, n));
    }
  }
  function Gu(e, t) {
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
  function El(e, t, n, r) {
    var l = e.updateQueue;
    en = !1;
    var o = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var f = u,
        S = f.next;
      ((f.next = null), i === null ? (o = S) : (i.next = S), (i = f));
      var L = e.alternate;
      L !== null &&
        ((L = L.updateQueue),
        (u = L.lastBaseUpdate),
        u !== i && (u === null ? (L.firstBaseUpdate = S) : (u.next = S), (L.lastBaseUpdate = f)));
    }
    if (o !== null) {
      var R = l.baseState;
      ((i = 0), (L = S = f = null), (u = o));
      do {
        var O = u.lane,
          A = u.eventTime;
        if ((r & O) === O) {
          L !== null &&
            (L = L.next =
              {
                eventTime: A,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var H = e,
              q = u;
            switch (((O = t), (A = n), q.tag)) {
              case 1:
                if (((H = q.payload), typeof H == 'function')) {
                  R = H.call(A, R, O);
                  break e;
                }
                R = H;
                break e;
              case 3:
                H.flags = (H.flags & -65537) | 128;
              case 0:
                if (
                  ((H = q.payload), (O = typeof H == 'function' ? H.call(A, R, O) : H), O == null)
                )
                  break e;
                R = U({}, R, O);
                break e;
              case 2:
                en = !0;
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
            L === null ? ((S = L = A), (f = R)) : (L = L.next = A),
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
        (L === null && (f = R),
        (l.baseState = f),
        (l.firstBaseUpdate = S),
        (l.lastBaseUpdate = L),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((i |= l.lane), (l = l.next));
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      ((Sn |= i), (e.lanes = i), (e.memoizedState = R));
    }
  }
  function qu(e, t, n) {
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
  var Nr = {},
    Lt = Zt(Nr),
    jr = Zt(Nr),
    Tr = Zt(Nr);
  function wn(e) {
    if (e === Nr) throw Error(s(174));
    return e;
  }
  function di(e, t) {
    switch ((ye(Tr, t), ye(jr, e), ye(Lt, Nr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : fo(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = fo(t, e)));
    }
    (we(Lt), ye(Lt, t));
  }
  function Gn() {
    (we(Lt), we(jr), we(Tr));
  }
  function Yu(e) {
    wn(Tr.current);
    var t = wn(Lt.current),
      n = fo(t, e.type);
    t !== n && (ye(jr, e), ye(Lt, n));
  }
  function fi(e) {
    jr.current === e && (we(Lt), we(jr));
  }
  var Se = Zt(0);
  function Cl(e) {
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
  var pi = [];
  function mi() {
    for (var e = 0; e < pi.length; e++) pi[e]._workInProgressVersionPrimary = null;
    pi.length = 0;
  }
  var Nl = Z.ReactCurrentDispatcher,
    hi = Z.ReactCurrentBatchConfig,
    _n = 0,
    ke = null,
    Pe = null,
    Fe = null,
    jl = !1,
    Or = !1,
    Lr = 0,
    nf = 0;
  function Ge() {
    throw Error(s(321));
  }
  function vi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!kt(e[n], t[n])) return !1;
    return !0;
  }
  function yi(e, t, n, r, l, o) {
    if (
      ((_n = o),
      (ke = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Nl.current = e === null || e.memoizedState === null ? sf : uf),
      (e = n(r, l)),
      Or)
    ) {
      o = 0;
      do {
        if (((Or = !1), (Lr = 0), 25 <= o)) throw Error(s(301));
        ((o += 1), (Fe = Pe = null), (t.updateQueue = null), (Nl.current = af), (e = n(r, l)));
      } while (Or);
    }
    if (
      ((Nl.current = Ll),
      (t = Pe !== null && Pe.next !== null),
      (_n = 0),
      (Fe = Pe = ke = null),
      (jl = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function gi() {
    var e = Lr !== 0;
    return ((Lr = 0), e);
  }
  function It() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Fe === null ? (ke.memoizedState = Fe = e) : (Fe = Fe.next = e), Fe);
  }
  function yt() {
    if (Pe === null) {
      var e = ke.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Pe.next;
    var t = Fe === null ? ke.memoizedState : Fe.next;
    if (t !== null) ((Fe = t), (Pe = e));
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
        Fe === null ? (ke.memoizedState = Fe = e) : (Fe = Fe.next = e));
    }
    return Fe;
  }
  function Ir(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function wi(e) {
    var t = yt(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Pe,
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
        f = null,
        S = o;
      do {
        var L = S.lane;
        if ((_n & L) === L)
          (f !== null &&
            (f = f.next =
              {
                lane: 0,
                action: S.action,
                hasEagerState: S.hasEagerState,
                eagerState: S.eagerState,
                next: null,
              }),
            (r = S.hasEagerState ? S.eagerState : e(r, S.action)));
        else {
          var R = {
            lane: L,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null,
          };
          (f === null ? ((u = f = R), (i = r)) : (f = f.next = R), (ke.lanes |= L), (Sn |= L));
        }
        S = S.next;
      } while (S !== null && S !== o);
      (f === null ? (i = r) : (f.next = u),
        kt(r, t.memoizedState) || (nt = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = f),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((o = l.lane), (ke.lanes |= o), (Sn |= o), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function _i(e) {
    var t = yt(),
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
      (kt(o, t.memoizedState) || (nt = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, r];
  }
  function Ku() {}
  function Xu(e, t) {
    var n = ke,
      r = yt(),
      l = t(),
      o = !kt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (nt = !0)),
      (r = r.queue),
      Si(bu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Fe !== null && Fe.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Rr(9, Ju.bind(null, n, r, l, t), void 0, null), Ae === null))
        throw Error(s(349));
      (_n & 30) !== 0 || Zu(n, t, l);
    }
    return l;
  }
  function Zu(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ke.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (ke.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Ju(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ea(t) && ta(e));
  }
  function bu(e, t, n) {
    return n(function () {
      ea(t) && ta(e);
    });
  }
  function ea(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !kt(e, n);
    } catch {
      return !0;
    }
  }
  function ta(e) {
    var t = Ft(e, 1);
    t !== null && jt(t, e, 1, -1);
  }
  function na(e) {
    var t = It();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ir,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = of.bind(null, ke, e)),
      [t.memoizedState, e]
    );
  }
  function Rr(e, t, n, r) {
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
  function ra() {
    return yt().memoizedState;
  }
  function Tl(e, t, n, r) {
    var l = It();
    ((ke.flags |= e), (l.memoizedState = Rr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function Ol(e, t, n, r) {
    var l = yt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Pe !== null) {
      var i = Pe.memoizedState;
      if (((o = i.destroy), r !== null && vi(r, i.deps))) {
        l.memoizedState = Rr(t, n, o, r);
        return;
      }
    }
    ((ke.flags |= e), (l.memoizedState = Rr(1 | t, n, o, r)));
  }
  function la(e, t) {
    return Tl(8390656, 8, e, t);
  }
  function Si(e, t) {
    return Ol(2048, 8, e, t);
  }
  function oa(e, t) {
    return Ol(4, 2, e, t);
  }
  function ia(e, t) {
    return Ol(4, 4, e, t);
  }
  function sa(e, t) {
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
  function ua(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), Ol(4, 4, sa.bind(null, t, e), n));
  }
  function ki() {}
  function aa(e, t) {
    var n = yt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vi(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function ca(e, t) {
    var n = yt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function da(e, t, n) {
    return (_n & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (nt = !0)), (e.memoizedState = n))
      : (kt(n, t) || ((n = $s()), (ke.lanes |= n), (Sn |= n), (e.baseState = !0)), t);
  }
  function rf(e, t) {
    var n = he;
    ((he = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = hi.transition;
    hi.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((he = n), (hi.transition = r));
    }
  }
  function fa() {
    return yt().memoizedState;
  }
  function lf(e, t, n) {
    var r = on(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), pa(e)))
      ma(t, n);
    else if (((n = Hu(e, t, n, r)), n !== null)) {
      var l = Je();
      (jt(n, e, r, l), ha(n, t, r));
    }
  }
  function of(e, t, n) {
    var r = on(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (pa(e)) ma(t, l);
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
          if (((l.hasEagerState = !0), (l.eagerState = u), kt(u, i))) {
            var f = t.interleaved;
            (f === null ? ((l.next = l), ai(t)) : ((l.next = f.next), (f.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Hu(e, t, l, r)), n !== null && ((l = Je()), jt(n, e, r, l), ha(n, t, r)));
    }
  }
  function pa(e) {
    var t = e.alternate;
    return e === ke || (t !== null && t === ke);
  }
  function ma(e, t) {
    Or = jl = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function ha(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Eo(e, n));
    }
  }
  var Ll = {
      readContext: vt,
      useCallback: Ge,
      useContext: Ge,
      useEffect: Ge,
      useImperativeHandle: Ge,
      useInsertionEffect: Ge,
      useLayoutEffect: Ge,
      useMemo: Ge,
      useReducer: Ge,
      useRef: Ge,
      useState: Ge,
      useDebugValue: Ge,
      useDeferredValue: Ge,
      useTransition: Ge,
      useMutableSource: Ge,
      useSyncExternalStore: Ge,
      useId: Ge,
      unstable_isNewReconciler: !1,
    },
    sf = {
      readContext: vt,
      useCallback: function (e, t) {
        return ((It().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: vt,
      useEffect: la,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), Tl(4194308, 4, sa.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Tl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Tl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = It();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var r = It();
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
          (e = e.dispatch = lf.bind(null, ke, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = It();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: na,
      useDebugValue: ki,
      useDeferredValue: function (e) {
        return (It().memoizedState = e);
      },
      useTransition: function () {
        var e = na(!1),
          t = e[0];
        return ((e = rf.bind(null, e[1])), (It().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ke,
          l = It();
        if (_e) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), Ae === null)) throw Error(s(349));
          (_n & 30) !== 0 || Zu(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          la(bu.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Rr(9, Ju.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = It(),
          t = Ae.identifierPrefix;
        if (_e) {
          var n = Dt,
            r = zt;
          ((n = (r & ~(1 << (32 - St(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = Lr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':'));
        } else ((n = nf++), (t = ':' + t + 'r' + n.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    uf = {
      readContext: vt,
      useCallback: aa,
      useContext: vt,
      useEffect: Si,
      useImperativeHandle: ua,
      useInsertionEffect: oa,
      useLayoutEffect: ia,
      useMemo: ca,
      useReducer: wi,
      useRef: ra,
      useState: function () {
        return wi(Ir);
      },
      useDebugValue: ki,
      useDeferredValue: function (e) {
        var t = yt();
        return da(t, Pe.memoizedState, e);
      },
      useTransition: function () {
        var e = wi(Ir)[0],
          t = yt().memoizedState;
        return [e, t];
      },
      useMutableSource: Ku,
      useSyncExternalStore: Xu,
      useId: fa,
      unstable_isNewReconciler: !1,
    },
    af = {
      readContext: vt,
      useCallback: aa,
      useContext: vt,
      useEffect: Si,
      useImperativeHandle: ua,
      useInsertionEffect: oa,
      useLayoutEffect: ia,
      useMemo: ca,
      useReducer: _i,
      useRef: ra,
      useState: function () {
        return _i(Ir);
      },
      useDebugValue: ki,
      useDeferredValue: function (e) {
        var t = yt();
        return Pe === null ? (t.memoizedState = e) : da(t, Pe.memoizedState, e);
      },
      useTransition: function () {
        var e = _i(Ir)[0],
          t = yt().memoizedState;
        return [e, t];
      },
      useMutableSource: Ku,
      useSyncExternalStore: Xu,
      useId: fa,
      unstable_isNewReconciler: !1,
    };
  function Et(e, t) {
    if (e && e.defaultProps) {
      ((t = U({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function xi(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : U({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Il = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? pn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Je(),
        l = on(e),
        o = At(r, l);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = tn(e, o, l)),
        t !== null && (jt(t, e, l, r), xl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Je(),
        l = on(e),
        o = At(r, l);
      ((o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = tn(e, o, l)),
        t !== null && (jt(t, e, l, r), xl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Je(),
        r = on(e),
        l = At(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = tn(e, l, r)),
        t !== null && (jt(t, e, r, n), xl(t, e, r)));
    },
  };
  function va(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !gr(n, r) || !gr(l, o)
          : !0
    );
  }
  function ya(e, t, n) {
    var r = !1,
      l = Jt,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = vt(o))
        : ((l = tt(t) ? hn : Ve.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Bn(e, l) : Jt)),
      (t = new t(n, o)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Il),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function ga(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Il.enqueueReplaceState(t, t.state, null));
  }
  function Ei(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), ci(e));
    var o = t.contextType;
    (typeof o == 'object' && o !== null
      ? (l.context = vt(o))
      : ((o = tt(t) ? hn : Ve.current), (l.context = Bn(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == 'function' && (xi(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((t = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount(),
        t !== l.state && Il.enqueueReplaceState(l, l.state, null),
        El(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function qn(e, t) {
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
  function Ci(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ni(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var cf = typeof WeakMap == 'function' ? WeakMap : Map;
  function wa(e, t, n) {
    ((n = At(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Al || ((Al = !0), ($i = r)), Ni(e, t));
      }),
      n
    );
  }
  function _a(e, t, n) {
    ((n = At(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Ni(e, t);
        }));
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == 'function' &&
        (n.callback = function () {
          (Ni(e, t),
            typeof r != 'function' && (rn === null ? (rn = new Set([this])) : rn.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' });
        }),
      n
    );
  }
  function Sa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new cf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Ef.bind(null, e, t, n)), t.then(e, e));
  }
  function ka(e) {
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
  function xa(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = At(-1, 1)), (t.tag = 2), tn(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var df = Z.ReactCurrentOwner,
    nt = !1;
  function Ze(e, t, n, r) {
    t.child = e === null ? Qu(t, null, n, r) : Qn(t, e.child, n, r);
  }
  function Ea(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Vn(t, l),
      (r = yi(e, t, n, r, o, l)),
      (n = gi()),
      e !== null && !nt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Bt(e, t, l))
        : (_e && n && ei(t), (t.flags |= 1), Ze(e, t, r, l), t.child)
    );
  }
  function Ca(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' &&
        !Yi(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Na(e, t, o, r, l))
        : ((e = Hl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var i = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : gr), n(i, r) && e.ref === t.ref))
        return Bt(e, t, l);
    }
    return ((t.flags |= 1), (e = un(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Na(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (gr(o, r) && e.ref === t.ref)
        if (((nt = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (nt = !0);
        else return ((t.lanes = e.lanes), Bt(e, t, l));
    }
    return ji(e, t, n, r, l);
  }
  function ja(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          ye(Kn, ft),
          (ft |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            ye(Kn, ft),
            (ft |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = o !== null ? o.baseLanes : n),
          ye(Kn, ft),
          (ft |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ye(Kn, ft),
        (ft |= r));
    return (Ze(e, t, l, n), t.child);
  }
  function Ta(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ji(e, t, n, r, l) {
    var o = tt(n) ? hn : Ve.current;
    return (
      (o = Bn(t, o)),
      Vn(t, l),
      (n = yi(e, t, n, r, o, l)),
      (r = gi()),
      e !== null && !nt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Bt(e, t, l))
        : (_e && r && ei(t), (t.flags |= 1), Ze(e, t, n, l), t.child)
    );
  }
  function Oa(e, t, n, r, l) {
    if (tt(n)) {
      var o = !0;
      hl(t);
    } else o = !1;
    if ((Vn(t, l), t.stateNode === null)) (Pl(e, t), ya(t, n, r), Ei(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        u = t.memoizedProps;
      i.props = u;
      var f = i.context,
        S = n.contextType;
      typeof S == 'object' && S !== null
        ? (S = vt(S))
        : ((S = tt(n) ? hn : Ve.current), (S = Bn(t, S)));
      var L = n.getDerivedStateFromProps,
        R = typeof L == 'function' || typeof i.getSnapshotBeforeUpdate == 'function';
      (R ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== r || f !== S) && ga(t, i, r, S)),
        (en = !1));
      var O = t.memoizedState;
      ((i.state = O),
        El(t, r, i, l),
        (f = t.memoizedState),
        u !== r || O !== f || et.current || en
          ? (typeof L == 'function' && (xi(t, n, L, r), (f = t.memoizedState)),
            (u = en || va(t, n, u, r, O, f, S))
              ? (R ||
                  (typeof i.UNSAFE_componentWillMount != 'function' &&
                    typeof i.componentWillMount != 'function') ||
                  (typeof i.componentWillMount == 'function' && i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == 'function' &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = f)),
            (i.props = r),
            (i.state = f),
            (i.context = S),
            (r = u))
          : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1)));
    } else {
      ((i = t.stateNode),
        Vu(e, t),
        (u = t.memoizedProps),
        (S = t.type === t.elementType ? u : Et(t.type, u)),
        (i.props = S),
        (R = t.pendingProps),
        (O = i.context),
        (f = n.contextType),
        typeof f == 'object' && f !== null
          ? (f = vt(f))
          : ((f = tt(n) ? hn : Ve.current), (f = Bn(t, f))));
      var A = n.getDerivedStateFromProps;
      ((L = typeof A == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== R || O !== f) && ga(t, i, r, f)),
        (en = !1),
        (O = t.memoizedState),
        (i.state = O),
        El(t, r, i, l));
      var H = t.memoizedState;
      u !== R || O !== H || et.current || en
        ? (typeof A == 'function' && (xi(t, n, A, r), (H = t.memoizedState)),
          (S = en || va(t, n, S, r, O, H, f) || !1)
            ? (L ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                  typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(r, H, f),
                typeof i.UNSAFE_componentWillUpdate == 'function' &&
                  i.UNSAFE_componentWillUpdate(r, H, f)),
              typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (u === e.memoizedProps && O === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (u === e.memoizedProps && O === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = H)),
          (i.props = r),
          (i.state = H),
          (i.context = f),
          (r = S))
        : (typeof i.componentDidUpdate != 'function' ||
            (u === e.memoizedProps && O === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != 'function' ||
            (u === e.memoizedProps && O === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Ti(e, t, n, r, o, l);
  }
  function Ti(e, t, n, r, l, o) {
    Ta(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && Mu(t, n, !1), Bt(e, t, o));
    ((r = t.stateNode), (df.current = t));
    var u = i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Qn(t, e.child, null, o)), (t.child = Qn(t, null, u, o)))
        : Ze(e, t, u, o),
      (t.memoizedState = r.state),
      l && Mu(t, n, !0),
      t.child
    );
  }
  function La(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Ru(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ru(e, t.context, !1),
      di(e, t.containerInfo));
  }
  function Ia(e, t, n, r, l) {
    return (Wn(), li(l), (t.flags |= 256), Ze(e, t, n, r), t.child);
  }
  var Oi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Li(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ra(e, t, n) {
    var r = t.pendingProps,
      l = Se.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      ye(Se, l & 1),
      e === null)
    )
      return (
        ri(t),
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
                  : (o = Vl(i, r, 0, null)),
                (e = Cn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = Li(n)),
                (t.memoizedState = Oi),
                e)
              : Ii(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return ff(e, t, i, r, u, l, n);
    if (o) {
      ((o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling));
      var f = { mode: 'hidden', children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = f), (t.deletions = null))
          : ((r = un(l, f)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (o = un(u, o)) : ((o = Cn(o, i, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? Li(n)
            : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
        (o.memoizedState = i),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = Oi),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = un(o, { mode: 'visible', children: r.children })),
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
  function Ii(e, t) {
    return (
      (t = Vl({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Rl(e, t, n, r) {
    return (
      r !== null && li(r),
      Qn(t, e.child, null, n),
      (e = Ii(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function ff(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Ci(Error(s(422)))), Rl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = Vl({ mode: 'visible', children: r.children }, l, 0, null)),
            (o = Cn(o, l, i, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && Qn(t, e.child, null, i),
            (t.child.memoizedState = Li(i)),
            (t.memoizedState = Oi),
            o);
    if ((t.mode & 1) === 0) return Rl(e, t, i, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return ((r = u), (o = Error(s(419))), (r = Ci(o, r, void 0)), Rl(e, t, i, r));
    }
    if (((u = (i & e.childLanes) !== 0), nt || u)) {
      if (((r = Ae), r !== null)) {
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
          l !== 0 && l !== o.retryLane && ((o.retryLane = l), Ft(e, l), jt(r, e, l, -1)));
      }
      return (qi(), (r = Ci(Error(s(421)))), Rl(e, t, i, r));
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Cf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = o.treeContext),
        (dt = Xt(l.nextSibling)),
        (ct = t),
        (_e = !0),
        (xt = null),
        e !== null &&
          ((mt[ht++] = zt),
          (mt[ht++] = Dt),
          (mt[ht++] = vn),
          (zt = e.id),
          (Dt = e.overflow),
          (vn = t)),
        (t = Ii(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Pa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), ui(e.return, t, n));
  }
  function Ri(e, t, n, r, l) {
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
  function Ma(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Ze(e, t, r.children, n), (r = Se.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Pa(e, n, t);
          else if (e.tag === 19) Pa(e, n, t);
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
    if ((ye(Se, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate), e !== null && Cl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            Ri(t, !1, l, n, o));
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Cl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          Ri(t, !0, n, null, o);
          break;
        case 'together':
          Ri(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Pl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Bt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Sn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = un(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function pf(e, t, n) {
    switch (t.tag) {
      case 3:
        (La(t), Wn());
        break;
      case 5:
        Yu(t);
        break;
      case 1:
        tt(t.type) && hl(t);
        break;
      case 4:
        di(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (ye(Sl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ye(Se, Se.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Ra(e, t, n)
              : (ye(Se, Se.current & 1), (e = Bt(e, t, n)), e !== null ? e.sibling : null);
        ye(Se, Se.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Ma(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ye(Se, Se.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), ja(e, t, n));
    }
    return Bt(e, t, n);
  }
  var za, Pi, Da, Fa;
  ((za = function (e, t) {
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
    (Pi = function () {}),
    (Da = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), wn(Lt.current));
        var o = null;
        switch (n) {
          case 'input':
            ((l = Qt(e, l)), (r = Qt(e, r)), (o = []));
            break;
          case 'select':
            ((l = U({}, l, { value: void 0 })), (r = U({}, r, { value: void 0 })), (o = []));
            break;
          case 'textarea':
            ((l = co(e, l)), (r = co(e, r)), (o = []));
            break;
          default:
            typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = fl);
        }
        po(n, r);
        var i;
        n = null;
        for (S in l)
          if (!r.hasOwnProperty(S) && l.hasOwnProperty(S) && l[S] != null)
            if (S === 'style') {
              var u = l[S];
              for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
            } else
              S !== 'dangerouslySetInnerHTML' &&
                S !== 'children' &&
                S !== 'suppressContentEditableWarning' &&
                S !== 'suppressHydrationWarning' &&
                S !== 'autoFocus' &&
                (x.hasOwnProperty(S) ? o || (o = []) : (o = o || []).push(S, null));
        for (S in r) {
          var f = r[S];
          if (
            ((u = l != null ? l[S] : void 0),
            r.hasOwnProperty(S) && f !== u && (f != null || u != null))
          )
            if (S === 'style')
              if (u) {
                for (i in u)
                  !u.hasOwnProperty(i) ||
                    (f && f.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ''));
                for (i in f) f.hasOwnProperty(i) && u[i] !== f[i] && (n || (n = {}), (n[i] = f[i]));
              } else (n || (o || (o = []), o.push(S, n)), (n = f));
            else
              S === 'dangerouslySetInnerHTML'
                ? ((f = f ? f.__html : void 0),
                  (u = u ? u.__html : void 0),
                  f != null && u !== f && (o = o || []).push(S, f))
                : S === 'children'
                  ? (typeof f != 'string' && typeof f != 'number') || (o = o || []).push(S, '' + f)
                  : S !== 'suppressContentEditableWarning' &&
                    S !== 'suppressHydrationWarning' &&
                    (x.hasOwnProperty(S)
                      ? (f != null && S === 'onScroll' && ge('scroll', e), o || u === f || (o = []))
                      : (o = o || []).push(S, f));
        }
        n && (o = o || []).push('style', n);
        var S = o;
        (t.updateQueue = S) && (t.flags |= 4);
      }
    }),
    (Fa = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function Pr(e, t) {
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
  function qe(e) {
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
  function mf(e, t, n) {
    var r = t.pendingProps;
    switch ((ti(t), t.tag)) {
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
        return (qe(t), null);
      case 1:
        return (tt(t.type) && ml(), qe(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Gn(),
          we(et),
          we(Ve),
          mi(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (wl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), xt !== null && (Hi(xt), (xt = null)))),
          Pi(e, t),
          qe(t),
          null
        );
      case 5:
        fi(t);
        var l = wn(Tr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Da(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return (qe(t), null);
          }
          if (((e = wn(Lt.current)), wl(t))) {
            ((r = t.stateNode), (n = t.type));
            var o = t.memoizedProps;
            switch (((r[Ot] = t), (r[xr] = o), (e = (t.mode & 1) !== 0), n)) {
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
                for (l = 0; l < _r.length; l++) ge(_r[l], r);
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
                (bn(r, o), ge('invalid', r));
                break;
              case 'select':
                ((r._wrapperState = { wasMultiple: !!o.multiple }), ge('invalid', r));
                break;
              case 'textarea':
                (_s(r, o), ge('invalid', r));
            }
            (po(n, o), (l = null));
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var u = o[i];
                i === 'children'
                  ? typeof u == 'string'
                    ? r.textContent !== u &&
                      (o.suppressHydrationWarning !== !0 && dl(r.textContent, u, e),
                      (l = ['children', u]))
                    : typeof u == 'number' &&
                      r.textContent !== '' + u &&
                      (o.suppressHydrationWarning !== !0 && dl(r.textContent, u, e),
                      (l = ['children', '' + u]))
                  : x.hasOwnProperty(i) && u != null && i === 'onScroll' && ge('scroll', r);
              }
            switch (n) {
              case 'input':
                (ut(r), ws(r, o, !0));
                break;
              case 'textarea':
                (ut(r), ks(r));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof o.onClick == 'function' && (r.onclick = fl);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = xs(n)),
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
              (e[Ot] = t),
              (e[xr] = r),
              za(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = mo(n, r)), n)) {
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
                  for (l = 0; l < _r.length; l++) ge(_r[l], e);
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
                  (bn(e, r), (l = Qt(e, r)), ge('invalid', e));
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = U({}, r, { value: void 0 })),
                    ge('invalid', e));
                  break;
                case 'textarea':
                  (_s(e, r), (l = co(e, r)), ge('invalid', e));
                  break;
                default:
                  l = r;
              }
              (po(n, l), (u = l));
              for (o in u)
                if (u.hasOwnProperty(o)) {
                  var f = u[o];
                  o === 'style'
                    ? Ns(e, f)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((f = f ? f.__html : void 0), f != null && Es(e, f))
                      : o === 'children'
                        ? typeof f == 'string'
                          ? (n !== 'textarea' || f !== '') && tr(e, f)
                          : typeof f == 'number' && tr(e, '' + f)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (x.hasOwnProperty(o)
                            ? f != null && o === 'onScroll' && ge('scroll', e)
                            : f != null && ie(e, o, f, i));
                }
              switch (n) {
                case 'input':
                  (ut(e), ws(e, r, !1));
                  break;
                case 'textarea':
                  (ut(e), ks(e));
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + fe(r.value));
                  break;
                case 'select':
                  ((e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? jn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null && jn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = fl);
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
        return (qe(t), null);
      case 6:
        if (e && t.stateNode != null) Fa(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(s(166));
          if (((n = wn(Tr.current)), wn(Lt.current), wl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Ot] = t),
              (o = r.nodeValue !== n) && ((e = ct), e !== null))
            )
              switch (e.tag) {
                case 3:
                  dl(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    dl(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Ot] = t),
              (t.stateNode = r));
        }
        return (qe(t), null);
      case 13:
        if (
          (we(Se),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (_e && dt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Uu(), Wn(), (t.flags |= 98560), (o = !1));
          else if (((o = wl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(s(317));
              o[Ot] = t;
            } else (Wn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (qe(t), (o = !1));
          } else (xt !== null && (Hi(xt), (xt = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Se.current & 1) !== 0 ? Me === 0 && (Me = 3) : qi())),
            t.updateQueue !== null && (t.flags |= 4),
            qe(t),
            null);
      case 4:
        return (Gn(), Pi(e, t), e === null && Sr(t.stateNode.containerInfo), qe(t), null);
      case 10:
        return (si(t.type._context), qe(t), null);
      case 17:
        return (tt(t.type) && ml(), qe(t), null);
      case 19:
        if ((we(Se), (o = t.memoizedState), o === null)) return (qe(t), null);
        if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) Pr(o, !1);
          else {
            if (Me !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = Cl(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      Pr(o, !1),
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
                  return (ye(Se, (Se.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Te() > Xn &&
              ((t.flags |= 128), (r = !0), Pr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Cl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Pr(o, !0),
                o.tail === null && o.tailMode === 'hidden' && !i.alternate && !_e)
              )
                return (qe(t), null);
            } else
              2 * Te() - o.renderingStartTime > Xn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Pr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = o.last), n !== null ? (n.sibling = i) : (t.child = i), (o.last = i));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Te()),
            (t.sibling = null),
            (n = Se.current),
            ye(Se, r ? (n & 1) | 2 : n & 1),
            t)
          : (qe(t), null);
      case 22:
      case 23:
        return (
          Gi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (ft & 1073741824) !== 0 && (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : qe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function hf(e, t) {
    switch ((ti(t), t.tag)) {
      case 1:
        return (
          tt(t.type) && ml(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Gn(),
          we(et),
          we(Ve),
          mi(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (fi(t), null);
      case 13:
        if ((we(Se), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          Wn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (we(Se), null);
      case 4:
        return (Gn(), null);
      case 10:
        return (si(t.type._context), null);
      case 22:
      case 23:
        return (Gi(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ml = !1,
    Ye = !1,
    vf = typeof WeakSet == 'function' ? WeakSet : Set,
    Q = null;
  function Yn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          je(e, t, r);
        }
      else n.current = null;
  }
  function Mi(e, t, n) {
    try {
      n();
    } catch (r) {
      je(e, t, r);
    }
  }
  var Aa = !1;
  function yf(e, t) {
    if (((Go = el), (e = vu()), Ao(e))) {
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
              f = -1,
              S = 0,
              L = 0,
              R = e,
              O = null;
            t: for (;;) {
              for (
                var A;
                R !== n || (l !== 0 && R.nodeType !== 3) || (u = i + l),
                  R !== o || (r !== 0 && R.nodeType !== 3) || (f = i + r),
                  R.nodeType === 3 && (i += R.nodeValue.length),
                  (A = R.firstChild) !== null;
              )
                ((O = R), (R = A));
              for (;;) {
                if (R === e) break t;
                if (
                  (O === n && ++S === l && (u = i),
                  O === o && ++L === r && (f = i),
                  (A = R.nextSibling) !== null)
                )
                  break;
                ((R = O), (O = R.parentNode));
              }
              R = A;
            }
            n = u === -1 || f === -1 ? null : { start: u, end: f };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (qo = { focusedElem: e, selectionRange: n }, el = !1, Q = t; Q !== null; )
      if (((t = Q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (Q = e));
      else
        for (; Q !== null; ) {
          t = Q;
          try {
            var H = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (H !== null) {
                    var q = H.memoizedProps,
                      Oe = H.memoizedState,
                      v = t.stateNode,
                      p = v.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? q : Et(t.type, q),
                        Oe
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
          } catch (M) {
            je(t, t.return, M);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Q = e));
            break;
          }
          Q = t.return;
        }
    return ((H = Aa), (Aa = !1), H);
  }
  function Mr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          ((l.destroy = void 0), o !== void 0 && Mi(t, n, o));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function zl(e, t) {
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
  function zi(e) {
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
  function Ba(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Ba(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Ot], delete t[xr], delete t[Zo], delete t[Jd], delete t[bd])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Ua(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function $a(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ua(e.return)) return null;
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
  function Di(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = fl)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Di(e, t, n), e = e.sibling; e !== null; ) (Di(e, t, n), (e = e.sibling));
  }
  function Fi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Fi(e, t, n), e = e.sibling; e !== null; ) (Fi(e, t, n), (e = e.sibling));
  }
  var $e = null,
    Ct = !1;
  function nn(e, t, n) {
    for (n = n.child; n !== null; ) (Wa(e, t, n), (n = n.sibling));
  }
  function Wa(e, t, n) {
    if (Tt && typeof Tt.onCommitFiberUnmount == 'function')
      try {
        Tt.onCommitFiberUnmount(Yr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ye || Yn(n, t);
      case 6:
        var r = $e,
          l = Ct;
        (($e = null),
          nn(e, t, n),
          ($e = r),
          (Ct = l),
          $e !== null &&
            (Ct
              ? ((e = $e),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : $e.removeChild(n.stateNode)));
        break;
      case 18:
        $e !== null &&
          (Ct
            ? ((e = $e),
              (n = n.stateNode),
              e.nodeType === 8 ? Xo(e.parentNode, n) : e.nodeType === 1 && Xo(e, n),
              fr(e))
            : Xo($e, n.stateNode));
        break;
      case 4:
        ((r = $e),
          (l = Ct),
          ($e = n.stateNode.containerInfo),
          (Ct = !0),
          nn(e, t, n),
          ($e = r),
          (Ct = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ye && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var o = l,
              i = o.destroy;
            ((o = o.tag),
              i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Mi(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        nn(e, t, n);
        break;
      case 1:
        if (!Ye && (Yn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (u) {
            je(n, t, u);
          }
        nn(e, t, n);
        break;
      case 21:
        nn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ye = (r = Ye) || n.memoizedState !== null), nn(e, t, n), (Ye = r))
          : nn(e, t, n);
        break;
      default:
        nn(e, t, n);
    }
  }
  function Qa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new vf()),
        t.forEach(function (r) {
          var l = Nf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function Nt(e, t) {
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
                (($e = u.stateNode), (Ct = !1));
                break e;
              case 3:
                (($e = u.stateNode.containerInfo), (Ct = !0));
                break e;
              case 4:
                (($e = u.stateNode.containerInfo), (Ct = !0));
                break e;
            }
            u = u.return;
          }
          if ($e === null) throw Error(s(160));
          (Wa(o, i, l), ($e = null), (Ct = !1));
          var f = l.alternate;
          (f !== null && (f.return = null), (l.return = null));
        } catch (S) {
          je(l, t, S);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Ha(t, e), (t = t.sibling));
  }
  function Ha(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Nt(t, e), Rt(e), r & 4)) {
          try {
            (Mr(3, e, e.return), zl(3, e));
          } catch (q) {
            je(e, e.return, q);
          }
          try {
            Mr(5, e, e.return);
          } catch (q) {
            je(e, e.return, q);
          }
        }
        break;
      case 1:
        (Nt(t, e), Rt(e), r & 512 && n !== null && Yn(n, n.return));
        break;
      case 5:
        if ((Nt(t, e), Rt(e), r & 512 && n !== null && Yn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            tr(l, '');
          } catch (q) {
            je(e, e.return, q);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = n !== null ? n.memoizedProps : o,
            u = e.type,
            f = e.updateQueue;
          if (((e.updateQueue = null), f !== null))
            try {
              (u === 'input' && o.type === 'radio' && o.name != null && gs(l, o), mo(u, i));
              var S = mo(u, o);
              for (i = 0; i < f.length; i += 2) {
                var L = f[i],
                  R = f[i + 1];
                L === 'style'
                  ? Ns(l, R)
                  : L === 'dangerouslySetInnerHTML'
                    ? Es(l, R)
                    : L === 'children'
                      ? tr(l, R)
                      : ie(l, L, R, S);
              }
              switch (u) {
                case 'input':
                  uo(l, o);
                  break;
                case 'textarea':
                  Ss(l, o);
                  break;
                case 'select':
                  var O = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var A = o.value;
                  A != null
                    ? jn(l, !!o.multiple, A, !1)
                    : O !== !!o.multiple &&
                      (o.defaultValue != null
                        ? jn(l, !!o.multiple, o.defaultValue, !0)
                        : jn(l, !!o.multiple, o.multiple ? [] : '', !1));
              }
              l[xr] = o;
            } catch (q) {
              je(e, e.return, q);
            }
        }
        break;
      case 6:
        if ((Nt(t, e), Rt(e), r & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((l = e.stateNode), (o = e.memoizedProps));
          try {
            l.nodeValue = o;
          } catch (q) {
            je(e, e.return, q);
          }
        }
        break;
      case 3:
        if ((Nt(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            fr(t.containerInfo);
          } catch (q) {
            je(e, e.return, q);
          }
        break;
      case 4:
        (Nt(t, e), Rt(e));
        break;
      case 13:
        (Nt(t, e),
          Rt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (Ui = Te())),
          r & 4 && Qa(e));
        break;
      case 22:
        if (
          ((L = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ye = (S = Ye) || L), Nt(t, e), (Ye = S)) : Nt(t, e),
          Rt(e),
          r & 8192)
        ) {
          if (
            ((S = e.memoizedState !== null), (e.stateNode.isHidden = S) && !L && (e.mode & 1) !== 0)
          )
            for (Q = e, L = e.child; L !== null; ) {
              for (R = Q = L; Q !== null; ) {
                switch (((O = Q), (A = O.child), O.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Mr(4, O, O.return);
                    break;
                  case 1:
                    Yn(O, O.return);
                    var H = O.stateNode;
                    if (typeof H.componentWillUnmount == 'function') {
                      ((r = O), (n = O.return));
                      try {
                        ((t = r),
                          (H.props = t.memoizedProps),
                          (H.state = t.memoizedState),
                          H.componentWillUnmount());
                      } catch (q) {
                        je(r, n, q);
                      }
                    }
                    break;
                  case 5:
                    Yn(O, O.return);
                    break;
                  case 22:
                    if (O.memoizedState !== null) {
                      qa(R);
                      continue;
                    }
                }
                A !== null ? ((A.return = O), (Q = A)) : qa(R);
              }
              L = L.sibling;
            }
          e: for (L = null, R = e; ; ) {
            if (R.tag === 5) {
              if (L === null) {
                L = R;
                try {
                  ((l = R.stateNode),
                    S
                      ? ((o = l.style),
                        typeof o.setProperty == 'function'
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none'))
                      : ((u = R.stateNode),
                        (f = R.memoizedProps.style),
                        (i = f != null && f.hasOwnProperty('display') ? f.display : null),
                        (u.style.display = Cs('display', i))));
                } catch (q) {
                  je(e, e.return, q);
                }
              }
            } else if (R.tag === 6) {
              if (L === null)
                try {
                  R.stateNode.nodeValue = S ? '' : R.memoizedProps;
                } catch (q) {
                  je(e, e.return, q);
                }
            } else if (
              ((R.tag !== 22 && R.tag !== 23) || R.memoizedState === null || R === e) &&
              R.child !== null
            ) {
              ((R.child.return = R), (R = R.child));
              continue;
            }
            if (R === e) break e;
            for (; R.sibling === null; ) {
              if (R.return === null || R.return === e) break e;
              (L === R && (L = null), (R = R.return));
            }
            (L === R && (L = null), (R.sibling.return = R.return), (R = R.sibling));
          }
        }
        break;
      case 19:
        (Nt(t, e), Rt(e), r & 4 && Qa(e));
        break;
      case 21:
        break;
      default:
        (Nt(t, e), Rt(e));
    }
  }
  function Rt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ua(n)) {
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
            r.flags & 32 && (tr(l, ''), (r.flags &= -33));
            var o = $a(e);
            Fi(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              u = $a(e);
            Di(e, u, i);
            break;
          default:
            throw Error(s(161));
        }
      } catch (f) {
        je(e, e.return, f);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function gf(e, t, n) {
    ((Q = e), Va(e));
  }
  function Va(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Q !== null; ) {
      var l = Q,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || Ml;
        if (!i) {
          var u = l.alternate,
            f = (u !== null && u.memoizedState !== null) || Ye;
          u = Ml;
          var S = Ye;
          if (((Ml = i), (Ye = f) && !S))
            for (Q = l; Q !== null; )
              ((i = Q),
                (f = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? Ya(l)
                  : f !== null
                    ? ((f.return = i), (Q = f))
                    : Ya(l));
          for (; o !== null; ) ((Q = o), Va(o), (o = o.sibling));
          ((Q = l), (Ml = u), (Ye = S));
        }
        Ga(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), (Q = o)) : Ga(e);
    }
  }
  function Ga(e) {
    for (; Q !== null; ) {
      var t = Q;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ye || zl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ye)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : Et(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && qu(t, o, r);
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
                  qu(t, i, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
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
                  var S = t.alternate;
                  if (S !== null) {
                    var L = S.memoizedState;
                    if (L !== null) {
                      var R = L.dehydrated;
                      R !== null && fr(R);
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
          Ye || (t.flags & 512 && zi(t));
        } catch (O) {
          je(t, t.return, O);
        }
      }
      if (t === e) {
        Q = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (Q = n));
        break;
      }
      Q = t.return;
    }
  }
  function qa(e) {
    for (; Q !== null; ) {
      var t = Q;
      if (t === e) {
        Q = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (Q = n));
        break;
      }
      Q = t.return;
    }
  }
  function Ya(e) {
    for (; Q !== null; ) {
      var t = Q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              zl(4, t);
            } catch (f) {
              je(t, n, f);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (f) {
                je(t, l, f);
              }
            }
            var o = t.return;
            try {
              zi(t);
            } catch (f) {
              je(t, o, f);
            }
            break;
          case 5:
            var i = t.return;
            try {
              zi(t);
            } catch (f) {
              je(t, i, f);
            }
        }
      } catch (f) {
        je(t, t.return, f);
      }
      if (t === e) {
        Q = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        ((u.return = t.return), (Q = u));
        break;
      }
      Q = t.return;
    }
  }
  var wf = Math.ceil,
    Dl = Z.ReactCurrentDispatcher,
    Ai = Z.ReactCurrentOwner,
    gt = Z.ReactCurrentBatchConfig,
    ce = 0,
    Ae = null,
    Ie = null,
    We = 0,
    ft = 0,
    Kn = Zt(0),
    Me = 0,
    zr = null,
    Sn = 0,
    Fl = 0,
    Bi = 0,
    Dr = null,
    rt = null,
    Ui = 0,
    Xn = 1 / 0,
    Ut = null,
    Al = !1,
    $i = null,
    rn = null,
    Bl = !1,
    ln = null,
    Ul = 0,
    Fr = 0,
    Wi = null,
    $l = -1,
    Wl = 0;
  function Je() {
    return (ce & 6) !== 0 ? Te() : $l !== -1 ? $l : ($l = Te());
  }
  function on(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ce & 2) !== 0 && We !== 0
        ? We & -We
        : tf.transition !== null
          ? (Wl === 0 && (Wl = $s()), Wl)
          : ((e = he), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Xs(e.type))), e);
  }
  function jt(e, t, n, r) {
    if (50 < Fr) throw ((Fr = 0), (Wi = null), Error(s(185)));
    (sr(e, n, r),
      ((ce & 2) === 0 || e !== Ae) &&
        (e === Ae && ((ce & 2) === 0 && (Fl |= n), Me === 4 && sn(e, We)),
        lt(e, r),
        n === 1 && ce === 0 && (t.mode & 1) === 0 && ((Xn = Te() + 500), vl && bt())));
  }
  function lt(e, t) {
    var n = e.callbackNode;
    td(e, t);
    var r = Zr(e, e === Ae ? We : 0);
    if (r === 0) (n !== null && As(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && As(n), t === 1))
        (e.tag === 0 ? ef(Xa.bind(null, e)) : zu(Xa.bind(null, e)),
          Xd(function () {
            (ce & 6) === 0 && bt();
          }),
          (n = null));
      else {
        switch (Ws(r)) {
          case 1:
            n = So;
            break;
          case 4:
            n = Bs;
            break;
          case 16:
            n = qr;
            break;
          case 536870912:
            n = Us;
            break;
          default:
            n = qr;
        }
        n = lc(n, Ka.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Ka(e, t) {
    if ((($l = -1), (Wl = 0), (ce & 6) !== 0)) throw Error(s(327));
    var n = e.callbackNode;
    if (Zn() && e.callbackNode !== n) return null;
    var r = Zr(e, e === Ae ? We : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Ql(e, r);
    else {
      t = r;
      var l = ce;
      ce |= 2;
      var o = Ja();
      (Ae !== e || We !== t) && ((Ut = null), (Xn = Te() + 500), xn(e, t));
      do
        try {
          kf();
          break;
        } catch (u) {
          Za(e, u);
        }
      while (!0);
      (ii(), (Dl.current = o), (ce = l), Ie !== null ? (t = 0) : ((Ae = null), (We = 0), (t = Me)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = ko(e)), l !== 0 && ((r = l), (t = Qi(e, l)))), t === 1))
        throw ((n = zr), xn(e, 0), sn(e, r), lt(e, Te()), n);
      if (t === 6) sn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !_f(l) &&
            ((t = Ql(e, r)),
            t === 2 && ((o = ko(e)), o !== 0 && ((r = o), (t = Qi(e, o)))),
            t === 1))
        )
          throw ((n = zr), xn(e, 0), sn(e, r), lt(e, Te()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            En(e, rt, Ut);
            break;
          case 3:
            if ((sn(e, r), (r & 130023424) === r && ((t = Ui + 500 - Te()), 10 < t))) {
              if (Zr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Je(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = Ko(En.bind(null, e, rt, Ut), t);
              break;
            }
            En(e, rt, Ut);
            break;
          case 4:
            if ((sn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - St(r);
              ((o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o));
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
                            : 1960 * wf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Ko(En.bind(null, e, rt, Ut), r);
              break;
            }
            En(e, rt, Ut);
            break;
          case 5:
            En(e, rt, Ut);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (lt(e, Te()), e.callbackNode === n ? Ka.bind(null, e) : null);
  }
  function Qi(e, t) {
    var n = Dr;
    return (
      e.current.memoizedState.isDehydrated && (xn(e, t).flags |= 256),
      (e = Ql(e, t)),
      e !== 2 && ((t = rt), (rt = n), t !== null && Hi(t)),
      e
    );
  }
  function Hi(e) {
    rt === null ? (rt = e) : rt.push.apply(rt, e);
  }
  function _f(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!kt(o(), l)) return !1;
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
  function sn(e, t) {
    for (
      t &= ~Bi, t &= ~Fl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - St(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function Xa(e) {
    if ((ce & 6) !== 0) throw Error(s(327));
    Zn();
    var t = Zr(e, 0);
    if ((t & 1) === 0) return (lt(e, Te()), null);
    var n = Ql(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ko(e);
      r !== 0 && ((t = r), (n = Qi(e, r)));
    }
    if (n === 1) throw ((n = zr), xn(e, 0), sn(e, t), lt(e, Te()), n);
    if (n === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      En(e, rt, Ut),
      lt(e, Te()),
      null
    );
  }
  function Vi(e, t) {
    var n = ce;
    ce |= 1;
    try {
      return e(t);
    } finally {
      ((ce = n), ce === 0 && ((Xn = Te() + 500), vl && bt()));
    }
  }
  function kn(e) {
    ln !== null && ln.tag === 0 && (ce & 6) === 0 && Zn();
    var t = ce;
    ce |= 1;
    var n = gt.transition,
      r = he;
    try {
      if (((gt.transition = null), (he = 1), e)) return e();
    } finally {
      ((he = r), (gt.transition = n), (ce = t), (ce & 6) === 0 && bt());
    }
  }
  function Gi() {
    ((ft = Kn.current), we(Kn));
  }
  function xn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Kd(n)), Ie !== null))
      for (n = Ie.return; n !== null; ) {
        var r = n;
        switch ((ti(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && ml());
            break;
          case 3:
            (Gn(), we(et), we(Ve), mi());
            break;
          case 5:
            fi(r);
            break;
          case 4:
            Gn();
            break;
          case 13:
            we(Se);
            break;
          case 19:
            we(Se);
            break;
          case 10:
            si(r.type._context);
            break;
          case 22:
          case 23:
            Gi();
        }
        n = n.return;
      }
    if (
      ((Ae = e),
      (Ie = e = un(e.current, null)),
      (We = ft = t),
      (Me = 0),
      (zr = null),
      (Bi = Fl = Sn = 0),
      (rt = Dr = null),
      gn !== null)
    ) {
      for (t = 0; t < gn.length; t++)
        if (((n = gn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var i = o.next;
            ((o.next = l), (r.next = i));
          }
          n.pending = r;
        }
      gn = null;
    }
    return e;
  }
  function Za(e, t) {
    do {
      var n = Ie;
      try {
        if ((ii(), (Nl.current = Ll), jl)) {
          for (var r = ke.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          jl = !1;
        }
        if (
          ((_n = 0),
          (Fe = Pe = ke = null),
          (Or = !1),
          (Lr = 0),
          (Ai.current = null),
          n === null || n.return === null)
        ) {
          ((Me = 1), (zr = t), (Ie = null));
          break;
        }
        e: {
          var o = e,
            i = n.return,
            u = n,
            f = t;
          if (
            ((t = We),
            (u.flags |= 32768),
            f !== null && typeof f == 'object' && typeof f.then == 'function')
          ) {
            var S = f,
              L = u,
              R = L.tag;
            if ((L.mode & 1) === 0 && (R === 0 || R === 11 || R === 15)) {
              var O = L.alternate;
              O
                ? ((L.updateQueue = O.updateQueue),
                  (L.memoizedState = O.memoizedState),
                  (L.lanes = O.lanes))
                : ((L.updateQueue = null), (L.memoizedState = null));
            }
            var A = ka(i);
            if (A !== null) {
              ((A.flags &= -257), xa(A, i, u, o, t), A.mode & 1 && Sa(o, S, t), (t = A), (f = S));
              var H = t.updateQueue;
              if (H === null) {
                var q = new Set();
                (q.add(f), (t.updateQueue = q));
              } else H.add(f);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Sa(o, S, t), qi());
                break e;
              }
              f = Error(s(426));
            }
          } else if (_e && u.mode & 1) {
            var Oe = ka(i);
            if (Oe !== null) {
              ((Oe.flags & 65536) === 0 && (Oe.flags |= 256), xa(Oe, i, u, o, t), li(qn(f, u)));
              break e;
            }
          }
          ((o = f = qn(f, u)),
            Me !== 4 && (Me = 2),
            Dr === null ? (Dr = [o]) : Dr.push(o),
            (o = i));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var v = wa(o, f, t);
                Gu(o, v);
                break e;
              case 1:
                u = f;
                var p = o.type,
                  g = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof p.getDerivedStateFromError == 'function' ||
                    (g !== null &&
                      typeof g.componentDidCatch == 'function' &&
                      (rn === null || !rn.has(g))))
                ) {
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var M = _a(o, u, t);
                  Gu(o, M);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        ec(n);
      } catch (K) {
        ((t = K), Ie === n && n !== null && (Ie = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Ja() {
    var e = Dl.current;
    return ((Dl.current = Ll), e === null ? Ll : e);
  }
  function qi() {
    ((Me === 0 || Me === 3 || Me === 2) && (Me = 4),
      Ae === null || ((Sn & 268435455) === 0 && (Fl & 268435455) === 0) || sn(Ae, We));
  }
  function Ql(e, t) {
    var n = ce;
    ce |= 2;
    var r = Ja();
    (Ae !== e || We !== t) && ((Ut = null), xn(e, t));
    do
      try {
        Sf();
        break;
      } catch (l) {
        Za(e, l);
      }
    while (!0);
    if ((ii(), (ce = n), (Dl.current = r), Ie !== null)) throw Error(s(261));
    return ((Ae = null), (We = 0), Me);
  }
  function Sf() {
    for (; Ie !== null; ) ba(Ie);
  }
  function kf() {
    for (; Ie !== null && !Gc(); ) ba(Ie);
  }
  function ba(e) {
    var t = rc(e.alternate, e, ft);
    ((e.memoizedProps = e.pendingProps), t === null ? ec(e) : (Ie = t), (Ai.current = null));
  }
  function ec(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = mf(n, t, ft)), n !== null)) {
          Ie = n;
          return;
        }
      } else {
        if (((n = hf(n, t)), n !== null)) {
          ((n.flags &= 32767), (Ie = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Me = 6), (Ie = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ie = t;
        return;
      }
      Ie = t = e;
    } while (t !== null);
    Me === 0 && (Me = 5);
  }
  function En(e, t, n) {
    var r = he,
      l = gt.transition;
    try {
      ((gt.transition = null), (he = 1), xf(e, t, n, r));
    } finally {
      ((gt.transition = l), (he = r));
    }
    return null;
  }
  function xf(e, t, n, r) {
    do Zn();
    while (ln !== null);
    if ((ce & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = n.lanes | n.childLanes;
    if (
      (nd(e, o),
      e === Ae && ((Ie = Ae = null), (We = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Bl ||
        ((Bl = !0),
        lc(qr, function () {
          return (Zn(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = gt.transition), (gt.transition = null));
      var i = he;
      he = 1;
      var u = ce;
      ((ce |= 4),
        (Ai.current = null),
        yf(e, n),
        Ha(n, e),
        Wd(qo),
        (el = !!Go),
        (qo = Go = null),
        (e.current = n),
        gf(n),
        qc(),
        (ce = u),
        (he = i),
        (gt.transition = o));
    } else e.current = n;
    if (
      (Bl && ((Bl = !1), (ln = e), (Ul = l)),
      (o = e.pendingLanes),
      o === 0 && (rn = null),
      Xc(n.stateNode),
      lt(e, Te()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (Al) throw ((Al = !1), (e = $i), ($i = null), e);
    return (
      (Ul & 1) !== 0 && e.tag !== 0 && Zn(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === Wi ? Fr++ : ((Fr = 0), (Wi = e))) : (Fr = 0),
      bt(),
      null
    );
  }
  function Zn() {
    if (ln !== null) {
      var e = Ws(Ul),
        t = gt.transition,
        n = he;
      try {
        if (((gt.transition = null), (he = 16 > e ? 16 : e), ln === null)) var r = !1;
        else {
          if (((e = ln), (ln = null), (Ul = 0), (ce & 6) !== 0)) throw Error(s(331));
          var l = ce;
          for (ce |= 4, Q = e.current; Q !== null; ) {
            var o = Q,
              i = o.child;
            if ((Q.flags & 16) !== 0) {
              var u = o.deletions;
              if (u !== null) {
                for (var f = 0; f < u.length; f++) {
                  var S = u[f];
                  for (Q = S; Q !== null; ) {
                    var L = Q;
                    switch (L.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mr(8, L, o);
                    }
                    var R = L.child;
                    if (R !== null) ((R.return = L), (Q = R));
                    else
                      for (; Q !== null; ) {
                        L = Q;
                        var O = L.sibling,
                          A = L.return;
                        if ((Ba(L), L === S)) {
                          Q = null;
                          break;
                        }
                        if (O !== null) {
                          ((O.return = A), (Q = O));
                          break;
                        }
                        Q = A;
                      }
                  }
                }
                var H = o.alternate;
                if (H !== null) {
                  var q = H.child;
                  if (q !== null) {
                    H.child = null;
                    do {
                      var Oe = q.sibling;
                      ((q.sibling = null), (q = Oe));
                    } while (q !== null);
                  }
                }
                Q = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null) ((i.return = o), (Q = i));
            else
              e: for (; Q !== null; ) {
                if (((o = Q), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mr(9, o, o.return);
                  }
                var v = o.sibling;
                if (v !== null) {
                  ((v.return = o.return), (Q = v));
                  break e;
                }
                Q = o.return;
              }
          }
          var p = e.current;
          for (Q = p; Q !== null; ) {
            i = Q;
            var g = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && g !== null) ((g.return = i), (Q = g));
            else
              e: for (i = p; Q !== null; ) {
                if (((u = Q), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        zl(9, u);
                    }
                  } catch (K) {
                    je(u, u.return, K);
                  }
                if (u === i) {
                  Q = null;
                  break e;
                }
                var M = u.sibling;
                if (M !== null) {
                  ((M.return = u.return), (Q = M));
                  break e;
                }
                Q = u.return;
              }
          }
          if (((ce = l), bt(), Tt && typeof Tt.onPostCommitFiberRoot == 'function'))
            try {
              Tt.onPostCommitFiberRoot(Yr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((he = n), (gt.transition = t));
      }
    }
    return !1;
  }
  function tc(e, t, n) {
    ((t = qn(n, t)),
      (t = wa(e, t, 1)),
      (e = tn(e, t, 1)),
      (t = Je()),
      e !== null && (sr(e, 1, t), lt(e, t)));
  }
  function je(e, t, n) {
    if (e.tag === 3) tc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          tc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (rn === null || !rn.has(r)))
          ) {
            ((e = qn(n, e)),
              (e = _a(t, e, 1)),
              (t = tn(t, e, 1)),
              (e = Je()),
              t !== null && (sr(t, 1, e), lt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ef(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Je()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ae === e &&
        (We & n) === n &&
        (Me === 4 || (Me === 3 && (We & 130023424) === We && 500 > Te() - Ui)
          ? xn(e, 0)
          : (Bi |= n)),
      lt(e, t));
  }
  function nc(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Xr), (Xr <<= 1), (Xr & 130023424) === 0 && (Xr = 4194304)));
    var n = Je();
    ((e = Ft(e, t)), e !== null && (sr(e, t, n), lt(e, n)));
  }
  function Cf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), nc(e, n));
  }
  function Nf(e, t) {
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
    (r !== null && r.delete(t), nc(e, n));
  }
  var rc;
  rc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || et.current) nt = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((nt = !1), pf(e, t, n));
        nt = (e.flags & 131072) !== 0;
      }
    else ((nt = !1), _e && (t.flags & 1048576) !== 0 && Du(t, gl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Pl(e, t), (e = t.pendingProps));
        var l = Bn(t, Ve.current);
        (Vn(t, n), (l = yi(null, t, r, e, l, n)));
        var o = gi();
        return (
          (t.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              tt(r) ? ((o = !0), hl(t)) : (o = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              ci(t),
              (l.updater = Il),
              (t.stateNode = l),
              (l._reactInternals = t),
              Ei(t, r, e, n),
              (t = Ti(null, t, r, !0, o, n)))
            : ((t.tag = 0), _e && o && ei(t), Ze(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Pl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Tf(r)),
            (e = Et(r, e)),
            l)
          ) {
            case 0:
              t = ji(null, t, r, e, n);
              break e;
            case 1:
              t = Oa(null, t, r, e, n);
              break e;
            case 11:
              t = Ea(null, t, r, e, n);
              break e;
            case 14:
              t = Ca(null, t, r, Et(r.type, e), n);
              break e;
          }
          throw Error(s(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Et(r, l)),
          ji(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Et(r, l)),
          Oa(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((La(t), e === null)) throw Error(s(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            Vu(e, t),
            El(t, r, null, n));
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
              ((l = qn(Error(s(423)), t)), (t = Ia(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = qn(Error(s(424)), t)), (t = Ia(e, t, r, n, l)));
              break e;
            } else
              for (
                dt = Xt(t.stateNode.containerInfo.firstChild),
                  ct = t,
                  _e = !0,
                  xt = null,
                  n = Qu(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Wn(), r === l)) {
              t = Bt(e, t, n);
              break e;
            }
            Ze(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Yu(t),
          e === null && ri(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          Yo(r, l) ? (i = null) : o !== null && Yo(r, o) && (t.flags |= 32),
          Ta(e, t),
          Ze(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && ri(t), null);
      case 13:
        return Ra(e, t, n);
      case 4:
        return (
          di(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Qn(t, null, r, n)) : Ze(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Et(r, l)),
          Ea(e, t, r, l, n)
        );
      case 7:
        return (Ze(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Ze(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Ze(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (i = l.value),
            ye(Sl, r._currentValue),
            (r._currentValue = i),
            o !== null)
          )
            if (kt(o.value, i)) {
              if (o.children === l.children && !et.current) {
                t = Bt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var u = o.dependencies;
                if (u !== null) {
                  i = o.child;
                  for (var f = u.firstContext; f !== null; ) {
                    if (f.context === r) {
                      if (o.tag === 1) {
                        ((f = At(-1, n & -n)), (f.tag = 2));
                        var S = o.updateQueue;
                        if (S !== null) {
                          S = S.shared;
                          var L = S.pending;
                          (L === null ? (f.next = f) : ((f.next = L.next), (L.next = f)),
                            (S.pending = f));
                        }
                      }
                      ((o.lanes |= n),
                        (f = o.alternate),
                        f !== null && (f.lanes |= n),
                        ui(o.return, n, t),
                        (u.lanes |= n));
                      break;
                    }
                    f = f.next;
                  }
                } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((i = o.return), i === null)) throw Error(s(341));
                  ((i.lanes |= n),
                    (u = i.alternate),
                    u !== null && (u.lanes |= n),
                    ui(i, n, t),
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
          (Ze(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Vn(t, n),
          (l = vt(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ze(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = Et(r, t.pendingProps)), (l = Et(r.type, l)), Ca(e, t, r, l, n));
      case 15:
        return Na(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Et(r, l)),
          Pl(e, t),
          (t.tag = 1),
          tt(r) ? ((e = !0), hl(t)) : (e = !1),
          Vn(t, n),
          ya(t, r, l),
          Ei(t, r, l, n),
          Ti(null, t, r, !0, e, n)
        );
      case 19:
        return Ma(e, t, n);
      case 22:
        return ja(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function lc(e, t) {
    return Fs(e, t);
  }
  function jf(e, t, n, r) {
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
  function wt(e, t, n, r) {
    return new jf(e, t, n, r);
  }
  function Yi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Tf(e) {
    if (typeof e == 'function') return Yi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Xe)) return 11;
      if (e === Ce) return 14;
    }
    return 2;
  }
  function un(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = wt(e.tag, t, e.key, e.mode)),
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
  function Hl(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == 'function')) Yi(e) && (i = 1);
    else if (typeof e == 'string') i = 5;
    else
      e: switch (e) {
        case W:
          return Cn(n.children, l, o, t);
        case B:
          ((i = 8), (l |= 8));
          break;
        case Re:
          return ((e = wt(12, n, t, l | 2)), (e.elementType = Re), (e.lanes = o), e);
        case De:
          return ((e = wt(13, n, t, l)), (e.elementType = De), (e.lanes = o), e);
        case He:
          return ((e = wt(19, n, t, l)), (e.elementType = He), (e.lanes = o), e);
        case pe:
          return Vl(n, l, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Ke:
                i = 10;
                break e;
              case be:
                i = 9;
                break e;
              case Xe:
                i = 11;
                break e;
              case Ce:
                i = 14;
                break e;
              case Ne:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ''));
      }
    return ((t = wt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
  }
  function Cn(e, t, n, r) {
    return ((e = wt(7, e, r, t)), (e.lanes = n), e);
  }
  function Vl(e, t, n, r) {
    return (
      (e = wt(22, e, r, t)),
      (e.elementType = pe),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ki(e, t, n) {
    return ((e = wt(6, e, null, t)), (e.lanes = n), e);
  }
  function Xi(e, t, n) {
    return (
      (t = wt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Of(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = xo(0)),
      (this.expirationTimes = xo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = xo(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Zi(e, t, n, r, l, o, i, u, f) {
    return (
      (e = new Of(e, t, n, u, f)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = wt(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ci(o),
      e
    );
  }
  function Lf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: P,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function oc(e) {
    if (!e) return Jt;
    e = e._reactInternals;
    e: {
      if (pn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (tt(t.type)) {
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
      if (tt(n)) return Pu(e, n, t);
    }
    return t;
  }
  function ic(e, t, n, r, l, o, i, u, f) {
    return (
      (e = Zi(n, r, !0, e, l, o, i, u, f)),
      (e.context = oc(null)),
      (n = e.current),
      (r = Je()),
      (l = on(n)),
      (o = At(r, l)),
      (o.callback = t ?? null),
      tn(n, o, l),
      (e.current.lanes = l),
      sr(e, l, r),
      lt(e, r),
      e
    );
  }
  function Gl(e, t, n, r) {
    var l = t.current,
      o = Je(),
      i = on(l);
    return (
      (n = oc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = At(o, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = tn(l, t, i)),
      e !== null && (jt(e, l, i, o), xl(e, l, i)),
      i
    );
  }
  function ql(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function sc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ji(e, t) {
    (sc(e, t), (e = e.alternate) && sc(e, t));
  }
  function If() {
    return null;
  }
  var uc =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function bi(e) {
    this._internalRoot = e;
  }
  ((Yl.prototype.render = bi.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Gl(e, t, null, null);
    }),
    (Yl.prototype.unmount = bi.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (kn(function () {
            Gl(null, e, null, null);
          }),
            (t[Pt] = null));
        }
      }));
  function Yl(e) {
    this._internalRoot = e;
  }
  Yl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Vs();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++);
      (qt.splice(n, 0, e), n === 0 && Ys(e));
    }
  };
  function es(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Kl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function ac() {}
  function Rf(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var S = ql(i);
          o.call(S);
        };
      }
      var i = ic(t, r, e, 0, null, !1, !1, '', ac);
      return (
        (e._reactRootContainer = i),
        (e[Pt] = i.current),
        Sr(e.nodeType === 8 ? e.parentNode : e),
        kn(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var u = r;
      r = function () {
        var S = ql(f);
        u.call(S);
      };
    }
    var f = Zi(e, 0, !1, null, null, !1, !1, '', ac);
    return (
      (e._reactRootContainer = f),
      (e[Pt] = f.current),
      Sr(e.nodeType === 8 ? e.parentNode : e),
      kn(function () {
        Gl(t, f, n, r);
      }),
      f
    );
  }
  function Xl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == 'function') {
        var u = l;
        l = function () {
          var f = ql(i);
          u.call(f);
        };
      }
      Gl(t, i, e, l);
    } else i = Rf(n, t, e, l, r);
    return ql(i);
  }
  ((Qs = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ir(t.pendingLanes);
          n !== 0 && (Eo(t, n | 1), lt(t, Te()), (ce & 6) === 0 && ((Xn = Te() + 500), bt()));
        }
        break;
      case 13:
        (kn(function () {
          var r = Ft(e, 1);
          if (r !== null) {
            var l = Je();
            jt(r, e, 1, l);
          }
        }),
          Ji(e, 1));
    }
  }),
    (Co = function (e) {
      if (e.tag === 13) {
        var t = Ft(e, 134217728);
        if (t !== null) {
          var n = Je();
          jt(t, e, 134217728, n);
        }
        Ji(e, 134217728);
      }
    }),
    (Hs = function (e) {
      if (e.tag === 13) {
        var t = on(e),
          n = Ft(e, t);
        if (n !== null) {
          var r = Je();
          jt(n, e, t, r);
        }
        Ji(e, t);
      }
    }),
    (Vs = function () {
      return he;
    }),
    (Gs = function (e, t) {
      var n = he;
      try {
        return ((he = e), t());
      } finally {
        he = n;
      }
    }),
    (yo = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((uo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = pl(r);
                if (!l) throw Error(s(90));
                (pt(r), uo(r, l));
              }
            }
          }
          break;
        case 'textarea':
          Ss(e, n);
          break;
        case 'select':
          ((t = n.value), t != null && jn(e, !!n.multiple, t, !1));
      }
    }),
    (Ls = Vi),
    (Is = kn));
  var Pf = { usingClientEntryPoint: !1, Events: [Er, Fn, pl, Ts, Os, Vi] },
    Ar = {
      findFiberByHostInstance: mn,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    Mf = {
      bundleType: Ar.bundleType,
      version: Ar.version,
      rendererPackageName: Ar.rendererPackageName,
      rendererConfig: Ar.rendererConfig,
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
        return ((e = zs(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Ar.findFiberByHostInstance || If,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zl.isDisabled && Zl.supportsFiber)
      try {
        ((Yr = Zl.inject(Mf)), (Tt = Zl));
      } catch {}
  }
  return (
    (ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pf),
    (ot.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!es(t)) throw Error(s(200));
      return Lf(e, t, null, n);
    }),
    (ot.createRoot = function (e, t) {
      if (!es(e)) throw Error(s(299));
      var n = !1,
        r = '',
        l = uc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Zi(e, 1, !1, null, null, n, !1, r, l)),
        (e[Pt] = t.current),
        Sr(e.nodeType === 8 ? e.parentNode : e),
        new bi(t)
      );
    }),
    (ot.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(s(188))
          : ((e = Object.keys(e).join(',')), Error(s(268, e)));
      return ((e = zs(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (ot.flushSync = function (e) {
      return kn(e);
    }),
    (ot.hydrate = function (e, t, n) {
      if (!Kl(t)) throw Error(s(200));
      return Xl(null, e, t, !0, n);
    }),
    (ot.hydrateRoot = function (e, t, n) {
      if (!es(e)) throw Error(s(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        i = uc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = ic(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[Pt] = t.current),
        Sr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Yl(t);
    }),
    (ot.render = function (e, t, n) {
      if (!Kl(t)) throw Error(s(200));
      return Xl(null, e, t, !1, n);
    }),
    (ot.unmountComponentAtNode = function (e) {
      if (!Kl(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (kn(function () {
            Xl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Pt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (ot.unstable_batchedUpdates = Vi),
    (ot.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Kl(n)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Xl(e, t, n, !1, r);
    }),
    (ot.version = '18.3.1-next-f1338f8080-20240426'),
    ot
  );
}
var yc;
function Wf() {
  if (yc) return rs.exports;
  yc = 1;
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
  return (c(), (rs.exports = $f()), rs.exports);
}
var gc;
function Qf() {
  if (gc) return Jl;
  gc = 1;
  var c = Wf();
  return ((Jl.createRoot = c.createRoot), (Jl.hydrateRoot = c.hydrateRoot), Jl);
}
var Hf = Qf();
const Vf = [
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
      type: '_intermission',
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
  kc = { questions: Vf },
  Gf = 'sqrt',
  qf = {
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
  Yf = { equal: 33, '10x': 33, '100x': 34 },
  no = { diminishingReturns: Gf, causes: qf, defaultCredences: Yf },
  Kf = { resetButton: !1, sliderLock: !0, shareResults: !1 },
  Xf = {
    showMaxEV: !0,
    showParliament: !0,
    showMergedFavorites: !0,
    showMaximin: !0,
    sideBySideComparison: !1,
  },
  $r = { ui: Kf, calculations: Xf };
var is = { exports: {} },
  wc;
function Zf() {
  return (
    wc ||
      ((wc = 1),
      (function (c) {
        var a = (function () {
          var s = String.fromCharCode,
            k = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            x = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
            E = {};
          function T(m, y) {
            if (!E[m]) {
              E[m] = {};
              for (var w = 0; w < m.length; w++) E[m][m.charAt(w)] = w;
            }
            return E[m][y];
          }
          var j = {
            compressToBase64: function (m) {
              if (m == null) return '';
              var y = j._compress(m, 6, function (w) {
                return k.charAt(w);
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
                  : j._decompress(m.length, 32, function (y) {
                      return T(k, m.charAt(y));
                    });
            },
            compressToUTF16: function (m) {
              return m == null
                ? ''
                : j._compress(m, 15, function (y) {
                    return s(y + 32);
                  }) + ' ';
            },
            decompressFromUTF16: function (m) {
              return m == null
                ? ''
                : m == ''
                  ? null
                  : j._decompress(m.length, 16384, function (y) {
                      return m.charCodeAt(y) - 32;
                    });
            },
            compressToUint8Array: function (m) {
              for (
                var y = j.compress(m), w = new Uint8Array(y.length * 2), _ = 0, C = y.length;
                _ < C;
                _++
              ) {
                var $ = y.charCodeAt(_);
                ((w[_ * 2] = $ >>> 8), (w[_ * 2 + 1] = $ % 256));
              }
              return w;
            },
            decompressFromUint8Array: function (m) {
              if (m == null) return j.decompress(m);
              for (var y = new Array(m.length / 2), w = 0, _ = y.length; w < _; w++)
                y[w] = m[w * 2] * 256 + m[w * 2 + 1];
              var C = [];
              return (
                y.forEach(function ($) {
                  C.push(s($));
                }),
                j.decompress(C.join(''))
              );
            },
            compressToEncodedURIComponent: function (m) {
              return m == null
                ? ''
                : j._compress(m, 6, function (y) {
                    return x.charAt(y);
                  });
            },
            decompressFromEncodedURIComponent: function (m) {
              return m == null
                ? ''
                : m == ''
                  ? null
                  : ((m = m.replace(/ /g, '+')),
                    j._decompress(m.length, 32, function (y) {
                      return T(x, m.charAt(y));
                    }));
            },
            compress: function (m) {
              return j._compress(m, 16, function (y) {
                return s(y);
              });
            },
            _compress: function (m, y, w) {
              if (m == null) return '';
              var _,
                C,
                $ = {},
                Y = {},
                G = '',
                D = '',
                X = '',
                re = 2,
                ie = 3,
                Z = 2,
                te = [],
                P = 0,
                W = 0,
                B;
              for (B = 0; B < m.length; B += 1)
                if (
                  ((G = m.charAt(B)),
                  Object.prototype.hasOwnProperty.call($, G) || (($[G] = ie++), (Y[G] = !0)),
                  (D = X + G),
                  Object.prototype.hasOwnProperty.call($, D))
                )
                  X = D;
                else {
                  if (Object.prototype.hasOwnProperty.call(Y, X)) {
                    if (X.charCodeAt(0) < 256) {
                      for (_ = 0; _ < Z; _++)
                        ((P = P << 1), W == y - 1 ? ((W = 0), te.push(w(P)), (P = 0)) : W++);
                      for (C = X.charCodeAt(0), _ = 0; _ < 8; _++)
                        ((P = (P << 1) | (C & 1)),
                          W == y - 1 ? ((W = 0), te.push(w(P)), (P = 0)) : W++,
                          (C = C >> 1));
                    } else {
                      for (C = 1, _ = 0; _ < Z; _++)
                        ((P = (P << 1) | C),
                          W == y - 1 ? ((W = 0), te.push(w(P)), (P = 0)) : W++,
                          (C = 0));
                      for (C = X.charCodeAt(0), _ = 0; _ < 16; _++)
                        ((P = (P << 1) | (C & 1)),
                          W == y - 1 ? ((W = 0), te.push(w(P)), (P = 0)) : W++,
                          (C = C >> 1));
                    }
                    (re--, re == 0 && ((re = Math.pow(2, Z)), Z++), delete Y[X]);
                  } else
                    for (C = $[X], _ = 0; _ < Z; _++)
                      ((P = (P << 1) | (C & 1)),
                        W == y - 1 ? ((W = 0), te.push(w(P)), (P = 0)) : W++,
                        (C = C >> 1));
                  (re--, re == 0 && ((re = Math.pow(2, Z)), Z++), ($[D] = ie++), (X = String(G)));
                }
              if (X !== '') {
                if (Object.prototype.hasOwnProperty.call(Y, X)) {
                  if (X.charCodeAt(0) < 256) {
                    for (_ = 0; _ < Z; _++)
                      ((P = P << 1), W == y - 1 ? ((W = 0), te.push(w(P)), (P = 0)) : W++);
                    for (C = X.charCodeAt(0), _ = 0; _ < 8; _++)
                      ((P = (P << 1) | (C & 1)),
                        W == y - 1 ? ((W = 0), te.push(w(P)), (P = 0)) : W++,
                        (C = C >> 1));
                  } else {
                    for (C = 1, _ = 0; _ < Z; _++)
                      ((P = (P << 1) | C),
                        W == y - 1 ? ((W = 0), te.push(w(P)), (P = 0)) : W++,
                        (C = 0));
                    for (C = X.charCodeAt(0), _ = 0; _ < 16; _++)
                      ((P = (P << 1) | (C & 1)),
                        W == y - 1 ? ((W = 0), te.push(w(P)), (P = 0)) : W++,
                        (C = C >> 1));
                  }
                  (re--, re == 0 && ((re = Math.pow(2, Z)), Z++), delete Y[X]);
                } else
                  for (C = $[X], _ = 0; _ < Z; _++)
                    ((P = (P << 1) | (C & 1)),
                      W == y - 1 ? ((W = 0), te.push(w(P)), (P = 0)) : W++,
                      (C = C >> 1));
                (re--, re == 0 && ((re = Math.pow(2, Z)), Z++));
              }
              for (C = 2, _ = 0; _ < Z; _++)
                ((P = (P << 1) | (C & 1)),
                  W == y - 1 ? ((W = 0), te.push(w(P)), (P = 0)) : W++,
                  (C = C >> 1));
              for (;;)
                if (((P = P << 1), W == y - 1)) {
                  te.push(w(P));
                  break;
                } else W++;
              return te.join('');
            },
            decompress: function (m) {
              return m == null
                ? ''
                : m == ''
                  ? null
                  : j._decompress(m.length, 32768, function (y) {
                      return m.charCodeAt(y);
                    });
            },
            _decompress: function (m, y, w) {
              var _ = [],
                C = 4,
                $ = 4,
                Y = 3,
                G = '',
                D = [],
                X,
                re,
                ie,
                Z,
                te,
                P,
                W,
                B = { val: w(0), position: y, index: 1 };
              for (X = 0; X < 3; X += 1) _[X] = X;
              for (ie = 0, te = Math.pow(2, 2), P = 1; P != te; )
                ((Z = B.val & B.position),
                  (B.position >>= 1),
                  B.position == 0 && ((B.position = y), (B.val = w(B.index++))),
                  (ie |= (Z > 0 ? 1 : 0) * P),
                  (P <<= 1));
              switch (ie) {
                case 0:
                  for (ie = 0, te = Math.pow(2, 8), P = 1; P != te; )
                    ((Z = B.val & B.position),
                      (B.position >>= 1),
                      B.position == 0 && ((B.position = y), (B.val = w(B.index++))),
                      (ie |= (Z > 0 ? 1 : 0) * P),
                      (P <<= 1));
                  W = s(ie);
                  break;
                case 1:
                  for (ie = 0, te = Math.pow(2, 16), P = 1; P != te; )
                    ((Z = B.val & B.position),
                      (B.position >>= 1),
                      B.position == 0 && ((B.position = y), (B.val = w(B.index++))),
                      (ie |= (Z > 0 ? 1 : 0) * P),
                      (P <<= 1));
                  W = s(ie);
                  break;
                case 2:
                  return '';
              }
              for (_[3] = W, re = W, D.push(W); ; ) {
                if (B.index > m) return '';
                for (ie = 0, te = Math.pow(2, Y), P = 1; P != te; )
                  ((Z = B.val & B.position),
                    (B.position >>= 1),
                    B.position == 0 && ((B.position = y), (B.val = w(B.index++))),
                    (ie |= (Z > 0 ? 1 : 0) * P),
                    (P <<= 1));
                switch ((W = ie)) {
                  case 0:
                    for (ie = 0, te = Math.pow(2, 8), P = 1; P != te; )
                      ((Z = B.val & B.position),
                        (B.position >>= 1),
                        B.position == 0 && ((B.position = y), (B.val = w(B.index++))),
                        (ie |= (Z > 0 ? 1 : 0) * P),
                        (P <<= 1));
                    ((_[$++] = s(ie)), (W = $ - 1), C--);
                    break;
                  case 1:
                    for (ie = 0, te = Math.pow(2, 16), P = 1; P != te; )
                      ((Z = B.val & B.position),
                        (B.position >>= 1),
                        B.position == 0 && ((B.position = y), (B.val = w(B.index++))),
                        (ie |= (Z > 0 ? 1 : 0) * P),
                        (P <<= 1));
                    ((_[$++] = s(ie)), (W = $ - 1), C--);
                    break;
                  case 2:
                    return D.join('');
                }
                if ((C == 0 && ((C = Math.pow(2, Y)), Y++), _[W])) G = _[W];
                else if (W === $) G = re + re.charAt(0);
                else return null;
                (D.push(G),
                  (_[$++] = re + G.charAt(0)),
                  C--,
                  (re = G),
                  C == 0 && ((C = Math.pow(2, Y)), Y++));
              }
            },
          };
          return j;
        })();
        c != null
          ? (c.exports = a)
          : typeof angular < 'u' &&
            angular != null &&
            angular.module('LZString', []).factory('LZString', function () {
              return a;
            });
      })(is)),
    is.exports
  );
}
Zf();
const Jn = {
    SESSION_ID: 'quiz_session_id',
    QUIZ_STATE: 'quiz_state',
    SKIP_CONFLICT: 'quiz_skip_conflict',
  },
  xc = 2;
function Jf() {
  let c = sessionStorage.getItem(Jn.SESSION_ID);
  return (c || ((c = crypto.randomUUID()), sessionStorage.setItem(Jn.SESSION_ID, c)), c);
}
function bf(c) {
  const { currentStep: a, worldviews: s, activeWorldviewId: k } = c,
    x = {};
  for (const [T, j] of Object.entries(s)) {
    const m = {};
    for (const [y, w] of Object.entries(j.questions))
      m[y] = { credences: w.credences, inputMode: w.inputMode, lockedKey: w.lockedKey };
    x[T] = { questions: m };
  }
  const E = {
    version: xc,
    timestamp: Date.now(),
    state: { currentStep: a, worldviews: x, activeWorldviewId: k },
  };
  sessionStorage.setItem(Jn.QUIZ_STATE, JSON.stringify(E));
}
function ep(c) {
  const { currentStep: a, questions: s } = c;
  return { currentStep: a, worldviews: { 1: { questions: s } }, activeWorldviewId: '1' };
}
function ss() {
  const c = sessionStorage.getItem(Jn.QUIZ_STATE);
  if (!c) return null;
  try {
    const a = JSON.parse(c);
    return a.version === 1 ? ep(a.state) : a.version !== xc ? (eo(), null) : a.state;
  } catch {
    return (eo(), null);
  }
}
function eo() {
  sessionStorage.removeItem(Jn.QUIZ_STATE);
}
function tp() {
  sessionStorage.setItem(Jn.SKIP_CONFLICT, 'true');
}
function us() {
  window.location.hash &&
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
const _c = {
    default: ['#81B29A', '#98C1D9', '#E07A5F'],
    selection: ['#81B29A', '#98C1D9', '#E07A5F'],
    credence: ['#81B29A', '#98C1D9', '#E07A5F'],
  },
  np = '#81B29A',
  Ec = { OPTIONS: 'options' },
  st = {
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
 */ const rp = (c) => c.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  Cc = (...c) =>
    c
      .filter((a, s, k) => !!a && a.trim() !== '' && k.indexOf(a) === s)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var lp = {
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
 */ const op = V.forwardRef(
  (
    {
      color: c = 'currentColor',
      size: a = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: k,
      className: x = '',
      children: E,
      iconNode: T,
      ...j
    },
    m
  ) =>
    V.createElement(
      'svg',
      {
        ref: m,
        ...lp,
        width: a,
        height: a,
        stroke: c,
        strokeWidth: k ? (Number(s) * 24) / Number(a) : s,
        className: Cc('lucide', x),
        ...j,
      },
      [...T.map(([y, w]) => V.createElement(y, w)), ...(Array.isArray(E) ? E : [E])]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dn = (c, a) => {
  const s = V.forwardRef(({ className: k, ...x }, E) =>
    V.createElement(op, { ref: E, iconNode: a, className: Cc(`lucide-${rp(c)}`, k), ...x })
  );
  return ((s.displayName = `${c}`), s);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ip = dn('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sp = dn('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const up = dn('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ap = dn('ExternalLink', [
  ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
  ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
  ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cp = dn('Layers', [
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
 */ const Nc = dn('Lock', [
  ['rect', { width: '18', height: '11', x: '3', y: '11', rx: '2', ry: '2', key: '1w4ew1' }],
  ['path', { d: 'M7 11V7a5 5 0 0 1 10 0v4', key: 'fwvmzm' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ds = dn('RotateCcw', [
  ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
  ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dp = dn('SlidersVertical', [
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
  fp = '_overlay_1wun3_1',
  pp = '_modal_1wun3_12',
  mp = '_title_1wun3_21',
  hp = '_message_1wun3_29',
  vp = '_buttons_1wun3_36',
  yp = '_button_1wun3_36',
  it = { overlay: fp, modal: pp, title: mp, message: hp, buttons: vp, button: yp };
function gp({ onKeepMine: c, onLoadShared: a, onOpenNewTab: s }) {
  return d.jsx('div', {
    className: it.overlay,
    children: d.jsxs('div', {
      className: it.modal,
      children: [
        d.jsx('h2', { className: it.title, children: 'You have unsaved progress' }),
        d.jsx('p', {
          className: it.message,
          children:
            'Loading this shared link will replace your current quiz answers. What would you like to do?',
        }),
        d.jsxs('div', {
          className: it.buttons,
          children: [
            d.jsx('button', {
              onClick: c,
              className: `btn btn-secondary ${it.button}`,
              children: 'Keep my progress',
            }),
            d.jsx('button', {
              onClick: a,
              className: `btn btn-primary ${it.button}`,
              children: 'Load shared results',
            }),
            d.jsxs('button', {
              onClick: s,
              className: `btn btn-secondary ${it.button}`,
              children: [d.jsx(ap, { size: 16 }), 'Open in new tab'],
            }),
          ],
        }),
      ],
    }),
  });
}
const { causes: ro } = no,
  fs = { none: 1, sqrt: 0.5, extreme: 0.1 };
function jc(c) {
  const a = (c == null ? void 0 : c.diminishingReturns) || no.diminishingReturns || 'sqrt';
  return fs[a] ?? 0.5;
}
function Tc(c, a, s = 0.5) {
  if (s >= 1) {
    const T = Math.max(...c);
    if (T <= 0) return c.map(() => a / c.length);
    const j = c.map((m, y) => (m === T ? y : -1)).filter((m) => m >= 0);
    return c.map((m, y) => (j.includes(y) ? a / j.length : 0));
  }
  const k = 1 / (1 - s),
    x = c.map((T) => (T > 0 ? Math.pow(T, k) : 0)),
    E = x.reduce((T, j) => T + j, 0);
  return E === 0 ? c.map(() => a / c.length) : x.map((T) => (T / E) * a);
}
function Oc(c = !1) {
  return Object.fromEntries(
    kc.questions
      .filter((a) => a.type !== 'intermission' && a.worldviewDimension)
      .map((a) => [
        a.id,
        c ? { ...a.worldviewDimension, name: a.editPanelTitle } : a.worldviewDimension,
      ])
  );
}
const lo = Oc();
function* oo(c) {
  const a = Object.keys(c);
  if (a.length === 0) return;
  const s = Object.keys(c[a[0]]);
  function* k(x, E) {
    if (x === a.length) {
      let j = 1;
      for (const m of a) j *= c[m][E[m]] / 100;
      yield { options: E, probability: j };
      return;
    }
    const T = a[x];
    for (const j of s) yield* k(x + 1, { ...E, [T]: j });
  }
  yield* k(0, {});
}
function wp(c, a, s) {
  let k = c.points;
  for (const [x, E] of Object.entries(s)) {
    const T = a[x],
      j = E.options[T];
    if (E.applyAs === 'multiplier') E.appliesWhen && c[E.appliesWhen] && (k *= j);
    else if (E.applyAs === 'exponent' && E.appliesTo) {
      const m = c[E.appliesTo] || 1;
      k *= Math.pow(m, j);
    }
  }
  return k;
}
function io(c, a, s) {
  const k = {};
  for (const [x, E] of Object.entries(a)) k[x] = wp(E, c, s);
  return k;
}
function _p(c) {
  const a = Math.max(...Object.values(c));
  return Object.keys(c).filter((s) => Math.abs(c[s] - a) < 1e-4);
}
function vs(c) {
  return Object.fromEntries(Object.keys(c).map((a) => [a, 0]));
}
function Sp(c, a) {
  const s = (a == null ? void 0 : a.causes) || ro,
    k = (a == null ? void 0 : a.dimensions) || lo,
    x = jc(a),
    E = Object.keys(s),
    T = vs(s);
  for (const { options: w, probability: _ } of oo(c)) {
    const C = io(w, s, k);
    for (const [$, Y] of Object.entries(C)) T[$] += _ * Y;
  }
  const j = E.map((w) => T[w]),
    m = Tc(j, 100, x),
    y = { evs: T };
  return (
    E.forEach((w, _) => {
      y[w] = m[_];
    }),
    y
  );
}
function kp(c, a) {
  const s = (a == null ? void 0 : a.causes) || ro,
    k = (a == null ? void 0 : a.dimensions) || lo,
    x = vs(s);
  for (const { options: T, probability: j } of oo(c)) {
    const m = io(T, s, k),
      y = _p(m),
      w = j / y.length;
    for (const _ of y) x[_] += w;
  }
  const E = {};
  for (const T of Object.keys(s)) E[T] = x[T] * 100;
  return E;
}
function xp(c, a) {
  const s = (a == null ? void 0 : a.causes) || ro,
    k = (a == null ? void 0 : a.dimensions) || lo,
    x = jc(a),
    E = Object.keys(s),
    T = vs(s);
  for (const { options: j, probability: m } of oo(c)) {
    const y = io(j, s, k),
      w = m * 100,
      _ = E.map(($) => y[$]),
      C = Tc(_, w, x);
    E.forEach(($, Y) => {
      T[$] += C[Y];
    });
  }
  return T;
}
function Ep(c, a) {
  const s = (a == null ? void 0 : a.causes) || ro,
    k = (a == null ? void 0 : a.dimensions) || lo,
    x = Object.keys(s),
    E = Cp(x);
  let T = E[0],
    j = -1 / 0;
  for (const m of E) {
    let y = 1 / 0;
    for (const { options: w, probability: _ } of oo(c)) {
      if (_ < 0.001) continue;
      const C = io(w, s, k);
      let $ = 0;
      for (const Y of x) $ += C[Y] * (m[Y] / 100);
      y = Math.min(y, $);
    }
    y > j && ((j = y), (T = { ...m }));
  }
  return T;
}
function Cp(c) {
  const a = [],
    s = c.length,
    k = (m) => {
      const y = {};
      return (
        c.forEach((w, _) => {
          y[w] = m[_];
        }),
        y
      );
    };
  for (let m = 0; m < s; m++) {
    const y = new Array(s).fill(0);
    ((y[m] = 100), a.push(k(y)));
  }
  for (let m = 0; m < s; m++)
    for (let y = m + 1; y < s; y++) {
      const w = new Array(s).fill(0);
      ((w[m] = 50), (w[y] = 50), a.push(k(w)));
    }
  const x = Math.floor(100 / s),
    E = 100 - x * s,
    T = new Array(s).fill(x);
  ((T[0] += E), a.push(k(T)));
  const j = [
    [60, 20, 20],
    [70, 15, 15],
    [80, 10, 10],
  ];
  for (const m of j)
    if (m.length === s)
      for (let y = 0; y < s; y++) {
        const w = new Array(s).fill(0);
        w[y] = m[0];
        let _ = 1;
        for (let C = 0; C < s; C++) C !== y && _ < m.length && (w[C] = m[_++]);
        a.push(k(w));
      }
  return a;
}
function Lc(c, a, s, k = null, x = null) {
  const E = x ? s[x] : 0,
    T = 100 - E;
  a = Math.max(0, Math.min(T, a));
  const j = k || s,
    m = Object.keys(s).filter((C) => C !== c && C !== x),
    y = m.reduce((C, $) => C + j[$], 0),
    w = 100 - a - E,
    _ = { [c]: a };
  if ((x && (_[x] = s[x]), y === 0)) {
    const C = Math.floor(w / m.length);
    let $ = w - C * m.length;
    m.forEach((Y, G) => {
      _[Y] = C + (G < $ ? 1 : 0);
    });
  } else {
    let C = 0;
    m.forEach(($, Y) => {
      if (Y === m.length - 1) _[$] = Math.max(0, w - C);
      else {
        const G = j[$] / y,
          D = w * G;
        ((_[$] = Math.max(0, D)), (C += _[$]));
      }
    });
  }
  return _;
}
function Ic(c) {
  const a = Object.keys(c),
    s = {};
  let k = 0;
  return (
    a.slice(0, -1).forEach((x) => {
      ((s[x] = Math.round(c[x])), (k += s[x]));
    }),
    (s[a[a.length - 1]] = 100 - k),
    s
  );
}
const { questions: Np } = kc,
  { causes: jp, defaultCredences: to } = no;
function Tp(c) {
  var a;
  return !((a = c.type) != null && a.startsWith('_'));
}
const Ue = Np.filter(Tp);
function Wt(c) {
  return (c == null ? void 0 : c.type) === st.INTERMISSION;
}
function as(c, a) {
  let s = 0;
  for (let k = 0; k < a; k++) Wt(c[k]) || s++;
  return s;
}
function Op(c) {
  {
    const a = c.type || st.DEFAULT;
    return _c[a] || _c[st.DEFAULT];
  }
}
const Lp = Ue.filter((c) => !Wt(c)),
  cs = Lp.length,
  Sc = Ue.map((c) => {
    if (Wt(c)) return { ...c, type: st.INTERMISSION };
    const a = Op(c);
    return {
      ...c,
      type: c.type || st.DEFAULT,
      options: c.options.map((s, k) => ({ ...s, color: a[k] || a[0] })),
    };
  });
function Rc() {
  return { credences: { ...to }, originalCredences: null, inputMode: Ec.OPTIONS, lockedKey: null };
}
function Pc() {
  return Object.fromEntries(Ue.filter((c) => !Wt(c)).map((c) => [c.id, Rc()]));
}
const Wr = ['1', '2', '3'];
function ps() {
  return Object.fromEntries(Wr.map((c) => [c, { questions: Pc() }]));
}
function Ip(c) {
  return c != null && c.questions
    ? Object.values(c.questions).some((a) =>
        a.credences ? Object.entries(a.credences).some(([s, k]) => k !== (to[s] ?? 0)) : !1
      )
    : !1;
}
const Mc = {
    currentStep: 'welcome',
    worldviews: ps(),
    activeWorldviewId: '1',
    expandedPanel: null,
    debugConfig: null,
  },
  xe = {
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
  };
function ms(c) {
  return c.worldviews[c.activeWorldviewId].questions;
}
function Rp(c, a, s) {
  const k = ms(c);
  return {
    ...c,
    worldviews: {
      ...c.worldviews,
      [c.activeWorldviewId]: { questions: { ...k, [a]: { ...k[a], ...s } } },
    },
  };
}
function Pp(c, a) {
  switch (a.type) {
    case xe.GO_TO_STEP:
      return { ...c, currentStep: a.payload };
    case xe.UPDATE_QUESTION:
      return Rp(c, a.payload.questionId, a.payload.updates);
    case xe.SET_EXPANDED_PANEL:
      return { ...c, expandedPanel: a.payload };
    case xe.SAVE_ORIGINALS: {
      const s = ms(c);
      return {
        ...c,
        worldviews: {
          ...c.worldviews,
          [c.activeWorldviewId]: {
            questions: Object.fromEntries(
              Object.entries(s).map(([k, x]) => [
                k,
                { ...x, originalCredences: x.originalCredences || { ...x.credences } },
              ])
            ),
          },
        },
      };
    }
    case xe.RESET_TO_ORIGINAL: {
      const s = ms(c);
      return {
        ...c,
        worldviews: {
          ...c.worldviews,
          [c.activeWorldviewId]: {
            questions: Object.fromEntries(
              Object.entries(s).map(([k, x]) => [
                k,
                { ...x, credences: x.originalCredences ? { ...x.originalCredences } : x.credences },
              ])
            ),
          },
        },
      };
    }
    case xe.RESET_QUIZ:
      return { ...Mc, worldviews: ps() };
    case xe.SWITCH_WORLDVIEW:
      return Wr.includes(a.payload) ? { ...c, activeWorldviewId: a.payload } : c;
    case xe.RESTORE_FROM_URL:
    case xe.RESTORE_FROM_SESSION: {
      const s = a.type === xe.RESTORE_FROM_URL,
        {
          worldviews: k,
          activeWorldviewId: x,
          questions: E,
          credences: T,
          currentStep: j,
        } = a.payload,
        m = (_, C) => ({
          credences: _.credences,
          originalCredences: C ? { ..._.credences } : null,
          inputMode: _.inputMode || Ec.OPTIONS,
          lockedKey: _.lockedKey || null,
        }),
        y = (_, C) => {
          const $ = {};
          for (const [Y, G] of Object.entries(_)) {
            const D = {};
            for (const [X, re] of Object.entries(G.questions)) D[X] = m(re, C);
            $[Y] = { questions: D };
          }
          for (const Y of Wr) $[Y] || ($[Y] = { questions: Pc() });
          return $;
        };
      if (k && x)
        return { ...c, currentStep: s ? 'results' : j, worldviews: y(k, s), activeWorldviewId: x };
      const w = {};
      if (E) for (const [_, C] of Object.entries(E)) w[_] = m(C, s);
      else if (T)
        for (const [_, C] of Object.entries(T))
          w[_] = { ...Rc(), credences: C, originalCredences: s ? { ...C } : null };
      return {
        ...c,
        currentStep: s ? 'results' : j,
        worldviews: { ...ps(), 1: { questions: w } },
        activeWorldviewId: '1',
      };
    }
    case xe.SET_DEBUG_CONFIG:
      return { ...c, debugConfig: a.payload };
    default:
      return c;
  }
}
const zc = V.createContext(null);
function Mp({ children: c }) {
  const [a, s] = V.useReducer(Pp, Mc),
    [k, x] = V.useState(null),
    [E, T] = V.useState(!0),
    [j, m] = V.useState(null),
    [y] = V.useState(() => Jf()),
    w = V.useRef(null);
  (V.useEffect(() => {
    {
      const z = ss();
      (z && s({ type: xe.RESTORE_FROM_SESSION, payload: z }), T(!1));
      return;
    }
  }, []),
    V.useEffect(() => {}, []));
  const _ = V.useCallback(() => {
      const z = ss();
      (z && s({ type: xe.RESTORE_FROM_SESSION, payload: z }), us(), m(null));
    }, []),
    C = V.useCallback(() => {
      (j != null && j.shareData && (s({ type: xe.RESTORE_FROM_URL, payload: j.shareData }), eo()),
        us(),
        m(null));
    }, [j]),
    $ = V.useCallback(() => {
      (tp(), j != null && j.shareUrl && window.open(j.shareUrl, '_blank'));
      const z = ss();
      (z && s({ type: xe.RESTORE_FROM_SESSION, payload: z }), us(), m(null));
    }, [j]);
  V.useEffect(() => {
    if (!(E || a.currentStep === 'welcome'))
      return (
        w.current && clearTimeout(w.current),
        (w.current = setTimeout(() => {
          bf({
            currentStep: a.currentStep,
            worldviews: a.worldviews,
            activeWorldviewId: a.activeWorldviewId,
          });
        }, 300)),
        () => {
          w.current && clearTimeout(w.current);
        }
      );
  }, [a.currentStep, a.worldviews, a.activeWorldviewId, E]);
  const Y = V.useCallback((z) => {
      s({ type: xe.GO_TO_STEP, payload: z });
    }, []),
    G = V.useCallback((z, ee) => {
      s({ type: xe.UPDATE_QUESTION, payload: { questionId: z, updates: ee } });
    }, []),
    D = V.useCallback((z, ee) => G(z, { credences: ee }), [G]),
    X = V.useCallback((z, ee) => G(z, { inputMode: ee }), [G]),
    re = V.useCallback((z, ee) => G(z, { lockedKey: ee }), [G]),
    ie = V.useCallback((z) => {
      s({ type: xe.SET_EXPANDED_PANEL, payload: z });
    }, []),
    Z = V.useCallback(() => {
      s({ type: xe.SAVE_ORIGINALS });
    }, []),
    te = V.useCallback(() => {
      s({ type: xe.RESET_TO_ORIGINAL });
    }, []),
    P = V.useCallback(() => {
      (s({ type: xe.RESET_QUIZ }), eo());
    }, []),
    W = V.useCallback((z) => {
      s({ type: xe.SET_DEBUG_CONFIG, payload: z });
    }, []),
    B = V.useCallback((z) => {
      s({ type: xe.SWITCH_WORLDVIEW, payload: z });
    }, []),
    Re = V.useCallback((z) => Ue.findIndex((ee) => ee.id === z), []),
    Ke = V.useCallback(
      (z) => {
        const ee = Re(z);
        return ee === 0 ? 'welcome' : Ue[ee - 1].id;
      },
      [Re]
    ),
    be = V.useCallback(
      (z) => {
        const ee = Re(z);
        return ee === Ue.length - 1 ? 'results' : Ue[ee + 1].id;
      },
      [Re]
    ),
    Xe = V.useCallback(() => {
      Y(Ue[0].id);
    }, [Y]),
    De = V.useCallback(() => {
      a.currentStep === 'results' ? Y(Ue[Ue.length - 1].id) : Y(Ke(a.currentStep));
    }, [a.currentStep, Y, Ke]),
    He = V.useCallback(() => {
      const z = be(a.currentStep);
      (z === 'results' && Z(), Y(z));
    }, [a.currentStep, Y, be, Z]),
    Ce = V.useMemo(
      () => a.worldviews[a.activeWorldviewId].questions,
      [a.worldviews, a.activeWorldviewId]
    ),
    Ne = V.useCallback(
      (z) => {
        var fn;
        const ee = z === 'original' ? 'originalCredences' : 'credences',
          ut = Ue.filter((Qt) => !Wt(Qt)),
          pt = Ce[(fn = ut[0]) == null ? void 0 : fn.id];
        return z === 'original' && !(pt != null && pt.originalCredences)
          ? null
          : Object.fromEntries(
              ut.map((Qt) => {
                var bn;
                return [Qt.id, ((bn = Ce[Qt.id]) == null ? void 0 : bn[ee]) || to];
              })
            );
      },
      [Ce]
    ),
    pe = V.useCallback(
      (z, ee) =>
        z
          ? {
              maxEV: Sp(z, ee),
              parliament: kp(z, ee),
              mergedFavorites: xp(z, ee),
              maximin: Ep(z, ee),
            }
          : null,
      []
    ),
    I = V.useMemo(() => pe(Ne('current'), a.debugConfig), [Ne, pe, a.debugConfig]),
    F = V.useMemo(() => pe(Ne('original'), a.debugConfig), [Ne, pe, a.debugConfig]),
    U = V.useMemo(
      () =>
        Object.values(Ce).some(
          (z) =>
            z.originalCredences &&
            JSON.stringify(z.credences) !== JSON.stringify(z.originalCredences)
        ),
      [Ce]
    ),
    h = V.useMemo(
      () => Object.fromEntries(Wr.map((z) => [z, Ip(a.worldviews[z])])),
      [a.worldviews]
    ),
    N = V.useMemo(() => Re(a.currentStep), [a.currentStep, Re]),
    le = V.useMemo(() => (N === -1 ? null : Sc[N]), [N]),
    oe = V.useMemo(() => {
      if (N === -1) return -1;
      const z = Ue[N],
        ee = as(Ue, N);
      return Wt(z) ? ee : ee + 1;
    }, [N]),
    ue = V.useMemo(() => {
      if (N === -1) return 0;
      const z = Ue[N];
      return ((Wt(z) ? as(Ue, N) : oe) / cs) * 100;
    }, [N, oe]),
    ae = V.useMemo(() => {
      if (N === -1) return '';
      const z = Ue[N];
      return `Question ${Wt(z) ? as(Ue, N) : oe} of ${cs}`;
    }, [N, oe]),
    me = V.useMemo(() => {
      const z = {};
      return (
        Ue.filter((ee) => !Wt(ee)).forEach((ee) => {
          const ut = Ce[ee.id];
          ut &&
            (z[ee.id] = {
              credences: ut.credences,
              setCredences: (pt) => D(ee.id, pt),
              originalCredences: ut.originalCredences,
              inputMode: ut.inputMode,
              setInputMode: (pt) => X(ee.id, pt),
              lockedKey: ut.lockedKey,
              setLockedKey: (pt) => re(ee.id, pt),
            });
        }),
        z
      );
    }, [Ce, D, X, re]),
    fe = V.useMemo(
      () => ({
        currentStep: a.currentStep,
        questions: Ce,
        worldviews: a.worldviews,
        activeWorldviewId: a.activeWorldviewId,
        expandedPanel: a.expandedPanel,
        debugConfig: a.debugConfig,
        shareUrlError: k,
        isHydrating: E,
        sessionId: y,
        questionsConfig: Sc,
        causesConfig: jp,
        defaultCredences: to,
        worldviewIds: Wr,
        goToStep: Y,
        setCredences: D,
        setInputMode: X,
        setLockedKey: re,
        setExpandedPanel: ie,
        saveOriginals: Z,
        resetToOriginal: te,
        resetQuiz: P,
        setDebugConfig: W,
        switchWorldview: B,
        getQuestionIndex: Re,
        getPrevStep: Ke,
        getNextStep: be,
        startQuiz: Xe,
        goBack: De,
        goForward: He,
        currentQuestion: le,
        currentQuestionIndex: N,
        totalQuestions: cs,
        progressPercentage: ue,
        questionNumber: ae,
        hasChanged: U,
        hasProgressMap: h,
        calculationResults: I,
        originalCalculationResults: F,
        stateMap: me,
      }),
      [
        a.currentStep,
        Ce,
        a.worldviews,
        a.activeWorldviewId,
        a.expandedPanel,
        a.debugConfig,
        k,
        E,
        y,
        Y,
        D,
        X,
        re,
        ie,
        Z,
        te,
        P,
        W,
        B,
        Re,
        Ke,
        be,
        Xe,
        De,
        He,
        le,
        N,
        ue,
        ae,
        U,
        h,
        I,
        F,
        me,
      ]
    );
  return d.jsxs(zc.Provider, {
    value: fe,
    children: [c, j && d.jsx(gp, { onKeepMine: _, onLoadShared: C, onOpenNewTab: $ })],
  });
}
const so = ({ subtitle: c }) =>
  d.jsxs('header', {
    className: 'header',
    children: [
      d.jsxs('div', {
        className: 'header-brand',
        children: [
          d.jsx('img', {
            src: '/quiz-demo/prototypes/multiple-worldviews/NewLogoSVG.svg',
            alt: 'Rethink Priorities',
            height: '24',
          }),
          d.jsx('span', { className: 'header-title', children: 'Donor Compass' }),
        ],
      }),
      c && d.jsx('div', { className: 'header-subtitle', children: c }),
    ],
  });
function Qr() {
  const c = V.useContext(zc);
  if (!c) throw new Error('useQuiz must be used within a QuizProvider');
  return c;
}
const zp = '_container_au1c0_3',
  Dp = '_heading_au1c0_8',
  Fp = '_headingEmphasis_au1c0_17',
  Ap = '_intro_au1c0_29',
  Bp = '_infoBox_au1c0_37',
  Up = '_infoBoxLabel_au1c0_45',
  $p = '_infoBoxGrid_au1c0_52',
  Wp = '_infoBoxItem_au1c0_59',
  cn = {
    container: zp,
    heading: Dp,
    headingEmphasis: Fp,
    intro: Ap,
    infoBox: Bp,
    infoBoxLabel: Up,
    infoBoxGrid: $p,
    infoBoxItem: Wp,
  },
  Qp = {
    timeEstimate: '~3 minutes',
    headingLine1: 'Where Should Your',
    headingLine2: 'Giving Go?',
    intro:
      'Uncertain about your ethical views? This tool helps you allocate resources across different causes based on your moral credences—the probabilities you assign to different ethical perspectives.',
    startButton: 'Start Quiz →',
    previewLabel: "You'll be asked about:",
  },
  Hp = { back: '← Back', continue: 'Continue →', backToQuiz: '← Back to Quiz' },
  Vp = { modeToggle: { pickOne: 'Pick One', customMix: 'Custom Mix' } },
  Gp = {
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
  qp = {
    modifiedBadge: 'modified',
    sliderNote: 'Sliders auto-balance to 100%',
    resetButton: 'Reset',
  },
  Yp = { lockTooltip: 'Lock slider', unlockTooltip: 'Unlock slider' },
  ve = { welcome: Qp, navigation: Hp, questionScreen: Vp, results: Gp, editPanel: qp, sliders: Yp };
function Kp() {
  const { questionsConfig: c, startQuiz: a } = Qr(),
    s = c.filter((k) => k.type !== st.INTERMISSION);
  return d.jsxs('div', {
    className: 'screen',
    children: [
      d.jsx(so, { subtitle: ve.welcome.timeEstimate }),
      d.jsx('main', {
        className: 'screen-main',
        children: d.jsxs('div', {
          className: cn.container,
          children: [
            d.jsxs('h1', {
              className: cn.heading,
              children: [
                ve.welcome.headingLine1,
                d.jsx('br', {}),
                d.jsx('span', { className: cn.headingEmphasis, children: ve.welcome.headingLine2 }),
              ],
            }),
            d.jsx('p', { className: cn.intro, children: ve.welcome.intro }),
            d.jsx('button', {
              onClick: a,
              className: 'btn btn-primary',
              children: ve.welcome.startButton,
            }),
            d.jsxs('div', {
              className: cn.infoBox,
              children: [
                d.jsx('div', { className: cn.infoBoxLabel, children: ve.welcome.previewLabel }),
                d.jsx('div', {
                  className: cn.infoBoxGrid,
                  children: s.map((k) =>
                    d.jsxs(
                      'div',
                      { className: cn.infoBoxItem, children: [k.emoji, ' ', k.previewText] },
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
const ys = ({ percentage: c }) =>
    d.jsx('div', {
      className: 'progress-container',
      children: d.jsx('div', {
        className: 'progress-track',
        children: d.jsx('div', { className: 'progress-fill', style: { width: `${c}%` } }),
      }),
    }),
  Xp = '_modeToggle_1eqly_3',
  Zp = '_button_1eqly_10',
  Jp = '_options_1eqly_23',
  bp = '_active_1eqly_29',
  em = '_sliders_1eqly_35',
  Nn = { modeToggle: Xp, button: Zp, options: Jp, active: bp, sliders: em },
  tm = ({ mode: c, setMode: a }) =>
    d.jsxs('div', {
      className: Nn.modeToggle,
      children: [
        d.jsx('button', {
          onClick: () => a('options'),
          className: `${Nn.button} ${Nn.options} ${c === 'options' ? Nn.active : ''}`,
          children: ve.questionScreen.modeToggle.pickOne,
        }),
        d.jsxs('button', {
          onClick: () => a('sliders'),
          className: `${Nn.button} ${Nn.sliders} ${c === 'sliders' ? Nn.active : ''}`,
          children: [d.jsx(dp, { size: 14 }), ve.questionScreen.modeToggle.customMix],
        }),
      ],
    }),
  nm = '_optionButton_ms2pz_3',
  rm = '_selected_ms2pz_20',
  lm = '_content_ms2pz_36',
  om = '_textContent_ms2pz_42',
  im = '_label_ms2pz_46',
  sm = '_description_ms2pz_58',
  um = '_checkmark_ms2pz_64',
  $t = {
    optionButton: nm,
    default: '_default_ms2pz_15',
    selected: rm,
    content: lm,
    textContent: om,
    label: im,
    description: sm,
    checkmark: um,
  };
function am({
  label: c,
  description: a,
  optionKey: s,
  credences: k,
  setCredences: x,
  color: E,
  setInputMode: T,
  setLockedKey: j,
}) {
  const m = k[s] === 100,
    y = () => {
      const w = Object.fromEntries(Object.keys(k).map((_) => [_, _ === s ? 100 : 0]));
      (x(w), T('options'), j && j(null));
    };
  return d.jsx('button', {
    onClick: y,
    className: `${$t.optionButton} ${m ? $t.selected : $t.default}`,
    style: { '--option-color': E },
    children: d.jsxs('div', {
      className: $t.content,
      children: [
        d.jsxs('div', {
          className: $t.textContent,
          children: [
            d.jsx('div', { className: `${$t.label} ${m ? $t.selected : ''}`, children: c }),
            d.jsx('div', { className: $t.description, children: a }),
          ],
        }),
        m && d.jsx('div', { className: $t.checkmark, children: '✓' }),
      ],
    }),
  });
}
function Dc({ credences: c, isLocked: a, lockedKey: s, onChange: k }) {
  const [x, E] = V.useState(null),
    [T, j] = V.useState(!1),
    m = V.useCallback(() => {
      a || (j(!0), E({ ...c }));
    }, [a, c]),
    y = V.useCallback(
      (_) => {
        if (a || !T) return;
        j(!1);
        const C = parseFloat(_.target.value);
        (k(C, x, !0, s), E(null));
      },
      [a, T, x, s, k]
    ),
    w = V.useCallback(
      (_) => {
        if (a) return;
        const C = parseFloat(_.target.value);
        k(C, x, !1, s);
      },
      [a, x, s, k]
    );
  return {
    isDragging: T,
    dragHandlers: {
      onChange: w,
      onMouseDown: m,
      onMouseUp: y,
      onMouseLeave: y,
      onTouchStart: m,
      onTouchEnd: y,
    },
  };
}
function Fc({ sliderKey: c, lockedKey: a, credences: s }) {
  return V.useMemo(() => {
    var m;
    const k = a === c,
      x = a && a !== c,
      E = x ? s[a] : 0,
      T = x ? 100 - E : 100,
      j = x ? `calc(${T}% + ${(50 - T) * 0.16}px)` : null;
    return {
      isLocked: k,
      hasLockedSibling: x,
      lockedValue: E,
      maxAllowed: T,
      thumbOffset: j,
      featureEnabled: ((m = $r.ui) == null ? void 0 : m.sliderLock) === !0,
    };
  }, [c, a, s]);
}
const cm = '_credenceSlider_yrqg7_4',
  dm = '_header_yrqg7_8',
  fm = '_label_yrqg7_15',
  pm = '_description_yrqg7_22',
  mm = '_value_yrqg7_28',
  hm = '_sliderRow_yrqg7_35',
  vm = '_sliderContainer_yrqg7_41',
  ym = '_lockLimit_yrqg7_46',
  gm = '_lockButton_yrqg7_55',
  wm = '_locked_yrqg7_73',
  _m = '_compactSlider_yrqg7_91',
  Sm = '_compactSelection_yrqg7_168',
  km = '_selected_yrqg7_186',
  xm = '_selectionLabel_yrqg7_191',
  Em = '_selectionIndicator_yrqg7_202',
  Ee = {
    credenceSlider: cm,
    header: dm,
    label: fm,
    description: pm,
    value: mm,
    sliderRow: hm,
    sliderContainer: vm,
    lockLimit: ym,
    lockButton: gm,
    locked: wm,
    compactSlider: _m,
    compactSelection: Sm,
    selected: km,
    selectionLabel: xm,
    selectionIndicator: Em,
  };
function Cm({
  label: c,
  description: a,
  value: s,
  onChange: k,
  color: x,
  credences: E,
  sliderKey: T,
  lockedKey: j,
  setLockedKey: m,
}) {
  const {
      isLocked: y,
      hasLockedSibling: w,
      thumbOffset: _,
      featureEnabled: C,
    } = Fc({ sliderKey: T, lockedKey: j, credences: E }),
    { isDragging: $, dragHandlers: Y } = Dc({
      credences: E,
      isLocked: y,
      lockedKey: j,
      onChange: k,
    }),
    G = () => {
      C && m(j === T ? null : T);
    },
    D = w
      ? `linear-gradient(to right, ${x} 0%, ${x} ${s}%, rgba(255,255,255,0.15) ${s}%, rgba(255,255,255,0.15) ${_}, rgba(255,255,255,0.08) ${_}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${x} 0%, ${x} ${s}%, rgba(255,255,255,0.15) ${s}%, rgba(255,255,255,0.15) 100%)`;
  return d.jsxs('div', {
    className: Ee.credenceSlider,
    children: [
      d.jsxs('div', {
        className: Ee.header,
        children: [
          d.jsxs('div', {
            children: [
              d.jsx('div', { className: Ee.label, children: c }),
              d.jsx('div', { className: Ee.description, children: a }),
            ],
          }),
          d.jsxs('div', {
            className: Ee.value,
            style: { color: x },
            children: [Math.round(s), '%'],
          }),
        ],
      }),
      d.jsxs('div', {
        className: Ee.sliderRow,
        children: [
          d.jsxs('div', {
            className: Ee.sliderContainer,
            children: [
              d.jsx('input', {
                type: 'range',
                min: '0',
                max: '100',
                step: 'any',
                value: s,
                ...Y,
                'data-dragging': $,
                disabled: y,
                style: { background: D, cursor: y ? 'not-allowed' : 'pointer' },
              }),
              w && d.jsx('div', { className: Ee.lockLimit, style: { left: _ } }),
            ],
          }),
          C &&
            d.jsx('button', {
              className: `${Ee.lockButton} ${y ? Ee.locked : ''}`,
              onClick: G,
              title: y ? ve.sliders.unlockTooltip : ve.sliders.lockTooltip,
              type: 'button',
              children: d.jsx(Nc, { size: 16 }),
            }),
        ],
      }),
    ],
  });
}
const Nm = '_container_9yo3m_3',
  jm = '_categoryLabel_9yo3m_8',
  Tm = '_heading_9yo3m_16',
  Om = '_instructions_9yo3m_23',
  Lm = '_buttonRow_9yo3m_30',
  Ur = { container: Nm, categoryLabel: jm, heading: Tm, instructions: Om, buttonRow: Lm };
function Im(c, a, s) {
  return c === st.SELECTION ? 'options' : c === st.CREDENCE ? 'sliders' : a;
}
function Rm() {
  const {
    currentQuestion: c,
    stateMap: a,
    questionNumber: s,
    progressPercentage: k,
    goBack: x,
    goForward: E,
  } = Qr();
  if (!c) return null;
  const T = a[c.id];
  if (!T) return null;
  const {
      credences: j,
      setCredences: m,
      inputMode: y,
      setInputMode: w,
      lockedKey: _,
      setLockedKey: C,
    } = T,
    $ = c.type || st.DEFAULT,
    Y = $ === st.DEFAULT,
    G = Im($, y),
    D = G === 'options' ? c.instructionsOptions : c.instructionsSliders;
  return d.jsxs('div', {
    className: 'screen',
    children: [
      d.jsx(so, { subtitle: s }),
      d.jsx(ys, { percentage: k }),
      d.jsx('main', {
        className: 'screen-main',
        children: d.jsxs('div', {
          className: Ur.container,
          children: [
            d.jsx('div', {
              className: Ur.categoryLabel,
              style: { color: np },
              children: c.categoryLabel,
            }),
            d.jsx('h2', { className: Ur.heading, children: c.heading }),
            d.jsx('p', { className: Ur.instructions, children: D }),
            Y && d.jsx(tm, { mode: y, setMode: w }),
            d.jsx('div', {
              className: 'card',
              children:
                G === 'options'
                  ? c.options.map((X) =>
                      d.jsx(
                        am,
                        {
                          label: X.label,
                          description: X.description,
                          optionKey: X.key,
                          credences: j,
                          setCredences: m,
                          color: X.color,
                          setInputMode: w,
                          setLockedKey: C,
                        },
                        X.key
                      )
                    )
                  : c.options.map((X) =>
                      d.jsx(
                        Cm,
                        {
                          label: X.label,
                          description: X.description,
                          value: j[X.key],
                          onChange: (re, ie, Z, te) => {
                            const P = Lc(X.key, re, j, ie, te);
                            m(Z ? Ic(P) : P);
                          },
                          color: X.color,
                          credences: j,
                          sliderKey: X.key,
                          lockedKey: _,
                          setLockedKey: C,
                        },
                        X.key
                      )
                    ),
            }),
            d.jsxs('div', {
              className: Ur.buttonRow,
              children: [
                d.jsx('button', {
                  onClick: x,
                  className: 'btn btn-secondary',
                  children: ve.navigation.back,
                }),
                d.jsx('button', {
                  onClick: E,
                  className: 'btn btn-primary',
                  children: ve.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const Pm = '_causeBar_as0sb_3',
  Mm = '_header_as0sb_7',
  zm = '_name_as0sb_15',
  Dm = '_percentage_as0sb_19',
  Fm = '_changeIndicator_as0sb_23',
  Am = '_up_as0sb_27',
  Bm = '_down_as0sb_31',
  Um = '_barTrack_as0sb_35',
  $m = '_barOriginal_as0sb_43',
  Wm = '_barFill_as0sb_49',
  Qm = '_barLabel_as0sb_58',
  Hm = '_compact_as0sb_65',
  _t = {
    causeBar: Pm,
    header: Mm,
    name: zm,
    percentage: Dm,
    changeIndicator: Fm,
    up: Am,
    down: Bm,
    barTrack: Um,
    barOriginal: $m,
    barFill: Wm,
    barLabel: Qm,
    compact: Hm,
  },
  Vm = ({
    name: c,
    percentage: a,
    color: s,
    originalPercentage: k = null,
    hasChanged: x = !1,
    simpleMode: E = !1,
  }) => {
    const T = !E && x && k !== null && a !== k,
      j = T && a > k;
    return d.jsxs('div', {
      className: `${_t.causeBar} ${E ? _t.compact : ''}`,
      children: [
        d.jsxs('div', {
          className: _t.header,
          children: [
            d.jsx('span', { className: _t.name, children: c }),
            d.jsxs('span', {
              className: _t.percentage,
              style: { color: s },
              children: [
                a.toFixed(0),
                '%',
                T &&
                  d.jsx('span', {
                    className: `${_t.changeIndicator} ${j ? _t.up : _t.down}`,
                    children: j ? '↑' : '↓',
                  }),
              ],
            }),
          ],
        }),
        d.jsxs('div', {
          className: _t.barTrack,
          children: [
            T &&
              d.jsx('div', { className: _t.barOriginal, style: { width: `${k}%`, background: s } }),
            d.jsx('div', {
              className: _t.barFill,
              style: { width: `${a}%`, background: s },
              children:
                a > 15 && d.jsxs('span', { className: _t.barLabel, children: [a.toFixed(0), '%'] }),
            }),
          ],
        }),
      ],
    });
  },
  Gm = '_resultsContainer_mggfv_3',
  qm = '_inner_mggfv_11',
  Ym = '_resultsHeader_mggfv_16',
  Km = '_title_mggfv_21',
  Xm = '_modifiedIndicator_mggfv_27',
  Zm = '_resultsGrid_mggfv_34',
  Jm = '_comparisonContainer_mggfv_42',
  bm = '_originalResults_mggfv_49',
  eh = '_newResults_mggfv_50',
  th = '_slideInLeft_mggfv_1',
  nh = '_slideInRight_mggfv_1',
  rh = '_comparisonDivider_mggfv_85',
  lh = '_dividerLine_mggfv_94',
  oh = '_dividerArrow_mggfv_101',
  ih = '_compactGrid_mggfv_108',
  sh = '_compactCard_mggfv_114',
  uh = '_cardHeader_mggfv_118',
  ah = '_cardIcon_mggfv_122',
  ch = '_cardTitle_mggfv_128',
  dh = '_resultCard_mggfv_132',
  fh = '_maxEV_mggfv_156',
  ph = '_parliament_mggfv_160',
  mh = '_cardSubtitle_mggfv_171',
  hh = '_cardFooter_mggfv_177',
  vh = '_adjustPanel_mggfv_185',
  yh = '_adjustHeader_mggfv_193',
  gh = '_adjustTitle_mggfv_200',
  wh = '_resetAllButton_mggfv_206',
  _h = '_panelList_mggfv_223',
  Sh = '_backButtonContainer_mggfv_229',
  kh = '_copied_mggfv_237',
  xh = '_error_mggfv_244',
  Eh = '_spinning_mggfv_250',
  Ch = '_spin_mggfv_250',
  Nh = '_resetDanger_mggfv_264',
  Le = {
    resultsContainer: Gm,
    inner: qm,
    resultsHeader: Ym,
    title: Km,
    modifiedIndicator: Xm,
    resultsGrid: Zm,
    comparisonContainer: Jm,
    originalResults: bm,
    newResults: eh,
    slideInLeft: th,
    slideInRight: nh,
    comparisonDivider: rh,
    dividerLine: lh,
    dividerArrow: oh,
    compactGrid: ih,
    compactCard: sh,
    cardHeader: uh,
    cardIcon: ah,
    cardTitle: ch,
    resultCard: dh,
    maxEV: fh,
    parliament: ph,
    cardSubtitle: mh,
    cardFooter: hh,
    adjustPanel: vh,
    adjustHeader: yh,
    adjustTitle: gh,
    resetAllButton: wh,
    panelList: _h,
    backButtonContainer: Sh,
    copied: kh,
    error: xh,
    spinning: Eh,
    spin: Ch,
    resetDanger: Nh,
  };
function Ac({
  methodKey: c,
  results: a,
  evs: s = null,
  originalResults: k = null,
  causeEntries: x,
  hasChanged: E = !1,
  simpleMode: T = !1,
}) {
  const j = ve.results.methods[c],
    m = c === 'mergedFavorites' ? 'merged' : c,
    y = s
      ? `${j.footerLabel} ${x.map(([w, _]) => `${_.name.slice(0, 2)} ${s[w].toFixed(0)}`).join(' · ')}`
      : j.footerText;
  return d.jsxs('div', {
    className: `${Le.resultCard} ${T ? Le.compactCard : ''}`,
    children: [
      d.jsxs('div', {
        className: Le.cardHeader,
        children: [
          d.jsx('div', { className: `${Le.cardIcon} ${Le[m]}`, children: j.icon }),
          d.jsxs('div', {
            children: [
              d.jsx('h3', { className: Le.cardTitle, children: j.title }),
              !T && d.jsx('p', { className: Le.cardSubtitle, children: j.subtitle }),
            ],
          }),
        ],
      }),
      x.map(([w, _]) =>
        d.jsx(
          Vm,
          {
            name: _.name,
            percentage: a[w],
            originalPercentage: k == null ? void 0 : k[w],
            color: _.color,
            hasChanged: !T && E,
            simpleMode: T,
          },
          w
        )
      ),
      !T && d.jsx('div', { className: Le.cardFooter, children: y }),
    ],
  });
}
const jh = '_container_1m8cr_3',
  Th = '_title_1m8cr_8',
  Oh = '_body_1m8cr_16',
  Lh = '_buttonRow_1m8cr_25',
  bl = { container: jh, title: Th, body: Oh, buttonRow: Lh };
function Ih() {
  const {
    currentQuestion: c,
    questionNumber: a,
    progressPercentage: s,
    calculationResults: k,
    causesConfig: x,
    goBack: E,
    goForward: T,
  } = Qr();
  if (!c) return null;
  const j = Object.entries(x),
    y = [
      { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
      { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
      { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
      { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
    ].filter((w) => {
      var _;
      return ((_ = $r.calculations) == null ? void 0 : _[w.flag]) === !0;
    });
  return d.jsxs('div', {
    className: 'screen',
    children: [
      d.jsx(so, { subtitle: a }),
      d.jsx(ys, { percentage: s }),
      d.jsx('main', {
        className: 'screen-main',
        children: d.jsxs('div', {
          className: bl.container,
          children: [
            d.jsx('h2', { className: bl.title, children: c.title }),
            d.jsx('p', { className: bl.body, children: c.body }),
            d.jsx('div', {
              className: Le.resultsGrid,
              children: y.map((w) =>
                d.jsx(
                  Ac,
                  {
                    methodKey: w.key,
                    results: k[w.key],
                    evs: w.hasEvs ? k[w.key].evs : null,
                    causeEntries: j,
                  },
                  w.key
                )
              ),
            }),
            d.jsxs('div', {
              className: bl.buttonRow,
              children: [
                d.jsx('button', {
                  onClick: E,
                  className: 'btn btn-secondary',
                  children: ve.navigation.back,
                }),
                d.jsx('button', {
                  onClick: T,
                  className: 'btn btn-primary',
                  children: ve.navigation.continue,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Rh({
  label: c,
  value: a,
  onChange: s,
  color: k,
  credences: x,
  sliderKey: E,
  lockedKey: T,
  setLockedKey: j,
}) {
  const {
      isLocked: m,
      hasLockedSibling: y,
      thumbOffset: w,
      featureEnabled: _,
    } = Fc({ sliderKey: E, lockedKey: T, credences: x }),
    { isDragging: C, dragHandlers: $ } = Dc({
      credences: x,
      isLocked: m,
      lockedKey: T,
      onChange: s,
    }),
    Y = () => {
      _ && j(T === E ? null : E);
    },
    G = y
      ? `linear-gradient(to right, ${k} 0%, ${k} ${a}%, rgba(255,255,255,0.15) ${a}%, rgba(255,255,255,0.15) ${w}, rgba(255,255,255,0.08) ${w}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${k} 0%, ${k} ${a}%, rgba(255,255,255,0.15) ${a}%, rgba(255,255,255,0.15) 100%)`;
  return d.jsxs('div', {
    className: Ee.compactSlider,
    children: [
      d.jsxs('div', {
        className: Ee.header,
        children: [
          d.jsx('span', { className: Ee.label, children: c }),
          d.jsxs('span', {
            className: Ee.value,
            style: { color: k },
            children: [Math.round(a), '%'],
          }),
        ],
      }),
      d.jsxs('div', {
        className: Ee.sliderRow,
        children: [
          d.jsxs('div', {
            className: Ee.sliderContainer,
            children: [
              d.jsx('input', {
                type: 'range',
                min: '0',
                max: '100',
                step: 'any',
                value: a,
                ...$,
                'data-dragging': C,
                disabled: m,
                style: { background: G, cursor: m ? 'not-allowed' : 'pointer' },
              }),
              y && d.jsx('div', { className: Ee.lockLimit, style: { left: w } }),
            ],
          }),
          _ &&
            d.jsx('button', {
              className: `${Ee.lockButton} ${m ? Ee.locked : ''}`,
              onClick: Y,
              title: m ? ve.sliders.unlockTooltip : ve.sliders.lockTooltip,
              type: 'button',
              children: d.jsx(Nc, { size: 14 }),
            }),
        ],
      }),
    ],
  });
}
function Ph({ label: c, color: a, isSelected: s, onSelect: k }) {
  return d.jsxs('button', {
    type: 'button',
    onClick: k,
    className: `${Ee.compactSelection} ${s ? Ee.selected : ''}`,
    style: { '--selection-color': a },
    children: [
      d.jsx('span', { className: Ee.selectionLabel, children: c }),
      d.jsx('span', {
        className: Ee.selectionIndicator,
        style: { borderColor: s ? a : void 0, backgroundColor: s ? a : void 0 },
        children: s && d.jsx(ip, { size: 12, strokeWidth: 3 }),
      }),
    ],
  });
}
const Mh = '_editPanel_1er15_3',
  zh = '_expanded_1er15_11',
  Dh = '_toggleButton_1er15_16',
  Fh = '_buttonContent_1er15_33',
  Ah = '_icon_1er15_39',
  Bh = '_title_1er15_43',
  Uh = '_modifiedBadge_1er15_48',
  $h = '_preview_1er15_56',
  Wh = '_chevron_1er15_62',
  Qh = '_content_1er15_66',
  Hh = '_footer_1er15_71',
  Vh = '_footerNote_1er15_78',
  Gh = '_resetButton_1er15_84',
  qh = '_selectionRow_1er15_103',
  Qe = {
    editPanel: Mh,
    expanded: zh,
    toggleButton: Dh,
    buttonContent: Fh,
    icon: Ah,
    title: Bh,
    modifiedBadge: Uh,
    preview: $h,
    chevron: Wh,
    content: Qh,
    footer: Hh,
    footerNote: Vh,
    resetButton: Gh,
    selectionRow: qh,
  };
function Yh({
  title: c,
  icon: a,
  credences: s,
  setCredences: k,
  originalCredences: x,
  configs: E,
  isExpanded: T,
  onToggle: j,
  lockedKey: m,
  setLockedKey: y,
  questionType: w = st.DEFAULT,
}) {
  const _ = x && JSON.stringify(s) !== JSON.stringify(x),
    C = w === st.SELECTION,
    $ = (D) => {
      const X = {};
      (E.forEach((re) => {
        X[re.key] = re.key === D ? 100 : 0;
      }),
        k(X));
    },
    Y = (D) => {
      (D.stopPropagation(), k({ ...x }));
    },
    G = E.map((D) => `${D.short}:${s[D.key]}%`).join(' ');
  return d.jsxs('div', {
    className: `${Qe.editPanel} ${T ? Qe.expanded : ''}`,
    children: [
      d.jsxs('button', {
        onClick: j,
        className: Qe.toggleButton,
        children: [
          d.jsxs('div', {
            className: Qe.buttonContent,
            children: [
              d.jsx('span', { className: Qe.icon, children: a }),
              d.jsx('span', { className: Qe.title, children: c }),
              _ &&
                d.jsx('span', {
                  className: Qe.modifiedBadge,
                  children: ve.editPanel.modifiedBadge,
                }),
              !T && d.jsx('span', { className: Qe.preview, children: G }),
            ],
          }),
          d.jsx('span', {
            className: Qe.chevron,
            children: T ? d.jsx(up, { size: 16 }) : d.jsx(sp, { size: 16 }),
          }),
        ],
      }),
      T &&
        d.jsx('div', {
          className: Qe.content,
          children: C
            ? d.jsxs(d.Fragment, {
                children: [
                  d.jsx('div', {
                    className: Qe.selectionRow,
                    children: E.map((D) =>
                      d.jsx(
                        Ph,
                        {
                          label: D.label,
                          color: D.color,
                          isSelected: s[D.key] === 100,
                          onSelect: () => $(D.key),
                        },
                        D.key
                      )
                    ),
                  }),
                  d.jsxs('div', {
                    className: Qe.footer,
                    children: [
                      d.jsx('span', {
                        className: Qe.footerNote,
                        children: ve.editPanel.selectionNote || 'Pick one option',
                      }),
                      _ &&
                        d.jsxs('button', {
                          onClick: Y,
                          className: Qe.resetButton,
                          children: [d.jsx(ds, { size: 10 }), ' ', ve.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              })
            : d.jsxs(d.Fragment, {
                children: [
                  E.map((D) =>
                    d.jsx(
                      Rh,
                      {
                        label: D.label,
                        value: s[D.key],
                        onChange: (X, re, ie, Z) => {
                          const te = Lc(D.key, X, s, re, Z);
                          k(ie ? Ic(te) : te);
                        },
                        color: D.color,
                        credences: s,
                        sliderKey: D.key,
                        lockedKey: m,
                        setLockedKey: y,
                      },
                      D.key
                    )
                  ),
                  d.jsxs('div', {
                    className: Qe.footer,
                    children: [
                      d.jsx('span', {
                        className: Qe.footerNote,
                        children: ve.editPanel.sliderNote,
                      }),
                      _ &&
                        d.jsxs('button', {
                          onClick: Y,
                          className: Qe.resetButton,
                          children: [d.jsx(ds, { size: 10 }), ' ', ve.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              }),
        }),
    ],
  });
}
function Kh({ worldviewIds: c, activeWorldviewId: a, hasProgressMap: s, onSwitch: k, onClose: x }) {
  return d.jsx('div', {
    className: it.overlay,
    onClick: x,
    children: d.jsxs('div', {
      className: it.modal,
      onClick: (E) => E.stopPropagation(),
      children: [
        d.jsx('h2', { className: it.title, children: 'Switch Worldview' }),
        d.jsx('p', {
          className: it.message,
          children:
            'Each worldview stores a separate set of quiz answers. Select a worldview to view or edit.',
        }),
        d.jsx('div', {
          className: it.buttons,
          children: c.map((E) => {
            const T = E === a,
              m = s[E] ? `Worldview ${E}` : `Worldview ${E} (empty)`;
            return d.jsxs(
              'button',
              {
                onClick: () => k(E),
                className: `btn ${T ? 'btn-primary' : 'btn-secondary'} ${it.button}`,
                disabled: T,
                children: [m, T && ' (current)'],
              },
              E
            );
          }),
        }),
      ],
    }),
  });
}
function Xh() {
  var Ne, pe;
  const {
      questionsConfig: c,
      causesConfig: a,
      stateMap: s,
      expandedPanel: k,
      setExpandedPanel: x,
      calculationResults: E,
      originalCalculationResults: T,
      hasChanged: j,
      resetToOriginal: m,
      resetQuiz: y,
      goBack: w,
      worldviews: _,
      activeWorldviewId: C,
      switchWorldview: $,
      worldviewIds: Y,
      hasProgressMap: G,
      startQuiz: D,
    } = Qr(),
    [X, re] = V.useState(!1),
    [ie, Z] = V.useState(!1),
    [te, P] = V.useState(null),
    [W, B] = V.useState(!1),
    Re = Object.entries(a),
    be = [
      { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
      { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
      { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
      { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
    ].filter((I) => {
      var F;
      return ((F = $r.calculations) == null ? void 0 : F[I.flag]) === !0;
    }),
    Xe = (I) => {
      (B(!1), $(I), G[I] || D());
    },
    De = (I) =>
      I.options.map((F) => ({
        key: F.key,
        label: F.panelLabel,
        short: F.panelShort,
        color: F.color,
      })),
    He = c.filter((I) => I.type !== st.INTERMISSION),
    Ce = () =>
      d.jsx('div', {
        className: Le.resultsGrid,
        children: be.map((I) => {
          const F = E == null ? void 0 : E[I.key];
          return F
            ? d.jsx(
                Ac,
                {
                  methodKey: I.key,
                  results: F,
                  evs: I.hasEvs ? F.evs : null,
                  originalResults: T == null ? void 0 : T[I.key],
                  causeEntries: Re,
                  hasChanged: j,
                },
                I.key
              )
            : null;
        }),
      });
  return d.jsxs('div', {
    className: Le.resultsContainer,
    children: [
      d.jsx(so, {}),
      d.jsx(ys, { percentage: 100 }),
      d.jsxs('div', {
        className: Le.inner,
        children: [
          d.jsx('div', {
            className: Le.resultsHeader,
            children: d.jsxs('h1', {
              className: Le.title,
              children: [
                ve.results.heading,
                ` (Worldview ${C})`,
                j &&
                  d.jsx('span', {
                    className: Le.modifiedIndicator,
                    children: ve.results.modifiedIndicator,
                  }),
              ],
            }),
          }),
          Ce(),
          d.jsxs('div', {
            className: Le.adjustPanel,
            children: [
              d.jsxs('div', {
                className: Le.adjustHeader,
                children: [
                  d.jsx('span', {
                    className: Le.adjustTitle,
                    children: ve.results.adjustCredencesHeading,
                  }),
                  j &&
                    d.jsxs('button', {
                      onClick: m,
                      className: Le.resetAllButton,
                      children: [d.jsx(ds, { size: 10 }), ' ', ve.results.resetAllButton],
                    }),
                ],
              }),
              d.jsx('div', {
                className: Le.panelList,
                children: He.map((I) => {
                  const F = s[I.id];
                  return F
                    ? d.jsx(
                        Yh,
                        {
                          title: I.editPanelTitle,
                          icon: I.emoji,
                          credences: F.credences,
                          setCredences: F.setCredences,
                          originalCredences: F.originalCredences,
                          configs: De(I),
                          isExpanded: k === I.id,
                          onToggle: () => x(k === I.id ? null : I.id),
                          lockedKey: F.lockedKey,
                          setLockedKey: F.setLockedKey,
                          questionType: I.type,
                        },
                        I.id
                      )
                    : null;
                }),
              }),
            ],
          }),
          d.jsxs('div', {
            className: Le.backButtonContainer,
            children: [
              d.jsx('button', {
                onClick: w,
                className: 'btn btn-secondary',
                children: ve.navigation.backToQuiz,
              }),
              d.jsxs('button', {
                onClick: () => B(!0),
                className: 'btn btn-secondary',
                children: [d.jsx(cp, { size: 16 }), 'Switch Worldview'],
              }),
              (Ne = $r.ui) == null ? void 0 : Ne.shareResults,
              (pe = $r.ui) == null ? void 0 : pe.resetButton,
            ],
          }),
        ],
      }),
      W &&
        d.jsx(Kh, {
          worldviewIds: Y,
          activeWorldviewId: C,
          hasProgressMap: G,
          onSwitch: Xe,
          onClose: () => B(!1),
        }),
    ],
  });
}
const Zh = '_debugButton_1fvy0_4',
  Jh = '_overlay_1fvy0_22',
  bh = '_modal_1fvy0_35',
  ev = '_header_1fvy0_46',
  tv = '_closeButton_1fvy0_60',
  nv = '_content_1fvy0_73',
  rv = '_section_1fvy0_79',
  lv = '_causeBlock_1fvy0_93',
  ov = '_fieldRow_1fvy0_106',
  iv = '_checkboxRow_1fvy0_130',
  sv = '_multiplierGroup_1fvy0_149',
  uv = '_dimInfo_1fvy0_159',
  av = '_multiplierRow_1fvy0_166',
  cv = '_footer_1fvy0_190',
  dv = '_saveButton_1fvy0_197',
  ze = {
    debugButton: Zh,
    overlay: Jh,
    modal: bh,
    header: ev,
    closeButton: tv,
    content: nv,
    section: rv,
    causeBlock: lv,
    fieldRow: ov,
    checkboxRow: iv,
    multiplierGroup: sv,
    dimInfo: uv,
    multiplierRow: av,
    footer: cv,
    saveButton: dv,
  },
  { causes: fv, diminishingReturns: pv } = no,
  mv = Oc(!0),
  hv = ({ onConfigChange: c }) => {
    const [a, s] = V.useState(!1),
      [k, x] = V.useState({
        causes: JSON.parse(JSON.stringify(fv)),
        dimensions: JSON.parse(JSON.stringify(mv)),
        diminishingReturns: pv,
      }),
      E = (m, y, w) => {
        x((_) => ({
          ..._,
          causes: {
            ..._.causes,
            [m]: {
              ..._.causes[m],
              [y]: y === 'name' || y === 'color' || typeof w == 'boolean' ? w : Number(w),
            },
          },
        }));
      },
      T = (m, y, w) => {
        x((_) => ({
          ..._,
          dimensions: {
            ..._.dimensions,
            [m]: { ..._.dimensions[m], options: { ..._.dimensions[m].options, [y]: Number(w) } },
          },
        }));
      },
      j = () => {
        (c(k), s(!1));
      };
    return d.jsxs(d.Fragment, {
      children: [
        d.jsx('button', {
          className: ze.debugButton,
          onClick: () => s(!0),
          title: 'Debug Settings',
          children: 'Settings',
        }),
        a &&
          d.jsx('div', {
            className: ze.overlay,
            onClick: () => s(!1),
            children: d.jsxs('div', {
              className: ze.modal,
              onClick: (m) => m.stopPropagation(),
              children: [
                d.jsxs('div', {
                  className: ze.header,
                  children: [
                    d.jsx('h2', { children: 'Calculation Debugger' }),
                    d.jsx('button', {
                      className: ze.closeButton,
                      onClick: () => s(!1),
                      children: 'x',
                    }),
                  ],
                }),
                d.jsxs('div', {
                  className: ze.content,
                  children: [
                    d.jsxs('section', {
                      className: ze.section,
                      children: [
                        d.jsx('h3', { children: 'DIMINISHING RETURNS' }),
                        d.jsx('div', {
                          className: ze.fieldRow,
                          children: d.jsxs('label', {
                            children: [
                              'Mode:',
                              d.jsx('select', {
                                value: k.diminishingReturns,
                                onChange: (m) =>
                                  x((y) => ({ ...y, diminishingReturns: m.target.value })),
                                children: Object.keys(fs).map((m) =>
                                  d.jsxs(
                                    'option',
                                    { value: m, children: [m, ' (power = ', fs[m], ')'] },
                                    m
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                        d.jsx('p', {
                          className: ze.dimInfo,
                          children:
                            'none = winner-take-all · sqrt = moderate spreading · extreme = near-equal',
                        }),
                      ],
                    }),
                    d.jsxs('section', {
                      className: ze.section,
                      children: [
                        d.jsx('h3', { children: 'CAUSES' }),
                        Object.entries(k.causes).map(([m, y]) =>
                          d.jsxs(
                            'div',
                            {
                              className: ze.causeBlock,
                              children: [
                                d.jsx('h4', { children: y.name }),
                                d.jsxs('div', {
                                  className: ze.fieldRow,
                                  children: [
                                    d.jsxs('label', {
                                      children: [
                                        'Points:',
                                        d.jsx('input', {
                                          type: 'number',
                                          value: y.points,
                                          onChange: (w) => E(m, 'points', w.target.value),
                                        }),
                                      ],
                                    }),
                                    d.jsxs('label', {
                                      children: [
                                        'Scale Factor:',
                                        d.jsx('input', {
                                          type: 'number',
                                          value: y.scaleFactor,
                                          onChange: (w) => E(m, 'scaleFactor', w.target.value),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                d.jsxs('div', {
                                  className: ze.checkboxRow,
                                  children: [
                                    d.jsxs('label', {
                                      children: [
                                        d.jsx('input', {
                                          type: 'checkbox',
                                          checked: y.helpsAnimals,
                                          onChange: (w) => E(m, 'helpsAnimals', w.target.checked),
                                        }),
                                        'Helps Animals',
                                      ],
                                    }),
                                    d.jsxs('label', {
                                      children: [
                                        d.jsx('input', {
                                          type: 'checkbox',
                                          checked: y.helpsFutureHumans,
                                          onChange: (w) =>
                                            E(m, 'helpsFutureHumans', w.target.checked),
                                        }),
                                        'Helps Future Humans',
                                      ],
                                    }),
                                    d.jsxs('label', {
                                      children: [
                                        d.jsx('input', {
                                          type: 'checkbox',
                                          checked: y.isSpeculative,
                                          onChange: (w) => E(m, 'isSpeculative', w.target.checked),
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
                    d.jsxs('section', {
                      className: ze.section,
                      children: [
                        d.jsx('h3', { children: 'DIMENSIONS (from questions)' }),
                        Object.entries(k.dimensions).map(([m, y]) =>
                          d.jsxs(
                            'div',
                            {
                              className: ze.multiplierGroup,
                              children: [
                                d.jsx('h4', { children: y.name }),
                                d.jsx('p', {
                                  className: ze.dimInfo,
                                  children:
                                    y.applyAs === 'multiplier'
                                      ? `Multiplier when: ${y.appliesWhen}`
                                      : `Exponent on: ${y.appliesTo}`,
                                }),
                                d.jsx('div', {
                                  className: ze.multiplierRow,
                                  children: Object.entries(y.options).map(([w, _]) =>
                                    d.jsxs(
                                      'label',
                                      {
                                        children: [
                                          w,
                                          ':',
                                          d.jsx('input', {
                                            type: 'number',
                                            step: y.applyAs === 'exponent' ? '0.1' : '0.01',
                                            value: _,
                                            onChange: (C) => T(m, w, C.target.value),
                                          }),
                                        ],
                                      },
                                      w
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
                d.jsx('div', {
                  className: ze.footer,
                  children: d.jsx('button', {
                    className: ze.saveButton,
                    onClick: j,
                    children: 'Save',
                  }),
                }),
              ],
            }),
          }),
      ],
    });
  },
  vv = {
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
function yv() {
  const {
    currentStep: c,
    currentQuestion: a,
    setDebugConfig: s,
    shareUrlError: k,
    isHydrating: x,
  } = Qr();
  if (x) return null;
  function E() {
    return c === 'welcome'
      ? d.jsx(Kp, {})
      : c === 'results'
        ? d.jsx(Xh, {})
        : a
          ? a.type === st.INTERMISSION
            ? d.jsx(Ih, {})
            : d.jsx(Rm, {})
          : null;
  }
  return d.jsxs(d.Fragment, {
    children: [
      k && d.jsx('div', { style: vv, children: k }),
      E(),
      d.jsx(hv, { onConfigChange: s }),
    ],
  });
}
function gv() {
  return d.jsx(Mp, { children: d.jsx(yv, {}) });
}
Hf.createRoot(document.getElementById('root')).render(
  d.jsx(V.StrictMode, { children: d.jsx(gv, {}) })
);
