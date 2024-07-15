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
       * @type {Map<string, Map<TriggerEntity>>} The triggers for this element.
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
     *  - `action`: The action to perform when the trigger fires.
     *  - `parent` or `closest-parent`: The parent element with which to limit the trigger scope.
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
        var triggerParts = /([a-z0-9\-.:_]+?)(?:(?:-)(closest-parent|condition|when|action|parent|priority))?$/i.exec(dashStyle.replace('trigger-', '').toLowerCase());
        var triggerName = null;
        var triggerType = null;
        if (['trigger', 'condition', 'action', 'parent', 'when', 'closest'].indexOf(triggerParts[1]) !== -1 && (triggerParts[1] !== 'closest' || triggerParts[1] === 'closest' && triggerParts[2] === 'parent')) {
          // Support original trigger format
          triggerName = '__original';
          triggerType = triggerParts[1] === 'closest' ? 'parent' : triggerParts[1];
        } else if (triggerParts[2] === undefined || ['closest-parent', 'condition', 'when', 'action', 'parent', 'priority'].indexOf(triggerParts[2]) !== -1) {
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
        if (!trigger.has('trigger') || !trigger.has('condition') || !trigger.has('action') || elements.length === 0 || !_this.isValidCondition(trigger) || !_this.isValidAction(trigger)) {
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
     * @param {string} command
     * @returns {name: string, parameters: string[]}
     */
  }, {
    key: "parseCommand",
    value: function parseCommand(command) {
      // Support old-format value command (value[foo,bar])
      if (command.startsWith('value')) {
        var match = command.match(/[^[\]]+(?=])/g);
        var values = [];

        // Split values with commas
        match.forEach(function (value) {
          if (!value.includes(',')) {
            values.push(value.replace(/^['"]|['"]$/g, '').trim());
            return;
          }
          var splitValues = value.replace(/("[^"]*")|('[^']*')/g, function (quoted) {
            return quoted.replace(/,/g, '|||');
          }).split(',').map(function (splitValue) {
            return splitValue.replace(/\|\|\|/g, ',').replace(/^['"]|['"]$/g, '').trim();
          });
          values.push.apply(values, _toConsumableArray(splitValues));
        });
        return {
          name: 'value',
          parameters: values
        };
      }
      if (!command.includes(':')) {
        return {
          name: command,
          parameters: []
        };
      }
      var _command$split = command.split(':', 2),
        _command$split2 = _slicedToArray(_command$split, 2),
        name = _command$split2[0],
        parameters = _command$split2[1];
      if (!parameters.includes(',')) {
        return {
          name: name,
          parameters: [parameters]
        };
      }
      var splitValues = parameters.replace(/("[^"]*")|('[^']*')/g, function (quoted) {
        return quoted.replace(/,/g, '|||');
      }).split(',').map(function (splitValue) {
        return splitValue.replace(/\|\|\|/g, ',').replace(/^['"]|['"]$/g, '').trim();
      });
      return {
        name: name,
        parameters: splitValues
      };
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
     * Determines if the provided trigger condition is valid.
     *
     * @param {TriggerEntity} trigger
     * @returns {boolean}
     */
  }, {
    key: "isValidCondition",
    value: function isValidCondition(trigger) {
      return ['checked', 'unchecked', 'empty', 'value', 'oneof', 'allof', 'focus', 'blur'].includes(this.parseCommand(trigger.get('condition')).name.toLowerCase());
    }

    /**
     * Determines if the provided trigger action is valid.
     *
     * @param {TriggerEntity} trigger
     * @returns {boolean}
     */
  }, {
    key: "isValidAction",
    value: function isValidAction(trigger) {
      return ['show', 'hide', 'enable', 'disable', 'empty', 'value', 'check', 'uncheck', 'class', 'attr', 'style'].includes(this.parseCommand(trigger.get('action')).name.toLowerCase());
    }

    /**
     * Create trigger events on trigger and target elements.
     */
  }, {
    key: "createTriggerEvents",
    value: function createTriggerEvents() {
      var _this2 = this;
      this.triggers.forEach(function (trigger) {
        var _parameters$;
        var _this2$parseCommand = _this2.parseCommand(trigger.get('condition')),
          name = _this2$parseCommand.name,
          parameters = _this2$parseCommand.parameters;
        switch (name.toLowerCase()) {
          case 'value':
          case 'oneof':
            _this2.createValueEvent.apply(_this2, [trigger, false].concat(_toConsumableArray(parameters)));
            break;
          case 'allof':
            _this2.createValueEvent.apply(_this2, [trigger, true].concat(_toConsumableArray(parameters)));
            break;
          case 'empty':
            _this2.createEmptyEvent(trigger);
            break;
          case 'checked':
          case 'unchecked':
            _this2.createCheckedEvent(trigger, name === 'checked', (_parameters$ = parameters[0]) !== null && _parameters$ !== void 0 ? _parameters$ : undefined);
            break;
          default:
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
    key: "createValueEvent",
    value: function createValueEvent(trigger, all) {
      var _this3 = this;
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
      var thisEvent = function thisEvent() {
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
          if (values.every(function (value) {
            return elementValues.has(value);
          })) {
            _this3.executeAction(trigger, true);
          } else {
            _this3.executeAction(trigger, false);
          }
          return;
        }
        if (values.some(function (value) {
          return elementValues.has(value);
        })) {
          _this3.executeAction(trigger, true);
        } else {
          _this3.executeAction(trigger, false);
        }
      };
      supportedElements.forEach(function (element) {
        if (element.matches('input[type=checkbox], input[type=radio]')) {
          _this3.addEvent(element, trigger, 'click', function () {
            return thisEvent();
          });
          return;
        }
        _this3.addEvent(element, trigger, 'input', function () {
          return thisEvent();
        });
      });
    }

    /**
     * Creates a trigger that fires when there is no value within the target element(s).
     *
     * @param {TriggerEntity} trigger
     */
  }, {
    key: "createEmptyEvent",
    value: function createEmptyEvent(trigger) {
      var _this4 = this;
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
      var thisEvent = function thisEvent() {
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
        if (elementValues.size === 0) {
          _this4.executeAction(trigger, true);
        } else {
          _this4.executeAction(trigger, false);
        }
      };
      supportedElements.forEach(function (element) {
        if (element.matches('input[type=checkbox], input[type=radio]')) {
          _this4.addEvent(element, trigger, 'click', function () {
            return thisEvent();
          });
          return;
        }
        _this4.addEvent(element, trigger, 'input', function () {
          return thisEvent();
        });
      });
    }

    /**
     * Creates a trigger that fires when a target element is checked/unchecked.
     *
     * @param {TriggerEntity} trigger
     * @param {boolean} checked If the element should be checked or unchecked.
     * @param {number|undefined} atLeast The minimum number of elements that must be checked.
     *  Defaults to 1 if undefined.
     */
  }, {
    key: "createCheckedEvent",
    value: function createCheckedEvent(trigger, checked) {
      var _this5 = this;
      var atLeast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var supportedElements = new Set();
      trigger.get('elements').forEach(function (element) {
        // Only supports checkboxes and radio buttons
        if (element.matches('input[type=radio], input[type=checkbox]')) {
          supportedElements.add(element);
        }
      });
      var thisEvent = function thisEvent() {
        var elementValues = new Set();
        supportedElements.forEach(function (element) {
          if (checked === element.checked) {
            elementValues.add(element);
          }
        });
        var atLeastCount = atLeast ? Number(atLeast) : 1;
        if (elementValues.size >= atLeastCount) {
          _this5.executeAction(trigger, true);
        } else {
          _this5.executeAction(trigger, false);
        }
      };
      supportedElements.forEach(function (element) {
        _this5.addEvent(element, trigger, 'click', function () {
          return thisEvent();
        });
      });
    }

    /**
     * Adds an event to an element.
     *
     * This registers the event in the `events` map for later usage and removal, and adds a
     * connector to the element for the event, so that we may enable prioritisation and control over
     * the firing of the events.
     *
     * @param {HTMLElement} element
     * @param {TriggerEntity} trigger
     * @param {string} eventName
     * @param {Function} callback
     */
  }, {
    key: "addEvent",
    value: function addEvent(element, trigger, eventName, callback) {
      var _this6 = this;
      if (!this.events.has(element)) {
        this.events.set(element, new Set());
      }
      var event = {
        element: element,
        eventName: eventName,
        priority: Number(trigger.get('priority')),
        event: callback
      };
      this.events.get(element).add(event);
      if (!this.connectors.has(element)) {
        this.connectors.set(element, new Map());
      }
      if (!this.connectors.get(element).has(eventName)) {
        this.connectors.get(element).set(eventName, function () {
          var events = [];
          _this6.events.get(element).forEach(function (elementEvent) {
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
        element.addEventListener(eventName, this.connectors.get(element).get(eventName));
      }
    }
  }, {
    key: "runEvents",
    value: function runEvents() {
      this.connectors.forEach(function (elementConnectors) {
        elementConnectors.forEach(function (connector) {
          connector();
        });
      });
    }
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
  }, {
    key: "executeAction",
    value: function executeAction(trigger, conditionMet) {
      var _this$parseCommand = this.parseCommand(trigger.get('action')),
        name = _this$parseCommand.name,
        parameters = _this$parseCommand.parameters;
      switch (name) {
        case 'show':
        case 'hide':
          this.actionShow(trigger, name === 'show' ? conditionMet : !conditionMet);
          break;
        default:
      }
    }
  }, {
    key: "actionShow",
    value: function actionShow(trigger, show) {
      if (show && getComputedStyle(this.element).display === 'none') {
        this.element.classList.remove('hide');
        if (!this.element.dataset.originalDisplay) {
          this.element.style.display = 'block';
        } else {
          this.element.style.display = this.element.dataset.originalDisplay;
        }
        delete this.element.dataset.originalDisplay;
        this.afterAction(trigger);
      } else if (!show && getComputedStyle(this.element).display !== 'none') {
        this.element.classList.add('hide');
        this.element.dataset.originalDisplay = getComputedStyle(this.element).display;
        this.element.style.display = 'none';
        this.afterAction(trigger);
      }
    }
  }, {
    key: "afterAction",
    value: function afterAction(trigger) {
      this.snowboard.debug('Trigger fired', this.element, trigger);
      this.snowboard.globalEvent('trigger.fired', this.element, trigger);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYWJzdHJhY3RzL1BsdWdpbkJhc2UuanMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYWJzdHJhY3RzL1NpbmdsZXRvbi5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9hamF4L1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYWpheC9oYW5kbGVycy9BdHRyaWJ1dGVSZXF1ZXN0LmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9Bc3NldExvYWRlci5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvQXR0YWNoTG9hZGluZy5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvRGF0YUNvbmZpZy5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvRmxhc2guanMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL0ZsYXNoTGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL0Zvcm1WYWxpZGF0aW9uLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9TdHJpcGVMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL1N0eWxlc2hlZXRMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL1RyaWdnZXIuanMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvbWFpbi9Jbm5lclByb3h5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9tYWluL1BsdWdpbkxvYWRlci5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9tYWluL1Byb3h5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9tYWluL1Nub3dib2FyZC5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC91dGlsaXRpZXMvQ29va2llLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL3V0aWxpdGllcy9Kc29uUGFyc2VyLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL3V0aWxpdGllcy9TYW5pdGl6ZXIuanMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvdXRpbGl0aWVzL1VybC5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi9hc3NldHMvanMvc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi9hc3NldHMvY3NzL2Jhc2UuY3NzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9ub2RlX21vZHVsZXMvanMtY29va2llL2Rpc3QvanMuY29va2llLm1qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUGx1Z2luIGJhc2UgYWJzdHJhY3QuXG4gKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyB0aGUgYmFzZSBmdW5jdGlvbmFsaXR5IGZvciBhbGwgcGx1Z2lucy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBUaGUgY29uc3RydWN0b3IgaXMgcHJvdmlkZWQgdGhlIFNub3dib2FyZCBmcmFtZXdvcmsgaW5zdGFuY2UsIGFuZCBzaG91bGQgbm90IGJlIG92ZXJ3cml0dGVuXG4gICAgICogdW5sZXNzIHlvdSBhYnNvbHV0ZWx5IGtub3cgd2hhdCB5b3UncmUgZG9pbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Nub3dib2FyZH0gc25vd2JvYXJkXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc25vd2JvYXJkKSB7XG4gICAgICAgIHRoaXMuc25vd2JvYXJkID0gc25vd2JvYXJkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsdWdpbiBjb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB0cmVhdGVkIGFzIHRoZSB0cnVlIGNvbnN0cnVjdG9yIG9mIGEgcGx1Z2luLCBhbmQgY2FuIGJlIG92ZXJ3cml0dGVuLlxuICAgICAqIEl0IHdpbGwgYmUgY2FsbGVkIHN0cmFpZ2h0IGFmdGVyIGNvbnN0cnVjdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgcmVxdWlyZWQgcGx1Z2lucyBmb3IgdGhpcyBzcGVjaWZpYyBtb2R1bGUgdG8gd29yay5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX0gQW4gYXJyYXkgb2YgcGx1Z2lucyByZXF1aXJlZCBmb3IgdGhpcyBtb2R1bGUgdG8gd29yaywgYXMgc3RyaW5ncy5cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBsaXN0ZW5lciBtZXRob2RzIGZvciBnbG9iYWwgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1Z2luIGRlc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBGaXJlZCB3aGVuIHRoaXMgcGx1Z2luIGlzIHJlbW92ZWQuIENhbiBiZSBtYW51YWxseSBjYWxsZWQgaWYgeW91IGhhdmUgYW5vdGhlciBzY2VuYXJpbyBmb3JcbiAgICAgKiBkZXN0cnVjdGlvbiwgaWUuIHRoZSBlbGVtZW50IGF0dGFjaGVkIHRvIHRoZSBwbHVnaW4gaXMgcmVtb3ZlZCBvciBjaGFuZ2VkLlxuICAgICAqL1xuICAgIGRlc3RydWN0KCkge1xuICAgICAgICB0aGlzLmRldGFjaCgpO1xuICAgICAgICBkZWxldGUgdGhpcy5zbm93Ym9hcmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1Z2luIGRlc3RydWN0b3IgKG9sZCBtZXRob2QgbmFtZSkuXG4gICAgICpcbiAgICAgKiBBbGxvd3MgcHJldmlvdXMgdXNhZ2Ugb2YgdGhlIFwiZGVzdHJ1Y3RvclwiIG1ldGhvZCB0byBzdGlsbCB3b3JrLlxuICAgICAqL1xuICAgIGRlc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuL1BsdWdpbkJhc2UnO1xuXG4vKipcbiAqIFNpbmdsZXRvbiBwbHVnaW4gYWJzdHJhY3QuXG4gKlxuICogVGhpcyBpcyBhIHNwZWNpYWwgZGVmaW5pdGlvbiBjbGFzcyB0aGF0IHRoZSBTbm93Ym9hcmQgZnJhbWV3b3JrIHdpbGwgdXNlIHRvIGludGVycHJldCB0aGUgY3VycmVudCBwbHVnaW4gYXMgYVxuICogXCJzaW5nbGV0b25cIi4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IG9ubHkgb25lIGluc3RhbmNlIG9mIHRoZSBwbHVnaW4gY2xhc3MgaXMgdXNlZCBhY3Jvc3MgdGhlIGJvYXJkLlxuICpcbiAqIFNpbmdsZXRvbnMgYXJlIGluaXRpYWxpc2VkIG9uIHRoZSBcImRvbVJlYWR5XCIgZXZlbnQgYnkgZGVmYXVsdC5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xldG9uIGV4dGVuZHMgUGx1Z2luQmFzZSB7XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5cbi8qKlxuICogUmVxdWVzdCBwbHVnaW4uXG4gKlxuICogVGhpcyBpcyB0aGUgZGVmYXVsdCBBSkFYIGhhbmRsZXIgd2hpY2ggd2lsbCBydW4gdXNpbmcgdGhlIGBmZXRjaCgpYCBtZXRob2QgdGhhdCBpcyBkZWZhdWx0IGluIG1vZGVybiBicm93c2Vycy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdCBleHRlbmRzIFBsdWdpbkJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIGFjY2VwdHMgMiBvciAzIHBhcmFtZXRlcnMuXG4gICAgICpcbiAgICAgKiBJZiAyIHBhcmFtZXRlcnMgYXJlIHByb3ZpZGVkLCB0aGUgZmlyc3QgcGFyYW1ldGVyIGlzIHRoZSBoYW5kbGVyIG5hbWUgYW5kIHRoZSBzZWNvbmRcbiAgICAgKiBwYXJhbWV0ZXIgaXMgdGhlIG9wdGlvbnMuIFRoaXMgYXNzdW1lcyB0aGF0IHRoaXMgaXMgYSBkZXRhY2hlZCBBSkFYIHJlcXVlc3Qgbm90IGNvbm5lY3RlZCB0b1xuICAgICAqIGFuIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBJZiAzIHBhcmFtZXRlcnMgYXJlIHByb3ZpZGVkLCB0aGUgZmlyc3QgcGFyYW1ldGVyIGlzIGFuIGVsZW1lbnQgb3IgYSBzZWxlY3RvciwgYW5kIHRoZSBzZWNvbmRcbiAgICAgKiBhbmQgdGhpcmQgcGFyYW1ldGVycyBhcmUgdGhlIGhhbmRsZXIgYW5kIG9wdGlvbnMsIHJlc3BlY3RpdmVseS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8c3RyaW5nfSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBoYW5kbGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoZWxlbWVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvLyBBbGxvdyB0aGUgZWxlbWVudCB0byBiZSBhIGhhbmRsZXIgbmFtZS5cbiAgICAgICAgICAgIC8vIFRoaXMgYXNzdW1lcyB0aGUgcmVxdWVzdCBpcyBiZWluZyBtYWRlIGFnYWluc3Qgbm8gZWxlbWVudCwgYW5kIHRoZSBoYW5kbGVyIHBhcmFtZXRlclxuICAgICAgICAgICAgLy8gd2lsbCBjb250YWluIG9wdGlvbnMuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0hhbmRsZXJOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IGhhbmRsZXIgfHwge307XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZEVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBlbGVtZW50IHdhcyBmb3VuZCB3aXRoIHRoZSBnaXZlbiBzZWxlY3RvcjogJHtlbGVtZW50fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBtYXRjaGVkRWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZldGNoT3B0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IG51bGw7XG4gICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IG51bGw7XG4gICAgICAgIHRoaXMuY2FuY2VsbGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5jaGVja1JlcXVlc3QoKTtcbiAgICAgICAgaWYgKCF0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFNldHVwJywgdGhpcykpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnYWpheFNldHVwJywgeyBjYW5jZWxhYmxlOiB0cnVlIH0pO1xuICAgICAgICAgICAgZXZlbnQucmVxdWVzdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5kb0NsaWVudFZhbGlkYXRpb24oKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlybSkge1xuICAgICAgICAgICAgdGhpcy5kb0NvbmZpcm0oKS50aGVuKChjb25maXJtZWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9BamF4KCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NVcGRhdGUocmVzcG9uc2UpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5YX1dJTlRFUl9TVUNDRVNTID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Vycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZG9BamF4KCkudGhlbihcbiAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1VwZGF0ZShyZXNwb25zZSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuWF9XSU5URVJfU1VDQ0VTUyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXBlbmRlbmNpZXMgZm9yIHRoaXMgcGx1Z2luLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsnY29va2llJywgJ2pzb25QYXJzZXInXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgdGhlIGVsZW1lbnQgYW5kIGhhbmRsZXIgZ2l2ZW4gaW4gdGhlIHJlcXVlc3QuXG4gICAgICovXG4gICAgY2hlY2tSZXF1ZXN0KCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBlbGVtZW50IHByb3ZpZGVkIG11c3QgYmUgYW4gRWxlbWVudCBpbnN0YW5jZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBBSkFYIGhhbmRsZXIgbmFtZSBpcyBub3Qgc3BlY2lmaWVkLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzSGFuZGxlck5hbWUodGhpcy5oYW5kbGVyKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEFKQVggaGFuZGxlciBuYW1lLiBUaGUgY29ycmVjdCBoYW5kbGVyIG5hbWUgZm9ybWF0IGlzOiBcIm9uRXZlbnRcIi4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBGZXRjaCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgbWFkZSBhdmFpbGFibGUgZm9yIHBsdWdpbnMgdG8gZXh0ZW5kIG9yIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGZldGNoKCkgc2V0dGluZ3Mgd2l0aCB0aGVpciBvd24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBnZXRGZXRjaCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaE9wdGlvbnMgPSAodGhpcy5vcHRpb25zLmZldGNoT3B0aW9ucyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMuZmV0Y2hPcHRpb25zID09PSAnb2JqZWN0JylcbiAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLmZldGNoT3B0aW9uc1xuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIGJvZHk6IHRoaXMuZGF0YSxcbiAgICAgICAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICAgICAgICAgICAgbW9kZTogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhGZXRjaE9wdGlvbnMnLCB0aGlzLmZldGNoT3B0aW9ucywgdGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMudXJsLCB0aGlzLmZldGNoT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVuIGNsaWVudC1zaWRlIHZhbGlkYXRpb24gb24gdGhlIGZvcm0sIGlmIGF2YWlsYWJsZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGRvQ2xpZW50VmFsaWRhdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5icm93c2VyVmFsaWRhdGUgPT09IHRydWUgJiYgdGhpcy5mb3JtKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgQUpBWCBxdWVyeS5cbiAgICAgKlxuICAgICAqIFJldHVybnMgYSBQcm9taXNlIG9iamVjdCBmb3Igd2hlbiB0aGUgQUpBWCByZXF1ZXN0IGlzIGNvbXBsZXRlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGRvQWpheCgpIHtcbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBjYW5jZWwgdGhlIEFKQVggcmVxdWVzdCBiZWZvcmUgc2VuZGluZ1xuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhCZWZvcmVTZW5kJywgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBjYW5jZWxsZWQ6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFqYXhQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRGZXRjaCgpLnRoZW4oXG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2sgJiYgcmVzcG9uc2Uuc3RhdHVzICE9PSA0MDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5oZWFkZXJzLmhhcygnQ29udGVudC1UeXBlJykgJiYgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLmluY2x1ZGVzKCcvanNvbicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZURhdGEubWVzc2FnZSAmJiByZXNwb25zZURhdGEuZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEuZXhjZXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEuZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhLmxpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YS50cmFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoYFVuYWJsZSB0byBwYXJzZSBKU09OIHJlc3BvbnNlOiAke2Vycm9yfWApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS50ZXh0KCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlVGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IocmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoYFVuYWJsZSB0byBwcm9jZXNzIHJlc3BvbnNlOiAke2Vycm9yfWApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmhlYWRlcnMuaGFzKCdDb250ZW50LVR5cGUnKSAmJiByZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykuaW5jbHVkZXMoJy9qc29uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXNwb25zZURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYX1dJTlRFUl9TVUNDRVNTOiByZXNwb25zZS5zdGF0dXMgIT09IDQwNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhfV0lOVEVSX1JFU1BPTlNFX0NPREU6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoYFVuYWJsZSB0byBwYXJzZSBKU09OIHJlc3BvbnNlOiAke2Vycm9yfWApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnRleHQoKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnJlbmRlckVycm9yKGBVbmFibGUgdG8gcHJvY2VzcyByZXNwb25zZTogJHtlcnJvcn1gKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChyZXNwb25zZUVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnJlbmRlckVycm9yKGBVbmFibGUgdG8gcmV0cmlldmUgYSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXI6ICR7cmVzcG9uc2VFcnJvcn1gKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4U3RhcnQnLCBhamF4UHJvbWlzZSwgdGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhQcm9taXNlJyk7XG4gICAgICAgICAgICBldmVudC5wcm9taXNlID0gYWpheFByb21pc2U7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWpheFByb21pc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZXMgZm9yIHVwZGF0aW5nIHRoZSBwYXJ0aWFscyBmcm9tIHRoZSBBSkFYIHJlc3BvbnNlLlxuICAgICAqXG4gICAgICogSWYgYW55IHBhcnRpYWxzIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBBSkFYIHJlc3BvbnNlLCB0aGlzIG1ldGhvZCB3aWxsIGFsc28gYWN0aW9uIHRoZSBwYXJ0aWFsIHVwZGF0ZXMuXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIGEgUHJvbWlzZSBvYmplY3Qgd2hpY2ggdHJhY2tzIHdoZW4gdGhlIHBhcnRpYWwgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgcHJvY2Vzc1VwZGF0ZShyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuYmVmb3JlVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iZWZvcmVVcGRhdGUuYXBwbHkodGhpcywgW3Jlc3BvbnNlXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRXh0cmFjdCBwYXJ0aWFsIGluZm9ybWF0aW9uXG4gICAgICAgICAgICBjb25zdCBwYXJ0aWFscyA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMocmVzcG9uc2UpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gZW50cnk7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN1YnN0cigwLCA4KSAhPT0gJ1hfV0lOVEVSJykge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhwYXJ0aWFscykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLlhfV0lOVEVSX0FTU0VUUykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NBc3NldHMocmVzcG9uc2UuWF9XSU5URVJfQVNTRVRTKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IHRoaXMuc25vd2JvYXJkLmdsb2JhbFByb21pc2VFdmVudCgnYWpheEJlZm9yZVVwZGF0ZScsIHJlc3BvbnNlLCB0aGlzKTtcbiAgICAgICAgICAgIHByb21pc2VzLnRoZW4oXG4gICAgICAgICAgICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuWF9XSU5URVJfQVNTRVRTKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnByb2Nlc3NBc3NldHMocmVzcG9uc2UuWF9XSU5URVJfQVNTRVRTKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9VcGRhdGUocGFydGlhbHMpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxsb3cgZm9yIEhUTUwgcmVkcmF3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZXNvbHZlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGFydGlhbHMgd2l0aCB0aGUgZ2l2ZW4gY29udGVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJ0aWFsc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGRvVXBkYXRlKHBhcnRpYWxzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWZmZWN0ZWQgPSBbXTtcblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMocGFydGlhbHMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW3BhcnRpYWwsIGNvbnRlbnRdID0gZW50cnk7XG5cbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0b3IgPSAodGhpcy5vcHRpb25zLnVwZGF0ZSAmJiB0aGlzLm9wdGlvbnMudXBkYXRlW3BhcnRpYWxdKVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy51cGRhdGVbcGFydGlhbF1cbiAgICAgICAgICAgICAgICAgICAgOiBwYXJ0aWFsO1xuXG4gICAgICAgICAgICAgICAgbGV0IG1vZGUgPSAncmVwbGFjZSc7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3Iuc3Vic3RyKDAsIDEpID09PSAnQCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9ICdhcHBlbmQnO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdG9yLnN1YnN0cigwLCAxKSA9PT0gJ14nKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGUgPSAncHJlcGVuZCc7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0b3Iuc3Vic3RyKDAsIDEpICE9PSAnIycgJiYgc2VsZWN0b3Iuc3Vic3RyKDAsIDEpICE9PSAnLicpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9ICdub29wJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FwcGVuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ByZXBlbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQgKyBlbGVtZW50LmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm9vcCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFmZmVjdGVkLnB1c2goZWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcmUgdXBkYXRlIGV2ZW50IGZvciBlYWNoIGVsZW1lbnQgdGhhdCBpcyB1cGRhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFVwZGF0ZScsIGVsZW1lbnQsIGNvbnRlbnQsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhVcGRhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4VXBkYXRlQ29tcGxldGUnLCBhZmZlY3RlZCwgdGhpcyk7XG5cbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIHRoZSByZXNwb25zZSBkYXRhLlxuICAgICAqXG4gICAgICogVGhpcyBmaXJlcyBvZmYgYWxsIG5lY2Vzc2FyeSBwcm9jZXNzaW5nIGZ1bmN0aW9ucyBkZXBlbmRpbmcgb24gdGhlIHJlc3BvbnNlLCBpZS4gaWYgdGhlcmUncyBhbnkgZmxhc2hcbiAgICAgKiBtZXNzYWdlcyB0byBoYW5kbGUsIG9yIGFueSByZWRpcmVjdHMgdG8gYmUgdW5kZXJ0YWtlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHByb2Nlc3NSZXNwb25zZShyZXNwb25zZSkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN1Y2Nlc3MgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5zdWNjZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN1Y2Nlc3ModGhpcy5yZXNwb25zZURhdGEsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gY2FuY2VsIGFueSBmdXJ0aGVyIHJlc3BvbnNlIGhhbmRsaW5nXG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFN1Y2Nlc3MnLCB0aGlzLnJlc3BvbnNlRGF0YSwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyB0aGUgZWxlbWVudCB0byBjYW5jZWwgYW55IGZ1cnRoZXIgcmVzcG9uc2UgaGFuZGxpbmdcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhEb25lJywgeyBjYW5jZWxhYmxlOiB0cnVlIH0pO1xuICAgICAgICAgICAgZXZlbnQucmVzcG9uc2VEYXRhID0gdGhpcy5yZXNwb25zZURhdGE7XG4gICAgICAgICAgICBldmVudC5yZXF1ZXN0ID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mbGFzaCAmJiByZXNwb25zZS5YX1dJTlRFUl9GTEFTSF9NRVNTQUdFUykge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzRmxhc2hNZXNzYWdlcyhyZXNwb25zZS5YX1dJTlRFUl9GTEFTSF9NRVNTQUdFUyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBmb3IgYSByZWRpcmVjdCBmcm9tIHRoZSByZXNwb25zZSwgb3IgdXNlIHRoZSByZWRpcmVjdCBhcyBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMuXG4gICAgICAgIGlmICh0aGlzLnJlZGlyZWN0IHx8IHJlc3BvbnNlLlhfV0lOVEVSX1JFRElSRUNUKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZWRpcmVjdCh0aGlzLnJlZGlyZWN0IHx8IHJlc3BvbnNlLlhfV0lOVEVSX1JFRElSRUNUKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYW4gZXJyb3IgcmVzcG9uc2UgZnJvbSB0aGUgQUpBWCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogVGhpcyBmaXJlcyBvZmYgYWxsIG5lY2Vzc2FyeSBwcm9jZXNzaW5nIGZ1bmN0aW9ucyBkZXBlbmRpbmcgb24gdGhlIGVycm9yIHJlc3BvbnNlLCBpZS4gaWYgdGhlcmUncyBhbnkgZXJyb3Igb3JcbiAgICAgKiB2YWxpZGF0aW9uIG1lc3NhZ2VzIHRvIGhhbmRsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fEVycm9yfSBlcnJvclxuICAgICAqL1xuICAgIHByb2Nlc3NFcnJvcihlcnJvcikge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVycm9yICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXJyb3IodGhpcy5yZXNwb25zZUVycm9yLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIGNhbmNlbCBhbnkgZnVydGhlciBlcnJvciBoYW5kbGluZ1xuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhFcnJvcicsIHRoaXMucmVzcG9uc2VFcnJvciwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyB0aGUgZWxlbWVudCB0byBjYW5jZWwgYW55IGZ1cnRoZXIgZXJyb3IgaGFuZGxpbmdcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhGYWlsJywgeyBjYW5jZWxhYmxlOiB0cnVlIH0pO1xuICAgICAgICAgICAgZXZlbnQucmVzcG9uc2VFcnJvciA9IHRoaXMucmVzcG9uc2VFcnJvcjtcbiAgICAgICAgICAgIGV2ZW50LnJlcXVlc3QgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc2tpcEVycm9yID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIFByb2Nlc3MgdmFsaWRhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIGlmIChlcnJvci5YX1dJTlRFUl9FUlJPUl9GSUVMRFMpIHtcbiAgICAgICAgICAgICAgICBza2lwRXJyb3IgPSB0aGlzLnByb2Nlc3NWYWxpZGF0aW9uRXJyb3JzKGVycm9yLlhfV0lOVEVSX0VSUk9SX0ZJRUxEUyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlcnJvci5YX1dJTlRFUl9FUlJPUl9NRVNTQUdFICYmICFza2lwRXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvck1lc3NhZ2UoZXJyb3IuWF9XSU5URVJfRVJST1JfTUVTU0FHRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGEgcmVkaXJlY3QgcmVzcG9uc2UuXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGlzIHByb2Nlc3NvciB3aWxsIHNpbXBseSByZWRpcmVjdCB0aGUgdXNlciBpbiB0aGVpciBicm93c2VyLlxuICAgICAqXG4gICAgICogUGx1Z2lucyBjYW4gYXVnbWVudCB0aGlzIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgYGFqYXhSZWRpcmVjdGAgZXZlbnQuIFlvdSBtYXkgYWxzbyBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uYWxpdHkgb25cbiAgICAgKiBhIHBlci1yZXF1ZXN0IGJhc2lzIHRocm91Z2ggdGhlIGBoYW5kbGVSZWRpcmVjdFJlc3BvbnNlYCBjYWxsYmFjayBvcHRpb24uIElmIGEgYGZhbHNlYCBpcyByZXR1cm5lZCBmcm9tIGVpdGhlciwgdGhlXG4gICAgICogcmVkaXJlY3Qgd2lsbCBiZSBjYW5jZWxsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2Vzc1JlZGlyZWN0KHVybCkge1xuICAgICAgICAvLyBSdW4gYSBjdXN0b20gcGVyLXJlcXVlc3QgcmVkaXJlY3QgaGFuZGxlci4gSWYgZmFsc2UgaXMgcmV0dXJuZWQsIGRvbid0IHJ1biB0aGUgcmVkaXJlY3QuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZVJlZGlyZWN0UmVzcG9uc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlUmVkaXJlY3RSZXNwb25zZS5hcHBseSh0aGlzLCBbdXJsXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBjYW5jZWwgdGhlIHJlZGlyZWN0XG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFJlZGlyZWN0JywgdXJsLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluZGljYXRlIHRoYXQgdGhlIEFKQVggcmVxdWVzdCBpcyBmaW5pc2hlZCBpZiB3ZSdyZSBzdGlsbCBvbiB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGxvYWRpbmcgaW5kaWNhdG9yIGZvciByZWRpcmVjdHMgdGhhdCBqdXN0IGNoYW5nZSB0aGUgaGFzaCB2YWx1ZSBvZlxuICAgICAgICAvLyB0aGUgVVJMIGluc3RlYWQgb2YgbGVhdmluZyB0aGUgcGFnZSB3aWxsIHByb3Blcmx5IHN0b3AuXG4gICAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL29jdG9iZXJjbXMvb2N0b2Jlci9pc3N1ZXMvMjc4MFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgICAgICAgICBldmVudC5ldmVudE5hbWUgPSAnYWpheFJlZGlyZWN0ZWQnO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih1cmwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBhbiBlcnJvciBtZXNzYWdlLlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgdGhpcyBwcm9jZXNzb3Igd2lsbCBzaW1wbHkgYWxlcnQgdGhlIHVzZXIgdGhyb3VnaCBhIHNpbXBsZSBgYWxlcnQoKWAgY2FsbC5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4RXJyb3JNZXNzYWdlYCBldmVudC4gWW91IG1heSBhbHNvIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb25hbGl0eVxuICAgICAqIG9uIGEgcGVyLXJlcXVlc3QgYmFzaXMgdGhyb3VnaCB0aGUgYGhhbmRsZUVycm9yTWVzc2FnZWAgY2FsbGJhY2sgb3B0aW9uLiBJZiBhIGBmYWxzZWAgaXMgcmV0dXJuZWQgZnJvbSBlaXRoZXIsIHRoZVxuICAgICAqIGVycm9yIG1lc3NhZ2UgaGFuZGxpbmcgd2lsbCBiZSBjYW5jZWxsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHByb2Nlc3NFcnJvck1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICAvLyBSdW4gYSBjdXN0b20gcGVyLXJlcXVlc3QgaGFuZGxlciBmb3IgZXJyb3IgbWVzc2FnZXMuIElmIGZhbHNlIGlzIHJldHVybmVkLCBkbyBub3QgcHJvY2VzcyB0aGUgZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgLy8gYW55IGZ1cnRoZXIuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZUVycm9yTWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGVFcnJvck1lc3NhZ2UuYXBwbHkodGhpcywgW21lc3NhZ2VdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIGNhbmNlbCB0aGUgZXJyb3IgbWVzc2FnZSBiZWluZyBzaG93blxuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhFcnJvck1lc3NhZ2UnLCBtZXNzYWdlLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJ5IGRlZmF1bHQsIHNob3cgYSBicm93c2VyIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgd2luZG93LmFsZXJ0KG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBmbGFzaCBtZXNzYWdlcyBmcm9tIHRoZSByZXNwb25zZS5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIG5vIGZsYXNoIG1lc3NhZ2UgaGFuZGxpbmcgd2lsbCBvY2N1ci5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4Rmxhc2hNZXNzYWdlc2AgZXZlbnQuIFlvdSBtYXkgYWxzbyBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uYWxpdHlcbiAgICAgKiBvbiBhIHBlci1yZXF1ZXN0IGJhc2lzIHRocm91Z2ggdGhlIGBoYW5kbGVGbGFzaE1lc3NhZ2VzYCBjYWxsYmFjayBvcHRpb24uIElmIGEgYGZhbHNlYCBpcyByZXR1cm5lZCBmcm9tIGVpdGhlciwgdGhlXG4gICAgICogZmxhc2ggbWVzc2FnZSBoYW5kbGluZyB3aWxsIGJlIGNhbmNlbGxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlc1xuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgcHJvY2Vzc0ZsYXNoTWVzc2FnZXMobWVzc2FnZXMpIHtcbiAgICAgICAgLy8gUnVuIGEgY3VzdG9tIHBlci1yZXF1ZXN0IGZsYXNoIGhhbmRsZXIuIElmIGZhbHNlIGlzIHJldHVybmVkLCBkb24ndCBzaG93IHRoZSBmbGFzaCBtZXNzYWdlXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZUZsYXNoTWVzc2FnZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlRmxhc2hNZXNzYWdlcy5hcHBseSh0aGlzLCBbbWVzc2FnZXNdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheEZsYXNoTWVzc2FnZXMnLCBtZXNzYWdlcywgdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIHZhbGlkYXRpb24gZXJyb3JzIGZvciBmaWVsZHMuXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCBubyB2YWxpZGF0aW9uIGVycm9yIGhhbmRsaW5nIHdpbGwgb2NjdXIuXG4gICAgICpcbiAgICAgKiBQbHVnaW5zIGNhbiBhdWdtZW50IHRoaXMgZnVuY3Rpb25hbGl0eSBmcm9tIHRoZSBgYWpheFZhbGlkYXRpb25FcnJvcnNgIGV2ZW50LiBZb3UgbWF5IGFsc28gb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbmFsaXR5XG4gICAgICogb24gYSBwZXItcmVxdWVzdCBiYXNpcyB0aHJvdWdoIHRoZSBgaGFuZGxlVmFsaWRhdGlvbkVycm9yc2AgY2FsbGJhY2sgb3B0aW9uLiBJZiBhIGBmYWxzZWAgaXMgcmV0dXJuZWQgZnJvbSBlaXRoZXIsIHRoZVxuICAgICAqIHZhbGlkYXRpb24gZXJyb3IgaGFuZGxpbmcgd2lsbCBiZSBjYW5jZWxsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZmllbGRzXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBwcm9jZXNzVmFsaWRhdGlvbkVycm9ycyhmaWVsZHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlVmFsaWRhdGlvbkVycm9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGVWYWxpZGF0aW9uRXJyb3JzLmFwcGx5KHRoaXMsIFt0aGlzLmZvcm0sIGZpZWxkc10pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBjYW5jZWwgdGhlIHZhbGlkYXRpb24gZXJyb3JzIGJlaW5nIGhhbmRsZWRcbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4VmFsaWRhdGlvbkVycm9ycycsIHRoaXMuZm9ybSwgZmllbGRzLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBhc3NldHMgcmV0dXJuZWQgYnkgYW4gQUpBWCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgbm8gYXNzZXQgcHJvY2Vzc2luZyB3aWxsIG9jY3VyIGFuZCB0aGlzIHdpbGwgcmV0dXJuIGEgcmVzb2x2ZWQgUHJvbWlzZS5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4TG9hZEFzc2V0c2AgZXZlbnQuIFRoaXMgZXZlbnQgaXMgY29uc2lkZXJlZCBibG9ja2luZywgYW5kXG4gICAgICogYWxsb3dzIGFzc2V0cyB0byBiZSBsb2FkZWQgb3IgcHJvY2Vzc2VkIGJlZm9yZSBjb250aW51aW5nIHdpdGggYW55IGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhc3NldHNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBwcm9jZXNzQXNzZXRzKGFzc2V0cykge1xuICAgICAgICByZXR1cm4gdGhpcy5zbm93Ym9hcmQuZ2xvYmFsUHJvbWlzZUV2ZW50KCdhamF4TG9hZEFzc2V0cycsIGFzc2V0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uZmlybXMgdGhlIHJlcXVlc3Qgd2l0aCB0aGUgdXNlciBiZWZvcmUgcHJvY2VlZGluZy5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYW4gYXN5bmNocm9ub3VzIG1ldGhvZC4gQnkgZGVmYXVsdCwgaXQgd2lsbCB1c2UgdGhlIGJyb3dzZXIncyBgY29uZmlybSgpYCBtZXRob2QgdG8gcXVlcnkgdGhlIHVzZXIgdG9cbiAgICAgKiBjb25maXJtIHRoZSBhY3Rpb24uIFRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGEgUHJvbWlzZSB3aXRoIGEgYm9vbGVhbiB2YWx1ZSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgdXNlciBjb25maXJtZWRcbiAgICAgKiBvciBub3QuXG4gICAgICpcbiAgICAgKiBQbHVnaW5zIGNhbiBhdWdtZW50IHRoaXMgZnVuY3Rpb25hbGl0eSBmcm9tIHRoZSBgYWpheENvbmZpcm1NZXNzYWdlYCBldmVudC4gWW91IG1heSBhbHNvIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb25hbGl0eVxuICAgICAqIG9uIGEgcGVyLXJlcXVlc3QgYmFzaXMgdGhyb3VnaCB0aGUgYGhhbmRsZUNvbmZpcm1NZXNzYWdlYCBjYWxsYmFjayBvcHRpb24uIElmIGEgYGZhbHNlYCBpcyByZXR1cm5lZCBmcm9tIGVpdGhlcixcbiAgICAgKiB0aGUgY29uZmlybWF0aW9uIGlzIGFzc3VtZWQgdG8gaGF2ZSBiZWVuIGRlbmllZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGFzeW5jIGRvQ29uZmlybSgpIHtcbiAgICAgICAgLy8gQWxsb3cgZm9yIGEgY3VzdG9tIGhhbmRsZXIgZm9yIHRoZSBjb25maXJtYXRpb24sIHBlciByZXF1ZXN0LlxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVDb25maXJtTWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGVDb25maXJtTWVzc2FnZS5hcHBseSh0aGlzLCBbdGhpcy5jb25maXJtXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIG5vIHBsdWdpbnMgaGF2ZSBjdXN0b21pc2VkIHRoZSBjb25maXJtYXRpb24sIHVzZSBhIHNpbXBsZSBicm93c2VyIGNvbmZpcm1hdGlvbi5cbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmxpc3RlbnNUb0V2ZW50KCdhamF4Q29uZmlybU1lc3NhZ2UnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuY29uZmlybSh0aGlzLmNvbmZpcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUnVuIGN1c3RvbSBwbHVnaW4gY29uZmlybWF0aW9uc1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IHRoaXMuc25vd2JvYXJkLmdsb2JhbFByb21pc2VFdmVudCgnYWpheENvbmZpcm1NZXNzYWdlJywgdGhpcy5jb25maXJtLCB0aGlzKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZnVsZmlsbGVkID0gYXdhaXQgcHJvbWlzZXM7XG4gICAgICAgICAgICBpZiAoZnVsZmlsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyBvZmYgY29tcGxldGlvbiBldmVudHMgZm9yIHRoZSBSZXF1ZXN0LlxuICAgICAqL1xuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBsZXRlICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMuY29tcGxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb21wbGV0ZSh0aGlzLnJlc3BvbnNlRGF0YSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhEb25lJywgdGhpcy5yZXNwb25zZURhdGEsIHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdhamF4QWx3YXlzJyk7XG4gICAgICAgICAgICBldmVudC5yZXF1ZXN0ID0gdGhpcztcbiAgICAgICAgICAgIGV2ZW50LnJlc3BvbnNlRGF0YSA9IHRoaXMucmVzcG9uc2VEYXRhO1xuICAgICAgICAgICAgZXZlbnQucmVzcG9uc2VFcnJvciA9IHRoaXMucmVzcG9uc2VFcnJvcjtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgb2ZmIHRoZSBkZXN0cnVjdG9yXG4gICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICB9XG5cbiAgICBnZXQgZm9ybSgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5mb3JtKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5mb3JtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5mb3JtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZm9ybTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC50YWdOYW1lID09PSAnRk9STScpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICB9XG5cbiAgICBnZXQgY29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMuaGFuZGxlcixcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgaGVhZGVycygpIHtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JywgLy8gS2VlcHMgY29tcGF0aWJpbGl0eSB3aXRoIGpRdWVyeSBBSkFYXG4gICAgICAgICAgICAnWC1XSU5URVItUkVRVUVTVC1IQU5ETEVSJzogdGhpcy5oYW5kbGVyLFxuICAgICAgICAgICAgJ1gtV0lOVEVSLVJFUVVFU1QtUEFSVElBTFMnOiB0aGlzLmV4dHJhY3RQYXJ0aWFscyh0aGlzLm9wdGlvbnMudXBkYXRlIHx8IFtdKSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5mbGFzaCkge1xuICAgICAgICAgICAgaGVhZGVyc1snWC1XSU5URVItUkVRVUVTVC1GTEFTSCddID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnhzcmZUb2tlbikge1xuICAgICAgICAgICAgaGVhZGVyc1snWC1YU1JGLVRPS0VOJ10gPSB0aGlzLnhzcmZUb2tlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIGdldCBsb2FkaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvYWRpbmcgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy51cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfVxuXG4gICAgZ2V0IHJlZGlyZWN0KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMub3B0aW9ucy5yZWRpcmVjdCAmJiB0aGlzLm9wdGlvbnMucmVkaXJlY3QubGVuZ3RoKSA/IHRoaXMub3B0aW9ucy5yZWRpcmVjdCA6IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0IGZsYXNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZsYXNoIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBmaWxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5maWxlcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKEZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5kZWJ1ZygnVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgZmlsZSB1cGxvYWRzJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgeHNyZlRva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zbm93Ym9hcmQuY29va2llKCkuZ2V0KCdYU1JGLVRPS0VOJyk7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGEoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSAodHlwZW9mIHRoaXMub3B0aW9ucy5kYXRhID09PSAnb2JqZWN0JykgPyB0aGlzLm9wdGlvbnMuZGF0YSA6IHt9O1xuXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSB8fCB1bmRlZmluZWQpO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICB9XG5cbiAgICBnZXQgY29uZmlybSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb25maXJtIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHBhcnRpYWxzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHVwZGF0ZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZXh0cmFjdFBhcnRpYWxzKHVwZGF0ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModXBkYXRlKS5qb2luKCcmJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhbiBlcnJvciB3aXRoIHVzZWZ1bCBkZWJ1ZyBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgaW50ZXJuYWxseSB3aGVuIHRoZSBBSkFYIHJlcXVlc3QgY291bGQgbm90IGJlIGNvbXBsZXRlZCBvciBwcm9jZXNzZWQgY29ycmVjdGx5IGR1ZSB0byBhbiBlcnJvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV4Y2VwdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpbmVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0cmFjZVxuICAgICAqIEByZXR1cm5zIHtFcnJvcn1cbiAgICAgKi9cbiAgICByZW5kZXJFcnJvcihtZXNzYWdlLCBleGNlcHRpb24sIGZpbGUsIGxpbmUsIHRyYWNlKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICBlcnJvci5leGNlcHRpb24gPSBleGNlcHRpb24gfHwgbnVsbDtcbiAgICAgICAgZXJyb3IuZmlsZSA9IGZpbGUgfHwgbnVsbDtcbiAgICAgICAgZXJyb3IubGluZSA9IGxpbmUgfHwgbnVsbDtcbiAgICAgICAgZXJyb3IudHJhY2UgPSB0cmFjZSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBhIGdpdmVuIHN0cmluZyB0byBzZWUgaWYgaXQgaXMgYSB2YWxpZCBBSkFYIGhhbmRsZXIgbmFtZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXNIYW5kbGVyTmFtZShuYW1lKSB7XG4gICAgICAgIHJldHVybiAvXig/Olxcdys6ezJ9KT9vbltBLVowLTldLy50ZXN0KG5hbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogRW5hYmxlIERhdGEgQXR0cmlidXRlcyBBUEkgZm9yIEFKQVggcmVxdWVzdHMuXG4gKlxuICogVGhpcyBpcyBhbiBleHRlbnNpb24gb2YgdGhlIGJhc2UgQUpBWCBmdW5jdGlvbmFsaXR5IHRoYXQgaW5jbHVkZXMgaGFuZGxpbmcgb2YgSFRNTCBkYXRhIGF0dHJpYnV0ZXMgZm9yIHByb2Nlc3NpbmdcbiAqIEFKQVggcmVxdWVzdHMuIEl0IGlzIHNlcGFyYXRlZCBmcm9tIHRoZSBiYXNlIEFKQVggZnVuY3Rpb25hbGl0eSB0byBhbGxvdyBkZXZlbG9wZXJzIHRvIG9wdC1vdXQgb2YgZGF0YSBhdHRyaWJ1dGVcbiAqIHJlcXVlc3RzIGlmIHRoZXkgZG8gbm90IGludGVuZCB0byB1c2UgdGhlbS5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0cmlidXRlUmVxdWVzdCBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgLyoqXG4gICAgICogTGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVhZHk6ICdyZWFkeScsXG4gICAgICAgICAgICBhamF4U2V0dXA6ICdvbkFqYXhTZXR1cCcsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVhZHkgZXZlbnQgY2FsbGJhY2suXG4gICAgICpcbiAgICAgKiBBdHRhY2hlcyBoYW5kbGVycyB0byB0aGUgd2luZG93IHRvIGxpc3RlbiBmb3IgYWxsIHJlcXVlc3QgaW50ZXJhY3Rpb25zLlxuICAgICAqL1xuICAgIHJlYWR5KCkge1xuICAgICAgICB0aGlzLmF0dGFjaEhhbmRsZXJzKCk7XG4gICAgICAgIHRoaXMuZGlzYWJsZURlZmF1bHRGb3JtVmFsaWRhdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlcGVuZGVuY2llcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbJ3JlcXVlc3QnLCAnanNvblBhcnNlciddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBEZXRhY2hlcyBhbGwgaGFuZGxlcnMuXG4gICAgICovXG4gICAgZGVzdHJ1Y3QoKSB7XG4gICAgICAgIHRoaXMuZGV0YWNoSGFuZGxlcnMoKTtcblxuICAgICAgICBzdXBlci5kZXN0cnVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIHRoZSBuZWNlc3NhcnkgaGFuZGxlcnMgZm9yIGFsbCByZXF1ZXN0IGludGVyYWN0aW9ucy5cbiAgICAgKi9cbiAgICBhdHRhY2hIYW5kbGVycygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4gdGhpcy5jaGFuZ2VIYW5kbGVyKGV2ZW50KSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gdGhpcy5jbGlja0hhbmRsZXIoZXZlbnQpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHRoaXMua2V5RG93bkhhbmRsZXIoZXZlbnQpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4gdGhpcy5zdWJtaXRIYW5kbGVyKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZXMgZGVmYXVsdCBmb3JtIHZhbGlkYXRpb24gZm9yIEFKQVggZm9ybXMuXG4gICAgICpcbiAgICAgKiBBIGZvcm0gdGhhdCBjb250YWlucyBhIGBkYXRhLXJlcXVlc3RgIGF0dHJpYnV0ZSB0byBzcGVjaWZ5IGFuIEFKQVggY2FsbCB3aXRob3V0IGluY2x1ZGluZyBhIGBkYXRhLWJyb3dzZXItdmFsaWRhdGVgXG4gICAgICogYXR0cmlidXRlIG1lYW5zIHRoYXQgdGhlIEFKQVggY2FsbGJhY2sgZnVuY3Rpb24gd2lsbCBsaWtlbHkgYmUgaGFuZGxpbmcgdGhlIHZhbGlkYXRpb24gaW5zdGVhZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlRGVmYXVsdEZvcm1WYWxpZGF0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtW2RhdGEtcmVxdWVzdF06bm90KFtkYXRhLWJyb3dzZXItdmFsaWRhdGVdKScpLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICAgICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdub3ZhbGlkYXRlJywgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGFjaGVzIHRoZSBuZWNlc3NhcnkgaGFuZGxlcnMgZm9yIGFsbCByZXF1ZXN0IGludGVyYWN0aW9ucy5cbiAgICAgKi9cbiAgICBkZXRhY2hIYW5kbGVycygpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4gdGhpcy5jaGFuZ2VIYW5kbGVyKGV2ZW50KSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gdGhpcy5jbGlja0hhbmRsZXIoZXZlbnQpKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHRoaXMua2V5RG93bkhhbmRsZXIoZXZlbnQpKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4gdGhpcy5zdWJtaXRIYW5kbGVyKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBjaGFuZ2VzIHRvIHNlbGVjdCwgcmFkaW8sIGNoZWNrYm94IGFuZCBmaWxlIGlucHV0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgY2hhbmdlSGFuZGxlcihldmVudCkge1xuICAgICAgICAvLyBDaGVjayB0aGF0IHdlIGFyZSBjaGFuZ2luZyBhIHZhbGlkIGVsZW1lbnRcbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcyhcbiAgICAgICAgICAgICdzZWxlY3RbZGF0YS1yZXF1ZXN0XSwgaW5wdXRbdHlwZT1yYWRpb11bZGF0YS1yZXF1ZXN0XSwgaW5wdXRbdHlwZT1jaGVja2JveF1bZGF0YS1yZXF1ZXN0XSwgaW5wdXRbdHlwZT1maWxlXVtkYXRhLXJlcXVlc3RdJyxcbiAgICAgICAgKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9jZXNzUmVxdWVzdE9uRWxlbWVudChldmVudC50YXJnZXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgY2xpY2tzIG9uIGh5cGVybGlua3MgYW5kIGJ1dHRvbnMuXG4gICAgICpcbiAgICAgKiBUaGlzIGV2ZW50IGNhbiBidWJibGUgdXAgdGhlIGhpZXJhcmNoeSB0byBmaW5kIGEgc3VpdGFibGUgcmVxdWVzdCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBjbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgIHdoaWxlIChjdXJyZW50RWxlbWVudCAmJiBjdXJyZW50RWxlbWVudC50YWdOYW1lICE9PSAnSFRNTCcpIHtcbiAgICAgICAgICAgIGlmICghY3VycmVudEVsZW1lbnQubWF0Y2hlcyhcbiAgICAgICAgICAgICAgICAnYVtkYXRhLXJlcXVlc3RdLCBidXR0b25bZGF0YS1yZXF1ZXN0XSwgaW5wdXRbdHlwZT1idXR0b25dW2RhdGEtcmVxdWVzdF0sIGlucHV0W3R5cGU9c3VibWl0XVtkYXRhLXJlcXVlc3RdJyxcbiAgICAgICAgICAgICkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVxdWVzdE9uRWxlbWVudChjdXJyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGtleSBwcmVzc2VzIG9uIGlucHV0c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgICAgICAvLyBDaGVjayB0aGF0IHdlIGFyZSBpbnB1dHRpbmcgaW50byBhIHZhbGlkIGVsZW1lbnRcbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcyhcbiAgICAgICAgICAgICdpbnB1dCcsXG4gICAgICAgICkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIHRoYXQgdGhlIGlucHV0IHR5cGUgaXMgdmFsaWRcbiAgICAgICAgY29uc3QgdmFsaWRUeXBlcyA9IFtcbiAgICAgICAgICAgICdjaGVja2JveCcsXG4gICAgICAgICAgICAnY29sb3InLFxuICAgICAgICAgICAgJ2RhdGUnLFxuICAgICAgICAgICAgJ2RhdGV0aW1lJyxcbiAgICAgICAgICAgICdkYXRldGltZS1sb2NhbCcsXG4gICAgICAgICAgICAnZW1haWwnLFxuICAgICAgICAgICAgJ2ltYWdlJyxcbiAgICAgICAgICAgICdtb250aCcsXG4gICAgICAgICAgICAnbnVtYmVyJyxcbiAgICAgICAgICAgICdwYXNzd29yZCcsXG4gICAgICAgICAgICAncmFkaW8nLFxuICAgICAgICAgICAgJ3JhbmdlJyxcbiAgICAgICAgICAgICdzZWFyY2gnLFxuICAgICAgICAgICAgJ3RlbCcsXG4gICAgICAgICAgICAndGV4dCcsXG4gICAgICAgICAgICAndGltZScsXG4gICAgICAgICAgICAndXJsJyxcbiAgICAgICAgICAgICd3ZWVrJyxcbiAgICAgICAgXTtcbiAgICAgICAgaWYgKHZhbGlkVHlwZXMuaW5kZXhPZihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd0eXBlJykpID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiBldmVudC50YXJnZXQubWF0Y2hlcygnKltkYXRhLXJlcXVlc3RdJykpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1JlcXVlc3RPbkVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnKltkYXRhLXRyYWNrLWlucHV0XScpKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWNrSW5wdXQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgZm9ybSBzdWJtaXNzaW9ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgc3VibWl0SGFuZGxlcihldmVudCkge1xuICAgICAgICAvLyBDaGVjayB0aGF0IHdlIGFyZSBzdWJtaXR0aW5nIGEgdmFsaWQgZm9ybVxuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKFxuICAgICAgICAgICAgJ2Zvcm1bZGF0YS1yZXF1ZXN0XScsXG4gICAgICAgICkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5wcm9jZXNzUmVxdWVzdE9uRWxlbWVudChldmVudC50YXJnZXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBhIHJlcXVlc3Qgb24gYSBnaXZlbiBlbGVtZW50LCB1c2luZyBpdHMgZGF0YSBhdHRyaWJ1dGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgICAqL1xuICAgIHByb2Nlc3NSZXF1ZXN0T25FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGVsZW1lbnQuZGF0YXNldDtcblxuICAgICAgICBjb25zdCBoYW5kbGVyID0gU3RyaW5nKGRhdGEucmVxdWVzdCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb25maXJtOiAoJ3JlcXVlc3RDb25maXJtJyBpbiBkYXRhKSA/IFN0cmluZyhkYXRhLnJlcXVlc3RDb25maXJtKSA6IG51bGwsXG4gICAgICAgICAgICByZWRpcmVjdDogKCdyZXF1ZXN0UmVkaXJlY3QnIGluIGRhdGEpID8gU3RyaW5nKGRhdGEucmVxdWVzdFJlZGlyZWN0KSA6IG51bGwsXG4gICAgICAgICAgICBsb2FkaW5nOiAoJ3JlcXVlc3RMb2FkaW5nJyBpbiBkYXRhKSA/IFN0cmluZyhkYXRhLnJlcXVlc3RMb2FkaW5nKSA6IG51bGwsXG4gICAgICAgICAgICBmbGFzaDogKCdyZXF1ZXN0Rmxhc2gnIGluIGRhdGEpLFxuICAgICAgICAgICAgZmlsZXM6ICgncmVxdWVzdEZpbGVzJyBpbiBkYXRhKSxcbiAgICAgICAgICAgIGJyb3dzZXJWYWxpZGF0ZTogKCdyZXF1ZXN0QnJvd3NlclZhbGlkYXRlJyBpbiBkYXRhKSxcbiAgICAgICAgICAgIGZvcm06ICgncmVxdWVzdEZvcm0nIGluIGRhdGEpID8gU3RyaW5nKGRhdGEucmVxdWVzdEZvcm0pIDogbnVsbCxcbiAgICAgICAgICAgIHVybDogKCdyZXF1ZXN0VXJsJyBpbiBkYXRhKSA/IFN0cmluZyhkYXRhLnJlcXVlc3RVcmwpIDogbnVsbCxcbiAgICAgICAgICAgIHVwZGF0ZTogKCdyZXF1ZXN0VXBkYXRlJyBpbiBkYXRhKSA/IHRoaXMucGFyc2VEYXRhKFN0cmluZyhkYXRhLnJlcXVlc3RVcGRhdGUpKSA6IFtdLFxuICAgICAgICAgICAgZGF0YTogKCdyZXF1ZXN0RGF0YScgaW4gZGF0YSkgPyB0aGlzLnBhcnNlRGF0YShTdHJpbmcoZGF0YS5yZXF1ZXN0RGF0YSkpIDogW10sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zbm93Ym9hcmQucmVxdWVzdChlbGVtZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGFuIEFKQVggcmVxdWVzdCB2aWEgSFRNTCBhdHRyaWJ1dGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gICAgICovXG4gICAgb25BamF4U2V0dXAocmVxdWVzdCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QuZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gcmVxdWVzdC5lbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAuLi50aGlzLmdldFBhcmVudFJlcXVlc3REYXRhKHJlcXVlc3QuZWxlbWVudCksXG4gICAgICAgICAgICAuLi5yZXF1ZXN0Lm9wdGlvbnMuZGF0YSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocmVxdWVzdC5lbGVtZW50ICYmIHJlcXVlc3QuZWxlbWVudC5tYXRjaGVzKCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgYnV0dG9uJykgJiYgIXJlcXVlc3QuZm9ybSAmJiBmaWVsZE5hbWUgJiYgIXJlcXVlc3Qub3B0aW9ucy5kYXRhW2ZpZWxkTmFtZV0pIHtcbiAgICAgICAgICAgIGRhdGFbZmllbGROYW1lXSA9IHJlcXVlc3QuZWxlbWVudC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qub3B0aW9ucy5kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYW5kIGNvbGxhdGVzIGFsbCBkYXRhIGZyb20gZWxlbWVudHMgdXAgdGhlIERPTSBoaWVyYXJjaHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0UGFyZW50UmVxdWVzdERhdGEodGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9IHRhcmdldDtcblxuICAgICAgICB3aGlsZSAoY3VycmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJiBjdXJyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnRhZ05hbWUgIT09ICdIVE1MJykge1xuICAgICAgICAgICAgZWxlbWVudHMucHVzaChjdXJyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50RGF0YSA9IGVsZW1lbnQuZGF0YXNldDtcblxuICAgICAgICAgICAgaWYgKCdyZXF1ZXN0RGF0YScgaW4gZWxlbWVudERhdGEpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnBhcnNlRGF0YShlbGVtZW50RGF0YS5yZXF1ZXN0RGF0YSksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGRhdGEgaW4gdGhlIFdpbnRlci9PY3RvYmVyIEpTT04gZm9ybWF0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGFcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHBhcnNlRGF0YShkYXRhKSB7XG4gICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc25vd2JvYXJkLmpzb25wYXJzZXIoKS5wYXJzZShgeyR7ZGF0YX19YCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgcGFyc2luZyB0aGUgZGF0YSBhdHRyaWJ1dGUgb24gZWxlbWVudDogJHtlLm1lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFja0lucHV0KGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgeyBsYXN0VmFsdWUgfSA9IGVsZW1lbnQuZGF0YXNldDtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBlbGVtZW50LmRhdGFzZXQudHJhY2tJbnB1dCB8fCAzMDA7XG5cbiAgICAgICAgaWYgKGxhc3RWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGxhc3RWYWx1ZSA9PT0gZWxlbWVudC52YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNldFRyYWNrSW5wdXRUaW1lcihlbGVtZW50KTtcblxuICAgICAgICBlbGVtZW50LmRhdGFzZXQuaW5wdXRUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmRhdGFzZXQucmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1JlcXVlc3RPbkVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUcmF2ZXJzZSB1cCB0aGUgaGllcmFyY2h5IGFuZCBmaW5kIGEgZm9ybSB0aGF0IHNlbmRzIGFuIEFKQVggcXVlcnlcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJiBjdXJyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnRhZ05hbWUgIT09ICdIVE1MJykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RWxlbWVudC50YWdOYW1lID09PSAnRk9STScgJiYgY3VycmVudEVsZW1lbnQuZGF0YXNldC5yZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1JlcXVlc3RPbkVsZW1lbnQoY3VycmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGludGVydmFsKTtcbiAgICB9XG5cbiAgICByZXNldFRyYWNrSW5wdXRUaW1lcihlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LmRhdGFzZXQuaW5wdXRUaW1lcikge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChlbGVtZW50LmRhdGFzZXQuaW5wdXRUaW1lcik7XG4gICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuaW5wdXRUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIEFzc2V0IExvYWRlci5cbiAqXG4gKiBQcm92aWRlcyBzaW1wbGUgYXNzZXQgbG9hZGluZyBmdW5jdGlvbmFsaXR5IGZvciBTbm93Ym9hcmQsIG1ha2luZyBpdCBlYXN5IHRvIHByZS1sb2FkIGltYWdlcyBvclxuICogaW5jbHVkZSBKYXZhU2NyaXB0IG9yIENTUyBhc3NldHMgb24gdGhlIGZseS5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGlzIGxvYWRlciB3aWxsIGxpc3RlbiB0byBhbnkgYXNzZXRzIHRoYXQgaGF2ZSBiZWVuIHJlcXVlc3RlZCB0byBsb2FkIGluIGFuIEFKQVhcbiAqIHJlc3BvbnNlLCBzdWNoIGFzIHJlc3BvbnNlcyBmcm9tIGEgY29tcG9uZW50LlxuICpcbiAqIFlvdSBjYW4gYWxzbyBsb2FkIGFzc2V0cyBtYW51YWxseSBieSBjYWxsaW5nIHRoZSBmb2xsb3dpbmc6XG4gKlxuICogYGBganNcbiAqIFNub3dib2FyZC5hZGRQbHVnaW4oJ2Fzc2V0TG9hZGVyJywgQXNzZXRMb2FkZXIpO1xuICogU25vd2JvYXJkLmFzc2V0TG9hZGVyKCkucHJvY2Vzc0Fzc2V0cyhhc3NldHMpO1xuICogYGBgXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0TG9hZGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBFdmVudCBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhamF4TG9hZEFzc2V0czogJ2xvYWQnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlcGVuZGVuY2llcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAndXJsJyxcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGFuZCBsb2FkIGFzc2V0cy5cbiAgICAgKlxuICAgICAqIFRoZSBgYXNzZXRzYCBwcm9wZXJ0eSBvZiB0aGlzIG1ldGhvZCByZXF1aXJlcyBhbiBvYmplY3Qgd2l0aCBhbnkgb2YgdGhlIGZvbGxvd2luZyBrZXlzIGFuZCBhblxuICAgICAqIGFycmF5IG9mIHBhdGhzOlxuICAgICAqXG4gICAgICogLSBganNgOiBBbiBhcnJheSBvZiBKYXZhU2NyaXB0IFVSTHMgdG8gbG9hZFxuICAgICAqIC0gYGNzc2A6IEFuIGFycmF5IG9mIENTUyBzdHlsZXNoZWV0IFVSTHMgdG8gbG9hZFxuICAgICAqIC0gYGltZ2A6IEFuIGFycmF5IG9mIGltYWdlIFVSTHMgdG8gcHJlLWxvYWRcbiAgICAgKlxuICAgICAqIEJvdGggYGpzYCBhbmQgYGNzc2AgZmlsZXMgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGluamVjdGVkLCBob3dldmVyIGBpbWdgIGZpbGVzIHdpbGwgbm90LlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhbGwgcmVxdWlyZWQgYXNzZXRzIGFyZSBsb2FkZWQuIElmIGFuXG4gICAgICogYXNzZXQgZmFpbHMgdG8gbG9hZCwgdGhpcyBQcm9taXNlIHdpbGwgYmUgcmVqZWN0ZWQuXG4gICAgICpcbiAgICAgKiBFU0xpbnQgKlJFQUxMWSogZG9lc24ndCBsaWtlIHRoaXMgY29kZSwgYnV0IGlnbm9yZSBpdC4gSXQncyB0aGUgb25seSB3YXkgaXQgd29ya3MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYXNzZXRzXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgYXN5bmMgbG9hZChhc3NldHMpIHtcbiAgICAgICAgaWYgKGFzc2V0cy5qcyAmJiBhc3NldHMuanMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBzY3JpcHQgb2YgYXNzZXRzLmpzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkU2NyaXB0KHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXNzZXRzLmNzcyAmJiBhc3NldHMuY3NzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3R5bGUgb2YgYXNzZXRzLmNzcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFN0eWxlKHN0eWxlKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhc3NldHMuaW1nICYmIGFzc2V0cy5pbWcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpbWFnZSBvZiBhc3NldHMuaW1nKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkSW1hZ2UoaW1hZ2UpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluamVjdHMgYW5kIGxvYWRzIGEgSmF2YVNjcmlwdCBVUkwgaW50byB0aGUgRE9NLlxuICAgICAqXG4gICAgICogVGhlIHNjcmlwdCB3aWxsIGJlIGFwcGVuZGVkIGJlZm9yZSB0aGUgY2xvc2luZyBgPC9ib2R5PmAgdGFnLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNjcmlwdFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGxvYWRTY3JpcHQoc2NyaXB0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyBSZXNvbHZlIHNjcmlwdCBVUkxcbiAgICAgICAgICAgIHNjcmlwdCA9IHRoaXMuc25vd2JvYXJkLnVybCgpLmFzc2V0KHNjcmlwdCk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIHRoYXQgc2NyaXB0IGlzIG5vdCBhbHJlYWR5IGxvYWRlZFxuICAgICAgICAgICAgY29uc3QgbG9hZGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyYz1cIiR7c2NyaXB0fVwiXWApO1xuICAgICAgICAgICAgaWYgKGxvYWRlZCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBzY3JpcHRcbiAgICAgICAgICAgIGNvbnN0IGRvbVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgZG9tU2NyaXB0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcbiAgICAgICAgICAgIGRvbVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNjcmlwdCk7XG4gICAgICAgICAgICBkb21TY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYXNzZXRMb2FkZXIubG9hZGVkJywgJ3NjcmlwdCcsIHNjcmlwdCwgZG9tU2NyaXB0KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvbVNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYXNzZXRMb2FkZXIuZXJyb3InLCAnc2NyaXB0Jywgc2NyaXB0LCBkb21TY3JpcHQpO1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFVuYWJsZSB0byBsb2FkIHNjcmlwdCBmaWxlOiBcIiR7c2NyaXB0fVwiYCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChkb21TY3JpcHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3RzIGFuZCBsb2FkcyBhIENTUyBzdHlsZXNoZWV0IGludG8gdGhlIERPTS5cbiAgICAgKlxuICAgICAqIFRoZSBzdHlsZXNoZWV0IHdpbGwgYmUgYXBwZW5kZWQgYmVmb3JlIHRoZSBjbG9zaW5nIGA8L2hlYWQ+YCB0YWcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3R5bGVcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBsb2FkU3R5bGUoc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIC8vIFJlc29sdmUgc3R5bGUgVVJMXG4gICAgICAgICAgICBzdHlsZSA9IHRoaXMuc25vd2JvYXJkLnVybCgpLmFzc2V0KHN0eWxlKTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgdGhhdCBzdHlsZXNoZWV0IGlzIG5vdCBhbHJlYWR5IGxvYWRlZFxuICAgICAgICAgICAgY29uc3QgbG9hZGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdW2hyZWY9XCIke3N0eWxlfVwiXWApO1xuICAgICAgICAgICAgaWYgKGxvYWRlZCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBzdHlsZXNoZWV0XG4gICAgICAgICAgICBjb25zdCBkb21Dc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgICAgICBkb21Dc3Muc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICAgICAgICAgICAgZG9tQ3NzLnNldEF0dHJpYnV0ZSgnaHJlZicsIHN0eWxlKTtcbiAgICAgICAgICAgIGRvbUNzcy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhc3NldExvYWRlci5sb2FkZWQnLCAnc3R5bGUnLCBzdHlsZSwgZG9tQ3NzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvbUNzcy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYXNzZXRMb2FkZXIuZXJyb3InLCAnc3R5bGUnLCBzdHlsZSwgZG9tQ3NzKTtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBVbmFibGUgdG8gbG9hZCBzdHlsZXNoZWV0IGZpbGU6IFwiJHtzdHlsZX1cImApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQoZG9tQ3NzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlLWxvYWRzIGFuIGltYWdlLlxuICAgICAqXG4gICAgICogVGhlIGltYWdlIHdpbGwgbm90IGJlIGluamVjdGVkIGludG8gdGhlIERPTS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpbWFnZVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGxvYWRJbWFnZShpbWFnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLy8gUmVzb2x2ZSBzY3JpcHQgVVJMXG4gICAgICAgICAgICBpbWFnZSA9IHRoaXMuc25vd2JvYXJkLnVybCgpLmFzc2V0KGltYWdlKTtcblxuICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYXNzZXRMb2FkZXIubG9hZGVkJywgJ2ltYWdlJywgaW1hZ2UsIGltZyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmVycm9yJywgJ2ltYWdlJywgaW1hZ2UsIGltZyk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgVW5hYmxlIHRvIGxvYWQgaW1hZ2UgZmlsZTogXCIke2ltYWdlfVwiYCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbWcuc3JjID0gaW1hZ2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogQWxsb3dzIGF0dGFjaGluZyBhIGxvYWRpbmcgY2xhc3Mgb24gZWxlbWVudHMgdGhhdCBhbiBBSkFYIHJlcXVlc3QgaXMgdGFyZ2V0aW5nLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRhY2hMb2FkaW5nIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGRlcGVuZGVuaWNlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbJ3JlcXVlc3QnXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFqYXhTdGFydDogJ2FqYXhTdGFydCcsXG4gICAgICAgICAgICBhamF4RG9uZTogJ2FqYXhEb25lJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhamF4U3RhcnQocHJvbWlzZSwgcmVxdWVzdCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QuZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcXVlc3QuZWxlbWVudC50YWdOYW1lID09PSAnRk9STScpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRFbGVtZW50cyA9IHJlcXVlc3QuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hdHRhY2gtbG9hZGluZ10nKTtcbiAgICAgICAgICAgIGlmIChsb2FkRWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxvYWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdldExvYWRpbmdDbGFzcyhlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5lbGVtZW50LmRhdGFzZXQuYXR0YWNoTG9hZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXF1ZXN0LmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdldExvYWRpbmdDbGFzcyhyZXF1ZXN0LmVsZW1lbnQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFqYXhEb25lKGRhdGEsIHJlcXVlc3QpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0LmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXF1ZXN0LmVsZW1lbnQudGFnTmFtZSA9PT0gJ0ZPUk0nKSB7XG4gICAgICAgICAgICBjb25zdCBsb2FkRWxlbWVudHMgPSByZXF1ZXN0LmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYXR0YWNoLWxvYWRpbmddJyk7XG4gICAgICAgICAgICBpZiAobG9hZEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsb2FkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5nZXRMb2FkaW5nQ2xhc3MoZWxlbWVudCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuZWxlbWVudC5kYXRhc2V0LmF0dGFjaExvYWRpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVxdWVzdC5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5nZXRMb2FkaW5nQ2xhc3MocmVxdWVzdC5lbGVtZW50KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMb2FkaW5nQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gKGVsZW1lbnQuZGF0YXNldC5hdHRhY2hMb2FkaW5nICE9PSB1bmRlZmluZWQgJiYgZWxlbWVudC5kYXRhc2V0LmF0dGFjaExvYWRpbmcgIT09ICcnKVxuICAgICAgICAgICAgPyBlbGVtZW50LmRhdGFzZXQuYXR0YWNoTG9hZGluZ1xuICAgICAgICAgICAgOiAnd24tbG9hZGluZyc7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuXG4vKipcbiAqIERhdGEgY29uZmlndXJhdGlvbiBwcm92aWRlci5cbiAqXG4gKiBQcm92aWRlcyBhIG1lY2hhbmlzbSBmb3IgcGFzc2luZyBjb25maWd1cmF0aW9uIGRhdGEgdGhyb3VnaCBhbiBlbGVtZW50J3MgZGF0YSBhdHRyaWJ1dGVzLiBUaGlzXG4gKiBpcyBnZW5lcmFsbHkgdXNlZCBmb3Igd2lkZ2V0cyBvciBVSSBpbnRlcmFjdGlvbnMgdG8gY29uZmlndXJlIHRoZW0uXG4gKlxuICogQGNvcHlyaWdodCAyMDIyIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFDb25maWcgZXh0ZW5kcyBQbHVnaW5CYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGx1Z2luQmFzZX0gaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGxvY2FsQ29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGluc3RhbmNlLCBlbGVtZW50LCBsb2NhbENvbmZpZykge1xuICAgICAgICBpZiAoaW5zdGFuY2UgaW5zdGFuY2VvZiBQbHVnaW5CYXNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBwcm92aWRlIGEgU25vd2JvYXJkIHBsdWdpbiB0byBlbmFibGUgZGF0YSBjb25maWd1cmF0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGF0YSBjb25maWd1cmF0aW9uIGNhbiBvbmx5IGJlIGV4dHJhY3RlZCBmcm9tIEhUTUwgZWxlbWVudHMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5sb2NhbENvbmZpZyA9IGxvY2FsQ29uZmlnIHx8IHt9O1xuICAgICAgICB0aGlzLmluc3RhbmNlQ29uZmlnID0ge307XG4gICAgICAgIHRoaXMuYWNjZXB0ZWRDb25maWdzID0ge307XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNvbmZpZyBmb3IgdGhpcyBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIElmIHRoZSBgY29uZmlnYCBwYXJhbWV0ZXIgaXMgdW5zcGVjaWZpZWQsIHJldHVybnMgdGhlIGVudGlyZSBjb25maWd1cmF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZ1xuICAgICAqL1xuICAgIGdldChjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZUNvbmZpZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlQ29uZmlnW2NvbmZpZ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VDb25maWdbY29uZmlnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY29uZmlnIGZvciB0aGlzIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogVGhpcyBhbGxvd3MgeW91IHRvIG92ZXJyaWRlLCBhdCBydW50aW1lLCBhbnkgY29uZmlndXJhdGlvbiB2YWx1ZSBhcyBuZWNlc3NhcnkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnXG4gICAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBwZXJzaXN0XG4gICAgICovXG4gICAgc2V0KGNvbmZpZywgdmFsdWUsIHBlcnNpc3QpIHtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHByb3ZpZGUgYSBjb25maWd1cmF0aW9uIGtleSB0byBzZXQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5zdGFuY2VDb25maWdbY29uZmlnXSA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChwZXJzaXN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGF0YXNldFtjb25maWddID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsQ29uZmlnW2NvbmZpZ10gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZnJlc2hlcyB0aGUgY29uZmlndXJhdGlvbiBmcm9tIHRoZSBlbGVtZW50LlxuICAgICAqXG4gICAgICogVGhpcyB3aWxsIGFsbG93IHlvdSB0byBtYWtlIGNoYW5nZXMgdG8gdGhlIGRhdGEgY29uZmlnIG9uIGEgRE9NIGxldmVsIGFuZCByZS1hcHBseSB0aGVtXG4gICAgICogdG8gdGhlIGNvbmZpZyBvbiB0aGUgSmF2YVNjcmlwdCBzaWRlLlxuICAgICAqL1xuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMuYWNjZXB0ZWRDb25maWdzID0gdGhpcy5nZXRBY2NlcHRlZENvbmZpZ3MoKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUNvbmZpZyA9IHRoaXMucHJvY2Vzc0NvbmZpZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgdGhlIGF2YWlsYWJsZSBjb25maWd1cmF0aW9ucyB0aGF0IGNhbiBiZSBzZXQgdGhyb3VnaCB0aGUgZGF0YSBjb25maWcuXG4gICAgICpcbiAgICAgKiBJZiBhbiBpbnN0YW5jZSBoYXMgYW4gYGFjY2VwdEFsbERhdGFDb25maWdzYCBwcm9wZXJ0eSwgc2V0IHRvIGB0cnVlYCwgdGhlbiBhbGwgZGF0YVxuICAgICAqIGF0dHJpYnV0ZXMgd2lsbCBiZSBhdmFpbGFibGUgYXMgY29uZmlndXJhdGlvbiB2YWx1ZXMuIFRoaXMgY2FuIGJlIGEgc2VjdXJpdHkgY29uY2Vybiwgc29cbiAgICAgKiB0cmVhZCBjYXJlZnVsbHkuXG4gICAgICpcbiAgICAgKiBPdGhlcndpc2UsIGF2YWlsYWJsZSBjb25maWd1cmF0aW9ucyB3aWxsIGJlIGRldGVybWluZWQgYnkgdGhlIGtleXMgYXZhaWxhYmxlIGluIGFuIG9iamVjdFxuICAgICAqIHJldHVybmVkIGJ5IGEgYGRlZmF1bHRzKClgIG1ldGhvZCBpbiB0aGUgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW118Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXRBY2NlcHRlZENvbmZpZ3MoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuYWNjZXB0QWxsRGF0YUNvbmZpZ3MgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgJiYgdGhpcy5pbnN0YW5jZS5hY2NlcHRBbGxEYXRhQ29uZmlncyA9PT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWZhdWx0cyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAmJiB0eXBlb2YgdGhpcy5pbnN0YW5jZS5kZWZhdWx0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMoKSA9PT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZS5kZWZhdWx0cygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlcyBmb3IgdGhlIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogVGhpcyB3aWxsIGJlIGFuIGVtcHR5IG9iamVjdCBpZiB0aGUgaW5zdGFuY2UgZWl0aGVyIGRvZXMgbm90IGhhdmUgYSBgZGVmYXVsdHMoKWAgbWV0aG9kLCBvclxuICAgICAqIHRoZSBtZXRob2QgaXRzZWxmIGRvZXMgbm90IHJldHVybiBhbiBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIGdldERlZmF1bHRzKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlZmF1bHRzICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGlzLmluc3RhbmNlLmRlZmF1bHRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAmJiB0eXBlb2YgdGhpcy5pbnN0YW5jZS5kZWZhdWx0cygpID09PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmRlZmF1bHRzKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIHRoZSBjb25maWd1cmF0aW9uLlxuICAgICAqXG4gICAgICogTG9hZHMgdXAgdGhlIGRlZmF1bHRzLCB0aGVuIHBvcHVsYXRlcyBpdCB3aXRoIGFueSBjb25maWd1cmF0aW9uIHZhbHVlcyBwcm92aWRlZCBieSB0aGUgZGF0YVxuICAgICAqIGF0dHJpYnV0ZXMsIGJhc2VkIG9uIHRoZSBydWxlcyBvZiB0aGUgYWNjZXB0ZWQgY29uZmlndXJhdGlvbnMuXG4gICAgICpcbiAgICAgKiBUaGlzIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGlzIHRoZW4gY2FjaGVkIGFuZCBhdmFpbGFibGUgdGhyb3VnaCBgY29uZmlnLmdldCgpYCBjYWxscy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgcHJvY2Vzc0NvbmZpZygpIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXREZWZhdWx0cygpO1xuXG4gICAgICAgIGlmICh0aGlzLmFjY2VwdGVkQ29uZmlncyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmVsZW1lbnQuZGF0YXNldCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWNjZXB0ZWRDb25maWdzID09PSB0cnVlIHx8IHRoaXMuYWNjZXB0ZWRDb25maWdzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25maWdba2V5XSA9IHRoaXMuY29lcmNlVmFsdWUodGhpcy5lbGVtZW50LmRhdGFzZXRba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmxvY2FsQ29uZmlnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY2NlcHRlZENvbmZpZ3MgPT09IHRydWUgfHwgdGhpcy5hY2NlcHRlZENvbmZpZ3MuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5sb2NhbENvbmZpZ1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cblxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvZXJjZXMgY29uZmlndXJhdGlvbiB2YWx1ZXMgZm9yIEphdmFTY3JpcHQuXG4gICAgICpcbiAgICAgKiBUYWtlcyB0aGUgc3RyaW5nIHZhbHVlIHJldHVybmVkIGZyb20gdGhlIGRhdGEgYXR0cmlidXRlIGFuZCBjb2VyY2VzIGl0IGludG8gYSBtb3JlIHN1aXRhYmxlXG4gICAgICogdHlwZSBmb3IgSmF2YVNjcmlwdCBwcm9jZXNzaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGNvZXJjZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gU3RyaW5nKHZhbHVlKTtcblxuICAgICAgICAvLyBOdWxsIHZhbHVlXG4gICAgICAgIGlmIChzdHJpbmdWYWx1ZSA9PT0gJ251bGwnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVuZGVmaW5lZCB2YWx1ZVxuICAgICAgICBpZiAoc3RyaW5nVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmFzZTY0IHZhbHVlXG4gICAgICAgIGlmIChzdHJpbmdWYWx1ZS5zdGFydHNXaXRoKCdiYXNlNjQ6JykpIHtcbiAgICAgICAgICAgIGNvbnN0IGJhc2U2NHN0ciA9IHN0cmluZ1ZhbHVlLnJlcGxhY2UoL15iYXNlNjQ6LywgJycpO1xuICAgICAgICAgICAgY29uc3QgZGVjb2RlZCA9IGF0b2IoYmFzZTY0c3RyKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvZXJjZVZhbHVlKGRlY29kZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQm9vbGVhbiB2YWx1ZVxuICAgICAgICBpZiAoWyd0cnVlJywgJ3llcyddLmluY2x1ZGVzKHN0cmluZ1ZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoWydmYWxzZScsICdubyddLmluY2x1ZGVzKHN0cmluZ1ZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOdW1lcmljIHZhbHVlXG4gICAgICAgIGlmICgvXlstK10/WzAtOV0rKFxcLlswLTldKyk/JC8udGVzdChzdHJpbmdWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoc3RyaW5nVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSlNPTiB2YWx1ZVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc25vd2JvYXJkLmpzb25QYXJzZXIoKS5wYXJzZShzdHJpbmdWYWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoc3RyaW5nVmFsdWUgPT09ICcnKSA/IHRydWUgOiBzdHJpbmdWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBQbHVnaW5CYXNlIGZyb20gJy4uL2Fic3RyYWN0cy9QbHVnaW5CYXNlJztcblxuLyoqXG4gKiBQcm92aWRlcyBmbGFzaCBtZXNzYWdlcyBmb3IgdGhlIENNUy5cbiAqXG4gKiBGbGFzaCBtZXNzYWdlcyB3aWxsIHBvcCB1cCBhdCB0aGUgdG9wIGNlbnRlciBvZiB0aGUgcGFnZSBhbmQgd2lsbCByZW1haW4gZm9yIDcgc2Vjb25kcyBieSBkZWZhdWx0LiBIb3ZlcmluZyBvdmVyXG4gKiB0aGUgbWVzc2FnZSB3aWxsIHJlc2V0IGFuZCBwYXVzZSB0aGUgdGltZXIuIENsaWNraW5nIG9uIHRoZSBmbGFzaCBtZXNzYWdlIHdpbGwgZGlzbWlzcyBpdC5cbiAqXG4gKiBBcmd1bWVudHM6XG4gKiAgLSBcIm1lc3NhZ2VcIjogVGhlIGNvbnRlbnQgb2YgdGhlIGZsYXNoIG1lc3NhZ2UuIEhUTUwgaXMgYWNjZXB0ZWQuXG4gKiAgLSBcInR5cGVcIjogVGhlIHR5cGUgb2YgZmxhc2ggbWVzc2FnZS4gVGhpcyBpcyBhcHBlbmRlZCBhcyBhIGNsYXNzIHRvIHRoZSBmbGFzaCBtZXNzYWdlIGl0c2VsZi5cbiAqICAtIFwiZHVyYXRpb25cIjogSG93IGxvbmcgdGhlIGZsYXNoIG1lc3NhZ2Ugd2lsbCBzdGF5IHZpc2libGUgZm9yLCBpbiBzZWNvbmRzLiBEZWZhdWx0OiA3IHNlY29uZHMuXG4gKlxuICogVXNhZ2U6XG4gKiAgICAgIFNub3dib2FyZC5mbGFzaCgnVGhpcyBpcyBhIGZsYXNoIG1lc3NhZ2UnLCAnaW5mbycsIDgpO1xuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGFzaCBleHRlbmRzIFBsdWdpbkJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvblxuICAgICAqL1xuICAgIGNvbnN0cnVjdChtZXNzYWdlLCB0eXBlLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlIHx8ICdkZWZhdWx0JztcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IE51bWJlcihkdXJhdGlvbiB8fCA3KTtcblxuICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmxhc2ggZHVyYXRpb24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlciwgb3IgemVybycpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5mbGFzaFRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGRlcGVuZGVuY2llcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbJ3RyYW5zaXRpb24nXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cnVjdG9yLlxuICAgICAqXG4gICAgICogVGhpcyB3aWxsIGVuc3VyZSB0aGUgZmxhc2ggbWVzc2FnZSBpcyByZW1vdmVkIGFuZCB0aW1lb3V0IGlzIGNsZWFyZWQgaWYgdGhlIG1vZHVsZSBpcyByZW1vdmVkLlxuICAgICAqL1xuICAgIGRlc3RydWN0KCkge1xuICAgICAgICBpZiAodGhpcy50aW1lciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZsYXNoVGltZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZmxhc2hUaW1lci5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZsYXNoKSB7XG4gICAgICAgICAgICB0aGlzLmZsYXNoLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5mbGFzaCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmZsYXNoVGltZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuZGVzdHJ1Y3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBmbGFzaCBtZXNzYWdlLlxuICAgICAqL1xuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2ZsYXNoLmNyZWF0ZScsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZmxhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgdGhpcy5mbGFzaC5pbm5lckhUTUwgPSB0aGlzLm1lc3NhZ2U7XG4gICAgICAgIHRoaXMuZmxhc2guY2xhc3NMaXN0LmFkZCgnZmxhc2gtbWVzc2FnZScsIHRoaXMudHlwZSk7XG4gICAgICAgIHRoaXMuZmxhc2gucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWNvbnRyb2wnKTtcbiAgICAgICAgdGhpcy5mbGFzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMucmVtb3ZlKCkpO1xuICAgICAgICB0aGlzLmZsYXNoLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHRoaXMuc3RvcFRpbWVyKCkpO1xuICAgICAgICB0aGlzLmZsYXNoLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4gdGhpcy5zdGFydFRpbWVyKCkpO1xuXG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgdGhpcy5mbGFzaFRpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICB0aGlzLmZsYXNoVGltZXIuY2xhc3NMaXN0LmFkZCgnZmxhc2gtdGltZXInKTtcbiAgICAgICAgICAgIHRoaXMuZmxhc2guYXBwZW5kQ2hpbGQodGhpcy5mbGFzaFRpbWVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmxhc2guY2xhc3NMaXN0LmFkZCgnbm8tdGltZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB0byBib2R5XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5mbGFzaCk7XG5cbiAgICAgICAgdGhpcy5zbm93Ym9hcmQudHJhbnNpdGlvbih0aGlzLmZsYXNoLCAnc2hvdycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBmbGFzaCBtZXNzYWdlLlxuICAgICAqL1xuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2ZsYXNoLnJlbW92ZScsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XG5cbiAgICAgICAgdGhpcy5zbm93Ym9hcmQudHJhbnNpdGlvbih0aGlzLmZsYXNoLCAnaGlkZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmxhc2gucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmZsYXNoID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBmbGFzaCBtZXNzYWdlcyBhdmFpbGFibGUgb24gdGhlIHBhZ2UuXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2JvZHkgPiBkaXYuZmxhc2gtbWVzc2FnZScpLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQucmVtb3ZlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgdGltZXIgZm9yIHRoaXMgZmxhc2ggbWVzc2FnZS5cbiAgICAgKi9cbiAgICBzdGFydFRpbWVyKCkge1xuICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aW1lclRyYW5zID0gdGhpcy5zbm93Ym9hcmQudHJhbnNpdGlvbih0aGlzLmZsYXNoVGltZXIsICd0aW1lb3V0JywgbnVsbCwgYCR7dGhpcy5kdXJhdGlvbn0uMHNgLCB0cnVlKTtcbiAgICAgICAgdGhpcy50aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMucmVtb3ZlKCksIHRoaXMuZHVyYXRpb24gKiAxMDAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHRpbWVyIGZvciB0aGlzIGZsYXNoIG1lc3NhZ2UuXG4gICAgICovXG4gICAgc3RvcFRpbWVyKCkge1xuICAgICAgICBpZiAodGhpcy50aW1lclRyYW5zKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyVHJhbnMuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIERlZmluZXMgYSBkZWZhdWx0IGxpc3RlbmVyIGZvciBmbGFzaCBldmVudHMuXG4gKlxuICogQ29ubmVjdHMgdGhlIEZsYXNoIHBsdWdpbiB0byB2YXJpb3VzIGV2ZW50cyB0aGF0IHVzZSBmbGFzaCBtZXNzYWdlcy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxhc2hMaXN0ZW5lciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBkZXBlbmRlbmljZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gWydmbGFzaCddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVhZHk6ICdyZWFkeScsXG4gICAgICAgICAgICBhamF4RXJyb3JNZXNzYWdlOiAnYWpheEVycm9yTWVzc2FnZScsXG4gICAgICAgICAgICBhamF4Rmxhc2hNZXNzYWdlczogJ2FqYXhGbGFzaE1lc3NhZ2VzJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEbyBmbGFzaCBtZXNzYWdlcyBmb3IgUEhQIGZsYXNoIHJlc3BvbnNlcy5cbiAgICAgKi9cbiAgICByZWFkeSgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY29udHJvbD1cImZsYXNoLW1lc3NhZ2VcIl0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNub3dib2FyZC5mbGFzaChcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuZmxhc2hUeXBlLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5mbGFzaER1cmF0aW9uLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYSBmbGFzaCBtZXNzYWdlIGZvciBBSkFYIGVycm9ycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgYWpheEVycm9yTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmZsYXNoKG1lc3NhZ2UsICdlcnJvcicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgZmxhc2ggbWVzc2FnZXMgcmV0dXJuZWQgZGlyZWN0bHkgZnJvbSBBSkFYIGZ1bmN0aW9uYWxpdHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZXNcbiAgICAgKi9cbiAgICBhamF4Rmxhc2hNZXNzYWdlcyhtZXNzYWdlcykge1xuICAgICAgICBPYmplY3QuZW50cmllcyhtZXNzYWdlcykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtjc3NDbGFzcywgbWVzc2FnZV0gPSBlbnRyeTtcbiAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmZsYXNoKG1lc3NhZ2UsIGNzc0NsYXNzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIEFkZHMgQUpBWC1kcml2ZW4gZm9ybSB2YWxpZGF0aW9uIHRvIFNub3dib2FyZCByZXF1ZXN0cy5cbiAqXG4gKiBEb2N1bWVudGF0aW9uIGZvciB0aGlzIGZlYXR1cmUgY2FuIGJlIGZvdW5kIGhlcmU6XG4gKiBodHRwczovL3dpbnRlcmNtcy5jb20vZG9jcy9zbm93Ym9hcmQvZXh0cmFzI2FqYXgtdmFsaWRhdGlvblxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMiBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdGlvbiBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICovXG4gICAgY29uc3RydWN0KCkge1xuICAgICAgICB0aGlzLmVycm9yQmFncyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVhZHk6ICdyZWFkeScsXG4gICAgICAgICAgICBhamF4U3RhcnQ6ICdjbGVhclZhbGlkYXRpb24nLFxuICAgICAgICAgICAgYWpheFZhbGlkYXRpb25FcnJvcnM6ICdkb1ZhbGlkYXRpb24nLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWR5IGV2ZW50IGhhbmRsZXIuXG4gICAgICovXG4gICAgcmVhZHkoKSB7XG4gICAgICAgIHRoaXMuY29sbGVjdEVycm9yQmFncyhkb2N1bWVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHZhbGlkYXRpb24gZXJyb3JzIGZyb20gYW4gQUpBWCByZXNwb25zZSBhbmQgcGFzc2VzIHRoZW0gdGhyb3VnaCB0byB0aGUgZXJyb3IgYmFncy5cbiAgICAgKlxuICAgICAqIFRoaXMgaGFuZGxlciByZXR1cm5zIGZhbHNlIHRvIGNhbmNlbCBhbnkgZnVydGhlciB2YWxpZGF0aW9uIGhhbmRsaW5nLCBhbmQgcHJldmVudHMgdGhlIGZsYXNoXG4gICAgICogbWVzc2FnZSB0aGF0IGlzIGRpc3BsYXllZCBieSBkZWZhdWx0IGZvciBmaWVsZCBlcnJvcnMgaW4gQUpBWCByZXF1ZXN0cyBmcm9tIHNob3dpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpbnZhbGlkRmllbGRzXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZG9WYWxpZGF0aW9uKGZvcm0sIGludmFsaWRGaWVsZHMsIHJlcXVlc3QpIHtcbiAgICAgICAgaWYgKHJlcXVlc3QuZWxlbWVudCAmJiByZXF1ZXN0LmVsZW1lbnQuZGF0YXNldC5yZXF1ZXN0VmFsaWRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVycm9yQmFncyA9IHRoaXMuZXJyb3JCYWdzLmZpbHRlcigoZXJyb3JCYWcpID0+IGVycm9yQmFnLmZvcm0gPT09IGZvcm0pO1xuICAgICAgICBlcnJvckJhZ3MuZm9yRWFjaCgoZXJyb3JCYWcpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yQmFnKGVycm9yQmFnLCBpbnZhbGlkRmllbGRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbnkgdmFsaWRhdGlvbiBlcnJvcnMgaW4gdGhlIGdpdmVuIGZvcm0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Byb21pc2V9IHByb21pc2VcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R9IHJlcXVlc3RcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBjbGVhclZhbGlkYXRpb24ocHJvbWlzZSwgcmVxdWVzdCkge1xuICAgICAgICBpZiAocmVxdWVzdC5lbGVtZW50ICYmIHJlcXVlc3QuZWxlbWVudC5kYXRhc2V0LnJlcXVlc3RWYWxpZGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXF1ZXN0LmZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVycm9yQmFncyA9IHRoaXMuZXJyb3JCYWdzLmZpbHRlcigoZXJyb3JCYWcpID0+IGVycm9yQmFnLmZvcm0gPT09IHJlcXVlc3QuZm9ybSk7XG4gICAgICAgIGVycm9yQmFncy5mb3JFYWNoKChlcnJvckJhZykgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlRXJyb3JCYWcoZXJyb3JCYWcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb2xsZWN0cyBlcnJvciBiYWdzIChlbGVtZW50cyB3aXRoIFwiZGF0YS12YWxpZGF0ZS1lcnJvclwiIGF0dHJpYnV0ZSkgYW5kIGxpbmtzIHRoZW0gdG8gYVxuICAgICAqIHBsYWNlaG9sZGVyIGFuZCBmb3JtLlxuICAgICAqXG4gICAgICogVGhlIGVycm9yIGJhZ3Mgd2lsbCBiZSBpbml0aWFsbHkgaGlkZGVuLCBhbmQgd2lsbCBvbmx5IHNob3cgd2hlbiB2YWxpZGF0aW9uIGVycm9ycyBvY2N1ci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJvb3ROb2RlXG4gICAgICovXG4gICAgY29sbGVjdEVycm9yQmFncyhyb290Tm9kZSkge1xuICAgICAgICByb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12YWxpZGF0ZS1lcnJvcl0sIFtkYXRhLXZhbGlkYXRlLWZvcl0nKS5mb3JFYWNoKChlcnJvckJhZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGVycm9yQmFnLmNsb3Nlc3QoJ2Zvcm1bZGF0YS1yZXF1ZXN0LXZhbGlkYXRlXScpO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGVycm9yIGJhZyBkb2VzIG5vdCByZXNpZGUgd2l0aGluIGEgdmFsaWRhdGluZyBmb3JtLCByZW1vdmUgaXRcbiAgICAgICAgICAgIGlmICghZm9ybSkge1xuICAgICAgICAgICAgICAgIGVycm9yQmFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZXJyb3JCYWcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRmluZCBtZXNzYWdlIGxpc3Qgbm9kZSwgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICBsZXQgbWVzc2FnZUxpc3RFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChlcnJvckJhZy5tYXRjaGVzKCdbZGF0YS12YWxpZGF0ZS1lcnJvcl0nKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VMaXN0RWxlbWVudCA9IGVycm9yQmFnLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1lc3NhZ2VdJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIHBsYWNlaG9sZGVyIG5vZGVcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG5cbiAgICAgICAgICAgIC8vIFJlZ2lzdGVyIGVycm9yIGJhZyBhbmQgcmVwbGFjZSB3aXRoIHBsYWNlaG9sZGVyXG4gICAgICAgICAgICBjb25zdCBlcnJvckJhZ0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogZXJyb3JCYWcsXG4gICAgICAgICAgICAgICAgZm9ybSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcjogKGVycm9yQmFnLmRhdGFzZXQudmFsaWRhdGVGb3IpXG4gICAgICAgICAgICAgICAgICAgID8gZXJyb3JCYWcuZGF0YXNldC52YWxpZGF0ZUZvci5zcGxpdCgvXFxzKixcXHMqLylcbiAgICAgICAgICAgICAgICAgICAgOiAnKicsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUxpc3RFbGVtZW50OiAobWVzc2FnZUxpc3RFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICA/IG1lc3NhZ2VMaXN0RWxlbWVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VMaXN0QW5jaG9yOiBudWxsLFxuICAgICAgICAgICAgICAgIGN1c3RvbU1lc3NhZ2U6IChlcnJvckJhZy5kYXRhc2V0LnZhbGlkYXRlRm9yKVxuICAgICAgICAgICAgICAgICAgICA/IChlcnJvckJhZy50ZXh0Q29udGVudCAhPT0gJycgfHwgZXJyb3JCYWcuY2hpbGROb2Rlcy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gSWYgYW4gbWVzc2FnZSBsaXN0IGVsZW1lbnQgZXhpc3RzLCBjcmVhdGUgYW5vdGhlciBwbGFjZWhvbGRlciB0byBhY3QgYXMgYW4gYW5jaG9yIHBvaW50XG4gICAgICAgICAgICBpZiAobWVzc2FnZUxpc3RFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUxpc3RBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTGlzdEVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobWVzc2FnZUxpc3RBbmNob3IsIG1lc3NhZ2VMaXN0RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZXJyb3JCYWdEYXRhLm1lc3NhZ2VMaXN0QW5jaG9yID0gbWVzc2FnZUxpc3RBbmNob3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVycm9yQmFnLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHBsYWNlaG9sZGVyLCBlcnJvckJhZyk7XG5cbiAgICAgICAgICAgIHRoaXMuZXJyb3JCYWdzLnB1c2goZXJyb3JCYWdEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZXMgYW4gZXJyb3IgYmFnLCByZXBsYWNpbmcgdGhlIGVycm9yIG1lc3NhZ2VzIHdpdGggYSBwbGFjZWhvbGRlciBub2RlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVycm9yQmFnXG4gICAgICovXG4gICAgaGlkZUVycm9yQmFnKGVycm9yQmFnKSB7XG4gICAgICAgIGlmIChlcnJvckJhZy5lbGVtZW50LmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICBlcnJvckJhZy5lbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVycm9yQmFnLnBsYWNlaG9sZGVyLCBlcnJvckJhZy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIGFuIGVycm9yIGJhZyB3aXRoIHRoZSBnaXZlbiBpbnZhbGlkIGZpZWxkcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlcnJvckJhZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpbnZhbGlkRmllbGRzXG4gICAgICovXG4gICAgc2hvd0Vycm9yQmFnKGVycm9yQmFnLCBpbnZhbGlkRmllbGRzKSB7XG4gICAgICAgIGlmICghdGhpcy5lcnJvckJhZ1ZhbGlkYXRlc0ZpZWxkKGVycm9yQmFnLCBpbnZhbGlkRmllbGRzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlcnJvckJhZy5lbGVtZW50LmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICBlcnJvckJhZy5wbGFjZWhvbGRlci5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlcnJvckJhZy5lbGVtZW50LCBlcnJvckJhZy5wbGFjZWhvbGRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3JCYWcudmFsaWRhdGVGb3IgIT09ICcqJykge1xuICAgICAgICAgICAgaWYgKCFlcnJvckJhZy5jdXN0b21NZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RGaWVsZCA9IE9iamVjdC5rZXlzKGludmFsaWRGaWVsZHMpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGZpZWxkKSA9PiBlcnJvckJhZy52YWxpZGF0ZUZvci5pbmNsdWRlcyhmaWVsZCkpXG4gICAgICAgICAgICAgICAgICAgIC5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIFtlcnJvckJhZy5lbGVtZW50LmlubmVySFRNTF0gPSBpbnZhbGlkRmllbGRzW2ZpcnN0RmllbGRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGVycm9yQmFnLm1lc3NhZ2VMaXN0RWxlbWVudCkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzIGVycm9yIG1lc3NhZ2VzXG4gICAgICAgICAgICBlcnJvckJhZy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZhbGlkYXRpb24tbWVzc2FnZV0nKS5mb3JFYWNoKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGludmFsaWRGaWVsZHMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgWywgZXJyb3JzXSA9IGVudHJ5O1xuXG4gICAgICAgICAgICAgICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbGVtZW50ID0gZXJyb3JCYWcubWVzc2FnZUxpc3RFbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuZGF0YXNldC52YWxpZGF0aW9uTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5pbm5lckhUTUwgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JCYWcubWVzc2FnZUxpc3RBbmNob3IuYWZ0ZXIobWVzc2FnZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBbZXJyb3JCYWcuZWxlbWVudC5pbm5lckhUTUxdID0gaW52YWxpZEZpZWxkc1tPYmplY3Qua2V5cyhpbnZhbGlkRmllbGRzKS5zaGlmdCgpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYSBnaXZlbiBlcnJvciBiYWcgYXBwbGllcyBmb3IgdGhlIGdpdmVuIGludmFsaWQgZmllbGRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVycm9yQmFnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGludmFsaWRGaWVsZHNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBlcnJvckJhZ1ZhbGlkYXRlc0ZpZWxkKGVycm9yQmFnLCBpbnZhbGlkRmllbGRzKSB7XG4gICAgICAgIGlmIChlcnJvckJhZy52YWxpZGF0ZUZvciA9PT0gJyonKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhpbnZhbGlkRmllbGRzKVxuICAgICAgICAgICAgLmZpbHRlcigoZmllbGQpID0+IGVycm9yQmFnLnZhbGlkYXRlRm9yLmluY2x1ZGVzKGZpZWxkKSlcbiAgICAgICAgICAgIC5sZW5ndGggPiAwO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogRGlzcGxheXMgYSBzdHJpcGUgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSB0aGF0IGluZGljYXRlcyBsb2FkaW5nLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpcGVMb2FkZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgZGVwZW5kZW5pY2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsncmVxdWVzdCddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVhZHk6ICdyZWFkeScsXG4gICAgICAgICAgICBhamF4U3RhcnQ6ICdhamF4U3RhcnQnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlYWR5KCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlU3RyaXBlKCk7XG4gICAgfVxuXG4gICAgYWpheFN0YXJ0KHByb21pc2UsIHJlcXVlc3QpIHtcbiAgICAgICAgaWYgKHJlcXVlc3Qub3B0aW9ucy5zdHJpcGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3coKTtcblxuICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVTdHJpcGUoKSB7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgIHRoaXMuc3RyaXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgIHRoaXMuc3RyaXBlTG9hZGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cbiAgICAgICAgdGhpcy5pbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgnc3RyaXBlLWxvYWRpbmctaW5kaWNhdG9yJywgJ2xvYWRlZCcpO1xuICAgICAgICB0aGlzLnN0cmlwZS5jbGFzc0xpc3QuYWRkKCdzdHJpcGUnKTtcbiAgICAgICAgdGhpcy5zdHJpcGVMb2FkZWQuY2xhc3NMaXN0LmFkZCgnc3RyaXBlLWxvYWRlZCcpO1xuXG4gICAgICAgIHRoaXMuaW5kaWNhdG9yLmFwcGVuZENoaWxkKHRoaXMuc3RyaXBlKTtcbiAgICAgICAgdGhpcy5pbmRpY2F0b3IuYXBwZW5kQ2hpbGQodGhpcy5zdHJpcGVMb2FkZWQpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5pbmRpY2F0b3IpO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xuXG4gICAgICAgIGNvbnN0IG5ld1N0cmlwZSA9IHRoaXMuc3RyaXBlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgdGhpcy5pbmRpY2F0b3IuYXBwZW5kQ2hpbGQobmV3U3RyaXBlKTtcbiAgICAgICAgdGhpcy5zdHJpcGUucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuc3RyaXBlID0gbmV3U3RyaXBlO1xuXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPiAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkZWQnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3bi1sb2FkaW5nJyk7XG4gICAgfVxuXG4gICAgaGlkZShmb3JjZSkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgLT0gMTtcblxuICAgICAgICBpZiAoZm9yY2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3bi1sb2FkaW5nJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIEVtYmVkcyB0aGUgXCJleHRyYXNcIiBzdHlsZXNoZWV0IGludG8gdGhlIHBhZ2UsIGlmIGl0IGlzIG5vdCBsb2FkZWQgdGhyb3VnaCB0aGUgdGhlbWUuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlc2hlZXRMb2FkZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVhZHk6ICdyZWFkeScsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVhZHkoKSB7XG4gICAgICAgIGxldCBzdHlsZXNMb2FkZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBEZXRlcm1pbmUgaWYgc3R5bGVzaGVldCBpcyBhbHJlYWR5IGxvYWRlZFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKS5mb3JFYWNoKChjc3MpID0+IHtcbiAgICAgICAgICAgIGlmIChjc3MuaHJlZi5lbmRzV2l0aCgnL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9jc3Mvc25vd2JvYXJkLmV4dHJhcy5jc3MnKSkge1xuICAgICAgICAgICAgICAgIHN0eWxlc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghc3R5bGVzTG9hZGVkKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZXNoZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAgICAgc3R5bGVzaGVldC5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgICAgICAgICBzdHlsZXNoZWV0LnNldEF0dHJpYnV0ZSgnaHJlZicsIHRoaXMuc25vd2JvYXJkLnVybCgpLmFzc2V0KCcvbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2Nzcy9zbm93Ym9hcmQuZXh0cmFzLmNzcycpKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVzaGVldCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5cbi8qKlxuICogUHJvdmlkZXMgdHJhbnNpdGlvbiBzdXBwb3J0IGZvciBlbGVtZW50cy5cbiAqXG4gKiBUcmFuc2l0aW9uIGFsbG93cyBDU1MgdHJhbnNpdGlvbnMgdG8gYmUgY29udHJvbGxlZCBhbmQgY2FsbGJhY2tzIHRvIGJlIHJ1biBvbmNlIGNvbXBsZXRlZC4gSXQgd29ya3Mgc2ltaWxhciB0byBWdWVcbiAqIHRyYW5zaXRpb25zIHdpdGggMyBzdGFnZXMgb2YgdHJhbnNpdGlvbiwgYW5kIGNsYXNzZXMgYXNzaWduZWQgdG8gdGhlIGVsZW1lbnQgd2l0aCB0aGUgdHJhbnNpdGlvbiBuYW1lIHN1ZmZpeGVkIHdpdGhcbiAqIHRoZSBzdGFnZSBvZiB0cmFuc2l0aW9uOlxuICpcbiAqICAtIGBpbmA6IEEgY2xhc3MgYXNzaWduZWQgdG8gdGhlIGVsZW1lbnQgZm9yIHRoZSBmaXJzdCBmcmFtZSBvZiB0aGUgdHJhbnNpdGlvbiwgcmVtb3ZlZCBhZnRlcndhcmRzLiBUaGlzIHNob3VsZCBiZVxuICogICAgICB1c2VkIHRvIGRlZmluZSB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgdHJhbnNpdGlvbi5cbiAqICAtIGBhY3RpdmVgOiBBIGNsYXNzIGFzc2lnbmVkIHRvIHRoZSBlbGVtZW50IGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIHRyYW5zaXRpb24uIFRoaXMgc2hvdWxkIGJlIHVzZWQgdG8gZGVmaW5lIHRoZVxuICogICAgICB0cmFuc2l0aW9uIGl0c2VsZi5cbiAqICAtIGBvdXRgOiBBIGNsYXNzIGFzc2lnbmVkIHRvIHRoZSBlbGVtZW50IGFmdGVyIHRoZSBmaXJzdCBmcmFtZSBvZiB0aGUgdHJhbnNpdGlvbiBhbmQga2VwdCB0byB0aGUgZW5kIG9mIHRoZVxuICogICAgICB0cmFuc2l0aW9uLiBUaGlzIHNob3VsZCBkZWZpbmUgdGhlIGVuZCBzdGF0ZSBvZiB0aGUgdHJhbnNpdGlvbi5cbiAqXG4gKiBVc2FnZTpcbiAqICAgICAgU25vd2JvYXJkLnRyYW5zaXRpb24oZG9jdW1lbnQuZWxlbWVudCwgJ3RyYW5zaXRpb24nLCAoKSA9PiB7XG4gKiAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3ZlIGVsZW1lbnQgYWZ0ZXIgNyBzZWNvbmRzJyk7XG4gKiAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICogICAgICB9LCAnN3MnKTtcbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNpdGlvbiBleHRlbmRzIFBsdWdpbkJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0byB0cmFuc2l0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRyYW5zaXRpb24gVGhlIG5hbWUgb2YgdGhlIHRyYW5zaXRpb24sIHRoaXMgcHJlZml4ZXMgdGhlIHN0YWdlcyBvZiB0cmFuc2l0aW9uLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRvIGNhbGwgd2hlbiB0aGUgdHJhbnNpdGlvbiBlbmRzLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiBBbiBvcHRpb25hbCBvdmVycmlkZSBvbiB0aGUgdHJhbnNpdGlvbiBkdXJhdGlvbi4gTXVzdCBiZSBzcGVjaWZpZWQgYXMgJ3MnIChzZWNzKSBvciAnbXMnIChtc2VjcykuXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB0cmFpbFRvIElmIHRydWUsIHRoZSBcIm91dFwiIGNsYXNzIHdpbGwgcmVtYWluIGFmdGVyIHRoZSBlbmQgb2YgdGhlIHRyYW5zaXRpb24uXG4gICAgICovXG4gICAgY29uc3RydWN0KGVsZW1lbnQsIHRyYW5zaXRpb24sIGNhbGxiYWNrLCBkdXJhdGlvbiwgdHJhaWxUbykge1xuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIEhUTUxFbGVtZW50IG11c3QgYmUgcHJvdmlkZWQgZm9yIHRyYW5zaXRpb25pbmcnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIGlmICh0eXBlb2YgdHJhbnNpdGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJhbnNpdGlvbiBuYW1lIG11c3QgYmUgc3BlY2lmaWVkIGFzIGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcblxuICAgICAgICBpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxiYWNrIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblxuICAgICAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSB0aGlzLnBhcnNlRHVyYXRpb24oZHVyYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyYWlsVG8gPSAodHJhaWxUbyA9PT0gdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5kb1RyYW5zaXRpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXBzIGV2ZW50IGNsYXNzZXMgdG8gdGhlIGdpdmVuIHRyYW5zaXRpb24gc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3NcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZXZlbnRDbGFzc2VzKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgZXZlbnRDbGFzc2VzID0ge1xuICAgICAgICAgICAgaW46IGAke3RoaXMudHJhbnNpdGlvbn0taW5gLFxuICAgICAgICAgICAgYWN0aXZlOiBgJHt0aGlzLnRyYW5zaXRpb259LWFjdGl2ZWAsXG4gICAgICAgICAgICBvdXQ6IGAke3RoaXMudHJhbnNpdGlvbn0tb3V0YCxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKGV2ZW50Q2xhc3Nlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXR1cm5DbGFzc2VzID0gW107XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGV2ZW50Q2xhc3NlcykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5O1xuXG4gICAgICAgICAgICBpZiAoYXJncy5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuQ2xhc3Nlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJldHVybkNsYXNzZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgdGhlIHRyYW5zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBkb1RyYW5zaXRpb24oKSB7XG4gICAgICAgIC8vIEFkZCBkdXJhdGlvbiBvdmVycmlkZVxuICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRoaXMuZHVyYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2V0Q2xhc3NlcygpO1xuXG4gICAgICAgIC8vIFN0YXJ0IHRyYW5zaXRpb24gLSBzaG93IFwiaW5cIiBhbmQgXCJhY3RpdmVcIiBjbGFzc2VzXG4gICAgICAgIHRoaXMuZXZlbnRDbGFzc2VzKCdpbicsICdhY3RpdmUnKS5mb3JFYWNoKChldmVudENsYXNzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChldmVudENsYXNzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgYSB0cmFuc2l0aW9uIGV4aXN0c1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbJ3RyYW5zaXRpb24tZHVyYXRpb24nXSAhPT0gJzBzJykge1xuICAgICAgICAgICAgICAgIC8vIExpc3RlbiBmb3IgdGhlIHRyYW5zaXRpb24gdG8gZW5kXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB0aGlzLm9uVHJhbnNpdGlvbkVuZCgpLCB7XG4gICAgICAgICAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZXZlbnRDbGFzc2VzKCdpbicpWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5ldmVudENsYXNzZXMoJ291dCcpWzBdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldENsYXNzZXMoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2suYXBwbHkodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRlc3RydWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZ1bmN0aW9uIHdoZW4gdGhlIHRyYW5zaXRpb24gZW5kcy5cbiAgICAgKlxuICAgICAqIFdoZW4gYSB0cmFuc2l0aW9uIGVuZHMsIHRoZSBpbnN0YW5jZSBvZiB0aGUgdHJhbnNpdGlvbiBpcyBhdXRvbWF0aWNhbGx5IGRlc3RydWN0ZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBvblRyYW5zaXRpb25FbmQoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRDbGFzc2VzKCdhY3RpdmUnLCAoIXRoaXMudHJhaWxUbykgPyAnb3V0JyA6ICcnKS5mb3JFYWNoKChldmVudENsYXNzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShldmVudENsYXNzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2suYXBwbHkodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBkdXJhdGlvbiBvdmVycmlkZVxuICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlc3RydWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FuY2VscyBhIHRyYW5zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4gdGhpcy5vblRyYW5zaXRpb25FbmQsIHtcbiAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVzZXRDbGFzc2VzKCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGR1cmF0aW9uIG92ZXJyaWRlXG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgZGVzdHJ1Y3RvclxuICAgICAgICB0aGlzLmRlc3RydWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSBjbGFzc2VzLCByZW1vdmluZyBhbnkgdHJhbnNpdGlvbiBjbGFzc2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcmVzZXRDbGFzc2VzKCkge1xuICAgICAgICB0aGlzLmV2ZW50Q2xhc3NlcygpLmZvckVhY2goKGV2ZW50Q2xhc3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGV2ZW50Q2xhc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYSBnaXZlbiBkdXJhdGlvbiBhbmQgY29udmVydHMgaXQgdG8gYSBcIm1zXCIgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZHVyYXRpb25cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHBhcnNlRHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gL14oWzAtOV0rKFxcLlswLTldKyk/KShtP3MpPyQvLmV4ZWMoZHVyYXRpb24pO1xuICAgICAgICBjb25zdCBhbW91bnQgPSBOdW1iZXIocGFyc2VkWzFdKTtcbiAgICAgICAgY29uc3QgdW5pdCA9IChwYXJzZWRbM10gPT09ICdzJylcbiAgICAgICAgICAgID8gJ3NlYydcbiAgICAgICAgICAgIDogJ21zZWMnO1xuXG4gICAgICAgIHJldHVybiAodW5pdCA9PT0gJ3NlYycpXG4gICAgICAgICAgICA/IGAke2Ftb3VudCAqIDEwMDB9bXNgXG4gICAgICAgICAgICA6IGAke01hdGguZmxvb3IoYW1vdW50KX1tc2A7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRyaWdnZXJFbnRpdHlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0cmlnZ2VyIFRoZSBzZWxlY3RvciBmb3IgdGhlIHRyaWdnZXIgdGFyZ2V0IGVsZW1lbnQocykuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY29uZGl0aW9uIFRoZSBjb25kaXRpb24gdGhhdCBtdXN0IGJlIG1ldCBmb3IgdGhlIHRyaWdnZXIgdG8gZmlyZS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhY3Rpb24gVGhlIGFjdGlvbiB0byBwZXJmb3JtIHdoZW4gdGhlIHRyaWdnZXIgZmlyZXMuXG4gKiBAcHJvcGVydHkge3N0cmluZ3x1bmRlZmluZWR9IHBhcmVudCBUaGUgcGFyZW50IGVsZW1lbnQgd2l0aCB3aGljaCB0byBsaW1pdCB0aGUgdHJpZ2dlciBzY29wZS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bWJlcn0gcHJpb3JpdHkgVGhlIHByaW9yaXR5IG9mIHRoZSB0cmlnZ2VyIGV2ZW50LlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudFtdfSBlbGVtZW50cyBUaGUgdGFyZ2V0IGVsZW1lbnRzIHRoYXQgdGhpcyB0cmlnZ2VyIGFwcGxpZXMgdG8uXG4gKi9cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gVHJpZ2dlckVsZW1lbnRcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIHRhcmdldCBlbGVtZW50LlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50TmFtZSBUaGUgdHJpZ2dlciBldmVudCBuYW1lLlxuICogQHByb3BlcnR5IHtpbnR9IHByaW9yaXR5IFRoZSB0cmlnZ2VyIGV2ZW50IHByaW9yaXR5LlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZXZlbnQgVGhlIHRyaWdnZXIgZXZlbnQgZnVuY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBUcmlnZ2VyIGhhbmRsZXIgZm9yIEhUTUwgZWxlbWVudHMuXG4gKlxuICogVGhpcyBpcyBhIHJlLWltYWdpbmluZyBvZiB0aGUgSW5wdXQuVHJpZ2dlciBmdW5jdGlvbmFsaXR5IGluIHRoZSBvcmlnaW5hbCBXaW50ZXIgQ01TIGZyYW1ld29yayxcbiAqIGluaXRpYWxpc2VkIHRocm91Z2ggdGhlIGBkYXRhLXRyaWdnZXJgIGF0dHJpYnV0ZXMuXG4gKlxuICogSW4gYWRkaXRpb24gdG8gcmVtYWluaW5nIGJhY2t3YXJkcy1jb21wYXRpYmxlIHdpdGggdGhlIG9yaWdpbmFsIElucHV0LlRyaWdnZXIgZnVuY3Rpb25hbGl0eSwgdGhpc1xuICogaGFuZGxlciBhZGRzIGFkZGl0aW9uYWwgY29uZGl0aW9ucyBhbmQgY29uZmlndXJhdGlvbiBmb3IgbW9yZSBmbGV4aWJsZSB0cmlnZ2VyIHVzYWdlLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly93aW50ZXJjbXMuY29tL2RvY3MvdjEuMi91aS9zY3JpcHQvaW5wdXQtdHJpZ2dlclxuICpcbiAqIEBjb3B5cmlnaHQgMjAyNCBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmlnZ2VyIGV4dGVuZHMgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICovXG4gICAgY29uc3RydWN0KGVsZW1lbnQpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBlbGVtZW50IHRoaXMgaW5zdGFuY2UgaXMgYXR0YWNoZWQgdG8uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7TWFwPHN0cmluZywgTWFwPFRyaWdnZXJFbnRpdHk+Pn0gVGhlIHRyaWdnZXJzIGZvciB0aGlzIGVsZW1lbnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyaWdnZXJzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7TWFwPEVsZW1lbnQsIFNldDxUcmlnZ2VyRWxlbWVudD4+fSBBIG1hcCBvZiBlbGVtZW50cyB0aGF0IHRyaWdnZXIgZXZlbnRzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ldmVudHMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtNYXA8RWxlbWVudCwgTWFwPHN0cmluZywgRnVuY3Rpb24+Pn0gQSBtYXAgb2YgZWxlbWVudHMgYW5kIHRoZWlyIGV2ZW50IGNvbm5lY3RvcnMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbm5lY3RvcnMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5wYXJzZVRyaWdnZXJzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMudHJpZ2dlcnMuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVHJpZ2dlckV2ZW50cygpO1xuICAgICAgICAgICAgdGhpcy5ydW5FdmVudHMoKTtcblxuICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ3RyaWdnZXJzLnJlYWR5JywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3RydWN0b3IuXG4gICAgICovXG4gICAgZGVzdHJ1Y3QoKSB7XG4gICAgICAgIHRoaXMucmVzZXRFdmVudHMoKTtcbiAgICAgICAgc3VwZXIuZGVzdHJ1Y3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGVsZW1lbnQncyBkYXRhIGF0dHJpYnV0ZXMgYW5kIGRldGVybWluZXMgYXBwbGljYWJsZSB0cmlnZ2Vycy5cbiAgICAgKlxuICAgICAqIFRyaWdnZXIgZGF0YSBhdHRyaWJ1dGVzIG11c3QgYmUgaW4gdGhlIGZvcm1hdCBgZGF0YS10cmlnZ2VyLVtuYW1lXS1bcGFyYW1ldGVyXWAgZm9yIG11bHRpcGxlXG4gICAgICogdHJpZ2dlcnMsIG9yIGBkYXRhLXRyaWdnZXItW3BhcmFtZXRlcl1gIGZvciBzaW5nbGUgdHJpZ2dlcnMuXG4gICAgICpcbiAgICAgKiBTdXBwb3J0ZWQgcGFyYW1ldGVycyBhcmU6XG4gICAgICogIC0gYGNvbmRpdGlvbmAgb3IgYHdoZXJlYDogVGhlIGNvbmRpdGlvbiB0aGF0IG11c3QgYmUgbWV0IGZvciB0aGUgdHJpZ2dlciB0byBmaXJlLlxuICAgICAqICAtIGBhY3Rpb25gOiBUaGUgYWN0aW9uIHRvIHBlcmZvcm0gd2hlbiB0aGUgdHJpZ2dlciBmaXJlcy5cbiAgICAgKiAgLSBgcGFyZW50YCBvciBgY2xvc2VzdC1wYXJlbnRgOiBUaGUgcGFyZW50IGVsZW1lbnQgd2l0aCB3aGljaCB0byBsaW1pdCB0aGUgdHJpZ2dlciBzY29wZS5cbiAgICAgKlxuICAgICAqIEludGVybmFsbHksIHRoZSB0cmlnZ2VyIG1hcCB1c2VzIHRoZSBgdHJpZ2dlcmAgcGFyYW1ldGVyIHRvIHN0b3JlIHRoZSB0cmlnZ2VyIHNlbGVjdG9yLlxuICAgICAqL1xuICAgIHBhcnNlVHJpZ2dlcnMoKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YXNldCB9ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICB0aGlzLnRyaWdnZXJzLmNsZWFyKCk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YXNldCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoLy1bQS1aXS8udGVzdChrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1zdHlsZSBmb3IgZGF0YSBhdHRyaWJ1dGU6ICR7a2V5fWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkYXNoU3R5bGUgPSBrZXkucmVwbGFjZSgvKFtBLVpdKS9nLCAobWF0Y2gpID0+IGAtJHttYXRjaC50b0xvd2VyQ2FzZSgpfWApO1xuXG4gICAgICAgICAgICBpZiAoZGFzaFN0eWxlICE9PSAndHJpZ2dlcicgJiYgIWRhc2hTdHlsZS5zdGFydHNXaXRoKCd0cmlnZ2VyLScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0cmlnZ2VyUGFydHMgPSAvKFthLXowLTlcXC0uOl9dKz8pKD86KD86LSkoY2xvc2VzdC1wYXJlbnR8Y29uZGl0aW9ufHdoZW58YWN0aW9ufHBhcmVudHxwcmlvcml0eSkpPyQvaS5leGVjKFxuICAgICAgICAgICAgICAgIGRhc2hTdHlsZS5yZXBsYWNlKCd0cmlnZ2VyLScsICcnKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IHRyaWdnZXJOYW1lID0gbnVsbDtcbiAgICAgICAgICAgIGxldCB0cmlnZ2VyVHlwZSA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBbJ3RyaWdnZXInLCAnY29uZGl0aW9uJywgJ2FjdGlvbicsICdwYXJlbnQnLCAnd2hlbicsICdjbG9zZXN0J10uaW5kZXhPZih0cmlnZ2VyUGFydHNbMV0pICE9PSAtMVxuICAgICAgICAgICAgICAgICYmICh0cmlnZ2VyUGFydHNbMV0gIT09ICdjbG9zZXN0JyB8fCAodHJpZ2dlclBhcnRzWzFdID09PSAnY2xvc2VzdCcgJiYgdHJpZ2dlclBhcnRzWzJdID09PSAncGFyZW50JykpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IG9yaWdpbmFsIHRyaWdnZXIgZm9ybWF0XG4gICAgICAgICAgICAgICAgdHJpZ2dlck5hbWUgPSAnX19vcmlnaW5hbCc7XG4gICAgICAgICAgICAgICAgdHJpZ2dlclR5cGUgPSAodHJpZ2dlclBhcnRzWzFdID09PSAnY2xvc2VzdCcpID8gJ3BhcmVudCcgOiB0cmlnZ2VyUGFydHNbMV07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRyaWdnZXJQYXJ0c1syXSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfHwgWydjbG9zZXN0LXBhcmVudCcsICdjb25kaXRpb24nLCAnd2hlbicsICdhY3Rpb24nLCAncGFyZW50JywgJ3ByaW9yaXR5J10uaW5kZXhPZih0cmlnZ2VyUGFydHNbMl0pICE9PSAtMVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8gUGFyc2UgbXVsdGktdHJpZ2dlciBmb3JtYXRcbiAgICAgICAgICAgICAgICBbLCB0cmlnZ2VyTmFtZV0gPSB0cmlnZ2VyUGFydHM7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cmlnZ2VyUGFydHNbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xvc2VzdC1wYXJlbnQnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdwYXJlbnQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlclR5cGUgPSAncGFyZW50JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjb25kaXRpb24nOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICd3aGVuJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJUeXBlID0gJ2NvbmRpdGlvbic7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYWN0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJUeXBlID0gJ2FjdGlvbic7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncHJpb3JpdHknOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlclR5cGUgPSAncHJpb3JpdHknO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyVHlwZSA9ICd0cmlnZ2VyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLnRyaWdnZXJzLmhhcyh0cmlnZ2VyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJzLnNldCh0cmlnZ2VyTmFtZSwgbmV3IE1hcCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcnMuZ2V0KHRyaWdnZXJOYW1lKS5zZXQodHJpZ2dlclR5cGUsIGRhdGFzZXRba2V5XSk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSB0cmlnZ2VyIGRhdGEgYXR0cmlidXRlIGFmdGVyIHBhcnNpbmdcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhc2V0W2tleV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFZhbGlkYXRlIHRyaWdnZXJzLCBhbmQgcmVtb3ZlIHRob3NlIHRoYXQgZG8gbm90IGhhdmUgYXQgbGVhc3QgYSB0cmlnZ2VyIHNlbGVjdG9yLCBhXG4gICAgICAgIC8vIGNvbmRpdGlvbiBhbmQgYW4gYWN0aW9uLCBvciBhcmUgdXNpbmcgaW52YWxpZCBjb25kaXRpb25zIG9yIGFjdGlvbnNcbiAgICAgICAgdGhpcy50cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZ2V0U2VsZWN0YWJsZUVsZW1lbnRzKHRyaWdnZXIpO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgIXRyaWdnZXIuaGFzKCd0cmlnZ2VyJylcbiAgICAgICAgICAgICAgICB8fCAhdHJpZ2dlci5oYXMoJ2NvbmRpdGlvbicpXG4gICAgICAgICAgICAgICAgfHwgIXRyaWdnZXIuaGFzKCdhY3Rpb24nKVxuICAgICAgICAgICAgICAgIHx8IGVsZW1lbnRzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgIHx8ICF0aGlzLmlzVmFsaWRDb25kaXRpb24odHJpZ2dlcilcbiAgICAgICAgICAgICAgICB8fCAhdGhpcy5pc1ZhbGlkQWN0aW9uKHRyaWdnZXIpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJzLmRlbGV0ZShuYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlci5zZXQoJ2VsZW1lbnRzJywgZWxlbWVudHMpO1xuICAgICAgICAgICAgICAgIGlmICghdHJpZ2dlci5oYXMoJ3ByaW9yaXR5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlci5zZXQoJ3ByaW9yaXR5JywgMTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhIGNvbW1hbmQgZ2l2ZW4gYXMgZWl0aGVyIGEgY29uZGl0aW9uIG9yIGFuIGFjdGlvbi5cbiAgICAgKlxuICAgICAqIENvbW1hbmRzIGFyZSBmb3JtYXR0ZWQgYXM6IG5hbWU6cGFyYW1ldGVyMSxwYXJhbWV0ZXIyLHBhcmFtZXRlcjMsIGFsdGhvdWdoIHdlIGFsc28gc3VwcG9ydFxuICAgICAqIHRoZSBvbGQgZm9ybWF0IG9mIHZhbHVlW3BhcmFtZXRlcjEscGFyYW1ldGVyMixwYXJhbWV0ZXIzXSBmb3IgdGhlIGB2YWx1ZWAgY29tbWFuZCBvbmx5LlxuICAgICAqXG4gICAgICogSWYgYSBwYXJhbWV0ZXIgcmVxdWlyZXMgYSBjb21tYSB3aXRoaW4sIHRoZSBwYXJhbWV0ZXIgc2hvdWxkIGJlIHdyYXBwZWQgaW4gcXVvdGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbW1hbmRcbiAgICAgKiBAcmV0dXJucyB7bmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBwYXJzZUNvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICAvLyBTdXBwb3J0IG9sZC1mb3JtYXQgdmFsdWUgY29tbWFuZCAodmFsdWVbZm9vLGJhcl0pXG4gICAgICAgIGlmIChjb21tYW5kLnN0YXJ0c1dpdGgoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gY29tbWFuZC5tYXRjaCgvW15bXFxdXSsoPz1dKS9nKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuXG4gICAgICAgICAgICAvLyBTcGxpdCB2YWx1ZXMgd2l0aCBjb21tYXNcbiAgICAgICAgICAgIG1hdGNoLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZS5pbmNsdWRlcygnLCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlLnJlcGxhY2UoL15bJ1wiXXxbJ1wiXSQvZywgJycpLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdFZhbHVlcyA9IHZhbHVlLnJlcGxhY2UoLyhcIlteXCJdKlwiKXwoJ1teJ10qJykvZywgKHF1b3RlZCkgPT4gcXVvdGVkLnJlcGxhY2UoLywvZywgJ3x8fCcpKVxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAgICAgICAubWFwKChzcGxpdFZhbHVlKSA9PiBzcGxpdFZhbHVlLnJlcGxhY2UoL1xcfFxcfFxcfC9nLCAnLCcpLnJlcGxhY2UoL15bJ1wiXXxbJ1wiXSQvZywgJycpLnRyaW0oKSk7XG5cbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCguLi5zcGxpdFZhbHVlcyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnM6IHZhbHVlcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbW1hbmQuaW5jbHVkZXMoJzonKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBjb21tYW5kLFxuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnM6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IFtuYW1lLCBwYXJhbWV0ZXJzXSA9IGNvbW1hbmQuc3BsaXQoJzonLCAyKTtcblxuICAgICAgICBpZiAoIXBhcmFtZXRlcnMuaW5jbHVkZXMoJywnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnM6IFtwYXJhbWV0ZXJzXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzcGxpdFZhbHVlcyA9IHBhcmFtZXRlcnMucmVwbGFjZSgvKFwiW15cIl0qXCIpfCgnW14nXSonKS9nLCAocXVvdGVkKSA9PiBxdW90ZWQucmVwbGFjZSgvLC9nLCAnfHx8JykpXG4gICAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgICAgLm1hcCgoc3BsaXRWYWx1ZSkgPT4gc3BsaXRWYWx1ZS5yZXBsYWNlKC9cXHxcXHxcXHwvZywgJywnKS5yZXBsYWNlKC9eWydcIl18WydcIl0kL2csICcnKS50cmltKCkpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGFyYW1ldGVyczogc3BsaXRWYWx1ZXMsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGFueSBlbGVtZW50cyBhcmUgYWNjZXNzaWJsZSBieSB0aGUgcHJvdmlkZWQgdHJpZ2dlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TWFwPFRyaWdnZXJFbnRpdHk+fSB0cmlnZ2VyXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0U2VsZWN0YWJsZUVsZW1lbnRzKHRyaWdnZXIpIHtcbiAgICAgICAgaWYgKHRyaWdnZXIuaGFzKCdwYXJlbnQnKSkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbGVtZW50LmNsb3Nlc3QodHJpZ2dlci5nZXQoJ3BhcmVudCcpKS5xdWVyeVNlbGVjdG9yQWxsKHRyaWdnZXIuZ2V0KCd0cmlnZ2VyJykpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodHJpZ2dlci5nZXQoJ3RyaWdnZXInKSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIHByb3ZpZGVkIHRyaWdnZXIgY29uZGl0aW9uIGlzIHZhbGlkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUcmlnZ2VyRW50aXR5fSB0cmlnZ2VyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNWYWxpZENvbmRpdGlvbih0cmlnZ2VyKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAnY2hlY2tlZCcsXG4gICAgICAgICAgICAndW5jaGVja2VkJyxcbiAgICAgICAgICAgICdlbXB0eScsXG4gICAgICAgICAgICAndmFsdWUnLFxuICAgICAgICAgICAgJ29uZW9mJyxcbiAgICAgICAgICAgICdhbGxvZicsXG4gICAgICAgICAgICAnZm9jdXMnLFxuICAgICAgICAgICAgJ2JsdXInLFxuICAgICAgICBdLmluY2x1ZGVzKHRoaXMucGFyc2VDb21tYW5kKHRyaWdnZXIuZ2V0KCdjb25kaXRpb24nKSkubmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBwcm92aWRlZCB0cmlnZ2VyIGFjdGlvbiBpcyB2YWxpZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VHJpZ2dlckVudGl0eX0gdHJpZ2dlclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzVmFsaWRBY3Rpb24odHJpZ2dlcikge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgJ3Nob3cnLFxuICAgICAgICAgICAgJ2hpZGUnLFxuICAgICAgICAgICAgJ2VuYWJsZScsXG4gICAgICAgICAgICAnZGlzYWJsZScsXG4gICAgICAgICAgICAnZW1wdHknLFxuICAgICAgICAgICAgJ3ZhbHVlJyxcbiAgICAgICAgICAgICdjaGVjaycsXG4gICAgICAgICAgICAndW5jaGVjaycsXG4gICAgICAgICAgICAnY2xhc3MnLFxuICAgICAgICAgICAgJ2F0dHInLFxuICAgICAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgXS5pbmNsdWRlcyh0aGlzLnBhcnNlQ29tbWFuZCh0cmlnZ2VyLmdldCgnYWN0aW9uJykpLm5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHRyaWdnZXIgZXZlbnRzIG9uIHRyaWdnZXIgYW5kIHRhcmdldCBlbGVtZW50cy5cbiAgICAgKi9cbiAgICBjcmVhdGVUcmlnZ2VyRXZlbnRzKCkge1xuICAgICAgICB0aGlzLnRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgcGFyYW1ldGVycyB9ID0gdGhpcy5wYXJzZUNvbW1hbmQodHJpZ2dlci5nZXQoJ2NvbmRpdGlvbicpKTtcblxuICAgICAgICAgICAgc3dpdGNoIChuYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd2YWx1ZSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnb25lb2YnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVZhbHVlRXZlbnQodHJpZ2dlciwgZmFsc2UsIC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhbGxvZic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVmFsdWVFdmVudCh0cmlnZ2VyLCB0cnVlLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZW1wdHknOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVtcHR5RXZlbnQodHJpZ2dlcik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrZWQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3VuY2hlY2tlZCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQ2hlY2tlZEV2ZW50KHRyaWdnZXIsIChuYW1lID09PSAnY2hlY2tlZCcpLCBwYXJhbWV0ZXJzWzBdID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB0cmlnZ2VyIHRoYXQgZmlyZXMgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIHRhcmdldCBlbGVtZW50KHMpIG1hdGNoZXMgb25lIG9mIHRoZVxuICAgICAqIHByb3ZpZGVkIHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VHJpZ2dlckVudGl0eX0gdHJpZ2dlclxuICAgICAqIEBwYXJhbSAgey4uLnN0cmluZ30gdmFsdWVzXG4gICAgICovXG4gICAgY3JlYXRlVmFsdWVFdmVudCh0cmlnZ2VyLCBhbGwsIC4uLnZhbHVlcykge1xuICAgICAgICBjb25zdCBzdXBwb3J0ZWRFbGVtZW50cyA9IG5ldyBTZXQoKTtcblxuICAgICAgICB0cmlnZ2VyLmdldCgnZWxlbWVudHMnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKCdpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9ZmlsZV0sIGlucHV0W3R5cGU9aW1hZ2VdLCBpbnB1dFt0eXBlPXJlc2V0XSwgaW5wdXRbdHlwZT1zdWJtaXRdJykpIHtcbiAgICAgICAgICAgICAgICAvLyBCdXR0b25zIGFuZCBmaWxlIGlucHV0cyBhcmUgdW5zdXBwb3J0ZWRcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJykpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWRFbGVtZW50cy5hZGQoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHRoaXNFdmVudCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRWYWx1ZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgICAgIHN1cHBvcnRlZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKCdpbnB1dFt0eXBlPWNoZWNrYm94XSwgaW5wdXRbdHlwZT1yYWRpb10nKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VmFsdWVzLmFkZChlbGVtZW50LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxlbWVudFZhbHVlcy5hZGQoZWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGFsbCkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMuZXZlcnkoKHZhbHVlKSA9PiBlbGVtZW50VmFsdWVzLmhhcyh2YWx1ZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUFjdGlvbih0cmlnZ2VyLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVBY3Rpb24odHJpZ2dlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZXMuc29tZSgodmFsdWUpID0+IGVsZW1lbnRWYWx1ZXMuaGFzKHZhbHVlKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVBY3Rpb24odHJpZ2dlciwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUFjdGlvbih0cmlnZ2VyLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc3VwcG9ydGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubWF0Y2hlcygnaW5wdXRbdHlwZT1jaGVja2JveF0sIGlucHV0W3R5cGU9cmFkaW9dJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50KGVsZW1lbnQsIHRyaWdnZXIsICdjbGljaycsICgpID0+IHRoaXNFdmVudCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnQoZWxlbWVudCwgdHJpZ2dlciwgJ2lucHV0JywgKCkgPT4gdGhpc0V2ZW50KCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdHJpZ2dlciB0aGF0IGZpcmVzIHdoZW4gdGhlcmUgaXMgbm8gdmFsdWUgd2l0aGluIHRoZSB0YXJnZXQgZWxlbWVudChzKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VHJpZ2dlckVudGl0eX0gdHJpZ2dlclxuICAgICAqL1xuICAgIGNyZWF0ZUVtcHR5RXZlbnQodHJpZ2dlcikge1xuICAgICAgICBjb25zdCBzdXBwb3J0ZWRFbGVtZW50cyA9IG5ldyBTZXQoKTtcblxuICAgICAgICB0cmlnZ2VyLmdldCgnZWxlbWVudHMnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKCdpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9aW1hZ2VdLCBpbnB1dFt0eXBlPXJlc2V0XSwgaW5wdXRbdHlwZT1zdWJtaXRdJykpIHtcbiAgICAgICAgICAgICAgICAvLyBCdXR0b25zIGFuZCBmaWxlIGlucHV0cyBhcmUgdW5zdXBwb3J0ZWRcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJykpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWRFbGVtZW50cy5hZGQoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHRoaXNFdmVudCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRWYWx1ZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgICAgIHN1cHBvcnRlZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKCdpbnB1dFt0eXBlPWNoZWNrYm94XSwgaW5wdXRbdHlwZT1yYWRpb10nKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VmFsdWVzLmFkZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VmFsdWVzLmFkZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRWYWx1ZXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUFjdGlvbih0cmlnZ2VyLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlQWN0aW9uKHRyaWdnZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzdXBwb3J0ZWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKCdpbnB1dFt0eXBlPWNoZWNrYm94XSwgaW5wdXRbdHlwZT1yYWRpb10nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXZlbnQoZWxlbWVudCwgdHJpZ2dlciwgJ2NsaWNrJywgKCkgPT4gdGhpc0V2ZW50KCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudChlbGVtZW50LCB0cmlnZ2VyLCAnaW5wdXQnLCAoKSA9PiB0aGlzRXZlbnQoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB0cmlnZ2VyIHRoYXQgZmlyZXMgd2hlbiBhIHRhcmdldCBlbGVtZW50IGlzIGNoZWNrZWQvdW5jaGVja2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUcmlnZ2VyRW50aXR5fSB0cmlnZ2VyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjaGVja2VkIElmIHRoZSBlbGVtZW50IHNob3VsZCBiZSBjaGVja2VkIG9yIHVuY2hlY2tlZC5cbiAgICAgKiBAcGFyYW0ge251bWJlcnx1bmRlZmluZWR9IGF0TGVhc3QgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGVsZW1lbnRzIHRoYXQgbXVzdCBiZSBjaGVja2VkLlxuICAgICAqICBEZWZhdWx0cyB0byAxIGlmIHVuZGVmaW5lZC5cbiAgICAgKi9cbiAgICBjcmVhdGVDaGVja2VkRXZlbnQodHJpZ2dlciwgY2hlY2tlZCwgYXRMZWFzdCA9IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBzdXBwb3J0ZWRFbGVtZW50cyA9IG5ldyBTZXQoKTtcblxuICAgICAgICB0cmlnZ2VyLmdldCgnZWxlbWVudHMnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAvLyBPbmx5IHN1cHBvcnRzIGNoZWNrYm94ZXMgYW5kIHJhZGlvIGJ1dHRvbnNcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoJ2lucHV0W3R5cGU9cmFkaW9dLCBpbnB1dFt0eXBlPWNoZWNrYm94XScpKSB7XG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkRWxlbWVudHMuYWRkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB0aGlzRXZlbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50VmFsdWVzID0gbmV3IFNldCgpO1xuXG4gICAgICAgICAgICBzdXBwb3J0ZWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQgPT09IGVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VmFsdWVzLmFkZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgYXRMZWFzdENvdW50ID0gYXRMZWFzdCA/IE51bWJlcihhdExlYXN0KSA6IDE7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50VmFsdWVzLnNpemUgPj0gYXRMZWFzdENvdW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlQWN0aW9uKHRyaWdnZXIsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVBY3Rpb24odHJpZ2dlciwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHN1cHBvcnRlZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnQoZWxlbWVudCwgdHJpZ2dlciwgJ2NsaWNrJywgKCkgPT4gdGhpc0V2ZW50KCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGV2ZW50IHRvIGFuIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIHJlZ2lzdGVycyB0aGUgZXZlbnQgaW4gdGhlIGBldmVudHNgIG1hcCBmb3IgbGF0ZXIgdXNhZ2UgYW5kIHJlbW92YWwsIGFuZCBhZGRzIGFcbiAgICAgKiBjb25uZWN0b3IgdG8gdGhlIGVsZW1lbnQgZm9yIHRoZSBldmVudCwgc28gdGhhdCB3ZSBtYXkgZW5hYmxlIHByaW9yaXRpc2F0aW9uIGFuZCBjb250cm9sIG92ZXJcbiAgICAgKiB0aGUgZmlyaW5nIG9mIHRoZSBldmVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtUcmlnZ2VyRW50aXR5fSB0cmlnZ2VyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgYWRkRXZlbnQoZWxlbWVudCwgdHJpZ2dlciwgZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIXRoaXMuZXZlbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHMuc2V0KGVsZW1lbnQsIG5ldyBTZXQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBldmVudCA9IHtcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICBldmVudE5hbWUsXG4gICAgICAgICAgICBwcmlvcml0eTogTnVtYmVyKHRyaWdnZXIuZ2V0KCdwcmlvcml0eScpKSxcbiAgICAgICAgICAgIGV2ZW50OiBjYWxsYmFjayxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmV2ZW50cy5nZXQoZWxlbWVudCkuYWRkKGV2ZW50KTtcblxuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdG9ycy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdG9ycy5zZXQoZWxlbWVudCwgbmV3IE1hcCgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdG9ycy5nZXQoZWxlbWVudCkuaGFzKGV2ZW50TmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdG9ycy5nZXQoZWxlbWVudCkuc2V0KGV2ZW50TmFtZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMuZ2V0KGVsZW1lbnQpLmZvckVhY2goKGVsZW1lbnRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudEV2ZW50LmV2ZW50TmFtZSA9PT0gZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudHMucHVzaChlbGVtZW50RXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEucHJpb3JpdHkgLSBiLnByaW9yaXR5KVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgoZWxlbWVudEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50RXZlbnQuZXZlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy5jb25uZWN0b3JzLmdldChlbGVtZW50KS5nZXQoZXZlbnROYW1lKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBydW5FdmVudHMoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdG9ycy5mb3JFYWNoKChlbGVtZW50Q29ubmVjdG9ycykgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENvbm5lY3RvcnMuZm9yRWFjaCgoY29ubmVjdG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29ubmVjdG9yKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzZXRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdG9ycy5mb3JFYWNoKChlbGVtZW50Q29ubmVjdG9ycywgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENvbm5lY3RvcnMuZm9yRWFjaCgoY29ubmVjdG9yLCBldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY29ubmVjdG9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbm5lY3RvcnMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5ldmVudHMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBleGVjdXRlQWN0aW9uKHRyaWdnZXIsIGNvbmRpdGlvbk1ldCkge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHBhcmFtZXRlcnMgfSA9IHRoaXMucGFyc2VDb21tYW5kKHRyaWdnZXIuZ2V0KCdhY3Rpb24nKSk7XG5cbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdzaG93JzpcbiAgICAgICAgICAgIGNhc2UgJ2hpZGUnOlxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uU2hvdyh0cmlnZ2VyLCAobmFtZSA9PT0gJ3Nob3cnKSA/IGNvbmRpdGlvbk1ldCA6ICFjb25kaXRpb25NZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdGlvblNob3codHJpZ2dlciwgc2hvdykge1xuICAgICAgICBpZiAoc2hvdyAmJiBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC5kYXRhc2V0Lm9yaWdpbmFsRGlzcGxheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSB0aGlzLmVsZW1lbnQuZGF0YXNldC5vcmlnaW5hbERpc3BsYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YXNldC5vcmlnaW5hbERpc3BsYXk7XG5cbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJBY3Rpb24odHJpZ2dlcik7XG4gICAgICAgIH0gZWxzZSBpZiAoIXNob3cgJiYgZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRhdGFzZXQub3JpZ2luYWxEaXNwbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpLmRpc3BsYXk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgdGhpcy5hZnRlckFjdGlvbih0cmlnZ2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFmdGVyQWN0aW9uKHRyaWdnZXIpIHtcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZGVidWcoJ1RyaWdnZXIgZmlyZWQnLCB0aGlzLmVsZW1lbnQsIHRyaWdnZXIpO1xuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgndHJpZ2dlci5maXJlZCcsIHRoaXMuZWxlbWVudCwgdHJpZ2dlcik7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBJbnRlcm5hbCBwcm94eSBmb3IgU25vd2JvYXJkLlxuICpcbiAqIFRoaXMgaGFuZGxlciB3cmFwcyB0aGUgU25vd2JvYXJkIGluc3RhbmNlIHRoYXQgaXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvciBvZiBwbHVnaW4gaW5zdGFuY2VzLlxuICogSXQgcHJldmVudHMgYWNjZXNzIHRvIHRoZSBmb2xsb3dpbmcgbWV0aG9kczpcbiAqICAtIGBhdHRhY2hBYnN0cmFjdHNgOiBObyBuZWVkIHRvIGF0dGFjaCBhYnN0cmFjdHMgYWdhaW4uXG4gKiAgLSBgbG9hZFV0aWx0aWVzYDogTm8gbmVlZCB0byBsb2FkIHV0aWxpdGllcyBhZ2Fpbi5cbiAqICAtIGBpbml0aWFsaXNlYDogU25vd2JvYXJkIGlzIGFscmVhZHkgaW5pdGlhbGlzZWQuXG4gKiAgLSBgaW5pdGlhbGlzZVNpbmdsZXRvbnNgOiBTaW5nbGV0b25zIGFyZSBhbHJlYWR5IGluaXRpYWxpc2VkLlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgcHJvcExvd2VyID0gcHJvcC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBpZiAoWydhdHRhY2hBYnN0cmFjdHMnLCAnbG9hZFV0aWxpdGllcycsICdpbml0aWFsaXNlJywgJ2luaXRpYWxpc2VTaW5nbGV0b25zJ10uaW5jbHVkZXMocHJvcCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBjYW5ub3QgdXNlIHRoZSBcIiR7cHJvcH1cIiBTbm93Ym9hcmQgbWV0aG9kIHdpdGhpbiBhIHBsdWdpbi5gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNQbHVnaW4ocHJvcExvd2VyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoLi4ucGFyYW1zKSA9PiBSZWZsZWN0LmdldCh0YXJnZXQsICdwbHVnaW5zJylbcHJvcExvd2VyXS5nZXRJbnN0YW5jZSguLi5wYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xuICAgIH0sXG5cbiAgICBoYXModGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BMb3dlciA9IHByb3AudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgaWYgKFsnYXR0YWNoQWJzdHJhY3RzJywgJ2xvYWRVdGlsaXRpZXMnLCAnaW5pdGlhbGlzZScsICdpbml0aWFsaXNlU2luZ2xldG9ucyddLmluY2x1ZGVzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc1BsdWdpbihwcm9wTG93ZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVmbGVjdC5oYXModGFyZ2V0LCBwcm9wKTtcbiAgICB9LFxufTtcbiIsImltcG9ydCBQbHVnaW5CYXNlIGZyb20gJy4uL2Fic3RyYWN0cy9QbHVnaW5CYXNlJztcbmltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5pbXBvcnQgSW5uZXJQcm94eUhhbmRsZXIgZnJvbSAnLi9Jbm5lclByb3h5SGFuZGxlcic7XG5cbi8qKlxuICogUGx1Z2luIGxvYWRlciBjbGFzcy5cbiAqXG4gKiBUaGlzIGlzIGEgcHJvdmlkZXIgKGZhY3RvcnkpIGNsYXNzIGZvciBhIHNpbmdsZSBwbHVnaW4gYW5kIHByb3ZpZGVzIHRoZSBsaW5rIGJldHdlZW4gU25vd2JvYXJkIGZyYW1ld29yayBmdW5jdGlvbmFsaXR5XG4gKiBhbmQgdGhlIHVuZGVybHlpbmcgcGx1Z2luIGluc3RhbmNlcy4gSXQgYWxzbyBwcm92aWRlcyBzb21lIGJhc2ljIG1vY2tpbmcgb2YgcGx1Z2luIG1ldGhvZHMgZm9yIHRlc3RpbmcuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpbkxvYWRlciB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBCaW5kcyB0aGUgV2ludGVyIGZyYW1ld29yayB0byB0aGUgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7U25vd2JvYXJkfSBzbm93Ym9hcmRcbiAgICAgKiBAcGFyYW0ge1BsdWdpbkJhc2V9IGluc3RhbmNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSwgc25vd2JvYXJkLCBpbnN0YW5jZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnNub3dib2FyZCA9IG5ldyBQcm94eShcbiAgICAgICAgICAgIHNub3dib2FyZCxcbiAgICAgICAgICAgIElubmVyUHJveHlIYW5kbGVyLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG5cbiAgICAgICAgLy8gRnJlZXplIGluc3RhbmNlIHRoYXQgaGFzIGJlZW4gaW5zZXJ0ZWQgaW50byB0aGlzIGxvYWRlclxuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuaW5zdGFuY2UpO1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzID0gW107XG4gICAgICAgIHRoaXMuc2luZ2xldG9uID0ge1xuICAgICAgICAgICAgaW5pdGlhbGlzZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICAvLyBQcmV2ZW50IGZ1cnRoZXIgZXh0ZW5zaW9uIG9mIHRoZSBzaW5nbGV0b24gc3RhdHVzIG9iamVjdFxuICAgICAgICBPYmplY3Quc2VhbCh0aGlzLnNpbmdsZXRvbik7XG5cbiAgICAgICAgdGhpcy5tb2NrcyA9IHt9O1xuICAgICAgICB0aGlzLm9yaWdpbmFsRnVuY3Rpb25zID0ge307XG5cbiAgICAgICAgLy8gRnJlZXplIGxvYWRlciBpdHNlbGZcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShQbHVnaW5Mb2FkZXIucHJvdG90eXBlKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBjdXJyZW50IHBsdWdpbiBoYXMgYSBzcGVjaWZpYyBtZXRob2QgYXZhaWxhYmxlLlxuICAgICAqXG4gICAgICogUmV0dXJucyBmYWxzZSBpZiB0aGUgY3VycmVudCBwbHVnaW4gaXMgYSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzTWV0aG9kKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHR5cGVvZiB0aGlzLmluc3RhbmNlLnByb3RvdHlwZVttZXRob2ROYW1lXSA9PT0gJ2Z1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgYSBwcm90b3R5cGUgbWV0aG9kIGZvciBhIHBsdWdpbi4gVGhpcyBzaG91bGQgZ2VuZXJhbGx5IGJlIHVzZWQgZm9yIFwic3RhdGljXCIgY2FsbHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICAgICAqIEBwYXJhbSB7Li4ufSBhcmdzXG4gICAgICogQHJldHVybnMge2FueX1cbiAgICAgKi9cbiAgICBjYWxsTWV0aG9kKC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFyZ3MgPSBwYXJhbWV0ZXJzO1xuICAgICAgICBjb25zdCBtZXRob2ROYW1lID0gYXJncy5zaGlmdCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnByb3RvdHlwZVttZXRob2ROYW1lXShhcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBjdXJyZW50IHBsdWdpbi5cbiAgICAgKlxuICAgICAqIC0gSWYgdGhpcyBpcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHBsdWdpbiwgdGhlIGZ1bmN0aW9uIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgICogLSBJZiB0aGlzIGlzIGEgc2luZ2xldG9uLCB0aGUgc2luZ2xlIGluc3RhbmNlIG9mIHRoZSBwbHVnaW4gd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQbHVnaW5CYXNlfEZ1bmN0aW9ufVxuICAgICAqL1xuICAgIGdldEluc3RhbmNlKC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZSguLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZGVwZW5kZW5jaWVzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHVubWV0ID0gdGhpcy5nZXREZXBlbmRlbmNpZXMoKS5maWx0ZXIoKGl0ZW0pID0+ICF0aGlzLnNub3dib2FyZC5nZXRQbHVnaW5OYW1lcygpLmluY2x1ZGVzKGl0ZW0pKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwiJHt0aGlzLm5hbWV9XCIgcGx1Z2luIHJlcXVpcmVzIHRoZSBmb2xsb3dpbmcgcGx1Z2luczogJHt1bm1ldC5qb2luKCcsICcpfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU2luZ2xldG9uKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VTaW5nbGV0b24oLi4ucGFyYW1ldGVycyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IG1vY2tlZCBtZXRob2RzXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5tb2NrcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMub3JpZ2luYWxGdW5jdGlvbnMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFttZXRob2ROYW1lLCBjYWxsYmFja10gPSBlbnRyeTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbMF1bbWV0aG9kTmFtZV0gPSBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLm1vY2tzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBbbWV0aG9kTmFtZSwgY2FsbGJhY2tdID0gZW50cnk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzWzBdW21ldGhvZE5hbWVdID0gKC4uLnBhcmFtcykgPT4gY2FsbGJhY2sodGhpcywgLi4ucGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwbHkgbW9ja2VkIG1ldGhvZHMgdG8gcHJvdG90eXBlXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLm1vY2tzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLm9yaWdpbmFsRnVuY3Rpb25zKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFttZXRob2ROYW1lLCBjYWxsYmFja10gPSBlbnRyeTtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLm1vY2tzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFttZXRob2ROYW1lLCBjYWxsYmFja10gPSBlbnRyeTtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnByb3RvdHlwZVttZXRob2ROYW1lXSA9ICguLi5wYXJhbXMpID0+IGNhbGxiYWNrKHRoaXMsIC4uLnBhcmFtcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld0luc3RhbmNlID0gbmV3IHRoaXMuaW5zdGFuY2UodGhpcy5zbm93Ym9hcmQsIC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICBuZXdJbnN0YW5jZS5kZXRhY2ggPSAoKSA9PiB0aGlzLmluc3RhbmNlcy5zcGxpY2UodGhpcy5pbnN0YW5jZXMuaW5kZXhPZihuZXdJbnN0YW5jZSksIDEpO1xuICAgICAgICBuZXdJbnN0YW5jZS5jb25zdHJ1Y3QoLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2gobmV3SW5zdGFuY2UpO1xuXG4gICAgICAgIHJldHVybiBuZXdJbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGFsbCBpbnN0YW5jZXMgb2YgdGhlIGN1cnJlbnQgcGx1Z2luLlxuICAgICAqXG4gICAgICogSWYgdGhpcyBwbHVnaW4gaXMgYSBjYWxsYmFjayBmdW5jdGlvbiBwbHVnaW4sIGFuIGVtcHR5IGFycmF5IHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UGx1Z2luQmFzZVtdfVxuICAgICAqL1xuICAgIGdldEluc3RhbmNlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgY3VycmVudCBwbHVnaW4gaXMgYSBzaW1wbGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0Z1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiB0aGlzLmluc3RhbmNlID09PSAnZnVuY3Rpb24nICYmIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlIGluc3RhbmNlb2YgUGx1Z2luQmFzZSA9PT0gZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgcGx1Z2luIGlzIGEgc2luZ2xldG9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNTaW5nbGV0b24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIFNpbmdsZXRvbiA9PT0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGEgc2luZ2xldG9uIGhhcyBiZWVuIGluaXRpYWxpc2VkLlxuICAgICAqXG4gICAgICogTm9ybWFsIHBsdWdpbnMgd2lsbCBhbHdheXMgcmV0dXJuIHRydWUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0luaXRpYWxpc2VkKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTaW5nbGV0b24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zaW5nbGV0b24uaW5pdGlhbGlzZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGluaXRpYWxpc2VTaW5nbGV0b24oLi4ucGFyYW1ldGVycykge1xuICAgICAgICBpZiAoIXRoaXMuaXNTaW5nbGV0b24oKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3SW5zdGFuY2UgPSBuZXcgdGhpcy5pbnN0YW5jZSh0aGlzLnNub3dib2FyZCwgLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIG5ld0luc3RhbmNlLmRldGFjaCA9ICgpID0+IHRoaXMuaW5zdGFuY2VzLnNwbGljZSh0aGlzLmluc3RhbmNlcy5pbmRleE9mKG5ld0luc3RhbmNlKSwgMSk7XG4gICAgICAgIG5ld0luc3RhbmNlLmNvbnN0cnVjdCguLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChuZXdJbnN0YW5jZSk7XG4gICAgICAgIHRoaXMuc2luZ2xldG9uLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBkZXBlbmRlbmNpZXMgb2YgdGhlIGN1cnJlbnQgcGx1Z2luLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGdldERlcGVuZGVuY2llcygpIHtcbiAgICAgICAgLy8gQ2FsbGJhY2sgZnVuY3Rpb25zIGNhbm5vdCBoYXZlIGRlcGVuZGVuY2llcy5cbiAgICAgICAgaWYgKHRoaXMuaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICAvLyBObyBkZXBlbmRlbmN5IG1ldGhvZCBzcGVjaWZpZWQuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5pbnN0YW5jZS5wcm90b3R5cGUuZGVwZW5kZW5jaWVzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5wcm90b3R5cGUuZGVwZW5kZW5jaWVzKCkubWFwKChpdGVtKSA9PiBpdGVtLnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgcGx1Z2luIGhhcyBhbGwgaXRzIGRlcGVuZGVuY2llcyBmdWxmaWxsZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXNGdWxmaWxsZWQoKSB7XG4gICAgICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IHRoaXMuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgICAgICAgbGV0IGZ1bGZpbGxlZCA9IHRydWU7XG4gICAgICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoKChwbHVnaW4pID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zbm93Ym9hcmQuaGFzUGx1Z2luKHBsdWdpbikpIHtcbiAgICAgICAgICAgICAgICBmdWxmaWxsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bGZpbGxlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgYSBtZXRob2Qgb2YgYW4gaW5zdGFuY2UgdG8gYmUgbW9ja2VkIGZvciB0ZXN0aW5nLlxuICAgICAqXG4gICAgICogVGhpcyBtb2NrIHdpbGwgYmUgYXBwbGllZCBmb3IgdGhlIGxpZmUgb2YgYW4gaW5zdGFuY2UuIEZvciBzaW5nbGV0b25zLCB0aGUgbW9jayB3aWxsIGJlIGFwcGxpZWQgZm9yIHRoZSBsaWZlXG4gICAgICogb2YgdGhlIHBhZ2UuXG4gICAgICpcbiAgICAgKiBNb2NrcyBjYW5ub3QgYmUgYXBwbGllZCB0byBjYWxsYmFjayBmdW5jdGlvbiBwbHVnaW5zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIG1vY2sobWV0aG9kTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZ1bmN0aW9uIFwiJHttZXRob2ROYW1lfVwiIGRvZXMgbm90IGV4aXN0IGFuZCBjYW5ub3QgYmUgbW9ja2VkYCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vY2tzW21ldGhvZE5hbWVdID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMub3JpZ2luYWxGdW5jdGlvbnNbbWV0aG9kTmFtZV0gPSB0aGlzLmluc3RhbmNlLnByb3RvdHlwZVttZXRob2ROYW1lXTtcblxuICAgICAgICBpZiAodGhpcy5pc1NpbmdsZXRvbigpICYmIHRoaXMuaW5zdGFuY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXNlU2luZ2xldG9uKCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IG1vY2tlZCBtZXRob2RcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzWzBdW21ldGhvZE5hbWVdID0gKC4uLnBhcmFtZXRlcnMpID0+IGNhbGxiYWNrKHRoaXMsIC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIG1vY2sgY2FsbGJhY2sgZnJvbSBmdXR1cmUgaW5zdGFuY2VzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAgICAgKi9cbiAgICB1bm1vY2sobWV0aG9kTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubW9ja3NbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzU2luZ2xldG9uKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzWzBdW21ldGhvZE5hbWVdID0gdGhpcy5vcmlnaW5hbEZ1bmN0aW9uc1ttZXRob2ROYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSB0aGlzLm1vY2tzW21ldGhvZE5hbWVdO1xuICAgICAgICBkZWxldGUgdGhpcy5vcmlnaW5hbEZ1bmN0aW9uc1ttZXRob2ROYW1lXTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgcHJvcExvd2VyID0gcHJvcC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc1BsdWdpbihwcm9wTG93ZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICguLi5wYXJhbXMpID0+IFJlZmxlY3QuZ2V0KHRhcmdldCwgJ3BsdWdpbnMnKVtwcm9wTG93ZXJdLmdldEluc3RhbmNlKC4uLnBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XG4gICAgfSxcblxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgcHJvcExvd2VyID0gcHJvcC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc1BsdWdpbihwcm9wTG93ZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVmbGVjdC5oYXModGFyZ2V0LCBwcm9wKTtcbiAgICB9LFxufTtcbiIsImltcG9ydCBQbHVnaW5CYXNlIGZyb20gJy4uL2Fic3RyYWN0cy9QbHVnaW5CYXNlJztcbmltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5pbXBvcnQgUGx1Z2luTG9hZGVyIGZyb20gJy4vUGx1Z2luTG9hZGVyJztcblxuaW1wb3J0IENvb2tpZSBmcm9tICcuLi91dGlsaXRpZXMvQ29va2llJztcbmltcG9ydCBKc29uUGFyc2VyIGZyb20gJy4uL3V0aWxpdGllcy9Kc29uUGFyc2VyJztcbmltcG9ydCBTYW5pdGl6ZXIgZnJvbSAnLi4vdXRpbGl0aWVzL1Nhbml0aXplcic7XG5pbXBvcnQgVXJsIGZyb20gJy4uL3V0aWxpdGllcy9VcmwnO1xuXG4vKipcbiAqIFNub3dib2FyZCAtIHRoZSBXaW50ZXIgSmF2YVNjcmlwdCBmcmFtZXdvcmsuXG4gKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBiYXNlIG9mIGEgbW9kZXJuIHRha2Ugb24gdGhlIFdpbnRlciBKUyBmcmFtZXdvcmssIGJlaW5nIGZ1bGx5IGV4dGVuc2libGUgYW5kIHRha2luZyBhZHZhbnRhZ2VcbiAqIG9mIG1vZGVybiBKYXZhU2NyaXB0IGZlYXR1cmVzIGJ5IGxldmVyYWdpbmcgdGhlIExhcmF2ZWwgTWl4IGNvbXBpbGF0aW9uIGZyYW1ld29yay4gSXQgYWxzbyBpcyBjb2RlZCB1cCB0byByZW1vdmUgdGhlXG4gKiBkZXBlbmRlbmN5IG9mIGpRdWVyeS5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqIEBsaW5rIGh0dHBzOi8vd2ludGVyY21zLmNvbS9kb2NzL3Nub3dib2FyZC9pbnRyb2R1Y3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25vd2JvYXJkIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYXV0b1NpbmdsZXRvbnMgQXV0b21hdGljYWxseSBsb2FkIHNpbmdsZXRvbnMgd2hlbiBET00gaXMgcmVhZHkuIERlZmF1bHQ6IGB0cnVlYC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRlYnVnIFdoZXRoZXIgZGVidWdnaW5nIGxvZ3Mgc2hvdWxkIGJlIHNob3duLiBEZWZhdWx0OiBgZmFsc2VgLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGF1dG9TaW5nbGV0b25zLCBkZWJ1Zykge1xuICAgICAgICB0aGlzLmRlYnVnRW5hYmxlZCA9ICh0eXBlb2YgZGVidWcgPT09ICdib29sZWFuJyAmJiBkZWJ1ZyA9PT0gdHJ1ZSk7XG4gICAgICAgIHRoaXMuYXV0b0luaXRTaW5nbGV0b25zID0gKHR5cGVvZiBhdXRvU2luZ2xldG9ucyA9PT0gJ2Jvb2xlYW4nICYmIGF1dG9TaW5nbGV0b25zID09PSBmYWxzZSk7XG4gICAgICAgIHRoaXMucGx1Z2lucyA9IHt9O1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgICAgICB0aGlzLmZvdW5kQmFzZVVybCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVhZGluZXNzID0ge1xuICAgICAgICAgICAgZG9tOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gU2VhbCByZWFkaW5lc3MgZnJvbSBiZWluZyBhZGRlZCB0byBmdXJ0aGVyLCBidXQgYWxsb3cgdGhlIHByb3BlcnRpZXMgdG8gYmUgbW9kaWZpZWQuXG4gICAgICAgIE9iamVjdC5zZWFsKHRoaXMucmVhZGluZXNzKTtcbiAgICAgICAgdGhpcy5hdHRhY2hBYnN0cmFjdHMoKTtcblxuICAgICAgICAvLyBGcmVlemUgdGhlIFNub3dib2FyZCBjbGFzcyB0byBwcmV2ZW50IGZ1cnRoZXIgbW9kaWZpY2F0aW9ucy5cbiAgICAgICAgT2JqZWN0LmZyZWV6ZShTbm93Ym9hcmQucHJvdG90eXBlKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcblxuICAgICAgICB0aGlzLmxvYWRVdGlsaXRpZXMoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlKCk7XG5cbiAgICAgICAgdGhpcy5kZWJ1ZygnU25vd2JvYXJkIGZyYW1ld29yayBpbml0aWFsaXNlZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGFic3RyYWN0IGNsYXNzZXMgYXMgcHJvcGVydGllcyBvZiB0aGUgU25vd2JvYXJkIGNsYXNzLlxuICAgICAqXG4gICAgICogVGhpcyB3aWxsIGFsbG93IEphdmFzY3JpcHQgZnVuY3Rpb25hbGl0eSB3aXRoIG5vIGJ1aWxkIHByb2Nlc3MgdG8gc3RpbGwgZXh0ZW5kIHRoZXNlIGFic3RyYWN0cyBieSBwcmVmaXhpbmdcbiAgICAgKiB0aGVtIHdpdGggXCJTbm93Ym9hcmRcIi5cbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIGNsYXNzIE15Q2xhc3MgZXh0ZW5kcyBTbm93Ym9hcmQuUGx1Z2luQmFzZSB7XG4gICAgICogICAgIC4uLlxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBhdHRhY2hBYnN0cmFjdHMoKSB7XG4gICAgICAgIHRoaXMuUGx1Z2luQmFzZSA9IFBsdWdpbkJhc2U7XG4gICAgICAgIHRoaXMuU2luZ2xldG9uID0gU2luZ2xldG9uO1xuXG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5QbHVnaW5CYXNlLnByb3RvdHlwZSk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5QbHVnaW5CYXNlKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLlNpbmdsZXRvbi5wcm90b3R5cGUpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuU2luZ2xldG9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkcyB0aGUgZGVmYXVsdCB1dGlsaXRpZXMuXG4gICAgICovXG4gICAgbG9hZFV0aWxpdGllcygpIHtcbiAgICAgICAgdGhpcy5hZGRQbHVnaW4oJ2Nvb2tpZScsIENvb2tpZSk7XG4gICAgICAgIHRoaXMuYWRkUGx1Z2luKCdqc29uUGFyc2VyJywgSnNvblBhcnNlcik7XG4gICAgICAgIHRoaXMuYWRkUGx1Z2luKCdzYW5pdGl6ZXInLCBTYW5pdGl6ZXIpO1xuICAgICAgICB0aGlzLmFkZFBsdWdpbigndXJsJywgVXJsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlcyB0aGUgZnJhbWV3b3JrLlxuICAgICAqXG4gICAgICogQXR0YWNoZXMgYSBsaXN0ZW5lciBmb3IgdGhlIERPTSBiZWluZyByZWFkeSBhbmQgdHJpZ2dlcnMgYSBnbG9iYWwgXCJyZWFkeVwiIGV2ZW50IGZvciBwbHVnaW5zIHRvIGJlZ2luIGF0dGFjaGluZ1xuICAgICAqIHRoZW1zZWx2ZXMgdG8gdGhlIERPTS5cbiAgICAgKi9cbiAgICBpbml0aWFsaXNlKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF1dG9Jbml0U2luZ2xldG9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGlzZVNpbmdsZXRvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsRXZlbnQoJ3JlYWR5Jyk7XG4gICAgICAgICAgICB0aGlzLnJlYWRpbmVzcy5kb20gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlcyBhbiBpbnN0YW5jZSBvZiBldmVyeSBzaW5nbGV0b24uXG4gICAgICovXG4gICAgaW5pdGlhbGlzZVNpbmdsZXRvbnMoKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wbHVnaW5zKS5mb3JFYWNoKChwbHVnaW4pID0+IHtcbiAgICAgICAgICAgIGlmIChwbHVnaW4uaXNTaW5nbGV0b24oKSAmJiBwbHVnaW4uZGVwZW5kZW5jaWVzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgICAgICBwbHVnaW4uaW5pdGlhbGlzZVNpbmdsZXRvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgcGx1Z2luIHRvIHRoZSBmcmFtZXdvcmsuXG4gICAgICpcbiAgICAgKiBQbHVnaW5zIGFyZSB0aGUgY29ybmVyc3RvbmUgZm9yIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eSBmb3IgU25vd2JvYXJkLiBBIHBsdWdpbiBtdXN0IGVpdGhlciBiZSBhbiBFUzIwMTUgY2xhc3NcbiAgICAgKiB0aGF0IGV4dGVuZHMgdGhlIFBsdWdpbkJhc2Ugb3IgU2luZ2xldG9uIGFic3RyYWN0IGNsYXNzZXMsIG9yIGEgc2ltcGxlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqXG4gICAgICogV2hlbiBhIHBsdWdpbiBpcyBhZGRlZCwgaXQgaXMgYXV0b21hdGljYWxseSBhc3NpZ25lZCBhcyBhIG5ldyBtYWdpYyBtZXRob2QgaW4gdGhlIFNub3dib2FyZCBjbGFzcyB1c2luZyB0aGUgbmFtZVxuICAgICAqIHBhcmFtZXRlciwgYW5kIGNhbiBiZSBjYWxsZWQgdmlhIHRoaXMgbWV0aG9kLiBUaGlzIG1ldGhvZCB3aWxsIGFsd2F5cyBiZSB0aGUgXCJsb3dlcmNhc2VcIiB2ZXJzaW9uIG9mIHRoaXMgbmFtZS5cbiAgICAgKlxuICAgICAqIEZvciBleGFtcGxlLCBpZiBhIHBsdWdpbiBpcyBhc3NpZ25lZCB0byB0aGUgbmFtZSBcIm15UGx1Z2luXCIsIGl0IGNhbiBiZSBjYWxsZWQgdmlhIGBTbm93Ym9hcmQubXlwbHVnaW4oKWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7UGx1Z2luQmFzZXxGdW5jdGlvbn0gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGRQbHVnaW4obmFtZSwgaW5zdGFuY2UpIHtcbiAgICAgICAgY29uc3QgbG93ZXJOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmhhc1BsdWdpbihsb3dlck5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEEgcGx1Z2luIGNhbGxlZCBcIiR7bmFtZX1cIiBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGluc3RhbmNlICE9PSAnZnVuY3Rpb24nICYmIGluc3RhbmNlIGluc3RhbmNlb2YgUGx1Z2luQmFzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHByb3ZpZGVkIHBsdWdpbiBtdXN0IGV4dGVuZCB0aGUgUGx1Z2luQmFzZSBjbGFzcywgb3IgbXVzdCBiZSBhIGNhbGxiYWNrIGZ1bmN0aW9uLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXNbbmFtZV0gIT09IHVuZGVmaW5lZCB8fCB0aGlzW2xvd2VyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZ2l2ZW4gbmFtZSBpcyBhbHJlYWR5IGluIHVzZSBmb3IgYSBwcm9wZXJ0eSBvciBtZXRob2Qgb2YgdGhlIFNub3dib2FyZCBjbGFzcy4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGx1Z2luc1tsb3dlck5hbWVdID0gbmV3IFBsdWdpbkxvYWRlcihsb3dlck5hbWUsIHRoaXMsIGluc3RhbmNlKTtcblxuICAgICAgICB0aGlzLmRlYnVnKGBQbHVnaW4gXCIke25hbWV9XCIgcmVnaXN0ZXJlZGApO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGFueSBzaW5nbGV0b25zIG5vdyBoYXZlIHRoZWlyIGRlcGVuZGVuY2llcyBmdWxmaWxsZWQsIGFuZCBmaXJlIHRoZWlyIFwicmVhZHlcIiBoYW5kbGVyIGlmIHdlJ3JlXG4gICAgICAgIC8vIGluIGEgcmVhZHkgc3RhdGUuXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5nZXRQbHVnaW5zKCkpLmZvckVhY2goKHBsdWdpbikgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHBsdWdpbi5pc1NpbmdsZXRvbigpXG4gICAgICAgICAgICAgICAgJiYgIXBsdWdpbi5pc0luaXRpYWxpc2VkKClcbiAgICAgICAgICAgICAgICAmJiBwbHVnaW4uZGVwZW5kZW5jaWVzRnVsZmlsbGVkKClcbiAgICAgICAgICAgICAgICAmJiBwbHVnaW4uaGFzTWV0aG9kKCdsaXN0ZW5zJylcbiAgICAgICAgICAgICAgICAmJiBPYmplY3Qua2V5cyhwbHVnaW4uY2FsbE1ldGhvZCgnbGlzdGVucycpKS5pbmNsdWRlcygncmVhZHknKVxuICAgICAgICAgICAgICAgICYmIHRoaXMucmVhZGluZXNzLmRvbVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZHlNZXRob2QgPSBwbHVnaW4uY2FsbE1ldGhvZCgnbGlzdGVucycpLnJlYWR5O1xuICAgICAgICAgICAgICAgIHBsdWdpbi5jYWxsTWV0aG9kKHJlYWR5TWV0aG9kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIHBsdWdpbi5cbiAgICAgKlxuICAgICAqIFJlbW92ZXMgYSBwbHVnaW4gZnJvbSBTbm93Ym9hcmQsIGNhbGxpbmcgdGhlIGRlc3RydWN0b3IgbWV0aG9kIGZvciBhbGwgYWN0aXZlIGluc3RhbmNlcyBvZiB0aGUgcGx1Z2luLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVQbHVnaW4obmFtZSkge1xuICAgICAgICBjb25zdCBsb3dlck5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc1BsdWdpbihsb3dlck5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnKGBQbHVnaW4gXCIke25hbWV9XCIgYWxyZWFkeSByZW1vdmVkYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxsIGRlc3RydWN0b3JzIGZvciBhbGwgaW5zdGFuY2VzXG4gICAgICAgIHRoaXMucGx1Z2luc1tsb3dlck5hbWVdLmdldEluc3RhbmNlcygpLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICBpbnN0YW5jZS5kZXN0cnVjdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkZWxldGUgdGhpcy5wbHVnaW5zW2xvd2VyTmFtZV07XG4gICAgICAgIGRlbGV0ZSB0aGlzW2xvd2VyTmFtZV07XG4gICAgICAgIGRlbGV0ZSB0aGlzW25hbWVdO1xuXG4gICAgICAgIHRoaXMuZGVidWcoYFBsdWdpbiBcIiR7bmFtZX1cIiByZW1vdmVkYCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhIHBsdWdpbiBoYXMgYmVlbiByZWdpc3RlcmVkIGFuZCBpcyBhY3RpdmUuXG4gICAgICpcbiAgICAgKiBBIHBsdWdpbiB0aGF0IGlzIHN0aWxsIHdhaXRpbmcgZm9yIGRlcGVuZGVuY2llcyB0byBiZSByZWdpc3RlcmVkIHdpbGwgbm90IGJlIGFjdGl2ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzUGx1Z2luKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbG93ZXJOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIHJldHVybiAodGhpcy5wbHVnaW5zW2xvd2VyTmFtZV0gIT09IHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiByZWdpc3RlcmVkIHBsdWdpbnMgYXMgUGx1Z2luTG9hZGVyIG9iamVjdHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UGx1Z2luTG9hZGVyW119XG4gICAgICovXG4gICAgZ2V0UGx1Z2lucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Z2lucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHJlZ2lzdGVyZWQgcGx1Z2lucywgYnkgbmFtZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBnZXRQbHVnaW5OYW1lcygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMucGx1Z2lucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIFBsdWdpbkxvYWRlciBvYmplY3Qgb2YgYSBnaXZlbiBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UGx1Z2luTG9hZGVyfVxuICAgICAqL1xuICAgIGdldFBsdWdpbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IGxvd2VyTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzUGx1Z2luKGxvd2VyTmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gcGx1Z2luIGNhbGxlZCBcIiR7bG93ZXJOYW1lfVwiIGhhcyBiZWVuIHJlZ2lzdGVyZWQuYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW5zW2xvd2VyTmFtZV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgYWxsIHBsdWdpbnMgdGhhdCBsaXN0ZW4gdG8gdGhlIGdpdmVuIGV2ZW50LlxuICAgICAqXG4gICAgICogVGhpcyB3b3JrcyBmb3IgYm90aCBub3JtYWwgYW5kIHByb21pc2UgZXZlbnRzLiBJdCBkb2VzIE5PVCBjaGVjayB0aGF0IHRoZSBwbHVnaW4ncyBsaXN0ZW5lciBhY3R1YWxseSBleGlzdHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfSBUaGUgbmFtZSBvZiB0aGUgcGx1Z2lucyB0aGF0IGFyZSBsaXN0ZW5pbmcgdG8gdGhpcyBldmVudC5cbiAgICAgKi9cbiAgICBsaXN0ZW5zVG9FdmVudChldmVudE5hbWUpIHtcbiAgICAgICAgY29uc3QgcGx1Z2lucyA9IFtdO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucGx1Z2lucykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtuYW1lLCBwbHVnaW5dID0gZW50cnk7XG5cbiAgICAgICAgICAgIGlmIChwbHVnaW4uaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwbHVnaW4uZGVwZW5kZW5jaWVzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBsdWdpbi5oYXNNZXRob2QoJ2xpc3RlbnMnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gcGx1Z2luLmNhbGxNZXRob2QoJ2xpc3RlbnMnKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnNbZXZlbnROYW1lXSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGxpc3RlbmVyc1tldmVudE5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2lucy5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcGx1Z2lucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBzaW1wbGUgcmVhZHkgbGlzdGVuZXIuXG4gICAgICpcbiAgICAgKiBTeW5vbnltb3VzIHdpdGggalF1ZXJ5J3MgXCIkKGRvY3VtZW50KS5yZWFkeSgpXCIgZnVuY3Rpb25hbGl0eSwgdGhpcyBhbGxvd3MgaW5saW5lIHNjcmlwdHMgdG9cbiAgICAgKiBhdHRhY2ggdGhlbXNlbHZlcyB0byBTbm93Ym9hcmQgaW1tZWRpYXRlbHkgYnV0IG9ubHkgZmlyZSB3aGVuIHRoZSBET00gaXMgcmVhZHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIHJlYWR5KGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWRpbmVzcy5kb20pIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uKCdyZWFkeScsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgc2ltcGxlIGxpc3RlbmVyIGZvciBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWQgZm9yIGFkLWhvYyBzY3JpcHRzIHRoYXQgZG9uJ3QgbmVlZCBhIGZ1bGwgcGx1Z2luLiBUaGUgZ2l2ZW4gY2FsbGJhY2sgd2lsbCBiZVxuICAgICAqIGNhbGxlZCB3aGVuIHRoZSBldmVudCBuYW1lIHByb3ZpZGVkIGZpcmVzLiBUaGlzIHdvcmtzIGZvciBib3RoIG5vcm1hbCBhbmQgUHJvbWlzZSBldmVudHMuIEZvclxuICAgICAqIGEgUHJvbWlzZSBldmVudCwgeW91ciBjYWxsYmFjayBtdXN0IHJldHVybiBhIFByb21pc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBvbihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmluY2x1ZGVzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBzaW1wbGUgbGlzdGVuZXIgZm9yIGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgb2ZmKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0uaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBhIGdsb2JhbCBldmVudCB0byBhbGwgcmVnaXN0ZXJlZCBwbHVnaW5zLlxuICAgICAqXG4gICAgICogSWYgYW55IHBsdWdpbiByZXR1cm5zIGEgYGZhbHNlYCwgdGhlIGV2ZW50IGlzIGNvbnNpZGVyZWQgY2FuY2VsbGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBJZiBldmVudCB3YXMgbm90IGNhbmNlbGxlZFxuICAgICAqL1xuICAgIGdsb2JhbEV2ZW50KGV2ZW50TmFtZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICB0aGlzLmRlYnVnKGBDYWxsaW5nIGdsb2JhbCBldmVudCBcIiR7ZXZlbnROYW1lfVwiYCwgLi4ucGFyYW1ldGVycyk7XG5cbiAgICAgICAgLy8gRmluZCBwbHVnaW5zIGxpc3RlbmluZyB0byB0aGUgZXZlbnQuXG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuc1RvRXZlbnQoZXZlbnROYW1lKTtcbiAgICAgICAgaWYgKGxpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVidWcoYE5vIGxpc3RlbmVycyBmb3VuZCBmb3IgZ2xvYmFsIGV2ZW50IFwiJHtldmVudE5hbWV9XCJgKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVidWcoYExpc3RlbmVycyBmb3VuZCBmb3IgZ2xvYmFsIGV2ZW50IFwiJHtldmVudE5hbWV9XCI6ICR7bGlzdGVuZXJzLmpvaW4oJywgJyl9YCk7XG5cbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuXG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLmdldFBsdWdpbihuYW1lKTtcblxuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGx1Z2luLmlzU2luZ2xldG9uKCkgJiYgcGx1Z2luLmdldEluc3RhbmNlcygpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBsdWdpbi5pbml0aWFsaXNlU2luZ2xldG9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3Rlbk1ldGhvZCA9IHBsdWdpbi5jYWxsTWV0aG9kKCdsaXN0ZW5zJylbZXZlbnROYW1lXTtcblxuICAgICAgICAgICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyIG1ldGhvZHMgZm9yIGFsbCBwbHVnaW5zLCBpZiB0aGV5IGhhdmUgYSBtZXRob2Qgc3BlY2lmaWVkIGZvciB0aGUgZXZlbnQuXG4gICAgICAgICAgICBwbHVnaW4uZ2V0SW5zdGFuY2VzKCkuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIHBsdWdpbiBoYXMgY2FuY2VsbGVkIHRoZSBldmVudCwgbm8gZnVydGhlciBwbHVnaW5zIGFyZSBjb25zaWRlcmVkLlxuICAgICAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuTWV0aG9kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBsaXN0ZW5NZXRob2QuYXBwbHkoaW5zdGFuY2UsIHBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIGluIFwiJHtldmVudE5hbWV9XCIgZXZlbnQgYnkgXCIke25hbWV9XCIgcGx1Z2luLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdGVuTWV0aG9kID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWluc3RhbmNlW2xpc3Rlbk1ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBcIiR7bGlzdGVuTWV0aG9kfVwiIG1ldGhvZCBpbiBcIiR7bmFtZX1cIiBwbHVnaW5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VbbGlzdGVuTWV0aG9kXSguLi5wYXJhbWV0ZXJzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVidWcoYEdsb2JhbCBldmVudCBcIiR7ZXZlbnROYW1lfVwiIGNhbmNlbGxlZCBieSBcIiR7bmFtZX1cIiBwbHVnaW5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHRocm93biBpbiBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGJ5IFwiJHtuYW1lfVwiIHBsdWdpbi5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoYExpc3RlbiBtZXRob2QgZm9yIFwiJHtldmVudE5hbWV9XCIgZXZlbnQgaW4gXCIke25hbWV9XCIgcGx1Z2luIGlzIG5vdCBhIGZ1bmN0aW9uIG9yIHN0cmluZy5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRmluZCBhZC1ob2MgbGlzdGVuZXJzIGZvciB0aGlzIGV2ZW50LlxuICAgICAgICBpZiAoIWNhbmNlbGxlZCAmJiB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdICYmIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgRm91bmQgJHt0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmxlbmd0aH0gYWQtaG9jIGxpc3RlbmVyKHMpIGZvciBnbG9iYWwgZXZlbnQgXCIke2V2ZW50TmFtZX1cImApO1xuXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYSBsaXN0ZW5lciBoYXMgY2FuY2VsbGVkIHRoZSBldmVudCwgbm8gZnVydGhlciBsaXN0ZW5lcnMgYXJlIGNvbnNpZGVyZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyKC4uLnBhcmFtZXRlcnMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVidWcoYEdsb2JhbCBldmVudCBcIiR7ZXZlbnROYW1lfSBjYW5jZWxsZWQgYnkgYW4gYWQtaG9jIGxpc3RlbmVyLmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gaW4gXCIke2V2ZW50TmFtZX1cIiBldmVudCBieSBhbiBhZC1ob2MgbGlzdGVuZXIuYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICFjYW5jZWxsZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgYSBnbG9iYWwgZXZlbnQgdG8gYWxsIHJlZ2lzdGVyZWQgcGx1Z2lucywgZXhwZWN0aW5nIGEgUHJvbWlzZSB0byBiZSByZXR1cm5lZCBieSBhbGwuXG4gICAgICpcbiAgICAgKiBUaGlzIGNvbGxhdGVzIGFsbCBwbHVnaW5zIHJlc3BvbnNlcyBpbnRvIG9uZSBsYXJnZSBQcm9taXNlIHRoYXQgZWl0aGVyIGV4cGVjdHMgYWxsIHRvIGJlIHJlc29sdmVkLCBvciBvbmUgdG8gcmVqZWN0LlxuICAgICAqIElmIG5vIGxpc3RlbmVycyBhcmUgZm91bmQsIGEgcmVzb2x2ZWQgUHJvbWlzZSBpcyByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICAgKi9cbiAgICBnbG9iYWxQcm9taXNlRXZlbnQoZXZlbnROYW1lLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIHRoaXMuZGVidWcoYENhbGxpbmcgZ2xvYmFsIHByb21pc2UgZXZlbnQgXCIke2V2ZW50TmFtZX1cImApO1xuXG4gICAgICAgIC8vIEZpbmQgcGx1Z2lucyBsaXN0ZW5pbmcgdG8gdGhpcyBldmVudC5cbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5zVG9FdmVudChldmVudE5hbWUpO1xuICAgICAgICBpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgTm8gbGlzdGVuZXJzIGZvdW5kIGZvciBnbG9iYWwgcHJvbWlzZSBldmVudCBcIiR7ZXZlbnROYW1lfVwiYCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWJ1ZyhgTGlzdGVuZXJzIGZvdW5kIGZvciBnbG9iYWwgcHJvbWlzZSBldmVudCBcIiR7ZXZlbnROYW1lfVwiOiAke2xpc3RlbmVycy5qb2luKCcsICcpfWApO1xuXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG5cbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocGx1Z2luLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwbHVnaW4uaXNTaW5nbGV0b24oKSAmJiBwbHVnaW4uZ2V0SW5zdGFuY2VzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luLmluaXRpYWxpc2VTaW5nbGV0b24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGlzdGVuTWV0aG9kID0gcGx1Z2luLmNhbGxNZXRob2QoJ2xpc3RlbnMnKVtldmVudE5hbWVdO1xuXG4gICAgICAgICAgICAvLyBDYWxsIGV2ZW50IGhhbmRsZXIgbWV0aG9kcyBmb3IgYWxsIHBsdWdpbnMsIGlmIHRoZXkgaGF2ZSBhIG1ldGhvZCBzcGVjaWZpZWQgZm9yIHRoZSBldmVudC5cbiAgICAgICAgICAgIHBsdWdpbi5nZXRJbnN0YW5jZXMoKS5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuTWV0aG9kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZVByb21pc2UgPSBsaXN0ZW5NZXRob2QuYXBwbHkoaW5zdGFuY2UsIHBhcmFtZXRlcnMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goaW5zdGFuY2VQcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHRocm93biBpbiBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGJ5IFwiJHtuYW1lfVwiIHBsdWdpbi5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3Rlbk1ldGhvZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnN0YW5jZVtsaXN0ZW5NZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgXCIke2xpc3Rlbk1ldGhvZH1cIiBtZXRob2QgaW4gXCIke25hbWV9XCIgcGx1Z2luYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2VQcm9taXNlID0gaW5zdGFuY2VbbGlzdGVuTWV0aG9kXSguLi5wYXJhbWV0ZXJzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGluc3RhbmNlUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gaW4gXCIke2V2ZW50TmFtZX1cIiBwcm9taXNlIGV2ZW50IGJ5IFwiJHtuYW1lfVwiIHBsdWdpbi5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoYExpc3RlbiBtZXRob2QgZm9yIFwiJHtldmVudE5hbWV9XCIgZXZlbnQgaW4gXCIke25hbWV9XCIgcGx1Z2luIGlzIG5vdCBhIGZ1bmN0aW9uIG9yIHN0cmluZy5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRmluZCBhZC1ob2MgbGlzdGVuZXJzIGxpc3RlbmluZyB0byB0aGlzIGV2ZW50LlxuICAgICAgICBpZiAodGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXSAmJiB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVidWcoYEZvdW5kICR7dGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGh9IGFkLWhvYyBsaXN0ZW5lcihzKSBmb3IgZ2xvYmFsIHByb21pc2UgZXZlbnQgXCIke2V2ZW50TmFtZX1cImApO1xuXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJQcm9taXNlID0gbGlzdGVuZXIoLi4ucGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lclByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChsaXN0ZW5lclByb21pc2UpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIGluIFwiJHtldmVudE5hbWV9XCIgcHJvbWlzZSBldmVudCBieSBhbiBhZC1ob2MgbGlzdGVuZXIuYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb21pc2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2cgYSBzdHlsZWQgbWVzc2FnZSBpbiB0aGUgY29uc29sZS5cbiAgICAgKlxuICAgICAqIEluY2x1ZGVzIHBhcmFtZXRlcnMgYW5kIGEgc3RhY2sgdHJhY2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBsb2dNZXNzYWdlKGNvbG9yLCBib2xkLCBtZXNzYWdlLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgICAgICAnJWNbU25vd2JvYXJkXScsXG4gICAgICAgICAgICBgY29sb3I6ICR7Y29sb3J9OyBmb250LXdlaWdodDogJHsoYm9sZCkgPyAnYm9sZCcgOiAnbm9ybWFsJ307YCxcbiAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICAgICAgICAgIGAlY1BhcmFtZXRlcnMgJWMoJHtwYXJhbWV0ZXJzLmxlbmd0aH0pYCxcbiAgICAgICAgICAgICAgICAnY29sb3I6IHJnYig0NSwgMTY3LCAxOTkpOyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgICAgICdjb2xvcjogcmdiKDg4LCA4OCwgODgpOyBmb250LXdlaWdodDogbm9ybWFsOydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICAgICAgcGFyYW1ldGVycy5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjJHtpbmRleH06YCwgJ2NvbG9yOiByZ2IoODgsIDg4LCA4OCk7IGZvbnQtd2VpZ2h0OiBub3JtYWw7JywgcGFyYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJyVjVHJhY2UnLCAnY29sb3I6IHJnYig0NSwgMTY3LCAxOTkpOyBmb250LXdlaWdodDogYm9sZDsnKTtcbiAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2cgYSBtZXNzYWdlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgbG9nKG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKCdyZ2IoNDUsIDE2NywgMTk5KScsIGZhbHNlLCBtZXNzYWdlLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2cgYSBkZWJ1ZyBtZXNzYWdlLlxuICAgICAqXG4gICAgICogVGhlc2UgbWVzc2FnZXMgYXJlIG9ubHkgc2hvd24gd2hlbiBkZWJ1Z2dpbmcgaXMgZW5hYmxlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGRlYnVnKG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRlYnVnRW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKCdyZ2IoNDUsIDE2NywgMTk5KScsIGZhbHNlLCBtZXNzYWdlLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2dzIGFuIGVycm9yIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBlcnJvcihtZXNzYWdlLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIHRoaXMubG9nTWVzc2FnZSgncmdiKDIyOSwgMzUsIDM1KScsIHRydWUsIG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpO1xuICAgIH1cbn1cbiIsImltcG9ydCBCYXNlQ29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIENvb2tpZSB1dGlsaXR5LlxuICpcbiAqIFRoaXMgdXRpbGl0eSBpcyBhIHRoaW4gd3JhcHBlciBhcm91bmQgdGhlIFwianMtY29va2llXCIgbGlicmFyeS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICBjb25zdHJ1Y3QoKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBleHBpcmVzOiBudWxsLFxuICAgICAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICAgICAgZG9tYWluOiBudWxsLFxuICAgICAgICAgICAgc2VjdXJlOiBmYWxzZSxcbiAgICAgICAgICAgIHNhbWVTaXRlOiAnTGF4JyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGRlZmF1bHQgY29va2llIHBhcmFtZXRlcnMgZm9yIGFsbCBzdWJzZXF1ZW50IFwic2V0XCIgYW5kIFwicmVtb3ZlXCIgY2FsbHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIHNldERlZmF1bHRzKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb29raWUgZGVmYXVsdHMgbXVzdCBiZSBwcm92aWRlZCBhcyBhbiBvYmplY3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdHNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0c1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBkZWZhdWx0IGNvb2tpZSBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXREZWZhdWx0cygpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7fTtcblxuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLmRlZmF1bHRzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gZW50cnk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRzW2tleV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0c1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBjb29raWUgYnkgbmFtZS5cbiAgICAgKlxuICAgICAqIElmIGBuYW1lYCBpcyB1bmRlZmluZWQsIHJldHVybnMgYWxsIGNvb2tpZXMgYXMgYW4gT2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fFN0cmluZ31cbiAgICAgKi9cbiAgICBnZXQobmFtZSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjb29raWVzID0gQmFzZUNvb2tpZS5nZXQoKTtcblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY29va2llcykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbY29va2llTmFtZSwgY29va2llVmFsdWVdID0gZW50cnk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnY29va2llLmdldCcsIGNvb2tpZU5hbWUsIGNvb2tpZVZhbHVlLCAobmV3VmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29va2llc1tjb29raWVOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjb29raWVzO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbHVlID0gQmFzZUNvb2tpZS5nZXQobmFtZSk7XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBvdmVycmlkZSB0aGUgZ290dGVuIHZhbHVlXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdjb29raWUuZ2V0JywgbmFtZSwgdmFsdWUsIChuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhIGNvb2tpZSBieSBuYW1lLlxuICAgICAqXG4gICAgICogWW91IGNhbiBzcGVjaWZ5IGFkZGl0aW9uYWwgY29va2llIHBhcmFtZXRlcnMgdGhyb3VnaCB0aGUgXCJvcHRpb25zXCIgcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgc2V0KG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGxldCBzYXZlVmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIG92ZXJyaWRlIHRoZSB2YWx1ZSB0byBzYXZlXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdjb29raWUuc2V0JywgbmFtZSwgdmFsdWUsIChuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgc2F2ZVZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBCYXNlQ29va2llLnNldChuYW1lLCBzYXZlVmFsdWUsIHtcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdHMoKSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGNvb2tpZSBieSBuYW1lLlxuICAgICAqXG4gICAgICogWW91IGNhbiBzcGVjaWZ5IHRoZSBhZGRpdGlvbmFsIGNvb2tpZSBwYXJhbWV0ZXJzIHZpYSB0aGUgXCJvcHRpb25zXCIgcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbW92ZShuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIEJhc2VDb29raWUucmVtb3ZlKG5hbWUsIHtcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdHMoKSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogSlNPTiBQYXJzZXIgdXRpbGl0eS5cbiAqXG4gKiBUaGlzIHV0aWxpdHkgcGFyc2VzIEpTT04tbGlrZSBkYXRhIHRoYXQgZG9lcyBub3Qgc3RyaWN0bHkgbWVldCB0aGUgSlNPTiBzcGVjaWZpY2F0aW9ucyBpbiBvcmRlciB0byBzaW1wbGlmeSBkZXZlbG9wbWVudC5cbiAqIEl0IGlzIGEgc2FmZSByZXBsYWNlbWVudCBmb3IgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShldmFsKFwiKHtcIiArIHZhbHVlICsgXCJ9KVwiKSkpIHRoYXQgZG9lcyBub3QgcmVxdWlyZSB0aGUgdXNlIG9mIGV2YWwoKVxuICpcbiAqIEBhdXRob3IgQXl1bWkgSGFtYXNha2lcbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9vY3RvYmVyY21zL29jdG9iZXIvcHVsbC80NTI3XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25QYXJzZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgLy8gQWRkIHRvIGdsb2JhbCBmdW5jdGlvbiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgICAgd2luZG93LnduSlNPTiA9IChqc29uKSA9PiB0aGlzLnBhcnNlKGpzb24pO1xuICAgICAgICB3aW5kb3cub2NKU09OID0gd2luZG93LnduSlNPTjtcbiAgICB9XG5cbiAgICBwYXJzZShzdHIpIHtcbiAgICAgICAgY29uc3QganNvblN0cmluZyA9IHRoaXMucGFyc2VTdHJpbmcoc3RyKTtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvblN0cmluZyk7XG4gICAgfVxuXG4gICAgcGFyc2VTdHJpbmcodmFsdWUpIHtcbiAgICAgICAgbGV0IHN0ciA9IHZhbHVlLnRyaW0oKTtcblxuICAgICAgICBpZiAoIXN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQnJva2VuIEpTT04gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICBsZXQgdHlwZSA9IG51bGw7XG4gICAgICAgIGxldCBrZXkgPSBudWxsO1xuICAgICAgICBsZXQgYm9keSA9ICcnO1xuXG4gICAgICAgIC8qXG4gICAgICAgICogdGhlIG1pc3Rha2UgJywnXG4gICAgICAgICovXG4gICAgICAgIHdoaWxlIChzdHIgJiYgc3RyWzBdID09PSAnLCcpIHtcbiAgICAgICAgICAgIHN0ciA9IHN0ci5zdWJzdHIoMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAqIHN0cmluZ1xuICAgICAgICAqL1xuICAgICAgICBpZiAoc3RyWzBdID09PSAnXCInIHx8IHN0clswXSA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgIGlmIChzdHJbc3RyLmxlbmd0aCAtIDFdICE9PSBzdHJbMF0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nIEpTT04gb2JqZWN0LicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib2R5ID0gJ1wiJztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaSArIDFdID09PSAnXFwnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaSArIDFdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSBzdHJbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSAnXCInO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYm9keTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9ICdcXFxcXCInO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZyBKU09OIG9iamVjdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICogYm9vbGVhblxuICAgICAgICAqL1xuICAgICAgICBpZiAoc3RyID09PSAndHJ1ZScgfHwgc3RyID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBudWxsXG4gICAgICAgICovXG4gICAgICAgIGlmIChzdHIgPT09ICdudWxsJykge1xuICAgICAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICogbnVtYmVyXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IG51bSA9IE51bWJlcihzdHIpO1xuICAgICAgICBpZiAoIU51bWJlci5pc05hTihudW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAqIG9iamVjdFxuICAgICAgICAqL1xuICAgICAgICBpZiAoc3RyWzBdID09PSAneycpIHtcbiAgICAgICAgICAgIHR5cGUgPSAnbmVlZEtleSc7XG4gICAgICAgICAgICBrZXkgPSBudWxsO1xuICAgICAgICAgICAgcmVzdWx0ID0gJ3snO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQmxhbmtDaGFyKHN0cltpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ25lZWRLZXknICYmIChzdHJbaV0gPT09ICdcIicgfHwgc3RyW2ldID09PSAnXFwnJykpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gdGhpcy5wYXJzZUtleShzdHIsIGkgKyAxLCBzdHJbaV0pO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gYFwiJHtrZXl9XCJgO1xuICAgICAgICAgICAgICAgICAgICBpICs9IGtleS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdhZnRlcktleSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbmVlZEtleScgJiYgdGhpcy5jYW5CZUtleUhlYWQoc3RyW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLnBhcnNlS2V5KHN0ciwgaSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnXCInO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0ga2V5O1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ1wiJztcbiAgICAgICAgICAgICAgICAgICAgaSArPSBrZXkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdhZnRlcktleSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnYWZ0ZXJLZXknICYmIHN0cltpXSA9PT0gJzonKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnOic7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnOic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnOicpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IHRoaXMuZ2V0Qm9keShzdHIsIGkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGkgPSBpICsgYm9keS5vcmlnaW5MZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gdGhpcy5wYXJzZVN0cmluZyhib2R5LmJvZHkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnYWZ0ZXJCb2R5JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhZnRlckJvZHknIHx8IHR5cGUgPT09ICduZWVkS2V5Jykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChzdHJbbGFzdF0gPT09ICcsJyB8fCB0aGlzLmlzQmxhbmtDaGFyKHN0cltsYXN0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3QgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2xhc3RdID09PSAnfScgJiYgbGFzdCA9PT0gc3RyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyKDAsIHJlc3VsdC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnfSc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0ICE9PSBpICYmIHJlc3VsdCAhPT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJywnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICduZWVkS2V5JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBsYXN0IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBvYmplY3QgbmVhciAke3Jlc3VsdH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICogYXJyYXlcbiAgICAgICAgKi9cbiAgICAgICAgaWYgKHN0clswXSA9PT0gJ1snKSB7XG4gICAgICAgICAgICByZXN1bHQgPSAnWyc7XG4gICAgICAgICAgICB0eXBlID0gJ25lZWRCb2R5JztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJyAnIHx8IHN0cltpXSA9PT0gJ1xcbicgfHwgc3RyW2ldID09PSAnXFx0Jykge1xuICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbmVlZEJvZHknKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdudWxsLCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICddJyAmJiBpID09PSBzdHIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHIoMCwgcmVzdWx0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICddJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBib2R5ID0gdGhpcy5nZXRCb2R5KHN0ciwgaSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaSA9IGkgKyBib2R5Lm9yaWdpbkxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLnBhcnNlU3RyaW5nKGJvZHkuYm9keSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdhZnRlckJvZHknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2FmdGVyQm9keScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJywnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICduZWVkQm9keSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYWwgd2l0aCBtaXN0YWtlIFwiLFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc3RyW2kgKyAxXSA9PT0gJywnIHx8IHRoaXMuaXNCbGFua0NoYXIoc3RyW2kgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2kgKyAxXSA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnbnVsbCwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnXScgJiYgaSA9PT0gc3RyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnXSc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIGFycmF5IG5lYXIgJHtyZXN1bHR9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgZ2V0Qm9keShzdHIsIHBvcykge1xuICAgICAgICBsZXQgYm9keSA9ICcnO1xuXG4gICAgICAgIC8vIHBhcnNlIHN0cmluZyBib2R5XG4gICAgICAgIGlmIChzdHJbcG9zXSA9PT0gJ1wiJyB8fCBzdHJbcG9zXSA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgIGJvZHkgPSBzdHJbcG9zXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHBvcyArIDE7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICsgMSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09IHN0cltwb3NdKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW3Bvc107XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5MZW5ndGg6IGJvZHkubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gc3RyaW5nIGJvZHkgbmVhciAke2JvZHl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXJzZSB0cnVlIC8gZmFsc2VcbiAgICAgICAgaWYgKHN0cltwb3NdID09PSAndCcpIHtcbiAgICAgICAgICAgIGlmIChzdHIuaW5kZXhPZigndHJ1ZScsIHBvcykgPT09IHBvcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogJ3RydWUnLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogJ3RydWUnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gYm9vbGVhbiBib2R5IG5lYXIgJHtzdHIuc3Vic3RyKDAsIHBvcyArIDEwKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RyW3Bvc10gPT09ICdmJykge1xuICAgICAgICAgICAgaWYgKHN0ci5pbmRleE9mKCdmJywgcG9zKSA9PT0gcG9zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVuZ3RoOiAnZmFsc2UnLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogJ2ZhbHNlJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIGJvb2xlYW4gYm9keSBuZWFyICR7c3RyLnN1YnN0cigwLCBwb3MgKyAxMCl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXJzZSBudWxsXG4gICAgICAgIGlmIChzdHJbcG9zXSA9PT0gJ24nKSB7XG4gICAgICAgICAgICBpZiAoc3RyLmluZGV4T2YoJ251bGwnLCBwb3MpID09PSBwb3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5MZW5ndGg6ICdudWxsJy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6ICdudWxsJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIGJvb2xlYW4gYm9keSBuZWFyICR7c3RyLnN1YnN0cigwLCBwb3MgKyAxMCl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXJzZSBudW1iZXJcbiAgICAgICAgaWYgKHN0cltwb3NdID09PSAnLScgfHwgc3RyW3Bvc10gPT09ICcrJyB8fCBzdHJbcG9zXSA9PT0gJy4nIHx8IChzdHJbcG9zXSA+PSAnMCcgJiYgc3RyW3Bvc10gPD0gJzknKSkge1xuICAgICAgICAgICAgYm9keSA9ICcnO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcG9zOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJy0nIHx8IHN0cltpXSA9PT0gJysnIHx8IHN0cltpXSA9PT0gJy4nIHx8IChzdHJbaV0gPj0gJzAnICYmIHN0cltpXSA8PSAnOScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2ldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5MZW5ndGg6IGJvZHkubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gbnVtYmVyIGJvZHkgbmVhciAke2JvZHl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXJzZSBvYmplY3RcbiAgICAgICAgaWYgKHN0cltwb3NdID09PSAneycgfHwgc3RyW3Bvc10gPT09ICdbJykge1xuICAgICAgICAgICAgY29uc3Qgc3RhY2sgPSBbXG4gICAgICAgICAgICAgICAgc3RyW3Bvc10sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgYm9keSA9IHN0cltwb3NdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcG9zICsgMTsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2ldO1xuICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSArIDEgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gIT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHN0cltpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdID09PSAnXFwnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gIT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goc3RyW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gIT09ICdcIicgJiYgc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gIT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICd7Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCgneycpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJ30nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gPT09ICd7Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OICR7KHN0cltwb3NdID09PSAneycgPyAnb2JqZWN0JyA6ICdhcnJheScpfSBib2R5IG5lYXIgJHtib2R5fWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJ1snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKCdbJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnXScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSA9PT0gJ1snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gJHsoc3RyW3Bvc10gPT09ICd7JyA/ICdvYmplY3QnIDogJ2FycmF5Jyl9IGJvZHkgbmVhciAke2JvZHl9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogaSAtIHBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OICR7KHN0cltwb3NdID09PSAneycgPyAnb2JqZWN0JyA6ICdhcnJheScpfSBib2R5IG5lYXIgJHtib2R5fWApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBib2R5IG5lYXIgJHtzdHIuc3Vic3RyKChwb3MgLSA1ID49IDApID8gcG9zIC0gNSA6IDAsIDUwKX1gKTtcbiAgICB9XG5cbiAgICBwYXJzZUtleShzdHIsIHBvcywgcXVvdGUpIHtcbiAgICAgICAgbGV0IGtleSA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBwb3M7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChxdW90ZSAmJiBxdW90ZSA9PT0gc3RyW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcXVvdGUgJiYgKHN0cltpXSA9PT0gJyAnIHx8IHN0cltpXSA9PT0gJzonKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGtleSArPSBzdHJbaV07XG5cbiAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICdcXFxcJyAmJiBpICsgMSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBrZXkgKz0gc3RyW2kgKyAxXTtcbiAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIHN5bnRheCBuZWFyICR7a2V5fWApO1xuICAgIH1cblxuICAgIGNhbkJlS2V5SGVhZChjaCkge1xuICAgICAgICBpZiAoY2hbMF0gPT09ICdcXFxcJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoY2hbMF0gPj0gJ2EnICYmIGNoWzBdIDw9ICd6JykgfHwgKGNoWzBdID49ICdBJyAmJiBjaFswXSA8PSAnWicpIHx8IGNoWzBdID09PSAnXycpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaFswXSA+PSAnMCcgJiYgY2hbMF0gPD0gJzknKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hbMF0gPT09ICckJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoLmNoYXJDb2RlQXQoMCkgPiAyNTUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlzQmxhbmtDaGFyKGNoKSB7XG4gICAgICAgIHJldHVybiBjaCA9PT0gJyAnIHx8IGNoID09PSAnXFxuJyB8fCBjaCA9PT0gJ1xcdCc7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBTYW5pdGl6ZXIgdXRpbGl0eS5cbiAqXG4gKiBDbGllbnQtc2lkZSBIVE1MIHNhbml0aXplciBkZXNpZ25lZCBtb3N0bHkgdG8gcHJldmVudCBzZWxmLVhTUyBhdHRhY2tzLlxuICogVGhlIHNhbml0aXplciB1dGlsaXR5IHdpbGwgc3RyaXAgYWxsIGF0dHJpYnV0ZXMgdGhhdCBzdGFydCB3aXRoIGBvbmAgKHVzdWFsbHkgSlMgZXZlbnQgaGFuZGxlcnMgYXMgYXR0cmlidXRlcywgaS5lLiBgb25sb2FkYCBvciBgb25lcnJvcmApIG9yIGNvbnRhaW4gdGhlIGBqYXZhc2NyaXB0OmAgcHNldWRvIHByb3RvY29sIGluIHRoZWlyIHZhbHVlcy5cbiAqXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYW5pdGl6ZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgLy8gQWRkIHRvIGdsb2JhbCBmdW5jdGlvbiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgICAgd2luZG93LnduU2FuaXRpemUgPSAoaHRtbCkgPT4gdGhpcy5zYW5pdGl6ZShodG1sKTtcbiAgICAgICAgd2luZG93Lm9jU2FuaXRpemUgPSB3aW5kb3cud25TYW5pdGl6ZTtcbiAgICB9XG5cbiAgICBzYW5pdGl6ZShodG1sLCBib2R5T25seSkge1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IGRvbSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpO1xuICAgICAgICBjb25zdCByZXR1cm5Cb2R5T25seSA9IChib2R5T25seSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBib2R5T25seSA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgICAgICAgPyBib2R5T25seVxuICAgICAgICAgICAgOiB0cnVlO1xuXG4gICAgICAgIHRoaXMuc2FuaXRpemVOb2RlKGRvbS5nZXRSb290Tm9kZSgpKTtcblxuICAgICAgICByZXR1cm4gKHJldHVybkJvZHlPbmx5KSA/IGRvbS5ib2R5LmlubmVySFRNTCA6IGRvbS5pbm5lckhUTUw7XG4gICAgfVxuXG4gICAgc2FuaXRpemVOb2RlKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ1NDUklQVCcpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyaW1BdHRyaWJ1dGVzKG5vZGUpO1xuXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gQXJyYXkuZnJvbShub2RlLmNoaWxkcmVuKTtcblxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zYW5pdGl6ZU5vZGUoY2hpbGQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0cmltQXR0cmlidXRlcyhub2RlKSB7XG4gICAgICAgIGlmICghbm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgYXR0ck5hbWUgPSBub2RlLmF0dHJpYnV0ZXMuaXRlbShpKS5uYW1lO1xuICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gbm9kZS5hdHRyaWJ1dGVzLml0ZW0oaSkudmFsdWU7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAqIHJlbW92ZSBhdHRyaWJ1dGVzIHdoZXJlIHRoZSBuYW1lcyBzdGFydCB3aXRoIFwib25cIiAoZm9yIGV4YW1wbGU6IG9ubG9hZCwgb25lcnJvci4uLilcbiAgICAgICAgICAgICogcmVtb3ZlIGF0dHJpYnV0ZXMgd2hlcmUgdGhlIHZhbHVlIHN0YXJ0cyB3aXRoIHRoZSBcImphdmFzY3JpcHQ6XCIgcHNldWRvIHByb3RvY29sIChmb3IgZXhhbXBsZSBocmVmPVwiamF2YXNjcmlwdDphbGVydCgxKVwiKVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgaWYgKGF0dHJOYW1lLmluZGV4T2YoJ29uJykgPT09IDAgfHwgYXR0clZhbHVlLmluZGV4T2YoJ2phdmFzY3JpcHQ6JykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIFVSTCB1dGlsaXR5LlxuICpcbiAqIFRoaXMgdXRpbGl0eSBwcm92aWRlcyBVUkwgZnVuY3Rpb25zLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMiBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmwgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgdGhpcy5mb3VuZEJhc2VVcmwgPSBudWxsO1xuICAgICAgICB0aGlzLmZvdW5kQXNzZXRVcmwgPSBudWxsO1xuICAgICAgICB0aGlzLmJhc2VVcmwoKTtcbiAgICAgICAgdGhpcy5hc3NldFVybCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBVUkwgYmFzZWQgb24gYSByZWxhdGl2ZSBwYXRoLlxuICAgICAqXG4gICAgICogSWYgYW4gYWJzb2x1dGUgVVJMIGlzIHByb3ZpZGVkLCBpdCB3aWxsIGJlIHJldHVybmVkIHVuY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRvKHVybCkge1xuICAgICAgICBjb25zdCB1cmxSZWdleCA9IC9eKD86W146XSs6XFwvXFwvKVstYS16MC05QDolLl8rfiM9XXsxLDI1Nn1cXGIoWy1hLXowLTkoKUA6JV8rLn4jPyYvLz1dKikvaTtcblxuICAgICAgICBpZiAodXJsLm1hdGNoKHVybFJlZ2V4KSkge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRoZVVybCA9IHVybC5yZXBsYWNlKC9eXFwvKy8sICcnKTtcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy5iYXNlVXJsKCl9JHt0aGVVcmx9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGFuIEFzc2V0IFVSTCBiYXNlZCBvbiBhIHJlbGF0aXZlIHBhdGguXG4gICAgICpcbiAgICAgKiBJZiBhbiBhYnNvbHV0ZSBVUkwgaXMgcHJvdmlkZWQsIGl0IHdpbGwgYmUgcmV0dXJuZWQgdW5jaGFuZ2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgYXNzZXQodXJsKSB7XG4gICAgICAgIGNvbnN0IHVybFJlZ2V4ID0gL14oPzpbXjpdKzpcXC9cXC8pWy1hLXowLTlAOiUuXyt+Iz1dezEsMjU2fVxcYihbLWEtejAtOSgpQDolXysufiM/Ji8vPV0qKS9pO1xuXG4gICAgICAgIGlmICh1cmwubWF0Y2godXJsUmVnZXgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGhlVXJsID0gdXJsLnJlcGxhY2UoL15cXC8rLywgJycpO1xuXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmFzc2V0VXJsKCl9JHt0aGVVcmx9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGdldCB0aGUgYmFzZSBVUkwgb2YgdGhpcyBpbnN0YWxsLlxuICAgICAqXG4gICAgICogVGhpcyBkZXRlcm1pbmVzIHRoZSBiYXNlIFVSTCBmcm9tIHRocmVlIHNvdXJjZXMsIGluIG9yZGVyOlxuICAgICAqICAtIElmIFNub3dib2FyZCBpcyBsb2FkZWQgdmlhIHRoZSBgeyUgc25vd2JvYXJkICV9YCB0YWcsIGl0IHdpbGwgcmV0cmlldmUgdGhlIGJhc2UgVVJMIHRoYXRcbiAgICAgKiBpcyBhdXRvbWF0aWNhbGx5IGluY2x1ZGVkIHRoZXJlLlxuICAgICAqICAtIElmIGEgYDxiYXNlPmAgdGFnIGlzIGF2YWlsYWJsZSwgaXQgd2lsbCB1c2UgdGhlIFVSTCBzcGVjaWZpZWQgaW4gdGhlIGJhc2UgdGFnLlxuICAgICAqICAtIEZpbmFsbHksIGl0IHdpbGwgdGFrZSBhIGd1ZXNzIGZyb20gdGhlIGN1cnJlbnQgbG9jYXRpb24uIFRoaXMgd2lsbCBsaWtlbHkgbm90IHdvcmsgZm9yIHNpdGVzXG4gICAgICogdGhhdCByZXNpZGUgaW4gc3ViZGlyZWN0b3JpZXMuXG4gICAgICpcbiAgICAgKiBUaGUgYmFzZSBVUkwgd2lsbCBhbHdheXMgY29udGFpbiBhIHRyYWlsaW5nIGJhY2tzbGFzaC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgYmFzZVVybCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm91bmRCYXNlVXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZEJhc2VVcmw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W2RhdGEtbW9kdWxlPVwic25vd2JvYXJkLWJhc2VcIl0nKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZEJhc2VVcmwgPSB0aGlzLnZhbGlkYXRlQmFzZVVybChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1tb2R1bGU9XCJzbm93Ym9hcmQtYmFzZVwiXScpLmRhdGFzZXQuYmFzZVVybCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZEJhc2VVcmw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmFzZScpICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kQmFzZVVybCA9IHRoaXMudmFsaWRhdGVCYXNlVXJsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Jhc2UnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZEJhc2VVcmw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmxQYXJ0cyA9IFtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCxcbiAgICAgICAgICAgICcvLycsXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaG9zdCxcbiAgICAgICAgICAgICcvJyxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5mb3VuZEJhc2VVcmwgPSB1cmxQYXJ0cy5qb2luKCcnKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5mb3VuZEJhc2VVcmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBnZXQgdGhlIGFzc2V0IFVSTCBvZiB0aGlzIGluc3RhbGwuXG4gICAgICpcbiAgICAgKiBUaGlzIGRldGVybWluZXMgdGhlIGJhc2UgVVJMIGZyb20gdGhyZWUgc291cmNlcywgaW4gb3JkZXI6XG4gICAgICogIC0gSWYgU25vd2JvYXJkIGlzIGxvYWRlZCB2aWEgdGhlIGB7JSBzbm93Ym9hcmQgJX1gIHRhZywgaXQgd2lsbCByZXRyaWV2ZSB0aGUgYXNzZXQgVVJMIHRoYXRcbiAgICAgKiBpcyBhdXRvbWF0aWNhbGx5IGluY2x1ZGVkIHRoZXJlLlxuICAgICAqICAtIElmIGEgYDxsaW5rIHJlbD1cImFzc2V0X3VybFwiIGhyZWY9XCJodHRwczovL2V4YW1wbGUuY29tXCI+YCB0YWcgaXMgYXZhaWxhYmxlLCBpdCB3aWxsIHVzZSB0aGUgVVJMIHNwZWNpZmllZCBpbiB0aGUgbGluayB0YWcuXG4gICAgICogIC0gRmluYWxseSwgaXQgd2lsbCB0YWtlIGEgZ3Vlc3MgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbi4gVGhpcyB3aWxsIGxpa2VseSBub3Qgd29yayBmb3Igc2l0ZXNcbiAgICAgKiB0aGF0IHJlc2lkZSBpbiBzdWJkaXJlY3Rvcmllcy5cbiAgICAgKlxuICAgICAqIFRoZSBhc3NldCBVUkwgd2lsbCBhbHdheXMgY29udGFpbiBhIHRyYWlsaW5nIGJhY2tzbGFzaC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgYXNzZXRVcmwoKSB7XG4gICAgICAgIGlmICh0aGlzLmZvdW5kQXNzZXRVcmwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kQXNzZXRVcmw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W2RhdGEtbW9kdWxlPVwic25vd2JvYXJkLWJhc2VcIl0nKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZEFzc2V0VXJsID0gdGhpcy52YWxpZGF0ZUJhc2VVcmwoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W2RhdGEtbW9kdWxlPVwic25vd2JvYXJkLWJhc2VcIl0nKS5kYXRhc2V0LmFzc2V0VXJsKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kQXNzZXRVcmw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9XCJhc3NldF91cmxcIl0nKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZEFzc2V0VXJsID0gdGhpcy52YWxpZGF0ZUJhc2VVcmwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9XCJhc3NldF91cmxcIl0nKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZEFzc2V0VXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsUGFydHMgPSBbXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wsXG4gICAgICAgICAgICAnLy8nLFxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhvc3QsXG4gICAgICAgICAgICAnLycsXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuZm91bmRBc3NldFVybCA9IHVybFBhcnRzLmpvaW4oJycpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmZvdW5kQXNzZXRVcmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGVzIHRoZSBiYXNlIFVSTCwgZW5zdXJpbmcgaXQgaXMgYSBIVFRQL0hUVFBzIFVSTC5cbiAgICAgKlxuICAgICAqIElmIHRoZSBTbm93Ym9hcmQgc2NyaXB0IG9yIDxiYXNlPiB0YWcgb24gdGhlIHBhZ2UgdXNlIGEgZGlmZmVyZW50IHR5cGUgb2YgVVJMLCB0aGlzIHdpbGwgZmFpbCB3aXRoXG4gICAgICogYW4gZXJyb3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICB2YWxpZGF0ZUJhc2VVcmwodXJsKSB7XG4gICAgICAgIGNvbnN0IHVybFJlZ2V4ID0gL14oKFteOi8/I10rKTopPyhcXC9cXC8oW14vPyNdKikpPyhbXj8jXSopKFxcPyhbXiNdKikpPygjKC4qKSk/L2k7XG4gICAgICAgIGNvbnN0IHVybFBhcnRzID0gdXJsUmVnZXguZXhlYyh1cmwpO1xuICAgICAgICBjb25zdCBwcm90b2NvbCA9IHVybFBhcnRzWzJdO1xuICAgICAgICBjb25zdCBkb21haW4gPSB1cmxQYXJ0c1s0XTtcblxuICAgICAgICBpZiAocHJvdG9jb2wgJiYgWydodHRwJywgJ2h0dHBzJ10uaW5kZXhPZihwcm90b2NvbC50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBiYXNlIFVSTCBkZXRlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZG9tYWluKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYmFzZSBVUkwgZGV0ZWN0ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAodXJsLnN1YnN0cigtMSkgPT09ICcvJylcbiAgICAgICAgICAgID8gdXJsXG4gICAgICAgICAgICA6IGAke3VybH0vYDtcbiAgICB9XG59XG4iLCJpbXBvcnQgU25vd2JvYXJkIGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvbWFpbi9Tbm93Ym9hcmQnO1xuaW1wb3J0IFByb3h5SGFuZGxlciBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL21haW4vUHJveHlIYW5kbGVyJztcbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYWpheC9SZXF1ZXN0JztcbmltcG9ydCBBdHRyaWJ1dGVSZXF1ZXN0IGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYWpheC9oYW5kbGVycy9BdHRyaWJ1dGVSZXF1ZXN0JztcbmltcG9ydCBBc3NldExvYWRlciBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9Bc3NldExvYWRlcic7XG5pbXBvcnQgRGF0YUNvbmZpZyBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9EYXRhQ29uZmlnJztcbmltcG9ydCBTdHlsZXNoZWV0TG9hZGVyIGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL1N0eWxlc2hlZXRMb2FkZXInO1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvVHJhbnNpdGlvbic7XG5pbXBvcnQgRmxhc2ggZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvRmxhc2gnO1xuaW1wb3J0IEZsYXNoTGlzdGVuZXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvRmxhc2hMaXN0ZW5lcic7XG5pbXBvcnQgRm9ybVZhbGlkYXRpb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvRm9ybVZhbGlkYXRpb24nO1xuaW1wb3J0IEF0dGFjaExvYWRpbmcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvQXR0YWNoTG9hZGluZyc7XG5pbXBvcnQgU3RyaXBlTG9hZGVyIGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL1N0cmlwZUxvYWRlcic7XG5pbXBvcnQgVHJpZ2dlciBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9UcmlnZ2VyJztcblxuKCh3aW5kb3cpID0+IHtcbiAgICBjb25zdCBzbm93Ym9hcmQgPSBuZXcgUHJveHkoXG4gICAgICAgIG5ldyBTbm93Ym9hcmQodHJ1ZSwgdHJ1ZSksXG4gICAgICAgIFByb3h5SGFuZGxlcixcbiAgICApO1xuXG4gICAgLy8gQ292ZXIgYWxsIGFsaWFzZXNcbiAgICB3aW5kb3cuc25vd2JvYXJkID0gc25vd2JvYXJkO1xuICAgIHdpbmRvdy5Tbm93Ym9hcmQgPSBzbm93Ym9hcmQ7XG4gICAgd2luZG93LlNub3dCb2FyZCA9IHNub3dib2FyZDtcblxuICAgIHNub3dib2FyZC5hZGRQbHVnaW4oJ3JlcXVlc3QnLCBSZXF1ZXN0KTtcbiAgICBzbm93Ym9hcmQuYWRkUGx1Z2luKCdhdHRyaWJ1dGVSZXF1ZXN0JywgQXR0cmlidXRlUmVxdWVzdCk7XG4gICAgc25vd2JvYXJkLmFkZFBsdWdpbignYXNzZXRMb2FkZXInLCBBc3NldExvYWRlcik7XG4gICAgc25vd2JvYXJkLmFkZFBsdWdpbignZGF0YUNvbmZpZycsIERhdGFDb25maWcpO1xuICAgIHNub3dib2FyZC5hZGRQbHVnaW4oJ2V4dHJhc1N0eWxlcycsIFN0eWxlc2hlZXRMb2FkZXIpO1xuICAgIHNub3dib2FyZC5hZGRQbHVnaW4oJ3RyYW5zaXRpb24nLCBUcmFuc2l0aW9uKTtcbiAgICBzbm93Ym9hcmQuYWRkUGx1Z2luKCdmbGFzaCcsIEZsYXNoKTtcbiAgICBzbm93Ym9hcmQuYWRkUGx1Z2luKCdmbGFzaExpc3RlbmVyJywgRmxhc2hMaXN0ZW5lcik7XG4gICAgc25vd2JvYXJkLmFkZFBsdWdpbignZm9ybVZhbGlkYXRpb24nLCBGb3JtVmFsaWRhdGlvbik7XG4gICAgc25vd2JvYXJkLmFkZFBsdWdpbignYXR0YWNoTG9hZGluZycsIEF0dGFjaExvYWRpbmcpO1xuICAgIHNub3dib2FyZC5hZGRQbHVnaW4oJ3N0cmlwZUxvYWRlcicsIFN0cmlwZUxvYWRlcik7XG4gICAgc25vd2JvYXJkLmFkZFBsdWdpbigndHJpZ2dlcicsIFRyaWdnZXIpO1xuXG4gICAgc25vd2JvYXJkLm9uKCdyZWFkeScsICgpID0+IHtcbiAgICAgICAgLy8gU2NhbiBmb3IgdHJpZ2dlcnNcbiAgICAgICAgQXJyYXlcbiAgICAgICAgICAgIC5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSlcbiAgICAgICAgICAgIC5maWx0ZXIoKGVsZW1lbnQpID0+IFsuLi5lbGVtZW50LmF0dHJpYnV0ZXNdLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoeyBuYW1lIH0pID0+IG5hbWUuc3RhcnRzV2l0aChcImRhdGEtdHJpZ2dlci1cIikpLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHNub3dib2FyZC50cmlnZ2VyKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59KSh3aW5kb3cpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyohIGpzLWNvb2tpZSB2My4wLjUgfCBNSVQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXZhciAqL1xuZnVuY3Rpb24gYXNzaWduICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXRcbn1cbi8qIGVzbGludC1lbmFibGUgbm8tdmFyICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXZhciAqL1xudmFyIGRlZmF1bHRDb252ZXJ0ZXIgPSB7XG4gIHJlYWQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZVswXSA9PT0gJ1wiJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8oJVtcXGRBLUZdezJ9KSsvZ2ksIGRlY29kZVVSSUNvbXBvbmVudClcbiAgfSxcbiAgd3JpdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLnJlcGxhY2UoXG4gICAgICAvJSgyWzM0NkJGXXwzW0FDLUZdfDQwfDVbQkRFXXw2MHw3W0JDRF0pL2csXG4gICAgICBkZWNvZGVVUklDb21wb25lbnRcbiAgICApXG4gIH1cbn07XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXZhciAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cblxuZnVuY3Rpb24gaW5pdCAoY29udmVydGVyLCBkZWZhdWx0QXR0cmlidXRlcykge1xuICBmdW5jdGlvbiBzZXQgKG5hbWUsIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF0dHJpYnV0ZXMgPSBhc3NpZ24oe30sIGRlZmF1bHRBdHRyaWJ1dGVzLCBhdHRyaWJ1dGVzKTtcblxuICAgIGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuICAgICAgYXR0cmlidXRlcy5leHBpcmVzID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGU1KTtcbiAgICB9XG4gICAgaWYgKGF0dHJpYnV0ZXMuZXhwaXJlcykge1xuICAgICAgYXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgbmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKVxuICAgICAgLnJlcGxhY2UoLyUoMlszNDZCXXw1RXw2MHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KVxuICAgICAgLnJlcGxhY2UoL1soKV0vZywgZXNjYXBlKTtcblxuICAgIHZhciBzdHJpbmdpZmllZEF0dHJpYnV0ZXMgPSAnJztcbiAgICBmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJzsgJyArIGF0dHJpYnV0ZU5hbWU7XG5cbiAgICAgIGlmIChhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIENvbnNpZGVycyBSRkMgNjI2NSBzZWN0aW9uIDUuMjpcbiAgICAgIC8vIC4uLlxuICAgICAgLy8gMy4gIElmIHRoZSByZW1haW5pbmcgdW5wYXJzZWQtYXR0cmlidXRlcyBjb250YWlucyBhICV4M0IgKFwiO1wiKVxuICAgICAgLy8gICAgIGNoYXJhY3RlcjpcbiAgICAgIC8vIENvbnN1bWUgdGhlIGNoYXJhY3RlcnMgb2YgdGhlIHVucGFyc2VkLWF0dHJpYnV0ZXMgdXAgdG8sXG4gICAgICAvLyBub3QgaW5jbHVkaW5nLCB0aGUgZmlyc3QgJXgzQiAoXCI7XCIpIGNoYXJhY3Rlci5cbiAgICAgIC8vIC4uLlxuICAgICAgc3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc9JyArIGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0uc3BsaXQoJzsnKVswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKGRvY3VtZW50LmNvb2tpZSA9XG4gICAgICBuYW1lICsgJz0nICsgY29udmVydGVyLndyaXRlKHZhbHVlLCBuYW1lKSArIHN0cmluZ2lmaWVkQXR0cmlidXRlcylcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldCAobmFtZSkge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8IChhcmd1bWVudHMubGVuZ3RoICYmICFuYW1lKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gVG8gcHJldmVudCB0aGUgZm9yIGxvb3AgaW4gdGhlIGZpcnN0IHBsYWNlIGFzc2lnbiBhbiBlbXB0eSBhcnJheVxuICAgIC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLlxuICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llID8gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpIDogW107XG4gICAgdmFyIGphciA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBhcnRzID0gY29va2llc1tpXS5zcGxpdCgnPScpO1xuICAgICAgdmFyIHZhbHVlID0gcGFydHMuc2xpY2UoMSkuam9pbignPScpO1xuXG4gICAgICB0cnkge1xuICAgICAgICB2YXIgZm91bmQgPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMF0pO1xuICAgICAgICBqYXJbZm91bmRdID0gY29udmVydGVyLnJlYWQodmFsdWUsIGZvdW5kKTtcblxuICAgICAgICBpZiAobmFtZSA9PT0gZm91bmQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIHJldHVybiBuYW1lID8gamFyW25hbWVdIDogamFyXG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShcbiAgICB7XG4gICAgICBzZXQsXG4gICAgICBnZXQsXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIChuYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHNldChcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgICcnLFxuICAgICAgICAgIGFzc2lnbih7fSwgYXR0cmlidXRlcywge1xuICAgICAgICAgICAgZXhwaXJlczogLTFcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHdpdGhBdHRyaWJ1dGVzOiBmdW5jdGlvbiAoYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm4gaW5pdCh0aGlzLmNvbnZlcnRlciwgYXNzaWduKHt9LCB0aGlzLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZXMpKVxuICAgICAgfSxcbiAgICAgIHdpdGhDb252ZXJ0ZXI6IGZ1bmN0aW9uIChjb252ZXJ0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGluaXQoYXNzaWduKHt9LCB0aGlzLmNvbnZlcnRlciwgY29udmVydGVyKSwgdGhpcy5hdHRyaWJ1dGVzKVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgYXR0cmlidXRlczogeyB2YWx1ZTogT2JqZWN0LmZyZWV6ZShkZWZhdWx0QXR0cmlidXRlcykgfSxcbiAgICAgIGNvbnZlcnRlcjogeyB2YWx1ZTogT2JqZWN0LmZyZWV6ZShjb252ZXJ0ZXIpIH1cbiAgICB9XG4gIClcbn1cblxudmFyIGFwaSA9IGluaXQoZGVmYXVsdENvbnZlcnRlciwgeyBwYXRoOiAnLycgfSk7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXZhciAqL1xuXG5leHBvcnQgeyBhcGkgYXMgZGVmYXVsdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiL2Fzc2V0cy9qcy9hcHBcIjogMCxcblx0XCJhc3NldHMvY3NzL3RoZW1lXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3dpbnRlcmNtc193b3Jrc2hvcF90aGVtZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3aW50ZXJjbXNfd29ya3Nob3BfdGhlbWVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJhc3NldHMvY3NzL3RoZW1lXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL2pzL3NyYy9hcHAuanNcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJhc3NldHMvY3NzL3RoZW1lXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL2Nzcy9iYXNlLmNzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIlBsdWdpbkJhc2UiLCJzbm93Ym9hcmQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbnN0cnVjdCIsImRlcGVuZGVuY2llcyIsImxpc3RlbnMiLCJkZXN0cnVjdCIsImRldGFjaCIsImRlc3RydWN0b3IiLCJkZWZhdWx0IiwiU2luZ2xldG9uIiwiX1BsdWdpbkJhc2UiLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2luaGVyaXRzIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImlzQXJyYXkiLCJvd25LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfZGVmaW5lUHJvcGVydGllcyIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2dldFByb3RvdHlwZU9mIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiYmluZCIsIl9zZXRQcm90b3R5cGVPZiIsIlJlcXVlc3QiLCJlbGVtZW50IiwiaGFuZGxlciIsIm9wdGlvbnMiLCJfdGhpcyIsImlzSGFuZGxlck5hbWUiLCJtYXRjaGVkRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbmNhdCIsImZldGNoT3B0aW9ucyIsInJlc3BvbnNlRGF0YSIsInJlc3BvbnNlRXJyb3IiLCJjYW5jZWxsZWQiLCJjaGVja1JlcXVlc3QiLCJnbG9iYWxFdmVudCIsImV2ZW50IiwiRXZlbnQiLCJjYW5jZWxhYmxlIiwicmVxdWVzdCIsImRpc3BhdGNoRXZlbnQiLCJkZWZhdWx0UHJldmVudGVkIiwiZG9DbGllbnRWYWxpZGF0aW9uIiwiY29uZmlybSIsImRvQ29uZmlybSIsImNvbmZpcm1lZCIsImRvQWpheCIsInJlc3BvbnNlIiwicHJvY2Vzc1VwZGF0ZSIsIlhfV0lOVEVSX1NVQ0NFU1MiLCJwcm9jZXNzRXJyb3IiLCJwcm9jZXNzUmVzcG9uc2UiLCJlcnJvciIsIkVsZW1lbnQiLCJ1bmRlZmluZWQiLCJnZXRGZXRjaCIsImhlYWRlcnMiLCJib2R5IiwiZGF0YSIsInJlZGlyZWN0IiwibW9kZSIsImZldGNoIiwidXJsIiwiYnJvd3NlclZhbGlkYXRlIiwiZm9ybSIsImNoZWNrVmFsaWRpdHkiLCJyZXBvcnRWYWxpZGl0eSIsIl90aGlzMiIsImFqYXhQcm9taXNlIiwicmVqZWN0Iiwib2siLCJzdGF0dXMiLCJoYXMiLCJnZXQiLCJpbmNsdWRlcyIsImpzb24iLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwicmVuZGVyRXJyb3IiLCJmaWxlIiwibGluZSIsInRyYWNlIiwidGV4dCIsInJlc3BvbnNlVGV4dCIsIlhfV0lOVEVSX1JFU1BPTlNFX0NPREUiLCJwcm9taXNlIiwiX3RoaXMzIiwiYmVmb3JlVXBkYXRlIiwicGFydGlhbHMiLCJlbnRyaWVzIiwiZW50cnkiLCJfZW50cnkiLCJzdWJzdHIiLCJYX1dJTlRFUl9BU1NFVFMiLCJwcm9jZXNzQXNzZXRzIiwicHJvbWlzZXMiLCJnbG9iYWxQcm9taXNlRXZlbnQiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImRvVXBkYXRlIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3RoaXM0IiwiYWZmZWN0ZWQiLCJfZW50cnkyIiwicGFydGlhbCIsImNvbnRlbnQiLCJzZWxlY3RvciIsInVwZGF0ZSIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImlubmVySFRNTCIsInN1Y2Nlc3MiLCJmbGFzaCIsIlhfV0lOVEVSX0ZMQVNIX01FU1NBR0VTIiwicHJvY2Vzc0ZsYXNoTWVzc2FnZXMiLCJYX1dJTlRFUl9SRURJUkVDVCIsInByb2Nlc3NSZWRpcmVjdCIsInByb2Nlc3NFcnJvck1lc3NhZ2UiLCJza2lwRXJyb3IiLCJYX1dJTlRFUl9FUlJPUl9GSUVMRFMiLCJwcm9jZXNzVmFsaWRhdGlvbkVycm9ycyIsIlhfV0lOVEVSX0VSUk9SX01FU1NBR0UiLCJfdGhpczUiLCJoYW5kbGVSZWRpcmVjdFJlc3BvbnNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUV2ZW50IiwiZXZlbnROYW1lIiwib25jZSIsImxvY2F0aW9uIiwiYXNzaWduIiwiaGFuZGxlRXJyb3JNZXNzYWdlIiwiYWxlcnQiLCJtZXNzYWdlcyIsImhhbmRsZUZsYXNoTWVzc2FnZXMiLCJmaWVsZHMiLCJoYW5kbGVWYWxpZGF0aW9uRXJyb3JzIiwiYXNzZXRzIiwiX2RvQ29uZmlybSIsIl9jYWxsZWUyIiwiZnVsZmlsbGVkIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiaGFuZGxlQ29uZmlybU1lc3NhZ2UiLCJsaXN0ZW5zVG9FdmVudCIsInQwIiwidGFnTmFtZSIsImNsb3Nlc3QiLCJleHRyYWN0UGFydGlhbHMiLCJ4c3JmVG9rZW4iLCJsb2FkaW5nIiwiaHJlZiIsImZpbGVzIiwiRm9ybURhdGEiLCJkZWJ1ZyIsImNvb2tpZSIsImZvcm1EYXRhIiwiX2VudHJ5MyIsImFwcGVuZCIsImpvaW4iLCJBdHRyaWJ1dGVSZXF1ZXN0IiwiX1NpbmdsZXRvbiIsInJlYWR5IiwiYWpheFNldHVwIiwiYXR0YWNoSGFuZGxlcnMiLCJkaXNhYmxlRGVmYXVsdEZvcm1WYWxpZGF0aW9uIiwiZGV0YWNoSGFuZGxlcnMiLCJfZ2V0IiwiY2hhbmdlSGFuZGxlciIsImNsaWNrSGFuZGxlciIsImtleURvd25IYW5kbGVyIiwic3VibWl0SGFuZGxlciIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJtYXRjaGVzIiwicHJvY2Vzc1JlcXVlc3RPbkVsZW1lbnQiLCJjdXJyZW50RWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkVHlwZXMiLCJpbmRleE9mIiwiZ2V0QXR0cmlidXRlIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwidHJhY2tJbnB1dCIsImRhdGFzZXQiLCJyZXF1ZXN0Q29uZmlybSIsInJlcXVlc3RSZWRpcmVjdCIsInJlcXVlc3RMb2FkaW5nIiwicmVxdWVzdEZvcm0iLCJyZXF1ZXN0VXJsIiwicGFyc2VEYXRhIiwicmVxdWVzdFVwZGF0ZSIsInJlcXVlc3REYXRhIiwib25BamF4U2V0dXAiLCJmaWVsZE5hbWUiLCJnZXRQYXJlbnRSZXF1ZXN0RGF0YSIsImVsZW1lbnREYXRhIiwianNvbnBhcnNlciIsInBhcnNlIiwibGFzdFZhbHVlIiwiaW50ZXJ2YWwiLCJyZXNldFRyYWNrSW5wdXRUaW1lciIsImlucHV0VGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfbiIsIkYiLCJBc3NldExvYWRlciIsImFqYXhMb2FkQXNzZXRzIiwiX2xvYWQiLCJfaXRlcmF0b3IiLCJfc3RlcCIsInNjcmlwdCIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJzdHlsZSIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJpbWFnZSIsImpzIiwibG9hZFNjcmlwdCIsInQxIiwiY3NzIiwibG9hZFN0eWxlIiwidDIiLCJ0MyIsImltZyIsImxvYWRJbWFnZSIsInQ0IiwidDUiLCJsb2FkIiwiX3giLCJhc3NldCIsImxvYWRlZCIsImRvbVNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJkb21Dc3MiLCJoZWFkIiwiSW1hZ2UiLCJzcmMiLCJBdHRhY2hMb2FkaW5nIiwiYWpheFN0YXJ0IiwiYWpheERvbmUiLCJsb2FkRWxlbWVudHMiLCJjbGFzc0xpc3QiLCJhZGQiLCJnZXRMb2FkaW5nQ2xhc3MiLCJhdHRhY2hMb2FkaW5nIiwicmVtb3ZlIiwiRGF0YUNvbmZpZyIsImluc3RhbmNlIiwibG9jYWxDb25maWciLCJIVE1MRWxlbWVudCIsImluc3RhbmNlQ29uZmlnIiwiYWNjZXB0ZWRDb25maWdzIiwicmVmcmVzaCIsImNvbmZpZyIsInNldCIsInBlcnNpc3QiLCJnZXRBY2NlcHRlZENvbmZpZ3MiLCJwcm9jZXNzQ29uZmlnIiwiYWNjZXB0QWxsRGF0YUNvbmZpZ3MiLCJkZWZhdWx0cyIsImdldERlZmF1bHRzIiwiY29lcmNlVmFsdWUiLCJzdHJpbmdWYWx1ZSIsInN0YXJ0c1dpdGgiLCJiYXNlNjRzdHIiLCJyZXBsYWNlIiwiZGVjb2RlZCIsImF0b2IiLCJ0b0xvd2VyQ2FzZSIsImpzb25QYXJzZXIiLCJGbGFzaCIsImR1cmF0aW9uIiwiY2xlYXIiLCJ0aW1lciIsImZsYXNoVGltZXIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzdG9wVGltZXIiLCJzdGFydFRpbWVyIiwiYXBwZW5kQ2hpbGQiLCJ0cmFuc2l0aW9uIiwidGltZXJUcmFucyIsImNhbmNlbCIsIkZsYXNoTGlzdGVuZXIiLCJhamF4RXJyb3JNZXNzYWdlIiwiYWpheEZsYXNoTWVzc2FnZXMiLCJmbGFzaFR5cGUiLCJmbGFzaER1cmF0aW9uIiwiY3NzQ2xhc3MiLCJGb3JtVmFsaWRhdGlvbiIsImVycm9yQmFncyIsImFqYXhWYWxpZGF0aW9uRXJyb3JzIiwiY29sbGVjdEVycm9yQmFncyIsImRvVmFsaWRhdGlvbiIsImludmFsaWRGaWVsZHMiLCJyZXF1ZXN0VmFsaWRhdGUiLCJlcnJvckJhZyIsInNob3dFcnJvckJhZyIsImNsZWFyVmFsaWRhdGlvbiIsImhpZGVFcnJvckJhZyIsInJvb3ROb2RlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwibWVzc2FnZUxpc3RFbGVtZW50IiwicGxhY2Vob2xkZXIiLCJjcmVhdGVDb21tZW50IiwiZXJyb3JCYWdEYXRhIiwidmFsaWRhdGVGb3IiLCJzcGxpdCIsImNsb25lTm9kZSIsIm1lc3NhZ2VMaXN0QW5jaG9yIiwiY3VzdG9tTWVzc2FnZSIsInRleHRDb250ZW50IiwiY2hpbGROb2RlcyIsInJlcGxhY2VDaGlsZCIsImlzQ29ubmVjdGVkIiwiZXJyb3JCYWdWYWxpZGF0ZXNGaWVsZCIsImZpcnN0RmllbGQiLCJmaWVsZCIsInNoaWZ0IiwiX2ludmFsaWRGaWVsZHMkZmlyc3RGIiwiZXJyb3JzIiwibWVzc2FnZUVsZW1lbnQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImFmdGVyIiwiX2ludmFsaWRGaWVsZHMkT2JqZWN0IiwiU3RyaXBlTG9hZGVyIiwiY291bnRlciIsImNyZWF0ZVN0cmlwZSIsInN0cmlwZSIsInNob3ciLCJoaWRlIiwiaW5kaWNhdG9yIiwic3RyaXBlTG9hZGVkIiwibmV3U3RyaXBlIiwiZm9yY2UiLCJTdHlsZXNoZWV0TG9hZGVyIiwic3R5bGVzTG9hZGVkIiwiZW5kc1dpdGgiLCJzdHlsZXNoZWV0IiwiVHJhbnNpdGlvbiIsImNhbGxiYWNrIiwidHJhaWxUbyIsInBhcnNlRHVyYXRpb24iLCJkb1RyYW5zaXRpb24iLCJldmVudENsYXNzZXMiLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJhY3RpdmUiLCJvdXQiLCJyZXR1cm5DbGFzc2VzIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwicmVzZXRDbGFzc2VzIiwiZXZlbnRDbGFzcyIsImdldENvbXB1dGVkU3R5bGUiLCJvblRyYW5zaXRpb25FbmQiLCJwYXJzZWQiLCJleGVjIiwiYW1vdW50IiwidW5pdCIsIk1hdGgiLCJmbG9vciIsIlRyaWdnZXIiLCJ0cmlnZ2VycyIsIk1hcCIsImV2ZW50cyIsImNvbm5lY3RvcnMiLCJwYXJzZVRyaWdnZXJzIiwic2l6ZSIsInJlc2V0RXZlbnRzIiwiY3JlYXRlVHJpZ2dlckV2ZW50cyIsInJ1bkV2ZW50cyIsImRhc2hTdHlsZSIsIm1hdGNoIiwidHJpZ2dlclBhcnRzIiwidHJpZ2dlck5hbWUiLCJ0cmlnZ2VyVHlwZSIsIl90cmlnZ2VyUGFydHMiLCJ0cmlnZ2VyIiwiZ2V0U2VsZWN0YWJsZUVsZW1lbnRzIiwiaXNWYWxpZENvbmRpdGlvbiIsImlzVmFsaWRBY3Rpb24iLCJwYXJzZUNvbW1hbmQiLCJjb21tYW5kIiwidHJpbSIsInNwbGl0VmFsdWVzIiwicXVvdGVkIiwibWFwIiwic3BsaXRWYWx1ZSIsIl90b0NvbnN1bWFibGVBcnJheSIsInBhcmFtZXRlcnMiLCJfY29tbWFuZCRzcGxpdCIsIl9jb21tYW5kJHNwbGl0MiIsIl9wYXJhbWV0ZXJzJCIsIl90aGlzMiRwYXJzZUNvbW1hbmQiLCJjcmVhdGVWYWx1ZUV2ZW50IiwiY3JlYXRlRW1wdHlFdmVudCIsImNyZWF0ZUNoZWNrZWRFdmVudCIsImFsbCIsInN1cHBvcnRlZEVsZW1lbnRzIiwiU2V0IiwidGhpc0V2ZW50IiwiZWxlbWVudFZhbHVlcyIsImNoZWNrZWQiLCJldmVyeSIsImV4ZWN1dGVBY3Rpb24iLCJzb21lIiwiYWRkRXZlbnQiLCJhdExlYXN0IiwiYXRMZWFzdENvdW50IiwiX3RoaXM2IiwicHJpb3JpdHkiLCJlbGVtZW50RXZlbnQiLCJzb3J0IiwiYiIsImVsZW1lbnRDb25uZWN0b3JzIiwiY29ubmVjdG9yIiwiY29uZGl0aW9uTWV0IiwiX3RoaXMkcGFyc2VDb21tYW5kIiwiYWN0aW9uU2hvdyIsImRpc3BsYXkiLCJvcmlnaW5hbERpc3BsYXkiLCJhZnRlckFjdGlvbiIsInByb3AiLCJyZWNlaXZlciIsInByb3BMb3dlciIsImhhc1BsdWdpbiIsIl9SZWZsZWN0JGdldCRwcm9wTG93ZSIsImdldEluc3RhbmNlIiwiSW5uZXJQcm94eUhhbmRsZXIiLCJQbHVnaW5Mb2FkZXIiLCJQcm94eSIsImZyZWV6ZSIsImluc3RhbmNlcyIsInNpbmdsZXRvbiIsImluaXRpYWxpc2VkIiwic2VhbCIsIm1vY2tzIiwib3JpZ2luYWxGdW5jdGlvbnMiLCJoYXNNZXRob2QiLCJtZXRob2ROYW1lIiwiaXNGdW5jdGlvbiIsImNhbGxNZXRob2QiLCJfbGVuMiIsIl9rZXkyIiwiZGVwZW5kZW5jaWVzRnVsZmlsbGVkIiwidW5tZXQiLCJnZXREZXBlbmRlbmNpZXMiLCJpdGVtIiwiZ2V0UGx1Z2luTmFtZXMiLCJpc1NpbmdsZXRvbiIsImluaXRpYWxpc2VTaW5nbGV0b24iLCJfbGVuMyIsInBhcmFtcyIsIl9rZXkzIiwiX2VudHJ5NCIsIl9sZW40IiwiX2tleTQiLCJuZXdJbnN0YW5jZSIsIl9jb25zdHJ1Y3QiLCJzcGxpY2UiLCJnZXRJbnN0YW5jZXMiLCJpc0luaXRpYWxpc2VkIiwiX2xlbjUiLCJfa2V5NSIsInBsdWdpbiIsIm1vY2siLCJfbGVuNiIsIl9rZXk2IiwidW5tb2NrIiwiQ29va2llIiwiSnNvblBhcnNlciIsIlNhbml0aXplciIsIlVybCIsIlNub3dib2FyZCIsImF1dG9TaW5nbGV0b25zIiwiZGVidWdFbmFibGVkIiwiYXV0b0luaXRTaW5nbGV0b25zIiwicGx1Z2lucyIsImxpc3RlbmVycyIsImZvdW5kQmFzZVVybCIsInJlYWRpbmVzcyIsImRvbSIsImF0dGFjaEFic3RyYWN0cyIsImxvYWRVdGlsaXRpZXMiLCJpbml0aWFsaXNlIiwiYWRkUGx1Z2luIiwiaW5pdGlhbGlzZVNpbmdsZXRvbnMiLCJsb3dlck5hbWUiLCJnZXRQbHVnaW5zIiwicmVhZHlNZXRob2QiLCJyZW1vdmVQbHVnaW4iLCJnZXRQbHVnaW4iLCJvbiIsIm9mZiIsImluZGV4IiwibGlzdGVuTWV0aG9kIiwicmVzdWx0IiwibGlzdGVuZXIiLCJpbnN0YW5jZVByb21pc2UiLCJsaXN0ZW5lclByb21pc2UiLCJsb2dNZXNzYWdlIiwiY29sb3IiLCJib2xkIiwiY29uc29sZSIsImdyb3VwQ29sbGFwc2VkIiwicGFyYW0iLCJsb2ciLCJncm91cEVuZCIsIkJhc2VDb29raWUiLCJleHBpcmVzIiwicGF0aCIsImRvbWFpbiIsInNlY3VyZSIsInNhbWVTaXRlIiwic2V0RGVmYXVsdHMiLCJjb29raWVzIiwiY29va2llTmFtZSIsImNvb2tpZVZhbHVlIiwibmV3VmFsdWUiLCJzYXZlVmFsdWUiLCJ3bkpTT04iLCJvY0pTT04iLCJzdHIiLCJqc29uU3RyaW5nIiwicGFyc2VTdHJpbmciLCJKU09OIiwibnVtIiwiaXNCbGFua0NoYXIiLCJwYXJzZUtleSIsImNhbkJlS2V5SGVhZCIsImdldEJvZHkiLCJvcmlnaW5MZW5ndGgiLCJsYXN0IiwicG9zIiwic3RhY2siLCJxdW90ZSIsImNoIiwiY2hhckNvZGVBdCIsInduU2FuaXRpemUiLCJodG1sIiwic2FuaXRpemUiLCJvY1Nhbml0aXplIiwiYm9keU9ubHkiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJyZXR1cm5Cb2R5T25seSIsInNhbml0aXplTm9kZSIsImdldFJvb3ROb2RlIiwibm9kZSIsInRyaW1BdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJjaGlsZCIsImF0dHJpYnV0ZXMiLCJhdHRyTmFtZSIsImF0dHJWYWx1ZSIsImZvdW5kQXNzZXRVcmwiLCJiYXNlVXJsIiwiYXNzZXRVcmwiLCJ0byIsInVybFJlZ2V4IiwidGhlVXJsIiwidmFsaWRhdGVCYXNlVXJsIiwidXJsUGFydHMiLCJwcm90b2NvbCIsImhvc3QiLCJQcm94eUhhbmRsZXIiLCJTbm93Qm9hcmQiLCJfcmVmIl0sInNvdXJjZVJvb3QiOiIifQ==