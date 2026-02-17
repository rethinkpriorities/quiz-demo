(function () {
  const s = document.createElement('link').relList;
  if (s && s.supports && s.supports('modulepreload')) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) c(d);
  new MutationObserver((d) => {
    for (const f of d)
      if (f.type === 'childList')
        for (const p of f.addedNodes) p.tagName === 'LINK' && p.rel === 'modulepreload' && c(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(d) {
    const f = {};
    return (
      d.integrity && (f.integrity = d.integrity),
      d.referrerPolicy && (f.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === 'use-credentials'
        ? (f.credentials = 'include')
        : d.crossOrigin === 'anonymous'
          ? (f.credentials = 'omit')
          : (f.credentials = 'same-origin'),
      f
    );
  }
  function c(d) {
    if (d.ep) return;
    d.ep = !0;
    const f = i(d);
    fetch(d.href, f);
  }
})();
var is = { exports: {} },
  el = {},
  ss = { exports: {} },
  he = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hc;
function Yf() {
  if (hc) return he;
  hc = 1;
  var a = Symbol.for('react.element'),
    s = Symbol.for('react.portal'),
    i = Symbol.for('react.fragment'),
    c = Symbol.for('react.strict_mode'),
    d = Symbol.for('react.profiler'),
    f = Symbol.for('react.provider'),
    p = Symbol.for('react.context'),
    w = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    v = Symbol.for('react.lazy'),
    x = Symbol.iterator;
  function O(k) {
    return k === null || typeof k != 'object'
      ? null
      : ((k = (x && k[x]) || k['@@iterator']), typeof k == 'function' ? k : null);
  }
  var N = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    j = {};
  function I(k, M, ie) {
    ((this.props = k), (this.context = M), (this.refs = j), (this.updater = ie || N));
  }
  ((I.prototype.isReactComponent = {}),
    (I.prototype.setState = function (k, M) {
      if (typeof k != 'object' && typeof k != 'function' && k != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, k, M, 'setState');
    }),
    (I.prototype.forceUpdate = function (k) {
      this.updater.enqueueForceUpdate(this, k, 'forceUpdate');
    }));
  function V() {}
  V.prototype = I.prototype;
  function L(k, M, ie) {
    ((this.props = k), (this.context = M), (this.refs = j), (this.updater = ie || N));
  }
  var b = (L.prototype = new V());
  ((b.constructor = L), T(b, I.prototype), (b.isPureReactComponent = !0));
  var B = Array.isArray,
    re = Object.prototype.hasOwnProperty,
    fe = { current: null },
    Z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Y(k, M, ie) {
    var de,
      ve = {},
      ye = null,
      xe = null;
    if (M != null)
      for (de in (M.ref !== void 0 && (xe = M.ref), M.key !== void 0 && (ye = '' + M.key), M))
        re.call(M, de) && !Z.hasOwnProperty(de) && (ve[de] = M[de]);
    var ge = arguments.length - 2;
    if (ge === 1) ve.children = ie;
    else if (1 < ge) {
      for (var Ie = Array(ge), Xe = 0; Xe < ge; Xe++) Ie[Xe] = arguments[Xe + 2];
      ve.children = Ie;
    }
    if (k && k.defaultProps)
      for (de in ((ge = k.defaultProps), ge)) ve[de] === void 0 && (ve[de] = ge[de]);
    return { $$typeof: a, type: k, key: ye, ref: xe, props: ve, _owner: fe.current };
  }
  function ce(k, M) {
    return { $$typeof: a, type: k.type, key: M, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function ke(k) {
    return typeof k == 'object' && k !== null && k.$$typeof === a;
  }
  function ee(k) {
    var M = { '=': '=0', ':': '=2' };
    return (
      '$' +
      k.replace(/[=:]/g, function (ie) {
        return M[ie];
      })
    );
  }
  var ae = /\/+/g;
  function te(k, M) {
    return typeof k == 'object' && k !== null && k.key != null ? ee('' + k.key) : M.toString(36);
  }
  function se(k, M, ie, de, ve) {
    var ye = typeof k;
    (ye === 'undefined' || ye === 'boolean') && (k = null);
    var xe = !1;
    if (k === null) xe = !0;
    else
      switch (ye) {
        case 'string':
        case 'number':
          xe = !0;
          break;
        case 'object':
          switch (k.$$typeof) {
            case a:
            case s:
              xe = !0;
          }
      }
    if (xe)
      return (
        (xe = k),
        (ve = ve(xe)),
        (k = de === '' ? '.' + te(xe, 0) : de),
        B(ve)
          ? ((ie = ''),
            k != null && (ie = k.replace(ae, '$&/') + '/'),
            se(ve, M, ie, '', function (Xe) {
              return Xe;
            }))
          : ve != null &&
            (ke(ve) &&
              (ve = ce(
                ve,
                ie +
                  (!ve.key || (xe && xe.key === ve.key)
                    ? ''
                    : ('' + ve.key).replace(ae, '$&/') + '/') +
                  k
              )),
            M.push(ve)),
        1
      );
    if (((xe = 0), (de = de === '' ? '.' : de + ':'), B(k)))
      for (var ge = 0; ge < k.length; ge++) {
        ye = k[ge];
        var Ie = de + te(ye, ge);
        xe += se(ye, M, ie, Ie, ve);
      }
    else if (((Ie = O(k)), typeof Ie == 'function'))
      for (k = Ie.call(k), ge = 0; !(ye = k.next()).done; )
        ((ye = ye.value), (Ie = de + te(ye, ge++)), (xe += se(ye, M, ie, Ie, ve)));
    else if (ye === 'object')
      throw (
        (M = String(k)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (M === '[object Object]' ? 'object with keys {' + Object.keys(k).join(', ') + '}' : M) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return xe;
  }
  function Ce(k, M, ie) {
    if (k == null) return k;
    var de = [],
      ve = 0;
    return (
      se(k, de, '', '', function (ye) {
        return M.call(ie, ye, ve++);
      }),
      de
    );
  }
  function Fe(k) {
    if (k._status === -1) {
      var M = k._result;
      ((M = M()),
        M.then(
          function (ie) {
            (k._status === 0 || k._status === -1) && ((k._status = 1), (k._result = ie));
          },
          function (ie) {
            (k._status === 0 || k._status === -1) && ((k._status = 2), (k._result = ie));
          }
        ),
        k._status === -1 && ((k._status = 0), (k._result = M)));
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var Se = { current: null },
    U = { transition: null },
    ne = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: U, ReactCurrentOwner: fe };
  function H() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (he.Children = {
      map: Ce,
      forEach: function (k, M, ie) {
        Ce(
          k,
          function () {
            M.apply(this, arguments);
          },
          ie
        );
      },
      count: function (k) {
        var M = 0;
        return (
          Ce(k, function () {
            M++;
          }),
          M
        );
      },
      toArray: function (k) {
        return (
          Ce(k, function (M) {
            return M;
          }) || []
        );
      },
      only: function (k) {
        if (!ke(k))
          throw Error('React.Children.only expected to receive a single React element child.');
        return k;
      },
    }),
    (he.Component = I),
    (he.Fragment = i),
    (he.Profiler = d),
    (he.PureComponent = L),
    (he.StrictMode = c),
    (he.Suspense = h),
    (he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne),
    (he.act = H),
    (he.cloneElement = function (k, M, ie) {
      if (k == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + k + '.'
        );
      var de = T({}, k.props),
        ve = k.key,
        ye = k.ref,
        xe = k._owner;
      if (M != null) {
        if (
          (M.ref !== void 0 && ((ye = M.ref), (xe = fe.current)),
          M.key !== void 0 && (ve = '' + M.key),
          k.type && k.type.defaultProps)
        )
          var ge = k.type.defaultProps;
        for (Ie in M)
          re.call(M, Ie) &&
            !Z.hasOwnProperty(Ie) &&
            (de[Ie] = M[Ie] === void 0 && ge !== void 0 ? ge[Ie] : M[Ie]);
      }
      var Ie = arguments.length - 2;
      if (Ie === 1) de.children = ie;
      else if (1 < Ie) {
        ge = Array(Ie);
        for (var Xe = 0; Xe < Ie; Xe++) ge[Xe] = arguments[Xe + 2];
        de.children = ge;
      }
      return { $$typeof: a, type: k.type, key: ve, ref: ye, props: de, _owner: xe };
    }),
    (he.createContext = function (k) {
      return (
        (k = {
          $$typeof: p,
          _currentValue: k,
          _currentValue2: k,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (k.Provider = { $$typeof: f, _context: k }),
        (k.Consumer = k)
      );
    }),
    (he.createElement = Y),
    (he.createFactory = function (k) {
      var M = Y.bind(null, k);
      return ((M.type = k), M);
    }),
    (he.createRef = function () {
      return { current: null };
    }),
    (he.forwardRef = function (k) {
      return { $$typeof: w, render: k };
    }),
    (he.isValidElement = ke),
    (he.lazy = function (k) {
      return { $$typeof: v, _payload: { _status: -1, _result: k }, _init: Fe };
    }),
    (he.memo = function (k, M) {
      return { $$typeof: g, type: k, compare: M === void 0 ? null : M };
    }),
    (he.startTransition = function (k) {
      var M = U.transition;
      U.transition = {};
      try {
        k();
      } finally {
        U.transition = M;
      }
    }),
    (he.unstable_act = H),
    (he.useCallback = function (k, M) {
      return Se.current.useCallback(k, M);
    }),
    (he.useContext = function (k) {
      return Se.current.useContext(k);
    }),
    (he.useDebugValue = function () {}),
    (he.useDeferredValue = function (k) {
      return Se.current.useDeferredValue(k);
    }),
    (he.useEffect = function (k, M) {
      return Se.current.useEffect(k, M);
    }),
    (he.useId = function () {
      return Se.current.useId();
    }),
    (he.useImperativeHandle = function (k, M, ie) {
      return Se.current.useImperativeHandle(k, M, ie);
    }),
    (he.useInsertionEffect = function (k, M) {
      return Se.current.useInsertionEffect(k, M);
    }),
    (he.useLayoutEffect = function (k, M) {
      return Se.current.useLayoutEffect(k, M);
    }),
    (he.useMemo = function (k, M) {
      return Se.current.useMemo(k, M);
    }),
    (he.useReducer = function (k, M, ie) {
      return Se.current.useReducer(k, M, ie);
    }),
    (he.useRef = function (k) {
      return Se.current.useRef(k);
    }),
    (he.useState = function (k) {
      return Se.current.useState(k);
    }),
    (he.useSyncExternalStore = function (k, M, ie) {
      return Se.current.useSyncExternalStore(k, M, ie);
    }),
    (he.useTransition = function () {
      return Se.current.useTransition();
    }),
    (he.version = '18.3.1'),
    he
  );
}
var vc;
function xs() {
  return (vc || ((vc = 1), (ss.exports = Yf())), ss.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yc;
function Xf() {
  if (yc) return el;
  yc = 1;
  var a = xs(),
    s = Symbol.for('react.element'),
    i = Symbol.for('react.fragment'),
    c = Object.prototype.hasOwnProperty,
    d = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(w, h, g) {
    var v,
      x = {},
      O = null,
      N = null;
    (g !== void 0 && (O = '' + g),
      h.key !== void 0 && (O = '' + h.key),
      h.ref !== void 0 && (N = h.ref));
    for (v in h) c.call(h, v) && !f.hasOwnProperty(v) && (x[v] = h[v]);
    if (w && w.defaultProps) for (v in ((h = w.defaultProps), h)) x[v] === void 0 && (x[v] = h[v]);
    return { $$typeof: s, type: w, key: O, ref: N, props: x, _owner: d.current };
  }
  return ((el.Fragment = i), (el.jsx = p), (el.jsxs = p), el);
}
var gc;
function Jf() {
  return (gc || ((gc = 1), (is.exports = Xf())), is.exports);
}
var F = Jf(),
  z = xs(),
  po = {},
  as = { exports: {} },
  ct = {},
  us = { exports: {} },
  cs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wc;
function Zf() {
  return (
    wc ||
      ((wc = 1),
      (function (a) {
        function s(U, ne) {
          var H = U.length;
          U.push(ne);
          e: for (; 0 < H; ) {
            var k = (H - 1) >>> 1,
              M = U[k];
            if (0 < d(M, ne)) ((U[k] = ne), (U[H] = M), (H = k));
            else break e;
          }
        }
        function i(U) {
          return U.length === 0 ? null : U[0];
        }
        function c(U) {
          if (U.length === 0) return null;
          var ne = U[0],
            H = U.pop();
          if (H !== ne) {
            U[0] = H;
            e: for (var k = 0, M = U.length, ie = M >>> 1; k < ie; ) {
              var de = 2 * (k + 1) - 1,
                ve = U[de],
                ye = de + 1,
                xe = U[ye];
              if (0 > d(ve, H))
                ye < M && 0 > d(xe, ve)
                  ? ((U[k] = xe), (U[ye] = H), (k = ye))
                  : ((U[k] = ve), (U[de] = H), (k = de));
              else if (ye < M && 0 > d(xe, H)) ((U[k] = xe), (U[ye] = H), (k = ye));
              else break e;
            }
          }
          return ne;
        }
        function d(U, ne) {
          var H = U.sortIndex - ne.sortIndex;
          return H !== 0 ? H : U.id - ne.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var f = performance;
          a.unstable_now = function () {
            return f.now();
          };
        } else {
          var p = Date,
            w = p.now();
          a.unstable_now = function () {
            return p.now() - w;
          };
        }
        var h = [],
          g = [],
          v = 1,
          x = null,
          O = 3,
          N = !1,
          T = !1,
          j = !1,
          I = typeof setTimeout == 'function' ? setTimeout : null,
          V = typeof clearTimeout == 'function' ? clearTimeout : null,
          L = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function b(U) {
          for (var ne = i(g); ne !== null; ) {
            if (ne.callback === null) c(g);
            else if (ne.startTime <= U) (c(g), (ne.sortIndex = ne.expirationTime), s(h, ne));
            else break;
            ne = i(g);
          }
        }
        function B(U) {
          if (((j = !1), b(U), !T))
            if (i(h) !== null) ((T = !0), Fe(re));
            else {
              var ne = i(g);
              ne !== null && Se(B, ne.startTime - U);
            }
        }
        function re(U, ne) {
          ((T = !1), j && ((j = !1), V(Y), (Y = -1)), (N = !0));
          var H = O;
          try {
            for (b(ne), x = i(h); x !== null && (!(x.expirationTime > ne) || (U && !ee())); ) {
              var k = x.callback;
              if (typeof k == 'function') {
                ((x.callback = null), (O = x.priorityLevel));
                var M = k(x.expirationTime <= ne);
                ((ne = a.unstable_now()),
                  typeof M == 'function' ? (x.callback = M) : x === i(h) && c(h),
                  b(ne));
              } else c(h);
              x = i(h);
            }
            if (x !== null) var ie = !0;
            else {
              var de = i(g);
              (de !== null && Se(B, de.startTime - ne), (ie = !1));
            }
            return ie;
          } finally {
            ((x = null), (O = H), (N = !1));
          }
        }
        var fe = !1,
          Z = null,
          Y = -1,
          ce = 5,
          ke = -1;
        function ee() {
          return !(a.unstable_now() - ke < ce);
        }
        function ae() {
          if (Z !== null) {
            var U = a.unstable_now();
            ke = U;
            var ne = !0;
            try {
              ne = Z(!0, U);
            } finally {
              ne ? te() : ((fe = !1), (Z = null));
            }
          } else fe = !1;
        }
        var te;
        if (typeof L == 'function')
          te = function () {
            L(ae);
          };
        else if (typeof MessageChannel < 'u') {
          var se = new MessageChannel(),
            Ce = se.port2;
          ((se.port1.onmessage = ae),
            (te = function () {
              Ce.postMessage(null);
            }));
        } else
          te = function () {
            I(ae, 0);
          };
        function Fe(U) {
          ((Z = U), fe || ((fe = !0), te()));
        }
        function Se(U, ne) {
          Y = I(function () {
            U(a.unstable_now());
          }, ne);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (U) {
            U.callback = null;
          }),
          (a.unstable_continueExecution = function () {
            T || N || ((T = !0), Fe(re));
          }),
          (a.unstable_forceFrameRate = function (U) {
            0 > U || 125 < U
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (ce = 0 < U ? Math.floor(1e3 / U) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return O;
          }),
          (a.unstable_getFirstCallbackNode = function () {
            return i(h);
          }),
          (a.unstable_next = function (U) {
            switch (O) {
              case 1:
              case 2:
              case 3:
                var ne = 3;
                break;
              default:
                ne = O;
            }
            var H = O;
            O = ne;
            try {
              return U();
            } finally {
              O = H;
            }
          }),
          (a.unstable_pauseExecution = function () {}),
          (a.unstable_requestPaint = function () {}),
          (a.unstable_runWithPriority = function (U, ne) {
            switch (U) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                U = 3;
            }
            var H = O;
            O = U;
            try {
              return ne();
            } finally {
              O = H;
            }
          }),
          (a.unstable_scheduleCallback = function (U, ne, H) {
            var k = a.unstable_now();
            switch (
              (typeof H == 'object' && H !== null
                ? ((H = H.delay), (H = typeof H == 'number' && 0 < H ? k + H : k))
                : (H = k),
              U)
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
              (M = H + M),
              (U = {
                id: v++,
                callback: ne,
                priorityLevel: U,
                startTime: H,
                expirationTime: M,
                sortIndex: -1,
              }),
              H > k
                ? ((U.sortIndex = H),
                  s(g, U),
                  i(h) === null && U === i(g) && (j ? (V(Y), (Y = -1)) : (j = !0), Se(B, H - k)))
                : ((U.sortIndex = M), s(h, U), T || N || ((T = !0), Fe(re))),
              U
            );
          }),
          (a.unstable_shouldYield = ee),
          (a.unstable_wrapCallback = function (U) {
            var ne = O;
            return function () {
              var H = O;
              O = ne;
              try {
                return U.apply(this, arguments);
              } finally {
                O = H;
              }
            };
          }));
      })(cs)),
    cs
  );
}
var _c;
function ed() {
  return (_c || ((_c = 1), (us.exports = Zf())), us.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kc;
function td() {
  if (kc) return ct;
  kc = 1;
  var a = xs(),
    s = ed();
  function i(e) {
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
  var c = new Set(),
    d = {};
  function f(e, t) {
    (p(e, t), p(e + 'Capture', t));
  }
  function p(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var w = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    h = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    v = {},
    x = {};
  function O(e) {
    return h.call(x, e) ? !0 : h.call(v, e) ? !1 : g.test(e) ? (x[e] = !0) : ((v[e] = !0), !1);
  }
  function N(e, t, n, r) {
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
  function T(e, t, n, r) {
    if (t === null || typeof t > 'u' || N(e, t, n, r)) return !0;
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
  function j(e, t, n, r, l, o, u) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = u));
  }
  var I = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      I[e] = new j(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      I[t] = new j(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      I[e] = new j(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        I[e] = new j(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        I[e] = new j(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      I[e] = new j(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      I[e] = new j(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      I[e] = new j(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      I[e] = new j(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var V = /[\-:]([a-z])/g;
  function L(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(V, L);
      I[t] = new j(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(V, L);
        I[t] = new j(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(V, L);
      I[t] = new j(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      I[e] = new j(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (I.xlinkHref = new j('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      I[e] = new j(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function b(e, t, n, r) {
    var l = I.hasOwnProperty(t) ? I[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (T(t, n, l, r) && (n = null),
      r || l === null
        ? O(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
  var B = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    re = Symbol.for('react.element'),
    fe = Symbol.for('react.portal'),
    Z = Symbol.for('react.fragment'),
    Y = Symbol.for('react.strict_mode'),
    ce = Symbol.for('react.profiler'),
    ke = Symbol.for('react.provider'),
    ee = Symbol.for('react.context'),
    ae = Symbol.for('react.forward_ref'),
    te = Symbol.for('react.suspense'),
    se = Symbol.for('react.suspense_list'),
    Ce = Symbol.for('react.memo'),
    Fe = Symbol.for('react.lazy'),
    Se = Symbol.for('react.offscreen'),
    U = Symbol.iterator;
  function ne(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (U && e[U]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var H = Object.assign,
    k;
  function M(e) {
    if (k === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        k = (t && t[1]) || '';
      }
    return (
      `
` +
      k +
      e
    );
  }
  var ie = !1;
  function de(e, t) {
    if (!e || ie) return '';
    ie = !0;
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
          } catch (C) {
            var r = C;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (C) {
            r = C;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (C) {
          r = C;
        }
        e();
      }
    } catch (C) {
      if (C && r && typeof C.stack == 'string') {
        for (
          var l = C.stack.split(`
`),
            o = r.stack.split(`
`),
            u = l.length - 1,
            m = o.length - 1;
          1 <= u && 0 <= m && l[u] !== o[m];
        )
          m--;
        for (; 1 <= u && 0 <= m; u--, m--)
          if (l[u] !== o[m]) {
            if (u !== 1 || m !== 1)
              do
                if ((u--, m--, 0 > m || l[u] !== o[m])) {
                  var y =
                    `
` + l[u].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      y.includes('<anonymous>') &&
                      (y = y.replace('<anonymous>', e.displayName)),
                    y
                  );
                }
              while (1 <= u && 0 <= m);
            break;
          }
      }
    } finally {
      ((ie = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? M(e) : '';
  }
  function ve(e) {
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
        return ((e = de(e.type, !1)), e);
      case 11:
        return ((e = de(e.type.render, !1)), e);
      case 1:
        return ((e = de(e.type, !0)), e);
      default:
        return '';
    }
  }
  function ye(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case Z:
        return 'Fragment';
      case fe:
        return 'Portal';
      case ce:
        return 'Profiler';
      case Y:
        return 'StrictMode';
      case te:
        return 'Suspense';
      case se:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case ee:
          return (e.displayName || 'Context') + '.Consumer';
        case ke:
          return (e._context.displayName || 'Context') + '.Provider';
        case ae:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case Ce:
          return ((t = e.displayName || null), t !== null ? t : ye(e.type) || 'Memo');
        case Fe:
          ((t = e._payload), (e = e._init));
          try {
            return ye(e(t));
          } catch {}
      }
    return null;
  }
  function xe(e) {
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
        return t === Y ? 'StrictMode' : 'Mode';
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
  function ge(e) {
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
  function Ie(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Xe(e) {
    var t = Ie(e) ? 'checked' : 'value',
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
          set: function (u) {
            ((r = '' + u), o.call(this, u));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = '' + u;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Sn(e) {
    e._valueTracker || (e._valueTracker = Xe(e));
  }
  function xt(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = Ie(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function xn(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function En(e, t) {
    var n = t.checked;
    return H({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function rl(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = ge(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      }));
  }
  function hr(e, t) {
    ((t = t.checked), t != null && b(e, 'checked', t, !1));
  }
  function ze(e, t) {
    hr(e, t);
    var n = ge(t.value),
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
      ? Yt(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && Yt(e, t.type, ge(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function vr(e, t, n) {
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
  function Yt(e, t, n) {
    (t !== 'number' || xn(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var Xt = Array.isArray;
  function At(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + ge(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Un(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return H({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function ll(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(i(92));
        if (Xt(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: ge(n) };
  }
  function W(e, t) {
    var n = ge(t.value),
      r = ge(t.defaultValue);
    (n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r));
  }
  function K(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function pe(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Oe(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? pe(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var Et,
    Me = (function (e) {
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
          Et = Et || document.createElement('div'),
            Et.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = Et.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Jt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var yr = {
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
    Zc = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(yr).forEach(function (e) {
    Zc.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (yr[t] = yr[e]));
    });
  });
  function js(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (yr.hasOwnProperty(e) && yr[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function Ls(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = js(n, t[n], r);
        (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var e0 = H(
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
  function go(e, t) {
    if (t) {
      if (e0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(i(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(i(62));
    }
  }
  function wo(e, t) {
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
  var _o = null;
  function ko(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var So = null,
    Bn = null,
    Qn = null;
  function Ms(e) {
    if ((e = Fr(e))) {
      if (typeof So != 'function') throw Error(i(280));
      var t = e.stateNode;
      t && ((t = Ol(t)), So(e.stateNode, e.type, t));
    }
  }
  function Ps(e) {
    Bn ? (Qn ? Qn.push(e) : (Qn = [e])) : (Bn = e);
  }
  function Rs() {
    if (Bn) {
      var e = Bn,
        t = Qn;
      if (((Qn = Bn = null), Ms(e), t)) for (e = 0; e < t.length; e++) Ms(t[e]);
    }
  }
  function Ds(e, t) {
    return e(t);
  }
  function zs() {}
  var xo = !1;
  function As(e, t, n) {
    if (xo) return e(t, n);
    xo = !0;
    try {
      return Ds(e, t, n);
    } finally {
      ((xo = !1), (Bn !== null || Qn !== null) && (zs(), Rs()));
    }
  }
  function gr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ol(n);
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
    if (n && typeof n != 'function') throw Error(i(231, t, typeof n));
    return n;
  }
  var Eo = !1;
  if (w)
    try {
      var wr = {};
      (Object.defineProperty(wr, 'passive', {
        get: function () {
          Eo = !0;
        },
      }),
        window.addEventListener('test', wr, wr),
        window.removeEventListener('test', wr, wr));
    } catch {
      Eo = !1;
    }
  function t0(e, t, n, r, l, o, u, m, y) {
    var C = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, C);
    } catch (R) {
      this.onError(R);
    }
  }
  var _r = !1,
    ol = null,
    il = !1,
    Co = null,
    n0 = {
      onError: function (e) {
        ((_r = !0), (ol = e));
      },
    };
  function r0(e, t, n, r, l, o, u, m, y) {
    ((_r = !1), (ol = null), t0.apply(n0, arguments));
  }
  function l0(e, t, n, r, l, o, u, m, y) {
    if ((r0.apply(this, arguments), _r)) {
      if (_r) {
        var C = ol;
        ((_r = !1), (ol = null));
      } else throw Error(i(198));
      il || ((il = !0), (Co = C));
    }
  }
  function Cn(e) {
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
  function Ws(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Fs(e) {
    if (Cn(e) !== e) throw Error(i(188));
  }
  function o0(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Cn(e)), t === null)) throw Error(i(188));
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
          if (o === n) return (Fs(l), e);
          if (o === r) return (Fs(l), t);
          o = o.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== r.return) ((n = l), (r = o));
      else {
        for (var u = !1, m = l.child; m; ) {
          if (m === n) {
            ((u = !0), (n = l), (r = o));
            break;
          }
          if (m === r) {
            ((u = !0), (r = l), (n = o));
            break;
          }
          m = m.sibling;
        }
        if (!u) {
          for (m = o.child; m; ) {
            if (m === n) {
              ((u = !0), (n = o), (r = l));
              break;
            }
            if (m === r) {
              ((u = !0), (r = o), (n = l));
              break;
            }
            m = m.sibling;
          }
          if (!u) throw Error(i(189));
        }
      }
      if (n.alternate !== r) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function Vs(e) {
    return ((e = o0(e)), e !== null ? bs(e) : null);
  }
  function bs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = bs(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Us = s.unstable_scheduleCallback,
    Bs = s.unstable_cancelCallback,
    i0 = s.unstable_shouldYield,
    s0 = s.unstable_requestPaint,
    Ae = s.unstable_now,
    a0 = s.unstable_getCurrentPriorityLevel,
    Io = s.unstable_ImmediatePriority,
    Qs = s.unstable_UserBlockingPriority,
    sl = s.unstable_NormalPriority,
    u0 = s.unstable_LowPriority,
    Hs = s.unstable_IdlePriority,
    al = null,
    Mt = null;
  function c0(e) {
    if (Mt && typeof Mt.onCommitFiberRoot == 'function')
      try {
        Mt.onCommitFiberRoot(al, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Ct = Math.clz32 ? Math.clz32 : p0,
    f0 = Math.log,
    d0 = Math.LN2;
  function p0(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((f0(e) / d0) | 0)) | 0);
  }
  var ul = 64,
    cl = 4194304;
  function kr(e) {
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
  function fl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var m = u & ~l;
      m !== 0 ? (r = kr(m)) : ((o &= u), o !== 0 && (r = kr(o)));
    } else ((u = n & ~l), u !== 0 ? (r = kr(u)) : o !== 0 && (r = kr(o)));
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
        ((n = 31 - Ct(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function m0(e, t) {
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
  function h0(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes;
      0 < o;
    ) {
      var u = 31 - Ct(o),
        m = 1 << u,
        y = l[u];
      (y === -1
        ? ((m & n) === 0 || (m & r) !== 0) && (l[u] = m0(m, t))
        : y <= t && (e.expiredLanes |= m),
        (o &= ~m));
    }
  }
  function Oo(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function qs() {
    var e = ul;
    return ((ul <<= 1), (ul & 4194240) === 0 && (ul = 64), e);
  }
  function No(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Sr(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Ct(t)),
      (e[t] = n));
  }
  function v0(e, t) {
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
      var l = 31 - Ct(n),
        o = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o));
    }
  }
  function To(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Ct(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var Ee = 0;
  function $s(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Ks,
    jo,
    Gs,
    Ys,
    Xs,
    Lo = !1,
    dl = [],
    Zt = null,
    en = null,
    tn = null,
    xr = new Map(),
    Er = new Map(),
    nn = [],
    y0 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function Js(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Zt = null;
        break;
      case 'dragenter':
      case 'dragleave':
        en = null;
        break;
      case 'mouseover':
      case 'mouseout':
        tn = null;
        break;
      case 'pointerover':
      case 'pointerout':
        xr.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Er.delete(t.pointerId);
    }
  }
  function Cr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = Fr(t)), t !== null && jo(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function g0(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return ((Zt = Cr(Zt, e, t, n, r, l)), !0);
      case 'dragenter':
        return ((en = Cr(en, e, t, n, r, l)), !0);
      case 'mouseover':
        return ((tn = Cr(tn, e, t, n, r, l)), !0);
      case 'pointerover':
        var o = l.pointerId;
        return (xr.set(o, Cr(xr.get(o) || null, e, t, n, r, l)), !0);
      case 'gotpointercapture':
        return ((o = l.pointerId), Er.set(o, Cr(Er.get(o) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function Zs(e) {
    var t = In(e.target);
    if (t !== null) {
      var n = Cn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ws(n)), t !== null)) {
            ((e.blockedOn = t),
              Xs(e.priority, function () {
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
  function pl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Po(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((_o = r), n.target.dispatchEvent(r), (_o = null));
      } else return ((t = Fr(n)), t !== null && jo(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function ea(e, t, n) {
    pl(e) && n.delete(t);
  }
  function w0() {
    ((Lo = !1),
      Zt !== null && pl(Zt) && (Zt = null),
      en !== null && pl(en) && (en = null),
      tn !== null && pl(tn) && (tn = null),
      xr.forEach(ea),
      Er.forEach(ea));
  }
  function Ir(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Lo || ((Lo = !0), s.unstable_scheduleCallback(s.unstable_NormalPriority, w0)));
  }
  function Or(e) {
    function t(l) {
      return Ir(l, e);
    }
    if (0 < dl.length) {
      Ir(dl[0], e);
      for (var n = 1; n < dl.length; n++) {
        var r = dl[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Zt !== null && Ir(Zt, e),
        en !== null && Ir(en, e),
        tn !== null && Ir(tn, e),
        xr.forEach(t),
        Er.forEach(t),
        n = 0;
      n < nn.length;
      n++
    )
      ((r = nn[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < nn.length && ((n = nn[0]), n.blockedOn === null); )
      (Zs(n), n.blockedOn === null && nn.shift());
  }
  var Hn = B.ReactCurrentBatchConfig,
    ml = !0;
  function _0(e, t, n, r) {
    var l = Ee,
      o = Hn.transition;
    Hn.transition = null;
    try {
      ((Ee = 1), Mo(e, t, n, r));
    } finally {
      ((Ee = l), (Hn.transition = o));
    }
  }
  function k0(e, t, n, r) {
    var l = Ee,
      o = Hn.transition;
    Hn.transition = null;
    try {
      ((Ee = 4), Mo(e, t, n, r));
    } finally {
      ((Ee = l), (Hn.transition = o));
    }
  }
  function Mo(e, t, n, r) {
    if (ml) {
      var l = Po(e, t, n, r);
      if (l === null) (Yo(e, t, r, hl, n), Js(e, r));
      else if (g0(l, e, t, n, r)) r.stopPropagation();
      else if ((Js(e, r), t & 4 && -1 < y0.indexOf(e))) {
        for (; l !== null; ) {
          var o = Fr(l);
          if (
            (o !== null && Ks(o), (o = Po(e, t, n, r)), o === null && Yo(e, t, r, hl, n), o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Yo(e, t, r, null, n);
    }
  }
  var hl = null;
  function Po(e, t, n, r) {
    if (((hl = null), (e = ko(r)), (e = In(e)), e !== null))
      if (((t = Cn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ws(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((hl = e), null);
  }
  function ta(e) {
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
        switch (a0()) {
          case Io:
            return 1;
          case Qs:
            return 4;
          case sl:
          case u0:
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
  var rn = null,
    Ro = null,
    vl = null;
  function na() {
    if (vl) return vl;
    var e,
      t = Ro,
      n = t.length,
      r,
      l = 'value' in rn ? rn.value : rn.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[o - r]; r++);
    return (vl = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function yl(e) {
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
  function ra() {
    return !1;
  }
  function dt(e) {
    function t(n, r, l, o, u) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = u),
        (this.currentTarget = null));
      for (var m in e) e.hasOwnProperty(m) && ((n = e[m]), (this[m] = n ? n(o) : o[m]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? gl
          : ra),
        (this.isPropagationStopped = ra),
        this
      );
    }
    return (
      H(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = gl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = gl));
        },
        persist: function () {},
        isPersistent: gl,
      }),
      t
    );
  }
  var qn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Do = dt(qn),
    Nr = H({}, qn, { view: 0, detail: 0 }),
    S0 = dt(Nr),
    zo,
    Ao,
    Tr,
    wl = H({}, Nr, {
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
      getModifierState: Fo,
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
          : (e !== Tr &&
              (Tr && e.type === 'mousemove'
                ? ((zo = e.screenX - Tr.screenX), (Ao = e.screenY - Tr.screenY))
                : (Ao = zo = 0),
              (Tr = e)),
            zo);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Ao;
      },
    }),
    la = dt(wl),
    x0 = H({}, wl, { dataTransfer: 0 }),
    E0 = dt(x0),
    C0 = H({}, Nr, { relatedTarget: 0 }),
    Wo = dt(C0),
    I0 = H({}, qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    O0 = dt(I0),
    N0 = H({}, qn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    T0 = dt(N0),
    j0 = H({}, qn, { data: 0 }),
    oa = dt(j0),
    L0 = {
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
    M0 = {
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
    P0 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function R0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = P0[e]) ? !!t[e] : !1;
  }
  function Fo() {
    return R0;
  }
  var D0 = H({}, Nr, {
      key: function (e) {
        if (e.key) {
          var t = L0[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = yl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? M0[e.keyCode] || 'Unidentified'
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
      getModifierState: Fo,
      charCode: function (e) {
        return e.type === 'keypress' ? yl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? yl(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    z0 = dt(D0),
    A0 = H({}, wl, {
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
    ia = dt(A0),
    W0 = H({}, Nr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fo,
    }),
    F0 = dt(W0),
    V0 = H({}, qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    b0 = dt(V0),
    U0 = H({}, wl, {
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
    B0 = dt(U0),
    Q0 = [9, 13, 27, 32],
    Vo = w && 'CompositionEvent' in window,
    jr = null;
  w && 'documentMode' in document && (jr = document.documentMode);
  var H0 = w && 'TextEvent' in window && !jr,
    sa = w && (!Vo || (jr && 8 < jr && 11 >= jr)),
    aa = ' ',
    ua = !1;
  function ca(e, t) {
    switch (e) {
      case 'keyup':
        return Q0.indexOf(t.keyCode) !== -1;
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
  function fa(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var $n = !1;
  function q0(e, t) {
    switch (e) {
      case 'compositionend':
        return fa(t);
      case 'keypress':
        return t.which !== 32 ? null : ((ua = !0), aa);
      case 'textInput':
        return ((e = t.data), e === aa && ua ? null : e);
      default:
        return null;
    }
  }
  function $0(e, t) {
    if ($n)
      return e === 'compositionend' || (!Vo && ca(e, t))
        ? ((e = na()), (vl = Ro = rn = null), ($n = !1), e)
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
        return sa && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var K0 = {
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
  function da(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!K0[e.type] : t === 'textarea';
  }
  function pa(e, t, n, r) {
    (Ps(r),
      (t = El(t, 'onChange')),
      0 < t.length &&
        ((n = new Do('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Lr = null,
    Mr = null;
  function G0(e) {
    La(e, 0);
  }
  function _l(e) {
    var t = Jn(e);
    if (xt(t)) return e;
  }
  function Y0(e, t) {
    if (e === 'change') return t;
  }
  var ma = !1;
  if (w) {
    var bo;
    if (w) {
      var Uo = 'oninput' in document;
      if (!Uo) {
        var ha = document.createElement('div');
        (ha.setAttribute('oninput', 'return;'), (Uo = typeof ha.oninput == 'function'));
      }
      bo = Uo;
    } else bo = !1;
    ma = bo && (!document.documentMode || 9 < document.documentMode);
  }
  function va() {
    Lr && (Lr.detachEvent('onpropertychange', ya), (Mr = Lr = null));
  }
  function ya(e) {
    if (e.propertyName === 'value' && _l(Mr)) {
      var t = [];
      (pa(t, Mr, e, ko(e)), As(G0, t));
    }
  }
  function X0(e, t, n) {
    e === 'focusin'
      ? (va(), (Lr = t), (Mr = n), Lr.attachEvent('onpropertychange', ya))
      : e === 'focusout' && va();
  }
  function J0(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return _l(Mr);
  }
  function Z0(e, t) {
    if (e === 'click') return _l(t);
  }
  function ef(e, t) {
    if (e === 'input' || e === 'change') return _l(t);
  }
  function tf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var It = typeof Object.is == 'function' ? Object.is : tf;
  function Pr(e, t) {
    if (It(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!h.call(t, l) || !It(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ga(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function wa(e, t) {
    var n = ga(e);
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
      n = ga(n);
    }
  }
  function _a(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? _a(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function ka() {
    for (var e = window, t = xn(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = xn(e.document);
    }
    return t;
  }
  function Bo(e) {
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
  function nf(e) {
    var t = ka(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && _a(n.ownerDocument.documentElement, n)) {
      if (r !== null && Bo(n)) {
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
            (l = wa(n, o)));
          var u = wa(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var rf = w && 'documentMode' in document && 11 >= document.documentMode,
    Kn = null,
    Qo = null,
    Rr = null,
    Ho = !1;
  function Sa(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ho ||
      Kn == null ||
      Kn !== xn(r) ||
      ((r = Kn),
      'selectionStart' in r && Bo(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Rr && Pr(Rr, r)) ||
        ((Rr = r),
        (r = El(Qo, 'onSelect')),
        0 < r.length &&
          ((t = new Do('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Kn))));
  }
  function kl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var Gn = {
      animationend: kl('Animation', 'AnimationEnd'),
      animationiteration: kl('Animation', 'AnimationIteration'),
      animationstart: kl('Animation', 'AnimationStart'),
      transitionend: kl('Transition', 'TransitionEnd'),
    },
    qo = {},
    xa = {};
  w &&
    ((xa = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Gn.animationend.animation,
      delete Gn.animationiteration.animation,
      delete Gn.animationstart.animation),
    'TransitionEvent' in window || delete Gn.transitionend.transition);
  function Sl(e) {
    if (qo[e]) return qo[e];
    if (!Gn[e]) return e;
    var t = Gn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in xa) return (qo[e] = t[n]);
    return e;
  }
  var Ea = Sl('animationend'),
    Ca = Sl('animationiteration'),
    Ia = Sl('animationstart'),
    Oa = Sl('transitionend'),
    Na = new Map(),
    Ta =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function ln(e, t) {
    (Na.set(e, t), f(t, [e]));
  }
  for (var $o = 0; $o < Ta.length; $o++) {
    var Ko = Ta[$o],
      lf = Ko.toLowerCase(),
      of = Ko[0].toUpperCase() + Ko.slice(1);
    ln(lf, 'on' + of);
  }
  (ln(Ea, 'onAnimationEnd'),
    ln(Ca, 'onAnimationIteration'),
    ln(Ia, 'onAnimationStart'),
    ln('dblclick', 'onDoubleClick'),
    ln('focusin', 'onFocus'),
    ln('focusout', 'onBlur'),
    ln(Oa, 'onTransitionEnd'),
    p('onMouseEnter', ['mouseout', 'mouseover']),
    p('onMouseLeave', ['mouseout', 'mouseover']),
    p('onPointerEnter', ['pointerout', 'pointerover']),
    p('onPointerLeave', ['pointerout', 'pointerover']),
    f('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    f(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    f('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    f('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    f(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    f(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var Dr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    sf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Dr));
  function ja(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n), l0(r, t, void 0, e), (e.currentTarget = null));
  }
  function La(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var m = r[u],
              y = m.instance,
              C = m.currentTarget;
            if (((m = m.listener), y !== o && l.isPropagationStopped())) break e;
            (ja(l, m, C), (o = y));
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((m = r[u]),
              (y = m.instance),
              (C = m.currentTarget),
              (m = m.listener),
              y !== o && l.isPropagationStopped())
            )
              break e;
            (ja(l, m, C), (o = y));
          }
      }
    }
    if (il) throw ((e = Co), (il = !1), (Co = null), e);
  }
  function Te(e, t) {
    var n = t[ni];
    n === void 0 && (n = t[ni] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Ma(t, e, 2, !1), n.add(r));
  }
  function Go(e, t, n) {
    var r = 0;
    (t && (r |= 4), Ma(n, e, r, t));
  }
  var xl = '_reactListening' + Math.random().toString(36).slice(2);
  function zr(e) {
    if (!e[xl]) {
      ((e[xl] = !0),
        c.forEach(function (n) {
          n !== 'selectionchange' && (sf.has(n) || Go(n, !1, e), Go(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[xl] || ((t[xl] = !0), Go('selectionchange', !1, t));
    }
  }
  function Ma(e, t, n, r) {
    switch (ta(t)) {
      case 1:
        var l = _0;
        break;
      case 4:
        l = k0;
        break;
      default:
        l = Mo;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Eo || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function Yo(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var m = r.stateNode.containerInfo;
          if (m === l || (m.nodeType === 8 && m.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var y = u.tag;
              if (
                (y === 3 || y === 4) &&
                ((y = u.stateNode.containerInfo),
                y === l || (y.nodeType === 8 && y.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; m !== null; ) {
            if (((u = In(m)), u === null)) return;
            if (((y = u.tag), y === 5 || y === 6)) {
              r = o = u;
              continue e;
            }
            m = m.parentNode;
          }
        }
        r = r.return;
      }
    As(function () {
      var C = o,
        R = ko(n),
        D = [];
      e: {
        var P = Na.get(e);
        if (P !== void 0) {
          var Q = Do,
            $ = e;
          switch (e) {
            case 'keypress':
              if (yl(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              Q = z0;
              break;
            case 'focusin':
              (($ = 'focus'), (Q = Wo));
              break;
            case 'focusout':
              (($ = 'blur'), (Q = Wo));
              break;
            case 'beforeblur':
            case 'afterblur':
              Q = Wo;
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
              Q = la;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              Q = E0;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              Q = F0;
              break;
            case Ea:
            case Ca:
            case Ia:
              Q = O0;
              break;
            case Oa:
              Q = b0;
              break;
            case 'scroll':
              Q = S0;
              break;
            case 'wheel':
              Q = B0;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              Q = T0;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              Q = ia;
          }
          var G = (t & 4) !== 0,
            We = !G && e === 'scroll',
            S = G ? (P !== null ? P + 'Capture' : null) : P;
          G = [];
          for (var _ = C, E; _ !== null; ) {
            E = _;
            var A = E.stateNode;
            if (
              (E.tag === 5 &&
                A !== null &&
                ((E = A), S !== null && ((A = gr(_, S)), A != null && G.push(Ar(_, A, E)))),
              We)
            )
              break;
            _ = _.return;
          }
          0 < G.length && ((P = new Q(P, $, null, n, R)), D.push({ event: P, listeners: G }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((P = e === 'mouseover' || e === 'pointerover'),
            (Q = e === 'mouseout' || e === 'pointerout'),
            P && n !== _o && ($ = n.relatedTarget || n.fromElement) && (In($) || $[Wt]))
          )
            break e;
          if (
            (Q || P) &&
            ((P =
              R.window === R
                ? R
                : (P = R.ownerDocument)
                  ? P.defaultView || P.parentWindow
                  : window),
            Q
              ? (($ = n.relatedTarget || n.toElement),
                (Q = C),
                ($ = $ ? In($) : null),
                $ !== null &&
                  ((We = Cn($)), $ !== We || ($.tag !== 5 && $.tag !== 6)) &&
                  ($ = null))
              : ((Q = null), ($ = C)),
            Q !== $)
          ) {
            if (
              ((G = la),
              (A = 'onMouseLeave'),
              (S = 'onMouseEnter'),
              (_ = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((G = ia), (A = 'onPointerLeave'), (S = 'onPointerEnter'), (_ = 'pointer')),
              (We = Q == null ? P : Jn(Q)),
              (E = $ == null ? P : Jn($)),
              (P = new G(A, _ + 'leave', Q, n, R)),
              (P.target = We),
              (P.relatedTarget = E),
              (A = null),
              In(R) === C &&
                ((G = new G(S, _ + 'enter', $, n, R)),
                (G.target = E),
                (G.relatedTarget = We),
                (A = G)),
              (We = A),
              Q && $)
            )
              t: {
                for (G = Q, S = $, _ = 0, E = G; E; E = Yn(E)) _++;
                for (E = 0, A = S; A; A = Yn(A)) E++;
                for (; 0 < _ - E; ) ((G = Yn(G)), _--);
                for (; 0 < E - _; ) ((S = Yn(S)), E--);
                for (; _--; ) {
                  if (G === S || (S !== null && G === S.alternate)) break t;
                  ((G = Yn(G)), (S = Yn(S)));
                }
                G = null;
              }
            else G = null;
            (Q !== null && Pa(D, P, Q, G, !1), $ !== null && We !== null && Pa(D, We, $, G, !0));
          }
        }
        e: {
          if (
            ((P = C ? Jn(C) : window),
            (Q = P.nodeName && P.nodeName.toLowerCase()),
            Q === 'select' || (Q === 'input' && P.type === 'file'))
          )
            var X = Y0;
          else if (da(P))
            if (ma) X = ef;
            else {
              X = J0;
              var le = X0;
            }
          else
            (Q = P.nodeName) &&
              Q.toLowerCase() === 'input' &&
              (P.type === 'checkbox' || P.type === 'radio') &&
              (X = Z0);
          if (X && (X = X(e, C))) {
            pa(D, X, n, R);
            break e;
          }
          (le && le(e, P, C),
            e === 'focusout' &&
              (le = P._wrapperState) &&
              le.controlled &&
              P.type === 'number' &&
              Yt(P, 'number', P.value));
        }
        switch (((le = C ? Jn(C) : window), e)) {
          case 'focusin':
            (da(le) || le.contentEditable === 'true') && ((Kn = le), (Qo = C), (Rr = null));
            break;
          case 'focusout':
            Rr = Qo = Kn = null;
            break;
          case 'mousedown':
            Ho = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Ho = !1), Sa(D, n, R));
            break;
          case 'selectionchange':
            if (rf) break;
          case 'keydown':
          case 'keyup':
            Sa(D, n, R);
        }
        var oe;
        if (Vo)
          e: {
            switch (e) {
              case 'compositionstart':
                var ue = 'onCompositionStart';
                break e;
              case 'compositionend':
                ue = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                ue = 'onCompositionUpdate';
                break e;
            }
            ue = void 0;
          }
        else
          $n
            ? ca(e, n) && (ue = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (ue = 'onCompositionStart');
        (ue &&
          (sa &&
            n.locale !== 'ko' &&
            ($n || ue !== 'onCompositionStart'
              ? ue === 'onCompositionEnd' && $n && (oe = na())
              : ((rn = R), (Ro = 'value' in rn ? rn.value : rn.textContent), ($n = !0))),
          (le = El(C, ue)),
          0 < le.length &&
            ((ue = new oa(ue, e, null, n, R)),
            D.push({ event: ue, listeners: le }),
            oe ? (ue.data = oe) : ((oe = fa(n)), oe !== null && (ue.data = oe)))),
          (oe = H0 ? q0(e, n) : $0(e, n)) &&
            ((C = El(C, 'onBeforeInput')),
            0 < C.length &&
              ((R = new oa('onBeforeInput', 'beforeinput', null, n, R)),
              D.push({ event: R, listeners: C }),
              (R.data = oe))));
      }
      La(D, t);
    });
  }
  function Ar(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function El(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      (l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = gr(e, n)),
        o != null && r.unshift(Ar(e, o, l)),
        (o = gr(e, t)),
        o != null && r.push(Ar(e, o, l))),
        (e = e.return));
    }
    return r;
  }
  function Yn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Pa(e, t, n, r, l) {
    for (var o = t._reactName, u = []; n !== null && n !== r; ) {
      var m = n,
        y = m.alternate,
        C = m.stateNode;
      if (y !== null && y === r) break;
      (m.tag === 5 &&
        C !== null &&
        ((m = C),
        l
          ? ((y = gr(n, o)), y != null && u.unshift(Ar(n, y, m)))
          : l || ((y = gr(n, o)), y != null && u.push(Ar(n, y, m)))),
        (n = n.return));
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var af = /\r\n?/g,
    uf = /\u0000|\uFFFD/g;
  function Ra(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        af,
        `
`
      )
      .replace(uf, '');
  }
  function Cl(e, t, n) {
    if (((t = Ra(t)), Ra(e) !== t && n)) throw Error(i(425));
  }
  function Il() {}
  var Xo = null,
    Jo = null;
  function Zo(e, t) {
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
  var ei = typeof setTimeout == 'function' ? setTimeout : void 0,
    cf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Da = typeof Promise == 'function' ? Promise : void 0,
    ff =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Da < 'u'
          ? function (e) {
              return Da.resolve(null).then(e).catch(df);
            }
          : ei;
  function df(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ti(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$')) {
          if (r === 0) {
            (e.removeChild(l), Or(t));
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = l;
    } while (n);
    Or(t);
  }
  function on(e) {
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
  function za(e) {
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
  var Xn = Math.random().toString(36).slice(2),
    Pt = '__reactFiber$' + Xn,
    Wr = '__reactProps$' + Xn,
    Wt = '__reactContainer$' + Xn,
    ni = '__reactEvents$' + Xn,
    pf = '__reactListeners$' + Xn,
    mf = '__reactHandles$' + Xn;
  function In(e) {
    var t = e[Pt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Wt] || n[Pt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = za(e); e !== null; ) {
            if ((n = e[Pt])) return n;
            e = za(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Fr(e) {
    return (
      (e = e[Pt] || e[Wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Jn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Ol(e) {
    return e[Wr] || null;
  }
  var ri = [],
    Zn = -1;
  function sn(e) {
    return { current: e };
  }
  function je(e) {
    0 > Zn || ((e.current = ri[Zn]), (ri[Zn] = null), Zn--);
  }
  function Ne(e, t) {
    (Zn++, (ri[Zn] = e.current), (e.current = t));
  }
  var an = {},
    Je = sn(an),
    ot = sn(!1),
    On = an;
  function er(e, t) {
    var n = e.type.contextTypes;
    if (!n) return an;
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
  function it(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Nl() {
    (je(ot), je(Je));
  }
  function Aa(e, t, n) {
    if (Je.current !== an) throw Error(i(168));
    (Ne(Je, t), Ne(ot, n));
  }
  function Wa(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(i(108, xe(e) || 'Unknown', l));
    return H({}, n, r);
  }
  function Tl(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || an),
      (On = Je.current),
      Ne(Je, e),
      Ne(ot, ot.current),
      !0
    );
  }
  function Fa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(i(169));
    (n
      ? ((e = Wa(e, t, On)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        je(ot),
        je(Je),
        Ne(Je, e))
      : je(ot),
      Ne(ot, n));
  }
  var Ft = null,
    jl = !1,
    li = !1;
  function Va(e) {
    Ft === null ? (Ft = [e]) : Ft.push(e);
  }
  function hf(e) {
    ((jl = !0), Va(e));
  }
  function un() {
    if (!li && Ft !== null) {
      li = !0;
      var e = 0,
        t = Ee;
      try {
        var n = Ft;
        for (Ee = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Ft = null), (jl = !1));
      } catch (l) {
        throw (Ft !== null && (Ft = Ft.slice(e + 1)), Us(Io, un), l);
      } finally {
        ((Ee = t), (li = !1));
      }
    }
    return null;
  }
  var tr = [],
    nr = 0,
    Ll = null,
    Ml = 0,
    yt = [],
    gt = 0,
    Nn = null,
    Vt = 1,
    bt = '';
  function Tn(e, t) {
    ((tr[nr++] = Ml), (tr[nr++] = Ll), (Ll = e), (Ml = t));
  }
  function ba(e, t, n) {
    ((yt[gt++] = Vt), (yt[gt++] = bt), (yt[gt++] = Nn), (Nn = e));
    var r = Vt;
    e = bt;
    var l = 32 - Ct(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var o = 32 - Ct(t) + l;
    if (30 < o) {
      var u = l - (l % 5);
      ((o = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (Vt = (1 << (32 - Ct(t) + l)) | (n << l) | r),
        (bt = o + e));
    } else ((Vt = (1 << o) | (n << l) | r), (bt = e));
  }
  function oi(e) {
    e.return !== null && (Tn(e, 1), ba(e, 1, 0));
  }
  function ii(e) {
    for (; e === Ll; ) ((Ll = tr[--nr]), (tr[nr] = null), (Ml = tr[--nr]), (tr[nr] = null));
    for (; e === Nn; )
      ((Nn = yt[--gt]),
        (yt[gt] = null),
        (bt = yt[--gt]),
        (yt[gt] = null),
        (Vt = yt[--gt]),
        (yt[gt] = null));
  }
  var pt = null,
    mt = null,
    Le = !1,
    Ot = null;
  function Ua(e, t) {
    var n = St(5, null, null, 0);
    ((n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Ba(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (pt = e), (mt = on(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (pt = e), (mt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Nn !== null ? { id: Vt, overflow: bt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = St(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (pt = e),
              (mt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function si(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ai(e) {
    if (Le) {
      var t = mt;
      if (t) {
        var n = t;
        if (!Ba(e, t)) {
          if (si(e)) throw Error(i(418));
          t = on(n.nextSibling);
          var r = pt;
          t && Ba(e, t) ? Ua(r, n) : ((e.flags = (e.flags & -4097) | 2), (Le = !1), (pt = e));
        }
      } else {
        if (si(e)) throw Error(i(418));
        ((e.flags = (e.flags & -4097) | 2), (Le = !1), (pt = e));
      }
    }
  }
  function Qa(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    pt = e;
  }
  function Pl(e) {
    if (e !== pt) return !1;
    if (!Le) return (Qa(e), (Le = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !Zo(e.type, e.memoizedProps))),
      t && (t = mt))
    ) {
      if (si(e)) throw (Ha(), Error(i(418)));
      for (; t; ) (Ua(e, t), (t = on(t.nextSibling)));
    }
    if ((Qa(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                mt = on(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        mt = null;
      }
    } else mt = pt ? on(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ha() {
    for (var e = mt; e; ) e = on(e.nextSibling);
  }
  function rr() {
    ((mt = pt = null), (Le = !1));
  }
  function ui(e) {
    Ot === null ? (Ot = [e]) : Ot.push(e);
  }
  var vf = B.ReactCurrentBatchConfig;
  function Vr(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(i(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(i(147, e));
        var l = r,
          o = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === o
          ? t.ref
          : ((t = function (u) {
              var m = l.refs;
              u === null ? delete m[o] : (m[o] = u);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != 'string') throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function Rl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        i(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      )
    );
  }
  function qa(e) {
    var t = e._init;
    return t(e._payload);
  }
  function $a(e) {
    function t(S, _) {
      if (e) {
        var E = S.deletions;
        E === null ? ((S.deletions = [_]), (S.flags |= 16)) : E.push(_);
      }
    }
    function n(S, _) {
      if (!e) return null;
      for (; _ !== null; ) (t(S, _), (_ = _.sibling));
      return null;
    }
    function r(S, _) {
      for (S = new Map(); _ !== null; )
        (_.key !== null ? S.set(_.key, _) : S.set(_.index, _), (_ = _.sibling));
      return S;
    }
    function l(S, _) {
      return ((S = yn(S, _)), (S.index = 0), (S.sibling = null), S);
    }
    function o(S, _, E) {
      return (
        (S.index = E),
        e
          ? ((E = S.alternate),
            E !== null ? ((E = E.index), E < _ ? ((S.flags |= 2), _) : E) : ((S.flags |= 2), _))
          : ((S.flags |= 1048576), _)
      );
    }
    function u(S) {
      return (e && S.alternate === null && (S.flags |= 2), S);
    }
    function m(S, _, E, A) {
      return _ === null || _.tag !== 6
        ? ((_ = es(E, S.mode, A)), (_.return = S), _)
        : ((_ = l(_, E)), (_.return = S), _);
    }
    function y(S, _, E, A) {
      var X = E.type;
      return X === Z
        ? R(S, _, E.props.children, A, E.key)
        : _ !== null &&
            (_.elementType === X ||
              (typeof X == 'object' && X !== null && X.$$typeof === Fe && qa(X) === _.type))
          ? ((A = l(_, E.props)), (A.ref = Vr(S, _, E)), (A.return = S), A)
          : ((A = lo(E.type, E.key, E.props, null, S.mode, A)),
            (A.ref = Vr(S, _, E)),
            (A.return = S),
            A);
    }
    function C(S, _, E, A) {
      return _ === null ||
        _.tag !== 4 ||
        _.stateNode.containerInfo !== E.containerInfo ||
        _.stateNode.implementation !== E.implementation
        ? ((_ = ts(E, S.mode, A)), (_.return = S), _)
        : ((_ = l(_, E.children || [])), (_.return = S), _);
    }
    function R(S, _, E, A, X) {
      return _ === null || _.tag !== 7
        ? ((_ = An(E, S.mode, A, X)), (_.return = S), _)
        : ((_ = l(_, E)), (_.return = S), _);
    }
    function D(S, _, E) {
      if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
        return ((_ = es('' + _, S.mode, E)), (_.return = S), _);
      if (typeof _ == 'object' && _ !== null) {
        switch (_.$$typeof) {
          case re:
            return (
              (E = lo(_.type, _.key, _.props, null, S.mode, E)),
              (E.ref = Vr(S, null, _)),
              (E.return = S),
              E
            );
          case fe:
            return ((_ = ts(_, S.mode, E)), (_.return = S), _);
          case Fe:
            var A = _._init;
            return D(S, A(_._payload), E);
        }
        if (Xt(_) || ne(_)) return ((_ = An(_, S.mode, E, null)), (_.return = S), _);
        Rl(S, _);
      }
      return null;
    }
    function P(S, _, E, A) {
      var X = _ !== null ? _.key : null;
      if ((typeof E == 'string' && E !== '') || typeof E == 'number')
        return X !== null ? null : m(S, _, '' + E, A);
      if (typeof E == 'object' && E !== null) {
        switch (E.$$typeof) {
          case re:
            return E.key === X ? y(S, _, E, A) : null;
          case fe:
            return E.key === X ? C(S, _, E, A) : null;
          case Fe:
            return ((X = E._init), P(S, _, X(E._payload), A));
        }
        if (Xt(E) || ne(E)) return X !== null ? null : R(S, _, E, A, null);
        Rl(S, E);
      }
      return null;
    }
    function Q(S, _, E, A, X) {
      if ((typeof A == 'string' && A !== '') || typeof A == 'number')
        return ((S = S.get(E) || null), m(_, S, '' + A, X));
      if (typeof A == 'object' && A !== null) {
        switch (A.$$typeof) {
          case re:
            return ((S = S.get(A.key === null ? E : A.key) || null), y(_, S, A, X));
          case fe:
            return ((S = S.get(A.key === null ? E : A.key) || null), C(_, S, A, X));
          case Fe:
            var le = A._init;
            return Q(S, _, E, le(A._payload), X);
        }
        if (Xt(A) || ne(A)) return ((S = S.get(E) || null), R(_, S, A, X, null));
        Rl(_, A);
      }
      return null;
    }
    function $(S, _, E, A) {
      for (
        var X = null, le = null, oe = _, ue = (_ = 0), qe = null;
        oe !== null && ue < E.length;
        ue++
      ) {
        oe.index > ue ? ((qe = oe), (oe = null)) : (qe = oe.sibling);
        var _e = P(S, oe, E[ue], A);
        if (_e === null) {
          oe === null && (oe = qe);
          break;
        }
        (e && oe && _e.alternate === null && t(S, oe),
          (_ = o(_e, _, ue)),
          le === null ? (X = _e) : (le.sibling = _e),
          (le = _e),
          (oe = qe));
      }
      if (ue === E.length) return (n(S, oe), Le && Tn(S, ue), X);
      if (oe === null) {
        for (; ue < E.length; ue++)
          ((oe = D(S, E[ue], A)),
            oe !== null &&
              ((_ = o(oe, _, ue)), le === null ? (X = oe) : (le.sibling = oe), (le = oe)));
        return (Le && Tn(S, ue), X);
      }
      for (oe = r(S, oe); ue < E.length; ue++)
        ((qe = Q(oe, S, ue, E[ue], A)),
          qe !== null &&
            (e && qe.alternate !== null && oe.delete(qe.key === null ? ue : qe.key),
            (_ = o(qe, _, ue)),
            le === null ? (X = qe) : (le.sibling = qe),
            (le = qe)));
      return (
        e &&
          oe.forEach(function (gn) {
            return t(S, gn);
          }),
        Le && Tn(S, ue),
        X
      );
    }
    function G(S, _, E, A) {
      var X = ne(E);
      if (typeof X != 'function') throw Error(i(150));
      if (((E = X.call(E)), E == null)) throw Error(i(151));
      for (
        var le = (X = null), oe = _, ue = (_ = 0), qe = null, _e = E.next();
        oe !== null && !_e.done;
        ue++, _e = E.next()
      ) {
        oe.index > ue ? ((qe = oe), (oe = null)) : (qe = oe.sibling);
        var gn = P(S, oe, _e.value, A);
        if (gn === null) {
          oe === null && (oe = qe);
          break;
        }
        (e && oe && gn.alternate === null && t(S, oe),
          (_ = o(gn, _, ue)),
          le === null ? (X = gn) : (le.sibling = gn),
          (le = gn),
          (oe = qe));
      }
      if (_e.done) return (n(S, oe), Le && Tn(S, ue), X);
      if (oe === null) {
        for (; !_e.done; ue++, _e = E.next())
          ((_e = D(S, _e.value, A)),
            _e !== null &&
              ((_ = o(_e, _, ue)), le === null ? (X = _e) : (le.sibling = _e), (le = _e)));
        return (Le && Tn(S, ue), X);
      }
      for (oe = r(S, oe); !_e.done; ue++, _e = E.next())
        ((_e = Q(oe, S, ue, _e.value, A)),
          _e !== null &&
            (e && _e.alternate !== null && oe.delete(_e.key === null ? ue : _e.key),
            (_ = o(_e, _, ue)),
            le === null ? (X = _e) : (le.sibling = _e),
            (le = _e)));
      return (
        e &&
          oe.forEach(function (Gf) {
            return t(S, Gf);
          }),
        Le && Tn(S, ue),
        X
      );
    }
    function We(S, _, E, A) {
      if (
        (typeof E == 'object' &&
          E !== null &&
          E.type === Z &&
          E.key === null &&
          (E = E.props.children),
        typeof E == 'object' && E !== null)
      ) {
        switch (E.$$typeof) {
          case re:
            e: {
              for (var X = E.key, le = _; le !== null; ) {
                if (le.key === X) {
                  if (((X = E.type), X === Z)) {
                    if (le.tag === 7) {
                      (n(S, le.sibling), (_ = l(le, E.props.children)), (_.return = S), (S = _));
                      break e;
                    }
                  } else if (
                    le.elementType === X ||
                    (typeof X == 'object' && X !== null && X.$$typeof === Fe && qa(X) === le.type)
                  ) {
                    (n(S, le.sibling),
                      (_ = l(le, E.props)),
                      (_.ref = Vr(S, le, E)),
                      (_.return = S),
                      (S = _));
                    break e;
                  }
                  n(S, le);
                  break;
                } else t(S, le);
                le = le.sibling;
              }
              E.type === Z
                ? ((_ = An(E.props.children, S.mode, A, E.key)), (_.return = S), (S = _))
                : ((A = lo(E.type, E.key, E.props, null, S.mode, A)),
                  (A.ref = Vr(S, _, E)),
                  (A.return = S),
                  (S = A));
            }
            return u(S);
          case fe:
            e: {
              for (le = E.key; _ !== null; ) {
                if (_.key === le)
                  if (
                    _.tag === 4 &&
                    _.stateNode.containerInfo === E.containerInfo &&
                    _.stateNode.implementation === E.implementation
                  ) {
                    (n(S, _.sibling), (_ = l(_, E.children || [])), (_.return = S), (S = _));
                    break e;
                  } else {
                    n(S, _);
                    break;
                  }
                else t(S, _);
                _ = _.sibling;
              }
              ((_ = ts(E, S.mode, A)), (_.return = S), (S = _));
            }
            return u(S);
          case Fe:
            return ((le = E._init), We(S, _, le(E._payload), A));
        }
        if (Xt(E)) return $(S, _, E, A);
        if (ne(E)) return G(S, _, E, A);
        Rl(S, E);
      }
      return (typeof E == 'string' && E !== '') || typeof E == 'number'
        ? ((E = '' + E),
          _ !== null && _.tag === 6
            ? (n(S, _.sibling), (_ = l(_, E)), (_.return = S), (S = _))
            : (n(S, _), (_ = es(E, S.mode, A)), (_.return = S), (S = _)),
          u(S))
        : n(S, _);
    }
    return We;
  }
  var lr = $a(!0),
    Ka = $a(!1),
    Dl = sn(null),
    zl = null,
    or = null,
    ci = null;
  function fi() {
    ci = or = zl = null;
  }
  function di(e) {
    var t = Dl.current;
    (je(Dl), (e._currentValue = t));
  }
  function pi(e, t, n) {
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
  function ir(e, t) {
    ((zl = e),
      (ci = or = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (st = !0), (e.firstContext = null)));
  }
  function wt(e) {
    var t = e._currentValue;
    if (ci !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), or === null)) {
        if (zl === null) throw Error(i(308));
        ((or = e), (zl.dependencies = { lanes: 0, firstContext: e }));
      } else or = or.next = e;
    return t;
  }
  var jn = null;
  function mi(e) {
    jn === null ? (jn = [e]) : jn.push(e);
  }
  function Ga(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), mi(t)) : ((n.next = l.next), (l.next = n)),
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
  var cn = !1;
  function hi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ya(e, t) {
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
  function fn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (we & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Ut(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), mi(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Ut(e, n)
    );
  }
  function Al(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), To(e, n));
    }
  }
  function Xa(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (o === null ? (l = o = u) : (o = o.next = u), (n = n.next));
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
  function Wl(e, t, n, r) {
    var l = e.updateQueue;
    cn = !1;
    var o = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      m = l.shared.pending;
    if (m !== null) {
      l.shared.pending = null;
      var y = m,
        C = y.next;
      ((y.next = null), u === null ? (o = C) : (u.next = C), (u = y));
      var R = e.alternate;
      R !== null &&
        ((R = R.updateQueue),
        (m = R.lastBaseUpdate),
        m !== u && (m === null ? (R.firstBaseUpdate = C) : (m.next = C), (R.lastBaseUpdate = y)));
    }
    if (o !== null) {
      var D = l.baseState;
      ((u = 0), (R = C = y = null), (m = o));
      do {
        var P = m.lane,
          Q = m.eventTime;
        if ((r & P) === P) {
          R !== null &&
            (R = R.next =
              {
                eventTime: Q,
                lane: 0,
                tag: m.tag,
                payload: m.payload,
                callback: m.callback,
                next: null,
              });
          e: {
            var $ = e,
              G = m;
            switch (((P = t), (Q = n), G.tag)) {
              case 1:
                if ((($ = G.payload), typeof $ == 'function')) {
                  D = $.call(Q, D, P);
                  break e;
                }
                D = $;
                break e;
              case 3:
                $.flags = ($.flags & -65537) | 128;
              case 0:
                if (
                  (($ = G.payload), (P = typeof $ == 'function' ? $.call(Q, D, P) : $), P == null)
                )
                  break e;
                D = H({}, D, P);
                break e;
              case 2:
                cn = !0;
            }
          }
          m.callback !== null &&
            m.lane !== 0 &&
            ((e.flags |= 64), (P = l.effects), P === null ? (l.effects = [m]) : P.push(m));
        } else
          ((Q = {
            eventTime: Q,
            lane: P,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null,
          }),
            R === null ? ((C = R = Q), (y = D)) : (R = R.next = Q),
            (u |= P));
        if (((m = m.next), m === null)) {
          if (((m = l.shared.pending), m === null)) break;
          ((P = m),
            (m = P.next),
            (P.next = null),
            (l.lastBaseUpdate = P),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (R === null && (y = D),
        (l.baseState = y),
        (l.firstBaseUpdate = C),
        (l.lastBaseUpdate = R),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((u |= l.lane), (l = l.next));
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      ((Pn |= u), (e.lanes = u), (e.memoizedState = D));
    }
  }
  function Ja(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != 'function')) throw Error(i(191, l));
          l.call(r);
        }
      }
  }
  var br = {},
    Rt = sn(br),
    Ur = sn(br),
    Br = sn(br);
  function Ln(e) {
    if (e === br) throw Error(i(174));
    return e;
  }
  function vi(e, t) {
    switch ((Ne(Br, t), Ne(Ur, e), Ne(Rt, br), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Oe(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Oe(t, e)));
    }
    (je(Rt), Ne(Rt, t));
  }
  function sr() {
    (je(Rt), je(Ur), je(Br));
  }
  function Za(e) {
    Ln(Br.current);
    var t = Ln(Rt.current),
      n = Oe(t, e.type);
    t !== n && (Ne(Ur, e), Ne(Rt, n));
  }
  function yi(e) {
    Ur.current === e && (je(Rt), je(Ur));
  }
  var Pe = sn(0);
  function Fl(e) {
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
  var gi = [];
  function wi() {
    for (var e = 0; e < gi.length; e++) gi[e]._workInProgressVersionPrimary = null;
    gi.length = 0;
  }
  var Vl = B.ReactCurrentDispatcher,
    _i = B.ReactCurrentBatchConfig,
    Mn = 0,
    Re = null,
    Ue = null,
    Qe = null,
    bl = !1,
    Qr = !1,
    Hr = 0,
    yf = 0;
  function Ze() {
    throw Error(i(321));
  }
  function ki(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!It(e[n], t[n])) return !1;
    return !0;
  }
  function Si(e, t, n, r, l, o) {
    if (
      ((Mn = o),
      (Re = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Vl.current = e === null || e.memoizedState === null ? kf : Sf),
      (e = n(r, l)),
      Qr)
    ) {
      o = 0;
      do {
        if (((Qr = !1), (Hr = 0), 25 <= o)) throw Error(i(301));
        ((o += 1), (Qe = Ue = null), (t.updateQueue = null), (Vl.current = xf), (e = n(r, l)));
      } while (Qr);
    }
    if (
      ((Vl.current = Ql),
      (t = Ue !== null && Ue.next !== null),
      (Mn = 0),
      (Qe = Ue = Re = null),
      (bl = !1),
      t)
    )
      throw Error(i(300));
    return e;
  }
  function xi() {
    var e = Hr !== 0;
    return ((Hr = 0), e);
  }
  function Dt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Qe === null ? (Re.memoizedState = Qe = e) : (Qe = Qe.next = e), Qe);
  }
  function _t() {
    if (Ue === null) {
      var e = Re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ue.next;
    var t = Qe === null ? Re.memoizedState : Qe.next;
    if (t !== null) ((Qe = t), (Ue = e));
    else {
      if (e === null) throw Error(i(310));
      ((Ue = e),
        (e = {
          memoizedState: Ue.memoizedState,
          baseState: Ue.baseState,
          baseQueue: Ue.baseQueue,
          queue: Ue.queue,
          next: null,
        }),
        Qe === null ? (Re.memoizedState = Qe = e) : (Qe = Qe.next = e));
    }
    return Qe;
  }
  function qr(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Ei(e) {
    var t = _t(),
      n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var r = Ue,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        ((l.next = o.next), (o.next = u));
      }
      ((r.baseQueue = l = o), (n.pending = null));
    }
    if (l !== null) {
      ((o = l.next), (r = r.baseState));
      var m = (u = null),
        y = null,
        C = o;
      do {
        var R = C.lane;
        if ((Mn & R) === R)
          (y !== null &&
            (y = y.next =
              {
                lane: 0,
                action: C.action,
                hasEagerState: C.hasEagerState,
                eagerState: C.eagerState,
                next: null,
              }),
            (r = C.hasEagerState ? C.eagerState : e(r, C.action)));
        else {
          var D = {
            lane: R,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null,
          };
          (y === null ? ((m = y = D), (u = r)) : (y = y.next = D), (Re.lanes |= R), (Pn |= R));
        }
        C = C.next;
      } while (C !== null && C !== o);
      (y === null ? (u = r) : (y.next = m),
        It(r, t.memoizedState) || (st = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = y),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((o = l.lane), (Re.lanes |= o), (Pn |= o), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ci(e) {
    var t = _t(),
      n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do ((o = e(o, u.action)), (u = u.next));
      while (u !== l);
      (It(o, t.memoizedState) || (st = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, r];
  }
  function eu() {}
  function tu(e, t) {
    var n = Re,
      r = _t(),
      l = t(),
      o = !It(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (st = !0)),
      (r = r.queue),
      Ii(lu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Qe !== null && Qe.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), $r(9, ru.bind(null, n, r, l, t), void 0, null), He === null))
        throw Error(i(349));
      (Mn & 30) !== 0 || nu(n, t, l);
    }
    return l;
  }
  function nu(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Re.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Re.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ru(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ou(t) && iu(e));
  }
  function lu(e, t, n) {
    return n(function () {
      ou(t) && iu(e);
    });
  }
  function ou(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !It(e, n);
    } catch {
      return !0;
    }
  }
  function iu(e) {
    var t = Ut(e, 1);
    t !== null && Lt(t, e, 1, -1);
  }
  function su(e) {
    var t = Dt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = _f.bind(null, Re, e)),
      [t.memoizedState, e]
    );
  }
  function $r(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Re.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Re.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function au() {
    return _t().memoizedState;
  }
  function Ul(e, t, n, r) {
    var l = Dt();
    ((Re.flags |= e), (l.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function Bl(e, t, n, r) {
    var l = _t();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ue !== null) {
      var u = Ue.memoizedState;
      if (((o = u.destroy), r !== null && ki(r, u.deps))) {
        l.memoizedState = $r(t, n, o, r);
        return;
      }
    }
    ((Re.flags |= e), (l.memoizedState = $r(1 | t, n, o, r)));
  }
  function uu(e, t) {
    return Ul(8390656, 8, e, t);
  }
  function Ii(e, t) {
    return Bl(2048, 8, e, t);
  }
  function cu(e, t) {
    return Bl(4, 2, e, t);
  }
  function fu(e, t) {
    return Bl(4, 4, e, t);
  }
  function du(e, t) {
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
  function pu(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), Bl(4, 4, du.bind(null, t, e), n));
  }
  function Oi() {}
  function mu(e, t) {
    var n = _t();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ki(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function hu(e, t) {
    var n = _t();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ki(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function vu(e, t, n) {
    return (Mn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (st = !0)), (e.memoizedState = n))
      : (It(n, t) || ((n = qs()), (Re.lanes |= n), (Pn |= n), (e.baseState = !0)), t);
  }
  function gf(e, t) {
    var n = Ee;
    ((Ee = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = _i.transition;
    _i.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((Ee = n), (_i.transition = r));
    }
  }
  function yu() {
    return _t().memoizedState;
  }
  function wf(e, t, n) {
    var r = hn(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), gu(e)))
      wu(t, n);
    else if (((n = Ga(e, t, n, r)), n !== null)) {
      var l = rt();
      (Lt(n, e, r, l), _u(n, t, r));
    }
  }
  function _f(e, t, n) {
    var r = hn(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (gu(e)) wu(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var u = t.lastRenderedState,
            m = o(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = m), It(m, u))) {
            var y = t.interleaved;
            (y === null ? ((l.next = l), mi(t)) : ((l.next = y.next), (y.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Ga(e, t, l, r)), n !== null && ((l = rt()), Lt(n, e, r, l), _u(n, t, r)));
    }
  }
  function gu(e) {
    var t = e.alternate;
    return e === Re || (t !== null && t === Re);
  }
  function wu(e, t) {
    Qr = bl = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function _u(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), To(e, n));
    }
  }
  var Ql = {
      readContext: wt,
      useCallback: Ze,
      useContext: Ze,
      useEffect: Ze,
      useImperativeHandle: Ze,
      useInsertionEffect: Ze,
      useLayoutEffect: Ze,
      useMemo: Ze,
      useReducer: Ze,
      useRef: Ze,
      useState: Ze,
      useDebugValue: Ze,
      useDeferredValue: Ze,
      useTransition: Ze,
      useMutableSource: Ze,
      useSyncExternalStore: Ze,
      useId: Ze,
      unstable_isNewReconciler: !1,
    },
    kf = {
      readContext: wt,
      useCallback: function (e, t) {
        return ((Dt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: wt,
      useEffect: uu,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), Ul(4194308, 4, du.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Ul(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ul(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Dt();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var r = Dt();
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
          (e = e.dispatch = wf.bind(null, Re, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Dt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: su,
      useDebugValue: Oi,
      useDeferredValue: function (e) {
        return (Dt().memoizedState = e);
      },
      useTransition: function () {
        var e = su(!1),
          t = e[0];
        return ((e = gf.bind(null, e[1])), (Dt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Re,
          l = Dt();
        if (Le) {
          if (n === void 0) throw Error(i(407));
          n = n();
        } else {
          if (((n = t()), He === null)) throw Error(i(349));
          (Mn & 30) !== 0 || nu(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          uu(lu.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          $r(9, ru.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Dt(),
          t = He.identifierPrefix;
        if (Le) {
          var n = bt,
            r = Vt;
          ((n = (r & ~(1 << (32 - Ct(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = Hr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':'));
        } else ((n = yf++), (t = ':' + t + 'r' + n.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Sf = {
      readContext: wt,
      useCallback: mu,
      useContext: wt,
      useEffect: Ii,
      useImperativeHandle: pu,
      useInsertionEffect: cu,
      useLayoutEffect: fu,
      useMemo: hu,
      useReducer: Ei,
      useRef: au,
      useState: function () {
        return Ei(qr);
      },
      useDebugValue: Oi,
      useDeferredValue: function (e) {
        var t = _t();
        return vu(t, Ue.memoizedState, e);
      },
      useTransition: function () {
        var e = Ei(qr)[0],
          t = _t().memoizedState;
        return [e, t];
      },
      useMutableSource: eu,
      useSyncExternalStore: tu,
      useId: yu,
      unstable_isNewReconciler: !1,
    },
    xf = {
      readContext: wt,
      useCallback: mu,
      useContext: wt,
      useEffect: Ii,
      useImperativeHandle: pu,
      useInsertionEffect: cu,
      useLayoutEffect: fu,
      useMemo: hu,
      useReducer: Ci,
      useRef: au,
      useState: function () {
        return Ci(qr);
      },
      useDebugValue: Oi,
      useDeferredValue: function (e) {
        var t = _t();
        return Ue === null ? (t.memoizedState = e) : vu(t, Ue.memoizedState, e);
      },
      useTransition: function () {
        var e = Ci(qr)[0],
          t = _t().memoizedState;
        return [e, t];
      },
      useMutableSource: eu,
      useSyncExternalStore: tu,
      useId: yu,
      unstable_isNewReconciler: !1,
    };
  function Nt(e, t) {
    if (e && e.defaultProps) {
      ((t = H({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ni(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : H({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Hl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Cn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = rt(),
        l = hn(e),
        o = Bt(r, l);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = fn(e, o, l)),
        t !== null && (Lt(t, e, l, r), Al(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = rt(),
        l = hn(e),
        o = Bt(r, l);
      ((o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = fn(e, o, l)),
        t !== null && (Lt(t, e, l, r), Al(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = rt(),
        r = hn(e),
        l = Bt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = fn(e, l, r)),
        t !== null && (Lt(t, e, r, n), Al(t, e, r)));
    },
  };
  function ku(e, t, n, r, l, o, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, u)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Pr(n, r) || !Pr(l, o)
          : !0
    );
  }
  function Su(e, t, n) {
    var r = !1,
      l = an,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = wt(o))
        : ((l = it(t) ? On : Je.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? er(e, l) : an)),
      (t = new t(n, o)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Hl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function xu(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Hl.enqueueReplaceState(t, t.state, null));
  }
  function Ti(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), hi(e));
    var o = t.contextType;
    (typeof o == 'object' && o !== null
      ? (l.context = wt(o))
      : ((o = it(t) ? On : Je.current), (l.context = er(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == 'function' && (Ni(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((t = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount(),
        t !== l.state && Hl.enqueueReplaceState(l, l.state, null),
        Wl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function ar(e, t) {
    try {
      var n = '',
        r = t;
      do ((n += ve(r)), (r = r.return));
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
  function ji(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Li(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Ef = typeof WeakMap == 'function' ? WeakMap : Map;
  function Eu(e, t, n) {
    ((n = Bt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Jl || ((Jl = !0), (qi = r)), Li(e, t));
      }),
      n
    );
  }
  function Cu(e, t, n) {
    ((n = Bt(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Li(e, t);
        }));
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == 'function' &&
        (n.callback = function () {
          (Li(e, t),
            typeof r != 'function' && (pn === null ? (pn = new Set([this])) : pn.add(this)));
          var u = t.stack;
          this.componentDidCatch(t.value, { componentStack: u !== null ? u : '' });
        }),
      n
    );
  }
  function Iu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Ef();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Wf.bind(null, e, t, n)), t.then(e, e));
  }
  function Ou(e) {
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
  function Nu(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = Bt(-1, 1)), (t.tag = 2), fn(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Cf = B.ReactCurrentOwner,
    st = !1;
  function nt(e, t, n, r) {
    t.child = e === null ? Ka(t, null, n, r) : lr(t, e.child, n, r);
  }
  function Tu(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      ir(t, l),
      (r = Si(e, t, n, r, o, l)),
      (n = xi()),
      e !== null && !st
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Qt(e, t, l))
        : (Le && n && oi(t), (t.flags |= 1), nt(e, t, r, l), t.child)
    );
  }
  function ju(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' &&
        !Zi(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Lu(e, t, o, r, l))
        : ((e = lo(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var u = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Pr), n(u, r) && e.ref === t.ref))
        return Qt(e, t, l);
    }
    return ((t.flags |= 1), (e = yn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Lu(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Pr(o, r) && e.ref === t.ref)
        if (((st = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (st = !0);
        else return ((t.lanes = e.lanes), Qt(e, t, l));
    }
    return Mi(e, t, n, r, l);
  }
  function Mu(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          Ne(cr, ht),
          (ht |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            Ne(cr, ht),
            (ht |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = o !== null ? o.baseLanes : n),
          Ne(cr, ht),
          (ht |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Ne(cr, ht),
        (ht |= r));
    return (nt(e, t, l, n), t.child);
  }
  function Pu(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Mi(e, t, n, r, l) {
    var o = it(n) ? On : Je.current;
    return (
      (o = er(t, o)),
      ir(t, l),
      (n = Si(e, t, n, r, o, l)),
      (r = xi()),
      e !== null && !st
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Qt(e, t, l))
        : (Le && r && oi(t), (t.flags |= 1), nt(e, t, n, l), t.child)
    );
  }
  function Ru(e, t, n, r, l) {
    if (it(n)) {
      var o = !0;
      Tl(t);
    } else o = !1;
    if ((ir(t, l), t.stateNode === null)) ($l(e, t), Su(t, n, r), Ti(t, n, r, l), (r = !0));
    else if (e === null) {
      var u = t.stateNode,
        m = t.memoizedProps;
      u.props = m;
      var y = u.context,
        C = n.contextType;
      typeof C == 'object' && C !== null
        ? (C = wt(C))
        : ((C = it(n) ? On : Je.current), (C = er(t, C)));
      var R = n.getDerivedStateFromProps,
        D = typeof R == 'function' || typeof u.getSnapshotBeforeUpdate == 'function';
      (D ||
        (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof u.componentWillReceiveProps != 'function') ||
        ((m !== r || y !== C) && xu(t, u, r, C)),
        (cn = !1));
      var P = t.memoizedState;
      ((u.state = P),
        Wl(t, r, u, l),
        (y = t.memoizedState),
        m !== r || P !== y || ot.current || cn
          ? (typeof R == 'function' && (Ni(t, n, R, r), (y = t.memoizedState)),
            (m = cn || ku(t, n, m, r, P, y, C))
              ? (D ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = y)),
            (u.props = r),
            (u.state = y),
            (u.context = C),
            (r = m))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1)));
    } else {
      ((u = t.stateNode),
        Ya(e, t),
        (m = t.memoizedProps),
        (C = t.type === t.elementType ? m : Nt(t.type, m)),
        (u.props = C),
        (D = t.pendingProps),
        (P = u.context),
        (y = n.contextType),
        typeof y == 'object' && y !== null
          ? (y = wt(y))
          : ((y = it(n) ? On : Je.current), (y = er(t, y))));
      var Q = n.getDerivedStateFromProps;
      ((R = typeof Q == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
        (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof u.componentWillReceiveProps != 'function') ||
        ((m !== D || P !== y) && xu(t, u, r, y)),
        (cn = !1),
        (P = t.memoizedState),
        (u.state = P),
        Wl(t, r, u, l));
      var $ = t.memoizedState;
      m !== D || P !== $ || ot.current || cn
        ? (typeof Q == 'function' && (Ni(t, n, Q, r), ($ = t.memoizedState)),
          (C = cn || ku(t, n, C, r, P, $, y) || !1)
            ? (R ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(r, $, y),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(r, $, y)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (m === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (m === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = $)),
          (u.props = r),
          (u.state = $),
          (u.context = y),
          (r = C))
        : (typeof u.componentDidUpdate != 'function' ||
            (m === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (m === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Pi(e, t, n, r, o, l);
  }
  function Pi(e, t, n, r, l, o) {
    Pu(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return (l && Fa(t, n, !1), Qt(e, t, o));
    ((r = t.stateNode), (Cf.current = t));
    var m = u && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = lr(t, e.child, null, o)), (t.child = lr(t, null, m, o)))
        : nt(e, t, m, o),
      (t.memoizedState = r.state),
      l && Fa(t, n, !0),
      t.child
    );
  }
  function Du(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Aa(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Aa(e, t.context, !1),
      vi(e, t.containerInfo));
  }
  function zu(e, t, n, r, l) {
    return (rr(), ui(l), (t.flags |= 256), nt(e, t, n, r), t.child);
  }
  var Ri = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Di(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Au(e, t, n) {
    var r = t.pendingProps,
      l = Pe.current,
      o = !1,
      u = (t.flags & 128) !== 0,
      m;
    if (
      ((m = u) || (m = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      m ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      Ne(Pe, l & 1),
      e === null)
    )
      return (
        ai(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((u = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (u = { mode: 'hidden', children: u }),
                (r & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = u))
                  : (o = oo(u, r, 0, null)),
                (e = An(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = Di(n)),
                (t.memoizedState = Ri),
                e)
              : zi(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((m = l.dehydrated), m !== null)))
      return If(e, t, u, r, m, l, n);
    if (o) {
      ((o = r.fallback), (u = t.mode), (l = e.child), (m = l.sibling));
      var y = { mode: 'hidden', children: r.children };
      return (
        (u & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = y), (t.deletions = null))
          : ((r = yn(l, y)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        m !== null ? (o = yn(m, o)) : ((o = An(o, u, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? Di(n)
            : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }),
        (o.memoizedState = u),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ri),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = yn(o, { mode: 'visible', children: r.children })),
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
  function zi(e, t) {
    return (
      (t = oo({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ql(e, t, n, r) {
    return (
      r !== null && ui(r),
      lr(t, e.child, null, n),
      (e = zi(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function If(e, t, n, r, l, o, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = ji(Error(i(422)))), ql(e, t, u, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = oo({ mode: 'visible', children: r.children }, l, 0, null)),
            (o = An(o, l, u, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && lr(t, e.child, null, u),
            (t.child.memoizedState = Di(u)),
            (t.memoizedState = Ri),
            o);
    if ((t.mode & 1) === 0) return ql(e, t, u, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var m = r.dgst;
      return ((r = m), (o = Error(i(419))), (r = ji(o, r, void 0)), ql(e, t, u, r));
    }
    if (((m = (u & e.childLanes) !== 0), st || m)) {
      if (((r = He), r !== null)) {
        switch (u & -u) {
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
        ((l = (l & (r.suspendedLanes | u)) !== 0 ? 0 : l),
          l !== 0 && l !== o.retryLane && ((o.retryLane = l), Ut(e, l), Lt(r, e, l, -1)));
      }
      return (Ji(), (r = ji(Error(i(421)))), ql(e, t, u, r));
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Ff.bind(null, e)), (l._reactRetry = t), null)
      : ((e = o.treeContext),
        (mt = on(l.nextSibling)),
        (pt = t),
        (Le = !0),
        (Ot = null),
        e !== null &&
          ((yt[gt++] = Vt),
          (yt[gt++] = bt),
          (yt[gt++] = Nn),
          (Vt = e.id),
          (bt = e.overflow),
          (Nn = t)),
        (t = zi(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Wu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), pi(e.return, t, n));
  }
  function Ai(e, t, n, r, l) {
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
  function Fu(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((nt(e, t, r.children, n), (r = Pe.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Wu(e, n, t);
          else if (e.tag === 19) Wu(e, n, t);
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
    if ((Ne(Pe, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate), e !== null && Fl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            Ai(t, !1, l, n, o));
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Fl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          Ai(t, !0, n, null, o);
          break;
        case 'together':
          Ai(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function $l(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Qt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Pn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = yn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = yn(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Of(e, t, n) {
    switch (t.tag) {
      case 3:
        (Du(t), rr());
        break;
      case 5:
        Za(t);
        break;
      case 1:
        it(t.type) && Tl(t);
        break;
      case 4:
        vi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (Ne(Dl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Ne(Pe, Pe.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Au(e, t, n)
              : (Ne(Pe, Pe.current & 1), (e = Qt(e, t, n)), e !== null ? e.sibling : null);
        Ne(Pe, Pe.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Fu(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Ne(Pe, Pe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Mu(e, t, n));
    }
    return Qt(e, t, n);
  }
  var Vu, Wi, bu, Uu;
  ((Vu = function (e, t) {
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
    (Wi = function () {}),
    (bu = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), Ln(Rt.current));
        var o = null;
        switch (n) {
          case 'input':
            ((l = En(e, l)), (r = En(e, r)), (o = []));
            break;
          case 'select':
            ((l = H({}, l, { value: void 0 })), (r = H({}, r, { value: void 0 })), (o = []));
            break;
          case 'textarea':
            ((l = Un(e, l)), (r = Un(e, r)), (o = []));
            break;
          default:
            typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Il);
        }
        go(n, r);
        var u;
        n = null;
        for (C in l)
          if (!r.hasOwnProperty(C) && l.hasOwnProperty(C) && l[C] != null)
            if (C === 'style') {
              var m = l[C];
              for (u in m) m.hasOwnProperty(u) && (n || (n = {}), (n[u] = ''));
            } else
              C !== 'dangerouslySetInnerHTML' &&
                C !== 'children' &&
                C !== 'suppressContentEditableWarning' &&
                C !== 'suppressHydrationWarning' &&
                C !== 'autoFocus' &&
                (d.hasOwnProperty(C) ? o || (o = []) : (o = o || []).push(C, null));
        for (C in r) {
          var y = r[C];
          if (
            ((m = l != null ? l[C] : void 0),
            r.hasOwnProperty(C) && y !== m && (y != null || m != null))
          )
            if (C === 'style')
              if (m) {
                for (u in m)
                  !m.hasOwnProperty(u) ||
                    (y && y.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ''));
                for (u in y) y.hasOwnProperty(u) && m[u] !== y[u] && (n || (n = {}), (n[u] = y[u]));
              } else (n || (o || (o = []), o.push(C, n)), (n = y));
            else
              C === 'dangerouslySetInnerHTML'
                ? ((y = y ? y.__html : void 0),
                  (m = m ? m.__html : void 0),
                  y != null && m !== y && (o = o || []).push(C, y))
                : C === 'children'
                  ? (typeof y != 'string' && typeof y != 'number') || (o = o || []).push(C, '' + y)
                  : C !== 'suppressContentEditableWarning' &&
                    C !== 'suppressHydrationWarning' &&
                    (d.hasOwnProperty(C)
                      ? (y != null && C === 'onScroll' && Te('scroll', e), o || m === y || (o = []))
                      : (o = o || []).push(C, y));
        }
        n && (o = o || []).push('style', n);
        var C = o;
        (t.updateQueue = C) && (t.flags |= 4);
      }
    }),
    (Uu = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function Kr(e, t) {
    if (!Le)
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
  function et(e) {
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
  function Nf(e, t, n) {
    var r = t.pendingProps;
    switch ((ii(t), t.tag)) {
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
        return (et(t), null);
      case 1:
        return (it(t.type) && Nl(), et(t), null);
      case 3:
        return (
          (r = t.stateNode),
          sr(),
          je(ot),
          je(Je),
          wi(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Pl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ot !== null && (Gi(Ot), (Ot = null)))),
          Wi(e, t),
          et(t),
          null
        );
      case 5:
        yi(t);
        var l = Ln(Br.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (bu(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(i(166));
            return (et(t), null);
          }
          if (((e = Ln(Rt.current)), Pl(t))) {
            ((r = t.stateNode), (n = t.type));
            var o = t.memoizedProps;
            switch (((r[Pt] = t), (r[Wr] = o), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                (Te('cancel', r), Te('close', r));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Te('load', r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Dr.length; l++) Te(Dr[l], r);
                break;
              case 'source':
                Te('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                (Te('error', r), Te('load', r));
                break;
              case 'details':
                Te('toggle', r);
                break;
              case 'input':
                (rl(r, o), Te('invalid', r));
                break;
              case 'select':
                ((r._wrapperState = { wasMultiple: !!o.multiple }), Te('invalid', r));
                break;
              case 'textarea':
                (ll(r, o), Te('invalid', r));
            }
            (go(n, o), (l = null));
            for (var u in o)
              if (o.hasOwnProperty(u)) {
                var m = o[u];
                u === 'children'
                  ? typeof m == 'string'
                    ? r.textContent !== m &&
                      (o.suppressHydrationWarning !== !0 && Cl(r.textContent, m, e),
                      (l = ['children', m]))
                    : typeof m == 'number' &&
                      r.textContent !== '' + m &&
                      (o.suppressHydrationWarning !== !0 && Cl(r.textContent, m, e),
                      (l = ['children', '' + m]))
                  : d.hasOwnProperty(u) && m != null && u === 'onScroll' && Te('scroll', r);
              }
            switch (n) {
              case 'input':
                (Sn(r), vr(r, o, !0));
                break;
              case 'textarea':
                (Sn(r), K(r));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof o.onClick == 'function' && (r.onclick = Il);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((u = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = pe(n)),
              e === 'http://www.w3.org/1999/xhtml'
                ? n === 'script'
                  ? ((e = u.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                    ? (e = u.createElement(n, { is: r.is }))
                    : ((e = u.createElement(n)),
                      n === 'select' &&
                        ((u = e), r.multiple ? (u.multiple = !0) : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[Pt] = t),
              (e[Wr] = r),
              Vu(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((u = wo(n, r)), n)) {
                case 'dialog':
                  (Te('cancel', e), Te('close', e), (l = r));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (Te('load', e), (l = r));
                  break;
                case 'video':
                case 'audio':
                  for (l = 0; l < Dr.length; l++) Te(Dr[l], e);
                  l = r;
                  break;
                case 'source':
                  (Te('error', e), (l = r));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (Te('error', e), Te('load', e), (l = r));
                  break;
                case 'details':
                  (Te('toggle', e), (l = r));
                  break;
                case 'input':
                  (rl(e, r), (l = En(e, r)), Te('invalid', e));
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = H({}, r, { value: void 0 })),
                    Te('invalid', e));
                  break;
                case 'textarea':
                  (ll(e, r), (l = Un(e, r)), Te('invalid', e));
                  break;
                default:
                  l = r;
              }
              (go(n, l), (m = l));
              for (o in m)
                if (m.hasOwnProperty(o)) {
                  var y = m[o];
                  o === 'style'
                    ? Ls(e, y)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((y = y ? y.__html : void 0), y != null && Me(e, y))
                      : o === 'children'
                        ? typeof y == 'string'
                          ? (n !== 'textarea' || y !== '') && Jt(e, y)
                          : typeof y == 'number' && Jt(e, '' + y)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (d.hasOwnProperty(o)
                            ? y != null && o === 'onScroll' && Te('scroll', e)
                            : y != null && b(e, o, y, u));
                }
              switch (n) {
                case 'input':
                  (Sn(e), vr(e, r, !1));
                  break;
                case 'textarea':
                  (Sn(e), K(e));
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + ge(r.value));
                  break;
                case 'select':
                  ((e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? At(e, !!r.multiple, o, !1)
                      : r.defaultValue != null && At(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = Il);
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
        return (et(t), null);
      case 6:
        if (e && t.stateNode != null) Uu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(i(166));
          if (((n = Ln(Br.current)), Ln(Rt.current), Pl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Pt] = t),
              (o = r.nodeValue !== n) && ((e = pt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Cl(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Cl(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Pt] = t),
              (t.stateNode = r));
        }
        return (et(t), null);
      case 13:
        if (
          (je(Pe),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Le && mt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Ha(), rr(), (t.flags |= 98560), (o = !1));
          else if (((o = Pl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(i(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(i(317));
              o[Pt] = t;
            } else (rr(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (et(t), (o = !1));
          } else (Ot !== null && (Gi(Ot), (Ot = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Pe.current & 1) !== 0 ? Be === 0 && (Be = 3) : Ji())),
            t.updateQueue !== null && (t.flags |= 4),
            et(t),
            null);
      case 4:
        return (sr(), Wi(e, t), e === null && zr(t.stateNode.containerInfo), et(t), null);
      case 10:
        return (di(t.type._context), et(t), null);
      case 17:
        return (it(t.type) && Nl(), et(t), null);
      case 19:
        if ((je(Pe), (o = t.memoizedState), o === null)) return (et(t), null);
        if (((r = (t.flags & 128) !== 0), (u = o.rendering), u === null))
          if (r) Kr(o, !1);
          else {
            if (Be !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = Fl(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Kr(o, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (u = o.alternate),
                      u === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = u.childLanes),
                          (o.lanes = u.lanes),
                          (o.child = u.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = u.memoizedProps),
                          (o.memoizedState = u.memoizedState),
                          (o.updateQueue = u.updateQueue),
                          (o.type = u.type),
                          (e = u.dependencies),
                          (o.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (n = n.sibling));
                  return (Ne(Pe, (Pe.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Ae() > fr &&
              ((t.flags |= 128), (r = !0), Kr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Fl(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Kr(o, !0),
                o.tail === null && o.tailMode === 'hidden' && !u.alternate && !Le)
              )
                return (et(t), null);
            } else
              2 * Ae() - o.renderingStartTime > fr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Kr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = o.last), n !== null ? (n.sibling = u) : (t.child = u), (o.last = u));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Ae()),
            (t.sibling = null),
            (n = Pe.current),
            Ne(Pe, r ? (n & 1) | 2 : n & 1),
            t)
          : (et(t), null);
      case 22:
      case 23:
        return (
          Xi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (ht & 1073741824) !== 0 && (et(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : et(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Tf(e, t) {
    switch ((ii(t), t.tag)) {
      case 1:
        return (
          it(t.type) && Nl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          sr(),
          je(ot),
          je(Je),
          wi(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (yi(t), null);
      case 13:
        if ((je(Pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(i(340));
          rr();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (je(Pe), null);
      case 4:
        return (sr(), null);
      case 10:
        return (di(t.type._context), null);
      case 22:
      case 23:
        return (Xi(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Kl = !1,
    tt = !1,
    jf = typeof WeakSet == 'function' ? WeakSet : Set,
    q = null;
  function ur(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          De(e, t, r);
        }
      else n.current = null;
  }
  function Fi(e, t, n) {
    try {
      n();
    } catch (r) {
      De(e, t, r);
    }
  }
  var Bu = !1;
  function Lf(e, t) {
    if (((Xo = ml), (e = ka()), Bo(e))) {
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
            var u = 0,
              m = -1,
              y = -1,
              C = 0,
              R = 0,
              D = e,
              P = null;
            t: for (;;) {
              for (
                var Q;
                D !== n || (l !== 0 && D.nodeType !== 3) || (m = u + l),
                  D !== o || (r !== 0 && D.nodeType !== 3) || (y = u + r),
                  D.nodeType === 3 && (u += D.nodeValue.length),
                  (Q = D.firstChild) !== null;
              )
                ((P = D), (D = Q));
              for (;;) {
                if (D === e) break t;
                if (
                  (P === n && ++C === l && (m = u),
                  P === o && ++R === r && (y = u),
                  (Q = D.nextSibling) !== null)
                )
                  break;
                ((D = P), (P = D.parentNode));
              }
              D = Q;
            }
            n = m === -1 || y === -1 ? null : { start: m, end: y };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Jo = { focusedElem: e, selectionRange: n }, ml = !1, q = t; q !== null; )
      if (((t = q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (q = e));
      else
        for (; q !== null; ) {
          t = q;
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
                    var G = $.memoizedProps,
                      We = $.memoizedState,
                      S = t.stateNode,
                      _ = S.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? G : Nt(t.type, G),
                        We
                      );
                    S.__reactInternalSnapshotBeforeUpdate = _;
                  }
                  break;
                case 3:
                  var E = t.stateNode.containerInfo;
                  E.nodeType === 1
                    ? (E.textContent = '')
                    : E.nodeType === 9 && E.documentElement && E.removeChild(E.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(i(163));
              }
          } catch (A) {
            De(t, t.return, A);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (q = e));
            break;
          }
          q = t.return;
        }
    return (($ = Bu), (Bu = !1), $);
  }
  function Gr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          ((l.destroy = void 0), o !== void 0 && Fi(t, n, o));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Gl(e, t) {
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
  function Vi(e) {
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
  function Qu(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Qu(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Pt], delete t[Wr], delete t[ni], delete t[pf], delete t[mf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Hu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function qu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Hu(e.return)) return null;
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
  function bi(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = Il)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (bi(e, t, n), e = e.sibling; e !== null; ) (bi(e, t, n), (e = e.sibling));
  }
  function Ui(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ui(e, t, n), e = e.sibling; e !== null; ) (Ui(e, t, n), (e = e.sibling));
  }
  var Ge = null,
    Tt = !1;
  function dn(e, t, n) {
    for (n = n.child; n !== null; ) ($u(e, t, n), (n = n.sibling));
  }
  function $u(e, t, n) {
    if (Mt && typeof Mt.onCommitFiberUnmount == 'function')
      try {
        Mt.onCommitFiberUnmount(al, n);
      } catch {}
    switch (n.tag) {
      case 5:
        tt || ur(n, t);
      case 6:
        var r = Ge,
          l = Tt;
        ((Ge = null),
          dn(e, t, n),
          (Ge = r),
          (Tt = l),
          Ge !== null &&
            (Tt
              ? ((e = Ge),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : Ge.removeChild(n.stateNode)));
        break;
      case 18:
        Ge !== null &&
          (Tt
            ? ((e = Ge),
              (n = n.stateNode),
              e.nodeType === 8 ? ti(e.parentNode, n) : e.nodeType === 1 && ti(e, n),
              Or(e))
            : ti(Ge, n.stateNode));
        break;
      case 4:
        ((r = Ge),
          (l = Tt),
          (Ge = n.stateNode.containerInfo),
          (Tt = !0),
          dn(e, t, n),
          (Ge = r),
          (Tt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!tt && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var o = l,
              u = o.destroy;
            ((o = o.tag),
              u !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Fi(n, t, u),
              (l = l.next));
          } while (l !== r);
        }
        dn(e, t, n);
        break;
      case 1:
        if (!tt && (ur(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (m) {
            De(n, t, m);
          }
        dn(e, t, n);
        break;
      case 21:
        dn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((tt = (r = tt) || n.memoizedState !== null), dn(e, t, n), (tt = r))
          : dn(e, t, n);
        break;
      default:
        dn(e, t, n);
    }
  }
  function Ku(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new jf()),
        t.forEach(function (r) {
          var l = Vf.bind(null, e, r);
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
          var o = e,
            u = t,
            m = u;
          e: for (; m !== null; ) {
            switch (m.tag) {
              case 5:
                ((Ge = m.stateNode), (Tt = !1));
                break e;
              case 3:
                ((Ge = m.stateNode.containerInfo), (Tt = !0));
                break e;
              case 4:
                ((Ge = m.stateNode.containerInfo), (Tt = !0));
                break e;
            }
            m = m.return;
          }
          if (Ge === null) throw Error(i(160));
          ($u(o, u, l), (Ge = null), (Tt = !1));
          var y = l.alternate;
          (y !== null && (y.return = null), (l.return = null));
        } catch (C) {
          De(l, t, C);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Gu(t, e), (t = t.sibling));
  }
  function Gu(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((jt(t, e), zt(e), r & 4)) {
          try {
            (Gr(3, e, e.return), Gl(3, e));
          } catch (G) {
            De(e, e.return, G);
          }
          try {
            Gr(5, e, e.return);
          } catch (G) {
            De(e, e.return, G);
          }
        }
        break;
      case 1:
        (jt(t, e), zt(e), r & 512 && n !== null && ur(n, n.return));
        break;
      case 5:
        if ((jt(t, e), zt(e), r & 512 && n !== null && ur(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Jt(l, '');
          } catch (G) {
            De(e, e.return, G);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            u = n !== null ? n.memoizedProps : o,
            m = e.type,
            y = e.updateQueue;
          if (((e.updateQueue = null), y !== null))
            try {
              (m === 'input' && o.type === 'radio' && o.name != null && hr(l, o), wo(m, u));
              var C = wo(m, o);
              for (u = 0; u < y.length; u += 2) {
                var R = y[u],
                  D = y[u + 1];
                R === 'style'
                  ? Ls(l, D)
                  : R === 'dangerouslySetInnerHTML'
                    ? Me(l, D)
                    : R === 'children'
                      ? Jt(l, D)
                      : b(l, R, D, C);
              }
              switch (m) {
                case 'input':
                  ze(l, o);
                  break;
                case 'textarea':
                  W(l, o);
                  break;
                case 'select':
                  var P = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var Q = o.value;
                  Q != null
                    ? At(l, !!o.multiple, Q, !1)
                    : P !== !!o.multiple &&
                      (o.defaultValue != null
                        ? At(l, !!o.multiple, o.defaultValue, !0)
                        : At(l, !!o.multiple, o.multiple ? [] : '', !1));
              }
              l[Wr] = o;
            } catch (G) {
              De(e, e.return, G);
            }
        }
        break;
      case 6:
        if ((jt(t, e), zt(e), r & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          ((l = e.stateNode), (o = e.memoizedProps));
          try {
            l.nodeValue = o;
          } catch (G) {
            De(e, e.return, G);
          }
        }
        break;
      case 3:
        if ((jt(t, e), zt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Or(t.containerInfo);
          } catch (G) {
            De(e, e.return, G);
          }
        break;
      case 4:
        (jt(t, e), zt(e));
        break;
      case 13:
        (jt(t, e),
          zt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (Hi = Ae())),
          r & 4 && Ku(e));
        break;
      case 22:
        if (
          ((R = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((tt = (C = tt) || R), jt(t, e), (tt = C)) : jt(t, e),
          zt(e),
          r & 8192)
        ) {
          if (
            ((C = e.memoizedState !== null), (e.stateNode.isHidden = C) && !R && (e.mode & 1) !== 0)
          )
            for (q = e, R = e.child; R !== null; ) {
              for (D = q = R; q !== null; ) {
                switch (((P = q), (Q = P.child), P.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Gr(4, P, P.return);
                    break;
                  case 1:
                    ur(P, P.return);
                    var $ = P.stateNode;
                    if (typeof $.componentWillUnmount == 'function') {
                      ((r = P), (n = P.return));
                      try {
                        ((t = r),
                          ($.props = t.memoizedProps),
                          ($.state = t.memoizedState),
                          $.componentWillUnmount());
                      } catch (G) {
                        De(r, n, G);
                      }
                    }
                    break;
                  case 5:
                    ur(P, P.return);
                    break;
                  case 22:
                    if (P.memoizedState !== null) {
                      Ju(D);
                      continue;
                    }
                }
                Q !== null ? ((Q.return = P), (q = Q)) : Ju(D);
              }
              R = R.sibling;
            }
          e: for (R = null, D = e; ; ) {
            if (D.tag === 5) {
              if (R === null) {
                R = D;
                try {
                  ((l = D.stateNode),
                    C
                      ? ((o = l.style),
                        typeof o.setProperty == 'function'
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none'))
                      : ((m = D.stateNode),
                        (y = D.memoizedProps.style),
                        (u = y != null && y.hasOwnProperty('display') ? y.display : null),
                        (m.style.display = js('display', u))));
                } catch (G) {
                  De(e, e.return, G);
                }
              }
            } else if (D.tag === 6) {
              if (R === null)
                try {
                  D.stateNode.nodeValue = C ? '' : D.memoizedProps;
                } catch (G) {
                  De(e, e.return, G);
                }
            } else if (
              ((D.tag !== 22 && D.tag !== 23) || D.memoizedState === null || D === e) &&
              D.child !== null
            ) {
              ((D.child.return = D), (D = D.child));
              continue;
            }
            if (D === e) break e;
            for (; D.sibling === null; ) {
              if (D.return === null || D.return === e) break e;
              (R === D && (R = null), (D = D.return));
            }
            (R === D && (R = null), (D.sibling.return = D.return), (D = D.sibling));
          }
        }
        break;
      case 19:
        (jt(t, e), zt(e), r & 4 && Ku(e));
        break;
      case 21:
        break;
      default:
        (jt(t, e), zt(e));
    }
  }
  function zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Hu(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(i(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Jt(l, ''), (r.flags &= -33));
            var o = qu(e);
            Ui(e, o, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              m = qu(e);
            bi(e, m, u);
            break;
          default:
            throw Error(i(161));
        }
      } catch (y) {
        De(e, e.return, y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Mf(e, t, n) {
    ((q = e), Yu(e));
  }
  function Yu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; q !== null; ) {
      var l = q,
        o = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || Kl;
        if (!u) {
          var m = l.alternate,
            y = (m !== null && m.memoizedState !== null) || tt;
          m = Kl;
          var C = tt;
          if (((Kl = u), (tt = y) && !C))
            for (q = l; q !== null; )
              ((u = q),
                (y = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? Zu(l)
                  : y !== null
                    ? ((y.return = u), (q = y))
                    : Zu(l));
          for (; o !== null; ) ((q = o), Yu(o), (o = o.sibling));
          ((q = l), (Kl = m), (tt = C));
        }
        Xu(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), (q = o)) : Xu(e);
    }
  }
  function Xu(e) {
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
                tt || Gl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !tt)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : Nt(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && Ja(t, o, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Ja(t, u, n);
                }
                break;
              case 5:
                var m = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = m;
                  var y = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      y.autoFocus && n.focus();
                      break;
                    case 'img':
                      y.src && (n.src = y.src);
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
                  var C = t.alternate;
                  if (C !== null) {
                    var R = C.memoizedState;
                    if (R !== null) {
                      var D = R.dehydrated;
                      D !== null && Or(D);
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
                throw Error(i(163));
            }
          tt || (t.flags & 512 && Vi(t));
        } catch (P) {
          De(t, t.return, P);
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
  function Ju(e) {
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
  function Zu(e) {
    for (; q !== null; ) {
      var t = q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Gl(4, t);
            } catch (y) {
              De(t, n, y);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (y) {
                De(t, l, y);
              }
            }
            var o = t.return;
            try {
              Vi(t);
            } catch (y) {
              De(t, o, y);
            }
            break;
          case 5:
            var u = t.return;
            try {
              Vi(t);
            } catch (y) {
              De(t, u, y);
            }
        }
      } catch (y) {
        De(t, t.return, y);
      }
      if (t === e) {
        q = null;
        break;
      }
      var m = t.sibling;
      if (m !== null) {
        ((m.return = t.return), (q = m));
        break;
      }
      q = t.return;
    }
  }
  var Pf = Math.ceil,
    Yl = B.ReactCurrentDispatcher,
    Bi = B.ReactCurrentOwner,
    kt = B.ReactCurrentBatchConfig,
    we = 0,
    He = null,
    Ve = null,
    Ye = 0,
    ht = 0,
    cr = sn(0),
    Be = 0,
    Yr = null,
    Pn = 0,
    Xl = 0,
    Qi = 0,
    Xr = null,
    at = null,
    Hi = 0,
    fr = 1 / 0,
    Ht = null,
    Jl = !1,
    qi = null,
    pn = null,
    Zl = !1,
    mn = null,
    eo = 0,
    Jr = 0,
    $i = null,
    to = -1,
    no = 0;
  function rt() {
    return (we & 6) !== 0 ? Ae() : to !== -1 ? to : (to = Ae());
  }
  function hn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (we & 2) !== 0 && Ye !== 0
        ? Ye & -Ye
        : vf.transition !== null
          ? (no === 0 && (no = qs()), no)
          : ((e = Ee), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ta(e.type))), e);
  }
  function Lt(e, t, n, r) {
    if (50 < Jr) throw ((Jr = 0), ($i = null), Error(i(185)));
    (Sr(e, n, r),
      ((we & 2) === 0 || e !== He) &&
        (e === He && ((we & 2) === 0 && (Xl |= n), Be === 4 && vn(e, Ye)),
        ut(e, r),
        n === 1 && we === 0 && (t.mode & 1) === 0 && ((fr = Ae() + 500), jl && un())));
  }
  function ut(e, t) {
    var n = e.callbackNode;
    h0(e, t);
    var r = fl(e, e === He ? Ye : 0);
    if (r === 0) (n !== null && Bs(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Bs(n), t === 1))
        (e.tag === 0 ? hf(tc.bind(null, e)) : Va(tc.bind(null, e)),
          ff(function () {
            (we & 6) === 0 && un();
          }),
          (n = null));
      else {
        switch ($s(r)) {
          case 1:
            n = Io;
            break;
          case 4:
            n = Qs;
            break;
          case 16:
            n = sl;
            break;
          case 536870912:
            n = Hs;
            break;
          default:
            n = sl;
        }
        n = uc(n, ec.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function ec(e, t) {
    if (((to = -1), (no = 0), (we & 6) !== 0)) throw Error(i(327));
    var n = e.callbackNode;
    if (dr() && e.callbackNode !== n) return null;
    var r = fl(e, e === He ? Ye : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ro(e, r);
    else {
      t = r;
      var l = we;
      we |= 2;
      var o = rc();
      (He !== e || Ye !== t) && ((Ht = null), (fr = Ae() + 500), Dn(e, t));
      do
        try {
          zf();
          break;
        } catch (m) {
          nc(e, m);
        }
      while (!0);
      (fi(), (Yl.current = o), (we = l), Ve !== null ? (t = 0) : ((He = null), (Ye = 0), (t = Be)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Oo(e)), l !== 0 && ((r = l), (t = Ki(e, l)))), t === 1))
        throw ((n = Yr), Dn(e, 0), vn(e, r), ut(e, Ae()), n);
      if (t === 6) vn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Rf(l) &&
            ((t = ro(e, r)),
            t === 2 && ((o = Oo(e)), o !== 0 && ((r = o), (t = Ki(e, o)))),
            t === 1))
        )
          throw ((n = Yr), Dn(e, 0), vn(e, r), ut(e, Ae()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            zn(e, at, Ht);
            break;
          case 3:
            if ((vn(e, r), (r & 130023424) === r && ((t = Hi + 500 - Ae()), 10 < t))) {
              if (fl(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (rt(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = ei(zn.bind(null, e, at, Ht), t);
              break;
            }
            zn(e, at, Ht);
            break;
          case 4:
            if ((vn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - Ct(r);
              ((o = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~o));
            }
            if (
              ((r = l),
              (r = Ae() - r),
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
                            : 1960 * Pf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ei(zn.bind(null, e, at, Ht), r);
              break;
            }
            zn(e, at, Ht);
            break;
          case 5:
            zn(e, at, Ht);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return (ut(e, Ae()), e.callbackNode === n ? ec.bind(null, e) : null);
  }
  function Ki(e, t) {
    var n = Xr;
    return (
      e.current.memoizedState.isDehydrated && (Dn(e, t).flags |= 256),
      (e = ro(e, t)),
      e !== 2 && ((t = at), (at = n), t !== null && Gi(t)),
      e
    );
  }
  function Gi(e) {
    at === null ? (at = e) : at.push.apply(at, e);
  }
  function Rf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!It(o(), l)) return !1;
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
  function vn(e, t) {
    for (
      t &= ~Qi, t &= ~Xl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - Ct(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function tc(e) {
    if ((we & 6) !== 0) throw Error(i(327));
    dr();
    var t = fl(e, 0);
    if ((t & 1) === 0) return (ut(e, Ae()), null);
    var n = ro(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Oo(e);
      r !== 0 && ((t = r), (n = Ki(e, r)));
    }
    if (n === 1) throw ((n = Yr), Dn(e, 0), vn(e, t), ut(e, Ae()), n);
    if (n === 6) throw Error(i(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      zn(e, at, Ht),
      ut(e, Ae()),
      null
    );
  }
  function Yi(e, t) {
    var n = we;
    we |= 1;
    try {
      return e(t);
    } finally {
      ((we = n), we === 0 && ((fr = Ae() + 500), jl && un()));
    }
  }
  function Rn(e) {
    mn !== null && mn.tag === 0 && (we & 6) === 0 && dr();
    var t = we;
    we |= 1;
    var n = kt.transition,
      r = Ee;
    try {
      if (((kt.transition = null), (Ee = 1), e)) return e();
    } finally {
      ((Ee = r), (kt.transition = n), (we = t), (we & 6) === 0 && un());
    }
  }
  function Xi() {
    ((ht = cr.current), je(cr));
  }
  function Dn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), cf(n)), Ve !== null))
      for (n = Ve.return; n !== null; ) {
        var r = n;
        switch ((ii(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Nl());
            break;
          case 3:
            (sr(), je(ot), je(Je), wi());
            break;
          case 5:
            yi(r);
            break;
          case 4:
            sr();
            break;
          case 13:
            je(Pe);
            break;
          case 19:
            je(Pe);
            break;
          case 10:
            di(r.type._context);
            break;
          case 22:
          case 23:
            Xi();
        }
        n = n.return;
      }
    if (
      ((He = e),
      (Ve = e = yn(e.current, null)),
      (Ye = ht = t),
      (Be = 0),
      (Yr = null),
      (Qi = Xl = Pn = 0),
      (at = Xr = null),
      jn !== null)
    ) {
      for (t = 0; t < jn.length; t++)
        if (((n = jn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var u = o.next;
            ((o.next = l), (r.next = u));
          }
          n.pending = r;
        }
      jn = null;
    }
    return e;
  }
  function nc(e, t) {
    do {
      var n = Ve;
      try {
        if ((fi(), (Vl.current = Ql), bl)) {
          for (var r = Re.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          bl = !1;
        }
        if (
          ((Mn = 0),
          (Qe = Ue = Re = null),
          (Qr = !1),
          (Hr = 0),
          (Bi.current = null),
          n === null || n.return === null)
        ) {
          ((Be = 1), (Yr = t), (Ve = null));
          break;
        }
        e: {
          var o = e,
            u = n.return,
            m = n,
            y = t;
          if (
            ((t = Ye),
            (m.flags |= 32768),
            y !== null && typeof y == 'object' && typeof y.then == 'function')
          ) {
            var C = y,
              R = m,
              D = R.tag;
            if ((R.mode & 1) === 0 && (D === 0 || D === 11 || D === 15)) {
              var P = R.alternate;
              P
                ? ((R.updateQueue = P.updateQueue),
                  (R.memoizedState = P.memoizedState),
                  (R.lanes = P.lanes))
                : ((R.updateQueue = null), (R.memoizedState = null));
            }
            var Q = Ou(u);
            if (Q !== null) {
              ((Q.flags &= -257), Nu(Q, u, m, o, t), Q.mode & 1 && Iu(o, C, t), (t = Q), (y = C));
              var $ = t.updateQueue;
              if ($ === null) {
                var G = new Set();
                (G.add(y), (t.updateQueue = G));
              } else $.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Iu(o, C, t), Ji());
                break e;
              }
              y = Error(i(426));
            }
          } else if (Le && m.mode & 1) {
            var We = Ou(u);
            if (We !== null) {
              ((We.flags & 65536) === 0 && (We.flags |= 256), Nu(We, u, m, o, t), ui(ar(y, m)));
              break e;
            }
          }
          ((o = y = ar(y, m)),
            Be !== 4 && (Be = 2),
            Xr === null ? (Xr = [o]) : Xr.push(o),
            (o = u));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var S = Eu(o, y, t);
                Xa(o, S);
                break e;
              case 1:
                m = y;
                var _ = o.type,
                  E = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof _.getDerivedStateFromError == 'function' ||
                    (E !== null &&
                      typeof E.componentDidCatch == 'function' &&
                      (pn === null || !pn.has(E))))
                ) {
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var A = Cu(o, m, t);
                  Xa(o, A);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        oc(n);
      } catch (X) {
        ((t = X), Ve === n && n !== null && (Ve = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function rc() {
    var e = Yl.current;
    return ((Yl.current = Ql), e === null ? Ql : e);
  }
  function Ji() {
    ((Be === 0 || Be === 3 || Be === 2) && (Be = 4),
      He === null || ((Pn & 268435455) === 0 && (Xl & 268435455) === 0) || vn(He, Ye));
  }
  function ro(e, t) {
    var n = we;
    we |= 2;
    var r = rc();
    (He !== e || Ye !== t) && ((Ht = null), Dn(e, t));
    do
      try {
        Df();
        break;
      } catch (l) {
        nc(e, l);
      }
    while (!0);
    if ((fi(), (we = n), (Yl.current = r), Ve !== null)) throw Error(i(261));
    return ((He = null), (Ye = 0), Be);
  }
  function Df() {
    for (; Ve !== null; ) lc(Ve);
  }
  function zf() {
    for (; Ve !== null && !i0(); ) lc(Ve);
  }
  function lc(e) {
    var t = ac(e.alternate, e, ht);
    ((e.memoizedProps = e.pendingProps), t === null ? oc(e) : (Ve = t), (Bi.current = null));
  }
  function oc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Nf(n, t, ht)), n !== null)) {
          Ve = n;
          return;
        }
      } else {
        if (((n = Tf(n, t)), n !== null)) {
          ((n.flags &= 32767), (Ve = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Be = 6), (Ve = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ve = t;
        return;
      }
      Ve = t = e;
    } while (t !== null);
    Be === 0 && (Be = 5);
  }
  function zn(e, t, n) {
    var r = Ee,
      l = kt.transition;
    try {
      ((kt.transition = null), (Ee = 1), Af(e, t, n, r));
    } finally {
      ((kt.transition = l), (Ee = r));
    }
    return null;
  }
  function Af(e, t, n, r) {
    do dr();
    while (mn !== null);
    if ((we & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(i(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = n.lanes | n.childLanes;
    if (
      (v0(e, o),
      e === He && ((Ve = He = null), (Ye = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Zl ||
        ((Zl = !0),
        uc(sl, function () {
          return (dr(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = kt.transition), (kt.transition = null));
      var u = Ee;
      Ee = 1;
      var m = we;
      ((we |= 4),
        (Bi.current = null),
        Lf(e, n),
        Gu(n, e),
        nf(Jo),
        (ml = !!Xo),
        (Jo = Xo = null),
        (e.current = n),
        Mf(n),
        s0(),
        (we = m),
        (Ee = u),
        (kt.transition = o));
    } else e.current = n;
    if (
      (Zl && ((Zl = !1), (mn = e), (eo = l)),
      (o = e.pendingLanes),
      o === 0 && (pn = null),
      c0(n.stateNode),
      ut(e, Ae()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (Jl) throw ((Jl = !1), (e = qi), (qi = null), e);
    return (
      (eo & 1) !== 0 && e.tag !== 0 && dr(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === $i ? Jr++ : ((Jr = 0), ($i = e))) : (Jr = 0),
      un(),
      null
    );
  }
  function dr() {
    if (mn !== null) {
      var e = $s(eo),
        t = kt.transition,
        n = Ee;
      try {
        if (((kt.transition = null), (Ee = 16 > e ? 16 : e), mn === null)) var r = !1;
        else {
          if (((e = mn), (mn = null), (eo = 0), (we & 6) !== 0)) throw Error(i(331));
          var l = we;
          for (we |= 4, q = e.current; q !== null; ) {
            var o = q,
              u = o.child;
            if ((q.flags & 16) !== 0) {
              var m = o.deletions;
              if (m !== null) {
                for (var y = 0; y < m.length; y++) {
                  var C = m[y];
                  for (q = C; q !== null; ) {
                    var R = q;
                    switch (R.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gr(8, R, o);
                    }
                    var D = R.child;
                    if (D !== null) ((D.return = R), (q = D));
                    else
                      for (; q !== null; ) {
                        R = q;
                        var P = R.sibling,
                          Q = R.return;
                        if ((Qu(R), R === C)) {
                          q = null;
                          break;
                        }
                        if (P !== null) {
                          ((P.return = Q), (q = P));
                          break;
                        }
                        q = Q;
                      }
                  }
                }
                var $ = o.alternate;
                if ($ !== null) {
                  var G = $.child;
                  if (G !== null) {
                    $.child = null;
                    do {
                      var We = G.sibling;
                      ((G.sibling = null), (G = We));
                    } while (G !== null);
                  }
                }
                q = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && u !== null) ((u.return = o), (q = u));
            else
              e: for (; q !== null; ) {
                if (((o = q), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gr(9, o, o.return);
                  }
                var S = o.sibling;
                if (S !== null) {
                  ((S.return = o.return), (q = S));
                  break e;
                }
                q = o.return;
              }
          }
          var _ = e.current;
          for (q = _; q !== null; ) {
            u = q;
            var E = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && E !== null) ((E.return = u), (q = E));
            else
              e: for (u = _; q !== null; ) {
                if (((m = q), (m.flags & 2048) !== 0))
                  try {
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gl(9, m);
                    }
                  } catch (X) {
                    De(m, m.return, X);
                  }
                if (m === u) {
                  q = null;
                  break e;
                }
                var A = m.sibling;
                if (A !== null) {
                  ((A.return = m.return), (q = A));
                  break e;
                }
                q = m.return;
              }
          }
          if (((we = l), un(), Mt && typeof Mt.onPostCommitFiberRoot == 'function'))
            try {
              Mt.onPostCommitFiberRoot(al, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((Ee = n), (kt.transition = t));
      }
    }
    return !1;
  }
  function ic(e, t, n) {
    ((t = ar(n, t)),
      (t = Eu(e, t, 1)),
      (e = fn(e, t, 1)),
      (t = rt()),
      e !== null && (Sr(e, 1, t), ut(e, t)));
  }
  function De(e, t, n) {
    if (e.tag === 3) ic(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ic(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (pn === null || !pn.has(r)))
          ) {
            ((e = ar(n, e)),
              (e = Cu(t, e, 1)),
              (t = fn(t, e, 1)),
              (e = rt()),
              t !== null && (Sr(t, 1, e), ut(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Wf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = rt()),
      (e.pingedLanes |= e.suspendedLanes & n),
      He === e &&
        (Ye & n) === n &&
        (Be === 4 || (Be === 3 && (Ye & 130023424) === Ye && 500 > Ae() - Hi)
          ? Dn(e, 0)
          : (Qi |= n)),
      ut(e, t));
  }
  function sc(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = cl), (cl <<= 1), (cl & 130023424) === 0 && (cl = 4194304)));
    var n = rt();
    ((e = Ut(e, t)), e !== null && (Sr(e, t, n), ut(e, n)));
  }
  function Ff(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), sc(e, n));
  }
  function Vf(e, t) {
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
        throw Error(i(314));
    }
    (r !== null && r.delete(t), sc(e, n));
  }
  var ac;
  ac = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || ot.current) st = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((st = !1), Of(e, t, n));
        st = (e.flags & 131072) !== 0;
      }
    else ((st = !1), Le && (t.flags & 1048576) !== 0 && ba(t, Ml, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        ($l(e, t), (e = t.pendingProps));
        var l = er(t, Je.current);
        (ir(t, n), (l = Si(null, t, r, e, l, n)));
        var o = xi();
        return (
          (t.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              it(r) ? ((o = !0), Tl(t)) : (o = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              hi(t),
              (l.updater = Hl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Ti(t, r, e, n),
              (t = Pi(null, t, r, !0, o, n)))
            : ((t.tag = 0), Le && o && oi(t), nt(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            ($l(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Uf(r)),
            (e = Nt(r, e)),
            l)
          ) {
            case 0:
              t = Mi(null, t, r, e, n);
              break e;
            case 1:
              t = Ru(null, t, r, e, n);
              break e;
            case 11:
              t = Tu(null, t, r, e, n);
              break e;
            case 14:
              t = ju(null, t, r, Nt(r.type, e), n);
              break e;
          }
          throw Error(i(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Nt(r, l)),
          Mi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Nt(r, l)),
          Ru(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Du(t), e === null)) throw Error(i(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            Ya(e, t),
            Wl(t, r, null, n));
          var u = t.memoizedState;
          if (((r = u.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              ((l = ar(Error(i(423)), t)), (t = zu(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = ar(Error(i(424)), t)), (t = zu(e, t, r, n, l)));
              break e;
            } else
              for (
                mt = on(t.stateNode.containerInfo.firstChild),
                  pt = t,
                  Le = !0,
                  Ot = null,
                  n = Ka(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((rr(), r === l)) {
              t = Qt(e, t, n);
              break e;
            }
            nt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Za(t),
          e === null && ai(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (u = l.children),
          Zo(r, l) ? (u = null) : o !== null && Zo(r, o) && (t.flags |= 32),
          Pu(e, t),
          nt(e, t, u, n),
          t.child
        );
      case 6:
        return (e === null && ai(t), null);
      case 13:
        return Au(e, t, n);
      case 4:
        return (
          vi(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = lr(t, null, r, n)) : nt(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Nt(r, l)),
          Tu(e, t, r, l, n)
        );
      case 7:
        return (nt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (nt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (nt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (u = l.value),
            Ne(Dl, r._currentValue),
            (r._currentValue = u),
            o !== null)
          )
            if (It(o.value, u)) {
              if (o.children === l.children && !ot.current) {
                t = Qt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var m = o.dependencies;
                if (m !== null) {
                  u = o.child;
                  for (var y = m.firstContext; y !== null; ) {
                    if (y.context === r) {
                      if (o.tag === 1) {
                        ((y = Bt(-1, n & -n)), (y.tag = 2));
                        var C = o.updateQueue;
                        if (C !== null) {
                          C = C.shared;
                          var R = C.pending;
                          (R === null ? (y.next = y) : ((y.next = R.next), (R.next = y)),
                            (C.pending = y));
                        }
                      }
                      ((o.lanes |= n),
                        (y = o.alternate),
                        y !== null && (y.lanes |= n),
                        pi(o.return, n, t),
                        (m.lanes |= n));
                      break;
                    }
                    y = y.next;
                  }
                } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((u = o.return), u === null)) throw Error(i(341));
                  ((u.lanes |= n),
                    (m = u.alternate),
                    m !== null && (m.lanes |= n),
                    pi(u, n, t),
                    (u = o.sibling));
                } else u = o.child;
                if (u !== null) u.return = o;
                else
                  for (u = o; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((o = u.sibling), o !== null)) {
                      ((o.return = u.return), (u = o));
                      break;
                    }
                    u = u.return;
                  }
                o = u;
              }
          (nt(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          ir(t, n),
          (l = wt(l)),
          (r = r(l)),
          (t.flags |= 1),
          nt(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = Nt(r, t.pendingProps)), (l = Nt(r.type, l)), ju(e, t, r, l, n));
      case 15:
        return Lu(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Nt(r, l)),
          $l(e, t),
          (t.tag = 1),
          it(r) ? ((e = !0), Tl(t)) : (e = !1),
          ir(t, n),
          Su(t, r, l),
          Ti(t, r, l, n),
          Pi(null, t, r, !0, e, n)
        );
      case 19:
        return Fu(e, t, n);
      case 22:
        return Mu(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function uc(e, t) {
    return Us(e, t);
  }
  function bf(e, t, n, r) {
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
    return new bf(e, t, n, r);
  }
  function Zi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Uf(e) {
    if (typeof e == 'function') return Zi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ae)) return 11;
      if (e === Ce) return 14;
    }
    return 2;
  }
  function yn(e, t) {
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
  function lo(e, t, n, r, l, o) {
    var u = 2;
    if (((r = e), typeof e == 'function')) Zi(e) && (u = 1);
    else if (typeof e == 'string') u = 5;
    else
      e: switch (e) {
        case Z:
          return An(n.children, l, o, t);
        case Y:
          ((u = 8), (l |= 8));
          break;
        case ce:
          return ((e = St(12, n, t, l | 2)), (e.elementType = ce), (e.lanes = o), e);
        case te:
          return ((e = St(13, n, t, l)), (e.elementType = te), (e.lanes = o), e);
        case se:
          return ((e = St(19, n, t, l)), (e.elementType = se), (e.lanes = o), e);
        case Se:
          return oo(n, l, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case ke:
                u = 10;
                break e;
              case ee:
                u = 9;
                break e;
              case ae:
                u = 11;
                break e;
              case Ce:
                u = 14;
                break e;
              case Fe:
                ((u = 16), (r = null));
                break e;
            }
          throw Error(i(130, e == null ? e : typeof e, ''));
      }
    return ((t = St(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
  }
  function An(e, t, n, r) {
    return ((e = St(7, e, r, t)), (e.lanes = n), e);
  }
  function oo(e, t, n, r) {
    return (
      (e = St(22, e, r, t)),
      (e.elementType = Se),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function es(e, t, n) {
    return ((e = St(6, e, null, t)), (e.lanes = n), e);
  }
  function ts(e, t, n) {
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
  function Bf(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = No(0)),
      (this.expirationTimes = No(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = No(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function ns(e, t, n, r, l, o, u, m, y) {
    return (
      (e = new Bf(e, t, n, m, y)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = St(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      hi(o),
      e
    );
  }
  function Qf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: fe,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function cc(e) {
    if (!e) return an;
    e = e._reactInternals;
    e: {
      if (Cn(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (it(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (it(n)) return Wa(e, n, t);
    }
    return t;
  }
  function fc(e, t, n, r, l, o, u, m, y) {
    return (
      (e = ns(n, r, !0, e, l, o, u, m, y)),
      (e.context = cc(null)),
      (n = e.current),
      (r = rt()),
      (l = hn(n)),
      (o = Bt(r, l)),
      (o.callback = t ?? null),
      fn(n, o, l),
      (e.current.lanes = l),
      Sr(e, l, r),
      ut(e, r),
      e
    );
  }
  function io(e, t, n, r) {
    var l = t.current,
      o = rt(),
      u = hn(l);
    return (
      (n = cc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Bt(o, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = fn(l, t, u)),
      e !== null && (Lt(e, l, u, o), Al(e, l, u)),
      u
    );
  }
  function so(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function dc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function rs(e, t) {
    (dc(e, t), (e = e.alternate) && dc(e, t));
  }
  function Hf() {
    return null;
  }
  var pc =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ls(e) {
    this._internalRoot = e;
  }
  ((ao.prototype.render = ls.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      io(e, t, null, null);
    }),
    (ao.prototype.unmount = ls.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Rn(function () {
            io(null, e, null, null);
          }),
            (t[Wt] = null));
        }
      }));
  function ao(e) {
    this._internalRoot = e;
  }
  ao.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ys();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < nn.length && t !== 0 && t < nn[n].priority; n++);
      (nn.splice(n, 0, e), n === 0 && Zs(e));
    }
  };
  function os(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function uo(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function mc() {}
  function qf(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var C = so(u);
          o.call(C);
        };
      }
      var u = fc(t, r, e, 0, null, !1, !1, '', mc);
      return (
        (e._reactRootContainer = u),
        (e[Wt] = u.current),
        zr(e.nodeType === 8 ? e.parentNode : e),
        Rn(),
        u
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var m = r;
      r = function () {
        var C = so(y);
        m.call(C);
      };
    }
    var y = ns(e, 0, !1, null, null, !1, !1, '', mc);
    return (
      (e._reactRootContainer = y),
      (e[Wt] = y.current),
      zr(e.nodeType === 8 ? e.parentNode : e),
      Rn(function () {
        io(t, y, n, r);
      }),
      y
    );
  }
  function co(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof l == 'function') {
        var m = l;
        l = function () {
          var y = so(u);
          m.call(y);
        };
      }
      io(t, u, e, l);
    } else u = qf(n, t, e, l, r);
    return so(u);
  }
  ((Ks = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = kr(t.pendingLanes);
          n !== 0 && (To(t, n | 1), ut(t, Ae()), (we & 6) === 0 && ((fr = Ae() + 500), un()));
        }
        break;
      case 13:
        (Rn(function () {
          var r = Ut(e, 1);
          if (r !== null) {
            var l = rt();
            Lt(r, e, 1, l);
          }
        }),
          rs(e, 1));
    }
  }),
    (jo = function (e) {
      if (e.tag === 13) {
        var t = Ut(e, 134217728);
        if (t !== null) {
          var n = rt();
          Lt(t, e, 134217728, n);
        }
        rs(e, 134217728);
      }
    }),
    (Gs = function (e) {
      if (e.tag === 13) {
        var t = hn(e),
          n = Ut(e, t);
        if (n !== null) {
          var r = rt();
          Lt(n, e, t, r);
        }
        rs(e, t);
      }
    }),
    (Ys = function () {
      return Ee;
    }),
    (Xs = function (e, t) {
      var n = Ee;
      try {
        return ((Ee = e), t());
      } finally {
        Ee = n;
      }
    }),
    (So = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((ze(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Ol(r);
                if (!l) throw Error(i(90));
                (xt(r), ze(r, l));
              }
            }
          }
          break;
        case 'textarea':
          W(e, n);
          break;
        case 'select':
          ((t = n.value), t != null && At(e, !!n.multiple, t, !1));
      }
    }),
    (Ds = Yi),
    (zs = Rn));
  var $f = { usingClientEntryPoint: !1, Events: [Fr, Jn, Ol, Ps, Rs, Yi] },
    Zr = {
      findFiberByHostInstance: In,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    Kf = {
      bundleType: Zr.bundleType,
      version: Zr.version,
      rendererPackageName: Zr.rendererPackageName,
      rendererConfig: Zr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: B.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Vs(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Zr.findFiberByHostInstance || Hf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fo.isDisabled && fo.supportsFiber)
      try {
        ((al = fo.inject(Kf)), (Mt = fo));
      } catch {}
  }
  return (
    (ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $f),
    (ct.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!os(t)) throw Error(i(200));
      return Qf(e, t, null, n);
    }),
    (ct.createRoot = function (e, t) {
      if (!os(e)) throw Error(i(299));
      var n = !1,
        r = '',
        l = pc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = ns(e, 1, !1, null, null, n, !1, r, l)),
        (e[Wt] = t.current),
        zr(e.nodeType === 8 ? e.parentNode : e),
        new ls(t)
      );
    }),
    (ct.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(i(188))
          : ((e = Object.keys(e).join(',')), Error(i(268, e)));
      return ((e = Vs(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (ct.flushSync = function (e) {
      return Rn(e);
    }),
    (ct.hydrate = function (e, t, n) {
      if (!uo(t)) throw Error(i(200));
      return co(null, e, t, !0, n);
    }),
    (ct.hydrateRoot = function (e, t, n) {
      if (!os(e)) throw Error(i(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        u = pc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = fc(t, null, e, 1, n ?? null, l, !1, o, u)),
        (e[Wt] = t.current),
        zr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new ao(t);
    }),
    (ct.render = function (e, t, n) {
      if (!uo(t)) throw Error(i(200));
      return co(null, e, t, !1, n);
    }),
    (ct.unmountComponentAtNode = function (e) {
      if (!uo(e)) throw Error(i(40));
      return e._reactRootContainer
        ? (Rn(function () {
            co(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Wt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (ct.unstable_batchedUpdates = Yi),
    (ct.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!uo(n)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return co(e, t, n, !1, r);
    }),
    (ct.version = '18.3.1-next-f1338f8080-20240426'),
    ct
  );
}
var Sc;
function nd() {
  if (Sc) return as.exports;
  Sc = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (s) {
        console.error(s);
      }
  }
  return (a(), (as.exports = td()), as.exports);
}
var xc;
function rd() {
  if (xc) return po;
  xc = 1;
  var a = nd();
  return ((po.createRoot = a.createRoot), (po.hydrateRoot = a.hydrateRoot), po);
}
var ld = rd();
const od = JSON.parse(
    `[{"id":"timeframes","type":"preset","presets":[{"id":"next-decade","name":"Focused on next decade (until 2035)","description":"Evaluates projects primarily by their effects over the next decade.","credences":{"equalAll":0,"prioritizeNearer":0,"discountDistant":25,"shortTermOnly":75}},{"id":"next-generations","name":"Focused on next generations (until 2100)","description":"Emphasizes effects on the next few generations, including individuals who do not currently exist.","credences":{"equalAll":20,"prioritizeNearer":50,"discountDistant":30,"shortTermOnly":0}},{"id":"longtermist","name":"Longtermist","description":"Concerned with the longterm future, valuing effects equally regardless of when they occur.","credences":{"equalAll":80,"prioritizeNearer":20,"discountDistant":0,"shortTermOnly":0}}],"worldviewDimension":{"appliesTo":"timeframe","applyAs":"multiplier","options":{"equalAll":{"short":1,"medium":1,"long":1},"prioritizeNearer":{"short":1,"medium":0.5,"long":0.2},"discountDistant":{"short":1,"medium":0.2,"long":0},"shortTermOnly":{"short":1,"medium":0,"long":0}}},"categoryLabel":"Time Preferences","icon":"clock","previewText":"Short vs. long-term effects","heading":"When evaluating projects, how much consideration do you give to projects' near-term, medium-term, or longer-term effects?","info":"A project's effects play out over different timelines. Some effects, like malaria treatments, might occur right away. Others, like investments in education or infrastructure, could take years to arise. Other effects will arise in the longer run future. When you are evaluating projects, do you give extra weight to effects that will happen sooner (in the next decade) rather than later (decades or even centuries in the future)?\\n\\nThere are several reasons why you might give extra weight to near-term effects. First, you might think it's more morally important to help individuals that currently exist or will exist very soon than it is to help individuals that will potentially exist in the future. Alternatively, even if you think all beings matter equally, regardless of time, you might be so uncertain about a project's long-term effects that you'd rather focus on the more predictable near future. Lastly, you might have beliefs about how the future will go (e.g. that AI will change everything in 10 years) that make you want to just focus on projects whose effects will happen soon.","context":"Consider the following timeframes:\\n\\n- **Short-term:** before 2035\\n- **Medium-term:** from 2035-2100\\n- **Long-term:** after 2100\\n\\nWhich of these positions best describes your view when evaluating the effects of different projects?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Time Preferences","options":[{"key":"shortTermOnly","label":"Short-term only","description":"I only care about effects in the short-term","info":"","panelLabel":"Short","panelShort":"ST","marketplaceValue":[1,1,0,0,0,0]},{"key":"discountDistant","label":"Discount the distant future","description":"I do not care about the distant future. I care a bit about the medium-term, but I put more priority on the short-term","info":"","panelLabel":"Discount","panelShort":">>","marketplaceValue":[1,1,0.2,0.2,0,0]},{"key":"prioritizeNearer","label":"Prioritize nearer term","description":"I care a bit about the long-term future, but I put more priority on the medium-term and even more priority on the short-term","info":"","panelLabel":"Nearer","panelShort":">","marketplaceValue":[1,1,0.5,0.5,0.2,0.2]},{"key":"equalAll","label":"Equal across all timeframes","description":"I only care about how much good I could possibly do, and I don't care whether that good happens in the short-term, medium-term, or long-term","info":"","panelLabel":"Equal","panelShort":"=","marketplaceValue":[1,1,1,1,1,1]}]},{"id":"risk","type":"credence","worldviewDimension":{"appliesWhen":"isDummyRisk","applyAs":"multiplier","options":{"riskNeutral":1,"upsideSkepticism":1,"lossAversion":1,"both":1}},"categoryLabel":"Risk Attitudes","icon":"dice","previewText":"Attitudes toward risk","heading":"Are you averse to taking certain kinds of risks in your philanthropic giving?","info":"The expected value of a project is a weighted average of all the effects that the project might have. Two projects can have the same expected value but otherwise be very different. For example, a \\"safe\\" project may be almost guaranteed to do X amount of good, so its expected value is X. A \\"risky\\" project might have a 1/100 chance of delivering 100 x X amount of good and a 99/100 of doing nothing, so its expected value is also X. A different kind of \\"risky\\" project might have a 1/2 chance of backfiring, creating -X value, and a 1/2 chance of creating 3X value, so its expected value is also X.\\n\\nIf you only care about maximizing expected value, you will treat these projects the same way. However, if you are risk averse, you may dislike one or both of the risky projects. There are a few ways to be risk averse, including:\\n\\n- **Upside skepticism:** you are wary of spending your money on bets that have very small chances of success. You want to focus on what will probably happen, not what will happen in the most optimistic of outcomes.\\n- **Loss aversion:** you want to avoid situations where your money does nothing, and you are even more keen to avoid situations where your actions made things worse. You want to penalize projects that have decent chances of failure or backfire.\\n- **Both skeptical of upsides and averse to losses**","context":"Which of these best describes your perspective:","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Risk Attitudes","options":[{"key":"riskNeutral","label":"Risk neutral","description":"I prefer to invest in options that have the highest expected value, even if they have low success rates or risk of negative outcomes","info":"","panelLabel":"Neutral","panelShort":"EV","marketplaceValue":0},{"key":"upsideSkepticism","label":"Skeptical of optimistic scenarios","description":"I am skeptical of projects' most optimistic scenarios and decide where to give based on scenarios that are more likely to occur","info":"","panelLabel":"Skeptical","panelShort":"S","marketplaceValue":1},{"key":"lossAversion","label":"Avoid losses","description":"I want to avoid losses and am motivated to avoid projects that have significant chances of failure or backfire (even if those projects have high expected value)","info":"","panelLabel":"Loss averse","panelShort":"LA","marketplaceValue":2},{"key":"both","label":"Both skeptical and loss averse","description":"I am both skeptical of projects' most optimistic scenarios and motivated to avoid losses","info":"","panelLabel":"Both","panelShort":"B","marketplaceValue":3}]},{"id":"xrisk","type":"credence","worldviewDimension":{"appliesWhen":"isNonXRisk","applyAs":"multiplier","options":{"evaluateSame":1,"discount10":0.9,"discount50":0.5,"xriskOnly":0}},"categoryLabel":"Existential Risk","icon":"alert-triangle","previewText":"Existential risk priority","heading":"How much do you want to prioritize efforts to mitigate near-term existential risks that demand action in the next several years, compared to other kinds of projects you might fund?","info":"Some projects aim to reduce the chances of an event that poses existential or catastrophic risk (such as an engineered pandemic or AI takeover). If an event like this occurs, then it could severely mitigate the beneficial effects of other kinds of philanthropic projects (such as global health interventions). This can make it hard to compare the value of existential risk mitigation to the value of other projects.\\n\\nIf you think there is a high chance of a catastrophic risk in the near future (say, the next 10 years), then you may think that we need to act now to try to reduce these threats. You may care a lot about the longer-run future and what the world is like decades from now, but you want to prioritize actions now to ensure that humanity is around to enjoy that future.","context":"Do you want to treat near-term existential risk mitigation projects differently than other projects?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"X-Risk Priority","options":[{"key":"evaluateSame","label":"Evaluate the same way","description":"I want to evaluate near-term existential risk projects the same way that I evaluate all other projects (e.g. by calculating their expected effects over the timeline I care about)","info":"","panelLabel":"Same","panelShort":"=","marketplaceValue":0},{"key":"discount10","label":"Discount other projects somewhat","description":"I think there is about a 10% probability that an existential risk occurs in the next decade that renders other projects useless. Therefore, I want to discount the value of these other projects somewhat","info":"","panelLabel":"10% risk","panelShort":"10%","marketplaceValue":0.1},{"key":"discount50","label":"Discount other projects greatly","description":"I think there is about a 50% probability that an existential risk occurs in the next decade that renders other projects useless. Therefore, I want to greatly discount the value of these other projects","info":"","panelLabel":"50% risk","panelShort":"50%","marketplaceValue":0.5},{"key":"xriskOnly","label":"Only x-risk reduction","description":"I only care about reducing near-term existential risk","info":"","panelLabel":"X-risk only","panelShort":"X","marketplaceValue":1}]},{"id":"animal","type":"preset","presets":[{"id":"animal-friendly","name":"Animal friendly view","description":"Emphasizes equal consideration for animal and human suffering.","credences":{"humanEqual":75,"human10x":25,"human100x":0,"human1000x":0,"noValue":0}},{"id":"rethink-priorities","name":"Rethink Priorities default","description":"Based on empirical research on animal welfare ranges, gives animals somewhat lower weight than humans.","credences":{"humanEqual":20,"human10x":50,"human100x":20,"human1000x":10,"noValue":0}},{"id":"animal-skeptic","name":"Animal skeptic view","description":"Gives strong priority to human welfare, based on their unique capacities or our special moral obligations to other humans.","credences":{"humanEqual":0,"human10x":10,"human100x":60,"human1000x":30,"noValue":0}}],"worldviewDimension":{"appliesWhen":"helpsAnimals","applyAs":"multiplier","options":{"humanEqual":0.0172,"human10x":0.00172,"human100x":0.000172,"human1000x":0.0000172,"noValue":0}},"categoryLabel":"Animal Welfare","icon":"paw","previewText":"Animal welfare","heading":"How much do you value reducing suffering in animals compared to reducing suffering in humans?","info":"It can be difficult to compare the value of helping humans versus helping animals. For now, let's consider animals that most people believe are capable of suffering (such as pigs, dogs, or cows) and use chickens as a test case.\\n\\nThere are some conditions that decrease chickens' quality of life, which we can measure in terms of chicken Disability Adjusted Life Years. For example, suppose living in hurtful pain for a year reduces a chicken's quality of life by 25%. Therefore, if we improve a chicken's living conditions to relieve this suffering, this would result in a gain of 0.25 chicken DALYs. Likewise, some human conditions reduce a human's quality of life by 25%, so relieving this for a year would result in 0.25 human DALYs.\\n\\nHow much do you value chicken DALYs versus human DALYs? In other words, how much do you care about a quality of life reduction in chickens compared to a similar proportional quality of life reduction in humans? Note that there are a few different reasons you might give chicken DALYs lower weight. Perhaps you think a 25% reduction in a chicken's quality of life involves less suffering (or loss of meaningful experiences) than a 25% reduction in a human's quality of life. Alternatively, you could think the amount of suffering is the same, but you think it is morally more important to alleviate human suffering.","context":"For this question, we'll focus on familiar farmed animals—chickens, pigs, and cows—that most people agree can experience pain and distress.\\n\\nWhich of these positions best describes your view?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Animal Welfare Weights","options":[{"key":"humanEqual","label":"Equal to humans","description":"I treat a year of disability in an animal the same as a year of disability in a human","info":"","panelLabel":"Equal","panelShort":"=","marketplaceValue":1},{"key":"human10x","label":"10x less than humans","description":"I value a human year of disability about 10x as much as a year of disability in an animal","info":"","panelLabel":"10x less","panelShort":"10x","marketplaceValue":0.1},{"key":"human100x","label":"100x less than humans","description":"I value a human year of disability about 100x as much as a year of disability in an animal","info":"","panelLabel":"100x less","panelShort":"100x","marketplaceValue":0.01},{"key":"human1000x","label":"1000x less than humans","description":"I value a human year of disability about 1000x as much as a year of disability in an animal","info":"","panelLabel":"1000x less","panelShort":"1kx","marketplaceValue":0.001},{"key":"noValue","label":"No value","description":"I do not value animal welfare","info":"","panelLabel":"None","panelShort":"0","marketplaceValue":0}]},{"id":"invertebrate","type":"preset","presets":[{"id":"invertebrate-friendly","name":"Invertebrate friendly view","description":"Emphasizes roughly equal consideration for invertebrate and human suffering, tempered by uncertainty about invertebrate sentience.","credences":{"humanEqual":40,"human100x":40,"human1000x":20,"human10000x":0,"noValue":0}},{"id":"rethink-priorities","name":"Rethink Priorities default","description":"Based on empirical research on animal welfare ranges and likelihoods of invertebrate sentience, gives animals significantly lower weight than humans.","credences":{"humanEqual":10,"human100x":40,"human1000x":30,"human10000x":10,"noValue":10}},{"id":"invertebrate-skeptic","name":"Invertebrate skeptic view","description":"Gives strong priority to human welfare, highly skeptical about invertebrates' capacity for welfare.","credences":{"humanEqual":0,"human100x":0,"human1000x":10,"human10000x":40,"noValue":50}}],"worldviewDimension":{"appliesWhen":"helpsInvertebrates","applyAs":"multiplier","options":{"humanEqual":0.0172,"human100x":0.000172,"human1000x":0.0000172,"human10000x":0.00000172,"noValue":0}},"categoryLabel":"Invertebrate Welfare","icon":"shell","previewText":"Invertebrate welfare","heading":"How much do you care about reducing the suffering of shrimp (or other small, less understood farmed invertebrates), compared to reducing the suffering of humans?","info":"It can be difficult to compare the value of helping humans versus helping animals. This is even more difficult when we are uncertain whether the animals even have conscious experiences or what their experiences are like. For now, let's consider farmed invertebrates (such as shrimp or insects) and use shrimp as a test case.\\n\\nShrimp may experience conditions that reduce their quality of life. Assuming they are sentient, we can characterize their loss of quality of life via a shrimp DALY. How much do you value shrimp DALYs versus human DALYs? Note that there are three different reasons you might give shrimp DALYs lower weight. Perhaps you think a 25% reduction in a shrimp's quality of life involves less suffering (or loss of meaningful experiences) than a 25% reduction in a human's quality of life. Alternatively, you could think the amount of suffering is the same, but you think it is morally more important to alleviate human suffering. Lastly, you could doubt that shrimp are sentient and therefore doubt that they can suffer.","context":"Which of these positions best describes your view?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Invertebrate Weights","options":[{"key":"humanEqual","label":"Equal to humans","description":"I treat a year of disability in shrimp the same as a year of disability in a human","info":"","panelLabel":"Equal","panelShort":"=","marketplaceValue":1},{"key":"human100x","label":"100x less than humans","description":"I value a human year of disability about 100x as much as a year of disability in a shrimp","info":"","panelLabel":"100x less","panelShort":"100x","marketplaceValue":0.01},{"key":"human1000x","label":"1000x less than humans","description":"I value a human year of disability about 1000x as much as a year of disability in a shrimp","info":"","panelLabel":"1000x less","panelShort":"1kx","marketplaceValue":0.001},{"key":"human10000x","label":"10,000x less than humans","description":"I value a human year of disability about 10,000x as much as a year of disability in a shrimp","info":"","panelLabel":"10kx less","panelShort":"10kx","marketplaceValue":0.0001},{"key":"noValue","label":"No value","description":"I do not value shrimp welfare","info":"","panelLabel":"None","panelShort":"0","marketplaceValue":0}]},{"id":"disability","type":"preset","presets":[{"id":"prioritize-lives","name":"Prioritize saving lives","description":"Places more emphasis on preventing deaths than relieving suffering from non-fatal diseases and disabilities.","credences":{"livesOnly":25,"livesMore":75,"equal":0,"disabilityMore":0}},{"id":"equal-weight","name":"Equal weight","description":"Values saving lives the same as restoring quality of life lost to disability. Similar to GiveWell's moral weights.","credences":{"livesOnly":0,"livesMore":0,"equal":100,"disabilityMore":0}},{"id":"prioritize-quality","name":"Prioritize improving quality of life","description":"Places more emphasis on relieving suffering due to disease and disability, instead of saving lives.","credences":{"livesOnly":0,"livesMore":0,"equal":25,"disabilityMore":75}}],"worldviewDimension":{"appliesWhen":"preventsDisability","applyAs":"multiplier","options":{"livesOnly":0,"livesMore":0.003,"equal":0.0172,"disabilityMore":0.086}},"categoryLabel":"Disability Weights","icon":"heart-pulse","previewText":"Disability vs. saving lives","heading":"When you think about helping people, how do you weigh saving lives against making people's existing lives better by reducing disease or disability?","info":"Here's an example that may help you think through your options. Suppose that living with blindness reduces someone's quality of life by 25%. You could either choose to cure blindness in a group of people, restoring them to full health for some number of years. Or you could save a child's life, giving them 50 extra years to live. How many years of blindness would you need to relieve to make it as good as saving the one child's life?\\n\\nSome charitable projects save lives—preventing people from dying. Others relieve suffering from diseases or disabilities that aren't fatal but significantly reduce quality of life.\\n\\n**How we measure this:** We can estimate how much a disease or disability reduces someone's quality of life (estimates typically come from the [Global Burden of Disease](https://www.healthdata.org/research-analysis/gbd)). For example:\\n\\n- **Clubfoot** might reduce quality of life by 20%\\n- **Blindness** might reduce quality of life by 25%\\n- **Severe multiple sclerosis** might reduce quality of life by 75%\\n\\nIf a charity treats someone's blindness for 10 years, that's like restoring 2.5 \\"full-health years\\" (10 years × 25% improvement). If a charity corrects an infant's clubfeet and prevents them from suffering from 60 years of that condition, that's like restoring 12 full health years. We call these recovered years \\"disability-adjusted life years\\" or DALYs.","context":"Imagine you must choose between two projects:\\n\\n- **Project A:** Save one child's life, giving them 50 additional years to live\\n- **Project B:** Cure or treat a serious disability for multiple people, restoring some number of \\"full-health years\\"\\n\\nHow many years of disability would you need to relieve to make it as good as saving the one child's life?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Disability Weights","options":[{"key":"livesOnly","label":"Saving lives only","description":"I only care about saving years of life due to death","info":"","panelLabel":"Lives only","panelShort":"0","marketplaceValue":0},{"key":"livesMore","label":"More weight on saving lives","description":"I put 5x as much value on saving a year of life lost to death than a year of life lost to disability","info":"I'd need to prevent 1000 years of blindness to equal saving 50 years of life.","panelLabel":"5x lives","panelShort":"5xL","marketplaceValue":0.003},{"key":"equal","label":"Equal weight for saving lives and relieving disabilities","description":"I value a year of life lost equally, whether it is due to death or disability","info":"I'd need to prevent 200 years of blindness to equal saving 50 years of life. For comparison, this is the weight given to disability by GiveWell.","panelLabel":"Equal","panelShort":"=","marketplaceValue":0.0172},{"key":"disabilityMore","label":"More weight on relieving disability","description":"I put 5x as much value on saving a year of life lost to disability than a year of life lost to death","info":"I'd need to prevent 40 years of blindness to equal saving 50 years of life.","panelLabel":"5x disability","panelShort":"5xD","marketplaceValue":0.086}]},{"id":"income","type":"preset","presets":[{"id":"prioritize-lives","name":"Prioritize saving lives","description":"Places much more emphasis on preventing deaths than improving material conditions for people living in poverty.","credences":{"livesOnly":25,"lives10x":75,"lives2x":0,"equal":0}},{"id":"balanced","name":"Balanced","description":"Gives more weight to saving lives than improving incomes, but cares about both goals. Similar to GiveWell's moral weights.","credences":{"livesOnly":0,"lives10x":25,"lives2x":75,"equal":0}},{"id":"poverty-relief","name":"Poverty relief","description":"Prioritizes poverty relief as highly as saving lives.","credences":{"livesOnly":0,"lives10x":0,"lives2x":25,"equal":75}}],"worldviewDimension":{"appliesWhen":"increasesIncome","applyAs":"multiplier","options":{"livesOnly":0,"lives10x":0.0017,"lives2x":0.0086,"equal":0.0172}},"categoryLabel":"Income Weights","icon":"banknote","previewText":"Income vs. saving lives","heading":"When you think about helping people, how do you weigh saving lives against increasing people's income, allowing them to improve their material quality of life?","info":"Here's an example that might help you think through your options. Suppose that you could make direct cash transfers that would double incomes for a group of people for a year. The same amount of money would save one child's life, giving them an extra 50 years to live. How many people's incomes would you have to double to make that option as good as saving the one child's life?","context":"**Imagine this scenario:** You could either:\\n\\n- **Option A:** Add one year of life to someone who would otherwise die\\n- **Option B:** Double someone's income for one year, significantly improving their material circumstances\\n\\nHow much do you value doubling someone's income for a year compared to adding one year to someone's life?","instructionsOptions":"Choose the view that best represents your position.","instructionsSliders":"Distribute your credence across these views. Sliders auto-balance to 100%.","editPanelTitle":"Income Weights","options":[{"key":"livesOnly","label":"Saving lives only","description":"I only care about adding years of life","info":"","panelLabel":"Lives only","panelShort":"0","marketplaceValue":0},{"key":"lives10x","label":"Much more weight on a year of life","description":"I put 10x as much value on a year of life compared to a year of doubled income","info":"I would need to double yearly income for 500 people to equal saving 50 years of life.","panelLabel":"10x lives","panelShort":"10x","marketplaceValue":0.0017},{"key":"lives2x","label":"Some more weight on a year of life","description":"I put 2x as much value on a year of life compared to a year of doubled income","info":"I would need to double yearly income for 100 people to equal saving 50 years of life. This is comparable to (but slightly higher than) the weight that GiveWell assigns to a year of income doubling compared to saving a year of life.","panelLabel":"2x lives","panelShort":"2x","marketplaceValue":0.0086},{"key":"equal","label":"Equal weight","description":"I put the same value on a year of life compared to a year of doubled income","info":"I would need to double yearly income for 50 people to equal saving 50 years of life.","panelLabel":"Equal","panelShort":"=","marketplaceValue":0.0172}]}]`
  ),
  nl = { questions: od },
  id = 'extreme',
  sd = {
    malaria_nets: {
      name: 'Malaria Prevention',
      color: '#5eb3d4',
      points: 100,
      scaleFactor: 1,
      preventsDisability: !0,
      increasesIncome: !0,
      helpsAnimals: !1,
      helpsInvertebrates: !1,
      timeframe: 'short',
      isNonXRisk: !0,
      isDummyRisk: !0,
    },
    cage_free_campaigns: {
      name: 'Cage-Free Campaigns',
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
    shrimp_welfare: {
      name: 'Shrimp Welfare',
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
    wild_animal_welfare: {
      name: 'Wild Animal Welfare',
      color: '#27ae60',
      points: 100,
      scaleFactor: 1,
      preventsDisability: !1,
      increasesIncome: !1,
      helpsAnimals: !0,
      helpsInvertebrates: !1,
      timeframe: 'medium',
      isNonXRisk: !0,
      isDummyRisk: !0,
    },
    fish_welfare: {
      name: 'Fish Welfare',
      color: '#d4a25e',
      points: 100,
      scaleFactor: 1,
      preventsDisability: !1,
      increasesIncome: !1,
      helpsAnimals: !0,
      helpsInvertebrates: !1,
      timeframe: 'short',
      isNonXRisk: !0,
      isDummyRisk: !0,
    },
    ai_safety_policy: {
      name: 'AI Safety & Policy',
      color: '#9b5de5',
      points: 100,
      scaleFactor: 1,
      preventsDisability: !1,
      increasesIncome: !1,
      helpsAnimals: !1,
      helpsInvertebrates: !1,
      timeframe: 'long',
      isLongTerm: !0,
      isNonXRisk: !1,
      isDummyRisk: !0,
    },
  },
  ad = { livesOnly: 25, livesMore: 25, equal: 25, disabilityMore: 25 },
  Es = { diminishingReturns: id, causes: sd, defaultCredences: ad },
  ud = !1,
  cd = { sliderLock: !0 },
  fd = {
    order: ['moralMarketplace', 'mergedFavorites', 'maxEV', 'parliament', 'maximin'],
    showMoralMarketplace: !0,
    showMergedFavorites: !0,
    showMaxEV: !0,
    showParliament: !1,
    showMaximin: !1,
    sideBySideComparison: !0,
  },
  mo = { advanced: ud, ui: cd, calculations: fd },
  Kt = {
    SESSION_ID: 'quiz_session_id',
    QUIZ_STATE: 'quiz_state',
    SKIP_CONFLICT: 'quiz_skip_conflict',
  },
  Rc = 7;
function dd() {
  let a = sessionStorage.getItem(Kt.SESSION_ID);
  return (a || ((a = crypto.randomUUID()), sessionStorage.setItem(Kt.SESSION_ID, a)), a);
}
function pd(a) {
  const {
      currentStep: s,
      worldviews: i,
      activeWorldviewId: c,
      selectedCalculations: d,
      worldviewNames: f,
      marketplaceBudget: p,
    } = a,
    w = {};
  for (const [g, v] of Object.entries(i)) {
    const x = {};
    for (const [O, N] of Object.entries(v.questions))
      x[O] = {
        credences: N.credences,
        originalCredences: N.originalCredences,
        inputMode: N.inputMode,
        lockedKeys: N.lockedKeys,
        selectedPreset: N.selectedPreset,
      };
    w[g] = { questions: x, completed: v.completed || !1 };
  }
  const h = {
    version: Rc,
    state: {
      currentStep: s,
      worldviews: w,
      activeWorldviewId: c,
      selectedCalculations: d,
      worldviewNames: f,
      marketplaceBudget: p,
    },
  };
  sessionStorage.setItem(Kt.QUIZ_STATE, JSON.stringify(h));
}
function Wn() {
  const a = sessionStorage.getItem(Kt.QUIZ_STATE);
  if (!a) return null;
  try {
    const s = JSON.parse(a);
    return s.version !== Rc ? (pr(), null) : s.state;
  } catch {
    return (pr(), null);
  }
}
function Ec() {
  return sessionStorage.getItem(Kt.QUIZ_STATE) !== null;
}
function pr() {
  sessionStorage.removeItem(Kt.QUIZ_STATE);
}
function md() {
  sessionStorage.setItem(Kt.SKIP_CONFLICT, 'true');
}
function Cc() {
  const a = sessionStorage.getItem(Kt.SKIP_CONFLICT) === 'true';
  return (a && sessionStorage.removeItem(Kt.SKIP_CONFLICT), a);
}
const hd = '/api',
  vd = { share: `${hd}/share` },
  { questions: yd } = nl;
function gd() {
  return yd
    .filter((a) => a.type !== 'intermission' && a.options)
    .map((a) => ({ id: a.id, optionKeys: a.options.map((s) => s.key) }));
}
function Ic(a) {
  const s = gd(),
    i = new Set(s.map((p) => p.id)),
    d = Object.keys(a).filter((p) => !i.has(p)),
    f = s.filter((p) => !a[p.id]);
  return d.length > 0 || f.length > 0
    ? { valid: !1, error: 'Quiz has changed since this link was created' }
    : { valid: !0 };
}
async function wd(a) {
  try {
    const s = await fetch(`${vd.share}?id=${encodeURIComponent(a)}`);
    if (!s.ok) {
      if (s.status === 404) return null;
      throw new Error('Failed to fetch share data');
    }
    return await s.json();
  } catch {
    return null;
  }
}
function vs() {
  const a = window.location.hash;
  if (a.startsWith('#s=')) {
    const s = a.slice(3);
    return s ? { hasShare: !0, id: s } : { hasShare: !1 };
  }
  return { hasShare: !1 };
}
function _d(a) {
  const s = {};
  for (const [i, c] of Object.entries(a))
    s[i] = { credences: c, inputMode: 'options', lockedKeys: [] };
  return s;
}
async function Oc() {
  const a = vs();
  if (!a.hasShare) return null;
  const s = await wd(a.id);
  if (!s) return { error: 'This share link has expired or no longer exists' };
  if (s.worldviews && s.activeWorldviewId) {
    for (const d of Object.values(s.worldviews))
      if (d.questions) {
        const f = Ic(d.questions);
        if (!f.valid) return { error: f.error };
      }
    return {
      worldviews: s.worldviews,
      activeWorldviewId: s.activeWorldviewId,
      selectedCalculations: s.selectedCalculations || null,
      worldviewNames: s.worldviewNames || null,
      marketplaceBudget: s.marketplaceBudget || null,
    };
  }
  const i = s.questions || (s.credences && _d(s.credences));
  if (!i) return { error: 'Invalid share data format' };
  const c = Ic(i);
  return c.valid ? { questions: i } : { error: c.error };
}
function wn() {
  window.location.hash &&
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
const ft = 'rgba(255, 255, 255, 0.8)',
  Nc = {
    default: [ft, ft, ft],
    selection: [ft, ft, ft],
    credence: [ft, ft, ft],
    preset: [ft, ft, ft, ft, ft],
  },
  ys = { OPTIONS: 'options' },
  $t = { DEFAULT: 'default', INTERMISSION: 'intermission', RATIO: 'ratio' };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kd = (a) => a.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  Dc = (...a) =>
    a
      .filter((s, i, c) => !!s && s.trim() !== '' && c.indexOf(s) === i)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Sd = {
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
 */ const xd = z.forwardRef(
  (
    {
      color: a = 'currentColor',
      size: s = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: c,
      className: d = '',
      children: f,
      iconNode: p,
      ...w
    },
    h
  ) =>
    z.createElement(
      'svg',
      {
        ref: h,
        ...Sd,
        width: s,
        height: s,
        stroke: a,
        strokeWidth: c ? (Number(i) * 24) / Number(s) : i,
        className: Dc('lucide', d),
        ...w,
      },
      [...p.map(([g, v]) => z.createElement(g, v)), ...(Array.isArray(f) ? f : [f])]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zc = (a, s) => {
  const i = z.forwardRef(({ className: c, ...d }, f) =>
    z.createElement(xd, { ref: f, iconNode: s, className: Dc(`lucide-${kd(a)}`, c), ...d })
  );
  return ((i.displayName = `${a}`), i);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ed = zc('ExternalLink', [
  ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
  ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
  ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cd = zc('Lock', [
    ['rect', { width: '18', height: '11', x: '3', y: '11', rx: '2', ry: '2', key: '1w4ew1' }],
    ['path', { d: 'M7 11V7a5 5 0 0 1 10 0v4', key: 'fwvmzm' }],
  ]),
  Id = '_overlay_13cvn_1',
  Od = '_modal_13cvn_12',
  Nd = '_title_13cvn_21',
  Td = '_message_13cvn_29',
  jd = '_buttons_13cvn_36',
  Ld = '_button_13cvn_36',
  _n = { overlay: Id, modal: Od, title: Nd, message: Td, buttons: jd, button: Ld };
function Md({ onKeepMine: a, onLoadShared: s, onOpenNewTab: i }) {
  return F.jsx('div', {
    className: _n.overlay,
    children: F.jsxs('div', {
      className: _n.modal,
      children: [
        F.jsx('h2', { className: _n.title, children: 'You have unsaved progress' }),
        F.jsx('p', {
          className: _n.message,
          children:
            'Loading this shared link will replace your current quiz answers. What would you like to do?',
        }),
        F.jsxs('div', {
          className: _n.buttons,
          children: [
            F.jsx('button', {
              onClick: a,
              className: `btn btn-secondary ${_n.button}`,
              children: 'Keep my progress',
            }),
            F.jsx('button', {
              onClick: s,
              className: `btn btn-primary ${_n.button}`,
              children: 'Load shared results',
            }),
            F.jsxs('button', {
              onClick: i,
              className: `btn btn-secondary ${_n.button}`,
              children: [F.jsx(Ed, { size: 16 }), 'Open in new tab'],
            }),
          ],
        }),
      ],
    }),
  });
}
const { causes: vo } = Es,
  Pd = { none: 1, sqrt: 0.5, extreme: 0.1 };
function Rd(a) {
  const s = (a == null ? void 0 : a.diminishingReturns) || Es.diminishingReturns;
  return Pd[s] ?? 0.5;
}
function Dd(a) {
  const s = JSON.stringify(a);
  let i = 0;
  for (let c = 0; c < s.length; c++) {
    const d = s.charCodeAt(c);
    ((i = (i << 5) - i + d), (i = i & i));
  }
  return Math.abs(i);
}
function zd(a) {
  let s = a;
  return function () {
    ((s |= 0), (s = (s + 1831565813) | 0));
    let i = Math.imul(s ^ (s >>> 15), 1 | s);
    return (
      (i = (i + Math.imul(i ^ (i >>> 7), 61 | i)) ^ i),
      ((i ^ (i >>> 14)) >>> 0) / 4294967296
    );
  };
}
function Ac(a, s, i = 0.5) {
  if (i >= 1) {
    const p = Math.max(...a);
    if (p <= 0) return a.map(() => s / a.length);
    const w = a.map((h, g) => (h === p ? g : -1)).filter((h) => h >= 0);
    return a.map((h, g) => (w.includes(g) ? s / w.length : 0));
  }
  const c = 1 / (1 - i),
    d = a.map((p) => (p > 0 ? Math.pow(p, c) : 0)),
    f = d.reduce((p, w) => p + w, 0);
  return f === 0 ? a.map(() => s / a.length) : d.map((p) => (p / f) * s);
}
function Wc(a = !1) {
  return Object.fromEntries(
    nl.questions
      .filter((s) => s.type !== 'intermission' && s.worldviewDimension)
      .map((s) => [
        s.id,
        a ? { ...s.worldviewDimension, name: s.editPanelTitle } : s.worldviewDimension,
      ])
  );
}
const yo = Wc();
function* Ad(a) {
  const s = Object.keys(a);
  if (s.length === 0) return;
  function* i(c, d) {
    if (c === s.length) {
      let w = 1;
      for (const h of s) w *= a[h][d[h]] / 100;
      yield { options: d, probability: w };
      return;
    }
    const f = s[c],
      p = Object.keys(a[f]);
    for (const w of p) yield* i(c + 1, { ...d, [f]: w });
  }
  yield* i(0, {});
}
function* Wd(a, s = 2e3) {
  const i = Object.keys(a);
  if (i.length === 0) return;
  const c = Dd(a),
    d = zd(c),
    f = {};
  for (const h of i) {
    const g = Object.entries(a[h]);
    let v = 0;
    f[h] = g.map(([x, O]) => ((v += O / 100), { key: x, cumsum: v }));
  }
  const p = (h, g) => {
      const v = f[h];
      for (const { key: x, cumsum: O } of v) if (g <= O) return x;
      return v[v.length - 1].key;
    },
    w = 1 / s;
  for (let h = 0; h < s; h++) {
    const g = {};
    for (const v of i) g[v] = p(v, d());
    yield { options: g, probability: w };
  }
}
function Fd(a) {
  return Object.values(a).reduce((s, i) => s * Object.keys(i).length, 1);
}
function Vd(a) {
  for (const s of Object.values(a)) {
    const i = Object.values(s),
      c = i.filter((f) => f === 100).length === 1,
      d = i.filter((f) => f === 0).length === i.length - 1;
    if (!c || !d) return !1;
  }
  return !0;
}
function* bd(a) {
  const s = {};
  for (const [i, c] of Object.entries(a))
    for (const [d, f] of Object.entries(c))
      if (f === 100) {
        s[i] = d;
        break;
      }
  yield { options: s, probability: 1 };
}
function* Cs(a, s = 500, i = 2e3) {
  if (Vd(a)) {
    yield* bd(a);
    return;
  }
  Fd(a) <= s ? yield* Ad(a) : yield* Wd(a, i);
}
function Ud(a, s, i) {
  let c = a.points;
  for (const [d, f] of Object.entries(i)) {
    const p = s[d],
      w = f.options[p];
    if (f.applyAs === 'multiplier')
      if (f.appliesTo) {
        const h = a[f.appliesTo];
        if (h && typeof w == 'object') {
          const g = w[h];
          g !== void 0 && (c *= g);
        }
      } else f.appliesWhen && a[f.appliesWhen] && (c *= w);
    else if (f.applyAs === 'exponent' && f.appliesTo) {
      const h = a[f.appliesTo] || 1;
      c *= Math.pow(h, w);
    }
  }
  return c;
}
function Is(a, s, i) {
  const c = {};
  for (const [d, f] of Object.entries(s)) c[d] = Ud(f, a, i);
  return c;
}
function Bd(a) {
  const s = Math.max(...Object.values(a));
  return Object.keys(a).filter((i) => Math.abs(a[i] - s) < 1e-4);
}
function Fc(a) {
  return Object.fromEntries(Object.keys(a).map((s) => [s, 0]));
}
function Qd(a, s, i) {
  if (s.applyAs === 'multiplier') {
    if (s.appliesTo) {
      const d = a[s.appliesTo];
      if (!d) return 1;
      let f = 0;
      for (const [p, w] of Object.entries(i)) {
        const h = s.options[p],
          g = typeof h == 'object' ? (h[d] ?? 1) : (h ?? 1);
        f += (w / 100) * g;
      }
      return f;
    }
    if (!s.appliesWhen || !a[s.appliesWhen]) return 1;
    let c = 0;
    for (const [d, f] of Object.entries(i)) {
      const p = s.options[d] ?? 1;
      c += (f / 100) * p;
    }
    return c;
  }
  return 1;
}
function Hd(a, s) {
  const i = (s == null ? void 0 : s.causes) || vo,
    c = (s == null ? void 0 : s.dimensions) || yo,
    d = Object.keys(i),
    f = {};
  for (const g of d) {
    const v = i[g];
    let x = v.points;
    for (const [O, N] of Object.entries(c)) {
      const T = a[O];
      T && (x *= Qd(v, N, T));
    }
    f[g] = x;
  }
  const p = d.map((g) => f[g]),
    w = Ac(p, 100, 1),
    h = { evs: f };
  return (
    d.forEach((g, v) => {
      h[g] = w[v];
    }),
    h
  );
}
function qd(a, s) {
  const i = (s == null ? void 0 : s.causes) || vo,
    c = (s == null ? void 0 : s.dimensions) || yo,
    d = Fc(i);
  for (const { options: p, probability: w } of Cs(a)) {
    const h = Is(p, i, c),
      g = Bd(h),
      v = w / g.length;
    for (const x of g) d[x] += v;
  }
  const f = {};
  for (const p of Object.keys(i)) f[p] = d[p] * 100;
  return f;
}
function $d(a, s) {
  const i = (s == null ? void 0 : s.causes) || vo,
    c = (s == null ? void 0 : s.dimensions) || yo,
    d = Rd(s),
    f = Object.keys(i),
    p = Fc(i);
  for (const { options: w, probability: h } of Cs(a)) {
    const g = Is(w, i, c),
      v = h * 100,
      x = f.map((N) => g[N]),
      O = Ac(x, v, d);
    f.forEach((N, T) => {
      p[N] += O[T];
    });
  }
  return p;
}
function Kd(a, s) {
  const i = (s == null ? void 0 : s.causes) || vo,
    c = (s == null ? void 0 : s.dimensions) || yo,
    d = Object.keys(i),
    f = Gd(d),
    p = [...Cs(a, 500, 1e3)];
  let w = f[0],
    h = -1 / 0;
  for (const g of f) {
    let v = 1 / 0;
    for (const { options: x, probability: O } of p) {
      if (O < 1e-4) continue;
      const N = Is(x, i, c);
      let T = 0;
      for (const j of d) T += N[j] * (g[j] / 100);
      v = Math.min(v, T);
    }
    v > h && ((h = v), (w = { ...g }));
  }
  return w;
}
function Gd(a) {
  const s = [],
    i = a.length,
    c = (h) => {
      const g = {};
      return (
        a.forEach((v, x) => {
          g[v] = h[x];
        }),
        g
      );
    };
  for (let h = 0; h < i; h++) {
    const g = new Array(i).fill(0);
    ((g[h] = 100), s.push(c(g)));
  }
  for (let h = 0; h < i; h++)
    for (let g = h + 1; g < i; g++) {
      const v = new Array(i).fill(0);
      ((v[h] = 50), (v[g] = 50), s.push(c(v)));
    }
  const d = Math.floor(100 / i),
    f = 100 - d * i,
    p = new Array(i).fill(d);
  ((p[0] += f), s.push(c(p)));
  const w = [
    [60, 20, 20],
    [70, 15, 15],
    [80, 10, 10],
  ];
  for (const h of w)
    if (h.length === i)
      for (let g = 0; g < i; g++) {
        const v = new Array(i).fill(0);
        v[g] = h[0];
        let x = 1;
        for (let O = 0; O < i; O++) O !== g && x < h.length && (v[O] = h[x++]);
        s.push(c(v));
      }
  return s;
}
function Yd(a, s, i, c = null, d = null) {
  const f = Array.isArray(d) ? d : d ? [d] : [],
    p = f.reduce((N, T) => N + (i[T] || 0), 0),
    w = 100 - p;
  s = Math.max(0, Math.min(w, s));
  const h = c || i,
    g = Object.keys(i).filter((N) => N !== a && !f.includes(N)),
    v = g.reduce((N, T) => N + h[T], 0),
    x = 100 - s - p,
    O = { [a]: s };
  for (const N of f) O[N] = i[N];
  if (v === 0) {
    const N = Math.floor(x / g.length);
    let T = x - N * g.length;
    g.forEach((j, I) => {
      O[j] = N + (I < T ? 1 : 0);
    });
  } else {
    let N = 0;
    g.forEach((T, j) => {
      if (j === g.length - 1) O[T] = Math.max(0, x - N);
      else {
        const I = h[T] / v,
          V = x * I;
        ((O[T] = Math.max(0, V)), (N += O[T]));
      }
    });
  }
  return O;
}
function Xd(a) {
  const s = Object.keys(a),
    i = {};
  let c = 0;
  return (
    s.slice(0, -1).forEach((d) => {
      ((i[d] = Math.round(a[d])), (c += i[d]));
    }),
    (i[s[s.length - 1]] = 100 - c),
    i
  );
}
const Jd = 897,
  Zd = 10,
  ep = {
    malaria_nets: {
      tags: { near_term_xrisk: !1 },
      diminishing_returns: [
        1, 0.833, 0.714, 0.625, 0.556, 0.5, 0.455, 0.417, 0.385, 0.357, 0.333, 0.313, 0.294, 0.278,
        0.263, 0.25, 0.238, 0.227, 0.217, 0.208, 0.2, 0.192, 0.185, 0.179, 0.173, 0.167, 0.161,
        0.156, 0.152, 0.147, 0.143, 0.139, 0.135, 0.132, 0.128, 0.125, 0.122, 0.119, 0.116, 0.114,
        0.111, 0.109, 0.106, 0.104, 0.102, 0.1, 0.098, 0.096, 0.094, 0.093, 0.091, 0.089, 0.088,
        0.087, 0.085, 0.084, 0.082, 0.081, 0.08, 0.079, 0.077, 0.076, 0.075, 0.074, 0.073, 0.072,
        0.071, 0.07, 0.069, 0.068, 0.068, 0.067, 0.066, 0.065, 0.065, 0.064, 0.063, 0.063, 0.062,
        0.061, 0.061, 0.06, 0.06, 0.059, 0.059, 0.058, 0.058, 0.057, 0.057, 0.056,
      ],
      effects: {
        effect_lives_saved: {
          recipient_type: 'human_life_years',
          values: [
            [1e3, 950, 900, 850],
            [800, 760, 720, 680],
            [400, 380, 360, 340],
            [100, 95, 90, 85],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
        },
        effect_disability_reduction: {
          recipient_type: 'human_ylds',
          values: [
            [500, 475, 450, 425],
            [600, 570, 540, 510],
            [400, 380, 360, 340],
            [200, 190, 180, 170],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
        },
        effect_income: {
          recipient_type: 'human_income_doublings',
          values: [
            [0, 0, 0, 0],
            [50, 47, 45, 42],
            [100, 95, 90, 85],
            [80, 76, 72, 68],
            [20, 19, 18, 17],
            [0, 0, 0, 0],
          ],
        },
      },
    },
    cage_free_campaigns: {
      tags: { near_term_xrisk: !1 },
      diminishing_returns: [
        1, 0.667, 0.5, 0.4, 0.333, 0.286, 0.25, 0.222, 0.2, 0.182, 0.167, 0.154, 0.143, 0.133,
        0.125, 0.118, 0.111, 0.105, 0.1, 0.095, 0.091, 0.087, 0.083, 0.08, 0.077, 0.074, 0.071,
        0.069, 0.067, 0.065, 0.063, 0.061, 0.059, 0.057, 0.056, 0.054, 0.053, 0.051, 0.05, 0.049,
        0.048, 0.047, 0.046, 0.045, 0.044, 0.043, 0.042, 0.041, 0.04, 0.039, 0.038, 0.038, 0.037,
        0.036, 0.036, 0.035, 0.035, 0.034, 0.034, 0.033, 0.033, 0.032, 0.032, 0.031, 0.031, 0.031,
        0.03, 0.03, 0.03, 0.029, 0.029, 0.029, 0.028, 0.028, 0.028, 0.028, 0.027, 0.027, 0.027,
        0.027, 0.026, 0.026, 0.026, 0.026, 0.026, 0.025, 0.025, 0.025, 0.025, 0.025,
      ],
      effects: {
        effect_chickens: {
          recipient_type: 'chickens_birds',
          values: [
            [5e4, 45e3, 4e4, 35e3],
            [8e4, 72e3, 64e3, 56e3],
            [6e4, 54e3, 48e3, 42e3],
            [2e4, 18e3, 16e3, 14e3],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
        },
      },
    },
    shrimp_welfare: {
      tags: { near_term_xrisk: !1 },
      diminishing_returns: [
        1, 0.667, 0.5, 0.4, 0.333, 0.286, 0.25, 0.222, 0.2, 0.182, 0.167, 0.154, 0.143, 0.133,
        0.125, 0.118, 0.111, 0.105, 0.1, 0.095, 0.091, 0.087, 0.083, 0.08, 0.077, 0.074, 0.071,
        0.069, 0.067, 0.065, 0.063, 0.061, 0.059, 0.057, 0.056, 0.054, 0.053, 0.051, 0.05, 0.049,
        0.048, 0.047, 0.046, 0.045, 0.044, 0.043, 0.042, 0.041, 0.04, 0.039, 0.038, 0.038, 0.037,
        0.036, 0.036, 0.035, 0.035, 0.034, 0.034, 0.033, 0.033, 0.032, 0.032, 0.031, 0.031, 0.031,
        0.03, 0.03, 0.03, 0.029, 0.029, 0.029, 0.028, 0.028, 0.028, 0.028, 0.027, 0.027, 0.027,
        0.027, 0.026, 0.026, 0.026, 0.026, 0.026, 0.025, 0.025, 0.025, 0.025, 0.025,
      ],
      effects: {
        effect_shrimp: {
          recipient_type: 'shrimp',
          values: [
            [1e6, 8e5, 6e5, 4e5],
            [2e6, 16e5, 12e5, 8e5],
            [15e5, 12e5, 9e5, 6e5],
            [5e5, 4e5, 3e5, 2e5],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
        },
      },
    },
    wild_animal_welfare: {
      tags: { near_term_xrisk: !1 },
      diminishing_returns: [
        1, 0.769, 0.625, 0.526, 0.455, 0.4, 0.357, 0.323, 0.294, 0.27, 0.25, 0.233, 0.217, 0.204,
        0.192, 0.182, 0.172, 0.164, 0.156, 0.149, 0.143, 0.137, 0.132, 0.127, 0.122, 0.118, 0.114,
        0.11, 0.107, 0.104, 0.101, 0.098, 0.096, 0.093, 0.091, 0.089, 0.087, 0.085, 0.083, 0.081,
        0.079, 0.078, 0.076, 0.075, 0.073, 0.072, 0.071, 0.069, 0.068, 0.067, 0.066, 0.065, 0.064,
        0.063, 0.063, 0.062, 0.061, 0.06, 0.06, 0.059, 0.058, 0.058, 0.057, 0.057, 0.056, 0.056,
        0.055, 0.055, 0.054, 0.054, 0.053, 0.053, 0.053, 0.052, 0.052, 0.052, 0.051, 0.051, 0.051,
        0.05, 0.05, 0.05, 0.05, 0.049, 0.049, 0.049, 0.049, 0.048, 0.048, 0.048,
      ],
      effects: {
        effect_mammals: {
          recipient_type: 'mammals',
          values: [
            [100, 80, 50, 30],
            [500, 400, 250, 150],
            [1e3, 800, 500, 300],
            [800, 640, 400, 240],
            [200, 160, 100, 60],
            [0, 0, 0, 0],
          ],
        },
        effect_invertebrates: {
          recipient_type: 'non_shrimp_invertebrates',
          values: [
            [1e4, 8e3, 5e3, 3e3],
            [5e4, 4e4, 25e3, 15e3],
            [1e5, 8e4, 5e4, 3e4],
            [8e4, 64e3, 4e4, 24e3],
            [2e4, 16e3, 1e4, 6e3],
            [0, 0, 0, 0],
          ],
        },
      },
    },
    fish_welfare: {
      tags: { near_term_xrisk: !1 },
      diminishing_returns: [
        1, 0.667, 0.5, 0.4, 0.333, 0.286, 0.25, 0.222, 0.2, 0.182, 0.167, 0.154, 0.143, 0.133,
        0.125, 0.118, 0.111, 0.105, 0.1, 0.095, 0.091, 0.087, 0.083, 0.08, 0.077, 0.074, 0.071,
        0.069, 0.067, 0.065, 0.063, 0.061, 0.059, 0.057, 0.056, 0.054, 0.053, 0.051, 0.05, 0.049,
        0.048, 0.047, 0.046, 0.045, 0.044, 0.043, 0.042, 0.041, 0.04, 0.039, 0.038, 0.038, 0.037,
        0.036, 0.036, 0.035, 0.035, 0.034, 0.034, 0.033, 0.033, 0.032, 0.032, 0.031, 0.031, 0.031,
        0.03, 0.03, 0.03, 0.029, 0.029, 0.029, 0.028, 0.028, 0.028, 0.028, 0.027, 0.027, 0.027,
        0.027, 0.026, 0.026, 0.026, 0.026, 0.026, 0.025, 0.025, 0.025, 0.025, 0.025,
      ],
      effects: {
        effect_fish: {
          recipient_type: 'fish',
          values: [
            [1e5, 9e4, 8e4, 7e4],
            [2e5, 18e4, 16e4, 14e4],
            [15e4, 135e3, 12e4, 105e3],
            [5e4, 45e3, 4e4, 35e3],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
        },
      },
    },
    ai_safety_policy: {
      tags: { near_term_xrisk: !0 },
      diminishing_returns: [
        1, 0.909, 0.833, 0.769, 0.714, 0.667, 0.625, 0.588, 0.556, 0.526, 0.5, 0.476, 0.455, 0.435,
        0.417, 0.4, 0.385, 0.37, 0.357, 0.345, 0.333, 0.323, 0.313, 0.303, 0.294, 0.286, 0.278,
        0.27, 0.263, 0.256, 0.25, 0.244, 0.238, 0.233, 0.227, 0.222, 0.217, 0.213, 0.208, 0.204,
        0.2, 0.196, 0.192, 0.189, 0.185, 0.182, 0.179, 0.176, 0.173, 0.17, 0.167, 0.164, 0.161,
        0.159, 0.156, 0.154, 0.152, 0.149, 0.147, 0.145, 0.143, 0.141, 0.139, 0.137, 0.135, 0.134,
        0.132, 0.13, 0.129, 0.127, 0.126, 0.124, 0.123, 0.121, 0.12, 0.119, 0.117, 0.116, 0.115,
        0.114, 0.112, 0.111, 0.11, 0.109, 0.108, 0.107, 0.106, 0.105, 0.104, 0.103,
      ],
      effects: {
        effect_human_lives_far_future: {
          recipient_type: 'human_life_years',
          values: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [100, 50, -50, -100],
            [1e4, 8e3, 5e3, 3e3],
            [5e4, 4e4, 25e3, 15e3],
            [1e5, 8e4, 5e4, 3e4],
          ],
        },
      },
    },
  },
  tp = { budget: Jd, incrementSize: Zd, projects: ep },
  { projects: tl, budget: np, incrementSize: Vc } = tp,
  rp = ['disability', 'income', 'animal', 'invertebrate', 'timeframes', 'risk', 'xrisk'];
function lp() {
  const a = {};
  for (const i of nl.questions) i.options && (a[i.id] = i);
  const s = [];
  for (const i of rp) {
    const c = a[i];
    if (!c || c.options[0].marketplaceValue === void 0) continue;
    const d = c.options.map((f) => f.marketplaceValue);
    s.push({ questionId: i, optionValues: d });
  }
  return s;
}
const Os = lp(),
  Tc = Os.map((a) => a.optionValues);
function op(a, s, i, c) {
  const d = a * i,
    f = a * c,
    p = (f + d) / 2;
  return {
    human_life_years: 1,
    human_ylds: a,
    human_income_doublings: s,
    chickens_birds: d,
    mammals: d,
    fish: p,
    shrimp: f,
    non_shrimp_invertebrates: f,
  };
}
function ip(a, s, i, c) {
  const d = a.values;
  let f = 0;
  for (let p = 0; p < 6; p++) f += d[p][c] * i[p];
  return s * f;
}
function sp(a, s, i, c) {
  let d = 0;
  for (const f of Object.values(a.effects)) {
    const p = s[f.recipient_type] ?? 0;
    d += ip(f, p, i, c);
  }
  return d;
}
function ap(a, s, i, c) {
  const d = {};
  for (const [f, p] of Object.entries(a)) d[f] = sp(p, s, i, c);
  return d;
}
function up(a, s, i) {
  const c = {};
  for (const [d, f] of Object.entries(a))
    s[d].tags.near_term_xrisk ? (c[d] = f) : (c[d] = f * (1 - i));
  return c;
}
function cp(a = tl) {
  if (Tc.length < 7) return [];
  const [s, i, c, d, f, p, w] = Tc,
    h = [];
  for (const g of s)
    for (const v of i)
      for (const x of c)
        for (const O of d)
          for (let N = 0; N < f.length; N++)
            for (const T of p)
              for (const j of w) {
                const I = op(g, v, x, O),
                  V = f[N],
                  L = ap(a, I, V, T),
                  b = up(L, a, j);
                h.push({ project_values: b });
              }
  return h;
}
let fs = null;
function fp() {
  return (fs || (fs = cp()), fs);
}
function dp(a) {
  const s = [];
  let i = 0;
  const [c, d, f, p, w, h, g] = a;
  for (let v = 0; v < c.length; v++)
    for (let x = 0; x < d.length; x++)
      for (let O = 0; O < f.length; O++)
        for (let N = 0; N < p.length; N++)
          for (let T = 0; T < w.length; T++)
            for (let j = 0; j < h.length; j++)
              for (let I = 0; I < g.length; I++) {
                const V = c[v] * d[x] * f[O] * p[N] * w[T] * h[j] * g[I];
                (V > 0 && s.push({ result_idx: i, credence: V }), i++);
              }
  return s;
}
function pp(a, s, i = tl) {
  const c = Object.keys(i),
    d = c.length,
    f = s.length,
    p = new Float64Array(f * d),
    w = new Float64Array(f);
  for (let g = 0; g < f; g++) {
    const v = a[s[g].result_idx].project_values;
    w[g] = s[g].credence;
    const x = g * d;
    for (let O = 0; O < d; O++) p[x + O] = v[c[O]];
  }
  const h = c.map((g) => {
    const v = i[g].diminishing_returns,
      x = new Float64Array(v.length);
    return (x.set(v), x);
  });
  return { scoreMatrix: p, credences: w, numActive: f, projectIds: c, drArrays: h };
}
function mp(a, s, i, { packed: c }) {
  const { scoreMatrix: d, credences: f, numActive: p, projectIds: w, drArrays: h } = c,
    g = w.length,
    v = new Float64Array(g);
  for (let N = 0; N < g; N++) {
    const T = Math.floor(s[w[N]] / 10),
      j = h[N];
    v[N] = T >= j.length ? j[j.length - 1] : j[T];
  }
  const x = new Float64Array(g);
  for (let N = 0; N < p; N++) {
    const T = N * g,
      j = f[N] * i;
    let I = 0,
      V = d[T] * v[0];
    for (let L = 1; L < g; L++) {
      const b = d[T + L] * v[L];
      b > V && ((V = b), (I = L));
    }
    x[I] += j;
  }
  const O = {};
  for (let N = 0; N < g; N++) O[w[N]] = x[N];
  return O;
}
function hp(a, s, i, c = {}) {
  const d = c.incrementSize ?? Vc,
    f = {};
  for (const w of Object.keys(a)) f[w] = 0;
  let p = i;
  for (; p > 0; ) {
    const w = Math.min(d, p),
      h = s(a, f, w, c);
    for (const g of Object.keys(a)) f[g] += h[g];
    p -= w;
  }
  return { funding: f };
}
function vp(a) {
  const s = [];
  for (const i of Os) {
    const c = a[i.questionId];
    if (!c) {
      const p = i.optionValues.length;
      s.push(new Array(p).fill(1 / p));
      continue;
    }
    const d = nl.questions.find((p) => p.id === i.questionId);
    if (!d || !d.options) {
      const p = i.optionValues.length;
      s.push(new Array(p).fill(1 / p));
      continue;
    }
    const f = d.options.map((p) => (c[p.key] ?? 0) / 100);
    s.push(f);
  }
  return s;
}
function yp(a, s = {}) {
  if (Os.length < 7) {
    const h = {};
    for (const g of Object.keys(tl)) h[g] = 0;
    return h;
  }
  const i = s.budget ? s.budget / 1e6 : np,
    c = vp(a),
    d = dp(c),
    f = pp(fp(), d, tl),
    { funding: p } = hp(tl, mp, i, { packed: f, incrementSize: Vc }),
    w = {};
  for (const [h, g] of Object.entries(p)) w[h] = (g / i) * 100;
  return w;
}
const gp = [
  { flag: 'showMoralMarketplace', key: 'moralMarketplace', hasEvs: !1 },
  { flag: 'showMaxEV', key: 'maxEV', hasEvs: !0 },
  { flag: 'showParliament', key: 'parliament', hasEvs: !1 },
  { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: !1 },
  { flag: 'showMaximin', key: 'maximin', hasEvs: !1 },
];
function wp() {
  var i;
  const a = ((i = mo.calculations) == null ? void 0 : i.order) || [];
  return [...gp]
    .sort((c, d) => {
      const f = a.indexOf(c.key),
        p = a.indexOf(d.key);
      return f === -1 && p === -1 ? 0 : f === -1 ? 1 : p === -1 ? -1 : f - p;
    })
    .filter((c) => {
      var d;
      return ((d = mo.calculations) == null ? void 0 : d[c.flag]) === !0;
    });
}
const _p = mo.advanced === !0,
  kp = nl,
  { questions: Sp } = kp,
  { causes: xp, defaultCredences: Ep } = Es;
function Cp(a) {
  var s;
  return !((s = a.type) != null && s.startsWith('_'));
}
const be = Sp.filter(Cp);
function qt(a) {
  return (a == null ? void 0 : a.type) === $t.INTERMISSION;
}
function ds(a, s) {
  let i = 0;
  for (let c = 0; c < s; c++) qt(a[c]) || i++;
  return i;
}
function Ip(a) {
  {
    const s = a.type || $t.DEFAULT;
    return Nc[s] || Nc[$t.DEFAULT];
  }
}
const Op = be.filter((a) => !qt(a)),
  ps = Op.length,
  jc = be.map((a) => {
    var i;
    if (qt(a)) return { ...a, type: $t.INTERMISSION };
    if (a.type === $t.RATIO) return { ...a, type: $t.RATIO };
    const s = Ip(a);
    return {
      ...a,
      type: a.type || $t.DEFAULT,
      options: (i = a.options) == null ? void 0 : i.map((c, d) => ({ ...c, color: s[d] || s[0] })),
    };
  });
function Ns(a) {
  var d;
  if (a.type === $t.RATIO)
    return { value: ((d = a.ratioConfig) == null ? void 0 : d.defaultValue) ?? 0.5 };
  if (a.defaultCredences) return { ...a.defaultCredences };
  if (!a.options) return {};
  const s = a.options.map((f) => f.key),
    i = Math.floor(100 / s.length),
    c = 100 - i * s.length;
  return Object.fromEntries(s.map((f, p) => [f, i + (p === 0 ? c : 0)]));
}
function bc(a) {
  var s;
  return a.type === $t.RATIO
    ? {
        credences: { value: ((s = a.ratioConfig) == null ? void 0 : s.defaultValue) ?? 0.5 },
        originalCredences: null,
        inputMode: ys.OPTIONS,
        lockedKeys: [],
        selectedPreset: null,
      }
    : {
        credences: Ns(a),
        originalCredences: null,
        inputMode: ys.OPTIONS,
        lockedKeys: [],
        selectedPreset: null,
      };
}
function gs() {
  return Object.fromEntries(be.filter((a) => !qt(a)).map((a) => [a.id, bc(a)]));
}
const Uc = 6,
  Bc = ['1', '2', '3'];
function ws() {
  return Object.fromEntries(Bc.map((a) => [a, { questions: gs(), completed: !1 }]));
}
function Np(a) {
  return a != null && a.questions
    ? Object.entries(a.questions).some(([s, i]) => {
        if (!i.credences) return !1;
        const c = be.find((f) => f.id === s);
        if (!c) return !1;
        const d = Ns(c);
        return Object.entries(i.credences).some(([f, p]) => p !== (d[f] ?? 0));
      })
    : !1;
}
function _s() {
  return Object.fromEntries(Bc.map((a) => [a, `Worldview ${a}`]));
}
const ks = 9e8,
  Qc = () => 'disclaimer',
  Hc = {
    currentStep: Qc(),
    worldviews: ws(),
    worldviewNames: _s(),
    activeWorldviewId: '1',
    expandedPanel: null,
    debugConfig: null,
    selectedCalculations: { left: null, right: null },
    marketplaceBudget: ks,
    justCompletedWorldview: null,
  },
  me = {
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
function Ss(a) {
  return a.worldviews[a.activeWorldviewId].questions;
}
function Tp(a, s, i) {
  const c = Ss(a),
    d = a.worldviews[a.activeWorldviewId];
  return {
    ...a,
    worldviews: {
      ...a.worldviews,
      [a.activeWorldviewId]: { ...d, questions: { ...c, [s]: { ...c[s], ...i } } },
    },
  };
}
function jp(a, s) {
  switch (s.type) {
    case me.GO_TO_STEP:
      return { ...a, currentStep: s.payload };
    case me.UPDATE_QUESTION:
      return Tp(a, s.payload.questionId, s.payload.updates);
    case me.SET_EXPANDED_PANEL:
      return { ...a, expandedPanel: s.payload };
    case me.SAVE_ORIGINALS: {
      const i = Ss(a),
        c = a.worldviews[a.activeWorldviewId];
      return {
        ...a,
        worldviews: {
          ...a.worldviews,
          [a.activeWorldviewId]: {
            ...c,
            questions: Object.fromEntries(
              Object.entries(i).map(([d, f]) => [
                d,
                { ...f, originalCredences: f.originalCredences || { ...f.credences } },
              ])
            ),
          },
        },
      };
    }
    case me.RESET_TO_ORIGINAL: {
      const i = Ss(a),
        c = a.worldviews[a.activeWorldviewId];
      return {
        ...a,
        worldviews: {
          ...a.worldviews,
          [a.activeWorldviewId]: {
            ...c,
            questions: Object.fromEntries(
              Object.entries(i).map(([d, f]) => [
                d,
                { ...f, credences: f.originalCredences ? { ...f.originalCredences } : f.credences },
              ])
            ),
          },
        },
      };
    }
    case me.RESET_QUIZ:
      return { ...Hc, currentStep: Qc(), worldviews: ws(), worldviewNames: _s() };
    case me.SWITCH_WORLDVIEW:
      return a.worldviews[s.payload] ? { ...a, activeWorldviewId: s.payload } : a;
    case me.SET_WORLDVIEW_NAME: {
      const { worldviewId: i, name: c } = s.payload;
      return a.worldviews[i] ? { ...a, worldviewNames: { ...a.worldviewNames, [i]: c } } : a;
    }
    case me.SET_MARKETPLACE_BUDGET:
      return { ...a, marketplaceBudget: s.payload };
    case me.MARK_WORLDVIEW_COMPLETED: {
      const i = s.payload;
      return a.worldviews[i]
        ? { ...a, worldviews: { ...a.worldviews, [i]: { ...a.worldviews[i], completed: !0 } } }
        : a;
    }
    case me.ADD_WORLDVIEW: {
      const i = Object.keys(a.worldviews);
      if (
        i.length >= Uc ||
        !i.every((p) => {
          var w;
          return (w = a.worldviews[p]) == null ? void 0 : w.completed;
        })
      )
        return a;
      const d = Math.max(...i.map((p) => parseInt(p, 10))),
        f = String(d + 1);
      return {
        ...a,
        worldviews: { ...a.worldviews, [f]: { questions: gs(), completed: !1 } },
        worldviewNames: { ...a.worldviewNames, [f]: `Worldview ${f}` },
        activeWorldviewId: f,
        currentStep: be[0].id,
      };
    }
    case me.RESTORE_FROM_URL:
    case me.RESTORE_FROM_SESSION: {
      const i = s.type === me.RESTORE_FROM_URL,
        {
          worldviews: c,
          worldviewNames: d,
          activeWorldviewId: f,
          questions: p,
          credences: w,
          currentStep: h,
          selectedCalculations: g,
          marketplaceBudget: v,
        } = s.payload,
        x = (j, I) => ({
          credences: j.credences,
          originalCredences: j.originalCredences
            ? { ...j.originalCredences }
            : I
              ? { ...j.credences }
              : null,
          inputMode: j.inputMode || ys.OPTIONS,
          lockedKeys: j.lockedKeys || (j.lockedKey ? [j.lockedKey] : []),
          selectedPreset: j.selectedPreset || null,
        }),
        O = (j, I) => {
          const V = {};
          for (const [L, b] of Object.entries(j)) {
            const B = {};
            for (const [re, fe] of Object.entries(b.questions)) B[re] = x(fe, I);
            V[L] = { questions: B, completed: b.completed || !1 };
          }
          return (V[1] || (V[1] = { questions: gs(), completed: !1 }), V);
        },
        N = (j, I) => {
          const V = {},
            L = Object.keys(I || {});
          L.includes('1') || L.push('1');
          for (const b of L) V[b] = (j == null ? void 0 : j[b]) || `Worldview ${b}`;
          return V;
        };
      if (c && f)
        return {
          ...a,
          currentStep: i ? 'results' : h,
          worldviews: O(c, i),
          worldviewNames: N(d, c),
          activeWorldviewId: f,
          selectedCalculations: g || a.selectedCalculations,
          marketplaceBudget: v || ks,
        };
      const T = {};
      if (p) for (const [j, I] of Object.entries(p)) T[j] = x(I, i);
      else if (w)
        for (const [j, I] of Object.entries(w))
          T[j] = { ...bc(), credences: I, originalCredences: i ? { ...I } : null };
      return {
        ...a,
        currentStep: i ? 'results' : h,
        worldviews: { ...ws(), 1: { questions: T, completed: !1 } },
        worldviewNames: _s(),
        activeWorldviewId: '1',
        marketplaceBudget: ks,
      };
    }
    case me.SET_DEBUG_CONFIG:
      return { ...a, debugConfig: s.payload };
    case me.SET_JUST_COMPLETED_WORLDVIEW:
      return { ...a, justCompletedWorldview: s.payload };
    case me.CLEAR_JUST_COMPLETED_WORLDVIEW:
      return { ...a, justCompletedWorldview: null };
    case me.SET_SELECTED_CALCULATIONS:
      return { ...a, selectedCalculations: { ...a.selectedCalculations, ...s.payload } };
    default:
      return a;
  }
}
const qc = z.createContext(null);
function Lp({ children: a }) {
  const [s, i] = z.useReducer(jp, Hc),
    [c, d] = z.useState(null),
    [f, p] = z.useState(!0),
    [w, h] = z.useState(null),
    [g] = z.useState(() => dd()),
    v = z.useRef(null);
  (z.useEffect(() => {
    (async () => {
      const K = vs(),
        pe = Ec();
      if (!K.hasShare) {
        if (pe) {
          const Me = Wn();
          Me && i({ type: me.RESTORE_FROM_SESSION, payload: Me });
        }
        p(!1);
        return;
      }
      const Oe = await Oc();
      if (!Oe) {
        if ((wn(), pe)) {
          const Me = Wn();
          Me && i({ type: me.RESTORE_FROM_SESSION, payload: Me });
        }
        p(!1);
        return;
      }
      if (Oe.error) {
        if ((d(Oe.error), wn(), window.setTimeout(() => d(null), 5e3), pe)) {
          const Me = Wn();
          Me && i({ type: me.RESTORE_FROM_SESSION, payload: Me });
        }
        p(!1);
        return;
      }
      const Et = Cc();
      if (pe && !Et) {
        const Me = Wn();
        if (Me && Me.currentStep !== 'welcome') {
          (h({ shareData: Oe, shareUrl: window.location.href }), p(!1));
          return;
        }
      }
      (i({ type: me.RESTORE_FROM_URL, payload: Oe }), wn(), pr(), p(!1));
    })();
  }, []),
    z.useEffect(() => {
      const W = async () => {
        if (!vs().hasShare) return;
        const pe = await Oc();
        if (!pe || pe.error) {
          (pe != null && pe.error && (d(pe.error), window.setTimeout(() => d(null), 5e3)), wn());
          return;
        }
        const Oe = Ec(),
          Et = Cc();
        if (Oe && !Et) {
          const Me = Wn();
          if (Me && Me.currentStep !== 'welcome') {
            h({ shareData: pe, shareUrl: window.location.href });
            return;
          }
        }
        (i({ type: me.RESTORE_FROM_URL, payload: pe }), wn(), pr());
      };
      return (
        window.addEventListener('hashchange', W),
        () => window.removeEventListener('hashchange', W)
      );
    }, []));
  const x = z.useCallback(() => {
      const W = Wn();
      (W && i({ type: me.RESTORE_FROM_SESSION, payload: W }), wn(), h(null));
    }, []),
    O = z.useCallback(() => {
      (w != null && w.shareData && (i({ type: me.RESTORE_FROM_URL, payload: w.shareData }), pr()),
        wn(),
        h(null));
    }, [w]),
    N = z.useCallback(() => {
      (md(), w != null && w.shareUrl && window.open(w.shareUrl, '_blank'));
      const W = Wn();
      (W && i({ type: me.RESTORE_FROM_SESSION, payload: W }), wn(), h(null));
    }, [w]);
  z.useEffect(() => {
    if (!f)
      return (
        v.current && clearTimeout(v.current),
        (v.current = setTimeout(() => {
          pd({
            currentStep: s.currentStep,
            worldviews: s.worldviews,
            worldviewNames: s.worldviewNames,
            activeWorldviewId: s.activeWorldviewId,
            selectedCalculations: s.selectedCalculations,
            marketplaceBudget: s.marketplaceBudget,
          });
        }, 300)),
        () => {
          v.current && clearTimeout(v.current);
        }
      );
  }, [
    s.currentStep,
    s.worldviews,
    s.worldviewNames,
    s.activeWorldviewId,
    s.selectedCalculations,
    s.marketplaceBudget,
    f,
  ]);
  const T = z.useCallback((W) => {
      (i({ type: me.GO_TO_STEP, payload: W }), window.scrollTo(0, 0));
    }, []),
    j = z.useCallback((W, K) => {
      i({ type: me.UPDATE_QUESTION, payload: { questionId: W, updates: K } });
    }, []),
    I = z.useCallback((W, K) => j(W, { credences: K }), [j]),
    V = z.useCallback((W, K) => j(W, { inputMode: K }), [j]),
    L = z.useCallback((W, K) => j(W, { lockedKeys: K }), [j]),
    b = z.useCallback((W, K) => j(W, { selectedPreset: K }), [j]),
    B = z.useCallback((W) => {
      i({ type: me.SET_EXPANDED_PANEL, payload: W });
    }, []),
    re = z.useCallback(() => {
      i({ type: me.SAVE_ORIGINALS });
    }, []),
    fe = z.useCallback(() => {
      i({ type: me.RESET_TO_ORIGINAL });
    }, []),
    Z = z.useCallback(() => {
      (i({ type: me.RESET_QUIZ }), pr());
    }, []),
    Y = z.useCallback((W) => {
      i({ type: me.SET_DEBUG_CONFIG, payload: W });
    }, []),
    ce = z.useCallback((W) => {
      i({ type: me.SWITCH_WORLDVIEW, payload: W });
    }, []),
    ke = z.useCallback((W) => {
      i({ type: me.SET_SELECTED_CALCULATIONS, payload: W });
    }, []),
    ee = z.useCallback((W, K) => {
      i({ type: me.SET_WORLDVIEW_NAME, payload: { worldviewId: W, name: K } });
    }, []),
    ae = z.useCallback((W) => {
      i({ type: me.SET_MARKETPLACE_BUDGET, payload: W });
    }, []),
    te = z.useCallback((W) => {
      i({ type: me.SET_JUST_COMPLETED_WORLDVIEW, payload: W });
    }, []),
    se = z.useCallback(() => {
      i({ type: me.CLEAR_JUST_COMPLETED_WORLDVIEW });
    }, []),
    Ce = z.useCallback((W) => {
      i({ type: me.MARK_WORLDVIEW_COMPLETED, payload: W });
    }, []),
    Fe = z.useCallback(() => {
      i({ type: me.ADD_WORLDVIEW });
    }, []),
    Se = z.useCallback((W) => be.findIndex((K) => K.id === W), []),
    U = z.useCallback(
      (W) => {
        const K = Se(W);
        return K === 0 ? 'welcome' : be[K - 1].id;
      },
      [Se]
    ),
    ne = z.useCallback(
      (W) => {
        const K = Se(W);
        return K === be.length - 1 ? 'results' : be[K + 1].id;
      },
      [Se]
    ),
    H = z.useCallback(() => {
      T(be[0].id);
    }, [T]),
    k = z.useCallback(() => {
      s.currentStep === 'results' ? T(be[be.length - 1].id) : T(U(s.currentStep));
    }, [s.currentStep, T, U]),
    M = z.useCallback(() => {
      const W = ne(s.currentStep);
      (W === 'results' && re(), T(W));
    }, [s.currentStep, s.activeWorldviewId, T, ne, re, Ce, te]),
    ie = z.useMemo(
      () => s.worldviews[s.activeWorldviewId].questions,
      [s.worldviews, s.activeWorldviewId]
    ),
    de = z.useCallback(
      (W) => {
        var Et;
        const K = W === 'original' ? 'originalCredences' : 'credences',
          pe = be.filter((Me) => !qt(Me)),
          Oe = ie[(Et = pe[0]) == null ? void 0 : Et.id];
        return W === 'original' && !(Oe != null && Oe.originalCredences)
          ? null
          : Object.fromEntries(
              pe.map((Me) => {
                var Jt;
                return [Me.id, ((Jt = ie[Me.id]) == null ? void 0 : Jt[K]) || Ns(Me)];
              })
            );
      },
      [ie]
    ),
    ve = z.useCallback((W, K, pe, Oe) => {
      switch (W) {
        case 'moralMarketplace':
          return yp(K, { budget: Oe });
        case 'maxEV':
          return Hd(K, pe);
        case 'parliament':
          return qd(K, pe);
        case 'mergedFavorites':
          return $d(K, pe);
        case 'maximin':
          return Kd(K, pe);
        default:
          return null;
      }
    }, []),
    ye = z.useMemo(() => {
      const K = wp().map((pe) => pe.key);
      {
        const pe = new Set();
        return (
          s.selectedCalculations.left && pe.add(s.selectedCalculations.left),
          s.selectedCalculations.right && pe.add(s.selectedCalculations.right),
          pe.size === 0 && K.length > 0 && pe.add(K[0]),
          [...pe].filter((Oe) => K.includes(Oe))
        );
      }
    }, [s.selectedCalculations]),
    xe = z.useMemo(() => de('current'), [de]),
    ge = z.useMemo(() => {
      const W = de('original');
      return W || null;
    }, [JSON.stringify(de('original'))]),
    Ie = z.useMemo(() => {
      if (!xe) return null;
      const W = {};
      for (const K of ye) W[K] = ve(K, xe, s.debugConfig, s.marketplaceBudget);
      return W;
    }, [xe, ye, ve, s.debugConfig, s.marketplaceBudget]),
    Xe = z.useMemo(() => {
      if (!ge) return null;
      const W = {};
      for (const K of ye) W[K] = ve(K, ge, s.debugConfig, s.marketplaceBudget);
      return W;
    }, [ge, ye, ve, s.debugConfig, s.marketplaceBudget]),
    Sn = z.useMemo(
      () =>
        Object.values(ie).some(
          (W) =>
            W.originalCredences &&
            JSON.stringify(W.credences) !== JSON.stringify(W.originalCredences)
        ),
      [ie]
    ),
    xt = z.useMemo(
      () => Object.keys(s.worldviews).sort((W, K) => parseInt(W, 10) - parseInt(K, 10)),
      [s.worldviews]
    ),
    xn = z.useMemo(
      () => Object.fromEntries(xt.map((W) => [W, Np(s.worldviews[W])])),
      [s.worldviews, xt]
    ),
    En = z.useMemo(
      () =>
        Object.fromEntries(
          xt.map((W) => {
            var K;
            return [W, ((K = s.worldviews[W]) == null ? void 0 : K.completed) === !0];
          })
        ),
      [s.worldviews, xt]
    ),
    rl = xt.every((W) => En[W]),
    hr = xt.length < Uc && rl,
    ze = z.useMemo(() => Se(s.currentStep), [s.currentStep, Se]),
    vr = z.useMemo(() => (ze === -1 ? null : jc[ze]), [ze]),
    Yt = z.useMemo(() => {
      if (ze === -1) return -1;
      const W = be[ze],
        K = ds(be, ze);
      return qt(W) ? K : K + 1;
    }, [ze]),
    Xt = z.useMemo(() => {
      if (ze === -1) return 0;
      const W = be[ze];
      return ((qt(W) ? ds(be, ze) : Yt) / ps) * 100;
    }, [ze, Yt]),
    At = z.useMemo(() => {
      if (ze === -1) return '';
      const W = be[ze];
      return `Question ${qt(W) ? ds(be, ze) : Yt} of ${ps}`;
    }, [ze, Yt]),
    Un = z.useMemo(() => {
      const W = {};
      return (
        be
          .filter((K) => !qt(K))
          .forEach((K) => {
            const pe = ie[K.id];
            pe &&
              (W[K.id] = {
                credences: pe.credences,
                setCredences: (Oe) => I(K.id, Oe),
                originalCredences: pe.originalCredences,
                inputMode: pe.inputMode,
                setInputMode: (Oe) => V(K.id, Oe),
                lockedKeys: pe.lockedKeys,
                setLockedKeys: (Oe) => L(K.id, Oe),
                selectedPreset: pe.selectedPreset,
                setSelectedPreset: (Oe) => b(K.id, Oe),
              });
          }),
        W
      );
    }, [ie, I, V, L, b]),
    ll = z.useMemo(
      () => ({
        currentStep: s.currentStep,
        questions: ie,
        worldviews: s.worldviews,
        worldviewNames: s.worldviewNames,
        activeWorldviewId: s.activeWorldviewId,
        expandedPanel: s.expandedPanel,
        debugConfig: s.debugConfig,
        selectedCalculations: s.selectedCalculations,
        marketplaceBudget: s.marketplaceBudget,
        justCompletedWorldview: s.justCompletedWorldview,
        shareUrlError: c,
        isHydrating: f,
        sessionId: g,
        isAdvancedMode: _p,
        questionsConfig: jc,
        causesConfig: xp,
        defaultCredences: Ep,
        worldviewIds: xt,
        canAddWorldview: hr,
        addWorldview: Fe,
        goToStep: T,
        setCredences: I,
        setInputMode: V,
        setLockedKeys: L,
        setSelectedPreset: b,
        setExpandedPanel: B,
        saveOriginals: re,
        resetToOriginal: fe,
        resetQuiz: Z,
        setDebugConfig: Y,
        switchWorldview: ce,
        setSelectedCalculations: ke,
        setWorldviewName: ee,
        setMarketplaceBudget: ae,
        clearJustCompletedWorldview: se,
        getQuestionIndex: Se,
        getPrevStep: U,
        getNextStep: ne,
        startQuiz: H,
        goBack: k,
        goForward: M,
        currentQuestion: vr,
        currentQuestionIndex: ze,
        totalQuestions: ps,
        progressPercentage: Xt,
        questionNumber: At,
        hasChanged: Sn,
        hasProgressMap: xn,
        completedMap: En,
        calculationResults: Ie,
        originalCalculationResults: Xe,
        stateMap: Un,
      }),
      [
        s.currentStep,
        ie,
        s.worldviews,
        s.worldviewNames,
        s.activeWorldviewId,
        s.expandedPanel,
        s.debugConfig,
        s.selectedCalculations,
        s.marketplaceBudget,
        s.justCompletedWorldview,
        c,
        f,
        g,
        T,
        I,
        V,
        L,
        b,
        B,
        re,
        fe,
        Z,
        Y,
        ce,
        ke,
        ee,
        ae,
        se,
        Se,
        U,
        ne,
        H,
        k,
        M,
        vr,
        ze,
        Xt,
        At,
        Sn,
        xn,
        En,
        Ie,
        Xe,
        Un,
        xt,
        hr,
        Fe,
      ]
    );
  return F.jsxs(qc.Provider, {
    value: ll,
    children: [a, w && F.jsx(Md, { onKeepMine: x, onLoadShared: O, onOpenNewTab: N })],
  });
}
function Mp() {
  const a = z.useContext(qc);
  if (!a) throw new Error('useQuiz must be used within a QuizProvider');
  return a;
}
function Pp({ credences: a, isLocked: s, lockedKeys: i, onChange: c }) {
  const [d, f] = z.useState(null),
    [p, w] = z.useState(!1),
    h = z.useCallback(() => {
      s || (w(!0), f({ ...a }));
    }, [s, a]),
    g = z.useCallback(
      (x) => {
        if (s || !p) return;
        w(!1);
        const O = parseFloat(x.target.value);
        (c(O, d, !0, i), f(null));
      },
      [s, p, d, i, c]
    ),
    v = z.useCallback(
      (x) => {
        if (s) return;
        const O = parseFloat(x.target.value);
        c(O, d, !1, i);
      },
      [s, d, i, c]
    );
  return {
    isDragging: p,
    dragHandlers: {
      onChange: v,
      onMouseDown: h,
      onMouseUp: g,
      onMouseLeave: g,
      onTouchStart: h,
      onTouchEnd: g,
    },
  };
}
function Rp({ sliderKey: a, lockedKeys: s = [], credences: i }) {
  return z.useMemo(() => {
    var O;
    const c = Array.isArray(s) ? s : s ? [s] : [],
      d = c.includes(a),
      f = c.length > 0 && !d,
      p = f ? c.reduce((N, T) => N + (i[T] || 0), 0) : 0,
      w = f ? 100 - p : 100,
      h = f ? `calc(${w}% + ${(50 - w) * 0.16}px)` : null,
      x = Object.keys(i).length - c.length > 2;
    return {
      isLocked: d,
      hasLockedSibling: f,
      lockedValue: p,
      maxAllowed: w,
      thumbOffset: h,
      canLockMore: x,
      featureEnabled: ((O = mo.ui) == null ? void 0 : O.sliderLock) === !0,
    };
  }, [a, s, i]);
}
function vt(a, s, i = 1e-9) {
  return Math.abs(a - s) <= i;
}
function Vn(a) {
  let s = 0;
  for (let i = 0; i < a.length; i++) s += a[i];
  return s;
}
function Dp(a) {
  let s = 1;
  for (let i = 0; i < a.length; i++) s *= a[i];
  return s;
}
function $c(a) {
  let s = 0;
  for (let i = 1; i < a.length; i++) a[i] > a[s] && (s = i);
  return s;
}
function zp(a, s) {
  return a.map((i) => i[s]);
}
function Ap(a, s) {
  let i = 0;
  for (let c = 0; c < a.length; c++) i += a[c] * s[c];
  return i;
}
function Kc(a) {
  let s = a | 0;
  return {
    next() {
      ((s |= 0), (s = (s + 1831565813) | 0));
      let i = Math.imul(s ^ (s >>> 15), 1 | s);
      return (
        (i = (i + Math.imul(i ^ (i >>> 7), 61 | i)) ^ i),
        ((i ^ (i >>> 14)) >>> 0) / 4294967296
      );
    },
    choice(i) {
      return i[Math.floor(this.next() * i.length)];
    },
  };
}
function ho(a) {
  return Vn(a) / a.length;
}
function Gc(a, s) {
  const i = a.length;
  if (i < 2) return 0;
  const c = ho(a),
    d = ho(s);
  let f = 0,
    p = 0,
    w = 0;
  for (let g = 0; g < i; g++) {
    const v = a[g] - c,
      x = s[g] - d;
    ((f += v * x), (p += v * v), (w += x * x));
  }
  const h = Math.sqrt(p * w);
  return h === 0 ? 0 : f / h;
}
function Lc(a) {
  const s = a.map((d, f) => ({ v: d, i: f }));
  s.sort((d, f) => d.v - f.v);
  const i = new Array(a.length);
  let c = 0;
  for (; c < s.length; ) {
    let d = c;
    for (; d < s.length && s[d].v === s[c].v; ) d++;
    const f = (c + d - 1) / 2 + 1;
    for (let p = c; p < d; p++) i[s[p].i] = f;
    c = d;
  }
  return i;
}
function Wp(a, s) {
  return Gc(Lc(a), Lc(s));
}
function Mc(a, s) {
  let i = 0;
  for (let c = 0; c < a.length; c++) i += (a[c] - s[c]) ** 2;
  return Math.sqrt(i);
}
function Fp(a) {
  const s = a.length,
    i = a.map((w) => w.slice()),
    c = Array.from({ length: s }, (w, h) => Array.from({ length: s }, (g, v) => (h === v ? 1 : 0))),
    d = 100 * s * s;
  for (let w = 0; w < d; w++) {
    let h = 0,
      g = 0,
      v = 1;
    for (let I = 0; I < s; I++)
      for (let V = I + 1; V < s; V++)
        Math.abs(i[I][V]) > h && ((h = Math.abs(i[I][V])), (g = I), (v = V));
    if (h < 1e-12) break;
    const x = i[g][g] === i[v][v] ? Math.PI / 4 : 0.5 * Math.atan2(2 * i[g][v], i[g][g] - i[v][v]),
      O = Math.cos(x),
      N = Math.sin(x),
      T = O * O * i[g][g] + 2 * N * O * i[g][v] + N * N * i[v][v],
      j = N * N * i[g][g] - 2 * N * O * i[g][v] + O * O * i[v][v];
    ((i[g][v] = 0), (i[v][g] = 0), (i[g][g] = T), (i[v][v] = j));
    for (let I = 0; I < s; I++) {
      if (I === g || I === v) continue;
      const V = O * i[I][g] + N * i[I][v],
        L = -N * i[I][g] + O * i[I][v];
      ((i[I][g] = V), (i[g][I] = V), (i[I][v] = L), (i[v][I] = L));
    }
    for (let I = 0; I < s; I++) {
      const V = O * c[I][g] + N * c[I][v],
        L = -N * c[I][g] + O * c[I][v];
      ((c[I][g] = V), (c[I][v] = L));
    }
  }
  const f = i.map((w, h) => w[h]),
    p = f.map((w, h) => h);
  return (
    p.sort((w, h) => f[h] - f[w]),
    { eigenvalues: p.map((w) => f[w]), eigenvectors: p.map((w) => c.map((h) => h[w])) }
  );
}
function Vp(a, s = 2) {
  const i = a.length;
  if (i <= s)
    return Array.from({ length: i }, (v, x) => {
      const O = new Array(s).fill(0);
      return (x < s && (O[x] = 1), O);
    });
  const c = a.map((v) => v.map((x) => x * x)),
    d = Array.from({ length: i }, () => new Array(i).fill(0)),
    f = c.map((v) => ho(v)),
    p = ho(f);
  for (let v = 0; v < i; v++)
    for (let x = 0; x < i; x++) d[v][x] = -0.5 * (c[v][x] - f[v] - f[x] + p);
  const { eigenvalues: w, eigenvectors: h } = Fp(d),
    g = Array.from({ length: i }, () => new Array(s).fill(0));
  for (let v = 0; v < s; v++) {
    const x = Math.max(w[v], 0),
      O = Math.sqrt(x);
    for (let N = 0; N < i; N++) g[N][v] = h[v][N] * O;
  }
  return g;
}
function bp(a, s) {
  const i = a.length,
    c = Array.from({ length: i }, () => new Array(i).fill(0)),
    d = Array.from({ length: i }, () => new Array(i).fill(0));
  for (let f = 0; f < i; f++)
    for (let p = 0; p < i; p++)
      if (f === p) ((c[f][p] = 1), (d[f][p] = 1));
      else {
        const w = s.map((g) => a[f].evaluate(g)),
          h = s.map((g) => a[p].evaluate(g));
        ((c[f][p] = (Gc(w, h) + 1) / 2), (d[f][p] = (Wp(w, h) + 1) / 2));
      }
  return { pearsonMatrix: c, rankMatrix: d };
}
function Up(a, s) {
  const i = a.length,
    c = Array.from({ length: i }, () => new Array(i).fill(0));
  for (let d = 0; d < i; d++)
    for (let f = 0; f < i; f++) {
      const p = 1 - a[d][f],
        w = 1 - s[d][f];
      c[d][f] = Math.sqrt(p * p + w * w);
    }
  return Vp(c, 2);
}
function Bp(a, s) {
  const i = Vn(s);
  if (i === 0) return [0, 0];
  const c = a[0].length,
    d = new Array(c).fill(0);
  for (let f = 0; f < a.length; f++) for (let p = 0; p < c; p++) d[p] += s[f] * a[f][p];
  for (let f = 0; f < c; f++) d[f] /= i;
  return d;
}
function Qp(a, s) {
  let i = 0,
    c = Mc(a[0], s);
  for (let d = 1; d < a.length; d++) {
    const f = Mc(a[d], s);
    f < c && ((c = f), (i = d));
  }
  return i;
}
class Hp {
  constructor(s, i) {
    ((this.name = s), (this.interventionValues = i));
  }
  valueOf(s) {
    const i = this.interventionValues[s];
    return i != null ? Number(i) : 0;
  }
}
function qp(a, s, i) {
  const c = {};
  for (const f of a) {
    let p = 0;
    for (const w of s) {
      const h = i[w.name] || 0;
      p += h * w.valueOf(f);
    }
    c[f] = p;
  }
  let d = a[0];
  for (const f of a) c[f] > c[d] && (d = f);
  return { best: d, scores: c };
}
function $p(a, s, i, c) {
  const d = zp(a.values, c);
  return s * Ap(d, i);
}
function Kp(a, s, i, c) {
  let d = 0;
  const f = {};
  for (const [p, w] of Object.entries(a.effects)) {
    const h = s[w.recipient_type] || 0,
      g = $p(w, h, i, c);
    ((f[p] = g), (d += g));
  }
  return { total: d, breakdown: f };
}
function Gp(a, s, i, c) {
  const d = {};
  for (const [f, p] of Object.entries(a)) d[f] = Kp(p, s, i, c).total;
  return d;
}
function Yp(a, s, i) {
  const c = {};
  for (const [d, f] of Object.entries(a))
    s[d].tags.near_term_xrisk ? (c[d] = f) : (c[d] = f * (1 - i));
  return c;
}
const lt = {
    met_threshold: 0.5,
    nash_disagreement_point: 'zero_spending',
    msa_permissibility_mode: 'winner_take_all',
    msa_top_k: 2,
    msa_within_percent: 0.1,
    msa_binary_threshold: 0,
    tie_break: 'deterministic',
  },
  Xp = new Set(['Kantianism', 'Rawlsian Contractarianism']);
function Jp(a, s, i) {
  const d = i / 10,
    f = Math.round(d);
  let p;
  (vt(d, f) ? (p = f) : (p = Math.floor(d)), (p = Math.max(p, 0)));
  const w = a[s].diminishing_returns;
  return p >= w.length ? w[w.length - 1] : w[p];
}
function Gt(a, s) {
  return a === 'random' ? Kc(s ?? Date.now()) : null;
}
function mr(a, s = 'deterministic', i = null) {
  if (!a.length) throw new Error('No candidates provided.');
  return s === 'random' ? (i || (i = Kc(Date.now())), i.choice(a)) : a.slice().sort()[0];
}
function Fn(a, s = 'deterministic', i = null) {
  const c = Math.max(...Object.values(a)),
    d = Object.keys(a).filter((f) => vt(a[f], c));
  return mr(d, s, i);
}
function Yc(a, s = !1, i = 1e-6) {
  const c = [];
  for (let f = 0; f < a.length; f++) {
    const p = a[f];
    if (p.credence === void 0 || p.credence === null)
      throw new Error(`Worldview at index ${f} is missing 'credence'.`);
    const w = Number(p.credence);
    if (isNaN(w))
      throw new Error(`Worldview at index ${f} has non-numeric credence: ${p.credence}`);
    if (w < 0) {
      const h = p.name || `worldview_${f}`;
      throw new Error(`Credence for worldview '${h}' must be non-negative. Got ${w}.`);
    }
    c.push(w);
  }
  const d = Vn(c);
  if (s && !vt(d, 1, i))
    throw new Error(`Worldview credences must sum to 1.0 for this voting method. Got ${d}.`);
  return { credences: c, total: d };
}
function kn(a) {
  const { credences: s, total: i } = Yc(a, !1);
  return i <= 0 ? s.map(() => 0) : s.map((c) => c / i);
}
function Ts(a, s, i) {
  const c = Gp(a, i.moral_weights, i.discount_factors, i.risk_profile),
    d = Yp(c, a, i.p_extinction),
    f = {};
  for (const p of Object.keys(a)) f[p] = d[p] * Jp(a, p, s[p]);
  return f;
}
function bn(a, s, i) {
  return i.map((c) => Ts(a, s, c));
}
function Zp(a) {
  return Object.keys(a).sort((s, i) => a[i] - a[s] || s.localeCompare(i));
}
function em(a, s = null) {
  const i = String(a.theory_type || '')
    .trim()
    .toLowerCase();
  if (i === 'binary' || i === 'cardinal') return i;
  const c = a.name || '';
  if (s && c in s) {
    const d = String(s[c]).trim().toLowerCase();
    if (d === 'binary' || d === 'cardinal') return d;
  }
  return Xp.has(c) ? 'binary' : 'cardinal';
}
function tm(a, s, i, c) {
  const d = {};
  for (const h of Object.keys(a)) d[h] = 0;
  const { credences: f, total: p } = Yc(c, !1);
  if (!(vt(p, 1, 1e-6) || vt(p, 0, 1e-12)))
    throw new Error(`Worldview credences must sum to 1.0 (or all be zero). Got ${p}.`);
  if (vt(p, 0, 1e-12)) return d;
  const w = Gt(lt.tie_break, null);
  for (let h = 0; h < c.length; h++) {
    const g = f[h] * i,
      v = Ts(a, s, c[h]),
      x = Fn(v, 'deterministic', w);
    d[x] += g;
  }
  return d;
}
function nm(
  a,
  s,
  i,
  { customWorldviews: c = null, tieBreak: d = null, randomSeed: f = null } = {}
) {
  const p = {};
  for (const N of Object.keys(a)) p[N] = 0;
  d = d ?? lt.tie_break;
  const w = Gt(d, f);
  if (!c || !c.length) return p;
  const h = kn(c);
  if (vt(Vn(h), 0)) return p;
  const g = $c(h),
    v = c[g],
    x = Ts(a, s, v),
    O = Fn(x, d, w);
  return ((p[O] = i), p);
}
function rm(
  a,
  s,
  i,
  { customWorldviews: c = null, tieBreak: d = null, randomSeed: f = null } = {}
) {
  const p = {};
  for (const O of Object.keys(a)) p[O] = 0;
  d = d ?? lt.tie_break;
  const w = Gt(d, f);
  if (!c || !c.length) return p;
  const h = kn(c);
  if (vt(Vn(h), 0)) return p;
  const g = bn(a, s, c),
    v = {};
  for (const O of Object.keys(a)) {
    let N = 0;
    for (let T = 0; T < c.length; T++) N += h[T] * g[T][O];
    v[O] = N;
  }
  const x = Fn(v, d, w);
  return ((p[x] = i), p);
}
function lm(a, s, i, c, { metThreshold: d = null, tieBreak: f = null, randomSeed: p = null } = {}) {
  const w = {};
  for (const V of Object.keys(a)) w[V] = 0;
  if (!c || !c.length) return w;
  const h = d ?? lt.met_threshold;
  f = f ?? lt.tie_break;
  const g = Gt(f, p),
    v = bn(a, s, c),
    x = kn(c),
    O = $c(x),
    N = x[O];
  let T = O;
  if (N < h) {
    const V = Object.keys(a),
      L = v.map((Z) => ({ evaluate: (Y) => Z[Y] })),
      { pearsonMatrix: b, rankMatrix: B } = bp(L, V),
      re = Up(b, B),
      fe = Bp(re, x);
    T = Qp(re, fe);
  }
  const j = v[T],
    I = Fn(j, f, g);
  return ((w[I] = i), w);
}
function om(a, s, i, c = 'deterministic', d = null) {
  const f = a.length,
    p = f > 0 ? Object.keys(a[0]) : [],
    w = a.map((h) => Fn(h, c, d));
  if (i === 'zero_spending') return new Array(f).fill(0);
  if (i === 'anti_utopia') return a.map((h) => Math.min(...p.map((g) => h[g])));
  if (i === 'random_dictator') {
    const h = [];
    for (let g = 0; g < f; g++) {
      let v = 0;
      for (let x = 0; x < f; x++) v += s[x] * a[g][w[x]];
      h.push(v);
    }
    return h;
  }
  if (i === 'exclusionary_proportional_split') {
    const h = [];
    for (let g = 0; g < f; g++) {
      const v = s[g];
      if (v >= 1) {
        h.push(0);
        continue;
      }
      let x = 0;
      const O = 1 - v;
      for (let N = 0; N < f; N++) N !== g && (x += (s[N] / O) * a[g][w[N]]);
      h.push(x);
    }
    return h;
  }
  throw new Error(
    'Unknown disagreement_point. Use one of: zero_spending, anti_utopia, random_dictator, exclusionary_proportional_split.'
  );
}
function im(
  a,
  s,
  i,
  c,
  { disagreementPoint: d = null, tieBreak: f = null, randomSeed: p = null } = {}
) {
  const w = {};
  for (const V of Object.keys(a)) w[V] = 0;
  if (!c || !c.length) return w;
  ((d = d ?? lt.nash_disagreement_point), (f = f ?? lt.tie_break));
  const h = Gt(f, p),
    g = bn(a, s, c),
    v = kn(c),
    x = Object.keys(a),
    O = om(g, v, d, f, h),
    N = {},
    T = {};
  for (const V of x) {
    const L = [];
    for (let b = 0; b < c.length; b++) L.push(g[b][V] - O[b]);
    (L.every((b) => b >= -1e-12) && (N[V] = Dp(L.map((b) => Math.max(b, 0)))), (T[V] = Vn(L)));
  }
  let j;
  if (Object.keys(N).length) {
    const V = Math.max(...Object.values(N));
    j = Object.keys(N).filter((L) => vt(N[L], V));
  } else {
    const V = Math.max(...Object.values(T));
    j = Object.keys(T).filter((L) => vt(T[L], V));
  }
  const I = mr(j, f, h);
  return ((w[I] = i), w);
}
function sm(
  a,
  s,
  i,
  c,
  {
    worldviewTypes: d = null,
    cardinalPermissibilityMode: f = null,
    cardinalTopK: p = null,
    cardinalWithinPercent: w = null,
    binaryPermissibilityThreshold: h = null,
    noPermissibleAction: g = 'stop',
    tieBreak: v = null,
    randomSeed: x = null,
  } = {}
) {
  const O = {};
  for (const ee of Object.keys(a)) O[ee] = 0;
  if (!c || !c.length) return O;
  v = v ?? lt.tie_break;
  const N = Gt(v, x);
  ((f = f ?? lt.msa_permissibility_mode),
    (p = p ?? lt.msa_top_k),
    (w = w ?? lt.msa_within_percent),
    (h = h ?? lt.msa_binary_threshold));
  const T = bn(a, s, c),
    j = kn(c),
    I = Object.keys(a),
    V = [],
    L = [];
  for (let ee = 0; ee < c.length; ee++) em(c[ee], d) === 'binary' ? L.push(ee) : V.push(ee);
  const b = Vn(V.map((ee) => j[ee])),
    B = {};
  for (const ee of I) B[ee] = 0;
  let re = null;
  if (V.length) {
    const ee = [],
      ae = {};
    for (const se of V) {
      const Fe = `${c[se].name || `worldview_${se}`}_${se}`;
      (ee.push(new Hp(Fe, T[se])), (ae[Fe] = j[se]));
    }
    const te = qp(I, ee, ae);
    ((re = te.best), Object.assign(B, te.scores));
  }
  const fe = new Set();
  if (V.length)
    if (f === 'winner_take_all') fe.add(re);
    else if (f === 'top_k') {
      const ee = Math.max(1, Math.floor(p)),
        ae = I.slice().sort((te, se) => B[se] - B[te] || te.localeCompare(se));
      for (let te = 0; te < Math.min(ee, ae.length); te++) fe.add(ae[te]);
    } else if (f === 'within_percent') {
      if (w < 0) throw new Error('cardinalWithinPercent must be >= 0.');
      const ee = B[re],
        ae = ee - Math.abs(ee) * w;
      for (const te of I) B[te] >= ae - 1e-12 && fe.add(te);
    } else
      throw new Error(
        'Unknown cardinalPermissibilityMode. Use one of: winner_take_all, top_k, within_percent.'
      );
  const Z = {};
  for (const ee of I) Z[ee] = 0;
  for (const ee of fe) Z[ee] += b;
  for (const ee of L) {
    const ae = j[ee],
      te = T[ee];
    for (const se of I) te[se] > h && (Z[se] += ae);
  }
  const Y = Math.max(...Object.values(Z), 0);
  if (Y <= 0.5) {
    if (g === 'stop')
      return { __stop__: !0, __reason__: 'No intervention exceeded 50% permissibility.' };
    if (g === 'fallback_mec') {
      let ee;
      if (V.length) ee = Fn(B, v, N);
      else {
        const ae = {};
        for (const te of I) {
          let se = 0;
          for (let Ce = 0; Ce < c.length; Ce++) se += j[Ce] * T[Ce][te];
          ae[te] = se;
        }
        ee = Fn(ae, v, N);
      }
      return ((O[ee] = i), O);
    }
    throw new Error('Unknown noPermissibleAction. Use stop or fallback_mec.');
  }
  const ce = I.filter((ee) => vt(Z[ee], Y)),
    ke = mr(ce, v, N);
  return ((O[ke] = i), O);
}
function am(a, s, i, c, { tieBreak: d = null, randomSeed: f = null } = {}) {
  const p = {};
  for (const I of Object.keys(a)) p[I] = 0;
  if (!c || !c.length) return p;
  d = d ?? lt.tie_break;
  const w = Gt(d, f),
    h = bn(a, s, c),
    g = kn(c),
    v = Object.keys(a),
    x = v.length,
    O = {};
  for (const I of v) O[I] = 0;
  for (let I = 0; I < h.length; I++) {
    const V = Zp(h[I]);
    for (let L = 0; L < V.length; L++) {
      const b = x - 1 - L;
      O[V[L]] += g[I] * b;
    }
  }
  const N = Math.max(...Object.values(O)),
    T = v.filter((I) => vt(O[I], N)),
    j = mr(T, d, w);
  return ((p[j] = i), p);
}
function um(a, s, i, c, { tieBreak: d = null, randomSeed: f = null } = {}) {
  const p = {};
  for (const L of Object.keys(a)) p[L] = 0;
  if (!c || !c.length) return p;
  d = d ?? lt.tie_break;
  const w = Gt(d, f),
    h = bn(a, s, c),
    g = kn(c),
    v = Object.keys(a),
    x = {};
  for (const L of v) {
    x[L] = {};
    for (const b of v) x[L][b] = 0;
  }
  for (let L = 0; L < h.length; L++) {
    const b = h[L],
      B = g[L];
    for (let re = 0; re < v.length; re++)
      for (let fe = re + 1; fe < v.length; fe++) {
        const Z = v[re],
          Y = v[fe];
        b[Z] > b[Y] ? (x[Z][Y] += B) : b[Y] > b[Z] && (x[Y][Z] += B);
      }
  }
  const O = {};
  for (const L of v) {
    O[L] = {};
    for (const b of v) O[L][b] = x[L][b] - x[b][L];
  }
  const N = {};
  for (const L of v) {
    N[L] = {};
    for (const b of v) N[L][b] = O[L][b] > 0 ? O[L][b] : -1 / 0;
    N[L][L] = 0;
  }
  for (const L of v)
    for (const b of v)
      if (b !== L)
        for (const B of v) {
          if (b === B || B === L) continue;
          const re = Math.min(N[b][L], N[L][B]);
          re > N[b][B] && (N[b][B] = re);
        }
  const T = {};
  for (const L of v) {
    T[L] = {};
    for (const b of v) T[L][b] = O[L][b] > 0 && O[L][b] > N[b][L] + 1e-12;
  }
  let j = v.filter((L) => !v.some((b) => b !== L && T[b][L])),
    I;
  if (j.length) I = j;
  else {
    const L = {};
    for (const B of v) {
      let re = 0;
      for (const fe of v) fe !== B && (re += O[B][fe]);
      L[B] = re;
    }
    const b = Math.max(...Object.values(L));
    I = v.filter((B) => vt(L[B], b));
  }
  const V = mr(I, d, w);
  return ((p[V] = i), p);
}
function cm(a, s, i, c, { tieBreak: d = null, randomSeed: f = null } = {}) {
  const p = {};
  for (const I of Object.keys(a)) p[I] = 0;
  if (!c || !c.length) return p;
  d = d ?? lt.tie_break;
  const w = Gt(d, f),
    h = bn(a, s, c),
    g = kn(c),
    v = Object.keys(a),
    x = {};
  for (const I of v) {
    const V = [];
    for (let L = 0; L < c.length; L++) V.push(g[L] * h[L][I]);
    x[I] = V.slice().sort((L, b) => L - b);
  }
  function O(I, V) {
    for (let L = 0; L < I.length; L++) {
      if (I[L] < V[L]) return -1;
      if (I[L] > V[L]) return 1;
    }
    return 0;
  }
  let N = x[v[0]];
  for (let I = 1; I < v.length; I++) O(x[v[I]], N) > 0 && (N = x[v[I]]);
  const T = v.filter((I) => O(x[I], N) === 0),
    j = mr(T, d, w);
  return ((p[j] = i), p);
}
function fm(a, s, i, { incrementSize: c = 10, ...d } = {}) {
  const f = {};
  for (const w of Object.keys(a)) f[w] = 0;
  let p = i;
  for (; p > 0; ) {
    const w = Math.min(c, p),
      h = s(a, f, w, d);
    if (typeof h != 'object')
      throw new TypeError('Voting methods must return an object of allocations.');
    if (h.__stop__) break;
    for (const g of Object.keys(a)) f[g] += h[g] || 0;
    p -= w;
  }
  return { funding: f };
}
const dm = {
  credenceWeighted: (a, s, i, c) => tm(a, s, i, c.customWorldviews),
  myFavoriteTheory: (a, s, i, c) => nm(a, s, i, c),
  mec: (a, s, i, c) => rm(a, s, i, c),
  met: (a, s, i, c) => lm(a, s, i, c.customWorldviews, c),
  nashBargaining: (a, s, i, c) => im(a, s, i, c.customWorldviews, c),
  msa: (a, s, i, c) => sm(a, s, i, c.customWorldviews, c),
  borda: (a, s, i, c) => am(a, s, i, c.customWorldviews, c),
  splitCycle: (a, s, i, c) => um(a, s, i, c.customWorldviews, c),
  lexicographicMaximin: (a, s, i, c) => cm(a, s, i, c.customWorldviews, c),
};
function pm(a, s, i, c, d, f = {}) {
  const p = {};
  for (const [x, O] of Object.entries(a)) {
    const { name: N, color: T, ...j } = O;
    p[x] = j;
  }
  const w = dm[i];
  if (!w) throw new Error(`Unknown voting method: ${i}`);
  const { funding: h } = fm(p, w, c, { incrementSize: d, customWorldviews: s, ...f }),
    g = Object.values(h).reduce((x, O) => x + O, 0),
    v = {};
  for (const [x, O] of Object.entries(h)) v[x] = g > 0 ? (O / g) * 100 : 0;
  return { allocations: v, funding: h };
}
const mm = 800,
  hm = 10,
  vm = {
    malaria_nets: {
      name: 'Malaria Nets',
      color: '#5eb3d4',
      tags: { near_term_xrisk: !1 },
      diminishing_returns: [
        1, 0.833, 0.714, 0.625, 0.556, 0.5, 0.455, 0.417, 0.385, 0.357, 0.333, 0.313, 0.294, 0.278,
        0.263, 0.25, 0.238, 0.227, 0.217, 0.208, 0.2, 0.192, 0.185, 0.179, 0.173, 0.167, 0.161,
        0.156, 0.152, 0.147, 0.143, 0.139, 0.135, 0.132, 0.128, 0.125, 0.122, 0.119, 0.116, 0.114,
        0.111, 0.109, 0.106, 0.104, 0.102, 0.1, 0.098, 0.096, 0.094, 0.093, 0.091, 0.089, 0.088,
        0.087, 0.085, 0.084, 0.082, 0.081, 0.08, 0.079, 0.077, 0.076, 0.075, 0.074, 0.073, 0.072,
        0.071, 0.07, 0.069, 0.068, 0.068, 0.067, 0.066, 0.065, 0.065, 0.064, 0.063, 0.063, 0.062,
        0.061, 0.061, 0.06, 0.06, 0.059, 0.059, 0.058, 0.058, 0.057, 0.057, 0.056,
      ],
      effects: {
        effect_lives_saved: {
          recipient_type: 'human_life_years',
          values: [
            [1e3, 950, 900, 850],
            [800, 760, 720, 680],
            [400, 380, 360, 340],
            [100, 95, 90, 85],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
        },
        effect_disability_reduction: {
          recipient_type: 'human_ylds',
          values: [
            [500, 475, 450, 425],
            [600, 570, 540, 510],
            [400, 380, 360, 340],
            [200, 190, 180, 170],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
        },
        effect_income: {
          recipient_type: 'human_income_doublings',
          values: [
            [0, 0, 0, 0],
            [50, 47, 45, 42],
            [100, 95, 90, 85],
            [80, 76, 72, 68],
            [20, 19, 18, 17],
            [0, 0, 0, 0],
          ],
        },
      },
    },
    cage_free_campaigns: {
      name: 'Cage-Free Campaigns',
      color: '#e8a838',
      tags: { near_term_xrisk: !1 },
      diminishing_returns: [
        1, 0.667, 0.5, 0.4, 0.333, 0.286, 0.25, 0.222, 0.2, 0.182, 0.167, 0.154, 0.143, 0.133,
        0.125, 0.118, 0.111, 0.105, 0.1, 0.095, 0.091, 0.087, 0.083, 0.08, 0.077, 0.074, 0.071,
        0.069, 0.067, 0.065, 0.063, 0.061, 0.059, 0.057, 0.056, 0.054, 0.053, 0.051, 0.05, 0.049,
        0.048, 0.047, 0.046, 0.045, 0.044, 0.043, 0.042, 0.041, 0.04, 0.039, 0.038, 0.038, 0.037,
        0.036, 0.036, 0.035, 0.035, 0.034, 0.034, 0.033, 0.033, 0.032, 0.032, 0.031, 0.031, 0.031,
        0.03, 0.03, 0.03, 0.029, 0.029, 0.029, 0.028, 0.028, 0.028, 0.028, 0.027, 0.027, 0.027,
        0.027, 0.026, 0.026, 0.026, 0.026, 0.026, 0.025, 0.025, 0.025, 0.025, 0.025,
      ],
      effects: {
        effect_chickens: {
          recipient_type: 'chickens_birds',
          values: [
            [5e4, 45e3, 4e4, 35e3],
            [8e4, 72e3, 64e3, 56e3],
            [6e4, 54e3, 48e3, 42e3],
            [2e4, 18e3, 16e3, 14e3],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
        },
      },
    },
    shrimp_welfare: {
      name: 'Shrimp Welfare',
      color: '#e06060',
      tags: { near_term_xrisk: !1 },
      diminishing_returns: [
        1, 0.667, 0.5, 0.4, 0.333, 0.286, 0.25, 0.222, 0.2, 0.182, 0.167, 0.154, 0.143, 0.133,
        0.125, 0.118, 0.111, 0.105, 0.1, 0.095, 0.091, 0.087, 0.083, 0.08, 0.077, 0.074, 0.071,
        0.069, 0.067, 0.065, 0.063, 0.061, 0.059, 0.057, 0.056, 0.054, 0.053, 0.051, 0.05, 0.049,
        0.048, 0.047, 0.046, 0.045, 0.044, 0.043, 0.042, 0.041, 0.04, 0.039, 0.038, 0.038, 0.037,
        0.036, 0.036, 0.035, 0.035, 0.034, 0.034, 0.033, 0.033, 0.032, 0.032, 0.031, 0.031, 0.031,
        0.03, 0.03, 0.03, 0.029, 0.029, 0.029, 0.028, 0.028, 0.028, 0.028, 0.027, 0.027, 0.027,
        0.027, 0.026, 0.026, 0.026, 0.026, 0.026, 0.025, 0.025, 0.025, 0.025, 0.025,
      ],
      effects: {
        effect_shrimp: {
          recipient_type: 'shrimp',
          values: [
            [1e6, 8e5, 6e5, 4e5],
            [2e6, 16e5, 12e5, 8e5],
            [15e5, 12e5, 9e5, 6e5],
            [5e5, 4e5, 3e5, 2e5],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
        },
      },
    },
    wild_animal_welfare: {
      name: 'Wild Animal Welfare',
      color: '#7bc67e',
      tags: { near_term_xrisk: !1 },
      diminishing_returns: [
        1, 0.769, 0.625, 0.526, 0.455, 0.4, 0.357, 0.323, 0.294, 0.27, 0.25, 0.233, 0.217, 0.204,
        0.192, 0.182, 0.172, 0.164, 0.156, 0.149, 0.143, 0.137, 0.132, 0.127, 0.122, 0.118, 0.114,
        0.11, 0.107, 0.104, 0.101, 0.098, 0.096, 0.093, 0.091, 0.089, 0.087, 0.085, 0.083, 0.081,
        0.079, 0.078, 0.076, 0.075, 0.073, 0.072, 0.071, 0.069, 0.068, 0.067, 0.066, 0.065, 0.064,
        0.063, 0.063, 0.062, 0.061, 0.06, 0.06, 0.059, 0.058, 0.058, 0.057, 0.057, 0.056, 0.056,
        0.055, 0.055, 0.054, 0.054, 0.053, 0.053, 0.053, 0.052, 0.052, 0.052, 0.051, 0.051, 0.051,
        0.05, 0.05, 0.05, 0.05, 0.049, 0.049, 0.049, 0.049, 0.048, 0.048, 0.048,
      ],
      effects: {
        effect_mammals: {
          recipient_type: 'mammals',
          values: [
            [100, 80, 50, 30],
            [500, 400, 250, 150],
            [1e3, 800, 500, 300],
            [800, 640, 400, 240],
            [200, 160, 100, 60],
            [0, 0, 0, 0],
          ],
        },
        effect_invertebrates: {
          recipient_type: 'non_shrimp_invertebrates',
          values: [
            [1e4, 8e3, 5e3, 3e3],
            [5e4, 4e4, 25e3, 15e3],
            [1e5, 8e4, 5e4, 3e4],
            [8e4, 64e3, 4e4, 24e3],
            [2e4, 16e3, 1e4, 6e3],
            [0, 0, 0, 0],
          ],
        },
      },
    },
    fish_welfare: {
      name: 'Fish Welfare',
      color: '#9b7fd4',
      tags: { near_term_xrisk: !1 },
      diminishing_returns: [
        1, 0.667, 0.5, 0.4, 0.333, 0.286, 0.25, 0.222, 0.2, 0.182, 0.167, 0.154, 0.143, 0.133,
        0.125, 0.118, 0.111, 0.105, 0.1, 0.095, 0.091, 0.087, 0.083, 0.08, 0.077, 0.074, 0.071,
        0.069, 0.067, 0.065, 0.063, 0.061, 0.059, 0.057, 0.056, 0.054, 0.053, 0.051, 0.05, 0.049,
        0.048, 0.047, 0.046, 0.045, 0.044, 0.043, 0.042, 0.041, 0.04, 0.039, 0.038, 0.038, 0.037,
        0.036, 0.036, 0.035, 0.035, 0.034, 0.034, 0.033, 0.033, 0.032, 0.032, 0.031, 0.031, 0.031,
        0.03, 0.03, 0.03, 0.029, 0.029, 0.029, 0.028, 0.028, 0.028, 0.028, 0.027, 0.027, 0.027,
        0.027, 0.026, 0.026, 0.026, 0.026, 0.026, 0.025, 0.025, 0.025, 0.025, 0.025,
      ],
      effects: {
        effect_fish: {
          recipient_type: 'fish',
          values: [
            [1e5, 9e4, 8e4, 7e4],
            [2e5, 18e4, 16e4, 14e4],
            [15e4, 135e3, 12e4, 105e3],
            [5e4, 45e3, 4e4, 35e3],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
        },
      },
    },
    ai_safety_policy: {
      name: 'AI Safety & Policy',
      color: '#d4a05e',
      tags: { near_term_xrisk: !0 },
      diminishing_returns: [
        1, 0.909, 0.833, 0.769, 0.714, 0.667, 0.625, 0.588, 0.556, 0.526, 0.5, 0.476, 0.455, 0.435,
        0.417, 0.4, 0.385, 0.37, 0.357, 0.345, 0.333, 0.323, 0.313, 0.303, 0.294, 0.286, 0.278,
        0.27, 0.263, 0.256, 0.25, 0.244, 0.238, 0.233, 0.227, 0.222, 0.217, 0.213, 0.208, 0.204,
        0.2, 0.196, 0.192, 0.189, 0.185, 0.182, 0.179, 0.176, 0.173, 0.17, 0.167, 0.164, 0.161,
        0.159, 0.156, 0.154, 0.152, 0.149, 0.147, 0.145, 0.143, 0.141, 0.139, 0.137, 0.135, 0.134,
        0.132, 0.13, 0.129, 0.127, 0.126, 0.124, 0.123, 0.121, 0.12, 0.119, 0.117, 0.116, 0.115,
        0.114, 0.112, 0.111, 0.11, 0.109, 0.108, 0.107, 0.106, 0.105, 0.104, 0.103,
      ],
      effects: {
        effect_human_lives_far_future: {
          recipient_type: 'human_life_years',
          values: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [100, 50, -50, -100],
            [1e4, 8e3, 5e3, 3e3],
            [5e4, 4e4, 25e3, 15e3],
            [1e5, 8e4, 5e4, 3e4],
          ],
        },
      },
    },
  },
  ym = [
    { key: 'human_life_years', label: 'Human Life-Years' },
    { key: 'human_ylds', label: 'Human YLDs' },
    { key: 'human_income_doublings', label: 'Human Income Doublings' },
    { key: 'chickens_birds', label: 'Chickens/Birds' },
    { key: 'fish', label: 'Fish' },
    { key: 'shrimp', label: 'Shrimp' },
    { key: 'non_shrimp_invertebrates', label: 'Non-Shrimp Invertebrates' },
    { key: 'mammals', label: 'Mammals' },
  ],
  gm = ['0-5 years', '5-10 years', '10-20 years', '20-100 years', '100-500 years', '500+ years'],
  wm = [
    { value: 0, label: 'Neutral' },
    { value: 1, label: 'Upside' },
    { value: 2, label: 'Downside' },
    { value: 3, label: 'Combined' },
  ],
  _m = [
    { key: 'credenceWeighted', name: 'Credence-Weighted' },
    { key: 'myFavoriteTheory', name: 'My Favorite Theory' },
    { key: 'mec', name: 'MEC' },
    {
      key: 'met',
      name: 'MET',
      options: {
        metThreshold: {
          label: 'Credence Threshold',
          type: 'slider',
          default: 0.5,
          min: 0,
          max: 1,
          step: 0.05,
        },
      },
    },
    {
      key: 'nashBargaining',
      name: 'Nash Bargaining',
      options: {
        disagreementPoint: {
          label: 'Disagreement Point',
          type: 'select',
          default: 'zero_spending',
          choices: [
            { value: 'zero_spending', label: 'Zero Spending', ignoresCredences: !0 },
            { value: 'anti_utopia', label: 'Anti-Utopia', ignoresCredences: !0 },
            { value: 'random_dictator', label: 'Random Dictator' },
            { value: 'exclusionary_proportional_split', label: 'Exclusionary Proportional Split' },
          ],
        },
      },
    },
    {
      key: 'msa',
      name: 'MSA',
      options: {
        cardinalPermissibilityMode: {
          label: 'Permissibility Mode',
          type: 'select',
          default: 'winner_take_all',
          choices: [
            { value: 'winner_take_all', label: 'Winner Take All' },
            { value: 'top_k', label: 'Top K' },
            { value: 'within_percent', label: 'Within Percent' },
          ],
        },
        cardinalTopK: {
          label: 'Top K Projects',
          type: 'number',
          default: 2,
          min: 1,
          max: 6,
          step: 1,
          showWhen: { cardinalPermissibilityMode: 'top_k' },
        },
        cardinalWithinPercent: {
          label: 'Within Percent',
          type: 'number',
          default: 0.1,
          min: 0,
          max: 1,
          step: 0.01,
          showWhen: { cardinalPermissibilityMode: 'within_percent' },
        },
        binaryPermissibilityThreshold: {
          label: 'Binary Threshold',
          type: 'number',
          default: 0,
          min: 0,
          max: 1,
          step: 0.05,
        },
      },
    },
    { key: 'borda', name: 'Borda Count' },
    { key: 'splitCycle', name: 'Split-Cycle' },
    { key: 'lexicographicMaximin', name: 'Lexicographic Maximin' },
  ],
  km = [
    {
      id: 'total_utilitarian',
      name: 'Total Utilitarian',
      moral_weights: {
        human_life_years: 1,
        human_ylds: 1,
        human_income_doublings: 0.3,
        chickens_birds: 0.4,
        fish: 0.24,
        shrimp: 0.08,
        non_shrimp_invertebrates: 0.07,
        mammals: 0.44,
      },
      discount_factors: [1, 0.9, 0.8, 0.6, 0.4, 0.01],
      risk_profile: 0,
      p_extinction: 0,
    },
    {
      id: 'kantianism',
      name: 'Kantianism',
      moral_weights: {
        human_life_years: 1,
        human_ylds: 0.5,
        human_income_doublings: 0.5,
        chickens_birds: 0.05,
        fish: 0.01,
        shrimp: 0.001,
        non_shrimp_invertebrates: 0.001,
        mammals: 0.05,
      },
      discount_factors: [1, 1, 0.5, 0.1, 0.001, 1e-5],
      risk_profile: 3,
      p_extinction: 0,
    },
    {
      id: 'non_util_consequentialism',
      name: 'Non-utilitarian Consequentialism',
      moral_weights: {
        human_life_years: 1,
        human_ylds: 1,
        human_income_doublings: 1,
        chickens_birds: 0.1,
        fish: 0.06,
        shrimp: 0.02,
        non_shrimp_invertebrates: 0.02,
        mammals: 0.11,
      },
      discount_factors: [1, 0.9, 0.8, 0.6, 0.4, 0.01],
      risk_profile: 0,
      p_extinction: 0,
    },
    {
      id: 'contractualism',
      name: 'Contractualism',
      moral_weights: {
        human_life_years: 1,
        human_ylds: 0.01,
        human_income_doublings: 0.001,
        chickens_birds: 0.004,
        fish: 0.002,
        shrimp: 0.0016,
        non_shrimp_invertebrates: 0.0014,
        mammals: 0.0044,
      },
      discount_factors: [1, 1, 0.5, 0.1, 0.001, 1e-5],
      risk_profile: 3,
      p_extinction: 0,
    },
  ],
  Ke = {
    totalBudget: mm,
    incrementSize: hm,
    projects: vm,
    moralWeightKeys: ym,
    discountFactorLabels: gm,
    riskProfileOptions: wm,
    votingMethods: _m,
    presets: km,
  },
  Sm = {
    name: 'Worldview 1',
    credence: 1,
    moral_weights: {
      human_life_years: 1,
      human_ylds: 0.5,
      human_income_doublings: 0.2,
      chickens_birds: 0.01,
      fish: 0.005,
      shrimp: 1e-4,
      non_shrimp_invertebrates: 5e-5,
      mammals: 0.05,
    },
    discount_factors: [1, 0.9, 0.5, 0.2, 0.05, 0.01],
    risk_profile: 0,
    p_extinction: 0,
  },
  xm = { defaultWorldview: Sm },
  Xc = 'marcus_state',
  Jc = 5;
function ms(a) {
  if (a) {
    const i = Ke.presets.find((c) => c.id === a);
    if (i) {
      const { id: c, name: d, ...f } = i;
      return { ...JSON.parse(JSON.stringify(f)), name: d, presetId: c };
    }
  }
  const s = xm.defaultWorldview;
  return { ...JSON.parse(JSON.stringify(s)), name: 'Custom', presetId: null };
}
function hs(a) {
  const s = Math.floor(100 / a),
    i = {};
  for (let c = 0; c < a; c++) i[c] = s;
  return ((i[0] += 100 - s * a), i);
}
function Em() {
  try {
    const a = sessionStorage.getItem(Xc);
    if (!a) return null;
    const s = JSON.parse(a);
    if (s.version !== Jc) return null;
    const {
      worldviews: i,
      credences: c,
      lockedKeys: d,
      selectedMethod: f,
      totalBudget: p,
      methodOptions: w,
    } = s.state;
    return !Array.isArray(i) || !i.length
      ? null
      : {
          worldviews: i,
          credences: c,
          lockedKeys: d,
          selectedMethod: f,
          totalBudget: p,
          methodOptions: w,
        };
  } catch {
    return null;
  }
}
function Cm(a) {
  try {
    sessionStorage.setItem(Xc, JSON.stringify({ version: Jc, state: a }));
  } catch {}
}
const $e = Em();
function Im() {
  const [a, s] = z.useState(
      () => ($e == null ? void 0 : $e.worldviews) ?? Ke.presets.map((Z) => ms(Z.id))
    ),
    [i, c] = z.useState(() => ($e == null ? void 0 : $e.credences) ?? hs(Ke.presets.length)),
    [d, f] = z.useState(() => ($e == null ? void 0 : $e.lockedKeys) ?? []),
    [p, w] = z.useState(() => ($e == null ? void 0 : $e.selectedMethod) ?? Ke.votingMethods[0].key),
    [h, g] = z.useState(() => ($e == null ? void 0 : $e.totalBudget) ?? Ke.totalBudget),
    [v, x] = z.useState(() => ($e == null ? void 0 : $e.methodOptions) ?? {}),
    [O, N] = z.useState({ worldviews: a, credences: i, totalBudget: h, methodOptions: v }),
    T = z.useRef(null);
  z.useEffect(
    () => (
      T.current && clearTimeout(T.current),
      (T.current = setTimeout(() => {
        N({ worldviews: a, credences: i, totalBudget: h, methodOptions: v });
      }, 150)),
      () => {
        T.current && clearTimeout(T.current);
      }
    ),
    [a, i, h, v]
  );
  const j = z.useRef(null);
  z.useEffect(
    () => (
      j.current && clearTimeout(j.current),
      (j.current = setTimeout(() => {
        Cm({
          worldviews: a,
          credences: i,
          lockedKeys: d,
          selectedMethod: p,
          totalBudget: h,
          methodOptions: v,
        });
      }, 300)),
      () => {
        j.current && clearTimeout(j.current);
      }
    ),
    [a, i, d, p, h, v]
  );
  const I = z.useMemo(() => {
      const { worldviews: Z, credences: Y, totalBudget: ce, methodOptions: ke } = O;
      if (!Z.length) {
        const ae = {};
        for (const te of Object.keys(Ke.projects)) ae[te] = 0;
        return { allocations: ae, funding: ae };
      }
      const ee = Z.map((ae, te) => ({ ...ae, credence: (Y[te] || 0) / 100 }));
      try {
        const ae = pm(Ke.projects, ee, p, ce, Ke.incrementSize, ke[p]);
        return (
          console.log('[marcus] recalc', p, {
            credences: Object.fromEntries(
              Z.map((te, se) => [te.name, `${Math.round(Y[se] || 0)}%`])
            ),
            allocations: Object.fromEntries(
              Object.entries(ae.allocations)
                .filter(([, te]) => te > 0)
                .sort((te, se) => se[1] - te[1])
                .map(([te, se]) => [Ke.projects[te].name, `${se.toFixed(1)}%`])
            ),
          }),
          ae
        );
      } catch (ae) {
        console.error('[marcus] calc error', ae);
        const te = {};
        for (const se of Object.keys(Ke.projects)) te[se] = 0;
        return { allocations: te, funding: te };
      }
    }, [O, p]),
    V = z.useCallback(() => {
      s((Z) => {
        const Y = [...Z, ms(null)];
        return (c(hs(Y.length)), f([]), Y);
      });
    }, []),
    L = z.useCallback((Z) => {
      s((Y) => {
        if (Y.length <= 1) return Y;
        const ce = Y.filter((ke, ee) => ee !== Z);
        return (c(hs(ce.length)), f([]), ce);
      });
    }, []),
    b = z.useCallback(
      (Z, Y, ce, ke, ee) => {
        const ae = String(Z),
          se = Yd(ae, Y, ce || i, ce, ee),
          Ce = ke ? Xd(se) : se;
        c(Ce);
      },
      [i]
    ),
    B = z.useCallback((Z, Y, ce) => {
      s((ke) =>
        ke.map((ae, te) => {
          if (te !== Z) return ae;
          const se = { ...ae },
            Ce = Y.split('.');
          return (
            Ce.length === 1
              ? (se[Ce[0]] = ce)
              : Ce.length === 2 && (se[Ce[0]] = { ...se[Ce[0]], [Ce[1]]: ce }),
            se
          );
        })
      );
    }, []),
    re = z.useCallback((Z, Y, ce) => {
      s((ke) =>
        ke.map((ae, te) => {
          if (te !== Z) return ae;
          const se = [...ae.discount_factors];
          return ((se[Y] = ce), { ...ae, discount_factors: se });
        })
      );
    }, []),
    fe = z.useCallback((Z, Y) => {
      s((ce) =>
        ce.map((ke, ee) => (ee !== Z ? ke : Y ? ms(Y) : { ...ke, presetId: null, name: 'Custom' }))
      );
    }, []);
  return {
    worldviews: a,
    credences: i,
    lockedKeys: d,
    setLockedKeys: f,
    selectedMethod: p,
    totalBudget: h,
    results: I,
    addWorldview: V,
    removeWorldview: L,
    updateCredence: b,
    updateWorldview: B,
    updateDiscountFactor: re,
    applyPreset: fe,
    setSelectedMethod: w,
    setTotalBudget: g,
    methodOptions: v,
    setMethodOptions: x,
  };
}
const Om = '_container_zx9mc_3',
  Nm = '_layout_zx9mc_11',
  Tm = '_spreadsheetSide_zx9mc_22',
  jm = '_spreadsheet_zx9mc_22',
  Lm = '_spreadsheetScroll_zx9mc_34',
  Mm = '_rowLabels_zx9mc_40',
  Pm = '_labelHeader_zx9mc_50',
  Rm = '_sectionTitle_zx9mc_58',
  Dm = '_rowLabel_zx9mc_40',
  zm = '_worldviewColumn_zx9mc_84',
  Am = '_columnHeader_zx9mc_96',
  Wm = '_presetSelect_zx9mc_106',
  Fm = '_removeButton_zx9mc_129',
  Vm = '_cell_zx9mc_152',
  bm = '_cellInput_zx9mc_159',
  Um = '_cellSelect_zx9mc_192',
  Bm = '_credenceCell_zx9mc_215',
  Qm = '_credenceSliderTrack_zx9mc_223',
  Hm = '_credenceLockLimit_zx9mc_259',
  qm = '_credenceValue_zx9mc_268',
  $m = '_credenceLockButton_zx9mc_277',
  Km = '_locked_zx9mc_296',
  Gm = '_lockDisabled_zx9mc_301',
  Ym = '_addColumn_zx9mc_307',
  Xm = '_addButton_zx9mc_314',
  Jm = '_resultsSide_zx9mc_337',
  Zm = '_resultsPanel_zx9mc_342',
  eh = '_methodSelector_zx9mc_349',
  th = '_methodLabel_zx9mc_353',
  nh = '_methodSelect_zx9mc_349',
  rh = '_budgetInput_zx9mc_380',
  lh = '_allocationList_zx9mc_406',
  oh = '_allocationBar_zx9mc_414',
  ih = '_allocationLabel_zx9mc_420',
  sh = '_allocationName_zx9mc_426',
  ah = '_allocationValue_zx9mc_432',
  uh = '_allocationFunding_zx9mc_438',
  ch = '_allocationTrack_zx9mc_445',
  fh = '_allocationFill_zx9mc_452',
  dh = '_optionSliderRow_zx9mc_460',
  ph = '_optionSlider_zx9mc_460',
  mh = '_optionSliderValue_zx9mc_486',
  hh = '_methodDisclaimer_zx9mc_497',
  J = {
    container: Om,
    layout: Nm,
    spreadsheetSide: Tm,
    spreadsheet: jm,
    spreadsheetScroll: Lm,
    rowLabels: Mm,
    labelHeader: Pm,
    sectionTitle: Rm,
    rowLabel: Dm,
    worldviewColumn: zm,
    columnHeader: Am,
    presetSelect: Wm,
    removeButton: Fm,
    cell: Vm,
    cellInput: bm,
    cellSelect: Um,
    credenceCell: Bm,
    credenceSliderTrack: Qm,
    credenceLockLimit: Hm,
    credenceValue: qm,
    credenceLockButton: $m,
    locked: Km,
    lockDisabled: Gm,
    addColumn: Ym,
    addButton: Xm,
    resultsSide: Jm,
    resultsPanel: Zm,
    methodSelector: eh,
    methodLabel: th,
    methodSelect: nh,
    budgetInput: rh,
    allocationList: lh,
    allocationBar: oh,
    allocationLabel: ih,
    allocationName: sh,
    allocationValue: ah,
    allocationFunding: uh,
    allocationTrack: ch,
    allocationFill: fh,
    optionSliderRow: dh,
    optionSlider: ph,
    optionSliderValue: mh,
    methodDisclaimer: hh,
  };
function vh({
  index: a,
  credences: s,
  lockedKeys: i,
  setLockedKeys: c,
  onCredenceChange: d,
  cellProps: f,
}) {
  const p = String(a),
    w = s[p] ?? 0,
    {
      isLocked: h,
      hasLockedSibling: g,
      thumbOffset: v,
      canLockMore: x,
      featureEnabled: O,
    } = Rp({ sliderKey: p, lockedKeys: i, credences: s }),
    N = z.useCallback(
      (L, b, B, re) => {
        d(p, L, b, B, re);
      },
      [p, d]
    ),
    { isDragging: T, dragHandlers: j } = Pp({
      credences: s,
      isLocked: h,
      lockedKeys: i,
      onChange: N,
    }),
    I = () => {
      h ? c(i.filter((L) => L !== p)) : x && c([...i, p]);
    },
    V = g
      ? `linear-gradient(to right, var(--text-gray-medium) 0%, var(--text-gray-medium) ${w}%, rgba(255,255,255,0.15) ${w}%, rgba(255,255,255,0.15) ${v}, rgba(255,255,255,0.06) ${v}, rgba(255,255,255,0.06) 100%)`
      : `linear-gradient(to right, var(--text-gray-medium) 0%, var(--text-gray-medium) ${w}%, rgba(255,255,255,0.1) ${w}%, rgba(255,255,255,0.1) 100%)`;
  return F.jsxs('div', {
    className: J.credenceCell,
    children: [
      F.jsxs('div', {
        className: J.credenceSliderTrack,
        children: [
          F.jsx('input', {
            type: 'range',
            min: '0',
            max: '100',
            step: 'any',
            value: w,
            ...j,
            ...f,
            'data-dragging': T,
            disabled: h,
            style: { background: V, cursor: h ? 'not-allowed' : 'pointer' },
          }),
          g && F.jsx('div', { className: J.credenceLockLimit, style: { left: v } }),
        ],
      }),
      F.jsxs('span', { className: J.credenceValue, children: [Math.round(w), '%'] }),
      O &&
        F.jsx('button', {
          className: `${J.credenceLockButton} ${h ? J.locked : ''} ${!h && !x ? J.lockDisabled : ''}`,
          onClick: I,
          type: 'button',
          tabIndex: -1,
          disabled: !h && !x,
          children: F.jsx(Cd, { size: 10 }),
        }),
    ],
  });
}
function yh({
  worldview: a,
  index: s,
  rows: i,
  columnIndex: c,
  totalColumns: d,
  credences: f,
  lockedKeys: p,
  setLockedKeys: w,
  onCredenceChange: h,
  onUpdate: g,
  onUpdateDiscount: v,
  onApplyPreset: x,
  onRemove: O,
  canRemove: N,
}) {
  const T = (B) => {
      const re = B.target.value;
      x(s, re === 'custom' ? null : re);
    },
    j = (B, re) => {
      const fe = re === '' ? 0 : Number(re);
      isNaN(fe) || g(s, B, fe);
    },
    I = z.useCallback(
      (B) => {
        if (B.key !== 'Tab') return;
        const re = Number(B.target.dataset.cellRow),
          fe = Number(B.target.dataset.cellCol);
        let Z = re,
          Y = fe;
        B.shiftKey ? (Y--, Y < 0 && ((Y = d - 1), Z--)) : (Y++, Y >= d && ((Y = 0), Z++));
        const ce = document.querySelector(`[data-cell-row="${Z}"][data-cell-col="${Y}"]`);
        ce && (B.preventDefault(), ce.focus());
      },
      [d]
    ),
    V = [];
  let L = 0;
  for (const B of i) V.push(B.type === 'sectionTitle' ? null : L++);
  function b(B, re) {
    if (B.type === 'sectionTitle') return F.jsx('div', { className: J.sectionTitle });
    const Z = { 'data-cell-row': V[re], 'data-cell-col': c, onKeyDown: I },
      { field: Y } = B;
    if (Y === 'credence')
      return F.jsx(vh, {
        index: s,
        credences: f,
        lockedKeys: p,
        setLockedKeys: w,
        onCredenceChange: h,
        cellProps: Z,
      });
    if (Y.startsWith('moral_weights.')) {
      const ce = Y.split('.')[1];
      return F.jsx('div', {
        className: J.cell,
        children: F.jsx('input', {
          type: 'number',
          className: J.cellInput,
          value: a.moral_weights[ce] ?? 0,
          min: '0',
          step: '0.01',
          onChange: (ke) => j(Y, ke.target.value),
          ...Z,
        }),
      });
    }
    if (Y.startsWith('discount_factor.')) {
      const ce = Number(Y.split('.')[1]);
      return F.jsx('div', {
        className: J.cell,
        children: F.jsx('input', {
          type: 'number',
          className: J.cellInput,
          value: a.discount_factors[ce] ?? 0,
          min: '0',
          max: '1',
          step: '0.05',
          onChange: (ke) => {
            const ee = ke.target.value === '' ? 0 : Number(ke.target.value);
            isNaN(ee) || v(s, ce, ee);
          },
          ...Z,
        }),
      });
    }
    return Y === 'risk_profile'
      ? F.jsx('div', {
          className: J.cell,
          children: F.jsx('select', {
            className: J.cellSelect,
            value: a.risk_profile,
            onChange: (ce) => g(s, 'risk_profile', Number(ce.target.value)),
            ...Z,
            children: Ke.riskProfileOptions.map((ce) =>
              F.jsx('option', { value: ce.value, children: ce.label }, ce.value)
            ),
          }),
        })
      : Y === 'p_extinction'
        ? F.jsx('div', {
            className: J.cell,
            children: F.jsx('input', {
              type: 'number',
              className: J.cellInput,
              value: a.p_extinction,
              min: '0',
              max: '1',
              step: '0.05',
              onChange: (ce) => j('p_extinction', ce.target.value),
              ...Z,
            }),
          })
        : null;
  }
  return F.jsxs('div', {
    className: J.worldviewColumn,
    children: [
      F.jsxs('div', {
        className: J.columnHeader,
        children: [
          F.jsxs('select', {
            className: J.presetSelect,
            value: a.presetId || 'custom',
            onChange: T,
            children: [
              Ke.presets.map((B) => F.jsx('option', { value: B.id, children: B.name }, B.id)),
              F.jsx('option', { value: 'custom', children: 'Custom' }),
            ],
          }),
          N &&
            F.jsx('button', {
              type: 'button',
              className: J.removeButton,
              onClick: () => O(s),
              title: 'Remove worldview',
              children: '×',
            }),
        ],
      }),
      i.map((B, re) => F.jsx('div', { children: b(B, re) }, re)),
    ],
  });
}
function gh() {
  const a = [];
  (a.push({ type: 'sectionTitle', label: 'Credence' }),
    a.push({ type: 'data', field: 'credence', label: 'Weight' }),
    a.push({ type: 'sectionTitle', label: 'Moral Weights' }));
  for (const s of Ke.moralWeightKeys)
    a.push({ type: 'data', field: `moral_weights.${s.key}`, label: s.label });
  a.push({ type: 'sectionTitle', label: 'Discount Factors' });
  for (let s = 0; s < Ke.discountFactorLabels.length; s++)
    a.push({ type: 'data', field: `discount_factor.${s}`, label: Ke.discountFactorLabels[s] });
  return (
    a.push({ type: 'sectionTitle', label: 'Risk' }),
    a.push({ type: 'data', field: 'risk_profile', label: 'Risk Profile' }),
    a.push({ type: 'data', field: 'p_extinction', label: 'Non-xrisk discount' }),
    a
  );
}
const Pc = gh();
function wh({
  worldviews: a,
  credences: s,
  lockedKeys: i,
  setLockedKeys: c,
  onCredenceChange: d,
  onUpdate: f,
  onUpdateDiscount: p,
  onApplyPreset: w,
  onAdd: h,
  onRemove: g,
}) {
  return F.jsx('div', {
    className: J.spreadsheet,
    children: F.jsxs('div', {
      className: J.spreadsheetScroll,
      children: [
        F.jsxs('div', {
          className: J.rowLabels,
          children: [
            F.jsx('div', { className: J.labelHeader }),
            Pc.map((v, x) =>
              v.type === 'sectionTitle'
                ? F.jsx('div', { className: J.sectionTitle, children: v.label }, x)
                : F.jsx('div', { className: J.rowLabel, children: v.label }, x)
            ),
          ],
        }),
        a.map((v, x) =>
          F.jsx(
            yh,
            {
              worldview: v,
              index: x,
              rows: Pc,
              columnIndex: x,
              totalColumns: a.length,
              credences: s,
              lockedKeys: i,
              setLockedKeys: c,
              onCredenceChange: d,
              onUpdate: f,
              onUpdateDiscount: p,
              onApplyPreset: w,
              onRemove: g,
              canRemove: a.length > 1,
            },
            x
          )
        ),
        F.jsx('div', {
          className: J.addColumn,
          children: F.jsx('button', {
            type: 'button',
            className: J.addButton,
            onClick: h,
            children: '+',
          }),
        }),
      ],
    }),
  });
}
function _h({ name: a, percentage: s, funding: i, color: c }) {
  return F.jsxs('div', {
    className: J.allocationBar,
    children: [
      F.jsxs('div', {
        className: J.allocationLabel,
        children: [
          F.jsx('span', { className: J.allocationName, children: a }),
          F.jsxs('span', {
            className: J.allocationValue,
            children: [
              s.toFixed(1),
              '%',
              F.jsxs('span', {
                className: J.allocationFunding,
                children: ['$', i.toFixed(0), 'M'],
              }),
            ],
          }),
        ],
      }),
      F.jsx('div', {
        className: J.allocationTrack,
        children: F.jsx('div', {
          className: J.allocationFill,
          style: { width: `${s}%`, backgroundColor: c },
        }),
      }),
    ],
  });
}
function kh({ optKey: a, optDef: s, currentValue: i, allCurrentValues: c, onChange: d }) {
  if (s.showWhen) {
    for (const [f, p] of Object.entries(s.showWhen)) if (c[f] !== p) return null;
  }
  if (s.type === 'slider') {
    const f = ((i - s.min) / (s.max - s.min)) * 100;
    return F.jsxs('div', {
      className: J.methodSelector,
      children: [
        F.jsx('label', { className: J.methodLabel, children: s.label }),
        F.jsxs('div', {
          className: J.optionSliderRow,
          children: [
            F.jsx('input', {
              type: 'range',
              className: J.optionSlider,
              value: i,
              min: s.min,
              max: s.max,
              step: s.step,
              style: {
                background: `linear-gradient(to right, var(--text-gray-medium) 0%, var(--text-gray-medium) ${f}%, rgba(255,255,255,0.1) ${f}%, rgba(255,255,255,0.1) 100%)`,
              },
              onChange: (p) => d(a, Number(p.target.value)),
            }),
            F.jsx('span', { className: J.optionSliderValue, children: i }),
          ],
        }),
      ],
    });
  }
  return s.type === 'number'
    ? F.jsxs('div', {
        className: J.methodSelector,
        children: [
          F.jsx('label', { className: J.methodLabel, children: s.label }),
          F.jsx('input', {
            type: 'number',
            className: J.budgetInput,
            value: i,
            min: s.min,
            max: s.max,
            step: s.step,
            onChange: (f) => {
              const p = f.target.value === '' ? s.default : Number(f.target.value);
              isNaN(p) || d(a, p);
            },
          }),
        ],
      })
    : F.jsxs('div', {
        className: J.methodSelector,
        children: [
          F.jsx('label', { className: J.methodLabel, children: s.label }),
          F.jsx('select', {
            className: J.methodSelect,
            value: i,
            onChange: (f) => d(a, f.target.value),
            children: s.choices.map((f) =>
              F.jsx('option', { value: f.value, children: f.label }, f.value)
            ),
          }),
        ],
      });
}
function Sh({
  selectedMethod: a,
  onMethodChange: s,
  totalBudget: i,
  onBudgetChange: c,
  methodOptions: d,
  onMethodOptionsChange: f,
  results: p,
}) {
  var N;
  const w = Object.entries(Ke.projects),
    h = Ke.votingMethods.find((T) => T.key === a),
    g = (T) => {
      const j = T.target.value === '' ? 0 : Number(T.target.value);
      !isNaN(j) && j >= 0 && c(j);
    },
    v = {};
  if (h != null && h.options)
    for (const [T, j] of Object.entries(h.options))
      v[T] = ((N = d[a]) == null ? void 0 : N[T]) ?? j.default;
  const x = (() => {
      if (h != null && h.ignoresCredences) return !0;
      if (h != null && h.options)
        for (const [T, j] of Object.entries(h.options)) {
          if (!j.choices) continue;
          const I = j.choices.find((V) => V.value === v[T]);
          if (I != null && I.ignoresCredences) return !0;
        }
      return !1;
    })(),
    O = (T, j) => {
      f((I) => ({ ...I, [a]: { ...I[a], [T]: j } }));
    };
  return F.jsxs('div', {
    className: J.resultsPanel,
    children: [
      F.jsxs('div', {
        className: J.methodSelector,
        children: [
          F.jsx('label', { className: J.methodLabel, children: 'Total Budget ($M)' }),
          F.jsx('input', {
            type: 'number',
            className: J.budgetInput,
            value: i,
            min: '0',
            step: '10',
            onChange: g,
          }),
        ],
      }),
      F.jsxs('div', {
        className: J.methodSelector,
        children: [
          F.jsx('label', { className: J.methodLabel, children: 'Voting Method' }),
          F.jsx('select', {
            className: J.methodSelect,
            value: a,
            onChange: (T) => s(T.target.value),
            children: Ke.votingMethods.map((T) =>
              F.jsx('option', { value: T.key, children: T.name }, T.key)
            ),
          }),
        ],
      }),
      (h == null ? void 0 : h.options) &&
        Object.entries(h.options).map(([T, j]) =>
          F.jsx(
            kh,
            { optKey: T, optDef: j, currentValue: v[T], allCurrentValues: v, onChange: O },
            T
          )
        ),
      F.jsx('div', {
        className: J.allocationList,
        children: w.map(([T, j]) =>
          F.jsx(
            _h,
            {
              name: j.name,
              percentage: p.allocations[T] || 0,
              funding: p.funding[T] || 0,
              color: j.color,
            },
            T
          )
        ),
      }),
      x &&
        F.jsx('p', {
          className: J.methodDisclaimer,
          children:
            'This method does not use credence weights. Results depend only on the worldview parameters, not how much weight you assign to each.',
        }),
    ],
  });
}
function xh() {
  const {
    worldviews: a,
    credences: s,
    lockedKeys: i,
    setLockedKeys: c,
    selectedMethod: d,
    results: f,
    addWorldview: p,
    removeWorldview: w,
    updateCredence: h,
    updateWorldview: g,
    updateDiscountFactor: v,
    applyPreset: x,
    setSelectedMethod: O,
    totalBudget: N,
    setTotalBudget: T,
    methodOptions: j,
    setMethodOptions: I,
  } = Im();
  return F.jsx('div', {
    className: J.container,
    children: F.jsxs('div', {
      className: J.layout,
      children: [
        F.jsx('div', {
          className: J.spreadsheetSide,
          children: F.jsx(wh, {
            worldviews: a,
            credences: s,
            lockedKeys: i,
            setLockedKeys: c,
            onCredenceChange: h,
            onUpdate: g,
            onUpdateDiscount: v,
            onApplyPreset: x,
            onAdd: p,
            onRemove: w,
          }),
        }),
        F.jsx('div', {
          className: J.resultsSide,
          children: F.jsx(Sh, {
            selectedMethod: d,
            onMethodChange: O,
            totalBudget: N,
            onBudgetChange: T,
            methodOptions: j,
            onMethodOptionsChange: I,
            results: f,
          }),
        }),
      ],
    }),
  });
}
Wc(!0);
function Eh() {
  const {
    currentStep: a,
    currentQuestion: s,
    setDebugConfig: i,
    shareUrlError: c,
    isHydrating: d,
  } = Mp();
  return d ? null : F.jsx(xh, {});
}
function Ch() {
  return F.jsx(Lp, { children: F.jsx(Eh, {}) });
}
ld.createRoot(document.getElementById('root')).render(
  F.jsx(z.StrictMode, { children: F.jsx(Ch, {}) })
);
