(function () {
  const d = document.createElement('link').relList;
  if (d && d.supports && d.supports('modulepreload')) return;
  for (const w of document.querySelectorAll('link[rel="modulepreload"]')) k(w);
  new MutationObserver((w) => {
    for (const E of w)
      if (E.type === 'childList')
        for (const L of E.addedNodes) L.tagName === 'LINK' && L.rel === 'modulepreload' && k(L);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(w) {
    const E = {};
    return (
      w.integrity && (E.integrity = w.integrity),
      w.referrerPolicy && (E.referrerPolicy = w.referrerPolicy),
      w.crossOrigin === 'use-credentials'
        ? (E.credentials = 'include')
        : w.crossOrigin === 'anonymous'
          ? (E.credentials = 'omit')
          : (E.credentials = 'same-origin'),
      E
    );
  }
  function k(w) {
    if (w.ep) return;
    w.ep = !0;
    const E = s(w);
    fetch(w.href, E);
  }
})();
var Vi = { exports: {} },
  Lr = {},
  Hi = { exports: {} },
  b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ga;
function df() {
  if (Ga) return b;
  Ga = 1;
  var v = Symbol.for('react.element'),
    d = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    k = Symbol.for('react.strict_mode'),
    w = Symbol.for('react.profiler'),
    E = Symbol.for('react.provider'),
    L = Symbol.for('react.context'),
    P = Symbol.for('react.forward_ref'),
    g = Symbol.for('react.suspense'),
    j = Symbol.for('react.memo'),
    O = Symbol.for('react.lazy'),
    I = Symbol.iterator;
  function R(f) {
    return f === null || typeof f != 'object'
      ? null
      : ((f = (I && f[I]) || f['@@iterator']), typeof f == 'function' ? f : null);
  }
  var B = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ee = Object.assign,
    q = {};
  function Y(f, S, J) {
    ((this.props = f), (this.context = S), (this.refs = q), (this.updater = J || B));
  }
  ((Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (f, S) {
      if (typeof f != 'object' && typeof f != 'function' && f != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, f, S, 'setState');
    }),
    (Y.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, 'forceUpdate');
    }));
  function pe() {}
  pe.prototype = Y.prototype;
  function de(f, S, J) {
    ((this.props = f), (this.context = S), (this.refs = q), (this.updater = J || B));
  }
  var ve = (de.prototype = new pe());
  ((ve.constructor = de), ee(ve, Y.prototype), (ve.isPureReactComponent = !0));
  var fe = Array.isArray,
    _e = Object.prototype.hasOwnProperty,
    W = { current: null },
    Z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ue(f, S, J) {
    var te,
      re = {},
      le = null,
      me = null;
    if (S != null)
      for (te in (S.ref !== void 0 && (me = S.ref), S.key !== void 0 && (le = '' + S.key), S))
        _e.call(S, te) && !Z.hasOwnProperty(te) && (re[te] = S[te]);
    var ae = arguments.length - 2;
    if (ae === 1) re.children = J;
    else if (1 < ae) {
      for (var Se = Array(ae), rt = 0; rt < ae; rt++) Se[rt] = arguments[rt + 2];
      re.children = Se;
    }
    if (f && f.defaultProps)
      for (te in ((ae = f.defaultProps), ae)) re[te] === void 0 && (re[te] = ae[te]);
    return { $$typeof: v, type: f, key: le, ref: me, props: re, _owner: W.current };
  }
  function De(f, S) {
    return { $$typeof: v, type: f.type, key: S, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function we(f) {
    return typeof f == 'object' && f !== null && f.$$typeof === v;
  }
  function Ae(f) {
    var S = { '=': '=0', ':': '=2' };
    return (
      '$' +
      f.replace(/[=:]/g, function (J) {
        return S[J];
      })
    );
  }
  var We = /\/+/g;
  function Re(f, S) {
    return typeof f == 'object' && f !== null && f.key != null ? Ae('' + f.key) : S.toString(36);
  }
  function Ge(f, S, J, te, re) {
    var le = typeof f;
    (le === 'undefined' || le === 'boolean') && (f = null);
    var me = !1;
    if (f === null) me = !0;
    else
      switch (le) {
        case 'string':
        case 'number':
          me = !0;
          break;
        case 'object':
          switch (f.$$typeof) {
            case v:
            case d:
              me = !0;
          }
      }
    if (me)
      return (
        (me = f),
        (re = re(me)),
        (f = te === '' ? '.' + Re(me, 0) : te),
        fe(re)
          ? ((J = ''),
            f != null && (J = f.replace(We, '$&/') + '/'),
            Ge(re, S, J, '', function (rt) {
              return rt;
            }))
          : re != null &&
            (we(re) &&
              (re = De(
                re,
                J +
                  (!re.key || (me && me.key === re.key)
                    ? ''
                    : ('' + re.key).replace(We, '$&/') + '/') +
                  f
              )),
            S.push(re)),
        1
      );
    if (((me = 0), (te = te === '' ? '.' : te + ':'), fe(f)))
      for (var ae = 0; ae < f.length; ae++) {
        le = f[ae];
        var Se = te + Re(le, ae);
        me += Ge(le, S, J, Se, re);
      }
    else if (((Se = R(f)), typeof Se == 'function'))
      for (f = Se.call(f), ae = 0; !(le = f.next()).done; )
        ((le = le.value), (Se = te + Re(le, ae++)), (me += Ge(le, S, J, Se, re)));
    else if (le === 'object')
      throw (
        (S = String(f)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (S === '[object Object]' ? 'object with keys {' + Object.keys(f).join(', ') + '}' : S) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return me;
  }
  function Q(f, S, J) {
    if (f == null) return f;
    var te = [],
      re = 0;
    return (
      Ge(f, te, '', '', function (le) {
        return S.call(J, le, re++);
      }),
      te
    );
  }
  function K(f) {
    if (f._status === -1) {
      var S = f._result;
      ((S = S()),
        S.then(
          function (J) {
            (f._status === 0 || f._status === -1) && ((f._status = 1), (f._result = J));
          },
          function (J) {
            (f._status === 0 || f._status === -1) && ((f._status = 2), (f._result = J));
          }
        ),
        f._status === -1 && ((f._status = 0), (f._result = S)));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var ie = { current: null },
    T = { transition: null },
    $ = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: T, ReactCurrentOwner: W };
  function M() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (b.Children = {
      map: Q,
      forEach: function (f, S, J) {
        Q(
          f,
          function () {
            S.apply(this, arguments);
          },
          J
        );
      },
      count: function (f) {
        var S = 0;
        return (
          Q(f, function () {
            S++;
          }),
          S
        );
      },
      toArray: function (f) {
        return (
          Q(f, function (S) {
            return S;
          }) || []
        );
      },
      only: function (f) {
        if (!we(f))
          throw Error('React.Children.only expected to receive a single React element child.');
        return f;
      },
    }),
    (b.Component = Y),
    (b.Fragment = s),
    (b.Profiler = w),
    (b.PureComponent = de),
    (b.StrictMode = k),
    (b.Suspense = g),
    (b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $),
    (b.act = M),
    (b.cloneElement = function (f, S, J) {
      if (f == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + f + '.'
        );
      var te = ee({}, f.props),
        re = f.key,
        le = f.ref,
        me = f._owner;
      if (S != null) {
        if (
          (S.ref !== void 0 && ((le = S.ref), (me = W.current)),
          S.key !== void 0 && (re = '' + S.key),
          f.type && f.type.defaultProps)
        )
          var ae = f.type.defaultProps;
        for (Se in S)
          _e.call(S, Se) &&
            !Z.hasOwnProperty(Se) &&
            (te[Se] = S[Se] === void 0 && ae !== void 0 ? ae[Se] : S[Se]);
      }
      var Se = arguments.length - 2;
      if (Se === 1) te.children = J;
      else if (1 < Se) {
        ae = Array(Se);
        for (var rt = 0; rt < Se; rt++) ae[rt] = arguments[rt + 2];
        te.children = ae;
      }
      return { $$typeof: v, type: f.type, key: re, ref: le, props: te, _owner: me };
    }),
    (b.createContext = function (f) {
      return (
        (f = {
          $$typeof: L,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (f.Provider = { $$typeof: E, _context: f }),
        (f.Consumer = f)
      );
    }),
    (b.createElement = ue),
    (b.createFactory = function (f) {
      var S = ue.bind(null, f);
      return ((S.type = f), S);
    }),
    (b.createRef = function () {
      return { current: null };
    }),
    (b.forwardRef = function (f) {
      return { $$typeof: P, render: f };
    }),
    (b.isValidElement = we),
    (b.lazy = function (f) {
      return { $$typeof: O, _payload: { _status: -1, _result: f }, _init: K };
    }),
    (b.memo = function (f, S) {
      return { $$typeof: j, type: f, compare: S === void 0 ? null : S };
    }),
    (b.startTransition = function (f) {
      var S = T.transition;
      T.transition = {};
      try {
        f();
      } finally {
        T.transition = S;
      }
    }),
    (b.unstable_act = M),
    (b.useCallback = function (f, S) {
      return ie.current.useCallback(f, S);
    }),
    (b.useContext = function (f) {
      return ie.current.useContext(f);
    }),
    (b.useDebugValue = function () {}),
    (b.useDeferredValue = function (f) {
      return ie.current.useDeferredValue(f);
    }),
    (b.useEffect = function (f, S) {
      return ie.current.useEffect(f, S);
    }),
    (b.useId = function () {
      return ie.current.useId();
    }),
    (b.useImperativeHandle = function (f, S, J) {
      return ie.current.useImperativeHandle(f, S, J);
    }),
    (b.useInsertionEffect = function (f, S) {
      return ie.current.useInsertionEffect(f, S);
    }),
    (b.useLayoutEffect = function (f, S) {
      return ie.current.useLayoutEffect(f, S);
    }),
    (b.useMemo = function (f, S) {
      return ie.current.useMemo(f, S);
    }),
    (b.useReducer = function (f, S, J) {
      return ie.current.useReducer(f, S, J);
    }),
    (b.useRef = function (f) {
      return ie.current.useRef(f);
    }),
    (b.useState = function (f) {
      return ie.current.useState(f);
    }),
    (b.useSyncExternalStore = function (f, S, J) {
      return ie.current.useSyncExternalStore(f, S, J);
    }),
    (b.useTransition = function () {
      return ie.current.useTransition();
    }),
    (b.version = '18.3.1'),
    b
  );
}
var qa;
function Yi() {
  return (qa || ((qa = 1), (Hi.exports = df())), Hi.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ya;
function ff() {
  if (Ya) return Lr;
  Ya = 1;
  var v = Yi(),
    d = Symbol.for('react.element'),
    s = Symbol.for('react.fragment'),
    k = Object.prototype.hasOwnProperty,
    w = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(P, g, j) {
    var O,
      I = {},
      R = null,
      B = null;
    (j !== void 0 && (R = '' + j),
      g.key !== void 0 && (R = '' + g.key),
      g.ref !== void 0 && (B = g.ref));
    for (O in g) k.call(g, O) && !E.hasOwnProperty(O) && (I[O] = g[O]);
    if (P && P.defaultProps) for (O in ((g = P.defaultProps), g)) I[O] === void 0 && (I[O] = g[O]);
    return { $$typeof: d, type: P, key: R, ref: B, props: I, _owner: w.current };
  }
  return ((Lr.Fragment = s), (Lr.jsx = L), (Lr.jsxs = L), Lr);
}
var Ka;
function pf() {
  return (Ka || ((Ka = 1), (Vi.exports = ff())), Vi.exports);
}
var p = pf(),
  X = Yi(),
  $l = {},
  Qi = { exports: {} },
  tt = {},
  Wi = { exports: {} },
  Gi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xa;
function mf() {
  return (
    Xa ||
      ((Xa = 1),
      (function (v) {
        function d(T, $) {
          var M = T.length;
          T.push($);
          e: for (; 0 < M; ) {
            var f = (M - 1) >>> 1,
              S = T[f];
            if (0 < w(S, $)) ((T[f] = $), (T[M] = S), (M = f));
            else break e;
          }
        }
        function s(T) {
          return T.length === 0 ? null : T[0];
        }
        function k(T) {
          if (T.length === 0) return null;
          var $ = T[0],
            M = T.pop();
          if (M !== $) {
            T[0] = M;
            e: for (var f = 0, S = T.length, J = S >>> 1; f < J; ) {
              var te = 2 * (f + 1) - 1,
                re = T[te],
                le = te + 1,
                me = T[le];
              if (0 > w(re, M))
                le < S && 0 > w(me, re)
                  ? ((T[f] = me), (T[le] = M), (f = le))
                  : ((T[f] = re), (T[te] = M), (f = te));
              else if (le < S && 0 > w(me, M)) ((T[f] = me), (T[le] = M), (f = le));
              else break e;
            }
          }
          return $;
        }
        function w(T, $) {
          var M = T.sortIndex - $.sortIndex;
          return M !== 0 ? M : T.id - $.id;
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
        var g = [],
          j = [],
          O = 1,
          I = null,
          R = 3,
          B = !1,
          ee = !1,
          q = !1,
          Y = typeof setTimeout == 'function' ? setTimeout : null,
          pe = typeof clearTimeout == 'function' ? clearTimeout : null,
          de = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function ve(T) {
          for (var $ = s(j); $ !== null; ) {
            if ($.callback === null) k(j);
            else if ($.startTime <= T) (k(j), ($.sortIndex = $.expirationTime), d(g, $));
            else break;
            $ = s(j);
          }
        }
        function fe(T) {
          if (((q = !1), ve(T), !ee))
            if (s(g) !== null) ((ee = !0), K(_e));
            else {
              var $ = s(j);
              $ !== null && ie(fe, $.startTime - T);
            }
        }
        function _e(T, $) {
          ((ee = !1), q && ((q = !1), pe(ue), (ue = -1)), (B = !0));
          var M = R;
          try {
            for (ve($), I = s(g); I !== null && (!(I.expirationTime > $) || (T && !Ae())); ) {
              var f = I.callback;
              if (typeof f == 'function') {
                ((I.callback = null), (R = I.priorityLevel));
                var S = f(I.expirationTime <= $);
                (($ = v.unstable_now()),
                  typeof S == 'function' ? (I.callback = S) : I === s(g) && k(g),
                  ve($));
              } else k(g);
              I = s(g);
            }
            if (I !== null) var J = !0;
            else {
              var te = s(j);
              (te !== null && ie(fe, te.startTime - $), (J = !1));
            }
            return J;
          } finally {
            ((I = null), (R = M), (B = !1));
          }
        }
        var W = !1,
          Z = null,
          ue = -1,
          De = 5,
          we = -1;
        function Ae() {
          return !(v.unstable_now() - we < De);
        }
        function We() {
          if (Z !== null) {
            var T = v.unstable_now();
            we = T;
            var $ = !0;
            try {
              $ = Z(!0, T);
            } finally {
              $ ? Re() : ((W = !1), (Z = null));
            }
          } else W = !1;
        }
        var Re;
        if (typeof de == 'function')
          Re = function () {
            de(We);
          };
        else if (typeof MessageChannel < 'u') {
          var Ge = new MessageChannel(),
            Q = Ge.port2;
          ((Ge.port1.onmessage = We),
            (Re = function () {
              Q.postMessage(null);
            }));
        } else
          Re = function () {
            Y(We, 0);
          };
        function K(T) {
          ((Z = T), W || ((W = !0), Re()));
        }
        function ie(T, $) {
          ue = Y(function () {
            T(v.unstable_now());
          }, $);
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
            ee || B || ((ee = !0), K(_e));
          }),
          (v.unstable_forceFrameRate = function (T) {
            0 > T || 125 < T
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (De = 0 < T ? Math.floor(1e3 / T) : 5);
          }),
          (v.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (v.unstable_getFirstCallbackNode = function () {
            return s(g);
          }),
          (v.unstable_next = function (T) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var $ = 3;
                break;
              default:
                $ = R;
            }
            var M = R;
            R = $;
            try {
              return T();
            } finally {
              R = M;
            }
          }),
          (v.unstable_pauseExecution = function () {}),
          (v.unstable_requestPaint = function () {}),
          (v.unstable_runWithPriority = function (T, $) {
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
            var M = R;
            R = T;
            try {
              return $();
            } finally {
              R = M;
            }
          }),
          (v.unstable_scheduleCallback = function (T, $, M) {
            var f = v.unstable_now();
            switch (
              (typeof M == 'object' && M !== null
                ? ((M = M.delay), (M = typeof M == 'number' && 0 < M ? f + M : f))
                : (M = f),
              T)
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
              (S = M + S),
              (T = {
                id: O++,
                callback: $,
                priorityLevel: T,
                startTime: M,
                expirationTime: S,
                sortIndex: -1,
              }),
              M > f
                ? ((T.sortIndex = M),
                  d(j, T),
                  s(g) === null &&
                    T === s(j) &&
                    (q ? (pe(ue), (ue = -1)) : (q = !0), ie(fe, M - f)))
                : ((T.sortIndex = S), d(g, T), ee || B || ((ee = !0), K(_e))),
              T
            );
          }),
          (v.unstable_shouldYield = Ae),
          (v.unstable_wrapCallback = function (T) {
            var $ = R;
            return function () {
              var M = R;
              R = $;
              try {
                return T.apply(this, arguments);
              } finally {
                R = M;
              }
            };
          }));
      })(Gi)),
    Gi
  );
}
var Za;
function hf() {
  return (Za || ((Za = 1), (Wi.exports = mf())), Wi.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ja;
function vf() {
  if (Ja) return tt;
  Ja = 1;
  var v = Yi(),
    d = hf();
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
    w = {};
  function E(e, t) {
    (L(e, t), L(e + 'Capture', t));
  }
  function L(e, t) {
    for (w[e] = t, e = 0; e < t.length; e++) k.add(t[e]);
  }
  var P = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    g = Object.prototype.hasOwnProperty,
    j =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    O = {},
    I = {};
  function R(e) {
    return g.call(I, e) ? !0 : g.call(O, e) ? !1 : j.test(e) ? (I[e] = !0) : ((O[e] = !0), !1);
  }
  function B(e, t, n, r) {
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
    if (t === null || typeof t > 'u' || B(e, t, n, r)) return !0;
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
  function q(e, t, n, r, l, o, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i));
  }
  var Y = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      Y[e] = new q(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      Y[t] = new q(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      Y[e] = new q(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        Y[e] = new q(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        Y[e] = new q(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      Y[e] = new q(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      Y[e] = new q(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      Y[e] = new q(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      Y[e] = new q(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var pe = /[\-:]([a-z])/g;
  function de(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(pe, de);
      Y[t] = new q(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(pe, de);
        Y[t] = new q(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(pe, de);
      Y[t] = new q(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      Y[e] = new q(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Y.xlinkHref = new q('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      Y[e] = new q(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function ve(e, t, n, r) {
    var l = Y.hasOwnProperty(t) ? Y[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (ee(t, n, l, r) && (n = null),
      r || l === null
        ? R(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
  var fe = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    _e = Symbol.for('react.element'),
    W = Symbol.for('react.portal'),
    Z = Symbol.for('react.fragment'),
    ue = Symbol.for('react.strict_mode'),
    De = Symbol.for('react.profiler'),
    we = Symbol.for('react.provider'),
    Ae = Symbol.for('react.context'),
    We = Symbol.for('react.forward_ref'),
    Re = Symbol.for('react.suspense'),
    Ge = Symbol.for('react.suspense_list'),
    Q = Symbol.for('react.memo'),
    K = Symbol.for('react.lazy'),
    ie = Symbol.for('react.offscreen'),
    T = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (T && e[T]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var M = Object.assign,
    f;
  function S(e) {
    if (f === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        f = (t && t[1]) || '';
      }
    return (
      `
` +
      f +
      e
    );
  }
  var J = !1;
  function te(e, t) {
    if (!e || J) return '';
    J = !0;
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
            u = o.length - 1;
          1 <= i && 0 <= u && l[i] !== o[u];
        )
          u--;
        for (; 1 <= i && 0 <= u; i--, u--)
          if (l[i] !== o[u]) {
            if (i !== 1 || u !== 1)
              do
                if ((i--, u--, 0 > u || l[i] !== o[u])) {
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
              while (1 <= i && 0 <= u);
            break;
          }
      }
    } finally {
      ((J = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? S(e) : '';
  }
  function re(e) {
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
      case Z:
        return 'Fragment';
      case W:
        return 'Portal';
      case De:
        return 'Profiler';
      case ue:
        return 'StrictMode';
      case Re:
        return 'Suspense';
      case Ge:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Ae:
          return (e.displayName || 'Context') + '.Consumer';
        case we:
          return (e._context.displayName || 'Context') + '.Provider';
        case We:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case Q:
          return ((t = e.displayName || null), t !== null ? t : le(e.type) || 'Memo');
        case K:
          ((t = e._payload), (e = e._init));
          try {
            return le(e(t));
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
        return le(t);
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
  function ae(e) {
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
  function Se(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function rt(e) {
    var t = Se(e) ? 'checked' : 'value',
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
  function Or(e) {
    e._valueTracker || (e._valueTracker = rt(e));
  }
  function Ji(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = Se(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Rr(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Yl(e, t) {
    var n = t.checked;
    return M({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function bi(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = ae(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      }));
  }
  function eu(e, t) {
    ((t = t.checked), t != null && ve(e, 'checked', t, !1));
  }
  function Kl(e, t) {
    eu(e, t);
    var n = ae(t.value),
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
      ? Xl(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && Xl(e, t.type, ae(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function tu(e, t, n) {
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
  function Xl(e, t, n) {
    (t !== 'number' || Rr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var Qn = Array.isArray;
  function _n(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + ae(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Zl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return M({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function nu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(s(92));
        if (Qn(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: ae(n) };
  }
  function ru(e, t) {
    var n = ae(t.value),
      r = ae(t.defaultValue);
    (n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r));
  }
  function lu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function ou(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Jl(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? ou(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var zr,
    iu = (function (e) {
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
          zr = zr || document.createElement('div'),
            zr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = zr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Wn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Gn = {
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
    mc = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Gn).forEach(function (e) {
    mc.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gn[t] = Gn[e]));
    });
  });
  function uu(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (Gn.hasOwnProperty(e) && Gn[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function su(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = uu(n, t[n], r);
        (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var hc = M(
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
  function bl(e, t) {
    if (t) {
      if (hc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function eo(e, t) {
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
  var to = null;
  function no(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ro = null,
    wn = null,
    Sn = null;
  function au(e) {
    if ((e = mr(e))) {
      if (typeof ro != 'function') throw Error(s(280));
      var t = e.stateNode;
      t && ((t = nl(t)), ro(e.stateNode, e.type, t));
    }
  }
  function cu(e) {
    wn ? (Sn ? Sn.push(e) : (Sn = [e])) : (wn = e);
  }
  function du() {
    if (wn) {
      var e = wn,
        t = Sn;
      if (((Sn = wn = null), au(e), t)) for (e = 0; e < t.length; e++) au(t[e]);
    }
  }
  function fu(e, t) {
    return e(t);
  }
  function pu() {}
  var lo = !1;
  function mu(e, t, n) {
    if (lo) return e(t, n);
    lo = !0;
    try {
      return fu(e, t, n);
    } finally {
      ((lo = !1), (wn !== null || Sn !== null) && (pu(), du()));
    }
  }
  function qn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = nl(n);
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
  var oo = !1;
  if (P)
    try {
      var Yn = {};
      (Object.defineProperty(Yn, 'passive', {
        get: function () {
          oo = !0;
        },
      }),
        window.addEventListener('test', Yn, Yn),
        window.removeEventListener('test', Yn, Yn));
    } catch {
      oo = !1;
    }
  function vc(e, t, n, r, l, o, i, u, a) {
    var y = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, y);
    } catch (x) {
      this.onError(x);
    }
  }
  var Kn = !1,
    Ir = null,
    Mr = !1,
    io = null,
    yc = {
      onError: function (e) {
        ((Kn = !0), (Ir = e));
      },
    };
  function gc(e, t, n, r, l, o, i, u, a) {
    ((Kn = !1), (Ir = null), vc.apply(yc, arguments));
  }
  function _c(e, t, n, r, l, o, i, u, a) {
    if ((gc.apply(this, arguments), Kn)) {
      if (Kn) {
        var y = Ir;
        ((Kn = !1), (Ir = null));
      } else throw Error(s(198));
      Mr || ((Mr = !0), (io = y));
    }
  }
  function ln(e) {
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
  function hu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function vu(e) {
    if (ln(e) !== e) throw Error(s(188));
  }
  function wc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ln(e)), t === null)) throw Error(s(188));
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
          if (o === n) return (vu(l), e);
          if (o === r) return (vu(l), t);
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
  function yu(e) {
    return ((e = wc(e)), e !== null ? gu(e) : null);
  }
  function gu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = gu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var _u = d.unstable_scheduleCallback,
    wu = d.unstable_cancelCallback,
    Sc = d.unstable_shouldYield,
    xc = d.unstable_requestPaint,
    Ne = d.unstable_now,
    kc = d.unstable_getCurrentPriorityLevel,
    uo = d.unstable_ImmediatePriority,
    Su = d.unstable_UserBlockingPriority,
    Dr = d.unstable_NormalPriority,
    Cc = d.unstable_LowPriority,
    xu = d.unstable_IdlePriority,
    Fr = null,
    Ct = null;
  function Ec(e) {
    if (Ct && typeof Ct.onCommitFiberRoot == 'function')
      try {
        Ct.onCommitFiberRoot(Fr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var yt = Math.clz32 ? Math.clz32 : Pc,
    Nc = Math.log,
    jc = Math.LN2;
  function Pc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Nc(e) / jc) | 0)) | 0);
  }
  var Br = 64,
    Ar = 4194304;
  function Xn(e) {
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
  function Ur(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? (r = Xn(u)) : ((o &= i), o !== 0 && (r = Xn(o)));
    } else ((i = n & ~l), i !== 0 ? (r = Xn(i)) : o !== 0 && (r = Xn(o)));
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
  function Tc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes;
      0 < o;
    ) {
      var i = 31 - yt(o),
        u = 1 << i,
        a = l[i];
      (a === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[i] = Lc(u, t))
        : a <= t && (e.expiredLanes |= u),
        (o &= ~u));
    }
  }
  function so(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function ku() {
    var e = Br;
    return ((Br <<= 1), (Br & 4194240) === 0 && (Br = 64), e);
  }
  function ao(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Zn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - yt(t)),
      (e[t] = n));
  }
  function Oc(e, t) {
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
  function co(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - yt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var ce = 0;
  function Cu(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Eu,
    fo,
    Nu,
    ju,
    Pu,
    po = !1,
    $r = [],
    Bt = null,
    At = null,
    Ut = null,
    Jn = new Map(),
    bn = new Map(),
    $t = [],
    Rc =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function Lu(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Bt = null;
        break;
      case 'dragenter':
      case 'dragleave':
        At = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Ut = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Jn.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        bn.delete(t.pointerId);
    }
  }
  function er(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = mr(t)), t !== null && fo(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function zc(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return ((Bt = er(Bt, e, t, n, r, l)), !0);
      case 'dragenter':
        return ((At = er(At, e, t, n, r, l)), !0);
      case 'mouseover':
        return ((Ut = er(Ut, e, t, n, r, l)), !0);
      case 'pointerover':
        var o = l.pointerId;
        return (Jn.set(o, er(Jn.get(o) || null, e, t, n, r, l)), !0);
      case 'gotpointercapture':
        return ((o = l.pointerId), bn.set(o, er(bn.get(o) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function Tu(e) {
    var t = on(e.target);
    if (t !== null) {
      var n = ln(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = hu(n)), t !== null)) {
            ((e.blockedOn = t),
              Pu(e.priority, function () {
                Nu(n);
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
  function Vr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ho(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((to = r), n.target.dispatchEvent(r), (to = null));
      } else return ((t = mr(n)), t !== null && fo(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Ou(e, t, n) {
    Vr(e) && n.delete(t);
  }
  function Ic() {
    ((po = !1),
      Bt !== null && Vr(Bt) && (Bt = null),
      At !== null && Vr(At) && (At = null),
      Ut !== null && Vr(Ut) && (Ut = null),
      Jn.forEach(Ou),
      bn.forEach(Ou));
  }
  function tr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      po || ((po = !0), d.unstable_scheduleCallback(d.unstable_NormalPriority, Ic)));
  }
  function nr(e) {
    function t(l) {
      return tr(l, e);
    }
    if (0 < $r.length) {
      tr($r[0], e);
      for (var n = 1; n < $r.length; n++) {
        var r = $r[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Bt !== null && tr(Bt, e),
        At !== null && tr(At, e),
        Ut !== null && tr(Ut, e),
        Jn.forEach(t),
        bn.forEach(t),
        n = 0;
      n < $t.length;
      n++
    )
      ((r = $t[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < $t.length && ((n = $t[0]), n.blockedOn === null); )
      (Tu(n), n.blockedOn === null && $t.shift());
  }
  var xn = fe.ReactCurrentBatchConfig,
    Hr = !0;
  function Mc(e, t, n, r) {
    var l = ce,
      o = xn.transition;
    xn.transition = null;
    try {
      ((ce = 1), mo(e, t, n, r));
    } finally {
      ((ce = l), (xn.transition = o));
    }
  }
  function Dc(e, t, n, r) {
    var l = ce,
      o = xn.transition;
    xn.transition = null;
    try {
      ((ce = 4), mo(e, t, n, r));
    } finally {
      ((ce = l), (xn.transition = o));
    }
  }
  function mo(e, t, n, r) {
    if (Hr) {
      var l = ho(e, t, n, r);
      if (l === null) (Ro(e, t, r, Qr, n), Lu(e, r));
      else if (zc(l, e, t, n, r)) r.stopPropagation();
      else if ((Lu(e, r), t & 4 && -1 < Rc.indexOf(e))) {
        for (; l !== null; ) {
          var o = mr(l);
          if (
            (o !== null && Eu(o), (o = ho(e, t, n, r)), o === null && Ro(e, t, r, Qr, n), o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Ro(e, t, r, null, n);
    }
  }
  var Qr = null;
  function ho(e, t, n, r) {
    if (((Qr = null), (e = no(r)), (e = on(e)), e !== null))
      if (((t = ln(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = hu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Qr = e), null);
  }
  function Ru(e) {
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
        switch (kc()) {
          case uo:
            return 1;
          case Su:
            return 4;
          case Dr:
          case Cc:
            return 16;
          case xu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Vt = null,
    vo = null,
    Wr = null;
  function zu() {
    if (Wr) return Wr;
    var e,
      t = vo,
      n = t.length,
      r,
      l = 'value' in Vt ? Vt.value : Vt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (Wr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Gr(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function qr() {
    return !0;
  }
  function Iu() {
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
      for (var u in e) e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? qr
          : Iu),
        (this.isPropagationStopped = Iu),
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
            (this.isDefaultPrevented = qr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = qr));
        },
        persist: function () {},
        isPersistent: qr,
      }),
      t
    );
  }
  var kn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    yo = lt(kn),
    rr = M({}, kn, { view: 0, detail: 0 }),
    Fc = lt(rr),
    go,
    _o,
    lr,
    Yr = M({}, rr, {
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
      getModifierState: So,
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
          : (e !== lr &&
              (lr && e.type === 'mousemove'
                ? ((go = e.screenX - lr.screenX), (_o = e.screenY - lr.screenY))
                : (_o = go = 0),
              (lr = e)),
            go);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : _o;
      },
    }),
    Mu = lt(Yr),
    Bc = M({}, Yr, { dataTransfer: 0 }),
    Ac = lt(Bc),
    Uc = M({}, rr, { relatedTarget: 0 }),
    wo = lt(Uc),
    $c = M({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Vc = lt($c),
    Hc = M({}, kn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Qc = lt(Hc),
    Wc = M({}, kn, { data: 0 }),
    Du = lt(Wc),
    Gc = {
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
    qc = {
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
    Yc = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Kc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Yc[e]) ? !!t[e] : !1;
  }
  function So() {
    return Kc;
  }
  var Xc = M({}, rr, {
      key: function (e) {
        if (e.key) {
          var t = Gc[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Gr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? qc[e.keyCode] || 'Unidentified'
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
      getModifierState: So,
      charCode: function (e) {
        return e.type === 'keypress' ? Gr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Gr(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Zc = lt(Xc),
    Jc = M({}, Yr, {
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
    Fu = lt(Jc),
    bc = M({}, rr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: So,
    }),
    ed = lt(bc),
    td = M({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    nd = lt(td),
    rd = M({}, Yr, {
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
    ld = lt(rd),
    od = [9, 13, 27, 32],
    xo = P && 'CompositionEvent' in window,
    or = null;
  P && 'documentMode' in document && (or = document.documentMode);
  var id = P && 'TextEvent' in window && !or,
    Bu = P && (!xo || (or && 8 < or && 11 >= or)),
    Au = ' ',
    Uu = !1;
  function $u(e, t) {
    switch (e) {
      case 'keyup':
        return od.indexOf(t.keyCode) !== -1;
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
  function Vu(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var Cn = !1;
  function ud(e, t) {
    switch (e) {
      case 'compositionend':
        return Vu(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Uu = !0), Au);
      case 'textInput':
        return ((e = t.data), e === Au && Uu ? null : e);
      default:
        return null;
    }
  }
  function sd(e, t) {
    if (Cn)
      return e === 'compositionend' || (!xo && $u(e, t))
        ? ((e = zu()), (Wr = vo = Vt = null), (Cn = !1), e)
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
        return Bu && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var ad = {
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
  function Hu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!ad[e.type] : t === 'textarea';
  }
  function Qu(e, t, n, r) {
    (cu(r),
      (t = br(t, 'onChange')),
      0 < t.length &&
        ((n = new yo('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
  }
  var ir = null,
    ur = null;
  function cd(e) {
    ss(e, 0);
  }
  function Kr(e) {
    var t = Ln(e);
    if (Ji(t)) return e;
  }
  function dd(e, t) {
    if (e === 'change') return t;
  }
  var Wu = !1;
  if (P) {
    var ko;
    if (P) {
      var Co = 'oninput' in document;
      if (!Co) {
        var Gu = document.createElement('div');
        (Gu.setAttribute('oninput', 'return;'), (Co = typeof Gu.oninput == 'function'));
      }
      ko = Co;
    } else ko = !1;
    Wu = ko && (!document.documentMode || 9 < document.documentMode);
  }
  function qu() {
    ir && (ir.detachEvent('onpropertychange', Yu), (ur = ir = null));
  }
  function Yu(e) {
    if (e.propertyName === 'value' && Kr(ur)) {
      var t = [];
      (Qu(t, ur, e, no(e)), mu(cd, t));
    }
  }
  function fd(e, t, n) {
    e === 'focusin'
      ? (qu(), (ir = t), (ur = n), ir.attachEvent('onpropertychange', Yu))
      : e === 'focusout' && qu();
  }
  function pd(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Kr(ur);
  }
  function md(e, t) {
    if (e === 'click') return Kr(t);
  }
  function hd(e, t) {
    if (e === 'input' || e === 'change') return Kr(t);
  }
  function vd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var gt = typeof Object.is == 'function' ? Object.is : vd;
  function sr(e, t) {
    if (gt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!g.call(t, l) || !gt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ku(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Xu(e, t) {
    var n = Ku(e);
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
      n = Ku(n);
    }
  }
  function Zu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Zu(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ju() {
    for (var e = window, t = Rr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Rr(e.document);
    }
    return t;
  }
  function Eo(e) {
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
  function yd(e) {
    var t = Ju(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Zu(n.ownerDocument.documentElement, n)) {
      if (r !== null && Eo(n)) {
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
            (l = Xu(n, o)));
          var i = Xu(n, r);
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
  var gd = P && 'documentMode' in document && 11 >= document.documentMode,
    En = null,
    No = null,
    ar = null,
    jo = !1;
  function bu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    jo ||
      En == null ||
      En !== Rr(r) ||
      ((r = En),
      'selectionStart' in r && Eo(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (ar && sr(ar, r)) ||
        ((ar = r),
        (r = br(No, 'onSelect')),
        0 < r.length &&
          ((t = new yo('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = En))));
  }
  function Xr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var Nn = {
      animationend: Xr('Animation', 'AnimationEnd'),
      animationiteration: Xr('Animation', 'AnimationIteration'),
      animationstart: Xr('Animation', 'AnimationStart'),
      transitionend: Xr('Transition', 'TransitionEnd'),
    },
    Po = {},
    es = {};
  P &&
    ((es = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Nn.animationend.animation,
      delete Nn.animationiteration.animation,
      delete Nn.animationstart.animation),
    'TransitionEvent' in window || delete Nn.transitionend.transition);
  function Zr(e) {
    if (Po[e]) return Po[e];
    if (!Nn[e]) return e;
    var t = Nn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in es) return (Po[e] = t[n]);
    return e;
  }
  var ts = Zr('animationend'),
    ns = Zr('animationiteration'),
    rs = Zr('animationstart'),
    ls = Zr('transitionend'),
    os = new Map(),
    is =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Ht(e, t) {
    (os.set(e, t), E(t, [e]));
  }
  for (var Lo = 0; Lo < is.length; Lo++) {
    var To = is[Lo],
      _d = To.toLowerCase(),
      wd = To[0].toUpperCase() + To.slice(1);
    Ht(_d, 'on' + wd);
  }
  (Ht(ts, 'onAnimationEnd'),
    Ht(ns, 'onAnimationIteration'),
    Ht(rs, 'onAnimationStart'),
    Ht('dblclick', 'onDoubleClick'),
    Ht('focusin', 'onFocus'),
    Ht('focusout', 'onBlur'),
    Ht(ls, 'onTransitionEnd'),
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
  var cr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Sd = new Set('cancel close invalid load scroll toggle'.split(' ').concat(cr));
  function us(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n), _c(r, t, void 0, e), (e.currentTarget = null));
  }
  function ss(e, t) {
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
              a = u.instance,
              y = u.currentTarget;
            if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
            (us(l, u, y), (o = a));
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((u = r[i]),
              (a = u.instance),
              (y = u.currentTarget),
              (u = u.listener),
              a !== o && l.isPropagationStopped())
            )
              break e;
            (us(l, u, y), (o = a));
          }
      }
    }
    if (Mr) throw ((e = io), (Mr = !1), (io = null), e);
  }
  function ye(e, t) {
    var n = t[Bo];
    n === void 0 && (n = t[Bo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (as(t, e, 2, !1), n.add(r));
  }
  function Oo(e, t, n) {
    var r = 0;
    (t && (r |= 4), as(n, e, r, t));
  }
  var Jr = '_reactListening' + Math.random().toString(36).slice(2);
  function dr(e) {
    if (!e[Jr]) {
      ((e[Jr] = !0),
        k.forEach(function (n) {
          n !== 'selectionchange' && (Sd.has(n) || Oo(n, !1, e), Oo(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Jr] || ((t[Jr] = !0), Oo('selectionchange', !1, t));
    }
  }
  function as(e, t, n, r) {
    switch (Ru(t)) {
      case 1:
        var l = Mc;
        break;
      case 4:
        l = Dc;
        break;
      default:
        l = mo;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !oo || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function Ro(e, t, n, r, l) {
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
              var a = i.tag;
              if (
                (a === 3 || a === 4) &&
                ((a = i.stateNode.containerInfo),
                a === l || (a.nodeType === 8 && a.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (((i = on(u)), i === null)) return;
            if (((a = i.tag), a === 5 || a === 6)) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    mu(function () {
      var y = o,
        x = no(n),
        C = [];
      e: {
        var _ = os.get(e);
        if (_ !== void 0) {
          var z = yo,
            F = e;
          switch (e) {
            case 'keypress':
              if (Gr(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              z = Zc;
              break;
            case 'focusin':
              ((F = 'focus'), (z = wo));
              break;
            case 'focusout':
              ((F = 'blur'), (z = wo));
              break;
            case 'beforeblur':
            case 'afterblur':
              z = wo;
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
              z = Mu;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              z = Ac;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              z = ed;
              break;
            case ts:
            case ns:
            case rs:
              z = Vc;
              break;
            case ls:
              z = nd;
              break;
            case 'scroll':
              z = Fc;
              break;
            case 'wheel':
              z = ld;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              z = Qc;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              z = Fu;
          }
          var A = (t & 4) !== 0,
            je = !A && e === 'scroll',
            m = A ? (_ !== null ? _ + 'Capture' : null) : _;
          A = [];
          for (var c = y, h; c !== null; ) {
            h = c;
            var N = h.stateNode;
            if (
              (h.tag === 5 &&
                N !== null &&
                ((h = N), m !== null && ((N = qn(c, m)), N != null && A.push(fr(c, N, h)))),
              je)
            )
              break;
            c = c.return;
          }
          0 < A.length && ((_ = new z(_, F, null, n, x)), C.push({ event: _, listeners: A }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((_ = e === 'mouseover' || e === 'pointerover'),
            (z = e === 'mouseout' || e === 'pointerout'),
            _ && n !== to && (F = n.relatedTarget || n.fromElement) && (on(F) || F[Lt]))
          )
            break e;
          if (
            (z || _) &&
            ((_ =
              x.window === x
                ? x
                : (_ = x.ownerDocument)
                  ? _.defaultView || _.parentWindow
                  : window),
            z
              ? ((F = n.relatedTarget || n.toElement),
                (z = y),
                (F = F ? on(F) : null),
                F !== null &&
                  ((je = ln(F)), F !== je || (F.tag !== 5 && F.tag !== 6)) &&
                  (F = null))
              : ((z = null), (F = y)),
            z !== F)
          ) {
            if (
              ((A = Mu),
              (N = 'onMouseLeave'),
              (m = 'onMouseEnter'),
              (c = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((A = Fu), (N = 'onPointerLeave'), (m = 'onPointerEnter'), (c = 'pointer')),
              (je = z == null ? _ : Ln(z)),
              (h = F == null ? _ : Ln(F)),
              (_ = new A(N, c + 'leave', z, n, x)),
              (_.target = je),
              (_.relatedTarget = h),
              (N = null),
              on(x) === y &&
                ((A = new A(m, c + 'enter', F, n, x)),
                (A.target = h),
                (A.relatedTarget = je),
                (N = A)),
              (je = N),
              z && F)
            )
              t: {
                for (A = z, m = F, c = 0, h = A; h; h = jn(h)) c++;
                for (h = 0, N = m; N; N = jn(N)) h++;
                for (; 0 < c - h; ) ((A = jn(A)), c--);
                for (; 0 < h - c; ) ((m = jn(m)), h--);
                for (; c--; ) {
                  if (A === m || (m !== null && A === m.alternate)) break t;
                  ((A = jn(A)), (m = jn(m)));
                }
                A = null;
              }
            else A = null;
            (z !== null && cs(C, _, z, A, !1), F !== null && je !== null && cs(C, je, F, A, !0));
          }
        }
        e: {
          if (
            ((_ = y ? Ln(y) : window),
            (z = _.nodeName && _.nodeName.toLowerCase()),
            z === 'select' || (z === 'input' && _.type === 'file'))
          )
            var U = dd;
          else if (Hu(_))
            if (Wu) U = hd;
            else {
              U = pd;
              var V = fd;
            }
          else
            (z = _.nodeName) &&
              z.toLowerCase() === 'input' &&
              (_.type === 'checkbox' || _.type === 'radio') &&
              (U = md);
          if (U && (U = U(e, y))) {
            Qu(C, U, n, x);
            break e;
          }
          (V && V(e, _, y),
            e === 'focusout' &&
              (V = _._wrapperState) &&
              V.controlled &&
              _.type === 'number' &&
              Xl(_, 'number', _.value));
        }
        switch (((V = y ? Ln(y) : window), e)) {
          case 'focusin':
            (Hu(V) || V.contentEditable === 'true') && ((En = V), (No = y), (ar = null));
            break;
          case 'focusout':
            ar = No = En = null;
            break;
          case 'mousedown':
            jo = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((jo = !1), bu(C, n, x));
            break;
          case 'selectionchange':
            if (gd) break;
          case 'keydown':
          case 'keyup':
            bu(C, n, x);
        }
        var H;
        if (xo)
          e: {
            switch (e) {
              case 'compositionstart':
                var G = 'onCompositionStart';
                break e;
              case 'compositionend':
                G = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                G = 'onCompositionUpdate';
                break e;
            }
            G = void 0;
          }
        else
          Cn
            ? $u(e, n) && (G = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (G = 'onCompositionStart');
        (G &&
          (Bu &&
            n.locale !== 'ko' &&
            (Cn || G !== 'onCompositionStart'
              ? G === 'onCompositionEnd' && Cn && (H = zu())
              : ((Vt = x), (vo = 'value' in Vt ? Vt.value : Vt.textContent), (Cn = !0))),
          (V = br(y, G)),
          0 < V.length &&
            ((G = new Du(G, e, null, n, x)),
            C.push({ event: G, listeners: V }),
            H ? (G.data = H) : ((H = Vu(n)), H !== null && (G.data = H)))),
          (H = id ? ud(e, n) : sd(e, n)) &&
            ((y = br(y, 'onBeforeInput')),
            0 < y.length &&
              ((x = new Du('onBeforeInput', 'beforeinput', null, n, x)),
              C.push({ event: x, listeners: y }),
              (x.data = H))));
      }
      ss(C, t);
    });
  }
  function fr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function br(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      (l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = qn(e, n)),
        o != null && r.unshift(fr(e, o, l)),
        (o = qn(e, t)),
        o != null && r.push(fr(e, o, l))),
        (e = e.return));
    }
    return r;
  }
  function jn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function cs(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n,
        a = u.alternate,
        y = u.stateNode;
      if (a !== null && a === r) break;
      (u.tag === 5 &&
        y !== null &&
        ((u = y),
        l
          ? ((a = qn(n, o)), a != null && i.unshift(fr(n, a, u)))
          : l || ((a = qn(n, o)), a != null && i.push(fr(n, a, u)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var xd = /\r\n?/g,
    kd = /\u0000|\uFFFD/g;
  function ds(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        xd,
        `
`
      )
      .replace(kd, '');
  }
  function el(e, t, n) {
    if (((t = ds(t)), ds(e) !== t && n)) throw Error(s(425));
  }
  function tl() {}
  var zo = null,
    Io = null;
  function Mo(e, t) {
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
  var Do = typeof setTimeout == 'function' ? setTimeout : void 0,
    Cd = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    fs = typeof Promise == 'function' ? Promise : void 0,
    Ed =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof fs < 'u'
          ? function (e) {
              return fs.resolve(null).then(e).catch(Nd);
            }
          : Do;
  function Nd(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Fo(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$')) {
          if (r === 0) {
            (e.removeChild(l), nr(t));
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = l;
    } while (n);
    nr(t);
  }
  function Qt(e) {
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
  function ps(e) {
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
  var Pn = Math.random().toString(36).slice(2),
    Et = '__reactFiber$' + Pn,
    pr = '__reactProps$' + Pn,
    Lt = '__reactContainer$' + Pn,
    Bo = '__reactEvents$' + Pn,
    jd = '__reactListeners$' + Pn,
    Pd = '__reactHandles$' + Pn;
  function on(e) {
    var t = e[Et];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Lt] || n[Et])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = ps(e); e !== null; ) {
            if ((n = e[Et])) return n;
            e = ps(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function mr(e) {
    return (
      (e = e[Et] || e[Lt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Ln(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function nl(e) {
    return e[pr] || null;
  }
  var Ao = [],
    Tn = -1;
  function Wt(e) {
    return { current: e };
  }
  function ge(e) {
    0 > Tn || ((e.current = Ao[Tn]), (Ao[Tn] = null), Tn--);
  }
  function he(e, t) {
    (Tn++, (Ao[Tn] = e.current), (e.current = t));
  }
  var Gt = {},
    Ue = Wt(Gt),
    Xe = Wt(!1),
    un = Gt;
  function On(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Gt;
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
  function rl() {
    (ge(Xe), ge(Ue));
  }
  function ms(e, t, n) {
    if (Ue.current !== Gt) throw Error(s(168));
    (he(Ue, t), he(Xe, n));
  }
  function hs(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(s(108, me(e) || 'Unknown', l));
    return M({}, n, r);
  }
  function ll(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Gt),
      (un = Ue.current),
      he(Ue, e),
      he(Xe, Xe.current),
      !0
    );
  }
  function vs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    (n
      ? ((e = hs(e, t, un)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ge(Xe),
        ge(Ue),
        he(Ue, e))
      : ge(Xe),
      he(Xe, n));
  }
  var Tt = null,
    ol = !1,
    Uo = !1;
  function ys(e) {
    Tt === null ? (Tt = [e]) : Tt.push(e);
  }
  function Ld(e) {
    ((ol = !0), ys(e));
  }
  function qt() {
    if (!Uo && Tt !== null) {
      Uo = !0;
      var e = 0,
        t = ce;
      try {
        var n = Tt;
        for (ce = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Tt = null), (ol = !1));
      } catch (l) {
        throw (Tt !== null && (Tt = Tt.slice(e + 1)), _u(uo, qt), l);
      } finally {
        ((ce = t), (Uo = !1));
      }
    }
    return null;
  }
  var Rn = [],
    zn = 0,
    il = null,
    ul = 0,
    ct = [],
    dt = 0,
    sn = null,
    Ot = 1,
    Rt = '';
  function an(e, t) {
    ((Rn[zn++] = ul), (Rn[zn++] = il), (il = e), (ul = t));
  }
  function gs(e, t, n) {
    ((ct[dt++] = Ot), (ct[dt++] = Rt), (ct[dt++] = sn), (sn = e));
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
  function $o(e) {
    e.return !== null && (an(e, 1), gs(e, 1, 0));
  }
  function Vo(e) {
    for (; e === il; ) ((il = Rn[--zn]), (Rn[zn] = null), (ul = Rn[--zn]), (Rn[zn] = null));
    for (; e === sn; )
      ((sn = ct[--dt]),
        (ct[dt] = null),
        (Rt = ct[--dt]),
        (ct[dt] = null),
        (Ot = ct[--dt]),
        (ct[dt] = null));
  }
  var ot = null,
    it = null,
    xe = !1,
    _t = null;
  function _s(e, t) {
    var n = ht(5, null, null, 0);
    ((n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function ws(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (ot = e), (it = Qt(t.firstChild)), !0) : !1
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
            ? ((n = sn !== null ? { id: Ot, overflow: Rt } : null),
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
  function Qo(e) {
    if (xe) {
      var t = it;
      if (t) {
        var n = t;
        if (!ws(e, t)) {
          if (Ho(e)) throw Error(s(418));
          t = Qt(n.nextSibling);
          var r = ot;
          t && ws(e, t) ? _s(r, n) : ((e.flags = (e.flags & -4097) | 2), (xe = !1), (ot = e));
        }
      } else {
        if (Ho(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (xe = !1), (ot = e));
      }
    }
  }
  function Ss(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ot = e;
  }
  function sl(e) {
    if (e !== ot) return !1;
    if (!xe) return (Ss(e), (xe = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !Mo(e.type, e.memoizedProps))),
      t && (t = it))
    ) {
      if (Ho(e)) throw (xs(), Error(s(418)));
      for (; t; ) (_s(e, t), (t = Qt(t.nextSibling)));
    }
    if ((Ss(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                it = Qt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        it = null;
      }
    } else it = ot ? Qt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function xs() {
    for (var e = it; e; ) e = Qt(e.nextSibling);
  }
  function In() {
    ((it = ot = null), (xe = !1));
  }
  function Wo(e) {
    _t === null ? (_t = [e]) : _t.push(e);
  }
  var Td = fe.ReactCurrentBatchConfig;
  function hr(e, t, n) {
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
  function al(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        s(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      )
    );
  }
  function ks(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Cs(e) {
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
      return ((m = tn(m, c)), (m.index = 0), (m.sibling = null), m);
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
    function u(m, c, h, N) {
      return c === null || c.tag !== 6
        ? ((c = Di(h, m.mode, N)), (c.return = m), c)
        : ((c = l(c, h)), (c.return = m), c);
    }
    function a(m, c, h, N) {
      var U = h.type;
      return U === Z
        ? x(m, c, h.props.children, N, h.key)
        : c !== null &&
            (c.elementType === U ||
              (typeof U == 'object' && U !== null && U.$$typeof === K && ks(U) === c.type))
          ? ((N = l(c, h.props)), (N.ref = hr(m, c, h)), (N.return = m), N)
          : ((N = zl(h.type, h.key, h.props, null, m.mode, N)),
            (N.ref = hr(m, c, h)),
            (N.return = m),
            N);
    }
    function y(m, c, h, N) {
      return c === null ||
        c.tag !== 4 ||
        c.stateNode.containerInfo !== h.containerInfo ||
        c.stateNode.implementation !== h.implementation
        ? ((c = Fi(h, m.mode, N)), (c.return = m), c)
        : ((c = l(c, h.children || [])), (c.return = m), c);
    }
    function x(m, c, h, N, U) {
      return c === null || c.tag !== 7
        ? ((c = yn(h, m.mode, N, U)), (c.return = m), c)
        : ((c = l(c, h)), (c.return = m), c);
    }
    function C(m, c, h) {
      if ((typeof c == 'string' && c !== '') || typeof c == 'number')
        return ((c = Di('' + c, m.mode, h)), (c.return = m), c);
      if (typeof c == 'object' && c !== null) {
        switch (c.$$typeof) {
          case _e:
            return (
              (h = zl(c.type, c.key, c.props, null, m.mode, h)),
              (h.ref = hr(m, null, c)),
              (h.return = m),
              h
            );
          case W:
            return ((c = Fi(c, m.mode, h)), (c.return = m), c);
          case K:
            var N = c._init;
            return C(m, N(c._payload), h);
        }
        if (Qn(c) || $(c)) return ((c = yn(c, m.mode, h, null)), (c.return = m), c);
        al(m, c);
      }
      return null;
    }
    function _(m, c, h, N) {
      var U = c !== null ? c.key : null;
      if ((typeof h == 'string' && h !== '') || typeof h == 'number')
        return U !== null ? null : u(m, c, '' + h, N);
      if (typeof h == 'object' && h !== null) {
        switch (h.$$typeof) {
          case _e:
            return h.key === U ? a(m, c, h, N) : null;
          case W:
            return h.key === U ? y(m, c, h, N) : null;
          case K:
            return ((U = h._init), _(m, c, U(h._payload), N));
        }
        if (Qn(h) || $(h)) return U !== null ? null : x(m, c, h, N, null);
        al(m, h);
      }
      return null;
    }
    function z(m, c, h, N, U) {
      if ((typeof N == 'string' && N !== '') || typeof N == 'number')
        return ((m = m.get(h) || null), u(c, m, '' + N, U));
      if (typeof N == 'object' && N !== null) {
        switch (N.$$typeof) {
          case _e:
            return ((m = m.get(N.key === null ? h : N.key) || null), a(c, m, N, U));
          case W:
            return ((m = m.get(N.key === null ? h : N.key) || null), y(c, m, N, U));
          case K:
            var V = N._init;
            return z(m, c, h, V(N._payload), U);
        }
        if (Qn(N) || $(N)) return ((m = m.get(h) || null), x(c, m, N, U, null));
        al(c, N);
      }
      return null;
    }
    function F(m, c, h, N) {
      for (var U = null, V = null, H = c, G = (c = 0), Me = null; H !== null && G < h.length; G++) {
        H.index > G ? ((Me = H), (H = null)) : (Me = H.sibling);
        var oe = _(m, H, h[G], N);
        if (oe === null) {
          H === null && (H = Me);
          break;
        }
        (e && H && oe.alternate === null && t(m, H),
          (c = o(oe, c, G)),
          V === null ? (U = oe) : (V.sibling = oe),
          (V = oe),
          (H = Me));
      }
      if (G === h.length) return (n(m, H), xe && an(m, G), U);
      if (H === null) {
        for (; G < h.length; G++)
          ((H = C(m, h[G], N)),
            H !== null && ((c = o(H, c, G)), V === null ? (U = H) : (V.sibling = H), (V = H)));
        return (xe && an(m, G), U);
      }
      for (H = r(m, H); G < h.length; G++)
        ((Me = z(H, m, G, h[G], N)),
          Me !== null &&
            (e && Me.alternate !== null && H.delete(Me.key === null ? G : Me.key),
            (c = o(Me, c, G)),
            V === null ? (U = Me) : (V.sibling = Me),
            (V = Me)));
      return (
        e &&
          H.forEach(function (nn) {
            return t(m, nn);
          }),
        xe && an(m, G),
        U
      );
    }
    function A(m, c, h, N) {
      var U = $(h);
      if (typeof U != 'function') throw Error(s(150));
      if (((h = U.call(h)), h == null)) throw Error(s(151));
      for (
        var V = (U = null), H = c, G = (c = 0), Me = null, oe = h.next();
        H !== null && !oe.done;
        G++, oe = h.next()
      ) {
        H.index > G ? ((Me = H), (H = null)) : (Me = H.sibling);
        var nn = _(m, H, oe.value, N);
        if (nn === null) {
          H === null && (H = Me);
          break;
        }
        (e && H && nn.alternate === null && t(m, H),
          (c = o(nn, c, G)),
          V === null ? (U = nn) : (V.sibling = nn),
          (V = nn),
          (H = Me));
      }
      if (oe.done) return (n(m, H), xe && an(m, G), U);
      if (H === null) {
        for (; !oe.done; G++, oe = h.next())
          ((oe = C(m, oe.value, N)),
            oe !== null && ((c = o(oe, c, G)), V === null ? (U = oe) : (V.sibling = oe), (V = oe)));
        return (xe && an(m, G), U);
      }
      for (H = r(m, H); !oe.done; G++, oe = h.next())
        ((oe = z(H, m, G, oe.value, N)),
          oe !== null &&
            (e && oe.alternate !== null && H.delete(oe.key === null ? G : oe.key),
            (c = o(oe, c, G)),
            V === null ? (U = oe) : (V.sibling = oe),
            (V = oe)));
      return (
        e &&
          H.forEach(function (cf) {
            return t(m, cf);
          }),
        xe && an(m, G),
        U
      );
    }
    function je(m, c, h, N) {
      if (
        (typeof h == 'object' &&
          h !== null &&
          h.type === Z &&
          h.key === null &&
          (h = h.props.children),
        typeof h == 'object' && h !== null)
      ) {
        switch (h.$$typeof) {
          case _e:
            e: {
              for (var U = h.key, V = c; V !== null; ) {
                if (V.key === U) {
                  if (((U = h.type), U === Z)) {
                    if (V.tag === 7) {
                      (n(m, V.sibling), (c = l(V, h.props.children)), (c.return = m), (m = c));
                      break e;
                    }
                  } else if (
                    V.elementType === U ||
                    (typeof U == 'object' && U !== null && U.$$typeof === K && ks(U) === V.type)
                  ) {
                    (n(m, V.sibling),
                      (c = l(V, h.props)),
                      (c.ref = hr(m, V, h)),
                      (c.return = m),
                      (m = c));
                    break e;
                  }
                  n(m, V);
                  break;
                } else t(m, V);
                V = V.sibling;
              }
              h.type === Z
                ? ((c = yn(h.props.children, m.mode, N, h.key)), (c.return = m), (m = c))
                : ((N = zl(h.type, h.key, h.props, null, m.mode, N)),
                  (N.ref = hr(m, c, h)),
                  (N.return = m),
                  (m = N));
            }
            return i(m);
          case W:
            e: {
              for (V = h.key; c !== null; ) {
                if (c.key === V)
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
              ((c = Fi(h, m.mode, N)), (c.return = m), (m = c));
            }
            return i(m);
          case K:
            return ((V = h._init), je(m, c, V(h._payload), N));
        }
        if (Qn(h)) return F(m, c, h, N);
        if ($(h)) return A(m, c, h, N);
        al(m, h);
      }
      return (typeof h == 'string' && h !== '') || typeof h == 'number'
        ? ((h = '' + h),
          c !== null && c.tag === 6
            ? (n(m, c.sibling), (c = l(c, h)), (c.return = m), (m = c))
            : (n(m, c), (c = Di(h, m.mode, N)), (c.return = m), (m = c)),
          i(m))
        : n(m, c);
    }
    return je;
  }
  var Mn = Cs(!0),
    Es = Cs(!1),
    cl = Wt(null),
    dl = null,
    Dn = null,
    Go = null;
  function qo() {
    Go = Dn = dl = null;
  }
  function Yo(e) {
    var t = cl.current;
    (ge(cl), (e._currentValue = t));
  }
  function Ko(e, t, n) {
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
  function Fn(e, t) {
    ((dl = e),
      (Go = Dn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Je = !0), (e.firstContext = null)));
  }
  function ft(e) {
    var t = e._currentValue;
    if (Go !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Dn === null)) {
        if (dl === null) throw Error(s(308));
        ((Dn = e), (dl.dependencies = { lanes: 0, firstContext: e }));
      } else Dn = Dn.next = e;
    return t;
  }
  var cn = null;
  function Xo(e) {
    cn === null ? (cn = [e]) : cn.push(e);
  }
  function Ns(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Xo(t)) : ((n.next = l.next), (l.next = n)),
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
  var Yt = !1;
  function Zo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function js(e, t) {
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
  function Kt(e, t, n) {
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
      l === null ? ((t.next = t), Xo(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      zt(e, n)
    );
  }
  function fl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), co(e, n));
    }
  }
  function Ps(e, t) {
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
  function pl(e, t, n, r) {
    var l = e.updateQueue;
    Yt = !1;
    var o = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var a = u,
        y = a.next;
      ((a.next = null), i === null ? (o = y) : (i.next = y), (i = a));
      var x = e.alternate;
      x !== null &&
        ((x = x.updateQueue),
        (u = x.lastBaseUpdate),
        u !== i && (u === null ? (x.firstBaseUpdate = y) : (u.next = y), (x.lastBaseUpdate = a)));
    }
    if (o !== null) {
      var C = l.baseState;
      ((i = 0), (x = y = a = null), (u = o));
      do {
        var _ = u.lane,
          z = u.eventTime;
        if ((r & _) === _) {
          x !== null &&
            (x = x.next =
              {
                eventTime: z,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var F = e,
              A = u;
            switch (((_ = t), (z = n), A.tag)) {
              case 1:
                if (((F = A.payload), typeof F == 'function')) {
                  C = F.call(z, C, _);
                  break e;
                }
                C = F;
                break e;
              case 3:
                F.flags = (F.flags & -65537) | 128;
              case 0:
                if (
                  ((F = A.payload), (_ = typeof F == 'function' ? F.call(z, C, _) : F), _ == null)
                )
                  break e;
                C = M({}, C, _);
                break e;
              case 2:
                Yt = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64), (_ = l.effects), _ === null ? (l.effects = [u]) : _.push(u));
        } else
          ((z = {
            eventTime: z,
            lane: _,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            x === null ? ((y = x = z), (a = C)) : (x = x.next = z),
            (i |= _));
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          ((_ = u),
            (u = _.next),
            (_.next = null),
            (l.lastBaseUpdate = _),
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
      ((pn |= i), (e.lanes = i), (e.memoizedState = C));
    }
  }
  function Ls(e, t, n) {
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
  var vr = {},
    Nt = Wt(vr),
    yr = Wt(vr),
    gr = Wt(vr);
  function dn(e) {
    if (e === vr) throw Error(s(174));
    return e;
  }
  function Jo(e, t) {
    switch ((he(gr, t), he(yr, e), he(Nt, vr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Jl(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Jl(t, e)));
    }
    (ge(Nt), he(Nt, t));
  }
  function Bn() {
    (ge(Nt), ge(yr), ge(gr));
  }
  function Ts(e) {
    dn(gr.current);
    var t = dn(Nt.current),
      n = Jl(t, e.type);
    t !== n && (he(yr, e), he(Nt, n));
  }
  function bo(e) {
    yr.current === e && (ge(Nt), ge(yr));
  }
  var ke = Wt(0);
  function ml(e) {
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
  var ei = [];
  function ti() {
    for (var e = 0; e < ei.length; e++) ei[e]._workInProgressVersionPrimary = null;
    ei.length = 0;
  }
  var hl = fe.ReactCurrentDispatcher,
    ni = fe.ReactCurrentBatchConfig,
    fn = 0,
    Ce = null,
    Te = null,
    ze = null,
    vl = !1,
    _r = !1,
    wr = 0,
    Od = 0;
  function $e() {
    throw Error(s(321));
  }
  function ri(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!gt(e[n], t[n])) return !1;
    return !0;
  }
  function li(e, t, n, r, l, o) {
    if (
      ((fn = o),
      (Ce = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (hl.current = e === null || e.memoizedState === null ? Md : Dd),
      (e = n(r, l)),
      _r)
    ) {
      o = 0;
      do {
        if (((_r = !1), (wr = 0), 25 <= o)) throw Error(s(301));
        ((o += 1), (ze = Te = null), (t.updateQueue = null), (hl.current = Fd), (e = n(r, l)));
      } while (_r);
    }
    if (
      ((hl.current = _l),
      (t = Te !== null && Te.next !== null),
      (fn = 0),
      (ze = Te = Ce = null),
      (vl = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function oi() {
    var e = wr !== 0;
    return ((wr = 0), e);
  }
  function jt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (ze === null ? (Ce.memoizedState = ze = e) : (ze = ze.next = e), ze);
  }
  function pt() {
    if (Te === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Te.next;
    var t = ze === null ? Ce.memoizedState : ze.next;
    if (t !== null) ((ze = t), (Te = e));
    else {
      if (e === null) throw Error(s(310));
      ((Te = e),
        (e = {
          memoizedState: Te.memoizedState,
          baseState: Te.baseState,
          baseQueue: Te.baseQueue,
          queue: Te.queue,
          next: null,
        }),
        ze === null ? (Ce.memoizedState = ze = e) : (ze = ze.next = e));
    }
    return ze;
  }
  function Sr(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function ii(e) {
    var t = pt(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Te,
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
        a = null,
        y = o;
      do {
        var x = y.lane;
        if ((fn & x) === x)
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
          (a === null ? ((u = a = C), (i = r)) : (a = a.next = C), (Ce.lanes |= x), (pn |= x));
        }
        y = y.next;
      } while (y !== null && y !== o);
      (a === null ? (i = r) : (a.next = u),
        gt(r, t.memoizedState) || (Je = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = a),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((o = l.lane), (Ce.lanes |= o), (pn |= o), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ui(e) {
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
  function Os() {}
  function Rs(e, t) {
    var n = Ce,
      r = pt(),
      l = t(),
      o = !gt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Je = !0)),
      (r = r.queue),
      si(Ms.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (ze !== null && ze.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), xr(9, Is.bind(null, n, r, l, t), void 0, null), Ie === null))
        throw Error(s(349));
      (fn & 30) !== 0 || zs(n, t, l);
    }
    return l;
  }
  function zs(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Ce.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Is(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Ds(t) && Fs(e));
  }
  function Ms(e, t, n) {
    return n(function () {
      Ds(t) && Fs(e);
    });
  }
  function Ds(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !gt(e, n);
    } catch {
      return !0;
    }
  }
  function Fs(e) {
    var t = zt(e, 1);
    t !== null && kt(t, e, 1, -1);
  }
  function Bs(e) {
    var t = jt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Id.bind(null, Ce, e)),
      [t.memoizedState, e]
    );
  }
  function xr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ce.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function As() {
    return pt().memoizedState;
  }
  function yl(e, t, n, r) {
    var l = jt();
    ((Ce.flags |= e), (l.memoizedState = xr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function gl(e, t, n, r) {
    var l = pt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Te !== null) {
      var i = Te.memoizedState;
      if (((o = i.destroy), r !== null && ri(r, i.deps))) {
        l.memoizedState = xr(t, n, o, r);
        return;
      }
    }
    ((Ce.flags |= e), (l.memoizedState = xr(1 | t, n, o, r)));
  }
  function Us(e, t) {
    return yl(8390656, 8, e, t);
  }
  function si(e, t) {
    return gl(2048, 8, e, t);
  }
  function $s(e, t) {
    return gl(4, 2, e, t);
  }
  function Vs(e, t) {
    return gl(4, 4, e, t);
  }
  function Hs(e, t) {
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
  function Qs(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), gl(4, 4, Hs.bind(null, t, e), n));
  }
  function ai() {}
  function Ws(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ri(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Gs(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ri(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function qs(e, t, n) {
    return (fn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Je = !0)), (e.memoizedState = n))
      : (gt(n, t) || ((n = ku()), (Ce.lanes |= n), (pn |= n), (e.baseState = !0)), t);
  }
  function Rd(e, t) {
    var n = ce;
    ((ce = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = ni.transition;
    ni.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((ce = n), (ni.transition = r));
    }
  }
  function Ys() {
    return pt().memoizedState;
  }
  function zd(e, t, n) {
    var r = bt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Ks(e)))
      Xs(t, n);
    else if (((n = Ns(e, t, n, r)), n !== null)) {
      var l = Ye();
      (kt(n, e, r, l), Zs(n, t, r));
    }
  }
  function Id(e, t, n) {
    var r = bt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ks(e)) Xs(t, l);
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
            var a = t.interleaved;
            (a === null ? ((l.next = l), Xo(t)) : ((l.next = a.next), (a.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Ns(e, t, l, r)), n !== null && ((l = Ye()), kt(n, e, r, l), Zs(n, t, r)));
    }
  }
  function Ks(e) {
    var t = e.alternate;
    return e === Ce || (t !== null && t === Ce);
  }
  function Xs(e, t) {
    _r = vl = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Zs(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), co(e, n));
    }
  }
  var _l = {
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
    Md = {
      readContext: ft,
      useCallback: function (e, t) {
        return ((jt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ft,
      useEffect: Us,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), yl(4194308, 4, Hs.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return yl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return yl(4, 2, e, t);
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
          (e = e.dispatch = zd.bind(null, Ce, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = jt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Bs,
      useDebugValue: ai,
      useDeferredValue: function (e) {
        return (jt().memoizedState = e);
      },
      useTransition: function () {
        var e = Bs(!1),
          t = e[0];
        return ((e = Rd.bind(null, e[1])), (jt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Ce,
          l = jt();
        if (xe) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), Ie === null)) throw Error(s(349));
          (fn & 30) !== 0 || zs(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Us(Ms.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          xr(9, Is.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = jt(),
          t = Ie.identifierPrefix;
        if (xe) {
          var n = Rt,
            r = Ot;
          ((n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = wr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':'));
        } else ((n = Od++), (t = ':' + t + 'r' + n.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Dd = {
      readContext: ft,
      useCallback: Ws,
      useContext: ft,
      useEffect: si,
      useImperativeHandle: Qs,
      useInsertionEffect: $s,
      useLayoutEffect: Vs,
      useMemo: Gs,
      useReducer: ii,
      useRef: As,
      useState: function () {
        return ii(Sr);
      },
      useDebugValue: ai,
      useDeferredValue: function (e) {
        var t = pt();
        return qs(t, Te.memoizedState, e);
      },
      useTransition: function () {
        var e = ii(Sr)[0],
          t = pt().memoizedState;
        return [e, t];
      },
      useMutableSource: Os,
      useSyncExternalStore: Rs,
      useId: Ys,
      unstable_isNewReconciler: !1,
    },
    Fd = {
      readContext: ft,
      useCallback: Ws,
      useContext: ft,
      useEffect: si,
      useImperativeHandle: Qs,
      useInsertionEffect: $s,
      useLayoutEffect: Vs,
      useMemo: Gs,
      useReducer: ui,
      useRef: As,
      useState: function () {
        return ui(Sr);
      },
      useDebugValue: ai,
      useDeferredValue: function (e) {
        var t = pt();
        return Te === null ? (t.memoizedState = e) : qs(t, Te.memoizedState, e);
      },
      useTransition: function () {
        var e = ui(Sr)[0],
          t = pt().memoizedState;
        return [e, t];
      },
      useMutableSource: Os,
      useSyncExternalStore: Rs,
      useId: Ys,
      unstable_isNewReconciler: !1,
    };
  function wt(e, t) {
    if (e && e.defaultProps) {
      ((t = M({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ci(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : M({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var wl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ln(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        l = bt(e),
        o = It(r, l);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = Kt(e, o, l)),
        t !== null && (kt(t, e, l, r), fl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        l = bt(e),
        o = It(r, l);
      ((o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Kt(e, o, l)),
        t !== null && (kt(t, e, l, r), fl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ye(),
        r = bt(e),
        l = It(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Kt(e, l, r)),
        t !== null && (kt(t, e, r, n), fl(t, e, r)));
    },
  };
  function Js(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !sr(n, r) || !sr(l, o)
          : !0
    );
  }
  function bs(e, t, n) {
    var r = !1,
      l = Gt,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = ft(o))
        : ((l = Ze(t) ? un : Ue.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? On(e, l) : Gt)),
      (t = new t(n, o)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = wl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function ea(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && wl.enqueueReplaceState(t, t.state, null));
  }
  function di(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Zo(e));
    var o = t.contextType;
    (typeof o == 'object' && o !== null
      ? (l.context = ft(o))
      : ((o = Ze(t) ? un : Ue.current), (l.context = On(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == 'function' && (ci(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((t = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount(),
        t !== l.state && wl.enqueueReplaceState(l, l.state, null),
        pl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function An(e, t) {
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
  function fi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function pi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Bd = typeof WeakMap == 'function' ? WeakMap : Map;
  function ta(e, t, n) {
    ((n = It(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (jl || ((jl = !0), (Pi = r)), pi(e, t));
      }),
      n
    );
  }
  function na(e, t, n) {
    ((n = It(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          pi(e, t);
        }));
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == 'function' &&
        (n.callback = function () {
          (pi(e, t),
            typeof r != 'function' && (Zt === null ? (Zt = new Set([this])) : Zt.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' });
        }),
      n
    );
  }
  function ra(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Bd();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Jd.bind(null, e, t, n)), t.then(e, e));
  }
  function la(e) {
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
  function oa(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = It(-1, 1)), (t.tag = 2), Kt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Ad = fe.ReactCurrentOwner,
    Je = !1;
  function qe(e, t, n, r) {
    t.child = e === null ? Es(t, null, n, r) : Mn(t, e.child, n, r);
  }
  function ia(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Fn(t, l),
      (r = li(e, t, n, r, o, l)),
      (n = oi()),
      e !== null && !Je
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Mt(e, t, l))
        : (xe && n && $o(t), (t.flags |= 1), qe(e, t, r, l), t.child)
    );
  }
  function ua(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' &&
        !Mi(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), sa(e, t, o, r, l))
        : ((e = zl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var i = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : sr), n(i, r) && e.ref === t.ref))
        return Mt(e, t, l);
    }
    return ((t.flags |= 1), (e = tn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function sa(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (sr(o, r) && e.ref === t.ref)
        if (((Je = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Je = !0);
        else return ((t.lanes = e.lanes), Mt(e, t, l));
    }
    return mi(e, t, n, r, l);
  }
  function aa(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          he($n, ut),
          (ut |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            he($n, ut),
            (ut |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = o !== null ? o.baseLanes : n),
          he($n, ut),
          (ut |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        he($n, ut),
        (ut |= r));
    return (qe(e, t, l, n), t.child);
  }
  function ca(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function mi(e, t, n, r, l) {
    var o = Ze(n) ? un : Ue.current;
    return (
      (o = On(t, o)),
      Fn(t, l),
      (n = li(e, t, n, r, o, l)),
      (r = oi()),
      e !== null && !Je
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Mt(e, t, l))
        : (xe && r && $o(t), (t.flags |= 1), qe(e, t, n, l), t.child)
    );
  }
  function da(e, t, n, r, l) {
    if (Ze(n)) {
      var o = !0;
      ll(t);
    } else o = !1;
    if ((Fn(t, l), t.stateNode === null)) (xl(e, t), bs(t, n, r), di(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        u = t.memoizedProps;
      i.props = u;
      var a = i.context,
        y = n.contextType;
      typeof y == 'object' && y !== null
        ? (y = ft(y))
        : ((y = Ze(n) ? un : Ue.current), (y = On(t, y)));
      var x = n.getDerivedStateFromProps,
        C = typeof x == 'function' || typeof i.getSnapshotBeforeUpdate == 'function';
      (C ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== r || a !== y) && ea(t, i, r, y)),
        (Yt = !1));
      var _ = t.memoizedState;
      ((i.state = _),
        pl(t, r, i, l),
        (a = t.memoizedState),
        u !== r || _ !== a || Xe.current || Yt
          ? (typeof x == 'function' && (ci(t, n, x, r), (a = t.memoizedState)),
            (u = Yt || Js(t, n, u, r, _, a, y))
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
            (r = u))
          : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1)));
    } else {
      ((i = t.stateNode),
        js(e, t),
        (u = t.memoizedProps),
        (y = t.type === t.elementType ? u : wt(t.type, u)),
        (i.props = y),
        (C = t.pendingProps),
        (_ = i.context),
        (a = n.contextType),
        typeof a == 'object' && a !== null
          ? (a = ft(a))
          : ((a = Ze(n) ? un : Ue.current), (a = On(t, a))));
      var z = n.getDerivedStateFromProps;
      ((x = typeof z == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== C || _ !== a) && ea(t, i, r, a)),
        (Yt = !1),
        (_ = t.memoizedState),
        (i.state = _),
        pl(t, r, i, l));
      var F = t.memoizedState;
      u !== C || _ !== F || Xe.current || Yt
        ? (typeof z == 'function' && (ci(t, n, z, r), (F = t.memoizedState)),
          (y = Yt || Js(t, n, y, r, _, F, a) || !1)
            ? (x ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                  typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(r, F, a),
                typeof i.UNSAFE_componentWillUpdate == 'function' &&
                  i.UNSAFE_componentWillUpdate(r, F, a)),
              typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (u === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (u === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = F)),
          (i.props = r),
          (i.state = F),
          (i.context = a),
          (r = y))
        : (typeof i.componentDidUpdate != 'function' ||
            (u === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != 'function' ||
            (u === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return hi(e, t, n, r, o, l);
  }
  function hi(e, t, n, r, l, o) {
    ca(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && vs(t, n, !1), Mt(e, t, o));
    ((r = t.stateNode), (Ad.current = t));
    var u = i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Mn(t, e.child, null, o)), (t.child = Mn(t, null, u, o)))
        : qe(e, t, u, o),
      (t.memoizedState = r.state),
      l && vs(t, n, !0),
      t.child
    );
  }
  function fa(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? ms(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && ms(e, t.context, !1),
      Jo(e, t.containerInfo));
  }
  function pa(e, t, n, r, l) {
    return (In(), Wo(l), (t.flags |= 256), qe(e, t, n, r), t.child);
  }
  var vi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function yi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ma(e, t, n) {
    var r = t.pendingProps,
      l = ke.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      he(ke, l & 1),
      e === null)
    )
      return (
        Qo(t),
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
                  : (o = Il(i, r, 0, null)),
                (e = yn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = yi(n)),
                (t.memoizedState = vi),
                e)
              : gi(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return Ud(e, t, i, r, u, l, n);
    if (o) {
      ((o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling));
      var a = { mode: 'hidden', children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
          : ((r = tn(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (o = tn(u, o)) : ((o = yn(o, i, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? yi(n)
            : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
        (o.memoizedState = i),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = vi),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = tn(o, { mode: 'visible', children: r.children })),
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
  function gi(e, t) {
    return (
      (t = Il({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Sl(e, t, n, r) {
    return (
      r !== null && Wo(r),
      Mn(t, e.child, null, n),
      (e = gi(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ud(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = fi(Error(s(422)))), Sl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = Il({ mode: 'visible', children: r.children }, l, 0, null)),
            (o = yn(o, l, i, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && Mn(t, e.child, null, i),
            (t.child.memoizedState = yi(i)),
            (t.memoizedState = vi),
            o);
    if ((t.mode & 1) === 0) return Sl(e, t, i, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return ((r = u), (o = Error(s(419))), (r = fi(o, r, void 0)), Sl(e, t, i, r));
    }
    if (((u = (i & e.childLanes) !== 0), Je || u)) {
      if (((r = Ie), r !== null)) {
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
      return (Ii(), (r = fi(Error(s(421)))), Sl(e, t, i, r));
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = bd.bind(null, e)), (l._reactRetry = t), null)
      : ((e = o.treeContext),
        (it = Qt(l.nextSibling)),
        (ot = t),
        (xe = !0),
        (_t = null),
        e !== null &&
          ((ct[dt++] = Ot),
          (ct[dt++] = Rt),
          (ct[dt++] = sn),
          (Ot = e.id),
          (Rt = e.overflow),
          (sn = t)),
        (t = gi(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function ha(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Ko(e.return, t, n));
  }
  function _i(e, t, n, r, l) {
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
  function va(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((qe(e, t, r.children, n), (r = ke.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && ha(e, n, t);
          else if (e.tag === 19) ha(e, n, t);
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
    if ((he(ke, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate), e !== null && ml(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            _i(t, !1, l, n, o));
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && ml(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          _i(t, !0, n, null, o);
          break;
        case 'together':
          _i(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function xl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Mt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (pn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = tn(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function $d(e, t, n) {
    switch (t.tag) {
      case 3:
        (fa(t), In());
        break;
      case 5:
        Ts(t);
        break;
      case 1:
        Ze(t.type) && ll(t);
        break;
      case 4:
        Jo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (he(cl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (he(ke, ke.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? ma(e, t, n)
              : (he(ke, ke.current & 1), (e = Mt(e, t, n)), e !== null ? e.sibling : null);
        he(ke, ke.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return va(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          he(ke, ke.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), aa(e, t, n));
    }
    return Mt(e, t, n);
  }
  var ya, wi, ga, _a;
  ((ya = function (e, t) {
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
    (wi = function () {}),
    (ga = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), dn(Nt.current));
        var o = null;
        switch (n) {
          case 'input':
            ((l = Yl(e, l)), (r = Yl(e, r)), (o = []));
            break;
          case 'select':
            ((l = M({}, l, { value: void 0 })), (r = M({}, r, { value: void 0 })), (o = []));
            break;
          case 'textarea':
            ((l = Zl(e, l)), (r = Zl(e, r)), (o = []));
            break;
          default:
            typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = tl);
        }
        bl(n, r);
        var i;
        n = null;
        for (y in l)
          if (!r.hasOwnProperty(y) && l.hasOwnProperty(y) && l[y] != null)
            if (y === 'style') {
              var u = l[y];
              for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
            } else
              y !== 'dangerouslySetInnerHTML' &&
                y !== 'children' &&
                y !== 'suppressContentEditableWarning' &&
                y !== 'suppressHydrationWarning' &&
                y !== 'autoFocus' &&
                (w.hasOwnProperty(y) ? o || (o = []) : (o = o || []).push(y, null));
        for (y in r) {
          var a = r[y];
          if (
            ((u = l != null ? l[y] : void 0),
            r.hasOwnProperty(y) && a !== u && (a != null || u != null))
          )
            if (y === 'style')
              if (u) {
                for (i in u)
                  !u.hasOwnProperty(i) ||
                    (a && a.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ''));
                for (i in a) a.hasOwnProperty(i) && u[i] !== a[i] && (n || (n = {}), (n[i] = a[i]));
              } else (n || (o || (o = []), o.push(y, n)), (n = a));
            else
              y === 'dangerouslySetInnerHTML'
                ? ((a = a ? a.__html : void 0),
                  (u = u ? u.__html : void 0),
                  a != null && u !== a && (o = o || []).push(y, a))
                : y === 'children'
                  ? (typeof a != 'string' && typeof a != 'number') || (o = o || []).push(y, '' + a)
                  : y !== 'suppressContentEditableWarning' &&
                    y !== 'suppressHydrationWarning' &&
                    (w.hasOwnProperty(y)
                      ? (a != null && y === 'onScroll' && ye('scroll', e), o || u === a || (o = []))
                      : (o = o || []).push(y, a));
        }
        n && (o = o || []).push('style', n);
        var y = o;
        (t.updateQueue = y) && (t.flags |= 4);
      }
    }),
    (_a = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function kr(e, t) {
    if (!xe)
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
  function Vd(e, t, n) {
    var r = t.pendingProps;
    switch ((Vo(t), t.tag)) {
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
        return (Ze(t.type) && rl(), Ve(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Bn(),
          ge(Xe),
          ge(Ue),
          ti(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (sl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), _t !== null && (Oi(_t), (_t = null)))),
          wi(e, t),
          Ve(t),
          null
        );
      case 5:
        bo(t);
        var l = dn(gr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (ga(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return (Ve(t), null);
          }
          if (((e = dn(Nt.current)), sl(t))) {
            ((r = t.stateNode), (n = t.type));
            var o = t.memoizedProps;
            switch (((r[Et] = t), (r[pr] = o), (e = (t.mode & 1) !== 0), n)) {
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
                for (l = 0; l < cr.length; l++) ye(cr[l], r);
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
                (bi(r, o), ye('invalid', r));
                break;
              case 'select':
                ((r._wrapperState = { wasMultiple: !!o.multiple }), ye('invalid', r));
                break;
              case 'textarea':
                (nu(r, o), ye('invalid', r));
            }
            (bl(n, o), (l = null));
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var u = o[i];
                i === 'children'
                  ? typeof u == 'string'
                    ? r.textContent !== u &&
                      (o.suppressHydrationWarning !== !0 && el(r.textContent, u, e),
                      (l = ['children', u]))
                    : typeof u == 'number' &&
                      r.textContent !== '' + u &&
                      (o.suppressHydrationWarning !== !0 && el(r.textContent, u, e),
                      (l = ['children', '' + u]))
                  : w.hasOwnProperty(i) && u != null && i === 'onScroll' && ye('scroll', r);
              }
            switch (n) {
              case 'input':
                (Or(r), tu(r, o, !0));
                break;
              case 'textarea':
                (Or(r), lu(r));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof o.onClick == 'function' && (r.onclick = tl);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = ou(n)),
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
              (e[pr] = r),
              ya(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = eo(n, r)), n)) {
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
                  for (l = 0; l < cr.length; l++) ye(cr[l], e);
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
                  (bi(e, r), (l = Yl(e, r)), ye('invalid', e));
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
                  (nu(e, r), (l = Zl(e, r)), ye('invalid', e));
                  break;
                default:
                  l = r;
              }
              (bl(n, l), (u = l));
              for (o in u)
                if (u.hasOwnProperty(o)) {
                  var a = u[o];
                  o === 'style'
                    ? su(e, a)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((a = a ? a.__html : void 0), a != null && iu(e, a))
                      : o === 'children'
                        ? typeof a == 'string'
                          ? (n !== 'textarea' || a !== '') && Wn(e, a)
                          : typeof a == 'number' && Wn(e, '' + a)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (w.hasOwnProperty(o)
                            ? a != null && o === 'onScroll' && ye('scroll', e)
                            : a != null && ve(e, o, a, i));
                }
              switch (n) {
                case 'input':
                  (Or(e), tu(e, r, !1));
                  break;
                case 'textarea':
                  (Or(e), lu(e));
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + ae(r.value));
                  break;
                case 'select':
                  ((e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? _n(e, !!r.multiple, o, !1)
                      : r.defaultValue != null && _n(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = tl);
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
        if (e && t.stateNode != null) _a(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(s(166));
          if (((n = dn(gr.current)), dn(Nt.current), sl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Et] = t),
              (o = r.nodeValue !== n) && ((e = ot), e !== null))
            )
              switch (e.tag) {
                case 3:
                  el(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    el(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Et] = t),
              (t.stateNode = r));
        }
        return (Ve(t), null);
      case 13:
        if (
          (ge(ke),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (xe && it !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (xs(), In(), (t.flags |= 98560), (o = !1));
          else if (((o = sl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(s(317));
              o[Et] = t;
            } else (In(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ve(t), (o = !1));
          } else (_t !== null && (Oi(_t), (_t = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ke.current & 1) !== 0 ? Oe === 0 && (Oe = 3) : Ii())),
            t.updateQueue !== null && (t.flags |= 4),
            Ve(t),
            null);
      case 4:
        return (Bn(), wi(e, t), e === null && dr(t.stateNode.containerInfo), Ve(t), null);
      case 10:
        return (Yo(t.type._context), Ve(t), null);
      case 17:
        return (Ze(t.type) && rl(), Ve(t), null);
      case 19:
        if ((ge(ke), (o = t.memoizedState), o === null)) return (Ve(t), null);
        if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) kr(o, !1);
          else {
            if (Oe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = ml(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      kr(o, !1),
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
                  return (he(ke, (ke.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Ne() > Vn &&
              ((t.flags |= 128), (r = !0), kr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ml(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                kr(o, !0),
                o.tail === null && o.tailMode === 'hidden' && !i.alternate && !xe)
              )
                return (Ve(t), null);
            } else
              2 * Ne() - o.renderingStartTime > Vn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), kr(o, !1), (t.lanes = 4194304));
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
            he(ke, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ve(t), null);
      case 22:
      case 23:
        return (
          zi(),
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
    throw Error(s(156, t.tag));
  }
  function Hd(e, t) {
    switch ((Vo(t), t.tag)) {
      case 1:
        return (
          Ze(t.type) && rl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Bn(),
          ge(Xe),
          ge(Ue),
          ti(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (bo(t), null);
      case 13:
        if ((ge(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          In();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (ge(ke), null);
      case 4:
        return (Bn(), null);
      case 10:
        return (Yo(t.type._context), null);
      case 22:
      case 23:
        return (zi(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var kl = !1,
    He = !1,
    Qd = typeof WeakSet == 'function' ? WeakSet : Set,
    D = null;
  function Un(e, t) {
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
  function Si(e, t, n) {
    try {
      n();
    } catch (r) {
      Ee(e, t, r);
    }
  }
  var wa = !1;
  function Wd(e, t) {
    if (((zo = Hr), (e = Ju()), Eo(e))) {
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
              a = -1,
              y = 0,
              x = 0,
              C = e,
              _ = null;
            t: for (;;) {
              for (
                var z;
                C !== n || (l !== 0 && C.nodeType !== 3) || (u = i + l),
                  C !== o || (r !== 0 && C.nodeType !== 3) || (a = i + r),
                  C.nodeType === 3 && (i += C.nodeValue.length),
                  (z = C.firstChild) !== null;
              )
                ((_ = C), (C = z));
              for (;;) {
                if (C === e) break t;
                if (
                  (_ === n && ++y === l && (u = i),
                  _ === o && ++x === r && (a = i),
                  (z = C.nextSibling) !== null)
                )
                  break;
                ((C = _), (_ = C.parentNode));
              }
              C = z;
            }
            n = u === -1 || a === -1 ? null : { start: u, end: a };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Io = { focusedElem: e, selectionRange: n }, Hr = !1, D = t; D !== null; )
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
                    var A = F.memoizedProps,
                      je = F.memoizedState,
                      m = t.stateNode,
                      c = m.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? A : wt(t.type, A),
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
                  throw Error(s(163));
              }
          } catch (N) {
            Ee(t, t.return, N);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (D = e));
            break;
          }
          D = t.return;
        }
    return ((F = wa), (wa = !1), F);
  }
  function Cr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          ((l.destroy = void 0), o !== void 0 && Si(t, n, o));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Cl(e, t) {
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
  function Sa(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Sa(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Et], delete t[pr], delete t[Bo], delete t[jd], delete t[Pd])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function xa(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ka(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || xa(e.return)) return null;
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
  function ki(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = tl)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ki(e, t, n), e = e.sibling; e !== null; ) (ki(e, t, n), (e = e.sibling));
  }
  function Ci(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ci(e, t, n), e = e.sibling; e !== null; ) (Ci(e, t, n), (e = e.sibling));
  }
  var Fe = null,
    St = !1;
  function Xt(e, t, n) {
    for (n = n.child; n !== null; ) (Ca(e, t, n), (n = n.sibling));
  }
  function Ca(e, t, n) {
    if (Ct && typeof Ct.onCommitFiberUnmount == 'function')
      try {
        Ct.onCommitFiberUnmount(Fr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        He || Un(n, t);
      case 6:
        var r = Fe,
          l = St;
        ((Fe = null),
          Xt(e, t, n),
          (Fe = r),
          (St = l),
          Fe !== null &&
            (St
              ? ((e = Fe),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : Fe.removeChild(n.stateNode)));
        break;
      case 18:
        Fe !== null &&
          (St
            ? ((e = Fe),
              (n = n.stateNode),
              e.nodeType === 8 ? Fo(e.parentNode, n) : e.nodeType === 1 && Fo(e, n),
              nr(e))
            : Fo(Fe, n.stateNode));
        break;
      case 4:
        ((r = Fe),
          (l = St),
          (Fe = n.stateNode.containerInfo),
          (St = !0),
          Xt(e, t, n),
          (Fe = r),
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
              i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Si(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        Xt(e, t, n);
        break;
      case 1:
        if (!He && (Un(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (u) {
            Ee(n, t, u);
          }
        Xt(e, t, n);
        break;
      case 21:
        Xt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((He = (r = He) || n.memoizedState !== null), Xt(e, t, n), (He = r))
          : Xt(e, t, n);
        break;
      default:
        Xt(e, t, n);
    }
  }
  function Ea(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Qd()),
        t.forEach(function (r) {
          var l = ef.bind(null, e, r);
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
            u = i;
          e: for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                ((Fe = u.stateNode), (St = !1));
                break e;
              case 3:
                ((Fe = u.stateNode.containerInfo), (St = !0));
                break e;
              case 4:
                ((Fe = u.stateNode.containerInfo), (St = !0));
                break e;
            }
            u = u.return;
          }
          if (Fe === null) throw Error(s(160));
          (Ca(o, i, l), (Fe = null), (St = !1));
          var a = l.alternate;
          (a !== null && (a.return = null), (l.return = null));
        } catch (y) {
          Ee(l, t, y);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Na(t, e), (t = t.sibling));
  }
  function Na(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((xt(t, e), Pt(e), r & 4)) {
          try {
            (Cr(3, e, e.return), Cl(3, e));
          } catch (A) {
            Ee(e, e.return, A);
          }
          try {
            Cr(5, e, e.return);
          } catch (A) {
            Ee(e, e.return, A);
          }
        }
        break;
      case 1:
        (xt(t, e), Pt(e), r & 512 && n !== null && Un(n, n.return));
        break;
      case 5:
        if ((xt(t, e), Pt(e), r & 512 && n !== null && Un(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Wn(l, '');
          } catch (A) {
            Ee(e, e.return, A);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = n !== null ? n.memoizedProps : o,
            u = e.type,
            a = e.updateQueue;
          if (((e.updateQueue = null), a !== null))
            try {
              (u === 'input' && o.type === 'radio' && o.name != null && eu(l, o), eo(u, i));
              var y = eo(u, o);
              for (i = 0; i < a.length; i += 2) {
                var x = a[i],
                  C = a[i + 1];
                x === 'style'
                  ? su(l, C)
                  : x === 'dangerouslySetInnerHTML'
                    ? iu(l, C)
                    : x === 'children'
                      ? Wn(l, C)
                      : ve(l, x, C, y);
              }
              switch (u) {
                case 'input':
                  Kl(l, o);
                  break;
                case 'textarea':
                  ru(l, o);
                  break;
                case 'select':
                  var _ = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var z = o.value;
                  z != null
                    ? _n(l, !!o.multiple, z, !1)
                    : _ !== !!o.multiple &&
                      (o.defaultValue != null
                        ? _n(l, !!o.multiple, o.defaultValue, !0)
                        : _n(l, !!o.multiple, o.multiple ? [] : '', !1));
              }
              l[pr] = o;
            } catch (A) {
              Ee(e, e.return, A);
            }
        }
        break;
      case 6:
        if ((xt(t, e), Pt(e), r & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((l = e.stateNode), (o = e.memoizedProps));
          try {
            l.nodeValue = o;
          } catch (A) {
            Ee(e, e.return, A);
          }
        }
        break;
      case 3:
        if ((xt(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            nr(t.containerInfo);
          } catch (A) {
            Ee(e, e.return, A);
          }
        break;
      case 4:
        (xt(t, e), Pt(e));
        break;
      case 13:
        (xt(t, e),
          Pt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (ji = Ne())),
          r & 4 && Ea(e));
        break;
      case 22:
        if (
          ((x = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((He = (y = He) || x), xt(t, e), (He = y)) : xt(t, e),
          Pt(e),
          r & 8192)
        ) {
          if (
            ((y = e.memoizedState !== null), (e.stateNode.isHidden = y) && !x && (e.mode & 1) !== 0)
          )
            for (D = e, x = e.child; x !== null; ) {
              for (C = D = x; D !== null; ) {
                switch (((_ = D), (z = _.child), _.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Cr(4, _, _.return);
                    break;
                  case 1:
                    Un(_, _.return);
                    var F = _.stateNode;
                    if (typeof F.componentWillUnmount == 'function') {
                      ((r = _), (n = _.return));
                      try {
                        ((t = r),
                          (F.props = t.memoizedProps),
                          (F.state = t.memoizedState),
                          F.componentWillUnmount());
                      } catch (A) {
                        Ee(r, n, A);
                      }
                    }
                    break;
                  case 5:
                    Un(_, _.return);
                    break;
                  case 22:
                    if (_.memoizedState !== null) {
                      La(C);
                      continue;
                    }
                }
                z !== null ? ((z.return = _), (D = z)) : La(C);
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
                      : ((u = C.stateNode),
                        (a = C.memoizedProps.style),
                        (i = a != null && a.hasOwnProperty('display') ? a.display : null),
                        (u.style.display = uu('display', i))));
                } catch (A) {
                  Ee(e, e.return, A);
                }
              }
            } else if (C.tag === 6) {
              if (x === null)
                try {
                  C.stateNode.nodeValue = y ? '' : C.memoizedProps;
                } catch (A) {
                  Ee(e, e.return, A);
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
        (xt(t, e), Pt(e), r & 4 && Ea(e));
        break;
      case 21:
        break;
      default:
        (xt(t, e), Pt(e));
    }
  }
  function Pt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (xa(n)) {
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
            r.flags & 32 && (Wn(l, ''), (r.flags &= -33));
            var o = ka(e);
            Ci(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              u = ka(e);
            ki(e, u, i);
            break;
          default:
            throw Error(s(161));
        }
      } catch (a) {
        Ee(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Gd(e, t, n) {
    ((D = e), ja(e));
  }
  function ja(e, t, n) {
    for (var r = (e.mode & 1) !== 0; D !== null; ) {
      var l = D,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || kl;
        if (!i) {
          var u = l.alternate,
            a = (u !== null && u.memoizedState !== null) || He;
          u = kl;
          var y = He;
          if (((kl = i), (He = a) && !y))
            for (D = l; D !== null; )
              ((i = D),
                (a = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? Ta(l)
                  : a !== null
                    ? ((a.return = i), (D = a))
                    : Ta(l));
          for (; o !== null; ) ((D = o), ja(o), (o = o.sibling));
          ((D = l), (kl = u), (He = y));
        }
        Pa(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), (D = o)) : Pa(e);
    }
  }
  function Pa(e) {
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
                He || Cl(5, t);
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
                o !== null && Ls(t, o, r);
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
                  Ls(t, i, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
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
                      C !== null && nr(C);
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
          He || (t.flags & 512 && xi(t));
        } catch (_) {
          Ee(t, t.return, _);
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
  function La(e) {
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
  function Ta(e) {
    for (; D !== null; ) {
      var t = D;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Cl(4, t);
            } catch (a) {
              Ee(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                Ee(t, l, a);
              }
            }
            var o = t.return;
            try {
              xi(t);
            } catch (a) {
              Ee(t, o, a);
            }
            break;
          case 5:
            var i = t.return;
            try {
              xi(t);
            } catch (a) {
              Ee(t, i, a);
            }
        }
      } catch (a) {
        Ee(t, t.return, a);
      }
      if (t === e) {
        D = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        ((u.return = t.return), (D = u));
        break;
      }
      D = t.return;
    }
  }
  var qd = Math.ceil,
    El = fe.ReactCurrentDispatcher,
    Ei = fe.ReactCurrentOwner,
    mt = fe.ReactCurrentBatchConfig,
    ne = 0,
    Ie = null,
    Pe = null,
    Be = 0,
    ut = 0,
    $n = Wt(0),
    Oe = 0,
    Er = null,
    pn = 0,
    Nl = 0,
    Ni = 0,
    Nr = null,
    be = null,
    ji = 0,
    Vn = 1 / 0,
    Dt = null,
    jl = !1,
    Pi = null,
    Zt = null,
    Pl = !1,
    Jt = null,
    Ll = 0,
    jr = 0,
    Li = null,
    Tl = -1,
    Ol = 0;
  function Ye() {
    return (ne & 6) !== 0 ? Ne() : Tl !== -1 ? Tl : (Tl = Ne());
  }
  function bt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ne & 2) !== 0 && Be !== 0
        ? Be & -Be
        : Td.transition !== null
          ? (Ol === 0 && (Ol = ku()), Ol)
          : ((e = ce), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ru(e.type))), e);
  }
  function kt(e, t, n, r) {
    if (50 < jr) throw ((jr = 0), (Li = null), Error(s(185)));
    (Zn(e, n, r),
      ((ne & 2) === 0 || e !== Ie) &&
        (e === Ie && ((ne & 2) === 0 && (Nl |= n), Oe === 4 && en(e, Be)),
        et(e, r),
        n === 1 && ne === 0 && (t.mode & 1) === 0 && ((Vn = Ne() + 500), ol && qt())));
  }
  function et(e, t) {
    var n = e.callbackNode;
    Tc(e, t);
    var r = Ur(e, e === Ie ? Be : 0);
    if (r === 0) (n !== null && wu(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && wu(n), t === 1))
        (e.tag === 0 ? Ld(Ra.bind(null, e)) : ys(Ra.bind(null, e)),
          Ed(function () {
            (ne & 6) === 0 && qt();
          }),
          (n = null));
      else {
        switch (Cu(r)) {
          case 1:
            n = uo;
            break;
          case 4:
            n = Su;
            break;
          case 16:
            n = Dr;
            break;
          case 536870912:
            n = xu;
            break;
          default:
            n = Dr;
        }
        n = Ua(n, Oa.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Oa(e, t) {
    if (((Tl = -1), (Ol = 0), (ne & 6) !== 0)) throw Error(s(327));
    var n = e.callbackNode;
    if (Hn() && e.callbackNode !== n) return null;
    var r = Ur(e, e === Ie ? Be : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Rl(e, r);
    else {
      t = r;
      var l = ne;
      ne |= 2;
      var o = Ia();
      (Ie !== e || Be !== t) && ((Dt = null), (Vn = Ne() + 500), hn(e, t));
      do
        try {
          Xd();
          break;
        } catch (u) {
          za(e, u);
        }
      while (!0);
      (qo(), (El.current = o), (ne = l), Pe !== null ? (t = 0) : ((Ie = null), (Be = 0), (t = Oe)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = so(e)), l !== 0 && ((r = l), (t = Ti(e, l)))), t === 1))
        throw ((n = Er), hn(e, 0), en(e, r), et(e, Ne()), n);
      if (t === 6) en(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Yd(l) &&
            ((t = Rl(e, r)),
            t === 2 && ((o = so(e)), o !== 0 && ((r = o), (t = Ti(e, o)))),
            t === 1))
        )
          throw ((n = Er), hn(e, 0), en(e, r), et(e, Ne()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            vn(e, be, Dt);
            break;
          case 3:
            if ((en(e, r), (r & 130023424) === r && ((t = ji + 500 - Ne()), 10 < t))) {
              if (Ur(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Ye(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = Do(vn.bind(null, e, be, Dt), t);
              break;
            }
            vn(e, be, Dt);
            break;
          case 4:
            if ((en(e, r), (r & 4194240) === r)) break;
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
                            : 1960 * qd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Do(vn.bind(null, e, be, Dt), r);
              break;
            }
            vn(e, be, Dt);
            break;
          case 5:
            vn(e, be, Dt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (et(e, Ne()), e.callbackNode === n ? Oa.bind(null, e) : null);
  }
  function Ti(e, t) {
    var n = Nr;
    return (
      e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
      (e = Rl(e, t)),
      e !== 2 && ((t = be), (be = n), t !== null && Oi(t)),
      e
    );
  }
  function Oi(e) {
    be === null ? (be = e) : be.push.apply(be, e);
  }
  function Yd(e) {
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
  function en(e, t) {
    for (
      t &= ~Ni, t &= ~Nl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - yt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function Ra(e) {
    if ((ne & 6) !== 0) throw Error(s(327));
    Hn();
    var t = Ur(e, 0);
    if ((t & 1) === 0) return (et(e, Ne()), null);
    var n = Rl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = so(e);
      r !== 0 && ((t = r), (n = Ti(e, r)));
    }
    if (n === 1) throw ((n = Er), hn(e, 0), en(e, t), et(e, Ne()), n);
    if (n === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      vn(e, be, Dt),
      et(e, Ne()),
      null
    );
  }
  function Ri(e, t) {
    var n = ne;
    ne |= 1;
    try {
      return e(t);
    } finally {
      ((ne = n), ne === 0 && ((Vn = Ne() + 500), ol && qt()));
    }
  }
  function mn(e) {
    Jt !== null && Jt.tag === 0 && (ne & 6) === 0 && Hn();
    var t = ne;
    ne |= 1;
    var n = mt.transition,
      r = ce;
    try {
      if (((mt.transition = null), (ce = 1), e)) return e();
    } finally {
      ((ce = r), (mt.transition = n), (ne = t), (ne & 6) === 0 && qt());
    }
  }
  function zi() {
    ((ut = $n.current), ge($n));
  }
  function hn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Cd(n)), Pe !== null))
      for (n = Pe.return; n !== null; ) {
        var r = n;
        switch ((Vo(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && rl());
            break;
          case 3:
            (Bn(), ge(Xe), ge(Ue), ti());
            break;
          case 5:
            bo(r);
            break;
          case 4:
            Bn();
            break;
          case 13:
            ge(ke);
            break;
          case 19:
            ge(ke);
            break;
          case 10:
            Yo(r.type._context);
            break;
          case 22:
          case 23:
            zi();
        }
        n = n.return;
      }
    if (
      ((Ie = e),
      (Pe = e = tn(e.current, null)),
      (Be = ut = t),
      (Oe = 0),
      (Er = null),
      (Ni = Nl = pn = 0),
      (be = Nr = null),
      cn !== null)
    ) {
      for (t = 0; t < cn.length; t++)
        if (((n = cn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var i = o.next;
            ((o.next = l), (r.next = i));
          }
          n.pending = r;
        }
      cn = null;
    }
    return e;
  }
  function za(e, t) {
    do {
      var n = Pe;
      try {
        if ((qo(), (hl.current = _l), vl)) {
          for (var r = Ce.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          vl = !1;
        }
        if (
          ((fn = 0),
          (ze = Te = Ce = null),
          (_r = !1),
          (wr = 0),
          (Ei.current = null),
          n === null || n.return === null)
        ) {
          ((Oe = 1), (Er = t), (Pe = null));
          break;
        }
        e: {
          var o = e,
            i = n.return,
            u = n,
            a = t;
          if (
            ((t = Be),
            (u.flags |= 32768),
            a !== null && typeof a == 'object' && typeof a.then == 'function')
          ) {
            var y = a,
              x = u,
              C = x.tag;
            if ((x.mode & 1) === 0 && (C === 0 || C === 11 || C === 15)) {
              var _ = x.alternate;
              _
                ? ((x.updateQueue = _.updateQueue),
                  (x.memoizedState = _.memoizedState),
                  (x.lanes = _.lanes))
                : ((x.updateQueue = null), (x.memoizedState = null));
            }
            var z = la(i);
            if (z !== null) {
              ((z.flags &= -257), oa(z, i, u, o, t), z.mode & 1 && ra(o, y, t), (t = z), (a = y));
              var F = t.updateQueue;
              if (F === null) {
                var A = new Set();
                (A.add(a), (t.updateQueue = A));
              } else F.add(a);
              break e;
            } else {
              if ((t & 1) === 0) {
                (ra(o, y, t), Ii());
                break e;
              }
              a = Error(s(426));
            }
          } else if (xe && u.mode & 1) {
            var je = la(i);
            if (je !== null) {
              ((je.flags & 65536) === 0 && (je.flags |= 256), oa(je, i, u, o, t), Wo(An(a, u)));
              break e;
            }
          }
          ((o = a = An(a, u)),
            Oe !== 4 && (Oe = 2),
            Nr === null ? (Nr = [o]) : Nr.push(o),
            (o = i));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var m = ta(o, a, t);
                Ps(o, m);
                break e;
              case 1:
                u = a;
                var c = o.type,
                  h = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof c.getDerivedStateFromError == 'function' ||
                    (h !== null &&
                      typeof h.componentDidCatch == 'function' &&
                      (Zt === null || !Zt.has(h))))
                ) {
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var N = na(o, u, t);
                  Ps(o, N);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Da(n);
      } catch (U) {
        ((t = U), Pe === n && n !== null && (Pe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Ia() {
    var e = El.current;
    return ((El.current = _l), e === null ? _l : e);
  }
  function Ii() {
    ((Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4),
      Ie === null || ((pn & 268435455) === 0 && (Nl & 268435455) === 0) || en(Ie, Be));
  }
  function Rl(e, t) {
    var n = ne;
    ne |= 2;
    var r = Ia();
    (Ie !== e || Be !== t) && ((Dt = null), hn(e, t));
    do
      try {
        Kd();
        break;
      } catch (l) {
        za(e, l);
      }
    while (!0);
    if ((qo(), (ne = n), (El.current = r), Pe !== null)) throw Error(s(261));
    return ((Ie = null), (Be = 0), Oe);
  }
  function Kd() {
    for (; Pe !== null; ) Ma(Pe);
  }
  function Xd() {
    for (; Pe !== null && !Sc(); ) Ma(Pe);
  }
  function Ma(e) {
    var t = Aa(e.alternate, e, ut);
    ((e.memoizedProps = e.pendingProps), t === null ? Da(e) : (Pe = t), (Ei.current = null));
  }
  function Da(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Vd(n, t, ut)), n !== null)) {
          Pe = n;
          return;
        }
      } else {
        if (((n = Hd(n, t)), n !== null)) {
          ((n.flags &= 32767), (Pe = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Oe = 6), (Pe = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Pe = t;
        return;
      }
      Pe = t = e;
    } while (t !== null);
    Oe === 0 && (Oe = 5);
  }
  function vn(e, t, n) {
    var r = ce,
      l = mt.transition;
    try {
      ((mt.transition = null), (ce = 1), Zd(e, t, n, r));
    } finally {
      ((mt.transition = l), (ce = r));
    }
    return null;
  }
  function Zd(e, t, n, r) {
    do Hn();
    while (Jt !== null);
    if ((ne & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = n.lanes | n.childLanes;
    if (
      (Oc(e, o),
      e === Ie && ((Pe = Ie = null), (Be = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Pl ||
        ((Pl = !0),
        Ua(Dr, function () {
          return (Hn(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = mt.transition), (mt.transition = null));
      var i = ce;
      ce = 1;
      var u = ne;
      ((ne |= 4),
        (Ei.current = null),
        Wd(e, n),
        Na(n, e),
        yd(Io),
        (Hr = !!zo),
        (Io = zo = null),
        (e.current = n),
        Gd(n),
        xc(),
        (ne = u),
        (ce = i),
        (mt.transition = o));
    } else e.current = n;
    if (
      (Pl && ((Pl = !1), (Jt = e), (Ll = l)),
      (o = e.pendingLanes),
      o === 0 && (Zt = null),
      Ec(n.stateNode),
      et(e, Ne()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (jl) throw ((jl = !1), (e = Pi), (Pi = null), e);
    return (
      (Ll & 1) !== 0 && e.tag !== 0 && Hn(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === Li ? jr++ : ((jr = 0), (Li = e))) : (jr = 0),
      qt(),
      null
    );
  }
  function Hn() {
    if (Jt !== null) {
      var e = Cu(Ll),
        t = mt.transition,
        n = ce;
      try {
        if (((mt.transition = null), (ce = 16 > e ? 16 : e), Jt === null)) var r = !1;
        else {
          if (((e = Jt), (Jt = null), (Ll = 0), (ne & 6) !== 0)) throw Error(s(331));
          var l = ne;
          for (ne |= 4, D = e.current; D !== null; ) {
            var o = D,
              i = o.child;
            if ((D.flags & 16) !== 0) {
              var u = o.deletions;
              if (u !== null) {
                for (var a = 0; a < u.length; a++) {
                  var y = u[a];
                  for (D = y; D !== null; ) {
                    var x = D;
                    switch (x.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Cr(8, x, o);
                    }
                    var C = x.child;
                    if (C !== null) ((C.return = x), (D = C));
                    else
                      for (; D !== null; ) {
                        x = D;
                        var _ = x.sibling,
                          z = x.return;
                        if ((Sa(x), x === y)) {
                          D = null;
                          break;
                        }
                        if (_ !== null) {
                          ((_.return = z), (D = _));
                          break;
                        }
                        D = z;
                      }
                  }
                }
                var F = o.alternate;
                if (F !== null) {
                  var A = F.child;
                  if (A !== null) {
                    F.child = null;
                    do {
                      var je = A.sibling;
                      ((A.sibling = null), (A = je));
                    } while (A !== null);
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
                      Cr(9, o, o.return);
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
                if (((u = D), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Cl(9, u);
                    }
                  } catch (U) {
                    Ee(u, u.return, U);
                  }
                if (u === i) {
                  D = null;
                  break e;
                }
                var N = u.sibling;
                if (N !== null) {
                  ((N.return = u.return), (D = N));
                  break e;
                }
                D = u.return;
              }
          }
          if (((ne = l), qt(), Ct && typeof Ct.onPostCommitFiberRoot == 'function'))
            try {
              Ct.onPostCommitFiberRoot(Fr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((ce = n), (mt.transition = t));
      }
    }
    return !1;
  }
  function Fa(e, t, n) {
    ((t = An(n, t)),
      (t = ta(e, t, 1)),
      (e = Kt(e, t, 1)),
      (t = Ye()),
      e !== null && (Zn(e, 1, t), et(e, t)));
  }
  function Ee(e, t, n) {
    if (e.tag === 3) Fa(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Fa(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (Zt === null || !Zt.has(r)))
          ) {
            ((e = An(n, e)),
              (e = na(t, e, 1)),
              (t = Kt(t, e, 1)),
              (e = Ye()),
              t !== null && (Zn(t, 1, e), et(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Jd(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Ye()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ie === e &&
        (Be & n) === n &&
        (Oe === 4 || (Oe === 3 && (Be & 130023424) === Be && 500 > Ne() - ji)
          ? hn(e, 0)
          : (Ni |= n)),
      et(e, t));
  }
  function Ba(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Ar), (Ar <<= 1), (Ar & 130023424) === 0 && (Ar = 4194304)));
    var n = Ye();
    ((e = zt(e, t)), e !== null && (Zn(e, t, n), et(e, n)));
  }
  function bd(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Ba(e, n));
  }
  function ef(e, t) {
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
    (r !== null && r.delete(t), Ba(e, n));
  }
  var Aa;
  Aa = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Xe.current) Je = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Je = !1), $d(e, t, n));
        Je = (e.flags & 131072) !== 0;
      }
    else ((Je = !1), xe && (t.flags & 1048576) !== 0 && gs(t, ul, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (xl(e, t), (e = t.pendingProps));
        var l = On(t, Ue.current);
        (Fn(t, n), (l = li(null, t, r, e, l, n)));
        var o = oi();
        return (
          (t.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ze(r) ? ((o = !0), ll(t)) : (o = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Zo(t),
              (l.updater = wl),
              (t.stateNode = l),
              (l._reactInternals = t),
              di(t, r, e, n),
              (t = hi(null, t, r, !0, o, n)))
            : ((t.tag = 0), xe && o && $o(t), qe(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (xl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = nf(r)),
            (e = wt(r, e)),
            l)
          ) {
            case 0:
              t = mi(null, t, r, e, n);
              break e;
            case 1:
              t = da(null, t, r, e, n);
              break e;
            case 11:
              t = ia(null, t, r, e, n);
              break e;
            case 14:
              t = ua(null, t, r, wt(r.type, e), n);
              break e;
          }
          throw Error(s(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : wt(r, l)),
          mi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : wt(r, l)),
          da(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((fa(t), e === null)) throw Error(s(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            js(e, t),
            pl(t, r, null, n));
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
              ((l = An(Error(s(423)), t)), (t = pa(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = An(Error(s(424)), t)), (t = pa(e, t, r, n, l)));
              break e;
            } else
              for (
                it = Qt(t.stateNode.containerInfo.firstChild),
                  ot = t,
                  xe = !0,
                  _t = null,
                  n = Es(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((In(), r === l)) {
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
          Ts(t),
          e === null && Qo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          Mo(r, l) ? (i = null) : o !== null && Mo(r, o) && (t.flags |= 32),
          ca(e, t),
          qe(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Qo(t), null);
      case 13:
        return ma(e, t, n);
      case 4:
        return (
          Jo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Mn(t, null, r, n)) : qe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : wt(r, l)),
          ia(e, t, r, l, n)
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
            he(cl, r._currentValue),
            (r._currentValue = i),
            o !== null)
          )
            if (gt(o.value, i)) {
              if (o.children === l.children && !Xe.current) {
                t = Mt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var u = o.dependencies;
                if (u !== null) {
                  i = o.child;
                  for (var a = u.firstContext; a !== null; ) {
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
                        Ko(o.return, n, t),
                        (u.lanes |= n));
                      break;
                    }
                    a = a.next;
                  }
                } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((i = o.return), i === null)) throw Error(s(341));
                  ((i.lanes |= n),
                    (u = i.alternate),
                    u !== null && (u.lanes |= n),
                    Ko(i, n, t),
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
          Fn(t, n),
          (l = ft(l)),
          (r = r(l)),
          (t.flags |= 1),
          qe(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = wt(r, t.pendingProps)), (l = wt(r.type, l)), ua(e, t, r, l, n));
      case 15:
        return sa(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : wt(r, l)),
          xl(e, t),
          (t.tag = 1),
          Ze(r) ? ((e = !0), ll(t)) : (e = !1),
          Fn(t, n),
          bs(t, r, l),
          di(t, r, l, n),
          hi(null, t, r, !0, e, n)
        );
      case 19:
        return va(e, t, n);
      case 22:
        return aa(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Ua(e, t) {
    return _u(e, t);
  }
  function tf(e, t, n, r) {
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
    return new tf(e, t, n, r);
  }
  function Mi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function nf(e) {
    if (typeof e == 'function') return Mi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === We)) return 11;
      if (e === Q) return 14;
    }
    return 2;
  }
  function tn(e, t) {
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
  function zl(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == 'function')) Mi(e) && (i = 1);
    else if (typeof e == 'string') i = 5;
    else
      e: switch (e) {
        case Z:
          return yn(n.children, l, o, t);
        case ue:
          ((i = 8), (l |= 8));
          break;
        case De:
          return ((e = ht(12, n, t, l | 2)), (e.elementType = De), (e.lanes = o), e);
        case Re:
          return ((e = ht(13, n, t, l)), (e.elementType = Re), (e.lanes = o), e);
        case Ge:
          return ((e = ht(19, n, t, l)), (e.elementType = Ge), (e.lanes = o), e);
        case ie:
          return Il(n, l, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case we:
                i = 10;
                break e;
              case Ae:
                i = 9;
                break e;
              case We:
                i = 11;
                break e;
              case Q:
                i = 14;
                break e;
              case K:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ''));
      }
    return ((t = ht(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
  }
  function yn(e, t, n, r) {
    return ((e = ht(7, e, r, t)), (e.lanes = n), e);
  }
  function Il(e, t, n, r) {
    return (
      (e = ht(22, e, r, t)),
      (e.elementType = ie),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Di(e, t, n) {
    return ((e = ht(6, e, null, t)), (e.lanes = n), e);
  }
  function Fi(e, t, n) {
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
  function rf(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = ao(0)),
      (this.expirationTimes = ao(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ao(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Bi(e, t, n, r, l, o, i, u, a) {
    return (
      (e = new rf(e, t, n, u, a)),
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
      Zo(o),
      e
    );
  }
  function lf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: W,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function $a(e) {
    if (!e) return Gt;
    e = e._reactInternals;
    e: {
      if (ln(e) !== e || e.tag !== 1) throw Error(s(170));
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
      if (Ze(n)) return hs(e, n, t);
    }
    return t;
  }
  function Va(e, t, n, r, l, o, i, u, a) {
    return (
      (e = Bi(n, r, !0, e, l, o, i, u, a)),
      (e.context = $a(null)),
      (n = e.current),
      (r = Ye()),
      (l = bt(n)),
      (o = It(r, l)),
      (o.callback = t ?? null),
      Kt(n, o, l),
      (e.current.lanes = l),
      Zn(e, l, r),
      et(e, r),
      e
    );
  }
  function Ml(e, t, n, r) {
    var l = t.current,
      o = Ye(),
      i = bt(l);
    return (
      (n = $a(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = It(o, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Kt(l, t, i)),
      e !== null && (kt(e, l, i, o), fl(e, l, i)),
      i
    );
  }
  function Dl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ha(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ai(e, t) {
    (Ha(e, t), (e = e.alternate) && Ha(e, t));
  }
  function of() {
    return null;
  }
  var Qa =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ui(e) {
    this._internalRoot = e;
  }
  ((Fl.prototype.render = Ui.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Ml(e, t, null, null);
    }),
    (Fl.prototype.unmount = Ui.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (mn(function () {
            Ml(null, e, null, null);
          }),
            (t[Lt] = null));
        }
      }));
  function Fl(e) {
    this._internalRoot = e;
  }
  Fl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ju();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < $t.length && t !== 0 && t < $t[n].priority; n++);
      ($t.splice(n, 0, e), n === 0 && Tu(e));
    }
  };
  function $i(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Bl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Wa() {}
  function uf(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var y = Dl(i);
          o.call(y);
        };
      }
      var i = Va(t, r, e, 0, null, !1, !1, '', Wa);
      return (
        (e._reactRootContainer = i),
        (e[Lt] = i.current),
        dr(e.nodeType === 8 ? e.parentNode : e),
        mn(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var u = r;
      r = function () {
        var y = Dl(a);
        u.call(y);
      };
    }
    var a = Bi(e, 0, !1, null, null, !1, !1, '', Wa);
    return (
      (e._reactRootContainer = a),
      (e[Lt] = a.current),
      dr(e.nodeType === 8 ? e.parentNode : e),
      mn(function () {
        Ml(t, a, n, r);
      }),
      a
    );
  }
  function Al(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == 'function') {
        var u = l;
        l = function () {
          var a = Dl(i);
          u.call(a);
        };
      }
      Ml(t, i, e, l);
    } else i = uf(n, t, e, l, r);
    return Dl(i);
  }
  ((Eu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Xn(t.pendingLanes);
          n !== 0 && (co(t, n | 1), et(t, Ne()), (ne & 6) === 0 && ((Vn = Ne() + 500), qt()));
        }
        break;
      case 13:
        (mn(function () {
          var r = zt(e, 1);
          if (r !== null) {
            var l = Ye();
            kt(r, e, 1, l);
          }
        }),
          Ai(e, 1));
    }
  }),
    (fo = function (e) {
      if (e.tag === 13) {
        var t = zt(e, 134217728);
        if (t !== null) {
          var n = Ye();
          kt(t, e, 134217728, n);
        }
        Ai(e, 134217728);
      }
    }),
    (Nu = function (e) {
      if (e.tag === 13) {
        var t = bt(e),
          n = zt(e, t);
        if (n !== null) {
          var r = Ye();
          kt(n, e, t, r);
        }
        Ai(e, t);
      }
    }),
    (ju = function () {
      return ce;
    }),
    (Pu = function (e, t) {
      var n = ce;
      try {
        return ((ce = e), t());
      } finally {
        ce = n;
      }
    }),
    (ro = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((Kl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = nl(r);
                if (!l) throw Error(s(90));
                (Ji(r), Kl(r, l));
              }
            }
          }
          break;
        case 'textarea':
          ru(e, n);
          break;
        case 'select':
          ((t = n.value), t != null && _n(e, !!n.multiple, t, !1));
      }
    }),
    (fu = Ri),
    (pu = mn));
  var sf = { usingClientEntryPoint: !1, Events: [mr, Ln, nl, cu, du, Ri] },
    Pr = {
      findFiberByHostInstance: on,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    af = {
      bundleType: Pr.bundleType,
      version: Pr.version,
      rendererPackageName: Pr.rendererPackageName,
      rendererConfig: Pr.rendererConfig,
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
        return ((e = yu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Pr.findFiberByHostInstance || of,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ul.isDisabled && Ul.supportsFiber)
      try {
        ((Fr = Ul.inject(af)), (Ct = Ul));
      } catch {}
  }
  return (
    (tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sf),
    (tt.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!$i(t)) throw Error(s(200));
      return lf(e, t, null, n);
    }),
    (tt.createRoot = function (e, t) {
      if (!$i(e)) throw Error(s(299));
      var n = !1,
        r = '',
        l = Qa;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Bi(e, 1, !1, null, null, n, !1, r, l)),
        (e[Lt] = t.current),
        dr(e.nodeType === 8 ? e.parentNode : e),
        new Ui(t)
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
      return ((e = yu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (tt.flushSync = function (e) {
      return mn(e);
    }),
    (tt.hydrate = function (e, t, n) {
      if (!Bl(t)) throw Error(s(200));
      return Al(null, e, t, !0, n);
    }),
    (tt.hydrateRoot = function (e, t, n) {
      if (!$i(e)) throw Error(s(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        i = Qa;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Va(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[Lt] = t.current),
        dr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Fl(t);
    }),
    (tt.render = function (e, t, n) {
      if (!Bl(t)) throw Error(s(200));
      return Al(null, e, t, !1, n);
    }),
    (tt.unmountComponentAtNode = function (e) {
      if (!Bl(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (mn(function () {
            Al(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Lt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (tt.unstable_batchedUpdates = Ri),
    (tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Bl(n)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Al(e, t, n, !1, r);
    }),
    (tt.version = '18.3.1-next-f1338f8080-20240426'),
    tt
  );
}
var ba;
function yf() {
  if (ba) return Qi.exports;
  ba = 1;
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
  return (v(), (Qi.exports = vf()), Qi.exports);
}
var ec;
function gf() {
  if (ec) return $l;
  ec = 1;
  var v = yf();
  return (($l.createRoot = v.createRoot), ($l.hydrateRoot = v.hydrateRoot), $l);
}
var _f = gf();
const wf = [
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
  rc = { questions: wf },
  Sf = {
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
  Ki = { causes: Sf, defaultCredences: xf },
  tc = ['#81B29A', '#98C1D9', '#E07A5F'],
  kf = '#81B29A',
  Cf = { OPTIONS: 'options' },
  { causes: Vl } = Ki;
function lc(v = !1) {
  return Object.fromEntries(
    rc.questions.map((d) => [
      d.id,
      v ? { ...d.worldviewDimension, name: d.editPanelTitle } : d.worldviewDimension,
    ])
  );
}
const Hl = lc();
function* Ql(v) {
  const d = Object.keys(v);
  if (d.length === 0) return;
  const s = Object.keys(v[d[0]]);
  function* k(w, E) {
    if (w === d.length) {
      let P = 1;
      for (const g of d) P *= v[g][E[g]] / 100;
      yield { options: E, probability: P };
      return;
    }
    const L = d[w];
    for (const P of s) yield* k(w + 1, { ...E, [L]: P });
  }
  yield* k(0, {});
}
function Ef(v, d, s) {
  let k = v.points;
  for (const [w, E] of Object.entries(s)) {
    const L = d[w],
      P = E.options[L];
    if (E.applyAs === 'multiplier') E.appliesWhen && v[E.appliesWhen] && (k *= P);
    else if (E.applyAs === 'exponent' && E.appliesTo) {
      const g = v[E.appliesTo] || 1;
      k *= Math.pow(g, P);
    }
  }
  return k;
}
function Wl(v, d, s) {
  const k = {};
  for (const [w, E] of Object.entries(d)) k[w] = Ef(E, v, s);
  return k;
}
function oc(v) {
  const d = Math.max(...Object.values(v));
  return Object.keys(v).filter((s) => Math.abs(v[s] - d) < 1e-4);
}
function Xi(v) {
  return Object.fromEntries(Object.keys(v).map((d) => [d, 0]));
}
function Nf(v, d) {
  const s = (d == null ? void 0 : d.causes) || Vl,
    k = (d == null ? void 0 : d.dimensions) || Hl,
    w = Xi(s);
  for (const { options: P, probability: g } of Ql(v)) {
    const j = Wl(P, s, k);
    for (const [O, I] of Object.entries(j)) w[O] += g * I;
  }
  const E = Object.keys(w).reduce((P, g) => (w[P] > w[g] ? P : g)),
    L = { evs: w };
  for (const P of Object.keys(s)) L[P] = P === E ? 100 : 0;
  return L;
}
function jf(v, d) {
  const s = (d == null ? void 0 : d.causes) || Vl,
    k = (d == null ? void 0 : d.dimensions) || Hl,
    w = Xi(s);
  for (const { options: L, probability: P } of Ql(v)) {
    const g = Wl(L, s, k),
      j = oc(g),
      O = P / j.length;
    for (const I of j) w[I] += O;
  }
  const E = {};
  for (const L of Object.keys(s)) E[L] = w[L] * 100;
  return E;
}
function Pf(v, d) {
  const s = (d == null ? void 0 : d.causes) || Vl,
    k = (d == null ? void 0 : d.dimensions) || Hl,
    w = Xi(s);
  for (const { options: E, probability: L } of Ql(v)) {
    const P = Wl(E, s, k),
      g = oc(P),
      j = (L * 100) / g.length;
    for (const O of g) w[O] += j;
  }
  return w;
}
function Lf(v, d) {
  const s = (d == null ? void 0 : d.causes) || Vl,
    k = (d == null ? void 0 : d.dimensions) || Hl,
    w = Object.keys(s),
    E = Tf(w);
  let L = E[0],
    P = -1 / 0;
  for (const g of E) {
    let j = 1 / 0;
    for (const { options: O, probability: I } of Ql(v)) {
      if (I < 0.001) continue;
      const R = Wl(O, s, k);
      let B = 0;
      for (const ee of w) B += R[ee] * (g[ee] / 100);
      j = Math.min(j, B);
    }
    j > P && ((P = j), (L = { ...g }));
  }
  return L;
}
function Tf(v) {
  const d = [],
    s = v.length,
    k = (g) => {
      const j = {};
      return (
        v.forEach((O, I) => {
          j[O] = g[I];
        }),
        j
      );
    };
  for (let g = 0; g < s; g++) {
    const j = new Array(s).fill(0);
    ((j[g] = 100), d.push(k(j)));
  }
  for (let g = 0; g < s; g++)
    for (let j = g + 1; j < s; j++) {
      const O = new Array(s).fill(0);
      ((O[g] = 50), (O[j] = 50), d.push(k(O)));
    }
  const w = Math.floor(100 / s),
    E = 100 - w * s,
    L = new Array(s).fill(w);
  ((L[0] += E), d.push(k(L)));
  const P = [
    [60, 20, 20],
    [70, 15, 15],
    [80, 10, 10],
  ];
  for (const g of P)
    if (g.length === s)
      for (let j = 0; j < s; j++) {
        const O = new Array(s).fill(0);
        O[j] = g[0];
        let I = 1;
        for (let R = 0; R < s; R++) R !== j && I < g.length && (O[R] = g[I++]);
        d.push(k(O));
      }
  return d;
}
function ic(v, d, s, k = null, w = null) {
  const E = w ? s[w] : 0,
    L = 100 - E;
  d = Math.max(0, Math.min(L, d));
  const P = k || s,
    g = Object.keys(s).filter((R) => R !== v && R !== w),
    j = g.reduce((R, B) => R + P[B], 0),
    O = 100 - d - E,
    I = { [v]: d };
  if ((w && (I[w] = s[w]), j === 0)) {
    const R = Math.floor(O / g.length);
    let B = O - R * g.length;
    g.forEach((ee, q) => {
      I[ee] = R + (q < B ? 1 : 0);
    });
  } else {
    let R = 0;
    g.forEach((B, ee) => {
      if (ee === g.length - 1) I[B] = Math.max(0, O - R);
      else {
        const q = P[B] / j,
          Y = O * q;
        ((I[B] = Math.max(0, Y)), (R += I[B]));
      }
    });
  }
  return I;
}
function uc(v) {
  const d = Object.keys(v),
    s = {};
  let k = 0;
  return (
    d.slice(0, -1).forEach((w) => {
      ((s[w] = Math.round(v[w])), (k += s[w]));
    }),
    (s[d[d.length - 1]] = 100 - k),
    s
  );
}
const { questions: at } = rc,
  { causes: Of, defaultCredences: qi } = Ki,
  nc = at.map((v) => ({
    ...v,
    options: v.options.map((d, s) => ({ ...d, color: tc[s] || tc[0] })),
  }));
function Rf() {
  return { credences: { ...qi }, originalCredences: null, inputMode: Cf.OPTIONS, lockedKey: null };
}
function sc() {
  return Object.fromEntries(at.map((v) => [v.id, Rf()]));
}
const ac = { currentStep: 'welcome', questions: sc(), expandedPanel: null, debugConfig: null },
  nt = {
    GO_TO_STEP: 'GO_TO_STEP',
    UPDATE_QUESTION: 'UPDATE_QUESTION',
    SET_EXPANDED_PANEL: 'SET_EXPANDED_PANEL',
    SAVE_ORIGINALS: 'SAVE_ORIGINALS',
    RESET_TO_ORIGINAL: 'RESET_TO_ORIGINAL',
    RESET_QUIZ: 'RESET_QUIZ',
    SET_DEBUG_CONFIG: 'SET_DEBUG_CONFIG',
  };
function zf(v, d, s) {
  return { ...v, questions: { ...v.questions, [d]: { ...v.questions[d], ...s } } };
}
function If(v, d) {
  switch (d.type) {
    case nt.GO_TO_STEP:
      return { ...v, currentStep: d.payload };
    case nt.UPDATE_QUESTION:
      return zf(v, d.payload.questionId, d.payload.updates);
    case nt.SET_EXPANDED_PANEL:
      return { ...v, expandedPanel: d.payload };
    case nt.SAVE_ORIGINALS:
      return {
        ...v,
        questions: Object.fromEntries(
          Object.entries(v.questions).map(([s, k]) => [
            s,
            { ...k, originalCredences: k.originalCredences || { ...k.credences } },
          ])
        ),
      };
    case nt.RESET_TO_ORIGINAL:
      return {
        ...v,
        questions: Object.fromEntries(
          Object.entries(v.questions).map(([s, k]) => [
            s,
            { ...k, credences: k.originalCredences ? { ...k.originalCredences } : k.credences },
          ])
        ),
      };
    case nt.RESET_QUIZ:
      return { ...ac, questions: sc() };
    case nt.SET_DEBUG_CONFIG:
      return { ...v, debugConfig: d.payload };
    default:
      return v;
  }
}
const cc = X.createContext(null);
function Mf({ children: v }) {
  const [d, s] = X.useReducer(If, ac),
    k = X.useCallback((Q) => {
      s({ type: nt.GO_TO_STEP, payload: Q });
    }, []),
    w = X.useCallback((Q, K) => {
      s({ type: nt.UPDATE_QUESTION, payload: { questionId: Q, updates: K } });
    }, []),
    E = X.useCallback((Q, K) => w(Q, { credences: K }), [w]),
    L = X.useCallback((Q, K) => w(Q, { inputMode: K }), [w]),
    P = X.useCallback((Q, K) => w(Q, { lockedKey: K }), [w]),
    g = X.useCallback((Q) => {
      s({ type: nt.SET_EXPANDED_PANEL, payload: Q });
    }, []),
    j = X.useCallback(() => {
      s({ type: nt.SAVE_ORIGINALS });
    }, []),
    O = X.useCallback(() => {
      s({ type: nt.RESET_TO_ORIGINAL });
    }, []),
    I = X.useCallback(() => {
      s({ type: nt.RESET_QUIZ });
    }, []),
    R = X.useCallback((Q) => {
      s({ type: nt.SET_DEBUG_CONFIG, payload: Q });
    }, []),
    B = X.useCallback((Q) => at.findIndex((K) => K.id === Q), []),
    ee = X.useCallback(
      (Q) => {
        const K = B(Q);
        return K === 0 ? 'welcome' : at[K - 1].id;
      },
      [B]
    ),
    q = X.useCallback(
      (Q) => {
        const K = B(Q);
        return K === at.length - 1 ? 'results' : at[K + 1].id;
      },
      [B]
    ),
    Y = X.useCallback(() => {
      k(at[0].id);
    }, [k]),
    pe = X.useCallback(() => {
      if (d.currentStep === 'results') k(at[at.length - 1].id);
      else {
        const Q = ee(d.currentStep);
        k(Q);
      }
    }, [d.currentStep, k, ee]),
    de = X.useCallback(() => {
      const Q = q(d.currentStep);
      (Q === 'results' && j(), k(Q));
    }, [d.currentStep, k, q, j]),
    ve = X.useCallback(
      (Q) => {
        var T;
        const K = Q === 'original' ? 'originalCredences' : 'credences',
          ie = d.questions[(T = at[0]) == null ? void 0 : T.id];
        return Q === 'original' && !(ie != null && ie.originalCredences)
          ? null
          : Object.fromEntries(
              at.map(($) => {
                var M;
                return [$.id, ((M = d.questions[$.id]) == null ? void 0 : M[K]) || qi];
              })
            );
      },
      [d.questions]
    ),
    fe = X.useCallback(
      (Q, K) =>
        Q
          ? { maxEV: Nf(Q, K), parliament: jf(Q, K), mergedFavorites: Pf(Q, K), maximin: Lf(Q, K) }
          : null,
      []
    ),
    _e = X.useMemo(() => fe(ve('current'), d.debugConfig), [ve, fe, d.debugConfig]),
    W = X.useMemo(() => fe(ve('original'), d.debugConfig), [ve, fe, d.debugConfig]),
    Z = X.useMemo(
      () =>
        Object.values(d.questions).some(
          (Q) =>
            Q.originalCredences &&
            JSON.stringify(Q.credences) !== JSON.stringify(Q.originalCredences)
        ),
      [d.questions]
    ),
    ue = X.useMemo(() => B(d.currentStep), [d.currentStep, B]),
    De = X.useMemo(() => (ue === -1 ? null : nc[ue]), [ue]),
    we = at.length,
    Ae = X.useMemo(() => (ue === -1 ? 0 : ((ue + 1) / we) * 100), [ue, we]),
    We = X.useMemo(() => (ue === -1 ? '' : `Question ${ue + 1} of ${we}`), [ue, we]),
    Re = X.useMemo(() => {
      const Q = {};
      return (
        at.forEach((K) => {
          const ie = d.questions[K.id];
          Q[K.id] = {
            credences: ie.credences,
            setCredences: (T) => E(K.id, T),
            originalCredences: ie.originalCredences,
            inputMode: ie.inputMode,
            setInputMode: (T) => L(K.id, T),
            lockedKey: ie.lockedKey,
            setLockedKey: (T) => P(K.id, T),
          };
        }),
        Q
      );
    }, [d.questions, E, L, P]),
    Ge = X.useMemo(
      () => ({
        currentStep: d.currentStep,
        questions: d.questions,
        expandedPanel: d.expandedPanel,
        debugConfig: d.debugConfig,
        questionsConfig: nc,
        causesConfig: Of,
        defaultCredences: qi,
        goToStep: k,
        setCredences: E,
        setInputMode: L,
        setLockedKey: P,
        setExpandedPanel: g,
        saveOriginals: j,
        resetToOriginal: O,
        resetQuiz: I,
        setDebugConfig: R,
        getQuestionIndex: B,
        getPrevStep: ee,
        getNextStep: q,
        startQuiz: Y,
        goBack: pe,
        goForward: de,
        currentQuestion: De,
        currentQuestionIndex: ue,
        totalQuestions: we,
        progressPercentage: Ae,
        questionNumber: We,
        hasChanged: Z,
        calculationResults: _e,
        originalCalculationResults: W,
        stateMap: Re,
      }),
      [
        d.currentStep,
        d.questions,
        d.expandedPanel,
        d.debugConfig,
        k,
        E,
        L,
        P,
        g,
        j,
        O,
        I,
        R,
        B,
        ee,
        q,
        Y,
        pe,
        de,
        De,
        ue,
        we,
        Ae,
        We,
        Z,
        _e,
        W,
        Re,
      ]
    );
  return p.jsx(cc.Provider, { value: Ge, children: v });
}
const Df = { title: 'Moral Parliament' },
  Ff = {
    timeEstimate: '~3 minutes',
    headingLine1: 'Where Should Your',
    headingLine2: 'Giving Go?',
    intro:
      'Uncertain about your ethical views? This tool helps you allocate resources across different causes based on your moral credences—the probabilities you assign to different ethical perspectives.',
    startButton: 'Start Quiz →',
    previewLabel: "You'll be asked about:",
  },
  Bf = { back: '← Back', continue: 'Continue →', backToQuiz: '← Back to Quiz' },
  Af = { modeToggle: { pickOne: 'Pick One', customMix: 'Custom Mix' } },
  Uf = {
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
  $f = {
    modifiedBadge: 'modified',
    sliderNote: 'Sliders auto-balance to 100%',
    resetButton: 'Reset',
  },
  Le = {
    branding: Df,
    welcome: Ff,
    navigation: Bf,
    questionScreen: Af,
    results: Uf,
    editPanel: $f,
  },
  dc = ({ subtitle: v }) =>
    p.jsxs('header', {
      className: 'header',
      children: [
        p.jsx('div', { className: 'header-title', children: Le.branding.title }),
        v && p.jsx('div', { className: 'header-subtitle', children: v }),
      ],
    });
function Gl() {
  const v = X.useContext(cc);
  if (!v) throw new Error('useQuiz must be used within a QuizProvider');
  return v;
}
const Vf = '_container_11wow_3',
  Hf = '_heading_11wow_8',
  Qf = '_headingEmphasis_11wow_16',
  Wf = '_intro_11wow_24',
  Gf = '_infoBox_11wow_32',
  qf = '_infoBoxLabel_11wow_40',
  Yf = '_infoBoxGrid_11wow_47',
  Kf = '_infoBoxItem_11wow_54',
  rn = {
    container: Vf,
    heading: Hf,
    headingEmphasis: Qf,
    intro: Wf,
    infoBox: Gf,
    infoBoxLabel: qf,
    infoBoxGrid: Yf,
    infoBoxItem: Kf,
  },
  Xf = () => {
    const { questionsConfig: v, startQuiz: d } = Gl();
    return p.jsxs('div', {
      className: 'screen',
      children: [
        p.jsx(dc, { subtitle: Le.welcome.timeEstimate }),
        p.jsx('main', {
          className: 'screen-main',
          children: p.jsxs('div', {
            className: rn.container,
            children: [
              p.jsxs('h1', {
                className: rn.heading,
                children: [
                  Le.welcome.headingLine1,
                  p.jsx('br', {}),
                  p.jsx('span', {
                    className: rn.headingEmphasis,
                    children: Le.welcome.headingLine2,
                  }),
                ],
              }),
              p.jsx('p', { className: rn.intro, children: Le.welcome.intro }),
              p.jsx('button', {
                onClick: d,
                className: 'btn btn-primary',
                children: Le.welcome.startButton,
              }),
              p.jsxs('div', {
                className: rn.infoBox,
                children: [
                  p.jsx('div', { className: rn.infoBoxLabel, children: Le.welcome.previewLabel }),
                  p.jsx('div', {
                    className: rn.infoBoxGrid,
                    children: v.map((s) =>
                      p.jsxs(
                        'div',
                        { className: rn.infoBoxItem, children: [s.emoji, ' ', s.previewText] },
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
  },
  Zf = ({ percentage: v }) =>
    p.jsx('div', {
      className: 'progress-container',
      children: p.jsx('div', {
        className: 'progress-track',
        children: p.jsx('div', { className: 'progress-fill', style: { width: `${v}%` } }),
      }),
    });
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jf = (v) => v.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  fc = (...v) =>
    v
      .filter((d, s, k) => !!d && d.trim() !== '' && k.indexOf(d) === s)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var bf = {
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
 */ const ep = X.forwardRef(
  (
    {
      color: v = 'currentColor',
      size: d = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: k,
      className: w = '',
      children: E,
      iconNode: L,
      ...P
    },
    g
  ) =>
    X.createElement(
      'svg',
      {
        ref: g,
        ...bf,
        width: d,
        height: d,
        stroke: v,
        strokeWidth: k ? (Number(s) * 24) / Number(d) : s,
        className: fc('lucide', w),
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
 */ const ql = (v, d) => {
  const s = X.forwardRef(({ className: k, ...w }, E) =>
    X.createElement(ep, { ref: E, iconNode: d, className: fc(`lucide-${Jf(v)}`, k), ...w })
  );
  return ((s.displayName = `${v}`), s);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tp = ql('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const np = ql('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pc = ql('RotateCcw', [
  ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
  ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rp = ql('SlidersVertical', [
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
  lp = '_modeToggle_modhv_3',
  op = '_button_modhv_10',
  ip = '_options_modhv_23',
  up = '_active_modhv_29',
  sp = '_sliders_modhv_35',
  gn = { modeToggle: lp, button: op, options: ip, active: up, sliders: sp },
  ap = ({ mode: v, setMode: d }) =>
    p.jsxs('div', {
      className: gn.modeToggle,
      children: [
        p.jsx('button', {
          onClick: () => d('options'),
          className: `${gn.button} ${gn.options} ${v === 'options' ? gn.active : ''}`,
          children: Le.questionScreen.modeToggle.pickOne,
        }),
        p.jsxs('button', {
          onClick: () => d('sliders'),
          className: `${gn.button} ${gn.sliders} ${v === 'sliders' ? gn.active : ''}`,
          children: [p.jsx(rp, { size: 14 }), Le.questionScreen.modeToggle.customMix],
        }),
      ],
    }),
  cp = '_optionButton_xv4xt_3',
  dp = '_selected_xv4xt_20',
  fp = '_content_xv4xt_34',
  pp = '_textContent_xv4xt_40',
  mp = '_label_xv4xt_44',
  hp = '_description_xv4xt_56',
  vp = '_checkmark_xv4xt_62',
  Ft = {
    optionButton: cp,
    default: '_default_xv4xt_15',
    selected: dp,
    content: fp,
    textContent: pp,
    label: mp,
    description: hp,
    checkmark: vp,
  },
  yp = ({
    label: v,
    description: d,
    optionKey: s,
    credences: k,
    setCredences: w,
    color: E,
    setInputMode: L,
  }) => {
    const P = k[s] === 100,
      g = () => {
        const j = { equal: 0, '10x': 0, '100x': 0 };
        ((j[s] = 100), w(j), L('options'));
      };
    return p.jsx('button', {
      onClick: g,
      className: `${Ft.optionButton} ${P ? Ft.selected : Ft.default}`,
      style: { '--option-color': E },
      children: p.jsxs('div', {
        className: Ft.content,
        children: [
          p.jsxs('div', {
            className: Ft.textContent,
            children: [
              p.jsx('div', { className: `${Ft.label} ${P ? Ft.selected : ''}`, children: v }),
              p.jsx('div', { className: Ft.description, children: d }),
            ],
          }),
          P && p.jsx('div', { className: Ft.checkmark, children: '✓' }),
        ],
      }),
    });
  },
  gp = '_credenceSlider_1qobm_4',
  _p = '_header_1qobm_8',
  wp = '_label_1qobm_15',
  Sp = '_description_1qobm_22',
  xp = '_value_1qobm_28',
  kp = '_sliderRow_1qobm_35',
  Cp = '_sliderContainer_1qobm_41',
  Ep = '_lockLimit_1qobm_46',
  Np = '_compactSlider_1qobm_91',
  Ke = {
    credenceSlider: gp,
    header: _p,
    label: wp,
    description: Sp,
    value: xp,
    sliderRow: kp,
    sliderContainer: Cp,
    lockLimit: Ep,
    compactSlider: Np,
  },
  jp = { resetButton: !1, sliderLock: !1 },
  Zi = { ui: jp },
  Pp = ({
    label: v,
    description: d,
    value: s,
    onChange: k,
    color: w,
    credences: E,
    sliderKey: L,
    lockedKey: P,
    setLockedKey: g,
  }) => {
    var _e;
    const [j, O] = X.useState(null),
      [I, R] = X.useState(!1),
      B = P === L,
      ee = P && P !== L,
      q = ee ? E[P] : 0,
      Y = ee ? 100 - q : 100,
      pe = ee ? `calc(${Y}% + ${(50 - Y) * 0.16}px)` : null,
      de = () => {
        B || (R(!0), O({ ...E }));
      },
      ve = (W) => {
        if (B || !I) return;
        R(!1);
        const Z = parseFloat(W.target.value);
        (k(Z, j, !0, P), O(null));
      },
      fe = (W) => {
        if (B) return;
        const Z = parseFloat(W.target.value);
        k(Z, j, !1, P);
      };
    return p.jsxs('div', {
      className: Ke.credenceSlider,
      children: [
        p.jsxs('div', {
          className: Ke.header,
          children: [
            p.jsxs('div', {
              children: [
                p.jsx('div', { className: Ke.label, children: v }),
                p.jsx('div', { className: Ke.description, children: d }),
              ],
            }),
            p.jsxs('div', {
              className: Ke.value,
              style: { color: w },
              children: [Math.round(s), '%'],
            }),
          ],
        }),
        p.jsxs('div', {
          className: Ke.sliderRow,
          children: [
            p.jsxs('div', {
              className: Ke.sliderContainer,
              children: [
                p.jsx('input', {
                  type: 'range',
                  min: '0',
                  max: '100',
                  step: 'any',
                  value: s,
                  onChange: fe,
                  onMouseDown: de,
                  onMouseUp: ve,
                  onMouseLeave: ve,
                  onTouchStart: de,
                  onTouchEnd: ve,
                  'data-dragging': I,
                  disabled: B,
                  style: {
                    background: ee
                      ? `linear-gradient(to right, ${w} 0%, ${w} ${s}%, rgba(255,255,255,0.15) ${s}%, rgba(255,255,255,0.15) ${pe}, rgba(255,255,255,0.08) ${pe}, rgba(255,255,255,0.08) 100%)`
                      : `linear-gradient(to right, ${w} 0%, ${w} ${s}%, rgba(255,255,255,0.15) ${s}%, rgba(255,255,255,0.15) 100%)`,
                    cursor: B ? 'not-allowed' : 'pointer',
                  },
                }),
                ee && p.jsx('div', { className: Ke.lockLimit, style: { left: pe } }),
              ],
            }),
            (_e = Zi.ui) == null ? void 0 : _e.sliderLock,
          ],
        }),
      ],
    });
  },
  Lp = '_container_9yo3m_3',
  Tp = '_categoryLabel_9yo3m_8',
  Op = '_heading_9yo3m_16',
  Rp = '_instructions_9yo3m_23',
  zp = '_buttonRow_9yo3m_30',
  Tr = { container: Lp, categoryLabel: Tp, heading: Op, instructions: Rp, buttonRow: zp },
  Ip = () => {
    const {
      currentQuestion: v,
      stateMap: d,
      questionNumber: s,
      progressPercentage: k,
      goBack: w,
      goForward: E,
    } = Gl();
    if (!v) return null;
    const L = d[v.id];
    if (!L) return null;
    const {
      credences: P,
      setCredences: g,
      inputMode: j,
      setInputMode: O,
      lockedKey: I,
      setLockedKey: R,
    } = L;
    return p.jsxs('div', {
      className: 'screen',
      children: [
        p.jsx(dc, { subtitle: s }),
        p.jsx(Zf, { percentage: k }),
        p.jsx('main', {
          className: 'screen-main',
          children: p.jsxs('div', {
            className: Tr.container,
            children: [
              p.jsx('div', {
                className: Tr.categoryLabel,
                style: { color: kf },
                children: v.categoryLabel,
              }),
              p.jsx('h2', { className: Tr.heading, children: v.heading }),
              p.jsx('p', {
                className: Tr.instructions,
                children: j === 'options' ? v.instructionsOptions : v.instructionsSliders,
              }),
              p.jsx(ap, { mode: j, setMode: O }),
              p.jsx('div', {
                className: 'card',
                children:
                  j === 'options'
                    ? p.jsx(p.Fragment, {
                        children: v.options.map((B) =>
                          p.jsx(
                            yp,
                            {
                              label: B.label,
                              description: B.description,
                              optionKey: B.key,
                              credences: P,
                              setCredences: g,
                              color: B.color,
                              setInputMode: O,
                            },
                            B.key
                          )
                        ),
                      })
                    : p.jsx(p.Fragment, {
                        children: v.options.map((B) =>
                          p.jsx(
                            Pp,
                            {
                              label: B.label,
                              description: B.description,
                              value: P[B.key],
                              onChange: (ee, q, Y, pe) => {
                                const de = ic(B.key, ee, P, q, pe);
                                g(Y ? uc(de) : de);
                              },
                              color: B.color,
                              credences: P,
                              sliderKey: B.key,
                              lockedKey: I,
                              setLockedKey: R,
                            },
                            B.key
                          )
                        ),
                      }),
              }),
              p.jsxs('div', {
                className: Tr.buttonRow,
                children: [
                  p.jsx('button', {
                    onClick: w,
                    className: 'btn btn-secondary',
                    children: Le.navigation.back,
                  }),
                  p.jsx('button', {
                    onClick: E,
                    className: 'btn btn-primary',
                    children: Le.navigation.continue,
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Mp = '_causeBar_1uovs_3',
  Dp = '_header_1uovs_7',
  Fp = '_name_1uovs_15',
  Bp = '_percentage_1uovs_19',
  Ap = '_changeIndicator_1uovs_23',
  Up = '_up_1uovs_27',
  $p = '_down_1uovs_31',
  Vp = '_barTrack_1uovs_35',
  Hp = '_barOriginal_1uovs_43',
  Qp = '_barFill_1uovs_49',
  Wp = '_barLabel_1uovs_58',
  Gp = '_compact_1uovs_65',
  vt = {
    causeBar: Mp,
    header: Dp,
    name: Fp,
    percentage: Bp,
    changeIndicator: Ap,
    up: Up,
    down: $p,
    barTrack: Vp,
    barOriginal: Hp,
    barFill: Qp,
    barLabel: Wp,
    compact: Gp,
  },
  qp = ({
    name: v,
    percentage: d,
    color: s,
    originalPercentage: k = null,
    hasChanged: w = !1,
    simpleMode: E = !1,
  }) => {
    const L = !E && w && k !== null && d !== k,
      P = L && d > k;
    return p.jsxs('div', {
      className: `${vt.causeBar} ${E ? vt.compact : ''}`,
      children: [
        p.jsxs('div', {
          className: vt.header,
          children: [
            p.jsx('span', { className: vt.name, children: v }),
            p.jsxs('span', {
              className: vt.percentage,
              style: { color: s },
              children: [
                d.toFixed(0),
                '%',
                L &&
                  p.jsx('span', {
                    className: `${vt.changeIndicator} ${P ? vt.up : vt.down}`,
                    children: P ? '↑' : '↓',
                  }),
              ],
            }),
          ],
        }),
        p.jsxs('div', {
          className: vt.barTrack,
          children: [
            L &&
              p.jsx('div', { className: vt.barOriginal, style: { width: `${k}%`, background: s } }),
            p.jsx('div', {
              className: vt.barFill,
              style: { width: `${d}%`, background: s },
              children:
                d > 15 && p.jsxs('span', { className: vt.barLabel, children: [d.toFixed(0), '%'] }),
            }),
          ],
        }),
      ],
    });
  },
  Yp = ({
    label: v,
    value: d,
    onChange: s,
    color: k,
    credences: w,
    sliderKey: E,
    lockedKey: L,
    setLockedKey: P,
  }) => {
    var fe;
    const [g, j] = X.useState(null),
      [O, I] = X.useState(!1),
      R = L === E,
      B = L && L !== E,
      ee = B ? w[L] : 0,
      q = B ? 100 - ee : 100,
      Y = B ? `calc(${q}% + ${(50 - q) * 0.16}px)` : null,
      pe = () => {
        R || (I(!0), j({ ...w }));
      },
      de = (_e) => {
        if (R || !O) return;
        I(!1);
        const W = parseFloat(_e.target.value);
        (s(W, g, !0, L), j(null));
      },
      ve = (_e) => {
        if (R) return;
        const W = parseFloat(_e.target.value);
        s(W, g, !1, L);
      };
    return p.jsxs('div', {
      className: Ke.compactSlider,
      children: [
        p.jsxs('div', {
          className: Ke.header,
          children: [
            p.jsx('span', { className: Ke.label, children: v }),
            p.jsxs('span', {
              className: Ke.value,
              style: { color: k },
              children: [Math.round(d), '%'],
            }),
          ],
        }),
        p.jsxs('div', {
          className: Ke.sliderRow,
          children: [
            p.jsxs('div', {
              className: Ke.sliderContainer,
              children: [
                p.jsx('input', {
                  type: 'range',
                  min: '0',
                  max: '100',
                  step: 'any',
                  value: d,
                  onChange: ve,
                  onMouseDown: pe,
                  onMouseUp: de,
                  onMouseLeave: de,
                  onTouchStart: pe,
                  onTouchEnd: de,
                  'data-dragging': O,
                  disabled: R,
                  style: {
                    background: B
                      ? `linear-gradient(to right, ${k} 0%, ${k} ${d}%, rgb(51,65,85) ${d}%, rgb(51,65,85) ${Y}, rgb(30,41,59) ${Y}, rgb(30,41,59) 100%)`
                      : `linear-gradient(to right, ${k} 0%, ${k} ${d}%, rgb(51,65,85) ${d}%, rgb(51,65,85) 100%)`,
                    cursor: R ? 'not-allowed' : 'pointer',
                  },
                }),
                B && p.jsx('div', { className: Ke.lockLimit, style: { left: Y } }),
              ],
            }),
            (fe = Zi.ui) == null ? void 0 : fe.sliderLock,
          ],
        }),
      ],
    });
  },
  Kp = '_editPanel_aogsc_3',
  Xp = '_expanded_aogsc_11',
  Zp = '_toggleButton_aogsc_16',
  Jp = '_buttonContent_aogsc_33',
  bp = '_icon_aogsc_39',
  em = '_title_aogsc_43',
  tm = '_modifiedBadge_aogsc_48',
  nm = '_preview_aogsc_56',
  rm = '_chevron_aogsc_62',
  lm = '_content_aogsc_66',
  om = '_footer_aogsc_71',
  im = '_footerNote_aogsc_78',
  um = '_resetButton_aogsc_84',
  st = {
    editPanel: Kp,
    expanded: Xp,
    toggleButton: Zp,
    buttonContent: Jp,
    icon: bp,
    title: em,
    modifiedBadge: tm,
    preview: nm,
    chevron: rm,
    content: lm,
    footer: om,
    footerNote: im,
    resetButton: um,
  },
  sm = ({
    title: v,
    icon: d,
    credences: s,
    setCredences: k,
    originalCredences: w,
    configs: E,
    isExpanded: L,
    onToggle: P,
    lockedKey: g,
    setLockedKey: j,
  }) => {
    const O = w && JSON.stringify(s) !== JSON.stringify(w),
      I = (R) => {
        (R.stopPropagation(), k({ ...w }));
      };
    return p.jsxs('div', {
      className: `${st.editPanel} ${L ? st.expanded : ''}`,
      children: [
        p.jsxs('button', {
          onClick: P,
          className: st.toggleButton,
          children: [
            p.jsxs('div', {
              className: st.buttonContent,
              children: [
                p.jsx('span', { className: st.icon, children: d }),
                p.jsx('span', { className: st.title, children: v }),
                O &&
                  p.jsx('span', {
                    className: st.modifiedBadge,
                    children: Le.editPanel.modifiedBadge,
                  }),
                !L &&
                  p.jsx('span', {
                    className: st.preview,
                    children: E.map((R) => `${R.short}:${s[R.key]}%`).join(' '),
                  }),
              ],
            }),
            p.jsx('span', {
              className: st.chevron,
              children: L ? p.jsx(np, { size: 16 }) : p.jsx(tp, { size: 16 }),
            }),
          ],
        }),
        L &&
          p.jsxs('div', {
            className: st.content,
            children: [
              E.map((R) =>
                p.jsx(
                  Yp,
                  {
                    label: R.label,
                    value: s[R.key],
                    onChange: (B, ee, q, Y) => {
                      const pe = ic(R.key, B, s, ee, Y);
                      k(q ? uc(pe) : pe);
                    },
                    color: R.color,
                    credences: s,
                    sliderKey: R.key,
                    lockedKey: g,
                    setLockedKey: j,
                  },
                  R.key
                )
              ),
              p.jsxs('div', {
                className: st.footer,
                children: [
                  p.jsx('span', { className: st.footerNote, children: Le.editPanel.sliderNote }),
                  O &&
                    p.jsxs('button', {
                      onClick: I,
                      className: st.resetButton,
                      children: [p.jsx(pc, { size: 10 }), ' ', Le.editPanel.resetButton],
                    }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  am = '_resultsContainer_13dv0_3',
  cm = '_inner_13dv0_11',
  dm = '_header_13dv0_16',
  fm = '_title_13dv0_21',
  pm = '_modifiedIndicator_13dv0_27',
  mm = '_resultsGrid_13dv0_34',
  hm = '_comparisonContainer_13dv0_42',
  vm = '_originalResults_13dv0_49',
  ym = '_newResults_13dv0_50',
  gm = '_slideInLeft_13dv0_1',
  _m = '_slideInRight_13dv0_1',
  wm = '_comparisonDivider_13dv0_85',
  Sm = '_dividerLine_13dv0_94',
  xm = '_dividerArrow_13dv0_101',
  km = '_compactGrid_13dv0_108',
  Cm = '_compactCard_13dv0_114',
  Em = '_cardHeader_13dv0_118',
  Nm = '_cardIcon_13dv0_122',
  jm = '_cardTitle_13dv0_128',
  Pm = '_resultCard_13dv0_132',
  Lm = '_maxEV_13dv0_156',
  Tm = '_parliament_13dv0_160',
  Om = '_cardSubtitle_13dv0_171',
  Rm = '_cardFooter_13dv0_177',
  zm = '_adjustPanel_13dv0_185',
  Im = '_adjustHeader_13dv0_193',
  Mm = '_adjustTitle_13dv0_200',
  Dm = '_resetAllButton_13dv0_206',
  Fm = '_panelList_13dv0_223',
  Bm = '_backButtonContainer_13dv0_229',
  Am = '_backButton_13dv0_229',
  Um = '_resetButton_13dv0_254',
  se = {
    resultsContainer: am,
    inner: cm,
    header: dm,
    title: fm,
    modifiedIndicator: pm,
    resultsGrid: mm,
    comparisonContainer: hm,
    originalResults: vm,
    newResults: ym,
    slideInLeft: gm,
    slideInRight: _m,
    comparisonDivider: wm,
    dividerLine: Sm,
    dividerArrow: xm,
    compactGrid: km,
    compactCard: Cm,
    cardHeader: Em,
    cardIcon: Nm,
    cardTitle: jm,
    resultCard: Pm,
    maxEV: Lm,
    parliament: Tm,
    cardSubtitle: Om,
    cardFooter: Rm,
    adjustPanel: zm,
    adjustHeader: Im,
    adjustTitle: Mm,
    resetAllButton: Dm,
    panelList: Fm,
    backButtonContainer: Bm,
    backButton: Am,
    resetButton: Um,
  },
  $m = () => {
    var _e;
    const {
        questionsConfig: v,
        causesConfig: d,
        stateMap: s,
        expandedPanel: k,
        setExpandedPanel: w,
        calculationResults: E,
        originalCalculationResults: L,
        hasChanged: P,
        resetToOriginal: g,
        resetQuiz: j,
        goBack: O,
      } = Gl(),
      { maxEV: I, parliament: R, mergedFavorites: B, maximin: ee } = E,
      q = Object.entries(d),
      Y = (W) =>
        W.options.map((Z) => ({
          key: Z.key,
          label: Z.panelLabel,
          short: Z.panelShort,
          color: Z.color,
        })),
      pe = (W, Z = null, ue = !1) =>
        q.map(([De, we]) =>
          p.jsx(
            qp,
            {
              name: we.name,
              percentage: W[De],
              originalPercentage: Z == null ? void 0 : Z[De],
              color: we.color,
              hasChanged: !ue && P,
              simpleMode: ue,
            },
            De
          )
        ),
      de = (W, Z, ue = null, De = null, we = !1) => {
        const Ae = Le.results.methods[W],
          We = W === 'mergedFavorites' ? 'merged' : W;
        return p.jsxs('div', {
          className: `${se.resultCard} ${we ? se.compactCard : ''}`,
          children: [
            p.jsxs('div', {
              className: se.cardHeader,
              children: [
                p.jsx('div', { className: `${se.cardIcon} ${se[We]}`, children: Ae.icon }),
                p.jsxs('div', {
                  children: [
                    p.jsx('h3', { className: se.cardTitle, children: Ae.title }),
                    !we && p.jsx('p', { className: se.cardSubtitle, children: Ae.subtitle }),
                  ],
                }),
              ],
            }),
            pe(Z, De, we),
            !we &&
              p.jsx('div', {
                className: se.cardFooter,
                children: ue
                  ? `${Ae.footerLabel} ${q.map(([Re, Ge]) => `${Ge.name.slice(0, 2)} ${ue[Re].toFixed(0)}`).join(' · ')}`
                  : Ae.footerText,
              }),
          ],
        });
      },
      ve = (W) =>
        p.jsxs('div', {
          className: `${se.resultsGrid} ${se.compactGrid}`,
          children: [
            de('maxEV', W.maxEV, W.maxEV.evs, null, !0),
            de('mergedFavorites', W.mergedFavorites, null, null, !0),
          ],
        }),
      fe = () =>
        p.jsxs('div', {
          className: se.resultsGrid,
          children: [
            de('maxEV', I, I.evs, L == null ? void 0 : L.maxEV),
            de('mergedFavorites', B, null, L == null ? void 0 : L.mergedFavorites),
          ],
        });
    return p.jsx('div', {
      className: se.resultsContainer,
      children: p.jsxs('div', {
        className: se.inner,
        children: [
          p.jsx('div', {
            className: se.header,
            children: p.jsxs('h1', {
              className: se.title,
              children: [
                Le.results.heading,
                P &&
                  p.jsx('span', {
                    className: se.modifiedIndicator,
                    children: Le.results.modifiedIndicator,
                  }),
              ],
            }),
          }),
          P
            ? p.jsxs('div', {
                className: se.comparisonContainer,
                children: [
                  p.jsx('div', { className: se.originalResults, children: ve(L) }),
                  p.jsxs('div', {
                    className: se.comparisonDivider,
                    children: [
                      p.jsx('div', { className: se.dividerLine }),
                      p.jsx('div', { className: se.dividerArrow, children: '→' }),
                      p.jsx('div', { className: se.dividerLine }),
                    ],
                  }),
                  p.jsx('div', { className: se.newResults, children: ve(E) }),
                ],
              })
            : fe(),
          p.jsxs('div', {
            className: se.adjustPanel,
            children: [
              p.jsxs('div', {
                className: se.adjustHeader,
                children: [
                  p.jsx('span', {
                    className: se.adjustTitle,
                    children: Le.results.adjustCredencesHeading,
                  }),
                  P &&
                    p.jsxs('button', {
                      onClick: g,
                      className: se.resetAllButton,
                      children: [p.jsx(pc, { size: 10 }), ' ', Le.results.resetAllButton],
                    }),
                ],
              }),
              p.jsx('div', {
                className: se.panelList,
                children: v.map((W) => {
                  const Z = s[W.id];
                  return Z
                    ? p.jsx(
                        sm,
                        {
                          title: W.editPanelTitle,
                          icon: W.emoji,
                          credences: Z.credences,
                          setCredences: Z.setCredences,
                          originalCredences: Z.originalCredences,
                          configs: Y(W),
                          isExpanded: k === W.id,
                          onToggle: () => w(k === W.id ? null : W.id),
                          lockedKey: Z.lockedKey,
                          setLockedKey: Z.setLockedKey,
                        },
                        W.id
                      )
                    : null;
                }),
              }),
            ],
          }),
          p.jsxs('div', {
            className: se.backButtonContainer,
            children: [
              p.jsx('button', {
                onClick: O,
                className: se.backButton,
                children: Le.navigation.backToQuiz,
              }),
              (_e = Zi.ui) == null ? void 0 : _e.resetButton,
            ],
          }),
        ],
      }),
    });
  },
  Vm = '_debugButton_1fvy0_4',
  Hm = '_overlay_1fvy0_22',
  Qm = '_modal_1fvy0_35',
  Wm = '_header_1fvy0_46',
  Gm = '_closeButton_1fvy0_60',
  qm = '_content_1fvy0_73',
  Ym = '_section_1fvy0_79',
  Km = '_causeBlock_1fvy0_93',
  Xm = '_fieldRow_1fvy0_106',
  Zm = '_checkboxRow_1fvy0_130',
  Jm = '_multiplierGroup_1fvy0_149',
  bm = '_dimInfo_1fvy0_159',
  eh = '_multiplierRow_1fvy0_166',
  th = '_footer_1fvy0_190',
  nh = '_saveButton_1fvy0_197',
  Qe = {
    debugButton: Vm,
    overlay: Hm,
    modal: Qm,
    header: Wm,
    closeButton: Gm,
    content: qm,
    section: Ym,
    causeBlock: Km,
    fieldRow: Xm,
    checkboxRow: Zm,
    multiplierGroup: Jm,
    dimInfo: bm,
    multiplierRow: eh,
    footer: th,
    saveButton: nh,
  },
  { causes: rh } = Ki,
  lh = lc(!0),
  oh = ({ onConfigChange: v }) => {
    const [d, s] = X.useState(!1),
      [k, w] = X.useState({
        causes: JSON.parse(JSON.stringify(rh)),
        dimensions: JSON.parse(JSON.stringify(lh)),
      }),
      E = (g, j, O) => {
        w((I) => ({
          ...I,
          causes: {
            ...I.causes,
            [g]: {
              ...I.causes[g],
              [j]: j === 'name' || j === 'color' || typeof O == 'boolean' ? O : Number(O),
            },
          },
        }));
      },
      L = (g, j, O) => {
        w((I) => ({
          ...I,
          dimensions: {
            ...I.dimensions,
            [g]: { ...I.dimensions[g], options: { ...I.dimensions[g].options, [j]: Number(O) } },
          },
        }));
      },
      P = () => {
        (v(k), s(!1));
      };
    return p.jsxs(p.Fragment, {
      children: [
        p.jsx('button', {
          className: Qe.debugButton,
          onClick: () => s(!0),
          title: 'Debug Settings',
          children: 'Settings',
        }),
        d &&
          p.jsx('div', {
            className: Qe.overlay,
            onClick: () => s(!1),
            children: p.jsxs('div', {
              className: Qe.modal,
              onClick: (g) => g.stopPropagation(),
              children: [
                p.jsxs('div', {
                  className: Qe.header,
                  children: [
                    p.jsx('h2', { children: 'Calculation Debugger' }),
                    p.jsx('button', {
                      className: Qe.closeButton,
                      onClick: () => s(!1),
                      children: 'x',
                    }),
                  ],
                }),
                p.jsxs('div', {
                  className: Qe.content,
                  children: [
                    p.jsxs('section', {
                      className: Qe.section,
                      children: [
                        p.jsx('h3', { children: 'CAUSES' }),
                        Object.entries(k.causes).map(([g, j]) =>
                          p.jsxs(
                            'div',
                            {
                              className: Qe.causeBlock,
                              children: [
                                p.jsx('h4', { children: j.name }),
                                p.jsxs('div', {
                                  className: Qe.fieldRow,
                                  children: [
                                    p.jsxs('label', {
                                      children: [
                                        'Points:',
                                        p.jsx('input', {
                                          type: 'number',
                                          value: j.points,
                                          onChange: (O) => E(g, 'points', O.target.value),
                                        }),
                                      ],
                                    }),
                                    p.jsxs('label', {
                                      children: [
                                        'Scale Factor:',
                                        p.jsx('input', {
                                          type: 'number',
                                          value: j.scaleFactor,
                                          onChange: (O) => E(g, 'scaleFactor', O.target.value),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                p.jsxs('div', {
                                  className: Qe.checkboxRow,
                                  children: [
                                    p.jsxs('label', {
                                      children: [
                                        p.jsx('input', {
                                          type: 'checkbox',
                                          checked: j.helpsAnimals,
                                          onChange: (O) => E(g, 'helpsAnimals', O.target.checked),
                                        }),
                                        'Helps Animals',
                                      ],
                                    }),
                                    p.jsxs('label', {
                                      children: [
                                        p.jsx('input', {
                                          type: 'checkbox',
                                          checked: j.helpsFutureHumans,
                                          onChange: (O) =>
                                            E(g, 'helpsFutureHumans', O.target.checked),
                                        }),
                                        'Helps Future Humans',
                                      ],
                                    }),
                                    p.jsxs('label', {
                                      children: [
                                        p.jsx('input', {
                                          type: 'checkbox',
                                          checked: j.isSpeculative,
                                          onChange: (O) => E(g, 'isSpeculative', O.target.checked),
                                        }),
                                        'Is Speculative',
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            g
                          )
                        ),
                      ],
                    }),
                    p.jsxs('section', {
                      className: Qe.section,
                      children: [
                        p.jsx('h3', { children: 'DIMENSIONS (from questions)' }),
                        Object.entries(k.dimensions).map(([g, j]) =>
                          p.jsxs(
                            'div',
                            {
                              className: Qe.multiplierGroup,
                              children: [
                                p.jsx('h4', { children: j.name }),
                                p.jsx('p', {
                                  className: Qe.dimInfo,
                                  children:
                                    j.applyAs === 'multiplier'
                                      ? `Multiplier when: ${j.appliesWhen}`
                                      : `Exponent on: ${j.appliesTo}`,
                                }),
                                p.jsx('div', {
                                  className: Qe.multiplierRow,
                                  children: Object.entries(j.options).map(([O, I]) =>
                                    p.jsxs(
                                      'label',
                                      {
                                        children: [
                                          O,
                                          ':',
                                          p.jsx('input', {
                                            type: 'number',
                                            step: j.applyAs === 'exponent' ? '0.1' : '0.01',
                                            value: I,
                                            onChange: (R) => L(g, O, R.target.value),
                                          }),
                                        ],
                                      },
                                      O
                                    )
                                  ),
                                }),
                              ],
                            },
                            g
                          )
                        ),
                      ],
                    }),
                  ],
                }),
                p.jsx('div', {
                  className: Qe.footer,
                  children: p.jsx('button', {
                    className: Qe.saveButton,
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
  ih = () => {
    const { currentStep: v, currentQuestion: d, setDebugConfig: s } = Gl();
    let k = null;
    return (
      v === 'welcome'
        ? (k = p.jsx(Xf, {}))
        : v === 'results'
          ? (k = p.jsx($m, {}))
          : d && (k = p.jsx(Ip, {})),
      p.jsxs(p.Fragment, { children: [k, p.jsx(oh, { onConfigChange: s })] })
    );
  };
function uh() {
  return p.jsx(Mf, { children: p.jsx(ih, {}) });
}
_f.createRoot(document.getElementById('root')).render(
  p.jsx(X.StrictMode, { children: p.jsx(uh, {}) })
);
