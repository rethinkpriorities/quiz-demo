(function () {
  const u = document.createElement('link').relList;
  if (u && u.supports && u.supports('modulepreload')) return;
  for (const C of document.querySelectorAll('link[rel="modulepreload"]')) _(C);
  new MutationObserver((C) => {
    for (const E of C)
      if (E.type === 'childList')
        for (const T of E.addedNodes) T.tagName === 'LINK' && T.rel === 'modulepreload' && _(T);
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
  function _(C) {
    if (C.ep) return;
    C.ep = !0;
    const E = s(C);
    fetch(C.href, E);
  }
})();
var rs = { exports: {} },
  Ur = {},
  ls = { exports: {} },
  se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pc;
function $f() {
  if (pc) return se;
  pc = 1;
  var c = Symbol.for('react.element'),
    u = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    _ = Symbol.for('react.strict_mode'),
    C = Symbol.for('react.profiler'),
    E = Symbol.for('react.provider'),
    T = Symbol.for('react.context'),
    j = Symbol.for('react.forward_ref'),
    p = Symbol.for('react.suspense'),
    v = Symbol.for('react.memo'),
    w = Symbol.for('react.lazy'),
    k = Symbol.iterator;
  function x(h) {
    return h === null || typeof h != 'object'
      ? null
      : ((h = (k && h[k]) || h['@@iterator']), typeof h == 'function' ? h : null);
  }
  var A = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    G = Object.assign,
    H = {};
  function D(h, N, le) {
    ((this.props = h), (this.context = N), (this.refs = H), (this.updater = le || A));
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
  function V() {}
  V.prototype = D.prototype;
  function te(h, N, le) {
    ((this.props = h), (this.context = N), (this.refs = H), (this.updater = le || A));
  }
  var oe = (te.prototype = new V());
  ((oe.constructor = te), G(oe, D.prototype), (oe.isPureReactComponent = !0));
  var X = Array.isArray,
    ne = Object.prototype.hasOwnProperty,
    R = { current: null },
    Q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $(h, N, le) {
    var ie,
      ue = {},
      ae = null,
      me = null;
    if (N != null)
      for (ie in (N.ref !== void 0 && (me = N.ref), N.key !== void 0 && (ae = '' + N.key), N))
        ne.call(N, ie) && !Q.hasOwnProperty(ie) && (ue[ie] = N[ie]);
    var fe = arguments.length - 2;
    if (fe === 1) ue.children = le;
    else if (1 < fe) {
      for (var z = Array(fe), ee = 0; ee < fe; ee++) z[ee] = arguments[ee + 2];
      ue.children = z;
    }
    if (h && h.defaultProps)
      for (ie in ((fe = h.defaultProps), fe)) ue[ie] === void 0 && (ue[ie] = fe[ie]);
    return { $$typeof: c, type: h, key: ae, ref: me, props: ue, _owner: R.current };
  }
  function Pe(h, N) {
    return { $$typeof: c, type: h.type, key: N, ref: h.ref, props: h.props, _owner: h._owner };
  }
  function Ze(h) {
    return typeof h == 'object' && h !== null && h.$$typeof === c;
  }
  function et(h) {
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
    return typeof h == 'object' && h !== null && h.key != null ? et('' + h.key) : N.toString(36);
  }
  function qe(h, N, le, ie, ue) {
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
            case u:
              me = !0;
          }
      }
    if (me)
      return (
        (me = h),
        (ue = ue(me)),
        (h = ie === '' ? '.' + De(me, 0) : ie),
        X(ue)
          ? ((le = ''),
            h != null && (le = h.replace(Xe, '$&/') + '/'),
            qe(ue, N, le, '', function (ee) {
              return ee;
            }))
          : ue != null &&
            (Ze(ue) &&
              (ue = Pe(
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
    if (((me = 0), (ie = ie === '' ? '.' : ie + ':'), X(h)))
      for (var fe = 0; fe < h.length; fe++) {
        ae = h[fe];
        var z = ie + De(ae, fe);
        me += qe(ae, N, le, z, ue);
      }
    else if (((z = x(h)), typeof z == 'function'))
      for (h = z.call(h), fe = 0; !(ae = h.next()).done; )
        ((ae = ae.value), (z = ie + De(ae, fe++)), (me += qe(ae, N, le, z, ue)));
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
    var ie = [],
      ue = 0;
    return (
      qe(h, ie, '', '', function (ae) {
        return N.call(le, ae, ue++);
      }),
      ie
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
    B = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: I, ReactCurrentOwner: R };
  function W() {
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
        if (!Ze(h))
          throw Error('React.Children.only expected to receive a single React element child.');
        return h;
      },
    }),
    (se.Component = D),
    (se.Fragment = s),
    (se.Profiler = C),
    (se.PureComponent = te),
    (se.StrictMode = _),
    (se.Suspense = p),
    (se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B),
    (se.act = W),
    (se.cloneElement = function (h, N, le) {
      if (h == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + h + '.'
        );
      var ie = G({}, h.props),
        ue = h.key,
        ae = h.ref,
        me = h._owner;
      if (N != null) {
        if (
          (N.ref !== void 0 && ((ae = N.ref), (me = R.current)),
          N.key !== void 0 && (ue = '' + N.key),
          h.type && h.type.defaultProps)
        )
          var fe = h.type.defaultProps;
        for (z in N)
          ne.call(N, z) &&
            !Q.hasOwnProperty(z) &&
            (ie[z] = N[z] === void 0 && fe !== void 0 ? fe[z] : N[z]);
      }
      var z = arguments.length - 2;
      if (z === 1) ie.children = le;
      else if (1 < z) {
        fe = Array(z);
        for (var ee = 0; ee < z; ee++) fe[ee] = arguments[ee + 2];
        ie.children = fe;
      }
      return { $$typeof: c, type: h.type, key: ue, ref: ae, props: ie, _owner: me };
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
    (se.createElement = $),
    (se.createFactory = function (h) {
      var N = $.bind(null, h);
      return ((N.type = h), N);
    }),
    (se.createRef = function () {
      return { current: null };
    }),
    (se.forwardRef = function (h) {
      return { $$typeof: j, render: h };
    }),
    (se.isValidElement = Ze),
    (se.lazy = function (h) {
      return { $$typeof: w, _payload: { _status: -1, _result: h }, _init: Ne };
    }),
    (se.memo = function (h, N) {
      return { $$typeof: v, type: h, compare: N === void 0 ? null : N };
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
    (se.unstable_act = W),
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
var mc;
function ys() {
  return (mc || ((mc = 1), (ls.exports = $f())), ls.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hc;
function Wf() {
  if (hc) return Ur;
  hc = 1;
  var c = ys(),
    u = Symbol.for('react.element'),
    s = Symbol.for('react.fragment'),
    _ = Object.prototype.hasOwnProperty,
    C = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(j, p, v) {
    var w,
      k = {},
      x = null,
      A = null;
    (v !== void 0 && (x = '' + v),
      p.key !== void 0 && (x = '' + p.key),
      p.ref !== void 0 && (A = p.ref));
    for (w in p) _.call(p, w) && !E.hasOwnProperty(w) && (k[w] = p[w]);
    if (j && j.defaultProps) for (w in ((p = j.defaultProps), p)) k[w] === void 0 && (k[w] = p[w]);
    return { $$typeof: u, type: j, key: x, ref: A, props: k, _owner: C.current };
  }
  return ((Ur.Fragment = s), (Ur.jsx = T), (Ur.jsxs = T), Ur);
}
var vc;
function Hf() {
  return (vc || ((vc = 1), (rs.exports = Wf())), rs.exports);
}
var d = Hf(),
  F = ys(),
  bl = {},
  is = { exports: {} },
  ot = {},
  os = { exports: {} },
  ss = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yc;
function Qf() {
  return (
    yc ||
      ((yc = 1),
      (function (c) {
        function u(I, B) {
          var W = I.length;
          I.push(B);
          e: for (; 0 < W; ) {
            var h = (W - 1) >>> 1,
              N = I[h];
            if (0 < C(N, B)) ((I[h] = B), (I[W] = N), (W = h));
            else break e;
          }
        }
        function s(I) {
          return I.length === 0 ? null : I[0];
        }
        function _(I) {
          if (I.length === 0) return null;
          var B = I[0],
            W = I.pop();
          if (W !== B) {
            I[0] = W;
            e: for (var h = 0, N = I.length, le = N >>> 1; h < le; ) {
              var ie = 2 * (h + 1) - 1,
                ue = I[ie],
                ae = ie + 1,
                me = I[ae];
              if (0 > C(ue, W))
                ae < N && 0 > C(me, ue)
                  ? ((I[h] = me), (I[ae] = W), (h = ae))
                  : ((I[h] = ue), (I[ie] = W), (h = ie));
              else if (ae < N && 0 > C(me, W)) ((I[h] = me), (I[ae] = W), (h = ae));
              else break e;
            }
          }
          return B;
        }
        function C(I, B) {
          var W = I.sortIndex - B.sortIndex;
          return W !== 0 ? W : I.id - B.id;
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
        var p = [],
          v = [],
          w = 1,
          k = null,
          x = 3,
          A = !1,
          G = !1,
          H = !1,
          D = typeof setTimeout == 'function' ? setTimeout : null,
          V = typeof clearTimeout == 'function' ? clearTimeout : null,
          te = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function oe(I) {
          for (var B = s(v); B !== null; ) {
            if (B.callback === null) _(v);
            else if (B.startTime <= I) (_(v), (B.sortIndex = B.expirationTime), u(p, B));
            else break;
            B = s(v);
          }
        }
        function X(I) {
          if (((H = !1), oe(I), !G))
            if (s(p) !== null) ((G = !0), Ne(ne));
            else {
              var B = s(v);
              B !== null && pe(X, B.startTime - I);
            }
        }
        function ne(I, B) {
          ((G = !1), H && ((H = !1), V($), ($ = -1)), (A = !0));
          var W = x;
          try {
            for (oe(B), k = s(p); k !== null && (!(k.expirationTime > B) || (I && !et())); ) {
              var h = k.callback;
              if (typeof h == 'function') {
                ((k.callback = null), (x = k.priorityLevel));
                var N = h(k.expirationTime <= B);
                ((B = c.unstable_now()),
                  typeof N == 'function' ? (k.callback = N) : k === s(p) && _(p),
                  oe(B));
              } else _(p);
              k = s(p);
            }
            if (k !== null) var le = !0;
            else {
              var ie = s(v);
              (ie !== null && pe(X, ie.startTime - B), (le = !1));
            }
            return le;
          } finally {
            ((k = null), (x = W), (A = !1));
          }
        }
        var R = !1,
          Q = null,
          $ = -1,
          Pe = 5,
          Ze = -1;
        function et() {
          return !(c.unstable_now() - Ze < Pe);
        }
        function Xe() {
          if (Q !== null) {
            var I = c.unstable_now();
            Ze = I;
            var B = !0;
            try {
              B = Q(!0, I);
            } finally {
              B ? De() : ((R = !1), (Q = null));
            }
          } else R = !1;
        }
        var De;
        if (typeof te == 'function')
          De = function () {
            te(Xe);
          };
        else if (typeof MessageChannel < 'u') {
          var qe = new MessageChannel(),
            Ce = qe.port2;
          ((qe.port1.onmessage = Xe),
            (De = function () {
              Ce.postMessage(null);
            }));
        } else
          De = function () {
            D(Xe, 0);
          };
        function Ne(I) {
          ((Q = I), R || ((R = !0), De()));
        }
        function pe(I, B) {
          $ = D(function () {
            I(c.unstable_now());
          }, B);
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
            G || A || ((G = !0), Ne(ne));
          }),
          (c.unstable_forceFrameRate = function (I) {
            0 > I || 125 < I
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Pe = 0 < I ? Math.floor(1e3 / I) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (c.unstable_getFirstCallbackNode = function () {
            return s(p);
          }),
          (c.unstable_next = function (I) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var B = 3;
                break;
              default:
                B = x;
            }
            var W = x;
            x = B;
            try {
              return I();
            } finally {
              x = W;
            }
          }),
          (c.unstable_pauseExecution = function () {}),
          (c.unstable_requestPaint = function () {}),
          (c.unstable_runWithPriority = function (I, B) {
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
            var W = x;
            x = I;
            try {
              return B();
            } finally {
              x = W;
            }
          }),
          (c.unstable_scheduleCallback = function (I, B, W) {
            var h = c.unstable_now();
            switch (
              (typeof W == 'object' && W !== null
                ? ((W = W.delay), (W = typeof W == 'number' && 0 < W ? h + W : h))
                : (W = h),
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
              (N = W + N),
              (I = {
                id: w++,
                callback: B,
                priorityLevel: I,
                startTime: W,
                expirationTime: N,
                sortIndex: -1,
              }),
              W > h
                ? ((I.sortIndex = W),
                  u(v, I),
                  s(p) === null && I === s(v) && (H ? (V($), ($ = -1)) : (H = !0), pe(X, W - h)))
                : ((I.sortIndex = N), u(p, I), G || A || ((G = !0), Ne(ne))),
              I
            );
          }),
          (c.unstable_shouldYield = et),
          (c.unstable_wrapCallback = function (I) {
            var B = x;
            return function () {
              var W = x;
              x = B;
              try {
                return I.apply(this, arguments);
              } finally {
                x = W;
              }
            };
          }));
      })(ss)),
    ss
  );
}
var gc;
function qf() {
  return (gc || ((gc = 1), (os.exports = Qf())), os.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wc;
function Vf() {
  if (wc) return ot;
  wc = 1;
  var c = ys(),
    u = qf();
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
  var _ = new Set(),
    C = {};
  function E(e, t) {
    (T(e, t), T(e + 'Capture', t));
  }
  function T(e, t) {
    for (C[e] = t, e = 0; e < t.length; e++) _.add(t[e]);
  }
  var j = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    p = Object.prototype.hasOwnProperty,
    v =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    w = {},
    k = {};
  function x(e) {
    return p.call(k, e) ? !0 : p.call(w, e) ? !1 : v.test(e) ? (k[e] = !0) : ((w[e] = !0), !1);
  }
  function A(e, t, n, r) {
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
  function G(e, t, n, r) {
    if (t === null || typeof t > 'u' || A(e, t, n, r)) return !0;
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
  function H(e, t, n, r, l, i, o) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o));
  }
  var D = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      D[e] = new H(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      D[t] = new H(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      D[e] = new H(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        D[e] = new H(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        D[e] = new H(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      D[e] = new H(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      D[e] = new H(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      D[e] = new H(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      D[e] = new H(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var V = /[\-:]([a-z])/g;
  function te(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(V, te);
      D[t] = new H(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(V, te);
        D[t] = new H(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(V, te);
      D[t] = new H(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      D[e] = new H(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (D.xlinkHref = new H('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      D[e] = new H(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function oe(e, t, n, r) {
    var l = D.hasOwnProperty(t) ? D[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (G(t, n, l, r) && (n = null),
      r || l === null
        ? x(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
    ne = Symbol.for('react.element'),
    R = Symbol.for('react.portal'),
    Q = Symbol.for('react.fragment'),
    $ = Symbol.for('react.strict_mode'),
    Pe = Symbol.for('react.profiler'),
    Ze = Symbol.for('react.provider'),
    et = Symbol.for('react.context'),
    Xe = Symbol.for('react.forward_ref'),
    De = Symbol.for('react.suspense'),
    qe = Symbol.for('react.suspense_list'),
    Ce = Symbol.for('react.memo'),
    Ne = Symbol.for('react.lazy'),
    pe = Symbol.for('react.offscreen'),
    I = Symbol.iterator;
  function B(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (I && e[I]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var W = Object.assign,
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
  function ie(e, t) {
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
      case Q:
        return 'Fragment';
      case R:
        return 'Portal';
      case Pe:
        return 'Profiler';
      case $:
        return 'StrictMode';
      case De:
        return 'Suspense';
      case qe:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case et:
          return (e.displayName || 'Context') + '.Consumer';
        case Ze:
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
        return t === $ ? 'StrictMode' : 'Mode';
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
  function at(e) {
    e._valueTracker || (e._valueTracker = ee(e));
  }
  function mt(e) {
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
  function pn(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function qt(e, t) {
    var n = t.checked;
    return W({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function er(e, t) {
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
  function _s(e, t) {
    ((t = t.checked), t != null && oe(e, 'checked', t, !1));
  }
  function ci(e, t) {
    _s(e, t);
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
      ? di(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && di(e, t.type, fe(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function ks(e, t, n) {
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
  function di(e, t, n) {
    (t !== 'number' || pn(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var tr = Array.isArray;
  function Tn(e, t, n, r) {
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
  function fi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return W({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function xs(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(s(92));
        if (tr(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: fe(n) };
  }
  function Es(e, t) {
    var n = fe(t.value),
      r = fe(t.defaultValue);
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
  function Ns(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function pi(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? Ns(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var qr,
    js = (function (e) {
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
  function nr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var rr = {
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
    Qc = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(rr).forEach(function (e) {
    Qc.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (rr[t] = rr[e]));
    });
  });
  function Ts(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (rr.hasOwnProperty(e) && rr[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function Ls(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = Ts(n, t[n], r);
        (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var qc = W(
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
  function mi(e, t) {
    if (t) {
      if (qc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function hi(e, t) {
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
  var vi = null;
  function yi(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var gi = null,
    Ln = null,
    On = null;
  function Os(e) {
    if ((e = Cr(e))) {
      if (typeof gi != 'function') throw Error(s(280));
      var t = e.stateNode;
      t && ((t = ml(t)), gi(e.stateNode, e.type, t));
    }
  }
  function Is(e) {
    Ln ? (On ? On.push(e) : (On = [e])) : (Ln = e);
  }
  function Ps() {
    if (Ln) {
      var e = Ln,
        t = On;
      if (((On = Ln = null), Os(e), t)) for (e = 0; e < t.length; e++) Os(t[e]);
    }
  }
  function Rs(e, t) {
    return e(t);
  }
  function Ms() {}
  var wi = !1;
  function zs(e, t, n) {
    if (wi) return e(t, n);
    wi = !0;
    try {
      return Rs(e, t, n);
    } finally {
      ((wi = !1), (Ln !== null || On !== null) && (Ms(), Ps()));
    }
  }
  function lr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ml(n);
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
  var Si = !1;
  if (j)
    try {
      var ir = {};
      (Object.defineProperty(ir, 'passive', {
        get: function () {
          Si = !0;
        },
      }),
        window.addEventListener('test', ir, ir),
        window.removeEventListener('test', ir, ir));
    } catch {
      Si = !1;
    }
  function Vc(e, t, n, r, l, i, o, a, f) {
    var S = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, S);
    } catch (O) {
      this.onError(O);
    }
  }
  var or = !1,
    Vr = null,
    Gr = !1,
    _i = null,
    Gc = {
      onError: function (e) {
        ((or = !0), (Vr = e));
      },
    };
  function Kc(e, t, n, r, l, i, o, a, f) {
    ((or = !1), (Vr = null), Vc.apply(Gc, arguments));
  }
  function Yc(e, t, n, r, l, i, o, a, f) {
    if ((Kc.apply(this, arguments), or)) {
      if (or) {
        var S = Vr;
        ((or = !1), (Vr = null));
      } else throw Error(s(198));
      Gr || ((Gr = !0), (_i = S));
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
  function Ds(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function As(e) {
    if (mn(e) !== e) throw Error(s(188));
  }
  function Zc(e) {
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
          if (i === n) return (As(l), e);
          if (i === r) return (As(l), t);
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
    return ((e = Zc(e)), e !== null ? Bs(e) : null);
  }
  function Bs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Bs(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Us = u.unstable_scheduleCallback,
    $s = u.unstable_cancelCallback,
    Xc = u.unstable_shouldYield,
    Jc = u.unstable_requestPaint,
    Te = u.unstable_now,
    bc = u.unstable_getCurrentPriorityLevel,
    ki = u.unstable_ImmediatePriority,
    Ws = u.unstable_UserBlockingPriority,
    Kr = u.unstable_NormalPriority,
    ed = u.unstable_LowPriority,
    Hs = u.unstable_IdlePriority,
    Yr = null,
    Lt = null;
  function td(e) {
    if (Lt && typeof Lt.onCommitFiberRoot == 'function')
      try {
        Lt.onCommitFiberRoot(Yr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var kt = Math.clz32 ? Math.clz32 : ld,
    nd = Math.log,
    rd = Math.LN2;
  function ld(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((nd(e) / rd) | 0)) | 0);
  }
  var Zr = 64,
    Xr = 4194304;
  function sr(e) {
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
  function Jr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var a = o & ~l;
      a !== 0 ? (r = sr(a)) : ((i &= o), i !== 0 && (r = sr(i)));
    } else ((o = n & ~l), o !== 0 ? (r = sr(o)) : i !== 0 && (r = sr(i)));
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
        ((n = 31 - kt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function id(e, t) {
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
  function od(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes;
      0 < i;
    ) {
      var o = 31 - kt(i),
        a = 1 << o,
        f = l[o];
      (f === -1
        ? ((a & n) === 0 || (a & r) !== 0) && (l[o] = id(a, t))
        : f <= t && (e.expiredLanes |= a),
        (i &= ~a));
    }
  }
  function xi(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Qs() {
    var e = Zr;
    return ((Zr <<= 1), (Zr & 4194240) === 0 && (Zr = 64), e);
  }
  function Ei(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ur(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - kt(t)),
      (e[t] = n));
  }
  function sd(e, t) {
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
      var l = 31 - kt(n),
        i = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
    }
  }
  function Ci(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - kt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var he = 0;
  function qs(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Vs,
    Ni,
    Gs,
    Ks,
    Ys,
    ji = !1,
    br = [],
    Vt = null,
    Gt = null,
    Kt = null,
    ar = new Map(),
    cr = new Map(),
    Yt = [],
    ud =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function Zs(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Vt = null;
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
        ar.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        cr.delete(t.pointerId);
    }
  }
  function dr(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = Cr(t)), t !== null && Ni(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function ad(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return ((Vt = dr(Vt, e, t, n, r, l)), !0);
      case 'dragenter':
        return ((Gt = dr(Gt, e, t, n, r, l)), !0);
      case 'mouseover':
        return ((Kt = dr(Kt, e, t, n, r, l)), !0);
      case 'pointerover':
        var i = l.pointerId;
        return (ar.set(i, dr(ar.get(i) || null, e, t, n, r, l)), !0);
      case 'gotpointercapture':
        return ((i = l.pointerId), cr.set(i, dr(cr.get(i) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function Xs(e) {
    var t = hn(e.target);
    if (t !== null) {
      var n = mn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ds(n)), t !== null)) {
            ((e.blockedOn = t),
              Ys(e.priority, function () {
                Gs(n);
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
  function el(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Li(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((vi = r), n.target.dispatchEvent(r), (vi = null));
      } else return ((t = Cr(n)), t !== null && Ni(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Js(e, t, n) {
    el(e) && n.delete(t);
  }
  function cd() {
    ((ji = !1),
      Vt !== null && el(Vt) && (Vt = null),
      Gt !== null && el(Gt) && (Gt = null),
      Kt !== null && el(Kt) && (Kt = null),
      ar.forEach(Js),
      cr.forEach(Js));
  }
  function fr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ji || ((ji = !0), u.unstable_scheduleCallback(u.unstable_NormalPriority, cd)));
  }
  function pr(e) {
    function t(l) {
      return fr(l, e);
    }
    if (0 < br.length) {
      fr(br[0], e);
      for (var n = 1; n < br.length; n++) {
        var r = br[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Vt !== null && fr(Vt, e),
        Gt !== null && fr(Gt, e),
        Kt !== null && fr(Kt, e),
        ar.forEach(t),
        cr.forEach(t),
        n = 0;
      n < Yt.length;
      n++
    )
      ((r = Yt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Yt.length && ((n = Yt[0]), n.blockedOn === null); )
      (Xs(n), n.blockedOn === null && Yt.shift());
  }
  var In = X.ReactCurrentBatchConfig,
    tl = !0;
  function dd(e, t, n, r) {
    var l = he,
      i = In.transition;
    In.transition = null;
    try {
      ((he = 1), Ti(e, t, n, r));
    } finally {
      ((he = l), (In.transition = i));
    }
  }
  function fd(e, t, n, r) {
    var l = he,
      i = In.transition;
    In.transition = null;
    try {
      ((he = 4), Ti(e, t, n, r));
    } finally {
      ((he = l), (In.transition = i));
    }
  }
  function Ti(e, t, n, r) {
    if (tl) {
      var l = Li(e, t, n, r);
      if (l === null) (Vi(e, t, r, nl, n), Zs(e, r));
      else if (ad(l, e, t, n, r)) r.stopPropagation();
      else if ((Zs(e, r), t & 4 && -1 < ud.indexOf(e))) {
        for (; l !== null; ) {
          var i = Cr(l);
          if (
            (i !== null && Vs(i), (i = Li(e, t, n, r)), i === null && Vi(e, t, r, nl, n), i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else Vi(e, t, r, null, n);
    }
  }
  var nl = null;
  function Li(e, t, n, r) {
    if (((nl = null), (e = yi(r)), (e = hn(e)), e !== null))
      if (((t = mn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ds(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((nl = e), null);
  }
  function bs(e) {
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
        switch (bc()) {
          case ki:
            return 1;
          case Ws:
            return 4;
          case Kr:
          case ed:
            return 16;
          case Hs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Zt = null,
    Oi = null,
    rl = null;
  function eu() {
    if (rl) return rl;
    var e,
      t = Oi,
      n = t.length,
      r,
      l = 'value' in Zt ? Zt.value : Zt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (rl = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function ll(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function il() {
    return !0;
  }
  function tu() {
    return !1;
  }
  function ct(e) {
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
          ? il
          : tu),
        (this.isPropagationStopped = tu),
        this
      );
    }
    return (
      W(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = il));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = il));
        },
        persist: function () {},
        isPersistent: il,
      }),
      t
    );
  }
  var Pn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ii = ct(Pn),
    mr = W({}, Pn, { view: 0, detail: 0 }),
    pd = ct(mr),
    Pi,
    Ri,
    hr,
    ol = W({}, mr, {
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
      getModifierState: zi,
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
          : (e !== hr &&
              (hr && e.type === 'mousemove'
                ? ((Pi = e.screenX - hr.screenX), (Ri = e.screenY - hr.screenY))
                : (Ri = Pi = 0),
              (hr = e)),
            Pi);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Ri;
      },
    }),
    nu = ct(ol),
    md = W({}, ol, { dataTransfer: 0 }),
    hd = ct(md),
    vd = W({}, mr, { relatedTarget: 0 }),
    Mi = ct(vd),
    yd = W({}, Pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    gd = ct(yd),
    wd = W({}, Pn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Sd = ct(wd),
    _d = W({}, Pn, { data: 0 }),
    ru = ct(_d),
    kd = {
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
    xd = {
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
    Ed = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Cd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ed[e]) ? !!t[e] : !1;
  }
  function zi() {
    return Cd;
  }
  var Nd = W({}, mr, {
      key: function (e) {
        if (e.key) {
          var t = kd[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = ll(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? xd[e.keyCode] || 'Unidentified'
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
      getModifierState: zi,
      charCode: function (e) {
        return e.type === 'keypress' ? ll(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? ll(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    jd = ct(Nd),
    Td = W({}, ol, {
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
    lu = ct(Td),
    Ld = W({}, mr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zi,
    }),
    Od = ct(Ld),
    Id = W({}, Pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Pd = ct(Id),
    Rd = W({}, ol, {
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
    Md = ct(Rd),
    zd = [9, 13, 27, 32],
    Di = j && 'CompositionEvent' in window,
    vr = null;
  j && 'documentMode' in document && (vr = document.documentMode);
  var Dd = j && 'TextEvent' in window && !vr,
    iu = j && (!Di || (vr && 8 < vr && 11 >= vr)),
    ou = ' ',
    su = !1;
  function uu(e, t) {
    switch (e) {
      case 'keyup':
        return zd.indexOf(t.keyCode) !== -1;
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
  function au(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var Rn = !1;
  function Ad(e, t) {
    switch (e) {
      case 'compositionend':
        return au(t);
      case 'keypress':
        return t.which !== 32 ? null : ((su = !0), ou);
      case 'textInput':
        return ((e = t.data), e === ou && su ? null : e);
      default:
        return null;
    }
  }
  function Fd(e, t) {
    if (Rn)
      return e === 'compositionend' || (!Di && uu(e, t))
        ? ((e = eu()), (rl = Oi = Zt = null), (Rn = !1), e)
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
        return iu && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Bd = {
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
  function cu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Bd[e.type] : t === 'textarea';
  }
  function du(e, t, n, r) {
    (Is(r),
      (t = dl(t, 'onChange')),
      0 < t.length &&
        ((n = new Ii('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
  }
  var yr = null,
    gr = null;
  function Ud(e) {
    Lu(e, 0);
  }
  function sl(e) {
    var t = Fn(e);
    if (mt(t)) return e;
  }
  function $d(e, t) {
    if (e === 'change') return t;
  }
  var fu = !1;
  if (j) {
    var Ai;
    if (j) {
      var Fi = 'oninput' in document;
      if (!Fi) {
        var pu = document.createElement('div');
        (pu.setAttribute('oninput', 'return;'), (Fi = typeof pu.oninput == 'function'));
      }
      Ai = Fi;
    } else Ai = !1;
    fu = Ai && (!document.documentMode || 9 < document.documentMode);
  }
  function mu() {
    yr && (yr.detachEvent('onpropertychange', hu), (gr = yr = null));
  }
  function hu(e) {
    if (e.propertyName === 'value' && sl(gr)) {
      var t = [];
      (du(t, gr, e, yi(e)), zs(Ud, t));
    }
  }
  function Wd(e, t, n) {
    e === 'focusin'
      ? (mu(), (yr = t), (gr = n), yr.attachEvent('onpropertychange', hu))
      : e === 'focusout' && mu();
  }
  function Hd(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return sl(gr);
  }
  function Qd(e, t) {
    if (e === 'click') return sl(t);
  }
  function qd(e, t) {
    if (e === 'input' || e === 'change') return sl(t);
  }
  function Vd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var xt = typeof Object.is == 'function' ? Object.is : Vd;
  function wr(e, t) {
    if (xt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!p.call(t, l) || !xt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function vu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function yu(e, t) {
    var n = vu(e);
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
      n = vu(n);
    }
  }
  function gu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? gu(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function wu() {
    for (var e = window, t = pn(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = pn(e.document);
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
  function Gd(e) {
    var t = wu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && gu(n.ownerDocument.documentElement, n)) {
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
            (l = yu(n, i)));
          var o = yu(n, r);
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
  var Kd = j && 'documentMode' in document && 11 >= document.documentMode,
    Mn = null,
    Ui = null,
    Sr = null,
    $i = !1;
  function Su(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    $i ||
      Mn == null ||
      Mn !== pn(r) ||
      ((r = Mn),
      'selectionStart' in r && Bi(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Sr && wr(Sr, r)) ||
        ((Sr = r),
        (r = dl(Ui, 'onSelect')),
        0 < r.length &&
          ((t = new Ii('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Mn))));
  }
  function ul(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var zn = {
      animationend: ul('Animation', 'AnimationEnd'),
      animationiteration: ul('Animation', 'AnimationIteration'),
      animationstart: ul('Animation', 'AnimationStart'),
      transitionend: ul('Transition', 'TransitionEnd'),
    },
    Wi = {},
    _u = {};
  j &&
    ((_u = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete zn.animationend.animation,
      delete zn.animationiteration.animation,
      delete zn.animationstart.animation),
    'TransitionEvent' in window || delete zn.transitionend.transition);
  function al(e) {
    if (Wi[e]) return Wi[e];
    if (!zn[e]) return e;
    var t = zn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in _u) return (Wi[e] = t[n]);
    return e;
  }
  var ku = al('animationend'),
    xu = al('animationiteration'),
    Eu = al('animationstart'),
    Cu = al('transitionend'),
    Nu = new Map(),
    ju =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Xt(e, t) {
    (Nu.set(e, t), E(t, [e]));
  }
  for (var Hi = 0; Hi < ju.length; Hi++) {
    var Qi = ju[Hi],
      Yd = Qi.toLowerCase(),
      Zd = Qi[0].toUpperCase() + Qi.slice(1);
    Xt(Yd, 'on' + Zd);
  }
  (Xt(ku, 'onAnimationEnd'),
    Xt(xu, 'onAnimationIteration'),
    Xt(Eu, 'onAnimationStart'),
    Xt('dblclick', 'onDoubleClick'),
    Xt('focusin', 'onFocus'),
    Xt('focusout', 'onBlur'),
    Xt(Cu, 'onTransitionEnd'),
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
    Xd = new Set('cancel close invalid load scroll toggle'.split(' ').concat(_r));
  function Tu(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n), Yc(r, t, void 0, e), (e.currentTarget = null));
  }
  function Lu(e, t) {
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
              S = a.currentTarget;
            if (((a = a.listener), f !== i && l.isPropagationStopped())) break e;
            (Tu(l, a, S), (i = f));
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((a = r[o]),
              (f = a.instance),
              (S = a.currentTarget),
              (a = a.listener),
              f !== i && l.isPropagationStopped())
            )
              break e;
            (Tu(l, a, S), (i = f));
          }
      }
    }
    if (Gr) throw ((e = _i), (Gr = !1), (_i = null), e);
  }
  function ge(e, t) {
    var n = t[Ji];
    n === void 0 && (n = t[Ji] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Ou(t, e, 2, !1), n.add(r));
  }
  function qi(e, t, n) {
    var r = 0;
    (t && (r |= 4), Ou(n, e, r, t));
  }
  var cl = '_reactListening' + Math.random().toString(36).slice(2);
  function kr(e) {
    if (!e[cl]) {
      ((e[cl] = !0),
        _.forEach(function (n) {
          n !== 'selectionchange' && (Xd.has(n) || qi(n, !1, e), qi(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[cl] || ((t[cl] = !0), qi('selectionchange', !1, t));
    }
  }
  function Ou(e, t, n, r) {
    switch (bs(t)) {
      case 1:
        var l = dd;
        break;
      case 4:
        l = fd;
        break;
      default:
        l = Ti;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Si || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function Vi(e, t, n, r, l) {
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
    zs(function () {
      var S = i,
        O = yi(n),
        P = [];
      e: {
        var L = Nu.get(e);
        if (L !== void 0) {
          var U = Ii,
            K = e;
          switch (e) {
            case 'keypress':
              if (ll(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              U = jd;
              break;
            case 'focusin':
              ((K = 'focus'), (U = Mi));
              break;
            case 'focusout':
              ((K = 'blur'), (U = Mi));
              break;
            case 'beforeblur':
            case 'afterblur':
              U = Mi;
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
              U = nu;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              U = hd;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              U = Od;
              break;
            case ku:
            case xu:
            case Eu:
              U = gd;
              break;
            case Cu:
              U = Pd;
              break;
            case 'scroll':
              U = pd;
              break;
            case 'wheel':
              U = Md;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              U = Sd;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              U = lu;
          }
          var Y = (t & 4) !== 0,
            Le = !Y && e === 'scroll',
            y = Y ? (L !== null ? L + 'Capture' : null) : L;
          Y = [];
          for (var m = S, g; m !== null; ) {
            g = m;
            var M = g.stateNode;
            if (
              (g.tag === 5 &&
                M !== null &&
                ((g = M), y !== null && ((M = lr(m, y)), M != null && Y.push(xr(m, M, g)))),
              Le)
            )
              break;
            m = m.return;
          }
          0 < Y.length && ((L = new U(L, K, null, n, O)), P.push({ event: L, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((L = e === 'mouseover' || e === 'pointerover'),
            (U = e === 'mouseout' || e === 'pointerout'),
            L && n !== vi && (K = n.relatedTarget || n.fromElement) && (hn(K) || K[Mt]))
          )
            break e;
          if (
            (U || L) &&
            ((L =
              O.window === O
                ? O
                : (L = O.ownerDocument)
                  ? L.defaultView || L.parentWindow
                  : window),
            U
              ? ((K = n.relatedTarget || n.toElement),
                (U = S),
                (K = K ? hn(K) : null),
                K !== null &&
                  ((Le = mn(K)), K !== Le || (K.tag !== 5 && K.tag !== 6)) &&
                  (K = null))
              : ((U = null), (K = S)),
            U !== K)
          ) {
            if (
              ((Y = nu),
              (M = 'onMouseLeave'),
              (y = 'onMouseEnter'),
              (m = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((Y = lu), (M = 'onPointerLeave'), (y = 'onPointerEnter'), (m = 'pointer')),
              (Le = U == null ? L : Fn(U)),
              (g = K == null ? L : Fn(K)),
              (L = new Y(M, m + 'leave', U, n, O)),
              (L.target = Le),
              (L.relatedTarget = g),
              (M = null),
              hn(O) === S &&
                ((Y = new Y(y, m + 'enter', K, n, O)),
                (Y.target = g),
                (Y.relatedTarget = Le),
                (M = Y)),
              (Le = M),
              U && K)
            )
              t: {
                for (Y = U, y = K, m = 0, g = Y; g; g = Dn(g)) m++;
                for (g = 0, M = y; M; M = Dn(M)) g++;
                for (; 0 < m - g; ) ((Y = Dn(Y)), m--);
                for (; 0 < g - m; ) ((y = Dn(y)), g--);
                for (; m--; ) {
                  if (Y === y || (y !== null && Y === y.alternate)) break t;
                  ((Y = Dn(Y)), (y = Dn(y)));
                }
                Y = null;
              }
            else Y = null;
            (U !== null && Iu(P, L, U, Y, !1), K !== null && Le !== null && Iu(P, Le, K, Y, !0));
          }
        }
        e: {
          if (
            ((L = S ? Fn(S) : window),
            (U = L.nodeName && L.nodeName.toLowerCase()),
            U === 'select' || (U === 'input' && L.type === 'file'))
          )
            var Z = $d;
          else if (cu(L))
            if (fu) Z = qd;
            else {
              Z = Hd;
              var J = Wd;
            }
          else
            (U = L.nodeName) &&
              U.toLowerCase() === 'input' &&
              (L.type === 'checkbox' || L.type === 'radio') &&
              (Z = Qd);
          if (Z && (Z = Z(e, S))) {
            du(P, Z, n, O);
            break e;
          }
          (J && J(e, L, S),
            e === 'focusout' &&
              (J = L._wrapperState) &&
              J.controlled &&
              L.type === 'number' &&
              di(L, 'number', L.value));
        }
        switch (((J = S ? Fn(S) : window), e)) {
          case 'focusin':
            (cu(J) || J.contentEditable === 'true') && ((Mn = J), (Ui = S), (Sr = null));
            break;
          case 'focusout':
            Sr = Ui = Mn = null;
            break;
          case 'mousedown':
            $i = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (($i = !1), Su(P, n, O));
            break;
          case 'selectionchange':
            if (Kd) break;
          case 'keydown':
          case 'keyup':
            Su(P, n, O);
        }
        var b;
        if (Di)
          e: {
            switch (e) {
              case 'compositionstart':
                var re = 'onCompositionStart';
                break e;
              case 'compositionend':
                re = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                re = 'onCompositionUpdate';
                break e;
            }
            re = void 0;
          }
        else
          Rn
            ? uu(e, n) && (re = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (re = 'onCompositionStart');
        (re &&
          (iu &&
            n.locale !== 'ko' &&
            (Rn || re !== 'onCompositionStart'
              ? re === 'onCompositionEnd' && Rn && (b = eu())
              : ((Zt = O), (Oi = 'value' in Zt ? Zt.value : Zt.textContent), (Rn = !0))),
          (J = dl(S, re)),
          0 < J.length &&
            ((re = new ru(re, e, null, n, O)),
            P.push({ event: re, listeners: J }),
            b ? (re.data = b) : ((b = au(n)), b !== null && (re.data = b)))),
          (b = Dd ? Ad(e, n) : Fd(e, n)) &&
            ((S = dl(S, 'onBeforeInput')),
            0 < S.length &&
              ((O = new ru('onBeforeInput', 'beforeinput', null, n, O)),
              P.push({ event: O, listeners: S }),
              (O.data = b))));
      }
      Lu(P, t);
    });
  }
  function xr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function dl(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      (l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = lr(e, n)),
        i != null && r.unshift(xr(e, i, l)),
        (i = lr(e, t)),
        i != null && r.push(xr(e, i, l))),
        (e = e.return));
    }
    return r;
  }
  function Dn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Iu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var a = n,
        f = a.alternate,
        S = a.stateNode;
      if (f !== null && f === r) break;
      (a.tag === 5 &&
        S !== null &&
        ((a = S),
        l
          ? ((f = lr(n, i)), f != null && o.unshift(xr(n, f, a)))
          : l || ((f = lr(n, i)), f != null && o.push(xr(n, f, a)))),
        (n = n.return));
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Jd = /\r\n?/g,
    bd = /\u0000|\uFFFD/g;
  function Pu(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Jd,
        `
`
      )
      .replace(bd, '');
  }
  function fl(e, t, n) {
    if (((t = Pu(t)), Pu(e) !== t && n)) throw Error(s(425));
  }
  function pl() {}
  var Gi = null,
    Ki = null;
  function Yi(e, t) {
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
    ef = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Ru = typeof Promise == 'function' ? Promise : void 0,
    tf =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Ru < 'u'
          ? function (e) {
              return Ru.resolve(null).then(e).catch(nf);
            }
          : Zi;
  function nf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Xi(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$')) {
          if (r === 0) {
            (e.removeChild(l), pr(t));
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = l;
    } while (n);
    pr(t);
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
  function Mu(e) {
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
    Ot = '__reactFiber$' + An,
    Er = '__reactProps$' + An,
    Mt = '__reactContainer$' + An,
    Ji = '__reactEvents$' + An,
    rf = '__reactListeners$' + An,
    lf = '__reactHandles$' + An;
  function hn(e) {
    var t = e[Ot];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Mt] || n[Ot])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Mu(e); e !== null; ) {
            if ((n = e[Ot])) return n;
            e = Mu(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Cr(e) {
    return (
      (e = e[Ot] || e[Mt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Fn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function ml(e) {
    return e[Er] || null;
  }
  var bi = [],
    Bn = -1;
  function bt(e) {
    return { current: e };
  }
  function we(e) {
    0 > Bn || ((e.current = bi[Bn]), (bi[Bn] = null), Bn--);
  }
  function ye(e, t) {
    (Bn++, (bi[Bn] = e.current), (e.current = t));
  }
  var en = {},
    Ve = bt(en),
    tt = bt(!1),
    vn = en;
  function Un(e, t) {
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
  function nt(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function hl() {
    (we(tt), we(Ve));
  }
  function zu(e, t, n) {
    if (Ve.current !== en) throw Error(s(168));
    (ye(Ve, t), ye(tt, n));
  }
  function Du(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(s(108, me(e) || 'Unknown', l));
    return W({}, n, r);
  }
  function vl(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || en),
      (vn = Ve.current),
      ye(Ve, e),
      ye(tt, tt.current),
      !0
    );
  }
  function Au(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    (n
      ? ((e = Du(e, t, vn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        we(tt),
        we(Ve),
        ye(Ve, e))
      : we(tt),
      ye(tt, n));
  }
  var zt = null,
    yl = !1,
    eo = !1;
  function Fu(e) {
    zt === null ? (zt = [e]) : zt.push(e);
  }
  function of(e) {
    ((yl = !0), Fu(e));
  }
  function tn() {
    if (!eo && zt !== null) {
      eo = !0;
      var e = 0,
        t = he;
      try {
        var n = zt;
        for (he = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((zt = null), (yl = !1));
      } catch (l) {
        throw (zt !== null && (zt = zt.slice(e + 1)), Us(ki, tn), l);
      } finally {
        ((he = t), (eo = !1));
      }
    }
    return null;
  }
  var $n = [],
    Wn = 0,
    gl = null,
    wl = 0,
    ht = [],
    vt = 0,
    yn = null,
    Dt = 1,
    At = '';
  function gn(e, t) {
    (($n[Wn++] = wl), ($n[Wn++] = gl), (gl = e), (wl = t));
  }
  function Bu(e, t, n) {
    ((ht[vt++] = Dt), (ht[vt++] = At), (ht[vt++] = yn), (yn = e));
    var r = Dt;
    e = At;
    var l = 32 - kt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var i = 32 - kt(t) + l;
    if (30 < i) {
      var o = l - (l % 5);
      ((i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (Dt = (1 << (32 - kt(t) + l)) | (n << l) | r),
        (At = i + e));
    } else ((Dt = (1 << i) | (n << l) | r), (At = e));
  }
  function to(e) {
    e.return !== null && (gn(e, 1), Bu(e, 1, 0));
  }
  function no(e) {
    for (; e === gl; ) ((gl = $n[--Wn]), ($n[Wn] = null), (wl = $n[--Wn]), ($n[Wn] = null));
    for (; e === yn; )
      ((yn = ht[--vt]),
        (ht[vt] = null),
        (At = ht[--vt]),
        (ht[vt] = null),
        (Dt = ht[--vt]),
        (ht[vt] = null));
  }
  var dt = null,
    ft = null,
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
  function $u(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (dt = e), (ft = Jt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (dt = e), (ft = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = yn !== null ? { id: Dt, overflow: At } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = St(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (dt = e),
              (ft = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ro(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function lo(e) {
    if (Se) {
      var t = ft;
      if (t) {
        var n = t;
        if (!$u(e, t)) {
          if (ro(e)) throw Error(s(418));
          t = Jt(n.nextSibling);
          var r = dt;
          t && $u(e, t) ? Uu(r, n) : ((e.flags = (e.flags & -4097) | 2), (Se = !1), (dt = e));
        }
      } else {
        if (ro(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (Se = !1), (dt = e));
      }
    }
  }
  function Wu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    dt = e;
  }
  function Sl(e) {
    if (e !== dt) return !1;
    if (!Se) return (Wu(e), (Se = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !Yi(e.type, e.memoizedProps))),
      t && (t = ft))
    ) {
      if (ro(e)) throw (Hu(), Error(s(418)));
      for (; t; ) (Uu(e, t), (t = Jt(t.nextSibling)));
    }
    if ((Wu(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                ft = Jt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        ft = null;
      }
    } else ft = dt ? Jt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Hu() {
    for (var e = ft; e; ) e = Jt(e.nextSibling);
  }
  function Hn() {
    ((ft = dt = null), (Se = !1));
  }
  function io(e) {
    Et === null ? (Et = [e]) : Et.push(e);
  }
  var sf = X.ReactCurrentBatchConfig;
  function Nr(e, t, n) {
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
  function _l(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        s(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      )
    );
  }
  function Qu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function qu(e) {
    function t(y, m) {
      if (e) {
        var g = y.deletions;
        g === null ? ((y.deletions = [m]), (y.flags |= 16)) : g.push(m);
      }
    }
    function n(y, m) {
      if (!e) return null;
      for (; m !== null; ) (t(y, m), (m = m.sibling));
      return null;
    }
    function r(y, m) {
      for (y = new Map(); m !== null; )
        (m.key !== null ? y.set(m.key, m) : y.set(m.index, m), (m = m.sibling));
      return y;
    }
    function l(y, m) {
      return ((y = cn(y, m)), (y.index = 0), (y.sibling = null), y);
    }
    function i(y, m, g) {
      return (
        (y.index = g),
        e
          ? ((g = y.alternate),
            g !== null ? ((g = g.index), g < m ? ((y.flags |= 2), m) : g) : ((y.flags |= 2), m))
          : ((y.flags |= 1048576), m)
      );
    }
    function o(y) {
      return (e && y.alternate === null && (y.flags |= 2), y);
    }
    function a(y, m, g, M) {
      return m === null || m.tag !== 6
        ? ((m = Xo(g, y.mode, M)), (m.return = y), m)
        : ((m = l(m, g)), (m.return = y), m);
    }
    function f(y, m, g, M) {
      var Z = g.type;
      return Z === Q
        ? O(y, m, g.props.children, M, g.key)
        : m !== null &&
            (m.elementType === Z ||
              (typeof Z == 'object' && Z !== null && Z.$$typeof === Ne && Qu(Z) === m.type))
          ? ((M = l(m, g.props)), (M.ref = Nr(y, m, g)), (M.return = y), M)
          : ((M = ql(g.type, g.key, g.props, null, y.mode, M)),
            (M.ref = Nr(y, m, g)),
            (M.return = y),
            M);
    }
    function S(y, m, g, M) {
      return m === null ||
        m.tag !== 4 ||
        m.stateNode.containerInfo !== g.containerInfo ||
        m.stateNode.implementation !== g.implementation
        ? ((m = Jo(g, y.mode, M)), (m.return = y), m)
        : ((m = l(m, g.children || [])), (m.return = y), m);
    }
    function O(y, m, g, M, Z) {
      return m === null || m.tag !== 7
        ? ((m = Nn(g, y.mode, M, Z)), (m.return = y), m)
        : ((m = l(m, g)), (m.return = y), m);
    }
    function P(y, m, g) {
      if ((typeof m == 'string' && m !== '') || typeof m == 'number')
        return ((m = Xo('' + m, y.mode, g)), (m.return = y), m);
      if (typeof m == 'object' && m !== null) {
        switch (m.$$typeof) {
          case ne:
            return (
              (g = ql(m.type, m.key, m.props, null, y.mode, g)),
              (g.ref = Nr(y, null, m)),
              (g.return = y),
              g
            );
          case R:
            return ((m = Jo(m, y.mode, g)), (m.return = y), m);
          case Ne:
            var M = m._init;
            return P(y, M(m._payload), g);
        }
        if (tr(m) || B(m)) return ((m = Nn(m, y.mode, g, null)), (m.return = y), m);
        _l(y, m);
      }
      return null;
    }
    function L(y, m, g, M) {
      var Z = m !== null ? m.key : null;
      if ((typeof g == 'string' && g !== '') || typeof g == 'number')
        return Z !== null ? null : a(y, m, '' + g, M);
      if (typeof g == 'object' && g !== null) {
        switch (g.$$typeof) {
          case ne:
            return g.key === Z ? f(y, m, g, M) : null;
          case R:
            return g.key === Z ? S(y, m, g, M) : null;
          case Ne:
            return ((Z = g._init), L(y, m, Z(g._payload), M));
        }
        if (tr(g) || B(g)) return Z !== null ? null : O(y, m, g, M, null);
        _l(y, g);
      }
      return null;
    }
    function U(y, m, g, M, Z) {
      if ((typeof M == 'string' && M !== '') || typeof M == 'number')
        return ((y = y.get(g) || null), a(m, y, '' + M, Z));
      if (typeof M == 'object' && M !== null) {
        switch (M.$$typeof) {
          case ne:
            return ((y = y.get(M.key === null ? g : M.key) || null), f(m, y, M, Z));
          case R:
            return ((y = y.get(M.key === null ? g : M.key) || null), S(m, y, M, Z));
          case Ne:
            var J = M._init;
            return U(y, m, g, J(M._payload), Z);
        }
        if (tr(M) || B(M)) return ((y = y.get(g) || null), O(m, y, M, Z, null));
        _l(m, M);
      }
      return null;
    }
    function K(y, m, g, M) {
      for (
        var Z = null, J = null, b = m, re = (m = 0), Be = null;
        b !== null && re < g.length;
        re++
      ) {
        b.index > re ? ((Be = b), (b = null)) : (Be = b.sibling);
        var de = L(y, b, g[re], M);
        if (de === null) {
          b === null && (b = Be);
          break;
        }
        (e && b && de.alternate === null && t(y, b),
          (m = i(de, m, re)),
          J === null ? (Z = de) : (J.sibling = de),
          (J = de),
          (b = Be));
      }
      if (re === g.length) return (n(y, b), Se && gn(y, re), Z);
      if (b === null) {
        for (; re < g.length; re++)
          ((b = P(y, g[re], M)),
            b !== null && ((m = i(b, m, re)), J === null ? (Z = b) : (J.sibling = b), (J = b)));
        return (Se && gn(y, re), Z);
      }
      for (b = r(y, b); re < g.length; re++)
        ((Be = U(b, y, re, g[re], M)),
          Be !== null &&
            (e && Be.alternate !== null && b.delete(Be.key === null ? re : Be.key),
            (m = i(Be, m, re)),
            J === null ? (Z = Be) : (J.sibling = Be),
            (J = Be)));
      return (
        e &&
          b.forEach(function (dn) {
            return t(y, dn);
          }),
        Se && gn(y, re),
        Z
      );
    }
    function Y(y, m, g, M) {
      var Z = B(g);
      if (typeof Z != 'function') throw Error(s(150));
      if (((g = Z.call(g)), g == null)) throw Error(s(151));
      for (
        var J = (Z = null), b = m, re = (m = 0), Be = null, de = g.next();
        b !== null && !de.done;
        re++, de = g.next()
      ) {
        b.index > re ? ((Be = b), (b = null)) : (Be = b.sibling);
        var dn = L(y, b, de.value, M);
        if (dn === null) {
          b === null && (b = Be);
          break;
        }
        (e && b && dn.alternate === null && t(y, b),
          (m = i(dn, m, re)),
          J === null ? (Z = dn) : (J.sibling = dn),
          (J = dn),
          (b = Be));
      }
      if (de.done) return (n(y, b), Se && gn(y, re), Z);
      if (b === null) {
        for (; !de.done; re++, de = g.next())
          ((de = P(y, de.value, M)),
            de !== null &&
              ((m = i(de, m, re)), J === null ? (Z = de) : (J.sibling = de), (J = de)));
        return (Se && gn(y, re), Z);
      }
      for (b = r(y, b); !de.done; re++, de = g.next())
        ((de = U(b, y, re, de.value, M)),
          de !== null &&
            (e && de.alternate !== null && b.delete(de.key === null ? re : de.key),
            (m = i(de, m, re)),
            J === null ? (Z = de) : (J.sibling = de),
            (J = de)));
      return (
        e &&
          b.forEach(function (Uf) {
            return t(y, Uf);
          }),
        Se && gn(y, re),
        Z
      );
    }
    function Le(y, m, g, M) {
      if (
        (typeof g == 'object' &&
          g !== null &&
          g.type === Q &&
          g.key === null &&
          (g = g.props.children),
        typeof g == 'object' && g !== null)
      ) {
        switch (g.$$typeof) {
          case ne:
            e: {
              for (var Z = g.key, J = m; J !== null; ) {
                if (J.key === Z) {
                  if (((Z = g.type), Z === Q)) {
                    if (J.tag === 7) {
                      (n(y, J.sibling), (m = l(J, g.props.children)), (m.return = y), (y = m));
                      break e;
                    }
                  } else if (
                    J.elementType === Z ||
                    (typeof Z == 'object' && Z !== null && Z.$$typeof === Ne && Qu(Z) === J.type)
                  ) {
                    (n(y, J.sibling),
                      (m = l(J, g.props)),
                      (m.ref = Nr(y, J, g)),
                      (m.return = y),
                      (y = m));
                    break e;
                  }
                  n(y, J);
                  break;
                } else t(y, J);
                J = J.sibling;
              }
              g.type === Q
                ? ((m = Nn(g.props.children, y.mode, M, g.key)), (m.return = y), (y = m))
                : ((M = ql(g.type, g.key, g.props, null, y.mode, M)),
                  (M.ref = Nr(y, m, g)),
                  (M.return = y),
                  (y = M));
            }
            return o(y);
          case R:
            e: {
              for (J = g.key; m !== null; ) {
                if (m.key === J)
                  if (
                    m.tag === 4 &&
                    m.stateNode.containerInfo === g.containerInfo &&
                    m.stateNode.implementation === g.implementation
                  ) {
                    (n(y, m.sibling), (m = l(m, g.children || [])), (m.return = y), (y = m));
                    break e;
                  } else {
                    n(y, m);
                    break;
                  }
                else t(y, m);
                m = m.sibling;
              }
              ((m = Jo(g, y.mode, M)), (m.return = y), (y = m));
            }
            return o(y);
          case Ne:
            return ((J = g._init), Le(y, m, J(g._payload), M));
        }
        if (tr(g)) return K(y, m, g, M);
        if (B(g)) return Y(y, m, g, M);
        _l(y, g);
      }
      return (typeof g == 'string' && g !== '') || typeof g == 'number'
        ? ((g = '' + g),
          m !== null && m.tag === 6
            ? (n(y, m.sibling), (m = l(m, g)), (m.return = y), (y = m))
            : (n(y, m), (m = Xo(g, y.mode, M)), (m.return = y), (y = m)),
          o(y))
        : n(y, m);
    }
    return Le;
  }
  var Qn = qu(!0),
    Vu = qu(!1),
    kl = bt(null),
    xl = null,
    qn = null,
    oo = null;
  function so() {
    oo = qn = xl = null;
  }
  function uo(e) {
    var t = kl.current;
    (we(kl), (e._currentValue = t));
  }
  function ao(e, t, n) {
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
    ((xl = e),
      (oo = qn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (rt = !0), (e.firstContext = null)));
  }
  function yt(e) {
    var t = e._currentValue;
    if (oo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), qn === null)) {
        if (xl === null) throw Error(s(308));
        ((qn = e), (xl.dependencies = { lanes: 0, firstContext: e }));
      } else qn = qn.next = e;
    return t;
  }
  var wn = null;
  function co(e) {
    wn === null ? (wn = [e]) : wn.push(e);
  }
  function Gu(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), co(t)) : ((n.next = l.next), (l.next = n)),
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
  var nn = !1;
  function fo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ku(e, t) {
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
      l === null ? ((t.next = t), co(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Ft(e, n)
    );
  }
  function El(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ci(e, n));
    }
  }
  function Yu(e, t) {
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
  function Cl(e, t, n, r) {
    var l = e.updateQueue;
    nn = !1;
    var i = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      a = l.shared.pending;
    if (a !== null) {
      l.shared.pending = null;
      var f = a,
        S = f.next;
      ((f.next = null), o === null ? (i = S) : (o.next = S), (o = f));
      var O = e.alternate;
      O !== null &&
        ((O = O.updateQueue),
        (a = O.lastBaseUpdate),
        a !== o && (a === null ? (O.firstBaseUpdate = S) : (a.next = S), (O.lastBaseUpdate = f)));
    }
    if (i !== null) {
      var P = l.baseState;
      ((o = 0), (O = S = f = null), (a = i));
      do {
        var L = a.lane,
          U = a.eventTime;
        if ((r & L) === L) {
          O !== null &&
            (O = O.next =
              {
                eventTime: U,
                lane: 0,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null,
              });
          e: {
            var K = e,
              Y = a;
            switch (((L = t), (U = n), Y.tag)) {
              case 1:
                if (((K = Y.payload), typeof K == 'function')) {
                  P = K.call(U, P, L);
                  break e;
                }
                P = K;
                break e;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = Y.payload), (L = typeof K == 'function' ? K.call(U, P, L) : K), L == null)
                )
                  break e;
                P = W({}, P, L);
                break e;
              case 2:
                nn = !0;
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((e.flags |= 64), (L = l.effects), L === null ? (l.effects = [a]) : L.push(a));
        } else
          ((U = {
            eventTime: U,
            lane: L,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          }),
            O === null ? ((S = O = U), (f = P)) : (O = O.next = U),
            (o |= L));
        if (((a = a.next), a === null)) {
          if (((a = l.shared.pending), a === null)) break;
          ((L = a),
            (a = L.next),
            (L.next = null),
            (l.lastBaseUpdate = L),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (O === null && (f = P),
        (l.baseState = f),
        (l.firstBaseUpdate = S),
        (l.lastBaseUpdate = O),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((o |= l.lane), (l = l.next));
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      ((kn |= o), (e.lanes = o), (e.memoizedState = P));
    }
  }
  function Zu(e, t, n) {
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
  var jr = {},
    It = bt(jr),
    Tr = bt(jr),
    Lr = bt(jr);
  function Sn(e) {
    if (e === jr) throw Error(s(174));
    return e;
  }
  function po(e, t) {
    switch ((ye(Lr, t), ye(Tr, e), ye(It, jr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : pi(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = pi(t, e)));
    }
    (we(It), ye(It, t));
  }
  function Gn() {
    (we(It), we(Tr), we(Lr));
  }
  function Xu(e) {
    Sn(Lr.current);
    var t = Sn(It.current),
      n = pi(t, e.type);
    t !== n && (ye(Tr, e), ye(It, n));
  }
  function mo(e) {
    Tr.current === e && (we(It), we(Tr));
  }
  var _e = bt(0);
  function Nl(e) {
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
  var ho = [];
  function vo() {
    for (var e = 0; e < ho.length; e++) ho[e]._workInProgressVersionPrimary = null;
    ho.length = 0;
  }
  var jl = X.ReactCurrentDispatcher,
    yo = X.ReactCurrentBatchConfig,
    _n = 0,
    ke = null,
    Re = null,
    Ae = null,
    Tl = !1,
    Or = !1,
    Ir = 0,
    uf = 0;
  function Ge() {
    throw Error(s(321));
  }
  function go(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!xt(e[n], t[n])) return !1;
    return !0;
  }
  function wo(e, t, n, r, l, i) {
    if (
      ((_n = i),
      (ke = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (jl.current = e === null || e.memoizedState === null ? ff : pf),
      (e = n(r, l)),
      Or)
    ) {
      i = 0;
      do {
        if (((Or = !1), (Ir = 0), 25 <= i)) throw Error(s(301));
        ((i += 1), (Ae = Re = null), (t.updateQueue = null), (jl.current = mf), (e = n(r, l)));
      } while (Or);
    }
    if (
      ((jl.current = Il),
      (t = Re !== null && Re.next !== null),
      (_n = 0),
      (Ae = Re = ke = null),
      (Tl = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function So() {
    var e = Ir !== 0;
    return ((Ir = 0), e);
  }
  function Pt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Ae === null ? (ke.memoizedState = Ae = e) : (Ae = Ae.next = e), Ae);
  }
  function gt() {
    if (Re === null) {
      var e = ke.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Re.next;
    var t = Ae === null ? ke.memoizedState : Ae.next;
    if (t !== null) ((Ae = t), (Re = e));
    else {
      if (e === null) throw Error(s(310));
      ((Re = e),
        (e = {
          memoizedState: Re.memoizedState,
          baseState: Re.baseState,
          baseQueue: Re.baseQueue,
          queue: Re.queue,
          next: null,
        }),
        Ae === null ? (ke.memoizedState = Ae = e) : (Ae = Ae.next = e));
    }
    return Ae;
  }
  function Pr(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function _o(e) {
    var t = gt(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Re,
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
        S = i;
      do {
        var O = S.lane;
        if ((_n & O) === O)
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
          var P = {
            lane: O,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null,
          };
          (f === null ? ((a = f = P), (o = r)) : (f = f.next = P), (ke.lanes |= O), (kn |= O));
        }
        S = S.next;
      } while (S !== null && S !== i);
      (f === null ? (o = r) : (f.next = a),
        xt(r, t.memoizedState) || (rt = !0),
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
  function ko(e) {
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
      (xt(i, t.memoizedState) || (rt = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function Ju() {}
  function bu(e, t) {
    var n = ke,
      r = gt(),
      l = t(),
      i = !xt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (rt = !0)),
      (r = r.queue),
      xo(na.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (Ae !== null && Ae.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Rr(9, ta.bind(null, n, r, l, t), void 0, null), Fe === null))
        throw Error(s(349));
      (_n & 30) !== 0 || ea(n, t, l);
    }
    return l;
  }
  function ea(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ke.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (ke.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ta(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ra(t) && la(e));
  }
  function na(e, t, n) {
    return n(function () {
      ra(t) && la(e);
    });
  }
  function ra(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !xt(e, n);
    } catch {
      return !0;
    }
  }
  function la(e) {
    var t = Ft(e, 1);
    t !== null && Tt(t, e, 1, -1);
  }
  function ia(e) {
    var t = Pt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = df.bind(null, ke, e)),
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
  function oa() {
    return gt().memoizedState;
  }
  function Ll(e, t, n, r) {
    var l = Pt();
    ((ke.flags |= e), (l.memoizedState = Rr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function Ol(e, t, n, r) {
    var l = gt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Re !== null) {
      var o = Re.memoizedState;
      if (((i = o.destroy), r !== null && go(r, o.deps))) {
        l.memoizedState = Rr(t, n, i, r);
        return;
      }
    }
    ((ke.flags |= e), (l.memoizedState = Rr(1 | t, n, i, r)));
  }
  function sa(e, t) {
    return Ll(8390656, 8, e, t);
  }
  function xo(e, t) {
    return Ol(2048, 8, e, t);
  }
  function ua(e, t) {
    return Ol(4, 2, e, t);
  }
  function aa(e, t) {
    return Ol(4, 4, e, t);
  }
  function ca(e, t) {
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
  function da(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), Ol(4, 4, ca.bind(null, t, e), n));
  }
  function Eo() {}
  function fa(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && go(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function pa(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && go(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function ma(e, t, n) {
    return (_n & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (rt = !0)), (e.memoizedState = n))
      : (xt(n, t) || ((n = Qs()), (ke.lanes |= n), (kn |= n), (e.baseState = !0)), t);
  }
  function af(e, t) {
    var n = he;
    ((he = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = yo.transition;
    yo.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((he = n), (yo.transition = r));
    }
  }
  function ha() {
    return gt().memoizedState;
  }
  function cf(e, t, n) {
    var r = un(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), va(e)))
      ya(t, n);
    else if (((n = Gu(e, t, n, r)), n !== null)) {
      var l = be();
      (Tt(n, e, r, l), ga(n, t, r));
    }
  }
  function df(e, t, n) {
    var r = un(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (va(e)) ya(t, l);
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
          if (((l.hasEagerState = !0), (l.eagerState = a), xt(a, o))) {
            var f = t.interleaved;
            (f === null ? ((l.next = l), co(t)) : ((l.next = f.next), (f.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Gu(e, t, l, r)), n !== null && ((l = be()), Tt(n, e, r, l), ga(n, t, r)));
    }
  }
  function va(e) {
    var t = e.alternate;
    return e === ke || (t !== null && t === ke);
  }
  function ya(e, t) {
    Or = Tl = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function ga(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ci(e, n));
    }
  }
  var Il = {
      readContext: yt,
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
    ff = {
      readContext: yt,
      useCallback: function (e, t) {
        return ((Pt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: yt,
      useEffect: sa,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), Ll(4194308, 4, ca.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Ll(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ll(4, 2, e, t);
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
          (e = e.dispatch = cf.bind(null, ke, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Pt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ia,
      useDebugValue: Eo,
      useDeferredValue: function (e) {
        return (Pt().memoizedState = e);
      },
      useTransition: function () {
        var e = ia(!1),
          t = e[0];
        return ((e = af.bind(null, e[1])), (Pt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ke,
          l = Pt();
        if (Se) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), Fe === null)) throw Error(s(349));
          (_n & 30) !== 0 || ea(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          sa(na.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          Rr(9, ta.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Pt(),
          t = Fe.identifierPrefix;
        if (Se) {
          var n = At,
            r = Dt;
          ((n = (r & ~(1 << (32 - kt(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = Ir++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':'));
        } else ((n = uf++), (t = ':' + t + 'r' + n.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    pf = {
      readContext: yt,
      useCallback: fa,
      useContext: yt,
      useEffect: xo,
      useImperativeHandle: da,
      useInsertionEffect: ua,
      useLayoutEffect: aa,
      useMemo: pa,
      useReducer: _o,
      useRef: oa,
      useState: function () {
        return _o(Pr);
      },
      useDebugValue: Eo,
      useDeferredValue: function (e) {
        var t = gt();
        return ma(t, Re.memoizedState, e);
      },
      useTransition: function () {
        var e = _o(Pr)[0],
          t = gt().memoizedState;
        return [e, t];
      },
      useMutableSource: Ju,
      useSyncExternalStore: bu,
      useId: ha,
      unstable_isNewReconciler: !1,
    },
    mf = {
      readContext: yt,
      useCallback: fa,
      useContext: yt,
      useEffect: xo,
      useImperativeHandle: da,
      useInsertionEffect: ua,
      useLayoutEffect: aa,
      useMemo: pa,
      useReducer: ko,
      useRef: oa,
      useState: function () {
        return ko(Pr);
      },
      useDebugValue: Eo,
      useDeferredValue: function (e) {
        var t = gt();
        return Re === null ? (t.memoizedState = e) : ma(t, Re.memoizedState, e);
      },
      useTransition: function () {
        var e = ko(Pr)[0],
          t = gt().memoizedState;
        return [e, t];
      },
      useMutableSource: Ju,
      useSyncExternalStore: bu,
      useId: ha,
      unstable_isNewReconciler: !1,
    };
  function Ct(e, t) {
    if (e && e.defaultProps) {
      ((t = W({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Co(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : W({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Pl = {
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
        t !== null && (Tt(t, e, l, r), El(t, e, l)));
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
        t !== null && (Tt(t, e, l, r), El(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = be(),
        r = un(e),
        l = Bt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = rn(e, l, r)),
        t !== null && (Tt(t, e, r, n), El(t, e, r)));
    },
  };
  function wa(e, t, n, r, l, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, i, o)
        : t.prototype && t.prototype.isPureReactComponent
          ? !wr(n, r) || !wr(l, i)
          : !0
    );
  }
  function Sa(e, t, n) {
    var r = !1,
      l = en,
      i = t.contextType;
    return (
      typeof i == 'object' && i !== null
        ? (i = yt(i))
        : ((l = nt(t) ? vn : Ve.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Un(e, l) : en)),
      (t = new t(n, i)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Pl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function _a(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Pl.enqueueReplaceState(t, t.state, null));
  }
  function No(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), fo(e));
    var i = t.contextType;
    (typeof i == 'object' && i !== null
      ? (l.context = yt(i))
      : ((i = nt(t) ? vn : Ve.current), (l.context = Un(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == 'function' && (Co(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((t = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount(),
        t !== l.state && Pl.enqueueReplaceState(l, l.state, null),
        Cl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function Kn(e, t) {
    try {
      var n = '',
        r = t;
      do ((n += ue(r)), (r = r.return));
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
  function jo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function To(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var hf = typeof WeakMap == 'function' ? WeakMap : Map;
  function ka(e, t, n) {
    ((n = Bt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Bl || ((Bl = !0), (Ho = r)), To(e, t));
      }),
      n
    );
  }
  function xa(e, t, n) {
    ((n = Bt(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          To(e, t);
        }));
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == 'function' &&
        (n.callback = function () {
          (To(e, t),
            typeof r != 'function' && (on === null ? (on = new Set([this])) : on.add(this)));
          var o = t.stack;
          this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' });
        }),
      n
    );
  }
  function Ea(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new hf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Lf.bind(null, e, t, n)), t.then(e, e));
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
  function Na(e, t, n, r, l) {
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
  var vf = X.ReactCurrentOwner,
    rt = !1;
  function Je(e, t, n, r) {
    t.child = e === null ? Vu(t, null, n, r) : Qn(t, e.child, n, r);
  }
  function ja(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      Vn(t, l),
      (r = wo(e, t, n, r, i, l)),
      (n = So()),
      e !== null && !rt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ut(e, t, l))
        : (Se && n && to(t), (t.flags |= 1), Je(e, t, r, l), t.child)
    );
  }
  function Ta(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == 'function' &&
        !Zo(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), La(e, t, i, r, l))
        : ((e = ql(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var o = i.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : wr), n(o, r) && e.ref === t.ref))
        return Ut(e, t, l);
    }
    return ((t.flags |= 1), (e = cn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function La(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (wr(i, r) && e.ref === t.ref)
        if (((rt = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (rt = !0);
        else return ((t.lanes = e.lanes), Ut(e, t, l));
    }
    return Lo(e, t, n, r, l);
  }
  function Oa(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          ye(Zn, pt),
          (pt |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            ye(Zn, pt),
            (pt |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = i !== null ? i.baseLanes : n),
          ye(Zn, pt),
          (pt |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ye(Zn, pt),
        (pt |= r));
    return (Je(e, t, l, n), t.child);
  }
  function Ia(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Lo(e, t, n, r, l) {
    var i = nt(n) ? vn : Ve.current;
    return (
      (i = Un(t, i)),
      Vn(t, l),
      (n = wo(e, t, n, r, i, l)),
      (r = So()),
      e !== null && !rt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ut(e, t, l))
        : (Se && r && to(t), (t.flags |= 1), Je(e, t, n, l), t.child)
    );
  }
  function Pa(e, t, n, r, l) {
    if (nt(n)) {
      var i = !0;
      vl(t);
    } else i = !1;
    if ((Vn(t, l), t.stateNode === null)) (Ml(e, t), Sa(t, n, r), No(t, n, r, l), (r = !0));
    else if (e === null) {
      var o = t.stateNode,
        a = t.memoizedProps;
      o.props = a;
      var f = o.context,
        S = n.contextType;
      typeof S == 'object' && S !== null
        ? (S = yt(S))
        : ((S = nt(n) ? vn : Ve.current), (S = Un(t, S)));
      var O = n.getDerivedStateFromProps,
        P = typeof O == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
      (P ||
        (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof o.componentWillReceiveProps != 'function') ||
        ((a !== r || f !== S) && _a(t, o, r, S)),
        (nn = !1));
      var L = t.memoizedState;
      ((o.state = L),
        Cl(t, r, o, l),
        (f = t.memoizedState),
        a !== r || L !== f || tt.current || nn
          ? (typeof O == 'function' && (Co(t, n, O, r), (f = t.memoizedState)),
            (a = nn || wa(t, n, a, r, L, f, S))
              ? (P ||
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
            (o.context = S),
            (r = a))
          : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1)));
    } else {
      ((o = t.stateNode),
        Ku(e, t),
        (a = t.memoizedProps),
        (S = t.type === t.elementType ? a : Ct(t.type, a)),
        (o.props = S),
        (P = t.pendingProps),
        (L = o.context),
        (f = n.contextType),
        typeof f == 'object' && f !== null
          ? (f = yt(f))
          : ((f = nt(n) ? vn : Ve.current), (f = Un(t, f))));
      var U = n.getDerivedStateFromProps;
      ((O = typeof U == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
        (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof o.componentWillReceiveProps != 'function') ||
        ((a !== P || L !== f) && _a(t, o, r, f)),
        (nn = !1),
        (L = t.memoizedState),
        (o.state = L),
        Cl(t, r, o, l));
      var K = t.memoizedState;
      a !== P || L !== K || tt.current || nn
        ? (typeof U == 'function' && (Co(t, n, U, r), (K = t.memoizedState)),
          (S = nn || wa(t, n, S, r, L, K, f) || !1)
            ? (O ||
                (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                  typeof o.componentWillUpdate != 'function') ||
                (typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(r, K, f),
                typeof o.UNSAFE_componentWillUpdate == 'function' &&
                  o.UNSAFE_componentWillUpdate(r, K, f)),
              typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof o.componentDidUpdate != 'function' ||
                (a === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != 'function' ||
                (a === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = K)),
          (o.props = r),
          (o.state = K),
          (o.context = f),
          (r = S))
        : (typeof o.componentDidUpdate != 'function' ||
            (a === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != 'function' ||
            (a === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Oo(e, t, n, r, i, l);
  }
  function Oo(e, t, n, r, l, i) {
    Ia(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return (l && Au(t, n, !1), Ut(e, t, i));
    ((r = t.stateNode), (vf.current = t));
    var a = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = Qn(t, e.child, null, i)), (t.child = Qn(t, null, a, i)))
        : Je(e, t, a, i),
      (t.memoizedState = r.state),
      l && Au(t, n, !0),
      t.child
    );
  }
  function Ra(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? zu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && zu(e, t.context, !1),
      po(e, t.containerInfo));
  }
  function Ma(e, t, n, r, l) {
    return (Hn(), io(l), (t.flags |= 256), Je(e, t, n, r), t.child);
  }
  var Io = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Po(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function za(e, t, n) {
    var r = t.pendingProps,
      l = _e.current,
      i = !1,
      o = (t.flags & 128) !== 0,
      a;
    if (
      ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      a ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      ye(_e, l & 1),
      e === null)
    )
      return (
        lo(t),
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
                  : (i = Vl(o, r, 0, null)),
                (e = Nn(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = Po(n)),
                (t.memoizedState = Io),
                e)
              : Ro(t, o))
      );
    if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
      return yf(e, t, o, r, a, l, n);
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
            ? Po(n)
            : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
        (i.memoizedState = o),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = Io),
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
  function Ro(e, t) {
    return (
      (t = Vl({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Rl(e, t, n, r) {
    return (
      r !== null && io(r),
      Qn(t, e.child, null, n),
      (e = Ro(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function yf(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = jo(Error(s(422)))), Rl(e, t, o, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (l = t.mode),
            (r = Vl({ mode: 'visible', children: r.children }, l, 0, null)),
            (i = Nn(i, l, o, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && Qn(t, e.child, null, o),
            (t.child.memoizedState = Po(o)),
            (t.memoizedState = Io),
            i);
    if ((t.mode & 1) === 0) return Rl(e, t, o, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
      return ((r = a), (i = Error(s(419))), (r = jo(i, r, void 0)), Rl(e, t, o, r));
    }
    if (((a = (o & e.childLanes) !== 0), rt || a)) {
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
          l !== 0 && l !== i.retryLane && ((i.retryLane = l), Ft(e, l), Tt(r, e, l, -1)));
      }
      return (Yo(), (r = jo(Error(s(421)))), Rl(e, t, o, r));
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Of.bind(null, e)), (l._reactRetry = t), null)
      : ((e = i.treeContext),
        (ft = Jt(l.nextSibling)),
        (dt = t),
        (Se = !0),
        (Et = null),
        e !== null &&
          ((ht[vt++] = Dt),
          (ht[vt++] = At),
          (ht[vt++] = yn),
          (Dt = e.id),
          (At = e.overflow),
          (yn = t)),
        (t = Ro(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Da(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), ao(e.return, t, n));
  }
  function Mo(e, t, n, r, l) {
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
  function Aa(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((Je(e, t, r.children, n), (r = _e.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Da(e, n, t);
          else if (e.tag === 19) Da(e, n, t);
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
            ((e = n.alternate), e !== null && Nl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            Mo(t, !1, l, n, i));
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Nl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          Mo(t, !0, n, null, i);
          break;
        case 'together':
          Mo(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ml(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Ut(e, t, n) {
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
  function gf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Ra(t), Hn());
        break;
      case 5:
        Xu(t);
        break;
      case 1:
        nt(t.type) && vl(t);
        break;
      case 4:
        po(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (ye(kl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ye(_e, _e.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? za(e, t, n)
              : (ye(_e, _e.current & 1), (e = Ut(e, t, n)), e !== null ? e.sibling : null);
        ye(_e, _e.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Aa(e, t, n);
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
        return ((t.lanes = 0), Oa(e, t, n));
    }
    return Ut(e, t, n);
  }
  var Fa, zo, Ba, Ua;
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
    (zo = function () {}),
    (Ba = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), Sn(It.current));
        var i = null;
        switch (n) {
          case 'input':
            ((l = qt(e, l)), (r = qt(e, r)), (i = []));
            break;
          case 'select':
            ((l = W({}, l, { value: void 0 })), (r = W({}, r, { value: void 0 })), (i = []));
            break;
          case 'textarea':
            ((l = fi(e, l)), (r = fi(e, r)), (i = []));
            break;
          default:
            typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = pl);
        }
        mi(n, r);
        var o;
        n = null;
        for (S in l)
          if (!r.hasOwnProperty(S) && l.hasOwnProperty(S) && l[S] != null)
            if (S === 'style') {
              var a = l[S];
              for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
            } else
              S !== 'dangerouslySetInnerHTML' &&
                S !== 'children' &&
                S !== 'suppressContentEditableWarning' &&
                S !== 'suppressHydrationWarning' &&
                S !== 'autoFocus' &&
                (C.hasOwnProperty(S) ? i || (i = []) : (i = i || []).push(S, null));
        for (S in r) {
          var f = r[S];
          if (
            ((a = l != null ? l[S] : void 0),
            r.hasOwnProperty(S) && f !== a && (f != null || a != null))
          )
            if (S === 'style')
              if (a) {
                for (o in a)
                  !a.hasOwnProperty(o) ||
                    (f && f.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ''));
                for (o in f) f.hasOwnProperty(o) && a[o] !== f[o] && (n || (n = {}), (n[o] = f[o]));
              } else (n || (i || (i = []), i.push(S, n)), (n = f));
            else
              S === 'dangerouslySetInnerHTML'
                ? ((f = f ? f.__html : void 0),
                  (a = a ? a.__html : void 0),
                  f != null && a !== f && (i = i || []).push(S, f))
                : S === 'children'
                  ? (typeof f != 'string' && typeof f != 'number') || (i = i || []).push(S, '' + f)
                  : S !== 'suppressContentEditableWarning' &&
                    S !== 'suppressHydrationWarning' &&
                    (C.hasOwnProperty(S)
                      ? (f != null && S === 'onScroll' && ge('scroll', e), i || a === f || (i = []))
                      : (i = i || []).push(S, f));
        }
        n && (i = i || []).push('style', n);
        var S = i;
        (t.updateQueue = S) && (t.flags |= 4);
      }
    }),
    (Ua = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function Mr(e, t) {
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
  function Ke(e) {
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
  function wf(e, t, n) {
    var r = t.pendingProps;
    switch ((no(t), t.tag)) {
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
        return (Ke(t), null);
      case 1:
        return (nt(t.type) && hl(), Ke(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Gn(),
          we(tt),
          we(Ve),
          vo(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Sl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Et !== null && (Vo(Et), (Et = null)))),
          zo(e, t),
          Ke(t),
          null
        );
      case 5:
        mo(t);
        var l = Sn(Lr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Ba(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return (Ke(t), null);
          }
          if (((e = Sn(It.current)), Sl(t))) {
            ((r = t.stateNode), (n = t.type));
            var i = t.memoizedProps;
            switch (((r[Ot] = t), (r[Er] = i), (e = (t.mode & 1) !== 0), n)) {
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
                (er(r, i), ge('invalid', r));
                break;
              case 'select':
                ((r._wrapperState = { wasMultiple: !!i.multiple }), ge('invalid', r));
                break;
              case 'textarea':
                (xs(r, i), ge('invalid', r));
            }
            (mi(n, i), (l = null));
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var a = i[o];
                o === 'children'
                  ? typeof a == 'string'
                    ? r.textContent !== a &&
                      (i.suppressHydrationWarning !== !0 && fl(r.textContent, a, e),
                      (l = ['children', a]))
                    : typeof a == 'number' &&
                      r.textContent !== '' + a &&
                      (i.suppressHydrationWarning !== !0 && fl(r.textContent, a, e),
                      (l = ['children', '' + a]))
                  : C.hasOwnProperty(o) && a != null && o === 'onScroll' && ge('scroll', r);
              }
            switch (n) {
              case 'input':
                (at(r), ks(r, i, !0));
                break;
              case 'textarea':
                (at(r), Cs(r));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof i.onClick == 'function' && (r.onclick = pl);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((o = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Ns(n)),
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
              (e[Ot] = t),
              (e[Er] = r),
              Fa(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((o = hi(n, r)), n)) {
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
                  (er(e, r), (l = qt(e, r)), ge('invalid', e));
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = W({}, r, { value: void 0 })),
                    ge('invalid', e));
                  break;
                case 'textarea':
                  (xs(e, r), (l = fi(e, r)), ge('invalid', e));
                  break;
                default:
                  l = r;
              }
              (mi(n, l), (a = l));
              for (i in a)
                if (a.hasOwnProperty(i)) {
                  var f = a[i];
                  i === 'style'
                    ? Ls(e, f)
                    : i === 'dangerouslySetInnerHTML'
                      ? ((f = f ? f.__html : void 0), f != null && js(e, f))
                      : i === 'children'
                        ? typeof f == 'string'
                          ? (n !== 'textarea' || f !== '') && nr(e, f)
                          : typeof f == 'number' && nr(e, '' + f)
                        : i !== 'suppressContentEditableWarning' &&
                          i !== 'suppressHydrationWarning' &&
                          i !== 'autoFocus' &&
                          (C.hasOwnProperty(i)
                            ? f != null && i === 'onScroll' && ge('scroll', e)
                            : f != null && oe(e, i, f, o));
                }
              switch (n) {
                case 'input':
                  (at(e), ks(e, r, !1));
                  break;
                case 'textarea':
                  (at(e), Cs(e));
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + fe(r.value));
                  break;
                case 'select':
                  ((e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? Tn(e, !!r.multiple, i, !1)
                      : r.defaultValue != null && Tn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = pl);
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
        return (Ke(t), null);
      case 6:
        if (e && t.stateNode != null) Ua(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(s(166));
          if (((n = Sn(Lr.current)), Sn(It.current), Sl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Ot] = t),
              (i = r.nodeValue !== n) && ((e = dt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  fl(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    fl(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Ot] = t),
              (t.stateNode = r));
        }
        return (Ke(t), null);
      case 13:
        if (
          (we(_e),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Se && ft !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Hu(), Hn(), (t.flags |= 98560), (i = !1));
          else if (((i = Sl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(s(318));
              if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
                throw Error(s(317));
              i[Ot] = t;
            } else (Hn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ke(t), (i = !1));
          } else (Et !== null && (Vo(Et), (Et = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (_e.current & 1) !== 0 ? Me === 0 && (Me = 3) : Yo())),
            t.updateQueue !== null && (t.flags |= 4),
            Ke(t),
            null);
      case 4:
        return (Gn(), zo(e, t), e === null && kr(t.stateNode.containerInfo), Ke(t), null);
      case 10:
        return (uo(t.type._context), Ke(t), null);
      case 17:
        return (nt(t.type) && hl(), Ke(t), null);
      case 19:
        if ((we(_e), (i = t.memoizedState), i === null)) return (Ke(t), null);
        if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) Mr(i, !1);
          else {
            if (Me !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = Nl(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      Mr(i, !1),
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
                  return (ye(_e, (_e.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Te() > Xn &&
              ((t.flags |= 128), (r = !0), Mr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Nl(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Mr(i, !0),
                i.tail === null && i.tailMode === 'hidden' && !o.alternate && !Se)
              )
                return (Ke(t), null);
            } else
              2 * Te() - i.renderingStartTime > Xn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Mr(i, !1), (t.lanes = 4194304));
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
            ye(_e, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ke(t), null);
      case 22:
      case 23:
        return (
          Ko(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (pt & 1073741824) !== 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ke(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Sf(e, t) {
    switch ((no(t), t.tag)) {
      case 1:
        return (
          nt(t.type) && hl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Gn(),
          we(tt),
          we(Ve),
          vo(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (mo(t), null);
      case 13:
        if ((we(_e), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          Hn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (we(_e), null);
      case 4:
        return (Gn(), null);
      case 10:
        return (uo(t.type._context), null);
      case 22:
      case 23:
        return (Ko(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var zl = !1,
    Ye = !1,
    _f = typeof WeakSet == 'function' ? WeakSet : Set,
    q = null;
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
  function Do(e, t, n) {
    try {
      n();
    } catch (r) {
      je(e, t, r);
    }
  }
  var $a = !1;
  function kf(e, t) {
    if (((Gi = tl), (e = wu()), Bi(e))) {
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
              S = 0,
              O = 0,
              P = e,
              L = null;
            t: for (;;) {
              for (
                var U;
                P !== n || (l !== 0 && P.nodeType !== 3) || (a = o + l),
                  P !== i || (r !== 0 && P.nodeType !== 3) || (f = o + r),
                  P.nodeType === 3 && (o += P.nodeValue.length),
                  (U = P.firstChild) !== null;
              )
                ((L = P), (P = U));
              for (;;) {
                if (P === e) break t;
                if (
                  (L === n && ++S === l && (a = o),
                  L === i && ++O === r && (f = o),
                  (U = P.nextSibling) !== null)
                )
                  break;
                ((P = L), (L = P.parentNode));
              }
              P = U;
            }
            n = a === -1 || f === -1 ? null : { start: a, end: f };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ki = { focusedElem: e, selectionRange: n }, tl = !1, q = t; q !== null; )
      if (((t = q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (q = e));
      else
        for (; q !== null; ) {
          t = q;
          try {
            var K = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (K !== null) {
                    var Y = K.memoizedProps,
                      Le = K.memoizedState,
                      y = t.stateNode,
                      m = y.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Y : Ct(t.type, Y),
                        Le
                      );
                    y.__reactInternalSnapshotBeforeUpdate = m;
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
            ((e.return = t.return), (q = e));
            break;
          }
          q = t.return;
        }
    return ((K = $a), ($a = !1), K);
  }
  function zr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          ((l.destroy = void 0), i !== void 0 && Do(t, n, i));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Dl(e, t) {
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
  function Wa(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Wa(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Ot], delete t[Er], delete t[Ji], delete t[rf], delete t[lf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Ha(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Qa(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ha(e.return)) return null;
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
  function Fo(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = pl)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Fo(e, t, n), e = e.sibling; e !== null; ) (Fo(e, t, n), (e = e.sibling));
  }
  function Bo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Bo(e, t, n), e = e.sibling; e !== null; ) (Bo(e, t, n), (e = e.sibling));
  }
  var We = null,
    Nt = !1;
  function ln(e, t, n) {
    for (n = n.child; n !== null; ) (qa(e, t, n), (n = n.sibling));
  }
  function qa(e, t, n) {
    if (Lt && typeof Lt.onCommitFiberUnmount == 'function')
      try {
        Lt.onCommitFiberUnmount(Yr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ye || Yn(n, t);
      case 6:
        var r = We,
          l = Nt;
        ((We = null),
          ln(e, t, n),
          (We = r),
          (Nt = l),
          We !== null &&
            (Nt
              ? ((e = We),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : We.removeChild(n.stateNode)));
        break;
      case 18:
        We !== null &&
          (Nt
            ? ((e = We),
              (n = n.stateNode),
              e.nodeType === 8 ? Xi(e.parentNode, n) : e.nodeType === 1 && Xi(e, n),
              pr(e))
            : Xi(We, n.stateNode));
        break;
      case 4:
        ((r = We),
          (l = Nt),
          (We = n.stateNode.containerInfo),
          (Nt = !0),
          ln(e, t, n),
          (We = r),
          (Nt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ye && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var i = l,
              o = i.destroy;
            ((i = i.tag),
              o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Do(n, t, o),
              (l = l.next));
          } while (l !== r);
        }
        ln(e, t, n);
        break;
      case 1:
        if (!Ye && (Yn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (a) {
            je(n, t, a);
          }
        ln(e, t, n);
        break;
      case 21:
        ln(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ye = (r = Ye) || n.memoizedState !== null), ln(e, t, n), (Ye = r))
          : ln(e, t, n);
        break;
      default:
        ln(e, t, n);
    }
  }
  function Va(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new _f()),
        t.forEach(function (r) {
          var l = If.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function jt(e, t) {
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
                ((We = a.stateNode), (Nt = !1));
                break e;
              case 3:
                ((We = a.stateNode.containerInfo), (Nt = !0));
                break e;
              case 4:
                ((We = a.stateNode.containerInfo), (Nt = !0));
                break e;
            }
            a = a.return;
          }
          if (We === null) throw Error(s(160));
          (qa(i, o, l), (We = null), (Nt = !1));
          var f = l.alternate;
          (f !== null && (f.return = null), (l.return = null));
        } catch (S) {
          je(l, t, S);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Ga(t, e), (t = t.sibling));
  }
  function Ga(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((jt(t, e), Rt(e), r & 4)) {
          try {
            (zr(3, e, e.return), Dl(3, e));
          } catch (Y) {
            je(e, e.return, Y);
          }
          try {
            zr(5, e, e.return);
          } catch (Y) {
            je(e, e.return, Y);
          }
        }
        break;
      case 1:
        (jt(t, e), Rt(e), r & 512 && n !== null && Yn(n, n.return));
        break;
      case 5:
        if ((jt(t, e), Rt(e), r & 512 && n !== null && Yn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            nr(l, '');
          } catch (Y) {
            je(e, e.return, Y);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            o = n !== null ? n.memoizedProps : i,
            a = e.type,
            f = e.updateQueue;
          if (((e.updateQueue = null), f !== null))
            try {
              (a === 'input' && i.type === 'radio' && i.name != null && _s(l, i), hi(a, o));
              var S = hi(a, i);
              for (o = 0; o < f.length; o += 2) {
                var O = f[o],
                  P = f[o + 1];
                O === 'style'
                  ? Ls(l, P)
                  : O === 'dangerouslySetInnerHTML'
                    ? js(l, P)
                    : O === 'children'
                      ? nr(l, P)
                      : oe(l, O, P, S);
              }
              switch (a) {
                case 'input':
                  ci(l, i);
                  break;
                case 'textarea':
                  Es(l, i);
                  break;
                case 'select':
                  var L = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var U = i.value;
                  U != null
                    ? Tn(l, !!i.multiple, U, !1)
                    : L !== !!i.multiple &&
                      (i.defaultValue != null
                        ? Tn(l, !!i.multiple, i.defaultValue, !0)
                        : Tn(l, !!i.multiple, i.multiple ? [] : '', !1));
              }
              l[Er] = i;
            } catch (Y) {
              je(e, e.return, Y);
            }
        }
        break;
      case 6:
        if ((jt(t, e), Rt(e), r & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((l = e.stateNode), (i = e.memoizedProps));
          try {
            l.nodeValue = i;
          } catch (Y) {
            je(e, e.return, Y);
          }
        }
        break;
      case 3:
        if ((jt(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            pr(t.containerInfo);
          } catch (Y) {
            je(e, e.return, Y);
          }
        break;
      case 4:
        (jt(t, e), Rt(e));
        break;
      case 13:
        (jt(t, e),
          Rt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (Wo = Te())),
          r & 4 && Va(e));
        break;
      case 22:
        if (
          ((O = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ye = (S = Ye) || O), jt(t, e), (Ye = S)) : jt(t, e),
          Rt(e),
          r & 8192)
        ) {
          if (
            ((S = e.memoizedState !== null), (e.stateNode.isHidden = S) && !O && (e.mode & 1) !== 0)
          )
            for (q = e, O = e.child; O !== null; ) {
              for (P = q = O; q !== null; ) {
                switch (((L = q), (U = L.child), L.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    zr(4, L, L.return);
                    break;
                  case 1:
                    Yn(L, L.return);
                    var K = L.stateNode;
                    if (typeof K.componentWillUnmount == 'function') {
                      ((r = L), (n = L.return));
                      try {
                        ((t = r),
                          (K.props = t.memoizedProps),
                          (K.state = t.memoizedState),
                          K.componentWillUnmount());
                      } catch (Y) {
                        je(r, n, Y);
                      }
                    }
                    break;
                  case 5:
                    Yn(L, L.return);
                    break;
                  case 22:
                    if (L.memoizedState !== null) {
                      Za(P);
                      continue;
                    }
                }
                U !== null ? ((U.return = L), (q = U)) : Za(P);
              }
              O = O.sibling;
            }
          e: for (O = null, P = e; ; ) {
            if (P.tag === 5) {
              if (O === null) {
                O = P;
                try {
                  ((l = P.stateNode),
                    S
                      ? ((i = l.style),
                        typeof i.setProperty == 'function'
                          ? i.setProperty('display', 'none', 'important')
                          : (i.display = 'none'))
                      : ((a = P.stateNode),
                        (f = P.memoizedProps.style),
                        (o = f != null && f.hasOwnProperty('display') ? f.display : null),
                        (a.style.display = Ts('display', o))));
                } catch (Y) {
                  je(e, e.return, Y);
                }
              }
            } else if (P.tag === 6) {
              if (O === null)
                try {
                  P.stateNode.nodeValue = S ? '' : P.memoizedProps;
                } catch (Y) {
                  je(e, e.return, Y);
                }
            } else if (
              ((P.tag !== 22 && P.tag !== 23) || P.memoizedState === null || P === e) &&
              P.child !== null
            ) {
              ((P.child.return = P), (P = P.child));
              continue;
            }
            if (P === e) break e;
            for (; P.sibling === null; ) {
              if (P.return === null || P.return === e) break e;
              (O === P && (O = null), (P = P.return));
            }
            (O === P && (O = null), (P.sibling.return = P.return), (P = P.sibling));
          }
        }
        break;
      case 19:
        (jt(t, e), Rt(e), r & 4 && Va(e));
        break;
      case 21:
        break;
      default:
        (jt(t, e), Rt(e));
    }
  }
  function Rt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ha(n)) {
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
            r.flags & 32 && (nr(l, ''), (r.flags &= -33));
            var i = Qa(e);
            Bo(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              a = Qa(e);
            Fo(e, a, o);
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
  function xf(e, t, n) {
    ((q = e), Ka(e));
  }
  function Ka(e, t, n) {
    for (var r = (e.mode & 1) !== 0; q !== null; ) {
      var l = q,
        i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || zl;
        if (!o) {
          var a = l.alternate,
            f = (a !== null && a.memoizedState !== null) || Ye;
          a = zl;
          var S = Ye;
          if (((zl = o), (Ye = f) && !S))
            for (q = l; q !== null; )
              ((o = q),
                (f = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? Xa(l)
                  : f !== null
                    ? ((f.return = o), (q = f))
                    : Xa(l));
          for (; i !== null; ) ((q = i), Ka(i), (i = i.sibling));
          ((q = l), (zl = a), (Ye = S));
        }
        Ya(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? ((i.return = l), (q = i)) : Ya(e);
    }
  }
  function Ya(e) {
    for (; q !== null; ) {
      var t = q;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ye || Dl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ye)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : Ct(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var i = t.updateQueue;
                i !== null && Zu(t, i, r);
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
                  Zu(t, o, n);
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
                  var S = t.alternate;
                  if (S !== null) {
                    var O = S.memoizedState;
                    if (O !== null) {
                      var P = O.dehydrated;
                      P !== null && pr(P);
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
          Ye || (t.flags & 512 && Ao(t));
        } catch (L) {
          je(t, t.return, L);
        }
      }
      if (t === e) {
        q = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (q = n));
        break;
      }
      q = t.return;
    }
  }
  function Za(e) {
    for (; q !== null; ) {
      var t = q;
      if (t === e) {
        q = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (q = n));
        break;
      }
      q = t.return;
    }
  }
  function Xa(e) {
    for (; q !== null; ) {
      var t = q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Dl(4, t);
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
            var i = t.return;
            try {
              Ao(t);
            } catch (f) {
              je(t, i, f);
            }
            break;
          case 5:
            var o = t.return;
            try {
              Ao(t);
            } catch (f) {
              je(t, o, f);
            }
        }
      } catch (f) {
        je(t, t.return, f);
      }
      if (t === e) {
        q = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        ((a.return = t.return), (q = a));
        break;
      }
      q = t.return;
    }
  }
  var Ef = Math.ceil,
    Al = X.ReactCurrentDispatcher,
    Uo = X.ReactCurrentOwner,
    wt = X.ReactCurrentBatchConfig,
    ce = 0,
    Fe = null,
    Ie = null,
    He = 0,
    pt = 0,
    Zn = bt(0),
    Me = 0,
    Dr = null,
    kn = 0,
    Fl = 0,
    $o = 0,
    Ar = null,
    lt = null,
    Wo = 0,
    Xn = 1 / 0,
    $t = null,
    Bl = !1,
    Ho = null,
    on = null,
    Ul = !1,
    sn = null,
    $l = 0,
    Fr = 0,
    Qo = null,
    Wl = -1,
    Hl = 0;
  function be() {
    return (ce & 6) !== 0 ? Te() : Wl !== -1 ? Wl : (Wl = Te());
  }
  function un(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ce & 2) !== 0 && He !== 0
        ? He & -He
        : sf.transition !== null
          ? (Hl === 0 && (Hl = Qs()), Hl)
          : ((e = he), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : bs(e.type))), e);
  }
  function Tt(e, t, n, r) {
    if (50 < Fr) throw ((Fr = 0), (Qo = null), Error(s(185)));
    (ur(e, n, r),
      ((ce & 2) === 0 || e !== Fe) &&
        (e === Fe && ((ce & 2) === 0 && (Fl |= n), Me === 4 && an(e, He)),
        it(e, r),
        n === 1 && ce === 0 && (t.mode & 1) === 0 && ((Xn = Te() + 500), yl && tn())));
  }
  function it(e, t) {
    var n = e.callbackNode;
    od(e, t);
    var r = Jr(e, e === Fe ? He : 0);
    if (r === 0) (n !== null && $s(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && $s(n), t === 1))
        (e.tag === 0 ? of(ba.bind(null, e)) : Fu(ba.bind(null, e)),
          tf(function () {
            (ce & 6) === 0 && tn();
          }),
          (n = null));
      else {
        switch (qs(r)) {
          case 1:
            n = ki;
            break;
          case 4:
            n = Ws;
            break;
          case 16:
            n = Kr;
            break;
          case 536870912:
            n = Hs;
            break;
          default:
            n = Kr;
        }
        n = sc(n, Ja.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Ja(e, t) {
    if (((Wl = -1), (Hl = 0), (ce & 6) !== 0)) throw Error(s(327));
    var n = e.callbackNode;
    if (Jn() && e.callbackNode !== n) return null;
    var r = Jr(e, e === Fe ? He : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Ql(e, r);
    else {
      t = r;
      var l = ce;
      ce |= 2;
      var i = tc();
      (Fe !== e || He !== t) && (($t = null), (Xn = Te() + 500), En(e, t));
      do
        try {
          jf();
          break;
        } catch (a) {
          ec(e, a);
        }
      while (!0);
      (so(), (Al.current = i), (ce = l), Ie !== null ? (t = 0) : ((Fe = null), (He = 0), (t = Me)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = xi(e)), l !== 0 && ((r = l), (t = qo(e, l)))), t === 1))
        throw ((n = Dr), En(e, 0), an(e, r), it(e, Te()), n);
      if (t === 6) an(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Cf(l) &&
            ((t = Ql(e, r)),
            t === 2 && ((i = xi(e)), i !== 0 && ((r = i), (t = qo(e, i)))),
            t === 1))
        )
          throw ((n = Dr), En(e, 0), an(e, r), it(e, Te()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Cn(e, lt, $t);
            break;
          case 3:
            if ((an(e, r), (r & 130023424) === r && ((t = Wo + 500 - Te()), 10 < t))) {
              if (Jr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (be(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = Zi(Cn.bind(null, e, lt, $t), t);
              break;
            }
            Cn(e, lt, $t);
            break;
          case 4:
            if ((an(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - kt(r);
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
                            : 1960 * Ef(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Zi(Cn.bind(null, e, lt, $t), r);
              break;
            }
            Cn(e, lt, $t);
            break;
          case 5:
            Cn(e, lt, $t);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (it(e, Te()), e.callbackNode === n ? Ja.bind(null, e) : null);
  }
  function qo(e, t) {
    var n = Ar;
    return (
      e.current.memoizedState.isDehydrated && (En(e, t).flags |= 256),
      (e = Ql(e, t)),
      e !== 2 && ((t = lt), (lt = n), t !== null && Vo(t)),
      e
    );
  }
  function Vo(e) {
    lt === null ? (lt = e) : lt.push.apply(lt, e);
  }
  function Cf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!xt(i(), l)) return !1;
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
      t &= ~$o, t &= ~Fl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - kt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function ba(e) {
    if ((ce & 6) !== 0) throw Error(s(327));
    Jn();
    var t = Jr(e, 0);
    if ((t & 1) === 0) return (it(e, Te()), null);
    var n = Ql(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = xi(e);
      r !== 0 && ((t = r), (n = qo(e, r)));
    }
    if (n === 1) throw ((n = Dr), En(e, 0), an(e, t), it(e, Te()), n);
    if (n === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Cn(e, lt, $t),
      it(e, Te()),
      null
    );
  }
  function Go(e, t) {
    var n = ce;
    ce |= 1;
    try {
      return e(t);
    } finally {
      ((ce = n), ce === 0 && ((Xn = Te() + 500), yl && tn()));
    }
  }
  function xn(e) {
    sn !== null && sn.tag === 0 && (ce & 6) === 0 && Jn();
    var t = ce;
    ce |= 1;
    var n = wt.transition,
      r = he;
    try {
      if (((wt.transition = null), (he = 1), e)) return e();
    } finally {
      ((he = r), (wt.transition = n), (ce = t), (ce & 6) === 0 && tn());
    }
  }
  function Ko() {
    ((pt = Zn.current), we(Zn));
  }
  function En(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), ef(n)), Ie !== null))
      for (n = Ie.return; n !== null; ) {
        var r = n;
        switch ((no(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && hl());
            break;
          case 3:
            (Gn(), we(tt), we(Ve), vo());
            break;
          case 5:
            mo(r);
            break;
          case 4:
            Gn();
            break;
          case 13:
            we(_e);
            break;
          case 19:
            we(_e);
            break;
          case 10:
            uo(r.type._context);
            break;
          case 22:
          case 23:
            Ko();
        }
        n = n.return;
      }
    if (
      ((Fe = e),
      (Ie = e = cn(e.current, null)),
      (He = pt = t),
      (Me = 0),
      (Dr = null),
      ($o = Fl = kn = 0),
      (lt = Ar = null),
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
  function ec(e, t) {
    do {
      var n = Ie;
      try {
        if ((so(), (jl.current = Il), Tl)) {
          for (var r = ke.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          Tl = !1;
        }
        if (
          ((_n = 0),
          (Ae = Re = ke = null),
          (Or = !1),
          (Ir = 0),
          (Uo.current = null),
          n === null || n.return === null)
        ) {
          ((Me = 1), (Dr = t), (Ie = null));
          break;
        }
        e: {
          var i = e,
            o = n.return,
            a = n,
            f = t;
          if (
            ((t = He),
            (a.flags |= 32768),
            f !== null && typeof f == 'object' && typeof f.then == 'function')
          ) {
            var S = f,
              O = a,
              P = O.tag;
            if ((O.mode & 1) === 0 && (P === 0 || P === 11 || P === 15)) {
              var L = O.alternate;
              L
                ? ((O.updateQueue = L.updateQueue),
                  (O.memoizedState = L.memoizedState),
                  (O.lanes = L.lanes))
                : ((O.updateQueue = null), (O.memoizedState = null));
            }
            var U = Ca(o);
            if (U !== null) {
              ((U.flags &= -257), Na(U, o, a, i, t), U.mode & 1 && Ea(i, S, t), (t = U), (f = S));
              var K = t.updateQueue;
              if (K === null) {
                var Y = new Set();
                (Y.add(f), (t.updateQueue = Y));
              } else K.add(f);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Ea(i, S, t), Yo());
                break e;
              }
              f = Error(s(426));
            }
          } else if (Se && a.mode & 1) {
            var Le = Ca(o);
            if (Le !== null) {
              ((Le.flags & 65536) === 0 && (Le.flags |= 256), Na(Le, o, a, i, t), io(Kn(f, a)));
              break e;
            }
          }
          ((i = f = Kn(f, a)),
            Me !== 4 && (Me = 2),
            Ar === null ? (Ar = [i]) : Ar.push(i),
            (i = o));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var y = ka(i, f, t);
                Yu(i, y);
                break e;
              case 1:
                a = f;
                var m = i.type,
                  g = i.stateNode;
                if (
                  (i.flags & 128) === 0 &&
                  (typeof m.getDerivedStateFromError == 'function' ||
                    (g !== null &&
                      typeof g.componentDidCatch == 'function' &&
                      (on === null || !on.has(g))))
                ) {
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var M = xa(i, a, t);
                  Yu(i, M);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        rc(n);
      } catch (Z) {
        ((t = Z), Ie === n && n !== null && (Ie = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function tc() {
    var e = Al.current;
    return ((Al.current = Il), e === null ? Il : e);
  }
  function Yo() {
    ((Me === 0 || Me === 3 || Me === 2) && (Me = 4),
      Fe === null || ((kn & 268435455) === 0 && (Fl & 268435455) === 0) || an(Fe, He));
  }
  function Ql(e, t) {
    var n = ce;
    ce |= 2;
    var r = tc();
    (Fe !== e || He !== t) && (($t = null), En(e, t));
    do
      try {
        Nf();
        break;
      } catch (l) {
        ec(e, l);
      }
    while (!0);
    if ((so(), (ce = n), (Al.current = r), Ie !== null)) throw Error(s(261));
    return ((Fe = null), (He = 0), Me);
  }
  function Nf() {
    for (; Ie !== null; ) nc(Ie);
  }
  function jf() {
    for (; Ie !== null && !Xc(); ) nc(Ie);
  }
  function nc(e) {
    var t = oc(e.alternate, e, pt);
    ((e.memoizedProps = e.pendingProps), t === null ? rc(e) : (Ie = t), (Uo.current = null));
  }
  function rc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = wf(n, t, pt)), n !== null)) {
          Ie = n;
          return;
        }
      } else {
        if (((n = Sf(n, t)), n !== null)) {
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
  function Cn(e, t, n) {
    var r = he,
      l = wt.transition;
    try {
      ((wt.transition = null), (he = 1), Tf(e, t, n, r));
    } finally {
      ((wt.transition = l), (he = r));
    }
    return null;
  }
  function Tf(e, t, n, r) {
    do Jn();
    while (sn !== null);
    if ((ce & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (sd(e, i),
      e === Fe && ((Ie = Fe = null), (He = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Ul ||
        ((Ul = !0),
        sc(Kr, function () {
          return (Jn(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ((i = wt.transition), (wt.transition = null));
      var o = he;
      he = 1;
      var a = ce;
      ((ce |= 4),
        (Uo.current = null),
        kf(e, n),
        Ga(n, e),
        Gd(Ki),
        (tl = !!Gi),
        (Ki = Gi = null),
        (e.current = n),
        xf(n),
        Jc(),
        (ce = a),
        (he = o),
        (wt.transition = i));
    } else e.current = n;
    if (
      (Ul && ((Ul = !1), (sn = e), ($l = l)),
      (i = e.pendingLanes),
      i === 0 && (on = null),
      td(n.stateNode),
      it(e, Te()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (Bl) throw ((Bl = !1), (e = Ho), (Ho = null), e);
    return (
      ($l & 1) !== 0 && e.tag !== 0 && Jn(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === Qo ? Fr++ : ((Fr = 0), (Qo = e))) : (Fr = 0),
      tn(),
      null
    );
  }
  function Jn() {
    if (sn !== null) {
      var e = qs($l),
        t = wt.transition,
        n = he;
      try {
        if (((wt.transition = null), (he = 16 > e ? 16 : e), sn === null)) var r = !1;
        else {
          if (((e = sn), (sn = null), ($l = 0), (ce & 6) !== 0)) throw Error(s(331));
          var l = ce;
          for (ce |= 4, q = e.current; q !== null; ) {
            var i = q,
              o = i.child;
            if ((q.flags & 16) !== 0) {
              var a = i.deletions;
              if (a !== null) {
                for (var f = 0; f < a.length; f++) {
                  var S = a[f];
                  for (q = S; q !== null; ) {
                    var O = q;
                    switch (O.tag) {
                      case 0:
                      case 11:
                      case 15:
                        zr(8, O, i);
                    }
                    var P = O.child;
                    if (P !== null) ((P.return = O), (q = P));
                    else
                      for (; q !== null; ) {
                        O = q;
                        var L = O.sibling,
                          U = O.return;
                        if ((Wa(O), O === S)) {
                          q = null;
                          break;
                        }
                        if (L !== null) {
                          ((L.return = U), (q = L));
                          break;
                        }
                        q = U;
                      }
                  }
                }
                var K = i.alternate;
                if (K !== null) {
                  var Y = K.child;
                  if (Y !== null) {
                    K.child = null;
                    do {
                      var Le = Y.sibling;
                      ((Y.sibling = null), (Y = Le));
                    } while (Y !== null);
                  }
                }
                q = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null) ((o.return = i), (q = o));
            else
              e: for (; q !== null; ) {
                if (((i = q), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zr(9, i, i.return);
                  }
                var y = i.sibling;
                if (y !== null) {
                  ((y.return = i.return), (q = y));
                  break e;
                }
                q = i.return;
              }
          }
          var m = e.current;
          for (q = m; q !== null; ) {
            o = q;
            var g = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && g !== null) ((g.return = o), (q = g));
            else
              e: for (o = m; q !== null; ) {
                if (((a = q), (a.flags & 2048) !== 0))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Dl(9, a);
                    }
                  } catch (Z) {
                    je(a, a.return, Z);
                  }
                if (a === o) {
                  q = null;
                  break e;
                }
                var M = a.sibling;
                if (M !== null) {
                  ((M.return = a.return), (q = M));
                  break e;
                }
                q = a.return;
              }
          }
          if (((ce = l), tn(), Lt && typeof Lt.onPostCommitFiberRoot == 'function'))
            try {
              Lt.onPostCommitFiberRoot(Yr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((he = n), (wt.transition = t));
      }
    }
    return !1;
  }
  function lc(e, t, n) {
    ((t = Kn(n, t)),
      (t = ka(e, t, 1)),
      (e = rn(e, t, 1)),
      (t = be()),
      e !== null && (ur(e, 1, t), it(e, t)));
  }
  function je(e, t, n) {
    if (e.tag === 3) lc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          lc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (on === null || !on.has(r)))
          ) {
            ((e = Kn(n, e)),
              (e = xa(t, e, 1)),
              (t = rn(t, e, 1)),
              (e = be()),
              t !== null && (ur(t, 1, e), it(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Lf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = be()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Fe === e &&
        (He & n) === n &&
        (Me === 4 || (Me === 3 && (He & 130023424) === He && 500 > Te() - Wo)
          ? En(e, 0)
          : ($o |= n)),
      it(e, t));
  }
  function ic(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Xr), (Xr <<= 1), (Xr & 130023424) === 0 && (Xr = 4194304)));
    var n = be();
    ((e = Ft(e, t)), e !== null && (ur(e, t, n), it(e, n)));
  }
  function Of(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), ic(e, n));
  }
  function If(e, t) {
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
    (r !== null && r.delete(t), ic(e, n));
  }
  var oc;
  oc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || tt.current) rt = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((rt = !1), gf(e, t, n));
        rt = (e.flags & 131072) !== 0;
      }
    else ((rt = !1), Se && (t.flags & 1048576) !== 0 && Bu(t, wl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Ml(e, t), (e = t.pendingProps));
        var l = Un(t, Ve.current);
        (Vn(t, n), (l = wo(null, t, r, e, l, n)));
        var i = So();
        return (
          (t.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              nt(r) ? ((i = !0), vl(t)) : (i = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              fo(t),
              (l.updater = Pl),
              (t.stateNode = l),
              (l._reactInternals = t),
              No(t, r, e, n),
              (t = Oo(null, t, r, !0, i, n)))
            : ((t.tag = 0), Se && i && to(t), Je(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Ml(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Rf(r)),
            (e = Ct(r, e)),
            l)
          ) {
            case 0:
              t = Lo(null, t, r, e, n);
              break e;
            case 1:
              t = Pa(null, t, r, e, n);
              break e;
            case 11:
              t = ja(null, t, r, e, n);
              break e;
            case 14:
              t = Ta(null, t, r, Ct(r.type, e), n);
              break e;
          }
          throw Error(s(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Ct(r, l)),
          Lo(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Ct(r, l)),
          Pa(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Ra(t), e === null)) throw Error(s(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            Ku(e, t),
            Cl(t, r, null, n));
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
              ((l = Kn(Error(s(423)), t)), (t = Ma(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Kn(Error(s(424)), t)), (t = Ma(e, t, r, n, l)));
              break e;
            } else
              for (
                ft = Jt(t.stateNode.containerInfo.firstChild),
                  dt = t,
                  Se = !0,
                  Et = null,
                  n = Vu(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Hn(), r === l)) {
              t = Ut(e, t, n);
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
          e === null && lo(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          Yi(r, l) ? (o = null) : i !== null && Yi(r, i) && (t.flags |= 32),
          Ia(e, t),
          Je(e, t, o, n),
          t.child
        );
      case 6:
        return (e === null && lo(t), null);
      case 13:
        return za(e, t, n);
      case 4:
        return (
          po(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Qn(t, null, r, n)) : Je(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Ct(r, l)),
          ja(e, t, r, l, n)
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
            ye(kl, r._currentValue),
            (r._currentValue = o),
            i !== null)
          )
            if (xt(i.value, o)) {
              if (i.children === l.children && !tt.current) {
                t = Ut(e, t, n);
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
                        var S = i.updateQueue;
                        if (S !== null) {
                          S = S.shared;
                          var O = S.pending;
                          (O === null ? (f.next = f) : ((f.next = O.next), (O.next = f)),
                            (S.pending = f));
                        }
                      }
                      ((i.lanes |= n),
                        (f = i.alternate),
                        f !== null && (f.lanes |= n),
                        ao(i.return, n, t),
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
                    ao(o, n, t),
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
          Vn(t, n),
          (l = yt(l)),
          (r = r(l)),
          (t.flags |= 1),
          Je(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = Ct(r, t.pendingProps)), (l = Ct(r.type, l)), Ta(e, t, r, l, n));
      case 15:
        return La(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Ct(r, l)),
          Ml(e, t),
          (t.tag = 1),
          nt(r) ? ((e = !0), vl(t)) : (e = !1),
          Vn(t, n),
          Sa(t, r, l),
          No(t, r, l, n),
          Oo(null, t, r, !0, e, n)
        );
      case 19:
        return Aa(e, t, n);
      case 22:
        return Oa(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function sc(e, t) {
    return Us(e, t);
  }
  function Pf(e, t, n, r) {
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
    return new Pf(e, t, n, r);
  }
  function Zo(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Rf(e) {
    if (typeof e == 'function') return Zo(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Xe)) return 11;
      if (e === Ce) return 14;
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
        case Q:
          return Nn(n.children, l, i, t);
        case $:
          ((o = 8), (l |= 8));
          break;
        case Pe:
          return ((e = St(12, n, t, l | 2)), (e.elementType = Pe), (e.lanes = i), e);
        case De:
          return ((e = St(13, n, t, l)), (e.elementType = De), (e.lanes = i), e);
        case qe:
          return ((e = St(19, n, t, l)), (e.elementType = qe), (e.lanes = i), e);
        case pe:
          return Vl(n, l, i, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Ze:
                o = 10;
                break e;
              case et:
                o = 9;
                break e;
              case Xe:
                o = 11;
                break e;
              case Ce:
                o = 14;
                break e;
              case Ne:
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
  function Vl(e, t, n, r) {
    return (
      (e = St(22, e, r, t)),
      (e.elementType = pe),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Xo(e, t, n) {
    return ((e = St(6, e, null, t)), (e.lanes = n), e);
  }
  function Jo(e, t, n) {
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
  function Mf(e, t, n, r, l) {
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
  function bo(e, t, n, r, l, i, o, a, f) {
    return (
      (e = new Mf(e, t, n, a, f)),
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
      fo(i),
      e
    );
  }
  function zf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: R,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function uc(e) {
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
            if (nt(t.type)) {
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
      if (nt(n)) return Du(e, n, t);
    }
    return t;
  }
  function ac(e, t, n, r, l, i, o, a, f) {
    return (
      (e = bo(n, r, !0, e, l, i, o, a, f)),
      (e.context = uc(null)),
      (n = e.current),
      (r = be()),
      (l = un(n)),
      (i = Bt(r, l)),
      (i.callback = t ?? null),
      rn(n, i, l),
      (e.current.lanes = l),
      ur(e, l, r),
      it(e, r),
      e
    );
  }
  function Gl(e, t, n, r) {
    var l = t.current,
      i = be(),
      o = un(l);
    return (
      (n = uc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Bt(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = rn(l, t, o)),
      e !== null && (Tt(e, l, o, i), El(e, l, o)),
      o
    );
  }
  function Kl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function cc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function es(e, t) {
    (cc(e, t), (e = e.alternate) && cc(e, t));
  }
  function Df() {
    return null;
  }
  var dc =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ts(e) {
    this._internalRoot = e;
  }
  ((Yl.prototype.render = ts.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Gl(e, t, null, null);
    }),
    (Yl.prototype.unmount = ts.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (xn(function () {
            Gl(null, e, null, null);
          }),
            (t[Mt] = null));
        }
      }));
  function Yl(e) {
    this._internalRoot = e;
  }
  Yl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ks();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++);
      (Yt.splice(n, 0, e), n === 0 && Xs(e));
    }
  };
  function ns(e) {
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
  function fc() {}
  function Af(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var i = r;
        r = function () {
          var S = Kl(o);
          i.call(S);
        };
      }
      var o = ac(t, r, e, 0, null, !1, !1, '', fc);
      return (
        (e._reactRootContainer = o),
        (e[Mt] = o.current),
        kr(e.nodeType === 8 ? e.parentNode : e),
        xn(),
        o
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var a = r;
      r = function () {
        var S = Kl(f);
        a.call(S);
      };
    }
    var f = bo(e, 0, !1, null, null, !1, !1, '', fc);
    return (
      (e._reactRootContainer = f),
      (e[Mt] = f.current),
      kr(e.nodeType === 8 ? e.parentNode : e),
      xn(function () {
        Gl(t, f, n, r);
      }),
      f
    );
  }
  function Xl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == 'function') {
        var a = l;
        l = function () {
          var f = Kl(o);
          a.call(f);
        };
      }
      Gl(t, o, e, l);
    } else o = Af(n, t, e, l, r);
    return Kl(o);
  }
  ((Vs = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = sr(t.pendingLanes);
          n !== 0 && (Ci(t, n | 1), it(t, Te()), (ce & 6) === 0 && ((Xn = Te() + 500), tn()));
        }
        break;
      case 13:
        (xn(function () {
          var r = Ft(e, 1);
          if (r !== null) {
            var l = be();
            Tt(r, e, 1, l);
          }
        }),
          es(e, 1));
    }
  }),
    (Ni = function (e) {
      if (e.tag === 13) {
        var t = Ft(e, 134217728);
        if (t !== null) {
          var n = be();
          Tt(t, e, 134217728, n);
        }
        es(e, 134217728);
      }
    }),
    (Gs = function (e) {
      if (e.tag === 13) {
        var t = un(e),
          n = Ft(e, t);
        if (n !== null) {
          var r = be();
          Tt(n, e, t, r);
        }
        es(e, t);
      }
    }),
    (Ks = function () {
      return he;
    }),
    (Ys = function (e, t) {
      var n = he;
      try {
        return ((he = e), t());
      } finally {
        he = n;
      }
    }),
    (gi = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((ci(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = ml(r);
                if (!l) throw Error(s(90));
                (mt(r), ci(r, l));
              }
            }
          }
          break;
        case 'textarea':
          Es(e, n);
          break;
        case 'select':
          ((t = n.value), t != null && Tn(e, !!n.multiple, t, !1));
      }
    }),
    (Rs = Go),
    (Ms = xn));
  var Ff = { usingClientEntryPoint: !1, Events: [Cr, Fn, ml, Is, Ps, Go] },
    Br = {
      findFiberByHostInstance: hn,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    Bf = {
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
      currentDispatcherRef: X.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Fs(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Br.findFiberByHostInstance || Df,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Jl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jl.isDisabled && Jl.supportsFiber)
      try {
        ((Yr = Jl.inject(Bf)), (Lt = Jl));
      } catch {}
  }
  return (
    (ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ff),
    (ot.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ns(t)) throw Error(s(200));
      return zf(e, t, null, n);
    }),
    (ot.createRoot = function (e, t) {
      if (!ns(e)) throw Error(s(299));
      var n = !1,
        r = '',
        l = dc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = bo(e, 1, !1, null, null, n, !1, r, l)),
        (e[Mt] = t.current),
        kr(e.nodeType === 8 ? e.parentNode : e),
        new ts(t)
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
      return ((e = Fs(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (ot.flushSync = function (e) {
      return xn(e);
    }),
    (ot.hydrate = function (e, t, n) {
      if (!Zl(t)) throw Error(s(200));
      return Xl(null, e, t, !0, n);
    }),
    (ot.hydrateRoot = function (e, t, n) {
      if (!ns(e)) throw Error(s(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = '',
        o = dc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = ac(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[Mt] = t.current),
        kr(e),
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
      if (!Zl(t)) throw Error(s(200));
      return Xl(null, e, t, !1, n);
    }),
    (ot.unmountComponentAtNode = function (e) {
      if (!Zl(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (xn(function () {
            Xl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Mt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (ot.unstable_batchedUpdates = Go),
    (ot.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Zl(n)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Xl(e, t, n, !1, r);
    }),
    (ot.version = '18.3.1-next-f1338f8080-20240426'),
    ot
  );
}
var Sc;
function Gf() {
  if (Sc) return is.exports;
  Sc = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (u) {
        console.error(u);
      }
  }
  return (c(), (is.exports = Vf()), is.exports);
}
var _c;
function Kf() {
  if (_c) return bl;
  _c = 1;
  var c = Gf();
  return ((bl.createRoot = c.createRoot), (bl.hydrateRoot = c.hydrateRoot), bl);
}
var Yf = Kf();
const Zf = JSON.parse(
    `[{"id":"animal","worldviewDimension":{"appliesWhen":"helpsAnimals","applyAs":"multiplier","options":{"equal":1,"10x":0.1,"100x":0.01}},"categoryLabel":"Moral Weights","icon":"paw","previewText":"Animal vs. Human welfare","heading":"How do you value animal welfare relative to human welfare?","info":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Excepteur sint occaecat cupidatat non proident sunt in culpa.","instructionsOptions":"Choose the view that best represents your position, or use \\"Custom Mix\\" to split your credence.","instructionsSliders":"Distribute your credence (confidence) across these views. Sliders auto-balance to 100%.","editPanelTitle":"Animal Values","options":[{"key":"equal","label":"Animals and humans matter equally","description":"Equal weight to equivalent experiences","info":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","panelLabel":"Equal weight","panelShort":"Eq"},{"key":"10x","label":"Animals matter 10× less than humans","description":"Moderate speciesist view","info":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.","panelLabel":"10× less","panelShort":"10×"},{"key":"100x","label":"Animals matter 100× less than humans","description":"Strong speciesist view","info":"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.","panelLabel":"100× less","panelShort":"100×"}]},{"id":"future","worldviewDimension":{"appliesWhen":"helpsFutureHumans","applyAs":"multiplier","options":{"equal":1,"10x":0.1,"100x":0.01}},"categoryLabel":"Time Preference","icon":"hourglass","previewText":"Current vs. Future generations","heading":"How do you value future human welfare relative to current human welfare?","info":"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet. Ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores. Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit.","instructionsOptions":"Choose the view that best represents your position, or use \\"Custom Mix\\" to split your credence.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Future Values","options":[{"key":"equal","label":"Future and current humans matter equally","description":"No time discounting","info":"Et harum quidem rerum facilis est et expedita distinctio, nam libero tempore soluta nobis eligendi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim donec pede justo fringilla vel aliquet.","panelLabel":"Equal weight","panelShort":"Eq"},{"key":"10x","label":"Future humans matter 10× less","description":"Moderate time preference","info":"Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim aliquam lorem ante dapibus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae justo nullam dictum felis eu pede. Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet. Adipiscing ante aenean commodo ligula eget dolor massa sociis natoque penatibus.","panelLabel":"10× less","panelShort":"10×"},{"key":"100x","label":"Future humans matter 100× less","description":"Strong present focus","info":"Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus donec quam felis. Ultricies nec pellentesque eu pretium quis sem nulla consequat massa quis enim. Donec pede justo fringilla vel aliquet nec vulputate eget arcu in enim justo rhoncus ut. Imperdiet a venenatis vitae justo nullam dictum felis eu pede mollis pretium.","panelLabel":"100× less","panelShort":"100×"}]},{"id":"intermission1","type":"_intermission","title":"Halfway There","body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Based on your answers so far, we're calculating how your worldview might influence your giving priorities. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"id":"scale","worldviewDimension":{"appliesTo":"scaleFactor","applyAs":"exponent","options":{"equal":0,"10x":0.5,"100x":1}},"categoryLabel":"Scale Sensitivity","icon":"bar-chart","previewText":"Helping one vs. helping millions","heading":"How much does the scale of impact matter?","info":"Maecenas nec odio et ante tincidunt tempus donec vitae sapien ut libero venenatis faucibus. Nullam quis ante etiam sit amet orci eget eros faucibus tincidunt duis leo. Sed fringilla mauris sit amet nibh donec sodales sagittis magna sed consequat leo. Aenean massa cum sociis natoque penatibus et magnis dis parturient montes nascetur.","instructionsOptions":"Choose the view that best represents your position, or use \\"Custom Mix\\" to split your credence.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Scale Sensitivity","options":[{"key":"equal","label":"Helping one person matters as much as helping millions","description":"Numbers don't multiply moral value","info":"Fusce vulputate eleifend sapien vestibulum purus quam scelerisque ut mollis sed nonummy id metus. Nullam accumsan lorem in dui cras ultricies mi eu turpis hendrerit fringilla vestibulum ante ipsum. Primis in faucibus orci luctus et ultrices posuere cubilia curae in ac dui quis mi. Consectetuer lacinia vitae elementum semper rutrum tellus pellentesque eu tincidunt.","panelLabel":"Irrelevant","panelShort":"Eq"},{"key":"10x","label":"Helping 10× more beings is significantly better","description":"Scale matters, but not linearly","info":"Phasellus viverra nulla ut metus varius laoreet quisque rutrum aenean imperdiet etiam ultricies nisi vel. Augue curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus tellus. Eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum. Nam quam nunc blandit vel luctus pulvinar hendrerit id lorem maecenas nec.","panelLabel":"Matters","panelShort":"10×"},{"key":"100x","label":"Helping 10× more beings is 10× better","description":"Full utilitarian aggregation","info":"Proin sapien ipsum porta a auctor quis euismod ac felis donec posuere vulputate arcu phasellus. Accumsan cursus velit morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam. Lacus morbi quis tortor id nulla ut metus molestie placerat vivamus dapibus fermentum. Nullam vel sem praesent libero sed cursus ante dapibus diam sed nisi.","panelLabel":"Dominates","panelShort":"100×"}]},{"id":"certainty","worldviewDimension":{"appliesWhen":"isSpeculative","applyAs":"multiplier","options":{"equal":1,"10x":0.1,"100x":0.01}},"categoryLabel":"Evidence Preference","icon":"microscope","previewText":"Proven vs. speculative interventions","heading":"How much do you value proven interventions over speculative ones?","info":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae sed aliquam. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus. Turpis in eu mi bibendum neque egestas congue quisque egestas diam.","instructionsOptions":"Choose the view that best represents your position, or use \\"Custom Mix\\" to split your credence.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Evidence Preference","options":[{"key":"equal","label":"Speculative and proven interventions matter equally","description":"Expected value is all that matters","info":"Mauris blandit aliquet elit eget tincidunt nibh pulvinar a pellentesque sit amet porttitor eget dolor. Morbi tristique senectus et netus et malesuada fames ac turpis egestas proin eget tortor risus. Praesent sapien massa convallis a pellentesque nec egestas non nisi cras ultricies ligula sed. Magna dictum porta lorem ipsum dolor sit amet consectetur adipiscing elit.","panelLabel":"Equal weight","panelShort":"Eq"},{"key":"10x","label":"Proven interventions are worth 10× more","description":"Moderate certainty preference","info":"Donec sollicitudin molestie malesuada vivamus magna justo lacinia eget consectetur sed convallis at tellus. Curabitur arcu erat accumsan id imperdiet et porttitor at sem nulla at venenatis diam. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit non mi porta gravida.","panelLabel":"10× less","panelShort":"10×"},{"key":"100x","label":"Proven interventions are worth 100× more","description":"Strong evidence focus","info":"Praesent commodo cursus magna vel scelerisque nisl consectetur et morbi leo risus porta ac consectetur. Vestibulum id ligula porta felis euismod semper fusce dapibus tellus ac cursus commodo. Maecenas sed diam eget risus varius blandit sit amet non magna aenean lacinia bibendum nulla. Sed consectetur cras mattis consectetur purus sit amet fermentum donec ullamcorper nulla non.","panelLabel":"100× less","panelShort":"100×"}]}]`
  ),
  Cc = { questions: Zf },
  Xf = 'sqrt',
  Jf = {
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
  bf = { equal: 33, '10x': 33, '100x': 34 },
  li = { diminishingReturns: Xf, causes: Jf, defaultCredences: bf },
  ep = { resetButton: !1, sliderLock: !0, shareResults: !1 },
  tp = {
    showMaxEV: !0,
    showParliament: !0,
    showMergedFavorites: !0,
    showMaximin: !0,
    sideBySideComparison: !1,
  },
  Wr = { ui: ep, calculations: tp };
var us = { exports: {} },
  kc;
function np() {
  return (
    kc ||
      ((kc = 1),
      (function (c) {
        var u = (function () {
          var s = String.fromCharCode,
            _ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            C = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
            E = {};
          function T(p, v) {
            if (!E[p]) {
              E[p] = {};
              for (var w = 0; w < p.length; w++) E[p][p.charAt(w)] = w;
            }
            return E[p][v];
          }
          var j = {
            compressToBase64: function (p) {
              if (p == null) return '';
              var v = j._compress(p, 6, function (w) {
                return _.charAt(w);
              });
              switch (v.length % 4) {
                default:
                case 0:
                  return v;
                case 1:
                  return v + '===';
                case 2:
                  return v + '==';
                case 3:
                  return v + '=';
              }
            },
            decompressFromBase64: function (p) {
              return p == null
                ? ''
                : p == ''
                  ? null
                  : j._decompress(p.length, 32, function (v) {
                      return T(_, p.charAt(v));
                    });
            },
            compressToUTF16: function (p) {
              return p == null
                ? ''
                : j._compress(p, 15, function (v) {
                    return s(v + 32);
                  }) + ' ';
            },
            decompressFromUTF16: function (p) {
              return p == null
                ? ''
                : p == ''
                  ? null
                  : j._decompress(p.length, 16384, function (v) {
                      return p.charCodeAt(v) - 32;
                    });
            },
            compressToUint8Array: function (p) {
              for (
                var v = j.compress(p), w = new Uint8Array(v.length * 2), k = 0, x = v.length;
                k < x;
                k++
              ) {
                var A = v.charCodeAt(k);
                ((w[k * 2] = A >>> 8), (w[k * 2 + 1] = A % 256));
              }
              return w;
            },
            decompressFromUint8Array: function (p) {
              if (p == null) return j.decompress(p);
              for (var v = new Array(p.length / 2), w = 0, k = v.length; w < k; w++)
                v[w] = p[w * 2] * 256 + p[w * 2 + 1];
              var x = [];
              return (
                v.forEach(function (A) {
                  x.push(s(A));
                }),
                j.decompress(x.join(''))
              );
            },
            compressToEncodedURIComponent: function (p) {
              return p == null
                ? ''
                : j._compress(p, 6, function (v) {
                    return C.charAt(v);
                  });
            },
            decompressFromEncodedURIComponent: function (p) {
              return p == null
                ? ''
                : p == ''
                  ? null
                  : ((p = p.replace(/ /g, '+')),
                    j._decompress(p.length, 32, function (v) {
                      return T(C, p.charAt(v));
                    }));
            },
            compress: function (p) {
              return j._compress(p, 16, function (v) {
                return s(v);
              });
            },
            _compress: function (p, v, w) {
              if (p == null) return '';
              var k,
                x,
                A = {},
                G = {},
                H = '',
                D = '',
                V = '',
                te = 2,
                oe = 3,
                X = 2,
                ne = [],
                R = 0,
                Q = 0,
                $;
              for ($ = 0; $ < p.length; $ += 1)
                if (
                  ((H = p.charAt($)),
                  Object.prototype.hasOwnProperty.call(A, H) || ((A[H] = oe++), (G[H] = !0)),
                  (D = V + H),
                  Object.prototype.hasOwnProperty.call(A, D))
                )
                  V = D;
                else {
                  if (Object.prototype.hasOwnProperty.call(G, V)) {
                    if (V.charCodeAt(0) < 256) {
                      for (k = 0; k < X; k++)
                        ((R = R << 1), Q == v - 1 ? ((Q = 0), ne.push(w(R)), (R = 0)) : Q++);
                      for (x = V.charCodeAt(0), k = 0; k < 8; k++)
                        ((R = (R << 1) | (x & 1)),
                          Q == v - 1 ? ((Q = 0), ne.push(w(R)), (R = 0)) : Q++,
                          (x = x >> 1));
                    } else {
                      for (x = 1, k = 0; k < X; k++)
                        ((R = (R << 1) | x),
                          Q == v - 1 ? ((Q = 0), ne.push(w(R)), (R = 0)) : Q++,
                          (x = 0));
                      for (x = V.charCodeAt(0), k = 0; k < 16; k++)
                        ((R = (R << 1) | (x & 1)),
                          Q == v - 1 ? ((Q = 0), ne.push(w(R)), (R = 0)) : Q++,
                          (x = x >> 1));
                    }
                    (te--, te == 0 && ((te = Math.pow(2, X)), X++), delete G[V]);
                  } else
                    for (x = A[V], k = 0; k < X; k++)
                      ((R = (R << 1) | (x & 1)),
                        Q == v - 1 ? ((Q = 0), ne.push(w(R)), (R = 0)) : Q++,
                        (x = x >> 1));
                  (te--, te == 0 && ((te = Math.pow(2, X)), X++), (A[D] = oe++), (V = String(H)));
                }
              if (V !== '') {
                if (Object.prototype.hasOwnProperty.call(G, V)) {
                  if (V.charCodeAt(0) < 256) {
                    for (k = 0; k < X; k++)
                      ((R = R << 1), Q == v - 1 ? ((Q = 0), ne.push(w(R)), (R = 0)) : Q++);
                    for (x = V.charCodeAt(0), k = 0; k < 8; k++)
                      ((R = (R << 1) | (x & 1)),
                        Q == v - 1 ? ((Q = 0), ne.push(w(R)), (R = 0)) : Q++,
                        (x = x >> 1));
                  } else {
                    for (x = 1, k = 0; k < X; k++)
                      ((R = (R << 1) | x),
                        Q == v - 1 ? ((Q = 0), ne.push(w(R)), (R = 0)) : Q++,
                        (x = 0));
                    for (x = V.charCodeAt(0), k = 0; k < 16; k++)
                      ((R = (R << 1) | (x & 1)),
                        Q == v - 1 ? ((Q = 0), ne.push(w(R)), (R = 0)) : Q++,
                        (x = x >> 1));
                  }
                  (te--, te == 0 && ((te = Math.pow(2, X)), X++), delete G[V]);
                } else
                  for (x = A[V], k = 0; k < X; k++)
                    ((R = (R << 1) | (x & 1)),
                      Q == v - 1 ? ((Q = 0), ne.push(w(R)), (R = 0)) : Q++,
                      (x = x >> 1));
                (te--, te == 0 && ((te = Math.pow(2, X)), X++));
              }
              for (x = 2, k = 0; k < X; k++)
                ((R = (R << 1) | (x & 1)),
                  Q == v - 1 ? ((Q = 0), ne.push(w(R)), (R = 0)) : Q++,
                  (x = x >> 1));
              for (;;)
                if (((R = R << 1), Q == v - 1)) {
                  ne.push(w(R));
                  break;
                } else Q++;
              return ne.join('');
            },
            decompress: function (p) {
              return p == null
                ? ''
                : p == ''
                  ? null
                  : j._decompress(p.length, 32768, function (v) {
                      return p.charCodeAt(v);
                    });
            },
            _decompress: function (p, v, w) {
              var k = [],
                x = 4,
                A = 4,
                G = 3,
                H = '',
                D = [],
                V,
                te,
                oe,
                X,
                ne,
                R,
                Q,
                $ = { val: w(0), position: v, index: 1 };
              for (V = 0; V < 3; V += 1) k[V] = V;
              for (oe = 0, ne = Math.pow(2, 2), R = 1; R != ne; )
                ((X = $.val & $.position),
                  ($.position >>= 1),
                  $.position == 0 && (($.position = v), ($.val = w($.index++))),
                  (oe |= (X > 0 ? 1 : 0) * R),
                  (R <<= 1));
              switch (oe) {
                case 0:
                  for (oe = 0, ne = Math.pow(2, 8), R = 1; R != ne; )
                    ((X = $.val & $.position),
                      ($.position >>= 1),
                      $.position == 0 && (($.position = v), ($.val = w($.index++))),
                      (oe |= (X > 0 ? 1 : 0) * R),
                      (R <<= 1));
                  Q = s(oe);
                  break;
                case 1:
                  for (oe = 0, ne = Math.pow(2, 16), R = 1; R != ne; )
                    ((X = $.val & $.position),
                      ($.position >>= 1),
                      $.position == 0 && (($.position = v), ($.val = w($.index++))),
                      (oe |= (X > 0 ? 1 : 0) * R),
                      (R <<= 1));
                  Q = s(oe);
                  break;
                case 2:
                  return '';
              }
              for (k[3] = Q, te = Q, D.push(Q); ; ) {
                if ($.index > p) return '';
                for (oe = 0, ne = Math.pow(2, G), R = 1; R != ne; )
                  ((X = $.val & $.position),
                    ($.position >>= 1),
                    $.position == 0 && (($.position = v), ($.val = w($.index++))),
                    (oe |= (X > 0 ? 1 : 0) * R),
                    (R <<= 1));
                switch ((Q = oe)) {
                  case 0:
                    for (oe = 0, ne = Math.pow(2, 8), R = 1; R != ne; )
                      ((X = $.val & $.position),
                        ($.position >>= 1),
                        $.position == 0 && (($.position = v), ($.val = w($.index++))),
                        (oe |= (X > 0 ? 1 : 0) * R),
                        (R <<= 1));
                    ((k[A++] = s(oe)), (Q = A - 1), x--);
                    break;
                  case 1:
                    for (oe = 0, ne = Math.pow(2, 16), R = 1; R != ne; )
                      ((X = $.val & $.position),
                        ($.position >>= 1),
                        $.position == 0 && (($.position = v), ($.val = w($.index++))),
                        (oe |= (X > 0 ? 1 : 0) * R),
                        (R <<= 1));
                    ((k[A++] = s(oe)), (Q = A - 1), x--);
                    break;
                  case 2:
                    return D.join('');
                }
                if ((x == 0 && ((x = Math.pow(2, G)), G++), k[Q])) H = k[Q];
                else if (Q === A) H = te + te.charAt(0);
                else return null;
                (D.push(H),
                  (k[A++] = te + H.charAt(0)),
                  x--,
                  (te = H),
                  x == 0 && ((x = Math.pow(2, G)), G++));
              }
            },
          };
          return j;
        })();
        c != null
          ? (c.exports = u)
          : typeof angular < 'u' &&
            angular != null &&
            angular.module('LZString', []).factory('LZString', function () {
              return u;
            });
      })(us)),
    us.exports
  );
}
np();
const bn = {
    SESSION_ID: 'quiz_session_id',
    QUIZ_STATE: 'quiz_state',
    SKIP_CONFLICT: 'quiz_skip_conflict',
  },
  Nc = 2;
function rp() {
  let c = sessionStorage.getItem(bn.SESSION_ID);
  return (c || ((c = crypto.randomUUID()), sessionStorage.setItem(bn.SESSION_ID, c)), c);
}
function lp(c) {
  const { currentStep: u, worldviews: s, activeWorldviewId: _ } = c,
    C = {};
  for (const [T, j] of Object.entries(s)) {
    const p = {};
    for (const [v, w] of Object.entries(j.questions))
      p[v] = { credences: w.credences, inputMode: w.inputMode, lockedKey: w.lockedKey };
    C[T] = { questions: p };
  }
  const E = {
    version: Nc,
    timestamp: Date.now(),
    state: { currentStep: u, worldviews: C, activeWorldviewId: _ },
  };
  sessionStorage.setItem(bn.QUIZ_STATE, JSON.stringify(E));
}
function ip(c) {
  const { currentStep: u, questions: s } = c;
  return { currentStep: u, worldviews: { 1: { questions: s } }, activeWorldviewId: '1' };
}
function as() {
  const c = sessionStorage.getItem(bn.QUIZ_STATE);
  if (!c) return null;
  try {
    const u = JSON.parse(c);
    return u.version === 1 ? ip(u.state) : u.version !== Nc ? (ni(), null) : u.state;
  } catch {
    return (ni(), null);
  }
}
function ni() {
  sessionStorage.removeItem(bn.QUIZ_STATE);
}
function op() {
  sessionStorage.setItem(bn.SKIP_CONFLICT, 'true');
}
function cs() {
  window.location.hash &&
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
const Wt = 'rgba(255, 255, 255, 0.8)',
  xc = { default: [Wt, Wt, Wt], selection: [Wt, Wt, Wt], credence: [Wt, Wt, Wt] },
  sp = 'rgba(255, 255, 255, 0.7)',
  jc = { OPTIONS: 'options' },
  ut = {
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
 */ const up = (c) => c.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  Tc = (...c) =>
    c
      .filter((u, s, _) => !!u && u.trim() !== '' && _.indexOf(u) === s)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ap = {
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
 */ const cp = F.forwardRef(
  (
    {
      color: c = 'currentColor',
      size: u = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: _,
      className: C = '',
      children: E,
      iconNode: T,
      ...j
    },
    p
  ) =>
    F.createElement(
      'svg',
      {
        ref: p,
        ...ap,
        width: u,
        height: u,
        stroke: c,
        strokeWidth: _ ? (Number(s) * 24) / Number(u) : s,
        className: Tc('lucide', C),
        ...j,
      },
      [...T.map(([v, w]) => F.createElement(v, w)), ...(Array.isArray(E) ? E : [E])]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $e = (c, u) => {
  const s = F.forwardRef(({ className: _, ...C }, E) =>
    F.createElement(cp, { ref: E, iconNode: u, className: Tc(`lucide-${up(c)}`, _), ...C })
  );
  return ((s.displayName = `${c}`), s);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dp = $e('Building2', [
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
 */ const fp = $e('ChartColumn', [
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
 */ const pp = $e('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mp = $e('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hp = $e('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lc = $e('CircleHelp', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vp = $e('ExternalLink', [
  ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
  ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
  ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yp = $e('Handshake', [
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
 */ const gp = $e('Hourglass', [
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
 */ const wp = $e('Info', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M12 16v-4', key: '1dtifu' }],
  ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sp = $e('Layers', [
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
 */ const Oc = $e('Lock', [
  ['rect', { width: '18', height: '11', x: '3', y: '11', rx: '2', ry: '2', key: '1w4ew1' }],
  ['path', { d: 'M7 11V7a5 5 0 0 1 10 0v4', key: 'fwvmzm' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _p = $e('Microscope', [
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
 */ const kp = $e('PawPrint', [
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
 */ const ps = $e('RotateCcw', [
  ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
  ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xp = $e('Scale', [
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
 */ const Ep = $e('SlidersVertical', [
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
 */ const Cp = $e('Target', [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['circle', { cx: '12', cy: '12', r: '6', key: '1vlfrh' }],
    ['circle', { cx: '12', cy: '12', r: '2', key: '1c9p78' }],
  ]),
  Np = '_overlay_1wun3_1',
  jp = '_modal_1wun3_12',
  Tp = '_title_1wun3_21',
  Lp = '_message_1wun3_29',
  Op = '_buttons_1wun3_36',
  Ip = '_button_1wun3_36',
  st = { overlay: Np, modal: jp, title: Tp, message: Lp, buttons: Op, button: Ip };
function Pp({ onKeepMine: c, onLoadShared: u, onOpenNewTab: s }) {
  return d.jsx('div', {
    className: st.overlay,
    children: d.jsxs('div', {
      className: st.modal,
      children: [
        d.jsx('h2', { className: st.title, children: 'You have unsaved progress' }),
        d.jsx('p', {
          className: st.message,
          children:
            'Loading this shared link will replace your current quiz answers. What would you like to do?',
        }),
        d.jsxs('div', {
          className: st.buttons,
          children: [
            d.jsx('button', {
              onClick: c,
              className: `btn btn-secondary ${st.button}`,
              children: 'Keep my progress',
            }),
            d.jsx('button', {
              onClick: u,
              className: `btn btn-primary ${st.button}`,
              children: 'Load shared results',
            }),
            d.jsxs('button', {
              onClick: s,
              className: `btn btn-secondary ${st.button}`,
              children: [d.jsx(vp, { size: 16 }), 'Open in new tab'],
            }),
          ],
        }),
      ],
    }),
  });
}
const { causes: ii } = li,
  ms = { none: 1, sqrt: 0.5, extreme: 0.1 };
function Ic(c) {
  const u = (c == null ? void 0 : c.diminishingReturns) || li.diminishingReturns || 'sqrt';
  return ms[u] ?? 0.5;
}
function Pc(c, u, s = 0.5) {
  if (s >= 1) {
    const T = Math.max(...c);
    if (T <= 0) return c.map(() => u / c.length);
    const j = c.map((p, v) => (p === T ? v : -1)).filter((p) => p >= 0);
    return c.map((p, v) => (j.includes(v) ? u / j.length : 0));
  }
  const _ = 1 / (1 - s),
    C = c.map((T) => (T > 0 ? Math.pow(T, _) : 0)),
    E = C.reduce((T, j) => T + j, 0);
  return E === 0 ? c.map(() => u / c.length) : C.map((T) => (T / E) * u);
}
function Rc(c = !1) {
  return Object.fromEntries(
    Cc.questions
      .filter((u) => u.type !== 'intermission' && u.worldviewDimension)
      .map((u) => [
        u.id,
        c ? { ...u.worldviewDimension, name: u.editPanelTitle } : u.worldviewDimension,
      ])
  );
}
const oi = Rc();
function* si(c) {
  const u = Object.keys(c);
  if (u.length === 0) return;
  const s = Object.keys(c[u[0]]);
  function* _(C, E) {
    if (C === u.length) {
      let j = 1;
      for (const p of u) j *= c[p][E[p]] / 100;
      yield { options: E, probability: j };
      return;
    }
    const T = u[C];
    for (const j of s) yield* _(C + 1, { ...E, [T]: j });
  }
  yield* _(0, {});
}
function Rp(c, u, s) {
  let _ = c.points;
  for (const [C, E] of Object.entries(s)) {
    const T = u[C],
      j = E.options[T];
    if (E.applyAs === 'multiplier') E.appliesWhen && c[E.appliesWhen] && (_ *= j);
    else if (E.applyAs === 'exponent' && E.appliesTo) {
      const p = c[E.appliesTo] || 1;
      _ *= Math.pow(p, j);
    }
  }
  return _;
}
function ui(c, u, s) {
  const _ = {};
  for (const [C, E] of Object.entries(u)) _[C] = Rp(E, c, s);
  return _;
}
function Mp(c) {
  const u = Math.max(...Object.values(c));
  return Object.keys(c).filter((s) => Math.abs(c[s] - u) < 1e-4);
}
function gs(c) {
  return Object.fromEntries(Object.keys(c).map((u) => [u, 0]));
}
function zp(c, u) {
  const s = (u == null ? void 0 : u.causes) || ii,
    _ = (u == null ? void 0 : u.dimensions) || oi,
    C = Ic(u),
    E = Object.keys(s),
    T = gs(s);
  for (const { options: w, probability: k } of si(c)) {
    const x = ui(w, s, _);
    for (const [A, G] of Object.entries(x)) T[A] += k * G;
  }
  const j = E.map((w) => T[w]),
    p = Pc(j, 100, C),
    v = { evs: T };
  return (
    E.forEach((w, k) => {
      v[w] = p[k];
    }),
    v
  );
}
function Dp(c, u) {
  const s = (u == null ? void 0 : u.causes) || ii,
    _ = (u == null ? void 0 : u.dimensions) || oi,
    C = gs(s);
  for (const { options: T, probability: j } of si(c)) {
    const p = ui(T, s, _),
      v = Mp(p),
      w = j / v.length;
    for (const k of v) C[k] += w;
  }
  const E = {};
  for (const T of Object.keys(s)) E[T] = C[T] * 100;
  return E;
}
function Ap(c, u) {
  const s = (u == null ? void 0 : u.causes) || ii,
    _ = (u == null ? void 0 : u.dimensions) || oi,
    C = Ic(u),
    E = Object.keys(s),
    T = gs(s);
  for (const { options: j, probability: p } of si(c)) {
    const v = ui(j, s, _),
      w = p * 100,
      k = E.map((A) => v[A]),
      x = Pc(k, w, C);
    E.forEach((A, G) => {
      T[A] += x[G];
    });
  }
  return T;
}
function Fp(c, u) {
  const s = (u == null ? void 0 : u.causes) || ii,
    _ = (u == null ? void 0 : u.dimensions) || oi,
    C = Object.keys(s),
    E = Bp(C);
  let T = E[0],
    j = -1 / 0;
  for (const p of E) {
    let v = 1 / 0;
    for (const { options: w, probability: k } of si(c)) {
      if (k < 0.001) continue;
      const x = ui(w, s, _);
      let A = 0;
      for (const G of C) A += x[G] * (p[G] / 100);
      v = Math.min(v, A);
    }
    v > j && ((j = v), (T = { ...p }));
  }
  return T;
}
function Bp(c) {
  const u = [],
    s = c.length,
    _ = (p) => {
      const v = {};
      return (
        c.forEach((w, k) => {
          v[w] = p[k];
        }),
        v
      );
    };
  for (let p = 0; p < s; p++) {
    const v = new Array(s).fill(0);
    ((v[p] = 100), u.push(_(v)));
  }
  for (let p = 0; p < s; p++)
    for (let v = p + 1; v < s; v++) {
      const w = new Array(s).fill(0);
      ((w[p] = 50), (w[v] = 50), u.push(_(w)));
    }
  const C = Math.floor(100 / s),
    E = 100 - C * s,
    T = new Array(s).fill(C);
  ((T[0] += E), u.push(_(T)));
  const j = [
    [60, 20, 20],
    [70, 15, 15],
    [80, 10, 10],
  ];
  for (const p of j)
    if (p.length === s)
      for (let v = 0; v < s; v++) {
        const w = new Array(s).fill(0);
        w[v] = p[0];
        let k = 1;
        for (let x = 0; x < s; x++) x !== v && k < p.length && (w[x] = p[k++]);
        u.push(_(w));
      }
  return u;
}
function Mc(c, u, s, _ = null, C = null) {
  const E = C ? s[C] : 0,
    T = 100 - E;
  u = Math.max(0, Math.min(T, u));
  const j = _ || s,
    p = Object.keys(s).filter((x) => x !== c && x !== C),
    v = p.reduce((x, A) => x + j[A], 0),
    w = 100 - u - E,
    k = { [c]: u };
  if ((C && (k[C] = s[C]), v === 0)) {
    const x = Math.floor(w / p.length);
    let A = w - x * p.length;
    p.forEach((G, H) => {
      k[G] = x + (H < A ? 1 : 0);
    });
  } else {
    let x = 0;
    p.forEach((A, G) => {
      if (G === p.length - 1) k[A] = Math.max(0, w - x);
      else {
        const H = j[A] / v,
          D = w * H;
        ((k[A] = Math.max(0, D)), (x += k[A]));
      }
    });
  }
  return k;
}
function zc(c) {
  const u = Object.keys(c),
    s = {};
  let _ = 0;
  return (
    u.slice(0, -1).forEach((C) => {
      ((s[C] = Math.round(c[C])), (_ += s[C]));
    }),
    (s[u[u.length - 1]] = 100 - _),
    s
  );
}
const { questions: Up } = Cc,
  { causes: $p, defaultCredences: ri } = li;
function Wp(c) {
  var u;
  return !((u = c.type) != null && u.startsWith('_'));
}
const Ue = Up.filter(Wp);
function Qt(c) {
  return (c == null ? void 0 : c.type) === ut.INTERMISSION;
}
function ds(c, u) {
  let s = 0;
  for (let _ = 0; _ < u; _++) Qt(c[_]) || s++;
  return s;
}
function Hp(c) {
  {
    const u = c.type || ut.DEFAULT;
    return xc[u] || xc[ut.DEFAULT];
  }
}
const Qp = Ue.filter((c) => !Qt(c)),
  fs = Qp.length,
  Ec = Ue.map((c) => {
    if (Qt(c)) return { ...c, type: ut.INTERMISSION };
    const u = Hp(c);
    return {
      ...c,
      type: c.type || ut.DEFAULT,
      options: c.options.map((s, _) => ({ ...s, color: u[_] || u[0] })),
    };
  });
function Dc() {
  return { credences: { ...ri }, originalCredences: null, inputMode: jc.OPTIONS, lockedKey: null };
}
function Ac() {
  return Object.fromEntries(Ue.filter((c) => !Qt(c)).map((c) => [c.id, Dc()]));
}
const Hr = ['1', '2', '3'];
function hs() {
  return Object.fromEntries(Hr.map((c) => [c, { questions: Ac() }]));
}
function qp(c) {
  return c != null && c.questions
    ? Object.values(c.questions).some((u) =>
        u.credences ? Object.entries(u.credences).some(([s, _]) => _ !== (ri[s] ?? 0)) : !1
      )
    : !1;
}
const Fc = {
    currentStep: 'welcome',
    worldviews: hs(),
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
function vs(c) {
  return c.worldviews[c.activeWorldviewId].questions;
}
function Vp(c, u, s) {
  const _ = vs(c);
  return {
    ...c,
    worldviews: {
      ...c.worldviews,
      [c.activeWorldviewId]: { questions: { ..._, [u]: { ..._[u], ...s } } },
    },
  };
}
function Gp(c, u) {
  switch (u.type) {
    case xe.GO_TO_STEP:
      return { ...c, currentStep: u.payload };
    case xe.UPDATE_QUESTION:
      return Vp(c, u.payload.questionId, u.payload.updates);
    case xe.SET_EXPANDED_PANEL:
      return { ...c, expandedPanel: u.payload };
    case xe.SAVE_ORIGINALS: {
      const s = vs(c);
      return {
        ...c,
        worldviews: {
          ...c.worldviews,
          [c.activeWorldviewId]: {
            questions: Object.fromEntries(
              Object.entries(s).map(([_, C]) => [
                _,
                { ...C, originalCredences: C.originalCredences || { ...C.credences } },
              ])
            ),
          },
        },
      };
    }
    case xe.RESET_TO_ORIGINAL: {
      const s = vs(c);
      return {
        ...c,
        worldviews: {
          ...c.worldviews,
          [c.activeWorldviewId]: {
            questions: Object.fromEntries(
              Object.entries(s).map(([_, C]) => [
                _,
                { ...C, credences: C.originalCredences ? { ...C.originalCredences } : C.credences },
              ])
            ),
          },
        },
      };
    }
    case xe.RESET_QUIZ:
      return { ...Fc, worldviews: hs() };
    case xe.SWITCH_WORLDVIEW:
      return Hr.includes(u.payload) ? { ...c, activeWorldviewId: u.payload } : c;
    case xe.RESTORE_FROM_URL:
    case xe.RESTORE_FROM_SESSION: {
      const s = u.type === xe.RESTORE_FROM_URL,
        {
          worldviews: _,
          activeWorldviewId: C,
          questions: E,
          credences: T,
          currentStep: j,
        } = u.payload,
        p = (k, x) => ({
          credences: k.credences,
          originalCredences: x ? { ...k.credences } : null,
          inputMode: k.inputMode || jc.OPTIONS,
          lockedKey: k.lockedKey || null,
        }),
        v = (k, x) => {
          const A = {};
          for (const [G, H] of Object.entries(k)) {
            const D = {};
            for (const [V, te] of Object.entries(H.questions)) D[V] = p(te, x);
            A[G] = { questions: D };
          }
          for (const G of Hr) A[G] || (A[G] = { questions: Ac() });
          return A;
        };
      if (_ && C)
        return { ...c, currentStep: s ? 'results' : j, worldviews: v(_, s), activeWorldviewId: C };
      const w = {};
      if (E) for (const [k, x] of Object.entries(E)) w[k] = p(x, s);
      else if (T)
        for (const [k, x] of Object.entries(T))
          w[k] = { ...Dc(), credences: x, originalCredences: s ? { ...x } : null };
      return {
        ...c,
        currentStep: s ? 'results' : j,
        worldviews: { ...hs(), 1: { questions: w } },
        activeWorldviewId: '1',
      };
    }
    case xe.SET_DEBUG_CONFIG:
      return { ...c, debugConfig: u.payload };
    default:
      return c;
  }
}
const Bc = F.createContext(null);
function Kp({ children: c }) {
  const [u, s] = F.useReducer(Gp, Fc),
    [_, C] = F.useState(null),
    [E, T] = F.useState(!0),
    [j, p] = F.useState(null),
    [v] = F.useState(() => rp()),
    w = F.useRef(null);
  (F.useEffect(() => {
    {
      const z = as();
      (z && s({ type: xe.RESTORE_FROM_SESSION, payload: z }), T(!1));
      return;
    }
  }, []),
    F.useEffect(() => {}, []));
  const k = F.useCallback(() => {
      const z = as();
      (z && s({ type: xe.RESTORE_FROM_SESSION, payload: z }), cs(), p(null));
    }, []),
    x = F.useCallback(() => {
      (j != null && j.shareData && (s({ type: xe.RESTORE_FROM_URL, payload: j.shareData }), ni()),
        cs(),
        p(null));
    }, [j]),
    A = F.useCallback(() => {
      (op(), j != null && j.shareUrl && window.open(j.shareUrl, '_blank'));
      const z = as();
      (z && s({ type: xe.RESTORE_FROM_SESSION, payload: z }), cs(), p(null));
    }, [j]);
  F.useEffect(() => {
    if (!(E || u.currentStep === 'welcome'))
      return (
        w.current && clearTimeout(w.current),
        (w.current = setTimeout(() => {
          lp({
            currentStep: u.currentStep,
            worldviews: u.worldviews,
            activeWorldviewId: u.activeWorldviewId,
          });
        }, 300)),
        () => {
          w.current && clearTimeout(w.current);
        }
      );
  }, [u.currentStep, u.worldviews, u.activeWorldviewId, E]);
  const G = F.useCallback((z) => {
      s({ type: xe.GO_TO_STEP, payload: z });
    }, []),
    H = F.useCallback((z, ee) => {
      s({ type: xe.UPDATE_QUESTION, payload: { questionId: z, updates: ee } });
    }, []),
    D = F.useCallback((z, ee) => H(z, { credences: ee }), [H]),
    V = F.useCallback((z, ee) => H(z, { inputMode: ee }), [H]),
    te = F.useCallback((z, ee) => H(z, { lockedKey: ee }), [H]),
    oe = F.useCallback((z) => {
      s({ type: xe.SET_EXPANDED_PANEL, payload: z });
    }, []),
    X = F.useCallback(() => {
      s({ type: xe.SAVE_ORIGINALS });
    }, []),
    ne = F.useCallback(() => {
      s({ type: xe.RESET_TO_ORIGINAL });
    }, []),
    R = F.useCallback(() => {
      (s({ type: xe.RESET_QUIZ }), ni());
    }, []),
    Q = F.useCallback((z) => {
      s({ type: xe.SET_DEBUG_CONFIG, payload: z });
    }, []),
    $ = F.useCallback((z) => {
      s({ type: xe.SWITCH_WORLDVIEW, payload: z });
    }, []),
    Pe = F.useCallback((z) => Ue.findIndex((ee) => ee.id === z), []),
    Ze = F.useCallback(
      (z) => {
        const ee = Pe(z);
        return ee === 0 ? 'welcome' : Ue[ee - 1].id;
      },
      [Pe]
    ),
    et = F.useCallback(
      (z) => {
        const ee = Pe(z);
        return ee === Ue.length - 1 ? 'results' : Ue[ee + 1].id;
      },
      [Pe]
    ),
    Xe = F.useCallback(() => {
      G(Ue[0].id);
    }, [G]),
    De = F.useCallback(() => {
      u.currentStep === 'results' ? G(Ue[Ue.length - 1].id) : G(Ze(u.currentStep));
    }, [u.currentStep, G, Ze]),
    qe = F.useCallback(() => {
      const z = et(u.currentStep);
      (z === 'results' && X(), G(z));
    }, [u.currentStep, G, et, X]),
    Ce = F.useMemo(
      () => u.worldviews[u.activeWorldviewId].questions,
      [u.worldviews, u.activeWorldviewId]
    ),
    Ne = F.useCallback(
      (z) => {
        var pn;
        const ee = z === 'original' ? 'originalCredences' : 'credences',
          at = Ue.filter((qt) => !Qt(qt)),
          mt = Ce[(pn = at[0]) == null ? void 0 : pn.id];
        return z === 'original' && !(mt != null && mt.originalCredences)
          ? null
          : Object.fromEntries(
              at.map((qt) => {
                var er;
                return [qt.id, ((er = Ce[qt.id]) == null ? void 0 : er[ee]) || ri];
              })
            );
      },
      [Ce]
    ),
    pe = F.useCallback(
      (z, ee) =>
        z
          ? {
              maxEV: zp(z, ee),
              parliament: Dp(z, ee),
              mergedFavorites: Ap(z, ee),
              maximin: Fp(z, ee),
            }
          : null,
      []
    ),
    I = F.useMemo(() => pe(Ne('current'), u.debugConfig), [Ne, pe, u.debugConfig]),
    B = F.useMemo(() => pe(Ne('original'), u.debugConfig), [Ne, pe, u.debugConfig]),
    W = F.useMemo(
      () =>
        Object.values(Ce).some(
          (z) =>
            z.originalCredences &&
            JSON.stringify(z.credences) !== JSON.stringify(z.originalCredences)
        ),
      [Ce]
    ),
    h = F.useMemo(
      () => Object.fromEntries(Hr.map((z) => [z, qp(u.worldviews[z])])),
      [u.worldviews]
    ),
    N = F.useMemo(() => Pe(u.currentStep), [u.currentStep, Pe]),
    le = F.useMemo(() => (N === -1 ? null : Ec[N]), [N]),
    ie = F.useMemo(() => {
      if (N === -1) return -1;
      const z = Ue[N],
        ee = ds(Ue, N);
      return Qt(z) ? ee : ee + 1;
    }, [N]),
    ue = F.useMemo(() => {
      if (N === -1) return 0;
      const z = Ue[N];
      return ((Qt(z) ? ds(Ue, N) : ie) / fs) * 100;
    }, [N, ie]),
    ae = F.useMemo(() => {
      if (N === -1) return '';
      const z = Ue[N];
      return `Question ${Qt(z) ? ds(Ue, N) : ie} of ${fs}`;
    }, [N, ie]),
    me = F.useMemo(() => {
      const z = {};
      return (
        Ue.filter((ee) => !Qt(ee)).forEach((ee) => {
          const at = Ce[ee.id];
          at &&
            (z[ee.id] = {
              credences: at.credences,
              setCredences: (mt) => D(ee.id, mt),
              originalCredences: at.originalCredences,
              inputMode: at.inputMode,
              setInputMode: (mt) => V(ee.id, mt),
              lockedKey: at.lockedKey,
              setLockedKey: (mt) => te(ee.id, mt),
            });
        }),
        z
      );
    }, [Ce, D, V, te]),
    fe = F.useMemo(
      () => ({
        currentStep: u.currentStep,
        questions: Ce,
        worldviews: u.worldviews,
        activeWorldviewId: u.activeWorldviewId,
        expandedPanel: u.expandedPanel,
        debugConfig: u.debugConfig,
        shareUrlError: _,
        isHydrating: E,
        sessionId: v,
        questionsConfig: Ec,
        causesConfig: $p,
        defaultCredences: ri,
        worldviewIds: Hr,
        goToStep: G,
        setCredences: D,
        setInputMode: V,
        setLockedKey: te,
        setExpandedPanel: oe,
        saveOriginals: X,
        resetToOriginal: ne,
        resetQuiz: R,
        setDebugConfig: Q,
        switchWorldview: $,
        getQuestionIndex: Pe,
        getPrevStep: Ze,
        getNextStep: et,
        startQuiz: Xe,
        goBack: De,
        goForward: qe,
        currentQuestion: le,
        currentQuestionIndex: N,
        totalQuestions: fs,
        progressPercentage: ue,
        questionNumber: ae,
        hasChanged: W,
        hasProgressMap: h,
        calculationResults: I,
        originalCalculationResults: B,
        stateMap: me,
      }),
      [
        u.currentStep,
        Ce,
        u.worldviews,
        u.activeWorldviewId,
        u.expandedPanel,
        u.debugConfig,
        _,
        E,
        v,
        G,
        D,
        V,
        te,
        oe,
        X,
        ne,
        R,
        Q,
        $,
        Pe,
        Ze,
        et,
        Xe,
        De,
        qe,
        le,
        N,
        ue,
        ae,
        W,
        h,
        I,
        B,
        me,
      ]
    );
  return d.jsxs(Bc.Provider, {
    value: fe,
    children: [c, j && d.jsx(Pp, { onKeepMine: k, onLoadShared: x, onOpenNewTab: A })],
  });
}
const ai = ({ subtitle: c }) =>
    d.jsxs('header', {
      className: `header${c ? ' header-with-subtitle' : ''}`,
      children: [
        d.jsxs('div', {
          className: 'header-brand',
          children: [
            d.jsx('img', {
              src: '/quiz-demo/prototypes/visual-polish/NewLogoSVG.svg',
              alt: 'Rethink Priorities',
              height: '24',
            }),
            d.jsx('span', { className: 'header-title', children: 'Donor Compass' }),
          ],
        }),
        c && d.jsx('div', { className: 'header-subtitle', children: c }),
      ],
    }),
  Yp = { paw: kp, hourglass: gp, 'bar-chart': fp, microscope: _p };
function Uc({ name: c, size: u = 16, className: s = '' }) {
  const _ = Yp[c] || Lc;
  return d.jsx(_, { size: u, className: s });
}
function Qr() {
  const c = F.useContext(Bc);
  if (!c) throw new Error('useQuiz must be used within a QuizProvider');
  return c;
}
const Zp = '_container_1tu9j_3',
  Xp = '_heading_1tu9j_8',
  Jp = '_headingEmphasis_1tu9j_17',
  bp = '_intro_1tu9j_22',
  em = '_infoBox_1tu9j_30',
  tm = '_infoBoxLabel_1tu9j_38',
  nm = '_infoBoxGrid_1tu9j_45',
  rm = '_infoBoxItem_1tu9j_52',
  fn = {
    container: Zp,
    heading: Xp,
    headingEmphasis: Jp,
    intro: bp,
    infoBox: em,
    infoBoxLabel: tm,
    infoBoxGrid: nm,
    infoBoxItem: rm,
  },
  lm = {
    timeEstimate: '~3 minutes',
    headingLine1: 'Where Should Your',
    headingLine2: 'Giving Go?',
    intro:
      'Uncertain about your ethical views? This tool helps you allocate resources across different causes based on your moral credences—the probabilities you assign to different ethical perspectives.',
    startButton: 'Start Quiz →',
    previewLabel: "You'll be asked about:",
  },
  im = { back: '← Back', continue: 'Continue →', backToQuiz: '← Back to Quiz' },
  om = { modeToggle: { pickOne: 'Pick One', customMix: 'Custom Mix' } },
  sm = {
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
  um = {
    modifiedBadge: 'modified',
    sliderNote: 'Sliders auto-balance to 100%',
    resetButton: 'Reset',
  },
  am = { lockTooltip: 'Lock slider', unlockTooltip: 'Unlock slider' },
  ve = { welcome: lm, navigation: im, questionScreen: om, results: sm, editPanel: um, sliders: am };
function cm() {
  const { questionsConfig: c, startQuiz: u } = Qr(),
    s = c.filter((_) => _.type !== ut.INTERMISSION);
  return d.jsxs('div', {
    className: 'screen',
    children: [
      d.jsx(ai, { subtitle: ve.welcome.timeEstimate }),
      d.jsx('main', {
        className: 'screen-main',
        children: d.jsxs('div', {
          className: fn.container,
          children: [
            d.jsxs('h1', {
              className: fn.heading,
              children: [
                ve.welcome.headingLine1,
                d.jsx('br', {}),
                d.jsx('span', { className: fn.headingEmphasis, children: ve.welcome.headingLine2 }),
              ],
            }),
            d.jsx('p', { className: fn.intro, children: ve.welcome.intro }),
            d.jsx('button', {
              onClick: u,
              className: 'btn btn-primary',
              children: ve.welcome.startButton,
            }),
            d.jsxs('div', {
              className: fn.infoBox,
              children: [
                d.jsx('div', { className: fn.infoBoxLabel, children: ve.welcome.previewLabel }),
                d.jsx('div', {
                  className: fn.infoBoxGrid,
                  children: s.map((_) =>
                    d.jsxs(
                      'div',
                      {
                        className: fn.infoBoxItem,
                        children: [d.jsx(Uc, { name: _.icon, size: 16 }), ' ', _.previewText],
                      },
                      _.id
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
const ws = ({ percentage: c }) =>
    d.jsx('div', {
      className: 'progress-container',
      children: d.jsx('div', {
        className: 'progress-track',
        children: d.jsx('div', { className: 'progress-fill', style: { width: `${c}%` } }),
      }),
    }),
  dm = '_modeToggle_yn8i0_3',
  fm = '_button_yn8i0_10',
  pm = '_options_yn8i0_23',
  mm = '_active_yn8i0_29',
  hm = '_sliders_yn8i0_35',
  jn = { modeToggle: dm, button: fm, options: pm, active: mm, sliders: hm },
  vm = ({ mode: c, setMode: u }) =>
    d.jsxs('div', {
      className: jn.modeToggle,
      children: [
        d.jsx('button', {
          onClick: () => u('options'),
          className: `${jn.button} ${jn.options} ${c === 'options' ? jn.active : ''}`,
          children: ve.questionScreen.modeToggle.pickOne,
        }),
        d.jsxs('button', {
          onClick: () => u('sliders'),
          className: `${jn.button} ${jn.sliders} ${c === 'sliders' ? jn.active : ''}`,
          children: [d.jsx(Ep, { size: 14 }), ve.questionScreen.modeToggle.customMix],
        }),
      ],
    }),
  ym = '_wrapper_1674a_1',
  gm = '_trigger_1674a_7',
  wm = '_popover_1674a_26',
  Sm = '_popoverVisible_1674a_58',
  ei = { wrapper: ym, trigger: gm, popover: wm, popoverVisible: Sm };
function Ss({ content: c, size: u = 14 }) {
  const [s, _] = F.useState(!1),
    [C, E] = F.useState({ top: 0, left: 0 }),
    T = F.useRef(null),
    j = F.useRef(null),
    p = F.useRef(null),
    v = F.useCallback(() => {
      var te;
      if (!T.current) return;
      const x = T.current.getBoundingClientRect(),
        A = ((te = j.current) == null ? void 0 : te.offsetWidth) || 400,
        G = window.innerWidth,
        H = 16;
      let D = x.left + x.width / 2 - A / 2;
      const V = x.bottom + 8;
      (D < H ? (D = H) : D + A > G - H && (D = G - A - H), E({ top: V, left: D }));
    }, []);
  (F.useEffect(() => {
    if (!s) return;
    const x = (A) => {
      p.current && !p.current.contains(A.target) && _(!1);
    };
    return (
      document.addEventListener('mousedown', x),
      document.addEventListener('touchstart', x),
      () => {
        (document.removeEventListener('mousedown', x),
          document.removeEventListener('touchstart', x));
      }
    );
  }, [s]),
    F.useEffect(() => {
      s && v();
    }, [s, v]));
  const w = F.useCallback(() => {
      v();
    }, [v]),
    k = F.useCallback(
      (x) => {
        (x.preventDefault(), x.stopPropagation(), v(), _((A) => !A));
      },
      [v]
    );
  return c
    ? d.jsxs('span', {
        ref: p,
        className: ei.wrapper,
        children: [
          d.jsx('button', {
            ref: T,
            type: 'button',
            className: ei.trigger,
            onMouseEnter: w,
            onTouchStart: k,
            'aria-label': 'More information',
            children: d.jsx(wp, { size: u }),
          }),
          d.jsx('span', {
            ref: j,
            className: `${ei.popover} ${s ? ei.popoverVisible : ''}`,
            style: { top: C.top, left: C.left },
            children: c,
          }),
        ],
      })
    : null;
}
const _m = '_optionButton_z7tsl_3',
  km = '_selected_z7tsl_20',
  xm = '_content_z7tsl_36',
  Em = '_textContent_z7tsl_42',
  Cm = '_label_z7tsl_46',
  Nm = '_description_z7tsl_58',
  jm = '_checkmark_z7tsl_64',
  Ht = {
    optionButton: _m,
    default: '_default_z7tsl_15',
    selected: km,
    content: xm,
    textContent: Em,
    label: Cm,
    description: Nm,
    checkmark: jm,
  };
function Tm({
  label: c,
  description: u,
  info: s,
  optionKey: _,
  credences: C,
  setCredences: E,
  color: T,
  setInputMode: j,
  setLockedKey: p,
}) {
  const v = C[_] === 100,
    w = () => {
      const k = Object.fromEntries(Object.keys(C).map((x) => [x, x === _ ? 100 : 0]));
      (E(k), j('options'), p && p(null));
    };
  return d.jsx('button', {
    onClick: w,
    className: `${Ht.optionButton} ${v ? Ht.selected : Ht.default}`,
    style: { '--option-color': T },
    children: d.jsxs('div', {
      className: Ht.content,
      children: [
        d.jsxs('div', {
          className: Ht.textContent,
          children: [
            d.jsxs('div', {
              className: `${Ht.label} ${v ? Ht.selected : ''}`,
              children: [c, d.jsx(Ss, { content: s })],
            }),
            d.jsx('div', { className: Ht.description, children: u }),
          ],
        }),
        v && d.jsx('div', { className: Ht.checkmark, children: '✓' }),
      ],
    }),
  });
}
function $c({ credences: c, isLocked: u, lockedKey: s, onChange: _ }) {
  const [C, E] = F.useState(null),
    [T, j] = F.useState(!1),
    p = F.useCallback(() => {
      u || (j(!0), E({ ...c }));
    }, [u, c]),
    v = F.useCallback(
      (k) => {
        if (u || !T) return;
        j(!1);
        const x = parseFloat(k.target.value);
        (_(x, C, !0, s), E(null));
      },
      [u, T, C, s, _]
    ),
    w = F.useCallback(
      (k) => {
        if (u) return;
        const x = parseFloat(k.target.value);
        _(x, C, !1, s);
      },
      [u, C, s, _]
    );
  return {
    isDragging: T,
    dragHandlers: {
      onChange: w,
      onMouseDown: p,
      onMouseUp: v,
      onMouseLeave: v,
      onTouchStart: p,
      onTouchEnd: v,
    },
  };
}
function Wc({ sliderKey: c, lockedKey: u, credences: s }) {
  return F.useMemo(() => {
    var p;
    const _ = u === c,
      C = u && u !== c,
      E = C ? s[u] : 0,
      T = C ? 100 - E : 100,
      j = C ? `calc(${T}% + ${(50 - T) * 0.16}px)` : null;
    return {
      isLocked: _,
      hasLockedSibling: C,
      lockedValue: E,
      maxAllowed: T,
      thumbOffset: j,
      featureEnabled: ((p = Wr.ui) == null ? void 0 : p.sliderLock) === !0,
    };
  }, [c, u, s]);
}
const Lm = '_credenceSlider_yrqg7_4',
  Om = '_header_yrqg7_8',
  Im = '_label_yrqg7_15',
  Pm = '_description_yrqg7_22',
  Rm = '_value_yrqg7_28',
  Mm = '_sliderRow_yrqg7_35',
  zm = '_sliderContainer_yrqg7_41',
  Dm = '_lockLimit_yrqg7_46',
  Am = '_lockButton_yrqg7_55',
  Fm = '_locked_yrqg7_73',
  Bm = '_compactSlider_yrqg7_91',
  Um = '_compactSelection_yrqg7_168',
  $m = '_selected_yrqg7_186',
  Wm = '_selectionLabel_yrqg7_191',
  Hm = '_selectionIndicator_yrqg7_202',
  Ee = {
    credenceSlider: Lm,
    header: Om,
    label: Im,
    description: Pm,
    value: Rm,
    sliderRow: Mm,
    sliderContainer: zm,
    lockLimit: Dm,
    lockButton: Am,
    locked: Fm,
    compactSlider: Bm,
    compactSelection: Um,
    selected: $m,
    selectionLabel: Wm,
    selectionIndicator: Hm,
  };
function Qm({
  label: c,
  description: u,
  info: s,
  value: _,
  onChange: C,
  color: E,
  credences: T,
  sliderKey: j,
  lockedKey: p,
  setLockedKey: v,
}) {
  const {
      isLocked: w,
      hasLockedSibling: k,
      thumbOffset: x,
      featureEnabled: A,
    } = Wc({ sliderKey: j, lockedKey: p, credences: T }),
    { isDragging: G, dragHandlers: H } = $c({
      credences: T,
      isLocked: w,
      lockedKey: p,
      onChange: C,
    }),
    D = () => {
      A && v(p === j ? null : j);
    },
    V = k
      ? `linear-gradient(to right, ${E} 0%, ${E} ${_}%, rgba(255,255,255,0.15) ${_}%, rgba(255,255,255,0.15) ${x}, rgba(255,255,255,0.08) ${x}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${E} 0%, ${E} ${_}%, rgba(255,255,255,0.15) ${_}%, rgba(255,255,255,0.15) 100%)`;
  return d.jsxs('div', {
    className: Ee.credenceSlider,
    children: [
      d.jsxs('div', {
        className: Ee.header,
        children: [
          d.jsxs('div', {
            children: [
              d.jsxs('div', { className: Ee.label, children: [c, d.jsx(Ss, { content: s })] }),
              d.jsx('div', { className: Ee.description, children: u }),
            ],
          }),
          d.jsxs('div', {
            className: Ee.value,
            style: { color: E },
            children: [Math.round(_), '%'],
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
                value: _,
                ...H,
                'data-dragging': G,
                disabled: w,
                style: { background: V, cursor: w ? 'not-allowed' : 'pointer' },
              }),
              k && d.jsx('div', { className: Ee.lockLimit, style: { left: x } }),
            ],
          }),
          A &&
            d.jsx('button', {
              className: `${Ee.lockButton} ${w ? Ee.locked : ''}`,
              onClick: D,
              title: w ? ve.sliders.unlockTooltip : ve.sliders.lockTooltip,
              type: 'button',
              children: d.jsx(Oc, { size: 16 }),
            }),
        ],
      }),
    ],
  });
}
const qm = '_container_9yo3m_3',
  Vm = '_categoryLabel_9yo3m_8',
  Gm = '_heading_9yo3m_16',
  Km = '_instructions_9yo3m_23',
  Ym = '_buttonRow_9yo3m_30',
  $r = { container: qm, categoryLabel: Vm, heading: Gm, instructions: Km, buttonRow: Ym };
function Zm(c, u, s) {
  return c === ut.SELECTION ? 'options' : c === ut.CREDENCE ? 'sliders' : u;
}
function Xm() {
  const {
    currentQuestion: c,
    stateMap: u,
    questionNumber: s,
    progressPercentage: _,
    goBack: C,
    goForward: E,
  } = Qr();
  if (!c) return null;
  const T = u[c.id];
  if (!T) return null;
  const {
      credences: j,
      setCredences: p,
      inputMode: v,
      setInputMode: w,
      lockedKey: k,
      setLockedKey: x,
    } = T,
    A = c.type || ut.DEFAULT,
    G = A === ut.DEFAULT,
    H = Zm(A, v),
    D = H === 'options' ? c.instructionsOptions : c.instructionsSliders;
  return d.jsxs('div', {
    className: 'screen',
    children: [
      d.jsx(ai, { subtitle: s }),
      d.jsx(ws, { percentage: _ }),
      d.jsx('main', {
        className: 'screen-main',
        children: d.jsxs('div', {
          className: $r.container,
          children: [
            d.jsx('div', {
              className: $r.categoryLabel,
              style: { color: sp },
              children: c.categoryLabel,
            }),
            d.jsxs('h2', {
              className: $r.heading,
              children: [c.heading, d.jsx(Ss, { content: c.info })],
            }),
            d.jsx('p', { className: $r.instructions, children: D }),
            G && d.jsx(vm, { mode: v, setMode: w }),
            d.jsx('div', {
              className: 'card',
              children:
                H === 'options'
                  ? c.options.map((V) =>
                      d.jsx(
                        Tm,
                        {
                          label: V.label,
                          description: V.description,
                          info: V.info,
                          optionKey: V.key,
                          credences: j,
                          setCredences: p,
                          color: V.color,
                          setInputMode: w,
                          setLockedKey: x,
                        },
                        V.key
                      )
                    )
                  : c.options.map((V) =>
                      d.jsx(
                        Qm,
                        {
                          label: V.label,
                          description: V.description,
                          info: V.info,
                          value: j[V.key],
                          onChange: (te, oe, X, ne) => {
                            const R = Mc(V.key, te, j, oe, ne);
                            p(X ? zc(R) : R);
                          },
                          color: V.color,
                          credences: j,
                          sliderKey: V.key,
                          lockedKey: k,
                          setLockedKey: x,
                        },
                        V.key
                      )
                    ),
            }),
            d.jsxs('div', {
              className: $r.buttonRow,
              children: [
                d.jsx('button', {
                  onClick: C,
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
const Jm = '_causeBar_as0sb_3',
  bm = '_header_as0sb_7',
  eh = '_name_as0sb_15',
  th = '_percentage_as0sb_19',
  nh = '_changeIndicator_as0sb_23',
  rh = '_up_as0sb_27',
  lh = '_down_as0sb_31',
  ih = '_barTrack_as0sb_35',
  oh = '_barOriginal_as0sb_43',
  sh = '_barFill_as0sb_49',
  uh = '_barLabel_as0sb_58',
  ah = '_compact_as0sb_65',
  _t = {
    causeBar: Jm,
    header: bm,
    name: eh,
    percentage: th,
    changeIndicator: nh,
    up: rh,
    down: lh,
    barTrack: ih,
    barOriginal: oh,
    barFill: sh,
    barLabel: uh,
    compact: ah,
  },
  ch = ({
    name: c,
    percentage: u,
    color: s,
    originalPercentage: _ = null,
    hasChanged: C = !1,
    simpleMode: E = !1,
  }) => {
    const T = !E && C && _ !== null && u !== _,
      j = T && u > _;
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
                u.toFixed(0),
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
              d.jsx('div', { className: _t.barOriginal, style: { width: `${_}%`, background: s } }),
            d.jsx('div', {
              className: _t.barFill,
              style: { width: `${u}%`, background: s },
              children:
                u > 15 && d.jsxs('span', { className: _t.barLabel, children: [u.toFixed(0), '%'] }),
            }),
          ],
        }),
      ],
    });
  },
  dh = { target: Cp, parliament: dp, handshake: yp, scale: xp };
function fh({ name: c, size: u = 18, className: s = '' }) {
  const _ = dh[c] || Lc;
  return d.jsx(_, { size: u, className: s });
}
const ph = '_resultsContainer_1u0l8_3',
  mh = '_inner_1u0l8_11',
  hh = '_resultsHeader_1u0l8_16',
  vh = '_title_1u0l8_21',
  yh = '_modifiedIndicator_1u0l8_27',
  gh = '_worldviewLabel_1u0l8_34',
  wh = '_resultsGrid_1u0l8_38',
  Sh = '_compactCard_1u0l8_118',
  _h = '_cardHeader_1u0l8_122',
  kh = '_cardIcon_1u0l8_126',
  xh = '_cardTitle_1u0l8_132',
  Eh = '_resultCard_1u0l8_136',
  Ch = '_cardSubtitle_1u0l8_168',
  Nh = '_cardFooter_1u0l8_174',
  jh = '_adjustPanel_1u0l8_182',
  Th = '_adjustHeader_1u0l8_190',
  Lh = '_adjustTitle_1u0l8_197',
  Oh = '_resetAllButton_1u0l8_203',
  Ih = '_panelList_1u0l8_220',
  Ph = '_backButtonContainer_1u0l8_226',
  Oe = {
    resultsContainer: ph,
    inner: mh,
    resultsHeader: hh,
    title: vh,
    modifiedIndicator: yh,
    worldviewLabel: gh,
    resultsGrid: wh,
    compactCard: Sh,
    cardHeader: _h,
    cardIcon: kh,
    cardTitle: xh,
    resultCard: Eh,
    cardSubtitle: Ch,
    cardFooter: Nh,
    adjustPanel: jh,
    adjustHeader: Th,
    adjustTitle: Lh,
    resetAllButton: Oh,
    panelList: Ih,
    backButtonContainer: Ph,
  };
function Hc({
  methodKey: c,
  results: u,
  evs: s = null,
  originalResults: _ = null,
  causeEntries: C,
  hasChanged: E = !1,
  simpleMode: T = !1,
}) {
  const j = ve.results.methods[c],
    p = s
      ? `${j.footerLabel} ${C.map(([v, w]) => `${w.name.slice(0, 2)} ${s[v].toFixed(0)}`).join(' · ')}`
      : j.footerText;
  return d.jsxs('div', {
    className: `${Oe.resultCard} ${T ? Oe.compactCard : ''}`,
    children: [
      d.jsxs('div', {
        className: Oe.cardHeader,
        children: [
          d.jsx('div', { className: Oe.cardIcon, children: d.jsx(fh, { name: j.icon, size: 18 }) }),
          d.jsxs('div', {
            children: [
              d.jsx('h3', { className: Oe.cardTitle, children: j.title }),
              !T && d.jsx('p', { className: Oe.cardSubtitle, children: j.subtitle }),
            ],
          }),
        ],
      }),
      C.map(([v, w]) =>
        d.jsx(
          ch,
          {
            name: w.name,
            percentage: u[v],
            originalPercentage: _ == null ? void 0 : _[v],
            color: w.color,
            hasChanged: !T && E,
            simpleMode: T,
          },
          v
        )
      ),
      !T && d.jsx('div', { className: Oe.cardFooter, children: p }),
    ],
  });
}
const Rh = '_container_1m8cr_3',
  Mh = '_title_1m8cr_8',
  zh = '_body_1m8cr_16',
  Dh = '_buttonRow_1m8cr_25',
  ti = { container: Rh, title: Mh, body: zh, buttonRow: Dh };
function Ah() {
  const {
    currentQuestion: c,
    questionNumber: u,
    progressPercentage: s,
    calculationResults: _,
    causesConfig: C,
    goBack: E,
    goForward: T,
  } = Qr();
  if (!c) return null;
  const j = Object.entries(C),
    v = [
      { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
      { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
      { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
      { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
    ].filter((w) => {
      var k;
      return ((k = Wr.calculations) == null ? void 0 : k[w.flag]) === !0;
    });
  return d.jsxs('div', {
    className: 'screen',
    children: [
      d.jsx(ai, { subtitle: u }),
      d.jsx(ws, { percentage: s }),
      d.jsx('main', {
        className: 'screen-main',
        children: d.jsxs('div', {
          className: ti.container,
          children: [
            d.jsx('h2', { className: ti.title, children: c.title }),
            d.jsx('p', { className: ti.body, children: c.body }),
            d.jsx('div', {
              className: Oe.resultsGrid,
              children: v.map((w) =>
                d.jsx(
                  Hc,
                  {
                    methodKey: w.key,
                    results: _[w.key],
                    evs: w.hasEvs ? _[w.key].evs : null,
                    causeEntries: j,
                  },
                  w.key
                )
              ),
            }),
            d.jsxs('div', {
              className: ti.buttonRow,
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
function Fh({
  label: c,
  value: u,
  onChange: s,
  color: _,
  credences: C,
  sliderKey: E,
  lockedKey: T,
  setLockedKey: j,
}) {
  const {
      isLocked: p,
      hasLockedSibling: v,
      thumbOffset: w,
      featureEnabled: k,
    } = Wc({ sliderKey: E, lockedKey: T, credences: C }),
    { isDragging: x, dragHandlers: A } = $c({
      credences: C,
      isLocked: p,
      lockedKey: T,
      onChange: s,
    }),
    G = () => {
      k && j(T === E ? null : E);
    },
    H = v
      ? `linear-gradient(to right, ${_} 0%, ${_} ${u}%, rgba(255,255,255,0.15) ${u}%, rgba(255,255,255,0.15) ${w}, rgba(255,255,255,0.08) ${w}, rgba(255,255,255,0.08) 100%)`
      : `linear-gradient(to right, ${_} 0%, ${_} ${u}%, rgba(255,255,255,0.15) ${u}%, rgba(255,255,255,0.15) 100%)`;
  return d.jsxs('div', {
    className: Ee.compactSlider,
    children: [
      d.jsxs('div', {
        className: Ee.header,
        children: [
          d.jsx('span', { className: Ee.label, children: c }),
          d.jsxs('span', {
            className: Ee.value,
            style: { color: _ },
            children: [Math.round(u), '%'],
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
                value: u,
                ...A,
                'data-dragging': x,
                disabled: p,
                style: { background: H, cursor: p ? 'not-allowed' : 'pointer' },
              }),
              v && d.jsx('div', { className: Ee.lockLimit, style: { left: w } }),
            ],
          }),
          k &&
            d.jsx('button', {
              className: `${Ee.lockButton} ${p ? Ee.locked : ''}`,
              onClick: G,
              title: p ? ve.sliders.unlockTooltip : ve.sliders.lockTooltip,
              type: 'button',
              children: d.jsx(Oc, { size: 14 }),
            }),
        ],
      }),
    ],
  });
}
function Bh({ label: c, color: u, isSelected: s, onSelect: _ }) {
  return d.jsxs('button', {
    type: 'button',
    onClick: _,
    className: `${Ee.compactSelection} ${s ? Ee.selected : ''}`,
    style: { '--selection-color': u },
    children: [
      d.jsx('span', { className: Ee.selectionLabel, children: c }),
      d.jsx('span', {
        className: Ee.selectionIndicator,
        style: { borderColor: s ? u : void 0, backgroundColor: s ? u : void 0 },
        children: s && d.jsx(pp, { size: 12, strokeWidth: 3 }),
      }),
    ],
  });
}
const Uh = '_editPanel_1er15_3',
  $h = '_expanded_1er15_11',
  Wh = '_toggleButton_1er15_16',
  Hh = '_buttonContent_1er15_33',
  Qh = '_icon_1er15_39',
  qh = '_title_1er15_43',
  Vh = '_modifiedBadge_1er15_48',
  Gh = '_preview_1er15_56',
  Kh = '_chevron_1er15_62',
  Yh = '_content_1er15_66',
  Zh = '_footer_1er15_71',
  Xh = '_footerNote_1er15_78',
  Jh = '_resetButton_1er15_84',
  bh = '_selectionRow_1er15_103',
  Qe = {
    editPanel: Uh,
    expanded: $h,
    toggleButton: Wh,
    buttonContent: Hh,
    icon: Qh,
    title: qh,
    modifiedBadge: Vh,
    preview: Gh,
    chevron: Kh,
    content: Yh,
    footer: Zh,
    footerNote: Xh,
    resetButton: Jh,
    selectionRow: bh,
  };
function ev({
  title: c,
  icon: u,
  credences: s,
  setCredences: _,
  originalCredences: C,
  configs: E,
  isExpanded: T,
  onToggle: j,
  lockedKey: p,
  setLockedKey: v,
  questionType: w = ut.DEFAULT,
}) {
  const k = C && JSON.stringify(s) !== JSON.stringify(C),
    x = w === ut.SELECTION,
    A = (D) => {
      const V = {};
      (E.forEach((te) => {
        V[te.key] = te.key === D ? 100 : 0;
      }),
        _(V));
    },
    G = (D) => {
      (D.stopPropagation(), _({ ...C }));
    },
    H = E.map((D) => `${D.short}:${s[D.key]}%`).join(' ');
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
              d.jsx('span', { className: Qe.icon, children: u }),
              d.jsx('span', { className: Qe.title, children: c }),
              k &&
                d.jsx('span', {
                  className: Qe.modifiedBadge,
                  children: ve.editPanel.modifiedBadge,
                }),
              !T && d.jsx('span', { className: Qe.preview, children: H }),
            ],
          }),
          d.jsx('span', {
            className: Qe.chevron,
            children: T ? d.jsx(hp, { size: 16 }) : d.jsx(mp, { size: 16 }),
          }),
        ],
      }),
      T &&
        d.jsx('div', {
          className: Qe.content,
          children: x
            ? d.jsxs(d.Fragment, {
                children: [
                  d.jsx('div', {
                    className: Qe.selectionRow,
                    children: E.map((D) =>
                      d.jsx(
                        Bh,
                        {
                          label: D.label,
                          color: D.color,
                          isSelected: s[D.key] === 100,
                          onSelect: () => A(D.key),
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
                      k &&
                        d.jsxs('button', {
                          onClick: G,
                          className: Qe.resetButton,
                          children: [d.jsx(ps, { size: 10 }), ' ', ve.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              })
            : d.jsxs(d.Fragment, {
                children: [
                  E.map((D) =>
                    d.jsx(
                      Fh,
                      {
                        label: D.label,
                        value: s[D.key],
                        onChange: (V, te, oe, X) => {
                          const ne = Mc(D.key, V, s, te, X);
                          _(oe ? zc(ne) : ne);
                        },
                        color: D.color,
                        credences: s,
                        sliderKey: D.key,
                        lockedKey: p,
                        setLockedKey: v,
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
                      k &&
                        d.jsxs('button', {
                          onClick: G,
                          className: Qe.resetButton,
                          children: [d.jsx(ps, { size: 10 }), ' ', ve.editPanel.resetButton],
                        }),
                    ],
                  }),
                ],
              }),
        }),
    ],
  });
}
function tv({ worldviewIds: c, activeWorldviewId: u, hasProgressMap: s, onSwitch: _, onClose: C }) {
  return d.jsx('div', {
    className: st.overlay,
    onClick: C,
    children: d.jsxs('div', {
      className: st.modal,
      onClick: (E) => E.stopPropagation(),
      children: [
        d.jsx('h2', { className: st.title, children: 'Switch Worldview' }),
        d.jsx('p', {
          className: st.message,
          children:
            'Each worldview stores a separate set of quiz answers. Select a worldview to view or edit.',
        }),
        d.jsx('div', {
          className: st.buttons,
          children: c.map((E) => {
            const T = E === u,
              p = s[E] ? `Worldview ${E}` : `Worldview ${E} (empty)`;
            return d.jsxs(
              'button',
              {
                onClick: () => _(E),
                className: `btn ${T ? 'btn-primary' : 'btn-secondary'} ${st.button}`,
                disabled: T,
                children: [p, T && ' (current)'],
              },
              E
            );
          }),
        }),
      ],
    }),
  });
}
function nv() {
  var Ne, pe;
  const {
      questionsConfig: c,
      causesConfig: u,
      stateMap: s,
      expandedPanel: _,
      setExpandedPanel: C,
      calculationResults: E,
      originalCalculationResults: T,
      hasChanged: j,
      resetToOriginal: p,
      resetQuiz: v,
      goBack: w,
      worldviews: k,
      activeWorldviewId: x,
      switchWorldview: A,
      worldviewIds: G,
      hasProgressMap: H,
      startQuiz: D,
    } = Qr(),
    [V, te] = F.useState(!1),
    [oe, X] = F.useState(!1),
    [ne, R] = F.useState(null),
    [Q, $] = F.useState(!1),
    Pe = Object.entries(u),
    et = [
      { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
      { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
      { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
      { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
    ].filter((I) => {
      var B;
      return ((B = Wr.calculations) == null ? void 0 : B[I.flag]) === !0;
    }),
    Xe = (I) => {
      ($(!1), A(I), H[I] || D());
    },
    De = (I) =>
      I.options.map((B) => ({
        key: B.key,
        label: B.panelLabel,
        short: B.panelShort,
        color: B.color,
      })),
    qe = c.filter((I) => I.type !== ut.INTERMISSION),
    Ce = () =>
      d.jsx('div', {
        className: Oe.resultsGrid,
        children: et.map((I) => {
          const B = E == null ? void 0 : E[I.key];
          return B
            ? d.jsx(
                Hc,
                {
                  methodKey: I.key,
                  results: B,
                  evs: I.hasEvs ? B.evs : null,
                  originalResults: T == null ? void 0 : T[I.key],
                  causeEntries: Pe,
                  hasChanged: j,
                },
                I.key
              )
            : null;
        }),
      });
  return d.jsxs('div', {
    className: Oe.resultsContainer,
    children: [
      d.jsx(ai, {}),
      d.jsx(ws, { percentage: 100 }),
      d.jsxs('div', {
        className: Oe.inner,
        children: [
          d.jsx('div', {
            className: Oe.resultsHeader,
            children: d.jsxs('h1', {
              className: Oe.title,
              children: [
                ve.results.heading,
                d.jsxs('span', {
                  className: Oe.worldviewLabel,
                  children: [' (Worldview ', x, ')'],
                }),
                j &&
                  d.jsx('span', {
                    className: Oe.modifiedIndicator,
                    children: ve.results.modifiedIndicator,
                  }),
              ],
            }),
          }),
          Ce(),
          d.jsxs('div', {
            className: Oe.adjustPanel,
            children: [
              d.jsxs('div', {
                className: Oe.adjustHeader,
                children: [
                  d.jsx('span', {
                    className: Oe.adjustTitle,
                    children: ve.results.adjustCredencesHeading,
                  }),
                  j &&
                    d.jsxs('button', {
                      onClick: p,
                      className: Oe.resetAllButton,
                      children: [d.jsx(ps, { size: 10 }), ' ', ve.results.resetAllButton],
                    }),
                ],
              }),
              d.jsx('div', {
                className: Oe.panelList,
                children: qe.map((I) => {
                  const B = s[I.id];
                  return B
                    ? d.jsx(
                        ev,
                        {
                          title: I.editPanelTitle,
                          icon: d.jsx(Uc, { name: I.icon, size: 16 }),
                          credences: B.credences,
                          setCredences: B.setCredences,
                          originalCredences: B.originalCredences,
                          configs: De(I),
                          isExpanded: _ === I.id,
                          onToggle: () => C(_ === I.id ? null : I.id),
                          lockedKey: B.lockedKey,
                          setLockedKey: B.setLockedKey,
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
            className: Oe.backButtonContainer,
            children: [
              d.jsx('button', {
                onClick: w,
                className: 'btn btn-secondary',
                children: ve.navigation.backToQuiz,
              }),
              d.jsxs('button', {
                onClick: () => $(!0),
                className: 'btn btn-secondary',
                children: [d.jsx(Sp, { size: 16 }), 'Switch Worldview'],
              }),
              (Ne = Wr.ui) == null ? void 0 : Ne.shareResults,
              (pe = Wr.ui) == null ? void 0 : pe.resetButton,
            ],
          }),
        ],
      }),
      Q &&
        d.jsx(tv, {
          worldviewIds: G,
          activeWorldviewId: x,
          hasProgressMap: H,
          onSwitch: Xe,
          onClose: () => $(!1),
        }),
    ],
  });
}
const rv = '_debugButton_1xuzz_4',
  lv = '_overlay_1xuzz_28',
  iv = '_modal_1xuzz_41',
  ov = '_header_1xuzz_52',
  sv = '_closeButton_1xuzz_66',
  uv = '_content_1xuzz_79',
  av = '_section_1xuzz_85',
  cv = '_causeBlock_1xuzz_99',
  dv = '_fieldRow_1xuzz_112',
  fv = '_checkboxRow_1xuzz_136',
  pv = '_multiplierGroup_1xuzz_155',
  mv = '_dimInfo_1xuzz_165',
  hv = '_multiplierRow_1xuzz_172',
  vv = '_footer_1xuzz_196',
  yv = '_saveButton_1xuzz_203',
  ze = {
    debugButton: rv,
    overlay: lv,
    modal: iv,
    header: ov,
    closeButton: sv,
    content: uv,
    section: av,
    causeBlock: cv,
    fieldRow: dv,
    checkboxRow: fv,
    multiplierGroup: pv,
    dimInfo: mv,
    multiplierRow: hv,
    footer: vv,
    saveButton: yv,
  },
  { causes: gv, diminishingReturns: wv } = li,
  Sv = Rc(!0),
  _v = ({ onConfigChange: c }) => {
    const [u, s] = F.useState(!1),
      [_, C] = F.useState({
        causes: JSON.parse(JSON.stringify(gv)),
        dimensions: JSON.parse(JSON.stringify(Sv)),
        diminishingReturns: wv,
      }),
      E = (p, v, w) => {
        C((k) => ({
          ...k,
          causes: {
            ...k.causes,
            [p]: {
              ...k.causes[p],
              [v]: v === 'name' || v === 'color' || typeof w == 'boolean' ? w : Number(w),
            },
          },
        }));
      },
      T = (p, v, w) => {
        C((k) => ({
          ...k,
          dimensions: {
            ...k.dimensions,
            [p]: { ...k.dimensions[p], options: { ...k.dimensions[p].options, [v]: Number(w) } },
          },
        }));
      },
      j = () => {
        (c(_), s(!1));
      };
    return d.jsxs(d.Fragment, {
      children: [
        d.jsx('button', {
          className: ze.debugButton,
          onClick: () => s(!0),
          title: 'Debug Settings',
          children: 'Settings',
        }),
        u &&
          d.jsx('div', {
            className: ze.overlay,
            onClick: () => s(!1),
            children: d.jsxs('div', {
              className: ze.modal,
              onClick: (p) => p.stopPropagation(),
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
                                value: _.diminishingReturns,
                                onChange: (p) =>
                                  C((v) => ({ ...v, diminishingReturns: p.target.value })),
                                children: Object.keys(ms).map((p) =>
                                  d.jsxs(
                                    'option',
                                    { value: p, children: [p, ' (power = ', ms[p], ')'] },
                                    p
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
                        Object.entries(_.causes).map(([p, v]) =>
                          d.jsxs(
                            'div',
                            {
                              className: ze.causeBlock,
                              children: [
                                d.jsx('h4', { children: v.name }),
                                d.jsxs('div', {
                                  className: ze.fieldRow,
                                  children: [
                                    d.jsxs('label', {
                                      children: [
                                        'Points:',
                                        d.jsx('input', {
                                          type: 'number',
                                          value: v.points,
                                          onChange: (w) => E(p, 'points', w.target.value),
                                        }),
                                      ],
                                    }),
                                    d.jsxs('label', {
                                      children: [
                                        'Scale Factor:',
                                        d.jsx('input', {
                                          type: 'number',
                                          value: v.scaleFactor,
                                          onChange: (w) => E(p, 'scaleFactor', w.target.value),
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
                                          checked: v.helpsAnimals,
                                          onChange: (w) => E(p, 'helpsAnimals', w.target.checked),
                                        }),
                                        'Helps Animals',
                                      ],
                                    }),
                                    d.jsxs('label', {
                                      children: [
                                        d.jsx('input', {
                                          type: 'checkbox',
                                          checked: v.helpsFutureHumans,
                                          onChange: (w) =>
                                            E(p, 'helpsFutureHumans', w.target.checked),
                                        }),
                                        'Helps Future Humans',
                                      ],
                                    }),
                                    d.jsxs('label', {
                                      children: [
                                        d.jsx('input', {
                                          type: 'checkbox',
                                          checked: v.isSpeculative,
                                          onChange: (w) => E(p, 'isSpeculative', w.target.checked),
                                        }),
                                        'Is Speculative',
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            p
                          )
                        ),
                      ],
                    }),
                    d.jsxs('section', {
                      className: ze.section,
                      children: [
                        d.jsx('h3', { children: 'DIMENSIONS (from questions)' }),
                        Object.entries(_.dimensions).map(([p, v]) =>
                          d.jsxs(
                            'div',
                            {
                              className: ze.multiplierGroup,
                              children: [
                                d.jsx('h4', { children: v.name }),
                                d.jsx('p', {
                                  className: ze.dimInfo,
                                  children:
                                    v.applyAs === 'multiplier'
                                      ? `Multiplier when: ${v.appliesWhen}`
                                      : `Exponent on: ${v.appliesTo}`,
                                }),
                                d.jsx('div', {
                                  className: ze.multiplierRow,
                                  children: Object.entries(v.options).map(([w, k]) =>
                                    d.jsxs(
                                      'label',
                                      {
                                        children: [
                                          w,
                                          ':',
                                          d.jsx('input', {
                                            type: 'number',
                                            step: v.applyAs === 'exponent' ? '0.1' : '0.01',
                                            value: k,
                                            onChange: (x) => T(p, w, x.target.value),
                                          }),
                                        ],
                                      },
                                      w
                                    )
                                  ),
                                }),
                              ],
                            },
                            p
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
  kv = {
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
function xv() {
  const {
    currentStep: c,
    currentQuestion: u,
    setDebugConfig: s,
    shareUrlError: _,
    isHydrating: C,
  } = Qr();
  if (C) return null;
  function E() {
    return c === 'welcome'
      ? d.jsx(cm, {})
      : c === 'results'
        ? d.jsx(nv, {})
        : u
          ? u.type === ut.INTERMISSION
            ? d.jsx(Ah, {})
            : d.jsx(Xm, {})
          : null;
  }
  return d.jsxs(d.Fragment, {
    children: [
      _ && d.jsx('div', { style: kv, children: _ }),
      E(),
      d.jsx(_v, { onConfigChange: s }),
    ],
  });
}
function Ev() {
  return d.jsx(Kp, { children: d.jsx(xv, {}) });
}
Yf.createRoot(document.getElementById('root')).render(
  d.jsx(F.StrictMode, { children: d.jsx(Ev, {}) })
);
