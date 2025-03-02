/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./node_modules/react-dom/cjs/react-dom.production.js":(__unused_webpack_module,exports,__webpack_require__)=>{eval('/**\n * @license React\n * react-dom.production.js\n *\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\nvar React = __webpack_require__(/*! react */ "./node_modules/react/index.js");\nfunction formatProdErrorMessage(code) {\n  var url = "https://react.dev/errors/" + code;\n  if (1 < arguments.length) {\n    url += "?args[]=" + encodeURIComponent(arguments[1]);\n    for (var i = 2; i < arguments.length; i++)\n      url += "&args[]=" + encodeURIComponent(arguments[i]);\n  }\n  return (\n    "Minified React error #" +\n    code +\n    "; visit " +\n    url +\n    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."\n  );\n}\nfunction noop() {}\nvar Internals = {\n    d: {\n      f: noop,\n      r: function () {\n        throw Error(formatProdErrorMessage(522));\n      },\n      D: noop,\n      C: noop,\n      L: noop,\n      m: noop,\n      X: noop,\n      S: noop,\n      M: noop\n    },\n    p: 0,\n    findDOMNode: null\n  },\n  REACT_PORTAL_TYPE = Symbol.for("react.portal");\nfunction createPortal$1(children, containerInfo, implementation) {\n  var key =\n    3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;\n  return {\n    $$typeof: REACT_PORTAL_TYPE,\n    key: null == key ? null : "" + key,\n    children: children,\n    containerInfo: containerInfo,\n    implementation: implementation\n  };\n}\nvar ReactSharedInternals =\n  React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;\nfunction getCrossOriginStringAs(as, input) {\n  if ("font" === as) return "";\n  if ("string" === typeof input)\n    return "use-credentials" === input ? input : "";\n}\nexports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =\n  Internals;\nexports.createPortal = function (children, container) {\n  var key =\n    2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;\n  if (\n    !container ||\n    (1 !== container.nodeType &&\n      9 !== container.nodeType &&\n      11 !== container.nodeType)\n  )\n    throw Error(formatProdErrorMessage(299));\n  return createPortal$1(children, container, null, key);\n};\nexports.flushSync = function (fn) {\n  var previousTransition = ReactSharedInternals.T,\n    previousUpdatePriority = Internals.p;\n  try {\n    if (((ReactSharedInternals.T = null), (Internals.p = 2), fn)) return fn();\n  } finally {\n    (ReactSharedInternals.T = previousTransition),\n      (Internals.p = previousUpdatePriority),\n      Internals.d.f();\n  }\n};\nexports.preconnect = function (href, options) {\n  "string" === typeof href &&\n    (options\n      ? ((options = options.crossOrigin),\n        (options =\n          "string" === typeof options\n            ? "use-credentials" === options\n              ? options\n              : ""\n            : void 0))\n      : (options = null),\n    Internals.d.C(href, options));\n};\nexports.prefetchDNS = function (href) {\n  "string" === typeof href && Internals.d.D(href);\n};\nexports.preinit = function (href, options) {\n  if ("string" === typeof href && options && "string" === typeof options.as) {\n    var as = options.as,\n      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin),\n      integrity =\n        "string" === typeof options.integrity ? options.integrity : void 0,\n      fetchPriority =\n        "string" === typeof options.fetchPriority\n          ? options.fetchPriority\n          : void 0;\n    "style" === as\n      ? Internals.d.S(\n          href,\n          "string" === typeof options.precedence ? options.precedence : void 0,\n          {\n            crossOrigin: crossOrigin,\n            integrity: integrity,\n            fetchPriority: fetchPriority\n          }\n        )\n      : "script" === as &&\n        Internals.d.X(href, {\n          crossOrigin: crossOrigin,\n          integrity: integrity,\n          fetchPriority: fetchPriority,\n          nonce: "string" === typeof options.nonce ? options.nonce : void 0\n        });\n  }\n};\nexports.preinitModule = function (href, options) {\n  if ("string" === typeof href)\n    if ("object" === typeof options && null !== options) {\n      if (null == options.as || "script" === options.as) {\n        var crossOrigin = getCrossOriginStringAs(\n          options.as,\n          options.crossOrigin\n        );\n        Internals.d.M(href, {\n          crossOrigin: crossOrigin,\n          integrity:\n            "string" === typeof options.integrity ? options.integrity : void 0,\n          nonce: "string" === typeof options.nonce ? options.nonce : void 0\n        });\n      }\n    } else null == options && Internals.d.M(href);\n};\nexports.preload = function (href, options) {\n  if (\n    "string" === typeof href &&\n    "object" === typeof options &&\n    null !== options &&\n    "string" === typeof options.as\n  ) {\n    var as = options.as,\n      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);\n    Internals.d.L(href, as, {\n      crossOrigin: crossOrigin,\n      integrity:\n        "string" === typeof options.integrity ? options.integrity : void 0,\n      nonce: "string" === typeof options.nonce ? options.nonce : void 0,\n      type: "string" === typeof options.type ? options.type : void 0,\n      fetchPriority:\n        "string" === typeof options.fetchPriority\n          ? options.fetchPriority\n          : void 0,\n      referrerPolicy:\n        "string" === typeof options.referrerPolicy\n          ? options.referrerPolicy\n          : void 0,\n      imageSrcSet:\n        "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,\n      imageSizes:\n        "string" === typeof options.imageSizes ? options.imageSizes : void 0,\n      media: "string" === typeof options.media ? options.media : void 0\n    });\n  }\n};\nexports.preloadModule = function (href, options) {\n  if ("string" === typeof href)\n    if (options) {\n      var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);\n      Internals.d.m(href, {\n        as:\n          "string" === typeof options.as && "script" !== options.as\n            ? options.as\n            : void 0,\n        crossOrigin: crossOrigin,\n        integrity:\n          "string" === typeof options.integrity ? options.integrity : void 0\n      });\n    } else Internals.d.m(href);\n};\nexports.requestFormReset = function (form) {\n  Internals.d.r(form);\n};\nexports.unstable_batchedUpdates = function (fn, a) {\n  return fn(a);\n};\nexports.useFormState = function (action, initialState, permalink) {\n  return ReactSharedInternals.H.useFormState(action, initialState, permalink);\n};\nexports.useFormStatus = function () {\n  return ReactSharedInternals.H.useHostTransitionStatus();\n};\nexports.version = "19.0.0";\n\n\n//# sourceURL=webpack://frontend/./node_modules/react-dom/cjs/react-dom.production.js?')},"./node_modules/react-dom/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval("\n\nfunction checkDCE() {\n  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */\n  if (\n    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||\n    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'\n  ) {\n    return;\n  }\n  if (false) {}\n  try {\n    // Verify that the code above has been dead code eliminated (DCE'd).\n    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);\n  } catch (err) {\n    // DevTools shouldn't crash React, no matter what.\n    // We should still report in case we break this code.\n    console.error(err);\n  }\n}\n\nif (true) {\n  // DCE check should happen before ReactDOM bundle executes so that\n  // DevTools can report bad minification during injection.\n  checkDCE();\n  module.exports = __webpack_require__(/*! ./cjs/react-dom.production.js */ \"./node_modules/react-dom/cjs/react-dom.production.js\");\n} else {}\n\n\n//# sourceURL=webpack://frontend/./node_modules/react-dom/index.js?")},"./node_modules/react/cjs/react.production.js":(__unused_webpack_module,exports)=>{eval('/**\n * @license React\n * react.production.js\n *\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\nvar REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),\n  REACT_PORTAL_TYPE = Symbol.for("react.portal"),\n  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),\n  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),\n  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),\n  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),\n  REACT_CONTEXT_TYPE = Symbol.for("react.context"),\n  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),\n  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),\n  REACT_MEMO_TYPE = Symbol.for("react.memo"),\n  REACT_LAZY_TYPE = Symbol.for("react.lazy"),\n  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;\nfunction getIteratorFn(maybeIterable) {\n  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;\n  maybeIterable =\n    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||\n    maybeIterable["@@iterator"];\n  return "function" === typeof maybeIterable ? maybeIterable : null;\n}\nvar ReactNoopUpdateQueue = {\n    isMounted: function () {\n      return !1;\n    },\n    enqueueForceUpdate: function () {},\n    enqueueReplaceState: function () {},\n    enqueueSetState: function () {}\n  },\n  assign = Object.assign,\n  emptyObject = {};\nfunction Component(props, context, updater) {\n  this.props = props;\n  this.context = context;\n  this.refs = emptyObject;\n  this.updater = updater || ReactNoopUpdateQueue;\n}\nComponent.prototype.isReactComponent = {};\nComponent.prototype.setState = function (partialState, callback) {\n  if (\n    "object" !== typeof partialState &&\n    "function" !== typeof partialState &&\n    null != partialState\n  )\n    throw Error(\n      "takes an object of state variables to update or a function which returns an object of state variables."\n    );\n  this.updater.enqueueSetState(this, partialState, callback, "setState");\n};\nComponent.prototype.forceUpdate = function (callback) {\n  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");\n};\nfunction ComponentDummy() {}\nComponentDummy.prototype = Component.prototype;\nfunction PureComponent(props, context, updater) {\n  this.props = props;\n  this.context = context;\n  this.refs = emptyObject;\n  this.updater = updater || ReactNoopUpdateQueue;\n}\nvar pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());\npureComponentPrototype.constructor = PureComponent;\nassign(pureComponentPrototype, Component.prototype);\npureComponentPrototype.isPureReactComponent = !0;\nvar isArrayImpl = Array.isArray,\n  ReactSharedInternals = { H: null, A: null, T: null, S: null },\n  hasOwnProperty = Object.prototype.hasOwnProperty;\nfunction ReactElement(type, key, self, source, owner, props) {\n  self = props.ref;\n  return {\n    $$typeof: REACT_ELEMENT_TYPE,\n    type: type,\n    key: key,\n    ref: void 0 !== self ? self : null,\n    props: props\n  };\n}\nfunction cloneAndReplaceKey(oldElement, newKey) {\n  return ReactElement(\n    oldElement.type,\n    newKey,\n    void 0,\n    void 0,\n    void 0,\n    oldElement.props\n  );\n}\nfunction isValidElement(object) {\n  return (\n    "object" === typeof object &&\n    null !== object &&\n    object.$$typeof === REACT_ELEMENT_TYPE\n  );\n}\nfunction escape(key) {\n  var escaperLookup = { "=": "=0", ":": "=2" };\n  return (\n    "$" +\n    key.replace(/[=:]/g, function (match) {\n      return escaperLookup[match];\n    })\n  );\n}\nvar userProvidedKeyEscapeRegex = /\\/+/g;\nfunction getElementKey(element, index) {\n  return "object" === typeof element && null !== element && null != element.key\n    ? escape("" + element.key)\n    : index.toString(36);\n}\nfunction noop$1() {}\nfunction resolveThenable(thenable) {\n  switch (thenable.status) {\n    case "fulfilled":\n      return thenable.value;\n    case "rejected":\n      throw thenable.reason;\n    default:\n      switch (\n        ("string" === typeof thenable.status\n          ? thenable.then(noop$1, noop$1)\n          : ((thenable.status = "pending"),\n            thenable.then(\n              function (fulfilledValue) {\n                "pending" === thenable.status &&\n                  ((thenable.status = "fulfilled"),\n                  (thenable.value = fulfilledValue));\n              },\n              function (error) {\n                "pending" === thenable.status &&\n                  ((thenable.status = "rejected"), (thenable.reason = error));\n              }\n            )),\n        thenable.status)\n      ) {\n        case "fulfilled":\n          return thenable.value;\n        case "rejected":\n          throw thenable.reason;\n      }\n  }\n  throw thenable;\n}\nfunction mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {\n  var type = typeof children;\n  if ("undefined" === type || "boolean" === type) children = null;\n  var invokeCallback = !1;\n  if (null === children) invokeCallback = !0;\n  else\n    switch (type) {\n      case "bigint":\n      case "string":\n      case "number":\n        invokeCallback = !0;\n        break;\n      case "object":\n        switch (children.$$typeof) {\n          case REACT_ELEMENT_TYPE:\n          case REACT_PORTAL_TYPE:\n            invokeCallback = !0;\n            break;\n          case REACT_LAZY_TYPE:\n            return (\n              (invokeCallback = children._init),\n              mapIntoArray(\n                invokeCallback(children._payload),\n                array,\n                escapedPrefix,\n                nameSoFar,\n                callback\n              )\n            );\n        }\n    }\n  if (invokeCallback)\n    return (\n      (callback = callback(children)),\n      (invokeCallback =\n        "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar),\n      isArrayImpl(callback)\n        ? ((escapedPrefix = ""),\n          null != invokeCallback &&\n            (escapedPrefix =\n              invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),\n          mapIntoArray(callback, array, escapedPrefix, "", function (c) {\n            return c;\n          }))\n        : null != callback &&\n          (isValidElement(callback) &&\n            (callback = cloneAndReplaceKey(\n              callback,\n              escapedPrefix +\n                (null == callback.key ||\n                (children && children.key === callback.key)\n                  ? ""\n                  : ("" + callback.key).replace(\n                      userProvidedKeyEscapeRegex,\n                      "$&/"\n                    ) + "/") +\n                invokeCallback\n            )),\n          array.push(callback)),\n      1\n    );\n  invokeCallback = 0;\n  var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";\n  if (isArrayImpl(children))\n    for (var i = 0; i < children.length; i++)\n      (nameSoFar = children[i]),\n        (type = nextNamePrefix + getElementKey(nameSoFar, i)),\n        (invokeCallback += mapIntoArray(\n          nameSoFar,\n          array,\n          escapedPrefix,\n          type,\n          callback\n        ));\n  else if (((i = getIteratorFn(children)), "function" === typeof i))\n    for (\n      children = i.call(children), i = 0;\n      !(nameSoFar = children.next()).done;\n\n    )\n      (nameSoFar = nameSoFar.value),\n        (type = nextNamePrefix + getElementKey(nameSoFar, i++)),\n        (invokeCallback += mapIntoArray(\n          nameSoFar,\n          array,\n          escapedPrefix,\n          type,\n          callback\n        ));\n  else if ("object" === type) {\n    if ("function" === typeof children.then)\n      return mapIntoArray(\n        resolveThenable(children),\n        array,\n        escapedPrefix,\n        nameSoFar,\n        callback\n      );\n    array = String(children);\n    throw Error(\n      "Objects are not valid as a React child (found: " +\n        ("[object Object]" === array\n          ? "object with keys {" + Object.keys(children).join(", ") + "}"\n          : array) +\n        "). If you meant to render a collection of children, use an array instead."\n    );\n  }\n  return invokeCallback;\n}\nfunction mapChildren(children, func, context) {\n  if (null == children) return children;\n  var result = [],\n    count = 0;\n  mapIntoArray(children, result, "", "", function (child) {\n    return func.call(context, child, count++);\n  });\n  return result;\n}\nfunction lazyInitializer(payload) {\n  if (-1 === payload._status) {\n    var ctor = payload._result;\n    ctor = ctor();\n    ctor.then(\n      function (moduleObject) {\n        if (0 === payload._status || -1 === payload._status)\n          (payload._status = 1), (payload._result = moduleObject);\n      },\n      function (error) {\n        if (0 === payload._status || -1 === payload._status)\n          (payload._status = 2), (payload._result = error);\n      }\n    );\n    -1 === payload._status && ((payload._status = 0), (payload._result = ctor));\n  }\n  if (1 === payload._status) return payload._result.default;\n  throw payload._result;\n}\nvar reportGlobalError =\n  "function" === typeof reportError\n    ? reportError\n    : function (error) {\n        if (\n          "object" === typeof window &&\n          "function" === typeof window.ErrorEvent\n        ) {\n          var event = new window.ErrorEvent("error", {\n            bubbles: !0,\n            cancelable: !0,\n            message:\n              "object" === typeof error &&\n              null !== error &&\n              "string" === typeof error.message\n                ? String(error.message)\n                : String(error),\n            error: error\n          });\n          if (!window.dispatchEvent(event)) return;\n        } else if (\n          "object" === typeof process &&\n          "function" === typeof process.emit\n        ) {\n          process.emit("uncaughtException", error);\n          return;\n        }\n        console.error(error);\n      };\nfunction noop() {}\nexports.Children = {\n  map: mapChildren,\n  forEach: function (children, forEachFunc, forEachContext) {\n    mapChildren(\n      children,\n      function () {\n        forEachFunc.apply(this, arguments);\n      },\n      forEachContext\n    );\n  },\n  count: function (children) {\n    var n = 0;\n    mapChildren(children, function () {\n      n++;\n    });\n    return n;\n  },\n  toArray: function (children) {\n    return (\n      mapChildren(children, function (child) {\n        return child;\n      }) || []\n    );\n  },\n  only: function (children) {\n    if (!isValidElement(children))\n      throw Error(\n        "React.Children.only expected to receive a single React element child."\n      );\n    return children;\n  }\n};\nexports.Component = Component;\nexports.Fragment = REACT_FRAGMENT_TYPE;\nexports.Profiler = REACT_PROFILER_TYPE;\nexports.PureComponent = PureComponent;\nexports.StrictMode = REACT_STRICT_MODE_TYPE;\nexports.Suspense = REACT_SUSPENSE_TYPE;\nexports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =\n  ReactSharedInternals;\nexports.act = function () {\n  throw Error("act(...) is not supported in production builds of React.");\n};\nexports.cache = function (fn) {\n  return function () {\n    return fn.apply(null, arguments);\n  };\n};\nexports.cloneElement = function (element, config, children) {\n  if (null === element || void 0 === element)\n    throw Error(\n      "The argument must be a React element, but you passed " + element + "."\n    );\n  var props = assign({}, element.props),\n    key = element.key,\n    owner = void 0;\n  if (null != config)\n    for (propName in (void 0 !== config.ref && (owner = void 0),\n    void 0 !== config.key && (key = "" + config.key),\n    config))\n      !hasOwnProperty.call(config, propName) ||\n        "key" === propName ||\n        "__self" === propName ||\n        "__source" === propName ||\n        ("ref" === propName && void 0 === config.ref) ||\n        (props[propName] = config[propName]);\n  var propName = arguments.length - 2;\n  if (1 === propName) props.children = children;\n  else if (1 < propName) {\n    for (var childArray = Array(propName), i = 0; i < propName; i++)\n      childArray[i] = arguments[i + 2];\n    props.children = childArray;\n  }\n  return ReactElement(element.type, key, void 0, void 0, owner, props);\n};\nexports.createContext = function (defaultValue) {\n  defaultValue = {\n    $$typeof: REACT_CONTEXT_TYPE,\n    _currentValue: defaultValue,\n    _currentValue2: defaultValue,\n    _threadCount: 0,\n    Provider: null,\n    Consumer: null\n  };\n  defaultValue.Provider = defaultValue;\n  defaultValue.Consumer = {\n    $$typeof: REACT_CONSUMER_TYPE,\n    _context: defaultValue\n  };\n  return defaultValue;\n};\nexports.createElement = function (type, config, children) {\n  var propName,\n    props = {},\n    key = null;\n  if (null != config)\n    for (propName in (void 0 !== config.key && (key = "" + config.key), config))\n      hasOwnProperty.call(config, propName) &&\n        "key" !== propName &&\n        "__self" !== propName &&\n        "__source" !== propName &&\n        (props[propName] = config[propName]);\n  var childrenLength = arguments.length - 2;\n  if (1 === childrenLength) props.children = children;\n  else if (1 < childrenLength) {\n    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)\n      childArray[i] = arguments[i + 2];\n    props.children = childArray;\n  }\n  if (type && type.defaultProps)\n    for (propName in ((childrenLength = type.defaultProps), childrenLength))\n      void 0 === props[propName] &&\n        (props[propName] = childrenLength[propName]);\n  return ReactElement(type, key, void 0, void 0, null, props);\n};\nexports.createRef = function () {\n  return { current: null };\n};\nexports.forwardRef = function (render) {\n  return { $$typeof: REACT_FORWARD_REF_TYPE, render: render };\n};\nexports.isValidElement = isValidElement;\nexports.lazy = function (ctor) {\n  return {\n    $$typeof: REACT_LAZY_TYPE,\n    _payload: { _status: -1, _result: ctor },\n    _init: lazyInitializer\n  };\n};\nexports.memo = function (type, compare) {\n  return {\n    $$typeof: REACT_MEMO_TYPE,\n    type: type,\n    compare: void 0 === compare ? null : compare\n  };\n};\nexports.startTransition = function (scope) {\n  var prevTransition = ReactSharedInternals.T,\n    currentTransition = {};\n  ReactSharedInternals.T = currentTransition;\n  try {\n    var returnValue = scope(),\n      onStartTransitionFinish = ReactSharedInternals.S;\n    null !== onStartTransitionFinish &&\n      onStartTransitionFinish(currentTransition, returnValue);\n    "object" === typeof returnValue &&\n      null !== returnValue &&\n      "function" === typeof returnValue.then &&\n      returnValue.then(noop, reportGlobalError);\n  } catch (error) {\n    reportGlobalError(error);\n  } finally {\n    ReactSharedInternals.T = prevTransition;\n  }\n};\nexports.unstable_useCacheRefresh = function () {\n  return ReactSharedInternals.H.useCacheRefresh();\n};\nexports.use = function (usable) {\n  return ReactSharedInternals.H.use(usable);\n};\nexports.useActionState = function (action, initialState, permalink) {\n  return ReactSharedInternals.H.useActionState(action, initialState, permalink);\n};\nexports.useCallback = function (callback, deps) {\n  return ReactSharedInternals.H.useCallback(callback, deps);\n};\nexports.useContext = function (Context) {\n  return ReactSharedInternals.H.useContext(Context);\n};\nexports.useDebugValue = function () {};\nexports.useDeferredValue = function (value, initialValue) {\n  return ReactSharedInternals.H.useDeferredValue(value, initialValue);\n};\nexports.useEffect = function (create, deps) {\n  return ReactSharedInternals.H.useEffect(create, deps);\n};\nexports.useId = function () {\n  return ReactSharedInternals.H.useId();\n};\nexports.useImperativeHandle = function (ref, create, deps) {\n  return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);\n};\nexports.useInsertionEffect = function (create, deps) {\n  return ReactSharedInternals.H.useInsertionEffect(create, deps);\n};\nexports.useLayoutEffect = function (create, deps) {\n  return ReactSharedInternals.H.useLayoutEffect(create, deps);\n};\nexports.useMemo = function (create, deps) {\n  return ReactSharedInternals.H.useMemo(create, deps);\n};\nexports.useOptimistic = function (passthrough, reducer) {\n  return ReactSharedInternals.H.useOptimistic(passthrough, reducer);\n};\nexports.useReducer = function (reducer, initialArg, init) {\n  return ReactSharedInternals.H.useReducer(reducer, initialArg, init);\n};\nexports.useRef = function (initialValue) {\n  return ReactSharedInternals.H.useRef(initialValue);\n};\nexports.useState = function (initialState) {\n  return ReactSharedInternals.H.useState(initialState);\n};\nexports.useSyncExternalStore = function (\n  subscribe,\n  getSnapshot,\n  getServerSnapshot\n) {\n  return ReactSharedInternals.H.useSyncExternalStore(\n    subscribe,\n    getSnapshot,\n    getServerSnapshot\n  );\n};\nexports.useTransition = function () {\n  return ReactSharedInternals.H.useTransition();\n};\nexports.version = "19.0.0";\n\n\n//# sourceURL=webpack://frontend/./node_modules/react/cjs/react.production.js?')},"./node_modules/react/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval('\n\nif (true) {\n  module.exports = __webpack_require__(/*! ./cjs/react.production.js */ "./node_modules/react/cjs/react.production.js");\n} else {}\n\n\n//# sourceURL=webpack://frontend/./node_modules/react/index.js?')},"./src/components/App.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n  }\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Hello, World!");\n  }\n}\nconst appDiv = document.getElementById(\'app\');\n(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), appDiv);\n\n//# sourceURL=webpack://frontend/./src/components/App.js?')},"./src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");\n\n\n//# sourceURL=webpack://frontend/./src/index.js?')}},__webpack_module_cache__={};function __webpack_require__(n){var e=__webpack_module_cache__[n];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[n]={exports:{}};return __webpack_modules__[n](r,r.exports,__webpack_require__),r.exports}__webpack_require__.d=(n,e)=>{for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},__webpack_require__.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),__webpack_require__.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.js")})();