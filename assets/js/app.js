/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../modules/system/assets/js/snowboard/abstracts/PluginBase.js":
/*!************************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/abstracts/PluginBase.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PluginBase)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Plugin base abstract.
 *
 * This class provides the base functionality for all plugins.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var PluginBase = /*#__PURE__*/function () {
  /**
   * Constructor.
   *
   * The constructor is provided the Snowboard framework instance, and should not be overwritten
   * unless you absolutely know what you're doing.
   *
   * @param {Snowboard} snowboard
   */
  function PluginBase(snowboard) {
    _classCallCheck(this, PluginBase);
    this.snowboard = snowboard;
  }

  /**
   * Plugin constructor.
   *
   * This method should be treated as the true constructor of a plugin, and can be overwritten.
   * It will be called straight after construction.
   */
  return _createClass(PluginBase, [{
    key: "construct",
    value: function construct() {}

    /**
     * Defines the required plugins for this specific module to work.
     *
     * @returns {string[]} An array of plugins required for this module to work, as strings.
     */
  }, {
    key: "dependencies",
    value: function dependencies() {
      return [];
    }

    /**
     * Defines the listener methods for global events.
     *
     * @returns {Object}
     */
  }, {
    key: "listens",
    value: function listens() {
      return {};
    }

    /**
     * Plugin destructor.
     *
     * Fired when this plugin is removed. Can be manually called if you have another scenario for
     * destruction, ie. the element attached to the plugin is removed or changed.
     */
  }, {
    key: "destruct",
    value: function destruct() {
      this.detach();
      delete this.snowboard;
    }

    /**
     * Plugin destructor (old method name).
     *
     * Allows previous usage of the "destructor" method to still work.
     */
  }, {
    key: "destructor",
    value: function destructor() {
      this.destruct();
    }
  }]);
}();


/***/ }),

/***/ "../../modules/system/assets/js/snowboard/abstracts/Singleton.js":
/*!***********************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/abstracts/Singleton.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Singleton)
/* harmony export */ });
/* harmony import */ var _PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginBase */ "../../modules/system/assets/js/snowboard/abstracts/PluginBase.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Singleton plugin abstract.
 *
 * This is a special definition class that the Snowboard framework will use to interpret the current plugin as a
 * "singleton". This will ensure that only one instance of the plugin class is used across the board.
 *
 * Singletons are initialised on the "domReady" event by default.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Singleton = /*#__PURE__*/function (_PluginBase) {
  function Singleton() {
    _classCallCheck(this, Singleton);
    return _callSuper(this, Singleton, arguments);
  }
  _inherits(Singleton, _PluginBase);
  return _createClass(Singleton);
}(_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../modules/system/assets/js/snowboard/ajax/Request.js":
/*!****************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/ajax/Request.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Request)
/* harmony export */ });
/* harmony import */ var _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/PluginBase */ "../../modules/system/assets/js/snowboard/abstracts/PluginBase.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Request plugin.
 *
 * This is the default AJAX handler which will run using the `fetch()` method that is default in modern browsers.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Request = /*#__PURE__*/function (_PluginBase) {
  function Request() {
    _classCallCheck(this, Request);
    return _callSuper(this, Request, arguments);
  }
  _inherits(Request, _PluginBase);
  return _createClass(Request, [{
    key: "construct",
    value:
    /**
     * Constructor.
     *
     * The constructor accepts 2 or 3 parameters.
     *
     * If 2 parameters are provided, the first parameter is the handler name and the second
     * parameter is the options. This assumes that this is a detached AJAX request not connected to
     * an element.
     *
     * If 3 parameters are provided, the first parameter is an element or a selector, and the second
     * and third parameters are the handler and options, respectively.
     *
     * @param {HTMLElement|string} element
     * @param {string|Object} handler
     * @param {Object} options
     */
    function construct(element, handler, options) {
      var _this = this;
      if (typeof element === 'string') {
        // Allow the element to be a handler name.
        // This assumes the request is being made against no element, and the handler parameter
        // will contain options.
        if (this.isHandlerName(element)) {
          this.element = null;
          this.handler = element;
          this.options = handler || {};
        } else {
          var matchedElement = document.querySelector(element);
          if (matchedElement === null) {
            throw new Error("No element was found with the given selector: ".concat(element));
          }
          this.element = matchedElement;
          this.handler = handler;
          this.options = options || {};
        }
      } else {
        this.element = element;
        this.handler = handler;
        this.options = options || {};
      }
      this.fetchOptions = {};
      this.responseData = null;
      this.responseError = null;
      this.cancelled = false;
      this.checkRequest();
      if (!this.snowboard.globalEvent('ajaxSetup', this)) {
        this.cancelled = true;
        return;
      }
      if (this.element) {
        var event = new Event('ajaxSetup', {
          cancelable: true
        });
        event.request = this;
        this.element.dispatchEvent(event);
        if (event.defaultPrevented) {
          this.cancelled = true;
          return;
        }
      }
      if (!this.doClientValidation()) {
        this.cancelled = true;
        return;
      }
      if (this.confirm) {
        this.doConfirm().then(function (confirmed) {
          if (confirmed) {
            _this.doAjax().then(function (response) {
              if (response.cancelled) {
                _this.cancelled = true;
                _this.complete();
                return;
              }
              _this.responseData = response;
              _this.processUpdate(response).then(function () {
                if (response.X_WINTER_SUCCESS === false) {
                  _this.processError(response);
                } else {
                  _this.processResponse(response);
                }
              });
            }, function (error) {
              _this.responseError = error;
              _this.processError(error);
            });
          }
        });
      } else {
        this.doAjax().then(function (response) {
          if (response.cancelled) {
            _this.cancelled = true;
            _this.complete();
            return;
          }
          _this.responseData = response;
          _this.processUpdate(response).then(function () {
            if (response.X_WINTER_SUCCESS === false) {
              _this.processError(response);
            } else {
              _this.processResponse(response);
            }
          });
        }, function (error) {
          _this.responseError = error;
          _this.processError(error);
        });
      }
    }

    /**
     * Dependencies for this plugin.
     *
     * @returns {string[]}
     */
  }, {
    key: "dependencies",
    value: function dependencies() {
      return ['cookie', 'jsonParser'];
    }

    /**
     * Validates the element and handler given in the request.
     */
  }, {
    key: "checkRequest",
    value: function checkRequest() {
      if (this.element && this.element instanceof Element === false) {
        throw new Error('The element provided must be an Element instance');
      }
      if (this.handler === undefined) {
        throw new Error('The AJAX handler name is not specified.');
      }
      if (!this.isHandlerName(this.handler)) {
        throw new Error('Invalid AJAX handler name. The correct handler name format is: "onEvent".');
      }
    }

    /**
     * Creates a Fetch request.
     *
     * This method is made available for plugins to extend or override the default fetch() settings with their own.
     *
     * @returns {Promise}
     */
  }, {
    key: "getFetch",
    value: function getFetch() {
      this.fetchOptions = this.options.fetchOptions !== undefined && _typeof(this.options.fetchOptions) === 'object' ? this.options.fetchOptions : {
        method: 'POST',
        headers: this.headers,
        body: this.data,
        redirect: 'follow',
        mode: 'same-origin'
      };
      this.snowboard.globalEvent('ajaxFetchOptions', this.fetchOptions, this);
      return fetch(this.url, this.fetchOptions);
    }

    /**
     * Run client-side validation on the form, if available.
     *
     * @returns {boolean}
     */
  }, {
    key: "doClientValidation",
    value: function doClientValidation() {
      if (this.options.browserValidate === true && this.form) {
        if (this.form.checkValidity() === false) {
          this.form.reportValidity();
          return false;
        }
      }
      return true;
    }

    /**
     * Executes the AJAX query.
     *
     * Returns a Promise object for when the AJAX request is completed.
     *
     * @returns {Promise}
     */
  }, {
    key: "doAjax",
    value: function doAjax() {
      var _this2 = this;
      // Allow plugins to cancel the AJAX request before sending
      if (this.snowboard.globalEvent('ajaxBeforeSend', this) === false) {
        return Promise.resolve({
          cancelled: true
        });
      }
      var ajaxPromise = new Promise(function (resolve, reject) {
        _this2.getFetch().then(function (response) {
          if (!response.ok && response.status !== 406) {
            if (response.headers.has('Content-Type') && response.headers.get('Content-Type').includes('/json')) {
              response.json().then(function (responseData) {
                if (responseData.message && responseData.exception) {
                  reject(_this2.renderError(responseData.message, responseData.exception, responseData.file, responseData.line, responseData.trace));
                } else {
                  reject(responseData);
                }
              }, function (error) {
                reject(_this2.renderError("Unable to parse JSON response: ".concat(error)));
              });
            } else {
              response.text().then(function (responseText) {
                reject(_this2.renderError(responseText));
              }, function (error) {
                reject(_this2.renderError("Unable to process response: ".concat(error)));
              });
            }
            return;
          }
          if (response.headers.has('Content-Type') && response.headers.get('Content-Type').includes('/json')) {
            response.json().then(function (responseData) {
              resolve(_objectSpread(_objectSpread({}, responseData), {}, {
                X_WINTER_SUCCESS: response.status !== 406,
                X_WINTER_RESPONSE_CODE: response.status
              }));
            }, function (error) {
              reject(_this2.renderError("Unable to parse JSON response: ".concat(error)));
            });
          } else {
            response.text().then(function (responseData) {
              resolve(responseData);
            }, function (error) {
              reject(_this2.renderError("Unable to process response: ".concat(error)));
            });
          }
        }, function (responseError) {
          reject(_this2.renderError("Unable to retrieve a response from the server: ".concat(responseError)));
        });
      });
      this.snowboard.globalEvent('ajaxStart', ajaxPromise, this);
      if (this.element) {
        var event = new Event('ajaxPromise');
        event.promise = ajaxPromise;
        this.element.dispatchEvent(event);
      }
      return ajaxPromise;
    }

    /**
     * Prepares for updating the partials from the AJAX response.
     *
     * If any partials are returned from the AJAX response, this method will also action the partial updates.
     *
     * Returns a Promise object which tracks when the partial update is complete.
     *
     * @param {Object} response
     * @returns {Promise}
     */
  }, {
    key: "processUpdate",
    value: function processUpdate(response) {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        if (typeof _this3.options.beforeUpdate === 'function') {
          if (_this3.options.beforeUpdate.apply(_this3, [response]) === false) {
            resolve();
            return;
          }
        }

        // Extract partial information
        var partials = {};
        Object.entries(response).forEach(function (entry) {
          var _entry = _slicedToArray(entry, 2),
            key = _entry[0],
            value = _entry[1];
          if (key.substr(0, 8) !== 'X_WINTER') {
            partials[key] = value;
          }
        });
        if (Object.keys(partials).length === 0) {
          if (response.X_WINTER_ASSETS) {
            _this3.processAssets(response.X_WINTER_ASSETS).then(function () {
              resolve();
            }, function () {
              reject();
            });
          } else {
            resolve();
          }
          return;
        }
        var promises = _this3.snowboard.globalPromiseEvent('ajaxBeforeUpdate', response, _this3);
        promises.then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!response.X_WINTER_ASSETS) {
                  _context.next = 3;
                  break;
                }
                _context.next = 3;
                return _this3.processAssets(response.X_WINTER_ASSETS);
              case 3:
                _this3.doUpdate(partials).then(function () {
                  // Allow for HTML redraw
                  window.requestAnimationFrame(function () {
                    return resolve();
                  });
                }, function () {
                  reject();
                });
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee);
        })), function () {
          resolve();
        });
      });
    }

    /**
     * Updates the partials with the given content.
     *
     * @param {Object} partials
     * @returns {Promise}
     */
  }, {
    key: "doUpdate",
    value: function doUpdate(partials) {
      var _this4 = this;
      return new Promise(function (resolve) {
        var affected = [];
        Object.entries(partials).forEach(function (entry) {
          var _entry2 = _slicedToArray(entry, 2),
            partial = _entry2[0],
            content = _entry2[1];
          var selector = _this4.options.update && _this4.options.update[partial] ? _this4.options.update[partial] : partial;
          var mode = 'replace';
          if (selector.substr(0, 1) === '@') {
            mode = 'append';
            selector = selector.substr(1);
          } else if (selector.substr(0, 1) === '^') {
            mode = 'prepend';
            selector = selector.substr(1);
          } else if (selector.substr(0, 1) !== '#' && selector.substr(0, 1) !== '.') {
            mode = 'noop';
          }
          var elements = document.querySelectorAll(selector);
          if (elements.length > 0) {
            elements.forEach(function (element) {
              switch (mode) {
                case 'append':
                  element.innerHTML += content;
                  break;
                case 'prepend':
                  element.innerHTML = content + element.innerHTML;
                  break;
                case 'noop':
                  break;
                case 'replace':
                default:
                  element.innerHTML = content;
                  break;
              }
              affected.push(element);

              // Fire update event for each element that is updated
              _this4.snowboard.globalEvent('ajaxUpdate', element, content, _this4);
              var event = new Event('ajaxUpdate');
              event.content = content;
              element.dispatchEvent(event);
            });
          }
        });
        _this4.snowboard.globalEvent('ajaxUpdateComplete', affected, _this4);
        resolve();
      });
    }

    /**
     * Processes the response data.
     *
     * This fires off all necessary processing functions depending on the response, ie. if there's any flash
     * messages to handle, or any redirects to be undertaken.
     *
     * @param {Object} response
     * @returns {void}
     */
  }, {
    key: "processResponse",
    value: function processResponse(response) {
      if (this.options.success && typeof this.options.success === 'function') {
        if (this.options.success(this.responseData, this) === false) {
          return;
        }
      }

      // Allow plugins to cancel any further response handling
      if (this.snowboard.globalEvent('ajaxSuccess', this.responseData, this) === false) {
        return;
      }

      // Allow the element to cancel any further response handling
      if (this.element) {
        var event = new Event('ajaxDone', {
          cancelable: true
        });
        event.responseData = this.responseData;
        event.request = this;
        this.element.dispatchEvent(event);
        if (event.defaultPrevented) {
          return;
        }
      }
      if (this.flash && response.X_WINTER_FLASH_MESSAGES) {
        this.processFlashMessages(response.X_WINTER_FLASH_MESSAGES);
      }

      // Check for a redirect from the response, or use the redirect as specified in the options.
      if (this.redirect || response.X_WINTER_REDIRECT) {
        this.processRedirect(this.redirect || response.X_WINTER_REDIRECT);
        return;
      }
      this.complete();
    }

    /**
     * Processes an error response from the AJAX request.
     *
     * This fires off all necessary processing functions depending on the error response, ie. if there's any error or
     * validation messages to handle.
     *
     * @param {Object|Error} error
     */
  }, {
    key: "processError",
    value: function processError(error) {
      if (this.options.error && typeof this.options.error === 'function') {
        if (this.options.error(this.responseError, this) === false) {
          return;
        }
      }

      // Allow plugins to cancel any further error handling
      if (this.snowboard.globalEvent('ajaxError', this.responseError, this) === false) {
        return;
      }

      // Allow the element to cancel any further error handling
      if (this.element) {
        var event = new Event('ajaxFail', {
          cancelable: true
        });
        event.responseError = this.responseError;
        event.request = this;
        this.element.dispatchEvent(event);
        if (event.defaultPrevented) {
          return;
        }
      }
      if (error instanceof Error) {
        this.processErrorMessage(error.message);
      } else {
        var skipError = false;

        // Process validation errors
        if (error.X_WINTER_ERROR_FIELDS) {
          skipError = this.processValidationErrors(error.X_WINTER_ERROR_FIELDS);
        }
        if (error.X_WINTER_ERROR_MESSAGE && !skipError) {
          this.processErrorMessage(error.X_WINTER_ERROR_MESSAGE);
        }
      }
      this.complete();
    }

    /**
     * Processes a redirect response.
     *
     * By default, this processor will simply redirect the user in their browser.
     *
     * Plugins can augment this functionality from the `ajaxRedirect` event. You may also override this functionality on
     * a per-request basis through the `handleRedirectResponse` callback option. If a `false` is returned from either, the
     * redirect will be cancelled.
     *
     * @param {string} url
     * @returns {void}
     */
  }, {
    key: "processRedirect",
    value: function processRedirect(url) {
      var _this5 = this;
      // Run a custom per-request redirect handler. If false is returned, don't run the redirect.
      if (typeof this.options.handleRedirectResponse === 'function') {
        if (this.options.handleRedirectResponse.apply(this, [url]) === false) {
          return;
        }
      }

      // Allow plugins to cancel the redirect
      if (this.snowboard.globalEvent('ajaxRedirect', url, this) === false) {
        return;
      }

      // Indicate that the AJAX request is finished if we're still on the current page
      // so that the loading indicator for redirects that just change the hash value of
      // the URL instead of leaving the page will properly stop.
      // @see https://github.com/octobercms/october/issues/2780
      window.addEventListener('popstate', function () {
        if (_this5.element) {
          var event = document.createEvent('CustomEvent');
          event.eventName = 'ajaxRedirected';
          _this5.element.dispatchEvent(event);
        }
      }, {
        once: true
      });
      window.location.assign(url);
    }

    /**
     * Processes an error message.
     *
     * By default, this processor will simply alert the user through a simple `alert()` call.
     *
     * Plugins can augment this functionality from the `ajaxErrorMessage` event. You may also override this functionality
     * on a per-request basis through the `handleErrorMessage` callback option. If a `false` is returned from either, the
     * error message handling will be cancelled.
     *
     * @param {string} message
     * @returns {void}
     */
  }, {
    key: "processErrorMessage",
    value: function processErrorMessage(message) {
      // Run a custom per-request handler for error messages. If false is returned, do not process the error messages
      // any further.
      if (typeof this.options.handleErrorMessage === 'function') {
        if (this.options.handleErrorMessage.apply(this, [message]) === false) {
          return;
        }
      }

      // Allow plugins to cancel the error message being shown
      if (this.snowboard.globalEvent('ajaxErrorMessage', message, this) === false) {
        return;
      }

      // By default, show a browser error message
      window.alert(message);
    }

    /**
     * Processes flash messages from the response.
     *
     * By default, no flash message handling will occur.
     *
     * Plugins can augment this functionality from the `ajaxFlashMessages` event. You may also override this functionality
     * on a per-request basis through the `handleFlashMessages` callback option. If a `false` is returned from either, the
     * flash message handling will be cancelled.
     *
     * @param {Object} messages
     * @returns
     */
  }, {
    key: "processFlashMessages",
    value: function processFlashMessages(messages) {
      // Run a custom per-request flash handler. If false is returned, don't show the flash message
      if (typeof this.options.handleFlashMessages === 'function') {
        if (this.options.handleFlashMessages.apply(this, [messages]) === false) {
          return;
        }
      }
      this.snowboard.globalEvent('ajaxFlashMessages', messages, this);
    }

    /**
     * Processes validation errors for fields.
     *
     * By default, no validation error handling will occur.
     *
     * Plugins can augment this functionality from the `ajaxValidationErrors` event. You may also override this functionality
     * on a per-request basis through the `handleValidationErrors` callback option. If a `false` is returned from either, the
     * validation error handling will be cancelled.
     *
     * @param {Object} fields
     * @returns
     */
  }, {
    key: "processValidationErrors",
    value: function processValidationErrors(fields) {
      if (typeof this.options.handleValidationErrors === 'function') {
        if (this.options.handleValidationErrors.apply(this, [this.form, fields]) === false) {
          return true;
        }
      }

      // Allow plugins to cancel the validation errors being handled
      if (this.snowboard.globalEvent('ajaxValidationErrors', this.form, fields, this) === false) {
        return true;
      }
      return false;
    }

    /**
     * Processes assets returned by an AJAX request.
     *
     * By default, no asset processing will occur and this will return a resolved Promise.
     *
     * Plugins can augment this functionality from the `ajaxLoadAssets` event. This event is considered blocking, and
     * allows assets to be loaded or processed before continuing with any additional functionality.
     *
     * @param {Object} assets
     * @returns {Promise}
     */
  }, {
    key: "processAssets",
    value: function processAssets(assets) {
      return this.snowboard.globalPromiseEvent('ajaxLoadAssets', assets);
    }

    /**
     * Confirms the request with the user before proceeding.
     *
     * This is an asynchronous method. By default, it will use the browser's `confirm()` method to query the user to
     * confirm the action. This method will return a Promise with a boolean value depending on whether the user confirmed
     * or not.
     *
     * Plugins can augment this functionality from the `ajaxConfirmMessage` event. You may also override this functionality
     * on a per-request basis through the `handleConfirmMessage` callback option. If a `false` is returned from either,
     * the confirmation is assumed to have been denied.
     *
     * @returns {Promise}
     */
  }, {
    key: "doConfirm",
    value: (function () {
      var _doConfirm = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var promises, fulfilled;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(typeof this.options.handleConfirmMessage === 'function')) {
                _context2.next = 4;
                break;
              }
              if (!(this.options.handleConfirmMessage.apply(this, [this.confirm]) === false)) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return", false);
            case 3:
              return _context2.abrupt("return", true);
            case 4:
              if (!(this.snowboard.listensToEvent('ajaxConfirmMessage').length === 0)) {
                _context2.next = 6;
                break;
              }
              return _context2.abrupt("return", window.confirm(this.confirm));
            case 6:
              // Run custom plugin confirmations
              promises = this.snowboard.globalPromiseEvent('ajaxConfirmMessage', this.confirm, this);
              _context2.prev = 7;
              _context2.next = 10;
              return promises;
            case 10:
              fulfilled = _context2.sent;
              if (!fulfilled) {
                _context2.next = 13;
                break;
              }
              return _context2.abrupt("return", true);
            case 13:
              _context2.next = 18;
              break;
            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](7);
              return _context2.abrupt("return", false);
            case 18:
              return _context2.abrupt("return", false);
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[7, 15]]);
      }));
      function doConfirm() {
        return _doConfirm.apply(this, arguments);
      }
      return doConfirm;
    }()
    /**
     * Fires off completion events for the Request.
     */
    )
  }, {
    key: "complete",
    value: function complete() {
      if (this.options.complete && typeof this.options.complete === 'function') {
        this.options.complete(this.responseData, this);
      }
      this.snowboard.globalEvent('ajaxDone', this.responseData, this);
      if (this.element) {
        var event = new Event('ajaxAlways');
        event.request = this;
        event.responseData = this.responseData;
        event.responseError = this.responseError;
        this.element.dispatchEvent(event);
      }

      // Fire off the destructor
      this.destruct();
    }
  }, {
    key: "form",
    get: function get() {
      if (this.options.form) {
        if (typeof this.options.form === 'string') {
          return document.querySelector(this.options.form);
        }
        return this.options.form;
      }
      if (!this.element) {
        return null;
      }
      if (this.element.tagName === 'FORM') {
        return this.element;
      }
      return this.element.closest('form');
    }
  }, {
    key: "context",
    get: function get() {
      return {
        handler: this.handler,
        options: this.options
      };
    }
  }, {
    key: "headers",
    get: function get() {
      var headers = {
        'X-Requested-With': 'XMLHttpRequest',
        // Keeps compatibility with jQuery AJAX
        'X-WINTER-REQUEST-HANDLER': this.handler,
        'X-WINTER-REQUEST-PARTIALS': this.extractPartials(this.options.update || [])
      };
      if (this.flash) {
        headers['X-WINTER-REQUEST-FLASH'] = 1;
      }
      if (this.xsrfToken) {
        headers['X-XSRF-TOKEN'] = this.xsrfToken;
      }
      return headers;
    }
  }, {
    key: "loading",
    get: function get() {
      return this.options.loading || false;
    }
  }, {
    key: "url",
    get: function get() {
      return this.options.url || window.location.href;
    }
  }, {
    key: "redirect",
    get: function get() {
      return this.options.redirect && this.options.redirect.length ? this.options.redirect : null;
    }
  }, {
    key: "flash",
    get: function get() {
      return this.options.flash || false;
    }
  }, {
    key: "files",
    get: function get() {
      if (this.options.files === true) {
        if (FormData === undefined) {
          this.snowboard.debug('This browser does not support file uploads');
          return false;
        }
        return true;
      }
      return false;
    }
  }, {
    key: "xsrfToken",
    get: function get() {
      return this.snowboard.cookie().get('XSRF-TOKEN');
    }
  }, {
    key: "data",
    get: function get() {
      var data = _typeof(this.options.data) === 'object' ? this.options.data : {};
      var formData = new FormData(this.form || undefined);
      if (Object.keys(data).length > 0) {
        Object.entries(data).forEach(function (entry) {
          var _entry3 = _slicedToArray(entry, 2),
            key = _entry3[0],
            value = _entry3[1];
          formData.append(key, value);
        });
      }
      return formData;
    }
  }, {
    key: "confirm",
    get: function get() {
      return this.options.confirm || false;
    }

    /**
     * Extracts partials.
     *
     * @param {Object} update
     * @returns {string}
     */
  }, {
    key: "extractPartials",
    value: function extractPartials(update) {
      return Object.keys(update).join('&');
    }

    /**
     * Renders an error with useful debug information.
     *
     * This method is used internally when the AJAX request could not be completed or processed correctly due to an error.
     *
     * @param {string} message
     * @param {string} exception
     * @param {string} file
     * @param {Number} line
     * @param {string[]} trace
     * @returns {Error}
     */
  }, {
    key: "renderError",
    value: function renderError(message, exception, file, line, trace) {
      var error = new Error(message);
      error.exception = exception || null;
      error.file = file || null;
      error.line = line || null;
      error.trace = trace || [];
      return error;
    }

    /**
     * Checks a given string to see if it is a valid AJAX handler name.
     *
     * @param {String} name
     * @returns {Boolean}
     */
  }, {
    key: "isHandlerName",
    value: function isHandlerName(name) {
      return /^(?:\w+:{2})?on[A-Z0-9]/.test(name);
    }
  }]);
}(_abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../modules/system/assets/js/snowboard/ajax/handlers/AttributeRequest.js":
/*!**********************************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/ajax/handlers/AttributeRequest.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AttributeRequest)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstracts/Singleton */ "../../modules/system/assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Enable Data Attributes API for AJAX requests.
 *
 * This is an extension of the base AJAX functionality that includes handling of HTML data attributes for processing
 * AJAX requests. It is separated from the base AJAX functionality to allow developers to opt-out of data attribute
 * requests if they do not intend to use them.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var AttributeRequest = /*#__PURE__*/function (_Singleton) {
  function AttributeRequest() {
    _classCallCheck(this, AttributeRequest);
    return _callSuper(this, AttributeRequest, arguments);
  }
  _inherits(AttributeRequest, _Singleton);
  return _createClass(AttributeRequest, [{
    key: "listens",
    value:
    /**
     * Listeners.
     *
     * @returns {Object}
     */
    function listens() {
      return {
        ready: 'ready',
        ajaxSetup: 'onAjaxSetup'
      };
    }

    /**
     * Ready event callback.
     *
     * Attaches handlers to the window to listen for all request interactions.
     */
  }, {
    key: "ready",
    value: function ready() {
      this.attachHandlers();
      this.disableDefaultFormValidation();
    }

    /**
     * Dependencies.
     *
     * @returns {string[]}
     */
  }, {
    key: "dependencies",
    value: function dependencies() {
      return ['request', 'jsonParser'];
    }

    /**
     * Destructor.
     *
     * Detaches all handlers.
     */
  }, {
    key: "destruct",
    value: function destruct() {
      this.detachHandlers();
      _get(_getPrototypeOf(AttributeRequest.prototype), "destruct", this).call(this);
    }

    /**
     * Attaches the necessary handlers for all request interactions.
     */
  }, {
    key: "attachHandlers",
    value: function attachHandlers() {
      var _this = this;
      window.addEventListener('change', function (event) {
        return _this.changeHandler(event);
      });
      window.addEventListener('click', function (event) {
        return _this.clickHandler(event);
      });
      window.addEventListener('keydown', function (event) {
        return _this.keyDownHandler(event);
      });
      window.addEventListener('submit', function (event) {
        return _this.submitHandler(event);
      });
    }

    /**
     * Disables default form validation for AJAX forms.
     *
     * A form that contains a `data-request` attribute to specify an AJAX call without including a `data-browser-validate`
     * attribute means that the AJAX callback function will likely be handling the validation instead.
     */
  }, {
    key: "disableDefaultFormValidation",
    value: function disableDefaultFormValidation() {
      document.querySelectorAll('form[data-request]:not([data-browser-validate])').forEach(function (form) {
        form.setAttribute('novalidate', true);
      });
    }

    /**
     * Detaches the necessary handlers for all request interactions.
     */
  }, {
    key: "detachHandlers",
    value: function detachHandlers() {
      var _this2 = this;
      window.removeEventListener('change', function (event) {
        return _this2.changeHandler(event);
      });
      window.removeEventListener('click', function (event) {
        return _this2.clickHandler(event);
      });
      window.removeEventListener('keydown', function (event) {
        return _this2.keyDownHandler(event);
      });
      window.removeEventListener('submit', function (event) {
        return _this2.submitHandler(event);
      });
    }

    /**
     * Handles changes to select, radio, checkbox and file inputs.
     *
     * @param {Event} event
     */
  }, {
    key: "changeHandler",
    value: function changeHandler(event) {
      // Check that we are changing a valid element
      if (!event.target.matches('select[data-request], input[type=radio][data-request], input[type=checkbox][data-request], input[type=file][data-request]')) {
        return;
      }
      this.processRequestOnElement(event.target);
    }

    /**
     * Handles clicks on hyperlinks and buttons.
     *
     * This event can bubble up the hierarchy to find a suitable request element.
     *
     * @param {Event} event
     */
  }, {
    key: "clickHandler",
    value: function clickHandler(event) {
      var currentElement = event.target;
      while (currentElement && currentElement.tagName !== 'HTML') {
        if (!currentElement.matches('a[data-request], button[data-request], input[type=button][data-request], input[type=submit][data-request]')) {
          currentElement = currentElement.parentElement;
        } else {
          event.preventDefault();
          this.processRequestOnElement(currentElement);
          break;
        }
      }
    }

    /**
     * Handles key presses on inputs
     *
     * @param {Event} event
     */
  }, {
    key: "keyDownHandler",
    value: function keyDownHandler(event) {
      // Check that we are inputting into a valid element
      if (!event.target.matches('input')) {
        return;
      }

      // Check that the input type is valid
      var validTypes = ['checkbox', 'color', 'date', 'datetime', 'datetime-local', 'email', 'image', 'month', 'number', 'password', 'radio', 'range', 'search', 'tel', 'text', 'time', 'url', 'week'];
      if (validTypes.indexOf(event.target.getAttribute('type')) === -1) {
        return;
      }
      if (event.key === 'Enter' && event.target.matches('*[data-request]')) {
        this.processRequestOnElement(event.target);
        event.preventDefault();
        event.stopImmediatePropagation();
      } else if (event.target.matches('*[data-track-input]')) {
        this.trackInput(event.target);
      }
    }

    /**
     * Handles form submissions.
     *
     * @param {Event} event
     */
  }, {
    key: "submitHandler",
    value: function submitHandler(event) {
      // Check that we are submitting a valid form
      if (!event.target.matches('form[data-request]')) {
        return;
      }
      event.preventDefault();
      this.processRequestOnElement(event.target);
    }

    /**
     * Processes a request on a given element, using its data attributes.
     *
     * @param {HTMLElement} element
     */
  }, {
    key: "processRequestOnElement",
    value: function processRequestOnElement(element) {
      var data = element.dataset;
      var handler = String(data.request);
      var options = {
        confirm: 'requestConfirm' in data ? String(data.requestConfirm) : null,
        redirect: 'requestRedirect' in data ? String(data.requestRedirect) : null,
        loading: 'requestLoading' in data ? String(data.requestLoading) : null,
        flash: 'requestFlash' in data,
        files: 'requestFiles' in data,
        browserValidate: 'requestBrowserValidate' in data,
        form: 'requestForm' in data ? String(data.requestForm) : null,
        url: 'requestUrl' in data ? String(data.requestUrl) : null,
        update: 'requestUpdate' in data ? this.parseData(String(data.requestUpdate)) : [],
        data: 'requestData' in data ? this.parseData(String(data.requestData)) : []
      };
      this.snowboard.request(element, handler, options);
    }

    /**
     * Sets up an AJAX request via HTML attributes.
     *
     * @param {Request} request
     */
  }, {
    key: "onAjaxSetup",
    value: function onAjaxSetup(request) {
      if (!request.element) {
        return;
      }
      var fieldName = request.element.getAttribute('name');
      var data = _objectSpread(_objectSpread({}, this.getParentRequestData(request.element)), request.options.data);
      if (request.element && request.element.matches('input, textarea, select, button') && !request.form && fieldName && !request.options.data[fieldName]) {
        data[fieldName] = request.element.value;
      }
      request.options.data = data;
    }

    /**
     * Parses and collates all data from elements up the DOM hierarchy.
     *
     * @param {Element} target
     * @returns {Object}
     */
  }, {
    key: "getParentRequestData",
    value: function getParentRequestData(target) {
      var _this3 = this;
      var elements = [];
      var data = {};
      var currentElement = target;
      while (currentElement.parentElement && currentElement.parentElement.tagName !== 'HTML') {
        elements.push(currentElement.parentElement);
        currentElement = currentElement.parentElement;
      }
      elements.reverse();
      elements.forEach(function (element) {
        var elementData = element.dataset;
        if ('requestData' in elementData) {
          data = _objectSpread(_objectSpread({}, data), _this3.parseData(elementData.requestData));
        }
      });
      return data;
    }

    /**
     * Parses data in the Winter/October JSON format.
     *
     * @param {String} data
     * @returns {Object}
     */
  }, {
    key: "parseData",
    value: function parseData(data) {
      var value;
      if (data === undefined) {
        value = '';
      }
      if (_typeof(value) === 'object') {
        return value;
      }
      try {
        return this.snowboard.jsonparser().parse("{".concat(data, "}"));
      } catch (e) {
        throw new Error("Error parsing the data attribute on element: ".concat(e.message));
      }
    }
  }, {
    key: "trackInput",
    value: function trackInput(element) {
      var _this4 = this;
      var lastValue = element.dataset.lastValue;
      var interval = element.dataset.trackInput || 300;
      if (lastValue !== undefined && lastValue === element.value) {
        return;
      }
      this.resetTrackInputTimer(element);
      element.dataset.inputTimer = window.setTimeout(function () {
        if (element.dataset.request) {
          _this4.processRequestOnElement(element);
          return;
        }

        // Traverse up the hierarchy and find a form that sends an AJAX query
        var currentElement = element;
        while (currentElement.parentElement && currentElement.parentElement.tagName !== 'HTML') {
          currentElement = currentElement.parentElement;
          if (currentElement.tagName === 'FORM' && currentElement.dataset.request) {
            _this4.processRequestOnElement(currentElement);
            break;
          }
        }
      }, interval);
    }
  }, {
    key: "resetTrackInputTimer",
    value: function resetTrackInputTimer(element) {
      if (element.dataset.inputTimer) {
        window.clearTimeout(element.dataset.inputTimer);
        element.dataset.inputTimer = null;
      }
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../modules/system/assets/js/snowboard/extras/AssetLoader.js":
/*!**********************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/extras/AssetLoader.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AssetLoader)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "../../modules/system/assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Asset Loader.
 *
 * Provides simple asset loading functionality for Snowboard, making it easy to pre-load images or
 * include JavaScript or CSS assets on the fly.
 *
 * By default, this loader will listen to any assets that have been requested to load in an AJAX
 * response, such as responses from a component.
 *
 * You can also load assets manually by calling the following:
 *
 * ```js
 * Snowboard.addPlugin('assetLoader', AssetLoader);
 * Snowboard.assetLoader().processAssets(assets);
 * ```
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var AssetLoader = /*#__PURE__*/function (_Singleton) {
  function AssetLoader() {
    _classCallCheck(this, AssetLoader);
    return _callSuper(this, AssetLoader, arguments);
  }
  _inherits(AssetLoader, _Singleton);
  return _createClass(AssetLoader, [{
    key: "listens",
    value:
    /**
     * Event listeners.
     *
     * @returns {Object}
     */
    function listens() {
      return {
        ajaxLoadAssets: 'load'
      };
    }

    /**
     * Dependencies.
     *
     * @returns {Array}
     */
  }, {
    key: "dependencies",
    value: function dependencies() {
      return ['url'];
    }

    /**
     * Process and load assets.
     *
     * The `assets` property of this method requires an object with any of the following keys and an
     * array of paths:
     *
     * - `js`: An array of JavaScript URLs to load
     * - `css`: An array of CSS stylesheet URLs to load
     * - `img`: An array of image URLs to pre-load
     *
     * Both `js` and `css` files will be automatically injected, however `img` files will not.
     *
     * This method will return a Promise that resolves when all required assets are loaded. If an
     * asset fails to load, this Promise will be rejected.
     *
     * ESLint *REALLY* doesn't like this code, but ignore it. It's the only way it works.
     *
     * @param {Object} assets
     * @returns {Promise}
     */
  }, {
    key: "load",
    value: (function () {
      var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(assets) {
        var _iterator, _step, script, _iterator2, _step2, style, _iterator3, _step3, image;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(assets.js && assets.js.length > 0)) {
                _context.next = 24;
                break;
              }
              _iterator = _createForOfIteratorHelper(assets.js);
              _context.prev = 2;
              _iterator.s();
            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 16;
                break;
              }
              script = _step.value;
              _context.prev = 6;
              _context.next = 9;
              return this.loadScript(script);
            case 9:
              _context.next = 14;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](6);
              return _context.abrupt("return", Promise.reject(_context.t0));
            case 14:
              _context.next = 4;
              break;
            case 16:
              _context.next = 21;
              break;
            case 18:
              _context.prev = 18;
              _context.t1 = _context["catch"](2);
              _iterator.e(_context.t1);
            case 21:
              _context.prev = 21;
              _iterator.f();
              return _context.finish(21);
            case 24:
              if (!(assets.css && assets.css.length > 0)) {
                _context.next = 48;
                break;
              }
              _iterator2 = _createForOfIteratorHelper(assets.css);
              _context.prev = 26;
              _iterator2.s();
            case 28:
              if ((_step2 = _iterator2.n()).done) {
                _context.next = 40;
                break;
              }
              style = _step2.value;
              _context.prev = 30;
              _context.next = 33;
              return this.loadStyle(style);
            case 33:
              _context.next = 38;
              break;
            case 35:
              _context.prev = 35;
              _context.t2 = _context["catch"](30);
              return _context.abrupt("return", Promise.reject(_context.t2));
            case 38:
              _context.next = 28;
              break;
            case 40:
              _context.next = 45;
              break;
            case 42:
              _context.prev = 42;
              _context.t3 = _context["catch"](26);
              _iterator2.e(_context.t3);
            case 45:
              _context.prev = 45;
              _iterator2.f();
              return _context.finish(45);
            case 48:
              if (!(assets.img && assets.img.length > 0)) {
                _context.next = 72;
                break;
              }
              _iterator3 = _createForOfIteratorHelper(assets.img);
              _context.prev = 50;
              _iterator3.s();
            case 52:
              if ((_step3 = _iterator3.n()).done) {
                _context.next = 64;
                break;
              }
              image = _step3.value;
              _context.prev = 54;
              _context.next = 57;
              return this.loadImage(image);
            case 57:
              _context.next = 62;
              break;
            case 59:
              _context.prev = 59;
              _context.t4 = _context["catch"](54);
              return _context.abrupt("return", Promise.reject(_context.t4));
            case 62:
              _context.next = 52;
              break;
            case 64:
              _context.next = 69;
              break;
            case 66:
              _context.prev = 66;
              _context.t5 = _context["catch"](50);
              _iterator3.e(_context.t5);
            case 69:
              _context.prev = 69;
              _iterator3.f();
              return _context.finish(69);
            case 72:
              return _context.abrupt("return", Promise.resolve());
            case 73:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[2, 18, 21, 24], [6, 11], [26, 42, 45, 48], [30, 35], [50, 66, 69, 72], [54, 59]]);
      }));
      function load(_x) {
        return _load.apply(this, arguments);
      }
      return load;
    }()
    /**
     * Injects and loads a JavaScript URL into the DOM.
     *
     * The script will be appended before the closing `</body>` tag.
     *
     * @param {String} script
     * @returns {Promise}
     */
    )
  }, {
    key: "loadScript",
    value: function loadScript(script) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        // Resolve script URL
        script = _this.snowboard.url().asset(script);

        // Check that script is not already loaded
        var loaded = document.querySelector("script[src=\"".concat(script, "\"]"));
        if (loaded) {
          resolve();
          return;
        }

        // Create script
        var domScript = document.createElement('script');
        domScript.setAttribute('type', 'text/javascript');
        domScript.setAttribute('src', script);
        domScript.addEventListener('load', function () {
          _this.snowboard.globalEvent('assetLoader.loaded', 'script', script, domScript);
          resolve();
        });
        domScript.addEventListener('error', function () {
          _this.snowboard.globalEvent('assetLoader.error', 'script', script, domScript);
          reject(new Error("Unable to load script file: \"".concat(script, "\"")));
        });
        document.body.append(domScript);
      });
    }

    /**
     * Injects and loads a CSS stylesheet into the DOM.
     *
     * The stylesheet will be appended before the closing `</head>` tag.
     *
     * @param {String} style
     * @returns {Promise}
     */
  }, {
    key: "loadStyle",
    value: function loadStyle(style) {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        // Resolve style URL
        style = _this2.snowboard.url().asset(style);

        // Check that stylesheet is not already loaded
        var loaded = document.querySelector("link[rel=\"stylesheet\"][href=\"".concat(style, "\"]"));
        if (loaded) {
          resolve();
          return;
        }

        // Create stylesheet
        var domCss = document.createElement('link');
        domCss.setAttribute('rel', 'stylesheet');
        domCss.setAttribute('href', style);
        domCss.addEventListener('load', function () {
          _this2.snowboard.globalEvent('assetLoader.loaded', 'style', style, domCss);
          resolve();
        });
        domCss.addEventListener('error', function () {
          _this2.snowboard.globalEvent('assetLoader.error', 'style', style, domCss);
          reject(new Error("Unable to load stylesheet file: \"".concat(style, "\"")));
        });
        document.head.append(domCss);
      });
    }

    /**
     * Pre-loads an image.
     *
     * The image will not be injected into the DOM.
     *
     * @param {String} image
     * @returns {Promise}
     */
  }, {
    key: "loadImage",
    value: function loadImage(image) {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        // Resolve script URL
        image = _this3.snowboard.url().asset(image);
        var img = new Image();
        img.addEventListener('load', function () {
          _this3.snowboard.globalEvent('assetLoader.loaded', 'image', image, img);
          resolve();
        });
        img.addEventListener('error', function () {
          _this3.snowboard.globalEvent('assetLoader.error', 'image', image, img);
          reject(new Error("Unable to load image file: \"".concat(image, "\"")));
        });
        img.src = image;
      });
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../modules/system/assets/js/snowboard/extras/AttachLoading.js":
/*!************************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/extras/AttachLoading.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AttachLoading)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "../../modules/system/assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Allows attaching a loading class on elements that an AJAX request is targeting.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var AttachLoading = /*#__PURE__*/function (_Singleton) {
  function AttachLoading() {
    _classCallCheck(this, AttachLoading);
    return _callSuper(this, AttachLoading, arguments);
  }
  _inherits(AttachLoading, _Singleton);
  return _createClass(AttachLoading, [{
    key: "dependencies",
    value:
    /**
     * Defines dependenices.
     *
     * @returns {string[]}
     */
    function dependencies() {
      return ['request'];
    }

    /**
     * Defines listeners.
     *
     * @returns {Object}
     */
  }, {
    key: "listens",
    value: function listens() {
      return {
        ajaxStart: 'ajaxStart',
        ajaxDone: 'ajaxDone'
      };
    }
  }, {
    key: "ajaxStart",
    value: function ajaxStart(promise, request) {
      var _this = this;
      if (!request.element) {
        return;
      }
      if (request.element.tagName === 'FORM') {
        var loadElements = request.element.querySelectorAll('[data-attach-loading]');
        if (loadElements.length > 0) {
          loadElements.forEach(function (element) {
            element.classList.add(_this.getLoadingClass(element));
          });
        }
      } else if (request.element.dataset.attachLoading !== undefined) {
        request.element.classList.add(this.getLoadingClass(request.element));
      }
    }
  }, {
    key: "ajaxDone",
    value: function ajaxDone(data, request) {
      var _this2 = this;
      if (!request.element) {
        return;
      }
      if (request.element.tagName === 'FORM') {
        var loadElements = request.element.querySelectorAll('[data-attach-loading]');
        if (loadElements.length > 0) {
          loadElements.forEach(function (element) {
            element.classList.remove(_this2.getLoadingClass(element));
          });
        }
      } else if (request.element.dataset.attachLoading !== undefined) {
        request.element.classList.remove(this.getLoadingClass(request.element));
      }
    }
  }, {
    key: "getLoadingClass",
    value: function getLoadingClass(element) {
      return element.dataset.attachLoading !== undefined && element.dataset.attachLoading !== '' ? element.dataset.attachLoading : 'wn-loading';
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../modules/system/assets/js/snowboard/extras/DataConfig.js":
/*!*********************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/extras/DataConfig.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataConfig)
/* harmony export */ });
/* harmony import */ var _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/PluginBase */ "../../modules/system/assets/js/snowboard/abstracts/PluginBase.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Data configuration provider.
 *
 * Provides a mechanism for passing configuration data through an element's data attributes. This
 * is generally used for widgets or UI interactions to configure them.
 *
 * @copyright 2022 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var DataConfig = /*#__PURE__*/function (_PluginBase) {
  function DataConfig() {
    _classCallCheck(this, DataConfig);
    return _callSuper(this, DataConfig, arguments);
  }
  _inherits(DataConfig, _PluginBase);
  return _createClass(DataConfig, [{
    key: "construct",
    value:
    /**
     * Constructor.
     *
     * @param {PluginBase} instance
     * @param {HTMLElement} element
     * @param {Object} localConfig
     */
    function construct(instance, element, localConfig) {
      if (instance instanceof _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"] === false) {
        throw new Error('You must provide a Snowboard plugin to enable data configuration');
      }
      if (element instanceof HTMLElement === false) {
        throw new Error('Data configuration can only be extracted from HTML elements');
      }
      this.instance = instance;
      this.element = element;
      this.localConfig = localConfig || {};
      this.instanceConfig = {};
      this.acceptedConfigs = {};
      this.refresh();
    }

    /**
     * Gets the config for this instance.
     *
     * If the `config` parameter is unspecified, returns the entire configuration.
     *
     * @param {string} config
     */
  }, {
    key: "get",
    value: function get(config) {
      if (config === undefined) {
        return this.instanceConfig;
      }
      if (this.instanceConfig[config] !== undefined) {
        return this.instanceConfig[config];
      }
      return undefined;
    }

    /**
     * Sets the config for this instance.
     *
     * This allows you to override, at runtime, any configuration value as necessary.
     *
     * @param {string} config
     * @param {any} value
     * @param {boolean} persist
     */
  }, {
    key: "set",
    value: function set(config, value, persist) {
      if (config === undefined) {
        throw new Error('You must provide a configuration key to set');
      }
      this.instanceConfig[config] = value;
      if (persist === true) {
        this.element.dataset[config] = value;
        this.localConfig[config] = value;
      }
    }

    /**
     * Refreshes the configuration from the element.
     *
     * This will allow you to make changes to the data config on a DOM level and re-apply them
     * to the config on the JavaScript side.
     */
  }, {
    key: "refresh",
    value: function refresh() {
      this.acceptedConfigs = this.getAcceptedConfigs();
      this.instanceConfig = this.processConfig();
    }

    /**
     * Determines the available configurations that can be set through the data config.
     *
     * If an instance has an `acceptAllDataConfigs` property, set to `true`, then all data
     * attributes will be available as configuration values. This can be a security concern, so
     * tread carefully.
     *
     * Otherwise, available configurations will be determined by the keys available in an object
     * returned by a `defaults()` method in the instance.
     *
     * @returns {string[]|boolean}
     */
  }, {
    key: "getAcceptedConfigs",
    value: function getAcceptedConfigs() {
      if (this.instance.acceptAllDataConfigs !== undefined && this.instance.acceptAllDataConfigs === true) {
        return true;
      }
      if (this.instance.defaults !== undefined && typeof this.instance.defaults === 'function' && _typeof(this.instance.defaults()) === 'object') {
        return Object.keys(this.instance.defaults());
      }
      return false;
    }

    /**
     * Returns the default values for the instance.
     *
     * This will be an empty object if the instance either does not have a `defaults()` method, or
     * the method itself does not return an object.
     *
     * @returns {object}
     */
  }, {
    key: "getDefaults",
    value: function getDefaults() {
      if (this.instance.defaults !== undefined && typeof this.instance.defaults === 'function' && _typeof(this.instance.defaults()) === 'object') {
        return this.instance.defaults();
      }
      return {};
    }

    /**
     * Processes the configuration.
     *
     * Loads up the defaults, then populates it with any configuration values provided by the data
     * attributes, based on the rules of the accepted configurations.
     *
     * This configuration object is then cached and available through `config.get()` calls.
     *
     * @returns {object}
     */
  }, {
    key: "processConfig",
    value: function processConfig() {
      var config = this.getDefaults();
      if (this.acceptedConfigs === false) {
        return config;
      }

      /* eslint-disable */
      for (var key in this.element.dataset) {
        if (this.acceptedConfigs === true || this.acceptedConfigs.includes(key)) {
          config[key] = this.coerceValue(this.element.dataset[key]);
        }
      }
      for (var _key in this.localConfig) {
        if (this.acceptedConfigs === true || this.acceptedConfigs.includes(_key)) {
          config[_key] = this.localConfig[_key];
        }
      }
      /* eslint-enable */

      return config;
    }

    /**
     * Coerces configuration values for JavaScript.
     *
     * Takes the string value returned from the data attribute and coerces it into a more suitable
     * type for JavaScript processing.
     *
     * @param {*} value
     * @returns {*}
     */
  }, {
    key: "coerceValue",
    value: function coerceValue(value) {
      var stringValue = String(value);

      // Null value
      if (stringValue === 'null') {
        return null;
      }

      // Undefined value
      if (stringValue === 'undefined') {
        return undefined;
      }

      // Base64 value
      if (stringValue.startsWith('base64:')) {
        var base64str = stringValue.replace(/^base64:/, '');
        var decoded = atob(base64str);
        return this.coerceValue(decoded);
      }

      // Boolean value
      if (['true', 'yes'].includes(stringValue.toLowerCase())) {
        return true;
      }
      if (['false', 'no'].includes(stringValue.toLowerCase())) {
        return false;
      }

      // Numeric value
      if (/^[-+]?[0-9]+(\.[0-9]+)?$/.test(stringValue)) {
        return Number(stringValue);
      }

      // JSON value
      try {
        return this.snowboard.jsonParser().parse(stringValue);
      } catch (e) {
        return stringValue === '' ? true : stringValue;
      }
    }
  }]);
}(_abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../modules/system/assets/js/snowboard/extras/Flash.js":
/*!****************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/extras/Flash.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Flash)
/* harmony export */ });
/* harmony import */ var _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/PluginBase */ "../../modules/system/assets/js/snowboard/abstracts/PluginBase.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Provides flash messages for the CMS.
 *
 * Flash messages will pop up at the top center of the page and will remain for 7 seconds by default. Hovering over
 * the message will reset and pause the timer. Clicking on the flash message will dismiss it.
 *
 * Arguments:
 *  - "message": The content of the flash message. HTML is accepted.
 *  - "type": The type of flash message. This is appended as a class to the flash message itself.
 *  - "duration": How long the flash message will stay visible for, in seconds. Default: 7 seconds.
 *
 * Usage:
 *      Snowboard.flash('This is a flash message', 'info', 8);
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Flash = /*#__PURE__*/function (_PluginBase) {
  function Flash() {
    _classCallCheck(this, Flash);
    return _callSuper(this, Flash, arguments);
  }
  _inherits(Flash, _PluginBase);
  return _createClass(Flash, [{
    key: "construct",
    value:
    /**
     * Constructor.
     *
     * @param {string} message
     * @param {string} type
     * @param {Number} duration
     */
    function construct(message, type, duration) {
      this.message = message;
      this.type = type || 'default';
      this.duration = Number(duration || 7);
      if (this.duration < 0) {
        throw new Error('Flash duration must be a positive number, or zero');
      }
      this.clear();
      this.timer = null;
      this.flashTimer = null;
      this.create();
    }

    /**
     * Defines dependencies.
     *
     * @returns {string[]}
     */
  }, {
    key: "dependencies",
    value: function dependencies() {
      return ['transition'];
    }

    /**
     * Destructor.
     *
     * This will ensure the flash message is removed and timeout is cleared if the module is removed.
     */
  }, {
    key: "destruct",
    value: function destruct() {
      if (this.timer !== null) {
        window.clearTimeout(this.timer);
      }
      if (this.flashTimer) {
        this.flashTimer.remove();
      }
      if (this.flash) {
        this.flash.remove();
        this.flash = null;
        this.flashTimer = null;
      }
      _get(_getPrototypeOf(Flash.prototype), "destruct", this).call(this);
    }

    /**
     * Creates the flash message.
     */
  }, {
    key: "create",
    value: function create() {
      var _this = this;
      this.snowboard.globalEvent('flash.create', this);
      this.flash = document.createElement('DIV');
      this.flash.innerHTML = this.message;
      this.flash.classList.add('flash-message', this.type);
      this.flash.removeAttribute('data-control');
      this.flash.addEventListener('click', function () {
        return _this.remove();
      });
      this.flash.addEventListener('mouseover', function () {
        return _this.stopTimer();
      });
      this.flash.addEventListener('mouseout', function () {
        return _this.startTimer();
      });
      if (this.duration > 0) {
        this.flashTimer = document.createElement('DIV');
        this.flashTimer.classList.add('flash-timer');
        this.flash.appendChild(this.flashTimer);
      } else {
        this.flash.classList.add('no-timer');
      }

      // Add to body
      document.body.appendChild(this.flash);
      this.snowboard.transition(this.flash, 'show', function () {
        _this.startTimer();
      });
    }

    /**
     * Removes the flash message.
     */
  }, {
    key: "remove",
    value: function remove() {
      var _this2 = this;
      this.snowboard.globalEvent('flash.remove', this);
      this.stopTimer();
      this.snowboard.transition(this.flash, 'hide', function () {
        _this2.flash.remove();
        _this2.flash = null;
        _this2.destruct();
      });
    }

    /**
     * Clears all flash messages available on the page.
     */
  }, {
    key: "clear",
    value: function clear() {
      document.querySelectorAll('body > div.flash-message').forEach(function (element) {
        return element.remove();
      });
    }

    /**
     * Starts the timer for this flash message.
     */
  }, {
    key: "startTimer",
    value: function startTimer() {
      var _this3 = this;
      if (this.duration === 0) {
        return;
      }
      this.timerTrans = this.snowboard.transition(this.flashTimer, 'timeout', null, "".concat(this.duration, ".0s"), true);
      this.timer = window.setTimeout(function () {
        return _this3.remove();
      }, this.duration * 1000);
    }

    /**
     * Resets the timer for this flash message.
     */
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      if (this.timerTrans) {
        this.timerTrans.cancel();
      }
      if (this.timer) {
        window.clearTimeout(this.timer);
      }
    }
  }]);
}(_abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../modules/system/assets/js/snowboard/extras/FlashListener.js":
/*!************************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/extras/FlashListener.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FlashListener)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "../../modules/system/assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Defines a default listener for flash events.
 *
 * Connects the Flash plugin to various events that use flash messages.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var FlashListener = /*#__PURE__*/function (_Singleton) {
  function FlashListener() {
    _classCallCheck(this, FlashListener);
    return _callSuper(this, FlashListener, arguments);
  }
  _inherits(FlashListener, _Singleton);
  return _createClass(FlashListener, [{
    key: "dependencies",
    value:
    /**
     * Defines dependenices.
     *
     * @returns {string[]}
     */
    function dependencies() {
      return ['flash'];
    }

    /**
     * Defines listeners.
     *
     * @returns {Object}
     */
  }, {
    key: "listens",
    value: function listens() {
      return {
        ready: 'ready',
        ajaxErrorMessage: 'ajaxErrorMessage',
        ajaxFlashMessages: 'ajaxFlashMessages'
      };
    }

    /**
     * Do flash messages for PHP flash responses.
     */
  }, {
    key: "ready",
    value: function ready() {
      var _this = this;
      document.querySelectorAll('[data-control="flash-message"]').forEach(function (element) {
        _this.snowboard.flash(element.innerHTML, element.dataset.flashType, element.dataset.flashDuration);
        element.remove();
      });
    }

    /**
     * Shows a flash message for AJAX errors.
     *
     * @param {string} message
     * @returns {Boolean}
     */
  }, {
    key: "ajaxErrorMessage",
    value: function ajaxErrorMessage(message) {
      this.snowboard.flash(message, 'error');
      return false;
    }

    /**
     * Shows flash messages returned directly from AJAX functionality.
     *
     * @param {Object} messages
     */
  }, {
    key: "ajaxFlashMessages",
    value: function ajaxFlashMessages(messages) {
      var _this2 = this;
      Object.entries(messages).forEach(function (entry) {
        var _entry = _slicedToArray(entry, 2),
          cssClass = _entry[0],
          message = _entry[1];
        _this2.snowboard.flash(message, cssClass);
      });
      return false;
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../modules/system/assets/js/snowboard/extras/FormValidation.js":
/*!*************************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/extras/FormValidation.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidation)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "../../modules/system/assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Adds AJAX-driven form validation to Snowboard requests.
 *
 * Documentation for this feature can be found here:
 * https://wintercms.com/docs/snowboard/extras#ajax-validation
 *
 * @copyright 2022 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var FormValidation = /*#__PURE__*/function (_Singleton) {
  function FormValidation() {
    _classCallCheck(this, FormValidation);
    return _callSuper(this, FormValidation, arguments);
  }
  _inherits(FormValidation, _Singleton);
  return _createClass(FormValidation, [{
    key: "construct",
    value:
    /**
     * Constructor.
     */
    function construct() {
      this.errorBags = [];
    }

    /**
     * Defines listeners.
     *
     * @returns {Object}
     */
  }, {
    key: "listens",
    value: function listens() {
      return {
        ready: 'ready',
        ajaxStart: 'clearValidation',
        ajaxValidationErrors: 'doValidation'
      };
    }

    /**
     * Ready event handler.
     */
  }, {
    key: "ready",
    value: function ready() {
      this.collectErrorBags(document);
    }

    /**
     * Retrieves validation errors from an AJAX response and passes them through to the error bags.
     *
     * This handler returns false to cancel any further validation handling, and prevents the flash
     * message that is displayed by default for field errors in AJAX requests from showing.
     *
     * @param {HTMLFormElement} form
     * @param {Object} invalidFields
     * @param {Request} request
     * @returns {Boolean}
     */
  }, {
    key: "doValidation",
    value: function doValidation(form, invalidFields, request) {
      var _this = this;
      if (request.element && request.element.dataset.requestValidate === undefined) {
        return null;
      }
      if (!form) {
        return null;
      }
      var errorBags = this.errorBags.filter(function (errorBag) {
        return errorBag.form === form;
      });
      errorBags.forEach(function (errorBag) {
        _this.showErrorBag(errorBag, invalidFields);
      });
      return false;
    }

    /**
     * Clears any validation errors in the given form.
     *
     * @param {Promise} promise
     * @param {Request} request
     * @returns {void}
     */
  }, {
    key: "clearValidation",
    value: function clearValidation(promise, request) {
      var _this2 = this;
      if (request.element && request.element.dataset.requestValidate === undefined) {
        return;
      }
      if (!request.form) {
        return;
      }
      var errorBags = this.errorBags.filter(function (errorBag) {
        return errorBag.form === request.form;
      });
      errorBags.forEach(function (errorBag) {
        _this2.hideErrorBag(errorBag);
      });
    }

    /**
     * Collects error bags (elements with "data-validate-error" attribute) and links them to a
     * placeholder and form.
     *
     * The error bags will be initially hidden, and will only show when validation errors occur.
     *
     * @param {HTMLElement} rootNode
     */
  }, {
    key: "collectErrorBags",
    value: function collectErrorBags(rootNode) {
      var _this3 = this;
      rootNode.querySelectorAll('[data-validate-error], [data-validate-for]').forEach(function (errorBag) {
        var form = errorBag.closest('form[data-request-validate]');

        // If this error bag does not reside within a validating form, remove it
        if (!form) {
          errorBag.parentNode.removeChild(errorBag);
          return;
        }

        // Find message list node, if available
        var messageListElement = null;
        if (errorBag.matches('[data-validate-error]')) {
          messageListElement = errorBag.querySelector('[data-message]');
        }

        // Create a placeholder node
        var placeholder = document.createComment('');

        // Register error bag and replace with placeholder
        var errorBagData = {
          element: errorBag,
          form: form,
          validateFor: errorBag.dataset.validateFor ? errorBag.dataset.validateFor.split(/\s*,\s*/) : '*',
          placeholder: placeholder,
          messageListElement: messageListElement ? messageListElement.cloneNode(true) : null,
          messageListAnchor: null,
          customMessage: errorBag.dataset.validateFor ? errorBag.textContent !== '' || errorBag.childNodes.length > 0 : false
        };

        // If an message list element exists, create another placeholder to act as an anchor point
        if (messageListElement) {
          var messageListAnchor = document.createComment('');
          messageListElement.parentNode.replaceChild(messageListAnchor, messageListElement);
          errorBagData.messageListAnchor = messageListAnchor;
        }
        errorBag.parentNode.replaceChild(placeholder, errorBag);
        _this3.errorBags.push(errorBagData);
      });
    }

    /**
     * Hides an error bag, replacing the error messages with a placeholder node.
     *
     * @param {Object} errorBag
     */
  }, {
    key: "hideErrorBag",
    value: function hideErrorBag(errorBag) {
      if (errorBag.element.isConnected) {
        errorBag.element.parentNode.replaceChild(errorBag.placeholder, errorBag.element);
      }
    }

    /**
     * Shows an error bag with the given invalid fields.
     *
     * @param {Object} errorBag
     * @param {Object} invalidFields
     */
  }, {
    key: "showErrorBag",
    value: function showErrorBag(errorBag, invalidFields) {
      if (!this.errorBagValidatesField(errorBag, invalidFields)) {
        return;
      }
      if (!errorBag.element.isConnected) {
        errorBag.placeholder.parentNode.replaceChild(errorBag.element, errorBag.placeholder);
      }
      if (errorBag.validateFor !== '*') {
        if (!errorBag.customMessage) {
          var firstField = Object.keys(invalidFields).filter(function (field) {
            return errorBag.validateFor.includes(field);
          }).shift();
          var _invalidFields$firstF = _slicedToArray(invalidFields[firstField], 1);
          errorBag.element.innerHTML = _invalidFields$firstF[0];
        }
      } else if (errorBag.messageListElement) {
        // Remove previous error messages
        errorBag.element.querySelectorAll('[data-validation-message]').forEach(function (message) {
          message.parentNode.removeChild(message);
        });
        Object.entries(invalidFields).forEach(function (entry) {
          var _entry = _slicedToArray(entry, 2),
            errors = _entry[1];
          errors.forEach(function (error) {
            var messageElement = errorBag.messageListElement.cloneNode(true);
            messageElement.dataset.validationMessage = '';
            messageElement.innerHTML = error;
            errorBag.messageListAnchor.after(messageElement);
          });
        });
      } else {
        var _invalidFields$Object = _slicedToArray(invalidFields[Object.keys(invalidFields).shift()], 1);
        errorBag.element.innerHTML = _invalidFields$Object[0];
      }
    }

    /**
     * Determines if a given error bag applies for the given invalid fields.
     *
     * @param {Object} errorBag
     * @param {Object} invalidFields
     * @returns {Boolean}
     */
  }, {
    key: "errorBagValidatesField",
    value: function errorBagValidatesField(errorBag, invalidFields) {
      if (errorBag.validateFor === '*') {
        return true;
      }
      return Object.keys(invalidFields).filter(function (field) {
        return errorBag.validateFor.includes(field);
      }).length > 0;
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../modules/system/assets/js/snowboard/extras/StripeLoader.js":
/*!***********************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/extras/StripeLoader.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StripeLoader)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "../../modules/system/assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Displays a stripe at the top of the page that indicates loading.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var StripeLoader = /*#__PURE__*/function (_Singleton) {
  function StripeLoader() {
    _classCallCheck(this, StripeLoader);
    return _callSuper(this, StripeLoader, arguments);
  }
  _inherits(StripeLoader, _Singleton);
  return _createClass(StripeLoader, [{
    key: "dependencies",
    value:
    /**
     * Defines dependenices.
     *
     * @returns {string[]}
     */
    function dependencies() {
      return ['request'];
    }

    /**
     * Defines listeners.
     *
     * @returns {Object}
     */
  }, {
    key: "listens",
    value: function listens() {
      return {
        ready: 'ready',
        ajaxStart: 'ajaxStart'
      };
    }
  }, {
    key: "ready",
    value: function ready() {
      this.counter = 0;
      this.createStripe();
    }
  }, {
    key: "ajaxStart",
    value: function ajaxStart(promise, request) {
      var _this = this;
      if (request.options.stripe === false) {
        return;
      }
      this.show();
      promise.then(function () {
        _this.hide();
      })["catch"](function () {
        _this.hide();
      });
    }
  }, {
    key: "createStripe",
    value: function createStripe() {
      this.indicator = document.createElement('DIV');
      this.stripe = document.createElement('DIV');
      this.stripeLoaded = document.createElement('DIV');
      this.indicator.classList.add('stripe-loading-indicator', 'loaded');
      this.stripe.classList.add('stripe');
      this.stripeLoaded.classList.add('stripe-loaded');
      this.indicator.appendChild(this.stripe);
      this.indicator.appendChild(this.stripeLoaded);
      document.body.appendChild(this.indicator);
    }
  }, {
    key: "show",
    value: function show() {
      this.counter += 1;
      var newStripe = this.stripe.cloneNode(true);
      this.indicator.appendChild(newStripe);
      this.stripe.remove();
      this.stripe = newStripe;
      if (this.counter > 1) {
        return;
      }
      this.indicator.classList.remove('loaded');
      document.body.classList.add('wn-loading');
    }
  }, {
    key: "hide",
    value: function hide(force) {
      this.counter -= 1;
      if (force === true) {
        this.counter = 0;
      }
      if (this.counter <= 0) {
        this.indicator.classList.add('loaded');
        document.body.classList.remove('wn-loading');
      }
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../modules/system/assets/js/snowboard/extras/StylesheetLoader.js":
/*!***************************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/extras/StylesheetLoader.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StylesheetLoader)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "../../modules/system/assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Embeds the "extras" stylesheet into the page, if it is not loaded through the theme.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var StylesheetLoader = /*#__PURE__*/function (_Singleton) {
  function StylesheetLoader() {
    _classCallCheck(this, StylesheetLoader);
    return _callSuper(this, StylesheetLoader, arguments);
  }
  _inherits(StylesheetLoader, _Singleton);
  return _createClass(StylesheetLoader, [{
    key: "listens",
    value:
    /**
     * Defines listeners.
     *
     * @returns {Object}
     */
    function listens() {
      return {
        ready: 'ready'
      };
    }
  }, {
    key: "ready",
    value: function ready() {
      var stylesLoaded = false;

      // Determine if stylesheet is already loaded
      document.querySelectorAll('link[rel="stylesheet"]').forEach(function (css) {
        if (css.href.endsWith('/modules/system/assets/css/snowboard.extras.css')) {
          stylesLoaded = true;
        }
      });
      if (!stylesLoaded) {
        var stylesheet = document.createElement('link');
        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.setAttribute('href', this.snowboard.url().asset('/modules/system/assets/css/snowboard.extras.css'));
        document.head.appendChild(stylesheet);
      }
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../modules/system/assets/js/snowboard/extras/Transition.js":
/*!*********************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/extras/Transition.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Transition)
/* harmony export */ });
/* harmony import */ var _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/PluginBase */ "../../modules/system/assets/js/snowboard/abstracts/PluginBase.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Provides transition support for elements.
 *
 * Transition allows CSS transitions to be controlled and callbacks to be run once completed. It works similar to Vue
 * transitions with 3 stages of transition, and classes assigned to the element with the transition name suffixed with
 * the stage of transition:
 *
 *  - `in`: A class assigned to the element for the first frame of the transition, removed afterwards. This should be
 *      used to define the initial state of the transition.
 *  - `active`: A class assigned to the element for the duration of the transition. This should be used to define the
 *      transition itself.
 *  - `out`: A class assigned to the element after the first frame of the transition and kept to the end of the
 *      transition. This should define the end state of the transition.
 *
 * Usage:
 *      Snowboard.transition(document.element, 'transition', () => {
 *          console.log('Remove element after 7 seconds');
 *          this.remove();
 *      }, '7s');
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Transition = /*#__PURE__*/function (_PluginBase) {
  function Transition() {
    _classCallCheck(this, Transition);
    return _callSuper(this, Transition, arguments);
  }
  _inherits(Transition, _PluginBase);
  return _createClass(Transition, [{
    key: "construct",
    value:
    /**
     * Constructor.
     *
     * @param {HTMLElement} element The element to transition
     * @param {string} transition The name of the transition, this prefixes the stages of transition.
     * @param {Function} callback An optional callback to call when the transition ends.
     * @param {Number} duration An optional override on the transition duration. Must be specified as 's' (secs) or 'ms' (msecs).
     * @param {Boolean} trailTo If true, the "out" class will remain after the end of the transition.
     */
    function construct(element, transition, callback, duration, trailTo) {
      if (element instanceof HTMLElement === false) {
        throw new Error('A HTMLElement must be provided for transitioning');
      }
      this.element = element;
      if (typeof transition !== 'string') {
        throw new Error('Transition name must be specified as a string');
      }
      this.transition = transition;
      if (callback && typeof callback !== 'function') {
        throw new Error('Callback must be a valid function');
      }
      this.callback = callback;
      if (duration) {
        this.duration = this.parseDuration(duration);
      } else {
        this.duration = null;
      }
      this.trailTo = trailTo === true;
      this.doTransition();
    }

    /**
     * Maps event classes to the given transition state.
     *
     * @param  {...any} args
     * @returns {Array}
     */
  }, {
    key: "eventClasses",
    value: function eventClasses() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var eventClasses = {
        "in": "".concat(this.transition, "-in"),
        active: "".concat(this.transition, "-active"),
        out: "".concat(this.transition, "-out")
      };
      if (args.length === 0) {
        return Object.values(eventClasses);
      }
      var returnClasses = [];
      Object.entries(eventClasses).forEach(function (entry) {
        var _entry = _slicedToArray(entry, 2),
          key = _entry[0],
          value = _entry[1];
        if (args.indexOf(key) !== -1) {
          returnClasses.push(value);
        }
      });
      return returnClasses;
    }

    /**
     * Executes the transition.
     *
     * @returns {void}
     */
  }, {
    key: "doTransition",
    value: function doTransition() {
      var _this = this;
      // Add duration override
      if (this.duration !== null) {
        this.element.style.transitionDuration = this.duration;
      }
      this.resetClasses();

      // Start transition - show "in" and "active" classes
      this.eventClasses('in', 'active').forEach(function (eventClass) {
        _this.element.classList.add(eventClass);
      });
      window.requestAnimationFrame(function () {
        // Ensure a transition exists
        if (window.getComputedStyle(_this.element)['transition-duration'] !== '0s') {
          // Listen for the transition to end
          _this.element.addEventListener('transitionend', function () {
            return _this.onTransitionEnd();
          }, {
            once: true
          });
          window.requestAnimationFrame(function () {
            _this.element.classList.remove(_this.eventClasses('in')[0]);
            _this.element.classList.add(_this.eventClasses('out')[0]);
          });
        } else {
          _this.resetClasses();
          if (_this.callback) {
            _this.callback.apply(_this.element);
          }
          _this.destruct();
        }
      });
    }

    /**
     * Callback function when the transition ends.
     *
     * When a transition ends, the instance of the transition is automatically destructed.
     *
     * @returns {void}
     */
  }, {
    key: "onTransitionEnd",
    value: function onTransitionEnd() {
      var _this2 = this;
      this.eventClasses('active', !this.trailTo ? 'out' : '').forEach(function (eventClass) {
        _this2.element.classList.remove(eventClass);
      });
      if (this.callback) {
        this.callback.apply(this.element);
      }

      // Remove duration override
      if (this.duration !== null) {
        this.element.style.transitionDuration = null;
      }
      this.destruct();
    }

    /**
     * Cancels a transition.
     *
     * @returns {void}
     */
  }, {
    key: "cancel",
    value: function cancel() {
      var _this3 = this;
      this.element.removeEventListener('transitionend', function () {
        return _this3.onTransitionEnd;
      }, {
        once: true
      });
      this.resetClasses();

      // Remove duration override
      if (this.duration !== null) {
        this.element.style.transitionDuration = null;
      }

      // Call destructor
      this.destruct();
    }

    /**
     * Resets the classes, removing any transition classes.
     *
     * @returns {void}
     */
  }, {
    key: "resetClasses",
    value: function resetClasses() {
      var _this4 = this;
      this.eventClasses().forEach(function (eventClass) {
        _this4.element.classList.remove(eventClass);
      });
    }

    /**
     * Parses a given duration and converts it to a "ms" value.
     *
     * @param {String} duration
     * @returns {String}
     */
  }, {
    key: "parseDuration",
    value: function parseDuration(duration) {
      var parsed = /^([0-9]+(\.[0-9]+)?)(m?s)?$/.exec(duration);
      var amount = Number(parsed[1]);
      var unit = parsed[3] === 's' ? 'sec' : 'msec';
      return unit === 'sec' ? "".concat(amount * 1000, "ms") : "".concat(Math.floor(amount), "ms");
    }
  }]);
}(_abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../modules/system/assets/js/snowboard/extras/Trigger.js":
/*!******************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/extras/Trigger.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Trigger)
/* harmony export */ });
/* harmony import */ var _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/PluginBase */ "../../modules/system/assets/js/snowboard/abstracts/PluginBase.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * @typedef {Object} TriggerEntity
 * @property {string} trigger The selector for the trigger target element(s).
 * @property {string} condition The condition that must be met for the trigger to fire.
 * @property {string} action The action to perform when the trigger fires.
 * @property {string|undefined} parent The parent element with which to limit the trigger scope.
 * @property {string|number} priority The priority of the trigger event.
 * @property {HTMLElement[]} elements The target elements that this trigger applies to.
 * @property {Function[]} conditionCallbacks The condition callbacks for this trigger.
 * @property {Map<HTMLElement, Set<string>>} elementEvents The events registered on the target elements.
 */
/**
 * @typedef {Object} TriggerElement
 * @property {HTMLElement} element The target element.
 * @property {string} eventName The trigger event name.
 * @property {int} priority The trigger event priority.
 * @property {Function} event The trigger event function.
 */

/**
 * Trigger handler for HTML elements.
 *
 * This is a re-imagining of the Input.Trigger functionality in the original Winter CMS framework,
 * initialised through the `data-trigger` attributes.
 *
 * In addition to remaining backwards-compatible with the original Input.Trigger functionality, this
 * handler adds additional conditions and configuration for more flexible trigger usage.
 *
 * @see https://wintercms.com/docs/v1.2/ui/script/input-trigger
 *
 * @copyright 2024 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Trigger = /*#__PURE__*/function (_PluginBase) {
  function Trigger() {
    _classCallCheck(this, Trigger);
    return _callSuper(this, Trigger, arguments);
  }
  _inherits(Trigger, _PluginBase);
  return _createClass(Trigger, [{
    key: "construct",
    value:
    /**
     * Constructor.
     *
     * @param {HTMLElement} element
     */
    function construct(element) {
      /**
       * The element this instance is attached to.
       */
      this.element = element;

      /**
       * @type {Map<string, TriggerEntity>} The triggers for this element.
       */
      this.triggers = new Map();

      /**
       * @type {Map<Element, Set<TriggerElement>>} A map of elements that trigger events.
       */
      this.events = new Map();

      /**
       * @type {Map<Element, Map<string, Function>>} A map of elements and their event connectors.
       */
      this.connectors = new Map();
      this.parseTriggers();
      if (this.triggers.size > 0) {
        this.resetEvents();
        this.createTriggerEvents();
        this.runEvents();
        this.snowboard.globalEvent('triggers.ready', this.element);
      }
    }

    /**
     * Destructor.
     */
  }, {
    key: "destruct",
    value: function destruct() {
      this.resetEvents();
      _get(_getPrototypeOf(Trigger.prototype), "destruct", this).call(this);
    }

    /**
     * Parses the element's data attributes and determines applicable triggers.
     *
     * Trigger data attributes must be in the format `data-trigger-[name]-[parameter]` for multiple
     * triggers, or `data-trigger-[parameter]` for single triggers.
     *
     * Supported parameters are:
     *  - `condition` or `where`: The condition that must be met for the trigger to fire.
     *  - `action` or `do`: The action to perform when the trigger fires.
     *  - `closest-parent` or `parent`: The parent element with which to limit the trigger scope.
     *  - `priority`: The priority in which to consider the trigger.
     *
     * Internally, the trigger map uses the `trigger` parameter to store the trigger selector.
     */
  }, {
    key: "parseTriggers",
    value: function parseTriggers() {
      var _this = this;
      var dataset = this.element.dataset;
      this.triggers.clear();
      Object.keys(dataset).forEach(function (key) {
        if (/-[A-Z]/.test(key)) {
          throw new Error("Unable to convert camelCase to dash-style for data attribute: ".concat(key));
        }
        var dashStyle = key.replace(/([A-Z])/g, function (match) {
          return "-".concat(match.toLowerCase());
        });
        if (dashStyle !== 'trigger' && !dashStyle.startsWith('trigger-')) {
          return;
        }
        var triggerParts = /([a-z0-9\-.:_]+?)(?:(?:-)(closest-parent|condition|when|action|parent|priority|do))?$/i.exec(dashStyle.replace('trigger-', '').toLowerCase());
        var triggerName = null;
        var triggerType = null;
        if (['trigger', 'condition', 'action', 'parent', 'when', 'closest'].indexOf(triggerParts[1]) !== -1 && (triggerParts[1] !== 'closest' || triggerParts[1] === 'closest' && triggerParts[2] === 'parent')) {
          // Support original trigger format
          triggerName = '__original';
          triggerType = triggerParts[1] === 'closest' ? 'parent' : triggerParts[1];
        } else if (triggerParts[2] === undefined || ['closest-parent', 'condition', 'when', 'action', 'parent', 'priority', 'do'].indexOf(triggerParts[2]) !== -1) {
          // Parse multi-trigger format
          var _triggerParts = _slicedToArray(triggerParts, 2);
          triggerName = _triggerParts[1];
          switch (triggerParts[2]) {
            case 'closest-parent':
            case 'parent':
              triggerType = 'parent';
              break;
            case 'condition':
            case 'when':
              triggerType = 'condition';
              break;
            case 'action':
            case 'do':
              triggerType = 'action';
              break;
            case 'priority':
              triggerType = 'priority';
              break;
            default:
              triggerType = 'trigger';
              break;
          }
        }
        if (!_this.triggers.has(triggerName)) {
          _this.triggers.set(triggerName, new Map());
        }
        _this.triggers.get(triggerName).set(triggerType, dataset[key]);

        // Remove trigger data attribute after parsing
        delete dataset[key];
      });

      // Validate triggers, and remove those that do not have at least a trigger selector, a
      // condition and an action, or are using invalid conditions or actions
      this.triggers.forEach(function (trigger, name) {
        var elements = _this.getSelectableElements(trigger);
        if (!trigger.has('trigger') || !trigger.has('condition') || !trigger.has('action') || elements.length === 0 || !_this.hasValidConditions(trigger) || !_this.hasValidActions(trigger)) {
          _this.triggers["delete"](name);
        } else {
          trigger.set('elements', elements);
          if (!trigger.has('priority')) {
            trigger.set('priority', 100);
          }
        }
      });
    }

    /**
     * Parses a command given as either a condition or an action.
     *
     * Commands are formatted as: name:parameter1,parameter2,parameter3, although we also support
     * the old format of value[parameter1,parameter2,parameter3] for the `value` command only.
     *
     * If a parameter requires a comma within, the parameter should be wrapped in quotes.
     *
     * Multiple commands can be separated by a pipe character `|`.
     *
     * @param {string} command
     * @param {string} allowMultiple
     * @returns {{name: string, parameters: string[]}[]}
     */
  }, {
    key: "parseCommand",
    value: function parseCommand(command) {
      var _this2 = this;
      var allowMultiple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      // Support old-format value command (value[foo,bar])
      if (command.startsWith('value') && command.includes('[')) {
        var match = command.match(/[^[\]]+(?=])/g);
        var values = [];

        // Split values with commas
        match.forEach(function (value) {
          if (!value.includes(',')) {
            values.push(value.replace(/^['"]|['"]$/g, '').trim());
            return;
          }
          var splitValues = value.replace(/('.*?(?<!\\)')|(".*?(?<!\\)")/g, function (quoted) {
            return quoted.replace(/,/g, '|||');
          }).split(',').map(function (splitValue) {
            return splitValue.replace(/\|\|\|/g, ',').replace(/^['"]|['"]$/g, '').trim();
          });
          values.push.apply(values, _toConsumableArray(splitValues));
        });
        return [{
          name: 'value',
          parameters: values
        }];
      }

      // Handle multiple commands
      if (command.includes('|') && allowMultiple) {
        var splitCommands = command.replace(/('.*?(?<!\\)')|(".*?(?<!\\)")/g, function (quoted) {
          return quoted.replace(/\|/g, '|||');
        }).split('|').map(function (splitValue) {
          return splitValue.replace(/\|\|\|/g, '|');
        });
        var commands = [];
        splitCommands.forEach(function (splitCommand) {
          commands.push.apply(commands, _toConsumableArray(_this2.parseCommand(splitCommand, false)));
        });
        return commands;
      }
      if (!command.includes(':')) {
        return [{
          name: command,
          parameters: []
        }];
      }
      var _command$split = command.split(':', 2),
        _command$split2 = _slicedToArray(_command$split, 2),
        name = _command$split2[0],
        parameters = _command$split2[1];
      if (!parameters.includes(',')) {
        return [{
          name: name,
          parameters: [parameters]
        }];
      }
      var splitValues = parameters.replace(/('.*?(?<!\\)')|(".*?(?<!\\)")/g, function (quoted) {
        return quoted.replace(/,/g, '|||');
      }).split(',').map(function (splitValue) {
        return splitValue.replace(/\|\|\|/g, ',').replace(/^['"]|['"]$/g, '').replace(/\\(['"])/, '$1').trim();
      });
      return [{
        name: name,
        parameters: splitValues
      }];
    }

    /**
     * Checks if any elements are accessible by the provided trigger.
     *
     * @param {Map<TriggerEntity>} trigger
     * @returns {HTMLElement[]}
     */
  }, {
    key: "getSelectableElements",
    value: function getSelectableElements(trigger) {
      if (trigger.has('parent')) {
        return Array.from(this.element.closest(trigger.get('parent')).querySelectorAll(trigger.get('trigger')));
      }
      return Array.from(document.querySelectorAll(trigger.get('trigger')));
    }

    /**
     * Determines if the provided trigger condition(s) are valid.
     *
     * @param {TriggerEntity} trigger
     * @returns {boolean}
     */
  }, {
    key: "hasValidConditions",
    value: function hasValidConditions(trigger) {
      return this.parseCommand(trigger.get('condition')).every(function (condition) {
        return ['checked', 'unchecked', 'empty', 'value', 'oneof', 'allof', 'focus', 'blur', 'attr', 'class'].includes(condition.name.toLowerCase());
      });
    }

    /**
     * Determines if the provided trigger action(s) are valid.
     *
     * @param {TriggerEntity} trigger
     * @returns {boolean}
     */
  }, {
    key: "hasValidActions",
    value: function hasValidActions(trigger) {
      return this.parseCommand(trigger.get('action')).every(function (action) {
        return ['show', 'hide', 'enable', 'disable', 'empty', 'value', 'valueOf', 'check', 'uncheck', 'class', 'classOf', 'attr', 'attrOf', 'style', 'styleOf'].includes(action.name.toLowerCase());
      });
    }

    /**
     * Create trigger events on trigger and target elements.
     */
  }, {
    key: "createTriggerEvents",
    value: function createTriggerEvents() {
      var _this3 = this;
      this.triggers.forEach(function (trigger) {
        // Collect conditions and check them as a group.
        trigger.set('conditionCallbacks', []);
        trigger.set('elementEvents', new Map());
        _this3.parseCommand(trigger.get('condition')).forEach(function (condition) {
          switch (condition.name.toLowerCase()) {
            case 'value':
            case 'oneof':
              trigger.get('conditionCallbacks').push(_this3.createValueCondition.apply(_this3, [trigger, false].concat(_toConsumableArray(condition.parameters))));
              break;
            case 'allof':
              trigger.get('conditionCallbacks').push(_this3.createValueCondition.apply(_this3, [trigger, true].concat(_toConsumableArray(condition.parameters))));
              break;
            case 'empty':
              trigger.get('conditionCallbacks').push(_this3.createEmptyCondition(trigger));
              break;
            case 'checked':
            case 'unchecked':
              trigger.get('conditionCallbacks').push(_this3.createCheckedCondition.apply(_this3, [trigger, condition.name === 'checked'].concat(_toConsumableArray(condition.parameters))));
              break;
            default:
          }
        });
      });
      this.registerEventListeners();
    }

    /**
     * Adds an event to an element.
     *
     * This registers the event in the `elementEvents` map for later usage and removal.
     *
     * @param {HTMLElement} element
     * @param {TriggerEntity} trigger
     * @param {string} eventName
     */
  }, {
    key: "addEvent",
    value: function addEvent(element, trigger, eventName) {
      if (!trigger.get('elementEvents').has(element)) {
        trigger.get('elementEvents').set(element, new Set());
      }
      if (!trigger.get('elementEvents').get(element).add(eventName)) {
        trigger.get('elementEvents').get(element).add(eventName);
      }
    }

    /**
     * Registers DOM event listeners for targeted elements of all triggers.
     *
     * Adds a connector to the element for the events, so that we may enable prioritisation and
     * control over the firing of the events, and then registers DOM event listeners for the
     * elements.
     */
  }, {
    key: "registerEventListeners",
    value: function registerEventListeners() {
      var _this4 = this;
      var connectors = new Set();
      this.triggers.forEach(function (trigger) {
        trigger.get('elementEvents').forEach(function (events, element) {
          if (!_this4.events.has(element)) {
            _this4.events.set(element, new Set());
          }
          events.forEach(function (eventName) {
            if (!connectors.has({
              element: element,
              eventName: eventName
            })) {
              connectors.add({
                element: element,
                eventName: eventName
              });
            }
            var event = {
              element: element,
              eventName: eventName,
              priority: Number(trigger.get('priority')),
              event: function event() {
                _this4.executeActions(trigger, trigger.get('conditionCallbacks').every(function (condition) {
                  return condition();
                }));
              }
            };
            _this4.events.get(element).add(event);
          });
        });
      });
      connectors.forEach(function (_ref) {
        var element = _ref.element,
          eventName = _ref.eventName;
        if (!_this4.connectors.has(element)) {
          _this4.connectors.set(element, new Map());
        }
        if (!_this4.connectors.get(element).has(eventName)) {
          _this4.connectors.get(element).set(eventName, function () {
            var events = [];
            _this4.events.get(element).forEach(function (elementEvent) {
              if (elementEvent.eventName === eventName) {
                events.push(elementEvent);
              }
            });
            events.sort(function (a, b) {
              return a.priority - b.priority;
            }).forEach(function (elementEvent) {
              elementEvent.event();
            });
          });
          element.addEventListener(eventName, _this4.connectors.get(element).get(eventName));
        }
      });
    }

    /**
     * Creates a trigger that fires when the value of the target element(s) matches one of the
     * provided values.
     *
     * @param {TriggerEntity} trigger
     * @param  {...string} values
     */
  }, {
    key: "createValueCondition",
    value: function createValueCondition(trigger, all) {
      var _this5 = this;
      for (var _len = arguments.length, values = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        values[_key - 2] = arguments[_key];
      }
      var supportedElements = new Set();
      trigger.get('elements').forEach(function (element) {
        if (element.matches('input[type=button], input[type=file], input[type=image], input[type=reset], input[type=submit]')) {
          // Buttons and file inputs are unsupported
          return;
        }
        if (element.matches('input, select, textarea')) {
          supportedElements.add(element);
        }
      });
      supportedElements.forEach(function (element) {
        if (element.matches('input[type=checkbox], input[type=radio]')) {
          _this5.addEvent(element, trigger, 'click');
        }
        _this5.addEvent(element, trigger, 'input');
      });
      return function () {
        var elementValues = new Set();
        supportedElements.forEach(function (element) {
          if (element.matches('input[type=checkbox], input[type=radio]')) {
            if (element.checked) {
              elementValues.add(element.value);
            }
            return;
          }
          elementValues.add(element.value);
        });
        if (all) {
          return values.every(function (value) {
            return elementValues.has(value);
          });
        }
        return values.some(function (value) {
          return elementValues.has(value);
        });
      };
    }

    /**
     * Creates a trigger that fires when there is no value within the target element(s).
     *
     * @param {TriggerEntity} trigger
     */
  }, {
    key: "createEmptyCondition",
    value: function createEmptyCondition(trigger) {
      var _this6 = this;
      var supportedElements = new Set();
      trigger.get('elements').forEach(function (element) {
        if (element.matches('input[type=button], input[type=image], input[type=reset], input[type=submit]')) {
          // Buttons and file inputs are unsupported
          return;
        }
        if (element.matches('input, select, textarea')) {
          supportedElements.add(element);
        }
      });
      supportedElements.forEach(function (element) {
        if (element.matches('input[type=checkbox], input[type=radio]')) {
          _this6.addEvent(element, trigger, 'click');
          return;
        }
        _this6.addEvent(element, trigger, 'input');
      });
      return function () {
        var elementValues = new Set();
        supportedElements.forEach(function (element) {
          if (element.matches('input[type=checkbox], input[type=radio]')) {
            if (element.checked) {
              elementValues.add(element);
            }
            return;
          }
          if (element.value.trim() !== '') {
            elementValues.add(element);
          }
        });
        return elementValues.size === 0;
      };
    }

    /**
     * Creates a trigger that fires when a target element(s) is checked/unchecked.
     *
     * @param {TriggerEntity} trigger
     * @param {boolean} checked If the element should be checked or unchecked.
     * @param {string|number|undefined} atLeast The minimum number of elements that must be checked.
     *  Defaults to 1 if undefined. If specified as `all`, all elements must be checked.
     */
  }, {
    key: "createCheckedCondition",
    value: function createCheckedCondition(trigger, checked) {
      var _this7 = this;
      var atLeast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var atMost = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      var supportedElements = new Set();
      trigger.get('elements').forEach(function (element) {
        // Only supports checkboxes and radio buttons
        if (element.matches('input[type=radio], input[type=checkbox]')) {
          supportedElements.add(element);
        }
      });
      supportedElements.forEach(function (element) {
        _this7.addEvent(element, trigger, 'click');
      });
      return function () {
        var elementValues = new Set();
        supportedElements.forEach(function (element) {
          if (checked === element.checked) {
            elementValues.add(element);
          }
        });
        if (atLeast === 'all') {
          return elementValues.size === supportedElements.size;
        }
        var atLeastCount = atLeast !== undefined && Math.floor(atLeast) > 0 ? Math.floor(atLeast) : 1;
        var atMostCount = atLeast !== undefined && Math.floor(atMost) > 1 ? Math.floor(atMost) : supportedElements.size;
        return elementValues.size >= atLeastCount && elementValues.size <= atMostCount;
      };
    }

    /**
     * Manually runs all registered triggers.
     *
     * This can be used to update the state of the triggers.
     */
  }, {
    key: "runEvents",
    value: function runEvents() {
      this.connectors.forEach(function (elementConnectors) {
        elementConnectors.forEach(function (connector) {
          connector();
        });
      });
    }

    /**
     * Clears all registered events.
     *
     * This  will disable all triggers and their event listeners on the target elements.
     */
  }, {
    key: "resetEvents",
    value: function resetEvents() {
      this.connectors.forEach(function (elementConnectors, element) {
        elementConnectors.forEach(function (connector, event) {
          element.removeEventListener(event, connector);
        });
      });
      this.connectors.clear();
      this.events.clear();
    }

    /**
     * Executes actions based on the trigger condition.
     *
     * Actions should be binary, and show one state when the condition is met, and another when it
     * is not. The second parameter is used to determine if the conditions of the trigger have been
     * met. If a trigger has multiple conditions, ALL conditions must be met.
     *
     * @param {TriggerEntity} trigger
     * @param {boolean} conditionMet
     */
  }, {
    key: "executeActions",
    value: function executeActions(trigger, conditionMet) {
      var _this8 = this;
      this.parseCommand(trigger.get('action')).forEach(function (action) {
        switch (action.name) {
          case 'show':
          case 'hide':
            _this8.actionShow(trigger, action.parameters[0] ? Array.from(_this8.element.querySelectorAll(action.parameters[0])) : [_this8.element], action.name === 'show' ? conditionMet : !conditionMet);
            break;
          case 'enable':
          case 'disable':
            _this8.actionEnable(trigger, action.parameters[0] ? Array.from(_this8.element.querySelectorAll(action.parameters[0])) : [_this8.element], action.name === 'enable' ? conditionMet : !conditionMet);
            break;
          case 'empty':
            if (conditionMet) {
              _this8.actionValue(trigger, conditionMet, action.parameters[0] ? Array.from(_this8.element.querySelectorAll(action.parameters[0])) : [_this8.element], '');
            }
            break;
          case 'value':
          case 'valueOf':
            _this8.actionValue.apply(_this8, [trigger, conditionMet, action.name === 'valueOf' ? Array.from(_this8.element.querySelectorAll(action.parameters[0])) : [_this8.element]].concat(_toConsumableArray(action.parameters.length > 0 && action.name === 'valueOf' ? action.parameters.slice(1) : action.parameters)));
            break;
          case 'class':
          case 'classOf':
            _this8.actionClass.apply(_this8, [trigger, conditionMet, action.name === 'classOf' ? Array.from(_this8.element.querySelectorAll(action.parameters[0])) : [_this8.element]].concat(_toConsumableArray(action.name === 'classOf' ? action.parameters.slice(1) : action.parameters)));
          default:
        }
      });
    }

    /**
     * Shows or hides a trigger element.
     *
     * This action will toggle the `hide` class on the element, and set the `display` style to
     * `none` when hidden, and the original display value when shown.
     *
     * @param {TriggerEntity} trigger
     * @param {HTMLElement[]} elements
     * @param {boolean} show
     */
  }, {
    key: "actionShow",
    value: function actionShow(trigger, elements, show) {
      var _this9 = this;
      elements.forEach(function (element) {
        if (show && getComputedStyle(element).display === 'none') {
          element.classList.remove('hide');
          if (!element.dataset.originalDisplay) {
            element.style.display = 'block';
          } else {
            element.style.display = element.dataset.originalDisplay;
          }
          delete element.dataset.originalDisplay;
          _this9.afterAction(trigger, element);
        } else if (!show && getComputedStyle(element).display !== 'none') {
          element.classList.add('hide');
          element.dataset.originalDisplay = getComputedStyle(element).display;
          element.style.display = 'none';
          _this9.afterAction(trigger, element);
        }
      });
    }

    /**
     * Enables or disables a trigger element.
     *
     * This action will toggle the `control-disabled` class on the element, and set the `disabled`
     * property to `true` when disabled, and `false` when enabled.
     *
     * @param {TriggerEntity} trigger
     * @param {HTMLElement[]} elements
     * @param {boolean} enable
     */
  }, {
    key: "actionEnable",
    value: function actionEnable(trigger, elements, enable) {
      var _this10 = this;
      elements.forEach(function (element) {
        element.classList[enable ? 'remove' : 'add']('control-disabled');
        if (element.disabled !== undefined) {
          element.disabled = !enable;
        }
        _this10.afterAction(trigger, element);
      });
    }

    /**
     * Sets the value of either the trigger element or a child element(s) within.
     *
     * This is a one-way action if the unmet value is not defined.
     */
  }, {
    key: "actionValue",
    value: function actionValue(trigger, conditionMet, elements, value) {
      var _this11 = this;
      var unmetValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
      if (!conditionMet && unmetValue === undefined) {
        return;
      }
      var newValue = conditionMet ? value : unmetValue;
      elements.forEach(function (element) {
        if (element.matches('input[type=checkbox], input[type=radio]')) {
          element.checked = element.value === newValue;
          return;
        }
        if (element.matches('input, select, textarea')) {
          element.value = newValue;
          return;
        }
        element.textContent = newValue;
        _this11.afterAction(trigger);
      });
    }

    /**
     * Adds or removes the class from the trigger element or a child element(s) within.
     *
     * This will simply remove the class if the unmet class is not defined. Otherwise, the classes
     * will be toggled.
     */
  }, {
    key: "actionClass",
    value: function actionClass(trigger, conditionMet, elements, cssClass) {
      var _this12 = this;
      var unmetCssClass = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
      elements.forEach(function (element) {
        if (conditionMet) {
          element.classList.add(cssClass);
          if (unmetCssClass) {
            element.classList.remove(unmetCssClass);
          }
        } else {
          element.classList.remove(cssClass);
          if (unmetCssClass) {
            element.classList.add(unmetCssClass);
          }
        }
        _this12.afterAction(trigger);
      });
    }
  }, {
    key: "afterAction",
    value: function afterAction(trigger, element) {
      this.snowboard.debug('Trigger fired', element, trigger);
      this.snowboard.globalEvent('trigger.fired', element, trigger);
    }
  }]);
}(_abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../modules/system/assets/js/snowboard/main/InnerProxyHandler.js":
/*!**************************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/main/InnerProxyHandler.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Internal proxy for Snowboard.
 *
 * This handler wraps the Snowboard instance that is passed to the constructor of plugin instances.
 * It prevents access to the following methods:
 *  - `attachAbstracts`: No need to attach abstracts again.
 *  - `loadUtilties`: No need to load utilities again.
 *  - `initialise`: Snowboard is already initialised.
 *  - `initialiseSingletons`: Singletons are already initialised.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  get: function get(target, prop, receiver) {
    if (typeof prop === 'string') {
      var propLower = prop.toLowerCase();
      if (['attachAbstracts', 'loadUtilities', 'initialise', 'initialiseSingletons'].includes(prop)) {
        throw new Error("You cannot use the \"".concat(prop, "\" Snowboard method within a plugin."));
      }
      if (target.hasPlugin(propLower)) {
        return function () {
          var _Reflect$get$propLowe;
          return (_Reflect$get$propLowe = Reflect.get(target, 'plugins')[propLower]).getInstance.apply(_Reflect$get$propLowe, arguments);
        };
      }
    }
    return Reflect.get(target, prop, receiver);
  },
  has: function has(target, prop) {
    if (typeof prop === 'string') {
      var propLower = prop.toLowerCase();
      if (['attachAbstracts', 'loadUtilities', 'initialise', 'initialiseSingletons'].includes(prop)) {
        return false;
      }
      if (target.hasPlugin(propLower)) {
        return true;
      }
    }
    return Reflect.has(target, prop);
  }
});

/***/ }),

/***/ "../../modules/system/assets/js/snowboard/main/PluginLoader.js":
/*!*********************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/main/PluginLoader.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PluginLoader)
/* harmony export */ });
/* harmony import */ var _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/PluginBase */ "../../modules/system/assets/js/snowboard/abstracts/PluginBase.js");
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstracts/Singleton */ "../../modules/system/assets/js/snowboard/abstracts/Singleton.js");
/* harmony import */ var _InnerProxyHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InnerProxyHandler */ "../../modules/system/assets/js/snowboard/main/InnerProxyHandler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




/**
 * Plugin loader class.
 *
 * This is a provider (factory) class for a single plugin and provides the link between Snowboard framework functionality
 * and the underlying plugin instances. It also provides some basic mocking of plugin methods for testing.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var PluginLoader = /*#__PURE__*/function () {
  /**
   * Constructor.
   *
   * Binds the Winter framework to the instance.
   *
   * @param {string} name
   * @param {Snowboard} snowboard
   * @param {PluginBase} instance
   */
  function PluginLoader(name, snowboard, instance) {
    _classCallCheck(this, PluginLoader);
    this.name = name;
    this.snowboard = new Proxy(snowboard, _InnerProxyHandler__WEBPACK_IMPORTED_MODULE_2__["default"]);
    this.instance = instance;

    // Freeze instance that has been inserted into this loader
    Object.freeze(this.instance);
    this.instances = [];
    this.singleton = {
      initialised: false
    };
    // Prevent further extension of the singleton status object
    Object.seal(this.singleton);
    this.mocks = {};
    this.originalFunctions = {};

    // Freeze loader itself
    Object.freeze(PluginLoader.prototype);
    Object.freeze(this);
  }

  /**
   * Determines if the current plugin has a specific method available.
   *
   * Returns false if the current plugin is a callback function.
   *
   * @param {string} methodName
   * @returns {boolean}
   */
  return _createClass(PluginLoader, [{
    key: "hasMethod",
    value: function hasMethod(methodName) {
      if (this.isFunction()) {
        return false;
      }
      return typeof this.instance.prototype[methodName] === 'function';
    }

    /**
     * Calls a prototype method for a plugin. This should generally be used for "static" calls.
     *
     * @param {string} methodName
     * @param {...} args
     * @returns {any}
     */
  }, {
    key: "callMethod",
    value: function callMethod() {
      if (this.isFunction()) {
        return null;
      }
      for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
        parameters[_key] = arguments[_key];
      }
      var args = parameters;
      var methodName = args.shift();
      return this.instance.prototype[methodName](args);
    }

    /**
     * Returns an instance of the current plugin.
     *
     * - If this is a callback function plugin, the function will be returned.
     * - If this is a singleton, the single instance of the plugin will be returned.
     *
     * @returns {PluginBase|Function}
     */
  }, {
    key: "getInstance",
    value: function getInstance() {
      var _this = this;
      for (var _len2 = arguments.length, parameters = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        parameters[_key2] = arguments[_key2];
      }
      if (this.isFunction()) {
        return this.instance.apply(this, parameters);
      }
      if (!this.dependenciesFulfilled()) {
        var unmet = this.getDependencies().filter(function (item) {
          return !_this.snowboard.getPluginNames().includes(item);
        });
        throw new Error("The \"".concat(this.name, "\" plugin requires the following plugins: ").concat(unmet.join(', ')));
      }
      if (this.isSingleton()) {
        if (this.instances.length === 0) {
          this.initialiseSingleton.apply(this, parameters);
        }

        // Apply mocked methods
        if (Object.keys(this.mocks).length > 0) {
          Object.entries(this.originalFunctions).forEach(function (entry) {
            var _entry = _slicedToArray(entry, 2),
              methodName = _entry[0],
              callback = _entry[1];
            _this.instances[0][methodName] = callback;
          });
          Object.entries(this.mocks).forEach(function (entry) {
            var _entry2 = _slicedToArray(entry, 2),
              methodName = _entry2[0],
              callback = _entry2[1];
            _this.instances[0][methodName] = function () {
              for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                params[_key3] = arguments[_key3];
              }
              return callback.apply(void 0, [_this].concat(params));
            };
          });
        }
        return this.instances[0];
      }

      // Apply mocked methods to prototype
      if (Object.keys(this.mocks).length > 0) {
        Object.entries(this.originalFunctions).forEach(function (entry) {
          var _entry3 = _slicedToArray(entry, 2),
            methodName = _entry3[0],
            callback = _entry3[1];
          _this.instance.prototype[methodName] = callback;
        });
        Object.entries(this.mocks).forEach(function (entry) {
          var _entry4 = _slicedToArray(entry, 2),
            methodName = _entry4[0],
            callback = _entry4[1];
          _this.instance.prototype[methodName] = function () {
            for (var _len4 = arguments.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              params[_key4] = arguments[_key4];
            }
            return callback.apply(void 0, [_this].concat(params));
          };
        });
      }
      var newInstance = _construct(this.instance, [this.snowboard].concat(parameters));
      newInstance.detach = function () {
        return _this.instances.splice(_this.instances.indexOf(newInstance), 1);
      };
      newInstance.construct.apply(newInstance, parameters);
      this.instances.push(newInstance);
      return newInstance;
    }

    /**
     * Gets all instances of the current plugin.
     *
     * If this plugin is a callback function plugin, an empty array will be returned.
     *
     * @returns {PluginBase[]}
     */
  }, {
    key: "getInstances",
    value: function getInstances() {
      if (this.isFunction()) {
        return [];
      }
      return this.instances;
    }

    /**
     * Determines if the current plugin is a simple callback function.
     *
     * @returns {boolean}
     */
  }, {
    key: "isFunction",
    value: function isFunction() {
      return typeof this.instance === 'function' && this.instance.prototype instanceof _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"] === false;
    }

    /**
     * Determines if the current plugin is a singleton.
     *
     * @returns {boolean}
     */
  }, {
    key: "isSingleton",
    value: function isSingleton() {
      return this.instance.prototype instanceof _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_1__["default"] === true;
    }

    /**
     * Determines if a singleton has been initialised.
     *
     * Normal plugins will always return true.
     *
     * @returns {boolean}
     */
  }, {
    key: "isInitialised",
    value: function isInitialised() {
      if (!this.isSingleton()) {
        return true;
      }
      return this.singleton.initialised;
    }

    /**
     * Initialises the singleton instance.
     *
     * @returns {void}
     */
  }, {
    key: "initialiseSingleton",
    value: function initialiseSingleton() {
      var _this2 = this;
      if (!this.isSingleton()) {
        return;
      }
      for (var _len5 = arguments.length, parameters = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        parameters[_key5] = arguments[_key5];
      }
      var newInstance = _construct(this.instance, [this.snowboard].concat(parameters));
      newInstance.detach = function () {
        return _this2.instances.splice(_this2.instances.indexOf(newInstance), 1);
      };
      newInstance.construct.apply(newInstance, parameters);
      this.instances.push(newInstance);
      this.singleton.initialised = true;
    }

    /**
     * Gets the dependencies of the current plugin.
     *
     * @returns {string[]}
     */
  }, {
    key: "getDependencies",
    value: function getDependencies() {
      // Callback functions cannot have dependencies.
      if (this.isFunction()) {
        return [];
      }

      // No dependency method specified.
      if (typeof this.instance.prototype.dependencies !== 'function') {
        return [];
      }
      return this.instance.prototype.dependencies().map(function (item) {
        return item.toLowerCase();
      });
    }

    /**
     * Determines if the current plugin has all its dependencies fulfilled.
     *
     * @returns {boolean}
     */
  }, {
    key: "dependenciesFulfilled",
    value: function dependenciesFulfilled() {
      var _this3 = this;
      var dependencies = this.getDependencies();
      var fulfilled = true;
      dependencies.forEach(function (plugin) {
        if (!_this3.snowboard.hasPlugin(plugin)) {
          fulfilled = false;
        }
      });
      return fulfilled;
    }

    /**
     * Allows a method of an instance to be mocked for testing.
     *
     * This mock will be applied for the life of an instance. For singletons, the mock will be applied for the life
     * of the page.
     *
     * Mocks cannot be applied to callback function plugins.
     *
     * @param {string} methodName
     * @param {Function} callback
     */
  }, {
    key: "mock",
    value: function mock(methodName, callback) {
      var _this4 = this;
      if (this.isFunction()) {
        return;
      }
      if (!this.instance.prototype[methodName]) {
        throw new Error("Function \"".concat(methodName, "\" does not exist and cannot be mocked"));
      }
      this.mocks[methodName] = callback;
      this.originalFunctions[methodName] = this.instance.prototype[methodName];
      if (this.isSingleton() && this.instances.length === 0) {
        this.initialiseSingleton();

        // Apply mocked method
        this.instances[0][methodName] = function () {
          for (var _len6 = arguments.length, parameters = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            parameters[_key6] = arguments[_key6];
          }
          return callback.apply(void 0, [_this4].concat(parameters));
        };
      }
    }

    /**
     * Removes a mock callback from future instances.
     *
     * @param {string} methodName
     */
  }, {
    key: "unmock",
    value: function unmock(methodName) {
      if (this.isFunction()) {
        return;
      }
      if (!this.mocks[methodName]) {
        return;
      }
      if (this.isSingleton()) {
        this.instances[0][methodName] = this.originalFunctions[methodName];
      }
      delete this.mocks[methodName];
      delete this.originalFunctions[methodName];
    }
  }]);
}();


/***/ }),

/***/ "../../modules/system/assets/js/snowboard/main/ProxyHandler.js":
/*!*********************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/main/ProxyHandler.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  get: function get(target, prop, receiver) {
    if (typeof prop === 'string') {
      var propLower = prop.toLowerCase();
      if (target.hasPlugin(propLower)) {
        return function () {
          var _Reflect$get$propLowe;
          return (_Reflect$get$propLowe = Reflect.get(target, 'plugins')[propLower]).getInstance.apply(_Reflect$get$propLowe, arguments);
        };
      }
    }
    return Reflect.get(target, prop, receiver);
  },
  has: function has(target, prop) {
    if (typeof prop === 'string') {
      var propLower = prop.toLowerCase();
      if (target.hasPlugin(propLower)) {
        return true;
      }
    }
    return Reflect.has(target, prop);
  }
});

/***/ }),

/***/ "../../modules/system/assets/js/snowboard/main/Snowboard.js":
/*!******************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/main/Snowboard.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Snowboard)
/* harmony export */ });
/* harmony import */ var _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/PluginBase */ "../../modules/system/assets/js/snowboard/abstracts/PluginBase.js");
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstracts/Singleton */ "../../modules/system/assets/js/snowboard/abstracts/Singleton.js");
/* harmony import */ var _PluginLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PluginLoader */ "../../modules/system/assets/js/snowboard/main/PluginLoader.js");
/* harmony import */ var _utilities_Cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/Cookie */ "../../modules/system/assets/js/snowboard/utilities/Cookie.js");
/* harmony import */ var _utilities_JsonParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/JsonParser */ "../../modules/system/assets/js/snowboard/utilities/JsonParser.js");
/* harmony import */ var _utilities_Sanitizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/Sanitizer */ "../../modules/system/assets/js/snowboard/utilities/Sanitizer.js");
/* harmony import */ var _utilities_Url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/Url */ "../../modules/system/assets/js/snowboard/utilities/Url.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








/**
 * Snowboard - the Winter JavaScript framework.
 *
 * This class represents the base of a modern take on the Winter JS framework, being fully extensible and taking advantage
 * of modern JavaScript features by leveraging the Laravel Mix compilation framework. It also is coded up to remove the
 * dependency of jQuery.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 * @link https://wintercms.com/docs/snowboard/introduction
 */
var Snowboard = /*#__PURE__*/function () {
  /**
   * Constructor.
   *
   * @param {boolean} autoSingletons Automatically load singletons when DOM is ready. Default: `true`.
   * @param {boolean} debug Whether debugging logs should be shown. Default: `false`.
   */
  function Snowboard(autoSingletons, debug) {
    _classCallCheck(this, Snowboard);
    this.debugEnabled = typeof debug === 'boolean' && debug === true;
    this.autoInitSingletons = typeof autoSingletons === 'boolean' && autoSingletons === false;
    this.plugins = {};
    this.listeners = {};
    this.foundBaseUrl = null;
    this.readiness = {
      dom: false
    };
    // Seal readiness from being added to further, but allow the properties to be modified.
    Object.seal(this.readiness);
    this.attachAbstracts();

    // Freeze the Snowboard class to prevent further modifications.
    Object.freeze(Snowboard.prototype);
    Object.freeze(this);
    this.loadUtilities();
    this.initialise();
    this.debug('Snowboard framework initialised');
  }

  /**
   * Attaches abstract classes as properties of the Snowboard class.
   *
   * This will allow Javascript functionality with no build process to still extend these abstracts by prefixing
   * them with "Snowboard".
   *
   * ```
   * class MyClass extends Snowboard.PluginBase {
   *     ...
   * }
   * ```
   */
  return _createClass(Snowboard, [{
    key: "attachAbstracts",
    value: function attachAbstracts() {
      this.PluginBase = _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"];
      this.Singleton = _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_1__["default"];
      Object.freeze(this.PluginBase.prototype);
      Object.freeze(this.PluginBase);
      Object.freeze(this.Singleton.prototype);
      Object.freeze(this.Singleton);
    }

    /**
     * Loads the default utilities.
     */
  }, {
    key: "loadUtilities",
    value: function loadUtilities() {
      this.addPlugin('cookie', _utilities_Cookie__WEBPACK_IMPORTED_MODULE_3__["default"]);
      this.addPlugin('jsonParser', _utilities_JsonParser__WEBPACK_IMPORTED_MODULE_4__["default"]);
      this.addPlugin('sanitizer', _utilities_Sanitizer__WEBPACK_IMPORTED_MODULE_5__["default"]);
      this.addPlugin('url', _utilities_Url__WEBPACK_IMPORTED_MODULE_6__["default"]);
    }

    /**
     * Initialises the framework.
     *
     * Attaches a listener for the DOM being ready and triggers a global "ready" event for plugins to begin attaching
     * themselves to the DOM.
     */
  }, {
    key: "initialise",
    value: function initialise() {
      var _this = this;
      window.addEventListener('DOMContentLoaded', function () {
        if (_this.autoInitSingletons) {
          _this.initialiseSingletons();
        }
        _this.globalEvent('ready');
        _this.readiness.dom = true;
      });
    }

    /**
     * Initialises an instance of every singleton.
     */
  }, {
    key: "initialiseSingletons",
    value: function initialiseSingletons() {
      Object.values(this.plugins).forEach(function (plugin) {
        if (plugin.isSingleton() && plugin.dependenciesFulfilled()) {
          plugin.initialiseSingleton();
        }
      });
    }

    /**
     * Adds a plugin to the framework.
     *
     * Plugins are the cornerstone for additional functionality for Snowboard. A plugin must either be an ES2015 class
     * that extends the PluginBase or Singleton abstract classes, or a simple callback function.
     *
     * When a plugin is added, it is automatically assigned as a new magic method in the Snowboard class using the name
     * parameter, and can be called via this method. This method will always be the "lowercase" version of this name.
     *
     * For example, if a plugin is assigned to the name "myPlugin", it can be called via `Snowboard.myplugin()`.
     *
     * @param {string} name
     * @param {PluginBase|Function} instance
     */
  }, {
    key: "addPlugin",
    value: function addPlugin(name, instance) {
      var _this2 = this;
      var lowerName = name.toLowerCase();
      if (this.hasPlugin(lowerName)) {
        throw new Error("A plugin called \"".concat(name, "\" is already registered."));
      }
      if (typeof instance !== 'function' && instance instanceof _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"] === false) {
        throw new Error('The provided plugin must extend the PluginBase class, or must be a callback function.');
      }
      if (this[name] !== undefined || this[lowerName] !== undefined) {
        throw new Error('The given name is already in use for a property or method of the Snowboard class.');
      }
      this.plugins[lowerName] = new _PluginLoader__WEBPACK_IMPORTED_MODULE_2__["default"](lowerName, this, instance);
      this.debug("Plugin \"".concat(name, "\" registered"));

      // Check if any singletons now have their dependencies fulfilled, and fire their "ready" handler if we're
      // in a ready state.
      Object.values(this.getPlugins()).forEach(function (plugin) {
        if (plugin.isSingleton() && !plugin.isInitialised() && plugin.dependenciesFulfilled() && plugin.hasMethod('listens') && Object.keys(plugin.callMethod('listens')).includes('ready') && _this2.readiness.dom) {
          var readyMethod = plugin.callMethod('listens').ready;
          plugin.callMethod(readyMethod);
        }
      });
    }

    /**
     * Removes a plugin.
     *
     * Removes a plugin from Snowboard, calling the destructor method for all active instances of the plugin.
     *
     * @param {string} name
     * @returns {void}
     */
  }, {
    key: "removePlugin",
    value: function removePlugin(name) {
      var lowerName = name.toLowerCase();
      if (!this.hasPlugin(lowerName)) {
        this.debug("Plugin \"".concat(name, "\" already removed"));
        return;
      }

      // Call destructors for all instances
      this.plugins[lowerName].getInstances().forEach(function (instance) {
        instance.destruct();
      });
      delete this.plugins[lowerName];
      delete this[lowerName];
      delete this[name];
      this.debug("Plugin \"".concat(name, "\" removed"));
    }

    /**
     * Determines if a plugin has been registered and is active.
     *
     * A plugin that is still waiting for dependencies to be registered will not be active.
     *
     * @param {string} name
     * @returns {boolean}
     */
  }, {
    key: "hasPlugin",
    value: function hasPlugin(name) {
      var lowerName = name.toLowerCase();
      return this.plugins[lowerName] !== undefined;
    }

    /**
     * Returns an array of registered plugins as PluginLoader objects.
     *
     * @returns {PluginLoader[]}
     */
  }, {
    key: "getPlugins",
    value: function getPlugins() {
      return this.plugins;
    }

    /**
     * Returns an array of registered plugins, by name.
     *
     * @returns {string[]}
     */
  }, {
    key: "getPluginNames",
    value: function getPluginNames() {
      return Object.keys(this.plugins);
    }

    /**
     * Returns a PluginLoader object of a given plugin.
     *
     * @returns {PluginLoader}
     */
  }, {
    key: "getPlugin",
    value: function getPlugin(name) {
      var lowerName = name.toLowerCase();
      if (!this.hasPlugin(lowerName)) {
        throw new Error("No plugin called \"".concat(lowerName, "\" has been registered."));
      }
      return this.plugins[lowerName];
    }

    /**
     * Finds all plugins that listen to the given event.
     *
     * This works for both normal and promise events. It does NOT check that the plugin's listener actually exists.
     *
     * @param {string} eventName
     * @returns {string[]} The name of the plugins that are listening to this event.
     */
  }, {
    key: "listensToEvent",
    value: function listensToEvent(eventName) {
      var plugins = [];
      Object.entries(this.plugins).forEach(function (entry) {
        var _entry = _slicedToArray(entry, 2),
          name = _entry[0],
          plugin = _entry[1];
        if (plugin.isFunction()) {
          return;
        }
        if (!plugin.dependenciesFulfilled()) {
          return;
        }
        if (!plugin.hasMethod('listens')) {
          return;
        }
        var listeners = plugin.callMethod('listens');
        if (typeof listeners[eventName] === 'string' || typeof listeners[eventName] === 'function') {
          plugins.push(name);
        }
      });
      return plugins;
    }

    /**
     * Add a simple ready listener.
     *
     * Synonymous with jQuery's "$(document).ready()" functionality, this allows inline scripts to
     * attach themselves to Snowboard immediately but only fire when the DOM is ready.
     *
     * @param {Function} callback
     */
  }, {
    key: "ready",
    value: function ready(callback) {
      if (this.readiness.dom) {
        callback();
      }
      this.on('ready', callback);
    }

    /**
     * Adds a simple listener for an event.
     *
     * This can be used for ad-hoc scripts that don't need a full plugin. The given callback will be
     * called when the event name provided fires. This works for both normal and Promise events. For
     * a Promise event, your callback must return a Promise.
     *
     * @param {String} eventName
     * @param {Function} callback
     */
  }, {
    key: "on",
    value: function on(eventName, callback) {
      if (!this.listeners[eventName]) {
        this.listeners[eventName] = [];
      }
      if (!this.listeners[eventName].includes(callback)) {
        this.listeners[eventName].push(callback);
      }
    }

    /**
     * Removes a simple listener for an event.
     *
     * @param {String} eventName
     * @param {Function} callback
     */
  }, {
    key: "off",
    value: function off(eventName, callback) {
      if (!this.listeners[eventName]) {
        return;
      }
      var index = this.listeners[eventName].indexOf(callback);
      if (index === -1) {
        return;
      }
      this.listeners[eventName].splice(index, 1);
    }

    /**
     * Calls a global event to all registered plugins.
     *
     * If any plugin returns a `false`, the event is considered cancelled.
     *
     * @param {string} eventName
     * @returns {boolean} If event was not cancelled
     */
  }, {
    key: "globalEvent",
    value: function globalEvent(eventName) {
      var _this3 = this;
      for (var _len = arguments.length, parameters = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        parameters[_key - 1] = arguments[_key];
      }
      this.debug.apply(this, ["Calling global event \"".concat(eventName, "\"")].concat(parameters));

      // Find plugins listening to the event.
      var listeners = this.listensToEvent(eventName);
      if (listeners.length === 0) {
        this.debug("No listeners found for global event \"".concat(eventName, "\""));
        return true;
      }
      this.debug("Listeners found for global event \"".concat(eventName, "\": ").concat(listeners.join(', ')));
      var cancelled = false;
      listeners.forEach(function (name) {
        var plugin = _this3.getPlugin(name);
        if (plugin.isFunction()) {
          return;
        }
        if (plugin.isSingleton() && plugin.getInstances().length === 0) {
          plugin.initialiseSingleton();
        }
        var listenMethod = plugin.callMethod('listens')[eventName];

        // Call event handler methods for all plugins, if they have a method specified for the event.
        plugin.getInstances().forEach(function (instance) {
          // If a plugin has cancelled the event, no further plugins are considered.
          if (cancelled) {
            return;
          }
          if (typeof listenMethod === 'function') {
            try {
              var result = listenMethod.apply(instance, parameters);
              if (result === false) {
                cancelled = true;
              }
            } catch (error) {
              _this3.error("Error thrown in \"".concat(eventName, "\" event by \"").concat(name, "\" plugin."), error);
            }
          } else if (typeof listenMethod === 'string') {
            if (!instance[listenMethod]) {
              throw new Error("Missing \"".concat(listenMethod, "\" method in \"").concat(name, "\" plugin"));
            }
            try {
              if (instance[listenMethod].apply(instance, parameters) === false) {
                cancelled = true;
                _this3.debug("Global event \"".concat(eventName, "\" cancelled by \"").concat(name, "\" plugin"));
              }
            } catch (error) {
              _this3.error("Error thrown in \"".concat(eventName, "\" event by \"").concat(name, "\" plugin."), error);
            }
          } else {
            _this3.error("Listen method for \"".concat(eventName, "\" event in \"").concat(name, "\" plugin is not a function or string."));
          }
        });
      });

      // Find ad-hoc listeners for this event.
      if (!cancelled && this.listeners[eventName] && this.listeners[eventName].length > 0) {
        this.debug("Found ".concat(this.listeners[eventName].length, " ad-hoc listener(s) for global event \"").concat(eventName, "\""));
        this.listeners[eventName].forEach(function (listener) {
          // If a listener has cancelled the event, no further listeners are considered.
          if (cancelled) {
            return;
          }
          try {
            if (listener.apply(void 0, parameters) === false) {
              cancelled = true;
              _this3.debug("Global event \"".concat(eventName, " cancelled by an ad-hoc listener."));
            }
          } catch (error) {
            _this3.error("Error thrown in \"".concat(eventName, "\" event by an ad-hoc listener."), error);
          }
        });
      }
      return !cancelled;
    }

    /**
     * Calls a global event to all registered plugins, expecting a Promise to be returned by all.
     *
     * This collates all plugins responses into one large Promise that either expects all to be resolved, or one to reject.
     * If no listeners are found, a resolved Promise is returned.
     *
     * @param {string} eventName
     */
  }, {
    key: "globalPromiseEvent",
    value: function globalPromiseEvent(eventName) {
      var _this4 = this;
      for (var _len2 = arguments.length, parameters = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        parameters[_key2 - 1] = arguments[_key2];
      }
      this.debug("Calling global promise event \"".concat(eventName, "\""));

      // Find plugins listening to this event.
      var listeners = this.listensToEvent(eventName);
      if (listeners.length === 0) {
        this.debug("No listeners found for global promise event \"".concat(eventName, "\""));
        return Promise.resolve();
      }
      this.debug("Listeners found for global promise event \"".concat(eventName, "\": ").concat(listeners.join(', ')));
      var promises = [];
      listeners.forEach(function (name) {
        var plugin = _this4.getPlugin(name);
        if (plugin.isFunction()) {
          return;
        }
        if (plugin.isSingleton() && plugin.getInstances().length === 0) {
          plugin.initialiseSingleton();
        }
        var listenMethod = plugin.callMethod('listens')[eventName];

        // Call event handler methods for all plugins, if they have a method specified for the event.
        plugin.getInstances().forEach(function (instance) {
          if (typeof listenMethod === 'function') {
            try {
              var instancePromise = listenMethod.apply(instance, parameters);
              if (instancePromise instanceof Promise === false) {
                return;
              }
              promises.push(instancePromise);
            } catch (error) {
              _this4.error("Error thrown in \"".concat(eventName, "\" event by \"").concat(name, "\" plugin."), error);
            }
          } else if (typeof listenMethod === 'string') {
            if (!instance[listenMethod]) {
              throw new Error("Missing \"".concat(listenMethod, "\" method in \"").concat(name, "\" plugin"));
            }
            try {
              var _instancePromise = instance[listenMethod].apply(instance, parameters);
              if (_instancePromise instanceof Promise === false) {
                return;
              }
              promises.push(_instancePromise);
            } catch (error) {
              _this4.error("Error thrown in \"".concat(eventName, "\" promise event by \"").concat(name, "\" plugin."), error);
            }
          } else {
            _this4.error("Listen method for \"".concat(eventName, "\" event in \"").concat(name, "\" plugin is not a function or string."));
          }
        });
      });

      // Find ad-hoc listeners listening to this event.
      if (this.listeners[eventName] && this.listeners[eventName].length > 0) {
        this.debug("Found ".concat(this.listeners[eventName].length, " ad-hoc listener(s) for global promise event \"").concat(eventName, "\""));
        this.listeners[eventName].forEach(function (listener) {
          try {
            var listenerPromise = listener.apply(void 0, parameters);
            if (listenerPromise instanceof Promise === false) {
              return;
            }
            promises.push(listenerPromise);
          } catch (error) {
            _this4.error("Error thrown in \"".concat(eventName, "\" promise event by an ad-hoc listener."), error);
          }
        });
      }
      if (promises.length === 0) {
        return Promise.resolve();
      }
      return Promise.all(promises);
    }

    /**
     * Log a styled message in the console.
     *
     * Includes parameters and a stack trace.
     *
     * @returns {void}
     */
  }, {
    key: "logMessage",
    value: function logMessage(color, bold, message) {
      /* eslint-disable */
      console.groupCollapsed('%c[Snowboard]', "color: ".concat(color, "; font-weight: ").concat(bold ? 'bold' : 'normal', ";"), message);
      for (var _len3 = arguments.length, parameters = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
        parameters[_key3 - 3] = arguments[_key3];
      }
      if (parameters.length) {
        console.groupCollapsed("%cParameters %c(".concat(parameters.length, ")"), 'color: rgb(45, 167, 199); font-weight: bold;', 'color: rgb(88, 88, 88); font-weight: normal;');
        var index = 0;
        parameters.forEach(function (param) {
          index += 1;
          console.log("%c".concat(index, ":"), 'color: rgb(88, 88, 88); font-weight: normal;', param);
        });
        console.groupEnd();
        console.groupCollapsed('%cTrace', 'color: rgb(45, 167, 199); font-weight: bold;');
        console.trace();
        console.groupEnd();
      } else {
        console.trace();
      }
      console.groupEnd();
      /* eslint-enable */
    }

    /**
     * Log a message.
     *
     * @returns {void}
     */
  }, {
    key: "log",
    value: function log(message) {
      for (var _len4 = arguments.length, parameters = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        parameters[_key4 - 1] = arguments[_key4];
      }
      this.logMessage.apply(this, ['rgb(45, 167, 199)', false, message].concat(parameters));
    }

    /**
     * Log a debug message.
     *
     * These messages are only shown when debugging is enabled.
     *
     * @returns {void}
     */
  }, {
    key: "debug",
    value: function debug(message) {
      if (!this.debugEnabled) {
        return;
      }
      for (var _len5 = arguments.length, parameters = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        parameters[_key5 - 1] = arguments[_key5];
      }
      this.logMessage.apply(this, ['rgb(45, 167, 199)', false, message].concat(parameters));
    }

    /**
     * Logs an error message.
     *
     * @returns {void}
     */
  }, {
    key: "error",
    value: function error(message) {
      for (var _len6 = arguments.length, parameters = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        parameters[_key6 - 1] = arguments[_key6];
      }
      this.logMessage.apply(this, ['rgb(229, 35, 35)', true, message].concat(parameters));
    }
  }]);
}();


/***/ }),

/***/ "../../modules/system/assets/js/snowboard/utilities/Cookie.js":
/*!********************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/utilities/Cookie.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cookie)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "../../node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstracts/Singleton */ "../../modules/system/assets/js/snowboard/abstracts/Singleton.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



/**
 * Cookie utility.
 *
 * This utility is a thin wrapper around the "js-cookie" library.
 *
 * @see https://github.com/js-cookie/js-cookie
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Cookie = /*#__PURE__*/function (_Singleton) {
  function Cookie() {
    _classCallCheck(this, Cookie);
    return _callSuper(this, Cookie, arguments);
  }
  _inherits(Cookie, _Singleton);
  return _createClass(Cookie, [{
    key: "construct",
    value: function construct() {
      this.defaults = {
        expires: null,
        path: '/',
        domain: null,
        secure: false,
        sameSite: 'Lax'
      };
    }

    /**
     * Set the default cookie parameters for all subsequent "set" and "remove" calls.
     *
     * @param {Object} options
     */
  }, {
    key: "setDefaults",
    value: function setDefaults(options) {
      var _this = this;
      if (_typeof(options) !== 'object') {
        throw new Error('Cookie defaults must be provided as an object');
      }
      Object.entries(options).forEach(function (entry) {
        var _entry = _slicedToArray(entry, 2),
          key = _entry[0],
          value = _entry[1];
        if (_this.defaults[key] !== undefined) {
          _this.defaults[key] = value;
        }
      });
    }

    /**
     * Get the current default cookie parameters.
     *
     * @returns {Object}
     */
  }, {
    key: "getDefaults",
    value: function getDefaults() {
      var _this2 = this;
      var defaults = {};
      Object.entries(this.defaults).forEach(function (entry) {
        var _entry2 = _slicedToArray(entry, 2),
          key = _entry2[0],
          value = _entry2[1];
        if (_this2.defaults[key] !== null) {
          defaults[key] = value;
        }
      });
      return defaults;
    }

    /**
     * Get a cookie by name.
     *
     * If `name` is undefined, returns all cookies as an Object.
     *
     * @param {String} name
     * @returns {Object|String}
     */
  }, {
    key: "get",
    value: function get(name) {
      var _this3 = this;
      if (name === undefined) {
        var cookies = js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get();
        Object.entries(cookies).forEach(function (entry) {
          var _entry3 = _slicedToArray(entry, 2),
            cookieName = _entry3[0],
            cookieValue = _entry3[1];
          _this3.snowboard.globalEvent('cookie.get', cookieName, cookieValue, function (newValue) {
            cookies[cookieName] = newValue;
          });
        });
        return cookies;
      }
      var value = js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(name);

      // Allow plugins to override the gotten value
      this.snowboard.globalEvent('cookie.get', name, value, function (newValue) {
        value = newValue;
      });
      return value;
    }

    /**
     * Set a cookie by name.
     *
     * You can specify additional cookie parameters through the "options" parameter.
     *
     * @param {String} name
     * @param {String} value
     * @param {Object} options
     * @returns {String}
     */
  }, {
    key: "set",
    value: function set(name, value, options) {
      var saveValue = value;

      // Allow plugins to override the value to save
      this.snowboard.globalEvent('cookie.set', name, value, function (newValue) {
        saveValue = newValue;
      });
      return js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set(name, saveValue, _objectSpread(_objectSpread({}, this.getDefaults()), options));
    }

    /**
     * Remove a cookie by name.
     *
     * You can specify the additional cookie parameters via the "options" parameter.
     *
     * @param {String} name
     * @param {Object} options
     * @returns {void}
     */
  }, {
    key: "remove",
    value: function remove(name, options) {
      js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove(name, _objectSpread(_objectSpread({}, this.getDefaults()), options));
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "../../modules/system/assets/js/snowboard/utilities/JsonParser.js":
/*!************************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/utilities/JsonParser.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JsonParser)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "../../modules/system/assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * JSON Parser utility.
 *
 * This utility parses JSON-like data that does not strictly meet the JSON specifications in order to simplify development.
 * It is a safe replacement for JSON.parse(JSON.stringify(eval("({" + value + "})"))) that does not require the use of eval()
 *
 * @author Ayumi Hamasaki
 * @author Ben Thomson <git@alfreido.com>
 * @see https://github.com/octobercms/october/pull/4527
 */
var JsonParser = /*#__PURE__*/function (_Singleton) {
  function JsonParser() {
    _classCallCheck(this, JsonParser);
    return _callSuper(this, JsonParser, arguments);
  }
  _inherits(JsonParser, _Singleton);
  return _createClass(JsonParser, [{
    key: "construct",
    value: function construct() {
      var _this = this;
      // Add to global function for backwards compatibility
      window.wnJSON = function (json) {
        return _this.parse(json);
      };
      window.ocJSON = window.wnJSON;
    }
  }, {
    key: "parse",
    value: function parse(str) {
      var jsonString = this.parseString(str);
      return JSON.parse(jsonString);
    }
  }, {
    key: "parseString",
    value: function parseString(value) {
      var str = value.trim();
      if (!str.length) {
        throw new Error('Broken JSON object.');
      }
      var result = '';
      var type = null;
      var key = null;
      var body = '';

      /*
      * the mistake ','
      */
      while (str && str[0] === ',') {
        str = str.substr(1);
      }

      /*
      * string
      */
      if (str[0] === '"' || str[0] === '\'') {
        if (str[str.length - 1] !== str[0]) {
          throw new Error('Invalid string JSON object.');
        }
        body = '"';
        for (var i = 1; i < str.length; i += 1) {
          if (str[i] === '\\') {
            if (str[i + 1] === '\'') {
              body += str[i + 1];
            } else {
              body += str[i];
              body += str[i + 1];
            }
            i += 1;
          } else if (str[i] === str[0]) {
            body += '"';
            return body;
          } else if (str[i] === '"') {
            body += '\\"';
          } else {
            body += str[i];
          }
        }
        throw new Error('Invalid string JSON object.');
      }

      /*
      * boolean
      */
      if (str === 'true' || str === 'false') {
        return str;
      }

      /*
      * null
      */
      if (str === 'null') {
        return 'null';
      }

      /*
      * number
      */
      var num = Number(str);
      if (!Number.isNaN(num)) {
        return num.toString();
      }

      /*
      * object
      */
      if (str[0] === '{') {
        type = 'needKey';
        key = null;
        result = '{';
        for (var _i = 1; _i < str.length; _i += 1) {
          if (this.isBlankChar(str[_i])) {
            /* eslint-disable-next-line */
            continue;
          }
          if (type === 'needKey' && (str[_i] === '"' || str[_i] === '\'')) {
            key = this.parseKey(str, _i + 1, str[_i]);
            result += "\"".concat(key, "\"");
            _i += key.length;
            _i += 1;
            type = 'afterKey';
          } else if (type === 'needKey' && this.canBeKeyHead(str[_i])) {
            key = this.parseKey(str, _i);
            result += '"';
            result += key;
            result += '"';
            _i += key.length - 1;
            type = 'afterKey';
          } else if (type === 'afterKey' && str[_i] === ':') {
            result += ':';
            type = ':';
          } else if (type === ':') {
            body = this.getBody(str, _i);
            _i = _i + body.originLength - 1;
            result += this.parseString(body.body);
            type = 'afterBody';
          } else if (type === 'afterBody' || type === 'needKey') {
            var last = _i;
            while (str[last] === ',' || this.isBlankChar(str[last])) {
              last += 1;
            }
            if (str[last] === '}' && last === str.length - 1) {
              while (result[result.length - 1] === ',') {
                result = result.substr(0, result.length - 1);
              }
              result += '}';
              return result;
            }
            if (last !== _i && result !== '{') {
              result += ',';
              type = 'needKey';
              _i = last - 1;
            }
          }
        }
        throw new Error("Broken JSON object near ".concat(result));
      }

      /*
      * array
      */
      if (str[0] === '[') {
        result = '[';
        type = 'needBody';
        for (var _i2 = 1; _i2 < str.length; _i2 += 1) {
          if (str[_i2] === ' ' || str[_i2] === '\n' || str[_i2] === '\t') {
            /* eslint-disable-next-line */
            continue;
          } else if (type === 'needBody') {
            if (str[_i2] === ',') {
              result += 'null,';
              /* eslint-disable-next-line */
              continue;
            }
            if (str[_i2] === ']' && _i2 === str.length - 1) {
              if (result[result.length - 1] === ',') {
                result = result.substr(0, result.length - 1);
              }
              result += ']';
              return result;
            }
            body = this.getBody(str, _i2);
            _i2 = _i2 + body.originLength - 1;
            result += this.parseString(body.body);
            type = 'afterBody';
          } else if (type === 'afterBody') {
            if (str[_i2] === ',') {
              result += ',';
              type = 'needBody';

              // deal with mistake ","
              while (str[_i2 + 1] === ',' || this.isBlankChar(str[_i2 + 1])) {
                if (str[_i2 + 1] === ',') {
                  result += 'null,';
                }
                _i2 += 1;
              }
            } else if (str[_i2] === ']' && _i2 === str.length - 1) {
              result += ']';
              return result;
            }
          }
        }
        throw new Error("Broken JSON array near ".concat(result));
      }
      return '';
    }
  }, {
    key: "getBody",
    value: function getBody(str, pos) {
      var body = '';

      // parse string body
      if (str[pos] === '"' || str[pos] === '\'') {
        body = str[pos];
        for (var i = pos + 1; i < str.length; i += 1) {
          if (str[i] === '\\') {
            body += str[i];
            if (i + 1 < str.length) {
              body += str[i + 1];
            }
            i += 1;
          } else if (str[i] === str[pos]) {
            body += str[pos];
            return {
              originLength: body.length,
              body: body
            };
          } else {
            body += str[i];
          }
        }
        throw new Error("Broken JSON string body near ".concat(body));
      }

      // parse true / false
      if (str[pos] === 't') {
        if (str.indexOf('true', pos) === pos) {
          return {
            originLength: 'true'.length,
            body: 'true'
          };
        }
        throw new Error("Broken JSON boolean body near ".concat(str.substr(0, pos + 10)));
      }
      if (str[pos] === 'f') {
        if (str.indexOf('f', pos) === pos) {
          return {
            originLength: 'false'.length,
            body: 'false'
          };
        }
        throw new Error("Broken JSON boolean body near ".concat(str.substr(0, pos + 10)));
      }

      // parse null
      if (str[pos] === 'n') {
        if (str.indexOf('null', pos) === pos) {
          return {
            originLength: 'null'.length,
            body: 'null'
          };
        }
        throw new Error("Broken JSON boolean body near ".concat(str.substr(0, pos + 10)));
      }

      // parse number
      if (str[pos] === '-' || str[pos] === '+' || str[pos] === '.' || str[pos] >= '0' && str[pos] <= '9') {
        body = '';
        for (var _i3 = pos; _i3 < str.length; _i3 += 1) {
          if (str[_i3] === '-' || str[_i3] === '+' || str[_i3] === '.' || str[_i3] >= '0' && str[_i3] <= '9') {
            body += str[_i3];
          } else {
            return {
              originLength: body.length,
              body: body
            };
          }
        }
        throw new Error("Broken JSON number body near ".concat(body));
      }

      // parse object
      if (str[pos] === '{' || str[pos] === '[') {
        var stack = [str[pos]];
        body = str[pos];
        for (var _i4 = pos + 1; _i4 < str.length; _i4 += 1) {
          body += str[_i4];
          if (str[_i4] === '\\') {
            if (_i4 + 1 < str.length) {
              body += str[_i4 + 1];
            }
            _i4 += 1;
          } else if (str[_i4] === '"') {
            if (stack[stack.length - 1] === '"') {
              stack.pop();
            } else if (stack[stack.length - 1] !== '\'') {
              stack.push(str[_i4]);
            }
          } else if (str[_i4] === '\'') {
            if (stack[stack.length - 1] === '\'') {
              stack.pop();
            } else if (stack[stack.length - 1] !== '"') {
              stack.push(str[_i4]);
            }
          } else if (stack[stack.length - 1] !== '"' && stack[stack.length - 1] !== '\'') {
            if (str[_i4] === '{') {
              stack.push('{');
            } else if (str[_i4] === '}') {
              if (stack[stack.length - 1] === '{') {
                stack.pop();
              } else {
                throw new Error("Broken JSON ".concat(str[pos] === '{' ? 'object' : 'array', " body near ").concat(body));
              }
            } else if (str[_i4] === '[') {
              stack.push('[');
            } else if (str[_i4] === ']') {
              if (stack[stack.length - 1] === '[') {
                stack.pop();
              } else {
                throw new Error("Broken JSON ".concat(str[pos] === '{' ? 'object' : 'array', " body near ").concat(body));
              }
            }
          }
          if (!stack.length) {
            return {
              originLength: _i4 - pos,
              body: body
            };
          }
        }
        throw new Error("Broken JSON ".concat(str[pos] === '{' ? 'object' : 'array', " body near ").concat(body));
      }
      throw new Error("Broken JSON body near ".concat(str.substr(pos - 5 >= 0 ? pos - 5 : 0, 50)));
    }
  }, {
    key: "parseKey",
    value: function parseKey(str, pos, quote) {
      var key = '';
      for (var i = pos; i < str.length; i += 1) {
        if (quote && quote === str[i]) {
          return key;
        }
        if (!quote && (str[i] === ' ' || str[i] === ':')) {
          return key;
        }
        key += str[i];
        if (str[i] === '\\' && i + 1 < str.length) {
          key += str[i + 1];
          i += 1;
        }
      }
      throw new Error("Broken JSON syntax near ".concat(key));
    }
  }, {
    key: "canBeKeyHead",
    value: function canBeKeyHead(ch) {
      if (ch[0] === '\\') {
        return false;
      }
      if (ch[0] >= 'a' && ch[0] <= 'z' || ch[0] >= 'A' && ch[0] <= 'Z' || ch[0] === '_') {
        return true;
      }
      if (ch[0] >= '0' && ch[0] <= '9') {
        return true;
      }
      if (ch[0] === '$') {
        return true;
      }
      if (ch.charCodeAt(0) > 255) {
        return true;
      }
      return false;
    }
  }, {
    key: "isBlankChar",
    value: function isBlankChar(ch) {
      return ch === ' ' || ch === '\n' || ch === '\t';
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../modules/system/assets/js/snowboard/utilities/Sanitizer.js":
/*!***********************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/utilities/Sanitizer.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sanitizer)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "../../modules/system/assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Sanitizer utility.
 *
 * Client-side HTML sanitizer designed mostly to prevent self-XSS attacks.
 * The sanitizer utility will strip all attributes that start with `on` (usually JS event handlers as attributes, i.e. `onload` or `onerror`) or contain the `javascript:` pseudo protocol in their values.
 *
 * @author Ben Thomson <git@alfreido.com>
 */
var Sanitizer = /*#__PURE__*/function (_Singleton) {
  function Sanitizer() {
    _classCallCheck(this, Sanitizer);
    return _callSuper(this, Sanitizer, arguments);
  }
  _inherits(Sanitizer, _Singleton);
  return _createClass(Sanitizer, [{
    key: "construct",
    value: function construct() {
      var _this = this;
      // Add to global function for backwards compatibility
      window.wnSanitize = function (html) {
        return _this.sanitize(html);
      };
      window.ocSanitize = window.wnSanitize;
    }
  }, {
    key: "sanitize",
    value: function sanitize(html, bodyOnly) {
      var parser = new DOMParser();
      var dom = parser.parseFromString(html, 'text/html');
      var returnBodyOnly = bodyOnly !== undefined && typeof bodyOnly === 'boolean' ? bodyOnly : true;
      this.sanitizeNode(dom.getRootNode());
      return returnBodyOnly ? dom.body.innerHTML : dom.innerHTML;
    }
  }, {
    key: "sanitizeNode",
    value: function sanitizeNode(node) {
      var _this2 = this;
      if (node.tagName === 'SCRIPT') {
        node.remove();
        return;
      }
      this.trimAttributes(node);
      var children = Array.from(node.children);
      children.forEach(function (child) {
        _this2.sanitizeNode(child);
      });
    }
  }, {
    key: "trimAttributes",
    value: function trimAttributes(node) {
      if (!node.attributes) {
        return;
      }
      for (var i = 0; i < node.attributes.length; i += 1) {
        var attrName = node.attributes.item(i).name;
        var attrValue = node.attributes.item(i).value;

        /*
        * remove attributes where the names start with "on" (for example: onload, onerror...)
        * remove attributes where the value starts with the "javascript:" pseudo protocol (for example href="javascript:alert(1)")
        */
        /* eslint-disable-next-line */
        if (attrName.indexOf('on') === 0 || attrValue.indexOf('javascript:') === 0) {
          node.removeAttribute(attrName);
        }
      }
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../modules/system/assets/js/snowboard/utilities/Url.js":
/*!*****************************************************************!*\
  !*** ../../modules/system/assets/js/snowboard/utilities/Url.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Url)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "../../modules/system/assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * URL utility.
 *
 * This utility provides URL functions.
 *
 * @copyright 2022 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Url = /*#__PURE__*/function (_Singleton) {
  function Url() {
    _classCallCheck(this, Url);
    return _callSuper(this, Url, arguments);
  }
  _inherits(Url, _Singleton);
  return _createClass(Url, [{
    key: "construct",
    value: function construct() {
      this.foundBaseUrl = null;
      this.foundAssetUrl = null;
      this.baseUrl();
      this.assetUrl();
    }

    /**
     * Gets a URL based on a relative path.
     *
     * If an absolute URL is provided, it will be returned unchanged.
     *
     * @param {string} url
     * @returns {string}
     */
  }, {
    key: "to",
    value: function to(url) {
      var urlRegex = /^(?:[^:]+:\/\/)[-a-z0-9@:%._+~#=]{1,256}\b([-a-z0-9()@:%_+.~#?&//=]*)/i;
      if (url.match(urlRegex)) {
        return url;
      }
      var theUrl = url.replace(/^\/+/, '');
      return "".concat(this.baseUrl()).concat(theUrl);
    }

    /**
     * Gets an Asset URL based on a relative path.
     *
     * If an absolute URL is provided, it will be returned unchanged.
     *
     * @param {string} url
     * @returns {string}
     */
  }, {
    key: "asset",
    value: function asset(url) {
      var urlRegex = /^(?:[^:]+:\/\/)[-a-z0-9@:%._+~#=]{1,256}\b([-a-z0-9()@:%_+.~#?&//=]*)/i;
      if (url.match(urlRegex)) {
        return url;
      }
      var theUrl = url.replace(/^\/+/, '');
      return "".concat(this.assetUrl()).concat(theUrl);
    }

    /**
     * Helper method to get the base URL of this install.
     *
     * This determines the base URL from three sources, in order:
     *  - If Snowboard is loaded via the `{% snowboard %}` tag, it will retrieve the base URL that
     * is automatically included there.
     *  - If a `<base>` tag is available, it will use the URL specified in the base tag.
     *  - Finally, it will take a guess from the current location. This will likely not work for sites
     * that reside in subdirectories.
     *
     * The base URL will always contain a trailing backslash.
     *
     * @returns {string}
     */
  }, {
    key: "baseUrl",
    value: function baseUrl() {
      if (this.foundBaseUrl !== null) {
        return this.foundBaseUrl;
      }
      if (document.querySelector('script[data-module="snowboard-base"]') !== null) {
        this.foundBaseUrl = this.validateBaseUrl(document.querySelector('script[data-module="snowboard-base"]').dataset.baseUrl);
        return this.foundBaseUrl;
      }
      if (document.querySelector('base') !== null) {
        this.foundBaseUrl = this.validateBaseUrl(document.querySelector('base').getAttribute('href'));
        return this.foundBaseUrl;
      }
      var urlParts = [window.location.protocol, '//', window.location.host, '/'];
      this.foundBaseUrl = urlParts.join('');
      return this.foundBaseUrl;
    }

    /**
     * Helper method to get the asset URL of this install.
     *
     * This determines the base URL from three sources, in order:
     *  - If Snowboard is loaded via the `{% snowboard %}` tag, it will retrieve the asset URL that
     * is automatically included there.
     *  - If a `<link rel="asset_url" href="https://example.com">` tag is available, it will use the URL specified in the link tag.
     *  - Finally, it will take a guess from the current location. This will likely not work for sites
     * that reside in subdirectories.
     *
     * The asset URL will always contain a trailing backslash.
     *
     * @returns {string}
     */
  }, {
    key: "assetUrl",
    value: function assetUrl() {
      if (this.foundAssetUrl !== null) {
        return this.foundAssetUrl;
      }
      if (document.querySelector('script[data-module="snowboard-base"]') !== null) {
        this.foundAssetUrl = this.validateBaseUrl(document.querySelector('script[data-module="snowboard-base"]').dataset.assetUrl);
        return this.foundAssetUrl;
      }
      if (document.querySelector('link[rel="asset_url"]') !== null) {
        this.foundAssetUrl = this.validateBaseUrl(document.querySelector('link[rel="asset_url"]').getAttribute('href'));
        return this.foundAssetUrl;
      }
      var urlParts = [window.location.protocol, '//', window.location.host, '/'];
      this.foundAssetUrl = urlParts.join('');
      return this.foundAssetUrl;
    }

    /**
     * Validates the base URL, ensuring it is a HTTP/HTTPs URL.
     *
     * If the Snowboard script or <base> tag on the page use a different type of URL, this will fail with
     * an error.
     *
     * @param {string} url
     * @returns {string}
     */
  }, {
    key: "validateBaseUrl",
    value: function validateBaseUrl(url) {
      var urlRegex = /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/i;
      var urlParts = urlRegex.exec(url);
      var protocol = urlParts[2];
      var domain = urlParts[4];
      if (protocol && ['http', 'https'].indexOf(protocol.toLowerCase()) === -1) {
        throw new Error('Invalid base URL detected');
      }
      if (!domain) {
        throw new Error('Invalid base URL detected');
      }
      return url.substr(-1) === '/' ? url : "".concat(url, "/");
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/src/app.js":
/*!******************************!*\
  !*** ./assets/js/src/app.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_system_assets_js_snowboard_main_Snowboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../modules/system/assets/js/snowboard/main/Snowboard */ "../../modules/system/assets/js/snowboard/main/Snowboard.js");
/* harmony import */ var _modules_system_assets_js_snowboard_main_ProxyHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../modules/system/assets/js/snowboard/main/ProxyHandler */ "../../modules/system/assets/js/snowboard/main/ProxyHandler.js");
/* harmony import */ var _modules_system_assets_js_snowboard_ajax_Request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../modules/system/assets/js/snowboard/ajax/Request */ "../../modules/system/assets/js/snowboard/ajax/Request.js");
/* harmony import */ var _modules_system_assets_js_snowboard_ajax_handlers_AttributeRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../modules/system/assets/js/snowboard/ajax/handlers/AttributeRequest */ "../../modules/system/assets/js/snowboard/ajax/handlers/AttributeRequest.js");
/* harmony import */ var _modules_system_assets_js_snowboard_extras_AssetLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../modules/system/assets/js/snowboard/extras/AssetLoader */ "../../modules/system/assets/js/snowboard/extras/AssetLoader.js");
/* harmony import */ var _modules_system_assets_js_snowboard_extras_DataConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../modules/system/assets/js/snowboard/extras/DataConfig */ "../../modules/system/assets/js/snowboard/extras/DataConfig.js");
/* harmony import */ var _modules_system_assets_js_snowboard_extras_StylesheetLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../modules/system/assets/js/snowboard/extras/StylesheetLoader */ "../../modules/system/assets/js/snowboard/extras/StylesheetLoader.js");
/* harmony import */ var _modules_system_assets_js_snowboard_extras_Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../modules/system/assets/js/snowboard/extras/Transition */ "../../modules/system/assets/js/snowboard/extras/Transition.js");
/* harmony import */ var _modules_system_assets_js_snowboard_extras_Flash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../modules/system/assets/js/snowboard/extras/Flash */ "../../modules/system/assets/js/snowboard/extras/Flash.js");
/* harmony import */ var _modules_system_assets_js_snowboard_extras_FlashListener__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../modules/system/assets/js/snowboard/extras/FlashListener */ "../../modules/system/assets/js/snowboard/extras/FlashListener.js");
/* harmony import */ var _modules_system_assets_js_snowboard_extras_FormValidation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../modules/system/assets/js/snowboard/extras/FormValidation */ "../../modules/system/assets/js/snowboard/extras/FormValidation.js");
/* harmony import */ var _modules_system_assets_js_snowboard_extras_AttachLoading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../modules/system/assets/js/snowboard/extras/AttachLoading */ "../../modules/system/assets/js/snowboard/extras/AttachLoading.js");
/* harmony import */ var _modules_system_assets_js_snowboard_extras_StripeLoader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../modules/system/assets/js/snowboard/extras/StripeLoader */ "../../modules/system/assets/js/snowboard/extras/StripeLoader.js");
/* harmony import */ var _modules_system_assets_js_snowboard_extras_Trigger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../modules/system/assets/js/snowboard/extras/Trigger */ "../../modules/system/assets/js/snowboard/extras/Trigger.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }














(function (window) {
  var snowboard = new Proxy(new _modules_system_assets_js_snowboard_main_Snowboard__WEBPACK_IMPORTED_MODULE_0__["default"](true, true), _modules_system_assets_js_snowboard_main_ProxyHandler__WEBPACK_IMPORTED_MODULE_1__["default"]);

  // Cover all aliases
  window.snowboard = snowboard;
  window.Snowboard = snowboard;
  window.SnowBoard = snowboard;
  snowboard.addPlugin('request', _modules_system_assets_js_snowboard_ajax_Request__WEBPACK_IMPORTED_MODULE_2__["default"]);
  snowboard.addPlugin('attributeRequest', _modules_system_assets_js_snowboard_ajax_handlers_AttributeRequest__WEBPACK_IMPORTED_MODULE_3__["default"]);
  snowboard.addPlugin('assetLoader', _modules_system_assets_js_snowboard_extras_AssetLoader__WEBPACK_IMPORTED_MODULE_4__["default"]);
  snowboard.addPlugin('dataConfig', _modules_system_assets_js_snowboard_extras_DataConfig__WEBPACK_IMPORTED_MODULE_5__["default"]);
  snowboard.addPlugin('extrasStyles', _modules_system_assets_js_snowboard_extras_StylesheetLoader__WEBPACK_IMPORTED_MODULE_6__["default"]);
  snowboard.addPlugin('transition', _modules_system_assets_js_snowboard_extras_Transition__WEBPACK_IMPORTED_MODULE_7__["default"]);
  snowboard.addPlugin('flash', _modules_system_assets_js_snowboard_extras_Flash__WEBPACK_IMPORTED_MODULE_8__["default"]);
  snowboard.addPlugin('flashListener', _modules_system_assets_js_snowboard_extras_FlashListener__WEBPACK_IMPORTED_MODULE_9__["default"]);
  snowboard.addPlugin('formValidation', _modules_system_assets_js_snowboard_extras_FormValidation__WEBPACK_IMPORTED_MODULE_10__["default"]);
  snowboard.addPlugin('attachLoading', _modules_system_assets_js_snowboard_extras_AttachLoading__WEBPACK_IMPORTED_MODULE_11__["default"]);
  snowboard.addPlugin('stripeLoader', _modules_system_assets_js_snowboard_extras_StripeLoader__WEBPACK_IMPORTED_MODULE_12__["default"]);
  snowboard.addPlugin('trigger', _modules_system_assets_js_snowboard_extras_Trigger__WEBPACK_IMPORTED_MODULE_13__["default"]);
  snowboard.on('ready', function () {
    // Scan for triggers
    Array.from(document.querySelectorAll('*')).filter(function (element) {
      return _toConsumableArray(element.attributes).filter(function (_ref) {
        var name = _ref.name;
        return name.startsWith("data-trigger-");
      }).length > 0;
    }).forEach(function (element) {
      snowboard.trigger(element);
    });
  });
})(window);

/***/ }),

/***/ "./assets/css/base.css":
/*!*****************************!*\
  !*** ./assets/css/base.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../node_modules/js-cookie/dist/js.cookie.mjs":
/*!*******************************************************!*\
  !*** ../../node_modules/js-cookie/dist/js.cookie.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ api)
/* harmony export */ });
/*! js-cookie v3.0.5 | MIT */
/* eslint-disable no-var */
function assign (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target
}
/* eslint-enable no-var */

/* eslint-disable no-var */
var defaultConverter = {
  read: function (value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  },
  write: function (value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
};
/* eslint-enable no-var */

/* eslint-disable no-var */

function init (converter, defaultAttributes) {
  function set (name, value, attributes) {
    if (typeof document === 'undefined') {
      return
    }

    attributes = assign({}, defaultAttributes, attributes);

    if (typeof attributes.expires === 'number') {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }

    name = encodeURIComponent(name)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape);

    var stringifiedAttributes = '';
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue
      }

      stringifiedAttributes += '; ' + attributeName;

      if (attributes[attributeName] === true) {
        continue
      }

      // Considers RFC 6265 section 5.2:
      // ...
      // 3.  If the remaining unparsed-attributes contains a %x3B (";")
      //     character:
      // Consume the characters of the unparsed-attributes up to,
      // not including, the first %x3B (";") character.
      // ...
      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
    }

    return (document.cookie =
      name + '=' + converter.write(value, name) + stringifiedAttributes)
  }

  function get (name) {
    if (typeof document === 'undefined' || (arguments.length && !name)) {
      return
    }

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all.
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split('=');
      var value = parts.slice(1).join('=');

      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);

        if (name === found) {
          break
        }
      } catch (e) {}
    }

    return name ? jar[name] : jar
  }

  return Object.create(
    {
      set,
      get,
      remove: function (name, attributes) {
        set(
          name,
          '',
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function (attributes) {
        return init(this.converter, assign({}, this.attributes, attributes))
      },
      withConverter: function (converter) {
        return init(assign({}, this.converter, converter), this.attributes)
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  )
}

var api = init(defaultConverter, { path: '/' });
/* eslint-enable no-var */




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/js/app": 0,
/******/ 			"assets/css/theme": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwintercms_workshop_theme"] = self["webpackChunkwintercms_workshop_theme"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/css/theme"], () => (__webpack_require__("./assets/js/src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/css/theme"], () => (__webpack_require__("./assets/css/base.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9hYnN0cmFjdHMvUGx1Z2luQmFzZS5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9hYnN0cmFjdHMvU2luZ2xldG9uLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2FqYXgvUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9hamF4L2hhbmRsZXJzL0F0dHJpYnV0ZVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL0Fzc2V0TG9hZGVyLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9BdHRhY2hMb2FkaW5nLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9EYXRhQ29uZmlnLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9GbGFzaC5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvRmxhc2hMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvRm9ybVZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL1N0cmlwZUxvYWRlci5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvU3R5bGVzaGVldExvYWRlci5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvVHJpZ2dlci5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9tYWluL0lubmVyUHJveHlIYW5kbGVyLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL21haW4vUGx1Z2luTG9hZGVyLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL21haW4vUHJveHlIYW5kbGVyLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL21haW4vU25vd2JvYXJkLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL3V0aWxpdGllcy9Db29raWUuanMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvdXRpbGl0aWVzL0pzb25QYXJzZXIuanMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvdXRpbGl0aWVzL1Nhbml0aXplci5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC91dGlsaXRpZXMvVXJsLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uL2Fzc2V0cy9qcy9zcmMvYXBwLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uL2Fzc2V0cy9jc3MvYmFzZS5jc3MiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4uLy4uL25vZGVfbW9kdWxlcy9qcy1jb29raWUvZGlzdC9qcy5jb29raWUubWpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQbHVnaW4gYmFzZSBhYnN0cmFjdC5cbiAqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIHRoZSBiYXNlIGZ1bmN0aW9uYWxpdHkgZm9yIGFsbCBwbHVnaW5zLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5CYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBpcyBwcm92aWRlZCB0aGUgU25vd2JvYXJkIGZyYW1ld29yayBpbnN0YW5jZSwgYW5kIHNob3VsZCBub3QgYmUgb3ZlcndyaXR0ZW5cbiAgICAgKiB1bmxlc3MgeW91IGFic29sdXRlbHkga25vdyB3aGF0IHlvdSdyZSBkb2luZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U25vd2JvYXJkfSBzbm93Ym9hcmRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihzbm93Ym9hcmQpIHtcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQgPSBzbm93Ym9hcmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1Z2luIGNvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2Qgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgdGhlIHRydWUgY29uc3RydWN0b3Igb2YgYSBwbHVnaW4sIGFuZCBjYW4gYmUgb3ZlcndyaXR0ZW4uXG4gICAgICogSXQgd2lsbCBiZSBjYWxsZWQgc3RyYWlnaHQgYWZ0ZXIgY29uc3RydWN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdCgpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSByZXF1aXJlZCBwbHVnaW5zIGZvciB0aGlzIHNwZWNpZmljIG1vZHVsZSB0byB3b3JrLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfSBBbiBhcnJheSBvZiBwbHVnaW5zIHJlcXVpcmVkIGZvciB0aGlzIG1vZHVsZSB0byB3b3JrLCBhcyBzdHJpbmdzLlxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIGxpc3RlbmVyIG1ldGhvZHMgZm9yIGdsb2JhbCBldmVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbHVnaW4gZGVzdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEZpcmVkIHdoZW4gdGhpcyBwbHVnaW4gaXMgcmVtb3ZlZC4gQ2FuIGJlIG1hbnVhbGx5IGNhbGxlZCBpZiB5b3UgaGF2ZSBhbm90aGVyIHNjZW5hcmlvIGZvclxuICAgICAqIGRlc3RydWN0aW9uLCBpZS4gdGhlIGVsZW1lbnQgYXR0YWNoZWQgdG8gdGhlIHBsdWdpbiBpcyByZW1vdmVkIG9yIGNoYW5nZWQuXG4gICAgICovXG4gICAgZGVzdHJ1Y3QoKSB7XG4gICAgICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNub3dib2FyZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbHVnaW4gZGVzdHJ1Y3RvciAob2xkIG1ldGhvZCBuYW1lKS5cbiAgICAgKlxuICAgICAqIEFsbG93cyBwcmV2aW91cyB1c2FnZSBvZiB0aGUgXCJkZXN0cnVjdG9yXCIgbWV0aG9kIHRvIHN0aWxsIHdvcmsuXG4gICAgICovXG4gICAgZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBQbHVnaW5CYXNlIGZyb20gJy4vUGx1Z2luQmFzZSc7XG5cbi8qKlxuICogU2luZ2xldG9uIHBsdWdpbiBhYnN0cmFjdC5cbiAqXG4gKiBUaGlzIGlzIGEgc3BlY2lhbCBkZWZpbml0aW9uIGNsYXNzIHRoYXQgdGhlIFNub3dib2FyZCBmcmFtZXdvcmsgd2lsbCB1c2UgdG8gaW50ZXJwcmV0IHRoZSBjdXJyZW50IHBsdWdpbiBhcyBhXG4gKiBcInNpbmdsZXRvblwiLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgb25seSBvbmUgaW5zdGFuY2Ugb2YgdGhlIHBsdWdpbiBjbGFzcyBpcyB1c2VkIGFjcm9zcyB0aGUgYm9hcmQuXG4gKlxuICogU2luZ2xldG9ucyBhcmUgaW5pdGlhbGlzZWQgb24gdGhlIFwiZG9tUmVhZHlcIiBldmVudCBieSBkZWZhdWx0LlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5nbGV0b24gZXh0ZW5kcyBQbHVnaW5CYXNlIHtcbn1cbiIsImltcG9ydCBQbHVnaW5CYXNlIGZyb20gJy4uL2Fic3RyYWN0cy9QbHVnaW5CYXNlJztcblxuLyoqXG4gKiBSZXF1ZXN0IHBsdWdpbi5cbiAqXG4gKiBUaGlzIGlzIHRoZSBkZWZhdWx0IEFKQVggaGFuZGxlciB3aGljaCB3aWxsIHJ1biB1c2luZyB0aGUgYGZldGNoKClgIG1ldGhvZCB0aGF0IGlzIGRlZmF1bHQgaW4gbW9kZXJuIGJyb3dzZXJzLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1ZXN0IGV4dGVuZHMgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBUaGUgY29uc3RydWN0b3IgYWNjZXB0cyAyIG9yIDMgcGFyYW1ldGVycy5cbiAgICAgKlxuICAgICAqIElmIDIgcGFyYW1ldGVycyBhcmUgcHJvdmlkZWQsIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgdGhlIGhhbmRsZXIgbmFtZSBhbmQgdGhlIHNlY29uZFxuICAgICAqIHBhcmFtZXRlciBpcyB0aGUgb3B0aW9ucy4gVGhpcyBhc3N1bWVzIHRoYXQgdGhpcyBpcyBhIGRldGFjaGVkIEFKQVggcmVxdWVzdCBub3QgY29ubmVjdGVkIHRvXG4gICAgICogYW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIElmIDMgcGFyYW1ldGVycyBhcmUgcHJvdmlkZWQsIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgYW4gZWxlbWVudCBvciBhIHNlbGVjdG9yLCBhbmQgdGhlIHNlY29uZFxuICAgICAqIGFuZCB0aGlyZCBwYXJhbWV0ZXJzIGFyZSB0aGUgaGFuZGxlciBhbmQgb3B0aW9ucywgcmVzcGVjdGl2ZWx5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxzdHJpbmd9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChlbGVtZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIC8vIEFsbG93IHRoZSBlbGVtZW50IHRvIGJlIGEgaGFuZGxlciBuYW1lLlxuICAgICAgICAgICAgLy8gVGhpcyBhc3N1bWVzIHRoZSByZXF1ZXN0IGlzIGJlaW5nIG1hZGUgYWdhaW5zdCBubyBlbGVtZW50LCBhbmQgdGhlIGhhbmRsZXIgcGFyYW1ldGVyXG4gICAgICAgICAgICAvLyB3aWxsIGNvbnRhaW4gb3B0aW9ucy5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzSGFuZGxlck5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlciA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gaGFuZGxlciB8fCB7fTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVkRWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGVsZW1lbnQgd2FzIGZvdW5kIHdpdGggdGhlIGdpdmVuIHNlbGVjdG9yOiAke2VsZW1lbnR9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IG1hdGNoZWRFbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmV0Y2hPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmNoZWNrUmVxdWVzdCgpO1xuICAgICAgICBpZiAoIXRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4U2V0dXAnLCB0aGlzKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdhamF4U2V0dXAnLCB7IGNhbmNlbGFibGU6IHRydWUgfSk7XG4gICAgICAgICAgICBldmVudC5yZXF1ZXN0ID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmRvQ2xpZW50VmFsaWRhdGlvbigpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb25maXJtKSB7XG4gICAgICAgICAgICB0aGlzLmRvQ29uZmlybSgpLnRoZW4oKGNvbmZpcm1lZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0FqYXgoKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1VwZGF0ZShyZXNwb25zZSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLlhfV0lOVEVSX1NVQ0NFU1MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlRXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kb0FqYXgoKS50aGVuKFxuICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzVXBkYXRlKHJlc3BvbnNlKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5YX1dJTlRFUl9TVUNDRVNTID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlcGVuZGVuY2llcyBmb3IgdGhpcyBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gWydjb29raWUnLCAnanNvblBhcnNlciddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyB0aGUgZWxlbWVudCBhbmQgaGFuZGxlciBnaXZlbiBpbiB0aGUgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBjaGVja1JlcXVlc3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgdGhpcy5lbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGVsZW1lbnQgcHJvdmlkZWQgbXVzdCBiZSBhbiBFbGVtZW50IGluc3RhbmNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIEFKQVggaGFuZGxlciBuYW1lIGlzIG5vdCBzcGVjaWZpZWQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaXNIYW5kbGVyTmFtZSh0aGlzLmhhbmRsZXIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQUpBWCBoYW5kbGVyIG5hbWUuIFRoZSBjb3JyZWN0IGhhbmRsZXIgbmFtZSBmb3JtYXQgaXM6IFwib25FdmVudFwiLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIEZldGNoIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBtYWRlIGF2YWlsYWJsZSBmb3IgcGx1Z2lucyB0byBleHRlbmQgb3Igb3ZlcnJpZGUgdGhlIGRlZmF1bHQgZmV0Y2goKSBzZXR0aW5ncyB3aXRoIHRoZWlyIG93bi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGdldEZldGNoKCkge1xuICAgICAgICB0aGlzLmZldGNoT3B0aW9ucyA9ICh0aGlzLm9wdGlvbnMuZmV0Y2hPcHRpb25zICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5mZXRjaE9wdGlvbnMgPT09ICdvYmplY3QnKVxuICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMuZmV0Y2hPcHRpb25zXG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgYm9keTogdGhpcy5kYXRhLFxuICAgICAgICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheEZldGNoT3B0aW9ucycsIHRoaXMuZmV0Y2hPcHRpb25zLCB0aGlzKTtcblxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy51cmwsIHRoaXMuZmV0Y2hPcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW4gY2xpZW50LXNpZGUgdmFsaWRhdGlvbiBvbiB0aGUgZm9ybSwgaWYgYXZhaWxhYmxlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZG9DbGllbnRWYWxpZGF0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJyb3dzZXJWYWxpZGF0ZSA9PT0gdHJ1ZSAmJiB0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBBSkFYIHF1ZXJ5LlxuICAgICAqXG4gICAgICogUmV0dXJucyBhIFByb21pc2Ugb2JqZWN0IGZvciB3aGVuIHRoZSBBSkFYIHJlcXVlc3QgaXMgY29tcGxldGVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgZG9BamF4KCkge1xuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIGNhbmNlbCB0aGUgQUpBWCByZXF1ZXN0IGJlZm9yZSBzZW5kaW5nXG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheEJlZm9yZVNlbmQnLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWpheFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldEZldGNoKCkudGhlbihcbiAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vayAmJiByZXNwb25zZS5zdGF0dXMgIT09IDQwNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmhlYWRlcnMuaGFzKCdDb250ZW50LVR5cGUnKSAmJiByZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykuaW5jbHVkZXMoJy9qc29uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlRGF0YS5tZXNzYWdlICYmIHJlc3BvbnNlRGF0YS5leGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5yZW5kZXJFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YS5leGNlcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YS5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEubGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhLnRyYWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2VEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5yZW5kZXJFcnJvcihgVW5hYmxlIHRvIHBhcnNlIEpTT04gcmVzcG9uc2U6ICR7ZXJyb3J9YCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnRleHQoKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VUZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5yZW5kZXJFcnJvcihyZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5yZW5kZXJFcnJvcihgVW5hYmxlIHRvIHByb2Nlc3MgcmVzcG9uc2U6ICR7ZXJyb3J9YCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaGVhZGVycy5oYXMoJ0NvbnRlbnQtVHlwZScpICYmIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmNsdWRlcygnL2pzb24nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJlc3BvbnNlRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhfV0lOVEVSX1NVQ0NFU1M6IHJlc3BvbnNlLnN0YXR1cyAhPT0gNDA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWF9XSU5URVJfUkVTUE9OU0VfQ09ERTogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5yZW5kZXJFcnJvcihgVW5hYmxlIHRvIHBhcnNlIEpTT04gcmVzcG9uc2U6ICR7ZXJyb3J9YCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UudGV4dCgpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoYFVuYWJsZSB0byBwcm9jZXNzIHJlc3BvbnNlOiAke2Vycm9yfWApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoYFVuYWJsZSB0byByZXRyaWV2ZSBhIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlcjogJHtyZXNwb25zZUVycm9yfWApKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhTdGFydCcsIGFqYXhQcm9taXNlLCB0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnYWpheFByb21pc2UnKTtcbiAgICAgICAgICAgIGV2ZW50LnByb21pc2UgPSBhamF4UHJvbWlzZTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhamF4UHJvbWlzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlcyBmb3IgdXBkYXRpbmcgdGhlIHBhcnRpYWxzIGZyb20gdGhlIEFKQVggcmVzcG9uc2UuXG4gICAgICpcbiAgICAgKiBJZiBhbnkgcGFydGlhbHMgYXJlIHJldHVybmVkIGZyb20gdGhlIEFKQVggcmVzcG9uc2UsIHRoaXMgbWV0aG9kIHdpbGwgYWxzbyBhY3Rpb24gdGhlIHBhcnRpYWwgdXBkYXRlcy5cbiAgICAgKlxuICAgICAqIFJldHVybnMgYSBQcm9taXNlIG9iamVjdCB3aGljaCB0cmFja3Mgd2hlbiB0aGUgcGFydGlhbCB1cGRhdGUgaXMgY29tcGxldGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBwcm9jZXNzVXBkYXRlKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5iZWZvcmVVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJlZm9yZVVwZGF0ZS5hcHBseSh0aGlzLCBbcmVzcG9uc2VdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFeHRyYWN0IHBhcnRpYWwgaW5mb3JtYXRpb25cbiAgICAgICAgICAgIGNvbnN0IHBhcnRpYWxzID0ge307XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhyZXNwb25zZSkuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcblxuICAgICAgICAgICAgICAgIGlmIChrZXkuc3Vic3RyKDAsIDgpICE9PSAnWF9XSU5URVInKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpYWxzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHBhcnRpYWxzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuWF9XSU5URVJfQVNTRVRTKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Fzc2V0cyhyZXNwb25zZS5YX1dJTlRFUl9BU1NFVFMpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gdGhpcy5zbm93Ym9hcmQuZ2xvYmFsUHJvbWlzZUV2ZW50KCdhamF4QmVmb3JlVXBkYXRlJywgcmVzcG9uc2UsIHRoaXMpO1xuICAgICAgICAgICAgcHJvbWlzZXMudGhlbihcbiAgICAgICAgICAgICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5YX1dJTlRFUl9BU1NFVFMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucHJvY2Vzc0Fzc2V0cyhyZXNwb25zZS5YX1dJTlRFUl9BU1NFVFMpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1VwZGF0ZShwYXJ0aWFscykudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGxvdyBmb3IgSFRNTCByZWRyYXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJlc29sdmUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBwYXJ0aWFscyB3aXRoIHRoZSBnaXZlbiBjb250ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcnRpYWxzXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgZG9VcGRhdGUocGFydGlhbHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZmZlY3RlZCA9IFtdO1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhwYXJ0aWFscykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbcGFydGlhbCwgY29udGVudF0gPSBlbnRyeTtcblxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RvciA9ICh0aGlzLm9wdGlvbnMudXBkYXRlICYmIHRoaXMub3B0aW9ucy51cGRhdGVbcGFydGlhbF0pXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnVwZGF0ZVtwYXJ0aWFsXVxuICAgICAgICAgICAgICAgICAgICA6IHBhcnRpYWw7XG5cbiAgICAgICAgICAgICAgICBsZXQgbW9kZSA9ICdyZXBsYWNlJztcblxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvci5zdWJzdHIoMCwgMSkgPT09ICdAJykge1xuICAgICAgICAgICAgICAgICAgICBtb2RlID0gJ2FwcGVuZCc7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0b3Iuc3Vic3RyKDAsIDEpID09PSAnXicpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9ICdwcmVwZW5kJztcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rvci5zdWJzdHIoMCwgMSkgIT09ICcjJyAmJiBzZWxlY3Rvci5zdWJzdHIoMCwgMSkgIT09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICBtb2RlID0gJ25vb3AnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXBwZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncHJlcGVuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudCArIGVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdub29wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVwbGFjZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYWZmZWN0ZWQucHVzaChlbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyZSB1cGRhdGUgZXZlbnQgZm9yIGVhY2ggZWxlbWVudCB0aGF0IGlzIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4VXBkYXRlJywgZWxlbWVudCwgY29udGVudCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnYWpheFVwZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhVcGRhdGVDb21wbGV0ZScsIGFmZmVjdGVkLCB0aGlzKTtcblxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgdGhlIHJlc3BvbnNlIGRhdGEuXG4gICAgICpcbiAgICAgKiBUaGlzIGZpcmVzIG9mZiBhbGwgbmVjZXNzYXJ5IHByb2Nlc3NpbmcgZnVuY3Rpb25zIGRlcGVuZGluZyBvbiB0aGUgcmVzcG9uc2UsIGllLiBpZiB0aGVyZSdzIGFueSBmbGFzaFxuICAgICAqIG1lc3NhZ2VzIHRvIGhhbmRsZSwgb3IgYW55IHJlZGlyZWN0cyB0byBiZSB1bmRlcnRha2VuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3VjY2VzcyAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLnN1Y2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3VjY2Vzcyh0aGlzLnJlc3BvbnNlRGF0YSwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBjYW5jZWwgYW55IGZ1cnRoZXIgcmVzcG9uc2UgaGFuZGxpbmdcbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4U3VjY2VzcycsIHRoaXMucmVzcG9uc2VEYXRhLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHRoZSBlbGVtZW50IHRvIGNhbmNlbCBhbnkgZnVydGhlciByZXNwb25zZSBoYW5kbGluZ1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnYWpheERvbmUnLCB7IGNhbmNlbGFibGU6IHRydWUgfSk7XG4gICAgICAgICAgICBldmVudC5yZXNwb25zZURhdGEgPSB0aGlzLnJlc3BvbnNlRGF0YTtcbiAgICAgICAgICAgIGV2ZW50LnJlcXVlc3QgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZsYXNoICYmIHJlc3BvbnNlLlhfV0lOVEVSX0ZMQVNIX01FU1NBR0VTKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NGbGFzaE1lc3NhZ2VzKHJlc3BvbnNlLlhfV0lOVEVSX0ZMQVNIX01FU1NBR0VTKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGZvciBhIHJlZGlyZWN0IGZyb20gdGhlIHJlc3BvbnNlLCBvciB1c2UgdGhlIHJlZGlyZWN0IGFzIHNwZWNpZmllZCBpbiB0aGUgb3B0aW9ucy5cbiAgICAgICAgaWYgKHRoaXMucmVkaXJlY3QgfHwgcmVzcG9uc2UuWF9XSU5URVJfUkVESVJFQ1QpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1JlZGlyZWN0KHRoaXMucmVkaXJlY3QgfHwgcmVzcG9uc2UuWF9XSU5URVJfUkVESVJFQ1QpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBhbiBlcnJvciByZXNwb25zZSBmcm9tIHRoZSBBSkFYIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBUaGlzIGZpcmVzIG9mZiBhbGwgbmVjZXNzYXJ5IHByb2Nlc3NpbmcgZnVuY3Rpb25zIGRlcGVuZGluZyBvbiB0aGUgZXJyb3IgcmVzcG9uc2UsIGllLiBpZiB0aGVyZSdzIGFueSBlcnJvciBvclxuICAgICAqIHZhbGlkYXRpb24gbWVzc2FnZXMgdG8gaGFuZGxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R8RXJyb3J9IGVycm9yXG4gICAgICovXG4gICAgcHJvY2Vzc0Vycm9yKGVycm9yKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXJyb3IgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lcnJvcih0aGlzLnJlc3BvbnNlRXJyb3IsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gY2FuY2VsIGFueSBmdXJ0aGVyIGVycm9yIGhhbmRsaW5nXG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheEVycm9yJywgdGhpcy5yZXNwb25zZUVycm9yLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHRoZSBlbGVtZW50IHRvIGNhbmNlbCBhbnkgZnVydGhlciBlcnJvciBoYW5kbGluZ1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnYWpheEZhaWwnLCB7IGNhbmNlbGFibGU6IHRydWUgfSk7XG4gICAgICAgICAgICBldmVudC5yZXNwb25zZUVycm9yID0gdGhpcy5yZXNwb25zZUVycm9yO1xuICAgICAgICAgICAgZXZlbnQucmVxdWVzdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Vycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBza2lwRXJyb3IgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gUHJvY2VzcyB2YWxpZGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgaWYgKGVycm9yLlhfV0lOVEVSX0VSUk9SX0ZJRUxEUykge1xuICAgICAgICAgICAgICAgIHNraXBFcnJvciA9IHRoaXMucHJvY2Vzc1ZhbGlkYXRpb25FcnJvcnMoZXJyb3IuWF9XSU5URVJfRVJST1JfRklFTERTKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVycm9yLlhfV0lOVEVSX0VSUk9SX01FU1NBR0UgJiYgIXNraXBFcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Vycm9yTWVzc2FnZShlcnJvci5YX1dJTlRFUl9FUlJPUl9NRVNTQUdFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYSByZWRpcmVjdCByZXNwb25zZS5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoaXMgcHJvY2Vzc29yIHdpbGwgc2ltcGx5IHJlZGlyZWN0IHRoZSB1c2VyIGluIHRoZWlyIGJyb3dzZXIuXG4gICAgICpcbiAgICAgKiBQbHVnaW5zIGNhbiBhdWdtZW50IHRoaXMgZnVuY3Rpb25hbGl0eSBmcm9tIHRoZSBgYWpheFJlZGlyZWN0YCBldmVudC4gWW91IG1heSBhbHNvIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb25hbGl0eSBvblxuICAgICAqIGEgcGVyLXJlcXVlc3QgYmFzaXMgdGhyb3VnaCB0aGUgYGhhbmRsZVJlZGlyZWN0UmVzcG9uc2VgIGNhbGxiYWNrIG9wdGlvbi4gSWYgYSBgZmFsc2VgIGlzIHJldHVybmVkIGZyb20gZWl0aGVyLCB0aGVcbiAgICAgKiByZWRpcmVjdCB3aWxsIGJlIGNhbmNlbGxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzUmVkaXJlY3QodXJsKSB7XG4gICAgICAgIC8vIFJ1biBhIGN1c3RvbSBwZXItcmVxdWVzdCByZWRpcmVjdCBoYW5kbGVyLiBJZiBmYWxzZSBpcyByZXR1cm5lZCwgZG9uJ3QgcnVuIHRoZSByZWRpcmVjdC5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlUmVkaXJlY3RSZXNwb25zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGVSZWRpcmVjdFJlc3BvbnNlLmFwcGx5KHRoaXMsIFt1cmxdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIGNhbmNlbCB0aGUgcmVkaXJlY3RcbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4UmVkaXJlY3QnLCB1cmwsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5kaWNhdGUgdGhhdCB0aGUgQUpBWCByZXF1ZXN0IGlzIGZpbmlzaGVkIGlmIHdlJ3JlIHN0aWxsIG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgbG9hZGluZyBpbmRpY2F0b3IgZm9yIHJlZGlyZWN0cyB0aGF0IGp1c3QgY2hhbmdlIHRoZSBoYXNoIHZhbHVlIG9mXG4gICAgICAgIC8vIHRoZSBVUkwgaW5zdGVhZCBvZiBsZWF2aW5nIHRoZSBwYWdlIHdpbGwgcHJvcGVybHkgc3RvcC5cbiAgICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vb2N0b2JlcmNtcy9vY3RvYmVyL2lzc3Vlcy8yNzgwXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICAgICAgICAgIGV2ZW50LmV2ZW50TmFtZSA9ICdhamF4UmVkaXJlY3RlZCc7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHVybCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGFuIGVycm9yIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGlzIHByb2Nlc3NvciB3aWxsIHNpbXBseSBhbGVydCB0aGUgdXNlciB0aHJvdWdoIGEgc2ltcGxlIGBhbGVydCgpYCBjYWxsLlxuICAgICAqXG4gICAgICogUGx1Z2lucyBjYW4gYXVnbWVudCB0aGlzIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgYGFqYXhFcnJvck1lc3NhZ2VgIGV2ZW50LiBZb3UgbWF5IGFsc28gb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbmFsaXR5XG4gICAgICogb24gYSBwZXItcmVxdWVzdCBiYXNpcyB0aHJvdWdoIHRoZSBgaGFuZGxlRXJyb3JNZXNzYWdlYCBjYWxsYmFjayBvcHRpb24uIElmIGEgYGZhbHNlYCBpcyByZXR1cm5lZCBmcm9tIGVpdGhlciwgdGhlXG4gICAgICogZXJyb3IgbWVzc2FnZSBoYW5kbGluZyB3aWxsIGJlIGNhbmNlbGxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2Vzc0Vycm9yTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIC8vIFJ1biBhIGN1c3RvbSBwZXItcmVxdWVzdCBoYW5kbGVyIGZvciBlcnJvciBtZXNzYWdlcy4gSWYgZmFsc2UgaXMgcmV0dXJuZWQsIGRvIG5vdCBwcm9jZXNzIHRoZSBlcnJvciBtZXNzYWdlc1xuICAgICAgICAvLyBhbnkgZnVydGhlci5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlRXJyb3JNZXNzYWdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhhbmRsZUVycm9yTWVzc2FnZS5hcHBseSh0aGlzLCBbbWVzc2FnZV0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gY2FuY2VsIHRoZSBlcnJvciBtZXNzYWdlIGJlaW5nIHNob3duXG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheEVycm9yTWVzc2FnZScsIG1lc3NhZ2UsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQnkgZGVmYXVsdCwgc2hvdyBhIGJyb3dzZXIgZXJyb3IgbWVzc2FnZVxuICAgICAgICB3aW5kb3cuYWxlcnQobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGZsYXNoIG1lc3NhZ2VzIGZyb20gdGhlIHJlc3BvbnNlLlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgbm8gZmxhc2ggbWVzc2FnZSBoYW5kbGluZyB3aWxsIG9jY3VyLlxuICAgICAqXG4gICAgICogUGx1Z2lucyBjYW4gYXVnbWVudCB0aGlzIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgYGFqYXhGbGFzaE1lc3NhZ2VzYCBldmVudC4gWW91IG1heSBhbHNvIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb25hbGl0eVxuICAgICAqIG9uIGEgcGVyLXJlcXVlc3QgYmFzaXMgdGhyb3VnaCB0aGUgYGhhbmRsZUZsYXNoTWVzc2FnZXNgIGNhbGxiYWNrIG9wdGlvbi4gSWYgYSBgZmFsc2VgIGlzIHJldHVybmVkIGZyb20gZWl0aGVyLCB0aGVcbiAgICAgKiBmbGFzaCBtZXNzYWdlIGhhbmRsaW5nIHdpbGwgYmUgY2FuY2VsbGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2VzXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBwcm9jZXNzRmxhc2hNZXNzYWdlcyhtZXNzYWdlcykge1xuICAgICAgICAvLyBSdW4gYSBjdXN0b20gcGVyLXJlcXVlc3QgZmxhc2ggaGFuZGxlci4gSWYgZmFsc2UgaXMgcmV0dXJuZWQsIGRvbid0IHNob3cgdGhlIGZsYXNoIG1lc3NhZ2VcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlRmxhc2hNZXNzYWdlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGVGbGFzaE1lc3NhZ2VzLmFwcGx5KHRoaXMsIFttZXNzYWdlc10pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4Rmxhc2hNZXNzYWdlcycsIG1lc3NhZ2VzLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgdmFsaWRhdGlvbiBlcnJvcnMgZm9yIGZpZWxkcy5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIG5vIHZhbGlkYXRpb24gZXJyb3IgaGFuZGxpbmcgd2lsbCBvY2N1ci5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4VmFsaWRhdGlvbkVycm9yc2AgZXZlbnQuIFlvdSBtYXkgYWxzbyBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uYWxpdHlcbiAgICAgKiBvbiBhIHBlci1yZXF1ZXN0IGJhc2lzIHRocm91Z2ggdGhlIGBoYW5kbGVWYWxpZGF0aW9uRXJyb3JzYCBjYWxsYmFjayBvcHRpb24uIElmIGEgYGZhbHNlYCBpcyByZXR1cm5lZCBmcm9tIGVpdGhlciwgdGhlXG4gICAgICogdmFsaWRhdGlvbiBlcnJvciBoYW5kbGluZyB3aWxsIGJlIGNhbmNlbGxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZHNcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHByb2Nlc3NWYWxpZGF0aW9uRXJyb3JzKGZpZWxkcykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVWYWxpZGF0aW9uRXJyb3JzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhhbmRsZVZhbGlkYXRpb25FcnJvcnMuYXBwbHkodGhpcywgW3RoaXMuZm9ybSwgZmllbGRzXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIGNhbmNlbCB0aGUgdmFsaWRhdGlvbiBlcnJvcnMgYmVpbmcgaGFuZGxlZFxuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhWYWxpZGF0aW9uRXJyb3JzJywgdGhpcy5mb3JtLCBmaWVsZHMsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGFzc2V0cyByZXR1cm5lZCBieSBhbiBBSkFYIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCBubyBhc3NldCBwcm9jZXNzaW5nIHdpbGwgb2NjdXIgYW5kIHRoaXMgd2lsbCByZXR1cm4gYSByZXNvbHZlZCBQcm9taXNlLlxuICAgICAqXG4gICAgICogUGx1Z2lucyBjYW4gYXVnbWVudCB0aGlzIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgYGFqYXhMb2FkQXNzZXRzYCBldmVudC4gVGhpcyBldmVudCBpcyBjb25zaWRlcmVkIGJsb2NraW5nLCBhbmRcbiAgICAgKiBhbGxvd3MgYXNzZXRzIHRvIGJlIGxvYWRlZCBvciBwcm9jZXNzZWQgYmVmb3JlIGNvbnRpbnVpbmcgd2l0aCBhbnkgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFzc2V0c1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIHByb2Nlc3NBc3NldHMoYXNzZXRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNub3dib2FyZC5nbG9iYWxQcm9taXNlRXZlbnQoJ2FqYXhMb2FkQXNzZXRzJywgYXNzZXRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25maXJtcyB0aGUgcmVxdWVzdCB3aXRoIHRoZSB1c2VyIGJlZm9yZSBwcm9jZWVkaW5nLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBhbiBhc3luY2hyb25vdXMgbWV0aG9kLiBCeSBkZWZhdWx0LCBpdCB3aWxsIHVzZSB0aGUgYnJvd3NlcidzIGBjb25maXJtKClgIG1ldGhvZCB0byBxdWVyeSB0aGUgdXNlciB0b1xuICAgICAqIGNvbmZpcm0gdGhlIGFjdGlvbi4gVGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gYSBQcm9taXNlIHdpdGggYSBib29sZWFuIHZhbHVlIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSB1c2VyIGNvbmZpcm1lZFxuICAgICAqIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4Q29uZmlybU1lc3NhZ2VgIGV2ZW50LiBZb3UgbWF5IGFsc28gb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbmFsaXR5XG4gICAgICogb24gYSBwZXItcmVxdWVzdCBiYXNpcyB0aHJvdWdoIHRoZSBgaGFuZGxlQ29uZmlybU1lc3NhZ2VgIGNhbGxiYWNrIG9wdGlvbi4gSWYgYSBgZmFsc2VgIGlzIHJldHVybmVkIGZyb20gZWl0aGVyLFxuICAgICAqIHRoZSBjb25maXJtYXRpb24gaXMgYXNzdW1lZCB0byBoYXZlIGJlZW4gZGVuaWVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgYXN5bmMgZG9Db25maXJtKCkge1xuICAgICAgICAvLyBBbGxvdyBmb3IgYSBjdXN0b20gaGFuZGxlciBmb3IgdGhlIGNvbmZpcm1hdGlvbiwgcGVyIHJlcXVlc3QuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZUNvbmZpcm1NZXNzYWdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhhbmRsZUNvbmZpcm1NZXNzYWdlLmFwcGx5KHRoaXMsIFt0aGlzLmNvbmZpcm1dKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgbm8gcGx1Z2lucyBoYXZlIGN1c3RvbWlzZWQgdGhlIGNvbmZpcm1hdGlvbiwgdXNlIGEgc2ltcGxlIGJyb3dzZXIgY29uZmlybWF0aW9uLlxuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQubGlzdGVuc1RvRXZlbnQoJ2FqYXhDb25maXJtTWVzc2FnZScpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5jb25maXJtKHRoaXMuY29uZmlybSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSdW4gY3VzdG9tIHBsdWdpbiBjb25maXJtYXRpb25zXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gdGhpcy5zbm93Ym9hcmQuZ2xvYmFsUHJvbWlzZUV2ZW50KCdhamF4Q29uZmlybU1lc3NhZ2UnLCB0aGlzLmNvbmZpcm0sIHRoaXMpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmdWxmaWxsZWQgPSBhd2FpdCBwcm9taXNlcztcbiAgICAgICAgICAgIGlmIChmdWxmaWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIG9mZiBjb21wbGV0aW9uIGV2ZW50cyBmb3IgdGhlIFJlcXVlc3QuXG4gICAgICovXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29tcGxldGUgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvbXBsZXRlKHRoaXMucmVzcG9uc2VEYXRhLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheERvbmUnLCB0aGlzLnJlc3BvbnNlRGF0YSwgdGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhBbHdheXMnKTtcbiAgICAgICAgICAgIGV2ZW50LnJlcXVlc3QgPSB0aGlzO1xuICAgICAgICAgICAgZXZlbnQucmVzcG9uc2VEYXRhID0gdGhpcy5yZXNwb25zZURhdGE7XG4gICAgICAgICAgICBldmVudC5yZXNwb25zZUVycm9yID0gdGhpcy5yZXNwb25zZUVycm9yO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyZSBvZmYgdGhlIGRlc3RydWN0b3JcbiAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgIH1cblxuICAgIGdldCBmb3JtKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZvcm0pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmZvcm0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmZvcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5mb3JtO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50LnRhZ05hbWUgPT09ICdGT1JNJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY2xvc2VzdCgnZm9ybScpO1xuICAgIH1cblxuICAgIGdldCBjb250ZXh0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGFuZGxlcjogdGhpcy5oYW5kbGVyLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBoZWFkZXJzKCkge1xuICAgICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLCAvLyBLZWVwcyBjb21wYXRpYmlsaXR5IHdpdGggalF1ZXJ5IEFKQVhcbiAgICAgICAgICAgICdYLVdJTlRFUi1SRVFVRVNULUhBTkRMRVInOiB0aGlzLmhhbmRsZXIsXG4gICAgICAgICAgICAnWC1XSU5URVItUkVRVUVTVC1QQVJUSUFMUyc6IHRoaXMuZXh0cmFjdFBhcnRpYWxzKHRoaXMub3B0aW9ucy51cGRhdGUgfHwgW10pLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLmZsYXNoKSB7XG4gICAgICAgICAgICBoZWFkZXJzWydYLVdJTlRFUi1SRVFVRVNULUZMQVNIJ10gPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMueHNyZlRva2VuKSB7XG4gICAgICAgICAgICBoZWFkZXJzWydYLVhTUkYtVE9LRU4nXSA9IHRoaXMueHNyZlRva2VuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuXG4gICAgZ2V0IGxvYWRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubG9hZGluZyB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgdXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9XG5cbiAgICBnZXQgcmVkaXJlY3QoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5vcHRpb25zLnJlZGlyZWN0ICYmIHRoaXMub3B0aW9ucy5yZWRpcmVjdC5sZW5ndGgpID8gdGhpcy5vcHRpb25zLnJlZGlyZWN0IDogbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgZmxhc2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmxhc2ggfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGZpbGVzKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZpbGVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmRlYnVnKCdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBmaWxlIHVwbG9hZHMnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldCB4c3JmVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNub3dib2FyZC5jb29raWUoKS5nZXQoJ1hTUkYtVE9LRU4nKTtcbiAgICB9XG5cbiAgICBnZXQgZGF0YSgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9ICh0eXBlb2YgdGhpcy5vcHRpb25zLmRhdGEgPT09ICdvYmplY3QnKSA/IHRoaXMub3B0aW9ucy5kYXRhIDoge307XG5cbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtIHx8IHVuZGVmaW5lZCk7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH1cblxuICAgIGdldCBjb25maXJtKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNvbmZpcm0gfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgcGFydGlhbHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdXBkYXRlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBleHRyYWN0UGFydGlhbHModXBkYXRlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh1cGRhdGUpLmpvaW4oJyYnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGFuIGVycm9yIHdpdGggdXNlZnVsIGRlYnVnIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCBpbnRlcm5hbGx5IHdoZW4gdGhlIEFKQVggcmVxdWVzdCBjb3VsZCBub3QgYmUgY29tcGxldGVkIG9yIHByb2Nlc3NlZCBjb3JyZWN0bHkgZHVlIHRvIGFuIGVycm9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXhjZXB0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGluZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IHRyYWNlXG4gICAgICogQHJldHVybnMge0Vycm9yfVxuICAgICAqL1xuICAgIHJlbmRlckVycm9yKG1lc3NhZ2UsIGV4Y2VwdGlvbiwgZmlsZSwgbGluZSwgdHJhY2UpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIGVycm9yLmV4Y2VwdGlvbiA9IGV4Y2VwdGlvbiB8fCBudWxsO1xuICAgICAgICBlcnJvci5maWxlID0gZmlsZSB8fCBudWxsO1xuICAgICAgICBlcnJvci5saW5lID0gbGluZSB8fCBudWxsO1xuICAgICAgICBlcnJvci50cmFjZSA9IHRyYWNlIHx8IFtdO1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGEgZ2l2ZW4gc3RyaW5nIHRvIHNlZSBpZiBpdCBpcyBhIHZhbGlkIEFKQVggaGFuZGxlciBuYW1lLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0hhbmRsZXJOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIC9eKD86XFx3Kzp7Mn0pP29uW0EtWjAtOV0vLnRlc3QobmFtZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi8uLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBFbmFibGUgRGF0YSBBdHRyaWJ1dGVzIEFQSSBmb3IgQUpBWCByZXF1ZXN0cy5cbiAqXG4gKiBUaGlzIGlzIGFuIGV4dGVuc2lvbiBvZiB0aGUgYmFzZSBBSkFYIGZ1bmN0aW9uYWxpdHkgdGhhdCBpbmNsdWRlcyBoYW5kbGluZyBvZiBIVE1MIGRhdGEgYXR0cmlidXRlcyBmb3IgcHJvY2Vzc2luZ1xuICogQUpBWCByZXF1ZXN0cy4gSXQgaXMgc2VwYXJhdGVkIGZyb20gdGhlIGJhc2UgQUpBWCBmdW5jdGlvbmFsaXR5IHRvIGFsbG93IGRldmVsb3BlcnMgdG8gb3B0LW91dCBvZiBkYXRhIGF0dHJpYnV0ZVxuICogcmVxdWVzdHMgaWYgdGhleSBkbyBub3QgaW50ZW5kIHRvIHVzZSB0aGVtLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRyaWJ1dGVSZXF1ZXN0IGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBMaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWFkeTogJ3JlYWR5JyxcbiAgICAgICAgICAgIGFqYXhTZXR1cDogJ29uQWpheFNldHVwJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFkeSBldmVudCBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIEF0dGFjaGVzIGhhbmRsZXJzIHRvIHRoZSB3aW5kb3cgdG8gbGlzdGVuIGZvciBhbGwgcmVxdWVzdCBpbnRlcmFjdGlvbnMuXG4gICAgICovXG4gICAgcmVhZHkoKSB7XG4gICAgICAgIHRoaXMuYXR0YWNoSGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlRGVmYXVsdEZvcm1WYWxpZGF0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVwZW5kZW5jaWVzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsncmVxdWVzdCcsICdqc29uUGFyc2VyJ107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIERldGFjaGVzIGFsbCBoYW5kbGVycy5cbiAgICAgKi9cbiAgICBkZXN0cnVjdCgpIHtcbiAgICAgICAgdGhpcy5kZXRhY2hIYW5kbGVycygpO1xuXG4gICAgICAgIHN1cGVyLmRlc3RydWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgdGhlIG5lY2Vzc2FyeSBoYW5kbGVycyBmb3IgYWxsIHJlcXVlc3QgaW50ZXJhY3Rpb25zLlxuICAgICAqL1xuICAgIGF0dGFjaEhhbmRsZXJzKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB0aGlzLmNoYW5nZUhhbmRsZXIoZXZlbnQpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB0aGlzLmNsaWNrSGFuZGxlcihldmVudCkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4gdGhpcy5rZXlEb3duSGFuZGxlcihldmVudCkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB0aGlzLnN1Ym1pdEhhbmRsZXIoZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyBkZWZhdWx0IGZvcm0gdmFsaWRhdGlvbiBmb3IgQUpBWCBmb3Jtcy5cbiAgICAgKlxuICAgICAqIEEgZm9ybSB0aGF0IGNvbnRhaW5zIGEgYGRhdGEtcmVxdWVzdGAgYXR0cmlidXRlIHRvIHNwZWNpZnkgYW4gQUpBWCBjYWxsIHdpdGhvdXQgaW5jbHVkaW5nIGEgYGRhdGEtYnJvd3Nlci12YWxpZGF0ZWBcbiAgICAgKiBhdHRyaWJ1dGUgbWVhbnMgdGhhdCB0aGUgQUpBWCBjYWxsYmFjayBmdW5jdGlvbiB3aWxsIGxpa2VseSBiZSBoYW5kbGluZyB0aGUgdmFsaWRhdGlvbiBpbnN0ZWFkLlxuICAgICAqL1xuICAgIGRpc2FibGVEZWZhdWx0Rm9ybVZhbGlkYXRpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm1bZGF0YS1yZXF1ZXN0XTpub3QoW2RhdGEtYnJvd3Nlci12YWxpZGF0ZV0pJykuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgICAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ25vdmFsaWRhdGUnLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0YWNoZXMgdGhlIG5lY2Vzc2FyeSBoYW5kbGVycyBmb3IgYWxsIHJlcXVlc3QgaW50ZXJhY3Rpb25zLlxuICAgICAqL1xuICAgIGRldGFjaEhhbmRsZXJzKCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB0aGlzLmNoYW5nZUhhbmRsZXIoZXZlbnQpKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB0aGlzLmNsaWNrSGFuZGxlcihldmVudCkpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4gdGhpcy5rZXlEb3duSGFuZGxlcihldmVudCkpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB0aGlzLnN1Ym1pdEhhbmRsZXIoZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGNoYW5nZXMgdG8gc2VsZWN0LCByYWRpbywgY2hlY2tib3ggYW5kIGZpbGUgaW5wdXRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBjaGFuZ2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIC8vIENoZWNrIHRoYXQgd2UgYXJlIGNoYW5naW5nIGEgdmFsaWQgZWxlbWVudFxuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKFxuICAgICAgICAgICAgJ3NlbGVjdFtkYXRhLXJlcXVlc3RdLCBpbnB1dFt0eXBlPXJhZGlvXVtkYXRhLXJlcXVlc3RdLCBpbnB1dFt0eXBlPWNoZWNrYm94XVtkYXRhLXJlcXVlc3RdLCBpbnB1dFt0eXBlPWZpbGVdW2RhdGEtcmVxdWVzdF0nLFxuICAgICAgICApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb2Nlc3NSZXF1ZXN0T25FbGVtZW50KGV2ZW50LnRhcmdldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBjbGlja3Mgb24gaHlwZXJsaW5rcyBhbmQgYnV0dG9ucy5cbiAgICAgKlxuICAgICAqIFRoaXMgZXZlbnQgY2FuIGJ1YmJsZSB1cCB0aGUgaGllcmFyY2h5IHRvIGZpbmQgYSBzdWl0YWJsZSByZXF1ZXN0IGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGNsaWNrSGFuZGxlcihldmVudCkge1xuICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRFbGVtZW50ICYmIGN1cnJlbnRFbGVtZW50LnRhZ05hbWUgIT09ICdIVE1MJykge1xuICAgICAgICAgICAgaWYgKCFjdXJyZW50RWxlbWVudC5tYXRjaGVzKFxuICAgICAgICAgICAgICAgICdhW2RhdGEtcmVxdWVzdF0sIGJ1dHRvbltkYXRhLXJlcXVlc3RdLCBpbnB1dFt0eXBlPWJ1dHRvbl1bZGF0YS1yZXF1ZXN0XSwgaW5wdXRbdHlwZT1zdWJtaXRdW2RhdGEtcmVxdWVzdF0nLFxuICAgICAgICAgICAgKSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXF1ZXN0T25FbGVtZW50KGN1cnJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMga2V5IHByZXNzZXMgb24gaW5wdXRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIC8vIENoZWNrIHRoYXQgd2UgYXJlIGlucHV0dGluZyBpbnRvIGEgdmFsaWQgZWxlbWVudFxuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKFxuICAgICAgICAgICAgJ2lucHV0JyxcbiAgICAgICAgKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgdGhhdCB0aGUgaW5wdXQgdHlwZSBpcyB2YWxpZFxuICAgICAgICBjb25zdCB2YWxpZFR5cGVzID0gW1xuICAgICAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICdjb2xvcicsXG4gICAgICAgICAgICAnZGF0ZScsXG4gICAgICAgICAgICAnZGF0ZXRpbWUnLFxuICAgICAgICAgICAgJ2RhdGV0aW1lLWxvY2FsJyxcbiAgICAgICAgICAgICdlbWFpbCcsXG4gICAgICAgICAgICAnaW1hZ2UnLFxuICAgICAgICAgICAgJ21vbnRoJyxcbiAgICAgICAgICAgICdudW1iZXInLFxuICAgICAgICAgICAgJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICdyYWRpbycsXG4gICAgICAgICAgICAncmFuZ2UnLFxuICAgICAgICAgICAgJ3NlYXJjaCcsXG4gICAgICAgICAgICAndGVsJyxcbiAgICAgICAgICAgICd0ZXh0JyxcbiAgICAgICAgICAgICd0aW1lJyxcbiAgICAgICAgICAgICd1cmwnLFxuICAgICAgICAgICAgJ3dlZWsnLFxuICAgICAgICBdO1xuICAgICAgICBpZiAodmFsaWRUeXBlcy5pbmRleE9mKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSkgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIGV2ZW50LnRhcmdldC5tYXRjaGVzKCcqW2RhdGEtcmVxdWVzdF0nKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVxdWVzdE9uRWxlbWVudChldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcqW2RhdGEtdHJhY2staW5wdXRdJykpIHtcbiAgICAgICAgICAgIHRoaXMudHJhY2tJbnB1dChldmVudC50YXJnZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBmb3JtIHN1Ym1pc3Npb25zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIC8vIENoZWNrIHRoYXQgd2UgYXJlIHN1Ym1pdHRpbmcgYSB2YWxpZCBmb3JtXG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXG4gICAgICAgICAgICAnZm9ybVtkYXRhLXJlcXVlc3RdJyxcbiAgICAgICAgKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnByb2Nlc3NSZXF1ZXN0T25FbGVtZW50KGV2ZW50LnRhcmdldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGEgcmVxdWVzdCBvbiBhIGdpdmVuIGVsZW1lbnQsIHVzaW5nIGl0cyBkYXRhIGF0dHJpYnV0ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICovXG4gICAgcHJvY2Vzc1JlcXVlc3RPbkVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBkYXRhID0gZWxlbWVudC5kYXRhc2V0O1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBTdHJpbmcoZGF0YS5yZXF1ZXN0KTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbmZpcm06ICgncmVxdWVzdENvbmZpcm0nIGluIGRhdGEpID8gU3RyaW5nKGRhdGEucmVxdWVzdENvbmZpcm0pIDogbnVsbCxcbiAgICAgICAgICAgIHJlZGlyZWN0OiAoJ3JlcXVlc3RSZWRpcmVjdCcgaW4gZGF0YSkgPyBTdHJpbmcoZGF0YS5yZXF1ZXN0UmVkaXJlY3QpIDogbnVsbCxcbiAgICAgICAgICAgIGxvYWRpbmc6ICgncmVxdWVzdExvYWRpbmcnIGluIGRhdGEpID8gU3RyaW5nKGRhdGEucmVxdWVzdExvYWRpbmcpIDogbnVsbCxcbiAgICAgICAgICAgIGZsYXNoOiAoJ3JlcXVlc3RGbGFzaCcgaW4gZGF0YSksXG4gICAgICAgICAgICBmaWxlczogKCdyZXF1ZXN0RmlsZXMnIGluIGRhdGEpLFxuICAgICAgICAgICAgYnJvd3NlclZhbGlkYXRlOiAoJ3JlcXVlc3RCcm93c2VyVmFsaWRhdGUnIGluIGRhdGEpLFxuICAgICAgICAgICAgZm9ybTogKCdyZXF1ZXN0Rm9ybScgaW4gZGF0YSkgPyBTdHJpbmcoZGF0YS5yZXF1ZXN0Rm9ybSkgOiBudWxsLFxuICAgICAgICAgICAgdXJsOiAoJ3JlcXVlc3RVcmwnIGluIGRhdGEpID8gU3RyaW5nKGRhdGEucmVxdWVzdFVybCkgOiBudWxsLFxuICAgICAgICAgICAgdXBkYXRlOiAoJ3JlcXVlc3RVcGRhdGUnIGluIGRhdGEpID8gdGhpcy5wYXJzZURhdGEoU3RyaW5nKGRhdGEucmVxdWVzdFVwZGF0ZSkpIDogW10sXG4gICAgICAgICAgICBkYXRhOiAoJ3JlcXVlc3REYXRhJyBpbiBkYXRhKSA/IHRoaXMucGFyc2VEYXRhKFN0cmluZyhkYXRhLnJlcXVlc3REYXRhKSkgOiBbXSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNub3dib2FyZC5yZXF1ZXN0KGVsZW1lbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYW4gQUpBWCByZXF1ZXN0IHZpYSBIVE1MIGF0dHJpYnV0ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R9IHJlcXVlc3RcbiAgICAgKi9cbiAgICBvbkFqYXhTZXR1cChyZXF1ZXN0KSB7XG4gICAgICAgIGlmICghcmVxdWVzdC5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSByZXF1ZXN0LmVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0UGFyZW50UmVxdWVzdERhdGEocmVxdWVzdC5lbGVtZW50KSxcbiAgICAgICAgICAgIC4uLnJlcXVlc3Qub3B0aW9ucy5kYXRhLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChyZXF1ZXN0LmVsZW1lbnQgJiYgcmVxdWVzdC5lbGVtZW50Lm1hdGNoZXMoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBidXR0b24nKSAmJiAhcmVxdWVzdC5mb3JtICYmIGZpZWxkTmFtZSAmJiAhcmVxdWVzdC5vcHRpb25zLmRhdGFbZmllbGROYW1lXSkge1xuICAgICAgICAgICAgZGF0YVtmaWVsZE5hbWVdID0gcmVxdWVzdC5lbGVtZW50LnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5vcHRpb25zLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhbmQgY29sbGF0ZXMgYWxsIGRhdGEgZnJvbSBlbGVtZW50cyB1cCB0aGUgRE9NIGhpZXJhcmNoeS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRQYXJlbnRSZXF1ZXN0RGF0YSh0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gdGFyZ2V0O1xuXG4gICAgICAgIHdoaWxlIChjdXJyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmIGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQudGFnTmFtZSAhPT0gJ0hUTUwnKSB7XG4gICAgICAgICAgICBlbGVtZW50cy5wdXNoKGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgY3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudHMucmV2ZXJzZSgpO1xuXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnREYXRhID0gZWxlbWVudC5kYXRhc2V0O1xuXG4gICAgICAgICAgICBpZiAoJ3JlcXVlc3REYXRhJyBpbiBlbGVtZW50RGF0YSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucGFyc2VEYXRhKGVsZW1lbnREYXRhLnJlcXVlc3REYXRhKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgZGF0YSBpbiB0aGUgV2ludGVyL09jdG9iZXIgSlNPTiBmb3JtYXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgcGFyc2VEYXRhKGRhdGEpIHtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zbm93Ym9hcmQuanNvbnBhcnNlcigpLnBhcnNlKGB7JHtkYXRhfX1gKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBwYXJzaW5nIHRoZSBkYXRhIGF0dHJpYnV0ZSBvbiBlbGVtZW50OiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYWNrSW5wdXQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCB7IGxhc3RWYWx1ZSB9ID0gZWxlbWVudC5kYXRhc2V0O1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IGVsZW1lbnQuZGF0YXNldC50cmFja0lucHV0IHx8IDMwMDtcblxuICAgICAgICBpZiAobGFzdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgbGFzdFZhbHVlID09PSBlbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2V0VHJhY2tJbnB1dFRpbWVyKGVsZW1lbnQpO1xuXG4gICAgICAgIGVsZW1lbnQuZGF0YXNldC5pbnB1dFRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGF0YXNldC5yZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVxdWVzdE9uRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRyYXZlcnNlIHVwIHRoZSBoaWVyYXJjaHkgYW5kIGZpbmQgYSBmb3JtIHRoYXQgc2VuZHMgYW4gQUpBWCBxdWVyeVxuICAgICAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmIGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQudGFnTmFtZSAhPT0gJ0hUTUwnKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRFbGVtZW50LnRhZ05hbWUgPT09ICdGT1JNJyAmJiBjdXJyZW50RWxlbWVudC5kYXRhc2V0LnJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVxdWVzdE9uRWxlbWVudChjdXJyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIHJlc2V0VHJhY2tJbnB1dFRpbWVyKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuZGF0YXNldC5pbnB1dFRpbWVyKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGVsZW1lbnQuZGF0YXNldC5pbnB1dFRpbWVyKTtcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5pbnB1dFRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogQXNzZXQgTG9hZGVyLlxuICpcbiAqIFByb3ZpZGVzIHNpbXBsZSBhc3NldCBsb2FkaW5nIGZ1bmN0aW9uYWxpdHkgZm9yIFNub3dib2FyZCwgbWFraW5nIGl0IGVhc3kgdG8gcHJlLWxvYWQgaW1hZ2VzIG9yXG4gKiBpbmNsdWRlIEphdmFTY3JpcHQgb3IgQ1NTIGFzc2V0cyBvbiB0aGUgZmx5LlxuICpcbiAqIEJ5IGRlZmF1bHQsIHRoaXMgbG9hZGVyIHdpbGwgbGlzdGVuIHRvIGFueSBhc3NldHMgdGhhdCBoYXZlIGJlZW4gcmVxdWVzdGVkIHRvIGxvYWQgaW4gYW4gQUpBWFxuICogcmVzcG9uc2UsIHN1Y2ggYXMgcmVzcG9uc2VzIGZyb20gYSBjb21wb25lbnQuXG4gKlxuICogWW91IGNhbiBhbHNvIGxvYWQgYXNzZXRzIG1hbnVhbGx5IGJ5IGNhbGxpbmcgdGhlIGZvbGxvd2luZzpcbiAqXG4gKiBgYGBqc1xuICogU25vd2JvYXJkLmFkZFBsdWdpbignYXNzZXRMb2FkZXInLCBBc3NldExvYWRlcik7XG4gKiBTbm93Ym9hcmQuYXNzZXRMb2FkZXIoKS5wcm9jZXNzQXNzZXRzKGFzc2V0cyk7XG4gKiBgYGBcbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRMb2FkZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIC8qKlxuICAgICAqIEV2ZW50IGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFqYXhMb2FkQXNzZXRzOiAnbG9hZCcsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVwZW5kZW5jaWVzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICd1cmwnLFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgYW5kIGxvYWQgYXNzZXRzLlxuICAgICAqXG4gICAgICogVGhlIGBhc3NldHNgIHByb3BlcnR5IG9mIHRoaXMgbWV0aG9kIHJlcXVpcmVzIGFuIG9iamVjdCB3aXRoIGFueSBvZiB0aGUgZm9sbG93aW5nIGtleXMgYW5kIGFuXG4gICAgICogYXJyYXkgb2YgcGF0aHM6XG4gICAgICpcbiAgICAgKiAtIGBqc2A6IEFuIGFycmF5IG9mIEphdmFTY3JpcHQgVVJMcyB0byBsb2FkXG4gICAgICogLSBgY3NzYDogQW4gYXJyYXkgb2YgQ1NTIHN0eWxlc2hlZXQgVVJMcyB0byBsb2FkXG4gICAgICogLSBgaW1nYDogQW4gYXJyYXkgb2YgaW1hZ2UgVVJMcyB0byBwcmUtbG9hZFxuICAgICAqXG4gICAgICogQm90aCBganNgIGFuZCBgY3NzYCBmaWxlcyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgaW5qZWN0ZWQsIGhvd2V2ZXIgYGltZ2AgZmlsZXMgd2lsbCBub3QuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIHJldHVybiBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGFsbCByZXF1aXJlZCBhc3NldHMgYXJlIGxvYWRlZC4gSWYgYW5cbiAgICAgKiBhc3NldCBmYWlscyB0byBsb2FkLCB0aGlzIFByb21pc2Ugd2lsbCBiZSByZWplY3RlZC5cbiAgICAgKlxuICAgICAqIEVTTGludCAqUkVBTExZKiBkb2Vzbid0IGxpa2UgdGhpcyBjb2RlLCBidXQgaWdub3JlIGl0LiBJdCdzIHRoZSBvbmx5IHdheSBpdCB3b3Jrcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhc3NldHNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBhc3luYyBsb2FkKGFzc2V0cykge1xuICAgICAgICBpZiAoYXNzZXRzLmpzICYmIGFzc2V0cy5qcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNjcmlwdCBvZiBhc3NldHMuanMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRTY3JpcHQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhc3NldHMuY3NzICYmIGFzc2V0cy5jc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBzdHlsZSBvZiBhc3NldHMuY3NzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkU3R5bGUoc3R5bGUpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFzc2V0cy5pbWcgJiYgYXNzZXRzLmltZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGltYWdlIG9mIGFzc2V0cy5pbWcpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRJbWFnZShpbWFnZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBhbmQgbG9hZHMgYSBKYXZhU2NyaXB0IFVSTCBpbnRvIHRoZSBET00uXG4gICAgICpcbiAgICAgKiBUaGUgc2NyaXB0IHdpbGwgYmUgYXBwZW5kZWQgYmVmb3JlIHRoZSBjbG9zaW5nIGA8L2JvZHk+YCB0YWcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2NyaXB0XG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgbG9hZFNjcmlwdChzY3JpcHQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIC8vIFJlc29sdmUgc2NyaXB0IFVSTFxuICAgICAgICAgICAgc2NyaXB0ID0gdGhpcy5zbm93Ym9hcmQudXJsKCkuYXNzZXQoc2NyaXB0KTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgdGhhdCBzY3JpcHQgaXMgbm90IGFscmVhZHkgbG9hZGVkXG4gICAgICAgICAgICBjb25zdCBsb2FkZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjPVwiJHtzY3JpcHR9XCJdYCk7XG4gICAgICAgICAgICBpZiAobG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHNjcmlwdFxuICAgICAgICAgICAgY29uc3QgZG9tU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBkb21TY3JpcHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvamF2YXNjcmlwdCcpO1xuICAgICAgICAgICAgZG9tU2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgc2NyaXB0KTtcbiAgICAgICAgICAgIGRvbVNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhc3NldExvYWRlci5sb2FkZWQnLCAnc2NyaXB0Jywgc2NyaXB0LCBkb21TY3JpcHQpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9tU2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhc3NldExvYWRlci5lcnJvcicsICdzY3JpcHQnLCBzY3JpcHQsIGRvbVNjcmlwdCk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgVW5hYmxlIHRvIGxvYWQgc2NyaXB0IGZpbGU6IFwiJHtzY3JpcHR9XCJgKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGRvbVNjcmlwdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluamVjdHMgYW5kIGxvYWRzIGEgQ1NTIHN0eWxlc2hlZXQgaW50byB0aGUgRE9NLlxuICAgICAqXG4gICAgICogVGhlIHN0eWxlc2hlZXQgd2lsbCBiZSBhcHBlbmRlZCBiZWZvcmUgdGhlIGNsb3NpbmcgYDwvaGVhZD5gIHRhZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHlsZVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGxvYWRTdHlsZShzdHlsZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLy8gUmVzb2x2ZSBzdHlsZSBVUkxcbiAgICAgICAgICAgIHN0eWxlID0gdGhpcy5zbm93Ym9hcmQudXJsKCkuYXNzZXQoc3R5bGUpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayB0aGF0IHN0eWxlc2hlZXQgaXMgbm90IGFscmVhZHkgbG9hZGVkXG4gICAgICAgICAgICBjb25zdCBsb2FkZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl1baHJlZj1cIiR7c3R5bGV9XCJdYCk7XG4gICAgICAgICAgICBpZiAobG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHN0eWxlc2hlZXRcbiAgICAgICAgICAgIGNvbnN0IGRvbUNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgICAgIGRvbUNzcy5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgICAgICAgICBkb21Dc3Muc2V0QXR0cmlidXRlKCdocmVmJywgc3R5bGUpO1xuICAgICAgICAgICAgZG9tQ3NzLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmxvYWRlZCcsICdzdHlsZScsIHN0eWxlLCBkb21Dc3MpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9tQ3NzLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhc3NldExvYWRlci5lcnJvcicsICdzdHlsZScsIHN0eWxlLCBkb21Dc3MpO1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFVuYWJsZSB0byBsb2FkIHN0eWxlc2hlZXQgZmlsZTogXCIke3N0eWxlfVwiYCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChkb21Dc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmUtbG9hZHMgYW4gaW1hZ2UuXG4gICAgICpcbiAgICAgKiBUaGUgaW1hZ2Ugd2lsbCBub3QgYmUgaW5qZWN0ZWQgaW50byB0aGUgRE9NLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGltYWdlXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgbG9hZEltYWdlKGltYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyBSZXNvbHZlIHNjcmlwdCBVUkxcbiAgICAgICAgICAgIGltYWdlID0gdGhpcy5zbm93Ym9hcmQudXJsKCkuYXNzZXQoaW1hZ2UpO1xuXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhc3NldExvYWRlci5sb2FkZWQnLCAnaW1hZ2UnLCBpbWFnZSwgaW1nKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYXNzZXRMb2FkZXIuZXJyb3InLCAnaW1hZ2UnLCBpbWFnZSwgaW1nKTtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBVbmFibGUgdG8gbG9hZCBpbWFnZSBmaWxlOiBcIiR7aW1hZ2V9XCJgKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBpbWFnZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBBbGxvd3MgYXR0YWNoaW5nIGEgbG9hZGluZyBjbGFzcyBvbiBlbGVtZW50cyB0aGF0IGFuIEFKQVggcmVxdWVzdCBpcyB0YXJnZXRpbmcuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dGFjaExvYWRpbmcgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgZGVwZW5kZW5pY2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsncmVxdWVzdCddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWpheFN0YXJ0OiAnYWpheFN0YXJ0JyxcbiAgICAgICAgICAgIGFqYXhEb25lOiAnYWpheERvbmUnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFqYXhTdGFydChwcm9taXNlLCByZXF1ZXN0KSB7XG4gICAgICAgIGlmICghcmVxdWVzdC5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVxdWVzdC5lbGVtZW50LnRhZ05hbWUgPT09ICdGT1JNJykge1xuICAgICAgICAgICAgY29uc3QgbG9hZEVsZW1lbnRzID0gcmVxdWVzdC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWF0dGFjaC1sb2FkaW5nXScpO1xuICAgICAgICAgICAgaWYgKGxvYWRFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbG9hZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ2V0TG9hZGluZ0NsYXNzKGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmVsZW1lbnQuZGF0YXNldC5hdHRhY2hMb2FkaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlcXVlc3QuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ2V0TG9hZGluZ0NsYXNzKHJlcXVlc3QuZWxlbWVudCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWpheERvbmUoZGF0YSwgcmVxdWVzdCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QuZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcXVlc3QuZWxlbWVudC50YWdOYW1lID09PSAnRk9STScpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRFbGVtZW50cyA9IHJlcXVlc3QuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hdHRhY2gtbG9hZGluZ10nKTtcbiAgICAgICAgICAgIGlmIChsb2FkRWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxvYWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldExvYWRpbmdDbGFzcyhlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5lbGVtZW50LmRhdGFzZXQuYXR0YWNoTG9hZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXF1ZXN0LmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldExvYWRpbmdDbGFzcyhyZXF1ZXN0LmVsZW1lbnQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExvYWRpbmdDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiAoZWxlbWVudC5kYXRhc2V0LmF0dGFjaExvYWRpbmcgIT09IHVuZGVmaW5lZCAmJiBlbGVtZW50LmRhdGFzZXQuYXR0YWNoTG9hZGluZyAhPT0gJycpXG4gICAgICAgICAgICA/IGVsZW1lbnQuZGF0YXNldC5hdHRhY2hMb2FkaW5nXG4gICAgICAgICAgICA6ICd3bi1sb2FkaW5nJztcbiAgICB9XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5cbi8qKlxuICogRGF0YSBjb25maWd1cmF0aW9uIHByb3ZpZGVyLlxuICpcbiAqIFByb3ZpZGVzIGEgbWVjaGFuaXNtIGZvciBwYXNzaW5nIGNvbmZpZ3VyYXRpb24gZGF0YSB0aHJvdWdoIGFuIGVsZW1lbnQncyBkYXRhIGF0dHJpYnV0ZXMuIFRoaXNcbiAqIGlzIGdlbmVyYWxseSB1c2VkIGZvciB3aWRnZXRzIG9yIFVJIGludGVyYWN0aW9ucyB0byBjb25maWd1cmUgdGhlbS5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjIgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YUNvbmZpZyBleHRlbmRzIFBsdWdpbkJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQbHVnaW5CYXNlfSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbG9jYWxDb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoaW5zdGFuY2UsIGVsZW1lbnQsIGxvY2FsQ29uZmlnKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZSBpbnN0YW5jZW9mIFBsdWdpbkJhc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHByb3ZpZGUgYSBTbm93Ym9hcmQgcGx1Z2luIHRvIGVuYWJsZSBkYXRhIGNvbmZpZ3VyYXRpb24nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhIGNvbmZpZ3VyYXRpb24gY2FuIG9ubHkgYmUgZXh0cmFjdGVkIGZyb20gSFRNTCBlbGVtZW50cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmxvY2FsQ29uZmlnID0gbG9jYWxDb25maWcgfHwge307XG4gICAgICAgIHRoaXMuaW5zdGFuY2VDb25maWcgPSB7fTtcbiAgICAgICAgdGhpcy5hY2NlcHRlZENvbmZpZ3MgPSB7fTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY29uZmlnIGZvciB0aGlzIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogSWYgdGhlIGBjb25maWdgIHBhcmFtZXRlciBpcyB1bnNwZWNpZmllZCwgcmV0dXJucyB0aGUgZW50aXJlIGNvbmZpZ3VyYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnXG4gICAgICovXG4gICAgZ2V0KGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlQ29uZmlnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VDb25maWdbY29uZmlnXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZUNvbmZpZ1tjb25maWddO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb25maWcgZm9yIHRoaXMgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBUaGlzIGFsbG93cyB5b3UgdG8gb3ZlcnJpZGUsIGF0IHJ1bnRpbWUsIGFueSBjb25maWd1cmF0aW9uIHZhbHVlIGFzIG5lY2Vzc2FyeS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWdcbiAgICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBlcnNpc3RcbiAgICAgKi9cbiAgICBzZXQoY29uZmlnLCB2YWx1ZSwgcGVyc2lzdCkge1xuICAgICAgICBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgcHJvdmlkZSBhIGNvbmZpZ3VyYXRpb24ga2V5IHRvIHNldCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZUNvbmZpZ1tjb25maWddID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHBlcnNpc3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kYXRhc2V0W2NvbmZpZ10gPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxDb25maWdbY29uZmlnXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVmcmVzaGVzIHRoZSBjb25maWd1cmF0aW9uIGZyb20gdGhlIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIHdpbGwgYWxsb3cgeW91IHRvIG1ha2UgY2hhbmdlcyB0byB0aGUgZGF0YSBjb25maWcgb24gYSBET00gbGV2ZWwgYW5kIHJlLWFwcGx5IHRoZW1cbiAgICAgKiB0byB0aGUgY29uZmlnIG9uIHRoZSBKYXZhU2NyaXB0IHNpZGUuXG4gICAgICovXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5hY2NlcHRlZENvbmZpZ3MgPSB0aGlzLmdldEFjY2VwdGVkQ29uZmlncygpO1xuICAgICAgICB0aGlzLmluc3RhbmNlQ29uZmlnID0gdGhpcy5wcm9jZXNzQ29uZmlnKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB0aGUgYXZhaWxhYmxlIGNvbmZpZ3VyYXRpb25zIHRoYXQgY2FuIGJlIHNldCB0aHJvdWdoIHRoZSBkYXRhIGNvbmZpZy5cbiAgICAgKlxuICAgICAqIElmIGFuIGluc3RhbmNlIGhhcyBhbiBgYWNjZXB0QWxsRGF0YUNvbmZpZ3NgIHByb3BlcnR5LCBzZXQgdG8gYHRydWVgLCB0aGVuIGFsbCBkYXRhXG4gICAgICogYXR0cmlidXRlcyB3aWxsIGJlIGF2YWlsYWJsZSBhcyBjb25maWd1cmF0aW9uIHZhbHVlcy4gVGhpcyBjYW4gYmUgYSBzZWN1cml0eSBjb25jZXJuLCBzb1xuICAgICAqIHRyZWFkIGNhcmVmdWxseS5cbiAgICAgKlxuICAgICAqIE90aGVyd2lzZSwgYXZhaWxhYmxlIGNvbmZpZ3VyYXRpb25zIHdpbGwgYmUgZGV0ZXJtaW5lZCBieSB0aGUga2V5cyBhdmFpbGFibGUgaW4gYW4gb2JqZWN0XG4gICAgICogcmV0dXJuZWQgYnkgYSBgZGVmYXVsdHMoKWAgbWV0aG9kIGluIHRoZSBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXXxib29sZWFufVxuICAgICAqL1xuICAgIGdldEFjY2VwdGVkQ29uZmlncygpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5hY2NlcHRBbGxEYXRhQ29uZmlncyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAmJiB0aGlzLmluc3RhbmNlLmFjY2VwdEFsbERhdGFDb25maWdzID09PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlZmF1bHRzICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGlzLmluc3RhbmNlLmRlZmF1bHRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAmJiB0eXBlb2YgdGhpcy5pbnN0YW5jZS5kZWZhdWx0cygpID09PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlLmRlZmF1bHRzKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWVzIGZvciB0aGUgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBUaGlzIHdpbGwgYmUgYW4gZW1wdHkgb2JqZWN0IGlmIHRoZSBpbnN0YW5jZSBlaXRoZXIgZG9lcyBub3QgaGF2ZSBhIGBkZWZhdWx0cygpYCBtZXRob2QsIG9yXG4gICAgICogdGhlIG1ldGhvZCBpdHNlbGYgZG9lcyBub3QgcmV0dXJuIGFuIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgZ2V0RGVmYXVsdHMoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGlzLmluc3RhbmNlLmRlZmF1bHRzKCkgPT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgdGhlIGNvbmZpZ3VyYXRpb24uXG4gICAgICpcbiAgICAgKiBMb2FkcyB1cCB0aGUgZGVmYXVsdHMsIHRoZW4gcG9wdWxhdGVzIGl0IHdpdGggYW55IGNvbmZpZ3VyYXRpb24gdmFsdWVzIHByb3ZpZGVkIGJ5IHRoZSBkYXRhXG4gICAgICogYXR0cmlidXRlcywgYmFzZWQgb24gdGhlIHJ1bGVzIG9mIHRoZSBhY2NlcHRlZCBjb25maWd1cmF0aW9ucy5cbiAgICAgKlxuICAgICAqIFRoaXMgY29uZmlndXJhdGlvbiBvYmplY3QgaXMgdGhlbiBjYWNoZWQgYW5kIGF2YWlsYWJsZSB0aHJvdWdoIGBjb25maWcuZ2V0KClgIGNhbGxzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBwcm9jZXNzQ29uZmlnKCkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldERlZmF1bHRzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWNjZXB0ZWRDb25maWdzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY2NlcHRlZENvbmZpZ3MgPT09IHRydWUgfHwgdGhpcy5hY2NlcHRlZENvbmZpZ3MuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5jb2VyY2VWYWx1ZSh0aGlzLmVsZW1lbnQuZGF0YXNldFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMubG9jYWxDb25maWcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjY2VwdGVkQ29uZmlncyA9PT0gdHJ1ZSB8fCB0aGlzLmFjY2VwdGVkQ29uZmlncy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLmxvY2FsQ29uZmlnW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29lcmNlcyBjb25maWd1cmF0aW9uIHZhbHVlcyBmb3IgSmF2YVNjcmlwdC5cbiAgICAgKlxuICAgICAqIFRha2VzIHRoZSBzdHJpbmcgdmFsdWUgcmV0dXJuZWQgZnJvbSB0aGUgZGF0YSBhdHRyaWJ1dGUgYW5kIGNvZXJjZXMgaXQgaW50byBhIG1vcmUgc3VpdGFibGVcbiAgICAgKiB0eXBlIGZvciBKYXZhU2NyaXB0IHByb2Nlc3NpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgY29lcmNlVmFsdWUodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuXG4gICAgICAgIC8vIE51bGwgdmFsdWVcbiAgICAgICAgaWYgKHN0cmluZ1ZhbHVlID09PSAnbnVsbCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVW5kZWZpbmVkIHZhbHVlXG4gICAgICAgIGlmIChzdHJpbmdWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCYXNlNjQgdmFsdWVcbiAgICAgICAgaWYgKHN0cmluZ1ZhbHVlLnN0YXJ0c1dpdGgoJ2Jhc2U2NDonKSkge1xuICAgICAgICAgICAgY29uc3QgYmFzZTY0c3RyID0gc3RyaW5nVmFsdWUucmVwbGFjZSgvXmJhc2U2NDovLCAnJyk7XG4gICAgICAgICAgICBjb25zdCBkZWNvZGVkID0gYXRvYihiYXNlNjRzdHIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29lcmNlVmFsdWUoZGVjb2RlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCb29sZWFuIHZhbHVlXG4gICAgICAgIGlmIChbJ3RydWUnLCAneWVzJ10uaW5jbHVkZXMoc3RyaW5nVmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChbJ2ZhbHNlJywgJ25vJ10uaW5jbHVkZXMoc3RyaW5nVmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE51bWVyaWMgdmFsdWVcbiAgICAgICAgaWYgKC9eWy0rXT9bMC05XSsoXFwuWzAtOV0rKT8kLy50ZXN0KHN0cmluZ1ZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihzdHJpbmdWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBKU09OIHZhbHVlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zbm93Ym9hcmQuanNvblBhcnNlcigpLnBhcnNlKHN0cmluZ1ZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIChzdHJpbmdWYWx1ZSA9PT0gJycpID8gdHJ1ZSA6IHN0cmluZ1ZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuXG4vKipcbiAqIFByb3ZpZGVzIGZsYXNoIG1lc3NhZ2VzIGZvciB0aGUgQ01TLlxuICpcbiAqIEZsYXNoIG1lc3NhZ2VzIHdpbGwgcG9wIHVwIGF0IHRoZSB0b3AgY2VudGVyIG9mIHRoZSBwYWdlIGFuZCB3aWxsIHJlbWFpbiBmb3IgNyBzZWNvbmRzIGJ5IGRlZmF1bHQuIEhvdmVyaW5nIG92ZXJcbiAqIHRoZSBtZXNzYWdlIHdpbGwgcmVzZXQgYW5kIHBhdXNlIHRoZSB0aW1lci4gQ2xpY2tpbmcgb24gdGhlIGZsYXNoIG1lc3NhZ2Ugd2lsbCBkaXNtaXNzIGl0LlxuICpcbiAqIEFyZ3VtZW50czpcbiAqICAtIFwibWVzc2FnZVwiOiBUaGUgY29udGVudCBvZiB0aGUgZmxhc2ggbWVzc2FnZS4gSFRNTCBpcyBhY2NlcHRlZC5cbiAqICAtIFwidHlwZVwiOiBUaGUgdHlwZSBvZiBmbGFzaCBtZXNzYWdlLiBUaGlzIGlzIGFwcGVuZGVkIGFzIGEgY2xhc3MgdG8gdGhlIGZsYXNoIG1lc3NhZ2UgaXRzZWxmLlxuICogIC0gXCJkdXJhdGlvblwiOiBIb3cgbG9uZyB0aGUgZmxhc2ggbWVzc2FnZSB3aWxsIHN0YXkgdmlzaWJsZSBmb3IsIGluIHNlY29uZHMuIERlZmF1bHQ6IDcgc2Vjb25kcy5cbiAqXG4gKiBVc2FnZTpcbiAqICAgICAgU25vd2JvYXJkLmZsYXNoKCdUaGlzIGlzIGEgZmxhc2ggbWVzc2FnZScsICdpbmZvJywgOCk7XG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsYXNoIGV4dGVuZHMgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uXG4gICAgICovXG4gICAgY29uc3RydWN0KG1lc3NhZ2UsIHR5cGUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGUgfHwgJ2RlZmF1bHQnO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gTnVtYmVyKGR1cmF0aW9uIHx8IDcpO1xuXG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGbGFzaCBkdXJhdGlvbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyLCBvciB6ZXJvJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZsYXNoVGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgZGVwZW5kZW5jaWVzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsndHJhbnNpdGlvbiddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBUaGlzIHdpbGwgZW5zdXJlIHRoZSBmbGFzaCBtZXNzYWdlIGlzIHJlbW92ZWQgYW5kIHRpbWVvdXQgaXMgY2xlYXJlZCBpZiB0aGUgbW9kdWxlIGlzIHJlbW92ZWQuXG4gICAgICovXG4gICAgZGVzdHJ1Y3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmxhc2hUaW1lcikge1xuICAgICAgICAgICAgdGhpcy5mbGFzaFRpbWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmxhc2gpIHtcbiAgICAgICAgICAgIHRoaXMuZmxhc2gucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmZsYXNoID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZmxhc2hUaW1lciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5kZXN0cnVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGZsYXNoIG1lc3NhZ2UuXG4gICAgICovXG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnZmxhc2guY3JlYXRlJywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5mbGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICB0aGlzLmZsYXNoLmlubmVySFRNTCA9IHRoaXMubWVzc2FnZTtcbiAgICAgICAgdGhpcy5mbGFzaC5jbGFzc0xpc3QuYWRkKCdmbGFzaC1tZXNzYWdlJywgdGhpcy50eXBlKTtcbiAgICAgICAgdGhpcy5mbGFzaC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtY29udHJvbCcpO1xuICAgICAgICB0aGlzLmZsYXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5yZW1vdmUoKSk7XG4gICAgICAgIHRoaXMuZmxhc2guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4gdGhpcy5zdG9wVGltZXIoKSk7XG4gICAgICAgIHRoaXMuZmxhc2guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB0aGlzLnN0YXJ0VGltZXIoKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmZsYXNoVGltZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgIHRoaXMuZmxhc2hUaW1lci5jbGFzc0xpc3QuYWRkKCdmbGFzaC10aW1lcicpO1xuICAgICAgICAgICAgdGhpcy5mbGFzaC5hcHBlbmRDaGlsZCh0aGlzLmZsYXNoVGltZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mbGFzaC5jbGFzc0xpc3QuYWRkKCduby10aW1lcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRvIGJvZHlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmZsYXNoKTtcblxuICAgICAgICB0aGlzLnNub3dib2FyZC50cmFuc2l0aW9uKHRoaXMuZmxhc2gsICdzaG93JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGZsYXNoIG1lc3NhZ2UuXG4gICAgICovXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnZmxhc2gucmVtb3ZlJywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcblxuICAgICAgICB0aGlzLnNub3dib2FyZC50cmFuc2l0aW9uKHRoaXMuZmxhc2gsICdoaWRlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mbGFzaC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuZmxhc2ggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGZsYXNoIG1lc3NhZ2VzIGF2YWlsYWJsZSBvbiB0aGUgcGFnZS5cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYm9keSA+IGRpdi5mbGFzaC1tZXNzYWdlJykuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRoZSB0aW1lciBmb3IgdGhpcyBmbGFzaCBtZXNzYWdlLlxuICAgICAqL1xuICAgIHN0YXJ0VGltZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWVyVHJhbnMgPSB0aGlzLnNub3dib2FyZC50cmFuc2l0aW9uKHRoaXMuZmxhc2hUaW1lciwgJ3RpbWVvdXQnLCBudWxsLCBgJHt0aGlzLmR1cmF0aW9ufS4wc2AsIHRydWUpO1xuICAgICAgICB0aGlzLnRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW1vdmUoKSwgdGhpcy5kdXJhdGlvbiAqIDEwMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgdGltZXIgZm9yIHRoaXMgZmxhc2ggbWVzc2FnZS5cbiAgICAgKi9cbiAgICBzdG9wVGltZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyVHJhbnMpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXJUcmFucy5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogRGVmaW5lcyBhIGRlZmF1bHQgbGlzdGVuZXIgZm9yIGZsYXNoIGV2ZW50cy5cbiAqXG4gKiBDb25uZWN0cyB0aGUgRmxhc2ggcGx1Z2luIHRvIHZhcmlvdXMgZXZlbnRzIHRoYXQgdXNlIGZsYXNoIG1lc3NhZ2VzLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGFzaExpc3RlbmVyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGRlcGVuZGVuaWNlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbJ2ZsYXNoJ107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWFkeTogJ3JlYWR5JyxcbiAgICAgICAgICAgIGFqYXhFcnJvck1lc3NhZ2U6ICdhamF4RXJyb3JNZXNzYWdlJyxcbiAgICAgICAgICAgIGFqYXhGbGFzaE1lc3NhZ2VzOiAnYWpheEZsYXNoTWVzc2FnZXMnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvIGZsYXNoIG1lc3NhZ2VzIGZvciBQSFAgZmxhc2ggcmVzcG9uc2VzLlxuICAgICAqL1xuICAgIHJlYWR5KCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jb250cm9sPVwiZmxhc2gtbWVzc2FnZVwiXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmZsYXNoKFxuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5mbGFzaFR5cGUsXG4gICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmZsYXNoRHVyYXRpb24sXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIGZsYXNoIG1lc3NhZ2UgZm9yIEFKQVggZXJyb3JzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBhamF4RXJyb3JNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZmxhc2gobWVzc2FnZSwgJ2Vycm9yJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBmbGFzaCBtZXNzYWdlcyByZXR1cm5lZCBkaXJlY3RseSBmcm9tIEFKQVggZnVuY3Rpb25hbGl0eS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlc1xuICAgICAqL1xuICAgIGFqYXhGbGFzaE1lc3NhZ2VzKG1lc3NhZ2VzKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG1lc3NhZ2VzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2Nzc0NsYXNzLCBtZXNzYWdlXSA9IGVudHJ5O1xuICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZmxhc2gobWVzc2FnZSwgY3NzQ2xhc3MpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogQWRkcyBBSkFYLWRyaXZlbiBmb3JtIHZhbGlkYXRpb24gdG8gU25vd2JvYXJkIHJlcXVlc3RzLlxuICpcbiAqIERvY3VtZW50YXRpb24gZm9yIHRoaXMgZmVhdHVyZSBjYW4gYmUgZm91bmQgaGVyZTpcbiAqIGh0dHBzOi8vd2ludGVyY21zLmNvbS9kb2NzL3Nub3dib2FyZC9leHRyYXMjYWpheC12YWxpZGF0aW9uXG4gKlxuICogQGNvcHlyaWdodCAyMDIyIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0aW9uIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JCYWdzID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWFkeTogJ3JlYWR5JyxcbiAgICAgICAgICAgIGFqYXhTdGFydDogJ2NsZWFyVmFsaWRhdGlvbicsXG4gICAgICAgICAgICBhamF4VmFsaWRhdGlvbkVycm9yczogJ2RvVmFsaWRhdGlvbicsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVhZHkgZXZlbnQgaGFuZGxlci5cbiAgICAgKi9cbiAgICByZWFkeSgpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0RXJyb3JCYWdzKGRvY3VtZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdmFsaWRhdGlvbiBlcnJvcnMgZnJvbSBhbiBBSkFYIHJlc3BvbnNlIGFuZCBwYXNzZXMgdGhlbSB0aHJvdWdoIHRvIHRoZSBlcnJvciBiYWdzLlxuICAgICAqXG4gICAgICogVGhpcyBoYW5kbGVyIHJldHVybnMgZmFsc2UgdG8gY2FuY2VsIGFueSBmdXJ0aGVyIHZhbGlkYXRpb24gaGFuZGxpbmcsIGFuZCBwcmV2ZW50cyB0aGUgZmxhc2hcbiAgICAgKiBtZXNzYWdlIHRoYXQgaXMgZGlzcGxheWVkIGJ5IGRlZmF1bHQgZm9yIGZpZWxkIGVycm9ycyBpbiBBSkFYIHJlcXVlc3RzIGZyb20gc2hvd2luZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGludmFsaWRGaWVsZHNcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R9IHJlcXVlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBkb1ZhbGlkYXRpb24oZm9ybSwgaW52YWxpZEZpZWxkcywgcmVxdWVzdCkge1xuICAgICAgICBpZiAocmVxdWVzdC5lbGVtZW50ICYmIHJlcXVlc3QuZWxlbWVudC5kYXRhc2V0LnJlcXVlc3RWYWxpZGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXJyb3JCYWdzID0gdGhpcy5lcnJvckJhZ3MuZmlsdGVyKChlcnJvckJhZykgPT4gZXJyb3JCYWcuZm9ybSA9PT0gZm9ybSk7XG4gICAgICAgIGVycm9yQmFncy5mb3JFYWNoKChlcnJvckJhZykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JCYWcoZXJyb3JCYWcsIGludmFsaWRGaWVsZHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFueSB2YWxpZGF0aW9uIGVycm9ycyBpbiB0aGUgZ2l2ZW4gZm9ybS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UHJvbWlzZX0gcHJvbWlzZVxuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxdWVzdFxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGNsZWFyVmFsaWRhdGlvbihwcm9taXNlLCByZXF1ZXN0KSB7XG4gICAgICAgIGlmIChyZXF1ZXN0LmVsZW1lbnQgJiYgcmVxdWVzdC5lbGVtZW50LmRhdGFzZXQucmVxdWVzdFZhbGlkYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlcXVlc3QuZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXJyb3JCYWdzID0gdGhpcy5lcnJvckJhZ3MuZmlsdGVyKChlcnJvckJhZykgPT4gZXJyb3JCYWcuZm9ybSA9PT0gcmVxdWVzdC5mb3JtKTtcbiAgICAgICAgZXJyb3JCYWdzLmZvckVhY2goKGVycm9yQmFnKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVFcnJvckJhZyhlcnJvckJhZyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbGxlY3RzIGVycm9yIGJhZ3MgKGVsZW1lbnRzIHdpdGggXCJkYXRhLXZhbGlkYXRlLWVycm9yXCIgYXR0cmlidXRlKSBhbmQgbGlua3MgdGhlbSB0byBhXG4gICAgICogcGxhY2Vob2xkZXIgYW5kIGZvcm0uXG4gICAgICpcbiAgICAgKiBUaGUgZXJyb3IgYmFncyB3aWxsIGJlIGluaXRpYWxseSBoaWRkZW4sIGFuZCB3aWxsIG9ubHkgc2hvdyB3aGVuIHZhbGlkYXRpb24gZXJyb3JzIG9jY3VyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm9vdE5vZGVcbiAgICAgKi9cbiAgICBjb2xsZWN0RXJyb3JCYWdzKHJvb3ROb2RlKSB7XG4gICAgICAgIHJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZhbGlkYXRlLWVycm9yXSwgW2RhdGEtdmFsaWRhdGUtZm9yXScpLmZvckVhY2goKGVycm9yQmFnKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZXJyb3JCYWcuY2xvc2VzdCgnZm9ybVtkYXRhLXJlcXVlc3QtdmFsaWRhdGVdJyk7XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgZXJyb3IgYmFnIGRvZXMgbm90IHJlc2lkZSB3aXRoaW4gYSB2YWxpZGF0aW5nIGZvcm0sIHJlbW92ZSBpdFxuICAgICAgICAgICAgaWYgKCFmb3JtKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JCYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlcnJvckJhZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGaW5kIG1lc3NhZ2UgbGlzdCBub2RlLCBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgIGxldCBtZXNzYWdlTGlzdEVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGVycm9yQmFnLm1hdGNoZXMoJ1tkYXRhLXZhbGlkYXRlLWVycm9yXScpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUxpc3RFbGVtZW50ID0gZXJyb3JCYWcucXVlcnlTZWxlY3RvcignW2RhdGEtbWVzc2FnZV0nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgcGxhY2Vob2xkZXIgbm9kZVxuICAgICAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblxuICAgICAgICAgICAgLy8gUmVnaXN0ZXIgZXJyb3IgYmFnIGFuZCByZXBsYWNlIHdpdGggcGxhY2Vob2xkZXJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yQmFnRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlcnJvckJhZyxcbiAgICAgICAgICAgICAgICBmb3JtLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9yOiAoZXJyb3JCYWcuZGF0YXNldC52YWxpZGF0ZUZvcilcbiAgICAgICAgICAgICAgICAgICAgPyBlcnJvckJhZy5kYXRhc2V0LnZhbGlkYXRlRm9yLnNwbGl0KC9cXHMqLFxccyovKVxuICAgICAgICAgICAgICAgICAgICA6ICcqJyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICBtZXNzYWdlTGlzdEVsZW1lbnQ6IChtZXNzYWdlTGlzdEVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgID8gbWVzc2FnZUxpc3RFbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUxpc3RBbmNob3I6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VzdG9tTWVzc2FnZTogKGVycm9yQmFnLmRhdGFzZXQudmFsaWRhdGVGb3IpXG4gICAgICAgICAgICAgICAgICAgID8gKGVycm9yQmFnLnRleHRDb250ZW50ICE9PSAnJyB8fCBlcnJvckJhZy5jaGlsZE5vZGVzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBJZiBhbiBtZXNzYWdlIGxpc3QgZWxlbWVudCBleGlzdHMsIGNyZWF0ZSBhbm90aGVyIHBsYWNlaG9sZGVyIHRvIGFjdCBhcyBhbiBhbmNob3IgcG9pbnRcbiAgICAgICAgICAgIGlmIChtZXNzYWdlTGlzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlTGlzdEFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VMaXN0RWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChtZXNzYWdlTGlzdEFuY2hvciwgbWVzc2FnZUxpc3RFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBlcnJvckJhZ0RhdGEubWVzc2FnZUxpc3RBbmNob3IgPSBtZXNzYWdlTGlzdEFuY2hvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXJyb3JCYWcucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocGxhY2Vob2xkZXIsIGVycm9yQmFnKTtcblxuICAgICAgICAgICAgdGhpcy5lcnJvckJhZ3MucHVzaChlcnJvckJhZ0RhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlcyBhbiBlcnJvciBiYWcsIHJlcGxhY2luZyB0aGUgZXJyb3IgbWVzc2FnZXMgd2l0aCBhIHBsYWNlaG9sZGVyIG5vZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXJyb3JCYWdcbiAgICAgKi9cbiAgICBoaWRlRXJyb3JCYWcoZXJyb3JCYWcpIHtcbiAgICAgICAgaWYgKGVycm9yQmFnLmVsZW1lbnQuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIGVycm9yQmFnLmVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZXJyb3JCYWcucGxhY2Vob2xkZXIsIGVycm9yQmFnLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYW4gZXJyb3IgYmFnIHdpdGggdGhlIGdpdmVuIGludmFsaWQgZmllbGRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVycm9yQmFnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGludmFsaWRGaWVsZHNcbiAgICAgKi9cbiAgICBzaG93RXJyb3JCYWcoZXJyb3JCYWcsIGludmFsaWRGaWVsZHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVycm9yQmFnVmFsaWRhdGVzRmllbGQoZXJyb3JCYWcsIGludmFsaWRGaWVsZHMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVycm9yQmFnLmVsZW1lbnQuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIGVycm9yQmFnLnBsYWNlaG9sZGVyLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVycm9yQmFnLmVsZW1lbnQsIGVycm9yQmFnLnBsYWNlaG9sZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvckJhZy52YWxpZGF0ZUZvciAhPT0gJyonKSB7XG4gICAgICAgICAgICBpZiAoIWVycm9yQmFnLmN1c3RvbU1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdEZpZWxkID0gT2JqZWN0LmtleXMoaW52YWxpZEZpZWxkcylcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZmllbGQpID0+IGVycm9yQmFnLnZhbGlkYXRlRm9yLmluY2x1ZGVzKGZpZWxkKSlcbiAgICAgICAgICAgICAgICAgICAgLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgW2Vycm9yQmFnLmVsZW1lbnQuaW5uZXJIVE1MXSA9IGludmFsaWRGaWVsZHNbZmlyc3RGaWVsZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZXJyb3JCYWcubWVzc2FnZUxpc3RFbGVtZW50KSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgcHJldmlvdXMgZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgICAgIGVycm9yQmFnLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsaWRhdGlvbi1tZXNzYWdlXScpLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoaW52YWxpZEZpZWxkcykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbLCBlcnJvcnNdID0gZW50cnk7XG5cbiAgICAgICAgICAgICAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUVsZW1lbnQgPSBlcnJvckJhZy5tZXNzYWdlTGlzdEVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5kYXRhc2V0LnZhbGlkYXRpb25NZXNzYWdlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmlubmVySFRNTCA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICBlcnJvckJhZy5tZXNzYWdlTGlzdEFuY2hvci5hZnRlcihtZXNzYWdlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFtlcnJvckJhZy5lbGVtZW50LmlubmVySFRNTF0gPSBpbnZhbGlkRmllbGRzW09iamVjdC5rZXlzKGludmFsaWRGaWVsZHMpLnNoaWZ0KCldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhIGdpdmVuIGVycm9yIGJhZyBhcHBsaWVzIGZvciB0aGUgZ2l2ZW4gaW52YWxpZCBmaWVsZHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXJyb3JCYWdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaW52YWxpZEZpZWxkc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGVycm9yQmFnVmFsaWRhdGVzRmllbGQoZXJyb3JCYWcsIGludmFsaWRGaWVsZHMpIHtcbiAgICAgICAgaWYgKGVycm9yQmFnLnZhbGlkYXRlRm9yID09PSAnKicpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGludmFsaWRGaWVsZHMpXG4gICAgICAgICAgICAuZmlsdGVyKChmaWVsZCkgPT4gZXJyb3JCYWcudmFsaWRhdGVGb3IuaW5jbHVkZXMoZmllbGQpKVxuICAgICAgICAgICAgLmxlbmd0aCA+IDA7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBEaXNwbGF5cyBhIHN0cmlwZSBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlIHRoYXQgaW5kaWNhdGVzIGxvYWRpbmcuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmlwZUxvYWRlciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBkZXBlbmRlbmljZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gWydyZXF1ZXN0J107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWFkeTogJ3JlYWR5JyxcbiAgICAgICAgICAgIGFqYXhTdGFydDogJ2FqYXhTdGFydCcsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVhZHkoKSB7XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTdHJpcGUoKTtcbiAgICB9XG5cbiAgICBhamF4U3RhcnQocHJvbWlzZSwgcmVxdWVzdCkge1xuICAgICAgICBpZiAocmVxdWVzdC5vcHRpb25zLnN0cmlwZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvdygpO1xuXG4gICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZVN0cmlwZSgpIHtcbiAgICAgICAgdGhpcy5pbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgdGhpcy5zdHJpcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgdGhpcy5zdHJpcGVMb2FkZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcblxuICAgICAgICB0aGlzLmluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdzdHJpcGUtbG9hZGluZy1pbmRpY2F0b3InLCAnbG9hZGVkJyk7XG4gICAgICAgIHRoaXMuc3RyaXBlLmNsYXNzTGlzdC5hZGQoJ3N0cmlwZScpO1xuICAgICAgICB0aGlzLnN0cmlwZUxvYWRlZC5jbGFzc0xpc3QuYWRkKCdzdHJpcGUtbG9hZGVkJyk7XG5cbiAgICAgICAgdGhpcy5pbmRpY2F0b3IuYXBwZW5kQ2hpbGQodGhpcy5zdHJpcGUpO1xuICAgICAgICB0aGlzLmluZGljYXRvci5hcHBlbmRDaGlsZCh0aGlzLnN0cmlwZUxvYWRlZCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmluZGljYXRvcik7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XG5cbiAgICAgICAgY29uc3QgbmV3U3RyaXBlID0gdGhpcy5zdHJpcGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICB0aGlzLmluZGljYXRvci5hcHBlbmRDaGlsZChuZXdTdHJpcGUpO1xuICAgICAgICB0aGlzLnN0cmlwZS5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5zdHJpcGUgPSBuZXdTdHJpcGU7XG5cbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRlZCcpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3duLWxvYWRpbmcnKTtcbiAgICB9XG5cbiAgICBoaWRlKGZvcmNlKSB7XG4gICAgICAgIHRoaXMuY291bnRlciAtPSAxO1xuXG4gICAgICAgIGlmIChmb3JjZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3duLWxvYWRpbmcnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogRW1iZWRzIHRoZSBcImV4dHJhc1wiIHN0eWxlc2hlZXQgaW50byB0aGUgcGFnZSwgaWYgaXQgaXMgbm90IGxvYWRlZCB0aHJvdWdoIHRoZSB0aGVtZS5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGVzaGVldExvYWRlciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWFkeTogJ3JlYWR5JyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZWFkeSgpIHtcbiAgICAgICAgbGV0IHN0eWxlc0xvYWRlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIERldGVybWluZSBpZiBzdHlsZXNoZWV0IGlzIGFscmVhZHkgbG9hZGVkXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpLmZvckVhY2goKGNzcykgPT4ge1xuICAgICAgICAgICAgaWYgKGNzcy5ocmVmLmVuZHNXaXRoKCcvbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2Nzcy9zbm93Ym9hcmQuZXh0cmFzLmNzcycpKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFzdHlsZXNMb2FkZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlc2hlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgICAgICBzdHlsZXNoZWV0LnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICAgICAgICAgIHN0eWxlc2hlZXQuc2V0QXR0cmlidXRlKCdocmVmJywgdGhpcy5zbm93Ym9hcmQudXJsKCkuYXNzZXQoJy9tb2R1bGVzL3N5c3RlbS9hc3NldHMvY3NzL3Nub3dib2FyZC5leHRyYXMuY3NzJykpO1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZXNoZWV0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBQbHVnaW5CYXNlIGZyb20gJy4uL2Fic3RyYWN0cy9QbHVnaW5CYXNlJztcblxuLyoqXG4gKiBQcm92aWRlcyB0cmFuc2l0aW9uIHN1cHBvcnQgZm9yIGVsZW1lbnRzLlxuICpcbiAqIFRyYW5zaXRpb24gYWxsb3dzIENTUyB0cmFuc2l0aW9ucyB0byBiZSBjb250cm9sbGVkIGFuZCBjYWxsYmFja3MgdG8gYmUgcnVuIG9uY2UgY29tcGxldGVkLiBJdCB3b3JrcyBzaW1pbGFyIHRvIFZ1ZVxuICogdHJhbnNpdGlvbnMgd2l0aCAzIHN0YWdlcyBvZiB0cmFuc2l0aW9uLCBhbmQgY2xhc3NlcyBhc3NpZ25lZCB0byB0aGUgZWxlbWVudCB3aXRoIHRoZSB0cmFuc2l0aW9uIG5hbWUgc3VmZml4ZWQgd2l0aFxuICogdGhlIHN0YWdlIG9mIHRyYW5zaXRpb246XG4gKlxuICogIC0gYGluYDogQSBjbGFzcyBhc3NpZ25lZCB0byB0aGUgZWxlbWVudCBmb3IgdGhlIGZpcnN0IGZyYW1lIG9mIHRoZSB0cmFuc2l0aW9uLCByZW1vdmVkIGFmdGVyd2FyZHMuIFRoaXMgc2hvdWxkIGJlXG4gKiAgICAgIHVzZWQgdG8gZGVmaW5lIHRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSB0cmFuc2l0aW9uLlxuICogIC0gYGFjdGl2ZWA6IEEgY2xhc3MgYXNzaWduZWQgdG8gdGhlIGVsZW1lbnQgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgdHJhbnNpdGlvbi4gVGhpcyBzaG91bGQgYmUgdXNlZCB0byBkZWZpbmUgdGhlXG4gKiAgICAgIHRyYW5zaXRpb24gaXRzZWxmLlxuICogIC0gYG91dGA6IEEgY2xhc3MgYXNzaWduZWQgdG8gdGhlIGVsZW1lbnQgYWZ0ZXIgdGhlIGZpcnN0IGZyYW1lIG9mIHRoZSB0cmFuc2l0aW9uIGFuZCBrZXB0IHRvIHRoZSBlbmQgb2YgdGhlXG4gKiAgICAgIHRyYW5zaXRpb24uIFRoaXMgc2hvdWxkIGRlZmluZSB0aGUgZW5kIHN0YXRlIG9mIHRoZSB0cmFuc2l0aW9uLlxuICpcbiAqIFVzYWdlOlxuICogICAgICBTbm93Ym9hcmQudHJhbnNpdGlvbihkb2N1bWVudC5lbGVtZW50LCAndHJhbnNpdGlvbicsICgpID0+IHtcbiAqICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdmUgZWxlbWVudCBhZnRlciA3IHNlY29uZHMnKTtcbiAqICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gKiAgICAgIH0sICc3cycpO1xuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2l0aW9uIGV4dGVuZHMgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIHRyYW5zaXRpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhbnNpdGlvbiBUaGUgbmFtZSBvZiB0aGUgdHJhbnNpdGlvbiwgdGhpcyBwcmVmaXhlcyB0aGUgc3RhZ2VzIG9mIHRyYW5zaXRpb24uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gY2FsbCB3aGVuIHRoZSB0cmFuc2l0aW9uIGVuZHMuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIEFuIG9wdGlvbmFsIG92ZXJyaWRlIG9uIHRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uLiBNdXN0IGJlIHNwZWNpZmllZCBhcyAncycgKHNlY3MpIG9yICdtcycgKG1zZWNzKS5cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHRyYWlsVG8gSWYgdHJ1ZSwgdGhlIFwib3V0XCIgY2xhc3Mgd2lsbCByZW1haW4gYWZ0ZXIgdGhlIGVuZCBvZiB0aGUgdHJhbnNpdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoZWxlbWVudCwgdHJhbnNpdGlvbiwgY2FsbGJhY2ssIGR1cmF0aW9uLCB0cmFpbFRvKSB7XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgSFRNTEVsZW1lbnQgbXVzdCBiZSBwcm92aWRlZCBmb3IgdHJhbnNpdGlvbmluZycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcmFuc2l0aW9uIG5hbWUgbXVzdCBiZSBzcGVjaWZpZWQgYXMgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuXG4gICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FsbGJhY2sgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXG4gICAgICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHRoaXMucGFyc2VEdXJhdGlvbihkdXJhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhaWxUbyA9ICh0cmFpbFRvID09PSB0cnVlKTtcblxuICAgICAgICB0aGlzLmRvVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcHMgZXZlbnQgY2xhc3NlcyB0byB0aGUgZ2l2ZW4gdHJhbnNpdGlvbiBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgey4uLmFueX0gYXJnc1xuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBldmVudENsYXNzZXMoLi4uYXJncykge1xuICAgICAgICBjb25zdCBldmVudENsYXNzZXMgPSB7XG4gICAgICAgICAgICBpbjogYCR7dGhpcy50cmFuc2l0aW9ufS1pbmAsXG4gICAgICAgICAgICBhY3RpdmU6IGAke3RoaXMudHJhbnNpdGlvbn0tYWN0aXZlYCxcbiAgICAgICAgICAgIG91dDogYCR7dGhpcy50cmFuc2l0aW9ufS1vdXRgLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZXZlbnRDbGFzc2VzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJldHVybkNsYXNzZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZXZlbnRDbGFzc2VzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gZW50cnk7XG5cbiAgICAgICAgICAgIGlmIChhcmdzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5DbGFzc2VzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmV0dXJuQ2xhc3NlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgdHJhbnNpdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGRvVHJhbnNpdGlvbigpIHtcbiAgICAgICAgLy8gQWRkIGR1cmF0aW9uIG92ZXJyaWRlXG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzZXRDbGFzc2VzKCk7XG5cbiAgICAgICAgLy8gU3RhcnQgdHJhbnNpdGlvbiAtIHNob3cgXCJpblwiIGFuZCBcImFjdGl2ZVwiIGNsYXNzZXNcbiAgICAgICAgdGhpcy5ldmVudENsYXNzZXMoJ2luJywgJ2FjdGl2ZScpLmZvckVhY2goKGV2ZW50Q2xhc3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGV2ZW50Q2xhc3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBhIHRyYW5zaXRpb24gZXhpc3RzXG4gICAgICAgICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVsndHJhbnNpdGlvbi1kdXJhdGlvbiddICE9PSAnMHMnKSB7XG4gICAgICAgICAgICAgICAgLy8gTGlzdGVuIGZvciB0aGUgdHJhbnNpdGlvbiB0byBlbmRcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHRoaXMub25UcmFuc2l0aW9uRW5kKCksIHtcbiAgICAgICAgICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5ldmVudENsYXNzZXMoJ2luJylbMF0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmV2ZW50Q2xhc3Nlcygnb3V0JylbMF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Q2xhc3NlcygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjay5hcHBseSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZnVuY3Rpb24gd2hlbiB0aGUgdHJhbnNpdGlvbiBlbmRzLlxuICAgICAqXG4gICAgICogV2hlbiBhIHRyYW5zaXRpb24gZW5kcywgdGhlIGluc3RhbmNlIG9mIHRoZSB0cmFuc2l0aW9uIGlzIGF1dG9tYXRpY2FsbHkgZGVzdHJ1Y3RlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIG9uVHJhbnNpdGlvbkVuZCgpIHtcbiAgICAgICAgdGhpcy5ldmVudENsYXNzZXMoJ2FjdGl2ZScsICghdGhpcy50cmFpbFRvKSA/ICdvdXQnIDogJycpLmZvckVhY2goKGV2ZW50Q2xhc3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGV2ZW50Q2xhc3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjay5hcHBseSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGR1cmF0aW9uIG92ZXJyaWRlXG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYW5jZWxzIGEgdHJhbnNpdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB0aGlzLm9uVHJhbnNpdGlvbkVuZCwge1xuICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZXNldENsYXNzZXMoKTtcblxuICAgICAgICAvLyBSZW1vdmUgZHVyYXRpb24gb3ZlcnJpZGVcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCBkZXN0cnVjdG9yXG4gICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIGNsYXNzZXMsIHJlbW92aW5nIGFueSB0cmFuc2l0aW9uIGNsYXNzZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICByZXNldENsYXNzZXMoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRDbGFzc2VzKCkuZm9yRWFjaCgoZXZlbnRDbGFzcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZXZlbnRDbGFzcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhIGdpdmVuIGR1cmF0aW9uIGFuZCBjb252ZXJ0cyBpdCB0byBhIFwibXNcIiB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkdXJhdGlvblxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgcGFyc2VEdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSAvXihbMC05XSsoXFwuWzAtOV0rKT8pKG0/cyk/JC8uZXhlYyhkdXJhdGlvbik7XG4gICAgICAgIGNvbnN0IGFtb3VudCA9IE51bWJlcihwYXJzZWRbMV0pO1xuICAgICAgICBjb25zdCB1bml0ID0gKHBhcnNlZFszXSA9PT0gJ3MnKVxuICAgICAgICAgICAgPyAnc2VjJ1xuICAgICAgICAgICAgOiAnbXNlYyc7XG5cbiAgICAgICAgcmV0dXJuICh1bml0ID09PSAnc2VjJylcbiAgICAgICAgICAgID8gYCR7YW1vdW50ICogMTAwMH1tc2BcbiAgICAgICAgICAgIDogYCR7TWF0aC5mbG9vcihhbW91bnQpfW1zYDtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gVHJpZ2dlckVudGl0eVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHRyaWdnZXIgVGhlIHNlbGVjdG9yIGZvciB0aGUgdHJpZ2dlciB0YXJnZXQgZWxlbWVudChzKS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjb25kaXRpb24gVGhlIGNvbmRpdGlvbiB0aGF0IG11c3QgYmUgbWV0IGZvciB0aGUgdHJpZ2dlciB0byBmaXJlLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGFjdGlvbiBUaGUgYWN0aW9uIHRvIHBlcmZvcm0gd2hlbiB0aGUgdHJpZ2dlciBmaXJlcy5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfHVuZGVmaW5lZH0gcGFyZW50IFRoZSBwYXJlbnQgZWxlbWVudCB3aXRoIHdoaWNoIHRvIGxpbWl0IHRoZSB0cmlnZ2VyIHNjb3BlLlxuICogQHByb3BlcnR5IHtzdHJpbmd8bnVtYmVyfSBwcmlvcml0eSBUaGUgcHJpb3JpdHkgb2YgdGhlIHRyaWdnZXIgZXZlbnQuXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50W119IGVsZW1lbnRzIFRoZSB0YXJnZXQgZWxlbWVudHMgdGhhdCB0aGlzIHRyaWdnZXIgYXBwbGllcyB0by5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb25bXX0gY29uZGl0aW9uQ2FsbGJhY2tzIFRoZSBjb25kaXRpb24gY2FsbGJhY2tzIGZvciB0aGlzIHRyaWdnZXIuXG4gKiBAcHJvcGVydHkge01hcDxIVE1MRWxlbWVudCwgU2V0PHN0cmluZz4+fSBlbGVtZW50RXZlbnRzIFRoZSBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgdGFyZ2V0IGVsZW1lbnRzLlxuICovXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRyaWdnZXJFbGVtZW50XG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSB0YXJnZXQgZWxlbWVudC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudE5hbWUgVGhlIHRyaWdnZXIgZXZlbnQgbmFtZS5cbiAqIEBwcm9wZXJ0eSB7aW50fSBwcmlvcml0eSBUaGUgdHJpZ2dlciBldmVudCBwcmlvcml0eS5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGV2ZW50IFRoZSB0cmlnZ2VyIGV2ZW50IGZ1bmN0aW9uLlxuICovXG5cbi8qKlxuICogVHJpZ2dlciBoYW5kbGVyIGZvciBIVE1MIGVsZW1lbnRzLlxuICpcbiAqIFRoaXMgaXMgYSByZS1pbWFnaW5pbmcgb2YgdGhlIElucHV0LlRyaWdnZXIgZnVuY3Rpb25hbGl0eSBpbiB0aGUgb3JpZ2luYWwgV2ludGVyIENNUyBmcmFtZXdvcmssXG4gKiBpbml0aWFsaXNlZCB0aHJvdWdoIHRoZSBgZGF0YS10cmlnZ2VyYCBhdHRyaWJ1dGVzLlxuICpcbiAqIEluIGFkZGl0aW9uIHRvIHJlbWFpbmluZyBiYWNrd2FyZHMtY29tcGF0aWJsZSB3aXRoIHRoZSBvcmlnaW5hbCBJbnB1dC5UcmlnZ2VyIGZ1bmN0aW9uYWxpdHksIHRoaXNcbiAqIGhhbmRsZXIgYWRkcyBhZGRpdGlvbmFsIGNvbmRpdGlvbnMgYW5kIGNvbmZpZ3VyYXRpb24gZm9yIG1vcmUgZmxleGlibGUgdHJpZ2dlciB1c2FnZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vd2ludGVyY21zLmNvbS9kb2NzL3YxLjIvdWkvc2NyaXB0L2lucHV0LXRyaWdnZXJcbiAqXG4gKiBAY29weXJpZ2h0IDIwMjQgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJpZ2dlciBleHRlbmRzIFBsdWdpbkJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgICAqL1xuICAgIGNvbnN0cnVjdChlbGVtZW50KSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZWxlbWVudCB0aGlzIGluc3RhbmNlIGlzIGF0dGFjaGVkIHRvLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge01hcDxzdHJpbmcsIFRyaWdnZXJFbnRpdHk+fSBUaGUgdHJpZ2dlcnMgZm9yIHRoaXMgZWxlbWVudC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJpZ2dlcnMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtNYXA8RWxlbWVudCwgU2V0PFRyaWdnZXJFbGVtZW50Pj59IEEgbWFwIG9mIGVsZW1lbnRzIHRoYXQgdHJpZ2dlciBldmVudHMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmV2ZW50cyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge01hcDxFbGVtZW50LCBNYXA8c3RyaW5nLCBGdW5jdGlvbj4+fSBBIG1hcCBvZiBlbGVtZW50cyBhbmQgdGhlaXIgZXZlbnQgY29ubmVjdG9ycy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29ubmVjdG9ycyA9IG5ldyBNYXAoKTtcblxuICAgICAgICB0aGlzLnBhcnNlVHJpZ2dlcnMoKTtcblxuICAgICAgICBpZiAodGhpcy50cmlnZ2Vycy5zaXplID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldEV2ZW50cygpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVUcmlnZ2VyRXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLnJ1bkV2ZW50cygpO1xuXG4gICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgndHJpZ2dlcnMucmVhZHknLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICBkZXN0cnVjdCgpIHtcbiAgICAgICAgdGhpcy5yZXNldEV2ZW50cygpO1xuICAgICAgICBzdXBlci5kZXN0cnVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgZWxlbWVudCdzIGRhdGEgYXR0cmlidXRlcyBhbmQgZGV0ZXJtaW5lcyBhcHBsaWNhYmxlIHRyaWdnZXJzLlxuICAgICAqXG4gICAgICogVHJpZ2dlciBkYXRhIGF0dHJpYnV0ZXMgbXVzdCBiZSBpbiB0aGUgZm9ybWF0IGBkYXRhLXRyaWdnZXItW25hbWVdLVtwYXJhbWV0ZXJdYCBmb3IgbXVsdGlwbGVcbiAgICAgKiB0cmlnZ2Vycywgb3IgYGRhdGEtdHJpZ2dlci1bcGFyYW1ldGVyXWAgZm9yIHNpbmdsZSB0cmlnZ2Vycy5cbiAgICAgKlxuICAgICAqIFN1cHBvcnRlZCBwYXJhbWV0ZXJzIGFyZTpcbiAgICAgKiAgLSBgY29uZGl0aW9uYCBvciBgd2hlcmVgOiBUaGUgY29uZGl0aW9uIHRoYXQgbXVzdCBiZSBtZXQgZm9yIHRoZSB0cmlnZ2VyIHRvIGZpcmUuXG4gICAgICogIC0gYGFjdGlvbmAgb3IgYGRvYDogVGhlIGFjdGlvbiB0byBwZXJmb3JtIHdoZW4gdGhlIHRyaWdnZXIgZmlyZXMuXG4gICAgICogIC0gYGNsb3Nlc3QtcGFyZW50YCBvciBgcGFyZW50YDogVGhlIHBhcmVudCBlbGVtZW50IHdpdGggd2hpY2ggdG8gbGltaXQgdGhlIHRyaWdnZXIgc2NvcGUuXG4gICAgICogIC0gYHByaW9yaXR5YDogVGhlIHByaW9yaXR5IGluIHdoaWNoIHRvIGNvbnNpZGVyIHRoZSB0cmlnZ2VyLlxuICAgICAqXG4gICAgICogSW50ZXJuYWxseSwgdGhlIHRyaWdnZXIgbWFwIHVzZXMgdGhlIGB0cmlnZ2VyYCBwYXJhbWV0ZXIgdG8gc3RvcmUgdGhlIHRyaWdnZXIgc2VsZWN0b3IuXG4gICAgICovXG4gICAgcGFyc2VUcmlnZ2VycygpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhc2V0IH0gPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIHRoaXMudHJpZ2dlcnMuY2xlYXIoKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhc2V0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICgvLVtBLVpdLy50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBjb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLXN0eWxlIGZvciBkYXRhIGF0dHJpYnV0ZTogJHtrZXl9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRhc2hTdHlsZSA9IGtleS5yZXBsYWNlKC8oW0EtWl0pL2csIChtYXRjaCkgPT4gYC0ke21hdGNoLnRvTG93ZXJDYXNlKCl9YCk7XG5cbiAgICAgICAgICAgIGlmIChkYXNoU3R5bGUgIT09ICd0cmlnZ2VyJyAmJiAhZGFzaFN0eWxlLnN0YXJ0c1dpdGgoJ3RyaWdnZXItJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRyaWdnZXJQYXJ0cyA9IC8oW2EtejAtOVxcLS46X10rPykoPzooPzotKShjbG9zZXN0LXBhcmVudHxjb25kaXRpb258d2hlbnxhY3Rpb258cGFyZW50fHByaW9yaXR5fGRvKSk/JC9pLmV4ZWMoXG4gICAgICAgICAgICAgICAgZGFzaFN0eWxlLnJlcGxhY2UoJ3RyaWdnZXItJywgJycpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgdHJpZ2dlck5hbWUgPSBudWxsO1xuICAgICAgICAgICAgbGV0IHRyaWdnZXJUeXBlID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIFsndHJpZ2dlcicsICdjb25kaXRpb24nLCAnYWN0aW9uJywgJ3BhcmVudCcsICd3aGVuJywgJ2Nsb3Nlc3QnXS5pbmRleE9mKHRyaWdnZXJQYXJ0c1sxXSkgIT09IC0xXG4gICAgICAgICAgICAgICAgJiYgKHRyaWdnZXJQYXJ0c1sxXSAhPT0gJ2Nsb3Nlc3QnIHx8ICh0cmlnZ2VyUGFydHNbMV0gPT09ICdjbG9zZXN0JyAmJiB0cmlnZ2VyUGFydHNbMl0gPT09ICdwYXJlbnQnKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgb3JpZ2luYWwgdHJpZ2dlciBmb3JtYXRcbiAgICAgICAgICAgICAgICB0cmlnZ2VyTmFtZSA9ICdfX29yaWdpbmFsJztcbiAgICAgICAgICAgICAgICB0cmlnZ2VyVHlwZSA9ICh0cmlnZ2VyUGFydHNbMV0gPT09ICdjbG9zZXN0JykgPyAncGFyZW50JyA6IHRyaWdnZXJQYXJ0c1sxXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgdHJpZ2dlclBhcnRzWzJdID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB8fCBbJ2Nsb3Nlc3QtcGFyZW50JywgJ2NvbmRpdGlvbicsICd3aGVuJywgJ2FjdGlvbicsICdwYXJlbnQnLCAncHJpb3JpdHknLCAnZG8nXS5pbmRleE9mKHRyaWdnZXJQYXJ0c1syXSkgIT09IC0xXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBQYXJzZSBtdWx0aS10cmlnZ2VyIGZvcm1hdFxuICAgICAgICAgICAgICAgIFssIHRyaWdnZXJOYW1lXSA9IHRyaWdnZXJQYXJ0cztcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRyaWdnZXJQYXJ0c1syXSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjbG9zZXN0LXBhcmVudCc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BhcmVudCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyVHlwZSA9ICdwYXJlbnQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvbmRpdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3doZW4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlclR5cGUgPSAnY29uZGl0aW9uJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdhY3Rpb24nOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkbyc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyVHlwZSA9ICdhY3Rpb24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ByaW9yaXR5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJUeXBlID0gJ3ByaW9yaXR5JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlclR5cGUgPSAndHJpZ2dlcic7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy50cmlnZ2Vycy5oYXModHJpZ2dlck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2Vycy5zZXQodHJpZ2dlck5hbWUsIG5ldyBNYXAoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJzLmdldCh0cmlnZ2VyTmFtZSkuc2V0KHRyaWdnZXJUeXBlLCBkYXRhc2V0W2tleV0pO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgdHJpZ2dlciBkYXRhIGF0dHJpYnV0ZSBhZnRlciBwYXJzaW5nXG4gICAgICAgICAgICBkZWxldGUgZGF0YXNldFtrZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBWYWxpZGF0ZSB0cmlnZ2VycywgYW5kIHJlbW92ZSB0aG9zZSB0aGF0IGRvIG5vdCBoYXZlIGF0IGxlYXN0IGEgdHJpZ2dlciBzZWxlY3RvciwgYVxuICAgICAgICAvLyBjb25kaXRpb24gYW5kIGFuIGFjdGlvbiwgb3IgYXJlIHVzaW5nIGludmFsaWQgY29uZGl0aW9ucyBvciBhY3Rpb25zXG4gICAgICAgIHRoaXMudHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlciwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmdldFNlbGVjdGFibGVFbGVtZW50cyh0cmlnZ2VyKTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICF0cmlnZ2VyLmhhcygndHJpZ2dlcicpXG4gICAgICAgICAgICAgICAgfHwgIXRyaWdnZXIuaGFzKCdjb25kaXRpb24nKVxuICAgICAgICAgICAgICAgIHx8ICF0cmlnZ2VyLmhhcygnYWN0aW9uJylcbiAgICAgICAgICAgICAgICB8fCBlbGVtZW50cy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICB8fCAhdGhpcy5oYXNWYWxpZENvbmRpdGlvbnModHJpZ2dlcilcbiAgICAgICAgICAgICAgICB8fCAhdGhpcy5oYXNWYWxpZEFjdGlvbnModHJpZ2dlcilcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcnMuZGVsZXRlKG5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyLnNldCgnZWxlbWVudHMnLCBlbGVtZW50cyk7XG4gICAgICAgICAgICAgICAgaWYgKCF0cmlnZ2VyLmhhcygncHJpb3JpdHknKSkge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyLnNldCgncHJpb3JpdHknLCAxMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgY29tbWFuZCBnaXZlbiBhcyBlaXRoZXIgYSBjb25kaXRpb24gb3IgYW4gYWN0aW9uLlxuICAgICAqXG4gICAgICogQ29tbWFuZHMgYXJlIGZvcm1hdHRlZCBhczogbmFtZTpwYXJhbWV0ZXIxLHBhcmFtZXRlcjIscGFyYW1ldGVyMywgYWx0aG91Z2ggd2UgYWxzbyBzdXBwb3J0XG4gICAgICogdGhlIG9sZCBmb3JtYXQgb2YgdmFsdWVbcGFyYW1ldGVyMSxwYXJhbWV0ZXIyLHBhcmFtZXRlcjNdIGZvciB0aGUgYHZhbHVlYCBjb21tYW5kIG9ubHkuXG4gICAgICpcbiAgICAgKiBJZiBhIHBhcmFtZXRlciByZXF1aXJlcyBhIGNvbW1hIHdpdGhpbiwgdGhlIHBhcmFtZXRlciBzaG91bGQgYmUgd3JhcHBlZCBpbiBxdW90ZXMuXG4gICAgICpcbiAgICAgKiBNdWx0aXBsZSBjb21tYW5kcyBjYW4gYmUgc2VwYXJhdGVkIGJ5IGEgcGlwZSBjaGFyYWN0ZXIgYHxgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbW1hbmRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWxsb3dNdWx0aXBsZVxuICAgICAqIEByZXR1cm5zIHt7bmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBzdHJpbmdbXX1bXX1cbiAgICAgKi9cbiAgICBwYXJzZUNvbW1hbmQoY29tbWFuZCwgYWxsb3dNdWx0aXBsZSA9IHRydWUpIHtcbiAgICAgICAgLy8gU3VwcG9ydCBvbGQtZm9ybWF0IHZhbHVlIGNvbW1hbmQgKHZhbHVlW2ZvbyxiYXJdKVxuICAgICAgICBpZiAoY29tbWFuZC5zdGFydHNXaXRoKCd2YWx1ZScpICYmIGNvbW1hbmQuaW5jbHVkZXMoJ1snKSkge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBjb21tYW5kLm1hdGNoKC9bXltcXF1dKyg/PV0pL2cpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gW107XG5cbiAgICAgICAgICAgIC8vIFNwbGl0IHZhbHVlcyB3aXRoIGNvbW1hc1xuICAgICAgICAgICAgbWF0Y2guZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlLmluY2x1ZGVzKCcsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUucmVwbGFjZSgvXlsnXCJdfFsnXCJdJC9nLCAnJykudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0VmFsdWVzID0gdmFsdWUucmVwbGFjZSgvKCcuKj8oPzwhXFxcXCknKXwoXCIuKj8oPzwhXFxcXClcIikvZywgKHF1b3RlZCkgPT4gcXVvdGVkLnJlcGxhY2UoLywvZywgJ3x8fCcpKVxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAgICAgICAubWFwKChzcGxpdFZhbHVlKSA9PiBzcGxpdFZhbHVlLnJlcGxhY2UoL1xcfFxcfFxcfC9nLCAnLCcpLnJlcGxhY2UoL15bJ1wiXXxbJ1wiXSQvZywgJycpLnRyaW0oKSk7XG5cbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCguLi5zcGxpdFZhbHVlcyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzOiB2YWx1ZXMsXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhhbmRsZSBtdWx0aXBsZSBjb21tYW5kc1xuICAgICAgICBpZiAoY29tbWFuZC5pbmNsdWRlcygnfCcpICYmIGFsbG93TXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0Q29tbWFuZHMgPSBjb21tYW5kLnJlcGxhY2UoLygnLio/KD88IVxcXFwpJyl8KFwiLio/KD88IVxcXFwpXCIpL2csIChxdW90ZWQpID0+IHF1b3RlZC5yZXBsYWNlKC9cXHwvZywgJ3x8fCcpKVxuICAgICAgICAgICAgICAgIC5zcGxpdCgnfCcpXG4gICAgICAgICAgICAgICAgLm1hcCgoc3BsaXRWYWx1ZSkgPT4gc3BsaXRWYWx1ZS5yZXBsYWNlKC9cXHxcXHxcXHwvZywgJ3wnKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmRzID0gW107XG4gICAgICAgICAgICBzcGxpdENvbW1hbmRzLmZvckVhY2goKHNwbGl0Q29tbWFuZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbW1hbmRzLnB1c2goLi4udGhpcy5wYXJzZUNvbW1hbmQoc3BsaXRDb21tYW5kLCBmYWxzZSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjb21tYW5kcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29tbWFuZC5pbmNsdWRlcygnOicpKSB7XG4gICAgICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgICAgICBuYW1lOiBjb21tYW5kLFxuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICAgICAgfV07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBbbmFtZSwgcGFyYW1ldGVyc10gPSBjb21tYW5kLnNwbGl0KCc6JywgMik7XG5cbiAgICAgICAgaWYgKCFwYXJhbWV0ZXJzLmluY2x1ZGVzKCcsJykpIHtcbiAgICAgICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyczogW3BhcmFtZXRlcnNdLFxuICAgICAgICAgICAgfV07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzcGxpdFZhbHVlcyA9IHBhcmFtZXRlcnMucmVwbGFjZSgvKCcuKj8oPzwhXFxcXCknKXwoXCIuKj8oPzwhXFxcXClcIikvZywgKHF1b3RlZCkgPT4gcXVvdGVkLnJlcGxhY2UoLywvZywgJ3x8fCcpKVxuICAgICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAgIC5tYXAoKHNwbGl0VmFsdWUpID0+IHNwbGl0VmFsdWUucmVwbGFjZSgvXFx8XFx8XFx8L2csICcsJykucmVwbGFjZSgvXlsnXCJdfFsnXCJdJC9nLCAnJykucmVwbGFjZSgvXFxcXChbJ1wiXSkvLCAnJDEnKS50cmltKCkpO1xuXG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IHNwbGl0VmFsdWVzLFxuICAgICAgICB9XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgYW55IGVsZW1lbnRzIGFyZSBhY2Nlc3NpYmxlIGJ5IHRoZSBwcm92aWRlZCB0cmlnZ2VyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtNYXA8VHJpZ2dlckVudGl0eT59IHRyaWdnZXJcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RhYmxlRWxlbWVudHModHJpZ2dlcikge1xuICAgICAgICBpZiAodHJpZ2dlci5oYXMoJ3BhcmVudCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQuY2xvc2VzdCh0cmlnZ2VyLmdldCgncGFyZW50JykpLnF1ZXJ5U2VsZWN0b3JBbGwodHJpZ2dlci5nZXQoJ3RyaWdnZXInKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0cmlnZ2VyLmdldCgndHJpZ2dlcicpKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgcHJvdmlkZWQgdHJpZ2dlciBjb25kaXRpb24ocykgYXJlIHZhbGlkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUcmlnZ2VyRW50aXR5fSB0cmlnZ2VyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzVmFsaWRDb25kaXRpb25zKHRyaWdnZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VDb21tYW5kKHRyaWdnZXIuZ2V0KCdjb25kaXRpb24nKSkuZXZlcnkoKGNvbmRpdGlvbikgPT4gW1xuICAgICAgICAgICAgJ2NoZWNrZWQnLFxuICAgICAgICAgICAgJ3VuY2hlY2tlZCcsXG4gICAgICAgICAgICAnZW1wdHknLFxuICAgICAgICAgICAgJ3ZhbHVlJyxcbiAgICAgICAgICAgICdvbmVvZicsXG4gICAgICAgICAgICAnYWxsb2YnLFxuICAgICAgICAgICAgJ2ZvY3VzJyxcbiAgICAgICAgICAgICdibHVyJyxcbiAgICAgICAgICAgICdhdHRyJyxcbiAgICAgICAgICAgICdjbGFzcycsXG4gICAgICAgIF0uaW5jbHVkZXMoY29uZGl0aW9uLm5hbWUudG9Mb3dlckNhc2UoKSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIHByb3ZpZGVkIHRyaWdnZXIgYWN0aW9uKHMpIGFyZSB2YWxpZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VHJpZ2dlckVudGl0eX0gdHJpZ2dlclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGhhc1ZhbGlkQWN0aW9ucyh0cmlnZ2VyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlQ29tbWFuZCh0cmlnZ2VyLmdldCgnYWN0aW9uJykpLmV2ZXJ5KChhY3Rpb24pID0+IFtcbiAgICAgICAgICAgICdzaG93JyxcbiAgICAgICAgICAgICdoaWRlJyxcbiAgICAgICAgICAgICdlbmFibGUnLFxuICAgICAgICAgICAgJ2Rpc2FibGUnLFxuICAgICAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgICAgICd2YWx1ZScsXG4gICAgICAgICAgICAndmFsdWVPZicsXG4gICAgICAgICAgICAnY2hlY2snLFxuICAgICAgICAgICAgJ3VuY2hlY2snLFxuICAgICAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgICAgICdjbGFzc09mJyxcbiAgICAgICAgICAgICdhdHRyJyxcbiAgICAgICAgICAgICdhdHRyT2YnLFxuICAgICAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgICAgICdzdHlsZU9mJyxcbiAgICAgICAgXS5pbmNsdWRlcyhhY3Rpb24ubmFtZS50b0xvd2VyQ2FzZSgpKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHRyaWdnZXIgZXZlbnRzIG9uIHRyaWdnZXIgYW5kIHRhcmdldCBlbGVtZW50cy5cbiAgICAgKi9cbiAgICBjcmVhdGVUcmlnZ2VyRXZlbnRzKCkge1xuICAgICAgICB0aGlzLnRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcbiAgICAgICAgICAgIC8vIENvbGxlY3QgY29uZGl0aW9ucyBhbmQgY2hlY2sgdGhlbSBhcyBhIGdyb3VwLlxuICAgICAgICAgICAgdHJpZ2dlci5zZXQoJ2NvbmRpdGlvbkNhbGxiYWNrcycsIFtdKTtcbiAgICAgICAgICAgIHRyaWdnZXIuc2V0KCdlbGVtZW50RXZlbnRzJywgbmV3IE1hcCgpKTtcblxuICAgICAgICAgICAgdGhpcy5wYXJzZUNvbW1hbmQodHJpZ2dlci5nZXQoJ2NvbmRpdGlvbicpKS5mb3JFYWNoKChjb25kaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvbmRpdGlvbi5uYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndmFsdWUnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdvbmVvZic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyLmdldCgnY29uZGl0aW9uQ2FsbGJhY2tzJykucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVZhbHVlQ29uZGl0aW9uKHRyaWdnZXIsIGZhbHNlLCAuLi5jb25kaXRpb24ucGFyYW1ldGVycyksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FsbG9mJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXIuZ2V0KCdjb25kaXRpb25DYWxsYmFja3MnKS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVmFsdWVDb25kaXRpb24odHJpZ2dlciwgdHJ1ZSwgLi4uY29uZGl0aW9uLnBhcmFtZXRlcnMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbXB0eSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyLmdldCgnY29uZGl0aW9uQ2FsbGJhY2tzJykucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVtcHR5Q29uZGl0aW9uKHRyaWdnZXIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2VkJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndW5jaGVja2VkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXIuZ2V0KCdjb25kaXRpb25DYWxsYmFja3MnKS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQ2hlY2tlZENvbmRpdGlvbih0cmlnZ2VyLCAoY29uZGl0aW9uLm5hbWUgPT09ICdjaGVja2VkJyksIC4uLmNvbmRpdGlvbi5wYXJhbWV0ZXJzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBldmVudCB0byBhbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogVGhpcyByZWdpc3RlcnMgdGhlIGV2ZW50IGluIHRoZSBgZWxlbWVudEV2ZW50c2AgbWFwIGZvciBsYXRlciB1c2FnZSBhbmQgcmVtb3ZhbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge1RyaWdnZXJFbnRpdHl9IHRyaWdnZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAgICovXG4gICAgYWRkRXZlbnQoZWxlbWVudCwgdHJpZ2dlciwgZXZlbnROYW1lKSB7XG4gICAgICAgIGlmICghdHJpZ2dlci5nZXQoJ2VsZW1lbnRFdmVudHMnKS5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRyaWdnZXIuZ2V0KCdlbGVtZW50RXZlbnRzJykuc2V0KGVsZW1lbnQsIG5ldyBTZXQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0cmlnZ2VyLmdldCgnZWxlbWVudEV2ZW50cycpLmdldChlbGVtZW50KS5hZGQoZXZlbnROYW1lKSkge1xuICAgICAgICAgICAgdHJpZ2dlci5nZXQoJ2VsZW1lbnRFdmVudHMnKS5nZXQoZWxlbWVudCkuYWRkKGV2ZW50TmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgRE9NIGV2ZW50IGxpc3RlbmVycyBmb3IgdGFyZ2V0ZWQgZWxlbWVudHMgb2YgYWxsIHRyaWdnZXJzLlxuICAgICAqXG4gICAgICogQWRkcyBhIGNvbm5lY3RvciB0byB0aGUgZWxlbWVudCBmb3IgdGhlIGV2ZW50cywgc28gdGhhdCB3ZSBtYXkgZW5hYmxlIHByaW9yaXRpc2F0aW9uIGFuZFxuICAgICAqIGNvbnRyb2wgb3ZlciB0aGUgZmlyaW5nIG9mIHRoZSBldmVudHMsIGFuZCB0aGVuIHJlZ2lzdGVycyBET00gZXZlbnQgbGlzdGVuZXJzIGZvciB0aGVcbiAgICAgKiBlbGVtZW50cy5cbiAgICAgKi9cbiAgICByZWdpc3RlckV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCBjb25uZWN0b3JzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIHRoaXMudHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xuICAgICAgICAgICAgdHJpZ2dlci5nZXQoJ2VsZW1lbnRFdmVudHMnKS5mb3JFYWNoKChldmVudHMsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZXZlbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5zZXQoZWxlbWVudCwgbmV3IFNldCgpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudHMuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29ubmVjdG9ycy5oYXMoeyBlbGVtZW50LCBldmVudE5hbWUgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RvcnMuYWRkKHsgZWxlbWVudCwgZXZlbnROYW1lIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IE51bWJlcih0cmlnZ2VyLmdldCgncHJpb3JpdHknKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUFjdGlvbnMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXIuZ2V0KCdjb25kaXRpb25DYWxsYmFja3MnKS5ldmVyeSgoY29uZGl0aW9uKSA9PiBjb25kaXRpb24oKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHMuZ2V0KGVsZW1lbnQpLmFkZChldmVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29ubmVjdG9ycy5mb3JFYWNoKCh7IGVsZW1lbnQsIGV2ZW50TmFtZSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29ubmVjdG9ycy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RvcnMuc2V0KGVsZW1lbnQsIG5ldyBNYXAoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5jb25uZWN0b3JzLmdldChlbGVtZW50KS5oYXMoZXZlbnROYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdG9ycy5nZXQoZWxlbWVudCkuc2V0KGV2ZW50TmFtZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudHMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5nZXQoZWxlbWVudCkuZm9yRWFjaCgoZWxlbWVudEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudEV2ZW50LmV2ZW50TmFtZSA9PT0gZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzLnB1c2goZWxlbWVudEV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgoZWxlbWVudEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEV2ZW50LmV2ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXMuY29ubmVjdG9ycy5nZXQoZWxlbWVudCkuZ2V0KGV2ZW50TmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdHJpZ2dlciB0aGF0IGZpcmVzIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSB0YXJnZXQgZWxlbWVudChzKSBtYXRjaGVzIG9uZSBvZiB0aGVcbiAgICAgKiBwcm92aWRlZCB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1RyaWdnZXJFbnRpdHl9IHRyaWdnZXJcbiAgICAgKiBAcGFyYW0gIHsuLi5zdHJpbmd9IHZhbHVlc1xuICAgICAqL1xuICAgIGNyZWF0ZVZhbHVlQ29uZGl0aW9uKHRyaWdnZXIsIGFsbCwgLi4udmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvcnRlZEVsZW1lbnRzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIHRyaWdnZXIuZ2V0KCdlbGVtZW50cycpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoJ2lucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1maWxlXSwgaW5wdXRbdHlwZT1pbWFnZV0sIGlucHV0W3R5cGU9cmVzZXRdLCBpbnB1dFt0eXBlPXN1Ym1pdF0nKSkge1xuICAgICAgICAgICAgICAgIC8vIEJ1dHRvbnMgYW5kIGZpbGUgaW5wdXRzIGFyZSB1bnN1cHBvcnRlZFxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQubWF0Y2hlcygnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKSkge1xuICAgICAgICAgICAgICAgIHN1cHBvcnRlZEVsZW1lbnRzLmFkZChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3VwcG9ydGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubWF0Y2hlcygnaW5wdXRbdHlwZT1jaGVja2JveF0sIGlucHV0W3R5cGU9cmFkaW9dJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50KGVsZW1lbnQsIHRyaWdnZXIsICdjbGljaycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50KGVsZW1lbnQsIHRyaWdnZXIsICdpbnB1dCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudFZhbHVlcyA9IG5ldyBTZXQoKTtcblxuICAgICAgICAgICAgc3VwcG9ydGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoJ2lucHV0W3R5cGU9Y2hlY2tib3hdLCBpbnB1dFt0eXBlPXJhZGlvXScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRWYWx1ZXMuYWRkKGVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50VmFsdWVzLmFkZChlbGVtZW50LnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoYWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlcy5ldmVyeSgodmFsdWUpID0+IGVsZW1lbnRWYWx1ZXMuaGFzKHZhbHVlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMuc29tZSgodmFsdWUpID0+IGVsZW1lbnRWYWx1ZXMuaGFzKHZhbHVlKSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHRyaWdnZXIgdGhhdCBmaXJlcyB3aGVuIHRoZXJlIGlzIG5vIHZhbHVlIHdpdGhpbiB0aGUgdGFyZ2V0IGVsZW1lbnQocykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1RyaWdnZXJFbnRpdHl9IHRyaWdnZXJcbiAgICAgKi9cbiAgICBjcmVhdGVFbXB0eUNvbmRpdGlvbih0cmlnZ2VyKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvcnRlZEVsZW1lbnRzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIHRyaWdnZXIuZ2V0KCdlbGVtZW50cycpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoJ2lucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1pbWFnZV0sIGlucHV0W3R5cGU9cmVzZXRdLCBpbnB1dFt0eXBlPXN1Ym1pdF0nKSkge1xuICAgICAgICAgICAgICAgIC8vIEJ1dHRvbnMgYW5kIGZpbGUgaW5wdXRzIGFyZSB1bnN1cHBvcnRlZFxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQubWF0Y2hlcygnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKSkge1xuICAgICAgICAgICAgICAgIHN1cHBvcnRlZEVsZW1lbnRzLmFkZChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3VwcG9ydGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubWF0Y2hlcygnaW5wdXRbdHlwZT1jaGVja2JveF0sIGlucHV0W3R5cGU9cmFkaW9dJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50KGVsZW1lbnQsIHRyaWdnZXIsICdjbGljaycpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudChlbGVtZW50LCB0cmlnZ2VyLCAnaW5wdXQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRWYWx1ZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgICAgIHN1cHBvcnRlZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKCdpbnB1dFt0eXBlPWNoZWNrYm94XSwgaW5wdXRbdHlwZT1yYWRpb10nKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VmFsdWVzLmFkZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VmFsdWVzLmFkZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRWYWx1ZXMuc2l6ZSA9PT0gMDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdHJpZ2dlciB0aGF0IGZpcmVzIHdoZW4gYSB0YXJnZXQgZWxlbWVudChzKSBpcyBjaGVja2VkL3VuY2hlY2tlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VHJpZ2dlckVudGl0eX0gdHJpZ2dlclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gY2hlY2tlZCBJZiB0aGUgZWxlbWVudCBzaG91bGQgYmUgY2hlY2tlZCBvciB1bmNoZWNrZWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfHVuZGVmaW5lZH0gYXRMZWFzdCBUaGUgbWluaW11bSBudW1iZXIgb2YgZWxlbWVudHMgdGhhdCBtdXN0IGJlIGNoZWNrZWQuXG4gICAgICogIERlZmF1bHRzIHRvIDEgaWYgdW5kZWZpbmVkLiBJZiBzcGVjaWZpZWQgYXMgYGFsbGAsIGFsbCBlbGVtZW50cyBtdXN0IGJlIGNoZWNrZWQuXG4gICAgICovXG4gICAgY3JlYXRlQ2hlY2tlZENvbmRpdGlvbih0cmlnZ2VyLCBjaGVja2VkLCBhdExlYXN0ID0gdW5kZWZpbmVkLCBhdE1vc3QgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9ydGVkRWxlbWVudHMgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgdHJpZ2dlci5nZXQoJ2VsZW1lbnRzJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgLy8gT25seSBzdXBwb3J0cyBjaGVja2JveGVzIGFuZCByYWRpbyBidXR0b25zXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKCdpbnB1dFt0eXBlPXJhZGlvXSwgaW5wdXRbdHlwZT1jaGVja2JveF0nKSkge1xuICAgICAgICAgICAgICAgIHN1cHBvcnRlZEVsZW1lbnRzLmFkZChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3VwcG9ydGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudChlbGVtZW50LCB0cmlnZ2VyLCAnY2xpY2snKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRWYWx1ZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgICAgIHN1cHBvcnRlZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCA9PT0gZWxlbWVudC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRWYWx1ZXMuYWRkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoYXRMZWFzdCA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudFZhbHVlcy5zaXplID09PSBzdXBwb3J0ZWRFbGVtZW50cy5zaXplO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhdExlYXN0Q291bnQgPSAoYXRMZWFzdCAhPT0gdW5kZWZpbmVkICYmIE1hdGguZmxvb3IoYXRMZWFzdCkgPiAwKVxuICAgICAgICAgICAgICAgID8gTWF0aC5mbG9vcihhdExlYXN0KVxuICAgICAgICAgICAgICAgIDogMTtcbiAgICAgICAgICAgIGNvbnN0IGF0TW9zdENvdW50ID0gKGF0TGVhc3QgIT09IHVuZGVmaW5lZCAmJiBNYXRoLmZsb29yKGF0TW9zdCkgPiAxKVxuICAgICAgICAgICAgICAgID8gTWF0aC5mbG9vcihhdE1vc3QpXG4gICAgICAgICAgICAgICAgOiBzdXBwb3J0ZWRFbGVtZW50cy5zaXplO1xuXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFZhbHVlcy5zaXplID49IGF0TGVhc3RDb3VudCAmJiBlbGVtZW50VmFsdWVzLnNpemUgPD0gYXRNb3N0Q291bnQ7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFudWFsbHkgcnVucyBhbGwgcmVnaXN0ZXJlZCB0cmlnZ2Vycy5cbiAgICAgKlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gdXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgdHJpZ2dlcnMuXG4gICAgICovXG4gICAgcnVuRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3RvcnMuZm9yRWFjaCgoZWxlbWVudENvbm5lY3RvcnMpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDb25uZWN0b3JzLmZvckVhY2goKGNvbm5lY3RvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbm5lY3RvcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgcmVnaXN0ZXJlZCBldmVudHMuXG4gICAgICpcbiAgICAgKiBUaGlzICB3aWxsIGRpc2FibGUgYWxsIHRyaWdnZXJzIGFuZCB0aGVpciBldmVudCBsaXN0ZW5lcnMgb24gdGhlIHRhcmdldCBlbGVtZW50cy5cbiAgICAgKi9cbiAgICByZXNldEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0b3JzLmZvckVhY2goKGVsZW1lbnRDb25uZWN0b3JzLCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Q29ubmVjdG9ycy5mb3JFYWNoKChjb25uZWN0b3IsIGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjb25uZWN0b3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29ubmVjdG9ycy5jbGVhcigpO1xuICAgICAgICB0aGlzLmV2ZW50cy5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIGFjdGlvbnMgYmFzZWQgb24gdGhlIHRyaWdnZXIgY29uZGl0aW9uLlxuICAgICAqXG4gICAgICogQWN0aW9ucyBzaG91bGQgYmUgYmluYXJ5LCBhbmQgc2hvdyBvbmUgc3RhdGUgd2hlbiB0aGUgY29uZGl0aW9uIGlzIG1ldCwgYW5kIGFub3RoZXIgd2hlbiBpdFxuICAgICAqIGlzIG5vdC4gVGhlIHNlY29uZCBwYXJhbWV0ZXIgaXMgdXNlZCB0byBkZXRlcm1pbmUgaWYgdGhlIGNvbmRpdGlvbnMgb2YgdGhlIHRyaWdnZXIgaGF2ZSBiZWVuXG4gICAgICogbWV0LiBJZiBhIHRyaWdnZXIgaGFzIG11bHRpcGxlIGNvbmRpdGlvbnMsIEFMTCBjb25kaXRpb25zIG11c3QgYmUgbWV0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUcmlnZ2VyRW50aXR5fSB0cmlnZ2VyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjb25kaXRpb25NZXRcbiAgICAgKi9cbiAgICBleGVjdXRlQWN0aW9ucyh0cmlnZ2VyLCBjb25kaXRpb25NZXQpIHtcbiAgICAgICAgdGhpcy5wYXJzZUNvbW1hbmQodHJpZ2dlci5nZXQoJ2FjdGlvbicpKS5mb3JFYWNoKChhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzaG93JzpcbiAgICAgICAgICAgICAgICBjYXNlICdoaWRlJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25TaG93KFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIChhY3Rpb24ucGFyYW1ldGVyc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IEFycmF5LmZyb20odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYWN0aW9uLnBhcmFtZXRlcnNbMF0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW3RoaXMuZWxlbWVudF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAoYWN0aW9uLm5hbWUgPT09ICdzaG93JykgPyBjb25kaXRpb25NZXQgOiAhY29uZGl0aW9uTWV0LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdlbmFibGUnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rpc2FibGUnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkVuYWJsZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAoYWN0aW9uLnBhcmFtZXRlcnNbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGFjdGlvbi5wYXJhbWV0ZXJzWzBdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFt0aGlzLmVsZW1lbnRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGlvbi5uYW1lID09PSAnZW5hYmxlJykgPyBjb25kaXRpb25NZXQgOiAhY29uZGl0aW9uTWV0LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdlbXB0eSc6XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb25NZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uVmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25NZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGlvbi5wYXJhbWV0ZXJzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IEFycmF5LmZyb20odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYWN0aW9uLnBhcmFtZXRlcnNbMF0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFt0aGlzLmVsZW1lbnRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd2YWx1ZSc6XG4gICAgICAgICAgICAgICAgY2FzZSAndmFsdWVPZic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uVmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uTWV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGlvbi5uYW1lID09PSAndmFsdWVPZicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGFjdGlvbi5wYXJhbWV0ZXJzWzBdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFt0aGlzLmVsZW1lbnRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKGFjdGlvbi5wYXJhbWV0ZXJzLmxlbmd0aCA+IDAgJiYgYWN0aW9uLm5hbWUgPT09ICd2YWx1ZU9mJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFjdGlvbi5wYXJhbWV0ZXJzLnNsaWNlKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhY3Rpb24ucGFyYW1ldGVycyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2NsYXNzT2YnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkNsYXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbk1ldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIChhY3Rpb24ubmFtZSA9PT0gJ2NsYXNzT2YnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChhY3Rpb24ucGFyYW1ldGVyc1swXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbdGhpcy5lbGVtZW50XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLihhY3Rpb24ubmFtZSA9PT0gJ2NsYXNzT2YnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYWN0aW9uLnBhcmFtZXRlcnMuc2xpY2UoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFjdGlvbi5wYXJhbWV0ZXJzLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIG9yIGhpZGVzIGEgdHJpZ2dlciBlbGVtZW50LlxuICAgICAqXG4gICAgICogVGhpcyBhY3Rpb24gd2lsbCB0b2dnbGUgdGhlIGBoaWRlYCBjbGFzcyBvbiB0aGUgZWxlbWVudCwgYW5kIHNldCB0aGUgYGRpc3BsYXlgIHN0eWxlIHRvXG4gICAgICogYG5vbmVgIHdoZW4gaGlkZGVuLCBhbmQgdGhlIG9yaWdpbmFsIGRpc3BsYXkgdmFsdWUgd2hlbiBzaG93bi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VHJpZ2dlckVudGl0eX0gdHJpZ2dlclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnRbXX0gZWxlbWVudHNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dcbiAgICAgKi9cbiAgICBhY3Rpb25TaG93KHRyaWdnZXIsIGVsZW1lbnRzLCBzaG93KSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChzaG93ICYmIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQuZGF0YXNldC5vcmlnaW5hbERpc3BsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBlbGVtZW50LmRhdGFzZXQub3JpZ2luYWxEaXNwbGF5O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRlbGV0ZSBlbGVtZW50LmRhdGFzZXQub3JpZ2luYWxEaXNwbGF5O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hZnRlckFjdGlvbih0cmlnZ2VyLCBlbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNob3cgJiYgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5vcmlnaW5hbERpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hZnRlckFjdGlvbih0cmlnZ2VyLCBlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5hYmxlcyBvciBkaXNhYmxlcyBhIHRyaWdnZXIgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFRoaXMgYWN0aW9uIHdpbGwgdG9nZ2xlIHRoZSBgY29udHJvbC1kaXNhYmxlZGAgY2xhc3Mgb24gdGhlIGVsZW1lbnQsIGFuZCBzZXQgdGhlIGBkaXNhYmxlZGBcbiAgICAgKiBwcm9wZXJ0eSB0byBgdHJ1ZWAgd2hlbiBkaXNhYmxlZCwgYW5kIGBmYWxzZWAgd2hlbiBlbmFibGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUcmlnZ2VyRW50aXR5fSB0cmlnZ2VyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfSBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlXG4gICAgICovXG4gICAgYWN0aW9uRW5hYmxlKHRyaWdnZXIsIGVsZW1lbnRzLCBlbmFibGUpIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3RbKGVuYWJsZSkgPyAncmVtb3ZlJyA6ICdhZGQnXSgnY29udHJvbC1kaXNhYmxlZCcpO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5kaXNhYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5kaXNhYmxlZCA9ICFlbmFibGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJBY3Rpb24odHJpZ2dlciwgZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIGVpdGhlciB0aGUgdHJpZ2dlciBlbGVtZW50IG9yIGEgY2hpbGQgZWxlbWVudChzKSB3aXRoaW4uXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGEgb25lLXdheSBhY3Rpb24gaWYgdGhlIHVubWV0IHZhbHVlIGlzIG5vdCBkZWZpbmVkLlxuICAgICAqL1xuICAgIGFjdGlvblZhbHVlKHRyaWdnZXIsIGNvbmRpdGlvbk1ldCwgZWxlbWVudHMsIHZhbHVlLCB1bm1ldFZhbHVlID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghY29uZGl0aW9uTWV0ICYmIHVubWV0VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSAoY29uZGl0aW9uTWV0KSA/IHZhbHVlIDogdW5tZXRWYWx1ZTtcblxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKCdpbnB1dFt0eXBlPWNoZWNrYm94XSwgaW5wdXRbdHlwZT1yYWRpb10nKSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IChlbGVtZW50LnZhbHVlID09PSBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IG5ld1ZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLmFmdGVyQWN0aW9uKHRyaWdnZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIG9yIHJlbW92ZXMgdGhlIGNsYXNzIGZyb20gdGhlIHRyaWdnZXIgZWxlbWVudCBvciBhIGNoaWxkIGVsZW1lbnQocykgd2l0aGluLlxuICAgICAqXG4gICAgICogVGhpcyB3aWxsIHNpbXBseSByZW1vdmUgdGhlIGNsYXNzIGlmIHRoZSB1bm1ldCBjbGFzcyBpcyBub3QgZGVmaW5lZC4gT3RoZXJ3aXNlLCB0aGUgY2xhc3Nlc1xuICAgICAqIHdpbGwgYmUgdG9nZ2xlZC5cbiAgICAgKi9cbiAgICBhY3Rpb25DbGFzcyh0cmlnZ2VyLCBjb25kaXRpb25NZXQsIGVsZW1lbnRzLCBjc3NDbGFzcywgdW5tZXRDc3NDbGFzcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29uZGl0aW9uTWV0KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICAgICAgICAgICAgICBpZiAodW5tZXRDc3NDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodW5tZXRDc3NDbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3MpO1xuICAgICAgICAgICAgICAgIGlmICh1bm1ldENzc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh1bm1ldENzc0NsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJBY3Rpb24odHJpZ2dlcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFmdGVyQWN0aW9uKHRyaWdnZXIsIGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZGVidWcoJ1RyaWdnZXIgZmlyZWQnLCBlbGVtZW50LCB0cmlnZ2VyKTtcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ3RyaWdnZXIuZmlyZWQnLCBlbGVtZW50LCB0cmlnZ2VyKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEludGVybmFsIHByb3h5IGZvciBTbm93Ym9hcmQuXG4gKlxuICogVGhpcyBoYW5kbGVyIHdyYXBzIHRoZSBTbm93Ym9hcmQgaW5zdGFuY2UgdGhhdCBpcyBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yIG9mIHBsdWdpbiBpbnN0YW5jZXMuXG4gKiBJdCBwcmV2ZW50cyBhY2Nlc3MgdG8gdGhlIGZvbGxvd2luZyBtZXRob2RzOlxuICogIC0gYGF0dGFjaEFic3RyYWN0c2A6IE5vIG5lZWQgdG8gYXR0YWNoIGFic3RyYWN0cyBhZ2Fpbi5cbiAqICAtIGBsb2FkVXRpbHRpZXNgOiBObyBuZWVkIHRvIGxvYWQgdXRpbGl0aWVzIGFnYWluLlxuICogIC0gYGluaXRpYWxpc2VgOiBTbm93Ym9hcmQgaXMgYWxyZWFkeSBpbml0aWFsaXNlZC5cbiAqICAtIGBpbml0aWFsaXNlU2luZ2xldG9uc2A6IFNpbmdsZXRvbnMgYXJlIGFscmVhZHkgaW5pdGlhbGlzZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wTG93ZXIgPSBwcm9wLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChbJ2F0dGFjaEFic3RyYWN0cycsICdsb2FkVXRpbGl0aWVzJywgJ2luaXRpYWxpc2UnLCAnaW5pdGlhbGlzZVNpbmdsZXRvbnMnXS5pbmNsdWRlcyhwcm9wKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGNhbm5vdCB1c2UgdGhlIFwiJHtwcm9wfVwiIFNub3dib2FyZCBtZXRob2Qgd2l0aGluIGEgcGx1Z2luLmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc1BsdWdpbihwcm9wTG93ZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICguLi5wYXJhbXMpID0+IFJlZmxlY3QuZ2V0KHRhcmdldCwgJ3BsdWdpbnMnKVtwcm9wTG93ZXJdLmdldEluc3RhbmNlKC4uLnBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XG4gICAgfSxcblxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgcHJvcExvd2VyID0gcHJvcC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBpZiAoWydhdHRhY2hBYnN0cmFjdHMnLCAnbG9hZFV0aWxpdGllcycsICdpbml0aWFsaXNlJywgJ2luaXRpYWxpc2VTaW5nbGV0b25zJ10uaW5jbHVkZXMocHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzUGx1Z2luKHByb3BMb3dlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3ApO1xuICAgIH0sXG59O1xuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcbmltcG9ydCBJbm5lclByb3h5SGFuZGxlciBmcm9tICcuL0lubmVyUHJveHlIYW5kbGVyJztcblxuLyoqXG4gKiBQbHVnaW4gbG9hZGVyIGNsYXNzLlxuICpcbiAqIFRoaXMgaXMgYSBwcm92aWRlciAoZmFjdG9yeSkgY2xhc3MgZm9yIGEgc2luZ2xlIHBsdWdpbiBhbmQgcHJvdmlkZXMgdGhlIGxpbmsgYmV0d2VlbiBTbm93Ym9hcmQgZnJhbWV3b3JrIGZ1bmN0aW9uYWxpdHlcbiAqIGFuZCB0aGUgdW5kZXJseWluZyBwbHVnaW4gaW5zdGFuY2VzLiBJdCBhbHNvIHByb3ZpZGVzIHNvbWUgYmFzaWMgbW9ja2luZyBvZiBwbHVnaW4gbWV0aG9kcyBmb3IgdGVzdGluZy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luTG9hZGVyIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEJpbmRzIHRoZSBXaW50ZXIgZnJhbWV3b3JrIHRvIHRoZSBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtTbm93Ym9hcmR9IHNub3dib2FyZFxuICAgICAqIEBwYXJhbSB7UGx1Z2luQmFzZX0gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBzbm93Ym9hcmQsIGluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc25vd2JvYXJkID0gbmV3IFByb3h5KFxuICAgICAgICAgICAgc25vd2JvYXJkLFxuICAgICAgICAgICAgSW5uZXJQcm94eUhhbmRsZXIsXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcblxuICAgICAgICAvLyBGcmVlemUgaW5zdGFuY2UgdGhhdCBoYXMgYmVlbiBpbnNlcnRlZCBpbnRvIHRoaXMgbG9hZGVyXG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5pbnN0YW5jZSk7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zaW5nbGV0b24gPSB7XG4gICAgICAgICAgICBpbml0aWFsaXNlZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIC8vIFByZXZlbnQgZnVydGhlciBleHRlbnNpb24gb2YgdGhlIHNpbmdsZXRvbiBzdGF0dXMgb2JqZWN0XG4gICAgICAgIE9iamVjdC5zZWFsKHRoaXMuc2luZ2xldG9uKTtcblxuICAgICAgICB0aGlzLm1vY2tzID0ge307XG4gICAgICAgIHRoaXMub3JpZ2luYWxGdW5jdGlvbnMgPSB7fTtcblxuICAgICAgICAvLyBGcmVlemUgbG9hZGVyIGl0c2VsZlxuICAgICAgICBPYmplY3QuZnJlZXplKFBsdWdpbkxvYWRlci5wcm90b3R5cGUpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgcGx1Z2luIGhhcyBhIHNwZWNpZmljIG1ldGhvZCBhdmFpbGFibGUuXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBjdXJyZW50IHBsdWdpbiBpcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNNZXRob2QobWV0aG9kTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAodHlwZW9mIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdID09PSAnZnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBhIHByb3RvdHlwZSBtZXRob2QgZm9yIGEgcGx1Z2luLiBUaGlzIHNob3VsZCBnZW5lcmFsbHkgYmUgdXNlZCBmb3IgXCJzdGF0aWNcIiBjYWxscy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gICAgICogQHBhcmFtIHsuLi59IGFyZ3NcbiAgICAgKiBAcmV0dXJucyB7YW55fVxuICAgICAqL1xuICAgIGNhbGxNZXRob2QoLi4ucGFyYW1ldGVycykge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXJncyA9IHBhcmFtZXRlcnM7XG4gICAgICAgIGNvbnN0IG1ldGhvZE5hbWUgPSBhcmdzLnNoaWZ0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdKGFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIGN1cnJlbnQgcGx1Z2luLlxuICAgICAqXG4gICAgICogLSBJZiB0aGlzIGlzIGEgY2FsbGJhY2sgZnVuY3Rpb24gcGx1Z2luLCB0aGUgZnVuY3Rpb24gd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKiAtIElmIHRoaXMgaXMgYSBzaW5nbGV0b24sIHRoZSBzaW5nbGUgaW5zdGFuY2Ugb2YgdGhlIHBsdWdpbiB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1BsdWdpbkJhc2V8RnVuY3Rpb259XG4gICAgICovXG4gICAgZ2V0SW5zdGFuY2UoLi4ucGFyYW1ldGVycykge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlKC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5kZXBlbmRlbmNpZXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgY29uc3QgdW5tZXQgPSB0aGlzLmdldERlcGVuZGVuY2llcygpLmZpbHRlcigoaXRlbSkgPT4gIXRoaXMuc25vd2JvYXJkLmdldFBsdWdpbk5hbWVzKCkuaW5jbHVkZXMoaXRlbSkpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCIke3RoaXMubmFtZX1cIiBwbHVnaW4gcmVxdWlyZXMgdGhlIGZvbGxvd2luZyBwbHVnaW5zOiAke3VubWV0LmpvaW4oJywgJyl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGV0b24oKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGlzZVNpbmdsZXRvbiguLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgbW9ja2VkIG1ldGhvZHNcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLm1vY2tzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5vcmlnaW5hbEZ1bmN0aW9ucykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW21ldGhvZE5hbWUsIGNhbGxiYWNrXSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlc1swXVttZXRob2ROYW1lXSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMubW9ja3MpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFttZXRob2ROYW1lLCBjYWxsYmFja10gPSBlbnRyeTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbMF1bbWV0aG9kTmFtZV0gPSAoLi4ucGFyYW1zKSA9PiBjYWxsYmFjayh0aGlzLCAuLi5wYXJhbXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBcHBseSBtb2NrZWQgbWV0aG9kcyB0byBwcm90b3R5cGVcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMubW9ja3MpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMub3JpZ2luYWxGdW5jdGlvbnMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW21ldGhvZE5hbWUsIGNhbGxiYWNrXSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdID0gY2FsbGJhY2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMubW9ja3MpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW21ldGhvZE5hbWUsIGNhbGxiYWNrXSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdID0gKC4uLnBhcmFtcykgPT4gY2FsbGJhY2sodGhpcywgLi4ucGFyYW1zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3SW5zdGFuY2UgPSBuZXcgdGhpcy5pbnN0YW5jZSh0aGlzLnNub3dib2FyZCwgLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIG5ld0luc3RhbmNlLmRldGFjaCA9ICgpID0+IHRoaXMuaW5zdGFuY2VzLnNwbGljZSh0aGlzLmluc3RhbmNlcy5pbmRleE9mKG5ld0luc3RhbmNlKSwgMSk7XG4gICAgICAgIG5ld0luc3RhbmNlLmNvbnN0cnVjdCguLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChuZXdJbnN0YW5jZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld0luc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYWxsIGluc3RhbmNlcyBvZiB0aGUgY3VycmVudCBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBJZiB0aGlzIHBsdWdpbiBpcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHBsdWdpbiwgYW4gZW1wdHkgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQbHVnaW5CYXNlW119XG4gICAgICovXG4gICAgZ2V0SW5zdGFuY2VzKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBjdXJyZW50IHBsdWdpbiBpcyBhIHNpbXBsZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHRoaXMuaW5zdGFuY2UgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5pbnN0YW5jZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBQbHVnaW5CYXNlID09PSBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgY3VycmVudCBwbHVnaW4gaXMgYSBzaW5nbGV0b24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1NpbmdsZXRvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlIGluc3RhbmNlb2YgU2luZ2xldG9uID09PSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYSBzaW5nbGV0b24gaGFzIGJlZW4gaW5pdGlhbGlzZWQuXG4gICAgICpcbiAgICAgKiBOb3JtYWwgcGx1Z2lucyB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzSW5pdGlhbGlzZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1NpbmdsZXRvbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnNpbmdsZXRvbi5pbml0aWFsaXNlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgaW5pdGlhbGlzZVNpbmdsZXRvbiguLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1NpbmdsZXRvbigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdJbnN0YW5jZSA9IG5ldyB0aGlzLmluc3RhbmNlKHRoaXMuc25vd2JvYXJkLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgbmV3SW5zdGFuY2UuZGV0YWNoID0gKCkgPT4gdGhpcy5pbnN0YW5jZXMuc3BsaWNlKHRoaXMuaW5zdGFuY2VzLmluZGV4T2YobmV3SW5zdGFuY2UpLCAxKTtcbiAgICAgICAgbmV3SW5zdGFuY2UuY29uc3RydWN0KC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKG5ld0luc3RhbmNlKTtcbiAgICAgICAgdGhpcy5zaW5nbGV0b24uaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGRlcGVuZGVuY2llcyBvZiB0aGUgY3VycmVudCBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZ2V0RGVwZW5kZW5jaWVzKCkge1xuICAgICAgICAvLyBDYWxsYmFjayBmdW5jdGlvbnMgY2Fubm90IGhhdmUgZGVwZW5kZW5jaWVzLlxuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vIGRlcGVuZGVuY3kgbWV0aG9kIHNwZWNpZmllZC5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmluc3RhbmNlLnByb3RvdHlwZS5kZXBlbmRlbmNpZXMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnByb3RvdHlwZS5kZXBlbmRlbmNpZXMoKS5tYXAoKGl0ZW0pID0+IGl0ZW0udG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgY3VycmVudCBwbHVnaW4gaGFzIGFsbCBpdHMgZGVwZW5kZW5jaWVzIGZ1bGZpbGxlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llc0Z1bGZpbGxlZCgpIHtcbiAgICAgICAgY29uc3QgZGVwZW5kZW5jaWVzID0gdGhpcy5nZXREZXBlbmRlbmNpZXMoKTtcblxuICAgICAgICBsZXQgZnVsZmlsbGVkID0gdHJ1ZTtcbiAgICAgICAgZGVwZW5kZW5jaWVzLmZvckVhY2goKHBsdWdpbikgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNub3dib2FyZC5oYXNQbHVnaW4ocGx1Z2luKSkge1xuICAgICAgICAgICAgICAgIGZ1bGZpbGxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnVsZmlsbGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93cyBhIG1ldGhvZCBvZiBhbiBpbnN0YW5jZSB0byBiZSBtb2NrZWQgZm9yIHRlc3RpbmcuXG4gICAgICpcbiAgICAgKiBUaGlzIG1vY2sgd2lsbCBiZSBhcHBsaWVkIGZvciB0aGUgbGlmZSBvZiBhbiBpbnN0YW5jZS4gRm9yIHNpbmdsZXRvbnMsIHRoZSBtb2NrIHdpbGwgYmUgYXBwbGllZCBmb3IgdGhlIGxpZmVcbiAgICAgKiBvZiB0aGUgcGFnZS5cbiAgICAgKlxuICAgICAqIE1vY2tzIGNhbm5vdCBiZSBhcHBsaWVkIHRvIGNhbGxiYWNrIGZ1bmN0aW9uIHBsdWdpbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgbW9jayhtZXRob2ROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZS5wcm90b3R5cGVbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRnVuY3Rpb24gXCIke21ldGhvZE5hbWV9XCIgZG9lcyBub3QgZXhpc3QgYW5kIGNhbm5vdCBiZSBtb2NrZWRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW9ja3NbbWV0aG9kTmFtZV0gPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5vcmlnaW5hbEZ1bmN0aW9uc1ttZXRob2ROYW1lXSA9IHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdO1xuXG4gICAgICAgIGlmICh0aGlzLmlzU2luZ2xldG9uKCkgJiYgdGhpcy5pbnN0YW5jZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VTaW5nbGV0b24oKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgbW9ja2VkIG1ldGhvZFxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbMF1bbWV0aG9kTmFtZV0gPSAoLi4ucGFyYW1ldGVycykgPT4gY2FsbGJhY2sodGhpcywgLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgbW9jayBjYWxsYmFjayBmcm9tIGZ1dHVyZSBpbnN0YW5jZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICAgICAqL1xuICAgIHVubW9jayhtZXRob2ROYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5tb2Nrc1ttZXRob2ROYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGV0b24oKSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbMF1bbWV0aG9kTmFtZV0gPSB0aGlzLm9yaWdpbmFsRnVuY3Rpb25zW21ldGhvZE5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRoaXMubW9ja3NbbWV0aG9kTmFtZV07XG4gICAgICAgIGRlbGV0ZSB0aGlzLm9yaWdpbmFsRnVuY3Rpb25zW21ldGhvZE5hbWVdO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wTG93ZXIgPSBwcm9wLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzUGx1Z2luKHByb3BMb3dlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKC4uLnBhcmFtcykgPT4gUmVmbGVjdC5nZXQodGFyZ2V0LCAncGx1Z2lucycpW3Byb3BMb3dlcl0uZ2V0SW5zdGFuY2UoLi4ucGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcbiAgICB9LFxuXG4gICAgaGFzKHRhcmdldCwgcHJvcCkge1xuICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wTG93ZXIgPSBwcm9wLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzUGx1Z2luKHByb3BMb3dlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3ApO1xuICAgIH0sXG59O1xuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcbmltcG9ydCBQbHVnaW5Mb2FkZXIgZnJvbSAnLi9QbHVnaW5Mb2FkZXInO1xuXG5pbXBvcnQgQ29va2llIGZyb20gJy4uL3V0aWxpdGllcy9Db29raWUnO1xuaW1wb3J0IEpzb25QYXJzZXIgZnJvbSAnLi4vdXRpbGl0aWVzL0pzb25QYXJzZXInO1xuaW1wb3J0IFNhbml0aXplciBmcm9tICcuLi91dGlsaXRpZXMvU2FuaXRpemVyJztcbmltcG9ydCBVcmwgZnJvbSAnLi4vdXRpbGl0aWVzL1VybCc7XG5cbi8qKlxuICogU25vd2JvYXJkIC0gdGhlIFdpbnRlciBKYXZhU2NyaXB0IGZyYW1ld29yay5cbiAqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGJhc2Ugb2YgYSBtb2Rlcm4gdGFrZSBvbiB0aGUgV2ludGVyIEpTIGZyYW1ld29yaywgYmVpbmcgZnVsbHkgZXh0ZW5zaWJsZSBhbmQgdGFraW5nIGFkdmFudGFnZVxuICogb2YgbW9kZXJuIEphdmFTY3JpcHQgZmVhdHVyZXMgYnkgbGV2ZXJhZ2luZyB0aGUgTGFyYXZlbCBNaXggY29tcGlsYXRpb24gZnJhbWV3b3JrLiBJdCBhbHNvIGlzIGNvZGVkIHVwIHRvIHJlbW92ZSB0aGVcbiAqIGRlcGVuZGVuY3kgb2YgalF1ZXJ5LlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICogQGxpbmsgaHR0cHM6Ly93aW50ZXJjbXMuY29tL2RvY3Mvc25vd2JvYXJkL2ludHJvZHVjdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbm93Ym9hcmQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBhdXRvU2luZ2xldG9ucyBBdXRvbWF0aWNhbGx5IGxvYWQgc2luZ2xldG9ucyB3aGVuIERPTSBpcyByZWFkeS4gRGVmYXVsdDogYHRydWVgLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVidWcgV2hldGhlciBkZWJ1Z2dpbmcgbG9ncyBzaG91bGQgYmUgc2hvd24uIERlZmF1bHQ6IGBmYWxzZWAuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXV0b1NpbmdsZXRvbnMsIGRlYnVnKSB7XG4gICAgICAgIHRoaXMuZGVidWdFbmFibGVkID0gKHR5cGVvZiBkZWJ1ZyA9PT0gJ2Jvb2xlYW4nICYmIGRlYnVnID09PSB0cnVlKTtcbiAgICAgICAgdGhpcy5hdXRvSW5pdFNpbmdsZXRvbnMgPSAodHlwZW9mIGF1dG9TaW5nbGV0b25zID09PSAnYm9vbGVhbicgJiYgYXV0b1NpbmdsZXRvbnMgPT09IGZhbHNlKTtcbiAgICAgICAgdGhpcy5wbHVnaW5zID0ge307XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgICAgIHRoaXMuZm91bmRCYXNlVXJsID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZWFkaW5lc3MgPSB7XG4gICAgICAgICAgICBkb206IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICAvLyBTZWFsIHJlYWRpbmVzcyBmcm9tIGJlaW5nIGFkZGVkIHRvIGZ1cnRoZXIsIGJ1dCBhbGxvdyB0aGUgcHJvcGVydGllcyB0byBiZSBtb2RpZmllZC5cbiAgICAgICAgT2JqZWN0LnNlYWwodGhpcy5yZWFkaW5lc3MpO1xuICAgICAgICB0aGlzLmF0dGFjaEFic3RyYWN0cygpO1xuXG4gICAgICAgIC8vIEZyZWV6ZSB0aGUgU25vd2JvYXJkIGNsYXNzIHRvIHByZXZlbnQgZnVydGhlciBtb2RpZmljYXRpb25zLlxuICAgICAgICBPYmplY3QuZnJlZXplKFNub3dib2FyZC5wcm90b3R5cGUpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuXG4gICAgICAgIHRoaXMubG9hZFV0aWxpdGllcygpO1xuICAgICAgICB0aGlzLmluaXRpYWxpc2UoKTtcblxuICAgICAgICB0aGlzLmRlYnVnKCdTbm93Ym9hcmQgZnJhbWV3b3JrIGluaXRpYWxpc2VkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgYWJzdHJhY3QgY2xhc3NlcyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBTbm93Ym9hcmQgY2xhc3MuXG4gICAgICpcbiAgICAgKiBUaGlzIHdpbGwgYWxsb3cgSmF2YXNjcmlwdCBmdW5jdGlvbmFsaXR5IHdpdGggbm8gYnVpbGQgcHJvY2VzcyB0byBzdGlsbCBleHRlbmQgdGhlc2UgYWJzdHJhY3RzIGJ5IHByZWZpeGluZ1xuICAgICAqIHRoZW0gd2l0aCBcIlNub3dib2FyZFwiLlxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogY2xhc3MgTXlDbGFzcyBleHRlbmRzIFNub3dib2FyZC5QbHVnaW5CYXNlIHtcbiAgICAgKiAgICAgLi4uXG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGF0dGFjaEFic3RyYWN0cygpIHtcbiAgICAgICAgdGhpcy5QbHVnaW5CYXNlID0gUGx1Z2luQmFzZTtcbiAgICAgICAgdGhpcy5TaW5nbGV0b24gPSBTaW5nbGV0b247XG5cbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLlBsdWdpbkJhc2UucHJvdG90eXBlKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLlBsdWdpbkJhc2UpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuU2luZ2xldG9uLnByb3RvdHlwZSk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5TaW5nbGV0b24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWRzIHRoZSBkZWZhdWx0IHV0aWxpdGllcy5cbiAgICAgKi9cbiAgICBsb2FkVXRpbGl0aWVzKCkge1xuICAgICAgICB0aGlzLmFkZFBsdWdpbignY29va2llJywgQ29va2llKTtcbiAgICAgICAgdGhpcy5hZGRQbHVnaW4oJ2pzb25QYXJzZXInLCBKc29uUGFyc2VyKTtcbiAgICAgICAgdGhpcy5hZGRQbHVnaW4oJ3Nhbml0aXplcicsIFNhbml0aXplcik7XG4gICAgICAgIHRoaXMuYWRkUGx1Z2luKCd1cmwnLCBVcmwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIHRoZSBmcmFtZXdvcmsuXG4gICAgICpcbiAgICAgKiBBdHRhY2hlcyBhIGxpc3RlbmVyIGZvciB0aGUgRE9NIGJlaW5nIHJlYWR5IGFuZCB0cmlnZ2VycyBhIGdsb2JhbCBcInJlYWR5XCIgZXZlbnQgZm9yIHBsdWdpbnMgdG8gYmVnaW4gYXR0YWNoaW5nXG4gICAgICogdGhlbXNlbHZlcyB0byB0aGUgRE9NLlxuICAgICAqL1xuICAgIGluaXRpYWxpc2UoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXV0b0luaXRTaW5nbGV0b25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXNlU2luZ2xldG9ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nbG9iYWxFdmVudCgncmVhZHknKTtcbiAgICAgICAgICAgIHRoaXMucmVhZGluZXNzLmRvbSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIGFuIGluc3RhbmNlIG9mIGV2ZXJ5IHNpbmdsZXRvbi5cbiAgICAgKi9cbiAgICBpbml0aWFsaXNlU2luZ2xldG9ucygpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBsdWdpbnMpLmZvckVhY2goKHBsdWdpbikgPT4ge1xuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc1NpbmdsZXRvbigpICYmIHBsdWdpbi5kZXBlbmRlbmNpZXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgICAgIHBsdWdpbi5pbml0aWFsaXNlU2luZ2xldG9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBwbHVnaW4gdG8gdGhlIGZyYW1ld29yay5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgYXJlIHRoZSBjb3JuZXJzdG9uZSBmb3IgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5IGZvciBTbm93Ym9hcmQuIEEgcGx1Z2luIG11c3QgZWl0aGVyIGJlIGFuIEVTMjAxNSBjbGFzc1xuICAgICAqIHRoYXQgZXh0ZW5kcyB0aGUgUGx1Z2luQmFzZSBvciBTaW5nbGV0b24gYWJzdHJhY3QgY2xhc3Nlcywgb3IgYSBzaW1wbGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBXaGVuIGEgcGx1Z2luIGlzIGFkZGVkLCBpdCBpcyBhdXRvbWF0aWNhbGx5IGFzc2lnbmVkIGFzIGEgbmV3IG1hZ2ljIG1ldGhvZCBpbiB0aGUgU25vd2JvYXJkIGNsYXNzIHVzaW5nIHRoZSBuYW1lXG4gICAgICogcGFyYW1ldGVyLCBhbmQgY2FuIGJlIGNhbGxlZCB2aWEgdGhpcyBtZXRob2QuIFRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIGJlIHRoZSBcImxvd2VyY2FzZVwiIHZlcnNpb24gb2YgdGhpcyBuYW1lLlxuICAgICAqXG4gICAgICogRm9yIGV4YW1wbGUsIGlmIGEgcGx1Z2luIGlzIGFzc2lnbmVkIHRvIHRoZSBuYW1lIFwibXlQbHVnaW5cIiwgaXQgY2FuIGJlIGNhbGxlZCB2aWEgYFNub3dib2FyZC5teXBsdWdpbigpYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtQbHVnaW5CYXNlfEZ1bmN0aW9ufSBpbnN0YW5jZVxuICAgICAqL1xuICAgIGFkZFBsdWdpbihuYW1lLCBpbnN0YW5jZSkge1xuICAgICAgICBjb25zdCBsb3dlck5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzUGx1Z2luKGxvd2VyTmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQSBwbHVnaW4gY2FsbGVkIFwiJHtuYW1lfVwiIGlzIGFscmVhZHkgcmVnaXN0ZXJlZC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2UgIT09ICdmdW5jdGlvbicgJiYgaW5zdGFuY2UgaW5zdGFuY2VvZiBQbHVnaW5CYXNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcHJvdmlkZWQgcGx1Z2luIG11c3QgZXh0ZW5kIHRoZSBQbHVnaW5CYXNlIGNsYXNzLCBvciBtdXN0IGJlIGEgY2FsbGJhY2sgZnVuY3Rpb24uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpc1tuYW1lXSAhPT0gdW5kZWZpbmVkIHx8IHRoaXNbbG93ZXJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBnaXZlbiBuYW1lIGlzIGFscmVhZHkgaW4gdXNlIGZvciBhIHByb3BlcnR5IG9yIG1ldGhvZCBvZiB0aGUgU25vd2JvYXJkIGNsYXNzLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbHVnaW5zW2xvd2VyTmFtZV0gPSBuZXcgUGx1Z2luTG9hZGVyKGxvd2VyTmFtZSwgdGhpcywgaW5zdGFuY2UpO1xuXG4gICAgICAgIHRoaXMuZGVidWcoYFBsdWdpbiBcIiR7bmFtZX1cIiByZWdpc3RlcmVkYCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IHNpbmdsZXRvbnMgbm93IGhhdmUgdGhlaXIgZGVwZW5kZW5jaWVzIGZ1bGZpbGxlZCwgYW5kIGZpcmUgdGhlaXIgXCJyZWFkeVwiIGhhbmRsZXIgaWYgd2UncmVcbiAgICAgICAgLy8gaW4gYSByZWFkeSBzdGF0ZS5cbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmdldFBsdWdpbnMoKSkuZm9yRWFjaCgocGx1Z2luKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcGx1Z2luLmlzU2luZ2xldG9uKClcbiAgICAgICAgICAgICAgICAmJiAhcGx1Z2luLmlzSW5pdGlhbGlzZWQoKVxuICAgICAgICAgICAgICAgICYmIHBsdWdpbi5kZXBlbmRlbmNpZXNGdWxmaWxsZWQoKVxuICAgICAgICAgICAgICAgICYmIHBsdWdpbi5oYXNNZXRob2QoJ2xpc3RlbnMnKVxuICAgICAgICAgICAgICAgICYmIE9iamVjdC5rZXlzKHBsdWdpbi5jYWxsTWV0aG9kKCdsaXN0ZW5zJykpLmluY2x1ZGVzKCdyZWFkeScpXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5yZWFkaW5lc3MuZG9tXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkeU1ldGhvZCA9IHBsdWdpbi5jYWxsTWV0aG9kKCdsaXN0ZW5zJykucmVhZHk7XG4gICAgICAgICAgICAgICAgcGx1Z2luLmNhbGxNZXRob2QocmVhZHlNZXRob2QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgcGx1Z2luLlxuICAgICAqXG4gICAgICogUmVtb3ZlcyBhIHBsdWdpbiBmcm9tIFNub3dib2FyZCwgY2FsbGluZyB0aGUgZGVzdHJ1Y3RvciBtZXRob2QgZm9yIGFsbCBhY3RpdmUgaW5zdGFuY2VzIG9mIHRoZSBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbW92ZVBsdWdpbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IGxvd2VyTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzUGx1Z2luKGxvd2VyTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGVidWcoYFBsdWdpbiBcIiR7bmFtZX1cIiBhbHJlYWR5IHJlbW92ZWRgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgZGVzdHJ1Y3RvcnMgZm9yIGFsbCBpbnN0YW5jZXNcbiAgICAgICAgdGhpcy5wbHVnaW5zW2xvd2VyTmFtZV0uZ2V0SW5zdGFuY2VzKCkuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIGluc3RhbmNlLmRlc3RydWN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRlbGV0ZSB0aGlzLnBsdWdpbnNbbG93ZXJOYW1lXTtcbiAgICAgICAgZGVsZXRlIHRoaXNbbG93ZXJOYW1lXTtcbiAgICAgICAgZGVsZXRlIHRoaXNbbmFtZV07XG5cbiAgICAgICAgdGhpcy5kZWJ1ZyhgUGx1Z2luIFwiJHtuYW1lfVwiIHJlbW92ZWRgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGEgcGx1Z2luIGhhcyBiZWVuIHJlZ2lzdGVyZWQgYW5kIGlzIGFjdGl2ZS5cbiAgICAgKlxuICAgICAqIEEgcGx1Z2luIHRoYXQgaXMgc3RpbGwgd2FpdGluZyBmb3IgZGVwZW5kZW5jaWVzIHRvIGJlIHJlZ2lzdGVyZWQgd2lsbCBub3QgYmUgYWN0aXZlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNQbHVnaW4obmFtZSkge1xuICAgICAgICBjb25zdCBsb3dlck5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLnBsdWdpbnNbbG93ZXJOYW1lXSAhPT0gdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHJlZ2lzdGVyZWQgcGx1Z2lucyBhcyBQbHVnaW5Mb2FkZXIgb2JqZWN0cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQbHVnaW5Mb2FkZXJbXX1cbiAgICAgKi9cbiAgICBnZXRQbHVnaW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgcmVnaXN0ZXJlZCBwbHVnaW5zLCBieSBuYW1lLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGdldFBsdWdpbk5hbWVzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5wbHVnaW5zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgUGx1Z2luTG9hZGVyIG9iamVjdCBvZiBhIGdpdmVuIHBsdWdpbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQbHVnaW5Mb2FkZXJ9XG4gICAgICovXG4gICAgZ2V0UGx1Z2luKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbG93ZXJOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXNQbHVnaW4obG93ZXJOYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBwbHVnaW4gY2FsbGVkIFwiJHtsb3dlck5hbWV9XCIgaGFzIGJlZW4gcmVnaXN0ZXJlZC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnBsdWdpbnNbbG93ZXJOYW1lXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBhbGwgcGx1Z2lucyB0aGF0IGxpc3RlbiB0byB0aGUgZ2l2ZW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIHdvcmtzIGZvciBib3RoIG5vcm1hbCBhbmQgcHJvbWlzZSBldmVudHMuIEl0IGRvZXMgTk9UIGNoZWNrIHRoYXQgdGhlIHBsdWdpbidzIGxpc3RlbmVyIGFjdHVhbGx5IGV4aXN0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119IFRoZSBuYW1lIG9mIHRoZSBwbHVnaW5zIHRoYXQgYXJlIGxpc3RlbmluZyB0byB0aGlzIGV2ZW50LlxuICAgICAqL1xuICAgIGxpc3RlbnNUb0V2ZW50KGV2ZW50TmFtZSkge1xuICAgICAgICBjb25zdCBwbHVnaW5zID0gW107XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wbHVnaW5zKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW25hbWUsIHBsdWdpbl0gPSBlbnRyeTtcblxuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBsdWdpbi5kZXBlbmRlbmNpZXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcGx1Z2luLmhhc01ldGhvZCgnbGlzdGVucycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSBwbHVnaW4uY2FsbE1ldGhvZCgnbGlzdGVucycpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyc1tldmVudE5hbWVdID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbGlzdGVuZXJzW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBwbHVnaW5zLnB1c2gobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwbHVnaW5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIHNpbXBsZSByZWFkeSBsaXN0ZW5lci5cbiAgICAgKlxuICAgICAqIFN5bm9ueW1vdXMgd2l0aCBqUXVlcnkncyBcIiQoZG9jdW1lbnQpLnJlYWR5KClcIiBmdW5jdGlvbmFsaXR5LCB0aGlzIGFsbG93cyBpbmxpbmUgc2NyaXB0cyB0b1xuICAgICAqIGF0dGFjaCB0aGVtc2VsdmVzIHRvIFNub3dib2FyZCBpbW1lZGlhdGVseSBidXQgb25seSBmaXJlIHdoZW4gdGhlIERPTSBpcyByZWFkeS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgcmVhZHkoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZGluZXNzLmRvbSkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub24oJ3JlYWR5JywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBzaW1wbGUgbGlzdGVuZXIgZm9yIGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCBmb3IgYWQtaG9jIHNjcmlwdHMgdGhhdCBkb24ndCBuZWVkIGEgZnVsbCBwbHVnaW4uIFRoZSBnaXZlbiBjYWxsYmFjayB3aWxsIGJlXG4gICAgICogY2FsbGVkIHdoZW4gdGhlIGV2ZW50IG5hbWUgcHJvdmlkZWQgZmlyZXMuIFRoaXMgd29ya3MgZm9yIGJvdGggbm9ybWFsIGFuZCBQcm9taXNlIGV2ZW50cy4gRm9yXG4gICAgICogYSBQcm9taXNlIGV2ZW50LCB5b3VyIGNhbGxiYWNrIG11c3QgcmV0dXJuIGEgUHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIG9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0uaW5jbHVkZXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIHNpbXBsZSBsaXN0ZW5lciBmb3IgYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBvZmYoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIGEgZ2xvYmFsIGV2ZW50IHRvIGFsbCByZWdpc3RlcmVkIHBsdWdpbnMuXG4gICAgICpcbiAgICAgKiBJZiBhbnkgcGx1Z2luIHJldHVybnMgYSBgZmFsc2VgLCB0aGUgZXZlbnQgaXMgY29uc2lkZXJlZCBjYW5jZWxsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IElmIGV2ZW50IHdhcyBub3QgY2FuY2VsbGVkXG4gICAgICovXG4gICAgZ2xvYmFsRXZlbnQoZXZlbnROYW1lLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIHRoaXMuZGVidWcoYENhbGxpbmcgZ2xvYmFsIGV2ZW50IFwiJHtldmVudE5hbWV9XCJgLCAuLi5wYXJhbWV0ZXJzKTtcblxuICAgICAgICAvLyBGaW5kIHBsdWdpbnMgbGlzdGVuaW5nIHRvIHRoZSBldmVudC5cbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5zVG9FdmVudChldmVudE5hbWUpO1xuICAgICAgICBpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgTm8gbGlzdGVuZXJzIGZvdW5kIGZvciBnbG9iYWwgZXZlbnQgXCIke2V2ZW50TmFtZX1cImApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWJ1ZyhgTGlzdGVuZXJzIGZvdW5kIGZvciBnbG9iYWwgZXZlbnQgXCIke2V2ZW50TmFtZX1cIjogJHtsaXN0ZW5lcnMuam9pbignLCAnKX1gKTtcblxuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG5cbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocGx1Z2luLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwbHVnaW4uaXNTaW5nbGV0b24oKSAmJiBwbHVnaW4uZ2V0SW5zdGFuY2VzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luLmluaXRpYWxpc2VTaW5nbGV0b24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGlzdGVuTWV0aG9kID0gcGx1Z2luLmNhbGxNZXRob2QoJ2xpc3RlbnMnKVtldmVudE5hbWVdO1xuXG4gICAgICAgICAgICAvLyBDYWxsIGV2ZW50IGhhbmRsZXIgbWV0aG9kcyBmb3IgYWxsIHBsdWdpbnMsIGlmIHRoZXkgaGF2ZSBhIG1ldGhvZCBzcGVjaWZpZWQgZm9yIHRoZSBldmVudC5cbiAgICAgICAgICAgIHBsdWdpbi5nZXRJbnN0YW5jZXMoKS5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgcGx1Z2luIGhhcyBjYW5jZWxsZWQgdGhlIGV2ZW50LCBubyBmdXJ0aGVyIHBsdWdpbnMgYXJlIGNvbnNpZGVyZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5NZXRob2QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGxpc3Rlbk1ldGhvZC5hcHBseShpbnN0YW5jZSwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gaW4gXCIke2V2ZW50TmFtZX1cIiBldmVudCBieSBcIiR7bmFtZX1cIiBwbHVnaW4uYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ZW5NZXRob2QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5zdGFuY2VbbGlzdGVuTWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIFwiJHtsaXN0ZW5NZXRob2R9XCIgbWV0aG9kIGluIFwiJHtuYW1lfVwiIHBsdWdpbmApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVtsaXN0ZW5NZXRob2RdKC4uLnBhcmFtZXRlcnMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgR2xvYmFsIGV2ZW50IFwiJHtldmVudE5hbWV9XCIgY2FuY2VsbGVkIGJ5IFwiJHtuYW1lfVwiIHBsdWdpbmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIGluIFwiJHtldmVudE5hbWV9XCIgZXZlbnQgYnkgXCIke25hbWV9XCIgcGx1Z2luLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihgTGlzdGVuIG1ldGhvZCBmb3IgXCIke2V2ZW50TmFtZX1cIiBldmVudCBpbiBcIiR7bmFtZX1cIiBwbHVnaW4gaXMgbm90IGEgZnVuY3Rpb24gb3Igc3RyaW5nLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBGaW5kIGFkLWhvYyBsaXN0ZW5lcnMgZm9yIHRoaXMgZXZlbnQuXG4gICAgICAgIGlmICghY2FuY2VsbGVkICYmIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0gJiYgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnKGBGb3VuZCAke3RoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RofSBhZC1ob2MgbGlzdGVuZXIocykgZm9yIGdsb2JhbCBldmVudCBcIiR7ZXZlbnROYW1lfVwiYCk7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIGxpc3RlbmVyIGhhcyBjYW5jZWxsZWQgdGhlIGV2ZW50LCBubyBmdXJ0aGVyIGxpc3RlbmVycyBhcmUgY29uc2lkZXJlZC5cbiAgICAgICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIoLi4ucGFyYW1ldGVycykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgR2xvYmFsIGV2ZW50IFwiJHtldmVudE5hbWV9IGNhbmNlbGxlZCBieSBhbiBhZC1ob2MgbGlzdGVuZXIuYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHRocm93biBpbiBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGJ5IGFuIGFkLWhvYyBsaXN0ZW5lci5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIWNhbmNlbGxlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBhIGdsb2JhbCBldmVudCB0byBhbGwgcmVnaXN0ZXJlZCBwbHVnaW5zLCBleHBlY3RpbmcgYSBQcm9taXNlIHRvIGJlIHJldHVybmVkIGJ5IGFsbC5cbiAgICAgKlxuICAgICAqIFRoaXMgY29sbGF0ZXMgYWxsIHBsdWdpbnMgcmVzcG9uc2VzIGludG8gb25lIGxhcmdlIFByb21pc2UgdGhhdCBlaXRoZXIgZXhwZWN0cyBhbGwgdG8gYmUgcmVzb2x2ZWQsIG9yIG9uZSB0byByZWplY3QuXG4gICAgICogSWYgbm8gbGlzdGVuZXJzIGFyZSBmb3VuZCwgYSByZXNvbHZlZCBQcm9taXNlIGlzIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqL1xuICAgIGdsb2JhbFByb21pc2VFdmVudChldmVudE5hbWUsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyhgQ2FsbGluZyBnbG9iYWwgcHJvbWlzZSBldmVudCBcIiR7ZXZlbnROYW1lfVwiYCk7XG5cbiAgICAgICAgLy8gRmluZCBwbHVnaW5zIGxpc3RlbmluZyB0byB0aGlzIGV2ZW50LlxuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbnNUb0V2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnKGBObyBsaXN0ZW5lcnMgZm91bmQgZm9yIGdsb2JhbCBwcm9taXNlIGV2ZW50IFwiJHtldmVudE5hbWV9XCJgKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlYnVnKGBMaXN0ZW5lcnMgZm91bmQgZm9yIGdsb2JhbCBwcm9taXNlIGV2ZW50IFwiJHtldmVudE5hbWV9XCI6ICR7bGlzdGVuZXJzLmpvaW4oJywgJyl9YCk7XG5cbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcblxuICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5nZXRQbHVnaW4obmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwbHVnaW4uaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc1NpbmdsZXRvbigpICYmIHBsdWdpbi5nZXRJbnN0YW5jZXMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwbHVnaW4uaW5pdGlhbGlzZVNpbmdsZXRvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5NZXRob2QgPSBwbHVnaW4uY2FsbE1ldGhvZCgnbGlzdGVucycpW2V2ZW50TmFtZV07XG5cbiAgICAgICAgICAgIC8vIENhbGwgZXZlbnQgaGFuZGxlciBtZXRob2RzIGZvciBhbGwgcGx1Z2lucywgaWYgdGhleSBoYXZlIGEgbWV0aG9kIHNwZWNpZmllZCBmb3IgdGhlIGV2ZW50LlxuICAgICAgICAgICAgcGx1Z2luLmdldEluc3RhbmNlcygpLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5NZXRob2QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlUHJvbWlzZSA9IGxpc3Rlbk1ldGhvZC5hcHBseShpbnN0YW5jZSwgcGFyYW1ldGVycyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChpbnN0YW5jZVByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIGluIFwiJHtldmVudE5hbWV9XCIgZXZlbnQgYnkgXCIke25hbWV9XCIgcGx1Z2luLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdGVuTWV0aG9kID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWluc3RhbmNlW2xpc3Rlbk1ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBcIiR7bGlzdGVuTWV0aG9kfVwiIG1ldGhvZCBpbiBcIiR7bmFtZX1cIiBwbHVnaW5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZVByb21pc2UgPSBpbnN0YW5jZVtsaXN0ZW5NZXRob2RdKC4uLnBhcmFtZXRlcnMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goaW5zdGFuY2VQcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHRocm93biBpbiBcIiR7ZXZlbnROYW1lfVwiIHByb21pc2UgZXZlbnQgYnkgXCIke25hbWV9XCIgcGx1Z2luLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihgTGlzdGVuIG1ldGhvZCBmb3IgXCIke2V2ZW50TmFtZX1cIiBldmVudCBpbiBcIiR7bmFtZX1cIiBwbHVnaW4gaXMgbm90IGEgZnVuY3Rpb24gb3Igc3RyaW5nLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBGaW5kIGFkLWhvYyBsaXN0ZW5lcnMgbGlzdGVuaW5nIHRvIHRoaXMgZXZlbnQuXG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdICYmIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgRm91bmQgJHt0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmxlbmd0aH0gYWQtaG9jIGxpc3RlbmVyKHMpIGZvciBnbG9iYWwgcHJvbWlzZSBldmVudCBcIiR7ZXZlbnROYW1lfVwiYCk7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0ZW5lclByb21pc2UgPSBsaXN0ZW5lciguLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGxpc3RlbmVyUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gaW4gXCIke2V2ZW50TmFtZX1cIiBwcm9taXNlIGV2ZW50IGJ5IGFuIGFkLWhvYyBsaXN0ZW5lci5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZyBhIHN0eWxlZCBtZXNzYWdlIGluIHRoZSBjb25zb2xlLlxuICAgICAqXG4gICAgICogSW5jbHVkZXMgcGFyYW1ldGVycyBhbmQgYSBzdGFjayB0cmFjZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGxvZ01lc3NhZ2UoY29sb3IsIGJvbGQsIG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZChcbiAgICAgICAgICAgICclY1tTbm93Ym9hcmRdJyxcbiAgICAgICAgICAgIGBjb2xvcjogJHtjb2xvcn07IGZvbnQtd2VpZ2h0OiAkeyhib2xkKSA/ICdib2xkJyA6ICdub3JtYWwnfTtgLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICApO1xuICAgICAgICBpZiAocGFyYW1ldGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgICAgICAgICAgYCVjUGFyYW1ldGVycyAlYygke3BhcmFtZXRlcnMubGVuZ3RofSlgLFxuICAgICAgICAgICAgICAgICdjb2xvcjogcmdiKDQ1LCAxNjcsIDE5OSk7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICAgICAgJ2NvbG9yOiByZ2IoODgsIDg4LCA4OCk7IGZvbnQtd2VpZ2h0OiBub3JtYWw7J1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICBwYXJhbWV0ZXJzLmZvckVhY2goKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMke2luZGV4fTpgLCAnY29sb3I6IHJnYig4OCwgODgsIDg4KTsgZm9udC13ZWlnaHQ6IG5vcm1hbDsnLCBwYXJhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcblxuICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnJWNUcmFjZScsICdjb2xvcjogcmdiKDQ1LCAxNjcsIDE5OSk7IGZvbnQtd2VpZ2h0OiBib2xkOycpO1xuICAgICAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZyBhIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBsb2cobWVzc2FnZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoJ3JnYig0NSwgMTY3LCAxOTkpJywgZmFsc2UsIG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZyBhIGRlYnVnIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBUaGVzZSBtZXNzYWdlcyBhcmUgb25seSBzaG93biB3aGVuIGRlYnVnZ2luZyBpcyBlbmFibGVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgZGVidWcobWVzc2FnZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICBpZiAoIXRoaXMuZGVidWdFbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoJ3JnYig0NSwgMTY3LCAxOTkpJywgZmFsc2UsIG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZ3MgYW4gZXJyb3IgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGVycm9yKG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKCdyZ2IoMjI5LCAzNSwgMzUpJywgdHJ1ZSwgbWVzc2FnZSwgLi4ucGFyYW1ldGVycyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhc2VDb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogQ29va2llIHV0aWxpdHkuXG4gKlxuICogVGhpcyB1dGlsaXR5IGlzIGEgdGhpbiB3cmFwcGVyIGFyb3VuZCB0aGUgXCJqcy1jb29raWVcIiBsaWJyYXJ5LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWVcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29raWUgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGV4cGlyZXM6IG51bGwsXG4gICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgICAgICBkb21haW46IG51bGwsXG4gICAgICAgICAgICBzZWN1cmU6IGZhbHNlLFxuICAgICAgICAgICAgc2FtZVNpdGU6ICdMYXgnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZGVmYXVsdCBjb29raWUgcGFyYW1ldGVycyBmb3IgYWxsIHN1YnNlcXVlbnQgXCJzZXRcIiBhbmQgXCJyZW1vdmVcIiBjYWxscy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgc2V0RGVmYXVsdHMob3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nvb2tpZSBkZWZhdWx0cyBtdXN0IGJlIHByb3ZpZGVkIGFzIGFuIG9iamVjdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMob3B0aW9ucykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0c1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50IGRlZmF1bHQgY29va2llIHBhcmFtZXRlcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldERlZmF1bHRzKCkge1xuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuZGVmYXVsdHMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdHNba2V5XSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIGNvb2tpZSBieSBuYW1lLlxuICAgICAqXG4gICAgICogSWYgYG5hbWVgIGlzIHVuZGVmaW5lZCwgcmV0dXJucyBhbGwgY29va2llcyBhcyBhbiBPYmplY3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8U3RyaW5nfVxuICAgICAqL1xuICAgIGdldChuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBCYXNlQ29va2llLmdldCgpO1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjb29raWVzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtjb29raWVOYW1lLCBjb29raWVWYWx1ZV0gPSBlbnRyeTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdjb29raWUuZ2V0JywgY29va2llTmFtZSwgY29va2llVmFsdWUsIChuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb29raWVzW2Nvb2tpZU5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGNvb2tpZXM7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsdWUgPSBCYXNlQ29va2llLmdldChuYW1lKTtcblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIG92ZXJyaWRlIHRoZSBnb3R0ZW4gdmFsdWVcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Nvb2tpZS5nZXQnLCBuYW1lLCB2YWx1ZSwgKG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGEgY29va2llIGJ5IG5hbWUuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHNwZWNpZnkgYWRkaXRpb25hbCBjb29raWUgcGFyYW1ldGVycyB0aHJvdWdoIHRoZSBcIm9wdGlvbnNcIiBwYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBzZXQobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHNhdmVWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gb3ZlcnJpZGUgdGhlIHZhbHVlIHRvIHNhdmVcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Nvb2tpZS5zZXQnLCBuYW1lLCB2YWx1ZSwgKG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICBzYXZlVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIEJhc2VDb29raWUuc2V0KG5hbWUsIHNhdmVWYWx1ZSwge1xuICAgICAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0cygpLFxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgY29va2llIGJ5IG5hbWUuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHNwZWNpZnkgdGhlIGFkZGl0aW9uYWwgY29va2llIHBhcmFtZXRlcnMgdmlhIHRoZSBcIm9wdGlvbnNcIiBwYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlKG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgQmFzZUNvb2tpZS5yZW1vdmUobmFtZSwge1xuICAgICAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0cygpLFxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBKU09OIFBhcnNlciB1dGlsaXR5LlxuICpcbiAqIFRoaXMgdXRpbGl0eSBwYXJzZXMgSlNPTi1saWtlIGRhdGEgdGhhdCBkb2VzIG5vdCBzdHJpY3RseSBtZWV0IHRoZSBKU09OIHNwZWNpZmljYXRpb25zIGluIG9yZGVyIHRvIHNpbXBsaWZ5IGRldmVsb3BtZW50LlxuICogSXQgaXMgYSBzYWZlIHJlcGxhY2VtZW50IGZvciBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV2YWwoXCIoe1wiICsgdmFsdWUgKyBcIn0pXCIpKSkgdGhhdCBkb2VzIG5vdCByZXF1aXJlIHRoZSB1c2Ugb2YgZXZhbCgpXG4gKlxuICogQGF1dGhvciBBeXVtaSBIYW1hc2FraVxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL29jdG9iZXJjbXMvb2N0b2Jlci9wdWxsLzQ1MjdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblBhcnNlciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgY29uc3RydWN0KCkge1xuICAgICAgICAvLyBBZGQgdG8gZ2xvYmFsIGZ1bmN0aW9uIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICB3aW5kb3cud25KU09OID0gKGpzb24pID0+IHRoaXMucGFyc2UoanNvbik7XG4gICAgICAgIHdpbmRvdy5vY0pTT04gPSB3aW5kb3cud25KU09OO1xuICAgIH1cblxuICAgIHBhcnNlKHN0cikge1xuICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gdGhpcy5wYXJzZVN0cmluZyhzdHIpO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcbiAgICB9XG5cbiAgICBwYXJzZVN0cmluZyh2YWx1ZSkge1xuICAgICAgICBsZXQgc3RyID0gdmFsdWUudHJpbSgpO1xuXG4gICAgICAgIGlmICghc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCcm9rZW4gSlNPTiBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgIGxldCB0eXBlID0gbnVsbDtcbiAgICAgICAgbGV0IGtleSA9IG51bGw7XG4gICAgICAgIGxldCBib2R5ID0gJyc7XG5cbiAgICAgICAgLypcbiAgICAgICAgKiB0aGUgbWlzdGFrZSAnLCdcbiAgICAgICAgKi9cbiAgICAgICAgd2hpbGUgKHN0ciAmJiBzdHJbMF0gPT09ICcsJykge1xuICAgICAgICAgICAgc3RyID0gc3RyLnN1YnN0cigxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICogc3RyaW5nXG4gICAgICAgICovXG4gICAgICAgIGlmIChzdHJbMF0gPT09ICdcIicgfHwgc3RyWzBdID09PSAnXFwnJykge1xuICAgICAgICAgICAgaWYgKHN0cltzdHIubGVuZ3RoIC0gMV0gIT09IHN0clswXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcgSlNPTiBvYmplY3QuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvZHkgPSAnXCInO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpICsgMV0gPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09IHN0clswXSkge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9ICdcIic7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBib2R5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gJ1xcXFxcIic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nIEpTT04gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBib29sZWFuXG4gICAgICAgICovXG4gICAgICAgIGlmIChzdHIgPT09ICd0cnVlJyB8fCBzdHIgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAqIG51bGxcbiAgICAgICAgKi9cbiAgICAgICAgaWYgKHN0ciA9PT0gJ251bGwnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBudW1iZXJcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgbnVtID0gTnVtYmVyKHN0cik7XG4gICAgICAgIGlmICghTnVtYmVyLmlzTmFOKG51bSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICogb2JqZWN0XG4gICAgICAgICovXG4gICAgICAgIGlmIChzdHJbMF0gPT09ICd7Jykge1xuICAgICAgICAgICAgdHlwZSA9ICduZWVkS2V5JztcbiAgICAgICAgICAgIGtleSA9IG51bGw7XG4gICAgICAgICAgICByZXN1bHQgPSAneyc7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNCbGFua0NoYXIoc3RyW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnbmVlZEtleScgJiYgKHN0cltpXSA9PT0gJ1wiJyB8fCBzdHJbaV0gPT09ICdcXCcnKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLnBhcnNlS2V5KHN0ciwgaSArIDEsIHN0cltpXSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBgXCIke2tleX1cImA7XG4gICAgICAgICAgICAgICAgICAgIGkgKz0ga2V5Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2FmdGVyS2V5JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICduZWVkS2V5JyAmJiB0aGlzLmNhbkJlS2V5SGVhZChzdHJbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMucGFyc2VLZXkoc3RyLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdcIic7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBrZXk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnXCInO1xuICAgICAgICAgICAgICAgICAgICBpICs9IGtleS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2FmdGVyS2V5JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhZnRlcktleScgJiYgc3RyW2ldID09PSAnOicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICc6JztcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICc6JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICc6Jykge1xuICAgICAgICAgICAgICAgICAgICBib2R5ID0gdGhpcy5nZXRCb2R5KHN0ciwgaSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaSA9IGkgKyBib2R5Lm9yaWdpbkxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLnBhcnNlU3RyaW5nKGJvZHkuYm9keSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdhZnRlckJvZHknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2FmdGVyQm9keScgfHwgdHlwZSA9PT0gJ25lZWRLZXknKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHN0cltsYXN0XSA9PT0gJywnIHx8IHRoaXMuaXNCbGFua0NoYXIoc3RyW2xhc3RdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdCArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbbGFzdF0gPT09ICd9JyAmJiBsYXN0ID09PSBzdHIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHIoMCwgcmVzdWx0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICd9JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3QgIT09IGkgJiYgcmVzdWx0ICE9PSAneycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnLCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ25lZWRLZXknO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGxhc3QgLSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIG9iamVjdCBuZWFyICR7cmVzdWx0fWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBhcnJheVxuICAgICAgICAqL1xuICAgICAgICBpZiAoc3RyWzBdID09PSAnWycpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9ICdbJztcbiAgICAgICAgICAgIHR5cGUgPSAnbmVlZEJvZHknO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnICcgfHwgc3RyW2ldID09PSAnXFxuJyB8fCBzdHJbaV0gPT09ICdcXHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICduZWVkQm9keScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ251bGwsJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ10nICYmIGkgPT09IHN0ci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cigwLCByZXN1bHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ10nO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSB0aGlzLmdldEJvZHkoc3RyLCBpKTtcblxuICAgICAgICAgICAgICAgICAgICBpID0gaSArIGJvZHkub3JpZ2luTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMucGFyc2VTdHJpbmcoYm9keS5ib2R5KTtcblxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2FmdGVyQm9keSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnYWZ0ZXJCb2R5Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnLCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ25lZWRCb2R5JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVhbCB3aXRoIG1pc3Rha2UgXCIsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChzdHJbaSArIDFdID09PSAnLCcgfHwgdGhpcy5pc0JsYW5rQ2hhcihzdHJbaSArIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaSArIDFdID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdudWxsLCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICddJyAmJiBpID09PSBzdHIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICddJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gYXJyYXkgbmVhciAke3Jlc3VsdH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBnZXRCb2R5KHN0ciwgcG9zKSB7XG4gICAgICAgIGxldCBib2R5ID0gJyc7XG5cbiAgICAgICAgLy8gcGFyc2Ugc3RyaW5nIGJvZHlcbiAgICAgICAgaWYgKHN0cltwb3NdID09PSAnXCInIHx8IHN0cltwb3NdID09PSAnXFwnJykge1xuICAgICAgICAgICAgYm9keSA9IHN0cltwb3NdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcG9zICsgMTsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgKyAxIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaSArIDFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gc3RyW3Bvc10pIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogYm9keS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBzdHJpbmcgYm9keSBuZWFyICR7Ym9keX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIHRydWUgLyBmYWxzZVxuICAgICAgICBpZiAoc3RyW3Bvc10gPT09ICd0Jykge1xuICAgICAgICAgICAgaWYgKHN0ci5pbmRleE9mKCd0cnVlJywgcG9zKSA9PT0gcG9zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVuZ3RoOiAndHJ1ZScubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBib29sZWFuIGJvZHkgbmVhciAke3N0ci5zdWJzdHIoMCwgcG9zICsgMTApfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdHJbcG9zXSA9PT0gJ2YnKSB7XG4gICAgICAgICAgICBpZiAoc3RyLmluZGV4T2YoJ2YnLCBwb3MpID09PSBwb3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5MZW5ndGg6ICdmYWxzZScubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiAnZmFsc2UnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gYm9vbGVhbiBib2R5IG5lYXIgJHtzdHIuc3Vic3RyKDAsIHBvcyArIDEwKX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIG51bGxcbiAgICAgICAgaWYgKHN0cltwb3NdID09PSAnbicpIHtcbiAgICAgICAgICAgIGlmIChzdHIuaW5kZXhPZignbnVsbCcsIHBvcykgPT09IHBvcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogJ251bGwnLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogJ251bGwnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gYm9vbGVhbiBib2R5IG5lYXIgJHtzdHIuc3Vic3RyKDAsIHBvcyArIDEwKX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIG51bWJlclxuICAgICAgICBpZiAoc3RyW3Bvc10gPT09ICctJyB8fCBzdHJbcG9zXSA9PT0gJysnIHx8IHN0cltwb3NdID09PSAnLicgfHwgKHN0cltwb3NdID49ICcwJyAmJiBzdHJbcG9zXSA8PSAnOScpKSB7XG4gICAgICAgICAgICBib2R5ID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBwb3M7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnLScgfHwgc3RyW2ldID09PSAnKycgfHwgc3RyW2ldID09PSAnLicgfHwgKHN0cltpXSA+PSAnMCcgJiYgc3RyW2ldIDw9ICc5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogYm9keS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBudW1iZXIgYm9keSBuZWFyICR7Ym9keX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIG9iamVjdFxuICAgICAgICBpZiAoc3RyW3Bvc10gPT09ICd7JyB8fCBzdHJbcG9zXSA9PT0gJ1snKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFjayA9IFtcbiAgICAgICAgICAgICAgICBzdHJbcG9zXSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBib2R5ID0gc3RyW3Bvc107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBwb3MgKyAxOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICsgMSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdID09PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSAhPT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goc3RyW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnXFwnJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSAhPT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChzdHJbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSAhPT0gJ1wiJyAmJiBzdGFja1tzdGFjay5sZW5ndGggLSAxXSAhPT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKCd7Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnfScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSA9PT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gJHsoc3RyW3Bvc10gPT09ICd7JyA/ICdvYmplY3QnIDogJ2FycmF5Jyl9IGJvZHkgbmVhciAke2JvZHl9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnWycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goJ1snKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICddJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdID09PSAnWycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiAkeyhzdHJbcG9zXSA9PT0gJ3snID8gJ29iamVjdCcgOiAnYXJyYXknKX0gYm9keSBuZWFyICR7Ym9keX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVuZ3RoOiBpIC0gcG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gJHsoc3RyW3Bvc10gPT09ICd7JyA/ICdvYmplY3QnIDogJ2FycmF5Jyl9IGJvZHkgbmVhciAke2JvZHl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIGJvZHkgbmVhciAke3N0ci5zdWJzdHIoKHBvcyAtIDUgPj0gMCkgPyBwb3MgLSA1IDogMCwgNTApfWApO1xuICAgIH1cblxuICAgIHBhcnNlS2V5KHN0ciwgcG9zLCBxdW90ZSkge1xuICAgICAgICBsZXQga2V5ID0gJyc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHBvczsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHF1b3RlICYmIHF1b3RlID09PSBzdHJbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFxdW90ZSAmJiAoc3RyW2ldID09PSAnICcgfHwgc3RyW2ldID09PSAnOicpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2V5ICs9IHN0cltpXTtcblxuICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ1xcXFwnICYmIGkgKyAxIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGtleSArPSBzdHJbaSArIDFdO1xuICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gc3ludGF4IG5lYXIgJHtrZXl9YCk7XG4gICAgfVxuXG4gICAgY2FuQmVLZXlIZWFkKGNoKSB7XG4gICAgICAgIGlmIChjaFswXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChjaFswXSA+PSAnYScgJiYgY2hbMF0gPD0gJ3onKSB8fCAoY2hbMF0gPj0gJ0EnICYmIGNoWzBdIDw9ICdaJykgfHwgY2hbMF0gPT09ICdfJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoWzBdID49ICcwJyAmJiBjaFswXSA8PSAnOScpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaFswXSA9PT0gJyQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2guY2hhckNvZGVBdCgwKSA+IDI1NSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNCbGFua0NoYXIoY2gpIHtcbiAgICAgICAgcmV0dXJuIGNoID09PSAnICcgfHwgY2ggPT09ICdcXG4nIHx8IGNoID09PSAnXFx0JztcbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIFNhbml0aXplciB1dGlsaXR5LlxuICpcbiAqIENsaWVudC1zaWRlIEhUTUwgc2FuaXRpemVyIGRlc2lnbmVkIG1vc3RseSB0byBwcmV2ZW50IHNlbGYtWFNTIGF0dGFja3MuXG4gKiBUaGUgc2FuaXRpemVyIHV0aWxpdHkgd2lsbCBzdHJpcCBhbGwgYXR0cmlidXRlcyB0aGF0IHN0YXJ0IHdpdGggYG9uYCAodXN1YWxseSBKUyBldmVudCBoYW5kbGVycyBhcyBhdHRyaWJ1dGVzLCBpLmUuIGBvbmxvYWRgIG9yIGBvbmVycm9yYCkgb3IgY29udGFpbiB0aGUgYGphdmFzY3JpcHQ6YCBwc2V1ZG8gcHJvdG9jb2wgaW4gdGhlaXIgdmFsdWVzLlxuICpcbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbml0aXplciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgY29uc3RydWN0KCkge1xuICAgICAgICAvLyBBZGQgdG8gZ2xvYmFsIGZ1bmN0aW9uIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICB3aW5kb3cud25TYW5pdGl6ZSA9IChodG1sKSA9PiB0aGlzLnNhbml0aXplKGh0bWwpO1xuICAgICAgICB3aW5kb3cub2NTYW5pdGl6ZSA9IHdpbmRvdy53blNhbml0aXplO1xuICAgIH1cblxuICAgIHNhbml0aXplKGh0bWwsIGJvZHlPbmx5KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgY29uc3QgZG9tID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJyk7XG4gICAgICAgIGNvbnN0IHJldHVybkJvZHlPbmx5ID0gKGJvZHlPbmx5ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGJvZHlPbmx5ID09PSAnYm9vbGVhbicpXG4gICAgICAgICAgICA/IGJvZHlPbmx5XG4gICAgICAgICAgICA6IHRydWU7XG5cbiAgICAgICAgdGhpcy5zYW5pdGl6ZU5vZGUoZG9tLmdldFJvb3ROb2RlKCkpO1xuXG4gICAgICAgIHJldHVybiAocmV0dXJuQm9keU9ubHkpID8gZG9tLmJvZHkuaW5uZXJIVE1MIDogZG9tLmlubmVySFRNTDtcbiAgICB9XG5cbiAgICBzYW5pdGl6ZU5vZGUobm9kZSkge1xuICAgICAgICBpZiAobm9kZS50YWdOYW1lID09PSAnU0NSSVBUJykge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJpbUF0dHJpYnV0ZXMobm9kZSk7XG5cbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKG5vZGUuY2hpbGRyZW4pO1xuXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNhbml0aXplTm9kZShjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyaW1BdHRyaWJ1dGVzKG5vZGUpIHtcbiAgICAgICAgaWYgKCFub2RlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyTmFtZSA9IG5vZGUuYXR0cmlidXRlcy5pdGVtKGkpLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBub2RlLmF0dHJpYnV0ZXMuaXRlbShpKS52YWx1ZTtcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICogcmVtb3ZlIGF0dHJpYnV0ZXMgd2hlcmUgdGhlIG5hbWVzIHN0YXJ0IHdpdGggXCJvblwiIChmb3IgZXhhbXBsZTogb25sb2FkLCBvbmVycm9yLi4uKVxuICAgICAgICAgICAgKiByZW1vdmUgYXR0cmlidXRlcyB3aGVyZSB0aGUgdmFsdWUgc3RhcnRzIHdpdGggdGhlIFwiamF2YXNjcmlwdDpcIiBwc2V1ZG8gcHJvdG9jb2wgKGZvciBleGFtcGxlIGhyZWY9XCJqYXZhc2NyaXB0OmFsZXJ0KDEpXCIpXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgICAgICBpZiAoYXR0ck5hbWUuaW5kZXhPZignb24nKSA9PT0gMCB8fCBhdHRyVmFsdWUuaW5kZXhPZignamF2YXNjcmlwdDonKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogVVJMIHV0aWxpdHkuXG4gKlxuICogVGhpcyB1dGlsaXR5IHByb3ZpZGVzIFVSTCBmdW5jdGlvbnMuXG4gKlxuICogQGNvcHlyaWdodCAyMDIyIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVybCBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgY29uc3RydWN0KCkge1xuICAgICAgICB0aGlzLmZvdW5kQmFzZVVybCA9IG51bGw7XG4gICAgICAgIHRoaXMuZm91bmRBc3NldFVybCA9IG51bGw7XG4gICAgICAgIHRoaXMuYmFzZVVybCgpO1xuICAgICAgICB0aGlzLmFzc2V0VXJsKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIFVSTCBiYXNlZCBvbiBhIHJlbGF0aXZlIHBhdGguXG4gICAgICpcbiAgICAgKiBJZiBhbiBhYnNvbHV0ZSBVUkwgaXMgcHJvdmlkZWQsIGl0IHdpbGwgYmUgcmV0dXJuZWQgdW5jaGFuZ2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgdG8odXJsKSB7XG4gICAgICAgIGNvbnN0IHVybFJlZ2V4ID0gL14oPzpbXjpdKzpcXC9cXC8pWy1hLXowLTlAOiUuXyt+Iz1dezEsMjU2fVxcYihbLWEtejAtOSgpQDolXysufiM/Ji8vPV0qKS9pO1xuXG4gICAgICAgIGlmICh1cmwubWF0Y2godXJsUmVnZXgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGhlVXJsID0gdXJsLnJlcGxhY2UoL15cXC8rLywgJycpO1xuXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmJhc2VVcmwoKX0ke3RoZVVybH1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYW4gQXNzZXQgVVJMIGJhc2VkIG9uIGEgcmVsYXRpdmUgcGF0aC5cbiAgICAgKlxuICAgICAqIElmIGFuIGFic29sdXRlIFVSTCBpcyBwcm92aWRlZCwgaXQgd2lsbCBiZSByZXR1cm5lZCB1bmNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBhc3NldCh1cmwpIHtcbiAgICAgICAgY29uc3QgdXJsUmVnZXggPSAvXig/OlteOl0rOlxcL1xcLylbLWEtejAtOUA6JS5fK34jPV17MSwyNTZ9XFxiKFstYS16MC05KClAOiVfKy5+Iz8mLy89XSopL2k7XG5cbiAgICAgICAgaWYgKHVybC5tYXRjaCh1cmxSZWdleCkpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aGVVcmwgPSB1cmwucmVwbGFjZSgvXlxcLysvLCAnJyk7XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMuYXNzZXRVcmwoKX0ke3RoZVVybH1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gZ2V0IHRoZSBiYXNlIFVSTCBvZiB0aGlzIGluc3RhbGwuXG4gICAgICpcbiAgICAgKiBUaGlzIGRldGVybWluZXMgdGhlIGJhc2UgVVJMIGZyb20gdGhyZWUgc291cmNlcywgaW4gb3JkZXI6XG4gICAgICogIC0gSWYgU25vd2JvYXJkIGlzIGxvYWRlZCB2aWEgdGhlIGB7JSBzbm93Ym9hcmQgJX1gIHRhZywgaXQgd2lsbCByZXRyaWV2ZSB0aGUgYmFzZSBVUkwgdGhhdFxuICAgICAqIGlzIGF1dG9tYXRpY2FsbHkgaW5jbHVkZWQgdGhlcmUuXG4gICAgICogIC0gSWYgYSBgPGJhc2U+YCB0YWcgaXMgYXZhaWxhYmxlLCBpdCB3aWxsIHVzZSB0aGUgVVJMIHNwZWNpZmllZCBpbiB0aGUgYmFzZSB0YWcuXG4gICAgICogIC0gRmluYWxseSwgaXQgd2lsbCB0YWtlIGEgZ3Vlc3MgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbi4gVGhpcyB3aWxsIGxpa2VseSBub3Qgd29yayBmb3Igc2l0ZXNcbiAgICAgKiB0aGF0IHJlc2lkZSBpbiBzdWJkaXJlY3Rvcmllcy5cbiAgICAgKlxuICAgICAqIFRoZSBiYXNlIFVSTCB3aWxsIGFsd2F5cyBjb250YWluIGEgdHJhaWxpbmcgYmFja3NsYXNoLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBiYXNlVXJsKCkge1xuICAgICAgICBpZiAodGhpcy5mb3VuZEJhc2VVcmwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kQmFzZVVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1tb2R1bGU9XCJzbm93Ym9hcmQtYmFzZVwiXScpICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kQmFzZVVybCA9IHRoaXMudmFsaWRhdGVCYXNlVXJsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtkYXRhLW1vZHVsZT1cInNub3dib2FyZC1iYXNlXCJdJykuZGF0YXNldC5iYXNlVXJsKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kQmFzZVVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdiYXNlJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRCYXNlVXJsID0gdGhpcy52YWxpZGF0ZUJhc2VVcmwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmFzZScpLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kQmFzZVVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybFBhcnRzID0gW1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnByb3RvY29sLFxuICAgICAgICAgICAgJy8vJyxcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0LFxuICAgICAgICAgICAgJy8nLFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmZvdW5kQmFzZVVybCA9IHVybFBhcnRzLmpvaW4oJycpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmZvdW5kQmFzZVVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGdldCB0aGUgYXNzZXQgVVJMIG9mIHRoaXMgaW5zdGFsbC5cbiAgICAgKlxuICAgICAqIFRoaXMgZGV0ZXJtaW5lcyB0aGUgYmFzZSBVUkwgZnJvbSB0aHJlZSBzb3VyY2VzLCBpbiBvcmRlcjpcbiAgICAgKiAgLSBJZiBTbm93Ym9hcmQgaXMgbG9hZGVkIHZpYSB0aGUgYHslIHNub3dib2FyZCAlfWAgdGFnLCBpdCB3aWxsIHJldHJpZXZlIHRoZSBhc3NldCBVUkwgdGhhdFxuICAgICAqIGlzIGF1dG9tYXRpY2FsbHkgaW5jbHVkZWQgdGhlcmUuXG4gICAgICogIC0gSWYgYSBgPGxpbmsgcmVsPVwiYXNzZXRfdXJsXCIgaHJlZj1cImh0dHBzOi8vZXhhbXBsZS5jb21cIj5gIHRhZyBpcyBhdmFpbGFibGUsIGl0IHdpbGwgdXNlIHRoZSBVUkwgc3BlY2lmaWVkIGluIHRoZSBsaW5rIHRhZy5cbiAgICAgKiAgLSBGaW5hbGx5LCBpdCB3aWxsIHRha2UgYSBndWVzcyBmcm9tIHRoZSBjdXJyZW50IGxvY2F0aW9uLiBUaGlzIHdpbGwgbGlrZWx5IG5vdCB3b3JrIGZvciBzaXRlc1xuICAgICAqIHRoYXQgcmVzaWRlIGluIHN1YmRpcmVjdG9yaWVzLlxuICAgICAqXG4gICAgICogVGhlIGFzc2V0IFVSTCB3aWxsIGFsd2F5cyBjb250YWluIGEgdHJhaWxpbmcgYmFja3NsYXNoLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBhc3NldFVybCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm91bmRBc3NldFVybCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRBc3NldFVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1tb2R1bGU9XCJzbm93Ym9hcmQtYmFzZVwiXScpICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kQXNzZXRVcmwgPSB0aGlzLnZhbGlkYXRlQmFzZVVybChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1tb2R1bGU9XCJzbm93Ym9hcmQtYmFzZVwiXScpLmRhdGFzZXQuYXNzZXRVcmwpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRBc3NldFVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbD1cImFzc2V0X3VybFwiXScpICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kQXNzZXRVcmwgPSB0aGlzLnZhbGlkYXRlQmFzZVVybChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbD1cImFzc2V0X3VybFwiXScpLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kQXNzZXRVcmw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmxQYXJ0cyA9IFtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCxcbiAgICAgICAgICAgICcvLycsXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaG9zdCxcbiAgICAgICAgICAgICcvJyxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5mb3VuZEFzc2V0VXJsID0gdXJsUGFydHMuam9pbignJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRBc3NldFVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgdGhlIGJhc2UgVVJMLCBlbnN1cmluZyBpdCBpcyBhIEhUVFAvSFRUUHMgVVJMLlxuICAgICAqXG4gICAgICogSWYgdGhlIFNub3dib2FyZCBzY3JpcHQgb3IgPGJhc2U+IHRhZyBvbiB0aGUgcGFnZSB1c2UgYSBkaWZmZXJlbnQgdHlwZSBvZiBVUkwsIHRoaXMgd2lsbCBmYWlsIHdpdGhcbiAgICAgKiBhbiBlcnJvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHZhbGlkYXRlQmFzZVVybCh1cmwpIHtcbiAgICAgICAgY29uc3QgdXJsUmVnZXggPSAvXigoW146Lz8jXSspOik/KFxcL1xcLyhbXi8/I10qKSk/KFtePyNdKikoXFw/KFteI10qKSk/KCMoLiopKT8vaTtcbiAgICAgICAgY29uc3QgdXJsUGFydHMgPSB1cmxSZWdleC5leGVjKHVybCk7XG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gdXJsUGFydHNbMl07XG4gICAgICAgIGNvbnN0IGRvbWFpbiA9IHVybFBhcnRzWzRdO1xuXG4gICAgICAgIGlmIChwcm90b2NvbCAmJiBbJ2h0dHAnLCAnaHR0cHMnXS5pbmRleE9mKHByb3RvY29sLnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGJhc2UgVVJMIGRldGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkb21haW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBiYXNlIFVSTCBkZXRlY3RlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICh1cmwuc3Vic3RyKC0xKSA9PT0gJy8nKVxuICAgICAgICAgICAgPyB1cmxcbiAgICAgICAgICAgIDogYCR7dXJsfS9gO1xuICAgIH1cbn1cbiIsImltcG9ydCBTbm93Ym9hcmQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9tYWluL1Nub3dib2FyZCc7XG5pbXBvcnQgUHJveHlIYW5kbGVyIGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvbWFpbi9Qcm94eUhhbmRsZXInO1xuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9hamF4L1JlcXVlc3QnO1xuaW1wb3J0IEF0dHJpYnV0ZVJlcXVlc3QgZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9hamF4L2hhbmRsZXJzL0F0dHJpYnV0ZVJlcXVlc3QnO1xuaW1wb3J0IEFzc2V0TG9hZGVyIGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL0Fzc2V0TG9hZGVyJztcbmltcG9ydCBEYXRhQ29uZmlnIGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL0RhdGFDb25maWcnO1xuaW1wb3J0IFN0eWxlc2hlZXRMb2FkZXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvU3R5bGVzaGVldExvYWRlcic7XG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9UcmFuc2l0aW9uJztcbmltcG9ydCBGbGFzaCBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9GbGFzaCc7XG5pbXBvcnQgRmxhc2hMaXN0ZW5lciBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9GbGFzaExpc3RlbmVyJztcbmltcG9ydCBGb3JtVmFsaWRhdGlvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9Gb3JtVmFsaWRhdGlvbic7XG5pbXBvcnQgQXR0YWNoTG9hZGluZyBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9BdHRhY2hMb2FkaW5nJztcbmltcG9ydCBTdHJpcGVMb2FkZXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvU3RyaXBlTG9hZGVyJztcbmltcG9ydCBUcmlnZ2VyIGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL1RyaWdnZXInO1xuXG4oKHdpbmRvdykgPT4ge1xuICAgIGNvbnN0IHNub3dib2FyZCA9IG5ldyBQcm94eShcbiAgICAgICAgbmV3IFNub3dib2FyZCh0cnVlLCB0cnVlKSxcbiAgICAgICAgUHJveHlIYW5kbGVyLFxuICAgICk7XG5cbiAgICAvLyBDb3ZlciBhbGwgYWxpYXNlc1xuICAgIHdpbmRvdy5zbm93Ym9hcmQgPSBzbm93Ym9hcmQ7XG4gICAgd2luZG93LlNub3dib2FyZCA9IHNub3dib2FyZDtcbiAgICB3aW5kb3cuU25vd0JvYXJkID0gc25vd2JvYXJkO1xuXG4gICAgc25vd2JvYXJkLmFkZFBsdWdpbigncmVxdWVzdCcsIFJlcXVlc3QpO1xuICAgIHNub3dib2FyZC5hZGRQbHVnaW4oJ2F0dHJpYnV0ZVJlcXVlc3QnLCBBdHRyaWJ1dGVSZXF1ZXN0KTtcbiAgICBzbm93Ym9hcmQuYWRkUGx1Z2luKCdhc3NldExvYWRlcicsIEFzc2V0TG9hZGVyKTtcbiAgICBzbm93Ym9hcmQuYWRkUGx1Z2luKCdkYXRhQ29uZmlnJywgRGF0YUNvbmZpZyk7XG4gICAgc25vd2JvYXJkLmFkZFBsdWdpbignZXh0cmFzU3R5bGVzJywgU3R5bGVzaGVldExvYWRlcik7XG4gICAgc25vd2JvYXJkLmFkZFBsdWdpbigndHJhbnNpdGlvbicsIFRyYW5zaXRpb24pO1xuICAgIHNub3dib2FyZC5hZGRQbHVnaW4oJ2ZsYXNoJywgRmxhc2gpO1xuICAgIHNub3dib2FyZC5hZGRQbHVnaW4oJ2ZsYXNoTGlzdGVuZXInLCBGbGFzaExpc3RlbmVyKTtcbiAgICBzbm93Ym9hcmQuYWRkUGx1Z2luKCdmb3JtVmFsaWRhdGlvbicsIEZvcm1WYWxpZGF0aW9uKTtcbiAgICBzbm93Ym9hcmQuYWRkUGx1Z2luKCdhdHRhY2hMb2FkaW5nJywgQXR0YWNoTG9hZGluZyk7XG4gICAgc25vd2JvYXJkLmFkZFBsdWdpbignc3RyaXBlTG9hZGVyJywgU3RyaXBlTG9hZGVyKTtcbiAgICBzbm93Ym9hcmQuYWRkUGx1Z2luKCd0cmlnZ2VyJywgVHJpZ2dlcik7XG5cbiAgICBzbm93Ym9hcmQub24oJ3JlYWR5JywgKCkgPT4ge1xuICAgICAgICAvLyBTY2FuIGZvciB0cmlnZ2Vyc1xuICAgICAgICBBcnJheVxuICAgICAgICAgICAgLmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpKVxuICAgICAgICAgICAgLmZpbHRlcigoZWxlbWVudCkgPT4gWy4uLmVsZW1lbnQuYXR0cmlidXRlc10uZmlsdGVyKFxuICAgICAgICAgICAgICAgICh7IG5hbWUgfSkgPT4gbmFtZS5zdGFydHNXaXRoKFwiZGF0YS10cmlnZ2VyLVwiKSkubGVuZ3RoID4gMFxuICAgICAgICAgICAgKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgc25vd2JvYXJkLnRyaWdnZXIoZWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn0pKHdpbmRvdyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiEganMtY29va2llIHYzLjAuNSB8IE1JVCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXG5mdW5jdGlvbiBhc3NpZ24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldFxufVxuLyogZXNsaW50LWVuYWJsZSBuby12YXIgKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXG52YXIgZGVmYXVsdENvbnZlcnRlciA9IHtcbiAgcmVhZDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlWzBdID09PSAnXCInKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDEsIC0xKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyglW1xcZEEtRl17Mn0pKy9naSwgZGVjb2RlVVJJQ29tcG9uZW50KVxuICB9LFxuICB3cml0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkucmVwbGFjZShcbiAgICAgIC8lKDJbMzQ2QkZdfDNbQUMtRl18NDB8NVtCREVdfDYwfDdbQkNEXSkvZyxcbiAgICAgIGRlY29kZVVSSUNvbXBvbmVudFxuICAgIClcbiAgfVxufTtcbi8qIGVzbGludC1lbmFibGUgbm8tdmFyICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXZhciAqL1xuXG5mdW5jdGlvbiBpbml0IChjb252ZXJ0ZXIsIGRlZmF1bHRBdHRyaWJ1dGVzKSB7XG4gIGZ1bmN0aW9uIHNldCAobmFtZSwgdmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXR0cmlidXRlcyA9IGFzc2lnbih7fSwgZGVmYXVsdEF0dHJpYnV0ZXMsIGF0dHJpYnV0ZXMpO1xuXG4gICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLmV4cGlyZXMgPT09ICdudW1iZXInKSB7XG4gICAgICBhdHRyaWJ1dGVzLmV4cGlyZXMgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgYXR0cmlidXRlcy5leHBpcmVzICogODY0ZTUpO1xuICAgIH1cbiAgICBpZiAoYXR0cmlidXRlcy5leHBpcmVzKSB7XG4gICAgICBhdHRyaWJ1dGVzLmV4cGlyZXMgPSBhdHRyaWJ1dGVzLmV4cGlyZXMudG9VVENTdHJpbmcoKTtcbiAgICB9XG5cbiAgICBuYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpXG4gICAgICAucmVwbGFjZSgvJSgyWzM0NkJdfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpXG4gICAgICAucmVwbGFjZSgvWygpXS9nLCBlc2NhcGUpO1xuXG4gICAgdmFyIHN0cmluZ2lmaWVkQXR0cmlidXRlcyA9ICcnO1xuICAgIGZvciAodmFyIGF0dHJpYnV0ZU5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgaWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnOyAnICsgYXR0cmlidXRlTmFtZTtcblxuICAgICAgaWYgKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0gPT09IHRydWUpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gQ29uc2lkZXJzIFJGQyA2MjY1IHNlY3Rpb24gNS4yOlxuICAgICAgLy8gLi4uXG4gICAgICAvLyAzLiAgSWYgdGhlIHJlbWFpbmluZyB1bnBhcnNlZC1hdHRyaWJ1dGVzIGNvbnRhaW5zIGEgJXgzQiAoXCI7XCIpXG4gICAgICAvLyAgICAgY2hhcmFjdGVyOlxuICAgICAgLy8gQ29uc3VtZSB0aGUgY2hhcmFjdGVycyBvZiB0aGUgdW5wYXJzZWQtYXR0cmlidXRlcyB1cCB0byxcbiAgICAgIC8vIG5vdCBpbmNsdWRpbmcsIHRoZSBmaXJzdCAleDNCIChcIjtcIikgY2hhcmFjdGVyLlxuICAgICAgLy8gLi4uXG4gICAgICBzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJz0nICsgYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXS5zcGxpdCgnOycpWzBdO1xuICAgIH1cblxuICAgIHJldHVybiAoZG9jdW1lbnQuY29va2llID1cbiAgICAgIG5hbWUgKyAnPScgKyBjb252ZXJ0ZXIud3JpdGUodmFsdWUsIG5hbWUpICsgc3RyaW5naWZpZWRBdHRyaWJ1dGVzKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0IChuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgKGFyZ3VtZW50cy5sZW5ndGggJiYgIW5hbWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBUbyBwcmV2ZW50IHRoZSBmb3IgbG9vcCBpbiB0aGUgZmlyc3QgcGxhY2UgYXNzaWduIGFuIGVtcHR5IGFycmF5XG4gICAgLy8gaW4gY2FzZSB0aGVyZSBhcmUgbm8gY29va2llcyBhdCBhbGwuXG4gICAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcbiAgICB2YXIgamFyID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGFydHMgPSBjb29raWVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCc9Jyk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBmb3VuZCA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1swXSk7XG4gICAgICAgIGphcltmb3VuZF0gPSBjb252ZXJ0ZXIucmVhZCh2YWx1ZSwgZm91bmQpO1xuXG4gICAgICAgIGlmIChuYW1lID09PSBmb3VuZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWUgPyBqYXJbbmFtZV0gOiBqYXJcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuY3JlYXRlKFxuICAgIHtcbiAgICAgIHNldCxcbiAgICAgIGdldCxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gKG5hbWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc2V0KFxuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgJycsXG4gICAgICAgICAgYXNzaWduKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICAgICAgICBleHBpcmVzOiAtMVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgd2l0aEF0dHJpYnV0ZXM6IGZ1bmN0aW9uIChhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBpbml0KHRoaXMuY29udmVydGVyLCBhc3NpZ24oe30sIHRoaXMuYXR0cmlidXRlcywgYXR0cmlidXRlcykpXG4gICAgICB9LFxuICAgICAgd2l0aENvbnZlcnRlcjogZnVuY3Rpb24gKGNvbnZlcnRlcikge1xuICAgICAgICByZXR1cm4gaW5pdChhc3NpZ24oe30sIHRoaXMuY29udmVydGVyLCBjb252ZXJ0ZXIpLCB0aGlzLmF0dHJpYnV0ZXMpXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBhdHRyaWJ1dGVzOiB7IHZhbHVlOiBPYmplY3QuZnJlZXplKGRlZmF1bHRBdHRyaWJ1dGVzKSB9LFxuICAgICAgY29udmVydGVyOiB7IHZhbHVlOiBPYmplY3QuZnJlZXplKGNvbnZlcnRlcikgfVxuICAgIH1cbiAgKVxufVxuXG52YXIgYXBpID0gaW5pdChkZWZhdWx0Q29udmVydGVyLCB7IHBhdGg6ICcvJyB9KTtcbi8qIGVzbGludC1lbmFibGUgbm8tdmFyICovXG5cbmV4cG9ydCB7IGFwaSBhcyBkZWZhdWx0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCIvYXNzZXRzL2pzL2FwcFwiOiAwLFxuXHRcImFzc2V0cy9jc3MvdGhlbWVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rd2ludGVyY21zX3dvcmtzaG9wX3RoZW1lXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3dpbnRlcmNtc193b3Jrc2hvcF90aGVtZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9jc3MvdGhlbWVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvanMvc3JjL2FwcC5qc1wiKSkpXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9jc3MvdGhlbWVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvY3NzL2Jhc2UuY3NzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiUGx1Z2luQmFzZSIsInNub3dib2FyZCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29uc3RydWN0IiwiZGVwZW5kZW5jaWVzIiwibGlzdGVucyIsImRlc3RydWN0IiwiZGV0YWNoIiwiZGVzdHJ1Y3RvciIsImRlZmF1bHQiLCJTaW5nbGV0b24iLCJfUGx1Z2luQmFzZSIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwiaXNBcnJheSIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJiaW5kIiwiX3NldFByb3RvdHlwZU9mIiwiUmVxdWVzdCIsImVsZW1lbnQiLCJoYW5kbGVyIiwib3B0aW9ucyIsIl90aGlzIiwiaXNIYW5kbGVyTmFtZSIsIm1hdGNoZWRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uY2F0IiwiZmV0Y2hPcHRpb25zIiwicmVzcG9uc2VEYXRhIiwicmVzcG9uc2VFcnJvciIsImNhbmNlbGxlZCIsImNoZWNrUmVxdWVzdCIsImdsb2JhbEV2ZW50IiwiZXZlbnQiLCJFdmVudCIsImNhbmNlbGFibGUiLCJyZXF1ZXN0IiwiZGlzcGF0Y2hFdmVudCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJkb0NsaWVudFZhbGlkYXRpb24iLCJjb25maXJtIiwiZG9Db25maXJtIiwiY29uZmlybWVkIiwiZG9BamF4IiwicmVzcG9uc2UiLCJwcm9jZXNzVXBkYXRlIiwiWF9XSU5URVJfU1VDQ0VTUyIsInByb2Nlc3NFcnJvciIsInByb2Nlc3NSZXNwb25zZSIsImVycm9yIiwiRWxlbWVudCIsInVuZGVmaW5lZCIsImdldEZldGNoIiwiaGVhZGVycyIsImJvZHkiLCJkYXRhIiwicmVkaXJlY3QiLCJtb2RlIiwiZmV0Y2giLCJ1cmwiLCJicm93c2VyVmFsaWRhdGUiLCJmb3JtIiwiY2hlY2tWYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiX3RoaXMyIiwiYWpheFByb21pc2UiLCJyZWplY3QiLCJvayIsInN0YXR1cyIsImhhcyIsImdldCIsImluY2x1ZGVzIiwianNvbiIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJyZW5kZXJFcnJvciIsImZpbGUiLCJsaW5lIiwidHJhY2UiLCJ0ZXh0IiwicmVzcG9uc2VUZXh0IiwiWF9XSU5URVJfUkVTUE9OU0VfQ09ERSIsInByb21pc2UiLCJfdGhpczMiLCJiZWZvcmVVcGRhdGUiLCJwYXJ0aWFscyIsImVudHJpZXMiLCJlbnRyeSIsIl9lbnRyeSIsInN1YnN0ciIsIlhfV0lOVEVSX0FTU0VUUyIsInByb2Nlc3NBc3NldHMiLCJwcm9taXNlcyIsImdsb2JhbFByb21pc2VFdmVudCIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZG9VcGRhdGUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfdGhpczQiLCJhZmZlY3RlZCIsIl9lbnRyeTIiLCJwYXJ0aWFsIiwiY29udGVudCIsInNlbGVjdG9yIiwidXBkYXRlIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5uZXJIVE1MIiwic3VjY2VzcyIsImZsYXNoIiwiWF9XSU5URVJfRkxBU0hfTUVTU0FHRVMiLCJwcm9jZXNzRmxhc2hNZXNzYWdlcyIsIlhfV0lOVEVSX1JFRElSRUNUIiwicHJvY2Vzc1JlZGlyZWN0IiwicHJvY2Vzc0Vycm9yTWVzc2FnZSIsInNraXBFcnJvciIsIlhfV0lOVEVSX0VSUk9SX0ZJRUxEUyIsInByb2Nlc3NWYWxpZGF0aW9uRXJyb3JzIiwiWF9XSU5URVJfRVJST1JfTUVTU0FHRSIsIl90aGlzNSIsImhhbmRsZVJlZGlyZWN0UmVzcG9uc2UiLCJhZGRFdmVudExpc3RlbmVyIiwiY3JlYXRlRXZlbnQiLCJldmVudE5hbWUiLCJvbmNlIiwibG9jYXRpb24iLCJhc3NpZ24iLCJoYW5kbGVFcnJvck1lc3NhZ2UiLCJhbGVydCIsIm1lc3NhZ2VzIiwiaGFuZGxlRmxhc2hNZXNzYWdlcyIsImZpZWxkcyIsImhhbmRsZVZhbGlkYXRpb25FcnJvcnMiLCJhc3NldHMiLCJfZG9Db25maXJtIiwiX2NhbGxlZTIiLCJmdWxmaWxsZWQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJoYW5kbGVDb25maXJtTWVzc2FnZSIsImxpc3RlbnNUb0V2ZW50IiwidDAiLCJ0YWdOYW1lIiwiY2xvc2VzdCIsImV4dHJhY3RQYXJ0aWFscyIsInhzcmZUb2tlbiIsImxvYWRpbmciLCJocmVmIiwiZmlsZXMiLCJGb3JtRGF0YSIsImRlYnVnIiwiY29va2llIiwiZm9ybURhdGEiLCJfZW50cnkzIiwiYXBwZW5kIiwiam9pbiIsIkF0dHJpYnV0ZVJlcXVlc3QiLCJfU2luZ2xldG9uIiwicmVhZHkiLCJhamF4U2V0dXAiLCJhdHRhY2hIYW5kbGVycyIsImRpc2FibGVEZWZhdWx0Rm9ybVZhbGlkYXRpb24iLCJkZXRhY2hIYW5kbGVycyIsIl9nZXQiLCJjaGFuZ2VIYW5kbGVyIiwiY2xpY2tIYW5kbGVyIiwia2V5RG93bkhhbmRsZXIiLCJzdWJtaXRIYW5kbGVyIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsIm1hdGNoZXMiLCJwcm9jZXNzUmVxdWVzdE9uRWxlbWVudCIsImN1cnJlbnRFbGVtZW50IiwicGFyZW50RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwidmFsaWRUeXBlcyIsImluZGV4T2YiLCJnZXRBdHRyaWJ1dGUiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJ0cmFja0lucHV0IiwiZGF0YXNldCIsInJlcXVlc3RDb25maXJtIiwicmVxdWVzdFJlZGlyZWN0IiwicmVxdWVzdExvYWRpbmciLCJyZXF1ZXN0Rm9ybSIsInJlcXVlc3RVcmwiLCJwYXJzZURhdGEiLCJyZXF1ZXN0VXBkYXRlIiwicmVxdWVzdERhdGEiLCJvbkFqYXhTZXR1cCIsImZpZWxkTmFtZSIsImdldFBhcmVudFJlcXVlc3REYXRhIiwiZWxlbWVudERhdGEiLCJqc29ucGFyc2VyIiwicGFyc2UiLCJsYXN0VmFsdWUiLCJpbnRlcnZhbCIsInJlc2V0VHJhY2tJbnB1dFRpbWVyIiwiaW5wdXRUaW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9uIiwiRiIsIkFzc2V0TG9hZGVyIiwiYWpheExvYWRBc3NldHMiLCJfbG9hZCIsIl9pdGVyYXRvciIsIl9zdGVwIiwic2NyaXB0IiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsInN0eWxlIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsImltYWdlIiwianMiLCJsb2FkU2NyaXB0IiwidDEiLCJjc3MiLCJsb2FkU3R5bGUiLCJ0MiIsInQzIiwiaW1nIiwibG9hZEltYWdlIiwidDQiLCJ0NSIsImxvYWQiLCJfeCIsImFzc2V0IiwibG9hZGVkIiwiZG9tU2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsImRvbUNzcyIsImhlYWQiLCJJbWFnZSIsInNyYyIsIkF0dGFjaExvYWRpbmciLCJhamF4U3RhcnQiLCJhamF4RG9uZSIsImxvYWRFbGVtZW50cyIsImNsYXNzTGlzdCIsImFkZCIsImdldExvYWRpbmdDbGFzcyIsImF0dGFjaExvYWRpbmciLCJyZW1vdmUiLCJEYXRhQ29uZmlnIiwiaW5zdGFuY2UiLCJsb2NhbENvbmZpZyIsIkhUTUxFbGVtZW50IiwiaW5zdGFuY2VDb25maWciLCJhY2NlcHRlZENvbmZpZ3MiLCJyZWZyZXNoIiwiY29uZmlnIiwic2V0IiwicGVyc2lzdCIsImdldEFjY2VwdGVkQ29uZmlncyIsInByb2Nlc3NDb25maWciLCJhY2NlcHRBbGxEYXRhQ29uZmlncyIsImRlZmF1bHRzIiwiZ2V0RGVmYXVsdHMiLCJjb2VyY2VWYWx1ZSIsInN0cmluZ1ZhbHVlIiwic3RhcnRzV2l0aCIsImJhc2U2NHN0ciIsInJlcGxhY2UiLCJkZWNvZGVkIiwiYXRvYiIsInRvTG93ZXJDYXNlIiwianNvblBhcnNlciIsIkZsYXNoIiwiZHVyYXRpb24iLCJjbGVhciIsInRpbWVyIiwiZmxhc2hUaW1lciIsInJlbW92ZUF0dHJpYnV0ZSIsInN0b3BUaW1lciIsInN0YXJ0VGltZXIiLCJhcHBlbmRDaGlsZCIsInRyYW5zaXRpb24iLCJ0aW1lclRyYW5zIiwiY2FuY2VsIiwiRmxhc2hMaXN0ZW5lciIsImFqYXhFcnJvck1lc3NhZ2UiLCJhamF4Rmxhc2hNZXNzYWdlcyIsImZsYXNoVHlwZSIsImZsYXNoRHVyYXRpb24iLCJjc3NDbGFzcyIsIkZvcm1WYWxpZGF0aW9uIiwiZXJyb3JCYWdzIiwiYWpheFZhbGlkYXRpb25FcnJvcnMiLCJjb2xsZWN0RXJyb3JCYWdzIiwiZG9WYWxpZGF0aW9uIiwiaW52YWxpZEZpZWxkcyIsInJlcXVlc3RWYWxpZGF0ZSIsImVycm9yQmFnIiwic2hvd0Vycm9yQmFnIiwiY2xlYXJWYWxpZGF0aW9uIiwiaGlkZUVycm9yQmFnIiwicm9vdE5vZGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJtZXNzYWdlTGlzdEVsZW1lbnQiLCJwbGFjZWhvbGRlciIsImNyZWF0ZUNvbW1lbnQiLCJlcnJvckJhZ0RhdGEiLCJ2YWxpZGF0ZUZvciIsInNwbGl0IiwiY2xvbmVOb2RlIiwibWVzc2FnZUxpc3RBbmNob3IiLCJjdXN0b21NZXNzYWdlIiwidGV4dENvbnRlbnQiLCJjaGlsZE5vZGVzIiwicmVwbGFjZUNoaWxkIiwiaXNDb25uZWN0ZWQiLCJlcnJvckJhZ1ZhbGlkYXRlc0ZpZWxkIiwiZmlyc3RGaWVsZCIsImZpZWxkIiwic2hpZnQiLCJfaW52YWxpZEZpZWxkcyRmaXJzdEYiLCJlcnJvcnMiLCJtZXNzYWdlRWxlbWVudCIsInZhbGlkYXRpb25NZXNzYWdlIiwiYWZ0ZXIiLCJfaW52YWxpZEZpZWxkcyRPYmplY3QiLCJTdHJpcGVMb2FkZXIiLCJjb3VudGVyIiwiY3JlYXRlU3RyaXBlIiwic3RyaXBlIiwic2hvdyIsImhpZGUiLCJpbmRpY2F0b3IiLCJzdHJpcGVMb2FkZWQiLCJuZXdTdHJpcGUiLCJmb3JjZSIsIlN0eWxlc2hlZXRMb2FkZXIiLCJzdHlsZXNMb2FkZWQiLCJlbmRzV2l0aCIsInN0eWxlc2hlZXQiLCJUcmFuc2l0aW9uIiwiY2FsbGJhY2siLCJ0cmFpbFRvIiwicGFyc2VEdXJhdGlvbiIsImRvVHJhbnNpdGlvbiIsImV2ZW50Q2xhc3NlcyIsIl9sZW4iLCJhcmdzIiwiX2tleSIsImFjdGl2ZSIsIm91dCIsInJldHVybkNsYXNzZXMiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJyZXNldENsYXNzZXMiLCJldmVudENsYXNzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9uVHJhbnNpdGlvbkVuZCIsInBhcnNlZCIsImV4ZWMiLCJhbW91bnQiLCJ1bml0IiwiTWF0aCIsImZsb29yIiwiVHJpZ2dlciIsInRyaWdnZXJzIiwiTWFwIiwiZXZlbnRzIiwiY29ubmVjdG9ycyIsInBhcnNlVHJpZ2dlcnMiLCJzaXplIiwicmVzZXRFdmVudHMiLCJjcmVhdGVUcmlnZ2VyRXZlbnRzIiwicnVuRXZlbnRzIiwiZGFzaFN0eWxlIiwibWF0Y2giLCJ0cmlnZ2VyUGFydHMiLCJ0cmlnZ2VyTmFtZSIsInRyaWdnZXJUeXBlIiwiX3RyaWdnZXJQYXJ0cyIsInRyaWdnZXIiLCJnZXRTZWxlY3RhYmxlRWxlbWVudHMiLCJoYXNWYWxpZENvbmRpdGlvbnMiLCJoYXNWYWxpZEFjdGlvbnMiLCJwYXJzZUNvbW1hbmQiLCJjb21tYW5kIiwiYWxsb3dNdWx0aXBsZSIsInRyaW0iLCJzcGxpdFZhbHVlcyIsInF1b3RlZCIsIm1hcCIsInNwbGl0VmFsdWUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJwYXJhbWV0ZXJzIiwic3BsaXRDb21tYW5kcyIsImNvbW1hbmRzIiwic3BsaXRDb21tYW5kIiwiX2NvbW1hbmQkc3BsaXQiLCJfY29tbWFuZCRzcGxpdDIiLCJldmVyeSIsImNvbmRpdGlvbiIsImFjdGlvbiIsImNyZWF0ZVZhbHVlQ29uZGl0aW9uIiwiY3JlYXRlRW1wdHlDb25kaXRpb24iLCJjcmVhdGVDaGVja2VkQ29uZGl0aW9uIiwicmVnaXN0ZXJFdmVudExpc3RlbmVycyIsImFkZEV2ZW50IiwiU2V0IiwicHJpb3JpdHkiLCJleGVjdXRlQWN0aW9ucyIsIl9yZWYiLCJlbGVtZW50RXZlbnQiLCJzb3J0IiwiYiIsImFsbCIsInN1cHBvcnRlZEVsZW1lbnRzIiwiZWxlbWVudFZhbHVlcyIsImNoZWNrZWQiLCJzb21lIiwiX3RoaXM2IiwiX3RoaXM3IiwiYXRMZWFzdCIsImF0TW9zdCIsImF0TGVhc3RDb3VudCIsImF0TW9zdENvdW50IiwiZWxlbWVudENvbm5lY3RvcnMiLCJjb25uZWN0b3IiLCJjb25kaXRpb25NZXQiLCJfdGhpczgiLCJhY3Rpb25TaG93IiwiYWN0aW9uRW5hYmxlIiwiYWN0aW9uVmFsdWUiLCJhY3Rpb25DbGFzcyIsIl90aGlzOSIsImRpc3BsYXkiLCJvcmlnaW5hbERpc3BsYXkiLCJhZnRlckFjdGlvbiIsImVuYWJsZSIsIl90aGlzMTAiLCJkaXNhYmxlZCIsIl90aGlzMTEiLCJ1bm1ldFZhbHVlIiwibmV3VmFsdWUiLCJfdGhpczEyIiwidW5tZXRDc3NDbGFzcyIsInByb3AiLCJyZWNlaXZlciIsInByb3BMb3dlciIsImhhc1BsdWdpbiIsIl9SZWZsZWN0JGdldCRwcm9wTG93ZSIsImdldEluc3RhbmNlIiwiSW5uZXJQcm94eUhhbmRsZXIiLCJQbHVnaW5Mb2FkZXIiLCJQcm94eSIsImZyZWV6ZSIsImluc3RhbmNlcyIsInNpbmdsZXRvbiIsImluaXRpYWxpc2VkIiwic2VhbCIsIm1vY2tzIiwib3JpZ2luYWxGdW5jdGlvbnMiLCJoYXNNZXRob2QiLCJtZXRob2ROYW1lIiwiaXNGdW5jdGlvbiIsImNhbGxNZXRob2QiLCJfbGVuMiIsIl9rZXkyIiwiZGVwZW5kZW5jaWVzRnVsZmlsbGVkIiwidW5tZXQiLCJnZXREZXBlbmRlbmNpZXMiLCJpdGVtIiwiZ2V0UGx1Z2luTmFtZXMiLCJpc1NpbmdsZXRvbiIsImluaXRpYWxpc2VTaW5nbGV0b24iLCJfbGVuMyIsInBhcmFtcyIsIl9rZXkzIiwiX2VudHJ5NCIsIl9sZW40IiwiX2tleTQiLCJuZXdJbnN0YW5jZSIsIl9jb25zdHJ1Y3QiLCJzcGxpY2UiLCJnZXRJbnN0YW5jZXMiLCJpc0luaXRpYWxpc2VkIiwiX2xlbjUiLCJfa2V5NSIsInBsdWdpbiIsIm1vY2siLCJfbGVuNiIsIl9rZXk2IiwidW5tb2NrIiwiQ29va2llIiwiSnNvblBhcnNlciIsIlNhbml0aXplciIsIlVybCIsIlNub3dib2FyZCIsImF1dG9TaW5nbGV0b25zIiwiZGVidWdFbmFibGVkIiwiYXV0b0luaXRTaW5nbGV0b25zIiwicGx1Z2lucyIsImxpc3RlbmVycyIsImZvdW5kQmFzZVVybCIsInJlYWRpbmVzcyIsImRvbSIsImF0dGFjaEFic3RyYWN0cyIsImxvYWRVdGlsaXRpZXMiLCJpbml0aWFsaXNlIiwiYWRkUGx1Z2luIiwiaW5pdGlhbGlzZVNpbmdsZXRvbnMiLCJsb3dlck5hbWUiLCJnZXRQbHVnaW5zIiwicmVhZHlNZXRob2QiLCJyZW1vdmVQbHVnaW4iLCJnZXRQbHVnaW4iLCJvbiIsIm9mZiIsImluZGV4IiwibGlzdGVuTWV0aG9kIiwicmVzdWx0IiwibGlzdGVuZXIiLCJpbnN0YW5jZVByb21pc2UiLCJsaXN0ZW5lclByb21pc2UiLCJsb2dNZXNzYWdlIiwiY29sb3IiLCJib2xkIiwiY29uc29sZSIsImdyb3VwQ29sbGFwc2VkIiwicGFyYW0iLCJsb2ciLCJncm91cEVuZCIsIkJhc2VDb29raWUiLCJleHBpcmVzIiwicGF0aCIsImRvbWFpbiIsInNlY3VyZSIsInNhbWVTaXRlIiwic2V0RGVmYXVsdHMiLCJjb29raWVzIiwiY29va2llTmFtZSIsImNvb2tpZVZhbHVlIiwic2F2ZVZhbHVlIiwid25KU09OIiwib2NKU09OIiwic3RyIiwianNvblN0cmluZyIsInBhcnNlU3RyaW5nIiwiSlNPTiIsIm51bSIsImlzQmxhbmtDaGFyIiwicGFyc2VLZXkiLCJjYW5CZUtleUhlYWQiLCJnZXRCb2R5Iiwib3JpZ2luTGVuZ3RoIiwibGFzdCIsInBvcyIsInN0YWNrIiwicXVvdGUiLCJjaCIsImNoYXJDb2RlQXQiLCJ3blNhbml0aXplIiwiaHRtbCIsInNhbml0aXplIiwib2NTYW5pdGl6ZSIsImJvZHlPbmx5IiwicGFyc2VyIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwicmV0dXJuQm9keU9ubHkiLCJzYW5pdGl6ZU5vZGUiLCJnZXRSb290Tm9kZSIsIm5vZGUiLCJ0cmltQXR0cmlidXRlcyIsImNoaWxkcmVuIiwiY2hpbGQiLCJhdHRyaWJ1dGVzIiwiYXR0ck5hbWUiLCJhdHRyVmFsdWUiLCJmb3VuZEFzc2V0VXJsIiwiYmFzZVVybCIsImFzc2V0VXJsIiwidG8iLCJ1cmxSZWdleCIsInRoZVVybCIsInZhbGlkYXRlQmFzZVVybCIsInVybFBhcnRzIiwicHJvdG9jb2wiLCJob3N0IiwiUHJveHlIYW5kbGVyIiwiU25vd0JvYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==